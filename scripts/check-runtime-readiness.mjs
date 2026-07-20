#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const canonical = process.argv.includes('--canonical')
const failures = []

const requiredFiles = [
  'package.json',
  'package-lock.json',
  'index.html',
  '_worker.js',
  '_routes.json',
  'content/knowgrph/index.html',
  'functions/knowgrph/[[path]].js',
  '.well-known/runtime-readiness.json',
]
for (const rel of requiredFiles) {
  const absolute = path.resolve(root, rel)
  if (!fs.existsSync(absolute) || !fs.statSync(absolute).isFile() || fs.statSync(absolute).size === 0) {
    failures.push(`required runtime file is missing or empty: ${rel}`)
  }
}

let marker = null
try {
  marker = JSON.parse(fs.readFileSync(path.resolve(root, '.well-known/runtime-readiness.json'), 'utf8'))
  if (marker.schema !== 'knowgrph-production-runtime-readiness/v1') failures.push('runtime marker schema is invalid')
  if (marker.status !== 'verified-build') failures.push('runtime marker status must be verified-build')
  if (!/^[0-9a-f]{40}$/.test(String(marker.sourceRevision || ''))) failures.push('runtime marker sourceRevision must be an exact SHA')
  if (marker.mirror !== 'huijoohwee/huijoohwee') failures.push('runtime marker mirror identity is invalid')
} catch (error) {
  failures.push(`runtime marker is not valid JSON: ${error.message}`)
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
    const rel = reference.replace(/^\/knowgrph\//, 'content/knowgrph/')
    if (!fs.existsSync(path.resolve(root, rel))) failures.push(`application shell references a missing artifact: ${reference}`)
  }
}

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
    schema: 'huijoohwee-runtime-readiness-report/v1',
    status: 'passed',
    sourceRevision: marker.sourceRevision,
    canonicalChecked: canonical,
  }))
}

function git(args) {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim()
}
