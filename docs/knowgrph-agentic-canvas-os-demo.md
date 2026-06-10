---
title: "Knowgrph Agentic Canvas OS Demo - Market Radar To Rich Media Outputs"
graphId: "md:knowgrph-agentic-canvas-os-demo"
doc_type: "Agentic Canvas OS Demo"
date: "2026-06-08"
lang: "en-US"
schema: "kgc-computing-flow/v1"
kgCanvasSurfaceMode: "2d"
kgCanvasRenderMode: "2d"
kgCanvas2dRenderer: "flowEditor"
kgDocumentSemanticMode: "document"
kgFrontmatterModeEnabled: true
kgMultiDimTableModeEnabled: true
kgDocumentStructureBaselineLock: false
kgWorkflowManagerModeEnabled: true
kgSharedRendererContract:
  version: "shared-renderer-contract/v1"
  semanticIdentity: "buildScopedGraphSemanticKey"
  cardPreview: "CardMediaPreview + CardMarkdownPreview"
  widgetCard: "canvas:widgetCard"
  richMediaPanel: "RichMediaPanel"
  edgeModel: "active graph edges from the selected source graph"
  timelineSurface: "TimelineTransportControls + shared bottom-panel surface"
  rendererPolicy: "frontmatter and source payloads own data; renderers project view state only"
socket_types:
  idea_signal: {color: "#14b8a6", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [idea_signal]}
  evidence_signal: {color: "#22c55e", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [evidence_signal]}
  approval_signal: {color: "#f59e0b", edgeWidthPx: 3, handleStrokeWidthPx: 3, accepts: [approval_signal]}
  artifact_signal: {color: "#8b5cf6", edgeWidthPx: 2, handleStrokeWidthPx: 2, accepts: [artifact_signal]}
agentic_canvas_os_demo:
  schema_version: "agentic-canvas-os-demo/v1"
  run_id: {key: run_id, type: string, value: "kg_aos_market_to_rich_media_demo"}
  active_graph_mutated: {key: active_graph_mutated, type: boolean, value: false}
  mode: {key: mode, type: string, value: "local-inline-compute-demo"}
  source_truth: {key: source_truth, type: string, value: "Source Files Markdown frontmatter plus typed run manifest"}
  mutation_policy: {key: mutation_policy, type: string, value: "dry-run-first; human approval before repo writes, paid calls, deploys, browser-auth capture, or payment actions"}
  input_fields: {key: input_fields, type: array, value: ["idea","target_user","platform_scope","evidence_budget","artifact_goal"]}
  output_fields: {key: output_fields, type: array, value: ["market_radar.output","artifact_brief.output","text_generator.output","image_generator.output","audio_generator.output","video_generator.output"]}
flow_diagrams:
  key: flow_diagrams
  type: object
  value:
    market_to_artifact_gitgraph:
      key: market_to_artifact_gitgraph
      type: mermaid_gitgraph
      value: |-
        gitGraph
          commit id: "idea_input" tag: "idea"
          branch market_radar
          checkout market_radar
          commit id: "source_cards"
          commit id: "claim_graph"
          checkout main
          commit id: "approval_gate" tag: "review"
          commit id: "artifact_brief" tag: "brief"
          branch artifacts
          checkout artifacts
          commit id: "text"
          commit id: "image_prompt"
          commit id: "audio_script"
          commit id: "video_plan"
          checkout main
          merge artifacts id: "rich_media_panels"
    agentic_canvas_architecture:
      key: agentic_canvas_architecture
      type: mermaid_architecture
      value: |-
        architecture-beta
          group user(cloud)[Operator]
          group vercel(cloud)[Vercel Frontend]
          group aws(cloud)[AWS Agent API]
          group cloudflare(cloud)[Cloudflare Control Plane]
          group providers(cloud)[Provider Actions]
          service workspace(internet)[Source Files UI] in vercel
          service api(server)[Agent API] in aws
          service mcp(server)[MCP Agent Worker] in cloudflare
          service manifest(database)[Run Manifest] in cloudflare
          service exa(internet)[Exa Research] in providers
          service byteplus(server)[BytePlus Media] in providers
          service stripe(database)[Stripe Checkout] in providers
          workspace:R --> L:api
          api:R --> L:mcp
          mcp:B --> T:manifest
          mcp:R --> L:exa
          mcp:R --> L:byteplus
          mcp:R --> L:stripe
    agent_run_event_model:
      key: agent_run_event_model
      type: mermaid_eventmodeling
      value: |-
        eventmodeling
        tf 01 ui IdeaSubmitted
        tf 02 cmd RunMarketRadar
        tf 03 evt EvidencePackReady
        tf 04 pcr ArtifactBriefAgent
        tf 05 cmd RequestApproval
        tf 06 evt ApprovalGranted
        tf 07 cmd GenerateTextArtifact
        tf 08 cmd GenerateImagePrompt
        tf 09 cmd GenerateAudioScript
        tf 10 cmd GenerateVideoPlan
        tf 11 evt RichMediaPanelsReady
