---
title: Knowgrph Timeline Animation Demo
kgCanvasRenderMode: 2d
kgCanvas2dRenderer: animation
timeline:
  beats:
    beat_01:
      label: Hook
      start_ms: 0
      end_ms: 4000
    beat_02:
      label: Problem
      start_ms: 4000
      end_ms: 9000
    beat_03:
      label: Proof
      start_ms: 9000
      end_ms: 15000
    beat_04:
      label: CTA
      start_ms: 15000
      end_ms: 19000
---

# Knowgrph Timeline Animation Demo

Use this document to validate the native `2D Renderer: Animation` surface.

## Validation Goals

- Confirm the renderer activates from frontmatter via `kgCanvas2dRenderer: animation`.
- Confirm `timeline.beats.*` drives beat labels and timing without in-repo hardcoded demo rows.
- Confirm graph nodes linked by `beat_ref` or canonical ids like `NODE_CLIP_01` and `NODE_OVERLAY_01` populate the correct beat lanes.
- Confirm `Enable Runtime Auto Scroll` keeps the playhead centered while playback advances.

## Authoring Notes

- Prefer canonical beat refs like `beat_01`, `beat_02`, `beat_03`.
- Use graph nodes with stable ids such as `NODE_CLIP_01`, `NODE_OVERLAY_01`, or any node whose `properties.params.beat_ref` points at the target beat.
- The renderer reads the active Markdown document and active graph together. If timing is absent, it falls back to ordinal beat order instead of fixture-only fake data.

## Minimal Graph Hints

- `NODE_CLIP_01` -> lane `Clip`
- `NODE_OVERLAY_01` -> lane `Overlay`
- `NODE_AUDIO_02` or `params.beat_ref: beat_02` -> lane `Audio`
- Any other beat-linked node -> lane `Node`
