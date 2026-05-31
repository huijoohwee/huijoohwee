---
title: "Knowgrph Vdeoxpln - Interactive Visual Explanation"
graphId: "md:knowgrph-vdeoxpln-interactive-explanation"
doc_type: "Knowgrph Vdeoxpln Visual Explainer"
date: "2026-05-31"
lang: "en-US"
implementation_contract: "knowgrph/docs/documents/knowgrph-vdeoxpln-prd-tad.md"
source_truth: "knowgrph/canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"
published_route: "https://airvio.co/knowgrph/.well-known/agent-skills/index.json"
concept_reference_boundary: "concept-only; no external source, schemas, prompts, examples, assets, names, routes, or prose copied"
kgCanvasSurfaceMode: "xr"
kgCanvasRenderMode: "3d"
kgCanvas3dMode: "xr"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: true
kgDocumentStructureBaselineLock: false

"renderer:palette":
  nodes:
    source: "#2563eb"
    contract: "#16a34a"
    route: "#f59e0b"
    ai: "#9333ea"
    artifact: "#0f766e"
    verify: "#dc2626"
  edges:
    deterministic: "#16a34a"
    inspect: "#2563eb"
    ai_assist: "#9333ea"
    publish: "#f59e0b"

workflow_sections:
  - id: wf_discover
    title: "Discover one canonical pack registry"
    nodes: [registry, pages_agent_skills, local_mcp, browser_webmcp, mainpanel_cards]
  - id: wf_route
    title: "Route from neutral intent and current state"
    nodes: [user_intent, neutral_router, selected_pack]
  - id: wf_execute
    title: "Execute through existing Knowgrph owners"
    nodes: [floating_chat, workspace_fs, source_files, kgc_validation, canvas_apply]
  - id: wf_explainer
    title: "Turn text artifacts into XR explainer-video panels"
    nodes: [text_artifact, rich_text_panel, rich_image_panel, rich_video_panel]
  - id: wf_publish
    title: "Publish and verify without mirror-only edits"
    nodes: [run_manifest, validation, cloudflare]

