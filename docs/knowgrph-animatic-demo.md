---
title: Knowgrph Gantt-Timeline Demo
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "gantt"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: false
kgDocumentStructureBaselineLock: false
flow:
  direction: LR
  edgeType: smoothstep
  balancedViewportPreset: widgetFrontmatter
  nodes:
    - id: GANTT_TIMELINE_SOURCE
      type: FlowDiagramSource
      label: HH:mm Gantt source
      position: {x: 0, y: 0}
    - id: GANTT_TIMELINE_CANVAS
      type: MermaidGanttTimeline
      label: "Canvas 2D Renderer: Gantt-timeline"
      position: {x: 380, y: -120}
    - id: GANTT_TIMELINE_BOTTOM_PANEL
      type: BottomPanel
      label: BottomPanel Gantt-Timeline
      position: {x: 380, y: 120}
    - id: GANTT_TIMELINE_FLOATING_PANEL
      type: FloatingPanel
      label: FloatingPanel Gantt-Timeline
      position: {x: 760, y: 0}
  edges:
    - id: edge:gantt_timeline:source_canvas
      source: GANTT_TIMELINE_SOURCE
      sourceHandle: output
      target: GANTT_TIMELINE_CANVAS
      targetHandle: input
    - id: edge:gantt_timeline:source_bottom
      source: GANTT_TIMELINE_SOURCE
      sourceHandle: output
      target: GANTT_TIMELINE_BOTTOM_PANEL
      targetHandle: input
    - id: edge:gantt_timeline:source_floating
      source: GANTT_TIMELINE_SOURCE
      sourceHandle: output
      target: GANTT_TIMELINE_FLOATING_PANEL
      targetHandle: input
flow_diagrams:
  gantt_timeline:
    key: gantt_timeline
    type: mermaid_gantt
    title: Gantt-Timeline HH:mm markers
    value: |-
      gantt
          dateFormat HH:mm
          axisFormat %H:%M
          Initial vert : vert, v1, 17:30, 2m
          Task A : 3m
          Task B : 8m
          Final vert : vert, v2, 17:58, 4m
---

# Knowgrph Gantt-Timeline Demo

## Response

Canvas `2D Renderer: Gantt-timeline`, BottomPanel `Gantt-Timeline`, and FloatingPanel `Gantt-Timeline` read the same typed Mermaid Gantt source from frontmatter.

The chart uses `HH:mm` task timing, `%H:%M` axis labels, and vertical marker rows so selection can move through the same shared row-key state across all three surfaces.

## Dynamic Input Tokens

- `dateFormat`: `HH:mm`
- `axisFormat`: `%H:%M`
- `initial_marker`: `Initial vert`
- `task_a`: `Task A`
- `task_b`: `Task B`
- `final_marker`: `Final vert`

## Mermaid Source

```mermaid
gantt
    dateFormat HH:mm
    axisFormat %H:%M
    Initial vert : vert, v1, 17:30, 2m
    Task A : 3m
    Task B : 8m
    Final vert : vert, v2, 17:58, 4m
```
