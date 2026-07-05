import{f$ as tt,aJ as et}from"./settings-mcp-docs-Z0zRl8Xr.js";import{_ as ot}from"./index-C7XWqKe_.js";import{s as st,d as kt,f as St,g as vt,h as xt,i as Mt,M as $t}from"./MarkdownPreview-pGogZs1N.js";import{p as At}from"./useMarkdownPreviewTokens-CkYwwfEe.js";import{a as Ct,s as Tt}from"./markdownPreviewLex-DFh8CHys.js";import{c as ct,R as $}from"./react-BQOKVxhn.js";import{w as lt}from"./exportPdfIntersectionObserver-C4yNPy8D.js";import"./settings-grabmapsMcpApiDocs-Drw-U27f.js";import"./settings-vdeoxplnMcpApiDocs-C7aOzG-K.js";import"./mermaid-DCW4yeVe.js";import"./d3-W0BRPxKc.js";import"./settings-apiNativeBrowserMcpApiDocs-B2ejKdkv.js";import"./settings-crawlerAccessMcpApiDocs-vVc7Wiii.js";import"./settings-cloudflareAiGatewayMcpApiDocs-D5S9dzJZ.js";import"./settings-openaiMcpApiDocs-C2k9Cmv8.js";import"./settings-exaMcpApiDocs-DOX-ke3a.js";import"./settings-feishuBaseMcpApiDocs-CIo-R_Ov.js";import"./settings-larkAppMcpApiDocs-D18RHO-k.js";import"./settings-stripeMcpApiDocs-Dpydjpl8.js";import"./settings-pixverseMcpApiDocs-UWVFmJoy.js";import"./settings-miromindMcpApiDocs-BQIIxP-O.js";import"./settings-operatorDeployMcpApiDocs-Cu8azddW.js";import"./ui-DuQFvoJh.js";import"./markdown-it-CqrcgIMp.js";import"./semanticHighlight-DplL1H6H.js";import"./CardInlineTextEditor-CvJCok3V.js";import"./cardMarkdownPreviewUtils-DsaZs_5E.js";import"./uploadedMediaPanelItems-CyX6Diuf.js";import"./runtimeMediaUrl-BpLnJQcK.js";import"./panelFormControls-B0BfbAAj.js";import"./useIsomorphicLayoutEffect-DpDzmsae.js";import"./overlay-Bt1a15lx.js";import"./overlayClamp-DWaD4z-t.js";import"./AnchoredPopover-CVLFu1br.js";import"./toolbarStyles-yB1mdWGh.js";import"./SharedWebpageSurface-oCSOO-DS.js";import"./rafValueScheduler-DGc95RU9.js";import"./markdownRoundTrip-Cgm-p_sj.js";import"./tableClasses-YXenBEiv.js";import"./IconButton-D5RUfjMx.js";import"./Tooltip-BPhCBTAn.js";import"./MarkdownTocChrome-DRjcw8Zk.js";import"./useMarkdownExplorerSectionCollapseState-BdegLpGo.js";import"./useDocumentVersions-DQuLK0ui.js";import"./interaction-user-select-DCcDWxBF.js";import"./highlightjs-DW3kSZ-5.js";import"./PreviewOverlay-BoUiiRYa.js";import"./text-z6OLAJGE.js";import"./WorkspaceDataViewNewRecordButton-Cf1C_JYq.js";import"./forbidBrowserZoom-B4pnn4qv.js";import"./markdownDataViewValueUtils-BXBxOLEg.js";import"./kanbanOrderState-DUQ01gMI.js";import"./scaleExtent-pHvsghBZ.js";import"./mediaDownload-pjuHDwXN.js";import"./mediaProxyUrl-m8Zd7IVF.js";import"./markdownTypography-BqdbmeY_.js";import"./workspaceEditorModePresentation-RCyGVldD.js";import"./useMainPanelRect-CCALii25.js";const j=16/9,v={width:1920,height:1080},Pt={portrait:{pageSizeIn:{width:8.2677165354,height:11.6929133858}},landscape:{pageSizeIn:{width:11.6929133858,height:8.2677165354}}},dt=(i,e)=>{const n=tt(i,"pageMarginMm"),r=tt(i,"rootPaddingMm"),t=Number(e==null?void 0:e.horizontalInsetScale),a=Number.isFinite(t)&&t>0?t:1,o=Number(e==null?void 0:e.verticalInsetScale),c=Number.isFinite(o)&&o>0?o:1;return a!==1&&(n.right*=a,n.left*=a,r.right*=a,r.left*=a),c!==1&&(n.top*=c,n.bottom*=c,r.top*=c,r.bottom*=c),{pageMarginMm:n,rootPaddingMm:r}},Et=i=>{const e=Pt[i];return{widthMm:e.pageSizeIn.width*25.4,heightMm:e.pageSizeIn.height*25.4}},It=i=>{const e=i.orientation,n=dt(e,{horizontalInsetScale:i.horizontalInsetScale,verticalInsetScale:i.verticalInsetScale});i.presentationVerticalInsetSymmetry&&(n.pageMarginMm.bottom=n.pageMarginMm.top,n.rootPaddingMm.bottom=n.rootPaddingMm.top);const r=Et(e),t={widthMm:Math.max(1,r.widthMm-n.pageMarginMm.left-n.pageMarginMm.right-n.rootPaddingMm.left-n.rootPaddingMm.right),heightMm:Math.max(1,r.heightMm-n.pageMarginMm.top-n.pageMarginMm.bottom-n.rootPaddingMm.top-n.rootPaddingMm.bottom)},a=t.widthMm/Math.max(1,t.heightMm)>j?t.heightMm*j:t.widthMm,o=a/j;return{pageSizeMm:r,effectiveInsetsMm:n,viewportMm:t,presentationSlideMm:{widthMm:a,heightMm:o}}},qt=i=>{try{if(!i.videoWidth||!i.videoHeight)return null;const e=document.createElement("canvas");e.width=i.videoWidth,e.height=i.videoHeight;const n=e.getContext("2d");if(!n)return null;n.drawImage(i,0,0);try{return e.toDataURL("image/png")}catch{return e.toDataURL("image/jpeg",.92)}}catch{return null}},mt=i=>{try{if(!i.complete||!i.naturalWidth||!i.naturalHeight)return null;const e=String(i.getAttribute("src")||"").trim();if(/\.svg(\?|#|$)/i.test(e))return null;const n=document.createElement("canvas");n.width=i.naturalWidth,n.height=i.naturalHeight;const r=n.getContext("2d");return r?(r.drawImage(i,0,0),i.naturalWidth*i.naturalHeight>12e5?n.toDataURL("image/jpeg",.92):n.toDataURL("image/png")):null}catch{return null}},Rt=/(?:youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?v=|shorts\/|live\/)|youtu\.be\/)([\w-]+)/i,Lt=/^\/__(?:media|webpage|webpage_asset)_proxy\?url=(.+)$/i,zt=/(youtube(?:-nocookie)?\.com|youtu\.be|bilibili\.com|tiktok\.com|douyin\.com|vimeo\.com|twitter\.com|x\.com)/i,_t=i=>{const e=String(i||"").trim().toLowerCase();return e?e.startsWith("data:image/svg+xml")||/\.svg(\?|#|$)/i.test(e)?"svg":e.startsWith("data:image/png")||/\.png(\?|#|$)/i.test(e)||e.startsWith("data:image/webp")||/\.webp(\?|#|$)/i.test(e)||e.startsWith("data:image/avif")||/\.avif(\?|#|$)/i.test(e)?"png":e.startsWith("data:image/jpeg")||e.startsWith("data:image/jpg")||/\.jpe?g(\?|#|$)/i.test(e)?"jpg":"other":"other"},Nt=i=>i==="svg"?3:i==="png"?2:i==="jpg"?1:0,q=i=>{let e=null;const n=new Set;for(let r=0;r<i.length;r+=1){const t=String(i[r]||"").trim();if(!t||n.has(t))continue;n.add(t);const a=Nt(_t(t));(!e||a>e.score)&&(e={src:t,score:a})}return(e==null?void 0:e.src)||null},Ft=(i,e=1200)=>new Promise(n=>{let r=!1;const t=o=>{r||(r=!0,n(o))},a=new Image;a.onload=()=>t(!0),a.onerror=()=>t(!1),a.src=i,setTimeout(()=>t(!1),e)}),P=i=>{const e=i.match(Lt);if(!e)return i;try{return decodeURIComponent(e[1])}catch{return i}},W=i=>{const n=P(String(i||"").trim()).match(Rt);return n?n[1]:null},H=i=>{const e=[`https://img.youtube.com/vi/${i}/maxresdefault.png`,`https://img.youtube.com/vi/${i}/sddefault.png`,`https://img.youtube.com/vi/${i}/hqdefault.png`,`https://img.youtube.com/vi/${i}/maxresdefault.jpg`,`https://img.youtube.com/vi/${i}/sddefault.jpg`,`https://img.youtube.com/vi/${i}/hqdefault.jpg`];return new Promise(n=>{(async()=>{for(let t=0;t<e.length;t+=1){const a=e[t];if(await Ft(a)){n(a);return}}n(e[e.length-1])})()})},V=(i,e)=>{const n=document.createElement("img");return n.src=i,n.alt=e,n.style.width="100%",n.style.maxWidth="100%",n.style.height="auto",n.style.display="block",n.style.objectFit="contain",n},Y=i=>{const e=I(i),n=(()=>{try{return new URL(i).hostname.replace(/^www\./,"")}catch{return""}})(),r=a=>a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),t=`
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1020"/>
      <stop offset="100%" stop-color="#1f2937"/>
    </linearGradient>
  </defs>
  <rect width="1280" height="720" fill="url(#g)"/>
  <circle cx="640" cy="360" r="86" fill="rgba(255,255,255,0.16)"/>
  <polygon points="622,322 622,398 690,360" fill="#ffffff"/>
  <text x="640" y="500" fill="rgba(255,255,255,0.95)" font-family="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" font-size="44" text-anchor="middle">${r(e)}</text>
  <text x="640" y="540" fill="rgba(255,255,255,0.70)" font-family="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" font-size="24" text-anchor="middle">${r(n)}</text>
</svg>`.trim();return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(t)}`},I=i=>{const e=String(i||"").trim().toLowerCase();return/youtu\.?be|youtube(?:-nocookie)?\.com/i.test(e)?"YouTube":/bilibili\.com/i.test(e)?"Bilibili":/tiktok\.com/i.test(e)?"TikTok":/douyin\.com/i.test(e)?"Douyin":/vimeo\.com/i.test(e)?"Vimeo":/twitter\.com|x\.com/i.test(e)?"X":"Video"},A=(i,e,n)=>{const r=document.createElement("a");r.href=n,r.target="_blank",r.rel="noopener noreferrer",r.style.display="block",r.style.textDecoration="none",r.style.color="inherit",r.style.width="100%",r.style.borderRadius="12px",r.style.overflow="hidden",r.style.border="1px solid #d1d5db",r.style.boxShadow="0 2px 8px rgba(0,0,0,0.12)";const t=document.createElement("figure");t.style.position="relative",t.style.lineHeight="0",t.style.backgroundColor="#000",t.style.margin="0";const a=document.createElement("img");a.src=i,a.alt=e,a.setAttribute("width","1280"),a.setAttribute("height","720"),a.style.width="100%",a.style.height="auto",a.style.display="block";const o=document.createElement("section");o.style.cssText="position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to top,rgba(0,0,0,0.7) 0%,rgba(0,0,0,0) 50%);pointer-events:none";const c=document.createElement("span");c.style.cssText="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:56px;height:56px;background:rgba(0,0,0,0.65);border-radius:50%;display:flex;align-items:center;justify-content:center;pointer-events:none";const s=document.createElement("span");s.style.cssText="width:0;height:0;border-top:11px solid transparent;border-bottom:11px solid transparent;border-left:20px solid #fff;margin-left:4px",c.appendChild(s);const d=I(n),l=document.createElement("figcaption");l.style.cssText="position:absolute;bottom:0;left:0;right:0;padding:10px 12px;display:flex;align-items:center;gap:8px;pointer-events:none";const p=document.createElement("span");p.style.cssText="color:#fff;font-size:12px;font-family:system-ui,-apple-system,sans-serif;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1",p.textContent=d,l.appendChild(p);const m=document.createElement("span");return m.style.cssText="color:rgba(255,255,255,0.6);font-size:9px;font-family:system-ui,-apple-system,sans-serif;white-space:nowrap;letter-spacing:0.5px",m.textContent="OPEN →",l.appendChild(m),t.appendChild(a),t.appendChild(o),t.appendChild(c),t.appendChild(l),r.appendChild(t),r},Dt=(i,e)=>{const n=document.createElement("a");return n.href=e,n.target="_blank",n.rel="noopener noreferrer",n.style.display="block",n.style.textDecoration="none",n.style.color="inherit",i.replaceWith(n),n.appendChild(i),n},Wt=i=>{const e=i.querySelectorAll("img");for(let n=0;n<e.length;n+=1){const r=e[n];if(r.closest("a"))continue;const t=String(r.getAttribute("data-kg-original-src")||"").trim();if(/^https?:\/\//i.test(t))try{Dt(r,t)}catch{}}},Ht=i=>{const e=i.querySelectorAll("img");for(let n=0;n<e.length;n+=1){const r=e[n];if(r.hasAttribute("data-kg-original-src"))continue;const t=String(r.getAttribute("src")||"").trim(),a=P(t);if(/^https?:\/\//i.test(a))try{r.setAttribute("data-kg-original-src",a)}catch{}}},U=i=>{if(!i)return null;const e=String(i.currentSrc||i.getAttribute("src")||"").trim(),n=String(i.getAttribute("data-kg-original-src")||"").trim(),r=mt(i);return q([n,e,r])},Ut=(i,e)=>{const n=i.querySelectorAll("img"),r=e.querySelectorAll("img"),t=Math.min(n.length,r.length);for(let a=0;a<t;a+=1){const o=n[a],c=r[a],s=mt(o);if(s)try{c.setAttribute("src",s)}catch{}try{c.removeAttribute("loading")}catch{}try{c.removeAttribute("decoding")}catch{}}},Bt=(i,e)=>{const n=i.querySelectorAll("video"),r=e.querySelectorAll("video"),t=Math.min(n.length,r.length);for(let a=0;a<t;a+=1){const o=n[a],c=r[a],s=qt(o);if(!s)continue;const d=P(String(o.getAttribute("src")||"").trim()),l=/^https?:\/\//i.test(d)?d:"";try{c.replaceWith(l?A(s,o.poster||"video frame",l):V(s,o.poster||"video frame"))}catch{}}},nt=async i=>{const e=i.querySelectorAll("iframe"),n=[];for(let r=0;r<e.length;r+=1){const t=e[r],a=P(String(t.getAttribute("src")||"").trim());if(!zt.test(a))continue;const o=W(a),c=o?`https://www.youtube.com/watch?v=${o}`:a;n.push((o?H(o):Promise.resolve("")).then(s=>{try{const d=t.parentElement,l=d?d.querySelector('img[data-kg-media-thumbnail="1"], img'):null,p=U(l),m=q([p,s])||Y(c),u=t.parentElement;u&&u!==i&&u.children.length<=2?u.replaceWith(A(m,`${I(c)} video`,c)):t.replaceWith(A(m,`${I(c)} video`,c))}catch{}}))}await Promise.all(n)},Ot=async(i,e)=>{const n=i.querySelectorAll("iframe"),r=e.querySelectorAll("iframe"),t=Math.min(n.length,r.length),a=[];for(let o=0;o<t;o+=1){const c=n[o],s=r[o];a.push(Promise.resolve().then(async()=>{const d=P(String(c.getAttribute("src")||"").trim()),l=c.parentElement?c.parentElement.querySelector('img[data-kg-media-thumbnail="1"], img'):null;let p=q([U(l)]);if(!p){const g=W(d);g&&(p=await H(g))}p||(p=Y(d||"about:blank"));const m=/^https?:\/\//i.test(d)?d:"",u=m?A(p,`${I(m)} embed`,m):V(p,"embedded content");try{const g=String(s.getAttribute("class")||"").trim();g&&u.setAttribute("class",g)}catch{}try{const g=String(s.getAttribute("style")||"").trim();g&&u.setAttribute("style",g)}catch{}try{s.replaceWith(u)}catch{}}))}await Promise.all(a)},jt=async i=>{const e=i.querySelectorAll("img"),n=[];for(let r=0;r<e.length;r+=1){const t=e[r],a=String(t.getAttribute("src")||"").trim(),o=W(a);if(!o)continue;const c=`https://www.youtube.com/watch?v=${o}`;n.push(H(o).then(s=>{try{t.replaceWith(A(s,`YouTube: ${o}`,c))}catch{}}))}await Promise.all(n)},Vt=async(i,e)=>{const n=i.querySelectorAll('[data-kg-webpage-snapshot="1"]'),r=e.querySelectorAll('[data-kg-webpage-snapshot="1"]'),t=Math.min(n.length,r.length),a=[];for(let o=0;o<t;o+=1){const c=r[o],s=String(c.getAttribute("data-src")||"").trim(),d=W(s);if(!d)continue;const l=`https://www.youtube.com/watch?v=${d}`;a.push(H(d).then(p=>{try{c.replaceWith(A(p,`YouTube: ${d}`,l))}catch{}}))}await Promise.all(a)},Yt=(i,e)=>{const n=i.querySelectorAll('[data-kg-video-snapshot="1"]'),r=e.querySelectorAll('[data-kg-video-snapshot="1"]'),t=Math.min(n.length,r.length);for(let a=0;a<t;a+=1){const o=n[a],c=r[a],s=o.querySelector('img[data-kg-media-thumbnail="1"]'),d=P(String(c.getAttribute("data-src")||"").trim()),l=q([U(s)])||Y(d),p=/^https?:\/\//i.test(d)?d:"";try{c.replaceWith(p?A(l,d,p):V(l,d))}catch{}}},Gt=(i,e)=>{const n=i.querySelectorAll('[data-kg-webpage-snapshot="1"]'),r=e.querySelectorAll('[data-kg-webpage-snapshot="1"]'),t=Math.min(n.length,r.length);for(let a=0;a<t;a+=1){const o=n[a],c=r[a],s=o.querySelector('img[data-kg-media-thumbnail="1"]'),d=c.querySelector('img[data-kg-media-thumbnail="1"]');if(d){const l=q([U(s),String(d.getAttribute("src")||"").trim(),String(d.currentSrc||"").trim()]);if(!l)continue;try{d.setAttribute("src",l),d.removeAttribute("loading"),d.removeAttribute("decoding")}catch{}}}},it=i=>{const e=i.querySelectorAll("img,video,iframe");for(let n=0;n<e.length;n+=1){try{e[n].removeAttribute("loading")}catch{}try{e[n].removeAttribute("decoding")}catch{}}},Kt=i=>{const e=i.querySelectorAll("hr"),n=r=>{let t=r;for(;t&&t!==i;){if(t.nextElementSibling)return!0;t=t.parentElement}return!1};for(let r=0;r<e.length;r+=1){const t=e[r];if(n(t))try{t.setAttribute("data-kg-hr","1");const a=t.nextElementSibling;if(!a||a.getAttribute("data-kg-page-break")!=="1"){const o=document.createElement("section");o.setAttribute("data-kg-page-break","1"),t.insertAdjacentElement("afterend",o)}}catch{}}},R=i=>i.matches('[data-testid="markdown-presentation-print-deck"]')?i:i.querySelector('[data-testid="markdown-presentation-print-deck"]'),Xt=i=>{if(R(i))return;const n=Array.from(i.querySelectorAll('[aria-label="Slide Document"]')),r=new Set,t=[];for(let s=0;s<n.length;s+=1){const l=n[s].closest("section");l&&i.contains(l)&&(r.has(l)||(r.add(l),t.push(l)))}if(t.length===0){const s=i.matches("article")?i:i.querySelector("article");if(s){const d=document.createElement("section");d.appendChild(s),t.push(d)}}if(t.length===0)return;const a=document.createElement("section");a.setAttribute("data-testid","markdown-presentation-print-deck"),a.className="w-full";for(let s=0;s<t.length;s+=1)a.appendChild(t[s]);const o=i.matches('[data-testid="markdown-presentation-root"]')?i:i.querySelector('[data-testid="markdown-presentation-root"]'),c=o==null?void 0:o.querySelector(":scope > main");if(c)try{c.replaceChildren(a);return}catch{}try{i.replaceChildren(a)}catch{}},Jt=i=>{const e=R(i);if(!e)return;const n=Array.from(e.querySelectorAll(":scope > section"));try{e.replaceChildren(...n)}catch{}const r=t=>{const o=t.querySelector(":scope > article")||t;return o.querySelector('img,video,iframe,svg,canvas,table,pre,code,blockquote,h1,h2,h3,h4,h5,h6,p,li,[data-kg-video-snapshot="1"],[data-kg-webpage-snapshot="1"]')?!0:String(o.textContent||"").replace(/\u200B/g,"").trim().length>0};for(let t=n.length-1;t>=0;t-=1){const a=n[t];if(r(a))break;try{a.remove()}catch{}}},Zt=i=>{const e=R(i);if(!e)return;const n=Array.from(e.querySelectorAll(":scope > section"));if(n.length===0)return;const r=[];for(let t=0;t<n.length;t+=1){const a=n[t],o=document.createElement("article");o.setAttribute("data-kg-presentation-page","1"),o.appendChild(a),r.push(o)}try{e.replaceChildren(...r)}catch{}},Qt=()=>{if(typeof document>"u")return"";const i=[],e=Array.from(document.styleSheets||[]);for(let n=0;n<e.length;n+=1){const r=e[n];let t;try{t=r.cssRules}catch{continue}if(!(!t||t.length===0))for(let a=0;a<t.length;a+=1){const o=t[a],c=String((o==null?void 0:o.cssText)||"").trim();c&&i.push(c)}}return i.join(`
`)},te=i=>{const e=R(i);if(!e)return;const n=Array.from(e.querySelectorAll(':scope > [data-kg-presentation-page="1"]'));for(let r=0;r<n.length;r+=1){const t=n[r];if(t.querySelector(':scope > [data-kg-presentation-page-frame="1"]'))continue;const o=t.querySelector('[data-kg-presentation-slide-surface="1"]'),c=t.querySelector(":scope > section"),s=t.querySelector(":scope > article"),d=o||c||s;if(d)try{const l=document.createElement("figure");l.setAttribute("data-kg-presentation-page-frame","1"),l.appendChild(d),t.replaceChildren(l)}catch{}}},ee=i=>{const e=i.querySelectorAll('[data-kg-mermaid-visibility-gate="pending"]');if(e.length===0)return Promise.resolve();for(let n=0;n<e.length;n+=1)try{e[n].scrollIntoView({block:"center",behavior:"instant"})}catch{}return new Promise(n=>{setTimeout(n,2e3)})},at=(i,e)=>{const n=i.querySelectorAll("img");if(n.length===0)return Promise.resolve();const r=new Set;for(let t=0;t<n.length;t+=1){const a=n[t];a.complete&&a.naturalWidth>0||r.add(a)}return r.size===0?Promise.resolve():new Promise(t=>{let a=!1;const o=()=>{a||(a=!0,t())},c=s=>{r.delete(s),r.size===0&&o()};for(const s of r)s.addEventListener("load",()=>c(s),{once:!0}),s.addEventListener("error",()=>c(s),{once:!0});setTimeout(o,e)})},ne=(i,e)=>{try{e.scrollTop=i.scrollTop,e.scrollLeft=i.scrollLeft}catch{}const n=i.querySelectorAll("*"),r=e.querySelectorAll("*"),t=Math.min(n.length,r.length);for(let a=0;a<t;a+=1){const o=n[a],c=r[a];try{c.scrollTop=o.scrollTop,c.scrollLeft=o.scrollLeft}catch{}}},ie=(i,e)=>{const n=['[aria-label="Slide Content"]','[aria-label="Slide Left Column"]','[aria-label="Slide Right Column"]'];for(let r=0;r<n.length;r+=1){const t=n[r],a=i.querySelectorAll(t),o=e.querySelectorAll(t),c=Math.min(a.length,o.length);for(let s=0;s<c;s+=1){const d=a[s],l=o[s];try{l.scrollLeft=d.scrollLeft,l.scrollTop=d.scrollTop}catch{}}}},ae=i=>{const e=['[aria-label="Slide Content"]','[aria-label="Slide Left Column"]','[aria-label="Slide Right Column"]'];for(let n=0;n<e.length;n+=1){const r=e[n],t=i.querySelectorAll(r);for(let a=0;a<t.length;a+=1){const o=t[a];if(!o)continue;const c=Math.max(0,Math.floor(o.clientHeight));if(!(c<=0))try{o.style.height=`${c}px`,o.style.minHeight=`${c}px`,o.style.maxHeight=`${c}px`,o.style.overflow="clip",o.style.display="block",o.style.position="relative",o.style.contain="layout paint",o.style.breakInside="avoid",o.style.pageBreakInside="avoid"}catch{}}}},re=(i,e,n,r)=>{const t=R(i);if(!t)return;const a=t.querySelectorAll(":scope > section");for(let o=0;o<a.length;o+=1){const c=a[o],s=c.querySelector(":scope > article");if(!s)continue;let d=!1;try{const l=document.createElementNS("http://www.w3.org/2000/svg","svg"),p=`kg-slide-clip-${o}`;l.setAttribute("xmlns","http://www.w3.org/2000/svg"),l.setAttribute("viewBox",`0 0 ${e} ${n}`),l.setAttribute("width","100%"),l.setAttribute("height","100%"),l.setAttribute("preserveAspectRatio","xMidYMid meet"),l.setAttribute("overflow","hidden"),l.style.overflow="hidden",l.style.width="100%",l.style.height="100%";const m=document.createElementNS("http://www.w3.org/2000/svg","defs"),u=document.createElementNS("http://www.w3.org/2000/svg","clipPath");u.setAttribute("id",p),u.setAttribute("clipPathUnits","userSpaceOnUse");const g=document.createElementNS("http://www.w3.org/2000/svg","rect");if(g.setAttribute("x","0"),g.setAttribute("y","0"),g.setAttribute("width",String(e)),g.setAttribute("height",String(n)),u.appendChild(g),m.appendChild(u),l.appendChild(m),r){const k=document.createElementNS("http://www.w3.org/2000/svg","style");k.textContent=r,l.appendChild(k)}l.setAttribute("data-kg-presentation-slide-svg","1");const b=document.createElementNS("http://www.w3.org/2000/svg","foreignObject");b.setAttribute("x","0"),b.setAttribute("y","0"),b.setAttribute("width","100%"),b.setAttribute("height","100%"),b.setAttribute("clip-path",`url(#${p})`),b.setAttribute("overflow","hidden"),b.style.overflow="hidden";const h=document.createElementNS("http://www.w3.org/1999/xhtml","div");h.style.width=`${e}px`,h.style.height=`${n}px`,h.style.maxWidth=`${e}px`,h.style.maxHeight=`${n}px`,h.style.display="block",h.style.overflow="hidden",h.style.boxSizing="border-box",h.style.background="transparent";const y=s.cloneNode(!0);y.style.width="100%",y.style.height="100%",y.style.maxWidth="100%",y.style.maxHeight="100%",y.style.display="block",y.style.overflow="hidden",y.style.boxSizing="border-box",h.appendChild(y),b.appendChild(h),l.appendChild(b),l.setAttribute("data-kg-presentation-slide-surface","1"),c.replaceChildren(l),d=!0}catch{}if(!d)try{s.setAttribute("data-kg-presentation-slide-surface","1")}catch{}}},oe=(i,e)=>{try{const n=Array.from(i.querySelectorAll('[data-kg-presentation-page="1"]')),r=n.map((a,o)=>{const c=a.querySelector(':scope > [data-kg-presentation-page-frame="1"]'),s=c==null?void 0:c.querySelector(':scope > [data-kg-presentation-slide-surface="1"]'),d=a.getBoundingClientRect(),l=(c==null?void 0:c.getBoundingClientRect())||null,p=(s==null?void 0:s.getBoundingClientRect())||null;return{index:o,pageRect:{width:d.width,height:d.height},frameRect:l?{width:l.width,height:l.height}:null,surfaceRect:p?{width:p.width,height:p.height}:null,frameScroll:c?{width:c.scrollWidth,height:c.scrollHeight}:null,surfaceScroll:s?{width:s.scrollWidth,height:s.scrollHeight}:null}}),t={ts:Date.now(),...e,pageCount:n.length,pageMetrics:r};window.__KG_PRESENTATION_PRINT_RUNTIME_CAPTURE__=t;try{console.info("[kg-pdf-runtime-capture]",t),console.table(t.pageMetrics)}catch{}}catch{}};async function se(i,e){try{if(typeof window>"u"||!i)return;const n=String((e==null?void 0:e.title)||"Document"),r=document.title,t="kg-print-root",a="kg-print-style",o=document.getElementById(t);if(o)try{o.remove()}catch{}const c=document.getElementById(a);if(c)try{c.remove()}catch{}await at(i,8e3);try{await ee(i)}catch{}const s=document.createElement("main");s.id=t,s.style.position="fixed",s.style.inset="0",s.style.zIndex="2147483647",s.style.background="white",s.style.overflow="auto";const d=[],l=(e==null?void 0:e.orientation)==="landscape"?"landscape":"portrait",p=(e==null?void 0:e.fidelityMode)||"balanced",m=p==="presentation-wysiwyg"||p==="presentation-viewer-fidelity",u=Number.isFinite(Number(e==null?void 0:e.horizontalInsetScale))&&Number(e==null?void 0:e.horizontalInsetScale)>0?Number(e==null?void 0:e.horizontalInsetScale):1,g=Number.isFinite(Number(e==null?void 0:e.verticalInsetScale))&&Number(e==null?void 0:e.verticalInsetScale)>0?Number(e==null?void 0:e.verticalInsetScale):1,b=It({orientation:l,horizontalInsetScale:u,verticalInsetScale:g,presentationVerticalInsetSymmetry:m}),{effectiveInsetsMm:h,pageSizeMm:y,viewportMm:k,presentationSlideMm:x}=b,w=S=>{const Z=Math.round(Math.max(0,S)*1e3)/1e3,Q=(Number.isFinite(Z)?Z:0).toFixed(3).replace(/\.?0+$/,"");return`${Q.length>0?Q:"0"}mm`},L=S=>`${w(S.top)} ${w(S.right)} ${w(S.bottom)} ${w(S.left)}`,C=m?{top:0,right:0,bottom:0,left:0}:h.pageMarginMm,pt=m?{top:h.pageMarginMm.top+h.rootPaddingMm.top,right:h.pageMarginMm.right+h.rootPaddingMm.right,bottom:h.pageMarginMm.bottom+h.rootPaddingMm.bottom,left:h.pageMarginMm.left+h.rootPaddingMm.left}:h.rootPaddingMm,G=L(C),B=L(pt),K=m?l==="landscape"?"297mm 210mm":"210mm 297mm":`${w(y.widthMm)} ${w(y.heightMm)}`,z=w(k.widthMm),ht=w(x.widthMm),gt=w(x.heightMm),ut=m?l==="landscape"?.6:.4:.5,X=Math.max(0,k.heightMm-ut),_=w(X),T=ht,O=gt,ft=w(Math.max(0,(X-x.heightMm)/2)),yt=!!(e!=null&&e.compactHorizontalContent),bt=!!(e!=null&&e.centerContent)&&!m,M=!m,E=m;s.style.padding=B;const f=i.cloneNode(!0),J=f.matches('[data-testid="markdown-presentation-print-deck"]'),N=m&&l==="landscape"&&J;try{m?ie(i,f):ne(i,f)}catch{}try{Ht(f)}catch{}try{it(f)}catch{}try{M&&Ut(i,f)}catch{}try{(M||E)&&Gt(i,f)}catch{}try{(M||E)&&Bt(i,f)}catch{}try{M&&await nt(f)}catch{}try{E&&await Ot(i,f)}catch{}try{E&&await nt(f)}catch{}try{(M||E)&&await jt(f)}catch{}try{(M||N)&&await Vt(i,f)}catch{}try{(M||N)&&Yt(i,f)}catch{}try{it(f)}catch{}try{Kt(f)}catch{}try{m&&Xt(f)}catch{}try{m&&Jt(f)}catch{}try{m||Wt(f)}catch{}s.appendChild(f),document.body.appendChild(s),await at(s,5e3);try{m&&(J||ae(f))}catch{}try{m&&(N||re(f,v.width,v.height,Qt()))}catch{}try{m&&Zt(f)}catch{}try{m&&te(f)}catch{}const wt=m?`
        #${t} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] {
          margin: 0 !important;
          padding: 0 !important;
          display: block !important;
          position: relative !important;
          overflow: clip !important;
          contain: strict !important;
          isolation: isolate !important;
          break-inside: avoid !important;
          break-inside: avoid-page !important;
          page-break-inside: avoid !important;
          break-after: auto !important;
          page-break-after: auto !important;
          height: ${_} !important;
          min-height: ${_} !important;
          max-height: ${_} !important;
          width: ${T} !important;
          min-width: ${T} !important;
          max-width: ${T} !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }
        #${t} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"]:not(:first-child) {
          break-before: page !important;
          page-break-before: always !important;
        }
        #${t} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] {
          position: relative !important;
          width: ${T} !important;
          height: ${O} !important;
          max-width: ${T} !important;
          max-height: ${O} !important;
          margin: ${ft} auto !important;
          overflow: hidden !important;
          contain: layout paint size !important;
          break-inside: avoid !important;
          break-inside: avoid-page !important;
          page-break-inside: avoid !important;
          display: block !important;
        }
        #${t} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > section,
        #${t} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > article {
          width: 100% !important;
          height: 100% !important;
          min-width: 100% !important;
          max-width: 100% !important;
          min-height: 100% !important;
          max-height: 100% !important;
          margin: 0 !important;
          overflow: visible !important;
          display: block !important;
          break-inside: avoid !important;
          break-inside: avoid-page !important;
          page-break-inside: avoid !important;
        }
        #${t} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > section > article {
          width: 100% !important;
          height: 100% !important;
          min-width: 100% !important;
          max-width: 100% !important;
          min-height: 100% !important;
          max-height: 100% !important;
          margin: 0 !important;
          overflow: visible !important;
          display: block !important;
          break-inside: avoid !important;
          break-inside: avoid-page !important;
          page-break-inside: avoid !important;
        }
        #${t} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > [data-kg-presentation-slide-surface="1"] {
          position: relative !important;
          top: auto !important;
          left: auto !important;
          margin: 0 !important;
          transform: none !important;
          transform-origin: center center !important;
          width: 100% !important;
          height: 100% !important;
          max-width: 100% !important;
          max-height: 100% !important;
          display: block !important;
          overflow: hidden !important;
          contain: layout paint size !important;
          break-inside: avoid !important;
          break-inside: avoid-page !important;
          page-break-inside: avoid !important;
        }
        #${t} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > [data-kg-presentation-slide-surface="1"] foreignObject {
          width: 100% !important;
          height: 100% !important;
          overflow: hidden !important;
        }
        #${t} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > [data-kg-presentation-slide-surface="1"] foreignObject > div {
          width: 100% !important;
          height: 100% !important;
          max-width: 100% !important;
          max-height: 100% !important;
          overflow: hidden !important;
          display: block !important;
          box-sizing: border-box !important;
        }
        #${t} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > [data-kg-presentation-slide-surface="1"] * {
          break-inside: avoid !important;
          break-inside: avoid-page !important;
          page-break-inside: avoid !important;
        }
        #${t} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > section *,
        #${t} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > article * {
          break-inside: avoid !important;
          break-inside: avoid-page !important;
          page-break-inside: avoid !important;
        }
        #${t}[data-kg-native-presentation-landscape="1"] [aria-label="Slide Content"],
        #${t}[data-kg-native-presentation-landscape="1"] [aria-label="Slide Left Column"],
        #${t}[data-kg-native-presentation-landscape="1"] [aria-label="Slide Right Column"],
        #${t}[data-kg-native-presentation-landscape="1"] [aria-label="Slide Document"] main {
          overflow: visible !important;
          max-height: none !important;
        }
        #${t}[data-kg-native-presentation-landscape="1"] [data-kg-video-snapshot="1"],
        #${t}[data-kg-native-presentation-landscape="1"] [data-kg-webpage-snapshot="1"] {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          width: 100% !important;
          overflow: visible !important;
        }
        #${t}[data-kg-native-presentation-landscape="1"] [data-kg-video-snapshot="1"] img,
        #${t}[data-kg-native-presentation-landscape="1"] [data-kg-webpage-snapshot="1"] img,
        #${t}[data-kg-native-presentation-landscape="1"] img[data-kg-media-thumbnail="1"] {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
          object-fit: contain !important;
        }
        #${t} [data-testid="markdown-presentation-print-deck"] [data-kg-hr="1"],
        #${t} [data-testid="markdown-presentation-print-deck"] [data-kg-page-break="1"] {
          display: none !important;
          break-before: auto !important;
          page-break-before: auto !important;
          break-after: auto !important;
          page-break-after: auto !important;
        }
      `:"",F=document.createElement("style");F.id=a,N&&s.setAttribute("data-kg-native-presentation-landscape","1"),F.textContent=`
      @media print {
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          height: auto !important;
        }
        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        body > *:not(#${t}) { display: none !important; }
        #${t} {
          position: static !important;
          inset: auto !important;
          overflow: visible !important;
          margin: 0 !important;
          padding: ${B} !important;
          box-sizing: border-box !important;
        }
        ${m?"":`#${t} section { overflow: visible !important; }`}
        ${m?"":`#${t} svg { max-width: 100% !important; height: auto !important; }`}
        ${yt?`
        #${t} [data-testid="markdown-preview-root"] { width: 100% !important; max-width: 100% !important; margin-left: 0 !important; margin-right: 0 !important; }
        #${t} article { width: 100% !important; max-width: 100% !important; margin-left: 0 !important; margin-right: 0 !important; }
        #${t} .mx-auto { margin-left: 0 !important; margin-right: 0 !important; }
      `:""}
        ${bt?`
        #${t} { display: flex !important; justify-content: center !important; align-items: center !important; min-height: 100vh !important; }
        #${t} > * { margin: auto !important; max-width: 100% !important; }
      `:""}
        ${m?`#${t} [data-kg-mermaid-visibility-gate="pending"] { display: block !important; }`:`#${t} [data-kg-mermaid-visibility-gate="pending"] { display: none !important; }`}
        #${t} [data-testid="markdown-presentation-print-deck"] {
          display: block !important;
          width: ${z} !important;
          min-width: ${z} !important;
          max-width: ${z} !important;
          margin: 0 auto !important;
          box-sizing: border-box !important;
          overflow: hidden !important;
        }
        ${wt}
        ${m?`
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article [aria-label="Slide Document"] {
          height: 100% !important;
          min-height: 100% !important;
          max-height: 100% !important;
          position: relative !important;
          box-sizing: border-box !important;
          overflow: hidden !important;
        }
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article [aria-label="Slide Content"],
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article [aria-label="Slide Left Column"],
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article [aria-label="Slide Right Column"] {
          overflow: clip !important;
          break-inside: avoid !important;
          page-break-inside: avoid !important;
        }
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article [aria-label="Slide Document"] main {
          overflow: clip !important;
          break-inside: avoid !important;
          page-break-inside: avoid !important;
        }
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article [aria-label="Slide Content"] > *,
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article [aria-label="Slide Left Column"] > *,
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article [aria-label="Slide Right Column"] > * {
          break-inside: avoid !important;
          page-break-inside: avoid !important;
        }
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article img,
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article [data-kg-media-thumbnail="1"] {
          visibility: visible !important;
          opacity: 1 !important;
          display: block !important;
          max-width: 100% !important;
          height: auto !important;
          object-fit: contain !important;
          break-inside: avoid !important;
          page-break-inside: avoid !important;
        }
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article a:has(img),
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article a:has([data-kg-media-thumbnail="1"]),
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article p:has(img),
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article p:has(video),
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article p:has(iframe),
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article figure:has(img),
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article figure:has(video),
        #${t} [data-testid="markdown-presentation-print-deck"] > section > article figure:has(iframe) {
          display: block !important;
          width: 100% !important;
          line-height: 0 !important;
          text-decoration: none !important;
          color: inherit !important;
          break-inside: avoid !important;
          page-break-inside: avoid !important;
        }
        #${t} [data-testid="markdown-presentation-print-deck"] [aria-label="Slide Document"] > footer {
          background-color: rgb(255 255 255) !important;
          opacity: 1 !important;
        }
      `:""}
        ${m?"":`
        #${t} [data-kg-hr="1"] { break-after: page; page-break-after: always; }
        #${t} [data-kg-page-break="1"] { display: block !important; height: 0 !important; margin: 0 !important; padding: 0 !important; border: 0 !important; break-before: page; page-break-before: always; }
      `}
        @page { margin: ${G}; size: ${K}; }
      }
    `,document.head.appendChild(F),m&&oe(s,{orientation:l,preservePresentationLayout:m,pageSizeCss:K,pageMarginCss:G,rootPaddingCss:B,viewportWidthMmCss:z,presentationSectionHeightMmCss:_,fittedSlideWidthMmCss:T,fittedSlideHeightMmCss:O});const D=()=>{try{document.title=r}catch{}try{F.remove()}catch{}try{s.remove()}catch{}for(let S=0;S<d.length;S+=1)try{URL.revokeObjectURL(d[S])}catch{}try{window.removeEventListener("afterprint",D)}catch{}};try{document.title=n}catch{}try{window.addEventListener("afterprint",D)}catch{}try{window.focus()}catch{}try{window.print()}catch{D()}setTimeout(()=>{D()},3e4)}catch{}}const ce="export-pdf-debug",le=(i,e)=>e==="portrait"?{horizontalInsetScale:.5,verticalInsetScale:.8,compactHorizontalContent:!0,centerContent:!1}:e==="landscape"?{horizontalInsetScale:.2,verticalInsetScale:.4,compactHorizontalContent:!1,centerContent:!0}:{compactHorizontalContent:!1,centerContent:!1},de=(i,e)=>i==="split-viewer"?le(!0,e):{compactHorizontalContent:!1,centerContent:!1},me=i=>{if(!i)return 0;const e=i.querySelectorAll('[data-kg-hr="1"]');if(e.length>0)return e.length;const n=i.querySelectorAll("hr");if(n.length===0)return 0;const r=a=>{let o=a;for(;o&&o!==i;){if(o.nextElementSibling)return!0;o=o.parentElement}return!1};let t=0;for(let a=0;a<n.length;a+=1)r(n[a])&&(t+=1);return t},pe=(i,e)=>{const n=i.querySelectorAll("img");if(n.length===0)return Promise.resolve();const r=new Set;for(let t=0;t<n.length;t+=1){const a=n[t];a.complete&&a.naturalWidth>0||r.add(a)}return r.size===0?Promise.resolve():new Promise(t=>{let a=!1;const o=()=>{a||(a=!0,t())},c=s=>{r.delete(s),r.size===0&&o()};for(const s of r)s.addEventListener("load",()=>c(s),{once:!0}),s.addEventListener("error",()=>c(s),{once:!0});setTimeout(o,e)})},he=i=>{let e=0;const n=i.querySelectorAll('[data-kg-video-snapshot="1"]');for(let t=0;t<n.length;t+=1)n[t].querySelector("img[src]")||(e+=1);const r=i.querySelectorAll('[data-kg-webpage-snapshot="1"]');for(let t=0;t<r.length;t+=1)!!r[t].querySelector("img[src], svg")||(e+=1);return e},rt=(i,e)=>{try{e.scrollTop=i.scrollTop,e.scrollLeft=i.scrollLeft}catch{}const n=i.querySelectorAll("*"),r=e.querySelectorAll("*"),t=Math.min(n.length,r.length);for(let a=0;a<t;a+=1){const o=n[a],c=r[a];try{c.scrollTop=o.scrollTop,c.scrollLeft=o.scrollLeft}catch{}}},ge=(i,e)=>{const n=i.querySelectorAll('[aria-label="Slide Document"]'),r=e.querySelectorAll('[aria-label="Slide Document"]'),t=Math.min(n.length,r.length),a=["Slide Content","Slide Left Column","Slide Right Column"];for(let o=0;o<t;o+=1){const c=n[o],s=r[o];for(let d=0;d<a.length;d+=1){const l=a[d],p=c.querySelector(`[aria-label="${l}"]`),m=s.querySelector(`[aria-label="${l}"]`);p&&m&&rt(p,m)}rt(c,s)}};function ue(i){const e=String(i||"");if(!e.trim())return null;try{const n=document.createElement("section");n.setAttribute("data-testid","markdown-preview-root");const r=document.createElement("article");return r.innerHTML=ot().render(e),n.appendChild(r),r}catch{return null}}function fe(i){const e=String(i||"");if(!e.trim())return null;try{const{slides:n}=st(e);if(!n.length)return null;const r=document.createElement("section");r.setAttribute("data-testid","markdown-preview-root");const t=document.createElement("section");t.setAttribute("data-testid","markdown-presentation-print-deck");for(let a=0;a<n.length;a+=1){const o=n[a],c=document.createElement("article");if(c.innerHTML=ot().render(String(o.text||"")),t.appendChild(c),a<n.length-1){const s=document.createElement("hr");s.setAttribute("data-kg-hr","1"),t.appendChild(s)}}return r.appendChild(t),t}catch{return null}}async function ye(i){const e=String(i||"");if(!e.trim())return null;const n=document.createElement("section");n.setAttribute("data-testid","markdown-pdf-render-host"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width="1120px",n.style.height="auto",n.style.opacity="0",n.style.pointerEvents="none",n.style.overflow="visible",n.style.zIndex="-1",document.body.appendChild(n);const r=ct.createRoot(n),t=lt();try{r.render($.createElement($t,{markdownText:e,activeDocumentPath:"__pdf_export__",highlightedLineRange:null,markdownWordWrap:!0,markdownPresentationMode:!1,markdownTextHighlight:!1,uiPanelTextFontClass:"",uiPanelMonospaceTextClass:"",previewOverlayScope:"container",previewOverlayPortalTarget:null,previewScrollable:!0,viewMode:"viewer",showSidebar:!1})),await new Promise(s=>requestAnimationFrame(()=>s())),await new Promise(s=>requestAnimationFrame(()=>s())),await(async s=>{const d=Date.now();for(;Date.now()-d<s;){const l=n.querySelectorAll('[data-kg-mermaid-visibility-gate="pending"]');for(let p=0;p<l.length;p+=1)try{l[p].scrollIntoView({block:"center",behavior:"instant"})}catch{}if(l.length===0)return;await new Promise(p=>setTimeout(()=>p(),80))}})(2600),await new Promise(s=>setTimeout(()=>s(),120));const o=n.querySelector('[data-testid="markdown-preview-root"]'),c=(o==null?void 0:o.querySelector("article"))||o;return c?c.cloneNode(!0):null}catch{return null}finally{try{t()}catch{}try{r.unmount()}catch{}try{n.remove()}catch{}}}async function be(i){const e=String(i||"");if(!e.trim())return null;const n=document.createElement("section");n.setAttribute("data-testid","markdown-presentation-pdf-render-host"),n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.width=`${v.width}px`,n.style.height="auto",n.style.opacity="0",n.style.pointerEvents="none",n.style.overflow="visible",n.style.zIndex="-1",document.body.appendChild(n);const r=ct.createRoot(n),t=lt();try{const{headMeta:a,slides:o}=st(e);if(!o.length)return null;const c=Ct(e,0).tokens,s=At(a),d=document.documentElement.getAttribute("data-theme")==="dark"?"dark":"light";r.render($.createElement("section",{"data-testid":"markdown-presentation-print-deck",className:"w-full"},o.map((m,u)=>{const g=kt({slide:m,headMeta:a,fullDocTokens:c}),b=Tt(c,m.startLine,m.endLine),h=St({hasSlides:!0,slides:o,safeActiveSlideId:u,twoColumnTokens:g,slideTokens:b,headMeta:a,activeDocumentPath:"__pdf_export__",highlightedLineRange:null,markdownWordWrap:!1,markdownTextHighlight:!1,selectionKind:null,uiPanelTextFontClass:"",uiPanelMonospaceTextClass:"",uiPanelMicroLabelTextSizeClass:"text-[10px]",previewOverlayScope:"container",previewOverlayPortalTarget:null,activeFragmentConfig:{enabled:!1,classNames:[],tags:[],steps:0},activeFragmentStep:0,mermaidFrontmatterConfig:s,rootThemeMode:d,effectiveHighlightBackgroundColor:null,effectiveHighlightUnderlineColor:null,headerFooterPositionMode:"slide-absolute"}),y=vt(m.meta||{},a,""),k=xt({slideMeta:m.meta||{},headMeta:a,isAcademicTheme:y.themeStyle==="academic"}),x=Mt("__pdf_export__",y.backgroundRaw,y.backgroundSize,y.backgroundPosition);return $.createElement($.Fragment,{key:`slide-${u}`},[$.createElement("section",{key:`slide-canvas-${u}`,className:"w-full",style:{margin:0,padding:0,breakInside:"avoid",pageBreakInside:"avoid",width:`${v.width}px`,minWidth:`${v.width}px`,maxWidth:`${v.width}px`,height:`${v.height}px`,minHeight:`${v.height}px`,maxHeight:`${v.height}px`}},$.createElement("article",{key:`slide-article-${u}`,className:[k.baseFrameClass,y.slideClass,"w-full"].filter(Boolean).join(" "),style:{...x,width:"100%",height:"100%",minHeight:"100%",maxHeight:"100%",maxWidth:"100%",margin:0,overflow:"hidden"}},h)),u<o.length-1?$.createElement("hr",{key:`slide-break-${u}`,"data-kg-hr":"1"}):null])}))),await new Promise(m=>requestAnimationFrame(()=>m())),await new Promise(m=>requestAnimationFrame(()=>m())),await(async m=>{const u=Date.now();for(;Date.now()-u<m;){const g=n.querySelectorAll('[data-kg-mermaid-visibility-gate="pending"]');for(let h=0;h<g.length;h+=1)try{g[h].scrollIntoView({block:"center",behavior:"instant"})}catch{}const b=he(n);if(g.length===0&&b===0)return;await new Promise(h=>setTimeout(()=>h(),80))}})(3200),await pe(n,2400),await new Promise(m=>requestAnimationFrame(()=>m()));const p=n.querySelector('[data-testid="markdown-presentation-print-deck"]');return p?p.cloneNode(!0):null}catch{return null}finally{try{t()}catch{}try{r.unmount()}catch{}try{n.remove()}catch{}}}async function An(i){var b,h;const e=i.viewerEl||i.viewerRefCurrent;if(!e){i.pushUiToast({id:"export-pdf-missing-view",kind:"warning",message:et.markdownWorkspaceExportPdfMissingSurfaceWarning});return}const n=e.querySelector('[data-testid="markdown-preview-root"]')||e,r=n.querySelector("article"),t=ue(String(i.markdownText||"")),a=await be(String(i.markdownText||""))||fe(String(i.markdownText||"")),o=await ye(String(i.markdownText||"")),c=(b=e.matches)!=null&&b.call(e,'[data-testid="markdown-presentation-root"]')?e:(h=e.querySelector)==null?void 0:h.call(e,'[data-testid="markdown-presentation-root"]'),s=i.orientation||"portrait",d=!!c;try{c&&a&&ge(c,a)}catch{}const l=d?a||o||r||t||n:r||t||n;let p="preview-root";l===a?p="presentation-deck":l===o?p="viewer-fidelity":l===r?p="viewer-article":l===t&&(p="markdown-fallback");const m=typeof import.meta<"u"&&!1,u=d?"presentation":"split-viewer",g=de(u,s);if(m){const y=me(l),k=dt(s,{horizontalInsetScale:g.horizontalInsetScale,verticalInsetScale:g.verticalInsetScale}),x=(L,C)=>`${L} T/R/B/L=${C.top}/${C.right}/${C.bottom}/${C.left}mm`,w=`surface=${u} · ${x("page",k.pageMarginMm)} · ${x("root",k.rootPaddingMm)} · compact=${g.compactHorizontalContent?"on":"off"} · center=${g.centerContent?"on":"off"}`;i.pushUiToast({id:ce,kind:"neutral",message:et.markdownWorkspaceExportPdfDebugTargetMessage(p,y,w),ttlMs:1800,log:!1})}await se(l,{title:i.exportBaseName,orientation:s,horizontalInsetScale:g.horizontalInsetScale,verticalInsetScale:g.verticalInsetScale,compactHorizontalContent:g.compactHorizontalContent,centerContent:g.centerContent,fidelityMode:u==="presentation"?"presentation-viewer-fidelity":"balanced"})}export{An as exportViewerPdf};
