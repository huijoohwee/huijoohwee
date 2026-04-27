---
title: "Knowgrph · 12s Mini-Drama (Text → Image → Video) → Rich Media Panels"
graphId: "md:knowgrph-rich-media-generation-demo"
doc_type: "Chat Response"
date: "2026-04-27"
ai_model: "gpt-5.4"
lang: en-US
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "flowEditor"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgDocumentStructureBaselineLock: false

$schema: "kgc-pipeline/v1"

demo_inputs:
  byteplus_text_model: "seed-2-0-lite-260228"
  byteplus_image_model: "seedream-4-0-250828"
  byteplus_video_model: "seedance-1-0-pro-fast-251015"
  vibe: "epic cinematic, myth-tech fusion"
  duration_seconds: 12
  duration_label: "12s"
  theme: "celestial troops vs mech-beasts at sunset"
  script: |
    Epic cinematic battlefield video set on a vast ancient desert. The film opens with an extreme wide establishing shot — massive ranks of celestial troops, ornate heavenly armor, cloud-tipped spears, silk banners snapping in dust-laden winds. At the front: a towering Robomonkey, chrome-gold body etched with seal script, glowing red eyes cutting through the haze, electric staff crackling at its back — and beside it a barrel-chested Robopig, iron-plated snout gleaming, mechanical rake raised and humming. Low-angle sunset light casts a heavy amber glow as the camera slowly pushes in, hydraulic joints hissing, steam rising in the cold air. Cut to medium: Robomonkey stares ahead, golden headband catching the last light. Low-angle: Robopig's iron hoof strikes the cracked earth — sand and embers erupt, ground trembling. Pull back to a high aerial wide: the full celestial army stretches across the Flaming Mountain desert — vast, overwhelming, awe-inspiring.
  location:
    name: "Flaming Mountain desert"
    short_label: "Flaming Mountain desert"
    label: "Flaming Mountain desert (sunset battlefield)"

spec:
  format: kgc-pipeline
  version: "1.0.0"
  parser: yaml-frontmatter
  execution: computing-flow
  topology: DAG
  ssot_surfaces: [widget_bundle, pipeline, flow.nodes, flow.edges, mermaid, runner]

widget_bundle:
  kind: kg:flow:widgetBundle
  version: 1
  registry: []
  graph:
    type: Graph
    context: frontmatter-flow
    metadata: {kind: frontmatter-flow}
    nodes_ref: [w-text-script, p-text-script, w-img-character-celestial, p-img-character-celestial, w-img-character-robomonkey, p-img-character-robomonkey, w-img-character-robopig, p-img-character-robopig, w-img-location-desert, p-img-location-desert, w-img-scene-01, p-img-scene-01, w-img-scene-02, p-img-scene-02, w-img-scene-03, p-img-scene-03, w-img-scene-04, p-img-scene-04, w-video-scene, p-video-scene]
    edges_ref: [e-text-script, e-text-script-srcdoc, e-character-celestial, e-character-robomonkey, e-character-robopig, e-location-desert, e-scene-01, e-scene-02, e-scene-03, e-scene-04, e-scene01-to-video-ref, e-video, e-rel-celestial-s01, e-rel-celestial-s02, e-rel-celestial-s03, e-rel-celestial-s04, e-rel-robomonkey-s01, e-rel-robomonkey-s02, e-rel-robomonkey-s03, e-rel-robomonkey-s04, e-rel-robopig-s01, e-rel-robopig-s02, e-rel-robopig-s03, e-rel-robopig-s04, e-rel-location-s01, e-rel-location-s02, e-rel-location-s03, e-rel-location-s04, e-rel-s01-video, e-rel-s02-video, e-rel-s03-video, e-rel-s04-video]
    display:
      direction: LR
      edgeType: bezier
    behavior:
      drag_pan_zoom_owner: flowEditor-frontmatter-only
      rich_media_overlay_handlers: flowEditor-frontmatter-only
      forbid_cross_renderer_proxy: true

links:
  yaml_anchor: "#computing-flow-definition"
  body_anchor: "#flow-graph"
  self_ref: "knowgrph-rich-media-generation-demo.md"

canvas:
  auto_layout: true
  layout_algo: dagre-LR
  snap_to_grid: true
  grid_size: 20
  minimap: true
  controls: true
  node_defaults:
    width: 240
    height: 90
  edge_defaults:
    type: smoothstep
    animated: true

runtime:
  entry: {key: entry, type: string, value: "w-text-script"}
  exit: {key: exit, type: string, value: "p-video-scene"}
  sandbox: {key: sandbox, type: string, value: "quickjs-emscripten"}
  trace: {key: trace, type: boolean, value: true}
  maxRetry: {key: maxRetry, type: number, value: 0}

graph_meta:
  node_count: 20
  edge_count: 32
  phase_count: 2
  entry_node: w-text-script
  exit_node: p-video-scene
  phases:
    - id: P1
      label: "Widgets"
      seq_range: "W01–W05"
      nodes: [w-text-script, w-img-character-celestial, w-img-character-robomonkey, w-img-character-robopig, w-img-location-desert, w-img-scene-01, w-img-scene-02, w-img-scene-03, w-img-scene-04, w-video-scene]
    - id: P2
      label: "Render"
      seq_range: "W06–W15"
      nodes: [p-text-script, p-img-character-celestial, p-img-character-robomonkey, p-img-character-robopig, p-img-location-desert, p-img-scene-01, p-img-scene-02, p-img-scene-03, p-img-scene-04, p-video-scene]
  forward_edges:
    - {edge: e-text-script, from: w-text-script, to: p-text-script, handle: text_out→output}
    - {edge: e-text-script-srcdoc, from: w-text-script, to: p-text-script, handle: outputSrcDoc→outputSrcDoc}
    - {edge: e-scene-01, from: w-img-scene-01, to: p-img-scene-01, handle: imageUrl→imageUrl}
    - {edge: e-scene01-to-video-ref, from: w-img-scene-01, to: w-video-scene, handle: imageUrl→reference_image}
    - {edge: e-video, from: w-video-scene, to: p-video-scene, handle: videoUrl→videoUrl}

