---
title: "Knowgrph XR Canvas Demo"
summary: "Runtime validation brief for proving Knowgrph can present a generated graph through Canvas XR Mode with an animated solar-system glTF effect authored in Markdown frontmatter."
kgCanvasSurfaceMode: "xr"
kgCanvasRenderMode: "3d"
kgCanvas3dMode: "xr"
toolbarPath: "Toolbar -> Canvas View Mode -> Surface Mode -> XR Mode"
kgXrDemoEffect: "animated-solar-system"
kgXrDemoEffectSource: "frontmatter-gltf-elements"
kgXrDemoReferenceAsset: "./knowgrph-xr-demo.gltf"
kgXrDemoReferenceAssetRole: "portable sibling asset for runtime import validation; animated solar-system effect is declared by frontmatter glTF elements"
kgXrDemoReferenceAssetFormat: "gltf"
kgXrDemoReferenceAssetMimeType: "model/gltf+json"
kgXrDemoReferenceScene: "xr_animated_solar_system_scene"
kgXrDemoReferenceGenerator: "Knowgrph authored animated solar-system glTF effect metadata"
kgXrDemoReferenceCounts:
  nodes: 34
  sceneRoots: 2
  meshes: 11
  materials: 13
  animations: 4
  cameras: 1
  accessors: 0
kgXrDemoGltfElements:
  asset:
    version: "2.0"
    generator: "Knowgrph authored animated solar-system glTF effect metadata"
    copyright: "Original frontmatter scene plan, animation timing, and material palette; no external assets copied."
  scenes:
    - index: 0
      name: "xr_animated_solar_system_scene"
      roots:
        - "xr_solar_system_root"
        - "xr_solar_orbit_camera"
  cameras:
    - name: "xr_solar_orbit_camera"
      role: "fallback inspection camera with a tilted ecliptic overview"
  animations:
    - name: "xr_solar_star_pulse_loop"
      role: "subtle emissive scale and intensity pulse for the central star"
    - name: "xr_solar_planet_orbit_loop"
      role: "continuous orbital transforms for all planets"
    - name: "xr_solar_moon_orbit_loop"
      role: "secondary satellite orbit around the earth track"
    - name: "xr_solar_comet_trail_loop"
      role: "long-period comet arc crossing the outer orbit bands"
  nodeFamilies:
    root:
      - "xr_solar_system_root"
    ecliptic:
      - "xr_solar_ecliptic_plane"
      - "xr_solar_depth_grid"
    star:
      - "xr_solar_star_core"
      - "xr_solar_star_glow"
    orbitRings:
      pattern: "xr_solar_orbit_ring_{planet}"
      planets:
        - "mercury"
        - "venus"
        - "earth"
        - "mars"
        - "jupiter"
        - "saturn"
        - "uranus"
        - "neptune"
      role: "thin transparent orbit paths on the shared ecliptic plane"
    planets:
      pattern: "xr_solar_planet_{planet}"
      count: 8
      role: "animated planet transforms parented to orbit pivots"
    satellites:
      - "xr_solar_moon_earth"
      - "xr_solar_saturn_ring"
    asteroidBelt:
      pattern: "xr_solar_asteroid_{index}"
      count: 48
      role: "lightweight instanced belt between mars and jupiter"
    comet:
      - "xr_solar_comet_core"
      - "xr_solar_comet_trail"
    focus:
      - "xr_solar_focus_reticle"
  meshes:
    primitives:
      - "solar_star_sphere"
      - "rocky_planet_sphere"
      - "earth_planet_sphere"
      - "gas_giant_sphere"
      - "ice_giant_sphere"
      - "moon_sphere"
      - "orbit_ring_torus"
      - "saturn_ring_torus"
      - "asteroid_point_cluster"
      - "comet_core_sphere"
      - "comet_trail_ribbon"
  materials:
    star:
      - "solar_star_core"
      - "solar_star_glow"
    rockyPlanets:
      - "planet_mercury_matte"
      - "planet_venus_warm"
      - "planet_earth_ocean"
      - "planet_mars_rust"
    gasGiants:
      - "planet_jupiter_banded"
      - "planet_saturn_gold"
      - "planet_uranus_ice"
      - "planet_neptune_blue"
    paths:
      - "orbit_ring_soft"
      - "ecliptic_depth_grid"
    particles:
      - "asteroid_belt_dust"
      - "comet_trail_ice"
    xrAffordances:
      - "xr_solar_focus_reticle"
  materialTraits:
    alphaBlend:
      - "solar_star_glow"
      - "orbit_ring_soft"
      - "ecliptic_depth_grid"
      - "asteroid_belt_dust"
      - "comet_trail_ice"
      - "xr_solar_focus_reticle"
    emissive:
      - "solar_star_core"
      - "solar_star_glow"
      - "planet_earth_ocean"
      - "orbit_ring_soft"
      - "comet_trail_ice"
      - "xr_solar_focus_reticle"
kgXrDemoAnimation:
  timelineSeconds: 36
  loop: true
  easing: "linear"
  timeScale: 0.38
  channels:
    - target: "xr_solar_star_core"
      transform: "scale"
      keyframes: [0, 0.5, 1]
      values: [1, 1.035, 1]
    - target: "xr_solar_orbit_pivot_{planet}"
      transform: "rotationY"
      keyframes: [0, 1]
      values: [0, 360]
    - target: "xr_solar_moon_pivot_earth"
      transform: "rotationY"
      keyframes: [0, 1]
      values: [0, 360]
    - target: "xr_solar_comet_arc"
      transform: "translationPath"
      keyframes: [0, 0.5, 1]
      values: ["outer-left", "near-sun", "outer-right"]
kgXrDemoStage:
  environment: "animated-solar-system"
  floor: "transparent ecliptic plane with depth grid"
  grid: "orbit rings, radial distance ticks, and outer-belt guide marks"
  horizon: "low-contrast starfield shell with parallax drift"
  motion: "planetary orbits, moon orbit, star pulse, and comet trail loop"
  focus: "center reticle, ecliptic orientation ring, and orbit waypoints"
  fallback: "render the same XR stage as an inspectable 3D canvas when immersive WebXR is unavailable"
kgXrDemoVisualParity:
  - "central emissive star"
  - "eight animated planet orbits"
  - "earth moon secondary orbit"
  - "saturn ring geometry"
  - "transparent ecliptic grid"
  - "asteroid belt particles"
  - "comet core and fading trail"
  - "focus reticle and XR orbit waypoints"
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
