# Knowgrph Application Composition Skill

Use this skill when: Compose exact-version agents, prompts, typed values, and opaque third-party integration capabilities into immutable provider-neutral plans, then run them through existing bounded runtime owners.

## Contract

- Vdeoxpln id: `knowgrph-application-composition`
- Contract version: `knowgrph-vdeoxpln/v0.1`
- Semantic key: `kgvx_da3f5875`
- Scope: `local-stdio-owner-composed`
- Mutation boundary: `local-and-external-approval-gated`

## Triggers

- @application-manifest
- @component-catalog
- @integration-profile
- @runtime-proof
- /application.compose
- #application-composition
- agent component catalog
- build agent application
- compose llm application

## Inputs

- adapter policy digest
- component catalog digest
- exact execution mode
- opaque integration profile reference
- source-backed application manifest

## Outputs

- bounded application execution result
- immutable application-composition-plan/v1
- migration diagnostics
- sanitized application catalog

## Tools

Published tools:
- none

Browser-local tools:
- none

Local MCP tools:
- knowgrph.application.catalog
- knowgrph.application.execute
- knowgrph.application.plan
- knowgrph.vdeoxpln.list

## Workflow

- Catalog exact component, interface, schema, capability, owner, adapter, and opaque integration revisions without model spend or egress.
- Validate the canonical /application.compose #application-composition invocation and verify the source-backed manifest digest.
- Compile a mode-bound typed dependency DAG and lock every exact revision into one deterministic plan digest.
- Replan at admission, compare the exact digest, and sequence only ready steps through their existing host-owned runtimes.
- Stop on failure, approval requirement, cancellation uncertainty, or bounds without retry, fallback, migration, provider selection, or deployment.

## Source Owners

- contracts/agent-application.schema.js
- data/config/agents/agent-application-components.json
- mcp/agent-application-adapter-registry.js
- mcp/agent-application-runtime.js
- mcp/agent-application-tool-contract.js
- mcp/external-tool-gateway-runtime.js
- mcp/server.js

## Artifact Policy

- Persistence: `tool-owned`
- Graph materialization: `none`
- Semantic-key inputs:
- manifestDigest
- mode
- catalogDigest
- adapterPolicyDigest
- planDigest

## AI Policy

- Mode: `none`
- Max attempts: `0`
- Token budget: `0`
- Fallback: Return deterministic plan or owner-block evidence; composed owners retain their own authority.

## Validation

- agentApplicationContract
- agentApplicationRuntime
- mcpLocalToolContract
- vdeoxpln:check

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
