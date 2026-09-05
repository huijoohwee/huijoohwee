import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { validateRepositoryProfile } from 'agentic-os';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const pkg = JSON.parse(read('package.json'));

test('mirror lifecycle uses one exact installed ADLC source and no sibling controller', () => {
  const pin = pkg.devDependencies['agentic-os'];
  const lock = JSON.parse(read('package-lock.json'));
  assert.match(pin, /^https:\/\/codeload\.github\.com\/huijoohwee\/agentic-os\/tar\.gz\/[a-f0-9]{40}$/u);
  assert.equal(lock.packages[''].devDependencies['agentic-os'], pin);
  assert.equal(lock.packages['node_modules/agentic-os'].resolved, pin);
  assert.match(lock.packages['node_modules/agentic-os'].integrity, /^sha512-/u);
  for (const [name, command] of Object.entries({
    setup: 'setup', doctor: 'doctor', lane: 'start', land: 'land', status: 'status',
    reap: 'reap', finish: 'finish', 'sync:canonical': 'canonical-sync',
  })) assert.equal(pkg.scripts[name], `agentic-os ${command}`);
  for (const retired of ['worktree:lifecycle:check', 'worktree:lifecycle:cleanup', 'lifecycle:check']) {
    assert.equal(pkg.scripts[retired], undefined);
  }
  assert.ok(!Object.values(pkg.scripts).some(command => command.includes('../agentic-canvas-os')));
  for (const file of ['templates/SYSTEM-PROMPT-RUNTIME.md', 'docs/adlc-guidelines.md',
    'docs/START-WORKFLOW.md', 'docs/RELEASE-WORKFLOW.md']) {
    assert.ok(existsSync(new URL(`../node_modules/agentic-os/${file}`, import.meta.url)), file);
  }
});

test('mirror profile preserves protected source checks and separate deployment ownership', () => {
  const profile = JSON.parse(read('.agentic-os.json'));
  assert.deepEqual(validateRepositoryProfile(profile), profile);
  assert.equal(profile.repository, 'github.com/huijoohwee/huijoohwee');
  assert.deepEqual(profile.requiredChecks, ['Runtime Readiness Gate']);
  assert.ok(profile.capabilities.includes('required-check-policy:strict'));
  assert.ok(profile.capabilities.includes('protected-integration:pull-request'));
  assert.deepEqual(profile.authority, { runtime: 'consumer', release: 'consumer' });
  for (const target of ['localBranch', 'remoteBranch', 'remoteTrackingRef', 'unreachableObjects']) {
    assert.equal(profile.cleanup[target], 'retain');
  }
  assert.match(read('AGENTS.md'), /generated mirror publication or deployment/u);
});

test('protected CI reaches shared evaluation and the previously omitted lifecycle regression', () => {
  assert.equal(pkg.scripts['check:adlc'], 'npm --prefix node_modules/agentic-os run evals');
  assert.equal(pkg.scripts.check, 'npm run check:adlc && npm run runtime:test && npm run runtime:check');
  assert.match(pkg.scripts['runtime:test'], /scripts\/worktree-lifecycle-contract\.test\.mjs/u);
  const workflow = read('.github/workflows/runtime-readiness.yml');
  assert.match(workflow, /name: Runtime Readiness Gate/u);
  assert.match(workflow, /- run: npm run check/u);
});
