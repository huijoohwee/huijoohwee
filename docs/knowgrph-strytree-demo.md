---
title: "Knowgrph Strytree Demo - Runnable Storytree Through Strybldr"
graphId: "md:knowgrph-strytree-demo-runnable-storytree-strybldr"
doc_type: "Strytree Runnable Demo"
date: "2026-05-30"
lang: en-US
implementation_contract: "docs/documents/knowgrph-strytree-prd-tad.md"
validation_input_forbid_hardcode_in_repo: true
copyhardcode_forbid: true
storytree_product: "strytree"
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "strybldr"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: false
kgDocumentStructureBaselineLock: false
kgStrybldrStoryboard: true
local_file_import_contract:
  - "Toolbar -> Launch -> Import local files"
  - "Select this Markdown document as validation input"
  - "Local import recognizes Strytree storytree payload inside Strybldr markdown"
  - "Canvas View Mode reports 2D Renderer: Strybldr"
  - "Strybldr shows Source, Storyboard, Elements, Storytree, and ForkCompare lanes"
  - "Toolbar Run all writes a structured handoff or fallback artifact without calling a browser-exposed provider key"
canvas_inspiration_contract:
  - "spatial card canvas with visible graph edges"
  - "side-by-side candidate comparison"
  - "scorecard-driven branch merge"
  - "no external page text, identifiers, payload, or styling copied into this file or repo code"
---

# Knowgrph Strytree Demo - Runnable Storytree Through Strybldr

This document is the external validation input for a Strytree storytree demo
that runs through the canonical `strybldr` renderer. It models the observed
prototype behavior without copying prototype code, branding, character names, or
page text into the repo.
The external prototype URL, prototype UI strings, and this document's fixture
payload are forbidden from being hardcoded into repo code, tests, parser
defaults, generated workspace paths, or implementation docs.

## What The Demo Must Prove

| Stage | Required behavior | Shared owner |
|---|---|---|
| Trigger | User opens `Toolbar -> Launch -> Import local files`. | `LaunchDropdown.impl.tsx` |
| Import | User selects this Markdown document. | `localImport.ts` |
| Parse | Strybldr parser reads `strybldr-storyboard` plus Strytree storytree snapshot. | `strybldrStoryboard.ts` |
| Render | Canvas toolbar reports `Canvas View Mode: 2D Renderer: Strybldr`. | shared renderer config |
| Storytree | Storytree cards derive edges from `parentNodeId`, not copied static edge data. | `strybldrStoryboard.ts` |
| Edge | Storytree and ForkCompare cards render visible connectors from active graph edges between cards. | `StoryboardCanvas.tsx` |
| Calculation | Storytree cards derive depth, child counts, access state, credit projections, like rate, and inherited assets from the imported JSON. | `strybldrStoryboard.ts` |
| Interaction | Storytree cards support status filtering, like/unlike, unlock with local credit-ledger debit, and continuation draft queueing. | `StoryboardCanvas.tsx` |
| Compare | ForkCompare renders up to three private candidate scorecards with cost, elapsed time, fallback, moderation, inherited assets, continuity, and publish eligibility. | `strybldrStoryboard.ts` |
| Merge | Publishing one candidate creates a durable child branch while rejected candidates remain private audit cards. | `strytreeWorkflow.ts` |
| Provider | Queue consumer can switch from local provider-safe manifest to server-credentialed PixVerse submit/poll when a Worker secret and image refs exist. | `cloudflare/workers/knowgrph-payment/strytreeApi.ts` |
| Webhook | Signed checkout webhook settles credits through the same token-ledger owner as the local settlement fixture. | `cloudflare/workers/knowgrph-payment/strytreeApi.ts` |
| Wallet | Wallet read returns committed credits and pending checkout state before webhook settlement. | `cloudflare/workers/knowgrph-payment/strytreeApi.ts` |
| Circuit | Provider budget breaker stops generation before debit or queue enqueue when the configured spend counter is exhausted. | `cloudflare/workers/knowgrph-payment/strytreeApi.ts` |
| Ledger | Durable Object actor owns credit-ledger mutation, balance checks, and idempotent replay when the binding is present. | `cloudflare/workers/knowgrph-payment/index.ts` |
| Run | Toolbar `Run all` compiles approved storytree cards into a provider-safe handoff. | `StrybldrFloatingPanelView.tsx` |
| Guard | Repo code consumes this file as input and must not copyhardcode its payload. | policy tests and E2E verifier |

