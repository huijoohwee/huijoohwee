import * as THREE from "three";
import { loadBoardCached } from "./utils/boardCache.js";
import { disposeObject3D } from "./utils/disposeThree.js";

/**
 * Singabldr (rebundled source).
 *
 * Focus:
 * - Voxel/grid granularity tuning with LOD + chunking (coarse-first → fine).
 * - Accurate coastline polygons (already in board JSON) including nearby MY/ID.
 * - Render-churn suppression: time-sliced build, coalesced rebuilds, no hot loops.
 *
 * Notes:
 * - The HTML UI is still served from `content/singabldr/index.html`.
 * - This module only owns the 3D canvas + core board loading loop.
 */

const DEFAULT_BOARD_FILE = "singabldr.board.v2.json";

const MS_PER_SLICE_BUDGET = 10;
const COARSE_MULTIPLIER = 2;

const LOD_DISTANCE_FINE_IN = 520;
const LOD_DISTANCE_FINE_OUT = 640;
const boardDerivedSelectorCache = new WeakMap();
const SCHEDULER_KEYS = Object.freeze({
  STATUS: "status:update",
  BOARD_REBUILD: "board:rebuild",
  FINE_BUILD_PREFIX: "build:fine",
});
const coalescedState = new Map();
let lastStatusSignature = "";

function nowMs() {
  return typeof performance !== "undefined" && performance ? performance.now() : Date.now();
}

function safe(fn) {
  try {
    return fn();
  } catch {
    return undefined;
  }
}

function coalesce(key, fn) {
  const k = String(key || "default");
  const usedSharedScheduler = safe(() => {
    if (typeof window.__SINGABLDR_COALESCE === "function") {
      window.__SINGABLDR_COALESCE(k, fn);
      return true;
    }
    return false;
  });
  if (usedSharedScheduler) return;
  Promise.resolve().then(fn);
}

function coalesceBySignature(key, signature, fn) {
  const k = String(key || "default");
  const sig = String(signature || "");
  const token = { signature: sig };
  coalescedState.set(k, token);
  coalesce(k, () => {
    const current = coalescedState.get(k);
    if (current !== token) return;
    coalescedState.delete(k);
    fn();
  });
}

function setStatus(title, subtitle) {
  const nextTitle = String(title || "");
  const nextSubtitle = String(subtitle || "");
  const signature = `${nextTitle}\u0000${nextSubtitle}`;
  if (signature === lastStatusSignature) return;
  lastStatusSignature = signature;
  coalesceBySignature(SCHEDULER_KEYS.STATUS, signature, () => {
    safe(() => {
      const titleEl = document.getElementById("game-title");
      if (titleEl && titleEl.textContent !== nextTitle) titleEl.textContent = nextTitle;
    });
    safe(() => {
      const subEl = document.getElementById("game-subtitle");
      if (subEl && subEl.textContent !== nextSubtitle) subEl.textContent = nextSubtitle;
    });
  });
}

function normalizeUrl(u) {
  return new URL(String(u), window.location.href).toString();
}

function getSelectedBoardFile() {
  // Compatibility with existing HTML.
  const select = safe(() => document.getElementById("board-select"));
  const selected = safe(() => (select ? String(select.value || "").trim() : ""));
  return selected || DEFAULT_BOARD_FILE;
}

function wireBoardSelectReload() {
  const select = safe(() => document.getElementById("board-select"));
  if (!select) return;
  let lastChangeAt = 0;
  select.addEventListener("change", () => {
    const now = nowMs();
    if (now - lastChangeAt < 120) return;
    lastChangeAt = now;
    try {
      if (window.__SINGABLDR_BOARD_SWITCH_MODE === "inplace") {
        if (typeof window.__SINGABLDR_REQUEST_BOARD_REBUILD === "function") {
          window.__SINGABLDR_REQUEST_BOARD_REBUILD();
          return;
        }
      }
    } catch {}
    try {
      window.location.reload();
    } catch {}
  });
}

