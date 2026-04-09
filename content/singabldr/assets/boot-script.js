/* Singabldr script UX: auto-open chat for Auto mode + CSP-safe local JSON import. */
(function singabldrBootScript() {
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

  function openChatUi() {
    try {
      var container = document.getElementById("superagent-container");
      if (container) container.style.display = "block";
    } catch {}
    try {
      var panel = document.getElementById("superagent-panel");
      if (panel) panel.style.display = "flex";
    } catch {}
  }

  function readScriptMode() {
    try {
      var select = document.getElementById("script-select");
      if (!select) return "";
      return String(select.value || "").toLowerCase();
    } catch {
      return "";
    }
  }

  function readScriptPreset() {
    try {
      var select = document.getElementById("script-preset-select");
      if (!select) return "";
      return String(select.value || "").trim().toLowerCase();
    } catch {
      return "";
    }
  }

  // Script -> Mode: Auto (Default) should auto-open the Chat UI on initial load.
  safe(function autoOpenChatUiWhenScriptAuto() {
    function run() {
      if (readScriptMode() !== "auto") return;
      // When SimEngine (Live, Procedural) is running, do not auto-open the chat UI.
      // This avoids interrupting the simulation with onboarding prompts.
      if (readScriptPreset() === "script-simengine.json") return;
      coalesce("ui:autoOpenChat", openChatUi);
    }

    try {
      if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run, { once: true });
      else run();
    } catch {}

    // Also open immediately when the user switches to Auto.
    try {
      var select = document.getElementById("script-select");
      if (select) {
        select.addEventListener("change", function () {
          if (readScriptMode() !== "auto") return;
          if (readScriptPreset() === "script-simengine.json") return;
          coalesce("ui:autoOpenChat:change", openChatUi);
        });
      }
    } catch {}
  });

  // Fix: Local file import should not execute scripts (CSP), it should parse JSON and apply it as data.
  // Current MVP: importing a History export JSON writes it into localStorage and opens History panel.
  safe(function installLocalJsonImport() {
    var LS_KEY_HISTORY = "singabldr.history.v1";
    var HISTORY_MAX = 300;

    function isHistoryExport(arr) {
      if (!Array.isArray(arr) || arr.length === 0) return false;
      var e = arr[0];
      if (!e || typeof e !== "object") return false;
      // Expected fields: ts, role, text
      return ("ts" in e || "role" in e || "text" in e) && typeof e.text !== "undefined";
    }

    function persistHistory(arr) {
      try {
        var trimmed = arr.slice(-HISTORY_MAX);
        localStorage.setItem(LS_KEY_HISTORY, JSON.stringify(trimmed));
      } catch {}
    }

    function setStatus(msg) {
      try {
        var statusEl = document.getElementById("script-status");
        if (statusEl) statusEl.textContent = String(msg || "");
      } catch {}
    }

    function openHistoryPanel() {
      try {
        // Prefer clicking the existing UI button so the main bundle renders the table.
        var openBtn = document.getElementById("history-open-btn");
        if (openBtn && typeof openBtn.click === "function") {
          openBtn.click();
          return;
        }
      } catch {}
      try {
        var panel = document.getElementById("history-panel");
        if (panel) panel.style.display = "flex";
      } catch {}
    }

    function handleFileText(text) {
      var raw = String(text || "").trim();
      if (!raw) {
        setStatus("Import failed: empty file.");
        return;
      }

      var parsed = null;
      try {
        parsed = JSON.parse(raw);
      } catch {
        setStatus("Import failed: invalid JSON.");
        return;
      }

      if (isHistoryExport(parsed)) {
        persistHistory(parsed);
        setStatus("Imported history (" + String(parsed.length) + " entries).");
        coalesce("history:openAfterImport", openHistoryPanel);
        return;
      }

      // Future: support importing singabldr-script@1 here.
      setStatus("Imported JSON, but format not recognized (expected Singabldr History export).");
    }

    function wire() {
      var localBtn = document.getElementById("script-local-btn");
      var fileInput = document.getElementById("script-file-input");
      if (!localBtn || !fileInput) return;

      // Capture-phase to suppress any legacy handlers that attempted to execute scripts.
      localBtn.addEventListener(
        "click",
        function (ev) {
          try {
            ev.preventDefault?.();
            ev.stopPropagation?.();
            ev.stopImmediatePropagation?.();
          } catch {}
          try {
            fileInput.value = "";
          } catch {}
          try {
            fileInput.click();
          } catch {}
        },
        true
      );

      fileInput.addEventListener(
        "change",
        function (ev) {
          try {
            ev.preventDefault?.();
            ev.stopPropagation?.();
            ev.stopImmediatePropagation?.();
          } catch {}

          var file = null;
          try {
            file = ev && ev.target && ev.target.files ? ev.target.files[0] : null;
          } catch {
            file = null;
          }
          if (!file) return;

          // Use FileReader (data-only). No dynamic <script>, no eval, CSP-safe.
          try {
            var reader = new FileReader();
            reader.onload = function () {
              handleFileText(reader.result);
            };
            reader.onerror = function () {
              setStatus("Import failed: could not read file.");
            };
            reader.readAsText(file);
          } catch {
            setStatus("Import failed: FileReader unavailable.");
          }
        },
        true
      );
    }

    try {
      if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wire, { once: true });
      else wire();
    } catch {}
  });
})();
