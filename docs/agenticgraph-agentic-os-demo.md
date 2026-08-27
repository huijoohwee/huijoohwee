---
title: "Knowgrph Agentic OS Demo - Video Agent Analysis"
schema: "kgc-computing-flow/v1"
graphId: "md:knowgrph-agentic-os-video-agent-analysis-demo"
doc_type: "Agentic OS Demo"
date: "2026-07-02"
lang: "en-US"
implementation_contract: "../../knowgrph/docs/documents/knowgrph-agentic-os-prd-tad.md"
kiro_spec: ".kiro/specs/knowgrph-agentic-os"
validation_input_forbid_hardcode_in_repo: "true"
deployed_api_claim: "false"
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "storyboard"
kgStrybldrStoryboard: "true"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: "true"
kgWorkflowManagerModeEnabled: "true"
kgBottomPanelOpen: "true"
kgBottomPanelTab: "flowchart"
kgFloatingPanelOpen: "true"
kgFloatingPanelView: "mcp"
agentic_os_demo_schema: "agentic-os-video-agent-demo/v1"
agentic_os_demo_run_id: "kg_aos_video_agent_analysis_77FAnT935IE"
agentic_os_tool: "knowgrph.os.status"
source_url: "https://www.youtube.com/watch?v=77FAnT935IE"
source_video_id: "77FAnT935IE"
source_provider: "YouTube"
source_kind: "self-runnable-validation-document"
self_run_entrypoint: "node --input-type=module"
validation_label: "test-validation-forbid-hardcode-in-repo"
kgVideoAgentImport: "true"
kgVideoAgentImportMode: "runtime-generated-from-source-url"
kgWorkspaceOutputRoot: "/docs_"
kgWorkspaceOutputRootPattern: "/docs_/<run-timestamp>"
kgVideoAgentArtifactPattern: "/docs_/<run-timestamp>/youtube-<source-video-id-lower>.video-agent.md"
kgVideoSequenceTimeline: "true"
videoAgentRuntimeContract:
  schema: "knowgrph-video-agent/v1"
  sourceUrlField: "source_url"
  sourceVideoIdField: "source_video_id"
  outputStore:
    workspaceRoot: "/docs_"
    workspacePathPattern: "/docs_/<run-timestamp>"
    artifactPathPattern: "/docs_/<run-timestamp>/youtube-<source-video-id-lower>.video-agent.md"
  dependencyPolicy:
    - "no-external-video-agent-runtime"
    - "no copied external code"
  referenceBoundary:
    kind: "inspiration-only"
    implementation: "native-knowgrph"
    copyPolicy: "no-external-code-copy"
    dependencyPolicy: "no-external-video-agent-runtime"
    runtimeDependency: false
  capabilities:
    - "ingest"
    - "parse"
    - "annotate"
    - "dataset"
    - "zone_count"
    - "search"
    - "edit"
    - "compile"
    - "generate"
    - "stream"
  streamPanels:
    - "RichMediaPanel:stream"
    - "RichMediaPanel:source-playback"
    - "RichMediaPanel:transcript"
    - "RichMediaPanel:frame-analysis"
    - "RichMediaPanel:multi-dimensional-table"
    - "RichMediaPanel:floatingpanel-annotation"
  sourceTruth:
    - "canvas/src/features/markdown-workspace/workspaceImport/videoAgentUrlImport.ts"
    - "canvas/src/features/video-agent/videoAgentPipeline.ts"
    - "canvas/src/features/video-agent/videoAgentDatasetRuntime.ts"
    - "canvas/src/features/html-video-renderer/htmlVideoFlowNode.ts"
    - "canvas/src/features/visual-annotation-engine/annotationDataset.ts"
  generatedOnly:
    - "frameBoundingBoxes"
    - "frameByFrameSamples"
    - "sourceTranscript"
    - "frameByFrameTranscript"
    - "multiDimensionalFrameTable"
    - "visualDataset"
    - "mergedVisualDataset"
    - "datasetSplitSummary"
    - "savedDatasetArtifact"
    - "zoneCounting"
    - "timelineTracks"
    - "outputSrcDoc"
    - "video/mp4 or stream fallback"