function polygonBounds(poly) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i];
    if (!p || p.length < 2) continue;
    const x = Number(p[0]);
    const y = Number(p[1]);
    if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  if (!Number.isFinite(minX)) return null;
  return { minX, minY, maxX, maxY };
}

// Ray-casting point-in-polygon (lon/lat space).
function pointInPolygon(x, y, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0];
    const yi = poly[i][1];
    const xj = poly[j][0];
    const yj = poly[j][1];
    const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi + 0.0) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function makePolygonTester(polygonsRaw) {
  const polys = Array.isArray(polygonsRaw) ? polygonsRaw : [];
  const compiled = [];
  for (const poly of polys) {
    if (!Array.isArray(poly) || poly.length < 3) continue;
    const bounds = polygonBounds(poly);
    if (!bounds) continue;
    compiled.push({ poly, bounds });
  }
  return function isLand(lon, lat) {
    for (let i = 0; i < compiled.length; i++) {
      const c = compiled[i];
      const b = c.bounds;
      if (lon < b.minX || lon > b.maxX || lat < b.minY || lat > b.maxY) continue;
      if (pointInPolygon(lon, lat, c.poly)) return true;
    }
    return false;
  };
}

function makeLonLatProjector(bounds, cols, rows) {
  const lonSpan = bounds.maxLon - bounds.minLon;
  const latSpan = bounds.maxLat - bounds.minLat;
  return {
    gridToLonLat(ix, iy) {
      const lon = bounds.minLon + ((ix + 0.5) / cols) * lonSpan;
      const lat = bounds.minLat + ((iy + 0.5) / rows) * latSpan;
      return { lon, lat };
    },
    lonLatToWorld(lon, lat, voxelSize) {
      const nx = (lon - bounds.minLon) / lonSpan; // 0..1
      const ny = (lat - bounds.minLat) / latSpan; // 0..1
      const x = (nx - 0.5) * cols * voxelSize;
      const z = (ny - 0.5) * rows * voxelSize;
      return { x, z };
    },
  };
}

function selectBoardDerived(board) {
  const cached = safe(() => boardDerivedSelectorCache.get(board));
  if (cached) return cached;
  const bounds = computeBoundsFromBoard(board);
  const grid = getGridFromBoard(board);
  const polygons = Array.isArray(board?.scene?.polygons) ? board.scene.polygons : [];
  const features = Array.isArray(board?.features) ? board.features : [];
  const next = {
    bounds,
    grid,
    polygons,
    features,
    polygonTester: makePolygonTester(polygons),
    buildGridCache: new Map(),
    poiWorldPositionsCache: new Map(),
  };
  safe(() => {
    boardDerivedSelectorCache.set(board, next);
  });
  return next;
}

function buildSelectorCacheKey(width, height, voxelSize) {
  const w = Number(width);
  const h = Number(height);
  const v = Number(voxelSize);
  return `${w}:${h}:${v}`;
}

function selectBuildGrid(derived, voxelSize) {
  const key = buildSelectorCacheKey(derived.grid.width, derived.grid.height, voxelSize);
  const cached = derived.buildGridCache.get(key);
  if (cached) return cached;
  const cols = Math.max(1, Math.floor(derived.grid.width / voxelSize));
  const rows = Math.max(1, Math.floor(derived.grid.height / voxelSize));
  const proj = makeLonLatProjector(derived.bounds, cols, rows);
  const lonByCol = new Float64Array(cols);
  const latByRow = new Float64Array(rows);
  const xByCol = new Float32Array(cols);
  const zByRow = new Float32Array(rows);
  for (let ix = 0; ix < cols; ix++) {
    lonByCol[ix] = derived.bounds.minLon + ((ix + 0.5) / cols) * (derived.bounds.maxLon - derived.bounds.minLon);
    xByCol[ix] = (ix - cols / 2) * voxelSize;
  }
  for (let iy = 0; iy < rows; iy++) {
    latByRow[iy] = derived.bounds.minLat + ((iy + 0.5) / rows) * (derived.bounds.maxLat - derived.bounds.minLat);
    zByRow[iy] = (iy - rows / 2) * voxelSize;
  }
  const next = {
    cols,
    rows,
    max: cols * rows,
    proj,
    lonByCol,
    latByRow,
    xByCol,
    zByRow,
  };
  derived.buildGridCache.set(key, next);
  return next;
}

