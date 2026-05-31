---
title: "Knowgrph Vdeoxpln Demo - Interactive Visual Explanation"
graphId: "md:knowgrph-vdeoxpln-demo-interactive-visual-explanation"
doc_type: "Knowgrph Vdeoxpln Demo"
date: "2026-05-31"
lang: "en-US"
implementation_contract: "docs/documents/knowgrph-vdeoxpln-prd-tad.md"
source_truth: "canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"
validation_input_forbid_hardcode_in_repo: true
copyhardcode_forbid: true
kgCanvasSurfaceMode: "xr"
kgCanvasRenderMode: "3d"
kgCanvas3dMode: "xr"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: false
kgDocumentStructureBaselineLock: false
kgStrybldrStoryboard: true
local_file_import_contract:
  - "Toolbar -> Launch -> Import local files"
  - "Select this Markdown document as validation input"
  - "Local import recognizes the Strybldr storyboard payload"
  - "Canvas View Mode reports XR Mode"
  - "Strybldr shows Source, Storyboard, Elements, Storytree, and Explainer Video lanes"
  - "Rich Media Panel cards expose text, image, and video tabs for the explainer-video artifact"
  - "Toolbar Run all writes a structured handoff or fallback artifact through existing owners"
---

# Knowgrph Vdeoxpln Demo - Interactive Visual Explanation

This validation input turns the vdeoxpln contract into an inspectable visual
explanation. Import it into Knowgrph to verify that abstract workflow concepts
become source-backed cards, parent-derived tree edges, credit-aware branch
states, and a bounded media handoff without relying on copied reference strings,
route names, demo filenames, provider keys, or mirror-only patches.

## What The Demo Must Prove

| Stage | Required behavior | Shared owner |
|---|---|---|
| Import | The Markdown file is imported as a workspace document. | `workspaceFs.ts` |
| Parse | The `strybldr-storyboard` fence becomes graph data through the Strybldr parser. | `strybldrStoryboard.ts` |
| Source | Contract, registry, chat, and renderer owners appear as source-backed cards. | Source Files owners |
| Visualize | The vdeoxpln workflow appears as editable storyboard and storytree lanes. | shared Storyboard surface |
| Interact | Tree cards expose parent-derived edges, access state, credit projections, and inherited assets. | `buildStrybldrGraphData()` |
| Execute | Toolbar Run all compiles approved cards into a provider-safe handoff or fallback artifact. | `StrybldrFloatingPanelView.tsx` |
| Guard | Repo code consumes this document by input path and must not copy this payload into fixtures or runtime branches. | policy tests |

## Runnable Vdeoxpln Visual Seed

