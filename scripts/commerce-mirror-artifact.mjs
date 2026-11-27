#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MANIFEST = 'commerce-content-mirror.json';
const SCHEMA = 'commerce.local-first-content-mirror/v1';
const REPOSITORY = 'github.com/huijoohwee/agentic-commerce-os';
const OWNER_PROJECTIONS = '.agentic-os/owner-projections.json';
const hash = value => createHash('sha256').update(value).digest('hex');
const gitBlobHash = bytes => createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' }).trim();

function regularFile(filename) {
  const stat = fs.lstatSync(filename);
  if (!stat.isFile() || stat.isSymbolicLink()) throw Error(`Non-regular mirror file: ${filename}`);
  return fs.readFileSync(filename);
}

export function ensureOwnerProjectionDirectory(directory) {
  const absolute = path.resolve(directory);
  let stat = fs.lstatSync(absolute, { throwIfNoEntry: false });
  let created = false;
  if (!stat) {
    try {
      fs.mkdirSync(absolute, { mode: 0o755 });
      created = true;
    } catch (error) {
      if (error.code !== 'EEXIST') throw error;
    }
    stat = fs.lstatSync(absolute, { throwIfNoEntry: false });
  }
  if (!stat?.isDirectory() || stat.isSymbolicLink()) {
    if (created) fs.rmdirSync(absolute);
    throw Error('Owner projection directory must be a regular directory');
  }
  return { created, identity: { dev: stat.dev, ino: stat.ino } };
}

function listFiles(directory, prefix = '') {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const relative = path.posix.join(prefix, entry.name);
    if (entry.isDirectory()) return listFiles(path.join(directory, entry.name), relative);
    if (!entry.isFile()) throw Error(`Non-regular mirror entry: ${relative}`);
    return [relative];
  }).sort();
}

export function verifyCommerceMirror(mirrorRoot = path.join(ROOT, 'content/agentic-commerce-os')) {
  const root = path.resolve(mirrorRoot);
  const stat = fs.lstatSync(root);
  if (!stat.isDirectory() || stat.isSymbolicLink()) throw Error('Commerce mirror root must be a regular directory');
  const manifest = JSON.parse(regularFile(path.join(root, MANIFEST)).toString('utf8'));
  const { manifestDigest, ...body } = manifest;
  const files = manifest.files;
  if (Object.keys(manifest).sort().join() !== 'files,manifestDigest,repository,schema,sourceRevision,sourceTree,totalBytes'
    || manifest.schema !== SCHEMA || manifest.repository !== REPOSITORY
    || !/^[0-9a-f]{40}$/.test(manifest.sourceRevision ?? '') || !/^[0-9a-f]{40}$/.test(manifest.sourceTree ?? '')
    || !Array.isArray(files) || files.length < 1 || files.length > 256
    || !Number.isSafeInteger(manifest.totalBytes) || manifest.totalBytes > 3000000
    || !/^[0-9a-f]{64}$/.test(manifestDigest ?? '') || hash(JSON.stringify(body)) !== manifestDigest)
    throw Error('Commerce mirror manifest identity or digest is invalid');
  const names = files.map(row => row.path);
  if (names.some(name => typeof name !== 'string' || !/^[A-Za-z_][A-Za-z0-9_.-]{0,159}$/.test(name)
    || name === MANIFEST)
    || names.join('\0') !== [...names].sort().join('\0') || new Set(names).size !== names.length)
    throw Error('Commerce mirror manifest paths are invalid');
  if (JSON.stringify(listFiles(root)) !== JSON.stringify([...names, MANIFEST].sort()))
    throw Error('Commerce mirror inventory differs from its manifest');
  let totalBytes = 0;
  for (const row of files) {
    if (Object.keys(row).sort().join() !== 'bytes,path,sha256' || !Number.isSafeInteger(row.bytes)
      || row.bytes < 0 || row.bytes >= 500000 || !/^[0-9a-f]{64}$/.test(row.sha256 ?? ''))
      throw Error(`Commerce mirror file record is invalid: ${row.path}`);
    const bytes = regularFile(path.join(root, row.path));
    if (bytes.length !== row.bytes || hash(bytes) !== row.sha256) throw Error(`Commerce mirror file digest mismatch: ${row.path}`);
    totalBytes += bytes.length;
  }
  if (totalBytes !== manifest.totalBytes || totalBytes > 3000000) throw Error('Commerce mirror byte total is invalid');
  return { ...body, manifestDigest, totalBytes };
}

