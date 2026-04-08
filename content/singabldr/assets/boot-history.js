/* Singabldr history: export + replay (externalized for CSP + size control). */
(function singabldrBootHistory() {
  "use strict";

  /** @param {() => void} fn */
  function safe(fn) {
    try {
      fn();
    } catch {
      // ignore
    }
  }

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
        out.push("|" + escapeMdCell(e.ts) + "|" + escapeMdCell(e.role) + "|" + escapeMdCell(e.text) + "|");
      }
      out.push("");
      downloadText("singabldr-history-" + stamp() + ".md", "text/markdown;charset=utf-8", out.join("\n"));
    }

    // Replay should show on the "town" (overlay bubbles) — not only inside the Chat UI.
    // We render lightweight overlay bubbles into #chat-bubbles-container.
    function getTownBubbleContainer() {
      try {
        var el = document.getElementById("chat-bubbles-container");
        if (el) return el;
      } catch {}
      return null;
    }

    function appendTownReplayBubble(role, text) {
      var container = getTownBubbleContainer();
      if (!container) return;

      var msg = String(text || "").trim();
      if (!msg) return;

      var bubble = document.createElement("div");
      bubble.style.position = "absolute";
      bubble.style.maxWidth = "320px";
      bubble.style.border = "3px solid #2d3436";
      bubble.style.borderRadius = "16px";
      bubble.style.padding = "10px 12px";
      bubble.style.boxShadow = "6px 6px 0 rgba(0,0,0,0.12)";
      bubble.style.fontFamily = "Nunito, system-ui, -apple-system, Segoe UI, Roboto, sans-serif";
      bubble.style.fontWeight = "900";
      bubble.style.fontSize = "12px";
      bubble.style.lineHeight = "1.25";
      bubble.style.whiteSpace = "pre-wrap";
      bubble.style.wordBreak = "break-word";
      bubble.style.pointerEvents = "none";
      bubble.style.zIndex = "2001";
      bubble.style.opacity = "0";
      bubble.style.transition = "opacity 160ms ease-out, transform 160ms ease-out";

      // Place around the viewport (bounded) so it feels "on the town".
      var leftPct = 15 + Math.random() * 70; // 15%..85%
      var topPct = 18 + Math.random() * 55; // 18%..73%
      bubble.style.left = leftPct + "%";
      bubble.style.top = topPct + "%";
      bubble.style.transform = "translate(-50%, -50%) scale(0.98)";

      bubble.style.background = role === "user" ? "#a29bfe" : "#ffffff";
      bubble.style.color = role === "user" ? "#ffffff" : "#2d3436";

      var label = document.createElement("div");
      label.style.fontSize = "10px";
      label.style.opacity = "0.9";
      label.style.marginBottom = "6px";
      label.textContent = role === "user" ? "User" : "AI";

      var body = document.createElement("div");
      body.textContent = msg;

      bubble.appendChild(label);
      bubble.appendChild(body);
      container.appendChild(bubble);

      // Animate in/out, then cleanup (avoid memory leaks).
      try {
        requestAnimationFrame(function () {
          bubble.style.opacity = "1";
          bubble.style.transform = "translate(-50%, -50%) scale(1)";
        });
      } catch {
        bubble.style.opacity = "1";
      }

      var ttl = 2600 + Math.min(1800, msg.length * 20);
      setTimeout(function () {
        try {
          bubble.style.opacity = "0";
          bubble.style.transform = "translate(-50%, -50%) scale(0.98)";
        } catch {}
        setTimeout(function () {
          try {
            bubble.remove();
          } catch {}
        }, 220);
      }, ttl);
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
      appendTownReplayBubble("assistant", "Replay started (" + String(h3.length) + " events)...");

      var i2 = 0;
      var tick = function () {
        if (!st2.running) return;
        if (i2 >= h3.length) {
          appendTownReplayBubble("assistant", "Replay finished.");
          stopReplay();
          return;
        }
        var e2 = h3[i2++] || {};
        var role = String(e2.role || "");
        role = role === "user" ? "user" : "assistant";
        appendTownReplayBubble(role, e2.text || "");

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
