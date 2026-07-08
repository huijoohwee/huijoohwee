---
title: "Knowgrph Strybldr Starter Template"
graphId: "md:knowgrph-strybldr-starter-template"
doc_type: "Strybldr Starter Template"
date: "2026-06-16"
lang: "en-US"
schema: "kgc-strybldr-starter/v1"
implementation_contract: "docs/documents/knowgrph-strybldr-prd-tad.md"
template_policy: "Minimum viable runnable Strybldr seed for video-agent E2E ideation, invocation, and generation; source payload owns graph data; runtime outputs stay blank until operator-approved live calls return them."
validation_input_forbid_hardcode_in_repo: "true"
deployed_api_claim: "false"
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "storyboard"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: false
kgDocumentStructureBaselineLock: false
kgStrybldrStoryboard: true
kgBottomPanelOpen: true
kgBottomPanelTab: "timeline"
kgFloatingPanelOpen: true
kgFloatingPanelView: "strybldr"
kgSharedRendererContract:
  version: "shared-renderer-contract/v1"
  semanticIdentity: "buildScopedGraphSemanticKey"
  cardPreview: "CardMediaPreview + CardMarkdownPreview"
  widgetCard: "canvas:widgetCard"
  richMediaPanel: "RichMediaPanel"
  storyboardDisplay: "2D Renderer: Storyboard Card (default) and Widget variants"
  storyboardSurfaces: ["Cards", "Widgets", "Rich Media Panels"]
  edgeModel: "active graph edges derive from this frontmatter-owned starter graph"
  rendererPolicy: "frontmatter and source payloads own data; renderers project view state only"
credential_policy:
  videodb: "Server managed VIDEODB_API_KEY only; never hardcoded, browser-stored, or repo-stored."
  sensenova: "Server managed SENSENOVA_API_KEY only; signing and proxy auth stay server-side."
  live_generation: "Human approval required before paid or mutating provider calls."
runtime_defaults:
  provider: "knowgrph-local-animatic"
  model: "strybldr-local-animatic-v1"
  status: "draft"
  paid_call_count: 0
  video_id: ""
  generation_job_id: ""
  index_job_id: ""
  stream_url: ""
  videodb_stream_url: ""
  transcript_text: ""
  publish_packet_path: ""
starter_inputs:
  source_url: ""
  source_title: "Untitled source"
  source_author: ""
  source_policy: "Use operator-owned source notes, metadata, and approved paraphrased beats only. Do not copy transcript text."
  target_brief: "Create a concise source-backed video-agent ideation brief, invocation plan, generation storyboard, and local animatic packet before any live provider call."
  approval_state: "draft"
  publish_scope: "local-only"
  publish_policy: "No Prod, Cloudflare, external publication, fabricated provider IDs, stream URLs, or transcript text."
local_animatic_inputs:
  provider: "knowgrph-local-animatic"
  model: "strybldr-local-animatic-v1"
  status: "ready"
  paid_call_count: 0
  source: "approved Strybldr cards plus Agentic OS /, #, @ invocations from this starter document"
  output: "strybldr-video-*.md with embedded srcdoc animatic and source provenance links"
