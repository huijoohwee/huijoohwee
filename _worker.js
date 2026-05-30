var Uo=Object.defineProperty;var r=(t,e)=>Uo(t,"name",{value:e,configurable:!0});var No="https://api.openai.com/v1";var it=Object.freeze(["gpt-5.4-nano","gpt-4o-mini"]);function ct(t){return String(t||"").trim()}r(ct,"normalizeOrigin");function Do(t){let e=ct(t);return e?e.startsWith("http://localhost:")||e.startsWith("http://127.0.0.1:")||e.startsWith("http://0.0.0.0:"):!1}r(Do,"isAllowedOrigin");function Lt(t){let e=ct(t);return Do(e)?{"access-control-allow-origin":e,vary:"Origin","access-control-allow-methods":"GET, POST, OPTIONS","access-control-allow-headers":"content-type, x-flowinfish-session","access-control-max-age":"86400"}:{}}r(Lt,"corsHeaders");function q(t,{status:e=200,origin:n=""}={}){return new Response(JSON.stringify(t),{status:e,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...Lt(n)}})}r(q,"json");async function Me(t,{maxBytes:e=1e6}={}){let n=await t.arrayBuffer();if(n.byteLength>e)throw new Error("Request too large");let o=new TextDecoder().decode(n);try{return o?JSON.parse(o):{}}catch{throw new Error("Invalid JSON body")}}r(Me,"readJsonBody");function Mo(t){let e=String(t?.model||"").trim();if(!e)throw new Error("Missing model");if(!it.includes(e))throw new Error(`Model not allowed: ${e}`);return e}r(Mo,"enforceAllowedModel");function Lo(t){let e=String(t.OPENAI_API_KEY||"").trim();if(!e)throw new Error("Missing server OPENAI_API_KEY");return e}r(Lo,"requireOpenAiKey");async function Le({request:t,env:e,pathname:n,payload:o}){let a=Lo(e);Mo(o);let i=`${ct(e.OPENAI_API_BASE)||No}${n}`,c=await fetch(i,{method:"POST",headers:{authorization:`Bearer ${a}`,"content-type":"application/json"},body:JSON.stringify(o)}),l=new Headers(c.headers);return l.delete("content-length"),l.set("cache-control","no-store"),new Response(c.body,{status:c.status,headers:l})}r(Le,"proxyToOpenAi");function he(t){let e=t.headers.get("origin")||"";return new Response(null,{status:204,headers:{...Lt(e)}})}r(he,"handleOptions");async function $t(t){let{request:e,env:n}=t,o=String(e.method||"GET").toUpperCase(),a=e.headers.get("origin")||"";if(o==="OPTIONS")return he(e);if(o!=="POST")return q({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(e.headers.get("content-type")||"").toLowerCase().includes("application/json"))return q({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await Me(e);return await Le({request:e,env:n,pathname:"/chat/completions",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return q({ok:!1,error:i},{status:400,origin:a})}}r($t,"onRequest");var $o=r(t=>{let e=2166136261;for(let n=0;n<t.length;n+=1)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0},"fnv1a32");function jt(t){return $o(String(t??""))}r(jt,"hashString32");function Re(t){return jt(t).toString(16).padStart(8,"0")}r(Re,"hashStringToHex");var jo=r(t=>t==null?"":typeof t=="boolean"?t?"1":"0":typeof t=="number"?Number.isFinite(t)?String(t):"":String(t),"normalizePrimitive"),Ho=r(t=>t.map(jo).join("|"),"buildSignatureText"),Ht=r(t=>Re(Ho(t)),"hashSignatureParts");var $e={checkoutSession:"/api/payments/stripe/checkout/session",webhook:"/api/payments/stripe/webhook"};var fe={restrictedKey:"STRIPE_RESTRICTED_KEY",secretKey:"STRIPE_SECRET_KEY",webhookSecret:"STRIPE_WEBHOOK_SECRET",checkoutPriceId:"STRIPE_CHECKOUT_PRICE_ID",checkoutCurrency:"STRIPE_CHECKOUT_CURRENCY",checkoutUnitAmount:"STRIPE_CHECKOUT_UNIT_AMOUNT",checkoutProductName:"STRIPE_CHECKOUT_PRODUCT_NAME",checkoutReturnOrigin:"STRIPE_CHECKOUT_RETURN_ORIGIN"};var As=[`Configure Stripe secrets on the server runtime that owns ${$e.checkoutSession}.`,"Cloudflare Pages project variables are available to Pages builds/functions, but they are not read by separate Worker routes.","Stripe Projects can provision and sync credentials locally; copy only required server secret names into the payment server runtime."].join(" "),Es=[`Payment server runtime for ${$e.checkoutSession}`,"not Cloudflare Pages project variables"].join("; "),Ko=[fe.restrictedKey,fe.secretKey].join(" or "),Ts=[fe.checkoutPriceId,`${fe.checkoutCurrency} + ${fe.checkoutUnitAmount} + ${fe.checkoutProductName}`].join(" or "),Cs=[`Missing server-managed Stripe key. Set ${Ko} on the payment server runtime.`,"Pages project variables alone do not satisfy separate Worker routes."].join(" ");var ke="2026-01-30",Bt="1000",Ft="USDC",lt="https://x402.org/facilitator",Wt="eip155:84532",Bo="$0.001",ge="2026-04-08",Kt="https://ucp.dev/2026-04-08/specification/overview/",Fo=["checkout"],Wo=["rest"],P={acpDiscovery:"/.well-known/acp.json",acpConfig:"/.well-known/acp-config",ucpProfile:"/.well-known/ucp",mppOpenApi:"/openapi.json",x402ApiRoot:"/api",x402ApiV1:"/api/v1",checkoutSessions:"/checkout/sessions",x402PaymentRequired:"/api/payments/commerce/x402",commerceWebhook:"/api/payments/commerce/webhook",commerceProofArtifact:"/api/payments/commerce/harness-proof.json",commerceTraceArtifact:"/api/payments/commerce/trace.jsonl",openboxIngest:"/api/payments/commerce/openbox/ingest",web3Settle:"/api/payments/commerce/web3/settle"},Ds=[P.x402ApiRoot,P.x402ApiV1,P.x402PaymentRequired],Z={sellerId:"SELLER_ID",checkoutBaseUrl:"CHECKOUT_BASE_URL",web3Enabled:"WEB3_ENABLED",web3DepositAddress:"WEB3_DEPOSIT_ADDRESS",baseRpcUrl:"BASE_RPC_URL",baseConfirmationBlocks:"BASE_CONFIRMATION_BLOCKS",easAttestUrl:"EAS_ATTEST_URL",openboxApiUrl:"OPENBOX_API_URL",openboxIngestUrl:"OPENBOX_INGEST_URL",openboxApiKey:"OPENBOX_API_KEY",stripeDelegatePaymentUrl:"STRIPE_DELEGATE_PAYMENT_URL",acpBearerToken:"ACP_BEARER_TOKEN",x402PayToAddress:"X402_PAY_TO_ADDRESS",x402Network:"X402_NETWORK",x402Asset:"X402_ASSET",x402Amount:"X402_AMOUNT",x402FacilitatorUrl:"X402_FACILITATOR_URL",x402Price:"X402_PRICE"},Q=r((t,e)=>String(t[e]||"").trim(),"readEnvString"),Gt=r((t,e)=>{let n=Q(t,Z.sellerId);if(n)return n;try{return new URL(e).host}catch{return"knowgrph-seller"}},"readAgenticCommerceSellerId");var qt=r(t=>{let e=Q(t,Z.web3Enabled).toLowerCase();return e?e==="0"||e==="false"||e==="no"?!1:e==="1"||e==="true"||e==="yes":!0},"isAgenticCommerceWeb3Enabled");var ae=r((t,e)=>Ht(["agentic-commerce",t,...e]),"buildAgenticCommerceSemanticKey"),Pe=r(t=>String(t||"").trim().replace(/\/+$/g,""),"normalizeAgenticCommerceBaseUrl"),F=r((t,e)=>`${Pe(t)}${e}`,"buildAgenticCommerceUrl"),M=r((t,e,n,o,a=o.startsWith("/")?o:null)=>({id:e,label:n,value:o,path:a,semanticKey:ae("mainpanel-commerce-readiness-row",[t,e,n,o,a||""])}),"buildAgenticCommerceMainPanelReadinessRow"),we=r((t,e,n)=>({id:t,title:e,rows:n}),"buildAgenticCommerceMainPanelReadinessSection"),Go=r(()=>{let t=[we("overview","Overview",[M("overview","acp-discovery","ACP discovery",`GET ${P.acpDiscovery}`,P.acpDiscovery),M("overview","acp-config","ACP config",`GET ${P.acpConfig}`,P.acpConfig),M("overview","api-version","API version",ke,null)]),we("discovery","Discovery",[M("discovery","ucp-profile","UCP profile",P.ucpProfile),M("discovery","mpp-openapi","MPP OpenAPI",P.mppOpenApi),M("discovery","x402-payment-required","x402 payment required",P.x402PaymentRequired),M("discovery","x402-api-root","x402 API root",P.x402ApiRoot)]),we("sessions","Sessions",[M("sessions","checkout-sessions","Checkout sessions",P.checkoutSessions),M("sessions","stripe-webhook","Stripe webhook",$e.webhook)]),we("web3","Web3",[M("web3","settle","Settle",P.web3Settle),M("web3","signals","Signals","Base RPC confirmation + EAS attestation",null)]),we("governance","Governance",[M("governance","openbox-ingest","OpenBOX ingest",P.openboxIngest),M("governance","risk-source","Risk source","OpenBOX risk signal",null)]),we("proofs","Proofs",[M("proofs","harness-proof","Harness proof",P.commerceProofArtifact),M("proofs","trace-artifact","Trace artifact",P.commerceTraceArtifact)])],e=t.flatMap(a=>a.rows),n=e.map(a=>a.path||"").filter(a=>a.length>0),o=e.filter(a=>!a.path).map(a=>`${a.label}: ${a.value}`);return{surface:"mainpanel-commerce",semanticKey:ae("mainpanel-commerce-readiness",[ke,...e.map(a=>a.semanticKey)]),sections:t,routePaths:n,routeCount:n.length,signals:o}},"buildAgenticCommerceMainPanelReadiness"),Ms=Go(),qo=r((t,e)=>{let n=Q(t,Z.web3DepositAddress);if(/^0x[0-9a-fA-F]{40}$/.test(n))return n;let o=ae("deposit-address",[e,"0"]),a=ae("deposit-address",[e,"1"]),s=ae("deposit-address",[e,"2"]),i=ae("deposit-address",[e,"3"]),c=ae("deposit-address",[e,"4"]);return`0x${o}${a}${s}${i}${c}`.slice(0,42)},"buildAgenticCommerceDepositAddress");var zt=r((t,e="x402-payment-required")=>{let n=Q(t,Z.x402PayToAddress);return/^0x[0-9a-fA-F]{40}$/.test(n)?n:qo(t,e)},"readAgenticCommerceX402PayToAddress"),zo=/^[a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,64}$/,Yt=r(t=>{let e=Q(t,Z.x402Network);return zo.test(e)?e:Wt},"readAgenticCommerceX402Network"),Jt=r(t=>Q(t,Z.x402Asset)||Ft,"readAgenticCommerceX402Asset"),Vt=r(t=>{let e=Q(t,Z.x402Amount);return/^[1-9][0-9]*$/.test(e)?e:Bt},"readAgenticCommerceX402Amount");var Xt=r(t=>{let e=Q(t,Z.x402FacilitatorUrl);try{let n=new URL(e||lt);return n.protocol==="https:"||n.protocol==="http:"?n.toString().replace(/\/+$/g,""):lt}catch{return lt}},"readAgenticCommerceX402FacilitatorUrl"),Zt=r(t=>{let e=Pe(t.baseUrl);return{protocol:{name:"acp",version:ke,supported_versions:[ke],documentation_url:"https://agenticcommerce.dev"},api_base_url:e,transports:[...Wo],capabilities:{services:[...Fo],...t.web3Enabled?{extensions:[{name:"x-web3"}]}:{}},links:{config:F(e,P.acpConfig),ucp:F(e,P.ucpProfile),mpp:F(e,P.mppOpenApi),x402:F(e,P.x402PaymentRequired)}}},"buildAgenticCommerceAcpDiscovery"),Qt=r(t=>{let e=Pe(t.baseUrl),n={acp:F(e,P.acpDiscovery),api:F(e,P.x402ApiRoot),checkout_sessions:F(e,P.checkoutSessions),mpp_openapi:F(e,P.mppOpenApi),proof:F(e,P.commerceProofArtifact),trace:F(e,P.commerceTraceArtifact),x402_payment_required:F(e,P.x402PaymentRequired)},o={checkout_sessions:!0,content_payments:!0,proof_artifacts:!0,risk_signals:!0,web3_settlement:t.web3Enabled},a={"dev.ucp.shopping":[{version:ge,spec:Kt,transport:"rest",endpoint:n.api,schema:"https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json"}]};return{ucp:{version:ge,protocol_version:ge,services:a,capabilities:{"dev.ucp.shopping.checkout":[{version:ge,spec:"https://ucp.dev/2026-04-08/specification/checkout/",schema:"https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"}]},payment_handlers:{},endpoints:n},protocol_version:ge,protocol:{name:"ucp",version:ge},seller:{id:t.sellerId},services:[{id:"knowgrph-content-payments",type:"content-payments",endpoints:{x402:n.x402_payment_required,checkout_sessions:n.checkout_sessions,proof:n.proof,trace:n.trace}}],capabilities:o,endpoints:n,spec_urls:[Kt],schema_urls:["https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json","https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"]}},"buildAgenticCommerceUcpProfile"),en=r(t=>{let e=Pe(t.baseUrl);return{openapi:"3.1.0",info:{title:"Knowgrph Machine Payment Protocol",version:ke,description:"Machine-readable payable-operation discovery for Knowgrph commerce routes."},servers:[{url:e}],paths:{[P.x402PaymentRequired]:{get:{operationId:"getKnowgrphX402PaymentRequirement",summary:"Return x402 payment requirements for an agent-readable paid resource.","x-payment-info":{intent:"charge",method:"x402",amount:Bo,currency:"usdc"},responses:{402:{description:"Payment Required"}}}},[P.checkoutSessions]:{post:{operationId:"createKnowgrphCommerceCheckoutSession",summary:"Create an agentic commerce checkout session.","x-payment-info":{intent:"session",method:"stripe",amount:"dynamic",currency:"request.currency"},responses:{201:{description:"Checkout session created"}}}}}}},"buildAgenticCommerceMppOpenApi"),tn=r(t=>{let e=Pe(t.baseUrl),n=F(e,P.x402PaymentRequired),o=String(t.amount||Bt);return{x402Version:2,error:"Payment required",resource:{url:n,description:"Knowgrph agentic commerce paid-resource readiness probe",mimeType:"application/json"},accepts:[{scheme:"exact",network:String(t.network||Wt),amount:o,maxAmountRequired:o,asset:String(t.asset||Ft),resource:n,mimeType:"application/json",payTo:t.payTo,maxTimeoutSeconds:300,extra:{name:"USDC",version:"2",resourceUrl:n,...t.facilitatorUrl?{facilitatorUrl:t.facilitatorUrl}:{}}}]}},"buildAgenticCommerceX402PaymentRequired");var Yo=r(t=>JSON.stringify(t,null,2),"jsonBody"),Jo=r(t=>String(t||"").trim().replace(/\/+$/g,""),"trimOrigin"),Vo=r(t=>typeof btoa=="function"?btoa(t):typeof Buffer<"u"?Buffer.from(t).toString("base64"):"","encodeBase64"),Xo=r((t,e)=>{try{return new URL(t).origin}catch{return Jo(e)}},"rootOriginFromRequest"),pt=r((t={})=>{let e=Xo(t.requestUrl,t.origin),n=t.env||{},o=Gt(n,`${e}/`),a=qt(n),s=tn({baseUrl:e,payTo:zt(n),network:Yt(n),asset:Jt(n),amount:Vt(n),facilitatorUrl:Xt(n)});return{acpDiscovery:Zt({sellerId:o,baseUrl:e,web3Enabled:a}),ucpProfile:Qt({sellerId:o,baseUrl:e,web3Enabled:a}),mppOpenApi:en({baseUrl:e}),x402PaymentRequired:s}},"buildKnowgrphCommerceDiscovery");var nn=r((t,e={})=>{let n=pt({requestUrl:t?.url,env:e}).x402PaymentRequired,o=Vo(JSON.stringify(n));return new Response(Yo(n),{status:402,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*",...o?{"payment-required":o}:{}}})},"buildKnowgrphX402PaymentRequiredResponse");async function on(t){return nn(t.request,t.env||{})}r(on,"onRequest");async function rn(t){let{request:e}=t,n=String(e.method||"GET").toUpperCase(),o=e.headers.get("origin")||"";return n==="OPTIONS"?he(e):n!=="GET"&&n!=="HEAD"?q({ok:!1,error:"Method not allowed"},{status:405,origin:o}):q({ok:!0,models:it.map(a=>({model:a,display_name:a}))},{status:200,origin:o})}r(rn,"onRequest");async function an(t){let{request:e,env:n}=t,o=String(e.method||"GET").toUpperCase(),a=e.headers.get("origin")||"";if(o==="OPTIONS")return he(e);if(o!=="POST")return q({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(e.headers.get("content-type")||"").toLowerCase().includes("application/json"))return q({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await Me(e);return await Le({request:e,env:n,pathname:"/responses",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return q({ok:!1,error:i},{status:400,origin:a})}}r(an,"onRequest");var d=Object.freeze({listSourceFiles:"list_source_files",readSourceFile:"read_source_file",readSharedDocument:"read_shared_document",inspectSharedDocumentStructure:"inspect_shared_document_structure",inspectLocalSettingsChatReadiness:"inspect_local_settings_chat_readiness",inspectLocalMainPanelState:"inspect_local_mainpanel_state",inspectLocalEditorWorkspaceState:"inspect_local_editor_workspace_state",inspectLocalChatPipelineState:"inspect_local_chat_pipeline_state",inspectLocalMainPanelChatCanvasPipeline:"inspect_local_mainpanel_chat_canvas_pipeline",inspectLocalWorkspaceDocument:"inspect_local_workspace_document",inspectLocalCanvasTopology:"inspect_local_canvas_topology",inspectLocalCanvasSnapshot:"inspect_local_canvas_snapshot",inspectLocal3dCameraPose:"inspect_local_3d_camera_pose",inspectLocal3dLayoutPositions:"inspect_local_3d_layout_positions",inspectLocal2dZoomViewport:"inspect_local_2d_zoom_viewport",inspectLocalSourceFilesSnapshot:"inspect_local_source_files_snapshot",inspectAgentSurface:"inspect_agent_surface"}),Zo="knowgrph",N=Object.freeze({readOnlyHint:!0}),D=r((t,e=Zo)=>`${String(e||"").trim()}.${String(t||"").trim()}`,"buildKnowgrphWebMcpToolName"),sn=r((t={})=>{let e=String(t.defaultWorkspaceId||"").trim(),n=t.includeBrowserOnlyTools===!0;return[{name:d.listSourceFiles,webName:D(d.listSourceFiles),title:"List Source Files",description:"List published Knowgrph Source Files.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:N},{name:d.readSourceFile,webName:D(d.readSourceFile),title:"Read Source File",description:"Read published Knowgrph Editor Workspace markdown content. Defaults to the canonical docs workspace when workspaceId is omitted.",inputSchema:{type:"object",additionalProperties:!1,required:["canonicalPath"],properties:{canonicalPath:{type:"string"},workspaceId:e?{type:"string",default:e}:{type:"string"}}},annotations:N},{name:d.readSharedDocument,webName:D(d.readSharedDocument),title:"Read Shared Document",description:"Read published Knowgrph markdown content from a share token or public Knowgrph share/document URL.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:N},{name:d.inspectSharedDocumentStructure,webName:D(d.inspectSharedDocumentStructure),title:"Inspect Shared Document Structure",description:"Inspect published Knowgrph shared-document frontmatter and body structure from a share token or public Knowgrph share/document URL.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:N},...n?[{name:d.inspectLocalSettingsChatReadiness,webName:D(d.inspectLocalSettingsChatReadiness),title:"Inspect Local Settings Chat Readiness",description:"Inspect the active browser-local Knowgrph SettingsView chat readiness state for MainPanel MCP, Integrations, and Commerce, including provider, routing, and model discovery status.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:N},{name:d.inspectLocalMainPanelState,webName:D(d.inspectLocalMainPanelState),title:"Inspect Local MainPanel State",description:"Inspect the active browser-local Knowgrph MainPanel tab, search, and shared action state for MCP, Integrations, and Commerce readiness.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:N},{name:d.inspectLocalEditorWorkspaceState,webName:D(d.inspectLocalEditorWorkspaceState),title:"Inspect Local Editor Workspace State",description:"Inspect the active browser-local Knowgrph Editor Workspace and Markdown pane state, including pane visibility and live draft/frontmatter structure.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:N},{name:d.inspectLocalChatPipelineState,webName:D(d.inspectLocalChatPipelineState),title:"Inspect Local Chat Pipeline State",description:"Inspect the active browser-local Knowgrph FloatingPanel chat runtime, including streaming, workspace follow path, and LLM-to-workspace pipeline state.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:N},{name:d.inspectLocalMainPanelChatCanvasPipeline,webName:D(d.inspectLocalMainPanelChatCanvasPipeline),title:"Inspect Local MainPanel Chat Canvas Pipeline",description:"Inspect the active browser-local Knowgrph E2E readiness path from MainPanel MCP, Integrations, and Commerce through FloatingPanel Chat, workspace markdown/frontmatter, and canvas topology.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:N},{name:d.inspectLocalWorkspaceDocument,webName:D(d.inspectLocalWorkspaceDocument),title:"Inspect Local Workspace Document",description:"Inspect the active browser-local Knowgrph workspace markdown document structure without reading published storage routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:N},{name:d.inspectLocalCanvasTopology,webName:D(d.inspectLocalCanvasTopology),title:"Inspect Local Canvas Topology",description:"Inspect the active browser-local Knowgrph canvas topology summary from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:N},{name:d.inspectLocalCanvasSnapshot,webName:D(d.inspectLocalCanvasSnapshot),title:"Inspect Local Canvas Snapshot",description:"Inspect the active browser-local Knowgrph canvas SVG snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:N},{name:d.inspectLocal3dCameraPose,webName:D(d.inspectLocal3dCameraPose),title:"Inspect Local 3D Camera Pose",description:"Inspect the active browser-local Knowgrph 3D camera pose from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:N},{name:d.inspectLocal3dLayoutPositions,webName:D(d.inspectLocal3dLayoutPositions),title:"Inspect Local 3D Layout Positions",description:"Inspect the active browser-local Knowgrph 3D layout positions from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:N},{name:d.inspectLocal2dZoomViewport,webName:D(d.inspectLocal2dZoomViewport),title:"Inspect Local 2D Zoom Viewport",description:"Inspect the active browser-local Knowgrph 2D zoom and viewport state from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:N},{name:d.inspectLocalSourceFilesSnapshot,webName:D(d.inspectLocalSourceFilesSnapshot),title:"Inspect Local Source Files Snapshot",description:"Inspect the active browser-local Knowgrph Source Files runtime snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:N}]:[],{name:d.inspectAgentSurface,webName:D(d.inspectAgentSurface),title:"Inspect Agent Surface",description:"Inspect the deployed Knowgrph agent-ready discovery surface, including health, OpenAPI, MCP, and skill metadata.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:N}]},"buildKnowgrphAgentReadyToolContracts");var cn=r((t={})=>{let e=String(t.baseUrl||"").replace(/\/+$/,""),n=e?new URL(`${e}/`).origin:"";return{baseUrl:e,healthUrl:`${e}/health`,mcpUrl:`${e}/mcp`,apiCatalogUrl:`${e}/.well-known/api-catalog`,openApiUrl:`${e}/.well-known/openapi.json`,mcpServerCardUrl:`${e}/.well-known/mcp/server-card.json`,agentCardUrl:`${e}/.well-known/agent-card.json`,agentSkillsUrl:`${e}/.well-known/agent-skills/index.json`,commerceUrls:{acpDiscoveryUrl:`${n}/.well-known/acp.json`,ucpProfileUrl:`${n}/.well-known/ucp`,mppOpenApiUrl:`${n}/openapi.json`,x402PaymentRequiredUrl:`${n}/api/payments/commerce/x402`},health:t.health,apiCatalog:t.apiCatalog,openApi:t.openApi,mcpServerCard:t.mcpServerCard,agentCard:t.agentCard,agentSkills:t.agentSkills,commerce:t.commerce}},"buildAgentSurfaceInspectionPayload");var ln=r((t={})=>{let e=t.toolNames||{},n=String(t.defaultWorkspaceId||"").trim(),o=t.buildStorageDocPath,a=t.fetchSourceFilesIndexResponse,s=t.fetchStorageMarkdownResponse,i=t.resolveSharedDocumentInput,c=t.inspectSharedDocumentStructure,l=t.buildAgentSurfaceInspection,p=r(g=>String(g||"").trim(),"normalizeString");if(typeof o!="function")throw new Error("buildStorageDocPath is required");if(typeof a!="function")throw new Error("fetchSourceFilesIndexResponse is required");if(typeof s!="function")throw new Error("fetchStorageMarkdownResponse is required");if(typeof i!="function")throw new Error("resolveSharedDocumentInput is required");if(typeof c!="function")throw new Error("inspectSharedDocumentStructure is required");if(typeof l!="function")throw new Error("buildAgentSurfaceInspection is required");let f=r(async(g={})=>{let _=p(g.canonicalPath);if(!_)throw new Error("canonicalPath is required");let E=p(g.workspaceId),k=await s(o(_,E));if(!k.ok)throw new Error(`read_source_file failed with ${k.status}`);return{workspaceId:E||n,canonicalPath:_,markdown:await k.text()}},"readSourceFile"),u=r(async(g={})=>{let _=i(g);if(!_)throw new Error("shareToken or shareUrl must resolve to a published Knowgrph document");let E=p(_.workspaceId),k=p(_.canonicalPath),I=await s(o(k,E));if(!I.ok)throw new Error(`read_shared_document failed with ${I.status}`);return{workspaceId:E||n,canonicalPath:k,markdown:await I.text()}},"readSharedDocument"),b=r(async(g={})=>{let _=await u(g);return c(_)},"inspectSharedDocument");return{[e.listSourceFiles]:async()=>{let g=await a();if(!g.ok)throw new Error(`list_source_files failed with ${g.status}`);return{workspaceId:n,markdownIndex:await g.text()}},[e.readSourceFile]:f,[e.readSharedDocument]:u,[e.inspectSharedDocumentStructure]:b,[e.inspectAgentSurface]:async()=>l()}},"createPublishedAgentReadyToolExecutors");var pn=r((t={})=>{let e=r(w=>String(w||"").trim(),"normalizeString"),n=r(w=>String(w||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),o=r(w=>{let y=String(w||"").match(/^\s*/);return y?y[0].length:0},"readIndent"),a=r(w=>/^[A-Za-z0-9_:@-]+\s*:/.test(e(w)),"isYamlKeyLine"),s=r(w=>n(w).split(`
`),"splitLines"),i=r(w=>{let y=s(w),m=0;for(;m<y.length&&!e(y[m]);)m+=1;if(e(y[m])!=="---")return null;for(let h=m+1;h<y.length;h+=1)if(e(y[h])==="---")return{frontmatter:y.slice(m+1,h).join(`
`),body:y.slice(h+1).join(`
`)};return null},"extractLeadingFrontmatter"),c=r(w=>{let y=[];for(let m of s(w)){if(!e(m)||o(m)!==0)continue;let h=m.match(/^([A-Za-z0-9_:@-]+)\s*:/);h?.[1]&&y.push(h[1])}return Array.from(new Set(y)).sort((m,h)=>m.localeCompare(h))},"extractTopLevelFrontmatterKeys"),l=r((w,y)=>{let m=s(w),h=`${y}:`;for(let A=0;A<m.length;A+=1){let J=m[A],re=e(J);if(!re.startsWith(h))continue;let pe=o(J),ue=re.slice(h.length).trim();if(ue)return{indent:pe,inlineValue:ue,blockLines:[],blockText:""};let de=[];for(let xe=A+1;xe<m.length;xe+=1){let me=m[xe],$=e(me),B=o(me);if($&&B<=pe&&a(me))break;de.push(me)}return{indent:pe,inlineValue:"",blockLines:de,blockText:de.join(`
`)}}return null},"extractYamlBlock"),p=r(w=>{let y=[];for(let m of s(w)){let h=e(m);if(!h||h.startsWith("- "))continue;let A=h.match(/^([A-Za-z0-9_:@-]+)\s*:/);A?.[1]&&y.push(A[1])}return Array.from(new Set(y)).sort((m,h)=>m.localeCompare(h))},"extractNestedYamlKeys"),f=r(w=>{let y=e(w);if(!y.startsWith("[")||!y.endsWith("]"))return null;let m=y.slice(1,-1).trim();return m?m.split(",").map(h=>e(h)).filter(Boolean).length:0},"countInlineSequenceEntries"),u=r((w,y)=>{let m=l(w,y);if(!m)return null;if(m.inlineValue)return f(m.inlineValue);let h=0;for(let A of m.blockLines)e(A)&&(o(A)<=m.indent||/^\s*-\s+/.test(A)&&(h+=1));return h},"countYamlSequenceEntries"),b=r(w=>{let y=[];for(let m of s(w)){let h=m.match(/^(#{1,6})\s+(.+?)\s*$/);h?.[2]&&y.push({depth:h[1].length,text:e(h[2])})}return y},"extractMarkdownHeadings"),g=e(t.workspaceId),_=e(t.canonicalPath),E=n(t.markdown),k=i(E),I=k?c(k.frontmatter):[],v=k?l(k.frontmatter,"flow"):null,U=v?p(v.blockText):[],T=new Set(["kg:subgraphs","clusters","groups","layers"]),G=Array.from(new Set([...I,...U].filter(w=>T.has(w)))).sort((w,y)=>w.localeCompare(y)),j=b(k?k.body:E);return{workspaceId:g,canonicalPath:_,markdownLength:E.length,lineCount:E?s(E).length:0,hasFrontmatter:!!k,topLevelKeys:I,hasFlowBlock:!!v,flowKeys:U,flowNodeCount:v?u(v.blockText,"nodes"):null,flowConnectionCount:v?u(v.blockText,"connections")??u(v.blockText,"edges"):null,flowSubgraphCount:v?u(v.blockText,"subgraphs"):null,forbiddenGroupingAliases:G,headingCount:j.length,headings:j.map(w=>w.text),bodyLength:e(k?k.body:E).length}},"inspectSharedDocumentStructure");var Qo={[d.listSourceFiles]:{id:"list-source-files",tags:["mcp","discovery","source-files","read-only"],examples:["List the published Knowgrph Source Files."],outputModes:["text/markdown","application/json"]},[d.readSourceFile]:{id:"read-source-file",tags:["mcp","read","markdown","workspace"],examples:["Read the published source file for docs/getting-started.md."],outputModes:["text/markdown","application/json"]},[d.readSharedDocument]:{id:"read-shared-document",tags:["mcp","read","shared-document","markdown"],examples:["Read the Knowgrph shared document behind this share URL."],outputModes:["text/markdown","application/json"]},[d.inspectSharedDocumentStructure]:{id:"inspect-shared-document-structure",tags:["mcp","inspect","shared-document","structure"],examples:["Inspect the structure of this Knowgrph shared document."],outputModes:["application/json","text/markdown"]},[d.inspectAgentSurface]:{id:"inspect-agent-surface",tags:["mcp","agent-ready","discovery","metadata"],examples:["Show the Knowgrph agent discovery metadata."],outputModes:["application/json","text/markdown"]}},ye=[{name:"knowgrph-source-files",type:"markdown",description:"Discover and inspect published Knowgrph Source Files and shared documents.",path:"/.well-known/agent-skills/knowgrph-source-files.md"},{name:"knowgrph-webmcp-readiness",type:"markdown",description:"Inspect Knowgrph WebMCP lifecycle, shared deployed MCP tools, and agent-ready metadata.",path:"/.well-known/agent-skills/knowgrph-webmcp-readiness.md"}],un=r(t=>t.map(e=>{let n=Qo[e.name]||{id:String(e.name||"").replace(/_/g,"-"),tags:["mcp","read-only"],examples:[`Call ${e.name} on Knowgrph.`],outputModes:["application/json"]};return{id:n.id,name:e.title,description:e.description,tags:n.tags,examples:n.examples,inputModes:["application/json","text/plain"],outputModes:n.outputModes}}),"buildAgentReadyA2aSkills"),dn=r(async({appUrl:t,updatedAt:e,sha256ByName:n})=>({$schema:"https://agent-skills.dev/schemas/skills-index.v0.2.json",updated_at:e,skills:await Promise.all(ye.map(async o=>({name:o.name,type:o.type,description:o.description,url:`${String(t||"").replace(/\/+$/,"")}${o.path}`,sha256:await n[o.name]})))}),"buildAgentReadyAgentSkillsIndex"),mn=r(({appBasePath:t,appA2aAgentCardPath:e,healthPath:n})=>({[n]:{get:{summary:"Read the Knowgrph agent-ready health status",responses:{200:{description:"Health status in application/health+json format"}}}},[`${t}/mcp`]:{get:{summary:"Read MCP transport metadata",responses:{200:{description:"MCP transport metadata"}}},post:{summary:"Send a JSON-RPC MCP request",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0}}}},responses:{200:{description:"JSON-RPC result payload"}}}},[e]:{get:{summary:"Read the Knowgrph A2A Agent Card",responses:{200:{description:"A2A Agent Card JSON"}}}},"/api/storage/llms.txt":{get:{summary:"Read the Source Files LLM index",responses:{200:{description:"Plain-text LLM index"}}}},"/api/storage/source-files":{get:{summary:"List published Source Files",responses:{200:{description:"Source Files index"}}}},"/api/storage/source-files/{workspaceId}":{get:{summary:"List published Source Files for a workspace",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped Source Files index"}}}},"/api/storage/source-files/{workspaceId}/llms.txt":{get:{summary:"Read the workspace-scoped Source Files LLM index",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped plain-text LLM index"}}}},"/api/storage/doc-default/{canonicalPath}":{get:{summary:"Read a default-workspace Source File markdown document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document from the default Editor Workspace"},404:{description:"Document not found"}}}},"/api/storage/doc/{workspaceId}/{canonicalPath}":{get:{summary:"Read a Source File markdown document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document"},404:{description:"Document not found"}}}},[`${t}/doc-default/{canonicalPath}`]:{get:{summary:"Read a default-workspace shared document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${t}/doc/{workspaceId}/{canonicalPath}`]:{get:{summary:"Read a shared document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${t}/share/{shareToken}`]:{get:{summary:"Read a shared document through the canonical opaque share token route",parameters:[{name:"shareToken",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or published markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${t}${ye[0].path}`]:{get:{summary:"Read the Knowgrph published Source Files skill markdown",responses:{200:{description:"Agent skill markdown for published Source Files and shared documents"}}}},[`${t}${ye[1].path}`]:{get:{summary:"Read the Knowgrph WebMCP readiness skill markdown",responses:{200:{description:"Agent skill markdown for WebMCP lifecycle and discovery readiness"}}}}}),"buildAgentReadyOpenApiPaths");var er="kgShare",yi=typeof TextEncoder<"u"?new TextEncoder:null,hn=typeof TextDecoder<"u"?new TextDecoder:null;var tr=r(t=>{if(typeof Buffer<"u")return Uint8Array.from(Buffer.from(t,"base64"));let e=atob(t),n=new Uint8Array(e.length);for(let o=0;o<e.length;o+=1)n[o]=e.charCodeAt(o);return n},"fromBase64");var nr=r(t=>{let e=String(t||"").replace(/-/g,"+").replace(/_/g,"/");if(!e)return"";let n=e.length%4;return n?`${e}${"=".repeat(4-n)}`:e},"fromBase64Url");var or=r(t=>{if(!hn)throw new Error("TextDecoder is required to decode published doc share tokens");return hn.decode(tr(nr(t)))},"decodeUtf8Base64Url"),yn=r(t=>String(t||"").trim()||null,"normalizeWorkspaceId"),mt=r(t=>String(t||"").trim(),"normalizeCanonicalPath"),ut="/knowgrph",fn="/doc-default/",gn="/doc/",wn="/share/",rr="kgWorkspaceId",ar="kgCanonicalPath",sr=r(t=>{let e=String(t||"").trim();return e?`/${e.replace(/^\/+|\/+$/g,"")}`:ut},"normalizeAppBasePath"),dt=r(t=>{let e=mt(t?.canonicalPath);return e?{canonicalPath:e,workspaceId:yn(t?.workspaceId)}:null},"normalizePublishedDocIdentity"),Sn=r((t,e)=>{let n=sr(e),o=String(t||"").replace(/\/+$/,"")||"/";if(!o.startsWith(n))return null;let a=o.slice(n.length)||"/";if(a.startsWith(wn)){let c=decodeURIComponent(a.slice(wn.length)).trim();return ht(c)}if(a.startsWith(fn))return dt({canonicalPath:decodeURIComponent(a.slice(fn.length))});if(!a.startsWith(gn))return null;let s=a.slice(gn.length),i=s.indexOf("/");return i<1?null:dt({workspaceId:decodeURIComponent(s.slice(0,i)),canonicalPath:decodeURIComponent(s.slice(i+1))})},"parsePublishedDocPathname"),ir=r(t=>{let e=ht(t?.get(er));if(e)return e;let n=mt(decodeURIComponent(String(t?.get(ar)||"")));if(n)return dt({workspaceId:decodeURIComponent(String(t?.get(rr)||"")),canonicalPath:n});let o=String(t?.get("kgPath")||"").trim();return o?Sn(`${ut}${o}`,ut):null},"parsePublishedDocSearchParams");var ht=r(t=>{let e=String(t||"").trim();if(!e)return null;try{let n=JSON.parse(or(e)),o=mt(n?.canonicalPath);return o?{canonicalPath:o,workspaceId:yn(n?.workspaceId)}:null}catch{return null}},"decodePublishedDocShareToken"),je=r((t={})=>{let e=ht(t.shareToken);if(e)return e;let n=String(t.shareUrl||"").trim();if(!n)return null;try{let o=String(t.baseUrl||"https://airvio.co").trim()||"https://airvio.co",a=new URL(n,o);return ir(a.searchParams)||Sn(a.pathname,t.appBasePath)}catch{return null}},"resolvePublishedDocIdentity"),_n=String.raw`(args = {}) => {
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
}`;var He={push:"/api/storage/push",pull:"/api/storage/pull",exportPrefix:"/api/storage/export/",docPrefix:"/api/storage/doc/",defaultDocPrefix:"/api/storage/doc-default/",sourceFilesIndex:"/api/storage/source-files",sourceFilesIndexPrefix:"/api/storage/source-files/",sourceFilesLlms:"/api/storage/llms.txt"};var bn=r((t,e)=>`${He.docPrefix}${encodeURIComponent(String(t||"").trim())}/${encodeURIComponent(String(e||"").trim())}`,"buildKnowgrphStorageDocPath"),xn=r(t=>`${He.defaultDocPrefix}${encodeURIComponent(String(t||"").trim())}`,"buildKnowgrphStorageDefaultDocPath"),Rn=r(t=>{let e=String(t||"").trim();return e?`${He.sourceFilesIndexPrefix}${encodeURIComponent(e)}`:He.sourceFilesIndex},"buildKnowgrphStorageSourceFilesIndexPath");var C="https://airvio.co",Ae="https://knowgrph-storage.huijoohwee.workers.dev",x="/knowgrph",R=`${C}${x}/`,kn=`${C}/`,Ee="kgws:canonical-docs",_e="2026-05-23",be=`${x}/health`,Se=`${C}${be}`,Pn="/.well-known/agent-card.json",ft=`${x}/.well-known/agent-card.json`,Ke=`${C}${Pn}`,gt=`${C}/api/storage/source-files`,cr=`${C}/api/storage/doc-default/{canonicalPath}`,lr=`${C}/api/storage/doc/{workspaceId}/{canonicalPath}`,An="knowgrph-agent-ready-pages";var En=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${x}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${x}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${be}>; rel="status"; type="application/health+json"`,`<${x}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${Pn}>; rel="describedby"; type="application/json"`].join(", "),Tn=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${R}.

## Discovery

- Crawl policy: ${R}robots.txt
- Sitemap: ${R}sitemap.xml
- API catalog: ${R}.well-known/api-catalog
- Auth.md registration instructions: ${kn}auth.md
- Health: ${Se}
- MCP server card: ${R}.well-known/mcp/server-card.json
- A2A Agent Card: ${Ke}
- Agent skills: ${R}.well-known/agent-skills/index.json
- LLM reference: ${R}llms.txt

## APIs

- Agent-ready status: ${Se}
- HTTP MCP: ${R}mcp
- Storage API: ${C}/api/storage/
- Source Files index: ${gt}
- Default Source File documents: ${cr}
- Workspace Source File documents: ${lr}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes five read-only tools for published Source Files, shared documents, and agent-surface inspection.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared five-tool WebMCP surface on \`${R}\` HTML routes.
`,Cn=r(t=>new Response(t,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(t||"").length/4))}}),"markdownResponse"),Te=r(t=>(t.headers.get("accept")||"").toLowerCase().split(",").some(n=>n.trim().startsWith("text/markdown")),"wantsMarkdown"),In=r((t,e)=>{let n=new Response(t.body,t),o=String(e?.owner||"").trim(),a=String(e?.tag||"").trim();return o&&n.headers.set("x-knowgrph-route-owner",o),a&&n.headers.set("x-knowgrph-route-tag",a),n},"withAgentReadyRouteHeaders");var Fe=sn({defaultWorkspaceId:Ee}),Un=r((t,e="")=>{let n=String(t||"").trim(),o=String(e||"").trim();return o?bn(o,n):xn(n)},"buildStorageDocPath"),Nn=r(t=>String(t||"").trim(),"normalizeToolString");var H=r((t,e="application/json; charset=utf-8")=>new Response(JSON.stringify(t,null,2),{status:200,headers:{"content-type":e,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"jsonResponse"),Dn=r((t,e)=>new Response(JSON.stringify(e,null,2),{status:t,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"jsonStatusResponse"),Ce=r((t,e)=>new Response(t,{status:200,headers:{"content-type":e,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"textResponse"),pr=r(t=>new Response(JSON.stringify(t,null,2),{status:200,headers:{"content-type":"application/health+json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"healthResponse"),ur=r(t=>`User-agent: *
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
Sitemap: ${t}
`,"buildRobotsTxt"),dr=r(t=>`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${R}</loc>
    <lastmod>${_e}</lastmod>
  </url>
  <url>
    <loc>${R}llms.txt</loc>
    <lastmod>${_e}</lastmod>
  </url>
  <url>
    <loc>${t}.well-known/mcp/server-card.json</loc>
    <lastmod>${_e}</lastmod>
  </url>
</urlset>
`,"buildSitemapXml"),mr=ur(`${R}sitemap.xml`),hr=dr(R),Mn={linkset:[{anchor:R,"service-desc":[{href:`${R}.well-known/openapi.json`,type:"application/vnd.oai.openapi+json;version=3.1"}],"service-doc":[{href:`${R}llms.txt`,type:"text/plain"}],status:[{href:Se,type:"application/health+json"}],"service-meta":[{href:`${R}.well-known/mcp/server-card.json`,type:"application/json"},{href:Ke,type:"application/json"}]}]},Ln={openapi:"3.1.0",info:{title:"Knowgrph API",version:"0.1.0",description:"Agent discovery surface for the Knowgrph Cloudflare deployment."},servers:[{url:C,description:"Knowgrph Cloudflare deployment"}],paths:mn({appBasePath:x,appA2aAgentCardPath:ft,healthPath:be})},Ie={resource:R,resource_name:"Knowgrph",authorization_servers:[C],scopes_supported:["knowgrph:read","knowgrph:source-files:read"],bearer_methods_supported:["header"],resource_documentation:`${R}llms.txt`},wt=`${C}/cdn-cgi/access`,V={skill:`${C}/auth.md`,register_uri:`${R}agent/auth`,claim_uri:`${R}agent/auth/claim`,revocation_uri:`${R}agent/auth/revoke`,identity_types_supported:["anonymous","identity_assertion"],anonymous:{credential_types_supported:["api_key"]},identity_assertion:{assertion_types_supported:["urn:ietf:params:oauth:token-type:id-jag","verified_email"],credential_types_supported:["access_token","api_key"]},events_supported:["https://schemas.workos.com/events/agent/auth/identity/assertion/revoked"],registration_status:"metadata_published_runtime_user_mediated"},vn={issuer:C,resource:Ie.resource,resource_name:Ie.resource_name,authorization_servers:Ie.authorization_servers,cloudflare_access_issuer:wt,authorization_endpoint:`${wt}/login`,token_endpoint:`${wt}/token`,jwks_uri:`${R}.well-known/http-message-signatures-directory`,response_types_supported:["code"],grant_types_supported:["authorization_code","client_credentials"],token_endpoint_auth_methods_supported:["client_secret_basic","private_key_jwt"],scopes_supported:Ie.scopes_supported,agent_auth:V},fr=`# Knowgrph auth.md

Knowgrph publishes agent registration metadata for the read-only agent surface at ${R}. Agents should first fetch ${C}/.well-known/oauth-protected-resource, follow its authorization_servers entry to ${C}/.well-known/oauth-authorization-server, and read the agent_auth block.

## Registration

- Register: ${V.register_uri}
- Claim: ${V.claim_uri}
- Revoke: ${V.revocation_uri}
- Supported identity types: ${V.identity_types_supported.join(", ")}
- Anonymous credentials: ${V.anonymous.credential_types_supported.join(", ")}
- Identity assertion types: ${V.identity_assertion.assertion_types_supported.join(", ")}
- Identity assertion credentials: ${V.identity_assertion.credential_types_supported.join(", ")}
- Revocation events: ${V.events_supported.join(", ")}
- Current runtime policy: user-mediated access through the existing Cloudflare Access/OAuth boundary; no separate MCP-only auth stack.
- Pipeline rule: agents must not bypass MainPanel -> FloatingPanel Chat -> KGC -> Canvas for user-mediated graph work; published HTTP MCP tools remain read-only until mutation auth and conflict semantics are implemented.`,$n={name:"Knowgrph Agent",description:"Agent-readable discovery, published-document retrieval, and WebMCP-ready metadata surface for Knowgrph.",version:"0.1.0",provider:{organization:"airvio / joohwee",url:R},url:`${R}mcp`,preferredTransport:"JSONRPC",supportedInterfaces:[{url:`${R}mcp`,protocolBinding:"JSONRPC",transportProtocol:"JSONRPC",description:"Primary machine interface for read-only discovery and source-file document access."},{url:gt,protocolBinding:"HTTP+JSON/REST",transportProtocol:"HTTP+JSON/REST",description:"Published source-files index and storage-backed document read surface."}],capabilities:{streaming:!1,pushNotifications:!1,stateTransitionHistory:!1,extendedAgentCard:!1},defaultInputModes:["text/plain","text/markdown","application/json"],defaultOutputModes:["text/plain","text/markdown","application/json"],skills:un(Fe)},ee={serverInfo:{name:"knowgrph",version:"0.1.0"},transport:{type:"http",url:`${R}mcp`},capabilities:{tools:Fe.map(t=>({name:t.name,description:t.description,inputSchema:t.inputSchema}))},links:{apiCatalog:`${R}.well-known/api-catalog`,skills:`${R}.well-known/agent-skills/index.json`,status:Se,agentCard:Ke}},_t=Fe.map(t=>({name:t.webName,title:t.title,description:t.description,inputSchema:t.inputSchema,annotations:t.annotations})),ve=r(t=>Nn(Fe.find(e=>e.name===t)?.webName),"findWebMcpToolName"),gr=ve(d.listSourceFiles),wr=ve(d.readSourceFile),yr=ve(d.readSharedDocument),Sr=ve(d.inspectSharedDocumentStructure),_r=ve(d.inspectAgentSurface),br=`(() => {
  const root = globalThis;
  const siteOrigin = ${JSON.stringify(C)};
  const appBasePath = ${JSON.stringify(x)};
  const defaultWorkspaceId = ${JSON.stringify(Ee)};
  const toolDefinitions = ${JSON.stringify(_t)};
  const toolNames = ${JSON.stringify(_t.map(t=>t.name))};
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
  const createPublishedDocIdentityResolver = ${_n};
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
      listSourceFiles: ${JSON.stringify(gr)},
      readSourceFile: ${JSON.stringify(wr)},
      readSharedDocument: ${JSON.stringify(yr)},
      inspectSharedDocumentStructure: ${JSON.stringify(Sr)},
      inspectAgentSurface: ${JSON.stringify(_r)},
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
})();`,xr=r(async t=>{if(!(t.headers.get("content-type")||"").toLowerCase().includes("text/html"))return t;let n=await t.text();if(_t.every(i=>n.includes(i.name)))return new Response(n,t);let o=`<script>${br}<\/script>`,a=n.includes("</head>")?n.replace("</head>",`${o}</head>`):`${n}${o}`,s=new Response(a,t);return s.headers.delete("content-length"),s},"injectWebMcpScript"),jn=`# Knowgrph Published Documents Skill

Use this skill when an agent needs to discover, read, or inspect published Knowgrph Source Files and shared documents.

## Tools

- list_source_files: fetch ${C}/api/storage/source-files.
- read_source_file: fetch ${C}/api/storage/doc-default/{canonicalPath} by default, or ${C}/api/storage/doc/{workspaceId}/{canonicalPath} for an explicit workspace.
- read_shared_document: resolve a Knowgrph share token or public share/document URL, then fetch the canonical published markdown document from storage.
- inspect_shared_document_structure: inspect published Knowgrph shared-document frontmatter/body structure from a share token or public share/document URL.

## Scope

- Shared read-only surface across HTTP MCP, MCP server-card metadata, and deployed HTML WebMCP fallback.
- Public/browser URLs stay canonical on ${C}/api/storage/*.
- Server-side Pages reads use ${Ae} to avoid custom-domain self-fetch rewrite failures.
`,Hn=`# Knowgrph WebMCP Readiness Skill

Use this skill when an agent or browser needs to inspect the deployed Knowgrph agent-ready surface and WebMCP lifecycle.

## Shared deployed tools

- inspect_agent_surface: inspect health, OpenAPI, API catalog, MCP server card, A2A card, and agent-skills metadata.

## WebMCP implementation notes

- Browser app runtime installs WebMCP on page load via navigator.modelContext in canvas/src/main.tsx.
- Runtime prefers provideContext({ tools }) when available and also registers each tool with registerTool(tool, { signal }) when supported.
- AbortController-backed registration is used so tools can be unregistered cleanly with the platform lifecycle.
- Deployed HTML fallback injects the shared five-tool WebMCP surface on /knowgrph HTML routes.
- Full app runtime additionally exposes browser-local inspect tools for Settings chat readiness, MainPanel state, Editor Workspace state, chat pipeline validation/finalize/apply state, the combined MainPanel -> Chat -> Markdown/frontmatter -> Canvas readiness path, the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
`,Rr={listSourceFiles:d.listSourceFiles,readSourceFile:d.readSourceFile,readSharedDocument:d.readSharedDocument,inspectSharedDocumentStructure:d.inspectSharedDocumentStructure,inspectAgentSurface:d.inspectAgentSurface},Kn=r(async t=>{let e=new TextEncoder().encode(t),n=await crypto.subtle.digest("SHA-256",e);return[...new Uint8Array(n)].map(o=>o.toString(16).padStart(2,"0")).join("")},"sha256Hex"),kr=Kn(jn),Pr=Kn(Hn),Ar={[ye[0].name]:kr,[ye[1].name]:Pr},Bn=r(async()=>dn({appUrl:R,updatedAt:_e,sha256ByName:Ar}),"agentSkillsIndex"),Er={keys:[{kty:"OKP",crv:"Ed25519",kid:"knowgrph-agent-ready-2026-05-21",use:"sig",alg:"EdDSA",x:"11qYAYdkVKxA4G0wV47IxPtYfFVH_H7zmC2Di2PcvLU"}]},Tr={protocolVersion:"2025-06-18",capabilities:{tools:{}},serverInfo:ee.serverInfo},Cr=ee.capabilities.tools.map(t=>({name:t.name,description:t.description,inputSchema:t.inputSchema})),Fn=r(()=>({status:"pass",service:"knowgrph-agent-ready-pages",homepage:R,health:Se,updatedAt:_e,checks:{linkHeaders:!0,markdownNegotiation:!0,httpMcp:!0,webMcp:!0,commerce:{acp:!0,ucp:!0,mpp:!0,x402:!0},defaultWorkspaceId:Ee}}),"buildHealthStatusBody"),Ir=r(async()=>cn({baseUrl:R,health:Fn(),apiCatalog:Mn,openApi:Ln,mcpServerCard:ee,agentCard:$n,agentSkills:await Bn(),commerce:pt({origin:C})}),"buildAgentSurfaceInspection"),vr=ln({toolNames:Rr,defaultWorkspaceId:Ee,buildStorageDocPath:Un,fetchSourceFilesIndexResponse:r(()=>fetch(`${Ae}${Rn()}`,{headers:{accept:"text/markdown"}}),"fetchSourceFilesIndexResponse"),fetchStorageMarkdownResponse:r(t=>fetch(`${Ae}${t}`,{headers:{accept:"text/markdown"}}),"fetchStorageMarkdownResponse"),resolveSharedDocumentInput:r((t={})=>je({shareToken:t?.shareToken,shareUrl:t?.shareUrl,appBasePath:x,baseUrl:C}),"resolveSharedDocumentInput"),inspectSharedDocumentStructure:pn,buildAgentSurfaceInspection:Ir}),Wn=r(t=>{try{let e=new URL(t,C);return je({shareUrl:`${e.pathname}${e.search}`,baseUrl:C,appBasePath:x})}catch{return null}},"resolvePublishedDocRequestIdentity"),Or=r(t=>je({shareUrl:String(t||""),baseUrl:C,appBasePath:x}),"resolvePublishedDocPathIdentity"),Ur=r(async(t,e)=>{let n=new URL(Un(e.canonicalPath,e.workspaceId),Ae),o=await fetch(n,{method:"GET",headers:{accept:"text/markdown, text/plain;q=0.9, */*;q=0.1"}}),a=new Headers(o.headers),s=String(a.get("vary")||"");return a.set("vary",s?`${s}, Accept`:"Accept"),new Response(String(t.method||"").toUpperCase()==="HEAD"?null:o.body,{status:o.status,statusText:o.statusText,headers:a})},"proxyPublishedDocMarkdownResponse"),Nr=r(async t=>{try{let e=await t.json();return e&&typeof e=="object"?e:null}catch{return null}},"readJsonRpcRequest"),Be=r((t,e)=>H({jsonrpc:"2.0",id:t??null,result:e}),"jsonRpcResult"),yt=r((t,e,n)=>H({jsonrpc:"2.0",id:t??null,error:{code:e,message:n}}),"jsonRpcError"),Dr=r(async(t,e)=>{let n=vr[t];if(typeof n!="function")throw new Error(`unknown tool: ${t}`);return n(e)},"executeMcpTool"),Mr=r(async t=>{let e=String(t.method||"GET").toUpperCase();if(e==="GET"||e==="HEAD")return H({ok:!0,transport:ee.transport,serverInfo:ee.serverInfo,capabilities:ee.capabilities});if(e!=="POST")return Dn(405,{ok:!1,error:"unsupported_method"});let n=await Nr(t);if(!n)return yt(null,-32700,"Parse error");switch(n.method){case"initialize":return Be(n.id,Tr);case"tools/list":return Be(n.id,{tools:Cr});case"tools/call":{let o=Nn(n.params?.name),a=n.params?.arguments&&typeof n.params.arguments=="object"?n.params.arguments:{};if(!o)return yt(n.id,-32602,"Tool name is required");try{let s=await Dr(o,a);return Be(n.id,{content:[{type:"text",text:typeof s?.markdown=="string"?s.markdown:JSON.stringify(s,null,2)}],structuredContent:s,isError:!1})}catch(s){return Be(n.id,{content:[{type:"text",text:s instanceof Error?s.message:String(s)}],isError:!0})}}default:return yt(n.id,-32601,"Method not found")}},"handleMcpTransport");var bt=r(t=>t===x||t===`${x}/`,"handlesKnowgrphRoot"),Lr=r(t=>bt(t)||!!Or(t),"handlesKnowgrphHtmlSurface"),$r=r(t=>{let e=new URL(t.url),n=e.pathname.replace(/\/+$/,"")||"/",o=Wn(t.url);return n===be?"health":n===`${x}/mcp`?"mcp":n===`${x}/robots.txt`?"robots":n===`${x}/sitemap.xml`?"sitemap":n===`${x}/auth.md`||n==="/auth.md"?"auth-md":n.startsWith(`${x}/.well-known/`)?"well-known":o?Te(t)?"shared-doc-markdown":"shared-doc-html":bt(e.pathname)?Te(t)?"homepage-markdown":"homepage-html":"app-surface"},"resolveAgentReadyRouteTag"),St=r((t,e)=>In(e,{owner:An,tag:$r(t)}),"withKnowgrphRouteHeaders"),On=r(async t=>{let e=new URL(t.url),n=e.pathname.replace(/\/+$/,"")||"/",o=Wn(t.url);if(o&&Te(t))return Ur(t,o);if(bt(e.pathname)&&Te(t))return Cn(Tn);switch(n){case be:return pr(Fn());case`${x}/mcp`:return Mr(t);case`${x}/robots.txt`:return Ce(mr,"text/plain; charset=utf-8");case`${x}/sitemap.xml`:return Ce(hr,"application/xml; charset=utf-8");case`${x}/auth.md`:case"/auth.md":return Ce(fr,"text/markdown; charset=utf-8");case`${x}/.well-known/api-catalog`:return H(Mn,"application/linkset+json; charset=utf-8");case`${x}/.well-known/openapi.json`:return H(Ln,"application/vnd.oai.openapi+json; charset=utf-8");case ft:return H($n);case`${x}/.well-known/oauth-protected-resource`:return H(Ie);case`${x}/.well-known/oauth-authorization-server`:return H(vn);case`${x}/.well-known/openid-configuration`:return H(vn);case`${x}/.well-known/mcp/server-card.json`:return H(ee);case`${x}/.well-known/mcp.json`:return H(ee);case`${x}/.well-known/agent-skills/index.json`:return H(await Bn());case`${x}/.well-known/agent-skills/knowgrph-source-files.md`:return Ce(jn,"text/markdown; charset=utf-8");case`${x}/.well-known/agent-skills/knowgrph-webmcp-readiness.md`:return Ce(Hn,"text/markdown; charset=utf-8");case`${x}/.well-known/http-message-signatures-directory`:return H(Er);default:return null}},"routeResponse");async function te(t){let{env:e,request:n}=t,o=String(n.method||"GET").toUpperCase(),a=new URL(n.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(o==="POST"&&a.pathname.replace(/\/+$/,"")===`${x}/mcp`)return St(n,await On(n));if(o!=="GET"&&o!=="HEAD")return Dn(405,{ok:!1,error:"unsupported_method"});let s=await On(n);if(s){let p=St(n,s);return o==="HEAD"?new Response(null,p):p}let i=await t.next();if(!Lr(a.pathname))return i;let c=o==="HEAD"?i:await xr(i),l=new Response(o==="HEAD"?null:c.body,c);return l.headers.set("link",En),St(n,l)}r(te,"onRequest");async function Gn(t){return te(t)}r(Gn,"onRequest");async function qn(t){return te(t)}r(qn,"onRequest");async function zn(t){return te(t)}r(zn,"onRequest");var jr=Object.freeze(new Set(["","80","443"])),Hr=Object.freeze([".local",".localhost",".internal"]),Kr=Object.freeze(new Set(["localhost"]));function se(t){return String(t||"").trim().toLowerCase()}r(se,"normalizeHostname");function Br(t){let e=se(t);if(!/^\d{1,3}(\.\d{1,3}){3}$/.test(e))return!1;let n=e.split(".").map(o=>Number(o));return n.length!==4?!1:n.every(o=>Number.isInteger(o)&&o>=0&&o<=255)}r(Br,"isIpv4Literal");function Yn(t){let[e,n,o,a]=t.split(".").map(s=>Number(s));return(e<<24|n<<16|o<<8|a)>>>0}r(Yn,"ipv4ToInt");function Fr(t,e,n){if(!Number.isInteger(n)||n<0||n>32)return!1;if(n===0)return!0;let o=4294967295<<32-n>>>0;return(t&o)===(e&o)}r(Fr,"inIpv4Cidr");function Wr(t){let e=se(t);return!e||!e.includes(":")?!1:/^[0-9a-f:]+$/i.test(e)}r(Wr,"isIpv6Literal");function Gr(t){let e=se(t);return!!(!e||e==="::1"||e==="0:0:0:0:0:0:0:1"||e.startsWith("fc")||e.startsWith("fd")||/^fe[89ab]/i.test(e))}r(Gr,"isBlockedIpv6");function qr(t,{blockedExact:e,blockedSuffixes:n}={}){let o=se(t);if(!o)return!0;let a=e||Kr;if(a instanceof Set&&a.has(o))return!0;let s=n||Hr;if(Array.isArray(s))for(let i of s){let c=se(i);if(c&&(o===c||o.endsWith(c)))return!0}return!1}r(qr,"isBlockedHostname");function zr(t){let e=se(t);if(!e)return!0;if(Br(e)){let n=Yn(e),o=[{base:"0.0.0.0",bits:8},{base:"10.0.0.0",bits:8},{base:"127.0.0.0",bits:8},{base:"169.254.0.0",bits:16},{base:"172.16.0.0",bits:12},{base:"192.168.0.0",bits:16},{base:"100.64.0.0",bits:10}];for(let a of o){let s=Yn(a.base);if(Fr(n,s,a.bits))return!0}return!1}return Wr(e)?Gr(e):!1}r(zr,"isBlockedIpLiteral");function We(t,{allowedPorts:e}={}){let n=String(t||"").trim();if(!n)throw new Error("invalid_url");let o;try{o=new URL(n)}catch{throw new Error("invalid_url")}if(o.protocol!=="http:"&&o.protocol!=="https:")throw new Error("invalid_url");if(o.username||o.password)throw new Error("invalid_url");let a=e||jr,s=String(o.port||"");if(a instanceof Set&&!a.has(s))throw new Error("port_not_allowed");let i=se(o.hostname);if(!i)throw new Error("invalid_url");if(qr(i))throw new Error("blocked_host");if(zr(i))throw new Error("blocked_host");return o}r(We,"parseAndValidateExternalUrl");function Ge(t){return String(t.headers.get("sec-fetch-site")||"").trim().toLowerCase()==="cross-site"}r(Ge,"shouldRejectCrossSiteFetch");var Yr={"content-type":"application/json; charset=utf-8","cache-control":"public, max-age=600"};function ie(t,e={}){return new Response(JSON.stringify(t),{...e,headers:{...Yr,...e.headers||{}}})}r(ie,"json");function qe(...t){for(let e of t){if(!e)continue;let n=String(e).trim();if(n)return n}return null}r(qe,"pickFirst");function Jr(t){let e=t.slice(0,8e4),n=e.match(/<title[^>]*>([^<]*)<\/title>/i),o=e.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i),a=e.match(/<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i),s=e.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i),i=e.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i),c=e.match(/<meta[^>]+property=["']og:site_name["'][^>]*content=["']([^"']+)["'][^>]*>/i);return{title:qe(o?.[1],n?.[1]),description:qe(a?.[1],s?.[1]),image:qe(i?.[1]),siteName:qe(c?.[1])}}r(Jr,"extractMeta");async function Jn(t){let e=t.request.url,n=new URL(e);if(n.searchParams.get("ping")==="1")return ie({ok:!0,ping:!0});let o=n.searchParams.get("url")||"";if(Ge(t.request))return ie({ok:!1,error:"forbidden"},{status:403,headers:{"cache-control":"no-store"}});let a;try{a=We(o)}catch{return ie({ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}try{let s=await fetch(a.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkPreview/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),i=s.headers.get("content-type")||"";if(!s.ok)return ie({ok:!1,error:"fetch_failed",status:s.status,url:a.toString()},{status:200,headers:{"cache-control":"no-store"}});if(!i.includes("text/html"))return ie({ok:!0,url:a.toString(),domain:a.host,contentType:i,title:null,description:null,image:null,siteName:null});let c=await s.text(),l=Jr(c);return ie({ok:!0,url:a.toString(),domain:a.host,contentType:i,...l})}catch(s){return ie({ok:!1,error:"exception",message:s?.message||String(s),url:a.toString()},{status:200,headers:{"cache-control":"no-store"}})}}r(Jn,"onRequestGet");var Vn=35e4;function Vr(t){let e=t;return e=e.replace(/<script\b[\s\S]*?<\/script>/gi,""),e=e.replace(/<iframe\b[\s\S]*?<\/iframe>/gi,""),e=e.replace(/<object\b[\s\S]*?<\/object>/gi,""),e=e.replace(/<embed\b[\s\S]*?>/gi,""),e=e.replace(/<noscript\b[\s\S]*?<\/noscript>/gi,""),e=e.replace(/\son[a-z]+\s*=\s*"[^"]*"/gi,""),e=e.replace(/\son[a-z]+\s*=\s*'[^']*'/gi,""),e}r(Vr,"stripActiveContent");function Xr({url:t,title:e,innerHtml:n}){let o=e?String(e).slice(0,140):"Preview",a=String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");return`<!doctype html>
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
</html>`}r(Xr,"buildWrapper");async function Xn(t){let n=new URL(t.request.url).searchParams.get("url")||"";if(Ge(t.request))return new Response("Forbidden",{status:403,headers:{"cache-control":"no-store"}});let o;try{o=We(n)}catch(a){let s=a instanceof Error?a.message:"invalid_url";return new Response(s,{status:400,headers:{"cache-control":"no-store"}})}try{let a=await fetch(o.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkProxy/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),s=a.headers.get("content-type")||"";if(!a.ok)return new Response(`Fetch failed (${a.status})`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});if(!s.includes("text/html"))return new Response(`Unsupported content-type: ${s}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public, max-age=600"}});let i=await a.text();i.length>Vn&&(i=i.slice(0,Vn));let l=i.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()||o.host;i=Vr(i),/<base\s/i.test(i)||(i=i.replace(/<head([^>]*)>/i,`<head$1><base href="${o.origin}/">`));let f=Xr({url:o.toString(),title:l,innerHtml:i});return new Response(f,{status:200,headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600","content-security-policy":"default-src 'none'; img-src https: data:; style-src 'unsafe-inline' https:; font-src https: data:; frame-ancestors 'self';"}})}catch(a){return new Response(`Exception: ${a?.message||String(a)}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}})}}r(Xn,"onRequestGet");var xt="api.openai.com",ze="api.miromind.ai",Ye="apihub.agnes-ai.com",Je="ark.ap-southeast.bytepluses.com",Rt="ark.eu-west.bytepluses.com",Qn=new Set(["localhost","127.0.0.1","0.0.0.0"]),Y=r(t=>String(t||"").trim().toLowerCase(),"normalizeHost"),z=r((t,e)=>String(t.get(e)||"").trim(),"readHeader"),eo=r(t=>Qn.has(Y(t)),"isLocalHost"),Zn=r(t=>{let e=String(t||"").trim();if(!e)return new Set;let n=new Set;return e.split(",").map(o=>Y(o)).filter(Boolean).forEach(o=>n.add(o)),n},"parseCsvSet"),to=r((t,{includeOpenAi:e=!1,includeMiroMind:n=!1,includeAgnes:o=!1,includeBytePlus:a=!1}={})=>{let s=Zn(t.KNOWGRPH_INTEGRATION_ALLOWED_HOSTS),i=Zn(t.KNOWGRPH_CHAT_PROXY_ALLOWED_HOSTS),c=s.size?s:i,l=c.size?c:new Set([...Qn]);return e&&l.add(xt),n&&l.add(ze),o&&l.add(Ye),a&&(l.add(Je),l.add(Rt)),l},"parseAllowedHosts"),L=r(t=>{let e=z(t.headers,"origin");if(!e)return{};let n="";try{n=Y(new URL(e).host)}catch{return{}}let o=Y(new URL(t.url).host);return n===o||n.startsWith("localhost:")||n.startsWith("127.0.0.1:")?{"access-control-allow-origin":e,vary:"Origin"}:{}},"corsHeaders"),W=r((t,e,n)=>new Response(JSON.stringify(e),{status:n,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...L(t)}}),"jsonResponse");var Ve={"content-type":"application/json; charset=utf-8","cache-control":"no-store"};function Oe(t,e,n=200){return new Response(JSON.stringify(e),{status:n,headers:{...Ve,...L(t)}})}r(Oe,"jsonResponse");async function Zr(t){let e=new URL("/knowgrph/imports/hackamap/hackamap-graph.json",t.url),n=await fetch(e.toString(),{redirect:"follow"});return n.ok?await n.json():null}r(Zr,"fetchHackamapGraphJson");async function ce(t,e){let n=new URL(e,t.url),o=await fetch(n.toString(),{redirect:"follow"});return o.ok?await o.json():null}r(ce,"fetchHackamapJson");async function Qr(t){let e=await ce(t,"/knowgrph/imports/hackamap/hackamap_api_graph.json");return ao(e)?e:null}r(Qr,"fetchHackamapApiGraphJson");async function ea(t){let e=await ce(t,"/knowgrph/imports/hackamap/hackamap_pipeline.json");return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}r(ea,"fetchHackamapPipelineJson");async function oo(t){let e=await ce(t,"/knowgrph/imports/hackamap/hackamap_query_presets.json");return Array.isArray(e)?e.filter(Boolean):[]}r(oo,"fetchHackamapQueryPresetsJson");async function ro(t){let e=await ce(t,"/knowgrph/imports/hackamap/query-outputs/query-runs.manifest.json");return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}r(ro,"fetchHackamapQueryRunsManifestJson");function ao(t){return!t||typeof t!="object"||Array.isArray(t)?!1:Array.isArray(t.nodes)&&Array.isArray(t.edges)}r(ao,"isApiGraphPayload");function so(t,e){let n=String(t&&t.output&&t.output.per_table_prefix||t?.id||e?.preset||"").trim(),o=String(e?.output_suffix||"").trim();return o?`${n}-${o}`:n}r(so,"buildHackamapTablePrefix");function kt(t,e){if(!Array.isArray(t))return[];let n=[];for(let o of t){if(!o||typeof o!="object"||Array.isArray(o))continue;let a=String(o[e]||"").trim();a&&n.push(a)}return n}r(kt,"collectRowIds");async function ta(t,e){let n=await ce(t,e);return Array.isArray(n)?n.length:0}r(ta,"countHackamapQueryRows");async function na(t,e,n){let o=so(e,n);if(!o)return{};let a=["events","demos","sources","organizer","team","techstack"],s=await Promise.all(a.map(async i=>[i,await ta(t,`/knowgrph/imports/hackamap/query-outputs/${i}.${o}.query.json`)]));return Object.fromEntries(s.filter(([,i])=>i>0))}r(na,"readHackamapRunTableCounts");function Pt(t){return Array.isArray(t)?t.map(Pt):!t||typeof t!="object"?t:Object.fromEntries(Object.entries(t).sort(([e],[n])=>String(e).localeCompare(String(n))).map(([e,n])=>[e,Pt(n)]))}r(Pt,"sortObjectKeys");function oa(t){try{return JSON.stringify(Pt(t))}catch{return""}}r(oa,"stableParamSignature");function ra(t){return typeof t=="string"?{value:t,label:t}:{value:t,label:JSON.stringify(t)}}r(ra,"toBuilderOption");function aa(t,e){return t.map(n=>{let o=String(n?.id||"").trim();if(!o)return null;let a=n?.params&&typeof n.params=="object"&&!Array.isArray(n.params)?n.params:{},s=e.filter(l=>String(l?.preset||"").trim()===o),i=Array.from(new Set([...Object.keys(a),...s.flatMap(l=>l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?Object.keys(l.params):[])])).sort((l,p)=>String(l).localeCompare(String(p))),c=Object.fromEntries(i.map(l=>{let p=new Set,f=[],u=[a[l],...s.map(b=>b?.params&&typeof b.params=="object"&&!Array.isArray(b.params)?b.params[l]:void 0)];for(let b of u){if(typeof b>"u")continue;let g=oa(b);!g||p.has(g)||(p.add(g),f.push(ra(b)))}return[l,f]}));return{id:o,title:String(n?.title||o).trim(),params:a,param_keys:i,published_param_options:c}}).filter(Boolean)}r(aa,"buildHackamapPresetRuntimeEntries");async function sa(t){let[e,n,o]=await Promise.all([ea(t),oo(t),ro(t)]),a=e&&typeof e=="object"?e.runtime||{}:{},s=String(a?.query_selection?.default_run_id||"").trim()||"enhanced",i=Array.isArray(o?.runs)?o.runs:[],c=(await Promise.all(i.map(async l=>{let p=String(l?.id||"").trim(),f=String(l?.preset||"").trim();if(!p)return null;let u=n.find(g=>String(g?.id||"").trim()===f),b=await na(t,u,l);return{id:p,preset:f,title:String(l?.title||l?.id||"").trim(),params:l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?l.params:{},output_suffix:String(l?.output_suffix||"").trim(),is_default:p===s,table_counts:b}}))).filter(l=>l?.id);return{ok:!0,runtime:{...a&&typeof a=="object"?a:{},presets:aa(n,c),runs:c}}}r(sa,"buildHackamapRuntimeMeta");async function ia(t,e){let n=String(e||"").trim();if(!n)return null;let[o,a]=await Promise.all([oo(t),ro(t)]),i=(Array.isArray(a?.runs)?a.runs:[]).find(_=>String(_?.id||"").trim()===n);if(!i)return null;let c=o.find(_=>String(_?.id||"").trim()===String(i?.preset||"").trim()),l=so(c,i);if(!l)return null;let[p,f]=await Promise.all([ce(t,`/knowgrph/imports/hackamap/query-outputs/events.${l}.query.json`),ce(t,`/knowgrph/imports/hackamap/query-outputs/demos.${l}.query.json`)]),u=new Set(kt(p,"id")),b=new Set(kt(f,"id")),g=kt(f,"event_id");for(let _ of g)u.add(_);return{eventIds:u,demoIds:b}}r(ia,"readHackamapQueryRunSelection");function no(t,e,n){if(!n||!ao(t))return t;if(n.eventIds.size===0&&n.demoIds.size===0)return{...t,meta:{...t?.meta&&typeof t.meta=="object"?t.meta:{},selected_run_id:e,selected_run_filter_skipped:"no-event-demo-rows"}};let o=new Set;n.eventIds.forEach(c=>o.add(`Event:${c}`)),n.demoIds.forEach(c=>o.add(`Demo:${c}`));let a=Array.isArray(t.nodes)?t.nodes.filter(c=>o.has(String(c?.id||"").trim())):[],s=new Set(a.map(c=>String(c?.id||"").trim()).filter(Boolean)),i=Array.isArray(t.edges)?t.edges.filter(c=>s.has(String(c?.source||"").trim())&&s.has(String(c?.target||"").trim())):[];return{...t,nodes:a,edges:i,meta:{...t?.meta&&typeof t.meta=="object"?t.meta:{},selected_run_id:e,selected_event_count:n.eventIds.size,selected_demo_count:n.demoIds.size,total_problems:a.filter(c=>String(c?.type||"").trim()==="problem").length,total_solutions:a.filter(c=>String(c?.type||"").trim()==="solution").length}}}r(no,"filterHackamapApiGraphPayloadByRun");function ca(t){let e=Array.isArray(t?.nodes)?t.nodes:[],n=Array.isArray(t?.links)?t.links:[],o=[],a=new Set;for(let i of e){let c=String(i?.id||"").trim(),l=String(i?.type||"").trim(),p=String(i?.label||"").trim();if(!(!c||!l||!p)){if(l==="Event"){o.push({id:c,type:"problem",label:p,cluster:"Event"}),a.add(c);continue}l==="Demo"&&(o.push({id:c,type:"solution",label:p,cluster:"Demo"}),a.add(c))}}let s=[];for(let i of n){let c=String(i?.source||"").trim(),l=String(i?.target||"").trim(),p=String(i?.type||"").trim();!c||!l||p==="has_demo"&&(!a.has(c)||!a.has(l)||s.push({source:c,target:l,type:"has_demo",strength:.35}))}return{nodes:o,edges:s,meta:{source:"hackamap-graph.json:fallback",total_problems:o.filter(i=>i.type==="problem").length,total_solutions:o.filter(i=>i.type==="solution").length,...t?.content_signature?{content_signature:String(t.content_signature)}:{}}}}r(ca,"toBipartiteApiPayload");async function io(t){let{request:e}=t,n=String(e.method||"GET").toUpperCase(),o=new URL(e.url);if(n==="OPTIONS")return new Response(null,{status:204,headers:{...L(e),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(n!=="GET"&&n!=="HEAD")return Oe(e,{ok:!1,error:"unsupported_method"},405);if(String(o.searchParams.get("view")||"").trim().toLowerCase()==="meta"){let f=await sa(e);return n==="HEAD"?new Response(null,{status:200,headers:{...Ve,...L(e)}}):Oe(e,f,200)}let a=String(o.searchParams.get("run")||"").trim(),s=await ia(e,a),i=await Qr(e);if(i){let f=no(i,a,s);return n==="HEAD"?new Response(null,{status:200,headers:{...Ve,...L(e)}}):Oe(e,f,200)}let c=await Zr(e);if(!c)return Oe(e,{ok:!1,error:"missing_hackamap_graph",hint:"/knowgrph/imports/hackamap/{hackamap_api_graph.json,hackamap-graph.json} not found"},404);let l=ca(c),p=no(l,a,s);return n==="HEAD"?new Response(null,{status:200,headers:{...Ve,...L(e)}}):Oe(e,p,200)}r(io,"onRequest");var la=!0,co=600,lo={"content-type":"application/json; charset=utf-8","cache-control":`public, max-age=${co}`};function le(t,e,n={}){return new Response(JSON.stringify(e),{...n,headers:{...lo,...n.headers||{},...L(t)}})}r(le,"jsonResponse");function pa(t){try{let e=new URL(String(t));return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}r(pa,"isHttpUrl");function Ue(t){return String(t||"").trim().toLowerCase()}r(Ue,"normalizeHost");function At(t,{exact:e,suffixes:n}){let o=Ue(t);return o?!!(Array.isArray(e)&&e.some(a=>o===Ue(a))||Array.isArray(n)&&n.some(a=>o===Ue(a)||o.endsWith(`.${Ue(a)}`))):!1}r(At,"isHostMatch");function ua(t){let e=Ue(t.hostname),n=t.toString();return At(e,{suffixes:["linkedin.com"]})?new URL(`https://www.linkedin.com/embeds/oembed.json?url=${encodeURIComponent(n)}`):At(e,{exact:["twitter.com","x.com"],suffixes:["twitter.com","x.com"]})?new URL(`https://publish.twitter.com/oembed?omit_script=1&url=${encodeURIComponent(n)}`):At(e,{exact:["reddit.com"],suffixes:["reddit.com"]})?new URL(`https://www.reddit.com/oembed?url=${encodeURIComponent(n)}`):null}r(ua,"buildOembedUpstreamUrl");async function da({upstreamUrl:t}){return await fetch(t.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; OEmbedProxy/1.0)",accept:"application/json,text/json;q=0.9,*/*;q=0.1"},redirect:"follow",cf:{cacheTtl:co,cacheEverything:!0}})}r(da,"fetchJsonUpstream");async function po(t){let{request:e}=t,n=String(e.method||"GET").toUpperCase(),o=new URL(e.url);if(n==="OPTIONS")return new Response(null,{status:204,headers:{...L(e),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD"].includes(n))return le(e,{ok:!1,error:"unsupported_method"},{status:405});if(o.searchParams.get("ping")==="1")return le(e,{ok:!0,ping:!0});if(la)return le(e,{ok:!1,error:"disabled_by_policy"},{status:200,headers:{"cache-control":"no-store"}});let a=o.searchParams.get("url")||"";if(!pa(a))return le(e,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}});let s;try{s=new URL(a)}catch{return le(e,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}let i=ua(s);if(!i)return le(e,{ok:!1,error:"unsupported_provider"},{status:400,headers:{"cache-control":"no-store"}});let c=await da({upstreamUrl:i}),l=new Headers(c.headers);l.delete("content-length"),l.set("cache-control",c.ok?lo["cache-control"]:"no-store");for(let[f,u]of Object.entries(L(e)))l.set(f,u);if(n==="HEAD")return new Response(null,{status:c.status,headers:l});let p=await c.text();try{JSON.parse(p)}catch{return le(e,{ok:!1,error:"invalid_upstream_json",status:c.status},{status:502,headers:{"cache-control":"no-store"}})}return l.set("content-type","application/json; charset=utf-8"),new Response(p,{status:c.status,headers:l})}r(po,"onRequest");var uo="/__chat_proxy",Xe="agnes-ai",Ze="byteplus-modelark",Qe="miromind",ma=r(t=>{let e=Y(t);return e==="openai"?"openai":e===Ze||e==="byteplus"?Ze:e===Qe||e==="miromind-api"?Qe:e===Xe||e==="agnes"||e==="agnes-ai-api"?Xe:e},"normalizeProviderId"),ha=r(t=>Y(t)===Ye,"isAgnesHost"),fa=r(t=>{let e=Y(t);return e===Je||e===Rt},"isBytePlusHost"),ga=r(t=>Y(t)===ze,"isMiroMindHost"),wa=r(({provider:t,requestedUpstream:e,env:n})=>t==="openai"?"https://api.openai.com":t===Qe?e||`https://${ze}`:t===Xe?e||`https://${Ye}`:t===Ze?e||String(n.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim()||`https://${Je}`:e||String(n.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim(),"pickUpstreamBase");async function mo(t){let{request:e,env:n}=t,o=String(e.method||"GET").toUpperCase(),a=new URL(e.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":z(e.headers,"origin")||"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD","POST"].includes(o))return W(e,{ok:!1,error:"Unsupported method"},405);let s=ma(z(e.headers,"x-kg-chat-provider")),i=wa({provider:s,requestedUpstream:z(e.headers,"x-kg-chat-upstream"),env:n});if(!i)return W(e,{ok:!1,error:"Missing chat proxy upstream configuration"},500);let c;try{c=new URL(i)}catch{return W(e,{ok:!1,error:"Invalid chat proxy upstream configuration"},500)}let l=to(n,{includeOpenAi:!0,includeMiroMind:!0,includeAgnes:!0,includeBytePlus:!0}),p=Y(c.hostname);if(!l.has(p))return W(e,{ok:!1,error:"Chat proxy upstream host is not allowed"},403);if(!eo(p)&&c.protocol!=="https:")return W(e,{ok:!1,error:"Chat proxy requires HTTPS for non-local upstream hosts"},403);let f=s==="openai"||p===xt,u=s===Qe||ga(p),b=s===Xe||ha(p),g=s===Ze||fa(p),_=z(e.headers,"x-kg-chat-api-key"),E=String(n.KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY||n.OPENAI_API_KEY||"").trim(),k=String(n.KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY||n.MIROMIND_API_KEY||"").trim(),I=String(n.KNOWGRPH_CHAT_PROXY_AGNES_API_KEY||n.AGNES_API_KEY||"").trim(),v=String(n.KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY||n.BYTEPLUS_API_KEY||"").trim(),U=(_||E).slice(0,512),T=(_||k).slice(0,512),G=(_||I).slice(0,512),j=(_||v).slice(0,512),w=g?j:b?G:u?T:U;if(f&&!U)return W(e,{ok:!1,error:"Missing OpenAI API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY or OPENAI_API_KEY)"},401);if(u&&!w)return W(e,{ok:!1,error:"Missing MiroMind API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY or MIROMIND_API_KEY)"},401);if(b&&!w)return W(e,{ok:!1,error:"Missing Agnes API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_AGNES_API_KEY or AGNES_API_KEY)"},401);if(g&&!w)return W(e,{ok:!1,error:"Missing BytePlus API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY or BYTEPLUS_API_KEY)"},401);if(o==="POST"&&!z(e.headers,"content-type").toLowerCase().includes("application/json"))return W(e,{ok:!1,error:"Chat proxy expects application/json payloads"},415);let y=a.pathname.startsWith(uo)&&a.pathname.slice(uo.length)||"/v1/chat/completions",m=y.startsWith("/")?y:`/${y}`,h=new URL(`${m}${a.search||""}`,c),A=new Headers,J=z(e.headers,"content-type"),re=z(e.headers,"accept");J&&A.set("content-type",J),re&&A.set("accept",re),(f||u||b||g)&&A.set("authorization",`Bearer ${w}`);let pe=z(e.headers,"x-client-request-id").slice(0,512);pe&&A.set("x-client-request-id",pe);let ue=new AbortController,de=Number(n.KNOWGRPH_CHAT_PROXY_TIMEOUT_MS),xe=Number.isFinite(de)?Math.max(5e3,Math.min(18e4,Math.floor(de))):9e4,me=setTimeout(()=>ue.abort(),xe);try{let $=await fetch(h.toString(),{method:o,headers:A,body:o==="GET"||o==="HEAD"?void 0:e.body,signal:ue.signal,redirect:"follow"}),B=new Headers($.headers);B.delete("content-length"),B.delete("www-authenticate"),B.set("cache-control","no-store");let De=z(e.headers,"origin");return De&&(B.set("access-control-allow-origin",De),B.set("vary","Origin")),o==="HEAD"?new Response(null,{status:$.status,statusText:$.statusText,headers:B}):new Response($.body,{status:$.status,statusText:$.statusText,headers:B})}catch($){let B=$&&typeof $=="object"&&"message"in $?String($.message||""):"",De=ue.signal.aborted||/aborted|timeout/i.test(B);return W(e,{ok:!1,error:B||"Failed to reach chat upstream"},De?504:502)}finally{clearTimeout(me)}}r(mo,"onRequest");function ya(t){let e=t.map(n=>n==null?"":typeof n=="boolean"?n?"1":"0":typeof n=="number"?Number.isFinite(n)?String(n):"":String(n)).join("|");return`rich-media-preview:${Re(e)}`}r(ya,"buildRichMediaPreviewSemanticKey");var fo="png";function tt(t){let e=typeof t=="number"?t:Number(String(t??"").trim());if(!Number.isFinite(e))return null;let n=Math.max(0,Math.floor(e));return Number.isFinite(n)?n:null}r(tt,"normalizeRemoteVideoFrameSeconds");function nt(t){let e=String(t||"").trim().toLowerCase();return e==="jpg"||e==="jpeg"?"jpg":"png"}r(nt,"normalizeRemoteVideoFrameFormat");function Et(t){let e=String(t.sourceUrl||"").trim(),n=tt(t.timeSeconds)??0,o=nt(t.format||fo);return ya(["remote-video-frame",e,n,o])}r(Et,"buildRemoteVideoFrameSemanticKey");function go(t){let e=tt(t.timeSeconds)??0,n=nt(t.format||fo),o=Et({...t,timeSeconds:e,format:n});return`frame-${o.split(":").pop()||Re(o)}-t${e}.${n}`}r(go,"buildRemoteVideoFrameFileName");var et=r(t=>{let e=String(t||"").trim();return e&&/^[A-Za-z0-9_-]{6,128}$/.test(e)?e:null},"normalizeYouTubeIdLikeValue"),ho=r(t=>{try{let e=new URL(String(t||"").trim()),n=String(e.hostname||"").toLowerCase();if(n==="youtu.be"||n.endsWith(".youtu.be")){let o=e.pathname.replace(/^\/+/,"").split("/")[0]?.trim()||"";return et(o)}if(n==="youtube.com"||n.endsWith(".youtube.com")||n==="youtube-nocookie.com"||n.endsWith(".youtube-nocookie.com")){let o=String(e.searchParams.get("v")||"").trim();if(o)return et(o);let a=e.pathname.split("/").filter(Boolean),s=a[0]||"",i=a[1]||"";if((s==="embed"||s==="shorts"||s==="live")&&i)return et(i);if(s==="watch"){let c=String(e.searchParams.get("v")||"").trim();return et(c)}}}catch{return null}return null},"readYouTubeIdFromUrl");function Sa(t){let e=String(t||"").trim().replace(/^<|>$/g,"").trim();for(;/[),.;:!?]$/.test(e);){let n=e.slice(0,-1).trim();if(!n)break;let o=ho(e),a=ho(n);if(!a||o&&o!==a)break;e=n}return e}r(Sa,"stripYouTubeUrlTrailingPunctuation");function wo(t){let e=r(n=>{let o=String(n||"").trim();if(!o)return null;if(/^\d+$/.test(o))return Number(o);let a=o.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i);if(!a)return null;let s=a[1]?Number(a[1]):0,i=a[2]?Number(a[2]):0,c=a[3]?Number(a[3]):0,l=s*3600+i*60+c;return l>0&&Number.isFinite(l)?l:null},"parseChunk");try{let n=new URL(Sa(t)),o=n.searchParams.get("t")||n.searchParams.get("start")||"",a=n.hash&&new URLSearchParams(n.hash.replace(/^#/,"")).get("t")||"";return e(o)??e(a)}catch{return null}}r(wo,"parseYouTubeStartSeconds");var _a="/image/knowgrph/video-frame",ba=4096,xa=720*60,Ra=/^frame-[a-f0-9]+-t\d+\.(?:png|jpg)$/i,vt={"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"accept, content-type"},It=r(t=>String(t||"").replace(/\s+/g," ").trim(),"cleanText"),Tt=r((t,e=200,n="GET")=>new Response(n==="HEAD"?null:JSON.stringify(t),{status:e,headers:{...vt,"content-type":"application/json; charset=utf-8","cache-control":"no-store"}}),"jsonResponse"),Ct=r((t,e=200,n="GET")=>new Response(n==="HEAD"?null:t,{status:e,headers:{...vt,"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}}),"textResponse"),ka=r((t,e)=>t===e||t.endsWith(`.${e}`),"hostMatches"),Pa=r(t=>{let e=It(t?.KG_VIDEO_FRAME_ALLOWED_HOSTS);return e?e.split(",").map(n=>It(n).toLowerCase()).filter(Boolean):["youtube.com","youtu.be","youtube-nocookie.com","bilibili.com","b23.tv"]},"readAllowedHosts"),Aa=r(t=>It(t).replace(/^<|>$/g,"").trim(),"unwrapUrlInput"),Ea=r((t,e)=>{try{let n=new URL(t);if(n.protocol!=="https:"&&n.protocol!=="http:")return!1;let o=n.hostname.toLowerCase();return Pa(e).some(a=>ka(o,a))}catch{return!1}},"isAllowedSourceUrl"),Ta=r((t,e)=>{let n=new URL(t.url),o=Aa(n.searchParams.get("url")||"");if(!o)return{error:"Missing url parameter"};if(o.length>ba)return{error:"Video URL is too long"};if(!Ea(o,e))return{error:"Video frame extraction is limited to supported remote video hosts"};let a=tt(n.searchParams.get("time"))??wo(o);if(a==null)return{error:"Missing time parameter"};let s=Math.min(xa,Math.max(0,a)),i=nt(n.searchParams.get("format")||"png"),c=go({sourceUrl:o,timeSeconds:s,format:i});if(!Ra.test(c))return{error:"Invalid frame cache key"};let l=`${_a}/${c}`;return{sourceUrl:o,timeSeconds:s,format:i,fileName:c,publicUrl:l,semanticKey:Et({sourceUrl:o,timeSeconds:s,format:i})}},"readFrameRequest"),Ca=r(async(t,e,n)=>{let o=new URL(e,t.request.url),a=new Request(o.toString(),{method:n});return typeof t.env?.ASSETS?.fetch=="function"?await t.env.ASSETS.fetch(a):await fetch(a)},"fetchStaticAsset"),Ia=r(t=>`Frame has not been generated yet. Run the local video-frame extractor and publish ${t.publicUrl}.`,"missingFrameMessage"),va=r((t,e)=>{let n=new Headers;n.set("content-type",e.format==="jpg"?"image/jpeg":"image/png"),n.set("cache-control","public, max-age=31536000, immutable"),n.set("access-control-allow-origin","*");let o=t.headers.get("content-length");o&&n.set("content-length",o);let a=t.headers.get("etag");return a&&n.set("etag",a),n},"imageResponseHeaders");async function yo(t){let e=t.request;if(e.method==="OPTIONS")return new Response(null,{status:204,headers:vt});if(e.method!=="GET"&&e.method!=="HEAD")return Ct("Method not allowed",405,e.method);let n=new URL(e.url).searchParams.get("emit")==="json",o=Ta(e,t.env||{});if("error"in o)return n?Tt({ok:!1,error:o.error},400,e.method):Ct(o.error,400,e.method);let a=n&&e.method!=="HEAD"?"GET":n||e.method==="HEAD"?"HEAD":"GET",s=await Ca(t,o.publicUrl,a);if(!s.ok){let i=Ia(o);return n?Tt({ok:!1,error:i,publicUrl:o.publicUrl,semanticKey:o.semanticKey},404,e.method):Ct(i,404,e.method)}if(n){let i=Number(s.headers.get("content-length")||0);return(!Number.isFinite(i)||i<=0)&&e.method!=="HEAD"&&(i=(await s.arrayBuffer()).byteLength),Tt({ok:!0,imageUrl:o.publicUrl,publicUrl:o.publicUrl,semanticKey:o.semanticKey,cached:!0,bytes:Number.isFinite(i)?Math.max(0,Math.floor(i)):0,timeSeconds:o.timeSeconds,format:o.format},200,e.method)}return new Response(e.method==="HEAD"?null:s.body,{status:200,headers:va(s,o)})}r(yo,"onRequest");var So={"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"content-type"},ot=r((t,e=200,n="GET")=>new Response(n==="HEAD"?null:JSON.stringify(t),{status:e,headers:So}),"jsonResponse"),O=r(t=>String(t||"").replace(/\s+/g," ").trim(),"cleanText"),Oa=r(t=>{try{let e=new URL(String(t||"").trim());if(/youtu\.be$/i.test(e.hostname))return O(e.pathname.split("/").filter(Boolean)[0]);if(/youtube\.com$/i.test(e.hostname)||/youtube-nocookie\.com$/i.test(e.hostname)){let n=O(e.searchParams.get("v"));if(n)return n;let o=e.pathname.split("/").filter(Boolean),a=o.findIndex(s=>["embed","shorts","live"].includes(s));if(a>=0)return O(o[a+1])}}catch{}return""},"readVideoId"),Ua=r((t,e)=>{let n=t.indexOf(e);if(n<0)return null;let o=t.indexOf("{",n);if(o<0)return null;let a=0,s=!1,i=!1;for(let c=o;c<t.length;c+=1){let l=t[c];if(s){i?i=!1:l==="\\"?i=!0:l==='"'&&(s=!1);continue}if(l==='"')s=!0;else if(l==="{")a+=1;else if(l==="}"&&(a-=1,a===0))return t.slice(o,c+1)}return null},"extractJsonAfter"),Na=r(t=>{for(let e of["ytInitialPlayerResponse =","ytInitialPlayerResponse="]){let n=Ua(t,e);if(n)try{return JSON.parse(n)}catch{}}return null},"parsePlayerResponse"),Da=r((t,e)=>{let n=O(e||"en").toLowerCase();return t.find(o=>O(o.languageCode).toLowerCase()===n)||t.find(o=>O(o.languageCode).toLowerCase().startsWith(n.split("-")[0]))||t.find(o=>O(o.kind)!=="asr")||t[0]||null},"pickCaptionTrack"),Ma=r(t=>{let e=new URL(t);return e.searchParams.set("fmt","json3"),e.toString()},"withJsonCaptionFormat"),La=r(t=>(Array.isArray(t?.events)?t.events:[]).map(n=>{let o=Array.isArray(n.segs)?O(n.segs.map(i=>i?.utf8||"").join("")):"",a=Number(n.tStartMs)/1e3,s=Number(n.dDurationMs||0)/1e3;return o&&Number.isFinite(a)?{text:o,start:a,duration:Number.isFinite(s)?s:0}:null}).filter(Boolean),"parseCaptionJson3"),$a=r(t=>String(t||"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'"),"decodeXmlText"),ja=r(t=>{let e=[],n=/<text\b([^>]*)>([\s\S]*?)<\/text>/gi,o=null;for(;o=n.exec(String(t||""));){let a=o[1]||"",s=Number(a.match(/\bstart="([^"]+)"/i)?.[1]),i=Number(a.match(/\bdur="([^"]+)"/i)?.[1]||0),c=O($a(o[2]||""));c&&Number.isFinite(s)&&e.push({text:c,start:s,duration:Number.isFinite(i)?i:0})}return e},"parseCaptionXml"),Ha=r((t,e)=>{let n=String(t||"").trim();if(!n)return[];if(String(e||"").toLowerCase().includes("json")||n.startsWith("{")||n.startsWith("["))try{return La(JSON.parse(n))}catch{return[]}return ja(n)},"parseCaptionResponseText"),Ka=r(t=>{let e=Math.max(0,Math.floor(Number(t)||0)),n=Math.floor(e/60),o=String(e%60).padStart(2,"0");return`${n}:${o}`},"formatTimestamp"),Ba=r((t,e)=>{let n=new URL(t);return n.searchParams.set("t",`${Math.max(0,Math.floor(Number(e)||0))}s`),n.toString()},"timestampUrl"),Fa=r(({title:t,sourceUrl:e,videoId:n,authorName:o,thumbnailUrl:a,segments:s})=>[`# ${t||`YouTube ${n}`}`,"",`Video ID: ${n}`,o?`Author: ${o}`:"",`Source: [${e}](${e})`,a?`[![${t||n}](${a})](${e})`:"","",s.length>0?"## Transcript":"## Video Source","",...s.length>0?s.map(i=>`[${Ka(i.start)}](${Ba(e,i.start)}) ${i.text}`):["Captions were not available from the source at import time.","The source URL, title, author, and thumbnail remain available for downstream storyboard reconstruction."],""].filter(i=>i!=="").join(`
`),"buildMarkdown"),Ot=r(({videoId:t,sourceUrl:e,title:n,authorName:o,thumbnailUrl:a,lang:s,languageCode:i,segments:c,captionStatus:l})=>{let p={type:"rag:YouTubeTranscript",video_id:t,source_url:e,title:n,author_name:o,thumbnail_url:a,language_code:O(i)||s,caption_status:l,segment_count:c.length,duration:c.reduce((f,u)=>Math.max(f,u.start+u.duration),0),segments:c};return{ok:!0,name:`youtube-${t.toLowerCase()}.md`,markdown:Fa({title:n,sourceUrl:e,videoId:t,authorName:o,thumbnailUrl:a,segments:c}),transcript:p}},"buildPayload");async function Wa({sourceUrl:t,lang:e="en",fetchImpl:n=fetch}){let o=Oa(t);if(!o)return{ok:!1,error:"unsupported_youtube_url"};let a=`https://www.youtube.com/watch?v=${encodeURIComponent(o)}`,[s,i]=await Promise.all([n(`https://www.youtube.com/oembed?url=${encodeURIComponent(a)}&format=json`,{headers:{accept:"application/json"}}).catch(()=>null),n(a,{headers:{accept:"text/html,application/xhtml+xml","accept-language":"en-US,en;q=0.9","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}})]),c=s?.ok?await s.json().catch(()=>({})):{},l=i.ok?Na(await i.text()):null,p=O(c.title)||O(l?.videoDetails?.title)||`YouTube ${o}`,f=O(c.author_name)||O(l?.videoDetails?.author),u=O(c.thumbnail_url)||`https://i.ytimg.com/vi/${o}/hqdefault.jpg`;if(!i.ok)return Ot({videoId:o,sourceUrl:a,title:p,authorName:f,thumbnailUrl:u,lang:e,languageCode:e,segments:[],captionStatus:`watch-fetch-${i.status}`});let b=l?.captions?.playerCaptionsTracklistRenderer?.captionTracks||[],g=Da(Array.isArray(b)?b:[],e);if(!g?.baseUrl)return Ot({videoId:o,sourceUrl:a,title:p,authorName:f,thumbnailUrl:u,lang:e,languageCode:e,segments:[],captionStatus:"captions-unavailable"});let _=await n(Ma(g.baseUrl),{headers:{accept:"application/json,text/xml,text/plain,*/*","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}}).catch(()=>null),E=_?await _.text().catch(()=>""):"",k=_?.ok?Ha(E,_.headers.get("content-type")):[],I=k.length>0?"available":_?.ok?"captions-empty":`captions-fetch-${_?.status||"failed"}`;return Ot({videoId:o,sourceUrl:a,title:p,authorName:f,thumbnailUrl:u,lang:e,languageCode:g.languageCode,segments:k,captionStatus:I})}r(Wa,"buildYouTubeTranscriptPayload");async function _o(t){let e=t.request,n=String(e.method||"GET").toUpperCase();if(n==="OPTIONS")return new Response(null,{status:204,headers:So});if(n!=="GET"&&n!=="HEAD"&&n!=="POST")return ot({ok:!1,error:"unsupported_method"},405,n);let o=new URL(e.url),a=O(o.searchParams.get("url")),s=O(o.searchParams.get("lang"))||"en";if(!a)return ot({ok:!1,error:"missing_url"},400,n);try{let i=await Wa({sourceUrl:a,lang:s});return ot(i,i.ok?200:502,n)}catch(i){let c=i&&typeof i=="object"&&"message"in i?O(i.message):"";return ot({ok:!1,error:c||"youtube_conversion_failed"},502,n)}}r(_o,"onRequest");async function bo(t){let{request:e}=t,n=String(e.method||"GET").toUpperCase();if(n==="OPTIONS")return new Response(null,{status:204,headers:{...L(e),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(n!=="GET"&&n!=="HEAD")return new Response(JSON.stringify({ok:!1,error:"unsupported_method"}),{status:405,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...L(e)}});let o={ok:!0,service:"singabldr-pages",ts:new Date().toISOString()},a={"content-type":"application/json; charset=utf-8","cache-control":"no-store",...L(e)};return n==="HEAD"?new Response(null,{status:200,headers:a}):new Response(JSON.stringify(o),{status:200,headers:a})}r(bo,"onRequest");var ne="https://airvio.co";var K="/knowgrph",X=`${ne}${K}/`,Ga=`${ne}/`;var Ro=`${K}/health`,xo=`${ne}${Ro}`,ko="/.well-known/agent-card.json",Gc=`${K}/.well-known/agent-card.json`,qa=`${ne}${ko}`,za=`${ne}/api/storage/source-files`,Ya=`${ne}/api/storage/doc-default/{canonicalPath}`,Ja=`${ne}/api/storage/doc/{workspaceId}/{canonicalPath}`;var Ut="root-agent-ready-pages",Po=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${K}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${K}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${Ro}>; rel="status"; type="application/health+json"`,`<${K}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${ko}>; rel="describedby"; type="application/json"`].join(", "),Ao=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${X}.

## Discovery

- Crawl policy: ${X}robots.txt
- Sitemap: ${X}sitemap.xml
- API catalog: ${X}.well-known/api-catalog
- Auth.md registration instructions: ${Ga}auth.md
- Health: ${xo}
- MCP server card: ${X}.well-known/mcp/server-card.json
- A2A Agent Card: ${qa}
- Agent skills: ${X}.well-known/agent-skills/index.json
- LLM reference: ${X}llms.txt

## APIs

- Agent-ready status: ${xo}
- HTTP MCP: ${X}mcp
- Storage API: ${ne}/api/storage/
- Source Files index: ${za}
- Default Source File documents: ${Ya}
- Workspace Source File documents: ${Ja}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes five read-only tools for published Source Files, shared documents, and agent-surface inspection.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared five-tool WebMCP surface on \`${X}\` HTML routes.
`,Eo=r(t=>new Response(t,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(t||"").length/4))}}),"markdownResponse"),To=r(t=>(t.headers.get("accept")||"").toLowerCase().split(",").some(n=>n.trim().startsWith("text/markdown")),"wantsMarkdown"),Nt=r((t,e)=>{let n=new Response(t.body,t),o=String(e?.owner||"").trim(),a=String(e?.tag||"").trim();return o&&n.headers.set("x-knowgrph-route-owner",o),a&&n.headers.set("x-knowgrph-route-tag",a),n},"withAgentReadyRouteHeaders");var rt="Agent-actionable chat-to-canvas knowledge graph workspace",Va=new RegExp(["Agent-readable","knowledge","graph","workspace"].join("\\s+")+"\\.?","g"),Xa=r(t=>{let e=/<script>([\s\S]*?)<\/script>/g;for(let n of String(t||"").matchAll(e)){let o=n[1]||"";if(o.includes("createWebMcpLifecycleController")&&o.includes("toolDefinitions"))return o}return""},"extractWebMcpScript"),Co=r(()=>({"content-type":"text/html; charset=utf-8","cache-control":"no-store, no-cache, no-transform, must-revalidate, max-age=0","access-control-allow-origin":"*",link:Po}),"rootHtmlHeaders"),Dt=r((t,e)=>String(t||"").includes("</head>")?String(t||"").replace("</head>",`${e}</head>`):`${String(t||"")}${e}`,"injectIntoHead"),at=r(()=>`<main id="knowgrph-root-fallback" data-knowgrph-root-fallback="visible" aria-label="Knowgrph root alias" style="position:fixed;inset:0;z-index:2147483000;display:grid;place-content:center;gap:1rem;padding:2rem;box-sizing:border-box;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#101820;color:#f4f7fb;text-align:center">
      <h1 style="margin:0;font-size:clamp(2.25rem,8vw,5.5rem);line-height:1;font-weight:760">Knowgrph</h1>
      <p style="margin:0 auto;max-width:42rem;font-size:clamp(1rem,2.2vw,1.35rem);line-height:1.55;color:#d6e1ea">${rt}</p>
      <p style="margin:0"><a href="${K}/" style="display:inline-flex;align-items:center;justify-content:center;min-height:2.75rem;padding:0 1.05rem;border:1px solid #7db3ff;border-radius:8px;color:#f8fbff;text-decoration:none;background:#1f5fa8">Open Knowgrph</a></p>
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
    <\/script>`,"rootVisibleFallbackMarkup"),Za=r(t=>{let e=String(t||"");if(/<main\s+id=["']knowgrph-root-fallback["']/i.test(e))return e;let n=/<div\s+id=["']root["']\s*><\/div>/i;return n.test(e)?e.replace(n,o=>`${o}
    ${at()}`):e.includes("</body>")?e.replace("</body>",`    ${at()}
  </body>`):`${e}
${at()}`},"injectRootVisibleFallback"),Qa=r(t=>{let e=String(t||"").replace(Va,rt);return/<meta\s+name=["']description["'][^>]*>/i.test(e)?e=e.replace(/<meta\s+name=["']description["'][^>]*>/i,`<meta name="description" content="${rt}" />`):e=Dt(e,`    <meta name="description" content="${rt}" />
`),/<link\s+rel=["']canonical["'][^>]*>/i.test(e)||(e=Dt(e,`    <link rel="canonical" href="${K}/" />
`)),/<meta\s+name=["']x-knowgrph-root-alias["'][^>]*>/i.test(e)||(e=Dt(e,`    <meta name="x-knowgrph-root-alias" content="${K}/" />
`)),Za(e)},"rewriteRootAppHtml"),es=r(async t=>{let e=new URL(`${K}/?agentReadyRootWebMcp=1`,t.url),n=await fetch(e,{headers:{accept:"text/html"}});return n.ok?Xa(await n.text()):""},"loadWebMcpScript"),ts=r(async t=>{let e=new URL(`${K}/?agentReadyRootAlias=1`,t.url),n=await fetch(e,{headers:{accept:"text/html"}});if(!n.ok)return null;let o=Qa(await n.text());return!o.includes('<div id="root"></div>')||!o.includes(`${K}/assets/`)?null:new Response(o,{status:200,headers:Co()})},"loadKnowgrphAppShell"),ns=r((t="")=>new Response(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Knowgrph</title>
    <link rel="canonical" href="/knowgrph/" />
    ${t?`<script>${t}<\/script>`:""}
  </head>
  <body>
    <div id="root"></div>
    ${at()}
  </body>
</html>`,{status:200,headers:Co()}),"rootHtmlResponse");async function Io(t){let{request:e}=t,n=String(e.method||"GET").toUpperCase();if(n!=="GET"&&n!=="HEAD")return t.next();if(To(e)){let s=Nt(Eo(Ao),{owner:Ut,tag:"root-homepage-markdown"});return n==="HEAD"?new Response(null,s):s}let o=n==="HEAD"?null:await ts(e),a=Nt(o||ns(n==="HEAD"?"":await es(e)),{owner:Ut,tag:"root-homepage-html"});return n==="HEAD"?new Response(null,a):a}r(Io,"onRequest");var S=[{routePath:"/api/llm/chat/completions",mountPath:"/api/llm/chat",method:"",middlewares:[],modules:[$t]},{routePath:"/api/payments/commerce/x402",mountPath:"/api/payments/commerce",method:"",middlewares:[],modules:[on]},{routePath:"/api/llm/models",mountPath:"/api/llm",method:"",middlewares:[],modules:[rn]},{routePath:"/api/llm/responses",mountPath:"/api/llm",method:"",middlewares:[],modules:[an]},{routePath:"/knowgrph/doc-default/:path*",mountPath:"/knowgrph/doc-default",method:"",middlewares:[],modules:[Gn]},{routePath:"/knowgrph/doc/:path*",mountPath:"/knowgrph/doc",method:"",middlewares:[],modules:[qn]},{routePath:"/knowgrph/share/:path*",mountPath:"/knowgrph/share",method:"",middlewares:[],modules:[zn]},{routePath:"/api/link-preview",mountPath:"/api",method:"GET",middlewares:[],modules:[Jn]},{routePath:"/api/link-proxy",mountPath:"/api",method:"GET",middlewares:[],modules:[Xn]},{routePath:"/api/graph",mountPath:"/api",method:"",middlewares:[],modules:[io]},{routePath:"/api/oembed",mountPath:"/api",method:"",middlewares:[],modules:[po]},{routePath:"/__chat_proxy/:path*",mountPath:"/__chat_proxy",method:"",middlewares:[],modules:[mo]},{routePath:"/knowgrph/:path*",mountPath:"/knowgrph",method:"",middlewares:[],modules:[te]},{routePath:"/__video_frame",mountPath:"/",method:"",middlewares:[],modules:[yo]},{routePath:"/__youtube_transcript",mountPath:"/",method:"",middlewares:[],modules:[_o]},{routePath:"/health",mountPath:"/",method:"",middlewares:[],modules:[bo]},{routePath:"/",mountPath:"/",method:"",middlewares:[],modules:[Io]}];function os(t){for(var e=[],n=0;n<t.length;){var o=t[n];if(o==="*"||o==="+"||o==="?"){e.push({type:"MODIFIER",index:n,value:t[n++]});continue}if(o==="\\"){e.push({type:"ESCAPED_CHAR",index:n++,value:t[n++]});continue}if(o==="{"){e.push({type:"OPEN",index:n,value:t[n++]});continue}if(o==="}"){e.push({type:"CLOSE",index:n,value:t[n++]});continue}if(o===":"){for(var a="",s=n+1;s<t.length;){var i=t.charCodeAt(s);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){a+=t[s++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(n));e.push({type:"NAME",index:n,value:a}),n=s;continue}if(o==="("){var c=1,l="",s=n+1;if(t[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<t.length;){if(t[s]==="\\"){l+=t[s++]+t[s++];continue}if(t[s]===")"){if(c--,c===0){s++;break}}else if(t[s]==="("&&(c++,t[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));l+=t[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(n));if(!l)throw new TypeError("Missing pattern at ".concat(n));e.push({type:"PATTERN",index:n,value:l}),n=s;continue}e.push({type:"CHAR",index:n,value:t[n++]})}return e.push({type:"END",index:n,value:""}),e}r(os,"lexer");function rs(t,e){e===void 0&&(e={});for(var n=os(t),o=e.prefixes,a=o===void 0?"./":o,s=e.delimiter,i=s===void 0?"/#?":s,c=[],l=0,p=0,f="",u=r(function(m){if(p<n.length&&n[p].type===m)return n[p++].value},"tryConsume"),b=r(function(m){var h=u(m);if(h!==void 0)return h;var A=n[p],J=A.type,re=A.index;throw new TypeError("Unexpected ".concat(J," at ").concat(re,", expected ").concat(m))},"mustConsume"),g=r(function(){for(var m="",h;h=u("CHAR")||u("ESCAPED_CHAR");)m+=h;return m},"consumeText"),_=r(function(m){for(var h=0,A=i;h<A.length;h++){var J=A[h];if(m.indexOf(J)>-1)return!0}return!1},"isSafe"),E=r(function(m){var h=c[c.length-1],A=m||(h&&typeof h=="string"?h:"");if(h&&!A)throw new TypeError('Must have text between two parameters, missing text after "'.concat(h.name,'"'));return!A||_(A)?"[^".concat(oe(i),"]+?"):"(?:(?!".concat(oe(A),")[^").concat(oe(i),"])+?")},"safePattern");p<n.length;){var k=u("CHAR"),I=u("NAME"),v=u("PATTERN");if(I||v){var U=k||"";a.indexOf(U)===-1&&(f+=U,U=""),f&&(c.push(f),f=""),c.push({name:I||l++,prefix:U,suffix:"",pattern:v||E(U),modifier:u("MODIFIER")||""});continue}var T=k||u("ESCAPED_CHAR");if(T){f+=T;continue}f&&(c.push(f),f="");var G=u("OPEN");if(G){var U=g(),j=u("NAME")||"",w=u("PATTERN")||"",y=g();b("CLOSE"),c.push({name:j||(w?l++:""),pattern:j&&!w?E(U):w,prefix:U,suffix:y,modifier:u("MODIFIER")||""});continue}b("END")}return c}r(rs,"parse");function Ne(t,e){var n=[],o=Oo(t,n,e);return as(o,n,e)}r(Ne,"match");function as(t,e,n){n===void 0&&(n={});var o=n.decode,a=o===void 0?function(s){return s}:o;return function(s){var i=t.exec(s);if(!i)return!1;for(var c=i[0],l=i.index,p=Object.create(null),f=r(function(b){if(i[b]===void 0)return"continue";var g=e[b-1];g.modifier==="*"||g.modifier==="+"?p[g.name]=i[b].split(g.prefix+g.suffix).map(function(_){return a(_,g)}):p[g.name]=a(i[b],g)},"_loop_1"),u=1;u<i.length;u++)f(u);return{path:c,index:l,params:p}}}r(as,"regexpToFunction");function oe(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}r(oe,"escapeString");function vo(t){return t&&t.sensitive?"":"i"}r(vo,"flags");function ss(t,e){if(!e)return t;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,a=n.exec(t.source);a;)e.push({name:a[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),a=n.exec(t.source);return t}r(ss,"regexpToRegexp");function is(t,e,n){var o=t.map(function(a){return Oo(a,e,n).source});return new RegExp("(?:".concat(o.join("|"),")"),vo(n))}r(is,"arrayToRegexp");function cs(t,e,n){return ls(rs(t,n),e,n)}r(cs,"stringToRegexp");function ls(t,e,n){n===void 0&&(n={});for(var o=n.strict,a=o===void 0?!1:o,s=n.start,i=s===void 0?!0:s,c=n.end,l=c===void 0?!0:c,p=n.encode,f=p===void 0?function(h){return h}:p,u=n.delimiter,b=u===void 0?"/#?":u,g=n.endsWith,_=g===void 0?"":g,E="[".concat(oe(_),"]|$"),k="[".concat(oe(b),"]"),I=i?"^":"",v=0,U=t;v<U.length;v++){var T=U[v];if(typeof T=="string")I+=oe(f(T));else{var G=oe(f(T.prefix)),j=oe(f(T.suffix));if(T.pattern)if(e&&e.push(T),G||j)if(T.modifier==="+"||T.modifier==="*"){var w=T.modifier==="*"?"?":"";I+="(?:".concat(G,"((?:").concat(T.pattern,")(?:").concat(j).concat(G,"(?:").concat(T.pattern,"))*)").concat(j,")").concat(w)}else I+="(?:".concat(G,"(").concat(T.pattern,")").concat(j,")").concat(T.modifier);else{if(T.modifier==="+"||T.modifier==="*")throw new TypeError('Can not repeat "'.concat(T.name,'" without a prefix and suffix'));I+="(".concat(T.pattern,")").concat(T.modifier)}else I+="(?:".concat(G).concat(j,")").concat(T.modifier)}}if(l)a||(I+="".concat(k,"?")),I+=n.endsWith?"(?=".concat(E,")"):"$";else{var y=t[t.length-1],m=typeof y=="string"?k.indexOf(y[y.length-1])>-1:y===void 0;a||(I+="(?:".concat(k,"(?=").concat(E,"))?")),m||(I+="(?=".concat(k,"|").concat(E,")"))}return new RegExp(I,vo(n))}r(ls,"tokensToRegexp");function Oo(t,e,n){return t instanceof RegExp?ss(t,e):Array.isArray(t)?is(t,e,n):cs(t,e,n)}r(Oo,"pathToRegexp");var st=/[.+?^${}()|[\]\\]/g;function*ps(t){let e=new URL(t.url).pathname;for(let n of[...S].reverse()){if(n.method&&n.method!==t.method)continue;let o=Ne(n.routePath.replace(st,"\\$&"),{end:!1}),a=Ne(n.mountPath.replace(st,"\\$&"),{end:!1}),s=o(e),i=a(e);if(s&&i)for(let c of n.middlewares.flat())yield{handler:c,params:s.params,path:i.path}}for(let n of S){if(n.method&&n.method!==t.method)continue;let o=Ne(n.routePath.replace(st,"\\$&"),{end:!0}),a=Ne(n.mountPath.replace(st,"\\$&"),{end:!1}),s=o(e),i=a(e);if(s&&i&&n.modules.length){for(let c of n.modules.flat())yield{handler:c,params:s.params,path:s.path};break}}}r(ps,"executeRequest");var bl={async fetch(t,e,n){let o=t,a=ps(o),s={},i=!1,c=r(async(l,p)=>{if(l!==void 0){let u=l;typeof l=="string"&&(u=new URL(l,o.url).toString()),o=new Request(u,p)}let f=a.next();if(f.done===!1){let{handler:u,params:b,path:g}=f.value,_={request:new Request(o.clone()),functionPath:g,next:c,params:b,get data(){return s},set data(k){if(typeof k!="object"||k===null)throw new Error("context.data must be an object");s=k},env:e,waitUntil:n.waitUntil.bind(n),passThroughOnException:r(()=>{i=!0},"passThroughOnException")},E=await u(_);if(!(E instanceof Response))throw new Error("Your Pages function should return a Response");return Mt(E)}else{let u=await e.ASSETS.fetch(o);return Mt(u)}},"next");try{return await c()}catch(l){if(i){let p=await e.ASSETS.fetch(o);return Mt(p)}throw l}}},Mt=r(t=>new Response([101,204,205,304].includes(t.status)?null:t.body,t),"cloneResponse");export{bl as default};