function selectPoiWorldPositions(derived, voxelSize) {
  const key = String(voxelSize);
  const cached = derived.poiWorldPositionsCache.get(key);
  if (cached) return cached;
  const { proj } = selectBuildGrid(derived, voxelSize);
  const out = [];
  for (const f of derived.features) {
    const coords = f?.geometry?.coordinates;
    if (!Array.isArray(coords) || coords.length < 2) continue;
    const lon = Number(coords[0]);
    const lat = Number(coords[1]);
    if (!Number.isFinite(lon) || !Number.isFinite(lat)) continue;
    const { x, z } = proj.lonLatToWorld(lon, lat, voxelSize);
    out.push({ x, z });
  }
  derived.poiWorldPositionsCache.set(key, out);
  return out;
}

function createRenderer() {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.position = "fixed";
  renderer.domElement.style.inset = "0";
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.style.zIndex = "0";
  renderer.domElement.style.display = "block";
  renderer.domElement.style.background = "transparent";
  document.body.appendChild(renderer.domElement);
  return renderer;
}

function createCamera() {
  const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 5000);
  camera.position.set(420, 520, 420);
  camera.lookAt(0, 0, 0);
  return camera;
}

function createScene() {
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0a0a, 0.0008);
  return scene;
}

function setupLights(scene) {
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const dir = new THREE.DirectionalLight(0xffffff, 0.45);
  dir.position.set(300, 600, 150);
  scene.add(dir);
}

function createCameraRig(camera, domEl, { onChange } = {}) {
  const state = {
    target: new THREE.Vector3(0, 0, 0),
    distance: 920,
    yaw: -Math.PI / 4,
    pitch: Math.PI / 3.2,
    dragging: false,
    lastX: 0,
    lastY: 0,
  };

  function apply() {
    const cx = Math.cos(state.yaw);
    const sx = Math.sin(state.yaw);
    const cp = Math.cos(state.pitch);
    const sp = Math.sin(state.pitch);
    const x = state.target.x + state.distance * cp * cx;
    const z = state.target.z + state.distance * cp * sx;
    const y = state.target.y + state.distance * sp;
    camera.position.set(x, y, z);
    camera.lookAt(state.target);
    try {
      onChange?.();
    } catch {}
  }

  function clamp() {
    state.distance = Math.min(Math.max(state.distance, 200), 2000);
    state.pitch = Math.min(Math.max(state.pitch, 0.55), 1.35);
  }

  function pan(dx, dy) {
    // Pan on XZ plane; scale by distance so drag feels consistent.
    const scale = state.distance / 900;
    const panSpeed = 0.9 * scale;
    const right = new THREE.Vector3(Math.cos(state.yaw + Math.PI / 2), 0, Math.sin(state.yaw + Math.PI / 2));
    const forward = new THREE.Vector3(Math.cos(state.yaw), 0, Math.sin(state.yaw));
    state.target.addScaledVector(right, -dx * panSpeed);
    state.target.addScaledVector(forward, dy * panSpeed);
  }

  domEl.addEventListener(
    "wheel",
    (ev) => {
    ev.preventDefault();
    const delta = Math.sign(ev.deltaY);
    state.distance *= delta > 0 ? 1.08 : 0.92;
    clamp();
    apply();
    },
    { passive: false },
  );

  domEl.addEventListener("pointerdown", (ev) => {
    state.dragging = true;
    state.lastX = ev.clientX;
    state.lastY = ev.clientY;
    domEl.setPointerCapture?.(ev.pointerId);
  });

  domEl.addEventListener("pointermove", (ev) => {
    if (!state.dragging) return;
    const dx = ev.clientX - state.lastX;
    const dy = ev.clientY - state.lastY;
    state.lastX = ev.clientX;
    state.lastY = ev.clientY;
    pan(dx, dy);
    apply();
  });

  domEl.addEventListener("pointerup", () => {
    state.dragging = false;
  });
  domEl.addEventListener("pointercancel", () => {
    state.dragging = false;
  });

  clamp();
  apply();
  return {
    get distance() {
      return state.distance;
    },
    setTarget(x, z) {
      state.target.x = x;
      state.target.z = z;
      apply();
    },
  };
}

