# Knowgrph Local MCP Skill

Use this skill when: Expose local UI launch, pipeline, GraphRAG, superagent, browser bridge, and vdeoxpln inspection tools through the stdio MCP server.

## Contract

- Vdeoxpln id: `knowgrph-mcp-local`
- Contract version: `knowgrph-vdeoxpln/v0.1`
- Semantic key: `kgvx_ce53c914`
- Scope: `local-stdio`
- Mutation boundary: `local-confirmed`

## Triggers

- browser api
- graphrag
- launch canvas
- list vdeoxpln
- local mcp
- run pipeline
- superagent

## Inputs

- browser API runtime
- graph data
- local root
- pipeline config
- workspace file

## Outputs

- local tool result
- pipeline artifact
- superagent report
- vdeoxpln registry snapshot

## Tools

Published tools:
- none

Browser-local tools:
- none

Local MCP tools:
- knowgrph.browser_api.run
- knowgrph.graphrag_pipeline
- knowgrph.pipeline
- knowgrph.superagent.run
- knowgrph.ui.launch
- knowgrph.ui.stop
- knowgrph.vdeoxpln.list

## Workflow

- List local tools from the shared local MCP contract.
- Run only path-guarded local-root operations.
- Summarize artifacts and registry metadata in the MCP result.

## Source Owners

- canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs
- knowgrph_parser/superagent_harness.py
- mcp/local-tool-contract.js
- mcp/README.md
- mcp/server.js

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
