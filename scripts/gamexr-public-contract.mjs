import { createHash } from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

export const EMPTY_SHA256 = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
export const GAME_XR_GLOBAL_PERMISSIONS_POLICY = 'accelerometer=(), autoplay=(), camera=(), clipboard-read=(), clipboard-write=(), display-capture=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), xr-spatial-tracking=()'
export const GAME_XR_PERMISSIONS_POLICY = 'accelerometer=(self), autoplay=(self), camera=(self), clipboard-read=(), clipboard-write=(), display-capture=(), geolocation=(), gyroscope=(self), magnetometer=(self), microphone=(), payment=(), usb=(), xr-spatial-tracking=(self)'
export const GAME_XR_CONTENT_SECURITY_POLICY = "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'none'; script-src 'self'; script-src-attr 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; media-src 'self' blob:; connect-src 'self'; worker-src 'self'; manifest-src 'self'"
export const GAME_XR_MUTABLE_CACHE_CONTROL = 'no-store, no-cache, no-transform, must-revalidate, max-age=0'
export const GAME_XR_IMMUTABLE_CACHE_CONTROL = 'public, max-age=31536000, immutable, no-transform'
export const CLOUDFLARE_HEADERS_MAX_RULES = 100
export const CLOUDFLARE_HEADERS_MAX_LINE_CHARACTERS = 2_000
export const CLOUDFLARE_ROUTES_MAX_RULES = 100
export const CLOUDFLARE_ROUTES_MAX_RULE_CHARACTERS = 100

export const GAME_XR_REDIRECT_RULES = Object.freeze([
  Object.freeze({ source: '/gamexr', destination: '/gamexr/', status: 301 }),
  Object.freeze({ source: '/gamexr/*', destination: '/content/gamexr/:splat', status: 200 }),
  Object.freeze({ source: '/content/gamexr', destination: '/gamexr', status: 301 }),
  Object.freeze({ source: '/content/gamexr/', destination: '/gamexr/', status: 301 }),
  Object.freeze({ source: '/content/gamexr/*', destination: '/gamexr/:splat', status: 301 }),
])

export const GAME_XR_REDIRECT_CONTRACT = Object.freeze(
  GAME_XR_REDIRECT_RULES.map(rule => `${rule.source} ${rule.destination} ${rule.status}`),
)

export const GAME_XR_CANONICAL_REDIRECT_CASES = Object.freeze([
  Object.freeze({ requestPath: '/gamexr', status: 301, locationPath: '/gamexr/' }),
  Object.freeze({ requestPath: '/content/gamexr', status: 301, locationPath: '/gamexr' }),
  Object.freeze({ requestPath: '/content/gamexr/', status: 301, locationPath: '/gamexr/' }),
  Object.freeze({ requestPath: '/content/gamexr/sw.js', status: 301, locationPath: '/gamexr/sw.js' }),
])

export const GAME_XR_HEADER_CONTRACT = Object.freeze([
  Object.freeze({
    selector: '/gamexr/*',
    entries: Object.freeze([
      '! x-frame-options',
      'x-frame-options: SAMEORIGIN',
      '! permissions-policy',
      `permissions-policy: ${GAME_XR_PERMISSIONS_POLICY}`,
      `content-security-policy: ${GAME_XR_CONTENT_SECURITY_POLICY}`,
      'referrer-policy: no-referrer',
      'x-content-type-options: nosniff',
    ]),
  }),
  ...[
    '/gamexr',
    '/gamexr/',
    '/gamexr/index.html',
    '/gamexr/sw.js',
    '/gamexr/manifest.webmanifest',
    '/gamexr/precache-manifest.json',
    '/gamexr/release-manifest.json',
    '/gamexr/llms.txt',
    '/gamexr/.well-known/*',
    '/gamexr/schemas/*',
    '/gamexr/icons/*',
  ].map(selector => Object.freeze({
    selector,
    entries: Object.freeze([`cache-control: ${GAME_XR_MUTABLE_CACHE_CONTROL}`]),
  })),
  Object.freeze({
    selector: '/gamexr/assets/*',
    entries: Object.freeze([`cache-control: ${GAME_XR_IMMUTABLE_CACHE_CONTROL}`]),
  }),
])

const GAME_XR_PROTECTED_ROUTE_PATTERNS = Object.freeze([
  '/gamexr',
  '/gamexr/*',
  '/content/gamexr',
  '/content/gamexr/*',
])
const OTHER_SYMBOL = Symbol('other-route-character')
const ROUTE_SEARCH_LIMIT = 20_000