flow:
  direction: {key: direction, type: string, value: "LR"}
  edgeType: {key: edgeType, type: string, value: "smoothstep"}
  balancedViewportPreset: {key: balancedViewportPreset, type: string, value: "widgetFrontmatter"}
  computed: {key: computed, type: boolean, value: true}
  snapToGrid: {key: snapToGrid, type: boolean, value: true}
  nodes:
    - id: {key: id, type: string, value: "idea_input"}
      type: {key: type, type: string, value: "InputWidget"}
      label: {key: label, type: string, value: "Idea Input"}
      position: {key: position, type: object, value: {"x":0,"y":0}}
      handles: {key: handles, type: object, value: {"source":["idea","target_user","platform_scope","evidence_budget","artifact_goal"]}}
      artifact_goal: {key: artifact_goal, type: string, value: "Create source-backed text, image, audio, and video launch artifacts."}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"previewField":"idea","previewMaxChars":96,"onEdit":{"trigger":"runDownstream","targets":["market_radar"]},"actions":[{"id":"edit","label":"Edit","icon":"pencil","trigger":"openFieldEditor","targetField":"idea"},{"id":"run","label":"Run","icon":"play","trigger":"runDownstream","targets":["market_radar"]}]}}
      evidence_budget: {key: evidence_budget, type: number, value: 8}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"out":{"idea":"idea_signal","target_user":"idea_signal","platform_scope":"idea_signal","evidence_budget":"idea_signal","artifact_goal":"idea_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "agenticCanvasOsIdeaInput"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 5}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 0}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 5}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      idea: {key: idea, type: textarea, value: "Validate a lightweight agentic productivity product for solo founders that turns market signals into launch artifacts."}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Starts the runnable demo from idea, target user, platform scope, evidence budget, and artifact goal."}
      platform_scope: {key: platform_scope, type: array, value: ["x","producthunt","reddit","linkedin","xiaohongshu","tiktok","instagram"]}
      target_user: {key: target_user, type: string, value: "solo founder, creator, indie hacker"}
      "visual:importance": {key: "visual:importance", type: number, value: 32}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 18.94427190999916}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 0}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "market_radar"}
      type: {key: type, type: string, value: "TextGeneration"}
      label: {key: label, type: string, value: "Market Radar"}
      position: {key: position, type: object, value: {"x":360,"y":0}}
      handles: {key: handles, type: object, value: {"target":["prompt_in"],"source":["text_out","outputSrcDoc"]}}
      "canvas:runAction": {key: "canvas:runAction", type: object, value: {"fn":"compute","inputs":["prompt_in"],"outputs":["text_out","outputSrcDoc"],"updateBody":true,"bodyTokens":[{"token":"market_radar.output","field":"output"},{"token":"market_radar.outputSrcDoc","field":"outputSrcDoc"}]}}
      "canvas:widgetCard": {key: "canvas:widgetCard", type: object, value: {"statusField":"run_status","previewField":"output","previewMaxChars":120,"actions":[{"id":"run","label":"Run","icon":"radar","primary":true,"trigger":"compute"}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"prompt_in":"idea_signal"},"out":{"text_out":"evidence_signal","outputSrcDoc":"evidence_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:market_radar"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 6}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 4}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 2}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Runnable inline compute stage that turns idea scope into a source-card and evidence-grading plan."}
      output: {key: output, type: markdown, value: "Market Radar is ready to run."}
      outputSrcDoc: {key: outputSrcDoc, type: html_srcdoc, value: "<!doctype html><html><body style=\"font-family:system-ui;margin:0;padding:16px\"><h2>Market Radar</h2><p>8 source-card target; A/B/C evidence grading; approval required</p></body></html>"}
      run_status: {key: run_status, type: string, value: "idle"}
      text_out:
        key: text_out
        type: string
        value: |
          Market Radar Report

          Idea and scope: Validate a lightweight agentic productivity product for solo founders that turns market signals into launch artifacts. | solo founder, creator, indie hacker | x,producthunt,reddit,linkedin,xiaohongshu,tiktok,instagram | 8

          Evidence plan: capture 8 source cards across launch, social, and community surfaces. Grade every source A/B/C, mark blocked evidence, and keep demand claims unsupported until primary source cards exist.

          Decision: proceed to artifact brief only after review.

      "visual:importance": {key: "visual:importance", type: number, value: 36}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 19.79795897113271}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 1}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      compute:
        key: compute
        type: string
        value: |
          inputs => {
            const list = Array.isArray(inputs.prompt_in) ? inputs.prompt_in : [inputs.prompt_in]
            const text = list.map(v => String(v || "").trim()).filter(Boolean).join(" | ")
            const output = "Market Radar Report\n\nIdea and scope: " + text + "\n\nEvidence plan: capture 8 source cards across launch, social, and community surfaces. Grade every source A/B/C, mark blocked evidence, and keep demand claims unsupported until primary source cards exist.\n\nDecision: proceed to artifact brief only after review."
            const outputSrcDoc = "<!doctype html><html><body style=\"font-family:system-ui;margin:0;padding:16px\"><h2>Market Radar</h2><p>8 source-card target; A/B/C evidence grading; approval required</p></body></html>"
            return { text_out: output, outputSrcDoc }
          }
    - id: {key: id, type: string, value: "approval_gate"}
      type: {key: type, type: string, value: "InputWidget"}
      label: {key: label, type: string, value: "Approval Gate"}
      position: {key: position, type: object, value: {"x":720,"y":-180}}
      handles: {key: handles, type: object, value: {"target":["market_report"],"source":["approval_state"]}}
      approval_state: {key: approval_state, type: string, value: "approved_for_demo_dry_run"}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"market_report":"evidence_signal"},"out":{"approval_state":"approval_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:approval_gate"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 2}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 1}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Human approval checkpoint before live retrieval, paid generation, publishing, or payment actions."}
      risk: {key: risk, type: string, value: "Live retrieval, paid media generation, browser-auth capture, publishing, and payment actions still require separate approval."}
      "visual:importance": {key: "visual:importance", type: number, value: 20}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15.65685424949238}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -1}
    - id: {key: id, type: string, value: "artifact_brief"}
      type: {key: type, type: string, value: "TextGeneration"}
      label: {key: label, type: string, value: "Artifact Brief"}
      position: {key: position, type: object, value: {"x":720,"y":80}}
      handles: {key: handles, type: object, value: {"target":["prompt_in"],"source":["text_out","outputSrcDoc"]}}
      "canvas:runAction": {key: "canvas:runAction", type: object, value: {"fn":"compute","inputs":["prompt_in"],"outputs":["text_out","outputSrcDoc"],"updateBody":true,"bodyTokens":[{"token":"artifact_brief.output","field":"output"},{"token":"artifact_brief.outputSrcDoc","field":"outputSrcDoc"}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"prompt_in":"approval_signal"},"out":{"text_out":"artifact_signal","outputSrcDoc":"artifact_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:artifact_brief"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 7}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 3}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 4}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Runnable inline compute stage that turns reviewed market evidence into an artifact brief."}
      output: {key: output, type: markdown, value: "Artifact brief is ready to run."}
      outputSrcDoc: {key: outputSrcDoc, type: html_srcdoc, value: "<!doctype html><html><body style=\"font-family:system-ui;margin:0;padding:16px\"><h2>Artifact Brief</h2><p>Text; image prompt; audio script; video plan</p></body></html>"}
      text_out:
        key: text_out
        type: string
        value: |
          Artifact Brief

          Source basis: Market Radar Report

          Idea and scope: Validate a lightweight agentic productivity product for solo founders that turns market signals into launch artifacts. | solo founder, creator, indie hacker | x,producthunt,reddit,linkedin,xiaohongshu,tiktok,instagram | 8

          Evidence plan: capture 8 source cards across launch, social,

          Generate four draft artifacts: concise launch copy, hero image prompt, thirty-second audio script, and short demo video plan. Keep each artifact tied to source-backed claims and mark it draft until reviewed.

      "visual:importance": {key: "visual:importance", type: number, value: 40}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 20.583005244258363}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 2}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      compute:
        key: compute
        type: string
        value: |
          inputs => {
            const market = String(inputs.prompt_in || "").trim()
            const output = "Artifact Brief\n\nSource basis: " + market.slice(0, 320) + "\n\nGenerate four draft artifacts: concise launch copy, hero image prompt, thirty-second audio script, and short demo video plan. Keep each artifact tied to source-backed claims and mark it draft until reviewed."
            const outputSrcDoc = "<!doctype html><html><body style=\"font-family:system-ui;margin:0;padding:16px\"><h2>Artifact Brief</h2><p>Text; image prompt; audio script; video plan</p></body></html>"
            return { text_out: output, outputSrcDoc }
          }
    - id: {key: id, type: string, value: "text_generator"}
      type: {key: type, type: string, value: "TextGeneration"}
      label: {key: label, type: string, value: "Text Artifact Generator"}
      position: {key: position, type: object, value: {"x":1080,"y":-300}}
      handles: {key: handles, type: object, value: {"target":["prompt_in"],"source":["text_out","outputSrcDoc"]}}
      "canvas:runAction": {key: "canvas:runAction", type: object, value: {"fn":"compute","inputs":["prompt_in"],"outputs":["text_out","outputSrcDoc"],"updateBody":true,"bodyTokens":[{"token":"text_generator.output","field":"output"}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"prompt_in":"artifact_signal"},"out":{"text_out":"artifact_signal","outputSrcDoc":"artifact_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:text_generator"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 3}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 2}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Runnable inline compute branch for launch copy."}
      output: {key: output, type: markdown, value: "Text artifact is ready to run."}
      outputSrcDoc: {key: outputSrcDoc, type: html_srcdoc, value: "<!doctype html><html><body style=\"font-family:system-ui;margin:0;padding:16px\"><h2>Text Artifact</h2><p>Launch copy draft generated from approved brief.</p></body></html>"}
      text_out:
        key: text_out
        type: string
        value: |
          Launch Copy

          Knowgrph Agentic Canvas OS turns scattered market signals into a source-backed pipeline: validate the idea, approve the claim graph, then generate text, image, audio, and video launch artifacts.

          Basis: Artifact Brief

          Source basis: Market Radar Report

          Idea and scope: Validate a lightweight agentic productivity product for solo founders that turns market signals into launch artifacts. | solo founder, creator, indie hac

      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 16.928203230275507}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 3}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -2}
      compute: {key: compute, type: string, value: "inputs => { const brief = String(inputs.prompt_in || '').trim(); const output = 'Launch Copy\\n\\nKnowgrph Agentic Canvas OS turns scattered market signals into a source-backed pipeline: validate the idea, approve the claim graph, then generate text, image, audio, and video launch artifacts.\\n\\nBasis: ' + brief.slice(0, 220); return { text_out: output, outputSrcDoc: '<!doctype html><html><body style=\"font-family:system-ui;margin:0;padding:16px\"><h2>Text Artifact</h2><p>Launch copy draft generated from approved brief.</p></body></html>' } }"}
    - id: {key: id, type: string, value: "image_generator"}
      type: {key: type, type: string, value: "TextGeneration"}
      label: {key: label, type: string, value: "Image Artifact Generator"}
      position: {key: position, type: object, value: {"x":1080,"y":-100}}
      handles: {key: handles, type: object, value: {"target":["prompt_in"],"source":["text_out","outputSrcDoc"]}}
      "canvas:runAction": {key: "canvas:runAction", type: object, value: {"fn":"compute","inputs":["prompt_in"],"outputs":["text_out","outputSrcDoc"],"updateBody":true,"bodyTokens":[{"token":"image_generator.output","field":"output"}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"prompt_in":"artifact_signal"},"out":{"text_out":"artifact_signal","outputSrcDoc":"artifact_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:image_generator"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 3}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 2}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Runnable inline compute branch for an image-generation prompt."}
      output: {key: output, type: textarea, value: "Image prompt is ready to run."}
      outputSrcDoc: {key: outputSrcDoc, type: html_srcdoc, value: "<!doctype html><html><body style=\"font-family:system-ui;margin:0;padding:16px\"><h2>Image Prompt</h2><p>Dashboard hero visual prompt ready for image generation.</p></body></html>"}
      text_out:
        key: text_out
        type: string
        value: |
          Hero Image Prompt

          A clean operator dashboard on a wide canvas: idea input, market radar source cards, A/B/C evidence badges, human approval gate, and four generated artifact lanes. Polished SaaS interface, crisp typography, source-backed claim graph, no decorative blobs.

      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 16.928203230275507}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 3}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -1}
      compute: {key: compute, type: string, value: "inputs => { const output = 'Hero Image Prompt\\n\\nA clean operator dashboard on a wide canvas: idea input, market radar source cards, A/B/C evidence badges, human approval gate, and four generated artifact lanes. Polished SaaS interface, crisp typography, source-backed claim graph, no decorative blobs.'; return { text_out: output, outputSrcDoc: '<!doctype html><html><body style=\"font-family:system-ui;margin:0;padding:16px\"><h2>Image Prompt</h2><p>Dashboard hero visual prompt ready for image generation.</p></body></html>' } }"}
    - id: {key: id, type: string, value: "audio_generator"}
      type: {key: type, type: string, value: "TextGeneration"}
      label: {key: label, type: string, value: "Audio Artifact Generator"}
      position: {key: position, type: object, value: {"x":1080,"y":100}}
      handles: {key: handles, type: object, value: {"target":["prompt_in"],"source":["text_out","outputSrcDoc"]}}
      "canvas:runAction": {key: "canvas:runAction", type: object, value: {"fn":"compute","inputs":["prompt_in"],"outputs":["text_out","outputSrcDoc"],"updateBody":true,"bodyTokens":[{"token":"audio_generator.output","field":"output"}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"prompt_in":"artifact_signal"},"out":{"text_out":"artifact_signal","outputSrcDoc":"artifact_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:audio_generator"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 3}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 2}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Runnable inline compute branch for an audio narration script."}
      output: {key: output, type: textarea, value: "Audio script is ready to run."}
      outputSrcDoc: {key: outputSrcDoc, type: html_srcdoc, value: "<!doctype html><html><body style=\"font-family:system-ui;margin:0;padding:16px\"><h2>Audio Script</h2><p>Thirty-second narration draft ready for voice generation.</p></body></html>"}
      text_out:
        key: text_out
        type: string
        value: |
          Audio Script

          Scattered market signals slow down every launch. Knowgrph Agentic Canvas OS turns those signals into source cards, claim graphs, approval gates, and ready-to-review launch artifacts. Validate first, generate second, ship with evidence.

      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 16.928203230275507}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 3}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
      compute: {key: compute, type: string, value: "inputs => { const output = 'Audio Script\\n\\nScattered market signals slow down every launch. Knowgrph Agentic Canvas OS turns those signals into source cards, claim graphs, approval gates, and ready-to-review launch artifacts. Validate first, generate second, ship with evidence.'; return { text_out: output, outputSrcDoc: '<!doctype html><html><body style=\"font-family:system-ui;margin:0;padding:16px\"><h2>Audio Script</h2><p>Thirty-second narration draft ready for voice generation.</p></body></html>' } }"}
    - id: {key: id, type: string, value: "video_generator"}
      type: {key: type, type: string, value: "TextGeneration"}
      label: {key: label, type: string, value: "Video Artifact Generator"}
      position: {key: position, type: object, value: {"x":1080,"y":300}}
      handles: {key: handles, type: object, value: {"target":["prompt_in"],"source":["text_out","outputSrcDoc"]}}
      "canvas:runAction": {key: "canvas:runAction", type: object, value: {"fn":"compute","inputs":["prompt_in"],"outputs":["text_out","outputSrcDoc"],"updateBody":true,"bodyTokens":[{"token":"video_generator.output","field":"output"}]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"prompt_in":"artifact_signal"},"out":{"text_out":"artifact_signal","outputSrcDoc":"artifact_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "fm:video_generator"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 3}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 1}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 2}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Runnable inline compute branch for a video storyboard plan."}
      output: {key: output, type: markdown, value: "Video plan is ready to run."}
      outputSrcDoc: {key: outputSrcDoc, type: html_srcdoc, value: "<!doctype html><html><body style=\"font-family:system-ui;margin:0;padding:16px\"><h2>Video Plan</h2><p>Five-scene demo storyboard ready for video generation.</p></body></html>"}
      text_out:
        key: text_out
        type: string
        value: |
          Video Plan

          Scene 1: founder enters product idea. Scene 2: Market Radar gathers source cards and grades evidence. Scene 3: approval gate blocks unsupported or paid actions. Scene 4: artifact brief fans out into text, image, audio, and video branches. Scene 5: demo pack shows review-ready outputs.
      "visual:importance": {key: "visual:importance", type: number, value: 24}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 16.928203230275507}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 3}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
      compute: {key: compute, type: string, value: "inputs => { const output = 'Video Plan\\n\\nScene 1: founder enters product idea. Scene 2: Market Radar gathers source cards and grades evidence. Scene 3: approval gate blocks unsupported or paid actions. Scene 4: artifact brief fans out into text, image, audio, and video branches. Scene 5: demo pack shows review-ready outputs.'; return { text_out: output, outputSrcDoc: '<!doctype html><html><body style=\"font-family:system-ui;margin:0;padding:16px\"><h2>Video Plan</h2><p>Five-scene demo storyboard ready for video generation.</p></body></html>' } }"}
    - id: {key: id, type: string, value: "text_output_panel"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Text Output Panel"}
      position: {key: position, type: object, value: {"x":1460,"y":-300}}
      handles: {key: handles, type: object, value: {"target":["output","outputSrcDoc"],"source":["output","outputSrcDoc"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"output":"artifact_signal","outputSrcDoc":"artifact_signal"},"out":{"output":"artifact_signal","outputSrcDoc":"artifact_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 2}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 2}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Rich Media Panel that renders connected launch copy output."}
      media_interactive: {key: media_interactive, type: boolean, value: true}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      "visual:importance": {key: "visual:importance", type: number, value: 20}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15.65685424949238}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 4}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -2}
    - id: {key: id, type: string, value: "image_output_panel"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Image Output Panel"}
      position: {key: position, type: object, value: {"x":1460,"y":-100}}
      handles: {key: handles, type: object, value: {"target":["output","outputSrcDoc"],"source":["output","outputSrcDoc"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"output":"artifact_signal","outputSrcDoc":"artifact_signal"},"out":{"output":"artifact_signal","outputSrcDoc":"artifact_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 2}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 2}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Rich Media Panel that renders connected image prompt output."}
      media_interactive: {key: media_interactive, type: boolean, value: true}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      "visual:importance": {key: "visual:importance", type: number, value: 20}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15.65685424949238}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 4}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: -1}
    - id: {key: id, type: string, value: "audio_output_panel"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Audio Output Panel"}
      position: {key: position, type: object, value: {"x":1460,"y":100}}
      handles: {key: handles, type: object, value: {"target":["output","outputSrcDoc"],"source":["output","outputSrcDoc"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"output":"artifact_signal","outputSrcDoc":"artifact_signal"},"out":{"output":"artifact_signal","outputSrcDoc":"artifact_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 2}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 2}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Rich Media Panel that renders connected audio script output."}
      media_interactive: {key: media_interactive, type: boolean, value: true}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      "visual:importance": {key: "visual:importance", type: number, value: 20}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15.65685424949238}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 4}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 0}
    - id: {key: id, type: string, value: "video_output_panel"}
      type: {key: type, type: string, value: "RichMediaPanel"}
      label: {key: label, type: string, value: "Video Output Panel"}
      position: {key: position, type: object, value: {"x":1460,"y":300}}
      handles: {key: handles, type: object, value: {"target":["output","outputSrcDoc"],"source":["output","outputSrcDoc"]}}
      "flow:portTypes": {key: "flow:portTypes", type: object, value: {"in":{"output":"artifact_signal","outputSrcDoc":"artifact_signal"},"out":{"output":"artifact_signal","outputSrcDoc":"artifact_signal"}}}
      "flow:widgetFormId": {key: "flow:widgetFormId", type: string, value: "richMediaPanel"}
      "frontmatter:primitive": {key: "frontmatter:primitive", type: string, value: "node"}
      "graph:degree": {key: "graph:degree", type: number, value: 2}
      "graph:inDegree": {key: "graph:inDegree", type: number, value: 2}
      "graph:outDegree": {key: "graph:outDegree", type: number, value: 0}
      "graph:structuralDegree": {key: "graph:structuralDegree", type: number, value: 0}
      "kgc:readingSummary": {key: "kgc:readingSummary", type: string, value: "Rich Media Panel that renders connected video storyboard output."}
      media_interactive: {key: media_interactive, type: boolean, value: true}
      output: {key: output, type: textarea, value: ""}
      outputSrcDoc: {key: outputSrcDoc, type: textarea, value: ""}
      "visual:importance": {key: "visual:importance", type: number, value: 20}
      "visual:nodeSize": {key: "visual:nodeSize", type: number, value: 15.65685424949238}
      "visual:xIndex": {key: "visual:xIndex", type: number, value: 4}
      "visual:yIndex": {key: "visual:yIndex", type: number, value: 1}
  edges:
    - {"id":"edge_idea_to_market","source":"idea_input","sourceHandle":"idea","target":"market_radar","targetHandle":"prompt_in","label":"idea","type":"idea_signal"}
    - {"id":"edge_target_to_market","source":"idea_input","sourceHandle":"target_user","target":"market_radar","targetHandle":"prompt_in","label":"target user","type":"idea_signal"}
    - {"id":"edge_scope_to_market","source":"idea_input","sourceHandle":"platform_scope","target":"market_radar","targetHandle":"prompt_in","label":"platform scope","type":"idea_signal"}
    - {"id":"edge_budget_to_market","source":"idea_input","sourceHandle":"evidence_budget","target":"market_radar","targetHandle":"prompt_in","label":"evidence budget","type":"idea_signal"}
    - {"id":"edge_market_to_gate","source":"market_radar","sourceHandle":"text_out","target":"approval_gate","targetHandle":"market_report","label":"market report review","type":"evidence_signal"}
    - {"id":"edge_market_to_brief","source":"market_radar","sourceHandle":"text_out","target":"artifact_brief","targetHandle":"prompt_in","label":"source-backed report","type":"evidence_signal"}
    - {"id":"edge_goal_to_brief","source":"idea_input","sourceHandle":"artifact_goal","target":"artifact_brief","targetHandle":"prompt_in","label":"artifact goal","type":"idea_signal"}
    - {"id":"edge_approval_to_brief","source":"approval_gate","sourceHandle":"approval_state","target":"artifact_brief","targetHandle":"prompt_in","label":"approval state","type":"approval_signal"}
    - {"id":"edge_brief_to_text","source":"artifact_brief","sourceHandle":"text_out","target":"text_generator","targetHandle":"prompt_in","label":"brief to text","type":"artifact_signal"}
    - {"id":"edge_brief_to_image","source":"artifact_brief","sourceHandle":"text_out","target":"image_generator","targetHandle":"prompt_in","label":"brief to image","type":"artifact_signal"}
    - {"id":"edge_brief_to_audio","source":"artifact_brief","sourceHandle":"text_out","target":"audio_generator","targetHandle":"prompt_in","label":"brief to audio","type":"artifact_signal"}
    - {"id":"edge_brief_to_video","source":"artifact_brief","sourceHandle":"text_out","target":"video_generator","targetHandle":"prompt_in","label":"brief to video","type":"artifact_signal"}
    - {"id":"edge_text_to_panel_output","source":"text_generator","sourceHandle":"text_out","target":"text_output_panel","targetHandle":"output","label":"text output","type":"artifact_signal"}
    - {"id":"edge_text_to_panel_srcdoc","source":"text_generator","sourceHandle":"outputSrcDoc","target":"text_output_panel","targetHandle":"outputSrcDoc","label":"text panel preview","type":"artifact_signal"}
    - {"id":"edge_image_to_panel_output","source":"image_generator","sourceHandle":"text_out","target":"image_output_panel","targetHandle":"output","label":"image output","type":"artifact_signal"}
    - {"id":"edge_image_to_panel_srcdoc","source":"image_generator","sourceHandle":"outputSrcDoc","target":"image_output_panel","targetHandle":"outputSrcDoc","label":"image panel preview","type":"artifact_signal"}
    - {"id":"edge_audio_to_panel_output","source":"audio_generator","sourceHandle":"text_out","target":"audio_output_panel","targetHandle":"output","label":"audio output","type":"artifact_signal"}
    - {"id":"edge_audio_to_panel_srcdoc","source":"audio_generator","sourceHandle":"outputSrcDoc","target":"audio_output_panel","targetHandle":"outputSrcDoc","label":"audio panel preview","type":"artifact_signal"}
    - {"id":"edge_video_to_panel_output","source":"video_generator","sourceHandle":"text_out","target":"video_output_panel","targetHandle":"output","label":"video output","type":"artifact_signal"}
    - {"id":"edge_video_to_panel_srcdoc","source":"video_generator","sourceHandle":"outputSrcDoc","target":"video_output_panel","targetHandle":"outputSrcDoc","label":"video panel preview","type":"artifact_signal"}
---

## Response

### Market Radar Report

{{market_radar.output}}

### Artifact Brief

{{artifact_brief.output}}

### Text Artifact

{{text_generator.output}}

### Image Artifact Prompt

{{image_generator.output}}

### Audio Artifact Script

{{audio_generator.output}}

### Video Artifact Plan

{{video_generator.output}}

## Rich Media Outputs

- Text panel: `text_output_panel.output`
- Image panel: `image_output_panel.output`
- Audio panel: `audio_output_panel.output`
- Video panel: `video_output_panel.output`

## Inputs

- Idea: {{idea_input.idea}}
- Target user: {{idea_input.target_user}}
- Platform scope: {{idea_input.platform_scope}}
- Evidence budget: {{idea_input.evidence_budget}}
- Artifact goal: {{idea_input.artifact_goal}}

## Guardrails

- Run/Run All uses local inline compute, so the demo is runnable without API keys.
- Live web retrieval, browser-auth capture, paid media generation, publishing, and payment actions remain approval-gated.
