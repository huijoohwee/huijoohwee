var vt=Object.defineProperty;var St=(i,t,e)=>t in i?vt(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var I=(i,t,e)=>St(i,typeof t!="symbol"?t+"":t,e);import{ck as et,aH as nt}from"./index-p1rQwnbh.js";import{a5 as st,aQ as xt,aR as Mt}from"./Canvas-DMY80uja.js";import{s as ct,b as $t,a as At,g as Ct,r as Tt,c as Pt,M as Et}from"./MarkdownPreview-DRZnfbH5.js";import{p as It}from"./mermaidConfig-Ba9-pU9O.js";import{c as lt,R as $}from"./react-SoqlLouT.js";import"./mermaid-elk-entry-DcC7ZWjm.js";import"./mermaid-elk-runtime-CPawpmke.js";import"./d3-oI-os-92.js";import"./elk-bundled-CYxVlpdB.js";import"./elk-api-DIMSqasN.js";import"./ui-BafXSng8.js";import"./fetchRemoteText-DOLbzJIg.js";import"./loader-BNeMfSuO.js";import"./GeospatialHost-BrBRtl3u.js";import"./frontmatterFlowImportMode-BmHjNyC9.js";import"./canvasFrontmatterPreset-DB3wh63R.js";import"./remoteMarkdownConversions-D7E3MAjG.js";import"./space-pan-Be09m-1O.js";import"./interaction-user-select-DCcDWxBF.js";import"./tokens-ssot-B5YZhOQC.js";import"./markdown-it-BX_wUld1.js";import"./markdown-ast-Cp1T4cP6.js";import"./interaction-recovery-Dh29Msm0.js";import"./workspaceFsEvents-DvbMUNlk.js";import"./overlay-C-ZoiLf6.js";import"./useMarkdownPreviewTokens-DyvAqYG6.js";import"./highlightjs-Cd02PMP8.js";import"./text-z6OLAJGE.js";import"./lazyStyles-uXg_Taie.js";import"./WorkspaceHeader-BwfM8HVd.js";import"./toolbarStyles-BvgJOLhs.js";import"./mainPanelSettingsSelectClass-qeEcaznS.js";import"./workspaceEditorModePresentation-mWOb53kc.js";import"./MainPanelSettingsPanelShell-BnIVR7cu.js";const V=16/9,S={width:1920,height:1080},qt={portrait:{pageSizeIn:{width:8.2677165354,height:11.6929133858}},landscape:{pageSizeIn:{width:11.6929133858,height:8.2677165354}}},dt=(i,t)=>{const e=et(i,"pageMarginMm"),a=et(i,"rootPaddingMm"),n=Number(t==null?void 0:t.horizontalInsetScale),r=Number.isFinite(n)&&n>0?n:1,o=Number(t==null?void 0:t.verticalInsetScale),c=Number.isFinite(o)&&o>0?o:1;return r!==1&&(e.right*=r,e.left*=r,a.right*=r,a.left*=r),c!==1&&(e.top*=c,e.bottom*=c,a.top*=c,a.bottom*=c),{pageMarginMm:e,rootPaddingMm:a}},Rt=i=>{const t=qt[i];return{widthMm:t.pageSizeIn.width*25.4,heightMm:t.pageSizeIn.height*25.4}},Lt=i=>{const t=i.orientation,e=dt(t,{horizontalInsetScale:i.horizontalInsetScale,verticalInsetScale:i.verticalInsetScale});i.presentationVerticalInsetSymmetry&&(e.pageMarginMm.bottom=e.pageMarginMm.top,e.rootPaddingMm.bottom=e.rootPaddingMm.top);const a=Rt(t),n={widthMm:Math.max(1,a.widthMm-e.pageMarginMm.left-e.pageMarginMm.right-e.rootPaddingMm.left-e.rootPaddingMm.right),heightMm:Math.max(1,a.heightMm-e.pageMarginMm.top-e.pageMarginMm.bottom-e.rootPaddingMm.top-e.rootPaddingMm.bottom)},r=n.widthMm/Math.max(1,n.heightMm)>V?n.heightMm*V:n.widthMm,o=r/V;return{pageSizeMm:a,effectiveInsetsMm:e,viewportMm:n,presentationSlideMm:{widthMm:r,heightMm:o}}},zt=i=>{try{if(!i.videoWidth||!i.videoHeight)return null;const t=document.createElement("canvas");t.width=i.videoWidth,t.height=i.videoHeight;const e=t.getContext("2d");if(!e)return null;e.drawImage(i,0,0);try{return t.toDataURL("image/png")}catch{return t.toDataURL("image/jpeg",.92)}}catch{return null}},mt=i=>{try{if(!i.complete||!i.naturalWidth||!i.naturalHeight)return null;const t=String(i.getAttribute("src")||"").trim();if(/\.svg(\?|#|$)/i.test(t))return null;const e=document.createElement("canvas");e.width=i.naturalWidth,e.height=i.naturalHeight;const a=e.getContext("2d");return a?(a.drawImage(i,0,0),i.naturalWidth*i.naturalHeight>12e5?e.toDataURL("image/jpeg",.92):e.toDataURL("image/png")):null}catch{return null}},_t=/(?:youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?v=|shorts\/|live\/)|youtu\.be\/)([\w-]+)/i,Nt=/^\/__(?:media|webpage|webpage_asset)_proxy\?url=(.+)$/i,Ft=/(youtube(?:-nocookie)?\.com|youtu\.be|bilibili\.com|tiktok\.com|douyin\.com|vimeo\.com|twitter\.com|x\.com)/i,Dt=i=>{const t=String(i||"").trim().toLowerCase();return t?t.startsWith("data:image/svg+xml")||/\.svg(\?|#|$)/i.test(t)?"svg":t.startsWith("data:image/png")||/\.png(\?|#|$)/i.test(t)||t.startsWith("data:image/webp")||/\.webp(\?|#|$)/i.test(t)||t.startsWith("data:image/avif")||/\.avif(\?|#|$)/i.test(t)?"png":t.startsWith("data:image/jpeg")||t.startsWith("data:image/jpg")||/\.jpe?g(\?|#|$)/i.test(t)?"jpg":"other":"other"},Wt=i=>i==="svg"?3:i==="png"?2:i==="jpg"?1:0,R=i=>{let t=null;const e=new Set;for(let a=0;a<i.length;a+=1){const n=String(i[a]||"").trim();if(!n||e.has(n))continue;e.add(n);const r=Wt(Dt(n));(!t||r>t.score)&&(t={src:n,score:r})}return(t==null?void 0:t.src)||null},Ht=(i,t=1200)=>new Promise(e=>{let a=!1;const n=o=>{a||(a=!0,e(o))},r=new Image;r.onload=()=>n(!0),r.onerror=()=>n(!1),r.src=i,setTimeout(()=>n(!1),t)}),P=i=>{const t=i.match(Nt);if(!t)return i;try{return decodeURIComponent(t[1])}catch{return i}},H=i=>{const e=P(String(i||"").trim()).match(_t);return e?e[1]:null},O=i=>{const t=[`https://img.youtube.com/vi/${i}/maxresdefault.png`,`https://img.youtube.com/vi/${i}/sddefault.png`,`https://img.youtube.com/vi/${i}/hqdefault.png`,`https://img.youtube.com/vi/${i}/maxresdefault.jpg`,`https://img.youtube.com/vi/${i}/sddefault.jpg`,`https://img.youtube.com/vi/${i}/hqdefault.jpg`];return new Promise(e=>{(async()=>{for(let n=0;n<t.length;n+=1){const r=t[n];if(await Ht(r)){e(r);return}}e(t[t.length-1])})()})},Y=(i,t)=>{const e=document.createElement("img");return e.src=i,e.alt=t,e.style.width="100%",e.style.maxWidth="100%",e.style.height="auto",e.style.display="block",e.style.objectFit="contain",e},G=i=>{const t=q(i),e=(()=>{try{return new URL(i).hostname.replace(/^www\./,"")}catch{return""}})(),a=r=>r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),n=`
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
  <text x="640" y="500" fill="rgba(255,255,255,0.95)" font-family="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" font-size="44" text-anchor="middle">${a(t)}</text>
  <text x="640" y="540" fill="rgba(255,255,255,0.70)" font-family="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" font-size="24" text-anchor="middle">${a(e)}</text>
</svg>`.trim();return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`},q=i=>{const t=String(i||"").trim().toLowerCase();return/youtu\.?be|youtube(?:-nocookie)?\.com/i.test(t)?"YouTube":/bilibili\.com/i.test(t)?"Bilibili":/tiktok\.com/i.test(t)?"TikTok":/douyin\.com/i.test(t)?"Douyin":/vimeo\.com/i.test(t)?"Vimeo":/twitter\.com|x\.com/i.test(t)?"X":"Video"},A=(i,t,e)=>{const a=document.createElement("a");a.href=e,a.target="_blank",a.rel="noopener noreferrer",a.style.display="block",a.style.textDecoration="none",a.style.color="inherit",a.style.width="100%",a.style.borderRadius="12px",a.style.overflow="hidden",a.style.border="1px solid #d1d5db",a.style.boxShadow="0 2px 8px rgba(0,0,0,0.12)";const n=document.createElement("div");n.style.position="relative",n.style.lineHeight="0",n.style.backgroundColor="#000";const r=document.createElement("img");r.src=i,r.alt=t,r.setAttribute("width","1280"),r.setAttribute("height","720"),r.style.width="100%",r.style.height="auto",r.style.display="block";const o=document.createElement("div");o.style.cssText="position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to top,rgba(0,0,0,0.7) 0%,rgba(0,0,0,0) 50%);pointer-events:none";const c=document.createElement("div");c.style.cssText="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:56px;height:56px;background:rgba(0,0,0,0.65);border-radius:50%;display:flex;align-items:center;justify-content:center;pointer-events:none";const s=document.createElement("div");s.style.cssText="width:0;height:0;border-top:11px solid transparent;border-bottom:11px solid transparent;border-left:20px solid #fff;margin-left:4px",c.appendChild(s);const d=q(e),l=document.createElement("div");l.style.cssText="position:absolute;bottom:0;left:0;right:0;padding:10px 12px;display:flex;align-items:center;gap:8px;pointer-events:none";const p=document.createElement("span");p.style.cssText="color:#fff;font-size:12px;font-family:system-ui,-apple-system,sans-serif;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1",p.textContent=d,l.appendChild(p);const m=document.createElement("span");return m.style.cssText="color:rgba(255,255,255,0.6);font-size:9px;font-family:system-ui,-apple-system,sans-serif;white-space:nowrap;letter-spacing:0.5px",m.textContent="OPEN →",l.appendChild(m),n.appendChild(r),n.appendChild(o),n.appendChild(c),n.appendChild(l),a.appendChild(n),a},Ot=(i,t)=>{const e=document.createElement("a");return e.href=t,e.target="_blank",e.rel="noopener noreferrer",e.style.display="block",e.style.textDecoration="none",e.style.color="inherit",i.replaceWith(e),e.appendChild(i),e},Bt=i=>{const t=i.querySelectorAll("img");for(let e=0;e<t.length;e+=1){const a=t[e];if(a.closest("a"))continue;const n=String(a.getAttribute("data-kg-original-src")||"").trim();if(/^https?:\/\//i.test(n))try{Ot(a,n)}catch{}}},Ut=i=>{const t=i.querySelectorAll("img");for(let e=0;e<t.length;e+=1){const a=t[e];if(a.hasAttribute("data-kg-original-src"))continue;const n=String(a.getAttribute("src")||"").trim(),r=P(n);if(/^https?:\/\//i.test(r))try{a.setAttribute("data-kg-original-src",r)}catch{}}},B=i=>{if(!i)return null;const t=String(i.currentSrc||i.getAttribute("src")||"").trim(),e=String(i.getAttribute("data-kg-original-src")||"").trim(),a=mt(i);return R([e,t,a])},jt=(i,t)=>{const e=i.querySelectorAll("img"),a=t.querySelectorAll("img"),n=Math.min(e.length,a.length);for(let r=0;r<n;r+=1){const o=e[r],c=a[r],s=mt(o);if(s)try{c.setAttribute("src",s)}catch{}try{c.removeAttribute("loading")}catch{}try{c.removeAttribute("decoding")}catch{}}},Vt=(i,t)=>{const e=i.querySelectorAll("video"),a=t.querySelectorAll("video"),n=Math.min(e.length,a.length);for(let r=0;r<n;r+=1){const o=e[r],c=a[r],s=zt(o);if(!s)continue;const d=P(String(o.getAttribute("src")||"").trim()),l=/^https?:\/\//i.test(d)?d:"";try{c.replaceWith(l?A(s,o.poster||"video frame",l):Y(s,o.poster||"video frame"))}catch{}}},it=async i=>{const t=i.querySelectorAll("iframe"),e=[];for(let a=0;a<t.length;a+=1){const n=t[a],r=P(String(n.getAttribute("src")||"").trim());if(!Ft.test(r))continue;const o=H(r),c=o?`https://www.youtube.com/watch?v=${o}`:r;e.push((o?O(o):Promise.resolve("")).then(s=>{try{const d=n.parentElement,l=d?d.querySelector('img[data-kg-media-thumbnail="1"], img'):null,p=B(l),m=R([p,s])||G(c),u=n.parentElement;u&&u!==i&&u.children.length<=2?u.replaceWith(A(m,`${q(c)} video`,c)):n.replaceWith(A(m,`${q(c)} video`,c))}catch{}}))}await Promise.all(e)},Yt=async(i,t)=>{const e=i.querySelectorAll("iframe"),a=t.querySelectorAll("iframe"),n=Math.min(e.length,a.length),r=[];for(let o=0;o<n;o+=1){const c=e[o],s=a[o];r.push(Promise.resolve().then(async()=>{const d=P(String(c.getAttribute("src")||"").trim()),l=c.parentElement?c.parentElement.querySelector('img[data-kg-media-thumbnail="1"], img'):null;let p=R([B(l)]);if(!p){const g=H(d);g&&(p=await O(g))}p||(p=G(d||"about:blank"));const m=/^https?:\/\//i.test(d)?d:"",u=m?A(p,`${q(m)} embed`,m):Y(p,"embedded content");try{const g=String(s.getAttribute("class")||"").trim();g&&u.setAttribute("class",g)}catch{}try{const g=String(s.getAttribute("style")||"").trim();g&&u.setAttribute("style",g)}catch{}try{s.replaceWith(u)}catch{}}))}await Promise.all(r)},Gt=async i=>{const t=i.querySelectorAll("img"),e=[];for(let a=0;a<t.length;a+=1){const n=t[a],r=String(n.getAttribute("src")||"").trim(),o=H(r);if(!o)continue;const c=`https://www.youtube.com/watch?v=${o}`;e.push(O(o).then(s=>{try{n.replaceWith(A(s,`YouTube: ${o}`,c))}catch{}}))}await Promise.all(e)},Kt=async(i,t)=>{const e=i.querySelectorAll('[data-kg-webpage-snapshot="1"]'),a=t.querySelectorAll('[data-kg-webpage-snapshot="1"]'),n=Math.min(e.length,a.length),r=[];for(let o=0;o<n;o+=1){const c=a[o],s=String(c.getAttribute("data-src")||"").trim(),d=H(s);if(!d)continue;const l=`https://www.youtube.com/watch?v=${d}`;r.push(O(d).then(p=>{try{c.replaceWith(A(p,`YouTube: ${d}`,l))}catch{}}))}await Promise.all(r)},Xt=(i,t)=>{const e=i.querySelectorAll('[data-kg-video-snapshot="1"]'),a=t.querySelectorAll('[data-kg-video-snapshot="1"]'),n=Math.min(e.length,a.length);for(let r=0;r<n;r+=1){const o=e[r],c=a[r],s=o.querySelector('img[data-kg-media-thumbnail="1"]'),d=P(String(c.getAttribute("data-src")||"").trim()),l=R([B(s)])||G(d),p=/^https?:\/\//i.test(d)?d:"";try{c.replaceWith(p?A(l,d,p):Y(l,d))}catch{}}},Qt=(i,t)=>{const e=i.querySelectorAll('[data-kg-webpage-snapshot="1"]'),a=t.querySelectorAll('[data-kg-webpage-snapshot="1"]'),n=Math.min(e.length,a.length);for(let r=0;r<n;r+=1){const o=e[r],c=a[r],s=o.querySelector('img[data-kg-media-thumbnail="1"]'),d=c.querySelector('img[data-kg-media-thumbnail="1"]');if(d){const l=R([B(s),String(d.getAttribute("src")||"").trim(),String(d.currentSrc||"").trim()]);if(!l)continue;try{d.setAttribute("src",l),d.removeAttribute("loading"),d.removeAttribute("decoding")}catch{}}}},at=i=>{const t=i.querySelectorAll("img,video,iframe");for(let e=0;e<t.length;e+=1){try{t[e].removeAttribute("loading")}catch{}try{t[e].removeAttribute("decoding")}catch{}}},Zt=i=>{const t=i.querySelectorAll("hr"),e=a=>{let n=a;for(;n&&n!==i;){if(n.nextElementSibling)return!0;n=n.parentElement}return!1};for(let a=0;a<t.length;a+=1){const n=t[a];if(e(n))try{n.setAttribute("data-kg-hr","1");const r=n.nextElementSibling;if(!r||r.getAttribute("data-kg-page-break")!=="1"){const o=document.createElement("div");o.setAttribute("data-kg-page-break","1"),n.insertAdjacentElement("afterend",o)}}catch{}}},L=i=>i.matches('[data-testid="markdown-presentation-print-deck"]')?i:i.querySelector('[data-testid="markdown-presentation-print-deck"]'),Jt=i=>{if(L(i))return;const e=Array.from(i.querySelectorAll('[aria-label="Slide Document"]')),a=new Set,n=[];for(let s=0;s<e.length;s+=1){const l=e[s].closest("section");l&&i.contains(l)&&(a.has(l)||(a.add(l),n.push(l)))}if(n.length===0){const s=i.matches("article")?i:i.querySelector("article");if(s){const d=document.createElement("section");d.appendChild(s),n.push(d)}}if(n.length===0)return;const r=document.createElement("section");r.setAttribute("data-testid","markdown-presentation-print-deck"),r.className="w-full";for(let s=0;s<n.length;s+=1)r.appendChild(n[s]);const o=i.matches('[data-testid="markdown-presentation-root"]')?i:i.querySelector('[data-testid="markdown-presentation-root"]'),c=o==null?void 0:o.querySelector(":scope > main");if(c)try{c.replaceChildren(r);return}catch{}try{i.replaceChildren(r)}catch{}},te=i=>{const t=L(i);if(!t)return;const e=Array.from(t.querySelectorAll(":scope > section"));try{t.replaceChildren(...e)}catch{}const a=n=>{const o=n.querySelector(":scope > article")||n;return o.querySelector('img,video,iframe,svg,canvas,table,pre,code,blockquote,h1,h2,h3,h4,h5,h6,p,li,[data-kg-video-snapshot="1"],[data-kg-webpage-snapshot="1"]')?!0:String(o.textContent||"").replace(/\u200B/g,"").trim().length>0};for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(a(r))break;try{r.remove()}catch{}}},ee=i=>{const t=L(i);if(!t)return;const e=Array.from(t.querySelectorAll(":scope > section"));if(e.length===0)return;const a=[];for(let n=0;n<e.length;n+=1){const r=e[n],o=document.createElement("div");o.setAttribute("data-kg-presentation-page","1"),o.appendChild(r),a.push(o)}try{t.replaceChildren(...a)}catch{}},ne=()=>{if(typeof document>"u")return"";const i=[],t=Array.from(document.styleSheets||[]);for(let e=0;e<t.length;e+=1){const a=t[e];let n;try{n=a.cssRules}catch{continue}if(!(!n||n.length===0))for(let r=0;r<n.length;r+=1){const o=n[r],c=String((o==null?void 0:o.cssText)||"").trim();c&&i.push(c)}}return i.join(`
`)},ie=i=>{const t=L(i);if(!t)return;const e=Array.from(t.querySelectorAll(':scope > [data-kg-presentation-page="1"]'));for(let a=0;a<e.length;a+=1){const n=e[a];if(n.querySelector(':scope > [data-kg-presentation-page-frame="1"]'))continue;const o=n.querySelector('[data-kg-presentation-slide-surface="1"]'),c=n.querySelector(":scope > section"),s=n.querySelector(":scope > article"),d=o||c||s;if(d)try{const l=document.createElement("div");l.setAttribute("data-kg-presentation-page-frame","1"),l.appendChild(d),n.replaceChildren(l)}catch{}}},ae=i=>{const t=i.querySelectorAll('[data-kg-mermaid-visibility-gate="pending"]');if(t.length===0)return Promise.resolve();for(let e=0;e<t.length;e+=1)try{t[e].scrollIntoView({block:"center",behavior:"instant"})}catch{}return new Promise(e=>{setTimeout(e,2e3)})},rt=(i,t)=>{const e=i.querySelectorAll("img");if(e.length===0)return Promise.resolve();const a=new Set;for(let n=0;n<e.length;n+=1){const r=e[n];r.complete&&r.naturalWidth>0||a.add(r)}return a.size===0?Promise.resolve():new Promise(n=>{let r=!1;const o=()=>{r||(r=!0,n())},c=s=>{a.delete(s),a.size===0&&o()};for(const s of a)s.addEventListener("load",()=>c(s),{once:!0}),s.addEventListener("error",()=>c(s),{once:!0});setTimeout(o,t)})},re=(i,t)=>{try{t.scrollTop=i.scrollTop,t.scrollLeft=i.scrollLeft}catch{}const e=i.querySelectorAll("*"),a=t.querySelectorAll("*"),n=Math.min(e.length,a.length);for(let r=0;r<n;r+=1){const o=e[r],c=a[r];try{c.scrollTop=o.scrollTop,c.scrollLeft=o.scrollLeft}catch{}}},oe=(i,t)=>{const e=['[aria-label="Slide Content"]','[aria-label="Slide Left Column"]','[aria-label="Slide Right Column"]'];for(let a=0;a<e.length;a+=1){const n=e[a],r=i.querySelectorAll(n),o=t.querySelectorAll(n),c=Math.min(r.length,o.length);for(let s=0;s<c;s+=1){const d=r[s],l=o[s];try{l.scrollLeft=d.scrollLeft,l.scrollTop=d.scrollTop}catch{}}}},se=i=>{const t=['[aria-label="Slide Content"]','[aria-label="Slide Left Column"]','[aria-label="Slide Right Column"]'];for(let e=0;e<t.length;e+=1){const a=t[e],n=i.querySelectorAll(a);for(let r=0;r<n.length;r+=1){const o=n[r];if(!o)continue;const c=Math.max(0,Math.floor(o.clientHeight));if(!(c<=0))try{o.style.height=`${c}px`,o.style.minHeight=`${c}px`,o.style.maxHeight=`${c}px`,o.style.overflow="clip",o.style.display="block",o.style.position="relative",o.style.contain="layout paint",o.style.breakInside="avoid",o.style.pageBreakInside="avoid"}catch{}}}},ce=(i,t,e,a)=>{const n=L(i);if(!n)return;const r=n.querySelectorAll(":scope > section");for(let o=0;o<r.length;o+=1){const c=r[o],s=c.querySelector(":scope > article");if(!s)continue;let d=!1;try{const l=document.createElementNS("http://www.w3.org/2000/svg","svg"),p=`kg-slide-clip-${o}`;l.setAttribute("xmlns","http://www.w3.org/2000/svg"),l.setAttribute("viewBox",`0 0 ${t} ${e}`),l.setAttribute("width","100%"),l.setAttribute("height","100%"),l.setAttribute("preserveAspectRatio","xMidYMid meet"),l.setAttribute("overflow","hidden"),l.style.overflow="hidden",l.style.width="100%",l.style.height="100%";const m=document.createElementNS("http://www.w3.org/2000/svg","defs"),u=document.createElementNS("http://www.w3.org/2000/svg","clipPath");u.setAttribute("id",p),u.setAttribute("clipPathUnits","userSpaceOnUse");const g=document.createElementNS("http://www.w3.org/2000/svg","rect");if(g.setAttribute("x","0"),g.setAttribute("y","0"),g.setAttribute("width",String(t)),g.setAttribute("height",String(e)),u.appendChild(g),m.appendChild(u),l.appendChild(m),a){const k=document.createElementNS("http://www.w3.org/2000/svg","style");k.textContent=a,l.appendChild(k)}l.setAttribute("data-kg-presentation-slide-svg","1");const b=document.createElementNS("http://www.w3.org/2000/svg","foreignObject");b.setAttribute("x","0"),b.setAttribute("y","0"),b.setAttribute("width","100%"),b.setAttribute("height","100%"),b.setAttribute("clip-path",`url(#${p})`),b.setAttribute("overflow","hidden"),b.style.overflow="hidden";const h=document.createElementNS("http://www.w3.org/1999/xhtml","div");h.style.width=`${t}px`,h.style.height=`${e}px`,h.style.maxWidth=`${t}px`,h.style.maxHeight=`${e}px`,h.style.display="block",h.style.overflow="hidden",h.style.boxSizing="border-box",h.style.background="transparent";const y=s.cloneNode(!0);y.style.width="100%",y.style.height="100%",y.style.maxWidth="100%",y.style.maxHeight="100%",y.style.display="block",y.style.overflow="hidden",y.style.boxSizing="border-box",h.appendChild(y),b.appendChild(h),l.appendChild(b),l.setAttribute("data-kg-presentation-slide-surface","1"),c.replaceChildren(l),d=!0}catch{}if(!d)try{s.setAttribute("data-kg-presentation-slide-surface","1")}catch{}}},le=(i,t)=>{try{const e=Array.from(i.querySelectorAll('[data-kg-presentation-page="1"]')),a=e.map((r,o)=>{const c=r.querySelector(':scope > [data-kg-presentation-page-frame="1"]'),s=c==null?void 0:c.querySelector(':scope > [data-kg-presentation-slide-surface="1"]'),d=r.getBoundingClientRect(),l=(c==null?void 0:c.getBoundingClientRect())||null,p=(s==null?void 0:s.getBoundingClientRect())||null;return{index:o,pageRect:{width:d.width,height:d.height},frameRect:l?{width:l.width,height:l.height}:null,surfaceRect:p?{width:p.width,height:p.height}:null,frameScroll:c?{width:c.scrollWidth,height:c.scrollHeight}:null,surfaceScroll:s?{width:s.scrollWidth,height:s.scrollHeight}:null}}),n={ts:Date.now(),...t,pageCount:e.length,pageMetrics:a};window.__KG_PRESENTATION_PRINT_RUNTIME_CAPTURE__=n;try{console.info("[kg-pdf-runtime-capture]",n),console.table(n.pageMetrics)}catch{}}catch{}};async function de(i,t){try{if(typeof window>"u"||!i)return;const e=String((t==null?void 0:t.title)||"Document"),a=document.title,n="kg-print-root",r="kg-print-style",o=document.getElementById(n);if(o)try{o.remove()}catch{}const c=document.getElementById(r);if(c)try{c.remove()}catch{}await rt(i,8e3);try{await ae(i)}catch{}const s=document.createElement("div");s.id=n,s.style.position="fixed",s.style.inset="0",s.style.zIndex="2147483647",s.style.background="white",s.style.overflow="auto";const d=[],l=(t==null?void 0:t.orientation)==="landscape"?"landscape":"portrait",p=(t==null?void 0:t.fidelityMode)||"balanced",m=p==="presentation-wysiwyg"||p==="presentation-viewer-fidelity",u=Number.isFinite(Number(t==null?void 0:t.horizontalInsetScale))&&Number(t==null?void 0:t.horizontalInsetScale)>0?Number(t==null?void 0:t.horizontalInsetScale):1,g=Number.isFinite(Number(t==null?void 0:t.verticalInsetScale))&&Number(t==null?void 0:t.verticalInsetScale)>0?Number(t==null?void 0:t.verticalInsetScale):1,b=Lt({orientation:l,horizontalInsetScale:u,verticalInsetScale:g,presentationVerticalInsetSymmetry:m}),{effectiveInsetsMm:h,pageSizeMm:y,viewportMm:k,presentationSlideMm:x}=b,w=v=>{const J=Math.round(Math.max(0,v)*1e3)/1e3,tt=(Number.isFinite(J)?J:0).toFixed(3).replace(/\.?0+$/,"");return`${tt.length>0?tt:"0"}mm`},z=v=>`${w(v.top)} ${w(v.right)} ${w(v.bottom)} ${w(v.left)}`,C=m?{top:0,right:0,bottom:0,left:0}:h.pageMarginMm,ht=m?{top:h.pageMarginMm.top+h.rootPaddingMm.top,right:h.pageMarginMm.right+h.rootPaddingMm.right,bottom:h.pageMarginMm.bottom+h.rootPaddingMm.bottom,left:h.pageMarginMm.left+h.rootPaddingMm.left}:h.rootPaddingMm,K=z(C),U=z(ht),X=m?l==="landscape"?"297mm 210mm":"210mm 297mm":`${w(y.widthMm)} ${w(y.heightMm)}`,_=w(k.widthMm),gt=w(x.widthMm),ut=w(x.heightMm),ft=m?l==="landscape"?.6:.4:.5,Q=Math.max(0,k.heightMm-ft),N=w(Q),T=gt,j=ut,yt=w(Math.max(0,(Q-x.heightMm)/2)),bt=!!(t!=null&&t.compactHorizontalContent),wt=!!(t!=null&&t.centerContent)&&!m,M=!m,E=m;s.style.padding=U;const f=i.cloneNode(!0),Z=f.matches('[data-testid="markdown-presentation-print-deck"]'),F=m&&l==="landscape"&&Z;try{m?oe(i,f):re(i,f)}catch{}try{Ut(f)}catch{}try{at(f)}catch{}try{M&&jt(i,f)}catch{}try{(M||E)&&Qt(i,f)}catch{}try{(M||E)&&Vt(i,f)}catch{}try{M&&await it(f)}catch{}try{E&&await Yt(i,f)}catch{}try{E&&await it(f)}catch{}try{(M||E)&&await Gt(f)}catch{}try{(M||F)&&await Kt(i,f)}catch{}try{(M||F)&&Xt(i,f)}catch{}try{at(f)}catch{}try{Zt(f)}catch{}try{m&&Jt(f)}catch{}try{m&&te(f)}catch{}try{m||Bt(f)}catch{}s.appendChild(f),document.body.appendChild(s),await rt(s,5e3);try{m&&(Z||se(f))}catch{}try{m&&(F||ce(f,S.width,S.height,ne()))}catch{}try{m&&ee(f)}catch{}try{m&&ie(f)}catch{}const kt=m?`
        #${n} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] {
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
          height: ${N} !important;
          min-height: ${N} !important;
          max-height: ${N} !important;
          width: ${T} !important;
          min-width: ${T} !important;
          max-width: ${T} !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }
        #${n} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"]:not(:first-child) {
          break-before: page !important;
          page-break-before: always !important;
        }
        #${n} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] {
          position: relative !important;
          width: ${T} !important;
          height: ${j} !important;
          max-width: ${T} !important;
          max-height: ${j} !important;
          margin: ${yt} auto !important;
          overflow: hidden !important;
          contain: layout paint size !important;
          break-inside: avoid !important;
          break-inside: avoid-page !important;
          page-break-inside: avoid !important;
          display: block !important;
        }
        #${n} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > section,
        #${n} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > article {
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
        #${n} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > section > article {
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
        #${n} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > [data-kg-presentation-slide-surface="1"] {
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
        #${n} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > [data-kg-presentation-slide-surface="1"] foreignObject {
          width: 100% !important;
          height: 100% !important;
          overflow: hidden !important;
        }
        #${n} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > [data-kg-presentation-slide-surface="1"] foreignObject > div {
          width: 100% !important;
          height: 100% !important;
          max-width: 100% !important;
          max-height: 100% !important;
          overflow: hidden !important;
          display: block !important;
          box-sizing: border-box !important;
        }
        #${n} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > [data-kg-presentation-slide-surface="1"] * {
          break-inside: avoid !important;
          break-inside: avoid-page !important;
          page-break-inside: avoid !important;
        }
        #${n} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > section *,
        #${n} [data-testid="markdown-presentation-print-deck"] > [data-kg-presentation-page="1"] > [data-kg-presentation-page-frame="1"] > article * {
          break-inside: avoid !important;
          break-inside: avoid-page !important;
          page-break-inside: avoid !important;
        }
        #${n}[data-kg-native-presentation-landscape="1"] [aria-label="Slide Content"],
        #${n}[data-kg-native-presentation-landscape="1"] [aria-label="Slide Left Column"],
        #${n}[data-kg-native-presentation-landscape="1"] [aria-label="Slide Right Column"],
        #${n}[data-kg-native-presentation-landscape="1"] [aria-label="Slide Document"] main {
          overflow: visible !important;
          max-height: none !important;
        }
        #${n}[data-kg-native-presentation-landscape="1"] [data-kg-video-snapshot="1"],
        #${n}[data-kg-native-presentation-landscape="1"] [data-kg-webpage-snapshot="1"] {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          width: 100% !important;
          overflow: visible !important;
        }
        #${n}[data-kg-native-presentation-landscape="1"] [data-kg-video-snapshot="1"] img,
        #${n}[data-kg-native-presentation-landscape="1"] [data-kg-webpage-snapshot="1"] img,
        #${n}[data-kg-native-presentation-landscape="1"] img[data-kg-media-thumbnail="1"] {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
          object-fit: contain !important;
        }
        #${n} [data-testid="markdown-presentation-print-deck"] [data-kg-hr="1"],
        #${n} [data-testid="markdown-presentation-print-deck"] [data-kg-page-break="1"] {
          display: none !important;
          break-before: auto !important;
          page-break-before: auto !important;
          break-after: auto !important;
          page-break-after: auto !important;
        }
      `:"",D=document.createElement("style");D.id=r,F&&s.setAttribute("data-kg-native-presentation-landscape","1"),D.textContent=`
      @media print {
        html, body {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          height: auto !important;
        }
        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        body > *:not(#${n}) { display: none !important; }
        #${n} {
          position: static !important;
          inset: auto !important;
          overflow: visible !important;
          margin: 0 !important;
          padding: ${U} !important;
          box-sizing: border-box !important;
        }
        ${m?"":`#${n} section { overflow: visible !important; }`}
        ${m?"":`#${n} svg { max-width: 100% !important; height: auto !important; }`}
        ${bt?`
        #${n} [data-testid="markdown-preview-root"] { width: 100% !important; max-width: 100% !important; margin-left: 0 !important; margin-right: 0 !important; }
        #${n} article { width: 100% !important; max-width: 100% !important; margin-left: 0 !important; margin-right: 0 !important; }
        #${n} .mx-auto { margin-left: 0 !important; margin-right: 0 !important; }
      `:""}
        ${wt?`
        #${n} { display: flex !important; justify-content: center !important; align-items: center !important; min-height: 100vh !important; }
        #${n} > * { margin: auto !important; max-width: 100% !important; }
      `:""}
        ${m?`#${n} [data-kg-mermaid-visibility-gate="pending"] { display: block !important; }`:`#${n} [data-kg-mermaid-visibility-gate="pending"] { display: none !important; }`}
        #${n} [data-testid="markdown-presentation-print-deck"] {
          display: block !important;
          width: ${_} !important;
          min-width: ${_} !important;
          max-width: ${_} !important;
          margin: 0 auto !important;
          box-sizing: border-box !important;
          overflow: hidden !important;
        }
        ${kt}
        ${m?`
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article [aria-label="Slide Document"] {
          height: 100% !important;
          min-height: 100% !important;
          max-height: 100% !important;
          position: relative !important;
          box-sizing: border-box !important;
          overflow: hidden !important;
        }
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article [aria-label="Slide Content"],
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article [aria-label="Slide Left Column"],
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article [aria-label="Slide Right Column"] {
          overflow: clip !important;
          break-inside: avoid !important;
          page-break-inside: avoid !important;
        }
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article [aria-label="Slide Document"] main {
          overflow: clip !important;
          break-inside: avoid !important;
          page-break-inside: avoid !important;
        }
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article [aria-label="Slide Content"] > *,
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article [aria-label="Slide Left Column"] > *,
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article [aria-label="Slide Right Column"] > * {
          break-inside: avoid !important;
          page-break-inside: avoid !important;
        }
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article img,
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article [data-kg-media-thumbnail="1"] {
          visibility: visible !important;
          opacity: 1 !important;
          display: block !important;
          max-width: 100% !important;
          height: auto !important;
          object-fit: contain !important;
          break-inside: avoid !important;
          page-break-inside: avoid !important;
        }
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article a:has(img),
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article a:has([data-kg-media-thumbnail="1"]),
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article p:has(img),
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article p:has(video),
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article p:has(iframe),
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article figure:has(img),
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article figure:has(video),
        #${n} [data-testid="markdown-presentation-print-deck"] > section > article figure:has(iframe) {
          display: block !important;
          width: 100% !important;
          line-height: 0 !important;
          text-decoration: none !important;
          color: inherit !important;
          break-inside: avoid !important;
          page-break-inside: avoid !important;
        }
        #${n} [data-testid="markdown-presentation-print-deck"] [aria-label="Slide Document"] > footer {
          background-color: rgb(255 255 255) !important;
          opacity: 1 !important;
        }
      `:""}
        ${m?"":`
        #${n} [data-kg-hr="1"] { break-after: page; page-break-after: always; }
        #${n} [data-kg-page-break="1"] { display: block !important; height: 0 !important; margin: 0 !important; padding: 0 !important; border: 0 !important; break-before: page; page-break-before: always; }
      `}
        @page { margin: ${K}; size: ${X}; }
      }
    `,document.head.appendChild(D),m&&le(s,{orientation:l,preservePresentationLayout:m,pageSizeCss:X,pageMarginCss:K,rootPaddingCss:U,viewportWidthMmCss:_,presentationSectionHeightMmCss:N,fittedSlideWidthMmCss:T,fittedSlideHeightMmCss:j});const W=()=>{try{document.title=a}catch{}try{D.remove()}catch{}try{s.remove()}catch{}for(let v=0;v<d.length;v+=1)try{URL.revokeObjectURL(d[v])}catch{}try{window.removeEventListener("afterprint",W)}catch{}};try{document.title=e}catch{}try{window.addEventListener("afterprint",W)}catch{}try{window.focus()}catch{}try{window.print()}catch{W()}setTimeout(()=>{W()},3e4)}catch{}}const me="export-pdf-debug",pt=()=>{if(typeof window>"u"||typeof window.IntersectionObserver>"u")return()=>{};const i=window.IntersectionObserver;class t{constructor(a){I(this,"root",null);I(this,"rootMargin","0px");I(this,"thresholds",[0]);I(this,"callback");this.callback=a}observe(a){const n={target:a,isIntersecting:!0,intersectionRatio:1,time:typeof performance<"u"?performance.now():Date.now(),boundingClientRect:a.getBoundingClientRect(),intersectionRect:a.getBoundingClientRect(),rootBounds:null};setTimeout(()=>{try{this.callback([n],this)}catch{}},0)}unobserve(){}disconnect(){}takeRecords(){return[]}}return window.IntersectionObserver=t,()=>{window.IntersectionObserver=i}},pe=(i,t)=>t==="portrait"?{horizontalInsetScale:.5,verticalInsetScale:.8,compactHorizontalContent:!0,centerContent:!1}:t==="landscape"?{horizontalInsetScale:.2,verticalInsetScale:.4,compactHorizontalContent:!1,centerContent:!0}:{compactHorizontalContent:!1,centerContent:!1},he=(i,t)=>i==="split-viewer"?pe(!0,t):{compactHorizontalContent:!1,centerContent:!1},ge=i=>{if(!i)return 0;const t=i.querySelectorAll('[data-kg-hr="1"]');if(t.length>0)return t.length;const e=i.querySelectorAll("hr");if(e.length===0)return 0;const a=r=>{let o=r;for(;o&&o!==i;){if(o.nextElementSibling)return!0;o=o.parentElement}return!1};let n=0;for(let r=0;r<e.length;r+=1)a(e[r])&&(n+=1);return n},ue=(i,t)=>{const e=i.querySelectorAll("img");if(e.length===0)return Promise.resolve();const a=new Set;for(let n=0;n<e.length;n+=1){const r=e[n];r.complete&&r.naturalWidth>0||a.add(r)}return a.size===0?Promise.resolve():new Promise(n=>{let r=!1;const o=()=>{r||(r=!0,n())},c=s=>{a.delete(s),a.size===0&&o()};for(const s of a)s.addEventListener("load",()=>c(s),{once:!0}),s.addEventListener("error",()=>c(s),{once:!0});setTimeout(o,t)})},fe=i=>{let t=0;const e=i.querySelectorAll('[data-kg-video-snapshot="1"]');for(let n=0;n<e.length;n+=1)e[n].querySelector("img[src]")||(t+=1);const a=i.querySelectorAll('[data-kg-webpage-snapshot="1"]');for(let n=0;n<a.length;n+=1)!!a[n].querySelector("img[src], svg")||(t+=1);return t},ot=(i,t)=>{try{t.scrollTop=i.scrollTop,t.scrollLeft=i.scrollLeft}catch{}const e=i.querySelectorAll("*"),a=t.querySelectorAll("*"),n=Math.min(e.length,a.length);for(let r=0;r<n;r+=1){const o=e[r],c=a[r];try{c.scrollTop=o.scrollTop,c.scrollLeft=o.scrollLeft}catch{}}},ye=(i,t)=>{const e=i.querySelectorAll('[aria-label="Slide Document"]'),a=t.querySelectorAll('[aria-label="Slide Document"]'),n=Math.min(e.length,a.length),r=["Slide Content","Slide Left Column","Slide Right Column"];for(let o=0;o<n;o+=1){const c=e[o],s=a[o];for(let d=0;d<r.length;d+=1){const l=r[d],p=c.querySelector(`[aria-label="${l}"]`),m=s.querySelector(`[aria-label="${l}"]`);p&&m&&ot(p,m)}ot(c,s)}};function be(i){const t=String(i||"");if(!t.trim())return null;try{const e=document.createElement("section");e.setAttribute("data-testid","markdown-preview-root");const a=document.createElement("article");return a.innerHTML=st().render(t),e.appendChild(a),a}catch{return null}}function we(i){const t=String(i||"");if(!t.trim())return null;try{const{slides:e}=ct(t);if(!e.length)return null;const a=document.createElement("section");a.setAttribute("data-testid","markdown-preview-root");const n=document.createElement("section");n.setAttribute("data-testid","markdown-presentation-print-deck");for(let r=0;r<e.length;r+=1){const o=e[r],c=document.createElement("article");if(c.innerHTML=st().render(String(o.text||"")),n.appendChild(c),r<e.length-1){const s=document.createElement("hr");s.setAttribute("data-kg-hr","1"),n.appendChild(s)}}return a.appendChild(n),n}catch{return null}}async function ke(i){const t=String(i||"");if(!t.trim())return null;const e=document.createElement("div");e.setAttribute("data-testid","markdown-pdf-render-host"),e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.width="1120px",e.style.height="auto",e.style.opacity="0",e.style.pointerEvents="none",e.style.overflow="visible",e.style.zIndex="-1",document.body.appendChild(e);const a=lt.createRoot(e),n=pt();try{a.render($.createElement(Et,{markdownText:t,activeDocumentPath:"__pdf_export__",highlightedLineRange:null,markdownWordWrap:!0,markdownPresentationMode:!1,markdownTextHighlight:!1,uiPanelTextFontClass:"",uiPanelMonospaceTextClass:"",previewOverlayScope:"container",previewOverlayPortalTarget:null,previewScrollable:!0,viewMode:"viewer",showSidebar:!1})),await new Promise(s=>requestAnimationFrame(()=>s())),await new Promise(s=>requestAnimationFrame(()=>s())),await(async s=>{const d=Date.now();for(;Date.now()-d<s;){const l=e.querySelectorAll('[data-kg-mermaid-visibility-gate="pending"]');for(let p=0;p<l.length;p+=1)try{l[p].scrollIntoView({block:"center",behavior:"instant"})}catch{}if(l.length===0)return;await new Promise(p=>setTimeout(()=>p(),80))}})(2600),await new Promise(s=>setTimeout(()=>s(),120));const o=e.querySelector('[data-testid="markdown-preview-root"]'),c=(o==null?void 0:o.querySelector("article"))||o;return c?c.cloneNode(!0):null}catch{return null}finally{try{n()}catch{}try{a.unmount()}catch{}try{e.remove()}catch{}}}async function ve(i){const t=String(i||"");if(!t.trim())return null;const e=document.createElement("div");e.setAttribute("data-testid","markdown-presentation-pdf-render-host"),e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.width=`${S.width}px`,e.style.height="auto",e.style.opacity="0",e.style.pointerEvents="none",e.style.overflow="visible",e.style.zIndex="-1",document.body.appendChild(e);const a=lt.createRoot(e),n=pt();try{const{headMeta:r,slides:o}=ct(t);if(!o.length)return null;const c=xt(t,0).tokens,s=It(r),d=document.documentElement.getAttribute("data-theme")==="dark"?"dark":"light";a.render($.createElement("section",{"data-testid":"markdown-presentation-print-deck",className:"w-full"},o.map((m,u)=>{const g=$t({slide:m,headMeta:r,fullDocTokens:c}),b=Mt(c,m.startLine,m.endLine),h=At({hasSlides:!0,slides:o,safeActiveSlideId:u,twoColumnTokens:g,slideTokens:b,headMeta:r,activeDocumentPath:"__pdf_export__",highlightedLineRange:null,markdownWordWrap:!1,markdownTextHighlight:!1,selectionKind:null,uiPanelTextFontClass:"",uiPanelMonospaceTextClass:"",uiPanelMicroLabelTextSizeClass:"text-[10px]",previewOverlayScope:"container",previewOverlayPortalTarget:null,activeFragmentConfig:{enabled:!1,classNames:[],tags:[],steps:0},activeFragmentStep:0,mermaidFrontmatterConfig:s,rootThemeMode:d,effectiveHighlightBackgroundColor:null,effectiveHighlightUnderlineColor:null,headerFooterPositionMode:"slide-absolute"}),y=Ct(m.meta||{},r,""),k=Tt({slideMeta:m.meta||{},headMeta:r,isAcademicTheme:y.themeStyle==="academic"}),x=Pt("__pdf_export__",y.backgroundRaw,y.backgroundSize,y.backgroundPosition);return $.createElement($.Fragment,{key:`slide-${u}`},[$.createElement("section",{key:`slide-canvas-${u}`,className:"w-full",style:{margin:0,padding:0,breakInside:"avoid",pageBreakInside:"avoid",width:`${S.width}px`,minWidth:`${S.width}px`,maxWidth:`${S.width}px`,height:`${S.height}px`,minHeight:`${S.height}px`,maxHeight:`${S.height}px`}},$.createElement("article",{key:`slide-article-${u}`,className:[k.baseFrameClass,y.slideClass,"w-full"].filter(Boolean).join(" "),style:{...x,width:"100%",height:"100%",minHeight:"100%",maxHeight:"100%",maxWidth:"100%",margin:0,overflow:"hidden"}},h)),u<o.length-1?$.createElement("hr",{key:`slide-break-${u}`,"data-kg-hr":"1"}):null])}))),await new Promise(m=>requestAnimationFrame(()=>m())),await new Promise(m=>requestAnimationFrame(()=>m())),await(async m=>{const u=Date.now();for(;Date.now()-u<m;){const g=e.querySelectorAll('[data-kg-mermaid-visibility-gate="pending"]');for(let h=0;h<g.length;h+=1)try{g[h].scrollIntoView({block:"center",behavior:"instant"})}catch{}const b=fe(e);if(g.length===0&&b===0)return;await new Promise(h=>setTimeout(()=>h(),80))}})(3200),await ue(e,2400),await new Promise(m=>requestAnimationFrame(()=>m()));const p=e.querySelector('[data-testid="markdown-presentation-print-deck"]');return p?p.cloneNode(!0):null}catch{return null}finally{try{n()}catch{}try{a.unmount()}catch{}try{e.remove()}catch{}}}async function on(i){var b,h;const t=i.viewerEl||i.viewerRefCurrent;if(!t){i.pushUiToast({id:"export-pdf-missing-view",kind:"warning",message:nt.markdownWorkspaceExportPdfMissingSurfaceWarning});return}const e=t.querySelector('[data-testid="markdown-preview-root"]')||t,a=e.querySelector("article"),n=be(String(i.markdownText||"")),r=await ve(String(i.markdownText||""))||we(String(i.markdownText||"")),o=await ke(String(i.markdownText||"")),c=(b=t.matches)!=null&&b.call(t,'[data-testid="markdown-presentation-root"]')?t:(h=t.querySelector)==null?void 0:h.call(t,'[data-testid="markdown-presentation-root"]'),s=i.orientation||"portrait",d=!!c;try{c&&r&&ye(c,r)}catch{}const l=d?r||o||a||n||e:a||n||e;let p="preview-root";l===r?p="presentation-deck":l===o?p="viewer-fidelity":l===a?p="viewer-article":l===n&&(p="markdown-fallback");const m=typeof import.meta<"u"&&!1,u=d?"presentation":"split-viewer",g=he(u,s);if(m){const y=ge(l),k=dt(s,{horizontalInsetScale:g.horizontalInsetScale,verticalInsetScale:g.verticalInsetScale}),x=(z,C)=>`${z} T/R/B/L=${C.top}/${C.right}/${C.bottom}/${C.left}mm`,w=`surface=${u} · ${x("page",k.pageMarginMm)} · ${x("root",k.rootPaddingMm)} · compact=${g.compactHorizontalContent?"on":"off"} · center=${g.centerContent?"on":"off"}`;i.pushUiToast({id:me,kind:"neutral",message:nt.markdownWorkspaceExportPdfDebugTargetMessage(p,y,w),ttlMs:1800,log:!1})}await de(l,{title:i.exportBaseName,orientation:s,horizontalInsetScale:g.horizontalInsetScale,verticalInsetScale:g.verticalInsetScale,compactHorizontalContent:g.compactHorizontalContent,centerContent:g.centerContent,fidelityMode:u==="presentation"?"presentation-viewer-fidelity":"balanced"})}export{on as exportViewerPdf};