export function validateGameXrLocalProjection(repositoryRoot) {
  const failures = []
  const publicRoot = path.resolve(repositoryRoot, 'content/gamexr')
  const manifestPath = path.resolve(publicRoot, 'release-manifest.json')
  let manifest = null
  let manifestBytes = null

  try {
    manifestBytes = fs.readFileSync(manifestPath)
    manifest = JSON.parse(manifestBytes.toString('utf8'))
  } catch (error) {
    failures.push(`GameXR release manifest is invalid: ${error.message}`)
    return { failures, manifest, manifestBytes, publicRoot }
  }

  failures.push(...validateGameXrManifest(manifest))
  if (!Array.isArray(manifest?.artifacts)) {
    failures.push('GameXR artifact inventory is missing')
    return { failures, manifest, manifestBytes, publicRoot }
  }

  const listedPaths = new Set()
  const recomputedArtifacts = []
  for (const artifact of manifest.artifacts) {
    if (!hasExactKeys(artifact, ['path', 'bytes', 'sha256'])) {
      failures.push(`GameXR artifact fields are invalid: ${String(artifact?.path || 'unknown')}`)
      continue
    }
    if (!isSafeRelativePath(artifact.path)) {
      failures.push(`GameXR artifact path is unsafe: ${String(artifact.path)}`)
      continue
    }
    if (listedPaths.has(artifact.path)) {
      failures.push(`GameXR artifact is duplicated: ${artifact.path}`)
      continue
    }
    listedPaths.add(artifact.path)
    if (!Number.isSafeInteger(artifact.bytes) || artifact.bytes <= 0 || !/^[0-9a-f]{64}$/.test(String(artifact.sha256 || ''))) {
      failures.push(`GameXR artifact metadata is invalid: ${artifact.path}`)
      continue
    }
    const absolutePath = path.resolve(publicRoot, artifact.path)
    if (!absolutePath.startsWith(`${publicRoot}${path.sep}`) || !fs.existsSync(absolutePath) || !fs.statSync(absolutePath).isFile()) {
      failures.push(`GameXR artifact is missing: ${artifact.path}`)
      continue
    }
    const bytes = fs.statSync(absolutePath).size
    const digest = sha256(fs.readFileSync(absolutePath))
    if (bytes !== artifact.bytes || digest !== artifact.sha256) failures.push(`GameXR artifact changed: ${artifact.path}`)
    recomputedArtifacts.push({ path: artifact.path, bytes, sha256: digest })
  }

  const actualPaths = listRelativeFiles(publicRoot, failures).filter(relativePath => relativePath !== 'release-manifest.json').sort()
  const expectedPaths = [...listedPaths].sort()
  if (JSON.stringify(actualPaths) !== JSON.stringify(expectedPaths)) {
    const missing = expectedPaths.filter(relativePath => !actualPaths.includes(relativePath))
    const extra = actualPaths.filter(relativePath => !listedPaths.has(relativePath))
    failures.push(`GameXR artifact inventory is not exact (missing: ${missing.join(', ') || 'none'}; extra: ${extra.join(', ') || 'none'})`)
  }

  recomputedArtifacts.sort((left, right) => left.path.localeCompare(right.path))
  const digestInput = recomputedArtifacts.map(artifact => `${artifact.path}\0${artifact.bytes}\0${artifact.sha256}`).join('\n')
  if (sha256(digestInput) !== manifest.artifactDigest) failures.push('GameXR aggregate artifact digest changed')
  if (fs.existsSync(path.resolve(repositoryRoot, 'gamexr'))) failures.push('GameXR must have one generated mirror under content/gamexr')

  return { failures, manifest, manifestBytes, publicRoot }
}

