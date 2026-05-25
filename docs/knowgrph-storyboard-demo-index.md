---
title: Knowgrph Storyboard Demo Index
---

# Knowgrph Storyboard Demo Index

Central reference for the native `2D Renderer: Storyboard` demo set.

## Demo Tiers

| Tier | File | Primary Purpose | Best For |
|---|---|---|---|
| Cinematic | `knowgrph-storyboard-demo.md` | Rich scene/shot storytelling with storyboard-specific sections | Visual review, narrative validation, media-rich card checks |
| Product UI | `knowgrph-storyboard-product-ui-demo.md` | Neutral product-review workflow with broader alias usage | Graph-to-board review flow, selection sync, project-agnostic product demos |
| Neutral Contract | `knowgrph-storyboard-neutral-schema-contract-demo.md` | Minimal schema-contract fixture with compact alias coverage | Regression checks, alias verification, parser/runtime contract validation |

## File Reference

- [knowgrph-storyboard-demo.md](file:///Users/huijoohwee/Documents/GitHub/huijoohwee/docs/knowgrph-storyboard-demo.md)
- [knowgrph-storyboard-product-ui-demo.md](file:///Users/huijoohwee/Documents/GitHub/huijoohwee/docs/knowgrph-storyboard-product-ui-demo.md)
- [knowgrph-storyboard-neutral-schema-contract-demo.md](file:///Users/huijoohwee/Documents/GitHub/huijoohwee/docs/knowgrph-storyboard-neutral-schema-contract-demo.md)

## Shared Contract

- All demos activate the storyboard renderer through `kgCanvas2dRenderer: "storyboard"`.
- All demos keep frontmatter and `flow.nodes[*]` as the source of truth.
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
- Use the product UI demo for neutral workflow review and selection-sync validation.
- Use the neutral contract demo for schema/alias regression checks and compact manual inspection.

## Maintenance Notes

- Add new storyboard demos to this index instead of scattering ad hoc references.
- Keep demo naming tiered by purpose: narrative, workflow, or contract.
- Prefer extending the neutral contract demo when validating new alias support.