export function ownerProjectionsForMirror(mirrorRoot, policy) {
  const root = path.resolve(mirrorRoot);
  const verified = verifyCommerceMirror(root);
  if (!policy || !policy.pins || !Array.isArray(policy.assets)) throw Error('Pinned owner reuse policy is invalid');
  const byBlob = new Map();
  for (const row of policy.assets) {
    if (!Array.isArray(row) || row.length < 3 || typeof row[0] !== 'string' || typeof row[1] !== 'string'
      || !/^[0-9a-f]{40}$/.test(row[2])) throw Error('Pinned owner asset row is invalid');
    const [owner, source, blob] = row, pin = policy.pins[owner];
    if (typeof pin !== 'string' || !/^[0-9a-f]{40}$/.test(pin)) continue;
    const candidates = byBlob.get(blob) ?? [];
    candidates.push({ owner, source, pin });
    byBlob.set(blob, candidates);
  }
  const projections = {};
  for (const file of verified.files) {
    const bytes = regularFile(path.join(root, file.path));
    const candidate = byBlob.get(gitBlobHash(bytes))?.sort((a, b) =>
      `${a.owner}/${a.source}`.localeCompare(`${b.owner}/${b.source}`))[0];
    if (candidate) projections[`content/agentic-commerce-os/${file.path}`] = candidate;
  }
  return Object.fromEntries(Object.entries(projections).sort(([a], [b]) => a.localeCompare(b)));
}

function readOwnerReusePolicy(sourceRoot) {
  const filename = path.join(sourceRoot, 'node_modules/agentic-os/catalog/owner-reuse.json');
  return JSON.parse(regularFile(filename).toString('utf8'));
}

const exactRemoteMain = (directory, revision) => execFileSync('git', ['-C', directory, 'ls-remote', 'origin', 'refs/heads/main'],
  { encoding: 'utf8' }).trim() === `${revision}\trefs/heads/main`;