flow:
  direction: LR
  edgeType: smoothstep
  snapToGrid: true
  computed: true
  aspectRatio: "16:9"
  targetResolution: "1920x1080"
  nodes:
    - id: reference_boundary
      type: ConceptCard
      label: "Concept-only Inspiration Boundary"
      position: {x: 40, y: 40}
      size: {width: 320, height: 150}
      tags: [source]
      summary: "Use manifest-governed, file-backed, exact-vs-AI product patterns only. Do not copy external implementation artifacts, names, routes, or examples."
      inspect: "Reference source is a directional product pattern, not a code or schema dependency."
    - id: registry
      type: ContractCard
      label: "Canonical Vdeoxpln Registry"
      position: {x: 430, y: 40}
      size: {width: 340, height: 170}
      tags: [contract]
      owner: "canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"
      summary: "One normalized source lists ids, triggers, owners, tools, artifact policy, AI policy, validation, and publish projection."
    - id: pages_agent_skills
      type: InspectCard
      label: "Pages Agent Skills"
      position: {x: 850, y: -120}
      size: {width: 320, height: 140}
      tags: [route]
      route: "https://airvio.co/knowgrph/.well-known/agent-skills/index.json"
      summary: "Read-only published discovery generated from the registry."
    - id: local_mcp
      type: ToolCard
      label: "Local MCP Tool"
      position: {x: 850, y: 60}
      size: {width: 320, height: 140}
      tags: [route]
      tool: "knowgrph.vdeoxpln.list"
      summary: "Local stdio inspection and neutral routing preview."
    - id: browser_webmcp
      type: ToolCard
      label: "Browser WebMCP"
      position: {x: 850, y: 240}
      size: {width: 320, height: 140}
      tags: [route]
      summary: "Browser-local inspection tools expose current app state without claiming deployed mutation."
    - id: mainpanel_cards
      type: UiCard
      label: "MainPanel Capability Cards"
      position: {x: 850, y: 420}
      size: {width: 320, height: 140}
      tags: [route]
      summary: "MCP and Integrations views read generated registry metadata."
    - id: user_intent
      type: InputCard
      label: "Neutral User Intent"
      position: {x: 1240, y: 80}
      size: {width: 320, height: 150}
      tags: [source]
      summary: "Graph, document, renderer, research, commerce, MCP, or import goal."
      forbidden: "Do not select from route names, file names, absolute paths, demo ids, or provider keys."
    - id: neutral_router
      type: RouterCard
      label: "Vdeoxpln Router"
      position: {x: 1620, y: 80}
      size: {width: 340, height: 160}
      tags: [contract]
      owner: "buildKnowgrphVdeoxplnRoutingPlan()"
      summary: "Ranks packs using trigger metadata, content type, requested outputs, and current workspace state."
    - id: selected_pack
      type: DecisionCard
      label: "Selected Pack + Stage Plan"
      position: {x: 2020, y: 80}
      size: {width: 340, height: 170}
      tags: [contract]
      summary: "Emits semantic run key, execution stages, artifact policy, AI policy, owners, and validation hooks."
    - id: floating_chat
      type: HarnessCard
      label: "FloatingPanel Chat Harness"
      position: {x: 2440, y: -120}
      size: {width: 340, height: 150}
      tags: [ai]
      owner: "floatingPanelChatSubmitCoordinator.ts"
      summary: "AI-mediated packs use typed request construction, bounded retries, provider settings, and cost-visible state."
    - id: workspace_fs
      type: ArtifactCard
      label: "Workspace FS Artifact"
      position: {x: 2440, y: 80}
      size: {width: 340, height: 150}
      tags: [artifact]
      owner: "workspaceFs.ts"
      summary: "Material outputs become inspectable workspace documents instead of chat-only state."
    - id: source_files
      type: ArtifactCard
      label: "Source Files Compose"
      position: {x: 2840, y: 80}
      size: {width: 340, height: 150}
      tags: [artifact]
      owner: "applyComposedGraphFromSourceFiles.ts"
      summary: "Source-backed graph material uses existing signatures to avoid duplicate recomputation."
    - id: kgc_validation
      type: VerifyCard
      label: "KGC Validation"
      position: {x: 3240, y: -120}
      size: {width: 340, height: 150}
      tags: [verify]
      owner: "chatMarkdownValidation.ts"
      summary: "Structured KGC Markdown must validate before Canvas apply."
    - id: canvas_apply
      type: ApplyCard
      label: "Canvas Apply"
      position: {x: 3240, y: 80}
      size: {width: 340, height: 150}
      tags: [artifact]
      owner: "chatKgcCanvasApply.ts"
      summary: "Validated graph output enters Canvas through the existing apply bridge."
    - id: text_artifact
      type: ArtifactCard
      label: "Text Artifact"
      position: {x: 2440, y: 520}
      size: {width: 340, height: 150}
      tags: [artifact]
      owner: "workspaceFs.ts"
      summary: "The abstract vdeoxpln explanation is persisted as source-backed text before it becomes media."
    - id: rich_text_panel
      type: RichMediaPanel
      label: "Explainer Script"
      position: {x: 2840, y: 520}
      size: {width: 340, height: 190}
      tags: [artifact]
      richMediaActiveTab: "text"
      freezeConnectedOutput: true
      output: "## Explainer Script\nRead the canonical contract, select a pack from neutral signals, persist exact artifacts, then review XR text, image, and video panels before any optional media generation."
      summary: "Text tab for inspecting the generated script artifact."
    - id: rich_image_panel
      type: RichMediaPanel
      label: "Key Frame"
      position: {x: 3240, y: 520}
      size: {width: 340, height: 190}
      tags: [artifact]
      richMediaActiveTab: "image"
      freezeConnectedOutput: true
      imageUrl: "https://media.example.invalid/vdeoxpln-xr-key-frame.svg"
      summary: "Image tab for the reviewable key frame."
    - id: rich_video_panel
      type: RichMediaPanel
      label: "Explainer Video"
      position: {x: 3640, y: 520}
      size: {width: 340, height: 190}
      tags: [artifact]
      richMediaActiveTab: "video"
      freezeConnectedOutput: true
      videoUrl: "https://media.example.invalid/vdeoxpln-xr-explainer.mp4"
      summary: "Video tab for the approved render or fallback artifact."
    - id: run_manifest
      type: ManifestCard
      label: "Run Manifest"
      position: {x: 2840, y: 300}
      size: {width: 340, height: 160}
      tags: [artifact]
      owner: "knowgrphVdeoxplnChatArtifacts.ts"
      summary: "KGC companion manifest records pack id, semantic run key, status, provider/model/cost fields, and apply result."
    - id: validation
      type: VerifyCard
      label: "Focused Validation"
      position: {x: 3640, y: 80}
      size: {width: 340, height: 160}
      tags: [verify]
      commands: "vdeoxpln:check, focused unit slices, pages:check-sync, agent-ready:check"
      summary: "Checks fail on duplicate ids, stale aliases, missing owners, route-only routing, and publish drift."
    - id: cloudflare
      type: PublishCard
      label: "Cloudflare Proof Surface"
      position: {x: 4040, y: 80}
      size: {width: 340, height: 160}
      tags: [route]
      route: "https://airvio.co/knowgrph"
      summary: "Live read-only discovery mirrors Dev source truth after build, sync, and deploy."
  edges:
    - {id: e-boundary-registry, source: reference_boundary, sourceHandle: out, target: registry, targetHandle: in, label: "conceptual pattern only", type: deterministic, animated: true}
    - {id: e-registry-pages, source: registry, sourceHandle: out, target: pages_agent_skills, targetHandle: in, label: "generated metadata", type: publish, animated: true}
    - {id: e-registry-mcp, source: registry, sourceHandle: out, target: local_mcp, targetHandle: in, label: "tool contract", type: inspect, animated: true}
    - {id: e-registry-webmcp, source: registry, sourceHandle: out, target: browser_webmcp, targetHandle: in, label: "browser-local scope", type: inspect, animated: true}
    - {id: e-registry-mainpanel, source: registry, sourceHandle: out, target: mainpanel_cards, targetHandle: in, label: "capability cards", type: inspect, animated: true}
    - {id: e-intent-router, source: user_intent, sourceHandle: out, target: neutral_router, targetHandle: in, label: "intent + state", type: deterministic, animated: true}
    - {id: e-registry-router, source: registry, sourceHandle: out, target: neutral_router, targetHandle: in, label: "triggers + policies", type: deterministic, animated: true}
    - {id: e-router-pack, source: neutral_router, sourceHandle: out, target: selected_pack, targetHandle: in, label: "semantic run key", type: deterministic, animated: true}
    - {id: e-pack-chat, source: selected_pack, sourceHandle: out, target: floating_chat, targetHandle: in, label: "AI-assisted stage", type: ai_assist, animated: true}
    - {id: e-pack-workspace, source: selected_pack, sourceHandle: out, target: workspace_fs, targetHandle: in, label: "material artifact", type: deterministic, animated: true}
    - {id: e-chat-workspace, source: floating_chat, sourceHandle: out, target: workspace_fs, targetHandle: in, label: "draft/final output", type: ai_assist, animated: true}
    - {id: e-workspace-source-files, source: workspace_fs, sourceHandle: out, target: source_files, targetHandle: in, label: "source-backed compose", type: deterministic, animated: true}
    - {id: e-source-kgc, source: source_files, sourceHandle: out, target: kgc_validation, targetHandle: in, label: "KGC candidate", type: deterministic, animated: true}
    - {id: e-kgc-canvas, source: kgc_validation, sourceHandle: out, target: canvas_apply, targetHandle: in, label: "validated graph", type: deterministic, animated: true}
    - {id: e-pack-text-artifact, source: selected_pack, sourceHandle: out, target: text_artifact, targetHandle: in, label: "text artifact", type: deterministic, animated: true}
    - {id: e-text-rich-text, source: text_artifact, sourceHandle: out, target: rich_text_panel, targetHandle: in, label: "script", type: deterministic, animated: true}
    - {id: e-rich-text-image, source: rich_text_panel, sourceHandle: out, target: rich_image_panel, targetHandle: in, label: "key frame", type: deterministic, animated: true}
    - {id: e-rich-image-video, source: rich_image_panel, sourceHandle: out, target: rich_video_panel, targetHandle: in, label: "video slot", type: deterministic, animated: true}
    - {id: e-rich-video-validation, source: rich_video_panel, sourceHandle: out, target: validation, targetHandle: in, label: "reviewable media", type: deterministic, animated: true}
    - {id: e-workspace-manifest, source: workspace_fs, sourceHandle: out, target: run_manifest, targetHandle: in, label: "companion manifest", type: deterministic, animated: true}
    - {id: e-canvas-validation, source: canvas_apply, sourceHandle: out, target: validation, targetHandle: in, label: "apply result", type: deterministic, animated: true}
    - {id: e-manifest-validation, source: run_manifest, sourceHandle: out, target: validation, targetHandle: in, label: "status + cost fields", type: deterministic, animated: true}
    - {id: e-validation-cloudflare, source: validation, sourceHandle: out, target: cloudflare, targetHandle: in, label: "build -> sync -> deploy", type: publish, animated: true}
