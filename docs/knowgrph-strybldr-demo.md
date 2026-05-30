---
title: "Knowgrph Strybldr Demo - 100% PRD/TAD E2E"
graphId: "md:knowgrph-strybldr-demo-v1"
doc_type: "Strybldr Demo - PRD/TAD E2E Validation"
date: "2026-05-30"
lang: en-US
implementation_contract: "/Users/huijoohwee/Documents/GitHub/knowgrph/docs/documents/knowgrph-strybldr-prd-tad.md"

kgStrybldrStoryboard: true
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "strybldr"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: false
kgDocumentStructureBaselineLock: false

demo_flow:
  - "Toolbar -> Launch -> Import Image"
  - "test-validation-input-external: /Users/huijoohwee/Documents/GitHub/huijoohwee/image"
  - "test-validation-input-forbid-hardcode-in-repo: true"
  - "Floating Panel -> Strybldr -> Analyze locally"
  - "Toolbar -> Canvas View Mode -> 2D Renderer: Strybldr"
  - "User updates Source / Storyboard / Elements cards"
  - "Toolbar -> Run All"
  - "Floating Panel -> Strybldr -> Generate Video remains the same direct action"
prd_tad_acceptance:
  - "PRD-STB-E01 image import"
  - "PRD-STB-E02 local detection first"
  - "PRD-STB-E03 editable storyboard"
  - "PRD-STB-E04 bounded video handoff"
  - "PRD-STB-E05 observability and economics"
validation_images_count: 12
validation_total_bytes: 26944659
expected_canvas_cards: 36
expected_canvas_lanes:
  - "Source"
  - "Storyboard"
  - "Elements"
expected_video_artifact: "strybldr-video-*.md or strybldr-video-fallback-*.md"
---

# Knowgrph Strybldr Demo

This document demos the completed Strybldr path from `/Users/huijoohwee/Documents/GitHub/knowgrph/docs/documents/knowgrph-strybldr-prd-tad.md`:

`Toolbar -> Launch -> Import Image` -> select external validation images -> `Strybldr -> Analyze locally` -> review individual element cards in `2D Renderer: Strybldr` -> user edits cards -> `Toolbar -> Run All` to reuse the Strybldr video handoff path.

It is intentionally a demo fixture, runbook, and parser-ready seed. The validation image directory is external test input only; application runtime must derive behavior from selected files, corpus source units, parsed frontmatter, transient image-file registry entries, and Strybldr graph cards instead of hardcoded paths, file names, or demo IDs.

## Demo Contract

- Import path: `Launch -> Import Image`.
- Test validation input: `/Users/huijoohwee/Documents/GitHub/huijoohwee/image`.
- Hardcode rule: that validation path and its image filenames are allowed only in this external demo document, not in `/Users/huijoohwee/Documents/GitHub/knowgrph` implementation code.
- Image selection: multi-select all 12 PNG files, or select one image for a smaller smoke.
- Expected generated workspace artifact: one run-level `.strybldr.md` artifact plus imported image source files.
- Expected reverse engineering: `Strybldr -> Analyze locally` calls the local DETR owner first and projects detected elements into editable Strybldr cards; Human geometry is privacy-safe and identity-free.
- Expected renderer: `2D Renderer: Strybldr`, which reuses the shared Storyboard surface.
- Expected floating panel: `Strybldr`.
- Expected lanes on canvas: `Source`, `Storyboard`, and `Elements`.
- Expected user update: card title, summary, action, prompt, order, and source-backed element fields remain editable before generation.
- Expected Run All behavior: Toolbar `Run All` is enabled for `2D Renderer: Strybldr` and dispatches the same Strybldr video handoff path as the panel `Generate Video` button.
- Expected economics: base demo costs zero paid calls; `Run All` / `Generate Video` uses configured BytePlus only when active credentials are present and otherwise writes a structured fallback artifact.

## Manual Runbook

