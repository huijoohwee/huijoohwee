import assert from 'node:assert/strict'
import test from 'node:test'
import {
  runtimeReadinessProjections,
  selectRuntimeReadinessProjection,
} from '../runtime-readiness-projection.mjs'

const projection = id => runtimeReadinessProjections.find(candidate => candidate.id === id)

const select = ({ paths = [], skillPrefixes = [] } = {}) => {
  const presentPaths = new Set(paths)
  const presentSkillPrefixes = new Set(skillPrefixes)
  return selectRuntimeReadinessProjection({
    exists: relativePath => presentPaths.has(relativePath),
    hasAgentSkillPrefix: prefix => presentSkillPrefixes.has(prefix),
  })
}

test('selects the complete legacy agenticgraph projection', () => {
  const legacy = projection('legacy-agenticgraph')
  const selected = select({
    paths: legacy.footprintPaths,
    skillPrefixes: [legacy.agentSkillPrefix],
  })

  assert.equal(selected, legacy)
  assert.equal(selected.contentRoot, 'content/agenticgraph')
  assert.equal(selected.publicRoot, 'agenticgraph')
  assert.equal(selected.markerSchema, 'agenticgraph-production-runtime-readiness/v2')
})

test('selects the canonical agentic-graph projection', () => {
  const canonical = projection('canonical-agentic-graph')
  const selected = select({
    paths: canonical.footprintPaths,
    skillPrefixes: [canonical.agentSkillPrefix],
  })

  assert.equal(selected, canonical)
  assert.equal(selected.contentRoot, 'content/agentic-graph')
  assert.equal(selected.publicRoot, 'agentic-graph')
  assert.equal(selected.markerSchema, 'agentic-os-production-runtime-readiness/v2')
  assert.equal(selected.sourceRepository, 'huijoohwee/agentic-graph')
})

test('rejects a mixed legacy and canonical runtime projection', () => {
  const legacy = projection('legacy-agenticgraph')
  const canonical = projection('canonical-agentic-graph')

  assert.throws(
    () => select({
      paths: [legacy.contentRoot, canonical.contentRoot],
      skillPrefixes: [legacy.agentSkillPrefix, canonical.agentSkillPrefix],
    }),
    /mixed runtime projections are forbidden:.*legacy-agenticgraph.*canonical-agentic-graph/,
  )
})

test('rejects a canonical app with a residual legacy function helper', () => {
  const legacy = projection('legacy-agenticgraph')
  const canonical = projection('canonical-agentic-graph')

  assert.throws(
    () => select({ paths: [canonical.contentRoot, legacy.footprintPaths[3]] }),
    /mixed runtime projections are forbidden/,
  )
})

test('rejects a mirror with no recognized product runtime projection', () => {
  assert.throws(
    () => select(),
    /no runtime projection is present/,
  )
})
