---
title: "Knowgrph Stryfork Demo - Runnable Import URL And Local File"
graphId: "md:knowgrph-stryfork-demo-runnable-import-url-local-file"
doc_type: "Stryfork Runnable Demo"
date: "2026-05-30"
lang: en-US
implementation_contract: "docs/documents/knowgrph-stryfork-prd-tad.md"
validation_input_forbid_hardcode_in_repo: true
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "strybldr"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: false
kgDocumentStructureBaselineLock: false
kgStrybldrStoryboard: true
kgSharedRendererContract:
  version: "shared-renderer-contract/v1"
  semanticIdentity: "buildScopedGraphSemanticKey"
  cardPreview: "CardMediaPreview + CardMarkdownPreview"
  widgetCard: "canvas:widgetCard"
  richMediaPanel: "RichMediaPanel"
  edgeModel: "active graph edges derived from storytree fork candidates"
  timelineSurface: "TimelineTransportControls + shared bottom-panel surface"
  rendererPolicy: "frontmatter and source payloads own data; renderers project view state only"
kgYoutubeVideoId: "77FAnT935IE"
kgYoutubeFormat: "markdown"
kgWebpageUrl: "https://www.youtube.com/watch?v=77FAnT935IE"
source_kind: "import-url-youtube-and-local-file"
source_provider: "YouTube"
source_title: "Seedance 2.0 is on Artlist"
source_author: "Artlist"
source_oembed_url: "https://www.youtube.com/oembed?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D77FAnT935IE&format=json"
local_file_import_contract:
  - "Toolbar -> Launch -> Import local files"
  - "Select this Markdown document as validation input"
  - "Local import recognizes Strybldr frontmatter and storyboard payload"
  - "Canvas View Mode reports 2D Renderer: Strybldr"
  - "Strybldr Source and Elements lanes are visible"
  - "Toolbar Run all opens the Strybldr owner panel and writes a video fallback artifact when external credentials are unavailable"
import_url_contract:
  - "Toolbar -> Launch -> Import URL"
  - "Renderer selection -> Strybldr"
  - "URL import writes one neutral corpus source unit"
  - "URL import writes and focuses one .strybldr.md document"
  - "Canvas View Mode reports 2D Renderer: Strybldr"
  - "Toolbar Run all opens the Strybldr owner panel and writes a video fallback artifact when external credentials are unavailable"
modelSelection:
  selectionModel: "projected-data"            # renderers project these typed option groups as dropdowns; they do not branch on them
  scope: "local-overrides-global"             # a node-local options.model overrides the matching group's global default
  groups:
    text:
      global: "agnes-2.0-flash"               # group-global default; override per node via options.model
      options:
        - "agnes-2.0-flash"
        - "seed-2-0-mini-260215"
        - "seed-2-0-lite-260228"
        - "seed-2-0-pro-260328"
        - "seed-1-8-251228"
    image:
      global: "seedream-4-0-250828"
      options:
        - "seedream-4-0-250828"
        - "seedream-4-5-251128"
        - "seedream-5-0-260128"
    video:
      global: "seedance-1-0-pro-fast-251015"
      options:
        - "seedance-1-0-pro-fast-251015"
        - "seedance-1-5-pro-251215"
        - "dreamina-seedance-2-0-fast-260128"
        - "dreamina-seedance-2-0-260128"
---

# Knowgrph Stryfork Demo - Runnable Import URL And Local File

This document is the validation input for an end-to-end Stryfork demo:

<https://www.youtube.com/watch?v=77FAnT935IE>

The URL is allowed here because this file is the external test input. Runtime
code, test fixtures, parser logic, and import defaults must not hardcode this
URL, video ID, thumbnail URL, local path, provider key, or generated workspace
filename.

## What The Demo Must Prove

| Stage | Required behavior | Shared owner |
| Trigger | User opens `Toolbar -> Launch -> Import URL` or `Import local files`. | `LaunchDropdown.impl.tsx` |
| Select | User chooses `Strybldr` in the Import URL renderer selector. | `ImportUrlRendererSelect.tsx` and `canvasPresets.ts` |
| Fetch | YouTube import uses the shared URL import and transcript conversion owner. | `urlImport.ts`, `urlContent.ts`, `youtubeEntryText.ts` |
| Normalize | The imported URL document becomes one neutral corpus source unit with URL provenance. | `sourceFilesCorpusManifest.ts` |
| Project | URL import writes one `.strybldr.md` storyboard document; local file import activates this Strybldr markdown directly. | `strybldrStoryboard.ts`, `strybldrImportSurface.ts` |
| Render | The focused storyboard opens in `Canvas View Mode: 2D Renderer: Strybldr`. | shared Storyboard renderer |
| Run | `Toolbar -> Run all` opens the Strybldr panel consumer and writes a video handoff or fallback artifact. | `Toolbar.tsx`, `config.render.ts`, `StrybldrFloatingPanelView.tsx` |
| Guard | The demo URL is checked as validation input and is forbidden in repo code/tests. | `youtubeImportAction.test.ts` |

