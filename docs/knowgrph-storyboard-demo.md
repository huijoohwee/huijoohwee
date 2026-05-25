---
title: Knowgrph Storyboard Demo
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
    - id: STORY_ROOT
      type: Story
      label: Creative Review Storyboard
      stage: Planning
      summary: Native in-repo storyboard demo for the 2D Storyboard renderer.
      slugline: Story Spine - Review Narrative
      action: Root story node groups all review scenes and preserves one native graph source for storyboard projection.
      owner: Production
      priority: P0
      tags: ["storyboard", "demo", "launch"]
      style: "Knowgrph Native"
    - id: SCENE_01
      type: Scene
      label: Cold Open
      stage: Draft
      frame: 1
      location: Conference Room
      timeOfDay: Monday
      summary: Open on the user pain point before the product is shown.
      action: Designer and client review printed boards on the table while markup accumulates across the surface.
      dialogue: 'CLIENT: "Just a few small changes."'
      prompt: A designer and client sit at a conference table with printed storyboard boards, marked-up notes, pens, and calm office lighting.
      style: Doodle
      references:
        - "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
        - "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
      owner: Director
      priority: P0
      tags: ["hook", "problem", "wide"]
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
      order: 10
      url: "https://airvio.co/knowgrph"
    - id: SHOT_01A
      type: Shot
      label: Friction Montage
      stage: Draft
      frame: 2
      slugline: Review Notes - Print Markup Pass
      summary: Quick cuts show duplicate tools, scattered notes, and timeline drift.
      action: Printouts, sticky notes, and disconnected tools stack up faster than the team can reconcile them.
      dialogue: 'DESIGNER: "We fixed that in the canvas, but the board is already stale."'
      prompt: Fast montage of sticky notes, printouts, browser windows, and duplicated timeline updates spreading across a worktable.
      style: "Paper Cut"
      references:
        - "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
        - "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
      owner: Editor
      priority: P1
      tags: ["closeup", "workflow", "pain"]
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
      order: 20
    - id: SCENE_02
      type: Scene
      label: Graph-to-Storyboard Reveal
      stage: Review
      frame: 3
      location: Workspace Canvas
      timeOfDay: Live Sync
      summary: The graph reorganizes into storyboard lanes without a second authoring system.
      action: The same source graph snaps into a native storyboard board while lane chips, counts, and card media stay in sync.
      dialogue: 'PM: "Same graph, same markdown, better review surface."'
      prompt: Product interface transitions from graph nodes into a storyboard board with compact lanes, consistent chips, and native media cards.
      style: "Product UI"
      references:
        - "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80"
        - "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
      owner: Product
      priority: P0
      tags: ["reveal", "kanban", "native"]
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80"
      order: 30
    - id: SHOT_02A
      type: Shot
      label: Lane Focus
      stage: Review
      frame: 4
      slugline: Selection Sync - Active Source Node
      summary: Clicking a card highlights the source node and keeps graph/story alignment visible.
      action: A selected storyboard card drives the active graph selection while the lane remains compact and readable.
      dialogue: 'REVIEWER: "Click the board, inspect the node, keep the source honest."'
      prompt: Storyboard card selection highlights a connected source node in a graph editor, showing one unified system.
      style: "Diagram Hybrid"
      references:
        - "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
      owner: Product
      priority: P1
      tags: ["selection", "lane", "sync"]
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
      order: 40
    - id: SCENE_03
      type: Frame
      label: Media-Rich Variant
      stage: Approved
      frame: 5
      location: Publishing Surface
      timeOfDay: Final Review
      summary: Approved card carries poster art, tags, owner, and publish link in one native board card.
      action: The approved frame combines preview video, review metadata, references, and outgoing brief links in a compact native card.
      dialogue: 'MARKETING: "This one is approved. Ship the brief with the source attached."'
      prompt: Final approved product storyboard frame with poster art, compact metadata chips, and a linked launch brief.
      style: "Launch Polish"
      references:
        - "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
        - "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80"
      owner: Marketing
      priority: P0
      tags: ["media", "approved", "publish"]
      videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      order: 50
      href: "https://airvio.co/knowgrph"
    - id: SCENE_04
      type: Panel
      label: CTA End Card
      stage: Approved
      frame: 6
      slugline: End Card - Workspace Native Delivery
      summary: End card closes on a clear call to action for workspace-native production planning.
      action: End card lands on a decisive launch message that ties storyboard review back to the shared Knowgrph workspace.
      dialogue: 'NARRATOR: "Plan, review, and ship from the same native graph workspace."'
      prompt: Clean final end card with bold product message, warm accent color, and confident launch composition.
      style: "Brand Card"
      references:
        - "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80"
      owner: Growth
      priority: P1
      tags: ["cta", "endcard", "publish"]
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80"
      order: 60
  edges:
    - id: edge:story:scene_01
      source: STORY_ROOT
      target: SCENE_01
    - id: edge:story:shot_01a
      source: SCENE_01
      target: SHOT_01A
    - id: edge:story:scene_02
      source: STORY_ROOT
      target: SCENE_02
    - id: edge:story:shot_02a
      source: SCENE_02
      target: SHOT_02A
    - id: edge:story:scene_03
      source: STORY_ROOT
      target: SCENE_03
    - id: edge:story:scene_04
      source: STORY_ROOT
      target: SCENE_04
---

# Knowgrph Storyboard Demo

Use this document to validate the native `2D Renderer: Storyboard` surface.

## Related Docs