```json strybldr-storyboard
{
  "version": 1,
  "runId": "vdeoxpln-visual-explanation-demo",
  "createdAtMs": 1780246800000,
  "notes": "Neutral validation input for explaining vdeoxpln as source-backed dynamic visual artifacts.",
  "sources": [
    {
      "sourceUnitId": "vdeoxpln-contract-doc",
      "workspacePath": "docs/documents/knowgrph-vdeoxpln-prd-tad.md",
      "relativePath": "knowgrph-vdeoxpln-prd-tad.md",
      "originalName": "Vdeoxpln PRD/TAD",
      "mediaKind": "doc",
      "mimeHint": "text/markdown",
      "byteSize": 0,
      "textHash": "vdeoxpln-contract",
      "mediaUrl": "docs/documents/knowgrph-vdeoxpln-prd-tad.md"
    },
    {
      "sourceUnitId": "vdeoxpln-registry-owner",
      "workspacePath": "canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs",
      "relativePath": "knowgrphVdeoxplnContract.mjs",
      "originalName": "Canonical vdeoxpln registry",
      "mediaKind": "code",
      "mimeHint": "text/javascript",
      "byteSize": 0,
      "textHash": "vdeoxpln-registry",
      "mediaUrl": "canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"
    },
    {
      "sourceUnitId": "vdeoxpln-chat-owner",
      "workspacePath": "canvas/src/features/chat/knowgrphVdeoxplnChatArtifacts.ts",
      "relativePath": "knowgrphVdeoxplnChatArtifacts.ts",
      "originalName": "Vdeoxpln chat artifact owner",
      "mediaKind": "code",
      "mimeHint": "text/typescript",
      "byteSize": 0,
      "textHash": "vdeoxpln-chat-artifacts",
      "mediaUrl": "canvas/src/features/chat/knowgrphVdeoxplnChatArtifacts.ts"
    },
    {
      "sourceUnitId": "vdeoxpln-renderer-owner",
      "workspacePath": "canvas/src/features/strybldr/strybldrStoryboard.ts",
      "relativePath": "strybldrStoryboard.ts",
      "originalName": "Strybldr visual renderer owner",
      "mediaKind": "code",
      "mimeHint": "text/typescript",
      "byteSize": 0,
      "textHash": "vdeoxpln-visual-renderer",
      "mediaUrl": "canvas/src/features/strybldr/strybldrStoryboard.ts"
    }
  ],
  "elements": [
    {
      "id": "vdeoxpln-element-registry",
      "sourceUnitId": "vdeoxpln-registry-owner",
      "label": "Canonical registry",
      "confidence": 1,
      "sourceBox": null,
      "evidenceKind": "source-metadata",
      "provider": "fallback",
      "order": 1,
      "summary": "One normalized contract names packs, triggers, owners, tools, artifacts, AI policy, and validation.",
      "action": "Treat the registry as the only vdeoxpln identity source.",
      "prompt": "Show how a single registry fans out into local, browser, and published discovery surfaces."
    },
    {
      "id": "vdeoxpln-element-router",
      "sourceUnitId": "vdeoxpln-registry-owner",
      "label": "Neutral router",
      "confidence": 1,
      "sourceBox": null,
      "evidenceKind": "source-metadata",
      "provider": "fallback",
      "order": 2,
      "summary": "Skill selection uses intent, content type, requested outputs, and current state instead of route or filename matches.",
      "action": "Keep route, URL, and absolute path values as ignored context.",
      "prompt": "Animate selection from neutral request signals into one selected pack and a bounded stage plan."
    },
    {
      "id": "vdeoxpln-element-source-artifact",
      "sourceUnitId": "vdeoxpln-chat-owner",
      "label": "Source-backed artifact",
      "confidence": 0.98,
      "sourceBox": null,
      "evidenceKind": "source-metadata",
      "provider": "fallback",
      "order": 3,
      "summary": "Material outputs are persisted as workspace or Source Files artifacts before Canvas apply.",
      "action": "Record run manifests beside generated KGC workspace artifacts.",
      "prompt": "Show artifact cards moving through Workspace FS, Source Files, validation, and Canvas apply."
    },
    {
      "id": "vdeoxpln-element-exact-layer",
      "sourceUnitId": "vdeoxpln-contract-doc",
      "label": "Exact layer boundary",
      "confidence": 0.97,
      "sourceBox": null,
      "evidenceKind": "source-metadata",
      "provider": "fallback",
      "order": 4,
      "summary": "Exact graph, schema, formula, route, and provenance work stays deterministic.",
      "action": "Separate exact layers from optional drafting or cinematic support.",
      "prompt": "Highlight exact deterministic layers before any optional provider-assisted scene support."
    },
    {
      "id": "vdeoxpln-element-visual-tree",
      "sourceUnitId": "vdeoxpln-renderer-owner",
      "label": "Interactive explanation tree",
      "confidence": 0.96,
      "sourceBox": null,
      "evidenceKind": "source-metadata",
      "provider": "fallback",
      "order": 5,
      "summary": "Parent-derived tree cards make workflow forks, locked states, and audit-only branches inspectable.",
      "action": "Render the tree through Strybldr and shared Storyboard owners.",
      "prompt": "Create a dynamic visual explanation where each branch is an inspectable workflow decision."
    },
    {
      "id": "vdeoxpln-element-handoff",
      "sourceUnitId": "vdeoxpln-renderer-owner",
      "label": "Bounded handoff",
      "confidence": 0.95,
      "sourceBox": null,
      "evidenceKind": "source-metadata",
      "provider": "fallback",
      "order": 6,
      "summary": "Run all compiles approved cards into a provider-safe handoff with fallback state.",
      "action": "Expose cost, attempts, fallback, source references, and approved card order.",
      "prompt": "Compile only approved card fields into a concise video or visual explanation handoff."
    }
  ],
  "explainerVideo": {
    "mode": "xr",
    "title": "Text Artifact Explainer Video",
    "summary": "A source-backed text artifact becomes an inspectable XR storyboard with synchronized text, image, and video evidence panels.",
    "transcriptMarkdown": "## Visual Argument\nVdeoxpln become visible when the source contract, router, exact layer, dynamic visual plan, handoff, and validation gates are placed on one timed path.\n\n1. Read the canonical contract.\n2. Select by neutral intent and current state.\n3. Persist exact artifacts before optional media work.\n4. Review text, image, and video panels in XR Mode.\n5. Run only approved cards through the bounded handoff.",
    "storyboardPrompt": "Create a concise explainer video from the approved text artifact, exact owner cards, tree branches, and Rich Media Panel evidence.",
    "referenceImageUrl": "https://media.example.invalid/vdeoxpln-explainer-frame.svg",
    "videoUrl": "https://media.example.invalid/vdeoxpln-explainer-video.mp4",
    "panels": [
      {
        "panelId": "vdeoxpln_demo_rich_text",
        "title": "Explainer Script Panel",
        "activeTab": "text",
        "sourceNodeId": "vdeoxpln-contract-doc",
        "output": "## Script\nStart with the source contract, show how neutral routing selects a pack, then animate deterministic artifacts into an XR storyboard before any optional video step.",
        "summary": "Inspectable script text generated from the source-backed vdeoxpln contract.",
        "prompt": "Keep the narration tied to source owners, exact layers, and visible validation gates."
      },
      {
        "panelId": "vdeoxpln_demo_rich_image",
        "title": "Key Frame Panel",
        "activeTab": "image",
        "sourceNodeId": "vdeoxpln-renderer-owner",
        "imageUrl": "https://media.example.invalid/vdeoxpln-explainer-frame.svg",
        "summary": "Renderer-neutral key frame for the explainer-video plan.",
        "prompt": "Use the key frame only as visual support for the source-backed storyboard."
      },
      {
        "panelId": "vdeoxpln_demo_rich_video",
        "title": "Explainer Video Panel",
        "activeTab": "video",
        "sourceNodeId": "vdeoxpln-renderer-owner",
        "videoUrl": "https://media.example.invalid/vdeoxpln-explainer-video.mp4",
        "summary": "Playable video slot for the approved explainer handoff or fallback artifact.",
        "prompt": "Render or review the approved video artifact without inventing hidden sources."
      }
    ]
  },
  "storytree": {
    "storyId": "vdeoxpln-visual-explanation-tree",
    "title": "Vdeoxpln Visual Explanation Tree",
    "synopsis": "A neutral tree showing how source-backed vdeoxpln turn abstract workflow ideas into inspectable dynamic visuals.",
    "tokenBalance": 18,
    "activeBranchCount": 8,
    "totalLikes": 512,
    "generationCostCredits": 5,
    "unlockCurrency": "credits",
    "nodes": [
      {
        "nodeId": "vdeoxpln_demo_registry",
        "parentNodeId": null,
        "title": "Registry Source",
        "synopsis": "The canonical registry provides pack ids, owners, tools, artifact policy, AI policy, and validation.",
        "prompt": "Start with one source-owned registry feeding every local and published vdeoxpln surface.",
        "authorName": "Knowgrph",
        "status": "hot",
        "duration": "00:12",
        "ageDays": 0,
        "isFreeWindow": true,
        "isProtected": false,
        "unlockPriceCredits": 0,
        "likes": 126,
        "impressions": 630,
        "paidUnlocks": 0,
        "ownAssetIds": ["contract", "registry"]
      },
      {
        "nodeId": "vdeoxpln_demo_discovery",
        "parentNodeId": "vdeoxpln_demo_registry",
        "title": "Discovery Surfaces",
        "synopsis": "Local MCP, browser inspection, MainPanel cards, and published agent skills read the same normalized pack metadata.",
        "prompt": "Show one registry projecting to multiple read-only discovery surfaces.",
        "authorName": "Knowgrph",
        "status": "active",
        "duration": "00:11",
        "ageDays": 0,
        "isFreeWindow": true,
        "isProtected": false,
        "unlockPriceCredits": 0,
        "likes": 78,
        "impressions": 420,
        "paidUnlocks": 0,
        "ownAssetIds": ["local-mcp", "browser-inspect", "published-metadata"]
      },
      {
        "nodeId": "vdeoxpln_demo_router",
        "parentNodeId": "vdeoxpln_demo_registry",
        "title": "Neutral Router",
        "synopsis": "Intent, content type, requested outputs, and current state select the pack; routes and file names are ignored.",
        "prompt": "Visualize request signals being ranked into a selected pack and stage plan.",
        "authorName": "Knowgrph",
        "status": "active",
        "duration": "00:14",
        "ageDays": 0,
        "isFreeWindow": true,
        "isProtected": false,
        "unlockPriceCredits": 0,
        "likes": 91,
        "impressions": 455,
        "paidUnlocks": 0,
        "ownAssetIds": ["intent", "state-signals", "semantic-run-key"]
      },
      {
        "nodeId": "vdeoxpln_demo_exact_layer",
        "parentNodeId": "vdeoxpln_demo_router",
        "title": "Exact Layer First",
        "synopsis": "Graph topology, schema, labels, source provenance, and route metadata are deterministic before any optional model help.",
        "prompt": "Demonstrate exact graph and provenance layers locking before optional visual enrichment.",
        "authorName": "Knowgrph",
        "status": "hot",
        "duration": "00:16",
        "ageDays": 0,
        "isFreeWindow": true,
        "isProtected": false,
        "unlockPriceCredits": 0,
        "likes": 88,
        "impressions": 352,
        "paidUnlocks": 0,
        "ownAssetIds": ["exact-layer", "provenance", "semantic-key"]
      },
      {
        "nodeId": "vdeoxpln_demo_dynamic_visual",
        "parentNodeId": "vdeoxpln_demo_exact_layer",
        "title": "Dynamic Visual Plan",
        "synopsis": "The abstract workflow becomes a timed visual model with cards, tree edges, motion notes, and exact-vs-optional boundaries.",
        "prompt": "Turn the exact workflow into an inspectable dynamic visual plan with clear card order.",
        "authorName": "Knowgrph",
        "status": "locked",
        "duration": "00:18",
        "ageDays": 0,
        "isFreeWindow": false,
        "isProtected": true,
        "unlockPriceCredits": 7,
        "likes": 52,
        "impressions": 260,
        "paidUnlocks": 5,
        "ownAssetIds": ["visual-plan", "motion-notes"]
      },
      {
        "nodeId": "vdeoxpln_demo_handoff",
        "parentNodeId": "vdeoxpln_demo_dynamic_visual",
        "title": "Approved Handoff",
        "synopsis": "Run all compiles approved cards, source references, cost fields, max attempts, and fallback state into one structured handoff.",
        "prompt": "Build a concise handoff only from approved source-backed cards and visible policy fields.",
        "authorName": "Knowgrph",
        "status": "active",
        "duration": "00:15",
        "ageDays": 0,
        "isFreeWindow": false,
        "isProtected": true,
        "unlockPriceCredits": 6,
        "likes": 45,
        "impressions": 210,
        "paidUnlocks": 4,
        "ownAssetIds": ["handoff", "fallback"]
      },
      {
        "nodeId": "vdeoxpln_demo_qa",
        "parentNodeId": "vdeoxpln_demo_handoff",
        "title": "QA Proof",
        "synopsis": "Validation checks source truth, owner existence, semantic keys, artifact state, and publish projection before release.",
        "prompt": "Show validation gates catching drift, duplicates, stale aliases, and route-only selection.",
        "authorName": "Knowgrph",
        "status": "active",
        "duration": "00:13",
        "ageDays": 0,
        "isFreeWindow": true,
        "isProtected": false,
        "unlockPriceCredits": 0,
        "likes": 64,
        "impressions": 320,
        "paidUnlocks": 0,
        "ownAssetIds": ["validation", "drift-check"]
      },
      {
        "nodeId": "vdeoxpln_demo_publish",
        "parentNodeId": "vdeoxpln_demo_qa",
        "title": "Published Proof Surface",
        "synopsis": "After build and sync, published read-only metadata mirrors the Dev source registry.",
        "prompt": "Close with the generated public proof surface matching the registry hash.",
        "authorName": "Knowgrph",
        "status": "active",
        "duration": "00:12",
        "ageDays": 0,
        "isFreeWindow": true,
        "isProtected": false,
        "unlockPriceCredits": 0,
        "likes": 37,
        "impressions": 185,
        "paidUnlocks": 0,
        "ownAssetIds": ["publish", "agent-skills"]
      },
      {
        "nodeId": "vdeoxpln_demo_route_only_refusal",
        "parentNodeId": "vdeoxpln_demo_router",
        "title": "Route-Only Refusal",
        "synopsis": "A route name, absolute path, or demo filename without neutral intent is declined instead of backfilled.",
        "prompt": "Show the router refusing a route-only input and explaining the missing capability signal.",
        "authorName": "Knowgrph",
        "status": "dropped",
        "duration": "00:09",
        "ageDays": 0,
        "isFreeWindow": true,
        "isProtected": false,
        "unlockPriceCredits": 0,
        "likes": 12,
        "impressions": 190,
        "paidUnlocks": 0,
        "ownAssetIds": ["guardrail"]
      },
      {
        "nodeId": "vdeoxpln_demo_budget_hold",
        "parentNodeId": "vdeoxpln_demo_dynamic_visual",
        "title": "Budget Hold",
        "synopsis": "A protected optional refinement stays visible for review but cannot run until the credit quote is approved.",
        "prompt": "Represent optional enrichment as a locked branch with explicit credit projection and fallback state.",
        "authorName": "Knowgrph",
        "status": "draft",
        "duration": "00:10",
        "ageDays": 0,
        "isFreeWindow": false,
        "isProtected": true,
        "unlockPriceCredits": 22,
        "likes": 19,
        "impressions": 95,
        "paidUnlocks": 0,
        "ownAssetIds": ["budget", "review-hold"]
      }
    ]
  }
}
```

## Expected Inspection Result

After import, the parsed graph should expose:

- `kgCanvasSurfaceMode=xr`
- `kgCanvasRenderMode=3d`
- `kgCanvas3dMode=xr`
- one Source lane containing the contract and owner references
- one Storyboard lane generated from the source units
- one Elements lane for registry, router, source artifact, exact layer, visual tree, and handoff cards
- one Storytree lane with parent-derived edges, protected branch access state, budget projections, dropped-branch audit visibility, and inherited assets
- one Explainer Video lane with Rich Media Panel cards for text, image, and video
- one Run all handoff that uses only approved card fields and source references

The repo must treat this file as external validation input. Runtime code and
tests may read it by caller-supplied path, but must not copy its node ids,
titles, prompts, source hashes, or story payload into implementation fixtures.
