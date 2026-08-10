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
      position: {key: position, type: object, value: {"x":2994.6205611831633,"y":-2981.377286950408}}
      handles: {key: handles, type: object, value: {"source":["workspace_signal_out"]}}
      command: {key: command, type: string, value: "/source.normalize"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{},"out":{"workspace_signal_out":"workspace_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:workspace-source"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 2}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      image: {key: image, type: string, value: ""}
      lane: {key: lane, type: string, value: "Source"}
      media: {key: media, type: string, value: ""}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: ""}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaUrl: {key: mediaUrl, type: string, value: ""}
      summary:
        key: summary
        type: string
        value: |
          Normalize the authored workspace source, keep the Markdown file as SSOT, and project it into the storyboard surface without committing generated media output.
      thumbnailUrl: {key: thumbnailUrl, type: string, value: ""}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "workspace-runtime"}
      type: {key: type, type: string, value: "RuntimeGateWidget"}
      label: {key: label, type: string, value: "Runtime Gate"}
      position: {key: position, type: object, value: {"x":3418.6205611831633,"y":-2981.377286950408}}
      handles: {key: handles, type: object, value: {"target":["workspace_signal_in"],"source":["workspace_signal_out"]}}
      command: {key: command, type: string, value: "/runtime-ready.check"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"workspace_signal_in":"workspace_signal"},"out":{"workspace_signal_out":"workspace_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:workspace-runtime"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 3}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 2}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      image: {key: image, type: string, value: ""}
      lane: {key: lane, type: string, value: "Validation"}
      media: {key: media, type: string, value: ""}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: ""}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaUrl: {key: mediaUrl, type: string, value: ""}
      summary:
        key: summary
        type: string
        value: |
          Run the focused runtime gate, confirm local proof exists, and preserve a Dev-only validation boundary until explicit operator approval opens the next release stage.
      thumbnailUrl: {key: thumbnailUrl, type: string, value: ""}
      "visual:importance": {key: "visual:importance", type: number, value: 20}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15.65685424949238}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "workspace-publish"}
      type: {key: type, type: string, value: "DeployGuardWidget"}
      label: {key: label, type: string, value: "Publish Guard"}
      position: {key: position, type: object, value: {"x":3842.6205611831633,"y":-2981.377286950408}}
      handles: {key: handles, type: object, value: {"target":["workspace_signal_in"]}}
      command: {key: command, type: string, value: "/deploy.guard"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"workspace_signal_in":"workspace_signal"},"out":{}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:workspace-publish"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 2}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 2}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      image: {key: image, type: string, value: ""}
      lane: {key: lane, type: string, value: "Publish"}
      media: {key: media, type: string, value: ""}
      media_kind: {key: media_kind, type: string, value: "image"}
      media_url: {key: media_url, type: string, value: ""}
      mediaKind: {key: mediaKind, type: string, value: "image"}
      mediaUrl: {key: mediaUrl, type: string, value: ""}
      summary:
        key: summary
        type: string
        value: |
          Enforce the publish guard so this README remains local-only until the operator explicitly opens the `Dev -> Prod -> Cloudflare` lane.
      thumbnailUrl: {key: thumbnailUrl, type: string, value: ""}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 14}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
  edges:
    - {"id":"edge_workspace_source_to_runtime","source":"workspace-source","sourceHandle":"workspace_signal_out","target":"workspace-runtime","targetHandle":"workspace_signal_in","type":"workspace_signal"}
    - {"id":"edge_workspace_runtime_to_publish","source":"workspace-runtime","sourceHandle":"workspace_signal_out","target":"workspace-publish","targetHandle":"workspace_signal_in","type":"workspace_signal"}
---

# Knowgrph Workspace README

This #aggregator-agentREADME is the local workspace contract for the current Knowgrph lane. It replaces the previous generated Vite HTML capture with source-owned Markdown and YAML frontmatter that can be parsed, diffed, and audited.

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
ruby -e 'text = File.read(ENV.fetch("DOC")); deny = ["data:" + "image", "<" + "script", "/@" + "vite", "VIDEODB" + "_API_KEY", "SENSENOVA" + "_API_KEY", "http://" + "localhost"]; deny += %w[provider_job_id stream_url generated_asset_url].map { |key| /#{key}: "[^"]+"/ }; hits = deny.flat_map { |item| item.is_a?(Regexp) ? text.scan(item).map(&:to_s) : (text.include?(item) ? [item] : []) }; abort(hits.uniq.join("\n")) unless hits.empty?; puts "workspace-readme hardcode scan ok"'
git -C /Users/huijoohwee/Documents/GitHub/huijoohwee diff --check -- docs/workspace-readme.md
```

The operator-declared docs-control path `/Users/huijoohwee/Documents/GitHub/huijoohwee/agentic-os-docs` was not present in this workspace on 2026-07-09. Verify the correct control-surface path before treating docs dictionaries as current runtime evidence.

## Cleanup Rules

- Remove stale generated captures at the source; do not stack aliases or compatibility shims.
- Keep generated `chat-log` or proof artifacts as evidence only; fix upstream routing or finalization instead of editing artifacts.
- Do not mirror to Prod, mutate Cloudflare, or publish external output from this README.
- Keep runtime-owned fields blank until returned evidence exists.
- Update sibling docs and API notes only when the shared owner changes, then prove the exact changed surface.
