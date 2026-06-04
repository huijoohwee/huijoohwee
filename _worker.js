var la=Object.defineProperty;var n=(e,t)=>la(e,"name",{value:t,configurable:!0});var pa="https://api.openai.com/v1";var zt=Object.freeze(["gpt-5.4-nano","gpt-4o-mini"]);function qt(e){return String(e||"").trim()}n(qt,"normalizeOrigin");function ua(e){let t=qt(e);return t?t.startsWith("http://localhost:")||t.startsWith("http://127.0.0.1:")||t.startsWith("http://0.0.0.0:"):!1}n(ua,"isAllowedOrigin");function $r(e){let t=qt(e);return ua(t)?{"access-control-allow-origin":t,vary:"Origin","access-control-allow-methods":"GET, POST, OPTIONS","access-control-allow-headers":"content-type, x-flowinfish-session","access-control-max-age":"86400"}:{}}n($r,"corsHeaders");function me(e,{status:t=200,origin:r=""}={}){return new Response(JSON.stringify(e),{status:t,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...$r(r)}})}n(me,"json");async function mt(e,{maxBytes:t=1e6}={}){let r=await e.arrayBuffer();if(r.byteLength>t)throw new Error("Request too large");let o=new TextDecoder().decode(r);try{return o?JSON.parse(o):{}}catch{throw new Error("Invalid JSON body")}}n(mt,"readJsonBody");function da(e){let t=String(e?.model||"").trim();if(!t)throw new Error("Missing model");if(!zt.includes(t))throw new Error(`Model not allowed: ${t}`);return t}n(da,"enforceAllowedModel");function ma(e){let t=String(e.OPENAI_API_KEY||"").trim();if(!t)throw new Error("Missing server OPENAI_API_KEY");return t}n(ma,"requireOpenAiKey");async function ht({request:e,env:t,pathname:r,payload:o}){let a=ma(t);da(o);let i=`${qt(t.OPENAI_API_BASE)||pa}${r}`,c=await fetch(i,{method:"POST",headers:{authorization:`Bearer ${a}`,"content-type":"application/json"},body:JSON.stringify(o)}),l=new Headers(c.headers);return l.delete("content-length"),l.set("cache-control","no-store"),new Response(c.body,{status:c.status,headers:l})}n(ht,"proxyToOpenAi");function Be(e){let t=e.headers.get("origin")||"";return new Response(null,{status:204,headers:{...$r(t)}})}n(Be,"handleOptions");async function Dr(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return Be(t);if(o!=="POST")return me({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return me({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await mt(t);return await ht({request:t,env:r,pathname:"/chat/completions",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return me({ok:!1,error:i},{status:400,origin:a})}}n(Dr,"onRequest");var gt={checkoutSession:"/api/payments/stripe/checkout/session",webhook:"/api/payments/stripe/webhook"};var pe={restrictedKey:"STRIPE_RESTRICTED_KEY",secretKey:"STRIPE_SECRET_KEY",webhookSecret:"STRIPE_WEBHOOK_SECRET",checkoutPriceId:"STRIPE_CHECKOUT_PRICE_ID",checkoutCurrency:"STRIPE_CHECKOUT_CURRENCY",checkoutUnitAmount:"STRIPE_CHECKOUT_UNIT_AMOUNT",checkoutProductName:"STRIPE_CHECKOUT_PRODUCT_NAME",checkoutMode:"STRIPE_CHECKOUT_MODE",checkoutReturnOrigin:"STRIPE_CHECKOUT_RETURN_ORIGIN"},_c=[pe.restrictedKey,pe.secretKey,pe.webhookSecret];var Ve={configure:"npm run payment:stripe:configure",d1MigrateRemote:"npm run payment:d1:migrate:remote",readiness:"npm run payment:stripe:readiness",x402Configure:"npm run payment:x402:configure",x402Readiness:"npm run payment:x402:readiness",paymentReadiness:"npm run payment:readiness",applyConfirmation:"apply-stripe-payment-worker-config",writeVisibleVarsFlag:"--write-visible-vars",deployVisibleVarsFlag:"--deploy-visible-vars"};var bc=[`Configure Stripe secrets on the server runtime that owns ${gt.checkoutSession}.`,"Cloudflare Pages project variables are available to Pages builds/functions, but they are not read by separate Worker routes.","Stripe Projects can provision and sync credentials locally; copy only required server secret names into the payment server runtime."].join(" "),Pc=[`Payment server runtime for ${gt.checkoutSession}`,"not Cloudflare Pages project variables"].join("; "),ha=[pe.restrictedKey,pe.secretKey].join(" or "),Ac=[pe.checkoutPriceId,`${pe.checkoutCurrency} + ${pe.checkoutUnitAmount} + ${pe.checkoutProductName}`].join(" or "),Rc=[`${pe.checkoutMode}=payment`,`${pe.checkoutMode}=subscription with ${pe.checkoutPriceId}`].join(" or "),xc=["Worker secret names","visible Worker [vars]","remote D1 payment tables","required webhook-processing columns/constraints","bounded optional hosted Checkout create-and-expire smoke"].join(" + "),kc=[Ve.configure,`write visible Worker [vars] with ${Ve.writeVisibleVarsFlag}`,`deploy visible Worker [vars] with ${Ve.deployVisibleVarsFlag}`,`apply with -- --apply --yes --confirm=${Ve.applyConfirmation}`,Ve.readiness].join(" -> "),Ec=[`Missing server-managed Stripe key. Set ${ha} on the payment server runtime.`,"Pages project variables alone do not satisfy separate Worker routes."].join(" ");var ga=n(e=>{let t=2166136261;for(let r=0;r<e.length;r+=1)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0},"fnv1a32");function Kr(e){return ga(String(e??""))}n(Kr,"hashString32");function Ye(e){return Kr(e).toString(16).padStart(8,"0")}n(Ye,"hashStringToHex");var fa=n(e=>e==null?"":typeof e=="boolean"?e?"1":"0":typeof e=="number"?Number.isFinite(e)?String(e):"":String(e),"normalizePrimitive"),ya=n(e=>e.map(fa).join("|"),"buildSignatureText"),ft=n(e=>Ye(ya(e)),"hashSignatureParts");var we=n((e,t)=>ft(["agentic-commerce",e,...t]),"buildAgenticCommerceSemanticKey");var Hr="solana_pay",jr="/api/payments/commerce/solana-pay/settle";var Je="2026-01-30",Fr="1000",Gr="USDC",Vt="https://x402.org/facilitator",Wr="eip155:84532",wa="$0.001",zr="x402-payment-required",Fe="2026-04-08",Br="https://ucp.dev/2026-04-08/specification/overview/",Sa=["checkout"],_a=["rest"];var v={acpDiscovery:"/.well-known/acp.json",acpConfig:"/.well-known/acp-config",ucpProfile:"/.well-known/ucp",mppOpenApi:"/openapi.json",x402ApiRoot:"/api",x402ApiV1:"/api/v1",checkoutSessions:"/checkout/sessions",x402PaymentRequired:"/api/payments/commerce/x402",commerceWebhook:"/api/payments/commerce/webhook",commerceProofArtifact:"/api/payments/commerce/harness-proof.json",commerceTraceArtifact:"/api/payments/commerce/trace.jsonl",openboxIngest:"/api/payments/commerce/openbox/ingest",web3Settle:"/api/payments/commerce/web3/settle",solanaPaySettle:jr},Yc=[v.x402ApiRoot,v.x402ApiV1,v.x402PaymentRequired],Ee={sellerId:"SELLER_ID",checkoutBaseUrl:"CHECKOUT_BASE_URL",web3Enabled:"WEB3_ENABLED",web3DepositAddress:"WEB3_DEPOSIT_ADDRESS",baseRpcUrl:"BASE_RPC_URL",baseConfirmationBlocks:"BASE_CONFIRMATION_BLOCKS",easAttestUrl:"EAS_ATTEST_URL",openboxApiUrl:"OPENBOX_API_URL",openboxIngestUrl:"OPENBOX_INGEST_URL",openboxApiKey:"OPENBOX_API_KEY",stripeDelegatePaymentUrl:"STRIPE_DELEGATE_PAYMENT_URL",acpBearerToken:"ACP_BEARER_TOKEN",x402PayToAddress:"X402_PAY_TO_ADDRESS",x402Network:"X402_NETWORK",x402Asset:"X402_ASSET",x402Amount:"X402_AMOUNT",x402FacilitatorUrl:"X402_FACILITATOR_URL",x402Price:"X402_PRICE"},Ce=n((e,t)=>String(e[t]||"").trim(),"readEnvString"),qr=n((e,t)=>{let r=Ce(e,Ee.sellerId);if(r)return r;try{return new URL(t).host}catch{return"knowgrph-seller"}},"readAgenticCommerceSellerId");var Vr=n(e=>{let t=Ce(e,Ee.web3Enabled).toLowerCase();return t?t==="0"||t==="false"||t==="no"?!1:t==="1"||t==="true"||t==="yes":!0},"isAgenticCommerceWeb3Enabled");var Xe=n(e=>String(e||"").trim().replace(/\/+$/g,""),"normalizeAgenticCommerceBaseUrl"),se=n((e,t)=>`${Xe(e)}${t}`,"buildAgenticCommerceUrl"),ee=n((e,t,r,o,a=o.startsWith("/")?o:null)=>({id:t,label:r,value:o,path:a,semanticKey:we("mainpanel-commerce-readiness-row",[e,t,r,o,a||""])}),"buildAgenticCommerceMainPanelReadinessRow"),Ge=n((e,t,r)=>({id:e,title:t,rows:r}),"buildAgenticCommerceMainPanelReadinessSection"),ba=n(()=>{let e=[Ge("overview","Overview",[ee("overview","acp-discovery","ACP discovery",`GET ${v.acpDiscovery}`,v.acpDiscovery),ee("overview","acp-config","ACP config",`GET ${v.acpConfig}`,v.acpConfig),ee("overview","api-version","API version",Je,null)]),Ge("discovery","Discovery",[ee("discovery","ucp-profile","UCP profile",v.ucpProfile),ee("discovery","mpp-openapi","MPP OpenAPI",v.mppOpenApi),ee("discovery","x402-payment-required","x402 payment required",v.x402PaymentRequired),ee("discovery","x402-api-root","x402 API root",v.x402ApiRoot)]),Ge("sessions","Sessions",[ee("sessions","checkout-sessions","Checkout sessions",v.checkoutSessions),ee("sessions","stripe-webhook","Stripe webhook",gt.webhook)]),Ge("web3","Web3",[ee("web3","settle","Settle",v.web3Settle),ee("web3","solana-pay-settle","Solana Pay settle",v.solanaPaySettle),ee("web3","signals","Signals","Base RPC + Solana RPC confirmation",null)]),Ge("governance","Governance",[ee("governance","openbox-ingest","OpenBOX ingest",v.openboxIngest),ee("governance","risk-source","Risk source","OpenBOX risk signal",null)]),Ge("proofs","Proofs",[ee("proofs","harness-proof","Harness proof",v.commerceProofArtifact),ee("proofs","trace-artifact","Trace artifact",v.commerceTraceArtifact)])],t=e.flatMap(a=>a.rows),r=t.map(a=>a.path||"").filter(a=>a.length>0),o=t.filter(a=>!a.path).map(a=>`${a.label}: ${a.value}`);return{surface:"mainpanel-commerce",semanticKey:we("mainpanel-commerce-readiness",[Je,...t.map(a=>a.semanticKey)]),sections:e,routePaths:r,routeCount:r.length,signals:o}},"buildAgenticCommerceMainPanelReadiness"),Jc=ba(),Yr=n((e,t)=>{let r=Ce(e,Ee.web3DepositAddress);if(/^0x[0-9a-fA-F]{40}$/.test(r))return r;let o=we("deposit-address",[t,"0"]),a=we("deposit-address",[t,"1"]),s=we("deposit-address",[t,"2"]),i=we("deposit-address",[t,"3"]),c=we("deposit-address",[t,"4"]);return`0x${o}${a}${s}${i}${c}`.slice(0,42)},"buildAgenticCommerceDepositAddress");var Jr=n((e,t=zr)=>{let r=Ce(e,Ee.x402PayToAddress);return/^0x[0-9a-fA-F]{40}$/.test(r)?r:Yr(e,t)},"readAgenticCommerceX402PayToAddress"),Xc=Yr({},zr),Pa=/^[a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,64}$/,Xr=n(e=>{let t=Ce(e,Ee.x402Network);return Pa.test(t)?t:Wr},"readAgenticCommerceX402Network"),Qr=n(e=>Ce(e,Ee.x402Asset)||Gr,"readAgenticCommerceX402Asset"),Zr=n(e=>{let t=Ce(e,Ee.x402Amount);return/^[1-9][0-9]*$/.test(t)?t:Fr},"readAgenticCommerceX402Amount");var eo=n(e=>{let t=Ce(e,Ee.x402FacilitatorUrl);try{let r=new URL(t||Vt);return r.protocol==="https:"||r.protocol==="http:"?r.toString().replace(/\/+$/g,""):Vt}catch{return Vt}},"readAgenticCommerceX402FacilitatorUrl"),to=n(e=>{let t=Xe(e.baseUrl);return{protocol:{name:"acp",version:Je,supported_versions:[Je],documentation_url:"https://agenticcommerce.dev"},api_base_url:t,transports:[..._a],capabilities:{services:[...Sa],...e.web3Enabled?{extensions:[{name:"x-web3"}]}:{}},links:{config:se(t,v.acpConfig),ucp:se(t,v.ucpProfile),mpp:se(t,v.mppOpenApi),x402:se(t,v.x402PaymentRequired)}}},"buildAgenticCommerceAcpDiscovery"),ro=n(e=>{let t=Xe(e.baseUrl),r={acp:se(t,v.acpDiscovery),api:se(t,v.x402ApiRoot),checkout_sessions:se(t,v.checkoutSessions),mpp_openapi:se(t,v.mppOpenApi),proof:se(t,v.commerceProofArtifact),trace:se(t,v.commerceTraceArtifact),x402_payment_required:se(t,v.x402PaymentRequired),solana_pay_settle:se(t,v.solanaPaySettle)},o={checkout_sessions:!0,content_payments:!0,proof_artifacts:!0,risk_signals:!0,web3_settlement:e.web3Enabled,solana_pay:e.web3Enabled},a={"dev.ucp.shopping":[{version:Fe,spec:Br,transport:"rest",endpoint:r.api,schema:"https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json"}]};return{ucp:{version:Fe,protocol_version:Fe,services:a,capabilities:{"dev.ucp.shopping.checkout":[{version:Fe,spec:"https://ucp.dev/2026-04-08/specification/checkout/",schema:"https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"}]},payment_handlers:{},endpoints:r},protocol_version:Fe,protocol:{name:"ucp",version:Fe},seller:{id:e.sellerId},services:[{id:"knowgrph-content-payments",type:"content-payments",endpoints:{x402:r.x402_payment_required,checkout_sessions:r.checkout_sessions,solana_pay_settle:r.solana_pay_settle,proof:r.proof,trace:r.trace}}],capabilities:o,endpoints:r,spec_urls:[Br],schema_urls:["https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json","https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"]}},"buildAgenticCommerceUcpProfile"),oo=n(e=>{let t=Xe(e.baseUrl);return{openapi:"3.1.0",info:{title:"Knowgrph Machine Payment Protocol",version:Je,description:"Machine-readable payable-operation discovery for Knowgrph commerce routes."},servers:[{url:t}],paths:{[v.x402PaymentRequired]:{get:{operationId:"getKnowgrphX402PaymentRequirement",summary:"Return x402 payment requirements for an agent-readable paid resource.","x-payment-info":{intent:"charge",method:"x402",amount:wa,currency:"usdc"},responses:{402:{description:"Payment Required"}}}},[v.checkoutSessions]:{post:{operationId:"createKnowgrphCommerceCheckoutSession",summary:"Create an agentic commerce checkout session.","x-payment-info":{intent:"session",method:"stripe",amount:"dynamic",currency:"request.currency"},responses:{201:{description:"Checkout session created"}}}},[v.solanaPaySettle]:{post:{operationId:"settleKnowgrphSolanaPayCheckoutSession",summary:"Settle an agentic commerce checkout session from a verified Solana Pay transaction signature.","x-payment-info":{intent:"settlement",method:Hr,amount:"dynamic",currency:"request.currency"},responses:{200:{description:"Solana Pay session settled"},409:{description:"Solana Pay transaction is not confirmed yet"},422:{description:"Solana Pay transaction does not match the session"}}}}}}},"buildAgenticCommerceMppOpenApi"),no=n(e=>{let t=Xe(e.baseUrl),r=se(t,v.x402PaymentRequired),o=String(e.amount||Fr);return{x402Version:2,error:"Payment required",resource:{url:r,description:"Knowgrph agentic commerce paid-resource readiness probe",mimeType:"application/json"},accepts:[{scheme:"exact",network:String(e.network||Wr),amount:o,maxAmountRequired:o,asset:String(e.asset||Gr),resource:r,mimeType:"application/json",payTo:e.payTo,maxTimeoutSeconds:300,extra:{name:"USDC",version:"2",resourceUrl:r,...e.facilitatorUrl?{facilitatorUrl:e.facilitatorUrl}:{}}}]}},"buildAgenticCommerceX402PaymentRequired");var Aa=n(e=>JSON.stringify(e,null,2),"jsonBody"),Ra=n(e=>String(e||"").trim().replace(/\/+$/g,""),"trimOrigin"),xa=n(e=>typeof btoa=="function"?btoa(e):typeof Buffer<"u"?Buffer.from(e).toString("base64"):"","encodeBase64"),ka=n((e,t)=>{try{return new URL(e).origin}catch{return Ra(t)}},"rootOriginFromRequest"),Yt=n((e={})=>{let t=ka(e.requestUrl,e.origin),r=e.env||{},o=qr(r,`${t}/`),a=Vr(r),s=no({baseUrl:t,payTo:Jr(r),network:Xr(r),asset:Qr(r),amount:Zr(r),facilitatorUrl:eo(r)});return{acpDiscovery:to({sellerId:o,baseUrl:t,web3Enabled:a}),ucpProfile:ro({sellerId:o,baseUrl:t,web3Enabled:a}),mppOpenApi:oo({baseUrl:t}),x402PaymentRequired:s}},"buildKnowgrphCommerceDiscovery");var ao=n((e,t={})=>{let r=Yt({requestUrl:e?.url,env:t}).x402PaymentRequired,o=xa(JSON.stringify(r));return new Response(Aa(r),{status:402,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*",...o?{"payment-required":o}:{}}})},"buildKnowgrphX402PaymentRequiredResponse");async function so(e){return ao(e.request,e.env||{})}n(so,"onRequest");async function io(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=t.headers.get("origin")||"";return r==="OPTIONS"?Be(t):r!=="GET"&&r!=="HEAD"?me({ok:!1,error:"Method not allowed"},{status:405,origin:o}):me({ok:!0,models:zt.map(a=>({model:a,display_name:a}))},{status:200,origin:o})}n(io,"onRequest");async function co(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return Be(t);if(o!=="POST")return me({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return me({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await mt(t);return await ht({request:t,env:r,pathname:"/responses",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return me({ok:!1,error:i},{status:400,origin:a})}}n(co,"onRequest");var We=Object.freeze({researchSourceFiles:"knowgrph_research_source_files",inspectAgentSurface:"knowgrph_inspect_agent_surface"}),Jt=n(e=>String(e||"").trim(),"normalizeString"),Ea=n(e=>({...e,arguments:Array.isArray(e.arguments)?e.arguments.map(t=>({...t})):void 0,_meta:e._meta&&typeof e._meta=="object"?{...e._meta,tools:Array.isArray(e._meta.tools)?[...e._meta.tools]:void 0}:void 0}),"clonePrompt"),po=Object.freeze([Object.freeze({name:We.researchSourceFiles,title:"Research Knowgrph Source Files",description:"Guide an MCP host through read-only Knowgrph Source Files research using search and fetch with citation-ready URLs.",arguments:Object.freeze([Object.freeze({name:"query",description:"Research question or topic to pass to the read-only search tool.",required:!0}),Object.freeze({name:"limit",description:"Optional decimal string for the maximum search results to inspect.",required:!1}),Object.freeze({name:"focus",description:"Optional aspect to prioritize when reading fetched Source Files.",required:!1})]),_meta:Object.freeze({readOnly:!0,tools:Object.freeze(["search","fetch"])})}),Object.freeze({name:We.inspectAgentSurface,title:"Inspect Knowgrph Agent Surface",description:"Guide an MCP host through read-only inspection of Knowgrph agent, MCP, and MCP Apps readiness metadata.",arguments:Object.freeze([Object.freeze({name:"focus",description:"Optional readiness area to emphasize, such as transport, tools, resources, prompts, retrieval, or app metadata.",required:!1})]),_meta:Object.freeze({readOnly:!0,tools:Object.freeze(["inspect_agent_surface"])})})]),uo=n(()=>po.map(Ea),"buildKnowgrphAgentReadyPromptContracts"),Ca=n(e=>po.find(t=>t.name===Jt(e))||null,"findPromptContract"),yt=n((e,t)=>!e||typeof e!="object"?"":Jt(e[t]),"readPromptArg"),Ta=n((e,t)=>{let r=yt(e,t);if(!r)throw new Error(`Missing required prompt argument: ${t}`);return r},"readRequiredPromptArg"),lo=n(e=>({role:"user",content:{type:"text",text:e}}),"buildPromptMessage"),va=n((e={})=>{let t=Ta(e,"query"),r=yt(e,"limit"),o=yt(e,"focus");return[`Research Knowgrph Source Files for: ${t}`,"","Use the MCP server read-only retrieval path:",`1. Call search with query=${JSON.stringify(t)}${r?` and limit=${JSON.stringify(r)}`:""}.`,"2. Select the most relevant returned ids and call fetch for each id before answering.","3. Ground the answer in fetched markdown content and cite the returned result URLs when summarizing.",o?`4. Prioritize this focus: ${o}.`:"","","Do not mutate graph, canvas, workspace, storage, or browser-local state for this research prompt."].filter(Boolean).join(`
`)},"buildSourceFilesResearchPromptText"),Oa=n((e={})=>{let t=yt(e,"focus");return["Inspect the Knowgrph agent-ready surface through the read-only inspect_agent_surface tool.","","Review health, API catalog, MCP server card, A2A card, agent skills, commerce discovery, and mcpAppsServerReadiness.","For MCP Apps readiness, verify tool/resource linkage, output schema, text fallback, structured content, sandbox/security metadata, no-auth security-scheme mirroring, widget accessibility, prompts, search/fetch retrieval, Streamable HTTP, and local stdio support.",t?`Emphasize this readiness area: ${t}.`:"","","Report checklist ids and evidence from structuredContent. Do not infer readiness from prose alone."].filter(Boolean).join(`
`)},"buildAgentSurfaceInspectionPromptText"),mo=n((e,t={})=>{let r=Ca(e);if(!r)throw new Error(`Unknown Knowgrph MCP prompt: ${Jt(e)}`);if(r.name===We.researchSourceFiles)return{description:r.description,messages:[lo(va(t))]};if(r.name===We.inspectAgentSurface)return{description:r.description,messages:[lo(Oa(t))]};throw new Error(`Unhandled Knowgrph MCP prompt: ${r.name}`)},"getKnowgrphAgentReadyPrompt");var Ia=Object.freeze({sourceFileById:"knowgrph_source_file_by_id"}),wt="kgdoc://source-file/{id}",ho="kgdoc://source-file/",go="text/markdown",Qe=n(e=>String(e||"").trim(),"normalizeString"),fo=n(()=>[{uriTemplate:wt,name:Ia.sourceFileById,title:"Knowgrph Source File By ID",description:"Read a complete published Knowgrph Source File markdown document using a stable kgdoc id returned by search.",mimeType:go,annotations:{audience:["user","assistant"],priority:.8},_meta:{readOnly:!0,source:"knowgrph-source-files",tool:"fetch"}}],"buildKnowgrphAgentReadyResourceTemplateContracts");var yo=n(e=>{let t=Qe(e);if(!t.startsWith(ho))return"";let r=t.slice(ho.length);if(!r)return"";try{return decodeURIComponent(r)}catch{return r}},"parseKnowgrphSourceFileResourceUri"),wo=n(({uri:e,sourceFile:t}={})=>{let r=typeof t?.content=="string"?t.content:String(t?.text||"");return{contents:[{uri:Qe(e),mimeType:go,text:r,_meta:{id:Qe(t?.id),title:Qe(t?.title),url:Qe(t?.url),metadata:t?.metadata&&typeof t.metadata=="object"?{...t.metadata}:{}}}]}},"buildKnowgrphSourceFileResourceReadResult");var _t="io.modelcontextprotocol/ui",Ne="text/html;profile=mcp-app",Ao="2026-01-26",Ma="knowgrph-mcp-apps-server-readiness/v0.1",ie="ui://knowgrph/agent-ready",Zt="knowgrph-agent-ready",Ue="inspect_agent_surface",he=Object.freeze(["search","fetch"]),Xt=Object.freeze({search:Object.freeze(["ids"]),fetch:Object.freeze(["id","title","content","text"])}),So=Object.freeze(Object.values(We)),Pe="streamable-http",Na=Object.freeze([Object.freeze({type:"noauth"})]),ne=Object.freeze({openAiApps:"openai-apps",claude:"claude-mcp-connector",qwenCode:"qwen-code",kimiCli:"kimi-cli",bytePlusModelArk:"byteplus-modelark",generic:"generic-mcp"}),K=n(e=>String(e||"").trim(),"normalizeString"),St=n(e=>K(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),"escapeHtml"),Ua=n(e=>JSON.stringify(e).replace(/</g,"\\u003c"),"safeJsonForInlineScript"),La=n(e=>{let t=K(e);if(!t)return"";try{return new URL(t).origin}catch{return""}},"readUrlOrigin"),er=n(()=>({extensions:{[_t]:{mimeTypes:[Ne]}}}),"buildKnowgrphMcpAppsCapabilities"),te=n(e=>Array.isArray(e)?e:[],"arrayFrom"),tr=n(()=>Na.map(e=>({...e})),"buildKnowgrphMcpNoauthSecuritySchemes"),Ro=n(e=>(Array.isArray(e)&&e.length?e:tr()).filter(r=>r&&typeof r=="object").map(r=>({...r})),"normalizeSecuritySchemes"),_o=n(e=>te(e).some(t=>t?.type==="noauth"),"hasNoauthSecurityScheme"),bo=n(e=>Array.isArray(e)?Ro(e):[],"readSecuritySchemes"),$a=n(e=>{let t=K(e);return t.includes("window.openai")&&t.includes("openai:set_globals")&&t.includes("toolInput")&&t.includes("toolOutput")&&t.includes("callTool")&&t.includes("request('ui/initialize'")},"hasOpenAiWidgetBridgeHtml"),Po=n((e,t=[])=>e?.outputSchema?.type==="object"&&t.every(r=>te(e.outputSchema?.required).includes(r)),"hasToolOutputSchemaFields"),Qt=n(e=>e?.annotations?.readOnlyHint===!0&&e?.annotations?.destructiveHint===!1&&e?.annotations?.openWorldHint===!1&&e?.annotations?.idempotentHint===!0,"hasReadOnlyToolAnnotations"),W=n((e,t,r,o=[])=>({id:e,label:t,ok:r===!0,evidence:te(o).map(K).filter(Boolean)}),"booleanCheck"),rr=n((e={})=>{let t=K(e.baseUrl).replace(/\/+$/,""),r=K(e.serverName)||"knowgrph",o=K(e.mcpUrl)||(t?`${t}/mcp`:"");return{[ne.openAiApps]:{id:ne.openAiApps,label:"OpenAI Apps / ChatGPT",transport:Pe,url:o,appResourceUri:ie,appToolName:Ue,requiredMetadata:["openai/outputTemplate","openai/widgetAccessible","openai/widgetCSP","openai/widgetDomain"],requiredTools:[Ue,...he]},[ne.claude]:{id:ne.claude,label:"Claude MCP connector",transport:Pe,url:o,beta:"mcp-client-2025-11-20",mcp_servers:[{type:"url",url:o,name:r}],tools:[{type:"mcp_toolset",mcp_server_name:r}],requiredTools:he},[ne.qwenCode]:{id:ne.qwenCode,label:"Qwen Code",transport:"http",url:o,command:`qwen mcp add --transport http ${r} ${o}`,settingsJson:{mcpServers:{[r]:{httpUrl:o,timeout:3e4,trust:!1,includeTools:["search","fetch",Ue]}}},requiredTools:he,primaryFlow:"Call search with a natural-language query, then call fetch with the returned kgdoc id."},[ne.kimiCli]:{id:ne.kimiCli,label:"Kimi CLI",transport:"http",url:o,command:`kimi mcp add --transport http ${r} ${o}`,configFile:"~/.kimi/mcp.json",mcpJson:{mcpServers:{[r]:{url:o,transport:"http"}}},requiredTools:he,primaryFlow:"Call search with a natural-language query, then call fetch with the returned kgdoc id."},[ne.bytePlusModelArk]:{id:ne.bytePlusModelArk,label:"BytePlus ModelArk Responses API",transport:Pe,url:o,apiBaseUrl:"https://ark.ap-southeast.bytepluses.com/api/v3",endpoint:"/responses",requiredHeaders:{"ark-beta-mcp":"true"},tools:[{type:"mcp",server_label:r,server_url:o,require_approval:"never"}],openAiCompatible:{base_url:"https://ark.ap-southeast.bytepluses.com/api/v3",default_headers:{"ark-beta-mcp":"true"},responsesCreate:{model:"<MODELARK_MODEL_OR_ENDPOINT_ID>",tools:[{type:"mcp",server_label:r,server_url:o,require_approval:"never"}]}},invocationScope:"ModelArk Responses API with MCP service and model permissions enabled.",requiredTools:he,primaryFlow:"Use ModelArk Responses API with the Knowgrph MCP tool entry, then ask the model to call search and fetch."},[ne.generic]:{id:ne.generic,label:"Generic MCP clients",transport:Pe,url:o,initialize:{method:"initialize",accept:["application/json","text/event-stream"]},requiredMethods:["initialize","notifications/initialized","tools/list","tools/call"],optionalMethods:["prompts/list","prompts/get","resources/list","resources/templates/list","resources/read"],requiredTools:he}}},"buildKnowgrphMcpClientSetups"),xo=n((e={})=>{let t=K(e.baseUrl).replace(/\/+$/,""),r=K(e.updatedAt),o=e.mcpServerCard&&typeof e.mcpServerCard=="object"?e.mcpServerCard:{},a=o.capabilities&&typeof o.capabilities=="object"?o.capabilities:{},s=te(e.tools).length?te(e.tools):te(a.tools),i=te(e.resources).length?te(e.resources):[bt({appUrl:t,updatedAt:r})],c=te(e.prompts).length?te(e.prompts):te(o.prompts),l=te(e.resourceTemplates).length?te(e.resourceTemplates):te(o.resourceTemplates),d=s.filter(w=>w?._meta?.ui?.resourceUri===ie),h=d.find(w=>w?.name===Ue)||d[0]||null,f=i.find(w=>w?.uri===ie)||null,A=a.extensions?.[_t],_=K(o.transport?.url)||(t?`${t}/mcp`:""),x=K(o.transport?.type)||Pe,H=K(e.appResourceHtml)||Co({appUrl:t,updatedAt:r,toolName:h?.name||Ue}),U=e.clientSetups&&typeof e.clientSetups=="object"?e.clientSetups:rr({baseUrl:t,mcpUrl:_,serverName:o.serverInfo?.name}),D=h?.outputSchema&&typeof h.outputSchema=="object",re=!!h?.name,F=D,C=h?._meta?.["openai/outputTemplate"]===ie,O=$a(H),Y=_o(h?.securitySchemes)&&_o(h?._meta?.securitySchemes),L=Qt(h),J=h?._meta?.["openai/widgetAccessible"]===!0,I=c.map(w=>K(w?.name)).filter(Boolean),M=o.capabilities?.prompts&&typeof o.capabilities.prompts=="object",j=So.every(w=>I.includes(w)),oe=l.map(w=>K(w?.uriTemplate)).filter(Boolean),le=oe.includes(wt),ye=Object.fromEntries(he.map(w=>[w,s.find(E=>E?.name===w)||null])),P=he.every(w=>{let E=ye[w];return Qt(E)&&Po(E,Xt[w])}),y=U[ne.qwenCode],S=y?.transport==="http"&&y?.url===_&&y?.settingsJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.httpUrl===_&&String(y?.command||"").includes("--transport http")&&String(y?.command||"").includes(_),u=U[ne.kimiCli],m=u?.transport==="http"&&u?.url===_&&u?.mcpJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.url===_&&u?.mcpJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.transport==="http"&&String(u?.command||"").includes("kimi mcp add --transport http")&&String(u?.command||"").includes(_),g=U[ne.bytePlusModelArk],b=g?.transport===Pe&&g?.url===_&&g?.endpoint==="/responses"&&g?.requiredHeaders?.["ark-beta-mcp"]==="true"&&te(g?.tools).some(w=>w?.type==="mcp"&&w?.server_label===(o.serverInfo?.name||"knowgrph")&&w?.server_url===_&&w?.require_approval==="never")&&g?.openAiCompatible?.responsesCreate?.tools?.some(w=>w?.type==="mcp"&&w?.server_label===(o.serverInfo?.name||"knowgrph")&&w?.server_url===_&&w?.require_approval==="never"),N=[W("app-tool-resource-link","App tool is linked to the UI resource",d.length>0,d.map(w=>w.name)),W("output-schema","App tool exposes an output schema",D,[h?.name]),W("text-fallback","Tool result keeps a text fallback for non-UI hosts",re,[h?.name]),W("structured-content","Tool result returns structured content for the View",F,[h?.name]),W("resource-descriptor","MCP resource descriptor uses the MCP Apps MIME type",f?.mimeType===Ne,[f?.uri]),W("resource-security-meta","Resource declares UI sandbox metadata",f?._meta?.ui?.prefersBorder===!0&&!!f?._meta?.ui?.csp,[f?.uri]),W("openai-output-template","App tool exposes the OpenAI output template compatibility key",C,[h?.name]),W("openai-widget-bridge","App resource supports the OpenAI Apps widget bridge",O,["window.openai","openai:set_globals"]),W("tool-security-schemes","App tool exposes no-auth securitySchemes and mirrors them in _meta",Y,[h?.name]),W("tool-impact-annotations","App tool exposes complete read-only impact annotations",L,[h?.name]),W("widget-accessible","App tool allows the widget bridge to call tools",J,[h?.name]),W("prompt-discovery","Server exposes MCP prompt templates for multi-host guidance",M&&j,I),W("source-file-resource-template","Server exposes a dynamic Source Files resource template",le,oe),W("deep-research-search-fetch","Server exposes read-only search and fetch tools",P,he),W("qwen-code-http-client-setup","Server advertises Qwen Code HTTP MCP setup",S,[y?.command]),W("kimi-cli-http-client-setup","Server advertises Kimi CLI HTTP MCP setup",m,[u?.command]),W("byteplus-modelark-responses-mcp-setup","Server advertises BytePlus ModelArk Responses API MCP setup",b,[g?.apiBaseUrl,g?.endpoint]),W("extension-capability","Server advertises the MCP Apps extension capability",A?.mimeTypes?.includes(Ne),[_t]),W("streamable-http-transport","Server exposes a stateless Streamable HTTP JSON-RPC transport",!!_&&x===Pe,[_,x]),W("stdio-transport","Repo-local MCP server supports stdio host configuration",e.localStdio!==!1,["node mcp/server.js"])],G=N.every(w=>w.ok);return{schemaVersion:Ma,ready:G,updatedAt:r,app:{name:Zt,protocolVersion:Ao,resourceUri:ie,resourceMimeType:Ne,extensionId:_t},tool:{name:h?.name||Ue,title:h?.title||"Inspect Agent Surface",resourceUri:h?._meta?.ui?.resourceUri||ie,visibility:te(h?._meta?.ui?.visibility).length?h._meta.ui.visibility:["model","app"],readOnly:h?.annotations?.readOnlyHint===!0,destructive:h?.annotations?.destructiveHint===!0,openWorld:h?.annotations?.openWorldHint===!0,idempotent:h?.annotations?.idempotentHint===!0,annotationsReady:L,hasOutputSchema:!!D,textFallback:re,structuredContent:F,openAiOutputTemplate:C,openAiWidgetBridge:O,securitySchemes:bo(h?.securitySchemes),mirroredSecuritySchemes:bo(h?._meta?.securitySchemes),widgetAccessible:J},resource:{uri:f?.uri||ie,name:f?.name||Zt,mimeType:f?.mimeType||Ne,prefersBorder:f?._meta?.ui?.prefersBorder===!0,domain:K(f?._meta?.ui?.domain),csp:f?._meta?.ui?.csp||{},openAiWidgetBridge:O},retrieval:{mode:"deep-research-search-fetch",requiredTools:he,tools:he.map(w=>{let E=ye[w];return{name:w,readOnly:E?.annotations?.readOnlyHint===!0,destructive:E?.annotations?.destructiveHint===!0,openWorld:E?.annotations?.openWorldHint===!0,idempotent:E?.annotations?.idempotentHint===!0,annotationsReady:Qt(E),requiredOutputFields:Xt[w],outputSchemaReady:Po(E,Xt[w])}})},prompts:{requiredPrompts:So,names:I,capability:!!M,ready:M&&j},resourceTemplates:{requiredTemplates:[wt],uriTemplates:oe,ready:le},clients:U,transports:[{id:"pages-http-jsonrpc",type:x,url:_,stateless:!0,serverFactory:!0,legacySse:!1},{id:"local-stdio-jsonrpc",type:"stdio",command:"node mcp/server.js",stateless:!1,serverFactory:!0}],dataModel:{source:"inspect_agent_surface.structuredContent",categories:[{id:"discovery",label:"Discovery metadata",count:["health","apiCatalog","openApi","mcpServerCard","agentCard","agentSkills"].length},{id:"commerce",label:"Commerce discovery",count:["acpDiscovery","ucpProfile","mppOpenApi"].length},{id:"mcp-apps",label:"MCP Apps server bindings",count:N.length}],renderMode:"structured-summary-with-json-fallback"},checklist:N}},"buildKnowgrphMcpAppsServerReadiness"),ko=n((e={})=>{let t=K(e.resourceUri)||ie;return{securitySchemes:Ro(e.securitySchemes),ui:{resourceUri:t,visibility:Array.isArray(e.visibility)&&e.visibility.length?e.visibility:["model","app"]},"openai/outputTemplate":t,"openai/widgetAccessible":e.widgetAccessible!==!1,"openai/toolInvocation/invoking":K(e.invoking)||"Inspecting Knowgrph.","openai/toolInvocation/invoked":K(e.invoked)||"Knowgrph is ready."}},"buildKnowgrphMcpAppsToolMeta"),Eo=Object.freeze({type:"object",additionalProperties:!0,required:["baseUrl","healthUrl","mcpUrl"],properties:{baseUrl:{type:"string"},healthUrl:{type:"string"},mcpUrl:{type:"string"},apiCatalogUrl:{type:"string"},openApiUrl:{type:"string"},mcpServerCardUrl:{type:"string"},agentCardUrl:{type:"string"},agentSkillsUrl:{type:"string"},commerceUrls:{type:"object",additionalProperties:{type:"string"}},health:{type:"object",additionalProperties:!0},apiCatalog:{type:"object",additionalProperties:!0},openApi:{type:"object",additionalProperties:!0},mcpServerCard:{type:"object",additionalProperties:!0},agentCard:{type:"object",additionalProperties:!0},agentSkills:{type:"object",additionalProperties:!0},commerce:{type:"object",additionalProperties:!0},mcpAppsServerReadiness:{type:"object",additionalProperties:!0}}}),bt=n((e={})=>{let t=K(e.appUrl),r=K(e.updatedAt),o=K(e.domain)||La(t),a={connectDomains:[],resourceDomains:[],frameDomains:[],baseUriDomains:[]};return{uri:ie,name:Zt,description:["Interactive MCP Apps view for the existing Knowgrph agent-ready surface.",t?`App URL: ${t}`:"",r?`Updated: ${r}`:""].filter(Boolean).join(" "),mimeType:Ne,_meta:{ui:{csp:a,...o?{domain:o}:{},prefersBorder:!0},"openai/widgetDescription":"Interactive Knowgrph agent-ready server-readiness view.","openai/widgetPrefersBorder":!0,...o?{"openai/widgetDomain":o}:{},"openai/widgetCSP":{connect_domains:a.connectDomains,resource_domains:a.resourceDomains,frame_domains:a.frameDomains}}}},"buildKnowgrphMcpAppsResourceDescriptor"),Co=n((e={})=>{let t=K(e.appUrl),r=K(e.updatedAt),o=K(e.toolName)||Ue,a=Array.isArray(e.toolNames)?e.toolNames.map(K).filter(Boolean):[o],s={appUrl:t,updatedAt:r,resourceUri:ie,toolName:o,toolNames:a,protocolVersion:Ao};return`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Knowgrph Agent Ready</title>
  <style>
    :root { color-scheme: light dark; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    * { box-sizing: border-box; }
    body { margin: 0; background: Canvas; color: CanvasText; }
    main { display: grid; gap: 12px; min-height: 100vh; padding: 16px; }
    header { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; border-bottom: 1px solid color-mix(in srgb, CanvasText 18%, transparent); padding-bottom: 10px; }
    h1 { margin: 0; font-size: 16px; line-height: 1.25; letter-spacing: 0; }
    p { margin: 4px 0 0; color: color-mix(in srgb, CanvasText 72%, transparent); font-size: 13px; line-height: 1.45; }
    button, a { border: 1px solid color-mix(in srgb, CanvasText 24%, transparent); border-radius: 6px; background: color-mix(in srgb, Canvas 88%, CanvasText 12%); color: CanvasText; font: inherit; padding: 7px 10px; text-decoration: none; }
    button { cursor: pointer; }
    section { display: grid; gap: 8px; }
    dl { display: grid; grid-template-columns: minmax(110px, max-content) 1fr; gap: 6px 10px; margin: 0; font-size: 12px; }
    dt { color: color-mix(in srgb, CanvasText 62%, transparent); }
    dd { margin: 0; min-width: 0; overflow-wrap: anywhere; }
    pre { margin: 0; max-height: 48vh; overflow: auto; border: 1px solid color-mix(in srgb, CanvasText 18%, transparent); border-radius: 6px; padding: 10px; font: 12px/1.45 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; white-space: pre-wrap; overflow-wrap: anywhere; background: color-mix(in srgb, Canvas 94%, CanvasText 6%); }
    .actions { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end; }
    .status { font-size: 12px; color: color-mix(in srgb, CanvasText 66%, transparent); }
    .readiness { border: 1px solid color-mix(in srgb, CanvasText 18%, transparent); border-radius: 6px; padding: 10px; background: color-mix(in srgb, Canvas 96%, CanvasText 4%); font-size: 12px; }
    .readiness strong { display: block; font-size: 13px; margin-bottom: 3px; }
    .readiness ul { display: grid; gap: 4px; margin: 8px 0 0; padding: 0; list-style: none; }
    .check { min-width: 0; overflow-wrap: anywhere; }
    .check.ok { color: color-mix(in srgb, CanvasText 74%, #0f766e 26%); }
    .check.fail { color: color-mix(in srgb, CanvasText 68%, #b91c1c 32%); }
  </style>
</head>
<body>
  <main>
    <header>
      <section>
        <h1>Knowgrph Agent Ready</h1>
        <p>Interactive MCP Apps view backed by the existing read-only agent surface.</p>
      </section>
      <nav class="actions" aria-label="Agent Ready actions">
        <button id="refresh" type="button">Refresh</button>
        ${t?`<a href="${St(t)}" target="_blank" rel="noreferrer">Open</a>`:""}
      </nav>
    </header>
    <section aria-label="MCP app state">
      <dl>
        <dt>Resource</dt><dd>${St(ie)}</dd>
        <dt>Tool</dt><dd>${St(o)}</dd>
        <dt>Host</dt><dd id="host">Not connected.</dd>
        <dt>Updated</dt><dd>${St(r||"runtime")}</dd>
        <dt>Status</dt><dd id="status" class="status">Initializing MCP Apps host bridge.</dd>
      </dl>
    </section>
    <section aria-label="MCP Apps server readiness">
      <section id="readiness" class="readiness">Waiting for structured server-readiness data.</section>
    </section>
    <section aria-label="Tool result">
      <pre id="structured">No tool result received yet.</pre>
    </section>
  </main>
  <script>
  (() => {
    const boot = ${Ua(s)};
    const statusEl = document.getElementById('status');
    const hostEl = document.getElementById('host');
    const readinessEl = document.getElementById('readiness');
    const structuredEl = document.getElementById('structured');
    let nextId = 1;
    const pending = new Map();
    const state = { hostCapabilities: null, hostContext: null, input: null, result: null };
    const hasParent = () => window.parent && window.parent !== window;
    const readOpenAiBridge = () => {
      const bridge = window.openai;
      return bridge && typeof bridge === 'object' ? bridge : null;
    };
    const post = (message) => {
      if (!hasParent()) return;
      window.parent.postMessage({ jsonrpc: '2.0', ...message }, '*');
    };
    const notify = (method, params = {}) => post({ method, params });
    const request = (method, params = {}) => {
      const id = nextId++;
      post({ id, method, params });
      return new Promise((resolve, reject) => {
        pending.set(id, { method, resolve, reject });
        window.setTimeout(() => {
          if (!pending.has(id)) return;
          pending.delete(id);
          reject(new Error(method + ' timed out'));
        }, 8000);
      });
    };
    const requestTool = async () => {
      statusEl.textContent = 'Requesting ' + boot.toolName + ' through the host.';
      try {
        const openAiBridge = readOpenAiBridge();
        const result = openAiBridge && typeof openAiBridge.callTool === 'function'
          ? await openAiBridge.callTool(boot.toolName, {})
          : await request('tools/call', { name: boot.toolName, arguments: {} });
        state.result = result || null;
        render();
      } catch (error) {
        statusEl.textContent = error && error.message ? error.message : 'Tool request failed.';
      }
    };
    const updateHost = (context = {}) => {
      state.hostContext = { ...(state.hostContext || {}), ...context };
      const host = state.hostContext || {};
      const label = [
        host.displayMode,
        host.theme,
        host.platform,
      ].filter(Boolean).join(' / ');
      hostEl.textContent = label || (state.hostCapabilities ? 'Connected.' : 'Not connected.');
      if (host.theme === 'dark' || host.theme === 'light') {
        document.documentElement.dataset.theme = host.theme;
      }
    };
    const syncOpenAiGlobals = (globals = readOpenAiBridge()) => {
      const source = globals && typeof globals === 'object' ? globals : {};
      if (Object.prototype.hasOwnProperty.call(source, 'toolInput')) {
        state.input = source.toolInput || null;
      }
      if (Object.prototype.hasOwnProperty.call(source, 'toolOutput')) {
        state.result = source.toolOutput || null;
      }
      updateHost({
        platform: 'OpenAI Apps',
        displayMode: source.displayMode || source.hostDisplayMode,
        theme: source.theme,
      });
      state.hostCapabilities = { ...(state.hostCapabilities || {}), openaiAppsBridge: true };
    };
    const appendText = (parent, tagName, text, className = '') => {
      const element = document.createElement(tagName);
      if (className) element.className = className;
      element.textContent = text;
      parent.appendChild(element);
      return element;
    };
    const renderReadiness = (payload) => {
      readinessEl.replaceChildren();
      const readiness = payload && payload.mcpAppsServerReadiness;
      if (!readiness || typeof readiness !== 'object') {
        readinessEl.textContent = 'Waiting for structured server-readiness data.';
        return;
      }
      readinessEl.className = 'readiness ' + (readiness.ready ? 'ready' : 'not-ready');
      appendText(
        readinessEl,
        'strong',
        readiness.ready ? 'MCP Apps server-ready' : 'MCP Apps server-readiness incomplete',
      );
      const meta = appendText(
        readinessEl,
        'p',
        [readiness.app && readiness.app.protocolVersion, readiness.resource && readiness.resource.mimeType]
          .filter(Boolean)
          .join(' / '),
        'status',
      );
      if (!meta.textContent) meta.remove();
      const list = document.createElement('ul');
      for (const check of Array.isArray(readiness.checklist) ? readiness.checklist : []) {
        const item = document.createElement('li');
        item.className = check && check.ok ? 'check ok' : 'check fail';
        item.textContent = (check && check.ok ? 'OK ' : 'Missing ') + (check && check.label ? check.label : 'readiness check');
        list.appendChild(item);
      }
      readinessEl.appendChild(list);
    };
    const render = () => {
      const payload = state.result && typeof state.result === 'object'
        ? (state.result.structuredContent || state.result)
        : state.result;
      renderReadiness(payload);
      structuredEl.textContent = payload
        ? JSON.stringify(payload, null, 2)
        : 'No tool result received yet.';
      statusEl.textContent = payload
        ? 'Rendered structured tool result.'
        : (state.hostCapabilities ? 'Connected. Waiting for tool result.' : 'Initializing MCP Apps host bridge.');
    };
    const sendSizeChanged = (() => {
      let last = '';
      return () => {
        const body = document.body;
        const root = document.documentElement;
        const width = Math.ceil(Math.max(body.scrollWidth, root.scrollWidth, root.clientWidth));
        const height = Math.ceil(Math.max(body.scrollHeight, root.scrollHeight, root.clientHeight));
        const key = width + 'x' + height;
        if (key === last || width <= 0 || height <= 0) return;
        last = key;
        notify('ui/notifications/size-changed', { width, height });
      };
    })();
    const connect = async () => {
      if (readOpenAiBridge()) {
        syncOpenAiGlobals();
        render();
        sendSizeChanged();
        return;
      }
      if (!hasParent()) {
        statusEl.textContent = 'Standalone preview. Waiting for embedded MCP Apps host.';
        return;
      }
      try {
        const result = await request('ui/initialize', {
          protocolVersion: boot.protocolVersion,
          appInfo: {
            name: 'knowgrph-mcp-app',
            title: 'Knowgrph Agent Ready',
            version: '0.1.0',
            description: 'Interactive view for the Knowgrph agent-ready MCP surface.',
            websiteUrl: boot.appUrl || undefined,
          },
          appCapabilities: {
            availableDisplayModes: ['inline', 'fullscreen'],
          },
        });
        state.hostCapabilities = result && result.hostCapabilities ? result.hostCapabilities : {};
        updateHost(result && result.hostContext ? result.hostContext : {});
        notify('ui/notifications/initialized', {});
        sendSizeChanged();
        statusEl.textContent = 'Connected. Waiting for tool result.';
      } catch (error) {
        statusEl.textContent = error && error.message ? error.message : 'Host initialization failed.';
      }
    };
    window.addEventListener('message', (event) => {
      const message = event.data;
      if (!message || message.jsonrpc !== '2.0') return;
      if (Object.prototype.hasOwnProperty.call(message, 'id') && (Object.prototype.hasOwnProperty.call(message, 'result') || Object.prototype.hasOwnProperty.call(message, 'error'))) {
        const pendingRequest = pending.get(message.id);
        if (!pendingRequest) return;
        pending.delete(message.id);
        if (message.error) pendingRequest.reject(new Error(message.error.message || 'MCP Apps request failed'));
        else pendingRequest.resolve(message.result);
        return;
      }
      if (message.method === 'ui/notifications/tool-input') {
        state.input = message.params && (message.params.arguments || message.params);
        statusEl.textContent = 'Received tool input.';
        return;
      }
      if (message.method === 'ui/notifications/tool-input-partial') {
        state.input = { ...(state.input || {}), ...(message.params && (message.params.arguments || message.params) || {}) };
        statusEl.textContent = 'Received partial tool input.';
        return;
      }
      if (message.method === 'ui/notifications/tool-result') {
        state.result = message.params || null;
        render();
        return;
      }
      if (message.method === 'ui/notifications/tool-cancelled') {
        statusEl.textContent = message.params && message.params.reason
          ? 'Tool cancelled: ' + message.params.reason
          : 'Tool cancelled.';
        return;
      }
      if (message.method === 'ui/notifications/host-context-changed') {
        updateHost(message.params || {});
        return;
      }
      if (message.method === 'ui/resource-teardown') {
        if (message.id !== undefined && message.id !== null) post({ id: message.id, result: {} });
      }
    });
    window.addEventListener('openai:set_globals', (event) => {
      syncOpenAiGlobals(event && event.detail && (event.detail.globals || event.detail));
      render();
      sendSizeChanged();
    });
    document.getElementById('refresh')?.addEventListener('click', requestTool);
    render();
    connect();
    if (typeof ResizeObserver === 'function') {
      new ResizeObserver(sendSizeChanged).observe(document.body);
    } else {
      window.addEventListener('resize', sendSizeChanged);
    }
  })();
  <\/script>
</body>
</html>`},"buildKnowgrphMcpAppsHtml"),or=n((e={})=>{let t=bt(e);return{contents:[{uri:t.uri,mimeType:Ne,text:Co(e),_meta:t._meta}]}},"buildKnowgrphMcpAppsResourceReadResult");var p=Object.freeze({search:"search",fetch:"fetch",listSourceFiles:"list_source_files",readSourceFile:"read_source_file",readSharedDocument:"read_shared_document",inspectSharedDocumentStructure:"inspect_shared_document_structure",inspectLocalSettingsChatReadiness:"inspect_local_settings_chat_readiness",inspectLocalMainPanelState:"inspect_local_mainpanel_state",inspectLocalEditorWorkspaceState:"inspect_local_editor_workspace_state",inspectLocalChatPipelineState:"inspect_local_chat_pipeline_state",inspectLocalMainPanelChatCanvasPipeline:"inspect_local_mainpanel_chat_canvas_pipeline",inspectLocalWorkspaceDocument:"inspect_local_workspace_document",inspectLocalCanvasTopology:"inspect_local_canvas_topology",inspectLocalCanvasSnapshot:"inspect_local_canvas_snapshot",inspectLocal3dCameraPose:"inspect_local_3d_camera_pose",inspectLocal3dLayoutPositions:"inspect_local_3d_layout_positions",inspectLocal2dZoomViewport:"inspect_local_2d_zoom_viewport",inspectLocalSourceFilesSnapshot:"inspect_local_source_files_snapshot",inspectAgentSurface:"inspect_agent_surface"}),Da="knowgrph";var Ka=n(()=>Object.freeze({readOnlyHint:!0,destructiveHint:!1,openWorldHint:!1,idempotentHint:!0}),"buildReadOnlyToolAnnotations"),z=Ka(),Ha=Object.freeze({type:"object",additionalProperties:!0,required:["ids","results"],properties:{ids:{type:"array",items:{type:"string"}},results:{type:"array",items:{type:"object",additionalProperties:!0,required:["id","title","url"],properties:{id:{type:"string"},title:{type:"string"},url:{type:"string"},snippet:{type:"string"},workspaceId:{type:"string"},canonicalPath:{type:"string"}}}}}}),ja=Object.freeze({type:"object",additionalProperties:!0,required:["id","title","content","text","url"],properties:{id:{type:"string"},title:{type:"string"},content:{type:"string"},text:{type:"string"},url:{type:"string"},metadata:{type:"object",additionalProperties:!0}}}),q=n((e,t=Da)=>`${String(t||"").trim()}.${String(e||"").trim()}`,"buildKnowgrphWebMcpToolName"),nr=n((e={})=>{let t=String(e.defaultWorkspaceId||"").trim(),r=e.includeBrowserOnlyTools===!0;return[{name:p.search,webName:q(p.search),title:"Search Knowgrph Source Files",description:"Use this when an MCP host needs to search published Knowgrph Source Files and return stable document IDs for the `fetch` tool. Call this first for OpenAI Deep Research-style retrieval, Claude, Qwen Code, Kimi CLI, BytePlus ModelArk, and generic MCP clients.",inputSchema:{type:"object",additionalProperties:!1,required:["query"],properties:{query:{type:"string"},limit:{type:"number",default:10}}},outputSchema:Ha,annotations:z},{name:p.fetch,webName:q(p.fetch),title:"Fetch Knowgrph Source File",description:"Use this when an MCP host needs the complete published Knowgrph Source File for an ID returned by `search`. Returns markdown as both `content` and `text` for OpenAI, Claude, Qwen Code, Kimi CLI, BytePlus ModelArk, and generic MCP clients.",inputSchema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"string"}}},outputSchema:ja,annotations:z},{name:p.listSourceFiles,webName:q(p.listSourceFiles),title:"List Source Files",description:"Use this when an MCP host needs the published Knowgrph Source Files index as markdown.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:z},{name:p.readSourceFile,webName:q(p.readSourceFile),title:"Read Source File",description:"Use this when an MCP host knows a published Knowgrph canonical path and needs that Editor Workspace markdown content. Defaults to the canonical docs workspace when workspaceId is omitted.",inputSchema:{type:"object",additionalProperties:!1,required:["canonicalPath"],properties:{canonicalPath:{type:"string"},workspaceId:t?{type:"string",default:t}:{type:"string"}}},annotations:z},{name:p.readSharedDocument,webName:q(p.readSharedDocument),title:"Read Shared Document",description:"Use this when an MCP host has a Knowgrph share token or public Knowgrph share/document URL and needs the published markdown content.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:z},{name:p.inspectSharedDocumentStructure,webName:q(p.inspectSharedDocumentStructure),title:"Inspect Shared Document Structure",description:"Use this when an MCP host has a Knowgrph share token or public Knowgrph share/document URL and needs frontmatter/body structure without mutating the document.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:z},...r?[{name:p.inspectLocalSettingsChatReadiness,webName:q(p.inspectLocalSettingsChatReadiness),title:"Inspect Local Settings Chat Readiness",description:"Inspect the active browser-local Knowgrph SettingsView chat readiness state for MainPanel MCP, Integrations, and Commerce, including provider, routing, and model discovery status.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:z},{name:p.inspectLocalMainPanelState,webName:q(p.inspectLocalMainPanelState),title:"Inspect Local MainPanel State",description:"Inspect the active browser-local Knowgrph MainPanel tab, search, and shared action state for MCP, Integrations, and Commerce readiness.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:z},{name:p.inspectLocalEditorWorkspaceState,webName:q(p.inspectLocalEditorWorkspaceState),title:"Inspect Local Editor Workspace State",description:"Inspect the active browser-local Knowgrph Editor Workspace and Markdown pane state, including pane visibility and live draft/frontmatter structure.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:z},{name:p.inspectLocalChatPipelineState,webName:q(p.inspectLocalChatPipelineState),title:"Inspect Local Chat Pipeline State",description:"Inspect the active browser-local Knowgrph FloatingPanel chat runtime, including streaming, workspace follow path, and LLM-to-workspace pipeline state.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:z},{name:p.inspectLocalMainPanelChatCanvasPipeline,webName:q(p.inspectLocalMainPanelChatCanvasPipeline),title:"Inspect Local MainPanel Chat Canvas Pipeline",description:"Inspect the active browser-local Knowgrph E2E readiness path from MainPanel MCP, Integrations, and Commerce through FloatingPanel Chat, workspace markdown/frontmatter, and canvas topology.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:z},{name:p.inspectLocalWorkspaceDocument,webName:q(p.inspectLocalWorkspaceDocument),title:"Inspect Local Workspace Document",description:"Inspect the active browser-local Knowgrph workspace markdown document structure without reading published storage routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:z},{name:p.inspectLocalCanvasTopology,webName:q(p.inspectLocalCanvasTopology),title:"Inspect Local Canvas Topology",description:"Inspect the active browser-local Knowgrph canvas topology summary from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:z},{name:p.inspectLocalCanvasSnapshot,webName:q(p.inspectLocalCanvasSnapshot),title:"Inspect Local Canvas Snapshot",description:"Inspect the active browser-local Knowgrph canvas SVG snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:z},{name:p.inspectLocal3dCameraPose,webName:q(p.inspectLocal3dCameraPose),title:"Inspect Local 3D Camera Pose",description:"Inspect the active browser-local Knowgrph 3D camera pose from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:z},{name:p.inspectLocal3dLayoutPositions,webName:q(p.inspectLocal3dLayoutPositions),title:"Inspect Local 3D Layout Positions",description:"Inspect the active browser-local Knowgrph 3D layout positions from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:z},{name:p.inspectLocal2dZoomViewport,webName:q(p.inspectLocal2dZoomViewport),title:"Inspect Local 2D Zoom Viewport",description:"Inspect the active browser-local Knowgrph 2D zoom and viewport state from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:z},{name:p.inspectLocalSourceFilesSnapshot,webName:q(p.inspectLocalSourceFilesSnapshot),title:"Inspect Local Source Files Snapshot",description:"Inspect the active browser-local Knowgrph Source Files runtime snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:z}]:[],{name:p.inspectAgentSurface,webName:q(p.inspectAgentSurface),title:"Inspect Agent Surface",description:"Use this when an MCP Apps-capable host or generic MCP client needs to inspect Knowgrph agent-ready discovery, MCP Apps readiness, OpenAPI, and skill metadata.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},outputSchema:Eo,annotations:z,_meta:ko()}].map(a=>({...a,securitySchemes:Array.isArray(a.securitySchemes)&&a.securitySchemes.length?a.securitySchemes:tr()}))},"buildKnowgrphAgentReadyToolContracts");var To=n((e={})=>{let t=String(e.baseUrl||"").replace(/\/+$/,""),r=t?new URL(`${t}/`).origin:"";return{...{baseUrl:t,healthUrl:`${t}/health`,mcpUrl:`${t}/mcp`,apiCatalogUrl:`${t}/.well-known/api-catalog`,openApiUrl:`${t}/.well-known/openapi.json`,mcpServerCardUrl:`${t}/.well-known/mcp/server-card.json`,agentCardUrl:`${t}/.well-known/agent-card.json`,agentSkillsUrl:`${t}/.well-known/agent-skills/index.json`,commerceUrls:{acpDiscoveryUrl:`${r}/.well-known/acp.json`,ucpProfileUrl:`${r}/.well-known/ucp`,mppOpenApiUrl:`${r}/openapi.json`,x402PaymentRequiredUrl:`${r}/api/payments/commerce/x402`},health:e.health,apiCatalog:e.apiCatalog,openApi:e.openApi,mcpServerCard:e.mcpServerCard,agentCard:e.agentCard,agentSkills:e.agentSkills,commerce:e.commerce},mcpAppsServerReadiness:xo({baseUrl:t,updatedAt:e.updatedAt||e.health?.updatedAt||"",mcpServerCard:e.mcpServerCard})}},"buildAgentSurfaceInspectionPayload");var ar=n((e={})=>{let t=e.toolNames||{},r=String(e.defaultWorkspaceId||"").trim(),o=e.buildStorageDocPath,a=e.fetchSourceFilesIndexResponse,s=e.fetchStorageMarkdownResponse,i=e.resolveSharedDocumentInput,c=e.inspectSharedDocumentStructure,l=e.buildAgentSurfaceInspection,d=n(u=>String(u||"").trim(),"normalizeString"),h=d(e.publicBaseUrl).replace(/\/+$/,""),f=n(u=>String(u||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),A=n(u=>{try{return decodeURIComponent(String(u||""))}catch{return String(u||"")}},"safeDecodeURIComponent"),_=n(u=>{let m=d(u).split("/").filter(Boolean);return m[m.length-1]||d(u)||"Knowgrph Source File"},"titleFromCanonicalPath"),x=n((u,m=220)=>{let g=d(u).replace(/\s+/g," ");return g.length<=m?g:`${g.slice(0,m-1)}\u2026`},"truncateSnippet"),H=Math.max(0,Math.min(50,Number.isFinite(Number(e.searchContentScanMax))?Math.floor(Number(e.searchContentScanMax)):32)),U=Math.max(1e3,Math.min(5e4,Number.isFinite(Number(e.searchContentMaxChars))?Math.floor(Number(e.searchContentMaxChars)):24e3)),D=Math.max(1,Math.min(8,Number.isFinite(Number(e.searchContentConcurrency))?Math.floor(Number(e.searchContentConcurrency)):4)),re=new Set(["a","an","and","are","as","at","be","by","can","do","does","for","from","how","i","in","is","it","of","on","or","the","this","to","what","when","where","which","who","why","with"]),F=n(u=>d(u).toLowerCase().split(/[^a-z0-9:_./-]+/).map(d).filter(m=>m&&!re.has(m)),"tokenizeSearchQuery"),C=n((u,m)=>m.reduce((g,b)=>{let N=String(u||""),G=0,w=0;for(;w<N.length;){let E=N.indexOf(b,w);if(E<0)break;G+=1,w=E+Math.max(1,b.length)}return g+G},0),"countTokenHits"),O=n((u,m,g=260)=>{let b=d(u).replace(/\s+/g," ");if(!b)return"";let N=b.toLowerCase(),G=m.map(X=>N.indexOf(X)).filter(X=>X>=0).sort((X,be)=>X-be)[0];if(!Number.isFinite(G))return x(b,g);let w=Math.max(0,G-Math.floor(g/3)),E=Math.min(b.length,w+g);return`${w>0?"\u2026":""}${b.slice(w,E)}${E<b.length?"\u2026":""}`},"snippetAroundSearchHit"),Y=n(async(u,m)=>{let g=new Array(u.length),b=0,N=Array.from({length:Math.min(D,u.length)},async()=>{for(;b<u.length;){let G=b;b+=1,g[G]=await m(u[G],G)}});return await Promise.all(N),g},"runBoundedConcurrent"),L=n(({workspaceId:u="",canonicalPath:m=""}={})=>{let g=o(d(m),d(u));return h?`${h}${g}`:g},"buildPublicDocUrl");if(!!(t.search||t.fetch||t.listSourceFiles||t.readSourceFile||t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof o!="function")throw new Error("buildStorageDocPath is required");if((t.search||t.listSourceFiles)&&typeof a!="function")throw new Error("fetchSourceFilesIndexResponse is required");if((t.fetch||t.readSourceFile||t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof s!="function")throw new Error("fetchStorageMarkdownResponse is required");if((t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof i!="function")throw new Error("resolveSharedDocumentInput is required");if(t.inspectSharedDocumentStructure&&typeof c!="function")throw new Error("inspectSharedDocumentStructure is required");if(t.inspectAgentSurface&&typeof l!="function")throw new Error("buildAgentSurfaceInspection is required");let I=n(async(u={})=>{let m=d(u.canonicalPath);if(!m)throw new Error("canonicalPath is required");let g=d(u.workspaceId),b=await s(o(m,g));if(!b.ok)throw new Error(`read_source_file failed with ${b.status}`);return{workspaceId:g||r,canonicalPath:m,markdown:await b.text()}},"readSourceFile"),M=n(async(u={})=>{let m=i(u);if(!m)throw new Error("shareToken or shareUrl must resolve to a published Knowgrph document");let g=d(m.workspaceId),b=d(m.canonicalPath),N=await s(o(b,g));if(!N.ok)throw new Error(`read_shared_document failed with ${N.status}`);return{workspaceId:g||r,canonicalPath:b,markdown:await N.text()}},"readSharedDocument"),j=n(async(u={})=>{let m=await M(u);return c(m)},"inspectSharedDocument"),oe=n(({workspaceId:u="",canonicalPath:m=""}={})=>`kgdoc:${encodeURIComponent(d(u))}:${encodeURIComponent(d(m))}`,"buildSearchFetchId"),le=n(u=>{let m=d(u),g=m.match(/^kgdoc:([^:]*):(.*)$/);if(g)return{workspaceId:A(g[1]||""),canonicalPath:A(g[2]||"")};let b=m.match(/\/(?:api\/storage\/doc|knowgrph\/doc)\/([^/\s)]+)\/([^\s)]+)$/);if(b)return{workspaceId:A(b[1]||""),canonicalPath:A(b[2]||"")};let N=m.match(/\/(?:api\/storage\/doc-default|knowgrph\/doc-default)\/([^\s)]+)$/);return N?{workspaceId:"",canonicalPath:A(N[1]||"")}:null},"parseSearchFetchId"),ye=n(u=>{let m=f(u).split(`
`),g=new Map,b=n(({workspaceId:N="",canonicalPath:G="",line:w=""}={})=>{let E=d(G);if(!E)return;let X=d(N),be=oe({workspaceId:X,canonicalPath:E});g.has(be)||g.set(be,{id:be,title:_(E),url:L({workspaceId:X,canonicalPath:E}),snippet:x(w||E),workspaceId:X||r,canonicalPath:E})},"addEntry");for(let N of m){let G=/\/(?:api\/storage\/doc|knowgrph\/doc)\/([^/\s)\]]+)\/([^\s)\]]+)/g,w=/\/(?:api\/storage\/doc-default|knowgrph\/doc-default)\/([^\s)\]]+)/g;for(let E of N.matchAll(G))b({workspaceId:A(E[1]||""),canonicalPath:A(E[2]||""),line:N});for(let E of N.matchAll(w))b({workspaceId:"",canonicalPath:A(E[1]||""),line:N})}return Array.from(g.values())},"extractSearchEntriesFromSourceFilesIndex"),P=n(async(u={})=>{let m=d(u.query);if(!m)throw new Error("query is required");let g=Math.max(1,Math.min(25,Number.isFinite(Number(u.limit))?Math.floor(Number(u.limit)):10)),b=await a();if(!b.ok)throw new Error(`search failed with ${b.status}`);let N=await b.text(),G=ye(N),w=F(m),E=w.join(" "),X=G.map($=>{let Q=`${$.title}
${$.canonicalPath}
${$.workspaceId}
${$.snippet}`.toLowerCase(),pt=E&&Q.includes(E)?w.length*4:0,ut=w.reduce((dt,Wt)=>dt+(Q.includes(Wt)?2:0),0);return{...$,score:pt+ut}}),be=X.slice().sort(($,Q)=>Q.score-$.score||$.title.localeCompare(Q.title)).slice(0,H).filter($=>/\.md(?:$|[?#])/i.test($.canonicalPath)),lt=new Map;await Y(be,async $=>{let Q=le($.id);if(!Q?.canonicalPath)return null;try{let pt=await s(o(Q.canonicalPath,Q.workspaceId));if(!pt.ok)return null;let ut=(await pt.text()).slice(0,U),dt=ut.toLowerCase(),Wt=E&&dt.includes(E)?w.length*6:0,ca=C(dt,w),Lr=Wt+ca;if(Lr<=0)return null;lt.set($.id,{score:Lr,snippet:O(ut,w)})}catch{return null}return null});let Gt=X.map($=>{let Q=lt.get($.id);return{...$,score:$.score+(Q?.score||0),snippet:Q?.snippet||$.snippet}}).filter($=>$.score>0).sort(($,Q)=>Q.score-$.score||$.title.localeCompare(Q.title)).slice(0,g).map(({score:$,...Q})=>Q);return{ids:Gt.map($=>$.id),results:Gt,query:m,totalResults:Gt.length}},"searchSourceFiles"),y=n(async(u={})=>{let m=le(u.id);if(!m?.canonicalPath)throw new Error("id must be a stable Knowgrph Source File id returned by search");let g=await I(m),b=L(m);return{id:oe(m),title:_(g.canonicalPath),content:g.markdown,text:g.markdown,url:b,metadata:{workspaceId:g.workspaceId,canonicalPath:g.canonicalPath,contentType:"text/markdown",source:"knowgrph-source-files"}}},"fetchSourceFileBySearchId"),S={};return t.search&&(S[t.search]=P),t.fetch&&(S[t.fetch]=y),t.listSourceFiles&&(S[t.listSourceFiles]=async()=>{let u=await a();if(!u.ok)throw new Error(`list_source_files failed with ${u.status}`);return{workspaceId:r,markdownIndex:await u.text()}}),t.readSourceFile&&(S[t.readSourceFile]=I),t.readSharedDocument&&(S[t.readSharedDocument]=M),t.inspectSharedDocumentStructure&&(S[t.inspectSharedDocumentStructure]=j),t.inspectAgentSurface&&(S[t.inspectAgentSurface]=async()=>l()),S},"createPublishedAgentReadyToolExecutors"),vo=ar.toString();var Oo=n((e={})=>{let t=n(P=>String(P||"").trim(),"normalizeString"),r=n(P=>String(P||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),o=n(P=>{let y=String(P||"").match(/^\s*/);return y?y[0].length:0},"readIndent"),a=n(P=>/^[A-Za-z0-9_:@-]+\s*:/.test(t(P)),"isYamlKeyLine"),s=n(P=>r(P).split(`
`),"splitLines"),i=n(P=>{let y=s(P),S=0;for(;S<y.length&&!t(y[S]);)S+=1;if(t(y[S])!=="---")return null;for(let u=S+1;u<y.length;u+=1)if(t(y[u])==="---")return{frontmatter:y.slice(S+1,u).join(`
`),body:y.slice(u+1).join(`
`)};return null},"extractLeadingFrontmatter"),c=n(P=>{let y=[];for(let S of s(P)){if(!t(S)||o(S)!==0)continue;let u=S.match(/^([A-Za-z0-9_:@-]+)\s*:/);u?.[1]&&y.push(u[1])}return Array.from(new Set(y)).sort((S,u)=>S.localeCompare(u))},"extractTopLevelFrontmatterKeys"),l=n((P,y)=>{let S=s(P),u=`${y}:`;for(let m=0;m<S.length;m+=1){let g=S[m],b=t(g);if(!b.startsWith(u))continue;let N=o(g),G=b.slice(u.length).trim();if(G)return{indent:N,inlineValue:G,blockLines:[],blockText:""};let w=[];for(let E=m+1;E<S.length;E+=1){let X=S[E],be=t(X),lt=o(X);if(be&&lt<=N&&a(X))break;w.push(X)}return{indent:N,inlineValue:"",blockLines:w,blockText:w.join(`
`)}}return null},"extractYamlBlock"),d=n(P=>{let y=[];for(let S of s(P)){let u=t(S);if(!u||u.startsWith("- "))continue;let m=u.match(/^([A-Za-z0-9_:@-]+)\s*:/);m?.[1]&&y.push(m[1])}return Array.from(new Set(y)).sort((S,u)=>S.localeCompare(u))},"extractNestedYamlKeys"),h=n(P=>{let y=s(P).filter(m=>t(m));if(!y.length)return[];let S=Math.min(...y.map(o)),u=[];for(let m of y){if(o(m)!==S)continue;let g=t(m);if(g.startsWith("- "))continue;let b=g.match(/^([A-Za-z0-9_:@-]+)\s*:/);b?.[1]&&u.push(b[1])}return Array.from(new Set(u)).sort((m,g)=>m.localeCompare(g))},"extractDirectYamlKeys"),f=n(P=>{let y=t(P);if(!y.startsWith("[")||!y.endsWith("]"))return null;let S=y.slice(1,-1).trim();return S?S.split(",").map(u=>t(u)).filter(Boolean).length:0},"countInlineSequenceEntries"),A=n(P=>{let y=t(P);return y.startsWith('"')&&y.endsWith('"')||y.startsWith("'")&&y.endsWith("'")?y.slice(1,-1):y},"cleanYamlScalar"),_=n(P=>{let y=t(P);if(!y.startsWith("[")||!y.endsWith("]"))return null;let S=y.slice(1,-1).trim();return S?S.split(",").map(u=>A(u)).filter(Boolean):[]},"extractInlineSequenceValues"),x=n((P,y)=>{let S=l(P,y);if(!S)return[];if(S.inlineValue)return _(S.inlineValue)||[];let u=[],m=S.indent+2;for(let g of S.blockLines){let b=t(g);o(g)===m&&b.startsWith("- ")&&u.push(A(b.slice(2)))}return u},"extractYamlSequenceValues"),H=n((P,y)=>{let S=s(P),u=`${y}:`;for(let m of S){let g=t(m);if(g.startsWith(u))return A(g.slice(u.length))}return null},"extractTopLevelScalarValue"),U=n((P,y)=>{let S=l(P,y);if(!S)return null;if(S.inlineValue)return f(S.inlineValue);let u=0,m=S.indent+2;for(let g of S.blockLines)t(g)&&o(g)===m&&/^\s*-\s+/.test(g)&&(u+=1);return u},"countYamlSequenceEntries"),D=n(P=>{let y=[];for(let S of s(P)){let u=S.match(/^(#{1,6})\s+(.+?)\s*$/);u?.[2]&&y.push({depth:u[1].length,text:t(u[2])})}return y},"extractMarkdownHeadings"),re=t(e.workspaceId),F=t(e.canonicalPath),C=r(e.markdown),O=i(C),Y=O?c(O.frontmatter):[],L=O?l(O.frontmatter,"flow"):null,J=L?d(L.blockText):[],I=O?l(O.frontmatter,"main_panel_integrations_demo"):null,M=O?l(O.frontmatter,"superagent_harness_demo"):null,j=M?l(M.blockText,"runtime_surfaces"):null,oe=new Set(["kg:subgraphs","clusters","groups","layers"]),le=Array.from(new Set([...Y,...J].filter(P=>oe.has(P)))).sort((P,y)=>P.localeCompare(y)),ye=D(O?O.body:C);return{workspaceId:re,canonicalPath:F,markdownLength:C.length,lineCount:C?s(C).length:0,hasFrontmatter:!!O,topLevelKeys:Y,frontmatterScalars:O?{kgCanvasRenderMode:H(O.frontmatter,"kgCanvasRenderMode"),kgCanvas2dRenderer:H(O.frontmatter,"kgCanvas2dRenderer"),deployed_api_claim:H(O.frontmatter,"deployed_api_claim")}:{},mainPanelIntegrationsDemo:I?{present:!0,mainPanelEntries:x(I.blockText,"main_panel_entries"),providerIds:x(I.blockText,"provider_ids"),providerLabels:x(I.blockText,"provider_labels"),taskCapabilities:x(I.blockText,"task_capabilities"),taskLevels:x(I.blockText,"task_levels"),integrationOpenTab:H(I.blockText,"integration_open_tab"),canvas2dRenderer:H(I.blockText,"canvas_2d_renderer"),sourceFile:H(I.blockText,"source_file")}:{present:!1},superAgentHarnessDemo:M?{present:!0,taskCapabilities:x(M.blockText,"task_capabilities"),taskLevels:x(M.blockText,"task_levels"),runtimeSurfaces:j?h(j.blockText):[]}:{present:!1},hasFlowBlock:!!L,flowKeys:J,flowNodeCount:L?U(L.blockText,"nodes"):null,flowConnectionCount:L?U(L.blockText,"connections")??U(L.blockText,"edges"):null,flowSubgraphCount:L?U(L.blockText,"subgraphs"):null,forbiddenGroupingAliases:le,headingCount:ye.length,headings:ye.map(P=>P.text),bodyLength:t(O?O.body:C).length}},"inspectSharedDocumentStructure");var Mo="knowgrph-vdeoxpln/v0.1",Z=Object.freeze({search:p.search,fetch:p.fetch,uiLaunch:"knowgrph.ui.launch",uiStop:"knowgrph.ui.stop",pipeline:"knowgrph.pipeline",graphragPipeline:"knowgrph.graphrag_pipeline",superagentRun:"knowgrph.superagent.run",browserApiRun:"knowgrph.browser_api.run",vdeoxplnList:"knowgrph.vdeoxpln.list"}),Le=Object.freeze({sourceFiles:"knowgrph-source-files",agentReady:"knowgrph-agent-ready",localMcp:"knowgrph-mcp-local",chatToCanvas:"knowgrph-chat-to-canvas",strybldr:"knowgrph-strybldr",researchVisual:"knowgrph-research-visual",commerceReadiness:"knowgrph-commerce-readiness"}),ir=n(e=>String(e||"").trim(),"normalizeString"),ue=n(e=>Array.from(new Set((Array.isArray(e)?e:[]).map(ir).filter(Boolean))).sort((t,r)=>t.localeCompare(r)),"normalizeStringArray"),Io=n(e=>{let t=new Set,r=[];for(let o of Array.isArray(e)?e:[]){let a=ir(o);!a||t.has(a)||(t.add(a),r.push(a))}return r},"normalizeOrderedStringArray"),sr=n(e=>Array.isArray(e)?e.map(sr):!e||typeof e!="object"?e:Object.keys(e).sort((t,r)=>t.localeCompare(r)).reduce((t,r)=>(t[r]=sr(e[r]),t),{}),"normalizeJsonValue"),Ba=n(e=>JSON.stringify(sr(e)),"stableStringifyVdeoxplnValue"),Fa=n((e,t)=>{let r=ir(e)||"vdeoxpln";return`kgvx_${ft([r,Mo,Ba(t)])}`},"buildKnowgrphVdeoxplnSemanticKey");var Ga=Object.freeze([{id:Le.sourceFiles,title:"Knowgrph Source Files",purpose:"Discover, read, inspect, and route published Source Files and shared documents through the canonical storage and document-structure owners.",scope:"read-only-published",mutation:"read-only",triggers:["source files","published documents","shared document","read markdown","inspect document structure"],inputs:["workspace document","published markdown","share token","share URL","canonical path"],outputs:["source-files index","published markdown","document structure report"],owners:["canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/sourceFilesSignatures.ts","canvas/src/features/agent-ready/publishedToolExecutors.mjs","canvas/src/features/agent-ready/sharedDocumentStructureInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs"],tools:{published:[p.listSourceFiles,p.readSourceFile,p.readSharedDocument,p.inspectSharedDocumentStructure],browserLocal:[p.inspectLocalSourceFilesSnapshot],local:[Z.search,Z.fetch,Z.vdeoxplnList]},workflow:["Resolve source identity from storage, share token, or canonical path.","Fetch through published storage/document executors.","Inspect structure with the shared document-structure owner.","Return read-only artifacts without graph mutation."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return source-read or structure errors without model calls."},artifactPolicy:{persistence:"published-read-only",graphMaterialization:"none",semanticKeyInputs:["workspaceId","canonicalPath","shareToken","toolContract"]},validation:["agent-ready:check","pages:check-sync","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","webmcp-html-fallback"]},{id:Le.agentReady,title:"Knowgrph Agent Ready",purpose:"Inspect Knowgrph health, MCP, WebMCP, A2A, OpenAPI, commerce, and browser-local readiness without claiming deployed mutation.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["agent-ready","webmcp","mcp health","openapi","a2a","discovery","readiness"],inputs:["agent-ready base URL","browser runtime state","published metadata"],outputs:["agent surface inspection","browser-local readiness snapshot","metadata report"],owners:["canvas/src/features/agent-ready/knowgrphAgentReadyToolContract.mjs","canvas/src/features/agent-ready/webMcpRuntime.ts","canvas/src/features/agent-ready/agentSurfaceInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs","scripts/check-agent-ready.mjs"],tools:{published:[p.inspectAgentSurface],browserLocal:[p.inspectLocalSettingsChatReadiness,p.inspectLocalMainPanelState,p.inspectLocalEditorWorkspaceState,p.inspectLocalChatPipelineState,p.inspectLocalMainPanelChatCanvasPipeline,p.inspectLocalWorkspaceDocument,p.inspectLocalCanvasTopology,p.inspectLocalCanvasSnapshot,p.inspectLocal3dCameraPose,p.inspectLocal3dLayoutPositions,p.inspectLocal2dZoomViewport,p.inspectLocalSourceFilesSnapshot],local:[Z.vdeoxplnList]},workflow:["Inspect published agent-ready metadata.","Inspect browser-local state only when running inside the app runtime.","Report scope boundaries between Pages read-only tools and browser-local inspectors."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return metadata inspection errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["toolContracts","metadataRoutes","browserLocalToolNames"]},validation:["agent-ready:check","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","browser-webmcp"]},{id:Le.localMcp,title:"Knowgrph Local MCP",purpose:"Expose local UI launch, pipeline, GraphRAG, superagent, browser bridge, and vdeoxpln inspection tools through the stdio MCP server.",scope:"local-stdio",mutation:"local-confirmed",triggers:["local mcp","launch canvas","run pipeline","graphrag","superagent","browser api","list vdeoxpln"],inputs:["local root","workspace file","graph data","pipeline config","browser API runtime"],outputs:["local tool result","pipeline artifact","superagent report","vdeoxpln registry snapshot"],owners:["mcp/local-tool-contract.js","mcp/server.js","mcp/README.md","knowgrph_parser/superagent_harness.py","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[Z.search,Z.fetch,Z.uiLaunch,Z.uiStop,Z.pipeline,Z.graphragPipeline,Z.superagentRun,Z.browserApiRun,Z.vdeoxplnList]},workflow:["List local tools from the shared local MCP contract.","Run only path-guarded local-root operations.","Summarize artifacts and registry metadata in the MCP result."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"tool-owned",fallback:"Return local command failure and detected artifacts."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"tool-owned",semanticKeyInputs:["localToolNames","rootScope","artifactList"]},validation:["vdeoxpln:check","mcpLocalToolContract"],publish:["local-mcp-docs"]},{id:Le.chatToCanvas,title:"Knowgrph Chat To Canvas",purpose:"Route AI-assisted graph generation through FloatingPanel Chat, KGC validation, Workspace FS, Source Files, and Canvas apply owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["chat to canvas","generate graph","kgc markdown","flow.subgraphs","apply to canvas"],inputs:["chat request","workspace context","selection context","source evidence","model settings"],outputs:["validated KGC Markdown","workspace artifact","GraphData","canvas topology snapshot"],owners:["canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitRequest.ts","canvas/src/features/chat/chatMarkdownValidation.ts","canvas/src/features/chat/chatKgcCanvasApply.ts","canvas/src/features/chat/knowgrphVdeoxplnChatArtifacts.ts","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/lib/graph/semanticKey.ts"],tools:{published:[],browserLocal:[p.inspectLocalChatPipelineState,p.inspectLocalMainPanelChatCanvasPipeline,p.inspectLocalWorkspaceDocument,p.inspectLocalCanvasTopology,p.inspectLocalCanvasSnapshot],local:[Z.vdeoxplnList]},workflow:["Vdeoxpln context through the shared chat submit request owner.","Call provider transport only after typed request construction.","Validate KGC Markdown with bounded retries.","Persist through Workspace FS and apply through the existing Canvas path."],aiPolicy:{mode:"required-for-generation",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Persist validation or provider failure as reviewable chat/workspace state."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["chatContextScope","workspacePath","graphSemanticKey","sourceLayerHash"]},validation:["chatResponseContract","sourceFiles","vdeoxpln:check"],publish:["browser-webmcp","mainpanel-mcp"]},{id:Le.strybldr,title:"Knowgrph Strybldr",purpose:"Turn image or media source units into editable Storyboard cards and bounded media handoff artifacts through Strybldr and shared renderer owners.",scope:"browser-local-source-backed",mutation:"browser-local-user-mediated",triggers:["strybldr","storyboard","image to storyboard","media handoff","visual brief"],inputs:["image source unit","media metadata","workspace document","storyboard graph"],outputs:["Strybldr Markdown","Storyboard graph cards","media handoff prompt","canvas snapshot"],owners:["canvas/src/features/strybldr/strybldrStoryboard.ts","canvas/src/features/strybldr","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-strybldr-prd-tad.md"],tools:{published:[],browserLocal:[p.inspectLocalSourceFilesSnapshot,p.inspectLocalCanvasTopology,p.inspectLocalCanvasSnapshot],local:[Z.vdeoxplnList]},workflow:["Import media through existing workspace/source owners.","Build Strybldr cards with source-unit provenance.","Render through the shared Storyboard surface.","Compile bounded media handoff only after user approval."],aiPolicy:{mode:"optional-for-refinement",maxAttempts:1,tokenBudget:"user-approved-provider-step",fallback:"Keep editable storyboard and structured handoff error."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"storyboard-graph",semanticKeyInputs:["sourceUnitId","strybldrRunId","graphSemanticKey"]},validation:["strybldr","rendererPipelineNeutrality","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:Le.researchVisual,title:"Knowgrph Research Visual",purpose:"Create file-backed research visual workflows from source material using Knowgrph parsing, Source Files, Storyboard, renderer, and chat owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["research visual","explainer","formula","algorithm","proof","dynamic scene","storyboard"],inputs:["paper excerpt","formula","algorithm","figure","workspace document","source evidence"],outputs:["mechanism brief","storyboard","renderer-neutral scene plan","validated KGC Markdown"],owners:["canvas/src/features/parsers/default.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/features/chat/knowgrphVdeoxplnChatArtifacts.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-vdeoxpln-prd-tad.md"],tools:{published:[],browserLocal:[p.inspectLocalChatPipelineState,p.inspectLocalSourceFilesSnapshot,p.inspectLocalCanvasTopology],local:[Z.vdeoxplnList]},workflow:["Extract source-backed semantic units into workspace artifacts.","Plan exact deterministic graph/storyboard layers before optional AI support.","Persist artifacts through Workspace FS and Source Files.","Use Canvas/Storyboard renderers as projections of graph state."],aiPolicy:{mode:"optional-for-drafting",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Return deterministic source brief with unresolved questions."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["sourceSignature","graphSemanticKey","rendererId"]},validation:["sourceFiles","chatResponseContract","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:Le.commerceReadiness,title:"Knowgrph Commerce Readiness",purpose:"Inspect Commerce, payment worker, x402, ACP, UCP, MPP, and readiness metadata without bypassing the shared payment SSOT.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["commerce","payment","x402","acp","ucp","mpp","stripe","readiness"],inputs:["agent-ready metadata","commerce route health","browser readiness snapshot"],outputs:["commerce readiness report","payment route summary","agent-ready commerce metadata"],owners:["canvas/src/features/panels/views/CommerceHubView.tsx","canvas/src/features/agent-ready/browserLocalSurfaceSnapshots.ts","cloudflare/pages/knowgrph-agent-ready-commerce.mjs","cloudflare/workers/knowgrph-payment/agenticCommerce.ts","grph-shared/src/payments/agenticCommerceSsot.ts"],tools:{published:[p.inspectAgentSurface],browserLocal:[p.inspectLocalSettingsChatReadiness,p.inspectLocalMainPanelState],local:[Z.vdeoxplnList]},workflow:["Inspect published commerce discovery metadata.","Read browser-local readiness snapshots when available.","Report payment capability boundaries without initiating checkout."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return route or metadata errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["commerceSemanticKey","routeHealth","toolContract"]},validation:["agent-ready:check","mainPanelCommerce","vdeoxpln:check"],publish:["pages-agent-skills","mainpanel-mcp","browser-webmcp"]}]),Wa=n(e=>{let t={published:ue(e.tools?.published),browserLocal:ue(e.tools?.browserLocal),local:ue(e.tools?.local)},r=Fa(e.id,{id:e.id,scope:e.scope,mutation:e.mutation,owners:ue(e.owners),tools:t,triggers:ue(e.triggers),outputs:ue(e.outputs),workflow:Io(e.workflow),artifactPolicy:e.artifactPolicy||{},aiPolicy:e.aiPolicy||{}}),o=`/.well-known/agent-skills/${e.id}.md`;return Object.freeze({...e,version:Mo,triggers:ue(e.triggers),inputs:ue(e.inputs),outputs:ue(e.outputs),owners:ue(e.owners),tools:Object.freeze(t),workflow:Io(e.workflow),validation:ue(e.validation),publish:ue(e.publish),semanticKey:r,agentSkill:Object.freeze({name:e.id,type:"markdown",description:e.purpose,path:o})})},"normalizeVdeoxpln"),No=n(()=>Ga.map(Wa).sort((e,t)=>e.id.localeCompare(t.id)),"buildKnowgrphVdeoxplnRegistry");var Uo=n((e=No())=>e.map(t=>({...t.agentSkill,vdeoxpln:{id:t.id,title:t.title,scope:t.scope,mutation:t.mutation,semanticKey:t.semanticKey,tools:t.tools,publish:t.publish}})),"buildKnowgrphVdeoxplnAgentSkillDefinitions"),Se=n(e=>e&&e.length?e.map(t=>`- ${t}`).join(`
`):"- none","markdownList"),za=n(e=>`# ${e.title} Skill

Use this skill when: ${e.purpose}

## Contract

- Vdeoxpln id: \`${e.id}\`
- Contract version: \`${e.version}\`
- Semantic key: \`${e.semanticKey}\`
- Scope: \`${e.scope}\`
- Mutation boundary: \`${e.mutation}\`

## Triggers

${Se(e.triggers)}

## Inputs

${Se(e.inputs)}

## Outputs

${Se(e.outputs)}

## Tools

Published tools:
${Se(e.tools.published)}

Browser-local tools:
${Se(e.tools.browserLocal)}

Local MCP tools:
${Se(e.tools.local)}

## Workflow

${Se(e.workflow)}

## Source Owners

${Se(e.owners)}

## Artifact Policy

- Persistence: \`${e.artifactPolicy?.persistence||"none"}\`
- Graph materialization: \`${e.artifactPolicy?.graphMaterialization||"none"}\`
- Semantic-key inputs:
${Se(e.artifactPolicy?.semanticKeyInputs||[])}

## AI Policy

- Mode: \`${e.aiPolicy?.mode||"none"}\`
- Max attempts: \`${String(e.aiPolicy?.maxAttempts??0)}\`
- Token budget: \`${String(e.aiPolicy?.tokenBudget??0)}\`
- Fallback: ${e.aiPolicy?.fallback||"Return deterministic errors without model calls."}

## Validation

${Se(e.validation)}

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
`,"buildKnowgrphVdeoxplnMarkdown"),Lo=n((e=No())=>Object.fromEntries(e.map(t=>[t.id,za(t)])),"buildKnowgrphVdeoxplnMarkdownByName");var qa={[p.search]:{id:"search",tags:["mcp","search","source-files","read-only"],examples:["Search Knowgrph Source Files for renderer architecture."],outputModes:["application/json"]},[p.fetch]:{id:"fetch",tags:["mcp","fetch","source-files","markdown","read-only"],examples:["Fetch the Knowgrph Source File id returned by search."],outputModes:["text/markdown","application/json"]},[p.listSourceFiles]:{id:"list-source-files",tags:["mcp","discovery","source-files","read-only"],examples:["List the published Knowgrph Source Files."],outputModes:["text/markdown","application/json"]},[p.readSourceFile]:{id:"read-source-file",tags:["mcp","read","markdown","workspace"],examples:["Read the published source file for docs/getting-started.md."],outputModes:["text/markdown","application/json"]},[p.readSharedDocument]:{id:"read-shared-document",tags:["mcp","read","shared-document","markdown"],examples:["Read the Knowgrph shared document behind this share URL."],outputModes:["text/markdown","application/json"]},[p.inspectSharedDocumentStructure]:{id:"inspect-shared-document-structure",tags:["mcp","inspect","shared-document","structure"],examples:["Inspect the structure of this Knowgrph shared document."],outputModes:["application/json","text/markdown"]},[p.inspectAgentSurface]:{id:"inspect-agent-surface",tags:["mcp","agent-ready","discovery","metadata"],examples:["Show the Knowgrph agent discovery metadata."],outputModes:["application/json","text/markdown"]}},Ze=Uo(),$o=n(e=>e.map(t=>{let r=qa[t.name]||{id:String(t.name||"").replace(/_/g,"-"),tags:["mcp","read-only"],examples:[`Call ${t.name} on Knowgrph.`],outputModes:["application/json"]};return{id:r.id,name:t.title,description:t.description,tags:r.tags,examples:r.examples,inputModes:["application/json","text/plain"],outputModes:r.outputModes}}),"buildAgentReadyA2aSkills"),Do=n(async({appUrl:e,updatedAt:t,sha256ByName:r})=>({$schema:"https://agent-skills.dev/schemas/skills-index.v0.2.json",updated_at:t,skills:await Promise.all(Ze.map(async o=>({name:o.name,type:o.type,description:o.description,url:`${String(e||"").replace(/\/+$/,"")}${o.path}`,sha256:await r[o.name],vdeoxpln:o.vdeoxpln})))}),"buildAgentReadyAgentSkillsIndex"),Ko=n(({appBasePath:e,appA2aAgentCardPath:t,healthPath:r})=>{let o=Object.fromEntries(Ze.map(a=>[`${e}${a.path}`,{get:{summary:`Read the ${a.name} agent skill markdown`,responses:{200:{description:`Agent skill markdown for ${a.name}`}}}}]));return{[r]:{get:{summary:"Read the Knowgrph agent-ready health status",responses:{200:{description:"Health status in application/health+json format"}}}},[`${e}/mcp`]:{get:{summary:"Read MCP transport metadata",responses:{200:{description:"MCP transport metadata"}}},post:{summary:"Send a JSON-RPC MCP request",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0}}}},responses:{200:{description:"JSON-RPC result payload"}}}},[t]:{get:{summary:"Read the Knowgrph A2A Agent Card",responses:{200:{description:"A2A Agent Card JSON"}}}},"/api/storage/llms.txt":{get:{summary:"Read the Source Files LLM index",responses:{200:{description:"Plain-text LLM index"}}}},"/api/storage/source-files":{get:{summary:"List published Source Files",responses:{200:{description:"Source Files index"}}}},"/api/storage/source-files/{workspaceId}":{get:{summary:"List published Source Files for a workspace",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped Source Files index"}}}},"/api/storage/source-files/{workspaceId}/llms.txt":{get:{summary:"Read the workspace-scoped Source Files LLM index",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped plain-text LLM index"}}}},"/api/storage/doc-default/{canonicalPath}":{get:{summary:"Read a default-workspace Source File markdown document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document from the default Editor Workspace"},404:{description:"Document not found"}}}},"/api/storage/doc/{workspaceId}/{canonicalPath}":{get:{summary:"Read a Source File markdown document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document"},404:{description:"Document not found"}}}},[`${e}/doc-default/{canonicalPath}`]:{get:{summary:"Read a default-workspace shared document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/doc/{workspaceId}/{canonicalPath}`]:{get:{summary:"Read a shared document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/share/{shareToken}`]:{get:{summary:"Read a shared document through the canonical opaque share token route",parameters:[{name:"shareToken",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or published markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},...o}},"buildAgentReadyOpenApiPaths");var Va="kgShare",ep=typeof TextEncoder<"u"?new TextEncoder:null,Ho=typeof TextDecoder<"u"?new TextDecoder:null;var Ya=n(e=>{if(typeof Buffer<"u")return Uint8Array.from(Buffer.from(e,"base64"));let t=atob(e),r=new Uint8Array(t.length);for(let o=0;o<t.length;o+=1)r[o]=t.charCodeAt(o);return r},"fromBase64");var Ja=n(e=>{let t=String(e||"").replace(/-/g,"+").replace(/_/g,"/");if(!t)return"";let r=t.length%4;return r?`${t}${"=".repeat(4-r)}`:t},"fromBase64Url");var Xa=n(e=>{if(!Ho)throw new Error("TextDecoder is required to decode published doc share tokens");return Ho.decode(Ya(Ja(e)))},"decodeUtf8Base64Url"),Go=n(e=>String(e||"").trim()||null,"normalizeWorkspaceId"),pr=n(e=>String(e||"").trim(),"normalizeCanonicalPath"),cr="/knowgrph",jo="/doc-default/",Bo="/doc/",Fo="/share/",Qa="kgWorkspaceId",Za="kgCanonicalPath",es=n(e=>{let t=String(e||"").trim();return t?`/${t.replace(/^\/+|\/+$/g,"")}`:cr},"normalizeAppBasePath"),lr=n(e=>{let t=pr(e?.canonicalPath);return t?{canonicalPath:t,workspaceId:Go(e?.workspaceId)}:null},"normalizePublishedDocIdentity"),Wo=n((e,t)=>{let r=es(t),o=String(e||"").replace(/\/+$/,"")||"/";if(!o.startsWith(r))return null;let a=o.slice(r.length)||"/";if(a.startsWith(Fo)){let c=decodeURIComponent(a.slice(Fo.length)).trim();return ur(c)}if(a.startsWith(jo))return lr({canonicalPath:decodeURIComponent(a.slice(jo.length))});if(!a.startsWith(Bo))return null;let s=a.slice(Bo.length),i=s.indexOf("/");return i<1?null:lr({workspaceId:decodeURIComponent(s.slice(0,i)),canonicalPath:decodeURIComponent(s.slice(i+1))})},"parsePublishedDocPathname"),ts=n(e=>{let t=ur(e?.get(Va));if(t)return t;let r=pr(decodeURIComponent(String(e?.get(Za)||"")));if(r)return lr({workspaceId:decodeURIComponent(String(e?.get(Qa)||"")),canonicalPath:r});let o=String(e?.get("kgPath")||"").trim();return o?Wo(`${cr}${o}`,cr):null},"parsePublishedDocSearchParams");var ur=n(e=>{let t=String(e||"").trim();if(!t)return null;try{let r=JSON.parse(Xa(t)),o=pr(r?.canonicalPath);return o?{canonicalPath:o,workspaceId:Go(r?.workspaceId)}:null}catch{return null}},"decodePublishedDocShareToken"),Pt=n((e={})=>{let t=ur(e.shareToken);if(t)return t;let r=String(e.shareUrl||"").trim();if(!r)return null;try{let o=String(e.baseUrl||"https://airvio.co").trim()||"https://airvio.co",a=new URL(r,o);return ts(a.searchParams)||Wo(a.pathname,e.appBasePath)}catch{return null}},"resolvePublishedDocIdentity"),zo=String.raw`(args = {}) => {
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
}`;var At={push:"/api/storage/push",pull:"/api/storage/pull",collabSave:"/api/storage/collab/save",exportPrefix:"/api/storage/export/",docPrefix:"/api/storage/doc/",defaultDocPrefix:"/api/storage/doc-default/",sourceFilesIndex:"/api/storage/source-files",sourceFilesIndexPrefix:"/api/storage/source-files/",sourceFilesLlms:"/api/storage/llms.txt"};var qo=n((e,t)=>`${At.docPrefix}${encodeURIComponent(String(e||"").trim())}/${encodeURIComponent(String(t||"").trim())}`,"buildKnowgrphStorageDocPath"),Vo=n(e=>`${At.defaultDocPrefix}${encodeURIComponent(String(e||"").trim())}`,"buildKnowgrphStorageDefaultDocPath"),Yo=n(e=>{let t=String(e||"").trim();return t?`${At.sourceFilesIndexPrefix}${encodeURIComponent(t)}`:At.sourceFilesIndex},"buildKnowgrphStorageSourceFilesIndexPath");var B="https://airvio.co",Rt="https://knowgrph-storage.huijoohwee.workers.dev",T="/knowgrph",k=`${B}${T}/`,Jo=`${B}/`,et="kgws:canonical-docs",Ae="2026-06-04",qe=`${T}/health`,ze=`${B}${qe}`,Xo="/.well-known/agent-card.json",dr=`${T}/.well-known/agent-card.json`,xt=`${B}${Xo}`,mr=`${B}/api/storage/source-files`,rs=`${B}/api/storage/doc-default/{canonicalPath}`,os=`${B}/api/storage/doc/{workspaceId}/{canonicalPath}`,Qo="knowgrph-agent-ready-pages";var Zo=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${T}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${T}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${qe}>; rel="status"; type="application/health+json"`,`<${T}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${Xo}>; rel="describedby"; type="application/json"`].join(", "),en=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${k}.

## Discovery

- Crawl policy: ${k}robots.txt
- Sitemap: ${k}sitemap.xml
- API catalog: ${k}.well-known/api-catalog
- Auth.md registration instructions: ${Jo}auth.md
- Health: ${ze}
- MCP server card: ${k}.well-known/mcp/server-card.json
- A2A Agent Card: ${xt}
- Agent skills: ${k}.well-known/agent-skills/index.json
- LLM reference: ${k}llms.txt

## APIs

- Agent-ready status: ${ze}
- HTTP MCP: ${k}mcp
- Storage API: ${B}/api/storage/
- Source Files index: ${mr}
- Default Source File documents: ${rs}
- Workspace Source File documents: ${os}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes seven read-only tools for published Source Files, shared documents, data-first search/fetch, and agent-surface inspection.
- HTTP MCP and local stdio expose shared read-only prompt templates through \`prompts/list\` and \`prompts/get\` for Source Files research and agent-surface inspection.
- HTTP MCP and local stdio expose Source Files resource templates through \`resources/templates/list\`; \`kgdoc://source-file/{id}\` reads reuse the existing \`fetch\` executor.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared seven-tool WebMCP surface on \`${k}\` HTML routes.

## MCP Apps

- HTTP MCP advertises \`io.modelcontextprotocol/ui\` with \`text/html;profile=mcp-app\`.
- \`inspect_agent_surface\` links to the shared \`ui://knowgrph/agent-ready\` resource through \`_meta.ui.resourceUri\`.
- UI-linked tool descriptors expose no-auth \`securitySchemes\`, mirror them in \`_meta.securitySchemes\`, and set OpenAI widget accessibility metadata from the shared contract.
- \`resources/list\` and \`resources/read\` serve the inline, sandbox-friendly Knowgrph Agent Ready app resource while preserving text fallback and structured tool output; \`resources/templates/list\` exposes Source Files markdown reads under the standard MCP \`resources\` capability.
- The View initiates the MCP Apps \`ui/initialize\` handshake, sends \`ui/notifications/initialized\` and \`ui/notifications/size-changed\`, handles host context/tool input/result/cancel notifications, and calls the originating server through \`tools/call\`.
- \`inspect_agent_surface.structuredContent.mcpAppsServerReadiness\` exposes the native server-readiness model used by the View: app tool/resource binding, prompt discovery, resource-template discovery, output-schema and structured-content readiness, sandbox/security metadata, widget accessibility, Streamable HTTP JSON-RPC transport, local stdio transport, and read-only search/fetch retrieval.
`,tn=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),tt=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(r=>r.trim().startsWith("text/markdown")),"wantsMarkdown"),rn=n((e,t)=>{let r=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&r.headers.set("x-knowgrph-route-owner",o),a&&r.headers.set("x-knowgrph-route-tag",a),r},"withAgentReadyRouteHeaders");var kt=nr({defaultWorkspaceId:et}),cn=uo(),ln=fo(),pn=n((e,t="")=>{let r=String(e||"").trim(),o=String(t||"").trim();return o?qo(o,r):Vo(r)},"buildStorageDocPath"),nt=n(e=>String(e||"").trim(),"normalizeToolString");var ge=n((e,t="application/json; charset=utf-8")=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"jsonResponse"),Et=n((e,t)=>new Response(JSON.stringify(t,null,2),{status:e,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"jsonStatusResponse"),on=n((e,t={})=>new Response(null,{status:e,headers:{"cache-control":"no-store","access-control-allow-origin":"*",...t}}),"emptyStatusResponse"),rt=n((e,t)=>new Response(e,{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"textResponse"),ns=n(e=>rt(e,"text/html;profile=mcp-app; charset=utf-8"),"mcpAppsHtmlResponse"),as=n(e=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":"application/health+json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"healthResponse"),ss=n(e=>`User-agent: *
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
`,"buildRobotsTxt"),is=n(e=>`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${k}</loc>
    <lastmod>${Ae}</lastmod>
  </url>
  <url>
    <loc>${k}llms.txt</loc>
    <lastmod>${Ae}</lastmod>
  </url>
  <url>
    <loc>${e}.well-known/mcp/server-card.json</loc>
    <lastmod>${Ae}</lastmod>
  </url>
</urlset>
`,"buildSitemapXml"),cs=ss(`${k}sitemap.xml`),ls=is(k),un={linkset:[{anchor:k,"service-desc":[{href:`${k}.well-known/openapi.json`,type:"application/vnd.oai.openapi+json;version=3.1"}],"service-doc":[{href:`${k}llms.txt`,type:"text/plain"}],status:[{href:ze,type:"application/health+json"}],"service-meta":[{href:`${k}.well-known/mcp/server-card.json`,type:"application/json"},{href:xt,type:"application/json"}]}]},dn={openapi:"3.1.0",info:{title:"Knowgrph API",version:"0.1.0",description:"Agent discovery surface for the Knowgrph Cloudflare deployment."},servers:[{url:B,description:"Knowgrph Cloudflare deployment"}],paths:Ko({appBasePath:T,appA2aAgentCardPath:dr,healthPath:qe})},ot={resource:k,resource_name:"Knowgrph",authorization_servers:[B],scopes_supported:["knowgrph:read","knowgrph:source-files:read"],bearer_methods_supported:["header"],resource_documentation:`${k}llms.txt`},hr=`${B}/cdn-cgi/access`,xe={skill:`${B}/auth.md`,register_uri:`${k}agent/auth`,claim_uri:`${k}agent/auth/claim`,revocation_uri:`${k}agent/auth/revoke`,identity_types_supported:["anonymous","identity_assertion"],anonymous:{credential_types_supported:["api_key"]},identity_assertion:{assertion_types_supported:["urn:ietf:params:oauth:token-type:id-jag","verified_email"],credential_types_supported:["access_token","api_key"]},events_supported:["https://schemas.workos.com/events/agent/auth/identity/assertion/revoked"],registration_status:"metadata_published_runtime_user_mediated"},nn={issuer:B,resource:ot.resource,resource_name:ot.resource_name,authorization_servers:ot.authorization_servers,cloudflare_access_issuer:hr,authorization_endpoint:`${hr}/login`,token_endpoint:`${hr}/token`,jwks_uri:`${k}.well-known/http-message-signatures-directory`,response_types_supported:["code"],grant_types_supported:["authorization_code","client_credentials"],token_endpoint_auth_methods_supported:["client_secret_basic","private_key_jwt"],scopes_supported:ot.scopes_supported,agent_auth:xe},ps=`# Knowgrph auth.md

Knowgrph publishes agent registration metadata for the read-only agent surface at ${k}. Agents should first fetch ${B}/.well-known/oauth-protected-resource, follow its authorization_servers entry to ${B}/.well-known/oauth-authorization-server, and read the agent_auth block.

## Registration

- Register: ${xe.register_uri}
- Claim: ${xe.claim_uri}
- Revoke: ${xe.revocation_uri}
- Supported identity types: ${xe.identity_types_supported.join(", ")}
- Anonymous credentials: ${xe.anonymous.credential_types_supported.join(", ")}
- Identity assertion types: ${xe.identity_assertion.assertion_types_supported.join(", ")}
- Identity assertion credentials: ${xe.identity_assertion.credential_types_supported.join(", ")}
- Revocation events: ${xe.events_supported.join(", ")}
- Current runtime policy: user-mediated access through the existing Cloudflare Access/OAuth boundary; no separate MCP-only auth stack.
- Pipeline rule: agents must not bypass MainPanel -> FloatingPanel Chat -> KGC -> Canvas for user-mediated graph work; published HTTP MCP tools remain read-only until mutation auth and conflict semantics are implemented.`,mn={name:"Knowgrph Agent",description:"Agent-readable discovery, published-document retrieval, and WebMCP-ready metadata surface for Knowgrph.",version:"0.1.0",provider:{organization:"airvio / joohwee",url:k},url:`${k}mcp`,preferredTransport:"JSONRPC",supportedInterfaces:[{url:`${k}mcp`,protocolBinding:"JSONRPC",transportProtocol:"JSONRPC",description:"Primary machine interface for read-only discovery and source-file document access."},{url:mr,protocolBinding:"HTTP+JSON/REST",transportProtocol:"HTTP+JSON/REST",description:"Published source-files index and storage-backed document read surface."}],capabilities:{streaming:!1,pushNotifications:!1,stateTransitionHistory:!1,extendedAgentCard:!1},defaultInputModes:["text/plain","text/markdown","application/json"],defaultOutputModes:["text/plain","text/markdown","application/json"],skills:$o(kt)},ve={serverInfo:{name:"knowgrph",version:"0.1.0"},transport:{type:Pe,url:`${k}mcp`,stateless:!0,legacySse:!1},capabilities:{tools:kt.map(e=>({name:e.name,title:e.title,description:e.description,inputSchema:e.inputSchema,outputSchema:e.outputSchema,securitySchemes:e.securitySchemes,annotations:e.annotations,_meta:e._meta})),resources:{listChanged:!1},prompts:{listChanged:!1},...er()},prompts:cn,resourceTemplates:ln,clientSetups:rr({baseUrl:k,mcpUrl:`${k}mcp`,serverName:"knowgrph"}),links:{apiCatalog:`${k}.well-known/api-catalog`,skills:`${k}.well-known/agent-skills/index.json`,status:ze,agentCard:xt}},us=bt({appUrl:k,updatedAt:Ae}),yr=kt.map(e=>({name:e.webName,title:e.title,description:e.description,inputSchema:e.inputSchema,outputSchema:e.outputSchema,securitySchemes:e.securitySchemes,annotations:e.annotations,_meta:e._meta})),$e=n(e=>nt(kt.find(t=>t.name===e)?.webName),"findWebMcpToolName"),ds=$e(p.search),ms=$e(p.fetch),hs=$e(p.listSourceFiles),gs=$e(p.readSourceFile),fs=$e(p.readSharedDocument),ys=$e(p.inspectSharedDocumentStructure),ws=$e(p.inspectAgentSurface),Ss=`(() => {
  const root = globalThis;
  const siteOrigin = ${JSON.stringify(B)};
  const appBasePath = ${JSON.stringify(T)};
  const defaultWorkspaceId = ${JSON.stringify(et)};
  const toolDefinitions = ${JSON.stringify(yr)};
  const toolNames = ${JSON.stringify(yr.map(e=>e.name))};
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
  const createPublishedDocIdentityResolver = ${zo};
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
  const createAgentSurfaceInspectionExecutor = (args = {}) => {
    const baseUrl = String(args.baseUrl || "").replace(/\\/+$/, "");
    const toolName = String(args.toolName || "inspect_agent_surface").trim();
    if (!baseUrl) {
      throw new Error("baseUrl is required");
    }
    return async () => {
      const response = await fetch(baseUrl + "/mcp", {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json, text/event-stream" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "tools/call",
          params: { name: toolName, arguments: {} },
        }),
      });
      if (!response.ok) throw new Error("inspect_agent_surface MCP call failed with " + response.status);
      const payload = await response.json();
      if (payload && payload.error) throw new Error(payload.error.message || "inspect_agent_surface MCP call failed");
      const result = payload && payload.result;
      const structuredContent = result && result.structuredContent;
      if (!structuredContent || typeof structuredContent !== "object") {
        throw new Error("inspect_agent_surface MCP call did not return structured content");
      }
      return structuredContent;
    };
  };
  const createPublishedAgentReadyToolExecutors = ${vo};
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
      search: ${JSON.stringify(ds)},
      fetch: ${JSON.stringify(ms)},
      listSourceFiles: ${JSON.stringify(hs)},
      readSourceFile: ${JSON.stringify(gs)},
      readSharedDocument: ${JSON.stringify(fs)},
      inspectSharedDocumentStructure: ${JSON.stringify(ys)},
      inspectAgentSurface: ${JSON.stringify(ws)},
    },
    defaultWorkspaceId,
    publicBaseUrl: siteOrigin,
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
      toolName: ${JSON.stringify(p.inspectAgentSurface)},
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
})();`,_s=n(async e=>{if(!(e.headers.get("content-type")||"").toLowerCase().includes("text/html"))return e;let r=await e.text();if(yr.every(i=>r.includes(i.name)))return new Response(r,e);let o=`<script>${Ss}<\/script>`,a=r.includes("</head>")?r.replace("</head>",`${o}</head>`):`${r}${o}`,s=new Response(a,e);return s.headers.delete("content-length"),s},"injectWebMcpScript"),bs={search:p.search,fetch:p.fetch,listSourceFiles:p.listSourceFiles,readSourceFile:p.readSourceFile,readSharedDocument:p.readSharedDocument,inspectSharedDocumentStructure:p.inspectSharedDocumentStructure,inspectAgentSurface:p.inspectAgentSurface},Ps=n(async e=>{let t=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(r)].map(o=>o.toString(16).padStart(2,"0")).join("")},"sha256Hex"),hn=Lo(),As=Object.fromEntries(Ze.map(e=>[e.name,Ps(hn[e.name]||"")])),an=new Map(Ze.map(e=>[`${T}${e.path}`.replace(/\/+$/,""),hn[e.name]||""]));var gn=n(async()=>Do({appUrl:k,updatedAt:Ae,sha256ByName:As}),"agentSkillsIndex"),Rs={keys:[{kty:"OKP",crv:"Ed25519",kid:"knowgrph-agent-ready-2026-05-21",use:"sig",alg:"EdDSA",x:"11qYAYdkVKxA4G0wV47IxPtYfFVH_H7zmC2Di2PcvLU"}]},xs={protocolVersion:"2025-06-18",capabilities:{tools:{},resources:{},prompts:{listChanged:!1},...er()},serverInfo:ve.serverInfo},wr=ve.capabilities.tools,ks=[us],Es=cn,Cs=ln,fn=n(()=>({status:"pass",service:"knowgrph-agent-ready-pages",homepage:k,health:ze,updatedAt:Ae,checks:{linkHeaders:!0,markdownNegotiation:!0,httpMcp:!0,webMcp:!0,mcpApps:!0,commerce:{acp:!0,ucp:!0,mpp:!0,x402:!0},defaultWorkspaceId:et}}),"buildHealthStatusBody"),Ts=n(async()=>To({baseUrl:k,health:fn(),apiCatalog:un,openApi:dn,mcpServerCard:ve,agentCard:mn,agentSkills:await gn(),commerce:Yt({origin:B})}),"buildAgentSurfaceInspection"),vs=ar({toolNames:bs,defaultWorkspaceId:et,publicBaseUrl:B,buildStorageDocPath:pn,fetchSourceFilesIndexResponse:n(()=>fetch(`${Rt}${Yo()}`,{headers:{accept:"text/markdown"}}),"fetchSourceFilesIndexResponse"),fetchStorageMarkdownResponse:n(e=>fetch(`${Rt}${e}`,{headers:{accept:"text/markdown"}}),"fetchStorageMarkdownResponse"),resolveSharedDocumentInput:n((e={})=>Pt({shareToken:e?.shareToken,shareUrl:e?.shareUrl,appBasePath:T,baseUrl:B}),"resolveSharedDocumentInput"),inspectSharedDocumentStructure:Oo,buildAgentSurfaceInspection:Ts}),yn=n(e=>{try{let t=new URL(e,B);return Pt({shareUrl:`${t.pathname}${t.search}`,baseUrl:B,appBasePath:T})}catch{return null}},"resolvePublishedDocRequestIdentity"),Os=n(e=>Pt({shareUrl:String(e||""),baseUrl:B,appBasePath:T}),"resolvePublishedDocPathIdentity"),Is=n(async(e,t)=>{let r=new URL(pn(t.canonicalPath,t.workspaceId),Rt),o=await fetch(r,{method:"GET",headers:{accept:"text/markdown, text/plain;q=0.9, */*;q=0.1"}}),a=new Headers(o.headers),s=String(a.get("vary")||"");return a.set("vary",s?`${s}, Accept`:"Accept"),new Response(String(e.method||"").toUpperCase()==="HEAD"?null:o.body,{status:o.status,statusText:o.statusText,headers:a})},"proxyPublishedDocMarkdownResponse"),Ms=n(async e=>{try{let t=await e.json();return t&&typeof t=="object"?t:null}catch{return null}},"readJsonRpcRequest"),Re=n((e,t)=>Et(200,{jsonrpc:"2.0",id:e??null,result:t}),"jsonRpcResult"),Te=n((e,t,r)=>Et(200,{jsonrpc:"2.0",id:e??null,error:{code:t,message:r}}),"jsonRpcError"),Ns=n(e=>String(e.headers.get("accept")||"").toLowerCase().split(",").some(t=>t.trim().startsWith("text/event-stream")),"requestAcceptsEventStream"),gr=n((e,t)=>Object.prototype.hasOwnProperty.call(e,t),"hasOwnProperty"),wn=n(e=>{if(Array.isArray(e))return e.length>0&&e.every(wn);if(!e||typeof e!="object"||String(e.jsonrpc||"")!=="2.0")return!1;let t=typeof e.method=="string"&&e.method.length>0,r=gr(e,"id"),o=gr(e,"result")||gr(e,"error");return t&&!r||!t&&o},"isJsonRpcNotificationOrResponse"),Sn=n(async(e,t)=>{let r=vs[e];if(typeof r!="function")throw new Error(`unknown tool: ${e}`);return r(t)},"executeMcpTool"),Us=n(async e=>{let t=nt(e);if(t===ie)return or({appUrl:k,updatedAt:Ae,toolNames:wr.map(o=>o.name)});let r=yo(t);if(r){let o=await Sn(p.fetch,{id:r});return wo({uri:t,sourceFile:o})}throw new Error(`unknown resource: ${e}`)},"readMcpResource"),Ls=n(async e=>{let t=String(e.method||"GET").toUpperCase();if(t==="GET"||t==="HEAD")return Ns(e)?on(405,{allow:"POST"}):ge({ok:!0,transport:ve.transport,serverInfo:ve.serverInfo,capabilities:ve.capabilities});if(t!=="POST")return Et(405,{ok:!1,error:"unsupported_method"});let r=await Ms(e);if(!r)return Te(null,-32700,"Parse error");if(wn(r))return on(202);if(Array.isArray(r))return Te(null,-32600,"Batch JSON-RPC requests are not supported");switch(r.method){case"initialize":return Re(r.id,xs);case"tools/list":return Re(r.id,{tools:wr});case"prompts/list":return Re(r.id,{prompts:Es});case"resources/templates/list":return Re(r.id,{resourceTemplates:Cs});case"prompts/get":{let o=nt(r.params?.name),a=r.params?.arguments&&typeof r.params.arguments=="object"?r.params.arguments:{};if(!o)return Te(r.id,-32602,"Prompt name is required");try{return Re(r.id,mo(o,a))}catch(s){return Te(r.id,-32602,s instanceof Error?s.message:String(s))}}case"resources/list":return Re(r.id,{resources:ks});case"resources/read":{let o=nt(r.params?.uri);if(!o)return Te(r.id,-32602,"Resource URI is required");try{return Re(r.id,await Us(o))}catch(a){return Te(r.id,-32602,a instanceof Error?a.message:String(a))}}case"tools/call":{let o=nt(r.params?.name),a=r.params?.arguments&&typeof r.params.arguments=="object"?r.params.arguments:{};if(!o)return Te(r.id,-32602,"Tool name is required");try{let s=await Sn(o,a);return Re(r.id,{content:[{type:"text",text:typeof s?.markdown=="string"?s.markdown:JSON.stringify(s,null,2)}],structuredContent:s,isError:!1})}catch(s){return Re(r.id,{content:[{type:"text",text:s instanceof Error?s.message:String(s)}],isError:!0})}}default:return Te(r.id,-32601,"Method not found")}},"handleMcpTransport"),$s=n(()=>or({appUrl:k,updatedAt:Ae,toolNames:wr.map(e=>e.name)}).contents[0].text,"buildKnowgrphMcpAppHtmlBody");var Sr=n(e=>e===T||e===`${T}/`,"handlesKnowgrphRoot"),Ds=n(e=>Sr(e)||!!Os(e),"handlesKnowgrphHtmlSurface"),Ks=n(e=>{let t=new URL(e.url),r=t.pathname.replace(/\/+$/,"")||"/",o=yn(e.url);return r===qe?"health":r===`${T}/mcp`?"mcp":r===`${T}/robots.txt`?"robots":r===`${T}/sitemap.xml`?"sitemap":r===`${T}/auth.md`||r==="/auth.md"?"auth-md":r.startsWith(`${T}/.well-known/`)?"well-known":o?tt(e)?"shared-doc-markdown":"shared-doc-html":Sr(t.pathname)?tt(e)?"homepage-markdown":"homepage-html":"app-surface"},"resolveAgentReadyRouteTag"),fr=n((e,t)=>rn(t,{owner:Qo,tag:Ks(e)}),"withKnowgrphRouteHeaders"),sn=n(async e=>{let t=new URL(e.url),r=t.pathname.replace(/\/+$/,"")||"/",o=yn(e.url);if(o&&tt(e))return Is(e,o);if(Sr(t.pathname)&&tt(e))return tn(en);switch(r){case qe:return as(fn());case`${T}/mcp`:return Ls(e);case`${T}/robots.txt`:return rt(cs,"text/plain; charset=utf-8");case`${T}/sitemap.xml`:return rt(ls,"application/xml; charset=utf-8");case`${T}/auth.md`:case"/auth.md":return rt(ps,"text/markdown; charset=utf-8");case`${T}/.well-known/api-catalog`:return ge(un,"application/linkset+json; charset=utf-8");case`${T}/.well-known/openapi.json`:return ge(dn,"application/vnd.oai.openapi+json; charset=utf-8");case dr:return ge(mn);case`${T}/.well-known/oauth-protected-resource`:return ge(ot);case`${T}/.well-known/oauth-authorization-server`:return ge(nn);case`${T}/.well-known/openid-configuration`:return ge(nn);case`${T}/.well-known/mcp/server-card.json`:return ge(ve);case`${T}/.well-known/mcp/apps/knowgrph-agent-ready.html`:return ns($s());case`${T}/.well-known/mcp.json`:return ge(ve);case`${T}/.well-known/agent-skills/index.json`:return ge(await gn());case`${T}/.well-known/http-message-signatures-directory`:return ge(Rs);default:return an.has(r)?rt(an.get(r),"text/markdown; charset=utf-8"):null}},"routeResponse");async function Oe(e){let{env:t,request:r}=e,o=String(r.method||"GET").toUpperCase(),a=new URL(r.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(o==="POST"&&a.pathname.replace(/\/+$/,"")===`${T}/mcp`)return fr(r,await sn(r));if(o!=="GET"&&o!=="HEAD")return Et(405,{ok:!1,error:"unsupported_method"});let s=await sn(r);if(s){let d=fr(r,s);return o==="HEAD"?new Response(null,d):d}let i=await e.next();if(!Ds(a.pathname))return i;let c=o==="HEAD"?i:await _s(i),l=new Response(o==="HEAD"?null:c.body,c);return l.headers.set("link",Zo),fr(r,l)}n(Oe,"onRequest");async function _n(e){return Oe(e)}n(_n,"onRequest");async function bn(e){return Oe(e)}n(bn,"onRequest");async function Pn(e){return Oe(e)}n(Pn,"onRequest");var Hs=Object.freeze(new Set(["","80","443"])),js=Object.freeze([".local",".localhost",".internal"]),Bs=Object.freeze(new Set(["localhost"]));function De(e){return String(e||"").trim().toLowerCase()}n(De,"normalizeHostname");function Fs(e){let t=De(e);if(!/^\d{1,3}(\.\d{1,3}){3}$/.test(t))return!1;let r=t.split(".").map(o=>Number(o));return r.length!==4?!1:r.every(o=>Number.isInteger(o)&&o>=0&&o<=255)}n(Fs,"isIpv4Literal");function An(e){let[t,r,o,a]=e.split(".").map(s=>Number(s));return(t<<24|r<<16|o<<8|a)>>>0}n(An,"ipv4ToInt");function Gs(e,t,r){if(!Number.isInteger(r)||r<0||r>32)return!1;if(r===0)return!0;let o=4294967295<<32-r>>>0;return(e&o)===(t&o)}n(Gs,"inIpv4Cidr");function Ws(e){let t=De(e);return!t||!t.includes(":")?!1:/^[0-9a-f:]+$/i.test(t)}n(Ws,"isIpv6Literal");function zs(e){let t=De(e);return!!(!t||t==="::1"||t==="0:0:0:0:0:0:0:1"||t.startsWith("fc")||t.startsWith("fd")||/^fe[89ab]/i.test(t))}n(zs,"isBlockedIpv6");function qs(e,{blockedExact:t,blockedSuffixes:r}={}){let o=De(e);if(!o)return!0;let a=t||Bs;if(a instanceof Set&&a.has(o))return!0;let s=r||js;if(Array.isArray(s))for(let i of s){let c=De(i);if(c&&(o===c||o.endsWith(c)))return!0}return!1}n(qs,"isBlockedHostname");function Vs(e){let t=De(e);if(!t)return!0;if(Fs(t)){let r=An(t),o=[{base:"0.0.0.0",bits:8},{base:"10.0.0.0",bits:8},{base:"127.0.0.0",bits:8},{base:"169.254.0.0",bits:16},{base:"172.16.0.0",bits:12},{base:"192.168.0.0",bits:16},{base:"100.64.0.0",bits:10}];for(let a of o){let s=An(a.base);if(Gs(r,s,a.bits))return!0}return!1}return Ws(t)?zs(t):!1}n(Vs,"isBlockedIpLiteral");function Ct(e,{allowedPorts:t}={}){let r=String(e||"").trim();if(!r)throw new Error("invalid_url");let o;try{o=new URL(r)}catch{throw new Error("invalid_url")}if(o.protocol!=="http:"&&o.protocol!=="https:")throw new Error("invalid_url");if(o.username||o.password)throw new Error("invalid_url");let a=t||Hs,s=String(o.port||"");if(a instanceof Set&&!a.has(s))throw new Error("port_not_allowed");let i=De(o.hostname);if(!i)throw new Error("invalid_url");if(qs(i))throw new Error("blocked_host");if(Vs(i))throw new Error("blocked_host");return o}n(Ct,"parseAndValidateExternalUrl");function Tt(e){return String(e.headers.get("sec-fetch-site")||"").trim().toLowerCase()==="cross-site"}n(Tt,"shouldRejectCrossSiteFetch");var Ys={"content-type":"application/json; charset=utf-8","cache-control":"public, max-age=600"};function Ke(e,t={}){return new Response(JSON.stringify(e),{...t,headers:{...Ys,...t.headers||{}}})}n(Ke,"json");function vt(...e){for(let t of e){if(!t)continue;let r=String(t).trim();if(r)return r}return null}n(vt,"pickFirst");function Js(e){let t=e.slice(0,8e4),r=t.match(/<title[^>]*>([^<]*)<\/title>/i),o=t.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i),a=t.match(/<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i),s=t.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i),i=t.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i),c=t.match(/<meta[^>]+property=["']og:site_name["'][^>]*content=["']([^"']+)["'][^>]*>/i);return{title:vt(o?.[1],r?.[1]),description:vt(a?.[1],s?.[1]),image:vt(i?.[1]),siteName:vt(c?.[1])}}n(Js,"extractMeta");async function Rn(e){let t=e.request.url,r=new URL(t);if(r.searchParams.get("ping")==="1")return Ke({ok:!0,ping:!0});let o=r.searchParams.get("url")||"";if(Tt(e.request))return Ke({ok:!1,error:"forbidden"},{status:403,headers:{"cache-control":"no-store"}});let a;try{a=Ct(o)}catch{return Ke({ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}try{let s=await fetch(a.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkPreview/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),i=s.headers.get("content-type")||"";if(!s.ok)return Ke({ok:!1,error:"fetch_failed",status:s.status,url:a.toString()},{status:200,headers:{"cache-control":"no-store"}});if(!i.includes("text/html"))return Ke({ok:!0,url:a.toString(),domain:a.host,contentType:i,title:null,description:null,image:null,siteName:null});let c=await s.text(),l=Js(c);return Ke({ok:!0,url:a.toString(),domain:a.host,contentType:i,...l})}catch(s){return Ke({ok:!1,error:"exception",message:s?.message||String(s),url:a.toString()},{status:200,headers:{"cache-control":"no-store"}})}}n(Rn,"onRequestGet");var xn=35e4;function Xs(e){let t=e;return t=t.replace(/<script\b[\s\S]*?<\/script>/gi,""),t=t.replace(/<iframe\b[\s\S]*?<\/iframe>/gi,""),t=t.replace(/<object\b[\s\S]*?<\/object>/gi,""),t=t.replace(/<embed\b[\s\S]*?>/gi,""),t=t.replace(/<noscript\b[\s\S]*?<\/noscript>/gi,""),t=t.replace(/\son[a-z]+\s*=\s*"[^"]*"/gi,""),t=t.replace(/\son[a-z]+\s*=\s*'[^']*'/gi,""),t}n(Xs,"stripActiveContent");function Qs({url:e,title:t,innerHtml:r}){let o=t?String(t).slice(0,140):"Preview",a=String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");return`<!doctype html>
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
    <div class="content">${r}</div>
  </body>
</html>`}n(Qs,"buildWrapper");async function kn(e){let r=new URL(e.request.url).searchParams.get("url")||"";if(Tt(e.request))return new Response("Forbidden",{status:403,headers:{"cache-control":"no-store"}});let o;try{o=Ct(r)}catch(a){let s=a instanceof Error?a.message:"invalid_url";return new Response(s,{status:400,headers:{"cache-control":"no-store"}})}try{let a=await fetch(o.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkProxy/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),s=a.headers.get("content-type")||"";if(!a.ok)return new Response(`Fetch failed (${a.status})`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});if(!s.includes("text/html"))return new Response(`Unsupported content-type: ${s}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public, max-age=600"}});let i=await a.text();i.length>xn&&(i=i.slice(0,xn));let l=i.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()||o.host;i=Xs(i),/<base\s/i.test(i)||(i=i.replace(/<head([^>]*)>/i,`<head$1><base href="${o.origin}/">`));let h=Qs({url:o.toString(),title:l,innerHtml:i});return new Response(h,{status:200,headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600","content-security-policy":"default-src 'none'; img-src https: data:; style-src 'unsafe-inline' https:; font-src https: data:; frame-ancestors 'self';"}})}catch(a){return new Response(`Exception: ${a?.message||String(a)}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}})}}n(kn,"onRequestGet");var _r="api.openai.com",Ot="api.miromind.ai",It="apihub.agnes-ai.com",Mt="ark.ap-southeast.bytepluses.com",br="ark.eu-west.bytepluses.com",Cn=new Set(["localhost","127.0.0.1","0.0.0.0"]),_e=n(e=>String(e||"").trim().toLowerCase(),"normalizeHost"),fe=n((e,t)=>String(e.get(t)||"").trim(),"readHeader"),Tn=n(e=>Cn.has(_e(e)),"isLocalHost"),En=n(e=>{let t=String(e||"").trim();if(!t)return new Set;let r=new Set;return t.split(",").map(o=>_e(o)).filter(Boolean).forEach(o=>r.add(o)),r},"parseCsvSet"),vn=n((e,{includeOpenAi:t=!1,includeMiroMind:r=!1,includeAgnes:o=!1,includeBytePlus:a=!1}={})=>{let s=En(e.KNOWGRPH_INTEGRATION_ALLOWED_HOSTS),i=En(e.KNOWGRPH_CHAT_PROXY_ALLOWED_HOSTS),c=s.size?s:i,l=c.size?c:new Set([...Cn]);return t&&l.add(_r),r&&l.add(Ot),o&&l.add(It),a&&(l.add(Mt),l.add(br)),l},"parseAllowedHosts"),ae=n(e=>{let t=fe(e.headers,"origin");if(!t)return{};let r="";try{r=_e(new URL(t).host)}catch{return{}}let o=_e(new URL(e.url).host);return r===o||r.startsWith("localhost:")||r.startsWith("127.0.0.1:")?{"access-control-allow-origin":t,vary:"Origin"}:{}},"corsHeaders"),de=n((e,t,r)=>new Response(JSON.stringify(t),{status:r,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...ae(e)}}),"jsonResponse");var Nt={"content-type":"application/json; charset=utf-8","cache-control":"no-store"};function at(e,t,r=200){return new Response(JSON.stringify(t),{status:r,headers:{...Nt,...ae(e)}})}n(at,"jsonResponse");async function Zs(e){let t=new URL("/knowgrph/imports/hackamap/hackamap-graph.json",e.url),r=await fetch(t.toString(),{redirect:"follow"});return r.ok?await r.json():null}n(Zs,"fetchHackamapGraphJson");async function He(e,t){let r=new URL(t,e.url),o=await fetch(r.toString(),{redirect:"follow"});return o.ok?await o.json():null}n(He,"fetchHackamapJson");async function ei(e){let t=await He(e,"/knowgrph/imports/hackamap/hackamap_api_graph.json");return Nn(t)?t:null}n(ei,"fetchHackamapApiGraphJson");async function ti(e){let t=await He(e,"/knowgrph/imports/hackamap/hackamap_pipeline.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n(ti,"fetchHackamapPipelineJson");async function In(e){let t=await He(e,"/knowgrph/imports/hackamap/hackamap_query_presets.json");return Array.isArray(t)?t.filter(Boolean):[]}n(In,"fetchHackamapQueryPresetsJson");async function Mn(e){let t=await He(e,"/knowgrph/imports/hackamap/query-outputs/query-runs.manifest.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n(Mn,"fetchHackamapQueryRunsManifestJson");function Nn(e){return!e||typeof e!="object"||Array.isArray(e)?!1:Array.isArray(e.nodes)&&Array.isArray(e.edges)}n(Nn,"isApiGraphPayload");function Un(e,t){let r=String(e&&e.output&&e.output.per_table_prefix||e?.id||t?.preset||"").trim(),o=String(t?.output_suffix||"").trim();return o?`${r}-${o}`:r}n(Un,"buildHackamapTablePrefix");function Pr(e,t){if(!Array.isArray(e))return[];let r=[];for(let o of e){if(!o||typeof o!="object"||Array.isArray(o))continue;let a=String(o[t]||"").trim();a&&r.push(a)}return r}n(Pr,"collectRowIds");async function ri(e,t){let r=await He(e,t);return Array.isArray(r)?r.length:0}n(ri,"countHackamapQueryRows");async function oi(e,t,r){let o=Un(t,r);if(!o)return{};let a=["events","demos","sources","organizer","team","techstack"],s=await Promise.all(a.map(async i=>[i,await ri(e,`/knowgrph/imports/hackamap/query-outputs/${i}.${o}.query.json`)]));return Object.fromEntries(s.filter(([,i])=>i>0))}n(oi,"readHackamapRunTableCounts");function Ar(e){return Array.isArray(e)?e.map(Ar):!e||typeof e!="object"?e:Object.fromEntries(Object.entries(e).sort(([t],[r])=>String(t).localeCompare(String(r))).map(([t,r])=>[t,Ar(r)]))}n(Ar,"sortObjectKeys");function ni(e){try{return JSON.stringify(Ar(e))}catch{return""}}n(ni,"stableParamSignature");function ai(e){return typeof e=="string"?{value:e,label:e}:{value:e,label:JSON.stringify(e)}}n(ai,"toBuilderOption");function si(e,t){return e.map(r=>{let o=String(r?.id||"").trim();if(!o)return null;let a=r?.params&&typeof r.params=="object"&&!Array.isArray(r.params)?r.params:{},s=t.filter(l=>String(l?.preset||"").trim()===o),i=Array.from(new Set([...Object.keys(a),...s.flatMap(l=>l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?Object.keys(l.params):[])])).sort((l,d)=>String(l).localeCompare(String(d))),c=Object.fromEntries(i.map(l=>{let d=new Set,h=[],f=[a[l],...s.map(A=>A?.params&&typeof A.params=="object"&&!Array.isArray(A.params)?A.params[l]:void 0)];for(let A of f){if(typeof A>"u")continue;let _=ni(A);!_||d.has(_)||(d.add(_),h.push(ai(A)))}return[l,h]}));return{id:o,title:String(r?.title||o).trim(),params:a,param_keys:i,published_param_options:c}}).filter(Boolean)}n(si,"buildHackamapPresetRuntimeEntries");async function ii(e){let[t,r,o]=await Promise.all([ti(e),In(e),Mn(e)]),a=t&&typeof t=="object"?t.runtime||{}:{},s=String(a?.query_selection?.default_run_id||"").trim()||"enhanced",i=Array.isArray(o?.runs)?o.runs:[],c=(await Promise.all(i.map(async l=>{let d=String(l?.id||"").trim(),h=String(l?.preset||"").trim();if(!d)return null;let f=r.find(_=>String(_?.id||"").trim()===h),A=await oi(e,f,l);return{id:d,preset:h,title:String(l?.title||l?.id||"").trim(),params:l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?l.params:{},output_suffix:String(l?.output_suffix||"").trim(),is_default:d===s,table_counts:A}}))).filter(l=>l?.id);return{ok:!0,runtime:{...a&&typeof a=="object"?a:{},presets:si(r,c),runs:c}}}n(ii,"buildHackamapRuntimeMeta");async function ci(e,t){let r=String(t||"").trim();if(!r)return null;let[o,a]=await Promise.all([In(e),Mn(e)]),i=(Array.isArray(a?.runs)?a.runs:[]).find(x=>String(x?.id||"").trim()===r);if(!i)return null;let c=o.find(x=>String(x?.id||"").trim()===String(i?.preset||"").trim()),l=Un(c,i);if(!l)return null;let[d,h]=await Promise.all([He(e,`/knowgrph/imports/hackamap/query-outputs/events.${l}.query.json`),He(e,`/knowgrph/imports/hackamap/query-outputs/demos.${l}.query.json`)]),f=new Set(Pr(d,"id")),A=new Set(Pr(h,"id")),_=Pr(h,"event_id");for(let x of _)f.add(x);return{eventIds:f,demoIds:A}}n(ci,"readHackamapQueryRunSelection");function On(e,t,r){if(!r||!Nn(e))return e;if(r.eventIds.size===0&&r.demoIds.size===0)return{...e,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_run_filter_skipped:"no-event-demo-rows"}};let o=new Set;r.eventIds.forEach(c=>o.add(`Event:${c}`)),r.demoIds.forEach(c=>o.add(`Demo:${c}`));let a=Array.isArray(e.nodes)?e.nodes.filter(c=>o.has(String(c?.id||"").trim())):[],s=new Set(a.map(c=>String(c?.id||"").trim()).filter(Boolean)),i=Array.isArray(e.edges)?e.edges.filter(c=>s.has(String(c?.source||"").trim())&&s.has(String(c?.target||"").trim())):[];return{...e,nodes:a,edges:i,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_event_count:r.eventIds.size,selected_demo_count:r.demoIds.size,total_problems:a.filter(c=>String(c?.type||"").trim()==="problem").length,total_solutions:a.filter(c=>String(c?.type||"").trim()==="solution").length}}}n(On,"filterHackamapApiGraphPayloadByRun");function li(e){let t=Array.isArray(e?.nodes)?e.nodes:[],r=Array.isArray(e?.links)?e.links:[],o=[],a=new Set;for(let i of t){let c=String(i?.id||"").trim(),l=String(i?.type||"").trim(),d=String(i?.label||"").trim();if(!(!c||!l||!d)){if(l==="Event"){o.push({id:c,type:"problem",label:d,cluster:"Event"}),a.add(c);continue}l==="Demo"&&(o.push({id:c,type:"solution",label:d,cluster:"Demo"}),a.add(c))}}let s=[];for(let i of r){let c=String(i?.source||"").trim(),l=String(i?.target||"").trim(),d=String(i?.type||"").trim();!c||!l||d==="has_demo"&&(!a.has(c)||!a.has(l)||s.push({source:c,target:l,type:"has_demo",strength:.35}))}return{nodes:o,edges:s,meta:{source:"hackamap-graph.json:fallback",total_problems:o.filter(i=>i.type==="problem").length,total_solutions:o.filter(i=>i.type==="solution").length,...e?.content_signature?{content_signature:String(e.content_signature)}:{}}}}n(li,"toBipartiteApiPayload");async function Ln(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{...ae(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(r!=="GET"&&r!=="HEAD")return at(t,{ok:!1,error:"unsupported_method"},405);if(String(o.searchParams.get("view")||"").trim().toLowerCase()==="meta"){let h=await ii(t);return r==="HEAD"?new Response(null,{status:200,headers:{...Nt,...ae(t)}}):at(t,h,200)}let a=String(o.searchParams.get("run")||"").trim(),s=await ci(t,a),i=await ei(t);if(i){let h=On(i,a,s);return r==="HEAD"?new Response(null,{status:200,headers:{...Nt,...ae(t)}}):at(t,h,200)}let c=await Zs(t);if(!c)return at(t,{ok:!1,error:"missing_hackamap_graph",hint:"/knowgrph/imports/hackamap/{hackamap_api_graph.json,hackamap-graph.json} not found"},404);let l=li(c),d=On(l,a,s);return r==="HEAD"?new Response(null,{status:200,headers:{...Nt,...ae(t)}}):at(t,d,200)}n(Ln,"onRequest");var pi=!0,$n=600,Dn={"content-type":"application/json; charset=utf-8","cache-control":`public, max-age=${$n}`};function je(e,t,r={}){return new Response(JSON.stringify(t),{...r,headers:{...Dn,...r.headers||{},...ae(e)}})}n(je,"jsonResponse");function ui(e){try{let t=new URL(String(e));return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}n(ui,"isHttpUrl");function st(e){return String(e||"").trim().toLowerCase()}n(st,"normalizeHost");function Rr(e,{exact:t,suffixes:r}){let o=st(e);return o?!!(Array.isArray(t)&&t.some(a=>o===st(a))||Array.isArray(r)&&r.some(a=>o===st(a)||o.endsWith(`.${st(a)}`))):!1}n(Rr,"isHostMatch");function di(e){let t=st(e.hostname),r=e.toString();return Rr(t,{suffixes:["linkedin.com"]})?new URL(`https://www.linkedin.com/embeds/oembed.json?url=${encodeURIComponent(r)}`):Rr(t,{exact:["twitter.com","x.com"],suffixes:["twitter.com","x.com"]})?new URL(`https://publish.twitter.com/oembed?omit_script=1&url=${encodeURIComponent(r)}`):Rr(t,{exact:["reddit.com"],suffixes:["reddit.com"]})?new URL(`https://www.reddit.com/oembed?url=${encodeURIComponent(r)}`):null}n(di,"buildOembedUpstreamUrl");async function mi({upstreamUrl:e}){return await fetch(e.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; OEmbedProxy/1.0)",accept:"application/json,text/json;q=0.9,*/*;q=0.1"},redirect:"follow",cf:{cacheTtl:$n,cacheEverything:!0}})}n(mi,"fetchJsonUpstream");async function Kn(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{...ae(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD"].includes(r))return je(t,{ok:!1,error:"unsupported_method"},{status:405});if(o.searchParams.get("ping")==="1")return je(t,{ok:!0,ping:!0});if(pi)return je(t,{ok:!1,error:"disabled_by_policy"},{status:200,headers:{"cache-control":"no-store"}});let a=o.searchParams.get("url")||"";if(!ui(a))return je(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}});let s;try{s=new URL(a)}catch{return je(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}let i=di(s);if(!i)return je(t,{ok:!1,error:"unsupported_provider"},{status:400,headers:{"cache-control":"no-store"}});let c=await mi({upstreamUrl:i}),l=new Headers(c.headers);l.delete("content-length"),l.set("cache-control",c.ok?Dn["cache-control"]:"no-store");for(let[h,f]of Object.entries(ae(t)))l.set(h,f);if(r==="HEAD")return new Response(null,{status:c.status,headers:l});let d=await c.text();try{JSON.parse(d)}catch{return je(t,{ok:!1,error:"invalid_upstream_json",status:c.status},{status:502,headers:{"cache-control":"no-store"}})}return l.set("content-type","application/json; charset=utf-8"),new Response(d,{status:c.status,headers:l})}n(Kn,"onRequest");var Hn="/__chat_proxy",Ut="agnes-ai",Lt="byteplus-modelark",$t="miromind",hi=n(e=>{let t=_e(e);return t==="openai"?"openai":t===Lt||t==="byteplus"?Lt:t===$t||t==="miromind-api"?$t:t===Ut||t==="agnes"||t==="agnes-ai-api"?Ut:t},"normalizeProviderId"),gi=n(e=>_e(e)===It,"isAgnesHost"),fi=n(e=>{let t=_e(e);return t===Mt||t===br},"isBytePlusHost"),yi=n(e=>_e(e)===Ot,"isMiroMindHost"),wi=n(({provider:e,requestedUpstream:t,env:r})=>e==="openai"?"https://api.openai.com":e===$t?t||`https://${Ot}`:e===Ut?t||`https://${It}`:e===Lt?t||String(r.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim()||`https://${Mt}`:t||String(r.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim(),"pickUpstreamBase");async function jn(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=new URL(t.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":fe(t.headers,"origin")||"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD","POST"].includes(o))return de(t,{ok:!1,error:"Unsupported method"},405);let s=hi(fe(t.headers,"x-kg-chat-provider")),i=wi({provider:s,requestedUpstream:fe(t.headers,"x-kg-chat-upstream"),env:r});if(!i)return de(t,{ok:!1,error:"Missing chat proxy upstream configuration"},500);let c;try{c=new URL(i)}catch{return de(t,{ok:!1,error:"Invalid chat proxy upstream configuration"},500)}let l=vn(r,{includeOpenAi:!0,includeMiroMind:!0,includeAgnes:!0,includeBytePlus:!0}),d=_e(c.hostname);if(!l.has(d))return de(t,{ok:!1,error:"Chat proxy upstream host is not allowed"},403);if(!Tn(d)&&c.protocol!=="https:")return de(t,{ok:!1,error:"Chat proxy requires HTTPS for non-local upstream hosts"},403);let h=s==="openai"||d===_r,f=s===$t||yi(d),A=s===Ut||gi(d),_=s===Lt||fi(d),x=fe(t.headers,"x-kg-chat-api-key"),H=String(r.KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY||r.OPENAI_API_KEY||"").trim(),U=String(r.KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY||r.MIROMIND_API_KEY||"").trim(),D=String(r.KNOWGRPH_CHAT_PROXY_AGNES_API_KEY||r.AGNES_API_KEY||"").trim(),re=String(r.KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY||r.BYTEPLUS_API_KEY||"").trim(),F=(x||H).slice(0,512),C=(x||U).slice(0,512),O=(x||D).slice(0,512),Y=(x||re).slice(0,512),L=_?Y:A?O:f?C:F;if(h&&!F)return de(t,{ok:!1,error:"Missing OpenAI API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY or OPENAI_API_KEY)"},401);if(f&&!L)return de(t,{ok:!1,error:"Missing MiroMind API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY or MIROMIND_API_KEY)"},401);if(A&&!L)return de(t,{ok:!1,error:"Missing Agnes API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_AGNES_API_KEY or AGNES_API_KEY)"},401);if(_&&!L)return de(t,{ok:!1,error:"Missing BytePlus API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY or BYTEPLUS_API_KEY)"},401);if(o==="POST"&&!fe(t.headers,"content-type").toLowerCase().includes("application/json"))return de(t,{ok:!1,error:"Chat proxy expects application/json payloads"},415);let J=a.pathname.startsWith(Hn)&&a.pathname.slice(Hn.length)||"/v1/chat/completions",I=J.startsWith("/")?J:`/${J}`,M=new URL(`${I}${a.search||""}`,c),j=new Headers,oe=fe(t.headers,"content-type"),le=fe(t.headers,"accept");oe&&j.set("content-type",oe),le&&j.set("accept",le),(h||f||A||_)&&j.set("authorization",`Bearer ${L}`);let ye=fe(t.headers,"x-client-request-id").slice(0,512);ye&&j.set("x-client-request-id",ye);let P=new AbortController,y=Number(r.KNOWGRPH_CHAT_PROXY_TIMEOUT_MS),S=Number.isFinite(y)?Math.max(5e3,Math.min(18e4,Math.floor(y))):9e4,u=setTimeout(()=>P.abort(),S);try{let m=await fetch(M.toString(),{method:o,headers:j,body:o==="GET"||o==="HEAD"?void 0:t.body,signal:P.signal,redirect:"follow"}),g=new Headers(m.headers);g.delete("content-length"),g.delete("www-authenticate"),g.set("cache-control","no-store");let b=fe(t.headers,"origin");return b&&(g.set("access-control-allow-origin",b),g.set("vary","Origin")),o==="HEAD"?new Response(null,{status:m.status,statusText:m.statusText,headers:g}):new Response(m.body,{status:m.status,statusText:m.statusText,headers:g})}catch(m){let g=m&&typeof m=="object"&&"message"in m?String(m.message||""):"",b=P.signal.aborted||/aborted|timeout/i.test(g);return de(t,{ok:!1,error:g||"Failed to reach chat upstream"},b?504:502)}finally{clearTimeout(u)}}n(jn,"onRequest");function Si(e){let t=e.map(r=>r==null?"":typeof r=="boolean"?r?"1":"0":typeof r=="number"?Number.isFinite(r)?String(r):"":String(r)).join("|");return`rich-media-preview:${Ye(t)}`}n(Si,"buildRichMediaPreviewSemanticKey");var Fn="png";function Kt(e){let t=typeof e=="number"?e:Number(String(e??"").trim());if(!Number.isFinite(t))return null;let r=Math.max(0,Math.floor(t));return Number.isFinite(r)?r:null}n(Kt,"normalizeRemoteVideoFrameSeconds");function Ht(e){let t=String(e||"").trim().toLowerCase();return t==="jpg"||t==="jpeg"?"jpg":"png"}n(Ht,"normalizeRemoteVideoFrameFormat");function xr(e){let t=String(e.sourceUrl||"").trim(),r=Kt(e.timeSeconds)??0,o=Ht(e.format||Fn);return Si(["remote-video-frame",t,r,o])}n(xr,"buildRemoteVideoFrameSemanticKey");function Gn(e){let t=Kt(e.timeSeconds)??0,r=Ht(e.format||Fn),o=xr({...e,timeSeconds:t,format:r});return`frame-${o.split(":").pop()||Ye(o)}-t${t}.${r}`}n(Gn,"buildRemoteVideoFrameFileName");var Dt=n(e=>{let t=String(e||"").trim();return t&&/^[A-Za-z0-9_-]{6,128}$/.test(t)?t:null},"normalizeYouTubeIdLikeValue"),Bn=n(e=>{try{let t=new URL(String(e||"").trim()),r=String(t.hostname||"").toLowerCase();if(r==="youtu.be"||r.endsWith(".youtu.be")){let o=t.pathname.replace(/^\/+/,"").split("/")[0]?.trim()||"";return Dt(o)}if(r==="youtube.com"||r.endsWith(".youtube.com")||r==="youtube-nocookie.com"||r.endsWith(".youtube-nocookie.com")){let o=String(t.searchParams.get("v")||"").trim();if(o)return Dt(o);let a=t.pathname.split("/").filter(Boolean),s=a[0]||"",i=a[1]||"";if((s==="embed"||s==="shorts"||s==="live")&&i)return Dt(i);if(s==="watch"){let c=String(t.searchParams.get("v")||"").trim();return Dt(c)}}}catch{return null}return null},"readYouTubeIdFromUrl");function _i(e){let t=String(e||"").trim().replace(/^<|>$/g,"").trim();for(;/[),.;:!?]$/.test(t);){let r=t.slice(0,-1).trim();if(!r)break;let o=Bn(t),a=Bn(r);if(!a||o&&o!==a)break;t=r}return t}n(_i,"stripYouTubeUrlTrailingPunctuation");function Wn(e){let t=n(r=>{let o=String(r||"").trim();if(!o)return null;if(/^\d+$/.test(o))return Number(o);let a=o.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i);if(!a)return null;let s=a[1]?Number(a[1]):0,i=a[2]?Number(a[2]):0,c=a[3]?Number(a[3]):0,l=s*3600+i*60+c;return l>0&&Number.isFinite(l)?l:null},"parseChunk");try{let r=new URL(_i(e)),o=r.searchParams.get("t")||r.searchParams.get("start")||"",a=r.hash&&new URLSearchParams(r.hash.replace(/^#/,"")).get("t")||"";return t(o)??t(a)}catch{return null}}n(Wn,"parseYouTubeStartSeconds");var bi="/image/knowgrph/video-frame",Pi=4096,Ai=720*60,Ri=/^frame-[a-f0-9]+-t\d+\.(?:png|jpg)$/i,Tr={"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"accept, content-type"},Cr=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),kr=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:JSON.stringify(e),{status:t,headers:{...Tr,"content-type":"application/json; charset=utf-8","cache-control":"no-store"}}),"jsonResponse"),Er=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:e,{status:t,headers:{...Tr,"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}}),"textResponse"),xi=n((e,t)=>e===t||e.endsWith(`.${t}`),"hostMatches"),ki=n(e=>{let t=Cr(e?.KG_VIDEO_FRAME_ALLOWED_HOSTS);return t?t.split(",").map(r=>Cr(r).toLowerCase()).filter(Boolean):["youtube.com","youtu.be","youtube-nocookie.com","bilibili.com","b23.tv"]},"readAllowedHosts"),Ei=n(e=>Cr(e).replace(/^<|>$/g,"").trim(),"unwrapUrlInput"),Ci=n((e,t)=>{try{let r=new URL(e);if(r.protocol!=="https:"&&r.protocol!=="http:")return!1;let o=r.hostname.toLowerCase();return ki(t).some(a=>xi(o,a))}catch{return!1}},"isAllowedSourceUrl"),Ti=n((e,t)=>{let r=new URL(e.url),o=Ei(r.searchParams.get("url")||"");if(!o)return{error:"Missing url parameter"};if(o.length>Pi)return{error:"Video URL is too long"};if(!Ci(o,t))return{error:"Video frame extraction is limited to supported remote video hosts"};let a=Kt(r.searchParams.get("time"))??Wn(o);if(a==null)return{error:"Missing time parameter"};let s=Math.min(Ai,Math.max(0,a)),i=Ht(r.searchParams.get("format")||"png"),c=Gn({sourceUrl:o,timeSeconds:s,format:i});if(!Ri.test(c))return{error:"Invalid frame cache key"};let l=`${bi}/${c}`;return{sourceUrl:o,timeSeconds:s,format:i,fileName:c,publicUrl:l,semanticKey:xr({sourceUrl:o,timeSeconds:s,format:i})}},"readFrameRequest"),vi=n(async(e,t,r)=>{let o=new URL(t,e.request.url),a=new Request(o.toString(),{method:r});return typeof e.env?.ASSETS?.fetch=="function"?await e.env.ASSETS.fetch(a):await fetch(a)},"fetchStaticAsset"),Oi=n(e=>`Frame has not been generated yet. Run the local video-frame extractor and publish ${e.publicUrl}.`,"missingFrameMessage"),Ii=n((e,t)=>{let r=new Headers;r.set("content-type",t.format==="jpg"?"image/jpeg":"image/png"),r.set("cache-control","public, max-age=31536000, immutable"),r.set("access-control-allow-origin","*");let o=e.headers.get("content-length");o&&r.set("content-length",o);let a=e.headers.get("etag");return a&&r.set("etag",a),r},"imageResponseHeaders");async function zn(e){let t=e.request;if(t.method==="OPTIONS")return new Response(null,{status:204,headers:Tr});if(t.method!=="GET"&&t.method!=="HEAD")return Er("Method not allowed",405,t.method);let r=new URL(t.url).searchParams.get("emit")==="json",o=Ti(t,e.env||{});if("error"in o)return r?kr({ok:!1,error:o.error},400,t.method):Er(o.error,400,t.method);let a=r&&t.method!=="HEAD"?"GET":r||t.method==="HEAD"?"HEAD":"GET",s=await vi(e,o.publicUrl,a);if(!s.ok){let i=Oi(o);return r?kr({ok:!1,error:i,publicUrl:o.publicUrl,semanticKey:o.semanticKey},404,t.method):Er(i,404,t.method)}if(r){let i=Number(s.headers.get("content-length")||0);return(!Number.isFinite(i)||i<=0)&&t.method!=="HEAD"&&(i=(await s.arrayBuffer()).byteLength),kr({ok:!0,imageUrl:o.publicUrl,publicUrl:o.publicUrl,semanticKey:o.semanticKey,cached:!0,bytes:Number.isFinite(i)?Math.max(0,Math.floor(i)):0,timeSeconds:o.timeSeconds,format:o.format},200,t.method)}return new Response(t.method==="HEAD"?null:s.body,{status:200,headers:Ii(s,o)})}n(zn,"onRequest");var qn={"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"content-type"},jt=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:JSON.stringify(e),{status:t,headers:qn}),"jsonResponse"),V=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),Mi=n(e=>{try{let t=new URL(String(e||"").trim());if(/youtu\.be$/i.test(t.hostname))return V(t.pathname.split("/").filter(Boolean)[0]);if(/youtube\.com$/i.test(t.hostname)||/youtube-nocookie\.com$/i.test(t.hostname)){let r=V(t.searchParams.get("v"));if(r)return r;let o=t.pathname.split("/").filter(Boolean),a=o.findIndex(s=>["embed","shorts","live"].includes(s));if(a>=0)return V(o[a+1])}}catch{}return""},"readVideoId"),Ni=n((e,t)=>{let r=e.indexOf(t);if(r<0)return null;let o=e.indexOf("{",r);if(o<0)return null;let a=0,s=!1,i=!1;for(let c=o;c<e.length;c+=1){let l=e[c];if(s){i?i=!1:l==="\\"?i=!0:l==='"'&&(s=!1);continue}if(l==='"')s=!0;else if(l==="{")a+=1;else if(l==="}"&&(a-=1,a===0))return e.slice(o,c+1)}return null},"extractJsonAfter"),Ui=n(e=>{for(let t of["ytInitialPlayerResponse =","ytInitialPlayerResponse="]){let r=Ni(e,t);if(r)try{return JSON.parse(r)}catch{}}return null},"parsePlayerResponse"),Li=n((e,t)=>{let r=V(t||"en").toLowerCase();return e.find(o=>V(o.languageCode).toLowerCase()===r)||e.find(o=>V(o.languageCode).toLowerCase().startsWith(r.split("-")[0]))||e.find(o=>V(o.kind)!=="asr")||e[0]||null},"pickCaptionTrack"),$i=n(e=>{let t=new URL(e);return t.searchParams.set("fmt","json3"),t.toString()},"withJsonCaptionFormat"),Di=n(e=>(Array.isArray(e?.events)?e.events:[]).map(r=>{let o=Array.isArray(r.segs)?V(r.segs.map(i=>i?.utf8||"").join("")):"",a=Number(r.tStartMs)/1e3,s=Number(r.dDurationMs||0)/1e3;return o&&Number.isFinite(a)?{text:o,start:a,duration:Number.isFinite(s)?s:0}:null}).filter(Boolean),"parseCaptionJson3"),Ki=n(e=>String(e||"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'"),"decodeXmlText"),Hi=n(e=>{let t=[],r=/<text\b([^>]*)>([\s\S]*?)<\/text>/gi,o=null;for(;o=r.exec(String(e||""));){let a=o[1]||"",s=Number(a.match(/\bstart="([^"]+)"/i)?.[1]),i=Number(a.match(/\bdur="([^"]+)"/i)?.[1]||0),c=V(Ki(o[2]||""));c&&Number.isFinite(s)&&t.push({text:c,start:s,duration:Number.isFinite(i)?i:0})}return t},"parseCaptionXml"),ji=n((e,t)=>{let r=String(e||"").trim();if(!r)return[];if(String(t||"").toLowerCase().includes("json")||r.startsWith("{")||r.startsWith("["))try{return Di(JSON.parse(r))}catch{return[]}return Hi(r)},"parseCaptionResponseText"),Bi=n(e=>{let t=Math.max(0,Math.floor(Number(e)||0)),r=Math.floor(t/60),o=String(t%60).padStart(2,"0");return`${r}:${o}`},"formatTimestamp"),Fi=n((e,t)=>{let r=new URL(e);return r.searchParams.set("t",`${Math.max(0,Math.floor(Number(t)||0))}s`),r.toString()},"timestampUrl"),Gi=n(({title:e,sourceUrl:t,videoId:r,authorName:o,thumbnailUrl:a,segments:s})=>[`# ${e||`YouTube ${r}`}`,"",`Video ID: ${r}`,o?`Author: ${o}`:"",`Source: [${t}](${t})`,a?`[![${e||r}](${a})](${t})`:"","",s.length>0?"## Transcript":"## Video Source","",...s.length>0?s.map(i=>`[${Bi(i.start)}](${Fi(t,i.start)}) ${i.text}`):["Captions were not available from the source at import time.","The source URL, title, author, and thumbnail remain available for downstream storyboard reconstruction."],""].filter(i=>i!=="").join(`
`),"buildMarkdown"),vr=n(({videoId:e,sourceUrl:t,title:r,authorName:o,thumbnailUrl:a,lang:s,languageCode:i,segments:c,captionStatus:l})=>{let d={type:"rag:YouTubeTranscript",video_id:e,source_url:t,title:r,author_name:o,thumbnail_url:a,language_code:V(i)||s,caption_status:l,segment_count:c.length,duration:c.reduce((h,f)=>Math.max(h,f.start+f.duration),0),segments:c};return{ok:!0,name:`youtube-${e.toLowerCase()}.md`,markdown:Gi({title:r,sourceUrl:t,videoId:e,authorName:o,thumbnailUrl:a,segments:c}),transcript:d}},"buildPayload");async function Wi({sourceUrl:e,lang:t="en",fetchImpl:r=fetch}){let o=Mi(e);if(!o)return{ok:!1,error:"unsupported_youtube_url"};let a=`https://www.youtube.com/watch?v=${encodeURIComponent(o)}`,[s,i]=await Promise.all([r(`https://www.youtube.com/oembed?url=${encodeURIComponent(a)}&format=json`,{headers:{accept:"application/json"}}).catch(()=>null),r(a,{headers:{accept:"text/html,application/xhtml+xml","accept-language":"en-US,en;q=0.9","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}})]),c=s?.ok?await s.json().catch(()=>({})):{},l=i.ok?Ui(await i.text()):null,d=V(c.title)||V(l?.videoDetails?.title)||`YouTube ${o}`,h=V(c.author_name)||V(l?.videoDetails?.author),f=V(c.thumbnail_url)||`https://i.ytimg.com/vi/${o}/hqdefault.jpg`;if(!i.ok)return vr({videoId:o,sourceUrl:a,title:d,authorName:h,thumbnailUrl:f,lang:t,languageCode:t,segments:[],captionStatus:`watch-fetch-${i.status}`});let A=l?.captions?.playerCaptionsTracklistRenderer?.captionTracks||[],_=Li(Array.isArray(A)?A:[],t);if(!_?.baseUrl)return vr({videoId:o,sourceUrl:a,title:d,authorName:h,thumbnailUrl:f,lang:t,languageCode:t,segments:[],captionStatus:"captions-unavailable"});let x=await r($i(_.baseUrl),{headers:{accept:"application/json,text/xml,text/plain,*/*","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}}).catch(()=>null),H=x?await x.text().catch(()=>""):"",U=x?.ok?ji(H,x.headers.get("content-type")):[],D=U.length>0?"available":x?.ok?"captions-empty":`captions-fetch-${x?.status||"failed"}`;return vr({videoId:o,sourceUrl:a,title:d,authorName:h,thumbnailUrl:f,lang:t,languageCode:_.languageCode,segments:U,captionStatus:D})}n(Wi,"buildYouTubeTranscriptPayload");async function Vn(e){let t=e.request,r=String(t.method||"GET").toUpperCase();if(r==="OPTIONS")return new Response(null,{status:204,headers:qn});if(r!=="GET"&&r!=="HEAD"&&r!=="POST")return jt({ok:!1,error:"unsupported_method"},405,r);let o=new URL(t.url),a=V(o.searchParams.get("url")),s=V(o.searchParams.get("lang"))||"en";if(!a)return jt({ok:!1,error:"missing_url"},400,r);try{let i=await Wi({sourceUrl:a,lang:s});return jt(i,i.ok?200:502,r)}catch(i){let c=i&&typeof i=="object"&&"message"in i?V(i.message):"";return jt({ok:!1,error:c||"youtube_conversion_failed"},502,r)}}n(Vn,"onRequest");async function Yn(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase();if(r==="OPTIONS")return new Response(null,{status:204,headers:{...ae(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(r!=="GET"&&r!=="HEAD")return new Response(JSON.stringify({ok:!1,error:"unsupported_method"}),{status:405,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...ae(t)}});let o={ok:!0,service:"singabldr-pages",ts:new Date().toISOString()},a={"content-type":"application/json; charset=utf-8","cache-control":"no-store",...ae(t)};return r==="HEAD"?new Response(null,{status:200,headers:a}):new Response(JSON.stringify(o),{status:200,headers:a})}n(Yn,"onRequest");var Ie="https://airvio.co";var ce="/knowgrph",ke=`${Ie}${ce}/`,zi=`${Ie}/`;var Xn=`${ce}/health`,Jn=`${Ie}${Xn}`,Qn="/.well-known/agent-card.json",Ou=`${ce}/.well-known/agent-card.json`,qi=`${Ie}${Qn}`,Vi=`${Ie}/api/storage/source-files`,Yi=`${Ie}/api/storage/doc-default/{canonicalPath}`,Ji=`${Ie}/api/storage/doc/{workspaceId}/{canonicalPath}`;var Or="root-agent-ready-pages",Zn=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${ce}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${ce}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${Xn}>; rel="status"; type="application/health+json"`,`<${ce}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${Qn}>; rel="describedby"; type="application/json"`].join(", "),ea=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${ke}.

## Discovery

- Crawl policy: ${ke}robots.txt
- Sitemap: ${ke}sitemap.xml
- API catalog: ${ke}.well-known/api-catalog
- Auth.md registration instructions: ${zi}auth.md
- Health: ${Jn}
- MCP server card: ${ke}.well-known/mcp/server-card.json
- A2A Agent Card: ${qi}
- Agent skills: ${ke}.well-known/agent-skills/index.json
- LLM reference: ${ke}llms.txt

## APIs

- Agent-ready status: ${Jn}
- HTTP MCP: ${ke}mcp
- Storage API: ${Ie}/api/storage/
- Source Files index: ${Vi}
- Default Source File documents: ${Yi}
- Workspace Source File documents: ${Ji}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes seven read-only tools for published Source Files, shared documents, data-first search/fetch, and agent-surface inspection.
- HTTP MCP and local stdio expose shared read-only prompt templates through \`prompts/list\` and \`prompts/get\` for Source Files research and agent-surface inspection.
- HTTP MCP and local stdio expose Source Files resource templates through \`resources/templates/list\`; \`kgdoc://source-file/{id}\` reads reuse the existing \`fetch\` executor.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared seven-tool WebMCP surface on \`${ke}\` HTML routes.

## MCP Apps

- HTTP MCP advertises \`io.modelcontextprotocol/ui\` with \`text/html;profile=mcp-app\`.
- \`inspect_agent_surface\` links to the shared \`ui://knowgrph/agent-ready\` resource through \`_meta.ui.resourceUri\`.
- UI-linked tool descriptors expose no-auth \`securitySchemes\`, mirror them in \`_meta.securitySchemes\`, and set OpenAI widget accessibility metadata from the shared contract.
- \`resources/list\` and \`resources/read\` serve the inline, sandbox-friendly Knowgrph Agent Ready app resource while preserving text fallback and structured tool output; \`resources/templates/list\` exposes Source Files markdown reads under the standard MCP \`resources\` capability.
- The View initiates the MCP Apps \`ui/initialize\` handshake, sends \`ui/notifications/initialized\` and \`ui/notifications/size-changed\`, handles host context/tool input/result/cancel notifications, and calls the originating server through \`tools/call\`.
- \`inspect_agent_surface.structuredContent.mcpAppsServerReadiness\` exposes the native server-readiness model used by the View: app tool/resource binding, prompt discovery, resource-template discovery, output-schema and structured-content readiness, sandbox/security metadata, widget accessibility, Streamable HTTP JSON-RPC transport, local stdio transport, and read-only search/fetch retrieval.
`,ta=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),ra=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(r=>r.trim().startsWith("text/markdown")),"wantsMarkdown"),Ir=n((e,t)=>{let r=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&r.headers.set("x-knowgrph-route-owner",o),a&&r.headers.set("x-knowgrph-route-tag",a),r},"withAgentReadyRouteHeaders");var Nr="Agent-actionable chat-to-canvas knowledge graph workspace",it='<main id="root"></main>',Xi=/<(?:main|div)\s+id=["']root["']\s*><\/(?:main|div)>/i,Qi=n(e=>{let t=/<script>([\s\S]*?)<\/script>/g;for(let r of String(e||"").matchAll(t)){let o=r[1]||"";if(o.includes("createWebMcpLifecycleController")&&o.includes("toolDefinitions"))return o}return""},"extractWebMcpScript"),oa=n(()=>({"content-type":"text/html; charset=utf-8","cache-control":"no-store, no-cache, no-transform, must-revalidate, max-age=0","access-control-allow-origin":"*",link:Zn}),"rootHtmlHeaders"),Mr=n((e,t)=>String(e||"").includes("</head>")?String(e||"").replace("</head>",`${t}</head>`):`${String(e||"")}${t}`,"injectIntoHead"),na=n(e=>String(e||"").replace(Xi,it),"canonicalizeRootMount"),Bt=n(()=>`<main id="knowgrph-root-fallback" data-knowgrph-root-fallback="visible" aria-label="Knowgrph root alias" style="position:fixed;inset:0;z-index:2147483000;display:grid;place-content:center;gap:1rem;padding:2rem;box-sizing:border-box;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#101820;color:#f4f7fb;text-align:center">
      <h1 style="margin:0;font-size:clamp(2.25rem,8vw,5.5rem);line-height:1;font-weight:760">Knowgrph</h1>
      <p style="margin:0 auto;max-width:42rem;font-size:clamp(1rem,2.2vw,1.35rem);line-height:1.55;color:#d6e1ea">${Nr}</p>
      <p style="margin:0"><a href="${ce}/" style="display:inline-flex;align-items:center;justify-content:center;min-height:2.75rem;padding:0 1.05rem;border:1px solid #7db3ff;border-radius:8px;color:#f8fbff;text-decoration:none;background:#1f5fa8">Open Knowgrph</a></p>
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
    <\/script>`,"rootVisibleFallbackMarkup"),Zi=n(e=>{let t=na(e);return/<main\s+id=["']knowgrph-root-fallback["']/i.test(t)?t:t.includes(it)?t.replace(it,`${it}
    ${Bt()}`):t.includes("</body>")?t.replace("</body>",`    ${Bt()}
  </body>`):`${t}
${Bt()}`},"injectRootVisibleFallback"),ec=n(e=>{let t=na(e);return/<meta\s+name=["']description["'][^>]*>/i.test(t)?t=t.replace(/<meta\s+name=["']description["'][^>]*>/i,`<meta name="description" content="${Nr}" />`):t=Mr(t,`    <meta name="description" content="${Nr}" />
`),/<link\s+rel=["']canonical["'][^>]*>/i.test(t)||(t=Mr(t,`    <link rel="canonical" href="${ce}/" />
`)),/<meta\s+name=["']x-knowgrph-root-alias["'][^>]*>/i.test(t)||(t=Mr(t,`    <meta name="x-knowgrph-root-alias" content="${ce}/" />
`)),Zi(t)},"rewriteRootAppHtml"),tc=n(async e=>{let t=new URL(`${ce}/?agentReadyRootWebMcp=1`,e.url),r=await fetch(t,{headers:{accept:"text/html"}});return r.ok?Qi(await r.text()):""},"loadWebMcpScript"),rc=n(async e=>{let t=new URL(`${ce}/?agentReadyRootAlias=1`,e.url),r=await fetch(t,{headers:{accept:"text/html"}});if(!r.ok)return null;let o=ec(await r.text());return!o.includes(it)||!o.includes(`${ce}/assets/`)?null:new Response(o,{status:200,headers:oa()})},"loadKnowgrphAppShell"),oc=n((e="")=>new Response(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Knowgrph</title>
    <link rel="canonical" href="/knowgrph/" />
    ${e?`<script>${e}<\/script>`:""}
  </head>
  <body>
    <main id="root"></main>
    ${Bt()}
  </body>
</html>`,{status:200,headers:oa()}),"rootHtmlResponse");async function aa(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase();if(r!=="GET"&&r!=="HEAD")return e.next();if(ra(t)){let s=Ir(ta(ea),{owner:Or,tag:"root-homepage-markdown"});return r==="HEAD"?new Response(null,s):s}let o=r==="HEAD"?null:await rc(t),a=Ir(o||oc(r==="HEAD"?"":await tc(t)),{owner:Or,tag:"root-homepage-html"});return r==="HEAD"?new Response(null,a):a}n(aa,"onRequest");var R=[{routePath:"/api/llm/chat/completions",mountPath:"/api/llm/chat",method:"",middlewares:[],modules:[Dr]},{routePath:"/api/payments/commerce/x402",mountPath:"/api/payments/commerce",method:"",middlewares:[],modules:[so]},{routePath:"/api/llm/models",mountPath:"/api/llm",method:"",middlewares:[],modules:[io]},{routePath:"/api/llm/responses",mountPath:"/api/llm",method:"",middlewares:[],modules:[co]},{routePath:"/knowgrph/doc-default/:path*",mountPath:"/knowgrph/doc-default",method:"",middlewares:[],modules:[_n]},{routePath:"/knowgrph/doc/:path*",mountPath:"/knowgrph/doc",method:"",middlewares:[],modules:[bn]},{routePath:"/knowgrph/share/:path*",mountPath:"/knowgrph/share",method:"",middlewares:[],modules:[Pn]},{routePath:"/api/link-preview",mountPath:"/api",method:"GET",middlewares:[],modules:[Rn]},{routePath:"/api/link-proxy",mountPath:"/api",method:"GET",middlewares:[],modules:[kn]},{routePath:"/api/graph",mountPath:"/api",method:"",middlewares:[],modules:[Ln]},{routePath:"/api/oembed",mountPath:"/api",method:"",middlewares:[],modules:[Kn]},{routePath:"/__chat_proxy/:path*",mountPath:"/__chat_proxy",method:"",middlewares:[],modules:[jn]},{routePath:"/knowgrph/:path*",mountPath:"/knowgrph",method:"",middlewares:[],modules:[Oe]},{routePath:"/__video_frame",mountPath:"/",method:"",middlewares:[],modules:[zn]},{routePath:"/__youtube_transcript",mountPath:"/",method:"",middlewares:[],modules:[Vn]},{routePath:"/health",mountPath:"/",method:"",middlewares:[],modules:[Yn]},{routePath:"/",mountPath:"/",method:"",middlewares:[],modules:[aa]}];function nc(e){for(var t=[],r=0;r<e.length;){var o=e[r];if(o==="*"||o==="+"||o==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(o==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(o==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(o==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(o===":"){for(var a="",s=r+1;s<e.length;){var i=e.charCodeAt(s);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){a+=e[s++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:a}),r=s;continue}if(o==="("){var c=1,l="",s=r+1;if(e[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;){if(e[s]==="\\"){l+=e[s++]+e[s++];continue}if(e[s]===")"){if(c--,c===0){s++;break}}else if(e[s]==="("&&(c++,e[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));l+=e[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(r));if(!l)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:l}),r=s;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}n(nc,"lexer");function ac(e,t){t===void 0&&(t={});for(var r=nc(e),o=t.prefixes,a=o===void 0?"./":o,s=t.delimiter,i=s===void 0?"/#?":s,c=[],l=0,d=0,h="",f=n(function(I){if(d<r.length&&r[d].type===I)return r[d++].value},"tryConsume"),A=n(function(I){var M=f(I);if(M!==void 0)return M;var j=r[d],oe=j.type,le=j.index;throw new TypeError("Unexpected ".concat(oe," at ").concat(le,", expected ").concat(I))},"mustConsume"),_=n(function(){for(var I="",M;M=f("CHAR")||f("ESCAPED_CHAR");)I+=M;return I},"consumeText"),x=n(function(I){for(var M=0,j=i;M<j.length;M++){var oe=j[M];if(I.indexOf(oe)>-1)return!0}return!1},"isSafe"),H=n(function(I){var M=c[c.length-1],j=I||(M&&typeof M=="string"?M:"");if(M&&!j)throw new TypeError('Must have text between two parameters, missing text after "'.concat(M.name,'"'));return!j||x(j)?"[^".concat(Me(i),"]+?"):"(?:(?!".concat(Me(j),")[^").concat(Me(i),"])+?")},"safePattern");d<r.length;){var U=f("CHAR"),D=f("NAME"),re=f("PATTERN");if(D||re){var F=U||"";a.indexOf(F)===-1&&(h+=F,F=""),h&&(c.push(h),h=""),c.push({name:D||l++,prefix:F,suffix:"",pattern:re||H(F),modifier:f("MODIFIER")||""});continue}var C=U||f("ESCAPED_CHAR");if(C){h+=C;continue}h&&(c.push(h),h="");var O=f("OPEN");if(O){var F=_(),Y=f("NAME")||"",L=f("PATTERN")||"",J=_();A("CLOSE"),c.push({name:Y||(L?l++:""),pattern:Y&&!L?H(F):L,prefix:F,suffix:J,modifier:f("MODIFIER")||""});continue}A("END")}return c}n(ac,"parse");function ct(e,t){var r=[],o=ia(e,r,t);return sc(o,r,t)}n(ct,"match");function sc(e,t,r){r===void 0&&(r={});var o=r.decode,a=o===void 0?function(s){return s}:o;return function(s){var i=e.exec(s);if(!i)return!1;for(var c=i[0],l=i.index,d=Object.create(null),h=n(function(A){if(i[A]===void 0)return"continue";var _=t[A-1];_.modifier==="*"||_.modifier==="+"?d[_.name]=i[A].split(_.prefix+_.suffix).map(function(x){return a(x,_)}):d[_.name]=a(i[A],_)},"_loop_1"),f=1;f<i.length;f++)h(f);return{path:c,index:l,params:d}}}n(sc,"regexpToFunction");function Me(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}n(Me,"escapeString");function sa(e){return e&&e.sensitive?"":"i"}n(sa,"flags");function ic(e,t){if(!t)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,a=r.exec(e.source);a;)t.push({name:a[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),a=r.exec(e.source);return e}n(ic,"regexpToRegexp");function cc(e,t,r){var o=e.map(function(a){return ia(a,t,r).source});return new RegExp("(?:".concat(o.join("|"),")"),sa(r))}n(cc,"arrayToRegexp");function lc(e,t,r){return pc(ac(e,r),t,r)}n(lc,"stringToRegexp");function pc(e,t,r){r===void 0&&(r={});for(var o=r.strict,a=o===void 0?!1:o,s=r.start,i=s===void 0?!0:s,c=r.end,l=c===void 0?!0:c,d=r.encode,h=d===void 0?function(M){return M}:d,f=r.delimiter,A=f===void 0?"/#?":f,_=r.endsWith,x=_===void 0?"":_,H="[".concat(Me(x),"]|$"),U="[".concat(Me(A),"]"),D=i?"^":"",re=0,F=e;re<F.length;re++){var C=F[re];if(typeof C=="string")D+=Me(h(C));else{var O=Me(h(C.prefix)),Y=Me(h(C.suffix));if(C.pattern)if(t&&t.push(C),O||Y)if(C.modifier==="+"||C.modifier==="*"){var L=C.modifier==="*"?"?":"";D+="(?:".concat(O,"((?:").concat(C.pattern,")(?:").concat(Y).concat(O,"(?:").concat(C.pattern,"))*)").concat(Y,")").concat(L)}else D+="(?:".concat(O,"(").concat(C.pattern,")").concat(Y,")").concat(C.modifier);else{if(C.modifier==="+"||C.modifier==="*")throw new TypeError('Can not repeat "'.concat(C.name,'" without a prefix and suffix'));D+="(".concat(C.pattern,")").concat(C.modifier)}else D+="(?:".concat(O).concat(Y,")").concat(C.modifier)}}if(l)a||(D+="".concat(U,"?")),D+=r.endsWith?"(?=".concat(H,")"):"$";else{var J=e[e.length-1],I=typeof J=="string"?U.indexOf(J[J.length-1])>-1:J===void 0;a||(D+="(?:".concat(U,"(?=").concat(H,"))?")),I||(D+="(?=".concat(U,"|").concat(H,")"))}return new RegExp(D,sa(r))}n(pc,"tokensToRegexp");function ia(e,t,r){return e instanceof RegExp?ic(e,t):Array.isArray(e)?cc(e,t,r):lc(e,t,r)}n(ia,"pathToRegexp");var Ft=/[.+?^${}()|[\]\\]/g;function*uc(e){let t=new URL(e.url).pathname;for(let r of[...R].reverse()){if(r.method&&r.method!==e.method)continue;let o=ct(r.routePath.replace(Ft,"\\$&"),{end:!1}),a=ct(r.mountPath.replace(Ft,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i)for(let c of r.middlewares.flat())yield{handler:c,params:s.params,path:i.path}}for(let r of R){if(r.method&&r.method!==e.method)continue;let o=ct(r.routePath.replace(Ft,"\\$&"),{end:!0}),a=ct(r.mountPath.replace(Ft,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i&&r.modules.length){for(let c of r.modules.flat())yield{handler:c,params:s.params,path:s.path};break}}}n(uc,"executeRequest");var id={async fetch(e,t,r){let o=e,a=uc(o),s={},i=!1,c=n(async(l,d)=>{if(l!==void 0){let f=l;typeof l=="string"&&(f=new URL(l,o.url).toString()),o=new Request(f,d)}let h=a.next();if(h.done===!1){let{handler:f,params:A,path:_}=h.value,x={request:new Request(o.clone()),functionPath:_,next:c,params:A,get data(){return s},set data(U){if(typeof U!="object"||U===null)throw new Error("context.data must be an object");s=U},env:t,waitUntil:r.waitUntil.bind(r),passThroughOnException:n(()=>{i=!0},"passThroughOnException")},H=await f(x);if(!(H instanceof Response))throw new Error("Your Pages function should return a Response");return Ur(H)}else{let f=await t.ASSETS.fetch(o);return Ur(f)}},"next");try{return await c()}catch(l){if(i){let d=await t.ASSETS.fetch(o);return Ur(d)}throw l}}},Ur=n(e=>new Response([101,204,205,304].includes(e.status)?null:e.body,e),"cloneResponse");export{id as default};
