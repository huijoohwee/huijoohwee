#!/usr/bin/env node

import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  GAME_XR_CANONICAL_REDIRECT_CASES,
  GAME_XR_CONTENT_SECURITY_POLICY as CONTENT_SECURITY_POLICY,
  GAME_XR_IMMUTABLE_CACHE_CONTROL as IMMUTABLE_CACHE_CONTROL,
  GAME_XR_MUTABLE_CACHE_CONTROL as MUTABLE_CACHE_CONTROL,
  GAME_XR_PERMISSIONS_POLICY as PERMISSIONS_POLICY,
  expectedMime,
  isSafeRelativePath,
  sha256,
  validateGameXrLocalProjection,
} from './gamexr-public-contract.mjs'

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicRoot = path.resolve(repositoryRoot, 'content/gamexr')
const failures = []
const INJECTION_MARKERS = [
  'static.cloudflareinsights.com',
  '/cdn-cgi/challenge-platform/',
  'data-cf-beacon',
  'window.__CF$cv$params',
]

let verificationSummary = null
try {
  verificationSummary = await verifyPublicProjection()
} catch (error) {
  failures.push(error instanceof Error ? error.message : String(error))
}

if (failures.length > 0) {
  for (const failure of failures) console.error(`[gamexr-public] ${failure}`)
  process.exitCode = 1
} else {
  console.log(JSON.stringify(verificationSummary))
}

async function verifyPublicProjection() {
  const options = parseOptions()
  const localProjection = validateGameXrLocalProjection(repositoryRoot)
  if (localProjection.failures.length > 0) {
    throw new Error(`local GameXR projection is invalid: ${localProjection.failures.join('; ')}`)
  }
  const { manifest, manifestBytes } = localProjection
  const expectedSourceRevision = options.expectedSourceRevision || manifest.sourceRevision
  const expectedArtifactDigest = options.expectedArtifactDigest || manifest.artifactDigest
  requireSha(expectedSourceRevision, 40, 'expected source revision')
  requireSha(expectedArtifactDigest, 64, 'expected artifact digest')
  if (manifest.sourceRevision !== expectedSourceRevision) {
    failures.push(`local release source is ${manifest.sourceRevision}, expected ${expectedSourceRevision}`)
  }
  if (manifest.artifactDigest !== expectedArtifactDigest) {
    failures.push(`local artifact digest is ${manifest.artifactDigest}, expected ${expectedArtifactDigest}`)
  }

  await verifyCanonicalRoutes(options.origin)
  const publicManifestResult = await requestBytes(new URL('/gamexr/release-manifest.json', options.origin))
  if (publicManifestResult) {
    assertStatus(publicManifestResult, 'release-manifest.json')
    assertMime(publicManifestResult, 'release-manifest.json')
    assertCacheControl(publicManifestResult, MUTABLE_CACHE_CONTROL, 'release-manifest.json')
    if (!publicManifestResult.bytes.equals(manifestBytes)) failures.push('public release-manifest.json does not byte-match the mirror')
    try {
      const publicManifest = JSON.parse(publicManifestResult.bytes.toString('utf8'))
      if (publicManifest.sourceRevision !== expectedSourceRevision) {
        failures.push(`public source is ${String(publicManifest.sourceRevision)}, expected ${expectedSourceRevision}`)
      }
      if (publicManifest.artifactDigest !== expectedArtifactDigest) {
        failures.push(`public artifact digest is ${String(publicManifest.artifactDigest)}, expected ${expectedArtifactDigest}`)
      }
    } catch (error) {
      failures.push(`public release-manifest.json is invalid JSON: ${error.message}`)
    }
  }

  const publicArtifacts = []
  let htmlResult = null
  for (const artifact of manifest.artifacts) {
    if (!isSafeRelativePath(artifact.path)) {
      failures.push(`manifest contains an unsafe artifact path: ${String(artifact.path)}`)
      continue
    }
    const artifactUrl = artifact.path === 'index.html'
      ? new URL(manifest.basePath, options.origin)
      : new URL(artifact.path, new URL(manifest.basePath, options.origin))
    const result = await requestBytes(artifactUrl)
    if (!result) continue
    const localBytes = await readFile(path.resolve(publicRoot, artifact.path))
    if (artifact.path === 'index.html') htmlResult = result
    assertStatus(result, artifact.path)
    assertMime(result, artifact.path)
    assertCacheControl(
      result,
      artifact.path.startsWith('assets/') ? IMMUTABLE_CACHE_CONTROL : MUTABLE_CACHE_CONTROL,
      artifact.path,
    )
    const digest = sha256(result.bytes)
    if (result.bytes.length !== artifact.bytes || digest !== artifact.sha256) {
      failures.push(`${artifact.path} body changed (expected ${artifact.bytes}/${artifact.sha256}, received ${result.bytes.length}/${digest})`)
    }
    if (!result.bytes.equals(localBytes)) failures.push(`${artifact.path} does not byte-match the local projection`)
    publicArtifacts.push({ path: artifact.path, bytes: result.bytes.length, sha256: digest })
  }

  publicArtifacts.sort((left, right) => left.path.localeCompare(right.path))
  const publicDigest = sha256(publicArtifacts.map(artifact => `${artifact.path}\0${artifact.bytes}\0${artifact.sha256}`).join('\n'))
  if (publicDigest !== expectedArtifactDigest) {
    failures.push(`public aggregate digest is ${publicDigest}, expected ${expectedArtifactDigest}`)
  }
  if (!htmlResult) failures.push('public index.html could not be verified')
  else verifyHtmlContract(htmlResult)
  return {
    schema: 'gamexr-public-verification/v1',
    status: 'passed',
    origin: options.origin.href,
    sourceRevision: expectedSourceRevision,
    artifactDigest: expectedArtifactDigest,
    artifactCount: manifest.artifacts.length,
  }
}

