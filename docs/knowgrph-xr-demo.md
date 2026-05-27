---
title: "Knowgrph XR Canvas Demo"
summary: "Runtime validation brief for proving Knowgrph can present a generated graph through Canvas XR Mode without hardcoded repo dependencies."
kgCanvasSurfaceMode: "3d"
kgCanvas3dMode: "xr"
toolbarPath: "Toolbar -> Canvas View Mode -> Surface Mode -> XR Mode"
copyPolicy: "Inspired by broad web XR scene ideas only. Do not copy external implementation code, markup, names, examples, file structure, copy, or architecture."
validationIntent:
  runtimeInputOnly: true
  forbidHardcodeInRepoUnderTest: true
  requiresNeutralFallback: true
viewportProof:
  - "390x844"
  - "768x1024"
  - "1366x768"
  - "1920x1080"
---

# Knowgrph XR Canvas Demo

## Authoring Contract

- The opening YAML frontmatter block remains the first-block machine SSOT for XR runtime intent, mode selection, and validation metadata.
- This document is a canonical authored XR validation brief, not a typed normalization fixture.
- Frontmatter stays in plain YAML so the file demonstrates the default authoring path for XR demos and runtime-validation docs.
- If typed `{key, type, value}` envelopes are needed for ingestion-regression coverage, that validation should live in a dedicated fixture doc rather than replacing the canonical XR validation example.
- Runtime behavior must still be derived from parsed frontmatter and document content only, never from file path assumptions or hardcoded demo fallbacks.

This brief validates an XR canvas surface for Knowgrph. It is intentionally external to the application repository and should be passed into validation commands at runtime, never baked into code, tests, scripts, or generated templates.

## Intent

Show that a user can move from the normal canvas toolbar into XR Mode while keeping the same graph, widgets, edges, provenance, and responsive layout metadata inspectable. The demo should remain useful even when WebXR hardware or browser support is unavailable: unsupported environments should display a clear status and retain the 3D canvas.

## Inspiration Boundary

The experience may draw on broad ideas common to declarative WebXR scenes:

- scene metadata describes the world before rendering begins
- graph objects behave like composable entities with reusable behavior
- the camera has a stable rig and user-centered entry point
- cursor, raycast, pointer, and controller selection share one interaction vocabulary
- assets declare readiness, fallback, and provenance

Do not copy external source code, sample markup, component names, examples, file organization, documentation prose, or architecture. The Knowgrph implementation must use its own renderer, state, schema, and validation contracts.

## Demo Flow

1. Start with a neutral generated graph containing text, image, video, verification, and report nodes.
2. Route the widgets into a Rich Media Panel with explicit handles and readable edges.
3. Select Canvas View Mode, open Surface Mode, and choose XR Mode.
4. If WebXR is available, show an explicit entry action that requires a user gesture.
5. If WebXR is unavailable, blocked, or exited, keep the same graph visible in 3D with a clear status.
6. Preserve responsive metadata for mobile, tablet, desktop, and wide-canvas proof classes.

## Expected Evidence

The validation run should produce:

- an artifact summary showing the runtime input path used for this run
- a canvas or workspace artifact with `kgCanvas3dMode: "xr"` or equivalent renderer metadata
- proof that Text, Image, Video, Rich Media Panel, verification, and report nodes remain connected
- XR status evidence for available, unavailable, blocked, entered, or exited states
- a hardcode scan proving this document's filename and absolute local path do not appear in the repository under test

## Acceptance Notes

The successful result is not a one-off immersive scene. It is a neutral canvas mode that any user-supplied graph can enter, inspect, and exit while preserving graph meaning and app provenance.
