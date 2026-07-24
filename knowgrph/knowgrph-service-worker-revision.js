;(() => {
  const sourceRevision = "24e0f2c465e5ffa2743f07c7199811c49e45a6a7"
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