function createLandMaterial() {
  return new THREE.MeshStandardMaterial({
    color: 0x00cec9,
    metalness: 0.18,
    roughness: 0.55,
    emissive: 0x001a1a,
    emissiveIntensity: 0.9,
  });
}

async function buildLandInstancedMesh({
  name,
  boardDerived,
  voxelSize,
  color,
  onProgress,
  signal,
}) {
  const grid = selectBuildGrid(boardDerived, voxelSize);
  const cols = grid.cols;
  const rows = grid.rows;
  const max = grid.max;
  const proj = grid.proj;
  const isLand = boardDerived.polygonTester;

  const geometry = new THREE.BoxGeometry(voxelSize, voxelSize * 1.6, voxelSize);
  const material = createLandMaterial();
  if (color) material.color = new THREE.Color(color);

  const mesh = new THREE.InstancedMesh(geometry, material, max);
  mesh.name = name;
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.count = 0;

  const dispose = () => {
    try {
      mesh.geometry?.dispose?.();
    } catch {}
    try {
      const m = mesh.material;
      if (Array.isArray(m)) m.forEach((x) => x?.dispose?.());
      else m?.dispose?.();
    } catch {}
  };

  const dummy = new THREE.Object3D();
  let count = 0;
  let processed = 0;
  const started = nowMs();

  try {
    for (let iy = 0; iy < rows; iy++) {
      let sliceStart = nowMs();
      for (let ix = 0; ix < cols; ix++) {
        if (signal?.aborted) throw new Error("aborted");

        const lon = grid.lonByCol[ix];
        const lat = grid.latByRow[iy];
        if (!isLand(lon, lat)) {
          processed++;
          continue;
        }

        const x = grid.xByCol[ix];
        const z = grid.zByRow[iy];
        dummy.position.set(x, voxelSize * 0.5, z);
        dummy.updateMatrix();
        mesh.setMatrixAt(count, dummy.matrix);
        count++;
        processed++;

        // time-slice within the row too (helps on large grids)
        if (nowMs() - sliceStart > MS_PER_SLICE_BUDGET) {
          mesh.count = count;
          mesh.instanceMatrix.needsUpdate = true;
          onProgress?.({
            phase: name,
            processed,
            total: max,
            visible: count,
            elapsedMs: Math.round(nowMs() - started),
          });
          await new Promise((r) => requestAnimationFrame(r));
          sliceStart = nowMs();
        }
      }

      if (nowMs() - sliceStart > MS_PER_SLICE_BUDGET) {
        mesh.count = count;
        mesh.instanceMatrix.needsUpdate = true;
        onProgress?.({
          phase: name,
          processed,
          total: max,
          visible: count,
          elapsedMs: Math.round(nowMs() - started),
        });
        await new Promise((r) => requestAnimationFrame(r));
      }
    }

    mesh.count = count;
    mesh.instanceMatrix.needsUpdate = true;
    onProgress?.({
      phase: name,
      processed: max,
      total: max,
      visible: count,
      elapsedMs: Math.round(nowMs() - started),
      done: true,
    });
    return { mesh, cols, rows, proj };
  } catch (e) {
    dispose();
    throw e;
  }
}

function buildPoiMarkers(features, voxelSize) {
  const group = new THREE.Group();
  group.name = "poi";

  const geom = new THREE.SphereGeometry(voxelSize * 0.9, 16, 16);
  const mat = new THREE.MeshStandardMaterial({ color: 0xff4757, emissive: 0x220000, emissiveIntensity: 0.6 });

  for (const p of features || []) {
    const x = Number(p?.x);
    const z = Number(p?.z);
    if (!Number.isFinite(x) || !Number.isFinite(z)) continue;
    const m = new THREE.Mesh(geom, mat);
    m.position.set(x, voxelSize * 2.0, z);
    group.add(m);
  }
  return group;
}