## Runnable Storytree Seed

```json strybldr-storyboard
{
  "version": 1,
  "runId": "strytree-local-file-validation",
  "createdAtMs": 1780154300000,
  "notes": "External validation input for a Strytree storytree rendered by Strybldr. The payload is original and modelled from the PRD/TAD behavior, not copied from the prototype page.",
  "sources": [
    {
      "sourceUnitId": "strytree-prototype-contract",
      "workspacePath": "docs/documents/knowgrph-strytree-prd-tad.md",
      "relativePath": "knowgrph-strytree-prd-tad.md",
      "originalName": "Strytree PRD/TAD implementation contract",
      "mediaKind": "doc",
      "mimeHint": "text/markdown",
      "byteSize": 0,
      "textHash": "strytree-contract",
      "mediaUrl": "docs/documents/knowgrph-strytree-prd-tad.md"
    }
  ],
  "elements": [
    {
      "id": "strytree-element-visual-tree",
      "sourceUnitId": "strytree-prototype-contract",
      "label": "SVG storytree renderer",
      "confidence": 1,
      "sourceBox": null,
      "evidenceKind": "source-metadata",
      "provider": "fallback",
      "order": 1,
      "summary": "The story graph is rendered as explicit branch cards with parent-derived edges.",
      "action": "Keep the graph as a tree for MVP and derive links from parentNodeId.",
      "prompt": "Render a branching story universe with visible parent-child continuity."
    },
    {
      "id": "strytree-element-credit-quote",
      "sourceUnitId": "strytree-prototype-contract",
      "label": "Credit-token quote",
      "confidence": 0.94,
      "sourceBox": null,
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 2,
      "summary": "Generation cost is quoted before the user commits a branch continuation.",
      "action": "Treat wallet balance as read-only UI fed by a server-owned ledger.",
      "prompt": "Show a clear credit quote before any generation handoff."
    },
    {
      "id": "strytree-element-protected-unlock",
      "sourceUnitId": "strytree-prototype-contract",
      "label": "Protected branch unlock",
      "confidence": 0.91,
      "sourceBox": null,
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 3,
      "summary": "Protected branches expose synopsis first and require entitlement before full media access.",
      "action": "Route unlock through ledger, entitlement, creator credit, and platform fee records.",
      "prompt": "Represent locked branches as preview cards with an auditable unlock path."
    },
    {
      "id": "strytree-element-generation-harness",
      "sourceUnitId": "strytree-prototype-contract",
      "label": "Provider-safe generation harness",
      "confidence": 0.93,
      "sourceBox": null,
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 4,
      "summary": "PixVerse-style generation is represented by a typed harness boundary and structured fallback.",
      "action": "Never expose provider credentials in browser code.",
      "prompt": "Compile a bounded generation payload with inherited characters, scene notes, cost event, and fallback reason."
    }
  ],
  "storytree": {
    "storyId": "strytree-demo-frostline",
    "title": "Frostline Relay",
    "synopsis": "A near-future survival drama where each branch changes who controls the signal tower.",
    "tokenBalance": 120,
    "activeBranchCount": 6,
    "totalLikes": 418,
    "generationCostCredits": 5,
    "unlockCurrency": "credits",
    "nodes": [
      {
        "nodeId": "strytree_demo_root",
        "parentNodeId": null,
        "title": "Signal Tower Opens",
        "synopsis": "The settlement finds a working transmitter and must decide who sends the first message.",
        "prompt": "Open with a tense discovery around a cold signal tower and a fragile truce.",
        "authorName": "Knowgrph demo",
        "status": "hot",
        "duration": "00:18",
        "ageDays": 0,
        "isFreeWindow": true,
        "isProtected": false,
        "unlockPriceCredits": 0,
        "likes": 144,
        "impressions": 900,
        "paidUnlocks": 0,
        "ownAssetIds": ["asset_tower", "asset_radio"]
      },
      {
        "nodeId": "strytree_demo_engineer",
        "parentNodeId": "strytree_demo_root",
        "title": "Engineer Keeps The Key",
        "synopsis": "The engineer withholds the relay code to buy time for a safer evacuation.",
        "prompt": "Continue with the engineer choosing restraint over instant rescue.",
        "authorName": "Ari",
        "status": "active",
        "duration": "00:14",
        "ageDays": 1,
        "isFreeWindow": true,
        "isProtected": false,
        "unlockPriceCredits": 0,
        "likes": 86,
        "impressions": 610,
        "paidUnlocks": 0,
        "ownAssetIds": ["asset_engineer", "asset_keycard"]
      },
      {
        "nodeId": "strytree_demo_broadcast",
        "parentNodeId": "strytree_demo_root",
        "title": "Open Broadcast",
        "synopsis": "A public call for help brings allies, opportunists, and one unknown signal reply.",
        "prompt": "Branch into a fast public broadcast with uncertain consequences.",
        "authorName": "Mira",
        "status": "active",
        "duration": "00:16",
        "ageDays": 1,
        "isFreeWindow": false,
        "isProtected": true,
        "unlockPriceCredits": 8,
        "likes": 73,
        "impressions": 520,
        "paidUnlocks": 12,
        "ownAssetIds": ["asset_broadcast", "asset_unknown_reply"]
      },
      {
        "nodeId": "strytree_demo_scout",
        "parentNodeId": "strytree_demo_engineer",
        "title": "Scout Crosses The Ice",
        "synopsis": "A scout carries the relay code over a frozen canal while drones sweep overhead.",
        "prompt": "Show a quiet stealth continuation across ice and signal flares.",
        "authorName": "Len",
        "status": "hot",
        "duration": "00:20",
        "ageDays": 2,
        "isFreeWindow": false,
        "isProtected": true,
        "unlockPriceCredits": 6,
        "likes": 61,
        "impressions": 330,
        "paidUnlocks": 9,
        "ownAssetIds": ["asset_scout", "asset_ice"]
      },
      {
        "nodeId": "strytree_demo_decoy",
        "parentNodeId": "strytree_demo_broadcast",
        "title": "Decoy Signal",
        "synopsis": "The reply is a trap, so the crew builds a fake heat signature away from the shelter.",
        "prompt": "Turn the branch into a tactical decoy sequence with practical stakes.",
        "authorName": "Noor",
        "status": "active",
        "duration": "00:15",
        "ageDays": 3,
        "isFreeWindow": true,
        "isProtected": false,
        "unlockPriceCredits": 0,
        "likes": 38,
        "impressions": 270,
        "paidUnlocks": 0,
        "ownAssetIds": ["asset_decoy", "asset_heat"]
      },
      {
        "nodeId": "strytree_demo_failed_route",
        "parentNodeId": "strytree_demo_scout",
        "title": "Collapsed Route",
        "synopsis": "A draft branch is dropped after the path contradicts the established map.",
        "prompt": "Keep this as a visible dropped branch for moderation and audit handling.",
        "authorName": "Knowgrph demo",
        "status": "dropped",
        "duration": "00:09",
        "ageDays": 4,
        "isFreeWindow": false,
        "isProtected": true,
        "unlockPriceCredits": 0,
        "likes": 16,
        "impressions": 120,
        "paidUnlocks": 0,
        "ownAssetIds": ["asset_route"]
      }
    ],
    "candidateRuns": [
      {
        "candidateRunId": "strytree_demo_compare_engineer",
        "parentNodeId": "strytree_demo_engineer",
        "status": "completed",
        "maxCandidates": 3,
        "quotedCostCredits": 15,
        "scorecardMode": "cost_continuity",
        "candidates": [
          {
            "candidateId": "strytree_demo_candidate_quiet_evac",
            "title": "Quiet Evacuation Route",
            "synopsis": "The engineer delays the broadcast long enough to move families through a service tunnel.",
            "prompt": "Continue the branch as a restrained evacuation sequence with inherited radio and keycard assets.",
            "provider": "local-harness",
            "status": "succeeded",
            "creditCost": 5,
            "elapsedMs": 39000,
            "fallbackStatus": "none",
            "moderationStatus": "approved",
            "inheritedAssetCount": 4,
            "continuityScore": 0.87,
            "publishEligible": true,
            "selected": true,
            "notes": "Best continuity per credit for a grounded next branch."
          },
          {
            "candidateId": "strytree_demo_candidate_decoy_ping",
            "title": "Decoy Relay Ping",
            "synopsis": "A false signal draws drones away from the settlement but risks exposing the scout.",
            "prompt": "Continue with a tactical decoy beat and a clear cost of deception.",
            "provider": "local-harness",
            "status": "succeeded",
            "creditCost": 5,
            "elapsedMs": 47000,
            "fallbackStatus": "none",
            "moderationStatus": "approved",
            "inheritedAssetCount": 4,
            "continuityScore": 0.78,
            "publishEligible": true,
            "selected": false,
            "notes": "Higher conflict, weaker asset continuity."
          },
          {
            "candidateId": "strytree_demo_candidate_battery_trade",
            "title": "Battery Trade",
            "synopsis": "The crew trades the spare battery for safe passage and loses one chance to transmit.",
            "prompt": "Continue with a tense negotiation around scarce power and trust.",
            "provider": "local-harness",
            "status": "succeeded",
            "creditCost": 5,
            "elapsedMs": 56000,
            "fallbackStatus": "fallback-preview",
            "moderationStatus": "approved",
            "inheritedAssetCount": 3,
            "continuityScore": 0.69,
            "publishEligible": true,
            "selected": false,
            "notes": "Useful alternative kept private until selected."
          }
        ]
      }
    ]
  }
}
```