---

# Knowgrph Vdeoxpln - Interactive Visual Explanation

This document turns the vdeoxpln contract into an inspectable visual artifact.
It is both a readable Markdown explanation and a Knowgrph frontmatter-flow seed:
import or open it in Knowgrph to inspect the graph nodes, edges, policies, and
owner references on Canvas. The seed requests XR Mode and includes Rich Media
Panel cards for script text, key-frame image, and explainer-video review.

The external reference boundary is concept-only: manifest-governed skills,
file-backed intermediate artifacts, exact layers separated from optional AI
support, and QA before publication. No external source, schema, prompt, example,
asset, name, route, or prose is copied.

Live inspection entry points:

| Surface | What to inspect | Link or command |
|---|---|---|
| Published skill index | Current pack names, scopes, tools, and validation hashes | <https://airvio.co/knowgrph/.well-known/agent-skills/index.json> |
| Chat-to-Canvas skill | Browser-local mutating boundary and KGC path | <https://airvio.co/knowgrph/.well-known/agent-skills/knowgrph-chat-to-canvas.md> |
| Source Files skill | Published read-only document and Source Files inspection | <https://airvio.co/knowgrph/.well-known/agent-skills/knowgrph-source-files.md> |
| Local MCP | Registry snapshot and neutral route preview | `knowgrph.vdeoxpln.list` |
| Validation | Source, mirror, and live drift checks | `npm run vdeoxpln:check && npm run pages:check-sync && npm run agent-ready:check` |

