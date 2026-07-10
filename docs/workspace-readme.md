---
title: "Knowgrph Workspace README"
graphId: "md:workspace-readme"
doc_type: "Workspace README"
date: "2026-07-09"
lang: "en-US"
schema: "kgc-workspace-readme/v1"
source_reference: "docs/knowgrph-strybldr-starter-template.md"
implementation_contract: "../../knowgrph/docs/documents/knowgrph-strybldr-prd-tad.md"
validation_input_forbid_hardcode_in_repo: "true"
deployed_api_claim: "false"
publish_scope: "local-only"
publish_policy: "No Prod mirror, Cloudflare deploy, public release, fabricated provider IDs, generated asset URLs, transcript text, or credential material from this README."
workspace_topology:
  dev: "/Users/huijoohwee/Documents/GitHub/knowgrph"
  prod_mirror: "/Users/huijoohwee/Documents/GitHub/huijoohwee/content/knowgrph"
  cloudflare_routes: ["https://airvio.co", "https://airvio.co/knowgrph"]
  release_order: "Dev -> Prod -> Cloudflare"
  release_gate: "Prod and Cloudflare are blocked until the operator explicitly instructs that release lane."
docs_control_surface:
  operator_declared_path: "/Users/huijoohwee/Documents/GitHub/huijoohwee/agentic-os-docs"
  verified_path_status: "missing in this workspace on 2026-07-09"
  verified_fallback_path: "/Users/huijoohwee/Documents/GitHub/agentic-canvas-os"
  policy: "Use the verified docs-control surface only after local path verification; do not remap a missing path silently."
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "storyboard"
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
  storyboardDisplay: "2D Renderer: Storyboard Card (default) and Widget variants"
  storyboardSurfaces: ["Cards", "Widgets", "Rich Media Panels"]
  edgeModel: "active graph edges derive from frontmatter-owned flow.edges"
  rendererPolicy: "frontmatter and source payloads own data; renderers project view state only"
runtime_defaults:
  provider: "knowgrph-local-dry-run"
  status: "spec-complete"
  paid_call_count: 0
  runtime_proof_path: ""
  provider_job_id: ""
  stream_url: ""
  generated_asset_url: ""
agentic_os_invocation_grammar:
  slash:
    - "/source.normalize"
    - "/memory.seed"
    - "/harness.define"
    - "/mcp.capabilities"
    - "/cost.audit"
    - "/superagent.run"
    - "/tool.route"
    - "/canvas.project"
    - "/runtime-ready.check"
    - "/validation.run"
    - "/deploy.guard"
  semantic:
    - "#frontmatter"
    - "#harness"
    - "#token-economics"
    - "#tool-gateway"
    - "#tool-routing"
    - "#long-horizon-harness"
    - "#runtime-ready"
    - "#canvas"
    - "#human-in-loop"
    - "#approval-gate"
    - "#dev-only"
    - "#no-hardcode"
    - "#no-legacy"
  binding:
    - "@source.frontmatter"
    - "@source.body"
    - "@operator"
    - "@local-harness"
    - "@runtime-proof"
    - "@cost-log"
    - "@mcp-gateway"
    - "@tool-provider"
    - "@tool-policy"
    - "@orchestration-graph"
    - "@sandbox-workspace"
    - "@message-gateway"
    - "@human-review"
    - "@canvas"
    - "@approval-gate"
    - "@dev-only"
runtime_pipeline:
  version: "workspace-runtime-pipeline/v1"
  status: "spec-complete"
  source_docs:
    - "docs/knowgrph-strybldr-starter-template.md"
    - "../../knowgrph/README.md"
    - "../../knowgrph/canvas/src/features/chat/chatStoryboardTemplateContract.ts"
    - "../../knowgrph/canvas/src/features/chat/chatStoryboardTemplateProjection.ts"
    - "../../knowgrph/docs/documents/knowgrph-strybldr-prd-tad.md"
  gates:
    hardcode: "Reject repo-stored generated outputs, provider IDs, credentials, stream URLs, and source-specific fixtures."
    cost: "Run /cost.audit before live provider or repeated generation work."
    recompute: "Reuse frontmatter, summaries, manifests, and timeline data before new model or media calls."
    prod_mirror: "Blocked by /deploy.guard and @dev-only until operator instruction."
    cloudflare: "Blocked by /deploy.guard and @dev-only until operator instruction."
  stages:
    - id: "source"
      lane: "Source"
      command: "/source.normalize"
      bindings: ["@source.frontmatter", "@source.body", "@operator"]
      semantics: ["#frontmatter", "#no-hardcode"]
      output: "operator-owned source brief and validation boundary"
      paid_call_count: 0
    - id: "scriptwriting"
      lane: "Scriptwriting"
      command: "/memory.seed"
      bindings: ["@source.frontmatter", "@source.body", "@cost-log"]
      semantics: ["#frontmatter", "#token-economics"]
      output: "source-backed premise, logline, scene outline, and script beats"
      paid_call_count: 0
    - id: "storyboard"
      lane: "Storyboard"
      command: "/canvas.project"
      bindings: ["@canvas", "@runtime-proof"]
      semantics: ["#canvas", "#runtime-ready"]
      output: "frontmatter-owned Storyboard cards and visible flow edges"
      paid_call_count: 0
    - id: "orchestration"
      lane: "Invocation"
      command: "/superagent.run"
      bindings: ["@local-harness", "@orchestration-graph", "@message-gateway", "@cost-log"]
      semantics: ["#harness", "#long-horizon-harness", "#approval-gate"]
      output: "bounded agent plan, tool routes, approvals, and stop conditions"
      paid_call_count: 0
    - id: "generation"
      lane: "Generation"
      command: "/tool.route"
      bindings: ["@tool-provider", "@tool-policy", "@approval-gate", "@runtime-proof"]
      semantics: ["#tool-gateway", "#tool-routing", "#token-economics"]
      output: "local dry-run packet by default; live provider evidence only after approval"
      paid_call_count: 0
    - id: "editing"
      lane: "Editing"
      command: "/runtime-ready.check"
      bindings: ["@runtime-proof", "@cost-log", "@human-review"]
      semantics: ["#runtime-ready", "#human-in-loop", "#token-economics"]
      output: "edit decision list, timeline proof, and review packet without redundant generation"
      paid_call_count: 0
    - id: "validation"
      lane: "Validation"
      command: "/validation.run"
      bindings: ["@runtime-proof", "@dev-only"]
      semantics: ["#runtime-ready", "#dev-only"]
      output: "focused local proof and explicit remaining gates"
      paid_call_count: 0
    - id: "deploy_guard"
      lane: "Publish"
      command: "/deploy.guard"
      bindings: ["@operator", "@dev-only"]
      semantics: ["#approval-gate", "#dev-only"]
      output: "local-only boundary unless Dev -> Prod -> Cloudflare is explicitly opened"
      paid_call_count: 0
