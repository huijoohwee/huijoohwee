/* Singabldr widget-mode loader (SSOT)
 * - Keeps the heavy bubbles/widget bundle off the hot path until a widget surface is active
 * - Loads upstream once from the shell instead of relying on downstream patches
 * - Preserves runtime behavior by activating on existing widget DOM, persisted open state, or first widget interaction
 */
(function singabldrWidgetModeLoader() {
  "use strict";

  var WIDGET_BUNDLE_SRC = "./assets/boot-bubbles-ui.js?v=20260504-7";
  var LS_KEY_CHAT_FLOWINFISH_DEFAULT_OPEN = "singabldr.chat.flowinfish.default_open";
  var SS_KEY_WIDGET_PENDING_BOOT = "singabldr.widget.pending_boot.v1";
  var SS_KEY_WIDGET_PENDING_REPLAY_ID = "singabldr.widget.pending_replay_id.v1";
  var WIDGET_MODE_ACTIVE_DATASET_KEY = "sbWidgetModeActive";
  var WIDGET_MODE_ACTIVE_EVENT = "singabldr:widget-mode-activate";
  var EXPLICIT_ACTIVATION_IDS = {
    "bubble-style-select": true,
    "chain-click-send-select": true,
    "chain-enabled-select": true,
    "chain-layout-select": true,
    "chain-parse-lists-select": true,
    "chain-stack-select": true,
    "chat-bubbles-container": true,
    "history-open-btn": true,
    "quick-play-mode-btn": true,
    "script-preset-select": true,
    "script-select": true,
    "superagent-btn": true,
    "superagent-open-btn": true,
  };
  var REPLAYABLE_ACTIVATION_IDS = {
    "history-open-btn": true,
    "superagent-btn": true,
    "superagent-open-btn": true,
  };
  var EXPLICIT_ACTIVATION_SELECTOR = ".citizen-bubble,#bubble-style-select,#chain-click-send-select,#chain-enabled-select,#chain-layout-select,#chain-parse-lists-select,#chain-stack-select,#chat-bubbles-container,#history-open-btn,#quick-play-mode-btn,#script-preset-select,#script-select,#superagent-btn,#superagent-open-btn";

  var observer = null;
  var listenersInstalled = false;
  var bundleRequested = false;
  var replayingActivationId = "";

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
    document.removeEventListener("click", onPossibleActivation, true);
    document.removeEventListener("pointerdown", onPossibleActivation, true);
    document.removeEventListener("focusin", onPossibleActivation, true);
    document.removeEventListener("change", onPossibleActivation, true);
    document.removeEventListener("keydown", onPossibleActivationKeydown, true);
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

  function readSessionValue(key) {
    return safe(function () {
      return String(sessionStorage.getItem(key) || "").trim();
    }, "");
  }

  function writeSessionValue(key, value) {
    safe(function () {
      sessionStorage.setItem(String(key), String(value || ""));
    });
  }

  function clearSessionValue(key) {
    safe(function () {
      sessionStorage.removeItem(String(key));
    });
  }

  function hasPendingBootDemand() {
    return readSessionValue(SS_KEY_WIDGET_PENDING_BOOT) === "1";
  }

  function getPendingReplayId() {
    var id = readSessionValue(SS_KEY_WIDGET_PENDING_REPLAY_ID);
    return REPLAYABLE_ACTIVATION_IDS[id] ? id : "";
  }

  function shouldLoadImmediately() {
    return hasExistingWidgetDom() || hasPersistedWidgetDemand() || hasPendingBootDemand() || !!getPendingReplayId();
  }

  function markWidgetModeActive(reason) {
    void reason;
    safe(function () {
      var root = document.documentElement;
      if (root && root.dataset) root.dataset[WIDGET_MODE_ACTIVE_DATASET_KEY] = "1";
    });
    safe(function () {
      document.dispatchEvent(new CustomEvent(WIDGET_MODE_ACTIVE_EVENT));
    });
  }

  function getExplicitActivationId(target) {
    var el = target && typeof target.closest === "function" ? target.closest(EXPLICIT_ACTIVATION_SELECTOR) : null;
    if (!el) return "";
    if (el.classList && typeof el.classList.contains === "function" && el.classList.contains("citizen-bubble")) return "citizen-bubble";
    var id = String(el.id || "").trim();
    return EXPLICIT_ACTIVATION_IDS[id] ? id : "";
  }

  function rememberPendingActivation(id) {
    writeSessionValue(SS_KEY_WIDGET_PENDING_BOOT, "1");
    if (!id || !REPLAYABLE_ACTIVATION_IDS[id]) {
      clearSessionValue(SS_KEY_WIDGET_PENDING_REPLAY_ID);
      return;
    }
    writeSessionValue(SS_KEY_WIDGET_PENDING_REPLAY_ID, id);
  }

  function replayPendingActivation() {
    var id = getPendingReplayId();
    if (!id) {
      clearSessionValue(SS_KEY_WIDGET_PENDING_BOOT);
      return;
    }
    var el = safe(function () {
      return document.getElementById(id);
    }, null);
    clearSessionValue(SS_KEY_WIDGET_PENDING_REPLAY_ID);
    clearSessionValue(SS_KEY_WIDGET_PENDING_BOOT);
    if (!el || typeof el.click !== "function") return;
    replayingActivationId = id;
    setTimeout(function () {
      replayingActivationId = "";
    }, 0);
    safe(function () {
      el.click();
    });
  }

  function finalizePendingActivation() {
    clearSessionValue(SS_KEY_WIDGET_PENDING_BOOT);
    if (!getPendingReplayId()) return;
    replayPendingActivation();
  }

  function ensureWidgetBundleLoaded(reason, activationId) {
    void reason;
    markWidgetModeActive(reason);
    if (activationId) rememberPendingActivation(activationId);
    if (bundleRequested) return;
    if (safe(function () { return window.__SINGABLDR_GLOBAL_BUBBLES_UI_V1_INSTALLED === true; }, false)) {
      finalizePendingActivation();
      return;
    }
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
      script.addEventListener("load", finalizePendingActivation, { once: true });
      (document.head || document.documentElement).appendChild(script);
    });
  }

  function shouldActivateFromTarget(target) {
    return !!getExplicitActivationId(target);
  }

  function onPossibleActivation(event) {
    var target = event && event.target;
    var activationId = getExplicitActivationId(target);
    if (activationId && replayingActivationId && activationId === replayingActivationId) return;
    if (!shouldActivateFromTarget(target)) return;
    ensureWidgetBundleLoaded("interaction", activationId);
  }

  function onPossibleActivationKeydown(event) {
    if (!event) return;
    var key = String(event.key || "");
    if (key !== "Enter" && key !== " ") return;
    var target = event.target;
    var activationId = getExplicitActivationId(target);
    if (activationId && replayingActivationId && activationId === replayingActivationId) return;
    if (!shouldActivateFromTarget(target)) return;
    ensureWidgetBundleLoaded("keyboard", activationId);
  }

  function installListeners() {
    if (listenersInstalled) return;
    listenersInstalled = true;
    document.addEventListener("click", onPossibleActivation, true);
    document.addEventListener("pointerdown", onPossibleActivation, true);
    document.addEventListener("focusin", onPossibleActivation, true);
    document.addEventListener("change", onPossibleActivation, true);
    document.addEventListener("keydown", onPossibleActivationKeydown, true);
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