export async function publishCommerceMirror({ sourceRoot, sourceSha, outputRoot = path.join(ROOT, 'content/agentic-commerce-os') }) {
  const target = path.resolve(outputRoot), expectedTarget = path.join(ROOT, 'content/agentic-commerce-os');
  if (target !== expectedTarget) throw Error('Publisher output is limited to content/agentic-commerce-os');
  const rootHead = git('rev-parse', 'HEAD');
  if (git('branch', '--show-current') !== 'main' || git('status', '--porcelain', '--untracked-files=all')
    || !exactRemoteMain(ROOT, rootHead)) throw Error('Publisher requires a clean current huijoohwee main checkout');
  if (!/^[0-9a-f]{40}$/.test(sourceSha ?? '')) throw Error('Exact Commerce source SHA required');
  const source = path.resolve(sourceRoot ?? '');
  if (!sourceRoot || !fs.lstatSync(source).isDirectory() || fs.lstatSync(source).isSymbolicLink())
    throw Error('Commerce source checkout is required');
  const sourceHead = execFileSync('git', ['-C', source, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
  const sourceDirty = execFileSync('git', ['-C', source, 'status', '--porcelain', '--untracked-files=all'], { encoding: 'utf8' }).trim();
  if (sourceHead !== sourceSha || sourceDirty || !exactRemoteMain(source, sourceSha))
    throw Error('Commerce source must be the clean exact protected main revision');

  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'commerce-content-publisher-'));
  let projectionParentState = null;
  let projectionPublished = false;
  const generated = path.join(temporary, 'generated');
  try {
    execFileSync(process.execPath, ['scripts/local-first-release/mirror.mjs', 'create', generated], {
      cwd: source, stdio: 'inherit', env: { ...process.env, CANDIDATE_SHA: sourceSha }, timeout: 120000,
    });
    const previous = process.cwd();
    process.chdir(source);
    try {
      const artifact = await import(pathToFileURL(path.join(source, 'scripts/local-first-release/artifact.mjs')).href);
      const sourceTree = artifact.git('rev-parse', `${sourceSha}^{tree}`);
      artifact.verifyCommerceContentMirror(generated, { sourceRevision: sourceSha, sourceTree });
    } finally {
      process.chdir(previous);
    }
    const generatedManifest = verifyCommerceMirror(generated);
    const ownerPolicy = readOwnerReusePolicy(source);
    const projections = ownerProjectionsForMirror(generated, ownerPolicy);
    const projectionBytes = Buffer.from(JSON.stringify(projections, null, 2) + '\n');
    const parent = path.dirname(target);
    if (fs.lstatSync(parent).isSymbolicLink()) throw Error('Publisher content parent may not be a symlink');
    const projectionPath = path.join(ROOT, OWNER_PROJECTIONS);
    const projectionParent = path.dirname(projectionPath);
    projectionParentState = ensureOwnerProjectionDirectory(projectionParent);
    const assertProjectionParent = () => {
      const current = fs.lstatSync(projectionParent);
      if (!current.isDirectory() || current.isSymbolicLink()
        || current.dev !== projectionParentState.identity.dev || current.ino !== projectionParentState.identity.ino)
        throw Error('Owner projection directory changed during publication');
    };
    if (fs.existsSync(projectionPath)) regularFile(projectionPath);
    const stage = fs.mkdtempSync(path.join(parent, '.commerce-content-stage-'));
    const backup = path.join(parent, `.agentic-commerce-os-backup-${process.pid}`);
    const projectionStage = path.join(projectionParent, `.owner-projections-stage-${process.pid}`);
    const projectionBackup = path.join(projectionParent, `.owner-projections-backup-${process.pid}`);
    try {
      fs.rmSync(stage, { recursive: true });
      fs.cpSync(generated, stage, { recursive: true, errorOnExist: true, force: false });
      verifyCommerceMirror(stage);
      if (fs.existsSync(target)) verifyCommerceMirror(target);
      if (fs.existsSync(backup) || fs.existsSync(projectionBackup) || fs.existsSync(projectionStage))
        throw Error('Publisher recovery path already exists');
      assertProjectionParent();
      fs.writeFileSync(projectionStage, projectionBytes, { flag: 'wx', mode: 0o644 });
      if (fs.existsSync(target)) fs.renameSync(target, backup);
      assertProjectionParent();
      if (fs.existsSync(projectionPath)) fs.renameSync(projectionPath, projectionBackup);
      try {
        fs.renameSync(stage, target);
        assertProjectionParent();
        fs.renameSync(projectionStage, projectionPath);
        assertProjectionParent();
        verifyCommerceMirror(target);
        const actualProjections = JSON.parse(regularFile(projectionPath).toString('utf8'));
        if (JSON.stringify(actualProjections) !== JSON.stringify(projections))
          throw Error('Owner projection manifest differs from its exact source policy');
      } catch (error) {
        fs.rmSync(target, { recursive: true, force: true });
        if (fs.existsSync(backup)) fs.renameSync(backup, target);
        fs.rmSync(projectionPath, { force: true });
        if (fs.existsSync(projectionBackup)) fs.renameSync(projectionBackup, projectionPath);
        throw error;
      }
      fs.rmSync(backup, { recursive: true, force: true });
      fs.rmSync(projectionBackup, { force: true });
      projectionPublished = true;
    } finally {
      fs.rmSync(stage, { recursive: true, force: true });
      fs.rmSync(projectionStage, { force: true });
    }
    return { ...generatedManifest, ownerProjections: Object.keys(projections).length,
      ownerProjectionDigest: hash(projectionBytes) };
  } catch (error) {
    if (projectionParentState?.created && !projectionPublished) {
      try {
        const current = fs.lstatSync(path.join(ROOT, '.agentic-os'), { throwIfNoEntry: false });
        if (current?.isDirectory() && !current.isSymbolicLink()
          && current.dev === projectionParentState.identity.dev && current.ino === projectionParentState.identity.ino
          && fs.readdirSync(path.join(ROOT, '.agentic-os')).length === 0) {
          fs.rmdirSync(path.join(ROOT, '.agentic-os'));
        }
      } catch {}
    }
    throw error;
  } finally {
    fs.rmSync(temporary, { recursive: true, force: true });
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    if (process.argv[2] === 'verify') console.log(JSON.stringify({ ok: true, ...verifyCommerceMirror() }));
    else if (process.argv[2] === 'publish') {
      const result = await publishCommerceMirror({ sourceRoot: process.env.COMMERCE_SOURCE_ROOT,
        sourceSha: process.env.COMMERCE_SOURCE_SHA });
      console.log(JSON.stringify({ ok: true, ...result }));
    } else throw Error('Usage: node scripts/commerce-mirror-artifact.mjs <verify|publish>');
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
