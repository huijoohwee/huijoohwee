---
title: Knowgrph Timeline Animation Demo
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "animation"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: false
kgDocumentStructureBaselineLock: false
flow:
  direction: LR
  edgeType: smoothstep
  nodes:
    - id: NODE_TIMELINE
      type: Timeline
      label: Beat Timeline
    - id: NODE_CLIP_01
      type: Clip
      label: Hook Clip
      params:
        beat_ref: beat_01
    - id: NODE_OVERLAY_01
      type: Overlay
      label: Hook Overlay
      params:
        beat_ref: beat_01
    - id: NODE_AUDIO_02
      type: Audio
      label: Problem Voiceover
      params:
        beat_ref: beat_02
    - id: NODE_SCENE_03
      type: Scene
      label: Proof Scene
      params:
        beat_ref: beat_03
    - id: NODE_CTA_04
      type: Overlay
      label: CTA Overlay
      params:
        beat_ref: beat_04
  edges:
    - id: edge:timeline:beat_01
      source: NODE_TIMELINE
      target: NODE_CLIP_01
      properties:
        "flow:sourcePortKey": beat_01_out
    - id: edge:timeline:beat_02
      source: NODE_TIMELINE
      target: NODE_AUDIO_02
      properties:
        "flow:sourcePortKey": beat_02_out
    - id: edge:timeline:beat_03
      source: NODE_TIMELINE
      target: NODE_SCENE_03
      properties:
        "flow:sourcePortKey": beat_03_out
    - id: edge:timeline:beat_04
      source: NODE_TIMELINE
      target: NODE_CTA_04
      properties:
        "flow:sourcePortKey": beat_04_out
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
- Confirm the native in-repo timeline animation editor stays repo-owned and enhancement-first, without copied vendor runtime code or parallel demo-only fallback paths.
- Confirm graph nodes linked by `beat_ref` or canonical ids like `NODE_CLIP_01` and `NODE_OVERLAY_01` populate the correct beat lanes.
- Confirm `Enable Runtime Auto Scroll` keeps the playhead centered while playback advances.
- Confirm the runtime auto-scroll switch preserves 100% fidelity with the reference contract: exact `player-config` -> `button[role="switch"]` -> `div` / `span` / `div` DOM shape plus `aria-checked="true"`, `class="ant-switch ant-switch-checked"`, `ant-click-animating="true"`, and `style="margin-bottom: 20px;"`.
- Confirm the player shell preserves the native reference wrapper contract: `timeline-player` with `play-control`, `time`, and `rate-control` surfaces instead of bespoke wrapper names, and avoids extra local-only player meta chips inside that shell.
- Confirm non-player controls stay visually secondary to that player shell: compact action buttons, compact snap chips, placeholder-free active metadata icons, and no oversized header-only lane/item helper banners competing with the reference playback rail.
- Confirm the next body-density layer preserves native compact geometry: `timeline-editor-time-area` stays at `32px`, lane rows compact to the tightened `32px` target, lane-side hide/mute/solo controls stay compact, selected lane/item hint chips stay inline and condensed, lane-selected inline rows reuse the shared Toolbar mobile-first row-scroll SSOT instead of bespoke overflow logic, and mounted action pills hold the reference `28px` height with compact inline move controls.
- Confirm the next beat-header density layer preserves compact beat cards: beat headers tighten to the mounted `72px` target, metadata rows collapse into compact inline scroll rows, and selected beat quick-action chips collapse to compact native hints instead of long helper labels.
- Confirm the next beat quick-action layer stays visually secondary: the overlay reuses a compact horizontal row with `24px` controls, and beat resize handles stay subtle at the tightened `10px` width instead of oversized hit strips.
- Confirm the next visual-texture layer stays restrained: active-beat and lane highlights stay low-intensity, action gradients stay soft instead of saturated, stretch handles use subtle white tint, and the cursor glow stays narrow and understated.
- Confirm the draggable/resizable lane shell preserves the mounted reference contract end-to-end: `timeline-editor-edit-row` renders at `32px`, the outer action pill stays `28px` tall with `4px` radius, the inner `effect0`/`effect1` wrapper stays transparent and vertically centered, and both stretch handles stay transparent rounded hit areas at `10px x 28px`.
- Confirm the timeline editor preserves the native reference wrapper contract: `timeline-editor`, `timeline-editor-time-area`, `timeline-editor-time-unit`, `timeline-editor-time-unit-big`, `timeline-editor-time-unit-scale`, `timeline-editor-edit-area`, `timeline-editor-cursor`, and inline `timeline-editor-action` stretch handles.
- Confirm lane items preserve native reference effect shells: `timeline-editor-action-effect-effect0` / `effect0` for audio-style rows and `timeline-editor-action-effect-effect1` / `effect1` for animation rows, without hardcoded fixture-only markup.
- Confirm live browser validation drives the mounted app store through `window.knowgrphWorkspaceCommand.applyMarkdownDocument(...)` instead of importing `/src/...` store modules into a parallel runtime instance.
- Confirm beat bars support native drag-to-move and edge-drag-to-resize interactions when `timeline.beats.*` exposes absolute timing.
- Confirm drag interactions auto-scroll horizontally near the viewport edge continuously while the pointer is held at the rail edge, then commit updated `start_ms` / `end_ms` / `duration_ms` back into frontmatter on release.
- Confirm dragging or right-resizing a contiguous beat/lane action no longer resolves to a silent no-op: when the edited range pushes into the next beat, following beats carry forward to preserve a non-overlapping sequence.
- Confirm the repo-owned mounted-surface validator runs through `python3 ./scripts/validate_animation_timeline_interactions.py` and proves move/resize edge-hold auto-scroll against `window.knowgrphWorkspaceCommand.applyMarkdownDocument(...)`.
- Confirm that same mounted validator also proves `Insert Before` timing shift, non-empty delete guard, and empty-beat delete compaction against the live beat-card quick actions.
- Confirm that same mounted validator also proves beat-card `Duplicate` forward-shift compaction and beat-card `Split` midpoint continuity against the live quick-action buttons.
- Confirm that same mounted validator also proves beat-card `Merge Next` guard/empty-beat merge semantics and beat-card `Remove Gap` guard/backward compaction semantics against the live quick-action buttons.
- Confirm that same mounted validator also proves lane `Hide` / `Mute` / `Solo` mutations persist into `timeline.lane_controls`, clear on original markdown reapply, and restore on mutated-markdown reapply against the live mounted surface.
- Confirm that same mounted validator also proves lane up/down controls persist `timeline.lane_order`, clear on original markdown reapply, and restore the reordered lane rail on mutated-markdown reapply against the live mounted surface.
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
- Confirm the native animation toolbar exposes keyboard hints for playback and beat editing: `Space`, `Left Arrow`, `Right Arrow`, `R`, `D`, and `S`.
- Confirm native animation hotkeys are ignored while beat label/note/summary/tags editing is active or when focus is inside text-entry controls.
- Confirm the active beat metadata controls expose native keyboard entry hints for label, note, summary, and tags: `L`, `N`, `M`, and `T`.
- Confirm those metadata hotkeys open the corresponding active-beat editor without bypassing the existing frontmatter-backed save/cancel flow.
- Confirm active beat note and summary editors support native multiline keyboard parity: `Cmd/Ctrl+Enter` saves and `Escape` cancels without requiring pointer-only actions.
- Confirm lane rows support explicit native selection for lane shortcuts instead of hidden global behavior.
- Confirm lane rows are keyboard-focusable, use visible native focus styling, and select on focus so lane shortcuts can start from `Tab` navigation.
- Confirm lane selection uses roving tabindex semantics: one native tab stop enters the lane rail, then `Arrow Up`, `Arrow Down`, `Home`, and `End` move focus/selection between lanes.
- Confirm the selected lane exposes native keyboard hints for reorder and lane controls: `[` move up, `]` move down, `H` hide/show, `U` mute/unmute, and `O` solo/unsolo.
- Confirm the selected lane row surfaces inline native hint chips for lane traversal and lane controls instead of relying on header-only guidance.
- Confirm selected-lane hotkeys reuse the existing frontmatter-backed lane control and lane order handlers.
- Confirm selected lane hint chips stay compact shorthand with tooltip-expanded meaning instead of multi-line helper labels that inflate row height.
- Confirm visible lane items support explicit native selection and roving tabindex inside the selected lane instead of hidden global reassignment behavior.
- Confirm selected lane items expose visible native focus styling and keyboard hints for item traversal/reassignment.
- Confirm the selected item card surfaces inline native hint chips for lane-item traversal and reassignment instead of relying on header-only guidance.
- Confirm the selected item exposes native keyboard hints for reassignment: `,` moves to the previous beat and `.` moves to the next beat.
- Confirm selected-item reassignment hotkeys reuse the existing frontmatter-backed item `beat_ref` rewrite path.
- Confirm selected item hint chips stay compact shorthand with tooltip-expanded meaning instead of multi-line helper labels that inflate action pill height.
- Confirm the beat strip supports explicit native focus and roving tabindex instead of mouse-only beat selection behavior.
- Confirm beat-strip traversal uses one native tab stop plus `Arrow Left`, `Arrow Right`, `Home`, and `End` to move focus/selection between beats.
- Confirm beat-strip keyboard focus reuses the existing active-beat/playhead focus path instead of introducing a parallel selection state.
- Confirm the selected beat card surfaces inline native quick-action hint chips for high-frequency actions such as rename, note, summary, tags, duplicate, and split.
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

This block is the exact reference-fidelity validation target for the native animation renderer switch.

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
