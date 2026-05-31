var Bn=Object.defineProperty;var r=(e,t)=>Bn(e,"name",{value:t,configurable:!0});var Wn="https://api.openai.com/v1";var dt=Object.freeze(["gpt-5.4-nano","gpt-4o-mini"]);function mt(e){return String(e||"").trim()}r(mt,"normalizeOrigin");function Gn(e){let t=mt(e);return t?t.startsWith("http://localhost:")||t.startsWith("http://127.0.0.1:")||t.startsWith("http://0.0.0.0:"):!1}r(Gn,"isAllowedOrigin");function Gt(e){let t=mt(e);return Gn(t)?{"access-control-allow-origin":t,vary:"Origin","access-control-allow-methods":"GET, POST, OPTIONS","access-control-allow-headers":"content-type, x-flowinfish-session","access-control-max-age":"86400"}:{}}r(Gt,"corsHeaders");function V(e,{status:t=200,origin:o=""}={}){return new Response(JSON.stringify(e),{status:t,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...Gt(o)}})}r(V,"json");async function De(e,{maxBytes:t=1e6}={}){let o=await e.arrayBuffer();if(o.byteLength>t)throw new Error("Request too large");let n=new TextDecoder().decode(o);try{return n?JSON.parse(n):{}}catch{throw new Error("Invalid JSON body")}}r(De,"readJsonBody");function zn(e){let t=String(e?.model||"").trim();if(!t)throw new Error("Missing model");if(!dt.includes(t))throw new Error(`Model not allowed: ${t}`);return t}r(zn,"enforceAllowedModel");function qn(e){let t=String(e.OPENAI_API_KEY||"").trim();if(!t)throw new Error("Missing server OPENAI_API_KEY");return t}r(qn,"requireOpenAiKey");async function Ke({request:e,env:t,pathname:o,payload:n}){let a=qn(t);zn(n);let i=`${mt(t.OPENAI_API_BASE)||Wn}${o}`,c=await fetch(i,{method:"POST",headers:{authorization:`Bearer ${a}`,"content-type":"application/json"},body:JSON.stringify(n)}),l=new Headers(c.headers);return l.delete("content-length"),l.set("cache-control","no-store"),new Response(c.body,{status:c.status,headers:l})}r(Ke,"proxyToOpenAi");function ye(e){let t=e.headers.get("origin")||"";return new Response(null,{status:204,headers:{...Gt(t)}})}r(ye,"handleOptions");async function zt(e){let{request:t,env:o}=e,n=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(n==="OPTIONS")return ye(t);if(n!=="POST")return V({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return V({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await De(t);return await Ke({request:t,env:o,pathname:"/chat/completions",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return V({ok:!1,error:i},{status:400,origin:a})}}r(zt,"onRequest");var Vn=r(e=>{let t=2166136261;for(let o=0;o<e.length;o+=1)t^=e.charCodeAt(o),t=Math.imul(t,16777619);return t>>>0},"fnv1a32");function qt(e){return Vn(String(e??""))}r(qt,"hashString32");function Ae(e){return qt(e).toString(16).padStart(8,"0")}r(Ae,"hashStringToHex");var Yn=r(e=>e==null?"":typeof e=="boolean"?e?"1":"0":typeof e=="number"?Number.isFinite(e)?String(e):"":String(e),"normalizePrimitive"),Jn=r(e=>e.map(Yn).join("|"),"buildSignatureText"),je=r(e=>Ae(Jn(e)),"hashSignatureParts");var He={checkoutSession:"/api/payments/stripe/checkout/session",webhook:"/api/payments/stripe/webhook"};var Se={restrictedKey:"STRIPE_RESTRICTED_KEY",secretKey:"STRIPE_SECRET_KEY",webhookSecret:"STRIPE_WEBHOOK_SECRET",checkoutPriceId:"STRIPE_CHECKOUT_PRICE_ID",checkoutCurrency:"STRIPE_CHECKOUT_CURRENCY",checkoutUnitAmount:"STRIPE_CHECKOUT_UNIT_AMOUNT",checkoutProductName:"STRIPE_CHECKOUT_PRODUCT_NAME",checkoutReturnOrigin:"STRIPE_CHECKOUT_RETURN_ORIGIN"};var js=[`Configure Stripe secrets on the server runtime that owns ${He.checkoutSession}.`,"Cloudflare Pages project variables are available to Pages builds/functions, but they are not read by separate Worker routes.","Stripe Projects can provision and sync credentials locally; copy only required server secret names into the payment server runtime."].join(" "),Hs=[`Payment server runtime for ${He.checkoutSession}`,"not Cloudflare Pages project variables"].join("; "),Xn=[Se.restrictedKey,Se.secretKey].join(" or "),Fs=[Se.checkoutPriceId,`${Se.checkoutCurrency} + ${Se.checkoutUnitAmount} + ${Se.checkoutProductName}`].join(" or "),Bs=[`Missing server-managed Stripe key. Set ${Xn} on the payment server runtime.`,"Pages project variables alone do not satisfy separate Worker routes."].join(" ");var Ee="2026-01-30",Yt="1000",Jt="USDC",ht="https://x402.org/facilitator",Xt="eip155:84532",Zn="$0.001",be="2026-04-08",Vt="https://ucp.dev/2026-04-08/specification/overview/",Qn=["checkout"],er=["rest"],R={acpDiscovery:"/.well-known/acp.json",acpConfig:"/.well-known/acp-config",ucpProfile:"/.well-known/ucp",mppOpenApi:"/openapi.json",x402ApiRoot:"/api",x402ApiV1:"/api/v1",checkoutSessions:"/checkout/sessions",x402PaymentRequired:"/api/payments/commerce/x402",commerceWebhook:"/api/payments/commerce/webhook",commerceProofArtifact:"/api/payments/commerce/harness-proof.json",commerceTraceArtifact:"/api/payments/commerce/trace.jsonl",openboxIngest:"/api/payments/commerce/openbox/ingest",web3Settle:"/api/payments/commerce/web3/settle"},Ys=[R.x402ApiRoot,R.x402ApiV1,R.x402PaymentRequired],te={sellerId:"SELLER_ID",checkoutBaseUrl:"CHECKOUT_BASE_URL",web3Enabled:"WEB3_ENABLED",web3DepositAddress:"WEB3_DEPOSIT_ADDRESS",baseRpcUrl:"BASE_RPC_URL",baseConfirmationBlocks:"BASE_CONFIRMATION_BLOCKS",easAttestUrl:"EAS_ATTEST_URL",openboxApiUrl:"OPENBOX_API_URL",openboxIngestUrl:"OPENBOX_INGEST_URL",openboxApiKey:"OPENBOX_API_KEY",stripeDelegatePaymentUrl:"STRIPE_DELEGATE_PAYMENT_URL",acpBearerToken:"ACP_BEARER_TOKEN",x402PayToAddress:"X402_PAY_TO_ADDRESS",x402Network:"X402_NETWORK",x402Asset:"X402_ASSET",x402Amount:"X402_AMOUNT",x402FacilitatorUrl:"X402_FACILITATOR_URL",x402Price:"X402_PRICE"},oe=r((e,t)=>String(e[t]||"").trim(),"readEnvString"),Zt=r((e,t)=>{let o=oe(e,te.sellerId);if(o)return o;try{return new URL(t).host}catch{return"knowgrph-seller"}},"readAgenticCommerceSellerId");var Qt=r(e=>{let t=oe(e,te.web3Enabled).toLowerCase();return t?t==="0"||t==="false"||t==="no"?!1:t==="1"||t==="true"||t==="yes":!0},"isAgenticCommerceWeb3Enabled");var ce=r((e,t)=>je(["agentic-commerce",e,...t]),"buildAgenticCommerceSemanticKey"),Te=r(e=>String(e||"").trim().replace(/\/+$/g,""),"normalizeAgenticCommerceBaseUrl"),W=r((e,t)=>`${Te(e)}${t}`,"buildAgenticCommerceUrl"),N=r((e,t,o,n,a=n.startsWith("/")?n:null)=>({id:t,label:o,value:n,path:a,semanticKey:ce("mainpanel-commerce-readiness-row",[e,t,o,n,a||""])}),"buildAgenticCommerceMainPanelReadinessRow"),_e=r((e,t,o)=>({id:e,title:t,rows:o}),"buildAgenticCommerceMainPanelReadinessSection"),tr=r(()=>{let e=[_e("overview","Overview",[N("overview","acp-discovery","ACP discovery",`GET ${R.acpDiscovery}`,R.acpDiscovery),N("overview","acp-config","ACP config",`GET ${R.acpConfig}`,R.acpConfig),N("overview","api-version","API version",Ee,null)]),_e("discovery","Discovery",[N("discovery","ucp-profile","UCP profile",R.ucpProfile),N("discovery","mpp-openapi","MPP OpenAPI",R.mppOpenApi),N("discovery","x402-payment-required","x402 payment required",R.x402PaymentRequired),N("discovery","x402-api-root","x402 API root",R.x402ApiRoot)]),_e("sessions","Sessions",[N("sessions","checkout-sessions","Checkout sessions",R.checkoutSessions),N("sessions","stripe-webhook","Stripe webhook",He.webhook)]),_e("web3","Web3",[N("web3","settle","Settle",R.web3Settle),N("web3","signals","Signals","Base RPC confirmation + EAS attestation",null)]),_e("governance","Governance",[N("governance","openbox-ingest","OpenBOX ingest",R.openboxIngest),N("governance","risk-source","Risk source","OpenBOX risk signal",null)]),_e("proofs","Proofs",[N("proofs","harness-proof","Harness proof",R.commerceProofArtifact),N("proofs","trace-artifact","Trace artifact",R.commerceTraceArtifact)])],t=e.flatMap(a=>a.rows),o=t.map(a=>a.path||"").filter(a=>a.length>0),n=t.filter(a=>!a.path).map(a=>`${a.label}: ${a.value}`);return{surface:"mainpanel-commerce",semanticKey:ce("mainpanel-commerce-readiness",[Ee,...t.map(a=>a.semanticKey)]),sections:e,routePaths:o,routeCount:o.length,signals:n}},"buildAgenticCommerceMainPanelReadiness"),Js=tr(),or=r((e,t)=>{let o=oe(e,te.web3DepositAddress);if(/^0x[0-9a-fA-F]{40}$/.test(o))return o;let n=ce("deposit-address",[t,"0"]),a=ce("deposit-address",[t,"1"]),s=ce("deposit-address",[t,"2"]),i=ce("deposit-address",[t,"3"]),c=ce("deposit-address",[t,"4"]);return`0x${n}${a}${s}${i}${c}`.slice(0,42)},"buildAgenticCommerceDepositAddress");var eo=r((e,t="x402-payment-required")=>{let o=oe(e,te.x402PayToAddress);return/^0x[0-9a-fA-F]{40}$/.test(o)?o:or(e,t)},"readAgenticCommerceX402PayToAddress"),nr=/^[a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,64}$/,to=r(e=>{let t=oe(e,te.x402Network);return nr.test(t)?t:Xt},"readAgenticCommerceX402Network"),oo=r(e=>oe(e,te.x402Asset)||Jt,"readAgenticCommerceX402Asset"),no=r(e=>{let t=oe(e,te.x402Amount);return/^[1-9][0-9]*$/.test(t)?t:Yt},"readAgenticCommerceX402Amount");var ro=r(e=>{let t=oe(e,te.x402FacilitatorUrl);try{let o=new URL(t||ht);return o.protocol==="https:"||o.protocol==="http:"?o.toString().replace(/\/+$/g,""):ht}catch{return ht}},"readAgenticCommerceX402FacilitatorUrl"),ao=r(e=>{let t=Te(e.baseUrl);return{protocol:{name:"acp",version:Ee,supported_versions:[Ee],documentation_url:"https://agenticcommerce.dev"},api_base_url:t,transports:[...er],capabilities:{services:[...Qn],...e.web3Enabled?{extensions:[{name:"x-web3"}]}:{}},links:{config:W(t,R.acpConfig),ucp:W(t,R.ucpProfile),mpp:W(t,R.mppOpenApi),x402:W(t,R.x402PaymentRequired)}}},"buildAgenticCommerceAcpDiscovery"),so=r(e=>{let t=Te(e.baseUrl),o={acp:W(t,R.acpDiscovery),api:W(t,R.x402ApiRoot),checkout_sessions:W(t,R.checkoutSessions),mpp_openapi:W(t,R.mppOpenApi),proof:W(t,R.commerceProofArtifact),trace:W(t,R.commerceTraceArtifact),x402_payment_required:W(t,R.x402PaymentRequired)},n={checkout_sessions:!0,content_payments:!0,proof_artifacts:!0,risk_signals:!0,web3_settlement:e.web3Enabled},a={"dev.ucp.shopping":[{version:be,spec:Vt,transport:"rest",endpoint:o.api,schema:"https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json"}]};return{ucp:{version:be,protocol_version:be,services:a,capabilities:{"dev.ucp.shopping.checkout":[{version:be,spec:"https://ucp.dev/2026-04-08/specification/checkout/",schema:"https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"}]},payment_handlers:{},endpoints:o},protocol_version:be,protocol:{name:"ucp",version:be},seller:{id:e.sellerId},services:[{id:"knowgrph-content-payments",type:"content-payments",endpoints:{x402:o.x402_payment_required,checkout_sessions:o.checkout_sessions,proof:o.proof,trace:o.trace}}],capabilities:n,endpoints:o,spec_urls:[Vt],schema_urls:["https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json","https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"]}},"buildAgenticCommerceUcpProfile"),io=r(e=>{let t=Te(e.baseUrl);return{openapi:"3.1.0",info:{title:"Knowgrph Machine Payment Protocol",version:Ee,description:"Machine-readable payable-operation discovery for Knowgrph commerce routes."},servers:[{url:t}],paths:{[R.x402PaymentRequired]:{get:{operationId:"getKnowgrphX402PaymentRequirement",summary:"Return x402 payment requirements for an agent-readable paid resource.","x-payment-info":{intent:"charge",method:"x402",amount:Zn,currency:"usdc"},responses:{402:{description:"Payment Required"}}}},[R.checkoutSessions]:{post:{operationId:"createKnowgrphCommerceCheckoutSession",summary:"Create an agentic commerce checkout session.","x-payment-info":{intent:"session",method:"stripe",amount:"dynamic",currency:"request.currency"},responses:{201:{description:"Checkout session created"}}}}}}},"buildAgenticCommerceMppOpenApi"),co=r(e=>{let t=Te(e.baseUrl),o=W(t,R.x402PaymentRequired),n=String(e.amount||Yt);return{x402Version:2,error:"Payment required",resource:{url:o,description:"Knowgrph agentic commerce paid-resource readiness probe",mimeType:"application/json"},accepts:[{scheme:"exact",network:String(e.network||Xt),amount:n,maxAmountRequired:n,asset:String(e.asset||Jt),resource:o,mimeType:"application/json",payTo:e.payTo,maxTimeoutSeconds:300,extra:{name:"USDC",version:"2",resourceUrl:o,...e.facilitatorUrl?{facilitatorUrl:e.facilitatorUrl}:{}}}]}},"buildAgenticCommerceX402PaymentRequired");var rr=r(e=>JSON.stringify(e,null,2),"jsonBody"),ar=r(e=>String(e||"").trim().replace(/\/+$/g,""),"trimOrigin"),sr=r(e=>typeof btoa=="function"?btoa(e):typeof Buffer<"u"?Buffer.from(e).toString("base64"):"","encodeBase64"),ir=r((e,t)=>{try{return new URL(e).origin}catch{return ar(t)}},"rootOriginFromRequest"),ft=r((e={})=>{let t=ir(e.requestUrl,e.origin),o=e.env||{},n=Zt(o,`${t}/`),a=Qt(o),s=co({baseUrl:t,payTo:eo(o),network:to(o),asset:oo(o),amount:no(o),facilitatorUrl:ro(o)});return{acpDiscovery:ao({sellerId:n,baseUrl:t,web3Enabled:a}),ucpProfile:so({sellerId:n,baseUrl:t,web3Enabled:a}),mppOpenApi:io({baseUrl:t}),x402PaymentRequired:s}},"buildKnowgrphCommerceDiscovery");var lo=r((e,t={})=>{let o=ft({requestUrl:e?.url,env:t}).x402PaymentRequired,n=sr(JSON.stringify(o));return new Response(rr(o),{status:402,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*",...n?{"payment-required":n}:{}}})},"buildKnowgrphX402PaymentRequiredResponse");async function po(e){return lo(e.request,e.env||{})}r(po,"onRequest");async function uo(e){let{request:t}=e,o=String(t.method||"GET").toUpperCase(),n=t.headers.get("origin")||"";return o==="OPTIONS"?ye(t):o!=="GET"&&o!=="HEAD"?V({ok:!1,error:"Method not allowed"},{status:405,origin:n}):V({ok:!0,models:dt.map(a=>({model:a,display_name:a}))},{status:200,origin:n})}r(uo,"onRequest");async function mo(e){let{request:t,env:o}=e,n=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(n==="OPTIONS")return ye(t);if(n!=="POST")return V({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return V({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await De(t);return await Ke({request:t,env:o,pathname:"/responses",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return V({ok:!1,error:i},{status:400,origin:a})}}r(mo,"onRequest");var p=Object.freeze({listSourceFiles:"list_source_files",readSourceFile:"read_source_file",readSharedDocument:"read_shared_document",inspectSharedDocumentStructure:"inspect_shared_document_structure",inspectLocalSettingsChatReadiness:"inspect_local_settings_chat_readiness",inspectLocalMainPanelState:"inspect_local_mainpanel_state",inspectLocalEditorWorkspaceState:"inspect_local_editor_workspace_state",inspectLocalChatPipelineState:"inspect_local_chat_pipeline_state",inspectLocalMainPanelChatCanvasPipeline:"inspect_local_mainpanel_chat_canvas_pipeline",inspectLocalWorkspaceDocument:"inspect_local_workspace_document",inspectLocalCanvasTopology:"inspect_local_canvas_topology",inspectLocalCanvasSnapshot:"inspect_local_canvas_snapshot",inspectLocal3dCameraPose:"inspect_local_3d_camera_pose",inspectLocal3dLayoutPositions:"inspect_local_3d_layout_positions",inspectLocal2dZoomViewport:"inspect_local_2d_zoom_viewport",inspectLocalSourceFilesSnapshot:"inspect_local_source_files_snapshot",inspectAgentSurface:"inspect_agent_surface"}),cr="knowgrph",L=Object.freeze({readOnlyHint:!0}),$=r((e,t=cr)=>`${String(t||"").trim()}.${String(e||"").trim()}`,"buildKnowgrphWebMcpToolName"),gt=r((e={})=>{let t=String(e.defaultWorkspaceId||"").trim(),o=e.includeBrowserOnlyTools===!0;return[{name:p.listSourceFiles,webName:$(p.listSourceFiles),title:"List Source Files",description:"List published Knowgrph Source Files.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:L},{name:p.readSourceFile,webName:$(p.readSourceFile),title:"Read Source File",description:"Read published Knowgrph Editor Workspace markdown content. Defaults to the canonical docs workspace when workspaceId is omitted.",inputSchema:{type:"object",additionalProperties:!1,required:["canonicalPath"],properties:{canonicalPath:{type:"string"},workspaceId:t?{type:"string",default:t}:{type:"string"}}},annotations:L},{name:p.readSharedDocument,webName:$(p.readSharedDocument),title:"Read Shared Document",description:"Read published Knowgrph markdown content from a share token or public Knowgrph share/document URL.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:L},{name:p.inspectSharedDocumentStructure,webName:$(p.inspectSharedDocumentStructure),title:"Inspect Shared Document Structure",description:"Inspect published Knowgrph shared-document frontmatter and body structure from a share token or public Knowgrph share/document URL.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:L},...o?[{name:p.inspectLocalSettingsChatReadiness,webName:$(p.inspectLocalSettingsChatReadiness),title:"Inspect Local Settings Chat Readiness",description:"Inspect the active browser-local Knowgrph SettingsView chat readiness state for MainPanel MCP, Integrations, and Commerce, including provider, routing, and model discovery status.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:L},{name:p.inspectLocalMainPanelState,webName:$(p.inspectLocalMainPanelState),title:"Inspect Local MainPanel State",description:"Inspect the active browser-local Knowgrph MainPanel tab, search, and shared action state for MCP, Integrations, and Commerce readiness.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:L},{name:p.inspectLocalEditorWorkspaceState,webName:$(p.inspectLocalEditorWorkspaceState),title:"Inspect Local Editor Workspace State",description:"Inspect the active browser-local Knowgrph Editor Workspace and Markdown pane state, including pane visibility and live draft/frontmatter structure.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:L},{name:p.inspectLocalChatPipelineState,webName:$(p.inspectLocalChatPipelineState),title:"Inspect Local Chat Pipeline State",description:"Inspect the active browser-local Knowgrph FloatingPanel chat runtime, including streaming, workspace follow path, and LLM-to-workspace pipeline state.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:L},{name:p.inspectLocalMainPanelChatCanvasPipeline,webName:$(p.inspectLocalMainPanelChatCanvasPipeline),title:"Inspect Local MainPanel Chat Canvas Pipeline",description:"Inspect the active browser-local Knowgrph E2E readiness path from MainPanel MCP, Integrations, and Commerce through FloatingPanel Chat, workspace markdown/frontmatter, and canvas topology.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:L},{name:p.inspectLocalWorkspaceDocument,webName:$(p.inspectLocalWorkspaceDocument),title:"Inspect Local Workspace Document",description:"Inspect the active browser-local Knowgrph workspace markdown document structure without reading published storage routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:L},{name:p.inspectLocalCanvasTopology,webName:$(p.inspectLocalCanvasTopology),title:"Inspect Local Canvas Topology",description:"Inspect the active browser-local Knowgrph canvas topology summary from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:L},{name:p.inspectLocalCanvasSnapshot,webName:$(p.inspectLocalCanvasSnapshot),title:"Inspect Local Canvas Snapshot",description:"Inspect the active browser-local Knowgrph canvas SVG snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:L},{name:p.inspectLocal3dCameraPose,webName:$(p.inspectLocal3dCameraPose),title:"Inspect Local 3D Camera Pose",description:"Inspect the active browser-local Knowgrph 3D camera pose from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:L},{name:p.inspectLocal3dLayoutPositions,webName:$(p.inspectLocal3dLayoutPositions),title:"Inspect Local 3D Layout Positions",description:"Inspect the active browser-local Knowgrph 3D layout positions from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:L},{name:p.inspectLocal2dZoomViewport,webName:$(p.inspectLocal2dZoomViewport),title:"Inspect Local 2D Zoom Viewport",description:"Inspect the active browser-local Knowgrph 2D zoom and viewport state from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:L},{name:p.inspectLocalSourceFilesSnapshot,webName:$(p.inspectLocalSourceFilesSnapshot),title:"Inspect Local Source Files Snapshot",description:"Inspect the active browser-local Knowgrph Source Files runtime snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:L}]:[],{name:p.inspectAgentSurface,webName:$(p.inspectAgentSurface),title:"Inspect Agent Surface",description:"Inspect the deployed Knowgrph agent-ready discovery surface, including health, OpenAPI, MCP, and skill metadata.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:L}]},"buildKnowgrphAgentReadyToolContracts");var ho=r((e={})=>{let t=String(e.baseUrl||"").replace(/\/+$/,""),o=t?new URL(`${t}/`).origin:"";return{baseUrl:t,healthUrl:`${t}/health`,mcpUrl:`${t}/mcp`,apiCatalogUrl:`${t}/.well-known/api-catalog`,openApiUrl:`${t}/.well-known/openapi.json`,mcpServerCardUrl:`${t}/.well-known/mcp/server-card.json`,agentCardUrl:`${t}/.well-known/agent-card.json`,agentSkillsUrl:`${t}/.well-known/agent-skills/index.json`,commerceUrls:{acpDiscoveryUrl:`${o}/.well-known/acp.json`,ucpProfileUrl:`${o}/.well-known/ucp`,mppOpenApiUrl:`${o}/openapi.json`,x402PaymentRequiredUrl:`${o}/api/payments/commerce/x402`},health:e.health,apiCatalog:e.apiCatalog,openApi:e.openApi,mcpServerCard:e.mcpServerCard,agentCard:e.agentCard,agentSkills:e.agentSkills,commerce:e.commerce}},"buildAgentSurfaceInspectionPayload");var fo=r((e={})=>{let t=e.toolNames||{},o=String(e.defaultWorkspaceId||"").trim(),n=e.buildStorageDocPath,a=e.fetchSourceFilesIndexResponse,s=e.fetchStorageMarkdownResponse,i=e.resolveSharedDocumentInput,c=e.inspectSharedDocumentStructure,l=e.buildAgentSurfaceInspection,u=r(g=>String(g||"").trim(),"normalizeString");if(typeof n!="function")throw new Error("buildStorageDocPath is required");if(typeof a!="function")throw new Error("fetchSourceFilesIndexResponse is required");if(typeof s!="function")throw new Error("fetchStorageMarkdownResponse is required");if(typeof i!="function")throw new Error("resolveSharedDocumentInput is required");if(typeof c!="function")throw new Error("inspectSharedDocumentStructure is required");if(typeof l!="function")throw new Error("buildAgentSurfaceInspection is required");let f=r(async(g={})=>{let b=u(g.canonicalPath);if(!b)throw new Error("canonicalPath is required");let E=u(g.workspaceId),x=await s(n(b,E));if(!x.ok)throw new Error(`read_source_file failed with ${x.status}`);return{workspaceId:E||o,canonicalPath:b,markdown:await x.text()}},"readSourceFile"),d=r(async(g={})=>{let b=i(g);if(!b)throw new Error("shareToken or shareUrl must resolve to a published Knowgrph document");let E=u(b.workspaceId),x=u(b.canonicalPath),C=await s(n(x,E));if(!C.ok)throw new Error(`read_shared_document failed with ${C.status}`);return{workspaceId:E||o,canonicalPath:x,markdown:await C.text()}},"readSharedDocument"),_=r(async(g={})=>{let b=await d(g);return c(b)},"inspectSharedDocument");return{[t.listSourceFiles]:async()=>{let g=await a();if(!g.ok)throw new Error(`list_source_files failed with ${g.status}`);return{workspaceId:o,markdownIndex:await g.text()}},[t.readSourceFile]:f,[t.readSharedDocument]:d,[t.inspectSharedDocumentStructure]:_,[t.inspectAgentSurface]:async()=>l()}},"createPublishedAgentReadyToolExecutors");var go=r((e={})=>{let t=r(w=>String(w||"").trim(),"normalizeString"),o=r(w=>String(w||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),n=r(w=>{let y=String(w||"").match(/^\s*/);return y?y[0].length:0},"readIndent"),a=r(w=>/^[A-Za-z0-9_:@-]+\s*:/.test(t(w)),"isYamlKeyLine"),s=r(w=>o(w).split(`
`),"splitLines"),i=r(w=>{let y=s(w),m=0;for(;m<y.length&&!t(y[m]);)m+=1;if(t(y[m])!=="---")return null;for(let h=m+1;h<y.length;h+=1)if(t(y[h])==="---")return{frontmatter:y.slice(m+1,h).join(`
`),body:y.slice(h+1).join(`
`)};return null},"extractLeadingFrontmatter"),c=r(w=>{let y=[];for(let m of s(w)){if(!t(m)||n(m)!==0)continue;let h=m.match(/^([A-Za-z0-9_:@-]+)\s*:/);h?.[1]&&y.push(h[1])}return Array.from(new Set(y)).sort((m,h)=>m.localeCompare(h))},"extractTopLevelFrontmatterKeys"),l=r((w,y)=>{let m=s(w),h=`${y}:`;for(let A=0;A<m.length;A+=1){let Z=m[A],ie=t(Z);if(!ie.startsWith(h))continue;let he=n(Z),fe=ie.slice(h.length).trim();if(fe)return{indent:he,inlineValue:fe,blockLines:[],blockText:""};let ge=[];for(let Re=A+1;Re<m.length;Re+=1){let we=m[Re],D=t(we),B=n(we);if(D&&B<=he&&a(we))break;ge.push(we)}return{indent:he,inlineValue:"",blockLines:ge,blockText:ge.join(`
`)}}return null},"extractYamlBlock"),u=r(w=>{let y=[];for(let m of s(w)){let h=t(m);if(!h||h.startsWith("- "))continue;let A=h.match(/^([A-Za-z0-9_:@-]+)\s*:/);A?.[1]&&y.push(A[1])}return Array.from(new Set(y)).sort((m,h)=>m.localeCompare(h))},"extractNestedYamlKeys"),f=r(w=>{let y=t(w);if(!y.startsWith("[")||!y.endsWith("]"))return null;let m=y.slice(1,-1).trim();return m?m.split(",").map(h=>t(h)).filter(Boolean).length:0},"countInlineSequenceEntries"),d=r((w,y)=>{let m=l(w,y);if(!m)return null;if(m.inlineValue)return f(m.inlineValue);let h=0;for(let A of m.blockLines)t(A)&&(n(A)<=m.indent||/^\s*-\s+/.test(A)&&(h+=1));return h},"countYamlSequenceEntries"),_=r(w=>{let y=[];for(let m of s(w)){let h=m.match(/^(#{1,6})\s+(.+?)\s*$/);h?.[2]&&y.push({depth:h[1].length,text:t(h[2])})}return y},"extractMarkdownHeadings"),g=t(e.workspaceId),b=t(e.canonicalPath),E=o(e.markdown),x=i(E),C=x?c(x.frontmatter):[],I=x?l(x.frontmatter,"flow"):null,U=I?u(I.blockText):[],T=new Set(["kg:subgraphs","clusters","groups","layers"]),q=Array.from(new Set([...C,...U].filter(w=>T.has(w)))).sort((w,y)=>w.localeCompare(y)),K=_(x?x.body:E);return{workspaceId:g,canonicalPath:b,markdownLength:E.length,lineCount:E?s(E).length:0,hasFrontmatter:!!x,topLevelKeys:C,hasFlowBlock:!!I,flowKeys:U,flowNodeCount:I?d(I.blockText,"nodes"):null,flowConnectionCount:I?d(I.blockText,"connections")??d(I.blockText,"edges"):null,flowSubgraphCount:I?d(I.blockText,"subgraphs"):null,forbiddenGroupingAliases:q,headingCount:K.length,headings:K.map(w=>w.text),bodyLength:t(x?x.body:E).length}},"inspectSharedDocumentStructure");var yo="knowgrph-vdeoxpln/v0.1",j=Object.freeze({uiLaunch:"knowgrph.ui.launch",uiStop:"knowgrph.ui.stop",pipeline:"knowgrph.pipeline",graphragPipeline:"knowgrph.graphrag_pipeline",superagentRun:"knowgrph.superagent.run",browserApiRun:"knowgrph.browser_api.run",vdeoxplnList:"knowgrph.vdeoxpln.list"}),le=Object.freeze({sourceFiles:"knowgrph-source-files",agentReady:"knowgrph-agent-ready",localMcp:"knowgrph-mcp-local",chatToCanvas:"knowgrph-chat-to-canvas",strybldr:"knowgrph-strybldr",researchVisual:"knowgrph-research-visual",commerceReadiness:"knowgrph-commerce-readiness"}),yt=r(e=>String(e||"").trim(),"normalizeString"),G=r(e=>Array.from(new Set((Array.isArray(e)?e:[]).map(yt).filter(Boolean))).sort((t,o)=>t.localeCompare(o)),"normalizeStringArray"),wo=r(e=>{let t=new Set,o=[];for(let n of Array.isArray(e)?e:[]){let a=yt(n);!a||t.has(a)||(t.add(a),o.push(a))}return o},"normalizeOrderedStringArray"),wt=r(e=>Array.isArray(e)?e.map(wt):!e||typeof e!="object"?e:Object.keys(e).sort((t,o)=>t.localeCompare(o)).reduce((t,o)=>(t[o]=wt(e[o]),t),{}),"normalizeJsonValue"),lr=r(e=>JSON.stringify(wt(e)),"stableStringifyVdeoxplnValue"),pr=r((e,t)=>{let o=yt(e)||"vdeoxpln";return`kgvx_${je([o,yo,lr(t)])}`},"buildKnowgrphVdeoxplnSemanticKey");var ur=Object.freeze([{id:le.sourceFiles,title:"Knowgrph Source Files",purpose:"Discover, read, inspect, and route published Source Files and shared documents through the canonical storage and document-structure owners.",scope:"read-only-published",mutation:"read-only",triggers:["source files","published documents","shared document","read markdown","inspect document structure"],inputs:["workspace document","published markdown","share token","share URL","canonical path"],outputs:["source-files index","published markdown","document structure report"],owners:["canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/sourceFilesSignatures.ts","canvas/src/features/agent-ready/publishedToolExecutors.mjs","canvas/src/features/agent-ready/sharedDocumentStructureInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs"],tools:{published:[p.listSourceFiles,p.readSourceFile,p.readSharedDocument,p.inspectSharedDocumentStructure],browserLocal:[p.inspectLocalSourceFilesSnapshot],local:[j.vdeoxplnList]},workflow:["Resolve source identity from storage, share token, or canonical path.","Fetch through published storage/document executors.","Inspect structure with the shared document-structure owner.","Return read-only artifacts without graph mutation."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return source-read or structure errors without model calls."},artifactPolicy:{persistence:"published-read-only",graphMaterialization:"none",semanticKeyInputs:["workspaceId","canonicalPath","shareToken","toolContract"]},validation:["agent-ready:check","pages:check-sync","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","webmcp-html-fallback"]},{id:le.agentReady,title:"Knowgrph Agent Ready",purpose:"Inspect Knowgrph health, MCP, WebMCP, A2A, OpenAPI, commerce, and browser-local readiness without claiming deployed mutation.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["agent-ready","webmcp","mcp health","openapi","a2a","discovery","readiness"],inputs:["agent-ready base URL","browser runtime state","published metadata"],outputs:["agent surface inspection","browser-local readiness snapshot","metadata report"],owners:["canvas/src/features/agent-ready/knowgrphAgentReadyToolContract.mjs","canvas/src/features/agent-ready/webMcpRuntime.ts","canvas/src/features/agent-ready/agentSurfaceInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs","scripts/check-agent-ready.mjs"],tools:{published:[p.inspectAgentSurface],browserLocal:[p.inspectLocalSettingsChatReadiness,p.inspectLocalMainPanelState,p.inspectLocalEditorWorkspaceState,p.inspectLocalChatPipelineState,p.inspectLocalMainPanelChatCanvasPipeline,p.inspectLocalWorkspaceDocument,p.inspectLocalCanvasTopology,p.inspectLocalCanvasSnapshot,p.inspectLocal3dCameraPose,p.inspectLocal3dLayoutPositions,p.inspectLocal2dZoomViewport,p.inspectLocalSourceFilesSnapshot],local:[j.vdeoxplnList]},workflow:["Inspect published agent-ready metadata.","Inspect browser-local state only when running inside the app runtime.","Report scope boundaries between Pages read-only tools and browser-local inspectors."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return metadata inspection errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["toolContracts","metadataRoutes","browserLocalToolNames"]},validation:["agent-ready:check","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","browser-webmcp"]},{id:le.localMcp,title:"Knowgrph Local MCP",purpose:"Expose local UI launch, pipeline, GraphRAG, superagent, browser bridge, and vdeoxpln inspection tools through the stdio MCP server.",scope:"local-stdio",mutation:"local-confirmed",triggers:["local mcp","launch canvas","run pipeline","graphrag","superagent","browser api","list vdeoxpln"],inputs:["local root","workspace file","graph data","pipeline config","browser API runtime"],outputs:["local tool result","pipeline artifact","superagent report","vdeoxpln registry snapshot"],owners:["mcp/local-tool-contract.js","mcp/server.js","mcp/README.md","knowgrph_parser/superagent_harness.py","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[j.uiLaunch,j.uiStop,j.pipeline,j.graphragPipeline,j.superagentRun,j.browserApiRun,j.vdeoxplnList]},workflow:["List local tools from the shared local MCP contract.","Run only path-guarded local-root operations.","Summarize artifacts and registry metadata in the MCP result."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"tool-owned",fallback:"Return local command failure and detected artifacts."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"tool-owned",semanticKeyInputs:["localToolNames","rootScope","artifactList"]},validation:["vdeoxpln:check","mcpLocalToolContract"],publish:["local-mcp-docs"]},{id:le.chatToCanvas,title:"Knowgrph Chat To Canvas",purpose:"Route AI-assisted graph generation through FloatingPanel Chat, KGC validation, Workspace FS, Source Files, and Canvas apply owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["chat to canvas","generate graph","kgc markdown","flow.subgraphs","apply to canvas"],inputs:["chat request","workspace context","selection context","source evidence","model settings"],outputs:["validated KGC Markdown","workspace artifact","GraphData","canvas topology snapshot"],owners:["canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitRequest.ts","canvas/src/features/chat/chatMarkdownValidation.ts","canvas/src/features/chat/chatKgcCanvasApply.ts","canvas/src/features/chat/knowgrphVdeoxplnChatArtifacts.ts","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/lib/graph/semanticKey.ts"],tools:{published:[],browserLocal:[p.inspectLocalChatPipelineState,p.inspectLocalMainPanelChatCanvasPipeline,p.inspectLocalWorkspaceDocument,p.inspectLocalCanvasTopology,p.inspectLocalCanvasSnapshot],local:[j.vdeoxplnList]},workflow:["Vdeoxpln context through the shared chat submit request owner.","Call provider transport only after typed request construction.","Validate KGC Markdown with bounded retries.","Persist through Workspace FS and apply through the existing Canvas path."],aiPolicy:{mode:"required-for-generation",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Persist validation or provider failure as reviewable chat/workspace state."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["chatContextScope","workspacePath","graphSemanticKey","sourceLayerHash"]},validation:["chatResponseContract","sourceFiles","vdeoxpln:check"],publish:["browser-webmcp","mainpanel-mcp"]},{id:le.strybldr,title:"Knowgrph Strybldr",purpose:"Turn image or media source units into editable Storyboard cards and bounded media handoff artifacts through Strybldr and shared renderer owners.",scope:"browser-local-source-backed",mutation:"browser-local-user-mediated",triggers:["strybldr","storyboard","image to storyboard","media handoff","visual brief"],inputs:["image source unit","media metadata","workspace document","storyboard graph"],outputs:["Strybldr Markdown","Storyboard graph cards","media handoff prompt","canvas snapshot"],owners:["canvas/src/features/strybldr/strybldrStoryboard.ts","canvas/src/features/strybldr","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-strybldr-prd-tad.md"],tools:{published:[],browserLocal:[p.inspectLocalSourceFilesSnapshot,p.inspectLocalCanvasTopology,p.inspectLocalCanvasSnapshot],local:[j.vdeoxplnList]},workflow:["Import media through existing workspace/source owners.","Build Strybldr cards with source-unit provenance.","Render through the shared Storyboard surface.","Compile bounded media handoff only after user approval."],aiPolicy:{mode:"optional-for-refinement",maxAttempts:1,tokenBudget:"user-approved-provider-step",fallback:"Keep editable storyboard and structured handoff error."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"storyboard-graph",semanticKeyInputs:["sourceUnitId","strybldrRunId","graphSemanticKey"]},validation:["strybldr","rendererPipelineNeutrality","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:le.researchVisual,title:"Knowgrph Research Visual",purpose:"Create file-backed research visual workflows from source material using Knowgrph parsing, Source Files, Storyboard, renderer, and chat owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["research visual","explainer","formula","algorithm","proof","dynamic scene","storyboard"],inputs:["paper excerpt","formula","algorithm","figure","workspace document","source evidence"],outputs:["mechanism brief","storyboard","renderer-neutral scene plan","validated KGC Markdown"],owners:["canvas/src/features/parsers/default.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/features/chat/knowgrphVdeoxplnChatArtifacts.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-vdeoxpln-prd-tad.md"],tools:{published:[],browserLocal:[p.inspectLocalChatPipelineState,p.inspectLocalSourceFilesSnapshot,p.inspectLocalCanvasTopology],local:[j.vdeoxplnList]},workflow:["Extract source-backed semantic units into workspace artifacts.","Plan exact deterministic graph/storyboard layers before optional AI support.","Persist artifacts through Workspace FS and Source Files.","Use Canvas/Storyboard renderers as projections of graph state."],aiPolicy:{mode:"optional-for-drafting",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Return deterministic source brief with unresolved questions."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["sourceSignature","graphSemanticKey","rendererId"]},validation:["sourceFiles","chatResponseContract","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:le.commerceReadiness,title:"Knowgrph Commerce Readiness",purpose:"Inspect Commerce, payment worker, x402, ACP, UCP, MPP, and readiness metadata without bypassing the shared payment SSOT.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["commerce","payment","x402","acp","ucp","mpp","stripe","readiness"],inputs:["agent-ready metadata","commerce route health","browser readiness snapshot"],outputs:["commerce readiness report","payment route summary","agent-ready commerce metadata"],owners:["canvas/src/features/panels/views/CommerceHubView.tsx","canvas/src/features/agent-ready/browserLocalSurfaceSnapshots.ts","cloudflare/pages/knowgrph-agent-ready-commerce.mjs","cloudflare/workers/knowgrph-payment/agenticCommerce.ts","grph-shared/src/payments/agenticCommerceSsot.ts"],tools:{published:[p.inspectAgentSurface],browserLocal:[p.inspectLocalSettingsChatReadiness,p.inspectLocalMainPanelState],local:[j.vdeoxplnList]},workflow:["Inspect published commerce discovery metadata.","Read browser-local readiness snapshots when available.","Report payment capability boundaries without initiating checkout."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return route or metadata errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["commerceSemanticKey","routeHealth","toolContract"]},validation:["agent-ready:check","mainPanelCommerce","vdeoxpln:check"],publish:["pages-agent-skills","mainpanel-mcp","browser-webmcp"]}]),dr=r(e=>{let t={published:G(e.tools?.published),browserLocal:G(e.tools?.browserLocal),local:G(e.tools?.local)},o=pr(e.id,{id:e.id,scope:e.scope,mutation:e.mutation,owners:G(e.owners),tools:t,triggers:G(e.triggers),outputs:G(e.outputs),workflow:wo(e.workflow),artifactPolicy:e.artifactPolicy||{},aiPolicy:e.aiPolicy||{}}),n=`/.well-known/agent-skills/${e.id}.md`;return Object.freeze({...e,version:yo,triggers:G(e.triggers),inputs:G(e.inputs),outputs:G(e.outputs),owners:G(e.owners),tools:Object.freeze(t),workflow:wo(e.workflow),validation:G(e.validation),publish:G(e.publish),semanticKey:o,agentSkill:Object.freeze({name:e.id,type:"markdown",description:e.purpose,path:n})})},"normalizeVdeoxpln"),So=r(()=>ur.map(dr).sort((e,t)=>e.id.localeCompare(t.id)),"buildKnowgrphVdeoxplnRegistry");var bo=r((e=So())=>e.map(t=>({...t.agentSkill,vdeoxpln:{id:t.id,title:t.title,scope:t.scope,mutation:t.mutation,semanticKey:t.semanticKey,tools:t.tools,publish:t.publish}})),"buildKnowgrphVdeoxplnAgentSkillDefinitions"),J=r(e=>e&&e.length?e.map(t=>`- ${t}`).join(`
`):"- none","markdownList"),mr=r(e=>`# ${e.title} Skill

Use this skill when: ${e.purpose}

## Contract

- Vdeoxpln id: \`${e.id}\`
- Contract version: \`${e.version}\`
- Semantic key: \`${e.semanticKey}\`
- Scope: \`${e.scope}\`
- Mutation boundary: \`${e.mutation}\`

## Triggers

${J(e.triggers)}

## Inputs

${J(e.inputs)}

## Outputs

${J(e.outputs)}

## Tools

Published tools:
${J(e.tools.published)}

Browser-local tools:
${J(e.tools.browserLocal)}

Local MCP tools:
${J(e.tools.local)}

## Workflow

${J(e.workflow)}

## Source Owners

${J(e.owners)}

## Artifact Policy

- Persistence: \`${e.artifactPolicy?.persistence||"none"}\`
- Graph materialization: \`${e.artifactPolicy?.graphMaterialization||"none"}\`
- Semantic-key inputs:
${J(e.artifactPolicy?.semanticKeyInputs||[])}

## AI Policy

- Mode: \`${e.aiPolicy?.mode||"none"}\`
- Max attempts: \`${String(e.aiPolicy?.maxAttempts??0)}\`
- Token budget: \`${String(e.aiPolicy?.tokenBudget??0)}\`
- Fallback: ${e.aiPolicy?.fallback||"Return deterministic errors without model calls."}

## Validation

${J(e.validation)}

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
`,"buildKnowgrphVdeoxplnMarkdown"),_o=r((e=So())=>Object.fromEntries(e.map(t=>[t.id,mr(t)])),"buildKnowgrphVdeoxplnMarkdownByName");var hr={[p.listSourceFiles]:{id:"list-source-files",tags:["mcp","discovery","source-files","read-only"],examples:["List the published Knowgrph Source Files."],outputModes:["text/markdown","application/json"]},[p.readSourceFile]:{id:"read-source-file",tags:["mcp","read","markdown","workspace"],examples:["Read the published source file for docs/getting-started.md."],outputModes:["text/markdown","application/json"]},[p.readSharedDocument]:{id:"read-shared-document",tags:["mcp","read","shared-document","markdown"],examples:["Read the Knowgrph shared document behind this share URL."],outputModes:["text/markdown","application/json"]},[p.inspectSharedDocumentStructure]:{id:"inspect-shared-document-structure",tags:["mcp","inspect","shared-document","structure"],examples:["Inspect the structure of this Knowgrph shared document."],outputModes:["application/json","text/markdown"]},[p.inspectAgentSurface]:{id:"inspect-agent-surface",tags:["mcp","agent-ready","discovery","metadata"],examples:["Show the Knowgrph agent discovery metadata."],outputModes:["application/json","text/markdown"]}},Ce=bo(),ko=r(e=>e.map(t=>{let o=hr[t.name]||{id:String(t.name||"").replace(/_/g,"-"),tags:["mcp","read-only"],examples:[`Call ${t.name} on Knowgrph.`],outputModes:["application/json"]};return{id:o.id,name:t.title,description:t.description,tags:o.tags,examples:o.examples,inputModes:["application/json","text/plain"],outputModes:o.outputModes}}),"buildAgentReadyA2aSkills"),Po=r(async({appUrl:e,updatedAt:t,sha256ByName:o})=>({$schema:"https://agent-skills.dev/schemas/skills-index.v0.2.json",updated_at:t,skills:await Promise.all(Ce.map(async n=>({name:n.name,type:n.type,description:n.description,url:`${String(e||"").replace(/\/+$/,"")}${n.path}`,sha256:await o[n.name],vdeoxpln:n.vdeoxpln})))}),"buildAgentReadyAgentSkillsIndex"),xo=r(({appBasePath:e,appA2aAgentCardPath:t,healthPath:o})=>{let n=Object.fromEntries(Ce.map(a=>[`${e}${a.path}`,{get:{summary:`Read the ${a.name} agent skill markdown`,responses:{200:{description:`Agent skill markdown for ${a.name}`}}}}]));return{[o]:{get:{summary:"Read the Knowgrph agent-ready health status",responses:{200:{description:"Health status in application/health+json format"}}}},[`${e}/mcp`]:{get:{summary:"Read MCP transport metadata",responses:{200:{description:"MCP transport metadata"}}},post:{summary:"Send a JSON-RPC MCP request",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0}}}},responses:{200:{description:"JSON-RPC result payload"}}}},[t]:{get:{summary:"Read the Knowgrph A2A Agent Card",responses:{200:{description:"A2A Agent Card JSON"}}}},"/api/storage/llms.txt":{get:{summary:"Read the Source Files LLM index",responses:{200:{description:"Plain-text LLM index"}}}},"/api/storage/source-files":{get:{summary:"List published Source Files",responses:{200:{description:"Source Files index"}}}},"/api/storage/source-files/{workspaceId}":{get:{summary:"List published Source Files for a workspace",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped Source Files index"}}}},"/api/storage/source-files/{workspaceId}/llms.txt":{get:{summary:"Read the workspace-scoped Source Files LLM index",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped plain-text LLM index"}}}},"/api/storage/doc-default/{canonicalPath}":{get:{summary:"Read a default-workspace Source File markdown document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document from the default Editor Workspace"},404:{description:"Document not found"}}}},"/api/storage/doc/{workspaceId}/{canonicalPath}":{get:{summary:"Read a Source File markdown document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document"},404:{description:"Document not found"}}}},[`${e}/doc-default/{canonicalPath}`]:{get:{summary:"Read a default-workspace shared document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/doc/{workspaceId}/{canonicalPath}`]:{get:{summary:"Read a shared document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/share/{shareToken}`]:{get:{summary:"Read a shared document through the canonical opaque share token route",parameters:[{name:"shareToken",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or published markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},...n}},"buildAgentReadyOpenApiPaths");var fr="kgShare",Di=typeof TextEncoder<"u"?new TextEncoder:null,Ro=typeof TextDecoder<"u"?new TextDecoder:null;var gr=r(e=>{if(typeof Buffer<"u")return Uint8Array.from(Buffer.from(e,"base64"));let t=atob(e),o=new Uint8Array(t.length);for(let n=0;n<t.length;n+=1)o[n]=t.charCodeAt(n);return o},"fromBase64");var wr=r(e=>{let t=String(e||"").replace(/-/g,"+").replace(/_/g,"/");if(!t)return"";let o=t.length%4;return o?`${t}${"=".repeat(4-o)}`:t},"fromBase64Url");var yr=r(e=>{if(!Ro)throw new Error("TextDecoder is required to decode published doc share tokens");return Ro.decode(gr(wr(e)))},"decodeUtf8Base64Url"),Co=r(e=>String(e||"").trim()||null,"normalizeWorkspaceId"),_t=r(e=>String(e||"").trim(),"normalizeCanonicalPath"),St="/knowgrph",Ao="/doc-default/",Eo="/doc/",To="/share/",Sr="kgWorkspaceId",br="kgCanonicalPath",_r=r(e=>{let t=String(e||"").trim();return t?`/${t.replace(/^\/+|\/+$/g,"")}`:St},"normalizeAppBasePath"),bt=r(e=>{let t=_t(e?.canonicalPath);return t?{canonicalPath:t,workspaceId:Co(e?.workspaceId)}:null},"normalizePublishedDocIdentity"),vo=r((e,t)=>{let o=_r(t),n=String(e||"").replace(/\/+$/,"")||"/";if(!n.startsWith(o))return null;let a=n.slice(o.length)||"/";if(a.startsWith(To)){let c=decodeURIComponent(a.slice(To.length)).trim();return kt(c)}if(a.startsWith(Ao))return bt({canonicalPath:decodeURIComponent(a.slice(Ao.length))});if(!a.startsWith(Eo))return null;let s=a.slice(Eo.length),i=s.indexOf("/");return i<1?null:bt({workspaceId:decodeURIComponent(s.slice(0,i)),canonicalPath:decodeURIComponent(s.slice(i+1))})},"parsePublishedDocPathname"),kr=r(e=>{let t=kt(e?.get(fr));if(t)return t;let o=_t(decodeURIComponent(String(e?.get(br)||"")));if(o)return bt({workspaceId:decodeURIComponent(String(e?.get(Sr)||"")),canonicalPath:o});let n=String(e?.get("kgPath")||"").trim();return n?vo(`${St}${n}`,St):null},"parsePublishedDocSearchParams");var kt=r(e=>{let t=String(e||"").trim();if(!t)return null;try{let o=JSON.parse(yr(t)),n=_t(o?.canonicalPath);return n?{canonicalPath:n,workspaceId:Co(o?.workspaceId)}:null}catch{return null}},"decodePublishedDocShareToken"),Fe=r((e={})=>{let t=kt(e.shareToken);if(t)return t;let o=String(e.shareUrl||"").trim();if(!o)return null;try{let n=String(e.baseUrl||"https://airvio.co").trim()||"https://airvio.co",a=new URL(o,n);return kr(a.searchParams)||vo(a.pathname,e.appBasePath)}catch{return null}},"resolvePublishedDocIdentity"),Io=String.raw`(args = {}) => {
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
}`;var Be={push:"/api/storage/push",pull:"/api/storage/pull",exportPrefix:"/api/storage/export/",docPrefix:"/api/storage/doc/",defaultDocPrefix:"/api/storage/doc-default/",sourceFilesIndex:"/api/storage/source-files",sourceFilesIndexPrefix:"/api/storage/source-files/",sourceFilesLlms:"/api/storage/llms.txt"};var Oo=r((e,t)=>`${Be.docPrefix}${encodeURIComponent(String(e||"").trim())}/${encodeURIComponent(String(t||"").trim())}`,"buildKnowgrphStorageDocPath"),Uo=r(e=>`${Be.defaultDocPrefix}${encodeURIComponent(String(e||"").trim())}`,"buildKnowgrphStorageDefaultDocPath"),Lo=r(e=>{let t=String(e||"").trim();return t?`${Be.sourceFilesIndexPrefix}${encodeURIComponent(t)}`:Be.sourceFilesIndex},"buildKnowgrphStorageSourceFilesIndexPath");var v="https://airvio.co",We="https://knowgrph-storage.huijoohwee.workers.dev",P="/knowgrph",k=`${v}${P}/`,$o=`${v}/`,ve="kgws:canonical-docs",Pe="2026-05-23",xe=`${P}/health`,ke=`${v}${xe}`,No="/.well-known/agent-card.json",Pt=`${P}/.well-known/agent-card.json`,Ge=`${v}${No}`,xt=`${v}/api/storage/source-files`,Pr=`${v}/api/storage/doc-default/{canonicalPath}`,xr=`${v}/api/storage/doc/{workspaceId}/{canonicalPath}`,Mo="knowgrph-agent-ready-pages";var Do=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${P}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${P}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${xe}>; rel="status"; type="application/health+json"`,`<${P}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${No}>; rel="describedby"; type="application/json"`].join(", "),Ko=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${k}.

## Discovery

- Crawl policy: ${k}robots.txt
- Sitemap: ${k}sitemap.xml
- API catalog: ${k}.well-known/api-catalog
- Auth.md registration instructions: ${$o}auth.md
- Health: ${ke}
- MCP server card: ${k}.well-known/mcp/server-card.json
- A2A Agent Card: ${Ge}
- Agent skills: ${k}.well-known/agent-skills/index.json
- LLM reference: ${k}llms.txt

## APIs

- Agent-ready status: ${ke}
- HTTP MCP: ${k}mcp
- Storage API: ${v}/api/storage/
- Source Files index: ${xt}
- Default Source File documents: ${Pr}
- Workspace Source File documents: ${xr}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes five read-only tools for published Source Files, shared documents, and agent-surface inspection.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared five-tool WebMCP surface on \`${k}\` HTML routes.
`,jo=r(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),Ie=r(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(o=>o.trim().startsWith("text/markdown")),"wantsMarkdown"),Ho=r((e,t)=>{let o=new Response(e.body,e),n=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return n&&o.headers.set("x-knowgrph-route-owner",n),a&&o.headers.set("x-knowgrph-route-tag",a),o},"withAgentReadyRouteHeaders");var Ve=gt({defaultWorkspaceId:ve}),Go=r((e,t="")=>{let o=String(e||"").trim(),n=String(t||"").trim();return n?Oo(n,o):Uo(o)},"buildStorageDocPath"),zo=r(e=>String(e||"").trim(),"normalizeToolString");var H=r((e,t="application/json; charset=utf-8")=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"jsonResponse"),qo=r((e,t)=>new Response(JSON.stringify(t,null,2),{status:e,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"jsonStatusResponse"),ze=r((e,t)=>new Response(e,{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"textResponse"),Rr=r(e=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":"application/health+json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"healthResponse"),Ar=r(e=>`User-agent: *
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
`,"buildRobotsTxt"),Er=r(e=>`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${k}</loc>
    <lastmod>${Pe}</lastmod>
  </url>
  <url>
    <loc>${k}llms.txt</loc>
    <lastmod>${Pe}</lastmod>
  </url>
  <url>
    <loc>${e}.well-known/mcp/server-card.json</loc>
    <lastmod>${Pe}</lastmod>
  </url>
</urlset>
`,"buildSitemapXml"),Tr=Ar(`${k}sitemap.xml`),Cr=Er(k),Vo={linkset:[{anchor:k,"service-desc":[{href:`${k}.well-known/openapi.json`,type:"application/vnd.oai.openapi+json;version=3.1"}],"service-doc":[{href:`${k}llms.txt`,type:"text/plain"}],status:[{href:ke,type:"application/health+json"}],"service-meta":[{href:`${k}.well-known/mcp/server-card.json`,type:"application/json"},{href:Ge,type:"application/json"}]}]},Yo={openapi:"3.1.0",info:{title:"Knowgrph API",version:"0.1.0",description:"Agent discovery surface for the Knowgrph Cloudflare deployment."},servers:[{url:v,description:"Knowgrph Cloudflare deployment"}],paths:xo({appBasePath:P,appA2aAgentCardPath:Pt,healthPath:xe})},Oe={resource:k,resource_name:"Knowgrph",authorization_servers:[v],scopes_supported:["knowgrph:read","knowgrph:source-files:read"],bearer_methods_supported:["header"],resource_documentation:`${k}llms.txt`},Rt=`${v}/cdn-cgi/access`,Q={skill:`${v}/auth.md`,register_uri:`${k}agent/auth`,claim_uri:`${k}agent/auth/claim`,revocation_uri:`${k}agent/auth/revoke`,identity_types_supported:["anonymous","identity_assertion"],anonymous:{credential_types_supported:["api_key"]},identity_assertion:{assertion_types_supported:["urn:ietf:params:oauth:token-type:id-jag","verified_email"],credential_types_supported:["access_token","api_key"]},events_supported:["https://schemas.workos.com/events/agent/auth/identity/assertion/revoked"],registration_status:"metadata_published_runtime_user_mediated"},Fo={issuer:v,resource:Oe.resource,resource_name:Oe.resource_name,authorization_servers:Oe.authorization_servers,cloudflare_access_issuer:Rt,authorization_endpoint:`${Rt}/login`,token_endpoint:`${Rt}/token`,jwks_uri:`${k}.well-known/http-message-signatures-directory`,response_types_supported:["code"],grant_types_supported:["authorization_code","client_credentials"],token_endpoint_auth_methods_supported:["client_secret_basic","private_key_jwt"],scopes_supported:Oe.scopes_supported,agent_auth:Q},vr=`# Knowgrph auth.md

Knowgrph publishes agent registration metadata for the read-only agent surface at ${k}. Agents should first fetch ${v}/.well-known/oauth-protected-resource, follow its authorization_servers entry to ${v}/.well-known/oauth-authorization-server, and read the agent_auth block.

## Registration

- Register: ${Q.register_uri}
- Claim: ${Q.claim_uri}
- Revoke: ${Q.revocation_uri}
- Supported identity types: ${Q.identity_types_supported.join(", ")}
- Anonymous credentials: ${Q.anonymous.credential_types_supported.join(", ")}
- Identity assertion types: ${Q.identity_assertion.assertion_types_supported.join(", ")}
- Identity assertion credentials: ${Q.identity_assertion.credential_types_supported.join(", ")}
- Revocation events: ${Q.events_supported.join(", ")}
- Current runtime policy: user-mediated access through the existing Cloudflare Access/OAuth boundary; no separate MCP-only auth stack.
- Pipeline rule: agents must not bypass MainPanel -> FloatingPanel Chat -> KGC -> Canvas for user-mediated graph work; published HTTP MCP tools remain read-only until mutation auth and conflict semantics are implemented.`,Jo={name:"Knowgrph Agent",description:"Agent-readable discovery, published-document retrieval, and WebMCP-ready metadata surface for Knowgrph.",version:"0.1.0",provider:{organization:"airvio / joohwee",url:k},url:`${k}mcp`,preferredTransport:"JSONRPC",supportedInterfaces:[{url:`${k}mcp`,protocolBinding:"JSONRPC",transportProtocol:"JSONRPC",description:"Primary machine interface for read-only discovery and source-file document access."},{url:xt,protocolBinding:"HTTP+JSON/REST",transportProtocol:"HTTP+JSON/REST",description:"Published source-files index and storage-backed document read surface."}],capabilities:{streaming:!1,pushNotifications:!1,stateTransitionHistory:!1,extendedAgentCard:!1},defaultInputModes:["text/plain","text/markdown","application/json"],defaultOutputModes:["text/plain","text/markdown","application/json"],skills:ko(Ve)},ne={serverInfo:{name:"knowgrph",version:"0.1.0"},transport:{type:"http",url:`${k}mcp`},capabilities:{tools:Ve.map(e=>({name:e.name,description:e.description,inputSchema:e.inputSchema}))},links:{apiCatalog:`${k}.well-known/api-catalog`,skills:`${k}.well-known/agent-skills/index.json`,status:ke,agentCard:Ge}},Tt=Ve.map(e=>({name:e.webName,title:e.title,description:e.description,inputSchema:e.inputSchema,annotations:e.annotations})),Ue=r(e=>zo(Ve.find(t=>t.name===e)?.webName),"findWebMcpToolName"),Ir=Ue(p.listSourceFiles),Or=Ue(p.readSourceFile),Ur=Ue(p.readSharedDocument),Lr=Ue(p.inspectSharedDocumentStructure),$r=Ue(p.inspectAgentSurface),Nr=`(() => {
  const root = globalThis;
  const siteOrigin = ${JSON.stringify(v)};
  const appBasePath = ${JSON.stringify(P)};
  const defaultWorkspaceId = ${JSON.stringify(ve)};
  const toolDefinitions = ${JSON.stringify(Tt)};
  const toolNames = ${JSON.stringify(Tt.map(e=>e.name))};
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
  const createPublishedDocIdentityResolver = ${Io};
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
    const originUrl = baseUrl ? new URL(baseUrl + "/").origin : "";
    return {
      baseUrl,
      healthUrl: baseUrl + "/health",
      mcpUrl: baseUrl + "/mcp",
      apiCatalogUrl: baseUrl + "/.well-known/api-catalog",
      openApiUrl: baseUrl + "/.well-known/openapi.json",
      mcpServerCardUrl: baseUrl + "/.well-known/mcp/server-card.json",
      agentCardUrl: baseUrl + "/.well-known/agent-card.json",
      agentSkillsUrl: baseUrl + "/.well-known/agent-skills/index.json",
      commerceUrls: { acpDiscoveryUrl: originUrl + "/.well-known/acp.json", ucpProfileUrl: originUrl + "/.well-known/ucp", mppOpenApiUrl: originUrl + "/openapi.json", x402PaymentRequiredUrl: originUrl + "/api/payments/commerce/x402" },
      health: args.health,
      apiCatalog: args.apiCatalog,
      openApi: args.openApi,
      mcpServerCard: args.mcpServerCard,
      agentCard: args.agentCard,
      agentSkills: args.agentSkills,
      commerce: args.commerce,
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
    const fetchJsonOrNull = async (url, accept = "application/json") => { try { return await fetchJson(url, accept); } catch { return null; } };
    return async () => {
      const originUrl = new URL(baseUrl + "/").origin;
      const responses = await Promise.all([
        fetchJson(baseUrl + "/health", "application/health+json"),
        fetchJson(baseUrl + "/.well-known/api-catalog", "application/linkset+json"),
        fetchJson(baseUrl + "/.well-known/openapi.json", "application/json"),
        fetchJson(baseUrl + "/.well-known/mcp/server-card.json", "application/json"),
        fetchJson(baseUrl + "/.well-known/agent-card.json", "application/json"),
        fetchJson(baseUrl + "/.well-known/agent-skills/index.json", "application/json"),
        fetchJsonOrNull(originUrl + "/.well-known/acp.json", "application/json"),
        fetchJsonOrNull(originUrl + "/.well-known/ucp", "application/json"),
        fetchJsonOrNull(originUrl + "/openapi.json", "application/json"),
      ]);
      return buildAgentSurfaceInspectionPayload({
        baseUrl,
        health: responses[0],
        apiCatalog: responses[1],
        openApi: responses[2],
        mcpServerCard: responses[3],
        agentCard: responses[4],
        agentSkills: responses[5],
        commerce: { acpDiscovery: responses[6], ucpProfile: responses[7], mppOpenApi: responses[8] },
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
      if (providedContext) {
        releasePreviousRegisteredContext(context);
        return true;
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
      listSourceFiles: ${JSON.stringify(Ir)},
      readSourceFile: ${JSON.stringify(Or)},
      readSharedDocument: ${JSON.stringify(Ur)},
      inspectSharedDocumentStructure: ${JSON.stringify(Lr)},
      inspectAgentSurface: ${JSON.stringify($r)},
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
})();`,Mr=r(async e=>{if(!(e.headers.get("content-type")||"").toLowerCase().includes("text/html"))return e;let o=await e.text();if(Tt.every(i=>o.includes(i.name)))return new Response(o,e);let n=`<script>${Nr}<\/script>`,a=o.includes("</head>")?o.replace("</head>",`${n}</head>`):`${o}${n}`,s=new Response(a,e);return s.headers.delete("content-length"),s},"injectWebMcpScript"),Dr={listSourceFiles:p.listSourceFiles,readSourceFile:p.readSourceFile,readSharedDocument:p.readSharedDocument,inspectSharedDocumentStructure:p.inspectSharedDocumentStructure,inspectAgentSurface:p.inspectAgentSurface},Kr=r(async e=>{let t=new TextEncoder().encode(e),o=await crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(o)].map(n=>n.toString(16).padStart(2,"0")).join("")},"sha256Hex"),Xo=_o(),jr=Object.fromEntries(Ce.map(e=>[e.name,Kr(Xo[e.name]||"")])),Bo=new Map(Ce.map(e=>[`${P}${e.path}`.replace(/\/+$/,""),Xo[e.name]||""]));var Zo=r(async()=>Po({appUrl:k,updatedAt:Pe,sha256ByName:jr}),"agentSkillsIndex"),Hr={keys:[{kty:"OKP",crv:"Ed25519",kid:"knowgrph-agent-ready-2026-05-21",use:"sig",alg:"EdDSA",x:"11qYAYdkVKxA4G0wV47IxPtYfFVH_H7zmC2Di2PcvLU"}]},Fr={protocolVersion:"2025-06-18",capabilities:{tools:{}},serverInfo:ne.serverInfo},Br=ne.capabilities.tools.map(e=>({name:e.name,description:e.description,inputSchema:e.inputSchema})),Qo=r(()=>({status:"pass",service:"knowgrph-agent-ready-pages",homepage:k,health:ke,updatedAt:Pe,checks:{linkHeaders:!0,markdownNegotiation:!0,httpMcp:!0,webMcp:!0,commerce:{acp:!0,ucp:!0,mpp:!0,x402:!0},defaultWorkspaceId:ve}}),"buildHealthStatusBody"),Wr=r(async()=>ho({baseUrl:k,health:Qo(),apiCatalog:Vo,openApi:Yo,mcpServerCard:ne,agentCard:Jo,agentSkills:await Zo(),commerce:ft({origin:v})}),"buildAgentSurfaceInspection"),Gr=fo({toolNames:Dr,defaultWorkspaceId:ve,buildStorageDocPath:Go,fetchSourceFilesIndexResponse:r(()=>fetch(`${We}${Lo()}`,{headers:{accept:"text/markdown"}}),"fetchSourceFilesIndexResponse"),fetchStorageMarkdownResponse:r(e=>fetch(`${We}${e}`,{headers:{accept:"text/markdown"}}),"fetchStorageMarkdownResponse"),resolveSharedDocumentInput:r((e={})=>Fe({shareToken:e?.shareToken,shareUrl:e?.shareUrl,appBasePath:P,baseUrl:v}),"resolveSharedDocumentInput"),inspectSharedDocumentStructure:go,buildAgentSurfaceInspection:Wr}),en=r(e=>{try{let t=new URL(e,v);return Fe({shareUrl:`${t.pathname}${t.search}`,baseUrl:v,appBasePath:P})}catch{return null}},"resolvePublishedDocRequestIdentity"),zr=r(e=>Fe({shareUrl:String(e||""),baseUrl:v,appBasePath:P}),"resolvePublishedDocPathIdentity"),qr=r(async(e,t)=>{let o=new URL(Go(t.canonicalPath,t.workspaceId),We),n=await fetch(o,{method:"GET",headers:{accept:"text/markdown, text/plain;q=0.9, */*;q=0.1"}}),a=new Headers(n.headers),s=String(a.get("vary")||"");return a.set("vary",s?`${s}, Accept`:"Accept"),new Response(String(e.method||"").toUpperCase()==="HEAD"?null:n.body,{status:n.status,statusText:n.statusText,headers:a})},"proxyPublishedDocMarkdownResponse"),Vr=r(async e=>{try{let t=await e.json();return t&&typeof t=="object"?t:null}catch{return null}},"readJsonRpcRequest"),qe=r((e,t)=>H({jsonrpc:"2.0",id:e??null,result:t}),"jsonRpcResult"),At=r((e,t,o)=>H({jsonrpc:"2.0",id:e??null,error:{code:t,message:o}}),"jsonRpcError"),Yr=r(async(e,t)=>{let o=Gr[e];if(typeof o!="function")throw new Error(`unknown tool: ${e}`);return o(t)},"executeMcpTool"),Jr=r(async e=>{let t=String(e.method||"GET").toUpperCase();if(t==="GET"||t==="HEAD")return H({ok:!0,transport:ne.transport,serverInfo:ne.serverInfo,capabilities:ne.capabilities});if(t!=="POST")return qo(405,{ok:!1,error:"unsupported_method"});let o=await Vr(e);if(!o)return At(null,-32700,"Parse error");switch(o.method){case"initialize":return qe(o.id,Fr);case"tools/list":return qe(o.id,{tools:Br});case"tools/call":{let n=zo(o.params?.name),a=o.params?.arguments&&typeof o.params.arguments=="object"?o.params.arguments:{};if(!n)return At(o.id,-32602,"Tool name is required");try{let s=await Yr(n,a);return qe(o.id,{content:[{type:"text",text:typeof s?.markdown=="string"?s.markdown:JSON.stringify(s,null,2)}],structuredContent:s,isError:!1})}catch(s){return qe(o.id,{content:[{type:"text",text:s instanceof Error?s.message:String(s)}],isError:!0})}}default:return At(o.id,-32601,"Method not found")}},"handleMcpTransport");var Ct=r(e=>e===P||e===`${P}/`,"handlesKnowgrphRoot"),Xr=r(e=>Ct(e)||!!zr(e),"handlesKnowgrphHtmlSurface"),Zr=r(e=>{let t=new URL(e.url),o=t.pathname.replace(/\/+$/,"")||"/",n=en(e.url);return o===xe?"health":o===`${P}/mcp`?"mcp":o===`${P}/robots.txt`?"robots":o===`${P}/sitemap.xml`?"sitemap":o===`${P}/auth.md`||o==="/auth.md"?"auth-md":o.startsWith(`${P}/.well-known/`)?"well-known":n?Ie(e)?"shared-doc-markdown":"shared-doc-html":Ct(t.pathname)?Ie(e)?"homepage-markdown":"homepage-html":"app-surface"},"resolveAgentReadyRouteTag"),Et=r((e,t)=>Ho(t,{owner:Mo,tag:Zr(e)}),"withKnowgrphRouteHeaders"),Wo=r(async e=>{let t=new URL(e.url),o=t.pathname.replace(/\/+$/,"")||"/",n=en(e.url);if(n&&Ie(e))return qr(e,n);if(Ct(t.pathname)&&Ie(e))return jo(Ko);switch(o){case xe:return Rr(Qo());case`${P}/mcp`:return Jr(e);case`${P}/robots.txt`:return ze(Tr,"text/plain; charset=utf-8");case`${P}/sitemap.xml`:return ze(Cr,"application/xml; charset=utf-8");case`${P}/auth.md`:case"/auth.md":return ze(vr,"text/markdown; charset=utf-8");case`${P}/.well-known/api-catalog`:return H(Vo,"application/linkset+json; charset=utf-8");case`${P}/.well-known/openapi.json`:return H(Yo,"application/vnd.oai.openapi+json; charset=utf-8");case Pt:return H(Jo);case`${P}/.well-known/oauth-protected-resource`:return H(Oe);case`${P}/.well-known/oauth-authorization-server`:return H(Fo);case`${P}/.well-known/openid-configuration`:return H(Fo);case`${P}/.well-known/mcp/server-card.json`:return H(ne);case`${P}/.well-known/mcp.json`:return H(ne);case`${P}/.well-known/agent-skills/index.json`:return H(await Zo());case`${P}/.well-known/http-message-signatures-directory`:return H(Hr);default:return Bo.has(o)?ze(Bo.get(o),"text/markdown; charset=utf-8"):null}},"routeResponse");async function re(e){let{env:t,request:o}=e,n=String(o.method||"GET").toUpperCase(),a=new URL(o.url);if(n==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(n==="POST"&&a.pathname.replace(/\/+$/,"")===`${P}/mcp`)return Et(o,await Wo(o));if(n!=="GET"&&n!=="HEAD")return qo(405,{ok:!1,error:"unsupported_method"});let s=await Wo(o);if(s){let u=Et(o,s);return n==="HEAD"?new Response(null,u):u}let i=await e.next();if(!Xr(a.pathname))return i;let c=n==="HEAD"?i:await Mr(i),l=new Response(n==="HEAD"?null:c.body,c);return l.headers.set("link",Do),Et(o,l)}r(re,"onRequest");async function tn(e){return re(e)}r(tn,"onRequest");async function on(e){return re(e)}r(on,"onRequest");async function nn(e){return re(e)}r(nn,"onRequest");var Qr=Object.freeze(new Set(["","80","443"])),ea=Object.freeze([".local",".localhost",".internal"]),ta=Object.freeze(new Set(["localhost"]));function pe(e){return String(e||"").trim().toLowerCase()}r(pe,"normalizeHostname");function oa(e){let t=pe(e);if(!/^\d{1,3}(\.\d{1,3}){3}$/.test(t))return!1;let o=t.split(".").map(n=>Number(n));return o.length!==4?!1:o.every(n=>Number.isInteger(n)&&n>=0&&n<=255)}r(oa,"isIpv4Literal");function rn(e){let[t,o,n,a]=e.split(".").map(s=>Number(s));return(t<<24|o<<16|n<<8|a)>>>0}r(rn,"ipv4ToInt");function na(e,t,o){if(!Number.isInteger(o)||o<0||o>32)return!1;if(o===0)return!0;let n=4294967295<<32-o>>>0;return(e&n)===(t&n)}r(na,"inIpv4Cidr");function ra(e){let t=pe(e);return!t||!t.includes(":")?!1:/^[0-9a-f:]+$/i.test(t)}r(ra,"isIpv6Literal");function aa(e){let t=pe(e);return!!(!t||t==="::1"||t==="0:0:0:0:0:0:0:1"||t.startsWith("fc")||t.startsWith("fd")||/^fe[89ab]/i.test(t))}r(aa,"isBlockedIpv6");function sa(e,{blockedExact:t,blockedSuffixes:o}={}){let n=pe(e);if(!n)return!0;let a=t||ta;if(a instanceof Set&&a.has(n))return!0;let s=o||ea;if(Array.isArray(s))for(let i of s){let c=pe(i);if(c&&(n===c||n.endsWith(c)))return!0}return!1}r(sa,"isBlockedHostname");function ia(e){let t=pe(e);if(!t)return!0;if(oa(t)){let o=rn(t),n=[{base:"0.0.0.0",bits:8},{base:"10.0.0.0",bits:8},{base:"127.0.0.0",bits:8},{base:"169.254.0.0",bits:16},{base:"172.16.0.0",bits:12},{base:"192.168.0.0",bits:16},{base:"100.64.0.0",bits:10}];for(let a of n){let s=rn(a.base);if(na(o,s,a.bits))return!0}return!1}return ra(t)?aa(t):!1}r(ia,"isBlockedIpLiteral");function Ye(e,{allowedPorts:t}={}){let o=String(e||"").trim();if(!o)throw new Error("invalid_url");let n;try{n=new URL(o)}catch{throw new Error("invalid_url")}if(n.protocol!=="http:"&&n.protocol!=="https:")throw new Error("invalid_url");if(n.username||n.password)throw new Error("invalid_url");let a=t||Qr,s=String(n.port||"");if(a instanceof Set&&!a.has(s))throw new Error("port_not_allowed");let i=pe(n.hostname);if(!i)throw new Error("invalid_url");if(sa(i))throw new Error("blocked_host");if(ia(i))throw new Error("blocked_host");return n}r(Ye,"parseAndValidateExternalUrl");function Je(e){return String(e.headers.get("sec-fetch-site")||"").trim().toLowerCase()==="cross-site"}r(Je,"shouldRejectCrossSiteFetch");var ca={"content-type":"application/json; charset=utf-8","cache-control":"public, max-age=600"};function ue(e,t={}){return new Response(JSON.stringify(e),{...t,headers:{...ca,...t.headers||{}}})}r(ue,"json");function Xe(...e){for(let t of e){if(!t)continue;let o=String(t).trim();if(o)return o}return null}r(Xe,"pickFirst");function la(e){let t=e.slice(0,8e4),o=t.match(/<title[^>]*>([^<]*)<\/title>/i),n=t.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i),a=t.match(/<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i),s=t.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i),i=t.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i),c=t.match(/<meta[^>]+property=["']og:site_name["'][^>]*content=["']([^"']+)["'][^>]*>/i);return{title:Xe(n?.[1],o?.[1]),description:Xe(a?.[1],s?.[1]),image:Xe(i?.[1]),siteName:Xe(c?.[1])}}r(la,"extractMeta");async function an(e){let t=e.request.url,o=new URL(t);if(o.searchParams.get("ping")==="1")return ue({ok:!0,ping:!0});let n=o.searchParams.get("url")||"";if(Je(e.request))return ue({ok:!1,error:"forbidden"},{status:403,headers:{"cache-control":"no-store"}});let a;try{a=Ye(n)}catch{return ue({ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}try{let s=await fetch(a.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkPreview/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),i=s.headers.get("content-type")||"";if(!s.ok)return ue({ok:!1,error:"fetch_failed",status:s.status,url:a.toString()},{status:200,headers:{"cache-control":"no-store"}});if(!i.includes("text/html"))return ue({ok:!0,url:a.toString(),domain:a.host,contentType:i,title:null,description:null,image:null,siteName:null});let c=await s.text(),l=la(c);return ue({ok:!0,url:a.toString(),domain:a.host,contentType:i,...l})}catch(s){return ue({ok:!1,error:"exception",message:s?.message||String(s),url:a.toString()},{status:200,headers:{"cache-control":"no-store"}})}}r(an,"onRequestGet");var sn=35e4;function pa(e){let t=e;return t=t.replace(/<script\b[\s\S]*?<\/script>/gi,""),t=t.replace(/<iframe\b[\s\S]*?<\/iframe>/gi,""),t=t.replace(/<object\b[\s\S]*?<\/object>/gi,""),t=t.replace(/<embed\b[\s\S]*?>/gi,""),t=t.replace(/<noscript\b[\s\S]*?<\/noscript>/gi,""),t=t.replace(/\son[a-z]+\s*=\s*"[^"]*"/gi,""),t=t.replace(/\son[a-z]+\s*=\s*'[^']*'/gi,""),t}r(pa,"stripActiveContent");function ua({url:e,title:t,innerHtml:o}){let n=t?String(t).slice(0,140):"Preview",a=String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");return`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="referrer" content="no-referrer" />
    <title>${n}</title>
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
      <div class="t">${n}</div>
      <a href="${a}" target="_blank" rel="noopener">Open</a>
    </div>
    <div class="content">${o}</div>
  </body>
</html>`}r(ua,"buildWrapper");async function cn(e){let o=new URL(e.request.url).searchParams.get("url")||"";if(Je(e.request))return new Response("Forbidden",{status:403,headers:{"cache-control":"no-store"}});let n;try{n=Ye(o)}catch(a){let s=a instanceof Error?a.message:"invalid_url";return new Response(s,{status:400,headers:{"cache-control":"no-store"}})}try{let a=await fetch(n.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkProxy/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),s=a.headers.get("content-type")||"";if(!a.ok)return new Response(`Fetch failed (${a.status})`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});if(!s.includes("text/html"))return new Response(`Unsupported content-type: ${s}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public, max-age=600"}});let i=await a.text();i.length>sn&&(i=i.slice(0,sn));let l=i.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()||n.host;i=pa(i),/<base\s/i.test(i)||(i=i.replace(/<head([^>]*)>/i,`<head$1><base href="${n.origin}/">`));let f=ua({url:n.toString(),title:l,innerHtml:i});return new Response(f,{status:200,headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600","content-security-policy":"default-src 'none'; img-src https: data:; style-src 'unsafe-inline' https:; font-src https: data:; frame-ancestors 'self';"}})}catch(a){return new Response(`Exception: ${a?.message||String(a)}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}})}}r(cn,"onRequestGet");var vt="api.openai.com",Ze="api.miromind.ai",Qe="apihub.agnes-ai.com",et="ark.ap-southeast.bytepluses.com",It="ark.eu-west.bytepluses.com",pn=new Set(["localhost","127.0.0.1","0.0.0.0"]),X=r(e=>String(e||"").trim().toLowerCase(),"normalizeHost"),Y=r((e,t)=>String(e.get(t)||"").trim(),"readHeader"),un=r(e=>pn.has(X(e)),"isLocalHost"),ln=r(e=>{let t=String(e||"").trim();if(!t)return new Set;let o=new Set;return t.split(",").map(n=>X(n)).filter(Boolean).forEach(n=>o.add(n)),o},"parseCsvSet"),dn=r((e,{includeOpenAi:t=!1,includeMiroMind:o=!1,includeAgnes:n=!1,includeBytePlus:a=!1}={})=>{let s=ln(e.KNOWGRPH_INTEGRATION_ALLOWED_HOSTS),i=ln(e.KNOWGRPH_CHAT_PROXY_ALLOWED_HOSTS),c=s.size?s:i,l=c.size?c:new Set([...pn]);return t&&l.add(vt),o&&l.add(Ze),n&&l.add(Qe),a&&(l.add(et),l.add(It)),l},"parseAllowedHosts"),M=r(e=>{let t=Y(e.headers,"origin");if(!t)return{};let o="";try{o=X(new URL(t).host)}catch{return{}}let n=X(new URL(e.url).host);return o===n||o.startsWith("localhost:")||o.startsWith("127.0.0.1:")?{"access-control-allow-origin":t,vary:"Origin"}:{}},"corsHeaders"),z=r((e,t,o)=>new Response(JSON.stringify(t),{status:o,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...M(e)}}),"jsonResponse");var tt={"content-type":"application/json; charset=utf-8","cache-control":"no-store"};function Le(e,t,o=200){return new Response(JSON.stringify(t),{status:o,headers:{...tt,...M(e)}})}r(Le,"jsonResponse");async function da(e){let t=new URL("/knowgrph/imports/hackamap/hackamap-graph.json",e.url),o=await fetch(t.toString(),{redirect:"follow"});return o.ok?await o.json():null}r(da,"fetchHackamapGraphJson");async function de(e,t){let o=new URL(t,e.url),n=await fetch(o.toString(),{redirect:"follow"});return n.ok?await n.json():null}r(de,"fetchHackamapJson");async function ma(e){let t=await de(e,"/knowgrph/imports/hackamap/hackamap_api_graph.json");return gn(t)?t:null}r(ma,"fetchHackamapApiGraphJson");async function ha(e){let t=await de(e,"/knowgrph/imports/hackamap/hackamap_pipeline.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}r(ha,"fetchHackamapPipelineJson");async function hn(e){let t=await de(e,"/knowgrph/imports/hackamap/hackamap_query_presets.json");return Array.isArray(t)?t.filter(Boolean):[]}r(hn,"fetchHackamapQueryPresetsJson");async function fn(e){let t=await de(e,"/knowgrph/imports/hackamap/query-outputs/query-runs.manifest.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}r(fn,"fetchHackamapQueryRunsManifestJson");function gn(e){return!e||typeof e!="object"||Array.isArray(e)?!1:Array.isArray(e.nodes)&&Array.isArray(e.edges)}r(gn,"isApiGraphPayload");function wn(e,t){let o=String(e&&e.output&&e.output.per_table_prefix||e?.id||t?.preset||"").trim(),n=String(t?.output_suffix||"").trim();return n?`${o}-${n}`:o}r(wn,"buildHackamapTablePrefix");function Ot(e,t){if(!Array.isArray(e))return[];let o=[];for(let n of e){if(!n||typeof n!="object"||Array.isArray(n))continue;let a=String(n[t]||"").trim();a&&o.push(a)}return o}r(Ot,"collectRowIds");async function fa(e,t){let o=await de(e,t);return Array.isArray(o)?o.length:0}r(fa,"countHackamapQueryRows");async function ga(e,t,o){let n=wn(t,o);if(!n)return{};let a=["events","demos","sources","organizer","team","techstack"],s=await Promise.all(a.map(async i=>[i,await fa(e,`/knowgrph/imports/hackamap/query-outputs/${i}.${n}.query.json`)]));return Object.fromEntries(s.filter(([,i])=>i>0))}r(ga,"readHackamapRunTableCounts");function Ut(e){return Array.isArray(e)?e.map(Ut):!e||typeof e!="object"?e:Object.fromEntries(Object.entries(e).sort(([t],[o])=>String(t).localeCompare(String(o))).map(([t,o])=>[t,Ut(o)]))}r(Ut,"sortObjectKeys");function wa(e){try{return JSON.stringify(Ut(e))}catch{return""}}r(wa,"stableParamSignature");function ya(e){return typeof e=="string"?{value:e,label:e}:{value:e,label:JSON.stringify(e)}}r(ya,"toBuilderOption");function Sa(e,t){return e.map(o=>{let n=String(o?.id||"").trim();if(!n)return null;let a=o?.params&&typeof o.params=="object"&&!Array.isArray(o.params)?o.params:{},s=t.filter(l=>String(l?.preset||"").trim()===n),i=Array.from(new Set([...Object.keys(a),...s.flatMap(l=>l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?Object.keys(l.params):[])])).sort((l,u)=>String(l).localeCompare(String(u))),c=Object.fromEntries(i.map(l=>{let u=new Set,f=[],d=[a[l],...s.map(_=>_?.params&&typeof _.params=="object"&&!Array.isArray(_.params)?_.params[l]:void 0)];for(let _ of d){if(typeof _>"u")continue;let g=wa(_);!g||u.has(g)||(u.add(g),f.push(ya(_)))}return[l,f]}));return{id:n,title:String(o?.title||n).trim(),params:a,param_keys:i,published_param_options:c}}).filter(Boolean)}r(Sa,"buildHackamapPresetRuntimeEntries");async function ba(e){let[t,o,n]=await Promise.all([ha(e),hn(e),fn(e)]),a=t&&typeof t=="object"?t.runtime||{}:{},s=String(a?.query_selection?.default_run_id||"").trim()||"enhanced",i=Array.isArray(n?.runs)?n.runs:[],c=(await Promise.all(i.map(async l=>{let u=String(l?.id||"").trim(),f=String(l?.preset||"").trim();if(!u)return null;let d=o.find(g=>String(g?.id||"").trim()===f),_=await ga(e,d,l);return{id:u,preset:f,title:String(l?.title||l?.id||"").trim(),params:l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?l.params:{},output_suffix:String(l?.output_suffix||"").trim(),is_default:u===s,table_counts:_}}))).filter(l=>l?.id);return{ok:!0,runtime:{...a&&typeof a=="object"?a:{},presets:Sa(o,c),runs:c}}}r(ba,"buildHackamapRuntimeMeta");async function _a(e,t){let o=String(t||"").trim();if(!o)return null;let[n,a]=await Promise.all([hn(e),fn(e)]),i=(Array.isArray(a?.runs)?a.runs:[]).find(b=>String(b?.id||"").trim()===o);if(!i)return null;let c=n.find(b=>String(b?.id||"").trim()===String(i?.preset||"").trim()),l=wn(c,i);if(!l)return null;let[u,f]=await Promise.all([de(e,`/knowgrph/imports/hackamap/query-outputs/events.${l}.query.json`),de(e,`/knowgrph/imports/hackamap/query-outputs/demos.${l}.query.json`)]),d=new Set(Ot(u,"id")),_=new Set(Ot(f,"id")),g=Ot(f,"event_id");for(let b of g)d.add(b);return{eventIds:d,demoIds:_}}r(_a,"readHackamapQueryRunSelection");function mn(e,t,o){if(!o||!gn(e))return e;if(o.eventIds.size===0&&o.demoIds.size===0)return{...e,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_run_filter_skipped:"no-event-demo-rows"}};let n=new Set;o.eventIds.forEach(c=>n.add(`Event:${c}`)),o.demoIds.forEach(c=>n.add(`Demo:${c}`));let a=Array.isArray(e.nodes)?e.nodes.filter(c=>n.has(String(c?.id||"").trim())):[],s=new Set(a.map(c=>String(c?.id||"").trim()).filter(Boolean)),i=Array.isArray(e.edges)?e.edges.filter(c=>s.has(String(c?.source||"").trim())&&s.has(String(c?.target||"").trim())):[];return{...e,nodes:a,edges:i,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_event_count:o.eventIds.size,selected_demo_count:o.demoIds.size,total_problems:a.filter(c=>String(c?.type||"").trim()==="problem").length,total_solutions:a.filter(c=>String(c?.type||"").trim()==="solution").length}}}r(mn,"filterHackamapApiGraphPayloadByRun");function ka(e){let t=Array.isArray(e?.nodes)?e.nodes:[],o=Array.isArray(e?.links)?e.links:[],n=[],a=new Set;for(let i of t){let c=String(i?.id||"").trim(),l=String(i?.type||"").trim(),u=String(i?.label||"").trim();if(!(!c||!l||!u)){if(l==="Event"){n.push({id:c,type:"problem",label:u,cluster:"Event"}),a.add(c);continue}l==="Demo"&&(n.push({id:c,type:"solution",label:u,cluster:"Demo"}),a.add(c))}}let s=[];for(let i of o){let c=String(i?.source||"").trim(),l=String(i?.target||"").trim(),u=String(i?.type||"").trim();!c||!l||u==="has_demo"&&(!a.has(c)||!a.has(l)||s.push({source:c,target:l,type:"has_demo",strength:.35}))}return{nodes:n,edges:s,meta:{source:"hackamap-graph.json:fallback",total_problems:n.filter(i=>i.type==="problem").length,total_solutions:n.filter(i=>i.type==="solution").length,...e?.content_signature?{content_signature:String(e.content_signature)}:{}}}}r(ka,"toBipartiteApiPayload");async function yn(e){let{request:t}=e,o=String(t.method||"GET").toUpperCase(),n=new URL(t.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{...M(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(o!=="GET"&&o!=="HEAD")return Le(t,{ok:!1,error:"unsupported_method"},405);if(String(n.searchParams.get("view")||"").trim().toLowerCase()==="meta"){let f=await ba(t);return o==="HEAD"?new Response(null,{status:200,headers:{...tt,...M(t)}}):Le(t,f,200)}let a=String(n.searchParams.get("run")||"").trim(),s=await _a(t,a),i=await ma(t);if(i){let f=mn(i,a,s);return o==="HEAD"?new Response(null,{status:200,headers:{...tt,...M(t)}}):Le(t,f,200)}let c=await da(t);if(!c)return Le(t,{ok:!1,error:"missing_hackamap_graph",hint:"/knowgrph/imports/hackamap/{hackamap_api_graph.json,hackamap-graph.json} not found"},404);let l=ka(c),u=mn(l,a,s);return o==="HEAD"?new Response(null,{status:200,headers:{...tt,...M(t)}}):Le(t,u,200)}r(yn,"onRequest");var Pa=!0,Sn=600,bn={"content-type":"application/json; charset=utf-8","cache-control":`public, max-age=${Sn}`};function me(e,t,o={}){return new Response(JSON.stringify(t),{...o,headers:{...bn,...o.headers||{},...M(e)}})}r(me,"jsonResponse");function xa(e){try{let t=new URL(String(e));return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}r(xa,"isHttpUrl");function $e(e){return String(e||"").trim().toLowerCase()}r($e,"normalizeHost");function Lt(e,{exact:t,suffixes:o}){let n=$e(e);return n?!!(Array.isArray(t)&&t.some(a=>n===$e(a))||Array.isArray(o)&&o.some(a=>n===$e(a)||n.endsWith(`.${$e(a)}`))):!1}r(Lt,"isHostMatch");function Ra(e){let t=$e(e.hostname),o=e.toString();return Lt(t,{suffixes:["linkedin.com"]})?new URL(`https://www.linkedin.com/embeds/oembed.json?url=${encodeURIComponent(o)}`):Lt(t,{exact:["twitter.com","x.com"],suffixes:["twitter.com","x.com"]})?new URL(`https://publish.twitter.com/oembed?omit_script=1&url=${encodeURIComponent(o)}`):Lt(t,{exact:["reddit.com"],suffixes:["reddit.com"]})?new URL(`https://www.reddit.com/oembed?url=${encodeURIComponent(o)}`):null}r(Ra,"buildOembedUpstreamUrl");async function Aa({upstreamUrl:e}){return await fetch(e.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; OEmbedProxy/1.0)",accept:"application/json,text/json;q=0.9,*/*;q=0.1"},redirect:"follow",cf:{cacheTtl:Sn,cacheEverything:!0}})}r(Aa,"fetchJsonUpstream");async function _n(e){let{request:t}=e,o=String(t.method||"GET").toUpperCase(),n=new URL(t.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{...M(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD"].includes(o))return me(t,{ok:!1,error:"unsupported_method"},{status:405});if(n.searchParams.get("ping")==="1")return me(t,{ok:!0,ping:!0});if(Pa)return me(t,{ok:!1,error:"disabled_by_policy"},{status:200,headers:{"cache-control":"no-store"}});let a=n.searchParams.get("url")||"";if(!xa(a))return me(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}});let s;try{s=new URL(a)}catch{return me(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}let i=Ra(s);if(!i)return me(t,{ok:!1,error:"unsupported_provider"},{status:400,headers:{"cache-control":"no-store"}});let c=await Aa({upstreamUrl:i}),l=new Headers(c.headers);l.delete("content-length"),l.set("cache-control",c.ok?bn["cache-control"]:"no-store");for(let[f,d]of Object.entries(M(t)))l.set(f,d);if(o==="HEAD")return new Response(null,{status:c.status,headers:l});let u=await c.text();try{JSON.parse(u)}catch{return me(t,{ok:!1,error:"invalid_upstream_json",status:c.status},{status:502,headers:{"cache-control":"no-store"}})}return l.set("content-type","application/json; charset=utf-8"),new Response(u,{status:c.status,headers:l})}r(_n,"onRequest");var kn="/__chat_proxy",ot="agnes-ai",nt="byteplus-modelark",rt="miromind",Ea=r(e=>{let t=X(e);return t==="openai"?"openai":t===nt||t==="byteplus"?nt:t===rt||t==="miromind-api"?rt:t===ot||t==="agnes"||t==="agnes-ai-api"?ot:t},"normalizeProviderId"),Ta=r(e=>X(e)===Qe,"isAgnesHost"),Ca=r(e=>{let t=X(e);return t===et||t===It},"isBytePlusHost"),va=r(e=>X(e)===Ze,"isMiroMindHost"),Ia=r(({provider:e,requestedUpstream:t,env:o})=>e==="openai"?"https://api.openai.com":e===rt?t||`https://${Ze}`:e===ot?t||`https://${Qe}`:e===nt?t||String(o.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim()||`https://${et}`:t||String(o.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim(),"pickUpstreamBase");async function Pn(e){let{request:t,env:o}=e,n=String(t.method||"GET").toUpperCase(),a=new URL(t.url);if(n==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":Y(t.headers,"origin")||"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD","POST"].includes(n))return z(t,{ok:!1,error:"Unsupported method"},405);let s=Ea(Y(t.headers,"x-kg-chat-provider")),i=Ia({provider:s,requestedUpstream:Y(t.headers,"x-kg-chat-upstream"),env:o});if(!i)return z(t,{ok:!1,error:"Missing chat proxy upstream configuration"},500);let c;try{c=new URL(i)}catch{return z(t,{ok:!1,error:"Invalid chat proxy upstream configuration"},500)}let l=dn(o,{includeOpenAi:!0,includeMiroMind:!0,includeAgnes:!0,includeBytePlus:!0}),u=X(c.hostname);if(!l.has(u))return z(t,{ok:!1,error:"Chat proxy upstream host is not allowed"},403);if(!un(u)&&c.protocol!=="https:")return z(t,{ok:!1,error:"Chat proxy requires HTTPS for non-local upstream hosts"},403);let f=s==="openai"||u===vt,d=s===rt||va(u),_=s===ot||Ta(u),g=s===nt||Ca(u),b=Y(t.headers,"x-kg-chat-api-key"),E=String(o.KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY||o.OPENAI_API_KEY||"").trim(),x=String(o.KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY||o.MIROMIND_API_KEY||"").trim(),C=String(o.KNOWGRPH_CHAT_PROXY_AGNES_API_KEY||o.AGNES_API_KEY||"").trim(),I=String(o.KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY||o.BYTEPLUS_API_KEY||"").trim(),U=(b||E).slice(0,512),T=(b||x).slice(0,512),q=(b||C).slice(0,512),K=(b||I).slice(0,512),w=g?K:_?q:d?T:U;if(f&&!U)return z(t,{ok:!1,error:"Missing OpenAI API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY or OPENAI_API_KEY)"},401);if(d&&!w)return z(t,{ok:!1,error:"Missing MiroMind API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY or MIROMIND_API_KEY)"},401);if(_&&!w)return z(t,{ok:!1,error:"Missing Agnes API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_AGNES_API_KEY or AGNES_API_KEY)"},401);if(g&&!w)return z(t,{ok:!1,error:"Missing BytePlus API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY or BYTEPLUS_API_KEY)"},401);if(n==="POST"&&!Y(t.headers,"content-type").toLowerCase().includes("application/json"))return z(t,{ok:!1,error:"Chat proxy expects application/json payloads"},415);let y=a.pathname.startsWith(kn)&&a.pathname.slice(kn.length)||"/v1/chat/completions",m=y.startsWith("/")?y:`/${y}`,h=new URL(`${m}${a.search||""}`,c),A=new Headers,Z=Y(t.headers,"content-type"),ie=Y(t.headers,"accept");Z&&A.set("content-type",Z),ie&&A.set("accept",ie),(f||d||_||g)&&A.set("authorization",`Bearer ${w}`);let he=Y(t.headers,"x-client-request-id").slice(0,512);he&&A.set("x-client-request-id",he);let fe=new AbortController,ge=Number(o.KNOWGRPH_CHAT_PROXY_TIMEOUT_MS),Re=Number.isFinite(ge)?Math.max(5e3,Math.min(18e4,Math.floor(ge))):9e4,we=setTimeout(()=>fe.abort(),Re);try{let D=await fetch(h.toString(),{method:n,headers:A,body:n==="GET"||n==="HEAD"?void 0:t.body,signal:fe.signal,redirect:"follow"}),B=new Headers(D.headers);B.delete("content-length"),B.delete("www-authenticate"),B.set("cache-control","no-store");let Me=Y(t.headers,"origin");return Me&&(B.set("access-control-allow-origin",Me),B.set("vary","Origin")),n==="HEAD"?new Response(null,{status:D.status,statusText:D.statusText,headers:B}):new Response(D.body,{status:D.status,statusText:D.statusText,headers:B})}catch(D){let B=D&&typeof D=="object"&&"message"in D?String(D.message||""):"",Me=fe.signal.aborted||/aborted|timeout/i.test(B);return z(t,{ok:!1,error:B||"Failed to reach chat upstream"},Me?504:502)}finally{clearTimeout(we)}}r(Pn,"onRequest");function Oa(e){let t=e.map(o=>o==null?"":typeof o=="boolean"?o?"1":"0":typeof o=="number"?Number.isFinite(o)?String(o):"":String(o)).join("|");return`rich-media-preview:${Ae(t)}`}r(Oa,"buildRichMediaPreviewSemanticKey");var Rn="png";function st(e){let t=typeof e=="number"?e:Number(String(e??"").trim());if(!Number.isFinite(t))return null;let o=Math.max(0,Math.floor(t));return Number.isFinite(o)?o:null}r(st,"normalizeRemoteVideoFrameSeconds");function it(e){let t=String(e||"").trim().toLowerCase();return t==="jpg"||t==="jpeg"?"jpg":"png"}r(it,"normalizeRemoteVideoFrameFormat");function $t(e){let t=String(e.sourceUrl||"").trim(),o=st(e.timeSeconds)??0,n=it(e.format||Rn);return Oa(["remote-video-frame",t,o,n])}r($t,"buildRemoteVideoFrameSemanticKey");function An(e){let t=st(e.timeSeconds)??0,o=it(e.format||Rn),n=$t({...e,timeSeconds:t,format:o});return`frame-${n.split(":").pop()||Ae(n)}-t${t}.${o}`}r(An,"buildRemoteVideoFrameFileName");var at=r(e=>{let t=String(e||"").trim();return t&&/^[A-Za-z0-9_-]{6,128}$/.test(t)?t:null},"normalizeYouTubeIdLikeValue"),xn=r(e=>{try{let t=new URL(String(e||"").trim()),o=String(t.hostname||"").toLowerCase();if(o==="youtu.be"||o.endsWith(".youtu.be")){let n=t.pathname.replace(/^\/+/,"").split("/")[0]?.trim()||"";return at(n)}if(o==="youtube.com"||o.endsWith(".youtube.com")||o==="youtube-nocookie.com"||o.endsWith(".youtube-nocookie.com")){let n=String(t.searchParams.get("v")||"").trim();if(n)return at(n);let a=t.pathname.split("/").filter(Boolean),s=a[0]||"",i=a[1]||"";if((s==="embed"||s==="shorts"||s==="live")&&i)return at(i);if(s==="watch"){let c=String(t.searchParams.get("v")||"").trim();return at(c)}}}catch{return null}return null},"readYouTubeIdFromUrl");function Ua(e){let t=String(e||"").trim().replace(/^<|>$/g,"").trim();for(;/[),.;:!?]$/.test(t);){let o=t.slice(0,-1).trim();if(!o)break;let n=xn(t),a=xn(o);if(!a||n&&n!==a)break;t=o}return t}r(Ua,"stripYouTubeUrlTrailingPunctuation");function En(e){let t=r(o=>{let n=String(o||"").trim();if(!n)return null;if(/^\d+$/.test(n))return Number(n);let a=n.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i);if(!a)return null;let s=a[1]?Number(a[1]):0,i=a[2]?Number(a[2]):0,c=a[3]?Number(a[3]):0,l=s*3600+i*60+c;return l>0&&Number.isFinite(l)?l:null},"parseChunk");try{let o=new URL(Ua(e)),n=o.searchParams.get("t")||o.searchParams.get("start")||"",a=o.hash&&new URLSearchParams(o.hash.replace(/^#/,"")).get("t")||"";return t(n)??t(a)}catch{return null}}r(En,"parseYouTubeStartSeconds");var La="/image/knowgrph/video-frame",$a=4096,Na=720*60,Ma=/^frame-[a-f0-9]+-t\d+\.(?:png|jpg)$/i,Kt={"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"accept, content-type"},Dt=r(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),Nt=r((e,t=200,o="GET")=>new Response(o==="HEAD"?null:JSON.stringify(e),{status:t,headers:{...Kt,"content-type":"application/json; charset=utf-8","cache-control":"no-store"}}),"jsonResponse"),Mt=r((e,t=200,o="GET")=>new Response(o==="HEAD"?null:e,{status:t,headers:{...Kt,"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}}),"textResponse"),Da=r((e,t)=>e===t||e.endsWith(`.${t}`),"hostMatches"),Ka=r(e=>{let t=Dt(e?.KG_VIDEO_FRAME_ALLOWED_HOSTS);return t?t.split(",").map(o=>Dt(o).toLowerCase()).filter(Boolean):["youtube.com","youtu.be","youtube-nocookie.com","bilibili.com","b23.tv"]},"readAllowedHosts"),ja=r(e=>Dt(e).replace(/^<|>$/g,"").trim(),"unwrapUrlInput"),Ha=r((e,t)=>{try{let o=new URL(e);if(o.protocol!=="https:"&&o.protocol!=="http:")return!1;let n=o.hostname.toLowerCase();return Ka(t).some(a=>Da(n,a))}catch{return!1}},"isAllowedSourceUrl"),Fa=r((e,t)=>{let o=new URL(e.url),n=ja(o.searchParams.get("url")||"");if(!n)return{error:"Missing url parameter"};if(n.length>$a)return{error:"Video URL is too long"};if(!Ha(n,t))return{error:"Video frame extraction is limited to supported remote video hosts"};let a=st(o.searchParams.get("time"))??En(n);if(a==null)return{error:"Missing time parameter"};let s=Math.min(Na,Math.max(0,a)),i=it(o.searchParams.get("format")||"png"),c=An({sourceUrl:n,timeSeconds:s,format:i});if(!Ma.test(c))return{error:"Invalid frame cache key"};let l=`${La}/${c}`;return{sourceUrl:n,timeSeconds:s,format:i,fileName:c,publicUrl:l,semanticKey:$t({sourceUrl:n,timeSeconds:s,format:i})}},"readFrameRequest"),Ba=r(async(e,t,o)=>{let n=new URL(t,e.request.url),a=new Request(n.toString(),{method:o});return typeof e.env?.ASSETS?.fetch=="function"?await e.env.ASSETS.fetch(a):await fetch(a)},"fetchStaticAsset"),Wa=r(e=>`Frame has not been generated yet. Run the local video-frame extractor and publish ${e.publicUrl}.`,"missingFrameMessage"),Ga=r((e,t)=>{let o=new Headers;o.set("content-type",t.format==="jpg"?"image/jpeg":"image/png"),o.set("cache-control","public, max-age=31536000, immutable"),o.set("access-control-allow-origin","*");let n=e.headers.get("content-length");n&&o.set("content-length",n);let a=e.headers.get("etag");return a&&o.set("etag",a),o},"imageResponseHeaders");async function Tn(e){let t=e.request;if(t.method==="OPTIONS")return new Response(null,{status:204,headers:Kt});if(t.method!=="GET"&&t.method!=="HEAD")return Mt("Method not allowed",405,t.method);let o=new URL(t.url).searchParams.get("emit")==="json",n=Fa(t,e.env||{});if("error"in n)return o?Nt({ok:!1,error:n.error},400,t.method):Mt(n.error,400,t.method);let a=o&&t.method!=="HEAD"?"GET":o||t.method==="HEAD"?"HEAD":"GET",s=await Ba(e,n.publicUrl,a);if(!s.ok){let i=Wa(n);return o?Nt({ok:!1,error:i,publicUrl:n.publicUrl,semanticKey:n.semanticKey},404,t.method):Mt(i,404,t.method)}if(o){let i=Number(s.headers.get("content-length")||0);return(!Number.isFinite(i)||i<=0)&&t.method!=="HEAD"&&(i=(await s.arrayBuffer()).byteLength),Nt({ok:!0,imageUrl:n.publicUrl,publicUrl:n.publicUrl,semanticKey:n.semanticKey,cached:!0,bytes:Number.isFinite(i)?Math.max(0,Math.floor(i)):0,timeSeconds:n.timeSeconds,format:n.format},200,t.method)}return new Response(t.method==="HEAD"?null:s.body,{status:200,headers:Ga(s,n)})}r(Tn,"onRequest");var Cn={"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"content-type"},ct=r((e,t=200,o="GET")=>new Response(o==="HEAD"?null:JSON.stringify(e),{status:t,headers:Cn}),"jsonResponse"),O=r(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),za=r(e=>{try{let t=new URL(String(e||"").trim());if(/youtu\.be$/i.test(t.hostname))return O(t.pathname.split("/").filter(Boolean)[0]);if(/youtube\.com$/i.test(t.hostname)||/youtube-nocookie\.com$/i.test(t.hostname)){let o=O(t.searchParams.get("v"));if(o)return o;let n=t.pathname.split("/").filter(Boolean),a=n.findIndex(s=>["embed","shorts","live"].includes(s));if(a>=0)return O(n[a+1])}}catch{}return""},"readVideoId"),qa=r((e,t)=>{let o=e.indexOf(t);if(o<0)return null;let n=e.indexOf("{",o);if(n<0)return null;let a=0,s=!1,i=!1;for(let c=n;c<e.length;c+=1){let l=e[c];if(s){i?i=!1:l==="\\"?i=!0:l==='"'&&(s=!1);continue}if(l==='"')s=!0;else if(l==="{")a+=1;else if(l==="}"&&(a-=1,a===0))return e.slice(n,c+1)}return null},"extractJsonAfter"),Va=r(e=>{for(let t of["ytInitialPlayerResponse =","ytInitialPlayerResponse="]){let o=qa(e,t);if(o)try{return JSON.parse(o)}catch{}}return null},"parsePlayerResponse"),Ya=r((e,t)=>{let o=O(t||"en").toLowerCase();return e.find(n=>O(n.languageCode).toLowerCase()===o)||e.find(n=>O(n.languageCode).toLowerCase().startsWith(o.split("-")[0]))||e.find(n=>O(n.kind)!=="asr")||e[0]||null},"pickCaptionTrack"),Ja=r(e=>{let t=new URL(e);return t.searchParams.set("fmt","json3"),t.toString()},"withJsonCaptionFormat"),Xa=r(e=>(Array.isArray(e?.events)?e.events:[]).map(o=>{let n=Array.isArray(o.segs)?O(o.segs.map(i=>i?.utf8||"").join("")):"",a=Number(o.tStartMs)/1e3,s=Number(o.dDurationMs||0)/1e3;return n&&Number.isFinite(a)?{text:n,start:a,duration:Number.isFinite(s)?s:0}:null}).filter(Boolean),"parseCaptionJson3"),Za=r(e=>String(e||"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'"),"decodeXmlText"),Qa=r(e=>{let t=[],o=/<text\b([^>]*)>([\s\S]*?)<\/text>/gi,n=null;for(;n=o.exec(String(e||""));){let a=n[1]||"",s=Number(a.match(/\bstart="([^"]+)"/i)?.[1]),i=Number(a.match(/\bdur="([^"]+)"/i)?.[1]||0),c=O(Za(n[2]||""));c&&Number.isFinite(s)&&t.push({text:c,start:s,duration:Number.isFinite(i)?i:0})}return t},"parseCaptionXml"),es=r((e,t)=>{let o=String(e||"").trim();if(!o)return[];if(String(t||"").toLowerCase().includes("json")||o.startsWith("{")||o.startsWith("["))try{return Xa(JSON.parse(o))}catch{return[]}return Qa(o)},"parseCaptionResponseText"),ts=r(e=>{let t=Math.max(0,Math.floor(Number(e)||0)),o=Math.floor(t/60),n=String(t%60).padStart(2,"0");return`${o}:${n}`},"formatTimestamp"),os=r((e,t)=>{let o=new URL(e);return o.searchParams.set("t",`${Math.max(0,Math.floor(Number(t)||0))}s`),o.toString()},"timestampUrl"),ns=r(({title:e,sourceUrl:t,videoId:o,authorName:n,thumbnailUrl:a,segments:s})=>[`# ${e||`YouTube ${o}`}`,"",`Video ID: ${o}`,n?`Author: ${n}`:"",`Source: [${t}](${t})`,a?`[![${e||o}](${a})](${t})`:"","",s.length>0?"## Transcript":"## Video Source","",...s.length>0?s.map(i=>`[${ts(i.start)}](${os(t,i.start)}) ${i.text}`):["Captions were not available from the source at import time.","The source URL, title, author, and thumbnail remain available for downstream storyboard reconstruction."],""].filter(i=>i!=="").join(`
`),"buildMarkdown"),jt=r(({videoId:e,sourceUrl:t,title:o,authorName:n,thumbnailUrl:a,lang:s,languageCode:i,segments:c,captionStatus:l})=>{let u={type:"rag:YouTubeTranscript",video_id:e,source_url:t,title:o,author_name:n,thumbnail_url:a,language_code:O(i)||s,caption_status:l,segment_count:c.length,duration:c.reduce((f,d)=>Math.max(f,d.start+d.duration),0),segments:c};return{ok:!0,name:`youtube-${e.toLowerCase()}.md`,markdown:ns({title:o,sourceUrl:t,videoId:e,authorName:n,thumbnailUrl:a,segments:c}),transcript:u}},"buildPayload");async function rs({sourceUrl:e,lang:t="en",fetchImpl:o=fetch}){let n=za(e);if(!n)return{ok:!1,error:"unsupported_youtube_url"};let a=`https://www.youtube.com/watch?v=${encodeURIComponent(n)}`,[s,i]=await Promise.all([o(`https://www.youtube.com/oembed?url=${encodeURIComponent(a)}&format=json`,{headers:{accept:"application/json"}}).catch(()=>null),o(a,{headers:{accept:"text/html,application/xhtml+xml","accept-language":"en-US,en;q=0.9","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}})]),c=s?.ok?await s.json().catch(()=>({})):{},l=i.ok?Va(await i.text()):null,u=O(c.title)||O(l?.videoDetails?.title)||`YouTube ${n}`,f=O(c.author_name)||O(l?.videoDetails?.author),d=O(c.thumbnail_url)||`https://i.ytimg.com/vi/${n}/hqdefault.jpg`;if(!i.ok)return jt({videoId:n,sourceUrl:a,title:u,authorName:f,thumbnailUrl:d,lang:t,languageCode:t,segments:[],captionStatus:`watch-fetch-${i.status}`});let _=l?.captions?.playerCaptionsTracklistRenderer?.captionTracks||[],g=Ya(Array.isArray(_)?_:[],t);if(!g?.baseUrl)return jt({videoId:n,sourceUrl:a,title:u,authorName:f,thumbnailUrl:d,lang:t,languageCode:t,segments:[],captionStatus:"captions-unavailable"});let b=await o(Ja(g.baseUrl),{headers:{accept:"application/json,text/xml,text/plain,*/*","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}}).catch(()=>null),E=b?await b.text().catch(()=>""):"",x=b?.ok?es(E,b.headers.get("content-type")):[],C=x.length>0?"available":b?.ok?"captions-empty":`captions-fetch-${b?.status||"failed"}`;return jt({videoId:n,sourceUrl:a,title:u,authorName:f,thumbnailUrl:d,lang:t,languageCode:g.languageCode,segments:x,captionStatus:C})}r(rs,"buildYouTubeTranscriptPayload");async function vn(e){let t=e.request,o=String(t.method||"GET").toUpperCase();if(o==="OPTIONS")return new Response(null,{status:204,headers:Cn});if(o!=="GET"&&o!=="HEAD"&&o!=="POST")return ct({ok:!1,error:"unsupported_method"},405,o);let n=new URL(t.url),a=O(n.searchParams.get("url")),s=O(n.searchParams.get("lang"))||"en";if(!a)return ct({ok:!1,error:"missing_url"},400,o);try{let i=await rs({sourceUrl:a,lang:s});return ct(i,i.ok?200:502,o)}catch(i){let c=i&&typeof i=="object"&&"message"in i?O(i.message):"";return ct({ok:!1,error:c||"youtube_conversion_failed"},502,o)}}r(vn,"onRequest");async function In(e){let{request:t}=e,o=String(t.method||"GET").toUpperCase();if(o==="OPTIONS")return new Response(null,{status:204,headers:{...M(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(o!=="GET"&&o!=="HEAD")return new Response(JSON.stringify({ok:!1,error:"unsupported_method"}),{status:405,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...M(t)}});let n={ok:!0,service:"singabldr-pages",ts:new Date().toISOString()},a={"content-type":"application/json; charset=utf-8","cache-control":"no-store",...M(t)};return o==="HEAD"?new Response(null,{status:200,headers:a}):new Response(JSON.stringify(n),{status:200,headers:a})}r(In,"onRequest");var ae="https://airvio.co";var F="/knowgrph",ee=`${ae}${F}/`,as=`${ae}/`;var Un=`${F}/health`,On=`${ae}${Un}`,Ln="/.well-known/agent-card.json",dl=`${F}/.well-known/agent-card.json`,ss=`${ae}${Ln}`,is=`${ae}/api/storage/source-files`,cs=`${ae}/api/storage/doc-default/{canonicalPath}`,ls=`${ae}/api/storage/doc/{workspaceId}/{canonicalPath}`;var Ht="root-agent-ready-pages",$n=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${F}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${F}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${Un}>; rel="status"; type="application/health+json"`,`<${F}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${Ln}>; rel="describedby"; type="application/json"`].join(", "),Nn=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${ee}.

## Discovery

- Crawl policy: ${ee}robots.txt
- Sitemap: ${ee}sitemap.xml
- API catalog: ${ee}.well-known/api-catalog
- Auth.md registration instructions: ${as}auth.md
- Health: ${On}
- MCP server card: ${ee}.well-known/mcp/server-card.json
- A2A Agent Card: ${ss}
- Agent skills: ${ee}.well-known/agent-skills/index.json
- LLM reference: ${ee}llms.txt

## APIs

- Agent-ready status: ${On}
- HTTP MCP: ${ee}mcp
- Storage API: ${ae}/api/storage/
- Source Files index: ${is}
- Default Source File documents: ${cs}
- Workspace Source File documents: ${ls}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes five read-only tools for published Source Files, shared documents, and agent-surface inspection.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared five-tool WebMCP surface on \`${ee}\` HTML routes.
`,Mn=r(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),Dn=r(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(o=>o.trim().startsWith("text/markdown")),"wantsMarkdown"),Ft=r((e,t)=>{let o=new Response(e.body,e),n=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return n&&o.headers.set("x-knowgrph-route-owner",n),a&&o.headers.set("x-knowgrph-route-tag",a),o},"withAgentReadyRouteHeaders");var lt="Agent-actionable chat-to-canvas knowledge graph workspace",ps=new RegExp(["Agent-readable","knowledge","graph","workspace"].join("\\s+")+"\\.?","g"),us=r(e=>{let t=/<script>([\s\S]*?)<\/script>/g;for(let o of String(e||"").matchAll(t)){let n=o[1]||"";if(n.includes("createWebMcpLifecycleController")&&n.includes("toolDefinitions"))return n}return""},"extractWebMcpScript"),Kn=r(()=>({"content-type":"text/html; charset=utf-8","cache-control":"no-store, no-cache, no-transform, must-revalidate, max-age=0","access-control-allow-origin":"*",link:$n}),"rootHtmlHeaders"),Bt=r((e,t)=>String(e||"").includes("</head>")?String(e||"").replace("</head>",`${t}</head>`):`${String(e||"")}${t}`,"injectIntoHead"),pt=r(()=>`<main id="knowgrph-root-fallback" data-knowgrph-root-fallback="visible" aria-label="Knowgrph root alias" style="position:fixed;inset:0;z-index:2147483000;display:grid;place-content:center;gap:1rem;padding:2rem;box-sizing:border-box;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#101820;color:#f4f7fb;text-align:center">
      <h1 style="margin:0;font-size:clamp(2.25rem,8vw,5.5rem);line-height:1;font-weight:760">Knowgrph</h1>
      <p style="margin:0 auto;max-width:42rem;font-size:clamp(1rem,2.2vw,1.35rem);line-height:1.55;color:#d6e1ea">${lt}</p>
      <p style="margin:0"><a href="${F}/" style="display:inline-flex;align-items:center;justify-content:center;min-height:2.75rem;padding:0 1.05rem;border:1px solid #7db3ff;border-radius:8px;color:#f8fbff;text-decoration:none;background:#1f5fa8">Open Knowgrph</a></p>
    </main>
    <script>
      (() => {
        const root = document.getElementById("root");
        const fallback = document.getElementById("knowgrph-root-fallback");
        if (!root || !fallback || typeof MutationObserver === "undefined") return;
        const sync = () => {
          const mounted = root.childElementCount > 0;
          fallback.hidden = mounted;
          fallback.style.display = mounted ? "none" : "grid";
          fallback.dataset.knowgrphRootFallback = mounted ? "hidden" : "visible";
        };
        new MutationObserver(sync).observe(root, { childList: true });
        sync();
      })();
    <\/script>`,"rootVisibleFallbackMarkup"),ds=r(e=>{let t=String(e||"");if(/<main\s+id=["']knowgrph-root-fallback["']/i.test(t))return t;let o=/<div\s+id=["']root["']\s*><\/div>/i;return o.test(t)?t.replace(o,n=>`${n}
    ${pt()}`):t.includes("</body>")?t.replace("</body>",`    ${pt()}
  </body>`):`${t}
${pt()}`},"injectRootVisibleFallback"),ms=r(e=>{let t=String(e||"").replace(ps,lt);return/<meta\s+name=["']description["'][^>]*>/i.test(t)?t=t.replace(/<meta\s+name=["']description["'][^>]*>/i,`<meta name="description" content="${lt}" />`):t=Bt(t,`    <meta name="description" content="${lt}" />
`),/<link\s+rel=["']canonical["'][^>]*>/i.test(t)||(t=Bt(t,`    <link rel="canonical" href="${F}/" />
`)),/<meta\s+name=["']x-knowgrph-root-alias["'][^>]*>/i.test(t)||(t=Bt(t,`    <meta name="x-knowgrph-root-alias" content="${F}/" />
`)),ds(t)},"rewriteRootAppHtml"),hs=r(async e=>{let t=new URL(`${F}/?agentReadyRootWebMcp=1`,e.url),o=await fetch(t,{headers:{accept:"text/html"}});return o.ok?us(await o.text()):""},"loadWebMcpScript"),fs=r(async e=>{let t=new URL(`${F}/?agentReadyRootAlias=1`,e.url),o=await fetch(t,{headers:{accept:"text/html"}});if(!o.ok)return null;let n=ms(await o.text());return!n.includes('<div id="root"></div>')||!n.includes(`${F}/assets/`)?null:new Response(n,{status:200,headers:Kn()})},"loadKnowgrphAppShell"),gs=r((e="")=>new Response(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Knowgrph</title>
    <link rel="canonical" href="/knowgrph/" />
    ${e?`<script>${e}<\/script>`:""}
  </head>
  <body>
    <div id="root"></div>
    ${pt()}
  </body>
</html>`,{status:200,headers:Kn()}),"rootHtmlResponse");async function jn(e){let{request:t}=e,o=String(t.method||"GET").toUpperCase();if(o!=="GET"&&o!=="HEAD")return e.next();if(Dn(t)){let s=Ft(Mn(Nn),{owner:Ht,tag:"root-homepage-markdown"});return o==="HEAD"?new Response(null,s):s}let n=o==="HEAD"?null:await fs(t),a=Ft(n||gs(o==="HEAD"?"":await hs(t)),{owner:Ht,tag:"root-homepage-html"});return o==="HEAD"?new Response(null,a):a}r(jn,"onRequest");var S=[{routePath:"/api/llm/chat/completions",mountPath:"/api/llm/chat",method:"",middlewares:[],modules:[zt]},{routePath:"/api/payments/commerce/x402",mountPath:"/api/payments/commerce",method:"",middlewares:[],modules:[po]},{routePath:"/api/llm/models",mountPath:"/api/llm",method:"",middlewares:[],modules:[uo]},{routePath:"/api/llm/responses",mountPath:"/api/llm",method:"",middlewares:[],modules:[mo]},{routePath:"/knowgrph/doc-default/:path*",mountPath:"/knowgrph/doc-default",method:"",middlewares:[],modules:[tn]},{routePath:"/knowgrph/doc/:path*",mountPath:"/knowgrph/doc",method:"",middlewares:[],modules:[on]},{routePath:"/knowgrph/share/:path*",mountPath:"/knowgrph/share",method:"",middlewares:[],modules:[nn]},{routePath:"/api/link-preview",mountPath:"/api",method:"GET",middlewares:[],modules:[an]},{routePath:"/api/link-proxy",mountPath:"/api",method:"GET",middlewares:[],modules:[cn]},{routePath:"/api/graph",mountPath:"/api",method:"",middlewares:[],modules:[yn]},{routePath:"/api/oembed",mountPath:"/api",method:"",middlewares:[],modules:[_n]},{routePath:"/__chat_proxy/:path*",mountPath:"/__chat_proxy",method:"",middlewares:[],modules:[Pn]},{routePath:"/knowgrph/:path*",mountPath:"/knowgrph",method:"",middlewares:[],modules:[re]},{routePath:"/__video_frame",mountPath:"/",method:"",middlewares:[],modules:[Tn]},{routePath:"/__youtube_transcript",mountPath:"/",method:"",middlewares:[],modules:[vn]},{routePath:"/health",mountPath:"/",method:"",middlewares:[],modules:[In]},{routePath:"/",mountPath:"/",method:"",middlewares:[],modules:[jn]}];function ws(e){for(var t=[],o=0;o<e.length;){var n=e[o];if(n==="*"||n==="+"||n==="?"){t.push({type:"MODIFIER",index:o,value:e[o++]});continue}if(n==="\\"){t.push({type:"ESCAPED_CHAR",index:o++,value:e[o++]});continue}if(n==="{"){t.push({type:"OPEN",index:o,value:e[o++]});continue}if(n==="}"){t.push({type:"CLOSE",index:o,value:e[o++]});continue}if(n===":"){for(var a="",s=o+1;s<e.length;){var i=e.charCodeAt(s);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){a+=e[s++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(o));t.push({type:"NAME",index:o,value:a}),o=s;continue}if(n==="("){var c=1,l="",s=o+1;if(e[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;){if(e[s]==="\\"){l+=e[s++]+e[s++];continue}if(e[s]===")"){if(c--,c===0){s++;break}}else if(e[s]==="("&&(c++,e[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));l+=e[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(o));if(!l)throw new TypeError("Missing pattern at ".concat(o));t.push({type:"PATTERN",index:o,value:l}),o=s;continue}t.push({type:"CHAR",index:o,value:e[o++]})}return t.push({type:"END",index:o,value:""}),t}r(ws,"lexer");function ys(e,t){t===void 0&&(t={});for(var o=ws(e),n=t.prefixes,a=n===void 0?"./":n,s=t.delimiter,i=s===void 0?"/#?":s,c=[],l=0,u=0,f="",d=r(function(m){if(u<o.length&&o[u].type===m)return o[u++].value},"tryConsume"),_=r(function(m){var h=d(m);if(h!==void 0)return h;var A=o[u],Z=A.type,ie=A.index;throw new TypeError("Unexpected ".concat(Z," at ").concat(ie,", expected ").concat(m))},"mustConsume"),g=r(function(){for(var m="",h;h=d("CHAR")||d("ESCAPED_CHAR");)m+=h;return m},"consumeText"),b=r(function(m){for(var h=0,A=i;h<A.length;h++){var Z=A[h];if(m.indexOf(Z)>-1)return!0}return!1},"isSafe"),E=r(function(m){var h=c[c.length-1],A=m||(h&&typeof h=="string"?h:"");if(h&&!A)throw new TypeError('Must have text between two parameters, missing text after "'.concat(h.name,'"'));return!A||b(A)?"[^".concat(se(i),"]+?"):"(?:(?!".concat(se(A),")[^").concat(se(i),"])+?")},"safePattern");u<o.length;){var x=d("CHAR"),C=d("NAME"),I=d("PATTERN");if(C||I){var U=x||"";a.indexOf(U)===-1&&(f+=U,U=""),f&&(c.push(f),f=""),c.push({name:C||l++,prefix:U,suffix:"",pattern:I||E(U),modifier:d("MODIFIER")||""});continue}var T=x||d("ESCAPED_CHAR");if(T){f+=T;continue}f&&(c.push(f),f="");var q=d("OPEN");if(q){var U=g(),K=d("NAME")||"",w=d("PATTERN")||"",y=g();_("CLOSE"),c.push({name:K||(w?l++:""),pattern:K&&!w?E(U):w,prefix:U,suffix:y,modifier:d("MODIFIER")||""});continue}_("END")}return c}r(ys,"parse");function Ne(e,t){var o=[],n=Fn(e,o,t);return Ss(n,o,t)}r(Ne,"match");function Ss(e,t,o){o===void 0&&(o={});var n=o.decode,a=n===void 0?function(s){return s}:n;return function(s){var i=e.exec(s);if(!i)return!1;for(var c=i[0],l=i.index,u=Object.create(null),f=r(function(_){if(i[_]===void 0)return"continue";var g=t[_-1];g.modifier==="*"||g.modifier==="+"?u[g.name]=i[_].split(g.prefix+g.suffix).map(function(b){return a(b,g)}):u[g.name]=a(i[_],g)},"_loop_1"),d=1;d<i.length;d++)f(d);return{path:c,index:l,params:u}}}r(Ss,"regexpToFunction");function se(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}r(se,"escapeString");function Hn(e){return e&&e.sensitive?"":"i"}r(Hn,"flags");function bs(e,t){if(!t)return e;for(var o=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,a=o.exec(e.source);a;)t.push({name:a[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),a=o.exec(e.source);return e}r(bs,"regexpToRegexp");function _s(e,t,o){var n=e.map(function(a){return Fn(a,t,o).source});return new RegExp("(?:".concat(n.join("|"),")"),Hn(o))}r(_s,"arrayToRegexp");function ks(e,t,o){return Ps(ys(e,o),t,o)}r(ks,"stringToRegexp");function Ps(e,t,o){o===void 0&&(o={});for(var n=o.strict,a=n===void 0?!1:n,s=o.start,i=s===void 0?!0:s,c=o.end,l=c===void 0?!0:c,u=o.encode,f=u===void 0?function(h){return h}:u,d=o.delimiter,_=d===void 0?"/#?":d,g=o.endsWith,b=g===void 0?"":g,E="[".concat(se(b),"]|$"),x="[".concat(se(_),"]"),C=i?"^":"",I=0,U=e;I<U.length;I++){var T=U[I];if(typeof T=="string")C+=se(f(T));else{var q=se(f(T.prefix)),K=se(f(T.suffix));if(T.pattern)if(t&&t.push(T),q||K)if(T.modifier==="+"||T.modifier==="*"){var w=T.modifier==="*"?"?":"";C+="(?:".concat(q,"((?:").concat(T.pattern,")(?:").concat(K).concat(q,"(?:").concat(T.pattern,"))*)").concat(K,")").concat(w)}else C+="(?:".concat(q,"(").concat(T.pattern,")").concat(K,")").concat(T.modifier);else{if(T.modifier==="+"||T.modifier==="*")throw new TypeError('Can not repeat "'.concat(T.name,'" without a prefix and suffix'));C+="(".concat(T.pattern,")").concat(T.modifier)}else C+="(?:".concat(q).concat(K,")").concat(T.modifier)}}if(l)a||(C+="".concat(x,"?")),C+=o.endsWith?"(?=".concat(E,")"):"$";else{var y=e[e.length-1],m=typeof y=="string"?x.indexOf(y[y.length-1])>-1:y===void 0;a||(C+="(?:".concat(x,"(?=").concat(E,"))?")),m||(C+="(?=".concat(x,"|").concat(E,")"))}return new RegExp(C,Hn(o))}r(Ps,"tokensToRegexp");function Fn(e,t,o){return e instanceof RegExp?bs(e,t):Array.isArray(e)?_s(e,t,o):ks(e,t,o)}r(Fn,"pathToRegexp");var ut=/[.+?^${}()|[\]\\]/g;function*xs(e){let t=new URL(e.url).pathname;for(let o of[...S].reverse()){if(o.method&&o.method!==e.method)continue;let n=Ne(o.routePath.replace(ut,"\\$&"),{end:!1}),a=Ne(o.mountPath.replace(ut,"\\$&"),{end:!1}),s=n(t),i=a(t);if(s&&i)for(let c of o.middlewares.flat())yield{handler:c,params:s.params,path:i.path}}for(let o of S){if(o.method&&o.method!==e.method)continue;let n=Ne(o.routePath.replace(ut,"\\$&"),{end:!0}),a=Ne(o.mountPath.replace(ut,"\\$&"),{end:!1}),s=n(t),i=a(t);if(s&&i&&o.modules.length){for(let c of o.modules.flat())yield{handler:c,params:s.params,path:s.path};break}}}r(xs,"executeRequest");var Fl={async fetch(e,t,o){let n=e,a=xs(n),s={},i=!1,c=r(async(l,u)=>{if(l!==void 0){let d=l;typeof l=="string"&&(d=new URL(l,n.url).toString()),n=new Request(d,u)}let f=a.next();if(f.done===!1){let{handler:d,params:_,path:g}=f.value,b={request:new Request(n.clone()),functionPath:g,next:c,params:_,get data(){return s},set data(x){if(typeof x!="object"||x===null)throw new Error("context.data must be an object");s=x},env:t,waitUntil:o.waitUntil.bind(o),passThroughOnException:r(()=>{i=!0},"passThroughOnException")},E=await d(b);if(!(E instanceof Response))throw new Error("Your Pages function should return a Response");return Wt(E)}else{let d=await t.ASSETS.fetch(n);return Wt(d)}},"next");try{return await c()}catch(l){if(i){let u=await t.ASSETS.fetch(n);return Wt(u)}throw l}}},Wt=r(e=>new Response([101,204,205,304].includes(e.status)?null:e.body,e),"cloneResponse");export{Fl as default};
