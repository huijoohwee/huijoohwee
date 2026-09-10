import { createHash } from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

// Read the existing source seal; never rewrite a marker to accept mirror drift.
export function calculateArtifactDigest(mirrorRoot, projection) {
  const contentRoot = path.resolve(mirrorRoot, projection.contentRoot)
  const rootFiles = new Set(projection.rootFiles)
  const entries = []
  const walk = (directory, relativeRoot, include, descend = () => true) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const absolutePath = path.resolve(directory, entry.name)
      const relativePath = path.relative(relativeRoot, absolutePath).split(path.sep).join('/')
      if (entry.isDirectory()) {
        if (descend(relativePath)) walk(absolutePath, relativeRoot, include, descend)
      } else if (include(relativePath)) {
        if (!entry.isFile()) throw new Error(`runtime artifact must be a regular file: ${relativePath}`)
        entries.push({ relativePath, absolutePath })
      }
    }
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
  const artifactHash = createHash('sha256')
  for (const entry of entries) {
    const fileDigest = createHash('sha256').update(fs.readFileSync(entry.absolutePath)).digest('hex')
    artifactHash.update(entry.relativePath).update('\0').update(fileDigest).update('\0')
  }
  return artifactHash.digest('hex')
}