## Validation Commands

```bash
KNOWGRPH_FORBID_HARDCODE_INPUT="/path/to/knowgrph-strytree-demo.md" npm --prefix canvas run test:ci:unit -- policy.forbidHardcodedYouTubeUrlLiteral
KNOWGRPH_STRYTREE_DEMO_INPUT="/path/to/knowgrph-strytree-demo.md" npm --prefix canvas run test:ci:unit -- strytree.demo.forkCompareCanvasInput
KNOWGRPH_STRYTREE_DEMO_INPUT="/path/to/knowgrph-strytree-demo.md" npm --prefix canvas run test:ci:unit -- workspace.import.localFiles.strybldrRunnableRunAllSurface
KNOWGRPH_STRYTREE_DEMO_INPUT="/path/to/knowgrph-strytree-demo.md" npm --prefix canvas run test:ci:unit -- strytree.api.generationLivePixVersePolling
KNOWGRPH_STRYTREE_DEMO_INPUT="/path/to/knowgrph-strytree-demo.md" npm --prefix canvas run test:ci:unit -- strytree.api.checkoutSignedWebhookLedger
KNOWGRPH_STRYTREE_DEMO_INPUT="/path/to/knowgrph-strytree-demo.md" npm --prefix canvas run test:ci:unit -- strytree.api.walletPendingPayment
KNOWGRPH_STRYTREE_DEMO_INPUT="/path/to/knowgrph-strytree-demo.md" npm --prefix canvas run test:ci:unit -- strytree.api.generationBudgetCircuitBreaker
KNOWGRPH_STRYTREE_DEMO_INPUT="/path/to/knowgrph-strytree-demo.md" npm --prefix canvas run test:ci:unit -- strytree.api.creditLedgerDurableObject
KNOWGRPH_STRYTREE_DEMO_INPUT="/path/to/knowgrph-strytree-demo.md" KNOWGRPH_STRYTREE_E2E_MODE=local-file npm --prefix canvas run validate:strybldr-generated-video
```