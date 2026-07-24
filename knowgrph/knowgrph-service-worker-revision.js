;(() => {
  const sourceRevision = "5f0cf7f9596480ba1fa9ffba32753587c4744bfe"
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
