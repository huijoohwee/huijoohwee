---
title: Knowgrph Storyboard Neutral Schema Contract Demo
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "storyboard"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: false
kgDocumentStructureBaselineLock: false
flow:
  direction: LR
  edgeType: smoothstep
  nodes:
    - id: CONTRACT_ROOT
      type: Story
      label: Neutral Schema Contract
      group: Contract
      summary: Minimal storyboard contract fixture for neutral alias validation.
      task: Hold one compact source graph for storyboard schema validation.
      theme: Neutral
      tags: ["storyboard", "contract", "neutral"]
    - id: CONTRACT_A
      type: Panel
      label: Alias Group Step
      group: Backlog
      step: 1
      context: Schema Surface
      state: Pending
      summary: Validates `group`, `step`, `context`, and `state`.
      task: Validate action alias parsing through `task`.
      narration: 'Speaker: "Validate neutral aliases."'
      brief: Neutral board card for schema validation.
      theme: Base
      assets:
        - "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
      documentUrl: "https://airvio.co/knowgrph"
      priority: P0
      order: 10
    - id: CONTRACT_B
      type: Shot
      label: Alias Category Sequence
      category: In Review
      sequenceNumber: 2
      summary: Validates `category`, `sequenceNumber`, `workflow`, and `speakerLine`.
      workflow: Validate action alias parsing through `workflow`.
      speakerLine: 'Reviewer: "Sequence alias remains stable."'
      visualBrief: Minimal visual brief alias coverage.
      variant: Review
      referenceLinks:
        - "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80"
      imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80"
      priority: P1
      order: 20
    - id: CONTRACT_C
      type: Frame
      label: Alias Bucket Position
      bucket: Approved
      position: 3
      summary: Validates `bucket`, `position`, `instructions`, `quote`, `briefUrl`, and `assetRefs`.
      instructions: Validate action alias parsing through `instructions`.
      quote: 'Lead: "Approved contract state."'
      artDirection: Minimal art direction alias coverage.
      preset: Contract
      assetRefs:
        - "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80"
      videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      briefUrl: "https://airvio.co/knowgrph"
      priority: P0
      order: 30
  edges:
    - id: edge:contract:a
      source: CONTRACT_ROOT
      target: CONTRACT_A
    - id: edge:contract:b
      source: CONTRACT_ROOT
      target: CONTRACT_B
    - id: edge:contract:c
      source: CONTRACT_ROOT
      target: CONTRACT_C
---

# Knowgrph Storyboard Neutral Schema Contract Demo

Use this document to validate the neutral alias contract for the native `2D Renderer: Storyboard` surface.

## Related Docs

- [Storyboard Demo Index](./knowgrph-storyboard-demo-index.md)
- [Storyboard Demo](./knowgrph-storyboard-demo.md)
- [Storyboard Product UI Demo](./knowgrph-storyboard-product-ui-demo.md)

## Validation Goals

- Confirm the storyboard renderer activates from `kgCanvas2dRenderer: storyboard`.
- Confirm minimal neutral alias fields project into the same native storyboard card layout without any renderer-specific schema fork.
- Confirm `group`, `category`, and `bucket` all resolve to lane grouping.
- Confirm `step`, `sequenceNumber`, and `position` all resolve to the frame/index badge.
- Confirm `context` + `state` compose slugline text when no explicit `slugline` is present.
- Confirm `task`, `workflow`, and `instructions` all resolve to the native `Action` block.
- Confirm `narration`, `speakerLine`, and `quote` all resolve to the native `Dialogue` block.
- Confirm `brief`, `visualBrief`, and `artDirection` all resolve to the native `Visual Brief` block.
- Confirm `theme`, `variant`, and `preset` all resolve to the style chip in the visual brief.
- Confirm `assets`, `referenceLinks`, and `assetRefs` all resolve to the native `Reference Pack`.
- Confirm `documentUrl` and `briefUrl` both resolve to the outbound source/brief link.
- Confirm the fixture stays universal, neutral, project-agnostic, and file-agnostic.

## Expected Lanes

- `Backlog` should contain `CONTRACT_A`.
- `In Review` should contain `CONTRACT_B`.
- `Approved` should contain `CONTRACT_C`.

## Expected Card Signals

- `CONTRACT_A` should validate `group`, `step`, `context`, `state`, `task`, `narration`, `brief`, `theme`, `assets`, and `documentUrl`.
- `CONTRACT_B` should validate `category`, `sequenceNumber`, `workflow`, `speakerLine`, `visualBrief`, `variant`, and `referenceLinks`.
- `CONTRACT_C` should validate `bucket`, `position`, `instructions`, `quote`, `artDirection`, `preset`, `assetRefs`, `videoUrl`, and `briefUrl`.

## Fixture Intent

- Keep content minimal so schema coverage stays obvious.
- Prefer alias breadth over narrative depth.
- Use this file as a lightweight regression and manual validation surface for neutral storyboard parsing.