runner:
  entry: R01
  exit: R06
  steps:
    - seq: R01
      action: ingest
      input: "raw file bytes"
      output: "parsed YAML object"
      description: "Parse YAML frontmatter; validate $schema == kgc-pipeline/v1; expose __doc."
    - seq: R02
      action: resolve
      input: "__doc"
      output: "__doc_resolved"
      description: "Resolve {{key}} interpolation for body and tables; expose __doc_resolved."
    - seq: R03
      action: build-graph
      input: "__doc_resolved"
      output: "graph { nodes[], edges[] }"
      description: "Cross-validate SSOT: pipeline[*].node == flow.nodes[*].id.value == mermaid IDs; halt on mismatch."
    - seq: R04
      action: compile-compute
      input: "graph"
      output: "graph (compiled)"
      description: "Compile flow.nodes[*].compute.value to functions; mark nodes async if needed."
    - seq: R05
      action: traverse
      input: "graph (compiled)"
      output: "graph (executed)"
      description: "Materialize widget nodes + edges; connected values resolve into Rich Media Panel render drivers; no feedback arcs."
    - seq: R06
      action: render
      input: "graph (executed) + mermaid + body"
      output: "rendered Knowledge Graph Canvas"
      description: "Render Flow Graph + Pipeline table; apply parseSigil() to cells; auto-layout dagre-LR."

pipeline:
  - seq: W01
    node: w-text-script
    label: "text breakdown"
    actor: ["user", "AI"]
    edge_in: "prompt_in"
    edge_out: "text_out"
    user_action: "User edits the 12s script prompt and runs"
    sys_event: "TextGeneration returns structured prompts for characters, location, scenes, and the final video"
    data_in: "properties.prompt"
    data_out: "properties.output + properties.outputSrcDoc"
    trigger: "run"
    on_fail: "output unchanged"
    kanban: TBD
    confidence: high
    status: TBD

  - seq: W02
    node: w-img-character-robomonkey
    label: "image generation (character)"
    actor: ["user", "AI"]
    edge_in: "prompt_in"
    edge_out: "imageUrl"
    user_action: "Run character image widgets (celestial troops / Robomonkey / Robopig)"
    sys_event: "ImageGeneration writes `imageUrl`"
    data_in: "properties.prompt + properties.model"
    data_out: "properties.imageUrl"
    trigger: "run"
    on_fail: "imageUrl unchanged"
    kanban: TBD
    confidence: high
    status: TBD

  - seq: W03
    node: w-img-location-desert
    label: "image generation (location)"
    actor: ["user", "AI"]
    edge_in: "prompt_in"
    edge_out: "imageUrl"
    user_action: "Run location image widget (Flaming Mountain desert)"
    sys_event: "ImageGeneration writes `imageUrl`"
    data_in: "properties.prompt + properties.model"
    data_out: "properties.imageUrl"
    trigger: "run"
    on_fail: "imageUrl unchanged"
    kanban: TBD
    confidence: high
    status: TBD

  - seq: W04
    node: w-img-scene-01
    label: "image generation (scene)"
    actor: ["user", "AI"]
    edge_in: "prompt_in"
    edge_out: "imageUrl"
    user_action: "Run scene image widgets (S01–S04)"
    sys_event: "ImageGeneration writes `imageUrl`"
    data_in: "properties.prompt + properties.model"
    data_out: "properties.imageUrl"
    trigger: "run"
    on_fail: "imageUrl unchanged"
    kanban: TBD
    confidence: high
    status: TBD

  - seq: W05
    node: w-video-scene
    label: "video generation (scene cut)"
    actor: ["user", "AI"]
    edge_in: "reference_image"
    edge_out: "videoUrl"
    user_action: "Run the video widget after at least one scene image exists"
    sys_event: "VideoGeneration writes `videoUrl`"
    data_in: "properties.prompt + properties.model + properties.duration + properties.reference_image"
    data_out: "properties.videoUrl"
    trigger: "run"
    on_fail: "videoUrl unchanged"
    kanban: TBD
    confidence: high
    status: TBD

mermaid: |
  %%{init: {"theme": "base", "themeVariables": {"primaryColor":"#E1F5EE","primaryTextColor":"#085041","primaryBorderColor":"#1D9E75","lineColor":"#5F5E5A","secondaryColor":"#E6F1FB","tertiaryColor":"#FAEEDA"}}}%%
  flowchart LR
    classDef widget fill:#E1F5EE,stroke:#1D9E75,color:#085041,stroke-width:1.5px
    classDef panel  fill:#EAF3DE,stroke:#639922,color:#27500A,stroke-width:1.5px
    classDef store  fill:#F1EFE8,stroke:#888780,color:#444441,stroke-width:1px

    User([user])
    Store[(media_store JSONB)]

    w-text-script["Text Widget\nTextGeneration\n{{demo_inputs.byteplus_text_model}}"]
    p-text-script["Rich Media Panel\nText · Script"]

    w-img-character-celestial["Image Widget\nCharacter · Celestial Troops"]
    p-img-character-celestial["Rich Media Panel\nImage · Character"]

    w-img-character-robomonkey["Image Widget\nCharacter · Robomonkey"]
    p-img-character-robomonkey["Rich Media Panel\nImage · Character"]

    w-img-character-robopig["Image Widget\nCharacter · Robopig"]
    p-img-character-robopig["Rich Media Panel\nImage · Character"]

    w-img-location-desert["Image Widget\nLocation · Flaming Mountain desert"]
    p-img-location-desert["Rich Media Panel\nImage · Location"]

    w-img-scene-01["Image Widget\nScene S01 · Establishing wide"]
    p-img-scene-01["Rich Media Panel\nImage · Scene"]
    w-img-scene-02["Image Widget\nScene S02 · Medium Robomonkey"]
    p-img-scene-02["Rich Media Panel\nImage · Scene"]
    w-img-scene-03["Image Widget\nScene S03 · Low-angle Robopig"]
    p-img-scene-03["Rich Media Panel\nImage · Scene"]
    w-img-scene-04["Image Widget\nScene S04 · Aerial wide"]
    p-img-scene-04["Rich Media Panel\nImage · Scene"]

    w-video-scene["Video Widget\nVideoGeneration\n{{demo_inputs.byteplus_video_model}}\n{{demo_inputs.duration_label}}"]
    p-video-scene["Rich Media Panel\nVideo · Scene"]

    User -->|run| w-text-script
    w-text-script -->|text_out → output| p-text-script

    User -->|run| w-img-character-celestial
    User -->|run| w-img-character-robomonkey
    User -->|run| w-img-character-robopig
    User -->|run| w-img-location-desert
    User -->|run| w-img-scene-01
    User -->|run| w-img-scene-02
    User -->|run| w-img-scene-03
    User -->|run| w-img-scene-04
    User -->|run| w-video-scene

    w-img-character-celestial -->|imageUrl| p-img-character-celestial
    w-img-character-robomonkey -->|imageUrl| p-img-character-robomonkey
    w-img-character-robopig -->|imageUrl| p-img-character-robopig
    w-img-location-desert -->|imageUrl| p-img-location-desert
    w-img-scene-01 -->|imageUrl| p-img-scene-01
    w-img-scene-02 -->|imageUrl| p-img-scene-02
    w-img-scene-03 -->|imageUrl| p-img-scene-03
    w-img-scene-04 -->|imageUrl| p-img-scene-04
    w-video-scene -->|videoUrl| p-video-scene

    p-text-script -->|upsert| Store
    p-img-character-celestial -->|upsert| Store
    p-img-character-robomonkey -->|upsert| Store
    p-img-character-robopig -->|upsert| Store
    p-img-location-desert -->|upsert| Store
    p-img-scene-01 -->|upsert| Store
    p-img-scene-02 -->|upsert| Store
    p-img-scene-03 -->|upsert| Store
    p-img-scene-04 -->|upsert| Store
    p-video-scene -->|upsert| Store

    class w-text-script,w-img-character-celestial,w-img-character-robomonkey,w-img-character-robopig,w-img-location-desert,w-img-scene-01,w-img-scene-02,w-img-scene-03,w-img-scene-04,w-video-scene widget
    class p-text-script,p-img-character-celestial,p-img-character-robomonkey,p-img-character-robopig,p-img-location-desert,p-img-scene-01,p-img-scene-02,p-img-scene-03,p-img-scene-04,p-video-scene panel
    class Store store

