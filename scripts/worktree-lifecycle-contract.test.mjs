import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const readme = readFileSync(new URL("../README.md", import.meta.url), "utf8");
const normalizedReadme = readme.replace(/\s+/g, " ");

test("repository projects the centralized fail-closed worktree lifecycle", () => {
  assert.equal(
    packageJson.scripts["worktree:lifecycle:check"],
    "node ../agentic-canvas-os/scripts/worktree-lifecycle.mjs check --repository=.",
  );
  assert.equal(
    packageJson.scripts["worktree:lifecycle:cleanup"],
    "node ../agentic-canvas-os/scripts/worktree-lifecycle.mjs cleanup --repository=.",
  );
  for (const term of [
    "clean",
    "detached",
    "origin/main",
    "never uses force",
    "never deletes the preserved task branch",
    "does not authorize a production sync or Cloudflare deployment",
  ]) {
    assert.match(normalizedReadme, new RegExp(term.replaceAll("/", "\\/")));
  }
});
