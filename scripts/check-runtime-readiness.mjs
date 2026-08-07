#!/usr/bin/env node

import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const canonical = process.argv.includes('--canonical')
const failures = []
const markerPaths = [
  '.well-known/runtime-readiness.json',
  'content/knowgrph/.well-known/runtime-readiness.json',
]
const requiredFiles = [
  'package.json',
  'package-lock.json',
  '404.html',
  '_worker.js',
  '_routes.json',
  'content/knowgrph/index.html',
  'functions/knowgrph/[[path]].js',
  'content/gamexr/index.html',
  'content/gamexr/release-manifest.json',
  'content/gamexr/.well-known/runtime-readiness.json',
  ...markerPaths,
]

for (const relativePath of requiredFiles) {
  const absolutePath = path.resolve(root, relativePath)
  if (!fs.existsSync(absolutePath) || !fs.statSync(absolutePath).isFile() || fs.statSync(absolutePath).size === 0) {
    failures.push(`required runtime file is missing or empty: ${relativePath}`)
  }
}

const markerSources = markerPaths.map(relativePath => {
  try {
    return fs.readFileSync(path.resolve(root, relativePath), 'utf8')
  } catch {
    return ''
  }
})
if (new Set(markerSources).size !== 1) failures.push('runtime marker copies must be byte-identical')
if (fs.existsSync(path.resolve(root, 'knowgrph/.well-known/runtime-readiness.json'))) {
  failures.push('public app readiness must be served dynamically from the apex marker')
}

let marker = null
try {
  marker = JSON.parse(markerSources[0])
  validateMarker(marker)
} catch (error) {
  failures.push(`runtime marker is invalid: ${error.message}`)
}

try {
  JSON.parse(fs.readFileSync(path.resolve(root, '_routes.json'), 'utf8'))
} catch (error) {
  failures.push(`_routes.json is invalid: ${error.message}`)
}

