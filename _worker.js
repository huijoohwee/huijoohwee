var go=Object.defineProperty;var r=(e,t)=>go(e,"name",{value:t,configurable:!0});var fo="https://api.openai.com/v1";var tt=Object.freeze(["gpt-5.4-nano","gpt-4o-mini"]);function nt(e){return String(e||"").trim()}r(nt,"normalizeOrigin");function wo(e){let t=nt(e);return t?t.startsWith("http://localhost:")||t.startsWith("http://127.0.0.1:")||t.startsWith("http://0.0.0.0:"):!1}r(wo,"isAllowedOrigin");function At(e){let t=nt(e);return wo(t)?{"access-control-allow-origin":t,vary:"Origin","access-control-allow-methods":"GET, POST, OPTIONS","access-control-allow-headers":"content-type, x-flowinfish-session","access-control-max-age":"86400"}:{}}r(At,"corsHeaders");function F(e,{status:t=200,origin:n=""}={}){return new Response(JSON.stringify(e),{status:t,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...At(n)}})}r(F,"json");async function De(e,{maxBytes:t=1e6}={}){let n=await e.arrayBuffer();if(n.byteLength>t)throw new Error("Request too large");let o=new TextDecoder().decode(n);try{return o?JSON.parse(o):{}}catch{throw new Error("Invalid JSON body")}}r(De,"readJsonBody");function yo(e){let t=String(e?.model||"").trim();if(!t)throw new Error("Missing model");if(!tt.includes(t))throw new Error(`Model not allowed: ${t}`);return t}r(yo,"enforceAllowedModel");function So(e){let t=String(e.OPENAI_API_KEY||"").trim();if(!t)throw new Error("Missing server OPENAI_API_KEY");return t}r(So,"requireOpenAiKey");async function Ne({request:e,env:t,pathname:n,payload:o}){let a=So(t);yo(o);let i=`${nt(t.OPENAI_API_BASE)||fo}${n}`,c=await fetch(i,{method:"POST",headers:{authorization:`Bearer ${a}`,"content-type":"application/json"},body:JSON.stringify(o)}),l=new Headers(c.headers);return l.delete("content-length"),l.set("cache-control","no-store"),new Response(c.body,{status:c.status,headers:l})}r(Ne,"proxyToOpenAi");function me(e){let t=e.headers.get("origin")||"";return new Response(null,{status:204,headers:{...At(t)}})}r(me,"handleOptions");async function bt(e){let{request:t,env:n}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return me(t);if(o!=="POST")return F({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return F({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await De(t);return await Ne({request:t,env:n,pathname:"/chat/completions",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return F({ok:!1,error:i},{status:400,origin:a})}}r(bt,"onRequest");var _o=r(e=>{let t=2166136261;for(let n=0;n<e.length;n+=1)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0},"fnv1a32");function Et(e){return _o(String(e??""))}r(Et,"hashString32");function Tt(e){return Et(e).toString(16).padStart(8,"0")}r(Tt,"hashStringToHex");var ko=r(e=>e==null?"":typeof e=="boolean"?e?"1":"0":typeof e=="number"?Number.isFinite(e)?String(e):"":String(e),"normalizePrimitive"),xo=r(e=>e.map(ko).join("|"),"buildSignatureText"),Ct=r(e=>Tt(xo(e)),"hashSignatureParts");var Me={checkoutSession:"/api/payments/stripe/checkout/session",webhook:"/api/payments/stripe/webhook"};var he={restrictedKey:"STRIPE_RESTRICTED_KEY",secretKey:"STRIPE_SECRET_KEY",webhookSecret:"STRIPE_WEBHOOK_SECRET",checkoutPriceId:"STRIPE_CHECKOUT_PRICE_ID",checkoutCurrency:"STRIPE_CHECKOUT_CURRENCY",checkoutUnitAmount:"STRIPE_CHECKOUT_UNIT_AMOUNT",checkoutProductName:"STRIPE_CHECKOUT_PRODUCT_NAME",checkoutReturnOrigin:"STRIPE_CHECKOUT_RETURN_ORIGIN"};var Na=[`Configure Stripe secrets on the server runtime that owns ${Me.checkoutSession}.`,"Cloudflare Pages project variables are available to Pages builds/functions, but they are not read by separate Worker routes.","Stripe Projects can provision and sync credentials locally; copy only required server secret names into the payment server runtime."].join(" "),Ma=[`Payment server runtime for ${Me.checkoutSession}`,"not Cloudflare Pages project variables"].join("; "),Po=[he.restrictedKey,he.secretKey].join(" or "),La=[he.checkoutPriceId,`${he.checkoutCurrency} + ${he.checkoutUnitAmount} + ${he.checkoutProductName}`].join(" or "),$a=[`Missing server-managed Stripe key. Set ${Po} on the payment server runtime.`,"Pages project variables alone do not satisfy separate Worker routes."].join(" ");var xe="2026-01-30",vt="1000",Ot="USDC",ot="https://x402.org/facilitator",Ut="eip155:84532",Ro="$0.001",ge="2026-04-08",It="https://ucp.dev/2026-04-08/specification/overview/",Ao=["checkout"],bo=["rest"],P={acpDiscovery:"/.well-known/acp.json",acpConfig:"/.well-known/acp-config",ucpProfile:"/.well-known/ucp",mppOpenApi:"/openapi.json",x402ApiRoot:"/api",x402ApiV1:"/api/v1",checkoutSessions:"/checkout/sessions",x402PaymentRequired:"/api/payments/commerce/x402",commerceWebhook:"/api/payments/commerce/webhook",commerceProofArtifact:"/api/payments/commerce/harness-proof.json",commerceTraceArtifact:"/api/payments/commerce/trace.jsonl",openboxIngest:"/api/payments/commerce/openbox/ingest",web3Settle:"/api/payments/commerce/web3/settle"},Ga=[P.x402ApiRoot,P.x402ApiV1,P.x402PaymentRequired],X={sellerId:"SELLER_ID",checkoutBaseUrl:"CHECKOUT_BASE_URL",web3Enabled:"WEB3_ENABLED",web3DepositAddress:"WEB3_DEPOSIT_ADDRESS",baseRpcUrl:"BASE_RPC_URL",baseConfirmationBlocks:"BASE_CONFIRMATION_BLOCKS",easAttestUrl:"EAS_ATTEST_URL",openboxApiUrl:"OPENBOX_API_URL",openboxIngestUrl:"OPENBOX_INGEST_URL",openboxApiKey:"OPENBOX_API_KEY",stripeDelegatePaymentUrl:"STRIPE_DELEGATE_PAYMENT_URL",acpBearerToken:"ACP_BEARER_TOKEN",x402PayToAddress:"X402_PAY_TO_ADDRESS",x402Network:"X402_NETWORK",x402Asset:"X402_ASSET",x402Amount:"X402_AMOUNT",x402FacilitatorUrl:"X402_FACILITATOR_URL",x402Price:"X402_PRICE"},Z=r((e,t)=>String(e[t]||"").trim(),"readEnvString"),Dt=r((e,t)=>{let n=Z(e,X.sellerId);if(n)return n;try{return new URL(t).host}catch{return"knowgrph-seller"}},"readAgenticCommerceSellerId");var Nt=r(e=>{let t=Z(e,X.web3Enabled).toLowerCase();return t?t==="0"||t==="false"||t==="no"?!1:t==="1"||t==="true"||t==="yes":!0},"isAgenticCommerceWeb3Enabled");var re=r((e,t)=>Ct(["agentic-commerce",e,...t]),"buildAgenticCommerceSemanticKey"),Pe=r(e=>String(e||"").trim().replace(/\/+$/g,""),"normalizeAgenticCommerceBaseUrl"),B=r((e,t)=>`${Pe(e)}${t}`,"buildAgenticCommerceUrl"),N=r((e,t,n,o,a=o.startsWith("/")?o:null)=>({id:t,label:n,value:o,path:a,semanticKey:re("mainpanel-commerce-readiness-row",[e,t,n,o,a||""])}),"buildAgenticCommerceMainPanelReadinessRow"),fe=r((e,t,n)=>({id:e,title:t,rows:n}),"buildAgenticCommerceMainPanelReadinessSection"),Eo=r(()=>{let e=[fe("overview","Overview",[N("overview","acp-discovery","ACP discovery",`GET ${P.acpDiscovery}`,P.acpDiscovery),N("overview","acp-config","ACP config",`GET ${P.acpConfig}`,P.acpConfig),N("overview","api-version","API version",xe,null)]),fe("discovery","Discovery",[N("discovery","ucp-profile","UCP profile",P.ucpProfile),N("discovery","mpp-openapi","MPP OpenAPI",P.mppOpenApi),N("discovery","x402-payment-required","x402 payment required",P.x402PaymentRequired),N("discovery","x402-api-root","x402 API root",P.x402ApiRoot)]),fe("sessions","Sessions",[N("sessions","checkout-sessions","Checkout sessions",P.checkoutSessions),N("sessions","stripe-webhook","Stripe webhook",Me.webhook)]),fe("web3","Web3",[N("web3","settle","Settle",P.web3Settle),N("web3","signals","Signals","Base RPC confirmation + EAS attestation",null)]),fe("governance","Governance",[N("governance","openbox-ingest","OpenBOX ingest",P.openboxIngest),N("governance","risk-source","Risk source","OpenBOX risk signal",null)]),fe("proofs","Proofs",[N("proofs","harness-proof","Harness proof",P.commerceProofArtifact),N("proofs","trace-artifact","Trace artifact",P.commerceTraceArtifact)])],t=e.flatMap(a=>a.rows),n=t.map(a=>a.path||"").filter(a=>a.length>0),o=t.filter(a=>!a.path).map(a=>`${a.label}: ${a.value}`);return{surface:"mainpanel-commerce",semanticKey:re("mainpanel-commerce-readiness",[xe,...t.map(a=>a.semanticKey)]),sections:e,routePaths:n,routeCount:n.length,signals:o}},"buildAgenticCommerceMainPanelReadiness"),Fa=Eo(),To=r((e,t)=>{let n=Z(e,X.web3DepositAddress);if(/^0x[0-9a-fA-F]{40}$/.test(n))return n;let o=re("deposit-address",[t,"0"]),a=re("deposit-address",[t,"1"]),s=re("deposit-address",[t,"2"]),i=re("deposit-address",[t,"3"]),c=re("deposit-address",[t,"4"]);return`0x${o}${a}${s}${i}${c}`.slice(0,42)},"buildAgenticCommerceDepositAddress");var Mt=r((e,t="x402-payment-required")=>{let n=Z(e,X.x402PayToAddress);return/^0x[0-9a-fA-F]{40}$/.test(n)?n:To(e,t)},"readAgenticCommerceX402PayToAddress"),Co=/^[a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,64}$/,Lt=r(e=>{let t=Z(e,X.x402Network);return Co.test(t)?t:Ut},"readAgenticCommerceX402Network"),$t=r(e=>Z(e,X.x402Asset)||Ot,"readAgenticCommerceX402Asset"),jt=r(e=>{let t=Z(e,X.x402Amount);return/^[1-9][0-9]*$/.test(t)?t:vt},"readAgenticCommerceX402Amount");var Ht=r(e=>{let t=Z(e,X.x402FacilitatorUrl);try{let n=new URL(t||ot);return n.protocol==="https:"||n.protocol==="http:"?n.toString().replace(/\/+$/g,""):ot}catch{return ot}},"readAgenticCommerceX402FacilitatorUrl"),Kt=r(e=>{let t=Pe(e.baseUrl);return{protocol:{name:"acp",version:xe,supported_versions:[xe],documentation_url:"https://agenticcommerce.dev"},api_base_url:t,transports:[...bo],capabilities:{services:[...Ao],...e.web3Enabled?{extensions:[{name:"x-web3"}]}:{}},links:{config:B(t,P.acpConfig),ucp:B(t,P.ucpProfile),mpp:B(t,P.mppOpenApi),x402:B(t,P.x402PaymentRequired)}}},"buildAgenticCommerceAcpDiscovery"),Bt=r(e=>{let t=Pe(e.baseUrl),n={acp:B(t,P.acpDiscovery),api:B(t,P.x402ApiRoot),checkout_sessions:B(t,P.checkoutSessions),mpp_openapi:B(t,P.mppOpenApi),proof:B(t,P.commerceProofArtifact),trace:B(t,P.commerceTraceArtifact),x402_payment_required:B(t,P.x402PaymentRequired)},o={checkout_sessions:!0,content_payments:!0,proof_artifacts:!0,risk_signals:!0,web3_settlement:e.web3Enabled},a={"dev.ucp.shopping":[{version:ge,spec:It,transport:"rest",endpoint:n.api,schema:"https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json"}]};return{ucp:{version:ge,protocol_version:ge,services:a,capabilities:{"dev.ucp.shopping.checkout":[{version:ge,spec:"https://ucp.dev/2026-04-08/specification/checkout/",schema:"https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"}]},payment_handlers:{},endpoints:n},protocol_version:ge,protocol:{name:"ucp",version:ge},seller:{id:e.sellerId},services:[{id:"knowgrph-content-payments",type:"content-payments",endpoints:{x402:n.x402_payment_required,checkout_sessions:n.checkout_sessions,proof:n.proof,trace:n.trace}}],capabilities:o,endpoints:n,spec_urls:[It],schema_urls:["https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json","https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"]}},"buildAgenticCommerceUcpProfile"),Wt=r(e=>{let t=Pe(e.baseUrl);return{openapi:"3.1.0",info:{title:"Knowgrph Machine Payment Protocol",version:xe,description:"Machine-readable payable-operation discovery for Knowgrph commerce routes."},servers:[{url:t}],paths:{[P.x402PaymentRequired]:{get:{operationId:"getKnowgrphX402PaymentRequirement",summary:"Return x402 payment requirements for an agent-readable paid resource.","x-payment-info":{intent:"charge",method:"x402",amount:Ro,currency:"usdc"},responses:{402:{description:"Payment Required"}}}},[P.checkoutSessions]:{post:{operationId:"createKnowgrphCommerceCheckoutSession",summary:"Create an agentic commerce checkout session.","x-payment-info":{intent:"session",method:"stripe",amount:"dynamic",currency:"request.currency"},responses:{201:{description:"Checkout session created"}}}}}}},"buildAgenticCommerceMppOpenApi"),Gt=r(e=>{let t=Pe(e.baseUrl),n=B(t,P.x402PaymentRequired),o=String(e.amount||vt);return{x402Version:2,error:"Payment required",resource:{url:n,description:"Knowgrph agentic commerce paid-resource readiness probe",mimeType:"application/json"},accepts:[{scheme:"exact",network:String(e.network||Ut),amount:o,maxAmountRequired:o,asset:String(e.asset||Ot),resource:n,mimeType:"application/json",payTo:e.payTo,maxTimeoutSeconds:300,extra:{name:"USDC",version:"2",resourceUrl:n,...e.facilitatorUrl?{facilitatorUrl:e.facilitatorUrl}:{}}}]}},"buildAgenticCommerceX402PaymentRequired");var Io=r(e=>JSON.stringify(e,null,2),"jsonBody"),vo=r(e=>String(e||"").trim().replace(/\/+$/g,""),"trimOrigin"),Oo=r(e=>typeof btoa=="function"?btoa(e):typeof Buffer<"u"?Buffer.from(e).toString("base64"):"","encodeBase64"),Uo=r((e,t)=>{try{return new URL(e).origin}catch{return vo(t)}},"rootOriginFromRequest"),rt=r((e={})=>{let t=Uo(e.requestUrl,e.origin),n=e.env||{},o=Dt(n,`${t}/`),a=Nt(n),s=Gt({baseUrl:t,payTo:Mt(n),network:Lt(n),asset:$t(n),amount:jt(n),facilitatorUrl:Ht(n)});return{acpDiscovery:Kt({sellerId:o,baseUrl:t,web3Enabled:a}),ucpProfile:Bt({sellerId:o,baseUrl:t,web3Enabled:a}),mppOpenApi:Wt({baseUrl:t}),x402PaymentRequired:s}},"buildKnowgrphCommerceDiscovery");var Ft=r((e,t={})=>{let n=rt({requestUrl:e?.url,env:t}).x402PaymentRequired,o=Oo(JSON.stringify(n));return new Response(Io(n),{status:402,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*",...o?{"payment-required":o}:{}}})},"buildKnowgrphX402PaymentRequiredResponse");async function qt(e){return Ft(e.request,e.env||{})}r(qt,"onRequest");async function zt(e){let{request:t}=e,n=String(t.method||"GET").toUpperCase(),o=t.headers.get("origin")||"";return n==="OPTIONS"?me(t):n!=="GET"&&n!=="HEAD"?F({ok:!1,error:"Method not allowed"},{status:405,origin:o}):F({ok:!0,models:tt.map(a=>({model:a,display_name:a}))},{status:200,origin:o})}r(zt,"onRequest");async function Yt(e){let{request:t,env:n}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return me(t);if(o!=="POST")return F({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return F({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await De(t);return await Ne({request:t,env:n,pathname:"/responses",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return F({ok:!1,error:i},{status:400,origin:a})}}r(Yt,"onRequest");var u=Object.freeze({listSourceFiles:"list_source_files",readSourceFile:"read_source_file",readSharedDocument:"read_shared_document",inspectSharedDocumentStructure:"inspect_shared_document_structure",inspectLocalSettingsChatReadiness:"inspect_local_settings_chat_readiness",inspectLocalMainPanelState:"inspect_local_mainpanel_state",inspectLocalEditorWorkspaceState:"inspect_local_editor_workspace_state",inspectLocalChatPipelineState:"inspect_local_chat_pipeline_state",inspectLocalMainPanelChatCanvasPipeline:"inspect_local_mainpanel_chat_canvas_pipeline",inspectLocalWorkspaceDocument:"inspect_local_workspace_document",inspectLocalCanvasTopology:"inspect_local_canvas_topology",inspectLocalCanvasSnapshot:"inspect_local_canvas_snapshot",inspectLocal3dCameraPose:"inspect_local_3d_camera_pose",inspectLocal3dLayoutPositions:"inspect_local_3d_layout_positions",inspectLocal2dZoomViewport:"inspect_local_2d_zoom_viewport",inspectLocalSourceFilesSnapshot:"inspect_local_source_files_snapshot",inspectAgentSurface:"inspect_agent_surface"}),Do="knowgrph",U=Object.freeze({readOnlyHint:!0}),D=r((e,t=Do)=>`${String(t||"").trim()}.${String(e||"").trim()}`,"buildKnowgrphWebMcpToolName"),Jt=r((e={})=>{let t=String(e.defaultWorkspaceId||"").trim(),n=e.includeBrowserOnlyTools===!0;return[{name:u.listSourceFiles,webName:D(u.listSourceFiles),title:"List Source Files",description:"List published Knowgrph Source Files.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:U},{name:u.readSourceFile,webName:D(u.readSourceFile),title:"Read Source File",description:"Read published Knowgrph Editor Workspace markdown content. Defaults to the canonical docs workspace when workspaceId is omitted.",inputSchema:{type:"object",additionalProperties:!1,required:["canonicalPath"],properties:{canonicalPath:{type:"string"},workspaceId:t?{type:"string",default:t}:{type:"string"}}},annotations:U},{name:u.readSharedDocument,webName:D(u.readSharedDocument),title:"Read Shared Document",description:"Read published Knowgrph markdown content from a share token or public Knowgrph share/document URL.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:U},{name:u.inspectSharedDocumentStructure,webName:D(u.inspectSharedDocumentStructure),title:"Inspect Shared Document Structure",description:"Inspect published Knowgrph shared-document frontmatter and body structure from a share token or public Knowgrph share/document URL.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:U},...n?[{name:u.inspectLocalSettingsChatReadiness,webName:D(u.inspectLocalSettingsChatReadiness),title:"Inspect Local Settings Chat Readiness",description:"Inspect the active browser-local Knowgrph SettingsView chat readiness state for MainPanel MCP, Integrations, and Commerce, including provider, routing, and model discovery status.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:U},{name:u.inspectLocalMainPanelState,webName:D(u.inspectLocalMainPanelState),title:"Inspect Local MainPanel State",description:"Inspect the active browser-local Knowgrph MainPanel tab, search, and shared action state for MCP, Integrations, and Commerce readiness.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:U},{name:u.inspectLocalEditorWorkspaceState,webName:D(u.inspectLocalEditorWorkspaceState),title:"Inspect Local Editor Workspace State",description:"Inspect the active browser-local Knowgrph Editor Workspace and Markdown pane state, including pane visibility and live draft/frontmatter structure.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:U},{name:u.inspectLocalChatPipelineState,webName:D(u.inspectLocalChatPipelineState),title:"Inspect Local Chat Pipeline State",description:"Inspect the active browser-local Knowgrph FloatingPanel chat runtime, including streaming, workspace follow path, and LLM-to-workspace pipeline state.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:U},{name:u.inspectLocalMainPanelChatCanvasPipeline,webName:D(u.inspectLocalMainPanelChatCanvasPipeline),title:"Inspect Local MainPanel Chat Canvas Pipeline",description:"Inspect the active browser-local Knowgrph E2E readiness path from MainPanel MCP, Integrations, and Commerce through FloatingPanel Chat, workspace markdown/frontmatter, and canvas topology.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:U},{name:u.inspectLocalWorkspaceDocument,webName:D(u.inspectLocalWorkspaceDocument),title:"Inspect Local Workspace Document",description:"Inspect the active browser-local Knowgrph workspace markdown document structure without reading published storage routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:U},{name:u.inspectLocalCanvasTopology,webName:D(u.inspectLocalCanvasTopology),title:"Inspect Local Canvas Topology",description:"Inspect the active browser-local Knowgrph canvas topology summary from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:U},{name:u.inspectLocalCanvasSnapshot,webName:D(u.inspectLocalCanvasSnapshot),title:"Inspect Local Canvas Snapshot",description:"Inspect the active browser-local Knowgrph canvas SVG snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:U},{name:u.inspectLocal3dCameraPose,webName:D(u.inspectLocal3dCameraPose),title:"Inspect Local 3D Camera Pose",description:"Inspect the active browser-local Knowgrph 3D camera pose from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:U},{name:u.inspectLocal3dLayoutPositions,webName:D(u.inspectLocal3dLayoutPositions),title:"Inspect Local 3D Layout Positions",description:"Inspect the active browser-local Knowgrph 3D layout positions from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:U},{name:u.inspectLocal2dZoomViewport,webName:D(u.inspectLocal2dZoomViewport),title:"Inspect Local 2D Zoom Viewport",description:"Inspect the active browser-local Knowgrph 2D zoom and viewport state from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:U},{name:u.inspectLocalSourceFilesSnapshot,webName:D(u.inspectLocalSourceFilesSnapshot),title:"Inspect Local Source Files Snapshot",description:"Inspect the active browser-local Knowgrph Source Files runtime snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:U}]:[],{name:u.inspectAgentSurface,webName:D(u.inspectAgentSurface),title:"Inspect Agent Surface",description:"Inspect the deployed Knowgrph agent-ready discovery surface, including health, OpenAPI, MCP, and skill metadata.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:U}]},"buildKnowgrphAgentReadyToolContracts");var Vt=r((e={})=>{let t=String(e.baseUrl||"").replace(/\/+$/,""),n=t?new URL(`${t}/`).origin:"";return{baseUrl:t,healthUrl:`${t}/health`,mcpUrl:`${t}/mcp`,apiCatalogUrl:`${t}/.well-known/api-catalog`,openApiUrl:`${t}/.well-known/openapi.json`,mcpServerCardUrl:`${t}/.well-known/mcp/server-card.json`,agentCardUrl:`${t}/.well-known/agent-card.json`,agentSkillsUrl:`${t}/.well-known/agent-skills/index.json`,commerceUrls:{acpDiscoveryUrl:`${n}/.well-known/acp.json`,ucpProfileUrl:`${n}/.well-known/ucp`,mppOpenApiUrl:`${n}/openapi.json`,x402PaymentRequiredUrl:`${n}/api/payments/commerce/x402`},health:e.health,apiCatalog:e.apiCatalog,openApi:e.openApi,mcpServerCard:e.mcpServerCard,agentCard:e.agentCard,agentSkills:e.agentSkills,commerce:e.commerce}},"buildAgentSurfaceInspectionPayload");var Xt=r((e={})=>{let t=e.toolNames||{},n=String(e.defaultWorkspaceId||"").trim(),o=e.buildStorageDocPath,a=e.fetchSourceFilesIndexResponse,s=e.fetchStorageMarkdownResponse,i=e.resolveSharedDocumentInput,c=e.inspectSharedDocumentStructure,l=e.buildAgentSurfaceInspection,p=r(g=>String(g||"").trim(),"normalizeString");if(typeof o!="function")throw new Error("buildStorageDocPath is required");if(typeof a!="function")throw new Error("fetchSourceFilesIndexResponse is required");if(typeof s!="function")throw new Error("fetchStorageMarkdownResponse is required");if(typeof i!="function")throw new Error("resolveSharedDocumentInput is required");if(typeof c!="function")throw new Error("inspectSharedDocumentStructure is required");if(typeof l!="function")throw new Error("buildAgentSurfaceInspection is required");let f=r(async(g={})=>{let R=p(g.canonicalPath);if(!R)throw new Error("canonicalPath is required");let C=p(g.workspaceId),A=await s(o(R,C));if(!A.ok)throw new Error(`read_source_file failed with ${A.status}`);return{workspaceId:C||n,canonicalPath:R,markdown:await A.text()}},"readSourceFile"),d=r(async(g={})=>{let R=i(g);if(!R)throw new Error("shareToken or shareUrl must resolve to a published Knowgrph document");let C=p(R.workspaceId),A=p(R.canonicalPath),I=await s(o(A,C));if(!I.ok)throw new Error(`read_shared_document failed with ${I.status}`);return{workspaceId:C||n,canonicalPath:A,markdown:await I.text()}},"readSharedDocument"),x=r(async(g={})=>{let R=await d(g);return c(R)},"inspectSharedDocument");return{[t.listSourceFiles]:async()=>{let g=await a();if(!g.ok)throw new Error(`list_source_files failed with ${g.status}`);return{workspaceId:n,markdownIndex:await g.text()}},[t.readSourceFile]:f,[t.readSharedDocument]:d,[t.inspectSharedDocumentStructure]:x,[t.inspectAgentSurface]:async()=>l()}},"createPublishedAgentReadyToolExecutors");var Zt=r((e={})=>{let t=r(w=>String(w||"").trim(),"normalizeString"),n=r(w=>String(w||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),o=r(w=>{let y=String(w||"").match(/^\s*/);return y?y[0].length:0},"readIndent"),a=r(w=>/^[A-Za-z0-9_:@-]+\s*:/.test(t(w)),"isYamlKeyLine"),s=r(w=>n(w).split(`
`),"splitLines"),i=r(w=>{let y=s(w),m=0;for(;m<y.length&&!t(y[m]);)m+=1;if(t(y[m])!=="---")return null;for(let h=m+1;h<y.length;h+=1)if(t(y[h])==="---")return{frontmatter:y.slice(m+1,h).join(`
`),body:y.slice(h+1).join(`
`)};return null},"extractLeadingFrontmatter"),c=r(w=>{let y=[];for(let m of s(w)){if(!t(m)||o(m)!==0)continue;let h=m.match(/^([A-Za-z0-9_:@-]+)\s*:/);h?.[1]&&y.push(h[1])}return Array.from(new Set(y)).sort((m,h)=>m.localeCompare(h))},"extractTopLevelFrontmatterKeys"),l=r((w,y)=>{let m=s(w),h=`${y}:`;for(let b=0;b<m.length;b+=1){let Y=m[b],oe=t(Y);if(!oe.startsWith(h))continue;let le=o(Y),pe=oe.slice(h.length).trim();if(pe)return{indent:le,inlineValue:pe,blockLines:[],blockText:""};let ue=[];for(let ke=b+1;ke<m.length;ke+=1){let de=m[ke],L=t(de),K=o(de);if(L&&K<=le&&a(de))break;ue.push(de)}return{indent:le,inlineValue:"",blockLines:ue,blockText:ue.join(`
`)}}return null},"extractYamlBlock"),p=r(w=>{let y=[];for(let m of s(w)){let h=t(m);if(!h||h.startsWith("- "))continue;let b=h.match(/^([A-Za-z0-9_:@-]+)\s*:/);b?.[1]&&y.push(b[1])}return Array.from(new Set(y)).sort((m,h)=>m.localeCompare(h))},"extractNestedYamlKeys"),f=r(w=>{let y=t(w);if(!y.startsWith("[")||!y.endsWith("]"))return null;let m=y.slice(1,-1).trim();return m?m.split(",").map(h=>t(h)).filter(Boolean).length:0},"countInlineSequenceEntries"),d=r((w,y)=>{let m=l(w,y);if(!m)return null;if(m.inlineValue)return f(m.inlineValue);let h=0;for(let b of m.blockLines)t(b)&&(o(b)<=m.indent||/^\s*-\s+/.test(b)&&(h+=1));return h},"countYamlSequenceEntries"),x=r(w=>{let y=[];for(let m of s(w)){let h=m.match(/^(#{1,6})\s+(.+?)\s*$/);h?.[2]&&y.push({depth:h[1].length,text:t(h[2])})}return y},"extractMarkdownHeadings"),g=t(e.workspaceId),R=t(e.canonicalPath),C=n(e.markdown),A=i(C),I=A?c(A.frontmatter):[],v=A?l(A.frontmatter,"flow"):null,O=v?p(v.blockText):[],E=new Set(["kg:subgraphs","clusters","groups","layers"]),G=Array.from(new Set([...I,...O].filter(w=>E.has(w)))).sort((w,y)=>w.localeCompare(y)),$=x(A?A.body:C);return{workspaceId:g,canonicalPath:R,markdownLength:C.length,lineCount:C?s(C).length:0,hasFrontmatter:!!A,topLevelKeys:I,hasFlowBlock:!!v,flowKeys:O,flowNodeCount:v?d(v.blockText,"nodes"):null,flowConnectionCount:v?d(v.blockText,"connections")??d(v.blockText,"edges"):null,flowSubgraphCount:v?d(v.blockText,"subgraphs"):null,forbiddenGroupingAliases:G,headingCount:$.length,headings:$.map(w=>w.text),bodyLength:t(A?A.body:C).length}},"inspectSharedDocumentStructure");var No={[u.listSourceFiles]:{id:"list-source-files",tags:["mcp","discovery","source-files","read-only"],examples:["List the published Knowgrph Source Files."],outputModes:["text/markdown","application/json"]},[u.readSourceFile]:{id:"read-source-file",tags:["mcp","read","markdown","workspace"],examples:["Read the published source file for docs/getting-started.md."],outputModes:["text/markdown","application/json"]},[u.readSharedDocument]:{id:"read-shared-document",tags:["mcp","read","shared-document","markdown"],examples:["Read the Knowgrph shared document behind this share URL."],outputModes:["text/markdown","application/json"]},[u.inspectSharedDocumentStructure]:{id:"inspect-shared-document-structure",tags:["mcp","inspect","shared-document","structure"],examples:["Inspect the structure of this Knowgrph shared document."],outputModes:["application/json","text/markdown"]},[u.inspectAgentSurface]:{id:"inspect-agent-surface",tags:["mcp","agent-ready","discovery","metadata"],examples:["Show the Knowgrph agent discovery metadata."],outputModes:["application/json","text/markdown"]}},we=[{name:"knowgrph-source-files",type:"markdown",description:"Discover and inspect published Knowgrph Source Files and shared documents.",path:"/.well-known/agent-skills/knowgrph-source-files.md"},{name:"knowgrph-webmcp-readiness",type:"markdown",description:"Inspect Knowgrph WebMCP lifecycle, shared deployed MCP tools, and agent-ready metadata.",path:"/.well-known/agent-skills/knowgrph-webmcp-readiness.md"}],Qt=r(e=>e.map(t=>{let n=No[t.name]||{id:String(t.name||"").replace(/_/g,"-"),tags:["mcp","read-only"],examples:[`Call ${t.name} on Knowgrph.`],outputModes:["application/json"]};return{id:n.id,name:t.title,description:t.description,tags:n.tags,examples:n.examples,inputModes:["application/json","text/plain"],outputModes:n.outputModes}}),"buildAgentReadyA2aSkills"),en=r(async({appUrl:e,updatedAt:t,sha256ByName:n})=>({$schema:"https://agent-skills.dev/schemas/skills-index.v0.2.json",updated_at:t,skills:await Promise.all(we.map(async o=>({name:o.name,type:o.type,description:o.description,url:`${String(e||"").replace(/\/+$/,"")}${o.path}`,sha256:await n[o.name]})))}),"buildAgentReadyAgentSkillsIndex"),tn=r(({appBasePath:e,appA2aAgentCardPath:t,healthPath:n})=>({[n]:{get:{summary:"Read the Knowgrph agent-ready health status",responses:{200:{description:"Health status in application/health+json format"}}}},[`${e}/mcp`]:{get:{summary:"Read MCP transport metadata",responses:{200:{description:"MCP transport metadata"}}},post:{summary:"Send a JSON-RPC MCP request",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0}}}},responses:{200:{description:"JSON-RPC result payload"}}}},[t]:{get:{summary:"Read the Knowgrph A2A Agent Card",responses:{200:{description:"A2A Agent Card JSON"}}}},"/api/storage/llms.txt":{get:{summary:"Read the Source Files LLM index",responses:{200:{description:"Plain-text LLM index"}}}},"/api/storage/source-files":{get:{summary:"List published Source Files",responses:{200:{description:"Source Files index"}}}},"/api/storage/source-files/{workspaceId}":{get:{summary:"List published Source Files for a workspace",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped Source Files index"}}}},"/api/storage/source-files/{workspaceId}/llms.txt":{get:{summary:"Read the workspace-scoped Source Files LLM index",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped plain-text LLM index"}}}},"/api/storage/doc-default/{canonicalPath}":{get:{summary:"Read a default-workspace Source File markdown document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document from the default Editor Workspace"},404:{description:"Document not found"}}}},"/api/storage/doc/{workspaceId}/{canonicalPath}":{get:{summary:"Read a Source File markdown document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document"},404:{description:"Document not found"}}}},[`${e}/doc-default/{canonicalPath}`]:{get:{summary:"Read a default-workspace shared document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/doc/{workspaceId}/{canonicalPath}`]:{get:{summary:"Read a shared document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/share/{shareToken}`]:{get:{summary:"Read a shared document through the canonical opaque share token route",parameters:[{name:"shareToken",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or published markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}${we[0].path}`]:{get:{summary:"Read the Knowgrph published Source Files skill markdown",responses:{200:{description:"Agent skill markdown for published Source Files and shared documents"}}}},[`${e}${we[1].path}`]:{get:{summary:"Read the Knowgrph WebMCP readiness skill markdown",responses:{200:{description:"Agent skill markdown for WebMCP lifecycle and discovery readiness"}}}}}),"buildAgentReadyOpenApiPaths");var Mo="kgShare",Es=typeof TextEncoder<"u"?new TextEncoder:null,nn=typeof TextDecoder<"u"?new TextDecoder:null;var Lo=r(e=>{if(typeof Buffer<"u")return Uint8Array.from(Buffer.from(e,"base64"));let t=atob(e),n=new Uint8Array(t.length);for(let o=0;o<t.length;o+=1)n[o]=t.charCodeAt(o);return n},"fromBase64");var $o=r(e=>{let t=String(e||"").replace(/-/g,"+").replace(/_/g,"/");if(!t)return"";let n=t.length%4;return n?`${t}${"=".repeat(4-n)}`:t},"fromBase64Url");var jo=r(e=>{if(!nn)throw new Error("TextDecoder is required to decode published doc share tokens");return nn.decode(Lo($o(e)))},"decodeUtf8Base64Url"),sn=r(e=>String(e||"").trim()||null,"normalizeWorkspaceId"),it=r(e=>String(e||"").trim(),"normalizeCanonicalPath"),at="/knowgrph",on="/doc-default/",rn="/doc/",an="/share/",Ho="kgWorkspaceId",Ko="kgCanonicalPath",Bo=r(e=>{let t=String(e||"").trim();return t?`/${t.replace(/^\/+|\/+$/g,"")}`:at},"normalizeAppBasePath"),st=r(e=>{let t=it(e?.canonicalPath);return t?{canonicalPath:t,workspaceId:sn(e?.workspaceId)}:null},"normalizePublishedDocIdentity"),cn=r((e,t)=>{let n=Bo(t),o=String(e||"").replace(/\/+$/,"")||"/";if(!o.startsWith(n))return null;let a=o.slice(n.length)||"/";if(a.startsWith(an)){let c=decodeURIComponent(a.slice(an.length)).trim();return ct(c)}if(a.startsWith(on))return st({canonicalPath:decodeURIComponent(a.slice(on.length))});if(!a.startsWith(rn))return null;let s=a.slice(rn.length),i=s.indexOf("/");return i<1?null:st({workspaceId:decodeURIComponent(s.slice(0,i)),canonicalPath:decodeURIComponent(s.slice(i+1))})},"parsePublishedDocPathname"),Wo=r(e=>{let t=ct(e?.get(Mo));if(t)return t;let n=it(decodeURIComponent(String(e?.get(Ko)||"")));if(n)return st({workspaceId:decodeURIComponent(String(e?.get(Ho)||"")),canonicalPath:n});let o=String(e?.get("kgPath")||"").trim();return o?cn(`${at}${o}`,at):null},"parsePublishedDocSearchParams");var ct=r(e=>{let t=String(e||"").trim();if(!t)return null;try{let n=JSON.parse(jo(t)),o=it(n?.canonicalPath);return o?{canonicalPath:o,workspaceId:sn(n?.workspaceId)}:null}catch{return null}},"decodePublishedDocShareToken"),Le=r((e={})=>{let t=ct(e.shareToken);if(t)return t;let n=String(e.shareUrl||"").trim();if(!n)return null;try{let o=String(e.baseUrl||"https://airvio.co").trim()||"https://airvio.co",a=new URL(n,o);return Wo(a.searchParams)||cn(a.pathname,e.appBasePath)}catch{return null}},"resolvePublishedDocIdentity"),ln=String.raw`(args = {}) => {
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
}`;var $e={push:"/api/storage/push",pull:"/api/storage/pull",exportPrefix:"/api/storage/export/",docPrefix:"/api/storage/doc/",defaultDocPrefix:"/api/storage/doc-default/",sourceFilesIndex:"/api/storage/source-files",sourceFilesIndexPrefix:"/api/storage/source-files/",sourceFilesLlms:"/api/storage/llms.txt"};var pn=r((e,t)=>`${$e.docPrefix}${encodeURIComponent(String(e||"").trim())}/${encodeURIComponent(String(t||"").trim())}`,"buildKnowgrphStorageDocPath"),un=r(e=>`${$e.defaultDocPrefix}${encodeURIComponent(String(e||"").trim())}`,"buildKnowgrphStorageDefaultDocPath"),dn=r(e=>{let t=String(e||"").trim();return t?`${$e.sourceFilesIndexPrefix}${encodeURIComponent(t)}`:$e.sourceFilesIndex},"buildKnowgrphStorageSourceFilesIndexPath");var T="https://airvio.co",Re="https://knowgrph-storage.huijoohwee.workers.dev",_="/knowgrph",k=`${T}${_}/`,mn=`${T}/`,Ae="kgws:canonical-docs",Se="2026-05-23",_e=`${_}/health`,ye=`${T}${_e}`,hn="/.well-known/agent-card.json",lt=`${_}/.well-known/agent-card.json`,je=`${T}${hn}`,pt=`${T}/api/storage/source-files`,Go=`${T}/api/storage/doc-default/{canonicalPath}`,Fo=`${T}/api/storage/doc/{workspaceId}/{canonicalPath}`,gn="knowgrph-agent-ready-pages";var fn=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${_}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${_}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${_e}>; rel="status"; type="application/health+json"`,`<${_}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${hn}>; rel="describedby"; type="application/json"`].join(", "),wn=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${k}.

## Discovery

- Crawl policy: ${k}robots.txt
- Sitemap: ${k}sitemap.xml
- API catalog: ${k}.well-known/api-catalog
- Auth.md registration instructions: ${mn}auth.md
- Health: ${ye}
- MCP server card: ${k}.well-known/mcp/server-card.json
- A2A Agent Card: ${je}
- Agent skills: ${k}.well-known/agent-skills/index.json
- LLM reference: ${k}llms.txt

## APIs

- Agent-ready status: ${ye}
- HTTP MCP: ${k}mcp
- Storage API: ${T}/api/storage/
- Source Files index: ${pt}
- Default Source File documents: ${Go}
- Workspace Source File documents: ${Fo}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes five read-only tools for published Source Files, shared documents, and agent-surface inspection.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared five-tool WebMCP surface on \`${k}\` HTML routes.
`,yn=r(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),be=r(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(n=>n.trim().startsWith("text/markdown")),"wantsMarkdown"),Sn=r((e,t)=>{let n=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&n.headers.set("x-knowgrph-route-owner",o),a&&n.headers.set("x-knowgrph-route-tag",a),n},"withAgentReadyRouteHeaders");var Ke=Jt({defaultWorkspaceId:Ae}),xn=r((e,t="")=>{let n=String(e||"").trim(),o=String(t||"").trim();return o?pn(o,n):un(n)},"buildStorageDocPath"),Pn=r(e=>String(e||"").trim(),"normalizeToolString");var j=r((e,t="application/json; charset=utf-8")=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"jsonResponse"),Rn=r((e,t)=>new Response(JSON.stringify(t,null,2),{status:e,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"jsonStatusResponse"),Ee=r((e,t)=>new Response(e,{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"textResponse"),qo=r(e=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":"application/health+json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"healthResponse"),zo=r(e=>`User-agent: *
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
`,"buildRobotsTxt"),Yo=r(e=>`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${k}</loc>
    <lastmod>${Se}</lastmod>
  </url>
  <url>
    <loc>${k}llms.txt</loc>
    <lastmod>${Se}</lastmod>
  </url>
  <url>
    <loc>${e}.well-known/mcp/server-card.json</loc>
    <lastmod>${Se}</lastmod>
  </url>
</urlset>
`,"buildSitemapXml"),Jo=zo(`${k}sitemap.xml`),Vo=Yo(k),An={linkset:[{anchor:k,"service-desc":[{href:`${k}.well-known/openapi.json`,type:"application/vnd.oai.openapi+json;version=3.1"}],"service-doc":[{href:`${k}llms.txt`,type:"text/plain"}],status:[{href:ye,type:"application/health+json"}],"service-meta":[{href:`${k}.well-known/mcp/server-card.json`,type:"application/json"},{href:je,type:"application/json"}]}]},bn={openapi:"3.1.0",info:{title:"Knowgrph API",version:"0.1.0",description:"Agent discovery surface for the Knowgrph Cloudflare deployment."},servers:[{url:T,description:"Knowgrph Cloudflare deployment"}],paths:tn({appBasePath:_,appA2aAgentCardPath:lt,healthPath:_e})},Te={resource:k,resource_name:"Knowgrph",authorization_servers:[T],scopes_supported:["knowgrph:read","knowgrph:source-files:read"],bearer_methods_supported:["header"],resource_documentation:`${k}llms.txt`},ut=`${T}/cdn-cgi/access`,J={skill:`${T}/auth.md`,register_uri:`${k}agent/auth`,claim_uri:`${k}agent/auth/claim`,revocation_uri:`${k}agent/auth/revoke`,identity_types_supported:["anonymous","identity_assertion"],anonymous:{credential_types_supported:["api_key"]},identity_assertion:{assertion_types_supported:["urn:ietf:params:oauth:token-type:id-jag","verified_email"],credential_types_supported:["access_token","api_key"]},events_supported:["https://schemas.workos.com/events/agent/auth/identity/assertion/revoked"],registration_status:"metadata_published_runtime_user_mediated"},_n={issuer:T,resource:Te.resource,resource_name:Te.resource_name,authorization_servers:Te.authorization_servers,cloudflare_access_issuer:ut,authorization_endpoint:`${ut}/login`,token_endpoint:`${ut}/token`,jwks_uri:`${k}.well-known/http-message-signatures-directory`,response_types_supported:["code"],grant_types_supported:["authorization_code","client_credentials"],token_endpoint_auth_methods_supported:["client_secret_basic","private_key_jwt"],scopes_supported:Te.scopes_supported,agent_auth:J},Xo=`# Knowgrph auth.md

Knowgrph publishes agent registration metadata for the read-only agent surface at ${k}. Agents should first fetch ${T}/.well-known/oauth-protected-resource, follow its authorization_servers entry to ${T}/.well-known/oauth-authorization-server, and read the agent_auth block.

## Registration

- Register: ${J.register_uri}
- Claim: ${J.claim_uri}
- Revoke: ${J.revocation_uri}
- Supported identity types: ${J.identity_types_supported.join(", ")}
- Anonymous credentials: ${J.anonymous.credential_types_supported.join(", ")}
- Identity assertion types: ${J.identity_assertion.assertion_types_supported.join(", ")}
- Identity assertion credentials: ${J.identity_assertion.credential_types_supported.join(", ")}
- Revocation events: ${J.events_supported.join(", ")}
- Current runtime policy: user-mediated access through the existing Cloudflare Access/OAuth boundary; no separate MCP-only auth stack.
- Pipeline rule: agents must not bypass MainPanel -> FloatingPanel Chat -> KGC -> Canvas for user-mediated graph work; published HTTP MCP tools remain read-only until mutation auth and conflict semantics are implemented.`,En={name:"Knowgrph Agent",description:"Agent-readable discovery, published-document retrieval, and WebMCP-ready metadata surface for Knowgrph.",version:"0.1.0",provider:{organization:"airvio / joohwee",url:k},url:`${k}mcp`,preferredTransport:"JSONRPC",supportedInterfaces:[{url:`${k}mcp`,protocolBinding:"JSONRPC",transportProtocol:"JSONRPC",description:"Primary machine interface for read-only discovery and source-file document access."},{url:pt,protocolBinding:"HTTP+JSON/REST",transportProtocol:"HTTP+JSON/REST",description:"Published source-files index and storage-backed document read surface."}],capabilities:{streaming:!1,pushNotifications:!1,stateTransitionHistory:!1,extendedAgentCard:!1},defaultInputModes:["text/plain","text/markdown","application/json"],defaultOutputModes:["text/plain","text/markdown","application/json"],skills:Qt(Ke)},Q={serverInfo:{name:"knowgrph",version:"0.1.0"},transport:{type:"http",url:`${k}mcp`},capabilities:{tools:Ke.map(e=>({name:e.name,description:e.description,inputSchema:e.inputSchema}))},links:{apiCatalog:`${k}.well-known/api-catalog`,skills:`${k}.well-known/agent-skills/index.json`,status:ye,agentCard:je}},ht=Ke.map(e=>({name:e.webName,title:e.title,description:e.description,inputSchema:e.inputSchema,annotations:e.annotations})),Ce=r(e=>Pn(Ke.find(t=>t.name===e)?.webName),"findWebMcpToolName"),Zo=Ce(u.listSourceFiles),Qo=Ce(u.readSourceFile),er=Ce(u.readSharedDocument),tr=Ce(u.inspectSharedDocumentStructure),nr=Ce(u.inspectAgentSurface),or=`(() => {
  const root = globalThis;
  const siteOrigin = ${JSON.stringify(T)};
  const appBasePath = ${JSON.stringify(_)};
  const defaultWorkspaceId = ${JSON.stringify(Ae)};
  const toolDefinitions = ${JSON.stringify(ht)};
  const toolNames = ${JSON.stringify(ht.map(e=>e.name))};
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
  const createPublishedDocIdentityResolver = ${ln};
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
      listSourceFiles: ${JSON.stringify(Zo)},
      readSourceFile: ${JSON.stringify(Qo)},
      readSharedDocument: ${JSON.stringify(er)},
      inspectSharedDocumentStructure: ${JSON.stringify(tr)},
      inspectAgentSurface: ${JSON.stringify(nr)},
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
})();`,rr=r(async e=>{if(!(e.headers.get("content-type")||"").toLowerCase().includes("text/html"))return e;let n=await e.text();if(ht.every(i=>n.includes(i.name)))return new Response(n,e);let o=`<script>${or}<\/script>`,a=n.includes("</head>")?n.replace("</head>",`${o}</head>`):`${n}${o}`,s=new Response(a,e);return s.headers.delete("content-length"),s},"injectWebMcpScript"),Tn=`# Knowgrph Published Documents Skill

Use this skill when an agent needs to discover, read, or inspect published Knowgrph Source Files and shared documents.

## Tools

- list_source_files: fetch ${T}/api/storage/source-files.
- read_source_file: fetch ${T}/api/storage/doc-default/{canonicalPath} by default, or ${T}/api/storage/doc/{workspaceId}/{canonicalPath} for an explicit workspace.
- read_shared_document: resolve a Knowgrph share token or public share/document URL, then fetch the canonical published markdown document from storage.
- inspect_shared_document_structure: inspect published Knowgrph shared-document frontmatter/body structure from a share token or public share/document URL.

## Scope

- Shared read-only surface across HTTP MCP, MCP server-card metadata, and deployed HTML WebMCP fallback.
- Public/browser URLs stay canonical on ${T}/api/storage/*.
- Server-side Pages reads use ${Re} to avoid custom-domain self-fetch rewrite failures.
`,Cn=`# Knowgrph WebMCP Readiness Skill

Use this skill when an agent or browser needs to inspect the deployed Knowgrph agent-ready surface and WebMCP lifecycle.

## Shared deployed tools

- inspect_agent_surface: inspect health, OpenAPI, API catalog, MCP server card, A2A card, and agent-skills metadata.

## WebMCP implementation notes

- Browser app runtime installs WebMCP on page load via navigator.modelContext in canvas/src/main.tsx.
- Runtime prefers provideContext({ tools }) when available and also registers each tool with registerTool(tool, { signal }) when supported.
- AbortController-backed registration is used so tools can be unregistered cleanly with the platform lifecycle.
- Deployed HTML fallback injects the shared five-tool WebMCP surface on /knowgrph HTML routes.
- Full app runtime additionally exposes browser-local inspect tools for Settings chat readiness, MainPanel state, Editor Workspace state, chat pipeline validation/finalize/apply state, the combined MainPanel -> Chat -> Markdown/frontmatter -> Canvas readiness path, the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
`,ar={listSourceFiles:u.listSourceFiles,readSourceFile:u.readSourceFile,readSharedDocument:u.readSharedDocument,inspectSharedDocumentStructure:u.inspectSharedDocumentStructure,inspectAgentSurface:u.inspectAgentSurface},In=r(async e=>{let t=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(n)].map(o=>o.toString(16).padStart(2,"0")).join("")},"sha256Hex"),sr=In(Tn),ir=In(Cn),cr={[we[0].name]:sr,[we[1].name]:ir},vn=r(async()=>en({appUrl:k,updatedAt:Se,sha256ByName:cr}),"agentSkillsIndex"),lr={keys:[{kty:"OKP",crv:"Ed25519",kid:"knowgrph-agent-ready-2026-05-21",use:"sig",alg:"EdDSA",x:"11qYAYdkVKxA4G0wV47IxPtYfFVH_H7zmC2Di2PcvLU"}]},pr={protocolVersion:"2025-06-18",capabilities:{tools:{}},serverInfo:Q.serverInfo},ur=Q.capabilities.tools.map(e=>({name:e.name,description:e.description,inputSchema:e.inputSchema})),On=r(()=>({status:"pass",service:"knowgrph-agent-ready-pages",homepage:k,health:ye,updatedAt:Se,checks:{linkHeaders:!0,markdownNegotiation:!0,httpMcp:!0,webMcp:!0,commerce:{acp:!0,ucp:!0,mpp:!0,x402:!0},defaultWorkspaceId:Ae}}),"buildHealthStatusBody"),dr=r(async()=>Vt({baseUrl:k,health:On(),apiCatalog:An,openApi:bn,mcpServerCard:Q,agentCard:En,agentSkills:await vn(),commerce:rt({origin:T})}),"buildAgentSurfaceInspection"),mr=Xt({toolNames:ar,defaultWorkspaceId:Ae,buildStorageDocPath:xn,fetchSourceFilesIndexResponse:r(()=>fetch(`${Re}${dn()}`,{headers:{accept:"text/markdown"}}),"fetchSourceFilesIndexResponse"),fetchStorageMarkdownResponse:r(e=>fetch(`${Re}${e}`,{headers:{accept:"text/markdown"}}),"fetchStorageMarkdownResponse"),resolveSharedDocumentInput:r((e={})=>Le({shareToken:e?.shareToken,shareUrl:e?.shareUrl,appBasePath:_,baseUrl:T}),"resolveSharedDocumentInput"),inspectSharedDocumentStructure:Zt,buildAgentSurfaceInspection:dr}),Un=r(e=>{try{let t=new URL(e,T);return Le({shareUrl:`${t.pathname}${t.search}`,baseUrl:T,appBasePath:_})}catch{return null}},"resolvePublishedDocRequestIdentity"),hr=r(e=>Le({shareUrl:String(e||""),baseUrl:T,appBasePath:_}),"resolvePublishedDocPathIdentity"),gr=r(async(e,t)=>{let n=new URL(xn(t.canonicalPath,t.workspaceId),Re),o=await fetch(n,{method:"GET",headers:{accept:"text/markdown, text/plain;q=0.9, */*;q=0.1"}}),a=new Headers(o.headers),s=String(a.get("vary")||"");return a.set("vary",s?`${s}, Accept`:"Accept"),new Response(String(e.method||"").toUpperCase()==="HEAD"?null:o.body,{status:o.status,statusText:o.statusText,headers:a})},"proxyPublishedDocMarkdownResponse"),fr=r(async e=>{try{let t=await e.json();return t&&typeof t=="object"?t:null}catch{return null}},"readJsonRpcRequest"),He=r((e,t)=>j({jsonrpc:"2.0",id:e??null,result:t}),"jsonRpcResult"),dt=r((e,t,n)=>j({jsonrpc:"2.0",id:e??null,error:{code:t,message:n}}),"jsonRpcError"),wr=r(async(e,t)=>{let n=mr[e];if(typeof n!="function")throw new Error(`unknown tool: ${e}`);return n(t)},"executeMcpTool"),yr=r(async e=>{let t=String(e.method||"GET").toUpperCase();if(t==="GET"||t==="HEAD")return j({ok:!0,transport:Q.transport,serverInfo:Q.serverInfo,capabilities:Q.capabilities});if(t!=="POST")return Rn(405,{ok:!1,error:"unsupported_method"});let n=await fr(e);if(!n)return dt(null,-32700,"Parse error");switch(n.method){case"initialize":return He(n.id,pr);case"tools/list":return He(n.id,{tools:ur});case"tools/call":{let o=Pn(n.params?.name),a=n.params?.arguments&&typeof n.params.arguments=="object"?n.params.arguments:{};if(!o)return dt(n.id,-32602,"Tool name is required");try{let s=await wr(o,a);return He(n.id,{content:[{type:"text",text:typeof s?.markdown=="string"?s.markdown:JSON.stringify(s,null,2)}],structuredContent:s,isError:!1})}catch(s){return He(n.id,{content:[{type:"text",text:s instanceof Error?s.message:String(s)}],isError:!0})}}default:return dt(n.id,-32601,"Method not found")}},"handleMcpTransport");var gt=r(e=>e===_||e===`${_}/`,"handlesKnowgrphRoot"),Sr=r(e=>gt(e)||!!hr(e),"handlesKnowgrphHtmlSurface"),_r=r(e=>{let t=new URL(e.url),n=t.pathname.replace(/\/+$/,"")||"/",o=Un(e.url);return n===_e?"health":n===`${_}/mcp`?"mcp":n===`${_}/robots.txt`?"robots":n===`${_}/sitemap.xml`?"sitemap":n===`${_}/auth.md`||n==="/auth.md"?"auth-md":n.startsWith(`${_}/.well-known/`)?"well-known":o?be(e)?"shared-doc-markdown":"shared-doc-html":gt(t.pathname)?be(e)?"homepage-markdown":"homepage-html":"app-surface"},"resolveAgentReadyRouteTag"),mt=r((e,t)=>Sn(t,{owner:gn,tag:_r(e)}),"withKnowgrphRouteHeaders"),kn=r(async e=>{let t=new URL(e.url),n=t.pathname.replace(/\/+$/,"")||"/",o=Un(e.url);if(o&&be(e))return gr(e,o);if(gt(t.pathname)&&be(e))return yn(wn);switch(n){case _e:return qo(On());case`${_}/mcp`:return yr(e);case`${_}/robots.txt`:return Ee(Jo,"text/plain; charset=utf-8");case`${_}/sitemap.xml`:return Ee(Vo,"application/xml; charset=utf-8");case`${_}/auth.md`:case"/auth.md":return Ee(Xo,"text/markdown; charset=utf-8");case`${_}/.well-known/api-catalog`:return j(An,"application/linkset+json; charset=utf-8");case`${_}/.well-known/openapi.json`:return j(bn,"application/vnd.oai.openapi+json; charset=utf-8");case lt:return j(En);case`${_}/.well-known/oauth-protected-resource`:return j(Te);case`${_}/.well-known/oauth-authorization-server`:return j(_n);case`${_}/.well-known/openid-configuration`:return j(_n);case`${_}/.well-known/mcp/server-card.json`:return j(Q);case`${_}/.well-known/mcp.json`:return j(Q);case`${_}/.well-known/agent-skills/index.json`:return j(await vn());case`${_}/.well-known/agent-skills/knowgrph-source-files.md`:return Ee(Tn,"text/markdown; charset=utf-8");case`${_}/.well-known/agent-skills/knowgrph-webmcp-readiness.md`:return Ee(Cn,"text/markdown; charset=utf-8");case`${_}/.well-known/http-message-signatures-directory`:return j(lr);default:return null}},"routeResponse");async function ee(e){let{env:t,request:n}=e,o=String(n.method||"GET").toUpperCase(),a=new URL(n.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(o==="POST"&&a.pathname.replace(/\/+$/,"")===`${_}/mcp`)return mt(n,await kn(n));if(o!=="GET"&&o!=="HEAD")return Rn(405,{ok:!1,error:"unsupported_method"});let s=await kn(n);if(s){let p=mt(n,s);return o==="HEAD"?new Response(null,p):p}let i=await e.next();if(!Sr(a.pathname))return i;let c=o==="HEAD"?i:await rr(i),l=new Response(o==="HEAD"?null:c.body,c);return l.headers.set("link",fn),mt(n,l)}r(ee,"onRequest");async function Dn(e){return ee(e)}r(Dn,"onRequest");async function Nn(e){return ee(e)}r(Nn,"onRequest");async function Mn(e){return ee(e)}r(Mn,"onRequest");var kr=Object.freeze(new Set(["","80","443"])),xr=Object.freeze([".local",".localhost",".internal"]),Pr=Object.freeze(new Set(["localhost"]));function ae(e){return String(e||"").trim().toLowerCase()}r(ae,"normalizeHostname");function Rr(e){let t=ae(e);if(!/^\d{1,3}(\.\d{1,3}){3}$/.test(t))return!1;let n=t.split(".").map(o=>Number(o));return n.length!==4?!1:n.every(o=>Number.isInteger(o)&&o>=0&&o<=255)}r(Rr,"isIpv4Literal");function Ln(e){let[t,n,o,a]=e.split(".").map(s=>Number(s));return(t<<24|n<<16|o<<8|a)>>>0}r(Ln,"ipv4ToInt");function Ar(e,t,n){if(!Number.isInteger(n)||n<0||n>32)return!1;if(n===0)return!0;let o=4294967295<<32-n>>>0;return(e&o)===(t&o)}r(Ar,"inIpv4Cidr");function br(e){let t=ae(e);return!t||!t.includes(":")?!1:/^[0-9a-f:]+$/i.test(t)}r(br,"isIpv6Literal");function Er(e){let t=ae(e);return!!(!t||t==="::1"||t==="0:0:0:0:0:0:0:1"||t.startsWith("fc")||t.startsWith("fd")||/^fe[89ab]/i.test(t))}r(Er,"isBlockedIpv6");function Tr(e,{blockedExact:t,blockedSuffixes:n}={}){let o=ae(e);if(!o)return!0;let a=t||Pr;if(a instanceof Set&&a.has(o))return!0;let s=n||xr;if(Array.isArray(s))for(let i of s){let c=ae(i);if(c&&(o===c||o.endsWith(c)))return!0}return!1}r(Tr,"isBlockedHostname");function Cr(e){let t=ae(e);if(!t)return!0;if(Rr(t)){let n=Ln(t),o=[{base:"0.0.0.0",bits:8},{base:"10.0.0.0",bits:8},{base:"127.0.0.0",bits:8},{base:"169.254.0.0",bits:16},{base:"172.16.0.0",bits:12},{base:"192.168.0.0",bits:16},{base:"100.64.0.0",bits:10}];for(let a of o){let s=Ln(a.base);if(Ar(n,s,a.bits))return!0}return!1}return br(t)?Er(t):!1}r(Cr,"isBlockedIpLiteral");function Be(e,{allowedPorts:t}={}){let n=String(e||"").trim();if(!n)throw new Error("invalid_url");let o;try{o=new URL(n)}catch{throw new Error("invalid_url")}if(o.protocol!=="http:"&&o.protocol!=="https:")throw new Error("invalid_url");if(o.username||o.password)throw new Error("invalid_url");let a=t||kr,s=String(o.port||"");if(a instanceof Set&&!a.has(s))throw new Error("port_not_allowed");let i=ae(o.hostname);if(!i)throw new Error("invalid_url");if(Tr(i))throw new Error("blocked_host");if(Cr(i))throw new Error("blocked_host");return o}r(Be,"parseAndValidateExternalUrl");function We(e){return String(e.headers.get("sec-fetch-site")||"").trim().toLowerCase()==="cross-site"}r(We,"shouldRejectCrossSiteFetch");var Ir={"content-type":"application/json; charset=utf-8","cache-control":"public, max-age=600"};function se(e,t={}){return new Response(JSON.stringify(e),{...t,headers:{...Ir,...t.headers||{}}})}r(se,"json");function Ge(...e){for(let t of e){if(!t)continue;let n=String(t).trim();if(n)return n}return null}r(Ge,"pickFirst");function vr(e){let t=e.slice(0,8e4),n=t.match(/<title[^>]*>([^<]*)<\/title>/i),o=t.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i),a=t.match(/<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i),s=t.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i),i=t.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i),c=t.match(/<meta[^>]+property=["']og:site_name["'][^>]*content=["']([^"']+)["'][^>]*>/i);return{title:Ge(o?.[1],n?.[1]),description:Ge(a?.[1],s?.[1]),image:Ge(i?.[1]),siteName:Ge(c?.[1])}}r(vr,"extractMeta");async function $n(e){let t=e.request.url,n=new URL(t);if(n.searchParams.get("ping")==="1")return se({ok:!0,ping:!0});let o=n.searchParams.get("url")||"";if(We(e.request))return se({ok:!1,error:"forbidden"},{status:403,headers:{"cache-control":"no-store"}});let a;try{a=Be(o)}catch{return se({ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}try{let s=await fetch(a.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkPreview/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),i=s.headers.get("content-type")||"";if(!s.ok)return se({ok:!1,error:"fetch_failed",status:s.status,url:a.toString()},{status:200,headers:{"cache-control":"no-store"}});if(!i.includes("text/html"))return se({ok:!0,url:a.toString(),domain:a.host,contentType:i,title:null,description:null,image:null,siteName:null});let c=await s.text(),l=vr(c);return se({ok:!0,url:a.toString(),domain:a.host,contentType:i,...l})}catch(s){return se({ok:!1,error:"exception",message:s?.message||String(s),url:a.toString()},{status:200,headers:{"cache-control":"no-store"}})}}r($n,"onRequestGet");var jn=35e4;function Or(e){let t=e;return t=t.replace(/<script\b[\s\S]*?<\/script>/gi,""),t=t.replace(/<iframe\b[\s\S]*?<\/iframe>/gi,""),t=t.replace(/<object\b[\s\S]*?<\/object>/gi,""),t=t.replace(/<embed\b[\s\S]*?>/gi,""),t=t.replace(/<noscript\b[\s\S]*?<\/noscript>/gi,""),t=t.replace(/\son[a-z]+\s*=\s*"[^"]*"/gi,""),t=t.replace(/\son[a-z]+\s*=\s*'[^']*'/gi,""),t}r(Or,"stripActiveContent");function Ur({url:e,title:t,innerHtml:n}){let o=t?String(t).slice(0,140):"Preview",a=String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");return`<!doctype html>
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
</html>`}r(Ur,"buildWrapper");async function Hn(e){let n=new URL(e.request.url).searchParams.get("url")||"";if(We(e.request))return new Response("Forbidden",{status:403,headers:{"cache-control":"no-store"}});let o;try{o=Be(n)}catch(a){let s=a instanceof Error?a.message:"invalid_url";return new Response(s,{status:400,headers:{"cache-control":"no-store"}})}try{let a=await fetch(o.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkProxy/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),s=a.headers.get("content-type")||"";if(!a.ok)return new Response(`Fetch failed (${a.status})`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});if(!s.includes("text/html"))return new Response(`Unsupported content-type: ${s}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public, max-age=600"}});let i=await a.text();i.length>jn&&(i=i.slice(0,jn));let l=i.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()||o.host;i=Or(i),/<base\s/i.test(i)||(i=i.replace(/<head([^>]*)>/i,`<head$1><base href="${o.origin}/">`));let f=Ur({url:o.toString(),title:l,innerHtml:i});return new Response(f,{status:200,headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600","content-security-policy":"default-src 'none'; img-src https: data:; style-src 'unsafe-inline' https:; font-src https: data:; frame-ancestors 'self';"}})}catch(a){return new Response(`Exception: ${a?.message||String(a)}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}})}}r(Hn,"onRequestGet");var ft="api.openai.com",Fe="api.miromind.ai",qe="apihub.agnes-ai.com",ze="ark.ap-southeast.bytepluses.com",wt="ark.eu-west.bytepluses.com",Bn=new Set(["localhost","127.0.0.1","0.0.0.0"]),z=r(e=>String(e||"").trim().toLowerCase(),"normalizeHost"),q=r((e,t)=>String(e.get(t)||"").trim(),"readHeader"),Wn=r(e=>Bn.has(z(e)),"isLocalHost"),Kn=r(e=>{let t=String(e||"").trim();if(!t)return new Set;let n=new Set;return t.split(",").map(o=>z(o)).filter(Boolean).forEach(o=>n.add(o)),n},"parseCsvSet"),Gn=r((e,{includeOpenAi:t=!1,includeMiroMind:n=!1,includeAgnes:o=!1,includeBytePlus:a=!1}={})=>{let s=Kn(e.KNOWGRPH_INTEGRATION_ALLOWED_HOSTS),i=Kn(e.KNOWGRPH_CHAT_PROXY_ALLOWED_HOSTS),c=s.size?s:i,l=c.size?c:new Set([...Bn]);return t&&l.add(ft),n&&l.add(Fe),o&&l.add(qe),a&&(l.add(ze),l.add(wt)),l},"parseAllowedHosts"),M=r(e=>{let t=q(e.headers,"origin");if(!t)return{};let n="";try{n=z(new URL(t).host)}catch{return{}}let o=z(new URL(e.url).host);return n===o||n.startsWith("localhost:")||n.startsWith("127.0.0.1:")?{"access-control-allow-origin":t,vary:"Origin"}:{}},"corsHeaders"),W=r((e,t,n)=>new Response(JSON.stringify(t),{status:n,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...M(e)}}),"jsonResponse");var Ye={"content-type":"application/json; charset=utf-8","cache-control":"no-store"};function Ie(e,t,n=200){return new Response(JSON.stringify(t),{status:n,headers:{...Ye,...M(e)}})}r(Ie,"jsonResponse");async function Dr(e){let t=new URL("/knowgrph/imports/hackamap/hackamap-graph.json",e.url),n=await fetch(t.toString(),{redirect:"follow"});return n.ok?await n.json():null}r(Dr,"fetchHackamapGraphJson");async function ie(e,t){let n=new URL(t,e.url),o=await fetch(n.toString(),{redirect:"follow"});return o.ok?await o.json():null}r(ie,"fetchHackamapJson");async function Nr(e){let t=await ie(e,"/knowgrph/imports/hackamap/hackamap_api_graph.json");return Yn(t)?t:null}r(Nr,"fetchHackamapApiGraphJson");async function Mr(e){let t=await ie(e,"/knowgrph/imports/hackamap/hackamap_pipeline.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}r(Mr,"fetchHackamapPipelineJson");async function qn(e){let t=await ie(e,"/knowgrph/imports/hackamap/hackamap_query_presets.json");return Array.isArray(t)?t.filter(Boolean):[]}r(qn,"fetchHackamapQueryPresetsJson");async function zn(e){let t=await ie(e,"/knowgrph/imports/hackamap/query-outputs/query-runs.manifest.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}r(zn,"fetchHackamapQueryRunsManifestJson");function Yn(e){return!e||typeof e!="object"||Array.isArray(e)?!1:Array.isArray(e.nodes)&&Array.isArray(e.edges)}r(Yn,"isApiGraphPayload");function Jn(e,t){let n=String(e&&e.output&&e.output.per_table_prefix||e?.id||t?.preset||"").trim(),o=String(t?.output_suffix||"").trim();return o?`${n}-${o}`:n}r(Jn,"buildHackamapTablePrefix");function yt(e,t){if(!Array.isArray(e))return[];let n=[];for(let o of e){if(!o||typeof o!="object"||Array.isArray(o))continue;let a=String(o[t]||"").trim();a&&n.push(a)}return n}r(yt,"collectRowIds");async function Lr(e,t){let n=await ie(e,t);return Array.isArray(n)?n.length:0}r(Lr,"countHackamapQueryRows");async function $r(e,t,n){let o=Jn(t,n);if(!o)return{};let a=["events","demos","sources","organizer","team","techstack"],s=await Promise.all(a.map(async i=>[i,await Lr(e,`/knowgrph/imports/hackamap/query-outputs/${i}.${o}.query.json`)]));return Object.fromEntries(s.filter(([,i])=>i>0))}r($r,"readHackamapRunTableCounts");function St(e){return Array.isArray(e)?e.map(St):!e||typeof e!="object"?e:Object.fromEntries(Object.entries(e).sort(([t],[n])=>String(t).localeCompare(String(n))).map(([t,n])=>[t,St(n)]))}r(St,"sortObjectKeys");function jr(e){try{return JSON.stringify(St(e))}catch{return""}}r(jr,"stableParamSignature");function Hr(e){return typeof e=="string"?{value:e,label:e}:{value:e,label:JSON.stringify(e)}}r(Hr,"toBuilderOption");function Kr(e,t){return e.map(n=>{let o=String(n?.id||"").trim();if(!o)return null;let a=n?.params&&typeof n.params=="object"&&!Array.isArray(n.params)?n.params:{},s=t.filter(l=>String(l?.preset||"").trim()===o),i=Array.from(new Set([...Object.keys(a),...s.flatMap(l=>l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?Object.keys(l.params):[])])).sort((l,p)=>String(l).localeCompare(String(p))),c=Object.fromEntries(i.map(l=>{let p=new Set,f=[],d=[a[l],...s.map(x=>x?.params&&typeof x.params=="object"&&!Array.isArray(x.params)?x.params[l]:void 0)];for(let x of d){if(typeof x>"u")continue;let g=jr(x);!g||p.has(g)||(p.add(g),f.push(Hr(x)))}return[l,f]}));return{id:o,title:String(n?.title||o).trim(),params:a,param_keys:i,published_param_options:c}}).filter(Boolean)}r(Kr,"buildHackamapPresetRuntimeEntries");async function Br(e){let[t,n,o]=await Promise.all([Mr(e),qn(e),zn(e)]),a=t&&typeof t=="object"?t.runtime||{}:{},s=String(a?.query_selection?.default_run_id||"").trim()||"enhanced",i=Array.isArray(o?.runs)?o.runs:[],c=(await Promise.all(i.map(async l=>{let p=String(l?.id||"").trim(),f=String(l?.preset||"").trim();if(!p)return null;let d=n.find(g=>String(g?.id||"").trim()===f),x=await $r(e,d,l);return{id:p,preset:f,title:String(l?.title||l?.id||"").trim(),params:l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?l.params:{},output_suffix:String(l?.output_suffix||"").trim(),is_default:p===s,table_counts:x}}))).filter(l=>l?.id);return{ok:!0,runtime:{...a&&typeof a=="object"?a:{},presets:Kr(n,c),runs:c}}}r(Br,"buildHackamapRuntimeMeta");async function Wr(e,t){let n=String(t||"").trim();if(!n)return null;let[o,a]=await Promise.all([qn(e),zn(e)]),i=(Array.isArray(a?.runs)?a.runs:[]).find(R=>String(R?.id||"").trim()===n);if(!i)return null;let c=o.find(R=>String(R?.id||"").trim()===String(i?.preset||"").trim()),l=Jn(c,i);if(!l)return null;let[p,f]=await Promise.all([ie(e,`/knowgrph/imports/hackamap/query-outputs/events.${l}.query.json`),ie(e,`/knowgrph/imports/hackamap/query-outputs/demos.${l}.query.json`)]),d=new Set(yt(p,"id")),x=new Set(yt(f,"id")),g=yt(f,"event_id");for(let R of g)d.add(R);return{eventIds:d,demoIds:x}}r(Wr,"readHackamapQueryRunSelection");function Fn(e,t,n){if(!n||!Yn(e))return e;if(n.eventIds.size===0&&n.demoIds.size===0)return{...e,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_run_filter_skipped:"no-event-demo-rows"}};let o=new Set;n.eventIds.forEach(c=>o.add(`Event:${c}`)),n.demoIds.forEach(c=>o.add(`Demo:${c}`));let a=Array.isArray(e.nodes)?e.nodes.filter(c=>o.has(String(c?.id||"").trim())):[],s=new Set(a.map(c=>String(c?.id||"").trim()).filter(Boolean)),i=Array.isArray(e.edges)?e.edges.filter(c=>s.has(String(c?.source||"").trim())&&s.has(String(c?.target||"").trim())):[];return{...e,nodes:a,edges:i,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_event_count:n.eventIds.size,selected_demo_count:n.demoIds.size,total_problems:a.filter(c=>String(c?.type||"").trim()==="problem").length,total_solutions:a.filter(c=>String(c?.type||"").trim()==="solution").length}}}r(Fn,"filterHackamapApiGraphPayloadByRun");function Gr(e){let t=Array.isArray(e?.nodes)?e.nodes:[],n=Array.isArray(e?.links)?e.links:[],o=[],a=new Set;for(let i of t){let c=String(i?.id||"").trim(),l=String(i?.type||"").trim(),p=String(i?.label||"").trim();if(!(!c||!l||!p)){if(l==="Event"){o.push({id:c,type:"problem",label:p,cluster:"Event"}),a.add(c);continue}l==="Demo"&&(o.push({id:c,type:"solution",label:p,cluster:"Demo"}),a.add(c))}}let s=[];for(let i of n){let c=String(i?.source||"").trim(),l=String(i?.target||"").trim(),p=String(i?.type||"").trim();!c||!l||p==="has_demo"&&(!a.has(c)||!a.has(l)||s.push({source:c,target:l,type:"has_demo",strength:.35}))}return{nodes:o,edges:s,meta:{source:"hackamap-graph.json:fallback",total_problems:o.filter(i=>i.type==="problem").length,total_solutions:o.filter(i=>i.type==="solution").length,...e?.content_signature?{content_signature:String(e.content_signature)}:{}}}}r(Gr,"toBipartiteApiPayload");async function Vn(e){let{request:t}=e,n=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(n==="OPTIONS")return new Response(null,{status:204,headers:{...M(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(n!=="GET"&&n!=="HEAD")return Ie(t,{ok:!1,error:"unsupported_method"},405);if(String(o.searchParams.get("view")||"").trim().toLowerCase()==="meta"){let f=await Br(t);return n==="HEAD"?new Response(null,{status:200,headers:{...Ye,...M(t)}}):Ie(t,f,200)}let a=String(o.searchParams.get("run")||"").trim(),s=await Wr(t,a),i=await Nr(t);if(i){let f=Fn(i,a,s);return n==="HEAD"?new Response(null,{status:200,headers:{...Ye,...M(t)}}):Ie(t,f,200)}let c=await Dr(t);if(!c)return Ie(t,{ok:!1,error:"missing_hackamap_graph",hint:"/knowgrph/imports/hackamap/{hackamap_api_graph.json,hackamap-graph.json} not found"},404);let l=Gr(c),p=Fn(l,a,s);return n==="HEAD"?new Response(null,{status:200,headers:{...Ye,...M(t)}}):Ie(t,p,200)}r(Vn,"onRequest");var Fr=!0,Xn=600,Zn={"content-type":"application/json; charset=utf-8","cache-control":`public, max-age=${Xn}`};function ce(e,t,n={}){return new Response(JSON.stringify(t),{...n,headers:{...Zn,...n.headers||{},...M(e)}})}r(ce,"jsonResponse");function qr(e){try{let t=new URL(String(e));return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}r(qr,"isHttpUrl");function ve(e){return String(e||"").trim().toLowerCase()}r(ve,"normalizeHost");function _t(e,{exact:t,suffixes:n}){let o=ve(e);return o?!!(Array.isArray(t)&&t.some(a=>o===ve(a))||Array.isArray(n)&&n.some(a=>o===ve(a)||o.endsWith(`.${ve(a)}`))):!1}r(_t,"isHostMatch");function zr(e){let t=ve(e.hostname),n=e.toString();return _t(t,{suffixes:["linkedin.com"]})?new URL(`https://www.linkedin.com/embeds/oembed.json?url=${encodeURIComponent(n)}`):_t(t,{exact:["twitter.com","x.com"],suffixes:["twitter.com","x.com"]})?new URL(`https://publish.twitter.com/oembed?omit_script=1&url=${encodeURIComponent(n)}`):_t(t,{exact:["reddit.com"],suffixes:["reddit.com"]})?new URL(`https://www.reddit.com/oembed?url=${encodeURIComponent(n)}`):null}r(zr,"buildOembedUpstreamUrl");async function Yr({upstreamUrl:e}){return await fetch(e.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; OEmbedProxy/1.0)",accept:"application/json,text/json;q=0.9,*/*;q=0.1"},redirect:"follow",cf:{cacheTtl:Xn,cacheEverything:!0}})}r(Yr,"fetchJsonUpstream");async function Qn(e){let{request:t}=e,n=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(n==="OPTIONS")return new Response(null,{status:204,headers:{...M(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD"].includes(n))return ce(t,{ok:!1,error:"unsupported_method"},{status:405});if(o.searchParams.get("ping")==="1")return ce(t,{ok:!0,ping:!0});if(Fr)return ce(t,{ok:!1,error:"disabled_by_policy"},{status:200,headers:{"cache-control":"no-store"}});let a=o.searchParams.get("url")||"";if(!qr(a))return ce(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}});let s;try{s=new URL(a)}catch{return ce(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}let i=zr(s);if(!i)return ce(t,{ok:!1,error:"unsupported_provider"},{status:400,headers:{"cache-control":"no-store"}});let c=await Yr({upstreamUrl:i}),l=new Headers(c.headers);l.delete("content-length"),l.set("cache-control",c.ok?Zn["cache-control"]:"no-store");for(let[f,d]of Object.entries(M(t)))l.set(f,d);if(n==="HEAD")return new Response(null,{status:c.status,headers:l});let p=await c.text();try{JSON.parse(p)}catch{return ce(t,{ok:!1,error:"invalid_upstream_json",status:c.status},{status:502,headers:{"cache-control":"no-store"}})}return l.set("content-type","application/json; charset=utf-8"),new Response(p,{status:c.status,headers:l})}r(Qn,"onRequest");var eo="/__chat_proxy",Je="agnes-ai",Ve="byteplus-modelark",Xe="miromind",Jr=r(e=>{let t=z(e);return t==="openai"?"openai":t===Ve||t==="byteplus"?Ve:t===Xe||t==="miromind-api"?Xe:t===Je||t==="agnes"||t==="agnes-ai-api"?Je:t},"normalizeProviderId"),Vr=r(e=>z(e)===qe,"isAgnesHost"),Xr=r(e=>{let t=z(e);return t===ze||t===wt},"isBytePlusHost"),Zr=r(e=>z(e)===Fe,"isMiroMindHost"),Qr=r(({provider:e,requestedUpstream:t,env:n})=>e==="openai"?"https://api.openai.com":e===Xe?t||`https://${Fe}`:e===Je?t||`https://${qe}`:e===Ve?t||String(n.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim()||`https://${ze}`:t||String(n.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim(),"pickUpstreamBase");async function to(e){let{request:t,env:n}=e,o=String(t.method||"GET").toUpperCase(),a=new URL(t.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":q(t.headers,"origin")||"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD","POST"].includes(o))return W(t,{ok:!1,error:"Unsupported method"},405);let s=Jr(q(t.headers,"x-kg-chat-provider")),i=Qr({provider:s,requestedUpstream:q(t.headers,"x-kg-chat-upstream"),env:n});if(!i)return W(t,{ok:!1,error:"Missing chat proxy upstream configuration"},500);let c;try{c=new URL(i)}catch{return W(t,{ok:!1,error:"Invalid chat proxy upstream configuration"},500)}let l=Gn(n,{includeOpenAi:!0,includeMiroMind:!0,includeAgnes:!0,includeBytePlus:!0}),p=z(c.hostname);if(!l.has(p))return W(t,{ok:!1,error:"Chat proxy upstream host is not allowed"},403);if(!Wn(p)&&c.protocol!=="https:")return W(t,{ok:!1,error:"Chat proxy requires HTTPS for non-local upstream hosts"},403);let f=s==="openai"||p===ft,d=s===Xe||Zr(p),x=s===Je||Vr(p),g=s===Ve||Xr(p),R=q(t.headers,"x-kg-chat-api-key"),C=String(n.KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY||n.OPENAI_API_KEY||"").trim(),A=String(n.KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY||n.MIROMIND_API_KEY||"").trim(),I=String(n.KNOWGRPH_CHAT_PROXY_AGNES_API_KEY||n.AGNES_API_KEY||"").trim(),v=String(n.KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY||n.BYTEPLUS_API_KEY||"").trim(),O=(R||C).slice(0,512),E=(R||A).slice(0,512),G=(R||I).slice(0,512),$=(R||v).slice(0,512),w=g?$:x?G:d?E:O;if(f&&!O)return W(t,{ok:!1,error:"Missing OpenAI API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY or OPENAI_API_KEY)"},401);if(d&&!w)return W(t,{ok:!1,error:"Missing MiroMind API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY or MIROMIND_API_KEY)"},401);if(x&&!w)return W(t,{ok:!1,error:"Missing Agnes API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_AGNES_API_KEY or AGNES_API_KEY)"},401);if(g&&!w)return W(t,{ok:!1,error:"Missing BytePlus API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY or BYTEPLUS_API_KEY)"},401);if(o==="POST"&&!q(t.headers,"content-type").toLowerCase().includes("application/json"))return W(t,{ok:!1,error:"Chat proxy expects application/json payloads"},415);let y=a.pathname.startsWith(eo)&&a.pathname.slice(eo.length)||"/v1/chat/completions",m=y.startsWith("/")?y:`/${y}`,h=new URL(`${m}${a.search||""}`,c),b=new Headers,Y=q(t.headers,"content-type"),oe=q(t.headers,"accept");Y&&b.set("content-type",Y),oe&&b.set("accept",oe),(f||d||x||g)&&b.set("authorization",`Bearer ${w}`);let le=q(t.headers,"x-client-request-id").slice(0,512);le&&b.set("x-client-request-id",le);let pe=new AbortController,ue=Number(n.KNOWGRPH_CHAT_PROXY_TIMEOUT_MS),ke=Number.isFinite(ue)?Math.max(5e3,Math.min(18e4,Math.floor(ue))):9e4,de=setTimeout(()=>pe.abort(),ke);try{let L=await fetch(h.toString(),{method:o,headers:b,body:o==="GET"||o==="HEAD"?void 0:t.body,signal:pe.signal,redirect:"follow"}),K=new Headers(L.headers);K.delete("content-length"),K.delete("www-authenticate"),K.set("cache-control","no-store");let Ue=q(t.headers,"origin");return Ue&&(K.set("access-control-allow-origin",Ue),K.set("vary","Origin")),o==="HEAD"?new Response(null,{status:L.status,statusText:L.statusText,headers:K}):new Response(L.body,{status:L.status,statusText:L.statusText,headers:K})}catch(L){let K=L&&typeof L=="object"&&"message"in L?String(L.message||""):"",Ue=pe.signal.aborted||/aborted|timeout/i.test(K);return W(t,{ok:!1,error:K||"Failed to reach chat upstream"},Ue?504:502)}finally{clearTimeout(de)}}r(to,"onRequest");async function no(e){let{request:t}=e,n=String(t.method||"GET").toUpperCase();if(n==="OPTIONS")return new Response(null,{status:204,headers:{...M(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(n!=="GET"&&n!=="HEAD")return new Response(JSON.stringify({ok:!1,error:"unsupported_method"}),{status:405,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...M(t)}});let o={ok:!0,service:"singabldr-pages",ts:new Date().toISOString()},a={"content-type":"application/json; charset=utf-8","cache-control":"no-store",...M(t)};return n==="HEAD"?new Response(null,{status:200,headers:a}):new Response(JSON.stringify(o),{status:200,headers:a})}r(no,"onRequest");var te="https://airvio.co";var H="/knowgrph",V=`${te}${H}/`,ea=`${te}/`;var ro=`${H}/health`,oo=`${te}${ro}`,ao="/.well-known/agent-card.json",Wi=`${H}/.well-known/agent-card.json`,ta=`${te}${ao}`,na=`${te}/api/storage/source-files`,oa=`${te}/api/storage/doc-default/{canonicalPath}`,ra=`${te}/api/storage/doc/{workspaceId}/{canonicalPath}`;var kt="root-agent-ready-pages",so=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${H}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${H}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${ro}>; rel="status"; type="application/health+json"`,`<${H}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${ao}>; rel="describedby"; type="application/json"`].join(", "),io=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${V}.

## Discovery

- Crawl policy: ${V}robots.txt
- Sitemap: ${V}sitemap.xml
- API catalog: ${V}.well-known/api-catalog
- Auth.md registration instructions: ${ea}auth.md
- Health: ${oo}
- MCP server card: ${V}.well-known/mcp/server-card.json
- A2A Agent Card: ${ta}
- Agent skills: ${V}.well-known/agent-skills/index.json
- LLM reference: ${V}llms.txt

## APIs

- Agent-ready status: ${oo}
- HTTP MCP: ${V}mcp
- Storage API: ${te}/api/storage/
- Source Files index: ${na}
- Default Source File documents: ${oa}
- Workspace Source File documents: ${ra}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes five read-only tools for published Source Files, shared documents, and agent-surface inspection.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared five-tool WebMCP surface on \`${V}\` HTML routes.
`,co=r(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),lo=r(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(n=>n.trim().startsWith("text/markdown")),"wantsMarkdown"),xt=r((e,t)=>{let n=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&n.headers.set("x-knowgrph-route-owner",o),a&&n.headers.set("x-knowgrph-route-tag",a),n},"withAgentReadyRouteHeaders");var Ze="Agent-actionable chat-to-canvas knowledge graph workspace",aa=new RegExp(["Agent-readable","knowledge","graph","workspace"].join("\\s+")+"\\.?","g"),sa=r(e=>{let t=/<script>([\s\S]*?)<\/script>/g;for(let n of String(e||"").matchAll(t)){let o=n[1]||"";if(o.includes("createWebMcpLifecycleController")&&o.includes("toolDefinitions"))return o}return""},"extractWebMcpScript"),po=r(()=>({"content-type":"text/html; charset=utf-8","cache-control":"no-store, no-cache, no-transform, must-revalidate, max-age=0","access-control-allow-origin":"*",link:so}),"rootHtmlHeaders"),Pt=r((e,t)=>String(e||"").includes("</head>")?String(e||"").replace("</head>",`${t}</head>`):`${String(e||"")}${t}`,"injectIntoHead"),Qe=r(()=>`<main id="knowgrph-root-fallback" data-knowgrph-root-fallback="visible" aria-label="Knowgrph root alias" style="position:fixed;inset:0;z-index:2147483000;display:grid;place-content:center;gap:1rem;padding:2rem;box-sizing:border-box;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#101820;color:#f4f7fb;text-align:center">
      <h1 style="margin:0;font-size:clamp(2.25rem,8vw,5.5rem);line-height:1;font-weight:760">Knowgrph</h1>
      <p style="margin:0 auto;max-width:42rem;font-size:clamp(1rem,2.2vw,1.35rem);line-height:1.55;color:#d6e1ea">${Ze}</p>
      <p style="margin:0"><a href="${H}/" style="display:inline-flex;align-items:center;justify-content:center;min-height:2.75rem;padding:0 1.05rem;border:1px solid #7db3ff;border-radius:8px;color:#f8fbff;text-decoration:none;background:#1f5fa8">Open Knowgrph</a></p>
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
    <\/script>`,"rootVisibleFallbackMarkup"),ia=r(e=>{let t=String(e||"");if(/<main\s+id=["']knowgrph-root-fallback["']/i.test(t))return t;let n=/<div\s+id=["']root["']\s*><\/div>/i;return n.test(t)?t.replace(n,o=>`${o}
    ${Qe()}`):t.includes("</body>")?t.replace("</body>",`    ${Qe()}
  </body>`):`${t}
${Qe()}`},"injectRootVisibleFallback"),ca=r(e=>{let t=String(e||"").replace(aa,Ze);return/<meta\s+name=["']description["'][^>]*>/i.test(t)?t=t.replace(/<meta\s+name=["']description["'][^>]*>/i,`<meta name="description" content="${Ze}" />`):t=Pt(t,`    <meta name="description" content="${Ze}" />
`),/<link\s+rel=["']canonical["'][^>]*>/i.test(t)||(t=Pt(t,`    <link rel="canonical" href="${H}/" />
`)),/<meta\s+name=["']x-knowgrph-root-alias["'][^>]*>/i.test(t)||(t=Pt(t,`    <meta name="x-knowgrph-root-alias" content="${H}/" />
`)),ia(t)},"rewriteRootAppHtml"),la=r(async e=>{let t=new URL(`${H}/?agentReadyRootWebMcp=1`,e.url),n=await fetch(t,{headers:{accept:"text/html"}});return n.ok?sa(await n.text()):""},"loadWebMcpScript"),pa=r(async e=>{let t=new URL(`${H}/?agentReadyRootAlias=1`,e.url),n=await fetch(t,{headers:{accept:"text/html"}});if(!n.ok)return null;let o=ca(await n.text());return!o.includes('<div id="root"></div>')||!o.includes(`${H}/assets/`)?null:new Response(o,{status:200,headers:po()})},"loadKnowgrphAppShell"),ua=r((e="")=>new Response(`<!DOCTYPE html>
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
    ${Qe()}
  </body>
</html>`,{status:200,headers:po()}),"rootHtmlResponse");async function uo(e){let{request:t}=e,n=String(t.method||"GET").toUpperCase();if(n!=="GET"&&n!=="HEAD")return e.next();if(lo(t)){let s=xt(co(io),{owner:kt,tag:"root-homepage-markdown"});return n==="HEAD"?new Response(null,s):s}let o=n==="HEAD"?null:await pa(t),a=xt(o||ua(n==="HEAD"?"":await la(t)),{owner:kt,tag:"root-homepage-html"});return n==="HEAD"?new Response(null,a):a}r(uo,"onRequest");var S=[{routePath:"/api/llm/chat/completions",mountPath:"/api/llm/chat",method:"",middlewares:[],modules:[bt]},{routePath:"/api/payments/commerce/x402",mountPath:"/api/payments/commerce",method:"",middlewares:[],modules:[qt]},{routePath:"/api/llm/models",mountPath:"/api/llm",method:"",middlewares:[],modules:[zt]},{routePath:"/api/llm/responses",mountPath:"/api/llm",method:"",middlewares:[],modules:[Yt]},{routePath:"/knowgrph/doc-default/:path*",mountPath:"/knowgrph/doc-default",method:"",middlewares:[],modules:[Dn]},{routePath:"/knowgrph/doc/:path*",mountPath:"/knowgrph/doc",method:"",middlewares:[],modules:[Nn]},{routePath:"/knowgrph/share/:path*",mountPath:"/knowgrph/share",method:"",middlewares:[],modules:[Mn]},{routePath:"/api/link-preview",mountPath:"/api",method:"GET",middlewares:[],modules:[$n]},{routePath:"/api/link-proxy",mountPath:"/api",method:"GET",middlewares:[],modules:[Hn]},{routePath:"/api/graph",mountPath:"/api",method:"",middlewares:[],modules:[Vn]},{routePath:"/api/oembed",mountPath:"/api",method:"",middlewares:[],modules:[Qn]},{routePath:"/__chat_proxy/:path*",mountPath:"/__chat_proxy",method:"",middlewares:[],modules:[to]},{routePath:"/knowgrph/:path*",mountPath:"/knowgrph",method:"",middlewares:[],modules:[ee]},{routePath:"/health",mountPath:"/",method:"",middlewares:[],modules:[no]},{routePath:"/",mountPath:"/",method:"",middlewares:[],modules:[uo]}];function da(e){for(var t=[],n=0;n<e.length;){var o=e[n];if(o==="*"||o==="+"||o==="?"){t.push({type:"MODIFIER",index:n,value:e[n++]});continue}if(o==="\\"){t.push({type:"ESCAPED_CHAR",index:n++,value:e[n++]});continue}if(o==="{"){t.push({type:"OPEN",index:n,value:e[n++]});continue}if(o==="}"){t.push({type:"CLOSE",index:n,value:e[n++]});continue}if(o===":"){for(var a="",s=n+1;s<e.length;){var i=e.charCodeAt(s);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){a+=e[s++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(n));t.push({type:"NAME",index:n,value:a}),n=s;continue}if(o==="("){var c=1,l="",s=n+1;if(e[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;){if(e[s]==="\\"){l+=e[s++]+e[s++];continue}if(e[s]===")"){if(c--,c===0){s++;break}}else if(e[s]==="("&&(c++,e[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));l+=e[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(n));if(!l)throw new TypeError("Missing pattern at ".concat(n));t.push({type:"PATTERN",index:n,value:l}),n=s;continue}t.push({type:"CHAR",index:n,value:e[n++]})}return t.push({type:"END",index:n,value:""}),t}r(da,"lexer");function ma(e,t){t===void 0&&(t={});for(var n=da(e),o=t.prefixes,a=o===void 0?"./":o,s=t.delimiter,i=s===void 0?"/#?":s,c=[],l=0,p=0,f="",d=r(function(m){if(p<n.length&&n[p].type===m)return n[p++].value},"tryConsume"),x=r(function(m){var h=d(m);if(h!==void 0)return h;var b=n[p],Y=b.type,oe=b.index;throw new TypeError("Unexpected ".concat(Y," at ").concat(oe,", expected ").concat(m))},"mustConsume"),g=r(function(){for(var m="",h;h=d("CHAR")||d("ESCAPED_CHAR");)m+=h;return m},"consumeText"),R=r(function(m){for(var h=0,b=i;h<b.length;h++){var Y=b[h];if(m.indexOf(Y)>-1)return!0}return!1},"isSafe"),C=r(function(m){var h=c[c.length-1],b=m||(h&&typeof h=="string"?h:"");if(h&&!b)throw new TypeError('Must have text between two parameters, missing text after "'.concat(h.name,'"'));return!b||R(b)?"[^".concat(ne(i),"]+?"):"(?:(?!".concat(ne(b),")[^").concat(ne(i),"])+?")},"safePattern");p<n.length;){var A=d("CHAR"),I=d("NAME"),v=d("PATTERN");if(I||v){var O=A||"";a.indexOf(O)===-1&&(f+=O,O=""),f&&(c.push(f),f=""),c.push({name:I||l++,prefix:O,suffix:"",pattern:v||C(O),modifier:d("MODIFIER")||""});continue}var E=A||d("ESCAPED_CHAR");if(E){f+=E;continue}f&&(c.push(f),f="");var G=d("OPEN");if(G){var O=g(),$=d("NAME")||"",w=d("PATTERN")||"",y=g();x("CLOSE"),c.push({name:$||(w?l++:""),pattern:$&&!w?C(O):w,prefix:O,suffix:y,modifier:d("MODIFIER")||""});continue}x("END")}return c}r(ma,"parse");function Oe(e,t){var n=[],o=ho(e,n,t);return ha(o,n,t)}r(Oe,"match");function ha(e,t,n){n===void 0&&(n={});var o=n.decode,a=o===void 0?function(s){return s}:o;return function(s){var i=e.exec(s);if(!i)return!1;for(var c=i[0],l=i.index,p=Object.create(null),f=r(function(x){if(i[x]===void 0)return"continue";var g=t[x-1];g.modifier==="*"||g.modifier==="+"?p[g.name]=i[x].split(g.prefix+g.suffix).map(function(R){return a(R,g)}):p[g.name]=a(i[x],g)},"_loop_1"),d=1;d<i.length;d++)f(d);return{path:c,index:l,params:p}}}r(ha,"regexpToFunction");function ne(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}r(ne,"escapeString");function mo(e){return e&&e.sensitive?"":"i"}r(mo,"flags");function ga(e,t){if(!t)return e;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,a=n.exec(e.source);a;)t.push({name:a[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),a=n.exec(e.source);return e}r(ga,"regexpToRegexp");function fa(e,t,n){var o=e.map(function(a){return ho(a,t,n).source});return new RegExp("(?:".concat(o.join("|"),")"),mo(n))}r(fa,"arrayToRegexp");function wa(e,t,n){return ya(ma(e,n),t,n)}r(wa,"stringToRegexp");function ya(e,t,n){n===void 0&&(n={});for(var o=n.strict,a=o===void 0?!1:o,s=n.start,i=s===void 0?!0:s,c=n.end,l=c===void 0?!0:c,p=n.encode,f=p===void 0?function(h){return h}:p,d=n.delimiter,x=d===void 0?"/#?":d,g=n.endsWith,R=g===void 0?"":g,C="[".concat(ne(R),"]|$"),A="[".concat(ne(x),"]"),I=i?"^":"",v=0,O=e;v<O.length;v++){var E=O[v];if(typeof E=="string")I+=ne(f(E));else{var G=ne(f(E.prefix)),$=ne(f(E.suffix));if(E.pattern)if(t&&t.push(E),G||$)if(E.modifier==="+"||E.modifier==="*"){var w=E.modifier==="*"?"?":"";I+="(?:".concat(G,"((?:").concat(E.pattern,")(?:").concat($).concat(G,"(?:").concat(E.pattern,"))*)").concat($,")").concat(w)}else I+="(?:".concat(G,"(").concat(E.pattern,")").concat($,")").concat(E.modifier);else{if(E.modifier==="+"||E.modifier==="*")throw new TypeError('Can not repeat "'.concat(E.name,'" without a prefix and suffix'));I+="(".concat(E.pattern,")").concat(E.modifier)}else I+="(?:".concat(G).concat($,")").concat(E.modifier)}}if(l)a||(I+="".concat(A,"?")),I+=n.endsWith?"(?=".concat(C,")"):"$";else{var y=e[e.length-1],m=typeof y=="string"?A.indexOf(y[y.length-1])>-1:y===void 0;a||(I+="(?:".concat(A,"(?=").concat(C,"))?")),m||(I+="(?=".concat(A,"|").concat(C,")"))}return new RegExp(I,mo(n))}r(ya,"tokensToRegexp");function ho(e,t,n){return e instanceof RegExp?ga(e,t):Array.isArray(e)?fa(e,t,n):wa(e,t,n)}r(ho,"pathToRegexp");var et=/[.+?^${}()|[\]\\]/g;function*Sa(e){let t=new URL(e.url).pathname;for(let n of[...S].reverse()){if(n.method&&n.method!==e.method)continue;let o=Oe(n.routePath.replace(et,"\\$&"),{end:!1}),a=Oe(n.mountPath.replace(et,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i)for(let c of n.middlewares.flat())yield{handler:c,params:s.params,path:i.path}}for(let n of S){if(n.method&&n.method!==e.method)continue;let o=Oe(n.routePath.replace(et,"\\$&"),{end:!0}),a=Oe(n.mountPath.replace(et,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i&&n.modules.length){for(let c of n.modules.flat())yield{handler:c,params:s.params,path:s.path};break}}}r(Sa,"executeRequest");var wc={async fetch(e,t,n){let o=e,a=Sa(o),s={},i=!1,c=r(async(l,p)=>{if(l!==void 0){let d=l;typeof l=="string"&&(d=new URL(l,o.url).toString()),o=new Request(d,p)}let f=a.next();if(f.done===!1){let{handler:d,params:x,path:g}=f.value,R={request:new Request(o.clone()),functionPath:g,next:c,params:x,get data(){return s},set data(A){if(typeof A!="object"||A===null)throw new Error("context.data must be an object");s=A},env:t,waitUntil:n.waitUntil.bind(n),passThroughOnException:r(()=>{i=!0},"passThroughOnException")},C=await d(R);if(!(C instanceof Response))throw new Error("Your Pages function should return a Response");return Rt(C)}else{let d=await t.ASSETS.fetch(o);return Rt(d)}},"next");try{return await c()}catch(l){if(i){let p=await t.ASSETS.fetch(o);return Rt(p)}throw l}}},Rt=r(e=>new Response([101,204,205,304].includes(e.status)?null:e.body,e),"cloneResponse");export{wc as default};
