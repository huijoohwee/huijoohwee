---
title: "Knowgrph Ralphthon Video Demo - OpenClaw SuperAgent Harness"
graphId: "md:knowgrph-ralphthon-openclaw-superagent-demo-v1"
doc_type: "Video Demo - Rich Media Canvas Harness Brief"
date: "2026-05-17"
lang: en-US

kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "flowEditor"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: false
kgDocumentStructureBaselineLock: false
kgSharedRendererContract:
  version: "shared-renderer-contract/v1"
  semanticIdentity: "buildScopedGraphSemanticKey"
  cardPreview: "CardMediaPreview + CardMarkdownPreview"
  widgetCard: "canvas:widgetCard"
  richMediaPanel: "RichMediaPanel"
  edgeModel: "active graph edges from the selected source graph"
  timelineSurface: "TimelineTransportControls + shared bottom-panel surface"
  rendererPolicy: "frontmatter and source payloads own data; renderers project view state only"
kgSuperAgentHarness: true
kgCanvasAspectRatio: "16:9"
kgCanvasTargetResolution: "1920x1080"

$schema: "kgc-pipeline/v1"

inputs:
  text_provider_id: "openai-codex"
  text_endpoint_url: ""
  text_model: "gpt-5.4"
  image_model: "image-generation-runtime"
  video_model: "video-generation-runtime"
  duration_seconds: 12
  duration_label: "12s"
  output_format: "16:9 1920x1080"
  theme: "OpenClaw, lobster, Singapore, S Korea, US"
  product_name: "OpenClaw"
  demo_name: "Ralphthon"
  core_offer: "a Codex-anchored SuperAgent harness that plans, generates, verifies, recovers, and renders rich media work on a Knowgrph Canvas"
  source_fixture: "huijoohwee/docs/knowgrph-video-demo.md"
  destination_fixture: "huijoohwee/docs/knowgrph-ralphthon-video-demo.md"
  inspiration_boundary: "Inspired by public long-horizon SuperAgent harness patterns such as multi-agent planning, tool use, memory, sandboxing, and verifier loops; no code, prompts, topology, assets, or implementation details are copied from DeerFlow."
  setting: "A three-country media mission moving from Singapore harbor lights to South Korea robotics neon to a US launch coastline, led by an OpenClaw lobster signal mark."
  script: |
    Cold open: A clean 16:9 Knowgrph Canvas appears. MainPanel Integrations confirms Codex is connected. The FloatingPanel Chat UI receives a goal: generate a polished rich media sequence for Ralphthon.

    Beat 1 - Singapore: OpenClaw wakes on a midnight control table overlooking Marina Bay. A red lobster signal mark is projected as a routing glyph, not a mascot costume. The planner splits the job into text, image, video, and verification lanes.

    Beat 2 - South Korea: The canvas crossfades to a Seoul robotics lab with Busan port telemetry on the side wall. Sub-agents negotiate constraints: Korean neon palette, Singapore harbor precision, US launch energy, no copied reference implementation, no hardcoded repo fixture.

    Beat 3 - US: The system lands on a coastal launch deck. The video generator receives the verified image keyframe and the final shot plan. The verifier rejects one weak attempt, recovers from the trace, and reruns only the failed lane.

    Finale: The Rich Media Panel shows text, image, and video outputs at once. Edges remain visible, ports are named, and the judge can read why the harness stopped: all acceptance checks passed, artifacts exist, and the final canvas is balanced.

    End card: "OpenClaw for Ralphthon - tame the agent, operate the loop, ship the media."
  visual_style: |
    Cinematic but technical. Use crisp UI surfaces, visible graph edges, and credible production controls. Color story: signal red, steel blue, harbor cyan, lab green, and warm launch white. Avoid a one-note palette. Treat the lobster as an emblem and motion cue, not comic relief.

source_material:
  local_reference: "huijoohwee/docs/knowgrph-video-demo.md"
  external_reference: "https://github.com/bytedance/deer-flow"
  copy_policy:
    status: "forbid-copy"
    rule: "Use only high-level inspiration from the category of long-running SuperAgent harnesses; write original scenario, node graph, prompts, acceptance criteria, and recovery behavior."
  validation_policy:
    project_file_agnostic: true
    forbid_hardcode_in_repo_under_test: true
    fixture_path_is_demo_input_only: true

