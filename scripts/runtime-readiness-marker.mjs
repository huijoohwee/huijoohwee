export function validateMarker(value, activeProjection) {
  requireExactKeys(value, ['schema', 'status', 'source', 'agenticCanvasOs', 'catalogRevision', 'artifact', 'immutableManifest', 'mirror', 'surfaces'], 'marker')
  if (value.schema !== activeProjection.markerSchema) throw new Error('schema is invalid')
  if (value.status !== 'verified-build') throw new Error('status must be verified-build')
  requireExactKeys(value.source, ['repository', 'revision', 'tree'], 'source')
  requireExactKeys(value.agenticCanvasOs, ['repository', 'revision'], 'agenticCanvasOs')
  requireExactKeys(value.artifact, ['algorithm', 'digest'], 'artifact')
  requireExactKeys(value.immutableManifest, ['algorithm', 'digest'], 'immutableManifest')
  requireExactKeys(value.mirror, ['repository'], 'mirror')
  if (value.source.repository !== activeProjection.sourceRepository) throw new Error('source repository is invalid')
  // Retain only the deployed rollback catalog while native OS releases take ownership.
  const retainedRollback = value.agenticCanvasOs.repository === 'huijoohwee/agentic-canvas-os'
    && value.agenticCanvasOs.revision === 'c6c9b84a67f1b1aadc09adca4c1b2322274a538f'
  if (value.agenticCanvasOs.repository !== 'huijoohwee/agentic-os' && !retainedRollback) {
    throw new Error('Runtime catalog repository is invalid')
  }
  if (value.mirror.repository !== 'huijoohwee/huijoohwee') throw new Error('mirror repository is invalid')
  for (const [label, revision] of [
    ['source revision', value.source.revision],
    ['source tree', value.source.tree],
    ['Agentic Canvas OS revision', value.agenticCanvasOs.revision],
    ['catalog revision', value.catalogRevision],
  ]) if (!/^[0-9a-f]{40}$/.test(String(revision || ''))) throw new Error(`${label} must be an exact SHA`)
  if (value.catalogRevision !== value.agenticCanvasOs.revision) throw new Error('catalog revision must equal the Agentic Canvas OS revision')
  for (const [label, digest] of [['artifact', value.artifact], ['immutable manifest', value.immutableManifest]]) {
    if (digest.algorithm !== 'sha256' || !/^[0-9a-f]{64}$/.test(String(digest.digest || ''))) {
      throw new Error(`${label} digest is invalid`)
    }
  }
  if (!Array.isArray(value.surfaces) || value.surfaces.length !== 2 || !value.surfaces.includes('/') || !value.surfaces.includes(`/${activeProjection.publicSegment}`)) {
    throw new Error(`surfaces must bind / and /${activeProjection.publicSegment} exactly`)
  }
}

function requireExactKeys(value, expected, label) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`${label} must be an object`)
  const actual = Object.keys(value).sort()
  const required = [...expected].sort()
  if (actual.join('\0') !== required.join('\0')) throw new Error(`${label} fields are invalid`)
}

