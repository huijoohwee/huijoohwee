/* Singabldr UI preload (SSOT)
 * Fix "visual mutation" (flash of theme changes) by pre-applying:
 * - data-sb-ui-style
 * - CSS variables derived from cached JSON tokens
 * BEFORE the rest of the app boots.
 */
(function singabldrUiPreload() {
  "use strict";

  var KEY_STYLE_FALLBACK = "singabldr.ui.style";
  var KEY_TOKENS_CACHE = "singabldr.ui.tokens.cache.v1";
  var STYLE_BLEND = "blend";
  var STYLE_ATLAS = "atlas";
  var STYLE_ARCADE = "arcade";
  var STYLE_GLASS = "glass";

  // Default token snapshot (used only on first visit when no cache exists yet).
  // Keep in sync with singabldr.assets.json for a mutation-free first paint.
  var DEFAULT_CACHE = {
    version: "ui-preload-default@20260416",
    palette: {
      primary: "#0a84ff",
      mrtLines: {
        NS: "#d42e12",
        EW: "#009645",
        NE: "#9900aa",
        CC: "#fa9e0d",
        DT: "#005ec4",
        TE: "#9d5b25",
        CR: "#00a9b7",
        JE: "#0099a8",
      },
    },
    atlas: {
      grid: {
        enabled: true,
        spacingVoxels: 11,
        majorEvery: 6,
        minorLineWidthPx: 1.25,
        majorLineWidthPx: 3.25,
        majorColorHex: "#08304a",
        minorColorHex: "#0a2236",
        majorOpacity: 0.28,
        minorOpacity: 0.12,
      },
      marinaBayGlass: {
        skylineCyanHex: "#2ae6ff",
        skylineVioletHex: "#b19cff",
        skylineWarmHex: "#ffd3a6",
        skylineTintHex: "#5bd3e7",
        fogTintHex: "#bfe9ff",
        edgeGlowHex: "#8be9fd",
      },
    },
    ui: {
      storageKeys: { uiStyle: KEY_STYLE_FALLBACK },
      style: {
        default: STYLE_ATLAS,
        variants: [STYLE_ATLAS, STYLE_ARCADE, STYLE_GLASS],
        mrtUiGradientOrder: ["DT", "CC", "NE", "EW", "NS", "TE"],
        ctaDiceGradientOrder: ["NS", "CC", "EW", "NE", "NS"],
        ctaSuperagentGradientOrder: ["DT", "CC", "TE", "EW"],
        tokens: {
          atlas: { focusAlpha: 0.78, chipBgAlpha: 0.5, skylineTintAlpha: 0.38 },
          arcade: { focusAlpha: 0.78, chipBgAlpha: 0.46, skylineTintAlpha: 0.22 },
          glass: { focusAlpha: 0.46, surfaceAlpha: 0.78, surfaceStrongAlpha: 0.92, shadowSoftness: 0.65 },
        },
      },
    },
  };

  function safe(fn) {
    try {
      return fn();
    } catch {
      return undefined;
    }
  }

  function normStyle(value) {
    var v = String(value || "").trim().toLowerCase();
    if (v === STYLE_ATLAS) return STYLE_ATLAS;
    if (v === STYLE_ARCADE) return STYLE_ARCADE;
    if (v === STYLE_GLASS) return STYLE_GLASS;
    return STYLE_BLEND;
  }

  function hexToRgbTriplet(hex) {
    var s = String(hex || "").trim();
    if (!s) return null;
    if (s[0] === "#") s = s.slice(1);
    if (s.length === 3) s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2];
    if (s.length !== 6) return null;
    var r = parseInt(s.slice(0, 2), 16);
    var g = parseInt(s.slice(2, 4), 16);
    var b = parseInt(s.slice(4, 6), 16);
    if (!isFinite(r) || !isFinite(g) || !isFinite(b)) return null;
    return r + ", " + g + ", " + b;
  }

  function setVar(name, value) {
    safe(function () {
      document.documentElement.style.setProperty(String(name || ""), String(value || ""));
    });
  }

  function buildLinearGradient(angleDeg, order, colorsByCode, alpha) {
    var list = Array.isArray(order) ? order : [];
    if (list.length < 2) return null;
    if (!colorsByCode || typeof colorsByCode !== "object") return null;
    var stops = [];
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i] || "").trim().toUpperCase();
      var hex = String(colorsByCode[code] || "").trim();
      if (!code || !hex) continue;
      var color = alpha == null ? hex : "rgba(" + hexToRgbTriplet(hex) + ", " + alpha + ")";
      var pos = (i / (list.length - 1)) * 100;
      stops.push(color + " " + pos.toFixed(0) + "%");
    }
    if (stops.length < 2) return null;
    return "linear-gradient(" + String(angleDeg || 0) + "deg, " + stops.join(", ") + ")";
  }

  function applyStyleToDom(style) {
    var s = normStyle(style);
    safe(function () {
      document.documentElement.dataset.sbUiStyle = s;
    });
    safe(function () {
      if (document.body) document.body.dataset.sbUiStyle = s;
      else
        document.addEventListener(
          "DOMContentLoaded",
          function () {
            if (document.body) document.body.dataset.sbUiStyle = s;
          },
          { once: true },
        );
    });
    return s;
  }

  function applyVarsFromCache(style, cache) {
    if (!cache || typeof cache !== "object") return;
    var palette = cache.palette || null;
    var mrt = palette && palette.mrtLines ? palette.mrtLines : null;
    var primary = palette && palette.primary ? palette.primary : "#0a84ff";
    var ui = cache.ui && cache.ui.style ? cache.ui.style : null;
    var tokens = ui && ui.tokens ? ui.tokens : null;
    var t = tokens && tokens[style] ? tokens[style] : null;
    if (!t) return;

    var focusHex = primary;
    if (style === STYLE_ATLAS && mrt && mrt.DT) focusHex = mrt.DT;
    if (style === STYLE_ARCADE && mrt && mrt.NS) focusHex = mrt.NS;
    var focusRgb = hexToRgbTriplet(focusHex);
    if (focusRgb) setVar("--sb-focus-rgb", focusRgb);
    if (isFinite(Number(t.focusAlpha))) setVar("--sb-focus-alpha", String(Number(t.focusAlpha)));

    // Glass surface/shadows: pre-apply from cached tokens to prevent first-paint mutation.
    if (style === STYLE_GLASS) {
      if (isFinite(Number(t.surfaceAlpha))) setVar("--sb-surface-alpha", String(Number(t.surfaceAlpha)));
      if (isFinite(Number(t.surfaceStrongAlpha))) setVar("--sb-surface-strong-alpha", String(Number(t.surfaceStrongAlpha)));
      var softness = isFinite(Number(t.shadowSoftness)) ? Number(t.shadowSoftness) : 0.65;
      softness = Math.max(0.25, Math.min(1.2, softness));
      setVar("--sb-shadow-sm", "0 10px 24px rgba(0, 0, 0, " + (0.08 * softness).toFixed(3) + ")");
      setVar("--sb-shadow-md", "0 16px 38px rgba(0, 0, 0, " + (0.12 * softness).toFixed(3) + ")");
      setVar("--sb-shadow-lg", "0 24px 64px rgba(0, 0, 0, " + (0.16 * softness).toFixed(3) + ")");
    }

    // Grid vars (atlas + derived blend).
    var atlas = cache.atlas || null;
    var grid = atlas && atlas.grid ? atlas.grid : null;
    if (grid && grid.enabled !== false) {
      var minorRgb = hexToRgbTriplet(grid.minorColorHex);
      var majorRgb = hexToRgbTriplet(grid.majorColorHex);
      var minorLineWidthPx = Number(grid.minorLineWidthPx);
      var majorLineWidthPx = Number(grid.majorLineWidthPx);
      if (minorRgb) {
        setVar("--sb-atlas-grid-minor-rgb", minorRgb);
        setVar("--sb-blend-grid-minor-rgb", minorRgb);
      }
      if (majorRgb) setVar("--sb-atlas-grid-major-rgb", majorRgb);
      if (isFinite(Number(grid.minorOpacity))) {
        setVar("--sb-atlas-grid-minor-alpha", String(Number(grid.minorOpacity)));
        setVar("--sb-blend-grid-minor-alpha", String(Math.max(0, Math.min(1, Number(grid.minorOpacity) * 0.5))));
      }
      if (isFinite(Number(grid.majorOpacity))) setVar("--sb-atlas-grid-major-alpha", String(Number(grid.majorOpacity)));

      if (isFinite(minorLineWidthPx) && minorLineWidthPx > 0 && minorLineWidthPx <= 6) {
        setVar("--sb-atlas-grid-minor-line-px", String(minorLineWidthPx) + "px");
        setVar("--sb-blend-grid-minor-line-px", String(Math.max(1, minorLineWidthPx - 0.25)) + "px");
      }
      if (isFinite(majorLineWidthPx) && majorLineWidthPx > 0 && majorLineWidthPx <= 10) {
        setVar("--sb-atlas-grid-major-line-px", String(majorLineWidthPx) + "px");
      }
    }

    // Skyline colors + alphas.
    var marina = atlas && atlas.marinaBayGlass ? atlas.marinaBayGlass : null;
    if (marina) {
      var cyanRgb = hexToRgbTriplet(marina.skylineCyanHex || marina.skylineTintHex);
      var violetRgb = hexToRgbTriplet(marina.skylineVioletHex || marina.fogTintHex);
      var warmRgb = hexToRgbTriplet(marina.skylineWarmHex || marina.edgeGlowHex);
      if (cyanRgb) setVar("--sb-skyline-cyan-rgb", cyanRgb);
      if (violetRgb) setVar("--sb-skyline-violet-rgb", violetRgb);
      if (warmRgb) setVar("--sb-skyline-warm-rgb", warmRgb);
    }
    if (style === STYLE_ATLAS && isFinite(Number(t.skylineTintAlpha))) {
      var a = Number(t.skylineTintAlpha);
      setVar("--sb-atlas-skyline-cyan-alpha", String(a));
      setVar("--sb-atlas-skyline-violet-alpha", String(Math.max(0, a - 0.04)));
      setVar("--sb-atlas-skyline-warm-alpha", String(Math.max(0, a - 0.08)));
    }
    if (style === STYLE_BLEND && isFinite(Number(t.skylineTintAlpha))) {
      setVar("--sb-blend-skyline-cyan-alpha", String(Number(t.skylineTintAlpha)));
    }

    // MRT gradients (chips/CTAs/accent bar).
    var order = ui && Array.isArray(ui.mrtUiGradientOrder) ? ui.mrtUiGradientOrder : null;
    var dice = ui && Array.isArray(ui.ctaDiceGradientOrder) ? ui.ctaDiceGradientOrder : null;
    var superagent = ui && Array.isArray(ui.ctaSuperagentGradientOrder) ? ui.ctaSuperagentGradientOrder : null;
    var accentBar = buildLinearGradient(180, order, mrt, null);
    if (accentBar) setVar("--sb-accent-bar", accentBar);
    var chipAlpha = isFinite(Number(t.chipBgAlpha)) ? Math.max(0, Math.min(0.9, Number(t.chipBgAlpha))) : 0.22;
    var chipBg = buildLinearGradient(135, order, mrt, chipAlpha);
    if (chipBg) setVar("--sb-chip-bg", chipBg);
    var chipHover = buildLinearGradient(135, order, mrt, Math.min(0.7, chipAlpha + 0.06));
    if (chipHover) setVar("--sb-chip-bg-hover", chipHover);
    var diceBg = buildLinearGradient(135, dice, mrt, null);
    if (diceBg) setVar("--sb-cta-dice-bg", diceBg);
    var superBg = buildLinearGradient(135, superagent, mrt, null);
    if (superBg) setVar("--sb-cta-superagent-bg", superBg);
  }

  var cache = safe(function () {
    return JSON.parse(String(localStorage.getItem(KEY_TOKENS_CACHE) || ""));
  });
  // If token cache isn't available yet, use a default snapshot so first paint matches
  // the eventual JSON-driven UI (fixes "visual mutation" on first load).
  if (!cache || !cache.ui || !cache.palette) cache = DEFAULT_CACHE;
  var keyStyle = safe(function () {
    return (
      cache &&
      cache.ui &&
      cache.ui.storageKeys &&
      cache.ui.storageKeys.uiStyle &&
      String(cache.ui.storageKeys.uiStyle).trim()
    );
  });
  if (!keyStyle) keyStyle = KEY_STYLE_FALLBACK;

  var rawStyle = safe(function () {
    return localStorage.getItem(String(keyStyle));
  });
  if (!rawStyle) {
    rawStyle = safe(function () {
      return cache && cache.ui && cache.ui.style && cache.ui.style.default;
    });
  }

  var style = applyStyleToDom(rawStyle);
  applyVarsFromCache(style, cache);
})();
