# AgenticGraph AI Voice Studio Skill

Use this skill when: Capture consented voice-profile manifests, dictate speech, and create disclosed speech through one provider-neutral browser and local-stdio contract.

## Contract

- Vdeoxpln id: `agenticgraph-ai-voice-studio`
- Contract version: `agenticgraph-vdeoxpln/v0.1`
- Semantic key: `kgvx_5e8cecc9`
- Scope: `browser-local-and-local-stdio`
- Mutation boundary: `local-consent-and-approval-gated`

## Triggers

- @approval-gate
- @audio
- @cost-log
- @runtime-proof
- @text
- @voice-profile
- /voice.studio
- #speech-to-text
- #text-to-speech
- #voice-clone
- ai voice studio
- dictation
- speech to text
- text to speech
- voice clone

## Inputs

- digest-bound audio artifact reference
- locale
- paid-call approval
- recording consent
- text
- voice rights manifest

## Outputs

- digest-bound audio artifact receipt
- disclosed system-voice preview
- editable transcript
- voice profile manifest

## Tools

Published tools:
- none

Browser-local tools:
- none

Local MCP tools:
- agenticgraph.vdeoxpln.list
- agenticgraph.voice.studio

## Workflow

- Resolve one exact /voice.studio # @ route.
- Keep original audio and the browser profile manifest session-local; durable artifacts remain with existing media/workspace or host owners.
- Use rights-gated visible, stoppable browser capture or disclosed system-voice preview.
- Dispatch live provider work only through a host-injected adapter after exact rights and paid-call approval.
- Return sanitized evidence without raw audio, embeddings, credentials, or filesystem paths.

## Source Owners

- canvas/src/features/voice-studio
- contracts/voice-studio.schema.js
- docs/documents/agenticgraph-ai-voice-studio-prd-tad.md
- mcp/voice-studio-runtime.js
- mcp/voice-studio-tool-contract.js

## Artifact Policy

- Persistence: `session-only-browser-manifest-or-host-owned-artifact`
- Graph materialization: `none`
- Semantic-key inputs:
- operation
- idempotencyKey
- sourceDigests
- profileRevision
- rightsReceipts

## AI Policy

- Mode: `optional-host-adapter`
- Max attempts: `1`
- Token budget: `operator-approved`
- Fallback: Return deterministic zero-call planning evidence or a typed adapter-unavailable result.

## Validation

- mcpLocalToolContract
- vdeoxpln:check
- voice-studio:check

## Guardrails

- Keep behavior source-owned in the listed AgenticGraph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