agentic_os_video_agent_pipeline:
  version: "agentic-video-agent-pipeline/v1"
  status: "spec-complete"
  autonomy_mode: "local-dry-run-first"
  source_docs:
    - "../agentic-os-docs/MEMORY.md"
    - "../agentic-os-docs/AGENTS.md"
    - "../agentic-os-docs/DICTIONARY-COMMAND.md"
    - "../agentic-os-docs/DICTIONARY-SEMANTIC.md"
    - "../agentic-os-docs/DICTIONARY-BINDING.md"
    - "../agentic-os-docs/HARNESS-CONTRACTS.md"
    - "../agentic-os-docs/RUNTIME-READINESS.md"
  invocation_routes:
    slash:
      - "/memory.seed"
      - "/source.normalize"
      - "/harness.define"
      - "/mcp.capabilities"
      - "/cost.audit"
      - "/canvas.project"
      - "/runtime-ready.check"
      - "/validation.run"
      - "/deploy.guard"
    semantic:
      - "#frontmatter"
      - "#harness"
      - "#token-economics"
      - "#vcc"
      - "#runtime-ready"
      - "#canvas"
      - "#approval-gate"
      - "#dev-only"
      - "#no-hardcode"
    binding:
      - "@source.frontmatter"
      - "@source.body"
      - "@local-harness"
      - "@runtime-proof"
      - "@cost-log"
      - "@mcp-gateway"
      - "@canvas"
      - "@approval-gate"
      - "@operator"
      - "@dev-only"
  stages:
    - id: "video-agent-ideation"
      lane: "Ideation"
      command: "/memory.seed"
      bindings: ["@source.frontmatter", "@source.body", "@operator"]
      semantics: ["#frontmatter", "#vcc", "#no-hardcode"]
      output: "source-backed idea brief and storyboard hypotheses"
      paid_call_count: 0
    - id: "video-agent-invocation"
      lane: "Invocation"
      command: "/harness.define"
      bindings: ["@local-harness", "@cost-log", "@mcp-gateway"]
      semantics: ["#harness", "#token-economics", "#approval-gate"]
      output: "typed invocation plan with bounds, gates, and cost fields"
      paid_call_count: 0
    - id: "video-agent-generation"
      lane: "Generation"
      command: "/canvas.project"
      bindings: ["@canvas", "@runtime-proof", "@approval-gate"]
      semantics: ["#canvas", "#runtime-ready", "#dev-only"]
      output: "local animatic packet by default; live provider result only after approval"
      paid_call_count: 0
  gates:
    live_provider_calls: "blocked until @operator approves @approval-gate"
    prod_mirror: "blocked by /deploy.guard and @dev-only"
    cloudflare: "blocked by /deploy.guard and @dev-only"
  runtime_outputs:
    idea_brief_path: ""
    invocation_manifest_path: ""
    local_animatic_packet_path: ""
    live_video_url: ""
    provider_job_id: ""
    runtime_proof_path: ""
socket_types:
  strybldr_text_signal: {color: "#14b8a6", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [strybldr_text_signal]}
  strybldr_media_signal: {color: "#38bdf8", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [strybldr_media_signal]}
  strybldr_packet_signal: {color: "#f59e0b", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [strybldr_packet_signal]}
flow:
  nodes: []
  edges: []
kgParserRoutingContract:
  version: "knowgrph-parser-routing/v1"
  parserLogic: "Opening frontmatter and authored source payloads are SSOT; parsers materialize graphData without renderer-local aliases."
  routingKeys:
    surface: "kgCanvasSurfaceMode"
    renderMode: "kgCanvasRenderMode"
    renderer: "kgCanvas2dRenderer"
    semanticMode: "kgDocumentSemanticMode"
    frontmatterMode: "kgFrontmatterModeEnabled"
    flowGraph: "flow"
    flowNodes: "flow.nodes"
    flowEdges: "flow.edges"
    strybldrStoryboard: "kgStrybldrStoryboard"
  diagramKinds:
    - "frontmatter_flow"
    - "strybldr_storyboard"
  surfaces:
    - "2D Renderer: Storyboard"
    - "FloatingPanel: Strybldr"
    - "FloatingPanel: Camera"
  edgePolicy: "Explicit flow.edges are source-owned SSOT; renderers project visible connectors only."