runtime_policy:
  - "The URL and video id are allowed only in this external validation document."
  - "Product code, parser defaults, tests, generated workspace names, credentials, transcript text, provider ids, stream urls, and publish paths must not hardcode this URL or id."
  - "Generated video-agent artifacts must derive their path from runtime timestamp plus source_video_id; do not backfill the fixed example timestamp into this source file."
  - "Generated analysis payloads are owned by videoAgentUrlImport.ts and videoAgentPipeline.ts; this source file declares the contract only."
  - "Agentic OS is read-only aggregation; it does not approve, mutate, deploy, or run paid provider work by itself."
  - "No Prod or Cloudflare deploy is authorized by this demo."
flow:
  direction: "LR"
  edgeType: "smoothstep"
  nodes:
    - id: "operator"
      type: "StoryboardFrame"
      label: "Operator"
      lane: "Trigger"
      summary: "Starts the video-agent analysis demo from this local validation document."
      action: "Run the local Agentic OS self-check command and review the five read-only status views."
      prompt: "Summarize the operator intent, source URL policy, and Dev-only guardrail for this Agentic OS run."
      strybldrSourceUnitId: "agentic-os-demo-source"
      strybldrElementId: "agentic-os-demo-operator"
    - id: "self_run"
      type: "StoryboardFrame"
      label: "Self Runnable Demo"
      lane: "Run"
      summary: "Runs Agentic OS status checks directly from the local repo without UI launch steps."
      action: "Execute the Node self-run command from the Knowgrph Dev repo."
      prompt: "Call knowgrph.os.status for process_list, capabilities, cost_summary, gate_catalog, and circuit_breakers."
      strybldrSourceUnitId: "agentic-os-demo-source"
      strybldrElementId: "agentic-os-demo-self-run"
    - id: "source_doc"
      type: "StoryboardFrame"
      label: "Validation Source"
      lane: "Source"
      summary: "Keeps the operator-supplied YouTube source in this external validation document."
      action: "Use the source URL only as validation input; do not move it into runtime code, parser defaults, or tests."
      prompt: "Ground the analysis packet in the external YouTube source while leaving transcript text and provider outputs blank."
      sourceUrl: "https://www.youtube.com/watch?v=77FAnT935IE"
      mediaUrl: "https://www.youtube.com/watch?v=77FAnT935IE"
      mediaKind: "video"
      references:
        - "https://www.youtube.com/watch?v=77FAnT935IE"
      strybldrSourceUnitId: "agentic-os-demo-source"
      strybldrElementId: "agentic-os-demo-source"
    - id: "video_agent_analysis"
      type: "StoryboardFrame"
      label: "Video Agent Analysis"
      lane: "Analysis"
      summary: "Prepares source-backed analysis under human approval gates."
      action: "Compile readiness, cost, gate, and circuit-breaker evidence before any paid or credentialed video-agent action."
      prompt: "Create a source-backed video-agent analysis packet without fabricating transcript text, stream URLs, provider ids, or generated media."
      strybldrSourceUnitId: "agentic-os-demo-source"
      strybldrElementId: "agentic-os-demo-analysis"
    - id: "video_agent_artifact"
      type: "StoryboardFrame"
      label: "Video Agent Import Artifact"
      lane: "Analysis"
      summary: "Materializes the source URL into a timestamped video-agent artifact under docs_."
      action: "Use materializeVideoAgentUrlImportDocument to generate a youtube-<source-video-id-lower>.video-agent.md artifact from the source_url field."
      prompt: "Generate the native video-agent import document with Rich Media stream, source playback, transcript, frame analysis, multi-dimensional table, dataset, and zone-counting routes; leave transcript text empty unless returned by the runtime import."
      strybldrSourceUnitId: "agentic-os-demo-source"
      strybldrElementId: "agentic-os-demo-video-agent-artifact"
    - id: "video_agent_routes"
      type: "StoryboardFrame"
      label: "Rich Media Routes"
      lane: "Analysis"
      summary: "Shows the expected route-owned video-agent panels without copying generated srcdoc payloads into this source file."
      action: "Render stream, source playback, transcript, frame analysis, multi-dimensional table, and dataset/zone-count panels from generated runtime outputs."
      prompt: "Confirm route ownership and blank provider outputs before any paid or credentialed analysis."
      strybldrSourceUnitId: "agentic-os-demo-source"
      strybldrElementId: "agentic-os-demo-video-agent-routes"
    - id: "os_status"
      type: "StoryboardFrame"
      label: "knowgrph.os.status"
      lane: "Agentic OS"
      summary: "Reads process, capability, cost, gate, and circuit-breaker state without model calls."
      action: "Return all five Agentic OS read views as JSON evidence."
      prompt: "Report Agentic OS state through zero-token read-only aggregation."
      strybldrSourceUnitId: "agentic-os-demo-source"
      strybldrElementId: "agentic-os-demo-status"
    - id: "review_packet"
      type: "StoryboardFrame"
      label: "Review Packet"
      lane: "Review"
      summary: "Keeps provider ids, stream URLs, transcript text, and generated outputs blank until returned by approved live runtime."
      action: "Save a local review packet or animatic handoff with blank provider fields unless live runtime returns them."
      prompt: "Generate a local review packet from approved demo cards with paidCallCount 0 and no deployment claim."
      strybldrSourceUnitId: "agentic-os-demo-source"
      strybldrElementId: "agentic-os-demo-review"
  edges:
    - source: "operator"
      target: "self_run"
      label: "run"
    - source: "self_run"
      target: "source_doc"
      label: "source"
    - source: "source_doc"
      target: "video_agent_analysis"
      label: "analyze"
    - source: "video_agent_analysis"
      target: "video_agent_artifact"
      label: "materialize"
    - source: "video_agent_artifact"
      target: "video_agent_routes"
      label: "route"
    - source: "video_agent_routes"
      target: "review_packet"
      label: "review"
    - source: "os_status"
      target: "source_doc"
      label: "observe"
    - source: "os_status"
      target: "video_agent_analysis"
      label: "observe"
