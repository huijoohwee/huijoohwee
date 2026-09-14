---
title: "Mirror validation adoption"
doc_type: "PRD-TAD-ADR-MVP-GTM"
version: "1.0.0"
owner: "huijoohwee"
date: "2026-09-14"
lang: "en-US"
frontmatter_contract: "required"
load_policy: "on-demand"
continuity_id: "MIRROR-VALIDATION-ADOPTION-001"
prd_revision: "1.0.0"
tad_revision: "1.0.0"
adr_revision: "1.0.0"
mvp_revision: "1.0.0"
gtm_revision: "1.0.0"
status: "implementation"
---

# Mirror validation adoption

## PRD

`MIRROR-VALIDATION-ADOPTION-001@1.0.0`: the mirror maintainer verifies source
contracts and generated readiness with explicit input-bound reuse. Role/Subject:
maintainer. Action/Verb: validates. Object: exact mirror inputs. Acceptance keeps
runtime readiness mandatory on every PR and main push, retains the lifecycle
regression, and avoids rerunning unchanged deterministic source checks.

## TAD and ADR

`npm run check` delegates to the pinned Agentic OS validation owner. Its
`guides/REPOSITORY-VALIDATION.md` defines execution; package and lockfile bind the
exact installed revision. `.agentic-os-validation.json` owns only local command
and dependency declarations. The original chain remains `check:source`.

Projection tests bind their complete source/fixture closure and use only Node
builtins. They may reuse exact local success; an unchanged matching failure stops
another attempt. Digest tests and readiness import installed Agentic OS generation
code, so they run fresh along with evaluator and lifecycle checks. Readiness remains
mandatory without a wildcard selection rule, so unknown files retain broad fallback. CI verifies its event baseline and always executes selected checks
fresh. The workflow retains `Runtime Readiness Gate` and obtains full Git history.

This is authored validation policy at the repository root. No generated application,
asset, Worker, routing or deployment content changes. Graph's protected workflow
continues to own production generation, publication, deployment and rollback.

## MVP

Check the policy and dependency closure, run the existing runtime tests and readiness
validator, and require exact protected CI. Verify repeated local deterministic
checks reuse matching inputs and CI never does. A shared policy or package change
selects the complete fallback. A runtime receipt does not grant deployment authority.

## GTM

Measure executed and reused checks plus hashing/command time for this repository's
large generated asset tree. Preserve failed observations and report source scope
separately from deployed parity. No savings, revenue or willingness to pay is assumed.