---

# Knowgrph Workspace README

## Flow Snapshot

```yaml
flow:
  direction: {key: direction, type: string, value: "LR"}
  edgeType: {key: edgeType, type: string, value: "smoothstep"}
  balancedViewportPreset: {key: balancedViewportPreset, type: string, value: "widgetFrontmatter"}
  computed: {key: computed, type: boolean, value: true}
  snapToGrid: {key: snapToGrid, type: boolean, value: true}
  nodes:
    - id: {key: id, type: string, value: "workspace-source"}
      type: {key: type, type: string, value: "WorkspaceSourceWidget"}
      label: {key: label, type: string, value: "Source"}
      position: {key: position, type: object, value: {"x":330.61790341314304,"y":-2110.702924375296}}
      handles: {key: handles, type: object, value: {"source":["workspace_signal_out"]}}
      command: {key: command, type: string, value: "/source.normalize"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{},"out":{"workspace_signal_out":"workspace_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:workspace-source"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 3}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 2}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      lane: {key: lane, type: string, value: "Source"}
      summary:
        key: summary
        type: string
        value: |
          I and
          ![buddydrone.jpg](http://localhost:5181/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNTk3NDg4Njk2fQ) can ... #storyboard .. /soul.load #runtime, is it better in #storyboard

      "visual:height": {key: "visual:height", type: number, value: 758}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:width": {key: "visual:width", type: number, value: 948}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "workspace-runtime"}
      type: {key: type, type: string, value: "RuntimeGateWidget"}
      label: {key: label, type: string, value: "Runtime Gate"}
      position: {key: position, type: object, value: {"x":747.9595539194524,"y":-2326.2956936664214}}
      handles: {key: handles, type: object, value: {"target":["workspace_signal_in"],"source":["workspace_signal_out"]}}
      command: {key: command, type: string, value: "/runtime-ready.check"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"workspace_signal_in":"workspace_signal"},"out":{"workspace_signal_out":"workspace_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:workspace-runtime"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 3}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 2}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      image: {key: image, type: string, value: "http://localhost:5177/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNjg1NTE3NTM0fQ"}
      lane: {key: lane, type: string, value: "Validation"}
      media: {key: media, type: string, value: "http://localhost:5177/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNjg1NTE3NTM0fQ"}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: "http://localhost:5177/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNjg1NTE3NTM0fQ"}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaUrl: {key: mediaUrl, type: string, value: "http://localhost:5177/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNjg1NTE3NTM0fQ"}
      summary:
        key: summary
        type: string
        value: |
          I, 567

          ![buddydrone.jpg](http://localhost:5177/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNjg1NTE3NTM0fQ)

          , 123

          ![1920s_Singapore_Malaya_202606190937.jpeg](http://localhost:5177/api/storage/media/airvio/runs/upload-170a76238422bb27/image/1920s_singapore_malaya_202606190937-170a76238422bb27.jpeg?kg_media_token=eyJydW5JZCI6InVwbG9hZC0xNzBhNzYyMzg0MjJiYjI3IiwiZXhwaXJlc0F0IjoxNzgzNjQ1OTkzNzQ5fQ)

          589 and ![buddydrone.jpg](http://localhost:5181/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNTk5Nzk1Njc4fQ) can 123 see that #storyboard is as #source interesting as /cost.audit

      thumbnailUrl: {key: thumbnailUrl, type: string, value: "http://localhost:5177/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNjg1NTE3NTM0fQ"}
      "visual:height": {key: "visual:height", type: number, value: 356}
      "visual:importance": {key: "visual:importance", type: number, value: 20}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15.65685424949238}
      "visual:width": {key: "visual:width", type: number, value: 701}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "workspace-publish"}
      type: {key: type, type: string, value: "DeployGuardWidget"}
      label: {key: label, type: string, value: "Publish Guard"}
      position: {key: position, type: object, value: {"x":1229.148140328956,"y":-1622.2397972973777}}
      handles: {key: handles, type: object, value: {"target":["workspace_signal_in"]}}
      command: {key: command, type: string, value: "/deploy.guard"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"workspace_signal_in":"workspace_signal"},"out":{}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:workspace-publish"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 3}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 3}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      lane: {key: lane, type: string, value: "Publish"}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "n1"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel"}
      position: {key: position, type: object, value: {"x":866.3358136058862,"y":-424.6050687830433}}
      audioUrl: {key: audioUrl, type: text, value: ""}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 0}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      image: {key: image, type: string, value: "http://localhost:5179/api/storage/media/airvio/runs/upload-170a76238422bb27/image/1920s_singapore_malaya_202606190937-170a76238422bb27.jpeg?kg_media_token=eyJydW5JZCI6InVwbG9hZC0xNzBhNzYyMzg0MjJiYjI3IiwiZXhwaXJlc0F0IjoxNzgzNTgwOTE3ODIzfQ"}
      imageUrl: {key: imageUrl, type: text, value: "http://localhost:5179/api/storage/media/airvio/runs/upload-170a76238422bb27/image/1920s_singapore_malaya_202606190937-170a76238422bb27.jpeg?kg_media_token=eyJydW5JZCI6InVwbG9hZC0xNzBhNzYyMzg0MjJiYjI3IiwiZXhwaXJlc0F0IjoxNzgzNTgwOTE3ODIzfQ"}
      media: {key: media, type: string, value: "http://localhost:5179/api/storage/media/airvio/runs/upload-170a76238422bb27/image/1920s_singapore_malaya_202606190937-170a76238422bb27.jpeg?kg_media_token=eyJydW5JZCI6InVwbG9hZC0xNzBhNzYyMzg0MjJiYjI3IiwiZXhwaXJlc0F0IjoxNzgzNTgwOTE3ODIzfQ"}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: "http://localhost:5179/api/storage/media/airvio/runs/upload-170a76238422bb27/image/1920s_singapore_malaya_202606190937-170a76238422bb27.jpeg?kg_media_token=eyJydW5JZCI6InVwbG9hZC0xNzBhNzYyMzg0MjJiYjI3IiwiZXhwaXJlc0F0IjoxNzgzNTgwOTE3ODIzfQ"}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "sha256:170a76238422bb27f5919405cee76d55a665fdb44e0933684872ca745bafbb93"}
      mediaUrl: {key: mediaUrl, type: string, value: "http://localhost:5179/api/storage/media/airvio/runs/upload-170a76238422bb27/image/1920s_singapore_malaya_202606190937-170a76238422bb27.jpeg?kg_media_token=eyJydW5JZCI6InVwbG9hZC0xNzBhNzYyMzg0MjJiYjI3IiwiZXhwaXJlc0F0IjoxNzgzNTgwOTE3ODIzfQ"}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      videoUrl: {key: videoUrl, type: text, value: ""}
      "visual:height": {key: "visual:height", type: number, value: 769}
      "visual:width": {key: "visual:width", type: number, value: 1367}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -2}
    - id: {key: id, type: string, value: "n2"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel"}
      position: {key: position, type: object, value: {"x":-4229.503638908473,"y":-6655.717515345438}}
      audioUrl: {key: audioUrl, type: text, value: ""}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      imageUrl: {key: imageUrl, type: text, value: ""}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      videoUrl: {key: videoUrl, type: text, value: ""}
      "visual:height": {key: "visual:height", type: number, value: 1419}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:width": {key: "visual:width", type: number, value: 2524}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -3}
    - id: {key: id, type: string, value: "n4"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel"}
      position: {key: position, type: object, value: {"x":-2502.2074074699353,"y":-3357.5142447921644}}
      audioUrl: {key: audioUrl, type: text, value: ""}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      imageUrl: {key: imageUrl, type: text, value: ""}
      media: {key: media, type: string, value: "http://localhost:5179/api/storage/media/airvio/runs/upload-0cd83d944a6ca782/video/flower-0cd83d944a6ca782.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC0wY2Q4M2Q5NDRhNmNhNzgyIiwiZXhwaXJlc0F0IjoxNzgzNTgzNzg2ODAzfQ"}
      media_interactive: {key: media_interactive, type: boolean, value: true}
      media_kind: {key: media_kind, type: string, value: "video"}
      media_url: {key: media_url, type: string, value: "http://localhost:5179/api/storage/media/airvio/runs/upload-0cd83d944a6ca782/video/flower-0cd83d944a6ca782.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC0wY2Q4M2Q5NDRhNmNhNzgyIiwiZXhwaXJlc0F0IjoxNzgzNTgzNzg2ODAzfQ"}
      mediaKind: {key: mediaKind, type: string, value: "video"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "sha256:0cd83d944a6ca7822b4a8306cecc60a36e859b041f6702c6a1ad9ead78924451"}
      mediaUrl: {key: mediaUrl, type: string, value: "http://localhost:5179/api/storage/media/airvio/runs/upload-0cd83d944a6ca782/video/flower-0cd83d944a6ca782.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC0wY2Q4M2Q5NDRhNmNhNzgyIiwiZXhwaXJlc0F0IjoxNzgzNTgzNzg2ODAzfQ"}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "video"}
      video: {key: video, type: string, value: "http://localhost:5179/api/storage/media/airvio/runs/upload-0cd83d944a6ca782/video/flower-0cd83d944a6ca782.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC0wY2Q4M2Q5NDRhNmNhNzgyIiwiZXhwaXJlc0F0IjoxNzgzNTgzNzg2ODAzfQ"}
      videoUrl: {key: videoUrl, type: text, value: "http://localhost:5179/api/storage/media/airvio/runs/upload-0cd83d944a6ca782/video/flower-0cd83d944a6ca782.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC0wY2Q4M2Q5NDRhNmNhNzgyIiwiZXhwaXJlc0F0IjoxNzgzNTgzNzg2ODAzfQ"}
      "visual:height": {key: "visual:height", type: number, value: 516}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:width": {key: "visual:width", type: number, value: 917}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -4}
    - id: {key: id, type: string, value: "n5"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel"}
      position: {key: position, type: object, value: {"x":-896.9368391127987,"y":-900.5706738679983}}
      audioUrl: {key: audioUrl, type: text, value: ""}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 0}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      imageUrl: {key: imageUrl, type: text, value: ""}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      videoUrl: {key: videoUrl, type: text, value: ""}
      "visual:height": {key: "visual:height", type: number, value: 722}
      "visual:width": {key: "visual:width", type: number, value: 1280}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -3}
    - id: {key: id, type: string, value: "n6"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel"}
      position: {key: position, type: object, value: {"x":12.515745883503975,"y":-764.7077700993786}}
      audioUrl: {key: audioUrl, type: text, value: ""}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 0}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      imageUrl: {key: imageUrl, type: text, value: ""}
      media: {key: media, type: string, value: "http://localhost:5179/api/storage/media/airvio/runs/upload-bb371a0f5fbda012/video/video-bb371a0f5fbda012.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC1iYjM3MWEwZjVmYmRhMDEyIiwiZXhwaXJlc0F0IjoxNzgzNTgzNzg2ODAzfQ"}
      media_interactive: {key: media_interactive, type: boolean, value: true}
      media_kind: {key: media_kind, type: string, value: "video"}
      media_url: {key: media_url, type: string, value: "http://localhost:5179/api/storage/media/airvio/runs/upload-bb371a0f5fbda012/video/video-bb371a0f5fbda012.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC1iYjM3MWEwZjVmYmRhMDEyIiwiZXhwaXJlc0F0IjoxNzgzNTgzNzg2ODAzfQ"}
      mediaKind: {key: mediaKind, type: string, value: "video"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "sha256:bb371a0f5fbda012cd58566d44e081e5a7aafd3803e9c35c6ec5678f2e5f19c6"}
      mediaUrl: {key: mediaUrl, type: string, value: "http://localhost:5179/api/storage/media/airvio/runs/upload-bb371a0f5fbda012/video/video-bb371a0f5fbda012.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC1iYjM3MWEwZjVmYmRhMDEyIiwiZXhwaXJlc0F0IjoxNzgzNTgzNzg2ODAzfQ"}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "video"}
      video: {key: video, type: string, value: "http://localhost:5179/api/storage/media/airvio/runs/upload-bb371a0f5fbda012/video/video-bb371a0f5fbda012.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC1iYjM3MWEwZjVmYmRhMDEyIiwiZXhwaXJlc0F0IjoxNzgzNTgzNzg2ODAzfQ"}
      videoUrl: {key: videoUrl, type: text, value: "http://localhost:5179/api/storage/media/airvio/runs/upload-bb371a0f5fbda012/video/video-bb371a0f5fbda012.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC1iYjM3MWEwZjVmYmRhMDEyIiwiZXhwaXJlc0F0IjoxNzgzNTgzNzg2ODAzfQ"}
      "visual:height": {key: "visual:height", type: number, value: 617}
      "visual:width": {key: "visual:width", type: number, value: 1097}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -3}
    - id: {key: id, type: string, value: "workspace-source-media-panel"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "buddydrone.jpg"}
      position: {key: position, type: object, value: {"x":-85.31115531472665,"y":-463.0106782207429}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      image: {key: image, type: string, value: "http://localhost:5181/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNTk3NDg4Njk2fQ"}
      imageUrl: {key: imageUrl, type: text, value: "http://localhost:5181/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNTk3NDg4Njk2fQ"}
      media: {key: media, type: string, value: "http://localhost:5181/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNTk3NDg4Njk2fQ"}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: "http://localhost:5181/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNTk3NDg4Njk2fQ"}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaSource: {key: mediaSource, type: string, value: "storyboard-card-media-drop"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "sha256:730fe6850f0fc26f74a39bfffd1e828c47fbb7086ea09c8118445ef7b943ce96"}
      mediaUrl: {key: mediaUrl, type: string, value: "http://localhost:5181/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNTk3NDg4Njk2fQ"}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      storyboardCanvasRichMediaPanel: {key: storyboardCanvasRichMediaPanel, type: boolean, value: true}
      storyboardCardMediaSourceKind: {key: storyboardCardMediaSourceKind, type: string, value: "image"}
      storyboardCardMediaTargetId: {key: storyboardCardMediaTargetId, type: string, value: "workspace-source"}
      thumbnailUrl: {key: thumbnailUrl, type: string, value: "http://localhost:5181/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNTk3NDg4Njk2fQ"}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -3}
    - id: {key: id, type: string, value: "n7"}
      type: {key: type, type: string, value: "TextGeneration"}
      label: {key: label, type: string, value: "Text Widget"}
      position: {key: position, type: object, value: {"x":2241.1481403289563,"y":-1622.2397972973777}}
      chatAuthMode: {key: chatAuthMode, type: text, value: "serverManaged"}
      chatEndpointUrl: {key: chatEndpointUrl, type: text, value: "https://ark.ap-southeast.bytepluses.com/api/v3/chat/completions"}
      chatFrequencyPenalty: {key: chatFrequencyPenalty, type: number, value: 0}
      chatLogitBiasJson: {key: chatLogitBiasJson, type: json, value: ""}
      chatLogprobs: {key: chatLogprobs, type: boolean, value: false}
      chatMaxCompletionTokens: {key: chatMaxCompletionTokens, type: number, value: 1000}
      chatMessagesJson: {key: chatMessagesJson, type: json, value: ""}
      chatModel: {key: chatModel, type: select, value: "seed-2-0-mini-260215"}
      chatParallelToolCalls: {key: chatParallelToolCalls, type: boolean, value: true}
      chatPresencePenalty: {key: chatPresencePenalty, type: number, value: 0}
      chatProvider: {key: chatProvider, type: readonly, value: "byteplus-modelark"}
      chatReasoningEffort: {key: chatReasoningEffort, type: select, value: "medium"}
      chatResponseFormatJson: {key: chatResponseFormatJson, type: json, value: ""}
      chatServiceTier: {key: chatServiceTier, type: text, value: "auto"}
      chatStopJson: {key: chatStopJson, type: json, value: ""}
      chatStream: {key: chatStream, type: boolean, value: true}
      chatStreamOptionsJson: {key: chatStreamOptionsJson, type: json, value: ""}
      chatTemperature: {key: chatTemperature, type: number, value: 0.3}
      chatThinkingJson: {key: chatThinkingJson, type: json, value: ""}
      chatThinkingType: {key: chatThinkingType, type: select, value: "enabled"}
      chatToolChoiceJson: {key: chatToolChoiceJson, type: json, value: ""}
      chatToolsJson: {key: chatToolsJson, type: json, value: ""}
      chatTopLogprobs: {key: chatTopLogprobs, type: number, value: 0}
      chatTopP: {key: chatTopP, type: number, value: 0.7}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "textGeneration"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 0}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      output: {key: output, type: textarea, value: ""}
      prompt: {key: prompt, type: textarea, value: "Generate a text response for the active request."}
      title: {key: title, type: string, value: "Text Widget"}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "n8"}
      type: {key: type, type: string, value: "TextGeneration"}
      label: {key: label, type: string, value: "Text Widget"}
      position: {key: position, type: object, value: {"x":2915.713728494315,"y":-1926.165448820442}}
      chatAuthMode: {key: chatAuthMode, type: text, value: "serverManaged"}
      chatEndpointUrl: {key: chatEndpointUrl, type: text, value: "https://ark.ap-southeast.bytepluses.com/api/v3/chat/completions"}
      chatFrequencyPenalty: {key: chatFrequencyPenalty, type: number, value: 0}
      chatLogitBiasJson: {key: chatLogitBiasJson, type: json, value: ""}
      chatLogprobs: {key: chatLogprobs, type: boolean, value: false}
      chatMaxCompletionTokens: {key: chatMaxCompletionTokens, type: number, value: 1000}
      chatMessagesJson: {key: chatMessagesJson, type: json, value: ""}
      chatModel: {key: chatModel, type: select, value: "seed-2-0-mini-260215"}
      chatParallelToolCalls: {key: chatParallelToolCalls, type: boolean, value: true}
      chatPresencePenalty: {key: chatPresencePenalty, type: number, value: 0}
      chatProvider: {key: chatProvider, type: readonly, value: "byteplus-modelark"}
      chatReasoningEffort: {key: chatReasoningEffort, type: select, value: "medium"}
      chatResponseFormatJson: {key: chatResponseFormatJson, type: json, value: ""}
      chatServiceTier: {key: chatServiceTier, type: text, value: "auto"}
      chatStopJson: {key: chatStopJson, type: json, value: ""}
      chatStream: {key: chatStream, type: boolean, value: true}
      chatStreamOptionsJson: {key: chatStreamOptionsJson, type: json, value: ""}
      chatTemperature: {key: chatTemperature, type: number, value: 0.3}
      chatThinkingJson: {key: chatThinkingJson, type: json, value: ""}
      chatThinkingType: {key: chatThinkingType, type: select, value: "enabled"}
      chatToolChoiceJson: {key: chatToolChoiceJson, type: json, value: ""}
      chatToolsJson: {key: chatToolsJson, type: json, value: ""}
      chatTopLogprobs: {key: chatTopLogprobs, type: number, value: 0}
      chatTopP: {key: chatTopP, type: number, value: 0.7}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "textGeneration"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 0}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      output: {key: output, type: textarea, value: ""}
      prompt: {key: prompt, type: textarea, value: "Generate a text response for the active request."}
      title: {key: title, type: string, value: "Text Widget"}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -2}
    - id: {key: id, type: string, value: "n9"}
      type: {key: type, type: string, value: "TextGeneration"}
      label: {key: label, type: string, value: "Text Widget"}
      position: {key: position, type: object, value: {"x":2241.1481403289563,"y":-428.23979729737766}}
      chatAuthMode: {key: chatAuthMode, type: text, value: "serverManaged"}
      chatEndpointUrl: {key: chatEndpointUrl, type: text, value: "https://ark.ap-southeast.bytepluses.com/api/v3/chat/completions"}
      chatFrequencyPenalty: {key: chatFrequencyPenalty, type: number, value: 0}
      chatLogitBiasJson: {key: chatLogitBiasJson, type: json, value: ""}
      chatLogprobs: {key: chatLogprobs, type: boolean, value: false}
      chatMaxCompletionTokens: {key: chatMaxCompletionTokens, type: number, value: 1000}
      chatMessagesJson: {key: chatMessagesJson, type: json, value: ""}
      chatModel: {key: chatModel, type: select, value: "seed-2-0-mini-260215"}
      chatParallelToolCalls: {key: chatParallelToolCalls, type: boolean, value: true}
      chatPresencePenalty: {key: chatPresencePenalty, type: number, value: 0}
      chatProvider: {key: chatProvider, type: readonly, value: "byteplus-modelark"}
      chatReasoningEffort: {key: chatReasoningEffort, type: select, value: "medium"}
      chatResponseFormatJson: {key: chatResponseFormatJson, type: json, value: ""}
      chatServiceTier: {key: chatServiceTier, type: text, value: "auto"}
      chatStopJson: {key: chatStopJson, type: json, value: ""}
      chatStream: {key: chatStream, type: boolean, value: true}
      chatStreamOptionsJson: {key: chatStreamOptionsJson, type: json, value: ""}
      chatTemperature: {key: chatTemperature, type: number, value: 0.3}
      chatThinkingJson: {key: chatThinkingJson, type: json, value: ""}
      chatThinkingType: {key: chatThinkingType, type: select, value: "enabled"}
      chatToolChoiceJson: {key: chatToolChoiceJson, type: json, value: ""}
      chatToolsJson: {key: chatToolsJson, type: json, value: ""}
      chatTopLogprobs: {key: chatTopLogprobs, type: number, value: 0}
      chatTopP: {key: chatTopP, type: number, value: 0.7}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "textGeneration"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 0}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      output: {key: output, type: textarea, value: ""}
      prompt: {key: prompt, type: textarea, value: "Generate a text response for the active request."}
      title: {key: title, type: string, value: "Text Widget"}
      "visual:height": {key: "visual:height", type: number, value: 369}
      "visual:width": {key: "visual:width", type: number, value: 522}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -4}
    - id: {key: id, type: string, value: "n10"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel"}
      position: {key: position, type: object, value: {"x":-1981.7513866710415,"y":-4132.960662430232}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      freezeConnectedOutput: {key: freezeConnectedOutput, type: boolean, value: true}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 0}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      output:
        key: output
        type: textarea
        value: |
          i can see

          ![空武.jpg](http://localhost:5172/api/storage/media/airvio/runs/upload-088c7665f3bdba06/image/image-088c7665f3bdba06.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC0wODhjNzY2NWYzYmRiYTA2IiwiZXhwaXJlc0F0IjoxNzgzNjY3MTcyOTkzfQ)

      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "text"}
      "visual:height": {key: "visual:height", type: number, value: 625}
      "visual:width": {key: "visual:width", type: number, value: 1111}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -4}
    - id: {key: id, type: string, value: "workspace-runtime-media-panel"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "buddydrone.jpg"}
      position: {key: position, type: object, value: {"x":337.14814032895606,"y":-1385.2397972973777}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      image: {key: image, type: string, value: "http://localhost:5177/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNjg1NTE3NTM0fQ"}
      imageUrl: {key: imageUrl, type: text, value: "http://localhost:5177/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNjg1NTE3NTM0fQ"}
      media: {key: media, type: string, value: "http://localhost:5177/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNjg1NTE3NTM0fQ"}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: "http://localhost:5177/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNjg1NTE3NTM0fQ"}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaSource: {key: mediaSource, type: string, value: "storyboard-card-media-drop"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "sha256:730fe6850f0fc26f74a39bfffd1e828c47fbb7086ea09c8118445ef7b943ce96"}
      mediaUrl: {key: mediaUrl, type: string, value: "http://localhost:5177/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNjg1NTE3NTM0fQ"}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "image"}
      storyboardCanvasRichMediaPanel: {key: storyboardCanvasRichMediaPanel, type: boolean, value: true}
      storyboardCardMediaSourceKind: {key: storyboardCardMediaSourceKind, type: string, value: "image"}
      storyboardCardMediaTargetId: {key: storyboardCardMediaTargetId, type: string, value: "workspace-runtime"}
      thumbnailUrl: {key: thumbnailUrl, type: string, value: "http://localhost:5177/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNjg1NTE3NTM0fQ"}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -7}
    - id: {key: id, type: string, value: "n3"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "港岛仿生局.mp4"}
      position: {key: position, type: object, value: {"x":-2603.946354170258,"y":-1679.4617338318171}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 1}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      media: {key: media, type: string, value: "http://localhost:5172/api/storage/media/airvio/runs/upload-bb371a0f5fbda012/video/video-bb371a0f5fbda012.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC1iYjM3MWEwZjVmYmRhMDEyIiwiZXhwaXJlc0F0IjoxNzgzNjcyNDEzODc2fQ"}
      media_interactive: {key: media_interactive, type: boolean, value: true}
      media_kind: {key: media_kind, type: string, value: "video"}
      media_url: {key: media_url, type: string, value: "http://localhost:5172/api/storage/media/airvio/runs/upload-bb371a0f5fbda012/video/video-bb371a0f5fbda012.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC1iYjM3MWEwZjVmYmRhMDEyIiwiZXhwaXJlc0F0IjoxNzgzNjcyNDEzODc2fQ"}
      mediaKind: {key: mediaKind, type: string, value: "video"}
      mediaSourceKey: {key: mediaSourceKey, type: string, value: "sha256:bb371a0f5fbda012cd58566d44e081e5a7aafd3803e9c35c6ec5678f2e5f19c6"}
      mediaUrl: {key: mediaUrl, type: string, value: "http://localhost:5172/api/storage/media/airvio/runs/upload-bb371a0f5fbda012/video/video-bb371a0f5fbda012.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC1iYjM3MWEwZjVmYmRhMDEyIiwiZXhwaXJlc0F0IjoxNzgzNjcyNDEzODc2fQ"}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      richMediaActiveTab: {key: richMediaActiveTab, type: string, value: "video"}
      video: {key: video, type: string, value: "http://localhost:5172/api/storage/media/airvio/runs/upload-bb371a0f5fbda012/video/video-bb371a0f5fbda012.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC1iYjM3MWEwZjVmYmRhMDEyIiwiZXhwaXJlc0F0IjoxNzgzNjcyNDEzODc2fQ"}
      videoUrl: {key: videoUrl, type: text, value: "http://localhost:5172/api/storage/media/airvio/runs/upload-bb371a0f5fbda012/video/video-bb371a0f5fbda012.mp4?kg_media_token=eyJydW5JZCI6InVwbG9hZC1iYjM3MWEwZjVmYmRhMDEyIiwiZXhwaXJlc0F0IjoxNzgzNjcyNDEzODc2fQ"}
      "visual:height": {key: "visual:height", type: number, value: 689}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:width": {key: "visual:width", type: number, value: 1225}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -6}
    - id: {key: id, type: string, value: "n11"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel"}
      position: {key: position, type: object, value: {"x":-264.7722565265383,"y":-1990.5625788679163}}
      audioUrl: {key: audioUrl, type: text, value: ""}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "flow:widgetTypeId": {key: "flow:widgetTypeId", type: string, value: "default"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 0}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      imageUrl: {key: imageUrl, type: text, value: ""}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      videoUrl: {key: videoUrl, type: text, value: ""}
      "visual:height": {key: "visual:height", type: number, value: 203}
      "visual:width": {key: "visual:width", type: number, value: 360}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: -1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -10}
    - id: {key: id, type: string, value: "n12"}
      type: {key: type, type: string, value: "WorkspaceSourceWidget"}
      label: {key: label, type: string, value: "Source Copy"}
      position: {key: position, type: object, value: {"x":-513.2850651479566,"y":-2675.9490377413813}}
      handles: {key: handles, type: object, value: {"source":["workspace_signal_out"]}}
      command: {key: command, type: string, value: "/source.normalize"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{},"out":{"workspace_signal_out":"workspace_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:workspace-source"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 0}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      lane: {key: lane, type: string, value: "Source"}
      summary:
        key: summary
        type: string
        value: |
          I and
          ![buddydrone.jpg](http://localhost:5181/api/storage/media/airvio/runs/upload-730fe6850f0fc26f/image/buddydrone-730fe6850f0fc26f.jpg?kg_media_token=eyJydW5JZCI6InVwbG9hZC03MzBmZTY4NTBmMGZjMjZmIiwiZXhwaXJlc0F0IjoxNzgzNTk3NDg4Njk2fQ) can ... #storyboard .. /soul.load #runtime, is it better in #storyboard

      title: {key: title, type: string, value: "Source Copy"}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
  edges:
    - {"id":"edge_workspace_source_to_runtime","source":"workspace-source","sourceHandle":"workspace_signal_out","target":"workspace-runtime","targetHandle":"workspace_signal_in","type":"workspace_signal"}
    - {"id":"edge_workspace_runtime_to_publish","source":"workspace-runtime","sourceHandle":"workspace_signal_out","target":"workspace-publish","targetHandle":"workspace_signal_in","type":"workspace_signal"}
    - {"id":"e1","source":"workspace-source-media-panel","sourceHandle":"imageUrl","target":"workspace-source","targetHandle":"mediaUrl","label":"linksTo"}
    - {"id":"e3","source":"workspace-runtime-media-panel","sourceHandle":"imageUrl","target":"workspace-runtime","targetHandle":"mediaUrl","label":"linksTo"}
    - {"id":"e2","source":"n4","sourceHandle":"audioUrl","target":"workspace-publish","targetHandle":"workspace_signal_in","label":"linksTo"}
    - {"id":"e4","source":"n2","sourceHandle":"output","target":"workspace-publish","targetHandle":"workspace_signal_in","label":"linksTo"}
    - {"id":"e5","source":"n3","sourceHandle":"imageUrl","target":"workspace-source","targetHandle":"mediaUrl","label":"linksTo"}
```

