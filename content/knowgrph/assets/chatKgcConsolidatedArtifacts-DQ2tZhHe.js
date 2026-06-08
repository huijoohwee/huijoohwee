import{a8 as p,n as d}from"./index-B5QJPe3p.js";import{t as u,a as x}from"./chatHistoryWorkspace.paths-B6m--2pH.js";import{w as g,m}from"./chatWorkspaceMirror-7fi4wUQz.js";const w=t=>String(t||"").replace(/\r\n/g,`
`).trim(),l=(t,e)=>{const n=String(e||"section").replace(/[^a-zA-Z0-9_.:-]+/g,"-").replace(/^-+|-+$/g,"")||"section";return`kgc-consolidated:${t}:${n}`},k=(t,e)=>{const n=String(t||"").replace(/\r\n/g,`
`).trim(),c=n.includes("```")?"````":"```";return`${c}${String(e||"text").trim()||"text"}
${n}
${c}`},h=t=>{const e=l(t.target,t.sectionKey),n=w(t.text),c=t.fenceLanguage?k(n,t.fenceLanguage):n,a=String(t.title||"Consolidated Artifact").trim();return[`<!-- ${e}:start -->`,`## ${a}`,"",c||"No consolidated content recorded.",`<!-- ${e}:end -->`].join(`
`)},$=(t,e,n)=>{const c=String(t||"").replace(/\r\n/g,`
`).trimEnd(),a=l(n.target,n.sectionKey),o=`<!-- ${a}:start -->`,r=`<!-- ${a}:end -->`,i=c.indexOf(o);if(i>=0){const s=c.indexOf(r,i+o.length);if(s>=0)return`${c.slice(0,i).trimEnd()}

${e}

${c.slice(s+r.length).trimStart()}`.trimEnd()+`
`}return`${c}${c?`

`:""}${e}
`},f=async t=>{const e=t.fs||await p();await e.ensureSeed();const n=await e.readFileText(t.workspacePath)||"",c=h({target:t.target,sectionKey:t.sectionKey,title:t.title,text:t.text,fenceLanguage:t.fenceLanguage}),a=$(n,c,{target:t.target,sectionKey:t.sectionKey});return a!==n&&(await g({fs:e,path:t.workspacePath,text:a}),await m({workspacePath:t.workspacePath,text:a})),t.workspacePath},S=async t=>{const e=u(String(t.workspacePath||"").trim());return e?await f({fs:t.fs,workspacePath:e,target:"trace",sectionKey:t.sectionKey,title:t.title,text:t.text,fenceLanguage:t.fenceLanguage}):null},L=async t=>{const e=String(t.workspacePath||"").trim();if(!e)return null;const n=x(e);return d(n)?await f({fs:t.fs,workspacePath:n,target:"canonical",sectionKey:t.sectionKey,title:t.title,text:t.text,fenceLanguage:t.fenceLanguage}):null};export{L as a,S as m};