export function validateGameXrFunctionRoutes(routes) {
  const failures = []
  if (!routes || typeof routes !== 'object' || Array.isArray(routes) || routes.version !== 1) {
    return ['_routes.json must use Cloudflare Pages schema version 1']
  }
  if (!Array.isArray(routes.include) || !Array.isArray(routes.exclude)) {
    return ['_routes.json include and exclude must be arrays']
  }
  const routePatterns = [...routes.include, ...routes.exclude]
  if (routePatterns.length > CLOUDFLARE_ROUTES_MAX_RULES) {
    failures.push(`_routes.json exceeds ${CLOUDFLARE_ROUTES_MAX_RULES} include/exclude rules`)
  }
  for (const [label, patterns] of [['include', routes.include], ['exclude', routes.exclude]]) {
    const seen = new Set()
    for (const pattern of patterns) {
      if (typeof pattern !== 'string' || !pattern.startsWith('/') || pattern.length > CLOUDFLARE_ROUTES_MAX_RULE_CHARACTERS) {
        failures.push(`_routes.json ${label} rule is invalid: ${String(pattern)}`)
        continue
      }
      if (seen.has(pattern)) failures.push(`_routes.json ${label} rule is duplicated: ${pattern}`)
      seen.add(pattern)
    }
  }
  if (failures.length > 0) return failures

  for (const includePattern of routes.include) {
    for (const protectedPattern of GAME_XR_PROTECTED_ROUTE_PATTERNS) {
      const witness = findUnexcludedGlobWitness(includePattern, protectedPattern, routes.exclude)
      if (witness !== null) {
        failures.push(`_routes.json sends static GameXR route through Functions: ${witness} (include ${includePattern})`)
      }
    }
  }
  return [...new Set(failures)]
}

export function globPatternsIntersect(leftPattern, rightPattern) {
  return findUnexcludedGlobWitness(leftPattern, rightPattern, []) !== null
}

export function normalizeRedirectSourcePattern(source) {
  return String(source || '').replace(/:[A-Za-z]\w*/g, '*')
}

export function expectedMime(relativePath) {
  if (relativePath.endsWith('.html')) return 'text/html'
  if (relativePath.endsWith('.js')) return 'application/javascript'
  if (relativePath.endsWith('.css')) return 'text/css'
  if (relativePath.endsWith('.json')) return 'application/json'
  if (relativePath.endsWith('.webmanifest')) return 'application/manifest+json'
  if (relativePath.endsWith('.svg')) return 'image/svg+xml'
  if (relativePath.endsWith('.txt')) return 'text/plain'
  throw new Error(`no MIME contract for ${relativePath}`)
}

export function isSafeRelativePath(value) {
  return typeof value === 'string'
    && value.length > 0
    && !value.includes('\\')
    && !path.posix.isAbsolute(value)
    && path.posix.normalize(value) === value
    && !value.split('/').includes('..')
}

export function sha256(value) {
  return createHash('sha256').update(value).digest('hex')
}

function validateGameXrManifest(manifest) {
  const failures = []
  const exactFields = [
    'schema',
    'application',
    'version',
    'basePath',
    'candidateStatus',
    'sourceRevision',
    'source',
    'artifactDigest',
    'defaultScene',
    'sceneSchema',
    'spatialInputSchema',
    'cost',
    'deploymentAuthorized',
    'artifacts',
  ]
  if (!hasExactKeys(manifest, exactFields)) failures.push('GameXR release manifest fields are invalid')
  if (manifest?.schema !== 'gamexr-release-artifact/v1'
    || manifest.application !== 'GameXR'
    || manifest.basePath !== '/gamexr/'
    || manifest.candidateStatus !== 'source-bound-clean') {
    failures.push('GameXR release manifest does not describe a source-bound /gamexr/ candidate')
  }
  if (typeof manifest?.version !== 'string' || !/^\d+\.\d+\.\d+(?:-[0-9A-Za-z]+(?:[.-][0-9A-Za-z]+)*)?(?:\+[0-9A-Za-z]+(?:[.-][0-9A-Za-z]+)*)?$/.test(manifest.version)) {
    failures.push('GameXR release version is invalid')
  }
  if (!/^[0-9a-f]{40}$/.test(String(manifest?.sourceRevision || ''))) failures.push('GameXR source revision must be an exact SHA')
  if (!/^[0-9a-f]{64}$/.test(String(manifest?.artifactDigest || ''))) failures.push('GameXR aggregate artifact digest is invalid')
  if (manifest?.defaultScene !== 'schemas/default-scene.json'
    || manifest.sceneSchema !== 'schemas/gamexr.scene.schema.json'
    || manifest.spatialInputSchema !== 'schemas/apple-spatial-input.schema.json') {
    failures.push('GameXR release contract paths are invalid')
  }
  if (!hasExactKeys(manifest?.source, ['versionControl', 'head', 'worktree', 'statusDigest'])
    || manifest.source.versionControl !== 'git'
    || manifest.source.head !== 'resolved'
    || manifest.source.worktree !== 'clean'
    || manifest.source.statusDigest !== EMPTY_SHA256) {
    failures.push('GameXR release source is not a resolved clean Git revision')
  }
  if (!hasExactKeys(manifest?.cost, ['modelCalls', 'paidCalls', 'estimatedCostUsd'])
    || manifest.cost.modelCalls !== 0
    || manifest.cost.paidCalls !== 0
    || manifest.cost.estimatedCostUsd !== 0) {
    failures.push('GameXR release cost boundary is invalid')
  }
  if (manifest?.deploymentAuthorized !== false) failures.push('GameXR source artifact must not authorize deployment')
  return failures
}