This README is the local workspace contract for the current Knowgrph lane. It replaces the previous generated Vite HTML capture with source-owned Markdown and YAML frontmatter that can be parsed, diffed, and audited.

The current work stays Dev-only:

- Dev source: `/Users/huijoohwee/Documents/GitHub/knowgrph`
- Docs target: `/Users/huijoohwee/Documents/GitHub/huijoohwee/docs`
- Prod mirror: `/Users/huijoohwee/Documents/GitHub/huijoohwee/content/knowgrph`
- Cloudflare: `airvio.co` and `airvio.co/knowgrph`

Do not deploy to Prod or Cloudflare from this document. Open that lane only after an explicit operator instruction that preserves `Dev -> Prod -> Cloudflare`.

## Source Contract

The source reference is `docs/knowgrph-strybldr-starter-template.md`. That template is a minimum viable, maximum-value Strybldr seed for short-drama video-agent work: scriptwriting, storyboarding, generation, editing, validation, and local proof before any live provider call.

The active runtime shape is frontmatter-first:

- authored frontmatter and body prose are the SSOT;
- `flow.nodes`, `flow.edges`, and `socket_types` own graph structure;
- `2D Renderer: Storyboard` projects Cards, Widgets, Rich Media Panels, Gantt/Timeline views, and visible connectors from source data;
- runtime outputs stay blank until a returned local or approved live run provides evidence;
- `paid_call_count` remains `0` for the default local dry run;
- `buildScopedGraphSemanticKey`, `canvas:widgetCard`, `CardMediaPreview`, `CardMarkdownPreview`, and `RichMediaPanel` remain shared owners.

