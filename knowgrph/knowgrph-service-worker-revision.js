;(() => {
  const sourceRevision = "9252bce638cb8d40074c8042db9bb8b3d1812a6b"
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
