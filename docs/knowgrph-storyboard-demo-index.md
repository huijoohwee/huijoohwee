---
title: Knowgrph Storyboard Demo Index
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "d3"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: false
kgDocumentStructureBaselineLock: false
---

# Knowgrph Storyboard Demo Index

Central reference for the native `2D Renderer: Storyboard` demo set.

## Markdown YAML Frontmatter Contract

- Every storyboard demo in this set starts with a valid YAML frontmatter block as the first block in the file.
- Frontmatter and `flow.nodes[*]` remain the machine SSOT; the Markdown body is the human validation and explanation layer.
- These storyboard demos are approved typed validation fixtures, not canonical plain-YAML authoring examples.
- Canonical authored storyboard docs should prefer plain YAML for frontmatter and related schema-bearing blocks.
- Normalized `{key, type, value}` wrappers in this demo set exist specifically to exercise ingest -> parse -> render fidelity for the typed E2E contract.
- Parser warning, repair, or fallback behavior is recovery-only; malformed YAML frontmatter still remains invalid source that must be fixed upstream.

## Demo Tiers

| Tier | File | Primary Purpose | Best For |
|---|---|---|---|
| Cinematic | `knowgrph-storyboard-demo.md` | Rich scene/shot storytelling with storyboard-specific sections | Visual review, narrative validation, media-rich card checks |
| Product UI | `knowgrph-storyboard-product-ui-demo.md` | Neutral product-review workflow with broader alias usage | Graph-to-board review flow, selection sync, project-agnostic product demos |
| Neutral Contract | `knowgrph-storyboard-neutral-schema-contract-demo.md` | Minimal schema-contract fixture with compact alias coverage | Regression checks, alias verification, parser/runtime contract validation |

## File Reference

- [knowgrph-storyboard-demo.md](./knowgrph-storyboard-demo.md)
- [knowgrph-storyboard-product-ui-demo.md](./knowgrph-storyboard-product-ui-demo.md)
- [knowgrph-storyboard-neutral-schema-contract-demo.md](./knowgrph-storyboard-neutral-schema-contract-demo.md)

## Shared Contract

- All demos activate the storyboard renderer through `kgCanvas2dRenderer: "storyboard"`.
- All demos keep frontmatter and `flow.nodes[*]` as the source of truth.
- All graph-backed storyboard fixtures in this set use normalized `{key, type, value}` envelopes in `flow.nodes[*]` so ingestion -> parsing -> rendering exercises the typed E2E contract directly.
- This typed envelope usage is fixture-scoped only and must not redefine canonical plain-YAML authoring guidance outside the approved validation set.
- All demos validate native storyboard projection without copied vendor shells or renderer-specific schema forks.
- All demos are designed to stay neutral, universal, project-agnostic, and file-agnostic.

## Coverage Map

| Capability | Cinematic | Product UI | Neutral Contract |
|---|---|---|---|
| Lane grouping from canonical fields | Yes | Yes | Yes |
| Frame/index badge projection | Yes | Yes | Yes |
| Slugline derivation | Yes | Yes | Yes |
| `Summary` / `Action` / `Dialogue` blocks | Yes | Yes | Yes |
| `Visual Brief` block | Yes | Yes | Yes |
| `Reference Pack` block | Yes | Yes | Yes |
| Selection-sync review flow | Yes | Yes | Minimal |
| Media-rich video/image cards | Yes | Yes | Yes |
| Neutral alias breadth | Medium | High | Highest |
| Narrative depth | Highest | Medium | Lowest |
| Regression-fixture density | Medium | Medium | Highest |

## Alias Focus

### Cinematic

- Best for validating `frame`, `slugline`, `location`, `timeOfDay`, `action`, `dialogue`, `prompt`, `style`, and `references`.

### Product UI

- Best for validating neutral review-oriented aliases such as `group`, `bucket`, `category`, `step`, `sequenceNumber`, `ordinal`, `position`, `task`, `workflow`, `instructions`, `narration`, `speakerLine`, `voiceOver`, `brief`, `visualBrief`, `artDirection`, `theme`, `variant`, `preset`, `assets`, `assetRefs`, `refs`, `referenceLinks`, `documentUrl`, and `briefUrl`.

### Neutral Contract

- Best for minimal parser/runtime contract checks where alias mapping needs to stay obvious and compact.

## Recommended Use

- Use the cinematic demo for manual visual QA and storytelling checks.
- Use the product UI demo for neutral workflow review, selection-sync validation, and typed alias-envelope coverage.
- Use the neutral contract demo for schema/alias regression checks, typed ingestion coverage, and compact manual inspection.

## Maintenance Notes

- Add new storyboard demos to this index instead of scattering ad hoc references.
- Keep demo naming tiered by purpose: narrative, workflow, or contract.
- Prefer extending the neutral contract demo when validating new alias support.