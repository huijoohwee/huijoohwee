const VERSION = "20260413-1";
const SHELL_CACHE = `singabldr-shell-${VERSION}`;
const RUNTIME_CACHE = `singabldr-runtime-${VERSION}`;
const IMMUTABLE_CACHE = `singabldr-immutable-${VERSION}`;

const CORE_URLS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./favicon.ico",
  "./assets/boot.js",
  "./assets/boot-perf-ui.js",
  "./assets/boot-pwa.js",
  "./assets/boot-history.js",
  "./assets/boot-script.js",
  "./assets/boot-sim-engine.js",
  "./assets/overrides.css",
  "./assets/styles-c7d1dd9b.css",
  "./assets/app-F2P7J5VB.js",
  "./boards/singabldr.board.v2.json",
  "./boards/singabldr.assets.v2.json",
  "./boards/singabldr.elements.v2.json",
  "./script-0000.json",
  "./script-singabuildr-0000.v2.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then(async (cache) => {
      const requests = CORE_URLS.map((url) =>
        fetch(new Request(url, { cache: "no-cache" }))
          .then((response) => {
            if (response && response.ok) {
              return cache.put(url, response);
            }
            return undefined;
          })
          .catch(() => undefined),
      );
      await Promise.allSettled(requests);
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key === SHELL_CACHE || key === RUNTIME_CACHE || key === IMMUTABLE_CACHE) return undefined;
          if (!key.startsWith("singabldr-")) return undefined;
          return caches.delete(key);
        }),
      ),
    ),
  );
  self.clients.claim();
});

function isNavigationRequest(request) {
  return request.mode === "navigate" || request.destination === "document";
}

function isImmutableAsset(url) {
  return url.pathname.indexOf("/assets/") >= 0 && !url.pathname.endsWith("/boot.js") && !url.pathname.endsWith("/boot-pwa.js");
}

function isRuntimeJson(url) {
  return url.pathname.indexOf("/boards/") >= 0 || /\/script-[^/]+\.json$/.test(url.pathname) || url.pathname.endsWith("/manifest.webmanifest");
}

async function networkFirst(request, cacheName, fallbackKey) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = (await cache.match(request)) || (fallbackKey ? await cache.match(fallbackKey) : undefined);
    if (cached) return cached;
    throw new Error("offline");
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response && response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => undefined);
  return cached || fetchPromise;
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (isNavigationRequest(request)) {
    event.respondWith(networkFirst(request, SHELL_CACHE, "./index.html"));
    return;
  }

  if (isImmutableAsset(url)) {
    event.respondWith(staleWhileRevalidate(request, IMMUTABLE_CACHE));
    return;
  }

  if (isRuntimeJson(url)) {
    event.respondWith(networkFirst(request, RUNTIME_CACHE));
    return;
  }

  if (url.pathname.endsWith("/sw.js")) {
    event.respondWith(fetch(request, { cache: "no-cache" }));
  }
});
