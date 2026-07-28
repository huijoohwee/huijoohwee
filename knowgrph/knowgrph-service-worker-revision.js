;(() => {
  const sourceRevision = "ca7f60a2d3df65a5e9c64980d494362dbb1e651b"
  const runtimeCacheNames = new Set(["kg-assets","kg-static","kg-data"])
  const isHtmlContentType = contentType =>
    /^(?:text\/html|application\/xhtml\+xml)(?:;|$)/i.test(String(contentType || '').trim())
  const pruneStaleRevisionEntries = async () => {
    const scopeUrl = new URL(self.registration.scope)
    const scopePath = scopeUrl.pathname
    const scopeRoot = scopePath.slice(0, -1)
    const assetRoot = scopePath + 'assets/'
    const expectedAssetPrefix = assetRoot + sourceRevision + '/'
    const staleEntries = []
    let expectedPrecacheReady = false

    for (const cacheName of await caches.keys()) {
      const cache = await caches.open(cacheName)
      const isKnowgrphOwnedCache = runtimeCacheNames.has(cacheName)
        || (cacheName.startsWith('workbox-precache') && cacheName.includes(scopeUrl.toString()))
      for (const request of await cache.keys()) {
        const requestUrl = new URL(request.url)
        if (requestUrl.origin !== scopeUrl.origin) continue
        const isScopedPath = requestUrl.pathname === scopeRoot
          || requestUrl.pathname.startsWith(scopePath)
        let isHtml = isScopedPath && (
          requestUrl.pathname === scopeRoot
          || requestUrl.pathname === scopePath
          || requestUrl.pathname.endsWith('.html')
        )
        let cachedResponse
        if (!isHtml && (isScopedPath || isKnowgrphOwnedCache)) {
          cachedResponse = await cache.match(request)
          isHtml = isHtmlContentType(cachedResponse?.headers.get('content-type'))
        }
        if (
          cacheName.startsWith('workbox-precache')
          && requestUrl.pathname.startsWith(expectedAssetPrefix)
          && cachedResponse
          && !isHtml
        ) {
          expectedPrecacheReady = true
        }
        if (
          isHtml
          || (
            requestUrl.pathname.startsWith(assetRoot)
            && !requestUrl.pathname.startsWith(expectedAssetPrefix)
          )
        ) {
          staleEntries.push({ cache, request })
        }
      }
    }

    if (!expectedPrecacheReady) {
      throw new Error('[knowgrph] Refusing cache cleanup before the current precache is ready.')
    }
    await Promise.all(staleEntries.map(entry => entry.cache.delete(entry.request)))
  }

  self.addEventListener('activate', event => {
    event.waitUntil(pruneStaleRevisionEntries())
  })
  self.addEventListener('message', event => {
    if (event.data?.type !== "KG_SERVICE_WORKER_SOURCE_REVISION_REQUEST") return
    const port = event.ports?.[0]
    if (!port) return
    port.postMessage({
      type: "KG_SERVICE_WORKER_SOURCE_REVISION_RESPONSE",
      sourceRevision,
    })
  })
})()