## The Core Idea

A vdeoxpln is not a folder name and not a route shortcut. It is a signed
capability contract:

```mermaid
flowchart LR
  Intent["Neutral user intent and current state"]
  Registry["Canonical registry"]
  Router["Intent router"]
  Pack["Selected pack + bounded stage plan"]
  Exact["Deterministic exact layer"]
  AI["Optional AI-assisted layer"]
  Artifact["Workspace FS / Source Files artifact"]
  Canvas["KGC validation -> Canvas apply"]
  Verify["Focused validation + live proof"]

  Intent --> Router
  Registry --> Router
  Router --> Pack
  Pack --> Exact
  Pack --> AI
  Exact --> Artifact
  AI --> Artifact
  Artifact --> Canvas
  Canvas --> Verify

  classDef exact fill:#dcfce7,stroke:#16a34a,color:#14532d
  classDef ai fill:#f3e8ff,stroke:#9333ea,color:#581c87
  classDef artifact fill:#ccfbf1,stroke:#0f766e,color:#134e4a
  class Exact,Registry,Router,Pack exact
  class AI ai
  class Artifact,Canvas artifact
```

The important movement is from abstract request to file-backed evidence:

1. Intent is normalized from user request, content type, requested output, and
   current workspace state.
2. The router ranks registry packs. It ignores routes, filenames, absolute
   paths, demo ids, and provider keys.
3. The selected pack emits a bounded stage plan and semantic run key.
4. Exact work stays with deterministic owners: parsers, Source Files,
   Workspace FS, KGC validation, Canvas apply, MCP contracts, and Pages routes.
5. Optional AI work stays inside FloatingPanel Chat with typed request inputs,
   retry bounds, token/cost fields, and fallback artifacts.
6. Material output becomes a workspace/source artifact and can be inspected,
   edited, recomposed, validated, and published.

## Pack Matrix

