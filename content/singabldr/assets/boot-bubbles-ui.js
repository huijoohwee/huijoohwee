/* Singabldr global bubbles UI/interactions (non-script-specific):
 * - Shows a tiny top-right toolbar (📍 / ➕ / ✖) on tap/select
 * - Enables bubble drag that works on desktop Safari/Chrome and iOS Safari/Chrome
 * - Delegates actions to a registered adapter when available (e.g., Mobility preset),
 *   otherwise falls back to simple DOM behavior.
 *
 * SSOT POLICY:
 * - Edit ONLY in prjt0002-singabldr (this file).
 * - Synced into the Cloudflare Pages publish repo via `npm run sync:pages` / `npm run release:pages`.
 * - FORBID hand-editing in `huijoohwee/content/singabldr/**`.
 */
(function singabldrGlobalBubblesUi() {
  "use strict";

  try {
    var w = typeof window !== "undefined" ? window : null;
    if (w && w.__SINGABLDR_GLOBAL_BUBBLES_UI_V1_INSTALLED) return;
    if (w) w.__SINGABLDR_GLOBAL_BUBBLES_UI_V1_INSTALLED = true;
  } catch {}

  function safe(fn, fallback) {
    try {
      var v = fn();
      return v === undefined ? fallback : v;
    } catch {
      return fallback;
    }
  }

  function initGlobalSchedulers() {
    var w = safe(function () {
      return window;
    }, null);
    if (!w) return;

    if (typeof w.__SINGABLDR_COALESCE !== "function") {
      /** @type {Map<string, Function>} */
      var pendingByKey = new Map();
      var scheduled = false;
      w.__SINGABLDR_COALESCE = function (key, fn) {
        var k = String(key || "default");
        if (typeof fn !== "function") return;
        pendingByKey.set(k, fn);
        if (scheduled) return;
        scheduled = true;
        Promise.resolve().then(function () {
          scheduled = false;
          var entries = Array.from(pendingByKey.entries());
          pendingByKey.clear();
          for (var i = 0; i < entries.length; i++) {
            try {
              entries[i][1]();
            } catch {}
          }
        });
      };
    }

    if (typeof w.__SINGABLDR_THROTTLE !== "function") {
      /** @type {Map<string, any>} */
      var timerByKey = new Map();
      w.__SINGABLDR_THROTTLE = function (key, fn, waitMs) {
        var k = String(key || "default");
        if (typeof fn !== "function") return;
        var wait = Math.max(0, Number(waitMs || 0));
        if (wait <= 0) return w.__SINGABLDR_COALESCE(k, fn);
        if (timerByKey.has(k)) return;
        try {
          timerByKey.set(
            k,
            setTimeout(function () {
              try {
                timerByKey.delete(k);
              } catch {}
              w.__SINGABLDR_COALESCE(k, fn);
            }, wait),
          );
        } catch {
          w.__SINGABLDR_COALESCE(k, fn);
        }
      };
    }

    // Shared persistence helper:
    // - Coalesces localStorage writes across *all* runtime scripts (single scheduler surface)
    // - Suppresses duplicate writes via signature + current-storage value checks
    // - Prevents stale/render churn under rapid switching (UI toggles, settings, adapters)
    if (!w.__SINGABLDR_PERSIST || typeof w.__SINGABLDR_PERSIST !== "object") {
      /** @type {Map<string, string>} */
      var lastSignatureByKey = new Map();

      function lsSet(key, value, opts) {
        var k = String(key || "");
        if (!k) return;
        var v = value == null ? "" : String(value);
        var signature = opts && typeof opts.signature === "string" ? String(opts.signature) : v;
        var last = lastSignatureByKey.get(k) || "";
        if (last && last === signature) return;
        lastSignatureByKey.set(k, signature);
        // Coalesce per-key persistence across the whole runtime.
        w.__SINGABLDR_COALESCE("persist:" + k, function () {
          try {
            var prev = localStorage.getItem(k);
            if (prev === v) return;
            localStorage.setItem(k, v);
          } catch {}
        });
      }

      w.__SINGABLDR_PERSIST = {
        lsSet: lsSet,
      };
    }
  }

  initGlobalSchedulers();

  // ---------------------------------------------------------------------------
  // UI style: civic/atlas + playful/arcade + minimalist/glass (Singapore vibe)
  // - Controlled by a Settings selector (persisted)
  // - Applied via <body data-sb-ui-style="..."> and overrides.css tokens
  // ---------------------------------------------------------------------------
  var LS_KEY_UI_STYLE = "singabldr.ui.style";
  var UI_STYLE_BLEND = "blend";
  var UI_STYLE_ATLAS = "atlas";
  var UI_STYLE_ARCADE = "arcade";
  var UI_STYLE_GLASS = "glass";

  /** @type {any|null} */
  var cachedAssetsTokens = null;
  /** @type {Promise<any|null>|null} */
  var cachedAssetsTokensPromise = null;

  function normalizeUiStyle(value) {
    var v = String(value || "").trim().toLowerCase();
    if (v === UI_STYLE_ATLAS) return UI_STYLE_ATLAS;
    if (v === UI_STYLE_ARCADE) return UI_STYLE_ARCADE;
    if (v === UI_STYLE_GLASS) return UI_STYLE_GLASS;
    if (v === UI_STYLE_BLEND) return UI_STYLE_BLEND;
    // Default for Singapore civic vibe.
    return UI_STYLE_ATLAS;
  }

  function getUiStyleStorageKey() {
    try {
      var uiKey =
        cachedAssetsTokens &&
        cachedAssetsTokens.ui &&
        cachedAssetsTokens.ui.storageKeys &&
        cachedAssetsTokens.ui.storageKeys.uiStyle;
      if (uiKey && String(uiKey).trim()) return String(uiKey).trim();
    } catch {}
    return LS_KEY_UI_STYLE;
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

  function readUiStyle() {
    return safe(function () {
      var raw = localStorage.getItem(getUiStyleStorageKey());
      if (raw) return normalizeUiStyle(raw);
      // If token config is available, honor JSON default (SSOT); else default to atlas.
      var tokenDefault =
        cachedAssetsTokens && cachedAssetsTokens.ui && cachedAssetsTokens.ui.style && cachedAssetsTokens.ui.style.default;
      return normalizeUiStyle(tokenDefault || UI_STYLE_ATLAS);
    }, UI_STYLE_ATLAS);
  }

  function applyUiStyleToDom(style) {
    var s = normalizeUiStyle(style);
    safe(function () {
      if (!document || !document.body) return;
      var prev = String(document.body.dataset.sbUiStyle || "");
      if (prev === s) return;
      document.body.dataset.sbUiStyle = s;
    });
    // If assets tokens are available, apply CSS vars immediately (low-churn).
    applyUiTokensFromJson(s);
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

  function hexToRgba(hex, alpha) {
    var rgb = hexToRgbTriplet(hex);
    if (!rgb) return null;
    var a = Number(alpha);
    if (!isFinite(a)) a = 1;
    a = Math.max(0, Math.min(1, a));
    return "rgba(" + rgb + ", " + a + ")";
  }

  function setRootCssVar(name, value) {
    safe(function () {
      if (!document || !document.documentElement) return;
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
      if (!code) continue;
      var hex = String(colorsByCode[code] || "").trim();
      if (!hex) continue;
      var color = alpha == null ? hex : hexToRgba(hex, alpha);
      if (!color) continue;
      var pos = list.length === 1 ? 0 : (i / (list.length - 1)) * 100;
      stops.push(color + " " + pos.toFixed(0) + "%");
    }
    if (stops.length < 2) return null;
    return "linear-gradient(" + String(angleDeg || 0) + "deg, " + stops.join(", ") + ")";
  }

  function computeUiStyleTokens(style) {
    var s = normalizeUiStyle(style);
    try {
      var ui = cachedAssetsTokens && cachedAssetsTokens.ui ? cachedAssetsTokens.ui : null;
      var cfg = ui && ui.style ? ui.style : null;
      var tokens = cfg && cfg.tokens ? cfg.tokens : null;
      if (!tokens || typeof tokens !== "object") return null;
      var t = tokens[s];
      if (t && typeof t === "object") return t;
      var fallback = normalizeUiStyle(cfg && cfg.default);
      t = tokens[fallback];
      if (t && typeof t === "object") return t;
    } catch {}
    return null;
  }

  function applyUiTokensFromJson(style) {
    if (!cachedAssetsTokens) return;
    var s = normalizeUiStyle(style);
    var palette = cachedAssetsTokens && cachedAssetsTokens.palette ? cachedAssetsTokens.palette : null;
    var mrtLines = palette && palette.mrtLines ? palette.mrtLines : null;
    var primaryHex = palette && palette.primary ? palette.primary : "#0a84ff";
    var atlas = cachedAssetsTokens && cachedAssetsTokens.atlas ? cachedAssetsTokens.atlas : null;
    var atlasGrid = atlas && atlas.grid ? atlas.grid : null;

    // Focus ring base color: use MRT DT/NS for atlas/arcade, else palette primary.
    var focusHex = primaryHex;
    if (s === UI_STYLE_ATLAS && mrtLines && mrtLines.DT) focusHex = mrtLines.DT;
    else if (s === UI_STYLE_ARCADE && mrtLines && mrtLines.NS) focusHex = mrtLines.NS;
    else if (s === UI_STYLE_GLASS) focusHex = primaryHex;

    var focusRgb = hexToRgbTriplet(focusHex);
    if (focusRgb) setRootCssVar("--sb-focus-rgb", focusRgb);

    var styleTokens = computeUiStyleTokens(s) || {};
    var focusAlpha = Number(styleTokens.focusAlpha);
    if (isFinite(focusAlpha) && focusAlpha > 0 && focusAlpha < 1.2) {
      setRootCssVar("--sb-focus-alpha", String(focusAlpha));
    }

    // Minimalist glass: surface + shadow tuning (token-driven).
    if (s === UI_STYLE_GLASS) {
      var surfaceAlpha = Number(styleTokens.surfaceAlpha);
      var surfaceStrongAlpha = Number(styleTokens.surfaceStrongAlpha);
      if (isFinite(surfaceAlpha) && surfaceAlpha > 0 && surfaceAlpha <= 1) setRootCssVar("--sb-surface-alpha", String(surfaceAlpha));
      if (isFinite(surfaceStrongAlpha) && surfaceStrongAlpha > 0 && surfaceStrongAlpha <= 1) {
        setRootCssVar("--sb-surface-strong-alpha", String(surfaceStrongAlpha));
      }

      var shadowSoftness = Number(styleTokens.shadowSoftness);
      if (!isFinite(shadowSoftness) || shadowSoftness <= 0) shadowSoftness = 0.65;
      shadowSoftness = Math.max(0.25, Math.min(1.2, shadowSoftness));
      var smA = 0.08 * shadowSoftness;
      var mdA = 0.12 * shadowSoftness;
      var lgA = 0.16 * shadowSoftness;
      setRootCssVar("--sb-shadow-sm", "0 10px 24px rgba(0, 0, 0, " + smA.toFixed(3) + ")");
      setRootCssVar("--sb-shadow-md", "0 16px 38px rgba(0, 0, 0, " + mdA.toFixed(3) + ")");
      setRootCssVar("--sb-shadow-lg", "0 24px 64px rgba(0, 0, 0, " + lgA.toFixed(3) + ")");
    }

    // MRT + UI affordance gradients: tokenized and runtime-generated (no CSS hardcoding).
    // Keep glass minimal: do not force MRT gradients unless explicitly desired.
    if (s !== UI_STYLE_GLASS) {
      var ui = cachedAssetsTokens && cachedAssetsTokens.ui ? cachedAssetsTokens.ui : null;
      var styleCfg = ui && ui.style ? ui.style : null;
      var mrtOrder = styleCfg && Array.isArray(styleCfg.mrtUiGradientOrder) ? styleCfg.mrtUiGradientOrder : null;
      var diceOrder = styleCfg && Array.isArray(styleCfg.ctaDiceGradientOrder) ? styleCfg.ctaDiceGradientOrder : null;
      var superagentOrder =
        styleCfg && Array.isArray(styleCfg.ctaSuperagentGradientOrder) ? styleCfg.ctaSuperagentGradientOrder : null;

      // Accent bar (URA chrome): vertical MRT gradient.
      var accentBar = buildLinearGradient(180, mrtOrder, mrtLines, null);
      if (accentBar) setRootCssVar("--sb-accent-bar", accentBar);

      // Chips (watermark / quick-play): semi-transparent MRT gradient.
      var chipAlpha = Number(styleTokens.chipBgAlpha);
      if (!isFinite(chipAlpha)) chipAlpha = 0.22;
      chipAlpha = Math.max(0, Math.min(0.9, chipAlpha));
      var chipBg = buildLinearGradient(135, mrtOrder, mrtLines, chipAlpha);
      if (chipBg) setRootCssVar("--sb-chip-bg", chipBg);
      var chipHover = buildLinearGradient(135, mrtOrder, mrtLines, Math.min(0.7, chipAlpha + 0.06));
      if (chipHover) setRootCssVar("--sb-chip-bg-hover", chipHover);

      // CTAs: full-color MRT gradients (explicit system cue).
      var diceBg = buildLinearGradient(135, diceOrder, mrtLines, null);
      if (diceBg) setRootCssVar("--sb-cta-dice-bg", diceBg);
      var superBg = buildLinearGradient(135, superagentOrder, mrtLines, null);
      if (superBg) setRootCssVar("--sb-cta-superagent-bg", superBg);
    }

    // Atlas/masterplan grid (colors + opacities): fully token-driven.
    if (atlasGrid && atlasGrid.enabled !== false) {
      var minorColorHex = String(atlasGrid.minorColorHex || "").trim();
      var majorColorHex = String(atlasGrid.majorColorHex || "").trim();
      var minorRgb = hexToRgbTriplet(minorColorHex);
      var majorRgb = hexToRgbTriplet(majorColorHex);
      var minorOpacity = Number(atlasGrid.minorOpacity);
      var majorOpacity = Number(atlasGrid.majorOpacity);
      var spacingVoxels = Number(atlasGrid.spacingVoxels);
      var majorEvery = Number(atlasGrid.majorEvery);
      var minorLineWidthPx = Number(atlasGrid.minorLineWidthPx);
      var majorLineWidthPx = Number(atlasGrid.majorLineWidthPx);
      if (minorRgb) setRootCssVar("--sb-atlas-grid-minor-rgb", minorRgb);
      if (majorRgb) setRootCssVar("--sb-atlas-grid-major-rgb", majorRgb);
      if (isFinite(minorOpacity) && minorOpacity >= 0 && minorOpacity <= 1) {
        setRootCssVar("--sb-atlas-grid-minor-alpha", String(minorOpacity));
        // Blend uses a softer version of atlas minor alpha by default.
        setRootCssVar("--sb-blend-grid-minor-alpha", String(Math.max(0, Math.min(1, minorOpacity * 0.5))));
      }
      if (isFinite(majorOpacity) && majorOpacity >= 0 && majorOpacity <= 1) {
        setRootCssVar("--sb-atlas-grid-major-alpha", String(majorOpacity));
      }
      if (minorRgb) setRootCssVar("--sb-blend-grid-minor-rgb", minorRgb);

      // URA blueprint line weights.
      if (isFinite(minorLineWidthPx) && minorLineWidthPx > 0 && minorLineWidthPx <= 6) {
        setRootCssVar("--sb-atlas-grid-minor-line-px", String(minorLineWidthPx) + "px");
        // Blend: keep lines slightly thinner than atlas.
        setRootCssVar("--sb-blend-grid-minor-line-px", String(Math.max(1, minorLineWidthPx - 0.25)) + "px");
      }
      if (isFinite(majorLineWidthPx) && majorLineWidthPx > 0 && majorLineWidthPx <= 10) {
        setRootCssVar("--sb-atlas-grid-major-line-px", String(majorLineWidthPx) + "px");
      }

      // Grid spacing: runtime-driven from atlas.grid spacingVoxels + majorEvery.
      // Use a stable voxel→px mapping for CSS-only grid overlays (keeps render cost constant).
      // NOTE: major spacing is derived as (majorEvery-1) * minor spacing to match existing look.
      if (!isFinite(spacingVoxels) || spacingVoxels <= 0) spacingVoxels = 12;
      if (!isFinite(majorEvery) || majorEvery <= 1) majorEvery = 5;
      var voxelToPx = 2; // 12 voxels -> 24px (matches prior default)
      var minorPx = Math.round(spacingVoxels * voxelToPx);
      minorPx = Math.max(8, Math.min(96, minorPx));
      var majorMultiplier = Math.max(1, Math.round(majorEvery) - 1);
      var majorPx = Math.max(minorPx * majorMultiplier, minorPx);
      majorPx = Math.max(24, Math.min(320, majorPx));
      setRootCssVar("--sb-atlas-grid-minor-px", String(minorPx) + "px");
      setRootCssVar("--sb-atlas-grid-major-px", String(majorPx) + "px");

      // Blend grid spacing: keep a slightly wider “softer” grid than atlas.
      var blendMinorPx = Math.round(minorPx * (28 / 24));
      blendMinorPx = Math.max(12, Math.min(128, blendMinorPx));
      setRootCssVar("--sb-blend-grid-minor-px", String(blendMinorPx) + "px");
    }

    // Marina Bay glass skyline tint colors: token-driven.
    // (CSS consumes --sb-skyline-*-rgb; alphas are style tokens.)
    var marina = atlas && atlas.marinaBayGlass ? atlas.marinaBayGlass : null;
    if (marina && typeof marina === "object") {
      var skylineCyanHex = String(marina.skylineCyanHex || marina.skylineTintHex || "").trim();
      var skylineVioletHex = String(marina.skylineVioletHex || marina.fogTintHex || "").trim();
      var skylineWarmHex = String(marina.skylineWarmHex || marina.edgeGlowHex || "").trim();

      var skylineCyanRgb = hexToRgbTriplet(skylineCyanHex);
      var skylineVioletRgb = hexToRgbTriplet(skylineVioletHex);
      var skylineWarmRgb = hexToRgbTriplet(skylineWarmHex);
      if (skylineCyanRgb) setRootCssVar("--sb-skyline-cyan-rgb", skylineCyanRgb);
      if (skylineVioletRgb) setRootCssVar("--sb-skyline-violet-rgb", skylineVioletRgb);
      if (skylineWarmRgb) setRootCssVar("--sb-skyline-warm-rgb", skylineWarmRgb);
    }

    if (s === UI_STYLE_ATLAS) {
      // Grid spacing is now sourced from atlas.grid spacingVoxels/majorEvery when available.
      // Only fall back to style tokens if atlas.grid is missing/disabled.
      if (!atlasGrid || atlasGrid.enabled === false) {
        var minorPxToken = Number(styleTokens.gridMinorPx);
        var majorPxToken = Number(styleTokens.gridMajorPx);
        if (isFinite(minorPxToken) && minorPxToken >= 8 && minorPxToken <= 96) {
          setRootCssVar("--sb-atlas-grid-minor-px", minorPxToken + "px");
        }
        if (isFinite(majorPxToken) && majorPxToken >= 24 && majorPxToken <= 320) {
          setRootCssVar("--sb-atlas-grid-major-px", majorPxToken + "px");
        }
      }

      var skyline = Number(styleTokens.skylineTintAlpha);
      if (isFinite(skyline) && skyline >= 0 && skyline <= 1) {
        setRootCssVar("--sb-atlas-skyline-cyan-alpha", String(skyline));
        setRootCssVar("--sb-atlas-skyline-violet-alpha", String(Math.max(0, skyline - 0.04)));
        setRootCssVar("--sb-atlas-skyline-warm-alpha", String(Math.max(0, skyline - 0.08)));
      }
    }

    if (s === UI_STYLE_BLEND) {
      var skylineBlend = Number(styleTokens.skylineTintAlpha);
      if (isFinite(skylineBlend) && skylineBlend >= 0 && skylineBlend <= 1) {
        setRootCssVar("--sb-blend-skyline-cyan-alpha", String(skylineBlend));
      }
    }
  }

  function buildAssetsUrlCandidates() {
    var base = safe(function () {
      return String(document && document.baseURI ? document.baseURI : "");
    }, "");
    var assetsVersion = safe(function () {
      return (
        cachedAssetsTokens &&
        cachedAssetsTokens.ui &&
        cachedAssetsTokens.ui.style &&
        String(cachedAssetsTokens.ui.style.assetsVersion || "").trim()
      );
    }, "");
    var versioned = assetsVersion ? "boards/singabldr.assets.v2.json?v=" + encodeURIComponent(assetsVersion) : null;
    var rel = [versioned, "boards/singabldr.assets.v2.json", "singabldr.assets.json"].filter(Boolean);
    var out = [];
    for (var i = 0; i < rel.length; i++) {
      try {
        if (base) out.push(new URL(rel[i], base).toString());
      } catch {}
      out.push(rel[i]);
    }
    var seen = {};
    var unique = [];
    for (var j = 0; j < out.length; j++) {
      var u = String(out[j] || "");
      if (!u || seen[u]) continue;
      seen[u] = 1;
      unique.push(u);
    }
    return unique;
  }

  function loadAssetsTokensOnce() {
    if (cachedAssetsTokensPromise) return cachedAssetsTokensPromise;
    cachedAssetsTokensPromise = new Promise(function (resolve) {
      var urls = buildAssetsUrlCandidates();
      var idx = 0;

      function tryNext() {
        if (idx >= urls.length) return resolve(null);
        var url = urls[idx];
        idx += 1;
        safe(function () {
          fetch(url, { cache: "force-cache" })
            .then(function (r) {
              if (!r || !r.ok) throw new Error("bad response");
              return r.json();
            })
            .then(function (json) {
              resolve(json || null);
            })
            .catch(function () {
              tryNext();
            });
        });
      }

      tryNext();
    }).then(function (json) {
      cachedAssetsTokens = json || null;
      // Re-apply with JSON-driven storage key + runtime token consumption.
      applyUiStyleToDom(readUiStyle());
      refreshMrtLegendFromJson();
      // Cache a minimal token subset to localStorage so boot-ui-preload.js can apply
      // the same CSS vars before first paint (prevents "visual mutation" flashes).
      safe(function () {
        if (!cachedAssetsTokens) return;
        var payload = {
          version: cachedAssetsTokens.version || "",
          palette: cachedAssetsTokens.palette || null,
          atlas: cachedAssetsTokens.atlas || null,
          ui: cachedAssetsTokens.ui || null,
        };
        localStorage.setItem("singabldr.ui.tokens.cache.v1", JSON.stringify(payload));
      });
      return cachedAssetsTokens;
    });
    return cachedAssetsTokensPromise;
  }

  function renderMrtLegend(legendEl, legendOrder, mrtLines) {
    if (!legendEl) return;
    var order = Array.isArray(legendOrder) ? legendOrder : [];
    var lines = mrtLines && typeof mrtLines === "object" ? mrtLines : null;
    if (!lines) return;
    safe(function () {
      while (legendEl.firstChild) legendEl.removeChild(legendEl.firstChild);
      for (var i = 0; i < order.length; i++) {
        var code = String(order[i] || "").trim().toUpperCase();
        if (!code) continue;
        var color = String(lines[code] || "").trim();
        if (!color) continue;
        var dot = document.createElement("span");
        dot.title = code;
        dot.textContent = code;
        dot.style.display = "inline-flex";
        dot.style.alignItems = "center";
        dot.style.justifyContent = "center";
        dot.style.height = "16px";
        dot.style.minWidth = "22px";
        dot.style.padding = "0 6px";
        dot.style.borderRadius = "999px";
        dot.style.border = "1px solid rgba(45, 52, 54, 0.2)";
        dot.style.background = color;
        dot.style.color = "#ffffff";
        dot.style.fontSize = "9px";
        dot.style.fontWeight = "900";
        dot.style.letterSpacing = "0.2px";
        legendEl.appendChild(dot);
      }
    });
  }

  function refreshMrtLegendFromJson() {
    var legendEl = safe(function () {
      return document.getElementById("sb-mrt-legend");
    }, null);
    if (!legendEl) return;
    if (!cachedAssetsTokens) return;
    var palette = cachedAssetsTokens && cachedAssetsTokens.palette ? cachedAssetsTokens.palette : null;
    var mrtLines = palette && palette.mrtLines ? palette.mrtLines : null;
    var ui = cachedAssetsTokens && cachedAssetsTokens.ui ? cachedAssetsTokens.ui : null;
    var order =
      ui && ui.style && Array.isArray(ui.style.mrtLegendOrder) ? ui.style.mrtLegendOrder : ["NS", "EW", "NE", "CC", "DT", "TE"];
    renderMrtLegend(legendEl, order, mrtLines);
  }

  function ensureUiStyleSelector(panel) {
    if (!panel) return false;
    var existing = safe(function () {
      return panel.querySelector("#sb-ui-style-select");
    }, null);
    if (existing) return true;

    var row = document.createElement("div");
    row.id = "sb-ui-style-row";
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.justifyContent = "space-between";
    row.style.gap = "10px";
    row.style.padding = "10px 12px";
    row.style.margin = "10px 12px";
    row.style.border = "2px solid rgba(45, 52, 54, 0.18)";
    row.style.borderRadius = "14px";
    row.style.background = "rgba(255, 255, 255, 0.7)";
    row.style.backdropFilter = "blur(10px) saturate(1.1)";

    var label = document.createElement("div");
    label.textContent = "Mode";
    label.style.fontFamily = "\"Nunito\", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif";
    label.style.fontWeight = "900";
    label.style.fontSize = "12px";
    label.style.letterSpacing = "0.2px";
    label.style.color = "rgba(45, 52, 54, 0.9)";

    // MRT legend (explicit system cue; Singapore vibe).
    // Keep it tiny and purely decorative (no interactivity).
    var legend = document.createElement("div");
    legend.id = "sb-mrt-legend";
    legend.style.display = "flex";
    legend.style.alignItems = "center";
    legend.style.gap = "6px";
    legend.style.marginTop = "4px";
    legend.style.opacity = "0.92";
    // Fallback legend (if JSON tokens are not available yet).
    renderMrtLegend(
      legend,
      ["NS", "EW", "NE", "CC", "DT", "TE", "CR", "JE"],
      {
        NS: "#d42e12",
        EW: "#009645",
        NE: "#9900aa",
        CC: "#fa9e0d",
        DT: "#005ec4",
        TE: "#9d5b25",
        CR: "#00a9b7",
        JE: "#0099a8",
      },
    );

    var labelWrap = document.createElement("div");
    labelWrap.style.display = "flex";
    labelWrap.style.flexDirection = "column";
    labelWrap.appendChild(label);
    labelWrap.appendChild(legend);

    var select = document.createElement("select");
    select.id = "sb-ui-style-select";
    select.style.minHeight = "40px";
    select.style.borderRadius = "12px";
    select.style.border = "2px solid rgba(45, 52, 54, 0.18)";
    select.style.background = "rgba(255, 255, 255, 0.92)";
    select.style.padding = "6px 10px";
    select.style.fontFamily = "\"Nunito\", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif";
    select.style.fontWeight = "900";
    select.style.fontSize = "12px";

    var variants = safe(function () {
      var ui = cachedAssetsTokens && cachedAssetsTokens.ui ? cachedAssetsTokens.ui : null;
      var styleCfg = ui && ui.style ? ui.style : null;
      return styleCfg && Array.isArray(styleCfg.variants) ? styleCfg.variants : null;
    }, null);

    var options = [];
    var pushOpt = function (value, labelText) {
      options.push({ value: value, label: labelText });
    };

    var allowed = Array.isArray(variants) ? variants : [UI_STYLE_ATLAS, UI_STYLE_ARCADE, UI_STYLE_GLASS];
    for (var vi = 0; vi < allowed.length; vi++) {
      var v = normalizeUiStyle(allowed[vi]);
      if (v === UI_STYLE_BLEND) continue; // keep hidden unless explicitly enabled in tokens
      if (v === UI_STYLE_ATLAS) pushOpt(v, "Atlas (Civic)");
      else if (v === UI_STYLE_ARCADE) pushOpt(v, "Arcade (Playful)");
      else if (v === UI_STYLE_GLASS) pushOpt(v, "Glass (Minimal)");
    }
    for (var i = 0; i < options.length; i++) {
      var o = document.createElement("option");
      o.value = options[i].value;
      o.textContent = options[i].label;
      select.appendChild(o);
    }

    select.value = readUiStyle();
    // Ensure current value exists in options; otherwise fall back to the first option.
    if (select.selectedIndex < 0 && select.options && select.options.length) {
      select.selectedIndex = 0;
    }
    select.addEventListener(
      "change",
      function () {
        var next = normalizeUiStyle(select.value);
        if (select.value !== next) select.value = next;
        persistSet(getUiStyleStorageKey(), next, next);
        // Apply immediately (no refresh).
        applyUiStyleToDom(next);
      },
      { passive: true },
    );

    row.appendChild(labelWrap);
    row.appendChild(select);

    // Place near the top, but after the Settings header if present.
    var header = safe(function () {
      return panel.querySelector("#settings-header-panel");
    }, null);
    if (header && header.parentNode === panel) {
      try {
        panel.insertBefore(row, header.nextSibling);
      } catch {
        panel.insertBefore(row, panel.firstChild || null);
      }
    } else {
      panel.insertBefore(row, panel.firstChild || null);
    }
    return true;
  }

  function installUiStyleSettingsIntegration() {
    // Apply immediately even if Settings never opens.
    applyUiStyleToDom(readUiStyle());
    // Runtime consumes JSON UI tokens (cached): apply CSS vars + update MRT legend when available.
    loadAssetsTokensOnce();

    var installed = false;
    var tryInstall = function () {
      if (installed) return true;
      var panel = safe(function () {
        return document.getElementById("settings-panel");
      }, null);
      if (!panel) return false;
      installed = ensureUiStyleSelector(panel);
      return installed;
    };

    if (tryInstall()) return;

    // Observe until Settings panel appears, then disconnect (no global churn).
    safe(function () {
      var root = document.body || document.documentElement;
      if (!root) return;
      var obs = new MutationObserver(function () {
        throttle("sb:ui-style:install", function () {
          if (!tryInstall()) return;
          try {
            obs.disconnect();
          } catch {}
        }, 120);
      });
      obs.observe(root, { childList: true, subtree: true });
    });
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

  function throttle(key, fn, waitMs) {
    try {
      if (typeof window.__SINGABLDR_THROTTLE === "function") {
        window.__SINGABLDR_THROTTLE(String(key || "default"), fn, Number(waitMs || 0));
        return;
      }
    } catch {}
    coalesce(key, fn);
  }

  function shouldPreferTouch() {
    // iOS Safari/Chrome: Touch Events are the most reliable path for drag (WebKit).
    return safe(function () {
      return (
        typeof window !== "undefined" &&
        typeof window.matchMedia === "function" &&
        window.matchMedia("(hover: none) and (pointer: coarse)").matches
      );
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
        ].join(", "),
      );
    }, false);
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

  function rectToPlain(rect) {
    return rect ? { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom } : null;
  }

  function isPointInRect(x, y, r) {
    return !!r && x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
  }

  function findBubbleElementFromPoint(x, y, getBubbles) {
    var nodes = getBubbles();
    for (var i = nodes.length - 1; i >= 0; i--) {
      var el = nodes[i];
      if (!el) continue;
      var rect = el.getBoundingClientRect();
      if (!isPointInRect(x, y, rect)) continue;
      return { el: el, rect: rect };
    }
    return null;
  }

  function getDefaultBubbles() {
    var layer = safe(function () {
      return document.getElementById("mobility-citizen-layer");
    }, null);
    if (layer) return Array.from(layer.querySelectorAll(".citizen-bubble"));
    var host = safe(function () {
      return document.getElementById("chat-bubbles-container");
    }, null);
    if (host) return Array.from(host.querySelectorAll(".citizen-bubble"));
    return Array.from(document.querySelectorAll(".citizen-bubble"));
  }

  function hashText(text) {
    var s = String(text || "");
    var hash = 0;
    for (var i = 0; i < s.length; i++) hash = (hash * 31 + s.charCodeAt(i)) | 0;
    return Math.abs(hash).toString(36);
  }

  function getDefaultBubbleId(el) {
    if (!el) return "";
    var existing = safe(function () {
      return String(el.dataset.mobilityCitizenId || el.dataset.sbBubbleId || "");
    }, "");
    if (existing) return existing;
    var raw = safe(function () {
      return String(el.innerText || el.textContent || "");
    }, "");
    var id = "bubble-" + hashText(raw.slice(0, 120));
    safe(function () {
      el.dataset.sbBubbleId = id;
    });
    return id;
  }

  var toolbar = {
    el: null,
    pin: null,
    add: null,
    close: null,
    visible: false,
    lastId: "",
    lastRect: null,
    followRaf: 0,
  };

  function ensureGlobalBubbleToolbar() {
    if (toolbar.el) return toolbar.el;
    var el = safe(function () {
      return document.getElementById("sb-bubble-toolbar");
    }, null);
    if (el) {
      toolbar.el = el;
      return el;
    }

    el = document.createElement("div");
    el.id = "sb-bubble-toolbar";
    el.style.position = "fixed";
    el.style.left = "0";
    el.style.top = "0";
    el.style.zIndex = "2600";
    el.style.display = "none";
    el.style.gap = "6px";
    // Minimal UI: icons only (no background / border).
    el.style.padding = "0";
    el.style.borderRadius = "0";
    el.style.border = "0";
    el.style.background = "transparent";
    el.style.backdropFilter = "none";
    el.style.boxShadow = "none";
    el.style.pointerEvents = "auto";
    el.style.userSelect = "none";
    el.style.webkitUserSelect = "none";
    el.style.touchAction = "manipulation";
    el.style.alignItems = "center";
    el.style.justifyContent = "center";
    el.style.flexDirection = "row";
    el.style.flexWrap = "nowrap";
    el.style.display = "none";
    el.style.transform = "translate3d(0,0,0)";
    el.style.willChange = "transform, left, top";
    el.style.fontFamily = "\"Nunito\", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif";

    var mk = function (label, action, aria) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = label;
      b.dataset.action = action;
      b.setAttribute("aria-label", aria);
      // Slightly larger tap targets without any visible chrome.
      b.style.width = "22px";
      b.style.height = "22px";
      b.style.display = "inline-flex";
      b.style.alignItems = "center";
      b.style.justifyContent = "center";
      b.style.border = "0";
      b.style.borderRadius = "0";
      b.style.background = "transparent";
      b.style.color = "inherit";
      b.style.fontSize = "14px";
      b.style.fontWeight = "900";
      b.style.lineHeight = "1";
      b.style.cursor = "pointer";
      b.style.padding = "0";
      b.style.margin = "0";
      return b;
    };

    toolbar.pin = mk("📍", "pin", "Pin bubble");
    toolbar.add = mk("➕", "add", "Add bubble prompt");
    toolbar.close = mk("✖", "close", "Close bubble");

    el.appendChild(toolbar.pin);
    el.appendChild(toolbar.add);
    el.appendChild(toolbar.close);

    document.body.appendChild(el);
    toolbar.el = el;
    return el;
  }

  function hideToolbar() {
    if (!toolbar.el) return;
    toolbar.visible = false;
    toolbar.lastId = "";
    toolbar.lastRect = null;
    if (toolbar.followRaf) {
      try {
        cancelAnimationFrame(toolbar.followRaf);
      } catch {}
      toolbar.followRaf = 0;
    }
    safe(function () {
      toolbar.el.style.display = "none";
    });
  }

  function positionToolbarNearBubbleRect(bubbleRect) {
    if (!toolbar.el || !bubbleRect) return;
    var vpW = Math.max(320, Number(window.innerWidth || 0));
    var vpH = Math.max(480, Number(window.innerHeight || 0));

    // Measure after it's visible.
    var width = Math.max(72, Number(toolbar.el.offsetWidth || 0));
    var height = Math.max(28, Number(toolbar.el.offsetHeight || 0));
    var margin = 8;
    var rightIndentPx = 14;

    // Prefer outside IMMEDIATELY-ABOVE bubble (perpendicular / centered; NOT diagonal).
    var centerX = bubbleRect.left + (bubbleRect.right - bubbleRect.left) * 0.5;
    var left = centerX - width * 0.5 + rightIndentPx;
    var top = bubbleRect.top - height - margin;

    // If offscreen above, drop to immediately-below bubble (still centered).
    if (top < margin) {
      top = bubbleRect.bottom + margin;
    }

    // Clamp to viewport.
    left = Math.max(margin, Math.min(left, vpW - width - margin));
    top = Math.max(margin, Math.min(top, vpH - height - margin));

    safe(function () {
      toolbar.el.style.left = Math.round(left) + "px";
      toolbar.el.style.top = Math.round(top) + "px";
    });
  }

  function hasRectMeaningfullyChanged(rect) {
    // Use a subpixel threshold so the toolbar tracks transforms/animations smoothly
    // (rounding can hide small but visible motion).
    if (!rect) return true;
    var prev = toolbar.lastRect;
    if (!prev) return true;
    var eps = 0.25;
    return (
      Math.abs(rect.left - prev.left) > eps ||
      Math.abs(rect.top - prev.top) > eps ||
      Math.abs(rect.right - prev.right) > eps ||
      Math.abs(rect.bottom - prev.bottom) > eps
    );
  }

  function snapshotRect(rect) {
    toolbar.lastRect = rect
      ? { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom }
      : null;
  }

  function showToolbarForBubble(el, id) {
    var bar = ensureGlobalBubbleToolbar();
    if (!bar || !el) return;
    var rect = el.getBoundingClientRect();
    if (toolbar.visible && toolbar.lastId === id && !hasRectMeaningfullyChanged(rect)) {
      // Still ensure the follow loop is running.
      startToolbarFollowLoop();
      return;
    }
    toolbar.visible = true;
    toolbar.lastId = String(id || "");
    snapshotRect(rect);
    safe(function () {
      bar.style.display = "flex";
    });
    // Position after display so offsetWidth/height are correct.
    positionToolbarNearBubbleRect(rect);
    startToolbarFollowLoop();
  }

  function startToolbarFollowLoop() {
    if (!toolbar.el) return;
    if (toolbar.followRaf) return;
    toolbar.followRaf = requestAnimationFrame(function tick() {
      toolbar.followRaf = 0;
      if (!toolbar.visible) return;
      if (!state.activeEl || !state.activeId) return;
      // Reposition on every animation frame, but only apply style writes when the bubble
      // rect changes beyond a small threshold (smooth tracking without churn).
      var rect = safe(function () {
        return state.activeEl ? state.activeEl.getBoundingClientRect() : null;
      }, null);
      if (!rect) return hideToolbar();
      if (hasRectMeaningfullyChanged(rect)) {
        snapshotRect(rect);
        positionToolbarNearBubbleRect(rect);
      }
      toolbar.followRaf = requestAnimationFrame(tick);
    });
  }

  function ensureBubbleUi(el) {
    if (!el) return;
    if (safe(function () { return el.dataset.sbUiReady === "1"; }, false)) return;
    safe(function () {
      el.dataset.sbUiReady = "1";
    });
  }

  function getActionRects(el, fallbackRect) {
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
    var rect = fallbackRect;
    if (!rect) return { pin: null, add: null, close: null };
    var pad = 4;
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

  /** @type {{name:string,isEnabled:()=>boolean,getBubbles:()=>HTMLElement[],getId:(el:HTMLElement)=>string,onPinToggle?:(id:string,el:HTMLElement)=>void,onAdd?:(id:string,el:HTMLElement)=>void,onClose?:(id:string,el:HTMLElement)=>void,onDragStart?:(id:string,el:HTMLElement)=>void,onDragTo?:(id:string,screenX:number,screenY:number,el:HTMLElement)=>void,onDragEnd?:(id:string,el:HTMLElement)=>void}[]} */
  var adapters = [];

  function pickAdapter() {
    // Prefer the most recently registered enabled adapter.
    for (var i = adapters.length - 1; i >= 0; i--) {
      var a = adapters[i];
      if (!a) continue;
      if (safe(function () { return a.isEnabled(); }, false)) return a;
    }
    return null;
  }

  function registerAdapter(name, adapter) {
    if (!adapter || typeof adapter.isEnabled !== "function") return;
    adapters.push({
      name: String(name || "adapter"),
      isEnabled: adapter.isEnabled,
      getBubbles: typeof adapter.getBubbles === "function" ? adapter.getBubbles : getDefaultBubbles,
      getId: typeof adapter.getId === "function" ? adapter.getId : getDefaultBubbleId,
      onPinToggle: adapter.onPinToggle,
      onAdd: adapter.onAdd,
      onClose: adapter.onClose,
      onDragStart: adapter.onDragStart,
      onDragTo: adapter.onDragTo,
      onDragEnd: adapter.onDragEnd,
    });
  }

  safe(function () {
    window.__SINGABLDR_BUBBLES_UI = window.__SINGABLDR_BUBBLES_UI || {};
    window.__SINGABLDR_BUBBLES_UI.registerAdapter = registerAdapter;
  });

  // Default adapter (works even without Mobility).
  registerAdapter("default", {
    isEnabled: function () {
      return true;
    },
    getBubbles: getDefaultBubbles,
    getId: getDefaultBubbleId,
    onDragTo: function (_id, screenX, screenY, el) {
      if (!el) return;
      var rect = el.getBoundingClientRect();
      var left = Number(screenX || 0) - rect.width * 0.5;
      var top = Number(screenY || 0) - rect.height;
      safe(function () {
        el.style.position = "fixed";
        el.style.left = Math.round(left) + "px";
        el.style.top = Math.round(top) + "px";
        el.style.transform = "translate3d(0,0,0)";
        el.style.willChange = "left, top";
        el.style.zIndex = "2100";
      });
    },
    onClose: function (_id, el) {
      safe(function () {
        el.style.display = "none";
      });
    },
  });

  var state = {
    activeId: "",
    activeEl: null,
    activeTimer: 0,
    dragging: false,
    dragMoved: false,
    dragId: "",
    dragEl: null,
    dragPointerKey: -1,
    dragStartX: 0,
    dragStartY: 0,
    dragOffsetX: 0,
    dragOffsetY: 0,
    // If a drag starts from the global toolbar, we defer the action until pointerup.
    // This allows the toolbar icons (📍 / ➕ / ✖) to also act as a drag handle.
    pendingToolbarAction: "",
  };

  function clearActive() {
    if (state.activeTimer) {
      try {
        clearTimeout(state.activeTimer);
      } catch {}
    }
    state.activeTimer = 0;
    state.activeId = "";
    if (state.activeEl) {
      safe(function () {
        delete state.activeEl.dataset.sbActive;
      });
    }
    state.activeEl = null;
    hideToolbar();
  }

  function scheduleClearActive() {
    if (!shouldPreferTouch()) return;
    if (state.activeTimer) {
      try {
        clearTimeout(state.activeTimer);
      } catch {}
    }
    state.activeTimer = setTimeout(function () {
      clearActive();
    }, 2600);
  }

  function setActive(id, el) {
    if (!id || !el) return;
    if (state.activeId === id) return scheduleClearActive();
    if (state.activeEl) {
      safe(function () {
        delete state.activeEl.dataset.sbActive;
      });
    }
    state.activeId = id;
    state.activeEl = el;
    safe(function () {
      el.dataset.sbActive = "1";
    });
    showToolbarForBubble(el, id);
    scheduleClearActive();
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
    return 1000000 + touchId;
  }

  function stopEventHard(ev) {
    try {
      ev.preventDefault?.();
      ev.stopPropagation?.();
      ev.stopImmediatePropagation?.();
    } catch {}
  }

  function onDown(ev) {
    if (!ev) return;
    if (isUiControlTarget(ev.target)) return;
    var adapter = pickAdapter() || adapters[0];
    // Toolbar interaction:
    // - Tap: run action on pointerup (if no meaningful drag occurred).
    // - Drag: move the active bubble (icons act as a drag handle).
    if (toolbar.el && toolbar.visible) {
      var inToolbar = safe(function () {
        return !!(ev.target && toolbar.el.contains(ev.target));
      }, false);
      if (inToolbar && state.activeEl && state.activeId) {
        var action = safe(function () {
          var btn = ev.target && typeof ev.target.closest === "function" ? ev.target.closest("button[data-action]") : null;
          return btn ? String(btn.dataset.action || "") : "";
        }, "");
        state.pendingToolbarAction = action;
        // Start a drag anchored to the currently active bubble.
        var ptTb = getClientPoint(ev);
        var rectTb = safe(function () {
          return state.activeEl ? state.activeEl.getBoundingClientRect() : null;
        }, null);
        if (rectTb) {
          stopEventHard(ev);
          state.dragging = true;
          state.dragMoved = false;
          state.dragId = state.activeId;
          state.dragEl = state.activeEl;
          state.dragPointerKey = getPointerKey(ev);
          state.dragStartX = ptTb.x;
          state.dragStartY = ptTb.y;
          state.dragOffsetX = rectTb.left + rectTb.width * 0.5 - ptTb.x;
          state.dragOffsetY = rectTb.bottom - ptTb.y;
          if (adapter.onDragStart) adapter.onDragStart(state.dragId, state.dragEl);
          return;
        }
      }
    }

    var pt = getClientPoint(ev);
    var hit = findBubbleElementFromPoint(pt.x, pt.y, adapter.getBubbles);
    if (!hit) {
      if (state.activeId) clearActive();
      return;
    }

    ensureBubbleUi(hit.el);
    var id = adapter.getId(hit.el);
    setActive(id, hit.el);

    // Start drag.
    stopEventHard(ev);
    state.dragging = true;
    state.dragMoved = false;
    state.pendingToolbarAction = "";
    state.dragId = id;
    state.dragEl = hit.el;
    state.dragPointerKey = getPointerKey(ev);
    state.dragStartX = pt.x;
    state.dragStartY = pt.y;
    state.dragOffsetX = hit.rect.left + hit.rect.width * 0.5 - pt.x;
    state.dragOffsetY = hit.rect.bottom - pt.y;
    if (adapter.onDragStart) adapter.onDragStart(state.dragId, state.dragEl);
  }

  function onMove(ev) {
    if (!state.dragging || !state.dragEl) return;
    if (getPointerKey(ev) !== state.dragPointerKey) return;
    var adapter = pickAdapter() || adapters[0];
    var pt = getClientPoint(ev);
    var dx = pt.x - state.dragStartX;
    var dy = pt.y - state.dragStartY;
    if (!state.dragMoved) {
      if (dx * dx + dy * dy < 36) return;
      state.dragMoved = true;
    }
    stopEventHard(ev);
    var screenX = pt.x + state.dragOffsetX;
    var screenY = pt.y + state.dragOffsetY;
    if (adapter.onDragTo) adapter.onDragTo(state.dragId, screenX, screenY, state.dragEl);
    // Keep toolbar anchored outside bubble while dragging.
    if (state.dragEl && state.dragId) throttle("sb:toolbar:drag", function () { showToolbarForBubble(state.dragEl, state.dragId); }, 16);
  }

  function onUp(ev) {
    if (!state.dragging) return;
    if (ev && getPointerKey(ev) !== state.dragPointerKey) return;
    var adapter = pickAdapter() || adapters[0];
    var action = String(state.pendingToolbarAction || "");
    var didMove = !!state.dragMoved;
    var isCancel = safe(function () {
      return !!(ev && typeof ev.type === "string" && ev.type.indexOf("cancel") >= 0);
    }, false);
    state.dragging = false;
    state.dragMoved = false;
    state.pendingToolbarAction = "";
    var dragId = state.dragId;
    var dragEl = state.dragEl;
    state.dragId = "";
    state.dragEl = null;
    state.dragPointerKey = -1;
    if (adapter.onDragEnd && dragEl && dragId) adapter.onDragEnd(dragId, dragEl);
    // If the pointerdown started from the toolbar and the user did not drag, treat it as a tap action.
    if (!isCancel && action && !didMove && state.activeEl && state.activeId) {
      stopEventHard(ev);
      if (action === "close") {
        if (adapter.onClose) adapter.onClose(state.activeId, state.activeEl);
        clearActive();
        return;
      }
      if (action === "pin") {
        if (adapter.onPinToggle) adapter.onPinToggle(state.activeId, state.activeEl);
        showToolbarForBubble(state.activeEl, state.activeId);
        scheduleClearActive();
        return;
      }
      if (action === "add") {
        if (adapter.onAdd) adapter.onAdd(state.activeId, state.activeEl);
        showToolbarForBubble(state.activeEl, state.activeId);
        scheduleClearActive();
        return;
      }
    }
    scheduleClearActive();
  }

  // ---------------------------------------------------------------------------
  // POI realism UI (mobile-first):
  // - Adds a semi-realistic thumbnail + small chips into #ui when the selected
  //   property matches a POI from singabldr.elements.json.
  // - Purely cosmetic; no game logic changes; coalesced updates.
  // ---------------------------------------------------------------------------
  var poiUiState = {
    installed: false,
    fetchPromise: null,
    indexByLabel: Object.create(null),
    indexById: Object.create(null),
    lastAppliedKey: "",
  };

  function normalizePoiText(raw) {
    var s = String(raw || "")
      .toLowerCase()
      .replace(/[\u2019']/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
    return s;
  }

  function getPoiRegistryUrls() {
    // Prefer publish repo stable v2 path; then fall back to legacy names.
    return [
      "./boards/singabldr.elements.v2.json",
      "./singabldr.elements.json",
      "./boards/singabldr.elements.json",
      "./singabldr.elements.v2.json",
    ];
  }

  function loadPoiRegistryOnce() {
    if (poiUiState.fetchPromise) return poiUiState.fetchPromise;
    poiUiState.fetchPromise = safe(function () {
      var urls = getPoiRegistryUrls();
      var attempt = function (i) {
        if (i >= urls.length) return Promise.resolve(null);
        return fetch(urls[i], { credentials: "same-origin" })
          .then(function (r) {
            if (!r || !r.ok) throw new Error("bad");
            return r.json();
          })
          .catch(function () {
            return attempt(i + 1);
          });
      };
      return attempt(0)
        .then(function (json) {
          try {
            var pois = json && typeof json === "object" ? json.points_of_interest : null;
            if (!pois || typeof pois !== "object") return null;
            var byLabel = Object.create(null);
            var byId = Object.create(null);
            var entries = Object.entries(pois);
            for (var i = 0; i < entries.length; i++) {
              var id = String(entries[i][0] || "").trim();
              var poi = entries[i][1];
              if (!id || !poi || typeof poi !== "object") continue;
              byId[id] = poi;
              var label = String(poi.label || "");
              var key = normalizePoiText(label || id);
              if (key) byLabel[key] = { id: id, poi: poi };
              // Also map id itself.
              var idKey = normalizePoiText(id);
              if (idKey) byLabel[idKey] = { id: id, poi: poi };
            }
            poiUiState.indexByLabel = byLabel;
            poiUiState.indexById = byId;
            return { byLabel: byLabel, byId: byId };
          } catch {
            return null;
          }
        })
        .catch(function () {
          return null;
        });
    }, Promise.resolve(null));
    return poiUiState.fetchPromise;
  }

  function ensurePoiUiDom(panel, anchorEl) {
    if (!panel) return null;
    var thumb = safe(function () {
      return panel.querySelector("img.sb-poi-thumb");
    }, null);
    if (!thumb) {
      thumb = document.createElement("img");
      thumb.className = "sb-poi-thumb";
      thumb.alt = "";
      thumb.loading = "lazy";
      thumb.decoding = "async";
      thumb.referrerPolicy = "no-referrer";
      thumb.style.display = "none";
      try {
        // Insert right after the property title for stable layout.
        if (anchorEl && anchorEl.parentNode === panel) {
          panel.insertBefore(thumb, anchorEl.nextSibling);
        } else {
          panel.insertBefore(thumb, panel.firstChild || null);
        }
      } catch {
        panel.appendChild(thumb);
      }
    }

    var chips = safe(function () {
      return panel.querySelector(".sb-poi-chips");
    }, null);
    if (!chips) {
      chips = document.createElement("div");
      chips.className = "sb-poi-chips";
      try {
        if (thumb && thumb.parentNode === panel) {
          panel.insertBefore(chips, thumb.nextSibling);
        } else {
          panel.insertBefore(chips, panel.firstChild || null);
        }
      } catch {
        panel.appendChild(chips);
      }
    }
    return { thumb: thumb, chips: chips };
  }

  function setChip(container, idx, label, dotColor) {
    if (!container) return;
    var chips = container.children || [];
    var el = chips[idx] || null;
    if (!el) {
      el = document.createElement("div");
      el.className = "sb-poi-chip";
      container.appendChild(el);
    }
    el.textContent = "";
    var dot = document.createElement("span");
    dot.className = "sb-poi-chip-dot";
    if (dotColor) dot.style.background = dotColor;
    el.appendChild(dot);
    var text = document.createElement("span");
    text.textContent = String(label || "").trim();
    el.appendChild(text);
  }

  function trimExtraChips(container, keep) {
    if (!container) return;
    var k = Math.max(0, Number(keep || 0));
    while (container.children && container.children.length > k) {
      try {
        container.removeChild(container.lastChild);
      } catch {
        break;
      }
    }
  }

  function applyPoiUiNow() {
    var panel = safe(function () {
      return document.getElementById("ui");
    }, null);
    if (!panel) return;
    var propName = safe(function () {
      var h = document.getElementById("prop-name");
      return h ? String(h.textContent || h.innerText || "") : "";
    }, "");
    var key = normalizePoiText(propName);
    if (!key) return;

    var match = poiUiState.indexByLabel[key] || null;
    if (!match) {
      // Reset if previously applied.
      if (poiUiState.lastAppliedKey) {
        poiUiState.lastAppliedKey = "";
        safe(function () {
          panel.classList.remove("sb-poi-active");
          panel.style.removeProperty("--sb-poi-accent");
          var t = panel.querySelector("img.sb-poi-thumb");
          if (t) t.style.display = "none";
          var c = panel.querySelector(".sb-poi-chips");
          if (c) c.textContent = "";
        });
      }
      return;
    }

    var poi = match.poi || null;
    if (!poi || typeof poi !== "object") return;
    var ui = poi.ui && typeof poi.ui === "object" ? poi.ui : null;
    var accent = ui && ui.accentHex ? String(ui.accentHex) : "";
    var thumbSrc = ui && ui.thumbSrc ? String(ui.thumbSrc) : "";
    var kind = String(poi.kind || "poi");
    var tags = Array.isArray(poi.tags) ? poi.tags : [];

    var signature =
      String(match.id || "") +
      "|" +
      String(propName || "") +
      "|" +
      accent +
      "|" +
      thumbSrc +
      "|" +
      kind +
      "|" +
      tags.slice(0, 3).join(",");
    if (signature === poiUiState.lastAppliedKey) return;
    poiUiState.lastAppliedKey = signature;

    var anchor = safe(function () {
      return document.getElementById("prop-name");
    }, null);
    var dom = ensurePoiUiDom(panel, anchor);
    if (!dom) return;

    safe(function () {
      panel.classList.add("sb-poi-active");
      if (accent) panel.style.setProperty("--sb-poi-accent", accent);
    });

    safe(function () {
      if (thumbSrc) {
        dom.thumb.src = thumbSrc;
        dom.thumb.style.display = "block";
      } else {
        dom.thumb.style.display = "none";
      }
    });

    safe(function () {
      dom.chips.textContent = "";
      setChip(dom.chips, 0, kind, accent || null);
      for (var i = 0; i < Math.min(2, tags.length); i++) {
        setChip(dom.chips, i + 1, String(tags[i] || ""), accent || null);
      }
      trimExtraChips(dom.chips, 1 + Math.min(2, tags.length));
    });
  }

  function installPoiUiEnhancer() {
    if (poiUiState.installed) return;
    poiUiState.installed = true;

    // Load registry lazily; render after load and on future updates.
    loadPoiRegistryOnce().then(function () {
      throttle("sb:poi-ui:apply:init", applyPoiUiNow, 0);
    });

    safe(function () {
      var target = document.body || document.documentElement;
      if (!target) return;
      var obs = new MutationObserver(function () {
        throttle("sb:poi-ui:apply", applyPoiUiNow, 80);
      });
      obs.observe(target, { childList: true, subtree: true, characterData: true });
    });
  }

  function boot() {
    installUiStyleSettingsIntegration();
    installPoiUiEnhancer();

    // Proactively ensure UI is present for existing bubbles (cheap; only adds actions once).
    throttle("sb:bubbles:ensureUi", function () {
      var adapter = pickAdapter() || adapters[0];
      var nodes = adapter.getBubbles();
      for (var i = 0; i < nodes.length; i++) ensureBubbleUi(nodes[i]);
    }, 200);

    var preferTouch = shouldPreferTouch();
    var supportsPointer = safe(function () {
      return typeof window !== "undefined" && "PointerEvent" in window;
    }, false);

    // Ensure the toolbar tracks the selected bubble even when external layout code
    // moves bubbles (relayout passes, viewport resize, pinch zoom, etc.).
    safe(function () {
      window.addEventListener(
        "resize",
        function () {
          if (state.activeEl && state.activeId) showToolbarForBubble(state.activeEl, state.activeId);
        },
        { passive: true },
      );
      window.addEventListener(
        "scroll",
        function () {
          if (state.activeEl && state.activeId) showToolbarForBubble(state.activeEl, state.activeId);
        },
        { passive: true, capture: true },
      );
      if (window.visualViewport) {
        window.visualViewport.addEventListener(
          "resize",
          function () {
            if (state.activeEl && state.activeId) showToolbarForBubble(state.activeEl, state.activeId);
          },
          { passive: true },
        );
        window.visualViewport.addEventListener(
          "scroll",
          function () {
            if (state.activeEl && state.activeId) showToolbarForBubble(state.activeEl, state.activeId);
          },
          { passive: true },
        );
      }
    });

    if (supportsPointer && !preferTouch) {
      window.addEventListener("pointerdown", onDown, { capture: true, passive: false });
      window.addEventListener("pointermove", onMove, { capture: true, passive: false });
      window.addEventListener("pointerup", onUp, { capture: true, passive: false });
      window.addEventListener("pointercancel", onUp, { capture: true, passive: false });
    } else {
      window.addEventListener("touchstart", onDown, { capture: true, passive: false });
      window.addEventListener("touchmove", onMove, { capture: true, passive: false });
      window.addEventListener("touchend", onUp, { capture: true, passive: false });
      window.addEventListener("touchcancel", onUp, { capture: true, passive: false });
      // Mouse fallback (desktop Safari quirks when PointerEvent is disabled).
      window.addEventListener("mousedown", onDown, { capture: true, passive: false });
      window.addEventListener("mousemove", onMove, { capture: true, passive: false });
      window.addEventListener("mouseup", onUp, { capture: true, passive: false });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