function computeBoundsFromBoard(board) {
  const b = board?.scene?.bounds;
  const minLon = Number(b?.minLon);
  const maxLon = Number(b?.maxLon);
  const minLat = Number(b?.minLat);
  const maxLat = Number(b?.maxLat);
  if (![minLon, maxLon, minLat, maxLat].every(Number.isFinite)) {
    throw new Error("invalid_bounds");
  }
  return { minLon, maxLon, minLat, maxLat };
}

function getGridFromBoard(board) {
  const g = board?.scene?.grid;
  const width = Number(g?.width);
  const height = Number(g?.height);
  const voxelSize = Number(g?.voxelSize);
  if (![width, height, voxelSize].every(Number.isFinite)) throw new Error("invalid_grid");
  return { width, height, voxelSize };
}

function makeAbortController() {
  try {
    return new AbortController();
  } catch {
    return null;
  }
}

async function main() {
  wireBoardSelectReload();

  setStatus("Loading…", "Fetching board data");

  const renderer = createRenderer();
  const camera = createCamera();
  const scene = createScene();
  setupLights(scene);

  // Render-on-demand scheduler: avoid a hot 60fps loop when the scene is idle.
  let renderScheduled = false;
  let forceContinuous = false;
  let lastInteractionAt = 0;

  function requestRender(mode) {
    if (mode === "continuous") {
      forceContinuous = true;
      lastInteractionAt = nowMs();
    }
    coalesceBySignature("render", String(forceContinuous), () => {
      if (renderScheduled) return;
      renderScheduled = true;
      requestAnimationFrame((ts) => {
        renderScheduled = false;
        // LOD visibility can change as distance crosses thresholds.
        updateLodVisibility();
        renderer.render(scene, camera);
        if (forceContinuous) requestRender("continuous");
      });
    });
  }

  const rig = createCameraRig(camera, renderer.domElement, {
    onChange: () => requestRender("continuous"),
  });

  let activeLod = "coarse";
  let coarse = null;
  let fine = null;
  let poi = null;

  /** @type {AbortController | null} */
  let activeAbort = null;
  let buildToken = 0;
  let runtimeSubscriptionsBound = false;
  let lastProgressSignature = "";
  let lastProgressFlushAt = 0;

  function abortActiveWork() {
    try {
      activeAbort?.abort?.();
    } catch {}
    activeAbort = makeAbortController();
    return activeAbort ? activeAbort.signal : null;
  }

  function cleanupScene() {
    if (coarse?.group) {
      try {
        scene.remove(coarse.group);
      } catch {}
      disposeObject3D(coarse.group);
    }
    if (fine?.group) {
      try {
        scene.remove(fine.group);
      } catch {}
      disposeObject3D(fine.group);
    }
    if (poi) {
      try {
        scene.remove(poi);
      } catch {}
      disposeObject3D(poi);
    }
    coarse = null;
    fine = null;
    poi = null;
    activeLod = "coarse";
  }

  function updateLodVisibility() {
    const d = rig.distance;
    const wantFine = activeLod === "fine" ? d < LOD_DISTANCE_FINE_OUT : d < LOD_DISTANCE_FINE_IN;
    const next = wantFine && fine ? "fine" : "coarse";
    if (next === activeLod) return;
    activeLod = next;
    if (coarse?.group) coarse.group.visible = activeLod === "coarse";
    if (fine?.group) fine.group.visible = activeLod === "fine";
    requestRender();
  }

  function onProgress(p) {
    const pct = p.total ? Math.round((p.processed / p.total) * 100) : 0;
    const signature = `${String(p.phase || "")}|${pct}|${Number(p.visible || 0)}|${Boolean(p.done)}`;
    const now = nowMs();
    if (!p.done && signature === lastProgressSignature && now - lastProgressFlushAt < 120) return;
    if (!p.done && now - lastProgressFlushAt < 66) return;
    lastProgressSignature = signature;
    lastProgressFlushAt = now;
    setStatus("Generating Voxels…", `${p.phase} • ${pct}% • visible=${p.visible ?? 0} • ${p.elapsedMs ?? 0}ms`);
    requestRender();
  }

  async function loadAndBuildBoard() {
    const token = ++buildToken;
    const file = getSelectedBoardFile();

    cleanupScene();
    const signal = abortActiveWork();

    setStatus("Loading…", `Fetching board data (${file})`);

    const board = await loadBoardCached({ file, signal });
    if (token !== buildToken) throw new Error("stale_build");

    const boardDerived = selectBoardDerived(board);
    const bounds = boardDerived.bounds;
    const grid = boardDerived.grid;

    setStatus("Generating Voxels…", "coarse (fast start)");
    const coarseVoxel = grid.voxelSize * COARSE_MULTIPLIER;

    const coarseBuild = await buildLandInstancedMesh({ name: "coarse", boardDerived, voxelSize: coarseVoxel, color: 0x00cec9, onProgress, signal });
    if (token !== buildToken) throw new Error("stale_build");

    coarse = { voxelSize: coarseVoxel, proj: coarseBuild.proj, group: new THREE.Group() };
    coarse.group.add(coarseBuild.mesh);
    scene.add(coarse.group);

    poi = buildPoiMarkers(selectPoiWorldPositions(boardDerived, coarseVoxel), coarseVoxel);
    scene.add(poi);

    const midLon = (bounds.minLon + bounds.maxLon) / 2;
    const midLat = (bounds.minLat + bounds.maxLat) / 2;
    const mid = coarseBuild.proj.lonLatToWorld(midLon, midLat, coarseVoxel);
    rig.setTarget(mid.x, mid.z);

    setStatus("Generating Voxels…", "fine (building in background)");
    const fineVoxel = grid.voxelSize;

    coalesceBySignature(`${SCHEDULER_KEYS.FINE_BUILD_PREFIX}:${file}`, String(fineVoxel), async () => {
      try {
        const fineBuild = await buildLandInstancedMesh({ name: "fine", boardDerived, voxelSize: fineVoxel, color: 0x0984e3, onProgress, signal });
        if (token !== buildToken) return;
        fine = { voxelSize: fineVoxel, proj: fineBuild.proj, group: new THREE.Group() };
        fine.group.add(fineBuild.mesh);
        fine.group.visible = false;
        scene.add(fine.group);
        setStatus(board?.name || "Singabldr", board?.subtitle || "Geospatial Voxel World");
      } catch (e) {
        if (token !== buildToken) return;
        setStatus("Singabldr", "Fine LOD build failed; using coarse.");
        // eslint-disable-next-line no-console
        console.warn("fine build failed", e);
      }
    });
  }

  function requestBoardRebuild() {
    const boardFile = getSelectedBoardFile();
    coalesceBySignature(SCHEDULER_KEYS.BOARD_REBUILD, boardFile, () => {
      void loadAndBuildBoard().catch((e) => {
        setStatus("Error", e instanceof Error ? e.message : "failed_to_rebuild");
      });
    });
  }

  try {
    await loadAndBuildBoard();
  } catch (e) {
    setStatus("Error", e instanceof Error ? e.message : "failed_to_init");
    // eslint-disable-next-line no-console
    console.error(e);
    abortActiveWork();
  }

  safe(() => {
    if (runtimeSubscriptionsBound) return;
    runtimeSubscriptionsBound = true;
    window.__SINGABLDR_REQUEST_BOARD_REBUILD = requestBoardRebuild;
  });

  // Initial render.
  requestRender();

  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    requestRender();
  });

  // Stop continuous rendering shortly after interactions settle (prevents "stuck continuous" mode).
  setInterval(() => {
    if (!forceContinuous) return;
    const idleMs = nowMs() - lastInteractionAt;
    if (idleMs > 180) forceContinuous = false;
  }, 120);
}

main();
