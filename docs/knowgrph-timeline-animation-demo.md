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
- Confirm animation documents reuse the same canonical Flow Editor frontmatter syntax: shared `flow:` YAML authoring surface plus optional `timeline.beats.*` timing metadata, with no parallel animation-only markdown block.
- Confirm `timeline.beats.*` drives beat labels and timing without in-repo hardcoded demo rows.
- Confirm graph nodes linked by `beat_ref` or canonical ids like `NODE_CLIP_01` and `NODE_OVERLAY_01` populate the correct beat lanes.
- Confirm `Enable Runtime Auto Scroll` keeps the playhead centered while playback advances.
- Confirm the runtime auto-scroll switch preserves the required `player-config` -> `button[role="switch"]` -> `div` / `span` / `div` DOM shape.
- Confirm beat bars support native drag-to-move and edge-drag-to-resize interactions when `timeline.beats.*` exposes absolute timing.
- Confirm drag interactions auto-scroll horizontally near the viewport edge and commit updated `start_ms` / `end_ms` / `duration_ms` back into frontmatter on release.
- Confirm `Add Beat` inserts a new frontmatter beat and shifts following absolute-timing beats forward to preserve a non-overlapping timeline.
- Confirm `Delete Beat` is allowed only for empty beats and compacts following beats backward after removal.
- Confirm each beat card exposes a native delete quick-action icon on hover and keeps the same empty-beat-only delete guard as the toolbar action.
- Confirm snap/grid controls affect drag/resize edits and render matching grid lines for the active millisecond step.
- Confirm `Insert Before` and `Insert After` place the new beat relative to the active beat and preserve a non-overlapping absolute-timing sequence.
- Confirm each beat card exposes native insert-before and insert-after quick-action icons on hover so adjacent beat creation can start from the timeline strip itself.
- Confirm active beat labels are editable from the native renderer and commit updated `timeline.beats.<beat>.label` values back into frontmatter.
- Confirm each beat card exposes a native label quick-rename icon on hover so renaming can start from the timeline strip itself.
- Confirm `Split Beat` uses the current playhead position, snaps to the active grid step, and creates a second beat segment without overlapping the original.
- Confirm each beat card exposes a native split quick-action icon on hover and splits that beat at a valid midpoint while preserving the same frontmatter-backed timing constraints.
- Confirm `Duplicate Beat` creates a copied beat after the active beat and shifts following absolute-timing beats forward by the duplicated duration.
- Confirm each beat card exposes a native duplicate quick-action icon on hover so beat duplication can start from the timeline strip itself.
- Confirm each lane exposes native `Hide`, `Mute`, and `Solo` controls without importing vendor timeline code.
- Confirm hidden lanes suppress lane items, muted lanes visibly dim item cards, and solo overrides hidden state to isolate one lane.
- Confirm `Merge Next` is enabled only when the adjacent next beat is empty and extends the active beat through that next beat window without orphaning items.
- Confirm each beat card exposes a native merge-next quick-action icon on hover and keeps the same next-empty-beat merge guard as the toolbar action.
- Confirm `Remove Gap` compacts the active beat and following beats back to the previous beat boundary when a positive absolute-timing gap exists.
- Confirm each beat card exposes a native remove-gap quick-action icon on hover and keeps the same positive-gap-only remove-gap guard as the toolbar action.
- Confirm the animation action surface reuses shared Toolbar-style icon buttons and shared icon sizing utilities instead of bespoke text action buttons.
- Confirm the active beat supports native note editing and commits `timeline.beats.<beat>.note` back into frontmatter.
- Confirm the active beat supports native summary editing and commits `timeline.beats.<beat>.summary` back into frontmatter.
- Confirm the active beat supports native tag editing and commits `timeline.beats.<beat>.tags[]` back into frontmatter without duplicate values.
- Confirm each beat card exposes a native note quick-action icon on hover so note editing can start from the timeline strip itself.
- Confirm each beat card surfaces the saved summary inline for at-a-glance review without entering edit mode.
- Confirm each beat card surfaces saved tags as inline chips and collapses overflow into a `+N` badge instead of overflowing the native timeline strip.
- Confirm each beat card surfaces the beat item count inline so strip-level review can read beat density without dropping into lane rows.
- Confirm each beat card surfaces per-lane item summary chips and collapses overflow into a `+N` badge instead of overflowing the native timeline strip.
- Confirm clicking a beat-card lane summary chip scrolls the matching lane row into view without mutating frontmatter lane-control state.
- Confirm the matching lane row briefly highlights after a beat-card lane summary chip jump so the strip-to-lane navigation target is obvious.
- Confirm each beat card exposes native summary/tag quick-action icons on hover so metadata editing can start from the timeline strip itself.
- Confirm beat-card quick metadata actions focus the selected beat first, then keep the matching summary/tag editor open instead of clearing edit state during the active-beat switch.
- Confirm lane `Hide` / `Mute` / `Solo` icon actions commit into `timeline.lane_controls.hidden|muted|solo` frontmatter state.
- Confirm lane-control state restores after document reload and preserves the same hidden, muted, and solo presentation.
- Confirm lane up/down icon controls commit the sidebar row order into `timeline.lane_order` frontmatter state.
- Confirm lane order restores after document reload and the rendered lane rows follow the persisted `timeline.lane_order` sequence.
- Confirm each lane item exposes native left/right icon controls to reassign that item into the previous or next beat.
- Confirm lane-item reassignment rewrites the source node `params.beat_ref` in frontmatter graph nodes and re-applies the graph without vendor timeline code.

## Switch Contract

```html
<div class="player-config">
  <button
    type="button"
    role="switch"
    aria-checked="true"
    class="ant-switch ant-switch-checked"
    ant-click-animating="true"
    style="margin-bottom: 20px;"
  >
    <div class="ant-switch-handle"></div>
    <span class="ant-switch-inner">Enable Runtime Auto Scroll</span>
    <div class="ant-click-animating-node"></div>
  </button>
</div>
```

## Authoring Notes

- Prefer canonical beat refs like `beat_01`, `beat_02`, `beat_03`.
- Use graph nodes with stable ids such as `NODE_CLIP_01`, `NODE_OVERLAY_01`, or any node whose `properties.params.beat_ref` points at the target beat.
- The renderer reads the active Markdown document and active graph together. If timing is absent, it falls back to ordinal beat order instead of fixture-only fake data.

## Minimal Graph Hints

- `NODE_CLIP_01` -> lane `Clip`
- `NODE_OVERLAY_01` -> lane `Overlay`
- `NODE_AUDIO_02` or `params.beat_ref: beat_02` -> lane `Audio`
- Any other beat-linked node -> lane `Node`