function hasExactKeys(value, expected) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false
  const actualKeys = Object.keys(value).sort()
  const expectedKeys = [...expected].sort()
  return actualKeys.join('\0') === expectedKeys.join('\0')
}

function listRelativeFiles(directory, failures) {
  if (!fs.existsSync(directory) || !fs.statSync(directory).isDirectory()) {
    failures.push('GameXR public projection directory is missing')
    return []
  }
  const files = []
  const walk = currentDirectory => {
    for (const entry of fs.readdirSync(currentDirectory, { withFileTypes: true })) {
      const absolutePath = path.resolve(currentDirectory, entry.name)
      const relativePath = path.relative(directory, absolutePath).split(path.sep).join('/')
      if (entry.isDirectory()) walk(absolutePath)
      else if (entry.isFile()) files.push(relativePath)
      else failures.push(`GameXR projection contains a non-regular entry: ${relativePath}`)
    }
  }
  walk(directory)
  return files
}

function findUnexcludedGlobWitness(includePattern, protectedPattern, excludePatterns) {
  const start = {
    include: closeGlob(includePattern, [0]),
    protected: closeGlob(protectedPattern, [0]),
    excludes: excludePatterns.map(pattern => closeGlob(pattern, [0])),
    witness: '',
  }
  const queue = [start]
  const visited = new Set([globSearchKey(start)])

  for (let cursor = 0; cursor < queue.length; cursor += 1) {
    if (cursor > ROUTE_SEARCH_LIMIT) return '<indeterminate-route>'
    const state = queue[cursor]
    if (acceptsGlob(includePattern, state.include)
      && acceptsGlob(protectedPattern, state.protected)
      && !excludePatterns.some((pattern, index) => acceptsGlob(pattern, state.excludes[index]))) {
      return state.witness
    }

    const literalSymbols = new Set([
      ...nextGlobLiterals(includePattern, state.include),
      ...nextGlobLiterals(protectedPattern, state.protected),
      ...excludePatterns.flatMap((pattern, index) => nextGlobLiterals(pattern, state.excludes[index])),
    ])
    const symbols = [...literalSymbols, OTHER_SYMBOL]
    for (const symbol of symbols) {
      const include = stepGlob(includePattern, state.include, symbol)
      const protectedStates = stepGlob(protectedPattern, state.protected, symbol)
      if (include.length === 0 || protectedStates.length === 0) continue
      const nextState = {
        include,
        protected: protectedStates,
        excludes: excludePatterns.map((pattern, index) => stepGlob(pattern, state.excludes[index], symbol)),
        witness: `${state.witness}${symbol === OTHER_SYMBOL ? chooseOtherCharacter(literalSymbols) : symbol}`,
      }
      const key = globSearchKey(nextState)
      if (visited.has(key)) continue
      visited.add(key)
      queue.push(nextState)
    }
  }
  return null
}

function closeGlob(pattern, sourceStates) {
  const states = new Set(sourceStates)
  const queue = [...states]
  for (let index = 0; index < queue.length; index += 1) {
    const position = queue[index]
    if (pattern[position] !== '*' || states.has(position + 1)) continue
    states.add(position + 1)
    queue.push(position + 1)
  }
  return [...states].sort((left, right) => left - right)
}

function stepGlob(pattern, states, symbol) {
  const next = new Set()
  for (const position of states) {
    const token = pattern[position]
    if (token === '*') next.add(position)
    else if (token && symbol !== OTHER_SYMBOL && token === symbol) next.add(position + 1)
  }
  return closeGlob(pattern, next)
}

function nextGlobLiterals(pattern, states) {
  return states.map(position => pattern[position]).filter(token => token && token !== '*')
}

function acceptsGlob(pattern, states) {
  return states.includes(pattern.length)
}

function globSearchKey(state) {
  return [state.include.join(','), state.protected.join(','), ...state.excludes.map(states => states.join(','))].join('|')
}

function chooseOtherCharacter(literals) {
  return ['x', '0', '-', '_', '.'].find(character => !literals.has(character)) || '~'
}