---

# Knowgrph Agentic OS Demo - Video Agent Analysis

This document is a self-runnable external validation input for demonstrating Agentic OS visibility around a video-agent analysis workflow.

Run label:

`test-validation-forbid-hardcode-in-repo`

Source URL:

`https://www.youtube.com/watch?v=77FAnT935IE`

The source URL and video id are allowed here because this file is a demo input outside product runtime code.
Runtime code, tests, parser defaults, generated workspace names, credentials, transcript text, provider ids,
stream URLs, generated media URLs, and publish paths must not hardcode this URL or video id.

## Demo Objective

Show that Knowgrph can use an operator-supplied video URL from this validation document, prepare source-backed video-agent analysis context, and expose Agentic OS state through one zero-token, read-only tool:

`knowgrph.os.status`

The demo proves five Agentic OS read views around the workflow:

| View | What it proves for this video-agent demo |
|---|---|
| `process_list` | Existing harness run state can be inspected before and after the self-run check. |
| `capabilities` | Local MCP, video, showrunner, and optional remote MCP tools are discoverable from one surface. |
| `cost_summary` | Model-bearing cost coverage and gaps are reported without fabricated spend. |
| `gate_catalog` | Human approval gates are visible before paid, credentialed, or publishing action. |
| `circuit_breakers` | Existing bounded retry and async-poll limits are visible for video-agent work. |

## Self-Run

Run from `/Users/huijoohwee/Documents/GitHub/knowgrph`:

```bash
KNOWGRPH_AGENTIC_OS_DEMO_INPUT="/Users/huijoohwee/Documents/GitHub/huijoohwee/docs/knowgrph-agentic-os-demo.md" \
node --input-type=module <<'NODE'
import { runOsStatusTool } from "./mcp/os-status-runtime.js";

const rootDir = process.cwd();
const sourceUrl = "https://www.youtube.com/watch?v=77FAnT935IE";
const views = ["process_list", "capabilities", "cost_summary", "gate_catalog", "circuit_breakers"];

for (const view of views) {
  const payload = await runOsStatusTool(view, { view, sourceUrl }, { rootDir });
  console.log(`\n## ${view}`);
  console.log(JSON.stringify(payload, null, 2));
}
NODE
```

This command runs the Agentic OS read views directly from the local repo. It does not require browser state, provider credentials, paid calls, or Cloudflare deployment.

### Generate Video-Agent Artifact

Run this from `/Users/huijoohwee/Documents/GitHub/knowgrph/canvas` to generate a timestamped artifact shaped like:

`/docs_/<run-timestamp>/youtube-<source-video-id-lower>.video-agent.md`

The command reads `source_url` and `source_video_id` from this validation document. It does not paste transcript text,
provider ids, stream URLs, generated media URLs, frame boxes, or a fixed timestamp back into this source file.

```bash
KNOWGRPH_AGENTIC_OS_DEMO_INPUT="/Users/huijoohwee/Documents/GitHub/huijoohwee/docs/knowgrph-agentic-os-demo.md" \
npm exec tsx -- <<'TS'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { getWorkspaceFs } from '@/features/workspace-fs/workspaceFs';
import { materializeVideoAgentUrlImportDocument } from '@/features/markdown-workspace/workspaceImport/videoAgentUrlImport';

