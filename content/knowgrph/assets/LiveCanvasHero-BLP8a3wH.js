import{R as l,j as n}from"./react-BQOKVxhn.js";import{b as I,a as F,i as M,r as H,d as D,F as K,c as V,T as q,e as $,f as G}from"./textareaInvocationProjection-CQkgh-6g.js";import{s as B,n as z}from"./invocationTokens-Ds9GdaTV.js";import{A as E,G as N,a as S,V as Q,b as T,c as W,s as U,d as Z,e as J}from"./chatSkillRegistry-DCi66vrl.js";import{fF as X,b8 as Y,u as ee}from"./settings-mcp-docs-Bx_JSOTL.js";import{C as te,i as ae,r as ne}from"./CanvasEmbedImportPanel-eM32I3Vg.js";import{s as re}from"./liveCanvasHeroEmbed-oDBlNJ-s.js";import{s as oe}from"./CanvasViewport-DeUOqW07.js";import{ao as se}from"./index-BGNA012k.js";import{P as ie}from"./PlainTextInputEditor-Cvcoi74v.js";import{aT as ce,Q as le,aU as de}from"./ui-pavw-zpP.js";import"./agenticOsDocInvocations-gXu1gle-.js";import"./cardMarkdownPreviewUtils-Snprumho.js";import"./svgSnapshot-B3BM-etX.js";import"./settings-grabmapsMcpApiDocs-C5FY6fWa.js";import"./settings-vdeoxplnMcpApiDocs-BjtRrqVC.js";import"./mermaid-aJUK6jDY.js";import"./d3-W0BRPxKc.js";import"./settings-apiNativeBrowserMcpApiDocs-Dnj13qXI.js";import"./settings-crawlerAccessMcpApiDocs-D17IAl5Q.js";import"./settings-cloudflareAiGatewayMcpApiDocs-DM-qn8qz.js";import"./settings-openaiMcpApiDocs-Dvqdhb-f.js";import"./settings-exaMcpApiDocs-38iVQVPK.js";import"./settings-feishuBaseMcpApiDocs-RVWiydwW.js";import"./settings-larkAppMcpApiDocs-0x5cqnnS.js";import"./settings-stripeMcpApiDocs-DYx8s2YA.js";import"./settings-miromindMcpApiDocs-yWU6DZXR.js";import"./settings-operatorDeployMcpApiDocs-CX_Xz_Kr.js";import"./CanvasEmbedPanelShell-DCemrbS1.js";import"./useActiveGraphRenderData.impl-xKTLxT13.js";import"./forbidBrowserZoom-wv8dbqUk.js";import"./HighlightedCode-mJJx-z0M.js";import"./highlightjs-DW3kSZ-5.js";import"./canvasEmbedCodePanelEvent-m0ojjNct.js";import"./markdown-it-CqrcgIMp.js";const ue=["视频","video","分镜","逐镜","剧本","script","旁白","audio","shot"],me=e=>{var r;const t=((r=e.source)==null?void 0:r.kind)==="local"?String(e.source.path||""):"";return t.startsWith("workspace:")?t.slice(10):t||`/${e.name}`};function ve(e){return(e||[]).filter(t=>t.enabled!==!1&&/\.md$/i.test(t.name)).map(t=>({name:t.name,workspacePath:me(t),score:ue.reduce((r,o)=>r+(`${t.name}
${String(t.text||"").slice(0,8e3)}`.toLowerCase().includes(o)?1:0),0)})).filter(t=>t.score>0).sort((t,r)=>r.score-t.score||t.workspacePath.localeCompare(r.workspacePath))[0]||null}function he(e){const t=ve(e),r=t?`[${t.name}](workspace:${encodeURI(t.workspacePath)})`:"";return{source:t,query:[E,N[0].token,...T.map(o=>o.token),S[0].token,Q,r,"Generate an end-to-end agentic video canvas from the referenced script. Produce Chinese, Cantonese, and English audio variants with synchronized Chinese/English bilingual subtitles. Persist typed text, image, audio, and video artifacts for playable Cards, Widgets, Rich Media Panels, and BottomPanel Timeline video/FBF/audio lanes. Stop at approval or a missing provider capability."].filter(Boolean).join(" ")}}[E,...N.map(e=>e.token),...S.map(e=>e.token),...T.map(e=>e.token)];[E,N[0].token,...T.map(e=>e.token),S[0].token];function ge(e={}){var r,o;const t=he(e.sourceFiles);return{status:"ready",defaultQuery:t.query,sourceLabel:((r=t.source)==null?void 0:r.name)||null,sourceWorkspacePath:((o=t.source)==null?void 0:o.workspacePath)||null,invocations:[{token:E,group:"Route",label:"Video agent",summary:"Agentic video route.",sourcePath:"canvas/src/features/chat/generationInvocation.ts",keywords:["video","agent"]},...N.map(u=>({...u,group:"Provider",sourcePath:"canvas/src/features/chat/generationInvocation.ts",keywords:["provider"]})),...S.map(u=>({...u,group:"Specification",sourcePath:"canvas/src/features/chat/generationInvocation.ts",keywords:["specification"]})),...T.map(u=>({...u,group:"Outputs",sourcePath:"canvas/src/features/chat/generationInvocation.ts",keywords:["output"]}))]}}const O=(e,t)=>B(e).some(r=>r.kind==="token"&&r.value.toLowerCase()===t.toLowerCase()),pe=(e,t)=>O(e,t)?e.trim():[e.trim(),t].filter(Boolean).join(" "),x={eyebrow:"Knowgrph · Live canvas",headline:["Map intent.","Orchestrate agents.","Prove outcomes."],lede:"A source-backed canvas where `/` routes work, `#` sets meaning, and `@` binds context.",posture:["0 model calls before Run","Frontmatter SSOT","Approval-gated"],markdown:""};function A(e){return String(e||"").trim()}function fe(e){if(!Array.isArray(e))return[...x.headline];const t=e.map(r=>A(r)).filter(Boolean).slice(0,3);return t.length!==3?[...x.headline]:[t[0],t[1],t[2]]}function be(e){if(!Array.isArray(e))return x.posture;const t=e.map(r=>A(r)).filter(Boolean);return t.length>0?t:x.posture}function ke(){if(`---
schema: kgc-live-canvas-hero/v1
id: knowgrph-live-canvas-hero
version: 1.0.0
status: implemented
created: 2026-07-11
updated: 2026-07-11
author: airvio / joohwee
domain: knowgrph
tags: [agent-ready, live-canvas, hero, discovery]
title: Knowgrph · Live canvas
eyebrow: Knowgrph · Live canvas
headline:
  - Map intent.
  - Orchestrate agents.
  - Prove outcomes.
lede: A source-backed canvas where \`/\` routes work, \`#\` sets meaning, and \`@\` binds context.
posture:
  - 0 model calls before Run
  - Frontmatter SSOT
  - Approval-gated
enter_href: /knowgrph/
markdown_route: /knowgrph-live-canvas-hero.md
frontmatter_contract: required
---

# Knowgrph

## Live Canvas Hero

Map intent. Orchestrate agents. Prove outcomes.

A source-backed canvas where \`/\` routes work, \`#\` sets meaning, and \`@\` binds context.

## Agentic Grammar

- \`/\` routes intent
- \`#\` sets meaning
- \`@\` binds context

The Home command deck is **Agentic Video Canvas**. Its editable query is the SSOT: \`/video-agent\` selects the route, \`@provider.byteplus|@provider.openai\` selects the provider, \`@text|@image|@audio|@video\` selects outputs, and \`#spec.low|#spec.medium|#spec.high\` selects the specification. BytePlus and Low are defaults; the visual controls only edit these tokens.

## Actions

- [Enter Knowgrph](/knowgrph/)
- [Read this discovery markdown](/knowgrph-live-canvas-hero.md)
- [Inspect the agent-ready homepage](/)

## Execution Posture

- 0 model calls before Run
- Frontmatter SSOT
- Approval-gated

## Discovery Notes

- The React Live Canvas Hero reads its eyebrow, headline, lede, and posture labels from this document.
- Public discovery should advertise this route as the compact Markdown entry point for agent-first landing context.
`.trim())return`---
schema: kgc-live-canvas-hero/v1
id: knowgrph-live-canvas-hero
version: 1.0.0
status: implemented
created: 2026-07-11
updated: 2026-07-11
author: airvio / joohwee
domain: knowgrph
tags: [agent-ready, live-canvas, hero, discovery]
title: Knowgrph · Live canvas
eyebrow: Knowgrph · Live canvas
headline:
  - Map intent.
  - Orchestrate agents.
  - Prove outcomes.
lede: A source-backed canvas where \`/\` routes work, \`#\` sets meaning, and \`@\` binds context.
posture:
  - 0 model calls before Run
  - Frontmatter SSOT
  - Approval-gated
enter_href: /knowgrph/
markdown_route: /knowgrph-live-canvas-hero.md
frontmatter_contract: required
---

# Knowgrph

## Live Canvas Hero

Map intent. Orchestrate agents. Prove outcomes.

A source-backed canvas where \`/\` routes work, \`#\` sets meaning, and \`@\` binds context.

## Agentic Grammar

- \`/\` routes intent
- \`#\` sets meaning
- \`@\` binds context

The Home command deck is **Agentic Video Canvas**. Its editable query is the SSOT: \`/video-agent\` selects the route, \`@provider.byteplus|@provider.openai\` selects the provider, \`@text|@image|@audio|@video\` selects outputs, and \`#spec.low|#spec.medium|#spec.high\` selects the specification. BytePlus and Low are defaults; the visual controls only edit these tokens.

## Actions

- [Enter Knowgrph](/knowgrph/)
- [Read this discovery markdown](/knowgrph-live-canvas-hero.md)
- [Inspect the agent-ready homepage](/)

## Execution Posture

- 0 model calls before Run
- Frontmatter SSOT
- Approval-gated

## Discovery Notes

- The React Live Canvas Hero reads its eyebrow, headline, lede, and posture labels from this document.
- Public discovery should advertise this route as the compact Markdown entry point for agent-first landing context.
`;const e=globalThis.__KNOWGRPH_LIVE_CANVAS_HERO_MARKDOWN__;return typeof e=="string"?e:""}function xe(e){const t=String(e||"").trim();if(!t)return x;const o=X(Y(t)).meta,u=A(o.eyebrow)||x.eyebrow,y=fe(o.headline),w=A(o.lede)||x.lede,m=be(o.posture);return{eyebrow:u,headline:y,lede:w,posture:m,markdown:t}}function ye(){return xe(ke())}const we=e=>{if(e)try{e.focus({preventScroll:!0})}catch{e.focus()}};function Ce(e){const t=l.useRef(null),r=e.inputRef||t,o=l.useRef(null),u=l.useRef(null),[y,w]=l.useState({start:0,end:0}),m=e.selectionRange||y,k=l.useCallback(a=>{var s;w(a),(s=e.onSelectionRangeChange)==null||s.call(e,a)},[e]),g=l.useMemo(()=>({mediaAttachments:e.mediaAttachments}),[e.mediaAttachments]),p=l.useMemo(()=>I(e.value,g),[g,e.value]),f=l.useMemo(()=>F(e.value,g),[g,e.value]),j=m.end>m.start,d=p.hasOverlay&&!j,c=d&&M(e.value,m.start,m.end,g);l.useLayoutEffect(()=>{const a=r.current;if(!a)return;const s=a.selectionStart??f.length,i=a.selectionEnd??f.length;s===0&&i===0&&a.scrollTop!==0&&(a.scrollTop=0,o.current&&(o.current.scrollTop=0)),(m.start!==s||m.end!==i)&&k({start:s,end:i})},[f,r,m.end,m.start,k]);const b=l.useCallback((a,s)=>{var P;const i=a.selectionStart??s.length,v=a.selectionEnd??s.length,h=i===v?H(e.value,i,g):null,L=h==null?{start:i,end:v}:{start:h,end:h},C=u.current;u.current=null,h!=null&&(a.setSelectionRange(h,h),C&&(a.scrollLeft=C.left,a.scrollTop=C.top,o.current&&(o.current.scrollLeft=C.left,o.current.scrollTop=C.top))),k(L),(P=e.onDisplaySelectionChange)==null||P.call(e,s)},[g,e]),_=l.useCallback((a,s)=>{var v;if(!p.hasOverlay)return!1;const i=D({text:e.value,selectionStart:a.selectionStart??a.value.length,selectionEnd:a.selectionEnd??a.value.length,direction:s,mediaAttachments:e.mediaAttachments});return i?(e.onChange(i.text),(v=e.onProjectedDelete)==null||v.call(e),requestAnimationFrame(()=>{const h=r.current;h&&(we(h),h.setSelectionRange(i.cursor,i.cursor),k({start:i.cursor,end:i.cursor}))}),!0):!1},[r,p.hasOverlay,e]);return n.jsxs("section",{className:"relative h-full","data-kg-textarea-invocation-editor":"shared",children:[d?n.jsx(K,{input:e.value,mediaAttachments:e.mediaAttachments,projectedSelectionRange:m,showProjectedCaret:c,uiPanelTextFontClass:e.overlayTextClassName,overlayChromeClassName:e.overlayChromeClassName,projectedLayoutClassName:e.projectedLayoutClassName,overlayRef:o}):null,n.jsx(ie,{ref:r,id:e.id,value:f,onChange:a=>{var i;e.onChange(V(a,e.value,g)),(i=e.onDisplayChange)==null||i.call(e,a);const s=r.current;s&&b(s,a)},onSelect:a=>b(a.currentTarget,a.currentTarget.value),onPointerDown:a=>{u.current={left:a.currentTarget.scrollLeft,top:a.currentTarget.scrollTop}},onScroll:a=>{const s=o.current;s&&(s.scrollTop=a.currentTarget.scrollTop,s.scrollLeft=a.currentTarget.scrollLeft)},onBeforeInput:a=>{const s=a.nativeEvent.inputType,i=s==="deleteContentBackward"?"backward":s==="deleteContentForward"?"forward":null;!i||!_(a.currentTarget,i)||a.preventDefault()},onKeyDown:a=>{var i,v;const s=a.currentTarget;if(p.hasOverlay&&(a.metaKey||a.ctrlKey)&&a.key.toLowerCase()==="a"){a.preventDefault(),s.setSelectionRange(0,s.value.length),k({start:0,end:s.value.length}),(i=e.onSelectAll)==null||i.call(e);return}if(p.hasOverlay&&(a.key==="Backspace"||a.key==="Delete")&&_(s,a.key==="Backspace"?"backward":"forward")){a.preventDefault();return}e.submitOnModEnter&&(a.metaKey||a.ctrlKey)&&a.key==="Enter"&&(a.preventDefault(),(v=s.form)==null||v.requestSubmit())},placeholder:e.placeholder,ariaLabel:e.ariaLabel,ariaControls:e.ariaControls,ariaExpanded:e.ariaExpanded,disabled:e.disabled,multiline:!0,className:e.className,inputClassName:`${e.inputClassName||""} ${d?`text-transparent ${c?"caret-transparent":"caret-[color:var(--kg-text-primary)]"} ${e.projectedLayoutClassName}`:""}`,dataAttributes:{...e.dataAttributes,"data-kg-chat-input-overlay-active":d?"1":void 0,"data-kg-chat-input-media-overlay-active":d&&p.hasMedia?"1":void 0}})]})}function Ne(e){return n.jsx("section",{className:"relative mt-2 min-h-16 overflow-hidden rounded-xl border border-[color:var(--kg-border)] bg-[color-mix(in_srgb,var(--kg-code-bg)_88%,transparent)]",children:n.jsx(Ce,{value:e.value,onChange:e.onChange,id:"knowgrph-live-canvas-hero-query",ariaLabel:"Agentic Video Canvas",overlayTextClassName:"font-mono text-xs leading-5 text-[var(--kg-code-text)]",overlayChromeClassName:"px-3 py-2.5",projectedLayoutClassName:`${q} leading-5`,className:"relative z-0 min-h-16 w-full resize-none border-0 bg-transparent px-3 py-2.5 font-mono text-xs leading-5 text-[var(--kg-code-text)] outline-none md:resize-y",submitOnModEnter:!0,dataAttributes:{"data-kg-live-canvas-hero-query":"true"}})})}const R="inline-flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-lg border border-[color:var(--kg-border)] bg-[color-mix(in_srgb,var(--kg-panel-bg)_72%,transparent)] p-2.5 text-[var(--kg-text-primary)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kg-canvas-accent)] disabled:cursor-wait disabled:opacity-60";function Te(e){return e.split(/(`[^`]+`)/g).map((t,r)=>t.startsWith("`")&&t.endsWith("`")?n.jsx("span",{className:"font-mono text-[var(--kg-text-primary)]",children:t.slice(1,-1)},`${t}:${r}`):n.jsx(l.Fragment,{children:t},`${t}:${r}`))}function _e(e){const{model:t}=e,r=l.useMemo(ye,[]),[o,u]=l.useState(t.defaultQuery),y=l.useRef(t.defaultQuery),[w,m]=l.useState(""),[k,g]=l.useState(!1),p=l.useMemo(()=>W(o),[o]),f=(p==null?void 0:p.kinds)||[];l.useEffect(()=>{const d=y.current;y.current=t.defaultQuery,u(c=>c===d?t.defaultQuery:c)},[t.defaultQuery]),l.useEffect(()=>{const d=c=>{if(!ae(c))return;const b=ne(c.data);b&&re(b)};return window.addEventListener("message",d),()=>window.removeEventListener("message",d)},[]);const j=d=>{d.preventDefault();const c=z(o.trim());if(!c){m("Enter an agent-ready query before running the canvas.");return}if(m(""),!oe(c)){m("The canvas Chat surface is not ready. Keep the query here and try again.");return}};return n.jsxs("section",{className:"pointer-events-none absolute inset-0 z-[40] overflow-hidden text-[var(--kg-text-primary)]","aria-labelledby":"knowgrph-live-canvas-hero-title","data-kg-live-canvas-hero":"true","data-kg-live-canvas-hero-state":"ready","data-kg-live-canvas-hero-layout":"overlay-on-canvas",children:[n.jsx("section",{className:"absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,color-mix(in_srgb,var(--kg-canvas-bg)_14%,transparent)_25%,color-mix(in_srgb,var(--kg-canvas-bg)_92%,transparent)_56%,var(--kg-canvas-bg)_100%)] md:hidden","aria-hidden":"true"}),n.jsx("section",{className:"absolute inset-0 hidden bg-[linear-gradient(90deg,color-mix(in_srgb,var(--kg-canvas-bg)_96%,transparent)_0%,color-mix(in_srgb,var(--kg-canvas-bg)_82%,transparent)_34%,color-mix(in_srgb,var(--kg-canvas-bg)_16%,transparent)_60%,transparent_72%)] md:block","aria-hidden":"true"}),n.jsx("section",{className:"absolute -left-48 bottom-[-18rem] h-[38rem] w-[38rem] rounded-full bg-[color-mix(in_srgb,var(--kg-canvas-accent)_10%,transparent)] blur-3xl md:bottom-auto md:top-1/2 md:h-[46rem] md:w-[46rem] md:-translate-y-1/2","aria-hidden":"true"}),n.jsxs("article",{className:"pointer-events-auto absolute bottom-[calc(var(--kg-safe-bottom,0px)+var(--kg-canvas-viewport-edge-gap,12px)+var(--kg-toolbar-compact-surface-height,38px)+12px)] left-4 right-4 flex max-h-[calc(100dvh-var(--kg-main-toolbar-height,38px)-var(--kg-toolbar-compact-surface-height,38px)-4rem)] flex-col overflow-y-auto pr-1 md:bottom-auto md:left-8 md:right-auto md:top-1/2 md:w-[min(34rem,calc(100%-4rem))] md:max-h-[calc(100dvh-var(--kg-main-toolbar-height,38px)-2.5rem)] md:-translate-y-1/2 lg:left-12 lg:w-[34rem]","data-kg-live-canvas-hero-editorial":"overlay",children:[n.jsxs("p",{className:"flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--kg-text-secondary)]",children:[n.jsx("span",{className:"h-2 w-2 rounded-full bg-[var(--kg-canvas-accent)] shadow-[0_0_18px_var(--kg-canvas-accent)]","aria-hidden":"true"}),r.eyebrow]}),n.jsxs("h1",{id:"knowgrph-live-canvas-hero-title",className:"mt-3 text-balance text-3xl font-semibold leading-[1.02] tracking-[-0.045em] md:mt-4 md:text-5xl lg:text-[3.5rem]",children:[n.jsx("span",{className:"block",children:r.headline[0]}),n.jsx("span",{className:"block",children:r.headline[1]}),n.jsx("span",{className:"block text-[var(--kg-canvas-accent)]",children:r.headline[2]})]}),n.jsx("p",{className:"mt-4 max-w-[34rem] text-sm leading-6 text-[var(--kg-text-secondary)] sm:text-base",children:Te(r.lede)}),n.jsxs("form",{className:"mt-4 rounded-2xl border border-[color:var(--kg-border)] bg-[color-mix(in_srgb,var(--kg-panel-bg)_72%,transparent)] p-3 shadow-[0_18px_64px_color-mix(in_srgb,var(--kg-canvas-bg)_72%,transparent)] backdrop-blur-xl md:mt-6 md:p-4",onSubmit:j,"data-kg-live-canvas-hero-command-deck":"true",children:[n.jsx("label",{className:"text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--kg-text-secondary)]",htmlFor:"knowgrph-live-canvas-hero-query",children:"Agentic Video Canvas"}),n.jsx(Ne,{value:o,onChange:u}),t.sourceLabel?n.jsxs("p",{className:"mt-2 truncate text-[10px] text-[var(--kg-text-secondary)]",title:t.sourceWorkspacePath||t.sourceLabel,children:["Script: ",t.sourceLabel]}):null,n.jsx("section",{className:"mt-3 grid gap-2","aria-label":"Agentic video invocation controls",children:["Route","Provider","Specification","Outputs"].map(d=>n.jsxs("fieldset",{"data-kg-live-canvas-hero-invocation-group":d.toLowerCase(),children:[n.jsx("legend",{className:"text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--kg-text-secondary)]",children:d}),n.jsx("nav",{className:"mt-1 flex flex-wrap gap-1.5","aria-label":`${d} invocations`,children:t.invocations.filter(c=>c.group===d).map(c=>{const b=O(o,c.token),_=$(c.token)||{};return n.jsx("button",{type:"button",className:`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kg-canvas-accent)] ${b?"border-[var(--kg-canvas-accent)] bg-[color-mix(in_srgb,var(--kg-canvas-accent)_16%,transparent)] text-[var(--kg-text-primary)]":"border-[color:var(--kg-border)] bg-[color:var(--kg-panel-bg)]/70 text-[var(--kg-text-secondary)] hover:text-[var(--kg-text-primary)]"}`,"aria-pressed":b,title:G(c.token)||c.summary,"data-kg-live-canvas-hero-invocation-token":c.token,onClick:()=>u(a=>{const s=N.find(v=>v.token===c.token);if(s)return U(a,s.provider);if(c.token.startsWith("#spec."))return Z(a,c.token.slice(6));const i=T.find(v=>v.token===c.token);if(i){const v=f.includes(i.kind)?f.filter(h=>h!==i.kind):[...f,i.kind];return v.length?J(a,v):a}return pe(a,c.token)}),..._,children:c.token},c.token)})})]},d))}),n.jsxs("section",{className:"mt-4 flex flex-wrap items-center gap-2",children:[n.jsx("a",{href:se("/knowgrph/"),onClick:e.onEnter,className:"inline-flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--kg-canvas-accent)] bg-[var(--kg-canvas-accent)] p-2.5 text-slate-950 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kg-canvas-accent)]","aria-label":"Enter Knowgrph",title:"Enter Knowgrph","data-kg-live-canvas-hero-enter":"true",children:n.jsx(ce,{className:"h-4 w-4","aria-label":"Enter Knowgrph icon","data-kg-live-canvas-hero-action-icon":"enter"})}),n.jsx("button",{type:"submit",className:R,"aria-label":"Run all",title:"Run all","data-kg-live-canvas-hero-start":"true",children:n.jsx(le,{className:"h-4 w-4","aria-label":"Run icon","data-kg-live-canvas-hero-action-icon":"run"})}),n.jsx("button",{type:"button",onClick:()=>g(!0),className:R,"aria-label":"Import canvas embed",title:"Import canvas embed","data-kg-live-canvas-hero-import-embed":"true",children:n.jsx(de,{className:"h-4 w-4","aria-label":"Import canvas embed icon","data-kg-live-canvas-hero-action-icon":"import"})}),n.jsx("kbd",{className:"rounded-md border border-[color:var(--kg-border)] px-2 py-1 font-mono text-[10px] text-[var(--kg-text-secondary)]",title:"Start locally shortcut",children:"Ctrl/⌘↵"})]}),w?n.jsx("p",{className:"mt-2 text-xs text-red-500",role:"alert",children:w}):null]}),n.jsx("ul",{className:"mt-3 hidden flex-wrap gap-2 text-[10px] text-[var(--kg-text-secondary)] md:flex","aria-label":"Agent-ready execution posture",children:r.posture.map(d=>n.jsx("li",{className:"rounded-full border border-[color:var(--kg-border)] bg-[color-mix(in_srgb,var(--kg-panel-bg)_54%,transparent)] px-2.5 py-1 backdrop-blur-md",children:d},d))})]}),k?n.jsx(te,{onClose:()=>g(!1)}):null]})}function ct(e){const t=l.useMemo(()=>ge({sourceFiles:e.sourceFiles}),[e.sourceFiles]),r=ee(o=>o.requestZoom);return l.useEffect(()=>{let o=0;const u=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{r("fit",{intent:"fitToView"})})});return()=>{cancelAnimationFrame(u),o&&cancelAnimationFrame(o)}},[e.source.sourceLayerHash,r]),n.jsx("section",{className:"pointer-events-none absolute inset-0 z-[40] overflow-hidden","aria-label":"Knowgrph Live Canvas Hero","data-kg-live-canvas-hero-shell":"full-bleed","data-kg-live-canvas-hero-source":e.source.sourcePath,"data-kg-live-canvas-hero-source-graph-id":e.source.graphId||void 0,"data-kg-live-canvas-hero-source-revision":e.source.graphRevision,"data-kg-live-canvas-hero-source-schema":e.source.schema||void 0,children:n.jsx(_e,{...e,model:t})})}export{ct as LiveCanvasHero,_e as LiveCanvasHeroEditorial};
