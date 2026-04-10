const BOARD_CACHE_MAX = 3;
const EMPTY_JSON = Object.freeze({});

/** @type {Map<string, {at:number, json:any}>} */
const boardCache = new Map();
/** @type {Map<string, Promise<any>>} */
const inflight = new Map();

function normalizeUrl(rawUrl) {
  try {
    return new URL(String(rawUrl), window.location.href).toString();
  } catch {
    return String(rawUrl || "");
  }
}

function trim() {
  try {
    while (boardCache.size > BOARD_CACHE_MAX) {
      const oldestKey = boardCache.keys().next().value;
      if (!oldestKey) break;
      boardCache.delete(oldestKey);
    }
  } catch {}
}

export async function loadBoardCached({ file, signal }) {
  const url = normalizeUrl(`./boards/${file}`);

  const cached = boardCache.get(url);
  if (cached && cached.json) {
    // LRU touch
    boardCache.delete(url);
    boardCache.set(url, cached);
    return cached.json;
  }

  const pending = inflight.get(url);
  if (pending) return await pending;

  const p = (async () => {
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(`Failed to load board: ${file}`);
    const contentType = String(res.headers?.get?.("content-type") || "").toLowerCase();
    let json = EMPTY_JSON;
    if (contentType.includes("application/json")) {
      const parsed = await res.json();
      json = parsed && typeof parsed === "object" ? parsed : EMPTY_JSON;
    } else {
      const text = await res.text();
      if (text) {
        const parsed = JSON.parse(text);
        json = parsed && typeof parsed === "object" ? parsed : EMPTY_JSON;
      }
    }
    boardCache.set(url, { at: Date.now(), json });
    trim();
    return json;
  })().finally(() => inflight.delete(url));

  inflight.set(url, p);
  return await p;
}
