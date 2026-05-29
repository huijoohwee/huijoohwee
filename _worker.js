var bn=Object.defineProperty;var r=(e,t)=>bn(e,"name",{value:t,configurable:!0});var An="https://api.openai.com/v1";var He=Object.freeze(["gpt-5.4-nano","gpt-4o-mini"]);function je(e){return String(e||"").trim()}r(je,"normalizeOrigin");function En(e){let t=je(e);return t?t.startsWith("http://localhost:")||t.startsWith("http://127.0.0.1:")||t.startsWith("http://0.0.0.0:"):!1}r(En,"isAllowedOrigin");function at(e){let t=je(e);return En(t)?{"access-control-allow-origin":t,vary:"Origin","access-control-allow-methods":"GET, POST, OPTIONS","access-control-allow-headers":"content-type, x-flowinfish-session","access-control-max-age":"86400"}:{}}r(at,"corsHeaders");function K(e,{status:t=200,origin:n=""}={}){return new Response(JSON.stringify(e),{status:t,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...at(n)}})}r(K,"json");async function ke(e,{maxBytes:t=1e6}={}){let n=await e.arrayBuffer();if(n.byteLength>t)throw new Error("Request too large");let o=new TextDecoder().decode(n);try{return o?JSON.parse(o):{}}catch{throw new Error("Invalid JSON body")}}r(ke,"readJsonBody");function Tn(e){let t=String(e?.model||"").trim();if(!t)throw new Error("Missing model");if(!He.includes(t))throw new Error(`Model not allowed: ${t}`);return t}r(Tn,"enforceAllowedModel");function In(e){let t=String(e.OPENAI_API_KEY||"").trim();if(!t)throw new Error("Missing server OPENAI_API_KEY");return t}r(In,"requireOpenAiKey");async function Pe({request:e,env:t,pathname:n,payload:o}){let a=In(t);Tn(o);let i=`${je(t.OPENAI_API_BASE)||An}${n}`,c=await fetch(i,{method:"POST",headers:{authorization:`Bearer ${a}`,"content-type":"application/json"},body:JSON.stringify(o)}),l=new Headers(c.headers);return l.delete("content-length"),l.set("cache-control","no-store"),new Response(c.body,{status:c.status,headers:l})}r(Pe,"proxyToOpenAi");function ae(e){let t=e.headers.get("origin")||"";return new Response(null,{status:204,headers:{...at(t)}})}r(ae,"handleOptions");async function st(e){let{request:t,env:n}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return ae(t);if(o!=="POST")return K({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return K({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await ke(t);return await Pe({request:t,env:n,pathname:"/chat/completions",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return K({ok:!1,error:i},{status:400,origin:a})}}r(st,"onRequest");async function it(e){let{request:t}=e,n=String(t.method||"GET").toUpperCase(),o=t.headers.get("origin")||"";return n==="OPTIONS"?ae(t):n!=="GET"&&n!=="HEAD"?K({ok:!1,error:"Method not allowed"},{status:405,origin:o}):K({ok:!0,models:He.map(a=>({model:a,display_name:a}))},{status:200,origin:o})}r(it,"onRequest");async function ct(e){let{request:t,env:n}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return ae(t);if(o!=="POST")return K({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return K({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await ke(t);return await Pe({request:t,env:n,pathname:"/responses",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return K({ok:!1,error:i},{status:400,origin:a})}}r(ct,"onRequest");var d=Object.freeze({listSourceFiles:"list_source_files",readSourceFile:"read_source_file",readSharedDocument:"read_shared_document",inspectSharedDocumentStructure:"inspect_shared_document_structure",inspectLocalSettingsChatReadiness:"inspect_local_settings_chat_readiness",inspectLocalMainPanelState:"inspect_local_mainpanel_state",inspectLocalEditorWorkspaceState:"inspect_local_editor_workspace_state",inspectLocalChatPipelineState:"inspect_local_chat_pipeline_state",inspectLocalMainPanelChatCanvasPipeline:"inspect_local_mainpanel_chat_canvas_pipeline",inspectLocalWorkspaceDocument:"inspect_local_workspace_document",inspectLocalCanvasTopology:"inspect_local_canvas_topology",inspectLocalCanvasSnapshot:"inspect_local_canvas_snapshot",inspectLocal3dCameraPose:"inspect_local_3d_camera_pose",inspectLocal3dLayoutPositions:"inspect_local_3d_layout_positions",inspectLocal2dZoomViewport:"inspect_local_2d_zoom_viewport",inspectLocalSourceFilesSnapshot:"inspect_local_source_files_snapshot",inspectAgentSurface:"inspect_agent_surface"}),vn="knowgrph",O=Object.freeze({readOnlyHint:!0}),D=r((e,t=vn)=>`${String(t||"").trim()}.${String(e||"").trim()}`,"buildKnowgrphWebMcpToolName"),lt=r((e={})=>{let t=String(e.defaultWorkspaceId||"").trim(),n=e.includeBrowserOnlyTools===!0;return[{name:d.listSourceFiles,webName:D(d.listSourceFiles),title:"List Source Files",description:"List published Knowgrph Source Files.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:O},{name:d.readSourceFile,webName:D(d.readSourceFile),title:"Read Source File",description:"Read published Knowgrph Editor Workspace markdown content. Defaults to the canonical docs workspace when workspaceId is omitted.",inputSchema:{type:"object",additionalProperties:!1,required:["canonicalPath"],properties:{canonicalPath:{type:"string"},workspaceId:t?{type:"string",default:t}:{type:"string"}}},annotations:O},{name:d.readSharedDocument,webName:D(d.readSharedDocument),title:"Read Shared Document",description:"Read published Knowgrph markdown content from a share token or public Knowgrph share/document URL.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:O},{name:d.inspectSharedDocumentStructure,webName:D(d.inspectSharedDocumentStructure),title:"Inspect Shared Document Structure",description:"Inspect published Knowgrph shared-document frontmatter and body structure from a share token or public Knowgrph share/document URL.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:O},...n?[{name:d.inspectLocalSettingsChatReadiness,webName:D(d.inspectLocalSettingsChatReadiness),title:"Inspect Local Settings Chat Readiness",description:"Inspect the active browser-local Knowgrph SettingsView chat readiness state for MainPanel MCP and Integrations, including provider, routing, and model discovery status.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:O},{name:d.inspectLocalMainPanelState,webName:D(d.inspectLocalMainPanelState),title:"Inspect Local MainPanel State",description:"Inspect the active browser-local Knowgrph MainPanel tab, search, and shared action state for MCP and Integrations readiness.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:O},{name:d.inspectLocalEditorWorkspaceState,webName:D(d.inspectLocalEditorWorkspaceState),title:"Inspect Local Editor Workspace State",description:"Inspect the active browser-local Knowgrph Editor Workspace and Markdown pane state, including pane visibility and live draft/frontmatter structure.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:O},{name:d.inspectLocalChatPipelineState,webName:D(d.inspectLocalChatPipelineState),title:"Inspect Local Chat Pipeline State",description:"Inspect the active browser-local Knowgrph FloatingPanel chat runtime, including streaming, workspace follow path, and LLM-to-workspace pipeline state.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:O},{name:d.inspectLocalMainPanelChatCanvasPipeline,webName:D(d.inspectLocalMainPanelChatCanvasPipeline),title:"Inspect Local MainPanel Chat Canvas Pipeline",description:"Inspect the active browser-local Knowgrph E2E readiness path from MainPanel MCP and Integrations through FloatingPanel Chat, workspace markdown/frontmatter, and canvas topology.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:O},{name:d.inspectLocalWorkspaceDocument,webName:D(d.inspectLocalWorkspaceDocument),title:"Inspect Local Workspace Document",description:"Inspect the active browser-local Knowgrph workspace markdown document structure without reading published storage routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:O},{name:d.inspectLocalCanvasTopology,webName:D(d.inspectLocalCanvasTopology),title:"Inspect Local Canvas Topology",description:"Inspect the active browser-local Knowgrph canvas topology summary from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:O},{name:d.inspectLocalCanvasSnapshot,webName:D(d.inspectLocalCanvasSnapshot),title:"Inspect Local Canvas Snapshot",description:"Inspect the active browser-local Knowgrph canvas SVG snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:O},{name:d.inspectLocal3dCameraPose,webName:D(d.inspectLocal3dCameraPose),title:"Inspect Local 3D Camera Pose",description:"Inspect the active browser-local Knowgrph 3D camera pose from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:O},{name:d.inspectLocal3dLayoutPositions,webName:D(d.inspectLocal3dLayoutPositions),title:"Inspect Local 3D Layout Positions",description:"Inspect the active browser-local Knowgrph 3D layout positions from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:O},{name:d.inspectLocal2dZoomViewport,webName:D(d.inspectLocal2dZoomViewport),title:"Inspect Local 2D Zoom Viewport",description:"Inspect the active browser-local Knowgrph 2D zoom and viewport state from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:O},{name:d.inspectLocalSourceFilesSnapshot,webName:D(d.inspectLocalSourceFilesSnapshot),title:"Inspect Local Source Files Snapshot",description:"Inspect the active browser-local Knowgrph Source Files runtime snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:O}]:[],{name:d.inspectAgentSurface,webName:D(d.inspectAgentSurface),title:"Inspect Agent Surface",description:"Inspect the deployed Knowgrph agent-ready discovery surface, including health, OpenAPI, MCP, and skill metadata.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:O}]},"buildKnowgrphAgentReadyToolContracts");var pt=r((e={})=>{let t=String(e.baseUrl||"").replace(/\/+$/,"");return{baseUrl:t,healthUrl:`${t}/health`,mcpUrl:`${t}/mcp`,apiCatalogUrl:`${t}/.well-known/api-catalog`,openApiUrl:`${t}/.well-known/openapi.json`,mcpServerCardUrl:`${t}/.well-known/mcp/server-card.json`,agentCardUrl:`${t}/.well-known/agent-card.json`,agentSkillsUrl:`${t}/.well-known/agent-skills/index.json`,health:e.health,apiCatalog:e.apiCatalog,openApi:e.openApi,mcpServerCard:e.mcpServerCard,agentCard:e.agentCard,agentSkills:e.agentSkills}},"buildAgentSurfaceInspectionPayload");var dt=r((e={})=>{let t=e.toolNames||{},n=String(e.defaultWorkspaceId||"").trim(),o=e.buildStorageDocPath,a=e.fetchSourceFilesIndexResponse,s=e.fetchStorageMarkdownResponse,i=e.resolveSharedDocumentInput,c=e.inspectSharedDocumentStructure,l=e.buildAgentSurfaceInspection,p=r(g=>String(g||"").trim(),"normalizeString");if(typeof o!="function")throw new Error("buildStorageDocPath is required");if(typeof a!="function")throw new Error("fetchSourceFilesIndexResponse is required");if(typeof s!="function")throw new Error("fetchStorageMarkdownResponse is required");if(typeof i!="function")throw new Error("resolveSharedDocumentInput is required");if(typeof c!="function")throw new Error("inspectSharedDocumentStructure is required");if(typeof l!="function")throw new Error("buildAgentSurfaceInspection is required");let f=r(async(g={})=>{let P=p(g.canonicalPath);if(!P)throw new Error("canonicalPath is required");let T=p(g.workspaceId),x=await s(o(P,T));if(!x.ok)throw new Error(`read_source_file failed with ${x.status}`);return{workspaceId:T||n,canonicalPath:P,markdown:await x.text()}},"readSourceFile"),u=r(async(g={})=>{let P=i(g);if(!P)throw new Error("shareToken or shareUrl must resolve to a published Knowgrph document");let T=p(P.workspaceId),x=p(P.canonicalPath),I=await s(o(x,T));if(!I.ok)throw new Error(`read_shared_document failed with ${I.status}`);return{workspaceId:T||n,canonicalPath:x,markdown:await I.text()}},"readSharedDocument"),k=r(async(g={})=>{let P=await u(g);return c(P)},"inspectSharedDocument");return{[t.listSourceFiles]:async()=>{let g=await a();if(!g.ok)throw new Error(`list_source_files failed with ${g.status}`);return{workspaceId:n,markdownIndex:await g.text()}},[t.readSourceFile]:f,[t.readSharedDocument]:u,[t.inspectSharedDocumentStructure]:k,[t.inspectAgentSurface]:async()=>l()}},"createPublishedAgentReadyToolExecutors");var ut=r((e={})=>{let t=r(w=>String(w||"").trim(),"normalizeString"),n=r(w=>String(w||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),o=r(w=>{let y=String(w||"").match(/^\s*/);return y?y[0].length:0},"readIndent"),a=r(w=>/^[A-Za-z0-9_:@-]+\s*:/.test(t(w)),"isYamlKeyLine"),s=r(w=>n(w).split(`
`),"splitLines"),i=r(w=>{let y=s(w),h=0;for(;h<y.length&&!t(y[h]);)h+=1;if(t(y[h])!=="---")return null;for(let m=h+1;m<y.length;m+=1)if(t(y[m])==="---")return{frontmatter:y.slice(h+1,m).join(`
`),body:y.slice(m+1).join(`
`)};return null},"extractLeadingFrontmatter"),c=r(w=>{let y=[];for(let h of s(w)){if(!t(h)||o(h)!==0)continue;let m=h.match(/^([A-Za-z0-9_:@-]+)\s*:/);m?.[1]&&y.push(m[1])}return Array.from(new Set(y)).sort((h,m)=>h.localeCompare(m))},"extractTopLevelFrontmatterKeys"),l=r((w,y)=>{let h=s(w),m=`${y}:`;for(let b=0;b<h.length;b+=1){let G=h[b],V=t(G);if(!V.startsWith(m))continue;let te=o(G),ne=V.slice(m.length).trim();if(ne)return{indent:te,inlineValue:ne,blockLines:[],blockText:""};let oe=[];for(let pe=b+1;pe<h.length;pe+=1){let re=h[pe],N=t(re),$=o(re);if(N&&$<=te&&a(re))break;oe.push(re)}return{indent:te,inlineValue:"",blockLines:oe,blockText:oe.join(`
`)}}return null},"extractYamlBlock"),p=r(w=>{let y=[];for(let h of s(w)){let m=t(h);if(!m||m.startsWith("- "))continue;let b=m.match(/^([A-Za-z0-9_:@-]+)\s*:/);b?.[1]&&y.push(b[1])}return Array.from(new Set(y)).sort((h,m)=>h.localeCompare(m))},"extractNestedYamlKeys"),f=r(w=>{let y=t(w);if(!y.startsWith("[")||!y.endsWith("]"))return null;let h=y.slice(1,-1).trim();return h?h.split(",").map(m=>t(m)).filter(Boolean).length:0},"countInlineSequenceEntries"),u=r((w,y)=>{let h=l(w,y);if(!h)return null;if(h.inlineValue)return f(h.inlineValue);let m=0;for(let b of h.blockLines)t(b)&&(o(b)<=h.indent||/^\s*-\s+/.test(b)&&(m+=1));return m},"countYamlSequenceEntries"),k=r(w=>{let y=[];for(let h of s(w)){let m=h.match(/^(#{1,6})\s+(.+?)\s*$/);m?.[2]&&y.push({depth:m[1].length,text:t(m[2])})}return y},"extractMarkdownHeadings"),g=t(e.workspaceId),P=t(e.canonicalPath),T=n(e.markdown),x=i(T),I=x?c(x.frontmatter):[],v=x?l(x.frontmatter,"flow"):null,C=v?p(v.blockText):[],A=new Set(["kg:subgraphs","clusters","groups","layers"]),j=Array.from(new Set([...I,...C].filter(w=>A.has(w)))).sort((w,y)=>w.localeCompare(y)),M=k(x?x.body:T);return{workspaceId:g,canonicalPath:P,markdownLength:T.length,lineCount:T?s(T).length:0,hasFrontmatter:!!x,topLevelKeys:I,hasFlowBlock:!!v,flowKeys:C,flowNodeCount:v?u(v.blockText,"nodes"):null,flowConnectionCount:v?u(v.blockText,"connections")??u(v.blockText,"edges"):null,flowSubgraphCount:v?u(v.blockText,"subgraphs"):null,forbiddenGroupingAliases:j,headingCount:M.length,headings:M.map(w=>w.text),bodyLength:t(x?x.body:T).length}},"inspectSharedDocumentStructure");var Cn={[d.listSourceFiles]:{id:"list-source-files",tags:["mcp","discovery","source-files","read-only"],examples:["List the published Knowgrph Source Files."],outputModes:["text/markdown","application/json"]},[d.readSourceFile]:{id:"read-source-file",tags:["mcp","read","markdown","workspace"],examples:["Read the published source file for docs/getting-started.md."],outputModes:["text/markdown","application/json"]},[d.readSharedDocument]:{id:"read-shared-document",tags:["mcp","read","shared-document","markdown"],examples:["Read the Knowgrph shared document behind this share URL."],outputModes:["text/markdown","application/json"]},[d.inspectSharedDocumentStructure]:{id:"inspect-shared-document-structure",tags:["mcp","inspect","shared-document","structure"],examples:["Inspect the structure of this Knowgrph shared document."],outputModes:["application/json","text/markdown"]},[d.inspectAgentSurface]:{id:"inspect-agent-surface",tags:["mcp","agent-ready","discovery","metadata"],examples:["Show the Knowgrph agent discovery metadata."],outputModes:["application/json","text/markdown"]}},se=[{name:"knowgrph-source-files",type:"markdown",description:"Discover and inspect published Knowgrph Source Files and shared documents.",path:"/.well-known/agent-skills/knowgrph-source-files.md"},{name:"knowgrph-webmcp-readiness",type:"markdown",description:"Inspect Knowgrph WebMCP lifecycle, shared deployed MCP tools, and agent-ready metadata.",path:"/.well-known/agent-skills/knowgrph-webmcp-readiness.md"}],ht=r(e=>e.map(t=>{let n=Cn[t.name]||{id:String(t.name||"").replace(/_/g,"-"),tags:["mcp","read-only"],examples:[`Call ${t.name} on Knowgrph.`],outputModes:["application/json"]};return{id:n.id,name:t.title,description:t.description,tags:n.tags,examples:n.examples,inputModes:["application/json","text/plain"],outputModes:n.outputModes}}),"buildAgentReadyA2aSkills"),mt=r(async({appUrl:e,updatedAt:t,sha256ByName:n})=>({$schema:"https://agent-skills.dev/schemas/skills-index.v0.2.json",updated_at:t,skills:await Promise.all(se.map(async o=>({name:o.name,type:o.type,description:o.description,url:`${String(e||"").replace(/\/+$/,"")}${o.path}`,sha256:await n[o.name]})))}),"buildAgentReadyAgentSkillsIndex"),gt=r(({appBasePath:e,appA2aAgentCardPath:t,healthPath:n})=>({[n]:{get:{summary:"Read the Knowgrph agent-ready health status",responses:{200:{description:"Health status in application/health+json format"}}}},[`${e}/mcp`]:{get:{summary:"Read MCP transport metadata",responses:{200:{description:"MCP transport metadata"}}},post:{summary:"Send a JSON-RPC MCP request",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0}}}},responses:{200:{description:"JSON-RPC result payload"}}}},[t]:{get:{summary:"Read the Knowgrph A2A Agent Card",responses:{200:{description:"A2A Agent Card JSON"}}}},"/api/storage/llms.txt":{get:{summary:"Read the Source Files LLM index",responses:{200:{description:"Plain-text LLM index"}}}},"/api/storage/source-files":{get:{summary:"List published Source Files",responses:{200:{description:"Source Files index"}}}},"/api/storage/source-files/{workspaceId}":{get:{summary:"List published Source Files for a workspace",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped Source Files index"}}}},"/api/storage/source-files/{workspaceId}/llms.txt":{get:{summary:"Read the workspace-scoped Source Files LLM index",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped plain-text LLM index"}}}},"/api/storage/doc-default/{canonicalPath}":{get:{summary:"Read a default-workspace Source File markdown document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document from the default Editor Workspace"},404:{description:"Document not found"}}}},"/api/storage/doc/{workspaceId}/{canonicalPath}":{get:{summary:"Read a Source File markdown document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document"},404:{description:"Document not found"}}}},[`${e}/doc-default/{canonicalPath}`]:{get:{summary:"Read a default-workspace shared document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/doc/{workspaceId}/{canonicalPath}`]:{get:{summary:"Read a shared document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/share/{shareToken}`]:{get:{summary:"Read a shared document through the canonical opaque share token route",parameters:[{name:"shareToken",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or published markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}${se[0].path}`]:{get:{summary:"Read the Knowgrph published Source Files skill markdown",responses:{200:{description:"Agent skill markdown for published Source Files and shared documents"}}}},[`${e}${se[1].path}`]:{get:{summary:"Read the Knowgrph WebMCP readiness skill markdown",responses:{200:{description:"Agent skill markdown for WebMCP lifecycle and discovery readiness"}}}}}),"buildAgentReadyOpenApiPaths");var On="kgShare",Fr=typeof TextEncoder<"u"?new TextEncoder:null,ft=typeof TextDecoder<"u"?new TextDecoder:null;var Dn=r(e=>{if(typeof Buffer<"u")return Uint8Array.from(Buffer.from(e,"base64"));let t=atob(e),n=new Uint8Array(t.length);for(let o=0;o<t.length;o+=1)n[o]=t.charCodeAt(o);return n},"fromBase64");var Ln=r(e=>{let t=String(e||"").replace(/-/g,"+").replace(/_/g,"/");if(!t)return"";let n=t.length%4;return n?`${t}${"=".repeat(4-n)}`:t},"fromBase64Url");var Nn=r(e=>{if(!ft)throw new Error("TextDecoder is required to decode published doc share tokens");return ft.decode(Dn(Ln(e)))},"decodeUtf8Base64Url"),_t=r(e=>String(e||"").trim()||null,"normalizeWorkspaceId"),We=r(e=>String(e||"").trim(),"normalizeCanonicalPath"),Ke="/knowgrph",wt="/doc-default/",yt="/doc/",St="/share/",Mn="kgWorkspaceId",Un="kgCanonicalPath",$n=r(e=>{let t=String(e||"").trim();return t?`/${t.replace(/^\/+|\/+$/g,"")}`:Ke},"normalizeAppBasePath"),Be=r(e=>{let t=We(e?.canonicalPath);return t?{canonicalPath:t,workspaceId:_t(e?.workspaceId)}:null},"normalizePublishedDocIdentity"),kt=r((e,t)=>{let n=$n(t),o=String(e||"").replace(/\/+$/,"")||"/";if(!o.startsWith(n))return null;let a=o.slice(n.length)||"/";if(a.startsWith(St)){let c=decodeURIComponent(a.slice(St.length)).trim();return Ge(c)}if(a.startsWith(wt))return Be({canonicalPath:decodeURIComponent(a.slice(wt.length))});if(!a.startsWith(yt))return null;let s=a.slice(yt.length),i=s.indexOf("/");return i<1?null:Be({workspaceId:decodeURIComponent(s.slice(0,i)),canonicalPath:decodeURIComponent(s.slice(i+1))})},"parsePublishedDocPathname"),Hn=r(e=>{let t=Ge(e?.get(On));if(t)return t;let n=We(decodeURIComponent(String(e?.get(Un)||"")));if(n)return Be({workspaceId:decodeURIComponent(String(e?.get(Mn)||"")),canonicalPath:n});let o=String(e?.get("kgPath")||"").trim();return o?kt(`${Ke}${o}`,Ke):null},"parsePublishedDocSearchParams");var Ge=r(e=>{let t=String(e||"").trim();if(!t)return null;try{let n=JSON.parse(Nn(t)),o=We(n?.canonicalPath);return o?{canonicalPath:o,workspaceId:_t(n?.workspaceId)}:null}catch{return null}},"decodePublishedDocShareToken"),xe=r((e={})=>{let t=Ge(e.shareToken);if(t)return t;let n=String(e.shareUrl||"").trim();if(!n)return null;try{let o=String(e.baseUrl||"https://airvio.co").trim()||"https://airvio.co",a=new URL(n,o);return Hn(a.searchParams)||kt(a.pathname,e.appBasePath)}catch{return null}},"resolvePublishedDocIdentity"),Pt=String.raw`(args = {}) => {
  const publishedDocShareTokenParam = String(args.publishedDocShareTokenParam || "kgShare");
  const workspaceIdParam = String(args.workspaceIdParam || "kgWorkspaceId");
  const canonicalPathParam = String(args.canonicalPathParam || "kgCanonicalPath");
  const kgPathParam = String(args.kgPathParam || "kgPath");
  const defaultAppBasePath = String(args.defaultAppBasePath || "/knowgrph").trim() || "/knowgrph";

  const normalizeWorkspaceId = (value) => {
    const workspaceId = String(value || "").trim();
    return workspaceId || null;
  };
  const normalizeCanonicalPath = (value) => String(value || "").trim();
  const normalizeAppBasePath = (value) => {
    const normalized = String(value || "").trim();
    if (!normalized) return defaultAppBasePath;
    return "/" + normalized.replace(/^\/+|\/+$/g, "");
  };
  const normalizePublishedDocIdentity = (identityArgs) => {
    const canonicalPath = normalizeCanonicalPath(identityArgs && identityArgs.canonicalPath);
    if (!canonicalPath) return null;
    return {
      canonicalPath,
      workspaceId: normalizeWorkspaceId(identityArgs && identityArgs.workspaceId),
    };
  };
  const decodePublishedDocShareTokenLocal = (token) => {
    const normalizedToken = String(token || "").trim();
    if (!normalizedToken) return null;
    try {
      const normalizedBase64 = normalizedToken.replace(/-/g, "+").replace(/_/g, "/");
      const paddedBase64 = normalizedBase64.length % 4
        ? normalizedBase64 + "=".repeat(4 - (normalizedBase64.length % 4))
        : normalizedBase64;
      let bytes;
      if (typeof Buffer !== "undefined") {
        bytes = Uint8Array.from(Buffer.from(paddedBase64, "base64"));
      } else {
        const binary = atob(paddedBase64);
        bytes = new Uint8Array(binary.length);
        for (let index = 0; index < binary.length; index += 1) {
          bytes[index] = binary.charCodeAt(index);
        }
      }
      const decoder = typeof TextDecoder !== "undefined" ? new TextDecoder() : null;
      if (!decoder) return null;
      const payload = JSON.parse(decoder.decode(bytes));
      const canonicalPath = normalizeCanonicalPath(payload && payload.canonicalPath);
      if (!canonicalPath) return null;
      return {
        canonicalPath,
        workspaceId: normalizeWorkspaceId(payload && payload.workspaceId),
      };
    } catch {
      return null;
    }
  };
  const parsePublishedDocPathname = (pathname, appBasePath) => {
    const normalizedBasePath = normalizeAppBasePath(appBasePath);
    const normalizedPathname = String(pathname || "").replace(/\/+$/, "") || "/";
    if (!normalizedPathname.startsWith(normalizedBasePath)) return null;
    const scopedPath = normalizedPathname.slice(normalizedBasePath.length) || "/";
    if (scopedPath.startsWith("/share/")) {
      return decodePublishedDocShareTokenLocal(decodeURIComponent(scopedPath.slice("/share/".length)));
    }
    if (scopedPath.startsWith("/doc-default/")) {
      return normalizePublishedDocIdentity({
        canonicalPath: decodeURIComponent(scopedPath.slice("/doc-default/".length)),
      });
    }
    if (!scopedPath.startsWith("/doc/")) return null;
    const suffix = scopedPath.slice("/doc/".length);
    const firstSlash = suffix.indexOf("/");
    if (firstSlash < 1) return null;
    return normalizePublishedDocIdentity({
      workspaceId: decodeURIComponent(suffix.slice(0, firstSlash)),
      canonicalPath: decodeURIComponent(suffix.slice(firstSlash + 1)),
    });
  };
  const parsePublishedDocSearchParams = (searchParams) => {
    const shareToken = decodePublishedDocShareTokenLocal(searchParams && searchParams.get(publishedDocShareTokenParam));
    if (shareToken) return shareToken;
    const canonicalPath = normalizeCanonicalPath(
      decodeURIComponent(String((searchParams && searchParams.get(canonicalPathParam)) || "")),
    );
    if (canonicalPath) {
      return normalizePublishedDocIdentity({
        workspaceId: decodeURIComponent(String((searchParams && searchParams.get(workspaceIdParam)) || "")),
        canonicalPath,
      });
    }
    const rawPath = String((searchParams && searchParams.get(kgPathParam)) || "").trim();
    if (!rawPath) return null;
    return parsePublishedDocPathname(defaultAppBasePath + rawPath, defaultAppBasePath);
  };

  return (resolverArgs = {}) => {
    const directShareToken = decodePublishedDocShareTokenLocal(resolverArgs.shareToken);
    if (directShareToken) return directShareToken;
    const shareUrl = String(resolverArgs.shareUrl || "").trim();
    if (!shareUrl) return null;
    try {
      const normalizedBaseUrl = String(resolverArgs.baseUrl || "https://airvio.co").trim() || "https://airvio.co";
      const url = new URL(shareUrl, normalizedBaseUrl);
      return parsePublishedDocSearchParams(url.searchParams) || parsePublishedDocPathname(url.pathname, resolverArgs.appBasePath);
    } catch {
      return null;
    }
  };
}`;var Re={push:"/api/storage/push",pull:"/api/storage/pull",exportPrefix:"/api/storage/export/",docPrefix:"/api/storage/doc/",defaultDocPrefix:"/api/storage/doc-default/",sourceFilesIndex:"/api/storage/source-files",sourceFilesIndexPrefix:"/api/storage/source-files/",sourceFilesLlms:"/api/storage/llms.txt"};var xt=r((e,t)=>`${Re.docPrefix}${encodeURIComponent(String(e||"").trim())}/${encodeURIComponent(String(t||"").trim())}`,"buildKnowgrphStorageDocPath"),Rt=r(e=>`${Re.defaultDocPrefix}${encodeURIComponent(String(e||"").trim())}`,"buildKnowgrphStorageDefaultDocPath"),bt=r(e=>{let t=String(e||"").trim();return t?`${Re.sourceFilesIndexPrefix}${encodeURIComponent(t)}`:Re.sourceFilesIndex},"buildKnowgrphStorageSourceFilesIndexPath");var E="https://airvio.co",de="https://knowgrph-storage.huijoohwee.workers.dev",S="/knowgrph",_=`${E}${S}/`,At=`${E}/`,ue="kgws:canonical-docs",ce="2026-05-23",le=`${S}/health`,ie=`${E}${le}`,Fe="/.well-known/agent-card.json",ze=`${S}/.well-known/agent-card.json`,be=`${E}${Fe}`,qe=`${E}/api/storage/source-files`,jn=`${E}/api/storage/doc-default/{canonicalPath}`,Kn=`${E}/api/storage/doc/{workspaceId}/{canonicalPath}`,Et="knowgrph-agent-ready-pages";var Tt=`# Knowgrph

Knowgrph is an agent-readable knowledge graph workspace served at ${_}.

## Discovery

- Crawl policy: ${_}robots.txt
- Sitemap: ${_}sitemap.xml
- API catalog: ${_}.well-known/api-catalog
- Auth.md registration instructions: ${At}auth.md
- Health: ${ie}
- MCP server card: ${_}.well-known/mcp/server-card.json
- A2A Agent Card: ${be}
- Agent skills: ${_}.well-known/agent-skills/index.json
- LLM reference: ${_}llms.txt

## APIs

- Agent-ready status: ${ie}
- HTTP MCP: ${_}mcp
- Storage API: ${E}/api/storage/
- Source Files index: ${qe}
- Default Source File documents: ${jn}
- Workspace Source File documents: ${Kn}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes five read-only tools for published Source Files, shared documents, and agent-surface inspection.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared five-tool WebMCP surface on \`${_}\` HTML routes.
`,It=r(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),he=r(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(n=>n.trim().startsWith("text/markdown")),"wantsMarkdown"),vt=r((e,t)=>{let n=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&n.headers.set("x-knowgrph-route-owner",o),a&&n.headers.set("x-knowgrph-route-tag",a),n},"withAgentReadyRouteHeaders");var Ee=lt({defaultWorkspaceId:ue}),Dt=r((e,t="")=>{let n=String(e||"").trim(),o=String(t||"").trim();return o?xt(o,n):Rt(n)},"buildStorageDocPath"),Lt=r(e=>String(e||"").trim(),"normalizeToolString"),Bn=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${S}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${S}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${le}>; rel="status"; type="application/health+json"`,`<${S}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${Fe}>; rel="describedby"; type="application/json"`].join(", "),U=r((e,t="application/json; charset=utf-8")=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"jsonResponse"),Nt=r((e,t)=>new Response(JSON.stringify(t,null,2),{status:e,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"jsonStatusResponse"),me=r((e,t)=>new Response(e,{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"textResponse"),Wn=r(e=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":"application/health+json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"healthResponse"),Gn=r(e=>`User-agent: *
Allow: /knowgrph/
Disallow: /api/payments/

User-agent: GPTBot
Allow: /knowgrph/
Disallow: /api/payments/

User-agent: Claude-Web
Allow: /knowgrph/
Disallow: /api/payments/

User-agent: Google-Extended
Allow: /knowgrph/
Disallow: /api/payments/

User-agent: OAI-SearchBot
Allow: /knowgrph/
Disallow: /api/payments/

Content-Signal: ai-train=no, search=yes, ai-input=yes
Sitemap: ${e}
`,"buildRobotsTxt"),Fn=r(e=>`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${_}</loc>
    <lastmod>${ce}</lastmod>
  </url>
  <url>
    <loc>${_}llms.txt</loc>
    <lastmod>${ce}</lastmod>
  </url>
  <url>
    <loc>${e}.well-known/mcp/server-card.json</loc>
    <lastmod>${ce}</lastmod>
  </url>
</urlset>
`,"buildSitemapXml"),zn=Gn(`${_}sitemap.xml`),qn=Fn(_),Mt={linkset:[{anchor:_,"service-desc":[{href:`${_}.well-known/openapi.json`,type:"application/vnd.oai.openapi+json;version=3.1"}],"service-doc":[{href:`${_}llms.txt`,type:"text/plain"}],status:[{href:ie,type:"application/health+json"}],"service-meta":[{href:`${_}.well-known/mcp/server-card.json`,type:"application/json"},{href:be,type:"application/json"}]}]},Ut={openapi:"3.1.0",info:{title:"Knowgrph API",version:"0.1.0",description:"Agent discovery surface for the Knowgrph Cloudflare deployment."},servers:[{url:E,description:"Knowgrph Cloudflare deployment"}],paths:gt({appBasePath:S,appA2aAgentCardPath:ze,healthPath:le})},$t={resource:_,authorization_servers:[`${E}/cdn-cgi/access`],scopes_supported:["knowgrph:read","knowgrph:source-files:read"],bearer_methods_supported:["header"],resource_documentation:`${_}llms.txt`},ge={skill:`${E}/auth.md`,register_uri:`${_}agent/auth`,claim_uri:`${_}agent/auth/claim`,revocation_uri:`${_}agent/auth/revoke`,identity_types_supported:["anonymous","identity_assertion"],anonymous:{credential_types_supported:["api_key"]},identity_assertion:{assertion_types_supported:["urn:ietf:params:oauth:token-type:id-jag","verified_email"],credential_types_supported:["access_token","api_key"]},events_supported:["https://schemas.workos.com/events/agent/auth/identity/assertion/revoked"],registration_status:"metadata_published_runtime_user_mediated"},Ct={issuer:`${E}/cdn-cgi/access`,authorization_endpoint:`${E}/cdn-cgi/access/login`,token_endpoint:`${E}/cdn-cgi/access/token`,jwks_uri:`${_}.well-known/http-message-signatures-directory`,response_types_supported:["code"],grant_types_supported:["authorization_code","client_credentials"],token_endpoint_auth_methods_supported:["client_secret_basic","private_key_jwt"],scopes_supported:$t.scopes_supported,agent_auth:ge},Yn=`# Knowgrph auth.md

Knowgrph publishes agent registration metadata for the read-only agent surface at ${_}. Agents should first fetch ${E}/.well-known/oauth-protected-resource, then ${E}/.well-known/oauth-authorization-server, and read the agent_auth block.

## Registration

- Register: ${ge.register_uri}
- Claim: ${ge.claim_uri}
- Revoke: ${ge.revocation_uri}
- Supported identity types: ${ge.identity_types_supported.join(", ")}
- Credential types: api_key, access_token
- Current runtime policy: user-mediated access through the existing Cloudflare Access/OAuth boundary; no separate MCP-only auth stack.
- Pipeline rule: agents must not bypass MainPanel -> FloatingPanel Chat -> KGC -> Canvas for user-mediated graph work; published HTTP MCP tools remain read-only until mutation auth and conflict semantics are implemented.`,Ht={name:"Knowgrph Agent",description:"Agent-readable discovery, published-document retrieval, and WebMCP-ready metadata surface for Knowgrph.",version:"0.1.0",provider:{organization:"airvio / joohwee",url:_},url:`${_}mcp`,preferredTransport:"JSONRPC",supportedInterfaces:[{url:`${_}mcp`,protocolBinding:"JSONRPC",transportProtocol:"JSONRPC",description:"Primary machine interface for read-only discovery and source-file document access."},{url:qe,protocolBinding:"HTTP+JSON/REST",transportProtocol:"HTTP+JSON/REST",description:"Published source-files index and storage-backed document read surface."}],capabilities:{streaming:!1,pushNotifications:!1,stateTransitionHistory:!1,extendedAgentCard:!1},defaultInputModes:["text/plain","text/markdown","application/json"],defaultOutputModes:["text/plain","text/markdown","application/json"],skills:ht(Ee)},z={serverInfo:{name:"knowgrph",version:"0.1.0"},transport:{type:"http",url:`${_}mcp`},capabilities:{tools:Ee.map(e=>({name:e.name,description:e.description,inputSchema:e.inputSchema}))},links:{apiCatalog:`${_}.well-known/api-catalog`,skills:`${_}.well-known/agent-skills/index.json`,status:ie,agentCard:be}},Ve=Ee.map(e=>({name:e.webName,title:e.title,description:e.description,inputSchema:e.inputSchema,annotations:e.annotations})),fe=r(e=>Lt(Ee.find(t=>t.name===e)?.webName),"findWebMcpToolName"),Jn=fe(d.listSourceFiles),Vn=fe(d.readSourceFile),Xn=fe(d.readSharedDocument),Zn=fe(d.inspectSharedDocumentStructure),Qn=fe(d.inspectAgentSurface),eo=`(() => {
  const root = globalThis;
  const siteOrigin = ${JSON.stringify(E)};
  const appBasePath = ${JSON.stringify(S)};
  const defaultWorkspaceId = ${JSON.stringify(ue)};
  const toolDefinitions = ${JSON.stringify(Ve)};
  const toolNames = ${JSON.stringify(Ve.map(e=>e.name))};
  const lateBindingRetryDelayMs = 500;
  const lateBindingMaxAttempts = 20;
  const inspectSharedDocumentStructure = (args = {}) => {
    const normalizeString = (value) => String(value || "").trim();
    const normalizeMarkdown = (value) => String(value || "").replace(/\\r\\n/g, "\\n").replace(/\\r/g, "\\n");
    const readIndent = (line) => {
      const match = String(line || "").match(/^\\s*/);
      return match ? match[0].length : 0;
    };
    const isYamlKeyLine = (line) => /^[A-Za-z0-9_:@-]+\\s*:/.test(normalizeString(line));
    const splitLines = (text) => normalizeMarkdown(text).split("\\n");
    const extractLeadingFrontmatter = (markdown) => {
      const lines = splitLines(markdown);
      let start = 0;
      while (start < lines.length && !normalizeString(lines[start])) start += 1;
      if (normalizeString(lines[start]) !== "---") return null;
      for (let i = start + 1; i < lines.length; i += 1) {
        if (normalizeString(lines[i]) !== "---") continue;
        return {
          frontmatter: lines.slice(start + 1, i).join("\\n"),
          body: lines.slice(i + 1).join("\\n"),
        };
      }
      return null;
    };
    const extractTopLevelFrontmatterKeys = (frontmatter) => {
      const keys = [];
      for (const line of splitLines(frontmatter)) {
        if (!normalizeString(line) || readIndent(line) !== 0) continue;
        const match = line.match(/^([A-Za-z0-9_:@-]+)\\s*:/);
        if (!match || !match[1]) continue;
        keys.push(match[1]);
      }
      return Array.from(new Set(keys)).sort((a, b) => a.localeCompare(b));
    };
    const extractYamlBlock = (text, key) => {
      const lines = splitLines(text);
      const expectedPrefix = key + ":";
      for (let i = 0; i < lines.length; i += 1) {
        const line = lines[i];
        const trimmed = normalizeString(line);
        if (!trimmed.startsWith(expectedPrefix)) continue;
        const indent = readIndent(line);
        const inlineValue = trimmed.slice(expectedPrefix.length).trim();
        if (inlineValue) {
          return { indent, inlineValue, blockLines: [], blockText: "" };
        }
        const blockLines = [];
        for (let j = i + 1; j < lines.length; j += 1) {
          const nextLine = lines[j];
          const nextTrimmed = normalizeString(nextLine);
          const nextIndent = readIndent(nextLine);
          if (nextTrimmed && nextIndent <= indent && isYamlKeyLine(nextLine)) break;
          blockLines.push(nextLine);
        }
        return {
          indent,
          inlineValue: "",
          blockLines,
          blockText: blockLines.join("\\n"),
        };
      }
      return null;
    };
    const extractNestedYamlKeys = (blockText) => {
      const keys = [];
      for (const line of splitLines(blockText)) {
        const trimmed = normalizeString(line);
        if (!trimmed || trimmed.startsWith("- ")) continue;
        const match = trimmed.match(/^([A-Za-z0-9_:@-]+)\\s*:/);
        if (!match || !match[1]) continue;
        keys.push(match[1]);
      }
      return Array.from(new Set(keys)).sort((a, b) => a.localeCompare(b));
    };
    const countInlineSequenceEntries = (inlineValue) => {
      const trimmed = normalizeString(inlineValue);
      if (!trimmed.startsWith("[") || !trimmed.endsWith("]")) return null;
      const inner = trimmed.slice(1, -1).trim();
      if (!inner) return 0;
      return inner.split(",").map((part) => normalizeString(part)).filter(Boolean).length;
    };
    const countYamlSequenceEntries = (text, key) => {
      const block = extractYamlBlock(text, key);
      if (!block) return null;
      if (block.inlineValue) return countInlineSequenceEntries(block.inlineValue);
      let count = 0;
      for (const line of block.blockLines) {
        if (!normalizeString(line)) continue;
        if (readIndent(line) <= block.indent) continue;
        if (/^\\s*-\\s+/.test(line)) count += 1;
      }
      return count;
    };
    const extractMarkdownHeadings = (body) => {
      const headings = [];
      for (const line of splitLines(body)) {
        const match = line.match(/^(#{1,6})\\s+(.+?)\\s*$/);
        if (!match || !match[2]) continue;
        headings.push({
          depth: match[1].length,
          text: normalizeString(match[2]),
        });
      }
      return headings;
    };
    const workspaceId = normalizeString(args.workspaceId);
    const canonicalPath = normalizeString(args.canonicalPath);
    const markdown = normalizeMarkdown(args.markdown);
    const parsed = extractLeadingFrontmatter(markdown);
    const topLevelKeys = parsed ? extractTopLevelFrontmatterKeys(parsed.frontmatter) : [];
    const flowBlock = parsed ? extractYamlBlock(parsed.frontmatter, "flow") : null;
    const flowKeys = flowBlock ? extractNestedYamlKeys(flowBlock.blockText) : [];
    const forbiddenGroupingAliasSet = new Set(["kg:subgraphs", "clusters", "groups", "layers"]);
    const forbiddenGroupingAliases = Array.from(new Set(topLevelKeys.concat(flowKeys).filter((key) => forbiddenGroupingAliasSet.has(key)))).sort((a, b) => a.localeCompare(b));
    const headings = extractMarkdownHeadings(parsed ? parsed.body : markdown);
    return {
      workspaceId,
      canonicalPath,
      markdownLength: markdown.length,
      lineCount: markdown ? splitLines(markdown).length : 0,
      hasFrontmatter: Boolean(parsed),
      topLevelKeys,
      hasFlowBlock: Boolean(flowBlock),
      flowKeys,
      flowNodeCount: flowBlock ? countYamlSequenceEntries(flowBlock.blockText, "nodes") : null,
      flowConnectionCount: flowBlock ? (countYamlSequenceEntries(flowBlock.blockText, "connections") ?? countYamlSequenceEntries(flowBlock.blockText, "edges")) : null,
      flowSubgraphCount: flowBlock ? countYamlSequenceEntries(flowBlock.blockText, "subgraphs") : null,
      forbiddenGroupingAliases,
      headingCount: headings.length,
      headings: headings.map((heading) => heading.text),
      bodyLength: normalizeString(parsed ? parsed.body : markdown).length,
    };
  };
  const fallbackState = {
    fallbackContext: null,
    activeRegisteredContext: null,
    registrations: new WeakMap(),
    lateBindingRetryId: null,
    lateBindingAttemptCount: 0,
  };
  const normalizeString = (value) => String(value || "").trim();
  const isLocalhostHost = (hostname) => {
    const normalized = normalizeString(hostname).toLowerCase();
    return normalized === "localhost" || normalized === "127.0.0.1" || normalized === "0.0.0.0";
  };
  const markWebMcpRuntime = (state = toolNames.join(",")) => {
    if (typeof document === "undefined" || !document.documentElement) return;
    document.documentElement.dataset.kgWebmcpTools = toolNames.join(",");
    document.documentElement.dataset.kgWebmcpContext = state;
  };
  const buildDocPath = (canonicalPath, workspaceId = "") => {
    const normalizedCanonicalPath = normalizeString(canonicalPath);
    const normalizedWorkspaceId = normalizeString(workspaceId);
    return normalizedWorkspaceId
      ? \`/api/storage/doc/\${encodeURIComponent(normalizedWorkspaceId)}/\${encodeURIComponent(normalizedCanonicalPath)}\`
      : \`/api/storage/doc-default/\${encodeURIComponent(normalizedCanonicalPath)}\`;
  };
  const createPublishedDocIdentityResolver = ${Pt};
  const resolvePublishedDocIdentity = createPublishedDocIdentityResolver({
    defaultAppBasePath: appBasePath,
  });
  const buildStorageRequestUrl = (path) => {
    const safePath = normalizeString(path);
    if (!safePath) return "";
    if (typeof window !== "undefined") {
      const hostname = normalizeString(window.location && window.location.hostname);
      if (isLocalhostHost(hostname) && safePath.startsWith("/api/storage/")) return safePath;
      const currentOrigin = normalizeString(window.location && window.location.origin);
      const baseUrl = currentOrigin || siteOrigin;
      return new URL(safePath, baseUrl.endsWith("/") ? baseUrl : \`\${baseUrl}/\`).toString();
    }
    return new URL(safePath, siteOrigin.endsWith("/") ? siteOrigin : \`\${siteOrigin}/\`).toString();
  };
  const resolveAgentReadyBaseUrl = () => {
    if (typeof window !== "undefined") {
      const currentOrigin = normalizeString(window.location && window.location.origin);
      if (currentOrigin) {
        return new URL(\`\${appBasePath}/\`, currentOrigin.endsWith("/") ? currentOrigin : \`\${currentOrigin}/\`)
          .toString()
          .replace(/\\/+$/, "");
      }
    }
    return new URL(\`\${appBasePath}/\`, siteOrigin.endsWith("/") ? siteOrigin : \`\${siteOrigin}/\`)
      .toString()
      .replace(/\\/+$/, "");
  };
  const fetchJson = async (url, accept = "application/json") => {
    const response = await fetch(url, {
      headers: { accept },
    });
    if (!response.ok) throw new Error(\`inspect_agent_surface failed with \${response.status} for \${url}\`);
    return response.json();
  };
  const buildAgentSurfaceInspectionPayload = (args = {}) => {
    const baseUrl = String(args.baseUrl || "").replace(/\\/+$/, "");
    return {
      baseUrl,
      healthUrl: baseUrl + "/health",
      mcpUrl: baseUrl + "/mcp",
      apiCatalogUrl: baseUrl + "/.well-known/api-catalog",
      openApiUrl: baseUrl + "/.well-known/openapi.json",
      mcpServerCardUrl: baseUrl + "/.well-known/mcp/server-card.json",
      agentCardUrl: baseUrl + "/.well-known/agent-card.json",
      agentSkillsUrl: baseUrl + "/.well-known/agent-skills/index.json",
      health: args.health,
      apiCatalog: args.apiCatalog,
      openApi: args.openApi,
      mcpServerCard: args.mcpServerCard,
      agentCard: args.agentCard,
      agentSkills: args.agentSkills,
    };
  };
  const createAgentSurfaceInspectionExecutor = (args = {}) => {
    const baseUrl = String(args.baseUrl || "").replace(/\\/+$/, "");
    const fetchJson = args.fetchJson;
    if (!baseUrl) {
      throw new Error("baseUrl is required");
    }
    if (typeof fetchJson !== "function") {
      throw new Error("fetchJson is required");
    }
    return async () => {
      const responses = await Promise.all([
        fetchJson(baseUrl + "/health", "application/health+json"),
        fetchJson(baseUrl + "/.well-known/api-catalog", "application/linkset+json"),
        fetchJson(baseUrl + "/.well-known/openapi.json", "application/json"),
        fetchJson(baseUrl + "/.well-known/mcp/server-card.json", "application/json"),
        fetchJson(baseUrl + "/.well-known/agent-card.json", "application/json"),
        fetchJson(baseUrl + "/.well-known/agent-skills/index.json", "application/json"),
      ]);
      return buildAgentSurfaceInspectionPayload({
        baseUrl,
        health: responses[0],
        apiCatalog: responses[1],
        openApi: responses[2],
        mcpServerCard: responses[3],
        agentCard: responses[4],
        agentSkills: responses[5],
      });
    };
  };
  const createPublishedAgentReadyToolExecutors = (args = {}) => {
    const toolNames = args.toolNames || {};
    const defaultWorkspaceId = String(args.defaultWorkspaceId || "").trim();
    const buildStorageDocPath = args.buildStorageDocPath;
    const fetchSourceFilesIndexResponse = args.fetchSourceFilesIndexResponse;
    const fetchStorageMarkdownResponse = args.fetchStorageMarkdownResponse;
    const resolveSharedDocumentInput = args.resolveSharedDocumentInput;
    const inspectSharedDocumentStructure = args.inspectSharedDocumentStructure;
    const buildAgentSurfaceInspection = args.buildAgentSurfaceInspection;
    const normalizeString = (value) => String(value || "").trim();
    if (typeof buildStorageDocPath !== "function") throw new Error("buildStorageDocPath is required");
    if (typeof fetchSourceFilesIndexResponse !== "function") throw new Error("fetchSourceFilesIndexResponse is required");
    if (typeof fetchStorageMarkdownResponse !== "function") throw new Error("fetchStorageMarkdownResponse is required");
    if (typeof resolveSharedDocumentInput !== "function") throw new Error("resolveSharedDocumentInput is required");
    if (typeof inspectSharedDocumentStructure !== "function") throw new Error("inspectSharedDocumentStructure is required");
    if (typeof buildAgentSurfaceInspection !== "function") throw new Error("buildAgentSurfaceInspection is required");
    const readSourceFile = async (input = {}) => {
      const canonicalPath = normalizeString(input.canonicalPath);
      if (!canonicalPath) {
        throw new Error("canonicalPath is required");
      }
      const workspaceId = normalizeString(input.workspaceId);
      const response = await fetchStorageMarkdownResponse(buildStorageDocPath(canonicalPath, workspaceId));
      if (!response.ok) {
        throw new Error("read_source_file failed with " + response.status);
      }
      return {
        workspaceId: workspaceId || defaultWorkspaceId,
        canonicalPath,
        markdown: await response.text(),
      };
    };
    const readSharedDocument = async (input = {}) => {
      const resolvedDocument = resolveSharedDocumentInput(input);
      if (!resolvedDocument) {
        throw new Error("shareToken or shareUrl must resolve to a published Knowgrph document");
      }
      const workspaceId = normalizeString(resolvedDocument.workspaceId);
      const canonicalPath = normalizeString(resolvedDocument.canonicalPath);
      const response = await fetchStorageMarkdownResponse(buildStorageDocPath(canonicalPath, workspaceId));
      if (!response.ok) {
        throw new Error("read_shared_document failed with " + response.status);
      }
      return {
        workspaceId: workspaceId || defaultWorkspaceId,
        canonicalPath,
        markdown: await response.text(),
      };
    };
    const inspectSharedDocument = async (input = {}) => {
      const sharedDocument = await readSharedDocument(input);
      return inspectSharedDocumentStructure(sharedDocument);
    };
    return {
      [toolNames.listSourceFiles]: async () => {
        const response = await fetchSourceFilesIndexResponse();
        if (!response.ok) {
          throw new Error("list_source_files failed with " + response.status);
        }
        return {
          workspaceId: defaultWorkspaceId,
          markdownIndex: await response.text(),
        };
      },
      [toolNames.readSourceFile]: readSourceFile,
      [toolNames.readSharedDocument]: readSharedDocument,
      [toolNames.inspectSharedDocumentStructure]: inspectSharedDocument,
      [toolNames.inspectAgentSurface]: async () => buildAgentSurfaceInspection(),
    };
  };
  const createWebMcpLifecycleController = (args = {}) => {
    const root = args.root, lifecycleState = args.state, tools = Array.isArray(args.tools) ? args.tools : [], toolNames = Array.isArray(args.toolNames) ? args.toolNames : [];
    const lateBindingRetryDelayMs = Number(args.lateBindingRetryDelayMs || 500), lateBindingMaxAttempts = Number(args.lateBindingMaxAttempts || 20), markRuntimeState = typeof args.markRuntimeState === "function" ? args.markRuntimeState : () => {};
    if (!root || !lifecycleState || typeof lifecycleState !== "object") throw new Error("root and state are required");
    const readGlobalNavigator = () => {
      const windowNavigator = root.window && root.window.navigator;
      if (windowNavigator && root.navigator !== windowNavigator) {
        try { Object.defineProperty(root, "navigator", { configurable: true, value: windowNavigator }); } catch { root.navigator = windowNavigator; }
        return windowNavigator;
      }
      if (root.navigator) return root.navigator;
      const navigatorObject = {};
      try { Object.defineProperty(root, "navigator", { configurable: true, value: navigatorObject }); } catch { root.navigator = navigatorObject; }
      return navigatorObject;
    };
    const getRegistrationState = (context) => {
      const existing = lifecycleState.registrations.get(context);
      if (existing) return existing;
      const created = { registeredToolNames: new Set(), abortControllers: new Map() };
      lifecycleState.registrations.set(context, created);
      return created;
    };
    const createFallbackModelContext = () => {
      const context = { tools: [] }, upsertTool = (tool) => {
        if (!tool || !tool.name) return;
        const existingIndex = context.tools.findIndex((entry) => entry && entry.name === tool.name);
        if (existingIndex >= 0) context.tools.splice(existingIndex, 1, tool); else context.tools.push(tool);
      };
      context.provideContext = (provided = {}) => {
        context.tools.splice(0, context.tools.length);
        for (const tool of Array.isArray(provided.tools) ? provided.tools : []) upsertTool(tool);
      };
      context.registerTool = (tool, options = {}) => {
        if (!tool || !tool.name) throw new Error("tool name is required");
        if (context.tools.some((entry) => entry && entry.name === tool.name)) {
          const error = new Error("tool already registered: " + tool.name);
          error.name = "InvalidStateError";
          throw error;
        }
        if (options.signal && options.signal.aborted) return;
        context.tools.push(tool);
        if (options.signal && typeof options.signal.addEventListener === "function") options.signal.addEventListener("abort", () => {
          const index = context.tools.findIndex((entry) => entry && entry.name === tool.name);
          if (index >= 0) context.tools.splice(index, 1);
        }, { once: true });
      };
      context.provideContext({ tools });
      return context;
    };
    const isDuplicateToolRegistrationError = (error) => !!error && typeof error === "object" && String(error.name || "").trim() === "InvalidStateError";
    const releasePreviousRegisteredContext = (nextContext) => {
      const active = lifecycleState.activeRegisteredContext;
      if (!active || active === nextContext) {
        lifecycleState.activeRegisteredContext = nextContext;
        return;
      }
      const registrationState = lifecycleState.registrations.get(active);
      if (registrationState) registrationState.abortControllers.forEach((controller) => {
        if (controller && typeof controller.abort === "function") controller.abort();
      });
      lifecycleState.activeRegisteredContext = nextContext;
    };
    const clearLateBindingRetry = () => {
      if (lifecycleState.lateBindingRetryId === null || !root.window || typeof root.window.clearTimeout !== "function") return;
      root.window.clearTimeout(lifecycleState.lateBindingRetryId);
      lifecycleState.lateBindingRetryId = null;
    };
    const installToolsIntoModelContext = (context) => {
      const registrationState = getRegistrationState(context);
      let providedContext = false;
      if (typeof context.provideContext === "function") {
        try { context.provideContext({ tools }); providedContext = true; } catch { void 0; }
      }
      if (typeof context.registerTool === "function") for (const tool of tools) {
        if (registrationState.registeredToolNames.has(tool.name)) continue;
        const controller = typeof AbortController === "function" ? new AbortController() : null;
        try {
          context.registerTool(tool, controller ? { signal: controller.signal } : {});
          registrationState.registeredToolNames.add(tool.name);
          registrationState.abortControllers.set(tool.name, controller);
        } catch (error) {
          if (!isDuplicateToolRegistrationError(error)) continue;
          registrationState.registeredToolNames.add(tool.name);
          registrationState.abortControllers.set(tool.name, null);
        }
      }
      if (Array.isArray(context.tools)) for (const tool of tools) if (!context.tools.some((entry) => entry && entry.name === tool.name)) context.tools.push(tool);
      const allToolsRegistered = tools.every((tool) => registrationState.registeredToolNames.has(tool.name) || (Array.isArray(context.tools) && context.tools.some((entry) => entry && entry.name === tool.name)));
      if (allToolsRegistered) {
        releasePreviousRegisteredContext(context);
        return true;
      }
      return providedContext && typeof context.registerTool !== "function" && !Array.isArray(context.tools);
    };
    const tryInstallLateBoundModelContext = (nav) => {
      const context = nav.modelContext;
      if (!context || context === lifecycleState.fallbackContext) return false;
      if (!installToolsIntoModelContext(context)) return false;
      clearLateBindingRetry();
      markRuntimeState("installed");
      return true;
    };
    const scheduleLateBindingRetry = (nav) => {
      if (!root.window || typeof root.window.setTimeout !== "function" || lifecycleState.lateBindingRetryId !== null) return;
      if (lifecycleState.lateBindingAttemptCount >= lateBindingMaxAttempts) {
        markRuntimeState("retry-exhausted");
        return;
      }
      lifecycleState.lateBindingRetryId = root.window.setTimeout(() => {
        lifecycleState.lateBindingRetryId = null;
        lifecycleState.lateBindingAttemptCount += 1;
        if (!tryInstallLateBoundModelContext(nav)) scheduleLateBindingRetry(nav);
      }, lateBindingRetryDelayMs);
    };
    const defineFallbackModelContext = (nav, context) => {
      lifecycleState.fallbackContext = context;
      const doc = root.document;
      let currentContext = (doc && doc.modelContext && doc.modelContext !== context) ? doc.modelContext : nav.modelContext && nav.modelContext !== context ? nav.modelContext : context;
      const descriptor = { configurable: true, enumerable: false, get: () => currentContext, set: (value) => {
        currentContext = value || context;
        if (currentContext !== context) void tryInstallLateBoundModelContext(nav);
      } };
      try { Object.defineProperty(nav, "modelContext", descriptor); } catch { nav.modelContext = context; }
      if (doc && !doc.modelContext) try { Object.defineProperty(doc, "modelContext", descriptor); } catch { void 0; }
    };
    const install = () => {
      const nav = readGlobalNavigator(), docContext = root.document && root.document.modelContext;
      markRuntimeState("installing");
      if (docContext && !nav.modelContext) try {
        Object.defineProperty(nav, "modelContext", { configurable: true, enumerable: false, get: () => root.document && root.document.modelContext, set: (value) => {
          if (value && value !== docContext) void installToolsIntoModelContext(value);
        } });
      } catch { nav.modelContext = docContext; }
      if (docContext && installToolsIntoModelContext(docContext)) return markRuntimeState("installed");
      if (nav.modelContext && installToolsIntoModelContext(nav.modelContext)) return markRuntimeState("installed");
      if (!nav.modelContext) defineFallbackModelContext(nav, createFallbackModelContext());
      markRuntimeState(toolNames.every((toolName) => nav.modelContext && Array.isArray(nav.modelContext.tools) && nav.modelContext.tools.some((entry) => entry && entry.name === toolName)) ? "fallback-readable" : "awaiting-model-context");
      scheduleLateBindingRetry(nav);
    };
    return { install, clearLateBindingRetry, installToolsIntoModelContext, tryInstallLateBoundModelContext, scheduleLateBindingRetry, defineFallbackModelContext, readGlobalNavigator };
  };
  const toolExecutors = createPublishedAgentReadyToolExecutors({
    toolNames: {
      listSourceFiles: ${JSON.stringify(Jn)},
      readSourceFile: ${JSON.stringify(Vn)},
      readSharedDocument: ${JSON.stringify(Xn)},
      inspectSharedDocumentStructure: ${JSON.stringify(Zn)},
      inspectAgentSurface: ${JSON.stringify(Qn)},
    },
    defaultWorkspaceId,
    buildStorageDocPath: buildDocPath,
    fetchSourceFilesIndexResponse: () =>
      fetch(buildStorageRequestUrl("/api/storage/source-files"), {
        headers: { accept: "text/markdown" },
      }),
    fetchStorageMarkdownResponse: (path) =>
      fetch(buildStorageRequestUrl(path), {
        headers: { accept: "text/markdown" },
      }),
    resolveSharedDocumentInput: (input = {}) => resolvePublishedDocIdentity(input),
    inspectSharedDocumentStructure,
    buildAgentSurfaceInspection: createAgentSurfaceInspectionExecutor({
      baseUrl: resolveAgentReadyBaseUrl(),
      fetchJson,
    }),
  });
  const tools = toolDefinitions.map((tool) => {
    const execute = toolExecutors[tool.name];
    if (typeof execute !== "function") {
      throw new Error(\`Missing HTML WebMCP fallback executor for \${tool.name}\`);
    }
    return {
      ...tool,
      execute,
    };
  });
  const webMcpLifecycle = createWebMcpLifecycleController({
    root,
    state: fallbackState,
    tools,
    toolNames,
    lateBindingRetryDelayMs: lateBindingRetryDelayMs,
    lateBindingMaxAttempts: lateBindingMaxAttempts,
    markRuntimeState: markWebMcpRuntime,
  });
  webMcpLifecycle.install();
})();`,to=r(async e=>{if(!(e.headers.get("content-type")||"").toLowerCase().includes("text/html"))return e;let n=await e.text();if(Ve.every(i=>n.includes(i.name)))return new Response(n,e);let o=`<script>${eo}<\/script>`,a=n.includes("</head>")?n.replace("</head>",`${o}</head>`):`${n}${o}`,s=new Response(a,e);return s.headers.delete("content-length"),s},"injectWebMcpScript"),jt=`# Knowgrph Published Documents Skill

Use this skill when an agent needs to discover, read, or inspect published Knowgrph Source Files and shared documents.

## Tools

- list_source_files: fetch ${E}/api/storage/source-files.
- read_source_file: fetch ${E}/api/storage/doc-default/{canonicalPath} by default, or ${E}/api/storage/doc/{workspaceId}/{canonicalPath} for an explicit workspace.
- read_shared_document: resolve a Knowgrph share token or public share/document URL, then fetch the canonical published markdown document from storage.
- inspect_shared_document_structure: inspect published Knowgrph shared-document frontmatter/body structure from a share token or public share/document URL.

## Scope

- Shared read-only surface across HTTP MCP, MCP server-card metadata, and deployed HTML WebMCP fallback.
- Public/browser URLs stay canonical on ${E}/api/storage/*.
- Server-side Pages reads use ${de} to avoid custom-domain self-fetch rewrite failures.
`,Kt=`# Knowgrph WebMCP Readiness Skill

Use this skill when an agent or browser needs to inspect the deployed Knowgrph agent-ready surface and WebMCP lifecycle.

## Shared deployed tools

- inspect_agent_surface: inspect health, OpenAPI, API catalog, MCP server card, A2A card, and agent-skills metadata.

## WebMCP implementation notes

- Browser app runtime installs WebMCP on page load via navigator.modelContext in canvas/src/main.tsx.
- Runtime prefers provideContext({ tools }) when available and also registers each tool with registerTool(tool, { signal }) when supported.
- AbortController-backed registration is used so tools can be unregistered cleanly with the platform lifecycle.
- Deployed HTML fallback injects the shared five-tool WebMCP surface on /knowgrph HTML routes.
- Full app runtime additionally exposes browser-local inspect tools for Settings chat readiness, MainPanel state, Editor Workspace state, chat pipeline validation/finalize/apply state, the combined MainPanel -> Chat -> Markdown/frontmatter -> Canvas readiness path, the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
`,no={listSourceFiles:d.listSourceFiles,readSourceFile:d.readSourceFile,readSharedDocument:d.readSharedDocument,inspectSharedDocumentStructure:d.inspectSharedDocumentStructure,inspectAgentSurface:d.inspectAgentSurface},Bt=r(async e=>{let t=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(n)].map(o=>o.toString(16).padStart(2,"0")).join("")},"sha256Hex"),oo=Bt(jt),ro=Bt(Kt),ao={[se[0].name]:oo,[se[1].name]:ro},Wt=r(async()=>mt({appUrl:_,updatedAt:ce,sha256ByName:ao}),"agentSkillsIndex"),so={keys:[{kty:"OKP",crv:"Ed25519",kid:"knowgrph-agent-ready-2026-05-21",use:"sig",alg:"EdDSA",x:"11qYAYdkVKxA4G0wV47IxPtYfFVH_H7zmC2Di2PcvLU"}]},io={protocolVersion:"2025-06-18",capabilities:{tools:{}},serverInfo:z.serverInfo},co=z.capabilities.tools.map(e=>({name:e.name,description:e.description,inputSchema:e.inputSchema})),Gt=r(()=>({status:"pass",service:"knowgrph-agent-ready-pages",homepage:_,health:ie,updatedAt:ce,checks:{linkHeaders:!0,markdownNegotiation:!0,httpMcp:!0,webMcp:!0,defaultWorkspaceId:ue}}),"buildHealthStatusBody"),lo=r(async()=>pt({baseUrl:_,health:Gt(),apiCatalog:Mt,openApi:Ut,mcpServerCard:z,agentCard:Ht,agentSkills:await Wt()}),"buildAgentSurfaceInspection"),po=dt({toolNames:no,defaultWorkspaceId:ue,buildStorageDocPath:Dt,fetchSourceFilesIndexResponse:r(()=>fetch(`${de}${bt()}`,{headers:{accept:"text/markdown"}}),"fetchSourceFilesIndexResponse"),fetchStorageMarkdownResponse:r(e=>fetch(`${de}${e}`,{headers:{accept:"text/markdown"}}),"fetchStorageMarkdownResponse"),resolveSharedDocumentInput:r((e={})=>xe({shareToken:e?.shareToken,shareUrl:e?.shareUrl,appBasePath:S,baseUrl:E}),"resolveSharedDocumentInput"),inspectSharedDocumentStructure:ut,buildAgentSurfaceInspection:lo}),Ft=r(e=>{try{let t=new URL(e,E);return xe({shareUrl:`${t.pathname}${t.search}`,baseUrl:E,appBasePath:S})}catch{return null}},"resolvePublishedDocRequestIdentity"),uo=r(e=>xe({shareUrl:String(e||""),baseUrl:E,appBasePath:S}),"resolvePublishedDocPathIdentity"),ho=r(async(e,t)=>{let n=new URL(Dt(t.canonicalPath,t.workspaceId),de),o=await fetch(n,{method:"GET",headers:{accept:"text/markdown, text/plain;q=0.9, */*;q=0.1"}}),a=new Headers(o.headers),s=String(a.get("vary")||"");return a.set("vary",s?`${s}, Accept`:"Accept"),new Response(String(e.method||"").toUpperCase()==="HEAD"?null:o.body,{status:o.status,statusText:o.statusText,headers:a})},"proxyPublishedDocMarkdownResponse"),mo=r(async e=>{try{let t=await e.json();return t&&typeof t=="object"?t:null}catch{return null}},"readJsonRpcRequest"),Ae=r((e,t)=>U({jsonrpc:"2.0",id:e??null,result:t}),"jsonRpcResult"),Ye=r((e,t,n)=>U({jsonrpc:"2.0",id:e??null,error:{code:t,message:n}}),"jsonRpcError"),go=r(async(e,t)=>{let n=po[e];if(typeof n!="function")throw new Error(`unknown tool: ${e}`);return n(t)},"executeMcpTool"),fo=r(async e=>{let t=String(e.method||"GET").toUpperCase();if(t==="GET"||t==="HEAD")return U({ok:!0,transport:z.transport,serverInfo:z.serverInfo,capabilities:z.capabilities});if(t!=="POST")return Nt(405,{ok:!1,error:"unsupported_method"});let n=await mo(e);if(!n)return Ye(null,-32700,"Parse error");switch(n.method){case"initialize":return Ae(n.id,io);case"tools/list":return Ae(n.id,{tools:co});case"tools/call":{let o=Lt(n.params?.name),a=n.params?.arguments&&typeof n.params.arguments=="object"?n.params.arguments:{};if(!o)return Ye(n.id,-32602,"Tool name is required");try{let s=await go(o,a);return Ae(n.id,{content:[{type:"text",text:typeof s?.markdown=="string"?s.markdown:JSON.stringify(s,null,2)}],structuredContent:s,isError:!1})}catch(s){return Ae(n.id,{content:[{type:"text",text:s instanceof Error?s.message:String(s)}],isError:!0})}}default:return Ye(n.id,-32601,"Method not found")}},"handleMcpTransport");var Xe=r(e=>e===S||e===`${S}/`,"handlesKnowgrphRoot"),wo=r(e=>Xe(e)||!!uo(e),"handlesKnowgrphHtmlSurface"),yo=r(e=>{let t=new URL(e.url),n=t.pathname.replace(/\/+$/,"")||"/",o=Ft(e.url);return n===le?"health":n===`${S}/mcp`?"mcp":n===`${S}/robots.txt`?"robots":n===`${S}/sitemap.xml`?"sitemap":n===`${S}/auth.md`||n==="/auth.md"?"auth-md":n.startsWith(`${S}/.well-known/`)?"well-known":o?he(e)?"shared-doc-markdown":"shared-doc-html":Xe(t.pathname)?he(e)?"homepage-markdown":"homepage-html":"app-surface"},"resolveAgentReadyRouteTag"),Je=r((e,t)=>vt(t,{owner:Et,tag:yo(e)}),"withKnowgrphRouteHeaders"),Ot=r(async e=>{let t=new URL(e.url),n=t.pathname.replace(/\/+$/,"")||"/",o=Ft(e.url);if(o&&he(e))return ho(e,o);if(Xe(t.pathname)&&he(e))return It(Tt);switch(n){case le:return Wn(Gt());case`${S}/mcp`:return fo(e);case`${S}/robots.txt`:return me(zn,"text/plain; charset=utf-8");case`${S}/sitemap.xml`:return me(qn,"application/xml; charset=utf-8");case`${S}/auth.md`:case"/auth.md":return me(Yn,"text/markdown; charset=utf-8");case`${S}/.well-known/api-catalog`:return U(Mt,"application/linkset+json; charset=utf-8");case`${S}/.well-known/openapi.json`:return U(Ut,"application/vnd.oai.openapi+json; charset=utf-8");case ze:return U(Ht);case`${S}/.well-known/oauth-protected-resource`:return U($t);case`${S}/.well-known/oauth-authorization-server`:return U(Ct);case`${S}/.well-known/openid-configuration`:return U(Ct);case`${S}/.well-known/mcp/server-card.json`:return U(z);case`${S}/.well-known/mcp.json`:return U(z);case`${S}/.well-known/agent-skills/index.json`:return U(await Wt());case`${S}/.well-known/agent-skills/knowgrph-source-files.md`:return me(jt,"text/markdown; charset=utf-8");case`${S}/.well-known/agent-skills/knowgrph-webmcp-readiness.md`:return me(Kt,"text/markdown; charset=utf-8");case`${S}/.well-known/http-message-signatures-directory`:return U(so);default:return null}},"routeResponse");async function q(e){let{env:t,request:n}=e,o=String(n.method||"GET").toUpperCase(),a=new URL(n.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(o==="POST"&&a.pathname.replace(/\/+$/,"")===`${S}/mcp`)return Je(n,await Ot(n));if(o!=="GET"&&o!=="HEAD")return Nt(405,{ok:!1,error:"unsupported_method"});let s=await Ot(n);if(s){let p=Je(n,s);return o==="HEAD"?new Response(null,p):p}let i=await e.next();if(!wo(a.pathname))return i;let c=o==="HEAD"?i:await to(i),l=new Response(o==="HEAD"?null:c.body,c);return l.headers.set("link",Bn),Je(n,l)}r(q,"onRequest");async function zt(e){return q(e)}r(zt,"onRequest");async function qt(e){return q(e)}r(qt,"onRequest");async function Yt(e){return q(e)}r(Yt,"onRequest");var So=Object.freeze(new Set(["","80","443"])),_o=Object.freeze([".local",".localhost",".internal"]),ko=Object.freeze(new Set(["localhost"]));function X(e){return String(e||"").trim().toLowerCase()}r(X,"normalizeHostname");function Po(e){let t=X(e);if(!/^\d{1,3}(\.\d{1,3}){3}$/.test(t))return!1;let n=t.split(".").map(o=>Number(o));return n.length!==4?!1:n.every(o=>Number.isInteger(o)&&o>=0&&o<=255)}r(Po,"isIpv4Literal");function Jt(e){let[t,n,o,a]=e.split(".").map(s=>Number(s));return(t<<24|n<<16|o<<8|a)>>>0}r(Jt,"ipv4ToInt");function xo(e,t,n){if(!Number.isInteger(n)||n<0||n>32)return!1;if(n===0)return!0;let o=4294967295<<32-n>>>0;return(e&o)===(t&o)}r(xo,"inIpv4Cidr");function Ro(e){let t=X(e);return!t||!t.includes(":")?!1:/^[0-9a-f:]+$/i.test(t)}r(Ro,"isIpv6Literal");function bo(e){let t=X(e);return!!(!t||t==="::1"||t==="0:0:0:0:0:0:0:1"||t.startsWith("fc")||t.startsWith("fd")||/^fe[89ab]/i.test(t))}r(bo,"isBlockedIpv6");function Ao(e,{blockedExact:t,blockedSuffixes:n}={}){let o=X(e);if(!o)return!0;let a=t||ko;if(a instanceof Set&&a.has(o))return!0;let s=n||_o;if(Array.isArray(s))for(let i of s){let c=X(i);if(c&&(o===c||o.endsWith(c)))return!0}return!1}r(Ao,"isBlockedHostname");function Eo(e){let t=X(e);if(!t)return!0;if(Po(t)){let n=Jt(t),o=[{base:"0.0.0.0",bits:8},{base:"10.0.0.0",bits:8},{base:"127.0.0.0",bits:8},{base:"169.254.0.0",bits:16},{base:"172.16.0.0",bits:12},{base:"192.168.0.0",bits:16},{base:"100.64.0.0",bits:10}];for(let a of o){let s=Jt(a.base);if(xo(n,s,a.bits))return!0}return!1}return Ro(t)?bo(t):!1}r(Eo,"isBlockedIpLiteral");function Te(e,{allowedPorts:t}={}){let n=String(e||"").trim();if(!n)throw new Error("invalid_url");let o;try{o=new URL(n)}catch{throw new Error("invalid_url")}if(o.protocol!=="http:"&&o.protocol!=="https:")throw new Error("invalid_url");if(o.username||o.password)throw new Error("invalid_url");let a=t||So,s=String(o.port||"");if(a instanceof Set&&!a.has(s))throw new Error("port_not_allowed");let i=X(o.hostname);if(!i)throw new Error("invalid_url");if(Ao(i))throw new Error("blocked_host");if(Eo(i))throw new Error("blocked_host");return o}r(Te,"parseAndValidateExternalUrl");function Ie(e){return String(e.headers.get("sec-fetch-site")||"").trim().toLowerCase()==="cross-site"}r(Ie,"shouldRejectCrossSiteFetch");var To={"content-type":"application/json; charset=utf-8","cache-control":"public, max-age=600"};function Z(e,t={}){return new Response(JSON.stringify(e),{...t,headers:{...To,...t.headers||{}}})}r(Z,"json");function ve(...e){for(let t of e){if(!t)continue;let n=String(t).trim();if(n)return n}return null}r(ve,"pickFirst");function Io(e){let t=e.slice(0,8e4),n=t.match(/<title[^>]*>([^<]*)<\/title>/i),o=t.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i),a=t.match(/<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i),s=t.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i),i=t.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i),c=t.match(/<meta[^>]+property=["']og:site_name["'][^>]*content=["']([^"']+)["'][^>]*>/i);return{title:ve(o?.[1],n?.[1]),description:ve(a?.[1],s?.[1]),image:ve(i?.[1]),siteName:ve(c?.[1])}}r(Io,"extractMeta");async function Vt(e){let t=e.request.url,n=new URL(t);if(n.searchParams.get("ping")==="1")return Z({ok:!0,ping:!0});let o=n.searchParams.get("url")||"";if(Ie(e.request))return Z({ok:!1,error:"forbidden"},{status:403,headers:{"cache-control":"no-store"}});let a;try{a=Te(o)}catch{return Z({ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}try{let s=await fetch(a.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkPreview/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),i=s.headers.get("content-type")||"";if(!s.ok)return Z({ok:!1,error:"fetch_failed",status:s.status,url:a.toString()},{status:200,headers:{"cache-control":"no-store"}});if(!i.includes("text/html"))return Z({ok:!0,url:a.toString(),domain:a.host,contentType:i,title:null,description:null,image:null,siteName:null});let c=await s.text(),l=Io(c);return Z({ok:!0,url:a.toString(),domain:a.host,contentType:i,...l})}catch(s){return Z({ok:!1,error:"exception",message:s?.message||String(s),url:a.toString()},{status:200,headers:{"cache-control":"no-store"}})}}r(Vt,"onRequestGet");var Xt=35e4;function vo(e){let t=e;return t=t.replace(/<script\b[\s\S]*?<\/script>/gi,""),t=t.replace(/<iframe\b[\s\S]*?<\/iframe>/gi,""),t=t.replace(/<object\b[\s\S]*?<\/object>/gi,""),t=t.replace(/<embed\b[\s\S]*?>/gi,""),t=t.replace(/<noscript\b[\s\S]*?<\/noscript>/gi,""),t=t.replace(/\son[a-z]+\s*=\s*"[^"]*"/gi,""),t=t.replace(/\son[a-z]+\s*=\s*'[^']*'/gi,""),t}r(vo,"stripActiveContent");function Co({url:e,title:t,innerHtml:n}){let o=t?String(t).slice(0,140):"Preview",a=String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");return`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="referrer" content="no-referrer" />
    <title>${o}</title>
    <style>
      :root { color-scheme: dark; }
      body { margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; background: #0b1020; color: rgba(255,255,255,0.92); }
      .bar { position: sticky; top: 0; z-index: 2; display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: rgba(0,0,0,0.55); border-bottom: 1px solid rgba(255,255,255,0.14); backdrop-filter: blur(10px); }
      .bar .t { flex: 1; font-size: 12px; font-weight: 650; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .bar a { color: #7dd3fc; font-size: 12px; text-decoration: none; }
      .bar a:hover { text-decoration: underline; }
      .content { padding: 12px; }
      img { max-width: 100%; height: auto; }
      a { color: #7dd3fc; }
    </style>
  </head>
  <body>
    <div class="bar">
      <div class="t">${o}</div>
      <a href="${a}" target="_blank" rel="noopener">Open</a>
    </div>
    <div class="content">${n}</div>
  </body>
</html>`}r(Co,"buildWrapper");async function Zt(e){let n=new URL(e.request.url).searchParams.get("url")||"";if(Ie(e.request))return new Response("Forbidden",{status:403,headers:{"cache-control":"no-store"}});let o;try{o=Te(n)}catch(a){let s=a instanceof Error?a.message:"invalid_url";return new Response(s,{status:400,headers:{"cache-control":"no-store"}})}try{let a=await fetch(o.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkProxy/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),s=a.headers.get("content-type")||"";if(!a.ok)return new Response(`Fetch failed (${a.status})`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});if(!s.includes("text/html"))return new Response(`Unsupported content-type: ${s}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public, max-age=600"}});let i=await a.text();i.length>Xt&&(i=i.slice(0,Xt));let l=i.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()||o.host;i=vo(i),/<base\s/i.test(i)||(i=i.replace(/<head([^>]*)>/i,`<head$1><base href="${o.origin}/">`));let f=Co({url:o.toString(),title:l,innerHtml:i});return new Response(f,{status:200,headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600","content-security-policy":"default-src 'none'; img-src https: data:; style-src 'unsafe-inline' https:; font-src https: data:; frame-ancestors 'self';"}})}catch(a){return new Response(`Exception: ${a?.message||String(a)}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}})}}r(Zt,"onRequestGet");var Ze="api.openai.com",Ce="api.miromind.ai",Oe="apihub.agnes-ai.com",De="ark.ap-southeast.bytepluses.com",Qe="ark.eu-west.bytepluses.com",en=new Set(["localhost","127.0.0.1","0.0.0.0"]),W=r(e=>String(e||"").trim().toLowerCase(),"normalizeHost"),B=r((e,t)=>String(e.get(t)||"").trim(),"readHeader"),tn=r(e=>en.has(W(e)),"isLocalHost"),Qt=r(e=>{let t=String(e||"").trim();if(!t)return new Set;let n=new Set;return t.split(",").map(o=>W(o)).filter(Boolean).forEach(o=>n.add(o)),n},"parseCsvSet"),nn=r((e,{includeOpenAi:t=!1,includeMiroMind:n=!1,includeAgnes:o=!1,includeBytePlus:a=!1}={})=>{let s=Qt(e.KNOWGRPH_INTEGRATION_ALLOWED_HOSTS),i=Qt(e.KNOWGRPH_CHAT_PROXY_ALLOWED_HOSTS),c=s.size?s:i,l=c.size?c:new Set([...en]);return t&&l.add(Ze),n&&l.add(Ce),o&&l.add(Oe),a&&(l.add(De),l.add(Qe)),l},"parseAllowedHosts"),L=r(e=>{let t=B(e.headers,"origin");if(!t)return{};let n="";try{n=W(new URL(t).host)}catch{return{}}let o=W(new URL(e.url).host);return n===o||n.startsWith("localhost:")||n.startsWith("127.0.0.1:")?{"access-control-allow-origin":t,vary:"Origin"}:{}},"corsHeaders"),H=r((e,t,n)=>new Response(JSON.stringify(t),{status:n,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...L(e)}}),"jsonResponse");var Le={"content-type":"application/json; charset=utf-8","cache-control":"no-store"};function we(e,t,n=200){return new Response(JSON.stringify(t),{status:n,headers:{...Le,...L(e)}})}r(we,"jsonResponse");async function Oo(e){let t=new URL("/knowgrph/imports/hackamap/hackamap-graph.json",e.url),n=await fetch(t.toString(),{redirect:"follow"});return n.ok?await n.json():null}r(Oo,"fetchHackamapGraphJson");async function Q(e,t){let n=new URL(t,e.url),o=await fetch(n.toString(),{redirect:"follow"});return o.ok?await o.json():null}r(Q,"fetchHackamapJson");async function Do(e){let t=await Q(e,"/knowgrph/imports/hackamap/hackamap_api_graph.json");return sn(t)?t:null}r(Do,"fetchHackamapApiGraphJson");async function Lo(e){let t=await Q(e,"/knowgrph/imports/hackamap/hackamap_pipeline.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}r(Lo,"fetchHackamapPipelineJson");async function rn(e){let t=await Q(e,"/knowgrph/imports/hackamap/hackamap_query_presets.json");return Array.isArray(t)?t.filter(Boolean):[]}r(rn,"fetchHackamapQueryPresetsJson");async function an(e){let t=await Q(e,"/knowgrph/imports/hackamap/query-outputs/query-runs.manifest.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}r(an,"fetchHackamapQueryRunsManifestJson");function sn(e){return!e||typeof e!="object"||Array.isArray(e)?!1:Array.isArray(e.nodes)&&Array.isArray(e.edges)}r(sn,"isApiGraphPayload");function cn(e,t){let n=String(e&&e.output&&e.output.per_table_prefix||e?.id||t?.preset||"").trim(),o=String(t?.output_suffix||"").trim();return o?`${n}-${o}`:n}r(cn,"buildHackamapTablePrefix");function et(e,t){if(!Array.isArray(e))return[];let n=[];for(let o of e){if(!o||typeof o!="object"||Array.isArray(o))continue;let a=String(o[t]||"").trim();a&&n.push(a)}return n}r(et,"collectRowIds");async function No(e,t){let n=await Q(e,t);return Array.isArray(n)?n.length:0}r(No,"countHackamapQueryRows");async function Mo(e,t,n){let o=cn(t,n);if(!o)return{};let a=["events","demos","sources","organizer","team","techstack"],s=await Promise.all(a.map(async i=>[i,await No(e,`/knowgrph/imports/hackamap/query-outputs/${i}.${o}.query.json`)]));return Object.fromEntries(s.filter(([,i])=>i>0))}r(Mo,"readHackamapRunTableCounts");function tt(e){return Array.isArray(e)?e.map(tt):!e||typeof e!="object"?e:Object.fromEntries(Object.entries(e).sort(([t],[n])=>String(t).localeCompare(String(n))).map(([t,n])=>[t,tt(n)]))}r(tt,"sortObjectKeys");function Uo(e){try{return JSON.stringify(tt(e))}catch{return""}}r(Uo,"stableParamSignature");function $o(e){return typeof e=="string"?{value:e,label:e}:{value:e,label:JSON.stringify(e)}}r($o,"toBuilderOption");function Ho(e,t){return e.map(n=>{let o=String(n?.id||"").trim();if(!o)return null;let a=n?.params&&typeof n.params=="object"&&!Array.isArray(n.params)?n.params:{},s=t.filter(l=>String(l?.preset||"").trim()===o),i=Array.from(new Set([...Object.keys(a),...s.flatMap(l=>l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?Object.keys(l.params):[])])).sort((l,p)=>String(l).localeCompare(String(p))),c=Object.fromEntries(i.map(l=>{let p=new Set,f=[],u=[a[l],...s.map(k=>k?.params&&typeof k.params=="object"&&!Array.isArray(k.params)?k.params[l]:void 0)];for(let k of u){if(typeof k>"u")continue;let g=Uo(k);!g||p.has(g)||(p.add(g),f.push($o(k)))}return[l,f]}));return{id:o,title:String(n?.title||o).trim(),params:a,param_keys:i,published_param_options:c}}).filter(Boolean)}r(Ho,"buildHackamapPresetRuntimeEntries");async function jo(e){let[t,n,o]=await Promise.all([Lo(e),rn(e),an(e)]),a=t&&typeof t=="object"?t.runtime||{}:{},s=String(a?.query_selection?.default_run_id||"").trim()||"enhanced",i=Array.isArray(o?.runs)?o.runs:[],c=(await Promise.all(i.map(async l=>{let p=String(l?.id||"").trim(),f=String(l?.preset||"").trim();if(!p)return null;let u=n.find(g=>String(g?.id||"").trim()===f),k=await Mo(e,u,l);return{id:p,preset:f,title:String(l?.title||l?.id||"").trim(),params:l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?l.params:{},output_suffix:String(l?.output_suffix||"").trim(),is_default:p===s,table_counts:k}}))).filter(l=>l?.id);return{ok:!0,runtime:{...a&&typeof a=="object"?a:{},presets:Ho(n,c),runs:c}}}r(jo,"buildHackamapRuntimeMeta");async function Ko(e,t){let n=String(t||"").trim();if(!n)return null;let[o,a]=await Promise.all([rn(e),an(e)]),i=(Array.isArray(a?.runs)?a.runs:[]).find(P=>String(P?.id||"").trim()===n);if(!i)return null;let c=o.find(P=>String(P?.id||"").trim()===String(i?.preset||"").trim()),l=cn(c,i);if(!l)return null;let[p,f]=await Promise.all([Q(e,`/knowgrph/imports/hackamap/query-outputs/events.${l}.query.json`),Q(e,`/knowgrph/imports/hackamap/query-outputs/demos.${l}.query.json`)]),u=new Set(et(p,"id")),k=new Set(et(f,"id")),g=et(f,"event_id");for(let P of g)u.add(P);return{eventIds:u,demoIds:k}}r(Ko,"readHackamapQueryRunSelection");function on(e,t,n){if(!n||!sn(e))return e;if(n.eventIds.size===0&&n.demoIds.size===0)return{...e,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_run_filter_skipped:"no-event-demo-rows"}};let o=new Set;n.eventIds.forEach(c=>o.add(`Event:${c}`)),n.demoIds.forEach(c=>o.add(`Demo:${c}`));let a=Array.isArray(e.nodes)?e.nodes.filter(c=>o.has(String(c?.id||"").trim())):[],s=new Set(a.map(c=>String(c?.id||"").trim()).filter(Boolean)),i=Array.isArray(e.edges)?e.edges.filter(c=>s.has(String(c?.source||"").trim())&&s.has(String(c?.target||"").trim())):[];return{...e,nodes:a,edges:i,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_event_count:n.eventIds.size,selected_demo_count:n.demoIds.size,total_problems:a.filter(c=>String(c?.type||"").trim()==="problem").length,total_solutions:a.filter(c=>String(c?.type||"").trim()==="solution").length}}}r(on,"filterHackamapApiGraphPayloadByRun");function Bo(e){let t=Array.isArray(e?.nodes)?e.nodes:[],n=Array.isArray(e?.links)?e.links:[],o=[],a=new Set;for(let i of t){let c=String(i?.id||"").trim(),l=String(i?.type||"").trim(),p=String(i?.label||"").trim();if(!(!c||!l||!p)){if(l==="Event"){o.push({id:c,type:"problem",label:p,cluster:"Event"}),a.add(c);continue}l==="Demo"&&(o.push({id:c,type:"solution",label:p,cluster:"Demo"}),a.add(c))}}let s=[];for(let i of n){let c=String(i?.source||"").trim(),l=String(i?.target||"").trim(),p=String(i?.type||"").trim();!c||!l||p==="has_demo"&&(!a.has(c)||!a.has(l)||s.push({source:c,target:l,type:"has_demo",strength:.35}))}return{nodes:o,edges:s,meta:{source:"hackamap-graph.json:fallback",total_problems:o.filter(i=>i.type==="problem").length,total_solutions:o.filter(i=>i.type==="solution").length,...e?.content_signature?{content_signature:String(e.content_signature)}:{}}}}r(Bo,"toBipartiteApiPayload");async function ln(e){let{request:t}=e,n=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(n==="OPTIONS")return new Response(null,{status:204,headers:{...L(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(n!=="GET"&&n!=="HEAD")return we(t,{ok:!1,error:"unsupported_method"},405);if(String(o.searchParams.get("view")||"").trim().toLowerCase()==="meta"){let f=await jo(t);return n==="HEAD"?new Response(null,{status:200,headers:{...Le,...L(t)}}):we(t,f,200)}let a=String(o.searchParams.get("run")||"").trim(),s=await Ko(t,a),i=await Do(t);if(i){let f=on(i,a,s);return n==="HEAD"?new Response(null,{status:200,headers:{...Le,...L(t)}}):we(t,f,200)}let c=await Oo(t);if(!c)return we(t,{ok:!1,error:"missing_hackamap_graph",hint:"/knowgrph/imports/hackamap/{hackamap_api_graph.json,hackamap-graph.json} not found"},404);let l=Bo(c),p=on(l,a,s);return n==="HEAD"?new Response(null,{status:200,headers:{...Le,...L(t)}}):we(t,p,200)}r(ln,"onRequest");var Wo=!0,pn=600,dn={"content-type":"application/json; charset=utf-8","cache-control":`public, max-age=${pn}`};function ee(e,t,n={}){return new Response(JSON.stringify(t),{...n,headers:{...dn,...n.headers||{},...L(e)}})}r(ee,"jsonResponse");function Go(e){try{let t=new URL(String(e));return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}r(Go,"isHttpUrl");function ye(e){return String(e||"").trim().toLowerCase()}r(ye,"normalizeHost");function nt(e,{exact:t,suffixes:n}){let o=ye(e);return o?!!(Array.isArray(t)&&t.some(a=>o===ye(a))||Array.isArray(n)&&n.some(a=>o===ye(a)||o.endsWith(`.${ye(a)}`))):!1}r(nt,"isHostMatch");function Fo(e){let t=ye(e.hostname),n=e.toString();return nt(t,{suffixes:["linkedin.com"]})?new URL(`https://www.linkedin.com/embeds/oembed.json?url=${encodeURIComponent(n)}`):nt(t,{exact:["twitter.com","x.com"],suffixes:["twitter.com","x.com"]})?new URL(`https://publish.twitter.com/oembed?omit_script=1&url=${encodeURIComponent(n)}`):nt(t,{exact:["reddit.com"],suffixes:["reddit.com"]})?new URL(`https://www.reddit.com/oembed?url=${encodeURIComponent(n)}`):null}r(Fo,"buildOembedUpstreamUrl");async function zo({upstreamUrl:e}){return await fetch(e.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; OEmbedProxy/1.0)",accept:"application/json,text/json;q=0.9,*/*;q=0.1"},redirect:"follow",cf:{cacheTtl:pn,cacheEverything:!0}})}r(zo,"fetchJsonUpstream");async function un(e){let{request:t}=e,n=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(n==="OPTIONS")return new Response(null,{status:204,headers:{...L(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD"].includes(n))return ee(t,{ok:!1,error:"unsupported_method"},{status:405});if(o.searchParams.get("ping")==="1")return ee(t,{ok:!0,ping:!0});if(Wo)return ee(t,{ok:!1,error:"disabled_by_policy"},{status:200,headers:{"cache-control":"no-store"}});let a=o.searchParams.get("url")||"";if(!Go(a))return ee(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}});let s;try{s=new URL(a)}catch{return ee(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}let i=Fo(s);if(!i)return ee(t,{ok:!1,error:"unsupported_provider"},{status:400,headers:{"cache-control":"no-store"}});let c=await zo({upstreamUrl:i}),l=new Headers(c.headers);l.delete("content-length"),l.set("cache-control",c.ok?dn["cache-control"]:"no-store");for(let[f,u]of Object.entries(L(t)))l.set(f,u);if(n==="HEAD")return new Response(null,{status:c.status,headers:l});let p=await c.text();try{JSON.parse(p)}catch{return ee(t,{ok:!1,error:"invalid_upstream_json",status:c.status},{status:502,headers:{"cache-control":"no-store"}})}return l.set("content-type","application/json; charset=utf-8"),new Response(p,{status:c.status,headers:l})}r(un,"onRequest");var hn="/__chat_proxy",Ne="agnes-ai",Me="byteplus-modelark",Ue="miromind",qo=r(e=>{let t=W(e);return t==="openai"?"openai":t===Me||t==="byteplus"?Me:t===Ue||t==="miromind-api"?Ue:t===Ne||t==="agnes"||t==="agnes-ai-api"?Ne:t},"normalizeProviderId"),Yo=r(e=>W(e)===Oe,"isAgnesHost"),Jo=r(e=>{let t=W(e);return t===De||t===Qe},"isBytePlusHost"),Vo=r(e=>W(e)===Ce,"isMiroMindHost"),Xo=r(({provider:e,requestedUpstream:t,env:n})=>e==="openai"?"https://api.openai.com":e===Ue?t||`https://${Ce}`:e===Ne?t||`https://${Oe}`:e===Me?t||String(n.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim()||`https://${De}`:t||String(n.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim(),"pickUpstreamBase");async function mn(e){let{request:t,env:n}=e,o=String(t.method||"GET").toUpperCase(),a=new URL(t.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":B(t.headers,"origin")||"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD","POST"].includes(o))return H(t,{ok:!1,error:"Unsupported method"},405);let s=qo(B(t.headers,"x-kg-chat-provider")),i=Xo({provider:s,requestedUpstream:B(t.headers,"x-kg-chat-upstream"),env:n});if(!i)return H(t,{ok:!1,error:"Missing chat proxy upstream configuration"},500);let c;try{c=new URL(i)}catch{return H(t,{ok:!1,error:"Invalid chat proxy upstream configuration"},500)}let l=nn(n,{includeOpenAi:!0,includeMiroMind:!0,includeAgnes:!0,includeBytePlus:!0}),p=W(c.hostname);if(!l.has(p))return H(t,{ok:!1,error:"Chat proxy upstream host is not allowed"},403);if(!tn(p)&&c.protocol!=="https:")return H(t,{ok:!1,error:"Chat proxy requires HTTPS for non-local upstream hosts"},403);let f=s==="openai"||p===Ze,u=s===Ue||Vo(p),k=s===Ne||Yo(p),g=s===Me||Jo(p),P=B(t.headers,"x-kg-chat-api-key"),T=String(n.KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY||n.OPENAI_API_KEY||"").trim(),x=String(n.KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY||n.MIROMIND_API_KEY||"").trim(),I=String(n.KNOWGRPH_CHAT_PROXY_AGNES_API_KEY||n.AGNES_API_KEY||"").trim(),v=String(n.KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY||n.BYTEPLUS_API_KEY||"").trim(),C=(P||T).slice(0,512),A=(P||x).slice(0,512),j=(P||I).slice(0,512),M=(P||v).slice(0,512),w=g?M:k?j:u?A:C;if(f&&!C)return H(t,{ok:!1,error:"Missing OpenAI API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY or OPENAI_API_KEY)"},401);if(u&&!w)return H(t,{ok:!1,error:"Missing MiroMind API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY or MIROMIND_API_KEY)"},401);if(k&&!w)return H(t,{ok:!1,error:"Missing Agnes API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_AGNES_API_KEY or AGNES_API_KEY)"},401);if(g&&!w)return H(t,{ok:!1,error:"Missing BytePlus API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY or BYTEPLUS_API_KEY)"},401);if(o==="POST"&&!B(t.headers,"content-type").toLowerCase().includes("application/json"))return H(t,{ok:!1,error:"Chat proxy expects application/json payloads"},415);let y=a.pathname.startsWith(hn)&&a.pathname.slice(hn.length)||"/v1/chat/completions",h=y.startsWith("/")?y:`/${y}`,m=new URL(`${h}${a.search||""}`,c),b=new Headers,G=B(t.headers,"content-type"),V=B(t.headers,"accept");G&&b.set("content-type",G),V&&b.set("accept",V),(f||u||k||g)&&b.set("authorization",`Bearer ${w}`);let te=B(t.headers,"x-client-request-id").slice(0,512);te&&b.set("x-client-request-id",te);let ne=new AbortController,oe=Number(n.KNOWGRPH_CHAT_PROXY_TIMEOUT_MS),pe=Number.isFinite(oe)?Math.max(5e3,Math.min(18e4,Math.floor(oe))):9e4,re=setTimeout(()=>ne.abort(),pe);try{let N=await fetch(m.toString(),{method:o,headers:b,body:o==="GET"||o==="HEAD"?void 0:t.body,signal:ne.signal,redirect:"follow"}),$=new Headers(N.headers);$.delete("content-length"),$.delete("www-authenticate"),$.set("cache-control","no-store");let _e=B(t.headers,"origin");return _e&&($.set("access-control-allow-origin",_e),$.set("vary","Origin")),o==="HEAD"?new Response(null,{status:N.status,statusText:N.statusText,headers:$}):new Response(N.body,{status:N.status,statusText:N.statusText,headers:$})}catch(N){let $=N&&typeof N=="object"&&"message"in N?String(N.message||""):"",_e=ne.signal.aborted||/aborted|timeout/i.test($);return H(t,{ok:!1,error:$||"Failed to reach chat upstream"},_e?504:502)}finally{clearTimeout(re)}}r(mn,"onRequest");async function gn(e){let{request:t}=e,n=String(t.method||"GET").toUpperCase();if(n==="OPTIONS")return new Response(null,{status:204,headers:{...L(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(n!=="GET"&&n!=="HEAD")return new Response(JSON.stringify({ok:!1,error:"unsupported_method"}),{status:405,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...L(t)}});let o={ok:!0,service:"singabldr-pages",ts:new Date().toISOString()},a={"content-type":"application/json; charset=utf-8","cache-control":"no-store",...L(t)};return n==="HEAD"?new Response(null,{status:200,headers:a}):new Response(JSON.stringify(o),{status:200,headers:a})}r(gn,"onRequest");var Y="https://airvio.co";var ot="/knowgrph",F=`${Y}${ot}/`,Zo=`${Y}/`;var Qo=`${ot}/health`,fn=`${Y}${Qo}`,er="/.well-known/agent-card.json",rs=`${ot}/.well-known/agent-card.json`,tr=`${Y}${er}`,nr=`${Y}/api/storage/source-files`,or=`${Y}/api/storage/doc-default/{canonicalPath}`,rr=`${Y}/api/storage/doc/{workspaceId}/{canonicalPath}`;var wn="root-agent-ready-pages",yn=`# Knowgrph

Knowgrph is an agent-readable knowledge graph workspace served at ${F}.

## Discovery

- Crawl policy: ${F}robots.txt
- Sitemap: ${F}sitemap.xml
- API catalog: ${F}.well-known/api-catalog
- Auth.md registration instructions: ${Zo}auth.md
- Health: ${fn}
- MCP server card: ${F}.well-known/mcp/server-card.json
- A2A Agent Card: ${tr}
- Agent skills: ${F}.well-known/agent-skills/index.json
- LLM reference: ${F}llms.txt

## APIs

- Agent-ready status: ${fn}
- HTTP MCP: ${F}mcp
- Storage API: ${Y}/api/storage/
- Source Files index: ${nr}
- Default Source File documents: ${or}
- Workspace Source File documents: ${rr}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes five read-only tools for published Source Files, shared documents, and agent-surface inspection.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared five-tool WebMCP surface on \`${F}\` HTML routes.
`,Sn=r(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),_n=r(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(n=>n.trim().startsWith("text/markdown")),"wantsMarkdown"),kn=r((e,t)=>{let n=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&n.headers.set("x-knowgrph-route-owner",o),a&&n.headers.set("x-knowgrph-route-tag",a),n},"withAgentReadyRouteHeaders");async function Pn(e){let{request:t}=e,n=String(t.method||"GET").toUpperCase();if(n!=="GET"&&n!=="HEAD"||!_n(t))return e.next();let o=kn(Sn(yn),{owner:wn,tag:"root-homepage-markdown"});return n==="HEAD"?new Response(null,o):o}r(Pn,"onRequest");var R=[{routePath:"/api/llm/chat/completions",mountPath:"/api/llm/chat",method:"",middlewares:[],modules:[st]},{routePath:"/api/llm/models",mountPath:"/api/llm",method:"",middlewares:[],modules:[it]},{routePath:"/api/llm/responses",mountPath:"/api/llm",method:"",middlewares:[],modules:[ct]},{routePath:"/knowgrph/doc-default/:path*",mountPath:"/knowgrph/doc-default",method:"",middlewares:[],modules:[zt]},{routePath:"/knowgrph/doc/:path*",mountPath:"/knowgrph/doc",method:"",middlewares:[],modules:[qt]},{routePath:"/knowgrph/share/:path*",mountPath:"/knowgrph/share",method:"",middlewares:[],modules:[Yt]},{routePath:"/api/link-preview",mountPath:"/api",method:"GET",middlewares:[],modules:[Vt]},{routePath:"/api/link-proxy",mountPath:"/api",method:"GET",middlewares:[],modules:[Zt]},{routePath:"/api/graph",mountPath:"/api",method:"",middlewares:[],modules:[ln]},{routePath:"/api/oembed",mountPath:"/api",method:"",middlewares:[],modules:[un]},{routePath:"/__chat_proxy/:path*",mountPath:"/__chat_proxy",method:"",middlewares:[],modules:[mn]},{routePath:"/knowgrph/:path*",mountPath:"/knowgrph",method:"",middlewares:[],modules:[q]},{routePath:"/health",mountPath:"/",method:"",middlewares:[],modules:[gn]},{routePath:"/",mountPath:"/",method:"",middlewares:[],modules:[Pn]}];function ar(e){for(var t=[],n=0;n<e.length;){var o=e[n];if(o==="*"||o==="+"||o==="?"){t.push({type:"MODIFIER",index:n,value:e[n++]});continue}if(o==="\\"){t.push({type:"ESCAPED_CHAR",index:n++,value:e[n++]});continue}if(o==="{"){t.push({type:"OPEN",index:n,value:e[n++]});continue}if(o==="}"){t.push({type:"CLOSE",index:n,value:e[n++]});continue}if(o===":"){for(var a="",s=n+1;s<e.length;){var i=e.charCodeAt(s);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){a+=e[s++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(n));t.push({type:"NAME",index:n,value:a}),n=s;continue}if(o==="("){var c=1,l="",s=n+1;if(e[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;){if(e[s]==="\\"){l+=e[s++]+e[s++];continue}if(e[s]===")"){if(c--,c===0){s++;break}}else if(e[s]==="("&&(c++,e[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));l+=e[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(n));if(!l)throw new TypeError("Missing pattern at ".concat(n));t.push({type:"PATTERN",index:n,value:l}),n=s;continue}t.push({type:"CHAR",index:n,value:e[n++]})}return t.push({type:"END",index:n,value:""}),t}r(ar,"lexer");function sr(e,t){t===void 0&&(t={});for(var n=ar(e),o=t.prefixes,a=o===void 0?"./":o,s=t.delimiter,i=s===void 0?"/#?":s,c=[],l=0,p=0,f="",u=r(function(h){if(p<n.length&&n[p].type===h)return n[p++].value},"tryConsume"),k=r(function(h){var m=u(h);if(m!==void 0)return m;var b=n[p],G=b.type,V=b.index;throw new TypeError("Unexpected ".concat(G," at ").concat(V,", expected ").concat(h))},"mustConsume"),g=r(function(){for(var h="",m;m=u("CHAR")||u("ESCAPED_CHAR");)h+=m;return h},"consumeText"),P=r(function(h){for(var m=0,b=i;m<b.length;m++){var G=b[m];if(h.indexOf(G)>-1)return!0}return!1},"isSafe"),T=r(function(h){var m=c[c.length-1],b=h||(m&&typeof m=="string"?m:"");if(m&&!b)throw new TypeError('Must have text between two parameters, missing text after "'.concat(m.name,'"'));return!b||P(b)?"[^".concat(J(i),"]+?"):"(?:(?!".concat(J(b),")[^").concat(J(i),"])+?")},"safePattern");p<n.length;){var x=u("CHAR"),I=u("NAME"),v=u("PATTERN");if(I||v){var C=x||"";a.indexOf(C)===-1&&(f+=C,C=""),f&&(c.push(f),f=""),c.push({name:I||l++,prefix:C,suffix:"",pattern:v||T(C),modifier:u("MODIFIER")||""});continue}var A=x||u("ESCAPED_CHAR");if(A){f+=A;continue}f&&(c.push(f),f="");var j=u("OPEN");if(j){var C=g(),M=u("NAME")||"",w=u("PATTERN")||"",y=g();k("CLOSE"),c.push({name:M||(w?l++:""),pattern:M&&!w?T(C):w,prefix:C,suffix:y,modifier:u("MODIFIER")||""});continue}k("END")}return c}r(sr,"parse");function Se(e,t){var n=[],o=Rn(e,n,t);return ir(o,n,t)}r(Se,"match");function ir(e,t,n){n===void 0&&(n={});var o=n.decode,a=o===void 0?function(s){return s}:o;return function(s){var i=e.exec(s);if(!i)return!1;for(var c=i[0],l=i.index,p=Object.create(null),f=r(function(k){if(i[k]===void 0)return"continue";var g=t[k-1];g.modifier==="*"||g.modifier==="+"?p[g.name]=i[k].split(g.prefix+g.suffix).map(function(P){return a(P,g)}):p[g.name]=a(i[k],g)},"_loop_1"),u=1;u<i.length;u++)f(u);return{path:c,index:l,params:p}}}r(ir,"regexpToFunction");function J(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}r(J,"escapeString");function xn(e){return e&&e.sensitive?"":"i"}r(xn,"flags");function cr(e,t){if(!t)return e;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,a=n.exec(e.source);a;)t.push({name:a[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),a=n.exec(e.source);return e}r(cr,"regexpToRegexp");function lr(e,t,n){var o=e.map(function(a){return Rn(a,t,n).source});return new RegExp("(?:".concat(o.join("|"),")"),xn(n))}r(lr,"arrayToRegexp");function pr(e,t,n){return dr(sr(e,n),t,n)}r(pr,"stringToRegexp");function dr(e,t,n){n===void 0&&(n={});for(var o=n.strict,a=o===void 0?!1:o,s=n.start,i=s===void 0?!0:s,c=n.end,l=c===void 0?!0:c,p=n.encode,f=p===void 0?function(m){return m}:p,u=n.delimiter,k=u===void 0?"/#?":u,g=n.endsWith,P=g===void 0?"":g,T="[".concat(J(P),"]|$"),x="[".concat(J(k),"]"),I=i?"^":"",v=0,C=e;v<C.length;v++){var A=C[v];if(typeof A=="string")I+=J(f(A));else{var j=J(f(A.prefix)),M=J(f(A.suffix));if(A.pattern)if(t&&t.push(A),j||M)if(A.modifier==="+"||A.modifier==="*"){var w=A.modifier==="*"?"?":"";I+="(?:".concat(j,"((?:").concat(A.pattern,")(?:").concat(M).concat(j,"(?:").concat(A.pattern,"))*)").concat(M,")").concat(w)}else I+="(?:".concat(j,"(").concat(A.pattern,")").concat(M,")").concat(A.modifier);else{if(A.modifier==="+"||A.modifier==="*")throw new TypeError('Can not repeat "'.concat(A.name,'" without a prefix and suffix'));I+="(".concat(A.pattern,")").concat(A.modifier)}else I+="(?:".concat(j).concat(M,")").concat(A.modifier)}}if(l)a||(I+="".concat(x,"?")),I+=n.endsWith?"(?=".concat(T,")"):"$";else{var y=e[e.length-1],h=typeof y=="string"?x.indexOf(y[y.length-1])>-1:y===void 0;a||(I+="(?:".concat(x,"(?=").concat(T,"))?")),h||(I+="(?=".concat(x,"|").concat(T,")"))}return new RegExp(I,xn(n))}r(dr,"tokensToRegexp");function Rn(e,t,n){return e instanceof RegExp?cr(e,t):Array.isArray(e)?lr(e,t,n):pr(e,t,n)}r(Rn,"pathToRegexp");var $e=/[.+?^${}()|[\]\\]/g;function*ur(e){let t=new URL(e.url).pathname;for(let n of[...R].reverse()){if(n.method&&n.method!==e.method)continue;let o=Se(n.routePath.replace($e,"\\$&"),{end:!1}),a=Se(n.mountPath.replace($e,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i)for(let c of n.middlewares.flat())yield{handler:c,params:s.params,path:i.path}}for(let n of R){if(n.method&&n.method!==e.method)continue;let o=Se(n.routePath.replace($e,"\\$&"),{end:!0}),a=Se(n.mountPath.replace($e,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i&&n.modules.length){for(let c of n.modules.flat())yield{handler:c,params:s.params,path:s.path};break}}}r(ur,"executeRequest");var Cs={async fetch(e,t,n){let o=e,a=ur(o),s={},i=!1,c=r(async(l,p)=>{if(l!==void 0){let u=l;typeof l=="string"&&(u=new URL(l,o.url).toString()),o=new Request(u,p)}let f=a.next();if(f.done===!1){let{handler:u,params:k,path:g}=f.value,P={request:new Request(o.clone()),functionPath:g,next:c,params:k,get data(){return s},set data(x){if(typeof x!="object"||x===null)throw new Error("context.data must be an object");s=x},env:t,waitUntil:n.waitUntil.bind(n),passThroughOnException:r(()=>{i=!0},"passThroughOnException")},T=await u(P);if(!(T instanceof Response))throw new Error("Your Pages function should return a Response");return rt(T)}else{let u=await t.ASSETS.fetch(o);return rt(u)}},"next");try{return await c()}catch(l){if(i){let p=await t.ASSETS.fetch(o);return rt(p)}throw l}}},rt=r(e=>new Response([101,204,205,304].includes(e.status)?null:e.body,e),"cloneResponse");export{Cs as default};
