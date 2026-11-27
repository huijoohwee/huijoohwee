---
doc_type: PRD-TAD-ADR-MVP-GTM
title: "Commerce Production Content Mirror"
owner: "huijoohwee"
---

# Commerce Production Content Mirror

## Decision

`agentic-commerce-os` remains the source of authored Commerce assets and the owner of the public Commerce Worker route. `huijoohwee/content/agentic-commerce-os` is a generated, reviewable mirror of the exact local-first asset inventory. A publisher accepts only a clean commit on the Commerce protected `main`, records its source revision and tree plus per-file hashes, derives exact owner-byte projections from the pinned reuse policy, and opens a protected change in this mirror repository. Its change is limited to `content/agentic-commerce-os/` and `.agentic-os/owner-projections.json`. The Commerce Local-first Production Release consumes a merged mirror revision whose manifest names the same source commit before packaging those assets into the existing Worker route.

The mirror publisher does not deploy, change Cloudflare routes, create paid resources, or select a checkout profile. The existing Commerce release controller remains responsible for Production verification, human authorization, checkout-profile selection, rollback rehearsal, Worker deployment, and public route verification. `agentic-graph` remains a structural reference; its source and release flow, including MiaoXYZ, are outside this change.

## Acceptance

- Only the source-owned local-first static file allowlist is copied; symlinks, extra files, missing files, oversized chunks, source drift, and manifest/hash mismatches fail closed.
- Every mirror manifest binds `github.com/huijoohwee/agentic-commerce-os`, the exact protected source SHA/tree, and a sorted inventory of path, byte count, and SHA-256.
- `.agentic-os/owner-projections.json` maps only mirrored bytes that exactly match a current pinned owner blob, so the mirror can pass the shared offline owner-reuse check without broad path enrollment.
- The protected mirror change contains only `content/agentic-commerce-os/**` and `.agentic-os/owner-projections.json`; it never includes application runtime or deployment configuration.
- Publisher output is reviewable on a protected `huijoohwee` pull request and does not make a Cloudflare mutation.
- The Commerce Production workflow requires an exact merged mirror revision and verifies that its source SHA/tree match the candidate before deployment preparation.
- Existing direct Worker routing and rollback authority remain under `agentic-commerce-os`; no second Pages/Cloudflare deployer is introduced.
- No new package, secret, external service, or MiaoXYZ input is added.

## Sprint limits

One publisher workflow, at most two small validation/build modules in each repository, no new dependencies, authored files below 600 lines, and generated chunks below 500 KB. Run the repository-required checks in both lanes. Stop before Production mutation if checkout-profile, rollback, route, or approval evidence is incomplete.