spec:
  format: kgc-pipeline
  version: "1.0.0"
  parser: yaml-frontmatter
  execution: computing-flow
  topology: DAG
  ssot_surfaces: [widget_bundle, pipeline, flow.nodes, flow.edges, mermaid, runner]
  canvas_route: "MainPanel Integrations -> FloatingPanel Chat UI -> Editor Workspace -> Canvas -> Widgets -> Rich Media Panel -> Edges"
  judge_focus: "The harness is the deliverable: goal design, loop control, agent roles, memory, verification, recovery, and readable termination."

superagent_harness:
  name: "OpenClaw Ralphthon Harness"
  integration_anchor: "OpenAI Codex"
  mode: "long-running autonomous media orchestration"
  mission: "Turn one goal into a verified text-image-video package rendered on a Knowgrph Canvas."
  non_goals:
    - "Do not copy DeerFlow code, prompts, repository structure, UI, or documentation wording."
    - "Do not bake the validation fixture into application logic."
    - "Do not hide failures by marking partial outputs complete."
  design_principles:
    - "Goal, termination, verification, and recovery are declared before execution."
    - "Agent roles are narrow enough to inspect and broad enough to finish without babysitting."
    - "Every media artifact has a named producer, verifier, memory entry, and canvas target."
    - "The final canvas must explain the run through edges, ports, traces, and output panels."
  loop:
    entry_state: "goal_received"
    states:
      - goal_received
      - plan_ready
      - text_ready
      - image_ready
      - video_ready
      - canvas_bound
      - judge_passed
      - completed
    max_iterations: 8
    retry_budget_per_lane: 2
    stop_condition: "All required artifacts are present, all verifier checks pass, graph edges resolve, and the Rich Media Panel can render text, image, and video ports without layout overlap."
    fail_condition: "Retry budget exhausted, schema parse fails, output ports cannot resolve, or media artifact cannot be produced or substituted with a declared recovery artifact."
  agents:
    - id: "lead"
      role: "Goal steward"
      responsibilities: ["decompose the Ralphthon goal", "own termination", "keep trace readable"]
    - id: "planner"
      role: "Shot and graph planner"
      responsibilities: ["write storyboard", "assign widget lanes", "keep 16:9 canvas balanced"]
    - id: "text"
      role: "Text generation worker"
      responsibilities: ["produce narration", "produce prompt pack", "respect source and copy policy"]
    - id: "image"
      role: "Image generation worker"
      responsibilities: ["produce keyframe prompt", "bind imageUrl", "preserve Singapore/South Korea/US theme"]
    - id: "video"
      role: "Video generation worker"
      responsibilities: ["produce video prompt", "consume image reference", "bind videoUrl"]
    - id: "verifier"
      role: "Canvas and media judge"
      responsibilities: ["check graph schema", "check output ports", "check visual balance", "decide rerun or completion"]
  memory:
    run_ledger:
      - "goal hash"
      - "agent plan"
      - "prompt versions"
      - "artifact URIs"
      - "verifier decisions"
      - "recovery patches"
    durable_notes:
      - "Use source fixture only as a validation/demo document, never as hardcoded runtime data."
      - "Keep OpenClaw visuals original: lobster signal mark, tri-country route, Codex-centered harness."
      - "Prefer partial reruns over full restart when one media lane fails."
  tools:
    - id: "codex"
      purpose: "local repo-aware implementation and verification"
    - id: "canvas_parser"
      purpose: "parse yaml-frontmatter flow graph and confirm nodes/edges"
    - id: "text_generator"
      purpose: "generate narration, shot list, prompt pack"
    - id: "image_generator"
      purpose: "generate hero keyframe"
    - id: "video_generator"
      purpose: "generate final motion clip from prompt and image reference"
    - id: "browser_verifier"
      purpose: "live UI verification of canvas rendering"
  recovery:
    - trigger: "text output missing required sections"
      action: "rerun text lane with verifier error summary and previous prompt version"
    - trigger: "imageUrl missing or invalid"
      action: "rerun image lane; if unavailable, bind declared placeholder artifact with status=recovered"
    - trigger: "videoUrl missing or invalid"
      action: "rerun video lane from last verified image; if unavailable, bind storyboard animatic artifact with status=recovered"
    - trigger: "canvas ports missing"
      action: "patch flow.edges only, then reparse and relayout"
    - trigger: "layout overlap"
      action: "increase panel width or rebalance x/y positions inside 1920x1080 bounds"
  verification:
    schema:
      - "$schema is kgc-pipeline/v1"
      - "widget_bundle graph refs match flow node and edge ids"
      - "all RichMediaPanel target ports exist: output, imageUrl, videoUrl"
    media:
      - "text output includes harness explanation, narration, image prompt, and video prompt"
      - "image output references OpenClaw, lobster signal, Singapore, South Korea, and US"
      - "video output references 16:9 motion, keyframe continuity, and final panel handoff"
    canvas:
      - "layout fits 1920x1080 without node overlap"
      - "edges remain visible and labeled"
      - "Rich Media Panel is not hidden behind widgets"
    termination:
      - "completion reason is recorded"
      - "failed lanes are either passed after retry or explicitly recovered"