1. Open Knowgrph at `/knowgrph/`.
2. Open `Toolbar -> Launch`.
3. Click `Import Image`.
4. In the file picker, open `/Users/huijoohwee/Documents/GitHub/huijoohwee/image`.
5. Select the 12 files listed in the manifest below.
6. Confirm the import summary reports imported image inputs and that a `.strybldr.md` artifact is active.
7. Confirm the active canvas switches to `Canvas View Mode -> 2D Renderer: Strybldr`.
8. Confirm the floating panel opens to `Strybldr`.
9. Click `Analyze locally`.
10. Confirm local element cards are added or the fallback source-metadata cards remain usable if no local detections pass threshold.
11. Confirm image-derived cards are visible in `Source`, `Storyboard`, and `Elements`.
12. Edit at least one card title, summary, action, or prompt; this is the user-update gate before spend.
13. Click Toolbar `Run All`.
14. Confirm either a BytePlus run starts through the shared owner or a `strybldr-video-fallback-*.md` artifact is written with approved cards, compiled prompt, provider, elapsed time, paid-call count, cache state, and error reason.
15. Optional direct-action parity check: click Strybldr `Generate Video` and confirm it writes the same generated/fallback artifact shape.

## Acceptance Checklist

| PRD/TAD gate | Evidence to collect | Owner proof |
|---|---|---|
| PRD-STB-E01 `Import Image` | Launch menu shows `Import Image`; import creates source units and a `.strybldr.md` file. | `LaunchDropdown.impl.tsx`, `workspaceActionBridge.ts`, `useWorkspaceFileActions/importActions.ts`. |
| PRD-STB-E02 local detection first | `Analyze locally` is available; DETR evidence uses `local-object-detection`; Human geometry disables identity/demographic outputs. | `strybldrLocalVision.ts`; `@huggingface/transformers`; `Xenova/detr-resnet-50`; `@vladmandic/human`. |
| PRD-STB-E03 editable storyboard | Strybldr canvas shows `Source`, `Storyboard`, and `Elements`; cards retain source-unit IDs, boxes, confidence, provider, and evidence kind. | `strybldrStoryboard.ts`, parser registry, shared Storyboard renderer. |
| PRD-STB-E04 bounded video handoff | Toolbar `Run All` and Strybldr `Generate Video` compile approved card text from the active graph and write `strybldr-video-*.md` or fallback Markdown. | `Toolbar.tsx`, `StrybldrFloatingPanelView.tsx`, `buildStrybldrVideoHandoffFromGraphData`, `generateRunVideoWithBytePlus`. |
| PRD-STB-E05 observability/economics | Artifact frontmatter includes provider, elapsedMs, paidCallCount, cacheHit, status, and errorReason when relevant. | `buildStrybldrVideoHandoffMarkdown`. |
| No hardcoded validation input in repo | `rg` for the external validation path and image basename returns no matches inside `/Users/huijoohwee/Documents/GitHub/knowgrph`. | Runtime derives from selected files and source units, not this demo manifest. |

## 100% Implementation Coverage Map

| Contract item | Demo state | Runtime owner |
|---|---|---|
| Combined PRD/TAD is the implementation contract | This file points to `knowgrph-strybldr-prd-tad.md` and exercises every PRD story. | `docs/documents/knowgrph-strybldr-prd-tad.md`. |
| Import one or more images | Runbook imports 12 external PNGs through `Launch -> Import Image`. | `handleImportLocalImages`. |
| Generate Strybldr Markdown artifact | Import creates run-level `.strybldr.md`; this file also contains a direct-open seed for smoke validation. | `buildStrybldrStoryboardDocument`, `serializeStrybldrStoryboardMarkdown`. |
| Reverse engineer to individual elements | Local analysis uses DETR to emit element cards with label, confidence, source box, provider, and evidence kind. | `runStrybldrDetrObjectDetection`. |
| Privacy-safe human geometry | Human is available as a local harness with face descriptor, emotion, liveness, demographic inference, and embeddings disabled/unused. | `runStrybldrHumanGeometry`. |
| Optional ModelArk visual grounding | Not automatic; paid grounding remains explicit and bounded. | Type contract supports `modelark-visual-grounding`; current demo keeps paid grounding at 0. |
| User update before spend | Runbook requires editing a card before Toolbar `Run All` or `Generate Video`; the seed below is a post-user-update direct-open state. | Shared Storyboard card model plus active graph data. |
| Generate video or fallback | Toolbar `Run All` and Strybldr `Generate Video` compile only approved graph cards and write a generated or fallback handoff artifact. | `supportsToolbarRunAll`, `WORKFLOW_RUN_ALL_EVENT`, `buildStrybldrVideoHandoffFromGraphData`, `buildStrybldrVideoHandoffMarkdown`, `generateRunVideoWithBytePlus`. |
| TCO/token economics | Base import/storyboard path uses local/source metadata and paid calls stay 0 unless BytePlus is active. | Strybldr panel provider gate and handoff metadata. |
| No duplicate workspace/import owner | Launch delegates to workspace bridge and local import owners. | `importLocalImages`, Source Files, corpus source units. |

