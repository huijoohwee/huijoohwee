---
title: Knowgrph Storyboard Product UI Demo
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "storyboard"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: false
kgDocumentStructureBaselineLock: false
flow:
  direction: {key: direction, type: string, value: "LR"}
  edgeType: {key: edgeType, type: string, value: "smoothstep"}
  snapToGrid: {key: snapToGrid, type: boolean, value: true}
  computed: {key: computed, type: boolean, value: false}
  nodes:
    - id: {key: id, type: string, value: "BOARD_ROOT"}
      type: {key: type, type: string, value: "Story"}
      label: {key: label, type: string, value: "Product Review Flow"}
      group: {key: group, type: string, value: "Planning"}
      summary: {key: summary, type: string, value: "Neutral product UI storyboard demo for review, sync, and delivery."}
      task: {key: task, type: string, value: "Keep review artifacts, comments, and source state in one native graph-derived board."}
      theme: {key: theme, type: string, value: "Neutral UI"}
      tags: {key: tags, type: array, value: ["storyboard", "product-ui", "review"]}
    - id: {key: id, type: string, value: "STEP_01"}
      type: {key: type, type: string, value: "Panel"}
      label: {key: label, type: string, value: "Intake Triage"}
      group: {key: group, type: string, value: "Backlog"}
      step: {key: step, type: number, value: 1}
      context: {key: context, type: string, value: "Review Inbox"}
      state: {key: state, type: string, value: "New Request"}
      summary: {key: summary, type: string, value: "A new review request lands with screenshots, notes, and a target artifact."}
      task: {key: task, type: string, value: "Consolidate incoming comments into one neutral intake card without duplicating state across tools."}
      narration: {key: narration, type: string, value: "Reviewer: \"Keep the ask scoped, readable, and source-owned.\""}
      brief: {key: brief, type: string, value: "Product review inbox with compact cards, screenshots, and a clear canonical intake path."}
      theme: {key: theme, type: string, value: "Workspace UI"}
      assets: {key: assets, type: array, value: ["https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"]}
      image: {key: image, type: string, value: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80"}
      documentUrl: {key: documentUrl, type: string, value: "https://airvio.co/knowgrph"}
      owner: {key: owner, type: string, value: "Review"}
      priority: {key: priority, type: string, value: "P0"}
      tags: {key: tags, type: array, value: ["intake", "backlog", "scope"]}
      order: {key: order, type: number, value: 10}
    - id: {key: id, type: string, value: "STEP_02"}
      type: {key: type, type: string, value: "Shot"}
      label: {key: label, type: string, value: "Comment Merge"}
      group: {key: group, type: string, value: "In Review"}
      sequenceNumber: {key: sequenceNumber, type: number, value: 2}
      context: {key: context, type: string, value: "Active Canvas"}
      state: {key: state, type: string, value: "Consolidating"}
      summary: {key: summary, type: string, value: "Related comments, screenshots, and references merge into one review surface."}
      workflow: {key: workflow, type: string, value: "Merge overlapping requests before implementation so the board reflects one coherent ask."}
      speakerLine: {key: speakerLine, type: string, value: "Designer: \"One board, one review path, no stale side copy.\""}
      visualBrief: {key: visualBrief, type: string, value: "Product canvas with annotation chips, grouped comments, and a compact review lane."}
      variant: {key: variant, type: string, value: "Comment Density"}
      referenceLinks: {key: referenceLinks, type: array, value: ["https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"]}
      imageUrl: {key: imageUrl, type: string, value: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80"}
      owner: {key: owner, type: string, value: "Design"}
      priority: {key: priority, type: string, value: "P1"}
      tags: {key: tags, type: array, value: ["merge", "comments", "canvas"]}
      order: {key: order, type: number, value: 20}
    - id: {key: id, type: string, value: "STEP_03"}
      type: {key: type, type: string, value: "Frame"}
      label: {key: label, type: string, value: "Selection Sync"}
      category: {key: category, type: string, value: "In Review"}
      ordinal: {key: ordinal, type: number, value: 3}
      context: {key: context, type: string, value: "Storyboard Surface"}
      state: {key: state, type: string, value: "Selected"}
      summary: {key: summary, type: string, value: "Selecting a card keeps the source node and the review board aligned."}
      instructions: {key: instructions, type: string, value: "Verify the active card selects the matching graph node and preserves a neutral, project-agnostic handoff."}
      voiceOver: {key: voiceOver, type: string, value: "System: \"Selection sync confirms one board and one source of truth.\""}
      artDirection: {key: artDirection, type: string, value: "Native storyboard card with selection emphasis, compact chips, and linked source context."}
      preset: {key: preset, type: string, value: "Native Board"}
      refs: {key: refs, type: array, value: ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"]}
      imageUrl: {key: imageUrl, type: string, value: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"}
      owner: {key: owner, type: string, value: "Product"}
      priority: {key: priority, type: string, value: "P0"}
      tags: {key: tags, type: array, value: ["selection", "sync", "board"]}
      order: {key: order, type: number, value: 30}
    - id: {key: id, type: string, value: "STEP_04"}
      type: {key: type, type: string, value: "Panel"}
      label: {key: label, type: string, value: "Delivery Handoff"}
      bucket: {key: bucket, type: string, value: "Approved"}
      position: {key: position, type: number, value: 4}
      context: {key: context, type: string, value: "Delivery Surface"}
      state: {key: state, type: string, value: "Ready"}
      summary: {key: summary, type: string, value: "The approved board card carries its brief, references, and source link into delivery."}
      task: {key: task, type: string, value: "Hand off one approved card with clear references and no project-specific assumptions baked into the structure."}
      quote: {key: quote, type: string, value: "Lead: \"Approved. Deliver the brief with source, refs, and neutral wording.\""}
      brief: {key: brief, type: string, value: "Final product handoff card with review summary, references, and linked implementation context."}
      theme: {key: theme, type: string, value: "Delivery Kit"}
      assetRefs: {key: assetRefs, type: array, value: ["https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80"]}
      videoUrl: {key: videoUrl, type: string, value: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}
      briefUrl: {key: briefUrl, type: string, value: "https://airvio.co/knowgrph"}
      owner: {key: owner, type: string, value: "Delivery"}
      priority: {key: priority, type: string, value: "P0"}
      tags: {key: tags, type: array, value: ["approved", "handoff", "delivery"]}
      order: {key: order, type: number, value: 40}
  edges:
    - id: edge:board:step_01
      source: BOARD_ROOT
      target: STEP_01
    - id: edge:board:step_02
      source: BOARD_ROOT
      target: STEP_02
    - id: edge:board:step_03
      source: BOARD_ROOT
      target: STEP_03
    - id: edge:board:step_04
      source: BOARD_ROOT
      target: STEP_04
---

# Knowgrph Storyboard Product UI Demo

Use this document to validate a neutral, project-agnostic storyboard workflow for product UI review.

This fixture uses normalized `{key, type, value}` envelopes inside `flow.nodes[*]` so ingestion, parsing, and storyboard rendering all exercise the typed E2E contract instead of relying on plain-YAML-only alias parsing.

## Typed Fixture Contract

- This file is an approved typed validation fixture for neutral storyboard workflow and alias-envelope coverage.
- The opening YAML frontmatter block remains the first-block machine SSOT for renderer activation and graph-backed storyboard data.
- Normalized `{key, type, value}` envelopes in `flow.nodes[*]` are intentional here so typed ingest -> parse -> render behavior stays validated.
- This document is not the canonical plain-YAML authoring example; canonical authored storyboard docs should still prefer plain YAML for frontmatter and related schema-bearing blocks.
- Parser warning, repair, or fallback behavior is recovery-only; malformed YAML frontmatter still remains invalid source that must be fixed upstream.

## Related Docs

- [Storyboard Demo Index](./knowgrph-storyboard-demo-index.md)
- [Storyboard Demo](./knowgrph-storyboard-demo.md)
- [Storyboard Neutral Schema Contract Demo](./knowgrph-storyboard-neutral-schema-contract-demo.md)

## Validation Goals

- Confirm the storyboard renderer activates from frontmatter through `kgCanvas2dRenderer: storyboard`.
- Confirm the runtime supports neutral alias fields such as `group`, `bucket`, `category`, `step`, `sequenceNumber`, `ordinal`, `position`, `task`, `workflow`, `instructions`, `narration`, `speakerLine`, `voiceOver`, `brief`, `visualBrief`, `artDirection`, `theme`, `variant`, `preset`, `assets`, `assetRefs`, `refs`, `referenceLinks`, `documentUrl`, and `briefUrl`.
- Confirm alias-backed cards still render the same native sections: frame badge, slugline, `Summary`, `Action`, `Dialogue`, `Visual Brief`, `Reference Pack`, tags, metadata, and source link.
- Confirm `context` + `state` compose slugline text when no explicit `slugline` is authored.
- Confirm `group`, `bucket`, and `category` all drive native lane grouping without introducing renderer-specific schema forks.
- Confirm selection-focused review cards remain compact and readable while still selecting the source node in the active graph store.
- Confirm the product UI review flow stays universal and neutral: no project-locked field names, no file-specific assumptions, no copied vendor shells.

## Expected Lanes

- `Backlog` should contain `STEP_01`.
- `In Review` should contain `STEP_02` and `STEP_03`.
- `Approved` should contain `STEP_04`.

## Expected Card Signals

- `STEP_01` should validate `group`, `step`, `task`, `narration`, `brief`, `theme`, `assets`, and `documentUrl`.
- `STEP_02` should validate `sequenceNumber`, `workflow`, `speakerLine`, `visualBrief`, `variant`, and `referenceLinks`.
- `STEP_03` should validate `category`, `ordinal`, `instructions`, `voiceOver`, `artDirection`, and `preset`.
- `STEP_04` should validate `bucket`, `position`, `quote`, `brief`, `assetRefs`, `briefUrl`, and video-backed approved delivery cards.

## Demo Intent

- The first card proves neutral intake can stay source-owned.
- The second and third cards prove active review can remain graph-derived and selection-synced.
- The final card proves approved delivery can stay compact, referenced, and project-agnostic.
