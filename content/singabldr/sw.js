/* Singabldr service worker (SSOT)
 * Goals:
 * - Prevent "non-apparent" visual updates caused by stale SW caches.
 * - Never ignore URL search params (cache-busting ?v= must work).
 * - Keep behavior simple + predictable (Lean/MVP).
 */
/* eslint-disable no-restricted-globals */
(function singabldrServiceWorker() {
  "use strict";

  var CACHE_VERSION = "20260504-2";
  var CACHE_PREFIX = "singabldr-pwa";
  var CACHE_NAME = CACHE_PREFIX + ":static:" + CACHE_VERSION;

  function safe(fn) {
    try {
      return fn();
    } catch {
      return undefined;
    }
  }

  function isSameOrigin(url) {
    return safe(function () {
      return new URL(url).origin === self.location.origin;
    }) === true;
  }

  function isHtmlRequest(request) {
    return (
      request.mode === "navigate" ||
      (request.headers && String(request.headers.get("accept") || "").indexOf("text/html") >= 0)
    );
  }

  function shouldCacheRequest(request) {
    if (!request) return false;
    if (request.method !== "GET") return false;
    if (!isSameOrigin(request.url)) return false;
    return true;
  }

  function cachePut(cache, request, response) {
    if (!cache || !request || !response) return Promise.resolve();
    // Only cache successful, basic responses.
    if (!response.ok) return Promise.resolve();
    if (response.type !== "basic") return Promise.resolve();
    return cache.put(request, response);
  }

  self.addEventListener("install", function (event) {
    event.waitUntil(
      safe(function () {
        // Do not pre-cache hashed app chunks here (handled by runtime caching).
        // Keep the core shell available offline.
        return caches
          .open(CACHE_NAME)
          .then(function (cache) {
            return cache.addAll([
              "./",
              "./index.html",
              "./manifest.webmanifest",
              "./assets/boot-pwa.js",
              "./assets/boot-widget-mode.js",
              "./assets/boot-flowinfish-chat-guard.js",
              "./assets/boot-mobility-preset.js",
              "./assets/overrides.css",
            ]);
          })
          .then(function () {
            return self.skipWaiting();
          });
      }),
    );
  });

  self.addEventListener("activate", function (event) {
    event.waitUntil(
      caches
        .keys()
        .then(function (keys) {
          return Promise.all(
            (keys || []).map(function (key) {
              if (!key || key === CACHE_NAME) return Promise.resolve(false);
              if (String(key).indexOf(CACHE_PREFIX + ":") !== 0) return Promise.resolve(false);
              return caches.delete(key);
            }),
          );
        })
        .then(function () {
          return self.clients.claim();
        }),
    );
  });

  self.addEventListener("message", function (event) {
    var data = event && event.data ? event.data : null;
    if (!data) return;
    if (data === "SKIP_WAITING" || (data && data.type === "SKIP_WAITING")) {
      safe(function () {
        self.skipWaiting();
      });
    }
  });

  self.addEventListener("fetch", function (event) {
    var request = event.request;
    if (!shouldCacheRequest(request)) return;

    if (isHtmlRequest(request)) {
      // Navigation: network-first (fresh), fallback to cache when offline.
      event.respondWith(
        fetch(request)
          .then(function (response) {
            return caches.open(CACHE_NAME).then(function (cache) {
              return cachePut(cache, request, response.clone()).then(function () {
                return response;
              });
            });
          })
          .catch(function () {
            return caches.match(request);
          }),
      );
      return;
    }

    // Assets: stale-while-revalidate, but NEVER ignore search params.
    event.respondWith(
      caches.open(CACHE_NAME).then(function (cache) {
        return cache.match(request).then(function (cached) {
          var network = fetch(request)
            .then(function (response) {
              return cachePut(cache, request, response.clone()).then(function () {
                return response;
              });
            })
            .catch(function () {
              return cached;
            });
          return cached || network;
        });
      }),
    );
  });
})();