## Test Validation Input - Forbid Hardcode In Repo

The path `/Users/huijoohwee/Documents/GitHub/huijoohwee/image` is the current smoke input for this external demo document. It must not become a product default, fixture branch, filename guard, provider condition, or parser rule inside `/Users/huijoohwee/Documents/GitHub/knowgrph`.

Repo hardcode scan:

```bash
rg -n "/Users/huijoohwee/Documents/GitHub/huijoohwee/image|客家先民南迁图|knowgrph-strybldr-demo|strybldr-demo-hakka" \
  /Users/huijoohwee/Documents/GitHub/knowgrph \
  --glob '!canvas/node_modules/**' --glob '!node_modules/**' --glob '!canvas/dist/**'
```

Expected result: no matches. If this scan finds implementation matches, the demo has leaked into product code and the implementation is not PRD/TAD-compliant.

## Validation Image Manifest

| # | Image | Dimensions | Bytes | SHA-256 prefix |
|---:|---|---:|---:|---|
| 01 | `../image/客家先民南迁图-张德光-01.png` | 857x1526 | 1480452 | `f4c894630e7576c0` |
| 02 | `../image/客家先民南迁图-张德光-02.png` | 854x1523 | 2356089 | `216fa4a68100c4dd` |
| 03 | `../image/客家先民南迁图-张德光-03.png` | 854x1523 | 2386401 | `1a0492c4a5b9b953` |
| 04 | `../image/客家先民南迁图-张德光-04.png` | 854x1523 | 2294129 | `47706c3e0cd6ff84` |
| 05 | `../image/客家先民南迁图-张德光-05.png` | 854x1523 | 2346029 | `e679dc0d13f4016b` |
| 06 | `../image/客家先民南迁图-张德光-06.png` | 854x1523 | 2421893 | `1f1ca72b7f5c9c08` |
| 07 | `../image/客家先民南迁图-张德光-07.png` | 854x1523 | 2419950 | `b4fa969b173d7807` |
| 08 | `../image/客家先民南迁图-张德光-08.png` | 854x1523 | 2375752 | `91fb51d18b695bfb` |
| 09 | `../image/客家先民南迁图-张德光-09.png` | 854x1523 | 2430827 | `c9fe4579d7729b1d` |
| 10 | `../image/客家先民南迁图-张德光-10.png` | 854x1523 | 2485719 | `447cfc1d9ad26e80` |
| 11 | `../image/客家先民南迁图-张德光-11.png` | 854x1523 | 2414905 | `dde0ab0f3bd8e93e` |
| 12 | `../image/客家先民南迁图-张德光-12.png` | 857x1526 | 1532513 | `87629c0eb3e18335` |

## Visual Input Preview

![Image 01](/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-01.png)
![Image 02](/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-02.png)
![Image 03](/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-03.png)
![Image 04](/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-04.png)
![Image 05](/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-05.png)
![Image 06](/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-06.png)
![Image 07](/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-07.png)
![Image 08](/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-08.png)
![Image 09](/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-09.png)
![Image 10](/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-10.png)
![Image 11](/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-11.png)
![Image 12](/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-12.png)

