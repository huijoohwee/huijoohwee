/* Singabldr SimEngine (local-only, CSP-safe, no external backends). */
(function singabldrSimEngine() {
  "use strict";

  /** @param {() => void} fn */
  function safe(fn) {
    try {
      fn();
    } catch {
      // never block app init
    }
  }

  /** @param {string} key @param {() => void} fn */
  function coalesce(key, fn) {
    try {
      if (typeof window.__SINGABLDR_COALESCE === "function") {
        window.__SINGABLDR_COALESCE(String(key || "default"), fn);
        return;
      }
    } catch {}
    Promise.resolve().then(fn);
  }

  /** @param {string} key @param {() => void} fn @param {number} waitMs */
  function throttle(key, fn, waitMs) {
    try {
      if (typeof window.__SINGABLDR_THROTTLE === "function") {
        window.__SINGABLDR_THROTTLE(String(key || "default"), fn, waitMs);
        return;
      }
    } catch {}
    coalesce("throttle:fallback:" + String(key || "default"), fn);
  }

  const LS_KEY_STATE = "singabldr.sim.local.v1";
  const LS_KEY_TICK_SECONDS = "singabldr.sim.tickSeconds";

  function nowMs() {
    return Date.now();
  }

  function getEl(id) {
    try {
      return document.getElementById(id);
    } catch {
      return null;
    }
  }

  function readJsonLs(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : fallback;
    } catch {
      return fallback;
    }
  }

  function writeJsonLs(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }

  function clampInt(n, min, max) {
    const v = Math.floor(Number(n || 0));
    if (!Number.isFinite(v)) return min;
    return Math.min(max, Math.max(min, v));
  }

  function normalizeApiBase() {
    try {
      const raw = String(window.__API_BASE || window.location.origin || "").trim();
      return raw.replace(/\/+$/, "");
    } catch {
      return "";
    }
  }

  function normalizeUrl(u) {
    try {
      return new URL(String(u), window.location.href).toString();
    } catch {
      return String(u || "");
    }
  }

  function parseLocalSimUrl(url) {
    const u = String(url || "");
    const apiBase = normalizeApiBase();
    const prefix = apiBase ? apiBase : "";
    const full = normalizeUrl(u);

    const marker = "/api/mirofish/simulations/";
    const idx = full.indexOf(marker);
    if (idx < 0) return null;

    const after = full.slice(idx + marker.length);
    const m = after.match(/^([^/?#]+)\/(start|stop|stream)(\?|#|$)/i);
    if (!m) return null;

    const simulationId = decodeURIComponent(m[1] || "").slice(0, 128);
    const verb = String(m[2] || "").toLowerCase();

    // Ensure it is same-origin to avoid being used as a generic URL parser.
    if (apiBase && full.indexOf(prefix) !== 0) return null;
    return { simulationId, verb, fullUrl: full };
  }

  function makeJsonResponse(obj, status) {
    return new Response(JSON.stringify(obj), {
      status: status || 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  }

  function safeRandomInt(maxExclusive) {
    const m = Math.max(1, Math.floor(Number(maxExclusive || 1)));
    try {
      const buf = new Uint32Array(1);
      crypto.getRandomValues(buf);
      return Number(buf[0] % m);
    } catch {
      return Math.floor(Math.random() * m);
    }
  }

  function hashSeed(text) {
    const s = String(text || "");
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function seededPick(seed, arr) {
    const a = Array.isArray(arr) ? arr : [];
    if (!a.length) return null;
    const idx = seed % a.length;
    return a[idx];
  }

  /** @type {Map<string, {running:boolean, startedAt:number, platform:string, seq:number, maxSeq:number, stoppedAt:number}>} */
  const simState = new Map();

  function getOrInitSim(simulationId) {
    const sid = String(simulationId || "").trim();
    if (!sid) return null;
    let st = simState.get(sid) || null;
    if (!st) {
      st = { running: false, startedAt: 0, platform: "local", seq: 0, maxSeq: 14, stoppedAt: 0 };
      simState.set(sid, st);
    }
    return st;
  }

  function startSim(simulationId, { platform = "local" } = {}) {
    const st = getOrInitSim(simulationId);
    if (!st) return false;
    st.running = true;
    st.platform = String(platform || "local").slice(0, 16) || "local";
    st.startedAt = nowMs();
    st.stoppedAt = 0;
    st.seq = 0;
    st.maxSeq = 10 + safeRandomInt(10);
    persistUiState({ simulationId: simulationId, running: true });
    return true;
  }

  function stopSim(simulationId) {
    const st = getOrInitSim(simulationId);
    if (!st) return false;
    st.running = false;
    st.stoppedAt = nowMs();
    persistUiState({ simulationId: simulationId, running: false });
    return true;
  }

  function nextAction(simulationId) {
    const st = getOrInitSim(simulationId);
    if (!st) return null;
    const seed = hashSeed(simulationId + ":" + String(st.seq));
    const who = seededPick(seed, ["citizen:alpha", "citizen:beta", "citizen:gamma", "agent:delta"]) || "agent";
    const typ = seededPick(seed >>> 1, ["MOVE", "BUILD", "TRADE", "WEATHER", "THEME", "ROLL"]) || "ACTION";
    const place = seededPick(seed >>> 2, ["Jurong", "Tampines", "Woodlands", "Punggol", "Bugis", "CBD"]) || "Singapore";
    const mood = seededPick(seed >>> 3, ["happy", "neutral", "calm"]) || "neutral";
    const result = seededPick(seed >>> 4, [
      `moved to ${place}`,
      `built near ${place}`,
      `traded resources (${mood})`,
      `weather shifted (${mood})`,
      `theme updated (${mood})`,
      `rolled ${1 + (seed % 6)}`,
    ]);

    st.seq += 1;
    return {
      platform: st.platform || "local",
      agent_id: st.seq,
      agent_name: who,
      action_type: typ,
      action_args: { place, mood },
      result,
      ts: nowMs(),
    };
  }

  // -----------------------------
  // EventSource shim (local stream)
  // -----------------------------

  function createLocalEventSource(NativeEventSource, url) {
    const parsed = parseLocalSimUrl(url);
    if (!parsed || parsed.verb !== "stream") return null;

    const sid = String(parsed.simulationId || "").trim();
    if (!sid) return null;

    /** @type {Map<string, Set<(ev:any) => void>>} */
    const listeners = new Map();
    let closed = false;
    let intervalId = 0;

    const es = {
      url: String(url || ""),
      readyState: 0,
      onopen: null,
      onerror: null,
      onmessage: null,
      addEventListener(type, fn) {
        const t = String(type || "");
        if (!t || typeof fn !== "function") return;
        if (!listeners.has(t)) listeners.set(t, new Set());
        listeners.get(t).add(fn);
      },
      removeEventListener(type, fn) {
        const t = String(type || "");
        const set = listeners.get(t);
        if (!set) return;
        set.delete(fn);
      },
      close() {
        if (closed) return;
        closed = true;
        es.readyState = 2;
        try {
          if (intervalId) clearInterval(intervalId);
        } catch {}
      },
    };

    function dispatch(type, dataObj) {
      if (closed) return;
      const t = String(type || "");
      const data = JSON.stringify(dataObj || {});
      const ev = { type: t, data };
      try {
        if (t === "message" && typeof es.onmessage === "function") es.onmessage(ev);
      } catch {}
      try {
        const set = listeners.get(t);
        if (set) set.forEach((fn) => safe(() => fn(ev)));
      } catch {}
    }

    function open() {
      if (closed) return;
      es.readyState = 1;
      safe(() => typeof es.onopen === "function" && es.onopen({ type: "open" }));

      intervalId = setInterval(function () {
        if (closed) return;
        const st = getOrInitSim(sid);
        if (!st || !st.running) {
          dispatch("done", { ok: true, runner_status: "stopped", simulation_id: sid });
          es.close();
          return;
        }
        const action = nextAction(sid);
        if (action) dispatch("action", action);
        if (st.seq >= st.maxSeq) {
          dispatch("done", { ok: true, runner_status: "completed", simulation_id: sid, total: st.seq });
          es.close();
        }
      }, 850);
    }

    // Do not throw: always fail-closed to local shim.
    coalesce("localEventSource:open:" + sid, open);
    return es;
  }

  // -----------------------------
  // Fetch shim (local API)
  // -----------------------------

  function installLocalApiShim() {
    if (typeof window.fetch !== "function") return;
    const origFetch = window.fetch.bind(window);
    const NativeEventSource = typeof window.EventSource === "function" ? window.EventSource : null;

    window.fetch = function (input, init) {
      const url = normalizeUrl(typeof input === "string" ? input : input && input.url ? input.url : "");
      const parsed = parseLocalSimUrl(url);
      if (!parsed) return origFetch(input, init);

      if (parsed.verb === "start") {
        const ok = startSim(parsed.simulationId, { platform: "local" });
        return Promise.resolve(makeJsonResponse({ ok, simulation_id: parsed.simulationId, status: ok ? "running" : "invalid" }, ok ? 200 : 400));
      }
      if (parsed.verb === "stop") {
        const ok = stopSim(parsed.simulationId);
        return Promise.resolve(makeJsonResponse({ ok, simulation_id: parsed.simulationId, status: ok ? "stopped" : "invalid" }, ok ? 200 : 400));
      }

      // stream is handled by EventSource shim.
      return origFetch(input, init);
    };

    if (NativeEventSource) {
      window.EventSource = function (url, options) {
        const shim = createLocalEventSource(NativeEventSource, url);
        if (shim) return shim;
        // @ts-ignore
        return new NativeEventSource(url, options);
      };
      try {
        // Preserve prototype checks (best-effort).
        // @ts-ignore
        window.EventSource.prototype = NativeEventSource.prototype;
      } catch {}
    }
  }

  // -----------------------------
  // UI wiring (Settings → SimEngine)
  // -----------------------------

  function persistUiState({ simulationId, running }) {
    const current = readJsonLs(LS_KEY_STATE, { simulationId: "", running: false, updatedAt: 0 });
    const next = {
      ...current,
      simulationId: typeof simulationId === "string" ? simulationId : current.simulationId,
      running: typeof running === "boolean" ? running : current.running,
      updatedAt: nowMs(),
    };
    writeJsonLs(LS_KEY_STATE, next);
  }

  function setBadge(text, bg, fg) {
    const badge = getEl("simengine-badge");
    if (!badge) return;
    try {
      badge.textContent = String(text || "").slice(0, 24);
      if (bg) badge.style.background = String(bg);
      if (fg) badge.style.color = String(fg);
    } catch {}
  }

  function setPanelStatus(msg) {
    const el = getEl("simengine-status");
    if (!el) return;
    try {
      el.textContent = String(msg || "");
    } catch {}
  }

  function wireUi() {
    const enabledCb = getEl("simengine-enabled");
    const tickInput = getEl("simengine-tick-seconds");
    const legacyRemoteCb = getEl("simengine-use-deerflow");
    const simIdInput = getEl("simengine-mirofish-id");
    const startBtn = getEl("simengine-start-btn");
    const stopBtn = getEl("simengine-stop-btn");
    const resetBtn = getEl("simengine-reset-btn");

    if (!enabledCb || !tickInput || !legacyRemoteCb || !simIdInput || !startBtn || !stopBtn || !resetBtn) return;

    // Hide the legacy checkbox (kept only for DOM compatibility).
    try {
      legacyRemoteCb.checked = false;
      legacyRemoteCb.disabled = true;
      const label = legacyRemoteCb.closest("label");
      if (label) label.style.display = "none";
    } catch {}

    // Restore persisted state.
    const persisted = readJsonLs(LS_KEY_STATE, { simulationId: "sim_local", running: false });
    try {
      simIdInput.value = String(persisted.simulationId || "sim_local").slice(0, 64);
    } catch {}

    try {
      const tick = clampInt(localStorage.getItem(LS_KEY_TICK_SECONDS) || tickInput.value, 3, 60);
      tickInput.value = String(tick);
    } catch {}

    function getTickSeconds() {
      return clampInt(tickInput.value, 3, 60);
    }

    function getSimId() {
      const raw = String(simIdInput.value || "").trim().slice(0, 64);
      return raw || "sim_local";
    }

    function applyUiState() {
      const sid = getSimId();
      const st = getOrInitSim(sid);
      const running = !!(st && st.running);
      if (running) {
        setBadge("RUNNING", "#00b894", "#ffffff");
        setPanelStatus("Local simulation is running (stream via /mirofish …).");
      } else {
        setBadge("IDLE", "#dfe6e9", "#2d3436");
        setPanelStatus("Local simulation is idle.");
      }
    }

    enabledCb.addEventListener("change", function () {
      const on = !!enabledCb.checked;
      const sid = getSimId();
      if (on) startSim(sid, { platform: "local" });
      else stopSim(sid);
      persistUiState({ simulationId: sid, running: on });
      coalesce("simengine:applyUi", applyUiState);
    });

    tickInput.addEventListener("change", function () {
      const v = getTickSeconds();
      try {
        localStorage.setItem(LS_KEY_TICK_SECONDS, String(v));
      } catch {}
    });

    simIdInput.addEventListener(
      "input",
      function () {
        throttle(
          "persist:simengine:simId",
          function () {
            const sid = getSimId();
            persistUiState({ simulationId: sid, running: !!enabledCb.checked });
          },
          250
        );
      },
      { passive: true }
    );

    startBtn.addEventListener("click", function () {
      const sid = getSimId();
      enabledCb.checked = true;
      startSim(sid, { platform: "local" });
      persistUiState({ simulationId: sid, running: true });
      coalesce("simengine:applyUi", applyUiState);
    });

    stopBtn.addEventListener("click", function () {
      const sid = getSimId();
      enabledCb.checked = false;
      stopSim(sid);
      persistUiState({ simulationId: sid, running: false });
      coalesce("simengine:applyUi", applyUiState);
    });

    resetBtn.addEventListener("click", function () {
      const sid = getSimId();
      simState.delete(sid);
      enabledCb.checked = false;
      persistUiState({ simulationId: sid, running: false });
      coalesce("simengine:applyUi", applyUiState);
    });

    // Initial.
    coalesce("simengine:applyUi:init", applyUiState);
  }

  safe(installLocalApiShim);
  safe(function boot() {
    try {
      if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wireUi, { once: true });
      else wireUi();
    } catch {}
  });

  safe(function exposeDebug() {
    try {
      window.__SINGABLDR_LOCAL_SIM = {
        start: startSim,
        stop: stopSim,
        state: simState,
      };
    } catch {}
  });
})();

