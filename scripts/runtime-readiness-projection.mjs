const freezeProjection = projection => Object.freeze({
  ...projection,
  rootFiles: Object.freeze([...projection.rootFiles]),
  footprintPaths: Object.freeze([...projection.footprintPaths]),
})

// This is a structural cutover discriminator, not a routing alias. The legacy
// projection is removed by the receipt-bound protected cleanup after canonical
// mirror publication; a candidate may never contain both projections.
export const runtimeReadinessProjections = Object.freeze([
  freezeProjection({
    id: 'legacy-agenticgraph',
    publicSegment: 'agenticgraph',
    contentRoot: 'content/agenticgraph',
    publicRoot: 'agenticgraph',
    functionEntry: 'functions/agenticgraph/[[path]].js',
    contentMarker: 'content/agenticgraph/.well-known/runtime-readiness.json',
    dynamicMarker: 'agenticgraph/.well-known/runtime-readiness.json',
    agentSkillPrefix: 'agenticgraph-',
    footprintPaths: [
      'content/agenticgraph',
      'agenticgraph',
      'functions/agenticgraph',
      'functions/agenticgraph-agent-ready-shared.mjs',
      '.well-known/mcp/apps/agenticgraph-agent-ready.html',
    ],
    markerSchema: 'agenticgraph-production-runtime-readiness/v2',
    sourceRepository: 'huijoohwee/knowgrph',
    rootFiles: [
      'favicon.svg',
      'index.html',
      'agenticgraph-chat-stream-sw.js',
      'agenticgraph-live-canvas-hero.md',
      'agenticgraph-service-worker-revision.js',
      'llms.txt',
      'manifest.webmanifest',
      'settings-flow.json',
      'sw.js',
    ],
  }),
  freezeProjection({
    id: 'canonical-agentic-graph',
    publicSegment: 'agentic-graph',
    contentRoot: 'content/agentic-graph',
    publicRoot: 'agentic-graph',
    functionEntry: 'functions/agentic-graph/[[path]].js',
    contentMarker: 'content/agentic-graph/.well-known/runtime-readiness.json',
    dynamicMarker: 'agentic-graph/.well-known/runtime-readiness.json',
    agentSkillPrefix: 'agentic-graph-',
    footprintPaths: [
      'content/agentic-graph',
      'agentic-graph',
      'functions/agentic-graph',
      'functions/agentic-graph-agent-ready-shared.mjs',
      '.well-known/mcp/apps/agentic-graph-agent-ready.html',
    ],
    markerSchema: 'agentic-os-production-runtime-readiness/v2',
    sourceRepository: 'huijoohwee/agentic-graph',
    rootFiles: [
      'favicon.svg',
      'index.html',
      'agentic-graph-chat-stream-sw.js',
      'agentic-graph-live-canvas-hero.md',
      'agentic-graph-service-worker-revision.js',
      'llms.txt',
      'manifest.webmanifest',
      'settings-flow.json',
      'sw.js',
    ],
  }),
])

const requireCallback = (value, label) => {
  if (typeof value !== 'function') throw new TypeError(`${label} must be a function`)
  return value
}

export const selectRuntimeReadinessProjection = ({ exists, hasAgentSkillPrefix }) => {
  const pathExists = requireCallback(exists, 'exists')
  const skillPrefixExists = requireCallback(hasAgentSkillPrefix, 'hasAgentSkillPrefix')
  const observed = runtimeReadinessProjections.map(projection => {
    const footprintPaths = projection.footprintPaths.filter(path => pathExists(path))
    if (skillPrefixExists(projection.agentSkillPrefix)) {
      footprintPaths.push(`.well-known/agent-skills/${projection.agentSkillPrefix}*`)
    }
    return { projection, footprintPaths }
  }).filter(({ footprintPaths }) => footprintPaths.length > 0)

  if (observed.length === 1) return observed[0].projection
  if (observed.length === 0) {
    throw new Error('no runtime projection is present; expected exactly one of legacy-agenticgraph or canonical-agentic-graph')
  }
  throw new Error(`mixed runtime projections are forbidden: ${observed
    .map(({ projection, footprintPaths }) => `${projection.id} (${footprintPaths.join(', ')})`)
    .join('; ')}`)
}
