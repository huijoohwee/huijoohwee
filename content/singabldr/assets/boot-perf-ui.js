/* Singabldr perf + UI wiring (externalized for CSP + file size control). */
(function singabldrBootPerfUi() {
  "use strict";

  /** @param {() => void} fn */
  function safe(fn) {
    try {
      fn();
    } catch {
      // ignore
    }
  }

  function coalesce(key, fn) {
    try {
      if (typeof window.__SINGABLDR_COALESCE === "function") {
        window.__SINGABLDR_COALESCE(String(key || "default"), fn);
        return;
      }
    } catch {}
    try {
      Promise.resolve().then(fn);
    } catch {
      try {
        setTimeout(fn, 0);
      } catch {}
    }
  }

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
              if (ttl > 0) cache.set(key, { at: now(), ttl: ttl, resp: resp.clone() });
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
})();