## Direct-Open Seed Semantics

The fenced Strybldr payload below is a parser-ready direct-open snapshot for demos where the user opens this Markdown file instead of repeating the import flow. It represents the state after import, reverse engineering, and a user update pass:

- `sources` mirror the imported image source-unit shape.
- `elements` are individual editable Strybldr cards.
- `evidenceKind: "user-edit"` marks the approved post-edit state for video handoff.
- `sourceBox` keeps element geometry available for Storyboard/Elements cards.
- `mediaUrl` uses `/__codebase_asset` so Viewer and Canvas render the images without hardcoding app logic.

The real E2E validation remains the UI path through `Launch -> Import Image`; this seed exists to make the acceptance state inspectable, parseable, and smoke-testable from a single Markdown file.

## Parser-Ready Strybldr Seed

Opening this document directly should still activate Strybldr mode because the frontmatter and fenced payload are valid Strybldr storyboard input.

```json strybldr-storyboard
{
  "version": 1,
  "runId": "strybldr-demo-hakka-migration-20260529",
  "createdAtMs": 1780069200000,
  "notes": "Demo seed for Launch -> Import Image -> Strybldr validation. The element cards represent an approved post-user-update state; the live import path can replace them with local DETR/Human evidence.",
  "sources": [
    {
      "sourceUnitId": "strybldr-demo-image-01",
      "workspacePath": "/客家先民南迁图-张德光-01.png.source.md",
      "relativePath": "../image/客家先民南迁图-张德光-01.png",
      "originalName": "客家先民南迁图-张德光-01.png",
      "mediaKind": "image",
      "mimeHint": "image/png",
      "byteSize": 1480452,
      "textHash": "sha256:f4c894630e7576c0",
      "mediaUrl": "/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-01.png"
    },
    {
      "sourceUnitId": "strybldr-demo-image-02",
      "workspacePath": "/客家先民南迁图-张德光-02.png.source.md",
      "relativePath": "../image/客家先民南迁图-张德光-02.png",
      "originalName": "客家先民南迁图-张德光-02.png",
      "mediaKind": "image",
      "mimeHint": "image/png",
      "byteSize": 2356089,
      "textHash": "sha256:216fa4a68100c4dd",
      "mediaUrl": "/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-02.png"
    },
    {
      "sourceUnitId": "strybldr-demo-image-03",
      "workspacePath": "/客家先民南迁图-张德光-03.png.source.md",
      "relativePath": "../image/客家先民南迁图-张德光-03.png",
      "originalName": "客家先民南迁图-张德光-03.png",
      "mediaKind": "image",
      "mimeHint": "image/png",
      "byteSize": 2386401,
      "textHash": "sha256:1a0492c4a5b9b953",
      "mediaUrl": "/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-03.png"
    },
    {
      "sourceUnitId": "strybldr-demo-image-04",
      "workspacePath": "/客家先民南迁图-张德光-04.png.source.md",
      "relativePath": "../image/客家先民南迁图-张德光-04.png",
      "originalName": "客家先民南迁图-张德光-04.png",
      "mediaKind": "image",
      "mimeHint": "image/png",
      "byteSize": 2294129,
      "textHash": "sha256:47706c3e0cd6ff84",
      "mediaUrl": "/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-04.png"
    },
    {
      "sourceUnitId": "strybldr-demo-image-05",
      "workspacePath": "/客家先民南迁图-张德光-05.png.source.md",
      "relativePath": "../image/客家先民南迁图-张德光-05.png",
      "originalName": "客家先民南迁图-张德光-05.png",
      "mediaKind": "image",
      "mimeHint": "image/png",
      "byteSize": 2346029,
      "textHash": "sha256:e679dc0d13f4016b",
      "mediaUrl": "/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-05.png"
    },
    {
      "sourceUnitId": "strybldr-demo-image-06",
      "workspacePath": "/客家先民南迁图-张德光-06.png.source.md",
      "relativePath": "../image/客家先民南迁图-张德光-06.png",
      "originalName": "客家先民南迁图-张德光-06.png",
      "mediaKind": "image",
      "mimeHint": "image/png",
      "byteSize": 2421893,
      "textHash": "sha256:1f1ca72b7f5c9c08",
      "mediaUrl": "/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-06.png"
    },
    {
      "sourceUnitId": "strybldr-demo-image-07",
      "workspacePath": "/客家先民南迁图-张德光-07.png.source.md",
      "relativePath": "../image/客家先民南迁图-张德光-07.png",
      "originalName": "客家先民南迁图-张德光-07.png",
      "mediaKind": "image",
      "mimeHint": "image/png",
      "byteSize": 2419950,
      "textHash": "sha256:b4fa969b173d7807",
      "mediaUrl": "/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-07.png"
    },
    {
      "sourceUnitId": "strybldr-demo-image-08",
      "workspacePath": "/客家先民南迁图-张德光-08.png.source.md",
      "relativePath": "../image/客家先民南迁图-张德光-08.png",
      "originalName": "客家先民南迁图-张德光-08.png",
      "mediaKind": "image",
      "mimeHint": "image/png",
      "byteSize": 2375752,
      "textHash": "sha256:91fb51d18b695bfb",
      "mediaUrl": "/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-08.png"
    },
    {
      "sourceUnitId": "strybldr-demo-image-09",
      "workspacePath": "/客家先民南迁图-张德光-09.png.source.md",
      "relativePath": "../image/客家先民南迁图-张德光-09.png",
      "originalName": "客家先民南迁图-张德光-09.png",
      "mediaKind": "image",
      "mimeHint": "image/png",
      "byteSize": 2430827,
      "textHash": "sha256:c9fe4579d7729b1d",
      "mediaUrl": "/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-09.png"
    },
    {
      "sourceUnitId": "strybldr-demo-image-10",
      "workspacePath": "/客家先民南迁图-张德光-10.png.source.md",
      "relativePath": "../image/客家先民南迁图-张德光-10.png",
      "originalName": "客家先民南迁图-张德光-10.png",
      "mediaKind": "image",
      "mimeHint": "image/png",
      "byteSize": 2485719,
      "textHash": "sha256:447cfc1d9ad26e80",
      "mediaUrl": "/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-10.png"
    },
    {
      "sourceUnitId": "strybldr-demo-image-11",
      "workspacePath": "/客家先民南迁图-张德光-11.png.source.md",
      "relativePath": "../image/客家先民南迁图-张德光-11.png",
      "originalName": "客家先民南迁图-张德光-11.png",
      "mediaKind": "image",
      "mimeHint": "image/png",
      "byteSize": 2414905,
      "textHash": "sha256:dde0ab0f3bd8e93e",
      "mediaUrl": "/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-11.png"
    },
    {
      "sourceUnitId": "strybldr-demo-image-12",
      "workspacePath": "/客家先民南迁图-张德光-12.png.source.md",
      "relativePath": "../image/客家先民南迁图-张德光-12.png",
      "originalName": "客家先民南迁图-张德光-12.png",
      "mediaKind": "image",
      "mimeHint": "image/png",
      "byteSize": 1532513,
      "textHash": "sha256:87629c0eb3e18335",
      "mediaUrl": "/__codebase_asset?path=huijoohwee/image/客家先民南迁图-张德光-12.png"
    }
  ],
  "elements": [
    {
      "id": "strybldr-demo-el-01",
      "sourceUnitId": "strybldr-demo-image-01",
      "label": "Panel 01 storyboard beat",
      "confidence": 0.1,
      "sourceBox": {"xmin": 0, "ymin": 0, "xmax": 1, "ymax": 1, "unit": "percentage"},
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 1,
      "summary": "Use imported image 01 as the opening visual reference.",
      "action": "Run local detection, then update this card with visible subjects, route markers, captions, and composition details.",
      "prompt": "Reverse engineer image 01 into a concise video beat while preserving source composition and provenance."
    },
    {
      "id": "strybldr-demo-el-02",
      "sourceUnitId": "strybldr-demo-image-02",
      "label": "Panel 02 storyboard beat",
      "confidence": 0.1,
      "sourceBox": {"xmin": 0, "ymin": 0, "xmax": 1, "ymax": 1, "unit": "percentage"},
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 2,
      "summary": "Use imported image 02 as the second storyboard reference.",
      "action": "Confirm local detections and refine the card into one motion-ready scene beat.",
      "prompt": "Reverse engineer image 02 into a concise video beat while preserving source composition and provenance."
    },
    {
      "id": "strybldr-demo-el-03",
      "sourceUnitId": "strybldr-demo-image-03",
      "label": "Panel 03 storyboard beat",
      "confidence": 0.1,
      "sourceBox": {"xmin": 0, "ymin": 0, "xmax": 1, "ymax": 1, "unit": "percentage"},
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 3,
      "summary": "Use imported image 03 as the third storyboard reference.",
      "action": "Identify the main visible elements and convert them into editable storyboard card text.",
      "prompt": "Reverse engineer image 03 into a concise video beat while preserving source composition and provenance."
    },
    {
      "id": "strybldr-demo-el-04",
      "sourceUnitId": "strybldr-demo-image-04",
      "label": "Panel 04 storyboard beat",
      "confidence": 0.1,
      "sourceBox": {"xmin": 0, "ymin": 0, "xmax": 1, "ymax": 1, "unit": "percentage"},
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 4,
      "summary": "Use imported image 04 as the fourth storyboard reference.",
      "action": "Preserve visual order and update the card after detector evidence is reviewed.",
      "prompt": "Reverse engineer image 04 into a concise video beat while preserving source composition and provenance."
    },
    {
      "id": "strybldr-demo-el-05",
      "sourceUnitId": "strybldr-demo-image-05",
      "label": "Panel 05 storyboard beat",
      "confidence": 0.1,
      "sourceBox": {"xmin": 0, "ymin": 0, "xmax": 1, "ymax": 1, "unit": "percentage"},
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 5,
      "summary": "Use imported image 05 as the fifth storyboard reference.",
      "action": "Turn visual evidence into a clear action note before video handoff.",
      "prompt": "Reverse engineer image 05 into a concise video beat while preserving source composition and provenance."
    },
    {
      "id": "strybldr-demo-el-06",
      "sourceUnitId": "strybldr-demo-image-06",
      "label": "Panel 06 storyboard beat",
      "confidence": 0.1,
      "sourceBox": {"xmin": 0, "ymin": 0, "xmax": 1, "ymax": 1, "unit": "percentage"},
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 6,
      "summary": "Use imported image 06 as the sixth storyboard reference.",
      "action": "Edit the card to reflect detected foreground, midground, and background elements.",
      "prompt": "Reverse engineer image 06 into a concise video beat while preserving source composition and provenance."
    },
    {
      "id": "strybldr-demo-el-07",
      "sourceUnitId": "strybldr-demo-image-07",
      "label": "Panel 07 storyboard beat",
      "confidence": 0.1,
      "sourceBox": {"xmin": 0, "ymin": 0, "xmax": 1, "ymax": 1, "unit": "percentage"},
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 7,
      "summary": "Use imported image 07 as the seventh storyboard reference.",
      "action": "Confirm detections and preserve the source-image relationship on every card.",
      "prompt": "Reverse engineer image 07 into a concise video beat while preserving source composition and provenance."
    },
    {
      "id": "strybldr-demo-el-08",
      "sourceUnitId": "strybldr-demo-image-08",
      "label": "Panel 08 storyboard beat",
      "confidence": 0.1,
      "sourceBox": {"xmin": 0, "ymin": 0, "xmax": 1, "ymax": 1, "unit": "percentage"},
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 8,
      "summary": "Use imported image 08 as the eighth storyboard reference.",
      "action": "Refine the card into a motion-ready beat before generation.",
      "prompt": "Reverse engineer image 08 into a concise video beat while preserving source composition and provenance."
    },
    {
      "id": "strybldr-demo-el-09",
      "sourceUnitId": "strybldr-demo-image-09",
      "label": "Panel 09 storyboard beat",
      "confidence": 0.1,
      "sourceBox": {"xmin": 0, "ymin": 0, "xmax": 1, "ymax": 1, "unit": "percentage"},
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 9,
      "summary": "Use imported image 09 as the ninth storyboard reference.",
      "action": "Use the card to capture updated user intent after visual evidence review.",
      "prompt": "Reverse engineer image 09 into a concise video beat while preserving source composition and provenance."
    },
    {
      "id": "strybldr-demo-el-10",
      "sourceUnitId": "strybldr-demo-image-10",
      "label": "Panel 10 storyboard beat",
      "confidence": 0.1,
      "sourceBox": {"xmin": 0, "ymin": 0, "xmax": 1, "ymax": 1, "unit": "percentage"},
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 10,
      "summary": "Use imported image 10 as the tenth storyboard reference.",
      "action": "Keep the beat editable and source-backed before any video provider call.",
      "prompt": "Reverse engineer image 10 into a concise video beat while preserving source composition and provenance."
    },
    {
      "id": "strybldr-demo-el-11",
      "sourceUnitId": "strybldr-demo-image-11",
      "label": "Panel 11 storyboard beat",
      "confidence": 0.1,
      "sourceBox": {"xmin": 0, "ymin": 0, "xmax": 1, "ymax": 1, "unit": "percentage"},
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 11,
      "summary": "Use imported image 11 as the eleventh storyboard reference.",
      "action": "Review local evidence and revise the card for continuity with neighboring panels.",
      "prompt": "Reverse engineer image 11 into a concise video beat while preserving source composition and provenance."
    },
    {
      "id": "strybldr-demo-el-12",
      "sourceUnitId": "strybldr-demo-image-12",
      "label": "Panel 12 storyboard beat",
      "confidence": 0.1,
      "sourceBox": {"xmin": 0, "ymin": 0, "xmax": 1, "ymax": 1, "unit": "percentage"},
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 12,
      "summary": "Use imported image 12 as the closing storyboard reference.",
      "action": "Finalize the edited card sequence before generating or writing the video handoff artifact.",
      "prompt": "Reverse engineer image 12 into a concise video beat while preserving source composition and provenance."
    }
  ]
}
```

