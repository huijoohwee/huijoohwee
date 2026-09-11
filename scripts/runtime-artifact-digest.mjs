import { createHash } from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { generationManifest } from 'agentic-os/generation'

// Read the existing source seal; never rewrite a marker to accept mirror drift.
export function calculateArtifactDigest(mirrorRoot, projection) {
  mirrorRoot = fs.realpathSync(mirrorRoot)
  const contentRoot = path.resolve(mirrorRoot, projection.contentRoot)
  const rootFiles = new Set(projection.rootFiles)
  const entries = []
  const deadline = performance.now() + 30000
  let visited = 0
  const walk = (directory, relativeRoot, include, descend = () => true, depth = 0) => {
    if (depth > 32) throw new Error('runtime artifact depth budget exceeded')
    const opened = fs.opendirSync(directory)
    try { for (let entry; (entry = opened.readSync());) {
      if (++visited > 20000 || performance.now() > deadline) throw new Error('runtime artifact scan budget exceeded')
      const absolutePath = path.resolve(directory, entry.name)
      const relativePath = path.relative(relativeRoot, absolutePath).split(path.sep).join('/')
      if (entry.isDirectory()) {
        if (descend(relativePath)) walk(absolutePath, relativeRoot, include, descend, depth + 1)
      } else if (include(relativePath)) {
        if (!entry.isFile()) throw new Error(`runtime artifact must be a regular file: ${relativePath}`)
        entries.push({ relativePath, absolutePath })
      }
    } } finally { opened.closeSync() }
  }
  walk(contentRoot, contentRoot,
    relativePath => relativePath.startsWith('assets/') || rootFiles.has(relativePath)
      || /^workbox-[A-Za-z0-9_-]+\.js$/.test(relativePath),
    relativePath => relativePath === 'assets' || relativePath.startsWith('assets/'))
  for (const relativePath of projection.additionalContentFiles || []) {
    const absolutePath = path.resolve(contentRoot, relativePath)
    if (!fs.lstatSync(absolutePath).isFile()) {
      throw new Error(`runtime artifact must be a regular file: ${relativePath}`)
    }
    entries.push({ relativePath, absolutePath })
  }
  for (const relativeRoot of projection.mirrorArtifactRoots || []) {
    const directory = path.resolve(mirrorRoot, relativeRoot)
    if (fs.existsSync(directory)) walk(directory, mirrorRoot, () => true)
  }
  entries.sort((left, right) => left.relativePath.localeCompare(right.relativePath))
  const observed = generationManifest(mirrorRoot, {
    paths: entries.map(entry => path.relative(mirrorRoot, entry.absolutePath)),
    maxEntries: 20000, maxBytes: 512 * 1024 * 1024, maxFileBytes: 256 * 1024 * 1024,
    timeoutMs: Math.max(1, Math.floor(deadline - performance.now())),
  })
  const digests = new Map(observed.files.map(file => [file.path, file.sha256]))
  const artifactHash = createHash('sha256')
  for (const entry of entries) {
    const fileDigest = digests.get(path.relative(mirrorRoot, entry.absolutePath).split(path.sep).join('/'))
    if (!fileDigest) throw new Error('runtime artifact observation missing')
    artifactHash.update(entry.relativePath).update('\0').update(fileDigest).update('\0')
  }
  return artifactHash.digest('hex')
}
