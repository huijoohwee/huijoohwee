const d=new Set(["variable","key"]),f=i=>{const e=String(i||"").replace(/\r\n/g,`
`).split(`
`);let n=0;for(;n<e.length&&!String(e[n]||"").trim();)n+=1;if(String(e[n]||"").trim()!=="---")return null;for(let r=n+1;r<e.length;r+=1)if(String(e[r]||"").trim()==="---")return{frontmatter:e.slice(n+1,r).join(`
`),body:e.slice(r+1).join(`
`).trim()};return null},x=i=>{const t=new Set,e=String(i||"").split(`
`);for(const n of e){const r=/^([A-Za-z_][A-Za-z0-9_-]{0,48})\s*:\s*/.exec(n);if(!r)continue;const a=String(r[1]||"").trim();a&&t.add(a)}return t},m=(i,t)=>{const e=new Set,r=String(i||"").replace(/\r\n/g,`
`).split(`
`),a=`${String(t||"").trim()}:`;let o=-1;for(let s=0;s<r.length;s+=1)if(String(r[s]||"").startsWith(a)){o=s;break}if(o<0)return e;for(let s=o+1;s<r.length;s+=1){const c=String(r[s]||"");if(!c.trim())continue;if(!/^\s+/.test(c))break;const l=/^\s{2}([A-Za-z_][A-Za-z0-9_-]{0,48})\s*:\s*/.exec(c);if(!l)continue;const g=String(l[1]||"").trim();g&&e.add(g)}return e},w=i=>{const t=String(i.varKey||"").replace(/\\([|:])/g,"$1").replace(/\\+$/g,"").trim();if(!t)return!1;if(d.has(t)||i.topLevelKeys.has(t))return!0;const e=t.indexOf(".");if(e<0)return!1;const n=t.slice(0,e).trim(),r=t.slice(e+1).trim();if(!n||!r)return!1;const a=Array.isArray(i.dottedParents)&&i.dottedParents.length?new Set(i.dottedParents):null;return a&&!a.has(n)||!i.topLevelKeys.has(n)?!1:r==="*"?!0:m(i.frontmatter,n).has(r)},p=i=>{var e;const t=/^\s*/.exec(String(i||""));return((e=t==null?void 0:t[0])==null?void 0:e.length)??0},S=i=>{const t=String(i||"").replace(/\r\n/g,`
`).split(`
`),e=[];for(let n=0;n<t.length;n+=1){const r=String(t[n]||"");if(!/^(\s*)(kg:subgraphs|clusters|cluster|groups|group|layers|layer)\s*:\s*(.*)$/.exec(r)){e.push(r);continue}const o=p(r);let s=n;for(let c=n+1;c<t.length;c+=1){const l=String(t[c]||"");if(!l.trim()){s=c;continue}if(p(l)<=o)break;s=c}n=s}return e.join(`
`).replace(/\n{3,}/g,`

`).trim()},u=i=>{const t=String(i||"").replace(/\r\n/g,`
`).trim();if(!t.startsWith(`---
`))return t;const e=f(t);return e?["---",S(e.frontmatter).trimEnd(),"---",e.body.trim()].join(`
`).trimEnd():t},h=i=>{const t=String(i||"").replace(/\r\n/g,`
`).trim();if(!t)return{kgc:null,wrapperStart:-1,wrapperEnd:-1};if(t.startsWith(`---
`))return{kgc:u(t),wrapperStart:0,wrapperEnd:t.length};const e=/(^|\n)\s*```+kgc\s*\n([\s\S]*?)\n\s*```+/gi,n=[];let r;for(;r=e.exec(t);){const s=String(r[0]||""),c=typeof r[2]=="string"?String(r[2]||"").trim():"";if(!(!s||!c||typeof r.index!="number")&&(n.push({full:s,body:c,start:r.index,end:r.index+s.length}),n.length>2))break}if(n.length===1){const s=n[0];return{kgc:u(s.body),wrapperStart:s.start,wrapperEnd:s.end}}const a=/(^|\n)([ \t]*```+[^\n]*\n)(---\n)/.exec(t);if(a&&typeof a.index=="number"){const s=a.index+a[1].length,c=s+a[2].length,l=t.lastIndexOf("\n```");if(c>=0&&l>c)return{kgc:u(t.slice(c,l).trim()),wrapperStart:s,wrapperEnd:Math.min(t.length,l+1)}}const o=t.indexOf(`
---
`);return o>=0?{kgc:u(t.slice(o+1).trim()),wrapperStart:o+1,wrapperEnd:t.length}:{kgc:null,wrapperStart:-1,wrapperEnd:-1}},y=i=>{const t=String(i||"").replace(/\r\n/g,`
`).trim();if(!t)return{answer:"",kgc:null};const e=h(t),n=typeof e.kgc=="string"?e.kgc.trim():"";return n?e.wrapperStart<=0&&e.wrapperEnd>=t.length?{answer:"",kgc:n}:{answer:[t.slice(0,Math.max(0,e.wrapperStart)).trim(),t.slice(Math.max(0,e.wrapperEnd)).replace(/^\s*```+[^\n]*\s*/g,"").trim()].filter(Boolean).join(`

`).trim(),kgc:n}:{answer:t,kgc:null}};export{m as a,x as e,w as i,y as r,f as s};