flow:
  direction: {key: direction, type: string, value: LR}
  edgeType: {key: edgeType, type: string, value: bezier}
  snapToGrid: {key: snapToGrid, type: boolean, value: true}
  computed: {key: computed, type: boolean, value: true}

  nodes:
    - id: {key: id, type: string, value: "w-text-script"}
      type: {key: type, type: string, value: "TextGeneration"}
      label: {key: label, type: string, value: "Text Widget — Script Breakdown"}
      phase: {key: phase, type: string, value: "generate"}
      actor: {key: actor, type: array, value: ["user", "AI"]}
      handles: {key: handles, type: object, value: {target: ["prompt_in"], source: ["text_out", "outputSrcDoc"]}}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "textGeneration"}
      chatProvider: {key: chatProvider, type: string, value: "byteplus-modelark"}
      chatAuthMode: {key: chatAuthMode, type: string, value: "serverManaged"}
      chatEndpointUrl: {key: chatEndpointUrl, type: string, value: "https://ark.ap-southeast.bytepluses.com/api/v3/chat/completions"}
      chatModel: {key: chatModel, type: select, value: "{{demo_inputs.byteplus_text_model}}"}
      chatThinkingType: {key: chatThinkingType, type: select, value: "disabled"}
      chatReasoningEffort: {key: chatReasoningEffort, type: select, value: "minimal"}
      chatStream: {key: chatStream, type: boolean, value: true}
      prompt: {key: prompt, type: string, value: "Turn this 12s script into prompts for 3 characters, 1 location, scenes S01–S04, and 1 final video prompt. Script: {{demo_inputs.script}}"}
      confidence: {key: confidence, type: string, value: "high"}

    - id: {key: id, type: string, value: "p-text-script"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel — Text (Script)"}
      phase: {key: phase, type: string, value: "render"}
      actor: {key: actor, type: array, value: ["system", "user"]}
      handles: {key: handles, type: object, value: {target: ["output", "outputSrcDoc"], source: ["output", "outputSrcDoc"]}}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "richMediaPanel"}
      output: {key: output, type: string, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: string, value: ""}
      media_interactive: {key: media_interactive, type: boolean, value: true}

    - id: {key: id, type: string, value: "w-img-character-celestial"}
      type: {key: type, type: string, value: "ImageGeneration"}
      label: {key: label, type: string, value: "Image Widget — Character (Celestial Troops)"}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "imageGeneration"}
      model: {key: model, type: select, value: "{{demo_inputs.byteplus_image_model}}"}
      prompt: {key: prompt, type: textarea, value: "Epic cinematic character lineup: massive ranks of celestial troops in ornate heavenly armor, cloud-tipped spears, silk banners in dust-laden wind, sunset amber lighting, ancient desert battlefield, ultra-detailed, 16:9."}
      size: {key: size, type: select, value: "2K"}
      output_format: {key: output_format, type: select, value: "jpeg"}
      response_format: {key: response_format, type: select, value: "b64_json"}
      optimize_prompt_options: {key: optimize_prompt_options, type: select, value: "fast"}
      aspect_ratio: {key: aspect_ratio, type: number, value: 0.0625}
      stream: {key: stream, type: boolean, value: true}
      watermark: {key: watermark, type: boolean, value: false}
      seed: {key: seed, type: number, value: 0}
      guidance_scale: {key: guidance_scale, type: number, value: 0}
      reference_image: {key: reference_image, type: string, value: ""}
      handles: {key: handles, type: object, value: {target: ["reference_image"], source: ["imageUrl"]}}
      phase: {key: phase, type: string, value: "generate"}
      actor: {key: actor, type: array, value: ["user", "AI"]}

    - id: {key: id, type: string, value: "p-img-character-celestial"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel — Image (Character: Celestial Troops)"}
      phase: {key: phase, type: string, value: "render"}
      actor: {key: actor, type: array, value: ["system", "user"]}
      handles: {key: handles, type: object, value: {target: ["imageUrl", "outputSrcDoc"], source: ["imageUrl", "outputSrcDoc"]}}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "richMediaPanel"}
      imageUrl: {key: imageUrl, type: string, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: string, value: ""}
      media_interactive: {key: media_interactive, type: boolean, value: true}

    - id: {key: id, type: string, value: "w-img-character-robomonkey"}
      type: {key: type, type: string, value: "ImageGeneration"}
      label: {key: label, type: string, value: "Image Widget — Character (Robomonkey)"}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "imageGeneration"}
      model: {key: model, type: select, value: "{{demo_inputs.byteplus_image_model}}"}
      prompt: {key: prompt, type: textarea, value: "Towering Robomonkey: chrome-gold body etched with seal script, glowing red eyes, electric staff crackling on back, golden headband, cinematic desert sunset, steam and dust, ultra-detailed, 16:9."}
      size: {key: size, type: select, value: "2K"}
      output_format: {key: output_format, type: select, value: "jpeg"}
      response_format: {key: response_format, type: select, value: "b64_json"}
      optimize_prompt_options: {key: optimize_prompt_options, type: select, value: "fast"}
      aspect_ratio: {key: aspect_ratio, type: number, value: 0.0625}
      stream: {key: stream, type: boolean, value: true}
      watermark: {key: watermark, type: boolean, value: false}
      seed: {key: seed, type: number, value: 0}
      guidance_scale: {key: guidance_scale, type: number, value: 0}
      reference_image: {key: reference_image, type: string, value: ""}
      handles: {key: handles, type: object, value: {target: ["reference_image"], source: ["imageUrl"]}}
      phase: {key: phase, type: string, value: "generate"}
      actor: {key: actor, type: array, value: ["user", "AI"]}

    - id: {key: id, type: string, value: "p-img-character-robomonkey"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel — Image (Character: Robomonkey)"}
      phase: {key: phase, type: string, value: "render"}
      actor: {key: actor, type: array, value: ["system", "user"]}
      handles: {key: handles, type: object, value: {target: ["imageUrl", "outputSrcDoc"], source: ["imageUrl", "outputSrcDoc"]}}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "richMediaPanel"}
      imageUrl: {key: imageUrl, type: string, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: string, value: ""}
      media_interactive: {key: media_interactive, type: boolean, value: true}

    - id: {key: id, type: string, value: "w-img-character-robopig"}
      type: {key: type, type: string, value: "ImageGeneration"}
      label: {key: label, type: string, value: "Image Widget — Character (Robopig)"}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "imageGeneration"}
      model: {key: model, type: select, value: "{{demo_inputs.byteplus_image_model}}"}
      prompt: {key: prompt, type: textarea, value: "Barrel-chested Robopig: iron-plated snout gleaming, iron hoof, mechanical rake raised and humming, sand and embers, cracked earth, low-angle cinematic framing, sunset desert battlefield, ultra-detailed, 16:9."}
      size: {key: size, type: select, value: "2K"}
      output_format: {key: output_format, type: select, value: "jpeg"}
      response_format: {key: response_format, type: select, value: "b64_json"}
      optimize_prompt_options: {key: optimize_prompt_options, type: select, value: "fast"}
      aspect_ratio: {key: aspect_ratio, type: number, value: 0.0625}
      stream: {key: stream, type: boolean, value: true}
      watermark: {key: watermark, type: boolean, value: false}
      seed: {key: seed, type: number, value: 0}
      guidance_scale: {key: guidance_scale, type: number, value: 0}
      reference_image: {key: reference_image, type: string, value: ""}
      handles: {key: handles, type: object, value: {target: ["reference_image"], source: ["imageUrl"]}}
      phase: {key: phase, type: string, value: "generate"}
      actor: {key: actor, type: array, value: ["user", "AI"]}

    - id: {key: id, type: string, value: "p-img-character-robopig"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel — Image (Character: Robopig)"}
      phase: {key: phase, type: string, value: "render"}
      actor: {key: actor, type: array, value: ["system", "user"]}
      handles: {key: handles, type: object, value: {target: ["imageUrl", "outputSrcDoc"], source: ["imageUrl", "outputSrcDoc"]}}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "richMediaPanel"}
      imageUrl: {key: imageUrl, type: string, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: string, value: ""}
      media_interactive: {key: media_interactive, type: boolean, value: true}

    - id: {key: id, type: string, value: "w-img-location-desert"}
      type: {key: type, type: string, value: "ImageGeneration"}
      label: {key: label, type: string, value: "Image Widget — Location (Flaming Mountain desert)"}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "imageGeneration"}
      model: {key: model, type: select, value: "{{demo_inputs.byteplus_image_model}}"}
      prompt: {key: prompt, type: textarea, value: "Flaming Mountain desert battlefield at sunset: vast ancient dunes, dust-laden wind, ember flecks, heavy amber glow, cinematic scale, atmospheric haze, 16:9."}
      size: {key: size, type: select, value: "2K"}
      output_format: {key: output_format, type: select, value: "jpeg"}
      response_format: {key: response_format, type: select, value: "b64_json"}
      optimize_prompt_options: {key: optimize_prompt_options, type: select, value: "fast"}
      aspect_ratio: {key: aspect_ratio, type: number, value: 0.0625}
      stream: {key: stream, type: boolean, value: true}
      watermark: {key: watermark, type: boolean, value: false}
      seed: {key: seed, type: number, value: 0}
      guidance_scale: {key: guidance_scale, type: number, value: 0}
      reference_image: {key: reference_image, type: string, value: ""}
      handles: {key: handles, type: object, value: {target: ["reference_image"], source: ["imageUrl"]}}
      phase: {key: phase, type: string, value: "generate"}
      actor: {key: actor, type: array, value: ["user", "AI"]}

    - id: {key: id, type: string, value: "p-img-location-desert"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel — Image (Location: Flaming Mountain desert)"}
      phase: {key: phase, type: string, value: "render"}
      actor: {key: actor, type: array, value: ["system", "user"]}
      handles: {key: handles, type: object, value: {target: ["imageUrl", "outputSrcDoc"], source: ["imageUrl", "outputSrcDoc"]}}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "richMediaPanel"}
      imageUrl: {key: imageUrl, type: string, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: string, value: ""}
      media_interactive: {key: media_interactive, type: boolean, value: true}

    - id: {key: id, type: string, value: "w-img-scene-01"}
      type: {key: type, type: string, value: "ImageGeneration"}
      label: {key: label, type: string, value: "Image Widget — Scene S01 (Establishing wide)"}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "imageGeneration"}
      model: {key: model, type: select, value: "{{demo_inputs.byteplus_image_model}}"}
      prompt: {key: prompt, type: textarea, value: "S01 extreme wide establishing shot: vast ancient desert battlefield, massive ranks of celestial troops, ornate armor, cloud-tipped spears, silk banners in dust wind, sunset amber light, cinematic scale, 16:9."}
      size: {key: size, type: select, value: "2K"}
      output_format: {key: output_format, type: select, value: "jpeg"}
      response_format: {key: response_format, type: select, value: "b64_json"}
      optimize_prompt_options: {key: optimize_prompt_options, type: select, value: "fast"}
      aspect_ratio: {key: aspect_ratio, type: number, value: 0.0625}
      stream: {key: stream, type: boolean, value: true}
      watermark: {key: watermark, type: boolean, value: false}
      seed: {key: seed, type: number, value: 0}
      guidance_scale: {key: guidance_scale, type: number, value: 0}
      reference_image: {key: reference_image, type: string, value: ""}
      handles: {key: handles, type: object, value: {target: ["reference_image"], source: ["imageUrl"]}}
      phase: {key: phase, type: string, value: "generate"}
      actor: {key: actor, type: array, value: ["user", "AI"]}

    - id: {key: id, type: string, value: "p-img-scene-01"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel — Image (Scene S01)"}
      phase: {key: phase, type: string, value: "render"}
      actor: {key: actor, type: array, value: ["system", "user"]}
      handles: {key: handles, type: object, value: {target: ["imageUrl", "outputSrcDoc"], source: ["imageUrl", "outputSrcDoc"]}}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "richMediaPanel"}
      imageUrl: {key: imageUrl, type: string, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: string, value: ""}
      media_interactive: {key: media_interactive, type: boolean, value: true}

    - id: {key: id, type: string, value: "w-img-scene-02"}
      type: {key: type, type: string, value: "ImageGeneration"}
      label: {key: label, type: string, value: "Image Widget — Scene S02 (Medium Robomonkey)"}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "imageGeneration"}
      model: {key: model, type: select, value: "{{demo_inputs.byteplus_image_model}}"}
      prompt: {key: prompt, type: textarea, value: "S02 medium shot: Robomonkey stares ahead, golden headband catching last light, chrome-gold seal-script armor, dust haze, steam, sunset low-angle ambience, cinematic depth of field, 16:9."}
      size: {key: size, type: select, value: "2K"}
      output_format: {key: output_format, type: select, value: "jpeg"}
      response_format: {key: response_format, type: select, value: "b64_json"}
      optimize_prompt_options: {key: optimize_prompt_options, type: select, value: "fast"}
      aspect_ratio: {key: aspect_ratio, type: number, value: 0.0625}
      stream: {key: stream, type: boolean, value: true}
      watermark: {key: watermark, type: boolean, value: false}
      seed: {key: seed, type: number, value: 0}
      guidance_scale: {key: guidance_scale, type: number, value: 0}
      reference_image: {key: reference_image, type: string, value: ""}
      handles: {key: handles, type: object, value: {target: ["reference_image"], source: ["imageUrl"]}}
      phase: {key: phase, type: string, value: "generate"}
      actor: {key: actor, type: array, value: ["user", "AI"]}

    - id: {key: id, type: string, value: "p-img-scene-02"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel — Image (Scene S02)"}
      phase: {key: phase, type: string, value: "render"}
      actor: {key: actor, type: array, value: ["system", "user"]}
      handles: {key: handles, type: object, value: {target: ["imageUrl", "outputSrcDoc"], source: ["imageUrl", "outputSrcDoc"]}}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "richMediaPanel"}
      imageUrl: {key: imageUrl, type: string, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: string, value: ""}
      media_interactive: {key: media_interactive, type: boolean, value: true}

    - id: {key: id, type: string, value: "w-img-scene-03"}
      type: {key: type, type: string, value: "ImageGeneration"}
      label: {key: label, type: string, value: "Image Widget — Scene S03 (Low-angle Robopig)"}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "imageGeneration"}
      model: {key: model, type: select, value: "{{demo_inputs.byteplus_image_model}}"}
      prompt: {key: prompt, type: textarea, value: "S03 low-angle shot: Robopig's iron hoof strikes cracked earth, sand and embers erupt, ground trembles, mechanical rake humming, dramatic motion blur, sunset amber glow, 16:9."}
      size: {key: size, type: select, value: "2K"}
      output_format: {key: output_format, type: select, value: "jpeg"}
      response_format: {key: response_format, type: select, value: "b64_json"}
      optimize_prompt_options: {key: optimize_prompt_options, type: select, value: "fast"}
      aspect_ratio: {key: aspect_ratio, type: number, value: 0.0625}
      stream: {key: stream, type: boolean, value: true}
      watermark: {key: watermark, type: boolean, value: false}
      seed: {key: seed, type: number, value: 0}
      guidance_scale: {key: guidance_scale, type: number, value: 0}
      reference_image: {key: reference_image, type: string, value: ""}
      handles: {key: handles, type: object, value: {target: ["reference_image"], source: ["imageUrl"]}}
      phase: {key: phase, type: string, value: "generate"}
      actor: {key: actor, type: array, value: ["user", "AI"]}

    - id: {key: id, type: string, value: "p-img-scene-03"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel — Image (Scene S03)"}
      phase: {key: phase, type: string, value: "render"}
      actor: {key: actor, type: array, value: ["system", "user"]}
      handles: {key: handles, type: object, value: {target: ["imageUrl", "outputSrcDoc"], source: ["imageUrl", "outputSrcDoc"]}}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "richMediaPanel"}
      imageUrl: {key: imageUrl, type: string, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: string, value: ""}
      media_interactive: {key: media_interactive, type: boolean, value: true}

    - id: {key: id, type: string, value: "w-img-scene-04"}
      type: {key: type, type: string, value: "ImageGeneration"}
      label: {key: label, type: string, value: "Image Widget — Scene S04 (Aerial wide)"}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "imageGeneration"}
      model: {key: model, type: select, value: "{{demo_inputs.byteplus_image_model}}"}
      prompt: {key: prompt, type: textarea, value: "S04 high aerial wide: full celestial army stretches across Flaming Mountain desert, vast and overwhelming, banners and spears like a sea, dust storm haze, sun low on horizon, awe-inspiring scale, 16:9."}
      size: {key: size, type: select, value: "2K"}
      output_format: {key: output_format, type: select, value: "jpeg"}
      response_format: {key: response_format, type: select, value: "b64_json"}
      optimize_prompt_options: {key: optimize_prompt_options, type: select, value: "fast"}
      aspect_ratio: {key: aspect_ratio, type: number, value: 0.0625}
      stream: {key: stream, type: boolean, value: true}
      watermark: {key: watermark, type: boolean, value: false}
      seed: {key: seed, type: number, value: 0}
      guidance_scale: {key: guidance_scale, type: number, value: 0}
      reference_image: {key: reference_image, type: string, value: ""}
      handles: {key: handles, type: object, value: {target: ["reference_image"], source: ["imageUrl"]}}
      phase: {key: phase, type: string, value: "generate"}
      actor: {key: actor, type: array, value: ["user", "AI"]}

    - id: {key: id, type: string, value: "p-img-scene-04"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel — Image (Scene S04)"}
      phase: {key: phase, type: string, value: "render"}
      actor: {key: actor, type: array, value: ["system", "user"]}
      handles: {key: handles, type: object, value: {target: ["imageUrl", "outputSrcDoc"], source: ["imageUrl", "outputSrcDoc"]}}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "richMediaPanel"}
      imageUrl: {key: imageUrl, type: string, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: string, value: ""}
      media_interactive: {key: media_interactive, type: boolean, value: true}

    - id: {key: id, type: string, value: "w-video-scene"}
      type: {key: type, type: string, value: "VideoGeneration"}
      label: {key: label, type: string, value: "Video Widget — Scene Cut (12s)"}
      phase: {key: phase, type: string, value: "generate"}
      actor: {key: actor, type: array, value: ["user", "AI"]}
      handles: {key: handles, type: object, value: {target: ["reference_image"], source: ["videoUrl"]}}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "videoGeneration"}
      model: {key: model, type: select, value: "{{demo_inputs.byteplus_video_model}}"}
      prompt: {key: prompt, type: string, value: "{{demo_inputs.vibe}}, {{demo_inputs.duration_label}}; {{demo_inputs.location.name}}; {{demo_inputs.theme}}. Script: {{demo_inputs.script}}"}
      ratio: {key: ratio, type: select, value: "16:9"}
      resolution: {key: resolution, type: select, value: "480p"}
      duration: {key: duration, type: number, value: "{{demo_inputs.duration_seconds}}"}
      generate_audio: {key: generate_audio, type: boolean, value: false}
      draft: {key: draft, type: boolean, value: true}
      camera_fixed: {key: camera_fixed, type: boolean, value: false}
      image_url_url: {key: image_url_url, type: select, value: "base64"}
      reference_image: {key: reference_image, type: string, value: ""}

    - id: {key: id, type: string, value: "p-video-scene"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel — Video (Scene)"}
      phase: {key: phase, type: string, value: "render"}
      actor: {key: actor, type: array, value: ["system", "user"]}
      handles: {key: handles, type: object, value: {target: ["videoUrl", "outputSrcDoc"], source: ["videoUrl", "outputSrcDoc"]}}
      "flow:widgetFormId": {key: flow:widgetFormId, type: string, value: "richMediaPanel"}
      videoUrl: {key: videoUrl, type: string, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: string, value: ""}
      media_interactive: {key: media_interactive, type: boolean, value: true}

  edges:
    - {id: e-text-script, source: w-text-script, sourceHandle: text_out, target: p-text-script, targetHandle: output, label: "text_out → output", animated: true}
    - {id: e-text-script-srcdoc, source: w-text-script, sourceHandle: outputSrcDoc, target: p-text-script, targetHandle: outputSrcDoc, label: "outputSrcDoc → outputSrcDoc", animated: true}

    - {id: e-character-celestial, source: w-img-character-celestial, sourceHandle: imageUrl, target: p-img-character-celestial, targetHandle: imageUrl, label: "imageUrl → imageUrl", animated: true}
    - {id: e-character-robomonkey, source: w-img-character-robomonkey, sourceHandle: imageUrl, target: p-img-character-robomonkey, targetHandle: imageUrl, label: "imageUrl → imageUrl", animated: true}
    - {id: e-character-robopig, source: w-img-character-robopig, sourceHandle: imageUrl, target: p-img-character-robopig, targetHandle: imageUrl, label: "imageUrl → imageUrl", animated: true}
    - {id: e-location-desert, source: w-img-location-desert, sourceHandle: imageUrl, target: p-img-location-desert, targetHandle: imageUrl, label: "imageUrl → imageUrl", animated: true}

    - {id: e-scene-01, source: w-img-scene-01, sourceHandle: imageUrl, target: p-img-scene-01, targetHandle: imageUrl, label: "imageUrl → imageUrl", animated: true}
    - {id: e-scene-02, source: w-img-scene-02, sourceHandle: imageUrl, target: p-img-scene-02, targetHandle: imageUrl, label: "imageUrl → imageUrl", animated: true}
    - {id: e-scene-03, source: w-img-scene-03, sourceHandle: imageUrl, target: p-img-scene-03, targetHandle: imageUrl, label: "imageUrl → imageUrl", animated: true}
    - {id: e-scene-04, source: w-img-scene-04, sourceHandle: imageUrl, target: p-img-scene-04, targetHandle: imageUrl, label: "imageUrl → imageUrl", animated: true}

    - {id: e-scene01-to-video-ref, source: w-img-scene-01, sourceHandle: imageUrl, target: w-video-scene, targetHandle: reference_image, label: "imageUrl → reference_image", animated: true}
    - {id: e-video, source: w-video-scene, sourceHandle: videoUrl, target: p-video-scene, targetHandle: videoUrl, label: "videoUrl → videoUrl", animated: true}

    - {id: e-rel-celestial-s01, source: p-img-character-celestial, sourceHandle: outputSrcDoc, target: p-img-scene-01, targetHandle: outputSrcDoc, label: "character → scene", animated: false}
    - {id: e-rel-celestial-s02, source: p-img-character-celestial, sourceHandle: outputSrcDoc, target: p-img-scene-02, targetHandle: outputSrcDoc, label: "character → scene", animated: false}
    - {id: e-rel-celestial-s03, source: p-img-character-celestial, sourceHandle: outputSrcDoc, target: p-img-scene-03, targetHandle: outputSrcDoc, label: "character → scene", animated: false}
    - {id: e-rel-celestial-s04, source: p-img-character-celestial, sourceHandle: outputSrcDoc, target: p-img-scene-04, targetHandle: outputSrcDoc, label: "character → scene", animated: false}

    - {id: e-rel-robomonkey-s01, source: p-img-character-robomonkey, sourceHandle: outputSrcDoc, target: p-img-scene-01, targetHandle: outputSrcDoc, label: "character → scene", animated: false}
    - {id: e-rel-robomonkey-s02, source: p-img-character-robomonkey, sourceHandle: outputSrcDoc, target: p-img-scene-02, targetHandle: outputSrcDoc, label: "character → scene", animated: false}
    - {id: e-rel-robomonkey-s03, source: p-img-character-robomonkey, sourceHandle: outputSrcDoc, target: p-img-scene-03, targetHandle: outputSrcDoc, label: "character → scene", animated: false}
    - {id: e-rel-robomonkey-s04, source: p-img-character-robomonkey, sourceHandle: outputSrcDoc, target: p-img-scene-04, targetHandle: outputSrcDoc, label: "character → scene", animated: false}

    - {id: e-rel-robopig-s01, source: p-img-character-robopig, sourceHandle: outputSrcDoc, target: p-img-scene-01, targetHandle: outputSrcDoc, label: "character → scene", animated: false}
    - {id: e-rel-robopig-s02, source: p-img-character-robopig, sourceHandle: outputSrcDoc, target: p-img-scene-02, targetHandle: outputSrcDoc, label: "character → scene", animated: false}
    - {id: e-rel-robopig-s03, source: p-img-character-robopig, sourceHandle: outputSrcDoc, target: p-img-scene-03, targetHandle: outputSrcDoc, label: "character → scene", animated: false}
    - {id: e-rel-robopig-s04, source: p-img-character-robopig, sourceHandle: outputSrcDoc, target: p-img-scene-04, targetHandle: outputSrcDoc, label: "character → scene", animated: false}

    - {id: e-rel-location-s01, source: p-img-location-desert, sourceHandle: outputSrcDoc, target: p-img-scene-01, targetHandle: outputSrcDoc, label: "location → scene", animated: false}
    - {id: e-rel-location-s02, source: p-img-location-desert, sourceHandle: outputSrcDoc, target: p-img-scene-02, targetHandle: outputSrcDoc, label: "location → scene", animated: false}
    - {id: e-rel-location-s03, source: p-img-location-desert, sourceHandle: outputSrcDoc, target: p-img-scene-03, targetHandle: outputSrcDoc, label: "location → scene", animated: false}
    - {id: e-rel-location-s04, source: p-img-location-desert, sourceHandle: outputSrcDoc, target: p-img-scene-04, targetHandle: outputSrcDoc, label: "location → scene", animated: false}

    - {id: e-rel-s01-video, source: p-img-scene-01, sourceHandle: outputSrcDoc, target: p-video-scene, targetHandle: outputSrcDoc, label: "scene → video", animated: false}
    - {id: e-rel-s02-video, source: p-img-scene-02, sourceHandle: outputSrcDoc, target: p-video-scene, targetHandle: outputSrcDoc, label: "scene → video", animated: false}
    - {id: e-rel-s03-video, source: p-img-scene-03, sourceHandle: outputSrcDoc, target: p-video-scene, targetHandle: outputSrcDoc, label: "scene → video", animated: false}
    - {id: e-rel-s04-video, source: p-img-scene-04, sourceHandle: outputSrcDoc, target: p-video-scene, targetHandle: outputSrcDoc, label: "scene → video", animated: false}
---

# Knowgrph · 12s Mini-Drama Rich Media Generation

## Chat Response

`bg#E1F5EE:version 0.3.0` · `bg#FAEEDA:status validation-demo` · owner `platform-ai` · 2026-04-27

> **This document is the pipeline.** YAML frontmatter is the machine-readable SSOT for the widget → generate → Rich Media Panel output loop. The body below is the human-readable projection of the same pipeline.

---

## Demo Inputs

Edit these frontmatter values to steer the video demo from root source:

- `demo_inputs.vibe`: `{{demo_inputs.vibe}}`
- `demo_inputs.byteplus_text_model`: `{{demo_inputs.byteplus_text_model}}`
- `demo_inputs.byteplus_image_model`: `{{demo_inputs.byteplus_image_model}}`
- `demo_inputs.byteplus_video_model`: `{{demo_inputs.byteplus_video_model}}`
- `demo_inputs.duration_label`: `{{demo_inputs.duration_label}}`
- `demo_inputs.location.name`: `{{demo_inputs.location.name}}`
- `demo_inputs.theme`: `{{demo_inputs.theme}}`
- `demo_inputs.script`: 12s script text (see below)

Prompt contract:

```text
{{demo_inputs.vibe}}, {{demo_inputs.duration_label}}; {{demo_inputs.location.name}}; {{demo_inputs.theme}}. Script: {{demo_inputs.script}}
```

---

## Mini-Drama Script (12s)

```text
{{demo_inputs.script}}
```

---

## Computing Flow Definition

> **Machine source:** YAML frontmatter above the `---` delimiter — self-runnable, graph-complete, no external config required. · [↓ Flow Graph](#flow-graph) · [↓ Pipeline](#pipeline) · [↓ PRD](#prd--product-requirements) · [↓ TAD](#tad--technical-architecture)

This pipeline uses one Text widget to structure the mini-drama, then generates character/location/scene images and finally a 12s video, rendering everything via Rich Media Panels without churn or duplicate surfaces.

---

## Flow Graph

[↑ Computing Flow Definition](#computing-flow-definition)

```mermaid
{{mermaid}}
```

---

## Pipeline

[↑ Computing Flow Definition](#computing-flow-definition)

| seq | `@node:id` | pipeline step | `bg#E1F5EE:UF` user action | `bg#E6F1FB:WF` system event | `bg#EAF3DE:DF` data in | `bg#EAF3DE:DF` data out | edge | actor | trigger | on fail | kanban | confidence |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `W01` | `@node:w-text-script` | `bg#E1F5EE:text widget` | Run with 12s script | TextGeneration returns structured prompts for characters/location/scenes/video | `properties.prompt` | `properties.output` + `properties.outputSrcDoc` | `@edge:w-text-script:text_out→p-text-script:output` | `["user","AI"]` | run | output unchanged | TBD | high |
| `W02` | `@node:w-img-character-robomonkey` | `bg#E1F5EE:image widget` | Run character prompts | ImageGeneration writes character `imageUrl` | `properties.prompt` + `properties.model` | `properties.imageUrl` | `@edge:w-img-character-robomonkey:imageUrl→p-img-character-robomonkey:imageUrl` | `["user","AI"]` | run | image unchanged | TBD | high |
| `W03` | `@node:w-img-location-desert` | `bg#E1F5EE:image widget` | Run location prompt | ImageGeneration writes location `imageUrl` | `properties.prompt` + `properties.model` | `properties.imageUrl` | `@edge:w-img-location-desert:imageUrl→p-img-location-desert:imageUrl` | `["user","AI"]` | run | image unchanged | TBD | high |
| `W04` | `@node:w-img-scene-01` | `bg#E1F5EE:image widget` | Run scene prompts | ImageGeneration writes scene `imageUrl` | `properties.prompt` + `properties.model` | `properties.imageUrl` | `@edge:w-img-scene-01:imageUrl→p-img-scene-01:imageUrl` | `["user","AI"]` | run | image unchanged | TBD | high |
| `W05` | `@node:w-video-scene` | `bg#E1F5EE:video widget` | Run after S01 image exists | VideoGeneration reads `reference_image` and writes `videoUrl` | `properties.prompt` + `properties.model` + `properties.duration` + `properties.reference_image` | `properties.videoUrl` | `@edge:w-video-scene:videoUrl→p-video-scene:videoUrl` | `["user","AI"]` | run | video unchanged | TBD | high |

---

## PRD — Product Requirements

### Problem

Mini-drama text/image/video generation pipelines can produce duplicate or stale variants when media URLs are proxied, when the Rich Media Panels are filtered out before connected values are applied, or when multiple surfaces render both source-widget media and panel-rendered media.

### Goals

| id | Goal | maps to | Priority | Status |
|---|---|---|---|---|
| `G-01` | One output surface per generated asset (no duplicate cards) | `@node:p-text-script` · `@node:p-img-*` · `@node:p-video-scene` | `#D85A30:P0` | TBD |
| `G-02` | Canonicalize proxied media URLs before dedupe or persistence | `@node:p-img-*` · `@node:p-video-scene` | `#D85A30:P0` | TBD |
| `G-03` | Rich Media Panels remain visible even when media props arrive via edges | `@node:p-img-*` · `@node:p-video-scene` | `#D85A30:P0` | TBD |
| `G-04` | Text output is editable in-panel without regenerating upstream | `@node:p-text-script` | `#185FA5\|bg#E6F1FB:P1` | TBD |
| `G-05` | Happy-path is idempotent under re-renders and reloads | `@node:w-text-script` · `@node:w-img-*` · `@node:w-video-scene` · `@node:p-*` | `#185FA5\|bg#E6F1FB:P1` | TBD |

### Non-Goals

Backward-compat remapping of legacy widget outputs, downstream callsite patches, and per-surface ad-hoc dedupe rules are explicitly out of scope.

### Acceptance Criteria (E2E)

| id | Scenario | Expected result |
|---|---|---|
| `AC-01` | Text Widget → Rich Media Panel | Panel shows text; user can edit; no duplicate text cards |
| `AC-02` | Image Widget → Rich Media Panel | Panel renders image; proxied URL and direct URL dedupe to one |
| `AC-03` | Video Widget → Rich Media Panel | Panel renders inline video; video persists and rehydrates by canonical key |

---

## TAD — Technical Architecture

### Widget Output SSOT

The render drivers for Rich Media Panel are the widget output properties routed through Flow edges.

### Scene Linking SSOT

Scene linkage stays graph-native (Flow edges), not a downstream renderer patch: character/location panels connect to scene panels, and scene panels connect to the final video panel.

| Driver | Source widget port | RichMediaPanel target port | Stored on `properties.*` |
|---|---|---|---|
| Text | `text_out` | `output` | `output` (+ `outputSrcDoc` for iframe-friendly rendering) |
| Image | `imageUrl` | `imageUrl` | `imageUrl` |
| Video | `videoUrl` | `videoUrl` | `videoUrl` |

### Render Invariants

| Rule | Check | Pass condition |
|---|---|---|
| `RM-01` | panel always present | `RichMediaPanel` remains in display graph even if props are edge-fed |
| `RM-02` | canonical dedupe | proxy URLs are unwrapped before dedupe and overlay selection |
| `RM-03` | render ordering | apply connected values → clear stale keys → resolve render path |

### Canonical URL Rule

`canonicalMediaDedupUrl(url)` MUST unwrap `'/__fetch_remote?url=...'` (including when the proxy itself is absolute) and return the underlying source URL for identity and persistence. Proxy URLs are display transport, never SSOT.

### Display Filter Rule (Rich Media Panel survival)

Scene/display filtering MUST not remove Rich Media Panel nodes before connected values are applied. The panel must remain in the display graph even when it has no local media props, because upstream widgets may provide media payloads via edges.

### Dedupe Rule (single surface)

Preview/gallery surfaces must reuse the same pipeline ordering as the canvas renderer: compute connected widget values, apply them to render nodes, then run canonical media dedupe. This ensures the Rich Media Panel is the single renderer of widget outputs and prevents stale source-widget media cards.

---

## FloatingPanel Widget → Panel Mapping

| FloatingPanel Widget | `media_kind` | Provider routing | Rich Media Panel behavior |
|---|---|---|---|
| FloatingPanel Text Widget | `text` | `provider=byteplus-modelark` | renders editable text |
| FloatingPanel Image Widget | `image` | `provider=byteplus-modelark` | renders image; dedupe by canonical URL |
| FloatingPanel Video Widget | `video` | `provider=byteplus-modelark` | renders inline video; persists canonical media key |
