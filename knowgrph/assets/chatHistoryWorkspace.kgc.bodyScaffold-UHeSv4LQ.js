import{bU as u}from"./settings-mcp-docs-BezKnGKt.js";const l="source_input",a="compute_summary",d=["input_query","input_context","input_audience","input_format","input_constraints","input_evidence","input_tone","input_metric_label","input_metric_target"],y=["output","imageUrl","outputSrcDoc"],S=[`${a}.output`,`${a}.imageUrl`,`${a}.outputSrcDoc`,...d.map(n=>`${l}.${n}`)],h="template_gitgraph",f=["## Response","## Inputs"],o=n=>String(n||"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),_=n=>String(n||"").replace(/\r\n/g,`
`).split(`
`).map(e=>String(e||"").trim()).filter(e=>/^#{1,6}\s+\S/.test(e)).map(e=>e.replace(/\s+/g," ")),w=n=>{const e=_(n);return JSON.stringify(e)===JSON.stringify(f)},b=n=>{const e=String(n||"").replace(/\r\n/g,`
`).trim(),t=/^---\n([\s\S]*?)\n---(?:\n|$)([\s\S]*)$/.exec(e);return t?{frontmatter:String(t[1]||""),body:String(t[2]||"")}:null},$=n=>{const e=String(n||"").replace(/\r\n/g,`
`).split(`
`),t=e.findIndex(s=>{const i=String(s||"").trim().replace(/\s+/g," ");return/^<!--[\s\S]*-->$/.test(i)?!0:/^#{1,6}\s+\S/.test(i)&&!f.includes(i)});if(t<0)return e.join(`
`).trimEnd();let r=t;for(;r>0&&!String(e[r-1]||"").trim();)r-=1;for(;r>0&&/^<!--[\s\S]*-->$/.test(String(e[r-1]||"").trim());)for(r-=1;r>0&&!String(e[r-1]||"").trim();)r-=1;return e.slice(0,r).join(`
`).trimEnd()},P=n=>{const e=b(n);if(!e)return String(n||"").replace(/\r\n/g,`
`).trim();if(!p(e.frontmatter))return String(n||"").replace(/\r\n/g,`
`).trim();const t=$(e.body);return["---",e.frontmatter.trimEnd(),"---",t.trim()].join(`
`).trimEnd()+`
`},O=n=>{const e=String(n||"").replace(/\r\n/g,`
`);if(!/(^|\n)(?:schema|\$schema)\s*:\s*["']?kgc-computing-flow\/v1["']?/m.test(e)||!/(^|\n)flow\s*:\s*(\n|$)/m.test(e)||!/(^|\n)flow_diagrams\s*:\s*(\n|$)/m.test(e)||!/\btype\s*:\s*mermaid_gitgraph\b/.test(e)||!new RegExp(`\\b${o(h)}\\b`).test(e)||!new RegExp(`\\b${o(l)}\\b`).test(e)||!new RegExp(`\\b${o(a)}\\b`).test(e)||!/canvas:runAction/.test(e)||!/bodyTokens["']?\s*:/.test(e))return!1;for(const t of d)if(!new RegExp(`\\b${o(t)}\\b`).test(e)||!new RegExp(`sourceHandle["']?\\s*[:=][^\\n]*["']?${o(t)}["']?`).test(e)||!new RegExp(`targetHandle["']?\\s*[:=][^\\n]*["']?${o(t)}["']?`).test(e)||!new RegExp(`token["']?\\s*[:=][^\\n]*["']?${o(l)}\\.${o(t)}["']?`).test(e))return!1;for(const t of y)if(!new RegExp(`token["']?\\s*[:=][^\\n]*["']?${o(a)}\\.${o(t)}["']?`).test(e))return!1;return!0},p=(n,e="")=>{if(!O(n))return!1;const t=String(e||"").replace(/\r\n/g,`
`);return!(t&&(!/(^|\n)## Response\s*(\n|$)/.test(t)||!/(^|\n)## Inputs\s*(\n|$)/.test(t)||!t.includes(`{{${a}.output}}`)||!w(t)||/<!--[\s\S]*?-->/.test(t)||/frontmatter|dataflow|flow\.nodes|flow\.edges/i.test(t)))},x=n=>{const e=new Set;if(!p(n))return e;for(const t of S)e.add(t);return e},F=n=>{const e=String(n||"").trim(),t=e.indexOf(":"),r=e.indexOf("|"),s=[t,r].filter(i=>i>=0).sort((i,g)=>i-g)[0];return s!=null?e.slice(0,s).trim():e},G=(n,e)=>{const t=x(n);if(t.size===0)return"";for(const r of e){const s=F(r);if(s&&!t.has(s))return s}return""},I="kgc-response/v1",m=n=>/(^|\n)kgcResponseOnly:\s*true\b/.test(String(n||"")),B=n=>{const e=String(n||"");return m(e)&&/(^|\n)\$schema:\s*["']kgc-response\/v1["']/.test(e)},U=(n,e)=>{const t=String(n||"").replace(/\r\n/g,`
`);return/(^|\n)## Response\s*(\n|$)/.test(t)?!e.some(r=>t.includes(r)):!1},k=n=>{for(const e of["title","graphId","doc_type","date","ai_model","response"])if(!n.frontmatterKeys.has(e))return`Response-only KGC frontmatter is missing: ${e}.`;for(const e of n.refs){const t=n.readRefKey(e);if(t&&!n.frontmatterKeys.has(t))return`Body variable {{${t}}} is not declared in YAML frontmatter.`}return""},C=n=>{const t=String(n||"").replace(/\r\n/g,`
`).split(`
`);let r=0;for(;r<t.length&&!String(t[r]||"").trim();)r+=1;if(!/^---\s*$/.test(String(t[r]||"")))return null;for(let s=r+1;s<t.length;s+=1)if(/^---\s*$/.test(String(t[s]||"")))return{frontmatter:t.slice(r+1,s).join(`
`),body:t.slice(s+1).join(`
`).trim()};return null},E=n=>{const e=`
${String(n||"")}`;return e.includes(`
$schema:`)&&e.includes(`
runtime:`)&&e.includes(`
pipeline:`)&&e.includes(`
flow:`)},R=n=>n.includes("### Goals")&&n.includes("### Non-Goals")&&n.includes("### User Stories"),c=["### Goals","",...u({columns:["id","Goal","maps to","Priority","Status"],rows:[["`G-01`","Preserve one universal pipeline contract across request variants","`@node:n-trigger`","`#D85A30:P0`","TBD"],["`G-02`","Shape context from the current request instead of cloning fixture prose","`@node:n-pack`","`#D85A30:P0`","TBD"],["`G-03`","Generate `{{artifact}}` with request-relevant body content","`@node:n-process`","`#D85A30:P0`","TBD"],["`G-04`","Reject unresolved or malformed markdown before persistence","`@node:n-validate`","`#185FA5|bg#E6F1FB:P1`","TBD"],["`G-05`","Persist only the normalized artifact identity and body","`@node:n-deliver`","`#185FA5|bg#E6F1FB:P1`","TBD"]]}),"","### Non-Goals","","The base path does not infer missing business decisions, create alternate mappings, or inject project-specific vocabulary when the request does not provide it. Domain-specific choices should be added only when the request or later context makes them explicit.","","### User Stories","",...u({columns:["id","As a...","I want...","So that...","Acceptance criteria"],rows:[["`US-01`","`{{owner}}`","one request to map into one valid stored artifact","the chat pipeline stays predictable","output starts with frontmatter and contains required body sections"],["`US-02`","`{{owner}}`","the body to reflect the request","the stored document stays relevant to the query","problem and architecture prose mention request-specific scope without fabrication"],["`US-03`","`reviewer`","failed rule feedback to stay bounded and actionable","retry loops do not drift or freeze","retry arc stops at `{{runtime.maxRetry}}` and surfaces a correction signal"],["`US-04`","`renderer`","frontmatter and body to stay aligned","graph, markdown, and storage stay in sync","section references and node IDs remain consistent across surfaces"]]})].join(`
`),T=n=>{const e=String(n||"").replace(/\r\n/g,`
`).trim();if(!e||R(e))return e;const t=`
### Request Fit
`;if(e.includes(t))return e.replace(t,`
${c}
${t}`);const r=`
## TAD — Technical Architecture
`;return e.includes(r)?e.replace(r,`
${c}
${r}`):`${e}

${c}`},N=n=>{const e=String(n||"").replace(/\r\n/g,`
`).trim(),t=C(e);if(!t||!E(t.frontmatter)||m(t.frontmatter))return n;const r=T(t.body);return["---",t.frontmatter.trimEnd(),"---",r].join(`
`).trimEnd()+`
`};export{l as C,I as K,p as a,a as b,d as c,y as d,h as e,m as f,x as g,U as h,B as i,G as j,F as k,N as l,k as r,P as s};
