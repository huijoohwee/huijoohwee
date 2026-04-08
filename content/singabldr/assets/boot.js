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
})();
