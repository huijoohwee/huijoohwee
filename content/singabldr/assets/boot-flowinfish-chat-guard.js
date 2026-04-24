/* Singabldr FlowinFish chat guard:
 * - Prevent substring command false positives (e.g. "recommend" -> "end")
 * - Route non-command chat prompts through /chat in Chat mode
 * - Coalesce/no-op interaction-mode persistence writes
 */
(function singabldrFlowinfishChatGuard() {
  "use strict";

  var LS_KEY_INTERACTION_MODE = "singabldr_interaction_mode";
  var lastRoutedSignature = "";
  var lastRoutedAt = 0;

  function safe(fn) {
    try {
      return fn();
    } catch {
      return undefined;
    }
  }

  function nowMs() {
    return Date.now();
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

  function persistSet(key, value, signature) {
    var k = String(key || "");
    if (!k) return;
    var v = value == null ? "" : String(value);
    var sig = signature == null ? v : String(signature);
    try {
      var p = window.__SINGABLDR_PERSIST;
      if (p && typeof p.lsSet === "function") {
        p.lsSet(k, v, { signature: sig });
        return;
      }
    } catch {}
    coalesce("persist:" + k, function () {
      try {
        var prev = localStorage.getItem(k);
        if (prev === v) return;
        localStorage.setItem(k, v);
      } catch {}
    });
  }

  function readInteractionMode() {
    try {
      var v = String(localStorage.getItem(LS_KEY_INTERACTION_MODE) || "").toLowerCase();
      return v === "chat" ? "chat" : "command";
    } catch {
      return "command";
    }
  }

  function hasToken(text, token) {
    var base = String(text || "").toLowerCase();
    var t = String(token || "").trim().toLowerCase();
    if (!base || !t) return false;
    if (t.indexOf(" ") >= 0) return base.indexOf(t) >= 0;
    var esc = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp("(^|[^a-z0-9])" + esc + "([^a-z0-9]|$)", "i").test(base);
  }

  function looksLikeExplicitCommand(text) {
    var s = String(text || "").trim().toLowerCase();
    if (!s) return false;
    if (s[0] === "/") return true;
    // Keep intent detection token-based, never substring-based.
    var explicit = [
      "roll",
      "dice",
      "buy",
      "purchase",
      "pass",
      "end turn",
      "skip",
      "weather",
      "theme",
      "train",
      "mrt",
      "plane",
      "airplane",
      "heli",
      "helicopter",
      "ship",
      "boat",
      "rocket",
      "attack",
      "build",
      "start",
      "stop",
      "faster",
      "slower",
    ];
    for (var i = 0; i < explicit.length; i++) {
      if (hasToken(s, explicit[i])) return true;
    }
    return false;
  }

  function ensureChatPrefix(inputEl) {
    if (!inputEl) return;
    var raw = String(inputEl.value || "");
    var text = raw.trim();
    if (!text) return;
    if (text[0] === "/") return;
    if (readInteractionMode() !== "chat") return;
    if (looksLikeExplicitCommand(text)) return;

    // Burst dedupe for double click + Enter or rapid switching.
    var signature = text.toLowerCase();
    var ts = nowMs();
    if (signature === lastRoutedSignature && ts - lastRoutedAt < 280) return;
    lastRoutedSignature = signature;
    lastRoutedAt = ts;

    inputEl.value = "/chat " + text;
  }

  function keepChatSurfaceActive() {
    safe(function () {
      var container = document.getElementById("superagent-container");
      if (container) container.style.display = "block";
    });
    safe(function () {
      var panel = document.getElementById("superagent-panel");
      if (panel) panel.style.display = "flex";
    });
  }

  function updateScriptStatusForChatNone() {
    safe(function () {
      var statusEl = document.getElementById("script-status");
      if (!statusEl) return;
      statusEl.innerText = "None: Script execution is disabled. Chat mode stays active.";
      statusEl.style.color = "#636e72";
    });
  }

  function preserveChatWhenScriptNone() {
    var mode = readInteractionMode();
    if (mode !== "chat") return;
    coalesce("script:none:keep-chat", function () {
      keepChatSurfaceActive();
      updateScriptStatusForChatNone();
      safe(function () {
        var inputEl = document.getElementById("superagent-input");
        if (!inputEl) return;
        if (document.activeElement === inputEl) return;
        inputEl.focus({ preventScroll: true });
      });
    });
  }

  function installInteractionModePersistenceGuard() {
    var select = safe(function () {
      return document.getElementById("interaction-mode-select");
    });
    if (!select) return;
    select.addEventListener("change", function () {
      var next = select.value === "chat" ? "chat" : "command";
      persistSet(LS_KEY_INTERACTION_MODE, next, next);
    });
  }

  function installSendGuards() {
    var inputEl = safe(function () {
      return document.getElementById("superagent-input");
    });
    var sendBtn = safe(function () {
      return document.getElementById("superagent-send");
    });
    if (!inputEl || !sendBtn) return;

    // Capture phase: normalize before bundle click handlers run.
    sendBtn.addEventListener(
      "click",
      function () {
        ensureChatPrefix(inputEl);
      },
      true
    );

    // Capture phase: normalize Enter-submit before bundle key handlers run.
    inputEl.addEventListener(
      "keydown",
      function (ev) {
        if (!ev) return;
        if (ev.key !== "Enter") return;
        if (ev.shiftKey || ev.metaKey || ev.ctrlKey || ev.altKey) return;
        ensureChatPrefix(inputEl);
      },
      true
    );
  }

  function installScriptNoneChatGuard() {
    var scriptSelect = safe(function () {
      return document.getElementById("script-select");
    });
    if (!scriptSelect) return;

    scriptSelect.addEventListener(
      "change",
      function () {
        if (String(scriptSelect.value || "").toLowerCase() !== "none") return;
        preserveChatWhenScriptNone();
      },
      true
    );

    if (String(scriptSelect.value || "").toLowerCase() === "none") {
      preserveChatWhenScriptNone();
    }
  }

  function boot() {
    installInteractionModePersistenceGuard();
    installSendGuards();
    installScriptNoneChatGuard();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
