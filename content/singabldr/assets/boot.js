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

  safe(function setApiBase() {
    // Backend API base (DeerFlow gateway behind nginx). Keep secrets server-side.
    // Production: https://api.airvio.co
    window.__API_BASE = window.__API_BASE || "https://api.airvio.co";
  });

  safe(function wireSettingsCollapsibleLabels() {
    var root = document.getElementById("settings-modal");
    if (!root) return;

    var sections = root.querySelectorAll('details[data-collapsible="1"]');
    sections.forEach(function (details) {
      var label = details.querySelector("[data-toggle-label]");
      var update = function () {
        if (!label) return;
        label.textContent = details.open ? "Collapse" : "Expand";
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
