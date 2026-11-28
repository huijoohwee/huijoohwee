import{_ as A}from"./monaco-CIHUCcek.js";import{b as I}from"./htmlVideoFlowNode-DNsTkQkx.js";import{H as b}from"./index-UoQry1Vz.js";import{M as T}from"./mediaFormatPreference-DLIqCqAq.js";import"./react-BhUDf-ol.js";import"./settings-mcp-core-DJzfZbBb.js";import"./settings-grabmapsMcpApiDocs-DhlgHA-X.js";import"./settings-byteplusModelArkMcpApiDocs-mUzvXOy6.js";import"./settings-crawlerAccessMcpApiDocs-FbTiiSjF.js";import"./d3-Bu_8eYpz.js";import"./settings-apiNativeBrowserMcpApiDocs-CkaxPEsz.js";import"./settings-externalMcpToolServerDocs-CTdPWdRS.js";import"./settings-agentic-graph-tool-server-docs-BCei84JU.js";import"./settings-tradingRuntimeGatewayDocs-CgmrbVts.js";import"./settings-cloudflareAiGatewayMcpApiDocs-CCit8X2C.js";import"./settings-openaiMcpApiDocs-BVnt_7Wn.js";import"./settings-exaMcpApiDocs-EeJAWtuI.js";import"./settings-moomooMarketMcpApiDocs-CW7uK4Er.js";import"./settings-feishuBaseMcpApiDocs-Bo1so-pP.js";import"./settings-larkAppMcpApiDocs-B-1tyyAP.js";import"./settings-stripeMcpApiDocs-Bs-bsHhe.js";import"./settings-miromindMcpApiDocs-BOKygnYG.js";import"./settings-sealionMcpApiDocs-C4yAPi1m.js";import"./settings-vdeoxplnMcpApiDocs-D_CoejYR.js";import"./settings-operatorDeployMcpApiDocs-DkqA5zvw.js";import"./settings-videodbMcpApiDocs-BmdX3nbF.js";import"./ui-C18pvYdn.js";import"./design-system-panel-DwsI5PnY.js";const x=T,S=8e6,k=()=>{if(typeof document>"u"||typeof Image>"u"||typeof Blob>"u"||typeof HTMLCanvasElement>"u"||typeof HTMLIFrameElement>"u")throw new Error("canvas-2d video rendering requires a browser runtime");if(typeof MediaRecorder>"u"||typeof HTMLCanvasElement.prototype.captureStream!="function")throw new Error("canvas-2d video rendering requires browser MediaRecorder and canvas captureStream support")},F=e=>JSON.stringify(e??{}).replace(/</g,"\\u003c"),$=e=>`
html,
body {
  width: ${e.width}px;
  height: ${e.height}px;
  margin: 0;
  overflow: hidden;
  background: transparent;
}
main[data-kg-html-video-frame-host="1"] {
  width: ${e.width}px;
  height: ${e.height}px;
  margin: 0;
  overflow: hidden;
  box-sizing: border-box;
}
${e.css??""}
`,O=e=>`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=${e.width}, height=${e.height}, initial-scale=1">
<style>
${$(e)}
</style>
</head>
<body>
<main aria-label="HTML video frame raster host" data-kg-html-video-frame-host="1" data-kg-render-time-ms="0" data-kg-render-time-s="0">
${e.html}
</main>
<script type="application/json" id="agentic-graph-html-video-data">${F(e.data??{})}<\/script>
<script>${I(e.durationMs,'[data-kg-html-video-frame-host="1"]')}<\/script>
</body>
</html>`,q=e=>new Promise((t,r)=>{const i=window.setTimeout(()=>{r(new Error("canvas-2d video renderer timed out while preparing isolated frame document"))},2e3);e.onload=()=>{window.clearTimeout(i);const o=e.contentDocument;if(!(o!=null&&o.body)){r(new Error("canvas-2d video renderer could not access isolated frame document"));return}t(o)}}),H=async e=>{const t=document.createElement("iframe");t.setAttribute("aria-label","HTML video frame raster host"),t.setAttribute("data-kg-html-video-frame-host","1"),t.setAttribute("sandbox","allow-scripts allow-same-origin"),t.style.position="fixed",t.style.left="-10000px",t.style.top="0",t.style.width=`${e.width}px`,t.style.height=`${e.height}px`,t.style.border="0",t.style.overflow="hidden",t.srcdoc=O(e);const r=q(t);document.body.appendChild(t);try{const o=(await r).querySelector('[data-kg-html-video-frame-host="1"]');if(!o)throw new Error("canvas-2d video renderer could not find isolated frame render root");return{host:t,renderRoot:o}}catch(i){throw t.remove(),i}},R=e=>new Promise(t=>window.setTimeout(t,Math.max(0,e))),L=()=>{for(const e of x)if(MediaRecorder.isTypeSupported(e))return e;return""},l=e=>{for(const t of e.getVideoTracks()){const r=t.requestFrame;typeof r=="function"&&r.call(t)}},P=e=>{for(const t of e.getTracks())t.stop()},fe={engineId:b.canvas2d,async render(e){var p,g;k();const{default:t}=await A(async()=>{const{default:s}=await import("./html2canvas.esm-QH1iLAAe.js");return{default:s}},[]),r=document.createElement("canvas");r.width=e.width,r.height=e.height;const i=r.getContext("2d",{alpha:!1});if(!i)throw new Error("canvas-2d video rendering requires a 2D canvas context");const o=L();if(!o)throw new Error("canvas-2d video rendering requires a native MediaRecorder video MIME type");const u=Math.max(1,Math.ceil(e.durationMs*e.fps/1e3)),_=1e3/e.fps,h=[],{host:f,renderRoot:w}=await H(e);let d,n;try{const s=f.contentWindow;if(!(s!=null&&s.__agenticGraphRenderFrame))throw new Error("HTML video frame runtime unavailable");const D=s.__agenticGraphRenderFrame.bind(s),C=Array.isArray((p=e.data)==null?void 0:p.hyperframesClips)&&((g=w.firstElementChild)==null?void 0:g.matches("[data-composition-id][data-no-timeline]"))===!0,v=async a=>(await D(a),t(w,{width:e.width,height:e.height,windowWidth:e.width,windowHeight:e.height,scale:1,backgroundColor:null,logging:!1,useCORS:!0,foreignObjectRendering:C})),y=a=>{i.clearRect(0,0,e.width,e.height),i.drawImage(a,0,0,e.width,e.height)};y(await v(0)),d=r.captureStream(e.fps),n=new MediaRecorder(d,{mimeType:o,videoBitsPerSecond:S});const E=new Promise((a,m)=>{n.ondataavailable=c=>{c.data.size&&h.push(c.data)},n.onerror=()=>m(new Error("canvas-2d MediaRecorder failed")),n.onstop=()=>a()});E.catch(()=>{}),n.start();const M=performance.now();i.drawImage(r,0,0),l(d);for(let a=1;a<u;a++){const m=a*_,c=await v(m);await R(M+m-performance.now()),y(c),l(d)}await R(M+e.durationMs-performance.now()),i.drawImage(r,0,0),l(d),await new Promise(a=>requestAnimationFrame(()=>requestAnimationFrame(()=>a()))),n.state!=="inactive"&&n.stop(),await E}finally{n&&n.state!=="inactive"&&n.stop(),d&&P(d),f.remove()}if(!h.length)throw new Error("canvas-2d video renderer finalized without output chunks");return{blob:new Blob(h,{type:o}),engineId:b.canvas2d,durationMs:e.durationMs,fps:e.fps,width:e.width,height:e.height,renderLog:[`frames=${u}`,"rasterizer=html2canvas","recorder=MediaRecorder",`mime=${o}`]}}};export{fe as canvas2dAdapter};