- [Storyboard Demo Index](file:///Users/huijoohwee/Documents/GitHub/huijoohwee/docs/knowgrph-storyboard-demo-index.md)
- [Storyboard Product UI Demo](file:///Users/huijoohwee/Documents/GitHub/huijoohwee/docs/knowgrph-storyboard-product-ui-demo.md)
- [Storyboard Neutral Schema Contract Demo](file:///Users/huijoohwee/Documents/GitHub/huijoohwee/docs/knowgrph-storyboard-neutral-schema-contract-demo.md)

## Validation Goals

- Confirm the renderer activates from frontmatter via `kgCanvas2dRenderer: storyboard`.
- Confirm the storyboard surface is repo-owned and native to Knowgrph, not copied from Boords or any vendor storyboard runtime.
- Confirm existing graph nodes project into storyboard lanes through canonical fields such as `stage`, `status`, `lane`, `phase`, or `track`, without creating a second authoring schema.
- Confirm scene-like node types such as `Scene`, `Shot`, `Frame`, `Panel`, `Beat`, and `Story` are recognized as storyboard-friendly inputs while structural/root-only nodes stay secondary or are filtered when richer cards exist.
- Confirm the board reuses shared semantic-key infrastructure and does not introduce parallel identity assembly, stale local caches, or per-renderer duplicate graph derivation.
- Confirm storyboard cards reuse shared chip/theme primitives for lane status, tags, and metadata instead of bespoke demo-only UI shells.
- Confirm card ordering follows explicit node properties like `order`, `sequence`, `sceneOrder`, `shotOrder`, `index`, or `rank` before falling back to stable source order.
- Confirm storyboard cards project native frame/index badges from properties such as `frame`, `frameNumber`, `sceneNumber`, `shotNumber`, or `panelNumber`.
- Confirm storyboard cards build slugline text from `slugline` directly or from `location` + `timeOfDay` when explicit slugline text is absent.
- Confirm storyboard cards surface native `Action` and `Dialogue` sections from graph/frontmatter fields instead of demo-only text formatting.
- Confirm storyboard cards surface a native `Visual Brief` block from shared properties such as `prompt`, `imagePrompt`, and `style`.
- Confirm storyboard cards surface a compact native `Reference Pack` from shared reference arrays such as `references` or `referenceUrls`.
- Confirm image, video, and link properties such as `image`, `imageUrl`, `videoUrl`, `media_url`, `src`, `url`, or `href` render as native media-rich storyboard cards without placeholder fixtures.
- Confirm clicking a storyboard card selects the source node in the active graph store instead of creating a parallel storyboard-only selection state.
- Confirm the storyboard surface stays read-only by default: it projects from graph data and frontmatter authoring already owned upstream, with no extra markdown writeback format and no layered downstream patch model.
- Confirm the storyboard renderer bypasses minimap-only D3 assumptions and does not inherit incompatible minimap behavior from unrelated 2D surfaces.
- Confirm the board keeps lane/card density compact, uses horizontal lane scrolling, and avoids oversized helper chrome or copied vendor interaction patterns.

## Native Contract

- Frontmatter remains the single authoring owner.
- `flow.nodes[*]` remains the canonical node source.
- Storyboard derives view-only lane/card presentation from node labels, types, and properties.
- Lane grouping prefers `stage`, then other shared lane-like fields.
- Card content prefers `label`, `summary`-like fields, tags, owner, priority, and media/link URLs already present on the node.
- Storyboard detail blocks also reuse shared graph properties for frame numbering, slugline, action, dialogue, prompt, style, and references.

## Authoring Notes

- Use stable scene-like ids such as `SCENE_01`, `SHOT_01A`, or `PANEL_04`.
- Prefer `stage` for lane grouping when authoring storyboard demos because it reads cleanly as `Draft`, `Review`, and `Approved`.
- Prefer `order` for deterministic left-to-right narrative sequencing inside each lane.
- Prefer shared graph properties like `summary`, `owner`, `priority`, `tags`, `url`, `href`, `image`, `imageUrl`, `videoUrl`, `media_url`, `frame`, `slugline`, `location`, `timeOfDay`, `action`, `dialogue`, `prompt`, `style`, and `references` instead of renderer-local custom keys.
- Keep storyboard content enhancement-first: edit the graph/frontmatter source, then let the renderer project the board.

## Expected Lanes

- `Draft` should contain `SCENE_01` and `SHOT_01A`.
- `Review` should contain `SCENE_02` and `SHOT_02A`.
- `Approved` should contain `SCENE_03` and `SCENE_04`.

## Expected Card Signals

- `SCENE_01` should show frame `1`, a generated slugline from `Conference Room - Monday`, an `Action` block, a `Dialogue` block, a Doodle-style `Visual Brief`, a two-item `Reference Pack`, and an external brief link.
- `SHOT_01A` should show frame `2`, explicit slugline text, workflow-pain tags, a style chip, and reference thumbnails while staying ordered after `SCENE_01`.
- `SCENE_02` should validate graph-to-storyboard projection language: native board, shared kanban visual language, no copied vendor shell, plus a product-UI visual brief.
- `SHOT_02A` should validate card-click selection sync back to the graph node and keep a compact selection-focused storyboard card body.
- `SCENE_03` should validate video preview support for approved media-rich cards together with references, style, owner, priority, and launch brief metadata.
- `SCENE_04` should validate approved CTA card rendering with compact chips, explicit end-card dialogue, and a brand-card visual brief.

## Demo Intent

- The cold open proves storyboard cards can represent narrative setup.
- The reveal proves current graph data can become a storyboard board without a second system.
- The approved cards prove media-rich review planning can stay inside the same Markdown + graph authoring pipeline.
- The overall demo proves the new storyboard-specific card sections remain graph-derived, kanban-shaped, and fully native in-repo.
