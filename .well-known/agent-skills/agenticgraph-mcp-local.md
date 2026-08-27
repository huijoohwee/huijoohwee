# Knowgrph Local MCP Skill

Use this skill when: Expose Knowgrph-owned local Source Files, Agentic Canvas OS docs invocation, deterministic repository packing, managed implementation runs, UI, pipeline, SuperAgent, video-remix, browser bridge, SEA-LION, HTML video, visual annotation, memory, probe-tree, showrunner, OS status, and vdeoxpln tools through the stdio MCP server.

## Contract

- Vdeoxpln id: `knowgrph-mcp-local`
- Contract version: `knowgrph-vdeoxpln/v0.1`
- Semantic key: `kgvx_adbdb68c`
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
- export.publish
- fetch
- knowgrph.agent_team.control
- knowgrph.agent_team.list
- knowgrph.agent_team.plan
- knowgrph.agent_team.start
- knowgrph.agentic_canvas_os.docs.invoke
- knowgrph.agentic_sdlc.observe
- knowgrph.annotate.image
- knowgrph.annotate.video_frame
- knowgrph.application.catalog
- knowgrph.application.execute
- knowgrph.application.plan
- knowgrph.browser_api.run
- knowgrph.ecs.decision_persist
- knowgrph.ecs.session_start
- knowgrph.ecs.world_tick
- knowgrph.file.sync
- knowgrph.geospatial.command
- knowgrph.git.run
- knowgrph.graphrag_pipeline
- knowgrph.html_video.render
- knowgrph.implementation_run.control
- knowgrph.implementation_run.list
- knowgrph.implementation_run.plan
- knowgrph.implementation_run.start
- knowgrph.knowledge_graph.explain_edge
- knowgrph.knowledge_graph.ingest
- knowgrph.knowledge_graph.parser_generate
- knowgrph.knowledge_graph.query
- knowgrph.memory.add
- knowgrph.memory.assemble_prompt
- knowgrph.memory.compact
- knowgrph.memory.extract_procedural
- knowgrph.memory.invoke
- knowgrph.memory.materialize_user_model
- knowgrph.memory.search
- knowgrph.memory.write
- knowgrph.os.status
- knowgrph.payment.event.settle
- knowgrph.payment.intent.create
- knowgrph.payment.rail.select
- knowgrph.payment.readiness
- knowgrph.payment.receipt.project
- knowgrph.payment.reconcile
- knowgrph.payment.refund
- knowgrph.payment.status
- knowgrph.pipeline
- knowgrph.probe.evolve
- knowgrph.probe.generate
- knowgrph.probe.select
- knowgrph.repository.pack
- knowgrph.sandbox.policy.authorize
- knowgrph.sandbox.policy.validate
- knowgrph.session.search
- knowgrph.showrunner.approve_stage
- knowgrph.showrunner.get_artifact
- knowgrph.showrunner.post_choice
- knowgrph.showrunner.run_status
- knowgrph.showrunner.start_run
- knowgrph.showrunner.submit_critique
- knowgrph.skill.evolve
- knowgrph.sme.broker.draft_nudge
- knowgrph.sme.marketplace.match
- knowgrph.sme.multilingual.adapt
- knowgrph.sme.source.normalize
- knowgrph.sme.trigger.evaluate
- knowgrph.superagent.run
- knowgrph.tool.call
- knowgrph.tool.catalog
- knowgrph.tool.describe
- knowgrph.tool.search
- knowgrph.ui.launch
- knowgrph.ui.stop
- knowgrph.user.profile
- knowgrph.vdeoxpln.list
- knowgrph.video_remix.run
- knowgrph.voice.studio
- knowgrph.workspace_artifact.apply
- knowgrph.workspace_artifact.plan
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

- canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs
- knowgrph_parser/superagent_harness.py
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

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
