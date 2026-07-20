---
title: "Huijoohwee Generated Mirror Runtime Readiness"
doc_type: "Runtime Contract"
status: "runtime-ready"
schema: "huijoohwee-runtime-readiness/v1"
frontmatter_contract: "required"
authority: "generated production mirror validation"
---

# Huijoohwee Generated Mirror Runtime Readiness

This repository is a generated, independently verifiable production mirror.
Knowgrph owns source generation and the only Cloudflare release workflow.

A mirror revision is acceptable only when `npm run runtime:check` proves:

- `.well-known/runtime-readiness.json` names one exact Knowgrph source SHA;
- the generated application shell and every local module or stylesheet reference exist;
- Cloudflare routing and Worker artifacts parse and are non-empty;
- required Pages Functions and generated source mirrors exist;
- local runtime notes are absent from the repository contract surface; and
- the validation workflow runs on pull requests and every push to `main`.

The canonical checkout is healthy only when it is on `main`, clean, and exactly
equal to fetched `origin/main`. Device reconcilers may fast-forward a clean
checkout but must never stash, merge, rebase, reset, clean, or publish local
canonical files.

Deployment, production smoke, rollback, and publication happen in Knowgrph's
protected-main release controller. This repository deliberately has no second
deployment owner.
