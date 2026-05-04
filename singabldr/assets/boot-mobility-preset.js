/* Singabldr Mobility preset enhancer:
 * - Adds/hardens the Mobility preset and hides legacy preset entries
 * - Mirrors recent chat into spread-out chain-of-bubbles cards with curved links
 * - Reflows citizen chatter bubbles to reduce overlap on mobile viewports
 *
 * SSOT POLICY:
 * - Edit ONLY in singabldr (this file).
 * - Synced into the Cloudflare Pages publish repo via `npm run sync:pages` / `npm run release:pages`.
 * - FORBID hand-editing in `huijoohwee/content/singabldr/**`.
 */
(function singabldrMobilityPreset() {
  "use strict";

  // Script-level install guard (avoid JS globals):
  // Use a DOM flag instead of window globals to prevent accidental double-inclusion churn.
  try {
    var root = typeof document !== "undefined" ? document.documentElement : null;
    if (root && root.dataset && root.dataset.sbMobilityPresetEnhancerV1 === "1") return;
    if (root && root.dataset) root.dataset.sbMobilityPresetEnhancerV1 = "1";
  } catch {}

  var PRESET_VALUE = "script-mobility-pwa.v1.json";
  var PRESET_LABEL = "Mobility";
  var KNOWN_PRESET_VALUES = [
    "script-mobility-pwa.v1.json",
    "script-0000.json",
    "script-singabuildr-0000.v2.json",
    "script-simengine.json",
  ];
  var LEGACY_PRESET_VALUES = new Set([
    "script-singabldr-0001.json",
    "script-singabuildr-0001.json",
    "script-singabuildr-0001-startup.json",
  ]);
  var CHAIN_CARD_CLASS = "mobility-chain-card";
  // Use the global bubble-links layer ID (styled in overrides.css) so edges are visible
  // across bubble styles (colorful/simple/blank) without relying on legacy chain layer CSS.
  var CHAIN_LAYER_ID = "bubble-links-layer";
  // Mobility preset: 120s timeline, seed bubbles appear at 8s intervals => 15 bubbles.
  // Keep this bounded (performance), but do not auto-close within the window.
  var CHAIN_ENTRY_LIMIT = 15;
  var LS_KEY_BUBBLE_STYLE = "singabldr.bubble.style";
  var LS_KEY_CHAIN_ENABLED = "singabldr.chain.enabled";
  var LS_KEY_CHAIN_CLICK_SEND = "singabldr.chain.click.send";
  var LS_KEY_CHAIN_PARSE_LISTS = "singabldr.chain.parse.lists";
  var LS_KEY_CHAIN_LAYOUT = "singabldr.chain.layout";
  var LS_KEY_CHAIN_STACK = "singabldr.chain.stack";
  var LS_KEY_MOBILITY_DEFAULTS_APPLIED = "singabldr.mobility.defaults.v1";
  var LS_KEY_CHAT_FLOWINFISH_DEFAULT_OPEN = "singabldr.chat.flowinfish.default_open";
  var LS_KEY_MOBILITY_DRAG_HINT_DISMISSED = "singabldr.mobility.drag.hint.dismissed.v1";
  var BUBBLE_STYLE_COLORFUL = "colorful";
  var BUBBLE_STYLE_SIMPLE = "simple";
  var BUBBLE_STYLE_BLANK = "blank";
  var CHAIN_ENABLED_ENABLED = "enabled";
  var CHAIN_ENABLED_DISABLED = "disabled";
  var CHAIN_CLICK_SEND = "send";
  var CHAIN_CLICK_FILL = "fill";
  var CHAIN_PARSE_LISTS_ENABLED = "enabled";
  var CHAIN_PARSE_LISTS_DISABLED = "disabled";
  var CHAT_FLOWINFISH_OPEN = "open";
  var CHAT_FLOWINFISH_CLOSED = "closed";
  var CHAIN_LAYOUT_GRID = "grid-relaxed";
  var CHAIN_LAYOUT_ZIG_ZAG = "zig-zag";
  var CHAIN_LAYOUT_ARC = "arc";
  var CHAIN_STACK_EXPANDED = "expanded";
  var CHAIN_STACK_COLLAPSED = "collapsed";
  // Preset reveal cadence (8s).
  var CHAIN_REVEAL_STEP_MS = 8000;
  var scheduledLayout = false;
  var defaultsReasserted = false;
  var CSS_VAR_CANVAS_SCALE = "--sb-canvas-scale";
  // Script-level (Mobility) only: do NOT install Mobility globals.
  var globalChainCardUiInstalled = false;
  var mobilityLayoutPollTimer = 0;
  /** @type {{active:boolean, cleanup: Array<() => void>}} */
  var mobilityRuntime = { active: false, cleanup: [] };
  var chainState = {
    order: [],
    itemsById: Object.create(null),
    closed: Object.create(null),
    pinned: Object.create(null),
    transcriptKeys: Object.create(null),
    nextAssistantIndex: 0,
    childCountById: Object.create(null),
    followOnCountById: Object.create(null),
    syntheticById: Object.create(null),
    syntheticOrder: [],
    pendingSpawn: null,
    lastUserPrompt: "",
    transcriptDirty: true,
    citizenDirty: true,
    lastTranscriptSignature: "",
    lastChainSignature: "",
    lastCitizenSignature: "",
    scriptRevealKey: "",
    scriptRevealCount: 0,
    scriptRevealTimer: 0,
    viewScale: 1,
    viewPanX: 0,
    viewPanY: 0,
    dragPointerId: -1,
    dragLastX: 0,
    dragLastY: 0,
    gestureScaleBase: 1,
    // When present, a synthetic "draft prompt" node (created from ➕) mirrors the chat input.
    activeDraftId: "",
  };
  var scriptState = {
    order: [],
    itemsById: Object.create(null),
  };
  var scriptSeedRequested = false;
  var MOBILITY_TONES = ["sky", "mint", "violet", "amber", "coral", "navy"];
  // Citizen bubble SSOT state (Mobility colorful mode).
  var citizenState = {
    nextId: 0,
    closedById: Object.create(null),
    pinnedById: Object.create(null),
    // Pin is stored in "layout space" (pre zoom/pan transform), so pinned bubbles
    // move WITH the view transform but are excluded from collision reflow.
    pinnedAnchorXById: Object.create(null),
    pinnedAnchorYById: Object.create(null),
    activeId: "",
    activeTimer: 0,
  };
  var citizenInteractionsInstalled = false;
  var dragHintInstalled = false;
  /** @type {HTMLElement|null} */
  var dragHintEl = null;

  function safe(fn, fallback) {
    try {
      var value = fn();
      return value === undefined ? fallback : value;
    } catch {
      return fallback;
    }
  }

  // ---------------------------------------------------------------------------
  // Shared pointer helpers (MUST be top-level):
  // - Used by chain-card drag hit-testing AND the global bubbles UI adapter bridge.
  // - Do not define these only inside conditional installers, otherwise they can be
  //   undefined when the global bubbles UI is active (which disables local handlers).
  // ---------------------------------------------------------------------------
  function getClientPoint(ev) {
    var x = 0;
    var y = 0;
    var touch = safe(function () {
      if (!ev) return null;
      if (ev.touches && ev.touches.length) return ev.touches[0];
      if (ev.changedTouches && ev.changedTouches.length) return ev.changedTouches[0];
      return null;
    }, null);
    if (touch) {
      x = Number(touch.clientX || 0);
      y = Number(touch.clientY || 0);
    } else {
      x = Number(ev && ev.clientX || 0);
      y = Number(ev && ev.clientY || 0);
    }
    return { x: x, y: y };
  }

  function pinBubbleAtScreen(id, screenX, screenY) {
    // Convert screen coords into "layout space" anchors so pinned bubbles move WITH view transforms.
    // NOTE: getSafeViewport/getViewportZoomScale/getCanvasScale are declared later in this file.
    var vp = getSafeViewport();
    var cx = vp.left + vp.width * 0.5;
    var cy = vp.top + vp.height * 0.5;
    var scale = getViewportZoomScale() * getCanvasScale();
    var panX = Number(chainState.viewPanX || 0);
    var panY = Number(chainState.viewPanY || 0);
    var anchorX = cx + (Number(screenX || 0) - cx - panX) / Math.max(0.0001, scale);
    var anchorY = cy + (Number(screenY || 0) - cy - panY) / Math.max(0.0001, scale);
    citizenState.pinnedById[id] = true;
    citizenState.pinnedAnchorXById[id] = String(anchorX);
    citizenState.pinnedAnchorYById[id] = String(anchorY);
    chainState.citizenDirty = true;
  }

  // Shared persistence (prefer global helper installed by boot-bubbles-ui.js).
  // Goal: suppress duplicate localStorage churn and coalesce writes across runtime scripts.
  function persistSet(key, value, signature) {
    var k = String(key || "");
    if (!k) return;
    var v = value == null ? "" : String(value);
    var sig = signature == null ? v : String(signature);
    // Prefer the global persistence helper when present.
    try {
      var p = window.__SINGABLDR_PERSIST;
      if (p && typeof p.lsSet === "function") {
        p.lsSet(k, v, { signature: sig });
        return;
      }
    } catch {}
    // Fallback: coalesce locally.
    coalesce("persist:" + k, function () {
      try {
        var prev = localStorage.getItem(k);
        if (prev === v) return;
        localStorage.setItem(k, v);
      } catch {}
    });
  }

  // Script-level scheduler (Mobility MUST NOT install globals).
  // Prefer the global shared scheduler when present (installed by non-Mobility boot code),
  // otherwise fall back to a local coalescer.
  /** @type {Map<string, Function>} */
  var localPendingByKey = new Map();
  var localCoalesceScheduled = false;
  /** @type {Map<string, any>} */
  var localThrottleTimers = new Map();

  function shouldShowDragHint() {
    // Touch devices have no cursor; provide a lightweight affordance (no churn).
    return safe(function () {
      return (
        typeof window !== "undefined" &&
        typeof window.matchMedia === "function" &&
        window.matchMedia("(hover: none) and (pointer: coarse)").matches
      );
    }, false);
  }

  function isDragHintDismissed() {
    return safe(function () {
      return localStorage.getItem(LS_KEY_MOBILITY_DRAG_HINT_DISMISSED) === "1";
    }, false);
  }

  function dismissDragHint() {
    if (!dragHintEl) return;
    safe(function () {
      dragHintEl.remove();
    });
    dragHintEl = null;
    safe(function () {
      persistSet(LS_KEY_MOBILITY_DRAG_HINT_DISMISSED, "1", "1");
    });
  }

  function installDragHintUi() {
    if (dragHintInstalled) return;
    dragHintInstalled = true;
    if (!shouldShowDragHint()) return;
    if (isDragHintDismissed()) return;

    safe(function () {
      var el = document.createElement("div");
      el.id = "mobility-drag-hint";
      el.textContent = "Drag to pan  ☝︎";
      el.style.position = "fixed";
      el.style.left = "50%";
      el.style.bottom = "calc(18px + env(safe-area-inset-bottom, 0px))";
      el.style.transform = "translateX(-50%)";
      el.style.zIndex = "2600";
      el.style.pointerEvents = "none";
      el.style.padding = "10px 14px";
      el.style.borderRadius = "999px";
      el.style.border = "2px solid rgba(45, 52, 54, 0.55)";
      el.style.background = "rgba(255, 255, 255, 0.82)";
      el.style.backdropFilter = "blur(10px) saturate(1.1)";
      el.style.color = "#2d3436";
      el.style.fontFamily = "\"Nunito\", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif";
      el.style.fontWeight = "900";
      el.style.fontSize = "13px";
      el.style.letterSpacing = "0.2px";
      el.style.boxShadow = "0 10px 24px rgba(0,0,0,0.10)";
      document.body.appendChild(el);
      dragHintEl = el;
    });

    // Auto-dismiss (avoid stale UI).
    try {
      setTimeout(function () {
        dismissDragHint();
      }, 4200);
    } catch {}
  }

  // Shared canvas cache (avoid repeated querySelectorAll("canvas") churn).
  var canvasNodesCache = { nodes: [], lastScanMs: 0 };
  function getCanvasNodesCached() {
    var now = Date.now();
    if (now - canvasNodesCache.lastScanMs < 1200 && canvasNodesCache.nodes.length) return canvasNodesCache.nodes;
    canvasNodesCache.lastScanMs = now;
    canvasNodesCache.nodes = safe(function () {
      return Array.from(document.querySelectorAll("canvas"));
    }, []);
    return canvasNodesCache.nodes;
  }

  // Touch-action control:
  // Some mobile browsers suppress pointermove during scroll/gesture handling unless the target
  // opts out via touch-action. Apply to canvases only (do NOT affect modal scrolling).
  var lastCanvasTouchActionMode = "";
  function applyCanvasTouchActionForMobility() {
    var wants = "";
    // Global: coarse pointers need touch-action:none on canvas for reliable drag delivery (WebKit).
    if (isChainEnabled() && shouldShowDragHint()) wants = "none";
    if (wants === lastCanvasTouchActionMode) return;
    lastCanvasTouchActionMode = wants;

    throttle("mobility:canvas:touchAction", function () {
      safe(function () {
        var canvases = getCanvasNodesCached();
        for (var i = 0; i < canvases.length; i++) {
          // On some engines, touch-action must be set as a style property (not CSS) to take effect
          // in embedded shells. Keep it minimal and reversible.
          canvases[i].style.touchAction = wants;
        }
      });
    }, 64);
  }

  function coalesce(key, fn) {
    var k = String(key || "default");
    if (typeof fn !== "function") return;
    try {
      if (typeof window.__SINGABLDR_COALESCE === "function") {
        window.__SINGABLDR_COALESCE(k, fn);
        return;
      }
    } catch {}
    localPendingByKey.set(k, fn);
    if (localCoalesceScheduled) return;
    localCoalesceScheduled = true;
    Promise.resolve().then(function () {
      localCoalesceScheduled = false;
      var entries = Array.from(localPendingByKey.entries());
      localPendingByKey.clear();
      for (var i = 0; i < entries.length; i++) {
        try {
          entries[i][1]();
        } catch {}
      }
    });
  }

  function throttle(key, fn, waitMs) {
    var k = String(key || "default");
    if (typeof fn !== "function") return;
    var wait = Math.max(0, Number(waitMs || 0));
    try {
      if (typeof window.__SINGABLDR_THROTTLE === "function") {
        window.__SINGABLDR_THROTTLE(k, fn, wait);
        return;
      }
    } catch {}
    if (wait <= 0) return coalesce(k, fn);
    if (localThrottleTimers.has(k)) return;
    try {
      localThrottleTimers.set(
        k,
        setTimeout(function () {
          try {
            localThrottleTimers.delete(k);
          } catch {}
          coalesce(k, fn);
        }, wait),
      );
    } catch {
      coalesce(k, fn);
    }
  }

  function resetCanvasTouchActionForMobility() {
    // Ensure canvases are reverted when Mobility runtime detaches (avoid stale touch-action:none).
    lastCanvasTouchActionMode = "__reset__";
    throttle("mobility:canvas:touchAction", function () {
      safe(function () {
        var canvases = getCanvasNodesCached();
        for (var i = 0; i < canvases.length; i++) {
          canvases[i].style.touchAction = "";
        }
      });
    }, 0);
  }

  function detachMobilityRuntime() {
    if (!mobilityRuntime.active) return;
    mobilityRuntime.active = false;
    for (var i = mobilityRuntime.cleanup.length - 1; i >= 0; i--) {
      try {
        mobilityRuntime.cleanup[i]();
      } catch {}
    }
    mobilityRuntime.cleanup = [];
    globalChainCardUiInstalled = false;
    try {
      if (mobilityLayoutPollTimer) clearInterval(mobilityLayoutPollTimer);
    } catch {}
    mobilityLayoutPollTimer = 0;
    dismissDragHint();
    resetCanvasTouchActionForMobility();
    // Remove any remaining runtime layers so non-Mobility scripts don't inherit them.
    clearMobilityChainCards();
    clearMobilityCitizenLayer();
    safe(function () {
      var layer = byId(CHAIN_LAYER_ID);
      if (layer) layer.remove();
    });
  }

  function attachMobilityRuntime() {
    if (mobilityRuntime.active) return;
    mobilityRuntime.active = true;
    mobilityRuntime.cleanup = [];

    // Only install runtime interactions while Mobility preset is active.
    // (UI wiring can exist, but heavy listeners must be attached/detached.)
    mobilityRuntime.cleanup.push(installGlobalChainCardUi());
    mobilityRuntime.cleanup.push(installObservers());
    mobilityRuntime.cleanup.push(installLayoutPollFallback());
    mobilityRuntime.cleanup.push(installBootLayoutPasses());
    // If global bubbles UI isn't present, Mobility owns citizen bubble hit-testing.
    mobilityRuntime.cleanup.push(installCitizenBubbleInteractions());
    installDragHintUi();
    // Kick one immediate layout so activation feels instant.
    scheduleLayout();
  }

  function updateMobilityRuntime() {
    if (isMobilityPresetActive()) attachMobilityRuntime();
    else detachMobilityRuntime();
  }

  function cancelScriptReveal() {
    if (chainState.scriptRevealTimer) {
      try {
        clearTimeout(chainState.scriptRevealTimer);
      } catch {}
    }
    chainState.scriptRevealTimer = 0;
  }

  function isScriptSeedId(id) {
    return /^preset-/i.test(String(id || ""));
  }

  function shouldRevealScriptSeedItems(items) {
    if (!isMobilityPresetActive()) return false;
    if (!isChainEnabled()) return false;
    if (readScriptModeValue() !== "auto") return false;
    if (!items || items.length === 0) return false;
    for (var i = 0; i < items.length; i++) {
      if (!items[i] || !isScriptSeedId(items[i].id)) return false;
    }
    return true;
  }

  function startScriptRevealIfNeeded(items) {
    if (!shouldRevealScriptSeedItems(items)) {
      cancelScriptReveal();
      chainState.scriptRevealKey = "";
      chainState.scriptRevealCount = 0;
      return;
    }

    // Stable key: restart only when the seed list changes.
    var key = "seed:" + hashText(items.map(function (x) { return x && x.id ? x.id : ""; }).join("|"));
    if (chainState.scriptRevealKey === key) return;
    chainState.scriptRevealKey = key;
    chainState.scriptRevealCount = Math.min(1, items.length);
    cancelScriptReveal();

    var tick = function () {
      // Stop if user changes mode/preset, or if real chat takes over.
      if (!shouldRevealScriptSeedItems(items)) {
        cancelScriptReveal();
        return;
      }
      if (chainState.scriptRevealCount >= items.length) {
        cancelScriptReveal();
        return;
      }
      chainState.scriptRevealCount = Math.min(items.length, chainState.scriptRevealCount + 1);
      scheduleLayout();
      chainState.scriptRevealTimer = setTimeout(tick, CHAIN_REVEAL_STEP_MS);
    };

    // Small delay so first card appears immediately, then others cascade.
    chainState.scriptRevealTimer = setTimeout(tick, CHAIN_REVEAL_STEP_MS);
  }

  function applyScriptReveal(items) {
    if (!shouldRevealScriptSeedItems(items)) return items;
    var n = Math.max(1, Number(chainState.scriptRevealCount || 0));
    return items.slice(0, Math.min(items.length, n));
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

  function getChainLayoutSelect() {
    return byId("chain-layout-select");
  }

  function getChainEnabledSelect() {
    return byId("chain-enabled-select");
  }

  function getChainClickSendSelect() {
    return byId("chain-click-send-select");
  }

  function getChainParseListsSelect() {
    return byId("chain-parse-lists-select");
  }

  function getSuperagentOpenBtn() {
    return byId("superagent-open-btn");
  }

  function getSuperagentDefaultOpenSelect() {
    return byId("superagent-default-open-select");
  }

  function getChainStackSelect() {
    return byId("chain-stack-select");
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

  function getChainHost() {
    return getChatContainer() || byId("superagent-container") || document.body;
  }

  function readActivePresetValue() {
    var select = getScriptPresetSelect();
    return select ? String(select.value || "").trim() : "";
  }

  function readScriptModeValue() {
    var select = getScriptModeSelect();
    return select ? String(select.value || "").trim().toLowerCase() : "";
  }

  function hasTranscriptConversation(items) {
    if (!items || items.length === 0) return false;
    var hasUser = false;
    var hasAssistant = false;
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      if (!it || it.isSystem) continue;
      if (it.role === "user") hasUser = true;
      if (it.role === "assistant") hasAssistant = true;
      if (hasUser && hasAssistant) return true;
    }
    return false;
  }

  function isMobilityPresetActive() {
    return readActivePresetValue() === PRESET_VALUE;
  }

  function normalizeBubbleStyle(value) {
    var v = String(value || "").trim().toLowerCase();
    if (v === BUBBLE_STYLE_SIMPLE) return BUBBLE_STYLE_SIMPLE;
    if (v === BUBBLE_STYLE_BLANK) return BUBBLE_STYLE_BLANK;
    return BUBBLE_STYLE_COLORFUL;
  }

  function normalizeChainEnabled(value) {
    return String(value || "").trim().toLowerCase() === CHAIN_ENABLED_DISABLED
      ? CHAIN_ENABLED_DISABLED
      : CHAIN_ENABLED_ENABLED;
  }

  function readChainEnabled() {
    var fromUi = safe(function () {
      var select = getChainEnabledSelect();
      return select ? String(select.value || "") : "";
    }, "");
    if (fromUi) return normalizeChainEnabled(fromUi);
    var persisted = safe(function () {
      return String(localStorage.getItem(LS_KEY_CHAIN_ENABLED) || "");
    }, "");
    return normalizeChainEnabled(persisted || CHAIN_ENABLED_ENABLED);
  }

  function isChainEnabled() {
    return readChainEnabled() === CHAIN_ENABLED_ENABLED;
  }

  function normalizeChainClickSend(value) {
    return String(value || "").trim().toLowerCase() === CHAIN_CLICK_FILL ? CHAIN_CLICK_FILL : CHAIN_CLICK_SEND;
  }

  function readChainClickSend() {
    var fromUi = safe(function () {
      var select = getChainClickSendSelect();
      return select ? String(select.value || "") : "";
    }, "");
    if (fromUi) return normalizeChainClickSend(fromUi);
    var persisted = safe(function () {
      return String(localStorage.getItem(LS_KEY_CHAIN_CLICK_SEND) || "");
    }, "");
    return normalizeChainClickSend(persisted || CHAIN_CLICK_SEND);
  }

  function shouldAutoSendFromChainCardClick() {
    // Global default: chain node clicks should send immediately to enable branching.
    // (The "+ Add" control still only fills input.)
    return true;
  }

  function normalizeChainParseLists(value) {
    return String(value || "").trim().toLowerCase() === CHAIN_PARSE_LISTS_DISABLED
      ? CHAIN_PARSE_LISTS_DISABLED
      : CHAIN_PARSE_LISTS_ENABLED;
  }

  function readChainParseLists() {
    var fromUi = safe(function () {
      var select = getChainParseListsSelect();
      return select ? String(select.value || "") : "";
    }, "");
    if (fromUi) return normalizeChainParseLists(fromUi);
    var persisted = safe(function () {
      return String(localStorage.getItem(LS_KEY_CHAIN_PARSE_LISTS) || "");
    }, "");
    return normalizeChainParseLists(persisted || CHAIN_PARSE_LISTS_ENABLED);
  }

  function isChainParseListsEnabled() {
    return readChainParseLists() === CHAIN_PARSE_LISTS_ENABLED;
  }

  function normalizeChatFlowinfishDefaultOpen(value) {
    return String(value || "").trim().toLowerCase() === CHAT_FLOWINFISH_OPEN ? CHAT_FLOWINFISH_OPEN : CHAT_FLOWINFISH_CLOSED;
  }

  function readChatFlowinfishDefaultOpen() {
    var fromUi = safe(function () {
      var select = getSuperagentDefaultOpenSelect();
      return select ? String(select.value || "") : "";
    }, "");
    if (fromUi) return normalizeChatFlowinfishDefaultOpen(fromUi);
    var persisted = safe(function () {
      return String(localStorage.getItem(LS_KEY_CHAT_FLOWINFISH_DEFAULT_OPEN) || "");
    }, "");
    return normalizeChatFlowinfishDefaultOpen(persisted || CHAT_FLOWINFISH_CLOSED);
  }

  function shouldDefaultOpenFlowinfishPanel() {
    return readChatFlowinfishDefaultOpen() === CHAT_FLOWINFISH_OPEN;
  }

  function ensureSuperagentVisible() {
    safe(function ensureVisibleNow() {
      var container = byId("superagent-container");
      var panel = byId("superagent-panel");
      var button = byId("superagent-btn");
      var containerHidden =
        !container ||
        (window.getComputedStyle &&
          safe(function () {
            return window.getComputedStyle(container).display === "none";
          }, false));
      var panelHidden =
        !panel ||
        (window.getComputedStyle &&
          safe(function () {
            return window.getComputedStyle(panel).display === "none";
          }, false));
      if ((containerHidden || panelHidden) && button && typeof button.click === "function") {
        button.click();
      }
      // Fallback: force visibility if the button wiring doesn't run (or runs later).
      if (container && containerHidden) container.style.display = "block";
      if (panel && panelHidden) panel.style.display = "flex";
    });
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

  function isSimpleBubbleStyle() {
    return readBubbleStyle() === BUBBLE_STYLE_SIMPLE;
  }

  function isBlankBubbleStyle() {
    return readBubbleStyle() === BUBBLE_STYLE_BLANK;
  }

  function normalizeChainLayout(value) {
    var v = String(value || "").trim().toLowerCase();
    if (v === CHAIN_LAYOUT_ZIG_ZAG || v === CHAIN_LAYOUT_ARC) return v;
    return CHAIN_LAYOUT_GRID;
  }

  function readChainLayout() {
    var fromUi = safe(function () {
      var select = getChainLayoutSelect();
      return select ? String(select.value || "") : "";
    }, "");
    if (fromUi) return normalizeChainLayout(fromUi);
    var persisted = safe(function () {
      return String(localStorage.getItem(LS_KEY_CHAIN_LAYOUT) || "");
    }, "");
    return normalizeChainLayout(persisted || CHAIN_LAYOUT_GRID);
  }

  function normalizeChainStack(value) {
    return String(value || "").trim().toLowerCase() === CHAIN_STACK_COLLAPSED
      ? CHAIN_STACK_COLLAPSED
      : CHAIN_STACK_EXPANDED;
  }

  function readChainStack() {
    var fromUi = safe(function () {
      var select = getChainStackSelect();
      return select ? String(select.value || "") : "";
    }, "");
    if (fromUi) return normalizeChainStack(fromUi);
    var persisted = safe(function () {
      return String(localStorage.getItem(LS_KEY_CHAIN_STACK) || "");
    }, "");
    return normalizeChainStack(persisted || CHAIN_STACK_EXPANDED);
  }

  function dispatchChange(el) {
    safe(function () {
      if (!el) return;
      el.dispatchEvent(new Event("change", { bubbles: true }));
    });
  }

  function readDefaultsApplied() {
    return safe(function () {
      return String(localStorage.getItem(LS_KEY_MOBILITY_DEFAULTS_APPLIED) || "") === "1";
    }, false);
  }

  function markDefaultsApplied() {
    safe(function () {
      persistSet(LS_KEY_MOBILITY_DEFAULTS_APPLIED, "1", "1");
    });
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
        persistSet(key, PRESET_VALUE, PRESET_VALUE);
      }
    });
  }

  function hasPersistedPresetChoice() {
    return safe(function () {
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (!key) continue;
        var lowerKey = String(key).toLowerCase();
        if (lowerKey.indexOf("preset") < 0 && lowerKey.indexOf("script") < 0) continue;
        var value = String(localStorage.getItem(key) || "").trim();
        if (KNOWN_PRESET_VALUES.indexOf(value) >= 0) return true;
      }
      return false;
    }, false);
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
    if (!hasPersistedPresetChoice() || !nextValue || LEGACY_PRESET_VALUES.has(nextValue)) {
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
      document.body.dataset.singabldrChainEnabled = readChainEnabled();
      document.documentElement.dataset.singabldrChainEnabled = readChainEnabled();
      document.body.dataset.singabldrChainLayout = readChainLayout();
      document.documentElement.dataset.singabldrChainLayout = readChainLayout();
      document.body.dataset.singabldrChainStack = readChainStack();
      document.documentElement.dataset.singabldrChainStack = readChainStack();
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
      statusEl.innerText = "Mobility preset is active. Mobile/PWA route demo ready.";
      statusEl.style.color = "#0984e3";
    }
  }

  function forceStartupDefaults() {
    var changed = false;
    var presetSelect = getScriptPresetSelect();
    if (presetSelect && String(presetSelect.value || "").trim() !== PRESET_VALUE) {
      presetSelect.value = PRESET_VALUE;
      dispatchChange(presetSelect);
      changed = true;
    }

    var modeSelect = getScriptModeSelect();
    if (modeSelect && String(modeSelect.value || "").trim().toLowerCase() !== "auto") {
      modeSelect.value = "auto";
      dispatchChange(modeSelect);
      changed = true;
    }

    var bubbleSelect = getBubbleStyleSelect();
    // Do NOT override bubble style (user-controlled). Only normalize empty/unknown values.
    if (bubbleSelect) {
      var normalized = normalizeBubbleStyle(bubbleSelect.value);
      if (!bubbleSelect.value || normalizeBubbleStyle(bubbleSelect.value) !== normalized) {
        bubbleSelect.value = normalized || BUBBLE_STYLE_COLORFUL;
        dispatchChange(bubbleSelect);
        changed = true;
      }
    }
    var chainEnabledSelect = getChainEnabledSelect();
    if (chainEnabledSelect && normalizeChainEnabled(chainEnabledSelect.value) !== CHAIN_ENABLED_ENABLED) {
      chainEnabledSelect.value = CHAIN_ENABLED_ENABLED;
      dispatchChange(chainEnabledSelect);
      changed = true;
    }
    var chainClickSelect = getChainClickSendSelect();
    if (chainClickSelect && normalizeChainClickSend(chainClickSelect.value) !== CHAIN_CLICK_SEND) {
      chainClickSelect.value = CHAIN_CLICK_SEND;
      dispatchChange(chainClickSelect);
      changed = true;
    }
    var chainParseSelect = getChainParseListsSelect();
    if (chainParseSelect && normalizeChainParseLists(chainParseSelect.value) !== CHAIN_PARSE_LISTS_ENABLED) {
      chainParseSelect.value = CHAIN_PARSE_LISTS_ENABLED;
      dispatchChange(chainParseSelect);
      changed = true;
    }
    var chatDefaultOpenSelect = getSuperagentDefaultOpenSelect();
    if (
      chatDefaultOpenSelect &&
      normalizeChatFlowinfishDefaultOpen(chatDefaultOpenSelect.value) !== CHAT_FLOWINFISH_CLOSED
    ) {
      chatDefaultOpenSelect.value = CHAT_FLOWINFISH_CLOSED;
      dispatchChange(chatDefaultOpenSelect);
      changed = true;
    }
    var chainLayoutSelect = getChainLayoutSelect();
    if (chainLayoutSelect && normalizeChainLayout(chainLayoutSelect.value) !== CHAIN_LAYOUT_GRID) {
      chainLayoutSelect.value = CHAIN_LAYOUT_GRID;
      dispatchChange(chainLayoutSelect);
      changed = true;
    }
    var chainStackSelect = getChainStackSelect();
    if (chainStackSelect && normalizeChainStack(chainStackSelect.value) !== CHAIN_STACK_EXPANDED) {
      chainStackSelect.value = CHAIN_STACK_EXPANDED;
      dispatchChange(chainStackSelect);
      changed = true;
    }

    safe(function () {
      // Persist the current (user-selected) bubble style; never force it.
      persistSet(
        LS_KEY_BUBBLE_STYLE,
        normalizeBubbleStyle(readBubbleStyle() || BUBBLE_STYLE_COLORFUL),
        "bubble-style",
      );
      persistSet(LS_KEY_CHAIN_ENABLED, CHAIN_ENABLED_ENABLED, CHAIN_ENABLED_ENABLED);
      persistSet(LS_KEY_CHAIN_CLICK_SEND, CHAIN_CLICK_SEND, CHAIN_CLICK_SEND);
      persistSet(LS_KEY_CHAIN_PARSE_LISTS, CHAIN_PARSE_LISTS_ENABLED, CHAIN_PARSE_LISTS_ENABLED);
      persistSet(LS_KEY_CHAT_FLOWINFISH_DEFAULT_OPEN, CHAT_FLOWINFISH_CLOSED, CHAT_FLOWINFISH_CLOSED);
      persistSet(LS_KEY_CHAIN_LAYOUT, CHAIN_LAYOUT_GRID, CHAIN_LAYOUT_GRID);
      persistSet(LS_KEY_CHAIN_STACK, CHAIN_STACK_EXPANDED, CHAIN_STACK_EXPANDED);
    });
    setPresetDataState();
    if (changed) scheduleLayout();
  }

  function installStartupDefaultsMigration() {
    if (readDefaultsApplied()) return;
    forceStartupDefaults();
    markDefaultsApplied();
  }

  function reassertStartupDefaultsOnce() {
    if (defaultsReasserted) return;
    defaultsReasserted = true;
    setTimeout(function () {
      forceStartupDefaults();
    }, 420);
    setTimeout(function () {
      forceStartupDefaults();
    }, 1600);
  }

  function installBootLayoutPasses() {
    // Script-level, runtime-scoped: schedule a few post-boot layout passes and allow cleanup.
    /** @type {any[]} */
    var timeouts = [];
    [900, 2400, 5200, 9800, 13200].forEach(function (delay) {
      try {
        var t = setTimeout(function () {
          runLayoutNow();
        }, delay);
        timeouts.push(t);
      } catch {}
    });
    return function cleanupBootLayoutPasses() {
      for (var i = 0; i < timeouts.length; i++) {
        try {
          clearTimeout(timeouts[i]);
        } catch {}
      }
      timeouts = [];
    };
  }

  function compactText(text, limit) {
    var s = String(text || "").replace(/\s+/g, " ").trim();
    if (!s) return "";
    var max = Number.isFinite(limit) ? limit : 120;
    if (s.length <= max) return s;
    return s.slice(0, Math.max(16, max - 1)).trim() + "…";
  }

  function formatChainIndex(value) {
    return String(Math.max(1, Number(value) || 1)).padStart(3, "0");
  }

  function isSystemChatText(text) {
    var value = String(text || "").trim();
    if (!value) return true;
    return /^🤖\s+Calling\b|^⚠️|^❌|^🔗|^🧠|^📎|^⌛|^Loading\b/i.test(value);
  }

  function normalizeReplyText(text) {
    return String(text || "")
      .replace(/\\r\\n/g, "\n")
      .replace(/\\n/g, "\n")
      .replace(/\\t/g, " ")
      .replace(/\\"/g, '"')
      .replace(/([^\n])\s+(?=(?:[-*]|\d+\.)\s+)/g, "$1\n")
      .trim();
  }

  function parseAssistantReplyIntoChainNodes(text, maxChildren) {
    var raw = normalizeReplyText(text);
    if (!raw) return { rootText: "", children: [] };
    var lines = raw
      .split(/\r?\n/)
      .map(function (line) { return String(line || "").trim(); })
      .filter(Boolean);
    if (lines.length === 0) return { rootText: "", children: [] };

    var isBullet = function (line) {
      return /^([-*]|\d+\.)\s+/.test(String(line || ""));
    };
    var stripBullet = function (line) {
      return String(line || "").replace(/^((?:[-*]|\d+\.)\s+)+/, "").trim();
    };

    var listEnabled = isChainParseListsEnabled();
    if (!listEnabled) {
      return { rootText: raw, children: [] };
    }

    var firstListIndex = -1;
    for (var i = 0; i < lines.length; i++) {
      if (isBullet(lines[i])) {
        firstListIndex = i;
        break;
      }
    }
    if (firstListIndex < 0) {
      return { rootText: raw, children: [] };
    }

    // Root: everything before the first list item (keeps “Here are key points:” as the root thread).
    var rootText = lines.slice(0, firstListIndex).join(" ").trim();
    if (!rootText) rootText = "AI response";

    var children = [];
    var seen = Object.create(null);
    var maxOut = Math.max(1, Number(maxChildren) || 7);

    for (var li = firstListIndex; li < lines.length; li++) {
      var line = lines[li];
      if (!isBullet(line)) continue;
      var cleaned = stripBullet(line);
      if (!cleaned) continue;

      // Continuation lines (wrapped list items): consume subsequent non-bullet lines.
      while (li + 1 < lines.length && !isBullet(lines[li + 1])) {
        var cont = stripBullet(lines[li + 1]);
        if (cont) cleaned = (cleaned + " " + cont).trim();
        li += 1;
      }

      var key = cleaned.toLowerCase();
      if (seen[key]) continue;
      seen[key] = true;
      children.push(cleaned);
      if (children.length >= maxOut) break;
    }

    return { rootText: rootText, children: children };
  }

  function allocateAssistantId(parentId) {
    if (!parentId) {
      chainState.nextAssistantIndex += 1;
      return "ai-" + formatChainIndex(chainState.nextAssistantIndex);
    }
    chainState.childCountById[parentId] = (chainState.childCountById[parentId] || 0) + 1;
    return parentId + "-" + formatChainIndex(chainState.childCountById[parentId]);
  }

  function createChainItem(id, role, text, meta) {
    return {
      id: id,
      role: role,
      text: compactText(text, 180),
      parentId: meta && meta.parentId ? meta.parentId : "",
      depth: meta && Number(meta.depth) > 0 ? Number(meta.depth) : 0,
      kind: meta && meta.kind ? meta.kind : role,
      promptText: compactText(meta && meta.promptText ? meta.promptText : text, 180),
    };
  }

  function ingestScriptMessages(messages) {
    for (var i = 0; i < messages.length; i++) {
      var item = messages[i];
      if (!item || !item.id || scriptState.itemsById[item.id]) continue;
      scriptState.itemsById[item.id] = item;
      scriptState.order.push(item.id);
    }
  }

  function collectScriptMessages() {
    var out = [];
    for (var i = 0; i < scriptState.order.length; i++) {
      var id = scriptState.order[i];
      var item = scriptState.itemsById[id];
      if (item) out.push(item);
    }
    return out;
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function getCanvasScale() {
    return clamp(chainState.viewScale || 1, 0.72, 2.4);
  }

  function updateCanvasScaleCssVar() {
    var scale = getCanvasScale();
    safe(function () {
      document.documentElement.style.setProperty(CSS_VAR_CANVAS_SCALE, scale.toFixed(3));
    });
  }

  function isCanvasEventTarget(target) {
    if (!target) return false;
    if (target instanceof HTMLCanvasElement) return true;
    return safe(function () {
      return typeof target.closest === "function" && !!target.closest("canvas");
    }, false);
  }

  function isUiControlTarget(target) {
    if (!target) return false;
    return safe(function () {
      if (typeof target.closest !== "function") return false;
      return !!target.closest(
        [
          "#settings-modal",
          "#settings-panel",
          "#login-screen",
          "#hud",
          "#ui",
          "#dice-container",
          "#superagent-container",
          "#history-panel",
          "#watermark-container",
          "#watermark-dropdown",
          "#quick-play-mode-btn",
          "#pwa-toast",
          ".mobility-chain-card",
        ].join(", "),
      );
    }, false);
  }

  function shouldTrackCanvasInteraction(target) {
    if (isUiControlTarget(target)) return false;
    if (isCanvasEventTarget(target)) return true;
    // Some browsers/app shells dispatch wheel/pointer events from wrapper layers, not canvas directly.
    return true;
  }

  function hashText(text) {
    var s = String(text || "");
    var hash = 0;
    for (var i = 0; i < s.length; i++) {
      hash = (hash * 31 + s.charCodeAt(i)) | 0;
    }
    return Math.abs(hash).toString(36);
  }

  function getCitizenBubbleId(el) {
    if (!el) return "";
    var existing = safe(function () {
      return String(el.dataset.mobilityCitizenId || "");
    }, "");
    if (existing) return existing;
    citizenState.nextId += 1;
    safe(function () {
      el.dataset.mobilityCitizenN = String(citizenState.nextId);
    });
    var raw = safe(function () {
      return String(el.innerText || el.textContent || "");
    }, "");
    var text = compactText(raw, 120);
    var id = "citizen-" + String(citizenState.nextId) + "-" + hashText(text);
    safe(function () {
      el.dataset.mobilityCitizenId = id;
    });
    return id;
  }

  function ensureCitizenBubbleUi(el) {
    if (!el) return;
    if (safe(function () { return el.dataset.mobilityUiReady === "1"; }, false)) return;
    safe(function () {
      el.dataset.mobilityUiReady = "1";
    });

    safe(function () {
      // Wrap existing text into a dedicated body span so CSS can clamp reliably.
      if (!el.querySelector(".citizen-bubble__body")) {
        var rawText = String(el.innerText || el.textContent || "");
        var header = document.createElement("span");
        header.className = "citizen-bubble__header";
        var n = safe(function () {
          return String(el.dataset.mobilityCitizenN || "");
        }, "");
        header.textContent = n ? "Citizen (" + n + ")" : "Citizen";

        var body = document.createElement("span");
        body.className = "citizen-bubble__body";
        body.textContent = rawText;
        el.textContent = "";
        el.appendChild(header);
        el.appendChild(body);
      }
    });

    safe(function () {
      if (el.querySelector(".citizen-bubble__actions")) return;
      var actions = document.createElement("div");
      actions.className = "citizen-bubble__actions";

      var pin = document.createElement("span");
      pin.className = "citizen-bubble__action citizen-bubble__action--pin";
      pin.textContent = "📍";
      actions.appendChild(pin);

      var add = document.createElement("span");
      add.className = "citizen-bubble__action citizen-bubble__action--add";
      add.textContent = "➕";
      actions.appendChild(add);

      var close = document.createElement("span");
      close.className = "citizen-bubble__action citizen-bubble__action--close";
      close.textContent = "✖";
      actions.appendChild(close);

      el.appendChild(actions);
    });
  }

  function buildCitizenItemFromEl(el) {
    var id = getCitizenBubbleId(el);
    var raw = safe(function () {
      var body = el && el.querySelector ? el.querySelector(".citizen-bubble__body") : null;
      return String((body ? body.textContent : el && (el.innerText || el.textContent)) || "");
    }, "");
    var text = compactText(raw, 160);
    // Prefer the chain item (preserves parentId/depth/kind for branching logic).
    var existing = chainState.itemsById[id];
    if (existing) {
      return Object.assign({}, existing, {
        text: text || existing.text,
        promptText: text || existing.promptText,
      });
    }
    return { id: id, role: safe(function () { return String(el.dataset.mobilityRole || ""); }, "") || "assistant", text: text, promptText: text, parentId: "", depth: 0, kind: "citizen" };
  }

  function isSyntheticFollowOnId(id) {
    // Synthetic nodes are not part of transcript SSOT; they are ephemeral UI helpers.
    // - ask-*: follow-up suggestions
    // - draft-*: user input bubble spawned by ➕
    return /^(ask-|draft-)/i.test(String(id || ""));
  }

  function isDraftPromptId(id) {
    return /^draft-/i.test(String(id || ""));
  }

  function getDraftPromptId(parentId) {
    return "draft-" + String(parentId || "root");
  }

  function removeSyntheticNode(id) {
    if (!id) return;
    delete chainState.syntheticById[id];
    delete chainState.itemsById[id];
    var idx = chainState.order.indexOf(id);
    if (idx >= 0) chainState.order.splice(idx, 1);
    var sidx = chainState.syntheticOrder.indexOf(id);
    if (sidx >= 0) chainState.syntheticOrder.splice(sidx, 1);
    if (chainState.activeDraftId === id) chainState.activeDraftId = "";
  }

  function openDraftPromptFromItem(parentItem) {
    if (!parentItem || !parentItem.id) return;
    var id = getDraftPromptId(parentItem.id);
    // If it already exists, just focus input and keep it visible.
    if (!chainState.itemsById[id]) {
      var depth = Math.max(0, Number(parentItem.depth) || 0) + 1;
      var node = createChainItem(id, "user", "", {
        parentId: parentItem.id,
        depth: depth,
        kind: "user-draft",
        promptText: "",
      });
      chainState.syntheticById[id] = node;
      if (chainState.syntheticOrder.indexOf(id) < 0) chainState.syntheticOrder.push(id);
      insertChainItemAfterSubtree(node);
      evictChainIfNeeded();
    }
    chainState.activeDraftId = id;
    chainState.citizenDirty = true;
    scheduleLayout();

    var input = getChatInput();
    if (!input) return;
    ensureSuperagentVisible();
    coalesce("mobility:draft:focus", function () {
      // New draft prompt: start empty for true user input.
      input.value = "";
      safe(function () {
        input.focus({ preventScroll: false });
        input.setSelectionRange(0, 0);
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.dispatchEvent(new Event("change", { bubbles: true }));
      });
    });
  }

  function allocateFollowOnId(parentId) {
    var key = String(parentId || "");
    chainState.followOnCountById[key] = (chainState.followOnCountById[key] || 0) + 1;
    return "ask-" + key + "-" + formatChainIndex(chainState.followOnCountById[key]);
  }

  function generateContextualFollowOnQuestions(item, maxCount) {
    var n = Math.max(1, Number(maxCount) || 3);
    var base = compactText((item && (item.promptText || item.text)) || "", 120);
    if (!base) base = "this";

    var out = [
      "Give 3 key takeaways about: " + base,
      "What are the risks / edge cases for: " + base,
      "What are the action items / next steps for: " + base,
      "Summarize in 2 lines: " + base,
    ];
    // Deduplicate + cap.
    var seen = Object.create(null);
    var finalOut = [];
    for (var i = 0; i < out.length; i++) {
      var q = String(out[i] || "").trim();
      if (!q) continue;
      var k = q.toLowerCase();
      if (seen[k]) continue;
      seen[k] = true;
      finalOut.push(q);
      if (finalOut.length >= n) break;
    }
    return finalOut;
  }

  function isDescendantOf(candidateId, ancestorId, itemsById) {
    var current = itemsById && itemsById[candidateId];
    var guard = 0;
    while (current && current.parentId && guard < 18) {
      if (current.parentId === ancestorId) return true;
      current = itemsById[current.parentId];
      guard += 1;
    }
    return false;
  }

  function insertChainItemAfterSubtree(item) {
    if (!item || !item.id) return;
    if (chainState.closed[item.id]) return;
    if (chainState.itemsById[item.id]) return;

    var parentId = String(item.parentId || "");
    var insertAt = chainState.order.length;
    if (parentId) {
      var parentIndex = chainState.order.indexOf(parentId);
      if (parentIndex >= 0) {
        insertAt = parentIndex + 1;
        // Skip over existing descendants (keeps branches grouped).
        while (
          insertAt < chainState.order.length &&
          isDescendantOf(chainState.order[insertAt], parentId, chainState.itemsById)
        ) {
          insertAt += 1;
        }
      }
    }

    chainState.itemsById[item.id] = item;
    chainState.order.splice(insertAt, 0, item.id);
  }

  function evictChainIfNeeded() {
    while (chainState.order.length > CHAIN_ENTRY_LIMIT) {
      var evicted = false;
      for (var i = 0; i < chainState.order.length; i++) {
        var id = chainState.order[i];
        if (chainState.pinned[id]) continue;
        // Prefer evicting preset scaffolding first, then synthetic follow-ons.
        if (isScriptSeedId(id) || isSyntheticFollowOnId(id)) {
          chainState.order.splice(i, 1);
          delete chainState.itemsById[id];
          evicted = true;
          break;
        }
      }
      if (!evicted) break;
    }
  }

  function addFollowOnNodesFromItem(parentItem) {
    if (!parentItem || !parentItem.id) return;
    var questions = generateContextualFollowOnQuestions(parentItem, 3);
    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      var id = allocateFollowOnId(parentItem.id);
      var node = createChainItem(id, "user", q, {
        parentId: parentItem.id,
        depth: Math.max(0, Number(parentItem.depth) || 0) + 1,
        kind: "followup-question",
        promptText: q,
      });
      chainState.syntheticById[id] = node;
      if (chainState.syntheticOrder.indexOf(id) < 0) chainState.syntheticOrder.push(id);
      insertChainItemAfterSubtree(node);
    }
    evictChainIfNeeded();
    chainState.citizenDirty = true;
    scheduleLayout();
  }

  function mergeSyntheticNodesIntoChain() {
    // Re-apply synthetic nodes after transcript rebuilds (keeps "+" suggestions stable).
    if (!chainState.syntheticOrder || chainState.syntheticOrder.length === 0) return;
    for (var i = 0; i < chainState.syntheticOrder.length; i++) {
      var id = chainState.syntheticOrder[i];
      if (!id || chainState.closed[id] || chainState.itemsById[id]) continue;
      var node = chainState.syntheticById[id];
      if (!node) continue;
      if (node.parentId && !chainState.itemsById[node.parentId]) continue;
      insertChainItemAfterSubtree(node);
    }
    evictChainIfNeeded();
  }

  function isPointInRect(x, y, r) {
    return !!r && x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
  }

  function rectToPlain(rect) {
    return { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom };
  }

  function getCitizenActionRectsFromDom(el, fallbackRect) {
    // Prefer DOM-measured rects so controls remain functional under:
    // - canvas zoom (viewScale)
    // - browser pinch-zoom (visualViewport.scale)
    // - accessibility font scaling
    var found = safe(function () {
      var pinEl = el.querySelector(".citizen-bubble__action--pin");
      var addEl = el.querySelector(".citizen-bubble__action--add");
      var closeEl = el.querySelector(".citizen-bubble__action--close");
      if (!pinEl || !addEl || !closeEl) return null;
      return {
        pin: rectToPlain(pinEl.getBoundingClientRect()),
        add: rectToPlain(addEl.getBoundingClientRect()),
        close: rectToPlain(closeEl.getBoundingClientRect()),
      };
    }, null);
    if (found) return found;

    // Fallback: approximate based on bubble rect (kept for safety).
    var rect = fallbackRect;
    if (!rect) return { pin: null, add: null, close: null };
    var pad = 4;
    // Keep fallback hit-box aligned with CSS (.citizen-bubble__action is 18px).
    var size = 18;
    var gap = 6;
    var top = rect.top + pad;
    var leftClose = rect.right - pad - size;
    var leftAdd = leftClose - gap - size;
    var leftPin = leftAdd - gap - size;
    return {
      pin: { left: leftPin, top: top, right: leftPin + size, bottom: top + size },
      add: { left: leftAdd, top: top, right: leftAdd + size, bottom: top + size },
      close: { left: leftClose, top: top, right: leftClose + size, bottom: top + size },
    };
  }

  function installCitizenBubbleInteractions() {
    // If the global bubbles UI is present, it owns event listeners and delegates
    // to adapters (including this Mobility preset). Avoid duplicate competing handlers.
    if (safe(function () { return !!(window && window.__SINGABLDR_BUBBLES_UI && window.__SINGABLDR_BUBBLES_UI.registerAdapter); }, false)) {
      return function () {};
    }
    // Hit-test interactions without relying on pointer-events (the container is pointer-events:none).
    if (citizenInteractionsInstalled) return function () {};
    citizenInteractionsInstalled = true;
    var lastCursor = "";
    var CAPTURE_ACTIVE = { capture: true, passive: false };
    var CAPTURE_PASSIVE = { capture: true, passive: true };
    var CAPTURE_TOUCH_MOVE = { capture: true, passive: false };

    function isEnabled() {
      // All bubble styles share the citizen-bubble surface (visual SSOT).
      return isMobilityPresetActive();
    }

    function getClientPoint(ev) {
      var x = 0;
      var y = 0;
      var touch = safe(function () {
        if (!ev) return null;
        if (ev.touches && ev.touches.length) return ev.touches[0];
        if (ev.changedTouches && ev.changedTouches.length) return ev.changedTouches[0];
        return null;
      }, null);
      if (touch) {
        x = Number(touch.clientX || 0);
        y = Number(touch.clientY || 0);
      } else {
        x = Number(ev && ev.clientX || 0);
        y = Number(ev && ev.clientY || 0);
      }
      return { x: x, y: y };
    }

    function findHit(ev) {
      if (!isEnabled()) return null;
      if (!ev) return null;
      if (isUiControlTarget(ev.target)) return null;
      var pt = getClientPoint(ev);
      var x = pt.x;
      var y = pt.y;
      if (!Number.isFinite(x) || !Number.isFinite(y)) return null;

      var nodes = collectCitizenBubbles();
      // Iterate from end (latest nodes tend to be top-most).
      for (var i = nodes.length - 1; i >= 0; i--) {
        var el = nodes[i];
        if (!el) continue;
        var id = getCitizenBubbleId(el);
        if (citizenState.closedById[id]) continue;
        var rect = el.getBoundingClientRect();
        if (!isPointInRect(x, y, rect)) continue;
        return { el: el, id: id, rect: rect, x: x, y: y };
      }
      return null;
    }

    // Active selection + drag state (bubble-local drag, not viewport pan).
    var activeEl = null;
    var drag = {
      active: false,
      moved: false,
      id: "",
      pointerKey: -1,
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
    };

    function clearActiveBubble() {
      if (citizenState.activeTimer) {
        try {
          clearTimeout(citizenState.activeTimer);
        } catch {}
      }
      citizenState.activeTimer = 0;
      citizenState.activeId = "";
      if (activeEl) {
        safe(function () {
          delete activeEl.dataset.mobilityActive;
        });
      }
      activeEl = null;
    }

    function scheduleClearActiveBubble() {
      // Touch UX: auto-hide quickly to avoid stale floating controls.
      if (!shouldShowDragHint()) return;
      if (citizenState.activeTimer) {
        try {
          clearTimeout(citizenState.activeTimer);
        } catch {}
      }
      citizenState.activeTimer = setTimeout(function () {
        clearActiveBubble();
      }, 2600);
    }

    function setActiveBubble(hit) {
      if (!hit || !hit.el || !hit.id) return;
      if (citizenState.activeId === hit.id) {
        scheduleClearActiveBubble();
        return;
      }
      if (activeEl) {
        safe(function () {
          delete activeEl.dataset.mobilityActive;
        });
      }
      citizenState.activeId = hit.id;
      activeEl = hit.el;
      safe(function () {
        activeEl.dataset.mobilityActive = "1";
      });
      scheduleClearActiveBubble();
    }

    function getPointerKey(ev) {
      var pid = safe(function () {
        return Number(ev && ev.pointerId || 0);
      }, 0);
      if (pid) return pid;
      var touchId = safe(function () {
        var t = ev && ev.touches && ev.touches.length ? ev.touches[0] : ev && ev.changedTouches && ev.changedTouches.length ? ev.changedTouches[0] : null;
        return t && typeof t.identifier === "number" ? Number(t.identifier) : 0;
      }, 0);
      if (touchId || touchId === 0) return 1000000 + touchId;
      return 1;
    }

    function pinBubbleAtScreen(id, screenX, screenY) {
      var vp = getSafeViewport();
      var cx = vp.left + vp.width * 0.5;
      var cy = vp.top + vp.height * 0.5;
      var scale = getViewportZoomScale() * getCanvasScale();
      var panX = Number(chainState.viewPanX || 0);
      var panY = Number(chainState.viewPanY || 0);
      var anchorX = cx + (screenX - cx - panX) / Math.max(0.0001, scale);
      var anchorY = cy + (screenY - cy - panY) / Math.max(0.0001, scale);
      citizenState.pinnedById[id] = true;
      citizenState.pinnedAnchorXById[id] = String(anchorX);
      citizenState.pinnedAnchorYById[id] = String(anchorY);
      chainState.citizenDirty = true;
    }

    function stopEventHard(ev) {
      try {
        ev.preventDefault?.();
        ev.stopPropagation?.();
        ev.stopImmediatePropagation?.();
      } catch {}
    }

    function handleDown(ev) {
      var hit = findHit(ev);
      if (!hit) {
        // Tap outside: hide bubble toolbar.
        if (citizenState.activeId) clearActiveBubble();
        return;
      }

      setActiveBubble(hit);

      var actionRects = getCitizenActionRectsFromDom(hit.el, hit.rect);
      if (isPointInRect(hit.x, hit.y, actionRects.close)) {
        stopEventHard(ev);
        citizenState.closedById[hit.id] = true;
        safe(function () {
          hit.el.style.display = "none";
        });
        clearActiveBubble();
        scheduleLayout();
        return;
      }

      if (isPointInRect(hit.x, hit.y, actionRects.pin)) {
        stopEventHard(ev);
        if (citizenState.pinnedById[hit.id]) {
          delete citizenState.pinnedById[hit.id];
          delete citizenState.pinnedAnchorXById[hit.id];
          delete citizenState.pinnedAnchorYById[hit.id];
          safe(function () {
            delete hit.el.dataset.mobilityPinned;
          });
        } else {
          // Pin at current position (layout space).
          var sx = hit.rect.left + hit.rect.width * 0.5;
          var sy = hit.rect.bottom;
          pinBubbleAtScreen(hit.id, sx, sy);
          safe(function () {
            hit.el.dataset.mobilityPinned = "1";
          });
        }
        scheduleLayout();
        return;
      }

      if (isPointInRect(hit.x, hit.y, actionRects.add)) {
        stopEventHard(ev);
        var item = buildCitizenItemFromEl(hit.el);
        if (!item || !item.text) return;
        spawnFollowOnConversation(item, false);
        return;
      }

      // Bubble drag candidate (dragging a bubble, NOT panning the viewport).
      stopEventHard(ev);
      drag.active = true;
      drag.moved = false;
      drag.id = hit.id;
      drag.pointerKey = getPointerKey(ev);
      drag.startX = hit.x;
      drag.startY = hit.y;
      // Keep bubble bottom-center near the finger/cursor while dragging.
      drag.offsetX = hit.rect.left + hit.rect.width * 0.5 - hit.x;
      drag.offsetY = hit.rect.bottom - hit.y;

      // Mark as actively dragged for transition suppression.
      safe(function () {
        hit.el.dataset.mobilityDragging = "1";
      });
    }

    function handleMove(ev) {
      if (!drag.active || !drag.id) return;
      if (getPointerKey(ev) !== drag.pointerKey) return;
      var pt = getClientPoint(ev);
      var dx = pt.x - drag.startX;
      var dy = pt.y - drag.startY;
      if (!drag.moved) {
        if (dx * dx + dy * dy < 36) return; // 6px threshold
        drag.moved = true;
      }
      stopEventHard(ev);
      var screenX = pt.x + drag.offsetX;
      var screenY = pt.y + drag.offsetY;
      // Update anchor continuously (so any external layout pass won't snap us back),
      // but avoid triggering full layout every move (prevents churn / jank on iOS).
      pinBubbleAtScreen(drag.id, screenX, screenY);

      // Apply transform immediately for responsive drag feedback.
      if (activeEl && citizenState.activeId === drag.id) {
        applyManagedTransform(activeEl, { x: screenX, y: screenY });
      } else {
        // Fallback: find node by id if selection wasn't set.
        safe(function () {
          var nodes = collectCitizenBubbles();
          for (var i = 0; i < nodes.length; i++) {
            var el = nodes[i];
            if (!el) continue;
            var id = safe(function () { return String(el.dataset.mobilityCitizenId || ""); }, "");
            if (id === drag.id) {
              applyManagedTransform(el, { x: screenX, y: screenY });
              break;
            }
          }
        });
      }
    }

    function handleUp(ev) {
      if (!drag.active) return;
      if (ev && getPointerKey(ev) !== drag.pointerKey) return;
      drag.active = false;
      drag.moved = false;
      // Release drag visual flag.
      if (activeEl && citizenState.activeId === drag.id) {
        safe(function () {
          delete activeEl.dataset.mobilityDragging;
        });
      } else {
        safe(function () {
          var nodes = collectCitizenBubbles();
          for (var i = 0; i < nodes.length; i++) {
            var el = nodes[i];
            if (!el) continue;
            var id = safe(function () { return String(el.dataset.mobilityCitizenId || ""); }, "");
            if (id === drag.id) {
              delete el.dataset.mobilityDragging;
              break;
            }
          }
        });
      }
      drag.id = "";
      drag.pointerKey = -1;
      scheduleClearActiveBubble();
      // One final layout pass to settle collision avoidance.
      scheduleLayout();
    }

    // Install at window-capture so we run BEFORE any document-capture handlers that may
    // call stopImmediatePropagation (common in canvas interaction stacks).
    //
    // For coarse pointers, prefer Touch Events for consistent move delivery.
    var supportsPointer = safe(function () {
      return typeof window !== "undefined" && "PointerEvent" in window;
    }, false);
    var preferTouch = shouldShowDragHint();
    var usePointer = supportsPointer && !preferTouch;

    safe(function () {
      if (usePointer) {
        window.addEventListener("pointerdown", handleDown, CAPTURE_ACTIVE);
        window.addEventListener("pointermove", handleMove, CAPTURE_ACTIVE);
        window.addEventListener("pointerup", handleUp, CAPTURE_ACTIVE);
        window.addEventListener("pointercancel", handleUp, CAPTURE_ACTIVE);
      } else {
        window.addEventListener("touchstart", handleDown, CAPTURE_ACTIVE);
        window.addEventListener("touchmove", handleMove, CAPTURE_TOUCH_MOVE);
        window.addEventListener("touchend", handleUp, CAPTURE_ACTIVE);
        window.addEventListener("touchcancel", handleUp, CAPTURE_ACTIVE);
        // Mouse fallback (rare legacy environments).
        window.addEventListener("mousedown", handleDown, CAPTURE_ACTIVE);
        window.addEventListener("mousemove", handleMove, CAPTURE_ACTIVE);
        window.addEventListener("mouseup", handleUp, CAPTURE_ACTIVE);
      }
    });

    function setCursor(next) {
      var value = String(next || "");
      if (value === lastCursor) return;
      lastCursor = value;
      throttle("mobility:cursor", function () {
        safe(function () {
          // Apply cursor to the actual hover target (usually the canvas), since the
          // mobility bubbles layer is pointer-events:none and won't receive hover.
          var cursor = value || "";
          document.documentElement.style.cursor = cursor;
          document.body.style.cursor = cursor;
          var canvases = getCanvasNodesCached();
          for (var i = 0; i < canvases.length; i++) canvases[i].style.cursor = cursor;
        });
      }, 16);
    }

    function handleHover(ev) {
      if (!isEnabled()) return setCursor("");
      if (!ev || isUiControlTarget(ev.target)) return setCursor("");

      // If the viewport is being panned (dragging), show "grabbing" anywhere.
      var pointerId = Number(ev.pointerId || 0);
      var isSamePointer = chainState.dragPointerId > -1 && pointerId === chainState.dragPointerId;
      var buttons = Number(ev.buttons || 0);
      var pointerType = safe(function () {
        return String(ev.pointerType || "");
      }, "");
      var pressure = Number(ev.pressure || 0);
      var isPressed = buttons > 0 || pressure > 0 || pointerType === "touch";
      if (isSamePointer && isPressed) return setCursor("grabbing");

      throttle(
        "mobility:cursor:hit",
        function () {
          var hit = findHit(ev);
          if (!hit) return setCursor("");
          var actionRects = getCitizenActionRectsFromDom(hit.el, hit.rect);
          if (isPointInRect(hit.x, hit.y, actionRects.close) || isPointInRect(hit.x, hit.y, actionRects.add) || isPointInRect(hit.x, hit.y, actionRects.pin)) {
            return setCursor("pointer");
          }
          return setCursor("grab");
        },
        48,
      );
    }

    if (usePointer) {
      var handleWindowPointerLeave = function () {
        setCursor("");
      };
      var handleWindowBlur = function () {
        setCursor("");
      };
      var handleDocumentPointerLeave = function () {
        setCursor("");
      };
      safe(function () {
        window.addEventListener("pointermove", handleHover, CAPTURE_PASSIVE);
        window.addEventListener(
          "pointerleave",
          handleWindowPointerLeave,
          CAPTURE_PASSIVE,
        );
        window.addEventListener(
          "blur",
          handleWindowBlur,
          CAPTURE_PASSIVE,
        );
      });
      safe(function () {
        document.addEventListener("pointermove", handleHover, CAPTURE_PASSIVE);
        document.addEventListener(
          "pointerleave",
          handleDocumentPointerLeave,
          CAPTURE_PASSIVE,
        );
      });
    }

    return function cleanupCitizenBubbleInteractions() {
      citizenInteractionsInstalled = false;
      try {
        clearActiveBubble();
      } catch {}
      setCursor("");
      safe(function () {
        if (usePointer) {
          window.removeEventListener("pointerdown", handleDown, CAPTURE_ACTIVE);
          window.removeEventListener("pointermove", handleMove, CAPTURE_ACTIVE);
          window.removeEventListener("pointerup", handleUp, CAPTURE_ACTIVE);
          window.removeEventListener("pointercancel", handleUp, CAPTURE_ACTIVE);
        } else {
          window.removeEventListener("touchstart", handleDown, CAPTURE_ACTIVE);
          window.removeEventListener("touchmove", handleMove, CAPTURE_TOUCH_MOVE);
          window.removeEventListener("touchend", handleUp, CAPTURE_ACTIVE);
          window.removeEventListener("touchcancel", handleUp, CAPTURE_ACTIVE);
          window.removeEventListener("mousedown", handleDown, CAPTURE_ACTIVE);
          window.removeEventListener("mousemove", handleMove, CAPTURE_ACTIVE);
          window.removeEventListener("mouseup", handleUp, CAPTURE_ACTIVE);
        }
        if (usePointer) {
          window.removeEventListener("pointermove", handleHover, CAPTURE_PASSIVE);
          window.removeEventListener("pointerleave", handleWindowPointerLeave, CAPTURE_PASSIVE);
          window.removeEventListener("blur", handleWindowBlur, CAPTURE_PASSIVE);
          document.removeEventListener("pointermove", handleHover, CAPTURE_PASSIVE);
          document.removeEventListener("pointerleave", handleDocumentPointerLeave, CAPTURE_PASSIVE);
        }
      });
    };
  }

  function numberFromHash(hash) {
    var value = Number.parseInt(String(hash || ""), 36);
    return Number.isFinite(value) ? value : 0;
  }

  function pseudoRand01(seedText) {
    var h = hashText(seedText);
    var n = numberFromHash(h);
    // Deterministic 0..1 (good enough for subtle layout jitter).
    return ((n % 1000) + 1000) % 1000 / 999;
  }

  function relaxSlots(items, bounds, gapPx, passes) {
    var nodes = items.map(function (item) {
      return {
        id: item.id,
        width: Math.max(88, item.width || 0),
        height: Math.max(48, item.height || 0),
        x: item.x,
        y: item.y,
        baseX: item.x,
        baseY: item.y,
      };
    });
    var gap = Math.max(8, gapPx || 16);
    var maxPasses = Math.max(1, passes || 4);
    var anchorStrength = clamp(0.06 + nodes.length * 0.004, 0.08, 0.16);

    for (var pass = 0; pass < maxPasses; pass++) {
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j];
          var dx = b.x - a.x;
          var dy = b.y - a.y;
          var minDx = (a.width + b.width) * 0.5 + gap;
          var minDy = (a.height + b.height) * 0.5 + gap * 0.78;
          if (Math.abs(dx) >= minDx || Math.abs(dy) >= minDy) continue;
          var pushX = (minDx - Math.abs(dx)) * 0.5;
          var pushY = (minDy - Math.abs(dy)) * 0.5;
          // Stable tie-breakers: avoid degenerate "straight line stacks" when dx/dy are ~0.
          var tie = pseudoRand01(String(a.id) + "|" + String(b.id) + "|" + pass);
          var sx = dx === 0 ? (tie < 0.5 ? -1 : 1) : dx < 0 ? -1 : 1;
          var sy = dy === 0 ? (tie < 0.5 ? 1 : -1) : dy < 0 ? -1 : 1;
          a.x -= pushX * sx;
          b.x += pushX * sx;
          a.y -= pushY * sy;
          b.y += pushY * sy;
        }
      }
      for (var k = 0; k < nodes.length; k++) {
        var n = nodes[k];
        // Gentle spring to the original seed positions keeps the layout evenly spread-out
        // instead of all items drifting to edges/corners.
        n.x += (n.baseX - n.x) * anchorStrength;
        n.y += (n.baseY - n.y) * anchorStrength;
        n.x = clamp(n.x, bounds.left + n.width * 0.5, bounds.right - n.width * 0.5);
        n.y = clamp(n.y, bounds.top + n.height * 0.5, bounds.bottom - n.height * 0.5);
      }
    }

    return nodes;
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

  function getViewportZoomScale() {
    var vv = safe(function () {
      return window.visualViewport;
    }, null);
    var scale = vv && Number.isFinite(vv.scale) ? vv.scale : 1;
    if (!Number.isFinite(scale) || scale <= 0) scale = 1;
    return clamp(scale, 1, 2.25);
  }

  function applyChainCardMetrics(card, index, visibleCount) {
    if (!card) return;
    var vp = getSafeViewport();
    var zoomScale = getViewportZoomScale() * clamp(chainState.viewScale, 0.72, 2.4);
    var collapsed = readChainStack() === CHAIN_STACK_COLLAPSED;
    var baseWidth = vp.width <= 540 ? vp.width - 8 : vp.width <= 820 ? vp.width * 0.34 : vp.width * 0.26;
    var widthCap = vp.width <= 540 ? vp.width - 8 : Math.min(vp.width - 14, 420);
    var width = clamp(Math.round(baseWidth / zoomScale), 148, widthCap);
    var fontSize = clamp(Math.round((vp.width <= 540 ? 12 : 13) / Math.max(1, zoomScale * 0.82)), 10, 15);
    var lineClamp = collapsed ? 2 : vp.width <= 540 ? 4 : 5;
    var scale = 0.94 + Math.min(0.12, index * 0.018);
    if (vp.width <= 540) scale = 1;
    scale = clamp(scale / Math.max(0.78, zoomScale), 0.54, 1.28);
    card.style.setProperty("--mobility-card-width", Math.round(width) + "px");
    card.style.setProperty("--mobility-card-body-lines", String(lineClamp));
    card.style.setProperty("--mobility-card-font-size", fontSize + "px");
    card.style.setProperty("--mobility-card-scale", scale.toFixed(3));
    // Force concrete dimensions so zoom resize is visible even if external CSS overrides width vars.
    card.style.width = Math.round(width) + "px";
    card.style.maxWidth = "calc(100vw - 10px)";
    card.style.fontSize = fontSize + "px";
    card.dataset.stack = collapsed ? CHAIN_STACK_COLLAPSED : CHAIN_STACK_EXPANDED;
    card.dataset.visibleCount = String(visibleCount || 0);
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
        transcriptKey: "transcript-" + i + "-" + role + "-" + hashText(text),
        role: role,
        text: text,
        isSystem: isSystemChatText(text),
      });
    }
    return items;
  }

  function extractMobilityScriptItems(parsed) {
    var steps = Array.isArray(parsed && parsed.steps) ? parsed.steps : [];
    var items = [];
    for (var i = 0; i < steps.length; i++) {
      var step = steps[i];
      if (!step || typeof step !== "object") continue;
      var action = String(step.action || "").toLowerCase();
      var message = compactText(step.message || step.snippet || step.status || "", 180);
      if (!message) continue;
      var role = action === "chat" ? "user" : "assistant";
      if (action !== "chat" && action !== "bubbleburst" && action !== "react" && action !== "swarm") continue;
      items.push({
        id: "preset-" + i + "-" + hashText(message),
        role: role,
        text: message,
      });
    }
    return items.slice(0, CHAIN_ENTRY_LIMIT);
  }

  function readJsonResponseSafely(res) {
    var contentType = "";
    try {
      contentType = String(res && res.headers && res.headers.get ? res.headers.get("content-type") || "" : "").toLowerCase();
    } catch {}
    if (contentType.indexOf("application/json") >= 0) {
      return res.json();
    }
    return res.text().then(function (text) {
      var raw = String(text || "").trim();
      if (!raw) return {};
      if (raw.charAt(0) !== "{" && raw.charAt(0) !== "[") {
        throw new Error("mobility preset returned non-json");
      }
      return JSON.parse(raw);
    });
  }

  function ensureScriptSeedLoaded() {
    if (scriptSeedRequested) return;
    scriptSeedRequested = true;
    safe(function () {
      fetch(PRESET_VALUE, { cache: "no-store" })
        .then(function (res) {
          if (!res.ok) throw new Error("mobility preset unavailable");
          return readJsonResponseSafely(res);
        })
        .then(function (parsed) {
          ingestScriptMessages(extractMobilityScriptItems(parsed));
          scheduleLayout();
        })
        .catch(function () {
          scriptSeedRequested = false;
        });
    });
  }

  function getChainLayer() {
    var existing = byId(CHAIN_LAYER_ID);
    if (existing) return existing;
    var host = getChainHost();
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
    // Keep links behind cards/bubbles (cards ~2110, bubbles ~2100).
    svg.style.zIndex = "2090";
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

  function getMobilityCitizenLayer() {
    var host = getChatContainer();
    if (!host) return null;
    var existing = safe(function () {
      return document.getElementById("mobility-citizen-layer");
    }, null);
    if (existing) return existing;
    var layer = document.createElement("div");
    layer.id = "mobility-citizen-layer";
    layer.style.position = "absolute";
    layer.style.inset = "0";
    layer.style.width = "100%";
    layer.style.height = "100%";
    layer.style.pointerEvents = "none";
    layer.style.overflow = "hidden";
    layer.style.zIndex = "5";
    host.appendChild(layer);
    return layer;
  }

  function clearMobilityCitizenLayer() {
    safe(function () {
      var layer = document.getElementById("mobility-citizen-layer");
      if (layer) layer.remove();
    });
  }

  function syncCitizenBubblesFromChainItems(items) {
    if (!items || items.length === 0) {
      clearMobilityCitizenLayer();
      return;
    }
    var layer = getMobilityCitizenLayer();
    if (!layer) return;

    /** @type {Record<string, HTMLElement>} */
    var existing = Object.create(null);
    safe(function () {
      var nodes = Array.from(layer.querySelectorAll(".citizen-bubble"));
      for (var i = 0; i < nodes.length; i++) {
        var el = nodes[i];
        var id = safe(function () { return String(el.dataset.mobilityCitizenId || ""); }, "");
        if (id) existing[id] = el;
      }
    });

    /** @type {Record<string, boolean>} */
    var keep = Object.create(null);
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      if (!it || !it.id) continue;
      keep[it.id] = true;
      var el = existing[it.id];
      if (!el) {
        el = document.createElement("div");
        el.className = "citizen-bubble";
        el.style.opacity = "1";
        // Positioning is handled by managed transforms; initial position doesn't matter.
        el.style.left = "50%";
        el.style.top = "50%";
        layer.appendChild(el);
        // Store text on the element; ensureCitizenBubbleUi wraps it into header/body/actions.
        el.textContent = String(it.text || "");
        ensureCitizenBubbleUi(el);
      } else {
        ensureCitizenBubbleUi(el);
      }
      el.dataset.mobilityCitizenId = String(it.id);
      el.dataset.mobilityCitizenN = String(i + 1);
      el.dataset.mobilityRole = String(it.role || "");
      if (it.kind === "user-draft") {
        el.dataset.mobilityDraft = "1";
      } else {
        safe(function () {
          delete el.dataset.mobilityDraft;
        });
      }
      // Refresh UI content (header/body) without recreating nodes.
      safe(function () {
        var header = el.querySelector(".citizen-bubble__header");
        if (header) {
          if (it.kind === "user-draft") header.textContent = "You (draft)";
          else if (it.role === "user") header.textContent = "You";
          else header.textContent = "Citizen (" + String(i + 1) + ")";
        }
        var body = el.querySelector(".citizen-bubble__body");
        if (body) {
          var raw = String(it.text || "");
          if (it.kind === "user-draft" && !raw.trim()) raw = "Type your prompt…";
          body.textContent = raw;
        }
      });
    }

    // Remove stale bubbles.
    safe(function () {
      var nodes = Array.from(layer.querySelectorAll(".citizen-bubble"));
      for (var i = 0; i < nodes.length; i++) {
        var el = nodes[i];
        var id = safe(function () { return String(el.dataset.mobilityCitizenId || ""); }, "");
        if (!id || !keep[id]) el.remove();
      }
    });
  }

  function buildGridRelaxedSlots(count) {
    var vp = getSafeViewport();
    if (vp.width <= 540) {
      var mobileSlots = [];
      var stepY = Math.max(96, Math.min(132, vp.height / Math.max(1, count + 0.5)));
      for (var m = 0; m < count; m++) {
        mobileSlots.push({
          x: vp.left + vp.width * 0.5,
          y: vp.top + 28 + stepY * m,
        });
      }
      return mobileSlots;
    }
    var width = vp.right - vp.left;
    var height = vp.bottom - vp.top;
    // Wider viewports: allow more columns so bubbles can spread out (instead of clustering).
    var maxCols = clamp(Math.floor(vp.width / 320), 2, 5);
    var cols = clamp(Math.round(Math.sqrt(Math.max(1, count))), 2, maxCols);
    var rows = Math.max(1, Math.ceil(count / cols));
    var slots = [];
    for (var i = 0; i < count; i++) {
      var row = Math.floor(i / cols);
      var col = i % cols;
      var x = vp.left + width * ((col + 0.5) / cols);
      var y = vp.top + height * ((row + 0.55) / rows);
      // Deterministic micro-jitter avoids perfectly straight lines (more "organic").
      var jx = (pseudoRand01("slot:x:" + i) - 0.5) * 28;
      var jy = (pseudoRand01("slot:y:" + i) - 0.5) * 22;
      x += jx;
      y += jy + (col % 2 === 0 ? -10 : 10);
      slots.push({ x: x, y: y });
    }
    return slots;
  }

  function buildZigZagSlots(count) {
    var vp = getSafeViewport();
    if (vp.width <= 620) return buildGridRelaxedSlots(count);
    var slots = [];
    var usableWidth = Math.max(160, vp.width - 120);
    var leftX = vp.left + Math.min(140, usableWidth * 0.2);
    var rightX = vp.right - Math.min(140, usableWidth * 0.2);
    var rows = Math.max(1, count);
    for (var i = 0; i < count; i++) {
      var progress = rows === 1 ? 0.5 : i / Math.max(1, rows - 1);
      var x = i % 2 === 0 ? leftX : rightX;
      var y = vp.top + 38 + progress * Math.max(120, vp.height - 96);
      slots.push({ x: x, y: y });
    }
    return slots;
  }

  function buildArcSlots(count) {
    var vp = getSafeViewport();
    if (vp.width <= 620) return buildGridRelaxedSlots(count);
    var slots = [];
    var cx = vp.left + vp.width * 0.5;
    var cy = vp.top + Math.max(180, vp.height * 0.62);
    var rx = Math.max(180, Math.min(vp.width * 0.38, 360));
    var ry = Math.max(120, Math.min(vp.height * 0.34, 240));
    var start = Math.PI * 1.06;
    var end = Math.PI * 1.94;
    for (var i = 0; i < count; i++) {
      var t = count <= 1 ? 0.5 : i / Math.max(1, count - 1);
      var angle = start + (end - start) * t;
      slots.push({
        x: cx + Math.cos(angle) * rx,
        y: cy + Math.sin(angle) * ry,
      });
    }
    return slots;
  }

  function buildChainSlots(count) {
    var layout = readChainLayout();
    if (layout === CHAIN_LAYOUT_ZIG_ZAG) return buildZigZagSlots(count);
    if (layout === CHAIN_LAYOUT_ARC) return buildArcSlots(count);
    return buildGridRelaxedSlots(count);
  }

  function getOpenChainEntries() {
    var out = [];
    for (var i = 0; i < chainState.order.length; i++) {
      var id = chainState.order[i];
      if (chainState.closed[id]) continue;
      var item = chainState.itemsById[id];
      if (item) out.push(item);
    }
    return out;
  }

  function ingestTranscriptItems(items) {
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (!item || !item.id || chainState.closed[item.id]) continue;
      if (chainState.itemsById[item.id]) continue;
      while (chainState.order.length >= CHAIN_ENTRY_LIMIT) {
        var evicted = false;
        for (var j = 0; j < chainState.order.length; j++) {
          var candidateId = chainState.order[j];
          if (chainState.pinned[candidateId]) continue;
          if (!/^preset-/i.test(candidateId)) continue;
          chainState.order.splice(j, 1);
          delete chainState.itemsById[candidateId];
          evicted = true;
          break;
        }
        if (!evicted) break;
      }
      if (chainState.order.length >= CHAIN_ENTRY_LIMIT) break;
      chainState.itemsById[item.id] = item;
      chainState.order.push(item.id);
    }
  }

  function syncTranscriptHierarchy(items) {
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (!item || !item.transcriptKey || chainState.transcriptKeys[item.transcriptKey]) continue;
      chainState.transcriptKeys[item.transcriptKey] = true;
      if (item.isSystem) continue;
      if (item.role === "user") {
        chainState.lastUserPrompt = item.text;
        continue;
      }
      if (!chainState.lastUserPrompt && !chainState.pendingSpawn) continue;
      var pending = chainState.pendingSpawn;
      var parentId = pending && pending.mode === "child-follow" ? pending.targetId : "";
      var rootId = pending && pending.mode === "root-follow" ? allocateAssistantId("") : allocateAssistantId(parentId);
      var rootDepth = parentId ? Math.max(0, (chainState.itemsById[parentId] && chainState.itemsById[parentId].depth) || 0) + 1 : 0;
      var replyItems = extractReplyListItems(item.text, 7);
      var rootText = replyItems.length > 0 ? replyItems[0] : normalizeReplyText(item.text);
      ingestTranscriptItems([
        createChainItem(rootId, "assistant", rootText, {
          parentId: parentId,
          depth: rootDepth,
          kind: parentId ? "assistant-child-thread" : "assistant-root",
          promptText: rootText,
        }),
      ]);
      for (var j = 1; j < replyItems.length; j++) {
        var childText = replyItems[j];
        var childId = allocateAssistantId(rootId);
        ingestTranscriptItems([
          createChainItem(childId, "assistant", childText, {
            parentId: rootId,
            depth: rootDepth + 1,
            kind: "assistant-child",
            promptText: childText,
          }),
        ]);
      }
      chainState.pendingSpawn = null;
    }
  }

  function rebuildTranscriptChainState(items) {
    var order = [];
    var itemsById = Object.create(null);
    var nextAssistantIndex = 0;
    var childCountById = Object.create(null);
    var lastUserPrompt = "";
    var pending = chainState.pendingSpawn;

    function localAllocate(parentId) {
      if (!parentId) {
        nextAssistantIndex += 1;
        return "ai-" + formatChainIndex(nextAssistantIndex);
      }
      childCountById[parentId] = (childCountById[parentId] || 0) + 1;
      return parentId + "-" + formatChainIndex(childCountById[parentId]);
    }

    function localIngest(item) {
      if (!item || !item.id || chainState.closed[item.id]) return;
      itemsById[item.id] = item;
      order.push(item.id);
    }

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (!item || item.isSystem) continue;
      if (item.role === "user") {
        lastUserPrompt = item.text;
        continue;
      }
      if (!lastUserPrompt && !pending) continue;
      var parentId = pending && pending.mode === "child-follow" ? pending.targetId : "";
      var rootId = localAllocate(parentId);
      var rootDepth = parentId ? Math.max(0, (itemsById[parentId] && itemsById[parentId].depth) || 0) + 1 : 0;
      var parsed = parseAssistantReplyIntoChainNodes(item.text, 7);
      var rootText = parsed.rootText || normalizeReplyText(item.text);
      localIngest(createChainItem(rootId, "assistant", rootText, {
        parentId: parentId,
        depth: rootDepth,
        kind: parentId ? "assistant-child-thread" : "assistant-root",
        promptText: rootText,
      }));
      for (var j = 0; j < parsed.children.length; j++) {
        var childText = parsed.children[j];
        var childId = localAllocate(rootId);
        localIngest(createChainItem(childId, "assistant", childText, {
          parentId: rootId,
          depth: rootDepth + 1,
          kind: "assistant-child",
          promptText: childText,
        }));
      }
      pending = null;
    }

    chainState.order = order.slice(-CHAIN_ENTRY_LIMIT);
    chainState.itemsById = itemsById;
    chainState.transcriptKeys = Object.create(null);
    chainState.nextAssistantIndex = nextAssistantIndex;
    chainState.childCountById = childCountById;
    chainState.lastUserPrompt = lastUserPrompt;
    chainState.pendingSpawn = pending;
  }

  function closeChainEntry(id) {
    if (!id) return;
    chainState.closed[id] = true;
    var el = byId("mobility-chain-card-" + id);
    if (el) el.remove();
    scheduleLayout();
  }

  function togglePinnedChainEntry(id, card) {
    if (!id || !card) return;
    if (chainState.pinned[id]) {
      delete chainState.pinned[id];
      delete card.dataset.pinned;
      delete card.dataset.pinnedLeft;
      delete card.dataset.pinnedTop;
    } else {
      chainState.pinned[id] = true;
      card.dataset.pinned = "1";
      card.dataset.pinnedLeft = String(card.style.left || "");
      card.dataset.pinnedTop = String(card.style.top || "");
    }
    scheduleLayout();
  }

  function spawnFollowOnConversation(item, autoSend) {
    if (!item) return;
    var input = getChatInput();
    if (!input) return;
    var next = (function buildFollowOnPrompt() {
      // Global, transcript-aware follow-on: seed from the clicked node text.
      // Keep the legacy Mobility heuristic only as a fallback (for preset seed cards).
      var base = item && item.promptText ? item.promptText : item && item.text ? item.text : "";
      base = compactText(base, 160);
      if (base) {
        // Follow-on question nodes should send the question as-is (do not wrap).
        if (item.kind === "followup-question") return base;
        if (item.parentId || item.depth > 0) return "Expand on: " + base;
        return "Continue from: " + base;
      }
      return inferFollowUpPrompt(item);
    })();
    ensureSuperagentVisible();

    // Defer focus/value mutation slightly: avoids fighting with panel open animations.
    coalesce("mobility:spawn:focus", function () {
      input.value = next;
      safe(function () {
        input.focus({ preventScroll: false });
        input.setSelectionRange(next.length, next.length);
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.dispatchEvent(new Event("change", { bubbles: true }));
      });
      if (!autoSend) return;
      var send = getSendButton();
      if (!send) return;
      safe(function () {
        send.click();
      });
    });

    chainState.pendingSpawn = {
      mode: item.parentId || item.depth > 0 ? "child-follow" : "root-follow",
      targetId: item.id,
      prompt: next,
    };
  }

  function shouldUseGlobalChainCardUi() {
    return !!globalChainCardUiInstalled;
  }

  function installGlobalChainCardUi() {
    // Own chain-card interactions at window-capture to prevent conflicts with any canvas
    // capture handlers (works across desktop Safari/Chrome + iOS Safari/Chrome).
    var w = safe(function () {
      return window;
    }, null);
    if (!w) return function () {};
    if (globalChainCardUiInstalled) return function () {};
    globalChainCardUiInstalled = true;

    var CAPTURE_ACTIVE = { capture: true, passive: false };
    var CAPTURE_TOUCH_MOVE = { capture: true, passive: false };
    var preferTouch = shouldShowDragHint();
    var supportsPointer = safe(function () {
      return "PointerEvent" in w;
    }, false);
    var usePointer = supportsPointer && !preferTouch;

    var drag = {
      active: false,
      moved: false,
      pointerKey: -1,
      startX: 0,
      startY: 0,
      originLeft: 0,
      originTop: 0,
      card: null,
      itemId: "",
      item: null,
    };

    function stopEventHard(ev) {
      try {
        ev.preventDefault?.();
        ev.stopPropagation?.();
        ev.stopImmediatePropagation?.();
      } catch {}
    }

    function getPointerKey(ev) {
      var pid = safe(function () {
        return Number(ev && ev.pointerId || 0);
      }, 0);
      if (pid) return pid;
      var touchId = safe(function () {
        var t =
          ev && ev.touches && ev.touches.length
            ? ev.touches[0]
            : ev && ev.changedTouches && ev.changedTouches.length
              ? ev.changedTouches[0]
              : null;
        return t && typeof t.identifier === "number" ? Number(t.identifier) : 0;
      }, 0);
      return 1000000 + touchId;
    }

    function getCardFromEvent(ev) {
      var target = ev && ev.target ? ev.target : null;
      var card = safe(function () {
        return target && typeof target.closest === "function" ? target.closest("." + CHAIN_CARD_CLASS) : null;
      }, null);
      if (card) return card;
      // Fallback: hit-test by point (in case target is outside due to overlays).
      var pt = getClientPoint(ev);
      var nodes = safe(function () {
        return Array.from(document.querySelectorAll("." + CHAIN_CARD_CLASS));
      }, []);
      for (var i = nodes.length - 1; i >= 0; i--) {
        var el = nodes[i];
        if (!el) continue;
        var r = el.getBoundingClientRect();
        if (isPointInRect(pt.x, pt.y, r)) return el;
      }
      return null;
    }

    function getItemIdFromCard(card) {
      if (!card || !card.id) return "";
      if (card.id.indexOf("mobility-chain-card-") !== 0) return "";
      return String(card.id.slice("mobility-chain-card-".length) || "");
    }

    function setPinnedFromDrag(card, itemId, leftPx, topPx) {
      if (!card || !itemId) return;
      chainState.pinned[itemId] = true;
      card.dataset.pinned = "1";
      card.dataset.pinnedLeft = String(Math.round(leftPx)) + "px";
      card.dataset.pinnedTop = String(Math.round(topPx)) + "px";
      card.style.left = card.dataset.pinnedLeft;
      card.style.top = card.dataset.pinnedTop;
    }

    function refreshLinksThrottled() {
      throttle("chain:links:refresh", function () {
        var cards = safe(function () {
          return Array.from(document.querySelectorAll("." + CHAIN_CARD_CLASS));
        }, []);
        if (!cards || cards.length === 0) return;
        getChainLayer();
        renderChainLinks(cards);
      }, 80);
    }

    function handleDown(ev) {
      if (!ev) return;
      if (!isMobilityPresetActive()) return;
      var card = getCardFromEvent(ev);
      if (!card) return;
      var itemId = getItemIdFromCard(card);
      if (!itemId) return;
      var item = chainState.itemsById[itemId];
      if (!item) return;

      // Handle toolbar actions at capture.
      var actionEl = safe(function () {
        return ev.target && typeof ev.target.closest === "function" ? ev.target.closest(".mobility-chain-card__action") : null;
      }, null);
      if (actionEl) {
        stopEventHard(ev);
        if (actionEl.classList.contains("mobility-chain-card__action--close")) return closeChainEntry(itemId);
        if (actionEl.classList.contains("mobility-chain-card__action--pin")) return togglePinnedChainEntry(itemId, card);
        if (actionEl.classList.contains("mobility-chain-card__action--add")) return openDraftPromptFromItem(item);
        return;
      }

      // Start drag/click capture.
      stopEventHard(ev);
      drag.active = true;
      drag.moved = false;
      drag.pointerKey = getPointerKey(ev);
      var pt = getClientPoint(ev);
      drag.startX = pt.x;
      drag.startY = pt.y;
      drag.card = card;
      drag.itemId = itemId;
      drag.item = item;

      var left = Number.parseFloat(String(card.style.left || "").replace("px", "")) || card.getBoundingClientRect().left;
      var top = Number.parseFloat(String(card.style.top || "").replace("px", "")) || card.getBoundingClientRect().top;
      drag.originLeft = left;
      drag.originTop = top;
      safe(function () {
        card.dataset.dragging = "1";
        card.style.touchAction = "none";
      });
    }

    function handleMove(ev) {
      if (!isMobilityPresetActive()) return;
      if (!drag.active || !drag.card) return;
      if (getPointerKey(ev) !== drag.pointerKey) return;
      var pt = getClientPoint(ev);
      var dx = pt.x - drag.startX;
      var dy = pt.y - drag.startY;
      if (!drag.moved) {
        if (dx * dx + dy * dy < 36) return; // 6px threshold
        drag.moved = true;
      }
      stopEventHard(ev);
      var leftPx = drag.originLeft + dx;
      var topPx = drag.originTop + dy;
      setPinnedFromDrag(drag.card, drag.itemId, leftPx, topPx);
      refreshLinksThrottled();
    }

    function handleUp(ev) {
      if (!isMobilityPresetActive()) return;
      if (!drag.active) return;
      if (ev && getPointerKey(ev) !== drag.pointerKey) return;
      var moved = drag.moved;
      var card = drag.card;
      var item = drag.item;
      var itemId = drag.itemId;
      drag.active = false;
      drag.moved = false;
      drag.pointerKey = -1;
      drag.card = null;
      drag.itemId = "";
      drag.item = null;
      safe(function () {
        if (card) {
          delete card.dataset.dragging;
          card.style.touchAction = "manipulation";
        }
      });

      if (!card || !item || !itemId) return;
      // Click (no drag): auto-send follow-on for branching (global default).
      if (!moved) return spawnFollowOnConversation(item, shouldAutoSendFromChainCardClick());
      // Drag end: one final layout pass to re-render links + keep pinned positions stable.
      scheduleLayout();
    }

    safe(function () {
      if (usePointer) {
        w.addEventListener("pointerdown", handleDown, CAPTURE_ACTIVE);
        w.addEventListener("pointermove", handleMove, CAPTURE_ACTIVE);
        w.addEventListener("pointerup", handleUp, CAPTURE_ACTIVE);
        w.addEventListener("pointercancel", handleUp, CAPTURE_ACTIVE);
      } else {
        w.addEventListener("touchstart", handleDown, CAPTURE_ACTIVE);
        w.addEventListener("touchmove", handleMove, CAPTURE_TOUCH_MOVE);
        w.addEventListener("touchend", handleUp, CAPTURE_ACTIVE);
        w.addEventListener("touchcancel", handleUp, CAPTURE_ACTIVE);
        // Mouse fallback for environments without PointerEvent.
        w.addEventListener("mousedown", handleDown, CAPTURE_ACTIVE);
        w.addEventListener("mousemove", handleMove, CAPTURE_ACTIVE);
        w.addEventListener("mouseup", handleUp, CAPTURE_ACTIVE);
      }
    });
    return function cleanupGlobalChainCardUi() {
      globalChainCardUiInstalled = false;
      try {
        drag.active = false;
      } catch {}
      safe(function () {
        if (usePointer) {
          w.removeEventListener("pointerdown", handleDown, CAPTURE_ACTIVE);
          w.removeEventListener("pointermove", handleMove, CAPTURE_ACTIVE);
          w.removeEventListener("pointerup", handleUp, CAPTURE_ACTIVE);
          w.removeEventListener("pointercancel", handleUp, CAPTURE_ACTIVE);
        } else {
          w.removeEventListener("touchstart", handleDown, CAPTURE_ACTIVE);
          w.removeEventListener("touchmove", handleMove, CAPTURE_TOUCH_MOVE);
          w.removeEventListener("touchend", handleUp, CAPTURE_ACTIVE);
          w.removeEventListener("touchcancel", handleUp, CAPTURE_ACTIVE);
          w.removeEventListener("mousedown", handleDown, CAPTURE_ACTIVE);
          w.removeEventListener("mousemove", handleMove, CAPTURE_ACTIVE);
          w.removeEventListener("mouseup", handleUp, CAPTURE_ACTIVE);
        }
      });
    };
  }

  function ensureChainCard(item, index) {
    var id = "mobility-chain-card-" + item.id;
    var existing = byId(id);
    if (existing) return existing;

    var host = getChainHost();
    if (!host) return null;

    var card = document.createElement("div");
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
    card.style.width = "min(30rem, calc(100vw - 24px))";
    card.style.maxWidth = "calc(100vw - 24px)";
    card.style.touchAction = "manipulation";
    card.style.boxSizing = "border-box";

    var actions = document.createElement("div");
    actions.className = "mobility-chain-card__actions";
    card.appendChild(actions);

    var pinBtn = document.createElement("button");
    pinBtn.type = "button";
    pinBtn.className = "mobility-chain-card__action mobility-chain-card__action--pin";
    pinBtn.textContent = "📍";
    pinBtn.setAttribute("aria-label", "Pin Mobility bubble");
    if (!shouldUseGlobalChainCardUi()) {
      pinBtn.addEventListener("click", function (ev) {
        if (ev) {
          ev.preventDefault();
          ev.stopPropagation();
        }
        togglePinnedChainEntry(item.id, card);
      });
    }
    actions.appendChild(pinBtn);

    var addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.className = "mobility-chain-card__action mobility-chain-card__action--add";
    addBtn.textContent = "➕";
    addBtn.setAttribute("aria-label", "Add Mobility prompt to chat");
    if (!shouldUseGlobalChainCardUi()) {
      addBtn.addEventListener("click", function (ev) {
        if (ev) {
          ev.preventDefault();
          ev.stopPropagation();
        }
        openDraftPromptFromItem(item);
      });
    }
    actions.appendChild(addBtn);

    var dismiss = document.createElement("button");
    dismiss.type = "button";
    dismiss.className = "mobility-chain-card__action mobility-chain-card__action--close";
    dismiss.textContent = "✖";
    dismiss.setAttribute("aria-label", "Close Mobility bubble");
    if (!shouldUseGlobalChainCardUi()) {
      dismiss.addEventListener("click", function (ev) {
        if (ev) {
          ev.preventDefault();
          ev.stopPropagation();
        }
        closeChainEntry(item.id);
      });
    }
    actions.appendChild(dismiss);

    var badge = document.createElement("span");
    badge.className = "mobility-chain-card__badge";
    card.appendChild(badge);

    var body = document.createElement("span");
    body.className = "mobility-chain-card__body";
    card.appendChild(body);

    if (!shouldUseGlobalChainCardUi()) {
      card.addEventListener("click", function () {
        spawnFollowOnConversation(item, shouldAutoSendFromChainCardClick());
      });
    }

    host.appendChild(card);
    return card;
  }

  function inferFollowUpPrompt(item) {
    var text = item && item.promptText ? item.promptText : item && item.text ? item.text : "";
    var role = item && item.role ? item.role : "assistant";
    var value = String(text || "").toLowerCase();
    if (value.indexOf("budget") >= 0 || value.indexOf("sgd") >= 0) return "Near MRT only, under SGD300 total";
    if (value.indexOf("changi") >= 0 || value.indexOf("stopover") >= 0) return "Budget SGD300";
    if (value.indexOf("route") >= 0 || value.indexOf("mrt") >= 0) return "Shortest route with minimal transfers";
    if (value.indexOf("marina bay") >= 0) return "Marina Bay only, lowest walking time";
    if (value.indexOf("kampong glam") >= 0) return "Kampong Glam route with best cheap food stop";
    return role === "user" ? "Budget SGD300" : "Add one quieter local option";
  }

  function updateChainCard(card, item) {
    if (!card) return;
    card.dataset.role = item.role;
    card.dataset.tone = MOBILITY_TONES[Math.abs(Number.parseInt(hashText(item.id), 36) || 0) % MOBILITY_TONES.length];
    var badge = safe(function () {
      return card.querySelector(".mobility-chain-card__badge");
    }, null);
    var body = safe(function () {
      return card.querySelector(".mobility-chain-card__body");
    }, null);
    if (badge) {
      if (item.kind === "user-draft") badge.textContent = "Draft prompt · " + item.id;
      else if (item.role === "user") badge.textContent = "You · " + item.id;
      else badge.textContent = item.depth > 0 ? "Citizen bubble · " + item.id : "AI response · " + item.id;
    }
    if (body) {
      var raw = String(item.text || "");
      if (item.kind === "user-draft" && !raw.trim()) raw = "Type your prompt…";
      body.textContent = compactText(raw, 132);
    }
    card.dataset.pinned = chainState.pinned[item.id] ? "1" : "0";
    var visible = getOpenChainEntries();
    var index = Math.max(0, visible.findIndex(function (entry) { return entry.id === item.id; }));
    applyChainCardMetrics(card, index, visible.length);
    card.title = item.depth > 0 ? "Tap to continue from this citizen bubble" : "Tap to continue this Mobility thread";
  }

  function positionCard(card, target) {
    if (!card || !target) return;
    if (card.dataset.pinned === "1" && card.dataset.pinnedLeft && card.dataset.pinnedTop) {
      card.style.left = card.dataset.pinnedLeft;
      card.style.top = card.dataset.pinnedTop;
      return;
    }
    var width = Math.max(card.offsetWidth || 220, 180);
    var height = Math.max(card.offsetHeight || 108, 88);
    var vp = getSafeViewport();
    if (vp.width <= 540) {
      width = Math.min(width, vp.width - 8);
    }
    var left = Math.max(vp.left, Math.min(target.x - width / 2, vp.right - width));
    var top = Math.max(vp.top, Math.min(target.y - height / 2, vp.bottom - height));
    var cx = vp.left + vp.width * 0.5;
    var cy = vp.top + vp.height * 0.5;
    // Couple positioning with the same zoom signal used for sizing:
    // - visualViewport.scale for browser pinch-zoom
    // - chainState.viewScale for canvas wheel-zoom
    var scale = getViewportZoomScale() * clamp(chainState.viewScale || 1, 0.72, 2.4);
    left = cx + (left - cx) * scale + (chainState.viewPanX || 0);
    top = cy + (top - cy) * scale + (chainState.viewPanY || 0);
    left = Math.max(vp.left, Math.min(left, vp.right - width));
    top = Math.max(vp.top, Math.min(top, vp.bottom - height));
    card.style.left = Math.round(left) + "px";
    card.style.top = Math.round(top) + "px";
  }

  function renderChainLinks(cards) {
    var layer = getChainLayer();
    if (!layer) return;
    safe(function () {
      layer.innerHTML = "";
    });

    var cardsById = Object.create(null);
    for (var c = 0; c < cards.length; c++) {
      cardsById[cards[c].id.replace("mobility-chain-card-", "")] = cards[c];
    }

    function cubicBezierPoint(t, x1, y1, cx1, cy1, cx2, cy2, x2, y2) {
      var mt = 1 - t;
      var mt2 = mt * mt;
      var t2 = t * t;
      var a = mt2 * mt;
      var b = 3 * mt2 * t;
      var c = 3 * mt * t2;
      var d = t2 * t;
      return {
        x: a * x1 + b * cx1 + c * cx2 + d * x2,
        y: a * y1 + b * cy1 + c * cy2 + d * y2,
      };
    }

    for (var i = 0; i < cards.length; i++) {
      var next = cards[i];
      var itemId = next.id.replace("mobility-chain-card-", "");
      var item = chainState.itemsById[itemId];
      var prev = item && item.parentId ? cardsById[item.parentId] : i > 0 ? cards[i - 1] : null;
      if (!prev || !next || prev === next) continue;
      var a = prev.getBoundingClientRect();
      var b = next.getBoundingClientRect();
      var x1 = a.left + a.width * 0.5;
      var y1 = a.top + a.height;
      var x2 = b.left + b.width * 0.5;
      var y2 = b.top;
      var dx = x2 - x1;
      var swing = Math.max(48, Math.min(160, Math.abs(dx) * 0.46 + 32));
      var lift = Math.max(30, Math.min(120, Math.abs(y2 - y1) * 0.34 + 22));
      var growth = 1 + i * 0.16;
      // Ensure curvature even when dx is small (avoid straight-ish verticals).
      var wiggle = (pseudoRand01("link:" + itemId) - 0.5) * 44;
      var cp1x = x1 + (dx >= 0 ? swing : -swing) + wiggle;
      var cp1y = y1 + lift;
      var cp2x = x2 - (dx >= 0 ? swing : -swing) - wiggle;
      var cp2y = y2 - lift;

      var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M " + x1 + " " + y1 + " C " + cp1x + " " + cp1y + ", " + cp2x + " " + cp2y + ", " + x2 + " " + y2);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "rgba(45, 52, 54, 0.72)");
      path.setAttribute("stroke-width", String((2.4 + growth * 0.6).toFixed(2)));
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-dasharray", "10 8");
      layer.appendChild(path);

      // Bubble chain along the curve (tiny gradual increase; never a straight line).
      var bubbleCount = 7;
      for (var bi = 0; bi < bubbleCount; bi++) {
        var t = (bi + 1) / (bubbleCount + 1);
        var p = cubicBezierPoint(t, x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2);
        var r = 1.8 + (bi / Math.max(1, bubbleCount - 1)) * 2.8 + i * 0.1;
        var bubble = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        bubble.setAttribute("cx", String(p.x.toFixed(2)));
        bubble.setAttribute("cy", String(p.y.toFixed(2)));
        bubble.setAttribute("r", String(r.toFixed(2)));
        bubble.setAttribute("fill", "rgba(9, 132, 227, 0.82)");
        layer.appendChild(bubble);
      }

      var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", String(x2));
      dot.setAttribute("cy", String(y2));
      dot.setAttribute("r", String((4.0 + i * 0.48).toFixed(2)));
      dot.setAttribute("fill", "rgba(9, 132, 227, 0.92)");
      layer.appendChild(dot);
    }
  }

  function renderCitizenLinks(elsById) {
    if (!elsById) return;
    var layer = getChainLayer();
    if (!layer) return;
    safe(function () {
      layer.innerHTML = "";
    });

    function cubicBezierPoint(t, x1, y1, cx1, cy1, cx2, cy2, x2, y2) {
      var mt = 1 - t;
      var mt2 = mt * mt;
      var t2 = t * t;
      var a = mt2 * mt;
      var b = 3 * mt2 * t;
      var c = 3 * mt * t2;
      var d = t2 * t;
      return {
        x: a * x1 + b * cx1 + c * cx2 + d * x2,
        y: a * y1 + b * cy1 + c * cy2 + d * y2,
      };
    }

    for (var i = 0; i < chainState.order.length; i++) {
      var itemId = chainState.order[i];
      if (!itemId) continue;
      var elNext = elsById[itemId];
      if (!elNext) continue;
      var item = chainState.itemsById[itemId];
      var parentId = item && item.parentId ? String(item.parentId) : "";
      var elPrev = parentId ? elsById[parentId] : null;
      if (!elPrev || elPrev === elNext) continue;

      var a = elPrev.getBoundingClientRect();
      var b = elNext.getBoundingClientRect();
      var x1 = a.left + a.width * 0.5;
      var y1 = a.top + a.height;
      var x2 = b.left + b.width * 0.5;
      var y2 = b.top;
      var dx = x2 - x1;
      var swing = Math.max(48, Math.min(160, Math.abs(dx) * 0.46 + 32));
      var lift = Math.max(30, Math.min(120, Math.abs(y2 - y1) * 0.34 + 22));
      var growth = 1 + i * 0.12;
      var wiggle = (pseudoRand01("citizen-link:" + itemId) - 0.5) * 44;
      var cp1x = x1 + (dx >= 0 ? swing : -swing) + wiggle;
      var cp1y = y1 + lift;
      var cp2x = x2 - (dx >= 0 ? swing : -swing) - wiggle;
      var cp2y = y2 - lift;

      var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M " + x1 + " " + y1 + " C " + cp1x + " " + cp1y + ", " + cp2x + " " + cp2y + ", " + x2 + " " + y2);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "rgba(45, 52, 54, 0.72)");
      path.setAttribute("stroke-width", String((2.2 + growth * 0.5).toFixed(2)));
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-dasharray", "10 8");
      layer.appendChild(path);

      // Bubble chain along the curve.
      var bubbleCount = 7;
      for (var bi = 0; bi < bubbleCount; bi++) {
        var t = (bi + 1) / (bubbleCount + 1);
        var p = cubicBezierPoint(t, x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2);
        var r = 1.6 + (bi / Math.max(1, bubbleCount - 1)) * 2.6 + i * 0.08;
        var bubble = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        bubble.setAttribute("cx", String(p.x.toFixed(2)));
        bubble.setAttribute("cy", String(p.y.toFixed(2)));
        bubble.setAttribute("r", String(r.toFixed(2)));
        bubble.setAttribute("fill", "rgba(9, 132, 227, 0.82)");
        layer.appendChild(bubble);
      }

      var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", String(x2));
      dot.setAttribute("cy", String(y2));
      dot.setAttribute("r", String((3.6 + i * 0.36).toFixed(2)));
      dot.setAttribute("fill", "rgba(9, 132, 227, 0.92)");
      layer.appendChild(dot);
    }
  }

  function getRenderableChainItems(items) {
    if (readChainStack() !== CHAIN_STACK_COLLAPSED) return items;
    if (!items || items.length <= 1) return items;
    // Collapsed mode: show the most recent entry, plus any pinned entries (stable UX).
    // Preserve original ordering to avoid surprising jumps.
    var last = items[items.length - 1];
    var out = [];
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      if (!it) continue;
      if (it === last || chainState.pinned[it.id]) out.push(it);
    }
    if (out.length === 0 && last) out.push(last);
    return out;
  }

  function syncMobilityChainCards() {
    // Bubble style is FRONTEND ONLY. Under the hood, the chain model is always the SSOT.
    // Renderer:
    // - simple: chain cards (AI RESPONSE · ...)
    // - colorful/blank: citizen bubble visuals driven by chain items

    var needsTranscriptRefresh = !!chainState.transcriptDirty;
    chainState.transcriptDirty = false;

    var transcriptItems = [];
    if (needsTranscriptRefresh) {
      transcriptItems = collectTranscriptItems();
      if (hasTranscriptConversation(transcriptItems)) rebuildTranscriptChainState(transcriptItems);
    }
    // Keep synthetic "+" follow-on nodes stable across transcript rebuilds.
    mergeSyntheticNodesIntoChain();

    // Live chat should win over static scaffolding: if we have transcript-derived AI nodes,
    // proactively purge remaining preset seed nodes (even if under limit).
    if (chainState.order.some(function (id) { return /^ai-/i.test(String(id || "")); })) {
      for (var p = chainState.order.length - 1; p >= 0; p--) {
        var pid = chainState.order[p];
        if (!pid || !isScriptSeedId(pid)) continue;
        if (chainState.pinned[pid]) continue;
        chainState.order.splice(p, 1);
        delete chainState.itemsById[pid];
      }
    }

    // If real conversation is driving the chain, do not run the seed reveal cascade.
    if (chainState.order.some(function (id) { return !isScriptSeedId(id) && /^ai-/i.test(String(id || "")); })) {
      cancelScriptReveal();
      chainState.scriptRevealKey = "";
      chainState.scriptRevealCount = 0;
    }
    // Only use preset "scaffold" cards when Mobility preset is active and there is no transcript conversation yet.
    if (isMobilityPresetActive() && chainState.order.length === 0) {
      ensureScriptSeedLoaded();
      for (var i = 0; i < scriptState.order.length && chainState.order.length < CHAIN_ENTRY_LIMIT; i++) {
        var sid = scriptState.order[i];
        if (chainState.closed[sid]) continue;
        var scripted = scriptState.itemsById[sid];
        if (!scripted || chainState.itemsById[sid]) continue;
        chainState.itemsById[sid] = scripted;
        chainState.order.push(sid);
      }
    }
    // Synthetic nodes might be targeting preset scaffolding; apply again after seeding.
    mergeSyntheticNodesIntoChain();
    var items = getRenderableChainItems(getOpenChainEntries());
    startScriptRevealIfNeeded(items);
    items = applyScriptReveal(items);
    if (items.length === 0) {
      clearMobilityChainCards();
      clearMobilityCitizenLayer();
      return;
    }

    var style = readBubbleStyle();
    if (style === BUBBLE_STYLE_SIMPLE) {
      // Simple style: render chain cards (click-to-send) + links.
      clearMobilityCitizenLayer();
      syncChainCardsFromChainItems(items);
      return;
    }

    // Colorful/blank: render citizen bubbles driven by the chain SSOT.
    clearMobilityChainCards();
    chainState.lastChainSignature = "";
    syncCitizenBubblesFromChainItems(items);
    chainState.citizenDirty = true;
    return;

  }

  function syncChainCardsFromChainItems(items) {
    if (!items || items.length === 0) {
      clearMobilityChainCards();
      return;
    }

    // Build/update cards without churn.
    var cards = [];
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      if (!it || !it.id) continue;
      var card = ensureChainCard(it, i);
      if (!card) continue;
      updateChainCard(card, it);
      cards.push(card);
    }

    // Remove stale cards (not in current render list).
    safe(function () {
      var keep = Object.create(null);
      for (var i = 0; i < items.length; i++) if (items[i] && items[i].id) keep["mobility-chain-card-" + items[i].id] = true;
      var existing = document.querySelectorAll("." + CHAIN_CARD_CLASS);
      for (var j = 0; j < existing.length; j++) {
        var el = existing[j];
        if (!el || !el.id || keep[el.id]) continue;
        el.remove();
      }
    });

    // Layout targets: reuse the same slot generator as bubbles for a consistent, mobile-first feel.
    var slots = buildCitizenSlots(cards.length);
    var vp = getSafeViewport();
    for (var s = 0; s < cards.length; s++) {
      var target = slots[s] || { x: vp.left + vp.width * 0.5, y: vp.top + 140 + s * 110 };
      positionCard(cards[s], target);
    }

    // Render link layer behind cards.
    getChainLayer();
    renderChainLinks(cards);
  }

  function collectCitizenBubbles() {
    var layer = safe(function () {
      return document.getElementById("mobility-citizen-layer");
    }, null);
    if (layer) return Array.from(layer.querySelectorAll(".citizen-bubble"));
    var host = getChatContainer();
    if (!host) return [];
    return Array.from(host.querySelectorAll(".citizen-bubble"));
  }

  function buildCitizenSlots(count) {
    var vp = getSafeViewport();
    if (count <= 0) return [];

    // Mobile-first: phone screens get a single readable vertical flow first,
    // then the relax pass spreads them out to avoid collisions.
    if (vp.width <= 540) {
      var slotsMobile = [];
      var stepY = Math.max(92, Math.min(132, vp.height / Math.max(1, count + 0.5)));
      for (var m = 0; m < count; m++) {
        slotsMobile.push({
          x: vp.left + vp.width * 0.5,
          y: vp.top + 24 + stepY * m,
        });
      }
      return slotsMobile;
    }

    var width = vp.right - vp.left;
    var height = vp.bottom - vp.top;

    // Responsive grid: let larger viewports use more columns to remain evenly spread.
    var maxCols = clamp(Math.floor(vp.width / 260), 2, 5);
    var cols = clamp(Math.round(Math.sqrt(Math.max(1, count))), 2, maxCols);
    var rows = Math.max(1, Math.ceil(count / cols));

    var slots = [];
    for (var i = 0; i < count; i++) {
      var row = Math.floor(i / cols);
      var col = i % cols;
      var x = vp.left + width * ((col + 0.5) / cols);
      var y = vp.top + height * ((row + 0.55) / rows);
      // Deterministic micro-jitter keeps a more organic layout and helps the relaxer converge.
      var jx = (pseudoRand01("citizen-slot:x:" + i) - 0.5) * 26;
      var jy = (pseudoRand01("citizen-slot:y:" + i) - 0.5) * 20;
      x += jx;
      y += jy + (col % 2 === 0 ? -10 : 10);
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
    // During drag, disable transitions so the bubble tracks the finger/cursor precisely
    // (especially important on iOS Safari where animated transforms can feel "stuck").
    if (safe(function () { return el.dataset.mobilityDragging === "1"; }, false)) {
      el.style.transition = "none";
    } else {
      el.style.transition = "transform 220ms ease, box-shadow 220ms ease, opacity 180ms ease";
    }
    el.style.willChange = "transform";
    el.style.zIndex = "2100";
  }

  function resetCitizenTransforms() {
    var nodes = collectCitizenBubbles();
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      delete el.dataset.mobilityTx;
      delete el.dataset.mobilityTy;
      delete el.dataset.mobilityTone;
      el.style.transform = "";
      el.style.transition = "";
      el.style.willChange = "";
    }
  }

  function relayoutCitizenBubbles() {
    // Global: bubble layout should work regardless of preset/script, gated only by Chain Enabled.
    if (!isChainEnabled()) {
      resetCitizenTransforms();
      // No chain: ensure no stale edges remain on screen.
      safe(function () {
        var layer = byId(CHAIN_LAYER_ID);
        if (layer) layer.remove();
      });
      return;
    }

    updateCanvasScaleCssVar();

    // Citizen bubble SSOT styles must NOT show chain cards.
    if (readBubbleStyle() !== BUBBLE_STYLE_SIMPLE) {
      clearMobilityChainCards();
      chainState.lastChainSignature = "";
    }

    var nodes = collectCitizenBubbles();
    if (nodes.length === 0) {
      // Citizen surface inactive: remove edges unless the chain-card renderer is active.
      if (readBubbleStyle() !== BUBBLE_STYLE_SIMPLE) {
        safe(function () {
          var layer = byId(CHAIN_LAYER_ID);
          if (layer) layer.remove();
        });
      }
      return;
    }

    var vp = getSafeViewport();
    var scale = getViewportZoomScale() * getCanvasScale();
    var viewportSig = [
      vp.left,
      vp.top,
      vp.right,
      vp.bottom,
      vp.width,
      vp.height,
      scale.toFixed(3),
      Math.round(chainState.viewPanX || 0),
      Math.round(chainState.viewPanY || 0),
      readBubbleStyle(),
    ].join(":");
    // Sample IDs so churn stays low but stale layouts still refresh on new bubbles.
    var sampled = [];
    for (var si = Math.max(0, nodes.length - 8); si < nodes.length; si++) {
      sampled.push(hashText(String(nodes[si] && (nodes[si].innerText || nodes[si].textContent) || "")));
    }
    var citizenSig = viewportSig + "|" + nodes.length + "|" + sampled.join(",");
    if (!chainState.citizenDirty && citizenSig === chainState.lastCitizenSignature) return;
    chainState.citizenDirty = false;
    chainState.lastCitizenSignature = citizenSig;

    var metas = [];
    for (var i = 0; i < nodes.length; i++) {
      ensureCitizenBubbleUi(nodes[i]);
      var id = getCitizenBubbleId(nodes[i]);
      if (citizenState.closedById[id]) continue;
      metas.push({
        el: nodes[i],
        id: id,
        base: getManagedBaseCenter(nodes[i]),
      });
    }
    if (metas.length === 0) return;
    metas.sort(function (a, b) {
      return a.base.x - b.base.x || a.base.y - b.base.y;
    });

    var cx = vp.left + vp.width * 0.5;
    var cy = vp.top + vp.height * 0.5;
    var panX = Number(chainState.viewPanX || 0);
    var panY = Number(chainState.viewPanY || 0);

    /** @type {Array<{id:string,width:number,height:number,x:number,y:number}>} */
    var fixed = [];
    /** @type {Array<{id:string,width:number,height:number,x:number,y:number,meta:any}>} */
    var free = [];

    for (var mi = 0; mi < metas.length; mi++) {
      var m = metas[mi];
      var w = m.base.width;
      var h = m.base.height;
      if (citizenState.pinnedById[m.id]) {
        var ax = Number(citizenState.pinnedAnchorXById[m.id]);
        var ay = Number(citizenState.pinnedAnchorYById[m.id]);
        if (!Number.isFinite(ax) || !Number.isFinite(ay)) {
          // If pin anchors are missing (edge case), fall back to current base position.
          ax = m.base.x;
          ay = m.base.y;
        }
        fixed.push({ id: m.id, width: w, height: h, x: ax, y: ay });
        continue;
      }
      free.push({ id: m.id, width: w, height: h, x: m.base.x, y: m.base.y, meta: m });
    }

    function relaxFreeSlots(freeItems, fixedItems, bounds, gapPx, passes) {
      var gap = Math.max(8, gapPx || 16);
      var maxPasses = Math.max(1, passes || 4);
      var nodes = freeItems.map(function (it) {
        return {
          id: it.id,
          width: Math.max(88, it.width || 0),
          height: Math.max(48, it.height || 0),
          x: it.x,
          y: it.y,
          baseX: it.x,
          baseY: it.y,
        };
      });
      var fixedNodes = (fixedItems || []).map(function (it) {
        return {
          id: it.id,
          width: Math.max(88, it.width || 0),
          height: Math.max(48, it.height || 0),
          x: it.x,
          y: it.y,
        };
      });
      var anchorStrength = clamp(0.06 + nodes.length * 0.004, 0.08, 0.16);

      for (var pass = 0; pass < maxPasses; pass++) {
        // free-free repel
        for (var i = 0; i < nodes.length; i++) {
          var a = nodes[i];
          for (var j = i + 1; j < nodes.length; j++) {
            var b = nodes[j];
            var dx = b.x - a.x;
            var dy = b.y - a.y;
            var minDx = (a.width + b.width) * 0.5 + gap;
            var minDy = (a.height + b.height) * 0.5 + gap * 0.78;
            if (Math.abs(dx) >= minDx || Math.abs(dy) >= minDy) continue;
            var pushX = (minDx - Math.abs(dx)) * 0.5;
            var pushY = (minDy - Math.abs(dy)) * 0.5;
            var tie = pseudoRand01(String(a.id) + "|" + String(b.id) + "|" + pass);
            var sx = dx === 0 ? (tie < 0.5 ? -1 : 1) : dx < 0 ? -1 : 1;
            var sy = dy === 0 ? (tie < 0.5 ? 1 : -1) : dy < 0 ? -1 : 1;
            a.x -= pushX * sx;
            b.x += pushX * sx;
            a.y -= pushY * sy;
            b.y += pushY * sy;
          }
        }
        // free-fixed repel (fixed does not move)
        for (var fi = 0; fi < nodes.length; fi++) {
          var n = nodes[fi];
          for (var fj = 0; fj < fixedNodes.length; fj++) {
            var f = fixedNodes[fj];
            var dx2 = n.x - f.x;
            var dy2 = n.y - f.y;
            var minDx2 = (n.width + f.width) * 0.5 + gap;
            var minDy2 = (n.height + f.height) * 0.5 + gap * 0.78;
            if (Math.abs(dx2) >= minDx2 || Math.abs(dy2) >= minDy2) continue;
            var pushX2 = (minDx2 - Math.abs(dx2));
            var pushY2 = (minDy2 - Math.abs(dy2));
            var sx2 = dx2 === 0 ? (pseudoRand01(String(n.id) + "|" + String(f.id) + "|" + pass) < 0.5 ? -1 : 1) : dx2 < 0 ? -1 : 1;
            var sy2 = dy2 === 0 ? (pseudoRand01(String(n.id) + "|" + String(f.id) + "|y|" + pass) < 0.5 ? -1 : 1) : dy2 < 0 ? -1 : 1;
            n.x += pushX2 * 0.5 * sx2;
            n.y += pushY2 * 0.5 * sy2;
          }
        }
        // spring + clamp
        for (var k = 0; k < nodes.length; k++) {
          var nn = nodes[k];
          nn.x += (nn.baseX - nn.x) * anchorStrength;
          nn.y += (nn.baseY - nn.y) * anchorStrength;
          nn.x = clamp(nn.x, bounds.left + nn.width * 0.5, bounds.right - nn.width * 0.5);
          nn.y = clamp(nn.y, bounds.top + nn.height * 0.5, bounds.bottom - nn.height * 0.5);
        }
      }
      return nodes;
    }

    var slots = buildCitizenSlots(free.length);
    for (var si = 0; si < free.length; si++) {
      free[si].x = slots[si].x;
      free[si].y = slots[si].y;
    }
    var relaxedFree = relaxFreeSlots(free, fixed, vp, 12, 5);
    var relaxedById = Object.create(null);
    for (var ri = 0; ri < relaxedFree.length; ri++) relaxedById[relaxedFree[ri].id] = relaxedFree[ri];

    for (var j = 0; j < metas.length; j++) {
      var meta = metas[j];
      var tone = MOBILITY_TONES[j % MOBILITY_TONES.length];
      // All bubble styles share the same collision avoidance + layout algorithm.
      // Tone is a stable index that styles can optionally use (colorful uses it; simple/blank may ignore it).
      meta.el.dataset.mobilityTone = tone;

      var layoutTarget = null;
      if (citizenState.pinnedById[meta.id]) {
        meta.el.dataset.mobilityPinned = "1";
        var pax = Number(citizenState.pinnedAnchorXById[meta.id]);
        var pay = Number(citizenState.pinnedAnchorYById[meta.id]);
        if (!Number.isFinite(pax) || !Number.isFinite(pay)) {
          pax = meta.base.x;
          pay = meta.base.y;
        }
        layoutTarget = { x: pax, y: pay };
      } else {
        var r = relaxedById[meta.id];
        if (!r) continue;
        delete meta.el.dataset.mobilityPinned;
        layoutTarget = { x: r.x, y: r.y };
      }

      // Apply view transform: layout space -> screen space.
      var screenTarget = {
        x: cx + (layoutTarget.x - cx) * scale + panX,
        y: cy + (layoutTarget.y - cy) * scale + panY,
      };
      applyManagedTransform(meta.el, screenTarget);
    }

    // Render parent-child edges for citizen bubbles (➕ draft prompt included).
    var elsById = Object.create(null);
    for (var li = 0; li < metas.length; li++) {
      elsById[metas[li].id] = metas[li].el;
    }
    renderCitizenLinks(elsById);
  }

  function runLayoutNow() {
    coalesce("mobility:preset:layout", function () {
      // Mobility is script-level: if not active, avoid doing any work and clear any leftover layers.
      if (!isMobilityPresetActive()) {
        clearMobilityChainCards();
        clearMobilityCitizenLayer();
        return;
      }
      applyCanvasTouchActionForMobility();
      updateCanvasScaleCssVar();
      setPresetDataState();
      // Bubble style is frontend-only. Under the hood we always build from the chain state,
      // then render the chosen surface.
      syncMobilityChainCards();
      relayoutCitizenBubbles();
    });
  }

  function scheduleLayout() {
    if (scheduledLayout) return;
    scheduledLayout = true;
    requestAnimationFrame(function () {
      scheduledLayout = false;
      runLayoutNow();
    });
  }

  function installPresetUi() {
    remapLegacyLocalStorageValues();
    ensureMobilityPresetOption();
    setPresetDataState();

    var presetSelect = getScriptPresetSelect();
    var modeSelect = getScriptModeSelect();
    if (presetSelect) {
      presetSelect.addEventListener("change", function () {
        updateMobilityRuntime();
        scheduleLayout();
      });
    }
    if (modeSelect) modeSelect.addEventListener("change", scheduleLayout);
  }

  function installBubbleStyleUi() {
    var select = getBubbleStyleSelect();
    if (!select) return;
    var next = readBubbleStyle();
    if (select.value !== next) select.value = next;
    safe(function () {
      persistSet(LS_KEY_BUBBLE_STYLE, next, next);
    });
    select.addEventListener("change", function () {
      var style = normalizeBubbleStyle(select.value);
      if (select.value !== style) select.value = style;
      safe(function () {
        persistSet(LS_KEY_BUBBLE_STYLE, style, style);
      });
      // Apply immediately (no refresh): this updates <body data-singabldr-bubble-style=...>
      // so CSS switches in the same tick, even before the next layout pass runs.
      setPresetDataState();
      scheduleLayout();
    });
  }

  function installChainEnabledUi() {
    var select = getChainEnabledSelect();
    if (!select) return;
    var next = readChainEnabled();
    if (select.value !== next) select.value = next;
    safe(function () {
      persistSet(LS_KEY_CHAIN_ENABLED, next, next);
    });
    select.addEventListener("change", function () {
      var enabled = normalizeChainEnabled(select.value);
      if (select.value !== enabled) select.value = enabled;
      safe(function () {
        persistSet(LS_KEY_CHAIN_ENABLED, enabled, enabled);
      });
      setPresetDataState();
      scheduleLayout();
    });
  }

  function installChainClickSendUi() {
    var select = getChainClickSendSelect();
    if (!select) return;
    var next = readChainClickSend();
    if (select.value !== next) select.value = next;
    safe(function () {
      persistSet(LS_KEY_CHAIN_CLICK_SEND, next, next);
    });
    select.addEventListener("change", function () {
      var mode = normalizeChainClickSend(select.value);
      if (select.value !== mode) select.value = mode;
      safe(function () {
        persistSet(LS_KEY_CHAIN_CLICK_SEND, mode, mode);
      });
      setPresetDataState();
      scheduleLayout();
    });
  }

  function installChainParseListsUi() {
    var select = getChainParseListsSelect();
    if (!select) return;
    var next = readChainParseLists();
    if (select.value !== next) select.value = next;
    safe(function () {
      persistSet(LS_KEY_CHAIN_PARSE_LISTS, next, next);
    });
    select.addEventListener("change", function () {
      var mode = normalizeChainParseLists(select.value);
      if (select.value !== mode) select.value = mode;
      safe(function () {
        persistSet(LS_KEY_CHAIN_PARSE_LISTS, mode, mode);
      });
      chainState.transcriptDirty = true;
      setPresetDataState();
      scheduleLayout();
    });
  }

  function installChatFlowinfishPanelUi() {
    var openBtn = getSuperagentOpenBtn();
    if (openBtn) {
      openBtn.addEventListener("click", function () {
        ensureSuperagentVisible();
      });
    }

    var defaultOpenSelect = getSuperagentDefaultOpenSelect();
    if (defaultOpenSelect) {
      var next = readChatFlowinfishDefaultOpen();
      if (defaultOpenSelect.value !== next) defaultOpenSelect.value = next;
      safe(function () {
        persistSet(LS_KEY_CHAT_FLOWINFISH_DEFAULT_OPEN, next, next);
      });
      defaultOpenSelect.addEventListener("change", function () {
        var mode = normalizeChatFlowinfishDefaultOpen(defaultOpenSelect.value);
        if (defaultOpenSelect.value !== mode) defaultOpenSelect.value = mode;
        safe(function () {
          persistSet(LS_KEY_CHAT_FLOWINFISH_DEFAULT_OPEN, mode, mode);
        });
        if (mode === CHAT_FLOWINFISH_OPEN) {
          // Apply immediately for feedback.
          ensureSuperagentVisible();
        }
      });
    }

    // Apply persisted default-open after boot settles (avoid racing other boot scripts).
    if (shouldDefaultOpenFlowinfishPanel()) {
      setTimeout(function () {
        ensureSuperagentVisible();
      }, 320);
    }
  }

  function installChainLayoutUi() {
    var select = getChainLayoutSelect();
    if (!select) return;
    var next = readChainLayout();
    if (select.value !== next) select.value = next;
    safe(function () {
      persistSet(LS_KEY_CHAIN_LAYOUT, next, next);
    });
    select.addEventListener("change", function () {
      var layout = normalizeChainLayout(select.value);
      if (select.value !== layout) select.value = layout;
      safe(function () {
        persistSet(LS_KEY_CHAIN_LAYOUT, layout, layout);
      });
      setPresetDataState();
      scheduleLayout();
    });
  }

  function installChainStackUi() {
    var select = getChainStackSelect();
    if (!select) return;
    var next = readChainStack();
    if (select.value !== next) select.value = next;
    safe(function () {
      persistSet(LS_KEY_CHAIN_STACK, next, next);
    });
    select.addEventListener("change", function () {
      var stack = normalizeChainStack(select.value);
      if (select.value !== stack) select.value = stack;
      safe(function () {
        persistSet(LS_KEY_CHAIN_STACK, stack, stack);
      });
      setPresetDataState();
      scheduleLayout();
    });
  }

  function installObservers() {
    /** @type {Array<() => void>} */
    var cleanup = [];

    // Prefer Touch Events for coarse pointers so we can reliably call preventDefault() on touchmove
    // (some mobile browsers will still scroll and suppress pointermove without touch-action).
    var isCoarsePointer = shouldShowDragHint();
    var supportsPointerEvents = safe(function () {
      return typeof window !== "undefined" && "PointerEvent" in window;
    }, true);

    var chat = getChatLog();
    if (chat) {
      safe(function () {
        var observer = new MutationObserver(function () {
          chainState.transcriptDirty = true;
          scheduleLayout();
        });
        observer.observe(chat, { childList: true, subtree: true, characterData: true });
        cleanup.push(function () {
          try {
            observer.disconnect();
          } catch {}
        });
      });
    }

    var host = getChatContainer();
    if (host) {
      safe(function () {
        var observer = new MutationObserver(function () {
          chainState.citizenDirty = true;
          scheduleLayout();
        });
        observer.observe(host, { childList: true, subtree: true });
        cleanup.push(function () {
          try {
            observer.disconnect();
          } catch {}
        });
      });
    }

    var PASSIVE = { passive: true };
    var PASSIVE_CAPTURE = { passive: true, capture: true };
    var ACTIVE_CAPTURE = { passive: false, capture: true };

    safe(function () {
      window.addEventListener("resize", scheduleLayout, PASSIVE);
      cleanup.push(function () {
        window.removeEventListener("resize", scheduleLayout, PASSIVE);
      });
      window.addEventListener("orientationchange", scheduleLayout, PASSIVE);
      cleanup.push(function () {
        window.removeEventListener("orientationchange", scheduleLayout, PASSIVE);
      });
      window.addEventListener("scroll", scheduleLayout, PASSIVE_CAPTURE);
      cleanup.push(function () {
        window.removeEventListener("scroll", scheduleLayout, PASSIVE_CAPTURE);
      });
    });

    if (window.visualViewport) {
      safe(function () {
        window.visualViewport.addEventListener("resize", scheduleLayout, PASSIVE);
        window.visualViewport.addEventListener("scroll", scheduleLayout, PASSIVE);
        cleanup.push(function () {
          try {
            window.visualViewport.removeEventListener("resize", scheduleLayout, PASSIVE);
            window.visualViewport.removeEventListener("scroll", scheduleLayout, PASSIVE);
          } catch {}
        });
      });
    }

    var handleWheel = function (ev) {
        if (!ev) return;
        // Track wheel-zoom only for canvas-ish interactions.
        if (shouldTrackCanvasInteraction(ev.target)) {
          // Trackpad pinch-zoom often arrives as wheel+ctrlKey; let visualViewport.scale handle it.
          if (!ev.ctrlKey) {
            var dir = Math.sign(Number(ev.deltaY || 0));
            if (dir !== 0) {
              // Match the 3D canvas camera-zoom cadence (1.08 / 0.92) for tighter coupling.
              chainState.viewScale = clamp(chainState.viewScale * (dir > 0 ? 1.08 : 0.92), 0.72, 2.4);
            }
          }
          scheduleLayout();
          return;
        }
        scheduleLayout();
    };
    safe(function () {
      document.addEventListener("wheel", handleWheel, PASSIVE_CAPTURE);
      cleanup.push(function () {
        document.removeEventListener("wheel", handleWheel, PASSIVE_CAPTURE);
      });
    });

    // Draft prompt bubble (➕): mirror chat input into the synthetic draft node so the
    // user sees a child bubble (and edge) as they type.
    var input = getChatInput();
    if (input) {
      safe(function () {
        var handleInput = function () {
          var draftId = String(chainState.activeDraftId || "");
          if (!draftId) return;
          var node = chainState.syntheticById[draftId] || chainState.itemsById[draftId];
          if (!node) return;
          var nextText = String(input.value || "");
          // Keep the node text bounded for layout stability (full prompt still exists in input).
          var compacted = compactText(nextText, 360);
          if (String(node.text || "") === compacted && String(node.promptText || "") === compacted) return;
          node.text = compacted;
          node.promptText = compacted;
          chainState.citizenDirty = true;
          throttle("mobility:draft:layout", scheduleLayout, 64);
        };
        input.addEventListener("input", handleInput, PASSIVE);
        cleanup.push(function () {
          input.removeEventListener("input", handleInput, PASSIVE);
        });
      });
    }

    var send = getSendButton();
    if (send) {
      safe(function () {
        var handleSend = function () {
          var draftId = String(chainState.activeDraftId || "");
          if (!draftId) return;
          // Clear immediately on send to avoid stale draft bubbles if transcript rebuild lags.
          removeSyntheticNode(draftId);
          chainState.citizenDirty = true;
          scheduleLayout();
        };
        send.addEventListener("click", handleSend, PASSIVE);
        cleanup.push(function () {
          send.removeEventListener("click", handleSend, PASSIVE);
        });
      });
    }

    // Touch rule (recommended):
    // - 1-finger drag pans anywhere on the game surface (including "over" bubbles),
    //   except on explicit UI controls.
    // - Bubble actions (📍/➕/✖) remain tap-only (hit-tested by our capture handler).
    //
    // Pointer Events path (desktop / fine pointer).
    if (supportsPointerEvents && !isCoarsePointer) {
      var handlePointerDown = function (ev) {
        if (!ev || !shouldTrackCanvasInteraction(ev.target)) return;
        dismissDragHint();
        chainState.dragPointerId = Number(ev.pointerId || 1);
        chainState.dragLastX = Number(ev.clientX || 0);
        chainState.dragLastY = Number(ev.clientY || 0);
      };
      var handlePointerMove = function (ev) {
          if (!ev) return;
          var pointerId = Number(ev.pointerId || 0);
          var isSamePointer = chainState.dragPointerId > -1 && pointerId === chainState.dragPointerId;
          var buttons = Number(ev.buttons || 0);
          var pointerType = safe(function () {
            return String(ev.pointerType || "");
          }, "");
          var pressure = Number(ev.pressure || 0);
          // Mobile Safari can report buttons=0 for touch pointers, so treat:
          // - pointerType=touch OR pressure>0 as "pressed"
          // as long as pointerId matches the active drag.
          var isPressed = buttons > 0 || pressure > 0 || pointerType === "touch";

          if (isSamePointer && isPressed) {
            var x = Number(ev.clientX || 0);
            var y = Number(ev.clientY || 0);
            chainState.viewPanX += x - chainState.dragLastX;
            chainState.viewPanY += y - chainState.dragLastY;
            chainState.dragLastX = x;
            chainState.dragLastY = y;
            scheduleLayout();
            return;
          }
          if (ev.buttons > 0) scheduleLayout();
      };
      var handlePointerUp = function () {
        chainState.dragPointerId = -1;
        scheduleLayout();
      };
      safe(function () {
        document.addEventListener("pointerdown", handlePointerDown, PASSIVE_CAPTURE);
        document.addEventListener("pointermove", handlePointerMove, PASSIVE_CAPTURE);
        document.addEventListener("pointerup", handlePointerUp, PASSIVE_CAPTURE);
        document.addEventListener("pointercancel", handlePointerUp, PASSIVE_CAPTURE);
        cleanup.push(function () {
          document.removeEventListener("pointerdown", handlePointerDown, PASSIVE_CAPTURE);
          document.removeEventListener("pointermove", handlePointerMove, PASSIVE_CAPTURE);
          document.removeEventListener("pointerup", handlePointerUp, PASSIVE_CAPTURE);
          document.removeEventListener("pointercancel", handlePointerUp, PASSIVE_CAPTURE);
        });
      });
    } else {
      // Touch Events fallback (older app shells): keep behavior consistent.
      var TOUCH_POINTER_OFFSET = 1000000;
      var handleTouchStart = function (ev) {
          if (!ev || !ev.touches || ev.touches.length !== 1) return;
          if (!shouldTrackCanvasInteraction(ev.target)) return;
          dismissDragHint();
          applyCanvasTouchActionForMobility();
          var t = ev.touches[0];
          var id = Number(t && typeof t.identifier === "number" ? t.identifier : 0);
          chainState.dragPointerId = TOUCH_POINTER_OFFSET + id;
          chainState.dragLastX = Number(t && t.clientX || 0);
          chainState.dragLastY = Number(t && t.clientY || 0);
      };
      var handleTouchMove = function (ev) {
          if (!ev || !ev.touches || ev.touches.length !== 1) return;
          if (!shouldTrackCanvasInteraction(ev.target)) return;
          var t = ev.touches[0];
          var id = Number(t && typeof t.identifier === "number" ? t.identifier : 0);
          if (chainState.dragPointerId !== TOUCH_POINTER_OFFSET + id) return;
          // Prevent page scroll while panning.
          try {
            ev.preventDefault?.();
          } catch {}
          applyCanvasTouchActionForMobility();
          var x = Number(t && t.clientX || 0);
          var y = Number(t && t.clientY || 0);
          chainState.viewPanX += x - chainState.dragLastX;
          chainState.viewPanY += y - chainState.dragLastY;
          chainState.dragLastX = x;
          chainState.dragLastY = y;
          scheduleLayout();
      };
      var handleTouchEnd = function () {
        chainState.dragPointerId = -1;
        scheduleLayout();
      };
      safe(function () {
        document.addEventListener("touchstart", handleTouchStart, PASSIVE_CAPTURE);
        document.addEventListener("touchmove", handleTouchMove, ACTIVE_CAPTURE);
        document.addEventListener("touchend", handleTouchEnd, PASSIVE_CAPTURE);
        document.addEventListener("touchcancel", handleTouchEnd, PASSIVE_CAPTURE);
        cleanup.push(function () {
          document.removeEventListener("touchstart", handleTouchStart, PASSIVE_CAPTURE);
          document.removeEventListener("touchmove", handleTouchMove, ACTIVE_CAPTURE);
          document.removeEventListener("touchend", handleTouchEnd, PASSIVE_CAPTURE);
          document.removeEventListener("touchcancel", handleTouchEnd, PASSIVE_CAPTURE);
        });
      });
    }

    // Safari pinch-zoom support.
    var handleGestureStart = function () {
      chainState.gestureScaleBase = clamp(chainState.viewScale || 1, 0.72, 2.4);
    };
    var handleGestureChange = function (ev) {
      var nextScale = (chainState.gestureScaleBase || 1) * Number(ev && ev.scale ? ev.scale : 1);
      chainState.viewScale = clamp(nextScale, 0.72, 2.4);
      scheduleLayout();
    };
    safe(function () {
      document.addEventListener("gesturestart", handleGestureStart, PASSIVE_CAPTURE);
      document.addEventListener("gesturechange", handleGestureChange, PASSIVE_CAPTURE);
      cleanup.push(function () {
        document.removeEventListener("gesturestart", handleGestureStart, PASSIVE_CAPTURE);
        document.removeEventListener("gesturechange", handleGestureChange, PASSIVE_CAPTURE);
      });
    });

    return function cleanupObservers() {
      for (var i = cleanup.length - 1; i >= 0; i--) {
        try {
          cleanup[i]();
        } catch {}
      }
      cleanup = [];
      chainState.dragPointerId = -1;
      scheduleLayout();
    };
  }

  function computeTranscriptSignatureLightweight() {
    var chat = getChatLog();
    if (!chat) return "nochat";
    var nodes = Array.from(chat.children || []);
    var n = nodes.length;
    if (n === 0) return "empty";
    // Only sample the last few nodes to avoid heavy reads.
    var start = Math.max(0, n - 6);
    var parts = [String(n)];
    for (var i = start; i < n; i++) {
      var node = nodes[i];
      if (!(node instanceof HTMLElement)) continue;
      var text = compactText(node.innerText || "", 120);
      if (!text) continue;
      var style = safe(function () {
        return window.getComputedStyle(node);
      }, null);
      var alignSelf = style ? String(style.alignSelf || "").toLowerCase() : "";
      var role = alignSelf.indexOf("end") >= 0 ? "user" : "assistant";
      parts.push(role + ":" + hashText(text));
    }
    return parts.join("|");
  }

  function installLayoutPollFallback() {
    // Light poll fallback: recover if mutation observers miss an event (local dev shells can be flaky).
    // Keep it cheap + coalesced; dirty flags ensure heavy work only happens when something changed.
    try {
      if (mobilityLayoutPollTimer) return function () {};
      mobilityLayoutPollTimer = setInterval(function () {
        // Poll fallback is style-agnostic: all bubble styles reuse the same layout pipeline.
        if (!isMobilityPresetActive() || !isChainEnabled()) return;
        var sig = computeTranscriptSignatureLightweight();
        if (sig && sig !== chainState.lastTranscriptSignature) {
          chainState.lastTranscriptSignature = sig;
          chainState.transcriptDirty = true;
          scheduleLayout();
        }
      }, 1200);
    } catch {
      // If timer creation fails, just skip the fallback (MutationObserver is still the primary signal).
    }
    return function cleanupLayoutPollFallback() {
      try {
        if (mobilityLayoutPollTimer) clearInterval(mobilityLayoutPollTimer);
      } catch {}
      mobilityLayoutPollTimer = 0;
    };
  }

  function boot() {
    installPresetUi();
    installBubbleStyleUi();
    installChainEnabledUi();
    installChainClickSendUi();
    installChainParseListsUi();
    installChatFlowinfishPanelUi();
    installChainLayoutUi();
    installChainStackUi();
    installStartupDefaultsMigration();
    reassertStartupDefaultsOnce();
    // Attach/detach ALL heavy runtime listeners strictly based on preset activation.
    updateMobilityRuntime();
    scheduleLayout();
  }

  function registerWithGlobalBubblesUi() {
    var ui = safe(function () {
      return window.__SINGABLDR_BUBBLES_UI;
    }, null);
    if (!ui || typeof ui.registerAdapter !== "function") return;

    ui.registerAdapter("mobility", {
      isEnabled: function () {
        // Make this adapter conditional so other scripts can still use the default behavior.
        return isMobilityPresetActive();
      },
      getBubbles: function () {
        return collectCitizenBubbles();
      },
      getId: function (el) {
        return getCitizenBubbleId(el);
      },
      onClose: function (id, el) {
        citizenState.closedById[id] = true;
        safe(function () {
          el.style.display = "none";
        });
        scheduleLayout();
      },
      onAdd: function (_id, el) {
        var item = buildCitizenItemFromEl(el);
        if (!item) return;
        openDraftPromptFromItem(item);
      },
      onPinToggle: function (id, el) {
        if (citizenState.pinnedById[id]) {
          delete citizenState.pinnedById[id];
          delete citizenState.pinnedAnchorXById[id];
          delete citizenState.pinnedAnchorYById[id];
          safe(function () {
            delete el.dataset.mobilityPinned;
          });
        } else {
          // Pin at current DOM position (screen -> layout).
          var rect = el.getBoundingClientRect();
          var sx = rect.left + rect.width * 0.5;
          var sy = rect.bottom;
          pinBubbleAtScreen(id, sx, sy);
          safe(function () {
            el.dataset.mobilityPinned = "1";
          });
        }
        scheduleLayout();
      },
      onDragStart: function (_id, el) {
        // Mobility-specific drag UX is handled here (NOT in global code).
        safe(function () {
          el.dataset.mobilityDragging = "1";
        });
      },
      onDragTo: function (id, screenX, screenY, el) {
        // Dragging a bubble pins it to the finger/cursor.
        safe(function () {
          el.dataset.mobilityDragging = "1";
        });
        pinBubbleAtScreen(id, screenX, screenY);
        // Apply transform immediately for responsive drag feedback.
        applyManagedTransform(el, { x: screenX, y: screenY });
      },
      onDragEnd: function (_id, el) {
        safe(function () {
          delete el.dataset.mobilityDragging;
        });
      },
    });
  }

  registerWithGlobalBubblesUi();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
