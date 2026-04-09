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

  // Shared throttle built on the same keyspace.
  // Usage: __SINGABLDR_THROTTLE(key, fn, waitMs)
  safe(function exposeThrottle() {
    /** @type {Map<string, {at:number, timer:any, fn:(() => void) | null}>} */
    var state = new Map();

    function now() {
      return Date.now();
    }

    /** @param {string} key @param {() => void} fn @param {number} waitMs */
    function throttle(key, fn, waitMs) {
      var k = String(key || "default");
      var w = Number(waitMs || 0);
      if (!(w > 0)) {
        coalesce(k, fn);
        return;
      }
      var entry = state.get(k);
      if (!entry) {
        entry = { at: 0, timer: 0, fn: null };
        state.set(k, entry);
      }
      entry.fn = fn;
      var elapsed = now() - entry.at;
      if (elapsed >= w && !entry.timer) {
        entry.at = now();
        coalesce("throttle:" + k, function () {
          try {
            entry.fn && entry.fn();
          } catch {}
        });
        return;
      }
      if (entry.timer) return;
      var delay = Math.max(0, w - elapsed);
      entry.timer = setTimeout(function () {
        entry.timer = 0;
        entry.at = now();
        coalesce("throttle:" + k + ":timer", function () {
          try {
            entry.fn && entry.fn();
          } catch {}
        });
      }, delay);
    }

    try {
      window.__SINGABLDR_THROTTLE = throttle;
    } catch {
      // ignore
    }
  });

  // URL aliasing (SSOT): prevent legacy placeholder files from breaking runtime.
  // This runs early and is intentionally narrow (only affects a few known assets).
  safe(function installFetchUrlAliases() {
    if (typeof window.fetch !== "function") return;
    var orig = window.fetch.bind(window);

    function rewrite(rawUrl) {
      var u = String(rawUrl || "");
      if (!u) return u;
      // Match absolute or relative paths.
      u = u.replace(/(^|\/)boards\/singabldr\.json(\b|$)/, "$1boards/singabldr.board.json");
      // Legacy locations: some servers (hybrid python http.server) don't have root copies.
      u = u.replace(/(^|\/)singabldr\.assets\.json(\b|$)/, "$1boards/singabldr.assets.json");
      u = u.replace(/(^|\/)singabldr\.elements\.json(\b|$)/, "$1boards/singabldr.elements.json");
      u = u.replace(/(^|\/)script-singabuildr-0000\.json(\b|$)/, "$1script-singabuildr-0000.v1.json");
      return u;
    }

    window.fetch = function (input, init) {
      try {
        var url = typeof input === "string" ? input : input && input.url ? String(input.url) : "";
        var next = rewrite(url);
        if (next && next !== url) {
          if (typeof input === "string") input = next;
          else if (typeof Request !== "undefined" && input instanceof Request) input = new Request(next, input);
        }

        // MAX-SECURITY: disable oEmbed fetching (prevents pulling third-party HTML/embeds).
        // The app will simply skip rendering rich embeds for these links.
        // Return a small JSON payload so callers doing `await res.json()` won't throw.
        if (String(next || url).indexOf("/api/oembed?") >= 0) {
          return Promise.resolve(
            new Response(JSON.stringify({ ok: false, error: "disabled_by_policy" }), {
              status: 200,
              headers: {
                "content-type": "application/json; charset=utf-8",
                "cache-control": "no-store",
              },
            }),
          );
        }

        // Dev UX: silence missing local secrets file noise.
        // The main bundle may probe `./user-secrets.local.json` for optional local config.
        // Return empty JSON to avoid console 404 errors.
        var u2 = String(next || url);
        if (u2.endsWith("/user-secrets.local.json") || u2 === "./user-secrets.local.json" || u2 === "user-secrets.local.json") {
          return Promise.resolve(
            new Response("{}", {
              status: 200,
              headers: {
                "content-type": "application/json; charset=utf-8",
                "cache-control": "no-store",
              },
            }),
          );
        }
      } catch {
        // ignore
      }
      return orig(input, init);
    };
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

  // Render-churn suppression: throttle requestAnimationFrame under background tabs
  // and allow an explicit FPS cap via `window.__SINGABLDR_MAX_FPS`.
  safe(function throttleAnimationFrames() {
    if (typeof window.requestAnimationFrame !== "function") return;
    var origRaf = window.requestAnimationFrame.bind(window);

    // Shared state across all raf callbacks.
    var lastDeliveredTs = 0;

    function getMaxFps() {
      try {
        var forced = Number(window.__SINGABLDR_MAX_FPS || 0);
        if (forced && forced > 0) return forced;
      } catch {}
      // Conservative defaults:
      // - foreground: 60fps
      // - background/hidden: 12fps (dramatically reduces churn)
      try {
        return document && document.hidden ? 12 : 60;
      } catch {
        return 60;
      }
    }

    window.requestAnimationFrame = function (cb) {
      if (typeof cb !== "function") return origRaf(cb);

      var maxFps = getMaxFps();
      var minDelta = maxFps > 0 ? 1000 / maxFps : 0;

      function tick(ts) {
        try {
          // When paused, reschedule but do not run user callback.
          if (window.__SINGABLDR_RENDER_PAUSED) return origRaf(tick);
        } catch {}

        if (minDelta > 0 && lastDeliveredTs && ts - lastDeliveredTs < minDelta) {
          return origRaf(tick);
        }
        lastDeliveredTs = ts;
        cb(ts);
      }

      return origRaf(tick);
    };
  });

  // Granularity / LOD tuning at load time (prevents voxel explosion on small devices).
  // This runs entirely client-side by rewriting the fetched board JSON response.
  safe(function installBoardJsonLodPatch() {
    if (typeof window.fetch !== "function") return;

    var LS_KEY = "singabldr.lod";

    safe(function exposeLodSetter() {
      try {
        window.__setSingabldrLod = function (mode) {
          var m = String(mode || "").trim().toLowerCase();
          if (m !== "fine" && m !== "coarse" && m !== "auto") return false;
          try {
            localStorage.setItem(LS_KEY, m);
          } catch {}
          try {
            window.location.reload();
          } catch {}
          return true;
        };
      } catch {
        // ignore
      }
    });

    function getLodMode() {
      var url = null;
      try {
        url = new URL(window.location.href);
      } catch {
        url = null;
      }
      var mode = "";
      try {
        if (url) mode = String(url.searchParams.get("lod") || "").trim().toLowerCase();
      } catch {
        mode = "";
      }
      if (mode === "fine" || mode === "coarse" || mode === "auto") return mode;
      try {
        var persisted = String(localStorage.getItem(LS_KEY) || "").trim().toLowerCase();
        if (persisted === "fine" || persisted === "coarse" || persisted === "auto") return persisted;
      } catch {}
      return "auto";
    }

    function autoPick() {
      try {
        // If the user prefers reduced motion, pick coarse.
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "coarse";
      } catch {}
      try {
        var mem = Number(navigator.deviceMemory || 0);
        var cores = Number(navigator.hardwareConcurrency || 0);
        var width = Number(window.innerWidth || 0);
        if ((mem && mem < 4) || (cores && cores < 4) || (width && width < 768)) return "coarse";
      } catch {}
      return "fine";
    }

    function shouldPatchBoardUrl(rawUrl) {
      var u = String(rawUrl || "");
      if (!u) return false;
      // Only patch Singabldr board JSON (do not affect other content).
      return u.indexOf("/content/singabldr/boards/") >= 0 && u.indexOf(".json") >= 0;
    }

    function applyLod(data) {
      if (!data || typeof data !== "object") return data;
      var scene = data.scene;
      if (!scene || typeof scene !== "object") return data;
      var grid = scene.grid;
      if (!grid || typeof grid !== "object") return data;

      var mode = getLodMode();
      if (mode === "auto") mode = autoPick();

      // Coarse starts faster; fine is default desktop.
      var multiplier = mode === "coarse" ? 2 : 1;
      var current = Number(grid.voxelSize || 0);
      if (!(current > 0)) return data;

      var next = current * multiplier;
      // Cap to avoid accidental extremes via invalid stored state.
      next = Math.min(Math.max(next, 0.5), 10);
      grid.voxelSize = next;

      // Expose final mode for debugging.
      try {
        window.__SINGABLDR_LOD_MODE = mode;
        window.__SINGABLDR_VOXEL_SIZE = next;
      } catch {}
      return data;
    }

    var orig = window.fetch.bind(window);
    window.fetch = function (input, init) {
      var url = "";
      try {
        url = typeof input === "string" ? input : input && input.url ? String(input.url) : "";
      } catch {
        url = "";
      }
      // Compatibility aliases:
      // Some legacy placeholder files are unreadable (0-byte / write-only). Fail-safe by
      // redirecting requests to stable versioned filenames that we control.
      var effectiveUrl = url;
      try {
        // Match both absolute and relative paths (e.g. "boards/..." vs "/boards/...").
        effectiveUrl = effectiveUrl.replace(/(^|\/)boards\/singabldr\.json(\b|$)/, "$1boards/singabldr.board.json");
        effectiveUrl = effectiveUrl.replace(
          /(^|\/)script-singabuildr-0000\.json(\b|$)/,
          "$1script-singabuildr-0000.v1.json"
        );
      } catch {
        effectiveUrl = url;
      }
      if (effectiveUrl && effectiveUrl !== url) {
        try {
          if (typeof input === "string") input = effectiveUrl;
          else if (typeof Request !== "undefined" && input instanceof Request) input = new Request(effectiveUrl, input);
        } catch {
          // ignore; fall back to original input
        }
      }
      return orig(input, init).then(function (res) {
        try {
          if (!res || !res.ok) return res;
          if (!shouldPatchBoardUrl(effectiveUrl || url)) return res;
          // Read via clone so callers can still consume the returned response body.
          return res
            .clone()
            .json()
            .then(function (data) {
              var patched = applyLod(data);
              return new Response(JSON.stringify(patched), {
                status: res.status,
                statusText: res.statusText,
                headers: (function () {
                  try {
                    var h = new Headers(res.headers);
                    h.set("content-type", "application/json; charset=utf-8");
                    return h;
                  } catch {
                    return { "content-type": "application/json; charset=utf-8" };
                  }
                })(),
              });
            })
            .catch(function () {
              return res;
            });
        } catch {
          return res;
        }
      });
    };
  });

  safe(function setApiBase() {
    // Backend API base (same-origin Cloudflare Pages Functions in production).
    //
    // Priority:
    //  1) URL override (localhost only): ?apiBase=http://localhost:5175  (persist to localStorage)
    //  2) localStorage override (localhost only)
    //  3) default: same-origin
    //
    // Production hardening:
    // - forbid cross-origin apiBase overrides (must stay same-origin)
    // - clear any leftover overrides automatically
    var LS_KEY = "singabldr.apiBase";
    var url = null;
    try {
      url = new URL(window.location.href);
    } catch {
      url = null;
    }

    var isLocalhost = false;
    try {
      var host0 = String(window.location && window.location.hostname ? window.location.hostname : "");
      isLocalhost = host0 === "localhost" || host0 === "127.0.0.1";
    } catch {
      isLocalhost = false;
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

    if (paramBase && isLocalhost) {
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
    if (storedBase && isLocalhost) {
      window.__API_BASE = storedBase;
      // Validate persisted base (best-effort). If it is unreachable, clear it so
      // future loads fall back to same-origin.
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
            return true;
          })
          .catch(function () {
            try {
              localStorage.removeItem(LS_KEY);
            } catch {}
          })
          .finally(function () {
            if (timer2) clearTimeout(timer2);
          });
      } catch {}
      return;
    }

    // Production: clear any leftover overrides.
    if (!isLocalhost) {
      try {
        localStorage.removeItem(LS_KEY);
      } catch {}
    }

    // Default: same-origin.
    window.__API_BASE = window.__API_BASE || window.location.origin;
  });

  // Inject FlowinFish session header into same-origin API fetch calls.
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
})();
