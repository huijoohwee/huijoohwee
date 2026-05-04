/* Singabldr widget-mode loader (SSOT)
 * - Keeps the heavy bubbles/widget bundle off the hot path until a widget surface is active
 * - Loads upstream once from the shell instead of relying on downstream patches
 * - Preserves runtime behavior by activating on existing widget DOM, persisted open state, or first widget interaction
 */
(function singabldrWidgetModeLoader() {
  "use strict";

  var WIDGET_BUNDLE_SRC = "./assets/boot-bubbles-ui.js?v=20260504-1";
  var LS_KEY_CHAT_FLOWINFISH_DEFAULT_OPEN = "singabldr.chat.flowinfish.default_open";
  var ACTIVATION_IDS = {
    "bubble-style-select": true,
    "chain-click-send-select": true,
    "chain-enabled-select": true,
    "chain-layout-select": true,
    "chain-parse-lists-select": true,
    "chain-stack-select": true,
    "chat-bubbles-container": true,
    "history-open-btn": true,
    "quick-play-mode-btn": true,
    "superagent-btn": true,
    "superagent-open-btn": true,
  };

  var observer = null;
  var listenersInstalled = false;
  var bundleRequested = false;

  function safe(fn, fallback) {
    try {
      var value = fn();
      return value === undefined ? fallback : value;
    } catch {
      return fallback;
    }
  }

  function stopWatching() {
    if (observer && typeof observer.disconnect === "function") {
      try {
        observer.disconnect();
      } catch {}
    }
    observer = null;
  }

  function removeListeners() {
    if (!listenersInstalled) return;
    listenersInstalled = false;
    document.removeEventListener("pointerdown", onPossibleActivation, true);
    document.removeEventListener("focusin", onPossibleActivation, true);
    document.removeEventListener("change", onPossibleActivation, true);
  }

  function hasExistingWidgetDom() {
    return safe(function () {
      if (document.querySelector(".citizen-bubble")) return true;
      var host = document.getElementById("chat-bubbles-container");
      return !!(host && host.querySelector(".citizen-bubble"));
    }, false);
  }

  function hasPersistedWidgetDemand() {
    return safe(function () {
      return String(localStorage.getItem(LS_KEY_CHAT_FLOWINFISH_DEFAULT_OPEN) || "").trim().toLowerCase() === "open";
    }, false);
  }

  function shouldLoadImmediately() {
    return hasExistingWidgetDom() || hasPersistedWidgetDemand();
  }

  function ensureWidgetBundleLoaded(reason) {
    void reason;
    if (bundleRequested) return;
    if (safe(function () { return window.__SINGABLDR_GLOBAL_BUBBLES_UI_V1_INSTALLED === true; }, false)) return;
    bundleRequested = true;
    stopWatching();
    removeListeners();
    safe(function () {
      if (document.querySelector('script[data-singabldr-widget-bundle="1"]')) return;
      var script = document.createElement("script");
      script.src = WIDGET_BUNDLE_SRC;
      script.async = true;
      script.defer = true;
      script.dataset.singabldrWidgetBundle = "1";
      (document.head || document.documentElement).appendChild(script);
    });
  }

  function shouldActivateFromTarget(target) {
    var el = target && typeof target.closest === "function"
      ? target.closest(
          ".citizen-bubble,#bubble-style-select,#chain-click-send-select,#chain-enabled-select,#chain-layout-select,#chain-parse-lists-select,#chain-stack-select,#chat-bubbles-container,#history-open-btn,#quick-play-mode-btn,#superagent-btn,#superagent-open-btn",
        )
      : null;
    if (!el) return false;
    if (el.classList && typeof el.classList.contains === "function" && el.classList.contains("citizen-bubble")) return true;
    var id = String(el.id || "").trim();
    return !!ACTIVATION_IDS[id];
  }

  function onPossibleActivation(event) {
    var target = event && event.target;
    if (!shouldActivateFromTarget(target)) return;
    ensureWidgetBundleLoaded("interaction");
  }

  function installListeners() {
    if (listenersInstalled) return;
    listenersInstalled = true;
    document.addEventListener("pointerdown", onPossibleActivation, true);
    document.addEventListener("focusin", onPossibleActivation, true);
    document.addEventListener("change", onPossibleActivation, true);
  }

  function installObserver() {
    if (observer || typeof MutationObserver !== "function") return;
    observer = new MutationObserver(function () {
      if (!hasExistingWidgetDom()) return;
      ensureWidgetBundleLoaded("dom");
    });
    safe(function () {
      var root = document.body || document.documentElement;
      if (!root) return;
      observer.observe(root, { childList: true, subtree: true });
    });
  }

  function boot() {
    if (shouldLoadImmediately()) {
      ensureWidgetBundleLoaded("boot");
      return;
    }
    installListeners();
    installObserver();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
