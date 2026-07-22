import{l as dt}from"./mediaOverlayPool-CZt7uMRM.js";import{L as Ee,aq as st,au as Z,j2 as lt,bZ as ct,j3 as ut,bW as gt,bX as pt,bY as vt,bm as yt,bo as mt,bn as ft}from"./settings-mcp-docs-4HHdr88v.js";import{s as ht}from"./scaleExtent-tN_2tZAy.js";import{c2 as bt,aQ as xt}from"./index-DKKwpnfi.js";import{f as wt}from"./groupVisibility-7_qcxsx3.js";import{e as fe,a as kt}from"./overlaySizing2d-DsmGzgMW.js";import{c as St}from"./markdownPanelOverlayPool-DfDBrQR-.js";import{l as Me,H as Be}from"./svgSnapshot-UDt-OOST.js";import{b2 as It}from"./settings-grabmapsMcpApiDocs-Br3EoCPY.js";import{g as Et}from"./sceneDerivation-C3EqLnyu.js";import{d as Mt}from"./positioning-CfUJL6NT.js";const Bt=[`(function(){
    var root = document.getElementById('kg-root');
    var stage = document.getElementById('kg-stage');
    var webglCanvas = document.getElementById('kg-webgl');
    var svg = (document.querySelector('#kg-svgWrap svg') || null);
    var overlay = document.getElementById('kg-overlay');
    var hud = document.getElementById('kg-hud');
    var fitBtn = document.getElementById('kg-fit');
    var resetBtn = document.getElementById('kg-reset');
    var panBtn = null;
    var mediaBtn = document.getElementById('kg-media-toggle');

    var KG_TOGGLE_MEDIA_INTERACTION_LABEL = 'Toggle media interaction';

    var KG_PROXY_ORIGIN = __KG_PROXY_ORIGIN__;
    var KG_PROXY_ORIGIN_RUNTIME = (typeof KG_PROXY_ORIGIN === 'string' ? String(KG_PROXY_ORIGIN || '').trim() : '');
    var KG_ALLOW_RUNTIME_NETWORK = __KG_ALLOW_RUNTIME_NETWORK__;

    var kgGetProxyOrigin = function(){
      try { return String(KG_PROXY_ORIGIN_RUNTIME || '').trim(); } catch (e) { return ''; }
    };

    var kgShouldUseProxy = function(){
      try {
        if (!KG_ALLOW_RUNTIME_NETWORK) return false;
        return !!kgGetProxyOrigin();
      } catch (e) {
        return false;
      }
    };

    var kgInferMediaKindFromUrl = function(rawUrl){
      try {
        var u = String(rawUrl || '').trim();
        if (!u) return '';
        if (/^data:image\\\\//i.test(u)) {
          if (/^data:image\\\\/svg\\+xml/i.test(u)) return 'svg';
          return 'image';
        }
        var urlForKind = u;
        try {
          var decodedProxyUrl = '';
          var m = String(u).match(/[?&]url=([^&#]+)/i);
          if (m && m[1]) decodedProxyUrl = decodeURIComponent(m[1]);
          if (decodedProxyUrl) urlForKind = decodedProxyUrl;
        } catch (e0) {}
        var noHash = urlForKind.split('#')[0] || urlForKind;
        var noQuery = noHash.split('?')[0] || noHash;
        var lower = String(noQuery).toLowerCase();
        if (lower.endsWith('.svg')) return 'svg';
        if (lower.endsWith('.png') || lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.gif') || lower.endsWith('.webp')) return 'image';
        if (lower.endsWith('.mp4') || lower.endsWith('.webm') || lower.endsWith('.mov') || lower.endsWith('.m4v')) return 'video';
        return '';
      } catch (e) {
        return '';
      }
    };

    var kgInferMediaKindFromUrl2 = function(rawUrl){
      try {
        var u = String(rawUrl || '').trim();
        if (!u) return '';
        try {
          var k0 = typeof kgInferMediaKindFromUrl === 'function' ? kgInferMediaKindFromUrl(u) : '';
          if (k0) return k0;
        } catch (e0) {
          void 0;
        }
        try {
          var p = new URL(u);
          var formatKind = '';
          try {
            p.searchParams.forEach(function(value, name){
              if (formatKind) return;
              var key = String(name || '').toLowerCase();
              var val = String(value || '').toLowerCase();
              var isFormatKey = key === 'format' || key === 'fmt' || key === 'fm' || key === 'tp' || key.slice(-4) === '_fmt';
              if (!isFormatKey) return;
              if (val === 'svg') formatKind = 'svg';
              else if (/^(png|jpe?g|gif|webp)$/i.test(val)) formatKind = 'image';
            });
          } catch (e2) {
            void 0;
          }
          if (formatKind) return formatKind;
          var path = String(p.pathname || '').toLowerCase();
          try { path = decodeURIComponent(path); } catch (e3) {}
          if (/(^|\\\\x2f)(image|images|img|photo|photos|picture|pictures)(\\\\x2f|$)/i.test(path)) return 'image';
          if (/(^|[\\\\x2f._-])svg([\\\\x2f._-]|$)/i.test(path)) return 'svg';
          if (/(^|[\\\\x2f._-])(png|jpe?g|gif|webp)([\\\\x2f._-]|$)/i.test(path)) return 'image';
        } catch (e1) {
          void 0;
        }
        return '';
      } catch (e) {
        return '';
      }
    };

    var kgIsDirectIframeEmbedUrl = function(rawUrl){
      try {
        var u = String(rawUrl || '').trim();
        if (!u) return false;
        if (!/^https?:\\\\/\\\\//i.test(u)) return true;
        if (/(^|\\\\/\\\\/)(www\\.)?youtube\\.com\\\\//i.test(u)) return true;
        if (/(^|\\\\/\\\\/)(www\\.)?youtu\\.be\\\\//i.test(u)) return true;
        if (/(^|\\\\/\\\\/)www\\.youtube-nocookie\\.com\\\\//i.test(u)) return true;
        if (/(^|\\\\/\\\\/)player\\.vimeo\\.com\\\\//i.test(u)) return true;
        if (/(^|\\\\/\\\\/)platform\\.twitter\\.com\\\\//i.test(u)) return true;
        if (/(^|\\\\/\\\\/)twitframe\\.com\\\\//i.test(u)) return true;
        return false;
      } catch (e) {
        return false;
      }
    };

    var kgBuildRemoteFetchProxyUrl = function(rawUrl){
      try {
        var u = String(rawUrl || '').trim();
        if (!u) return '';
        if (u.startsWith('/__fetch_remote?url=')) return u;
        var origin = kgGetProxyOrigin();
        if (/^https?:\\\\/\\\\//i.test(origin || '')) return String(origin).replace(/\\\\/+$/, '') + '/__fetch_remote?url=' + encodeURIComponent(u);
        if (!kgShouldUseProxy()) return u;
        return '/__fetch_remote?url=' + encodeURIComponent(u);
      } catch (e) {
        return String(rawUrl || '').trim();
      }
    };

    var kgBuildWebpageProxyUrl = function(rawUrl){
      try {
        var u = String(rawUrl || '').trim();
        if (!u) return '';
        if (u.startsWith('/__webpage_proxy?url=')) return u;
        var origin = kgGetProxyOrigin();
        if (/^https?:\\\\/\\\\//i.test(origin || '')) return String(origin).replace(/\\\\/+$/, '') + '/__webpage_proxy?url=' + encodeURIComponent(u);
        if (!kgShouldUseProxy()) return u;
        return '/__webpage_proxy?url=' + encodeURIComponent(u);
      } catch (e) {
        return String(rawUrl || '').trim();
      }
    };

    var kgBuildWebpageAssetPathProxyUrl = function(absUrl){
      try {
        var raw = String(absUrl || '').trim();
        if (!raw) return '';
        if (raw.startsWith('/__webpage_asset_path/')) return raw;
        if (raw.startsWith('/__webpage_asset_proxy?url=')) return raw;
        if (!/^https?:\\\\/\\\\//i.test(raw)) return raw;
        var p = new URL(raw);
        var originEnc = encodeURIComponent(p.origin);
        var pp = String(p.pathname || '/');
        var qq = String(p.search || '');
        var out = '/__webpage_asset_path/' + originEnc + pp + qq;
        try {
          var origin = kgGetProxyOrigin();
          if (/^https?:\\\\/\\\\//i.test(origin || '') && window && window.location && String(window.location.protocol || '') === 'file:') {
            return String(origin).replace(/\\\\/+$/, '') + out;
          }
        } catch (e0) {
          void 0;
        }
        return out;
      } catch (e) {
        return String(absUrl || '').trim();
      }
    };

    var kgBuildWebpageMetaProxyUrl = function(absUrl){
      try {
        var raw = String(absUrl || '').trim();
        if (!raw) return '';
        var out = '/__webpage_meta?url=' + encodeURIComponent(raw);
        try {
          var origin = kgGetProxyOrigin();
          if (/^https?:\\\\/\\\\//i.test(origin || '') && window && window.location && String(window.location.protocol || '') === 'file:') {
            return String(origin).replace(/\\\\/+$/, '') + out;
          }
        } catch (e0) {
          void 0;
        }
        return out;
      } catch (e) {
        return '';
      }
    };

    var kgGetWebpageMetaCache = function(){
      try {
        var w = (typeof window !== 'undefined') ? window : null;
        if (!w) return null;
        if (!w.__kgWebpageMetaCache) w.__kgWebpageMetaCache = Object.create(null);
        return w.__kgWebpageMetaCache;
      } catch (e) {
        return null;
      }
    };

    var kgFetchWebpageMeta = function(absUrl, onDone){
      try {
        if (!KG_ALLOW_RUNTIME_NETWORK) { try { onDone && onDone(null); } catch (e00) {} return; }
        var url = String(absUrl || '').trim();
        if (!url) return;
        var cache = kgGetWebpageMetaCache();
        var now = (typeof Date !== 'undefined' && Date.now) ? Date.now() : 0;
        var rec = (cache && cache[url]) ? cache[url] : null;
        if (rec && rec.v && rec.exp && now && rec.exp > now) {
          try { onDone && onDone(rec.v); } catch (e0) {}
          return;
        }
        if (rec && rec.p) {
          try { rec.p.then(function(v){ try { onDone && onDone(v); } catch (e0) {} }).catch(function(){ try { onDone && onDone(null); } catch (e1) {} }); } catch (e2) { try { onDone && onDone(null); } catch (e3) {} }
          return;
        }
        var endpoint = kgBuildWebpageMetaProxyUrl(url);
        if (!endpoint) { try { onDone && onDone(null); } catch (e4) {} return; }
        var p = fetch(endpoint, { method: 'GET', headers: { Accept: 'application/json' } })
          .then(function(res){
            try { if (!res || !res.ok) return null; } catch (e0) { return null; }
            try { return res.json(); } catch (e1) { return null; }
          })
          .then(function(json){
            try {
              if (!json || typeof json !== 'object' || Array.isArray(json)) return null;
              if (json.ok !== true) return null;
              return {
                url: String(json.url || url),
                title: String(json.title || ''),
                siteName: String(json.siteName || ''),
                imageUrl: String(json.imageUrl || ''),
              };
            } catch (e0) {
              return null;
            }
          })
          .catch(function(){ return null; });
        if (cache) {
          cache[url] = { v: null, exp: now + 8 * 60 * 1000, p: p };
        }
        p.then(function(v){
          try {
            if (cache) cache[url] = { v: v, exp: now + 8 * 60 * 1000 };
          } catch (e0) {}
          try { onDone && onDone(v); } catch (e1) {}
        }).catch(function(){
          try { if (cache) cache[url] = { v: null, exp: now + 60 * 1000 }; } catch (e0) {}
          try { onDone && onDone(null); } catch (e1) {}
        });
      } catch (e) {
        try { onDone && onDone(null); } catch (e0) {}
      }
    };

    var kgCreateWebpageSnapshotPreview = function(args){
      try {
        var url = String((args && args.url) || '').trim();
        var title = String((args && args.title) || '').trim();
        var host = '';
        try { host = url ? String((new URL(url)).hostname || '').trim() : ''; } catch (e0) { host = ''; }

        var wrap = document.createElement('section');
        wrap.className = 'kg-mediaSnap';

        var img = document.createElement('img');
        img.className = 'kg-mediaSnapImg';
        img.setAttribute('alt', title || host || 'Webpage');
        img.loading = 'lazy';

        var meta = document.createElement('section');
        meta.className = 'kg-mediaSnapMeta';
        var t = document.createElement('section');
        t.className = 'kg-mediaSnapTitle';
        t.textContent = title || host || url || 'Webpage';
        var h = document.createElement('section');
        h.className = 'kg-mediaSnapHost';
        h.textContent = host || '';
        meta.appendChild(t);
        meta.appendChild(h);

        wrap.appendChild(img);
        wrap.appendChild(meta);

        img.addEventListener('load', function(){
          try { img.style.opacity = '1'; } catch (e0) {}
        });

        if (url) {
          kgFetchWebpageMeta(url, function(m){
            try {
              if (!m) return;
              var imageUrl = String((m && m.imageUrl) || '').trim();
              var mTitle = String((m && m.title) || '').trim();
              var siteName = String((m && m.siteName) || '').trim();
              if (mTitle && (!title || t.textContent === host || t.textContent === url)) t.textContent = mTitle;
              if (siteName && (!h.textContent || h.textContent === host)) h.textContent = siteName;
              if (imageUrl) {
                var resolved = kgShouldUseProxy() ? kgBuildWebpageAssetPathProxyUrl(imageUrl) : kgResolveMediaSrc(imageUrl, 'image');
                img.src = resolved || kgResolveMediaSrc(imageUrl, 'image');
              }
            } catch (e0) {
              void 0;
            }
          });
        }

        return wrap;
      } catch (e) {
        return null;
      }
    };

    var kgResolveMediaSrc = function(url, kind){
      var u = String(url || '').trim();
      if (!u) return '';
      if (/^\\\\s*(data:|blob:|mailto:|tel:)/i.test(u)) return u;
      if (!KG_ALLOW_RUNTIME_NETWORK && (u.startsWith('/__') || u.startsWith('/@') || /^https?:\\\\/\\\\//i.test(u))) return '';
      if (u.startsWith('/__') || u.startsWith('/@')) {
        try {
          var origin = kgGetProxyOrigin();
          if (/^https?:\\\\/\\\\//i.test(origin || '') && window && window.location && String(window.location.protocol || '') === 'file:') {
            return String(origin).replace(/\\\\/+$/, '') + u;
          }
        } catch (e0) {
          void 0;
        }
        return u;
      }
      var k = String(kind || '');
      if (k === 'iframe') {
        if (kgIsDirectIframeEmbedUrl(u)) return u;
        return kgBuildWebpageProxyUrl(u);
      }
      if (k === 'image' || k === 'svg') {
        if (kgShouldUseProxy()) return kgBuildRemoteFetchProxyUrl(u);
        return u;
      }
      if (k === 'video') return kgShouldUseProxy() ? kgBuildRemoteFetchProxyUrl(u) : u;
      return u;
    };

    var kgResolveIframeSandbox = function(url){
      try {
        return kgIsDirectIframeEmbedUrl(url)
          ? 'allow-scripts allow-same-origin allow-forms allow-popups allow-presentation'
          : 'allow-scripts allow-presentation';
      } catch (e) {
        return 'allow-scripts allow-presentation';
      }
    };

    var kgApplyMediaSrcForEl = function(el){
      try {
        if (!el || !el.getAttribute) return;
        var kind0 = String(el.getAttribute('data-kg-kind') || 'iframe');
        var url0 = String(el.getAttribute('data-kg-url') || '');
        var inferred = (typeof kgInferMediaKindFromUrl2 === "function" ? kgInferMediaKindFromUrl2(url0) : "") || kgInferMediaKindFromUrl(url0);
        var kind = (inferred && (kind0 === 'iframe' || kind0 === '')) ? inferred : kind0;
        if (kind === 'image' || kind === 'svg') {
          var img = el.querySelector ? el.querySelector('img') : null;
          if (img) img.src = kgResolveMediaSrc(url0, kind);
          return;
        }
        if (kind === 'video') {
          var vid = el.querySelector ? el.querySelector('video') : null;
          if (vid) vid.src = kgResolveMediaSrc(url0, kind);
          return;
        }
        var iframe = el.querySelector ? el.querySelector('iframe') : null;
        if (!iframe) return;
        try { iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'); } catch (e0) { void 0; }
        try { iframe.setAttribute('sandbox', kgResolveIframeSandbox(url0)); } catch (e1) { void 0; }
        iframe.src = kgResolveMediaSrc(url0, 'iframe');
      } catch (e) {
        void 0;
      }
    };

    var kgApplyMediaSrcToAll = function(){
      try {
        if (!overlay || !overlay.__kgMediaById) return;
        var m = overlay.__kgMediaById;
        for (var k in m) {
          if (!k) continue;
          kgApplyMediaSrcForEl(m[k]);
        }
      } catch (e) {
        void 0;
      }
    };

    var kgMaybeProbeProxyOrigin = function(){
      return;
    };

    var richBtn = document.getElementById('kg-rich-toggle');
    var frontmatterBtn = document.getElementById('kg-frontmatter-toggle');
    var mode3dBtn = document.getElementById('kg-3d-toggle');
    var tip = document.getElementById('kg-tooltip');

    var lastTipKey = '';
    function hideTip(){
      if (!tip) return;
      if (lastTipKey === '') return;
      lastTipKey = '';
      try { tip.setAttribute('aria-hidden', 'true'); } catch (e) {}
      try { tip.style.transform = 'translate3d(-99999px,-99999px,0)'; } catch (e) {}
      try { tip.innerHTML = ''; } catch (e) {}
    }
    function showTip(args){
      if (!tip || !args) return;
      var key = String(args.key || '');
      if (!key) return;
      var x = Number(args.x) || 0;
      var y = Number(args.y) || 0;
      var html = String(args.html || '');
      if (!html) return;
      if (key !== lastTipKey) {
        lastTipKey = key;
        try { tip.innerHTML = html; } catch (e) {}
      }
      try { tip.setAttribute('aria-hidden', 'false'); } catch (e) {}
      var pad = 12;
      var vw = (window && window.innerWidth) ? window.innerWidth : 0;
      var vh = (window && window.innerHeight) ? window.innerHeight : 0;
      var tx = Math.max(pad, Math.min(Math.max(pad, vw - pad), x + 14));
      var ty = Math.max(pad, Math.min(Math.max(pad, vh - pad), y + 14));
      try { tip.style.transform = 'translate3d(' + tx + 'px,' + ty + 'px,0)'; } catch (e) {}
    }

    function esc(s){
      return String(s == null ? '' : s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function buildNodeTipHtml(id){
      var meta = nodeMetaById && nodeMetaById[id] ? nodeMetaById[id] : null;
      var label = meta && meta.label ? String(meta.label) : id;
      return '<section><strong>' + esc(label) + '</strong></section><section style="opacity:.8">' + esc(id) + '</section>';
    }
    function buildEdgeTipHtml(id){
      var meta = edgeMetaById && edgeMetaById[id] ? edgeMetaById[id] : null;
      var label = meta && meta.label ? String(meta.label) : '';
      var s = meta && meta.s ? String(meta.s) : '';
      var t = meta && meta.t ? String(meta.t) : '';
      var top = label ? ('<section><strong>' + esc(label) + '</strong></section>') : '<section><strong>Edge</strong></section>';
      var mid = '<section style="opacity:.85">' + esc(s) + ' → ' + esc(t) + '</section>';
      var bot = '<section style="opacity:.7">' + esc(id) + '</section>';
      return top + mid + bot;
    }

    var state = { k: 1, x: 0, y: 0 };
    var cfg = __KG_CFG__;
    var minK = (cfg && cfg.scaleExtent && typeof cfg.scaleExtent.minK === 'number') ? cfg.scaleExtent.minK : 0.05;
    var maxK = (cfg && cfg.scaleExtent && typeof cfg.scaleExtent.maxK === 'number') ? cfg.scaleExtent.maxK : 50;
    var wheelBehavior = (cfg && (cfg.wheelBehavior === 'pan' || cfg.wheelBehavior === 'zoom')) ? cfg.wheelBehavior : 'preset';
    var viewportControlsPreset = (cfg && cfg.viewportControlsPreset === 'design') ? 'design' : 'map';
    var panSpeed = (cfg && typeof cfg.panSpeed === 'number' && isFinite(cfg.panSpeed)) ? cfg.panSpeed : 1;
    var zoomSpeed = (cfg && typeof cfg.zoomSpeed === 'number' && isFinite(cfg.zoomSpeed)) ? cfg.zoomSpeed : 1;
    var flowWheelZoomSpeedMultiplier = (cfg && typeof cfg.flowWheelZoomSpeedMultiplier === 'number' && isFinite(cfg.flowWheelZoomSpeedMultiplier)) ? cfg.flowWheelZoomSpeedMultiplier : 0.6;
    var flowWheelZoomIncrementMultiplier = (cfg && typeof cfg.flowWheelZoomIncrementMultiplier === 'number' && isFinite(cfg.flowWheelZoomIncrementMultiplier)) ? cfg.flowWheelZoomIncrementMultiplier : 3;
    var flowWheelZoomSmoothMinDurationMs = (cfg && typeof cfg.flowWheelZoomSmoothMinDurationMs === 'number' && isFinite(cfg.flowWheelZoomSmoothMinDurationMs)) ? cfg.flowWheelZoomSmoothMinDurationMs : 40;
    var flowWheelZoomSmoothMaxDurationMs = (cfg && typeof cfg.flowWheelZoomSmoothMaxDurationMs === 'number' && isFinite(cfg.flowWheelZoomSmoothMaxDurationMs)) ? cfg.flowWheelZoomSmoothMaxDurationMs : 110;
    var wheelZoomCtrlMetaBoostMultiplier = (cfg && typeof cfg.wheelZoomCtrlMetaBoostMultiplier === 'number' && isFinite(cfg.wheelZoomCtrlMetaBoostMultiplier)) ? cfg.wheelZoomCtrlMetaBoostMultiplier : 120;
    var canvasInteractionSpeedMultiplier = (cfg && typeof cfg.canvasInteractionSpeedMultiplier === 'number' && isFinite(cfg.canvasInteractionSpeedMultiplier)) ? cfg.canvasInteractionSpeedMultiplier : 1;
    var canvasPanSpeedMultiplier = (cfg && typeof cfg.canvasPanSpeedMultiplier === 'number' && isFinite(cfg.canvasPanSpeedMultiplier)) ? cfg.canvasPanSpeedMultiplier : 1;
    var snapGridEnabled = !!(cfg && cfg.snapGridEnabled === true);
    var snapGridSize = (cfg && typeof cfg.snapGridSize === 'number' && isFinite(cfg.snapGridSize)) ? Math.max(1, Math.floor(cfg.snapGridSize)) : 10;
    var dragConstraint = (cfg && (cfg.dragConstraint === 'axis-x' || cfg.dragConstraint === 'axis-y' || cfg.dragConstraint === 'none')) ? cfg.dragConstraint : 'free';
    var allowNodeDrag = !(cfg && cfg.allowNodeDrag === false);
    var allowEdgeDrag = !(cfg && cfg.allowEdgeDrag === false);
    var allowGroupDrag = !(cfg && cfg.allowGroupDrag === false);
    var initialView = (cfg && cfg.initialView && typeof cfg.initialView.k === 'number' && typeof cfg.initialView.x === 'number' && typeof cfg.initialView.y === 'number') ? cfg.initialView : null;

    var zoomLabelScaleMode2d = (cfg && (cfg.zoomLabelScaleMode2d === 'smooth' || cfg.zoomLabelScaleMode2d === 'power')) ? cfg.zoomLabelScaleMode2d : 'clampAt1';
    var zoomLabelScaleExponent2d = (cfg && typeof cfg.zoomLabelScaleExponent2d === 'number' && isFinite(cfg.zoomLabelScaleExponent2d) && cfg.zoomLabelScaleExponent2d > 0) ? cfg.zoomLabelScaleExponent2d : 1;
    var zoomLabelScaleClampMin2d = (cfg && typeof cfg.zoomLabelScaleClampMin2d === 'number' && isFinite(cfg.zoomLabelScaleClampMin2d) && cfg.zoomLabelScaleClampMin2d > 0) ? cfg.zoomLabelScaleClampMin2d : 0.000001;
    var zoomLabelScaleClampMax2d = (cfg && typeof cfg.zoomLabelScaleClampMax2d === 'number' && isFinite(cfg.zoomLabelScaleClampMax2d) && cfg.zoomLabelScaleClampMax2d > 0) ? cfg.zoomLabelScaleClampMax2d : 1000000;

    var zoomStrokeScaleMode2d = (cfg && (cfg.zoomStrokeScaleMode2d === 'screenConstant' || cfg.zoomStrokeScaleMode2d === 'power')) ? cfg.zoomStrokeScaleMode2d : 'zoomScaled';
    var zoomStrokeScaleExponent2d = (cfg && typeof cfg.zoomStrokeScaleExponent2d === 'number' && isFinite(cfg.zoomStrokeScaleExponent2d) && cfg.zoomStrokeScaleExponent2d > 0) ? cfg.zoomStrokeScaleExponent2d : 1;
    var zoomStrokeScaleClampMin2d = (cfg && typeof cfg.zoomStrokeScaleClampMin2d === 'number' && isFinite(cfg.zoomStrokeScaleClampMin2d) && cfg.zoomStrokeScaleClampMin2d > 0) ? cfg.zoomStrokeScaleClampMin2d : 0.000001;
    var zoomStrokeScaleClampMax2d = (cfg && typeof cfg.zoomStrokeScaleClampMax2d === 'number' && isFinite(cfg.zoomStrokeScaleClampMax2d) && cfg.zoomStrokeScaleClampMax2d > 0) ? cfg.zoomStrokeScaleClampMax2d : 1000;

    var hideLabelsBelowScale = (cfg && typeof cfg.hideLabelsBelowScale === 'number' && isFinite(cfg.hideLabelsBelowScale) && cfg.hideLabelsBelowScale > 0) ? cfg.hideLabelsBelowScale : 0;

    var baseFontSize = null;
    var baseHaloWidth = null;
    var lastResponsiveTs = 0;
    var lastOpacityTs = 0;
    var lastKEffective = null;
    var lastStrokeKey = '';
    var lastHidden = null;

    var cachedNodeLabelEls = null;
    var cachedGroupLabelLayerEl = null;
    var cachedEdgeLabelLayerEl = null;
    var cachedGroupLabelEls = null;
    var cachedEdgeLabelEls = null;

    function ensureBaseLabelMetrics(){
      if (baseFontSize != null && baseHaloWidth != null) return;
      try {
        if (!svg || !svg.querySelector) return;
        var t = svg.querySelector('[data-kg-layer="labels"] text.node-label');
        if (!t || !t.getAttribute) return;
        var fs = parseFloat(t.getAttribute('font-size') || 'NaN');
        var hw = parseFloat(t.getAttribute('stroke-width') || 'NaN');
        if (isFinite(fs) && fs > 0) baseFontSize = fs;
        if (isFinite(hw) && hw > 0) baseHaloWidth = hw;
      } catch (e) {}
      if (baseFontSize == null) baseFontSize = 14;
      if (baseHaloWidth == null) baseHaloWidth = 3;
    }

    function applyZoomResponsiveStyles(k){
      if (!svg) return;
      ensureBaseLabelMetrics();
      var now = Date.now();
      var k0 = (typeof k === 'number' && isFinite(k) && k > 0) ? k : 1;
      var clampScale = function(v){ return Math.max(zoomLabelScaleClampMin2d, Math.min(zoomLabelScaleClampMax2d, v)); };
      var kEffective =
        zoomLabelScaleMode2d === 'clampAt1'
          ? clampScale(Math.max(1, k0))
          : zoomLabelScaleMode2d === 'power'
            ? clampScale(Math.pow(Math.max(0.000001, k0), zoomLabelScaleExponent2d))
            : clampScale(Math.max(0.000001, k0));

      if (!lastResponsiveTs || now - lastResponsiveTs > 16) {
        lastResponsiveTs = now;
        var rounded = Math.round(kEffective * 1000) / 1000;
        if (lastKEffective == null || Math.abs(rounded - lastKEffective) > 1e-9) {
          lastKEffective = rounded;
          var scaledFontSize = baseFontSize / kEffective;
          var scaledHalo = baseHaloWidth / kEffective;
          try {
            var nodeLabels = cachedNodeLabelEls || svg.querySelectorAll('[data-kg-layer="labels"] text.node-label');
            for (var i = 0; i < nodeLabels.length; i += 1) {
              var el = nodeLabels[i];
              if (!el || !el.getAttribute) continue;
              el.setAttribute('font-size', String(scaledFontSize));
              el.setAttribute('stroke-width', String(scaledHalo));
              var bdx = Number(el.getAttribute('data-base-dx') || '0');
              var bdy = Number(el.getAttribute('data-base-dy') || '0');
              if (isFinite(bdx)) el.setAttribute('dx', String(bdx / kEffective));
              if (isFinite(bdy)) el.setAttribute('dy', String(bdy / kEffective));
            }
          } catch (e) {}

          try {
            var groupLabels = cachedGroupLabelEls || svg.querySelectorAll('[data-kg-layer="group-labels"] text');
            for (var j = 0; j < groupLabels.length; j += 1) {
              var ge = groupLabels[j];
              if (!ge || !ge.setAttribute) continue;
              ge.setAttribute('font-size', String(scaledFontSize));
              ge.setAttribute('stroke-width', String(Math.max(2 / kEffective, scaledHalo * 0.85)));
            }
          } catch (e2) {}

          try {
            var edgeLabels = cachedEdgeLabelEls || svg.querySelectorAll('[data-kg-layer="edge-labels"] text');
            for (var k2 = 0; k2 < edgeLabels.length; k2 += 1) {
              var ee = edgeLabels[k2];
              if (!ee || !ee.setAttribute) continue;
              ee.setAttribute('font-size', String(Math.max(9 / kEffective, (baseFontSize * 0.9) / kEffective)));
              ee.setAttribute('stroke-width', String(Math.max(2 / kEffective, scaledHalo * 0.85)));
            }
          } catch (e3) {}

          var clampStroke = function(v){ return Math.max(zoomStrokeScaleClampMin2d, Math.min(zoomStrokeScaleClampMax2d, v)); };
          var strokeScale =
            zoomStrokeScaleMode2d === 'power'
              ? clampStroke(Math.pow(Math.max(0.000001, k0), zoomStrokeScaleExponent2d))
              : (zoomStrokeScaleMode2d === 'screenConstant' ? 1 : 1);
          var strokeKey = zoomStrokeScaleMode2d === 'power' ? (zoomStrokeScaleMode2d + ':' + (Math.round(strokeScale * 1000) / 1000)) : zoomStrokeScaleMode2d;
          if (lastStrokeKey !== strokeKey) {
            lastStrokeKey = strokeKey;
            var baseAttr = 'data-kg-base-stroke-w';
            var sel = '[data-kg-layer="links"] line,[data-kg-layer="groups"] rect,[data-kg-layer="groups"] path,[data-kg-layer="nodes"] circle,[data-kg-layer="nodes"] rect,[data-kg-layer="nodes"] path[data-kg-node-shape],[data-kg-layer="node-chevrons"] path[data-kg-node-chevron],[data-kg-layer="group-labels"] path[data-kg-group-chevron],[data-kg-layer="port-handles"] circle,[data-kg-layer="temp-link"]';
            try {
              var els = svg.querySelectorAll(sel);
              for (var s = 0; s < els.length; s += 1) {
                var se = els[s];
                if (!se || !se.getAttribute || !se.setAttribute) continue;
                if (zoomStrokeScaleMode2d === 'zoomScaled') {
                  var base = se.getAttribute(baseAttr);
                  if (base != null && base !== '') {
                    var b = Number(base);
                    if (isFinite(b)) se.setAttribute('stroke-width', String(b));
                  } else {
                    var sw = se.getAttribute('stroke-width');
                    if (sw != null && sw !== '') se.setAttribute(baseAttr, sw);
                  }
                  se.removeAttribute('vector-effect');
                } else {
                  var base2 = se.getAttribute(baseAttr);
                  if (base2 == null || base2 === '') {
                    base2 = se.getAttribute('stroke-width') || '';
                    if (base2) se.setAttribute(baseAttr, base2);
                  }
                  var b2 = Number(base2);
                  if (isFinite(b2)) {
                    var next = (zoomStrokeScaleMode2d === 'power') ? Math.max(0, b2 * strokeScale) : b2;
                    se.setAttribute('stroke-width', String(next));
                  }
                  se.setAttribute('vector-effect', 'non-scaling-stroke');
                }
              }
            } catch (e4) {}
          }
        }
      }

      var hidden = hideLabelsBelowScale > 0 && k0 < hideLabelsBelowScale;
      if (!lastOpacityTs || now - lastOpacityTs > 16) {
        lastOpacityTs = now;
        if (hidden !== lastHidden) {
          lastHidden = hidden;
          try {
            var nodeLabels2 = cachedNodeLabelEls || svg.querySelectorAll('[data-kg-layer="labels"] text.node-label');
            for (var ii2 = 0; ii2 < nodeLabels2.length; ii2 += 1) {
              var nl = nodeLabels2[ii2];
              if (nl && nl.setAttribute) nl.setAttribute('data-zoom-lod-hidden', hidden ? '1' : '0');
            }
          } catch (e5) {}
          try {
            var gl = cachedGroupLabelLayerEl || svg.querySelector('[data-kg-layer="group-labels"]');
            if (gl && gl.style) gl.style.display = hidden ? 'none' : '';
          } catch (e6) {}
          try {
            var el = cachedEdgeLabelLayerEl || svg.querySelector('[data-kg-layer="edge-labels"]');
            if (el && el.style) el.style.display = hidden ? 'none' : '';
          } catch (e7) {}
        }
      }
    }
    var lastOverlayKey = '';
    var lastVars = null;
    var lastPanelW = 0;
    var lastPanelH = 0;
    var mediaNodes = __KG_MEDIA_NODES__;
    var markdownBlocks = __KG_MD_BLOCKS__;
    var nodeMetaById = __KG_NODE_META__;
    var edgeMetaById = __KG_EDGE_META__;
    var nodePosById = __KG_NODE_POS__;
    var groupMembersById = __KG_GROUP_MEMBERS__;
    var overlayFollowAnimation = (function(){
      try {
        if (!svg || !svg.getAttribute) return false;
        var raw = String(svg.getAttribute('data-kg-3d-payload') || '').trim();
        if (!raw) return false;
        var payload = JSON.parse(raw);
        return !!(payload && payload.animated === true);
      } catch (err) {
        return false;
      }
    })();

    var payload3d = null;
    try {
      if (svg && svg.getAttribute) {
        var raw3d = String(svg.getAttribute('data-kg-3d-payload') || '').trim();
        payload3d = raw3d ? JSON.parse(raw3d) : null;
      }
    } catch (e) { payload3d = null; }

    var payload3dNodeById = null;
    try {
      if (payload3d && payload3d.nodes && payload3d.nodes.length) {
        payload3dNodeById = Object.create(null);
        for (var i = 0; i < payload3d.nodes.length; i += 1) {
          var n = payload3d.nodes[i];
          var id = String((n && n.id) || '');
          if (id) payload3dNodeById[id] = n;
        }
      }
    } catch (e) { payload3dNodeById = null; }

    function writePayload3dNodePos(nodeId, x, y, z){
      try {
        var id = String(nodeId || '').trim();
        if (!id) return;
        if (!payload3dNodeById) return;
        var n = payload3dNodeById[id];
        if (!n) return;
        var px = Number(x);
        var py = Number(y);
        var pz = Number(z);
        if (!isFinite(px) || !isFinite(py) || !isFinite(pz)) return;
        var p = n.p;
        if (p && typeof p.length === 'number' && p.length >= 3) {
          p[0] = px;
          p[1] = py;
          p[2] = pz;
          return;
        }
        n.p = [px, py, pz];
      } catch (e) {}
    }

    var canvas3dEnabled = false;
    var canvas3dCtx = null;
    var canvas3dDpr = 1;
    var resizeCanvas3d = null;
    var renderCanvas3d = null;

    var webgl3dEnabled = false;
    var webgl3d = null;
    var scheduleWebgl3dFrame = null;
    var mark3dGeometryDirty = null;
    var syncWebgl3dControls = null;

    var rotateDrag = null;
    var canvas3dDrag = null;
    var rotateYaw = 0;
    var rotateTilt = 0;
    var schedule3dFrame = null;

    function applyFixedViewport(){
      try {
        if (!cfg || !cfg.fixedViewport) return;
        var w = cfg.fixedViewport.widthPx;
        var h = cfg.fixedViewport.heightPx;
        if (!(w > 0 && h > 0)) return;

        var vv = window.visualViewport;
        var sw = Math.max(1, (vv && typeof vv.width === 'number' && isFinite(vv.width)) ? vv.width : (window.innerWidth || 1));
        var sh = Math.max(1, (vv && typeof vv.height === 'number' && isFinite(vv.height)) ? vv.height : (window.innerHeight || 1));
        var disableFixedOnSmall = (sw < 900 || sh < 600);
        if (disableFixedOnSmall) {
          root.classList.remove('kg-fixedViewport');
          try { root.style.removeProperty('--kg-fixed-w'); } catch (e) {}
          try { root.style.removeProperty('--kg-fixed-h'); } catch (e) {}
          try { root.style.removeProperty('--kg-fixed-scale'); } catch (e) {}
          return;
        }

        root.classList.add('kg-fixedViewport');
        root.style.setProperty('--kg-fixed-w', w + 'px');
        root.style.setProperty('--kg-fixed-h', h + 'px');
        var scale = 1;
        if (cfg.fixedViewport.scaleToFit !== false) {
          scale = Math.min(1, sw / w, sh / h);
        }
        root.style.setProperty('--kg-fixed-scale', String(scale));
      } catch {}
    }

    function installDecorativeAnimations(){
      try {
        if (!cfg || cfg.enableDecorativeAnimation !== true) return;
        if (!svg || !svg.querySelectorAll) return;
        var els = svg.querySelectorAll('circle[data-node-id],rect[data-node-id],path[data-node-id],g.media-node-panel[data-node-id]');
        for (var i = 0; i < els.length; i += 1) {
          var el = els[i];
          var id = (el.getAttribute && el.getAttribute('data-node-id')) ? String(el.getAttribute('data-node-id') || '') : '';
          if (!id) continue;
          var hash = 2166136261;
          for (var j = 0; j < id.length; j += 1) { hash ^= id.charCodeAt(j); hash = Math.imul(hash, 16777619); }
          var seed01 = (hash >>> 0) / 4294967295;
          var dur = 2.8 + seed01 * 1.6;
          var delay = (((hash >>> 7) % 1000) / 1000) * 1.2;
          var amp = 1.5 + (((hash >>> 13) % 1000) / 1000) * 1.8;
          var prev = String(el.getAttribute('style') || '');
          var next = (prev ? (prev.replace(/;?\\\\s*$/, ';')) : '') + 'transform-box:fill-box;transform-origin:center;--kg-bob-amp:' + amp.toFixed(2) + 'px;animation:kgNodeBob ' + dur.toFixed(2) + 's ease-in-out ' + delay.toFixed(2) + 's infinite;';
          el.setAttribute('style', next);
        }
      } catch {}
    }

    function executeEmbeddedSvgScriptsOnce(){
      try {
        if (!svg || !svg.querySelectorAll) return;
        if (svg.__kgScriptsExecuted) return;
        svg.__kgScriptsExecuted = true;
        var scripts = svg.querySelectorAll('script');
        if (!scripts || scripts.length === 0) return;
        for (var i = 0; i < scripts.length; i += 1) {
          var old = scripts[i];
          if (!old) continue;
          var code = '';
          try { code = String(old.textContent || ''); } catch (e) { code = ''; }
          if (!code || !code.trim()) continue;
          var type = '';
          try { type = String(old.getAttribute('type') || ''); } catch (e) { type = ''; }
          try { old.parentNode && old.parentNode.removeChild(old); } catch (e) {}
          try {
            var s = document.createElementNS('http://www.w3.org/2000/svg', 'script');
            if (type && type.trim()) s.setAttribute('type', type.trim());
            s.textContent = code;
            svg.appendChild(s);
          } catch (e) {}
        }
      } catch (err) {}
    }

    function install3dCanvasRendererOnce(){
      try {
        if (!payload3d || !payload3d.nodes || !payload3d.edges) return false;
        if (!webglCanvas || !webglCanvas.getContext) return false;
        if (webglCanvas.__kg3dCanvasInstalled) return true;
        var prefer = (cfg && cfg.preferWebgl3d === false) ? false : true;
        if (!prefer) return false;

        var startWebgl = function(bundle){
          try {
            if (!bundle || !bundle.THREE) return false;
            var THREE = bundle.THREE;
            if (!THREE || !THREE.WebGLRenderer) return false;
            var gl = null;
            try { gl = webglCanvas.getContext('webgl2', { alpha: false, antialias: true, depth: true, stencil: false, powerPreference: 'high-performance', preserveDrawingBuffer: false }); } catch (e0) { gl = null; }
            if (!gl) {
              try { gl = webglCanvas.getContext('webgl', { alpha: false, antialias: true, depth: true, stencil: false, powerPreference: 'high-performance', preserveDrawingBuffer: false }); } catch (e1) { gl = null; }
            }
            if (!gl) return false;

            var renderer = null;
            try {
              renderer = new THREE.WebGLRenderer({ canvas: webglCanvas, context: gl, antialias: true, alpha: false, powerPreference: 'high-performance' });
            } catch (e2) { renderer = null; }
            if (!renderer) return false;
            var bg = null;
            try { bg = String(getComputedStyle(document.documentElement).getPropertyValue('--kg-canvas-bg') || '').trim(); } catch (e0) { bg = null; }
            if (!bg) bg = '#0b0f16';
            try { renderer.setClearColor(new THREE.Color(bg), 1); } catch (e3) { try { renderer.setClearColor(0x000000, 1); } catch (e4) {} }

            var scene = new THREE.Scene();
            var group = new THREE.Group();
            scene.add(group);

            try {
              scene.add(new THREE.AmbientLight(0xffffff, 0.9));
              var dl = new THREE.DirectionalLight(0xffffff, 0.6);
              dl.position.set(0, 0, 120);
              scene.add(dl);
            } catch (e5) {}

            var cameraPose = (payload3d && payload3d.cameraPose) ? payload3d.cameraPose : null;
            var fov = (cameraPose && typeof cameraPose.fov === 'number' && isFinite(cameraPose.fov)) ? cameraPose.fov : 50;
            var camera = new THREE.PerspectiveCamera(fov, 1, 0.1, 50000);
            if (cameraPose && cameraPose.position) {
              camera.position.set(Number(cameraPose.position.x) || 0, Number(cameraPose.position.y) || 0, Number(cameraPose.position.z) || 220);
            } else {
              camera.position.set(0, 0, 220);
            }
            if (cameraPose && cameraPose.quaternion) {
              try { camera.quaternion.set(Number(cameraPose.quaternion.x) || 0, Number(cameraPose.quaternion.y) || 0, Number(cameraPose.quaternion.z) || 0, Number(cameraPose.quaternion.w) || 1); } catch (e) {}
            }

            var controls = null;
            try {
              if (bundle.OrbitControls) {
                controls = new bundle.OrbitControls(camera, webglCanvas);
                controls.enableDamping = true;
                var cc = (payload3d && payload3d.cameraCfg) ? payload3d.cameraCfg : null;
                controls.dampingFactor = (cc && typeof cc.dampingFactor === 'number' && isFinite(cc.dampingFactor)) ? cc.dampingFactor : 0.08;
                controls.rotateSpeed = (cc && typeof cc.rotateSpeed === 'number' && isFinite(cc.rotateSpeed)) ? cc.rotateSpeed : 0.6;
                controls.zoomSpeed = (cc && typeof cc.zoomSpeed === 'number' && isFinite(cc.zoomSpeed)) ? cc.zoomSpeed : 0.8;
                controls.panSpeed = (cc && typeof cc.panSpeed === 'number' && isFinite(cc.panSpeed)) ? cc.panSpeed : 0.5;
                controls.autoRotate = (payload3d && payload3d.autoRotate === true);
                controls.autoRotateSpeed = (payload3d && typeof payload3d.autoRotateSpeed === 'number' && isFinite(payload3d.autoRotateSpeed)) ? payload3d.autoRotateSpeed : 0.4;
                if (cameraPose && cameraPose.target) {
                  controls.target.set(Number(cameraPose.target.x) || 0, Number(cameraPose.target.y) || 0, Number(cameraPose.target.z) || 0);
                } else {
                  controls.target.set(0, 0, 0);
                }
                try { controls.update(); } catch (e) {}
              }
            } catch (e) { controls = null; }

            var baseMouseButtons = null;
            try {
              if (controls && controls.mouseButtons) {
                baseMouseButtons = {
                  LEFT: controls.mouseButtons.LEFT,
                  MIDDLE: controls.mouseButtons.MIDDLE,
                  RIGHT: controls.mouseButtons.RIGHT,
                };
              }
            } catch (e) { baseMouseButtons = null; }

            function syncOrbitControlsBindings(mod){
              if (!controls || !controls.mouseButtons) return;
              try {
                var MOUSE = THREE && THREE.MOUSE ? THREE.MOUSE : null;
                if (!MOUSE) return;
                controls.mouseButtons.LEFT = MOUSE.PAN;
                controls.mouseButtons.RIGHT = MOUSE.ROTATE;
              } catch (e) {}
            }
            syncWebgl3dControls = syncOrbitControlsBindings;
            try {
              webglCanvas.addEventListener('pointerdown', function(e){
                try { syncOrbitControlsBindings(e); } catch (e0) {}
              }, { passive: true });
              webglCanvas.addEventListener('pointerup', function(){
                try { syncOrbitControlsBindings(null); } catch (e1) {}
              }, { passive: true });
              webglCanvas.addEventListener('pointercancel', function(){
                try { syncOrbitControlsBindings(null); } catch (e2) {}
              }, { passive: true });
            } catch (e) {}

            var nodes = Array.isArray(payload3d.nodes) ? payload3d.nodes : [];
            var edges = Array.isArray(payload3d.edges) ? payload3d.edges : [];

            var baseCameraZ = (typeof payload3d.cameraZ === 'number' && isFinite(payload3d.cameraZ)) ? payload3d.cameraZ : 220;
            var tiltX = (typeof payload3d.tiltX === 'number' && isFinite(payload3d.tiltX)) ? payload3d.tiltX : 0;
            var yaw0 = (typeof payload3d.yaw0 === 'number' && isFinite(payload3d.yaw0)) ? payload3d.yaw0 : 0;
            var cx = (typeof payload3d.cx === 'number' && isFinite(payload3d.cx)) ? payload3d.cx : 0;
            var cy = (typeof payload3d.cy === 'number' && isFinite(payload3d.cy)) ? payload3d.cy : 0;
            var cz = (typeof payload3d.cz === 'number' && isFinite(payload3d.cz)) ? payload3d.cz : 0;

            var nodeOffsetById = (svg && svg.__kgNodeOffsetById) ? svg.__kgNodeOffsetById : (svg ? (svg.__kgNodeOffsetById || (svg.__kgNodeOffsetById = {})) : {});
            var nodeOverrideById = (overlay && overlay.__kgNodeOverrideById) ? overlay.__kgNodeOverrideById : (overlay ? (overlay.__kgNodeOverrideById || (overlay.__kgNodeOverrideById = Object.create(null))) : Object.create(null));

            var threeEdgeRenderer = String(payload3d.threeEdgeRenderer || 'mesh') === 'shaderLine' ? 'shaderLine' : 'mesh';
            var shaderLineWidthPx = (typeof payload3d.shaderLineWidthPx === 'number' && isFinite(payload3d.shaderLineWidthPx)) ? payload3d.shaderLineWidthPx : 2;
            if (shaderLineWidthPx < 0.5) shaderLineWidthPx = 0.5;
            if (shaderLineWidthPx > 20) shaderLineWidthPx = 20;

            var mediaSet = Object.create(null);
            try {
              if (mediaNodes && mediaNodes.length) {
                for (var mi = 0; mi < mediaNodes.length; mi += 1) {
                  var mid = String(mediaNodes[mi].id || '');
                  if (mid) mediaSet[mid] = 1;
                }
              }
            } catch (e0) {}

            var nodeCircle = [];
            var nodeRect = [];
            var nodeDiamond = [];
            var nodeHex = [];
            for (var ni0 = 0; ni0 < nodes.length; ni0 += 1) {
              var nd0 = nodes[ni0];
              var id0 = String((nd0 && nd0.id) || '');
              if (id0 && mediaSet[id0]) continue;
              var sh = String((nd0 && nd0.shape) || 'circle');
              if (sh === 'diamond') nodeDiamond.push(ni0);
              else if (sh === 'hex') nodeHex.push(ni0);
              else if (sh === 'rect') nodeRect.push(ni0);
              else nodeCircle.push(ni0);
            }

            var tmpColor = new THREE.Color();
            var instCircle = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 16, 16), new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 1 }), Math.max(1, nodeCircle.length));
            var instRect = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 1 }), Math.max(1, nodeRect.length));
            var instDiamond = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 1 }), Math.max(1, nodeDiamond.length));
            var instHex = new THREE.InstancedMesh(new THREE.CylinderGeometry(1, 1, 1, 6, 1, false), new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 1 }), Math.max(1, nodeHex.length));
            instCircle.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
            instRect.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
            instDiamond.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
            instHex.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
            group.add(instCircle);
            group.add(instRect);
            group.add(instDiamond);
            group.add(instHex);

            instCircle.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(Math.max(1, nodeCircle.length * 3)), 3);
            instRect.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(Math.max(1, nodeRect.length * 3)), 3);
            instDiamond.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(Math.max(1, nodeDiamond.length * 3)), 3);
            instHex.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(Math.max(1, nodeHex.length * 3)), 3);

            var edgeLines = null;
            var edgeLinesGeom = null;
            var edgeLinesMat = null;
            var edgeLinePositions = null;
            var edgeLineColors = null;

            var edgeCyl = null;
            var edgeCylMeta = null;
            var edgeCylGeom = null;
            var edgeCylMat = null;

            var edgeCurves = null;
            var edgeArrows = null;

            var particleInst = null;
            var particleMeta = [];
            var particleCount = 0;
            var particleGeom = null;
            var particleMat = null;

            var edgeIndexById = Object.create(null);
            try {
              for (var eiMap = 0; eiMap < edges.length; eiMap += 1) {
                var edMap = edges[eiMap];
                var idMap = String((edMap && edMap.id) || '');
                if (idMap) edgeIndexById[idMap] = eiMap;
              }
            } catch (e0) {}

            var edgeCylEdgeIdxByInst = [];
            var edgeArrowEdgeIdxByInst = [];
            var edgeCurveMeshes = [];

            try {
              if (threeEdgeRenderer === 'shaderLine' && bundle.Line2 && bundle.LineSegmentsGeometry && bundle.LineMaterial) {
                edgeLinesGeom = new bundle.LineSegmentsGeometry();
                edgeLinePositions = new Float32Array(Math.max(2, edges.length * 2) * 3);
                edgeLineColors = new Float32Array(Math.max(2, edges.length * 2) * 3);
                edgeLinesGeom.setPositions(edgeLinePositions);
                edgeLinesGeom.setColors(edgeLineColors);
                edgeLinesMat = new bundle.LineMaterial({ vertexColors: true, linewidth: shaderLineWidthPx, transparent: true, opacity: 1 });
                edgeLines = new bundle.Line2(edgeLinesGeom, edgeLinesMat);
                try { edgeLines.computeLineDistances(); } catch (e) {}
                group.add(edgeLines);
              } else if (threeEdgeRenderer === 'mesh') {
                edgeCylGeom = new THREE.CylinderGeometry(1, 1, 1, 8, 1, false);
                edgeCylMat = new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 1 });
                edgeCyl = new THREE.InstancedMesh(edgeCylGeom, edgeCylMat, Math.max(1, edges.length));
                edgeCyl.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
                edgeCylMeta = new Int32Array(Math.max(1, edges.length) * 2);
                group.add(edgeCyl);

                edgeArrows = new THREE.InstancedMesh(new THREE.ConeGeometry(1, 1, 16), new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 1 }), Math.max(1, edges.length));
                edgeArrows.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
                group.add(edgeArrows);

                edgeCurves = [];
              } else {
                edgeLinesGeom = new THREE.BufferGeometry();
                edgeLinePositions = new Float32Array(Math.max(2, edges.length * 2) * 3);
                edgeLinesGeom.setAttribute('position', new THREE.BufferAttribute(edgeLinePositions, 3));
                edgeLinesMat = new THREE.LineBasicMaterial({ color: 0x9ca3af, transparent: true, opacity: 0.7, depthWrite: false });
                edgeLines = new THREE.LineSegments(edgeLinesGeom, edgeLinesMat);
                group.add(edgeLines);
              }
            } catch (e) {
              edgeLinesGeom = new THREE.BufferGeometry();
              edgeLinePositions = new Float32Array(Math.max(2, edges.length * 2) * 3);
              edgeLinesGeom.setAttribute('position', new THREE.BufferAttribute(edgeLinePositions, 3));
              edgeLinesMat = new THREE.LineBasicMaterial({ color: 0x9ca3af, transparent: true, opacity: 0.7, depthWrite: false });
              edgeLines = new THREE.LineSegments(edgeLinesGeom, edgeLinesMat);
              group.add(edgeLines);
            }

            var nodeIndexById = Object.create(null);
            for (var ni = 0; ni < nodes.length; ni += 1) {
              var id = String((nodes[ni] && nodes[ni].id) || '');
              if (id) nodeIndexById[id] = ni;
            }

            var neighborsById = Object.create(null);
            try {
              for (var eiN = 0; eiN < edges.length; eiN += 1) {
                var eN = edges[eiN];
                var sN = String((eN && (eN.s || eN.source || '')) || '');
                var tN = String((eN && (eN.t || eN.target || '')) || '');
                if (!sN || !tN) continue;
                (neighborsById[sN] || (neighborsById[sN] = Object.create(null)))[tN] = 1;
                (neighborsById[tN] || (neighborsById[tN] = Object.create(null)))[sN] = 1;
              }
            } catch (e) {}

            var particleTmpM = new THREE.Matrix4();
            var particleTmpPos = new THREE.Vector3();
            var particleTmpScale = new THREE.Vector3();
            var particleTmpQuat = new THREE.Quaternion();
            particleTmpQuat.identity();
            var updateParticles = function(tSec){
              if (!particleInst || particleCount <= 0) return;
              try {
                var upAx = 0, upAy = 0, upAz = 1;
                var upBx = 0, upBy = 1, upBz = 0;
                for (var mi = 0; mi < particleMeta.length; mi += 1) {
                  var m = particleMeta[mi];
                  if (!m) continue;
                  var ed = edges[m.ei];
                  if (!ed) continue;
                  var sid = String((ed && (ed.s || ed.source || '')) || '');
                  var tid = String((ed && (ed.t || ed.target || '')) || '');
                  var si = (sid && nodeIndexById[sid] != null) ? nodeIndexById[sid] : -1;
                  var ti = (tid && nodeIndexById[tid] != null) ? nodeIndexById[tid] : -1;
                  if (si < 0 || ti < 0) continue;
                  var hasOvS = !!(sid && nodeOverrideById && nodeOverrideById[sid]);
                  var hasOvT = !!(tid && nodeOverrideById && nodeOverrideById[tid]);
                  var sp = hasOvS ? nodeOverrideById[sid] : (nodes[si] && nodes[si].p ? nodes[si].p : [0,0,0]);
                  var tp = hasOvT ? nodeOverrideById[tid] : (nodes[ti] && nodes[ti].p ? nodes[ti].p : [0,0,0]);
                  var ax = (Number(sp[0]) || 0) - cx;
                  var ay = (Number(sp[1]) || 0) - cy;
                  var az = (Number(sp[2]) || 0) - cz;
                  var bx = (Number(tp[0]) || 0) - cx;
                  var by = (Number(tp[1]) || 0) - cy;
                  var bz = (Number(tp[2]) || 0) - cz;
                  var offS = (!hasOvS && nodeOffsetById && sid) ? nodeOffsetById[sid] : null;
                  var offT = (!hasOvT && nodeOffsetById && tid) ? nodeOffsetById[tid] : null;
                  if (offS) { ax += Number(offS.x) || 0; ay += Number(offS.y) || 0; }
                  if (offT) { bx += Number(offT.x) || 0; by += Number(offT.y) || 0; }

                  var speed = (typeof m.speed === 'number' && isFinite(m.speed)) ? m.speed : 0.6;
                  var tt = ((typeof m.phase === 'number' && isFinite(m.phase) ? m.phase : 0) + tSec * (speed * 0.12)) % 1;
                  if (tt < 0) tt += 1;
                  var omt = 1 - tt;

                  var px;
                  var py;
                  var pz;

                  var curv = (ed && typeof ed.curvature === 'number' && isFinite(ed.curvature)) ? ed.curvature : 0;
                  if (curv > 0.001) {
                    var dx = bx - ax;
                    var dy = by - ay;
                    var dz = bz - az;
                    var len = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    if (len < 1e-6) len = 1e-6;
                    var ux = dx / len;
                    var uy = dy / len;
                    var uz = dz / len;
                    var upx = (Math.abs(uz) < 0.99) ? upAx : upBx;
                    var upy = (Math.abs(uz) < 0.99) ? upAy : upBy;
                    var upz = (Math.abs(uz) < 0.99) ? upAz : upBz;
                    var px0 = uy * upz - uz * upy;
                    var py0 = uz * upx - ux * upz;
                    var pz0 = ux * upy - uy * upx;
                    var plen = Math.sqrt(px0 * px0 + py0 * py0 + pz0 * pz0);
                    if (plen < 1e-6) plen = 1e-6;
                    px0 /= plen;
                    py0 /= plen;
                    pz0 /= plen;
                    var arot = (ed && typeof ed.curveRotation === 'number' && isFinite(ed.curveRotation)) ? ed.curveRotation : 0;
                    var ca = Math.cos(arot);
                    var sa = Math.sin(arot);
                    var dot = px0 * ux + py0 * uy + pz0 * uz;
                    var cxr = uy * pz0 - uz * py0;
                    var cyr = uz * px0 - ux * pz0;
                    var czr = ux * py0 - uy * px0;
                    var rx = px0 * ca + cxr * sa + ux * dot * (1 - ca);
                    var ry = py0 * ca + cyr * sa + uy * dot * (1 - ca);
                    var rz = pz0 * ca + czr * sa + uz * dot * (1 - ca);
                    var offMag = Math.max(0, curv) * (len * 0.5);
                    var cxp = (ax + bx) * 0.5 + rx * offMag;
                    var cyp = (ay + by) * 0.5 + ry * offMag;
                    var czp = (az + bz) * 0.5 + rz * offMag;
                    px = omt * omt * ax + 2 * omt * tt * cxp + tt * tt * bx;
                    py = omt * omt * ay + 2 * omt * tt * cyp + tt * tt * by;
                    pz = omt * omt * az + 2 * omt * tt * czp + tt * tt * bz;
                  } else {
                    px = ax + (bx - ax) * tt;
                    py = ay + (by - ay) * tt;
                    pz = az + (bz - az) * tt;
                  }

                  var baseW = (ed && typeof ed.baseWidth === 'number' && isFinite(ed.baseWidth)) ? ed.baseWidth : 1;
                  var pr = Math.max(0.6, Math.min(6, baseW * 1.2));
                  particleTmpPos.set(px, py, pz);
                  particleTmpScale.set(pr, pr, pr);
                  particleTmpM.compose(particleTmpPos, particleTmpQuat, particleTmpScale);
                  particleInst.setMatrixAt(m.i, particleTmpM);
                }
                particleInst.instanceMatrix.needsUpdate = true;
              } catch (e) {}
            };

            if (edgeCurves && edgeCurves.push) {
              try {
                for (var ei0 = 0; ei0 < edges.length; ei0 += 1) {
                  var ed0 = edges[ei0];
                  var curv0 = (ed0 && typeof ed0.curvature === 'number' && isFinite(ed0.curvature)) ? ed0.curvature : 0;
                  if (curv0 <= 0.001) continue;
                  var mat0 = new THREE.MeshLambertMaterial({ color: 0x9ca3af, transparent: true, opacity: 1 });
                  try { mat0.color = new THREE.Color(String((ed0 && ed0.stroke) || '#9ca3af')); } catch (e) {}
                  if (ed0 && typeof ed0.opacity === 'number' && isFinite(ed0.opacity)) mat0.opacity = Math.max(0, Math.min(1, ed0.opacity));
                  var mesh0 = new THREE.Mesh(new THREE.BufferGeometry(), mat0);
                  try { mesh0.userData = { ei: ei0 }; } catch (e0) {}
                  group.add(mesh0);
                  try { edgeCurveMeshes.push(mesh0); } catch (e1) {}
                  edgeCurves.push({ ei: ei0, mesh: mesh0 });
                }
              } catch (e) {}
            }

            try {
              var totalParticles = 0;
              for (var ePi = 0; ePi < edges.length; ePi += 1) {
                var edP = edges[ePi];
                var cnt = (edP && typeof edP.particles === 'number' && isFinite(edP.particles)) ? Math.max(0, Math.min(24, Math.floor(edP.particles))) : 0;
                totalParticles += cnt;
              }
              if (totalParticles > 0) {
                particleGeom = new THREE.SphereGeometry(1, 8, 8);
                particleMat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 1, depthWrite: false });
                particleInst = new THREE.InstancedMesh(particleGeom, particleMat, totalParticles);
                particleInst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
                group.add(particleInst);
                var colorsP = new Float32Array(totalParticles * 3);
                var idx = 0;
                for (var ePi2 = 0; ePi2 < edges.length; ePi2 += 1) {
                  var edP2 = edges[ePi2];
                  var cnt2 = (edP2 && typeof edP2.particles === 'number' && isFinite(edP2.particles)) ? Math.max(0, Math.min(24, Math.floor(edP2.particles))) : 0;
                  var spd = (edP2 && typeof edP2.particleSpeed === 'number' && isFinite(edP2.particleSpeed)) ? Math.max(0.01, Math.min(5, edP2.particleSpeed)) : 0.6;
                  var colP = new THREE.Color();
                  try { colP.set(String((edP2 && edP2.stroke) || '#9ca3af')); } catch (e) { colP.set('#9ca3af'); }
                  for (var pi = 0; pi < cnt2; pi += 1) {
                    colorsP[idx * 3 + 0] = colP.r;
                    colorsP[idx * 3 + 1] = colP.g;
                    colorsP[idx * 3 + 2] = colP.b;
                    particleMeta.push({ ei: ePi2, i: idx, speed: spd, phase: (pi / Math.max(1, cnt2)) });
                    idx += 1;
                  }
                }
                particleInst.instanceColor = new THREE.InstancedBufferAttribute(colorsP, 3);
                particleCount = totalParticles;
              }
            } catch (e) {}

            var updateGeometry = function(){
              var tmpM = new THREE.Matrix4();
              var tmpPos = new THREE.Vector3();
              var tmpScale = new THREE.Vector3();
              var qIdent = new THREE.Quaternion();
              qIdent.identity();
              var qDiamond = new THREE.Quaternion();
              qDiamond.setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI * 0.25);
              var qHex = new THREE.Quaternion();
              qHex.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI * 0.5);

              var setNodeInstance = function(instMesh, list, quat, mode){
                var n = list.length;
                instMesh.count = n;
                for (var ii = 0; ii < n; ii += 1) {
                  var iNode = list[ii];
                  var nd = nodes[iNode];
                  var id = String((nd && nd.id) || '');
                  var hasOv = !!(id && nodeOverrideById && nodeOverrideById[id]);
                  var p = hasOv ? nodeOverrideById[id] : ((nd && nd.p) ? nd.p : [0,0,0]);
                  var x = (Number(p[0]) || 0) - cx;
                  var y = (Number(p[1]) || 0) - cy;
                  var z = (Number(p[2]) || 0) - cz;
                  var off = (!hasOv && nodeOffsetById && id) ? nodeOffsetById[id] : null;
                  if (off) { x += Number(off.x) || 0; y += Number(off.y) || 0; }
                  tmpPos.set(x, y, z);
                  var baseR = (nd && typeof nd.baseR === 'number' && isFinite(nd.baseR)) ? nd.baseR : 10;
                  var scale = (nd && typeof nd.scale === 'number' && isFinite(nd.scale)) ? nd.scale : 1;
                  if (!(scale > 0) || !isFinite(scale)) scale = 1;
                  var r = Math.max(1, baseR * scale);
                  if (mode === 'sphere') {
                    tmpScale.set(r, r, r);
                  } else if (mode === 'hex') {
                    var hexR = r * 0.82;
                    var depth = Math.max(2, r * 0.85);
                    tmpScale.set(hexR, hexR, depth);
                  } else {
                    var rectDims = nd && nd.rectDims ? nd.rectDims : null;
                    var w0 = rectDims && isFinite(rectDims.width) ? Math.max(2, Number(rectDims.width) * scale) : Math.max(2, r * 2);
                    var h0 = rectDims && isFinite(rectDims.height) ? Math.max(2, Number(rectDims.height) * scale) : Math.max(2, r * 2);
                    var depth2 = Math.max(2, r * 0.85);
                    tmpScale.set(w0, h0, depth2);
                  }
                  tmpM.compose(tmpPos, quat, tmpScale);
                  instMesh.setMatrixAt(ii, tmpM);
                  try { tmpColor.set(String((nd && nd.fill) || '#888')); } catch (e) { tmpColor.set('#888'); }
                  if (instMesh.instanceColor) instMesh.instanceColor.setXYZ(ii, tmpColor.r, tmpColor.g, tmpColor.b);
                }
                instMesh.instanceMatrix.needsUpdate = true;
                if (instMesh.instanceColor) instMesh.instanceColor.needsUpdate = true;
              };

              setNodeInstance(instCircle, nodeCircle, qIdent, 'sphere');
              setNodeInstance(instRect, nodeRect, qIdent, 'rect');
              setNodeInstance(instDiamond, nodeDiamond, qDiamond, 'rect');
              setNodeInstance(instHex, nodeHex, qHex, 'hex');

              if (edgeCurves && edgeCurves.length) {
                try {
                  var upA = new THREE.Vector3(0, 0, 1);
                  var upB = new THREE.Vector3(0, 1, 0);
                  var sV = new THREE.Vector3();
                  var tV = new THREE.Vector3();
                  var cV = new THREE.Vector3();
                  var dV = new THREE.Vector3();
                  var uV = new THREE.Vector3();
                  var pV = new THREE.Vector3();
                  var rV = new THREE.Vector3();

                  for (var ci = 0; ci < edgeCurves.length; ci += 1) {
                    var it = edgeCurves[ci];
                    if (!it) continue;
                    var edC = edges[it.ei];
                    if (!edC) continue;
                    var sidC = String((edC && (edC.s || edC.source || '')) || '');
                    var tidC = String((edC && (edC.t || edC.target || '')) || '');
                    var siC = (sidC && nodeIndexById[sidC] != null) ? nodeIndexById[sidC] : -1;
                    var tiC = (tidC && nodeIndexById[tidC] != null) ? nodeIndexById[tidC] : -1;
                    var hasOvS = !!(sidC && nodeOverrideById && nodeOverrideById[sidC]);
                    var hasOvT = !!(tidC && nodeOverrideById && nodeOverrideById[tidC]);
                    var aC = (siC >= 0) ? (hasOvS ? nodeOverrideById[sidC] : nodes[siC].p) : null;
                    var bC = (tiC >= 0) ? (hasOvT ? nodeOverrideById[tidC] : nodes[tiC].p) : null;
                    if (!aC || !bC) continue;
                    var axC = (Number(aC[0]) || 0) - cx;
                    var ayC = (Number(aC[1]) || 0) - cy;
                    var azC = (Number(aC[2]) || 0) - cz;
                    var bxC = (Number(bC[0]) || 0) - cx;
                    var byC = (Number(bC[1]) || 0) - cy;
                    var bzC = (Number(bC[2]) || 0) - cz;
                    var offSC = (!hasOvS && nodeOffsetById && sidC) ? nodeOffsetById[sidC] : null;
                    var offTC = (!hasOvT && nodeOffsetById && tidC) ? nodeOffsetById[tidC] : null;
                    if (offSC) { axC += Number(offSC.x) || 0; ayC += Number(offSC.y) || 0; }
                    if (offTC) { bxC += Number(offTC.x) || 0; byC += Number(offTC.y) || 0; }

                    sV.set(axC, ayC, azC);
                    tV.set(bxC, byC, bzC);
                    dV.subVectors(tV, sV);
                    var len3 = Math.max(1e-6, dV.length());
                    uV.copy(dV).multiplyScalar(1 / len3);
                    var up = (Math.abs(uV.z) < 0.99) ? upA : upB;
                    pV.crossVectors(uV, up);
                    var plen = Math.max(1e-6, pV.length());
                    pV.multiplyScalar(1 / plen);
                    var arot = (edC && typeof edC.curveRotation === 'number' && isFinite(edC.curveRotation)) ? edC.curveRotation : 0;
                    var ca = Math.cos(arot);
                    var sa = Math.sin(arot);
                    var dot = pV.dot(uV);
                    rV.set(
                      pV.x * ca + (uV.y * pV.z - uV.z * pV.y) * sa + uV.x * dot * (1 - ca),
                      pV.y * ca + (uV.z * pV.x - uV.x * pV.z) * sa + uV.y * dot * (1 - ca),
                      pV.z * ca + (uV.x * pV.y - uV.y * pV.x) * sa + uV.z * dot * (1 - ca),
                    );

                    var curv = (edC && typeof edC.curvature === 'number' && isFinite(edC.curvature)) ? edC.curvature : 0;
                    var offMag = Math.max(0, curv) * (len3 * 0.5);
                    cV.copy(sV).add(tV).multiplyScalar(0.5).addScaledVector(rV, offMag);

                    var wC = (edC && typeof edC.baseWidth === 'number' && isFinite(edC.baseWidth)) ? edC.baseWidth : 1;
                    if (wC < 0.5) wC = 0.5;
                    if (wC > 5) wC = 5;
                    var radius = Math.max(0.25, wC * 0.5);
                    var curve = new THREE.QuadraticBezierCurve3(sV.clone(), cV.clone(), tV.clone());
                    var geom = new THREE.TubeGeometry(curve, 24, radius, 6, false);
                    try { if (it.mesh.geometry) it.mesh.geometry.dispose(); } catch (e0) {}
                    it.mesh.geometry = geom;
                    try {
                      if (it.mesh.material) {
                        it.mesh.material.opacity = (edC && typeof edC.opacity === 'number' && isFinite(edC.opacity)) ? Math.max(0, Math.min(1, edC.opacity)) : 1;
                        it.mesh.material.color = new THREE.Color(String((edC && edC.stroke) || '#9ca3af'));
                      }
                    } catch (e1) {}
                  }
                } catch (e2) {}
              }

              var tmpUp = new THREE.Vector3(0, 1, 0);
              var tmpDir = new THREE.Vector3();
              var tmpMid = new THREE.Vector3();
              var tmpQuat2 = new THREE.Quaternion();
              var tmpScale2 = new THREE.Vector3();
              var tmpM2 = new THREE.Matrix4();
              var tmpColor2 = new THREE.Color();

              var cylI = 0;
              var arrowI = 0;
              for (var ei = 0; ei < edges.length; ei += 1) {
                var ed = edges[ei];
                var sid = String((ed && (ed.s || ed.source || '')) || '');
                var tid = String((ed && (ed.t || ed.target || '')) || '');
                var si = (sid && nodeIndexById[sid] != null) ? nodeIndexById[sid] : -1;
                var ti = (tid && nodeIndexById[tid] != null) ? nodeIndexById[tid] : -1;
                var hasOvS0 = !!(sid && nodeOverrideById && nodeOverrideById[sid]);
                var hasOvT0 = !!(tid && nodeOverrideById && nodeOverrideById[tid]);
                var a = (si >= 0) ? (hasOvS0 ? nodeOverrideById[sid] : nodes[si].p) : null;
                var b = (ti >= 0) ? (hasOvT0 ? nodeOverrideById[tid] : nodes[ti].p) : null;
                var ax = a ? ((Number(a[0]) || 0) - cx) : 0;
                var ay = a ? ((Number(a[1]) || 0) - cy) : 0;
                var az = a ? ((Number(a[2]) || 0) - cz) : 0;
                var bx = b ? ((Number(b[0]) || 0) - cx) : 0;
                var by = b ? ((Number(b[1]) || 0) - cy) : 0;
                var bz = b ? ((Number(b[2]) || 0) - cz) : 0;
                var offS = (!hasOvS0 && nodeOffsetById && sid) ? nodeOffsetById[sid] : null;
                var offT = (!hasOvT0 && nodeOffsetById && tid) ? nodeOffsetById[tid] : null;
                if (offS) { ax += Number(offS.x) || 0; ay += Number(offS.y) || 0; }
                if (offT) { bx += Number(offT.x) || 0; by += Number(offT.y) || 0; }

                if (edgeLinePositions) {
                  var o = ei * 6;
                  edgeLinePositions[o + 0] = ax;
                  edgeLinePositions[o + 1] = ay;
                  edgeLinePositions[o + 2] = az;
                  edgeLinePositions[o + 3] = bx;
                  edgeLinePositions[o + 4] = by;
                  edgeLinePositions[o + 5] = bz;
                  if (edgeLineColors) {
                    var stroke = String((ed && ed.stroke) || '#9ca3af');
                    try { tmpColor2.set(stroke); } catch (e) { tmpColor2.set('#9ca3af'); }
                    edgeLineColors[o + 0] = tmpColor2.r;
                    edgeLineColors[o + 1] = tmpColor2.g;
                    edgeLineColors[o + 2] = tmpColor2.b;
                    edgeLineColors[o + 3] = tmpColor2.r;
                    edgeLineColors[o + 4] = tmpColor2.g;
                    edgeLineColors[o + 5] = tmpColor2.b;
                  }
                }

                tmpDir.set(bx - ax, by - ay, bz - az);
                var len = tmpDir.length();
                if (len < 1e-6) len = 1e-6;
                tmpDir.multiplyScalar(1 / len);
                tmpMid.set((ax + bx) * 0.5, (ay + by) * 0.5, (az + bz) * 0.5);
                tmpQuat2.setFromUnitVectors(tmpUp, tmpDir);

                var curvEdge = (ed && typeof ed.curvature === 'number' && isFinite(ed.curvature)) ? ed.curvature : 0;

                if (edgeCyl && curvEdge <= 0.001) {
                  var w = (ed && typeof ed.baseWidth === 'number' && isFinite(ed.baseWidth)) ? ed.baseWidth : 1;
                  if (w < 0.5) w = 0.5;
                  if (w > 5) w = 5;
                  tmpScale2.set(w, len, w);
                  tmpM2.compose(tmpMid, tmpQuat2, tmpScale2);
                  edgeCyl.setMatrixAt(cylI, tmpM2);
                  try { edgeCylEdgeIdxByInst[cylI] = ei; } catch (e0) {}
                  try { tmpColor2.set(String((ed && ed.stroke) || '#9ca3af')); } catch (e) { tmpColor2.set('#9ca3af'); }
                  if (edgeCyl.instanceColor) edgeCyl.instanceColor.setXYZ(cylI, tmpColor2.r, tmpColor2.g, tmpColor2.b);
                  cylI += 1;
                }

                var arrowLen = (ed && typeof ed.arrowLen === 'number' && isFinite(ed.arrowLen)) ? ed.arrowLen : 0;
                if (edgeArrows && arrowLen > 0) {
                  var rel = (ed && typeof ed.arrowRelPos === 'number' && isFinite(ed.arrowRelPos)) ? ed.arrowRelPos : 0.85;
                  if (rel < 0) rel = 0;
                  if (rel > 1) rel = 1;
                  var ax2 = ax + (bx - ax) * rel - tmpDir.x * arrowLen * 0.75;
                  var ay2 = ay + (by - ay) * rel - tmpDir.y * arrowLen * 0.75;
                  var az2 = az + (bz - az) * rel - tmpDir.z * arrowLen * 0.75;
                  tmpMid.set(ax2, ay2, az2);
                  tmpScale2.set(4, arrowLen, 4);
                  tmpM2.compose(tmpMid, tmpQuat2, tmpScale2);
                  edgeArrows.setMatrixAt(arrowI, tmpM2);
                  try { edgeArrowEdgeIdxByInst[arrowI] = ei; } catch (e1) {}
                  try { tmpColor2.set(String((ed && ed.arrowColor) || (ed && ed.stroke) || '#9ca3af')); } catch (e) { tmpColor2.set('#9ca3af'); }
                  if (edgeArrows.instanceColor) edgeArrows.instanceColor.setXYZ(arrowI, tmpColor2.r, tmpColor2.g, tmpColor2.b);
                  arrowI += 1;
                }
              }

              if (edgeLinesGeom && edgeLinePositions) {
                if (edgeLinesGeom.setPositions) {
                  edgeLinesGeom.setPositions(edgeLinePositions);
                  if (edgeLineColors && edgeLinesGeom.setColors) edgeLinesGeom.setColors(edgeLineColors);
                  try { edgeLinesGeom.computeBoundingSphere(); } catch (e) {}
                } else if (edgeLinesGeom.attributes && edgeLinesGeom.attributes.position) {
                  edgeLinesGeom.attributes.position.needsUpdate = true;
                  try { edgeLinesGeom.computeBoundingSphere(); } catch (e) {}
                }
              }
              if (edgeCyl) {
                edgeCyl.count = cylI;
                edgeCyl.instanceMatrix.needsUpdate = true;
                if (edgeCyl.instanceColor) edgeCyl.instanceColor.needsUpdate = true;
              }
              if (edgeArrows) {
                edgeArrows.count = arrowI;
                edgeArrows.instanceMatrix.needsUpdate = true;
                if (edgeArrows.instanceColor) edgeArrows.instanceColor.needsUpdate = true;
              }
            };

            var resize = function(){
              var r = root.getBoundingClientRect();
              var w = Math.max(1, Math.floor(r.width));
              var h = Math.max(1, Math.floor(r.height));
              var dpr = (typeof window !== 'undefined' && window.devicePixelRatio) ? window.devicePixelRatio : 1;
              if (!(dpr > 0) || !isFinite(dpr)) dpr = 1;
              dpr = Math.max(1, Math.min(2, dpr));
              renderer.setPixelRatio(dpr);
              renderer.setSize(w, h, false);
              camera.aspect = w / Math.max(1, h);
              camera.updateProjectionMatrix();
              try {
                if (edgeLinesMat `,`&& edgeLinesMat.resolution && edgeLinesMat.resolution.set) {
                  edgeLinesMat.resolution.set(w, h);
                }
              } catch (e) {}
            };

            var startedAt = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
            var raf = null;
            var geomDirty = true;
            mark3dGeometryDirty = function(){ geomDirty = true; };
            var render = function(now){
              raf = null;
              var tNow = (typeof now === 'number' && isFinite(now)) ? now : ((typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now());
              var tSec = (tNow - startedAt) / 1000;
              var vp = getViewport();
              var changed = false;
              try {
                var targetPos = controls && controls.target ? controls.target : new THREE.Vector3(0,0,0);
                var dist = camera.position.distanceTo(targetPos);
                var nearF = 0.0001;
                var farF = 200;
                var near = Math.max(1e-4, dist * nearF);
                var far = Math.max(near + 1, dist * farF);
                if (Math.abs(camera.near - near) > 1e-5 || Math.abs(camera.far - far) > 1e-3) {
                  camera.near = near;
                  camera.far = far;
                  camera.updateProjectionMatrix();
                  changed = true;
                }
              } catch (eClip) {}
              try {
                if (controls) {
                  try {
                    var wantAutoRotate = (payload3d && payload3d.autoRotate === true);
                    if (drag3d || (headerDrag && headerDrag.kind === 'webgl')) wantAutoRotate = false;
                    if (controls.autoRotate !== wantAutoRotate) controls.autoRotate = wantAutoRotate;
                  } catch (eAR) {}
                  changed = !!controls.update();
                } else {
                  var autoRotate = payload3d.autoRotate === true;
                  var autoRotateSpeed = (typeof payload3d.autoRotateSpeed === 'number' && isFinite(payload3d.autoRotateSpeed)) ? payload3d.autoRotateSpeed : 0.4;
                  var omega = (Math.PI * 2 / 60) * (autoRotate ? autoRotateSpeed : 0);
                  var ang = omega * tSec + yaw0 + rotateYaw;
                  var tilt = tiltX + rotateTilt;
                  if (!isFinite(tilt)) tilt = tiltX;
                  if (tilt < -1.25) tilt = -1.25;
                  if (tilt > 1.25) tilt = 1.25;
                  group.rotation.set(tilt, ang, 0);
                  changed = omega !== 0;
                }
              } catch (e0) { changed = true; }

              if (geomDirty) {
                geomDirty = false;
                updateGeometry();
              }

              try { if (particleCount > 0) updateParticles(tSec); } catch (eP) {}
              try { renderer.render(scene, camera); } catch (e5) {}

              try {
                var out = overlay.__kgWebglPosById || (overlay.__kgWebglPosById = {});
                var v = webglCanvas.__kgTmpProjectVec || (webglCanvas.__kgTmpProjectVec = new THREE.Vector3());
                for (var i = 0; i < nodes.length; i += 1) {
                  var nd = nodes[i];
                  var id = String((nd && nd.id) || '');
                  if (!id) continue;
                  var hasOv2 = !!(id && nodeOverrideById && nodeOverrideById[id]);
                  var p = hasOv2 ? nodeOverrideById[id] : ((nd && nd.p) ? nd.p : [0,0,0]);
                  var x = (Number(p[0]) || 0) - cx;
                  var y = (Number(p[1]) || 0) - cy;
                  var z = (Number(p[2]) || 0) - cz;
                  var off = (!hasOv2 && nodeOffsetById && id) ? nodeOffsetById[id] : null;
                  if (off) { x += Number(off.x) || 0; y += Number(off.y) || 0; }
                  v.set(x, y, z);
                  v.project(camera);
                  var sx = (v.x * 0.5 + 0.5) * vp.w;
                  var sy = (-v.y * 0.5 + 0.5) * vp.h;
                  var rec = out[id] || (out[id] = { x: 0, y: 0 });
                  rec.x = sx;
                  rec.y = sy;
                }
              } catch (e6) {}
              scheduleOverlayUpdate();

              var wantsAutoRotate = (payload3d && payload3d.autoRotate === true) && !(drag3d || (headerDrag && headerDrag.kind === 'webgl'));
              var needsLoop = changed || (controls && wantsAutoRotate) || particleCount > 0;
              if (needsLoop) schedule();
            };

            var schedule = function(){
              if (raf != null) return;
              raf = requestAnimationFrame(render);
            };
            scheduleWebgl3dFrame = schedule;
            schedule3dFrame = schedule;
            resizeCanvas3d = resize;

            updateGeometry();
            resize();
            schedule();

            webgl3dEnabled = true;
            webgl3d = { THREE: THREE, renderer: renderer, scene: scene, camera: camera, group: group, controls: controls };
            try { root.classList.add('kg-canvas3d'); } catch (e7) {}

            var accentColor = (function(){ var s=null; try { s=String(getComputedStyle(document.documentElement).getPropertyValue('--kg-canvas-accent')||'').trim(); } catch(e){} return s||'#2563eb'; })();
            function applyWebglSelectionVisuals(){
              try {
                var selNodeId = selectionState && selectionState.nodeId ? String(selectionState.nodeId || '') : '';
                var selEdgeId = selectionState && selectionState.edgeId ? String(selectionState.edgeId || '') : '';
                var selEdge = selEdgeId && edgeIndexById && edgeIndexById[selEdgeId] != null ? edges[edgeIndexById[selEdgeId]] : null;
                var edgeS = selEdge ? String((selEdge.s || selEdge.source || '') || '') : '';
                var edgeT = selEdge ? String((selEdge.t || selEdge.target || '') || '') : '';
                var selNeighbors = selNodeId && neighborsById[selNodeId] ? neighborsById[selNodeId] : null;

                var dimColor = new THREE.Color('#9ca3af');
                var accColor = new THREE.Color(accentColor);

                var isNodeEmph = function(id){
                  if (!id) return false;
                  if (selNodeId) return id === selNodeId || (selNeighbors && selNeighbors[id]);
                  if (selEdgeId) return id === edgeS || id === edgeT;
                  return true;
                };
                var idxC = 0;
                for (var ii = 0; ii < nodeCircle.length; ii += 1) {
                  var nIdx = nodeCircle[ii];
                  var nd = nodes[nIdx];
                  var id = String((nd && nd.id) || '');
                  var base = new THREE.Color(); try { base.set(String((nd && nd.fill) || '#888')); } catch(e) { base.set('#888'); }
                  var col = (!selNodeId && !selEdgeId) ? base : isNodeEmph(id) ? (id === selNodeId || id === edgeS || id === edgeT ? accColor : base) : dimColor;
                  if (instCircle.instanceColor) instCircle.instanceColor.setXYZ(idxC, col.r, col.g, col.b);
                  idxC += 1;
                }
                for (var ir=0; ir<nodeRect.length; ir+=1) { var ndR=nodes[nodeRect[ir]]; var idR=String((ndR&&ndR.id)||''); var baseR=new THREE.Color(); try{baseR.set(String((ndR&&ndR.fill)||'#888'));}catch(e){baseR.set('#888');} var colR=(!selNodeId && !selEdgeId)?baseR:isNodeEmph(idR)?(idR===selNodeId||idR===edgeS||idR===edgeT?accColor:baseR):dimColor; if (instRect.instanceColor) instRect.instanceColor.setXYZ(ir, colR.r, colR.g, colR.b); }
                for (var idm=0; idm<nodeDiamond.length; idm+=1) { var ndD=nodes[nodeDiamond[idm]]; var idD=String((ndD&&ndD.id)||''); var baseD=new THREE.Color(); try{baseD.set(String((ndD&&ndD.fill)||'#888'));}catch(e){baseD.set('#888');} var colD=(!selNodeId && !selEdgeId)?baseD:isNodeEmph(idD)?(idD===selNodeId||idD===edgeS||idD===edgeT?accColor:baseD):dimColor; if (instDiamond.instanceColor) instDiamond.instanceColor.setXYZ(idm, colD.r, colD.g, colD.b); }
                for (var ih=0; ih<nodeHex.length; ih+=1) { var ndH=nodes[nodeHex[ih]]; var idH=String((ndH&&ndH.id)||''); var baseH=new THREE.Color(); try{baseH.set(String((ndH&&ndH.fill)||'#888'));}catch(e){baseH.set('#888');} var colH=(!selNodeId && !selEdgeId)?baseH:isNodeEmph(idH)?(idH===selNodeId||idH===edgeS||idH===edgeT?accColor:baseH):dimColor; if (instHex.instanceColor) instHex.instanceColor.setXYZ(ih, colH.r, colH.g, colH.b); }
                if (instCircle.instanceColor) instCircle.instanceColor.needsUpdate = true;
                if (instRect.instanceColor) instRect.instanceColor.needsUpdate = true;
                if (instDiamond.instanceColor) instDiamond.instanceColor.needsUpdate = true;
                if (instHex.instanceColor) instHex.instanceColor.needsUpdate = true;

                if (selEdgeId) {
                  var dimE = new THREE.Color('#6b7280');
                  if (edgeLineColors) {
                    for (var ei = 0; ei < edges.length; ei += 1) {
                      var ed = edges[ei];
                      if (!ed) continue;
                      var isSel = String(ed.id || '') === selEdgeId;
                      var col = isSel ? accColor : dimE;
                      var o = ei * 6;
                      if (o + 5 < edgeLineColors.length) {
                        edgeLineColors[o+0]=col.r; edgeLineColors[o+1]=col.g; edgeLineColors[o+2]=col.b;
                        edgeLineColors[o+3]=col.r; edgeLineColors[o+4]=col.g; edgeLineColors[o+5]=col.b;
                      }
                    }
                    try { if (edgeLinesGeom && edgeLinesGeom.setColors) edgeLinesGeom.setColors(edgeLineColors); } catch (e0) {}
                  }
                  if (edgeCyl && edgeCyl.instanceColor) {
                    for (var i0 = 0; i0 < edgeCyl.count; i0 += 1) {
                      var ei0 = edgeCylEdgeIdxByInst && edgeCylEdgeIdxByInst[i0] != null ? edgeCylEdgeIdxByInst[i0] : -1;
                      var ed0 = (ei0 >= 0) ? edges[ei0] : null;
                      var isSel0 = ed0 && String(ed0.id || '') === selEdgeId;
                      var col0 = isSel0 ? accColor : dimE;
                      edgeCyl.instanceColor.setXYZ(i0, col0.r, col0.g, col0.b);
                    }
                    edgeCyl.instanceColor.needsUpdate = true;
                  }
                  if (edgeArrows && edgeArrows.instanceColor) {
                    for (var i1 = 0; i1 < edgeArrows.count; i1 += 1) {
                      var ei1 = edgeArrowEdgeIdxByInst && edgeArrowEdgeIdxByInst[i1] != null ? edgeArrowEdgeIdxByInst[i1] : -1;
                      var ed1 = (ei1 >= 0) ? edges[ei1] : null;
                      var isSel1 = ed1 && String(ed1.id || '') === selEdgeId;
                      var col1 = isSel1 ? accColor : dimE;
                      edgeArrows.instanceColor.setXYZ(i1, col1.r, col1.g, col1.b);
                    }
                    edgeArrows.instanceColor.needsUpdate = true;
                  }
                  if (edgeCurves && edgeCurves.length) {
                    for (var c = 0; c < edgeCurves.length; c += 1) {
                      var it = edgeCurves[c];
                      if (!it || !it.mesh || !it.mesh.material) continue;
                      var edc = edges[it.ei];
                      var isSel2 = edc && String(edc.id || '') === selEdgeId;
                      try { it.mesh.material.color = new THREE.Color(isSel2 ? accentColor : '#6b7280'); } catch (e2) {}
                    }
                  }
                }
              } catch (eSel) {}
            }
            try { applyWebglSelectionVisuals(); } catch (eInitSel) {}
            try { scheduleWebgl3dFrame(); } catch (eSched) {}
            try { 
              var origSetSelection = setSelection;
              setSelection = function(next){ origSetSelection(next); try { applyWebglSelectionVisuals(); scheduleWebgl3dFrame(); } catch(e){} };
            } catch (eHook) {}

            try {
              var raycaster = new THREE.Raycaster();
              var ndc = new THREE.Vector2();
              var drag3d = null;
              var dragJustEndedAt = 0;
              function setNdcFromPointerEvent(e){
                var r = webglCanvas.getBoundingClientRect();
                var w = Math.max(1, r.width);
                var h = Math.max(1, r.height);
                var sx = (e.clientX - r.left);
                var sy = (e.clientY - r.top);
                ndc.x = (sx / w) * 2 - 1;
                ndc.y = -((sy / h) * 2 - 1);
                return { sx: sx, sy: sy, w: w, h: h };
              }
              function pickNodeByRay(){
                var best = null;
                var bestDist = 1e18;
                function check(mesh, list){
                  if (!mesh || !list || list.length === 0) return;
                  var hits = null;
                  try { hits = raycaster.intersectObject(mesh, false); } catch (e) { hits = null; }
                  if (!hits || !hits.length) return;
                  var h = hits[0];
                  var iid = (typeof h.instanceId === 'number') ? h.instanceId : -1;
                  if (iid < 0 || iid >= list.length) return;
                  var nodeI = list[iid];
                  var nd = nodes[nodeI];
                  var id = String((nd && nd.id) || '');
                  if (!id) return;
                  if (h.distance < bestDist) {
                    bestDist = h.distance;
                    best = { id: id, nodeIndex: nodeI };
                  }
                }
                check(instCircle, nodeCircle);
                check(instRect, nodeRect);
                check(instDiamond, nodeDiamond);
                check(instHex, nodeHex);
                return best;
              }

              function pickNodeByScreenDistance(px, py){
                try {
                  var mp = overlay && overlay.__kgWebglPosById ? overlay.__kgWebglPosById : null;
                  if (!mp) return null;
                  var bestId = '';
                  var bestD = 1e18;
                  var r = 24;
                  var r2 = r * r;
                  for (var ni = 0; ni < nodes.length; ni += 1) {
                    var n = nodes[ni];
                    if (!n) continue;
                    var id = String(n.id || '');
                    if (!id) continue;
                    var p = mp[id];
                    if (!p) continue;
                    var dx = (Number(p.x) || 0) - px;
                    var dy = (Number(p.y) || 0) - py;
                    var d2 = dx * dx + dy * dy;
                    if (d2 <= r2 && d2 < bestD) {
                      bestD = d2;
                      bestId = id;
                    }
                  }
                  if (!bestId) return null;
                  var idx = (nodeIndexById && nodeIndexById[bestId] != null) ? nodeIndexById[bestId] : -1;
                  return { id: bestId, nodeIndex: idx };
                } catch (e) { return null; }
              }

              function pickEdgeByRay(){
                try {
                  if (edgeCurveMeshes && edgeCurveMeshes.length) {
                    var hitsC = raycaster.intersectObjects(edgeCurveMeshes, false);
                    if (hitsC && hitsC.length) {
                      var obj = hitsC[0].object;
                      var ei = obj && obj.userData && typeof obj.userData.ei === 'number' ? obj.userData.ei : -1;
                      if (ei >= 0 && ei < edges.length) {
                        var ed = edges[ei];
                        var id = String((ed && ed.id) || '');
                        if (id) return { id: id, edgeIndex: ei };
                      }
                    }
                  }
                } catch (e0) {}

                try {
                  if (edgeCyl) {
                    var hitsE = raycaster.intersectObject(edgeCyl, false);
                    if (hitsE && hitsE.length) {
                      var h = hitsE[0];
                      var iid = (typeof h.instanceId === 'number') ? h.instanceId : -1;
                      var ei2 = (iid >= 0 && edgeCylEdgeIdxByInst && edgeCylEdgeIdxByInst[iid] != null) ? edgeCylEdgeIdxByInst[iid] : -1;
                      if (ei2 >= 0 && ei2 < edges.length) {
                        var ed2 = edges[ei2];
                        var id2 = String((ed2 && ed2.id) || '');
                        if (id2) return { id: id2, edgeIndex: ei2 };
                      }
                    }
                  }
                } catch (e1) {}

                try {
                  if (edgeArrows) {
                    var hitsA = raycaster.intersectObject(edgeArrows, false);
                    if (hitsA && hitsA.length) {
                      var h2 = hitsA[0];
                      var iid2 = (typeof h2.instanceId === 'number') ? h2.instanceId : -1;
                      var ei3 = (iid2 >= 0 && edgeArrowEdgeIdxByInst && edgeArrowEdgeIdxByInst[iid2] != null) ? edgeArrowEdgeIdxByInst[iid2] : -1;
                      if (ei3 >= 0 && ei3 < edges.length) {
                        var ed3 = edges[ei3];
                        var id3 = String((ed3 && ed3.id) || '');
                        if (id3) return { id: id3, edgeIndex: ei3 };
                      }
                    }
                  }
                } catch (e2) {}

                return null;
              }

              function pickEdgeByScreenDistance(px, py){
                try {
                  var mp = overlay && overlay.__kgWebglPosById ? overlay.__kgWebglPosById : null;
                  if (!mp) return null;
                  var bestId = '';
                  var bestD = 1e18;
                  for (var ei = 0; ei < edges.length; ei += 1) {
                    var ed = edges[ei];
                    if (!ed) continue;
                    var sid = String((ed.s || ed.source || '') || '');
                    var tid = String((ed.t || ed.target || '') || '');
                    if (!sid || !tid) continue;
                    var a = mp[sid];
                    var b = mp[tid];
                    if (!a || !b) continue;
                    var ax = Number(a.x) || 0;
                    var ay = Number(a.y) || 0;
                    var bx = Number(b.x) || 0;
                    var by = Number(b.y) || 0;
                    var vx = bx - ax;
                    var vy = by - ay;
                    var wx = px - ax;
                    var wy = py - ay;
                    var vv = vx * vx + vy * vy;
                    var t = vv > 1e-9 ? (wx * vx + wy * vy) / vv : 0;
                    if (t < 0) t = 0;
                    if (t > 1) t = 1;
                    var cx0 = ax + vx * t;
                    var cy0 = ay + vy * t;
                    var dx = px - cx0;
                    var dy = py - cy0;
                    var d2 = dx * dx + dy * dy;
                    if (d2 < bestD) {
                      bestD = d2;
                      bestId = String((ed && ed.id) || '');
                    }
                  }
                  if (bestId && bestD < 14 * 14) {
                    var ei0 = edgeIndexById && edgeIndexById[bestId] != null ? edgeIndexById[bestId] : -1;
                    if (ei0 >= 0) return { id: bestId, edgeIndex: ei0 };
                  }
                } catch (e) {}
                return null;
              }

              webglCanvas.addEventListener('pointerdown', function(e){
                try {
                  if (!e || e.button !== 0) return;
                  if (panHeld || pointerMode === 'pan' || e.shiftKey) return;
                  var sp = setNdcFromPointerEvent(e);
                  raycaster.setFromCamera(ndc, camera);
                  var hit = pickNodeByRay() || pickNodeByScreenDistance(sp.sx, sp.sy);
                  if (hit) {
                    try { setSelection({ nodeId: hit.id, edgeId: '' }); } catch (e0) {}

                    var p0 = (nodeOverrideById && nodeOverrideById[hit.id]) ? nodeOverrideById[hit.id] : ((nodes[hit.nodeIndex] && nodes[hit.nodeIndex].p) ? nodes[hit.nodeIndex].p : [0,0,0]);
                    var x0 = (Number(p0[0]) || 0) - cx;
                    var y0 = (Number(p0[1]) || 0) - cy;
                    var z0 = (Number(p0[2]) || 0) - cz;
                    var off0 = (!nodeOverrideById[hit.id] && nodeOffsetById && hit.id) ? nodeOffsetById[hit.id] : null;
                    if (off0) { x0 += Number(off0.x) || 0; y0 += Number(off0.y) || 0; }
                    var world = new THREE.Vector3(x0, y0, z0);
                    var n = new THREE.Vector3();
                    camera.getWorldDirection(n);
                    var plane = new THREE.Plane();
                    plane.setFromNormalAndCoplanarPoint(n, world);
                    var hit0 = new THREE.Vector3();
                    var ok = raycaster.ray.intersectPlane(plane, hit0);
                    if (!ok) return;
                    drag3d = { kind: 'node', id: hit.id, pointerId: e.pointerId, plane: plane, hit0: hit0, node0: world };
                    try { if (controls) controls.enabled = false; } catch (e1) {}
                    try { webglCanvas.setPointerCapture(e.pointerId); } catch (e2) {}
                    try { e.preventDefault(); e.stopPropagation(); } catch (e3) {}
                    return;
                  }

                  var eHit = pickEdgeByRay();
                  if (!eHit) {
                    var rr = webglCanvas.getBoundingClientRect();
                    var sx2 = (e.clientX - rr.left);
                    var sy2 = (e.clientY - rr.top);
                    eHit = pickEdgeByScreenDistance(sx2, sy2);
                  }
                  if (!eHit) return;
                  var ed = edges[eHit.edgeIndex];
                  if (!ed) return;
                  var sid = String((ed.s || ed.source || '') || '');
                  var tid = String((ed.t || ed.target || '') || '');
                  if (!sid || !tid) return;
                  try { setSelection({ nodeId: '', edgeId: eHit.id }); } catch (e0) {}

                  var sI = nodeIndexById[sid];
                  var tI = nodeIndexById[tid];
                  if (sI == null || tI == null) return;
                  var sp0 = (nodeOverrideById && nodeOverrideById[sid]) ? nodeOverrideById[sid] : (nodes[sI] && nodes[sI].p ? nodes[sI].p : [0,0,0]);
                  var tp0 = (nodeOverrideById && nodeOverrideById[tid]) ? nodeOverrideById[tid] : (nodes[tI] && nodes[tI].p ? nodes[tI].p : [0,0,0]);
                  var sw0 = new THREE.Vector3((Number(sp0[0]) || 0) - cx, (Number(sp0[1]) || 0) - cy, (Number(sp0[2]) || 0) - cz);
                  var tw0 = new THREE.Vector3((Number(tp0[0]) || 0) - cx, (Number(tp0[1]) || 0) - cy, (Number(tp0[2]) || 0) - cz);
                  var offS = (!nodeOverrideById[sid] && nodeOffsetById && sid) ? nodeOffsetById[sid] : null;
                  var offT = (!nodeOverrideById[tid] && nodeOffsetById && tid) ? nodeOffsetById[tid] : null;
                  if (offS) sw0.add(new THREE.Vector3(Number(offS.x) || 0, Number(offS.y) || 0, 0));
                  if (offT) tw0.add(new THREE.Vector3(Number(offT.x) || 0, Number(offT.y) || 0, 0));
                  var mid0 = sw0.clone().add(tw0).multiplyScalar(0.5);
                  var n2 = new THREE.Vector3();
                  camera.getWorldDirection(n2);
                  var plane2 = new THREE.Plane();
                  plane2.setFromNormalAndCoplanarPoint(n2, mid0);
                  var hit02 = new THREE.Vector3();
                  var ok2 = raycaster.ray.intersectPlane(plane2, hit02);
                  if (!ok2) return;
                  drag3d = { kind: 'edge', id: eHit.id, pointerId: e.pointerId, plane: plane2, hit0: hit02, mid0: mid0, s: sid, t: tid, s0: sw0, t0: tw0 };
                  try { if (controls) controls.enabled = false; } catch (e1) {}
                  try { webglCanvas.setPointerCapture(e.pointerId); } catch (e2) {}
                  try { e.preventDefault(); e.stopPropagation(); } catch (e3) {}
                } catch (err) {}
              }, { passive: false, capture: true });

              webglCanvas.addEventListener('pointermove', function(e){
                try {
                  if (!e) return;
                  if (!drag3d) {
                    setNdcFromPointerEvent(e);
                    raycaster.setFromCamera(ndc, camera);
                    var rr0 = webglCanvas.getBoundingClientRect();
                    var sx0 = (e.clientX - rr0.left);
                    var sy0 = (e.clientY - rr0.top);
                    var hit = pickNodeByRay() || pickNodeByScreenDistance(sx0, sy0);
                    if (hit) {
                      showTip({ key: 'n:' + hit.id, x: e.clientX, y: e.clientY, html: buildNodeTipHtml(hit.id) });
                      return;
                    }
                    var sx2 = sx0;
                    var sy2 = sy0;
                    var eHit = pickEdgeByRay() || pickEdgeByScreenDistance(sx2, sy2);
                    if (eHit) {
                      showTip({ key: 'e:' + eHit.id, x: e.clientX, y: e.clientY, html: buildEdgeTipHtml(eHit.id) });
                      return;
                    }
                    hideTip();
                    return;
                  }
                  if (drag3d.pointerId !== e.pointerId) return;
                  if (!drag3d.plane || !drag3d.hit0) return;
                  setNdcFromPointerEvent(e);
                  raycaster.setFromCamera(ndc, camera);
                  var hit = drag3d.tmp || (drag3d.tmp = new THREE.Vector3());
                  var ok = raycaster.ray.intersectPlane(drag3d.plane, hit);
                  if (!ok) return;
                  var hit0 = drag3d.hit0;
                  var dxW = hit.x - hit0.x;
                  var dyW = hit.y - hit0.y;
                  var dzW = hit.z - hit0.z;
                  var delta = drag3d.delta || (drag3d.delta = new THREE.Vector3());
                  delta.set(dxW, dyW, dzW);
                  if (drag3d.kind === 'edge') {
                    var ns = drag3d.tmpS || (drag3d.tmpS = new THREE.Vector3());
                    var nt = drag3d.tmpT || (drag3d.tmpT = new THREE.Vector3());
                    ns.copy(drag3d.s0).add(delta);
                    nt.copy(drag3d.t0).add(delta);
                    nodeOverrideById[drag3d.s] = [ns.x + cx, ns.y + cy, ns.z + cz];
                    nodeOverrideById[drag3d.t] = [nt.x + cx, nt.y + cy, nt.z + cz];
                    try { writePayload3dNodePos(drag3d.s, ns.x + cx, ns.y + cy, ns.z + cz); } catch (eP0) {}
                    try { writePayload3dNodePos(drag3d.t, nt.x + cx, nt.y + cy, nt.z + cz); } catch (eP1) {}
                  } else {
                    if (!drag3d.node0) return;
                    var nextWorld = drag3d.tmpN || (drag3d.tmpN = new THREE.Vector3());
                    nextWorld.set(drag3d.node0.x + dxW, drag3d.node0.y + dyW, drag3d.node0.z + dzW);
                    nodeOverrideById[drag3d.id] = [nextWorld.x + cx, nextWorld.y + cy, nextWorld.z + cz];
                    try { writePayload3dNodePos(drag3d.id, nextWorld.x + cx, nextWorld.y + cy, nextWorld.z + cz); } catch (eP2) {}
                  }
                  try { if (mark3dGeometryDirty) mark3dGeometryDirty(); } catch (e0) {}
                  try { scheduleWebgl3dFrame(); } catch (e1) {}
                  try { scheduleOverlayUpdate(); } catch (e2) {}
                  try { e.preventDefault(); e.stopPropagation(); } catch (e3) {}
                } catch (err) {}
              }, { passive: false });

              function endDrag3d(pointerId){
                if (!drag3d || drag3d.pointerId !== pointerId) return;
                drag3d = null;
                dragJustEndedAt = Date.now();
                try { if (controls) controls.enabled = true; } catch (e) {}
                try { hideTip(); } catch (e) {}
              }

              webglCanvas.addEventListener('pointerup', function(e){
                try { endDrag3d(e.pointerId); } catch (err) {}
              }, { passive: true });
              webglCanvas.addEventListener('pointercancel', function(e){
                try { endDrag3d(e.pointerId); } catch (err) {}
              }, { passive: true });

              webglCanvas.addEventListener('click', function(e){
                try {
                  if (!e) return;
                  if (Date.now() - dragJustEndedAt < 80) return;
                  setNdcFromPointerEvent(e);
                  raycaster.setFromCamera(ndc, camera);
                  var hit = pickNodeByRay();
                  if (hit) {
                    setSelection({ nodeId: hit.id, edgeId: '' });
                    return;
                  }
                  var rr = webglCanvas.getBoundingClientRect();
                  var sx2 = (e.clientX - rr.left);
                  var sy2 = (e.clientY - rr.top);
                  var eHit = pickEdgeByRay() || pickEdgeByScreenDistance(sx2, sy2);
                  if (eHit) {
                    setSelection({ nodeId: '', edgeId: eHit.id });
                    return;
                  }
                } catch (err) {}
              }, { passive: true });

              webglCanvas.addEventListener('pointerleave', function(){
                try { hideTip(); } catch (e) {}
              }, { passive: true });
            } catch (eRay) {}
            return true;
          } catch (err) {
            return false;
          }
        };

        try {
          var ready = window.__kgThreeReady;
          if (ready && typeof ready.then === 'function') {
            ready.then(function(bundle){
              if (webgl3dEnabled || webglCanvas.__kg3dCanvasInstalled) return;
              if (startWebgl(bundle)) {
                webglCanvas.__kg3dCanvasInstalled = true;
                return;
              }
            });
          }
        } catch (e) {}

        var ctx = null;
        try { ctx = webglCanvas.getContext('2d', { alpha: false, desynchronized: true }); } catch (e) { ctx = null; }
        if (!ctx) return false;
        canvas3dCtx = ctx;
        canvas3dEnabled = true;
        try { root.classList.add('kg-canvas3d'); } catch (e) {}
        webglCanvas.__kg3dCanvasInstalled = true;

        var nodes = Array.isArray(payload3d.nodes) ? payload3d.nodes : [];
        var edges = Array.isArray(payload3d.edges) ? payload3d.edges : [];
        var threeEdgeRenderer = String(payload3d.threeEdgeRenderer || 'mesh') === 'shaderLine' ? 'shaderLine' : 'mesh';
        var shaderLineWidthPx = (typeof payload3d.shaderLineWidthPx === 'number' && isFinite(payload3d.shaderLineWidthPx)) ? payload3d.shaderLineWidthPx : 2;
        if (shaderLineWidthPx < 0.5) shaderLineWidthPx = 0.5;
        if (shaderLineWidthPx > 20) shaderLineWidthPx = 20;

        var cameraZ = (typeof payload3d.cameraZ === 'number' && isFinite(payload3d.cameraZ)) ? payload3d.cameraZ : 220;
        var tiltX = (typeof payload3d.tiltX === 'number' && isFinite(payload3d.tiltX)) ? payload3d.tiltX : 0;
        var yaw0 = (typeof payload3d.yaw0 === 'number' && isFinite(payload3d.yaw0)) ? payload3d.yaw0 : 0;
        var cx = (typeof payload3d.cx === 'number' && isFinite(payload3d.cx)) ? payload3d.cx : 0;
        var cy = (typeof payload3d.cy === 'number' && isFinite(payload3d.cy)) ? payload3d.cy : 0;
        var cz = (typeof payload3d.cz === 'number' && isFinite(payload3d.cz)) ? payload3d.cz : 0;

        var minZ = (typeof payload3d.minZ === 'number' && isFinite(payload3d.minZ)) ? payload3d.minZ : -1;
        var maxZ = (typeof payload3d.maxZ === 'number' && isFinite(payload3d.maxZ)) ? payload3d.maxZ : 1;
        var zSpan = Math.max(1e-6, maxZ - minZ);
        var depthOpacityMin = (typeof payload3d.depthOpacityMin === 'number' && isFinite(payload3d.depthOpacityMin)) ? payload3d.depthOpacityMin : 0.35;
        var depthOpacityMax = (typeof payload3d.depthOpacityMax === 'number' && isFinite(payload3d.depthOpacityMax)) ? payload3d.depthOpacityMax : 1;
        if (depthOpacityMin < 0) depthOpacityMin = 0;
        if (depthOpacityMin > 1) depthOpacityMin = 1;
        if (depthOpacityMax < depthOpacityMin) depthOpacityMax = depthOpacityMin;
        if (depthOpacityMax > 1) depthOpacityMax = 1;
        var depthOpacity = function(z){ var t = (Number(z) - minZ) / zSpan; if (!isFinite(t)) t = 0; t = Math.max(0, Math.min(1, t)); return depthOpacityMin + (depthOpacityMax - depthOpacityMin) * t; };

        var nodeStrokeAlpha = (typeof payload3d.nodeStrokeAlpha === 'number' && isFinite(payload3d.nodeStrokeAlpha)) ? payload3d.nodeStrokeAlpha : 1;

        var nodeOffsetById = (svg && svg.__kgNodeOffsetById) ? svg.__kgNodeOffsetById : (svg ? (svg.__kgNodeOffsetById || (svg.__kgNodeOffsetById = {})) : {});
        var nodeOverrideById = (overlay && overlay.__kgNodeOverrideById) ? overlay.__kgNodeOverrideById : (overlay ? (overlay.__kgNodeOverrideById || (overlay.__kgNodeOverrideById = Object.create(null))) : Object.create(null));

        var mediaSet = Object.create(null);
        try {
          if (mediaNodes && mediaNodes.length) {
            for (var mi = 0; mi < mediaNodes.length; mi += 1) {
              var mid = String(mediaNodes[mi].id || '');
              if (mid) mediaSet[mid] = 1;
            }
          }
        } catch (e0) {}

        var neighborsById = Object.create(null);
        try {
          for (var eiN = 0; eiN < edges.length; eiN += 1) {
            var eN = edges[eiN];
            var sN = String((eN && (eN.s || eN.source || '')) || '');
            var tN = String((eN && (eN.t || eN.target || '')) || '');
            if (!sN || !tN) continue;
            (neighborsById[sN] || (neighborsById[sN] = Object.create(null)))[tN] = 1;
            (neighborsById[tN] || (neighborsById[tN] = Object.create(null)))[sN] = 1;
          }
        } catch (e1) {}

        var motion = (typeof payload3d.motion === 'number' && isFinite(payload3d.motion)) ? Math.max(0, Math.min(2, payload3d.motion)) : 1;
        var hash01 = function(s){
          try {
            var str = String(s || '');
            var h = 2166136261;
            for (var i = 0; i < str.length; i += 1) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
            return ((h >>> 0) % 1000) / 1000;
          } catch (e) {
            return 0;
          }
        };
        var TAU = Math.PI * 2;
        var clamp = function(v, lo, hi){ if (!isFinite(v)) return lo; return Math.max(lo, Math.min(hi, v)); };
        var nodeMotionById = Object.create(null);
        try {
          for (var mi2 = 0; mi2 < nodes.length; mi2 += 1) {
            var ndM = nodes[mi2];
            var idM = String((ndM && ndM.id) || '');
            if (!idM) continue;
            var baseR0 = (ndM && typeof ndM.baseR === 'number' && isFinite(ndM.baseR)) ? ndM.baseR : 10;
            var amp0 = clamp(baseR0 * 0.08, 0.3, 6) * motion;
            var seed0 = hash01(idM) * TAU;
            nodeMotionById[idM] = { amp: amp0, seed: seed0, fx: hash01(idM + ':fx'), fy: hash01(idM + ':fy'), fz: hash01(idM + ':fz') };
          }
        } catch (e2) {}

        var bg = null;
        try { bg = String(getComputedStyle(document.documentElement).getPropertyValue('--kg-canvas-bg') || '').trim(); } catch (e) { bg = null; }
        if (!bg) bg = '#ffffff';

        var parseColor = function(raw){
          var s = String(raw || '').trim();
          if (!s) return [0,0,0];
          var m = s.match(/^rgb\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i);
          if (m) return [Math.max(0,Math.min(255,Number(m[1]))),Math.max(0,Math.min(255,Number(m[2]))),Math.max(0,Math.min(255,Number(m[3])))]
          var mh = s.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
          if (mh) {
            var hex = mh[1];
            if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
            var r = parseInt(hex.slice(0,2),16);
            var g = parseInt(hex.slice(2,4),16);
            var b = parseInt(hex.slice(4,6),16);
            return [r,g,b];
          }
          return [0,0,0];
        };

        var rotateY = function(p,a){ var x=p[0],y=p[1],z=p[2]; var c=Math.cos(a),s=Math.sin(a); return [x*c+z*s,y,-x*s+z*c]; };
        var rotateX = function(p,a){ var x=p[0],y=p[1],z=p[2]; var c=Math.cos(a),s=Math.sin(a); return [x,y*c-z*s,y*s+z*c]; };
        var project = function(p){ var z=p[2]; var denom=Math.max(1e-3,cameraZ-z); var k=cameraZ/denom; return { x:p[0]*k, y:p[1]*k, k:k, z:z }; };

        resizeCanvas3d = function(){
          try {
            var r = root.getBoundingClientRect();
            var w = Math.max(1, Math.floor(r.width));
            var h = Math.max(1, Math.floor(r.height));
            var dpr = (typeof window !== 'undefined' && window.devicePixelRatio) ? window.devicePixelRatio : 1;
            if (!(dpr > 0) || !isFinite(dpr)) dpr = 1;
            dpr = Math.max(1, Math.min(3, dpr));
            canvas3dDpr = dpr;
            webglCanvas.width = Math.max(1, Math.floor(w * dpr));
            webglCanvas.height = Math.max(1, Math.floor(h * dpr));
            webglCanvas.style.width = w + 'px';
            webglCanvas.style.height = h + 'px';
          } catch (e) {}
        };

        var nodeProjById = Object.create(null);
        var nodeRotById = Object.create(null);
        var canvas3dNeedsLoop = false;

        var anyEdgeParticles = false;
        try {
          for (var epi = 0; epi < edges.length; epi += 1) {
            var edp = edges[epi];
            var pc = (edp && typeof edp.particles === 'number' && isFinite(edp.particles)) ? Math.max(0, Math.min(24, Math.floor(edp.particles))) : 0;
            if (pc > 0) { anyEdgeParticles = true; break; }
          }
        } catch (e) { anyEdgeParticles = false; }

        renderCanvas3d = function(now){
          if (!canvas3dEnabled || !canvas3dCtx) return;
          var tNow = (typeof now === 'number' && isFinite(now)) ? now : ((typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now());
          var tSec = (tNow - (webglCanvas.__kgStartedAt || (webglCanvas.__kgStartedAt = tNow))) / 1000;
          var autoRotate = payload3d.autoRotate === true;
          var autoRotateSpeed = (typeof payload3d.autoRotateSpeed === 'number' && isFinite(payload3d.autoRotateSpeed)) ? payload3d.autoRotateSpeed : 0.4;
          var omega = (Math.PI * 2 / 60) * (autoRotate ? autoRotateSpeed : 0);
          var dragging3d = !!canvas3dDrag || !!(headerDrag && headerDrag.kind === 'canvas3d');
          if (dragging3d) omega = 0;
          var ang = omega * tSec + yaw0 + rotateYaw;
          var tilt = tiltX + rotateTilt;
          if (dragging3d) {
            try {
              var a0 = (canvas3dDrag && isFinite(canvas3dDrag.angFixed)) ? Number(canvas3dDrag.angFixed) : (headerDrag && headerDrag.kind === 'canvas3d' && isFinite(headerDrag.angFixed) ? Number(headerDrag.angFixed) : NaN);
              var t0 = (canvas3dDrag && isFinite(canvas3dDrag.tiltFixed)) ? Number(canvas3dDrag.tiltFixed) : (headerDrag && headerDrag.kind === 'canvas3d' && isFinite(headerDrag.tiltFixed) ? Number(headerDrag.tiltFixed) : NaN);
              if (isFinite(a0)) ang = a0;
              if (isFinite(t0)) tilt = t0;
            } catch (eFix) {}
          }
          if (!isFinite(tilt)) tilt = tiltX;
          if (tilt < -1.25) tilt = -1.25;
          if (tilt > 1.25) tilt = 1.25;

          var ctx2 = canvas3dCtx;
          var cw = webglCanvas.width || 1;
          var ch = webglCanvas.height || 1;
          try {
            ctx2.setTransform(1,0,0,1,0,0);
            ctx2.clearRect(0,0,cw,ch);
            ctx2.fillStyle = bg;
            ctx2.fillRect(0,0,cw,ch);
          } catch (e) {}

          var base = svgBase;
          var sx = (base && isFinite(base.sx) && base.sx > 0) ? base.sx : 1;
          var sy = (base && isFinite(base.sy) && base.sy > 0) ? base.sy : 1;
          var ox = (base && isFinite(base.ox)) ? base.ox : 0;
          var oy = (base && isFinite(base.oy)) ? base.oy : 0;
          var kView = (state && isFinite(state.k) && state.k > 0) ? state.k : 1;
          var tx = (state && isFinite(state.x)) ? state.x : 0;
          var ty = (state && isFinite(state.y)) ? state.y : 0;
          try {
            ctx2.setTransform(kView * sx * canvas3dDpr, 0, 0, kView * sy * canvas3dDpr, (tx + ox) * canvas3dDpr, (ty + oy) * canvas3dDpr);
            ctx2.lineCap = 'round';
            ctx2.lineJoin = 'round';
          } catch (e) {}

          var rotateInteracting = !!rotateDrag || !!canvas3dDrag || !!(headerDrag && headerDrag.kind === 'canvas3d');
          var draggedId = (canvas3dDrag && canvas3dDrag.kind === 'node') ? String(canvas3dDrag.id || '') : '';

          for (var ni = 0; ni < nodes.length; ni += 1) {
            var nd = nodes[ni];
            var id = String((nd && nd.id) || '');
            if (!id) continue;
            var isMedia = !!(mediaSet && mediaSet[id]);

            var hasOv = !!(nodeOverrideById && nodeOverrideById[id]);
            var p0 = hasOv ? nodeOverrideById[id] : ((nd && nd.p) ? nd.p : [0,0,0]);
            var mp = nodeMotionById[id];
            var wobX = 0, wobY = 0, wobZ = 0;
            if (!isMedia && !hasOv && !rotateInteracting && mp && mp.amp > 1e-6 && (!draggedId || draggedId !== id)) {
              var wobScale = 1 / (kView * sx);
              var a0 = mp.amp * wobScale;
              wobX = Math.sin(tSec * (0.65 + 0.7 * mp.fx) + mp.seed) * a0;
              wobY = Math.cos(tSec * (0.72 + 0.7 * mp.fy) + 1.31 * mp.seed) * a0;
              wobZ = Math.sin(tSec * (0.48 + 0.45 * mp.fz) + 2.17 * mp.seed) * (0.35 * a0);
            }
            var x0 = (Number(p0[0]) || 0) - cx + wobX;
            var y0 = (Number(p0[1]) || 0) - cy + wobY;
            var z0 = (Number(p0[2]) || 0) - cz + wobZ;
            var r1 = rotateY([x0,y0,z0], ang);
            var r2 = rotateX(r1, tilt);
            var rotRec = nodeRotById[id] || (nodeRotById[id] = { x: 0, y: 0, z: 0 });
            rotRec.x = r2[0];
            rotRec.y = r2[1];
            rotRec.z = r2[2];
            var pr = project(r2);
            if (!hasOv) {
              var off = nodeOffsetById && nodeOffsetById[id] ? nodeOffsetById[id] : null;
              if (off) { pr.x += Number(off.x) || 0; pr.y += Number(off.y) || 0; }
            }
            var projRec = nodeProjById[id] || (nodeProjById[id] = { x: 0, y: 0, k: 1, z: 0 });
            projRec.x = pr.x;
            projRec.y = pr.y;
            projRec.k = pr.k;
            projRec.z = pr.z;
          }
          try { overlay.__kgWebglPosById = nodeProjById; } catch (e) {}

          canvas3dNeedsLoop = !!rotateDrag || !!canvas3dDrag || (autoRotate && omega !== 0) || anyEdgeParticles || motion > 0;

          var selNodeId = selectionState && selectionState.nodeId ? String(selectionState.nodeId || '') : '';
          var selEdgeId = selectionState && selectionState.edgeId ? String(selectionState.edgeId || '') : '';
          var selNeighbors = selNodeId && neighborsById[selNodeId] ? neighborsById[selNodeId] : null;
          var selEdge = null;
          if (selEdgeId) {
            for (var iE = 0; iE < edges.length; iE += 1) {
              var ee = edges[iE];
              if (ee && String(ee.id || '') === selEdgeId) { selEdge = ee; break; }
            }
          }
          var edgeS = selEdge ? String((selEdge.s || selEdge.source || '') || '') : '';
          var edgeT = selEdge ? String((selEdge.t || selEdge.target || '') || '') : '';

          var nodeEmph = function(id){
            if (selNodeId) return id === selNodeId || (selNeighbors && selNeighbors[id]);
            if (selEdgeId) return id === edgeS || id === edgeT;
            return true;
          };

          for (var ei = 0; ei < edges.length; ei += 1) {
            var ed = edges[ei];
            var eId = String((ed && ed.id) || '');
            var sId = String((ed && (ed.s || ed.source || '')) || '');
            var tId = String((ed && (ed.t || ed.target || '')) || '');
            if (!sId || !tId) continue;
            var ps = nodeProjById[sId];
            var pt = nodeProjById[tId];
            if (!ps || !pt) continue;

            var baseWidth = (ed && typeof ed.baseWidth === 'number' && isFinite(ed.baseWidth)) ? ed.baseWidth : 1;
            var opacity = (ed && typeof ed.opacity === 'number' && isFinite(ed.opacity)) ? ed.opacity : 0.6;
            opacity = Math.max(0, Math.min(1, opacity));
            var stroke = String((ed && ed.stroke) || '#999');
            var rgb = parseColor(stroke);
            var depthOp = Math.min(depthOpacity(ps.z), depthOpacity(pt.z));

            var isSelE = !!(selEdgeId && eId && eId === selEdgeId);
            var dimE = !!(selEdgeId && !isSelE);
            if (selNodeId) {
              dimE = !(nodeEmph(sId) || nodeEmph(tId));
            }
            var dimFactor = dimE ? 0.35 : 1;

            var rC = Math.floor(rgb[0]);
            var gC = Math.floor(rgb[1]);
            var bC = Math.floor(rgb[2]);
            try { ctx2.strokeStyle = 'rgb(' + rC + ',' + gC + ',' + bC + ')'; } catch (e) {}
            try { ctx2.fillStyle = 'rgb(' + rC + ',' + gC + ',' + bC + ')'; } catch (e) {}

            var kAvg = (ps.k + pt.k) * 0.5;
            var w = (threeEdgeRenderer === 'shaderLine') ? shaderLineWidthPx : Math.max(0.25, baseWidth * kAvg);
            try { ctx2.lineWidth = w; } catch (e) {}
            try { ctx2.globalAlpha = ((threeEdgeRenderer === 'shaderLine') ? 1 : opacity) * depthOp * dimFactor; } catch (e) {}

            var curvature = (ed && typeof ed.curvature === 'number' && isFinite(ed.curvature)) ? ed.curvature : 0;
            var ctrl = null;
            if (curvature > 0.001) {
              var rs = nodeRotById[sId];
              var rt = nodeRotById[tId];
              if (rs && rt) {
                var dx3 = rt.x - rs.x;
                var dy3 = rt.y - rs.y;
                var dz3 = rt.z - rs.z;
                var len3 = Math.max(1e-6, Math.sqrt(dx3 * dx3 + dy3 * dy3 + dz3 * dz3));
                var ux = dx3 / len3;
                var uy = dy3 / len3;
                var uz = dz3 / len3;
                var upx = (Math.abs(uz) < 0.99) ? 0 : 0;
                var upy = (Math.abs(uz) < 0.99) ? 0 : 1;
                var upz = (Math.abs(uz) < 0.99) ? 1 : 0;
                var px0 = uy * upz - uz * upy;
                var py0 = uz * upx - ux * upz;
                var pz0 = ux * upy - uy * upx;
                var plen = Math.max(1e-6, Math.sqrt(px0 * px0 + py0 * py0 + pz0 * pz0));
                px0 /= plen; py0 /= plen; pz0 /= plen;
                var arot = (ed && typeof ed.curveRotation === 'number' && isFinite(ed.curveRotation)) ? ed.curveRotation : 0;
                var ca = Math.cos(arot);
                var sa = Math.sin(arot);
                var dot = px0 * ux + py0 * uy + pz0 * uz;
                var cxr = uy * pz0 - uz * py0;
                var cyr = uz * px0 - ux * pz0;
                var czr = ux * py0 - uy * px0;
                var rx = px0 * ca + cxr * sa + ux * dot * (1 - ca);
                var ry = py0 * ca + cyr * sa + uy * dot * (1 - ca);
                var rz = pz0 * ca + czr * sa + uz * dot * (1 - ca);
                var offMag = Math.max(0, curvature) * (len3 * 0.5);
                var cpx = (rs.x + rt.x) * 0.5 + rx * offMag;
                var cpy = (rs.y + rt.y) * 0.5 + ry * offMag;
                var cpz = (rs.z + rt.z) * 0.5 + rz * offMag;
                var prc = project([cpx, cpy, cpz]);
                ctrl = { x: prc.x, y: prc.y };
                var offS = nodeOffsetById && nodeOffsetById[sId] ? nodeOffsetById[sId] : null;
                var offT = nodeOffsetById && nodeOffsetById[tId] ? nodeOffsetById[tId] : null;
                if (offS || offT) {
                  var ox2 = (offS ? (Number(offS.x) || 0) : 0) + (offT ? (Number(offT.x) || 0) : 0);
                  var oy2 = (offS ? (Number(offS.y) || 0) : 0) + (offT ? (Number(offT.y) || 0) : 0);
                  ctrl.x += ox2 * 0.5;
                  ctrl.y += oy2 * 0.5;
                }
              }
            }

            try {
              ctx2.beginPath();
              ctx2.moveTo(ps.x, ps.y);
              if (ctrl) ctx2.quadraticCurveTo(ctrl.x, ctrl.y, pt.x, pt.y);
              else ctx2.lineTo(pt.x, pt.y);
              ctx2.stroke();
            } catch (e) {}

            if (threeEdgeRenderer === 'mesh') {
              try {
                var arrowLen = (ed && typeof ed.arrowLen === 'number' && isFinite(ed.arrowLen)) ? ed.arrowLen : 0;
                if (arrowLen > 0) {
                  var rel = (ed && typeof ed.arrowRelPos === 'number' && isFinite(ed.arrowRelPos)) ? ed.arrowRelPos : 0.85;
                  if (rel < 0) rel = 0;
                  if (rel > 1) rel = 1;
                  var omt = 1 - rel;
                  var ax = ctrl ? (omt * omt * ps.x + 2 * omt * rel * ctrl.x + rel * rel * pt.x) : (ps.x + (pt.x - ps.x) * rel);
                  var ay = ctrl ? (omt * omt * ps.y + 2 * omt * rel * ctrl.y + rel * rel * pt.y) : (ps.y + (pt.y - ps.y) * rel);
                  var tx0 = ctrl ? (2 * omt * (ctrl.x - ps.x) + 2 * rel * (pt.x - ctrl.x)) : (pt.x - ps.x);
                  var ty0 = ctrl ? (2 * omt * (ctrl.y - ps.y) + 2 * rel * (pt.y - ctrl.y)) : (pt.y - ps.y);
                  var tlen = Math.max(1e-6, Math.hypot(tx0, ty0));
                  var tx1 = tx0 / tlen;
                  var ty1 = ty0 / tlen;
                  var aSize = Math.max(2, arrowLen * kAvg);
                  var bx0 = ax - tx1 * aSize;
                  var by0 = ay - ty1 * aSize;
                  var nx0 = -ty1;
                  var ny0 = tx1;
                  var hw = aSize * 0.35;
                  var lx = bx0 + nx0 * hw;
                  var ly = by0 + ny0 * hw;
                  var rx0 = bx0 - nx0 * hw;
                  var ry0 = by0 - ny0 * hw;
                  var acol = String((ed && ed.arrowColor) || stroke);
                  try { ctx2.fillStyle = acol; } catch (e0) {}
                  ctx2.beginPath();
                  ctx2.moveTo(ax, ay);
                  ctx2.lineTo(lx, ly);
                  ctx2.lineTo(rx0, ry0);
                  ctx2.closePath();
                  ctx2.fill();
                }
              } catch (e0) {}

              try {
                var pCount = (ed && typeof ed.particles === 'number' && isFinite(ed.particles)) ? Math.max(0, Math.min(24, Math.floor(ed.particles))) : 0;
                if (pCount > 0) {
                  var speed = (ed && typeof ed.particleSpeed === 'number' && isFinite(ed.particleSpeed)) ? ed.particleSpeed : 0.6;
                  var rate = speed * 0.12;
                  var pr0 = Math.max(0.6, 1.6 * kAvg);
                  for (var pi = 0; pi < pCount; pi += 1) {
                    var tt = ((pi / Math.max(1, pCount)) + tSec * rate) % 1;
                    if (tt < 0) tt += 1;
                    var omt2 = 1 - tt;
                    var px2 = ctrl ? (omt2 * omt2 * ps.x + 2 * omt2 * tt * ctrl.x + tt * tt * pt.x) : (ps.x + (pt.x - ps.x) * tt);
                    var py2 = ctrl ? (omt2 * omt2 * ps.y + 2 * omt2 * tt * ctrl.y + tt * tt * pt.y) : (ps.y + (pt.y - ps.y) * tt);
                    ctx2.beginPath();
                    ctx2.arc(px2, py2, pr0, 0, Math.PI * 2);
                    ctx2.fill();
                  }
                }
              } catch (e1) {}
            }
          }
          try { ctx2.globalAlpha = 1; } catch (e) {}

          for (var ni2 = 0; ni2 < nodes.length; ni2 += 1) {
            var nd2 = nodes[ni2];
            var id2 = String((nd2 && nd2.id) || '');
            if (!id2) continue;
            if (mediaSet && mediaSet[id2]) continue;
            var pr2 = nodeProjById[id2];
            if (!pr2) continue;
            var baseR = (nd2 && typeof nd2.baseR === 'number' && isFinite(nd2.baseR)) ? nd2.baseR : 10;
            var scale = (nd2 && typeof nd2.scale === 'number' && isFinite(nd2.scale)) ? nd2.scale : 1;
            if (!(scale > 0) || !isFinite(scale)) scale = 1;
            var layerOpacity = (nd2 && typeof nd2.layerOpacity === 'number' && isFinite(nd2.layerOpacity)) ? nd2.layerOpacity : 1;
            if (layerOpacity < 0) layerOpacity = 0;
            if (layerOpacity > 1) layerOpacity = 1;
            var fillAlpha = (nd2 && typeof nd2.fillAlpha === 'number' && isFinite(nd2.fillAlpha)) ? Math.max(0, Math.min(1, nd2.fillAlpha)) : 1;
            var op = depthOpacity(pr2.z) * layerOpacity;

            var dimN = false;
            if (selNodeId) dimN = !nodeEmph(id2);
            else if (selEdgeId) dimN = !(id2 === edgeS || id2 === edgeT);
            var dimFactorN = dimN ? 0.25 : 1;
            try { ctx2.globalAlpha = op * fillAlpha * dimFactorN; } catch (e) {}

            var fill = String((nd2 && nd2.fill) || '#888');
            try { ctx2.fillStyle = fill; } catch (e) {}
            var shape = String((nd2 && nd2.shape) || 'circle');
            var rectDims = nd2 && nd2.rectDims ? nd2.rectDims : null;
            var w0 = rectDims && isFinite(rectDims.width) ? Math.max(2, Number(rectDims.width)) : Math.max(2, baseR * 2);
            var h0 = rectDims && isFinite(rectDims.height) ? Math.max(2, Number(rectDims.height)) : Math.max(2, baseR * 2);
            var w2 = w0 * scale * pr2.k;
            var h2 = h0 * scale * pr2.k;
            var rNode = Math.max(1, baseR * scale * pr2.k);

            try {
              if (shape === 'rect') {
                ctx2.beginPath();
                ctx2.rect(pr2.x - w2 / 2, pr2.y - h2 / 2, w2, h2);
                ctx2.fill();
              } else if (shape === 'diamond') {
                ctx2.save();
                ctx2.translate(pr2.x, pr2.y);
                ctx2.rotate(Math.PI / 4);
                ctx2.beginPath();
                ctx2.rect(-w2 / 2, -h2 / 2, w2, h2);
                ctx2.fill();
                ctx2.restore();
              } else if (shape === 'hex') {
                var rr = Math.max(2, Math.min(w2, h2) / 2);
                ctx2.beginPath();
                for (var kk = 0; kk < 6; kk += 1) {
                  var a = kk * (Math.PI * 2 / 6) + Math.PI / 6;
                  var px = pr2.x + Math.cos(a) * rr;
                  var py = pr2.y + Math.sin(a) * rr;
                  if (kk === 0) ctx2.moveTo(px, py);
                  else ctx2.lineTo(px, py);
                }
                ctx2.closePath();
                ctx2.fill();
              } else {
                ctx2.beginPath();
                ctx2.arc(pr2.x, pr2.y, rNode, 0, Math.PI * 2);
                ctx2.fill();
              }
            } catch (e) {}

            try {
              if (nodeStrokeAlpha > 0) {
                ctx2.globalAlpha = op * nodeStrokeAlpha * dimFactorN;
                ctx2.lineWidth = Math.max(0.5, 1 * pr2.k);
                ctx2.strokeStyle = (typeof payload3d.nodeStroke === 'string' && payload3d.nodeStroke) ? String(payload3d.nodeStroke) : '#ffffff';
                if (shape === 'rect') {
                  ctx2.strokeRect(pr2.x - w2 / 2, pr2.y - h2 / 2, w2, h2);
                } else if (shape === 'diamond') {
                  ctx2.save();
                  ctx2.translate(pr2.x, pr2.y);
                  ctx2.rotate(Math.PI / 4);
                  ctx2.strokeRect(-w2 / 2, -h2 / 2, w2, h2);
                  ctx2.restore();
                } else if (shape === 'hex') {
                  var rr2 = Math.max(2, Math.min(w2, h2) / 2);
                  ctx2.beginPath();
                  for (var kk2 = 0; kk2 < 6; kk2 += 1) {
                    var a2 = kk2 * (Math.PI * 2 / 6) + Math.PI / 6;
                    var px3 = pr2.x + Math.cos(a2) * rr2;
                    var py3 = pr2.y + Math.sin(a2) * rr2;
                    if (kk2 === 0) ctx2.moveTo(px3, py3);
                    else ctx2.lineTo(px3, py3);
                  }
                  ctx2.closePath();
                  ctx2.stroke();
                } else {
                  ctx2.beginPath();
                  ctx2.arc(pr2.x, pr2.y, rNode, 0, Math.PI * 2);
                  ctx2.stroke();
                }
              }
            } catch (e) {}
          }
          try { ctx2.globalAlpha = 1; } catch (e) {}
        };

        var raf = null;
        schedule3dFrame = function(){
          if (!renderCanvas3d) return;
          if (raf != null) return;
          raf = requestAnimationFrame(function(t){
            raf = null;
            renderCanvas3d(t);
            scheduleOverlayUpdate();
            if (canvas3dNeedsLoop) schedule3dFrame();
          });
        };

        try { resizeCanvas3d(); } catch (e) {}
        try { schedule3dFrame(); } catch (e) {}
        return true;
      } catch (err) {
        return false;
      }
    }

    function install3dSvgAnimatorOnce(){
      try {
        try { if (install3dCanvasRendererOnce()) return; } catch (e0) {}
        if (!overlayFollowAnimation) return;
        if (!svg || !svg.getAttribute) return;
        if (svg.__kg3dAnimatorInstalled) return;
        svg.__kg3dAnimatorInstalled = true;

        var payload = null;
        try { payload = JSON.parse(String(svg.getAttribute('data-kg-3d-payload') || '').trim() || '{}'); } catch (e) { payload = null; }
        if (!payload || payload.animated !== true) return;
        var nodes = Array.isArray(payload.nodes) ? payload.nodes : [];
        var edges = Array.isArray(payload.edges) ? payload.edges : [];

        var threeEdgeRenderer = String(payload.threeEdgeRenderer || 'mesh') === 'shaderLine' ? 'shaderLine' : 'mesh';
        var shaderLineWidthPx = (typeof payload.shaderLineWidthPx === 'number' && isFinite(payload.shaderLineWidthPx)) ? payload.shaderLineWidthPx : 2;
        if (shaderLineWidthPx < 0.5) shaderLineWidthPx = 0.5;
        if (shaderLineWidthPx > 20) shaderLineWidthPx = 20;

        var cameraZ = (typeof payload.cameraZ === 'number' && isFinite(payload.cameraZ)) ? payload.cameraZ : 220;
        var tiltX = (typeof payload.tiltX === 'number' && isFinite(payload.tiltX)) ? payload.tiltX : 0;
        var yaw0 = (typeof payload.yaw0 === 'number' && isFinite(payload.yaw0)) ? payload.yaw0 : 0;
        var cx = (typeof payload.cx === 'number' && isFinite(payload.cx)) ? payload.cx : 0;
        var cy = (typeof payload.cy === 'number' && isFinite(payload.cy)) ? payload.cy : 0;
        var cz = (typeof payload.cz === 'number' && isFinite(payload.cz)) ? payload.cz : 0;
        var minZ = (typeof payload.minZ === 'number' && isFinite(payload.minZ)) ? payload.minZ : -1;
        var maxZ = (typeof payload.maxZ === 'number' && isFinite(payload.maxZ)) ? payload.maxZ : 1;
        var zSpan = Math.max(1e-6, maxZ - minZ);
        var depthOpacityMin = (typeof payload.depthOpacityMin === 'number' && isFinite(payload.depthOpacityMin)) ? payload.depthOpacityMin : 0.35;
        var depthOpacityMax = (typeof payload.depthOpacityMax === 'number' && isFinite(payload.depthOpacityMax)) ? payload.depthOpacityMax : 1;
        if (depthOpacityMin < 0) depthOpacityMin = 0;
        if (depthOpacityMin > 1) depthOpacityMin = 1;
        if (depthOpacityMax < depthOpacityMin) depthOpacityMax = depthOpacityMin;
        if (depthOpacityMax > 1) depthOpacityMax = 1;
        var nodeStrokeAlpha = (typeof payload.nodeStrokeAlpha === 'number' && isFinite(payload.nodeStrokeAlpha)) ? payload.nodeStrokeAlpha : 1;
        var labelFillAlpha = (typeof payload.labelFillAlpha === 'number' && isFinite(payload.labelFillAlpha)) ? payload.labelFillAlpha : 1;
        var motion = (typeof payload.motion === 'number' && isFinite(payload.motion)) ? Math.max(0, Math.min(2, payload.motion)) : 1;
        var autoRotate = payload.autoRotate === true;
        var autoRotateSpeed = (typeof payload.autoRotateSpeed === 'number' && isFinite(payload.autoRotateSpeed)) ? payload.autoRotateSpeed : 0.4;
        va`,`r omega = (Math.PI * 2 / 60) * (autoRotate ? autoRotateSpeed : 0);
        var labelPadY = (typeof payload.labelPadY === 'number' && isFinite(payload.labelPadY)) ? payload.labelPadY : 8;

        var enableDomZSort = payload.enableDomZSort === true;

        var clamp = function(v, lo, hi){ if (!isFinite(v)) return lo; return Math.max(lo, Math.min(hi, v)); };
        var hash01 = function(s){
          try {
            var str = String(s || '');
            var h = 2166136261;
            for (var i = 0; i < str.length; i += 1) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
            return ((h >>> 0) % 1000) / 1000;
          } catch (e) {
            return 0;
          }
        };
        var TAU = Math.PI * 2;
        var buildNodeMotionParams = function(nd){
          var id = String((nd && nd.id) || '');
          if (!id) return null;
          var baseR = (nd && typeof nd.baseR === 'number' && isFinite(nd.baseR)) ? nd.baseR : 10;
          var amp = clamp(baseR * 0.08, 0.3, 6) * motion;
          var seed = hash01(id) * TAU;
          var fx = hash01(id + ':fx');
          var fy = hash01(id + ':fy');
          var fz = hash01(id + ':fz');
          return { id: id, amp: amp, seed: seed, fx: fx, fy: fy, fz: fz, baseR: baseR };
        };
        var nodeMotionById = Object.create(null);
        for (var mi = 0; mi < nodes.length; mi += 1) {
          var mp = buildNodeMotionParams(nodes[mi]);
          if (mp) nodeMotionById[mp.id] = mp;
        }

        var nodeEls = new Map();
        var nodeGs = svg.querySelectorAll('[data-node-id]');
        for (var gi = 0; gi < nodeGs.length; gi += 1) {
          var g = nodeGs[gi];
          if (!g || !g.getAttribute) continue;
          var gid = String(g.getAttribute('data-node-id') || '');
          if (!gid) continue;
          var sEl = g.querySelector && g.querySelector('[data-role="node-shape"],[data-role="node-circle"]');
          if (!sEl) sEl = g.querySelector && g.querySelector('circle,rect,polygon');
          var tEl = g.querySelector && g.querySelector('[data-role="node-label"]');
          if (sEl) nodeEls.set(gid, { g: g, s: sEl, t: tEl });
        }

        var edgeElById = new Map();
        if (svg && edgeMetaById && nodePosById) {
      try {
        var linksRoot = svg.querySelector('[data-kg-layer="links"]');
        if (linksRoot && !linksRoot.querySelector('[data-edge-id]')) {
          for (var eid in edgeMetaById) {
            if (!Object.prototype.hasOwnProperty.call(edgeMetaById, eid)) continue;
            var meta = edgeMetaById[eid];
            if (!meta) continue;
            var s = String(meta.s || '').trim();
            var t = String(meta.t || '').trim();
            if (!s || !t) continue;
            var ps = nodePosById && nodePosById[s] ? nodePosById[s] : null;
            var pt = nodePosById && nodePosById[t] ? nodePosById[t] : null;
            if (!ps || !pt) continue;
            var sx = Number(ps.x);
            var sy = Number(ps.y);
            var tx = Number(pt.x);
            var ty = Number(pt.y);
            if (!isFinite(sx) || !isFinite(sy) || !isFinite(tx) || !isFinite(ty)) continue;
            var line = svg.ownerDocument && svg.ownerDocument.createElementNS
              ? svg.ownerDocument.createElementNS(svg.namespaceURI || 'http://www.w3.org/2000/svg', 'line')
              : null;
            if (!line) continue;
            line.setAttribute('data-edge-id', eid);
            line.setAttribute('data-source-id', s);
            line.setAttribute('data-target-id', t);
            line.setAttribute('x1', String(sx));
            line.setAttribute('y1', String(sy));
            line.setAttribute('x2', String(tx));
            line.setAttribute('y2', String(ty));
            line.setAttribute('stroke', 'var(--kg-canvas-edge-stroke)');
            line.setAttribute('stroke-width', '2');
            line.setAttribute('fill', 'none');
            linksRoot.appendChild(line);
          }
        }
      } catch (e) {}
    }
    var edgeLs = svg.querySelectorAll('[data-edge-id]');
        for (var li = 0; li < edgeLs.length; li += 1) {
          var el = edgeLs[li];
          if (!el || !el.getAttribute) continue;
          var eid0 = String(el.getAttribute('data-edge-id') || '');
          if (eid0) edgeElById.set(eid0, el);
        }
        var edgeEls = [];
        for (var j = 0; j < edges.length; j += 1) {
          var e = edges[j];
          var eid = String((e && (e.id || '')) || '');
          if (!eid) continue;
          var el2 = edgeElById.get(eid);
          if (!el2) continue;
          var baseStroke = '';
          try { baseStroke = String(el2.getAttribute('stroke') || ''); } catch (e0) { baseStroke = ''; }
          var baseRgb = null;
          try {
            var m0 = String(baseStroke || '').match(/^rgb\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i);
            if (m0) baseRgb = { r: Number(m0[1]), g: Number(m0[2]), b: Number(m0[3]) };
          } catch (e1) { baseRgb = null; }
          edgeEls.push({
            id: eid,
            el: el2,
            s: String((e && (e.s || e.source || '')) || ''),
            t: String((e && (e.t || e.target || '')) || ''),
            baseWidth: (e && typeof e.baseWidth === 'number' && isFinite(e.baseWidth)) ? e.baseWidth : 1,
            opacity: (e && typeof e.opacity === 'number' && isFinite(e.opacity)) ? e.opacity : 0.6,
            curvature: (e && typeof e.curvature === 'number' && isFinite(e.curvature)) ? e.curvature : 0,
            curveRotation: (e && typeof e.curveRotation === 'number' && isFinite(e.curveRotation)) ? e.curveRotation : 0,
            arrowLen: (e && typeof e.arrowLen === 'number' && isFinite(e.arrowLen)) ? e.arrowLen : 0,
            arrowRelPos: (e && typeof e.arrowRelPos === 'number' && isFinite(e.arrowRelPos)) ? e.arrowRelPos : 0.85,
            arrowColor: (e && typeof e.arrowColor === 'string') ? String(e.arrowColor) : '',
            particles: (e && typeof e.particles === 'number' && isFinite(e.particles)) ? e.particles : 0,
            particleSpeed: (e && typeof e.particleSpeed === 'number' && isFinite(e.particleSpeed)) ? e.particleSpeed : 0,
            arrowEl: null,
            particleEls: null,
            baseStroke: baseStroke,
            baseRgb: baseRgb,
          });
        }

        for (var ej = 0; ej < edgeEls.length; ej += 1) {
          var ee = edgeEls[ej];
          if (!ee) continue;
          try { ee.arrowEl = svg.querySelector('[data-edge-arrow-id="' + ee.id + '"]'); } catch (e0) { ee.arrowEl = null; }
          try { ee.particleEls = svg.querySelectorAll('[data-edge-particle-edge-id="' + ee.id + '"]'); } catch (e1) { ee.particleEls = null; }
        }

        var rotateY = function(x, y, z, a){ var c = Math.cos(a), s = Math.sin(a); return [x * c + z * s, y, -x * s + z * c]; };
        var rotateX = function(x, y, z, a){ var c = Math.cos(a), s = Math.sin(a); return [x, y * c - z * s, y * s + z * c]; };
        var project = function(x, y, z){ var denom = Math.max(1e-3, cameraZ - z); var k = cameraZ / denom; return { x: x * k, y: y * k, k: k, z: z }; };
        var depthOpacity = function(z){ var t = (Number(z) - minZ) / zSpan; if (!isFinite(t)) t = 0; t = Math.max(0, Math.min(1, t)); return depthOpacityMin + (depthOpacityMax - depthOpacityMin) * t; };

        var q2 = function(n){ return Math.round(n * 100) / 100; };
        var nodeAttrCache = Object.create(null);
        var edgeAttrCache = Object.create(null);

        var nodeOffsetById = svg.__kgNodeOffsetById || (svg.__kgNodeOffsetById = {});
        var started = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
        var lastSortAt = 0;
        var lastTickAt = 0;
        var projById = new Map();
        var rotById = new Map();
        var nodeOrder = [];
        var edgeOrder = [];
        var nodesGroup = null;
        var edgesGroup = null;
        try { nodesGroup = svg.querySelector('[data-layer="nodes"]'); } catch (e) { nodesGroup = null; }
        try { edgesGroup = svg.querySelector('[data-layer="edges"]'); } catch (e) { edgesGroup = null; }
        var animRaf = null;
        var schedule = function(){
          if (animRaf != null) return;
          animRaf = requestAnimationFrame(tick);
        };
        schedule3dFrame = schedule;

        var tick = function(){
          animRaf = null;
          var now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
          var dt = now - lastTickAt;
          var tSec = (now - started) / 1000;
          var viewportInteracting = !!drag || wheelZoomAnimRaf != null || viewAnimRaf != null || gestureZoom != null || (touchDrag && (touchDrag.type === 'pan' || touchDrag.type === 'pinch'));
          var rotateInteracting = !!rotateDrag || (touchDrag && touchDrag.type === 'rotate');
          var wantsContinuous = omega !== 0 || motion > 1e-6;
          var wantsLoop = wantsContinuous || viewportInteracting || rotateInteracting || !!nodeDrag || !!edgeDrag || !!groupDrag;
          if (!wantsLoop) return;

          if (rotateInteracting && dt < 33) {
            schedule();
            return;
          }
          lastTickAt = now;

          if (!viewportInteracting || rotateInteracting || wantsContinuous || nodeDrag || edgeDrag || groupDrag) {
            var ang = omega * tSec + yaw0 + rotateYaw;
            var tilt = tiltX + rotateTilt;
            if (!isFinite(tilt)) tilt = tiltX;
            if (tilt < -1.25) tilt = -1.25;
            if (tilt > 1.25) tilt = 1.25;
            projById.clear();
            rotById.clear();
            nodeOrder.length = 0;
            for (var i2 = 0; i2 < nodes.length; i2 += 1) {
            var nd = nodes[i2];
            var id2 = String((nd && nd.id) || '');
            if (!id2) continue;
            var p = (nd && nd.p) ? nd.p : [0, 0, 0];
            var mp = nodeMotionById[id2];
            var wobX = 0, wobY = 0, wobZ = 0;
              var lowQuality = rotateInteracting === true;
            var draggedId = (nodeDrag && nodeDrag.id) ? String(nodeDrag.id || '') : '';
            var viewK = (state && isFinite(state.k)) ? Math.max(0.001, state.k) : 1;
            var baseSx0 = (svgBase && isFinite(svgBase.sx) && svgBase.sx > 0) ? svgBase.sx : 1;
            var wobScale = 1 / (viewK * baseSx0);
              if (!lowQuality && mp && mp.amp > 1e-6 && (!draggedId || draggedId !== id2)) {
              var a0 = mp.amp * wobScale;
              wobX = Math.sin(tSec * (0.65 + 0.7 * mp.fx) + mp.seed) * a0;
              wobY = Math.cos(tSec * (0.72 + 0.7 * mp.fy) + 1.31 * mp.seed) * a0;
              wobZ = Math.sin(tSec * (0.48 + 0.45 * mp.fz) + 2.17 * mp.seed) * (0.35 * a0);
            }
            var x0 = (Number(p[0]) || 0) - cx + wobX;
            var y0 = (Number(p[1]) || 0) - cy + wobY;
            var z0 = (Number(p[2]) || 0) - cz + wobZ;
            var r1 = rotateY(x0, y0, z0, ang);
            var r2 = rotateX(r1[0], r1[1], r1[2], tilt);
            var pr = project(r2[0], r2[1], r2[2]);
            rotById.set(id2, { x: r2[0], y: r2[1], z: r2[2] });
            var off = nodeOffsetById[id2];
            if (off) { pr.x += Number(off.x) || 0; pr.y += Number(off.y) || 0; }
            projById.set(id2, pr);
            nodeOrder.push({ id: id2, z: pr.z });

            var el = nodeEls.get(id2);
            if (!el) continue;
            var baseR = (nd && typeof nd.baseR === 'number' && isFinite(nd.baseR)) ? nd.baseR : 10;
            var scale = (nd && typeof nd.scale === 'number' && isFinite(nd.scale)) ? nd.scale : 1;
            if (!(scale > 0) || !isFinite(scale)) scale = 1;
            var layerOpacity = (nd && typeof nd.layerOpacity === 'number' && isFinite(nd.layerOpacity)) ? nd.layerOpacity : 1;
            if (layerOpacity < 0) layerOpacity = 0;
            if (layerOpacity > 1) layerOpacity = 1;
            var r = baseR * scale * pr.k;
            var op = depthOpacity(pr.z) * layerOpacity;
            var fillAlpha = (nd && typeof nd.fillAlpha === 'number' && isFinite(nd.fillAlpha)) ? Math.max(0, Math.min(1, nd.fillAlpha)) : 1;
            var cxAttr = q2(pr.x);
            var cyAttr = q2(pr.y);
            var rAttr = q2(r);
            var labelYAttr = q2(pr.y - r - labelPadY);
            var fillOpAttr = q2(op * fillAlpha);
            var strokeOpAttr = q2(op * nodeStrokeAlpha);
            var textOpAttr = q2(op * labelFillAlpha);
            var prevA = nodeAttrCache[id2];
            var xAttr = null;
            var yAttr = null;
            var wAttr = null;
            var hAttr = null;
            var pAttr = null;
            try {
              var sEl = el.s;
              if (sEl) {
                var tag = String(sEl.nodeName || '').toLowerCase();
                var shape = String((nd && nd.shape) || '');
                var rectDims = (nd && nd.rectDims) ? nd.rectDims : null;
                var w0 = rectDims && isFinite(rectDims.width) ? Math.max(2, Number(rectDims.width)) : Math.max(2, baseR * 2);
                var h0 = rectDims && isFinite(rectDims.height) ? Math.max(2, Number(rectDims.height)) : Math.max(2, baseR * 2);
                wAttr = q2(w0 * scale * pr.k);
                hAttr = q2(h0 * scale * pr.k);
                if (tag === 'circle') {
                  if (!prevA || prevA.cx !== cxAttr) sEl.setAttribute('cx', String(cxAttr));
                  if (!prevA || prevA.cy !== cyAttr) sEl.setAttribute('cy', String(cyAttr));
                  if (!prevA || prevA.r !== rAttr) sEl.setAttribute('r', String(rAttr));
                } else if (tag === 'rect') {
                  xAttr = q2(cxAttr - wAttr / 2);
                  yAttr = q2(cyAttr - hAttr / 2);
                  if (!prevA || prevA.x !== xAttr) sEl.setAttribute('x', String(xAttr));
                  if (!prevA || prevA.y !== yAttr) sEl.setAttribute('y', String(yAttr));
                  if (!prevA || prevA.w !== wAttr) sEl.setAttribute('width', String(wAttr));
                  if (!prevA || prevA.h !== hAttr) sEl.setAttribute('height', String(hAttr));
                  if (shape === 'diamond') sEl.setAttribute('transform', 'rotate(45 ' + cxAttr + ' ' + cyAttr + ')');
                  else if (sEl.getAttribute('transform')) sEl.removeAttribute('transform');
                } else if (tag === 'polygon') {
                  var rr = Math.max(2, Math.min(wAttr, hAttr) / 2);
                  var pts = [];
                  for (var kk = 0; kk < 6; kk += 1) {
                    var aa = (Math.PI / 3) * kk;
                    pts.push(q2(cxAttr + rr * Math.cos(aa)) + ',' + q2(cyAttr + rr * Math.sin(aa)));
                  }
                  pAttr = pts.join(' ');
                  if (!prevA || prevA.p !== pAttr) sEl.setAttribute('points', pAttr);
                }
                if (!prevA || prevA.fo !== fillOpAttr) sEl.setAttribute('fill-opacity', String(fillOpAttr));
                if (!prevA || prevA.so !== strokeOpAttr) sEl.setAttribute('stroke-opacity', String(strokeOpAttr));
              }
              if (el.t) {
                if (!prevA || prevA.cx !== cxAttr) el.t.setAttribute('x', String(cxAttr));
                if (!prevA || prevA.ly !== labelYAttr) el.t.setAttribute('y', String(labelYAttr));
                if (!prevA || prevA.to !== textOpAttr) el.t.setAttribute('opacity', String(textOpAttr));
              }
            } catch (e) {}
            nodeAttrCache[id2] = { cx: cxAttr, cy: cyAttr, r: rAttr, ly: labelYAttr, fo: fillOpAttr, so: strokeOpAttr, to: textOpAttr, x: xAttr, y: yAttr, w: wAttr, h: hAttr, p: pAttr };
          }

          edgeOrder.length = 0;
          for (var e2 = 0; e2 < edgeEls.length; e2 += 1) {
            var ed = edgeEls[e2];
            var ps = projById.get(ed.s);
            var pt = projById.get(ed.t);
            if (!ps || !pt) continue;
            var prevE = edgeAttrCache[ed.id];
            var edgeOpacity = (typeof ed.opacity === 'number' && isFinite(ed.opacity)) ? ed.opacity : 0.6;
            edgeOpacity = Math.max(0, Math.min(1, edgeOpacity));
            var depthOp = Math.min(depthOpacity(ps.z), depthOpacity(pt.z));
            var opEdge = threeEdgeRenderer === 'shaderLine' ? 1 : q2(depthOp * edgeOpacity);
            var kAvg = (ps.k + pt.k) * 0.5;
            var w = threeEdgeRenderer === 'shaderLine'
              ? shaderLineWidthPx
              : (rotateInteracting ? Math.max(0.25, (ed.baseWidth || 1)) : Math.max(0.25, (ed.baseWidth || 1) * kAvg));
            var x1a = q2(ps.x);
            var y1a = q2(ps.y);
            var x2a = q2(pt.x);
            var y2a = q2(pt.y);
            var wa = q2(w);
            var tagE = String(ed.el && ed.el.nodeName ? ed.el.nodeName : '').toLowerCase();
            var curvature = (typeof ed.curvature === 'number' && isFinite(ed.curvature)) ? ed.curvature : 0;
            var curveRotation = (typeof ed.curveRotation === 'number' && isFinite(ed.curveRotation)) ? ed.curveRotation : 0;
            var dx = x2a - x1a;
            var dy = y2a - y1a;
            var len2 = Math.max(1e-6, Math.hypot(dx, dy));
            var ctrlX = null;
            var ctrlY = null;
            var dPath = null;
            if (threeEdgeRenderer === 'mesh' && curvature > 0.001) {
              try {
                var rs = rotById.get(ed.s);
                var rt = rotById.get(ed.t);
                if (rs && rt) {
                  var ddx = Number(rt.x) - Number(rs.x);
                  var ddy = Number(rt.y) - Number(rs.y);
                  var ddz = Number(rt.z) - Number(rs.z);
                  var len3 = Math.max(1e-6, Math.hypot(ddx, ddy, ddz));
                  var ux3 = ddx / len3;
                  var uy3 = ddy / len3;
                  var uz3 = ddz / len3;
                  var upx = (Math.abs(uz3) < 0.99) ? 0 : 0;
                  var upy = (Math.abs(uz3) < 0.99) ? 0 : 1;
                  var upz = (Math.abs(uz3) < 0.99) ? 1 : 0;
                  var px3 = uy3 * upz - uz3 * upy;
                  var py3 = uz3 * upx - ux3 * upz;
                  var pz3 = ux3 * upy - uy3 * upx;
                  var plen = Math.max(1e-6, Math.hypot(px3, py3, pz3));
                  var vx = px3 / plen;
                  var vy = py3 / plen;
                  var vz = pz3 / plen;
                  var arot = curveRotation || 0;
                  var ca = Math.cos(arot);
                  var sa = Math.sin(arot);
                  var dot = vx * ux3 + vy * uy3 + vz * uz3;
                  var rx = vx * ca + (uy3 * vz - uz3 * vy) * sa + ux3 * dot * (1 - ca);
                  var ry = vy * ca + (uz3 * vx - ux3 * vz) * sa + uy3 * dot * (1 - ca);
                  var rz = vz * ca + (ux3 * vy - uy3 * vx) * sa + uz3 * dot * (1 - ca);
                  var offMag = Math.max(0, curvature) * (len3 * 0.5);
                  var cx3 = (Number(rs.x) + Number(rt.x)) * 0.5 + rx * offMag;
                  var cy3 = (Number(rs.y) + Number(rt.y)) * 0.5 + ry * offMag;
                  var cz3 = (Number(rs.z) + Number(rt.z)) * 0.5 + rz * offMag;
                  var prC = project(cx3, cy3, cz3);
                  ctrlX = prC.x;
                  ctrlY = prC.y;
                  var offS = nodeOffsetById[ed.s];
                  var offT = nodeOffsetById[ed.t];
                  if (offS || offT) {
                    var ox = (offS ? (Number(offS.x) || 0) : 0) + (offT ? (Number(offT.x) || 0) : 0);
                    var oy = (offS ? (Number(offS.y) || 0) : 0) + (offT ? (Number(offT.y) || 0) : 0);
                    ctrlX += ox * 0.5;
                    ctrlY += oy * 0.5;
                  }
                  dPath = 'M' + x1a + ' ' + y1a + ' Q' + q2(ctrlX) + ' ' + q2(ctrlY) + ' ' + x2a + ' ' + y2a;
                }
              } catch (e) {}
            }
            if (!dPath) dPath = 'M' + x1a + ' ' + y1a + ' L' + x2a + ' ' + y2a;
            var strokeNext = null;
            try {
              if (tagE === 'path') {
                if (!prevE || prevE.d !== dPath) ed.el.setAttribute('d', dPath);
              } else {
                if (!prevE || prevE.x1 !== x1a) ed.el.setAttribute('x1', String(x1a));
                if (!prevE || prevE.y1 !== y1a) ed.el.setAttribute('y1', String(y1a));
                if (!prevE || prevE.x2 !== x2a) ed.el.setAttribute('x2', String(x2a));
                if (!prevE || prevE.y2 !== y2a) ed.el.setAttribute('y2', String(y2a));
              }
              if (!prevE || prevE.o !== opEdge) ed.el.setAttribute('stroke-opacity', String(opEdge));
              if (!prevE || prevE.w !== wa) ed.el.setAttribute('stroke-width', String(wa));
              if (threeEdgeRenderer === 'shaderLine') {
                var rgb = ed.baseRgb;
                if (rgb && isFinite(rgb.r) && isFinite(rgb.g) && isFinite(rgb.b)) {
                  var rr = Math.max(0, Math.min(255, Math.floor(Number(rgb.r) * edgeOpacity)));
                  var gg = Math.max(0, Math.min(255, Math.floor(Number(rgb.g) * edgeOpacity)));
                  var bb = Math.max(0, Math.min(255, Math.floor(Number(rgb.b) * edgeOpacity)));
                  strokeNext = 'rgb(' + rr + ', ' + gg + ', ' + bb + ')';
                  if (!prevE || prevE.s !== strokeNext) ed.el.setAttribute('stroke', strokeNext);
                }
              }
            } catch (e) {}

            edgeAttrCache[ed.id] = {
              d: tagE === 'path' ? dPath : null,
              x1: tagE === 'path' ? null : x1a,
              y1: tagE === 'path' ? null : y1a,
              x2: tagE === 'path' ? null : x2a,
              y2: tagE === 'path' ? null : y2a,
              w: wa,
              o: opEdge,
              s: (threeEdgeRenderer === 'shaderLine') ? (strokeNext || (prevE ? prevE.s : null)) : null,
            };

            if (rotateInteracting && ed.arrowEl) {
              try { ed.arrowEl.setAttribute('fill-opacity', '0'); } catch (e0) {}
            } else if (ed.arrowEl && threeEdgeRenderer === 'mesh') {
              try {
                var tArrow = (typeof ed.arrowRelPos === 'number' && isFinite(ed.arrowRelPos)) ? ed.arrowRelPos : 0.85;
                if (tArrow < 0) tArrow = 0;
                if (tArrow > 1) tArrow = 1;
                var ax;
                var ay;
                var tx;
                var ty;
                if (curvature > 0.001 && ctrlX != null && ctrlY != null) {
                  var omt = 1 - tArrow;
                  var cqx = q2(ctrlX);
                  var cqy = q2(ctrlY);
                  ax = omt * omt * x1a + 2 * omt * tArrow * cqx + tArrow * tArrow * x2a;
                  ay = omt * omt * y1a + 2 * omt * tArrow * cqy + tArrow * tArrow * y2a;
                  tx = 2 * omt * (cqx - x1a) + 2 * tArrow * (x2a - cqx);
                  ty = 2 * omt * (cqy - y1a) + 2 * tArrow * (y2a - cqy);
                } else {
                  ax = x1a + dx * tArrow;
                  ay = y1a + dy * tArrow;
                  tx = dx;
                  ty = dy;
                }
                var tlen = Math.max(1e-6, Math.hypot(tx, ty));
                tx /= tlen;
                ty /= tlen;
                var arrowLen = (typeof ed.arrowLen === 'number' && isFinite(ed.arrowLen)) ? ed.arrowLen : 8;
                var aSize = Math.max(2, arrowLen * kAvg);
                var bx0 = ax - tx * aSize;
                var by0 = ay - ty * aSize;
                var nx = -ty;
                var ny = tx;
                var hw = aSize * 0.35;
                var lx = bx0 + nx * hw;
                var ly = by0 + ny * hw;
                var rx0 = bx0 - nx * hw;
                var ry0 = by0 - ny * hw;
                ed.arrowEl.setAttribute('d', 'M' + q2(ax) + ' ' + q2(ay) + ' L' + q2(lx) + ' ' + q2(ly) + ' L' + q2(rx0) + ' ' + q2(ry0) + ' Z');
                ed.arrowEl.setAttribute('fill-opacity', String(opEdge));
              } catch (e) {}
            }

            if (rotateInteracting && ed.particleEls) {
              try {
                for (var hi = 0; hi < ed.particleEls.length; hi += 1) {
                  var hel = ed.particleEls[hi];
                  if (hel) hel.setAttribute('fill-opacity', '0');
                }
              } catch (e0) {}
            } else if (ed.particleEls && threeEdgeRenderer === 'mesh') {
              try {
                var count = ed.particleEls.length || 0;
                var speed = (typeof ed.particleSpeed === 'number' && isFinite(ed.particleSpeed)) ? ed.particleSpeed : 0.6;
                var rate = speed * 0.12;
                for (var pi = 0; pi < count; pi += 1) {
                  var cel = ed.particleEls[pi];
                  if (!cel) continue;
                  var tt = ((pi / Math.max(1, count)) + tSec * rate) % 1;
                  if (tt < 0) tt += 1;
                  var px2;
                  var py2;
                  if (curvature > 0.001 && ctrlX != null && ctrlY != null) {
                    var omt2 = 1 - tt;
                    var cqx2 = q2(ctrlX);
                    var cqy2 = q2(ctrlY);
                    px2 = omt2 * omt2 * x1a + 2 * omt2 * tt * cqx2 + tt * tt * x2a;
                    py2 = omt2 * omt2 * y1a + 2 * omt2 * tt * cqy2 + tt * tt * y2a;
                  } else {
                    px2 = x1a + dx * tt;
                    py2 = y1a + dy * tt;
                  }
                  cel.setAttribute('cx', String(q2(px2)));
                  cel.setAttribute('cy', String(q2(py2)));
                  cel.setAttribute('r', String(q2(Math.max(0.6, 1.6 * kAvg))));
                  cel.setAttribute('fill-opacity', String(opEdge));
                }
              } catch (e) {}
            }

            edgeOrder.push({ id: ed.id, z: (ps.z + pt.z) * 0.5, el: ed.el });
          }

          if (enableDomZSort && nodesGroup && edgesGroup) {
            if (now - lastSortAt > 33) {
              lastSortAt = now;
              nodeOrder.sort(function(a, b){ return a.z - b.z; });
              for (var si = 0; si < nodeOrder.length; si += 1) {
                var ne = nodeEls.get(nodeOrder[si].id);
                if (ne && ne.g) try { nodesGroup.appendChild(ne.g); } catch (e) {}
              }
              edgeOrder.sort(function(a, b){ return a.z - b.z; });
              for (var sj = 0; sj < edgeOrder.length; sj += 1) {
                try { edgesGroup.appendChild(edgeOrder[sj].el); } catch (e) {}
              }
            }
          }
          scheduleOverlayUpdate();
          }
          schedule();
        };
        schedule();
      } catch (err) {}
    }

    var svgNodeById = Object.create(null);
    var svgNodeElsById = Object.create(null);
    var svgGroupElsById = Object.create(null);
    var edgeRefsByNodeId = Object.create(null);
    var edgeLabelElsByEdgeId = Object.create(null);
    var edgeLineByEdgeId = Object.create(null);
    var selectionState = { nodeId: null, edgeId: null };
    var lastSelectionKey = '';
    var mediaInteractive = false;
    var panHeld = false;
    var pointerMode = 'select';

    var UI_IGNORE_SELECTOR = '[data-kg-canvas-wheel-ignore="true"], [data-kg-canvas-pointer-ignore="true"]';

    applyFixedViewport();

    function easeOutCubic01(t){
      if (!(t > 0)) return 0;
      if (!(t < 1)) return 1;
      var u = 1 - t;
      return 1 - u * u * u;
    }
    function lerpNumber(a,b,t){ return a + (b - a) * t; }
    function computeFlowWheelZoomDurationMs(args){
      var safe = (args && typeof args.deltaYpxAbs === 'number' && isFinite(args.deltaYpxAbs)) ? args.deltaYpxAbs : 0;
      var minMs = (args && typeof args.minMs === 'number' && isFinite(args.minMs)) ? Math.max(0, Math.floor(args.minMs)) : 0;
      var maxMs = (args && typeof args.maxMs === 'number' && isFinite(args.maxMs)) ? Math.max(minMs, Math.floor(args.maxMs)) : minMs;
      var scaled = minMs + Math.min(Math.max(0, maxMs - minMs), safe * 0.18);
      return Math.max(minMs, Math.min(maxMs, Math.round(scaled)));
    }

    function safeViewportTransform(t){
      var k = t && isFinite(t.k) ? Math.max(0.001, t.k) : 1;
      var x = t && isFinite(t.x) ? t.x : 0;
      var y = t && isFinite(t.y) ? t.y : 0;
      return { k: k, x: x, y: y };
    }
    function screenToWorld(args){
      var t = safeViewportTransform(args && args.transform ? args.transform : null);
      var sx = (args && isFinite(args.sx)) ? args.sx : 0;
      var sy = (args && isFinite(args.sy)) ? args.sy : 0;
      var baseSx = (svgBase && isFinite(svgBase.sx) && svgBase.sx > 0) ? svgBase.sx : 1;
      var baseSy = (svgBase && isFinite(svgBase.sy) && svgBase.sy > 0) ? svgBase.sy : 1;
      var ox = (svgBase && isFinite(svgBase.ox)) ? svgBase.ox : 0;
      var oy = (svgBase && isFinite(svgBase.oy)) ? svgBase.oy : 0;
      return { x: (sx - t.x - ox) / (t.k * baseSx), y: (sy - t.y - oy) / (t.k * baseSy) };
    }
    function computeAnchoredTransform(args){
      var t0 = safeViewportTransform(args && args.transform ? args.transform : null);
      var nextK = (args && isFinite(args.nextK)) ? args.nextK : t0.k;
      var sx = (args && args.anchor && isFinite(args.anchor.sx)) ? args.anchor.sx : 0;
      var sy = (args && args.anchor && isFinite(args.anchor.sy)) ? args.anchor.sy : 0;
      var world = screenToWorld({ transform: t0, sx: sx, sy: sy });
      var baseSx = (svgBase && isFinite(svgBase.sx) && svgBase.sx > 0) ? svgBase.sx : 1;
      var baseSy = (svgBase && isFinite(svgBase.sy) && svgBase.sy > 0) ? svgBase.sy : 1;
      var ox = (svgBase && isFinite(svgBase.ox)) ? svgBase.ox : 0;
      var oy = (svgBase && isFinite(svgBase.oy)) ? svgBase.oy : 0;
      var nextX = sx - ox - world.x * nextK * baseSx;
      var nextY = sy - oy - world.y * nextK * baseSy;
      return { k: nextK, x: nextX, y: nextY };
    }

    function normalizeWheelDeltaXpx(e){
      var raw = (e && typeof e.deltaX === 'number' && isFinite(e.deltaX)) ? e.deltaX : 0;
      var mode = (e && typeof e.deltaMode === 'number' && isFinite(e.deltaMode)) ? e.deltaMode : 0;
      if (mode === 1) return raw * 16;
      if (mode === 2) return raw * 800;
      return raw;
    }
    function normalizeWheelDeltaYpx(e){
      var raw = (e && typeof e.deltaY === 'number' && isFinite(e.deltaY)) ? e.deltaY : 0;
      var mode = (e && typeof e.deltaMode === 'number' && isFinite(e.deltaMode)) ? e.deltaMode : 0;
      if (mode === 1) return raw * 16;
      if (mode === 2) return raw * 800;
      return raw;
    }
    function normalizeWheelDeltasPx(e){ return { dx: normalizeWheelDeltaXpx(e), dy: normalizeWheelDeltaYpx(e) }; }
    function computeWheelZoomFactor(deltaYpx){
      var VIEWPORT_WHEEL_ZOOM_SENSITIVITY = 0.001;
      var safe = isFinite(deltaYpx) ? deltaYpx : 0;
      return Math.exp(-safe * VIEWPORT_WHEEL_ZOOM_SENSITIVITY);
    }
    function clampWheelZoomCtrlMetaBoostMultiplier(v){
      var def = 120, min = 1, max = 400;
      if (typeof v !== 'number' || !isFinite(v)) return def;
      if (v < min) return min;
      if (v > max) return max;
      return v;
    }
    function computeZoomWheelDeltaYpx(e, multiplier, ctrlMetaBoostMultiplier){
      var m = (typeof multiplier === 'number' && isFinite(multiplier)) ? multiplier : 1;
      var base = normalizeWheelDeltaYpx(e);
      var isCtrlMeta = !!(e && (e.ctrlKey === true || e.metaKey === true));
      var pinchBoost = 1;
      if (isCtrlMeta) {
        var absBase = Math.abs(base);
        var frac = Math.abs(base - Math.round(base));
        var looksLikeTrackpadPinch = absBase > 0 && absBase <= 240 && frac > 1e-3;
        if (looksLikeTrackpadPinch) pinchBoost = clampWheelZoomCtrlMetaBoostMultiplier(ctrlMetaBoostMultiplier);
        else {
          var looksLikeMouseWheel = absBase >= 60 && frac <= 1e-3;
          if (!looksLikeMouseWheel) {
            if (absBase <= 40) pinchBoost = clampWheelZoomCtrlMetaBoostMultiplier(ctrlMetaBoostMultiplier);
          }
        }
      }
      return base * m * pinchBoost;
    }
    function coerceWheelFallback(args){
      var fb = args ? args.fallback : null;
      if (!fb) return null;
      if (!isFinite(fb.sx) || !isFinite(fb.sy)) return null;
      var ts = (typeof fb.ts === 'number' && isFinite(fb.ts)) ? fb.ts : null;
      if (ts != null) {
        var ageMs = args.nowMs - ts;
        if (!isFinite(ageMs) || ageMs < 0 || ageMs > args.maxAgeMs) return null;
      }
      return { sx: fb.sx, sy: fb.sy };
    }
    function resolveWheelAnchor(args){
      var rect = args.rect;
      var sx = args.clientX - rect.left;
      var sy = args.clientY - rect.top;
      var inside = isFinite(sx) && isFinite(sy) && sx >= 0 && sy >= 0 && sx <= rect.width && sy <= rect.height;
      if (inside) return { sx: sx, sy: sy, source: 'event' };
      var clamp = function(v,lo,hi){ if (!isFinite(v)) return lo; return Math.max(lo, Math.min(hi, v)); };
      if (isFinite(sx) && isFinite(sy) && isFinite(rect.width) && isFinite(rect.height)) {
        var edgeSnapMarginPx = 24;
        var clampedSx = clamp(sx, 0, rect.width);
        var clampedSy = clamp(sy, 0, rect.height);
        var outsideDx = sx < 0 ? -sx : sx > rect.width ? sx - rect.width : 0;
        var outsideDy = sy < 0 ? -sy : sy > rect.height ? sy - rect.height : 0;
        if (Math.max(outsideDx, outsideDy) <= edgeSnapMarginPx) {
          return { sx: clampedSx, sy: clampedSy, source: 'event' };
        }
      }
      var fb = args.fallback;
      if (fb && isFinite(fb.sx) && isFinite(fb.sy)) return { sx: fb.sx, sy: fb.sy, source: 'fallback' };
      return { sx: rect.width * 0.5, sy: rect.height * 0.5, source: 'center' };
    }
    function createZoomWheelGuardState(){ return { lastClampedOutAtMinTs: null }; }
    function computeZoomWheelIntent(deltaYpx){ return deltaYpx < 0 ? 'in' : 'out'; }
    function computeZoomWheelGuardDecision(args){
      var currentK = isFinite(args.currentK) ? args.currentK : 1;
      var minK0 = isFinite(args.minK) ? args.minK : 0.05;
      var maxK0 = isFinite(args.maxK) ? args.maxK : 8;
      var nowMs = isFinite(args.nowMs) ? args.nowMs : 0;
      var deltaYpx = isFinite(args.deltaYpx) ? args.deltaYpx : 0;
      var eps = 1e-6;
      var atMin = currentK <= minK0 + eps;
      var atMax = currentK >= maxK0 - eps;
      var intent = computeZoomWheelIntent(deltaYpx);
      var nextState = { lastClampedOutAtMinTs: atMin ? args.state.lastClampedOutAtMinTs : null };
      if ((atMin && intent === 'out') || (atMax && intent === 'in')) {
        if (atMin) nextState.lastClampedOutAtMinTs = nowMs;
        return { block: true, nextState: nextState };
      }
      if (atMin && intent === 'in') {
        var lastClampTs = nextState.lastClampedOutAtMinTs;
        var ageMs = lastClampTs == null ? Infinity : nowMs - lastClampTs;
        var smallReverse = Math.abs(deltaYpx) < 40;
        if (isFinite(ageMs) && ageMs >= 0 && ageMs < 220 && smallReverse) {
          return { block: true, nextState: nextState };
        }
      }
      return { block: false, nextState: nextState };
    }
    function shouldIgnoreCanvasWheelEvent(args){
      var event = args.event;
      var ignoreSelector = args.ignoreSelector;
      if (!ignoreSelector) return false;
      if (typeof document === 'undefined') return false;
      try { if (event && event.__kgForwarded === true) return false; } catch (err) {}
      var clientX = event && typeof event.clientX === 'number' ? event.clientX : null;
      var clientY = event && typeof event.clientY === 'number' ? event.clientY : null;
      function isFiniteNumber(v){ return typeof v === 'number' && isFinite(v); }
      function isClientPointInsideRect(x,y,rect){ return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom; }
      if (isFiniteNumber(clientX) && isFiniteNumber(clientY)) {
        var top = (typeof document.elementFromPoint === 'function') ? document.elementFromPoint(clientX, clientY) : null;
        if (top && typeof top.closest === 'function') {
          if (top.closest(ignoreSelector)) return true;
        }
        var ignoreNodes = document.querySelectorAll(ignoreSelector);
        if (!ignoreNodes || ignoreNodes.length === 0) return false;
        for (var i = 0; i < ignoreNodes.length; i += 1) {
          var el = ignoreNodes[i];
          if (!(el instanceof HTMLElement)) continue;
          try {
            var styles = getComputedStyle(el);
            if (styles.display === 'none') continue;
            if (styles.visibility === 'hidden') continue;
            var opacity = parseFloat(styles.opacity);
            if (isFinite(opacity) && opacity <= 0.01) continue;
          } catch (err) {}
          var rect = el.getBoundingClientRect();
          if (!(rect.width > 0 && rect.height > 0)) continue;
          if (isClientPointInsideRect(clientX, clientY, rect)) return true;
        }
        return false;
      }
      var nativeTarget = event && event.target ? event.target : null;
      if (nativeTarget && nativeTarget instanceof Element) {
        if (nativeTarget.closest(ignoreSelector)) return true;
      }
      var composedPath = event && typeof event.composedPath === 'function' ? event.composedPath : null;
      if (typeof composedPath === 'function') {
        var path = composedPath();
        for (var j = 0; j < path.length; j += 1) {
          var p = path[j];
          if (p instanceof Element && typeof p.closest === 'function') {
            if (p.closest(ignoreSelector)) return true;
          }
        }
      }
      return false;
    }

    function coerceViewportControlsPreset(value){
      var v = (typeof value === 'string') ? value : '';
      if (v === 'design' || v === 'map') return v;
      return 'map';
    }
    function shouldWheelZoomForPreset(e,preset){
      if (preset === 'design') return e && (e.ctrlKey === true || e.metaKey === true);
      return true;
    }
    function computeWheelPanDeltaPx(e){
      var d = normalizeWheelDeltasPx(e);
      if (e && e.shiftKey === true && Math.abs(d.dx) < 1e-6) return { dx: d.dy, dy: 0 };
      return d;
    }
    function isPanDragButton(button,preset){
      var b = (typeof button === 'number' && isFinite(button)) ? button : 0;
      if (preset === 'design') return b === 1 || b === 2;
      return b === 0;
    }
    function shouldAllowPanDragForPreset(args){
      var type = (typeof args.eventType === 'string') ? args.eventType : '';
      if (type.indexOf('touch') === 0) return true;
      if (args.preset === 'design') {
        if (isPanDragButton(args.button, args.preset)) return true;
        return args.spacePanHeld === true && args.button === 0;
      }
      return isPanDragButton(args.button, args.preset);
    }
    function shouldAllowPanDragForPointerEvent(args){
      var type = (typeof args.eventType === 'string') ? args.eventType : '';
      var isDown = type === 'pointerdown' || type === 'mousedown';
      if (args.preset === 'map' && args.shiftKey === true && isDown && args.button === 0) return false;
      return shouldAllowPanDragForPreset({ preset: args.preset, eventType: type, button: args.button, spacePanHeld: args.spacePanHeld });
    }
    function shouldSuppressContextMenuForPreset(preset){ return preset === 'design'; }

    var lastPointerInCanvas = null;
    var guardState = createZoomWheelGuardState();
    var wheelZoomAnimRaf = null;
    var wheelZoomAnimStart = 0;
    var wheelZoomAnimDurationMs = 0;
    var wheelZoomFrom = { k: 1, x: 0, y: 0 };
    var wheelZoomToK = 1;
    var wheelZoomAnchor = { sx: 0, sy: 0 };

    function cancelWheelZoomAnimation(){
      if (wheelZoomAnimRaf == null) return;
      try { cancelAnimationFrame(wheelZoomAnimRaf); } catch (err) {}
      wheelZoomAnimRaf = null;
    }
    function tickWheelZoomAnimation(now){
      var elapsed = now - wheelZoomAnimStart;
      var raw01 = wheelZoomAnimDurationMs > 0 ? elapsed / wheelZoomAnimDurationMs : 1;
      var eased = easeOutCubic01(raw01);
      var k = lerpNumber(wheelZoomFrom.k, wheelZoomToK, eased);
      var next = computeAnchoredTransform({ transform: wheelZoomFrom, anchor: wheelZoomAnchor, nextK: k });
      state.k = next.k; state.x = next.x; state.y = next.y;
      applyTransform();
      if (!(raw01 < 1)) { wheelZoomAnimRaf = null; return; }
      wheelZoomAnimRaf = requestAnimationFrame(tickWheelZoomAnimation);
    }
    function startWheelZoomAnimation(args){
      cancelWheelZoomAnimation();
      cancelViewAnimation();
      wheelZoomFrom = safeViewportTransform(args.from);
      wheelZoomToK = (typeof args.toK === 'number' && isFinite(args.toK)) ? args.toK : wheelZoomFrom.k;
      wheelZoomAnchor = { sx: args.anchor.sx, sy: args.anchor.sy };
      wheelZoomAnimDurationMs = Math.max(0, Math.floor(args.durationMs));
      wheelZoomAnimStart = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
      wheelZoomAnimRaf = requestAnimationFrame(tickWheelZoomAnimation);
    }

    var viewAnimRaf = null;
    var viewAnimFrom = { k: 1, x: 0, y: 0 };
    var viewAnimTo = { k: 1, x: 0, y: 0 };
    var viewAnimDurationMs = 0;
    var viewAnimStart = 0;
    function cancelViewAnimation(){
      if (viewAnimRaf == null) return;
      try { cancelAnimationFrame(viewAnimRaf); } catch (err) {}
      viewAnimRaf = null;
    }
    function tickViewAnimation(now){
      if (viewAnimRaf == null) return;
      var tNow = (typeof now === 'number' && isFinite(now)) ? now : ((typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now());
      var elapsed = tNow - viewAnimStart;
      var raw01 = viewAnimDurationMs > 0 ? elapsed / viewAnimDurationMs : 1;
      var eased = easeOutCubic01(raw01);
      var k = lerpNumber(viewAnimFrom.k, viewAnimTo.k, eased);
      var x = lerpNumber(viewAnimFrom.x, viewAnimTo.x, eased);
      var y = lerpNumber(viewAnimFrom.y, viewAnimTo.y, eased);
      state.k = k; state.x = x; state.y = y;
      applyTransform();
      if (!(raw01 < 1)) { viewAnimRaf = null; return; }
      viewAnimRaf = requestAnimationFrame(tickViewAnimation);
    }
    function startViewAnimation(args){
      cancelViewAnimation();
      viewAnimFrom = safeViewportTransform(args && args.from ? args.from : null);
      viewAnimTo = safeViewportTransform(args && args.to ? args.to : null);
      viewAnimDurationMs = Math.max(0, Math.floor(args && isFinite(args.durationMs) ? args.durationMs : 0));
      viewAnimStart = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
      if (viewAnimDurationMs <= 0) {
        state.k = viewAnimTo.k; state.x = viewAnimTo.x; state.y = viewAnimTo.y;
        applyTransform();
        viewAnimRaf = null;
        return;
      }
      viewAnimRaf = requestAnimationFrame(tickViewAnimation);
    }

    function rebuildSvgNodeIndex(){
      svgNodeById = Object.create(null);
      svgNodeElsById = Object.create(null);
      svgGroupElsById = Object.create(null);
      edgeRefsByNodeId = Object.create(null);
      edgeLabelElsByEdgeId = Object.create(null);
      edgeLineByEdgeId = Object.create(null);
      cachedNodeLabelEls = null;
      cachedGroupLabelLayerEl = null;
      cachedEdgeLabelLayerEl = null;
      cachedGroupLabelEls = null;
      cachedEdgeLabelEls = null;
      if (!svg || !svg.querySelectorAll) return;
      var nodeEls = svg.querySelectorAll('[data-node-id]');
      for (var i = 0; i < nodeEls.length; i += 1) {
        var el = nodeEls[i];
        if (!el || !el.getAttribute) continue;
        var id = String(el.getAttribute('data-node-id') || '');
        if (!id) continue;
        if (!svgNodeById[id]) svgNodeById[id] = el;
        var arr = svgNodeElsById[id] || (svgNodeElsById[id] = []);
        arr.push(el);
      }
      var groupEls = svg.querySelectorAll('[data-kg-group-id]');
      for (var j = 0; j < groupEls.length; j += 1) {
        var ge = groupEls[j];
        if (!ge || !ge.getAttribute) continue;
        var gid = String(ge.getAttribute('data-kg-group-id') || '');
        if (!gid) continue;
        var garr = svgGroupElsById[gid] || (svgGroupElsById[gid] = []);
        garr.push(ge);
      }
      var edgeEls = svg.querySelectorAll(
        'line[data-source-id][data-target-id],line[data-source][data-target],' +
        'path[data-source-id][data-target-id],path[data-source][data-target],' +
        'polyline[data-source-id][data-target-id],polyline[data-source][data-target]'
      );
      for (var k = 0; k < edgeEls.length; k += 1) {
        var ee = edgeEls[k];
        if (!ee || !ee.getAttribute) continue;
        var eid0 = '';
        try {
          eid0 = String(ee.getAttribute('data-edge-id') || '').trim();
          if (eid0 && !edgeLineByEdgeId[eid0]) edgeLineByEdgeId[eid0] = ee;
        } catch (err0) { eid0 = ''; }
        var src = String(ee.getAttribute('data-source-id') || ee.getAttribute('data-source') || '').trim();
        var tgt = String(ee.getAttribute('data-target-id') || ee.getAttribute('data-target') || '').trim();
        if ((!src || !tgt) && eid0 && edgeMetaById && edgeMetaById[eid0]) {
          try {
            var meta = edgeMetaById[eid0];
            src = src || String(meta.s || '').trim();
            tgt = tgt || String(meta.t || '').trim();
            if (src) ee.setAttribute('data-source-id', src);
            if (tgt) ee.setAttribute('data-target-id', tgt);
          } catch (err1) {}
        }
        if (!src || !tgt) continue;
        var a0 = edgeRefsByNodeId[src] || (edgeRefsByNodeId[src] = []);
        a0.push({ el: ee, end: 's' });
        var a1 = edgeRefsByNodeId[tgt] || (edgeRefsByNodeId[tgt] = []);
        a1.push({ el: ee, end: 't' });
      }
      var edgeLabelEls = svg.querySelectorAll('[data-kg-edge-label="1"][data-edge-id], text[data-kg-edge-label][data-edge-id]');
      for (var li = 0; li < edgeLabelEls.length; li += 1) {
        var le = edgeLabelEls[li];
        if (!le || !le.getAttribute) continue;
        var eid = String(le.getAttribute('data-edge-id') || '').trim();
        if (!eid) continue;
        var arr = edgeLabelElsByEdgeId[eid] || (edgeLabelElsByEdgeId[eid] = []);
        arr.push(le);
      }
      try { cachedNodeLabelEls = svg.querySelectorAll('[data-kg-layer="labels"] text.node-label'); } catch (err) { cachedNodeLabelEls = null; }
      try {
        cachedGroupLabelLayerEl = svg.querySelector('[data-kg-layer="group-labels"]');
        cachedGroupLabelEls = cachedGroupLabelLayerEl && cachedGroupLabelLayerEl.querySelectorAll ? cachedGroupLabelLayerEl.querySelectorAll('text') : null;
      } catch (err2) { cachedGroupLabelLayerEl = null; cachedGroupLabelEls = null; }
      try {
        cachedEdgeLabelLayerEl = svg.querySelector('[data-kg-layer="edge-labels"]');
        cachedEdgeLabelEls = cachedEdgeLabelLayerEl && cachedEdgeLabelLayerEl.querySelectorAll ? cachedEdgeLabelLayerEl.querySelectorAll('text') : null;
      } catch (err3) { cachedEdgeLabelLayerEl = null; cachedEdgeLabelEls = null; }
      try { rebuildNodePosFromSvg(); } catch (err) {}
      try { updateAllEdgeLabelPositions(); } catch (err) {}
      try { applySelectionHighlight(); } catch (err) {}
    }

    function setSelection(next){
      var nextNodeId = next && typeof next.nodeId === 'string' ? String(next.nodeId || '').trim() : '';
      var nextEdgeId = next && typeof next.edgeId === 'string' ? String(next.edgeId || '').trim() : '';
      selectionState.nodeId = nextNodeId || null;
      selectionState.edgeId = nextEdgeId || null;
      try { applySelectionHighlight(); } catch (err) {}
    }

    function ensureBaseAttr(el, name, value){
      if (!el || !el.getAttribute || !el.setAttribute) return;
      if (el.getAttribute(name) != null) return;
      el.setAttribute(name, String(value == null ? '' : value));
    }

    function coerceBaseOpacity(el){
      if (!el) return 1;
      var existing = null;
      try { existing = el.getAttribute('data-kg-base-opacity'); } catch (err) {}
      if (existing != null && existing !== '') {
        var v = parseFloat(existing);
        return isFinite(v) ? v : 1;
      }
      var raw = '';
      try { raw = (el.style && typeof el.style.opacity === 'string') ? el.style.opacity : ''; } catch (err) {}
      if (!raw) {
        try { raw = String(el.getAttribute('opacity') || '').trim(); } catch (err) {}
      }
      var parsed = parseFloat(raw || 'NaN');
      var base = isFinite(parsed) ? parsed : 1;
      try { ensureBaseAttr(el, 'data-kg-base-opacity', String(base)); } catch (err) {}
      return base;
    }

    function setOpacity(el, value){
      if (!el || !el.style) return;
      el.style.opacity = String(value);
    }

    function computeNeighborNodeIds(selectedNodeId){
      var set = Object.create(null);
      if (!selectedNodeId) return set;
      var refs = edgeRefsByNodeId && edgeRefsByNodeId[selectedNodeId] ? edgeRefsByNodeId[selectedNodeId] : null;
      if (!refs || refs.length === 0) return set;
      for (var i = 0; i < refs.length; i += 1) {
        var r = refs[i];
        var el = r && r.el ? r.el : null;
        if (!el || !el.getAttribute) continue;
        var src = String(el.getAttribute('data-source-id') || el.getAttribute('data-source') || '').trim();
        var tgt = String(el.getAttribute('data-target-id') || el.getAttribute('data-target') || '').trim();
        if (src && src !== selectedNodeId) set[src] = 1;
        if (tgt && tgt !== selectedNodeId) set[tgt] = 1;
      }
      return set;
    }

    function computeEdgeEndpoints(edgeId){
      if (!edgeId) return null;
      var el = edgeLineByEdgeId && edgeLineByEdgeId[edgeId] ? edgeLineByEdgeId[edgeId] : null;
      if (!el || !el.getAttribute) return null;
      var src = String(el.getAttribute('data-source-id') || el.getAttribute('data-source') || '').trim();
      var tgt = String(el.getAttribute('data-target-id') || el.getAttribute('data-target') || '').trim();
      if (!src || !tgt) return null;
      return { src: src, tgt: tgt };
    }

    function applySelectionHighlight(){
      var nodeId = selectionState.nodeId;
      var edgeId = selectionState.edgeId;
      var key = (nodeId || '') + '|' + (edgeId || '');
      if (key === lastSelectionKey) return;
      lastSelectionKey = key;

      var hasSelection = !!(nodeId || edgeId);
      var neighborSet = nodeId ? computeNeighborNodeIds(nodeId) : Object.create(null);
      var edgeEndpoints = edgeId ? computeEdgeEndpoints(edgeId) : null;

      var allNodeEls = svg ? svg.querySelectorAll('[data-node-id]') : null;
      if (allNodeEls && allNodeEls.length) {
        for (var i = 0; i < allNodeEls.length; i += 1) {
          var el = allNodeEls[i];
          if (!el || !el.getAttribute) continue;
          var id = String(el.getAttribute('data-node-id') || '').trim();
          var base = coerceBaseOpacity(el);
          if (!hasSelection) {
            setOpacity(el, base);
            continue;
          }
          var isSelected = nodeId && id === nodeId;
          var isNeighbor = nodeId && neighborSet && neighborSet[id] === 1;
          var isEdgeEndpoint = !!(edgeEndpoints && (id === edgeEndpoints.src || id === edgeEndpoints.tgt));
          var keep = isSelected || isNeighbor || isEdgeEndpoint;
          setOpacity(el, keep ? Math.max(base, 1) : Math.min(base, 0.2));
        }
      }

      var allEdgeEls = svg ? svg.querySelectorAll('line[data-edge-id],path[data-edge-id],polyline[data-edge-id]') : null;
      if (allEdgeEls && allEdgeEls.length) {
        for (var j = 0; j < allEdgeEls.length; j += 1) {
          var ee = allEdgeEls[j];
          if (!ee || !ee.getAttribute) continue;
          var eid = String(ee.getAttribute('data-edge-id') || '').trim();
          var baseOpacity = coerceBaseOpacity(ee);
          ensureBaseAttr(ee, 'data-kg-base-stroke', String(ee.getAttribute('stroke') || ''));
          ensureBaseAttr(ee, 'data-kg-base-stroke-width', String(ee.getAttribute('stroke-width') || ''));
          if (!hasSelection) {
            setOpacity(ee, baseOpacity);
            continue;
          }
          var isPicked = edgeId && eid === edgeId;
          setOpacity(ee, isPicked ? 1 : Math.min(baseOpacity, 0.2));
          if (isPicked) {
            try {
              var baseW = parseFloat(ee.getAttribute('data-kg-base-stroke-width') || 'NaN');
              if (!isFinite(baseW)) baseW = parseFloat(ee.getAttribute('stroke-width') || 'NaN');
              if (!isFinite(baseW)) baseW = 2;
              ee.setAttribute('stroke', 'var(--kg-canvas-accent)');
              ee.setAttribute('stroke-width', String(baseW * 1.6));
            } catch (err) {}
          } else {
            try {
              var baseStroke = String(ee.getAttribute('data-kg-base-stroke') || '').trim();
              if (baseStroke) ee.setAttribute('stroke', baseStroke);
              var baseStrokeWidth = String(ee.getAttribute('data-kg-base-stroke-width') || '').trim();
              if (baseStrokeWidth) ee.setAttribute('stroke-width', baseStrokeWidth);
            } catch (err) {}
          }
        }
      }

      var edgeLabelEls = svg ? svg.querySelectorAll('[data-kg-edge-label="1"][data-edge-id], text[data-kg-edge-label][data-edge-id]') : null;
      if (edgeLabelEls && edgeLabelEls.length) {
        for (var k = 0; k < edgeLabelEls.length; k += 1) {
          var le = edgeLabelEls[k];
          if (!le || !le.getAttribute) continue;
          var baseOp = coerceBaseOpacity(le);
          if (!hasSelection) {
            setOpacity(le, baseOp);
            continue;
          }
          var lid = String(le.getAttribute('data-edge-id') || '').trim();
          setOpacity(le, edgeId && lid === edgeId ? 1 : Math.min(baseOp, 0.2));
        }
      }

      var overlayEls = overlay ? overlay.querySelectorAll('.kg-media[data-node-id]') : null;
      if (overlayEls && overlayEls.length) {
        for (var m = 0; m < overlayEls.length; m += 1) {
          var oe = overlayEls[m];
          if (!oe || !oe.getAttribute) continue;
          var nid = String(oe.getAttribute('data-node-id') || '').trim();
          if (!hasSelection) {
            setOpacity(oe, 1);
            continue;
          }
          var keep0 = (nodeId && nid === nodeId) || (edgeEndpoints && (nid === edgeEndpoints.src || nid === edgeEndpoints.tgt)) || (nodeId && neighborSet && neighborSet[nid] === 1);
          setOpacity(oe, keep0 ? 1 : 0.22);
        }
      }
    }

    function updateEdgeLabelPositionByEdgeId(edgeId){
      if (!edgeId) return;
      var labels = edgeLabelElsByEdgeId && edgeLabelElsByEdgeId[edgeId] ? edgeLabelElsByEdgeId[edgeId] : null;
      if (!labels || labels.length === 0) return;
      var line = edgeLineByEdgeId && edgeLineByEdgeId[edgeId] ? edgeLineByEdgeId[edgeId] : null;
      if (!line || !line.getAttribute) return;
      var mid = null;
      try { mid = getEdgeMidpointFromEl(line); } catch (e0) { mid = null; }
      if (!mid || !isFinite(mid.x) || !isFinite(mid.y)) return;
      var mx = mid.x;
      var my = mid.y;
      for (var i = 0; i < labels.length; i += 1) {
        var el = labels[i];
        if (!el || !el.setAttribute) continue;
        el.setAttribute('x', String(mx));
        el.setAttribute('y', String(my));
      }
    }

    function updateAllEdgeLabelPositions(){
      if (!edgeLabelElsByEdgeId) return;
      for (var eid in edgeLabelElsByEdgeId) {
        updateEdgeLabelPositionByEdgeId(eid);
      }
    }

    var pendingEdgeLabelIds = null;
    var edgeLabelRaf = null;
    function scheduleEdgeLabelUpdate(edgeId){
      if (!edgeId) return;
      if (!pendingEdgeLabelIds) pendingEdgeLabelIds = {};
      pendingEdgeLabelIds[edgeId] = 1;
      if (edgeLabelRaf != null) return;
      edgeLabelRaf = requestAnimationFrame(function(){
        edgeLabelRaf = null;
        var ids = pendingEdgeLabelIds;
        pendingEdgeLabelIds = null;
        if (!ids) return;
        for (var k in ids) updateEdgeLabelPositionByEdgeId(k);
      });
    }

    function updateEdgeGeometryByEl(edgeEl){
      if (!edgeEl || !edgeEl.getAttribute) return;
      var src = String(edgeEl.getAttribute('data-source-id') || edgeEl.getAttribute('data-source') || '').trim();
      var tgt = String(edgeEl.getAttribute('data-target-id') || edgeEl.getAttribute('data-target') || '').trim();
      if (!src || !tgt) return;
      var a = nodePosById && nodePosById[src] ? nodePosById[src] : null;
      var b = nodePosById && nodePosById[tgt] ? nodePosById[tgt] : null;
      if (!a || !b) return;
      var x1 = Number(a.x);
      var y1 = Number(a.y);
      var x2 = Number(b.x);
      var y2 = Number(b.y);
      try {
        if (overlayFollowAnimation && svg && svg.__kgNodeOffsetById) {
          var om = svg.__kgNodeOffsetById;
          var oa = (om && om[src]) ? om[src] : null;
          var ob = (om && om[tgt]) ? om[tgt] : null;
          if (oa && isFinite(oa.x) && isFinite(oa.y)) { x1 += Number(oa.x); y1 += Number(oa.y); }
          if (ob && isFinite(ob.x) && isFinite(ob.y)) { x2 += Number(ob.x); y2 += Number(ob.y); }
        }
      } catch (eOff) { void 0; }
      if (!isFinite(x1) || !isFinite(y1) || !isFinite(x2) || !isFinite(y2)) return;
      var tag = String(edgeEl.tagName || '').toLowerCase();
      if (tag === 'line') {
        edgeEl.setAttribute('x1', String(x1));
        edgeEl.setAttribute('y1', String(y1));
        edgeEl.setAttribute('x2', String(x2));
        edgeEl.setAttribute('y2', String(y2));
        return;
      }
      if (tag === 'polyline') {
        edgeEl.setAttribute('points', String(x1) + ',' + String(y1) + ' ' + String(x2) + ',' + String(y2));
        return;
      }
      if (tag === 'path') {
        edgeEl.setAttribute('d', 'M ' + String(x1) + ' ' + String(y1) + ' L ' + String(x2) + ' ' + String(y2));
      }
    }

    function getEdgeMidpointFromEl(edgeEl){
      if (!edgeEl || !edgeEl.getAttribute) return null;
      var tag = String(edgeEl.tagName || '').toLowerCase();
      if (tag === 'line') {
        var x1 = parseFloat(edgeEl.getAttribute('x1') || 'NaN');
        var y1 = parseFloat(edgeEl.getAttribute('y1') || 'NaN');
        var x2 = parseFloat(edgeEl.getAttribute('x2') || 'NaN');
        var y2 = parseFloat(edgeEl.getAttribute('y2') || 'NaN');
        if (!isFinite(x1) || !isFinite(y1) || !isFinite(x2) || !isFinite(y2)) return null;
        return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
      }
      if (tag === 'polyline') {
        var pts = String(edgeEl.getAttribute('points') || '').trim();
        if (!pts) return null;
        var nums = pts.match(/[-0-9.]+/g);
        if (!nums || nums.length < 4) return null;
        var x1p = parseFloat(nums[0]);
        var y1p = parseFloat(nums[1]);
        var x2p = parseFloat(nums[nums.length - 2]);
        var y2p = parseFloat(nums[nums.length - 1]);
        if (!isFinite(x1p) || !isFinite(y1p) || !isFinite(x2p) || !isFinite(y2p)) return null;
        return { x: (x1p + x2p) / 2, y: (y1p + y2p) / 2 };
      }
      if (tag === 'path') {
        var d = String(edgeEl.getAttribute('d') || '').trim();
        if (!d) return null;
        var ns = d.match(/[-0-9.]+/g);
        if (!ns || ns.length < 4) return null;
        var x1d = parseFloat(ns[0]);
        var y1d = parseFloat(ns[1]);
        var x2d = parseFloat(ns[ns.length - 2]);
        var y2d = parseFloat(ns[ns.length - 1]);
        if (!isFinite(x1d) || !isFinite(y1d) || !isFinite(x2d) || !isFinite(y2d)) return null;
        return { x: (x1d + x2d) / 2, y: (y1d + y2d) / 2 };
      }
      return null;
    }

    var pendingEdgeGeomEls = null;
    var edgeGeomRaf = null;
    var edgeGeomBatchToken = 1;
    function scheduleEdgeGeometryUpdateForNode(nodeId){
      if (!nodeId) return;
      var refs = edgeRefsByNodeId && edgeRefsByNodeId[nodeId] ? edgeRefsByNodeId[nodeId] : null;
      if (!refs || refs.length === 0) return;
      if (!pendingEdgeGeomEls) pendingEdgeGeomEls = [];
      var tok = edgeGeomBatchToken;
      for (var i = 0; i < refs.length; i += 1) {
        var r = refs[i];
        var el = r && r.el ? r.el : null;
        if (!el || !el.getAttribute) continue;
        if (el.__kgEdgeGeomToken === tok) continue;
        el.__kgEdgeGeomToken = tok;
        pendingEdgeGeomEls.push(el);
      }
      if (edgeGeomRaf != null) return;
      edgeGeomRaf = requestAnimationFrame(function(){
        edgeGeomRaf = null;
        edgeGeomBatchToken = (edgeGeomBatchToken + 1) % 1000000;
        var list = pendingEdgeGeomEls;
        pendingEdgeGeomEls = null;
        if (!list || list.length === 0) return;
        for (var j = 0; j < list.length; j += 1) {
          var ee = list[j];
          try { updateEdgeGeometryByEl(ee); } catch (e0) {}
          try {
            var eid = String((ee && ee.getAttribute) ? (ee.getAttribute('data-edge-id') || '') : '').trim();
            if (eid) scheduleEdgeLabelUpdate(eid);
          } catch (e1) {}
        }
      });
    }

    function rebuildNodePosFromSvg(){
      if (!svg || !svg.querySelectorAll) return;

      function readTranslate(tr){
        var m = String(tr || '').match(/translate\\\\(\\\\s*([-0-9.]+)\\\\s*[ ,]\\\\s*([-0-9.]+)\\\\s*\\\\)/);
        if (!m) return null;
        var x = parseFloat(m[1]);
        var y = parseFloat(m[2]);
        if (!isFinite(x) || !isFinite(y)) return null;
        return { x: x, y: y };
      }

      function readCenterFromEl(el){
        if (!el || !el.getAttribute) return null;
        var tag = String(el.tagName || '').toLowerCase();
        if (tag === 'circle') {
          var cx = parseFloat(el.getAttribute('cx') || 'NaN');
          var cy = parseFloat(el.getAttribute('cy') || 'NaN');
          if (isFinite(cx) && isFinite(cy)) return { x: cx, y: cy };
        }
        if (tag === 'rect') {
          var x0 = parseFloat(el.getAttribute('x') || 'NaN');
          var y0 = parseFloat(el.getAttribute('y') || 'NaN');
          var w0 = parseFloat(el.getAttribute('width') || 'NaN');
          var h0 = parseFloat(el.getAttribute('height') || 'NaN');
          if (isFinite(x0) && isFinite(y0) && isFinite(w0) && isFinite(h0)) return { x: x0 + w0 / 2, y: y0 + h0 / 2 };
        }
        var tr = readTranslate(el.getAttribute('transform'));
        if (tag === 'g' && el.querySelector) {
          var base = null;
          var c = el.querySelector('circle[data-role="node-circle"], circle[cx][cy]');
          if (c && c.getAttribute) {
      `,`      var ccx = parseFloat(c.getAttribute('cx') || 'NaN');
            var ccy = parseFloat(c.getAttribute('cy') || 'NaN');
            if (isFinite(ccx) && isFinite(ccy)) base = { x: ccx, y: ccy };
          }
          if (!base) {
            var r = el.querySelector('rect[x][y][width][height]');
            if (r && r.getAttribute) {
              var rx = parseFloat(r.getAttribute('x') || 'NaN');
              var ry = parseFloat(r.getAttribute('y') || 'NaN');
              var rw = parseFloat(r.getAttribute('width') || 'NaN');
              var rh = parseFloat(r.getAttribute('height') || 'NaN');
              if (isFinite(rx) && isFinite(ry) && isFinite(rw) && isFinite(rh)) base = { x: rx + rw / 2, y: ry + rh / 2 };
            }
          }
          if (base && tr) return { x: base.x + tr.x, y: base.y + tr.y };
          if (base) return base;
          if (tr) return tr;
        }
        if (tr) return tr;
        return null;
      }

      var ids = Object.create(null);
      for (var id in svgNodeById) ids[id] = 1;
      for (var id2 in edgeRefsByNodeId) ids[id2] = 1;
      for (var mi = 0; mi < (mediaNodes ? mediaNodes.length : 0); mi += 1) {
        var m = mediaNodes[mi];
        var mid = m && m.id ? String(m.id || '').trim() : '';
        if (mid) ids[mid] = 1;
      }

      for (var id3 in ids) {
        if (!id3) continue;
        var el0 = svgNodeById[id3] || null;
        var p = el0 ? readCenterFromEl(el0) : null;
        if (!p) {
          var list = svgNodeElsById[id3] || null;
          if (list && list.length) p = readCenterFromEl(list[0]);
        }
        if (!p) {
          var refs = edgeRefsByNodeId[id3] || null;
          if (refs && refs.length) {
            var r0 = refs[0];
            if (r0 && r0.el && r0.el.getAttribute) {
              var ax = r0.end === 's' ? 'x1' : 'x2';
              var ay = r0.end === 's' ? 'y1' : 'y2';
              var ex = parseFloat(r0.el.getAttribute(ax) || 'NaN');
              var ey = parseFloat(r0.el.getAttribute(ay) || 'NaN');
              if (isFinite(ex) && isFinite(ey)) p = { x: ex, y: ey };
            }
          }
        }
        if (p && isFinite(p.x) && isFinite(p.y)) {
          if (!nodePosById) nodePosById = Object.create(null);
          nodePosById[id3] = { x: p.x, y: p.y };
        }
      }
    }

    function clearSelection(){
      try {
        var s = (window.getSelection && window.getSelection()) || null;
        if (s && s.removeAllRanges) s.removeAllRanges();
      } catch (err) {}
    }

    function clamp(v, lo, hi){ return Math.max(lo, Math.min(hi, v)); }
    function ensureSvgViewportGroup(){
      if (!svg) return null;
      try {
        var nonDefs = [];
        var defsEl = null;
        if (svg.children && svg.children.length) {
          for (var i = 0; i < svg.children.length; i += 1) {
            var ch = svg.children[i];
            if (!ch || !ch.tagName) continue;
            var tag = String(ch.tagName || '').toLowerCase();
            if (tag === 'defs') {
              if (!defsEl) defsEl = ch;
              continue;
            }
            nonDefs.push(ch);
          }
        }

        if (nonDefs.length === 1) {
          var only = nonDefs[0];
          if (String(only.tagName || '').toLowerCase() === 'g') return only;
        }

        var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('data-kg-viewport', '1');
        if (defsEl) svg.insertBefore(g, defsEl);
        else svg.appendChild(g);
        for (var j = 0; j < nonDefs.length; j += 1) {
          g.appendChild(nonDefs[j]);
        }
        return g;
      } catch (err) {
        return null;
      }
    }

    var svgViewportG = ensureSvgViewportGroup();

    var lastSvgTransform = '';
    function applyTransform(){
      var k = isFinite(state.k) ? state.k : 1;
      if (!(k > 0)) k = 1;
      var xPx = isFinite(state.x) ? state.x : 0;
      var yPx = isFinite(state.y) ? state.y : 0;
      var sx = (svgBase && isFinite(svgBase.sx) && svgBase.sx > 0) ? svgBase.sx : 1;
      var sy = (svgBase && isFinite(svgBase.sy) && svgBase.sy > 0) ? svgBase.sy : 1;
      var tx = xPx / sx;
      var ty = yPx / sy;
      var next = 'matrix(' + k + ',0,0,' + k + ',' + tx + ',' + ty + ')';
      if (next === lastSvgTransform) return;
      lastSvgTransform = next;
      try {
        if (svgViewportG && svgViewportG.setAttribute) {
          svgViewportG.setAttribute('transform', next);
        }
      } catch (err) {}
      scheduleOverlayUpdate();
      try { applyZoomResponsiveStyles(k); } catch (err) {}
      try { if (canvas3dEnabled && schedule3dFrame) schedule3dFrame(); } catch (err) {}
    }

    var lastMediaPointerEvents = '';
    var lastMediaBtnActive = null;
    function applyMediaPointerEvents(){
      var pe = (mediaInteractive && pointerMode !== 'pan' && !panHeld && !headerDrag) ? 'auto' : 'none';
      try {
        if (pe !== lastMediaPointerEvents) {
          lastMediaPointerEvents = pe;
          document.documentElement.style.setProperty('--kg-media-pointer-events', pe);
        }
      } catch (err) {}
      try {
        if (mediaBtn && mediaBtn.classList) {
          if (lastMediaBtnActive !== mediaInteractive) {
            lastMediaBtnActive = mediaInteractive;
            if (mediaInteractive) mediaBtn.classList.add('kg-active');
            else mediaBtn.classList.remove('kg-active');
          }
        }
      } catch (err) {}
    }

    var lastPanBtnActive = null;
    function applyPanModeUi(){
      try {
        if (!panBtn || !panBtn.classList) return;
        var active = pointerMode === 'pan';
        if (lastPanBtnActive === active) return;
        lastPanBtnActive = active;
        if (active) panBtn.classList.add('kg-active');
        else panBtn.classList.remove('kg-active');
      } catch (err) {}
    }

    function setPointerMode(next){
      pointerMode = String(next || 'select') === 'pan' ? 'pan' : 'select';
      applyPanModeUi();
      applyMediaPointerEvents();
      try { if (syncWebgl3dControls) syncWebgl3dControls(null); } catch (err) {}
      try { if (scheduleWebgl3dFrame) scheduleWebgl3dFrame(); } catch (err) {}
      try {
        if (pointerMode === 'pan') {
          if (headerDrag && headerDrag.pointerId != null) endHeaderDrag(headerDrag.pointerId);
        }
      } catch (err) {}
    }
    function setMediaInteractive(next){
      mediaInteractive = !!next;
      applyMediaPointerEvents();
    }
    function setPanHeld(next){
      panHeld = !!next;
      applyMediaPointerEvents();
      try { if (!panHeld) endDrag(); } catch (err) {}
      try { if (syncWebgl3dControls) syncWebgl3dControls(null); } catch (err) {}
      try { if (scheduleWebgl3dFrame) scheduleWebgl3dFrame(); } catch (err) {}
    }

    var svgBase = { sx: 1, sy: 1, ox: 0, oy: 0 };
    function refreshSvgBase(){
      if (!svg || !svg.getBoundingClientRect) return svgBase;
      try {
        var rect = svg.getBoundingClientRect();
        var rw = rect && isFinite(rect.width) ? rect.width : 0;
        var rh = rect && isFinite(rect.height) ? rect.height : 0;
        if (!(rw > 0) || !(rh > 0)) return svgBase;

        var vb = null;
        try {
          if (svg.viewBox && svg.viewBox.baseVal) {
            vb = {
              x: Number(svg.viewBox.baseVal.x),
              y: Number(svg.viewBox.baseVal.y),
              width: Number(svg.viewBox.baseVal.width),
              height: Number(svg.viewBox.baseVal.height),
            };
          }
        } catch (err) {}
        if (!vb || !(isFinite(vb.width) && vb.width > 0 && isFinite(vb.height) && vb.height > 0)) {
          vb = { x: 0, y: 0, width: rw, height: rh };
        }

        var par = '';
        try { par = String(svg.getAttribute('preserveAspectRatio') || '').trim(); } catch (err) {}
        if (!par) par = 'xMidYMid meet';
        var none = par.indexOf('none') >= 0;
        var meet = (!none && par.indexOf('slice') < 0);

        var sx0 = rw / vb.width;
        var sy0 = rh / vb.height;
        if (!(isFinite(sx0) && sx0 > 0)) sx0 = 1;
        if (!(isFinite(sy0) && sy0 > 0)) sy0 = 1;

        if (none) {
          svgBase.sx = sx0;
          svgBase.sy = sy0;
          svgBase.ox = -vb.x * sx0;
          svgBase.oy = -vb.y * sy0;
          return svgBase;
        }

        var s = meet ? Math.min(sx0, sy0) : Math.max(sx0, sy0);
        if (!(isFinite(s) && s > 0)) s = 1;
        var viewW = vb.width * s;
        var viewH = vb.height * s;
        var extraX = rw - viewW;
        var extraY = rh - viewH;
        var alignX = (par.indexOf('xMin') >= 0) ? 'min' : (par.indexOf('xMax') >= 0) ? 'max' : 'mid';
        var alignY = (par.indexOf('YMin') >= 0) ? 'min' : (par.indexOf('YMax') >= 0) ? 'max' : 'mid';
        var ax = (alignX === 'min') ? 0 : (alignX === 'max') ? extraX : extraX / 2;
        var ay = (alignY === 'min') ? 0 : (alignY === 'max') ? extraY : extraY / 2;
        svgBase.sx = s;
        svgBase.sy = s;
        svgBase.ox = ax - vb.x * s;
        svgBase.oy = ay - vb.y * s;
        return svgBase;
      } catch (err) {
        return svgBase;
      }
    }

    var viewport = { w: 0, h: 0 };
    function refreshViewport(){
      var r = root.getBoundingClientRect();
      viewport.w = Math.max(1, r.width);
      viewport.h = Math.max(1, r.height);
      try { refreshSvgBase(); } catch (err) {}
      try { if (resizeCanvas3d) resizeCanvas3d(); } catch (err) {}
      return viewport;
    }
    function getViewport(){
      if (viewport.w > 0 && viewport.h > 0) return viewport;
      return refreshViewport();
    }

    function getContentBBox(){
      try {
        if (svgViewportG && svgViewportG.getBBox) {
          return svgViewportG.getBBox();
        }
        if (svg && svg.getBBox) return svg.getBBox();
        if (svg && svg.viewBox && svg.viewBox.baseVal) {
          var vb = svg.viewBox.baseVal;
          var vx = Number(vb.x);
          var vy = Number(vb.y);
          var vw = Number(vb.width);
          var vh = Number(vb.height);
          if (isFinite(vx) && isFinite(vy) && isFinite(vw) && isFinite(vh) && vw > 0 && vh > 0) {
            return { x: vx, y: vy, width: vw, height: vh };
          }
        }
      } catch (e) {}
      try {
        if (nodePosById) {
          var minX = Infinity;
          var minY = Infinity;
          var maxX = -Infinity;
          var maxY = -Infinity;
          for (var id in nodePosById) {
            var p = nodePosById[id];
            if (!p) continue;
            var x = Number(p.x);
            var y = Number(p.y);
            if (!isFinite(x) || !isFinite(y)) continue;
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
          }
          if (isFinite(minX) && isFinite(minY) && isFinite(maxX) && isFinite(maxY) && maxX > minX && maxY > minY) {
            return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
          }
        }
      } catch (e2) {}
      return null;
    }

    function fitToCenter(){
      var vp = getViewport();
      var pad = 96;
      var bb = getContentBBox();
      if (!bb || !(bb.width > 0) || !(bb.height > 0)) {
        state.k = 1; state.x = 0; state.y = 0; applyTransform(); return;
      }
      var baseSx = (svgBase && isFinite(svgBase.sx) && svgBase.sx > 0) ? svgBase.sx : 1;
      var baseSy = (svgBase && isFinite(svgBase.sy) && svgBase.sy > 0) ? svgBase.sy : 1;
      var ox = (svgBase && isFinite(svgBase.ox)) ? svgBase.ox : 0;
      var oy = (svgBase && isFinite(svgBase.oy)) ? svgBase.oy : 0;
      var k = Math.min(
        vp.w / (bb.width * baseSx + pad * 2),
        vp.h / (bb.height * baseSy + pad * 2)
      );
      k = clamp(k, minK, maxK);
      var cx = bb.x + bb.width / 2;
      var cy = bb.y + bb.height / 2;
      var next = { k: k, x: vp.w / 2 - ox - cx * k * baseSx, y: vp.h / 2 - oy - cy * k * baseSy };
      startViewAnimation({ from: { k: state.k, x: state.x, y: state.y }, to: next, durationMs: 300 });
    }

    function resetView(){
      cancelWheelZoomAnimation();
      startViewAnimation({ from: { k: state.k, x: state.x, y: state.y }, to: { k: 1, x: 0, y: 0 }, durationMs: 0 });
    }

    function computeMediaPanelCssVars3d(args){
      var s = (typeof args.sizeScale === 'number' && isFinite(args.sizeScale)) ? Math.max(0.001, Number(args.sizeScale)) : 1;
      var density = String(args.density || 'default') === 'compact' ? 'compact' : 'default';
      var headerBase = density === 'compact' ? 22 : 28;
      var paddingBase = density === 'compact' ? 6 : 8;
      var radiusBase = density === 'compact' ? 9 : 10;
      var borderBase = 1;
      var titleBase = density === 'compact' ? 11 : 12;
      var headerH = Math.max(14, Math.round(headerBase * s));
      var padding = Math.max(2, Math.round(paddingBase * s));
      var radius = Math.max(3, Math.round(radiusBase * s));
      var borderW = Math.max(1, Math.round(borderBase * s));
      var titleSize = Math.max(10, Math.round(titleBase * s));
      var metrics = { headerH: headerH, borderW: borderW, radius: radius, padding: padding, titleSize: titleSize };
      var vars = {
        '--kg-media-panel-header-h': headerH + 'px',
        '--kg-media-panel-border-w': borderW + 'px',
        '--kg-media-panel-radius': radius + 'px',
        '--kg-media-panel-padding': padding + 'px',
        '--kg-media-panel-title-size': titleSize + 'px',
      };
      return { metrics: metrics, vars: vars };
    }

    function computePanelSizeFromContent16x9(args){
      var contentW = Math.max(2, Number(args.contentW) || 2);
      var contentH = Math.max(2, (contentW * 9) / 16);
      var padding = Math.max(0, Number(args.metrics && args.metrics.padding) || 0);
      var headerH = Math.max(0, Number(args.metrics && args.metrics.headerH) || 0);
      var panelW = Math.max(2, contentW + padding * 2);
      var panelH = Math.max(2, contentH + headerH + padding * 2);
      return { panelW: panelW, panelH: panelH, contentW: contentW, contentH: contentH };
    }

    function computePanelRect(args){
      var w = Math.max(1, Number(args.w) || 1);
      var h = Math.max(1, Number(args.h) || 1);
      var left = (Number(args.cx) || 0) - w / 2;
      var top = (Number(args.cy) || 0) - h / 2;
      return { left: left, top: top, w: w, h: h };
    }

    function applyMediaPanelCssVars(el, vars){
      if (!el || !el.style || !vars) return;
      var sig = '';
      var keys = Object.keys(vars);
      for (var i = 0; i < keys.length; i += 1) {
        var k = keys[i];
        sig += k + ':' + vars[k] + ';';
      }
      if (el.__kgVarsSig === sig) return;
      for (var i2 = 0; i2 < keys.length; i2 += 1) {
        var kk = keys[i2];
        el.style.setProperty(kk, vars[kk]);
      }
      el.__kgVarsSig = sig;
    }

    function applyPanelBox(el, args){
      if (!el || !el.style) return;
      var left = (typeof args.left === 'number' && isFinite(args.left)) ? args.left : 0;
      var top = (typeof args.top === 'number' && isFinite(args.top)) ? args.top : 0;
      var w = (typeof args.w === 'number' && isFinite(args.w)) ? args.w : 1;
      var h = (typeof args.h === 'number' && isFinite(args.h)) ? args.h : 1;
      var display = args.display === 'none' ? 'none' : 'block';
      var mode = 'transform';
      try {
        var d = el.dataset || null;
        mode = d && d.kgPanelBox === 'leftTop' ? 'leftTop' : 'transform';
      } catch (err) { mode = 'transform'; }
      var z = args.zIndex != null ? String(args.zIndex) : '';
      var sig = mode + '|' + display + '|' + z + '|' + left + '|' + top + '|' + w + '|' + h;
      if (el.__kgBoxSig === sig) return;
      el.style.display = display;
      if (display !== 'none') {
        if (mode === 'leftTop') {
          el.style.left = left + 'px';
          el.style.top = top + 'px';
          el.style.transform = 'translate3d(0px, 0px, 0px)';
        } else {
          el.style.transform = 'translate3d(' + left + 'px, ' + top + 'px, 0px)';
        }
        el.style.width = w + 'px';
        el.style.height = h + 'px';
        if (z) el.style.zIndex = z;
      }
      el.__kgBoxSig = sig;
    }

    function ensureMediaDom(){
      if (!overlay) return;
      if (overlay.__kgMediaBuilt) return;
      overlay.__kgMediaBuilt = true;
      overlay.__kgMediaById = {};

      try {
        var existing = overlay.querySelectorAll ? overlay.querySelectorAll('[data-kg-rich-media-panel=1][data-node-id][data-kg-rich-media-render-surface=1]') : null;
        if (existing && existing.length) {
          for (var ei = 0; ei < existing.length; ei += 1) {
            var ex = existing[ei];
            if (!ex || !ex.getAttribute) continue;
            var xid = __kgResolveNodeId(String(ex.getAttribute('data-node-id') || '').trim());
            if (!xid) continue;
            try {
              var curClass = String(ex.className || '');
              if (curClass.indexOf('kg-media') < 0 || curClass.indexOf('kg-mediaBody') < 0) {
                ex.className = ('kg-media kg-mediaBody ' + curClass).trim();
              }
            } catch (e0) {
              void 0;
            }
            overlay.__kgMediaById[xid] = ex;
          }
        }
      } catch (e0) {
        void 0;
      }

      if (!mediaNodes || mediaNodes.length === 0) return;
      for (var i = 0; i < mediaNodes.length; i += 1) {
        var n = mediaNodes[i];
        if (!n) continue;
        var id = __kgResolveNodeId(String(n.id || ''));
        if (!id) continue;
        n.id = id;
        if (overlay.__kgMediaById && overlay.__kgMediaById[id]) continue;

        var panel = document.createElement('section');
        panel.className = 'kg-media kg-mediaBody';
        panel.setAttribute('data-node-id', id);
        try { panel.setAttribute('data-kg-rich-media-panel', '1'); } catch (e1) { void 0; }
        try { panel.setAttribute('data-kg-rich-media-render-surface', '1'); } catch (e2) { void 0; }
        try { panel.setAttribute('data-kg-canvas-overlay-drag-handle', 'true'); } catch (e3) { void 0; }
        try { panel.setAttribute('data-kg-title', String(n.title || n.id || 'Media')); } catch (e4) { void 0; }

        var url = String(n.url || '');
        var openUrl = String((n && n.openUrl) || '');
        if (!openUrl) openUrl = url;
        try { panel.setAttribute('data-kg-url', url); } catch (e5) { void 0; }
        try { panel.setAttribute('data-kg-open-url', openUrl); } catch (e6) { void 0; }

        try {
          panel.addEventListener('click', function(ev){
            try {
              if (typeof mediaInteractive !== 'undefined' && mediaInteractive) return;
              var trg = (ev && ev.target && (ev.target instanceof Element)) ? ev.target : null;
              try {
                if (trg && trg.closest && trg.closest('[data-kg-resize-handle]')) return;
                if (trg && trg.closest && trg.closest('a,button,textarea,input,select,summary,[contenteditable="true"]')) return;
              } catch (eX) {
                void 0;
              }
              var open = String(panel.getAttribute('data-kg-open-url') || panel.getAttribute('data-kg-url') || '').trim();
              if (!open) return;
              try { ev.preventDefault(); } catch (e7) {}
              try { ev.stopPropagation(); } catch (e8) {}
              window.open(open, '_blank', 'noopener,noreferrer');
            } catch (e9) {
              void 0;
            }
          }, { passive: false });
        } catch (e10) {
          void 0;
        }

        var kind = String(n.kind || 'iframe');
        var inferredKind = kgInferMediaKindFromUrl2(url) || kgInferMediaKindFromUrl(url);
        if (inferredKind && (kind === 'iframe' || kind === '')) kind = inferredKind;
        panel.setAttribute('data-kg-kind', kind);

        if (kind === 'image' || kind === 'svg') {
          var imgEl = document.createElement('img');
          imgEl.loading = 'eager';
          imgEl.src = kgResolveMediaSrc(url, kind);
          imgEl.onerror = function(){
            try {
              var raw = String(url || '').trim();
              var cur = String(imgEl.getAttribute('src') || '').trim();
              if (KG_ALLOW_RUNTIME_NETWORK && raw && cur !== raw) imgEl.src = raw;
            } catch (e11) {
              void 0;
            }
          };
          panel.appendChild(imgEl);
        } else if (kind === 'video') {
          var vid = document.createElement('video');
          vid.src = kgResolveMediaSrc(url, kind);
          vid.onerror = function(){
            try {
              var raw = String(url || '').trim();
              var cur = String(vid.getAttribute('src') || '').trim();
              if (KG_ALLOW_RUNTIME_NETWORK && raw && cur !== raw) vid.src = raw;
            } catch (e12) {
              void 0;
            }
          };
          vid.controls = true;
          vid.preload = 'metadata';
          panel.appendChild(vid);
        } else {
          var iframe = document.createElement('iframe');
          iframe.loading = 'eager';
          iframe.referrerPolicy = 'no-referrer';
          iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
          iframe.setAttribute('sandbox', kgResolveIframeSandbox(url));
          var srcDoc = String((n && (n.srcDoc || n.srcdoc)) || '');
          if (srcDoc && String(srcDoc).trim()) {
            try { iframe.removeAttribute('src'); } catch (e13) {}
            try { iframe.srcdoc = String(srcDoc); } catch (e14) {}
          } else {
            iframe.src = kgResolveMediaSrc(url, kind);
          }
          panel.appendChild(iframe);
        }

        try {
          var nodeEl0 = svgNodeById && svgNodeById[id] ? svgNodeById[id] : null;
          if (svgNodeById) svgNodeById[id] = nodeEl0;
        } catch (e15) {
          void 0;
        }

        overlay.appendChild(panel);
        overlay.__kgMediaById[id] = panel;
      }
    }

    var overlayRaf = null;
    function scheduleOverlayUpdate(){
      if (overlayRaf != null) return;
      overlayRaf = requestAnimationFrame(function(){
        overlayRaf = null;
        updateOverlays();
      try { installMarkdownBlockInteractions(); } catch (e0) {}
      });
    }


    var __kgMdDrag = null;

    function installMarkdownBlockInteractions(){
      try {
        if (!svg) return;
        if (svg.__kgMarkdownBlocksInstalled) return;
        svg.__kgMarkdownBlocksInstalled = true;
        var layer = svg.querySelector('g[data-kg-layer="markdown-design-blocks"]');
        if (!layer) return;

        try {
          window.addEventListener('pointermove', function(ev){
            try {
              if (!__kgMdDrag || !ev) return;
              if (ev.pointerId !== __kgMdDrag.pid) return;
              var baseSx0 = (svgBase && isFinite(svgBase.sx) && svgBase.sx > 0) ? svgBase.sx : 1;
              var baseSy0 = (svgBase && isFinite(svgBase.sy) && svgBase.sy > 0) ? svgBase.sy : 1;
              var dx = (Number(ev.clientX) - Number(__kgMdDrag.sx)) / Math.max(0.001, state.k * baseSx0);
              var dy = (Number(ev.clientY) - Number(__kgMdDrag.sy)) / Math.max(0.001, state.k * baseSy0);
              var nx = Number(__kgMdDrag.x0) + dx;
              var ny = Number(__kgMdDrag.y0) + dy;
              if (!isFinite(nx) || !isFinite(ny)) return;
              try { __kgMdDrag.fo.setAttribute('x', String(nx)); } catch (e0) {}
              try { __kgMdDrag.fo.setAttribute('y', String(ny)); } catch (e1) {}
              try {
                var aid = String((__kgMdDrag.anchorId || '') || (__kgMdDrag.fo && __kgMdDrag.fo.getAttribute ? (__kgMdDrag.fo.getAttribute('data-kg-anchor-node-id') || '') : '')).trim();
                if (aid && nodePosById && typeof nodePosById === 'object') {
                  var w = Number(__kgMdDrag.w);
                  var h = Number(__kgMdDrag.h);
                  if (!isFinite(w) || w <= 0) {
                    try { w = parseFloat(String(__kgMdDrag.fo.getAttribute('width') || 'NaN')); } catch (e2) { w = NaN; }
                  }
                  if (!isFinite(h) || h <= 0) {
                    try { h = parseFloat(String(__kgMdDrag.fo.getAttribute('height') || 'NaN')); } catch (e3) { h = NaN; }
                  }
                  var cx = isFinite(w) ? (nx + w / 2) : nx;
                  var cy = isFinite(h) ? (ny + h / 2) : ny;
                  nodePosById[aid] = { x: cx, y: cy };
                  try { scheduleEdgeGeometryUpdateForNode(aid); } catch (e4) { void 0; }
                }
              } catch (e5) { void 0; }
            } catch (e6) { void 0; }
          }, { passive: true });
          window.addEventListener('pointerup', function(ev){
            try {
              if (!__kgMdDrag || !ev) return;
              if (ev.pointerId !== __kgMdDrag.pid) return;
              __kgMdDrag = null;
            } catch (e0) { __kgMdDrag = null; }
          }, { passive: true });
          window.addEventListener('pointercancel', function(ev){
            try {
              if (!__kgMdDrag || !ev) return;
              if (ev.pointerId !== __kgMdDrag.pid) return;
              __kgMdDrag = null;
            } catch (e0) { __kgMdDrag = null; }
          }, { passive: true });
        } catch (eBind) { void 0; }

        var fos = layer.querySelectorAll('foreignObject');
        for (var i = 0; i < fos.length; i += 1) {
          var fo = fos[i];
          if (!fo || !fo.querySelector) continue;
          try { fo.style.pointerEvents = 'auto'; } catch (e0) {}
          var rootEl = null;
          try { rootEl = fo.querySelector('[data-md-id],[data-kg-markdown-block-id]'); } catch (e1) { rootEl = null; }
          if (!rootEl) {
            try { rootEl = fo.firstElementChild; } catch (e2) { rootEl = null; }
          }
          if (rootEl && rootEl.style) {
            try { rootEl.style.pointerEvents = 'auto'; } catch (e3) {}
          }
          var header = null;
          try { header = rootEl && rootEl.querySelector ? rootEl.querySelector('.kg-mdHeader') : null; } catch (e6) { header = null; }
          if (header && !header.__kgMdBound) {
            header.__kgMdBound = true;
            try { header.style.pointerEvents = 'auto'; header.style.cursor = 'grab'; header.style.touchAction = 'none'; } catch (e7) {}
            try {
              header.addEventListener('pointerdown', function(ev){
                try {
                  if (!ev || ev.button !== 0) return;
                  if (panHeld || pointerMode === 'pan' || ev.shiftKey) return;
                  try { ev.preventDefault(); } catch (e0) {}
                  try { ev.stopPropagation(); } catch (e1) {}
                  var x0 = parseFloat(String(fo.getAttribute('x') || '0'));
                  var y0 = parseFloat(String(fo.getAttribute('y') || '0'));
                  var ww = parseFloat(String(fo.getAttribute('width') || 'NaN'));
                  var hh = parseFloat(String(fo.getAttribute('height') || 'NaN'));
                  var aid = String((fo.getAttribute('data-kg-anchor-node-id') || '')).trim();
                  __kgMdDrag = { fo: fo, pid: ev.pointerId, sx: ev.clientX, sy: ev.clientY, x0: isFinite(x0) ? x0 : 0, y0: isFinite(y0) ? y0 : 0, w: isFinite(ww) ? ww : 0, h: isFinite(hh) ? hh : 0, anchorId: aid };
                } catch (e2) { void 0; }
              }, { passive: false });
            } catch (e8) { void 0; }
          }
        }
      } catch (e) { void 0; }
    }

    function updateOverlays(){
      if (!overlay || !svg) return;
      var nowMs = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
      var rotating = !!rotateDrag || (touchDrag && touchDrag.type === 'rotate');
      if (overlayFollowAnimation && rotating) {
        var lastAt = overlay.__kgMediaLastAt || 0;
        if (nowMs - lastAt < 80) return;
        overlay.__kgMediaLastAt = nowMs;
      }
      ensureMediaDom();
      if (!mediaNodes || mediaNodes.length === 0) return;
      var vp = getViewport();
      var density = __KG_DENSITY__;
      var widthRatio = density === 'compact' ? __KG_WIDTH_RATIO_COMPACT__ : __KG_WIDTH_RATIO_DEFAULT__;
      var widthMin = density === 'compact' ? __KG_WIDTH_MIN_COMPACT__ : __KG_WIDTH_MIN_DEFAULT__;
      var widthMax = density === 'compact' ? __KG_WIDTH_MAX_COMPACT__ : __KG_WIDTH_MAX_DEFAULT__;
      var baseW = clamp(vp.w * widthRatio, widthMin, widthMax);
      var MAX_PANEL_PX = 2048;
      var STEP_PX = 16;
      var quantize = function(px){ return Math.round(px / STEP_PX) * STEP_PX; };
      var k0 = clamp(state.k, 0.001, 1000);
      var contentW = clamp(quantize(baseW * k0), 2, MAX_PANEL_PX);
      var sizeScale = Math.max(0.001, contentW / Math.max(1, baseW));
      var key = density + '|' + contentW;
      var vars = null;
      var panelW = 0;
      var panelH = 0;
      if (key !== lastOverlayKey || !lastPanelW || !lastPanelH || !lastVars) {
        var computed = computeMediaPanelCssVars3d({ density: density, sizeScale: sizeScale });
        vars = computed.vars;
        var panelSize = computePanelSizeFromContent16x9({ contentW: contentW, metrics: computed.metrics });
        panelW = panelSize.panelW;
        panelH = panelSize.panelH;
        lastVars = vars;
        lastPanelW = panelW;
        lastPanelH = panelH;
        lastOverlayKey = key;
      } else {
        vars = lastVars;
        panelW = lastPanelW;
        panelH = lastPanelH;
      }
      var byId = overlay.__kgMediaById || {};
      var lastBoxById = overlay.__kgMediaBoxById || (overlay.__kgMediaBoxById = {});
      var nodeById = overlay.__kgSvgNodeById || svgNodeById || {};
      for (var i = 0; i < mediaNodes.length; i += 1) {
        var id = String(mediaNodes[i].id || '');
        var el = byId[id] || null;
        if (!el) continue;
        var nodeEl = nodeById[id] || null;
        var cx = null;
        var cy = null;
        var usedNodePos = false;
        var usedProjectedPos = false;
        try {
          var wp = overlay.__kgWebglPosById && overlay.__kgWebglPosById[id] ? overlay.__kgWebglPosById[id] : null;
          if (wp && typeof wp.x === 'number' && typeof wp.y === 'number' && isFinite(wp.x) && isFinite(wp.y)) {
            cx = wp.x;
            cy = wp.y;
            usedNodePos = true;
            usedProjectedPos = true;
          }
        } catch (e0) {}
        if (!overlayFollowAnimation) {
          var p = nodePosById && nodePosById[id] ? nodePosById[id] : null;
          if (p && typeof p.x === 'number' && typeof p.y === 'number') {
            cx = p.x;
            cy = p.y;
            usedNodePos = true;
          }
        }
        if (nodeEl && !usedProjectedPos) {
          var sEl = (nodeEl.querySelector ? nodeEl.querySelector('[data-role="node-shape"],[data-role="node-circle"]') : null);
          if (!sEl && nodeEl.querySelector) sEl = nodeEl.querySelector('circle,rect,polygon');
          if (sEl && sEl.getAttribute) {
            var tag = String(sEl.nodeName || '').toLowerCase();
            var cx0 = NaN;
            var cy0 = NaN;
            if (tag === 'circle') {
              cx0 = parseFloat(sEl.getAttribute('cx') || 'NaN');
              cy0 = parseFloat(sEl.getAttribute('cy') || 'NaN');
            } else if (tag === 'rect') {
              var x0 = parseFloat(sEl.getAttribute('x') || 'NaN');
              var y0 = parseFloat(sEl.getAttribute('y') || 'NaN');
              var w0 = parseFloat(sEl.getAttribute('width') || 'NaN');
              var h0 = parseFloat(sEl.getAttribute('height') || 'NaN');
              if (isFinite(x0) && isFinite(y0) && isFinite(w0) && isFinite(h0)) { cx0 = x0 + w0 / 2; cy0 = y0 + h0 / 2; }
            } else if (tag === 'polygon') {
              var pts = String(sEl.getAttribute('points') || '').trim();
              if (pts) {
                var parts = pts.split(/\\s+/);
                var sumX = 0;
                var sumY = 0;
                var cnt = 0;
                for (var pi = 0; pi < parts.length; pi += 1) {
                  var xy = parts[pi].split(',');
                  if (xy.length !== 2) continue;
                  var xx = parseFloat(xy[0]);
                  var yy = parseFloat(xy[1]);
                  if (!isFinite(xx) || !isFinite(yy)) continue;
                  sumX += xx;
                  sumY += yy;
                  cnt += 1;
                }
                if (cnt > 0) { cx0 = sumX / cnt; cy0 = sumY / cnt; }
              }
            }
            if (isFinite(cx0) && isFinite(cy0) && (overlayFollowAnimation || cx == null || cy == null || !usedNodePos)) {
              cx = cx0;
              cy = cy0;
              usedNodePos = false;
            }
          }
          try {
            if (!overlayFollowAnimation && !usedNodePos && cx != null && cy != null && nodeEl.getAttribute) {
              var tr = String(nodeEl.getAttribute('transform') || '');
              var mt = tr.match(/translate\\\\(\\\\s*([-0-9.]+)\\\\s*[ ,]\\\\s*([-0-9.]+)\\\\s*\\\\)/);
              if (mt) {
                var tx0 = parseFloat(mt[1]);
                var ty0 = parseFloat(mt[2]);
                if (isFinite(tx0) && isFinite(ty0)) { cx += tx0; cy += ty0; }
              }
            }
          } catch (err) {}
          if ((cx == null || cy == null) && nodeEl.getBBox) {
            var bb;
            try { bb = nodeEl.getBBox(); } catch (e) { bb = null; }
            if (bb) {
              cx = bb.x + bb.width / 2;
              cy = bb.y + bb.height / 2;
            }
          }
        }
        if (cx == null || cy == null) {
          var hidePrev = lastBoxById[id] || null;
          if (!hidePrev || hidePrev.left !== -99999 || hidePrev.top !== -99999 || hidePrev.w !== 1 || hidePrev.h !== 1 || hidePrev.display !== 'block') {
            applyPanelBox(el, { left: -99999, top: -99999, w: 1, h: 1, display: 'block', zIndex: 1 });
            lastBoxById[id] = { left: -99999, top: -99999, w: 1, h: 1, display: 'block' };
          }
          continue;
        }
        var sx;
        var sy;
        if (usedNodePos && overlay && overlay.__kgWebglPosById && webgl3dEnabled) {
          sx = cx;
          sy = cy;
        } else {
          var baseSx = (svgBase && isFinite(svgBase.sx) && svgBase.sx > 0) ? svgBase.sx : 1;
          var baseSy = (svgBase && isFinite(svgBase.sy) && svgBase.sy > 0) ? svgBase.sy : 1;
          var ox = (svgBase && isFinite(svgBase.ox)) ? svgBase.ox : 0;
          var oy = (svgBase && isFinite(svgBase.oy)) ? svgBase.oy : 0;
          sx = cx * state.k * baseSx + state.x + ox;
          sy = cy * state.k * baseSy + state.y + oy;
        }

        var rect = computePanelRect({ cx: sx, cy: sy, w: panelW, h: panelH });
        applyMediaPanelCssVars(el, vars);
        try {
          var applied = (el.dataset && el.dataset.kgMediaEagerApplied) || '';
          if (!applied) {
            var iframe = el.querySelector('iframe');
            if (iframe) {
              try { iframe.loading = 'eager'; } catch (err) {}
              try { iframe.setAttribute('loading', 'eager'); } catch (err) {}
            }
            var img = el.querySelector('img');
            if (img) {
              try { img.loading = 'eager'; } catch (err) {}
              try { img.setAttribute('loading', 'eager'); } catch (err) {}
            }
            try { el.dataset.kgMediaEagerApplied = '1'; } catch (err) {}
          }
        } catch (err) {}

        var left = Math.round(rect.left);
        var top = Math.round(rect.top);
        var prev = lastBoxById[id] || null;
        if (!prev || prev.left !== left || prev.top !== top || prev.w !== panelW || prev.h !== panelH || prev.display !== 'block') {
          applyPanelBox(el, {
            left: left,
            top: top,
            w: panelW,
            h: panelH,
            display: 'block',
          });
          lastBoxById[id] = { left: left, top: top, w: panelW, h: panelH, display: 'block' };
        }
      }
    }

    function onWheel(e){
      if (!e) return;
      try {
        if (webgl3dEnabled && e && e.target && e.target instanceof Element) {
          if (e.target.id === 'kg-webgl' || (e.target.closest && e.target.closest('#kg-webgl'))) return;
        }
      } catch (err) {}
      if (shouldIgnoreCanvasWheelEvent({ event: e, ignoreSelector: UI_IGNORE_SELECTOR })) return;
      if (mediaInteractive && pointerMode !== 'pan' && !panHeld && isMediaTarget(e.target)) return;

      var preset = coerceViewportControlsPreset(viewportControlsPreset);
      var wheelZoom = (wheelBehavior === 'zoom') ? true : (wheelBehavior === 'pan') ? false : shouldWheelZoomForPreset(e, preset);
      if (overlayFollowAnimation && wheelBehavior === 'preset') wheelZoom = true;
      if (!wheelZoom) {
        cancelWheelZoomAnimation();
        var d = computeWheelPanDeltaPx(e);
        var dx = d.dx * panSpeed * canvasPanSpeedMultiplier * canvasInteractionSpeedMultiplier;
        var dy = d.dy * panSpeed * canvasPanSpeedMultiplier * canvasInteractionSpeedMultiplier;
        if (dx === 0 && dy === 0) return;
        state.x -= dx;
        state.y -= dy;
        applyTransform();
        try { e.preventDefault(); } catch (err) {}
        return;
      }

      cancelWheelZoomAnimation();

      var nowMs = Date.now();
      var rect = root.getBoundingClientRect();
      var localSx = (isFinite(e.clientX) ? e.clientX : 0) - (isFinite(rect.left) ? rect.left : 0);
      var localSy = (isFinite(e.clientY) ? e.clientY : 0) - (isFinite(rect.top) ? rect.top : 0);
      var inBounds = localSx >= 0 && localSy >= 0 && localSx <= rect.width && localSy <= rect.height;
      var fallback = coerceWheelFallback({ fallback: lastPointerInCanvas, nowMs: nowMs, maxAgeMs: 800 });
      var anchor = inBounds
        ? { sx: localSx, sy: localSy, source: 'pointer' }
        : resolveWheelAnchor({ rect: rect, clientX: e.clientX, clientY: e.clientY, fallback: fallback });
      if (anchor.source !== 'center') {
        lastPointerInCanvas = { sx: anchor.sx, sy: anchor.sy, ts: nowMs };
      }

      var multiplier = zoomSpeed * flowWheelZoomSpeedMultiplier * canvasInteractionSpeedMultiplier;
      var deltaYpx = computeZoomWheelDeltaYpx(e, multiplier, wheelZoomCtrlMetaBoostMultiplier);
      var guard = computeZoomWheelGuardDecision({
        currentK: state.k,
        minK: minK,
        maxK: maxK,
        deltaYpx: deltaYpx,
        nowMs: nowMs,
        state: guardState
      });
      guardState = guard.nextState;
      if (guard.block) return;

      var factor = computeWheelZoomFactor(deltaYpx * flowWheelZoomIncrementMultiplier);
      var nextK = Math.max(minK, Math.min(maxK, state.k * factor));
      if (!isFinite(nextK) || Math.abs(nextK - state.k) < 1e-12) return;
      var durationMs = computeFlowWheelZoomDurationMs({ deltaYpxAbs: Math.abs(deltaYpx), minMs: flowWheelZoomSmoothMinDurationMs, maxMs: flowWheelZoomSmoothMaxDurationMs });
      startWheelZoomAnimation({ from: { k: state.k, x: state.x, y: state.y }, toK: nextK, anchor: { sx: anchor.sx, sy: anchor.sy }, durationMs: durationMs });
      try { e.preventDefault(); } catch (err) {}
    }

    var drag = null;
    function startDrag(id, x, y){
      clearSelection();
      drag = { id: id, x0: x, y0: y, x: state.x, y: state.y };
      try { if (root && root.classList) root.classList.add('kg-dragging'); } catch (err) {}
    }
    function moveDrag(x, y){
      if (!drag) return;
      var dx = (x - drag.x0);
      var dy = (y - drag.y0);
      var m = canvasPanSpeedMultiplier * canvasInteractionSpeedMultiplier;
      if (!(m > 0) || !isFinite(m)) m = 1;
      state.x = drag.x + (dx * m);
      state.y = drag.y + (dy * m);
      applyTransform();
    }
    function endDrag(){
      if (!drag) return;
      drag = null;
      try { if (root && root.classList) root.classList.remove('kg-dragging'); } catch (err) {}
    }

    function isMediaTarget(t){
      try {
        if (!(t instanceof Element)) return false;
        return !!t.closest('.kg-media');
      } catch (err) {
        return false;
      }
    }

    function isMediaHeaderTarget(t){
      try {
        if (!(t instanceof Element)) return false;
        if (t.closest('[data-kg-resize-handle]')) return false;
        var panel = t.closest('[data-kg-rich-media-panel="1"][data-kg-rich-media-render-surface="1"][data-kg-canvas-overlay-drag-handle="true"]');
        if (!panel) return false;
        return !t.closest('iframe,img,video,source,a,button,textarea,input,select,summary,[contenteditable="true"]');
      } catch (err) {
        return false;
      }
    }

    function elementFromPointIgnoringOverlays(clientX, clientY){
      try {
        if (!document || typeof document.elementFromPoint !== 'function') return null;
        var prevOverlayPe = overlay && overlay.style ? overlay.style.pointerEvents : '';
        var prevHudPe = hud && hud.style ? hud.style.pointerEvents : '';
        var changedOverlay = false;
        var changedHud = false;
        if (overlay && overlay.style && prevOverlayPe !== 'none') { overlay.style.pointerEvents = 'none'; changedOverlay = true; }
        if (hud && hud.style && prevHudPe !== 'none') { hud.style.pointerEvents = 'none'; changedHud = true; }
        var el = document.elementFromPoint(clientX, clientY);
        if (changedOverlay && overlay && overlay.style) overlay.style.pointerEvents = prevOverlayPe;
        if (changedHud && hud && hud.style) hud.style.pointerEvents = prevHudPe;
        return el || null;
      } catch (err) {
        try {
          if (overlay && overlay.style) overlay.style.pointerEvents = '';
          if (hud && hud.style) hud.style.pointerEvents = '';
        } catch (err2) {}
        return null;
      }
    }

    var headerDrag = null;
    var nodeDrag = null;
    var groupDrag = null;
    var edgeDrag = null;

    function getWorldFromClient(clientX, clientY){
      var k = isFinite(state.k) ? state.k : 1;
      if (!isFinite(k) || k <= 0) k = 1;
      var baseSx = (svgBase && isFinite(svgBase.sx) && svgBase.sx > 0) ? svgBase.sx : 1;
      var baseSy = (svgBase && isFinite(svgBase.sy) && svgBase.sy > 0) ? svgBase.sy : 1;
      var ox = (svgBase && isFinite(svgBase.ox)) ? svgBase.ox : 0;
      var oy = (svgBase && isFinite(svgBase.oy)) ? svgBase.oy : 0;
      return { x: (clientX - state.x - ox) / (k * baseSx), y: (clientY - state.y - oy) / (k * baseSy) };
    }

    function addDeltaToElement(el, dx, dy){
      if (!el || !el.getAttribute || !el.setAttribute) return;
      var tag = String(el.tagName || '').toLowerCase();
      if (tag === 'line') return;
      if (el.hasAttribute('cx') && el.hasAttribute('cy')) {
        var cx = parseFloat(el.getAttribute('cx') || 'NaN');
        var cy = parseFloat(el.getAttribute('cy') || 'NaN');
        if (isFinite(cx) && isFinite(cy)) {
          el.setAttribute('cx', String(cx + dx));
          el.setAttribute('cy', String(cy + dy));
          return;
        }
      }
      if (el.hasAttribute('x') && el.hasAttribute('y')) {
        var x = parseFloat(el.getAttribute('x') || 'NaN');
        var y = parseFloat(el.getAttribute('y') || 'NaN');
        if (isFinite(x) && isFinite(y)) {
          el.setAttribute('x', String(x + dx));
          el.setAttribute('y', String(y + dy));
          return;
        }
      }
      var tr = String(el.getAttribute('transform') || '');
      var m = tr.match(/translate\\\\(\\\\s*([-0-9.]+)\\\\s*[ ,]\\\\s*([-0-9.]+)\\\\s*\\\\)/);
      if (m) {
        var tx = parseFloat(m[1]);
        var ty = parseFloat(m[2]);
        if (isFinite(tx) && isFinite(ty)) {
          el.setAttribute('transform', tr.replace(m[0], 'translate(' + (tx + dx) + ',' + (ty + dy) + ')'));
          return;
        }
      }

      try {
        var d = el.dataset || {};
        var base = (d.kgBaseTransform != null) ? String(d.kgBaseTransform || '') : String(tr || '');
        if (d.kgBaseTransform == null) d.kgBaseTransform = base;
        var ox = isFinite(Number(d.kgTx)) ? Number(d.kgTx) : 0;
        var oy = isFinite(Number(d.kgTy)) ? Number(d.kgTy) : 0;
        var nx = ox + dx;
        var ny = oy + dy;
        d.kgTx = String(nx);
        d.kgTy = String(ny);
        el.setAttribute('transform', ('translate(' + nx + ',' + ny + ') ' + base).trim());
      } catch (err) {}
    }

    function addDeltaToEdgeEnd(el, end, dx, dy){
      if (!el || !el.getAttribute || !el.setAttribute) return;
      var ax = end === 's' ? 'x1' : 'x2';
      var ay = end === 's' ? 'y1' : 'y2';
      var x = parseFloat(el.getAttribute(ax) || 'NaN');
      var y = parseFloat(el.getAttribute(ay) || 'NaN');
      if (!isFinite(x) || !isFinite(y)) return;
      el.setAttribute(ax, String(x + dx));
      el.setAttribute(ay, String(y + dy));
      try {
        var eid = String(el.getAttribute('data-edge-id') || '').trim();
        if (eid) scheduleEdgeLabelUpdate(eid);
      } catch (err) {}
    }

    function translateNodeByDelta(nodeId, dx, dy){
      if (!nodeId) return;
      try {
        if (overlayFollowAnimation && svg && (svg.__kgNodeOffsetById || (svg.__kgNodeOffsetById = {}))) {
          var map = svg.__kgNodeOffsetById;
          var prev = map[nodeId] || null;
          var ox = prev && isFinite(prev.x) ? prev.x : 0;
          var oy = prev && isFinite(prev.y) ? prev.y : 0;
          map[nodeId] = { x: ox + dx, y: oy + dy };
          return;
        }
      } catch (err) {}
      var els = svgNodeElsById[nodeId] || null;
      if (els) {
        for (var i = 0; i < els.length; i += 1) addDeltaToElement(els[i], dx, dy);
      }
      var p = nodePosById && nodePosById[nodeId] ? nodePosById[nodeId] : null;
      if (p && isFinite(p.x) && isFinite(p.y)) {
        p.x += dx;
        p.y += dy;
      }
      try { scheduleEdgeGeometryUpdateForNode(nodeId); } catch (e0) {}
    }

    var __kgGroupRectCacheById = Object.create(null);
    var __kgGroupIdsByNodeId = null;

    function __kgClampNum(v, a, b){
      var x = Number(v);
      if (!isFinite(x)) return a;
      if (x < a) return a;
      if (x > b) return b;
      return x;
    }

    function __kgGetNodeHalfExtents(nodeId){
      try {
        if (!nodeId) return { hw: 12, hh: 12 };
        var el = (svgNodeById && svgNodeById[nodeId]) ? svgNodeById[nodeId] : null;
        if (!el && svgNodeElsById && svgNodeElsById[nodeId] && svgNodeElsById[nodeId].length) el = svgNodeElsById[nodeId][0];
        if (!el) return { hw: 12, hh: 12 };

        var tag = String(el.tagName || '').toLowerCase();
        if (tag !== 'circle' && tag !== 'rect') {
          try {
            var c = el.querySelector ? el.querySelector('circle[r]') : null;
            if (c) { el = c; tag = 'circle'; }
          } catch (e0) {}
          if (tag !== 'circle') {
            try {
              var r = el.querySelector ? el.querySelector('rect[width][height]') : null;
              if (r) { el = r; tag = 'rect'; }
            } catch (e1) {}
          }
        }

        if (tag === 'circle' && el.getAttribute) {
          var rr = parseFloat(el.getAttribute('r') || 'NaN');
          if (isFinite(rr) && rr > 0) return { hw: Math.max(1, rr), hh: Math.max(1, rr) };
          return { hw: 12, hh: 12 };
        }
        if (tag === 'rect' && el.getAttribute) {
          var w = parseFloat(el.getAttribute('width') || 'NaN');
          var h = parseFloat(el.getAttribute('height') || 'NaN');
          if (isFinite(w) && isFinite(h) && w > 0 && h > 0) return { hw: Math.max(1, w / 2), hh: Math.max(1, h / 2) };
          return { hw: 12, hh: 12 };
        }
      } catch (e) {}
      return { hw: 12, hh: 12 };
    }

    function __kgEnsureGroupIdsByNodeId(){
      if (__kgGroupIdsByNodeId) return __kgGroupIdsByNodeId;
      var out = Object.create(null);
      try {
        if (!groupMembersById) { __kgGroupIdsByNodeId = out; return out; }
        for (var gid in groupMembersById) {
          if (!Object.prototype.hasOwnProperty.call(groupMembersById, gid)) continue;
          var members = groupMembersById[gid];
          if (!members || !members.length) continue;
          for (var i = 0; i < members.length; i += 1) {
            var nid = String(members[i] || '').trim();
            if (!nid) continue;
            var arr = out[nid] || (out[nid] = []);
            arr.push(gid);
          }
        }
      } catch (e) {}
      __kgGroupIdsByNodeId = out;
      return out;
    }

    function __kgComputeGroupMemberBounds(gid){
      try {
        var members = groupMembersById && groupMembersById[gid] ? groupMembersById[gid] : null;
        if (!members || !members.length) return null;
        var minX = Infinity;
        var minY = Infinity;
        var maxX = -Infinity;
        var maxY = -Infinity;
        var saw = false;
        for (var i = 0; i < members.length; i += 1) {
          var nid = String(members[i] || '').trim();
          if (!nid) continue;
          var p = nodePosById && nodePosById[nid] ? nodePosById[nid] : null;
          if (!p) continue;
          var x = Number(p.x);
          var y = Number(p.y);
          if (!isFinite(x) || !isFinite(y)) continue;
          var ext = __kgGetNodeHalfExtents(nid);
          var hw = (ext && isFinite(ext.hw)) ? Math.max(1, Number(ext.hw)) : 12;
          var hh = (ext && isFinite(ext.hh)) ? Math.max(1, Number(ext.hh)) : 12;
          if (x - hw < minX) minX = x - hw;
          if (y - hh < minY) minY = y - hh;
          if (x + hw > maxX) maxX = x + hw;
          if (y + hh > maxY) maxY = y + hh;
          saw = true;
        }
        if (!saw || !(maxX > minX) || !(maxY > minY)) return null;
        return { minX: minX, minY: minY, maxX: maxX, maxY: maxY };
      } catch (e) {
        return null;
      }
    }

    function __kgInitGroupRectCache(gid, rectEl){
      try {
        var rX = parseFloat(rectEl.getAttribute('x') || 'NaN');
        var rY = parseFloat(rectEl.getAttribute('y') || 'NaN');
        var rW = parseFloat(rectEl.getAttribute('width') || 'NaN');
        var rH = parseFloat(rectEl.getAttribute('height') || 'NaN');
        if (!isFinite(rX) || !isFinite(rY) || !isFinite(rW) || !isFinite(rH) || !(rW > 0) || !(rH > 0)) return null;
        var b = __kgComputeGroupMemberBounds(gid);
        var padL = 24;
        var padR = 24;
        var padT = 24;
        var padB = 24;
        if (b) {
          padL = __kgClampNum(b.minX - rX, 0, 800);
          padR = __kgClampNum((rX + rW) - b.maxX, 0, 800);
          padT = __kgClampNum(b.minY - rY, 0, 800);
          padB = __kgClampNum((rY + rH) - b.maxY, 0, 800);
          if (!(padL > 0)) padL = 24;
          if (!(padR > 0)) padR = 24;
          if (!(padT > 0)) padT = 24;
          if (!(padB > 0)) padB = 24;
        }

        var labelDx = null;
        var labelDy = null;
        var labelEl = null;
        var chevronEl = null;
        try {
          var gels = svgGroupElsById && svgGroupElsById[gid] ? svgGroupElsById[gid] : null;
          if (gels && gels.length) {
            for (var i = 0; i < gels.length; i += 1) {
              var el = gels[i];
              if (!el || !el.getAttribute) continue;
              var tag = String(el.tagName || '').toLowerCase();
              if (!labelEl && tag === 'text' && String(el.getAttribute('data-kg-group-label') || '') === '1') labelEl = el;
              if (!chevronEl && tag === 'path' && String(el.getAttribute('data-kg-group-chevron') || '') === '1') chevronEl = el;
              if (labelEl && chevronEl) break;
            }
          }
        } catch (e0) {}

        if (labelEl && labelEl.getAttribute) {
          var lx = parseFloat(labelEl.getAttribute('x') || 'NaN');
          var ly = parseFloat(labelEl.getAttribute('y') || 'NaN');
          if (isFinite(lx) && isFinite(ly)) {
            labelDx = lx - rX;
            labelDy = ly - rY;
          }
        }

        var handleEl = null;
        try {
          var pg = rectEl.parentNode && rectEl.parentNode.querySelector ? rectEl.parentNode : null;
          if (pg) handleEl = pg.querySelector('circle[data-kg-group-resize]');
        } catch (e1) {
          handleEl = null;
        }

        return {
          padL: padL,
          padR: padR,
          padT: padT,
          padB: padB,
          labelDx: labelDx,
          labelDy: labelDy,
          labelEl: labelEl,
          chevronEl: chevronEl,
          handleEl: handleEl,
          lastX: rX,
          lastY: rY,
        };
      } catch (e) {
        return null;
      }
    }

    function __kgUpdateGroupRectForGroupId(gid){
      try {
        if (!gid) return;
        var gels = svgGroupElsById && svgGroupElsById[gid] ? svgGroupElsById[gid] : null;
        if (!gels || !gels.length) return;

        var groupRoot = null;
        for (var i = 0; i < gels.length; i += 1) {
          var el = gels[i];
          if (!el || !el.querySelector) continue;
          var rect0 = null;
          try { rect0 = el.querySelector('rect[data-kg-shape="group-rect"]'); } catch (e0) { rect0 = null; }
          if (rect0) { groupRoot = el; break; }
        }
        if (!groupRoot) return;

        var rectEl = null;
        try { rectEl = groupRoot.querySelector('rect[data-kg-shape="group-rect"]'); } catch (e1) { rectEl = null; }
        if (!rectEl || !rectEl.getAttribute || !rectEl.setAttribute) return;

        var cache = __kgGroupRectCacheById[gid] || null;
        if (!cache) {
          cache = __kgInitGroupRectCache(gid, rectEl);
          if (!cache) return;
          __kgGroupRectCacheById[gid] = cache;
        }

        var b = __kgComputeGroupMemberBounds(gid);
        if (!b) return;

        var nx = b.minX - cache.padL;
        var ny = b.minY - cache.padT;
        var nw = (b.maxX - b.minX) + cache.padL + cache.padR;
        var nh = (b.maxY - b.minY) + cache.padT + cache.padB;

        if (!isFinite(nx) || !isFinite(ny) || !isFinite(nw) || !isFinite(nh) || !(nw > 0) || !(nh > 0)) return;

        var prevX = cache.lastX;
        var prevY = cache.lastY;
        var dx = isFinite(prevX) ? (nx - prevX) : 0;
        var dy = isFinite(prevY) ? (ny - prevY) : 0;

        rectEl.setAttribute('x', String(nx));
        rectEl.setAttribute('y', String(ny));
        rectEl.setAttribute('width', String(nw));
        rectEl.setAttribute('height', String(nh));

        if (cache.handleEl && cache.handleEl.setAttribute) {
          try { cache.handleEl.setAttribute('cx', String(nx + nw)); } catch (e2) {}
          try { cache.handleEl.setAttribute('cy', String(ny + nh)); } catch (e3) {}
        }

        if (cache.labelEl && cache.labelEl.setAttribute && cache.labelDx != null && cache.labelDy != null) {
          try { cache.labelEl.setAttribute('x', String(nx + cache.labelDx)); } catch (e4) {}
          try { cache.labelEl.setAttribute('y', String(ny + cache.labelDy)); } catch (e5) {}
        }

        if (cache.chevronEl && (dx !== 0 || dy !== 0)) {
          try { addDeltaToElement(cache.chevronEl, dx, dy); } catch (e6) {}
        }

        cache.lastX = nx;
        cache.lastY = ny;
      } catch (e) {
        void 0;
      }
    }

    function __kgUpdateGroupRectsForNodeId(nodeId){
      try {
        var idx = __kgEnsureGroupIdsByNodeId();
        var gids = idx && nodeId && idx[nodeId] ? idx[nodeId] : null;
        if (!gids || !gids.length) return;
        for (var i = 0; i < gids.length; i += 1) {
          var gid = String(gids[i] || '').trim();
          if (!gid) continue;
          __kgUpdateGroupRectForGroupId(gid);
        }
      } catch (e) {
        void 0;
      }
    }

    function translateGroupByDelta(groupId, dx, dy){
      if (!groupId) return;
      try {
        if (overlayFollowAnimation && svg && (svg.__kgNodeOffsetById || (svg.__kgNodeOffsetById = {}))) {
          var map = svg.__kgNodeOffsetById;
          var members = groupMembersById && groupMembersById[groupId] ? groupMembersById[groupId] : null;
          if (members && members.length) {
            for (var j = 0; j < members.length; j += 1) {
              var id = String(members[j] || '');
              if (!id) continue;
              var prev = map[id] || null;
              var ox = prev && isFinite(prev.x) ? prev.x : 0;
              var oy = prev && isFinite(prev.y) ? prev.y : 0;
              map[id] = { x: ox + dx, y: oy + dy };
            }
          }
          return;
        }
      } catch (err) {}
      var gels = svgGroupElsById[groupId] || null;
      if (gels) {
        for (var i = 0; i < gels.length; i += 1) addDeltaToElement(gels[i], dx, dy);
      }
      var members = groupMembersById && groupMembersById[groupId] ? groupMembersById[groupId] : null;
      if (members && members.length) {
        for (var j = 0; j < members.length; j += 1) {
          var id = String(members[j] || '');
          if (!id) continue;
          translateNodeByDelta(id, dx, dy);
        }
      }
    }

    function startHeaderDrag(nodeId, pointerId, clientX, clientY, captureEl){
      try {
        if (webgl3dEnabled && webgl3d && webgl3d.camera && overlay) {
          var camera = webgl3d.camera;
          var cx3 = (payload3d && isFinite(payload3d.cx)) ? payload3d.cx : 0;
          var cy3 = (payload3d && isFinite(payload3d.cy)) ? payload3d.cy : 0;
          var cz3 = (payload3d && isFinite(payload3d.cz)) ? payload3d.cz : 0;
          var overrides = overlay.__kgNodeOverrideById || (overlay.__kgNodeOverrideById = Object.create(null));
          var hasOv = !!(overrides && overrides[nodeId]);
          var p0 = hasOv ? overrides[nodeId] : (payload3dNodeById && payload3dNodeById[nodeId] && payload3dNodeById[nodeId].p ? payload3dNodeById[nodeId].p : null);
          if (!p0) return;
          var x0 = (Number(p0[0]) || 0) - cx3;
          var y0 = (Number(p0[1]) || 0) - cy3;
          var z0 = (Number(p0[2]) || 0) - cz3;
          var off0 = (!hasOv && svg && svg.__kgNodeOffsetById && svg.__kgNodeOffsetById[nodeId]) ? svg.__kgNodeOffsetById[nodeId] : null;
          if (off0) { x0 += Number(off0.x) || 0; y0 += Number(off0.y) || 0; }
          var THREE = webgl3d.THREE;
          var world0 = new THREE.Vector3(x0, y0, z0);
          var proj = world0.clone().project(camera);
          var r = webglCanvas.getBoundingClientRect();
          var w = Math.max(1, r.width);
          var h = Math.max(1, r.height);
          var sx = (proj.x * 0.5 + 0.5) * w;
          var sy = (-proj.y * 0.5 + 0.5) * h;
          headerDrag = { kind: 'webgl', id: nodeId, pointerId: pointerId, ndcZ: proj.z, startSx: sx, startSy: sy, startClientX: clientX, startClientY: clientY, w: w, h: h, cx: cx3, cy: cy3, cz: cz3 };
          try { if (webgl3d.controls) webgl3d.controls.enabled = false; } catch (e0) {}
          try {
            var el = (captureEl && captureEl.setPointerCapture) ? captureEl : webglCanvas;
            if (el && el.setPointerCapture) el.setPointerCapture(pointerId);
          } catch (e1) {}
          try { applyMediaPointerEvents(); } catch (e2) {}
          return;
        }
      } catch (e) {}

      try {
        if (canvas3dEnabled && overlay && overlay.__kgWebglPosById && payload3d) {
          var pr0 = overlay.__kgWebglPosById[nodeId];
          if (!pr0 || !isFinite(pr0.k) || !isFinite(pr0.z) || !(pr0.k > 0)) return;
          var base = svgBase;
          var sx0 = (base && isFinite(base.sx) && base.sx > 0) ? base.sx : 1;
          var sy0 = (base && isFinite(base.sy) && base.sy > 0) ? base.sy : 1;
          var ox0 = (base && isFinite(base.ox)) ? base.ox : 0;
          var oy0 = (base && isFinite(base.oy)) ? base.oy : 0;
          var k0 = (state && isFinite(state.k) && state.k > 0) ? state.k : 1;
          var tx0 = (state && isFinite(state.x)) ? state.x : 0;
          var ty0 = (state && isFinite(state.y)) ? state.y : 0;
          var startWorldX = (clientX - tx0 - ox0) / (k0 * sx0);
          var startWorldY = (clientY - ty0 - oy0) / (k0 * sy0);

          var tNow = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
          var tSec = (tNow - (webglCanvas.__kgStartedAt || (webglCanvas.__kgStartedAt = tNow))) / 1000;
          var autoRotate = payload3d.autoRotate === true;
          var autoRotateSpeed = (payload3d && typeof payload3d.autoRotateSpeed === 'number' && isFinite(payload3d.autoRotateSpeed)) ? payload3d.autoRotateSpeed : 0.4;
          var omega = (Math.PI * 2 / 60) * (autoRotate ? autoRotateSpeed : 0);
          var yaw0 = (payload3d && isFinite(payload3d.yaw0)) ? payload3d.yaw0 : 0;
          var ang = omega * tSec + yaw0 + rotateYaw;
          var tiltX = (payload3d && isFinite(payload3d.tiltX)) ? payload3d.tiltX : 0;
          var tilt = tiltX + rotateTilt;
          if (tilt < -1.25) tilt = -1.25;
          if (tilt > 1.25) tilt = 1.25;
          var cx3 = (payload3d && isFinite(payload3d.cx)) ? payload3d.cx : 0;
          var cy3 = (payload3d && isFinite(payload3d.cy)) ? payload3d.cy : 0;
          var cz3 = (payload3d && isFinite(payload3d.cz)) ? payload3d.cz : 0;
          var invRotY = function(p, a){ var x=p[0],y=p[1],z=p[2]; var c=Math.cos(a),s=Math.sin(a); return [x*c+z*s,y,-x*s+z*c]; };
          var invRotX = function(p, a){ var x=p[0],y=p[1],z=p[2]; var c=Math.cos(a),s=Math.sin(a); return [x,y*c-z*s,y*s+z*c]; };

          headerDrag = {
            kind: 'canvas3d',
            id: nodeId,
            pointerId: pointerId,
            startWorldX: startWorldX,
            startWorldY: startWorldY,
            nodeX0: Number(pr0.x) || 0,
            nodeY0: Number(pr0.y) || 0,
            k: Number(pr0.k) || 1,
            z: Number(pr0.z) || 0,
            ang: ang,
            tilt: tilt,
            angFixed: ang,
            tiltFixed: tilt,
            cx: cx3,
            cy: cy3,
            cz: cz3,
            invRotY: invRotY,
            invRotX: invRotX,
          };
          try {
            var el = (captureEl && captureEl.setPointerCapture) ? captureEl : root;
            if (el && el.setPointerCapture) el.setPointerCapture(pointerId);
          } catch (e0) {}
          try { if (schedule3dFrame) schedule3dFrame(); } catch (e1) {}
          try { scheduleOverlayUpdate(); } catch (e2) {}
          try { applyMediaPointerEvents(); } catch (e3) {}
          return;
        }
      } catch (e) {}
      var w = getWorldFromClient(clientX, clientY);
      if (!nodePosById) nodePosById = Object.create(null);
      var p = nodePosById && nodePosById[nodeId] ? nodePosById[nodeId] : null;
      if (!p || !isFinite(p.x) || !isFinite(p.y)) {
        try { rebuildNodePosFromSvg(); } catch (err) {}
        p = nodePosById && nodePosById[nodeId] ? nodePosById[nodeId] : null;
      }
      if (!p || !isFinite(p.x) || !isFinite(p.y)) {
        p = { x: w.x, y: w.y };
        nodePosById[nodeId] = p;
      }
      headerDrag = { id: nodeId, pointerId: pointerId, startWx: w.x, startWy: w.y, baseX: p.x, baseY: p.y };
      try { applyMediaPointerEvents(); } catch (err) {}
      try {
        var el = (captureEl && captureEl.setPointerCapture) ? captureEl : root;
        if (el && el.setPointerCapture) el.setPointerCapture(pointerId);
      } catch (err) {}
    }

    function moveHeaderDrag(pointerId, clientX, clientY){
      if (!headerDrag || headerDrag.pointerId !== pointerId) return;
      try {
        if (headerDrag.kind === 'webgl' && webgl3dEnabled && webgl3d && webgl3d.camera && overlay) {
          var camera = webgl3d.camera;
          var cx3 = isFinite(headerDrag.cx) ? headerDrag.cx : ((payload3d && isFinite(payload3d.cx)) ? payload3d.cx : 0);
          var cy3 = isFinite(headerDrag.cy) ? headerDrag.cy : ((payload3d && isFinite(payload3d.cy)) ? payload3d.cy : 0);
          var cz3 = isFinite(headerDrag.cz) ? headerDrag.cz : ((payload3d && isFinite(payload3d.cz)) ? payload3d.cz : 0);
          var r = webglCanvas.getBoundingClientRect();
          var w = headerDrag.w || Math.max(1, r.width);
          var h = headerDrag.h || Math.max(1, r.height);
          var dx = clientX - headerDrag.startClientX;
          var dy = clientY - headerDrag.startClientY;
          var sx = headerDrag.startSx + dx;
          var sy = headerDrag.startSy + dy;
          var ndcX = (sx / w) * 2 - 1;
          var ndcY = -((sy / h) * 2 - 1);
          var ndcZ = headerDrag.ndcZ;
          if (!isFinite(ndcX) || !isFinite(ndcY) || !isFinite(ndcZ)) return;
          var nextWorld = new webgl3d.THREE.Vector3(ndcX, ndcY, ndcZ).unproject(camera);
          var overrides = overlay.__kgNodeOverrideById || (overlay.__kgNodeOverrideById = Object.create(null));
          overrides[headerDrag.id] = [nextWorld.x + cx3, nextWorld.y + cy3, nextWorld.z + cz3];
          try { writePayload3dNodePos(headerDrag.id, nextWorld.x + cx3, nextWorld.y + cy3, nextWorld.z + cz3); } catch (e00) {}
          try { if (mark3dGeometryDirty) mark3dGeometryDirty(); } catch (e0) {}
          try { if (scheduleWebgl3dFrame) scheduleWebgl3dFrame(); } catch (e1) {}
          try { scheduleOverlayUpdate(); } catch (e2) {}
          return;
        }
      } catch (e) {}
      try {
        if (headerDrag.kind === 'canvas3d' && canvas3dEnabled && overlay) {
          var base = svgBase;
          var sx0 = (base && isFinite(base.sx) && base.sx > 0) ? base.sx : 1;
          var sy0 = (base && isFinite(base.sy) && base.sy > 0) ? base.sy : 1;
          var ox0 = (base && isFinite(base.ox)) ? base.ox : 0;
          var oy0 = (base && isFinite(base.oy)) ? base.oy : 0;
          var k0 = (state && isFinite(state.k) && state.k > 0) ? state.k : 1;
          var tx0 = (state && isFinite(state.x)) ? state.x : 0;
          var ty0 = (state && isFinite(state.y)) ? state.y : 0;
          var curWorldX = (clientX - tx0 - ox0) / (k0 * sx0);
          var curWorldY = (clientY - ty0 - oy0) / (k0 * sy0);
          var dxW = curWorldX - (Number(headerDrag.startWorldX) || 0);
          var dyW = curWorldY - (Number(headerDrag.startWorldY) || 0);

          var px0 = (Number(headerDrag.nodeX0) || 0) + dxW;
          var py0 = (Number(headerDrag.nodeY0) || 0) + dyW;
          var kD = Number(headerDrag.k) || 1;
          var zD = Number(headerDrag.z) || 0;
          if (kD > 0 && headerDrag.invRotY && headerDrag.invRotX) {
            var r3 = [px0 / kD, py0 / kD, zD];
            var u = headerDrag.invRotY(headerDrag.invRotX(r3, -Number(headerDrag.tilt) || 0), -Number(headerDrag.ang) || 0);
            var cx3 = Number(headerDrag.cx) || 0;
            var cy3 = Number(headerDrag.cy) || 0;
            var cz3 = Number(headerDrag.cz) || 0;
            var overrides = overlay.__kgNodeOverrideById || (overlay.__kgNodeOverrideById = Object.create(null));
            overrides[headerDrag.id] = [u[0] + cx3, u[1] + cy3, u[2] + cz3];
            try { writePayload3dNodePos(headerDrag.id, u[0] + cx3, u[1] + cy3, u[2] + cz3); } catch (e01) {}
          }
          try { if (schedule3dFrame) schedule3dFrame(); } catch (e0) {}
          try { scheduleOverlayUpdate(); } catch (e1) {}
          return;
        }
      } catch (e) {}
      var w = getWorldFromClient(clientX, clientY);
      if (!nodePosById) nodePosById = Object.create(null);
      var p = nodePosById && nodePosById[headerDrag.id] ? nodePosById[headerDrag.id] : null;
      if (!p || !isFinite(p.x) || !isFinite(p.y)) {
        p = { x: headerDrag.baseX, y: headerDrag.baseY };
        nodePosById[headerDrag.id] = p;
      }
      var nx = headerDrag.baseX + (w.x - headerDrag.startWx);
      var ny = headerDrag.baseY + (w.y - headerDrag.startWy);
      var snapX = snapGridEnabled ? (Math.round(nx / snapGridSize) * snapGridSize) : nx;
      var snapY = snapGridEnabled ? (Math.round(ny / snapGridSize) * snapGridSize) : ny;
      var targetX = snapX;
      var targetY = snapY;
      if (dragConstraint === 'axis-x') {
        targetX = snapX;
        targetY = headerDrag.baseY;
      } else if (dragConstraint === 'axis-y') {
        targetX = headerDrag.baseX;
        targetY = snapY;
      } else if (dragConstraint === 'none') {
        targetX = headerDrag.baseX;
        targetY = headerDrag.baseY;
      }
      var dx = targetX - p.x;
      var dy = targetY - p.y;
      if (!isFinite(dx) || !isFinite(dy)) return;
      if (dx === 0 && dy === 0) return;
      p.x = targetX;
      p.y = targetY;
      try { translateNodeByDelta(headerDrag.id, dx, dy); } catch (err) {}
      try { scheduleOverlayUpdate(); } catch (err) {}
    }

    function endHeaderDrag(pointerId){
      if (!headerDrag || headerDrag.pointerId !== pointerId) return;
      try {
        if (headerDrag.kind === 'webgl' && webgl3dEnabled && webgl3d && webgl3d.controls) {
          try { webgl3d.controls.enabled = true; } catch (e0) {}
        }
      } catch (e) {}
      headerDrag = null;
      try { if (schedule3dFrame) schedule3dFrame(); } catch (e) {}
      try { applyMediaPointerEvents(); } catch (err) {}
    }

    function startNodeDrag(nodeId, pointerId, clientX, clientY){
      var w = getWorldFromClient(clientX, clientY);
      if (!nodePosById) nodePosById = Object.create(null);
      var p = nodePosById && nodePosById[nodeId] ? nodePosById[nodeId] : null;
      if (!p || !isFinite(p.x) || !isFinite(p.y)) {
        try { rebuildNodePosFromSvg(); } catch (err) {}
        p = nodePosById && nodePosById[nodeId] ? nodePosById[nodeId] : null;
      }
      if (!p || !isFinite(p.x) || !isFinite(p.y)) {
        p = { x: w.x, y: w.y };
        nodePosById[nodeId] = p;
      }
      nodeDrag = { id: nodeId, pointerId: pointerId, offX: p.x - w.x, offY: p.y - w.y };
      try { if (root && root.setPointerCapture) root.setPointerCapture(pointerId); } catch (err) {}
    }

    function moveNodeDrag(pointerId, clientX, clientY, altDown){
      if (!nodeDrag || nodeDrag.pointerId !== pointerId) return;
      var w = getWorldFromClient(clientX, clientY);
      if (!nodePosById) nodePosById = Object.create(null);
      var p = nodePosById && nodePosById[nodeDrag.id] ? nodePosById[nodeDrag.id] : null;
      if (!p || !isFinite(p.x) || !isFinite(p.y)) {
        p = { x: w.x + (nodeDrag.offX || 0), y: w.y + (nodeDrag.offY || 0) };
        nodePosById[nodeDrag.id] = p;
      }
      var nx = w.x + (nodeDrag.offX || 0);
      var ny = w.y + (nodeDrag.offY || 0);
      var doSnap = snapGridEnabled && !altDown;
      var snapX = doSnap ? (Math.round(nx / snapGridSize) * snapGridSize) : nx;
      var snapY = doSnap ? (Math.round(ny / snapGridSize) * snapGridSize) : ny;
      var targetX = snapX;
      var targetY = snapY;
      if (dragConstraint === 'axis-x') {
        targetX = snapX;
        targetY = p.y;
      } else if (dragConstraint === 'axis-y') {
        targetX = p.x;
        targetY = snapY;
      } else if (dragConstraint === 'none') {
        targetX = p.x;
        targetY = p.y;
      }
      var dx = targetX - p.x;
      var dy = targetY - p.y;
      if (!isFinite(dx) || !isFinite(dy)) return;
      if (dx === 0 && dy === 0) return;
      translateNodeByDelta(nodeDrag.id, dx, dy);
      try { __kgUpdateGroupRectsForNodeId(nodeDrag.id); } catch (err0) {}
      try { if (mark3dGeometryDirty) mark3dGeometryDirty(); } catch (err) {}
      try { scheduleOverlayUpdate(); } catch (err) {}
    }

    function endNodeDrag(pointerId){
      if (!nodeDrag || nodeDrag.pointerId !== pointerId) return;
      nodeDrag = null;
    }

    function startGroupDrag(groupId, pointerId, clientX, clientY){
      var w = getWorldFromClient(clientX, clientY);
      groupDrag = { id: groupId, pointerId: pointerId, wx: w.x, wy: w.y };
      try { if (root && root.setPointerCapture) root.setPointerCapture(pointerId); } catch (err) {}
    }

    function moveGroupDrag(pointerId, clientX, clientY){
      if (!groupDrag || groupDrag.pointerId !== pointerId) return;
      var w = getWorldFromClient(clientX, clientY);
      var dx = w.x - groupDrag.wx;
      var dy = w.y - groupDrag.wy;
      groupDrag.wx = w.x;
      groupDrag.wy = w.y;
      if (!isFinite(dx) || !isFinite(dy)) return;
      translateGroupByDelta(groupDrag.id, dx, dy);
      try { if (mark3dGeometryDirty) mark3dGeometryDirty(); } catch (err) {}
      try { scheduleOverlayUpdate(); } catch (err) {}
    }

    function endGroupDrag(pointerId){
      if (!groupDrag || groupDrag.pointerId !== pointerId) return;
      groupDrag = null;
    }

    function startEdgeDrag(sourceId, targetId, pointerId, clientX, clientY){
      var w = getWorldFromClient(clientX, clientY);
      edgeDrag = { s: sourceId, t: targetId, pointerId: pointerId, wx: w.x, wy: w.y };
      try { if (root && root.setPointerCapture) root.setPointerCapture(pointerId); } catch (err) {}
    }

    function moveEdgeDrag(pointerId, clientX, clientY){
      if (!edgeDrag || edgeDrag.pointerId !== pointerId) return;
      var w = getWorldFromClient(clientX, clientY);
      var dx = w.x - edgeDrag.wx;
      var dy = w.y - edgeDrag.wy;
      edgeDrag.wx = w.x;
      edgeDrag.wy = w.y;
      if (!isFinite(dx) || !isFinite(dy)) return;
      translateNodeByDelta(edgeDrag.s, dx, dy);
      translateNodeByDelta(edgeDrag.t, dx, dy);
      try { if (mark3dGeometryDirty) mark3dGeometryDirty(); } catch (err) {}
      try { scheduleOverlayUpdate(); } catch (err) {}
    }

    function endEdgeDrag(pointerId){
      if (!edgeDrag || edgeDrag.pointerId !== pointerId) return;
      edgeDrag = null;
    }

    function onPointerDown(e){
      try { clearSelection(); } catch (err) {}
      try {
        if (e && e.target && e.target instanceof Element) {
          if (e.target.closest(UI_IGNORE_SELECTOR)) return;
        }
      } catch (err) {}
      try {
        if (e && String(e.pointerType || '') === 'touch') return;
      } catch (err) {}

      try {
        if (webgl3dEnabled && e && e.target && e.target instanceof Element) {
          if (e.target.id === 'kg-webgl' || (e.target.closest && e.target.closest('#kg-webgl'))) return;
        }
      } catch (err) {}

      if (isMediaHeaderTarget(e.target)) {
        try {
          var panelEl = e.target instanceof Element
          ? e.target.closest('[data-kg-rich-media-panel="1"][data-kg-rich-media-render-surface="1"]')
          : null;
          var headerEl = panelEl;
          if (panelEl) {
            var nid = String(panelEl.getAttribute('data-node-id') || '').trim();
            if (nid) {
              startHeaderDrag(nid, e.pointerId, e.clientX, e.clientY, headerEl || panelEl || root);
            }
            try { e.preventDefault(); } catch (err) {}
            try { e.stopPropagation(); } catch (err) {}
            return;
          }
        } catch (err) {}
      }
      try {
        if (pointerMode !== 'pan' && e && e.target && e.target instanceof Element) {
          var t = e.target;
          if (t && t.closest && t.closest('#kg-overlay') && !t.closest('.kg-media')) {
            var under = elementFromPointIgnoringOverlays(e.clientX, e.clientY);
            if (under && under instanceof Element) t = under;
          }
          var edgeEl = t.closest('line[data-edge-id],path[data-edge-id],polyline[data-edge-id]');
          if (allowEdgeDrag && edgeEl && edgeEl.getAttribute && !e.target.closest('.kg-media')) {
            var sid = String(edgeEl.getAttribute('data-source-id') || edgeEl.getAttribute('data-source') || '').trim();
            var tid = String(edgeEl.getAttribute('data-target-id') || edgeEl.getAttribute('data-target') || '').trim();
            if (sid && tid) {
              startEdgeDrag(sid, tid, e.pointerId, e.clientX, e.clientY);
              try { e.preventDefault(); } catch (err) {}
              try { e.stopPropagation(); } catch (err) {}
              return;
            }
          }
          var groupEl = t.closest('[data-kg-group-id]');
          if (allowGroupDrag && groupEl && groupEl.getAttribute) {
            var gid = String(groupEl.getAttribute('data-kg-group-id') || '').trim();
            if (gid) {
              startGroupDrag(gid, e.pointerId, e.clientX, e.clientY);
              try { e.preventDefault(); } catch (err) {}
              try { e.stopPropagation(); } catch (err) {}
              return;
            }
          }
          var nodeEl = t.closest('[data-node-id]');
          if (allowNodeDrag && nodeEl && !e.target.closest('.kg-media') && nodeEl.getAttribute) {
            var nid = String(nodeEl.getAttribute('data-node-id') || '').trim();
            if (nid) {
              startNodeDrag(nid, e.pointerId, e.clientX, e.clientY);
              try { e.preventDefault(); } catch (err) {}
              try { e.stopPropagation(); } catch (err) {}
              return;
            }
          }
        }
      } catch (err) {}

      if (overlayFollowAnimation || canvas3dEnabled) {
        try {
          var trg = (e && e.target && e.target instanceof Element) ? e.target : null;
          if (trg && trg.closest && trg.closest(UI_IGNORE_SELECTOR)) return;
          if (trg && trg.closest && (trg.closest('[data-node-id]') || trg.closest('[data-edge-id]') || trg.closest('[data-kg-group-id]') || trg.closest('.kg-media'))) {
            return;
          }

          var btn0 = (typeof e.button === 'number') ? e.button : 0;
          if (canvas3dEnabled && overlay && overlay.__kgWebglPosById && btn0 === 0 && !panHeld && pointerMode !== 'pan' && (allowNodeDrag || allowEdgeDrag)) {
            try {
              var mp = overlay.__kgWebglPosById;
              var base = svgBase;
              var sx0 = (base && isFinite(base.sx) && base.sx > 0) ? base.sx : 1;
              var sy0 = (base && isFinite(base.sy) && base.sy > 0) ? base.sy : 1;
              var ox0 = (base && isFinite(base.ox)) ? base.ox : 0;
              var oy0 = (base && isFinite(base.oy)) ? base.oy : 0;
              var k0 = (state && isFinite(state.k) && state.k > 0) ? state.k : 1;
              var tx0 = (state && isFinite(state.x)) ? state.x : 0;
              var ty0 = (state && isFinite(state.y)) ? state.y : 0;
              var px = e.clientX;
              var py = e.clientY;
              var bestId = '';
              var bestD = 1e18;
              for (var id in mp) {
                var pr = mp[id];
                if (!pr) continue;
                var cx = (Number(pr.x) || 0) * k0 * sx0 + tx0 + ox0;
                var cy = (Number(pr.y) || 0) * k0 * sy0 + ty0 + oy0;
                var dx = px - cx;
                var dy = py - cy;
                var d2 = dx * dx + dy * dy;
                if (d2 < bestD) { bestD = d2; bestId = id; }
              }

              var startWorldX = (px - tx0 - ox0) / (k0 * sx0);
              var startWorldY = (py - ty0 - oy0) / (k0 * sy0);

              var tNow = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
              var tSec = (tNow - (webglCanvas.__kgStartedAt || (webglCanvas.__kgStartedAt = tNow))) / 1000;
              var autoRotate = payload3d && payload3d.autoRotate === true;
              var autoRotateSpeed = (payload3d && typeof payload3d.autoRotateSpeed === 'number' && isFinite(payload3d.autoRotateSpeed)) ? payload3d.autoRotateSpeed : 0.4;
              var omega = (Math.PI * 2 / 60) * (autoRotate ? autoRotateSpeed : 0);
              var ang = omega * tSec + (payload3d`,` && isFinite(payload3d.yaw0) ? payload3d.yaw0 : 0) + rotateYaw;
              var tilt = (payload3d && isFinite(payload3d.tiltX) ? payload3d.tiltX : 0) + rotateTilt;
              if (tilt < -1.25) tilt = -1.25;
              if (tilt > 1.25) tilt = 1.25;
              var cx3 = (payload3d && isFinite(payload3d.cx)) ? payload3d.cx : 0;
              var cy3 = (payload3d && isFinite(payload3d.cy)) ? payload3d.cy : 0;
              var cz3 = (payload3d && isFinite(payload3d.cz)) ? payload3d.cz : 0;

              var invRotY = function(p, a){ var x=p[0],y=p[1],z=p[2]; var c=Math.cos(a),s=Math.sin(a); return [x*c+z*s,y,-x*s+z*c]; };
              var invRotX = function(p, a){ var x=p[0],y=p[1],z=p[2]; var c=Math.cos(a),s=Math.sin(a); return [x,y*c-z*s,y*s+z*c]; };

              if (allowNodeDrag && bestId && bestD < 18 * 18) {
                var pr0 = mp[bestId];
                if (pr0 && isFinite(pr0.k) && isFinite(pr0.z) && pr0.k > 0) {
                  canvas3dDrag = {
                    kind: 'node',
                    pointerId: e.pointerId,
                    id: bestId,
                    startWorldX: startWorldX,
                    startWorldY: startWorldY,
                    nodeX0: Number(pr0.x) || 0,
                    nodeY0: Number(pr0.y) || 0,
                    k: Number(pr0.k) || 1,
                    z: Number(pr0.z) || 0,
                    ang: ang,
                    tilt: tilt,
                    angFixed: ang,
                    tiltFixed: tilt,
                    cx: cx3,
                    cy: cy3,
                    cz: cz3,
                    invRotY: invRotY,
                    invRotX: invRotX,
                  };
                  try { setSelection({ nodeId: bestId, edgeId: '' }); } catch (e0) {}
                  try { root.setPointerCapture(e.pointerId); } catch (e1) {}
                  try { e.preventDefault(); e.stopPropagation(); } catch (e2) {}
                  return;
                }
              }

              var bestEId = '';
              var bestED = 1e18;
              var bestS = '';
              var bestT = '';
              if (payload3d && payload3d.edges && payload3d.edges.length) {
                var edges0 = payload3d.edges;
                for (var ei = 0; ei < edges0.length; ei += 1) {
                  var ed = edges0[ei];
                  if (!ed) continue;
                  var sid = String((ed.s || ed.source || '') || '');
                  var tid = String((ed.t || ed.target || '') || '');
                  if (!sid || !tid) continue;
                  var a = mp[sid];
                  var b = mp[tid];
                  if (!a || !b) continue;
                  var ax = (Number(a.x) || 0) * k0 * sx0 + tx0 + ox0;
                  var ay = (Number(a.y) || 0) * k0 * sy0 + ty0 + oy0;
                  var bx = (Number(b.x) || 0) * k0 * sx0 + tx0 + ox0;
                  var by = (Number(b.y) || 0) * k0 * sy0 + ty0 + oy0;
                  var vx = bx - ax;
                  var vy = by - ay;
                  var wx = px - ax;
                  var wy = py - ay;
                  var vv = vx * vx + vy * vy;
                  var tt = vv > 1e-9 ? (wx * vx + wy * vy) / vv : 0;
                  if (tt < 0) tt = 0;
                  if (tt > 1) tt = 1;
                  var cx0 = ax + vx * tt;
                  var cy0 = ay + vy * tt;
                  var dx0 = px - cx0;
                  var dy0 = py - cy0;
                  var d20 = dx0 * dx0 + dy0 * dy0;
                  if (d20 < bestED) {
                    bestED = d20;
                    bestEId = String((ed && ed.id) || '');
                    bestS = sid;
                    bestT = tid;
                  }
                }
              }

              if (allowEdgeDrag && bestEId && bestED < 14 * 14) {
                var ps0 = mp[bestS];
                var pt0 = mp[bestT];
                if (ps0 && pt0 && isFinite(ps0.k) && isFinite(ps0.z) && isFinite(pt0.k) && isFinite(pt0.z) && ps0.k > 0 && pt0.k > 0) {
                  canvas3dDrag = {
                    kind: 'edge',
                    pointerId: e.pointerId,
                    id: bestEId,
                    s: bestS,
                    t: bestT,
                    startWorldX: startWorldX,
                    startWorldY: startWorldY,
                    sX0: Number(ps0.x) || 0,
                    sY0: Number(ps0.y) || 0,
                    sK: Number(ps0.k) || 1,
                    sZ: Number(ps0.z) || 0,
                    tX0: Number(pt0.x) || 0,
                    tY0: Number(pt0.y) || 0,
                    tK: Number(pt0.k) || 1,
                    tZ: Number(pt0.z) || 0,
                    ang: ang,
                    tilt: tilt,
                    angFixed: ang,
                    tiltFixed: tilt,
                    cx: cx3,
                    cy: cy3,
                    cz: cz3,
                    invRotY: invRotY,
                    invRotX: invRotX,
                  };
                  try { setSelection({ nodeId: '', edgeId: bestEId }); } catch (e0) {}
                  try { root.setPointerCapture(e.pointerId); } catch (e1) {}
                  try { e.preventDefault(); e.stopPropagation(); } catch (e2) {}
                  return;
                }
              }
            } catch (e0) {}
          }

          var btnRot = (typeof e.button === 'number') ? e.button : 0;
          if (!panHeld && pointerMode !== 'pan' && btnRot === 0) {
            rotateDrag = { pointerId: e.pointerId, x0: e.clientX, y0: e.clientY, yaw0: rotateYaw, tilt0: rotateTilt };
            try { root.setPointerCapture(e.pointerId); } catch (err2) {}
            try { e.preventDefault(); } catch (err3) {}
            try { e.stopPropagation(); } catch (err4) {}
            return;
          }
          if (btnRot === 1 || btnRot === 2 || panHeld || pointerMode === 'pan') {
            startDrag(e.pointerId, e.clientX, e.clientY);
            try { root.setPointerCapture(e.pointerId); } catch (err5) {}
            try { e.preventDefault(); } catch (err6) {}
            return;
          }
        } catch (err) {}
      }
      if (!panHeld && pointerMode !== 'pan' && mediaInteractive && isMediaTarget(e.target) && !isMediaHeaderTarget(e.target)) return;
      try {
        var pt = String(e.pointerType || '');
        var btn = (typeof e.button === 'number') ? e.button : 0;
        var preset = coerceViewportControlsPreset(viewportControlsPreset);
        var allowPanDrag = (pt === 'touch') || pointerMode === 'pan' || shouldAllowPanDragForPointerEvent({ preset: preset, eventType: 'pointerdown', button: btn, shiftKey: !!e.shiftKey, spacePanHeld: panHeld });
        if (!allowPanDrag) return;
      } catch (err) {}
      startDrag(e.pointerId, e.clientX, e.clientY);
      try { root.setPointerCapture(e.pointerId); } catch (err) {}
      e.preventDefault();
    }

    function onClickCapture(e){
      try {
        if (!e) return;
        if (dragId != null) return;
        if (nodeDrag || edgeDrag || groupDrag || headerDrag) return;
        if (panHeld || pointerMode === 'pan') return;
        if (mediaInteractive && !panHeld && pointerMode !== 'pan' && isMediaTarget(e.target) && !isMediaHeaderTarget(e.target)) return;

        var t = (e.target && e.target instanceof Element) ? e.target : null;
        if (t && t.closest && t.closest(UI_IGNORE_SELECTOR)) return;

        if (canvas3dEnabled && overlay && overlay.__kgWebglPosById) {
          try {
            var mp = overlay.__kgWebglPosById;
            var bestId = '';
            var bestD = 1e18;
            var px = e.clientX;
            var py = e.clientY;
            var base = svgBase;
            var sx0 = (base && isFinite(base.sx) && base.sx > 0) ? base.sx : 1;
            var sy0 = (base && isFinite(base.sy) && base.sy > 0) ? base.sy : 1;
            var ox0 = (base && isFinite(base.ox)) ? base.ox : 0;
            var oy0 = (base && isFinite(base.oy)) ? base.oy : 0;
            var k0 = (state && isFinite(state.k) && state.k > 0) ? state.k : 1;
            var tx0 = (state && isFinite(state.x)) ? state.x : 0;
            var ty0 = (state && isFinite(state.y)) ? state.y : 0;
            for (var id in mp) {
              var pr = mp[id];
              if (!pr) continue;
              var cx;
              var cy;
              if (webgl3dEnabled) {
                cx = (Number(pr.x) || 0);
                cy = (Number(pr.y) || 0);
              } else {
                cx = (Number(pr.x) || 0) * k0 * sx0 + tx0 + ox0;
                cy = (Number(pr.y) || 0) * k0 * sy0 + ty0 + oy0;
              }
              var dx = px - cx;
              var dy = py - cy;
              var d2 = dx * dx + dy * dy;
              if (d2 < bestD) { bestD = d2; bestId = id; }
            }
            if (bestId && bestD < 18 * 18) {
              setSelection({ nodeId: bestId, edgeId: '' });
              return;
            }

            var bestEId = '';
            var bestED = 1e18;
            if (payload3d && payload3d.edges && payload3d.edges.length) {
              var edges0 = payload3d.edges;
              for (var ei = 0; ei < edges0.length; ei += 1) {
                var ed = edges0[ei];
                if (!ed) continue;
                var sid = String((ed.s || ed.source || '') || '');
                var tid = String((ed.t || ed.target || '') || '');
                if (!sid || !tid) continue;
                var a = mp[sid];
                var b = mp[tid];
                if (!a || !b) continue;
                var ax = (Number(a.x) || 0) * k0 * sx0 + tx0 + ox0;
                var ay = (Number(a.y) || 0) * k0 * sy0 + ty0 + oy0;
                var bx = (Number(b.x) || 0) * k0 * sx0 + tx0 + ox0;
                var by = (Number(b.y) || 0) * k0 * sy0 + ty0 + oy0;
                var vx = bx - ax;
                var vy = by - ay;
                var wx = px - ax;
                var wy = py - ay;
                var vv = vx * vx + vy * vy;
                var tt = vv > 1e-9 ? (wx * vx + wy * vy) / vv : 0;
                if (tt < 0) tt = 0;
                if (tt > 1) tt = 1;
                var cx0 = ax + vx * tt;
                var cy0 = ay + vy * tt;
                var dx0 = px - cx0;
                var dy0 = py - cy0;
                var d20 = dx0 * dx0 + dy0 * dy0;
                if (d20 < bestED) {
                  bestED = d20;
                  bestEId = String((ed && ed.id) || '');
                }
              }
            }

            if (bestEId && bestED < 14 * 14) {
              setSelection({ nodeId: '', edgeId: bestEId });
              return;
            }
          } catch (e0) {}
        }

        var nodeEl = t && t.closest ? t.closest('[data-node-id]') : null;
        if (nodeEl && nodeEl.getAttribute) {
          var nid = String(nodeEl.getAttribute('data-node-id') || '').trim();
          if (nid) {
            setSelection({ nodeId: nid, edgeId: '' });
            return;
          }
        }

        var edgeEl = t && t.closest ? t.closest('[data-edge-id]') : null;
        if (edgeEl && edgeEl.getAttribute) {
          var eid = String(edgeEl.getAttribute('data-edge-id') || '').trim();
          if (eid) {
            setSelection({ nodeId: '', edgeId: eid });
            return;
          }
        }

        setSelection({ nodeId: '', edgeId: '' });
      } catch (err) {}
    }
    function onPointerMove(e){
      if (canvas3dDrag && canvas3dDrag.pointerId === e.pointerId && overlay) {
        try {
          var base = svgBase;
          var sx0 = (base && isFinite(base.sx) && base.sx > 0) ? base.sx : 1;
          var sy0 = (base && isFinite(base.sy) && base.sy > 0) ? base.sy : 1;
          var ox0 = (base && isFinite(base.ox)) ? base.ox : 0;
          var oy0 = (base && isFinite(base.oy)) ? base.oy : 0;
          var k0 = (state && isFinite(state.k) && state.k > 0) ? state.k : 1;
          var tx0 = (state && isFinite(state.x)) ? state.x : 0;
          var ty0 = (state && isFinite(state.y)) ? state.y : 0;
          var curWorldX = (e.clientX - tx0 - ox0) / (k0 * sx0);
          var curWorldY = (e.clientY - ty0 - oy0) / (k0 * sy0);
          var dxW = curWorldX - (Number(canvas3dDrag.startWorldX) || 0);
          var dyW = curWorldY - (Number(canvas3dDrag.startWorldY) || 0);

          var invRotY = canvas3dDrag.invRotY;
          var invRotX = canvas3dDrag.invRotX;
          var ang = Number(canvas3dDrag.ang) || 0;
          var tilt = Number(canvas3dDrag.tilt) || 0;
          var cx3 = Number(canvas3dDrag.cx) || 0;
          var cy3 = Number(canvas3dDrag.cy) || 0;
          var cz3 = Number(canvas3dDrag.cz) || 0;
          var overrides = overlay.__kgNodeOverrideById || (overlay.__kgNodeOverrideById = Object.create(null));

          if (canvas3dDrag.kind === 'edge') {
            var sPx = (Number(canvas3dDrag.sX0) || 0) + dxW;
            var sPy = (Number(canvas3dDrag.sY0) || 0) + dyW;
            var tPx = (Number(canvas3dDrag.tX0) || 0) + dxW;
            var tPy = (Number(canvas3dDrag.tY0) || 0) + dyW;

            var sK = Number(canvas3dDrag.sK) || 1;
            var sZ = Number(canvas3dDrag.sZ) || 0;
            var tK2 = Number(canvas3dDrag.tK) || 1;
            var tZ2 = Number(canvas3dDrag.tZ) || 0;
            if (sK > 0 && tK2 > 0 && invRotY && invRotX) {
              var rs = [sPx / sK, sPy / sK, sZ];
              var rt = [tPx / tK2, tPy / tK2, tZ2];
              var u1 = invRotY(invRotX(rs, -tilt), -ang);
              var u2 = invRotY(invRotX(rt, -tilt), -ang);
              overrides[String(canvas3dDrag.s || '')] = [u1[0] + cx3, u1[1] + cy3, u1[2] + cz3];
              overrides[String(canvas3dDrag.t || '')] = [u2[0] + cx3, u2[1] + cy3, u2[2] + cz3];
              try { writePayload3dNodePos(String(canvas3dDrag.s || ''), u1[0] + cx3, u1[1] + cy3, u1[2] + cz3); } catch (eP0) {}
              try { writePayload3dNodePos(String(canvas3dDrag.t || ''), u2[0] + cx3, u2[1] + cy3, u2[2] + cz3); } catch (eP1) {}
            }
          } else {
            var px0 = (Number(canvas3dDrag.nodeX0) || 0) + dxW;
            var py0 = (Number(canvas3dDrag.nodeY0) || 0) + dyW;
            var kD = Number(canvas3dDrag.k) || 1;
            var zD = Number(canvas3dDrag.z) || 0;
            if (kD > 0 && invRotY && invRotX) {
              var r3 = [px0 / kD, py0 / kD, zD];
              var u = invRotY(invRotX(r3, -tilt), -ang);
              overrides[String(canvas3dDrag.id || '')] = [u[0] + cx3, u[1] + cy3, u[2] + cz3];
              try { writePayload3dNodePos(String(canvas3dDrag.id || ''), u[0] + cx3, u[1] + cy3, u[2] + cz3); } catch (eP2) {}
            }
          }
          try { if (schedule3dFrame) schedule3dFrame(); } catch (e0) {}
          try { scheduleOverlayUpdate(); } catch (e1) {}
          try { e.preventDefault(); } catch (e2) {}
          try { e.stopPropagation(); } catch (e3) {}
          return;
        } catch (e4) {}
      }
      if (rotateDrag && rotateDrag.pointerId === e.pointerId) {
        try {
          var dx = (e.clientX - rotateDrag.x0);
          var dy = (e.clientY - rotateDrag.y0);
          var m = canvasInteractionSpeedMultiplier;
          if (!(m > 0) || !isFinite(m)) m = 1;
          var yaw = rotateDrag.yaw0 + dx * 0.006 * m;
          var tilt = rotateDrag.tilt0 + dy * 0.006 * m;
          if (!isFinite(yaw)) yaw = rotateYaw;
          if (!isFinite(tilt)) tilt = rotateTilt;
          if (tilt < -1.25) tilt = -1.25;
          if (tilt > 1.25) tilt = 1.25;
          rotateYaw = yaw;
          rotateTilt = tilt;
          try { if (schedule3dFrame) schedule3dFrame(); } catch (err4) {}
          try { e.preventDefault(); } catch (err2) {}
          try { e.stopPropagation(); } catch (err3) {}
          return;
        } catch (err) {}
      }
      if (headerDrag && headerDrag.pointerId === e.pointerId) {
        moveHeaderDrag(e.pointerId, e.clientX, e.clientY);
        try { e.preventDefault(); } catch (err) {}
        try { e.stopPropagation(); } catch (err) {}
        return;
      }
      if (edgeDrag && edgeDrag.pointerId === e.pointerId) {
        moveEdgeDrag(e.pointerId, e.clientX, e.clientY);
        try { if (schedule3dFrame) schedule3dFrame(); } catch (err0) {}
        try { e.preventDefault(); } catch (err) {}
        try { e.stopPropagation(); } catch (err) {}
        return;
      }
      if (nodeDrag && nodeDrag.pointerId === e.pointerId) {
        moveNodeDrag(e.pointerId, e.clientX, e.clientY, !!e.altKey);
        try { if (schedule3dFrame) schedule3dFrame(); } catch (err0) {}
        try { e.preventDefault(); } catch (err) {}
        try { e.stopPropagation(); } catch (err) {}
        return;
      }
      if (groupDrag && groupDrag.pointerId === e.pointerId) {
        moveGroupDrag(e.pointerId, e.clientX, e.clientY);
        try { if (schedule3dFrame) schedule3dFrame(); } catch (err0) {}
        try { e.preventDefault(); } catch (err) {}
        try { e.stopPropagation(); } catch (err) {}
        return;
      }
      if (!drag || drag.id !== e.pointerId) return;
      moveDrag(e.clientX, e.clientY);
      e.preventDefault();
    }
    function onPointerUp(e){
      if (rotateDrag && rotateDrag.pointerId === e.pointerId) {
        rotateDrag = null;
        try { e.preventDefault(); } catch (err2) {}
        try { e.stopPropagation(); } catch (err3) {}
        return;
      }
      if (canvas3dDrag && canvas3dDrag.pointerId === e.pointerId) {
        canvas3dDrag = null;
        try { if (schedule3dFrame) schedule3dFrame(); } catch (err0) {}
        try { scheduleOverlayUpdate(); } catch (err1) {}
        try { e.preventDefault(); } catch (err2) {}
        try { e.stopPropagation(); } catch (err3) {}
        return;
      }
      if (headerDrag && headerDrag.pointerId === e.pointerId) {
        endHeaderDrag(e.pointerId);
        try { e.preventDefault(); } catch (err) {}
        try { e.stopPropagation(); } catch (err) {}
        return;
      }
      if (edgeDrag && edgeDrag.pointerId === e.pointerId) {
        endEdgeDrag(e.pointerId);
        try { e.preventDefault(); } catch (err) {}
        try { e.stopPropagation(); } catch (err) {}
        return;
      }
      if (nodeDrag && nodeDrag.pointerId === e.pointerId) {
        endNodeDrag(e.pointerId);
        try { e.preventDefault(); } catch (err) {}
        try { e.stopPropagation(); } catch (err) {}
        return;
      }
      if (groupDrag && groupDrag.pointerId === e.pointerId) {
        endGroupDrag(e.pointerId);
        try { e.preventDefault(); } catch (err) {}
        try { e.stopPropagation(); } catch (err) {}
        return;
      }
      if (!drag || drag.id !== e.pointerId) return;
      endDrag();
      e.preventDefault();
    }

    function onMouseDown(e){
      if (typeof window !== 'undefined' && window.PointerEvent) return;
      try { clearSelection(); } catch (err) {}
      try {
        if (e && e.target && e.target instanceof Element) {
          if (e.target.closest(UI_IGNORE_SELECTOR)) return;
        }
      } catch (err) {}
      if (allowNodeDrag && !panHeld && pointerMode !== 'pan' && isMediaHeaderTarget(e.target)) {
        try {
          var panelEl = e.target instanceof Element
          ? e.target.closest('[data-kg-rich-media-panel="1"][data-kg-rich-media-render-surface="1"]')
          : null;
          var headerEl = panelEl;
          if (panelEl) {
            var nid = String(panelEl.getAttribute('data-node-id') || '').trim();
            if (nid) startHeaderDrag(nid, 'mouse-header', e.clientX, e.clientY, headerEl || panelEl || root);
            try { e.preventDefault(); } catch (err) {}
            try { e.stopPropagation(); } catch (err) {}
            return;
          }
        } catch (err) {}
      }
      if (!panHeld && pointerMode !== 'pan' && mediaInteractive && isMediaTarget(e.target) && !isMediaHeaderTarget(e.target)) return;
      try {
        var btn = (typeof e.button === 'number') ? e.button : 0;
        var preset = coerceViewportControlsPreset(viewportControlsPreset);
        var allowPanDrag = pointerMode === 'pan' || shouldAllowPanDragForPointerEvent({ preset: preset, eventType: 'mousedown', button: btn, shiftKey: !!e.shiftKey, spacePanHeld: panHeld });
        if (!allowPanDrag) return;
      } catch (err) {}
      startDrag('mouse', e.clientX, e.clientY);
      e.preventDefault();
    }
    function onMouseMove(e){
      if (headerDrag && headerDrag.pointerId === 'mouse-header') {
        moveHeaderDrag('mouse-header', e.clientX, e.clientY);
        try { e.preventDefault(); } catch (err) {}
        return;
      }
      if (!drag || drag.id !== 'mouse') return;
      moveDrag(e.clientX, e.clientY);
      e.preventDefault();
    }
    function onMouseUp(e){
      if (headerDrag && headerDrag.pointerId === 'mouse-header') {
        endHeaderDrag('mouse-header');
        try { e.preventDefault(); } catch (err) {}
        return;
      }
      if (!drag || drag.id !== 'mouse') return;
      endDrag();
      e.preventDefault();
    }

    root.addEventListener('wheel', onWheel, { passive: false, capture: true });
    root.addEventListener('pointerdown', function(){ try { clearSelection(); } catch (err) {} }, { passive: true, capture: true });
    root.addEventListener('click', onClickCapture, true);
    root.addEventListener('pointerdown', onPointerDown, { passive: false });
    root.addEventListener('pointermove', onPointerMove, { passive: false });
    root.addEventListener('pointerup', onPointerUp, { passive: false });
    root.addEventListener('pointercancel', onPointerUp, { passive: false });
    root.addEventListener('touchstart', onTouchStart, { passive: false });
    root.addEventListener('touchmove', onTouchMove, { passive: false });
    root.addEventListener('touchend', onTouchEnd, { passive: false });
    root.addEventListener('touchcancel', onTouchEnd, { passive: false });
    root.addEventListener('mousedown', onMouseDown, { passive: false });
    window.addEventListener('mousemove', onMouseMove, { passive: false });
    window.addEventListener('mouseup', onMouseUp, { passive: false });
    root.addEventListener('selectstart', function(e){ e.preventDefault(); }, { passive: false });
    root.addEventListener('dragstart', function(e){ e.preventDefault(); }, { passive: false });
    root.addEventListener('dblclick', function(e){ e.preventDefault(); }, { passive: false });
    root.addEventListener('contextmenu', function(e){
      try {
        if (overlayFollowAnimation) {
          e.preventDefault();
          return;
        }
        var preset = coerceViewportControlsPreset(viewportControlsPreset);
        if (!shouldSuppressContextMenuForPreset(preset)) return;
        e.preventDefault();
      } catch (err) {}
    }, { passive: false });

    window.addEventListener('keydown', function(e){
      try {
        if (!e) return;
        var k0 = String(e.key || '');
        if (k0 === ' ' || k0 === 'Spacebar') {
          var aeS = document.activeElement;
          if (!aeS || aeS === document.body || (root && root.contains(aeS))) {
            setPanHeld(true);
            e.preventDefault();
          }
        }
        if (!e.ctrlKey && !e.metaKey) {
          var kk = String(e.key || '').toLowerCase();
          if (kk === 'i') {
            var ae0 = document.activeElement;
            if (!ae0 || ae0 === document.body || (root && root.contains(ae0))) {
              setMediaInteractive(!mediaInteractive);
              e.preventDefault();
            }
          }
        }
        if (!(e.ctrlKey || e.metaKey)) return;
        var k = String(e.key || '');
        if (k === '+' || k === '-' || k === '=' || k === '0') {
          var ae = document.activeElement;
          if (!ae || ae === document.body || (root && root.contains(ae))) e.preventDefault();
        }
      } catch (err) {}
    }, { passive: false });

    window.addEventListener('keyup', function(e){
      try {
        if (!e) return;
        var k0 = String(e.key || '');
        if (k0 === ' ' || k0 === 'Spacebar') {
          setPanHeld(false);
          e.preventDefault();
        }
      } catch (err) {}
    }, { passive: false });

    window.addEventListener('blur', function(){
      try { setPanHeld(false); } catch (err) {}
    }, { passive: true });

    document.addEventListener('visibilitychange', function(){
      try { if (document.hidden) setPanHeld(false); } catch (err) {}
    }, { passive: true });

    var gestureZoom = null;

    var touchDrag = null;
    function touchPointToLocal(touch, rect){
      var sx = (touch && isFinite(touch.clientX) ? touch.clientX : 0) - (rect && isFinite(rect.left) ? rect.left : 0);
      var sy = (touch && isFinite(touch.clientY) ? touch.clientY : 0) - (rect && isFinite(rect.top) ? rect.top : 0);
      return { sx: sx, sy: sy, clientX: (touch && isFinite(touch.clientX) ? touch.clientX : 0), clientY: (touch && isFinite(touch.clientY) ? touch.clientY : 0) };
    }
    function computePinchZoomTransform(args){
      var t0 = safeViewportTransform(args && args.startTransform ? args.startTransform : null);
      var startA = args && args.startA ? args.startA : { sx: 0, sy: 0 };
      var startB = args && args.startB ? args.startB : { sx: 0, sy: 0 };
      var curA = args && args.curA ? args.curA : { sx: 0, sy: 0 };
      var curB = args && args.curB ? args.curB : { sx: 0, sy: 0 };
      var startMidSx = (startA.sx + startB.sx) / 2;
      var startMidSy = (startA.sy + startB.sy) / 2;
      var curMidSx = (curA.sx + curB.sx) / 2;
      var curMidSy = (curA.sy + curB.sy) / 2;
      var startDx = startA.sx - startB.sx;
      var startDy = startA.sy - startB.sy;
      var curDx = curA.sx - curB.sx;
      var curDy = curA.sy - curB.sy;
      var startDist = Math.max(1e-6, Math.hypot(startDx, startDy));
      var curDist = Math.max(1e-6, Math.hypot(curDx, curDy));
      var ratio = curDist / startDist;
      var m = (args && isFinite(args.zoomExponentMultiplier)) ? args.zoomExponentMultiplier : 1;
      var safeM = Math.max(0.01, m);
      var nextKRaw = t0.k * Math.pow(ratio, safeM);
      var nextK = Math.max(minK, Math.min(maxK, nextKRaw));
      var midWorld = screenToWorld({ transform: t0, sx: startMidSx, sy: startMidSy });
      var baseSx = (svgBase && isFinite(svgBase.sx) && svgBase.sx > 0) ? svgBase.sx : 1;
      var baseSy = (svgBase && isFinite(svgBase.sy) && svgBase.sy > 0) ? svgBase.sy : 1;
      var ox = (svgBase && isFinite(svgBase.ox)) ? svgBase.ox : 0;
      var oy = (svgBase && isFinite(svgBase.oy)) ? svgBase.oy : 0;
      var nextX = curMidSx - ox - midWorld.x * nextK * baseSx;
      var nextY = curMidSy - oy - midWorld.y * nextK * baseSy;
      return { k: nextK, x: nextX, y: nextY };
    }

    function onTouchStart(e){
      try {
        if (!e || !e.touches) return;
        if (shouldIgnoreCanvasWheelEvent({ event: e, ignoreSelector: UI_IGNORE_SELECTOR })) return;
        if (mediaInteractive && pointerMode !== 'pan' && !panHeld && isMediaTarget(e.target)) return;
        var t = (e.target && e.target instanceof Element) ? e.target : null;
        if (t && t.closest && (t.closest('[data-node-id]') || t.closest('[data-edge-id]') || t.closest('[data-kg-group-id]') || t.closest('.kg-media'))) return;
        var rect = root.getBoundingClientRect();
        var touches = e.touches;
        if (!touches || touches.length === 0) return;

        if (touches.length === 1) {
          try {
            if (t && t.closest && !panHeld && pointerMode !== 'pan') {
              var touchClientX = (touches[0] && isFinite(touches[0].clientX)) ? touches[0].clientX : 0;
              var touchClientY = (touches[0] && isFinite(touches[0].clientY)) ? touches[0].clientY : 0;

              var panelEl = t.closest('[data-kg-rich-media-panel="1"][data-kg-rich-media-render-surface="1"][data-kg-canvas-overlay-drag-handle="true"]');
              if (panelEl && !t.closest('iframe,img,video,source,a,button,textarea,input,select,summary,[contenteditable="true"]')) {
                var nid0 = (panelEl && panelEl.getAttribute) ? String(panelEl.getAttribute('data-node-id') || '').trim() : '';
                if (nid0) {
                  startHeaderDrag(nid0, -1, touchClientX, touchClientY, panelEl);
                  touchDrag = { type: 'header', pointerId: -1 };
                  try { e.preventDefault(); } catch (err0) {}
                  return;
                }
              }

              var groupEl = t.closest('[data-kg-group-id]');
              if (allowGroupDrag && groupEl && groupEl.getAttribute) {
                var gid = String(groupEl.getAttribute('data-kg-group-id') || '').trim();
                if (gid) {
                  startGroupDrag(gid, -1, touchClientX, touchClientY);
                  touchDrag = { type: 'group', pointerId: -1 };
                  try { e.preventDefault(); } catch (err1) {}
                  return;
                }
              }

              var nodeEl = t.closest('[data-node-id]');
              if (allowNodeDrag && nodeEl && nodeEl.getAttribute && !(t.closest && t.closest('.kg-media'))) {
                var nid = String(nodeEl.getAttribute('data-node-id') || '').trim();
                if (nid) {
                  startNodeDrag(nid, -1, touchClientX, touchClientY);
                  touchDrag = { type: 'node', pointerId: -1 };
                  try { e.preventDefault(); } catch (err2) {}
                  return;
                }
              }
            }
          } catch (err4) {}
        }

        var t0 = safeViewportTransform(state);
        if (overlayFollowAnimation && touches.length === 1) {
          var p0 = touchPointToLocal(touches[0], rect);
          touchDrag = { type: 'rotate', x0: p0.clientX, y0: p0.clientY, yaw0: rotateYaw, tilt0: rotateTilt };
          try { e.preventDefault(); } catch (err) {}
          return;
        }

        if (touches.length >= 2) {
          var a = touchPointToLocal(touches[0], rect);
          var b = touchPointToLocal(touches[1], rect);
          touchDrag = { type: 'pinch', startTransform: t0, startA: a, startB: b };
          try { e.preventDefault(); } catch (err2) {}
          return;
        }

        var p = touchPointToLocal(touches[0], rect);
        touchDrag = { type: 'pan', startTransform: t0, startSx: p.sx, startSy: p.sy };
        try { e.preventDefault(); } catch (err3) {}
      } catch (err) {}
    }

    function onTouchMove(e){
      try {
        if (!touchDrag || !e || !e.touches) return;
        var rect = root.getBoundingClientRect();
        var touches = e.touches;
        if (!touches || touches.length === 0) return;

        if (touchDrag.type === 'node') {
          if (touches.length !== 1) { try { endDrag(); } catch (e0) {} touchDrag = null; return; }
          try { moveNodeDrag(-1, touches[0].clientX, touches[0].clientY); } catch (e1) {}
          try { e.preventDefault(); } catch (err0) {}
          return;
        }

        if (touchDrag.type === 'group') {
          if (touches.length !== 1) { try { endDrag(); } catch (e2) {} touchDrag = null; return; }
          try { moveGroupDrag(-1, touches[0].clientX, touches[0].clientY); } catch (e3) {}
          try { e.preventDefault(); } catch (err1) {}
          return;
        }

        if (touchDrag.type === 'header') {
          if (touches.length !== 1) { try { endDrag(); } catch (e4) {} touchDrag = null; return; }
          try { moveHeaderDrag(-1, touches[0].clientX, touches[0].clientY); } catch (e5) {}
          try { e.preventDefault(); } catch (err2) {}
          return;
        }

        if (touchDrag.type === 'rotate') {
          if (!overlayFollowAnimation) { touchDrag = null; return; }
          if (touches.length !== 1) { touchDrag = null; return; }
          var c0 = touches[0];
          var dx = (isFinite(c0.clientX) ? c0.clientX : 0) - (isFinite(touchDrag.x0) ? touchDrag.x0 : 0);
          var dy = (isFinite(c0.clientY) ? c0.clientY : 0) - (isFinite(touchDrag.y0) ? touchDrag.y0 : 0);
          var mRot = canvasInteractionSpeedMultiplier;
          if (!(mRot > 0) || !isFinite(mRot)) mRot = 1;
          rotateYaw = (touchDrag.yaw0 || 0) + dx * 0.006 * mRot;
          rotateTilt = (touchDrag.tilt0 || 0) + dy * 0.006 * mRot;
          if (rotateTilt < -1.25) rotateTilt = -1.25;
          if (rotateTilt > 1.25) rotateTilt = 1.25;
          try { if (schedule3dFrame) schedule3dFrame(); } catch (err1) {}
          try { e.preventDefault(); } catch (err0) {}
          return;
        }

        if (touchDrag.type === 'pinch') {
          if (touches.length < 2) { touchDrag = null; return; }
          var a = touchPointToLocal(touches[0], rect);
          var b = touchPointToLocal(touches[1], rect);
          var zoomExponentMultiplier = zoomSpeed * flowWheelZoomSpeedMultiplier * flowWheelZoomIncrementMultiplier * canvasInteractionSpeedMultiplier;
          var next = computePinchZoomTransform({
            startTransform: touchDrag.startTransform,
            startA: touchDrag.startA,
            startB: touchDrag.startB,
            curA: a,
            curB: b,
            zoomExponentMultiplier: zoomExponentMultiplier,
          });
          state.k = next.k; state.x = next.x; state.y = next.y;
          applyTransform();
          try { e.preventDefault(); } catch (err1) {}
          return;
        }

        if (touchDrag.type === 'pan') {
          if (touches.length !== 1) { touchDrag = null; return; }
          var p = touchPointToLocal(touches[0], rect);
          var dx = (p.sx - (touchDrag.startSx || 0));
          var dy = (p.sy - (touchDrag.startSy || 0));
          var interactionSpeed = canvasPanSpeedMultiplier * canvasInteractionSpeedMultiplier;
          if (!(interactionSpeed > 0) || !isFinite(interactionSpeed)) interactionSpeed = 1;
          state.k = touchDrag.startTransform.k;
          state.x = touchDrag.startTransform.x + dx * interactionSpeed;
          state.y = touchDrag.startTransform.y + dy * interactionSpeed;
          applyTransform();
          try { e.preventDefault(); } catch (err2) {}
        }
      } catch (err) {}
    }

    function onTouchEnd(e){
      try {
        if (!touchDrag) return;
        var touches = e && e.touches ? e.touches : null;
        if (!touches || touches.length === 0) {
          try { endDrag(); } catch (e0) {}
          touchDrag = null;
        }
      } catch (err) {}
    }
    window.addEventListener('gesturestart', function(e){
      try {
        var rect = root.getBoundingClientRect();
        var scale = typeof e.scale === 'number' && isFinite(e.scale) ? e.scale : 1;
        var clientX = typeof e.clientX === 'number' && isFinite(e.clientX) ? e.clientX : rect.left + rect.width / 2;
        var clientY = typeof e.clientY === 'number' && isFinite(e.clientY) ? e.clientY : rect.top + rect.height / 2;
        gestureZoom = { startK: state.k, startScale: scale || 1, anchor: { sx: clientX - rect.left, sy: clientY - rect.top } };
        e.preventDefault();
      } catch (err) {}
    }, { passive: false });
    window.addEventListener('gesturechange', function(e){
      try {
        if (!gestureZoom) return;
        var g = gestureZoom;
        var scale = typeof e.scale === 'number' && isFinite(e.scale) ? e.scale : 1;
        var ratio = g.startScale > 0 ? scale / g.startScale : scale;
        var nextK = Math.max(minK, Math.min(maxK, g.startK * ratio));
        var next = computeAnchoredTransform({ transform: state, anchor: g.anchor, nextK: nextK });
        state.k = next.k; state.x = next.x; state.y = next.y;
        applyTransform();
        e.preventDefault();
      } catch (err) {}
    }, { passive: false });
    window.addEventListener('gestureend', function(e){
      try { gestureZoom = null; e.preventDefault(); } catch (err) {}
    }, { passive: false });

    if (fitBtn) fitBtn.addEventListener('click', function(){ fitToCenter(); });
    if (resetBtn) resetBtn.addEventListener('click', function(){ resetView(); });
    var __kgFrontmatterVis = __KG_FRONTMATTER_VIS__;
    var __kgFrontmatterNodeSet = null;
    var __kgFrontmatterEdgeSet = null;
    var __kgAllNodeEls = null;
    var __kgAllEdgeEls = null;
    var __kgAllGroupEls = null;

    function __kgEnsureFrontmatterSets(){
      if (__kgFrontmatterNodeSet && __kgFrontmatterEdgeSet) return;
      __kgFrontmatterNodeSet = Object.create(null);
      __kgFrontmatterEdgeSet = Object.create(null);
      try {
        var nids = (__kgFrontmatterVis && __kgFrontmatterVis.nodeIds) ? __kgFrontmatterVis.nodeIds : [];
        for (var i = 0; i < nids.length; i += 1) {
          var id = String(nids[i] || '').trim();
          if (id) __kgFrontmatterNodeSet[id] = 1;
        }
      } catch (e0) {
        void 0;
      }
      try {
        var eids = (__kgFrontmatterVis && __kgFrontmatterVis.edgeIds) ? __kgFrontmatterVis.edgeIds : [];
        for (var j = 0; j < eids.length; j += 1) {
          var eid = String(eids[j] || '').trim();
          if (eid) __kgFrontmatterEdgeSet[eid] = 1;
        }
      } catch (e1) {
        void 0;
      }
    }

    function __kgEnsureAllNodeEls(){
      if (__kgAllNodeEls) return __kgAllNodeEls;
      try {
        __kgAllNodeEls = root ? Array.prototype.slice.call(root.querySelectorAll('[data-node-id]')) : (svg ? Array.prototype.slice.call(svg.querySelectorAll('[data-node-id]')) : []);
      } catch (e) {
        __kgAllNodeEls = [];
      }
      return __kgAllNodeEls;
    }

    function __kgEnsureAllEdgeEls(){
      if (__kgAllEdgeEls) return __kgAllEdgeEls;
      try { __kgAllEdgeEls = svg ? Array.prototype.slice.call(svg.querySelectorAll('line[data-edge-id],path[data-edge-id],polyline[data-edge-id]')) : []; } catch (e) { __kgAllEdgeEls = []; }
      return __kgAllEdgeEls;
    }

    function __kgEnsureAllGroupEls(){
      if (__kgAllGroupEls) return __kgAllGroupEls;
      try { __kgAllGroupEls = svg ? Array.prototype.slice.call(svg.querySelectorAll('[data-kg-group-id]')) : []; } catch (e) { __kgAllGroupEls = []; }
      return __kgAllGroupEls;
    }

    function __kgApplyFrontmatterVisibility(){
      try {
        if (!svg) return;
        __kgEnsureFrontmatterSets();
        var showAll = !frontmatterEnabled;

        __kgAllNodeEls = null;
        var nodes = __kgEnsureAllNodeEls();
        for (var i = 0; i < nodes.length; i += 1) {
          var el = nodes[i];
          if (!el || !el.getAttribute || !el.style) continue;
          var nid = String(el.getAttribute('data-node-id') || '').trim();
          if (showAll) { el.style.display = ''; continue; }
          el.style.display = (__kgFrontmatterNodeSet && __kgFrontmatterNodeSet[nid] === 1) ? '' : 'none';
        }

        var edges = __kgEnsureAllEdgeEls();
        for (var j = 0; j < edges.length; j += 1) {
          var ee = edges[j];
          if (!ee || !ee.getAttribute || !ee.style) continue;
          var eid = String(ee.getAttribute('data-edge-id') || '').trim();
          if (showAll) { ee.style.display = ''; continue; }
          ee.style.display = (__kgFrontmatterEdgeSet && __kgFrontmatterEdgeSet[eid] === 1) ? '' : 'none';
        }

        var groups = __kgEnsureAllGroupEls();
        for (var k = 0; k < groups.length; k += 1) {
          var ge = groups[k];
          if (!ge || !ge.getAttribute || !ge.style) continue;
          if (showAll) { ge.style.display = ''; continue; }
          var gid = String(ge.getAttribute('data-kg-group-id') || '').trim();
          var members = (groupMembersById && gid && groupMembersById[gid]) ? groupMembersById[gid] : null;
          var any = false;
          if (members && members.length) {
            for (var mi = 0; mi < members.length; mi += 1) {
              var mid = String(members[mi] || '').trim();
              if (mid && __kgFrontmatterNodeSet && __kgFrontmatterNodeSet[mid] === 1) { any = true; break; }
            }
          }
          ge.style.display = any ? '' : 'none';
        }

        try { if (typeof scheduleOverlayUpdate === 'function') scheduleOverlayUpdate(); } catch (e2) { void 0; }
      } catch (e) {
        void 0;
      }
    }

    var richVisible = true;
    var frontmatterEnabled = false;
    var mode3dVisible = false;

    function setRichVisible(next){
      richVisible = !!next;
      try { if (overlay && overlay.style) overlay.style.display = richVisible ? '' : 'none'; } catch (e0) {}
      try { if (richBtn && richBtn.classList) richBtn.classList.toggle('kg-active', richVisible); } catch (e1) {}
    }

    function setFrontmatterEnabled(next){
      frontmatterEnabled = !!next;
      try { if (root && root.classList) root.classList.toggle('kg-frontmatter', frontmatterEnabled); } catch (e0) {}
      try { if (frontmatterBtn && frontmatterBtn.classList) frontmatterBtn.classList.toggle('kg-active', frontmatterEnabled); } catch (e1) {}
      try { __kgApplyFrontmatterVisibility(); } catch (e2) { void 0; }
    }

    function set3dVisible(next){
      mode3dVisible = !!next;
      try { if (cfg && mode3dVisible) cfg.preferWebgl3d = true; } catch (e0) {}
      if (mode3dVisible) {
        try { install3dCanvasRendererOnce(); } catch (e1) {}
        try { if (root && root.classList) root.classList.add('kg-canvas3d'); } catch (e2) {}
        try { if (schedule3dFrame) schedule3dFrame(); } catch (e3) {}
        try { if (scheduleWebgl3dFrame) scheduleWebgl3dFrame(); } catch (e4) {}
      } else {
        try { if (root && root.classList) root.classList.remove('kg-canvas3d'); } catch (e5) {}
      }
      try { if (mode3dBtn && mode3dBtn.classList) mode3dBtn.classList.toggle('kg-active', mode3dVisible); } catch (e6) {}
    }

    if (mediaBtn) mediaBtn.addEventListener('click', function(){ setMediaInteractive(!mediaInteractive); });
    try {
      window.addEventListener('keydown', function(e){
        try {
          if (!e) return;
          if (e.defaultPrevented) return;
          if (e.ctrlKey || e.metaKey || e.altKey) return;
          var k = String(e.key || '').toLowerCase();
          if (k !== 'i') return;
          var t = e.target && (e.target instanceof Element) ? e.target : null;
          if (t && t.closest && t.closest('input,textarea,select,[contenteditable="true"]')) return;
          setMediaInteractive(!mediaInteractive);
          try { e.preventDefault(); } catch (e0) {}
        } catch (err) {}
      }, { capture: true });
    } catch (err) {}
    if (richBtn) richBtn.addEventListener('click', function(){ setRichVisible(!richVisible); });
    if (frontmatterBtn) frontmatterBtn.addEventListener('click', function(){ setFrontmatterEnabled(!frontmatterEnabled); });
    if (mode3dBtn) mode3dBtn.addEventListener('click', function(){ set3dVisible(!mode3dVisible); });

    setRichVisible(true);
    setFrontmatterEnabled(__KG_INITIAL_FRONTMATTER_ENABLED__);
    try {
      var kgPanelMode = '';
      try { kgPanelMode = String((window && window.localStorage) ? (window.localStorage.getItem('__KG_RICH_MEDIA_PANEL_MODE_LS_KEY__') || '') : ''); } catch (e0) { kgPanelMode = ''; }
      setMediaInteractive(false);
    } catch (e8) {}
    try { set3dVisible(!!(root && root.classList && root.classList.contains('kg-canvas3d'))); } catch (e7) {}

    root.addEventListener('mousemove', function(e){
      try {
        if (!e || webgl3dEnabled) return;
        if (dragId != null || nodeDrag || edgeDrag || groupDrag || headerDrag) return;
        var t = (e.target && e.target instanceof Element) ? e.target : null;
        if (!t) { hideTip(); return; }
        if (t.closest && t.closest(UI_IGNORE_SELECTOR)) { hideTip(); return; }

        if (canvas3dEnabled && overlay && overlay.__kgWebglPosById && (t.id === 'kg-webgl' || (t.closest && t.closest('#kg-webgl')))) {
          try {
            var mp = overlay.__kgWebglPosById;
            var px = e.clientX;
            var py = e.clientY;
            var base = svgBase;
            var sx0 = (base && isFinite(base.sx) && base.sx > 0) ? base.sx : 1;
            var sy0 = (base && isFinite(base.sy) && base.sy > 0) ? base.sy : 1;
            var ox0 = (base && isFinite(base.ox)) ? base.ox : 0;
            var oy0 = (base && isFinite(base.oy)) ? base.oy : 0;
            var k0 = (state && isFinite(state.k) && state.k > 0) ? state.k : 1;
            var tx0 = (state && isFinite(state.x)) ? state.x : 0;
            var ty0 = (state && isFinite(state.y)) ? state.y : 0;

            var bestId = '';
            var bestD = 1e18;
            for (var id in mp) {
              var pr = mp[id];
              if (!pr) continue;
              var cx = (Number(pr.x) || 0) * k0 * sx0 + tx0 + ox0;
              var cy = (Number(pr.y) || 0) * k0 * sy0 + ty0 + oy0;
              var dx = px - cx;
              var dy = py - cy;
              var d2 = dx * dx + dy * dy;
              if (d2 < bestD) { bestD = d2; bestId = id; }
            }
            if (bestId && bestD < 18 * 18) {
              showTip({ key: 'n:' + bestId, x: e.clientX, y: e.clientY, html: buildNodeTipHtml(bestId) });
              return;
            }

            var bestEId = '';
            var bestED = 1e18;
            if (payload3d && payload3d.edges && payload3d.edges.length) {
              var edges = payload3d.edges;
              for (var ei = 0; ei < edges.length; ei += 1) {
                var ed = edges[ei];
                if (!ed) continue;
                var sid = String((ed.s || ed.source || '') || '');
                var tid = String((ed.t || ed.target || '') || '');
                if (!sid || !tid) continue;
                var a = mp[sid];
                var b = mp[tid];
                if (!a || !b) continue;
                var ax = (Number(a.x) || 0) * k0 * sx0 + tx0 + ox0;
                var ay = (Number(a.y) || 0) * k0 * sy0 + ty0 + oy0;
                var bx = (Number(b.x) || 0) * k0 * sx0 + tx0 + ox0;
                var by = (Number(b.y) || 0) * k0 * sy0 + ty0 + oy0;
                var vx = bx - ax;
                var vy = by - ay;
                var wx = px - ax;
                var wy = py - ay;
                var vv = vx * vx + vy * vy;
                var tt = vv > 1e-9 ? (wx * vx + wy * vy) / vv : 0;
                if (tt < 0) tt = 0;
                if (tt > 1) tt = 1;
                var cx0 = ax + vx * tt;
                var cy0 = ay + vy * tt;
                var dx0 = px - cx0;
                var dy0 = py - cy0;
                var d20 = dx0 * dx0 + dy0 * dy0;
                if (d20 < bestED) {
                  bestED = d20;
                  bestEId = String((ed && ed.id) || '');
                }
              }
            }
            if (bestEId && bestED < 14 * 14) {
              showTip({ key: 'e:' + bestEId, x: e.clientX, y: e.clientY, html: buildEdgeTipHtml(bestEId) });
              return;
            }
          } catch (e0) {}
          hideTip();
          return;
        }

        var n = t.closest ? t.closest('[data-node-id]') : null;
        if (n && n.getAttribute) {
          var nid = String(n.getAttribute('data-node-id') || '').trim();
          if (nid) { showTip({ key: 'n:' + nid, x: e.clientX, y: e.clientY, html: buildNodeTipHtml(nid) }); return; }
        }
        var ed = t.closest ? t.closest('[data-edge-id]') : null;
        if (ed && ed.getAttribute) {
          var eid = String(ed.getAttribute('data-edge-id') || '').trim();
          if (eid) { showTip({ key: 'e:' + eid, x: e.clientX, y: e.clientY, html: buildEdgeTipHtml(eid) }); return; }
        }
        hideTip();
      } catch (err) { hideTip(); }
    }, { passive: true });
    root.addEventListener('mouseleave', function(){ try { hideTip(); } catch (e) {} }, { passive: true });
    window.addEventListener('resize', function(){
      applyFixedViewport();
      refreshViewport();
      if (initialView) applyTransform();
      else fitToCenter();
    });
    try {
      if (window.visualViewport && !window.__kgVisualViewportSub) {
        window.__kgVisualViewportSub = true;
        window.visualViewport.addEventListener('resize', function(){
          applyFixedViewport();
          refreshViewport();
          if (initialView) applyTransform();
          else fitToCenter();
        });
        window.visualViewport.addEventListener('scroll', function(){ applyFixedViewport(); refreshViewport(); });
      }
    } catch (e) {}

    requestAnimationFrame(function(){
      applyFixedViewport();
      setMediaInteractive(false);
      setPanHeld(false);
      setPointerMode('select');
      refreshViewport();
      rebuildSvgNodeIndex();
      if (!overlayFollowAnimation) executeEmbeddedSvgScriptsOnce();
      install3dSvgAnimatorOnce();
      installDecorativeAnimations();
      if (initialView) {
        state.k = initialView.k;
        state.x = initialView.x;
        state.y = initialView.y;
        applyTransform();
      } else {
        fitToCenter();
      }
      updateOverlays();
    });
  })();
`],At=()=>Bt.join(""),H=(e,t,a)=>!t||!e.includes(t)?e:e.split(t).join(a),j=(e,t,a,r)=>{if(!t)return e;const i=a,d=e.indexOf(t);return d<0?e:e.slice(0,d)+i+e.slice(d+t.length)},Nt=e=>{const t=String(e||"");if(!t)return"";const a=t.replace(/`/g,"\\`").replace(/\$\{/g,"\\${");try{return Function("return `"+a+"`")()}catch{return t}};function Ft(e){const t=(()=>{const i=String(e.markdownBlocksJson||"").trim();if(!i)return"[]";try{const d=JSON.parse(i);return Array.isArray(d)?i:"[]"}catch{return"[]"}})(),a=Nt(At());if(!a)return"";let r=a;return r=H(r,`var UI_IGNORE_SELECTOR = '[data-kg-canvas-wheel-ignore="true"], [data-kg-canvas-pointer-ignore="true"]';`,"var UI_IGNORE_SELECTOR = '#kg-hud, #kg-hud *';"),r=H(r,"var pointerMode = 'select';","var pointerMode = 'pan';"),r=H(r,`var src = String(edgeEl.getAttribute('data-source-id') || edgeEl.getAttribute('data-source') || '').trim();
      var tgt = String(edgeEl.getAttribute('data-target-id') || edgeEl.getAttribute('data-target') || '').trim();`,`var src = __kgResolveNodeId(String(edgeEl.getAttribute('data-source-id') || edgeEl.getAttribute('data-source') || '').trim());
      var tgt = __kgResolveNodeId(String(edgeEl.getAttribute('data-target-id') || edgeEl.getAttribute('data-target') || '').trim());`),r=H(r,"var src = String(ee.getAttribute('data-source-id') || ee.getAttribute('data-source') || '').trim();","var src = __kgResolveNodeId(String(ee.getAttribute('data-source-id') || ee.getAttribute('data-source') || '').trim());"),r=H(r,"var tgt = String(ee.getAttribute('data-target-id') || ee.getAttribute('data-target') || '').trim();","var tgt = __kgResolveNodeId(String(ee.getAttribute('data-target-id') || ee.getAttribute('data-target') || '').trim());"),r=H(r,"__KG_CFG__",e.interactionCfgJson),r=H(r,"__KG_MEDIA_NODES__",e.mediaNodesJson),r=H(r,"__KG_MD_BLOCKS__",t),r=H(r,"__KG_NODE_META__",e.nodeLabelByIdJson),r=H(r,"__KG_EDGE_META__",e.edgeMetaByIdJson),r=H(r,"__KG_NODE_POS__",e.nodePosByIdJson),r=H(r,"__KG_GROUP_MEMBERS__",e.groupMembersByIdJson),r=H(r,"__KG_FRONTMATTER_VIS__",e.frontmatterVisibilityJson),r=H(r,"__KG_INITIAL_FRONTMATTER_ENABLED__",e.initialFrontmatterEnabled===!0?"true":"false"),r=H(r,"__KG_RICH_MEDIA_PANEL_MODE_LS_KEY__",JSON.stringify(Ee.renderRichMediaPanelMode)),r=H(r,"__KG_DENSITY__",JSON.stringify(e.density)),r=H(r,"__KG_WIDTH_RATIO_DEFAULT__",String(e.widthRatioDefault)),r=H(r,"__KG_WIDTH_RATIO_COMPACT__",String(e.widthRatioCompact)),r=H(r,"__KG_WIDTH_MIN_DEFAULT__",String(e.widthMinDefault)),r=H(r,"__KG_WIDTH_MIN_COMPACT__",String(e.widthMinCompact)),r=H(r,"__KG_WIDTH_MAX_DEFAULT__",String(e.widthMaxDefault)),r=H(r,"__KG_WIDTH_MAX_COMPACT__",String(e.widthMaxCompact)),r=j(r,"var tip = document.getElementById('kg-tooltip');",`var tip = document.getElementById('kg-tooltip');

    var __kgNodeIdBySuffix = Object.create(null);
    var __kgNodeIdSet = Object.create(null);
    var __kgNodeIdMapReady = false;
    function __kgEnsureNodeIdMap(){
      if (__kgNodeIdMapReady) return;
      __kgNodeIdMapReady = true;
      try {
        if (!nodePosById) return;
        for (var __kgNid in nodePosById) {
          if (!Object.prototype.hasOwnProperty.call(nodePosById, __kgNid)) continue;
          var __kgId = String(__kgNid || '').trim();
          if (!__kgId) continue;
          __kgNodeIdSet[__kgId] = 1;
          var __kgSuffix = (__kgId.split('::').pop() || '').trim();
          if (__kgSuffix && !__kgNodeIdBySuffix[__kgSuffix]) __kgNodeIdBySuffix[__kgSuffix] = __kgId;
        }
      } catch (e0) {
        void 0;
      }
    }
    function __kgResolveNodeId(raw){
      try {
        __kgEnsureNodeIdMap();
        var id = String(raw || '').trim();
        if (!id) return '';
        if (__kgNodeIdSet[id] === 1) return id;
        var suffix = (id.split('::').pop() || '').trim();
        if (suffix && __kgNodeIdBySuffix[suffix]) return String(__kgNodeIdBySuffix[suffix] || '').trim();
        return id;
      } catch (e1) {
        return String(raw || '').trim();
      }
    }`),r=j(r,`if (fitBtn) fitBtn.addEventListener('click', function(){ fitToCenter(); });
    if (resetBtn) resetBtn.addEventListener('click', function(){ resetView(); });
    if (mediaBtn) mediaBtn.addEventListener('click', function(){ setMediaInteractive(!mediaInteractive); });`,`if (fitBtn) fitBtn.addEventListener('click', function(){ fitToCenter(); });
    if (resetBtn) resetBtn.addEventListener('click', function(){ resetView(); });
    if (mediaBtn) mediaBtn.addEventListener('click', function(){ setMediaInteractive(!mediaInteractive); });`),r=j(r,`function applyMediaPointerEvents(){
      var pe = (mediaInteractive && pointerMode !== 'pan' && !panHeld && !headerDrag) ? 'auto' : 'none';
      try {
        if (pe !== lastMediaPointerEvents) {
          lastMediaPointerEvents = pe;
          document.documentElement.style.setProperty('--kg-media-pointer-events', pe);
        }
      } catch (err) {}
      try {
        if (mediaBtn && mediaBtn.classList) {
          if (lastMediaBtnActive !== mediaInteractive) {
            lastMediaBtnActive = mediaInteractive;
            if (mediaInteractive) mediaBtn.classList.add('kg-active');
            else mediaBtn.classList.remove('kg-active');
          }
        }
      } catch (err) {}
    }`,`function applyMediaPointerEvents(){
      var pe = (mediaInteractive && pointerMode !== 'pan' && !panHeld && !headerDrag) ? 'auto' : 'none';
      try {
        if (pe !== lastMediaPointerEvents) {
          lastMediaPointerEvents = pe;
          document.documentElement.style.setProperty('--kg-media-pointer-events', pe);
        }
      } catch (err) {}
      try {
        if (mediaBtn && mediaBtn.classList) {
          if (lastMediaBtnActive !== mediaInteractive) {
            lastMediaBtnActive = mediaInteractive;
            if (mediaInteractive) mediaBtn.classList.add('kg-active');
            else mediaBtn.classList.remove('kg-active');
          }
        }
      } catch (err) {}
      try {
        if (overlay && overlay.__kgMediaById && mediaNodes && mediaNodes.length) {
          for (var i = 0; i < mediaNodes.length; i += 1) {
            var n = mediaNodes[i];
            if (!n) continue;
            var id = String(n.id || '');
            if (!id) continue;
            var holder = overlay.__kgMediaById[id];
            if (!holder || !holder.querySelectorAll) continue;
            var interactive0 = !!n.interactive;
            var perPe = interactive0 ? pe : 'none';
            var els = holder.querySelectorAll('iframe,img,video,audio,source');
            for (var j = 0; j < els.length; j += 1) {
              var el = els[j];
              if (!el || !el.style) continue;
              try { el.style.pointerEvents = perPe; } catch (e0) {}
            }
          }
        }
      } catch (err) {}
    }`),r=j(r,"var mediaInteractive = false;","var mediaInteractive = true;"),r=j(r,`overlay.__kgMediaById[id] = panel;
      }
    }

    var overlayRaf = null;`,`overlay.__kgMediaById[id] = panel;
      }
    }

    function ensureMarkdownDom(){
      if (!overlay) return;
      if (!markdownBlocks || markdownBlocks.length === 0) return;
      if (overlay.__kgMdBuilt) return;
      overlay.__kgMdBuilt = true;
      overlay.__kgMdById = {};

      try {
        var existing = overlay.querySelectorAll ? overlay.querySelectorAll('[data-md-id]') : null;
        if (existing && existing.length) {
          for (var ei = 0; ei < existing.length; ei += 1) {
            var ex = existing[ei];
            if (!ex || !ex.getAttribute) continue;
            var xid = __kgResolveNodeId(String(ex.getAttribute('data-md-id') || '').trim());
            var xanchor = __kgResolveNodeId(String(ex.getAttribute('data-kg-anchor-node-id') || '').trim());
            if (!xid && !xanchor) continue;
            try {
              var curClass = String(ex.className || '');
              if (curClass.indexOf('kg-md') < 0) ex.className = ('kg-md ' + curClass).trim();
            } catch (e0) {
              void 0;
            }
            if (xid) overlay.__kgMdById[xid] = ex;
            if (xanchor) overlay.__kgMdById[xanchor] = ex;
          }
        }
      } catch (e0) {
        void 0;
      }

      for (var i = 0; i < markdownBlocks.length; i += 1) {
        var b = markdownBlocks[i];
        if (!b) continue;
        var id = String(b.id || '');
        if (!id) continue;
        var anchorId0 = __kgResolveNodeId(String((b && (b.anchorNodeId || b.anchorId)) || '').trim());
        if (overlay.__kgMdById[id] || (anchorId0 && overlay.__kgMdById[anchorId0])) continue;
        try {
          var pv = b.preview || null;
          var kind = pv && pv.kind ? String(pv.kind) : '';
          if (kind === 'html') {
            var raw = pv && pv.html && pv.html.raw ? String(pv.html.raw || '') : '';
            if (/<\\s*iframe\\b/i.test(raw)) continue;
          }
        } catch (e0) {}

        var el = document.createElement('section');
        el.className = 'kg-md';
        el.setAttribute('data-md-id', id);
        if (anchorId0) {
          try { el.setAttribute('data-kg-anchor-node-id', anchorId0); } catch (e0a) {}
        }

        var header = document.createElement('header');
        header.className = 'kg-mdHeader';
        var title = document.createElement('h3');
        title.className = 'kg-mdTitle';
        title.textContent = String(b.title || b.id || 'Block');
        header.appendChild(title);

        var body = document.createElement('section');
        body.className = 'kg-mdBody';

        try {
          var preview = b.preview || null;
          var k = preview && preview.kind ? String(preview.kind) : '';
          if (k === 'table' && preview.table) {
            var tbl = document.createElement('table');
            tbl.className = 'kg-mdTable';
            var cols = Array.isArray(preview.table.columns) ? preview.table.columns : [];
            var rows = Array.isArray(preview.table.rows) ? preview.table.rows : [];
            if (cols.length) {
              var thead = document.createElement('thead');
              var trh = document.createElement('tr');
              for (var ci = 0; ci < cols.length; ci += 1) {
                var th = document.createElement('th');
                th.textContent = String(cols[ci] || '');
                trh.appendChild(th);
              }
              thead.appendChild(trh);
              tbl.appendChild(thead);
            }
            var tbody = document.createElement('tbody');
            var maxRows = Math.max(1, Math.min(12, rows.length));
            for (var ri = 0; ri < maxRows; ri += 1) {
              var tr = document.createElement('tr');
              var row = Array.isArray(rows[ri]) ? rows[ri] : [];
              var cells = cols.length ? cols.length : row.length;
              for (var cj = 0; cj < cells; cj += 1) {
                var td = document.createElement('td');
                td.textContent = String(row[cj] != null ? row[cj] : '');
                tr.appendChild(td);
              }
              tbody.appendChild(tr);
            }
            tbl.appendChild(tbody);
            body.appendChild(tbl);
          } else if (k === 'code' && preview.code) {
            var pre = document.createElement('pre');
            pre.className = 'kg-mdCode';
            var lines = Array.isArray(preview.code.lines) ? preview.code.lines : [];
            pre.textContent = String(lines.slice(0, 18).join('\\n'));
            body.appendChild(pre);
          } else if (k === 'blockquote' && preview.blockquote) {
            var quote = document.createElement('blockquote');
            quote.className = 'kg-mdQuote';
            var qLines = Array.isArray(preview.blockquote.lines) ? preview.blockquote.lines : [];
            quote.textContent = String(qLines.slice(0, 10).join('\\n'));
            body.appendChild(quote);
          } else if (k === 'callout' && preview.callout) {
            var callout = document.createElement('aside');
            callout.className = 'kg-mdCallout';
            var cTitle = (preview.callout.title ? String(preview.callout.title || '').trim() : '');
            var calloutTitle = document.createElement('h4');
            calloutTitle.className = 'kg-mdCalloutTitle';
            calloutTitle.textContent = cTitle || String(b.title || 'Callout');
            callout.appendChild(calloutTitle);
            body.appendChild(callout);
          } else {
            var paragraph = document.createElement('p');
            paragraph.className = 'kg-mdText';
            paragraph.textContent = String(b.summary || b.title || '');
            body.appendChild(paragraph);
          }
        } catch (e4) {
          void 0;
        }

        el.appendChild(header);
        el.appendChild(body);
        overlay.appendChild(el);
        overlay.__kgMdById[id] = el;
        if (anchorId0) overlay.__kgMdById[anchorId0] = el;
      }
    }

    var overlayRaf = null;`),r=j(r,`ensureMediaDom();
      if (!mediaNodes || mediaNodes.length === 0) return;`,`ensureMediaDom();
      ensureMarkdownDom();
      try {
        if ((!mediaNodes || mediaNodes.length === 0) && overlay && overlay.__kgMediaById) {
          mediaNodes = mediaNodes || [];
          for (var mid in overlay.__kgMediaById) {
            if (!Object.prototype.hasOwnProperty.call(overlay.__kgMediaById, mid)) continue;
            var mid0 = __kgResolveNodeId(String(mid || '').trim());
            if (!mid0) continue;
            var seen0 = false;
            for (var mi0 = 0; mi0 < mediaNodes.length; mi0 += 1) {
              var mn0 = mediaNodes[mi0];
              if (mn0 && String(mn0.id || '').trim() === mid0) { seen0 = true; break; }
            }
            if (!seen0) mediaNodes.push({ id: mid0, title: mid0, url: '', openUrl: '', interactive: true, kind: 'iframe' });
          }
        }
      } catch (eHyd0) { void 0; }
      if ((!mediaNodes || mediaNodes.length === 0) && (!markdownBlocks || markdownBlocks.length === 0)) return;`),r=j(r,"if (!markdownBlocks || markdownBlocks.length === 0) return;",`if (!markdownBlocks || markdownBlocks.length === 0) return;
      try {
        var hasOverlayMd = false;
        try {
          hasOverlayMd = !!(overlay && overlay.querySelector && overlay.querySelector('[data-md-id]'));
        } catch (e0) {
          hasOverlayMd = false;
        }
        if (!hasOverlayMd && typeof svg !== 'undefined' && svg && svg.querySelector && svg.querySelector('[data-kg-layer=\\"markdown-design-blocks\\"] foreignObject')) return;
      } catch (eSkip) {}`),r=j(r,`lastBoxById[id] = { left: left, top: top, w: panelW, h: panelH, display: 'block' };
        }
      }
    }

    function onWheel(e){`,`lastBoxById[id] = { left: left, top: top, w: panelW, h: panelH, display: 'block' };
        }
      }

      try {
        if (markdownBlocks && markdownBlocks.length) {
          var mdById = overlay.__kgMdById || {};
          var lastMdBoxById = overlay.__kgMdBoxById || (overlay.__kgMdBoxById = {});
          var baseSx0 = (svgBase && isFinite(svgBase.sx) && svgBase.sx > 0) ? svgBase.sx : 1;
          var baseSy0 = (svgBase && isFinite(svgBase.sy) && svgBase.sy > 0) ? svgBase.sy : 1;
          var ox0 = (svgBase && isFinite(svgBase.ox)) ? svgBase.ox : 0;
          var oy0 = (svgBase && isFinite(svgBase.oy)) ? svgBase.oy : 0;
          for (var mi = 0; mi < markdownBlocks.length; mi += 1) {
            var b = markdownBlocks[mi];
            if (!b) continue;
            var bid = String(b.id || '');
            var anchorId = String((b && (b.anchorNodeId || b.anchorId)) || '').trim();
            if (!bid && !anchorId) continue;
            var el = mdById[bid] || mdById[anchorId] || null;
            if (!el) continue;
            var xw = Number(b.x);
            var yw = Number(b.y);
            var ww = Number(b.w);
            var hh = Number(b.h);
            if (!isFinite(xw) || !isFinite(yw) || !isFinite(ww) || !isFinite(hh) || !(ww > 0) || !(hh > 0)) continue;
            var left = xw * state.k * baseSx0 + state.x + ox0;
            var top = yw * state.k * baseSy0 + state.y + oy0;
            var sw = ww * state.k * baseSx0;
            var sh = hh * state.k * baseSy0;
            var il = Math.round(left);
            var it = Math.round(top);
            var iw = Math.max(1, Math.round(sw));
            var ih = Math.max(1, Math.round(sh));
            var key0 = anchorId || bid;
            var prev = lastMdBoxById[key0] || null;
            if (!prev || prev.left !== il || prev.top !== it || prev.w !== iw || prev.h !== ih || prev.display !== 'block') {
              applyPanelBox(el, { left: il, top: it, w: iw, h: ih, display: 'block', zIndex: 1 });
              var boxVal = { left: il, top: it, w: iw, h: ih, display: 'block' };
              if (bid) lastMdBoxById[bid] = boxVal;
              if (anchorId) lastMdBoxById[anchorId] = boxVal;
              try { scheduleEdgeGeometryUpdateForNode(anchorId || bid); } catch (e0) {}
            }
          }
        }
      } catch (mdErr) {}

      try {
        if (svg && overlay && nodePosById) {
          var baseSx1 = (svgBase && isFinite(svgBase.sx) && svgBase.sx > 0) ? svgBase.sx : 1;
          var baseSy1 = (svgBase && isFinite(svgBase.sy) && svgBase.sy > 0) ? svgBase.sy : 1;
          var ox1 = (svgBase && isFinite(svgBase.ox)) ? svgBase.ox : 0;
          var oy1 = (svgBase && isFinite(svgBase.oy)) ? svgBase.oy : 0;
          var density1 = __KG_DENSITY__;
          var headerH = density1 === 'compact' ? 22 : 28;
          var offMap = svg.__kgNodeOffsetById || (svg.__kgNodeOffsetById = {});

          var mediaBoxById = overlay.__kgMediaBoxById || {};
          if (mediaNodes && mediaNodes.length) {
            for (var mi2 = 0; mi2 < mediaNodes.length; mi2 += 1) {
              var n0 = mediaNodes[mi2];
              var id0 = String(n0 && n0.id ? n0.id : '');
              if (!id0) continue;
              var box0 = mediaBoxById[id0] || null;
              var p0 = nodePosById && nodePosById[id0] ? nodePosById[id0] : null;
              if (!p0 || !box0) continue;
              var x0 = Number(p0.x);
              var y0 = Number(p0.y);
              if (!isFinite(x0) || !isFinite(y0)) continue;
              var asx = x0 * state.k * baseSx1 + state.x + ox1;
              var asy = y0 * state.k * baseSy1 + state.y + oy1;
              var dx0 = (Number(box0.left) || 0) + (Number(box0.w) || 0) * 0.5 - asx;
              var dy0 = (Number(box0.top) || 0) + Math.min(headerH, Number(box0.h) || 0) * 0.5 - asy;
              var prev0 = offMap[id0] || null;
              if (!prev0 || Math.abs((Number(prev0.x) || 0) - dx0) > 0.5 || Math.abs((Number(prev0.y) || 0) - dy0) > 0.5) {
                offMap[id0] = { x: dx0, y: dy0 };
                try { scheduleEdgeGeometryUpdateForNode(id0); } catch (e0) {}
              }
            }
          }

          var mdBoxById = overlay.__kgMdBoxById || {};
          var hasMdBlocks0 = !!(markdownBlocks && markdownBlocks.length);
          if (hasMdBlocks0) {
            for (var mi3 = 0; mi3 < markdownBlocks.length; mi3 += 1) {
              var b0 = markdownBlocks[mi3];
              if (!b0) continue;
              var bid0 = String(b0.id || '');
              var anchorId0 = String((b0 && (b0.anchorNodeId || b0.anchorId)) || '').trim();
              var key1 = anchorId0 || bid0;
              if (!key1) continue;
              var box1 = mdBoxById[key1] || mdBoxById[bid0] || null;
              var p1 = nodePosById && nodePosById[key1] ? nodePosById[key1] : null;
              if (!p1 || !box1) continue;
              var x1 = Number(p1.x);
              var y1 = Number(p1.y);
              if (!isFinite(x1) || !isFinite(y1)) continue;
              var bsx = x1 * state.k * baseSx1 + state.x + ox1;
              var bsy = y1 * state.k * baseSy1 + state.y + oy1;
              var dx1 = (Number(box1.left) || 0) + (Number(box1.w) || 0) * 0.5 - bsx;
              var dy1 = (Number(box1.top) || 0) + (Number(box1.h) || 0) * 0.5 - bsy;
              var prev1 = offMap[key1] || null;
              if (!prev1 || Math.abs((Number(prev1.x) || 0) - dx1) > 0.5 || Math.abs((Number(prev1.y) || 0) - dy1) > 0.5) {
                offMap[key1] = { x: dx1, y: dy1 };
                try { scheduleEdgeGeometryUpdateForNode(key1); } catch (e1) {}
              }
            }
          }
          if (!hasMdBlocks0 && mdBoxById) {
            for (var mid0 in mdBoxById) {
              if (!Object.prototype.hasOwnProperty.call(mdBoxById, mid0)) continue;
              var key2 = String(mid0 || '').trim();
              if (!key2) continue;
              var p2 = nodePosById && nodePosById[key2] ? nodePosById[key2] : null;
              var box2 = mdBoxById[key2] || null;
              if (!p2 || !box2) continue;
              var x2 = Number(p2.x);
              var y2 = Number(p2.y);
              if (!isFinite(x2) || !isFinite(y2)) continue;
              var csx = x2 * state.k * baseSx1 + state.x + ox1;
              var csy = y2 * state.k * baseSy1 + state.y + oy1;
              var dx2 = (Number(box2.left) || 0) + (Number(box2.w) || 0) * 0.5 - csx;
              var dy2 = (Number(box2.top) || 0) + (Number(box2.h) || 0) * 0.5 - csy;
              var prev2 = offMap[key2] || null;
              if (!prev2 || Math.abs((Number(prev2.x) || 0) - dx2) > 0.5 || Math.abs((Number(prev2.y) || 0) - dy2) > 0.5) {
                offMap[key2] = { x: dx2, y: dy2 };
                try { scheduleEdgeGeometryUpdateForNode(key2); } catch (e2) {}
              }
            }
          }
        }
      } catch (errOff) {}
    }

    function onWheel(e){`),r=j(r,`} else {
          var iframe = document.createElement('iframe');
          iframe.loading = 'eager';
          iframe.referrerPolicy = 'no-referrer';
          iframe.src = url;
          body.appendChild(iframe);
        }`,`} else if (kind === 'audio') {
          var audio = document.createElement('audio');
          audio.controls = true;
          audio.preload = 'metadata';
          audio.src = url;
          body.appendChild(audio);
        } else {
          var useSnapshot = false;
          try {
            var srcDoc0 = String((n && (n.srcDoc || n.srcdoc)) || '');
            if (srcDoc0 && String(srcDoc0).trim()) {
              useSnapshot = false;
            } else {
              var direct = false;
              try { direct = typeof kgIsDirectIframeEmbedUrl === 'function' ? kgIsDirectIframeEmbedUrl(url) : false; } catch (e0) { direct = false; }
              var forceSnap = false;
              try { forceSnap = (!direct) && (typeof kgShouldForceSnapshotUrl === 'function' ? kgShouldForceSnapshotUrl(url) : false); } catch (e1) { forceSnap = false; }
              useSnapshot = (!mediaInteractive) || forceSnap;
            }
          } catch (e0) {
            useSnapshot = (!mediaInteractive);
          }

          if (useSnapshot) {
            try {
              var snapUrl = '';
              try { snapUrl = String((typeof openUrl !== 'undefined' && openUrl) ? openUrl : url); } catch (e1) { snapUrl = String(url || ''); }
              var snap = kgCreateWebpageSnapshotPreview({ url: snapUrl, title: String(n && n.title ? n.title : '') });
              if (snap) body.appendChild(snap);
            } catch (e2) {
              void 0;
            }
          } else {
            var iframe = document.createElement('iframe');
            iframe.loading = 'eager';
            iframe.referrerPolicy = 'no-referrer';
            iframe.src = url;
            body.appendChild(iframe);
          }
        }`),r=j(r,"function fitToCenter(){",`function getContentCentroid(){
      try {
        if (nodePosById) {
          var sx = 0;
          var sy = 0;
          var c = 0;
          for (var id in nodePosById) {
            var p = nodePosById[id];
            if (!p) continue;
            var x = Number(p.x);
            var y = Number(p.y);
            if (!isFinite(x) || !isFinite(y)) continue;
            sx += x;
            sy += y;
            c += 1;
          }
          if (c > 0) return { x: sx / c, y: sy / c };
        }
      } catch (e) {}
      return null;
    }

    function fitToCenter(){`),r=j(r,`var cx = bb.x + bb.width / 2;
      var cy = bb.y + bb.height / 2;`,`var c = getContentCentroid();
      var cx = (c && isFinite(c.x)) ? c.x : (bb.x + bb.width / 2);
      var cy = (c && isFinite(c.y)) ? c.y : (bb.y + bb.height / 2);`),r=j(r,"if (t && t.closest && (t.closest('[data-node-id]') || t.closest('[data-edge-id]') || t.closest('[data-kg-group-id]') || t.closest('.kg-media'))) return;","if (t && t.closest && t.closest('[data-edge-id]')) return;"),r=j(r,`map[nodeId] = { x: ox + dx, y: oy + dy };
          return;`,`map[nodeId] = { x: ox + dx, y: oy + dy };
          try { scheduleEdgeGeometryUpdateForNode(nodeId); } catch (e0) {}
          return;`),r=j(r,"map[id] = { x: ox + dx, y: oy + dy };",`map[id] = { x: ox + dx, y: oy + dy };
              try { scheduleEdgeGeometryUpdateForNode(id); } catch (e0) {}`),r=j(r,"var allEdgeEls = svg ? svg.querySelectorAll('line[data-edge-id],path[data-edge-id],polyline[data-edge-id]') : null;",`try {
        if (svg && edgeMetaById && nodePosById) {
          var existingEdges = svg.querySelectorAll('line[data-edge-id],path[data-edge-id],polyline[data-edge-id]');
          if (!existingEdges || existingEdges.length === 0) {
            var linksRoot = svg.querySelector('[data-kg-layer="links"]');
            if (linksRoot) {
              for (var eid2 in edgeMetaById) {
                if (!Object.prototype.hasOwnProperty.call(edgeMetaById, eid2)) continue;
                var meta2 = edgeMetaById[eid2];
                if (!meta2) continue;
                var s2 = String(meta2.s || '').trim();
                var t2 = String(meta2.t || '').trim();
                if (!s2 || !t2) continue;
                var ps2 = nodePosById && nodePosById[s2] ? nodePosById[s2] : null;
                var pt2 = nodePosById && nodePosById[t2] ? nodePosById[t2] : null;
                if (!ps2 || !pt2) continue;
                var sx2 = Number(ps2.x);
                var sy2 = Number(ps2.y);
                var tx2 = Number(pt2.x);
                var ty2 = Number(pt2.y);
                if (!isFinite(sx2) || !isFinite(sy2) || !isFinite(tx2) || !isFinite(ty2)) continue;
                var line2 = svg.ownerDocument && svg.ownerDocument.createElementNS
                  ? svg.ownerDocument.createElementNS(svg.namespaceURI || 'http://www.w3.org/2000/svg', 'line')
                  : null;
                if (!line2) continue;
                line2.setAttribute('data-edge-id', eid2);
                line2.setAttribute('data-source-id', s2);
                line2.setAttribute('data-target-id', t2);
                line2.setAttribute('x1', String(sx2));
                line2.setAttribute('y1', String(sy2));
                line2.setAttribute('x2', String(tx2));
                line2.setAttribute('y2', String(ty2));
                line2.setAttribute('stroke', 'var(--kg-canvas-edge-stroke)');
                line2.setAttribute('stroke-opacity', '1');
                line2.setAttribute('stroke-width', '2');
                line2.setAttribute('stroke-linecap', 'round');
                line2.setAttribute('fill', 'none');
                try { line2.style.pointerEvents = 'none'; } catch (e0) {}
                linksRoot.appendChild(line2);
                try {
                  if (typeof edgeLineByEdgeId === 'object' && edgeLineByEdgeId) {
                    if (!edgeLineByEdgeId[eid2]) edgeLineByEdgeId[eid2] = line2;
                  }
                } catch (e1) {}
                try {
                  if (typeof edgeRefsByNodeId === 'object' && edgeRefsByNodeId) {
                    var r0 = edgeRefsByNodeId[s2] || (edgeRefsByNodeId[s2] = []);
                    r0.push({ el: line2, end: 's' });
                    var r1 = edgeRefsByNodeId[t2] || (edgeRefsByNodeId[t2] = []);
                    r1.push({ el: line2, end: 't' });
                  }
                } catch (e2) {}
              }
            }
          }
        }
      } catch (e) {}
      var allEdgeEls = svg ? svg.querySelectorAll('line[data-edge-id],path[data-edge-id],polyline[data-edge-id]') : null;`),r=H(r,"__KG_PROXY_ORIGIN__",JSON.stringify(String(e.proxyOrigin||""))),r=H(r,"__KG_ALLOW_RUNTIME_NETWORK__",e.allowRuntimeNetwork===!0?"true":"false"),r}function q(e){const t=Number(e);return Number.isFinite(t)?t:NaN}function _t(e){const t=String(e||"").trim();if(!t)return null;const a=t.match(/translate\(\s*([-0-9.]+)\s*(?:[, ]\s*([-0-9.]+)\s*)?\)/i);if(a){const i=Number(a[1]),d=Number(a[2]);if(Number.isFinite(i)&&Number.isFinite(d))return{x:i,y:d};if(Number.isFinite(i))return{x:i,y:0}}const r=t.match(/matrix\(\s*([-0-9.]+)\s*[ ,]\s*([-0-9.]+)\s*[ ,]\s*([-0-9.]+)\s*[ ,]\s*([-0-9.]+)\s*[ ,]\s*([-0-9.]+)\s*[ ,]\s*([-0-9.]+)\s*\)/i);if(r){const i=Number(r[5]),d=Number(r[6]);if(Number.isFinite(i)&&Number.isFinite(d))return{x:i,y:d}}return null}function Dt(e){if(!e||!e.getAttribute)return null;const t=String(e.tagName||"").toLowerCase();if(t==="circle"){const r=q(e.getAttribute("cx")),i=q(e.getAttribute("cy"));return Number.isFinite(r)&&Number.isFinite(i)?{x:r,y:i}:null}if(t==="rect"){const r=q(e.getAttribute("x")),i=q(e.getAttribute("y")),d=q(e.getAttribute("width")),n=q(e.getAttribute("height"));return Number.isFinite(r)&&Number.isFinite(i)&&Number.isFinite(d)&&Number.isFinite(n)&&d>0&&n>0?{x:r+d/2,y:i+n/2}:null}const a=_t(String(e.getAttribute("transform")||""));if(t==="g"&&e.querySelector){let r=null;try{const i=e.querySelector('circle[data-role="node-circle"], circle[cx][cy]');if(i){const d=q(i.getAttribute("cx")),n=q(i.getAttribute("cy"));Number.isFinite(d)&&Number.isFinite(n)&&(r={x:d,y:n})}}catch{}if(!r)try{const i=e.querySelector("rect[x][y][width][height]");if(i){const d=q(i.getAttribute("x")),n=q(i.getAttribute("y")),o=q(i.getAttribute("width")),s=q(i.getAttribute("height"));Number.isFinite(d)&&Number.isFinite(n)&&Number.isFinite(o)&&Number.isFinite(s)&&o>0&&s>0&&(r={x:d+o/2,y:n+s/2})}}catch{}return r&&a?{x:r.x+a.x,y:r.y+a.y}:r||a||null}return a||null}function Ct(e){try{return!!(e.hasAttribute("data-port-key")||e.hasAttribute("data-port-dir"))}catch{return!1}}function ge(e){const t=String(e||"").trim();if(!t)return{};const a=t.replace(/^<\?xml[^>]*>\s*/i,"");try{const i=new DOMParser().parseFromString(a,"image/svg+xml").querySelector("svg");if(!i)return{};const d={},n=i.querySelectorAll("[data-node-id]");for(let s=0;s<n.length;s+=1){const l=n[s];if(Ct(l))continue;const v=String(l.getAttribute("data-node-id")||"").trim();if(!v||d[v])continue;const g=Dt(l);if(g){d[v]=g;continue}}const o=i.querySelectorAll("line[data-source-id][data-target-id]");for(let s=0;s<o.length;s+=1){const l=o[s],v=String(l.getAttribute("data-source-id")||"").trim(),g=String(l.getAttribute("data-target-id")||"").trim();if(!v&&!g)continue;const c=q(l.getAttribute("x1")),u=q(l.getAttribute("y1")),x=q(l.getAttribute("x2")),F=q(l.getAttribute("y2"));v&&!d[v]&&Number.isFinite(c)&&Number.isFinite(u)&&(d[v]={x:c,y:u}),g&&!d[g]&&Number.isFinite(x)&&Number.isFinite(F)&&(d[g]={x,y:F})}return d}catch{return{}}}const oe=e=>typeof e=="number"&&Number.isFinite(e);function Pt(e){var a,r,i;const t=String(e.svgMarkup||"").trim();if(!t||typeof DOMParser>"u"||typeof XMLSerializer>"u")return t;try{const d=new DOMParser().parseFromString(t.replace(/^<\?xml[^>]*>\s*/i,""),"image/svg+xml"),n=d.querySelector("svg");if(!n)return t;const o=n.querySelector('[data-kg-layer="links"]');if(!o||o.querySelector("line,path,polyline"))return t;const s=Array.isArray((a=e.graphData)==null?void 0:a.nodes)?e.graphData.nodes:[],l=Array.isArray((r=e.graphData)==null?void 0:r.edges)?e.graphData.edges:[];if(l.length===0)return t;const v=new Set,g={};for(let A=0;A<s.length;A+=1){const E=String(((i=s[A])==null?void 0:i.id)||"").trim();if(!E)continue;v.add(E);const X=E.split("::").pop()||"";X&&!g[X]&&(g[X]=E)}const c=A=>{const E=String(A||"").trim();if(!E)return"";if(v.has(E))return E;const X=E.split("::").pop()||"";return X&&g[X]?g[X]:E},x={...ge(t),...e.nodePosById||{}},F=n.namespaceURI||"http://www.w3.org/2000/svg";for(let A=0;A<l.length;A+=1){const E=l[A],X=String((E==null?void 0:E.id)||"").trim()||`e${A}`,z=String((E==null?void 0:E.sourceId)||(E==null?void 0:E.source)||"").trim(),W=String((E==null?void 0:E.targetId)||(E==null?void 0:E.target)||"").trim(),P=c(z),O=c(W);if(!X||!P||!O)continue;const U=x[P],K=x[O];if(!U||!K||!oe(U.x)||!oe(U.y)||!oe(K.x)||!oe(K.y))continue;const L=d.createElementNS(F,"line");L.setAttribute("data-edge-id",X),L.setAttribute("data-source-id",P),L.setAttribute("data-target-id",O),L.setAttribute("x1",String(U.x)),L.setAttribute("y1",String(U.y)),L.setAttribute("x2",String(K.x)),L.setAttribute("y2",String(K.y)),L.setAttribute("stroke","var(--kg-canvas-edge-stroke)"),L.setAttribute("stroke-opacity","1"),L.setAttribute("stroke-width","2"),L.setAttribute("stroke-linecap","round"),L.setAttribute("fill","none"),o.appendChild(L)}const G=new XMLSerializer().serializeToString(n);return String(G||"").trim()||t}catch{return t}}const ee=e=>/^https?:\/\//i.test(String(e||"").trim()),Rt=e=>/^data:/i.test(String(e||"").trim()),Ae=e=>{var a;const t=((a=String(e||"").trim().split(";")[0])==null?void 0:a.trim().toLowerCase())||"";return!t||!/^[a-z0-9][a-z0-9!#$&^_.+-]*\/[a-z0-9][a-z0-9!#$&^_.+-]*$/i.test(t)?"":t},Ot=e=>{const t=String(e||"").trim();if(!t)return"application/octet-stream";try{const a=/^https?:\/\//i.test(t)?new URL(t):new URL(t,"http://x.local");return pe(a.pathname||t)}catch{return pe(t)}},he=()=>{try{if(typeof window>"u"||!window.location)return"";const e=String(window.location.origin||"").replace(/\/+$/,"");return/^https?:\/\//i.test(e)?e:""}catch{return""}},se=e=>{const t=String(e||"").trim();if(!t)return"";if(/^(data:|blob:|mailto:|tel:|javascript:)/i.test(t))return t;const a=n=>{try{return decodeURIComponent(n)}catch{return n}},i=(n=>{var o;try{if(/^https?:\/\//i.test(n))return new URL(n);if(typeof window>"u")return null;const s=(o=window.location)==null?void 0:o.origin;return!s||!/^https?:\/\//i.test(String(s))?null:new URL(n,s)}catch{return null}})(t);if(!i)return t;const d=i.pathname||"";if(d==="/__fetch_remote"||d==="/__webpage_proxy"||d==="/__webpage_asset_proxy"){const n=i.searchParams.get("url");if(!n)return t;const o=a(n);return ee(o)?o:o||t}if(d.startsWith("/__")){const n=i.searchParams.get("url");if(n){const o=a(n);if(ee(o))return o}}if(d.startsWith("/__webpage_asset_path/")){const o=d.slice(22).split("/").filter(Boolean);if(o.length>=1){const s=o[0]||"",l=a(s);if(ee(l)){const v="/"+o.slice(1).join("/"),g=i.search||"";return l.replace(/\/+$/,"")+v+g}}}return t},Ne=e=>It(e),pe=e=>{const t=String(e||"").trim(),a=t.lastIndexOf("."),r=a>=0?t.slice(a+1).toLowerCase():"";return r==="svg"?"image/svg+xml":r==="png"?"image/png":r==="jpg"||r==="jpeg"?"image/jpeg":r==="gif"?"image/gif":r==="webp"?"image/webp":r==="mp4"?"video/mp4":r==="webm"?"video/webm":r==="json"?"application/json":r==="html"||r==="htm"?"text/html":"application/octet-stream"},Fe=e=>{const t=globalThis.Buffer;if(t)return t.from(e).toString("base64");let a="";const r=32768;for(let d=0;d<e.length;d+=r){const n=e.subarray(d,Math.min(e.length,d+r));a+=String.fromCharCode(...n)}const i=globalThis.btoa;return i?i(a):""},Lt=async e=>{const t=await _e(e);return(t==null?void 0:t.bytes)||null},_e=async(e,t)=>{var a,r,i,d;try{if(typeof fetch!="function")return null;const n=await fetch(e);if(!n||!n.ok)return null;const o=typeof(t==null?void 0:t.maxBytes)=="number"&&Number.isFinite(t.maxBytes)?Math.max(0,Math.floor(t.maxBytes)):0;if(o>0){const l=Number(((r=(a=n.headers)==null?void 0:a.get)==null?void 0:r.call(a,"content-length"))||0);if(Number.isFinite(l)&&l>o)return null}const s=await n.arrayBuffer();return o>0&&s.byteLength>o?null:{bytes:new Uint8Array(s),mime:Ae(String(((d=(i=n.headers)==null?void 0:i.get)==null?void 0:d.call(i,"content-type"))||""))}}catch{return null}},ve=async(e,t)=>{const a=String(e||"").trim(),r=Ne(a);if(!r)return null;const i=typeof(t==null?void 0:t.maxBytes)=="number"&&Number.isFinite(t.maxBytes)?Math.max(0,Math.floor(t.maxBytes)):9e5,d=(()=>{const l=String((t==null?void 0:t.origin)||"").trim();if(l&&/^https?:\/\//i.test(l))return l.replace(/\/+$/,"")+a;try{if(typeof window<"u"&&window.location&&/^https?:$/.test(String(window.location.protocol||"")))return String(window.location.origin||"").replace(/\/+$/,"")+a}catch{}return a})(),n=await Lt(d);if(!n||n.length===0||n.length>i)return null;const o=pe(r),s=Fe(n);return s?`data:${o};base64,${s}`:null},Tt=(e,t)=>{const a=String(e||"").trim(),r=String(t||"").trim(),i=[],d=n=>{const o=String(n||"").trim();!o||i.includes(o)||i.push(o)};if(a.startsWith("/__fetch_remote?url=")&&d(a),a.startsWith("/__")){const n=he();n&&d(`${n}${a.startsWith("/")?"":"/"}${a}`),d(a)}if(/^https?:\/\/[^/]+\/__fetch_remote\?url=/i.test(a)&&d(a),/^https?:\/\/[^/]+\/__/i.test(a)&&d(a),ee(r)){const n=he();n&&d(`${n}/__fetch_remote?url=${encodeURIComponent(r)}`),d(r)}return i},De=async(e,t)=>{const a=String(e||"").trim();if(!a)return null;if(Rt(a))return a;const r=typeof(t==null?void 0:t.maxBytes)=="number"&&Number.isFinite(t.maxBytes)?Math.max(0,Math.floor(t.maxBytes)):9e5,i=se(a),d=await ve(i,{maxBytes:r,origin:t==null?void 0:t.origin});if(d)return d;if((t==null?void 0:t.allowRemote)!==!0||!ee(i))return null;const n=Tt(a,i);for(let o=0;o<n.length;o+=1){const s=n[o],l=await _e(s,{maxBytes:r});if(!l||l.bytes.length===0)continue;const v=Ae(l.mime)||Ot(i),g=Fe(l.bytes);if(g)return`data:${v};base64,${g}`}return null},$=e=>typeof e=="number"&&Number.isFinite(e),V=e=>String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),de=(e,t)=>{const a=String(e.getAttribute(t)||"").trim();if(!a)return null;const r=Number(a);return Number.isFinite(r)?r:null},be=e=>{const t=String(e.getAttribute("data-kg-title")||"").trim();if(t)return t;const a=e.querySelector("a[aria-label]"),r=String((a==null?void 0:a.getAttribute("aria-label"))||"").trim();if(r)return r;const i=e.querySelector("iframe[title]"),d=String((i==null?void 0:i.getAttribute("title"))||"").trim();if(d)return d;const n=e.querySelector("video[title],audio[title],img[alt]"),o=String((n==null?void 0:n.getAttribute("title"))||(n==null?void 0:n.getAttribute("alt"))||"").trim();return o||""},xe=e=>String(e.getAttribute("data-md-id")||"").trim(),we=e=>String(e.getAttribute("data-kg-anchor-node-id")||"").trim(),zt=(e,t)=>{try{e.setAttribute("data-md-id",t.id)}catch{}try{t.anchorNodeId?e.setAttribute("data-kg-anchor-node-id",t.anchorNodeId):e.removeAttribute("data-kg-anchor-node-id")}catch{}},ke=e=>{const t=ut(e);return t==="image"||t==="svg"||t==="video"||t==="audio"?t:"iframe"},Wt=(e,t)=>{try{return typeof document>"u"?t:String(getComputedStyle(document.documentElement).getPropertyValue(e)||"").trim()||t}catch{return t}},Ht=e=>{var g;const t=e.graph,a=String(e.svgMarkup||""),r=Array.isArray(t==null?void 0:t.nodes)?t.nodes:[],i=new Set;for(let c=0;c<r.length;c+=1){const u=String(((g=r[c])==null?void 0:g.id)||"").trim();u&&i.add(u)}if(a.trim()){const c=/\bdata-node-id\s*=\s*(?:"([^"]+)"|'([^']+)')/gi;let u=null;for(;u=c.exec(a);){const x=String(u[1]||u[2]||"").trim();x&&i.add(x)}}const d={};for(const c of i){const u=c.split("::").pop()||"";u&&!d[u]&&(d[u]=c)}const n=c=>{const u=String(c||"").trim();if(!u)return!0;const x=u.toLowerCase();return!!(x.includes("::blk:")||x.includes("::block:")||x.startsWith("blk:"))},o=c=>{const u=String(c||"").trim();if(!u)return"";if(i.has(u)||n(u))return u;const x=u.split("::").pop()||"";return x&&d[x]||u},s=Array.isArray(t==null?void 0:t.edges)?t.edges:[],l=new Set,v=c=>{if(typeof c=="string")return String(c||"").trim();if(c&&typeof c=="object"){const u=c.id;if(typeof u=="string")return String(u||"").trim()}return String(c||"").trim()};for(let c=0;c<s.length;c+=1){const u=s[c],x=u.source,F=u.target,G=u.sourceId??u.source_id,T=u.targetId??u.target_id,A=o(v(x??G)),E=o(v(F??T));A&&i.has(A)&&l.add(A),E&&i.has(E)&&l.add(E)}if(a.trim()){const c=/\bdata-(?:source-id|source|target-id|target)\s*=\s*(?:"([^"]+)"|'([^']+)')/gi;let u=null;for(;u=c.exec(a);){const x=String(u[1]||u[2]||"").trim();if(!x)continue;const F=o(x);F&&i.has(F)&&l.add(F)}}return{nodeIdSet:i,edgeLinkedNodeIdSet:l,resolveNodeId:o}},Gt=e=>{const t=String(e.overlayHtml||"");if(!t.trim())return"";if(!e.hasGraphNodeIdentity)return t;const a=d=>{const n=String(d.anchorNorm||d.anchorRaw||"").trim();if(n)return`md:${n}`;const o=String(d.idNorm||d.idRaw||"").trim();return o?`md:${o}`:""},r=d=>{const n=String(d||"").toLowerCase();if(!n)return 0;if(/(?:^|;)\s*display\s*:\s*none\b/i.test(n))return-200;if(/(?:^|;)\s*visibility\s*:\s*hidden\b/i.test(n))return-180;if(/(?:^|;)\s*opacity\s*:\s*0(?:\D|$)/i.test(n))return-160;const o=/(?:^|;)\s*position\s*:\s*(?:fixed|sticky)\b/i.test(n),s=/(?:^|;)\s*(?:left|top|right|bottom|inset)\s*:/i.test(n);return o&&s?-40:o?-20:0},i=d=>{var E,X;const n=String(d||"");if(!n.trim())return"";const o=(z,W,P)=>P?String(z||"").replace(new RegExp(`\\s${W}=(?:"[^"]*"|'[^']*')`,"i"),"").replace(/>$/,` ${W}="${P}">`):z,s=(z,W)=>String(z||"").replace(new RegExp(`\\s${W}=(?:"[^"]*"|'[^']*')`,"ig"),""),l=(z,W)=>{const P=String(z||""),O=`${W}="`,U=`${W}='`,K=P.indexOf(O);if(K>=0){const Q=K+O.length,J=P.indexOf('"',Q);return J>Q?P.slice(Q,J).trim():""}const L=P.indexOf(U);if(L>=0){const Q=L+U.length,J=P.indexOf("'",Q);return J>Q?P.slice(Q,J).trim():""}return""},v=(z,W,P)=>{let O=z;return O=s(O,"data-kg-anchor-node-id"),O=o(O,"data-md-id",W),P&&(O=o(O,"data-kg-anchor-node-id",P)),O},g=[];let c=!1;const u=new Map,x=new Map,F=/<article\b[^>]*data-kg-rich-media-panel=(?:"1"|'1')[^>]*>[\s\S]*?<\/article>/gi;let G=null;for(;G=F.exec(n);){c=!0;const z=G[0]||"",W=((E=z.match(/<article\b[^>]*>/i))==null?void 0:E[0])||"",P=e.resolveOverlayNodeId(l(W,"data-node-id")),O=P?`media:${P}`:"";if(!P||!O||!e.shouldKeepOverlayLinkedToGraph({nodeId:P}))continue;const U=z.replace(W,o(W,"data-node-id",P)),K=r(l(W,"style")),L=u.get(O);(!L||K>L.score)&&u.set(O,{chunk:U,score:K})}const T=/<article\b[^>]*data-md-id[^>]*>[\s\S]*?<\/article>/gi;let A=null;for(;A=T.exec(n);){c=!0;const z=A[0]||"",W=((X=z.match(/<article\b[^>]*>/i))==null?void 0:X[0])||"",P=l(W,"data-md-id"),O=l(W,"data-kg-anchor-node-id"),U=e.resolveOverlayNodeId(P),K=e.resolveOverlayNodeId(O),L=a({idRaw:P,idNorm:U,anchorRaw:O,anchorNorm:K});if(!L||!e.shouldKeepOverlayLinkedToGraph({nodeId:U||P,anchorNodeId:K||O}))continue;const Q=v(W,U||P,K||O),J=z.replace(W,Q),te=r(l(W,"style")),re=x.get(L);(!re||te>re.score)&&x.set(L,{chunk:J,score:te})}for(const z of u.values())z.score<=-100||g.push(z.chunk);for(const z of x.values())z.score<=-100||g.push(z.chunk);return g.length<=0?c?"":n:g.join("")};try{if(typeof DOMParser>"u")return i(t);const n=new DOMParser().parseFromString(`<!doctype html><html><body><section id="kg-overlay-filter-root">${t}</section></body></html>`,"text/html").querySelector("#kg-overlay-filter-root");if(!n)return t;const o=new Map,s=n.querySelectorAll('[data-kg-rich-media-panel="1"][data-kg-rich-media-render-surface="1"][data-node-id]');for(let g=0;g<s.length;g+=1){const c=s[g],u=String(c.getAttribute("data-node-id")||"").trim(),x=e.resolveOverlayNodeId(u),F=x?`media:${x}`:"";if(!(!!x&&e.shouldKeepOverlayLinkedToGraph({nodeId:x}))||!F){c.remove();continue}const T=r(String(c.getAttribute("style")||"").trim()),A=o.get(F);(!A||T>A.score)&&o.set(F,{el:c,score:T});try{c.setAttribute("data-node-id",x)}catch{}}for(let g=0;g<s.length;g+=1){const c=s[g];if(!c||!c.isConnected)continue;const u=e.resolveOverlayNodeId(String(c.getAttribute("data-node-id")||"").trim()),x=u?`media:${u}`:"",F=x?o.get(x):null,G=(F==null?void 0:F.el)||null;if(!G||G!==c){c.remove();continue}((F==null?void 0:F.score)??0)<=-100&&c.remove()}const l=new Map,v=n.querySelectorAll("article[data-md-id]");for(let g=0;g<v.length;g+=1){const c=v[g],u=xe(c),x=we(c),F=e.resolveOverlayNodeId(u),G=e.resolveOverlayNodeId(x),T=a({idRaw:u,idNorm:F,anchorRaw:x,anchorNorm:G});if(!e.shouldKeepOverlayLinkedToGraph({nodeId:F||u,anchorNodeId:G||x})||!T){c.remove();continue}const E=r(String(c.getAttribute("style")||"").trim()),X=l.get(T);(!X||E>X.score)&&l.set(T,{el:c,score:E}),zt(c,{id:F||u,anchorNodeId:G||x})}for(let g=0;g<v.length;g+=1){const c=v[g];if(!c||!c.isConnected)continue;const u=xe(c),x=we(c),F=e.resolveOverlayNodeId(u),G=e.resolveOverlayNodeId(x),T=a({idRaw:u,idNorm:F,anchorRaw:x,anchorNorm:G}),A=T?l.get(T):null,E=(A==null?void 0:A.el)||null;if(!E||E!==c){c.remove();continue}((A==null?void 0:A.score)??0)<=-100&&c.remove()}return n.innerHTML}catch{return i(t)}};async function gr(e){try{st()}catch{}const t=String(e.title||"").trim()||"Graph viewer",a=String(e.svgMarkup||"").trim(),r=e.initialView&&$(e.initialView.k)&&$(e.initialView.x)&&$(e.initialView.y)?e.initialView:null,i=$(e.viewportWidthPx)&&$(e.viewportHeightPx)?{w:Math.max(1,Math.floor(e.viewportWidthPx)),h:Math.max(1,Math.floor(e.viewportHeightPx))}:null,d=String(e.overlayHtml||""),n=Ht({graph:e.graphData,svgMarkup:a}),o=p=>n.resolveNodeId(p),s=p=>{if(n.nodeIdSet.size===0)return!0;const m=o(String(p.nodeId||"").trim()),w=o(String(p.anchorNodeId||"").trim());return m&&n.nodeIdSet.has(m)||w&&n.nodeIdSet.has(w)?n.edgeLinkedNodeIdSet.size<=0?!0:m&&n.edgeLinkedNodeIdSet.has(m)||w&&n.edgeLinkedNodeIdSet.has(w):!1},l=Gt({overlayHtml:d,hasGraphNodeIdentity:n.nodeIdSet.size>0,resolveOverlayNodeId:o,shouldKeepOverlayLinkedToGraph:s}),v=bt(l),g=(()=>{var I;const p=[],m=[];if(!v.trim())return{mediaNodes:p,markdownBlocks:m};const w=()=>{const b=(k,N)=>{const M=String(k||""),y=`${N}="`,f=`${N}='`,h=M.indexOf(y);if(h>=0){const D=h+y.length,Y=M.indexOf('"',D);return Y>D?M.slice(D,Y).trim():""}const _=M.indexOf(f);if(_>=0){const D=_+f.length,Y=M.indexOf("'",D);return Y>D?M.slice(D,Y).trim():""}return""},B=/<article\b[^>]*data-kg-rich-media-panel=(?:"1"|'1')[^>]*>/gi;let S=null;for(;S=B.exec(v);){const k=S[0]||"",N=o(b(k,"data-node-id"));if(!N)continue;const M=b(k,"data-kg-url")||b(k,"data-kg-open-url");if(!M)continue;const y=b(k,"data-kg-kind").toLowerCase(),f=y==="image"||y==="svg"||y==="video"||y==="audio"||y==="iframe"?y:ke(M);p.push({id:N,title:N,url:M,openUrl:b(k,"data-kg-open-url")||M,interactive:!0,kind:f})}const R=/<article\b[^>]*data-md-id[^>]*>/gi;let C=null;for(;C=R.exec(v);){const k=C[0]||"",N=b(k,"data-md-id");if(!N)continue;const M=Number(b(k,"data-kg-world-x")),y=Number(b(k,"data-kg-world-y")),f=Number(b(k,"data-kg-world-w")),h=Number(b(k,"data-kg-world-h"));if(!Number.isFinite(M)||!Number.isFinite(y)||!Number.isFinite(f)||!Number.isFinite(h)||!(f>0)||!(h>0))continue;const _=o(b(k,"data-kg-anchor-node-id"));m.push({id:N,anchorNodeId:_||void 0,title:N,summary:"",preview:{kind:"other"},x:M,y,w:f,h})}};try{if(typeof DOMParser>"u")return w(),{mediaNodes:p,markdownBlocks:m};const B=new DOMParser().parseFromString(`<!doctype html><html><body><section id="kg-overlay-seed">${v}</section></body></html>`,"text/html").querySelector("#kg-overlay-seed");if(!B)return w(),{mediaNodes:p,markdownBlocks:m};const S=B.querySelectorAll('[data-kg-rich-media-panel="1"][data-kg-rich-media-render-surface="1"][data-node-id]');for(let C=0;C<S.length;C+=1){const k=S[C],N=String(k.getAttribute("data-node-id")||"").trim(),M=o(N);if(!M)continue;const y=String(k.getAttribute("data-kg-url")||"").trim(),f=String(k.getAttribute("data-kg-open-url")||"").trim(),h=k.querySelector("iframe[src],img[src],video[src],audio[src],source[src]"),_=h?String(h.getAttribute("src")||"").trim():"",D=y||_||f;if(!D)continue;const Y=String(k.getAttribute("data-kg-kind")||"").trim().toLowerCase(),ae=Y==="image"||Y==="svg"||Y==="video"||Y==="audio"||Y==="iframe"?Y:ke(D),ne=be(k)||M;p.push({id:M,title:ne,url:D,openUrl:f||D,interactive:!0,kind:ae})}const R=B.querySelectorAll("[data-md-id]");for(let C=0;C<R.length;C+=1){const k=R[C],N=String(k.getAttribute("data-md-id")||"").trim();if(!N)continue;const M=de(k,"data-kg-world-x"),y=de(k,"data-kg-world-y"),f=de(k,"data-kg-world-w"),h=de(k,"data-kg-world-h");if(!$(M)||!$(y)||!$(f)||!$(h)||!(f>0)||!(h>0))continue;const _=String(k.getAttribute("data-kg-anchor-node-id")||"").trim(),D=o(_),Y=String(((I=k.querySelector(".kg-mdTitle"))==null?void 0:I.textContent)||"").trim()||be(k)||N;m.push({id:N,anchorNodeId:D||void 0,title:Y,summary:"",preview:{kind:"other"},x:M,y,w:f,h})}p.length===0&&m.length===0&&w()}catch{w()}return{mediaNodes:p,markdownBlocks:m}})(),c={mediaNodes:g.mediaNodes.filter(p=>s({nodeId:p.id})),markdownBlocks:g.markdownBlocks.filter(p=>s({nodeId:p.id,anchorNodeId:p.anchorNodeId}))},u=(()=>{if(!r)return[];const p=e.graphData,m=Array.isArray(p==null?void 0:p.nodes)?p.nodes:[];if(m.length===0)return[];const w={};for(let M=0;M<m.length;M+=1){const y=m[M],f=String((y==null?void 0:y.id)||"").trim();if(!f)continue;const h=y.x,_=y.y;!$(h)||!$(_)||(w[f]={x:h,y:_})}const I=ge(a);for(const M of Object.keys(I))w[M]=I[M];const b=i?i.w:1920,B=i?i.h:1080,S=800,R=Math.max(1e-5,Number(r.k)),C=Number(r.x),k=Number(r.y),N=[];for(const M of Object.keys(w)){if(!s({nodeId:M}))continue;const y=w[M];if(!y)continue;const f=y.x*R+C,h=y.y*R+k;if(!(f<-S||f>b+S)&&!(h<-S||h>B+S)&&(N.push(M),N.length>=800))break}return N})();if(!!!a)return null;const F=Z("--kg-canvas-bg")||"#ffffff",G=Z("--kg-panel-bg")||"rgba(255,255,255,0.92)",T=Z("--kg-border")||"rgba(0,0,0,0.12)",A=Z("--kg-text-primary")||"rgba(0,0,0,0.86)",E=Z("--kg-text-secondary")||"rgba(0,0,0,0.7)",X=Z("--kg-text-tertiary")||"rgba(0,0,0,0.55)",z=Z("--kg-panel-action-bg")||"rgba(0,0,0,0.04)",W=Z("--kg-panel-action-bg-hover")||"rgba(0,0,0,0.06)",P=Z("--kg-canvas-edge-stroke")||"#9ca3af",O=Z("--kg-canvas-node-stroke")||"#ffffff",U=Z("--kg-canvas-accent")||"#3b82f6",K=Z("--kg-canvas-label-fill")||A,L=Z("--kg-canvas-label-halo")||F,Q=Z("--kg-media-panel-header-bg")||"rgba(0,0,0,0.04)",J=e.mediaPanelDensity==="compact"?"compact":"default",te=J==="compact"?22:28,re=J==="compact"?9:10,Le=J==="compact"?6:8,Te=J==="compact"?11:12,le=fe({density:"default",sizing:e.overlaySizing||null}),ce=fe({density:"compact",sizing:e.overlaySizing||null}),ze=le.widthRatio,We=ce.widthRatio,He=le.widthMinPx,Ge=ce.widthMinPx,Ye=le.widthMaxPx,Xe=ce.widthMaxPx,ye=(()=>{if(e.includeRichMediaOverlays!==!0)return[];const p=e.graphData,m=Array.isArray(p==null?void 0:p.nodes)?p.nodes:[],w=$(e.mediaOverlayPoolMax)?Math.max(0,Math.floor(e.mediaOverlayPoolMax)):0,I=w>0?w:Math.min(2e3,Math.max(24,m.length));return dt({enabled:!0,nodes:m,poolMax:I,preferredNodeIds:u})})(),Ve=async p=>{if(!p||p.length===0)return[];const m=24e5,w=[];for(let I=0;I<p.length;I+=1){const b=p[I],B=String(b.url||"").trim(),S=se(B),R=se(String(b.openUrl||S||"").trim()),C=Ne(S),N=e.inlineRemoteMediaAssets===!0&&(b.kind==="image"||b.kind==="svg"||b.kind==="video"||b.kind==="audio")?await De(B||S,{maxBytes:m,allowRemote:!0}):C?await ve(S,{maxBytes:m}):null;if(!N){w.push({...b,url:S,openUrl:R});continue}w.push({...b,url:N,openUrl:R})}return w},Ke=(()=>{const p=[],m=new Set,w=I=>{const b=o(String(I.id||"").trim());s({nodeId:b})&&(!b||m.has(b)||(m.add(b),p.push({...I,id:b})))};for(let I=0;I<ye.length;I+=1)w(ye[I]);for(let I=0;I<c.mediaNodes.length;I+=1)w(c.mediaNodes[I]);return p})(),Ue=await Ve(Ke),qe=JSON.stringify(Ue),je=(()=>{const p={},m=e.graphData,w=Array.isArray(m==null?void 0:m.nodes)?m.nodes:[];for(let I=0;I<w.length;I+=1){const b=w[I],B=String((b==null?void 0:b.id)||"").trim();if(!B)continue;const S=String(b.label||"").trim();p[B]={label:S||B}}return JSON.stringify(p)})(),me=p=>n.resolveNodeId(p),Ze=(()=>{const p={},m=e.graphData,w=Array.isArray(m==null?void 0:m.edges)?m.edges:[];for(let I=0;I<w.length;I+=1){const b=w[I],B=String((b==null?void 0:b.id)||"").trim();if(!B)continue;const S=String(b.label||"").trim(),R=String(b.source||"").trim(),C=String(b.target||"").trim(),k=me(R),N=me(C);p[B]={label:S||"",s:k,t:N}}return JSON.stringify(p)})(),$e=(()=>{const p=e.graphData;if(!p)return JSON.stringify({nodeIds:[],edgeIds:[]});const m=lt(p),w=Array.isArray(m.nodes)?m.nodes:[],I=Array.isArray(m.edges)?m.edges:[],b=w.map(S=>String((S==null?void 0:S.id)||"").trim()).filter(Boolean),B=I.map(S=>String((S==null?void 0:S.id)||"").trim()).filter(Boolean);return JSON.stringify({nodeIds:b,edgeIds:B})})(),Je=(()=>{var f;const p=e.graphData;if(!p)return JSON.stringify({});const m=Array.isArray(p.nodes)?p.nodes:[],w=new Set,I={};for(let h=0;h<m.length;h+=1){const _=String(((f=m[h])==null?void 0:f.id)||"").trim();if(!_)continue;w.add(_);const D=_.split("::").pop()||"";D&&!I[D]&&(I[D]=_)}const b=h=>{const _=String(h||"").trim();if(!_)return"";if(w.has(_))return _;const D=_.split("::").pop()||"";return D?I[D]||_:""},B=p.metadata||{},S=B.kind==="keyword",R=ct({frontmatterModeEnabled:!1,multiDimTableModeEnabled:!1,documentSemanticMode:S?"keyword":"document",documentStructureBaselineLock:!1}).forceDocumentStructureGroups,C=B["kg:view"]&&typeof B["kg:view"]=="object"&&!Array.isArray(B["kg:view"])?B["kg:view"]:null,k=C&&Array.isArray(C.collapsedGroupIds)?C.collapsedGroupIds:[],N=new Set(k.map(h=>String(h||"").trim()).filter(Boolean)),M=wt({groups:xt(p,{forceDocumentStructure:R}),collapsedGroupIdSet:N}),y={};for(let h=0;h<M.length;h+=1){const _=M[h],D=String(_.id||"").trim();if(!D)continue;const Y=_.memberNodeIds,ae=Array.isArray(Y)?Y.map(ie=>String(ie)).filter(Boolean):[];if(ae.length===0)continue;const ne=ae.map(b).filter(ie=>ie&&w.has(ie));ne.length!==0&&(y[D]=ne)}return JSON.stringify(y)})(),ue=(()=>{const p=e.graphData,m=Array.isArray(p==null?void 0:p.nodes)?p.nodes:[],w={},I=new Set;for(let B=0;B<m.length;B+=1){const S=m[B],R=String((S==null?void 0:S.id)||"").trim();if(!R)continue;const C=S.x,k=S.y;!$(C)||!$(k)||(I.add(R),w[R]={x:C,y:k})}const b=ge(a);for(const B of Object.keys(b))w[B]=b[B];for(let B=0;B<c.markdownBlocks.length;B+=1){const S=c.markdownBlocks[B],R=Number(S.x),C=Number(S.y),k=Number(S.w),N=Number(S.h);if(!Number.isFinite(R)||!Number.isFinite(C)||!Number.isFinite(k)||!Number.isFinite(N)||!(k>0)||!(N>0))continue;const M=R+k*.5,y=C+N*.5,f=String(S.id||"").trim();f&&!I.has(f)&&(w[f]={x:M,y});const h=o(String(S.anchorNodeId||"").trim());h&&!I.has(h)&&(w[h]={x:M,y})}return w})(),Qe=JSON.stringify(ue),et=(()=>{var p;try{const m=e.graphData;if(!m&&c.markdownBlocks.length===0)return"[]";const w=kt({graphData:m,nodePosById:ue}),I=w&&Array.isArray(w.blocks)?w.blocks:[],b=Array.isArray(m==null?void 0:m.nodes)?m.nodes:[],B=St({layout:w,nodes:b}),R=[...I.map(y=>{const f=String((y==null?void 0:y.id)||"").trim(),h=f?o(String((B==null?void 0:B[f])||"").trim()):"";return h?{...y,anchorNodeId:h}:y})],C=new Map;for(let y=0;y<R.length;y+=1){const f=String(((p=R[y])==null?void 0:p.id)||"").trim();f&&C.set(f,R[y])}for(let y=0;y<c.markdownBlocks.length;y+=1){const f=c.markdownBlocks[y],h=C.get(f.id);if(!h){R.push(f),C.set(f.id,f);continue}const _=o(String(h.anchorNodeId||f.anchorNodeId||""));_&&(h.anchorNodeId=_);const D=Number(h.w),Y=Number(h.h);Number.isFinite(D)&&D>0&&Number.isFinite(Y)&&Y>0||(h.x=f.x,h.y=f.y,h.w=f.w,h.h=f.h)}const k=R.filter(y=>s({nodeId:String((y==null?void 0:y.id)||""),anchorNodeId:String((y==null?void 0:y.anchorNodeId)||"")})),N=[],M=new Set;for(let y=0;y<k.length;y+=1){const f=k[y],h=o(String((f==null?void 0:f.anchorNodeId)||(f==null?void 0:f.anchorId)||"")),_=String((f==null?void 0:f.id)||"").trim(),D=(h?`md:${h}`:_?`md:${_}`:"").trim();D&&(M.has(D)||(M.add(D),N.push(f)))}return JSON.stringify(N)}catch{return"[]"}})(),tt=Pt({svgMarkup:a,graphData:e.graphData||{nodes:[],edges:[]},nodePosById:ue}),rt=JSON.stringify({scaleExtent:ht({minK:e.zoomMinK,maxK:e.zoomMaxK}),wheelBehavior:e.wheelBehavior,viewportControlsPreset:e.viewportControlsPreset,panSpeed:e.panSpeed,zoomSpeed:e.zoomSpeed,flowWheelZoomSpeedMultiplier:e.flowWheelZoomSpeedMultiplier,flowWheelZoomIncrementMultiplier:e.flowWheelZoomIncrementMultiplier,flowWheelZoomSmoothMinDurationMs:e.flowWheelZoomSmoothMinDurationMs,flowWheelZoomSmoothMaxDurationMs:e.flowWheelZoomSmoothMaxDurationMs,wheelZoomCtrlMetaBoostMultiplier:e.wheelZoomCtrlMetaBoostMultiplier,canvasInteractionSpeedMultiplier:e.canvasInteractionSpeedMultiplier,canvasPanSpeedMultiplier:e.canvasPanSpeedMultiplier,snapGridEnabled:e.snapGridEnabled,snapGridSize:e.snapGridSize,dragConstraint:e.dragConstraint,allowNodeDrag:e.allowNodeDrag!==!1,allowEdgeDrag:e.allowEdgeDrag!==!1,allowGroupDrag:e.allowGroupDrag!==!1,preferWebgl3d:e.preferWebgl3d===!0,initialView:r||null,fixedViewport:i?{widthPx:i.w,heightPx:i.h,scaleToFit:e.viewportScaleToFit===!0}:null,enableDecorativeAnimation:e.enableDecorativeAnimation===!0,zoomLabelScaleMode2d:e.zoomLabelScaleMode2d,zoomLabelScaleExponent2d:e.zoomLabelScaleExponent2d,zoomLabelScaleClampMin2d:e.zoomLabelScaleClampMin2d,zoomLabelScaleClampMax2d:e.zoomLabelScaleClampMax2d,zoomStrokeScaleMode2d:e.zoomStrokeScaleMode2d,zoomStrokeScaleExponent2d:e.zoomStrokeScaleExponent2d,zoomStrokeScaleClampMin2d:e.zoomStrokeScaleClampMin2d,zoomStrokeScaleClampMax2d:e.zoomStrokeScaleClampMax2d,hideLabelsBelowScale:e.hideLabelsBelowScale}),at=(()=>{try{const p=String(e.proxyOrigin||"").trim();if(!p)return"";const m=new URL(p).hostname.toLowerCase();return m==="localhost"||m==="127.0.0.1"||m==="0.0.0.0"?p:""}catch{return""}})(),nt=tt,it=Ft({interactionCfgJson:rt,mediaNodesJson:qe,markdownBlocksJson:et,nodeLabelByIdJson:je,edgeMetaByIdJson:Ze,frontmatterVisibilityJson:$e,initialFrontmatterEnabled:e.initialFrontmatterEnabled===!0,nodePosByIdJson:Qe,groupMembersByIdJson:Je,density:J,widthRatioDefault:ze,widthRatioCompact:We,widthMinDefault:He,widthMinCompact:Ge,widthMaxDefault:Ye,widthMaxCompact:Xe,proxyOrigin:at,allowRuntimeNetwork:e.allowRuntimeNetwork===!0}),ot=Wt("--kg-font-family","ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial");return`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
  <title>${V(t)}</title>
  <style>
    :root{
      --kg-canvas-bg:${V(F)};
      --kg-panel-bg:${V(G)};
      --kg-media-panel-bg:${V(G)};
      --kg-border:${V(T)};
      --kg-text:${V(A)};
      --kg-text-primary:${V(A)};
      --kg-text-secondary:${V(E)};
      --kg-text-tertiary:${V(X)};
      --kg-panel-action-bg:${V(z)};
      --kg-panel-action-bg-hover:${V(W)};
      --kg-canvas-edge-stroke:${V(P)};
      --kg-canvas-node-stroke:${V(O)};
      --kg-canvas-accent:${V(U)};
      --kg-canvas-label-fill:${V(K)};
      --kg-canvas-label-halo:${V(L)};
      --kg-md-panel-header-bg:${V(Q)};
      --kg-md-panel-header-h:${te}px;
      --kg-media-panel-border-w:1px;
      --kg-media-panel-radius:${re}px;
      --kg-media-panel-padding:${Le}px;
      --kg-media-panel-title-size:${Te}px;
      --kg-media-pointer-events:auto;
    }
    html,body{height:100%;width:100%;margin:0;background:var(--kg-canvas-bg);color:var(--kg-text);font-family:${V(ot)};-webkit-user-select:none;user-select:none;-webkit-text-size-adjust:100%;text-size-adjust:100%;overscroll-behavior:none}
    #kg-root{position:fixed;inset:0;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;cursor:grab;overscroll-behavior:none}
    #kg-root.kg-dragging{cursor:grabbing}
    #kg-root.kg-fixedViewport{inset:auto;left:50%;top:50%;width:var(--kg-fixed-w,1920px);height:var(--kg-fixed-h,1080px);transform:translate(-50%,-50%) scale(var(--kg-fixed-scale,1));transform-origin:center}
    #kg-root *{-webkit-user-select:none;user-select:none}
    #kg-stage{position:absolute;inset:0}
    #kg-webgl{position:absolute;inset:0;width:100%;height:100%;display:none;touch-action:none;outline:none}
    #kg-root.kg-canvas3d #kg-webgl{display:block}
    #kg-root.kg-canvas3d #kg-svgWrap{display:none}
    #kg-svgWrap{position:absolute;inset:0}
    #kg-svgWrap svg{display:block;width:100%;height:100%;overflow:visible;shape-rendering:geometricPrecision;text-rendering:geometricPrecision}
    #kg-svgWrap text{user-select:none;-webkit-user-select:none}
    #kg-svgWrap [data-kg-layer="markdown-design-blocks"]{display:block}
    #kg-overlay{position:fixed;inset:0;pointer-events:none}
    .kg-media{position:absolute;left:0;top:0;box-sizing:border-box;overflow:hidden;contain:layout paint;isolation:isolate;border-radius:var(--kg-media-panel-radius, 10px);border:var(--kg-media-panel-border-w, 1px) solid var(--kg-border);background:var(--kg-media-panel-bg, var(--kg-panel-bg, rgba(255,255,255,0.92)));box-shadow:0 10px 30px rgba(0,0,0,0.18);will-change:left, top, width, height;display:flex;flex-direction:column;pointer-events:auto}
    .kg-mediaBody{flex:1;padding:var(--kg-media-panel-padding, 6px);box-sizing:border-box;min-height:0;position:relative}
    .kg-mediaBody iframe,.kg-mediaBody img,.kg-mediaBody video,.kg-mediaBody audio{display:block;width:100%;height:100%;border:0;border-radius:calc(var(--kg-media-panel-radius) * 0.8);background:rgba(0,0,0,0.02);pointer-events:var(--kg-media-pointer-events);box-sizing:border-box}
    .kg-mediaSnap{position:absolute;inset:var(--kg-media-panel-padding, 6px);border-radius:calc(var(--kg-media-panel-radius) * 0.8);overflow:hidden;background:linear-gradient(135deg, rgba(15,23,42,0.06), rgba(148,163,184,0.10));border:1px solid rgba(0,0,0,0.06);display:flex;align-items:stretch;justify-content:stretch;pointer-events:none}
    .kg-mediaSnapImg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:saturate(1.05) contrast(1.02);opacity:0;transition:opacity 220ms ease}
    .kg-mediaSnapMeta{position:absolute;left:0;right:0;bottom:0;padding:10px 10px 9px;background:linear-gradient(180deg, rgba(15,23,42,0), rgba(15,23,42,0.66));color:#fff;display:flex;flex-direction:column;gap:2px}
    .kg-mediaSnapTitle{font-size:12px;line-height:1.25;font-weight:650;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .kg-mediaSnapHost{font-size:11px;line-height:1.25;opacity:0.84;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .kg-md{position:absolute;left:0;top:0;display:flex;flex-direction:column;pointer-events:none;background:var(--kg-panel-bg);border:var(--kg-media-panel-border-w) solid var(--kg-border);border-radius:var(--kg-media-panel-radius);box-shadow:0 10px 30px rgba(0,0,0,.12);overflow:hidden;box-sizing:border-box}
    .kg-mdHeader{height:var(--kg-md-panel-header-h);display:flex;align-items:center;gap:8px;padding:0 10px;background:var(--kg-md-panel-header-bg, rgba(0,0,0,0.04));border-bottom:var(--kg-media-panel-border-w) solid var(--kg-border)}
    .kg-mdTitle{font-size:var(--kg-media-panel-title-size);font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--kg-text-tertiary)}
    .kg-mdBody{position:relative;flex:1;padding:var(--kg-media-panel-padding);box-sizing:border-box}
    .kg-mdTable{width:100%;border-collapse:collapse;font-size:11px;line-height:1.25;color:var(--kg-text)}
    .kg-mdTable th{ text-align:left; border:1px solid var(--kg-border); padding:2px 4px; background:rgba(0,0,0,0.04); font-weight:600 }
    .kg-mdTable td{ border:1px solid var(--kg-border); padding:2px 4px; vertical-align:top }
    .kg-mdCode{margin:0;padding:6px;border-radius:8px;background:rgba(0,0,0,0.06);font-size:11px;line-height:1.35;overflow:hidden;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;white-space:pre;color:var(--kg-text)}
    .kg-mdQuote{border-left:3px solid var(--kg-border);padding-left:8px;color:var(--kg-text);font-size:12px;line-height:1.35;white-space:pre-wrap}
    .kg-mdText{font-size:12px;line-height:1.35;color:var(--kg-text);white-space:pre-wrap}
    .kg-mdCallout{border-left:3px solid var(--kg-canvas-accent);padding-left:8px;color:var(--kg-text);font-size:12px;line-height:1.35}
    .kg-mdCalloutTitle{font-weight:700;margin-bottom:4px}
    #kg-hud{position:absolute;left:max(12px, env(safe-area-inset-left));top:max(12px, env(safe-area-inset-top));display:flex;gap:8px;flex-wrap:wrap;align-items:center;z-index:1000;max-width:calc(100vw - 24px)}
    .kg-btn{border:1px solid var(--kg-border);background:var(--kg-panel-bg);color:var(--kg-text);border-radius:10px;padding:8px 10px;font-size:12px;cursor:pointer;min-width:32px;min-height:32px;line-height:1.2}
    .kg-btn.kg-active{outline:2px solid rgba(59,130,246,0.6);outline-offset:0}
    .kg-tip{display:block;position:absolute;left:0;top:0;transform:translate3d(-99999px,-99999px,0);max-width:min(420px,calc(100vw - 24px));padding:8px 10px;border-radius:12px;background:rgba(17,24,39,.9);color:#fff;font-size:12px;line-height:1.25;pointer-events:none;z-index:9999;backdrop-filter: blur(10px);-webkit-backdrop-filter: blur(10px);border:1px solid rgba(255,255,255,0.08)}
    .kg-tip strong{font-weight:600}
    @media (max-width:520px){.kg-btn{padding:10px 12px;font-size:14px;border-radius:12px;min-width:40px;min-height:40px}}
    @media (prefers-reduced-motion: reduce){*{animation:none!important;transition:none!important}}
    @keyframes kgNodeBob{0%{transform:translateY(0)}50%{transform:translateY(calc(var(--kg-bob-amp,2px) * -1))}100%{transform:translateY(0)}}
  </style>
</head>
<body>
  <main id="kg-root">
    <section id="kg-stage" aria-label="Graph canvas stage">
      <canvas id="kg-webgl" aria-label="3D canvas" tabindex="-1"></canvas>
      <figure id="kg-svgWrap">${nt}</figure>
    </section>
    <section id="kg-overlay" aria-label="Graph overlay">${v}</section>
    <nav id="kg-hud" aria-label="Canvas controls" data-kg-canvas-wheel-ignore="true" data-kg-canvas-pointer-ignore="true">
      <button class="kg-btn" id="kg-fit" type="button">Fit</button>
      <button class="kg-btn" id="kg-reset" type="button">Reset</button>
    </nav>
  </main>
  <output id="kg-tooltip" class="kg-tip" aria-hidden="true"></output>
  <script>
${it}
  <\/script>
</body>
</html>`}const pr=()=>{var e;try{const t=String(((e=globalThis==null?void 0:globalThis.localStorage)==null?void 0:e.getItem(Ee.viewportControlsPreset))||"").trim();return t==="map"||t==="design"?t:null}catch{return null}},Ce=e=>{const t=e;if(!(!t||!t.style))try{t.style.removeProperty("transform"),t.style.removeProperty("transform-origin"),t.style.removeProperty("translate"),t.style.removeProperty("left"),t.style.removeProperty("top"),t.style.removeProperty("right"),t.style.removeProperty("bottom"),t.style.removeProperty("inset"),t.style.removeProperty("position"),t.style.removeProperty("width"),t.style.removeProperty("height"),t.style.removeProperty("z-index")}catch{}},Pe=e=>{const t=e;if(!(!t||!t.style))try{t.style.display="none"}catch{}},Yt=(e,t)=>{const a=e.querySelectorAll("img,video,source,iframe"),r=t.querySelectorAll("img,video,source,iframe"),i=Math.min(a.length,r.length);for(let d=0;d<i;d+=1){const n=a[d],o=r[d],s=String(n.tagName||"").toLowerCase();if(s==="img"){const l=n,v=o,g=String(l.currentSrc||l.src||v.getAttribute("src")||"").trim();if(g)try{v.setAttribute("src",g)}catch{}continue}if(s==="video"||s==="source"){const l=String(n.currentSrc||n.src||o.getAttribute("src")||"").trim();if(l)try{o.setAttribute("src",l)}catch{}continue}if(s==="iframe"){const l=n,v=o,g=typeof l.srcdoc=="string"?l.srcdoc:"";if(g){try{v.removeAttribute("src")}catch{}try{v.setAttribute("srcdoc",g)}catch{}continue}const c=String(l.src||o.getAttribute("src")||"").trim();if(c)try{v.setAttribute("src",c)}catch{}}}},Xt=e=>{if(typeof document>"u")return[];const t=[],a=new Set;for(let r=0;r<e.length;r+=1){const i=String(e[r]||"").trim();if(!i)continue;const d=Array.from(document.querySelectorAll(i));for(let n=0;n<d.length;n+=1){const o=d[n];!o||a.has(o)||(a.add(o),t.push(o))}}return t},Re=(e,t)=>e?[e]:Xt(t),Se=e=>{try{const t=e,a=getComputedStyle(t);if(a.display==="none"||a.visibility==="hidden")return 0;const r=Number(a.opacity),i=t.getClientRects().length;return i>0&&Number.isFinite(r)&&r>.01?3:i>0?2:1}catch{return 1}},Oe=(e,t,a)=>{if(!t)return;const r=e.get(t);if(!r){e.set(t,a);return}Se(a)>=Se(r)&&e.set(t,a)},Ie=e=>String(e.getAttribute("data-md-id")||"").trim(),Vt=e=>String(e.getAttribute("data-kg-anchor-node-id")||"").trim(),Kt=(e,t)=>{try{e.setAttribute("data-md-id",t.id)}catch{}try{t.anchorNodeId?e.setAttribute("data-kg-anchor-node-id",t.anchorNodeId):e.removeAttribute("data-kg-anchor-node-id")}catch{}},Ut=e=>{var t;try{const a=Re(e.overlayRootEl,['section[aria-label="D3 rich media overlay"]','section[aria-label="Flow media overlay"]','section[aria-label="Design media overlay"]','section[aria-label="3D media overlay"]',"#kg-overlay",'[data-kg-rich-media-overlay="1"]','[data-kg-rich-media-panel="1"]']);if(a.length===0)return"";const r=new Map;for(let n=0;n<a.length;n+=1){const o=a[n],s=(t=o.matches)!=null&&t.call(o,'[data-kg-rich-media-panel="1"][data-node-id]')?[o]:Array.from(o.querySelectorAll('[data-kg-rich-media-panel="1"][data-node-id]'));for(let l=0;l<s.length;l+=1){const v=s[l],g=String(v.getAttribute("data-node-id")||"").trim();g&&Oe(r,g,v)}}const i=Array.from(r.values());if(i.length===0)return"";const d=document.createElement("section");for(let n=0;n<i.length;n+=1){const o=i[n],s=o.cloneNode(!0);Me(o,s,Be),Ce(s),Pe(s);try{Yt(o,s)}catch{}d.appendChild(s)}return d.innerHTML}catch{return""}},qt=e=>{var t;try{const a=Re(e.overlayRootEl,['section[aria-label="Design markdown overlay"]','section[aria-label="Flow media overlay"]',"#kg-overlay",'[data-kg-markdown-design-overlay="1"]',"[data-md-id]"]);if(a.length===0)return"";const r=new Map;for(let n=0;n<a.length;n+=1){const o=a[n],s=(t=o.matches)!=null&&t.call(o,"[data-md-id]")?[o]:Array.from(o.querySelectorAll("[data-md-id]"));for(let l=0;l<s.length;l+=1){const v=s[l],g=Ie(v);g&&Oe(r,g,v)}}const i=Array.from(r.values());if(i.length===0)return"";const d=document.createElement("section");for(let n=0;n<i.length;n+=1){const o=i[n],s=o.cloneNode(!0);Me(o,s,Be),Ce(s),Pe(s);try{const l=Ie(o),v=Vt(o);l&&Kt(s,{id:l,anchorNodeId:v})}catch{}d.appendChild(s)}return d.innerHTML}catch{return""}},vr=()=>{try{const e=Ut({overlayRootEl:null}),t=qt({overlayRootEl:null});return`${e}${t}`}catch{return""}},jt=e=>{const t=String(e||"").toLowerCase();return t==="href"||t==="xlink:href"||t==="src"||t==="poster"},Zt=e=>String(e||"").toLowerCase()==="srcset",$t=e=>{const t=[],a=e.attributes;for(let r=0;r<a.length;r+=1){const i=a.item(r);if(!i||!jt(i.name)&&!Zt(i.name)&&String(i.name||"").toLowerCase()!=="style")continue;const d=String(i.value||"").trim();d&&t.push({name:i.name,value:d})}return t},Jt=async(e,t)=>{const a=String(e||"").trim();if(!a)return"";const r=a.split(",").map(d=>d.trim()).filter(Boolean);if(r.length===0)return a;const i=[];for(let d=0;d<r.length;d+=1){const o=r[d].split(/\s+/g).filter(Boolean);if(o.length===0)continue;const s=o[0],l=await t(s),v=o.slice(1).join(" ");i.push(v?`${l} ${v}`:l)}return i.join(", ")},Qt=async(e,t)=>{const a=String(e||"");if(!a.trim())return a;const r=/url\(\s*(['"]?)([^'"\)]+)\1\s*\)/g;let i="",d=0;for(;;){const n=r.exec(a);if(!n)break;const o=n[0],s=String(n[2]||"").trim();i+=a.slice(d,n.index),d=n.index+o.length;const l=s&&await t(s),v=n[1]||"";i+=`url(${v}${l}${v})`}return i+=a.slice(d),i};async function yr(e){const t=String(e.svgMarkup||"");if(!t.trim())return"";if(typeof DOMParser!="function"||typeof XMLSerializer!="function")return t;let a=null;try{a=new DOMParser().parseFromString(t,"image/svg+xml")}catch{a=null}if(!a)return t;const r=a.documentElement;if(!r||String(r.tagName||"").toLowerCase()!=="svg")return t;const i=Array.from(r.querySelectorAll("*"));if(i.length===0)return t;const d=typeof e.maxInlineRepoBytes=="number"&&Number.isFinite(e.maxInlineRepoBytes)?Math.max(0,Math.floor(e.maxInlineRepoBytes)):24e5,n=async(o,s)=>{const l=String(o||"").trim();if(!l)return"";const v=se(l);return(e.inlineRemoteAssets===!0&&(s==null?void 0:s.allowRemote)===!0?await De(l,{maxBytes:d,allowRemote:!0}):await ve(v,{maxBytes:d}))||v};for(let o=0;o<i.length;o+=1){const s=i[o],l=$t(s);if(l.length!==0)for(let v=0;v<l.length;v+=1){const g=l[v],c=g.value,u=String(g.name||"").toLowerCase();if(u==="srcset"){const T=await Jt(c,A=>n(A,{allowRemote:!0}));if(!T||T===c)continue;try{s.setAttribute(g.name,T)}catch{}continue}if(u==="style"){const T=await Qt(c,A=>n(A,{allowRemote:!0}));if(!T||T===c)continue;try{s.setAttribute(g.name,T)}catch{}continue}const x=String(s.tagName||"").toLowerCase(),G=await n(c,{allowRemote:u==="src"||u==="poster"||(u==="href"||u==="xlink:href")&&x==="image"});if(!(!G||G===c))try{s.setAttribute(g.name,G)}catch{}}}try{return new XMLSerializer().serializeToString(r)||t}catch{return t}}function mr(e){const t=e.graphData,a=e.schema;if(!t||!a)return null;const r=Et({graphData:t,edges:null}),i=gt(e.collapsedGroupIds),d=pt(a),n=vt(r),o=yt({graphData:r,graphDataRevision:typeof e.graphDataRevision=="number"&&Number.isFinite(e.graphDataRevision)?Math.floor(e.graphDataRevision):0}),s=mt(a),l=String(e.documentSemanticModeKey||"document"),v=ft({schemaLayoutEngineJson:d,frontmatterModeEnabled:e.frontmatterModeEnabled,documentSemanticMode:l,graphMetaKey:n,renderMediaAsNodes:e.renderMediaAsNodes,mediaPanelDensity:String(e.mediaPanelDensity),collapsedGroupIdsKey:i}),g=String(e.canvas2dRenderer||"d3"),x=Mt({datasetKey:o,mode:s,frontmatterMode:e.frontmatterModeEnabled,semanticMode:l,renderMode:"2d",renderVariant:g,layoutVariant:"",viewKey:v,prevViewKey:null,prevDatasetKey:null,prevMode:null,prevFrontmatterMode:null,prevSemanticMode:null,prevRenderMode:null,prevRenderVariant:null,prevLayoutVariant:null,nodes:Array.isArray(r.nodes)?r.nodes:[],layoutPositionCacheByMode:e.layoutPositionCacheByMode??null}).layoutPositionsForMode;return!x||Object.keys(x).length===0?null:x}export{Pt as a,gr as b,pr as c,vr as d,ge as e,mr as p,yr as r};
