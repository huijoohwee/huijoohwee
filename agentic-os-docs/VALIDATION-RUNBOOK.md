---
title: "Knowgrph Agentic Canvas OS Validation Runbook"
graphId: "md:knowgrph-agentic-canvas-os-validation-runbook"
doc_type: "Validation Runbook"
date: "2026-07-07"
lang: "en-US"
schema: "agentic-canvas-os-validation-runbook/v1"
frontmatter_contract: "required"
status: "spec-complete"
publish_policy: "Dev-only until explicit operator approval"
---

# Validation Runbook

Use focused validation only. Do not run indefinite full-codebase checks for documentation changes.

## Documentation Checks

Run from `/Users/huijoohwee/Documents/GitHub`:

```bash
ruby -rdate -ryaml -e 'ARGV.each { |path| text=File.read(path); match=text.match(/\A---\n(.*?)\n---\n/m) or abort("#{path}: missing frontmatter"); YAML.safe_load(match[1], permitted_classes: [Date], aliases: true); puts "#{path}: frontmatter ok" }' /Users/huijoohwee/Documents/GitHub/huijoohwee/agentic-os-docs/*.md
wc -l /Users/huijoohwee/Documents/GitHub/huijoohwee/agentic-os-docs/*.md
LC_ALL=C rg -n "[^[:ascii:]]" /Users/huijoohwee/Documents/GitHub/huijoohwee/agentic-os-docs
rg -n "kg_media_token|data:image|VIDEODB_API_KEY|SENSENOVA_API_KEY|generation_job_id|index_job_id|upload-[0-9a-f]|airvio/runs" /Users/huijoohwee/Documents/GitHub/huijoohwee/agentic-os-docs
```

Expected:

- Frontmatter parses for every file with YAML frontmatter.
- Files stay under the local hygiene budget.
- ASCII scan returns no matches unless a source file intentionally requires non-ASCII.
- Runtime artifact scan returns no copied local provider/media artifacts.

## Knowgrph Local Runtime Checks

Run only when a runtime owner in `/Users/huijoohwee/Documents/GitHub/knowgrph` is touched:

```bash
npm -C /Users/huijoohwee/Documents/GitHub/knowgrph run vdeoxpln:check
npm -C /Users/huijoohwee/Documents/GitHub/knowgrph/canvas run test:ci:unit -- mcpLocalToolContract
npm -C /Users/huijoohwee/Documents/GitHub/knowgrph/canvas run test:ci:unit -- vdeoxplnContract
npm -C /Users/huijoohwee/Documents/GitHub/knowgrph/canvas run typecheck
```

Choose the subset matching touched owners. Do not run broader suites unless the change crosses shared contracts or compiler boundaries.

## Agentic OS VCC Checks

| Capability | Focused check |
|---|---|
| Capability discovery | Tool catalog test exits 0 and reports deduplicated tool ids. |
| OS status read views | Status runtime test exits 0 and state-source before/after diff is empty. |
| Cost summary | Cost schema validation exits 0 and read-only views report zero. |
| Gate catalog | Approval schema tests pass and missing approval blocks spend. |
| Video Remix Director | Missing approvals produce blocked zero-cost manifest; approved dry-run emits storyboard evidence. |
| Canvas dashboard | Frontmatter parses; KGC graph materializes through existing Source Files/Canvas owners. |

## Deploy Guard

Documentation-only changes must end with:

```bash
git -C /Users/huijoohwee/Documents/GitHub/huijoohwee status --short -- agentic-os-docs
git -C /Users/huijoohwee/Documents/GitHub/knowgrph status --short
```

Confirm:

- No Prod mirror mutation under `/Users/huijoohwee/Documents/GitHub/huijoohwee/content/knowgrph`.
- No Cloudflare deploy command was run.
- Any Cloudflare or Prod deploy remains `gated` until explicit operator authorization.

## Runtime-Ready Promotion Rule

Promote from `spec-complete` to `runtime-ready` only when the final response includes:

- File or owner changed.
- Commands run.
- Exit codes or concise result lines.
- Any skipped validation and why.
- Deploy boundary statement.

## Failure Handling

| Failure | Response |
|---|---|
| Frontmatter parse fails | Fix the authored YAML source; do not rely on parser repair. |
| Artifact scan finds copied local media token | Remove the copied value and replace with a neutral placeholder or source-owned reference. |
| Runtime test fails in unrelated dirty owner | Report the failure and isolate whether touched files caused it; do not revert user changes. |
| Deploy command needed for proof | Stop and ask for explicit authorization. |
