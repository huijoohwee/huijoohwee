---
title: "Knowgrph XR Physics Playground Demo"
summary: "Runtime validation brief for proving Knowgrph XR Mode can present an immersive, interactive physics-playground scene with native roll/thrust controls, controller swapping, collision cues, velocity tracking, and graceful non-XR fallback."
kgCanvasSurfaceMode: "xr"
kgCanvasRenderMode: "3d"
kgCanvas3dMode: "xr"
toolbarPath: "Toolbar -> Canvas View Mode -> Surface Mode -> XR Mode"
kgXrDemoEffect: "native-physics-playground"
kgXrDemoEffectSource: "frontmatter-gltf-elements"
kgXrDemoReferenceAsset: "./knowgrph-xr-demo.gltf"
kgXrDemoReferenceBinaryAsset: "./knowgrph-xr-demo.glb"
kgXrDemoReferenceAssetRole: "portable sibling assets for runtime import validation; physics playground behavior is declared by frontmatter glTF elements"
kgXrDemoReferenceAssetFormat: "gltf+glb"
kgXrDemoReferenceAssetMimeType: "model/gltf+json, model/gltf-binary"
kgXrDemoReferenceScene: "kg_xr_physics_playground_scene"
kgXrDemoReferenceGenerator: "Knowgrph original XR physics playground validation generator"
kgXrDemoReferenceCounts:
  nodes: 25
  sceneRoots: 1
  meshes: 13
  materials: 13
  animations: 3
  cameras: 1
  accessors: 42
kgXrDemoCoordinateSystem:
  convention: "right-handed-y-up"
  unit: "meter"
  axes:
    x: "lateral left/right movement"
    y: "vertical gravity/up movement"
    z: "forward/depth movement"
  movementPlane: "X/Z"
  jumpAndThrustAxis: "+Y"
kgXrDemoGltfElements:
  asset:
    version: "2.0"
    generator: "Knowgrph original XR physics playground validation generator"
    copyright: "Original geometry, animation timing, and material palette; no external assets copied."
    extras:
      coordinateSystem: "right-handed-y-up"
      unit: "meter"
      axes:
        x: "lateral-left-right"
        y: "vertical-gravity-up"
        z: "forward-depth"
  scenes:
    - index: 0
      name: "kg_xr_physics_playground_scene"
      roots:
        - "kg_xr_physics_playground_root"
  cameras:
    - name: "kg_xr_playground_inspection_camera"
      role: "fallback inspection camera with a clear view of the active vehicle, platforms, obstacles, and input surface"
  animations:
    - name: "kg_ball_roll_jump_loop"
      role: "rolling ball movement, rotation, and jump impulse overlay"
    - name: "kg_rocket_thrust_stabilize_loop"
      role: "rocket movement, attitude changes, thrust plume, and stabilization"
    - name: "kg_shared_camera_follow_and_velocity_loop"
      role: "smooth camera-follow marker and shared velocity vector"
  nodeFamilies:
    root:
      - "kg_xr_physics_playground_root"
    collision:
      - "kg_physics_floor_collision_bounds"
      - "kg_collision_boundary_ring"
      - "kg_collision_obstacle_0"
      - "kg_collision_obstacle_1"
      - "kg_collision_obstacle_2"
      - "kg_collision_obstacle_3"
    platforms:
      - "kg_ball_spawn_platform"
      - "kg_rocket_spawn_platform"
      - "kg_jump_ramp_left"
      - "kg_thrust_ramp_right"
    controllers:
      - "kg_vehicle_ball_controller_active"
      - "kg_vehicle_ball_jump_state_overlay"
      - "kg_vehicle_rocket_controller_active"
      - "kg_rocket_left_stabilizer_fin"
      - "kg_rocket_right_stabilizer_fin"
      - "kg_rocket_thrust_particle_plume"
    instrumentation:
      - "kg_shared_velocity_vector_indicator"
      - "kg_smooth_camera_follow_target"
    input:
      - "kg_ui_swap_beach_ball_button"
      - "kg_ui_swap_rocket_button"
      - "kg_input_map_wasd_arrows_space_shift_panel"
    lighting:
      - "kg_playground_sun_key_light"
      - "kg_playground_fill_light"
  meshes:
    primitives:
      - "kg_physics_floor_collision_mesh"
      - "kg_physics_elevated_platform_mesh"
      - "kg_physics_ramp_mesh"
      - "kg_collision_obstacle_mesh"
      - "kg_beach_ball_rolling_mesh"
      - "kg_beach_ball_jump_highlight_mesh"
      - "kg_rocket_thrust_body_mesh"
      - "kg_rocket_stabilizer_fin_mesh"
      - "kg_rocket_booster_plume_mesh"
      - "kg_velocity_vector_mesh"
      - "kg_collision_boundary_ring_mesh"
      - "kg_vehicle_swap_button_mesh"
      - "kg_camera_follow_ring_mesh"