kgWebpageView: "markdown"
kgVideoSequenceSources: []
kgVideoSequenceTimeline: true
flow_diagrams:
  key: "flow_diagrams"
  type: "object"
  value:
    video_agent_workflow:
      key: video_agent_workflow
      type: mermaid_gantt
      floatingPanelView: "gantt"
      bottomPanelTab: "gantt"
      value: |-
        gantt
          title Video-Agent E2E Pipeline
          dateFormat HH:mm
          axisFormat %H:%M
          section Agentic OS
          Ideation : video_agent_ideation, 00:00, 0.167m
          Invocation : video_agent_invocation, after video_agent_ideation, 0.167m
          Generation dry-run : video_agent_generation, after video_agent_invocation, 0.167m
          Runtime proof : video_agent_runtime_proof, after video_agent_generation, 0.167m
    starter_flowchart:
      key: "starter_flowchart"
      type: "mermaid_flowchart"
      floatingPanelView: "flowchart"
      floatingPanelOpen: true
      bottomPanelTab: "flowchart"
      bottomPanelOpen: true
      value: |-
        flowchart LR
          source["Source URL and operator notes"]
          ideation["/memory.seed ideation @source.body"]
          invocation["/harness.define invocation #harness"]
          generation["/canvas.project generation @canvas"]
          runtime["/runtime-ready.check local runtime gate"]
          review["Review packet"]
          publish["Local publish packet"]
          source --> ideation --> invocation --> generation --> runtime --> review --> publish
