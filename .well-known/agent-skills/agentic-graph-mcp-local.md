# agentic-graph Local MCP Skill

Use this skill when: Expose agentic-graph-owned local Source Files, Agentic Canvas OS docs invocation, deterministic repository packing, managed implementation runs, UI, pipeline, SuperAgent, video-remix, browser bridge, SEA-LION, HTML video, visual annotation, memory, probe-tree, showrunner, OS status, and vdeoxpln tools through the stdio MCP server.

## Contract

- Vdeoxpln id: `agentic-graph-mcp-local`
- Contract version: `agentic-graph-vdeoxpln/v0.1`
- Semantic key: `kgvx_a221bd5a`
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
- agentic-graph.adlc.observe
- agentic-graph.agent_graph.explain_edge
- agentic-graph.agent_graph.ingest
- agentic-graph.agent_graph.parser_generate
- agentic-graph.agent_graph.query
- agentic-graph.agent_team.control
- agentic-graph.agent_team.list
- agentic-graph.agent_team.plan
- agentic-graph.agent_team.start
- agentic-graph.agentic_canvas_os.docs.invoke
- agentic-graph.annotate.image
- agentic-graph.annotate.video_frame
- agentic-graph.application.catalog
- agentic-graph.application.execute
- agentic-graph.application.plan
- agentic-graph.browser_api.run
- agentic-graph.ecs.decision_persist
- agentic-graph.ecs.session_start
- agentic-graph.ecs.world_tick
- agentic-graph.file.sync
- agentic-graph.geospatial.command
- agentic-graph.git.run
- agentic-graph.graphrag_pipeline
- agentic-graph.html_video.render
- agentic-graph.implementation_run.control
- agentic-graph.implementation_run.list
- agentic-graph.implementation_run.plan
- agentic-graph.implementation_run.start
- agentic-graph.memory.add
- agentic-graph.memory.assemble_prompt
- agentic-graph.memory.compact
- agentic-graph.memory.extract_procedural
- agentic-graph.memory.invoke
- agentic-graph.memory.materialize_user_model
- agentic-graph.memory.search
- agentic-graph.memory.write
- agentic-graph.os.status
- agentic-graph.payment.event.settle
- agentic-graph.payment.intent.create
- agentic-graph.payment.rail.select
- agentic-graph.payment.readiness
- agentic-graph.payment.receipt.project
- agentic-graph.payment.reconcile
- agentic-graph.payment.refund
- agentic-graph.payment.status
- agentic-graph.pipeline
- agentic-graph.probe.evolve
- agentic-graph.probe.generate
- agentic-graph.probe.select
- agentic-graph.repository.pack
- agentic-graph.sandbox.policy.authorize
- agentic-graph.sandbox.policy.validate
- agentic-graph.session.search
- agentic-graph.showrunner.approve_stage
- agentic-graph.showrunner.get_artifact
- agentic-graph.showrunner.post_choice
- agentic-graph.showrunner.run_status
- agentic-graph.showrunner.start_run
- agentic-graph.showrunner.submit_critique
- agentic-graph.skill.evolve
- agentic-graph.sme.broker.draft_nudge
- agentic-graph.sme.marketplace.match
- agentic-graph.sme.multilingual.adapt
- agentic-graph.sme.source.normalize
- agentic-graph.sme.trigger.evaluate
- agentic-graph.superagent.run
- agentic-graph.tool.call
- agentic-graph.tool.catalog
- agentic-graph.tool.describe
- agentic-graph.tool.search
- agentic-graph.ui.launch
- agentic-graph.ui.stop
- agentic-graph.user.profile
- agentic-graph.vdeoxpln.list
- agentic-graph.video_remix.run
- agentic-graph.voice.studio
- agentic-graph.workspace_artifact.apply
- agentic-graph.workspace_artifact.plan
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

- agentic_graph_parser/superagent_harness.py
- canvas/src/features/agent-ready/agentic-graph-vdeoxpln-contract.mjs
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

- Keep behavior source-owned in the listed agentic-graph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
