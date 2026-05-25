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
  direction: LR
  edgeType: smoothstep
  nodes:
    - id: BOARD_ROOT
      type: Story
      label: Product Review Flow
      group: Planning
      summary: Neutral product UI storyboard demo for review, sync, and delivery.
      task: Keep review artifacts, comments, and source state in one native graph-derived board.
      theme: Neutral UI
      tags: ["storyboard", "product-ui", "review"]
    - id: STEP_01
      type: Panel
      label: Intake Triage
      group: Backlog
      step: 1
      context: Review Inbox
      state: New Request
      summary: A new review request lands with screenshots, notes, and a target artifact.
      task: Consolidate incoming comments into one neutral intake card without duplicating state across tools.
      narration: 'Reviewer: "Keep the ask scoped, readable, and source-owned."'
      brief: Product review inbox with compact cards, screenshots, and a clear canonical intake path.
      theme: Workspace UI
      assets:
        - "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80"
        - "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
      image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80"
      documentUrl: "https://airvio.co/knowgrph"
      owner: Review
      priority: P0
      tags: ["intake", "backlog", "scope"]
      order: 10
    - id: STEP_02
      type: Shot
      label: Comment Merge
      group: In Review
      sequenceNumber: 2
      context: Active Canvas
      state: Consolidating
      summary: Related comments, screenshots, and references merge into one review surface.
      workflow: Merge overlapping requests before implementation so the board reflects one coherent ask.
      speakerLine: 'Designer: "One board, one review path, no stale side copy."'
      visualBrief: Product canvas with annotation chips, grouped comments, and a compact review lane.
      variant: Comment Density
      referenceLinks:
        - "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80"
        - "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
      imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80"
      owner: Design
      priority: P1
      tags: ["merge", "comments", "canvas"]
      order: 20
    - id: STEP_03
      type: Frame
      label: Selection Sync
      category: In Review
      ordinal: 3
      context: Storyboard Surface
      state: Selected
      summary: Selecting a card keeps the source node and the review board aligned.
      instructions: Verify the active card selects the matching graph node and preserves a neutral, project-agnostic handoff.
      voiceOver: 'System: "Selection sync confirms one board and one source of truth."'
      artDirection: Native storyboard card with selection emphasis, compact chips, and linked source context.
      preset: Native Board
      refs:
        - "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
      owner: Product
      priority: P0
      tags: ["selection", "sync", "board"]
      order: 30
    - id: STEP_04
      type: Panel
      label: Delivery Handoff
      bucket: Approved
      position: 4
      context: Delivery Surface
      state: Ready
      summary: The approved board card carries its brief, references, and source link into delivery.
      task: Hand off one approved card with clear references and no project-specific assumptions baked into the structure.
      quote: 'Lead: "Approved. Deliver the brief with source, refs, and neutral wording."'
      brief: Final product handoff card with review summary, references, and linked implementation context.
      theme: Delivery Kit
      assetRefs:
        - "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
        - "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80"
      videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      briefUrl: "https://airvio.co/knowgrph"
      owner: Delivery
      priority: P0
      tags: ["approved", "handoff", "delivery"]
      order: 40
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

## Related Docs

- [Storyboard Demo Index](file:///Users/huijoohwee/Documents/GitHub/huijoohwee/docs/knowgrph-storyboard-demo-index.md)
- [Storyboard Demo](file:///Users/huijoohwee/Documents/GitHub/huijoohwee/docs/knowgrph-storyboard-demo.md)
- [Storyboard Neutral Schema Contract Demo](file:///Users/huijoohwee/Documents/GitHub/huijoohwee/docs/knowgrph-storyboard-neutral-schema-contract-demo.md)

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