strybldr_storyboard:
  version: '1'
  runId: strybldr-starter-template
  createdAtMs: '1781577600000'
  notes: Neutral starter payload for local-first Strybldr authoring. Replace source fields with operator-owned inputs before live provider calls.
  workflow:
    stages:
      - Source
      - Ideation
      - Invocation
      - Generation
      - Storyboard
      - Elements
      - Runtime
      - Review
      - Publish
    publish:
      id: starter-local-publish-packet
      label: Local publish packet
      policy: Write local packet fields only; do not claim Prod, Cloudflare, provider IDs, or stream URLs without explicit operator approval and returned live evidence.
  sources:
    - sourceUnitId: strybldr-starter-source
      workspacePath: docs/knowgrph-strybldr-starter-template.md
      relativePath: knowgrph-strybldr-starter-template.md
      originalName: Strybldr starter source
      mediaKind: doc
      mimeHint: text/markdown
      byteSize: '0'
      textHash: strybldr-starter-template
      mediaUrl: ''
  elements:
    - id: starter-source-brief-card
      sourceUnitId: strybldr-starter-source
      label: Source brief
      confidence: 1
      sourceBox: null
      evidenceKind: source-metadata
      provider: knowgrph
      lane: Source
      order: 1
      prompt: Summarize the source promise without copying transcript text or provider-generated output.
      action: Fill source fields before approving storyboard cards.
      summary: Capture the operator-owned source URL, title, author, constraints, and notes.
    - id: video-agent-ideation-card
      sourceUnitId: strybldr-starter-source
      label: Video-agent ideation
      confidence: 1
      sourceBox: null
      evidenceKind: agentic-os-invocation
      provider: knowgrph
      lane: Ideation
      order: 2
      prompt: "Run /memory.seed #frontmatter #vcc @source.frontmatter @source.body to derive a source-backed idea brief."
      action: Keep ideas paraphrased, source-backed, and zero-spend until the operator approves generation.
      summary: Autonomous ideation turns the source brief into candidate shots, narrative beats, and reuse constraints.
    - id: video-agent-invocation-card
      sourceUnitId: strybldr-starter-source
      label: Video-agent invocation
      confidence: 1
      sourceBox: null
      evidenceKind: agentic-os-invocation
      provider: knowgrph
      lane: Invocation
      order: 3
      prompt: "Run /harness.define /mcp.capabilities /cost.audit #harness #token-economics @local-harness @cost-log @mcp-gateway."
      action: Produce a typed invocation plan with max iteration, cost ledger, approval gates, and fallback behavior.
      summary: Invocation binds commands, semantics, and runtime surfaces before any model or media call can run.
    - id: video-agent-generation-card
      sourceUnitId: strybldr-starter-source
      label: Video-agent generation
      confidence: 1
      sourceBox: null
      evidenceKind: runtime-plan
      provider: knowgrph-local-animatic
      lane: Generation
      order: 4
      prompt: "Run /canvas.project /runtime-ready.check #canvas #runtime-ready @canvas @runtime-proof @approval-gate."
      action: Generate a local animatic packet first; require @operator approval before live video provider calls.
      summary: Generation projects approved story cards into Canvas and emits local proof with paid_call_count remaining zero.
    - id: starter-storyboard-beats-card
      sourceUnitId: strybldr-starter-source
      label: Storyboard beats
      confidence: 1
      sourceBox: null
      evidenceKind: user-edit
      provider: knowgrph
      lane: Storyboard
      order: 5
      prompt: Create four concise storyboard beats from the operator notes.
      action: Approve only paraphrased, source-backed beats.
      summary: Draft setup, turn, proof, and close beats as editable cards.
    - id: starter-elements-card
      sourceUnitId: strybldr-starter-source
      label: Reusable elements
      confidence: 1
      sourceBox: null
      evidenceKind: user-edit
      provider: knowgrph
      lane: Elements
      order: 6
      prompt: Convert approved beats into reusable elements and style constraints.
      action: Keep generated media URLs blank until real outputs exist.
      summary: List reusable characters, locations, props, evidence cards, UI states, or shots.
    - id: starter-runtime-gate-card
      sourceUnitId: strybldr-starter-source
      label: Runtime gate
      confidence: 1
      sourceBox: null
      evidenceKind: runtime-plan
      provider: knowgrph-local-animatic
      lane: Runtime
      order: 7
      prompt: Render the local animatic handoff and keep live IDs empty until returned by an approved run.
      action: Generate locally first; require human approval before VideoDB, SenseNova, or other paid provider calls.
      summary: Default runtime is local animatic generation with zero paid calls and blank live provider fields.
    - id: starter-review-packet-card
      sourceUnitId: strybldr-starter-source
      label: Review packet
      confidence: 1
      sourceBox: null
      evidenceKind: runtime-review
      provider: knowgrph
      lane: Review
      order: 8
      prompt: Prepare a review packet that separates local evidence from live provider evidence.
      action: Reject fabricated provider IDs, stream URLs, transcripts, or generated asset URLs.
      summary: Review provenance, approval state, cost, provider evidence, and local playback.
    - id: starter-local-publish-packet-card
      sourceUnitId: strybldr-starter-source
      label: Local publish packet
      confidence: 1
      sourceBox: null
      evidenceKind: runtime-publish
      provider: knowgrph
      lane: Publish
      order: 9
      prompt: Close the workflow with a local-only packet and a visible publish gate.
      action: Keep publish scope local-only until the operator explicitly authorizes Prod or Cloudflare.
      summary: Final output is a local packet path and approval state, not a public deployment claim.
  cards: []
---

# Knowgrph Strybldr Starter Template

