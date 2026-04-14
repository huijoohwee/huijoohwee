/* Singabldr Mobility preset enhancer:
 * - Adds/hardens the Mobility preset and hides legacy preset entries
 * - Mirrors recent chat into spread-out chain-of-bubbles cards with curved links
 * - Reflows citizen chatter bubbles to reduce overlap on mobile viewports
 */
(function singabldrMobilityPreset() {
  "use strict";

  var PRESET_VALUE = "script-mobility-pwa.v1.json";
  var PRESET_LABEL = "Mobility (PWA Stopover Demo)";
  var LEGACY_PRESET_VALUES = new Set([
    "script-singabldr-0001.json",
    "script-singabuildr-0001.json",
    "script-singabuildr-0001-startup.json",
  ]);
  var CHAIN_CARD_CLASS = "mobility-chain-card";
  var CHAIN_LAYER_ID = "mobility-chain-layer";
  var CHAIN_MAX_ITEMS = 5;
  var LS_KEY_BUBBLE_STYLE = "singabldr.bubble.style";
  var BUBBLE_STYLE_COLORFUL = "colorful";
  var BUBBLE_STYLE_BLANK = "blank";
  var scheduledLayout = false;
  var observersInstalled = false;

  function safe(fn, fallback) {
    try {
      var value = fn();
      return value === undefined ? fallback : value;
    } catch {
      return fallback;
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

  function byId(id) {
    return safe(function () {
      return document.getElementById(id);
    }, null);
  }

  function getScriptPresetSelect() {
    return byId("script-preset-select");
  }

  function getScriptModeSelect() {
    return byId("script-select");
  }

  function getBubbleStyleSelect() {
    return byId("bubble-style-select");
  }

  function getStatusEl() {
    return byId("script-status");
  }

  function getChatContainer() {
    return byId("chat-bubbles-container");
  }

  function getChatLog() {
    return byId("superagent-chat");
  }

  function getChatInput() {
    return byId("superagent-input");
  }

  function getSendButton() {
    return byId("superagent-send");
  }

  function readActivePresetValue() {
    var select = getScriptPresetSelect();
    return select ? String(select.value || "").trim() : "";
  }

  function readScriptModeValue() {
    var select = getScriptModeSelect();
    return select ? String(select.value || "").trim().toLowerCase() : "";
  }

  function isMobilityPresetActive() {
    return readActivePresetValue() === PRESET_VALUE;
  }

  function normalizeBubbleStyle(value) {
    var v = String(value || "").trim().toLowerCase();
    return v === BUBBLE_STYLE_BLANK ? BUBBLE_STYLE_BLANK : BUBBLE_STYLE_COLORFUL;
  }

  function readBubbleStyle() {
    var fromUi = safe(function () {
      var select = getBubbleStyleSelect();
      return select ? String(select.value || "") : "";
    }, "");
    if (fromUi) return normalizeBubbleStyle(fromUi);
    var persisted = safe(function () {
      return String(localStorage.getItem(LS_KEY_BUBBLE_STYLE) || "");
    }, "");
    return normalizeBubbleStyle(persisted || BUBBLE_STYLE_COLORFUL);
  }

  function isColorfulBubbleStyle() {
    return readBubbleStyle() === BUBBLE_STYLE_COLORFUL;
  }

  function removeLegacyPresetEntries(select) {
    if (!select) return;
    var options = Array.from(select.options || []);
    for (var i = 0; i < options.length; i++) {
      var opt = options[i];
      if (!opt) continue;
      var value = String(opt.value || "").trim();
      if (!LEGACY_PRESET_VALUES.has(value)) continue;
      try {
        opt.remove();
      } catch {}
    }
  }

  function remapLegacyLocalStorageValues() {
    safe(function () {
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (!key) continue;
        var value = String(localStorage.getItem(key) || "").trim();
        if (!LEGACY_PRESET_VALUES.has(value)) continue;
        localStorage.setItem(key, PRESET_VALUE);
      }
    });
  }

  function ensureMobilityPresetOption() {
    var select = getScriptPresetSelect();
    if (!select) return;

    removeLegacyPresetEntries(select);

    var existing = safe(function () {
      return select.querySelector('option[value="' + PRESET_VALUE + '"]');
    }, null);

    if (!existing) {
      var option = document.createElement("option");
      option.value = PRESET_VALUE;
      option.textContent = PRESET_LABEL;
      try {
        select.insertBefore(option, select.firstChild || null);
      } catch {
        select.appendChild(option);
      }
    } else if (existing.textContent !== PRESET_LABEL) {
      existing.textContent = PRESET_LABEL;
    }

    var nextValue = String(select.value || "").trim();
    if (!nextValue || LEGACY_PRESET_VALUES.has(nextValue)) {
      select.value = PRESET_VALUE;
      safe(function () {
        select.dispatchEvent(new Event("change", { bubbles: true }));
      });
    }
  }

  function setPresetDataState() {
    var active = isMobilityPresetActive();
    var bubbleStyle = readBubbleStyle();
    safe(function () {
      document.body.dataset.singabldrPreset = active ? "mobility" : "default";
      document.documentElement.dataset.singabldrPreset = active ? "mobility" : "default";
      document.body.dataset.singabldrBubbleStyle = bubbleStyle;
      document.documentElement.dataset.singabldrBubbleStyle = bubbleStyle;
    });

    var input = getChatInput();
    if (input) {
      input.placeholder = active
        ? "Ask about stopovers, routes, budgets, or tap a Mobility bubble..."
        : "Instruct agent or paste URL...";
    }

    var statusEl = getStatusEl();
    if (!statusEl) return;
    if (active && readScriptModeValue() === "auto") {
      statusEl.innerText = "Mobility preset is active. Mobile/PWA stopover demo ready.";
      statusEl.style.color = "#0984e3";
    }
  }

  function compactText(text, limit) {
    var s = String(text || "").replace(/\s+/g, " ").trim();
    if (!s) return "";
    var max = Number.isFinite(limit) ? limit : 120;
    if (s.length <= max) return s;
    return s.slice(0, Math.max(16, max - 1)).trim() + "…";
  }

  function getSafeViewport() {
    var width = Math.max(window.innerWidth || 0, 320);
    var height = Math.max(window.innerHeight || 0, 480);
    var top = width <= 480 ? 86 : 96;
    var bottom = width <= 480 ? 176 : 158;
    return {
      left: 16,
      top: top,
      right: width - 16,
      bottom: Math.max(top + 120, height - bottom),
      width: Math.max(120, width - 32),
      height: Math.max(120, height - top - bottom + 16),
    };
  }

  function collectTranscriptItems() {
    var chat = getChatLog();
    if (!chat) return [];
    var nodes = Array.from(chat.children || []);
    var items = [];
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (!(node instanceof HTMLElement)) continue;
      var text = compactText(node.innerText || "", 180);
      if (!text) continue;
      var style = safe(function () {
        return window.getComputedStyle(node);
      }, null);
      var alignSelf = style ? String(style.alignSelf || "").toLowerCase() : "";
      var role = alignSelf.indexOf("end") >= 0 ? "user" : "assistant";
      items.push({
        id: "t" + i,
        role: role,
        text: text,
      });
    }
    return items.slice(-CHAIN_MAX_ITEMS);
  }

  function getChainLayer() {
    var existing = byId(CHAIN_LAYER_ID);
    if (existing) return existing;
    var host = getChatContainer();
    if (!host) return null;
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", CHAIN_LAYER_ID);
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.style.position = "fixed";
    svg.style.left = "0";
    svg.style.top = "0";
    svg.style.width = "100%";
    svg.style.height = "100%";
    svg.style.pointerEvents = "none";
    svg.style.zIndex = "2105";
    document.body.appendChild(svg);
    return svg;
  }

  function clearMobilityChainCards() {
    safe(function () {
      var cards = document.querySelectorAll("." + CHAIN_CARD_CLASS);
      for (var i = 0; i < cards.length; i++) cards[i].remove();
    });
    safe(function () {
      var layer = byId(CHAIN_LAYER_ID);
      if (layer) layer.remove();
    });
  }

  function buildChainSlots(count) {
    var vp = getSafeViewport();
    var width = vp.right - vp.left;
    var height = vp.bottom - vp.top;
    var cols = Math.min(3, Math.max(2, Math.ceil(Math.sqrt(Math.max(1, count)))));
    var rows = Math.max(1, Math.ceil(count / cols));
    var slots = [];
    for (var i = 0; i < count; i++) {
      var row = Math.floor(i / cols);
      var col = i % cols;
      var x = vp.left + width * ((col + 1) / (cols + 1));
      var baseY = vp.top + height * ((row + 0.9) / (rows + 0.9));
      var y = baseY + (col % 2 === 0 ? -18 : 18);
      slots.push({ x: x, y: y });
    }
    return slots;
  }

  function ensureChainCard(item, index) {
    var id = "mobility-chain-card-" + item.id;
    var existing = byId(id);
    if (existing) return existing;

    var host = getChatContainer();
    if (!host) return null;

    var card = document.createElement("button");
    card.type = "button";
    card.id = id;
    card.className = CHAIN_CARD_CLASS;
    card.dataset.role = item.role;
    card.dataset.index = String(index);
    card.style.position = "fixed";
    card.style.left = "16px";
    card.style.top = "120px";
    card.style.zIndex = "2110";
    card.style.pointerEvents = "auto";
    card.style.transform = "translate3d(0, 0, 0)";

    var badge = document.createElement("span");
    badge.className = "mobility-chain-card__badge";
    card.appendChild(badge);

    var body = document.createElement("span");
    body.className = "mobility-chain-card__body";
    card.appendChild(body);

    card.addEventListener("click", function () {
      var input = getChatInput();
      if (!input) return;
      var next = inferFollowUpPrompt(item.text, item.role);
      input.value = next;
      safe(function () {
        input.focus({ preventScroll: false });
      });
      safe(function () {
        input.setSelectionRange(next.length, next.length);
      });
    });

    host.appendChild(card);
    return card;
  }

  function inferFollowUpPrompt(text, role) {
    var value = String(text || "").toLowerCase();
    if (value.indexOf("budget") >= 0 || value.indexOf("sgd") >= 0) return "Near MRT only, under SGD300 total";
    if (value.indexOf("changi") >= 0 || value.indexOf("stopover") >= 0) return "Budget SGD300";
    if (value.indexOf("route") >= 0 || value.indexOf("mrt") >= 0) return "Shortest route with minimal transfers";
    return role === "user" ? "Budget SGD300" : "Add one quieter local option";
  }

  function updateChainCard(card, item) {
    if (!card) return;
    card.dataset.role = item.role;
    var badge = safe(function () {
      return card.querySelector(".mobility-chain-card__badge");
    }, null);
    var body = safe(function () {
      return card.querySelector(".mobility-chain-card__body");
    }, null);
    if (badge) badge.textContent = item.role === "user" ? "User query" : "AI response";
    if (body) body.textContent = compactText(item.text, 132);
    card.title = "Tap to continue this Mobility thread";
  }

  function positionCard(card, target) {
    if (!card || !target) return;
    var width = Math.max(card.offsetWidth || 220, 180);
    var height = Math.max(card.offsetHeight || 108, 88);
    var vp = getSafeViewport();
    var left = Math.max(vp.left, Math.min(target.x - width / 2, vp.right - width));
    var top = Math.max(vp.top, Math.min(target.y - height / 2, vp.bottom - height));
    card.style.left = Math.round(left) + "px";
    card.style.top = Math.round(top) + "px";
  }

  function renderChainLinks(cards) {
    var layer = getChainLayer();
    if (!layer) return;
    safe(function () {
      layer.innerHTML = "";
    });

    for (var i = 1; i < cards.length; i++) {
      var prev = cards[i - 1];
      var next = cards[i];
      if (!prev || !next) continue;
      var a = prev.getBoundingClientRect();
      var b = next.getBoundingClientRect();
      var x1 = a.left + a.width * 0.5;
      var y1 = a.top + a.height;
      var x2 = b.left + b.width * 0.5;
      var y2 = b.top;
      var dx = x2 - x1;
      var swing = Math.max(36, Math.min(140, Math.abs(dx) * 0.42 + 26));
      var lift = Math.max(30, Math.min(120, Math.abs(y2 - y1) * 0.34 + 22));
      var cp1x = x1 + (dx >= 0 ? swing : -swing);
      var cp1y = y1 + lift;
      var cp2x = x2 - (dx >= 0 ? swing : -swing);
      var cp2y = y2 - lift;

      var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M " + x1 + " " + y1 + " C " + cp1x + " " + cp1y + ", " + cp2x + " " + cp2y + ", " + x2 + " " + y2);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "rgba(45, 52, 54, 0.72)");
      path.setAttribute("stroke-width", "3");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-dasharray", "10 8");
      layer.appendChild(path);

      var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", String(x2));
      dot.setAttribute("cy", String(y2));
      dot.setAttribute("r", "4");
      dot.setAttribute("fill", "rgba(9, 132, 227, 0.92)");
      layer.appendChild(dot);
    }
  }

  function syncMobilityChainCards() {
    if (!isMobilityPresetActive() || !isColorfulBubbleStyle()) {
      clearMobilityChainCards();
      return;
    }

    var items = collectTranscriptItems();
    if (items.length === 0) {
      clearMobilityChainCards();
      return;
    }

    var cards = [];
    var slots = buildChainSlots(items.length);
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var card = ensureChainCard(item, i);
      if (!card) continue;
      updateChainCard(card, item);
      positionCard(card, slots[i]);
      cards.push(card);
    }

    safe(function () {
      var existing = document.querySelectorAll("." + CHAIN_CARD_CLASS);
      for (var i = 0; i < existing.length; i++) {
        var keep = false;
        for (var j = 0; j < cards.length; j++) {
          if (existing[i] === cards[j]) {
            keep = true;
            break;
          }
        }
        if (!keep) existing[i].remove();
      }
    });

    renderChainLinks(cards);
  }

  function collectCitizenBubbles() {
    var host = getChatContainer();
    if (!host) return [];
    return Array.from(host.querySelectorAll(".citizen-bubble"));
  }

  function buildCitizenSlots(count) {
    var vp = getSafeViewport();
    var rows = Math.max(1, Math.ceil(count / 3));
    var cols = Math.min(3, Math.max(1, Math.ceil(count / rows)));
    var slots = [];
    var topBand = vp.top + 8;
    var usableHeight = Math.max(120, Math.min(220, vp.height * 0.42));
    for (var i = 0; i < count; i++) {
      var row = Math.floor(i / cols);
      var col = i % cols;
      var x = vp.left + (vp.width * (col + 0.5)) / cols;
      var y = topBand + ((row + 0.55) / Math.max(1, rows)) * usableHeight + (col % 2 === 0 ? -10 : 10);
      slots.push({ x: x, y: y });
    }
    return slots;
  }

  function getManagedBaseCenter(el) {
    var rect = el.getBoundingClientRect();
    var tx = Number(el.dataset.mobilityTx || 0);
    var ty = Number(el.dataset.mobilityTy || 0);
    return {
      x: rect.left + rect.width * 0.5 - tx,
      y: rect.bottom - ty,
      width: rect.width,
      height: rect.height,
    };
  }

  function applyManagedTransform(el, target) {
    if (!el || !target) return;
    var base = getManagedBaseCenter(el);
    var tx = target.x - base.x;
    var ty = target.y - base.y;
    el.dataset.mobilityTx = String(tx);
    el.dataset.mobilityTy = String(ty);
    el.style.transform = "translate3d(" + Math.round(tx) + "px, " + Math.round(ty) + "px, 0)";
    el.style.transition = "transform 220ms ease, box-shadow 220ms ease, opacity 180ms ease";
    el.style.willChange = "transform";
    el.style.zIndex = "2100";
  }

  function resetCitizenTransforms() {
    var nodes = collectCitizenBubbles();
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      delete el.dataset.mobilityTx;
      delete el.dataset.mobilityTy;
      el.style.transform = "";
      el.style.transition = "";
      el.style.willChange = "";
    }
  }

  function relayoutCitizenBubbles() {
    if (!isMobilityPresetActive()) {
      resetCitizenTransforms();
      return;
    }

    var nodes = collectCitizenBubbles();
    if (nodes.length === 0) return;

    var metas = [];
    for (var i = 0; i < nodes.length; i++) {
      metas.push({
        el: nodes[i],
        base: getManagedBaseCenter(nodes[i]),
      });
    }
    metas.sort(function (a, b) {
      return a.base.x - b.base.x || a.base.y - b.base.y;
    });

    var slots = buildCitizenSlots(metas.length);
    for (var j = 0; j < metas.length; j++) {
      applyManagedTransform(metas[j].el, slots[j]);
    }
  }

  function scheduleLayout() {
    if (scheduledLayout) return;
    scheduledLayout = true;
    requestAnimationFrame(function () {
      scheduledLayout = false;
      coalesce("mobility:preset:layout", function () {
        setPresetDataState();
        syncMobilityChainCards();
        relayoutCitizenBubbles();
      });
    });
  }

  function installPresetUi() {
    remapLegacyLocalStorageValues();
    ensureMobilityPresetOption();
    setPresetDataState();

    var presetSelect = getScriptPresetSelect();
    var modeSelect = getScriptModeSelect();
    if (presetSelect) presetSelect.addEventListener("change", scheduleLayout);
    if (modeSelect) modeSelect.addEventListener("change", scheduleLayout);
  }

  function installBubbleStyleUi() {
    var select = getBubbleStyleSelect();
    if (!select) return;
    var next = readBubbleStyle();
    if (select.value !== next) select.value = next;
    safe(function () {
      localStorage.setItem(LS_KEY_BUBBLE_STYLE, next);
    });
    select.addEventListener("change", function () {
      var style = normalizeBubbleStyle(select.value);
      if (select.value !== style) select.value = style;
      safe(function () {
        localStorage.setItem(LS_KEY_BUBBLE_STYLE, style);
      });
      scheduleLayout();
    });
  }

  function installObservers() {
    if (observersInstalled) return;
    observersInstalled = true;

    var chat = getChatLog();
    if (chat) {
      safe(function () {
        new MutationObserver(scheduleLayout).observe(chat, { childList: true, subtree: true, characterData: true });
      });
    }

    var host = getChatContainer();
    if (host) {
      safe(function () {
        new MutationObserver(scheduleLayout).observe(host, { childList: true, subtree: true });
      });
    }

    window.addEventListener("resize", scheduleLayout, { passive: true });
    window.addEventListener("orientationchange", scheduleLayout, { passive: true });
    var send = getSendButton();
    if (send) send.addEventListener("click", scheduleLayout, true);
    var input = getChatInput();
    if (input) {
      input.addEventListener(
        "keydown",
        function (ev) {
          if (ev.key === "Enter" && !ev.shiftKey && !ev.ctrlKey && !ev.metaKey && !ev.altKey) scheduleLayout();
        },
        true,
      );
    }

    setInterval(scheduleLayout, 1400);
  }

  function boot() {
    installPresetUi();
    installBubbleStyleUi();
    installObservers();
    scheduleLayout();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