kgXrDemoInteraction:
  controllerModes:
    - id: "roll"
      modelNode: "kg_vehicle_ball_controller_active"
      primaryInputs:
        move: "WASD or Arrow Keys on the X/Z plane"
        jump: "Space on +Y"
      expectedFeedback:
        - "ball rotation follows horizontal movement"
        - "jump impulse lifts the ball"
        - "velocity vector follows the active controller"
        - "collision obstacles and boundary ring remain visible"
    - id: "thrust"
      modelNode: "kg_vehicle_rocket_controller_active"
      primaryInputs:
        move: "WASD or Arrow Keys on the X/Z plane"
        thrust: "Space on +Y"
        stabilize: "Shift"
      expectedFeedback:
        - "rocket plume scales during thrust"
        - "rocket body changes attitude while moving"
        - "stabilization dampens the camera-follow marker"
        - "velocity vector follows the active controller"
  controllerSwap:
    buttons:
      - "kg_ui_swap_beach_ball_button"
      - "kg_ui_swap_rocket_button"
    runtimeOwner: "xrPhysicsPlaygroundControls"
  nativeRuntimeOwners:
    - "ThreeGraphXrSessionPolicy"
    - "CanvasXrEntryPanel"
    - "XrGraphStage"
    - "xrPhysicsPlaygroundModel"
    - "xrPhysicsPlaygroundControls"
kgXrDemoAnimation:
  timelineSeconds: 4.8
  loop: true
  easing: "linear"
  timeScale: 1
  channels:
    - target: "kg_vehicle_ball_controller_active"
      transform: "translation+rotation"
      keyframes: [0, 1.6, 3.2, 4.8]
      values: ["spawn", "jump-ramp", "mid-platform", "spawn"]
    - target: "kg_vehicle_rocket_controller_active"
      transform: "translation+rotation"
      keyframes: [0, 1.3, 2.8, 4.8]
      values: ["spawn", "thrust-climb", "stabilized-turn", "spawn"]
    - target: "kg_rocket_thrust_particle_plume"
      transform: "scale"
      keyframes: [0, 0.5, 1.3, 2.8, 4.8]
      values: ["idle", "boost", "coast", "boost", "idle"]
    - target: "kg_shared_velocity_vector_indicator"
      transform: "translation"
      keyframes: [0, 1.6, 3.2, 4.8]
      values: ["ball", "jump", "rocket", "ball"]
    - target: "kg_smooth_camera_follow_target"
      transform: "translation"
      keyframes: [0, 1.6, 3.2, 4.8]
      values: ["ball-follow", "jump-follow", "rocket-follow", "ball-follow"]
kgXrDemoStage:
  environment: "native physics playground"
  floor: "bounded X/Z collision floor with ringed limits and +Y height"
  terrain: "spawn platforms, jump ramp, thrust ramp, raised obstacles, and visible hazard blocks"
  motion: "rolling ball, jump impulse, rocket thrust, attitude stabilization, velocity vector, and camera-follow marker"
  focus: "active-controller selection plus shared velocity/camera instrumentation"
  fallback: "render the same XR stage as an inspectable 3D canvas when immersive WebXR is unavailable"
kgXrDemoVisualParity:
  - "two distinct controller avatars: rolling ball and thrust rocket"
  - "visible swap controls for ball and rocket"
  - "WASD/arrow movement contract"
  - "Space-driven jump or thrust impulse"
  - "Shift-driven rocket stabilization"
  - "collision obstacles and bounded play area"
  - "velocity vector tied to the active controller"
  - "smooth camera-follow target"
  - "neutral fallback when WebXR is unsupported"
copyPolicy: "Inspired by broad web XR and physics-playground interaction ideas only. Do not copy external implementation code, markup, names, examples, file structure, copy, or architecture."
validationIntent:
  runtimeInputOnly: true
  forbidHardcodeInRepoUnderTest: true
  requiresNeutralFallback: true
viewportProof:
  - "390x844"
  - "768x1024"
  - "1366x768"
  - "1920x1080"
