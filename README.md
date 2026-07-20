# Agentic Canvas

**Tagline:** The canvas that recreates any video — and runs the document like a program

Knowgrph is an **AI/LLM-agent-native, markdown-based, self-runnable agentic
widget canvas**. Drop in a YouTube URL, pick a favorite video, and Knowgrph
builds a storyboard, runs SenseNova text/image/video generation, hands the
output to VideoDB, and produces a local playable animatic — all without leaving
a single Markdown document.

The same file is three things at once:

- a **human-readable Markdown doc** (open it in any editor or on the web),
- a **typed widget graph** (`kgc-computing-flow/v1` frontmatter — nodes, edges,
  sockets, run actions), and
- a **runnable agent program** (compute nodes, approval gates, budget meters,
  and media outputs that an LLM/MCP agent can execute end to end).

Knowgrph is provider-neutral and project-agnostic: it operates on any brief,
canvas graph, tool schema, or media provider without assuming a particular
vendor, document, or domain.

## Strybldr Demo — Recreate a Favorite Video

The canonical demo proves the full E2E pipeline by importing one YouTube URL and
recreating it as a knowgrph Strybldr canvas workflow.

**Source:** [`Seedance 2.0 is on Artlist`](https://www.youtube.com/watch?v=77FAnT935IE) — a 60-second Artlist creator demo.

**Validation input:** `docs/knowgrph-strybldr-demo.md`

### What the demo proves

| Stage | What happens |
| --- | --- |
| Import URL | `Toolbar → Launch → Import URL`, select Strybldr renderer, paste the YouTube URL |
| Source card | One neutral corpus source unit is written for the video; no transcript text is copied |
| Storyboard | A sibling `.strybldr.md` opens with Source, Storyboard, Elements, Runtime, Review, and Publish cards |
| Canvas view | Toolbar reports `Canvas View Mode: 2D Renderer: Strybldr` |
| SenseNova Text | MainPanel Integrations exposes `SenseChat-5`, `SenseChat-Turbo`, `SenseChat-Vision-5` via host-only JWT |
| SenseNova Image | MainPanel Integrations exposes `artist-xl` and `senseNova-img-enhance` |
| SenseNova Video | MainPanel Integrations exposes `SenseAnim` and `SenseAnim-Pro` via a 36 × 10s async circuit-breaker |
| VideoDB REST | `MainPanel Integrations` → upload/generate → async poll → spoken-word index → search → stream |
| VideoDB MCP | `MainPanel MCP` → `videodb-director` (uvx) → same E2E pipeline via MCP tools |
| Character clips | Subject timeline ranges feed `video.generate_stream(timeline=...)` for per-subject review clips |
| Local animatic | Without live credentials, `Toolbar Run all` writes a playable `strybldr-video-*.md` with `paidCallCount: 0` |
| Guard | Missing credentials keep external calls readiness-gated; no fabricated IDs, URLs, or transcript text |

### Run it (no credentials required)

1. Open Knowgrph locally.
2. `Toolbar → Launch → Import URL`.
3. Select **Strybldr** as the renderer.
4. Paste `https://www.youtube.com/watch?v=77FAnT935IE`.
5. Click toolbar **Run all**.
6. A `strybldr-video-*.md` artifact is written with an embedded playable animatic and `paidCallCount: 0`.

To run with live SenseNova and VideoDB credentials, set host environment keys
`SENSENOVA_API_KEY` and `VIDEODB_API_KEY`, approve each generation card, then
choose the REST or MCP execution path in MainPanel.

### Credential policy

| Key | Where it lives | Never in |
| --- | --- | --- |
| `VIDEODB_API_KEY` | Host environment only | Browser storage, repo source |
| `SENSENOVA_API_KEY` | Host environment only; signing stays server-side | Browser storage, repo source |

### E2E pipeline shape

```
Import URL (77FAnT935IE)
  └─ Strybldr storyboard cards
       ├─ SenseNova Text → Image → Video
       │    └─ VideoDB upload → async poll → index → search → stream
       │         └─ Character clips (subject timeline ranges)
       │              └─ Local publish packet
       └─ VideoDB MCP (videodb-director)
            └─ Same sequence via MCP tools → Local publish packet
```

Without live credentials every branch falls back to a generated local knowgrph
animatic from approved cards, with no external publish claim.

---

## What "self-runnable agentic widget canvas" means

- **Markdown-native.** The source of truth is a Markdown file. Its YAML
  frontmatter declares the flow (`flow.nodes[]`, `flow.edges[]`, `socket_types`,
  `modelSelection`) so the document is parseable, diffable, and version-control
  friendly — no proprietary binary scene format.
- **Widget canvas.** Nodes are typed widgets — `InputWidget`, `ComputeWidget`,
  `RichMediaPanel` (text, image, video) — laid out on a balanced, mobile-first
  canvas with readable, socket-typed edges.
- **Self-runnable.** Compute widgets carry a `canvas:runAction` (pure,
  inspectable functions) so a node can run from a button, a chat instruction, an
  MCP tool call, or a CLI/Codex entrypoint and write its outputs back into the
  same document.
- **Agent-native.** Agents reach the canvas over **MCP** (`airvio.co/knowgrph/mcp`),
  through the Floating Panel chat, or via the parser CLI/Codex. Every model call
  routes through **Cloudflare AI Gateway**; every spend boundary is gated by a
  single-use Approval_Token.
- **Gated, persisted, replayable.** Runs are dry-run by default; live spend halts
  at the first un-approved gate with zero paid actions. Outputs auto-save to
  Cloudflare (document → D1, media bytes → R2) and replay from storage with no
  further model call.

## The runnable document model

A Knowgrph document's frontmatter flow is the program. Minimal shape:

```yaml
---
schema: "kgc-computing-flow/v1"
kgCanvas2dRenderer: "flowEditor"
socket_types:
  idea_signal:     {color: "#14b8a6", accepts: [idea_signal]}
  artifact_signal: {color: "#8b5cf6", accepts: [artifact_signal]}
flow:
  nodes:
    - id: {value: "source_input"}      # InputWidget  — typed inputs
    - id: {value: "compute_summary"}   # ComputeWidget — canvas:runAction
    - id: {value: "panel_image"}       # RichMediaPanel — image
    - id: {value: "panel_video"}       # RichMediaPanel — video
  edges:
    - {source: "source_input", target: "compute_summary", type: "idea_signal"}
    - {source: "compute_summary", target: "panel_image",  type: "artifact_signal"}
    - {source: "compute_summary", target: "panel_video",  type: "artifact_signal"}
---

# Body markdown renders alongside the canvas.
```

- **Nodes** carry typed handles, a `canvas:widgetCard` (preview + actions), and,
  for compute nodes, a `canvas:runAction` describing inputs, outputs, and side
  effects.
- **Edges** connect source/target handles with a declared `socket_type`, so the
  canvas can validate and route connections.
- **Run** a compute node and its outputs (text, image, video, dashboards) flow
  to the connected `RichMediaPanel` widgets and persist to storage.

## Agent + automation surfaces

| Surface | How an agent uses it |
| --- | --- |
| MCP (`airvio.co/knowgrph/mcp`) | Streamable-HTTP tool surface; list/call canvas tools, run flows, read back manifests. |
| Floating Panel Chat | In-canvas assistant with workspace, selection, and source-aware context. |
| Parser CLI / Codex | Run documents headlessly from the `knowgrph_parser` CLI or a Codex entrypoint. |
| Cloudflare AI Gateway | All model/media calls (chat, image, video) route here for cache, token count, fallback, and unified billing. |

Baseline runs are provable **offline with deterministic mock providers**; real
providers (SenseNova for chat/image/video, VideoDB for upload/index/stream)
activate only when their keys are wired and the matching gate is approved.

## Repository Role

This repository is the Dev source of truth:

```text
Dev:  /Users/huijoohwee/Documents/GitHub/knowgrph
Prod: /Users/huijoohwee/Documents/GitHub/huijoohwee/content/knowgrph
Live: https://airvio.co/knowgrph
```

Prod sync and Cloudflare deployment are explicit operator actions. Normal
implementation, testing, and documentation work should stay in Dev until publish
or deploy is requested.

### Session-end worktree lifecycle

Run `npm run worktree:lifecycle:check` from the canonical `main` checkout at the
end of a chat, session, or thread. Complete or park the current task first.
`npm run worktree:lifecycle:cleanup -- --worktree=<path>` accepts only a clean,
detached, exact-`origin/main` worktree whose writer lease records protected
completion. Canonical, active, delivery, parked, dirty, divergent, or ambiguous
lanes are retained or rejected. Cleanup never uses force and never deletes the
preserved task branch or commits. This local repository operation does not
authorize a production sync or Cloudflare deployment.

## Workspace Surfaces

| Surface | Purpose |
| --- | --- |
| Source Files | Canonical Markdown documents (the runnable canvases), JSON, binary metadata, generated KGC, chat logs, traces. |
| Graph Canvas | Visual exploration + execution of the widget flow: nodes, edges, rich-media panels, layouts. |
| Floating Panel Chat | Agent-native assistant with workspace, selection, and source-aware context. |
| MainPanel Integrations | Provider, endpoint, model, auth-mode, storage, and runtime configuration. |
| Flow Editor | Structured widget/graph/media/workflow editing over source-backed Markdown documents. |
| Cloudflare Runtime | Pages, Workers (`McpAgent`), D1, R2, AI Gateway, and server-managed provider secrets. |

## Repo Layout

| Path | Purpose |
| --- | --- |
| `canvas/` | Vite/React app, editor workspace, Source Files, graph canvas, Flow Editor, MainPanel, chat UI, and focused tests. |
| `knowgrph_parser/` | Python parser and command-line tooling for markdown, GraphRAG, webpage, video, and workflow artifacts. |
| `grph-shared/` | Runtime-neutral TypeScript contracts for storage, rich media, markdown, payments, browser helpers, cache, and geometry. |
| `gympgrph/` | Geospatial package consumed by the canvas app. |
| `cloudflare/` | Pages handlers, Workers (incl. the `knowgrph-mcp` `McpAgent`), storage routes, D1 migrations, and R2-backed binary storage. |
| `mcp/` | MCP contracts, the video-remix agent runtime, and service documentation. |
| `data/config/` | Canonical config inputs for GraphRAG, schema, orchestrator, and LLM chat boundaries. |
| `docs/documents/` | Authored product, API, architecture, and feature documents. |
| `scripts/` | Repo checks, sync helpers, docs generation, storage seeding, payment readiness, and release tooling. |

## Setup

```bash
npm install
npm run setup
```

Prepare linked packages directly when working inside the canvas app:

```bash
npm --prefix canvas run prepare:linked-packages
```

## Local Development

```bash
npm run dev -- --host 127.0.0.1
```

Use focused checks for the behavior being changed:

```bash
npm --prefix canvas run test:ci:unit -- <test-name-or-filter>
npm --prefix canvas run typecheck
npm --prefix canvas run check
npm --prefix canvas run doc:sanity
npm run api-index:check
python3 -m knowgrph_parser.webpage_cmd_test
```

Avoid broad test, publish, deploy, or remote mutation commands unless the current
task requires them.

## Build, Publish, Deploy

Local build:

```bash
npm run build
```

Publish mirror build and sync:

```bash
npm run pages:build-sync
npm run pages:check-sync
```

Cloudflare deployment (Pages + Workers + `McpAgent`):

```bash
npm run pages:deploy-cloudflare
npm run mcp:worker:deploy
```

Run Cloudflare deployment, D1 mutation, R2 mutation, or production publish
commands only after explicit operator instruction.

## Storage And Source Authority

Source Files are the workspace contract. Git-backed authored Markdown documents
remain the source of truth; hosted storage mirrors and generated artifacts must
preserve path identity instead of inventing parallel files.

- Keep GitHub-authored docs authoritative first.
- Use D1 and public storage routes as hosted mirrors and runtime indexes.
- Use R2 for binary artifacts (generated image/video) and companion outputs that
  do not belong inline in markdown. Persist media bytes to R2 on generate and
  store the durable R2 URL; never store an ephemeral provider URL as the artifact.
- Keep generated KGC, chat logs, traces, and output manifests source-file
  addressable.
- Do not hardcode provider, path, route, or demo-specific behavior downstream
  when a shared Source Files or storage owner should handle it upstream.

## Config And Generated Artifacts

Canonical config roots live under `data/config/`:

```text
data/config/graphrag/
data/config/llm-chat/
data/config/orchestrator/
data/config/schema/
```

Generated and local runtime outputs should stay ignored:

```text
.knowgrph-workspace/
data/outputs/
.wrangler/
*.tsbuildinfo
canvas/artifacts/live-verification/
canvas/.tmp-*
canvas/tmp-*
canvas/tmp_*
logs/
```

Do not commit local screenshots, transient previews, duplicate root-level config,
local workspace notes, or runtime artifacts unless a specific test fixture
contract requires a bounded source artifact.

## Feature Docs

Feature-specific planning belongs in canonical docs instead of the root README:

| Feature | Docs |
| --- | --- |
| Strybldr demo (recreate favorite video) | `docs/knowgrph-strybldr-demo.md` |
| Strybldr | `docs/documents/knowgrph-strybldr-prd-tad.md` |
| Strytree | `docs/documents/knowgrph-strytree-prd-tad.md` |
| SenseNova AI API | `docs/documents/knowgrph-mcp/knowgrph-sensenova-api-prd-tad.md` |
| VideoDB MCP | `docs/documents/knowgrph-mcp/knowgrph-videodb-mcp-prd-tad.md` |
| MCP | `docs/documents/knowgrph-mcp/` and `mcp/README.md` |
| Agentic Canvas OS demo | `docs/documents/knowgrph-mcp-agentic-canvas-os-prd-tad.md` |
| AI provider layer (MiroMindAI) | `docs/documents/knowgrph-api-reference/knowgrph-miromind-api-prd-tad.md` |
| Storage sync | `docs/documents/knowgrph-storage-sync-document.companion.md` |
| Repo hygiene | `docs/documents/knowgrph-repo-hygiene-document.md` |
| Payment readiness | `docs/documents/knowgrph-mainpanel-commerce-prd-tad.md` |

## Hygiene Rules

- Fix root/source owners instead of layering downstream aliases, remaps, or
  compatibility shims.
- Keep the AI/agent layer, storage, graph, and Source Files behavior
  provider-neutral and file-agnostic where possible.
- Reuse shared helpers, semantic keys, and workspace contracts instead of
  hardcoded repo, file, route, or demo branches.
- Preserve source provenance for generated artifacts (link them to the goal,
  brief, plan, tool calls, and verification checks).
- Keep secrets out of source and use server-managed environment bindings for
  hosted provider keys.
- Keep Dev as the implementation source; publish mirror and Cloudflare outputs
  are generated from Dev.