## Invocation Grammar

The shared grammar is query-visible and source-owned:

| Prefix | Role | Workspace routes |
|---|---|---|
| `/` | bounded action | `/source.normalize`, `/memory.seed`, `/harness.define`, `/mcp.capabilities`, `/cost.audit`, `/superagent.run`, `/tool.route`, `/canvas.project`, `/runtime-ready.check`, `/validation.run`, `/deploy.guard` |
| `#` | semantic scope | `#frontmatter`, `#harness`, `#token-economics`, `#tool-gateway`, `#tool-routing`, `#long-horizon-harness`, `#runtime-ready`, `#canvas`, `#human-in-loop`, `#approval-gate`, `#dev-only`, `#no-hardcode`, `#no-legacy` |
| `@` | binding surface | `@source.frontmatter`, `@source.body`, `@operator`, `@local-harness`, `@runtime-proof`, `@cost-log`, `@mcp-gateway`, `@tool-provider`, `@tool-policy`, `@orchestration-graph`, `@sandbox-workspace`, `@message-gateway`, `@human-review`, `@canvas`, `@approval-gate`, `@dev-only` |

Do not collapse these into hidden chips, stale aliases, or downstream remaps. Inline card editing, FloatingPanel Chat, Markdown Viewer, and graph-field tooling must preserve the raw `/`, `#`, and `@` query text through blur, rerender, parser reprojection, and Storyboard projection.