| Pack | Use when | Exact layer | Optional AI layer | Artifact / inspection output |
|---|---|---|---|---|
| `knowgrph-source-files` | Read or inspect published documents and Source Files. | Published storage readers, shared document structure inspection, Source Files signatures. | None. | Source index, published Markdown, structure report. |
| `knowgrph-agent-ready` | Inspect health, MCP, WebMCP, A2A, OpenAPI, and readiness. | Agent-ready route metadata, tool contract, browser-local snapshots. | None. | Agent surface report and browser-local readiness snapshot. |
| `knowgrph-mcp-local` | Launch local UI, run local pipelines, inspect vdeoxpln, or use browser API bridge. | Local stdio MCP server and guarded local-root tools. | Optional only through local tool owners. | Local tool result, pipeline artifact, registry snapshot. |
| `knowgrph-chat-to-canvas` | Generate or apply graph material from chat through KGC. | KGC validation, Workspace FS, Source Files, Canvas apply, semantic-key owner. | Required for graph generation, bounded by chat settings and validation retries. | Validated KGC Markdown, workspace artifact, GraphData, Canvas topology snapshot. |
| `knowgrph-strybldr` | Convert image/media source units into editable storyboard cards and handoff artifacts. | Strybldr, Storyboard model, Source Files, Workspace FS, renderer config. | Optional refinement or media handoff only after user approval. | Strybldr Markdown, storyboard cards, media handoff prompt, Canvas snapshot. |
| `knowgrph-research-visual` | Explain a formula, mechanism, algorithm, proof, or research visual workflow. | Parser, Source Files, Storyboard model, renderer selection, semantic-key owner. | Optional drafting support through FloatingPanel Chat. | Mechanism brief, storyboard, renderer-neutral scene plan, validated KGC Markdown. |
| `knowgrph-commerce-readiness` | Inspect payment, x402, ACP, UCP, MPP, Stripe, and commerce readiness boundaries. | Commerce hub, payment worker metadata, payment SSOT. | None. | Commerce readiness report, route summary, agent-ready commerce metadata. |

## Interactive Inspection Cards

<details open>
<summary>1. How discovery stays accurate</summary>

Discovery is generated from the canonical registry, then projected to Pages
agent-skills, local MCP docs, browser WebMCP capability metadata, and MainPanel
cards. A new pack is valid only when its id is unique, every referenced owner
exists, every tool resolves to the local MCP or agent-ready contract, and no
compatibility alias is needed.

Inspect it live at the skill index route, or locally with
`knowgrph.vdeoxpln.list`.
</details>

<details>
<summary>2. How routing avoids hardcoded triggers</summary>

Routing reads neutral signals:

- user intent
- content type
- requested output family
- workspace state
- graph/source presence
- browser-local or local MCP capability metadata

Routing intentionally ignores:

- absolute local paths
- public routes
- filenames
- demo corpus names
- provider keys
- legacy aliases

If no pack matches, the correct output is a decline with the missing capability,
not a fallback fixture.
</details>

<details>
<summary>3. How a Chat-to-Canvas run becomes inspectable</summary>

The selected `knowgrph-chat-to-canvas` pack injects its execution contract into
the FloatingPanel Chat request. The provider response must pass KGC validation.
Finalization writes the canonical KGC workspace document, applies it through the
Canvas bridge, and writes a KGC companion run manifest with:

- selected pack id
- semantic run key
- status
- provider and model fields
- usage and finish reason fields
- Canvas apply result
- structured failure state when needed

The run manifest is the inspection handle for the abstract "skill execution"
concept.
</details>

<details>
<summary>4. How exact layers and AI layers stay separate</summary>

Exact layers are deterministic and source-owned: schemas, graph topology,
route metadata, parser output, source provenance, formula labels, KGC validation,
Canvas apply, and published discovery hashes.

AI layers are bounded support stages: drafting, enrichment, or cinematic
assistance. They must declare max attempts, token budget, cost visibility, and a
fallback path. If provider credentials are unavailable, exact artifacts still
exist and remain reviewable.
</details>

<details>
<summary>5. How publication avoids mirror drift</summary>

The production mirror is output, not source truth. The safe chain is:

`Dev registry and owners -> pages build -> prod mirror sync -> Cloudflare Pages deploy -> live agent-ready smoke`

Manual mirror-only edits are forbidden because they fork the contract.
`pages:check-sync` and `agent-ready:check` are the drift detectors.
</details>

## What Moves During A Run