widget_bundle:
  kind: kg:flow:widgetBundle
  version: 1
  registry: []
  graph:
    type: Graph
    context: frontmatter-flow
    metadata: {kind: frontmatter-flow, demo: ralphthon-openclaw}
    nodes_ref: [w-goal-brief, w-text-script, w-image-keyframe, w-video-clip, w-harness-judge, p-rich-media]
    edges_ref: [e-goal-to-text, e-text-to-image, e-image-to-video, e-text-to-panel, e-image-to-panel, e-video-to-panel, e-judge-to-panel]
    display:
      direction: LR
      edgeType: bezier
      aspectRatio: "16:9"
      targetResolution: "1920x1080"
    behavior:
      drag_pan_zoom_owner: flowEditor-frontmatter-only
      rich_media_overlay_handlers: flowEditor-frontmatter-only
      forbid_cross_renderer_proxy: true

canvas:
  auto_layout: false
  layout_algo: fixed-balanced-16x9
  snap_to_grid: true
  grid_size: 20
  minimap: true
  controls: true
  bounds:
    width: 1920
    height: 1080
  node_defaults:
    width: 260
    height: 112
  edge_defaults:
    type: smoothstep
    animated: true
  balance_rules:
    - "Generation widgets occupy the left and center lanes."
    - "Rich Media Panel owns the right third and receives text, image, and video."
    - "Verifier sits below the media lane so recovery logic is visible without covering output."
    - "No floating instruction cards; the first viewport is the working canvas."

runner:
  entry: R01
  exit: R09
  steps:
    - seq: R01
      action: "ingest-goal"
      input: "raw markdown fixture"
      output: "goal packet"
      description: "Parse YAML frontmatter and body; preserve validation fixture path as data, not code."
    - seq: R02
      action: "resolve-integrations"
      input: "goal packet"
      output: "tool capability map"
      description: "Read MainPanel Integrations for Codex, text, image, video, storage, and browser verifier availability."
    - seq: R03
      action: "plan"
      input: "goal packet + capability map"
      output: "agent plan"
      description: "Lead and planner assign text, image, video, judge, memory, and recovery lanes."
    - seq: R04
      action: "generate-text"
      input: "agent plan"
      output: "narration + prompt pack"
      description: "Text worker writes original Ralphthon narration, image prompt, video prompt, and harness explanation."
    - seq: R05
      action: "generate-image"
      input: "prompt pack"
      output: "imageUrl"
      description: "Image worker creates or binds the OpenClaw keyframe for the tri-country route."
    - seq: R06
      action: "generate-video"
      input: "prompt pack + imageUrl"
      output: "videoUrl"
      description: "Video worker creates or binds the 16:9 motion clip."
    - seq: R07
      action: "bind-canvas"
      input: "narration + imageUrl + videoUrl"
      output: "RichMediaPanel state"
      description: "Edges route output, imageUrl, and videoUrl into the panel with explicit target ports."
    - seq: R08
      action: "verify-or-recover"
      input: "graph + artifacts + panel"
      output: "judge report"
      description: "Verifier checks schema, artifact presence, copy policy, port resolution, and visual balance; reruns failed lanes within budget."
    - seq: R09
      action: "terminate"
      input: "judge report"
      output: "completed run"
      description: "Stop only when the judge records completion and the canvas can show text, image, video, widgets, panel, and edges."