## Manual E2E Runbook

### Import URL

1. Open Knowgrph locally.
2. Open `Toolbar -> Launch`.
3. Choose `Import URL`.
4. Select `Strybldr` as the renderer.
5. Paste the URL above.
6. Confirm a YouTube Markdown source file is created.
7. Confirm a sibling `.strybldr.md` storyboard document is created and focused.
8. Confirm the canvas toolbar shows `Canvas View Mode: 2D Renderer: Strybldr`.
9. Confirm the Storyboard surface shows Source, Storyboard, and Elements lanes.
10. Click toolbar `Run all`.
11. Confirm the Strybldr floating panel is open or remains open as the run
    consumer.
12. Confirm a `strybldr-video-fallback-*.md` handoff artifact is written when
    external video credentials are unavailable.
13. Confirm no paid generation runs during import.

### Import Local File

1. Open Knowgrph locally.
2. Open `Toolbar -> Launch`.
3. Choose `Import local files`.
4. Select this Markdown document.
5. Confirm the imported file is focused in Source Files.
6. Confirm the canvas toolbar shows `Canvas View Mode: 2D Renderer: Strybldr`.
7. Confirm the Storyboard surface shows `Source` and `Elements` lanes.
8. Click toolbar `Run all`.
9. Confirm the Strybldr floating panel is open or remains open as the run
   consumer.
10. Confirm a `strybldr-video-fallback-*.md` handoff artifact is written when
    external video credentials are unavailable.

## Current Source Evidence

Evidence collected for this source on 2026-05-30:

| Evidence | Value |
| Provider | YouTube |
| Video ID | `77FAnT935IE` |
| oEmbed title | `Seedance 2.0 is on Artlist` |
| oEmbed author | `Artlist` |
| oEmbed thumbnail | `https://i.ytimg.com/vi/77FAnT935IE/hqdefault.jpg` |
| Transcript availability | generated English captions available |
| Transcript segment count | 24 |
| Transcript duration | about 52.16 seconds |
| Paid calls required for import | 0 |

The transcript is not copied into this file. Story cards below use metadata and
short paraphrases so the artifact stays portable and copyright-safe.

## Runnable Evidence

Evidence collected in the local app on 2026-05-30:

| Check | Result |
| Fresh Import URL with `Strybldr / Document Structure Mode` | Passed in local browser E2E |
| Fresh Import local files using this Markdown document | Passed in local browser E2E |
| Canvas mode after import | `Canvas View Mode: 2D Renderer: Strybldr` |
| Storyboard lanes after import | `Source` and `Elements` visible |
| Toolbar `Run all` | Passed via the focused toolbar control in both Import URL and local-file runs |
| External credential fallback | New `strybldr-video-fallback-*.md` artifact visible in Source Files |
| Browser console errors | 0 |

Local-file import evidence is validated by the same runtime owners, using this
file as external input. The repo test command passes the file path through an
environment variable so product code and tests do not embed the URL, video ID,
or local absolute path.

## Direct-Open Strybldr Seed

Opening this file directly should render through Strybldr. This seed is not a
replacement for the Import URL run; it is the static validation artifact used to
prove the same Storyboard projection and hardcode guard.