const appHtmlPath = path.resolve(root, 'content/knowgrph/index.html')
if (fs.existsSync(appHtmlPath)) {
  const appHtml = fs.readFileSync(appHtmlPath, 'utf8')
  const references = [...appHtml.matchAll(/(?:src|href)=["'](\/knowgrph\/[^"'#?]+)["']/g)].map(match => match[1])
  for (const reference of new Set(references)) {
    const relativePath = reference.replace(/^\/knowgrph\//, 'content/knowgrph/')
    if (!fs.existsSync(path.resolve(root, relativePath))) failures.push(`application shell references a missing artifact: ${reference}`)
    if (marker && reference.startsWith('/knowgrph/assets/') && !reference.startsWith(`/knowgrph/assets/${marker.source.revision}/`)) {
      failures.push(`application shell references a stale asset namespace: ${reference}`)
    }
  }
}

if (marker) {
  const assetsRoot = path.resolve(root, 'knowgrph', 'assets')
  const namespaces = fs.existsSync(assetsRoot)
    ? fs.readdirSync(assetsRoot, { withFileTypes: true }).filter(entry => entry.isDirectory()).map(entry => entry.name).sort()
    : []
  if (namespaces.length !== 1 || namespaces[0] !== marker.source.revision) {
    failures.push(`asset namespace must contain only ${marker.source.revision}; found ${namespaces.join(', ') || 'none'}`)
  }
  const artifactDigest = calculateArtifactDigest(path.resolve(root, 'content', 'knowgrph'))
  if (artifactDigest !== marker.artifact.digest) {
    failures.push(`runtime artifact digest mismatch: expected ${marker.artifact.digest}, received ${artifactDigest}`)
  }
}

validateGameXrProjection()

const docsDir = path.resolve(root, 'docs')
if (fs.existsSync(docsDir)) {
  for (const name of fs.readdirSync(docsDir)) {
    if (/^note_.*\.md$/i.test(name)) failures.push(`runtime note must live outside the canonical mirror: docs/${name}`)
  }
}

if (canonical) {
  try {
    const branch = git(['branch', '--show-current'])
    const status = git(['status', '--porcelain'])
    const head = git(['rev-parse', 'HEAD'])
    const remote = git(['rev-parse', 'origin/main'])
    if (branch !== 'main') failures.push(`canonical checkout must be on main, found ${branch || 'detached'}`)
    if (status) failures.push('canonical checkout must be clean')
    if (head !== remote) failures.push(`canonical checkout must equal origin/main (${head} != ${remote})`)
  } catch (error) {
    failures.push(`canonical Git state could not be verified: ${error.message}`)
  }
}

if (failures.length > 0) {
  for (const failure of failures) console.error(`[runtime-readiness] ${failure}`)
  process.exitCode = 1
} else {
  console.log(JSON.stringify({
    schema: 'huijoohwee-runtime-readiness-report/v2',
    status: 'passed',
    sourceRevision: marker.source.revision,
    agenticCanvasOsRevision: marker.agenticCanvasOs.revision,
    artifactDigest: marker.artifact.digest,
    gameXrSourceRevision: readGameXrReleaseManifest()?.sourceRevision ?? null,
    canonicalChecked: canonical,
  }))
}

function readGameXrReleaseManifest() {
  try {
    return JSON.parse(fs.readFileSync(path.resolve(root, 'content/gamexr/release-manifest.json'), 'utf8'))
  } catch {
    return null
  }
}

function validateGameXrProjection() {
  const publicRoot = path.resolve(root, 'content/gamexr')
  const manifest = readGameXrReleaseManifest()
  if (!manifest) {
    failures.push('GameXR release manifest is invalid')
    return
  }
  if (manifest.schema !== 'gamexr-release-artifact/v1' || manifest.basePath !== '/gamexr/' || manifest.candidateStatus !== 'source-bound-clean') {
    failures.push('GameXR release manifest does not describe a source-bound /gamexr/ candidate')
  }
  if (!/^[0-9a-f]{40}$/.test(String(manifest.sourceRevision || ''))) failures.push('GameXR source revision must be an exact SHA')
  if (!Array.isArray(manifest.artifacts)) {
    failures.push('GameXR artifact inventory is missing')
    return
  }
  const artifacts = [...manifest.artifacts].sort((left, right) => left.path.localeCompare(right.path))
  for (const artifact of artifacts) {
    const absolutePath = path.resolve(publicRoot, artifact.path)
    if (!absolutePath.startsWith(`${publicRoot}${path.sep}`) || !fs.existsSync(absolutePath)) {
      failures.push(`GameXR artifact is missing: ${artifact.path}`)
      continue
    }
    const bytes = fs.statSync(absolutePath).size
    const digest = createHash('sha256').update(fs.readFileSync(absolutePath)).digest('hex')
    if (bytes !== artifact.bytes || digest !== artifact.sha256) failures.push(`GameXR artifact changed: ${artifact.path}`)
  }
  const digestInput = artifacts.map(artifact => `${artifact.path}\0${artifact.bytes}\0${artifact.sha256}`).join('\n')
  const digest = createHash('sha256').update(digestInput).digest('hex')
  if (digest !== manifest.artifactDigest) failures.push('GameXR aggregate artifact digest changed')
  if (fs.existsSync(path.resolve(root, 'gamexr'))) failures.push('GameXR must have one generated mirror under content/gamexr')

  const redirects = fs.readFileSync(path.resolve(root, '_redirects'), 'utf8')
  for (const rule of ['/gamexr /gamexr/ 301', '/gamexr/* /content/gamexr/:splat 200']) {
    if (!redirects.split(/\r?\n/).includes(rule)) failures.push(`GameXR public projection rule is missing: ${rule}`)
  }
}

function validateMarker(value) {
  requireExactKeys(value, ['schema', 'status', 'source', 'agenticCanvasOs', 'catalogRevision', 'artifact', 'immutableManifest', 'mirror', 'surfaces'], 'marker')
  if (value.schema !== 'knowgrph-production-runtime-readiness/v2') throw new Error('schema is invalid')
  if (value.status !== 'verified-build') throw new Error('status must be verified-build')
  requireExactKeys(value.source, ['repository', 'revision', 'tree'], 'source')
  requireExactKeys(value.agenticCanvasOs, ['repository', 'revision'], 'agenticCanvasOs')
  requireExactKeys(value.artifact, ['algorithm', 'digest'], 'artifact')
  requireExactKeys(value.immutableManifest, ['algorithm', 'digest'], 'immutableManifest')
  requireExactKeys(value.mirror, ['repository'], 'mirror')
  if (value.source.repository !== 'huijoohwee/knowgrph') throw new Error('source repository is invalid')
  if (value.agenticCanvasOs.repository !== 'huijoohwee/agentic-canvas-os') throw new Error('Agentic Canvas OS repository is invalid')
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
  if (!Array.isArray(value.surfaces) || value.surfaces.length !== 2 || !value.surfaces.includes('/') || !value.surfaces.includes('/knowgrph')) {
    throw new Error('surfaces must bind / and /knowgrph exactly')
  }
}

function requireExactKeys(value, expected, label) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`${label} must be an object`)
  const actual = Object.keys(value).sort()
  const required = [...expected].sort()
  if (actual.join('\0') !== required.join('\0')) throw new Error(`${label} fields are invalid`)
}

function calculateArtifactDigest(publicRoot) {
  const rootFiles = new Set([
    'favicon.svg',
    'index.html',
    'knowgrph-chat-stream-sw.js',
    'knowgrph-live-canvas-hero.md',
    'knowgrph-service-worker-revision.js',
    'llms.txt',
    'manifest.webmanifest',
    'settings-flow.json',
    'sw.js',
  ])
  const entries = []
  const walk = directory => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const absolutePath = path.resolve(directory, entry.name)
      const relativePath = path.relative(publicRoot, absolutePath).split(path.sep).join('/')
      if (entry.isDirectory()) {
        if (relativePath === 'assets' || relativePath.startsWith('assets/')) walk(absolutePath)
      } else if (entry.isFile() && (
        relativePath.startsWith('assets/') ||
        rootFiles.has(relativePath) ||
        /^workbox-[A-Za-z0-9_-]+\.js$/.test(relativePath)
      )) {
        entries.push({ relativePath, absolutePath })
      }
    }
  }
  walk(publicRoot)
  entries.sort((left, right) => left.relativePath.localeCompare(right.relativePath))
  const artifactHash = createHash('sha256')
  for (const entry of entries) {
    const fileDigest = createHash('sha256').update(fs.readFileSync(entry.absolutePath)).digest('hex')
    artifactHash.update(entry.relativePath).update('\0').update(fileDigest).update('\0')
  }
  return artifactHash.digest('hex')
}

function git(args) {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim()
}
