# AgenticGraph Source Files Skill

Use this skill when: Discover, read, inspect, and route published Source Files and shared documents through the canonical storage and document-structure owners.

## Contract

- Vdeoxpln id: `agenticgraph-source-files`
- Contract version: `agenticgraph-vdeoxpln/v0.1`
- Semantic key: `kgvx_79a9fb63`
- Scope: `read-only-published`
- Mutation boundary: `read-only`

## Triggers

- inspect document structure
- published documents
- read markdown
- shared document
- source files

## Inputs

- canonical path
- published markdown
- share token
- share URL
- workspace document

## Outputs

- document structure report
- published markdown
- source-files index

## Tools

Published tools:
- inspect_shared_document_structure
- list_source_files
- read_shared_document
- read_source_file

Browser-local tools:
- inspect_local_source_files_snapshot

Local MCP tools:
- fetch
- agenticgraph.vdeoxpln.list
- search

## Workflow

- Resolve source identity from storage, share token, or canonical path.
- Fetch through published storage/document executors.
- Inspect structure with the shared document-structure owner.
- Return read-only artifacts without graph mutation.

## Source Owners

- canvas/src/features/agent-ready/publishedToolExecutors.mjs
- canvas/src/features/agent-ready/sharedDocumentStructureInspection.mjs
- canvas/src/features/source-files/sourceFilesSignatures.ts
- canvas/src/features/workspace-fs/workspaceFs.ts
- cloudflare/pages/agenticgraph-agent-ready.mjs

## Artifact Policy

- Persistence: `published-read-only`
- Graph materialization: `none`
- Semantic-key inputs:
- workspaceId
- canonicalPath
- shareToken
- toolContract

## AI Policy

- Mode: `none`
- Max attempts: `0`
- Token budget: `0`
- Fallback: Return source-read or structure errors without model calls.

## Validation

- agent-ready:check
- pages:check-sync
- vdeoxpln:check

## Guardrails

- Keep behavior source-owned in the listed AgenticGraph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