```mermaid
sequenceDiagram
  participant U as User or agent
  participant R as Vdeoxpln router
  participant C as FloatingPanel Chat
  participant W as Workspace FS
  participant S as Source Files
  participant K as KGC validator
  participant G as Canvas graph
  participant M as Run manifest

  U->>R: intent + content type + current state
  R->>R: rank packs from canonical registry
  R-->>C: selected pack + semantic run key
  C->>C: typed provider request + bounded retries
  C->>K: candidate KGC Markdown
  K-->>W: validated or structured failure document
  W->>S: source-backed materialization
  S->>G: existing canvas apply path
  W->>M: companion manifest with status and cost fields
  M-->>U: inspectable run evidence
```

## Visual Vocabulary

| Shape in this document | Runtime meaning | Inspection question |
|---|---|---|
| Concept card | Product pattern or user intent. | Is this only a concept, or did it become a source-owned contract? |
| Contract card | Registry, router, policy, semantic-key, or owner map. | Is there one source of truth? |
| Tool card | MCP, WebMCP, Pages, or MainPanel capability. | Is the scope read-only, browser-local, or local-confirmed? |
| Artifact card | Workspace FS, Source Files, KGC, or run manifest. | Can the output be read and reviewed outside chat state? |
| Rich Media Panel | Text, image, or video inspection surface. | Does each media kind render through the shared panel owner? |
| Verify card | Tests, sync checks, smoke checks, or validation rules. | Would drift, stale ids, or route-only matching fail? |

## Runtime Owner Map

| Concern | Current owner | Why it matters |
|---|---|---|
| Registry, routing, semantic run key, generated Markdown | `canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs` | Prevents duplicate registries and stale aliases. |
| Source-backed run manifest | `canvas/src/features/chat/knowgrphVdeoxplnChatArtifacts.ts` | Records selected pack, status, cost fields, and Canvas apply result. |
| Chat prompt injection | `canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitRequest.ts` | Ensures provider-bound requests receive the selected pack contract. |
| Chat finalization | `canvas/src/features/chat/floatingPanelChat/useFinalizeAssistantSuccess.ts` | Persists KGC output, applies Canvas, and writes the companion manifest. |
| Workspace persistence | `canvas/src/features/workspace-fs/workspaceFs.ts` | Keeps material outputs reviewable and editable. |
| Source recomposition | `canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts` | Reuses signatures and avoids duplicate graph materialization. |
| KGC validation | `canvas/src/features/chat/chatMarkdownValidation.ts` | Blocks invalid graph material before apply. |
| Canvas apply | `canvas/src/features/chat/chatKgcCanvasApply.ts` | Keeps graph mutation on the existing apply path. |
| Local MCP list and routing preview | `mcp/local-tool-contract.js`, `mcp/server.js` | Gives local agents an inspectable registry snapshot without a new graph path. |
| Published discovery | `cloudflare/pages/knowgrph-agent-ready.mjs` | Serves generated skill metadata on Cloudflare Pages. |

## Inspectable Registry Snapshot