async function verifyCanonicalRoutes(origin) {
  for (const { requestPath, status: expectedStatus, locationPath: expectedLocation } of GAME_XR_CANONICAL_REDIRECT_CASES) {
    const result = await requestBytes(new URL(requestPath, origin), 'manual')
    if (!result) continue
    const location = result.response.headers.get('location')
    const locationUrl = location ? new URL(location, result.response.url) : null
    const locationIsExact = locationUrl
      && locationUrl.origin === origin.origin
      && locationUrl.pathname === expectedLocation
      && locationUrl.search === ''
      && locationUrl.hash === ''
    if (result.response.status !== expectedStatus || !locationIsExact) {
      failures.push(`${requestPath} route is ${result.response.status}/${locationUrl?.href || 'missing'}, expected ${expectedStatus}/${new URL(expectedLocation, origin).href}`)
    }
  }
}

function verifyHtmlContract(result) {
  const response = result.response
  assertExactHeader(response, 'content-security-policy', CONTENT_SECURITY_POLICY, 'index.html')
  assertExactHeader(response, 'permissions-policy', PERMISSIONS_POLICY, 'index.html')
  assertExactHeader(response, 'x-frame-options', 'SAMEORIGIN', 'index.html')
  assertExactHeader(response, 'referrer-policy', 'no-referrer', 'index.html')
  assertExactHeader(response, 'x-content-type-options', 'nosniff', 'index.html')
  const html = result.bytes.toString('utf8')
  for (const marker of INJECTION_MARKERS) {
    if (html.includes(marker)) failures.push(`index.html contains injected marker ${marker}`)
  }
  const inlineScripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/giu)]
    .filter(match => !/\bsrc\s*=/iu.test(match[1]))
  if (inlineScripts.length > 0) failures.push(`index.html contains ${inlineScripts.length} inline script block(s)`)
  if (new URL(response.url).pathname !== '/gamexr/') failures.push(`index.html resolved to unexpected URL ${response.url}`)
}

function assertStatus(result, label) {
  if (!result.response.ok) failures.push(`${label} returned HTTP ${result.response.status}`)
}

