/* Singabldr boot script (externalized to satisfy strict CSP without 'unsafe-inline'). */
(function singabldrBoot() {
  "use strict";

  /** @param {() => void} fn */
  function safe(fn) {
    try {
      fn();
    } catch {
      // Intentionally ignore (boot code must never block app init).
    }
  }

  // Shared coalesced scheduler (single keyspace) to suppress repeated churn
  // across runtime + persistence subscriptions (storage events, UI toggles, etc).
  function createCoalescedScheduler() {
    /** @type {Map<string, () => void>} */
    var pending = new Map();
    var scheduled = false;

    function flush() {
      scheduled = false;
      if (pending.size === 0) return;
      var tasks = Array.from(pending.entries());
      pending.clear();
      for (var i = 0; i < tasks.length; i++) {
        try {
          tasks[i][1]();
        } catch {
          // ignore
        }
      }
    }

    /** @param {string} key @param {() => void} fn */
    function schedule(key, fn) {
      pending.set(String(key || "default"), fn);
      if (scheduled) return;
      scheduled = true;
      // microtask: coalesce bursts without adding frame latency
      Promise.resolve().then(flush);
    }

    return schedule;
  }

  var coalesce = createCoalescedScheduler();
  safe(function exposeCoalescer() {
    try {
      window.__SINGABLDR_COALESCE = coalesce;
    } catch {
      // ignore
    }
  });

  // Persistence churn guard: avoid writing the same value repeatedly.
  // This reduces stringify/parse churn and suppresses redundant subscriptions in
  // libraries that observe storage writes.
  safe(function hardenStorageSetItem() {
    if (typeof Storage === "undefined" || !Storage || !Storage.prototype) return;
    var proto = Storage.prototype;
    var origSet = proto.setItem;
    var origRemove = proto.removeItem;
    if (typeof origSet !== "function" || typeof origRemove !== "function") return;

    proto.setItem = function (k, v) {
      try {
        var key = String(k);
        var next = String(v);
        var prev = this.getItem(key);
        if (prev === next) return;
      } catch {
        // ignore
      }
      return origSet.call(this, k, v);
    };

    proto.removeItem = function (k) {
      try {
        var key = String(k);
        var prev2 = this.getItem(key);
        if (prev2 == null) return;
      } catch {
        // ignore
      }
      return origRemove.call(this, k);
    };
  });

  // Persistence subscription churn guard: coalesce bursts of 'storage' events.
  safe(function coalesceStorageEvents() {
    if (typeof window.addEventListener !== "function" || typeof window.removeEventListener !== "function") return;
    var origAdd = window.addEventListener.bind(window);
    var origRemove = window.removeEventListener.bind(window);

    /** @type {WeakMap<EventListenerOrEventListenerObject, {wrapped: any, options: any}>} */
    var storageListenerMap = new WeakMap();

    window.addEventListener = function (type, listener, options) {
      if (type !== "storage" || !listener) return origAdd(type, listener, options);

      // Normalize listener into a callable function (EventListenerObject support).
      var fn =
        typeof listener === "function"
          ? listener
          : typeof listener === "object" && typeof listener.handleEvent === "function"
            ? function (ev) {
                listener.handleEvent(ev);
              }
            : null;
      if (!fn) return origAdd(type, listener, options);

      var wrapped = function (ev) {
        var k = "";
        try {
          k = ev && typeof ev.key === "string" ? ev.key : "";
        } catch {
          k = "";
        }
        coalesce("storage:" + k, function () {
          fn(ev);
        });
      };

      try {
        storageListenerMap.set(listener, { wrapped: wrapped, options: options });
      } catch {
        // ignore
      }
      return origAdd(type, wrapped, options);
    };

    window.removeEventListener = function (type, listener, options) {
      if (type !== "storage" || !listener) return origRemove(type, listener, options);
      var entry = null;
      try {
        entry = storageListenerMap.get(listener) || null;
      } catch {
        entry = null;
      }
      if (entry && entry.wrapped) return origRemove(type, entry.wrapped, options || entry.options);
      return origRemove(type, listener, options);
    };
  });

  safe(function redirectKnowgrphIfNeeded() {
    var path = String(window.location && window.location.pathname ? window.location.pathname : "");
    if (path === "/knowgrph" || path === "/knowgrph/") {
      window.location.replace("/content/knowgrph/");
    }
  });

  safe(function normalizeSingabldrBasePath() {
    // When served at /singabldr (no trailing slash), relative URLs resolve as if
    // "/singabldr" were a file, causing ./assets and ./boards to 404.
    // Enforce the directory form to keep relative URLs stable.
    var path = String(window.location && window.location.pathname ? window.location.pathname : "");
    if (path === "/singabldr") {
      window.location.replace("/singabldr/");
      return;
    }
    if (path === "/content/singabldr") {
      window.location.replace("/content/singabldr/");
      return;
    }
  });

  safe(function setApiBase() {
    // Backend API base (DeerFlow gateway behind nginx). Keep secrets server-side.
    //
    // Priority:
    //  1) URL override: ?apiBase=http://localhost:2026 (persist to localStorage)
    //  2) localStorage override
    //  3) localhost default (dev)
    //  4) production default
    //
    // This avoids editing files for local dev while keeping a safe default for production.
    var LS_KEY = "singabldr.apiBase";
    var url = null;
    try {
      url = new URL(window.location.href);
    } catch {
      url = null;
    }

    /** @param {string} raw */
    function normalizeBase(raw) {
      var s = String(raw || "").trim();
      if (!s) return "";
      // Only allow explicit http(s) origins.
      if (!(s.startsWith("http://") || s.startsWith("https://"))) return "";
      // Strip trailing slash for stable joining.
      return s.endsWith("/") ? s.slice(0, -1) : s;
    }

    var paramBase = "";
    try {
      if (url) paramBase = normalizeBase(url.searchParams.get("apiBase") || url.searchParams.get("api") || "");
    } catch {
      paramBase = "";
    }

    if (paramBase) {
      try {
        localStorage.setItem(LS_KEY, paramBase);
      } catch {
        // ignore
      }
      window.__API_BASE = paramBase;
      return;
    }

    var storedBase = "";
    try {
      storedBase = normalizeBase(localStorage.getItem(LS_KEY) || "");
    } catch {
      storedBase = "";
    }
    if (storedBase) {
      window.__API_BASE = storedBase;
      // Validate persisted base. If a different workspace hijacked the port,
      // clear it and fall back to auto-detection.
      try {
        var validateTimeout = 700;
        var controller2 = null;
        var signal2 = null;
        try {
          controller2 = new AbortController();
          signal2 = controller2.signal;
        } catch {
          controller2 = null;
          signal2 = null;
        }
        var timer2 = null;
        if (controller2) {
          timer2 = setTimeout(function () {
            try {
              controller2.abort();
            } catch {}
          }, validateTimeout);
        }
        window
          .fetch(storedBase + "/health", { method: "GET", mode: "cors", cache: "no-store", signal: signal2 })
          .then(function (res) {
            if (!res || !res.ok) throw new Error("health_not_ok");
            return res.text();
          })
          .then(function (txt) {
            var t = String(txt || "").toLowerCase();
            var ok =
              t.indexOf("deer-flow") >= 0 ||
              t.indexOf("\"service\":\"deer-flow-nginx\"") >= 0 ||
              t.indexOf("\"service\":\"deer-flow-gateway\"") >= 0;
            if (!ok) throw new Error("health_not_deerflow");
          })
          .catch(function () {
            try {
              localStorage.removeItem(LS_KEY);
            } catch {}
            // Re-run detection in the background.
            try {
              setTimeout(function () {
                try {
                  window.__API_BASE = "";
                } catch {}
              }, 0);
            } catch {}
          })
          .finally(function () {
            if (timer2) clearTimeout(timer2);
          });
      } catch {}
      // Continue boot without blocking; fetch hook will pick up updates.
      // Fall through to auto-detection only if no storedBase existed.
      return;
    }

    var isLocalhost = false;
    try {
      var host = String(window.location && window.location.hostname ? window.location.hostname : "");
      isLocalhost = host === "localhost" || host === "127.0.0.1";
    } catch {
      isLocalhost = false;
    }

    // Local dev default: use same-origin. A local dev server can proxy `/api/llm/*`
    // to DeerFlow (or another upstream) to avoid CORS + port conflicts.
    // Pages Functions deployment (recommended): keep `/api/llm/*` same-origin on airvio.co.
    // If you want a separate API host, set it via `?apiBase=` or localStorage `singabldr.apiBase`.
    window.__API_BASE = window.__API_BASE || window.location.origin;

    // Local dev hardening: auto-detect DeerFlow when the default port is occupied
    // by another workspace (commonly a Next/Vite server).
    //
    // We do NOT block initial boot; we update __API_BASE in the background and
    // persist to localStorage for subsequent requests.
    if (!isLocalhost) return;
    if (paramBase || storedBase) return;
    if (typeof window.fetch !== "function") return;

    function makeDeerflowCandidates() {
      // Probe a small port window because 2026 is commonly taken by other workspaces
      // (e.g. Next.js dev servers). Our `npm run hybrid` will auto-pick a free port.
      var ports = [8001, 2026, 2027, 2028, 3026];
      var out = [];
      for (var i = 0; i < ports.length; i++) {
        out.push("http://localhost:" + ports[i]);
        out.push("http://127.0.0.1:" + ports[i]);
      }
      return out;
    }

    var candidates = makeDeerflowCandidates();

    function looksLikeDeerFlowHealth(text) {
      var t = String(text || "").toLowerCase();
      if (!t) return false;
      return (
        t.indexOf("deer-flow") >= 0 ||
        t.indexOf("\"service\":\"deer-flow-nginx\"") >= 0 ||
        t.indexOf("\"service\":\"deer-flow-gateway\"") >= 0 ||
        t.indexOf("\"status\":\"healthy\"") >= 0
      );
    }

    function probe(base, timeoutMs) {
      var controller = null;
      var signal = null;
      try {
        controller = new AbortController();
        signal = controller.signal;
      } catch {
        controller = null;
        signal = null;
      }

      var timer = null;
      if (controller) {
        timer = setTimeout(function () {
          try {
            controller.abort();
          } catch {}
        }, timeoutMs);
      }

      return window
        .fetch(base + "/health", { method: "GET", mode: "cors", cache: "no-store", signal: signal })
        .then(function (res) {
          return res
            .text()
            .then(function (txt) {
              return { ok: res && res.ok, text: txt };
            })
            .catch(function () {
              return { ok: false, text: "" };
            });
        })
        .catch(function () {
          return { ok: false, text: "" };
        })
        .finally(function () {
          if (timer) clearTimeout(timer);
        });
    }

    (function detectAndPersistApiBase() {
      var i = 0;
      function next() {
        if (i >= candidates.length) return;
        var base = candidates[i++];
        probe(base, 600).then(function (result) {
          if (result && result.ok && looksLikeDeerFlowHealth(result.text)) {
            try {
              localStorage.setItem(LS_KEY, base);
            } catch {}
            window.__API_BASE = base;
            return;
          }
          next();
        });
      }
      // Run after other boot tasks schedule, without blocking.
      setTimeout(next, 0);
    })();
  });

  // Inject FlowinFish session header into API fetch calls (SSOT for unified LLM keys).
  // This ensures *all* browser → DeerFlow requests (including LangGraph SDK calls)
  // carry the same session id, so LangGraph runs can reuse the key provisioned
  // via Settings → AI Model.
  safe(function installFlowinfishSessionFetchHook() {
    if (typeof window.fetch !== "function") return;
    var LS_KEY = "singabldr.flowinfish.session_id";

    function getSessionId() {
      try {
        var existing = localStorage.getItem(LS_KEY);
        if (existing && typeof existing === "string" && existing.length >= 8) return existing;
      } catch {}
      var next = "";
      try {
        var buf = new Uint8Array(12);
        crypto.getRandomValues(buf);
        next = Array.from(buf)
          .map(function (b) {
            return b.toString(16).padStart(2, "0");
          })
          .join("");
      } catch {
        next = "sess_" + Math.random().toString(16).slice(2) + "_" + Date.now().toString(16);
      }
      try {
        localStorage.setItem(LS_KEY, next);
      } catch {}
      return next;
    }

    var orig = window.fetch.bind(window);
    window.fetch = function (input, init) {
      try {
        var apiBase = String(window.__API_BASE || "").trim();
        var url = typeof input === "string" ? input : input && input.url ? String(input.url) : "";
        if (apiBase && url && url.indexOf(apiBase) === 0) {
          var headers = (init && init.headers) || {};
          var merged = {};
          // Normalize headers to plain object; avoid churn and preserve existing values.
          if (headers && typeof Headers !== "undefined" && headers instanceof Headers) {
            headers.forEach(function (v, k) {
              merged[k] = v;
            });
          } else if (Array.isArray(headers)) {
            for (var i = 0; i < headers.length; i++) {
              merged[headers[i][0]] = headers[i][1];
            }
          } else if (headers && typeof headers === "object") {
            merged = Object.assign({}, headers);
          }
          if (!merged["X-FlowinFish-Session"] && !merged["x-flowinfish-session"]) {
            merged["X-FlowinFish-Session"] = getSessionId();
          }
          init = Object.assign({}, init || {}, { headers: merged });
        }
      } catch {
        // no-op
      }
      return orig(input, init);
    };
  });

  // Coalesced fetch dedupe + lightweight caching (boot-level, no bundle rebuild).
  // Goals:
  // - suppress repeated GETs during rapid switching (boards/scripts/config)
  // - share in-flight requests keyed by URL
  // - avoid churn from repeated JSON downloads
  safe(function installFetchDedupeAndCache() {
    if (typeof window.fetch !== "function") return;

    var orig = window.fetch.bind(window);

    /** @type {Map<string, Promise<Response>>} */
    var inflight = new Map();
    /** @type {Map<string, {at:number, ttl:number, resp:Response}>} */
    var cache = new Map();

    function now() {
      return Date.now();
    }

    function normalizeUrl(u) {
      try {
        return new URL(String(u), window.location.href).toString();
      } catch {
        return String(u);
      }
    }

    function getMethod(init) {
      try {
        return String((init && init.method) || "GET").toUpperCase();
      } catch {
        return "GET";
      }
    }

    function isCacheableGet(url) {
      // Only cache static JSON/config-ish endpoints (avoid caching dynamic API).
      // Keep it conservative to avoid stale UX.
      return (
        url.indexOf("/boards/") >= 0 ||
        url.indexOf("/script-") >= 0 ||
        url.indexOf("/flowinfish.") >= 0 ||
        url.indexOf("/api/llm/models") >= 0
      );
    }

    function ttlFor(url) {
      if (url.indexOf("/api/llm/models") >= 0) return 30 * 1000;
      if (url.indexOf("/flowinfish.") >= 0) return 60 * 1000;
      if (url.indexOf("/script-") >= 0) return 30 * 1000;
      if (url.indexOf("/boards/") >= 0) return 5 * 60 * 1000;
      return 0;
    }

    function cacheKey(method, url) {
      return method + " " + url;
    }

    window.fetch = function (input, init) {
      var method = getMethod(init);
      var url = normalizeUrl(typeof input === "string" ? input : input && input.url ? input.url : "");

      // Only operate on GET; leave POST streaming untouched.
      if (method !== "GET" || !url) {
        return orig(input, init);
      }

      var key = cacheKey(method, url);

      if (isCacheableGet(url)) {
        var entry = cache.get(key);
        if (entry && now() - entry.at <= entry.ttl) {
          try {
            return Promise.resolve(entry.resp.clone());
          } catch {
            cache.delete(key);
          }
        }
      }

      var existing = inflight.get(key);
      if (existing) {
        return existing.then(function (resp) {
          try {
            return resp.clone();
          } catch {
            return resp;
          }
        });
      }

      var p = orig(input, init)
        .then(function (resp) {
          try {
            if (resp && resp.ok && isCacheableGet(url)) {
              var ttl = ttlFor(url);
              if (ttl > 0) {
                cache.set(key, { at: now(), ttl: ttl, resp: resp.clone() });
              }
            }
          } catch {}
          return resp;
        })
        .finally(function () {
          inflight.delete(key);
          // Opportunistic cache trimming (avoid memory growth).
          if (cache.size > 64) {
            try {
              var cutoff = now() - 60 * 1000;
              cache.forEach(function (v, k2) {
                if (v.at < cutoff) cache.delete(k2);
              });
            } catch {}
          }
        });

      inflight.set(key, p);
      return p;
    };
  });

  safe(function wireSettingsCollapsibleLabels() {
    var root = document.getElementById("settings-modal");
    if (!root) return;

    var sections = root.querySelectorAll('details[data-collapsible="1"]');
    sections.forEach(function (details) {
      var label = details.querySelector("[data-toggle-label]");
      var update = function () {
        if (!label) return;
        // Icon-only (requested): open = down chevron, closed = right chevron.
        label.textContent = details.open ? "▾" : "▸";
      };
      details.addEventListener("toggle", update);
      update();
    });
  });

  // Sticky header offsets: keep section headers from hiding under the Settings header panel.
  safe(function setSettingsStickyOffsets() {
    var panel = document.getElementById("settings-panel");
    var header = document.getElementById("settings-header-panel");
    if (!panel || !header) return;
    var apply = function () {
      try {
        var h = header.getBoundingClientRect().height || 0;
        panel.style.setProperty("--settings-sticky-top", String(Math.ceil(h)) + "px");
      } catch {
        // ignore
      }
    };
    apply();
    // Recompute on resize/orientation changes (cheap; coalesced).
    window.addEventListener("resize", function () {
      coalesce("settings:sticky:resize", apply);
    });
  });

  safe(function defaultMultiplayerOff() {
    // Stricter hardening: force local-only mode (multiplayer disabled in production).
    // This prevents any WebSocket usage and avoids CSP/connect-src needing wss:// allowances.
    try {
      var url = new URL(window.location.href);
      url.searchParams.set("multiplayer", "0");
      history.replaceState(null, "", url.toString());
    } catch {
      // ignore
    }
    try {
      window.__SINGABLDR_MULTIPLAYER_DISABLED = true;
    } catch {
      // ignore
    }
  });

  safe(function wireInlineHandlersToListeners() {
    function byId(id) {
      return document.getElementById(id);
    }

    var loginScreen = byId("login-screen");
    var settingsModal = byId("settings-modal");
    var watermarkDropdown = byId("watermark-dropdown");
    var superagentPanel = byId("superagent-panel");

    var loginCloseBtn = byId("login-close-btn");
    if (loginCloseBtn && loginScreen) {
      loginCloseBtn.addEventListener("click", function () {
        loginScreen.style.display = "none";
      });
    }

    var settingsCloseBtn = byId("settings-close-btn");
    if (settingsCloseBtn && settingsModal) {
      settingsCloseBtn.addEventListener("click", function () {
        settingsModal.style.display = "none";
      });
    }

    var superagentCloseBtn = byId("superagent-close-btn");
    if (superagentCloseBtn && superagentPanel) {
      superagentCloseBtn.addEventListener("click", function () {
        superagentPanel.style.display = "none";
      });
    }

    var historyPanel = byId("history-panel");
    var historyCloseBtn = byId("history-close-btn");
    if (historyCloseBtn && historyPanel) {
      historyCloseBtn.addEventListener("click", function () {
        historyPanel.style.display = "none";
      });
    }

    var watermark = byId("watermark");
    if (watermark && watermarkDropdown) {
      watermark.addEventListener("click", function () {
        watermarkDropdown.style.display = watermarkDropdown.style.display === "none" ? "block" : "none";
      });
    }

    function wireHoverBackground(buttonEl) {
      if (!buttonEl) return;
      buttonEl.addEventListener("mouseover", function () {
        buttonEl.style.background = "#f1f2f6";
      });
      buttonEl.addEventListener("mouseout", function () {
        buttonEl.style.background = "none";
      });
    }

    var navLoginBtn = byId("nav-login-btn");
    if (navLoginBtn && loginScreen && watermarkDropdown) {
      navLoginBtn.addEventListener("click", function () {
        loginScreen.style.display = "flex";
        watermarkDropdown.style.display = "none";
      });
      wireHoverBackground(navLoginBtn);
    }

    var navSettingsBtn = byId("nav-settings-btn");
    if (navSettingsBtn && settingsModal && watermarkDropdown) {
      navSettingsBtn.addEventListener("click", function () {
        settingsModal.style.display = "flex";
        watermarkDropdown.style.display = "none";
      });
      wireHoverBackground(navSettingsBtn);
    }

    var navLogoutBtn = byId("nav-logout-btn");
    if (navLogoutBtn) {
      navLogoutBtn.addEventListener("click", function () {
        try {
          localStorage.removeItem("singabldr_user");
        } catch {
          // ignore
        }
        window.location.reload();
      });
      wireHoverBackground(navLogoutBtn);
    }

    var quickPlayModeBtn = byId("quick-play-mode-btn");
    if (quickPlayModeBtn) {
      quickPlayModeBtn.addEventListener("click", function () {
        if (typeof window.togglePlayMode === "function") window.togglePlayMode();
      });
    }
  });

  // History == Script: export + replay (CSP-safe; no bundle rebuild).
  safe(function installHistoryExportAndReplay() {
    var LS_KEY_HISTORY = "singabldr.history.v1";

    function pad2(n) {
      return String(n).padStart(2, "0");
    }

    // yyyymmddhhmmss (local time)
    function stamp() {
      var d = new Date();
      return (
        String(d.getFullYear()) +
        pad2(d.getMonth() + 1) +
        pad2(d.getDate()) +
        pad2(d.getHours()) +
        pad2(d.getMinutes()) +
        pad2(d.getSeconds())
      );
    }

    function readHistorySafe() {
      try {
        var raw = localStorage.getItem(LS_KEY_HISTORY);
        var parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }

    function downloadText(filename, mime, text) {
      try {
        var blob = new Blob([String(text || "")], { type: String(mime || "text/plain") });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.rel = "noopener";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
          try {
            URL.revokeObjectURL(url);
          } catch {}
          try {
            a.remove();
          } catch {}
        }, 0);
      } catch {
        // ignore
      }
    }

    function escapeMdCell(s) {
      return String(s || "")
        .replace(/\r?\n/g, "<br/>")
        .replace(/\|/g, "\\|");
    }

    function exportHistoryJson() {
      var h = readHistorySafe();
      var payload = JSON.stringify(h, null, 2);
      downloadText("singabldr-history-" + stamp() + ".json", "application/json;charset=utf-8", payload);
    }

    function exportHistoryMd() {
      var h2 = readHistorySafe();
      var out = [];
      out.push("# Singabldr History");
      out.push("");
      out.push("- Exported: " + new Date().toISOString());
      out.push("- Items: " + String(h2.length));
      out.push("");
      out.push("| Time (ms) | Role | Text |");
      out.push("|---:|---|---|");
      for (var i = 0; i < h2.length; i++) {
        var e = h2[i] || {};
        out.push(
          "|" +
            escapeMdCell(e.ts) +
            "|" +
            escapeMdCell(e.role) +
            "|" +
            escapeMdCell(e.text) +
            "|"
        );
      }
      out.push("");
      downloadText("singabldr-history-" + stamp() + ".md", "text/markdown;charset=utf-8", out.join("\n"));
    }

    function openSuperagentPanel() {
      try {
        var container = document.getElementById("superagent-container");
        if (container) container.style.display = "block";
      } catch {}
      try {
        var panel = document.getElementById("superagent-panel");
        if (panel) panel.style.display = "flex";
      } catch {}
    }

    function appendReplayBubble(role, text) {
      var chat = document.getElementById("superagent-chat");
      if (!chat) return;

      var wrap = document.createElement("div");
      wrap.style.display = "flex";
      wrap.style.flexDirection = "column";
      wrap.style.gap = "6px";
      wrap.style.alignItems = role === "user" ? "flex-end" : "flex-start";

      var bubble = document.createElement("div");
      bubble.style.maxWidth = "85%";
      bubble.style.border = "3px solid #2d3436";
      bubble.style.borderRadius = "14px";
      bubble.style.padding = "8px 10px";
      bubble.style.boxShadow = "4px 4px 0 rgba(0,0,0,0.1)";
      bubble.style.fontWeight = "900";
      bubble.style.fontSize = "12px";
      bubble.style.lineHeight = "1.25";
      bubble.style.whiteSpace = "pre-wrap";
      bubble.style.wordBreak = "break-word";
      bubble.style.background = role === "user" ? "#a29bfe" : "#ffffff";
      bubble.style.color = role === "user" ? "#ffffff" : "#2d3436";
      bubble.textContent = String(text || "");

      wrap.appendChild(bubble);
      chat.appendChild(wrap);
      chat.scrollTop = chat.scrollHeight;
    }

    function clearReplayChat() {
      var chat2 = document.getElementById("superagent-chat");
      if (!chat2) return;
      try {
        chat2.innerHTML = "";
      } catch {
        while (chat2.firstChild) chat2.removeChild(chat2.firstChild);
      }
    }

    function getReplayState() {
      try {
        if (!window.__SINGABLDR_HISTORY_REPLAY) window.__SINGABLDR_HISTORY_REPLAY = { running: false, timer: 0 };
        return window.__SINGABLDR_HISTORY_REPLAY;
      } catch {
        return { running: false, timer: 0 };
      }
    }

    function stopReplay() {
      var st = getReplayState();
      st.running = false;
      try {
        if (st.timer) clearTimeout(st.timer);
      } catch {}
      st.timer = 0;
    }

    function replayHistory() {
      var st2 = getReplayState();
      if (st2.running) {
        stopReplay();
        return;
      }
      var h3 = readHistorySafe();
      if (!h3.length) return;

      st2.running = true;
      openSuperagentPanel();
      clearReplayChat();
      appendReplayBubble("assistant", "Replay started (" + String(h3.length) + " events)...");

      var i2 = 0;
      var tick = function () {
        if (!st2.running) return;
        if (i2 >= h3.length) {
          appendReplayBubble("assistant", "Replay finished.");
          stopReplay();
          return;
        }
        var e2 = h3[i2++] || {};
        var role = String(e2.role || "");
        role = role === "user" ? "user" : "assistant";
        appendReplayBubble(role, e2.text || "");

        // Small dynamic delay (bounded) to keep UX responsive.
        var t = String(e2.text || "");
        var delay = 220 + Math.min(900, Math.floor(t.length / 6) * 60);
        st2.timer = setTimeout(tick, delay);
      };

      st2.timer = setTimeout(tick, 350);
    }

    function ensureHistoryHeaderControls() {
      var header = document.querySelector("#history-panel > div");
      if (!header) return;

      // Controls container exists in index.html (Clear + Close). Reuse it.
      var controls = header.querySelector("div");
      if (!controls) return;

      if (controls.querySelector("[data-history-export-json]")) return; // already installed

      function mkBtn(label, attr, onClick) {
        var b = document.createElement("button");
        b.type = "button";
        b.textContent = label;
        b.setAttribute(attr, "1");
        b.style.background = "none";
        b.style.border = "none";
        b.style.color = "white";
        b.style.cursor = "pointer";
        b.style.fontSize = "14px";
        b.style.fontFamily = "Nunito, sans-serif";
        b.style.fontWeight = "900";
        b.addEventListener("click", function (ev) {
          try {
            ev.preventDefault?.();
            ev.stopPropagation?.();
          } catch {}
          onClick();
        });
        return b;
      }

      // Insert before "Clear" for a stable, compact layout.
      var btnJson = mkBtn("Export .json", "data-history-export-json", exportHistoryJson);
      var btnMd = mkBtn("Export .md", "data-history-export-md", exportHistoryMd);
      var btnReplay = mkBtn("Replay", "data-history-replay", replayHistory);

      try {
        controls.insertBefore(btnReplay, controls.firstChild);
        controls.insertBefore(btnMd, controls.firstChild);
        controls.insertBefore(btnJson, controls.firstChild);
      } catch {
        controls.appendChild(btnJson);
        controls.appendChild(btnMd);
        controls.appendChild(btnReplay);
      }
    }

    // Install once after DOM is ready (non-blocking).
    try {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", ensureHistoryHeaderControls, { once: true });
      } else {
        ensureHistoryHeaderControls();
      }
    } catch {
      // ignore
    }
  });
})();