kgParserRoutingContract:
  version: "knowgrph-parser-routing/v1"
  parserLogic: "opening frontmatter and authored source payloads are SSOT; parsers materialize graphData without renderer-local aliases"
  routingKeys:
    surface: "kgCanvasSurfaceMode"
    renderMode: "kgCanvasRenderMode"
    renderer: "kgCanvas2dRenderer"
    semanticMode: "kgDocumentSemanticMode"
    frontmatterMode: "kgFrontmatterModeEnabled"
    flowGraph: "flow"
    flowNodes: "flow.nodes"
    flowEdges: "flow.edges"
    mermaidBlocks: "flow_diagrams"
    strybldrStoryboard: "kgStrybldrStoryboard"
  diagramKinds:
    - "mermaid_flowchart"
    - "mermaid_gitgraph"
    - "mermaid_architecture"
    - "mermaid_eventmodeling"
    - "mermaid_gantt"
    - "frontmatter_flow"
    - "strybldr_storyboard"
  surfaces:
    - "2D Renderer: Storyboard"
    - "2D Renderer: Storyboard"
    - "BottomPanel/FloatingPanel Mermaid panels"
  edgePolicy: "explicit graphData.edges, flow.edges, workflow.edges, and diagram edges are source-owned SSOT; renderers project visible connectors only"
  forkPolicy: "fork, branch, candidate, and publish metadata remain authored source fields and surface through parsed graph edges without downstream remapping"
---

# Knowgrph XR Physics Playground Demo

## Authoring Contract

- The opening YAML frontmatter block remains the first-block machine SSOT for XR runtime intent, mode selection, validation metadata, and sibling asset semantics.
- This document is a canonical authored XR validation brief, not a typed normalization fixture.
- Frontmatter stays in plain YAML so the file demonstrates the default authoring path for XR demos and runtime-validation docs.
- Runtime behavior must be derived from parsed frontmatter, the sibling glTF/glB assets, and user input only, never from file path assumptions or hardcoded demo fallbacks.
- Scene coordinates are right-handed and Y-up: X is lateral movement, Z is forward/depth movement, and Y is vertical jump/thrust height.
- The sibling glTF/glB assets are original validation artifacts. They may express interaction semantics through node names and extras, but they must not require an external XR runtime package.

This brief validates an XR canvas surface for Knowgrph. It is intentionally external to the application repository and should be passed into validation commands at runtime, never baked into code, tests, scripts, or generated templates.

## Intent

Show that a user can move from the normal canvas toolbar into XR Mode and inspect an interactive physics playground with two controller modes:

- **Roll**: a ball controller that moves on the X/Z plane with WASD or arrow keys and jumps on +Y with Space.
- **Thrust**: a rocket controller that moves on the X/Z plane with WASD or arrow keys, thrusts on +Y with Space, and stabilizes with Shift.

The demo should remain useful even when WebXR hardware or browser support is unavailable: unsupported environments should display a clear status, retain the 3D canvas, and keep Roll/Thrust controls visible for non-immersive proof.

## Inspiration Boundary

The experience may draw on broad physics-playground ideas:

- a bounded play area with visible collision limits
- two swappable vehicle/controller modes
- one movement vocabulary shared by keyboard, pointer, and XR control surfaces
- jump, thrust, and stabilization as explicit user actions
- smooth camera follow and velocity instrumentation
- a native fallback that keeps the scene inspectable outside immersive XR

Do not copy external source code, sample markup, component names, examples, file organization, documentation prose, or architecture. The Knowgrph implementation must use its own renderer, state, schema, and validation contracts.

## Demo Flow

1. Start with this runtime-supplied Markdown document and its sibling glTF/glB assets.
2. Route Canvas View Mode to Surface Mode -> XR Mode.
3. Confirm the scene exposes the rolling ball, thrust rocket, collision bounds, obstacles, platforms, ramps, velocity indicator, and camera-follow marker.
4. Toggle the Roll and Thrust controls from the XR panel.
5. Use WASD or arrow keys to move, Space to jump or thrust, and Shift to stabilize the rocket mode.
6. If WebXR is available, enter immersive AR/VR through the native session policy.
7. If WebXR is unavailable, blocked, or exited, keep the same scene visible in 3D with a clear status and active non-immersive controls.

## Expected Evidence

The validation run should produce:

- an artifact summary showing the runtime input path used for this run
- a canvas or workspace artifact with kgCanvas3dMode set to xr or equivalent renderer metadata
- proof that the sibling .gltf and .glb assets parse as a physics playground scene
- proof that Roll and Thrust controls are present and backed by the shared XR control owner
- XR status evidence for available, unavailable, blocked, entered, or exited states
- a hardcode scan proving this document's filename and absolute local path do not appear in the repository under test

## Acceptance Notes

The successful result is not a one-off immersive scene. It is a native, dependency-free XR surface that can present a physics-playground validation artifact, keep controller semantics inspectable, and preserve Knowgrph graph/runtime provenance without copying external code.
