# AgenticGraph Local MCP Skill

Use this skill when: Expose AgenticGraph-owned local Source Files, Agentic Canvas OS docs invocation, deterministic repository packing, managed implementation runs, UI, pipeline, SuperAgent, video-remix, browser bridge, SEA-LION, HTML video, visual annotation, memory, probe-tree, showrunner, OS status, and vdeoxpln tools through the stdio MCP server.

## Contract

- Vdeoxpln id: `agenticgraph-mcp-local`
- Contract version: `agenticgraph-vdeoxpln/v0.1`
- Semantic key: `kgvx_10eb36e1`
- Scope: `local-stdio`
- Mutation boundary: `local-confirmed`

## Triggers

- @
- @implementation-run
- @repository-root
- @runtime-proof
- @work-item
- /
- /implementation.run
- /repository.pack
- #
- #managed-implementation-run
- #repository-packing
- agentic canvas os docs
- browser api
- graphrag
- html video
- launch canvas
- list vdeoxpln
- local mcp
- managed implementation run
- memory layer
- os status
- probe tree
- repository pack
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
- repository pack bounds
- source cards
- Southeast Asian language text
- workspace file

## Outputs

- Agentic Canvas OS docs invocation result
- annotation result
- content-addressed repository pack metadata
- durable implementation-run state
- local tool result
- memory result
- OS status snapshot
- pipeline artifact
- probe checkpoint
- render manifest
- review-ready pull-request handoff
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
- agenticgraph.agent_team.control
- agenticgraph.agent_team.list
- agenticgraph.agent_team.plan
- agenticgraph.agent_team.start
- agenticgraph.agentic_canvas_os.docs.invoke
- agenticgraph.agentic_sdlc.observe
- agenticgraph.annotate.image
- agenticgraph.annotate.video_frame
- agenticgraph.application.catalog
- agenticgraph.application.execute
- agenticgraph.application.plan
- agenticgraph.browser_api.run
- agenticgraph.ecs.decision_persist
- agenticgraph.ecs.session_start
- agenticgraph.ecs.world_tick
- agenticgraph.file.sync
- agenticgraph.geospatial.command
- agenticgraph.git.run
- agenticgraph.graphrag_pipeline
- agenticgraph.html_video.render
- agenticgraph.implementation_run.control
- agenticgraph.implementation_run.list
- agenticgraph.implementation_run.plan
- agenticgraph.implementation_run.start
- agenticgraph.knowledge_graph.explain_edge
- agenticgraph.knowledge_graph.ingest
- agenticgraph.knowledge_graph.parser_generate
- agenticgraph.knowledge_graph.query
- agenticgraph.memory.add
- agenticgraph.memory.assemble_prompt
- agenticgraph.memory.compact
- agenticgraph.memory.extract_procedural
- agenticgraph.memory.invoke
- agenticgraph.memory.materialize_user_model
- agenticgraph.memory.search
- agenticgraph.memory.write
- agenticgraph.os.status
- agenticgraph.payment.event.settle
- agenticgraph.payment.intent.create
- agenticgraph.payment.rail.select
- agenticgraph.payment.readiness
- agenticgraph.payment.receipt.project
- agenticgraph.payment.reconcile
- agenticgraph.payment.refund
- agenticgraph.payment.status
- agenticgraph.pipeline
- agenticgraph.probe.evolve
- agenticgraph.probe.generate
- agenticgraph.probe.select
- agenticgraph.repository.pack
- agenticgraph.sandbox.policy.authorize
- agenticgraph.sandbox.policy.validate
- agenticgraph.session.search
- agenticgraph.showrunner.approve_stage
- agenticgraph.showrunner.get_artifact
- agenticgraph.showrunner.post_choice
- agenticgraph.showrunner.run_status
- agenticgraph.showrunner.start_run
- agenticgraph.showrunner.submit_critique
- agenticgraph.skill.evolve
- agenticgraph.sme.broker.draft_nudge
- agenticgraph.sme.marketplace.match
- agenticgraph.sme.multilingual.adapt
- agenticgraph.sme.source.normalize
- agenticgraph.sme.trigger.evaluate
- agenticgraph.superagent.run
- agenticgraph.tool.call
- agenticgraph.tool.catalog
- agenticgraph.tool.describe
- agenticgraph.tool.search
- agenticgraph.ui.launch
- agenticgraph.ui.stop
- agenticgraph.user.profile
- agenticgraph.vdeoxpln.list
- agenticgraph.video_remix.run
- agenticgraph.voice.studio
- agenticgraph.workspace_artifact.apply
- agenticgraph.workspace_artifact.plan
- export.publish
- fetch
- sealion.detect_language_variant
- sealion.safety_check
- sealion.translate_localize
- search
- sme_care_agent_status

## Workflow

- List local tools from the shared local MCP contract.
- Run only path-guarded local-root operations.
- Run video-remix orchestration as an approval-gated local manifest before any paid provider call.
- Resolve Agentic Canvas OS /, #, and @ docs invocations from the sibling docs SSOT.
- Pack the Git-inventoried host repository into bounded, binary-aware, content-addressed Markdown without model or network calls.
- Forward SEA-LION regional language, localization, and safety calls to the hosted sidecar with server-owned auth.
- Summarize artifacts and registry metadata in the MCP result.

## Source Owners

- agenticgraph_parser/superagent_harness.py
- canvas/src/features/agent-ready/agenticgraphVdeoxplnContract.mjs
- mcp/agentic-canvas-os-docs-runtime.js
- mcp/director-lanes.js
- mcp/director-workflow.js
- mcp/local-tool-contract.js
- mcp/README.md
- mcp/repository-pack-runtime.js
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

- Keep behavior source-owned in the listed AgenticGraph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
