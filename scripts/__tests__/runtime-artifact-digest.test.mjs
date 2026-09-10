import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { calculateArtifactDigest } from '../runtime-artifact-digest.mjs'
import { runtimeReadinessProjections } from '../runtime-readiness-projection.mjs'

const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const seal = entries => sha(entries.sort(([a], [b]) => a.localeCompare(b))
  .map(([relative, bytes]) => `${relative}\0${sha(bytes)}\0`).join(''))
const fixture = t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'mirror-artifact-'))
  t.after(() => fs.rmSync(root, { recursive: true, force: true }))
  const write = (relative, bytes) => {
    fs.mkdirSync(path.dirname(path.join(root, relative)), { recursive: true })
    fs.writeFileSync(path.join(root, relative), bytes)
  }
  return { root, write }
}

test('canonical seal includes XR runtime and migrated images using their source path identities', t => {
  const { root, write } = fixture(t)
  const projection = runtimeReadinessProjections.find(value => value.id === 'canonical-agentic-graph')
  const entries = [['index.html', 'app'], ['assets/revision/app.js', 'module'],
    ...projection.additionalContentFiles.map(relative => [relative, `runtime:${relative}`])]
  for (const [relative, bytes] of entries) write(`${projection.contentRoot}/${relative}`, bytes)
  const image = 'image/agentic-graph/xr/model.glb'
  write(image, 'image-runtime')
  entries.push([image, 'image-runtime'])
  write(`${projection.contentRoot}/xr-v2/models/depth-anything-v2-small/README.md`, 'documentation')
  const expected = seal(entries)
  assert.equal(calculateArtifactDigest(root, projection), expected)
  write(image, 'tampered-image')
  assert.notEqual(calculateArtifactDigest(root, projection), expected)
  write(image, 'image-runtime')
  write(`${projection.contentRoot}/${projection.additionalContentFiles[0]}`, 'tampered-model')
  assert.notEqual(calculateArtifactDigest(root, projection), expected)
})

test('legacy seal retains its original file set', t => {
  const { root, write } = fixture(t)
  const projection = runtimeReadinessProjections.find(value => value.id === 'legacy-agenticgraph')
  write(`${projection.contentRoot}/index.html`, 'legacy')
  write(`${projection.contentRoot}/assets/revision/app.js`, 'module')
  write('image/agentic-graph/image.png', 'unrelated')
  assert.equal(calculateArtifactDigest(root, projection), seal([
    ['index.html', 'legacy'], ['assets/revision/app.js', 'module'],
  ]))
})

test('missing or symbolic XR runtime bytes cannot satisfy the canonical seal', t => {
  const { root, write } = fixture(t)
  const projection = runtimeReadinessProjections.find(value => value.id === 'canonical-agentic-graph')
  write(`${projection.contentRoot}/index.html`, 'app')
  assert.throws(() => calculateArtifactDigest(root, projection), /ENOENT/)
  const runtimePath = `${projection.contentRoot}/${projection.additionalContentFiles[0]}`
  write(runtimePath, 'model')
  fs.unlinkSync(path.join(root, runtimePath))
  fs.symlinkSync(path.join(root, projection.contentRoot, 'index.html'), path.join(root, runtimePath))
  assert.throws(() => calculateArtifactDigest(root, projection), /regular file/)
})
