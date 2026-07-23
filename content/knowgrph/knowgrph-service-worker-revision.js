;(() => {
  const sourceRevision = "9d04fe29b738fd4bba4101b5bc2047acdc11af87"
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