const inputPath = process.env.KNOWGRPH_AGENTIC_OS_DEMO_INPUT || '';
const inputText = readFileSync(inputPath, 'utf8');
const readQuoted = (key: string) => {
  const match = inputText.match(new RegExp(`^${key}:\\s*"([^"]+)"`, 'm'));
  return match ? match[1].trim() : '';
};
const sourceUrl = readQuoted('source_url');
const sourceVideoId = readQuoted('source_video_id');
if (!sourceUrl || !sourceVideoId) throw new Error('Missing source_url or source_video_id in validation document');

const fs = await getWorkspaceFs();
await fs.ensureSeed();
const artifactPath = await materializeVideoAgentUrlImportDocument({
  fs,
  parentPath: '/docs_',
  sourceName: `youtube-${sourceVideoId.toLowerCase()}`,
  sourceText: '',
  sourceTranscriptJsonText: '',
  sourceUrl,
});
console.log(artifactPath);

const artifactText = await fs.readFileText(artifactPath);
const normalizedInputPath = inputPath.replace(/\\/g, '/');
const docsIndex = normalizedInputPath.lastIndexOf('/docs/');
const mirrorRoot = docsIndex >= 0 ? inputPath.slice(0, docsIndex) : '';
if (mirrorRoot && artifactText) {
  const mirrorPath = join(mirrorRoot, artifactPath.replace(/^\/+/, ''));
  mkdirSync(dirname(mirrorPath), { recursive: true });
  writeFileSync(mirrorPath, artifactText, 'utf8');
  console.log(mirrorPath);
}
TS
```

Expected output path pattern:

```text
/docs_/<run-timestamp>/youtube-<source-video-id-lower>.video-agent.md
```

The generated artifact owns the heavy analysis payload: `kgVideoAgentImport`, `kgVideoSequenceTimeline`,
`videoAgentRuntimeContract`, `flow_diagrams`, `HtmlVideoRenderer`, route-specific `RichMediaPanel` nodes,
parsed output counts, frame analysis, source transcript placeholders, visual dataset operations, zone counting,
and timeline tracks.

Optional MCP-host check:

```bash
KNOWGRPH_ROOT="/Users/huijoohwee/Documents/GitHub/knowgrph" npm --prefix mcp start
```

Use an MCP client to call `knowgrph.os.status` with the same five views if you want to verify stdio transport separately. The self-run command above is the canonical demo path.

## Agentic OS Checkpoints

### Process List

```json
{
  "tool": "knowgrph.os.status",
  "arguments": {
    "view": "process_list"
  }
}
```

Expected: readable harness process entries are returned with named unavailable sources only. The tool is read-only and does not depend on a UI import.

### Capabilities

```json
{
  "tool": "knowgrph.os.status",
  "arguments": {
    "view": "capabilities"
  }
}
```

Expected: `knowgrph.os.status` is present through the shared local MCP contract, video-agent capabilities appear when readable, optional Cloudflare MCP is reported only when reachable, and duplicate tool ids are deduped.

### Cost Summary

```json
{
  "tool": "knowgrph.os.status",
  "arguments": {
    "view": "cost_summary"
  }
}
```

Expected: Agentic OS status reads report zero prompt tokens, zero completion tokens, and zero estimated cost. Provider costs are summed only from schema-valid Cost_Log or Credit_Ledger entries.

### Gate Catalog

```json
{
  "tool": "knowgrph.os.status",
  "arguments": {
    "view": "gate_catalog"
  }
}
```

Expected: paid or credentialed video analysis remains operator-gated; transcript text is not copied into this file; no Prod, Cloudflare, external publication, or stream claim is made.

### Circuit Breakers

```json
{
  "tool": "knowgrph.os.status",
  "arguments": {
    "view": "circuit_breakers"
  }
}
```

Expected: existing async video-provider polling and video-agent retry bounds are reported when readable and never rewritten by the OS status read.

## Video-Agent Analysis Packet

The imported URL should produce or prepare a source-backed review packet and a runtime-generated
`youtube-<source-video-id-lower>.video-agent.md` artifact. The source document may include source metadata,
operator-authored notes, an analysis plan, route ownership, approval gates, and blank provider outputs.
Generated frame boxes, transcript rows, route-specific srcdoc payloads, dataset artifacts, zone counts, timeline tracks,
and parsed output counts belong in the generated artifact, not as backfilled source content.

| Packet field | Demo value or rule |
|---|---|
| `sourceUrl` | `https://www.youtube.com/watch?v=77FAnT935IE` |
| `sourceVideoId` | `77FAnT935IE` |
| `sourceKind` | `self-runnable-validation-document` |
| `analysisMode` | `source-backed-video-agent-analysis` |
| `artifactPathPattern` | `/docs_/<run-timestamp>/youtube-<source-video-id-lower>.video-agent.md` |
| `generatorOwner` | `canvas/src/features/markdown-workspace/workspaceImport/videoAgentUrlImport.ts` |
| `pipelineOwner` | `canvas/src/features/video-agent/videoAgentPipeline.ts` |
| `approvalState` | `required-before-paid-provider-action` |
| `agenticOsTool` | `knowgrph.os.status` |
| `providerJobId` | Blank until a live provider returns it. |
| `streamUrl` | Blank until a live provider returns it. |
| `transcriptText` | Not authored in this document. |
| `estimatedAgenticOsCostUsd` | `0` for OS status reads. |