```json strybldr-storyboard
{
  "version": 1,
  "runId": "stryfork-import-url-validation",
  "createdAtMs": 1780110851619,
  "notes": "Validation input for Import URL -> neutral corpus source unit -> Strybldr storyboard. The URL literal belongs only in this external input file.",
  "sources": [
    {
      "sourceUnitId": "validation-input-import-url-source",
      "workspacePath": "docs/import-url-source.md",
      "relativePath": "import-url-source.md",
      "originalName": "import-url-source.md",
      "mediaKind": "video",
      "mimeHint": "text/markdown",
      "byteSize": 0,
      "textHash": "validation-input",
      "mediaUrl": "https://www.youtube.com/watch?v=77FAnT935IE"
    }
  ],
  "elements": [
    {
      "id": "validation-input-source-card",
      "sourceUnitId": "validation-input-import-url-source",
      "label": "Imported URL source",
      "confidence": 1,
      "sourceBox": null,
      "evidenceKind": "source-metadata",
      "provider": "fallback",
      "order": 1,
      "summary": "Source metadata identifies a YouTube video by Artlist with generated captions available.",
      "action": "Keep URL, title, author, video ID, and thumbnail as source evidence.",
      "prompt": "Use the imported URL metadata as the provenance anchor for this story fork."
    },
    {
      "id": "validation-input-setup-card",
      "sourceUnitId": "validation-input-import-url-source",
      "label": "Creative request setup",
      "confidence": 0.86,
      "sourceBox": null,
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 2,
      "summary": "The transcript frames a creator asking for specific AI video directions.",
      "action": "Convert the setup into one concise opening storyboard card.",
      "prompt": "Show a creator shaping a video concept through clear, specific requests."
    },
    {
      "id": "validation-input-action-branch",
      "sourceUnitId": "validation-input-import-url-source",
      "label": "Action branch",
      "confidence": 0.82,
      "sourceBox": null,
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 3,
      "summary": "One story direction uses an action-crime tone with stylized tension.",
      "action": "Keep this as an independent beat that can be approved or removed before generation.",
      "prompt": "Storyboard an action beat with stylized tension and dry humor."
    },
    {
      "id": "validation-input-sci-fi-branch",
      "sourceUnitId": "validation-input-import-url-source",
      "label": "Sci-fi branch",
      "confidence": 0.78,
      "sourceBox": null,
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 4,
      "summary": "A second direction introduces a contrasting sci-fi interruption.",
      "action": "Keep this branch independent from the action beat.",
      "prompt": "Storyboard a sudden sci-fi interruption that contrasts with an ordinary setting."
    },
    {
      "id": "validation-input-product-card",
      "sourceUnitId": "validation-input-import-url-source",
      "label": "Product CTA",
      "confidence": 0.9,
      "sourceBox": null,
      "evidenceKind": "user-edit",
      "provider": "fallback",
      "order": 5,
      "summary": "The ending positions Artlist and Seedance 2.0 as tools for AI video creation.",
      "action": "Keep product messaging separate from narrative beats for approval.",
      "prompt": "Close with a clear product-card beat after the story examples."
    }
  ]
}
```

## Validation Commands

Use this file as external input for the repo hardcode guard:

```bash
KNOWGRPH_FORBID_HARDCODE_INPUT="/path/to/knowgrph-stryfork-demo.md" npm --prefix canvas run test:ci:unit -- policy.forbidHardcodedYouTubeUrlLiteral
```

Focused runtime checks:

```bash
KNOWGRPH_STRYFORK_DEMO_INPUT="/path/to/knowgrph-stryfork-demo.md" npm --prefix canvas run test:ci:unit -- workspace.import.localFiles.strybldrRunnableRunAllSurface
npm --prefix canvas run test:ci:unit -- workspace.importUrl.youtube.strybldrStoryboard
npm --prefix canvas run test:ci:unit -- strybldr
npm --prefix canvas run test:ci:unit -- toolbar.workspaceSelect.visibleWhenCollapsed
npm --prefix canvas run test:ci:unit -- youtube
```

## Acceptance Checklist

- [x] The demo target is one Markdown document with valid frontmatter.
- [x] The input URL is explicit and traceable in the external validation file.
- [x] Repo code and tests consume the URL as input, not as a hardcoded fixture.
- [x] YouTube metadata and transcript availability are recorded without copying
  transcript text.
- [x] The direct-open seed uses the canonical `strybldr` renderer.
- [x] Renderer-selected Import URL creates a neutral corpus source unit.
- [x] Renderer-selected Import URL creates and focuses a `.strybldr.md`
  storyboard document.
- [x] Import local files activates this Markdown file as a Strybldr storyboard.
- [x] Import local files mounts the Strybldr Run all consumer panel without a
  demo-specific path or URL branch.
- [x] Toolbar `Run all` reuses the shared run event and opens the Strybldr
  floating panel consumer before dispatch.
- [x] Missing external video credentials create a structured fallback artifact
  instead of blocking the runnable demo.
- [x] No `stryfork` renderer alias, duplicate parser, duplicate URL import
  bridge, or provider-specific runtime is introduced.

## Guardrails

- Do not hardcode this URL in product code, tests, parser logic, import
  defaults, or generated workspace paths.
- Do not add a `stryfork` renderer alias. The runtime renderer remains
  `strybldr`.
- Do not add a second YouTube transcript stack. Use the existing Import URL and
  YouTube transcript owners.
- Do not run paid generation during import. Generation remains an explicit
  approved-card handoff.
- Do not backfill transcript cards after generation; cards must be edited and
  approved before handoff.
