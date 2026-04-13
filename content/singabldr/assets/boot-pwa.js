/* Singabldr PWA boot: install prompt, standalone detection, and service-worker registration. */
(function singabldrBootPwa() {
  "use strict";

  var INSTALL_NUDGE_KEY = "singabldr.pwa.installNudgeAt";
  var INSTALL_NUDGE_COOLDOWN_MS = 6 * 60 * 60 * 1000;
  var lastToastSignature = "";

  function safe(fn) {
    try {
      return fn();
    } catch {
      return undefined;
    }
  }

  function coalesce(key, fn) {
    try {
      if (typeof window.__SINGABLDR_COALESCE === "function") {
        window.__SINGABLDR_COALESCE(String(key || "default"), fn);
        return;
      }
    } catch {}
    Promise.resolve().then(fn);
  }

  function isStandalone() {
    return !!safe(function () {
      return (
        (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) ||
        window.navigator.standalone === true
      );
    });
  }

  function showMessage(text, tone) {
    var host = document.body;
    if (!host || !text) return;
    var signature = String(tone || "info") + "::" + String(text);
    if (lastToastSignature === signature) return;
    var toast = document.getElementById("pwa-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "pwa-toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      host.appendChild(toast);
    }
    toast.textContent = String(text);
    toast.dataset.tone = String(tone || "info");
    toast.classList.add("is-visible");
    lastToastSignature = signature;
    safe(function () {
      clearTimeout(toast.__hideTimer);
    });
    toast.__hideTimer = setTimeout(function () {
      toast.classList.remove("is-visible");
      lastToastSignature = "";
    }, 2800);
  }

  function isMobileLike() {
    return !!safe(function () {
      return (
        (window.matchMedia && window.matchMedia("(max-width: 820px)").matches) ||
        (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) ||
        /iphone|ipad|android|mobile/i.test(String(navigator.userAgent || ""))
      );
    });
  }

  function markInstallNudgeShown() {
    safe(function () {
      localStorage.setItem(INSTALL_NUDGE_KEY, String(Date.now()));
    });
  }

  function shouldShowInstallNudge() {
    return !!safe(function () {
      var raw = localStorage.getItem(INSTALL_NUDGE_KEY);
      var lastAt = Number(raw || 0);
      if (!Number.isFinite(lastAt) || lastAt <= 0) return true;
      return Date.now() - lastAt >= INSTALL_NUDGE_COOLDOWN_MS;
    });
  }

  function syncRootState(args) {
    var promptReady = !!(args && args.promptReady);
    var installed = !!(args && args.installed);
    var online = !!(args && args.online);
    safe(function () {
      document.documentElement.dataset.pwaInstallReady = promptReady ? "true" : "false";
      document.documentElement.dataset.pwaInstalled = installed ? "true" : "false";
      document.documentElement.dataset.pwaOnline = online ? "true" : "false";
      document.body.dataset.pwaInstallReady = promptReady ? "true" : "false";
      document.body.dataset.pwaInstalled = installed ? "true" : "false";
      document.body.dataset.pwaOnline = online ? "true" : "false";
    });
  }

  function syncDisplayModeClasses() {
    var active = isStandalone();
    safe(function () {
      document.documentElement.classList.toggle("pwa-standalone", active);
      document.body.classList.toggle("pwa-standalone", active);
    });
    return active;
  }

  function syncOnlineClasses() {
    var online = navigator.onLine !== false;
    safe(function () {
      document.documentElement.classList.toggle("pwa-offline", !online);
      document.body.classList.toggle("pwa-offline", !online);
    });
    return online;
  }

  function setStateBadge(id, text, tone) {
    var el = document.getElementById(id);
    if (!el) return;
    el.textContent = String(text || "");
    el.dataset.tone = String(tone || "neutral");
  }

  function setStateHelp(text) {
    var help = document.getElementById("pwa-state-help");
    if (!help) return;
    help.textContent = String(text || "");
  }

  function setInstallVisible(visible) {
    var buttons = document.querySelectorAll("#pwa-settings-install-btn");
    if (!buttons || !buttons.length) return;
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].hidden = !visible;
    }
  }

  function getInstallInstructions() {
    var ua = String(navigator.userAgent || "").toLowerCase();
    if (ua.indexOf("iphone") >= 0 || ua.indexOf("ipad") >= 0) {
      return "Safari: Share -> Add to Home Screen.";
    }
    return "Use your browser menu to install this app.";
  }

  function updateUiState(hasPrompt) {
    var standalone = syncDisplayModeClasses();
    var online = syncOnlineClasses();
    syncRootState({ promptReady: !!hasPrompt, installed: standalone, online: online });
    setStateBadge("pwa-offline-state", online ? "No" : "Yes", online ? "neutral" : "offline");
    setStateBadge("pwa-installed-state", standalone ? "Yes" : "No", standalone ? "installed" : "neutral");
    if (standalone) {
      setInstallVisible(false);
      setStateBadge("pwa-install-state", "Installed", "installed");
      setStateHelp("Singabldr is installed on this device.");
      return;
    }
    setInstallVisible(!!hasPrompt);
    if (!online) {
      setStateBadge("pwa-install-state", "Unavailable", "offline");
      setStateHelp("Reconnect to check browser install availability.");
      return;
    }
    if (hasPrompt) {
      setStateBadge("pwa-install-state", "Available", "ready");
      setStateHelp("Install App is available in this browser now.");
      if (isMobileLike() && shouldShowInstallNudge()) {
        markInstallNudgeShown();
        showMessage("Install Singabldr for a full-screen mobile experience.", "info");
      }
      return;
    }
    setStateBadge("pwa-install-state", "Not available", "neutral");
    setStateHelp(getInstallInstructions());
  }

  safe(function bindBasicListeners() {
    window.addEventListener("online", function () {
      coalesce("pwa:online", function () {
        updateUiState(window.__SINGABLDR_PWA_PROMPT_READY === true);
      });
    });
    window.addEventListener("offline", function () {
      coalesce("pwa:offline", function () {
        updateUiState(window.__SINGABLDR_PWA_PROMPT_READY === true);
      });
    });
    window.addEventListener("pageshow", function () {
      coalesce("pwa:pageshow", function () {
        updateUiState(window.__SINGABLDR_PWA_PROMPT_READY === true);
      });
    });
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState !== "visible") return;
      coalesce("pwa:visibility", function () {
        updateUiState(window.__SINGABLDR_PWA_PROMPT_READY === true);
      });
    });
    try {
      if (window.matchMedia) {
        var media = window.matchMedia("(display-mode: standalone)");
        var handler = function () {
          coalesce("pwa:display-mode", function () {
            updateUiState(window.__SINGABLDR_PWA_PROMPT_READY === true);
          });
        };
        if (typeof media.addEventListener === "function") media.addEventListener("change", handler);
        else if (typeof media.addListener === "function") media.addListener(handler);
      }
    } catch {}
  });

  var deferredPrompt = null;

  window.addEventListener("beforeinstallprompt", function (event) {
    safe(function () {
      event.preventDefault();
    });
    deferredPrompt = event;
    window.__SINGABLDR_PWA_PROMPT_READY = true;
    updateUiState(true);
  });

  window.addEventListener("appinstalled", function () {
    deferredPrompt = null;
    window.__SINGABLDR_PWA_PROMPT_READY = false;
    safe(function () {
      localStorage.removeItem(INSTALL_NUDGE_KEY);
    });
    updateUiState(false);
    showMessage("Singabldr installed.", "success");
  });

  safe(function bindInstallButton() {
    var buttons = document.querySelectorAll("#pwa-settings-install-btn");
    if (!buttons || !buttons.length) return;
    var onClick = function () {
      if (isStandalone()) {
        showMessage("Singabldr is already installed.", "success");
        updateUiState(false);
        return;
      }
      if (!deferredPrompt) {
        showMessage(getInstallInstructions(), "info");
        updateUiState(false);
        return;
      }
      deferredPrompt
        .prompt()
        .then(function () {
          return deferredPrompt.userChoice;
        })
        .then(function (choice) {
          var accepted = choice && choice.outcome === "accepted";
          if (!accepted) markInstallNudgeShown();
          showMessage(accepted ? "Install started." : "Install dismissed.", accepted ? "success" : "info");
        })
        .catch(function () {
          showMessage("Install prompt failed.", "error");
        })
        .finally(function () {
          deferredPrompt = null;
          window.__SINGABLDR_PWA_PROMPT_READY = false;
          updateUiState(false);
        });
    };
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", onClick);
    }
  });

  safe(function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) {
      updateUiState(false);
      return;
    }
    if (!(window.isSecureContext || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
      updateUiState(false);
      return;
    }
    navigator.serviceWorker
      .register("./sw.js?v=20260413-2", { scope: "./" })
      .then(function (registration) {
        safe(function () {
          window.__SINGABLDR_PWA_READY = true;
          document.documentElement.classList.add("pwa-ready");
          document.body.classList.add("pwa-ready");
        });
        updateUiState(window.__SINGABLDR_PWA_PROMPT_READY === true);
        safe(function () {
          navigator.serviceWorker.addEventListener("controllerchange", function () {
            coalesce("pwa:controllerchange", function () {
              showMessage("App updated for offline use.", "success");
              updateUiState(window.__SINGABLDR_PWA_PROMPT_READY === true);
            });
          });
        });
        if (registration.waiting) {
          showMessage("Update ready. Reload to use the latest app.", "info");
        }
        registration.addEventListener("updatefound", function () {
          var worker = registration.installing;
          if (!worker) return;
          worker.addEventListener("statechange", function () {
            if (worker.state === "installed" && navigator.serviceWorker.controller) {
              showMessage("Update ready. Reload to refresh.", "info");
            }
          });
        });
      })
      .catch(function () {
        safe(function () {
          document.documentElement.classList.remove("pwa-ready");
          document.body.classList.remove("pwa-ready");
        });
        updateUiState(false);
      });
  });

  updateUiState(false);
})();
