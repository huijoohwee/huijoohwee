var vt=Object.defineProperty;var St=(i,t,e)=>t in i?vt(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var I=(i,t,e)=>St(i,typeof t!="symbol"?t+"":t,e);import{fy as et,cf as nt,cy as st}from"./index-F8LEHkZk.js";import{s as ct,b as xt,a as Mt,g as $t,r as At,c as Ct,M as Tt}from"./MarkdownPreview-0PLtBRYu.js";import{p as Pt}from"./mermaidConfig-DLkH1ubd.js";import{a as Et,s as It}from"./markdownPreviewLex-CJEQvyap.js";import{c as lt,R as $}from"./react--phEy7aE.js";import"./mermaid-BT0euN7O.js";import"./d3-BjxFkomu.js";import"./ui-AwjAwlyN.js";import"./markdown-it-BSdZoCAR.js";import"./markdown-ast-CoeHqX2R.js";import"./useIsomorphicLayoutEffect-C52gcuQ3.js";import"./responsiveElementClasses-BVMtb2VV.js";import"./overlay-urmL41V5.js";import"./overlayPlacement-C5oWQuZP.js";import"./toolbarStyles-c3071ELQ.js";import"./SharedWebpageSurface-DCz-gIYI.js";import"./tableClasses-B597AaSb.js";import"./pointerDrag-7kMSqmzQ.js";import"./IconButton-CcbmCPhI.js";import"./Tooltip-CSkqNkVA.js";import"./tooltipUtils-BoPREY4I.js";import"./MarkdownSigilText-F4rh3_84.js";import"./icons-CJeGZPJU.js";import"./useMarkdownExplorerSectionCollapseState-D8DLOlCt.js";import"./markdownRoundTrip-Cgm-p_sj.js";import"./ZoomPanViewport-B7kpX6ys.js";import"./rafValueScheduler-BnT9N2Tt.js";import"./useMarkdownPreviewTokens-DpwwZuP5.js";import"./highlightjs-BVNrFAiQ.js";import"./PreviewOverlay-DU825JVq.js";import"./text-z6OLAJGE.js";import"./lazyStyles-CL7kpNYS.js";import"./textLayout-DsCEykWj.js";import"./WorkspaceHeader-t59ap-aP.js";import"./AnchoredPopover-BJjF2unJ.js";import"./markdownTypography-BqdbmeY_.js";import"./graphFieldIcons-DJPto5le.js";import"./mainPanelSettingsSelectClass-Dr-nfqkG.js";import"./workspaceEditorModePresentation-BbHT8kR2.js";import"./MainPanelSettingsPanelShell-Di0ORHFH.js";const V=16/9,S={width:1920,height:1080},qt={portrait:{pageSizeIn:{width:8.2677165354,height:11.6929133858}},landscape:{pageSizeIn:{width:11.6929133858,height:8.2677165354}}},dt=(i,t)=>{const e=et(i,"pageMarginMm"),r=et(i,"rootPaddingMm"),n=Number(t==null?void 0:t.horizontalInsetScale),a=Number.isFinite(n)&&n>0?n:1,o=Number(t==null?void 0:t.verticalInsetScale),c=Number.isFinite(o)&&o>0?o:1;return a!==1&&(e.right*=a,e.left*=a,r.right*=a,r.left*=a),c!==1&&(e.top*=c,e.bottom*=c,r.top*=c,r.bottom*=c),{pageMarginMm:e,rootPaddingMm:r}},Rt=i=>{const t=qt[i];return{widthMm:t.pageSizeIn.width*25.4,heightMm:t.pageSizeIn.height*25.4}},Lt=i=>{const t=i.orientation,e=dt(t,{horizontalInsetScale:i.horizontalInsetScale,verticalInsetScale:i.verticalInsetScale});i.presentationVerticalInsetSymmetry&&(e.pageMarginMm.bottom=e.pageMarginMm.top,e.rootPaddingMm.bottom=e.rootPaddingMm.top);const r=Rt(t),n={widthMm:Math.max(1,r.widthMm-e.pageMarginMm.left-e.pageMarginMm.right-e.rootPaddingMm.left-e.rootPaddingMm.right),heightMm:Math.max(1,r.heightMm-e.pageMarginMm.top-e.pageMarginMm.bottom-e.rootPaddingMm.top-e.rootPaddingMm.bottom)},a=n.widthMm/Math.max(1,n.heightMm)>V?n.heightMm*V:n.widthMm,o=a/V;return{pageSizeMm:r,effectiveInsetsMm:e,viewportMm:n,presentationSlideMm:{widthMm:a,heightMm:o}}},zt=i=>{try{if(!i.videoWidth||!i.videoHeight)return null;const t=document.createElement("canvas");t.width=i.videoWidth,t.height=i.videoHeight;const e=t.getContext("2d");if(!e)return null;e.drawImage(i,0,0);try{return t.toDataURL("image/png")}catch{return t.toDataURL("image/jpeg",.92)}}catch{return null}},mt=i=>{try{if(!i.complete||!i.naturalWidth||!i.naturalHeight)return null;const t=String(i.getAttribute("src")||"").trim();if(/\.svg(\?|#|$)/i.test(t))return null;const e=document.createElement("canvas");e.width=i.naturalWidth,e.height=i.naturalHeight;const r=e.getContext("2d");return r?(r.drawImage(i,0,0),i.naturalWidth*i.naturalHeight>12e5?e.toDataURL("image/jpeg",.92):e.toDataURL("image/png")):null}catch{return null}},_t=/(?:youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?v=|shorts\/|live\/)|youtu\.be\/)([\w-]+)/i,Nt=/^\/__(?:media|webpage|webpage_asset)_proxy\?url=(.+)$/i,Ft=/(youtube(?:-nocookie)?\.com|youtu\.be|bilibili\.com|tiktok\.com|douyin\.com|vimeo\.com|twitter\.com|x\.com)/i,Dt=i=>{const t=String(i||"").trim().toLowerCase();return t?t.startsWith("data:image/svg+xml")||/\.svg(\?|#|$)/i.test(t)?"svg":t.startsWith("data:image/png")||/\.png(\?|#|$)/i.test(t)||t.startsWith("data:image/webp")||/\.webp(\?|#|$)/i.test(t)||t.startsWith("data:image/avif")||/\.avif(\?|#|$)/i.test(t)?"png":t.startsWith("data:image/jpeg")||t.startsWith("data:image/jpg")||/\.jpe?g(\?|#|$)/i.test(t)?"jpg":"other":"other"},Wt=i=>i==="svg"?3:i==="png"?2:i==="jpg"?1:0,R=i=>{let t=null;const e=new Set;for(let r=0;r<i.length;r+=1){const n=String(i[r]||"").trim();if(!n||e.has(n))continue;e.add(n);const a=Wt(Dt(n));(!t||a>t.score)&&(t={src:n,score:a})}return(t==null?void 0:t.src)||null},Ht=(i,t=1200)=>new Promise(e=>{let r=!1;const n=o=>{r||(r=!0,e(o))},a=new Image;a.onload=()=>n(!0),a.onerror=()=>n(!1),a.src=i,setTimeout(()=>n(!1),t)}),P=i=>{const t=i.match(Nt);if(!t)return i;try{return decodeURIComponent(t[1])}catch{return i}},H=i=>{const e=P(String(i||"").trim()).match(_t);return e?e[1]:null},O=i=>{const t=[`https://img.youtube.com/vi/${i}/maxresdefault.png`,`https://img.youtube.com/vi/${i}/sddefault.png`,`https://img.youtube.com/vi/${i}/hqdefault.png`,`https://img.youtube.com/vi/${i}/maxresdefault.jpg`,`https://img.youtube.com/vi/${i}/sddefault.jpg`,`https://img.youtube.com/vi/${i}/hqdefault.jpg`];return new Promise(e=>{(async()=>{for(let n=0;n<t.length;n+=1){const a=t[n];if(await Ht(a)){e(a);return}}e(t[t.length-1])})()})},Y=(i,t)=>{const e=document.createElement("img");return e.src=i,e.alt=t,e.style.width="100%",e.style.maxWidth="100%",e.style.height="auto",e.style.display="block",e.style.objectFit="contain",e},G=i=>{const t=q(i),e=(()=>{try{return new URL(i).hostname.replace(/^www\./,"")}catch{return""}})(),r=a=>a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),n=`
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
  <text x="640" y="500" fill="rgba(255,255,255,0.95)" font-family="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" font-size="44" text-anchor="middle">${r(t)}</text>
  <text x="640" y="540" fill="rgba(255,255,255,0.70)" font-family="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" font-size="24" text-anchor="middle">${r(e)}</text>
</svg>`.trim();return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`},q=i=>{const t=String(i||"").trim().toLowerCase();return/youtu\.?be|youtube(?:-nocookie)?\.com/i.test(t)?"YouTube":/bilibili\.com/i.test(t)?"Bilibili":/tiktok\.com/i.test(t)?"TikTok":/douyin\.com/i.test(t)?"Douyin":/vimeo\.com/i.test(t)?"Vimeo":/twitter\.com|x\.com/i.test(t)?"X":"Video"},A=(i,t,e)=>{const r=document.createElement("a");r.href=e,r.target="_blank",r.rel="noopener noreferrer",r.style.display="block",r.style.textDecoration="none",r.style.color="inherit",r.style.width="100%",r.style.borderRadius="12px",r.style.overflow="hidden",r.style.border="1px solid #d1d5db",r.style.boxShadow="0 2px 8px rgba(0,0,0,0.12)";const n=document.createElement("div");n.style.position="relative",n.style.lineHeight="0",n.style.backgroundColor="#000";const a=document.createElement("img");a.src=i,a.alt=t,a.setAttribute("width","1280"),a.setAttribute("height","720"),a.style.width="100%",a.style.height="auto",a.style.display="block";const o=document.createElement("div");o.style.cssText="position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to top,rgba(0,0,0,0.7) 0%,rgba(0,0,0,0) 50%);pointer-events:none";const c=document.createElement("div");c.style.cssText="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:56px;height:56px;background:rgba(0,0,0,0.65);border-radius:50%;display:flex;align-items:center;justify-content:center;pointer-events:none";const s=document.createElement("div");s.style.cssText="width:0;height:0;border-top:11px solid transparent;border-bottom:11px solid transparent;border-left:20px solid #fff;margin-left:4px",c.appendChild(s);const d=q(e),l=document.createElement("div");l.style.cssText="position:absolute;bottom:0;left:0;right:0;padding:10px 12px;display:flex;align-items:center;gap:8px;pointer-events:none";const p=document.createElement("span");p.style.cssText="color:#fff;font-size:12px;font-family:system-ui,-apple-system,sans-serif;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1",p.textContent=d,l.appendChild(p);const m=document.createElement("span");return m.style.cssText="color:rgba(255,255,255,0.6);font-size:9px;font-family:system-ui,-apple-system,sans-serif;white-space:nowrap;letter-spacing:0.5px",m.textContent="OPEN →",l.appendChild(m),n.appendChild(a),n.appendChild(o),n.appendChild(c),n.appendChild(l),r.appendChild(n),r},Ot=(i,t)=>{const e=document.createElement("a");return e.href=t,e.target="_blank",e.rel="noopener noreferrer",e.style.display="block",e.style.textDecoration="none",e.style.color="inherit",i.replaceWith(e),e.appendChild(i),e},Bt=i=>{const t=i.querySelectorAll("img");for(let e=0;e<t.length;e+=1){const r=t[e];if(r.closest("a"))continue;const n=String(r.getAttribute("data-kg-original-src")||"").trim();if(/^https?:\/\//i.test(n))try{Ot(r,n)}catch{}}},Ut=i=>{const t=i.querySelectorAll("img");for(let e=0;e<t.length;e+=1){const r=t[e];if(r.hasAttribute("data-kg-original-src"))continue;const n=String(r.getAttribute("src")||"").trim(),a=P(n);if(/^https?:\/\//i.test(a))try{r.setAttribute("data-kg-original-src",a)}catch{}}},B=i=>{if(!i)return null;const t=String(i.currentSrc||i.getAttribute("src")||"").trim(),e=String(i.getAttribute("data-kg-original-src")||"").trim(),r=mt(i);return R([e,t,r])},jt=(i,t)=>{const e=i.querySelectorAll("img"),r=t.querySelectorAll("img"),n=Math.min(e.length,r.length);for(let a=0;a<n;a+=1){const o=e[a],c=r[a],s=mt(o);if(s)try{c.setAttribute("src",s)}catch{}try{c.removeAttribute("loading")}catch{}try{c.removeAttribute("decoding")}catch{}}},Vt=(i,t)=>{const e=i.querySelectorAll("video"),r=t.querySelectorAll("video"),n=Math.min(e.length,r.length);for(let a=0;a<n;a+=1){const o=e[a],c=r[a],s=zt(o);if(!s)continue;const d=P(String(o.getAttribute("src")||"").trim()),l=/^https?:\/\//i.test(d)?d:"";try{c.replaceWith(l?A(s,o.poster||"video frame",l):Y(s,o.poster||"video frame"))}catch{}}},it=async i=>{const t=i.querySelectorAll("iframe"),e=[];for(let r=0;r<t.length;r+=1){const n=t[r],a=P(String(n.getAttribute("src")||"").trim());if(!Ft.test(a))continue;const o=H(a),c=o?`https://www.youtube.com/watch?v=${o}`:a;e.push((o?O(o):Promise.resolve("")).then(s=>{try{const d=n.parentElement,l=d?d.querySelector('img[data-kg-media-thumbnail="1"], img'):null,p=B(l),m=R([p,s])||G(c),u=n.parentElement;u&&u!==i&&u.children.length<=2?u.replaceWith(A(m,`${q(c)} video`,c)):n.replaceWith(A(m,`${q(c)} video`,c))}catch{}}))}await Promise.all(e)},Yt=async(i,t)=>{const e=i.querySelectorAll("iframe"),r=t.querySelectorAll("iframe"),n=Math.min(e.length,r.length),a=[];for(let o=0;o<n;o+=1){const c=e[o],s=r[o];a.push(Promise.resolve().then(async()=>{const d=P(String(c.getAttribute("src")||"").trim()),l=c.parentElement?c.parentElement.querySelector('img[data-kg-media-thumbnail="1"], img'):null;let p=R([B(l)]);if(!p){const g=H(d);g&&(p=await O(g))}p||(p=G(d||"about:blank"));const m=/^https?:\/\//i.test(d)?d:"",u=m?A(p,`${q(m)} embed`,m):Y(p,"embedded content");try{const g=String(s.getAttribute("class")||"").trim();g&&u.setAttribute("class",g)}catch{}try{const g=String(s.getAttribute("style")||"").trim();g&&u.setAttribute("style",g)}catch{}try{s.replaceWith(u)}catch{}}))}await Promise.all(a)},Gt=async i=>{const t=i.querySelectorAll("img"),e=[];for(let r=0;r<t.length;r+=1){const n=t[r],a=String(n.getAttribute("src")||"").trim(),o=H(a);if(!o)continue;const c=`https://www.youtube.com/watch?v=${o}`;e.push(O(o).then(s=>{try{n.replaceWith(A(s,`YouTube: ${o}`,c))}catch{}}))}await Promise.all(e)},Kt=async(i,t)=>{const e=i.querySelectorAll('[data-kg-webpage-snapshot="1"]'),r=t.querySelectorAll('[data-kg-webpage-snapshot="1"]'),n=Math.min(e.length,r.length),a=[];for(let o=0;o<n;o+=1){const c=r[o],s=String(c.getAttribute("data-src")||"").trim(),d=H(s);if(!d)continue;const l=`https://www.youtube.com/watch?v=${d}`;a.push(O(d).then(p=>{try{c.replaceWith(A(p,`YouTube: ${d}`,l))}catch{}}))}await Promise.all(a)},Xt=(i,t)=>{const e=i.querySelectorAll('[data-kg-video-snapshot="1"]'),r=t.querySelectorAll('[data-kg-video-snapshot="1"]'),n=Math.min(e.length,r.length);for(let a=0;a<n;a+=1){const o=e[a],c=r[a],s=o.querySelector('img[data-kg-media-thumbnail="1"]'),d=P(String(c.getAttribute("data-src")||"").trim()),l=R([B(s)])||G(d),p=/^https?:\/\//i.test(d)?d:"";try{c.replaceWith(p?A(l,d,p):Y(l,d))}catch{}}},Zt=(i,t)=>{const e=i.querySelectorAll('[data-kg-webpage-snapshot="1"]'),r=t.querySelectorAll('[data-kg-webpage-snapshot="1"]'),n=Math.min(e.length,r.length);for(let a=0;a<n;a+=1){const o=e[a],c=r[a],s=o.querySelector('img[data-kg-media-thumbnail="1"]'),d=c.querySelector('img[data-kg-media-thumbnail="1"]');if(d){const l=R([B(s),String(d.getAttribute("src")||"").trim(),String(d.currentSrc||"").trim()]);if(!l)continue;try{d.setAttribute("src",l),d.removeAttribute("loading"),d.removeAttribute("decoding")}catch{}}}},rt=i=>{const t=i.querySelectorAll("img,video,iframe");for(let e=0;e<t.length;e+=1){try{t[e].removeAttribute("loading")}catch{}try{t[e].removeAttribute("decoding")}catch{}}},Jt=i=>{const t=i.querySelectorAll("hr"),e=r=>{let n=r;for(;n&&n!==i;){if(n.nextElementSibling)return!0;n=n.parentElement}return!1};for(let r=0;r<t.length;r+=1){const n=t[r];if(e(n))try{n.setAttribute("data-kg-hr","1");const a=n.nextElementSibling;if(!a||a.getAttribute("data-kg-page-break")!=="1"){const o=document.createElement("div");o.setAttribute("data-kg-page-break","1"),n.insertAdjacentElement("afterend",o)}}catch{}}},L=i=>i.matches('[data-testid="markdown-presentation-print-deck"]')?i:i.querySelector('[data-testid="markdown-presentation-print-deck"]'),Qt=i=>{if(L(i))return;const e=Array.from(i.querySelectorAll('[aria-label="Slide Document"]')),r=new Set,n=[];for(let s=0;s<e.length;s+=1){const l=e[s].closest("section");l&&i.contains(l)&&(r.has(l)||(r.add(l),n.push(l)))}if(n.length===0){const s=i.matches("article")?i:i.querySelector("article");if(s){const d=document.createElement("section");d.appendChild(s),n.push(d)}}if(n.length===0)return;const a=document.createElement("section");a.setAttribute("data-testid","markdown-presentation-print-deck"),a.className="w-full";for(let s=0;s<n.length;s+=1)a.appendChild(n[s]);const o=i.matches('[data-testid="markdown-presentation-root"]')?i:i.querySelector('[data-testid="markdown-presentation-root"]'),c=o==null?void 0:o.querySelector(":scope > main");if(c)try{c.replaceChildren(a);return}catch{}try{i.replaceChildren(a)}catch{}},te=i=>{const t=L(i);if(!t)return;const e=Array.from(t.querySelectorAll(":scope > section"));try{t.replaceChildren(...e)}catch{}const r=n=>{const o=n.querySelector(":scope > article")||n;return o.querySelector('img,video,iframe,svg,canvas,table,pre,code,blockquote,h1,h2,h3,h4,h5,h6,p,li,[data-kg-video-snapshot="1"],[data-kg-webpage-snapshot="1"]')?!0:String(o.textContent||"").replace(/\u200B/g,"").trim().length>0};for(let n=e.length-1;n>=0;n-=1){const a=e[n];if(r(a))break;try{a.remove()}catch{}}},ee=i=>{const t=L(i);if(!t)return;const e=Array.from(t.querySelectorAll(":scope > section"));if(e.length===0)return;const r=[];for(let n=0;n<e.length;n+=1){const a=e[n],o=document.createElement("div");o.setAttribute("data-kg-presentation-page","1"),o.appendChild(a),r.push(o)}try{t.replaceChildren(...r)}catch{}},ne=()=>{if(typeof document>"u")return"";const i=[],t=Array.from(document.styleSheets||[]);for(let e=0;e<t.length;e+=1){const r=t[e];let n;try{n=r.cssRules}catch{continue}if(!(!n||n.length===0))for(let a=0;a<n.length;a+=1){const o=n[a],c=String((o==null?void 0:o.cssText)||"").trim();c&&i.push(c)}}return i.join(`
`)},ie=i=>{const t=L(i);if(!t)return;const e=Array.from(t.querySelectorAll(':scope > [data-kg-presentation-page="1"]'));for(let r=0;r<e.length;r+=1){const n=e[r];if(n.querySelector(':scope > [data-kg-presentation-page-frame="1"]'))continue;const o=n.querySelector('[data-kg-presentation-slide-surface="1"]'),c=n.querySelector(":scope > section"),s=n.querySelector(":scope > article"),d=o||c||s;if(d)try{const l=document.createElement("div");l.setAttribute("data-kg-presentation-page-frame","1"),l.appendChild(d),n.replaceChildren(l)}catch{}}},re=i=>{const t=i.querySelectorAll('[data-kg-mermaid-visibility-gate="pending"]');if(t.length===0)return Promise.resolve();for(let e=0;e<t.length;e+=1)try{t[e].scrollIntoView({block:"center",behavior:"instant"})}catch{}return new Promise(e=>{setTimeout(e,2e3)})},at=(i,t)=>{const e=i.querySelectorAll("img");if(e.length===0)return Promise.resolve();const r=new Set;for(let n=0;n<e.length;n+=1){const a=e[n];a.complete&&a.naturalWidth>0||r.add(a)}return r.size===0?Promise.resolve():new Promise(n=>{let a=!1;const o=()=>{a||(a=!0,n())},c=s=>{r.delete(s),r.size===0&&o()};for(const s of r)s.addEventListener("load",()=>c(s),{once:!0}),s.addEventListener("error",()=>c(s),{once:!0});setTimeout(o,t)})},ae=(i,t)=>{try{t.scrollTop=i.scrollTop,t.scrollLeft=i.scrollLeft}catch{}const e=i.querySelectorAll("*"),r=t.querySelectorAll("*"),n=Math.min(e.length,r.length);for(let a=0;a<n;a+=1){const o=e[a],c=r[a];try{c.scrollTop=o.scrollTop,c.scrollLeft=o.scrollLeft}catch{}}},oe=(i,t)=>{const e=['[aria-label="Slide Content"]','[aria-label="Slide Left Column"]','[aria-label="Slide Right Column"]'];for(let r=0;r<e.length;r+=1){const n=e[r],a=i.querySelectorAll(n),o=t.querySelectorAll(n),c=Math.min(a.length,o.length);for(let s=0;s<c;s+=1){const d=a[s],l=o[s];try{l.scrollLeft=d.scrollLeft,l.scrollTop=d.scrollTop}catch{}}}},se=i=>{const t=['[aria-label="Slide Content"]','[aria-label="Slide Left Column"]','[aria-label="Slide Right Column"]'];for(let e=0;e<t.length;e+=1){const r=t[e],n=i.querySelectorAll(r);for(let a=0;a<n.length;a+=1){const o=n[a];if(!o)continue;const c=Math.max(0,Math.floor(o.clientHeight));if(!(c<=0))try{o.style.height=`${c}px`,o.style.minHeight=`${c}px`,o.style.maxHeight=`${c}px`,o.style.overflow="clip",o.style.display="block",o.style.position="relative",o.style.contain="layout paint",o.style.breakInside="avoid",o.style.pageBreakInside="avoid"}catch{}}}},ce=(i,t,e,r)=>{const n=L(i);if(!n)return;const a=n.querySelectorAll(":scope > section");for(let o=0;o<a.length;o+=1){const c=a[o],s=c.querySelector(":scope > article");if(!s)continue;let d=!1;try{const l=document.createElementNS("http://www.w3.org/2000/svg","svg"),p=`kg-slide-clip-${o}`;l.setAttribute("xmlns","http://www.w3.org/2000/svg"),l.setAttribute("viewBox",`0 0 ${t} ${e}`),l.setAttribute("width","100%"),l.setAttribute("height","100%"),l.setAttribute("preserveAspectRatio","xMidYMid meet"),l.setAttribute("overflow","hidden"),l.style.overflow="hidden",l.style.width="100%",l.style.height="100%";const m=document.createElementNS("http://www.w3.org/2000/svg","defs"),u=document.createElementNS("http://www.w3.org/2000/svg","clipPath");u.setAttribute("id",p),u.setAttribute("clipPathUnits","userSpaceOnUse");const g=document.createElementNS("http://www.w3.org/2000/svg","rect");if(g.setAttribute("x","0"),g.setAttribute("y","0"),g.setAttribute("width",String(t)),g.setAttribute("height",String(e)),u.appendChild(g),m.appendChild(u),l.appendChild(m),r){const k=document.createElementNS("http://www.w3.org/2000/svg","style");k.textContent=r,l.appendChild(k)}l.setAttribute("data-kg-presentation-slide-svg","1");const b=document.createElementNS("http://www.w3.org/2000/svg","foreignObject");b.setAttribute("x","0"),b.setAttribute("y","0"),b.setAttribute("width","100%"),b.setAttribute("height","100%"),b.setAttribute("clip-path",`url(#${p})`),b.setAttribute("overflow","hidden"),b.style.overflow="hidden";const h=document.createElementNS("http://www.w3.org/1999/xhtml","div");h.style.width=`${t}px`,h.style.height=`${e}px`,h.style.maxWidth=`${t}px`,h.style.maxHeight=`${e}px`,h.style.display="block",h.style.overflow="hidden",h.style.boxSizing="border-box",h.style.background="transparent";const y=s.cloneNode(!0);y.style.width="100%",y.style.height="100%",y.style.maxWidth="100%",y.style.maxHeight="100%",y.style.display="block",y.style.overflow="hidden",y.style.boxSizing="border-box",h.appendChild(y),b.appendChild(h),l.appendChild(b),l.setAttribute("data-kg-presentation-slide-surface","1"),c.replaceChildren(l),d=!0}catch{}if(!d)try{s.setAttribute("data-kg-presentation-slide-surface","1")}catch{}}},le=(i,t)=>{try{const e=Array.from(i.querySelectorAll('[data-kg-presentation-page="1"]')),r=e.map((a,o)=>{const c=a.querySelector(':scope > [data-kg-presentation-page-frame="1"]'),s=c==null?void 0:c.querySelector(':scope > [data-kg-presentation-slide-surface="1"]'),d=a.getBoundingClientRect(),l=(c==null?void 0:c.getBoundingClientRect())||null,p=(s==null?void 0:s.getBoundingClientRect())||null;return{index:o,pageRect:{width:d.width,height:d.height},frameRect:l?{width:l.width,height:l.height}:null,surfaceRect:p?{width:p.width,height:p.height}:null,frameScroll:c?{width:c.scrollWidth,height:c.scrollHeight}:null,surfaceScroll:s?{width:s.scrollWidth,height:s.scrollHeight}:null}}),n={ts:Date.now(),...t,pageCount:e.length,pageMetrics:r};window.__KG_PRESENTATION_PRINT_RUNTIME_CAPTURE__=n;try{console.info("[kg-pdf-runtime-capture]",n),console.table(n.pageMetrics)}catch{}}catch{}};async function de(i,t){try{if(typeof window>"u"||!i)return;const e=String((t==null?void 0:t.title)||"Document"),r=document.title,n="kg-print-root",a="kg-print-style",o=document.getElementById(n);if(o)try{o.remove()}catch{}const c=document.getElementById(a);if(c)try{c.remove()}catch{}await at(i,8e3);try{await re(i)}catch{}const s=document.createElement("div");s.id=n,s.style.position="fixed",s.style.inset="0",s.style.zIndex="2147483647",s.style.background="white",s.style.overflow="auto";const d=[],l=(t==null?void 0:t.orientation)==="landscape"?"landscape":"portrait",p=(t==null?void 0:t.fidelityMode)||"balanced",m=p==="presentation-wysiwyg"||p==="presentation-viewer-fidelity",u=Number.isFinite(Number(t==null?void 0:t.horizontalInsetScale))&&Number(t==null?void 0:t.horizontalInsetScale)>0?Number(t==null?void 0:t.horizontalInsetScale):1,g=Number.isFinite(Number(t==null?void 0:t.verticalInsetScale))&&Number(t==null?void 0:t.verticalInsetScale)>0?Number(t==null?void 0:t.verticalInsetScale):1,b=Lt({orientation:l,horizontalInsetScale:u,verticalInsetScale:g,presentationVerticalInsetSymmetry:m}),{effectiveInsetsMm:h,pageSizeMm:y,viewportMm:k,presentationSlideMm:x}=b,w=v=>{const Q=Math.round(Math.max(0,v)*1e3)/1e3,tt=(Number.isFinite(Q)?Q:0).toFixed(3).replace(/\.?0+$/,"");return`${tt.length>0?tt:"0"}mm`},z=v=>`${w(v.top)} ${w(v.right)} ${w(v.bottom)} ${w(v.left)}`,C=m?{top:0,right:0,bottom:0,left:0}:h.pageMarginMm,ht=m?{top:h.pageMarginMm.top+h.rootPaddingMm.top,right:h.pageMarginMm.right+h.rootPaddingMm.right,bottom:h.pageMarginMm.bottom+h.rootPaddingMm.bottom,left:h.pageMarginMm.left+h.rootPaddingMm.left}:h.rootPaddingMm,K=z(C),U=z(ht),X=m?l==="landscape"?"297mm 210mm":"210mm 297mm":`${w(y.widthMm)} ${w(y.heightMm)}`,_=w(k.widthMm),gt=w(x.widthMm),ut=w(x.heightMm),ft=m?l==="landscape"?.6:.4:.5,Z=Math.max(0,k.heightMm-ft),N=w(Z),T=gt,j=ut,yt=w(Math.max(0,(Z-x.heightMm)/2)),bt=!!(t!=null&&t.compactHorizontalContent),wt=!!(t!=null&&t.centerContent)&&!m,M=!m,E=m;s.style.padding=U;const f=i.cloneNode(!0),J=f.matches('[data-testid="markdown-presentation-print-deck"]'),F=m&&l==="landscape"&&J;try{m?oe(i,f):ae(i,f)}catch{}try{Ut(f)}catch{}try{rt(f)}catch{}try{M&&jt(i,f)}catch{}try{(M||E)&&Zt(i,f)}catch{}try{(M||E)&&Vt(i,f)}catch{}try{M&&await it(f)}catch{}try{E&&await Yt(i,f)}catch{}try{E&&await it(f)}catch{}try{(M||E)&&await Gt(f)}catch{}try{(M||F)&&await Kt(i,f)}catch{}try{(M||F)&&Xt(i,f)}catch{}try{rt(f)}catch{}try{Jt(f)}catch{}try{m&&Qt(f)}catch{}try{m&&te(f)}catch{}try{m||Bt(f)}catch{}s.appendChild(f),document.body.appendChild(s),await at(s,5e3);try{m&&(J||se(f))}catch{}try{m&&(F||ce(f,S.width,S.height,ne()))}catch{}try{m&&ee(f)}catch{}try{m&&ie(f)}catch{}const kt=m?`
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
      `:"",D=document.createElement("style");D.id=a,F&&s.setAttribute("data-kg-native-presentation-landscape","1"),D.textContent=`
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
    `,document.head.appendChild(D),m&&le(s,{orientation:l,preservePresentationLayout:m,pageSizeCss:X,pageMarginCss:K,rootPaddingCss:U,viewportWidthMmCss:_,presentationSectionHeightMmCss:N,fittedSlideWidthMmCss:T,fittedSlideHeightMmCss:j});const W=()=>{try{document.title=r}catch{}try{D.remove()}catch{}try{s.remove()}catch{}for(let v=0;v<d.length;v+=1)try{URL.revokeObjectURL(d[v])}catch{}try{window.removeEventListener("afterprint",W)}catch{}};try{document.title=e}catch{}try{window.addEventListener("afterprint",W)}catch{}try{window.focus()}catch{}try{window.print()}catch{W()}setTimeout(()=>{W()},3e4)}catch{}}const pt=()=>{if(typeof window>"u"||typeof window.IntersectionObserver>"u")return()=>{};const i=window.IntersectionObserver;class t{constructor(r){I(this,"root",null);I(this,"rootMargin","0px");I(this,"thresholds",[0]);I(this,"callback");this.callback=r}observe(r){const n={target:r,isIntersecting:!0,intersectionRatio:1,time:typeof performance<"u"?performance.now():Date.now(),boundingClientRect:r.getBoundingClientRect(),intersectionRect:r.getBoundingClientRect(),rootBounds:null};setTimeout(()=>{try{this.callback([n],this)}catch{}},0)}unobserve(){}disconnect(){}takeRecords(){return[]}}return window.IntersectionObserver=t,()=>{window.IntersectionObserver=i}},me="export-pdf-debug",pe=(i,t)=>t==="portrait"?{horizontalInsetScale:.5,verticalInsetScale:.8,compactHorizontalContent:!0,centerContent:!1}:t==="landscape"?{horizontalInsetScale:.2,verticalInsetScale:.4,compactHorizontalContent:!1,centerContent:!0}:{compactHorizontalContent:!1,centerContent:!1},he=(i,t)=>i==="split-viewer"?pe(!0,t):{compactHorizontalContent:!1,centerContent:!1},ge=i=>{if(!i)return 0;const t=i.querySelectorAll('[data-kg-hr="1"]');if(t.length>0)return t.length;const e=i.querySelectorAll("hr");if(e.length===0)return 0;const r=a=>{let o=a;for(;o&&o!==i;){if(o.nextElementSibling)return!0;o=o.parentElement}return!1};let n=0;for(let a=0;a<e.length;a+=1)r(e[a])&&(n+=1);return n},ue=(i,t)=>{const e=i.querySelectorAll("img");if(e.length===0)return Promise.resolve();const r=new Set;for(let n=0;n<e.length;n+=1){const a=e[n];a.complete&&a.naturalWidth>0||r.add(a)}return r.size===0?Promise.resolve():new Promise(n=>{let a=!1;const o=()=>{a||(a=!0,n())},c=s=>{r.delete(s),r.size===0&&o()};for(const s of r)s.addEventListener("load",()=>c(s),{once:!0}),s.addEventListener("error",()=>c(s),{once:!0});setTimeout(o,t)})},fe=i=>{let t=0;const e=i.querySelectorAll('[data-kg-video-snapshot="1"]');for(let n=0;n<e.length;n+=1)e[n].querySelector("img[src]")||(t+=1);const r=i.querySelectorAll('[data-kg-webpage-snapshot="1"]');for(let n=0;n<r.length;n+=1)!!r[n].querySelector("img[src], svg")||(t+=1);return t},ot=(i,t)=>{try{t.scrollTop=i.scrollTop,t.scrollLeft=i.scrollLeft}catch{}const e=i.querySelectorAll("*"),r=t.querySelectorAll("*"),n=Math.min(e.length,r.length);for(let a=0;a<n;a+=1){const o=e[a],c=r[a];try{c.scrollTop=o.scrollTop,c.scrollLeft=o.scrollLeft}catch{}}},ye=(i,t)=>{const e=i.querySelectorAll('[aria-label="Slide Document"]'),r=t.querySelectorAll('[aria-label="Slide Document"]'),n=Math.min(e.length,r.length),a=["Slide Content","Slide Left Column","Slide Right Column"];for(let o=0;o<n;o+=1){const c=e[o],s=r[o];for(let d=0;d<a.length;d+=1){const l=a[d],p=c.querySelector(`[aria-label="${l}"]`),m=s.querySelector(`[aria-label="${l}"]`);p&&m&&ot(p,m)}ot(c,s)}};function be(i){const t=String(i||"");if(!t.trim())return null;try{const e=document.createElement("section");e.setAttribute("data-testid","markdown-preview-root");const r=document.createElement("article");return r.innerHTML=st().render(t),e.appendChild(r),r}catch{return null}}function we(i){const t=String(i||"");if(!t.trim())return null;try{const{slides:e}=ct(t);if(!e.length)return null;const r=document.createElement("section");r.setAttribute("data-testid","markdown-preview-root");const n=document.createElement("section");n.setAttribute("data-testid","markdown-presentation-print-deck");for(let a=0;a<e.length;a+=1){const o=e[a],c=document.createElement("article");if(c.innerHTML=st().render(String(o.text||"")),n.appendChild(c),a<e.length-1){const s=document.createElement("hr");s.setAttribute("data-kg-hr","1"),n.appendChild(s)}}return r.appendChild(n),n}catch{return null}}async function ke(i){const t=String(i||"");if(!t.trim())return null;const e=document.createElement("div");e.setAttribute("data-testid","markdown-pdf-render-host"),e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.width="1120px",e.style.height="auto",e.style.opacity="0",e.style.pointerEvents="none",e.style.overflow="visible",e.style.zIndex="-1",document.body.appendChild(e);const r=lt.createRoot(e),n=pt();try{r.render($.createElement(Tt,{markdownText:t,activeDocumentPath:"__pdf_export__",highlightedLineRange:null,markdownWordWrap:!0,markdownPresentationMode:!1,markdownTextHighlight:!1,uiPanelTextFontClass:"",uiPanelMonospaceTextClass:"",previewOverlayScope:"container",previewOverlayPortalTarget:null,previewScrollable:!0,viewMode:"viewer",showSidebar:!1})),await new Promise(s=>requestAnimationFrame(()=>s())),await new Promise(s=>requestAnimationFrame(()=>s())),await(async s=>{const d=Date.now();for(;Date.now()-d<s;){const l=e.querySelectorAll('[data-kg-mermaid-visibility-gate="pending"]');for(let p=0;p<l.length;p+=1)try{l[p].scrollIntoView({block:"center",behavior:"instant"})}catch{}if(l.length===0)return;await new Promise(p=>setTimeout(()=>p(),80))}})(2600),await new Promise(s=>setTimeout(()=>s(),120));const o=e.querySelector('[data-testid="markdown-preview-root"]'),c=(o==null?void 0:o.querySelector("article"))||o;return c?c.cloneNode(!0):null}catch{return null}finally{try{n()}catch{}try{r.unmount()}catch{}try{e.remove()}catch{}}}async function ve(i){const t=String(i||"");if(!t.trim())return null;const e=document.createElement("div");e.setAttribute("data-testid","markdown-presentation-pdf-render-host"),e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.width=`${S.width}px`,e.style.height="auto",e.style.opacity="0",e.style.pointerEvents="none",e.style.overflow="visible",e.style.zIndex="-1",document.body.appendChild(e);const r=lt.createRoot(e),n=pt();try{const{headMeta:a,slides:o}=ct(t);if(!o.length)return null;const c=Et(t,0).tokens,s=Pt(a),d=document.documentElement.getAttribute("data-theme")==="dark"?"dark":"light";r.render($.createElement("section",{"data-testid":"markdown-presentation-print-deck",className:"w-full"},o.map((m,u)=>{const g=xt({slide:m,headMeta:a,fullDocTokens:c}),b=It(c,m.startLine,m.endLine),h=Mt({hasSlides:!0,slides:o,safeActiveSlideId:u,twoColumnTokens:g,slideTokens:b,headMeta:a,activeDocumentPath:"__pdf_export__",highlightedLineRange:null,markdownWordWrap:!1,markdownTextHighlight:!1,selectionKind:null,uiPanelTextFontClass:"",uiPanelMonospaceTextClass:"",uiPanelMicroLabelTextSizeClass:"text-[10px]",previewOverlayScope:"container",previewOverlayPortalTarget:null,activeFragmentConfig:{enabled:!1,classNames:[],tags:[],steps:0},activeFragmentStep:0,mermaidFrontmatterConfig:s,rootThemeMode:d,effectiveHighlightBackgroundColor:null,effectiveHighlightUnderlineColor:null,headerFooterPositionMode:"slide-absolute"}),y=$t(m.meta||{},a,""),k=At({slideMeta:m.meta||{},headMeta:a,isAcademicTheme:y.themeStyle==="academic"}),x=Ct("__pdf_export__",y.backgroundRaw,y.backgroundSize,y.backgroundPosition);return $.createElement($.Fragment,{key:`slide-${u}`},[$.createElement("section",{key:`slide-canvas-${u}`,className:"w-full",style:{margin:0,padding:0,breakInside:"avoid",pageBreakInside:"avoid",width:`${S.width}px`,minWidth:`${S.width}px`,maxWidth:`${S.width}px`,height:`${S.height}px`,minHeight:`${S.height}px`,maxHeight:`${S.height}px`}},$.createElement("article",{key:`slide-article-${u}`,className:[k.baseFrameClass,y.slideClass,"w-full"].filter(Boolean).join(" "),style:{...x,width:"100%",height:"100%",minHeight:"100%",maxHeight:"100%",maxWidth:"100%",margin:0,overflow:"hidden"}},h)),u<o.length-1?$.createElement("hr",{key:`slide-break-${u}`,"data-kg-hr":"1"}):null])}))),await new Promise(m=>requestAnimationFrame(()=>m())),await new Promise(m=>requestAnimationFrame(()=>m())),await(async m=>{const u=Date.now();for(;Date.now()-u<m;){const g=e.querySelectorAll('[data-kg-mermaid-visibility-gate="pending"]');for(let h=0;h<g.length;h+=1)try{g[h].scrollIntoView({block:"center",behavior:"instant"})}catch{}const b=fe(e);if(g.length===0&&b===0)return;await new Promise(h=>setTimeout(()=>h(),80))}})(3200),await ue(e,2400),await new Promise(m=>requestAnimationFrame(()=>m()));const p=e.querySelector('[data-testid="markdown-presentation-print-deck"]');return p?p.cloneNode(!0):null}catch{return null}finally{try{n()}catch{}try{r.unmount()}catch{}try{e.remove()}catch{}}}async function pn(i){var b,h;const t=i.viewerEl||i.viewerRefCurrent;if(!t){i.pushUiToast({id:"export-pdf-missing-view",kind:"warning",message:nt.markdownWorkspaceExportPdfMissingSurfaceWarning});return}const e=t.querySelector('[data-testid="markdown-preview-root"]')||t,r=e.querySelector("article"),n=be(String(i.markdownText||"")),a=await ve(String(i.markdownText||""))||we(String(i.markdownText||"")),o=await ke(String(i.markdownText||"")),c=(b=t.matches)!=null&&b.call(t,'[data-testid="markdown-presentation-root"]')?t:(h=t.querySelector)==null?void 0:h.call(t,'[data-testid="markdown-presentation-root"]'),s=i.orientation||"portrait",d=!!c;try{c&&a&&ye(c,a)}catch{}const l=d?a||o||r||n||e:r||n||e;let p="preview-root";l===a?p="presentation-deck":l===o?p="viewer-fidelity":l===r?p="viewer-article":l===n&&(p="markdown-fallback");const m=typeof import.meta<"u"&&!1,u=d?"presentation":"split-viewer",g=he(u,s);if(m){const y=ge(l),k=dt(s,{horizontalInsetScale:g.horizontalInsetScale,verticalInsetScale:g.verticalInsetScale}),x=(z,C)=>`${z} T/R/B/L=${C.top}/${C.right}/${C.bottom}/${C.left}mm`,w=`surface=${u} · ${x("page",k.pageMarginMm)} · ${x("root",k.rootPaddingMm)} · compact=${g.compactHorizontalContent?"on":"off"} · center=${g.centerContent?"on":"off"}`;i.pushUiToast({id:me,kind:"neutral",message:nt.markdownWorkspaceExportPdfDebugTargetMessage(p,y,w),ttlMs:1800,log:!1})}await de(l,{title:i.exportBaseName,orientation:s,horizontalInsetScale:g.horizontalInsetScale,verticalInsetScale:g.verticalInsetScale,compactHorizontalContent:g.compactHorizontalContent,centerContent:g.centerContent,fidelityMode:u==="presentation"?"presentation-viewer-fidelity":"balanced"})}export{pn as exportViewerPdf};
