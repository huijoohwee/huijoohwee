---
title: "Knowgrph GitGraph Demo - YAML Mermaid Frontmatter Pipeline"
graphId: "md:knowgrph-gitgraph-demo"
doc_type: "GitGraph Demo"
date: "2026-06-03"
lang: "en-US"
schema: "kgc-computing-flow/v1"

implementation_contract: "/Users/huijoohwee/Documents/GitHub/knowgrph/docs/documents/knowgrph-yaml-mermaid-gitgraph-frontmatter-prd-tad.md"
source_truth:
  - "/Users/huijoohwee/Documents/GitHub/knowgrph/grph-shared/src/markdown/mermaidInput.ts"
  - "/Users/huijoohwee/Documents/GitHub/knowgrph/canvas/src/lib/parsers/markdownJsonLd.impl.ts"
  - "/Users/huijoohwee/Documents/GitHub/knowgrph/canvas/src/lib/mermaid/mermaidGitGraph.ts"
  - "/Users/huijoohwee/Documents/GitHub/knowgrph/canvas/src/components/MermaidGitGraphCanvas.tsx"
demo_status: "local published-doc demo; no Cloudflare deploy claim"
deployed_api_claim: false
live_route_validation_required_before_claim: true

kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "gitGraph"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: false
kgDocumentStructureBaselineLock: false

mermaid: |
  ---
  config:
    theme: base
    logLevel: info
  ---
  gitGraph:
    commit id:"source_md" tag:"md"
    branch ingestion
    checkout ingestion
    commit id:"frontmatter_yaml"
    commit id:"mermaid_payload" type:HIGHLIGHT
    checkout main
    merge ingestion id:"ingest_ready" tag:"ingested"
    branch parsing
    checkout parsing
    commit id:"diagram_kind"
    commit id:"mermaid_diagram" tag:"gitgraph"
    commit id:"no_flow_topology" type:REVERSE
    checkout main
    merge validation id:"e2e_proof" tag:"demo"
    branch rendering
    checkout rendering
    commit id:"renderer_id"
    commit id:"svg_cache"
    commit id:"gitgraph_surface" type:HIGHLIGHT
    checkout main
    merge rendering id:"render_ready" tag:"rendered"
    branch validation
    checkout validation
    commit id:"focused_tests"
    commit id:"browser_smoke"
    checkout main
    merge validation id:"e2e_proof" tag:"demo"
---

# Knowgrph GitGraph Demo

This document is a runnable frontmatter demo for **Toolbar -> Canvas View Mode -> 2D Renderer: GitGraph**.

It demonstrates the Dev-source pipeline described by the implementation contract:

| Stage | Frontmatter signal | Expected Knowgrph behavior |
|---|---|---|
| Ingestion | `kgCanvas2dRenderer: "gitGraph"` and top-level `mermaid: |` | The Markdown loader keeps the source text and selects the canonical GitGraph renderer. |
| Parsing | `gitGraph:` after a Mermaid config header | The shared Mermaid detector tags the payload as `diagramKind: "gitgraph"`. |
| Isolation | GitGraph commands such as `commit`, `branch`, `checkout`, and `merge` | The Flowchart parser does not emit `MermaidNode` or Flow topology from GitGraph syntax. |
| Rendering | Preserved frontmatter Mermaid code | `MermaidGitGraphCanvas` resolves the GitGraph slice and renders it through the shared Mermaid SVG cache. |

## How To Run

1. Open this Markdown file in Knowgrph.
2. Keep Canvas View Mode on `2D`.
3. Select **2D Renderer: GitGraph** from the Canvas View Mode menu.
4. Confirm the Git history diagram renders from the frontmatter Mermaid block.

## Expected Diagram

The GitGraph should show `main` receiving merges from four branches:

| Branch | Pipeline stage | Highlight |
|---|---|---|
| `ingestion` | YAML and Mermaid source capture | `mermaid_payload` is highlighted. |
| `parsing` | Diagram-kind detection and topology isolation | `no_flow_topology` is marked reverse. |
| `rendering` | Renderer id, SVG cache, and GitGraph surface | `gitgraph_surface` is highlighted. |
| `validation` | Focused tests and browser smoke | `e2e_proof` is tagged as the demo merge. |

## Contract Notes

- The Mermaid source is the top-level frontmatter `mermaid` value.
- The renderer id is the canonical `gitGraph` value, not a downstream alias fixture.
- GitGraph stays diagram-native; this file does not ask Knowgrph to convert GitGraph commits into Flow nodes.
- This file is a local published-doc artifact only. It does not claim a Prod mirror sync or Cloudflare deployment.