### Generated Artifact Shape

The generated artifact should be structurally similar to a local `youtube-<source-video-id-lower>.video-agent.md` import:

| Section | Runtime-owned content |
|---|---|
| Frontmatter | `kgVideoAgentImport`, `kgWorkspaceOutputRoot`, `kgVideoSequenceSources`, `videoAgentRuntimeContract`, `flow_diagrams`, and `flow` nodes. |
| Input widget | HTML/CSS/data render spec, source playback URL, frame boxes, transcript JSON, visual dataset JSON, merged dataset JSON, and zone-count JSON. |
| Renderer | `HtmlVideoRenderer` with streamable `outputSrcDoc` or video artifact outputs. |
| Rich Media panels | Stream output, source playback, transcript, frame analysis, multi-dimensional table, dataset, and zone-count surfaces. |
| Parsed outputs | Counts and generated artifacts returned by runtime import only. |

This source file intentionally does not contain generated `frameBoundingBoxes`, `sourceTranscript`,
`frameByFrameTranscript`, `visualDataset`, `mergedVisualDataset`, or `zoneCounting` blocks.

## Acceptance Checklist

- [x] The demo is self-runnable from the local repo.
- [x] The only authored validation URL is `https://www.youtube.com/watch?v=77FAnT935IE`.
- [x] The validation label is `test-validation-forbid-hardcode-in-repo`.
- [x] Agentic OS is represented as read-only status aggregation through `knowgrph.os.status`.
- [x] The video-agent artifact path is runtime-derived as `/docs_/<run-timestamp>/youtube-<source-video-id-lower>.video-agent.md`.
- [x] The source document declares video-agent routes without backfilling generated frame, transcript, dataset, zone-count, or srcdoc payloads.
- [x] The demo covers `process_list`, `capabilities`, `cost_summary`, `gate_catalog`, and `circuit_breakers`.
- [x] The document explicitly forbids hardcoding the URL, video id, credentials, transcript text, provider ids, generated media URLs, stream URLs, or publish paths in runtime code/tests/defaults.
- [x] The document makes no Prod or Cloudflare deployment claim.

## Validation Commands

Run these from `/Users/huijoohwee/Documents/GitHub/knowgrph` when validating the implementation surface:

```bash
npm run hygiene:check
node --test mcp/__tests__/os-status-runtime.test.mjs mcp/__pbt__/os-status.pbt.test.mjs
node --test cloudflare/workers/knowgrph-mcp/__tests__/tool-registry.test.mjs
KNOWGRPH_FORBID_HARDCODE_INPUT="/Users/huijoohwee/Documents/GitHub/huijoohwee/docs/knowgrph-agentic-os-demo.md" npm --prefix canvas run test:ci:unit -- policy.forbidHardcodedYouTubeUrlLiteral
```

## Guardrails

- Keep this as a Dev validation document until the operator explicitly authorizes publish or deploy.
- Do not add the YouTube URL or video id to product code, parser defaults, test fixtures, generated workspace names, or runtime constants.
- Do not copy the generated `/docs_/<run-timestamp>/youtube-<source-video-id-lower>.video-agent.md` payload back into this source document.
- Do not run paid provider work from Agentic OS status reads.
- Do not copy transcript text into this document.
- Do not fabricate provider job ids, stream URLs, generated media URLs, cost figures, or publication state.