pipeline:
  - seq: W01
    node: w-goal-brief
    label: "Goal brief - Ralphthon OpenClaw harness"
    actor: ["user", "Codex"]
    edge_in: "goal"
    edge_out: "brief"
    user_action: "Send the Ralphthon goal through FloatingPanel Chat UI"
    sys_event: "Codex converts it into an inspectable harness plan"
    data_in: "inputs.script + superagent_harness"
    data_out: "properties.output"
    trigger: "goal_received"
    on_fail: "halt with missing goal"
    confidence: high
    status: READY
  - seq: W02
    node: w-text-script
    label: "Text generation - narration and prompt pack"
    actor: ["text agent", "AI"]
    edge_in: "brief"
    edge_out: "output"
    user_action: "Review or rerun script lane"
    sys_event: "TextGeneration writes original narration, image prompt, video prompt, and harness judge notes"
    data_in: "properties.prompt"
    data_out: "properties.output + properties.outputSrcDoc"
    trigger: "plan_ready"
    on_fail: "retry text lane with verifier diff"
    confidence: high
    status: READY
  - seq: W03
    node: w-image-keyframe
    label: "Image generation - OpenClaw keyframe"
    actor: ["image agent", "AI"]
    edge_in: "image_prompt"
    edge_out: "imageUrl"
    user_action: "Run image lane after text prompt passes"
    sys_event: "ImageGeneration writes imageUrl for the hero keyframe"
    data_in: "properties.prompt + properties.model"
    data_out: "properties.imageUrl"
    trigger: "text_ready"
    on_fail: "retry image lane or bind declared recovery keyframe"
    confidence: high
    status: READY
  - seq: W04
    node: w-video-clip
    label: "Video generation - 16:9 clip"
    actor: ["video agent", "AI"]
    edge_in: "reference_image"
    edge_out: "videoUrl"
    user_action: "Run video lane after keyframe exists"
    sys_event: "VideoGeneration writes videoUrl for the final clip"
    data_in: "properties.prompt + properties.model + properties.reference_image"
    data_out: "properties.videoUrl"
    trigger: "image_ready"
    on_fail: "retry video lane or bind declared animatic recovery"
    confidence: high
    status: READY
  - seq: W05
    node: w-harness-judge
    label: "Harness judge - verify, recover, terminate"
    actor: ["verifier agent", "Codex"]
    edge_in: "graph + artifacts"
    edge_out: "judge_report"
    user_action: "Inspect why the run stopped"
    sys_event: "Judge validates schema, artifacts, ports, layout, and copy policy"
    data_in: "flow.nodes + flow.edges + media outputs"
    data_out: "properties.output"
    trigger: "canvas_bound"
    on_fail: "recover only the failed lane while budget remains"
    confidence: high
    status: READY
  - seq: W06
    node: p-rich-media
    label: "Rich Media Panel - text, image, video"
    actor: ["system", "user"]
    edge_in: "output + imageUrl + videoUrl + judge_report"
    edge_out: "rendered_panel"
    user_action: "Preview generated content in one panel"
    sys_event: "Panel renders text, image, video, and judge status without hiding graph edges"
    data_in: "target ports: output, imageUrl, videoUrl"
    data_out: "canvas preview"
    trigger: "judge_passed"
    on_fail: "rebalance layout and rebind ports"
    confidence: high
    status: READY

mermaid: |
  %%{init: {"theme": "base", "themeVariables": {"primaryColor":"#F7F9FB","primaryTextColor":"#17202A","primaryBorderColor":"#B23A35","lineColor":"#536271","secondaryColor":"#DDF4F7","tertiaryColor":"#ECF8E8"}}}%%
  flowchart LR
    classDef harness fill:#F7F9FB,stroke:#B23A35,color:#17202A,stroke-width:1.5px
    classDef widget fill:#DDF4F7,stroke:#2A7D8C,color:#12343B,stroke-width:1.5px
    classDef panel fill:#ECF8E8,stroke:#4D8B31,color:#18330F,stroke-width:1.5px
    classDef judge fill:#FFF4D7,stroke:#A46A00,color:#352200,stroke-width:1.5px

    w-goal-brief["Goal Brief\nOpenClaw Ralphthon"]
    w-text-script["Text Widget\nNarration + Prompt Pack\n{{inputs.text_model}}"]
    w-image-keyframe["Image Widget\nSingapore + S Korea + US Keyframe\n{{inputs.image_model}}"]
    w-video-clip["Video Widget\n16:9 Motion Clip\n{{inputs.video_model}}"]
    w-harness-judge["Harness Judge\nVerify + Recover + Terminate"]
    p-rich-media["Rich Media Panel\nText + Image + Video + Judge"]

    w-goal-brief -->|brief| w-text-script
    w-text-script -->|image_prompt| w-image-keyframe
    w-image-keyframe -->|reference_image| w-video-clip
    w-text-script -->|output| p-rich-media
    w-image-keyframe -->|imageUrl| p-rich-media
    w-video-clip -->|videoUrl| p-rich-media
    w-harness-judge -->|judge_report| p-rich-media

    class w-goal-brief harness
    class w-text-script,w-image-keyframe,w-video-clip widget
    class w-harness-judge judge
    class p-rich-media panel