```json knowgrph-vdeoxpln-inspector
{
  "schema": "knowgrph-vdeoxpln-inspector/v1",
  "generated_for": "docs/knowgrph-vdeoxpln.md",
  "source_truth": "canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs",
  "reference_boundary": "Concept-only product patterns; no copied implementation artifacts, names, routes, examples, prompts, schemas, or prose.",
  "routing_ignores": ["routePath", "filePath", "absolutePath", "url", "demoName", "providerKey"],
  "visual_explainer": {
    "surfaceMode": "xr",
    "renderMode": "3d",
    "textArtifactToExplainerVideo": true,
    "richMediaPanelTabs": ["text", "image", "video"],
    "owner": "canvas/src/lib/render/richMediaSsot.ts"
  },
  "packs": [
    {
      "id": "knowgrph-source-files",
      "scope": "read-only-published",
      "mutation": "read-only",
      "outputs": ["source-files index", "published markdown", "document structure report"],
      "artifact_persistence": "published-read-only",
      "graph_materialization": "none"
    },
    {
      "id": "knowgrph-agent-ready",
      "scope": "read-only-published-and-browser-local",
      "mutation": "read-only",
      "outputs": ["agent surface inspection", "browser-local readiness snapshot", "metadata report"],
      "artifact_persistence": "inspection-only",
      "graph_materialization": "none"
    },
    {
      "id": "knowgrph-mcp-local",
      "scope": "local-stdio",
      "mutation": "local-confirmed",
      "outputs": ["local tool result", "pipeline artifact", "superagent report", "vdeoxpln registry snapshot"],
      "artifact_persistence": "local-workspace",
      "graph_materialization": "tool-owned"
    },
    {
      "id": "knowgrph-chat-to-canvas",
      "scope": "browser-local-ai-assisted",
      "mutation": "browser-local-user-mediated",
      "outputs": ["validated KGC Markdown", "workspace artifact", "GraphData", "canvas topology snapshot"],
      "artifact_persistence": "workspace-fs-and-source-files",
      "graph_materialization": "kgc-validation-to-canvas-apply"
    },
    {
      "id": "knowgrph-strybldr",
      "scope": "browser-local-source-backed",
      "mutation": "browser-local-user-mediated",
      "outputs": ["Strybldr Markdown", "Storyboard graph cards", "media handoff prompt", "canvas snapshot"],
      "artifact_persistence": "workspace-fs-and-source-files",
      "graph_materialization": "storyboard-graph"
    },
    {
      "id": "knowgrph-research-visual",
      "scope": "browser-local-ai-assisted",
      "mutation": "browser-local-user-mediated",
      "outputs": ["mechanism brief", "storyboard", "renderer-neutral scene plan", "validated KGC Markdown"],
      "artifact_persistence": "workspace-fs-and-source-files",
      "graph_materialization": "kgc-validation-to-canvas-apply"
    },
    {
      "id": "knowgrph-commerce-readiness",
      "scope": "read-only-published-and-browser-local",
      "mutation": "read-only",
      "outputs": ["commerce readiness report", "payment route summary", "agent-ready commerce metadata"],
      "artifact_persistence": "inspection-only",
      "graph_materialization": "none"
    }
  ],
  "validation": [
    "npm run vdeoxpln:check",
    "npm --prefix canvas run test:ci:unit -- vdeoxpln",
    "npm --prefix canvas run test:ci:unit -- mcp.server.localToolContract",
    "npm --prefix canvas run test:ci:unit -- chat.responseContract.request",
    "npm --prefix canvas run test:ci:unit -- chat.responseContract.storage.kgcFinalizeAppliesCanvasGraph",
    "npm run pages:check-sync",
    "KNOWGRPH_AGENT_READY_BASE_URL=https://airvio.co/knowgrph npm run agent-ready:check"
  ]
}
```

## Failure States To Inspect

| Failure | Correct behavior | Forbidden behavior |
|---|---|---|
| No matching neutral intent | Decline and report missing capability. | Use a hardcoded fallback fixture. |
| Route-only or filename-only input | Decline because route and file identity are ignored. | Select a pack from URL or path text. |
| Provider unavailable | Persist deterministic fallback or structured failure state. | Block exact layers or synthesize success. |
| Invalid KGC | Retry within bound, then persist failure. | Apply invalid graph data to Canvas. |
| Mirror drift | Fail sync check and regenerate from Dev. | Patch the production mirror by hand. |
| Stale pack id | Remove and validate source references. | Add compatibility alias tables. |

## Quick Manual Walkthrough

1. Open the live skill index and confirm seven canonical pack ids.
2. Open `knowgrph-chat-to-canvas.md` and inspect its browser-local mutation
   boundary.
3. In local MCP, call `knowgrph.vdeoxpln.list` with an `intentText` such as
   "generate a graph from source evidence and apply KGC to Canvas".
4. Confirm routing selects `knowgrph-chat-to-canvas` from neutral intent and
   state signals, not from the route or filename.
5. Run a browser-local Chat-to-Canvas flow.
6. Inspect the KGC workspace document and the sibling
   `kgc-output_*-vdeoxpln-run.md` manifest.
7. Confirm Canvas apply status, provider/model fields, usage summary, and
   failure state are visible in the manifest.

## Design Boundary

This document intentionally avoids:

- copying external skill names, schemas, prompts, examples, assets, or wording
- creating a second graph materialization path
- treating Cloudflare Pages as a mutating execution surface
- preserving stale ids through aliases
- hardcoding demo documents, provider keys, route labels, or local paths into
  runtime selection

The result is a Knowgrph-native explanation: abstract vdeoxpln ideas become a
frontmatter graph, a Mermaid flow, expandable inspection cards, a registry
snapshot, and a validation runbook, all anchored to current Knowgrph owners.
