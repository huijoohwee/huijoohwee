# Knowgrph Local MCP Skill

Use this skill when: Expose Knowgrph-owned local Source Files, Agentic Canvas OS docs invocation, UI, pipeline, SuperAgent, video-remix, browser bridge, SEA-LION, HTML video, visual annotation, memory, probe-tree, showrunner, OS status, and vdeoxpln tools through the stdio MCP server.

## Contract

- Vdeoxpln id: `knowgrph-mcp-local`
- Contract version: `knowgrph-vdeoxpln/v0.1`
- Semantic key: `kgvx_d89abe40`
- Scope: `local-stdio`
- Mutation boundary: `local-confirmed`

## Triggers

- @
- /
- #
- agentic canvas os docs
- browser api
- graphrag
- html video
- launch canvas
- list vdeoxpln
- local mcp
- memory layer
- os status
- probe tree
- run pipeline
- sealion sidecar
- showrunner
- superagent
- video remix
- visual annotation

## Inputs

- agentic canvas os invocation token
- annotation asset
- browser API runtime
- creative brief
- graph data
- local root
- memory scope
- pipeline config
- probe branch
- reference URL
- render spec
- source cards
- Southeast Asian language text
- workspace file

## Outputs

- Agentic Canvas OS docs invocation result
- annotation result
- local tool result
- memory result
- OS status snapshot
- pipeline artifact
- probe checkpoint
- render manifest
- SEA-LION sidecar result
- showrunner artifact
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
- knowgrph.agentic_canvas_os.docs.invoke
- knowgrph.annotate.image
- knowgrph.annotate.video_frame
- knowgrph.browser_api.run
- knowgrph.graphrag_pipeline
- knowgrph.html_video.render
- knowgrph.memory.add
- knowgrph.memory.assemble_prompt
- knowgrph.memory.extract_procedural
- knowgrph.memory.materialize_user_model
- knowgrph.memory.search
- knowgrph.os.status
- knowgrph.pipeline
- knowgrph.probe.evolve
- knowgrph.probe.generate
- knowgrph.probe.select
- knowgrph.sandbox.policy.authorize
- knowgrph.sandbox.policy.validate
- knowgrph.showrunner.approve_stage
- knowgrph.showrunner.get_artifact
- knowgrph.showrunner.post_choice
- knowgrph.showrunner.run_status
- knowgrph.showrunner.start_run
- knowgrph.showrunner.submit_critique
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
- Resolve Agentic Canvas OS /, #, and @ docs invocations from the sibling docs SSOT.
- Forward SEA-LION regional language, localization, and safety calls to the hosted sidecar with server-owned auth.
- Summarize artifacts and registry metadata in the MCP result.

## Source Owners

- canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs
- knowgrph_parser/superagent_harness.py
- mcp/agentic-canvas-os-docs-runtime.js
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