This is the /prd-tad.create minimum viable runnable ![1920s_Singapore_Malaya_202606190937.jpeg](http://localhost:5180/api/storage/media/airvio/runs/upload-170a76238422bb27/image/1920s_singapore_malaya_202606190937-170a76238422bb27.jpeg?kg_media_token=eyJydW5JZCI6InVwbG9hZC0xNzBhNzYyMzg0MjJiYjI3IiwiZXhwaXJlc0F0IjoxNzgzNDc0OTU2MTkwfQ) Strybldr seed for a video-agent E2E demo. It opens on the shared storyboard renderer, shows Source, Ideation, Invocation, Generation, Storyboard, Elements, Runtime, Review, and Publish cards, and can produce a local zero-paid-call animatic from approved cards. /memory.seed #canvas @canvas

The template is intentionally neutral. Fill in source fields, approve cards, and only then connect live providers. Runtime IDs, stream URLs, transcript text, generated `bg#FEF08A:media` URLs, and deployment claims remain blank until returned by an operator-approved live run.

## Video-Agent E2E Demo

This starter demonstrates the autonomous video-agent loop as source-backed stages, not as a separate parser or provider panel.

| Stage | Invocation | Output | Gate |
|---|---|---|---|
| Ideation | /memory.seed #frontmatter #vcc @source.frontmatter @source.body | Candidate shots, narrative beats, reuse constraints | Zero paid calls |
| Invocation | /harness.define /mcp.capabilities /cost.audit #harness #token-economics @local-harness @cost-log @mcp-gateway | Typed run manifest, cost fields, fallback paths, max iteration | Missing approval blocks before spend |
| Generation | /canvas.project /runtime-ready.check #canvas #runtime-ready @canvas @runtime-proof @approval-gate | Local animatic packet and visible Storyboard proof | Live video provider calls require @operator |
| Validation | /validation.run #vcc #dev-only @runtime-proof @dev-only | Focused proof lines and deploy-boundary status | No Prod or Cloudflare mutation |
| Deploy guard | /deploy.guard #approval-gate #dev-only @operator @dev-only | Explicitly gated release status | Stop before Prod/Cloudflare unless instructed |

## Autonomous Invocation Script

```yaml
video_agent_e2e:
  source: "@source.frontmatter + @source.body"
  ideation: "/memory.seed #frontmatter #vcc @source.frontmatter @source.body"
  invocation: "/harness.define /mcp.capabilities /cost.audit #harness #token-economics @local-harness @cost-log @mcp-gateway"
  generation: "/canvas.project /runtime-ready.check #canvas #runtime-ready @canvas @runtime-proof @approval-gate"
  validation: "/validation.run #vcc #dev-only @runtime-proof @dev-only"
  deploy_guard: "/deploy.guard #approval-gate #dev-only @operator @dev-only"
  default_result: "local animatic packet; paid_call_count remains 0"
  live_result: "blank until @operator approves @approval-gate and a provider returns evidence"
```

## Use

1. Open this Markdown file in Knowgrph.
2. Confirm Canvas View reports `2D Renderer: Storyboard`.
3. Edit `Source brief`, `Video-agent ideation`, `Video-agent invocation`, and `Video-agent generation`.
4. Approve `Storyboard beats` and `Reusable elements` before any paid or mutating provider call.
5. Run local generation first and confirm `paid_call_count: 0`.
6. Run /validation.run #vcc @runtime-proof and review the local packet before changing `publish_scope`.
7. Keep /deploy.guard #dev-only @dev-only active unless the operator explicitly authorizes Prod or Cloudflare.

## Acceptance Checklist

- [ ] Source URL and source notes are operator supplied.
- [ ] Ideation uses /memory.seed with @source.frontmatter and @source.body.
- [ ] Invocation uses /harness.define, /mcp.capabilities, and /cost.audit with #harness and @local-harness.
- [ ] Storyboard beats are paraphrased and approved.
- [ ] Generation uses /canvas.project and /runtime-ready.check before any live provider call.
- [ ] Live provider fields stay blank until real responses return them.
- [ ] Local animatic generation works without `VIDEODB_API_KEY` or `SENSENOVA_API_KEY`.
- [ ] Publish scope remains `local-only` unless the operator explicitly authorizes Prod or Cloudflare.

## Guardrails

- Do not hardcode source-specific media IDs, provider IDs, stream URLs, transcripts, credentials, or generated asset URLs in repo code or tests.
- Do not remap stale renderer names or add downstream compatibility aliases.
- Do not deploy this starter to Prod or Cloudflare from this document alone.
- Do not promote this demo from `spec-complete` to `runtime-ready` without surfaced @runtime-proof from /validation.run.
- Keep this file byte-zero YAML frontmatter plus a closing fence so shared frontmatter readers can parse it.
