import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { ensureOwnerProjectionDirectory, ownerProjectionsForMirror, verifyCommerceMirror } from '../commerce-mirror-artifact.mjs';

const hash = value => createHash('sha256').update(value).digest('hex');
const gitBlob = bytes => createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
const manifestName = 'commerce-content-mirror.json';

test('owner projection parent is created only when absent and rejects aliases', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'commerce-owner-parent-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const parent = path.join(root, '.agentic-os');

  assert.equal(ensureOwnerProjectionDirectory(parent).created, true);
  assert.equal(ensureOwnerProjectionDirectory(parent).created, false);
  fs.rmdirSync(parent);
  fs.writeFileSync(parent, 'occupied');
  assert.throws(() => ensureOwnerProjectionDirectory(parent), /regular directory/u);
  fs.rmSync(parent);
  fs.mkdirSync(path.join(root, 'real-owner-data'));
  fs.symlinkSync(path.join(root, 'real-owner-data'), parent);
  assert.throws(() => ensureOwnerProjectionDirectory(parent), /regular directory/u);
});

function writeMirror(root) {
  const files = ['index.html', 'workspace.js'].sort().map((name, index) => {
    const bytes = Buffer.from(index ? 'local-only asset' : '<main>Commerce</main>');
    fs.writeFileSync(path.join(root, name), bytes);
    return { path: name, bytes: bytes.length, sha256: hash(bytes) };
  });
  const body = { schema: 'commerce.local-first-content-mirror/v1', repository: 'github.com/huijoohwee/agentic-commerce-os',
    sourceRevision: 'a'.repeat(40), sourceTree: 'b'.repeat(40), files,
    totalBytes: files.reduce((total, file) => total + file.bytes, 0) };
  fs.writeFileSync(path.join(root, manifestName), JSON.stringify({ ...body,
    manifestDigest: hash(JSON.stringify(body)) }, null, 2) + '\n');
}

test('Commerce mirror validator rejects drift, extras and non-regular files', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'commerce-mirror-check-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  writeMirror(root);
  assert.equal(verifyCommerceMirror(root).files.length, 2);

  fs.appendFileSync(path.join(root, 'index.html'), 'tampered');
  assert.throws(() => verifyCommerceMirror(root), /digest mismatch/u);
  fs.writeFileSync(path.join(root, 'index.html'), '<main>Commerce</main>');

  fs.writeFileSync(path.join(root, 'unexpected.txt'), 'extra');
  assert.throws(() => verifyCommerceMirror(root), /inventory differs/u);
  fs.rmSync(path.join(root, 'unexpected.txt'));

  fs.symlinkSync(path.join(root, 'index.html'), path.join(root, 'linked.js'));
  assert.throws(() => verifyCommerceMirror(root), /Non-regular mirror entry/u);
});

test('mirror owner projections enroll only exact current owner blobs with their protected pin', t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'commerce-owner-projection-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  writeMirror(root);
  const bytes = fs.readFileSync(path.join(root, 'index.html'));
  const policy = { pins: { 'agentic-base': 'c'.repeat(40) }, assets: [
    ['agentic-base', 'packages/views-react/src/browser/base-profile.css', gitBlob(bytes), 'd'.repeat(40)],
  ] };
  assert.deepEqual(ownerProjectionsForMirror(root, policy), {
    'content/agentic-commerce-os/index.html': {
      owner: 'agentic-base', source: 'packages/views-react/src/browser/base-profile.css', pin: 'c'.repeat(40),
    },
  });
});

test('mirror publisher is isolated from Cloudflare deployment and names only the Commerce asset path', () => {
  const workflow = fs.readFileSync('.github/workflows/publish-commerce-mirror.yml', 'utf8');
  assert.match(workflow, /workflow_dispatch:[\s\S]*source_sha:[\s\S]*required: true/u);
  assert.match(workflow, /node scripts\/commerce-mirror-artifact\.mjs publish/u);
  assert.match(workflow, /git add -- content\/agentic-commerce-os \.agentic-os\/owner-projections\.json/u);
  assert.match(workflow, /owner-projections\.json/u);
  assert.match(workflow, /gh pr create/u);
  assert.match(workflow, /gh workflow run runtime-readiness\.yml/u);
  assert.doesNotMatch(workflow, /wrangler deploy|CLOUDFLARE_API_TOKEN|cloudflare\/pages-action/u);
  assert.match(fs.readFileSync('.github/workflows/runtime-readiness.yml', 'utf8'), /workflow_dispatch:/u);
});