## Runtime-Ready Boundary

`spec-complete` means the contract, graph shape, gates, and local proof path are defined. `runtime-ready` requires returned local proof from `/validation.run` or an equivalent focused runtime gate.

Before claiming runtime-ready, verify:

- parser/frontmatter reads this file from byte-zero YAML through the closing fence;
- source routes resolve from the named template and `knowgrph` owners;
- no generated provider IDs, stream URLs, transcripts, data URIs, credentials, or output artifacts are committed;
- live provider calls are blocked until `@operator` approval;
- repeated generation is blocked when timeline edits, cached summaries, or existing manifests are enough;
- icon wrappers used by selectable controls remain visible to selection tooling and are not hidden as decorative `aria-hidden` surfaces;
- semantic HTML projections use `main`, `section`, `article`, `header`, `nav`, `aside`, `figure`, `figcaption`, and `table` before generic layout wrappers.

## Validation

Focused local checks for this README:

```bash
DOC=/Users/huijoohwee/Documents/GitHub/huijoohwee/docs/workspace-readme.md
ruby -e 'require "yaml"; text = File.read(ENV.fetch("DOC")); abort("missing byte-zero fence") unless text.start_with?("---\n"); YAML.safe_load(text.split(/^---\s*$/)[1], permitted_classes: [], aliases: true); puts "workspace-readme frontmatter ok"'
ruby -e 'text = File.read(ENV.fetch("DOC")); deny = ["data:" + "image", "<" + "script", "/@" + "vite", "VIDEODB" + "_API_KEY", "SENSENOVA" + "_API_KEY"]; deny += %w[provider_job_id stream_url generated_asset_url].map { |key| /#{key}: "[^"]+"/ }; hits = deny.flat_map { |item| item.is_a?(Regexp) ? text.scan(item).map(&:to_s) : (text.include?(item) ? [item] : []) }; abort(hits.uniq.join("\n")) unless hits.empty?; puts "workspace-readme hardcode scan ok"'
git -C /Users/huijoohwee/Documents/GitHub/huijoohwee diff --check -- docs/workspace-readme.md
```

The operator-declared docs-control path `/Users/huijoohwee/Documents/GitHub/huijoohwee/agentic-os-docs` was not present in this workspace on 2026-07-09. Verify the correct control-surface path before treating docs dictionaries as current runtime evidence.

## Cleanup Rules

- Remove stale generated captures at the source; do not stack aliases or compatibility shims.
- Keep generated `chat-log` or proof artifacts as evidence only; fix upstream routing or finalization instead of editing artifacts.
- Do not mirror to Prod, mutate Cloudflare, or publish external output from this README.
- Keep runtime-owned fields blank until returned evidence exists.
- Update sibling docs and API notes only when the shared owner changes, then prove the exact changed surface.