## Generate Video Handoff Smoke

After the user edits Strybldr cards, Toolbar `Run All` and the panel `Generate Video` button must compile the active graph, not detached prompt text. The expected generated or fallback artifact is written at workspace root with this shape:

```yaml
---
kgStrybldrVideoHandoff: true
status: "fallback"
provider: "byteplus-modelark"
elapsedMs: 0
paidCallCount: 0
cacheHit: false
errorReason: "BytePlus ModelArk is not the active provider."
---
```

Expected compiled prompt prefix:

```text
Create one short video from the approved Strybldr storyboard cards below.
Use only these approved card fields and references; do not invent extra source images or hidden context.
Preserve source composition, element positions, and card order. Keep motion concise and demo-ready.
```

Acceptance signal:

- If BytePlus ModelArk is active with valid credentials, the artifact status is `generated` and includes `renderUrl` / `sourceUrl` when returned.
- If BytePlus is inactive, missing credentials, or the provider fails, the artifact status is `fallback` and still includes approved cards, compiled prompt, elapsed time, paid-call count, cache state, provider, and error reason.
- Paid call count stays `0` until the user explicitly clicks Toolbar `Run All` or `Generate Video` with BytePlus active.
- The compiled prompt must include the edited card text from the active graph.

## Runtime Notes

- The authored seed above is only a direct-open demo. The main validation remains the UI path through `Launch -> Import Image`.
- Multi-image import should create one run-level `.strybldr.md` artifact and source-backed cards for the selected images.
- Toolbar `Run All` and the Strybldr panel must read the active graph, not detached prompt text, when compiling the video handoff.
- A failed or unconfigured provider should still produce a useful fallback Markdown artifact with approved cards, elapsed time, provider name, paid-call count, and error reason.
- Any validation-specific path or filename in this document is external demo input and must remain absent from the Knowgrph implementation repo.
