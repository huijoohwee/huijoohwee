---
title: "Knowgrph Agentic Video Canvas Demo"
graphId: "md:knowgrph-agentic-video-canvas-demo"
doc_type: "Agentic Video Generation Demo"
date: "2026-07-12"
lang: "zh-Hans"
schema: "kgc-agentic-video-canvas/v1"
implementation_contract: "../../knowgrph/docs/documents/knowgrph-agentic-os-video-agent-prd-tad.companion.md"
template_policy: "Default, source-backed video-agent demonstration. The selected Markdown script owns creative context; provider-returned artifacts own all generated media; no generated URL, job id, transcript, or media fixture is authored here."
validation_input_forbid_hardcode_in_repo: "true"
deployed_api_claim: "false"
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "storyboard"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: false
kgDocumentStructureBaselineLock: false
kgBottomPanelOpen: true
kgBottomPanelTab: "timeline"
kgFloatingPanelOpen: true
kgFloatingPanelView: "chat"
kgVideoSequenceTimeline: true
kgVideoSequenceSources: []
kgSharedRendererContract:
  version: "shared-renderer-contract/v1"
  semanticIdentity: "buildScopedGraphSemanticKey"
  cardPreview: "CardMediaPreview + CardMarkdownPreview"
  widgetCard: "canvas:widgetCard"
  richMediaPanel: "RichMediaPanel"
  storyboardDisplay: "2D Renderer: Storyboard Card and Widget variants"
  storyboardSurfaces: ["Cards", "Widgets", "Rich Media Panels"]
  edgeModel: "active graph edges derive from this frontmatter-owned demo"
  timelineSurface: "BottomPanel Timeline video/FBF/audio transport"
  rendererPolicy: "source payloads and provider-returned artifacts own data; renderers project view state only"
agentic_video_contract:
  version: "knowgrph-agentic-video/v1"
  route: "/video-agent"
  provider:
    default: "byteplus-modelark"
    options: ["byteplus-modelark", "openai"]
  specification:
    default: "low"
    options: ["low", "medium", "high"]
  outputs: ["text", "image", "audio", "video"]
  source_binding: "Markdown source references are inserted with @ and remain canonical workspace: links while the composer projects the existing inline chip."
  audio_languages: ["zh-CN", "yue-HK", "en-US"]
  subtitle_languages: ["zh-CN", "en-US"]
  approval_policy: "Stop before a provider call when approval, credentials, or required provider capability is missing."
  persistence_policy: "Persist returned artifacts through existing Cloudflare storage utilities only after a successful provider response."
  projection_policy: "Use the same typed persisted artifacts in Canvas Cards, Widgets, Rich Media Panels, and BottomPanel Timeline video/FBF/audio lanes."
inputs:
  video_generation_demo_script: "workspace:/AI视频-港岛实景写实风-异城算计与女主绝境求生-终极统一执行总表.md"
  default_invocation: "/video-agent @provider.byteplus @text @image @audio @video #spec.low"
  provider: "byteplus-modelark"
  specification: "low"
  output_kinds: ["text", "image", "audio", "video"]
  audio_languages: ["Chinese", "Cantonese", "English"]
  subtitle_languages: ["Chinese", "English"]
  duration_seconds: 45
  aspect_ratio: "16:9"
  run_mode: "approval-gated"
  source_policy: "The imported script is source context, not a generated artifact. Keep its workspace reference in the prompt and preserve provenance in the final artifact manifest."
  generated_artifact_policy: "Keep text, image, audio, and video fields blank until the configured provider returns a typed result."
modelSelection:
  selectionModel: "projected-data"
  scope: "local-overrides-global"
  groups:
    provider:
      global: "byteplus-modelark"
      options: ["byteplus-modelark", "openai"]
    specification:
      global: "low"
      options: ["low", "medium", "high"]
    text:
      global: "runtime-selected"
      options: ["runtime-selected"]
    image:
      global: "runtime-selected"
      options: ["runtime-selected"]
    audio:
      global: "runtime-selected"
      options: ["runtime-selected"]
    video:
      global: "runtime-selected"
      options: ["runtime-selected"]