flow:
  direction: {key: direction, type: string, value: LR}
  edgeType: {key: edgeType, type: string, value: bezier}
  snapToGrid: {key: snapToGrid, type: boolean, value: true}
  computed: {key: computed, type: boolean, value: true}
  aspectRatio: {key: aspectRatio, type: string, value: "16:9"}
  targetResolution: {key: targetResolution, type: string, value: "1920x1080"}

  nodes:
    - id: {key: id, type: string, value: "w-goal-brief"}
      type: {key: type, type: string, value: "TextGeneration"}
      label: {key: label, type: string, value: "Goal Brief - OpenClaw Ralphthon"}
      phase: {key: phase, type: string, value: "plan"}
      actor: {key: actor, type: array, value: ["user", "Codex"]}
      position: {key: position, type: object, value: {x: 80, y: 250}}
      size: {key: size, type: object, value: {width: 280, height: 130}}
      handles: {key: handles, type: object, value: {target: ["goal"], source: ["brief"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "videoScript"}
      chatProvider: {key: chatProvider, type: string, value: "{{inputs.text_provider_id}}"}
      chatAuthMode: {key: chatAuthMode, type: string, value: "serverManaged"}
      chatEndpointUrl: {key: chatEndpointUrl, type: string, value: "{{inputs.text_endpoint_url}}"}
      chatModel: {key: chatModel, type: select, value: "{{inputs.text_model}}"}
      chatThinkingType: {key: chatThinkingType, type: select, value: "enabled"}
      chatReasoningEffort: {key: chatReasoningEffort, type: select, value: "medium"}
      chatStream: {key: chatStream, type: boolean, value: true}
      prompt: {key: prompt, type: textarea, value: "Create a concise goal packet for {{inputs.demo_name}}. The product is {{inputs.product_name}}. The task is {{inputs.core_offer}}. Theme: {{inputs.theme}}. Setting: {{inputs.setting}}. Include termination, verification, recovery, and copy-policy constraints. Return markdown with sections: Mission, Agents, Loop, Acceptance."}
      output: {key: output, type: markdown, value: ""}

    - id: {key: id, type: string, value: "w-text-script"}
      type: {key: type, type: string, value: "TextGeneration"}
      label: {key: label, type: string, value: "Text Widget - Narration and Prompt Pack"}
      phase: {key: phase, type: string, value: "generate"}
      actor: {key: actor, type: array, value: ["text agent", "AI"]}
      position: {key: position, type: object, value: {x: 430, y: 120}}
      size: {key: size, type: object, value: {width: 340, height: 180}}
      handles: {key: handles, type: object, value: {target: ["brief"], source: ["output", "outputSrcDoc", "image_prompt", "video_prompt"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "videoScript"}
      chatProvider: {key: chatProvider, type: string, value: "{{inputs.text_provider_id}}"}
      chatAuthMode: {key: chatAuthMode, type: string, value: "serverManaged"}
      chatEndpointUrl: {key: chatEndpointUrl, type: string, value: "{{inputs.text_endpoint_url}}"}
      chatModel: {key: chatModel, type: select, value: "{{inputs.text_model}}"}
      chatThinkingType: {key: chatThinkingType, type: select, value: "enabled"}
      chatReasoningEffort: {key: chatReasoningEffort, type: select, value: "medium"}
      chatStream: {key: chatStream, type: boolean, value: true}
      prompt: {key: prompt, type: textarea, value: "Generate original rich media demo copy for {{inputs.demo_name}}. Use theme={{inputs.theme}}, duration={{inputs.duration_label}}, output={{inputs.output_format}}. Script seed: {{inputs.script}}. Explain the SuperAgent harness with technical depth: autonomous loop, sub-agents, memory, tools, verification, recovery, and termination. Also output one image prompt and one video prompt. Do not copy external project wording or implementation. Return markdown sections: Voiceover, On-screen Canvas Actions, Image Prompt, Video Prompt, Harness Notes, Judge Checklist."}
      output: {key: output, type: markdown, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: markdown, value: ""}

    - id: {key: id, type: string, value: "w-image-keyframe"}
      type: {key: type, type: string, value: "ImageGeneration"}
      label: {key: label, type: string, value: "Image Widget - OpenClaw Keyframe"}
      phase: {key: phase, type: string, value: "generate"}
      actor: {key: actor, type: array, value: ["image agent", "AI"]}
      position: {key: position, type: object, value: {x: 860, y: 100}}
      size: {key: size, type: object, value: {width: 330, height: 170}}
      handles: {key: handles, type: object, value: {target: ["image_prompt"], source: ["imageUrl"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "imageGeneration"}
      model: {key: model, type: select, value: "{{inputs.image_model}}"}
      prompt: {key: prompt, type: textarea, value: "16:9 cinematic keyframe for {{inputs.demo_name}}: a polished Knowgrph Canvas command room with OpenClaw interface panels, a red lobster signal glyph in the routing map, Singapore Marina Bay harbor lights on the left, South Korea robotics lab neon in the center, US coastal launch deck on the right, visible graph edges linking text image video widgets into one rich media panel, crisp production UI, no copied branding, no cartoon mascot, balanced 1920x1080 composition, cinematic technical realism."}
      sizePreset: {key: sizePreset, type: select, value: "1920x1080"}
      output_format: {key: output_format, type: select, value: "png"}
      imageUrl: {key: imageUrl, type: string, value: ""}

    - id: {key: id, type: string, value: "w-video-clip"}
      type: {key: type, type: string, value: "VideoGeneration"}
      label: {key: label, type: string, value: "Video Widget - 16:9 Clip"}
      phase: {key: phase, type: string, value: "generate"}
      actor: {key: actor, type: array, value: ["video agent", "AI"]}
      position: {key: position, type: object, value: {x: 860, y: 360}}
      size: {key: size, type: object, value: {width: 330, height: 170}}
      handles: {key: handles, type: object, value: {target: ["reference_image", "video_prompt"], source: ["videoUrl"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "videoGeneration"}
      model: {key: model, type: select, value: "{{inputs.video_model}}"}
      duration: {key: duration, type: number, value: 12}
      aspect_ratio: {key: aspect_ratio, type: select, value: "16:9"}
      reference_image: {key: reference_image, type: string, value: "{{w-image-keyframe.imageUrl}}"}
      prompt: {key: prompt, type: textarea, value: "Create a {{inputs.duration_label}} {{inputs.output_format}} product-demo clip. Start in FloatingPanel Chat UI receiving the Ralphthon goal. Track the OpenClaw harness as it routes through text, image, video, and judge lanes. Show Singapore harbor lights, South Korea robotics neon, and US coastal launch energy as three synchronized panels. The lobster appears as a precise red signal glyph moving along graph edges. End with the Rich Media Panel displaying text, image, and video while the judge stamp reads complete. Smooth camera, readable UI, no copied external UI."}
      videoUrl: {key: videoUrl, type: string, value: ""}

    - id: {key: id, type: string, value: "w-harness-judge"}
      type: {key: type, type: string, value: "TextGeneration"}
      label: {key: label, type: string, value: "Harness Judge - Verify and Recover"}
      phase: {key: phase, type: string, value: "verify"}
      actor: {key: actor, type: array, value: ["verifier agent", "Codex"]}
      position: {key: position, type: object, value: {x: 430, y: 520}}
      size: {key: size, type: object, value: {width: 360, height: 180}}
      handles: {key: handles, type: object, value: {target: ["graph", "artifacts"], source: ["judge_report", "output"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "videoScript"}
      chatProvider: {key: chatProvider, type: string, value: "{{inputs.text_provider_id}}"}
      chatAuthMode: {key: chatAuthMode, type: string, value: "serverManaged"}
      chatEndpointUrl: {key: chatEndpointUrl, type: string, value: "{{inputs.text_endpoint_url}}"}
      chatModel: {key: chatModel, type: select, value: "{{inputs.text_model}}"}
      chatThinkingType: {key: chatThinkingType, type: select, value: "enabled"}
      chatReasoningEffort: {key: chatReasoningEffort, type: select, value: "high"}
      chatStream: {key: chatStream, type: boolean, value: true}
      prompt: {key: prompt, type: textarea, value: "Judge the current OpenClaw Ralphthon run. Check schema, node refs, edge refs, RichMediaPanel target ports output/imageUrl/videoUrl, media artifact presence, copy policy, no repo hardcoding, 16:9 balance, and termination reason. If anything fails, return RECOVER with the exact lane to rerun. If all pass, return COMPLETE with a concise rationale."}
      output: {key: output, type: markdown, value: ""}

    - id: {key: id, type: string, value: "p-rich-media"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel - OpenClaw Outputs"}
      phase: {key: phase, type: string, value: "render"}
      actor: {key: actor, type: array, value: ["system", "user"]}
      position: {key: position, type: object, value: {x: 1260, y: 120}}
      size: {key: size, type: object, value: {width: 560, height: 620}}
      handles: {key: handles, type: object, value: {target: ["output", "outputSrcDoc", "imageUrl", "videoUrl", "judge_report"], source: ["rendered_panel"]}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "video"}
      output: {key: output, type: markdown, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: markdown, value: ""}
      imageUrl: {key: imageUrl, type: string, value: ""}
      videoUrl: {key: videoUrl, type: string, value: ""}
      judge_report: {key: judge_report, type: markdown, value: ""}
      media_interactive: {key: media_interactive, type: boolean, value: true}
      panel_tabs: {key: panel_tabs, type: array, value: ["text", "image", "video", "judge"]}

  edges:
    - {id: e-goal-to-text, source: w-goal-brief, sourceHandle: brief, target: w-text-script, targetHandle: brief, label: "brief", animated: true}
    - {id: e-text-to-image, source: w-text-script, sourceHandle: image_prompt, target: w-image-keyframe, targetHandle: image_prompt, label: "image_prompt", animated: true}
    - {id: e-image-to-video, source: w-image-keyframe, sourceHandle: imageUrl, target: w-video-clip, targetHandle: reference_image, label: "imageUrl -> reference_image", animated: true}
    - {id: e-text-to-panel, source: w-text-script, sourceHandle: output, target: p-rich-media, targetHandle: output, label: "output", animated: true}
    - {id: e-image-to-panel, source: w-image-keyframe, sourceHandle: imageUrl, target: p-rich-media, targetHandle: imageUrl, label: "imageUrl", animated: true}
    - {id: e-video-to-panel, source: w-video-clip, sourceHandle: videoUrl, target: p-rich-media, targetHandle: videoUrl, label: "videoUrl", animated: true}
    - {id: e-judge-to-panel, source: w-harness-judge, sourceHandle: judge_report, target: p-rich-media, targetHandle: judge_report, label: "judge_report", animated: true}
---

# Ralphthon Video Demo - OpenClaw SuperAgent Harness

## Typed Fixture Contract

- The opening YAML frontmatter block remains the first-block machine SSOT for renderer activation, harness metadata, pipeline inputs, and graph-backed runtime state.
- This document is an approved typed validation fixture, not a canonical plain-YAML-only authoring example.
- Normalized `{key, type, value}` envelopes in `flow.nodes[*]`, `flow.edges[*]`, and related graph-bearing frontmatter are intentional here so ingest -> parse -> render validates typed harness payload handling directly.
- Surrounding frontmatter such as `inputs`, `spec`, `superagent_harness`, `widget_bundle`, `canvas`, `runner`, and `pipeline` stays canonical YAML so the fixture still demonstrates normal frontmatter authoring around the typed graph payload.
- Canonical authored harness docs should still prefer plain YAML for frontmatter and related schema-bearing blocks outside dedicated validation fixtures.
- Runtime behavior must still be derived from parsed frontmatter and document content only, never from file path assumptions or hardcoded demo fallbacks.

This demo shows Knowgrph operating a Codex-anchored SuperAgent harness for rich media generation on Canvas. The point is not just that the canvas can produce text, image, and video. The point is that the harness can run a long job, inspect itself, recover lane-by-lane, and stop for a legible reason.

The visual theme is OpenClaw: a precise red lobster signal mark moving across Singapore, South Korea, and the US. The mark is a routing emblem for the harness. It is used to make orchestration visible without turning the demo into a mascot reel.

## Demo Promise

OpenClaw receives one Ralphthon goal through the FloatingPanel Chat UI. It decomposes the job into text, image, video, and verifier lanes; generates the assets; binds them into the Rich Media Panel; and terminates only when the panel, edges, ports, and artifacts pass verification.

The judge should be able to read the canvas and answer:

- What was the goal?
- Which agents owned which lanes?
- What tools were used?
- What memory was retained?
- What checks passed?
- What happened if a lane failed?
- Why did the run stop?

## Voiceover

Ralphthon starts with a single instruction: make OpenClaw prove it can operate rich media end to end.

Codex receives the goal, but Codex is not left alone in a blank loop. OpenClaw wraps it with a harness: a lead agent, a planner, text, image, video, and a judge. Each lane has a job. Each output has a port. Each retry has a budget.

The first scene opens in Singapore. The canvas is calm, bright, and operational. A red lobster signal crosses Marina Bay, not as decoration, but as the trace of an agent route.

The second scene moves to South Korea. A robotics lab in Seoul watches Busan port telemetry stream across the wall. The planner turns the goal into a shot list. The text agent writes narration and prompts. The image agent creates the keyframe. The video agent waits for a verified reference.

The third scene lands in the US on a coastal launch deck. The video lane runs. The judge catches a weak edge binding, patches only the failed lane, and reruns verification. No babysitting. No silent partial success.

The final frame is the Knowgrph Canvas itself: MainPanel Integrations, FloatingPanel Chat UI, Editor Workspace, generation widgets, Rich Media Panel, and labeled edges. OpenClaw stops because the goal is complete and the harness can prove it.

## On-screen Canvas Actions

1. Open MainPanel Integrations and confirm Codex, text generation, image generation, video generation, and storage capability status.
2. Send the Ralphthon goal from FloatingPanel Chat UI.
3. Watch `w-goal-brief` produce the mission packet.
4. Watch `w-text-script` produce narration, image prompt, video prompt, and harness notes.
5. Watch `w-image-keyframe` bind `imageUrl`.
6. Watch `w-video-clip` consume `imageUrl` as `reference_image` and bind `videoUrl`.
7. Watch `w-harness-judge` check schema, artifacts, ports, copy policy, and 16:9 layout.
8. Watch `p-rich-media` render text, image, video, and judge report without hiding graph edges.

## Image Prompt

Create a 16:9 cinematic keyframe of an operational Knowgrph Canvas command room. The left pane shows Singapore Marina Bay harbor lights; the center pane shows a South Korea robotics lab with Seoul neon and Busan port telemetry; the right pane shows a US coastal launch deck. An OpenClaw interface overlays the scene. A precise red lobster signal glyph moves along visible graph edges from Text Widget to Image Widget to Video Widget to Rich Media Panel. The UI is crisp and readable, with no copied third-party interface, no cartoon mascot, no clutter, and a balanced 1920x1080 composition.

## Video Prompt

Create a 12-second 16:9 product-demo video. Start in the FloatingPanel Chat UI as a Ralphthon goal arrives. Pull back to show the Editor Workspace and Knowgrph Canvas. A red OpenClaw lobster signal routes through text, image, video, and judge widgets. The background moves through Singapore harbor, South Korea robotics neon, and a US coastal launch deck as synchronized panels on the canvas, not as separate travel footage. The verifier flags one issue, recovers the failed lane, and the Rich Media Panel resolves text, image, video, and judge report. End on a clean completion state with labeled edges and readable ports.

## Harness Notes

The harness uses a deliberate loop:

1. Goal is received and normalized.
2. Capability map is read from integrations.
3. Planner assigns agents and media lanes.
4. Text lane produces narration and prompts.
5. Image lane produces a keyframe.
6. Video lane produces motion from prompt and keyframe.
7. Canvas lane binds outputs to panel ports.
8. Judge verifies, recovers, or terminates.

Recovery is local to the failed lane. If video fails, text and image are not regenerated. If a panel port is missing, edges are patched and reparsed. If layout overlaps, node placement is rebalanced inside the 1920x1080 canvas.

Termination is explicit: complete only after schema parse, artifact presence, panel binding, copy policy, and live UI layout checks pass.

## Judge Checklist

- `$schema` is `kgc-pipeline/v1`.
- `widget_bundle.graph.nodes_ref` and `flow.nodes` agree.
- `widget_bundle.graph.edges_ref` and `flow.edges` agree.
- `p-rich-media` exists and has target ports for `output`, `imageUrl`, and `videoUrl`.
- The text output explains the harness, not only the media concept.
- The image and video prompts include OpenClaw, lobster signal, Singapore, South Korea, and US.
- The canvas remains balanced at 16:9 1920x1080.
- The validation fixture path is data for this demo, not a hardcoded dependency in the application.
- The DeerFlow reference is treated as category inspiration only; no code, phrasing, assets, or topology are copied.

## Completion Line

OpenClaw completes the Ralphthon run when the Rich Media Panel can display all generated media, the graph explains how the media was produced, and the harness records why it is safe to stop.
