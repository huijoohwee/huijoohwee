var ws=Object.defineProperty;var n=(e,t)=>ws(e,"name",{value:t,configurable:!0});var Ss="https://api.openai.com/v1";var Vt=Object.freeze(["gpt-5.4-nano","gpt-4o-mini"]);function Yt(e){return String(e||"").trim()}n(Yt,"normalizeOrigin");function _s(e){let t=Yt(e);return t?t.startsWith("http://localhost:")||t.startsWith("http://127.0.0.1:")||t.startsWith("http://0.0.0.0:"):!1}n(_s,"isAllowedOrigin");function Hr(e){let t=Yt(e);return _s(t)?{"access-control-allow-origin":t,vary:"Origin","access-control-allow-methods":"GET, POST, OPTIONS","access-control-allow-headers":"content-type, x-flowinfish-session","access-control-max-age":"86400"}:{}}n(Hr,"corsHeaders");function he(e,{status:t=200,origin:r=""}={}){return new Response(JSON.stringify(e),{status:t,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...Hr(r)}})}n(he,"json");async function gt(e,{maxBytes:t=1e6}={}){let r=await e.arrayBuffer();if(r.byteLength>t)throw new Error("Request too large");let o=new TextDecoder().decode(r);try{return o?JSON.parse(o):{}}catch{throw new Error("Invalid JSON body")}}n(gt,"readJsonBody");function bs(e){let t=String(e?.model||"").trim();if(!t)throw new Error("Missing model");if(!Vt.includes(t))throw new Error(`Model not allowed: ${t}`);return t}n(bs,"enforceAllowedModel");function Rs(e){let t=String(e.OPENAI_API_KEY||"").trim();if(!t)throw new Error("Missing server OPENAI_API_KEY");return t}n(Rs,"requireOpenAiKey");async function ft({request:e,env:t,pathname:r,payload:o}){let s=Rs(t);bs(o);let i=`${Yt(t.OPENAI_API_BASE)||Ss}${r}`,c=await fetch(i,{method:"POST",headers:{authorization:`Bearer ${s}`,"content-type":"application/json"},body:JSON.stringify(o)}),l=new Headers(c.headers);return l.delete("content-length"),l.set("cache-control","no-store"),new Response(c.body,{status:c.status,headers:l})}n(ft,"proxyToOpenAi");function Ge(e){let t=e.headers.get("origin")||"";return new Response(null,{status:204,headers:{...Hr(t)}})}n(Ge,"handleOptions");async function jr(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),s=t.headers.get("origin")||"";if(o==="OPTIONS")return Ge(t);if(o!=="POST")return he({ok:!1,error:"Method not allowed"},{status:405,origin:s});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return he({ok:!1,error:"Expected application/json"},{status:415,origin:s});let i=await gt(t);return await ft({request:t,env:r,pathname:"/chat/completions",payload:i})}catch(a){let i=a instanceof Error?a.message:String(a||"Unknown error");return he({ok:!1,error:i},{status:400,origin:s})}}n(jr,"onRequest");var yt={checkoutSession:"/api/payments/stripe/checkout/session",webhook:"/api/payments/stripe/webhook"};var ue={restrictedKey:"STRIPE_RESTRICTED_KEY",secretKey:"STRIPE_SECRET_KEY",webhookSecret:"STRIPE_WEBHOOK_SECRET",checkoutPriceId:"STRIPE_CHECKOUT_PRICE_ID",checkoutCurrency:"STRIPE_CHECKOUT_CURRENCY",checkoutUnitAmount:"STRIPE_CHECKOUT_UNIT_AMOUNT",checkoutProductName:"STRIPE_CHECKOUT_PRODUCT_NAME",checkoutMode:"STRIPE_CHECKOUT_MODE",checkoutReturnOrigin:"STRIPE_CHECKOUT_RETURN_ORIGIN"},Gc=[ue.restrictedKey,ue.secretKey,ue.webhookSecret];var Je={configure:"npm run payment:stripe:configure",d1MigrateRemote:"npm run payment:d1:migrate:remote",readiness:"npm run payment:stripe:readiness",x402Configure:"npm run payment:x402:configure",x402Readiness:"npm run payment:x402:readiness",paymentReadiness:"npm run payment:readiness",applyConfirmation:"apply-stripe-payment-worker-config",writeVisibleVarsFlag:"--write-visible-vars",deployVisibleVarsFlag:"--deploy-visible-vars"};var Wc=[`Configure Stripe secrets on the server runtime that owns ${yt.checkoutSession}.`,"Cloudflare Pages project variables are available to Pages builds/functions, but they are not read by separate Worker routes.","Stripe Projects can provision and sync credentials locally; copy only required server secret names into the payment server runtime."].join(" "),Fc=[`Payment server runtime for ${yt.checkoutSession}`,"not Cloudflare Pages project variables"].join("; "),Ps=[ue.restrictedKey,ue.secretKey].join(" or "),zc=[ue.checkoutPriceId,`${ue.checkoutCurrency} + ${ue.checkoutUnitAmount} + ${ue.checkoutProductName}`].join(" or "),qc=[`${ue.checkoutMode}=payment`,`${ue.checkoutMode}=subscription with ${ue.checkoutPriceId}`].join(" or "),Vc=["Worker secret names","visible Worker [vars]","remote D1 payment tables","required webhook-processing columns/constraints","bounded optional hosted Checkout create-and-expire smoke"].join(" + "),Yc=[Je.configure,`write visible Worker [vars] with ${Je.writeVisibleVarsFlag}`,`deploy visible Worker [vars] with ${Je.deployVisibleVarsFlag}`,`apply with -- --apply --yes --confirm=${Je.applyConfirmation}`,Je.readiness].join(" -> "),Jc=[`Missing server-managed Stripe key. Set ${Ps} on the payment server runtime.`,"Pages project variables alone do not satisfy separate Worker routes."].join(" ");var As=n(e=>{let t=2166136261;for(let r=0;r<e.length;r+=1)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0},"fnv1a32");function Br(e){return As(String(e??""))}n(Br,"hashString32");function Xe(e){return Br(e).toString(16).padStart(8,"0")}n(Xe,"hashStringToHex");var ks=n(e=>e==null?"":typeof e=="boolean"?e?"1":"0":typeof e=="number"?Number.isFinite(e)?String(e):"":String(e),"normalizePrimitive"),xs=n(e=>e.map(ks).join("|"),"buildSignatureText"),wt=n(e=>Xe(xs(e)),"hashSignatureParts");var Se=n((e,t)=>wt(["agentic-commerce",e,...t]),"buildAgenticCommerceSemanticKey");var Gr="solana_pay",Wr="/api/payments/commerce/solana-pay/settle";var Qe="2026-01-30",zr="1000",qr="USDC",Jt="https://x402.org/facilitator",Vr="eip155:84532",Es="$0.001",Yr="x402-payment-required",Cs="0x0000000000000000000000000000000000000000",We="2026-04-08",Fr="https://ucp.dev/2026-04-08/specification/overview/",Ts=["checkout"],Os=["rest"];var O={acpDiscovery:"/.well-known/acp.json",acpConfig:"/.well-known/acp-config",ucpProfile:"/.well-known/ucp",mppOpenApi:"/openapi.json",x402ApiRoot:"/api",x402ApiV1:"/api/v1",checkoutSessions:"/checkout/sessions",x402PaymentRequired:"/api/payments/commerce/x402",commerceWebhook:"/api/payments/commerce/webhook",commerceProofArtifact:"/api/payments/commerce/harness-proof.json",commerceTraceArtifact:"/api/payments/commerce/trace.jsonl",openboxIngest:"/api/payments/commerce/openbox/ingest",web3Settle:"/api/payments/commerce/web3/settle",solanaPaySettle:Wr},wl=[O.x402ApiRoot,O.x402ApiV1,O.x402PaymentRequired],Te={sellerId:"SELLER_ID",checkoutBaseUrl:"CHECKOUT_BASE_URL",web3Enabled:"WEB3_ENABLED",web3DepositAddress:"WEB3_DEPOSIT_ADDRESS",baseRpcUrl:"BASE_RPC_URL",baseConfirmationBlocks:"BASE_CONFIRMATION_BLOCKS",easAttestUrl:"EAS_ATTEST_URL",openboxApiUrl:"OPENBOX_API_URL",openboxIngestUrl:"OPENBOX_INGEST_URL",openboxApiKey:"OPENBOX_API_KEY",stripeDelegatePaymentUrl:"STRIPE_DELEGATE_PAYMENT_URL",acpBearerToken:"ACP_BEARER_TOKEN",x402PayToAddress:"X402_PAY_TO_ADDRESS",x402Network:"X402_NETWORK",x402Asset:"X402_ASSET",x402Amount:"X402_AMOUNT",x402FacilitatorUrl:"X402_FACILITATOR_URL",x402Price:"X402_PRICE"},Oe=n((e,t)=>String(e[t]||"").trim(),"readEnvString"),Jr=n((e,t)=>{let r=Oe(e,Te.sellerId);if(r)return r;try{return new URL(t).host}catch{return"knowgrph-seller"}},"readAgenticCommerceSellerId");var Xr=n(e=>{let t=Oe(e,Te.web3Enabled).toLowerCase();return t?t==="0"||t==="false"||t==="no"?!1:t==="1"||t==="true"||t==="yes":!0},"isAgenticCommerceWeb3Enabled");var Ze=n(e=>String(e||"").trim().replace(/\/+$/g,""),"normalizeAgenticCommerceBaseUrl"),ae=n((e,t)=>`${Ze(e)}${t}`,"buildAgenticCommerceUrl"),ee=n((e,t,r,o,s=o.startsWith("/")?o:null)=>({id:t,label:r,value:o,path:s,semanticKey:Se("mainpanel-commerce-readiness-row",[e,t,r,o,s||""])}),"buildAgenticCommerceMainPanelReadinessRow"),Fe=n((e,t,r)=>({id:e,title:t,rows:r}),"buildAgenticCommerceMainPanelReadinessSection"),Is=n(()=>{let e=[Fe("overview","Overview",[ee("overview","acp-discovery","ACP discovery",`GET ${O.acpDiscovery}`,O.acpDiscovery),ee("overview","acp-config","ACP config",`GET ${O.acpConfig}`,O.acpConfig),ee("overview","api-version","API version",Qe,null)]),Fe("discovery","Discovery",[ee("discovery","ucp-profile","UCP profile",O.ucpProfile),ee("discovery","mpp-openapi","MPP OpenAPI",O.mppOpenApi),ee("discovery","x402-payment-required","x402 payment required",O.x402PaymentRequired),ee("discovery","x402-api-root","x402 API root",O.x402ApiRoot)]),Fe("sessions","Sessions",[ee("sessions","checkout-sessions","Checkout sessions",O.checkoutSessions),ee("sessions","stripe-webhook","Stripe webhook",yt.webhook)]),Fe("web3","Web3",[ee("web3","settle","Settle",O.web3Settle),ee("web3","solana-pay-settle","Solana Pay settle",O.solanaPaySettle),ee("web3","signals","Signals","Base RPC + Solana RPC confirmation",null)]),Fe("governance","Governance",[ee("governance","openbox-ingest","OpenBOX ingest",O.openboxIngest),ee("governance","risk-source","Risk source","OpenBOX risk signal",null)]),Fe("proofs","Proofs",[ee("proofs","harness-proof","Harness proof",O.commerceProofArtifact),ee("proofs","trace-artifact","Trace artifact",O.commerceTraceArtifact)])],t=e.flatMap(s=>s.rows),r=t.map(s=>s.path||"").filter(s=>s.length>0),o=t.filter(s=>!s.path).map(s=>`${s.label}: ${s.value}`);return{surface:"mainpanel-commerce",semanticKey:Se("mainpanel-commerce-readiness",[Qe,...t.map(s=>s.semanticKey)]),sections:e,routePaths:r,routeCount:r.length,signals:o}},"buildAgenticCommerceMainPanelReadiness"),Sl=Is(),Qr=n((e,t)=>{let r=Oe(e,Te.web3DepositAddress);if(/^0x[0-9a-fA-F]{40}$/.test(r))return r;let o=Se("deposit-address",[t,"0"]),s=Se("deposit-address",[t,"1"]),a=Se("deposit-address",[t,"2"]),i=Se("deposit-address",[t,"3"]),c=Se("deposit-address",[t,"4"]);return`0x${o}${s}${a}${i}${c}`.slice(0,42)},"buildAgenticCommerceDepositAddress");var Zr=n((e,t=Yr)=>{let r=Oe(e,Te.x402PayToAddress);return/^0x[0-9a-fA-F]{40}$/.test(r)&&r.toLowerCase()!==Cs?r:Qr(e,t)},"readAgenticCommerceX402PayToAddress"),_l=Qr({},Yr),vs=/^[a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,64}$/,eo=n(e=>{let t=Oe(e,Te.x402Network);return vs.test(t)?t:Vr},"readAgenticCommerceX402Network"),to=n(e=>Oe(e,Te.x402Asset)||qr,"readAgenticCommerceX402Asset"),ro=n(e=>{let t=Oe(e,Te.x402Amount);return/^[1-9][0-9]*$/.test(t)?t:zr},"readAgenticCommerceX402Amount");var oo=n(e=>{let t=Oe(e,Te.x402FacilitatorUrl);try{let r=new URL(t||Jt);return r.protocol==="https:"||r.protocol==="http:"?r.toString().replace(/\/+$/g,""):Jt}catch{return Jt}},"readAgenticCommerceX402FacilitatorUrl"),no=n(e=>{let t=Ze(e.baseUrl);return{protocol:{name:"acp",version:Qe,supported_versions:[Qe],documentation_url:"https://agenticcommerce.dev"},api_base_url:t,transports:[...Os],capabilities:{services:[...Ts],...e.web3Enabled?{extensions:[{name:"x-web3"}]}:{}},links:{config:ae(t,O.acpConfig),ucp:ae(t,O.ucpProfile),mpp:ae(t,O.mppOpenApi),x402:ae(t,O.x402PaymentRequired)}}},"buildAgenticCommerceAcpDiscovery"),so=n(e=>{let t=Ze(e.baseUrl),r={acp:ae(t,O.acpDiscovery),api:ae(t,O.x402ApiRoot),checkout_sessions:ae(t,O.checkoutSessions),mpp_openapi:ae(t,O.mppOpenApi),proof:ae(t,O.commerceProofArtifact),trace:ae(t,O.commerceTraceArtifact),x402_payment_required:ae(t,O.x402PaymentRequired),solana_pay_settle:ae(t,O.solanaPaySettle)},o={checkout_sessions:!0,content_payments:!0,proof_artifacts:!0,risk_signals:!0,web3_settlement:e.web3Enabled,solana_pay:e.web3Enabled},s={"dev.ucp.shopping":[{version:We,spec:Fr,transport:"rest",endpoint:r.api,schema:"https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json"}]};return{ucp:{version:We,protocol_version:We,services:s,capabilities:{"dev.ucp.shopping.checkout":[{version:We,spec:"https://ucp.dev/2026-04-08/specification/checkout/",schema:"https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"}]},payment_handlers:{},endpoints:r},protocol_version:We,protocol:{name:"ucp",version:We},seller:{id:e.sellerId},services:[{id:"knowgrph-content-payments",type:"content-payments",endpoints:{x402:r.x402_payment_required,checkout_sessions:r.checkout_sessions,solana_pay_settle:r.solana_pay_settle,proof:r.proof,trace:r.trace}}],capabilities:o,endpoints:r,spec_urls:[Fr],schema_urls:["https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json","https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"]}},"buildAgenticCommerceUcpProfile"),ao=n(e=>{let t=Ze(e.baseUrl);return{openapi:"3.1.0",info:{title:"Knowgrph Machine Payment Protocol",version:Qe,description:"Machine-readable payable-operation discovery for Knowgrph commerce routes."},servers:[{url:t}],paths:{[O.x402PaymentRequired]:{get:{operationId:"getKnowgrphX402PaymentRequirement",summary:"Return x402 payment requirements for an agent-readable paid resource.","x-payment-info":{intent:"charge",method:"x402",amount:Es,currency:"usdc"},responses:{402:{description:"Payment Required"}}}},[O.checkoutSessions]:{post:{operationId:"createKnowgrphCommerceCheckoutSession",summary:"Create an agentic commerce checkout session.","x-payment-info":{intent:"session",method:"stripe",amount:"dynamic",currency:"request.currency"},responses:{201:{description:"Checkout session created"}}}},[O.solanaPaySettle]:{post:{operationId:"settleKnowgrphSolanaPayCheckoutSession",summary:"Settle an agentic commerce checkout session from a verified Solana Pay transaction signature.","x-payment-info":{intent:"settlement",method:Gr,amount:"dynamic",currency:"request.currency"},responses:{200:{description:"Solana Pay session settled"},409:{description:"Solana Pay transaction is not confirmed yet"},422:{description:"Solana Pay transaction does not match the session"}}}}}}},"buildAgenticCommerceMppOpenApi"),io=n(e=>{let t=Ze(e.baseUrl),r=ae(t,O.x402PaymentRequired),o=String(e.amount||zr);return{x402Version:2,error:"Payment required",resource:{url:r,description:"Knowgrph agentic commerce paid-resource readiness probe",mimeType:"application/json"},accepts:[{scheme:"exact",network:String(e.network||Vr),amount:o,maxAmountRequired:o,asset:String(e.asset||qr),resource:r,mimeType:"application/json",payTo:e.payTo,maxTimeoutSeconds:300,extra:{name:"USDC",version:"2",resourceUrl:r,...e.facilitatorUrl?{facilitatorUrl:e.facilitatorUrl}:{}}}]}},"buildAgenticCommerceX402PaymentRequired");var Ms=n(e=>JSON.stringify(e,null,2),"jsonBody"),Ns=n(e=>String(e||"").trim().replace(/\/+$/g,""),"trimOrigin"),Us=n(e=>typeof btoa=="function"?btoa(e):typeof Buffer<"u"?Buffer.from(e).toString("base64"):"","encodeBase64"),Ks=n((e,t)=>{try{return new URL(e).origin}catch{return Ns(t)}},"rootOriginFromRequest"),Xt=n((e={})=>{let t=Ks(e.requestUrl,e.origin),r=e.env||{},o=Jr(r,`${t}/`),s=Xr(r),a=io({baseUrl:t,payTo:Zr(r),network:eo(r),asset:to(r),amount:ro(r),facilitatorUrl:oo(r)});return{acpDiscovery:no({sellerId:o,baseUrl:t,web3Enabled:s}),ucpProfile:so({sellerId:o,baseUrl:t,web3Enabled:s}),mppOpenApi:ao({baseUrl:t}),x402PaymentRequired:a}},"buildKnowgrphCommerceDiscovery");var co=n((e,t={})=>{let r=Xt({requestUrl:e?.url,env:t}).x402PaymentRequired,o=Us(JSON.stringify(r));return new Response(Ms(r),{status:402,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*",...o?{"payment-required":o}:{}}})},"buildKnowgrphX402PaymentRequiredResponse");async function lo(e){return co(e.request,e.env||{})}n(lo,"onRequest");async function po(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=t.headers.get("origin")||"";return r==="OPTIONS"?Ge(t):r!=="GET"&&r!=="HEAD"?he({ok:!1,error:"Method not allowed"},{status:405,origin:o}):he({ok:!0,models:Vt.map(s=>({model:s,display_name:s}))},{status:200,origin:o})}n(po,"onRequest");async function uo(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),s=t.headers.get("origin")||"";if(o==="OPTIONS")return Ge(t);if(o!=="POST")return he({ok:!1,error:"Method not allowed"},{status:405,origin:s});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return he({ok:!1,error:"Expected application/json"},{status:415,origin:s});let i=await gt(t);return await ft({request:t,env:r,pathname:"/responses",payload:i})}catch(a){let i=a instanceof Error?a.message:String(a||"Unknown error");return he({ok:!1,error:i},{status:400,origin:s})}}n(uo,"onRequest");var ze=Object.freeze({researchSourceFiles:"knowgrph_research_source_files",inspectAgentSurface:"knowgrph_inspect_agent_surface"}),Qt=n(e=>String(e||"").trim(),"normalizeString"),Ls=n(e=>({...e,arguments:Array.isArray(e.arguments)?e.arguments.map(t=>({...t})):void 0,_meta:e._meta&&typeof e._meta=="object"?{...e._meta,tools:Array.isArray(e._meta.tools)?[...e._meta.tools]:void 0}:void 0}),"clonePrompt"),ho=Object.freeze([Object.freeze({name:ze.researchSourceFiles,title:"Research Knowgrph Source Files",description:"Guide an MCP host through read-only Knowgrph Source Files research using search and fetch with citation-ready URLs.",arguments:Object.freeze([Object.freeze({name:"query",description:"Research question or topic to pass to the read-only search tool.",required:!0}),Object.freeze({name:"limit",description:"Optional decimal string for the maximum search results to inspect.",required:!1}),Object.freeze({name:"focus",description:"Optional aspect to prioritize when reading fetched Source Files.",required:!1})]),_meta:Object.freeze({readOnly:!0,tools:Object.freeze(["search","fetch"])})}),Object.freeze({name:ze.inspectAgentSurface,title:"Inspect Knowgrph Agent Surface",description:"Guide an MCP host through read-only inspection of Knowgrph agent, MCP, and MCP Apps readiness metadata.",arguments:Object.freeze([Object.freeze({name:"focus",description:"Optional readiness area to emphasize, such as transport, tools, resources, prompts, retrieval, or app metadata.",required:!1})]),_meta:Object.freeze({readOnly:!0,tools:Object.freeze(["inspect_agent_surface"])})})]),go=n(()=>ho.map(Ls),"buildKnowgrphAgentReadyPromptContracts"),$s=n(e=>ho.find(t=>t.name===Qt(e))||null,"findPromptContract"),St=n((e,t)=>!e||typeof e!="object"?"":Qt(e[t]),"readPromptArg"),Ds=n((e,t)=>{let r=St(e,t);if(!r)throw new Error(`Missing required prompt argument: ${t}`);return r},"readRequiredPromptArg"),mo=n(e=>({role:"user",content:{type:"text",text:e}}),"buildPromptMessage"),Hs=n((e={})=>{let t=Ds(e,"query"),r=St(e,"limit"),o=St(e,"focus");return[`Research Knowgrph Source Files for: ${t}`,"","Use the MCP server read-only retrieval path:",`1. Call search with query=${JSON.stringify(t)}${r?` and limit=${JSON.stringify(r)}`:""}.`,"2. Select the most relevant returned ids and call fetch for each id before answering.","3. Ground the answer in fetched markdown content and cite the returned result URLs when summarizing.",o?`4. Prioritize this focus: ${o}.`:"","","Do not mutate graph, canvas, workspace, storage, or browser-local state for this research prompt."].filter(Boolean).join(`
`)},"buildSourceFilesResearchPromptText"),js=n((e={})=>{let t=St(e,"focus");return["Inspect the Knowgrph agent-ready surface through the read-only inspect_agent_surface tool.","","Review health, API catalog, MCP server card, A2A card, agent skills, commerce discovery, and mcpAppsServerReadiness.","For MCP Apps readiness, verify tool/resource linkage, output schema, text fallback, structured content, sandbox/security metadata, no-auth security-scheme mirroring, widget accessibility, prompts, search/fetch retrieval, Streamable HTTP, and local stdio support.",t?`Emphasize this readiness area: ${t}.`:"","","Report checklist ids and evidence from structuredContent. Do not infer readiness from prose alone."].filter(Boolean).join(`
`)},"buildAgentSurfaceInspectionPromptText"),fo=n((e,t={})=>{let r=$s(e);if(!r)throw new Error(`Unknown Knowgrph MCP prompt: ${Qt(e)}`);if(r.name===ze.researchSourceFiles)return{description:r.description,messages:[mo(Hs(t))]};if(r.name===ze.inspectAgentSurface)return{description:r.description,messages:[mo(js(t))]};throw new Error(`Unhandled Knowgrph MCP prompt: ${r.name}`)},"getKnowgrphAgentReadyPrompt");var Bs=Object.freeze({sourceFileById:"knowgrph_source_file_by_id"}),_t="kgdoc://source-file/{id}",yo="kgdoc://source-file/",wo="text/markdown",et=n(e=>String(e||"").trim(),"normalizeString"),So=n(()=>[{uriTemplate:_t,name:Bs.sourceFileById,title:"Knowgrph Source File By ID",description:"Read a complete published Knowgrph Source File markdown document using a stable kgdoc id returned by search.",mimeType:wo,annotations:{audience:["user","assistant"],priority:.8},_meta:{readOnly:!0,source:"knowgrph-source-files",tool:"fetch"}}],"buildKnowgrphAgentReadyResourceTemplateContracts");var _o=n(e=>{let t=et(e);if(!t.startsWith(yo))return"";let r=t.slice(yo.length);if(!r)return"";try{return decodeURIComponent(r)}catch{return r}},"parseKnowgrphSourceFileResourceUri"),bo=n(({uri:e,sourceFile:t}={})=>{let r=typeof t?.content=="string"?t.content:String(t?.text||"");return{contents:[{uri:et(e),mimeType:wo,text:r,_meta:{id:et(t?.id),title:et(t?.title),url:et(t?.url),metadata:t?.metadata&&typeof t.metadata=="object"?{...t.metadata}:{}}}]}},"buildKnowgrphSourceFileResourceReadResult");var Rt="io.modelcontextprotocol/ui",Ke="text/html;profile=mcp-app",xo="2026-01-26",Gs="knowgrph-mcp-apps-server-readiness/v0.1",ie="ui://knowgrph/agent-ready",tr="knowgrph-agent-ready",Le="inspect_agent_surface",ge=Object.freeze(["search","fetch"]),Zt=Object.freeze({search:Object.freeze(["ids"]),fetch:Object.freeze(["id","title","content","text"])}),Ro=Object.freeze(Object.values(ze)),Pe="streamable-http",Ws=Object.freeze([Object.freeze({type:"noauth"})]),ne=Object.freeze({openAiApps:"openai-apps",claude:"claude-mcp-connector",qwenCode:"qwen-code",kimiCli:"kimi-cli",bytePlusModelArk:"byteplus-modelark",generic:"generic-mcp"}),D=n(e=>String(e||"").trim(),"normalizeString"),bt=n(e=>D(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),"escapeHtml"),Fs=n(e=>JSON.stringify(e).replace(/</g,"\\u003c"),"safeJsonForInlineScript"),zs=n(e=>{let t=D(e);if(!t)return"";try{return new URL(t).origin}catch{return""}},"readUrlOrigin"),rr=n(()=>({extensions:{[Rt]:{mimeTypes:[Ke]}}}),"buildKnowgrphMcpAppsCapabilities"),te=n(e=>Array.isArray(e)?e:[],"arrayFrom"),or=n(()=>Ws.map(e=>({...e})),"buildKnowgrphMcpNoauthSecuritySchemes"),Eo=n(e=>(Array.isArray(e)&&e.length?e:or()).filter(r=>r&&typeof r=="object").map(r=>({...r})),"normalizeSecuritySchemes"),Po=n(e=>te(e).some(t=>t?.type==="noauth"),"hasNoauthSecurityScheme"),Ao=n(e=>Array.isArray(e)?Eo(e):[],"readSecuritySchemes"),qs=n(e=>{let t=D(e);return t.includes("window.openai")&&t.includes("openai:set_globals")&&t.includes("toolInput")&&t.includes("toolOutput")&&t.includes("callTool")&&t.includes("request('ui/initialize'")},"hasOpenAiWidgetBridgeHtml"),ko=n((e,t=[])=>e?.outputSchema?.type==="object"&&t.every(r=>te(e.outputSchema?.required).includes(r)),"hasToolOutputSchemaFields"),er=n(e=>e?.annotations?.readOnlyHint===!0&&e?.annotations?.destructiveHint===!1&&e?.annotations?.openWorldHint===!1&&e?.annotations?.idempotentHint===!0,"hasReadOnlyToolAnnotations"),z=n((e,t,r,o=[])=>({id:e,label:t,ok:r===!0,evidence:te(o).map(D).filter(Boolean)}),"booleanCheck"),nr=n((e={})=>{let t=D(e.baseUrl).replace(/\/+$/,""),r=D(e.serverName)||"knowgrph",o=D(e.mcpUrl)||(t?`${t}/mcp`:"");return{[ne.openAiApps]:{id:ne.openAiApps,label:"OpenAI Apps / ChatGPT",transport:Pe,url:o,appResourceUri:ie,appToolName:Le,requiredMetadata:["openai/outputTemplate","openai/widgetAccessible","openai/widgetCSP","openai/widgetDomain"],requiredTools:[Le,...ge]},[ne.claude]:{id:ne.claude,label:"Claude MCP connector",transport:Pe,url:o,beta:"mcp-client-2025-11-20",mcp_servers:[{type:"url",url:o,name:r}],tools:[{type:"mcp_toolset",mcp_server_name:r}],requiredTools:ge},[ne.qwenCode]:{id:ne.qwenCode,label:"Qwen Code",transport:"http",url:o,command:`qwen mcp add --transport http ${r} ${o}`,settingsJson:{mcpServers:{[r]:{httpUrl:o,timeout:3e4,trust:!1,includeTools:["search","fetch",Le]}}},requiredTools:ge,primaryFlow:"Call search with a natural-language query, then call fetch with the returned kgdoc id."},[ne.kimiCli]:{id:ne.kimiCli,label:"Kimi CLI",transport:"http",url:o,command:`kimi mcp add --transport http ${r} ${o}`,configFile:"~/.kimi/mcp.json",mcpJson:{mcpServers:{[r]:{url:o,transport:"http"}}},requiredTools:ge,primaryFlow:"Call search with a natural-language query, then call fetch with the returned kgdoc id."},[ne.bytePlusModelArk]:{id:ne.bytePlusModelArk,label:"BytePlus ModelArk Responses API",transport:Pe,url:o,apiBaseUrl:"https://ark.ap-southeast.bytepluses.com/api/v3",endpoint:"/responses",requiredHeaders:{"ark-beta-mcp":"true"},tools:[{type:"mcp",server_label:r,server_url:o,require_approval:"never"}],openAiCompatible:{base_url:"https://ark.ap-southeast.bytepluses.com/api/v3",default_headers:{"ark-beta-mcp":"true"},responsesCreate:{model:"<MODELARK_MODEL_OR_ENDPOINT_ID>",tools:[{type:"mcp",server_label:r,server_url:o,require_approval:"never"}]}},invocationScope:"ModelArk Responses API with MCP service and model permissions enabled.",requiredTools:ge,primaryFlow:"Use ModelArk Responses API with the Knowgrph MCP tool entry, then ask the model to call search and fetch."},[ne.generic]:{id:ne.generic,label:"Generic MCP clients",transport:Pe,url:o,initialize:{method:"initialize",accept:["application/json","text/event-stream"]},requiredMethods:["initialize","notifications/initialized","tools/list","tools/call"],optionalMethods:["prompts/list","prompts/get","resources/list","resources/templates/list","resources/read"],requiredTools:ge}}},"buildKnowgrphMcpClientSetups"),Co=n((e={})=>{let t=D(e.baseUrl).replace(/\/+$/,""),r=D(e.updatedAt),o=e.mcpServerCard&&typeof e.mcpServerCard=="object"?e.mcpServerCard:{},s=o.capabilities&&typeof o.capabilities=="object"?o.capabilities:{},a=te(e.tools).length?te(e.tools):te(s.tools),i=te(e.resources).length?te(e.resources):[Pt({appUrl:t,updatedAt:r})],c=te(e.prompts).length?te(e.prompts):te(o.prompts),l=te(e.resourceTemplates).length?te(e.resourceTemplates):te(o.resourceTemplates),p=a.filter(w=>w?._meta?.ui?.resourceUri===ie),m=p.find(w=>w?.name===Le)||p[0]||null,f=i.find(w=>w?.uri===ie)||null,R=s.extensions?.[Rt],_=D(o.transport?.url)||(t?`${t}/mcp`:""),k=D(o.transport?.type)||Pe,H=D(e.appResourceHtml)||Io({appUrl:t,updatedAt:r,toolName:m?.name||Le}),U=e.clientSetups&&typeof e.clientSetups=="object"?e.clientSetups:nr({baseUrl:t,mcpUrl:_,serverName:o.serverInfo?.name}),$=m?.outputSchema&&typeof m.outputSchema=="object",re=!!m?.name,W=$,T=m?._meta?.["openai/outputTemplate"]===ie,I=qs(H),J=Po(m?.securitySchemes)&&Po(m?._meta?.securitySchemes),K=er(m),X=m?._meta?.["openai/widgetAccessible"]===!0,v=c.map(w=>D(w?.name)).filter(Boolean),M=o.capabilities?.prompts&&typeof o.capabilities.prompts=="object",j=Ro.every(w=>v.includes(w)),oe=l.map(w=>D(w?.uriTemplate)).filter(Boolean),pe=oe.includes(_t),we=Object.fromEntries(ge.map(w=>[w,a.find(E=>E?.name===w)||null])),P=ge.every(w=>{let E=we[w];return er(E)&&ko(E,Zt[w])}),y=U[ne.qwenCode],S=y?.transport==="http"&&y?.url===_&&y?.settingsJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.httpUrl===_&&String(y?.command||"").includes("--transport http")&&String(y?.command||"").includes(_),d=U[ne.kimiCli],h=d?.transport==="http"&&d?.url===_&&d?.mcpJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.url===_&&d?.mcpJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.transport==="http"&&String(d?.command||"").includes("kimi mcp add --transport http")&&String(d?.command||"").includes(_),g=U[ne.bytePlusModelArk],b=g?.transport===Pe&&g?.url===_&&g?.endpoint==="/responses"&&g?.requiredHeaders?.["ark-beta-mcp"]==="true"&&te(g?.tools).some(w=>w?.type==="mcp"&&w?.server_label===(o.serverInfo?.name||"knowgrph")&&w?.server_url===_&&w?.require_approval==="never")&&g?.openAiCompatible?.responsesCreate?.tools?.some(w=>w?.type==="mcp"&&w?.server_label===(o.serverInfo?.name||"knowgrph")&&w?.server_url===_&&w?.require_approval==="never"),N=[z("app-tool-resource-link","App tool is linked to the UI resource",p.length>0,p.map(w=>w.name)),z("output-schema","App tool exposes an output schema",$,[m?.name]),z("text-fallback","Tool result keeps a text fallback for non-UI hosts",re,[m?.name]),z("structured-content","Tool result returns structured content for the View",W,[m?.name]),z("resource-descriptor","MCP resource descriptor uses the MCP Apps MIME type",f?.mimeType===Ke,[f?.uri]),z("resource-security-meta","Resource declares UI sandbox metadata",f?._meta?.ui?.prefersBorder===!0&&!!f?._meta?.ui?.csp,[f?.uri]),z("openai-output-template","App tool exposes the OpenAI output template metadata key",T,[m?.name]),z("openai-widget-bridge","App resource supports the OpenAI Apps widget bridge",I,["window.openai","openai:set_globals"]),z("tool-security-schemes","App tool exposes no-auth securitySchemes and mirrors them in _meta",J,[m?.name]),z("tool-impact-annotations","App tool exposes complete read-only impact annotations",K,[m?.name]),z("widget-accessible","App tool allows the widget bridge to call tools",X,[m?.name]),z("prompt-discovery","Server exposes MCP prompt templates for multi-host guidance",M&&j,v),z("source-file-resource-template","Server exposes a dynamic Source Files resource template",pe,oe),z("deep-research-search-fetch","Server exposes read-only search and fetch tools",P,ge),z("qwen-code-http-client-setup","Server advertises Qwen Code HTTP MCP setup",S,[y?.command]),z("kimi-cli-http-client-setup","Server advertises Kimi CLI HTTP MCP setup",h,[d?.command]),z("byteplus-modelark-responses-mcp-setup","Server advertises BytePlus ModelArk Responses API MCP setup",b,[g?.apiBaseUrl,g?.endpoint]),z("extension-capability","Server advertises the MCP Apps extension capability",R?.mimeTypes?.includes(Ke),[Rt]),z("streamable-http-transport","Server exposes a stateless Streamable HTTP JSON-RPC transport",!!_&&k===Pe,[_,k]),z("stdio-transport","Repo-local MCP server supports stdio host configuration",e.localStdio!==!1,["node mcp/server.js"])],F=N.every(w=>w.ok);return{schemaVersion:Gs,ready:F,updatedAt:r,app:{name:tr,protocolVersion:xo,resourceUri:ie,resourceMimeType:Ke,extensionId:Rt},tool:{name:m?.name||Le,title:m?.title||"Inspect Agent Surface",resourceUri:m?._meta?.ui?.resourceUri||ie,visibility:te(m?._meta?.ui?.visibility).length?m._meta.ui.visibility:["model","app"],readOnly:m?.annotations?.readOnlyHint===!0,destructive:m?.annotations?.destructiveHint===!0,openWorld:m?.annotations?.openWorldHint===!0,idempotent:m?.annotations?.idempotentHint===!0,annotationsReady:K,hasOutputSchema:!!$,textFallback:re,structuredContent:W,openAiOutputTemplate:T,openAiWidgetBridge:I,securitySchemes:Ao(m?.securitySchemes),mirroredSecuritySchemes:Ao(m?._meta?.securitySchemes),widgetAccessible:X},resource:{uri:f?.uri||ie,name:f?.name||tr,mimeType:f?.mimeType||Ke,prefersBorder:f?._meta?.ui?.prefersBorder===!0,domain:D(f?._meta?.ui?.domain),csp:f?._meta?.ui?.csp||{},openAiWidgetBridge:I},retrieval:{mode:"deep-research-search-fetch",requiredTools:ge,tools:ge.map(w=>{let E=we[w];return{name:w,readOnly:E?.annotations?.readOnlyHint===!0,destructive:E?.annotations?.destructiveHint===!0,openWorld:E?.annotations?.openWorldHint===!0,idempotent:E?.annotations?.idempotentHint===!0,annotationsReady:er(E),requiredOutputFields:Zt[w],outputSchemaReady:ko(E,Zt[w])}})},prompts:{requiredPrompts:Ro,names:v,capability:!!M,ready:M&&j},resourceTemplates:{requiredTemplates:[_t],uriTemplates:oe,ready:pe},clients:U,transports:[{id:"pages-http-jsonrpc",type:k,url:_,stateless:!0,serverFactory:!0},{id:"local-stdio-jsonrpc",type:"stdio",command:"node mcp/server.js",stateless:!1,serverFactory:!0}],dataModel:{source:"inspect_agent_surface.structuredContent",categories:[{id:"discovery",label:"Discovery metadata",count:["health","apiCatalog","openApi","mcpServerCard","agentCard","agentSkills"].length},{id:"commerce",label:"Commerce discovery",count:["acpDiscovery","ucpProfile","mppOpenApi"].length},{id:"mcp-apps",label:"MCP Apps server bindings",count:N.length}],renderMode:"structured-summary-with-json-fallback"},checklist:N}},"buildKnowgrphMcpAppsServerReadiness"),To=n((e={})=>{let t=D(e.resourceUri)||ie;return{securitySchemes:Eo(e.securitySchemes),ui:{resourceUri:t,visibility:Array.isArray(e.visibility)&&e.visibility.length?e.visibility:["model","app"]},"openai/outputTemplate":t,"openai/widgetAccessible":e.widgetAccessible!==!1,"openai/toolInvocation/invoking":D(e.invoking)||"Inspecting Knowgrph.","openai/toolInvocation/invoked":D(e.invoked)||"Knowgrph is ready."}},"buildKnowgrphMcpAppsToolMeta"),Oo=Object.freeze({type:"object",additionalProperties:!0,required:["baseUrl","healthUrl","mcpUrl"],properties:{baseUrl:{type:"string"},healthUrl:{type:"string"},mcpUrl:{type:"string"},apiCatalogUrl:{type:"string"},openApiUrl:{type:"string"},mcpServerCardUrl:{type:"string"},agentCardUrl:{type:"string"},agentSkillsUrl:{type:"string"},commerceUrls:{type:"object",additionalProperties:{type:"string"}},health:{type:"object",additionalProperties:!0},apiCatalog:{type:"object",additionalProperties:!0},openApi:{type:"object",additionalProperties:!0},mcpServerCard:{type:"object",additionalProperties:!0},agentCard:{type:"object",additionalProperties:!0},agentSkills:{type:"object",additionalProperties:!0},commerce:{type:"object",additionalProperties:!0},mcpAppsServerReadiness:{type:"object",additionalProperties:!0}}}),Pt=n((e={})=>{let t=D(e.appUrl),r=D(e.updatedAt),o=D(e.domain)||zs(t),s={connectDomains:[],resourceDomains:[],frameDomains:[],baseUriDomains:[]};return{uri:ie,name:tr,description:["Interactive MCP Apps view for the existing Knowgrph agent-ready surface.",t?`App URL: ${t}`:"",r?`Updated: ${r}`:""].filter(Boolean).join(" "),mimeType:Ke,_meta:{ui:{csp:s,...o?{domain:o}:{},prefersBorder:!0},"openai/widgetDescription":"Interactive Knowgrph agent-ready server-readiness view.","openai/widgetPrefersBorder":!0,...o?{"openai/widgetDomain":o}:{},"openai/widgetCSP":{connect_domains:s.connectDomains,resource_domains:s.resourceDomains,frame_domains:s.frameDomains}}}},"buildKnowgrphMcpAppsResourceDescriptor"),Io=n((e={})=>{let t=D(e.appUrl),r=D(e.updatedAt),o=D(e.toolName)||Le,s=Array.isArray(e.toolNames)?e.toolNames.map(D).filter(Boolean):[o],a={appUrl:t,updatedAt:r,resourceUri:ie,toolName:o,toolNames:s,protocolVersion:xo};return`<!doctype html>
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
        ${t?`<a href="${bt(t)}" target="_blank" rel="noreferrer">Open</a>`:""}
      </nav>
    </header>
    <section aria-label="MCP app state">
      <dl>
        <dt>Resource</dt><dd>${bt(ie)}</dd>
        <dt>Tool</dt><dd>${bt(o)}</dd>
        <dt>Host</dt><dd id="host">Not connected.</dd>
        <dt>Updated</dt><dd>${bt(r||"runtime")}</dd>
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
    const boot = ${Fs(a)};
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
</html>`},"buildKnowgrphMcpAppsHtml"),sr=n((e={})=>{let t=Pt(e);return{contents:[{uri:t.uri,mimeType:Ke,text:Io(e),_meta:t._meta}]}},"buildKnowgrphMcpAppsResourceReadResult");var u=Object.freeze({search:"search",fetch:"fetch",listSourceFiles:"list_source_files",readSourceFile:"read_source_file",readSharedDocument:"read_shared_document",inspectSharedDocumentStructure:"inspect_shared_document_structure",inspectLocalSettingsChatReadiness:"inspect_local_settings_chat_readiness",inspectLocalMainPanelState:"inspect_local_mainpanel_state",inspectLocalEditorWorkspaceState:"inspect_local_editor_workspace_state",inspectLocalChatPipelineState:"inspect_local_chat_pipeline_state",inspectLocalMainPanelChatCanvasPipeline:"inspect_local_mainpanel_chat_canvas_pipeline",inspectLocalWorkspaceDocument:"inspect_local_workspace_document",inspectLocalCanvasTopology:"inspect_local_canvas_topology",inspectLocalCanvasSnapshot:"inspect_local_canvas_snapshot",inspectLocal3dCameraPose:"inspect_local_3d_camera_pose",inspectLocal3dLayoutPositions:"inspect_local_3d_layout_positions",inspectLocal2dZoomViewport:"inspect_local_2d_zoom_viewport",inspectLocalSourceFilesSnapshot:"inspect_local_source_files_snapshot",inspectAgentSurface:"inspect_agent_surface"}),Vs="knowgrph";var Ys=n(()=>Object.freeze({readOnlyHint:!0,destructiveHint:!1,openWorldHint:!1,idempotentHint:!0}),"buildReadOnlyToolAnnotations"),q=Ys(),Js=Object.freeze({type:"object",additionalProperties:!0,required:["ids","results"],properties:{ids:{type:"array",items:{type:"string"}},results:{type:"array",items:{type:"object",additionalProperties:!0,required:["id","title","url"],properties:{id:{type:"string"},title:{type:"string"},url:{type:"string"},snippet:{type:"string"},workspaceId:{type:"string"},canonicalPath:{type:"string"}}}}}}),Xs=Object.freeze({type:"object",additionalProperties:!0,required:["id","title","content","text","url"],properties:{id:{type:"string"},title:{type:"string"},content:{type:"string"},text:{type:"string"},url:{type:"string"},metadata:{type:"object",additionalProperties:!0}}}),V=n((e,t=Vs)=>`${String(t||"").trim()}.${String(e||"").trim()}`,"buildKnowgrphWebMcpToolName"),ar=n((e={})=>{let t=String(e.defaultWorkspaceId||"").trim(),r=e.includeBrowserOnlyTools===!0;return[{name:u.search,webName:V(u.search),title:"Search Knowgrph Source Files",description:"Use this when an MCP host needs to search published Knowgrph Source Files and return stable document IDs for the `fetch` tool. Call this first for OpenAI Deep Research-style retrieval, Claude, Qwen Code, Kimi CLI, BytePlus ModelArk, and generic MCP clients.",inputSchema:{type:"object",additionalProperties:!1,required:["query"],properties:{query:{type:"string"},limit:{type:"number",default:10}}},outputSchema:Js,annotations:q},{name:u.fetch,webName:V(u.fetch),title:"Fetch Knowgrph Source File",description:"Use this when an MCP host needs the complete published Knowgrph Source File for an ID returned by `search`. Returns markdown as both `content` and `text` for OpenAI, Claude, Qwen Code, Kimi CLI, BytePlus ModelArk, and generic MCP clients.",inputSchema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"string"}}},outputSchema:Xs,annotations:q},{name:u.listSourceFiles,webName:V(u.listSourceFiles),title:"List Source Files",description:"Use this when an MCP host needs the published Knowgrph Source Files index as markdown.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.readSourceFile,webName:V(u.readSourceFile),title:"Read Source File",description:"Use this when an MCP host knows a published Knowgrph canonical path and needs that Editor Workspace markdown content. Defaults to the canonical docs workspace when workspaceId is omitted.",inputSchema:{type:"object",additionalProperties:!1,required:["canonicalPath"],properties:{canonicalPath:{type:"string"},workspaceId:t?{type:"string",default:t}:{type:"string"}}},annotations:q},{name:u.readSharedDocument,webName:V(u.readSharedDocument),title:"Read Shared Document",description:"Use this when an MCP host has a Knowgrph share token or public Knowgrph share/document URL and needs the published markdown content.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:q},{name:u.inspectSharedDocumentStructure,webName:V(u.inspectSharedDocumentStructure),title:"Inspect Shared Document Structure",description:"Use this when an MCP host has a Knowgrph share token or public Knowgrph share/document URL and needs frontmatter/body structure without mutating the document.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:q},...r?[{name:u.inspectLocalSettingsChatReadiness,webName:V(u.inspectLocalSettingsChatReadiness),title:"Inspect Local Settings Chat Readiness",description:"Inspect the active browser-local Knowgrph SettingsView chat readiness state for MainPanel MCP, Integrations, and Commerce, including provider, routing, and model discovery status.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocalMainPanelState,webName:V(u.inspectLocalMainPanelState),title:"Inspect Local MainPanel State",description:"Inspect the active browser-local Knowgrph MainPanel tab, search, and shared action state for MCP, Integrations, and Commerce readiness.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocalEditorWorkspaceState,webName:V(u.inspectLocalEditorWorkspaceState),title:"Inspect Local Editor Workspace State",description:"Inspect the active browser-local Knowgrph Editor Workspace and Markdown pane state, including pane visibility and live draft/frontmatter structure.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocalChatPipelineState,webName:V(u.inspectLocalChatPipelineState),title:"Inspect Local Chat Pipeline State",description:"Inspect the active browser-local Knowgrph FloatingPanel chat runtime, including streaming, workspace follow path, and LLM-to-workspace pipeline state.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocalMainPanelChatCanvasPipeline,webName:V(u.inspectLocalMainPanelChatCanvasPipeline),title:"Inspect Local MainPanel Chat Canvas Pipeline",description:"Inspect the active browser-local Knowgrph E2E readiness path from MainPanel MCP, Integrations, and Commerce through FloatingPanel Chat, workspace markdown/frontmatter, and canvas topology.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocalWorkspaceDocument,webName:V(u.inspectLocalWorkspaceDocument),title:"Inspect Local Workspace Document",description:"Inspect the active browser-local Knowgrph workspace markdown document structure without reading published storage routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocalCanvasTopology,webName:V(u.inspectLocalCanvasTopology),title:"Inspect Local Canvas Topology",description:"Inspect the active browser-local Knowgrph canvas topology summary from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocalCanvasSnapshot,webName:V(u.inspectLocalCanvasSnapshot),title:"Inspect Local Canvas Snapshot",description:"Inspect the active browser-local Knowgrph canvas SVG snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocal3dCameraPose,webName:V(u.inspectLocal3dCameraPose),title:"Inspect Local 3D Camera Pose",description:"Inspect the active browser-local Knowgrph 3D camera pose from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocal3dLayoutPositions,webName:V(u.inspectLocal3dLayoutPositions),title:"Inspect Local 3D Layout Positions",description:"Inspect the active browser-local Knowgrph 3D layout positions from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocal2dZoomViewport,webName:V(u.inspectLocal2dZoomViewport),title:"Inspect Local 2D Zoom Viewport",description:"Inspect the active browser-local Knowgrph 2D zoom and viewport state from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocalSourceFilesSnapshot,webName:V(u.inspectLocalSourceFilesSnapshot),title:"Inspect Local Source Files Snapshot",description:"Inspect the active browser-local Knowgrph Source Files runtime snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q}]:[],{name:u.inspectAgentSurface,webName:V(u.inspectAgentSurface),title:"Inspect Agent Surface",description:"Use this when an MCP Apps-capable host or generic MCP client needs to inspect Knowgrph agent-ready discovery, MCP Apps readiness, OpenAPI, and skill metadata.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},outputSchema:Oo,annotations:q,_meta:To()}].map(s=>({...s,securitySchemes:Array.isArray(s.securitySchemes)&&s.securitySchemes.length?s.securitySchemes:or()}))},"buildKnowgrphAgentReadyToolContracts");var vo=n((e={})=>{let t=String(e.baseUrl||"").replace(/\/+$/,""),r=t?new URL(`${t}/`).origin:"";return{...{baseUrl:t,healthUrl:`${t}/health`,mcpUrl:`${t}/mcp`,apiCatalogUrl:`${t}/.well-known/api-catalog`,openApiUrl:`${t}/.well-known/openapi.json`,mcpServerCardUrl:`${t}/.well-known/mcp/server-card.json`,agentCardUrl:`${t}/.well-known/agent-card.json`,agentSkillsUrl:`${t}/.well-known/agent-skills/index.json`,commerceUrls:{acpDiscoveryUrl:`${r}/.well-known/acp.json`,ucpProfileUrl:`${r}/.well-known/ucp`,mppOpenApiUrl:`${r}/openapi.json`,x402PaymentRequiredUrl:`${r}/api/payments/commerce/x402`},health:e.health,apiCatalog:e.apiCatalog,openApi:e.openApi,mcpServerCard:e.mcpServerCard,agentCard:e.agentCard,agentSkills:e.agentSkills,commerce:e.commerce},mcpAppsServerReadiness:Co({baseUrl:t,updatedAt:e.updatedAt||e.health?.updatedAt||"",mcpServerCard:e.mcpServerCard})}},"buildAgentSurfaceInspectionPayload");var ir=n((e={})=>{let t=e.toolNames||{},r=String(e.defaultWorkspaceId||"").trim(),o=e.buildStorageDocPath,s=e.fetchSourceFilesIndexResponse,a=e.fetchStorageMarkdownResponse,i=e.resolveSharedDocumentInput,c=e.inspectSharedDocumentStructure,l=e.buildAgentSurfaceInspection,p=n(d=>String(d||"").trim(),"normalizeString"),m=p(e.publicBaseUrl).replace(/\/+$/,""),f=n(d=>String(d||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),R=n(d=>{try{return decodeURIComponent(String(d||""))}catch{return String(d||"")}},"safeDecodeURIComponent"),_=n(d=>{let h=p(d).split("/").filter(Boolean);return h[h.length-1]||p(d)||"Knowgrph Source File"},"titleFromCanonicalPath"),k=n((d,h=220)=>{let g=p(d).replace(/\s+/g," ");return g.length<=h?g:`${g.slice(0,h-1)}\u2026`},"truncateSnippet"),H=Math.max(0,Math.min(50,Number.isFinite(Number(e.searchContentScanMax))?Math.floor(Number(e.searchContentScanMax)):32)),U=Math.max(1e3,Math.min(5e4,Number.isFinite(Number(e.searchContentMaxChars))?Math.floor(Number(e.searchContentMaxChars)):24e3)),$=Math.max(1,Math.min(8,Number.isFinite(Number(e.searchContentConcurrency))?Math.floor(Number(e.searchContentConcurrency)):4)),re=new Set(["a","an","and","are","as","at","be","by","can","do","does","for","from","how","i","in","is","it","of","on","or","the","this","to","what","when","where","which","who","why","with"]),W=n(d=>p(d).toLowerCase().split(/[^a-z0-9:_./-]+/).map(p).filter(h=>h&&!re.has(h)),"tokenizeSearchQuery"),T=n((d,h)=>h.reduce((g,b)=>{let N=String(d||""),F=0,w=0;for(;w<N.length;){let E=N.indexOf(b,w);if(E<0)break;F+=1,w=E+Math.max(1,b.length)}return g+F},0),"countTokenHits"),I=n((d,h,g=260)=>{let b=p(d).replace(/\s+/g," ");if(!b)return"";let N=b.toLowerCase(),F=h.map(Q=>N.indexOf(Q)).filter(Q=>Q>=0).sort((Q,Re)=>Q-Re)[0];if(!Number.isFinite(F))return k(b,g);let w=Math.max(0,F-Math.floor(g/3)),E=Math.min(b.length,w+g);return`${w>0?"\u2026":""}${b.slice(w,E)}${E<b.length?"\u2026":""}`},"snippetAroundSearchHit"),J=n(async(d,h)=>{let g=new Array(d.length),b=0,N=Array.from({length:Math.min($,d.length)},async()=>{for(;b<d.length;){let F=b;b+=1,g[F]=await h(d[F],F)}});return await Promise.all(N),g},"runBoundedConcurrent"),K=n(({workspaceId:d="",canonicalPath:h=""}={})=>{let g=o(p(h),p(d));return m?`${m}${g}`:g},"buildPublicDocUrl");if(!!(t.search||t.fetch||t.listSourceFiles||t.readSourceFile||t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof o!="function")throw new Error("buildStorageDocPath is required");if((t.search||t.listSourceFiles)&&typeof s!="function")throw new Error("fetchSourceFilesIndexResponse is required");if((t.fetch||t.readSourceFile||t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof a!="function")throw new Error("fetchStorageMarkdownResponse is required");if((t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof i!="function")throw new Error("resolveSharedDocumentInput is required");if(t.inspectSharedDocumentStructure&&typeof c!="function")throw new Error("inspectSharedDocumentStructure is required");if(t.inspectAgentSurface&&typeof l!="function")throw new Error("buildAgentSurfaceInspection is required");let v=n(async(d={})=>{let h=p(d.canonicalPath);if(!h)throw new Error("canonicalPath is required");let g=p(d.workspaceId),b=await a(o(h,g));if(!b.ok)throw new Error(`read_source_file failed with ${b.status}`);return{workspaceId:g||r,canonicalPath:h,markdown:await b.text()}},"readSourceFile"),M=n(async(d={})=>{let h=i(d);if(!h)throw new Error("shareToken or shareUrl must resolve to a published Knowgrph document");let g=p(h.workspaceId),b=p(h.canonicalPath),N=await a(o(b,g));if(!N.ok)throw new Error(`read_shared_document failed with ${N.status}`);return{workspaceId:g||r,canonicalPath:b,markdown:await N.text()}},"readSharedDocument"),j=n(async(d={})=>{let h=await M(d);return c(h)},"inspectSharedDocument"),oe=n(({workspaceId:d="",canonicalPath:h=""}={})=>`kgdoc:${encodeURIComponent(p(d))}:${encodeURIComponent(p(h))}`,"buildSearchFetchId"),pe=n(d=>{let h=p(d),g=h.match(/^kgdoc:([^:]*):(.*)$/);if(g)return{workspaceId:R(g[1]||""),canonicalPath:R(g[2]||"")};let b=h.match(/\/(?:api\/storage\/doc|knowgrph\/doc)\/([^/\s)]+)\/([^\s)]+)$/);if(b)return{workspaceId:R(b[1]||""),canonicalPath:R(b[2]||"")};let N=h.match(/\/(?:api\/storage\/doc-default|knowgrph\/doc-default)\/([^\s)]+)$/);return N?{workspaceId:"",canonicalPath:R(N[1]||"")}:null},"parseSearchFetchId"),we=n(d=>{let h=f(d).split(`
`),g=new Map,b=n(({workspaceId:N="",canonicalPath:F="",line:w=""}={})=>{let E=p(F);if(!E)return;let Q=p(N),Re=oe({workspaceId:Q,canonicalPath:E});g.has(Re)||g.set(Re,{id:Re,title:_(E),url:K({workspaceId:Q,canonicalPath:E}),snippet:k(w||E),workspaceId:Q||r,canonicalPath:E})},"addEntry");for(let N of h){let F=/\/(?:api\/storage\/doc|knowgrph\/doc)\/([^/\s)\]]+)\/([^\s)\]]+)/g,w=/\/(?:api\/storage\/doc-default|knowgrph\/doc-default)\/([^\s)\]]+)/g;for(let E of N.matchAll(F))b({workspaceId:R(E[1]||""),canonicalPath:R(E[2]||""),line:N});for(let E of N.matchAll(w))b({workspaceId:"",canonicalPath:R(E[1]||""),line:N})}return Array.from(g.values())},"extractSearchEntriesFromSourceFilesIndex"),P=n(async(d={})=>{let h=p(d.query);if(!h)throw new Error("query is required");let g=Math.max(1,Math.min(25,Number.isFinite(Number(d.limit))?Math.floor(Number(d.limit)):10)),b=await s();if(!b.ok)throw new Error(`search failed with ${b.status}`);let N=await b.text(),F=we(N),w=W(h),E=w.join(" "),Q=F.map(L=>{let Z=`${L.title}
${L.canonicalPath}
${L.workspaceId}
${L.snippet}`.toLowerCase(),dt=E&&Z.includes(E)?w.length*4:0,mt=w.reduce((ht,qt)=>ht+(Z.includes(qt)?2:0),0);return{...L,score:dt+mt}}),Re=Q.slice().sort((L,Z)=>Z.score-L.score||L.title.localeCompare(Z.title)).slice(0,H).filter(L=>/\.md(?:$|[?#])/i.test(L.canonicalPath)),ut=new Map;await J(Re,async L=>{let Z=pe(L.id);if(!Z?.canonicalPath)return null;try{let dt=await a(o(Z.canonicalPath,Z.workspaceId));if(!dt.ok)return null;let mt=(await dt.text()).slice(0,U),ht=mt.toLowerCase(),qt=E&&ht.includes(E)?w.length*6:0,ys=T(ht,w),Dr=qt+ys;if(Dr<=0)return null;ut.set(L.id,{score:Dr,snippet:I(mt,w)})}catch{return null}return null});let zt=Q.map(L=>{let Z=ut.get(L.id);return{...L,score:L.score+(Z?.score||0),snippet:Z?.snippet||L.snippet}}).filter(L=>L.score>0).sort((L,Z)=>Z.score-L.score||L.title.localeCompare(Z.title)).slice(0,g).map(({score:L,...Z})=>Z);return{ids:zt.map(L=>L.id),results:zt,query:h,totalResults:zt.length}},"searchSourceFiles"),y=n(async(d={})=>{let h=pe(d.id);if(!h?.canonicalPath)throw new Error("id must be a stable Knowgrph Source File id returned by search");let g=await v(h),b=K(h);return{id:oe(h),title:_(g.canonicalPath),content:g.markdown,text:g.markdown,url:b,metadata:{workspaceId:g.workspaceId,canonicalPath:g.canonicalPath,contentType:"text/markdown",source:"knowgrph-source-files"}}},"fetchSourceFileBySearchId"),S={};return t.search&&(S[t.search]=P),t.fetch&&(S[t.fetch]=y),t.listSourceFiles&&(S[t.listSourceFiles]=async()=>{let d=await s();if(!d.ok)throw new Error(`list_source_files failed with ${d.status}`);return{workspaceId:r,markdownIndex:await d.text()}}),t.readSourceFile&&(S[t.readSourceFile]=v),t.readSharedDocument&&(S[t.readSharedDocument]=M),t.inspectSharedDocumentStructure&&(S[t.inspectSharedDocumentStructure]=j),t.inspectAgentSurface&&(S[t.inspectAgentSurface]=async()=>l()),S},"createPublishedAgentReadyToolExecutors"),Qs=n(e=>`((...args) => {
  const n = (value) => value
  const __name = (value) => value
  return (${Function.prototype.toString.call(e)})(...args)
})`,"createBrowserSafeFunctionSource"),Mo=Qs(ir);var No=n((e={})=>{let t=n(P=>String(P||"").trim(),"normalizeString"),r=n(P=>String(P||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),o=n(P=>{let y=String(P||"").match(/^\s*/);return y?y[0].length:0},"readIndent"),s=n(P=>/^[A-Za-z0-9_:@-]+\s*:/.test(t(P)),"isYamlKeyLine"),a=n(P=>r(P).split(`
`),"splitLines"),i=n(P=>{let y=a(P),S=0;for(;S<y.length&&!t(y[S]);)S+=1;if(t(y[S])!=="---")return null;for(let d=S+1;d<y.length;d+=1)if(t(y[d])==="---")return{frontmatter:y.slice(S+1,d).join(`
`),body:y.slice(d+1).join(`
`)};return null},"extractLeadingFrontmatter"),c=n(P=>{let y=[];for(let S of a(P)){if(!t(S)||o(S)!==0)continue;let d=S.match(/^([A-Za-z0-9_:@-]+)\s*:/);d?.[1]&&y.push(d[1])}return Array.from(new Set(y)).sort((S,d)=>S.localeCompare(d))},"extractTopLevelFrontmatterKeys"),l=n((P,y)=>{let S=a(P),d=`${y}:`;for(let h=0;h<S.length;h+=1){let g=S[h],b=t(g);if(!b.startsWith(d))continue;let N=o(g),F=b.slice(d.length).trim();if(F)return{indent:N,inlineValue:F,blockLines:[],blockText:""};let w=[];for(let E=h+1;E<S.length;E+=1){let Q=S[E],Re=t(Q),ut=o(Q);if(Re&&ut<=N&&s(Q))break;w.push(Q)}return{indent:N,inlineValue:"",blockLines:w,blockText:w.join(`
`)}}return null},"extractYamlBlock"),p=n(P=>{let y=[];for(let S of a(P)){let d=t(S);if(!d||d.startsWith("- "))continue;let h=d.match(/^([A-Za-z0-9_:@-]+)\s*:/);h?.[1]&&y.push(h[1])}return Array.from(new Set(y)).sort((S,d)=>S.localeCompare(d))},"extractNestedYamlKeys"),m=n(P=>{let y=a(P).filter(h=>t(h));if(!y.length)return[];let S=Math.min(...y.map(o)),d=[];for(let h of y){if(o(h)!==S)continue;let g=t(h);if(g.startsWith("- "))continue;let b=g.match(/^([A-Za-z0-9_:@-]+)\s*:/);b?.[1]&&d.push(b[1])}return Array.from(new Set(d)).sort((h,g)=>h.localeCompare(g))},"extractDirectYamlKeys"),f=n(P=>{let y=t(P);if(!y.startsWith("[")||!y.endsWith("]"))return null;let S=y.slice(1,-1).trim();return S?S.split(",").map(d=>t(d)).filter(Boolean).length:0},"countInlineSequenceEntries"),R=n(P=>{let y=t(P);return y.startsWith('"')&&y.endsWith('"')||y.startsWith("'")&&y.endsWith("'")?y.slice(1,-1):y},"cleanYamlScalar"),_=n(P=>{let y=t(P);if(!y.startsWith("[")||!y.endsWith("]"))return null;let S=y.slice(1,-1).trim();return S?S.split(",").map(d=>R(d)).filter(Boolean):[]},"extractInlineSequenceValues"),k=n((P,y)=>{let S=l(P,y);if(!S)return[];if(S.inlineValue)return _(S.inlineValue)||[];let d=[],h=S.indent+2;for(let g of S.blockLines){let b=t(g);o(g)===h&&b.startsWith("- ")&&d.push(R(b.slice(2)))}return d},"extractYamlSequenceValues"),H=n((P,y)=>{let S=a(P),d=`${y}:`;for(let h of S){let g=t(h);if(g.startsWith(d))return R(g.slice(d.length))}return null},"extractTopLevelScalarValue"),U=n((P,y)=>{let S=l(P,y);if(!S)return null;if(S.inlineValue)return f(S.inlineValue);let d=0,h=S.indent+2;for(let g of S.blockLines)t(g)&&o(g)===h&&/^\s*-\s+/.test(g)&&(d+=1);return d},"countYamlSequenceEntries"),$=n(P=>{let y=[];for(let S of a(P)){let d=S.match(/^(#{1,6})\s+(.+?)\s*$/);d?.[2]&&y.push({depth:d[1].length,text:t(d[2])})}return y},"extractMarkdownHeadings"),re=t(e.workspaceId),W=t(e.canonicalPath),T=r(e.markdown),I=i(T),J=I?c(I.frontmatter):[],K=I?l(I.frontmatter,"flow"):null,X=K?p(K.blockText):[],v=I?l(I.frontmatter,"main_panel_integrations_demo"):null,M=I?l(I.frontmatter,"superagent_harness_demo"):null,j=M?l(M.blockText,"runtime_surfaces"):null,oe=new Set(["kg:subgraphs","clusters","groups","layers"]),pe=Array.from(new Set([...J,...X].filter(P=>oe.has(P)))).sort((P,y)=>P.localeCompare(y)),we=$(I?I.body:T);return{workspaceId:re,canonicalPath:W,markdownLength:T.length,lineCount:T?a(T).length:0,hasFrontmatter:!!I,topLevelKeys:J,frontmatterScalars:I?{kgCanvasRenderMode:H(I.frontmatter,"kgCanvasRenderMode"),kgCanvas2dRenderer:H(I.frontmatter,"kgCanvas2dRenderer"),deployed_api_claim:H(I.frontmatter,"deployed_api_claim")}:{},mainPanelIntegrationsDemo:v?{present:!0,mainPanelEntries:k(v.blockText,"main_panel_entries"),providerIds:k(v.blockText,"provider_ids"),providerLabels:k(v.blockText,"provider_labels"),taskCapabilities:k(v.blockText,"task_capabilities"),taskLevels:k(v.blockText,"task_levels"),integrationOpenTab:H(v.blockText,"integration_open_tab"),canvas2dRenderer:H(v.blockText,"canvas_2d_renderer"),sourceFile:H(v.blockText,"source_file")}:{present:!1},superAgentHarnessDemo:M?{present:!0,taskCapabilities:k(M.blockText,"task_capabilities"),taskLevels:k(M.blockText,"task_levels"),runtimeSurfaces:j?m(j.blockText):[]}:{present:!1},hasFlowBlock:!!K,flowKeys:X,flowNodeCount:K?U(K.blockText,"nodes"):null,flowConnectionCount:K?U(K.blockText,"connections")??U(K.blockText,"edges"):null,flowSubgraphCount:K?U(K.blockText,"subgraphs"):null,forbiddenGroupingKeys:pe,headingCount:we.length,headings:we.map(P=>P.text),bodyLength:t(I?I.body:T).length}},"inspectSharedDocumentStructure");var Ko="knowgrph-vdeoxpln/v0.1",G=Object.freeze({search:u.search,fetch:u.fetch,uiLaunch:"knowgrph.ui.launch",uiStop:"knowgrph.ui.stop",pipeline:"knowgrph.pipeline",graphragPipeline:"knowgrph.graphrag_pipeline",superagentRun:"knowgrph.superagent.run",videoRemixRun:"knowgrph.video_remix.run",browserApiRun:"knowgrph.browser_api.run",memoryAdd:"knowgrph.memory.add",memorySearch:"knowgrph.memory.search",memoryAssemblePrompt:"knowgrph.memory.assemble_prompt",vdeoxplnList:"knowgrph.vdeoxpln.list"}),Ie=Object.freeze({sourceFiles:"knowgrph-source-files",agentReady:"knowgrph-agent-ready",localMcp:"knowgrph-mcp-local",chatToCanvas:"knowgrph-chat-to-canvas",strybldr:"knowgrph-strybldr",researchVisual:"knowgrph-research-visual",memoryLayer:"knowgrph-memory-layer",commerceReadiness:"knowgrph-commerce-readiness"}),lr=n(e=>String(e||"").trim(),"normalizeString"),de=n(e=>Array.from(new Set((Array.isArray(e)?e:[]).map(lr).filter(Boolean))).sort((t,r)=>t.localeCompare(r)),"normalizeStringArray"),Uo=n(e=>{let t=new Set,r=[];for(let o of Array.isArray(e)?e:[]){let s=lr(o);!s||t.has(s)||(t.add(s),r.push(s))}return r},"normalizeOrderedStringArray"),cr=n(e=>Array.isArray(e)?e.map(cr):!e||typeof e!="object"?e:Object.keys(e).sort((t,r)=>t.localeCompare(r)).reduce((t,r)=>(t[r]=cr(e[r]),t),{}),"normalizeJsonValue"),Zs=n(e=>JSON.stringify(cr(e)),"stableStringifyVdeoxplnValue"),ea=n((e,t)=>{let r=lr(e)||"vdeoxpln";return`kgvx_${wt([r,Ko,Zs(t)])}`},"buildKnowgrphVdeoxplnSemanticKey");var ta=Object.freeze([{id:Ie.sourceFiles,title:"Knowgrph Source Files",purpose:"Discover, read, inspect, and route published Source Files and shared documents through the canonical storage and document-structure owners.",scope:"read-only-published",mutation:"read-only",triggers:["source files","published documents","shared document","read markdown","inspect document structure"],inputs:["workspace document","published markdown","share token","share URL","canonical path"],outputs:["source-files index","published markdown","document structure report"],owners:["canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/sourceFilesSignatures.ts","canvas/src/features/agent-ready/publishedToolExecutors.mjs","canvas/src/features/agent-ready/sharedDocumentStructureInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs"],tools:{published:[u.listSourceFiles,u.readSourceFile,u.readSharedDocument,u.inspectSharedDocumentStructure],browserLocal:[u.inspectLocalSourceFilesSnapshot],local:[G.search,G.fetch,G.vdeoxplnList]},workflow:["Resolve source identity from storage, share token, or canonical path.","Fetch through published storage/document executors.","Inspect structure with the shared document-structure owner.","Return read-only artifacts without graph mutation."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return source-read or structure errors without model calls."},artifactPolicy:{persistence:"published-read-only",graphMaterialization:"none",semanticKeyInputs:["workspaceId","canonicalPath","shareToken","toolContract"]},validation:["agent-ready:check","pages:check-sync","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","webmcp-html-fallback"]},{id:Ie.agentReady,title:"Knowgrph Agent Ready",purpose:"Inspect Knowgrph health, MCP, WebMCP, A2A, OpenAPI, commerce, and browser-local readiness without claiming deployed mutation.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["agent-ready","webmcp","mcp health","openapi","a2a","discovery","readiness"],inputs:["agent-ready base URL","browser runtime state","published metadata"],outputs:["agent surface inspection","browser-local readiness snapshot","metadata report"],owners:["canvas/src/features/agent-ready/knowgrphAgentReadyToolContract.mjs","canvas/src/features/agent-ready/webMcpRuntime.ts","canvas/src/features/agent-ready/agentSurfaceInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs","scripts/check-agent-ready.mjs"],tools:{published:[u.inspectAgentSurface],browserLocal:[u.inspectLocalSettingsChatReadiness,u.inspectLocalMainPanelState,u.inspectLocalEditorWorkspaceState,u.inspectLocalChatPipelineState,u.inspectLocalMainPanelChatCanvasPipeline,u.inspectLocalWorkspaceDocument,u.inspectLocalCanvasTopology,u.inspectLocalCanvasSnapshot,u.inspectLocal3dCameraPose,u.inspectLocal3dLayoutPositions,u.inspectLocal2dZoomViewport,u.inspectLocalSourceFilesSnapshot],local:[G.vdeoxplnList]},workflow:["Inspect published agent-ready metadata.","Inspect browser-local state only when running inside the app runtime.","Report scope boundaries between Pages read-only tools and browser-local inspectors."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return metadata inspection errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["toolContracts","metadataRoutes","browserLocalToolNames"]},validation:["agent-ready:check","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","browser-webmcp"]},{id:Ie.localMcp,title:"Knowgrph Local MCP",purpose:"Expose local UI launch, pipeline, GraphRAG, superagent, Agentic Canvas OS planning, video-remix run planning, browser bridge, and vdeoxpln inspection tools through the stdio MCP server.",scope:"local-stdio",mutation:"local-confirmed",triggers:["local mcp","launch canvas","run pipeline","graphrag","superagent","agentic canvas os","video remix","browser api","list vdeoxpln"],inputs:["local root","workspace file","graph data","pipeline config","reference URL","source cards","browser API runtime"],outputs:["local tool result","pipeline artifact","superagent report","agentic canvas os dashboard plan","video remix run manifest","vdeoxpln registry snapshot"],owners:["mcp/local-tool-contract.js","mcp/server.js","mcp/director-lanes.js","mcp/director-workflow.js","mcp/video-remix-runtime.js","mcp/README.md","knowgrph_parser/superagent_harness.py","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[G.search,G.fetch,G.uiLaunch,G.uiStop,G.pipeline,G.graphragPipeline,G.superagentRun,G.videoRemixRun,G.browserApiRun,G.vdeoxplnList]},workflow:["List local tools from the shared local MCP contract.","Run only path-guarded local-root operations.","Run video-remix orchestration as an approval-gated local manifest before any paid provider call.","Summarize artifacts and registry metadata in the MCP result."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"tool-owned",fallback:"Return local command failure and detected artifacts."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"tool-owned",semanticKeyInputs:["localToolNames","rootScope","artifactList"]},validation:["vdeoxpln:check","mcpLocalToolContract"],publish:["local-mcp-docs"]},{id:Ie.chatToCanvas,title:"Knowgrph Chat To Canvas",purpose:"Route AI-assisted graph generation through FloatingPanel Chat, KGC validation, Workspace FS, Source Files, and Canvas apply owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["chat to canvas","generate graph","kgc markdown","flow.subgraphs","apply to canvas"],inputs:["chat request","workspace context","selection context","source evidence","model settings"],outputs:["validated KGC Markdown","workspace artifact","GraphData","canvas topology snapshot"],owners:["canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitRequest.ts","canvas/src/features/chat/chatMarkdownValidation.ts","canvas/src/features/chat/chatKgcCanvasApply.ts","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/lib/graph/semanticKey.ts"],tools:{published:[],browserLocal:[u.inspectLocalChatPipelineState,u.inspectLocalMainPanelChatCanvasPipeline,u.inspectLocalWorkspaceDocument,u.inspectLocalCanvasTopology,u.inspectLocalCanvasSnapshot],local:[G.vdeoxplnList]},workflow:["Vdeoxpln context through the shared chat submit request owner.","Call provider transport only after typed request construction.","Validate KGC Markdown with bounded retries.","Persist through Workspace FS and apply through the existing Canvas path."],aiPolicy:{mode:"required-for-generation",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Persist validation or provider failure as reviewable chat/workspace state."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["chatContextScope","workspacePath","graphSemanticKey","sourceLayerHash"]},validation:["chatResponseContract","sourceFiles","vdeoxpln:check"],publish:["browser-webmcp","mainpanel-mcp"]},{id:Ie.strybldr,title:"Knowgrph Strybldr",purpose:"Turn image or media source units into editable Storyboard cards and bounded media handoff artifacts through Strybldr and shared renderer owners.",scope:"browser-local-source-backed",mutation:"browser-local-user-mediated",triggers:["strybldr","storyboard","image to storyboard","media handoff","visual brief"],inputs:["image source unit","media metadata","workspace document","storyboard graph"],outputs:["Strybldr Markdown","Storyboard graph cards","camera-aware media handoff prompt","canvas snapshot"],owners:["canvas/src/features/strybldr/strybldrStoryboard.ts","canvas/src/features/strybldr","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-strybldr-prd-tad.md"],tools:{published:[],browserLocal:[u.inspectLocalSourceFilesSnapshot,u.inspectLocalCanvasTopology,u.inspectLocalCanvasSnapshot],local:[G.vdeoxplnList]},workflow:["Import media through existing workspace/source owners.","Build Strybldr cards with source-unit provenance.","Persist Camera reframe settings on selected graph cards.","Render through the shared Storyboard surface.","Compile bounded media handoff only after user approval."],aiPolicy:{mode:"optional-for-refinement",maxAttempts:1,tokenBudget:"user-approved-provider-step",fallback:"Keep editable storyboard and structured handoff error."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"storyboard-graph",semanticKeyInputs:["sourceUnitId","strybldrRunId","graphSemanticKey","strybldrCamera"]},validation:["strybldr","rendererPipelineNeutrality","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:Ie.researchVisual,title:"Knowgrph Research Visual",purpose:"Create file-backed research visual workflows from source material using Knowgrph parsing, Source Files, Storyboard, renderer, and chat owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["research visual","explainer","formula","algorithm","proof","dynamic scene","storyboard"],inputs:["paper excerpt","formula","algorithm","figure","workspace document","source evidence"],outputs:["mechanism brief","storyboard","renderer-neutral scene plan","validated KGC Markdown"],owners:["canvas/src/features/parsers/default.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-vdeoxpln-prd-tad.md"],tools:{published:[],browserLocal:[u.inspectLocalChatPipelineState,u.inspectLocalSourceFilesSnapshot,u.inspectLocalCanvasTopology],local:[G.vdeoxplnList]},workflow:["Extract source-backed semantic units into workspace artifacts.","Plan exact deterministic graph/storyboard layers before optional AI support.","Persist artifacts through Workspace FS and Source Files.","Use Canvas/Storyboard renderers as projections of graph state."],aiPolicy:{mode:"optional-for-drafting",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Return deterministic source brief with unresolved questions."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["sourceSignature","graphSemanticKey","rendererId"]},validation:["sourceFiles","chatResponseContract","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:Ie.memoryLayer,title:"Knowgrph Memory Layer",purpose:"Persist, retrieve, and inject explicitly scoped agent memories through a provider-neutral local harness with Mem0-ready runtime boundaries.",scope:"local-stdio-and-browser-local",mutation:"local-scoped-memory",triggers:["memory layer","long-term memory","cross-session context","mem0","personalization","prompt memory"],inputs:["user or agent message","runtime scope","memory query"],outputs:["memory write result","ranked memory results","bounded prompt context","memory cost log"],owners:["canvas/src/features/memory/aiAgentsMemoryLayerContract.mjs","mcp/memory-layer-runtime.js","mcp/local-tool-contract.js","mcp/server.js","docs/documents/knowgrph-ai-agents-memory-layer-prd-tad.md"],tools:{published:[],browserLocal:[],local:[G.memoryAdd,G.memorySearch,G.memoryAssemblePrompt,G.vdeoxplnList]},workflow:["Require explicit runtime scope.","Add/search through the configured harness.","Inject only top-ranked memories within token budget."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"memory-harness-owned",fallback:"Return empty memory results or skip write while preserving the agent turn."},artifactPolicy:{persistence:"operator-configured-local-memory-store",graphMaterialization:"none",semanticKeyInputs:["memoryScope","operation","topK","providerMode"]},validation:["vdeoxpln:check","mcpLocalToolContract","aiAgentsMemoryLayer"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:Ie.commerceReadiness,title:"Knowgrph Commerce Readiness",purpose:"Inspect Commerce, payment worker, x402, ACP, UCP, MPP, and readiness metadata without bypassing the shared payment SSOT.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["commerce","payment","x402","acp","ucp","mpp","stripe","readiness"],inputs:["agent-ready metadata","commerce route health","browser readiness snapshot"],outputs:["commerce readiness report","payment route summary","agent-ready commerce metadata"],owners:["canvas/src/features/panels/views/CommerceHubView.tsx","canvas/src/features/agent-ready/browserLocalSurfaceSnapshots.ts","cloudflare/pages/knowgrph-agent-ready-commerce.mjs","cloudflare/workers/knowgrph-payment/agenticCommerce.ts","grph-shared/src/payments/agenticCommerceSsot.ts"],tools:{published:[u.inspectAgentSurface],browserLocal:[u.inspectLocalSettingsChatReadiness,u.inspectLocalMainPanelState],local:[G.vdeoxplnList]},workflow:["Inspect published commerce discovery metadata.","Read browser-local readiness snapshots when available.","Report payment capability boundaries without initiating checkout."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return route or metadata errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["commerceSemanticKey","routeHealth","toolContract"]},validation:["agent-ready:check","mainPanelCommerce","vdeoxpln:check"],publish:["pages-agent-skills","mainpanel-mcp","browser-webmcp"]}]),ra=n(e=>{let t={published:de(e.tools?.published),browserLocal:de(e.tools?.browserLocal),local:de(e.tools?.local)},r=ea(e.id,{id:e.id,scope:e.scope,mutation:e.mutation,owners:de(e.owners),tools:t,triggers:de(e.triggers),outputs:de(e.outputs),workflow:Uo(e.workflow),artifactPolicy:e.artifactPolicy||{},aiPolicy:e.aiPolicy||{}}),o=`/.well-known/agent-skills/${e.id}.md`;return Object.freeze({...e,version:Ko,triggers:de(e.triggers),inputs:de(e.inputs),outputs:de(e.outputs),owners:de(e.owners),tools:Object.freeze(t),workflow:Uo(e.workflow),validation:de(e.validation),publish:de(e.publish),semanticKey:r,agentSkill:Object.freeze({name:e.id,type:"markdown",description:e.purpose,path:o})})},"normalizeVdeoxpln"),Lo=n(()=>ta.map(ra).sort((e,t)=>e.id.localeCompare(t.id)),"buildKnowgrphVdeoxplnRegistry");var $o=n((e=Lo())=>e.map(t=>({...t.agentSkill,vdeoxpln:{id:t.id,title:t.title,scope:t.scope,mutation:t.mutation,semanticKey:t.semanticKey,tools:t.tools,publish:t.publish}})),"buildKnowgrphVdeoxplnAgentSkillDefinitions"),_e=n(e=>e&&e.length?e.map(t=>`- ${t}`).join(`
`):"- none","markdownList"),oa=n(e=>`# ${e.title} Skill

Use this skill when: ${e.purpose}

## Contract

- Vdeoxpln id: \`${e.id}\`
- Contract version: \`${e.version}\`
- Semantic key: \`${e.semanticKey}\`
- Scope: \`${e.scope}\`
- Mutation boundary: \`${e.mutation}\`

## Triggers

${_e(e.triggers)}

## Inputs

${_e(e.inputs)}

## Outputs

${_e(e.outputs)}

## Tools

Published tools:
${_e(e.tools.published)}

Browser-local tools:
${_e(e.tools.browserLocal)}

Local MCP tools:
${_e(e.tools.local)}

## Workflow

${_e(e.workflow)}

## Source Owners

${_e(e.owners)}

## Artifact Policy

- Persistence: \`${e.artifactPolicy?.persistence||"none"}\`
- Graph materialization: \`${e.artifactPolicy?.graphMaterialization||"none"}\`
- Semantic-key inputs:
${_e(e.artifactPolicy?.semanticKeyInputs||[])}

## AI Policy

- Mode: \`${e.aiPolicy?.mode||"none"}\`
- Max attempts: \`${String(e.aiPolicy?.maxAttempts??0)}\`
- Token budget: \`${String(e.aiPolicy?.tokenBudget??0)}\`
- Fallback: ${e.aiPolicy?.fallback||"Return deterministic errors without model calls."}

## Validation

${_e(e.validation)}

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
`,"buildKnowgrphVdeoxplnMarkdown"),Do=n((e=Lo())=>Object.fromEntries(e.map(t=>[t.id,oa(t)])),"buildKnowgrphVdeoxplnMarkdownByName");var na={[u.search]:{id:"search",tags:["mcp","search","source-files","read-only"],examples:["Search Knowgrph Source Files for renderer architecture."],outputModes:["application/json"]},[u.fetch]:{id:"fetch",tags:["mcp","fetch","source-files","markdown","read-only"],examples:["Fetch the Knowgrph Source File id returned by search."],outputModes:["text/markdown","application/json"]},[u.listSourceFiles]:{id:"list-source-files",tags:["mcp","discovery","source-files","read-only"],examples:["List the published Knowgrph Source Files."],outputModes:["text/markdown","application/json"]},[u.readSourceFile]:{id:"read-source-file",tags:["mcp","read","markdown","workspace"],examples:["Read the published source file for docs/getting-started.md."],outputModes:["text/markdown","application/json"]},[u.readSharedDocument]:{id:"read-shared-document",tags:["mcp","read","shared-document","markdown"],examples:["Read the Knowgrph shared document behind this share URL."],outputModes:["text/markdown","application/json"]},[u.inspectSharedDocumentStructure]:{id:"inspect-shared-document-structure",tags:["mcp","inspect","shared-document","structure"],examples:["Inspect the structure of this Knowgrph shared document."],outputModes:["application/json","text/markdown"]},[u.inspectAgentSurface]:{id:"inspect-agent-surface",tags:["mcp","agent-ready","discovery","metadata"],examples:["Show the Knowgrph agent discovery metadata."],outputModes:["application/json","text/markdown"]}},tt=$o(),Ho=n(e=>e.map(t=>{let r=na[t.name]||{id:String(t.name||"").replace(/_/g,"-"),tags:["mcp","read-only"],examples:[`Call ${t.name} on Knowgrph.`],outputModes:["application/json"]};return{id:r.id,name:t.title,description:t.description,tags:r.tags,examples:r.examples,inputModes:["application/json","text/plain"],outputModes:r.outputModes}}),"buildAgentReadyA2aSkills"),jo=n(async({appUrl:e,updatedAt:t,sha256ByName:r})=>({$schema:"https://agent-skills.dev/schemas/skills-index.v0.2.json",updated_at:t,skills:await Promise.all(tt.map(async o=>({name:o.name,type:o.type,description:o.description,url:`${String(e||"").replace(/\/+$/,"")}${o.path}`,sha256:await r[o.name],vdeoxpln:o.vdeoxpln})))}),"buildAgentReadyAgentSkillsIndex"),Bo=n(({appBasePath:e,appA2aAgentCardPath:t,healthPath:r})=>{let o=Object.fromEntries(tt.map(s=>[`${e}${s.path}`,{get:{summary:`Read the ${s.name} agent skill markdown`,responses:{200:{description:`Agent skill markdown for ${s.name}`}}}}]));return{[r]:{get:{summary:"Read the Knowgrph agent-ready health status",responses:{200:{description:"Health status in application/health+json format"}}}},[`${e}/mcp`]:{get:{summary:"Read MCP transport metadata",responses:{200:{description:"MCP transport metadata"}}},post:{summary:"Send a JSON-RPC MCP request",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0}}}},responses:{200:{description:"JSON-RPC result payload"}}}},[t]:{get:{summary:"Read the Knowgrph A2A Agent Card",responses:{200:{description:"A2A Agent Card JSON"}}}},"/api/storage/llms.txt":{get:{summary:"Read the Source Files LLM index",responses:{200:{description:"Plain-text LLM index"}}}},"/api/storage/source-files":{get:{summary:"List published Source Files",responses:{200:{description:"Source Files index"}}}},"/api/storage/source-files/{workspaceId}":{get:{summary:"List published Source Files for a workspace",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped Source Files index"}}}},"/api/storage/source-files/{workspaceId}/llms.txt":{get:{summary:"Read the workspace-scoped Source Files LLM index",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped plain-text LLM index"}}}},"/api/storage/doc-default/{canonicalPath}":{get:{summary:"Read a default-workspace Source File markdown document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document from the default Editor Workspace"},404:{description:"Document not found"}}}},"/api/storage/doc/{workspaceId}/{canonicalPath}":{get:{summary:"Read a Source File markdown document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document"},404:{description:"Document not found"}}}},"/api/storage/blob/{workspaceId}/{canonicalPath}":{post:{summary:"Store a workspace binary artifact in R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],requestBody:{required:!0,content:{"application/octet-stream":{schema:{type:"string",format:"binary"}}}},responses:{200:{description:"R2 object coordinates and public storage route"},400:{description:"Invalid workspace, path, or declared payload size"}}},get:{summary:"Read a workspace binary artifact from R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Binary artifact body with stored HTTP metadata"},404:{description:"Object not found"}}},head:{summary:"Read workspace binary artifact metadata from R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Binary artifact metadata"},404:{description:"Object not found"}}}},[`${e}/doc-default/{canonicalPath}`]:{get:{summary:"Read a default-workspace shared document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/doc/{workspaceId}/{canonicalPath}`]:{get:{summary:"Read a shared document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/share/{shareToken}`]:{get:{summary:"Read a shared document through the canonical opaque share token route",parameters:[{name:"shareToken",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or published markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},...o}},"buildAgentReadyOpenApiPaths");var sa=n((e,t)=>{let r=new URL(e.url);return r.pathname=`${t}/`,r.search="",r.hash="",new Request(r.toString(),e)},"buildKnowgrphAppShellAssetRequest"),Go=n(async(e,t)=>{let r=sa(e.request,t);return typeof e.env?.ASSETS?.fetch=="function"?e.env.ASSETS.fetch(r):e.next(r)},"fetchKnowgrphAppShellAsset");var aa="kgShare",xp=typeof TextEncoder<"u"?new TextEncoder:null,Wo=typeof TextDecoder<"u"?new TextDecoder:null;var ia=n(e=>{if(typeof Buffer<"u")return Uint8Array.from(Buffer.from(e,"base64"));let t=atob(e),r=new Uint8Array(t.length);for(let o=0;o<t.length;o+=1)r[o]=t.charCodeAt(o);return r},"fromBase64");var ca=n(e=>{let t=String(e||"").replace(/-/g,"+").replace(/_/g,"/");if(!t)return"";let r=t.length%4;return r?`${t}${"=".repeat(4-r)}`:t},"fromBase64Url");var la=n(e=>{if(!Wo)throw new Error("TextDecoder is required to decode published doc share tokens");return Wo.decode(ia(ca(e)))},"decodeUtf8Base64Url"),Vo=n(e=>String(e||"").trim()||null,"normalizeWorkspaceId"),dr=n(e=>String(e||"").trim(),"normalizeCanonicalPath"),pr="/knowgrph",Fo="/doc-default/",zo="/doc/",qo="/share/",pa="kgWorkspaceId",ua="kgCanonicalPath",da=n(e=>{let t=String(e||"").trim();return t?`/${t.replace(/^\/+|\/+$/g,"")}`:pr},"normalizeAppBasePath"),ur=n(e=>{let t=dr(e?.canonicalPath);return t?{canonicalPath:t,workspaceId:Vo(e?.workspaceId)}:null},"normalizePublishedDocIdentity"),Yo=n((e,t)=>{let r=da(t),o=String(e||"").replace(/\/+$/,"")||"/";if(!o.startsWith(r))return null;let s=o.slice(r.length)||"/";if(s.startsWith(qo)){let c=decodeURIComponent(s.slice(qo.length)).trim();return mr(c)}if(s.startsWith(Fo))return ur({canonicalPath:decodeURIComponent(s.slice(Fo.length))});if(!s.startsWith(zo))return null;let a=s.slice(zo.length),i=a.indexOf("/");return i<1?null:ur({workspaceId:decodeURIComponent(a.slice(0,i)),canonicalPath:decodeURIComponent(a.slice(i+1))})},"parsePublishedDocPathname"),ma=n(e=>{let t=mr(e?.get(aa));if(t)return t;let r=dr(decodeURIComponent(String(e?.get(ua)||"")));if(r)return ur({workspaceId:decodeURIComponent(String(e?.get(pa)||"")),canonicalPath:r});let o=String(e?.get("kgPath")||"").trim();return o?Yo(`${pr}${o}`,pr):null},"parsePublishedDocSearchParams");var mr=n(e=>{let t=String(e||"").trim();if(!t)return null;try{let r=JSON.parse(la(t)),o=dr(r?.canonicalPath);return o?{canonicalPath:o,workspaceId:Vo(r?.workspaceId)}:null}catch{return null}},"decodePublishedDocShareToken"),At=n((e={})=>{let t=mr(e.shareToken);if(t)return t;let r=String(e.shareUrl||"").trim();if(!r)return null;try{let o=String(e.baseUrl||"https://airvio.co").trim()||"https://airvio.co",s=new URL(r,o);return ma(s.searchParams)||Yo(s.pathname,e.appBasePath)}catch{return null}},"resolvePublishedDocIdentity"),Jo=String.raw`(args = {}) => {
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
}`;var kt={push:"/api/storage/push",pull:"/api/storage/pull",collabSave:"/api/storage/collab/save",chatSession:"/api/storage/chat/session",chatRelay:"/api/storage/chat/relay",chatPoliciesPrefix:"/api/storage/chat/policies/",chatAuditPrefix:"/api/storage/chat/audit/",exportPrefix:"/api/storage/export/",docPrefix:"/api/storage/doc/",defaultDocPrefix:"/api/storage/doc-default/",blobPrefix:"/api/storage/blob/",mediaAssetPersist:"/api/storage/media/assets",mediaAssetPrefix:"/api/storage/media/assets/",mediaPrefix:"/api/storage/media/",sourceFilesIndex:"/api/storage/source-files",sourceFilesIndexPrefix:"/api/storage/source-files/",sourceFilesLlms:"/api/storage/llms.txt"};var Xo=n((e,t)=>`${kt.docPrefix}${encodeURIComponent(String(e||"").trim())}/${encodeURIComponent(String(t||"").trim())}`,"buildKnowgrphStorageDocPath"),Qo=n(e=>`${kt.defaultDocPrefix}${encodeURIComponent(String(e||"").trim())}`,"buildKnowgrphStorageDefaultDocPath");var Zo=n(e=>{let t=String(e||"").trim();return t?`${kt.sourceFilesIndexPrefix}${encodeURIComponent(t)}`:kt.sourceFilesIndex},"buildKnowgrphStorageSourceFilesIndexPath");var B="https://airvio.co",xt="https://knowgrph-storage.huijoohwee.workers.dev",C="/knowgrph",x=`${B}${C}/`,en=`${B}/`,rt="kgws:canonical-docs",Ae="2026-06-05",Ve=`${C}/health`,qe=`${B}${Ve}`,tn="/.well-known/agent-card.json",hr=`${C}/.well-known/agent-card.json`,Et=`${B}${tn}`,gr=`${B}/api/storage/source-files`,ha=`${B}/api/storage/doc-default/{canonicalPath}`,ga=`${B}/api/storage/doc/{workspaceId}/{canonicalPath}`,fa=`${B}/api/storage/blob/{workspaceId}/{canonicalPath}`,rn="knowgrph-agent-ready-pages";var on=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${C}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${C}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${Ve}>; rel="status"; type="application/health+json"`,`<${C}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${tn}>; rel="describedby"; type="application/json"`].join(", "),nn=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${x}.

## Discovery

- Crawl policy: ${x}robots.txt
- Sitemap: ${x}sitemap.xml
- API catalog: ${x}.well-known/api-catalog
- Auth.md registration instructions: ${en}auth.md
- Health: ${qe}
- MCP server card: ${x}.well-known/mcp/server-card.json
- A2A Agent Card: ${Et}
- Agent skills: ${x}.well-known/agent-skills/index.json
- LLM reference: ${x}llms.txt

## APIs

- Agent-ready status: ${qe}
- HTTP MCP: ${x}mcp
- Storage API: ${B}/api/storage/
- Source Files index: ${gr}
- Default Source File documents: ${ha}
- Workspace Source File documents: ${ga}
- Workspace binary artifacts: ${fa}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes seven read-only tools for published Source Files, shared documents, data-first search/fetch, and agent-surface inspection.
- HTTP MCP and local stdio expose shared read-only prompt templates through \`prompts/list\` and \`prompts/get\` for Source Files research and agent-surface inspection.
- HTTP MCP and local stdio expose Source Files resource templates through \`resources/templates/list\`; \`kgdoc://source-file/{id}\` reads reuse the existing \`fetch\` executor.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared seven-tool WebMCP surface on \`${x}\` HTML routes.

## MCP Apps

- HTTP MCP advertises \`io.modelcontextprotocol/ui\` with \`text/html;profile=mcp-app\`.
- \`inspect_agent_surface\` links to the shared \`ui://knowgrph/agent-ready\` resource through \`_meta.ui.resourceUri\`.
- UI-linked tool descriptors expose no-auth \`securitySchemes\`, mirror them in \`_meta.securitySchemes\`, and set OpenAI widget accessibility metadata from the shared contract.
- \`resources/list\` and \`resources/read\` serve the inline, sandbox-friendly Knowgrph Agent Ready app resource while preserving text fallback and structured tool output; \`resources/templates/list\` exposes Source Files markdown reads under the standard MCP \`resources\` capability.
- The View initiates the MCP Apps \`ui/initialize\` handshake, sends \`ui/notifications/initialized\` and \`ui/notifications/size-changed\`, handles host context/tool input/result/cancel notifications, and calls the originating server through \`tools/call\`.
- \`inspect_agent_surface.structuredContent.mcpAppsServerReadiness\` exposes the native server-readiness model used by the View: app tool/resource binding, prompt discovery, resource-template discovery, output-schema and structured-content readiness, sandbox/security metadata, widget accessibility, Streamable HTTP JSON-RPC transport, local stdio transport, and read-only search/fetch retrieval.
`,sn=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),ot=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(r=>r.trim().startsWith("text/markdown")),"wantsMarkdown"),an=n((e,t)=>{let r=new Response(e.body,e),o=String(t?.owner||"").trim(),s=String(t?.tag||"").trim();return o&&r.headers.set("x-knowgrph-route-owner",o),s&&r.headers.set("x-knowgrph-route-tag",s),r},"withAgentReadyRouteHeaders");var Tt=ar({defaultWorkspaceId:rt}),hn=go(),gn=So(),fn=n((e,t="")=>{let r=String(e||"").trim(),o=String(t||"").trim();return o?Xo(o,r):Qo(r)},"buildStorageDocPath"),at=n(e=>String(e||"").trim(),"normalizeToolString");var fe=n((e,t="application/json; charset=utf-8")=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"jsonResponse"),ce=n((e,t)=>new Response(JSON.stringify(t,null,2),{status:e,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"jsonStatusResponse"),cn=n((e,t={})=>new Response(null,{status:e,headers:{"cache-control":"no-store","access-control-allow-origin":"*",...t}}),"emptyStatusResponse"),nt=n((e,t)=>new Response(e,{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"textResponse"),ya=n(e=>nt(e,"text/html;profile=mcp-app; charset=utf-8"),"mcpAppsHtmlResponse"),wa=n(e=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":"application/health+json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"healthResponse"),Sa=`${C}/api/workspace/github/write`,_a="/api/workspace/github/write",ln=12,pn=9e5,ba=new Set(["css","html","js","json","md","mdx","mjs","svg","ts","tsx","txt","yaml","yml"]),fr=n((e,t)=>String(e?.[t]||"").trim(),"readEnvString"),Ra=n(e=>{let t=fr(e,"KNOWGRPH_GITHUB_WRITE_REPOSITORY"),r=fr(e,"KNOWGRPH_GITHUB_WRITE_TOKEN"),o=fr(e,"KNOWGRPH_GITHUB_WRITE_BRANCH"),s=[];t||s.push("KNOWGRPH_GITHUB_WRITE_REPOSITORY"),r||s.push("KNOWGRPH_GITHUB_WRITE_TOKEN");let a=t.split("/").map(i=>i.trim()).filter(Boolean);return t&&a.length!==2&&s.push("KNOWGRPH_GITHUB_WRITE_REPOSITORY:owner/repo"),s.length>0?{ok:!1,missing:s}:{ok:!0,owner:a[0],repo:a[1],branch:o,token:r}},"readGitHubWriteConfig"),Pa=n(e=>{let t=String(e||"").trim().replace(/^workspace:/i,"").replace(/\\/g,"/").replace(/^\/+/,"");if(!t)return{ok:!1,error:"missing_workspace_path"};if(/[\u0000-\u001f\u007f]/.test(t))return{ok:!1,error:"invalid_workspace_path"};let r=t.split("/").filter(Boolean);if(r.some(a=>a==="."||a===".."))return{ok:!1,error:"path_traversal_forbidden"};if(r[0]!=="chat-log")return{ok:!1,error:"unsupported_workspace_root"};if(r.length<3)return{ok:!1,error:"chat_log_session_file_required"};let o=r[r.length-1]||"",s=o.includes(".")?o.split(".").pop().toLowerCase():"";return!s||!ba.has(s)?{ok:!1,error:"unsupported_text_extension"}:{ok:!0,path:r.join("/")}},"normalizeGitHubWriteWorkspacePath"),Aa=n(e=>{let t=new TextEncoder().encode(String(e||"")),r=32768,o="";for(let s=0;s<t.length;s+=r)o+=String.fromCharCode(...t.slice(s,s+r));return btoa(o)},"encodeBase64Utf8"),Ye=class extends Error{static{n(this,"GitHubWorkspaceWriteError")}constructor(t,r,o){super(t),this.name="GitHubWorkspaceWriteError",this.code=t,this.upstreamStatus=r,this.upstreamMessage=o}},yn=n(e=>String(e||"unknown").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim().slice(0,240),"sanitizeGitHubApiMessage"),wn=n((e,t)=>{let r=String(t||"").split("/").map(s=>encodeURIComponent(s)).join("/"),o=new URL(`https://api.github.com/repos/${encodeURIComponent(e.owner)}/${encodeURIComponent(e.repo)}/contents/${r}`);return e.branch&&o.searchParams.set("ref",e.branch),o},"buildGitHubContentsApiUrl"),Sn=n(e=>({accept:"application/vnd.github+json",authorization:`Bearer ${e.token}`,"user-agent":"knowgrph-cloudflare-pages","x-github-api-version":"2022-11-28"}),"gitHubApiHeaders"),_n=n(e=>{let t=String(e||"").replace(/\/+$/,"")||"/";return t===Sa||t===_a},"isGitHubWorkspaceWriteRoutePath"),ka=n(async(e,t)=>{let r=await fetch(wn(e,t),{method:"GET",headers:Sn(e)});if(r.status===404)return null;let o=await r.json().catch(()=>null);if(!r.ok)throw new Ye("github_read_failed",r.status,yn(o?.message||r.statusText));if(o?.type&&o.type!=="file")throw new Ye("github_path_not_file",409,t);return String(o?.sha||"").trim()||null},"fetchGitHubExistingFileSha"),xa=n(async(e,t,r)=>{let o=await ka(e,t.repositoryPath),s={message:r,content:Aa(t.text),...e.branch?{branch:e.branch}:{},...o?{sha:o}:{}},a=await fetch(wn(e,t.repositoryPath),{method:"PUT",headers:{...Sn(e),"content-type":"application/json; charset=utf-8"},body:JSON.stringify(s)}),i=await a.json().catch(()=>null);if(!a.ok)throw new Ye("github_write_failed",a.status,yn(i?.message||a.statusText));return{workspacePath:t.workspacePath,repositoryPath:t.repositoryPath,action:o?"updated":"created",commitSha:String(i?.commit?.sha||""),contentSha:String(i?.content?.sha||""),htmlUrl:String(i?.content?.html_url||"")}},"putGitHubWorkspaceFile"),Ea=n(async(e,t)=>{let r=Ra(t);if(!r.ok)return ce(503,{ok:!1,status:"skipped",error:"github_write_not_configured",missing:r.missing});let o=await e.json().catch(()=>null),s=Array.isArray(o?.files)?o.files:[];if(s.length<1)return ce(400,{ok:!1,status:"failed",error:"files_required"});if(s.length>ln)return ce(413,{ok:!1,status:"failed",error:"too_many_files",maxFiles:ln});let a=[],i=new Set;for(let p of s){let m=Pa(p?.workspacePath||p?.path);if(!m.ok)return ce(400,{ok:!1,status:"failed",error:m.error,workspacePath:String(p?.workspacePath||p?.path||"")});if(i.has(m.path))continue;i.add(m.path);let f=String(p?.text??"");if(new TextEncoder().encode(f).length>pn)return ce(413,{ok:!1,status:"failed",error:"file_too_large",workspacePath:`/${m.path}`,maxTextBytes:pn});a.push({workspacePath:`/${m.path}`,repositoryPath:m.path,text:f})}if(a.length<1)return ce(400,{ok:!1,status:"failed",error:"files_required"});let c=String(o?.message||"").trim(),l=c&&c.length<=160?c:`Knowgrph chat artifact ${a[0].repositoryPath}`;if(o?.dryRun===!0)return ce(200,{ok:!0,status:"dry_run",repository:`${r.owner}/${r.repo}`,branch:r.branch||null,files:a.map(p=>({workspacePath:p.workspacePath,repositoryPath:p.repositoryPath,textBytes:new TextEncoder().encode(p.text).length}))});try{let p=[];for(let m of a)p.push(await xa(r,m,l));return ce(200,{ok:!0,status:"applied",repository:`${r.owner}/${r.repo}`,branch:r.branch||null,files:p})}catch(p){let m=p instanceof Ye;return ce(m?424:500,{ok:!1,status:"failed",error:m?p.code:p instanceof Error?p.message:String(p||"github_write_failed"),...m?{upstreamStatus:p.upstreamStatus,upstreamMessage:p.upstreamMessage}:{}})}},"handleGitHubWorkspaceWrite"),Ca=n(e=>`User-agent: *
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
`,"buildRobotsTxt"),Ta=n(e=>`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${x}</loc>
    <lastmod>${Ae}</lastmod>
  </url>
  <url>
    <loc>${x}llms.txt</loc>
    <lastmod>${Ae}</lastmod>
  </url>
  <url>
    <loc>${e}.well-known/mcp/server-card.json</loc>
    <lastmod>${Ae}</lastmod>
  </url>
</urlset>
`,"buildSitemapXml"),Oa=Ca(`${x}sitemap.xml`),Ia=Ta(x),bn={linkset:[{anchor:x,"service-desc":[{href:`${x}.well-known/openapi.json`,type:"application/vnd.oai.openapi+json;version=3.1"}],"service-doc":[{href:`${x}llms.txt`,type:"text/plain"}],status:[{href:qe,type:"application/health+json"}],"service-meta":[{href:`${x}.well-known/mcp/server-card.json`,type:"application/json"},{href:Et,type:"application/json"}]}]},Rn={openapi:"3.1.0",info:{title:"Knowgrph API",version:"0.1.0",description:"Agent discovery surface for the Knowgrph Cloudflare deployment."},servers:[{url:B,description:"Knowgrph Cloudflare deployment"}],paths:Bo({appBasePath:C,appA2aAgentCardPath:hr,healthPath:Ve})},st={resource:x,resource_name:"Knowgrph",authorization_servers:[B],scopes_supported:["knowgrph:read","knowgrph:source-files:read"],bearer_methods_supported:["header"],resource_documentation:`${x}llms.txt`},yr=`${B}/cdn-cgi/access`,xe={skill:`${B}/auth.md`,register_uri:`${x}agent/auth`,claim_uri:`${x}agent/auth/claim`,revocation_uri:`${x}agent/auth/revoke`,identity_types_supported:["anonymous","identity_assertion"],anonymous:{credential_types_supported:["api_key"]},identity_assertion:{assertion_types_supported:["urn:ietf:params:oauth:token-type:id-jag","verified_email"],credential_types_supported:["access_token","api_key"]},events_supported:["https://schemas.workos.com/events/agent/auth/identity/assertion/revoked"],registration_status:"metadata_published_runtime_user_mediated"},un={issuer:B,resource:st.resource,resource_name:st.resource_name,authorization_servers:st.authorization_servers,cloudflare_access_issuer:yr,authorization_endpoint:`${yr}/login`,token_endpoint:`${yr}/token`,jwks_uri:`${x}.well-known/http-message-signatures-directory`,response_types_supported:["code"],grant_types_supported:["authorization_code","client_credentials"],token_endpoint_auth_methods_supported:["client_secret_basic","private_key_jwt"],scopes_supported:st.scopes_supported,agent_auth:xe},va=`# Knowgrph auth.md

Knowgrph publishes agent registration metadata for the read-only agent surface at ${x}. Agents should first fetch ${B}/.well-known/oauth-protected-resource, follow its authorization_servers entry to ${B}/.well-known/oauth-authorization-server, and read the agent_auth block.

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
- Pipeline rule: agents must not bypass MainPanel -> FloatingPanel Chat -> KGC -> Canvas for user-mediated graph work; published HTTP MCP tools remain read-only until mutation auth and conflict semantics are implemented.`,Pn={name:"Knowgrph Agent",description:"Agent-readable discovery, published-document retrieval, and WebMCP-ready metadata surface for Knowgrph.",version:"0.1.0",provider:{organization:"airvio / joohwee",url:x},url:`${x}mcp`,preferredTransport:"JSONRPC",supportedInterfaces:[{url:`${x}mcp`,protocolBinding:"JSONRPC",transportProtocol:"JSONRPC",description:"Primary machine interface for read-only discovery and source-file document access."},{url:gr,protocolBinding:"HTTP+JSON/REST",transportProtocol:"HTTP+JSON/REST",description:"Published source-files index and storage-backed document read surface."}],capabilities:{streaming:!1,pushNotifications:!1,stateTransitionHistory:!1,extendedAgentCard:!1},defaultInputModes:["text/plain","text/markdown","application/json"],defaultOutputModes:["text/plain","text/markdown","application/json"],skills:Ho(Tt)},Me={serverInfo:{name:"knowgrph",version:"0.1.0"},transport:{type:Pe,url:`${x}mcp`,stateless:!0},capabilities:{tools:Tt.map(e=>({name:e.name,title:e.title,description:e.description,inputSchema:e.inputSchema,outputSchema:e.outputSchema,securitySchemes:e.securitySchemes,annotations:e.annotations,_meta:e._meta})),resources:{listChanged:!1},prompts:{listChanged:!1},...rr()},prompts:hn,resourceTemplates:gn,clientSetups:nr({baseUrl:x,mcpUrl:`${x}mcp`,serverName:"knowgrph"}),links:{apiCatalog:`${x}.well-known/api-catalog`,skills:`${x}.well-known/agent-skills/index.json`,status:qe,agentCard:Et}},Ma=Pt({appUrl:x,updatedAt:Ae}),Sr=Tt.map(e=>({name:e.webName,title:e.title,description:e.description,inputSchema:e.inputSchema,outputSchema:e.outputSchema,securitySchemes:e.securitySchemes,annotations:e.annotations,_meta:e._meta})),$e=n(e=>at(Tt.find(t=>t.name===e)?.webName),"findWebMcpToolName"),Na=$e(u.search),Ua=$e(u.fetch),Ka=$e(u.listSourceFiles),La=$e(u.readSourceFile),$a=$e(u.readSharedDocument),Da=$e(u.inspectSharedDocumentStructure),Ha=$e(u.inspectAgentSurface),ja=`(() => {
  const root = globalThis;
  const siteOrigin = ${JSON.stringify(B)};
  const appBasePath = ${JSON.stringify(C)};
  const defaultWorkspaceId = ${JSON.stringify(rt)};
  const toolDefinitions = ${JSON.stringify(Sr)};
  const toolNames = ${JSON.stringify(Sr.map(e=>e.name))};
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
    const forbiddenGroupingKeySet = new Set(["kg:subgraphs", "clusters", "groups", "layers"]);
    const forbiddenGroupingKeys = Array.from(new Set(topLevelKeys.concat(flowKeys).filter((key) => forbiddenGroupingKeySet.has(key)))).sort((a, b) => a.localeCompare(b));
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
      forbiddenGroupingKeys,
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
  const createPublishedDocIdentityResolver = ${Jo};
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
  const createPublishedAgentReadyToolExecutors = ${Mo};
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
      search: ${JSON.stringify(Na)},
      fetch: ${JSON.stringify(Ua)},
      listSourceFiles: ${JSON.stringify(Ka)},
      readSourceFile: ${JSON.stringify(La)},
      readSharedDocument: ${JSON.stringify($a)},
      inspectSharedDocumentStructure: ${JSON.stringify(Da)},
      inspectAgentSurface: ${JSON.stringify(Ha)},
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
      toolName: ${JSON.stringify(u.inspectAgentSurface)},
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
})();`,Ba=n(async e=>{if(!(e.headers.get("content-type")||"").toLowerCase().includes("text/html"))return e;let r=await e.text();if(Sr.every(i=>r.includes(i.name)))return new Response(r,e);let o=`<script>${ja}<\/script>`,s=r.includes("</head>")?r.replace("</head>",`${o}</head>`):`${r}${o}`,a=new Response(s,e);return a.headers.delete("content-length"),a},"injectWebMcpScript"),Ga={search:u.search,fetch:u.fetch,listSourceFiles:u.listSourceFiles,readSourceFile:u.readSourceFile,readSharedDocument:u.readSharedDocument,inspectSharedDocumentStructure:u.inspectSharedDocumentStructure,inspectAgentSurface:u.inspectAgentSurface},Wa=n(async e=>{let t=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(r)].map(o=>o.toString(16).padStart(2,"0")).join("")},"sha256Hex"),An=Do(),Fa=Object.fromEntries(tt.map(e=>[e.name,Wa(An[e.name]||"")])),dn=new Map(tt.map(e=>[`${C}${e.path}`.replace(/\/+$/,""),An[e.name]||""]));var kn=n(async()=>jo({appUrl:x,updatedAt:Ae,sha256ByName:Fa}),"agentSkillsIndex"),za={keys:[{kty:"OKP",crv:"Ed25519",kid:"knowgrph-agent-ready-2026-05-21",use:"sig",alg:"EdDSA",x:"11qYAYdkVKxA4G0wV47IxPtYfFVH_H7zmC2Di2PcvLU"}]},qa={protocolVersion:"2025-06-18",capabilities:{tools:{},resources:{},prompts:{listChanged:!1},...rr()},serverInfo:Me.serverInfo},_r=Me.capabilities.tools,Va=[Ma],Ya=hn,Ja=gn,xn=n(()=>({status:"pass",service:"knowgrph-agent-ready-pages",homepage:x,health:qe,updatedAt:Ae,checks:{linkHeaders:!0,markdownNegotiation:!0,httpMcp:!0,webMcp:!0,mcpApps:!0,commerce:{acp:!0,ucp:!0,mpp:!0,x402:!0},defaultWorkspaceId:rt}}),"buildHealthStatusBody"),Xa=n(async()=>vo({baseUrl:x,health:xn(),apiCatalog:bn,openApi:Rn,mcpServerCard:Me,agentCard:Pn,agentSkills:await kn(),commerce:Xt({origin:B})}),"buildAgentSurfaceInspection"),Qa=ir({toolNames:Ga,defaultWorkspaceId:rt,publicBaseUrl:B,buildStorageDocPath:fn,fetchSourceFilesIndexResponse:n(()=>fetch(`${xt}${Zo()}`,{headers:{accept:"text/markdown"}}),"fetchSourceFilesIndexResponse"),fetchStorageMarkdownResponse:n(e=>fetch(`${xt}${e}`,{headers:{accept:"text/markdown"}}),"fetchStorageMarkdownResponse"),resolveSharedDocumentInput:n((e={})=>At({shareToken:e?.shareToken,shareUrl:e?.shareUrl,appBasePath:C,baseUrl:B}),"resolveSharedDocumentInput"),inspectSharedDocumentStructure:No,buildAgentSurfaceInspection:Xa}),br=n(e=>{try{let t=new URL(e,B);return At({shareUrl:`${t.pathname}${t.search}`,baseUrl:B,appBasePath:C})}catch{return null}},"resolvePublishedDocRequestIdentity"),Za=n(e=>At({shareUrl:String(e||""),baseUrl:B,appBasePath:C}),"resolvePublishedDocPathIdentity"),ei=n(async(e,t)=>{let r=new URL(fn(t.canonicalPath,t.workspaceId),xt),o=await fetch(r,{method:"GET",headers:{accept:"text/markdown, text/plain;q=0.9, */*;q=0.1"}}),s=new Headers(o.headers),a=String(s.get("vary")||"");return s.set("vary",a?`${a}, Accept`:"Accept"),new Response(String(e.method||"").toUpperCase()==="HEAD"?null:o.body,{status:o.status,statusText:o.statusText,headers:s})},"proxyPublishedDocMarkdownResponse"),ti=n(async e=>{try{let t=await e.json();return t&&typeof t=="object"?t:null}catch{return null}},"readJsonRpcRequest"),ke=n((e,t)=>ce(200,{jsonrpc:"2.0",id:e??null,result:t}),"jsonRpcResult"),ve=n((e,t,r)=>ce(200,{jsonrpc:"2.0",id:e??null,error:{code:t,message:r}}),"jsonRpcError"),ri=n(e=>String(e.headers.get("accept")||"").toLowerCase().split(",").some(t=>t.trim().startsWith("text/event-stream")),"requestAcceptsEventStream"),wr=n((e,t)=>Object.prototype.hasOwnProperty.call(e,t),"hasOwnProperty"),En=n(e=>{if(Array.isArray(e))return e.length>0&&e.every(En);if(!e||typeof e!="object"||String(e.jsonrpc||"")!=="2.0")return!1;let t=typeof e.method=="string"&&e.method.length>0,r=wr(e,"id"),o=wr(e,"result")||wr(e,"error");return t&&!r||!t&&o},"isJsonRpcNotificationOrResponse"),Cn=n(async(e,t)=>{let r=Qa[e];if(typeof r!="function")throw new Error(`unknown tool: ${e}`);return r(t)},"executeMcpTool"),oi=n(async e=>{let t=at(e);if(t===ie)return sr({appUrl:x,updatedAt:Ae,toolNames:_r.map(o=>o.name)});let r=_o(t);if(r){let o=await Cn(u.fetch,{id:r});return bo({uri:t,sourceFile:o})}throw new Error(`unknown resource: ${e}`)},"readMcpResource"),ni=n(async e=>{let t=String(e.method||"GET").toUpperCase();if(t==="GET"||t==="HEAD")return ri(e)?cn(405,{allow:"POST"}):fe({ok:!0,transport:Me.transport,serverInfo:Me.serverInfo,capabilities:Me.capabilities});if(t!=="POST")return ce(405,{ok:!1,error:"unsupported_method"});let r=await ti(e);if(!r)return ve(null,-32700,"Parse error");if(En(r))return cn(202);if(Array.isArray(r))return ve(null,-32600,"Batch JSON-RPC requests are not supported");switch(r.method){case"initialize":return ke(r.id,qa);case"tools/list":return ke(r.id,{tools:_r});case"prompts/list":return ke(r.id,{prompts:Ya});case"resources/templates/list":return ke(r.id,{resourceTemplates:Ja});case"prompts/get":{let o=at(r.params?.name),s=r.params?.arguments&&typeof r.params.arguments=="object"?r.params.arguments:{};if(!o)return ve(r.id,-32602,"Prompt name is required");try{return ke(r.id,fo(o,s))}catch(a){return ve(r.id,-32602,a instanceof Error?a.message:String(a))}}case"resources/list":return ke(r.id,{resources:Va});case"resources/read":{let o=at(r.params?.uri);if(!o)return ve(r.id,-32602,"Resource URI is required");try{return ke(r.id,await oi(o))}catch(s){return ve(r.id,-32602,s instanceof Error?s.message:String(s))}}case"tools/call":{let o=at(r.params?.name),s=r.params?.arguments&&typeof r.params.arguments=="object"?r.params.arguments:{};if(!o)return ve(r.id,-32602,"Tool name is required");try{let a=await Cn(o,s);return ke(r.id,{content:[{type:"text",text:typeof a?.markdown=="string"?a.markdown:JSON.stringify(a,null,2)}],structuredContent:a,isError:!1})}catch(a){return ke(r.id,{content:[{type:"text",text:a instanceof Error?a.message:String(a)}],isError:!0})}}default:return ve(r.id,-32601,"Method not found")}},"handleMcpTransport"),si=n(()=>sr({appUrl:x,updatedAt:Ae,toolNames:_r.map(e=>e.name)}).contents[0].text,"buildKnowgrphMcpAppHtmlBody");var Rr=n(e=>e===C||e===`${C}/`,"handlesKnowgrphRoot"),ai=n(e=>Rr(e)||!!Za(e),"handlesKnowgrphHtmlSurface"),ii=n(e=>{let t=new URL(e.url),r=t.pathname.replace(/\/+$/,"")||"/",o=br(e.url);return r===Ve?"health":r===`${C}/mcp`?"mcp":_n(r)?"github-workspace-write":r===`${C}/robots.txt`?"robots":r===`${C}/sitemap.xml`?"sitemap":r===`${C}/auth.md`||r==="/auth.md"?"auth-md":r.startsWith(`${C}/.well-known/`)?"well-known":o?ot(e)?"shared-doc-markdown":"shared-doc-html":Rr(t.pathname)?ot(e)?"homepage-markdown":"homepage-html":"app-surface"},"resolveAgentReadyRouteTag"),Ct=n((e,t)=>an(t,{owner:rn,tag:ii(e)}),"withKnowgrphRouteHeaders"),mn=n(async e=>{let t=new URL(e.url),r=t.pathname.replace(/\/+$/,"")||"/",o=br(e.url);if(o&&ot(e))return ei(e,o);if(Rr(t.pathname)&&ot(e))return sn(nn);switch(r){case Ve:return wa(xn());case`${C}/mcp`:return ni(e);case`${C}/robots.txt`:return nt(Oa,"text/plain; charset=utf-8");case`${C}/sitemap.xml`:return nt(Ia,"application/xml; charset=utf-8");case`${C}/auth.md`:case"/auth.md":return nt(va,"text/markdown; charset=utf-8");case`${C}/.well-known/api-catalog`:return fe(bn,"application/linkset+json; charset=utf-8");case`${C}/.well-known/openapi.json`:return fe(Rn,"application/vnd.oai.openapi+json; charset=utf-8");case hr:return fe(Pn);case`${C}/.well-known/oauth-protected-resource`:return fe(st);case`${C}/.well-known/oauth-authorization-server`:return fe(un);case`${C}/.well-known/openid-configuration`:return fe(un);case`${C}/.well-known/mcp/server-card.json`:return fe(Me);case`${C}/.well-known/mcp/apps/knowgrph-agent-ready.html`:return ya(si());case`${C}/.well-known/mcp.json`:return fe(Me);case`${C}/.well-known/agent-skills/index.json`:return fe(await kn());case`${C}/.well-known/http-message-signatures-directory`:return fe(za);default:return dn.has(r)?nt(dn.get(r),"text/markdown; charset=utf-8"):null}},"routeResponse");async function Ne(e){let{env:t,request:r}=e,o=String(r.method||"GET").toUpperCase(),s=new URL(r.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(o==="POST"&&s.pathname.replace(/\/+$/,"")===`${C}/mcp`)return Ct(r,await mn(r));if(o==="POST"&&_n(s.pathname))return Ct(r,await Ea(r,t));if(o!=="GET"&&o!=="HEAD")return ce(405,{ok:!1,error:"unsupported_method"});let a=await mn(r);if(a){let p=Ct(r,a);return o==="HEAD"?new Response(null,p):p}let i=br(r.url)?await Go(e,C):await e.next();if(!ai(s.pathname))return i;let c=o==="HEAD"?i:await Ba(i),l=new Response(o==="HEAD"?null:c.body,c);return l.headers.set("link",on),Ct(r,l)}n(Ne,"onRequest");async function Tn(e){return Ne(e)}n(Tn,"onRequest");async function On(e){return Ne(e)}n(On,"onRequest");async function In(e){return Ne(e)}n(In,"onRequest");var ci=Object.freeze(new Set(["","80","443"])),li=Object.freeze([".local",".localhost",".internal"]),pi=Object.freeze(new Set(["localhost"]));function De(e){return String(e||"").trim().toLowerCase()}n(De,"normalizeHostname");function ui(e){let t=De(e);if(!/^\d{1,3}(\.\d{1,3}){3}$/.test(t))return!1;let r=t.split(".").map(o=>Number(o));return r.length!==4?!1:r.every(o=>Number.isInteger(o)&&o>=0&&o<=255)}n(ui,"isIpv4Literal");function vn(e){let[t,r,o,s]=e.split(".").map(a=>Number(a));return(t<<24|r<<16|o<<8|s)>>>0}n(vn,"ipv4ToInt");function di(e,t,r){if(!Number.isInteger(r)||r<0||r>32)return!1;if(r===0)return!0;let o=4294967295<<32-r>>>0;return(e&o)===(t&o)}n(di,"inIpv4Cidr");function mi(e){let t=De(e);return!t||!t.includes(":")?!1:/^[0-9a-f:]+$/i.test(t)}n(mi,"isIpv6Literal");function hi(e){let t=De(e);return!!(!t||t==="::1"||t==="0:0:0:0:0:0:0:1"||t.startsWith("fc")||t.startsWith("fd")||/^fe[89ab]/i.test(t))}n(hi,"isBlockedIpv6");function gi(e,{blockedExact:t,blockedSuffixes:r}={}){let o=De(e);if(!o)return!0;let s=t||pi;if(s instanceof Set&&s.has(o))return!0;let a=r||li;if(Array.isArray(a))for(let i of a){let c=De(i);if(c&&(o===c||o.endsWith(c)))return!0}return!1}n(gi,"isBlockedHostname");function fi(e){let t=De(e);if(!t)return!0;if(ui(t)){let r=vn(t),o=[{base:"0.0.0.0",bits:8},{base:"10.0.0.0",bits:8},{base:"127.0.0.0",bits:8},{base:"169.254.0.0",bits:16},{base:"172.16.0.0",bits:12},{base:"192.168.0.0",bits:16},{base:"100.64.0.0",bits:10}];for(let s of o){let a=vn(s.base);if(di(r,a,s.bits))return!0}return!1}return mi(t)?hi(t):!1}n(fi,"isBlockedIpLiteral");function Ot(e,{allowedPorts:t}={}){let r=String(e||"").trim();if(!r)throw new Error("invalid_url");let o;try{o=new URL(r)}catch{throw new Error("invalid_url")}if(o.protocol!=="http:"&&o.protocol!=="https:")throw new Error("invalid_url");if(o.username||o.password)throw new Error("invalid_url");let s=t||ci,a=String(o.port||"");if(s instanceof Set&&!s.has(a))throw new Error("port_not_allowed");let i=De(o.hostname);if(!i)throw new Error("invalid_url");if(gi(i))throw new Error("blocked_host");if(fi(i))throw new Error("blocked_host");return o}n(Ot,"parseAndValidateExternalUrl");function It(e){return String(e.headers.get("sec-fetch-site")||"").trim().toLowerCase()==="cross-site"}n(It,"shouldRejectCrossSiteFetch");var yi={"content-type":"application/json; charset=utf-8","cache-control":"public, max-age=600"};function He(e,t={}){return new Response(JSON.stringify(e),{...t,headers:{...yi,...t.headers||{}}})}n(He,"json");function vt(...e){for(let t of e){if(!t)continue;let r=String(t).trim();if(r)return r}return null}n(vt,"pickFirst");function wi(e){let t=e.slice(0,8e4),r=t.match(/<title[^>]*>([^<]*)<\/title>/i),o=t.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i),s=t.match(/<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i),a=t.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i),i=t.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i),c=t.match(/<meta[^>]+property=["']og:site_name["'][^>]*content=["']([^"']+)["'][^>]*>/i);return{title:vt(o?.[1],r?.[1]),description:vt(s?.[1],a?.[1]),image:vt(i?.[1]),siteName:vt(c?.[1])}}n(wi,"extractMeta");async function Mn(e){let t=e.request.url,r=new URL(t);if(r.searchParams.get("ping")==="1")return He({ok:!0,ping:!0});let o=r.searchParams.get("url")||"";if(It(e.request))return He({ok:!1,error:"forbidden"},{status:403,headers:{"cache-control":"no-store"}});let s;try{s=Ot(o)}catch{return He({ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}try{let a=await fetch(s.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkPreview/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),i=a.headers.get("content-type")||"";if(!a.ok)return He({ok:!1,error:"fetch_failed",status:a.status,url:s.toString()},{status:200,headers:{"cache-control":"no-store"}});if(!i.includes("text/html"))return He({ok:!0,url:s.toString(),domain:s.host,contentType:i,title:null,description:null,image:null,siteName:null});let c=await a.text(),l=wi(c);return He({ok:!0,url:s.toString(),domain:s.host,contentType:i,...l})}catch(a){return He({ok:!1,error:"exception",message:a?.message||String(a),url:s.toString()},{status:200,headers:{"cache-control":"no-store"}})}}n(Mn,"onRequestGet");var Nn=35e4;function Si(e){let t=e;return t=t.replace(/<script\b[\s\S]*?<\/script>/gi,""),t=t.replace(/<iframe\b[\s\S]*?<\/iframe>/gi,""),t=t.replace(/<object\b[\s\S]*?<\/object>/gi,""),t=t.replace(/<embed\b[\s\S]*?>/gi,""),t=t.replace(/<noscript\b[\s\S]*?<\/noscript>/gi,""),t=t.replace(/\son[a-z]+\s*=\s*"[^"]*"/gi,""),t=t.replace(/\son[a-z]+\s*=\s*'[^']*'/gi,""),t}n(Si,"stripActiveContent");function _i({url:e,title:t,innerHtml:r}){let o=t?String(t).slice(0,140):"Preview",s=String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");return`<!doctype html>
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
      <a href="${s}" target="_blank" rel="noopener">Open</a>
    </div>
    <div class="content">${r}</div>
  </body>
</html>`}n(_i,"buildWrapper");async function Un(e){let r=new URL(e.request.url).searchParams.get("url")||"";if(It(e.request))return new Response("Forbidden",{status:403,headers:{"cache-control":"no-store"}});let o;try{o=Ot(r)}catch(s){let a=s instanceof Error?s.message:"invalid_url";return new Response(a,{status:400,headers:{"cache-control":"no-store"}})}try{let s=await fetch(o.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkProxy/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),a=s.headers.get("content-type")||"";if(!s.ok)return new Response(`Fetch failed (${s.status})`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});if(!a.includes("text/html"))return new Response(`Unsupported content-type: ${a}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public, max-age=600"}});let i=await s.text();i.length>Nn&&(i=i.slice(0,Nn));let l=i.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()||o.host;i=Si(i),/<base\s/i.test(i)||(i=i.replace(/<head([^>]*)>/i,`<head$1><base href="${o.origin}/">`));let m=_i({url:o.toString(),title:l,innerHtml:i});return new Response(m,{status:200,headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600","content-security-policy":"default-src 'none'; img-src https: data:; style-src 'unsafe-inline' https:; font-src https: data:; frame-ancestors 'self';"}})}catch(s){return new Response(`Exception: ${s?.message||String(s)}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}})}}n(Un,"onRequestGet");var Pr="api.openai.com",Mt="api.miromind.ai",Nt="apihub.agnes-ai.com",Ut="ark.ap-southeast.bytepluses.com",Ar="ark.eu-west.bytepluses.com",Ln=new Set(["localhost","127.0.0.1","0.0.0.0"]),be=n(e=>String(e||"").trim().toLowerCase(),"normalizeHost"),ye=n((e,t)=>String(e.get(t)||"").trim(),"readHeader"),$n=n(e=>Ln.has(be(e)),"isLocalHost"),Kn=n(e=>{let t=String(e||"").trim();if(!t)return new Set;let r=new Set;return t.split(",").map(o=>be(o)).filter(Boolean).forEach(o=>r.add(o)),r},"parseCsvSet"),Dn=n((e,{includeOpenAi:t=!1,includeMiroMind:r=!1,includeAgnes:o=!1,includeBytePlus:s=!1}={})=>{let a=Kn(e.KNOWGRPH_INTEGRATION_ALLOWED_HOSTS),i=Kn(e.KNOWGRPH_CHAT_PROXY_ALLOWED_HOSTS),c=a.size?a:i,l=c.size?c:new Set([...Ln]);return t&&l.add(Pr),r&&l.add(Mt),o&&l.add(Nt),s&&(l.add(Ut),l.add(Ar)),l},"parseAllowedHosts"),se=n(e=>{let t=ye(e.headers,"origin");if(!t)return{};let r="";try{r=be(new URL(t).host)}catch{return{}}let o=be(new URL(e.url).host);return r===o||r.startsWith("localhost:")||r.startsWith("127.0.0.1:")?{"access-control-allow-origin":t,vary:"Origin"}:{}},"corsHeaders"),me=n((e,t,r)=>new Response(JSON.stringify(t),{status:r,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...se(e)}}),"jsonResponse");var Kt={"content-type":"application/json; charset=utf-8","cache-control":"no-store"};function it(e,t,r=200){return new Response(JSON.stringify(t),{status:r,headers:{...Kt,...se(e)}})}n(it,"jsonResponse");async function bi(e){let t=new URL("/knowgrph/imports/hackamap/hackamap-graph.json",e.url),r=await fetch(t.toString(),{redirect:"follow"});return r.ok?await r.json():null}n(bi,"fetchHackamapGraphJson");async function je(e,t){let r=new URL(t,e.url),o=await fetch(r.toString(),{redirect:"follow"});return o.ok?await o.json():null}n(je,"fetchHackamapJson");async function Ri(e){let t=await je(e,"/knowgrph/imports/hackamap/hackamap_api_graph.json");return Gn(t)?t:null}n(Ri,"fetchHackamapApiGraphJson");async function Pi(e){let t=await je(e,"/knowgrph/imports/hackamap/hackamap_pipeline.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n(Pi,"fetchHackamapPipelineJson");async function jn(e){let t=await je(e,"/knowgrph/imports/hackamap/hackamap_query_presets.json");return Array.isArray(t)?t.filter(Boolean):[]}n(jn,"fetchHackamapQueryPresetsJson");async function Bn(e){let t=await je(e,"/knowgrph/imports/hackamap/query-outputs/query-runs.manifest.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n(Bn,"fetchHackamapQueryRunsManifestJson");function Gn(e){return!e||typeof e!="object"||Array.isArray(e)?!1:Array.isArray(e.nodes)&&Array.isArray(e.edges)}n(Gn,"isApiGraphPayload");function Wn(e,t){let r=String(e&&e.output&&e.output.per_table_prefix||e?.id||t?.preset||"").trim(),o=String(t?.output_suffix||"").trim();return o?`${r}-${o}`:r}n(Wn,"buildHackamapTablePrefix");function kr(e,t){if(!Array.isArray(e))return[];let r=[];for(let o of e){if(!o||typeof o!="object"||Array.isArray(o))continue;let s=String(o[t]||"").trim();s&&r.push(s)}return r}n(kr,"collectRowIds");async function Ai(e,t){let r=await je(e,t);return Array.isArray(r)?r.length:0}n(Ai,"countHackamapQueryRows");async function ki(e,t,r){let o=Wn(t,r);if(!o)return{};let s=["events","demos","sources","organizer","team","techstack"],a=await Promise.all(s.map(async i=>[i,await Ai(e,`/knowgrph/imports/hackamap/query-outputs/${i}.${o}.query.json`)]));return Object.fromEntries(a.filter(([,i])=>i>0))}n(ki,"readHackamapRunTableCounts");function xr(e){return Array.isArray(e)?e.map(xr):!e||typeof e!="object"?e:Object.fromEntries(Object.entries(e).sort(([t],[r])=>String(t).localeCompare(String(r))).map(([t,r])=>[t,xr(r)]))}n(xr,"sortObjectKeys");function xi(e){try{return JSON.stringify(xr(e))}catch{return""}}n(xi,"stableParamSignature");function Ei(e){return typeof e=="string"?{value:e,label:e}:{value:e,label:JSON.stringify(e)}}n(Ei,"toBuilderOption");function Ci(e,t){return e.map(r=>{let o=String(r?.id||"").trim();if(!o)return null;let s=r?.params&&typeof r.params=="object"&&!Array.isArray(r.params)?r.params:{},a=t.filter(l=>String(l?.preset||"").trim()===o),i=Array.from(new Set([...Object.keys(s),...a.flatMap(l=>l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?Object.keys(l.params):[])])).sort((l,p)=>String(l).localeCompare(String(p))),c=Object.fromEntries(i.map(l=>{let p=new Set,m=[],f=[s[l],...a.map(R=>R?.params&&typeof R.params=="object"&&!Array.isArray(R.params)?R.params[l]:void 0)];for(let R of f){if(typeof R>"u")continue;let _=xi(R);!_||p.has(_)||(p.add(_),m.push(Ei(R)))}return[l,m]}));return{id:o,title:String(r?.title||o).trim(),params:s,param_keys:i,published_param_options:c}}).filter(Boolean)}n(Ci,"buildHackamapPresetRuntimeEntries");async function Ti(e){let[t,r,o]=await Promise.all([Pi(e),jn(e),Bn(e)]),s=t&&typeof t=="object"?t.runtime||{}:{},a=String(s?.query_selection?.default_run_id||"").trim()||"enhanced",i=Array.isArray(o?.runs)?o.runs:[],c=(await Promise.all(i.map(async l=>{let p=String(l?.id||"").trim(),m=String(l?.preset||"").trim();if(!p)return null;let f=r.find(_=>String(_?.id||"").trim()===m),R=await ki(e,f,l);return{id:p,preset:m,title:String(l?.title||l?.id||"").trim(),params:l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?l.params:{},output_suffix:String(l?.output_suffix||"").trim(),is_default:p===a,table_counts:R}}))).filter(l=>l?.id);return{ok:!0,runtime:{...s&&typeof s=="object"?s:{},presets:Ci(r,c),runs:c}}}n(Ti,"buildHackamapRuntimeMeta");async function Oi(e,t){let r=String(t||"").trim();if(!r)return null;let[o,s]=await Promise.all([jn(e),Bn(e)]),i=(Array.isArray(s?.runs)?s.runs:[]).find(k=>String(k?.id||"").trim()===r);if(!i)return null;let c=o.find(k=>String(k?.id||"").trim()===String(i?.preset||"").trim()),l=Wn(c,i);if(!l)return null;let[p,m]=await Promise.all([je(e,`/knowgrph/imports/hackamap/query-outputs/events.${l}.query.json`),je(e,`/knowgrph/imports/hackamap/query-outputs/demos.${l}.query.json`)]),f=new Set(kr(p,"id")),R=new Set(kr(m,"id")),_=kr(m,"event_id");for(let k of _)f.add(k);return{eventIds:f,demoIds:R}}n(Oi,"readHackamapQueryRunSelection");function Hn(e,t,r){if(!r||!Gn(e))return e;if(r.eventIds.size===0&&r.demoIds.size===0)return{...e,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_run_filter_skipped:"no-event-demo-rows"}};let o=new Set;r.eventIds.forEach(c=>o.add(`Event:${c}`)),r.demoIds.forEach(c=>o.add(`Demo:${c}`));let s=Array.isArray(e.nodes)?e.nodes.filter(c=>o.has(String(c?.id||"").trim())):[],a=new Set(s.map(c=>String(c?.id||"").trim()).filter(Boolean)),i=Array.isArray(e.edges)?e.edges.filter(c=>a.has(String(c?.source||"").trim())&&a.has(String(c?.target||"").trim())):[];return{...e,nodes:s,edges:i,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_event_count:r.eventIds.size,selected_demo_count:r.demoIds.size,total_problems:s.filter(c=>String(c?.type||"").trim()==="problem").length,total_solutions:s.filter(c=>String(c?.type||"").trim()==="solution").length}}}n(Hn,"filterHackamapApiGraphPayloadByRun");function Ii(e){let t=Array.isArray(e?.nodes)?e.nodes:[],r=Array.isArray(e?.links)?e.links:[],o=[],s=new Set;for(let i of t){let c=String(i?.id||"").trim(),l=String(i?.type||"").trim(),p=String(i?.label||"").trim();if(!(!c||!l||!p)){if(l==="Event"){o.push({id:c,type:"problem",label:p,cluster:"Event"}),s.add(c);continue}l==="Demo"&&(o.push({id:c,type:"solution",label:p,cluster:"Demo"}),s.add(c))}}let a=[];for(let i of r){let c=String(i?.source||"").trim(),l=String(i?.target||"").trim(),p=String(i?.type||"").trim();!c||!l||p==="has_demo"&&(!s.has(c)||!s.has(l)||a.push({source:c,target:l,type:"has_demo",strength:.35}))}return{nodes:o,edges:a,meta:{source:"hackamap-graph.json:fallback",total_problems:o.filter(i=>i.type==="problem").length,total_solutions:o.filter(i=>i.type==="solution").length,...e?.content_signature?{content_signature:String(e.content_signature)}:{}}}}n(Ii,"toBipartiteApiPayload");async function Fn(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{...se(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(r!=="GET"&&r!=="HEAD")return it(t,{ok:!1,error:"unsupported_method"},405);if(String(o.searchParams.get("view")||"").trim().toLowerCase()==="meta"){let m=await Ti(t);return r==="HEAD"?new Response(null,{status:200,headers:{...Kt,...se(t)}}):it(t,m,200)}let s=String(o.searchParams.get("run")||"").trim(),a=await Oi(t,s),i=await Ri(t);if(i){let m=Hn(i,s,a);return r==="HEAD"?new Response(null,{status:200,headers:{...Kt,...se(t)}}):it(t,m,200)}let c=await bi(t);if(!c)return it(t,{ok:!1,error:"missing_hackamap_graph",hint:"/knowgrph/imports/hackamap/{hackamap_api_graph.json,hackamap-graph.json} not found"},404);let l=Ii(c),p=Hn(l,s,a);return r==="HEAD"?new Response(null,{status:200,headers:{...Kt,...se(t)}}):it(t,p,200)}n(Fn,"onRequest");var vi=!0,zn=600,qn={"content-type":"application/json; charset=utf-8","cache-control":`public, max-age=${zn}`};function Be(e,t,r={}){return new Response(JSON.stringify(t),{...r,headers:{...qn,...r.headers||{},...se(e)}})}n(Be,"jsonResponse");function Mi(e){try{let t=new URL(String(e));return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}n(Mi,"isHttpUrl");function ct(e){return String(e||"").trim().toLowerCase()}n(ct,"normalizeHost");function Er(e,{exact:t,suffixes:r}){let o=ct(e);return o?!!(Array.isArray(t)&&t.some(s=>o===ct(s))||Array.isArray(r)&&r.some(s=>o===ct(s)||o.endsWith(`.${ct(s)}`))):!1}n(Er,"isHostMatch");function Ni(e){let t=ct(e.hostname),r=e.toString();return Er(t,{suffixes:["linkedin.com"]})?new URL(`https://www.linkedin.com/embeds/oembed.json?url=${encodeURIComponent(r)}`):Er(t,{exact:["twitter.com","x.com"],suffixes:["twitter.com","x.com"]})?new URL(`https://publish.twitter.com/oembed?omit_script=1&url=${encodeURIComponent(r)}`):Er(t,{exact:["reddit.com"],suffixes:["reddit.com"]})?new URL(`https://www.reddit.com/oembed?url=${encodeURIComponent(r)}`):null}n(Ni,"buildOembedUpstreamUrl");async function Ui({upstreamUrl:e}){return await fetch(e.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; OEmbedProxy/1.0)",accept:"application/json,text/json;q=0.9,*/*;q=0.1"},redirect:"follow",cf:{cacheTtl:zn,cacheEverything:!0}})}n(Ui,"fetchJsonUpstream");async function Vn(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{...se(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD"].includes(r))return Be(t,{ok:!1,error:"unsupported_method"},{status:405});if(o.searchParams.get("ping")==="1")return Be(t,{ok:!0,ping:!0});if(vi)return Be(t,{ok:!1,error:"disabled_by_policy"},{status:200,headers:{"cache-control":"no-store"}});let s=o.searchParams.get("url")||"";if(!Mi(s))return Be(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}});let a;try{a=new URL(s)}catch{return Be(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}let i=Ni(a);if(!i)return Be(t,{ok:!1,error:"unsupported_provider"},{status:400,headers:{"cache-control":"no-store"}});let c=await Ui({upstreamUrl:i}),l=new Headers(c.headers);l.delete("content-length"),l.set("cache-control",c.ok?qn["cache-control"]:"no-store");for(let[m,f]of Object.entries(se(t)))l.set(m,f);if(r==="HEAD")return new Response(null,{status:c.status,headers:l});let p=await c.text();try{JSON.parse(p)}catch{return Be(t,{ok:!1,error:"invalid_upstream_json",status:c.status},{status:502,headers:{"cache-control":"no-store"}})}return l.set("content-type","application/json; charset=utf-8"),new Response(p,{status:c.status,headers:l})}n(Vn,"onRequest");var Yn="/__chat_proxy",Lt="agnes-ai",$t="byteplus-modelark",Dt="miromind",Ki=n(e=>{let t=be(e);return t==="openai"?"openai":t===$t||t==="byteplus"?$t:t===Dt||t==="miromind-api"?Dt:t===Lt||t==="agnes"||t==="agnes-ai-api"?Lt:t},"normalizeProviderId"),Li=n(e=>be(e)===Nt,"isAgnesHost"),$i=n(e=>{let t=be(e);return t===Ut||t===Ar},"isBytePlusHost"),Di=n(e=>be(e)===Mt,"isMiroMindHost"),Hi=n(({provider:e,requestedUpstream:t,env:r})=>e==="openai"?"https://api.openai.com":e===Dt?t||`https://${Mt}`:e===Lt?t||`https://${Nt}`:e===$t?t||String(r.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim()||`https://${Ut}`:t||String(r.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim(),"pickUpstreamBase");async function Jn(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),s=new URL(t.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":ye(t.headers,"origin")||"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD","POST"].includes(o))return me(t,{ok:!1,error:"Unsupported method"},405);let a=Ki(ye(t.headers,"x-kg-chat-provider")),i=Hi({provider:a,requestedUpstream:ye(t.headers,"x-kg-chat-upstream"),env:r});if(!i)return me(t,{ok:!1,error:"Missing chat proxy upstream configuration"},500);let c;try{c=new URL(i)}catch{return me(t,{ok:!1,error:"Invalid chat proxy upstream configuration"},500)}let l=Dn(r,{includeOpenAi:!0,includeMiroMind:!0,includeAgnes:!0,includeBytePlus:!0}),p=be(c.hostname);if(!l.has(p))return me(t,{ok:!1,error:"Chat proxy upstream host is not allowed"},403);if(!$n(p)&&c.protocol!=="https:")return me(t,{ok:!1,error:"Chat proxy requires HTTPS for non-local upstream hosts"},403);let m=a==="openai"||p===Pr,f=a===Dt||Di(p),R=a===Lt||Li(p),_=a===$t||$i(p),k=ye(t.headers,"x-kg-chat-api-key"),H=String(r.KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY||r.OPENAI_API_KEY||"").trim(),U=String(r.KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY||r.MIROMIND_API_KEY||"").trim(),$=String(r.KNOWGRPH_CHAT_PROXY_AGNES_API_KEY||r.AGNES_API_KEY||"").trim(),re=String(r.KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY||r.BYTEPLUS_API_KEY||"").trim(),W=(k||H).slice(0,512),T=(k||U).slice(0,512),I=(k||$).slice(0,512),J=(k||re).slice(0,512),K=_?J:R?I:f?T:W;if(m&&!W)return me(t,{ok:!1,error:"Missing OpenAI API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY or OPENAI_API_KEY)"},401);if(f&&!K)return me(t,{ok:!1,error:"Missing MiroMind API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY or MIROMIND_API_KEY)"},401);if(R&&!K)return me(t,{ok:!1,error:"Missing Agnes API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_AGNES_API_KEY or AGNES_API_KEY)"},401);if(_&&!K)return me(t,{ok:!1,error:"Missing BytePlus API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY or BYTEPLUS_API_KEY)"},401);if(o==="POST"&&!ye(t.headers,"content-type").toLowerCase().includes("application/json"))return me(t,{ok:!1,error:"Chat proxy expects application/json payloads"},415);let X=s.pathname.startsWith(Yn)&&s.pathname.slice(Yn.length)||"/v1/chat/completions",v=X.startsWith("/")?X:`/${X}`,M=new URL(`${v}${s.search||""}`,c),j=new Headers,oe=ye(t.headers,"content-type"),pe=ye(t.headers,"accept");oe&&j.set("content-type",oe),pe&&j.set("accept",pe),(m||f||R||_)&&j.set("authorization",`Bearer ${K}`);let we=ye(t.headers,"x-client-request-id").slice(0,512);we&&j.set("x-client-request-id",we);let P=new AbortController,y=Number(r.KNOWGRPH_CHAT_PROXY_TIMEOUT_MS),S=Number.isFinite(y)?Math.max(5e3,Math.min(18e4,Math.floor(y))):9e4,d=setTimeout(()=>P.abort(),S);try{let h=await fetch(M.toString(),{method:o,headers:j,body:o==="GET"||o==="HEAD"?void 0:t.body,signal:P.signal,redirect:"follow"}),g=new Headers(h.headers);g.delete("content-length"),g.delete("www-authenticate"),g.set("cache-control","no-store");let b=ye(t.headers,"origin");return b&&(g.set("access-control-allow-origin",b),g.set("vary","Origin")),o==="HEAD"?new Response(null,{status:h.status,statusText:h.statusText,headers:g}):new Response(h.body,{status:h.status,statusText:h.statusText,headers:g})}catch(h){let g=h&&typeof h=="object"&&"message"in h?String(h.message||""):"",b=P.signal.aborted||/aborted|timeout/i.test(g);return me(t,{ok:!1,error:g||"Failed to reach chat upstream"},b?504:502)}finally{clearTimeout(d)}}n(Jn,"onRequest");function ji(e){let t=e.map(r=>r==null?"":typeof r=="boolean"?r?"1":"0":typeof r=="number"?Number.isFinite(r)?String(r):"":String(r)).join("|");return`rich-media-preview:${Xe(t)}`}n(ji,"buildRichMediaPreviewSemanticKey");var Qn="png";function jt(e){let t=typeof e=="number"?e:Number(String(e??"").trim());if(!Number.isFinite(t))return null;let r=Math.max(0,Math.floor(t));return Number.isFinite(r)?r:null}n(jt,"normalizeRemoteVideoFrameSeconds");function Bt(e){let t=String(e||"").trim().toLowerCase();return t==="jpg"||t==="jpeg"?"jpg":"png"}n(Bt,"normalizeRemoteVideoFrameFormat");function Cr(e){let t=String(e.sourceUrl||"").trim(),r=jt(e.timeSeconds)??0,o=Bt(e.format||Qn);return ji(["remote-video-frame",t,r,o])}n(Cr,"buildRemoteVideoFrameSemanticKey");function Zn(e){let t=jt(e.timeSeconds)??0,r=Bt(e.format||Qn),o=Cr({...e,timeSeconds:t,format:r});return`frame-${o.split(":").pop()||Xe(o)}-t${t}.${r}`}n(Zn,"buildRemoteVideoFrameFileName");var Ht=n(e=>{let t=String(e||"").trim();return t&&/^[A-Za-z0-9_-]{6,128}$/.test(t)?t:null},"normalizeYouTubeIdLikeValue"),Xn=n(e=>{try{let t=new URL(String(e||"").trim()),r=String(t.hostname||"").toLowerCase();if(r==="youtu.be"||r.endsWith(".youtu.be")){let o=t.pathname.replace(/^\/+/,"").split("/")[0]?.trim()||"";return Ht(o)}if(r==="youtube.com"||r.endsWith(".youtube.com")||r==="youtube-nocookie.com"||r.endsWith(".youtube-nocookie.com")){let o=String(t.searchParams.get("v")||"").trim();if(o)return Ht(o);let s=t.pathname.split("/").filter(Boolean),a=s[0]||"",i=s[1]||"";if((a==="embed"||a==="shorts"||a==="live")&&i)return Ht(i);if(a==="watch"){let c=String(t.searchParams.get("v")||"").trim();return Ht(c)}}}catch{return null}return null},"readYouTubeIdFromUrl");function Bi(e){let t=String(e||"").trim().replace(/^<|>$/g,"").trim();for(;/[),.;:!?]$/.test(t);){let r=t.slice(0,-1).trim();if(!r)break;let o=Xn(t),s=Xn(r);if(!s||o&&o!==s)break;t=r}return t}n(Bi,"stripYouTubeUrlTrailingPunctuation");function es(e){let t=n(r=>{let o=String(r||"").trim();if(!o)return null;if(/^\d+$/.test(o))return Number(o);let s=o.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i);if(!s)return null;let a=s[1]?Number(s[1]):0,i=s[2]?Number(s[2]):0,c=s[3]?Number(s[3]):0,l=a*3600+i*60+c;return l>0&&Number.isFinite(l)?l:null},"parseChunk");try{let r=new URL(Bi(e)),o=r.searchParams.get("t")||r.searchParams.get("start")||"",s=r.hash&&new URLSearchParams(r.hash.replace(/^#/,"")).get("t")||"";return t(o)??t(s)}catch{return null}}n(es,"parseYouTubeStartSeconds");var Gi="/image/knowgrph/video-frame",Wi=4096,Fi=720*60,zi=/^frame-[a-f0-9]+-t\d+\.(?:png|jpg)$/i,vr={"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"accept, content-type"},Ir=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),Tr=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:JSON.stringify(e),{status:t,headers:{...vr,"content-type":"application/json; charset=utf-8","cache-control":"no-store"}}),"jsonResponse"),Or=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:e,{status:t,headers:{...vr,"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}}),"textResponse"),qi=n((e,t)=>e===t||e.endsWith(`.${t}`),"hostMatches"),Vi=n(e=>{let t=Ir(e?.KG_VIDEO_FRAME_ALLOWED_HOSTS);return t?t.split(",").map(r=>Ir(r).toLowerCase()).filter(Boolean):["youtube.com","youtu.be","youtube-nocookie.com","bilibili.com","b23.tv"]},"readAllowedHosts"),Yi=n(e=>Ir(e).replace(/^<|>$/g,"").trim(),"unwrapUrlInput"),Ji=n((e,t)=>{try{let r=new URL(e);if(r.protocol!=="https:"&&r.protocol!=="http:")return!1;let o=r.hostname.toLowerCase();return Vi(t).some(s=>qi(o,s))}catch{return!1}},"isAllowedSourceUrl"),Xi=n((e,t)=>{let r=new URL(e.url),o=Yi(r.searchParams.get("url")||"");if(!o)return{error:"Missing url parameter"};if(o.length>Wi)return{error:"Video URL is too long"};if(!Ji(o,t))return{error:"Video frame extraction is limited to supported remote video hosts"};let s=jt(r.searchParams.get("time"))??es(o);if(s==null)return{error:"Missing time parameter"};let a=Math.min(Fi,Math.max(0,s)),i=Bt(r.searchParams.get("format")||"png"),c=Zn({sourceUrl:o,timeSeconds:a,format:i});if(!zi.test(c))return{error:"Invalid frame cache key"};let l=`${Gi}/${c}`;return{sourceUrl:o,timeSeconds:a,format:i,fileName:c,publicUrl:l,semanticKey:Cr({sourceUrl:o,timeSeconds:a,format:i})}},"readFrameRequest"),Qi=n(async(e,t,r)=>{let o=new URL(t,e.request.url),s=new Request(o.toString(),{method:r});return typeof e.env?.ASSETS?.fetch=="function"?await e.env.ASSETS.fetch(s):await fetch(s)},"fetchStaticAsset"),Zi=n(e=>`Frame has not been generated yet. Run the local video-frame extractor and publish ${e.publicUrl}.`,"missingFrameMessage"),ec=n((e,t)=>{let r=new Headers;r.set("content-type",t.format==="jpg"?"image/jpeg":"image/png"),r.set("cache-control","public, max-age=31536000, immutable"),r.set("access-control-allow-origin","*");let o=e.headers.get("content-length");o&&r.set("content-length",o);let s=e.headers.get("etag");return s&&r.set("etag",s),r},"imageResponseHeaders");async function ts(e){let t=e.request;if(t.method==="OPTIONS")return new Response(null,{status:204,headers:vr});if(t.method!=="GET"&&t.method!=="HEAD")return Or("Method not allowed",405,t.method);let r=new URL(t.url).searchParams.get("emit")==="json",o=Xi(t,e.env||{});if("error"in o)return r?Tr({ok:!1,error:o.error},400,t.method):Or(o.error,400,t.method);let s=r&&t.method!=="HEAD"?"GET":r||t.method==="HEAD"?"HEAD":"GET",a=await Qi(e,o.publicUrl,s);if(!a.ok){let i=Zi(o);return r?Tr({ok:!1,error:i,publicUrl:o.publicUrl,semanticKey:o.semanticKey},404,t.method):Or(i,404,t.method)}if(r){let i=Number(a.headers.get("content-length")||0);return(!Number.isFinite(i)||i<=0)&&t.method!=="HEAD"&&(i=(await a.arrayBuffer()).byteLength),Tr({ok:!0,imageUrl:o.publicUrl,publicUrl:o.publicUrl,semanticKey:o.semanticKey,cached:!0,bytes:Number.isFinite(i)?Math.max(0,Math.floor(i)):0,timeSeconds:o.timeSeconds,format:o.format},200,t.method)}return new Response(t.method==="HEAD"?null:a.body,{status:200,headers:ec(a,o)})}n(ts,"onRequest");var rs={"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"content-type"},Gt=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:JSON.stringify(e),{status:t,headers:rs}),"jsonResponse"),Y=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),tc=n(e=>{try{let t=new URL(String(e||"").trim());if(/youtu\.be$/i.test(t.hostname))return Y(t.pathname.split("/").filter(Boolean)[0]);if(/youtube\.com$/i.test(t.hostname)||/youtube-nocookie\.com$/i.test(t.hostname)){let r=Y(t.searchParams.get("v"));if(r)return r;let o=t.pathname.split("/").filter(Boolean),s=o.findIndex(a=>["embed","shorts","live"].includes(a));if(s>=0)return Y(o[s+1])}}catch{}return""},"readVideoId"),rc=n((e,t)=>{let r=e.indexOf(t);if(r<0)return null;let o=e.indexOf("{",r);if(o<0)return null;let s=0,a=!1,i=!1;for(let c=o;c<e.length;c+=1){let l=e[c];if(a){i?i=!1:l==="\\"?i=!0:l==='"'&&(a=!1);continue}if(l==='"')a=!0;else if(l==="{")s+=1;else if(l==="}"&&(s-=1,s===0))return e.slice(o,c+1)}return null},"extractJsonAfter"),oc=n(e=>{for(let t of["ytInitialPlayerResponse =","ytInitialPlayerResponse="]){let r=rc(e,t);if(r)try{return JSON.parse(r)}catch{}}return null},"parsePlayerResponse"),nc=n((e,t)=>{let r=Y(t||"en").toLowerCase();return e.find(o=>Y(o.languageCode).toLowerCase()===r)||e.find(o=>Y(o.languageCode).toLowerCase().startsWith(r.split("-")[0]))||e.find(o=>Y(o.kind)!=="asr")||e[0]||null},"pickCaptionTrack"),sc=n(e=>{let t=new URL(e);return t.searchParams.set("fmt","json3"),t.toString()},"withJsonCaptionFormat"),ac=n(e=>(Array.isArray(e?.events)?e.events:[]).map(r=>{let o=Array.isArray(r.segs)?Y(r.segs.map(i=>i?.utf8||"").join("")):"",s=Number(r.tStartMs)/1e3,a=Number(r.dDurationMs||0)/1e3;return o&&Number.isFinite(s)?{text:o,start:s,duration:Number.isFinite(a)?a:0}:null}).filter(Boolean),"parseCaptionJson3"),ic=n(e=>String(e||"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'"),"decodeXmlText"),cc=n(e=>{let t=[],r=/<text\b([^>]*)>([\s\S]*?)<\/text>/gi,o=null;for(;o=r.exec(String(e||""));){let s=o[1]||"",a=Number(s.match(/\bstart="([^"]+)"/i)?.[1]),i=Number(s.match(/\bdur="([^"]+)"/i)?.[1]||0),c=Y(ic(o[2]||""));c&&Number.isFinite(a)&&t.push({text:c,start:a,duration:Number.isFinite(i)?i:0})}return t},"parseCaptionXml"),lc=n((e,t)=>{let r=String(e||"").trim();if(!r)return[];if(String(t||"").toLowerCase().includes("json")||r.startsWith("{")||r.startsWith("["))try{return ac(JSON.parse(r))}catch{return[]}return cc(r)},"parseCaptionResponseText"),pc=n(e=>{let t=Math.max(0,Math.floor(Number(e)||0)),r=Math.floor(t/60),o=String(t%60).padStart(2,"0");return`${r}:${o}`},"formatTimestamp"),uc=n((e,t)=>{let r=new URL(e);return r.searchParams.set("t",`${Math.max(0,Math.floor(Number(t)||0))}s`),r.toString()},"timestampUrl"),dc=n(({title:e,sourceUrl:t,videoId:r,authorName:o,thumbnailUrl:s,segments:a})=>[`# ${e||`YouTube ${r}`}`,"",`Video ID: ${r}`,o?`Author: ${o}`:"",`Source: [${t}](${t})`,s?`[![${e||r}](${s})](${t})`:"","",a.length>0?"## Transcript":"## Video Source","",...a.length>0?a.map(i=>`[${pc(i.start)}](${uc(t,i.start)}) ${i.text}`):["Captions were not available from the source at import time.","The source URL, title, author, and thumbnail remain available for downstream storyboard reconstruction."],""].filter(i=>i!=="").join(`
`),"buildMarkdown"),Mr=n(({videoId:e,sourceUrl:t,title:r,authorName:o,thumbnailUrl:s,lang:a,languageCode:i,segments:c,captionStatus:l})=>{let p={type:"rag:YouTubeTranscript",video_id:e,source_url:t,title:r,author_name:o,thumbnail_url:s,language_code:Y(i)||a,caption_status:l,segment_count:c.length,duration:c.reduce((m,f)=>Math.max(m,f.start+f.duration),0),segments:c};return{ok:!0,name:`youtube-${e.toLowerCase()}.md`,markdown:dc({title:r,sourceUrl:t,videoId:e,authorName:o,thumbnailUrl:s,segments:c}),transcript:p}},"buildPayload");async function mc({sourceUrl:e,lang:t="en",fetchImpl:r=fetch}){let o=tc(e);if(!o)return{ok:!1,error:"unsupported_youtube_url"};let s=`https://www.youtube.com/watch?v=${encodeURIComponent(o)}`,[a,i]=await Promise.all([r(`https://www.youtube.com/oembed?url=${encodeURIComponent(s)}&format=json`,{headers:{accept:"application/json"}}).catch(()=>null),r(s,{headers:{accept:"text/html,application/xhtml+xml","accept-language":"en-US,en;q=0.9","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}})]),c=a?.ok?await a.json().catch(()=>({})):{},l=i.ok?oc(await i.text()):null,p=Y(c.title)||Y(l?.videoDetails?.title)||`YouTube ${o}`,m=Y(c.author_name)||Y(l?.videoDetails?.author),f=Y(c.thumbnail_url)||`https://i.ytimg.com/vi/${o}/hqdefault.jpg`;if(!i.ok)return Mr({videoId:o,sourceUrl:s,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:t,segments:[],captionStatus:`watch-fetch-${i.status}`});let R=l?.captions?.playerCaptionsTracklistRenderer?.captionTracks||[],_=nc(Array.isArray(R)?R:[],t);if(!_?.baseUrl)return Mr({videoId:o,sourceUrl:s,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:t,segments:[],captionStatus:"captions-unavailable"});let k=await r(sc(_.baseUrl),{headers:{accept:"application/json,text/xml,text/plain,*/*","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}}).catch(()=>null),H=k?await k.text().catch(()=>""):"",U=k?.ok?lc(H,k.headers.get("content-type")):[],$=U.length>0?"available":k?.ok?"captions-empty":`captions-fetch-${k?.status||"failed"}`;return Mr({videoId:o,sourceUrl:s,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:_.languageCode,segments:U,captionStatus:$})}n(mc,"buildYouTubeTranscriptPayload");async function os(e){let t=e.request,r=String(t.method||"GET").toUpperCase();if(r==="OPTIONS")return new Response(null,{status:204,headers:rs});if(r!=="GET"&&r!=="HEAD"&&r!=="POST")return Gt({ok:!1,error:"unsupported_method"},405,r);let o=new URL(t.url),s=Y(o.searchParams.get("url")),a=Y(o.searchParams.get("lang"))||"en";if(!s)return Gt({ok:!1,error:"missing_url"},400,r);try{let i=await mc({sourceUrl:s,lang:a});return Gt(i,i.ok?200:502,r)}catch(i){let c=i&&typeof i=="object"&&"message"in i?Y(i.message):"";return Gt({ok:!1,error:c||"youtube_conversion_failed"},502,r)}}n(os,"onRequest");async function ns(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase();if(r==="OPTIONS")return new Response(null,{status:204,headers:{...se(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(r!=="GET"&&r!=="HEAD")return new Response(JSON.stringify({ok:!1,error:"unsupported_method"}),{status:405,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...se(t)}});let o={ok:!0,service:"singabldr-pages",ts:new Date().toISOString()},s={"content-type":"application/json; charset=utf-8","cache-control":"no-store",...se(t)};return r==="HEAD"?new Response(null,{status:200,headers:s}):new Response(JSON.stringify(o),{status:200,headers:s})}n(ns,"onRequest");var Ce="https://airvio.co";var le="/knowgrph",Ee=`${Ce}${le}/`,hc=`${Ce}/`;var as=`${le}/health`,ss=`${Ce}${as}`,is="/.well-known/agent-card.json",nd=`${le}/.well-known/agent-card.json`,gc=`${Ce}${is}`,fc=`${Ce}/api/storage/source-files`,yc=`${Ce}/api/storage/doc-default/{canonicalPath}`,wc=`${Ce}/api/storage/doc/{workspaceId}/{canonicalPath}`,Sc=`${Ce}/api/storage/blob/{workspaceId}/{canonicalPath}`;var Nr="root-agent-ready-pages",cs=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${le}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${le}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${as}>; rel="status"; type="application/health+json"`,`<${le}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${is}>; rel="describedby"; type="application/json"`].join(", "),ls=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${Ee}.

## Discovery

- Crawl policy: ${Ee}robots.txt
- Sitemap: ${Ee}sitemap.xml
- API catalog: ${Ee}.well-known/api-catalog
- Auth.md registration instructions: ${hc}auth.md
- Health: ${ss}
- MCP server card: ${Ee}.well-known/mcp/server-card.json
- A2A Agent Card: ${gc}
- Agent skills: ${Ee}.well-known/agent-skills/index.json
- LLM reference: ${Ee}llms.txt

## APIs

- Agent-ready status: ${ss}
- HTTP MCP: ${Ee}mcp
- Storage API: ${Ce}/api/storage/
- Source Files index: ${fc}
- Default Source File documents: ${yc}
- Workspace Source File documents: ${wc}
- Workspace binary artifacts: ${Sc}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes seven read-only tools for published Source Files, shared documents, data-first search/fetch, and agent-surface inspection.
- HTTP MCP and local stdio expose shared read-only prompt templates through \`prompts/list\` and \`prompts/get\` for Source Files research and agent-surface inspection.
- HTTP MCP and local stdio expose Source Files resource templates through \`resources/templates/list\`; \`kgdoc://source-file/{id}\` reads reuse the existing \`fetch\` executor.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared seven-tool WebMCP surface on \`${Ee}\` HTML routes.

## MCP Apps

- HTTP MCP advertises \`io.modelcontextprotocol/ui\` with \`text/html;profile=mcp-app\`.
- \`inspect_agent_surface\` links to the shared \`ui://knowgrph/agent-ready\` resource through \`_meta.ui.resourceUri\`.
- UI-linked tool descriptors expose no-auth \`securitySchemes\`, mirror them in \`_meta.securitySchemes\`, and set OpenAI widget accessibility metadata from the shared contract.
- \`resources/list\` and \`resources/read\` serve the inline, sandbox-friendly Knowgrph Agent Ready app resource while preserving text fallback and structured tool output; \`resources/templates/list\` exposes Source Files markdown reads under the standard MCP \`resources\` capability.
- The View initiates the MCP Apps \`ui/initialize\` handshake, sends \`ui/notifications/initialized\` and \`ui/notifications/size-changed\`, handles host context/tool input/result/cancel notifications, and calls the originating server through \`tools/call\`.
- \`inspect_agent_surface.structuredContent.mcpAppsServerReadiness\` exposes the native server-readiness model used by the View: app tool/resource binding, prompt discovery, resource-template discovery, output-schema and structured-content readiness, sandbox/security metadata, widget accessibility, Streamable HTTP JSON-RPC transport, local stdio transport, and read-only search/fetch retrieval.
`,ps=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),us=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(r=>r.trim().startsWith("text/markdown")),"wantsMarkdown"),Ur=n((e,t)=>{let r=new Response(e.body,e),o=String(t?.owner||"").trim(),s=String(t?.tag||"").trim();return o&&r.headers.set("x-knowgrph-route-owner",o),s&&r.headers.set("x-knowgrph-route-tag",s),r},"withAgentReadyRouteHeaders");var Lr="Agent-actionable chat-to-canvas knowledge graph workspace",lt='<main id="root"></main>',_c=/<(?:main|div)\s+id=["']root["']\s*><\/(?:main|div)>/i,bc=n(e=>{let t=/<script>([\s\S]*?)<\/script>/g;for(let r of String(e||"").matchAll(t)){let o=r[1]||"";if(o.includes("createWebMcpLifecycleController")&&o.includes("toolDefinitions"))return o}return""},"extractWebMcpScript"),ds=n(()=>({"content-type":"text/html; charset=utf-8","cache-control":"no-store, no-cache, no-transform, must-revalidate, max-age=0","access-control-allow-origin":"*",link:cs}),"rootHtmlHeaders"),Kr=n((e,t)=>String(e||"").includes("</head>")?String(e||"").replace("</head>",`${t}</head>`):`${String(e||"")}${t}`,"injectIntoHead"),ms=n(e=>String(e||"").replace(_c,lt),"canonicalizeRootMount"),Wt=n(()=>`<main id="knowgrph-root-fallback" data-knowgrph-root-fallback="visible" aria-label="Knowgrph root alias" style="position:fixed;inset:0;z-index:2147483000;display:grid;place-content:center;gap:1rem;padding:2rem;box-sizing:border-box;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#101820;color:#f4f7fb;text-align:center">
      <h1 style="margin:0;font-size:clamp(2.25rem,8vw,5.5rem);line-height:1;font-weight:760">Knowgrph</h1>
      <p style="margin:0 auto;max-width:42rem;font-size:clamp(1rem,2.2vw,1.35rem);line-height:1.55;color:#d6e1ea">${Lr}</p>
      <p style="margin:0"><a href="${le}/" style="display:inline-flex;align-items:center;justify-content:center;min-height:2.75rem;padding:0 1.05rem;border:1px solid #7db3ff;border-radius:8px;color:#f8fbff;text-decoration:none;background:#1f5fa8">Open Knowgrph</a></p>
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
    <\/script>`,"rootVisibleFallbackMarkup"),Rc=n(e=>{let t=ms(e);return/<main\s+id=["']knowgrph-root-fallback["']/i.test(t)?t:t.includes(lt)?t.replace(lt,`${lt}
    ${Wt()}`):t.includes("</body>")?t.replace("</body>",`    ${Wt()}
  </body>`):`${t}
${Wt()}`},"injectRootVisibleFallback"),Pc=n(e=>{let t=ms(e);return/<meta\s+name=["']description["'][^>]*>/i.test(t)?t=t.replace(/<meta\s+name=["']description["'][^>]*>/i,`<meta name="description" content="${Lr}" />`):t=Kr(t,`    <meta name="description" content="${Lr}" />
`),/<link\s+rel=["']canonical["'][^>]*>/i.test(t)||(t=Kr(t,`    <link rel="canonical" href="${le}/" />
`)),/<meta\s+name=["']x-knowgrph-root-alias["'][^>]*>/i.test(t)||(t=Kr(t,`    <meta name="x-knowgrph-root-alias" content="${le}/" />
`)),Rc(t)},"rewriteRootAppHtml"),Ac=n(async e=>{let t=new URL(`${le}/?agentReadyRootWebMcp=1`,e.url),r=await fetch(t,{headers:{accept:"text/html"}});return r.ok?bc(await r.text()):""},"loadWebMcpScript"),kc=n(async e=>{let t=new URL(`${le}/?agentReadyRootAlias=1`,e.url),r=await fetch(t,{headers:{accept:"text/html"}});if(!r.ok)return null;let o=Pc(await r.text());return!o.includes(lt)||!o.includes(`${le}/assets/`)?null:new Response(o,{status:200,headers:ds()})},"loadKnowgrphAppShell"),xc=n((e="")=>new Response(`<!DOCTYPE html>
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
    ${Wt()}
  </body>
</html>`,{status:200,headers:ds()}),"rootHtmlResponse");async function hs(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase();if(r!=="GET"&&r!=="HEAD")return e.next();if(us(t)){let a=Ur(ps(ls),{owner:Nr,tag:"root-homepage-markdown"});return r==="HEAD"?new Response(null,a):a}let o=r==="HEAD"?null:await kc(t),s=Ur(o||xc(r==="HEAD"?"":await Ac(t)),{owner:Nr,tag:"root-homepage-html"});return r==="HEAD"?new Response(null,s):s}n(hs,"onRequest");var A=[{routePath:"/api/llm/chat/completions",mountPath:"/api/llm/chat",method:"",middlewares:[],modules:[jr]},{routePath:"/api/payments/commerce/x402",mountPath:"/api/payments/commerce",method:"",middlewares:[],modules:[lo]},{routePath:"/api/llm/models",mountPath:"/api/llm",method:"",middlewares:[],modules:[po]},{routePath:"/api/llm/responses",mountPath:"/api/llm",method:"",middlewares:[],modules:[uo]},{routePath:"/knowgrph/doc-default/:path*",mountPath:"/knowgrph/doc-default",method:"",middlewares:[],modules:[Tn]},{routePath:"/knowgrph/doc/:path*",mountPath:"/knowgrph/doc",method:"",middlewares:[],modules:[On]},{routePath:"/knowgrph/share/:path*",mountPath:"/knowgrph/share",method:"",middlewares:[],modules:[In]},{routePath:"/api/link-preview",mountPath:"/api",method:"GET",middlewares:[],modules:[Mn]},{routePath:"/api/link-proxy",mountPath:"/api",method:"GET",middlewares:[],modules:[Un]},{routePath:"/api/graph",mountPath:"/api",method:"",middlewares:[],modules:[Fn]},{routePath:"/api/oembed",mountPath:"/api",method:"",middlewares:[],modules:[Vn]},{routePath:"/__chat_proxy/:path*",mountPath:"/__chat_proxy",method:"",middlewares:[],modules:[Jn]},{routePath:"/knowgrph/:path*",mountPath:"/knowgrph",method:"",middlewares:[],modules:[Ne]},{routePath:"/__video_frame",mountPath:"/",method:"",middlewares:[],modules:[ts]},{routePath:"/__youtube_transcript",mountPath:"/",method:"",middlewares:[],modules:[os]},{routePath:"/health",mountPath:"/",method:"",middlewares:[],modules:[ns]},{routePath:"/",mountPath:"/",method:"",middlewares:[],modules:[hs]}];function Ec(e){for(var t=[],r=0;r<e.length;){var o=e[r];if(o==="*"||o==="+"||o==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(o==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(o==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(o==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(o===":"){for(var s="",a=r+1;a<e.length;){var i=e.charCodeAt(a);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){s+=e[a++];continue}break}if(!s)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:s}),r=a;continue}if(o==="("){var c=1,l="",a=r+1;if(e[a]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(a));for(;a<e.length;){if(e[a]==="\\"){l+=e[a++]+e[a++];continue}if(e[a]===")"){if(c--,c===0){a++;break}}else if(e[a]==="("&&(c++,e[a+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(a));l+=e[a++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(r));if(!l)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:l}),r=a;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}n(Ec,"lexer");function Cc(e,t){t===void 0&&(t={});for(var r=Ec(e),o=t.prefixes,s=o===void 0?"./":o,a=t.delimiter,i=a===void 0?"/#?":a,c=[],l=0,p=0,m="",f=n(function(v){if(p<r.length&&r[p].type===v)return r[p++].value},"tryConsume"),R=n(function(v){var M=f(v);if(M!==void 0)return M;var j=r[p],oe=j.type,pe=j.index;throw new TypeError("Unexpected ".concat(oe," at ").concat(pe,", expected ").concat(v))},"mustConsume"),_=n(function(){for(var v="",M;M=f("CHAR")||f("ESCAPED_CHAR");)v+=M;return v},"consumeText"),k=n(function(v){for(var M=0,j=i;M<j.length;M++){var oe=j[M];if(v.indexOf(oe)>-1)return!0}return!1},"isSafe"),H=n(function(v){var M=c[c.length-1],j=v||(M&&typeof M=="string"?M:"");if(M&&!j)throw new TypeError('Must have text between two parameters, missing text after "'.concat(M.name,'"'));return!j||k(j)?"[^".concat(Ue(i),"]+?"):"(?:(?!".concat(Ue(j),")[^").concat(Ue(i),"])+?")},"safePattern");p<r.length;){var U=f("CHAR"),$=f("NAME"),re=f("PATTERN");if($||re){var W=U||"";s.indexOf(W)===-1&&(m+=W,W=""),m&&(c.push(m),m=""),c.push({name:$||l++,prefix:W,suffix:"",pattern:re||H(W),modifier:f("MODIFIER")||""});continue}var T=U||f("ESCAPED_CHAR");if(T){m+=T;continue}m&&(c.push(m),m="");var I=f("OPEN");if(I){var W=_(),J=f("NAME")||"",K=f("PATTERN")||"",X=_();R("CLOSE"),c.push({name:J||(K?l++:""),pattern:J&&!K?H(W):K,prefix:W,suffix:X,modifier:f("MODIFIER")||""});continue}R("END")}return c}n(Cc,"parse");function pt(e,t){var r=[],o=fs(e,r,t);return Tc(o,r,t)}n(pt,"match");function Tc(e,t,r){r===void 0&&(r={});var o=r.decode,s=o===void 0?function(a){return a}:o;return function(a){var i=e.exec(a);if(!i)return!1;for(var c=i[0],l=i.index,p=Object.create(null),m=n(function(R){if(i[R]===void 0)return"continue";var _=t[R-1];_.modifier==="*"||_.modifier==="+"?p[_.name]=i[R].split(_.prefix+_.suffix).map(function(k){return s(k,_)}):p[_.name]=s(i[R],_)},"_loop_1"),f=1;f<i.length;f++)m(f);return{path:c,index:l,params:p}}}n(Tc,"regexpToFunction");function Ue(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}n(Ue,"escapeString");function gs(e){return e&&e.sensitive?"":"i"}n(gs,"flags");function Oc(e,t){if(!t)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,s=r.exec(e.source);s;)t.push({name:s[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),s=r.exec(e.source);return e}n(Oc,"regexpToRegexp");function Ic(e,t,r){var o=e.map(function(s){return fs(s,t,r).source});return new RegExp("(?:".concat(o.join("|"),")"),gs(r))}n(Ic,"arrayToRegexp");function vc(e,t,r){return Mc(Cc(e,r),t,r)}n(vc,"stringToRegexp");function Mc(e,t,r){r===void 0&&(r={});for(var o=r.strict,s=o===void 0?!1:o,a=r.start,i=a===void 0?!0:a,c=r.end,l=c===void 0?!0:c,p=r.encode,m=p===void 0?function(M){return M}:p,f=r.delimiter,R=f===void 0?"/#?":f,_=r.endsWith,k=_===void 0?"":_,H="[".concat(Ue(k),"]|$"),U="[".concat(Ue(R),"]"),$=i?"^":"",re=0,W=e;re<W.length;re++){var T=W[re];if(typeof T=="string")$+=Ue(m(T));else{var I=Ue(m(T.prefix)),J=Ue(m(T.suffix));if(T.pattern)if(t&&t.push(T),I||J)if(T.modifier==="+"||T.modifier==="*"){var K=T.modifier==="*"?"?":"";$+="(?:".concat(I,"((?:").concat(T.pattern,")(?:").concat(J).concat(I,"(?:").concat(T.pattern,"))*)").concat(J,")").concat(K)}else $+="(?:".concat(I,"(").concat(T.pattern,")").concat(J,")").concat(T.modifier);else{if(T.modifier==="+"||T.modifier==="*")throw new TypeError('Can not repeat "'.concat(T.name,'" without a prefix and suffix'));$+="(".concat(T.pattern,")").concat(T.modifier)}else $+="(?:".concat(I).concat(J,")").concat(T.modifier)}}if(l)s||($+="".concat(U,"?")),$+=r.endsWith?"(?=".concat(H,")"):"$";else{var X=e[e.length-1],v=typeof X=="string"?U.indexOf(X[X.length-1])>-1:X===void 0;s||($+="(?:".concat(U,"(?=").concat(H,"))?")),v||($+="(?=".concat(U,"|").concat(H,")"))}return new RegExp($,gs(r))}n(Mc,"tokensToRegexp");function fs(e,t,r){return e instanceof RegExp?Oc(e,t):Array.isArray(e)?Ic(e,t,r):vc(e,t,r)}n(fs,"pathToRegexp");var Ft=/[.+?^${}()|[\]\\]/g;function*Nc(e){let t=new URL(e.url).pathname;for(let r of[...A].reverse()){if(r.method&&r.method!==e.method)continue;let o=pt(r.routePath.replace(Ft,"\\$&"),{end:!1}),s=pt(r.mountPath.replace(Ft,"\\$&"),{end:!1}),a=o(t),i=s(t);if(a&&i)for(let c of r.middlewares.flat())yield{handler:c,params:a.params,path:i.path}}for(let r of A){if(r.method&&r.method!==e.method)continue;let o=pt(r.routePath.replace(Ft,"\\$&"),{end:!0}),s=pt(r.mountPath.replace(Ft,"\\$&"),{end:!1}),a=o(t),i=s(t);if(a&&i&&r.modules.length){for(let c of r.modules.flat())yield{handler:c,params:a.params,path:a.path};break}}}n(Nc,"executeRequest");var Nd={async fetch(e,t,r){let o=e,s=Nc(o),a={},i=!1,c=n(async(l,p)=>{if(l!==void 0){let f=l;typeof l=="string"&&(f=new URL(l,o.url).toString()),o=new Request(f,p)}let m=s.next();if(m.done===!1){let{handler:f,params:R,path:_}=m.value,k={request:new Request(o.clone()),functionPath:_,next:c,params:R,get data(){return a},set data(U){if(typeof U!="object"||U===null)throw new Error("context.data must be an object");a=U},env:t,waitUntil:r.waitUntil.bind(r),passThroughOnException:n(()=>{i=!0},"passThroughOnException")},H=await f(k);if(!(H instanceof Response))throw new Error("Your Pages function should return a Response");return $r(H)}else{let f=await t.ASSETS.fetch(o);return $r(f)}},"next");try{return await c()}catch(l){if(i){let p=await t.ASSETS.fetch(o);return $r(p)}throw l}}},$r=n(e=>new Response([101,204,205,304].includes(e.status)?null:e.body,e),"cloneResponse");export{Nd as default};
