# Knowgrph Local MCP Skill

Use this skill when: Expose local UI launch, pipeline, GraphRAG, superagent, Agentic Canvas OS planning, video-remix run planning, browser bridge, SEA-LION sidecar, and vdeoxpln inspection tools through the stdio MCP server.

## Contract

- Vdeoxpln id: `knowgrph-mcp-local`
- Contract version: `knowgrph-vdeoxpln/v0.1`
- Semantic key: `kgvx_db12ae64`
- Scope: `local-stdio`
- Mutation boundary: `local-confirmed`

## Triggers

- agentic canvas os
- browser api
- graphrag
- launch canvas
- list vdeoxpln
- local mcp
- run pipeline
- sealion sidecar
- superagent
- video remix

## Inputs

- browser API runtime
- graph data
- local root
- pipeline config
- reference URL
- source cards
- Southeast Asian language text
- workspace file

## Outputs

- agentic canvas os dashboard plan
- local tool result
- pipeline artifact
- SEA-LION sidecar result
- superagent report
- vdeoxpln registry snapshot
- video remix run manifest

## Tools

Published tools:
- none

Browser-local tools:
- none

Local MCP tools:
- fetch
- knowgrph.browser_api.run
- knowgrph.graphrag_pipeline
- knowgrph.pipeline
- knowgrph.superagent.run
- knowgrph.ui.launch
- knowgrph.ui.stop
- knowgrph.vdeoxpln.list
- knowgrph.video_remix.run
- sealion.detect_language_variant
- sealion.safety_check
- sealion.translate_localize
- search

## Workflow

- List local tools from the shared local MCP contract.
- Run only path-guarded local-root operations.
- Run video-remix orchestration as an approval-gated local manifest before any paid provider call.
- Forward SEA-LION regional language, localization, and safety calls to the hosted sidecar with server-owned auth.
- Summarize artifacts and registry metadata in the MCP result.

## Source Owners

- canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs
- knowgrph_parser/superagent_harness.py
- mcp/director-lanes.js
- mcp/director-workflow.js
- mcp/local-tool-contract.js
- mcp/README.md
- mcp/server.js
- mcp/video-remix-runtime.js

## Artifact Policy

- Persistence: `local-workspace`
- Graph materialization: `tool-owned`
- Semantic-key inputs:
- localToolNames
- rootScope
- artifactList

## AI Policy

- Mode: `optional-via-local-tools`
- Max attempts: `1`
- Token budget: `tool-owned`
- Fallback: Return local command failure and detected artifacts.

## Validation

- mcpLocalToolContract
- vdeoxpln:check

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