function assertMime(result, relativePath) {
  const expected = expectedMime(relativePath)
  const actualHeader = String(result.response.headers.get('content-type') || '')
  const actual = actualHeader.split(';', 1)[0].trim().toLowerCase()
  if (actual !== expected) failures.push(`${relativePath} MIME is ${actualHeader || 'missing'}, expected ${expected}`)
}

function assertCacheControl(result, expected, label) {
  const actualDirectives = normalizeDirectives(result.response.headers.get('cache-control'))
  const expectedDirectives = normalizeDirectives(expected)
  if (JSON.stringify(actualDirectives) !== JSON.stringify(expectedDirectives)) {
    failures.push(`${label} Cache-Control is ${result.response.headers.get('cache-control') || 'missing'}, expected ${expected}`)
  }
}

function assertExactHeader(response, name, expected, label) {
  const actual = normalizeWhitespace(response.headers.get(name))
  if (actual !== normalizeWhitespace(expected)) failures.push(`${label} ${name} is ${actual || 'missing'}`)
}

async function requestBytes(url, redirect = 'follow') {
  try {
    const response = await fetch(url, {
      redirect,
      cache: 'no-store',
      headers: {
        accept: '*/*',
        'accept-encoding': 'identity',
        'cache-control': 'no-cache',
      },
      signal: AbortSignal.timeout(15_000),
    })
    return { response, bytes: Buffer.from(await response.arrayBuffer()) }
  } catch (error) {
    failures.push(`${url.href} request failed: ${error.message}`)
    return null
  }
}

function parseOptions() {
  const values = new Map()
  const argumentsToParse = process.argv.slice(2)
  for (let index = 0; index < argumentsToParse.length; index += 1) {
    const argument = argumentsToParse[index]
    if (!argument.startsWith('--')) throw new Error(`unsupported argument ${argument}`)
    const separator = argument.indexOf('=')
    const name = separator > 0 ? argument.slice(2, separator) : argument.slice(2)
    const inlineValue = separator > 0 ? argument.slice(separator + 1) : null
    const value = inlineValue ?? argumentsToParse[index + 1]
    if (inlineValue === null) index += 1
    if (!['origin', 'expect-source', 'expect-artifact-digest'].includes(name) || !value || value.startsWith('--')) {
      throw new Error(`invalid --${name} option`)
    }
    if (values.has(name)) throw new Error(`duplicate --${name} option`)
    values.set(name, value)
  }
  const originValue = values.get('origin') || process.env.GAME_XR_PUBLIC_ORIGIN
  if (!originValue) throw new Error('provide --origin=https://host or GAME_XR_PUBLIC_ORIGIN')
  const origin = normalizeOrigin(originValue)
  const expectedSourceRevision = values.get('expect-source') || null
  const expectedArtifactDigest = values.get('expect-artifact-digest') || null
  const isLocalOrigin = ['localhost', '127.0.0.1'].includes(origin.hostname)
  if (!isLocalOrigin && (!expectedSourceRevision || !expectedArtifactDigest)) {
    throw new Error('non-local verification requires --expect-source and --expect-artifact-digest')
  }
  return {
    origin,
    expectedSourceRevision,
    expectedArtifactDigest,
  }
}

function normalizeOrigin(value) {
  const origin = new URL(value)
  const isLocalHttp = origin.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(origin.hostname)
  if (origin.protocol !== 'https:' && !isLocalHttp) throw new Error('origin must use HTTPS unless it is localhost')
  if (origin.username || origin.password || origin.search || origin.hash || !['', '/'].includes(origin.pathname)) {
    throw new Error('origin must not contain credentials, a path, a query, or a fragment')
  }
  origin.pathname = '/'
  return origin
}

function normalizeDirectives(value) {
  return String(value || '').split(',').map(item => item.trim().toLowerCase()).filter(Boolean).sort()
}

function normalizeWhitespace(value) {
  return String(value || '').replace(/\s+/g, ' ').trim()
}

function requireSha(value, length, label) {
  if (typeof value !== 'string' || !new RegExp(`^[0-9a-f]{${length}}$`).test(value)) throw new Error(`${label} is invalid`)
}