flow:
  direction: {key: direction, type: string, value: "LR"}
  edgeType: {key: edgeType, type: string, value: "smoothstep"}
  balancedViewportPreset: {key: balancedViewportPreset, type: string, value: "widgetFrontmatter"}
  computed: {key: computed, type: boolean, value: false}
  snapToGrid: {key: snapToGrid, type: boolean, value: true}
  nodes:
    - id: {key: id, type: string, value: "video_script_source"}
      type: {key: type, type: string, value: "InputWidget"}
      label: {key: label, type: string, value: "@ Video-generation demo script"}
      position: {key: position, type: object, value: {"x":0,"y":0}}
      handles: {key: handles, type: object, value: {"source":["video_generation_demo_script","invocation","provider","specification","output_kinds"]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"previewField":"invocation","previewMaxChars":140,"actions":[{"id":"edit","label":"Edit prompt","icon":"pencil","trigger":"openFieldEditor","targetField":"invocation"}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"out":{"video_generation_demo_script":"source_reference_signal","invocation":"video_agent_invocation_signal","provider":"provider_signal","specification":"specification_signal","output_kinds":"output_selection_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "agenticVideoSource"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      video_generation_demo_script: {key: video_generation_demo_script, type: markdown, value: "[AI视频-港岛实景写实风-异城算计与女主绝境求生-终极统一执行总表.md](workspace:/AI视频-港岛实景写实风-异城算计与女主绝境求生-终极统一执行总表.md)"}
      invocation: {key: invocation, type: textarea, value: "/video-agent @provider.byteplus @text @image @audio @video #spec.low"}
      provider: {key: provider, type: string, value: "byteplus-modelark"}
      specification: {key: specification, type: string, value: "low"}
      output_kinds: {key: output_kinds, type: array, value: ["text", "image", "audio", "video"]}
      run_status: {key: run_status, type: string, value: "ready-for-chat"}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Use @ to insert the imported script as the existing inline Markdown chip, then hand the editable / # @ prompt to FloatingPanel Chat."}
      "visual:importance": {key: "visual:importance", type: number, value: 30}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "video_text_generation"}
      type: {key: type, type: string, value: "TextGeneration"}
      label: {key: label, type: string, value: "Text widget · storyboard, prompts, subtitles"}
      position: {key: position, type: object, value: {"x":420,"y":-360}}
      handles: {key: handles, type: object, value: {"target":["video_generation_demo_script","invocation","provider","specification"],"source":["textArtifact","subtitleManifest"]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"statusField":"run_status","statusValues":{"awaiting-approval":"amber","complete":"green","error":"red"},"previewField":"textArtifact","previewMaxChars":140}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"video_generation_demo_script":"source_reference_signal","invocation":"video_agent_invocation_signal","provider":"provider_signal","specification":"specification_signal"},"out":{"textArtifact":"generated_text_signal","subtitleManifest":"subtitle_manifest_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "agenticVideoText"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      run_status: {key: run_status, type: string, value: "awaiting-approval"}
      textArtifact: {key: textArtifact, type: markdown, value: ""}
      subtitleManifest: {key: subtitleManifest, type: json, value: ""}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "A provider-returned text package contains the shot plan, prompts, narration, and synchronized Chinese/English subtitle manifest."}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -2}
    - id: {key: id, type: string, value: "video_image_generation"}
      type: {key: type, type: string, value: "ImageGeneration"}
      label: {key: label, type: string, value: "Image widget · source-consistent keyframes"}
      position: {key: position, type: object, value: {"x":420,"y":-120}}
      handles: {key: handles, type: object, value: {"target":["video_generation_demo_script","invocation","provider","specification"],"source":["imageUrl","imageManifest"]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"statusField":"run_status","statusValues":{"awaiting-approval":"amber","complete":"green","error":"red"},"previewField":"imageUrl","previewMaxChars":100}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"video_generation_demo_script":"source_reference_signal","invocation":"video_agent_invocation_signal","provider":"provider_signal","specification":"specification_signal"},"out":{"imageUrl":"generated_image_signal","imageManifest":"artifact_manifest_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "agenticVideoImage"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      run_status: {key: run_status, type: string, value: "awaiting-approval"}
      imageUrl: {key: imageUrl, type: text, value: ""}
      imageManifest: {key: imageManifest, type: json, value: ""}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Real provider-returned keyframes remain blank until completion; the same stored image artifact renders in the Card, Widget, and Rich Media Panel."}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -1}
    - id: {key: id, type: string, value: "video_audio_generation"}
      type: {key: type, type: string, value: "AudioGeneration"}
      label: {key: label, type: string, value: "Audio widget · Chinese, Cantonese, English"}
      position: {key: position, type: object, value: {"x":420,"y":120}}
      handles: {key: handles, type: object, value: {"target":["video_generation_demo_script","invocation","provider","specification","subtitleManifest"],"source":["audioUrl","audioManifest"]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"statusField":"run_status","statusValues":{"awaiting-approval":"amber","complete":"green","error":"red"},"previewField":"audioUrl","previewMaxChars":100}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"video_generation_demo_script":"source_reference_signal","invocation":"video_agent_invocation_signal","provider":"provider_signal","specification":"specification_signal","subtitleManifest":"subtitle_manifest_signal"},"out":{"audioUrl":"generated_audio_signal","audioManifest":"artifact_manifest_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "agenticVideoAudio"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      run_status: {key: run_status, type: string, value: "awaiting-approval"}
      audioUrl: {key: audioUrl, type: text, value: ""}
      audioManifest: {key: audioManifest, type: json, value: ""}
      audio_languages: {key: audio_languages, type: array, value: ["zh-CN", "yue-HK", "en-US"]}
      subtitle_languages: {key: subtitle_languages, type: array, value: ["zh-CN", "en-US"]}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Store three narration variants with one synchronized Chinese/English bilingual subtitle manifest; do not fabricate playable audio before return."}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "video_clip_generation"}
      type: {key: type, type: string, value: "VideoGeneration"}
      label: {key: label, type: string, value: "Video widget · 45-second master"}
      position: {key: position, type: object, value: {"x":420,"y":360}}
      handles: {key: handles, type: object, value: {"target":["video_generation_demo_script","invocation","provider","specification","imageUrl","audioUrl","subtitleManifest"],"source":["videoUrl","timelineManifest"]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"statusField":"run_status","statusValues":{"awaiting-approval":"amber","complete":"green","error":"red"},"previewField":"videoUrl","previewMaxChars":100}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"video_generation_demo_script":"source_reference_signal","invocation":"video_agent_invocation_signal","provider":"provider_signal","specification":"specification_signal","imageUrl":"generated_image_signal","audioUrl":"generated_audio_signal","subtitleManifest":"subtitle_manifest_signal"},"out":{"videoUrl":"generated_video_signal","timelineManifest":"timeline_manifest_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "agenticVideoMaster"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      run_status: {key: run_status, type: string, value: "awaiting-approval"}
      videoUrl: {key: videoUrl, type: text, value: ""}
      timelineManifest: {key: timelineManifest, type: json, value: ""}
      duration_seconds: {key: duration_seconds, type: number, value: 45}
      aspect_ratio: {key: aspect_ratio, type: string, value: "16:9"}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Use returned image, audio, subtitle, and video artifacts to materialize the playable master and video/FBF/audio BottomPanel Timeline lanes."}
      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
    - id: {key: id, type: string, value: "panel_text_artifact"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel · Text"}
      position: {key: position, type: object, value: {"x":820,"y":-360}}
      handles: {key: handles, type: object, value: {"target":["textArtifact","subtitleManifest"],"source":["textArtifact","subtitleManifest"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"textArtifact":"generated_text_signal","subtitleManifest":"subtitle_manifest_signal"},"out":{"textArtifact":"generated_text_signal","subtitleManifest":"subtitle_manifest_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaTextArtifact"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      textArtifact: {key: textArtifact, type: textarea, value: ""}
      subtitleManifest: {key: subtitleManifest, type: textarea, value: ""}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Projects the provider-returned text and bilingual subtitle manifest without duplicating it."}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -2}
    - id: {key: id, type: string, value: "panel_image_artifact"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel · Image"}
      position: {key: position, type: object, value: {"x":820,"y":-120}}
      handles: {key: handles, type: object, value: {"target":["imageUrl","imageManifest"],"source":["imageUrl"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"imageUrl":"generated_image_signal","imageManifest":"artifact_manifest_signal"},"out":{"imageUrl":"generated_image_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaImageArtifact"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      imageUrl: {key: imageUrl, type: text, value: ""}
      imageManifest: {key: imageManifest, type: textarea, value: ""}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Projects the one persisted provider image artifact into the shared Rich Media frame."}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -1}
    - id: {key: id, type: string, value: "panel_audio_artifact"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel · Audio"}
      position: {key: position, type: object, value: {"x":820,"y":120}}
      handles: {key: handles, type: object, value: {"target":["audioUrl","audioManifest"],"source":["audioUrl"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"audioUrl":"generated_audio_signal","audioManifest":"artifact_manifest_signal"},"out":{"audioUrl":"generated_audio_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaAudioArtifact"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      audioUrl: {key: audioUrl, type: text, value: ""}
      audioManifest: {key: audioManifest, type: textarea, value: ""}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Projects the returned Chinese, Cantonese, and English audio variants while the subtitle manifest stays in the text panel."}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "panel_video_artifact"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Rich Media Panel · Video + Timeline"}
      position: {key: position, type: object, value: {"x":820,"y":360}}
      handles: {key: handles, type: object, value: {"target":["videoUrl","timelineManifest"],"source":["videoUrl","timelineManifest"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"videoUrl":"generated_video_signal","timelineManifest":"timeline_manifest_signal"},"out":{"videoUrl":"generated_video_signal","timelineManifest":"timeline_manifest_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaVideoArtifact"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      videoUrl: {key: videoUrl, type: text, value: ""}
      timelineManifest: {key: timelineManifest, type: textarea, value: ""}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Projects the returned playable video and its compact video/FBF/audio timeline manifest; no static media URL is authored."}
      "visual:importance": {key: "visual:importance", type: number, value: 16}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
  edges:
    - {id: "edge:source:text-script", source: "video_script_source", sourceHandle: "video_generation_demo_script", target: "video_text_generation", targetHandle: "video_generation_demo_script", type: "source_reference_signal"}
    - {id: "edge:source:text-invocation", source: "video_script_source", sourceHandle: "invocation", target: "video_text_generation", targetHandle: "invocation", type: "video_agent_invocation_signal"}
    - {id: "edge:source:image-script", source: "video_script_source", sourceHandle: "video_generation_demo_script", target: "video_image_generation", targetHandle: "video_generation_demo_script", type: "source_reference_signal"}
    - {id: "edge:source:audio-script", source: "video_script_source", sourceHandle: "video_generation_demo_script", target: "video_audio_generation", targetHandle: "video_generation_demo_script", type: "source_reference_signal"}
    - {id: "edge:source:video-script", source: "video_script_source", sourceHandle: "video_generation_demo_script", target: "video_clip_generation", targetHandle: "video_generation_demo_script", type: "source_reference_signal"}
    - {id: "edge:text:panel", source: "video_text_generation", sourceHandle: "textArtifact", target: "panel_text_artifact", targetHandle: "textArtifact", type: "generated_text_signal"}
    - {id: "edge:subtitle:panel", source: "video_text_generation", sourceHandle: "subtitleManifest", target: "panel_text_artifact", targetHandle: "subtitleManifest", type: "subtitle_manifest_signal"}
    - {id: "edge:text:audio-subtitles", source: "video_text_generation", sourceHandle: "subtitleManifest", target: "video_audio_generation", targetHandle: "subtitleManifest", type: "subtitle_manifest_signal"}
    - {id: "edge:text:video-subtitles", source: "video_text_generation", sourceHandle: "subtitleManifest", target: "video_clip_generation", targetHandle: "subtitleManifest", type: "subtitle_manifest_signal"}
    - {id: "edge:image:panel", source: "video_image_generation", sourceHandle: "imageUrl", target: "panel_image_artifact", targetHandle: "imageUrl", type: "generated_image_signal"}
    - {id: "edge:image:video", source: "video_image_generation", sourceHandle: "imageUrl", target: "video_clip_generation", targetHandle: "imageUrl", type: "generated_image_signal"}
    - {id: "edge:audio:panel", source: "video_audio_generation", sourceHandle: "audioUrl", target: "panel_audio_artifact", targetHandle: "audioUrl", type: "generated_audio_signal"}
    - {id: "edge:audio:video", source: "video_audio_generation", sourceHandle: "audioUrl", target: "video_clip_generation", targetHandle: "audioUrl", type: "generated_audio_signal"}
    - {id: "edge:video:panel", source: "video_clip_generation", sourceHandle: "videoUrl", target: "panel_video_artifact", targetHandle: "videoUrl", type: "generated_video_signal"}
    - {id: "edge:timeline:panel", source: "video_clip_generation", sourceHandle: "timelineManifest", target: "panel_video_artifact", targetHandle: "timelineManifest", type: "timeline_manifest_signal"}
runtime_artifact_contract:
  text: {status: "blank-until-return", persisted_by: "existing Cloudflare artifact utilities", targets: ["Canvas Card", "Text Widget", "Rich Media Panel"]}
  image: {status: "blank-until-return", persisted_by: "existing Cloudflare artifact utilities", targets: ["Canvas Card", "Image Widget", "Rich Media Panel"]}
  audio: {status: "blank-until-return", persisted_by: "existing Cloudflare artifact utilities", targets: ["Canvas Card", "Audio Widget", "Rich Media Panel", "BottomPanel Timeline audio lane"]}
  video: {status: "blank-until-return", persisted_by: "existing Cloudflare artifact utilities", targets: ["Canvas Card", "Video Widget", "Rich Media Panel", "BottomPanel Timeline video and FBF lanes"]}
---

# E2E Agentic Video Canvas Demo

This is Knowgrph's default video-agent loading document. It opens a source-backed Canvas that starts with one editable invocation, one imported Markdown script reference, four typed generation widgets, and four empty Rich Media Panels. It never claims an artifact exists before the configured provider returns one.

## 1. Insert the source script with `@`

Import the supplied Markdown script through **Import local files** or **Import URL**, then insert it from FloatingPanel Chat with `@`. The shared composer keeps the raw source reference while rendering the existing inline media chip:

[@video-generation-demo-script · AI视频-港岛实景写实风-异城算计与女主绝境求生-终极统一执行总表.md](workspace:/AI视频-港岛实景写实风-异城算计与女主绝境求生-终极统一执行总表.md)

The link is a workspace reference, not a copied script body. Source Files remains the provenance owner.

## 2. Run the editable `/`, `@`, `#` invocation

```text
/video-agent @provider.byteplus @text @image @audio @video #spec.low [AI视频-港岛实景写实风-异城算计与女主绝境求生-终极统一执行总表.md](workspace:/AI视频-港岛实景写实风-异城算计与女主绝境求生-终极统一执行总表.md)

Build a 45-second, 16:9 Hong Kong live-action drama sequence from the referenced script. Generate a structured text package, source-consistent image keyframes, Chinese/Cantonese/English narration variants, synchronized Chinese/English bilingual subtitles, and a playable master video. Persist provider-returned artifacts and project the same typed records into Canvas Cards, Widgets, Rich Media Panels, and BottomPanel Timeline video/FBF/audio lanes. Stop when approval, credentials, or a required provider capability is unavailable.
```

- Provider: `@provider.byteplus` is the default; replace it with `@provider.openai` when selected in the shared provider control.
- Specification: `#spec.low` is the default cost-bounded route; `#spec.medium` and `#spec.high` stay visible, editable alternatives.
- Outputs: remove or add `@text`, `@image`, `@audio`, and `@video` in the same raw query; no hidden selection state owns the request.

## 3. Artifact handoff and projection

| Stage | Typed artifact | Required projection | Guard |
| --- | --- | --- | --- |
| Text | shot plan, generation prompts, narration, subtitle manifest | Text Card, Widget, Rich Media Panel | Preserve the Chinese/English subtitle timing from the returned manifest. |
| Image | keyframes and image manifest | Image Card, Widget, Rich Media Panel | Use only provider-returned image records. |
| Audio | Chinese, Cantonese, English variants and audio manifest | Audio Card, Widget, Rich Media Panel, Timeline audio lane | Keep language identity and subtitle synchronization. |
| Video | playable master and timeline manifest | Video Card, Widget, Rich Media Panel, Timeline video/FBF/audio lanes | Never invent a URL, job id, frame, or stream state. |

## Runtime boundary

This document demonstrates the complete data path, but provider execution remains approval- and credential-gated. When a call succeeds, existing Cloudflare artifact utilities persist the returned typed records for replay. When it cannot run, each output remains blank and the Canvas reports the blocking condition rather than rendering a fixture.
