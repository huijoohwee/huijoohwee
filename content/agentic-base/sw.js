const CACHE = 'agentic-base-route-ce6d913453bf3f3d8d8db32e611ae38e5bc183b2';
const ASSETS = [
  "./",
  "./index.html",
  "./app.mjs?v=5",
  "./styles.css?v=5",
  "./manifest.webmanifest",
  "./src/adapters/indexeddb.mjs",
  "./src/adapters/memory.mjs",
  "./src/engine.mjs",
  "./src/errors.mjs",
  "./src/index.mjs",
  "./src/projectors.mjs",
  "./src/query.mjs",
  "./src/schema.mjs"
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('agentic-base-') && key !== CACHE)
    .map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(request).then(cached => cached ?? fetch(request)));
});
