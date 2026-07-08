var Pa=Object.defineProperty;var n=(e,t)=>Pa(e,"name",{value:t,configurable:!0});var Aa="https://api.openai.com/v1";var Jt=Object.freeze(["gpt-5.4-nano","gpt-4o-mini"]);function Xt(e){return String(e||"").trim()}n(Xt,"normalizeOrigin");function ka(e){let t=Xt(e);return t?t.startsWith("http://localhost:")||t.startsWith("http://127.0.0.1:")||t.startsWith("http://0.0.0.0:"):!1}n(ka,"isAllowedOrigin");function Br(e){let t=Xt(e);return ka(t)?{"access-control-allow-origin":t,vary:"Origin","access-control-allow-methods":"GET, POST, OPTIONS","access-control-allow-headers":"content-type, x-flowinfish-session","access-control-max-age":"86400"}:{}}n(Br,"corsHeaders");function ge(e,{status:t=200,origin:r=""}={}){return new Response(JSON.stringify(e),{status:t,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...Br(r)}})}n(ge,"json");async function ft(e,{maxBytes:t=1e6}={}){let r=await e.arrayBuffer();if(r.byteLength>t)throw new Error("Request too large");let o=new TextDecoder().decode(r);try{return o?JSON.parse(o):{}}catch{throw new Error("Invalid JSON body")}}n(ft,"readJsonBody");function xa(e){let t=String(e?.model||"").trim();if(!t)throw new Error("Missing model");if(!Jt.includes(t))throw new Error(`Model not allowed: ${t}`);return t}n(xa,"enforceAllowedModel");function Ea(e){let t=String(e.OPENAI_API_KEY||"").trim();if(!t)throw new Error("Missing server OPENAI_API_KEY");return t}n(Ea,"requireOpenAiKey");async function yt({request:e,env:t,pathname:r,payload:o}){let a=Ea(t);xa(o);let i=`${Xt(t.OPENAI_API_BASE)||Aa}${r}`,c=await fetch(i,{method:"POST",headers:{authorization:`Bearer ${a}`,"content-type":"application/json"},body:JSON.stringify(o)}),l=new Headers(c.headers);return l.delete("content-length"),l.set("cache-control","no-store"),new Response(c.body,{status:c.status,headers:l})}n(yt,"proxyToOpenAi");function Ge(e){let t=e.headers.get("origin")||"";return new Response(null,{status:204,headers:{...Br(t)}})}n(Ge,"handleOptions");async function Gr(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return Ge(t);if(o!=="POST")return ge({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return ge({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await ft(t);return await yt({request:t,env:r,pathname:"/chat/completions",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return ge({ok:!1,error:i},{status:400,origin:a})}}n(Gr,"onRequest");var wt={checkoutSession:"/api/payments/stripe/checkout/session",webhook:"/api/payments/stripe/webhook"};var ue={restrictedKey:"STRIPE_RESTRICTED_KEY",secretKey:"STRIPE_SECRET_KEY",webhookSecret:"STRIPE_WEBHOOK_SECRET",checkoutPriceId:"STRIPE_CHECKOUT_PRICE_ID",checkoutCurrency:"STRIPE_CHECKOUT_CURRENCY",checkoutUnitAmount:"STRIPE_CHECKOUT_UNIT_AMOUNT",checkoutProductName:"STRIPE_CHECKOUT_PRODUCT_NAME",checkoutMode:"STRIPE_CHECKOUT_MODE",checkoutReturnOrigin:"STRIPE_CHECKOUT_RETURN_ORIGIN"},Jc=[ue.restrictedKey,ue.secretKey,ue.webhookSecret];var Je={configure:"npm run payment:stripe:configure",d1MigrateRemote:"npm run payment:d1:migrate:remote",readiness:"npm run payment:stripe:readiness",x402Configure:"npm run payment:x402:configure",x402Readiness:"npm run payment:x402:readiness",paymentReadiness:"npm run payment:readiness",applyConfirmation:"apply-stripe-payment-worker-config",writeVisibleVarsFlag:"--write-visible-vars",deployVisibleVarsFlag:"--deploy-visible-vars"};var Xc=[`Configure Stripe secrets on the server runtime that owns ${wt.checkoutSession}.`,"Cloudflare Pages project variables are available to Pages builds/functions, but they are not read by separate Worker routes.","Stripe Projects can provision and sync credentials locally; copy only required server secret names into the payment server runtime."].join(" "),Qc=[`Payment server runtime for ${wt.checkoutSession}`,"not Cloudflare Pages project variables"].join("; "),Ca=[ue.restrictedKey,ue.secretKey].join(" or "),Zc=[ue.checkoutPriceId,`${ue.checkoutCurrency} + ${ue.checkoutUnitAmount} + ${ue.checkoutProductName}`].join(" or "),el=[`${ue.checkoutMode}=payment`,`${ue.checkoutMode}=subscription with ${ue.checkoutPriceId}`].join(" or "),tl=["Worker secret names","visible Worker [vars]","remote D1 payment tables","required webhook-processing columns/constraints","bounded optional hosted Checkout create-and-expire smoke"].join(" + "),rl=[Je.configure,`write visible Worker [vars] with ${Je.writeVisibleVarsFlag}`,`deploy visible Worker [vars] with ${Je.deployVisibleVarsFlag}`,`apply with -- --apply --yes --confirm=${Je.applyConfirmation}`,Je.readiness].join(" -> "),ol=[`Missing server-managed Stripe key. Set ${Ca} on the payment server runtime.`,"Pages project variables alone do not satisfy separate Worker routes."].join(" ");var Ta=n(e=>{let t=2166136261;for(let r=0;r<e.length;r+=1)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0},"fnv1a32");function Wr(e){return Ta(String(e??""))}n(Wr,"hashString32");function Xe(e){return Wr(e).toString(16).padStart(8,"0")}n(Xe,"hashStringToHex");var va=n(e=>e==null?"":typeof e=="boolean"?e?"1":"0":typeof e=="number"?Number.isFinite(e)?String(e):"":String(e),"normalizePrimitive"),Oa=n(e=>e.map(va).join("|"),"buildSignatureText"),St=n(e=>Xe(Oa(e)),"hashSignatureParts");var _e=n((e,t)=>St(["agentic-commerce",e,...t]),"buildAgenticCommerceSemanticKey");var Fr="solana_pay",zr="/api/payments/commerce/solana-pay/settle";var Qe="2026-01-30",Vr="1000",Yr="USDC",Qt="https://x402.org/facilitator",Jr="eip155:84532",Ia="$0.001",Xr="x402-payment-required",Ma="0x0000000000000000000000000000000000000000",We="2026-04-08",qr="https://ucp.dev/2026-04-08/specification/overview/",Na=["checkout"],Ua=["rest"];var v={acpDiscovery:"/.well-known/acp.json",acpConfig:"/.well-known/acp-config",ucpProfile:"/.well-known/ucp",mppOpenApi:"/openapi.json",x402ApiRoot:"/api",x402ApiV1:"/api/v1",checkoutSessions:"/checkout/sessions",x402PaymentRequired:"/api/payments/commerce/x402",commerceWebhook:"/api/payments/commerce/webhook",commerceProofArtifact:"/api/payments/commerce/harness-proof.json",commerceTraceArtifact:"/api/payments/commerce/trace.jsonl",openboxIngest:"/api/payments/commerce/openbox/ingest",web3Settle:"/api/payments/commerce/web3/settle",solanaPaySettle:zr},kl=[v.x402ApiRoot,v.x402ApiV1,v.x402PaymentRequired],ve={sellerId:"SELLER_ID",checkoutBaseUrl:"CHECKOUT_BASE_URL",web3Enabled:"WEB3_ENABLED",web3DepositAddress:"WEB3_DEPOSIT_ADDRESS",baseRpcUrl:"BASE_RPC_URL",baseConfirmationBlocks:"BASE_CONFIRMATION_BLOCKS",easAttestUrl:"EAS_ATTEST_URL",openboxApiUrl:"OPENBOX_API_URL",openboxIngestUrl:"OPENBOX_INGEST_URL",openboxApiKey:"OPENBOX_API_KEY",stripeDelegatePaymentUrl:"STRIPE_DELEGATE_PAYMENT_URL",acpBearerToken:"ACP_BEARER_TOKEN",x402PayToAddress:"X402_PAY_TO_ADDRESS",x402Network:"X402_NETWORK",x402Asset:"X402_ASSET",x402Amount:"X402_AMOUNT",x402FacilitatorUrl:"X402_FACILITATOR_URL",x402Price:"X402_PRICE"},Oe=n((e,t)=>String(e[t]||"").trim(),"readEnvString"),Qr=n((e,t)=>{let r=Oe(e,ve.sellerId);if(r)return r;try{return new URL(t).host}catch{return"knowgrph-seller"}},"readAgenticCommerceSellerId");var Zr=n(e=>{let t=Oe(e,ve.web3Enabled).toLowerCase();return t?t==="0"||t==="false"||t==="no"?!1:t==="1"||t==="true"||t==="yes":!0},"isAgenticCommerceWeb3Enabled");var Ze=n(e=>String(e||"").trim().replace(/\/+$/g,""),"normalizeAgenticCommerceBaseUrl"),se=n((e,t)=>`${Ze(e)}${t}`,"buildAgenticCommerceUrl"),ee=n((e,t,r,o,a=o.startsWith("/")?o:null)=>({id:t,label:r,value:o,path:a,semanticKey:_e("mainpanel-commerce-readiness-row",[e,t,r,o,a||""])}),"buildAgenticCommerceMainPanelReadinessRow"),Fe=n((e,t,r)=>({id:e,title:t,rows:r}),"buildAgenticCommerceMainPanelReadinessSection"),La=n(()=>{let e=[Fe("overview","Overview",[ee("overview","acp-discovery","ACP discovery",`GET ${v.acpDiscovery}`,v.acpDiscovery),ee("overview","acp-config","ACP config",`GET ${v.acpConfig}`,v.acpConfig),ee("overview","api-version","API version",Qe,null)]),Fe("discovery","Discovery",[ee("discovery","ucp-profile","UCP profile",v.ucpProfile),ee("discovery","mpp-openapi","MPP OpenAPI",v.mppOpenApi),ee("discovery","x402-payment-required","x402 payment required",v.x402PaymentRequired),ee("discovery","x402-api-root","x402 API root",v.x402ApiRoot)]),Fe("sessions","Sessions",[ee("sessions","checkout-sessions","Checkout sessions",v.checkoutSessions),ee("sessions","stripe-webhook","Stripe webhook",wt.webhook)]),Fe("web3","Web3",[ee("web3","settle","Settle",v.web3Settle),ee("web3","solana-pay-settle","Solana Pay settle",v.solanaPaySettle),ee("web3","signals","Signals","Base RPC + Solana RPC confirmation",null)]),Fe("governance","Governance",[ee("governance","openbox-ingest","OpenBOX ingest",v.openboxIngest),ee("governance","risk-source","Risk source","OpenBOX risk signal",null)]),Fe("proofs","Proofs",[ee("proofs","harness-proof","Harness proof",v.commerceProofArtifact),ee("proofs","trace-artifact","Trace artifact",v.commerceTraceArtifact)])],t=e.flatMap(a=>a.rows),r=t.map(a=>a.path||"").filter(a=>a.length>0),o=t.filter(a=>!a.path).map(a=>`${a.label}: ${a.value}`);return{surface:"mainpanel-commerce",semanticKey:_e("mainpanel-commerce-readiness",[Qe,...t.map(a=>a.semanticKey)]),sections:e,routePaths:r,routeCount:r.length,signals:o}},"buildAgenticCommerceMainPanelReadiness"),xl=La(),eo=n((e,t)=>{let r=Oe(e,ve.web3DepositAddress);if(/^0x[0-9a-fA-F]{40}$/.test(r))return r;let o=_e("deposit-address",[t,"0"]),a=_e("deposit-address",[t,"1"]),s=_e("deposit-address",[t,"2"]),i=_e("deposit-address",[t,"3"]),c=_e("deposit-address",[t,"4"]);return`0x${o}${a}${s}${i}${c}`.slice(0,42)},"buildAgenticCommerceDepositAddress");var to=n((e,t=Xr)=>{let r=Oe(e,ve.x402PayToAddress);return/^0x[0-9a-fA-F]{40}$/.test(r)&&r.toLowerCase()!==Ma?r:eo(e,t)},"readAgenticCommerceX402PayToAddress"),El=eo({},Xr),Ka=/^[a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,64}$/,ro=n(e=>{let t=Oe(e,ve.x402Network);return Ka.test(t)?t:Jr},"readAgenticCommerceX402Network"),oo=n(e=>Oe(e,ve.x402Asset)||Yr,"readAgenticCommerceX402Asset"),no=n(e=>{let t=Oe(e,ve.x402Amount);return/^[1-9][0-9]*$/.test(t)?t:Vr},"readAgenticCommerceX402Amount");var ao=n(e=>{let t=Oe(e,ve.x402FacilitatorUrl);try{let r=new URL(t||Qt);return r.protocol==="https:"||r.protocol==="http:"?r.toString().replace(/\/+$/g,""):Qt}catch{return Qt}},"readAgenticCommerceX402FacilitatorUrl"),so=n(e=>{let t=Ze(e.baseUrl);return{protocol:{name:"acp",version:Qe,supported_versions:[Qe],documentation_url:"https://agenticcommerce.dev"},api_base_url:t,transports:[...Ua],capabilities:{services:[...Na],...e.web3Enabled?{extensions:[{name:"x-web3"}]}:{}},links:{config:se(t,v.acpConfig),ucp:se(t,v.ucpProfile),mpp:se(t,v.mppOpenApi),x402:se(t,v.x402PaymentRequired)}}},"buildAgenticCommerceAcpDiscovery"),io=n(e=>{let t=Ze(e.baseUrl),r={acp:se(t,v.acpDiscovery),api:se(t,v.x402ApiRoot),checkout_sessions:se(t,v.checkoutSessions),mpp_openapi:se(t,v.mppOpenApi),proof:se(t,v.commerceProofArtifact),trace:se(t,v.commerceTraceArtifact),x402_payment_required:se(t,v.x402PaymentRequired),solana_pay_settle:se(t,v.solanaPaySettle)},o={checkout_sessions:!0,content_payments:!0,proof_artifacts:!0,risk_signals:!0,web3_settlement:e.web3Enabled,solana_pay:e.web3Enabled},a={"dev.ucp.shopping":[{version:We,spec:qr,transport:"rest",endpoint:r.api,schema:"https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json"}]};return{ucp:{version:We,protocol_version:We,services:a,capabilities:{"dev.ucp.shopping.checkout":[{version:We,spec:"https://ucp.dev/2026-04-08/specification/checkout/",schema:"https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"}]},payment_handlers:{},endpoints:r},protocol_version:We,protocol:{name:"ucp",version:We},seller:{id:e.sellerId},services:[{id:"knowgrph-content-payments",type:"content-payments",endpoints:{x402:r.x402_payment_required,checkout_sessions:r.checkout_sessions,solana_pay_settle:r.solana_pay_settle,proof:r.proof,trace:r.trace}}],capabilities:o,endpoints:r,spec_urls:[qr],schema_urls:["https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json","https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"]}},"buildAgenticCommerceUcpProfile"),co=n(e=>{let t=Ze(e.baseUrl);return{openapi:"3.1.0",info:{title:"Knowgrph Machine Payment Protocol",version:Qe,description:"Machine-readable payable-operation discovery for Knowgrph commerce routes."},servers:[{url:t}],paths:{[v.x402PaymentRequired]:{get:{operationId:"getKnowgrphX402PaymentRequirement",summary:"Return x402 payment requirements for an agent-readable paid resource.","x-payment-info":{intent:"charge",method:"x402",amount:Ia,currency:"usdc"},responses:{402:{description:"Payment Required"}}}},[v.checkoutSessions]:{post:{operationId:"createKnowgrphCommerceCheckoutSession",summary:"Create an agentic commerce checkout session.","x-payment-info":{intent:"session",method:"stripe",amount:"dynamic",currency:"request.currency"},responses:{201:{description:"Checkout session created"}}}},[v.solanaPaySettle]:{post:{operationId:"settleKnowgrphSolanaPayCheckoutSession",summary:"Settle an agentic commerce checkout session from a verified Solana Pay transaction signature.","x-payment-info":{intent:"settlement",method:Fr,amount:"dynamic",currency:"request.currency"},responses:{200:{description:"Solana Pay session settled"},409:{description:"Solana Pay transaction is not confirmed yet"},422:{description:"Solana Pay transaction does not match the session"}}}}}}},"buildAgenticCommerceMppOpenApi"),lo=n(e=>{let t=Ze(e.baseUrl),r=se(t,v.x402PaymentRequired),o=String(e.amount||Vr);return{x402Version:2,error:"Payment required",resource:{url:r,description:"Knowgrph agentic commerce paid-resource readiness probe",mimeType:"application/json"},accepts:[{scheme:"exact",network:String(e.network||Jr),amount:o,maxAmountRequired:o,asset:String(e.asset||Yr),resource:r,mimeType:"application/json",payTo:e.payTo,maxTimeoutSeconds:300,extra:{name:"USDC",version:"2",resourceUrl:r,...e.facilitatorUrl?{facilitatorUrl:e.facilitatorUrl}:{}}}]}},"buildAgenticCommerceX402PaymentRequired");var Da=n(e=>JSON.stringify(e,null,2),"jsonBody"),$a=n(e=>String(e||"").trim().replace(/\/+$/g,""),"trimOrigin"),Ha=n(e=>typeof btoa=="function"?btoa(e):typeof Buffer<"u"?Buffer.from(e).toString("base64"):"","encodeBase64"),ja=n((e,t)=>{try{return new URL(e).origin}catch{return $a(t)}},"rootOriginFromRequest"),Zt=n((e={})=>{let t=ja(e.requestUrl,e.origin),r=e.env||{},o=Qr(r,`${t}/`),a=Zr(r),s=lo({baseUrl:t,payTo:to(r),network:ro(r),asset:oo(r),amount:no(r),facilitatorUrl:ao(r)});return{acpDiscovery:so({sellerId:o,baseUrl:t,web3Enabled:a}),ucpProfile:io({sellerId:o,baseUrl:t,web3Enabled:a}),mppOpenApi:co({baseUrl:t}),x402PaymentRequired:s}},"buildKnowgrphCommerceDiscovery");var po=n((e,t={})=>{let r=Zt({requestUrl:e?.url,env:t}).x402PaymentRequired,o=Ha(JSON.stringify(r));return new Response(Da(r),{status:402,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*",...o?{"payment-required":o}:{}}})},"buildKnowgrphX402PaymentRequiredResponse");async function uo(e){return po(e.request,e.env||{})}n(uo,"onRequest");async function mo(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=t.headers.get("origin")||"";return r==="OPTIONS"?Ge(t):r!=="GET"&&r!=="HEAD"?ge({ok:!1,error:"Method not allowed"},{status:405,origin:o}):ge({ok:!0,models:Jt.map(a=>({model:a,display_name:a}))},{status:200,origin:o})}n(mo,"onRequest");async function ho(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return Ge(t);if(o!=="POST")return ge({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return ge({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await ft(t);return await yt({request:t,env:r,pathname:"/responses",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return ge({ok:!1,error:i},{status:400,origin:a})}}n(ho,"onRequest");var ze=Object.freeze({researchSourceFiles:"knowgrph_research_source_files",inspectAgentSurface:"knowgrph_inspect_agent_surface"}),er=n(e=>String(e||"").trim(),"normalizeString"),Ba=n(e=>({...e,arguments:Array.isArray(e.arguments)?e.arguments.map(t=>({...t})):void 0,_meta:e._meta&&typeof e._meta=="object"?{...e._meta,tools:Array.isArray(e._meta.tools)?[...e._meta.tools]:void 0}:void 0}),"clonePrompt"),fo=Object.freeze([Object.freeze({name:ze.researchSourceFiles,title:"Research Knowgrph Source Files",description:"Guide an MCP host through read-only Knowgrph Source Files research using search and fetch with citation-ready URLs.",arguments:Object.freeze([Object.freeze({name:"query",description:"Research question or topic to pass to the read-only search tool.",required:!0}),Object.freeze({name:"limit",description:"Optional decimal string for the maximum search results to inspect.",required:!1}),Object.freeze({name:"focus",description:"Optional aspect to prioritize when reading fetched Source Files.",required:!1})]),_meta:Object.freeze({readOnly:!0,tools:Object.freeze(["search","fetch"])})}),Object.freeze({name:ze.inspectAgentSurface,title:"Inspect Knowgrph Agent Surface",description:"Guide an MCP host through read-only inspection of Knowgrph agent, MCP, and MCP Apps readiness metadata.",arguments:Object.freeze([Object.freeze({name:"focus",description:"Optional readiness area to emphasize, such as transport, tools, resources, prompts, retrieval, or app metadata.",required:!1})]),_meta:Object.freeze({readOnly:!0,tools:Object.freeze(["inspect_agent_surface"])})})]),yo=n(()=>fo.map(Ba),"buildKnowgrphAgentReadyPromptContracts"),Ga=n(e=>fo.find(t=>t.name===er(e))||null,"findPromptContract"),_t=n((e,t)=>!e||typeof e!="object"?"":er(e[t]),"readPromptArg"),Wa=n((e,t)=>{let r=_t(e,t);if(!r)throw new Error(`Missing required prompt argument: ${t}`);return r},"readRequiredPromptArg"),go=n(e=>({role:"user",content:{type:"text",text:e}}),"buildPromptMessage"),Fa=n((e={})=>{let t=Wa(e,"query"),r=_t(e,"limit"),o=_t(e,"focus");return[`Research Knowgrph Source Files for: ${t}`,"","Use the MCP server read-only retrieval path:",`1. Call search with query=${JSON.stringify(t)}${r?` and limit=${JSON.stringify(r)}`:""}.`,"2. Select the most relevant returned ids and call fetch for each id before answering.","3. Ground the answer in fetched markdown content and cite the returned result URLs when summarizing.",o?`4. Prioritize this focus: ${o}.`:"","","Do not mutate graph, canvas, workspace, storage, or browser-local state for this research prompt."].filter(Boolean).join(`
`)},"buildSourceFilesResearchPromptText"),za=n((e={})=>{let t=_t(e,"focus");return["Inspect the Knowgrph agent-ready surface through the read-only inspect_agent_surface tool.","","Review health, API catalog, MCP server card, A2A card, agent skills, commerce discovery, and mcpAppsServerReadiness.","For MCP Apps readiness, verify tool/resource linkage, output schema, text fallback, structured content, sandbox/security metadata, no-auth security-scheme mirroring, widget accessibility, prompts, search/fetch retrieval, Streamable HTTP, and local stdio support.",t?`Emphasize this readiness area: ${t}.`:"","","Report checklist ids and evidence from structuredContent. Do not infer readiness from prose alone."].filter(Boolean).join(`
`)},"buildAgentSurfaceInspectionPromptText"),wo=n((e,t={})=>{let r=Ga(e);if(!r)throw new Error(`Unknown Knowgrph MCP prompt: ${er(e)}`);if(r.name===ze.researchSourceFiles)return{description:r.description,messages:[go(Fa(t))]};if(r.name===ze.inspectAgentSurface)return{description:r.description,messages:[go(za(t))]};throw new Error(`Unhandled Knowgrph MCP prompt: ${r.name}`)},"getKnowgrphAgentReadyPrompt");var qa=Object.freeze({sourceFileById:"knowgrph_source_file_by_id"}),bt="kgdoc://source-file/{id}",So="kgdoc://source-file/",_o="text/markdown",et=n(e=>String(e||"").trim(),"normalizeString"),bo=n(()=>[{uriTemplate:bt,name:qa.sourceFileById,title:"Knowgrph Source File By ID",description:"Read a complete published Knowgrph Source File markdown document using a stable kgdoc id returned by search.",mimeType:_o,annotations:{audience:["user","assistant"],priority:.8},_meta:{readOnly:!0,source:"knowgrph-source-files",tool:"fetch"}}],"buildKnowgrphAgentReadyResourceTemplateContracts");var Ro=n(e=>{let t=et(e);if(!t.startsWith(So))return"";let r=t.slice(So.length);if(!r)return"";try{return decodeURIComponent(r)}catch{return r}},"parseKnowgrphSourceFileResourceUri"),Po=n(({uri:e,sourceFile:t}={})=>{let r=typeof t?.content=="string"?t.content:String(t?.text||"");return{contents:[{uri:et(e),mimeType:_o,text:r,_meta:{id:et(t?.id),title:et(t?.title),url:et(t?.url),metadata:t?.metadata&&typeof t.metadata=="object"?{...t.metadata}:{}}}]}},"buildKnowgrphSourceFileResourceReadResult");var Pt="io.modelcontextprotocol/ui",Le="text/html;profile=mcp-app",Co="2026-01-26",Va="knowgrph-mcp-apps-server-readiness/v0.1",ie="ui://knowgrph/agent-ready",or="knowgrph-agent-ready",Ke="inspect_agent_surface",fe=Object.freeze(["search","fetch"]),tr=Object.freeze({search:Object.freeze(["ids"]),fetch:Object.freeze(["id","title","content","text"])}),Ao=Object.freeze(Object.values(ze)),Ae="streamable-http",Ya=Object.freeze([Object.freeze({type:"noauth"})]),ne=Object.freeze({openAiApps:"openai-apps",claude:"claude-mcp-connector",qwenCode:"qwen-code",kimiCli:"kimi-cli",bytePlusModelArk:"byteplus-modelark",generic:"generic-mcp"}),H=n(e=>String(e||"").trim(),"normalizeString"),Rt=n(e=>H(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),"escapeHtml"),Ja=n(e=>JSON.stringify(e).replace(/</g,"\\u003c"),"safeJsonForInlineScript"),Xa=n(e=>{let t=H(e);if(!t)return"";try{return new URL(t).origin}catch{return""}},"readUrlOrigin"),nr=n(()=>({extensions:{[Pt]:{mimeTypes:[Le]}}}),"buildKnowgrphMcpAppsCapabilities"),te=n(e=>Array.isArray(e)?e:[],"arrayFrom"),ar=n(()=>Ya.map(e=>({...e})),"buildKnowgrphMcpNoauthSecuritySchemes"),To=n(e=>(Array.isArray(e)&&e.length?e:ar()).filter(r=>r&&typeof r=="object").map(r=>({...r})),"normalizeSecuritySchemes"),ko=n(e=>te(e).some(t=>t?.type==="noauth"),"hasNoauthSecurityScheme"),xo=n(e=>Array.isArray(e)?To(e):[],"readSecuritySchemes"),Qa=n(e=>{let t=H(e);return t.includes("window.openai")&&t.includes("openai:set_globals")&&t.includes("toolInput")&&t.includes("toolOutput")&&t.includes("callTool")&&t.includes("request('ui/initialize'")},"hasOpenAiWidgetBridgeHtml"),Eo=n((e,t=[])=>e?.outputSchema?.type==="object"&&t.every(r=>te(e.outputSchema?.required).includes(r)),"hasToolOutputSchemaFields"),rr=n(e=>e?.annotations?.readOnlyHint===!0&&e?.annotations?.destructiveHint===!1&&e?.annotations?.openWorldHint===!1&&e?.annotations?.idempotentHint===!0,"hasReadOnlyToolAnnotations"),z=n((e,t,r,o=[])=>({id:e,label:t,ok:r===!0,evidence:te(o).map(H).filter(Boolean)}),"booleanCheck"),sr=n((e={})=>{let t=H(e.baseUrl).replace(/\/+$/,""),r=H(e.serverName)||"knowgrph",o=H(e.mcpUrl)||(t?`${t}/mcp`:"");return{[ne.openAiApps]:{id:ne.openAiApps,label:"OpenAI Apps / ChatGPT",transport:Ae,url:o,appResourceUri:ie,appToolName:Ke,requiredMetadata:["openai/outputTemplate","openai/widgetAccessible","openai/widgetCSP","openai/widgetDomain"],requiredTools:[Ke,...fe]},[ne.claude]:{id:ne.claude,label:"Claude MCP connector",transport:Ae,url:o,beta:"mcp-client-2025-11-20",mcp_servers:[{type:"url",url:o,name:r}],tools:[{type:"mcp_toolset",mcp_server_name:r}],requiredTools:fe},[ne.qwenCode]:{id:ne.qwenCode,label:"Qwen Code",transport:"http",url:o,command:`qwen mcp add --transport http ${r} ${o}`,settingsJson:{mcpServers:{[r]:{httpUrl:o,timeout:3e4,trust:!1,includeTools:["search","fetch",Ke]}}},requiredTools:fe,primaryFlow:"Call search with a natural-language query, then call fetch with the returned kgdoc id."},[ne.kimiCli]:{id:ne.kimiCli,label:"Kimi CLI",transport:"http",url:o,command:`kimi mcp add --transport http ${r} ${o}`,configFile:"~/.kimi/mcp.json",mcpJson:{mcpServers:{[r]:{url:o,transport:"http"}}},requiredTools:fe,primaryFlow:"Call search with a natural-language query, then call fetch with the returned kgdoc id."},[ne.bytePlusModelArk]:{id:ne.bytePlusModelArk,label:"BytePlus ModelArk Responses API",transport:Ae,url:o,apiBaseUrl:"https://ark.ap-southeast.bytepluses.com/api/v3",endpoint:"/responses",requiredHeaders:{"ark-beta-mcp":"true"},tools:[{type:"mcp",server_label:r,server_url:o,require_approval:"never"}],openAiCompatible:{base_url:"https://ark.ap-southeast.bytepluses.com/api/v3",default_headers:{"ark-beta-mcp":"true"},responsesCreate:{model:"<MODELARK_MODEL_OR_ENDPOINT_ID>",tools:[{type:"mcp",server_label:r,server_url:o,require_approval:"never"}]}},invocationScope:"ModelArk Responses API with MCP service and model permissions enabled.",requiredTools:fe,primaryFlow:"Use ModelArk Responses API with the Knowgrph MCP tool entry, then ask the model to call search and fetch."},[ne.generic]:{id:ne.generic,label:"Generic MCP clients",transport:Ae,url:o,initialize:{method:"initialize",accept:["application/json","text/event-stream"]},requiredMethods:["initialize","notifications/initialized","tools/list","tools/call"],optionalMethods:["prompts/list","prompts/get","resources/list","resources/templates/list","resources/read"],requiredTools:fe}}},"buildKnowgrphMcpClientSetups"),vo=n((e={})=>{let t=H(e.baseUrl).replace(/\/+$/,""),r=H(e.updatedAt),o=e.mcpServerCard&&typeof e.mcpServerCard=="object"?e.mcpServerCard:{},a=o.capabilities&&typeof o.capabilities=="object"?o.capabilities:{},s=te(e.tools).length?te(e.tools):te(a.tools),i=te(e.resources).length?te(e.resources):[At({appUrl:t,updatedAt:r})],c=te(e.prompts).length?te(e.prompts):te(o.prompts),l=te(e.resourceTemplates).length?te(e.resourceTemplates):te(o.resourceTemplates),p=s.filter(w=>w?._meta?.ui?.resourceUri===ie),m=p.find(w=>w?.name===Ke)||p[0]||null,f=i.find(w=>w?.uri===ie)||null,P=a.extensions?.[Pt],_=H(o.transport?.url)||(t?`${t}/mcp`:""),k=H(o.transport?.type)||Ae,j=H(e.appResourceHtml)||Mo({appUrl:t,updatedAt:r,toolName:m?.name||Ke}),L=e.clientSetups&&typeof e.clientSetups=="object"?e.clientSetups:sr({baseUrl:t,mcpUrl:_,serverName:o.serverInfo?.name}),$=m?.outputSchema&&typeof m.outputSchema=="object",re=!!m?.name,W=$,T=m?._meta?.["openai/outputTemplate"]===ie,O=Qa(j),J=ko(m?.securitySchemes)&&ko(m?._meta?.securitySchemes),K=rr(m),X=m?._meta?.["openai/widgetAccessible"]===!0,I=c.map(w=>H(w?.name)).filter(Boolean),M=o.capabilities?.prompts&&typeof o.capabilities.prompts=="object",B=Ao.every(w=>I.includes(w)),oe=l.map(w=>H(w?.uriTemplate)).filter(Boolean),pe=oe.includes(bt),Se=Object.fromEntries(fe.map(w=>[w,s.find(E=>E?.name===w)||null])),A=fe.every(w=>{let E=Se[w];return rr(E)&&Eo(E,tr[w])}),y=L[ne.qwenCode],S=y?.transport==="http"&&y?.url===_&&y?.settingsJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.httpUrl===_&&String(y?.command||"").includes("--transport http")&&String(y?.command||"").includes(_),d=L[ne.kimiCli],h=d?.transport==="http"&&d?.url===_&&d?.mcpJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.url===_&&d?.mcpJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.transport==="http"&&String(d?.command||"").includes("kimi mcp add --transport http")&&String(d?.command||"").includes(_),g=L[ne.bytePlusModelArk],b=g?.transport===Ae&&g?.url===_&&g?.endpoint==="/responses"&&g?.requiredHeaders?.["ark-beta-mcp"]==="true"&&te(g?.tools).some(w=>w?.type==="mcp"&&w?.server_label===(o.serverInfo?.name||"knowgrph")&&w?.server_url===_&&w?.require_approval==="never")&&g?.openAiCompatible?.responsesCreate?.tools?.some(w=>w?.type==="mcp"&&w?.server_label===(o.serverInfo?.name||"knowgrph")&&w?.server_url===_&&w?.require_approval==="never"),N=[z("app-tool-resource-link","App tool is linked to the UI resource",p.length>0,p.map(w=>w.name)),z("output-schema","App tool exposes an output schema",$,[m?.name]),z("text-fallback","Tool result keeps a text fallback for non-UI hosts",re,[m?.name]),z("structured-content","Tool result returns structured content for the View",W,[m?.name]),z("resource-descriptor","MCP resource descriptor uses the MCP Apps MIME type",f?.mimeType===Le,[f?.uri]),z("resource-security-meta","Resource declares UI sandbox metadata",f?._meta?.ui?.prefersBorder===!0&&!!f?._meta?.ui?.csp,[f?.uri]),z("openai-output-template","App tool exposes the OpenAI output template metadata key",T,[m?.name]),z("openai-widget-bridge","App resource supports the OpenAI Apps widget bridge",O,["window.openai","openai:set_globals"]),z("tool-security-schemes","App tool exposes no-auth securitySchemes and mirrors them in _meta",J,[m?.name]),z("tool-impact-annotations","App tool exposes complete read-only impact annotations",K,[m?.name]),z("widget-accessible","App tool allows the widget bridge to call tools",X,[m?.name]),z("prompt-discovery","Server exposes MCP prompt templates for multi-host guidance",M&&B,I),z("source-file-resource-template","Server exposes a dynamic Source Files resource template",pe,oe),z("deep-research-search-fetch","Server exposes read-only search and fetch tools",A,fe),z("qwen-code-http-client-setup","Server advertises Qwen Code HTTP MCP setup",S,[y?.command]),z("kimi-cli-http-client-setup","Server advertises Kimi CLI HTTP MCP setup",h,[d?.command]),z("byteplus-modelark-responses-mcp-setup","Server advertises BytePlus ModelArk Responses API MCP setup",b,[g?.apiBaseUrl,g?.endpoint]),z("extension-capability","Server advertises the MCP Apps extension capability",P?.mimeTypes?.includes(Le),[Pt]),z("streamable-http-transport","Server exposes a stateless Streamable HTTP JSON-RPC transport",!!_&&k===Ae,[_,k]),z("stdio-transport","Repo-local MCP server supports stdio host configuration",e.localStdio!==!1,["node mcp/server.js"])],F=N.every(w=>w.ok);return{schemaVersion:Va,ready:F,updatedAt:r,app:{name:or,protocolVersion:Co,resourceUri:ie,resourceMimeType:Le,extensionId:Pt},tool:{name:m?.name||Ke,title:m?.title||"Inspect Agent Surface",resourceUri:m?._meta?.ui?.resourceUri||ie,visibility:te(m?._meta?.ui?.visibility).length?m._meta.ui.visibility:["model","app"],readOnly:m?.annotations?.readOnlyHint===!0,destructive:m?.annotations?.destructiveHint===!0,openWorld:m?.annotations?.openWorldHint===!0,idempotent:m?.annotations?.idempotentHint===!0,annotationsReady:K,hasOutputSchema:!!$,textFallback:re,structuredContent:W,openAiOutputTemplate:T,openAiWidgetBridge:O,securitySchemes:xo(m?.securitySchemes),mirroredSecuritySchemes:xo(m?._meta?.securitySchemes),widgetAccessible:X},resource:{uri:f?.uri||ie,name:f?.name||or,mimeType:f?.mimeType||Le,prefersBorder:f?._meta?.ui?.prefersBorder===!0,domain:H(f?._meta?.ui?.domain),csp:f?._meta?.ui?.csp||{},openAiWidgetBridge:O},retrieval:{mode:"deep-research-search-fetch",requiredTools:fe,tools:fe.map(w=>{let E=Se[w];return{name:w,readOnly:E?.annotations?.readOnlyHint===!0,destructive:E?.annotations?.destructiveHint===!0,openWorld:E?.annotations?.openWorldHint===!0,idempotent:E?.annotations?.idempotentHint===!0,annotationsReady:rr(E),requiredOutputFields:tr[w],outputSchemaReady:Eo(E,tr[w])}})},prompts:{requiredPrompts:Ao,names:I,capability:!!M,ready:M&&B},resourceTemplates:{requiredTemplates:[bt],uriTemplates:oe,ready:pe},clients:L,transports:[{id:"pages-http-jsonrpc",type:k,url:_,stateless:!0,serverFactory:!0},{id:"local-stdio-jsonrpc",type:"stdio",command:"node mcp/server.js",stateless:!1,serverFactory:!0}],dataModel:{source:"inspect_agent_surface.structuredContent",categories:[{id:"discovery",label:"Discovery metadata",count:["health","apiCatalog","openApi","mcpServerCard","agentCard","agentSkills"].length},{id:"commerce",label:"Commerce discovery",count:["acpDiscovery","ucpProfile","mppOpenApi"].length},{id:"mcp-apps",label:"MCP Apps server bindings",count:N.length}],renderMode:"structured-summary-with-json-fallback"},checklist:N}},"buildKnowgrphMcpAppsServerReadiness"),Oo=n((e={})=>{let t=H(e.resourceUri)||ie;return{securitySchemes:To(e.securitySchemes),ui:{resourceUri:t,visibility:Array.isArray(e.visibility)&&e.visibility.length?e.visibility:["model","app"]},"openai/outputTemplate":t,"openai/widgetAccessible":e.widgetAccessible!==!1,"openai/toolInvocation/invoking":H(e.invoking)||"Inspecting Knowgrph.","openai/toolInvocation/invoked":H(e.invoked)||"Knowgrph is ready."}},"buildKnowgrphMcpAppsToolMeta"),Io=Object.freeze({type:"object",additionalProperties:!0,required:["baseUrl","healthUrl","mcpUrl"],properties:{baseUrl:{type:"string"},healthUrl:{type:"string"},mcpUrl:{type:"string"},apiCatalogUrl:{type:"string"},openApiUrl:{type:"string"},mcpServerCardUrl:{type:"string"},agentCardUrl:{type:"string"},agentSkillsUrl:{type:"string"},commerceUrls:{type:"object",additionalProperties:{type:"string"}},health:{type:"object",additionalProperties:!0},apiCatalog:{type:"object",additionalProperties:!0},openApi:{type:"object",additionalProperties:!0},mcpServerCard:{type:"object",additionalProperties:!0},agentCard:{type:"object",additionalProperties:!0},agentSkills:{type:"object",additionalProperties:!0},commerce:{type:"object",additionalProperties:!0},mcpAppsServerReadiness:{type:"object",additionalProperties:!0}}}),At=n((e={})=>{let t=H(e.appUrl),r=H(e.updatedAt),o=H(e.domain)||Xa(t),a={connectDomains:[],resourceDomains:[],frameDomains:[],baseUriDomains:[]};return{uri:ie,name:or,description:["Interactive MCP Apps view for the existing Knowgrph agent-ready surface.",t?`App URL: ${t}`:"",r?`Updated: ${r}`:""].filter(Boolean).join(" "),mimeType:Le,_meta:{ui:{csp:a,...o?{domain:o}:{},prefersBorder:!0},"openai/widgetDescription":"Interactive Knowgrph agent-ready server-readiness view.","openai/widgetPrefersBorder":!0,...o?{"openai/widgetDomain":o}:{},"openai/widgetCSP":{connect_domains:a.connectDomains,resource_domains:a.resourceDomains,frame_domains:a.frameDomains}}}},"buildKnowgrphMcpAppsResourceDescriptor"),Mo=n((e={})=>{let t=H(e.appUrl),r=H(e.updatedAt),o=H(e.toolName)||Ke,a=Array.isArray(e.toolNames)?e.toolNames.map(H).filter(Boolean):[o],s={appUrl:t,updatedAt:r,resourceUri:ie,toolName:o,toolNames:a,protocolVersion:Co};return`<!doctype html>
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
        ${t?`<a href="${Rt(t)}" target="_blank" rel="noreferrer">Open</a>`:""}
      </nav>
    </header>
    <section aria-label="MCP app state">
      <dl>
        <dt>Resource</dt><dd>${Rt(ie)}</dd>
        <dt>Tool</dt><dd>${Rt(o)}</dd>
        <dt>Host</dt><dd id="host">Not connected.</dd>
        <dt>Updated</dt><dd>${Rt(r||"runtime")}</dd>
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
    const boot = ${Ja(s)};
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
</html>`},"buildKnowgrphMcpAppsHtml"),ir=n((e={})=>{let t=At(e);return{contents:[{uri:t.uri,mimeType:Le,text:Mo(e),_meta:t._meta}]}},"buildKnowgrphMcpAppsResourceReadResult");var u=Object.freeze({search:"search",fetch:"fetch",listSourceFiles:"list_source_files",readSourceFile:"read_source_file",readSharedDocument:"read_shared_document",inspectSharedDocumentStructure:"inspect_shared_document_structure",inspectLocalSettingsChatReadiness:"inspect_local_settings_chat_readiness",inspectLocalMainPanelState:"inspect_local_mainpanel_state",inspectLocalEditorWorkspaceState:"inspect_local_editor_workspace_state",inspectLocalChatPipelineState:"inspect_local_chat_pipeline_state",inspectLocalMainPanelChatCanvasPipeline:"inspect_local_mainpanel_chat_canvas_pipeline",inspectLocalWorkspaceDocument:"inspect_local_workspace_document",inspectLocalCanvasTopology:"inspect_local_canvas_topology",inspectLocalCanvasSnapshot:"inspect_local_canvas_snapshot",inspectLocal3dCameraPose:"inspect_local_3d_camera_pose",inspectLocal3dLayoutPositions:"inspect_local_3d_layout_positions",inspectLocal2dZoomViewport:"inspect_local_2d_zoom_viewport",inspectLocalSourceFilesSnapshot:"inspect_local_source_files_snapshot",inspectAgentSurface:"inspect_agent_surface"}),Za="knowgrph";var es=n(()=>Object.freeze({readOnlyHint:!0,destructiveHint:!1,openWorldHint:!1,idempotentHint:!0}),"buildReadOnlyToolAnnotations"),q=es(),ts=Object.freeze({type:"object",additionalProperties:!0,required:["ids","results"],properties:{ids:{type:"array",items:{type:"string"}},results:{type:"array",items:{type:"object",additionalProperties:!0,required:["id","title","url"],properties:{id:{type:"string"},title:{type:"string"},url:{type:"string"},snippet:{type:"string"},workspaceId:{type:"string"},canonicalPath:{type:"string"}}}}}}),rs=Object.freeze({type:"object",additionalProperties:!0,required:["id","title","content","text","url"],properties:{id:{type:"string"},title:{type:"string"},content:{type:"string"},text:{type:"string"},url:{type:"string"},metadata:{type:"object",additionalProperties:!0}}}),V=n((e,t=Za)=>`${String(t||"").trim()}.${String(e||"").trim()}`,"buildKnowgrphWebMcpToolName"),cr=n((e={})=>{let t=String(e.defaultWorkspaceId||"").trim(),r=e.includeBrowserOnlyTools===!0;return[{name:u.search,webName:V(u.search),title:"Search Knowgrph Source Files",description:"Use this when an MCP host needs to search published Knowgrph Source Files and return stable document IDs for the `fetch` tool. Call this first for OpenAI Deep Research-style retrieval, Claude, Qwen Code, Kimi CLI, BytePlus ModelArk, and generic MCP clients.",inputSchema:{type:"object",additionalProperties:!1,required:["query"],properties:{query:{type:"string"},limit:{type:"number",default:10}}},outputSchema:ts,annotations:q},{name:u.fetch,webName:V(u.fetch),title:"Fetch Knowgrph Source File",description:"Use this when an MCP host needs the complete published Knowgrph Source File for an ID returned by `search`. Returns markdown as both `content` and `text` for OpenAI, Claude, Qwen Code, Kimi CLI, BytePlus ModelArk, and generic MCP clients.",inputSchema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"string"}}},outputSchema:rs,annotations:q},{name:u.listSourceFiles,webName:V(u.listSourceFiles),title:"List Source Files",description:"Use this when an MCP host needs the published Knowgrph Source Files index as markdown.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.readSourceFile,webName:V(u.readSourceFile),title:"Read Source File",description:"Use this when an MCP host knows a published Knowgrph canonical path and needs that Editor Workspace markdown content. Defaults to the canonical docs workspace when workspaceId is omitted.",inputSchema:{type:"object",additionalProperties:!1,required:["canonicalPath"],properties:{canonicalPath:{type:"string"},workspaceId:t?{type:"string",default:t}:{type:"string"}}},annotations:q},{name:u.readSharedDocument,webName:V(u.readSharedDocument),title:"Read Shared Document",description:"Use this when an MCP host has a Knowgrph share token or public Knowgrph share/document URL and needs the published markdown content.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:q},{name:u.inspectSharedDocumentStructure,webName:V(u.inspectSharedDocumentStructure),title:"Inspect Shared Document Structure",description:"Use this when an MCP host has a Knowgrph share token or public Knowgrph share/document URL and needs frontmatter/body structure without mutating the document.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:q},...r?[{name:u.inspectLocalSettingsChatReadiness,webName:V(u.inspectLocalSettingsChatReadiness),title:"Inspect Local Settings Chat Readiness",description:"Inspect the active browser-local Knowgrph SettingsView chat readiness state for MainPanel MCP, Integrations, and Commerce, including provider, routing, and model discovery status.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocalMainPanelState,webName:V(u.inspectLocalMainPanelState),title:"Inspect Local MainPanel State",description:"Inspect the active browser-local Knowgrph MainPanel tab, search, and shared action state for MCP, Integrations, and Commerce readiness.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocalEditorWorkspaceState,webName:V(u.inspectLocalEditorWorkspaceState),title:"Inspect Local Editor Workspace State",description:"Inspect the active browser-local Knowgrph Editor Workspace and Markdown pane state, including pane visibility and live draft/frontmatter structure.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocalChatPipelineState,webName:V(u.inspectLocalChatPipelineState),title:"Inspect Local Chat Pipeline State",description:"Inspect the active browser-local Knowgrph FloatingPanel chat runtime, including streaming, workspace follow path, and LLM-to-workspace pipeline state.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocalMainPanelChatCanvasPipeline,webName:V(u.inspectLocalMainPanelChatCanvasPipeline),title:"Inspect Local MainPanel Chat Canvas Pipeline",description:"Inspect the active browser-local Knowgrph E2E readiness path from MainPanel MCP, Integrations, and Commerce through FloatingPanel Chat, workspace markdown/frontmatter, and canvas topology.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocalWorkspaceDocument,webName:V(u.inspectLocalWorkspaceDocument),title:"Inspect Local Workspace Document",description:"Inspect the active browser-local Knowgrph workspace markdown document structure without reading published storage routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocalCanvasTopology,webName:V(u.inspectLocalCanvasTopology),title:"Inspect Local Canvas Topology",description:"Inspect the active browser-local Knowgrph canvas topology summary from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocalCanvasSnapshot,webName:V(u.inspectLocalCanvasSnapshot),title:"Inspect Local Canvas Snapshot",description:"Inspect the active browser-local Knowgrph canvas SVG snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocal3dCameraPose,webName:V(u.inspectLocal3dCameraPose),title:"Inspect Local 3D Camera Pose",description:"Inspect the active browser-local Knowgrph 3D camera pose from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocal3dLayoutPositions,webName:V(u.inspectLocal3dLayoutPositions),title:"Inspect Local 3D Layout Positions",description:"Inspect the active browser-local Knowgrph 3D layout positions from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocal2dZoomViewport,webName:V(u.inspectLocal2dZoomViewport),title:"Inspect Local 2D Zoom Viewport",description:"Inspect the active browser-local Knowgrph 2D zoom and viewport state from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:u.inspectLocalSourceFilesSnapshot,webName:V(u.inspectLocalSourceFilesSnapshot),title:"Inspect Local Source Files Snapshot",description:"Inspect the active browser-local Knowgrph Source Files runtime snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q}]:[],{name:u.inspectAgentSurface,webName:V(u.inspectAgentSurface),title:"Inspect Agent Surface",description:"Use this when an MCP Apps-capable host or generic MCP client needs to inspect Knowgrph agent-ready discovery, MCP Apps readiness, OpenAPI, and skill metadata.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},outputSchema:Io,annotations:q,_meta:Oo()}].map(a=>({...a,securitySchemes:Array.isArray(a.securitySchemes)&&a.securitySchemes.length?a.securitySchemes:ar()}))},"buildKnowgrphAgentReadyToolContracts");var No=n((e={})=>{let t=String(e.baseUrl||"").replace(/\/+$/,""),r=t?new URL(`${t}/`).origin:"";return{...{baseUrl:t,healthUrl:`${t}/health`,mcpUrl:`${t}/mcp`,apiCatalogUrl:`${t}/.well-known/api-catalog`,openApiUrl:`${t}/.well-known/openapi.json`,mcpServerCardUrl:`${t}/.well-known/mcp/server-card.json`,agentCardUrl:`${t}/.well-known/agent-card.json`,agentSkillsUrl:`${t}/.well-known/agent-skills/index.json`,commerceUrls:{acpDiscoveryUrl:`${r}/.well-known/acp.json`,ucpProfileUrl:`${r}/.well-known/ucp`,mppOpenApiUrl:`${r}/openapi.json`,x402PaymentRequiredUrl:`${r}/api/payments/commerce/x402`},health:e.health,apiCatalog:e.apiCatalog,openApi:e.openApi,mcpServerCard:e.mcpServerCard,agentCard:e.agentCard,agentSkills:e.agentSkills,commerce:e.commerce},mcpAppsServerReadiness:vo({baseUrl:t,updatedAt:e.updatedAt||e.health?.updatedAt||"",mcpServerCard:e.mcpServerCard})}},"buildAgentSurfaceInspectionPayload");var lr=n((e={})=>{let t=e.toolNames||{},r=String(e.defaultWorkspaceId||"").trim(),o=e.buildStorageDocPath,a=e.fetchSourceFilesIndexResponse,s=e.fetchStorageMarkdownResponse,i=e.resolveSharedDocumentInput,c=e.inspectSharedDocumentStructure,l=e.buildAgentSurfaceInspection,p=n(d=>String(d||"").trim(),"normalizeString"),m=p(e.publicBaseUrl).replace(/\/+$/,""),f=n(d=>String(d||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),P=n(d=>{try{return decodeURIComponent(String(d||""))}catch{return String(d||"")}},"safeDecodeURIComponent"),_=n(d=>{let h=p(d).split("/").filter(Boolean);return h[h.length-1]||p(d)||"Knowgrph Source File"},"titleFromCanonicalPath"),k=n((d,h=220)=>{let g=p(d).replace(/\s+/g," ");return g.length<=h?g:`${g.slice(0,h-1)}\u2026`},"truncateSnippet"),j=Math.max(0,Math.min(50,Number.isFinite(Number(e.searchContentScanMax))?Math.floor(Number(e.searchContentScanMax)):32)),L=Math.max(1e3,Math.min(5e4,Number.isFinite(Number(e.searchContentMaxChars))?Math.floor(Number(e.searchContentMaxChars)):24e3)),$=Math.max(1,Math.min(8,Number.isFinite(Number(e.searchContentConcurrency))?Math.floor(Number(e.searchContentConcurrency)):4)),re=new Set(["a","an","and","are","as","at","be","by","can","do","does","for","from","how","i","in","is","it","of","on","or","the","this","to","what","when","where","which","who","why","with"]),W=n(d=>p(d).toLowerCase().split(/[^a-z0-9:_./-]+/).map(p).filter(h=>h&&!re.has(h)),"tokenizeSearchQuery"),T=n((d,h)=>h.reduce((g,b)=>{let N=String(d||""),F=0,w=0;for(;w<N.length;){let E=N.indexOf(b,w);if(E<0)break;F+=1,w=E+Math.max(1,b.length)}return g+F},0),"countTokenHits"),O=n((d,h,g=260)=>{let b=p(d).replace(/\s+/g," ");if(!b)return"";let N=b.toLowerCase(),F=h.map(Q=>N.indexOf(Q)).filter(Q=>Q>=0).sort((Q,Pe)=>Q-Pe)[0];if(!Number.isFinite(F))return k(b,g);let w=Math.max(0,F-Math.floor(g/3)),E=Math.min(b.length,w+g);return`${w>0?"\u2026":""}${b.slice(w,E)}${E<b.length?"\u2026":""}`},"snippetAroundSearchHit"),J=n(async(d,h)=>{let g=new Array(d.length),b=0,N=Array.from({length:Math.min($,d.length)},async()=>{for(;b<d.length;){let F=b;b+=1,g[F]=await h(d[F],F)}});return await Promise.all(N),g},"runBoundedConcurrent"),K=n(({workspaceId:d="",canonicalPath:h=""}={})=>{let g=o(p(h),p(d));return m?`${m}${g}`:g},"buildPublicDocUrl");if(!!(t.search||t.fetch||t.listSourceFiles||t.readSourceFile||t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof o!="function")throw new Error("buildStorageDocPath is required");if((t.search||t.listSourceFiles)&&typeof a!="function")throw new Error("fetchSourceFilesIndexResponse is required");if((t.fetch||t.readSourceFile||t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof s!="function")throw new Error("fetchStorageMarkdownResponse is required");if((t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof i!="function")throw new Error("resolveSharedDocumentInput is required");if(t.inspectSharedDocumentStructure&&typeof c!="function")throw new Error("inspectSharedDocumentStructure is required");if(t.inspectAgentSurface&&typeof l!="function")throw new Error("buildAgentSurfaceInspection is required");let I=n(async(d={})=>{let h=p(d.canonicalPath);if(!h)throw new Error("canonicalPath is required");let g=p(d.workspaceId),b=await s(o(h,g));if(!b.ok)throw new Error(`read_source_file failed with ${b.status}`);return{workspaceId:g||r,canonicalPath:h,markdown:await b.text()}},"readSourceFile"),M=n(async(d={})=>{let h=i(d);if(!h)throw new Error("shareToken or shareUrl must resolve to a published Knowgrph document");let g=p(h.workspaceId),b=p(h.canonicalPath),N=await s(o(b,g));if(!N.ok)throw new Error(`read_shared_document failed with ${N.status}`);return{workspaceId:g||r,canonicalPath:b,markdown:await N.text()}},"readSharedDocument"),B=n(async(d={})=>{let h=await M(d);return c(h)},"inspectSharedDocument"),oe=n(({workspaceId:d="",canonicalPath:h=""}={})=>`kgdoc:${encodeURIComponent(p(d))}:${encodeURIComponent(p(h))}`,"buildSearchFetchId"),pe=n(d=>{let h=p(d),g=h.match(/^kgdoc:([^:]*):(.*)$/);if(g)return{workspaceId:P(g[1]||""),canonicalPath:P(g[2]||"")};let b=h.match(/\/(?:api\/storage\/doc|knowgrph\/doc)\/([^/\s)]+)\/([^\s)]+)$/);if(b)return{workspaceId:P(b[1]||""),canonicalPath:P(b[2]||"")};let N=h.match(/\/(?:api\/storage\/doc-default|knowgrph\/doc-default)\/([^\s)]+)$/);return N?{workspaceId:"",canonicalPath:P(N[1]||"")}:null},"parseSearchFetchId"),Se=n(d=>{let h=f(d).split(`
`),g=new Map,b=n(({workspaceId:N="",canonicalPath:F="",line:w=""}={})=>{let E=p(F);if(!E)return;let Q=p(N),Pe=oe({workspaceId:Q,canonicalPath:E});g.has(Pe)||g.set(Pe,{id:Pe,title:_(E),url:K({workspaceId:Q,canonicalPath:E}),snippet:k(w||E),workspaceId:Q||r,canonicalPath:E})},"addEntry");for(let N of h){let F=/\/(?:api\/storage\/doc|knowgrph\/doc)\/([^/\s)\]]+)\/([^\s)\]]+)/g,w=/\/(?:api\/storage\/doc-default|knowgrph\/doc-default)\/([^\s)\]]+)/g;for(let E of N.matchAll(F))b({workspaceId:P(E[1]||""),canonicalPath:P(E[2]||""),line:N});for(let E of N.matchAll(w))b({workspaceId:"",canonicalPath:P(E[1]||""),line:N})}return Array.from(g.values())},"extractSearchEntriesFromSourceFilesIndex"),A=n(async(d={})=>{let h=p(d.query);if(!h)throw new Error("query is required");let g=Math.max(1,Math.min(25,Number.isFinite(Number(d.limit))?Math.floor(Number(d.limit)):10)),b=await a();if(!b.ok)throw new Error(`search failed with ${b.status}`);let N=await b.text(),F=Se(N),w=W(h),E=w.join(" "),Q=F.map(D=>{let Z=`${D.title}
${D.canonicalPath}
${D.workspaceId}
${D.snippet}`.toLowerCase(),mt=E&&Z.includes(E)?w.length*4:0,ht=w.reduce((gt,Yt)=>gt+(Z.includes(Yt)?2:0),0);return{...D,score:mt+ht}}),Pe=Q.slice().sort((D,Z)=>Z.score-D.score||D.title.localeCompare(Z.title)).slice(0,j).filter(D=>/\.md(?:$|[?#])/i.test(D.canonicalPath)),dt=new Map;await J(Pe,async D=>{let Z=pe(D.id);if(!Z?.canonicalPath)return null;try{let mt=await s(o(Z.canonicalPath,Z.workspaceId));if(!mt.ok)return null;let ht=(await mt.text()).slice(0,L),gt=ht.toLowerCase(),Yt=E&&gt.includes(E)?w.length*6:0,Ra=T(gt,w),jr=Yt+Ra;if(jr<=0)return null;dt.set(D.id,{score:jr,snippet:O(ht,w)})}catch{return null}return null});let Vt=Q.map(D=>{let Z=dt.get(D.id);return{...D,score:D.score+(Z?.score||0),snippet:Z?.snippet||D.snippet}}).filter(D=>D.score>0).sort((D,Z)=>Z.score-D.score||D.title.localeCompare(Z.title)).slice(0,g).map(({score:D,...Z})=>Z);return{ids:Vt.map(D=>D.id),results:Vt,query:h,totalResults:Vt.length}},"searchSourceFiles"),y=n(async(d={})=>{let h=pe(d.id);if(!h?.canonicalPath)throw new Error("id must be a stable Knowgrph Source File id returned by search");let g=await I(h),b=K(h);return{id:oe(h),title:_(g.canonicalPath),content:g.markdown,text:g.markdown,url:b,metadata:{workspaceId:g.workspaceId,canonicalPath:g.canonicalPath,contentType:"text/markdown",source:"knowgrph-source-files"}}},"fetchSourceFileBySearchId"),S={};return t.search&&(S[t.search]=A),t.fetch&&(S[t.fetch]=y),t.listSourceFiles&&(S[t.listSourceFiles]=async()=>{let d=await a();if(!d.ok)throw new Error(`list_source_files failed with ${d.status}`);return{workspaceId:r,markdownIndex:await d.text()}}),t.readSourceFile&&(S[t.readSourceFile]=I),t.readSharedDocument&&(S[t.readSharedDocument]=M),t.inspectSharedDocumentStructure&&(S[t.inspectSharedDocumentStructure]=B),t.inspectAgentSurface&&(S[t.inspectAgentSurface]=async()=>l()),S},"createPublishedAgentReadyToolExecutors"),os=n(e=>`((...args) => {
  const n = (value) => value
  const __name = (value) => value
  return (${Function.prototype.toString.call(e)})(...args)
})`,"createBrowserSafeFunctionSource"),Uo=os(lr);var Lo=n((e={})=>{let t=n(A=>String(A||"").trim(),"normalizeString"),r=n(A=>String(A||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),o=n(A=>{let y=String(A||"").match(/^\s*/);return y?y[0].length:0},"readIndent"),a=n(A=>/^[A-Za-z0-9_:@-]+\s*:/.test(t(A)),"isYamlKeyLine"),s=n(A=>r(A).split(`
`),"splitLines"),i=n(A=>{let y=s(A),S=0;for(;S<y.length&&!t(y[S]);)S+=1;if(t(y[S])!=="---")return null;for(let d=S+1;d<y.length;d+=1)if(t(y[d])==="---")return{frontmatter:y.slice(S+1,d).join(`
`),body:y.slice(d+1).join(`
`)};return null},"extractLeadingFrontmatter"),c=n(A=>{let y=[];for(let S of s(A)){if(!t(S)||o(S)!==0)continue;let d=S.match(/^([A-Za-z0-9_:@-]+)\s*:/);d?.[1]&&y.push(d[1])}return Array.from(new Set(y)).sort((S,d)=>S.localeCompare(d))},"extractTopLevelFrontmatterKeys"),l=n((A,y)=>{let S=s(A),d=`${y}:`;for(let h=0;h<S.length;h+=1){let g=S[h],b=t(g);if(!b.startsWith(d))continue;let N=o(g),F=b.slice(d.length).trim();if(F)return{indent:N,inlineValue:F,blockLines:[],blockText:""};let w=[];for(let E=h+1;E<S.length;E+=1){let Q=S[E],Pe=t(Q),dt=o(Q);if(Pe&&dt<=N&&a(Q))break;w.push(Q)}return{indent:N,inlineValue:"",blockLines:w,blockText:w.join(`
`)}}return null},"extractYamlBlock"),p=n(A=>{let y=[];for(let S of s(A)){let d=t(S);if(!d||d.startsWith("- "))continue;let h=d.match(/^([A-Za-z0-9_:@-]+)\s*:/);h?.[1]&&y.push(h[1])}return Array.from(new Set(y)).sort((S,d)=>S.localeCompare(d))},"extractNestedYamlKeys"),m=n(A=>{let y=s(A).filter(h=>t(h));if(!y.length)return[];let S=Math.min(...y.map(o)),d=[];for(let h of y){if(o(h)!==S)continue;let g=t(h);if(g.startsWith("- "))continue;let b=g.match(/^([A-Za-z0-9_:@-]+)\s*:/);b?.[1]&&d.push(b[1])}return Array.from(new Set(d)).sort((h,g)=>h.localeCompare(g))},"extractDirectYamlKeys"),f=n(A=>{let y=t(A);if(!y.startsWith("[")||!y.endsWith("]"))return null;let S=y.slice(1,-1).trim();return S?S.split(",").map(d=>t(d)).filter(Boolean).length:0},"countInlineSequenceEntries"),P=n(A=>{let y=t(A);return y.startsWith('"')&&y.endsWith('"')||y.startsWith("'")&&y.endsWith("'")?y.slice(1,-1):y},"cleanYamlScalar"),_=n(A=>{let y=t(A);if(!y.startsWith("[")||!y.endsWith("]"))return null;let S=y.slice(1,-1).trim();return S?S.split(",").map(d=>P(d)).filter(Boolean):[]},"extractInlineSequenceValues"),k=n((A,y)=>{let S=l(A,y);if(!S)return[];if(S.inlineValue)return _(S.inlineValue)||[];let d=[],h=S.indent+2;for(let g of S.blockLines){let b=t(g);o(g)===h&&b.startsWith("- ")&&d.push(P(b.slice(2)))}return d},"extractYamlSequenceValues"),j=n((A,y)=>{let S=s(A),d=`${y}:`;for(let h of S){let g=t(h);if(g.startsWith(d))return P(g.slice(d.length))}return null},"extractTopLevelScalarValue"),L=n((A,y)=>{let S=l(A,y);if(!S)return null;if(S.inlineValue)return f(S.inlineValue);let d=0,h=S.indent+2;for(let g of S.blockLines)t(g)&&o(g)===h&&/^\s*-\s+/.test(g)&&(d+=1);return d},"countYamlSequenceEntries"),$=n(A=>{let y=[];for(let S of s(A)){let d=S.match(/^(#{1,6})\s+(.+?)\s*$/);d?.[2]&&y.push({depth:d[1].length,text:t(d[2])})}return y},"extractMarkdownHeadings"),re=t(e.workspaceId),W=t(e.canonicalPath),T=r(e.markdown),O=i(T),J=O?c(O.frontmatter):[],K=O?l(O.frontmatter,"flow"):null,X=K?p(K.blockText):[],I=O?l(O.frontmatter,"main_panel_integrations_demo"):null,M=O?l(O.frontmatter,"superagent_harness_demo"):null,B=M?l(M.blockText,"runtime_surfaces"):null,oe=new Set(["kg:subgraphs","clusters","groups","layers"]),pe=Array.from(new Set([...J,...X].filter(A=>oe.has(A)))).sort((A,y)=>A.localeCompare(y)),Se=$(O?O.body:T);return{workspaceId:re,canonicalPath:W,markdownLength:T.length,lineCount:T?s(T).length:0,hasFrontmatter:!!O,topLevelKeys:J,frontmatterScalars:O?{kgCanvasRenderMode:j(O.frontmatter,"kgCanvasRenderMode"),kgCanvas2dRenderer:j(O.frontmatter,"kgCanvas2dRenderer"),deployed_api_claim:j(O.frontmatter,"deployed_api_claim")}:{},mainPanelIntegrationsDemo:I?{present:!0,mainPanelEntries:k(I.blockText,"main_panel_entries"),providerIds:k(I.blockText,"provider_ids"),providerLabels:k(I.blockText,"provider_labels"),taskCapabilities:k(I.blockText,"task_capabilities"),taskLevels:k(I.blockText,"task_levels"),integrationOpenTab:j(I.blockText,"integration_open_tab"),canvas2dRenderer:j(I.blockText,"canvas_2d_renderer"),sourceFile:j(I.blockText,"source_file")}:{present:!1},superAgentHarnessDemo:M?{present:!0,taskCapabilities:k(M.blockText,"task_capabilities"),taskLevels:k(M.blockText,"task_levels"),runtimeSurfaces:B?m(B.blockText):[]}:{present:!1},hasFlowBlock:!!K,flowKeys:X,flowNodeCount:K?L(K.blockText,"nodes"):null,flowConnectionCount:K?L(K.blockText,"connections")??L(K.blockText,"edges"):null,flowSubgraphCount:K?L(K.blockText,"subgraphs"):null,forbiddenGroupingKeys:pe,headingCount:Se.length,headings:Se.map(A=>A.text),bodyLength:t(O?O.body:T).length}},"inspectSharedDocumentStructure");var xt=Object.freeze({generate:"knowgrph.probe.generate",select:"knowgrph.probe.select",evolve:"knowgrph.probe.evolve"}),kt=Object.freeze({optionCount:3,maxOptionCount:4,recallTopK:5,tokenBudget:1200,optionCompletionTokenEstimate:64,maxDepth:8,appMemoryScope:"knowgrph-probe-tree"}),Ko=Object.freeze({type:"object",additionalProperties:!0,required:["id","text","rationale"],properties:{id:{type:"string"},text:{type:"string"},rationale:{type:"string"}}}),ns=Object.freeze({type:"object",additionalProperties:!1,required:["model","prompt_tokens","completion_tokens","cache_hits","estimated_cost_usd"],properties:{model:{type:"string"},prompt_tokens:{type:"number"},completion_tokens:{type:"number"},cache_hits:{type:"number"},estimated_cost_usd:{oneOf:[{type:"number"},{type:"null"}]}}}),Sp=Object.freeze({type:"object",additionalProperties:!1,required:["thread_root_id","current_node_id"],properties:{thread_root_id:{type:"string",minLength:1},current_node_id:{type:"string",minLength:1},context_text:{type:"string"},k:{type:"integer",minimum:1,maximum:kt.maxOptionCount,default:kt.optionCount},recall_top_k:{type:"integer",minimum:0,maximum:20,default:kt.recallTopK},token_budget:{type:"integer",minimum:1,default:kt.tokenBudget},graph_store_dir:{type:"string"}}}),_p=Object.freeze({type:"object",additionalProperties:!1,required:["thread_root_id","parent_node_id","chosen_option"],properties:{thread_root_id:{type:"string",minLength:1},parent_node_id:{type:"string",minLength:1},chosen_option:Ko,context_text:{type:"string"},terminal:{type:"boolean",default:!1},graph_store_dir:{type:"string"}}}),bp=Object.freeze({type:"object",additionalProperties:!1,required:["thread_root_id"],properties:{thread_root_id:{type:"string",minLength:1},terminal_node_id:{type:"string"},resolved:{type:"boolean",default:!0},rating:{type:"number",minimum:0,maximum:1},allow_partial_path:{type:"boolean",default:!1},graph_store_dir:{type:"string"}}}),Rp=Object.freeze({type:"object",additionalProperties:!0,required:["contractVersion","ok","options","cost_log"],properties:{contractVersion:{type:"string"},ok:{type:"boolean"},options:{type:"array",items:Ko},degraded:{type:"boolean"},recalled_exemplars:{type:"array",items:{type:"object",additionalProperties:!0}},token_budget:{type:"object",additionalProperties:!0},cost_log:ns}}),Pp=Object.freeze({type:"object",additionalProperties:!0,required:["contractVersion","ok","new_node_id","edge_id","node_path"],properties:{contractVersion:{type:"string"},ok:{type:"boolean"},new_node_id:{type:"string"},edge_id:{type:"string"},node_path:{type:"string"},checkpoint:{type:"object",additionalProperties:!0}}}),Ap=Object.freeze({type:"object",additionalProperties:!0,required:["contractVersion","ok","updated_scores","exemplar_id"],properties:{contractVersion:{type:"string"},ok:{type:"boolean"},updated_scores:{type:"array",items:{type:"object",additionalProperties:!0}},exemplar_id:{type:"string"},complete_path_scored:{type:"boolean"},unscored_parent_node_ids:{type:"array",items:{type:"string"}}}});var Do="knowgrph.os.status",U=Object.freeze({search:u.search,fetch:u.fetch,uiLaunch:"knowgrph.ui.launch",uiStop:"knowgrph.ui.stop",pipeline:"knowgrph.pipeline",graphragPipeline:"knowgrph.graphrag_pipeline",superagentRun:"knowgrph.superagent.run",videoRemixRun:"knowgrph.video_remix.run",browserApiRun:"knowgrph.browser_api.run",sealionDetectLanguageVariant:"sealion.detect_language_variant",sealionTranslateLocalize:"sealion.translate_localize",sealionSafetyCheck:"sealion.safety_check",htmlVideoRender:"knowgrph.html_video.render",annotateImage:"knowgrph.annotate.image",annotateVideoFrame:"knowgrph.annotate.video_frame",memoryAdd:"knowgrph.memory.add",memorySearch:"knowgrph.memory.search",memoryAssemblePrompt:"knowgrph.memory.assemble_prompt",probeGenerate:xt.generate,probeSelect:xt.select,probeEvolve:xt.evolve,showrunnerStartRun:"knowgrph.showrunner.start_run",showrunnerRunStatus:"knowgrph.showrunner.run_status",showrunnerPostChoice:"knowgrph.showrunner.post_choice",showrunnerSubmitCritique:"knowgrph.showrunner.submit_critique",showrunnerApproveStage:"knowgrph.showrunner.approve_stage",showrunnerGetArtifact:"knowgrph.showrunner.get_artifact",osStatus:Do,vdeoxplnList:"knowgrph.vdeoxpln.list"}),$o=n(()=>Object.values(U),"buildKnowgrphLocalMcpToolNameList");var jo="knowgrph-vdeoxpln/v0.1";var de=Object.freeze({sourceFiles:"knowgrph-source-files",agentReady:"knowgrph-agent-ready",localMcp:"knowgrph-mcp-local",chatToCanvas:"knowgrph-chat-to-canvas",strybldr:"knowgrph-strybldr",researchVisual:"knowgrph-research-visual",memoryLayer:"knowgrph-memory-layer",aiShowrunner:"knowgrph-ai-showrunner",htmlVideoRenderer:"knowgrph-html-video-renderer",videoAgent:"knowgrph-video-agent",visualAnnotationEngine:"knowgrph-visual-annotation-engine",commerceReadiness:"knowgrph-commerce-readiness"}),ur=n(e=>String(e||"").trim(),"normalizeString"),me=n(e=>Array.from(new Set((Array.isArray(e)?e:[]).map(ur).filter(Boolean))).sort((t,r)=>t.localeCompare(r)),"normalizeStringArray"),Ho=n(e=>{let t=new Set,r=[];for(let o of Array.isArray(e)?e:[]){let a=ur(o);!a||t.has(a)||(t.add(a),r.push(a))}return r},"normalizeOrderedStringArray"),pr=n(e=>Array.isArray(e)?e.map(pr):!e||typeof e!="object"?e:Object.keys(e).sort((t,r)=>t.localeCompare(r)).reduce((t,r)=>(t[r]=pr(e[r]),t),{}),"normalizeJsonValue"),as=n(e=>JSON.stringify(pr(e)),"stableStringifyVdeoxplnValue"),ss=n((e,t)=>{let r=ur(e)||"vdeoxpln";return`kgvx_${St([r,jo,as(t)])}`},"buildKnowgrphVdeoxplnSemanticKey");var is=Object.freeze([{id:de.sourceFiles,title:"Knowgrph Source Files",purpose:"Discover, read, inspect, and route published Source Files and shared documents through the canonical storage and document-structure owners.",scope:"read-only-published",mutation:"read-only",triggers:["source files","published documents","shared document","read markdown","inspect document structure"],inputs:["workspace document","published markdown","share token","share URL","canonical path"],outputs:["source-files index","published markdown","document structure report"],owners:["canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/sourceFilesSignatures.ts","canvas/src/features/agent-ready/publishedToolExecutors.mjs","canvas/src/features/agent-ready/sharedDocumentStructureInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs"],tools:{published:[u.listSourceFiles,u.readSourceFile,u.readSharedDocument,u.inspectSharedDocumentStructure],browserLocal:[u.inspectLocalSourceFilesSnapshot],local:[U.search,U.fetch,U.vdeoxplnList]},workflow:["Resolve source identity from storage, share token, or canonical path.","Fetch through published storage/document executors.","Inspect structure with the shared document-structure owner.","Return read-only artifacts without graph mutation."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return source-read or structure errors without model calls."},artifactPolicy:{persistence:"published-read-only",graphMaterialization:"none",semanticKeyInputs:["workspaceId","canonicalPath","shareToken","toolContract"]},validation:["agent-ready:check","pages:check-sync","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","webmcp-html-fallback"]},{id:de.agentReady,title:"Knowgrph Agent Ready",purpose:"Inspect Knowgrph health, MCP, WebMCP, A2A, OpenAPI, commerce, and browser-local readiness without claiming deployed mutation.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["agent-ready","webmcp","mcp health","openapi","a2a","discovery","readiness"],inputs:["agent-ready base URL","browser runtime state","published metadata"],outputs:["agent surface inspection","browser-local readiness snapshot","metadata report"],owners:["canvas/src/features/agent-ready/knowgrphAgentReadyToolContract.mjs","canvas/src/features/agent-ready/webMcpRuntime.ts","canvas/src/features/agent-ready/agentSurfaceInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs","scripts/check-agent-ready.mjs"],tools:{published:[u.inspectAgentSurface],browserLocal:[u.inspectLocalSettingsChatReadiness,u.inspectLocalMainPanelState,u.inspectLocalEditorWorkspaceState,u.inspectLocalChatPipelineState,u.inspectLocalMainPanelChatCanvasPipeline,u.inspectLocalWorkspaceDocument,u.inspectLocalCanvasTopology,u.inspectLocalCanvasSnapshot,u.inspectLocal3dCameraPose,u.inspectLocal3dLayoutPositions,u.inspectLocal2dZoomViewport,u.inspectLocalSourceFilesSnapshot],local:[U.vdeoxplnList]},workflow:["Inspect published agent-ready metadata.","Inspect browser-local state only when running inside the app runtime.","Report scope boundaries between Pages read-only tools and browser-local inspectors."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return metadata inspection errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["toolContracts","metadataRoutes","browserLocalToolNames"]},validation:["agent-ready:check","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","browser-webmcp"]},{id:de.localMcp,title:"Knowgrph Local MCP",purpose:"Expose Knowgrph-owned local Source Files, UI, pipeline, SuperAgent, video-remix, browser bridge, SEA-LION, HTML video, visual annotation, memory, probe-tree, showrunner, OS status, and vdeoxpln tools through the stdio MCP server.",scope:"local-stdio",mutation:"local-confirmed",triggers:["local mcp","launch canvas","run pipeline","graphrag","superagent","video remix","browser api","sealion sidecar","html video","visual annotation","memory layer","probe tree","showrunner","os status","list vdeoxpln"],inputs:["local root","workspace file","graph data","pipeline config","reference URL","source cards","browser API runtime","Southeast Asian language text","render spec","annotation asset","memory scope","probe branch","creative brief"],outputs:["local tool result","pipeline artifact","superagent report","video remix run manifest","SEA-LION sidecar result","render manifest","annotation result","memory result","probe checkpoint","showrunner artifact","OS status snapshot","vdeoxpln registry snapshot"],owners:["mcp/local-tool-contract.js","mcp/server.js","mcp/director-lanes.js","mcp/director-workflow.js","mcp/video-remix-runtime.js","mcp/README.md","knowgrph_parser/superagent_harness.py","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:$o()},workflow:["List local tools from the shared local MCP contract.","Run only path-guarded local-root operations.","Run video-remix orchestration as an approval-gated local manifest before any paid provider call.","Forward SEA-LION regional language, localization, and safety calls to the hosted sidecar with server-owned auth.","Summarize artifacts and registry metadata in the MCP result."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"tool-owned",fallback:"Return local command failure and detected artifacts."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"tool-owned",semanticKeyInputs:["localToolNames","rootScope","artifactList"]},validation:["vdeoxpln:check","mcpLocalToolContract"],publish:["local-mcp-docs"]},{id:de.chatToCanvas,title:"Knowgrph Chat To Canvas",purpose:"Route AI-assisted graph generation through FloatingPanel Chat, KGC validation, Workspace FS, Source Files, and Canvas apply owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["chat to canvas","generate graph","kgc markdown","flow.subgraphs","apply to canvas"],inputs:["chat request","workspace context","selection context","source evidence","model settings"],outputs:["validated KGC Markdown","workspace artifact","GraphData","canvas topology snapshot"],owners:["canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitRequest.ts","canvas/src/features/chat/chatMarkdownValidation.ts","canvas/src/features/chat/chatKgcCanvasApply.ts","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/lib/graph/semanticKey.ts"],tools:{published:[],browserLocal:[u.inspectLocalChatPipelineState,u.inspectLocalMainPanelChatCanvasPipeline,u.inspectLocalWorkspaceDocument,u.inspectLocalCanvasTopology,u.inspectLocalCanvasSnapshot],local:[U.vdeoxplnList]},workflow:["Vdeoxpln context through the shared chat submit request owner.","Call provider transport only after typed request construction.","Validate KGC Markdown with bounded retries.","Persist through Workspace FS and apply through the existing Canvas path."],aiPolicy:{mode:"required-for-generation",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Persist validation or provider failure as reviewable chat/workspace state."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["chatContextScope","workspacePath","graphSemanticKey","sourceLayerHash"]},validation:["chatResponseContract","sourceFiles","vdeoxpln:check"],publish:["browser-webmcp","mainpanel-mcp"]},{id:de.strybldr,title:"Knowgrph Strybldr",purpose:"Turn image or media source units into editable Storyboard cards and bounded media handoff artifacts through Strybldr and shared renderer owners.",scope:"browser-local-source-backed",mutation:"browser-local-user-mediated",triggers:["strybldr","storyboard","image to storyboard","media handoff","visual brief"],inputs:["image source unit","media metadata","workspace document","storyboard graph"],outputs:["Strybldr Markdown","Storyboard graph cards","camera-aware media handoff prompt","canvas snapshot"],owners:["canvas/src/features/strybldr/strybldrStoryboard.ts","canvas/src/features/strybldr","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-strybldr-prd-tad.md"],tools:{published:[],browserLocal:[u.inspectLocalSourceFilesSnapshot,u.inspectLocalCanvasTopology,u.inspectLocalCanvasSnapshot],local:[U.vdeoxplnList]},workflow:["Import media through existing workspace/source owners.","Build Strybldr cards with source-unit provenance.","Persist Camera reframe settings on selected graph cards.","Render through the shared Storyboard surface.","Compile bounded media handoff only after user approval."],aiPolicy:{mode:"optional-for-refinement",maxAttempts:1,tokenBudget:"user-approved-provider-step",fallback:"Keep editable storyboard and structured handoff error."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"storyboard-graph",semanticKeyInputs:["sourceUnitId","strybldrRunId","graphSemanticKey","strybldrCamera"]},validation:["strybldr","rendererPipelineNeutrality","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:de.researchVisual,title:"Knowgrph Research Visual",purpose:"Create file-backed research visual workflows from source material using Knowgrph parsing, Source Files, Storyboard, renderer, and chat owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["research visual","explainer","formula","algorithm","proof","dynamic scene","storyboard"],inputs:["paper excerpt","formula","algorithm","figure","workspace document","source evidence"],outputs:["mechanism brief","storyboard","renderer-neutral scene plan","validated KGC Markdown"],owners:["canvas/src/features/parsers/default.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-vdeoxpln-prd-tad.md"],tools:{published:[],browserLocal:[u.inspectLocalChatPipelineState,u.inspectLocalSourceFilesSnapshot,u.inspectLocalCanvasTopology],local:[U.vdeoxplnList]},workflow:["Extract source-backed semantic units into workspace artifacts.","Plan exact deterministic graph/storyboard layers before optional AI support.","Persist artifacts through Workspace FS and Source Files.","Use Canvas/Storyboard renderers as projections of graph state."],aiPolicy:{mode:"optional-for-drafting",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Return deterministic source brief with unresolved questions."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["sourceSignature","graphSemanticKey","rendererId"]},validation:["sourceFiles","chatResponseContract","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:de.memoryLayer,title:"Knowgrph Memory Layer",purpose:"Persist, retrieve, and inject explicitly scoped agent memories through a provider-neutral local harness with Mem0-ready runtime boundaries.",scope:"local-stdio-and-browser-local",mutation:"local-scoped-memory",triggers:["memory layer","long-term memory","cross-session context","mem0","personalization","prompt memory"],inputs:["user or agent message","runtime scope","memory query"],outputs:["memory write result","ranked memory results","bounded prompt context","memory cost log"],owners:["canvas/src/features/memory/aiAgentsMemoryLayerContract.mjs","mcp/memory-layer-runtime.js","mcp/local-tool-contract.js","mcp/server.js","docs/documents/knowgrph-ai-agents-memory-layer-prd-tad.md"],tools:{published:[],browserLocal:[],local:[U.memoryAdd,U.memorySearch,U.memoryAssemblePrompt,U.vdeoxplnList]},workflow:["Require explicit runtime scope.","Add/search through the configured harness.","Inject only top-ranked memories within token budget."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"memory-harness-owned",fallback:"Return empty memory results or skip write while preserving the agent turn."},artifactPolicy:{persistence:"operator-configured-local-memory-store",graphMaterialization:"none",semanticKeyInputs:["memoryScope","operation","topK","providerMode"]},validation:["vdeoxpln:check","mcpLocalToolContract","aiAgentsMemoryLayer"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:de.aiShowrunner,title:"Knowgrph AI Showrunner",purpose:"Run provider-neutral multi-agent creative pipelines for podcasts, narrative games, and writers rooms through existing Source Files, memory, MCP, KGC, and Storyboard Widget owners.",scope:"local-stdio-and-browser-local",mutation:"local-approval-gated",triggers:["ai showrunner","podcast pipeline","narrative game","writers room","creative state","multi-agent orchestration"],inputs:["creative brief markdown","run id","choice signal","critique text","operator approval"],outputs:["pipeline run state","creative state entries","script","choice graph","revision history","artifact manifest"],owners:["canvas/src/features/ai-showrunner","canvas/src/features/chat/chatKgcCanvasApply.ts","canvas/src/features/source-files","canvas/src/features/memory/aiAgentsMemoryLayerContract.mjs","canvas/src/lib/graph/semanticKey.ts","mcp/local-tool-contract.js"],tools:{published:[],browserLocal:[],local:[U.showrunnerStartRun,U.showrunnerRunStatus,U.showrunnerPostChoice,U.showrunnerSubmitCritique,U.showrunnerApproveStage,U.showrunnerGetArtifact,U.vdeoxplnList]},workflow:["Validate the frontmatter-first Creative_Brief before any agent turn.","Run bounded role turns through dry-run or injected provider-neutral dispatch.","Persist append-only state, token logs, and manifests through Source Files."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"pipeline-run-owned",fallback:"Halt at approval or structured error while preserving committed Creative_State."},artifactPolicy:{persistence:"source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["run_id","agent_role","turn_index","content_hash"]},validation:["vdeoxpln:check","mcpLocalToolContract","showrunnerDryRun"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:de.htmlVideoRenderer,title:"Knowgrph HTML Video Renderer",purpose:"Render HTML, CSS, and data documents to MP4 video artifacts through a runtime-selected pluggable engine and the existing rich media output owner.",scope:"local-stdio-and-browser-local",mutation:"local-approval-gated",triggers:["html video render","html to video","programmatic video","render html mp4","coding agent video"],inputs:["html document","css","data json","render spec","engine hint"],outputs:["mp4 video blob","render manifest","artifact path","render job id"],owners:["canvas/src/features/html-video-renderer/htmlVideoRendererSsot.ts","canvas/src/features/html-video-renderer/htmlVideoRenderJob.ts","canvas/src/features/html-video-renderer/htmlVideoEngineRegistry.ts","canvas/src/features/html-video-renderer/htmlVideoRendererSpec.ts","canvas/src/features/html-video-renderer/htmlVideoFlowNode.ts","canvas/src/features/html-video-renderer/htmlVideoWidget.ts","canvas/src/features/chat/richMediaRun.ts","canvas/src/features/source-files","canvas/src/lib/config.storyboard-widget.ts","canvas/src/lib/graph/semanticKey.ts","mcp/local-tool-contract.js","mcp/server.js","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[U.htmlVideoRender,U.vdeoxplnList]},workflow:["Validate the Render_Spec before any engine call.","Resolve active engine from KNOWGRPH_HTML_VIDEO_ENGINE or engineHint at invocation time.","Execute the render engine and capture the video/mp4 blob.","Route the blob through writeRichMediaWidgetRunOutputArtifact exactly once.","Return renderJobId, outputPath, outputManifestPath, and outputStorageUrl."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return structured error without model call."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"rich-media-panel",semanticKeyInputs:["renderJobId","engineId","renderSpecHash","outputPath"]},validation:["vdeoxpln:check","mcpLocalToolContract","htmlVideoRenderer"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:de.videoAgent,title:"Knowgrph Video Agent",purpose:"Reason over operator-supplied video sources through native knowgrph ingestion, parsing, annotation, dataset operations, zone counting, search planning, edit planning, timeline compilation, generation placeholders, and streamable rich-media output.",scope:"browser-local-and-local-stdio",mutation:"local-approval-gated",triggers:["video agent","video reasoning","video search","video editing","video compilation","video generation","stream video result","visual dataset","zone counting"],inputs:["operator-supplied video url","source manifest","annotation tasks","search intent","edit constraints","render spec"],outputs:["source manifest","visual annotation dataset","zone counting timeline","moment search index","edit plan","timeline manifest","render spec","reasoning artifact manifest","video/mp4 artifact","inline stream preview"],owners:["canvas/src/features/video-agent","canvas/src/features/video-agent/videoAgentDatasetRuntime.ts","canvas/src/features/html-video-renderer/htmlVideoRendererSsot.ts","canvas/src/features/html-video-renderer/htmlVideoFlowNode.ts","canvas/src/features/visual-annotation-engine/annotationDataset.ts","canvas/src/features/visual-annotation-engine/annotationFlowNode.ts","canvas/src/features/visual-annotation-engine/annotationSerializers.ts","canvas/src/features/chat/richMediaRun.ts","canvas/src/features/source-files","canvas/src/lib/graph/semanticKey.ts","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[U.htmlVideoRender,U.annotateImage,U.annotateVideoFrame,U.vdeoxplnList]},workflow:["Ingest an operator-supplied video source without embedding a provider runtime dependency.","Parse source metadata, frame annotations, transcript windows, and searchable moments through existing source and annotation owners.","Load frame annotations into native visual dataset operators for deterministic split, merge, save, and frame-ordered zone counting.","Plan search, edit, compilation, and generation stages as typed reasoning artifacts rather than copied external code.","Compile a source-owned HTML/CSS/data Render_Spec for the selected timeline.","Stream a video/mp4 artifact or outputSrcDoc preview through the shared Rich Media Panel output owner."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"operator-configured",fallback:"Return structured source, annotation, dataset, zone counting, or render errors without invoking external video-agent services."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"rich-media-panel",semanticKeyInputs:["sourceUrl","capabilities","reasoningArtifacts","visualDataset","zoneCounting","renderSpecHash","streamOutput"]},validation:["vdeoxpln:check","mcpLocalToolContract","htmlVideoRenderer","visualAnnotationEngine","visualAnnotationDataset","videoAgentPipeline"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:de.visualAnnotationEngine,title:"Knowgrph Visual Annotation Engine",purpose:"Run browser-local image and video-frame annotation into LLM-ready structured JSON plus native visual datasets materialised through existing artifact owners.",scope:"browser-local",mutation:"local-approval-gated",triggers:["annotate image","annotate video","visual annotation","object detection","image caption","florence2","semantic labels","llm-ready annotation","annotation dataset","zone counting"],inputs:["image url","video asset url","annotation tasks","model hint","frame timestamp"],outputs:["annotation result json","visual annotation dataset","zone counting timeline","llm-ready payload","annotation canvas node","markdown summary"],owners:["canvas/src/features/visual-annotation-engine/annotationEngineSsot.ts","canvas/src/features/visual-annotation-engine/annotationDataset.ts","canvas/src/features/visual-annotation-engine/annotationWorker.ts","canvas/src/features/visual-annotation-engine/annotationOrchestrator.ts","canvas/src/features/visual-annotation-engine/annotationSerializers.ts","canvas/src/features/visual-annotation-engine/annotationFlowNode.ts","canvas/src/features/visual-annotation-engine/annotationMcpTools.ts","canvas/src/features/visual-annotation-engine/annotationWidget.ts","canvas/src/features/chat/richMediaRun.ts","canvas/src/features/source-files","canvas/src/lib/graph/semanticKey.ts","canvas/src/lib/config.storyboard-widget.ts","mcp/local-tool-contract.js","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[U.annotateImage,U.annotateVideoFrame,U.vdeoxplnList]},workflow:["Validate the Annotation_Spec before model resolution or inference.","Resolve model identifier from modelHint, KNOWGRPH_ANNOTATION_MODEL, or the registered default.","Dispatch through the Annotation_Worker boundary; Dev emits dependency-free heuristic annotations while model adapters remain runtime-owned.","Build annotationId with buildScopedGraphSemanticKey using assetUrl, modelId, and sorted tasks.","Load Annotation_Result or frame-box arrays into the native dataset owner for split, merge, save, and frame-ordered zone counting.","Route JSON output through writeRichMediaWidgetRunOutputArtifact exactly once.","Return annotationId, assetUrl, modelId, tasks, outputPath, and outputManifestPath."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return runtime-local heuristic annotation JSON or a structured validation/runtime error without model call."},artifactPolicy:{persistence:"browser-local",graphMaterialization:"annotation-canvas-node",semanticKeyInputs:["annotationId","assetUrl","modelId","sortedTasks","visualDataset","zoneCounting"]},validation:["vdeoxpln:check","mcpLocalToolContract","visualAnnotationEngine","visualAnnotationDataset"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:de.commerceReadiness,title:"Knowgrph Commerce Readiness",purpose:"Inspect Commerce, payment worker, x402, ACP, UCP, MPP, and readiness metadata without bypassing the shared payment SSOT.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["commerce","payment","x402","acp","ucp","mpp","stripe","readiness"],inputs:["agent-ready metadata","commerce route health","browser readiness snapshot"],outputs:["commerce readiness report","payment route summary","agent-ready commerce metadata"],owners:["canvas/src/features/panels/views/CommerceHubView.tsx","canvas/src/features/agent-ready/browserLocalSurfaceSnapshots.ts","cloudflare/pages/knowgrph-agent-ready-commerce.mjs","cloudflare/workers/knowgrph-payment/agenticCommerce.ts","grph-shared/src/payments/agenticCommerceSsot.ts"],tools:{published:[u.inspectAgentSurface],browserLocal:[u.inspectLocalSettingsChatReadiness,u.inspectLocalMainPanelState],local:[U.vdeoxplnList]},workflow:["Inspect published commerce discovery metadata.","Read browser-local readiness snapshots when available.","Report payment capability boundaries without initiating checkout."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return route or metadata errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["commerceSemanticKey","routeHealth","toolContract"]},validation:["agent-ready:check","mainPanelCommerce","vdeoxpln:check"],publish:["pages-agent-skills","mainpanel-mcp","browser-webmcp"]}]),cs=n(e=>{let t={published:me(e.tools?.published),browserLocal:me(e.tools?.browserLocal),local:me(e.tools?.local)},r=ss(e.id,{id:e.id,scope:e.scope,mutation:e.mutation,owners:me(e.owners),tools:t,triggers:me(e.triggers),outputs:me(e.outputs),workflow:Ho(e.workflow),artifactPolicy:e.artifactPolicy||{},aiPolicy:e.aiPolicy||{}}),o=`/.well-known/agent-skills/${e.id}.md`;return Object.freeze({...e,version:jo,triggers:me(e.triggers),inputs:me(e.inputs),outputs:me(e.outputs),owners:me(e.owners),tools:Object.freeze(t),workflow:Ho(e.workflow),validation:me(e.validation),publish:me(e.publish),semanticKey:r,agentSkill:Object.freeze({name:e.id,type:"markdown",description:e.purpose,path:o})})},"normalizeVdeoxpln"),Bo=n(()=>is.map(cs).sort((e,t)=>e.id.localeCompare(t.id)),"buildKnowgrphVdeoxplnRegistry");var Go=n((e=Bo())=>e.map(t=>({...t.agentSkill,vdeoxpln:{id:t.id,title:t.title,scope:t.scope,mutation:t.mutation,semanticKey:t.semanticKey,tools:t.tools,publish:t.publish}})),"buildKnowgrphVdeoxplnAgentSkillDefinitions"),be=n(e=>e&&e.length?e.map(t=>`- ${t}`).join(`
`):"- none","markdownList"),ls=n(e=>`# ${e.title} Skill

Use this skill when: ${e.purpose}

## Contract

- Vdeoxpln id: \`${e.id}\`
- Contract version: \`${e.version}\`
- Semantic key: \`${e.semanticKey}\`
- Scope: \`${e.scope}\`
- Mutation boundary: \`${e.mutation}\`

## Triggers

${be(e.triggers)}

## Inputs

${be(e.inputs)}

## Outputs

${be(e.outputs)}

## Tools

Published tools:
${be(e.tools.published)}

Browser-local tools:
${be(e.tools.browserLocal)}

Local MCP tools:
${be(e.tools.local)}

## Workflow

${be(e.workflow)}

## Source Owners

${be(e.owners)}

## Artifact Policy

- Persistence: \`${e.artifactPolicy?.persistence||"none"}\`
- Graph materialization: \`${e.artifactPolicy?.graphMaterialization||"none"}\`
- Semantic-key inputs:
${be(e.artifactPolicy?.semanticKeyInputs||[])}

## AI Policy

- Mode: \`${e.aiPolicy?.mode||"none"}\`
- Max attempts: \`${String(e.aiPolicy?.maxAttempts??0)}\`
- Token budget: \`${String(e.aiPolicy?.tokenBudget??0)}\`
- Fallback: ${e.aiPolicy?.fallback||"Return deterministic errors without model calls."}

## Validation

${be(e.validation)}

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
`,"buildKnowgrphVdeoxplnMarkdown"),Wo=n((e=Bo())=>Object.fromEntries(e.map(t=>[t.id,ls(t)])),"buildKnowgrphVdeoxplnMarkdownByName");var ps={[u.search]:{id:"search",tags:["mcp","search","source-files","read-only"],examples:["Search Knowgrph Source Files for renderer architecture."],outputModes:["application/json"]},[u.fetch]:{id:"fetch",tags:["mcp","fetch","source-files","markdown","read-only"],examples:["Fetch the Knowgrph Source File id returned by search."],outputModes:["text/markdown","application/json"]},[u.listSourceFiles]:{id:"list-source-files",tags:["mcp","discovery","source-files","read-only"],examples:["List the published Knowgrph Source Files."],outputModes:["text/markdown","application/json"]},[u.readSourceFile]:{id:"read-source-file",tags:["mcp","read","markdown","workspace"],examples:["Read the published source file for docs/getting-started.md."],outputModes:["text/markdown","application/json"]},[u.readSharedDocument]:{id:"read-shared-document",tags:["mcp","read","shared-document","markdown"],examples:["Read the Knowgrph shared document behind this share URL."],outputModes:["text/markdown","application/json"]},[u.inspectSharedDocumentStructure]:{id:"inspect-shared-document-structure",tags:["mcp","inspect","shared-document","structure"],examples:["Inspect the structure of this Knowgrph shared document."],outputModes:["application/json","text/markdown"]},[u.inspectAgentSurface]:{id:"inspect-agent-surface",tags:["mcp","agent-ready","discovery","metadata"],examples:["Show the Knowgrph agent discovery metadata."],outputModes:["application/json","text/markdown"]}},tt=Go(),Fo=n(e=>e.map(t=>{let r=ps[t.name]||{id:String(t.name||"").replace(/_/g,"-"),tags:["mcp","read-only"],examples:[`Call ${t.name} on Knowgrph.`],outputModes:["application/json"]};return{id:r.id,name:t.title,description:t.description,tags:r.tags,examples:r.examples,inputModes:["application/json","text/plain"],outputModes:r.outputModes}}),"buildAgentReadyA2aSkills"),zo=n(async({appUrl:e,updatedAt:t,sha256ByName:r})=>({$schema:"https://agent-skills.dev/schemas/skills-index.v0.2.json",updated_at:t,skills:await Promise.all(tt.map(async o=>({name:o.name,type:o.type,description:o.description,url:`${String(e||"").replace(/\/+$/,"")}${o.path}`,sha256:await r[o.name],vdeoxpln:o.vdeoxpln})))}),"buildAgentReadyAgentSkillsIndex"),qo=n(({appBasePath:e,appA2aAgentCardPath:t,healthPath:r})=>{let o=Object.fromEntries(tt.map(a=>[`${e}${a.path}`,{get:{summary:`Read the ${a.name} agent skill markdown`,responses:{200:{description:`Agent skill markdown for ${a.name}`}}}}]));return{[r]:{get:{summary:"Read the Knowgrph agent-ready health status",responses:{200:{description:"Health status in application/health+json format"}}}},[`${e}/mcp`]:{get:{summary:"Read MCP transport metadata",responses:{200:{description:"MCP transport metadata"}}},post:{summary:"Send a JSON-RPC MCP request",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0}}}},responses:{200:{description:"JSON-RPC result payload"}}}},[t]:{get:{summary:"Read the Knowgrph A2A Agent Card",responses:{200:{description:"A2A Agent Card JSON"}}}},"/api/storage/llms.txt":{get:{summary:"Read the Source Files LLM index",responses:{200:{description:"Plain-text LLM index"}}}},"/api/storage/source-files":{get:{summary:"List published Source Files",responses:{200:{description:"Source Files index"}}}},"/api/storage/source-files/{workspaceId}":{get:{summary:"List published Source Files for a workspace",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped Source Files index"}}}},"/api/storage/source-files/{workspaceId}/llms.txt":{get:{summary:"Read the workspace-scoped Source Files LLM index",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped plain-text LLM index"}}}},"/api/storage/doc-default/{canonicalPath}":{get:{summary:"Read a default-workspace Source File markdown document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document from the default Editor Workspace"},404:{description:"Document not found"}}}},"/api/storage/doc/{workspaceId}/{canonicalPath}":{get:{summary:"Read a Source File markdown document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document"},404:{description:"Document not found"}}}},"/api/storage/blob/{workspaceId}/{canonicalPath}":{post:{summary:"Store a workspace binary artifact in R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],requestBody:{required:!0,content:{"application/octet-stream":{schema:{type:"string",format:"binary"}}}},responses:{200:{description:"R2 object coordinates and public storage route"},400:{description:"Invalid workspace, path, or declared payload size"}}},get:{summary:"Read a workspace binary artifact from R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Binary artifact body with stored HTTP metadata"},404:{description:"Object not found"}}},head:{summary:"Read workspace binary artifact metadata from R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Binary artifact metadata"},404:{description:"Object not found"}}}},[`${e}/doc-default/{canonicalPath}`]:{get:{summary:"Read a default-workspace shared document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/doc/{workspaceId}/{canonicalPath}`]:{get:{summary:"Read a shared document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/share/{shareToken}`]:{get:{summary:"Read a shared document through the canonical opaque share token route",parameters:[{name:"shareToken",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or published markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},...o}},"buildAgentReadyOpenApiPaths");var us=n((e,t)=>{let r=new URL(e.url);return r.pathname=`${t}/`,r.search="",r.hash="",new Request(r.toString(),e)},"buildKnowgrphAppShellAssetRequest"),Vo=n(async(e,t)=>{let r=us(e.request,t);return typeof e.env?.ASSETS?.fetch=="function"?e.env.ASSETS.fetch(r):e.next(r)},"fetchKnowgrphAppShellAsset");var ds="kgShare",Zp=typeof TextEncoder<"u"?new TextEncoder:null,Yo=typeof TextDecoder<"u"?new TextDecoder:null;var ms=n(e=>{if(typeof Buffer<"u")return Uint8Array.from(Buffer.from(e,"base64"));let t=atob(e),r=new Uint8Array(t.length);for(let o=0;o<t.length;o+=1)r[o]=t.charCodeAt(o);return r},"fromBase64");var hs=n(e=>{let t=String(e||"").replace(/-/g,"+").replace(/_/g,"/");if(!t)return"";let r=t.length%4;return r?`${t}${"=".repeat(4-r)}`:t},"fromBase64Url");var gs=n(e=>{if(!Yo)throw new Error("TextDecoder is required to decode published doc share tokens");return Yo.decode(ms(hs(e)))},"decodeUtf8Base64Url"),Zo=n(e=>String(e||"").trim()||null,"normalizeWorkspaceId"),hr=n(e=>String(e||"").trim(),"normalizeCanonicalPath"),dr="/knowgrph",Jo="/doc-default/",Xo="/doc/",Qo="/share/",fs="kgWorkspaceId",ys="kgCanonicalPath",ws=n(e=>{let t=String(e||"").trim();return t?`/${t.replace(/^\/+|\/+$/g,"")}`:dr},"normalizeAppBasePath"),mr=n(e=>{let t=hr(e?.canonicalPath);return t?{canonicalPath:t,workspaceId:Zo(e?.workspaceId)}:null},"normalizePublishedDocIdentity"),en=n((e,t)=>{let r=ws(t),o=String(e||"").replace(/\/+$/,"")||"/";if(!o.startsWith(r))return null;let a=o.slice(r.length)||"/";if(a.startsWith(Qo)){let c=decodeURIComponent(a.slice(Qo.length)).trim();return gr(c)}if(a.startsWith(Jo))return mr({canonicalPath:decodeURIComponent(a.slice(Jo.length))});if(!a.startsWith(Xo))return null;let s=a.slice(Xo.length),i=s.indexOf("/");return i<1?null:mr({workspaceId:decodeURIComponent(s.slice(0,i)),canonicalPath:decodeURIComponent(s.slice(i+1))})},"parsePublishedDocPathname"),Ss=n(e=>{let t=gr(e?.get(ds));if(t)return t;let r=hr(decodeURIComponent(String(e?.get(ys)||"")));if(r)return mr({workspaceId:decodeURIComponent(String(e?.get(fs)||"")),canonicalPath:r});let o=String(e?.get("kgPath")||"").trim();return o?en(`${dr}${o}`,dr):null},"parsePublishedDocSearchParams");var gr=n(e=>{let t=String(e||"").trim();if(!t)return null;try{let r=JSON.parse(gs(t)),o=hr(r?.canonicalPath);return o?{canonicalPath:o,workspaceId:Zo(r?.workspaceId)}:null}catch{return null}},"decodePublishedDocShareToken"),Et=n((e={})=>{let t=gr(e.shareToken);if(t)return t;let r=String(e.shareUrl||"").trim();if(!r)return null;try{let o=String(e.baseUrl||"https://airvio.co").trim()||"https://airvio.co",a=new URL(r,o);return Ss(a.searchParams)||en(a.pathname,e.appBasePath)}catch{return null}},"resolvePublishedDocIdentity"),tn=String.raw`(args = {}) => {
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
}`;var Ct={push:"/api/storage/push",pull:"/api/storage/pull",collabSave:"/api/storage/collab/save",chatSession:"/api/storage/chat/session",chatRelay:"/api/storage/chat/relay",chatPoliciesPrefix:"/api/storage/chat/policies/",chatAuditPrefix:"/api/storage/chat/audit/",exportPrefix:"/api/storage/export/",docPrefix:"/api/storage/doc/",defaultDocPrefix:"/api/storage/doc-default/",blobPrefix:"/api/storage/blob/",mediaAssetPersist:"/api/storage/media/assets",mediaAssetPrefix:"/api/storage/media/assets/",mediaPrefix:"/api/storage/media/",sourceFilesIndex:"/api/storage/source-files",sourceFilesIndexPrefix:"/api/storage/source-files/",sourceFilesLlms:"/api/storage/llms.txt"};var rn=n((e,t)=>`${Ct.docPrefix}${encodeURIComponent(String(e||"").trim())}/${encodeURIComponent(String(t||"").trim())}`,"buildKnowgrphStorageDocPath"),on=n(e=>`${Ct.defaultDocPrefix}${encodeURIComponent(String(e||"").trim())}`,"buildKnowgrphStorageDefaultDocPath");var nn=n(e=>{let t=String(e||"").trim();return t?`${Ct.sourceFilesIndexPrefix}${encodeURIComponent(t)}`:Ct.sourceFilesIndex},"buildKnowgrphStorageSourceFilesIndexPath");var G="https://airvio.co",Tt="https://knowgrph-storage.huijoohwee.workers.dev",C="/knowgrph",x=`${G}${C}/`,an=`${G}/`,rt="kgws:canonical-docs",ke="2026-06-05",Ve=`${C}/health`,qe=`${G}${Ve}`,sn="/.well-known/agent-card.json",fr=`${C}/.well-known/agent-card.json`,vt=`${G}${sn}`,yr=`${G}/api/storage/source-files`,_s=`${G}/api/storage/doc-default/{canonicalPath}`,bs=`${G}/api/storage/doc/{workspaceId}/{canonicalPath}`,Rs=`${G}/api/storage/blob/{workspaceId}/{canonicalPath}`,cn="knowgrph-agent-ready-pages";var ln=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${C}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${C}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${Ve}>; rel="status"; type="application/health+json"`,`<${C}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${sn}>; rel="describedby"; type="application/json"`].join(", "),pn=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${x}.

## Discovery

- Crawl policy: ${x}robots.txt
- Sitemap: ${x}sitemap.xml
- API catalog: ${x}.well-known/api-catalog
- Auth.md registration instructions: ${an}auth.md
- Health: ${qe}
- MCP server card: ${x}.well-known/mcp/server-card.json
- A2A Agent Card: ${vt}
- Agent skills: ${x}.well-known/agent-skills/index.json
- LLM reference: ${x}llms.txt

## APIs

- Agent-ready status: ${qe}
- HTTP MCP: ${x}mcp
- Storage API: ${G}/api/storage/
- Source Files index: ${yr}
- Default Source File documents: ${_s}
- Workspace Source File documents: ${bs}
- Workspace binary artifacts: ${Rs}

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
`,un=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),ot=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(r=>r.trim().startsWith("text/markdown")),"wantsMarkdown"),dn=n((e,t)=>{let r=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&r.headers.set("x-knowgrph-route-owner",o),a&&r.headers.set("x-knowgrph-route-tag",a),r},"withAgentReadyRouteHeaders");var It=cr({defaultWorkspaceId:rt}),Sn=yo(),_n=bo(),bn=n((e,t="")=>{let r=String(e||"").trim(),o=String(t||"").trim();return o?rn(o,r):on(r)},"buildStorageDocPath"),st=n(e=>String(e||"").trim(),"normalizeToolString");var ye=n((e,t="application/json; charset=utf-8")=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"jsonResponse"),ce=n((e,t)=>new Response(JSON.stringify(t,null,2),{status:e,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"jsonStatusResponse"),mn=n((e,t={})=>new Response(null,{status:e,headers:{"cache-control":"no-store","access-control-allow-origin":"*",...t}}),"emptyStatusResponse"),nt=n((e,t)=>new Response(e,{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"textResponse"),Ps=n(e=>nt(e,"text/html;profile=mcp-app; charset=utf-8"),"mcpAppsHtmlResponse"),As=n(e=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":"application/health+json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"healthResponse"),ks=`${C}/api/workspace/github/write`,xs="/api/workspace/github/write",hn=12,gn=9e5,Es=new Set(["css","html","js","json","md","mdx","mjs","svg","ts","tsx","txt","yaml","yml"]),wr=n((e,t)=>String(e?.[t]||"").trim(),"readEnvString"),Cs=n(e=>{let t=wr(e,"KNOWGRPH_GITHUB_WRITE_REPOSITORY"),r=wr(e,"KNOWGRPH_GITHUB_WRITE_TOKEN"),o=wr(e,"KNOWGRPH_GITHUB_WRITE_BRANCH"),a=[];t||a.push("KNOWGRPH_GITHUB_WRITE_REPOSITORY"),r||a.push("KNOWGRPH_GITHUB_WRITE_TOKEN");let s=t.split("/").map(i=>i.trim()).filter(Boolean);return t&&s.length!==2&&a.push("KNOWGRPH_GITHUB_WRITE_REPOSITORY:owner/repo"),a.length>0?{ok:!1,missing:a}:{ok:!0,owner:s[0],repo:s[1],branch:o,token:r}},"readGitHubWriteConfig"),Ts=n(e=>{let t=String(e||"").trim().replace(/^workspace:/i,"").replace(/\\/g,"/").replace(/^\/+/,"");if(!t)return{ok:!1,error:"missing_workspace_path"};if(/[\u0000-\u001f\u007f]/.test(t))return{ok:!1,error:"invalid_workspace_path"};let r=t.split("/").filter(Boolean);if(r.some(s=>s==="."||s===".."))return{ok:!1,error:"path_traversal_forbidden"};if(r[0]!=="chat-log")return{ok:!1,error:"unsupported_workspace_root"};if(r.length<3)return{ok:!1,error:"chat_log_session_file_required"};let o=r[r.length-1]||"",a=o.includes(".")?o.split(".").pop().toLowerCase():"";return!a||!Es.has(a)?{ok:!1,error:"unsupported_text_extension"}:{ok:!0,path:r.join("/")}},"normalizeGitHubWriteWorkspacePath"),vs=n(e=>{let t=new TextEncoder().encode(String(e||"")),r=32768,o="";for(let a=0;a<t.length;a+=r)o+=String.fromCharCode(...t.slice(a,a+r));return btoa(o)},"encodeBase64Utf8"),Ye=class extends Error{static{n(this,"GitHubWorkspaceWriteError")}constructor(t,r,o){super(t),this.name="GitHubWorkspaceWriteError",this.code=t,this.upstreamStatus=r,this.upstreamMessage=o}},Rn=n(e=>String(e||"unknown").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim().slice(0,240),"sanitizeGitHubApiMessage"),Pn=n((e,t)=>{let r=String(t||"").split("/").map(a=>encodeURIComponent(a)).join("/"),o=new URL(`https://api.github.com/repos/${encodeURIComponent(e.owner)}/${encodeURIComponent(e.repo)}/contents/${r}`);return e.branch&&o.searchParams.set("ref",e.branch),o},"buildGitHubContentsApiUrl"),An=n(e=>({accept:"application/vnd.github+json",authorization:`Bearer ${e.token}`,"user-agent":"knowgrph-cloudflare-pages","x-github-api-version":"2022-11-28"}),"gitHubApiHeaders"),kn=n(e=>{let t=String(e||"").replace(/\/+$/,"")||"/";return t===ks||t===xs},"isGitHubWorkspaceWriteRoutePath"),Os=n(async(e,t)=>{let r=await fetch(Pn(e,t),{method:"GET",headers:An(e)});if(r.status===404)return null;let o=await r.json().catch(()=>null);if(!r.ok)throw new Ye("github_read_failed",r.status,Rn(o?.message||r.statusText));if(o?.type&&o.type!=="file")throw new Ye("github_path_not_file",409,t);return String(o?.sha||"").trim()||null},"fetchGitHubExistingFileSha"),Is=n(async(e,t,r)=>{let o=await Os(e,t.repositoryPath),a={message:r,content:vs(t.text),...e.branch?{branch:e.branch}:{},...o?{sha:o}:{}},s=await fetch(Pn(e,t.repositoryPath),{method:"PUT",headers:{...An(e),"content-type":"application/json; charset=utf-8"},body:JSON.stringify(a)}),i=await s.json().catch(()=>null);if(!s.ok)throw new Ye("github_write_failed",s.status,Rn(i?.message||s.statusText));return{workspacePath:t.workspacePath,repositoryPath:t.repositoryPath,action:o?"updated":"created",commitSha:String(i?.commit?.sha||""),contentSha:String(i?.content?.sha||""),htmlUrl:String(i?.content?.html_url||"")}},"putGitHubWorkspaceFile"),Ms=n(async(e,t)=>{let r=Cs(t);if(!r.ok)return ce(503,{ok:!1,status:"skipped",error:"github_write_not_configured",missing:r.missing});let o=await e.json().catch(()=>null),a=Array.isArray(o?.files)?o.files:[];if(a.length<1)return ce(400,{ok:!1,status:"failed",error:"files_required"});if(a.length>hn)return ce(413,{ok:!1,status:"failed",error:"too_many_files",maxFiles:hn});let s=[],i=new Set;for(let p of a){let m=Ts(p?.workspacePath||p?.path);if(!m.ok)return ce(400,{ok:!1,status:"failed",error:m.error,workspacePath:String(p?.workspacePath||p?.path||"")});if(i.has(m.path))continue;i.add(m.path);let f=String(p?.text??"");if(new TextEncoder().encode(f).length>gn)return ce(413,{ok:!1,status:"failed",error:"file_too_large",workspacePath:`/${m.path}`,maxTextBytes:gn});s.push({workspacePath:`/${m.path}`,repositoryPath:m.path,text:f})}if(s.length<1)return ce(400,{ok:!1,status:"failed",error:"files_required"});let c=String(o?.message||"").trim(),l=c&&c.length<=160?c:`Knowgrph chat artifact ${s[0].repositoryPath}`;if(o?.dryRun===!0)return ce(200,{ok:!0,status:"dry_run",repository:`${r.owner}/${r.repo}`,branch:r.branch||null,files:s.map(p=>({workspacePath:p.workspacePath,repositoryPath:p.repositoryPath,textBytes:new TextEncoder().encode(p.text).length}))});try{let p=[];for(let m of s)p.push(await Is(r,m,l));return ce(200,{ok:!0,status:"applied",repository:`${r.owner}/${r.repo}`,branch:r.branch||null,files:p})}catch(p){let m=p instanceof Ye;return ce(m?424:500,{ok:!1,status:"failed",error:m?p.code:p instanceof Error?p.message:String(p||"github_write_failed"),...m?{upstreamStatus:p.upstreamStatus,upstreamMessage:p.upstreamMessage}:{}})}},"handleGitHubWorkspaceWrite"),Ns=n(e=>`User-agent: *
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
`,"buildRobotsTxt"),Us=n(e=>`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${x}</loc>
    <lastmod>${ke}</lastmod>
  </url>
  <url>
    <loc>${x}llms.txt</loc>
    <lastmod>${ke}</lastmod>
  </url>
  <url>
    <loc>${e}.well-known/mcp/server-card.json</loc>
    <lastmod>${ke}</lastmod>
  </url>
</urlset>
`,"buildSitemapXml"),Ls=Ns(`${x}sitemap.xml`),Ks=Us(x),xn={linkset:[{anchor:x,"service-desc":[{href:`${x}.well-known/openapi.json`,type:"application/vnd.oai.openapi+json;version=3.1"}],"service-doc":[{href:`${x}llms.txt`,type:"text/plain"}],status:[{href:qe,type:"application/health+json"}],"service-meta":[{href:`${x}.well-known/mcp/server-card.json`,type:"application/json"},{href:vt,type:"application/json"}]}]},En={openapi:"3.1.0",info:{title:"Knowgrph API",version:"0.1.0",description:"Agent discovery surface for the Knowgrph Cloudflare deployment."},servers:[{url:G,description:"Knowgrph Cloudflare deployment"}],paths:qo({appBasePath:C,appA2aAgentCardPath:fr,healthPath:Ve})},at={resource:x,resource_name:"Knowgrph",authorization_servers:[G],scopes_supported:["knowgrph:read","knowgrph:source-files:read"],bearer_methods_supported:["header"],resource_documentation:`${x}llms.txt`},Sr=`${G}/cdn-cgi/access`,Ee={skill:`${G}/auth.md`,register_uri:`${x}agent/auth`,claim_uri:`${x}agent/auth/claim`,revocation_uri:`${x}agent/auth/revoke`,identity_types_supported:["anonymous","identity_assertion"],anonymous:{credential_types_supported:["api_key"]},identity_assertion:{assertion_types_supported:["urn:ietf:params:oauth:token-type:id-jag","verified_email"],credential_types_supported:["access_token","api_key"]},events_supported:["https://schemas.workos.com/events/agent/auth/identity/assertion/revoked"],registration_status:"metadata_published_runtime_user_mediated"},fn={issuer:G,resource:at.resource,resource_name:at.resource_name,authorization_servers:at.authorization_servers,cloudflare_access_issuer:Sr,authorization_endpoint:`${Sr}/login`,token_endpoint:`${Sr}/token`,jwks_uri:`${x}.well-known/http-message-signatures-directory`,response_types_supported:["code"],grant_types_supported:["authorization_code","client_credentials"],token_endpoint_auth_methods_supported:["client_secret_basic","private_key_jwt"],scopes_supported:at.scopes_supported,agent_auth:Ee},Ds=`# Knowgrph auth.md

Knowgrph publishes agent registration metadata for the read-only agent surface at ${x}. Agents should first fetch ${G}/.well-known/oauth-protected-resource, follow its authorization_servers entry to ${G}/.well-known/oauth-authorization-server, and read the agent_auth block.

## Registration

- Register: ${Ee.register_uri}
- Claim: ${Ee.claim_uri}
- Revoke: ${Ee.revocation_uri}
- Supported identity types: ${Ee.identity_types_supported.join(", ")}
- Anonymous credentials: ${Ee.anonymous.credential_types_supported.join(", ")}
- Identity assertion types: ${Ee.identity_assertion.assertion_types_supported.join(", ")}
- Identity assertion credentials: ${Ee.identity_assertion.credential_types_supported.join(", ")}
- Revocation events: ${Ee.events_supported.join(", ")}
- Current runtime policy: user-mediated access through the existing Cloudflare Access/OAuth boundary; no separate MCP-only auth stack.
- Pipeline rule: agents must not bypass MainPanel -> FloatingPanel Chat -> KGC -> Canvas for user-mediated graph work; published HTTP MCP tools remain read-only until mutation auth and conflict semantics are implemented.`,Cn={name:"Knowgrph Agent",description:"Agent-readable discovery, published-document retrieval, and WebMCP-ready metadata surface for Knowgrph.",version:"0.1.0",provider:{organization:"airvio / joohwee",url:x},url:`${x}mcp`,preferredTransport:"JSONRPC",supportedInterfaces:[{url:`${x}mcp`,protocolBinding:"JSONRPC",transportProtocol:"JSONRPC",description:"Primary machine interface for read-only discovery and source-file document access."},{url:yr,protocolBinding:"HTTP+JSON/REST",transportProtocol:"HTTP+JSON/REST",description:"Published source-files index and storage-backed document read surface."}],capabilities:{streaming:!1,pushNotifications:!1,stateTransitionHistory:!1,extendedAgentCard:!1},defaultInputModes:["text/plain","text/markdown","application/json"],defaultOutputModes:["text/plain","text/markdown","application/json"],skills:Fo(It)},Me={serverInfo:{name:"knowgrph",version:"0.1.0"},transport:{type:Ae,url:`${x}mcp`,stateless:!0},capabilities:{tools:It.map(e=>({name:e.name,title:e.title,description:e.description,inputSchema:e.inputSchema,outputSchema:e.outputSchema,securitySchemes:e.securitySchemes,annotations:e.annotations,_meta:e._meta})),resources:{listChanged:!1},prompts:{listChanged:!1},...nr()},prompts:Sn,resourceTemplates:_n,clientSetups:sr({baseUrl:x,mcpUrl:`${x}mcp`,serverName:"knowgrph"}),links:{apiCatalog:`${x}.well-known/api-catalog`,skills:`${x}.well-known/agent-skills/index.json`,status:qe,agentCard:vt}},$s=At({appUrl:x,updatedAt:ke}),br=It.map(e=>({name:e.webName,title:e.title,description:e.description,inputSchema:e.inputSchema,outputSchema:e.outputSchema,securitySchemes:e.securitySchemes,annotations:e.annotations,_meta:e._meta})),De=n(e=>st(It.find(t=>t.name===e)?.webName),"findWebMcpToolName"),Hs=De(u.search),js=De(u.fetch),Bs=De(u.listSourceFiles),Gs=De(u.readSourceFile),Ws=De(u.readSharedDocument),Fs=De(u.inspectSharedDocumentStructure),zs=De(u.inspectAgentSurface),qs=`(() => {
  const root = globalThis;
  const siteOrigin = ${JSON.stringify(G)};
  const appBasePath = ${JSON.stringify(C)};
  const defaultWorkspaceId = ${JSON.stringify(rt)};
  const toolDefinitions = ${JSON.stringify(br)};
  const toolNames = ${JSON.stringify(br.map(e=>e.name))};
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
  const createPublishedDocIdentityResolver = ${tn};
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
  const createPublishedAgentReadyToolExecutors = ${Uo};
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
      search: ${JSON.stringify(Hs)},
      fetch: ${JSON.stringify(js)},
      listSourceFiles: ${JSON.stringify(Bs)},
      readSourceFile: ${JSON.stringify(Gs)},
      readSharedDocument: ${JSON.stringify(Ws)},
      inspectSharedDocumentStructure: ${JSON.stringify(Fs)},
      inspectAgentSurface: ${JSON.stringify(zs)},
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
})();`,Vs=n(async e=>{if(!(e.headers.get("content-type")||"").toLowerCase().includes("text/html"))return e;let r=await e.text();if(br.every(i=>r.includes(i.name)))return new Response(r,e);let o=`<script>${qs}<\/script>`,a=r.includes("</head>")?r.replace("</head>",`${o}</head>`):`${r}${o}`,s=new Response(a,e);return s.headers.delete("content-length"),s},"injectWebMcpScript"),Ys={search:u.search,fetch:u.fetch,listSourceFiles:u.listSourceFiles,readSourceFile:u.readSourceFile,readSharedDocument:u.readSharedDocument,inspectSharedDocumentStructure:u.inspectSharedDocumentStructure,inspectAgentSurface:u.inspectAgentSurface},Js=n(async e=>{let t=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(r)].map(o=>o.toString(16).padStart(2,"0")).join("")},"sha256Hex"),Tn=Wo(),Xs=Object.fromEntries(tt.map(e=>[e.name,Js(Tn[e.name]||"")])),yn=new Map(tt.map(e=>[`${C}${e.path}`.replace(/\/+$/,""),Tn[e.name]||""]));var vn=n(async()=>zo({appUrl:x,updatedAt:ke,sha256ByName:Xs}),"agentSkillsIndex"),Qs={keys:[{kty:"OKP",crv:"Ed25519",kid:"knowgrph-agent-ready-2026-05-21",use:"sig",alg:"EdDSA",x:"11qYAYdkVKxA4G0wV47IxPtYfFVH_H7zmC2Di2PcvLU"}]},Zs={protocolVersion:"2025-06-18",capabilities:{tools:{},resources:{},prompts:{listChanged:!1},...nr()},serverInfo:Me.serverInfo},Rr=Me.capabilities.tools,ei=[$s],ti=Sn,ri=_n,On=n(()=>({status:"pass",service:"knowgrph-agent-ready-pages",homepage:x,health:qe,updatedAt:ke,checks:{linkHeaders:!0,markdownNegotiation:!0,httpMcp:!0,webMcp:!0,mcpApps:!0,commerce:{acp:!0,ucp:!0,mpp:!0,x402:!0},defaultWorkspaceId:rt}}),"buildHealthStatusBody"),oi=n(async()=>No({baseUrl:x,health:On(),apiCatalog:xn,openApi:En,mcpServerCard:Me,agentCard:Cn,agentSkills:await vn(),commerce:Zt({origin:G})}),"buildAgentSurfaceInspection"),ni=lr({toolNames:Ys,defaultWorkspaceId:rt,publicBaseUrl:G,buildStorageDocPath:bn,fetchSourceFilesIndexResponse:n(()=>fetch(`${Tt}${nn()}`,{headers:{accept:"text/markdown"}}),"fetchSourceFilesIndexResponse"),fetchStorageMarkdownResponse:n(e=>fetch(`${Tt}${e}`,{headers:{accept:"text/markdown"}}),"fetchStorageMarkdownResponse"),resolveSharedDocumentInput:n((e={})=>Et({shareToken:e?.shareToken,shareUrl:e?.shareUrl,appBasePath:C,baseUrl:G}),"resolveSharedDocumentInput"),inspectSharedDocumentStructure:Lo,buildAgentSurfaceInspection:oi}),Pr=n(e=>{try{let t=new URL(e,G);return Et({shareUrl:`${t.pathname}${t.search}`,baseUrl:G,appBasePath:C})}catch{return null}},"resolvePublishedDocRequestIdentity"),ai=n(e=>Et({shareUrl:String(e||""),baseUrl:G,appBasePath:C}),"resolvePublishedDocPathIdentity"),si=n(async(e,t)=>{let r=new URL(bn(t.canonicalPath,t.workspaceId),Tt),o=await fetch(r,{method:"GET",headers:{accept:"text/markdown, text/plain;q=0.9, */*;q=0.1"}}),a=new Headers(o.headers),s=String(a.get("vary")||"");return a.set("vary",s?`${s}, Accept`:"Accept"),new Response(String(e.method||"").toUpperCase()==="HEAD"?null:o.body,{status:o.status,statusText:o.statusText,headers:a})},"proxyPublishedDocMarkdownResponse"),ii=n(async e=>{try{let t=await e.json();return t&&typeof t=="object"?t:null}catch{return null}},"readJsonRpcRequest"),xe=n((e,t)=>ce(200,{jsonrpc:"2.0",id:e??null,result:t}),"jsonRpcResult"),Ie=n((e,t,r)=>ce(200,{jsonrpc:"2.0",id:e??null,error:{code:t,message:r}}),"jsonRpcError"),ci=n(e=>String(e.headers.get("accept")||"").toLowerCase().split(",").some(t=>t.trim().startsWith("text/event-stream")),"requestAcceptsEventStream"),_r=n((e,t)=>Object.prototype.hasOwnProperty.call(e,t),"hasOwnProperty"),In=n(e=>{if(Array.isArray(e))return e.length>0&&e.every(In);if(!e||typeof e!="object"||String(e.jsonrpc||"")!=="2.0")return!1;let t=typeof e.method=="string"&&e.method.length>0,r=_r(e,"id"),o=_r(e,"result")||_r(e,"error");return t&&!r||!t&&o},"isJsonRpcNotificationOrResponse"),Mn=n(async(e,t)=>{let r=ni[e];if(typeof r!="function")throw new Error(`unknown tool: ${e}`);return r(t)},"executeMcpTool"),li=n(async e=>{let t=st(e);if(t===ie)return ir({appUrl:x,updatedAt:ke,toolNames:Rr.map(o=>o.name)});let r=Ro(t);if(r){let o=await Mn(u.fetch,{id:r});return Po({uri:t,sourceFile:o})}throw new Error(`unknown resource: ${e}`)},"readMcpResource"),pi=n(async e=>{let t=String(e.method||"GET").toUpperCase();if(t==="GET"||t==="HEAD")return ci(e)?mn(405,{allow:"POST"}):ye({ok:!0,transport:Me.transport,serverInfo:Me.serverInfo,capabilities:Me.capabilities});if(t!=="POST")return ce(405,{ok:!1,error:"unsupported_method"});let r=await ii(e);if(!r)return Ie(null,-32700,"Parse error");if(In(r))return mn(202);if(Array.isArray(r))return Ie(null,-32600,"Batch JSON-RPC requests are not supported");switch(r.method){case"initialize":return xe(r.id,Zs);case"tools/list":return xe(r.id,{tools:Rr});case"prompts/list":return xe(r.id,{prompts:ti});case"resources/templates/list":return xe(r.id,{resourceTemplates:ri});case"prompts/get":{let o=st(r.params?.name),a=r.params?.arguments&&typeof r.params.arguments=="object"?r.params.arguments:{};if(!o)return Ie(r.id,-32602,"Prompt name is required");try{return xe(r.id,wo(o,a))}catch(s){return Ie(r.id,-32602,s instanceof Error?s.message:String(s))}}case"resources/list":return xe(r.id,{resources:ei});case"resources/read":{let o=st(r.params?.uri);if(!o)return Ie(r.id,-32602,"Resource URI is required");try{return xe(r.id,await li(o))}catch(a){return Ie(r.id,-32602,a instanceof Error?a.message:String(a))}}case"tools/call":{let o=st(r.params?.name),a=r.params?.arguments&&typeof r.params.arguments=="object"?r.params.arguments:{};if(!o)return Ie(r.id,-32602,"Tool name is required");try{let s=await Mn(o,a);return xe(r.id,{content:[{type:"text",text:typeof s?.markdown=="string"?s.markdown:JSON.stringify(s,null,2)}],structuredContent:s,isError:!1})}catch(s){return xe(r.id,{content:[{type:"text",text:s instanceof Error?s.message:String(s)}],isError:!0})}}default:return Ie(r.id,-32601,"Method not found")}},"handleMcpTransport"),ui=n(()=>ir({appUrl:x,updatedAt:ke,toolNames:Rr.map(e=>e.name)}).contents[0].text,"buildKnowgrphMcpAppHtmlBody");var Ar=n(e=>e===C||e===`${C}/`,"handlesKnowgrphRoot"),di=n(e=>Ar(e)||!!ai(e),"handlesKnowgrphHtmlSurface"),mi=n(e=>{let t=new URL(e.url),r=t.pathname.replace(/\/+$/,"")||"/",o=Pr(e.url);return r===Ve?"health":r===`${C}/mcp`?"mcp":kn(r)?"github-workspace-write":r===`${C}/robots.txt`?"robots":r===`${C}/sitemap.xml`?"sitemap":r===`${C}/auth.md`||r==="/auth.md"?"auth-md":r.startsWith(`${C}/.well-known/`)?"well-known":o?ot(e)?"shared-doc-markdown":"shared-doc-html":Ar(t.pathname)?ot(e)?"homepage-markdown":"homepage-html":"app-surface"},"resolveAgentReadyRouteTag"),Ot=n((e,t)=>dn(t,{owner:cn,tag:mi(e)}),"withKnowgrphRouteHeaders"),wn=n(async e=>{let t=new URL(e.url),r=t.pathname.replace(/\/+$/,"")||"/",o=Pr(e.url);if(o&&ot(e))return si(e,o);if(Ar(t.pathname)&&ot(e))return un(pn);switch(r){case Ve:return As(On());case`${C}/mcp`:return pi(e);case`${C}/robots.txt`:return nt(Ls,"text/plain; charset=utf-8");case`${C}/sitemap.xml`:return nt(Ks,"application/xml; charset=utf-8");case`${C}/auth.md`:case"/auth.md":return nt(Ds,"text/markdown; charset=utf-8");case`${C}/.well-known/api-catalog`:return ye(xn,"application/linkset+json; charset=utf-8");case`${C}/.well-known/openapi.json`:return ye(En,"application/vnd.oai.openapi+json; charset=utf-8");case fr:return ye(Cn);case`${C}/.well-known/oauth-protected-resource`:return ye(at);case`${C}/.well-known/oauth-authorization-server`:return ye(fn);case`${C}/.well-known/openid-configuration`:return ye(fn);case`${C}/.well-known/mcp/server-card.json`:return ye(Me);case`${C}/.well-known/mcp/apps/knowgrph-agent-ready.html`:return Ps(ui());case`${C}/.well-known/mcp.json`:return ye(Me);case`${C}/.well-known/agent-skills/index.json`:return ye(await vn());case`${C}/.well-known/http-message-signatures-directory`:return ye(Qs);default:return yn.has(r)?nt(yn.get(r),"text/markdown; charset=utf-8"):null}},"routeResponse");async function Ne(e){let{env:t,request:r}=e,o=String(r.method||"GET").toUpperCase(),a=new URL(r.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(o==="POST"&&a.pathname.replace(/\/+$/,"")===`${C}/mcp`)return Ot(r,await wn(r));if(o==="POST"&&kn(a.pathname))return Ot(r,await Ms(r,t));if(o!=="GET"&&o!=="HEAD")return ce(405,{ok:!1,error:"unsupported_method"});let s=await wn(r);if(s){let p=Ot(r,s);return o==="HEAD"?new Response(null,p):p}let i=Pr(r.url)?await Vo(e,C):await e.next();if(!di(a.pathname))return i;let c=o==="HEAD"?i:await Vs(i),l=new Response(o==="HEAD"?null:c.body,c);return l.headers.set("link",ln),Ot(r,l)}n(Ne,"onRequest");async function Nn(e){return Ne(e)}n(Nn,"onRequest");async function Un(e){return Ne(e)}n(Un,"onRequest");async function Ln(e){return Ne(e)}n(Ln,"onRequest");var hi=Object.freeze(new Set(["","80","443"])),gi=Object.freeze([".local",".localhost",".internal"]),fi=Object.freeze(new Set(["localhost"]));function $e(e){return String(e||"").trim().toLowerCase()}n($e,"normalizeHostname");function yi(e){let t=$e(e);if(!/^\d{1,3}(\.\d{1,3}){3}$/.test(t))return!1;let r=t.split(".").map(o=>Number(o));return r.length!==4?!1:r.every(o=>Number.isInteger(o)&&o>=0&&o<=255)}n(yi,"isIpv4Literal");function Kn(e){let[t,r,o,a]=e.split(".").map(s=>Number(s));return(t<<24|r<<16|o<<8|a)>>>0}n(Kn,"ipv4ToInt");function wi(e,t,r){if(!Number.isInteger(r)||r<0||r>32)return!1;if(r===0)return!0;let o=4294967295<<32-r>>>0;return(e&o)===(t&o)}n(wi,"inIpv4Cidr");function Si(e){let t=$e(e);return!t||!t.includes(":")?!1:/^[0-9a-f:]+$/i.test(t)}n(Si,"isIpv6Literal");function _i(e){let t=$e(e);return!!(!t||t==="::1"||t==="0:0:0:0:0:0:0:1"||t.startsWith("fc")||t.startsWith("fd")||/^fe[89ab]/i.test(t))}n(_i,"isBlockedIpv6");function bi(e,{blockedExact:t,blockedSuffixes:r}={}){let o=$e(e);if(!o)return!0;let a=t||fi;if(a instanceof Set&&a.has(o))return!0;let s=r||gi;if(Array.isArray(s))for(let i of s){let c=$e(i);if(c&&(o===c||o.endsWith(c)))return!0}return!1}n(bi,"isBlockedHostname");function Ri(e){let t=$e(e);if(!t)return!0;if(yi(t)){let r=Kn(t),o=[{base:"0.0.0.0",bits:8},{base:"10.0.0.0",bits:8},{base:"127.0.0.0",bits:8},{base:"169.254.0.0",bits:16},{base:"172.16.0.0",bits:12},{base:"192.168.0.0",bits:16},{base:"100.64.0.0",bits:10}];for(let a of o){let s=Kn(a.base);if(wi(r,s,a.bits))return!0}return!1}return Si(t)?_i(t):!1}n(Ri,"isBlockedIpLiteral");function Mt(e,{allowedPorts:t}={}){let r=String(e||"").trim();if(!r)throw new Error("invalid_url");let o;try{o=new URL(r)}catch{throw new Error("invalid_url")}if(o.protocol!=="http:"&&o.protocol!=="https:")throw new Error("invalid_url");if(o.username||o.password)throw new Error("invalid_url");let a=t||hi,s=String(o.port||"");if(a instanceof Set&&!a.has(s))throw new Error("port_not_allowed");let i=$e(o.hostname);if(!i)throw new Error("invalid_url");if(bi(i))throw new Error("blocked_host");if(Ri(i))throw new Error("blocked_host");return o}n(Mt,"parseAndValidateExternalUrl");function Nt(e){return String(e.headers.get("sec-fetch-site")||"").trim().toLowerCase()==="cross-site"}n(Nt,"shouldRejectCrossSiteFetch");var Pi={"content-type":"application/json; charset=utf-8","cache-control":"public, max-age=600"};function He(e,t={}){return new Response(JSON.stringify(e),{...t,headers:{...Pi,...t.headers||{}}})}n(He,"json");function Ut(...e){for(let t of e){if(!t)continue;let r=String(t).trim();if(r)return r}return null}n(Ut,"pickFirst");function Ai(e){let t=e.slice(0,8e4),r=t.match(/<title[^>]*>([^<]*)<\/title>/i),o=t.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i),a=t.match(/<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i),s=t.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i),i=t.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i),c=t.match(/<meta[^>]+property=["']og:site_name["'][^>]*content=["']([^"']+)["'][^>]*>/i);return{title:Ut(o?.[1],r?.[1]),description:Ut(a?.[1],s?.[1]),image:Ut(i?.[1]),siteName:Ut(c?.[1])}}n(Ai,"extractMeta");async function Dn(e){let t=e.request.url,r=new URL(t);if(r.searchParams.get("ping")==="1")return He({ok:!0,ping:!0});let o=r.searchParams.get("url")||"";if(Nt(e.request))return He({ok:!1,error:"forbidden"},{status:403,headers:{"cache-control":"no-store"}});let a;try{a=Mt(o)}catch{return He({ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}try{let s=await fetch(a.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkPreview/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),i=s.headers.get("content-type")||"";if(!s.ok)return He({ok:!1,error:"fetch_failed",status:s.status,url:a.toString()},{status:200,headers:{"cache-control":"no-store"}});if(!i.includes("text/html"))return He({ok:!0,url:a.toString(),domain:a.host,contentType:i,title:null,description:null,image:null,siteName:null});let c=await s.text(),l=Ai(c);return He({ok:!0,url:a.toString(),domain:a.host,contentType:i,...l})}catch(s){return He({ok:!1,error:"exception",message:s?.message||String(s),url:a.toString()},{status:200,headers:{"cache-control":"no-store"}})}}n(Dn,"onRequestGet");var $n=35e4;function ki(e){let t=e;return t=t.replace(/<script\b[\s\S]*?<\/script>/gi,""),t=t.replace(/<iframe\b[\s\S]*?<\/iframe>/gi,""),t=t.replace(/<object\b[\s\S]*?<\/object>/gi,""),t=t.replace(/<embed\b[\s\S]*?>/gi,""),t=t.replace(/<noscript\b[\s\S]*?<\/noscript>/gi,""),t=t.replace(/\son[a-z]+\s*=\s*"[^"]*"/gi,""),t=t.replace(/\son[a-z]+\s*=\s*'[^']*'/gi,""),t}n(ki,"stripActiveContent");function xi({url:e,title:t,innerHtml:r}){let o=t?String(t).slice(0,140):"Preview",a=String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");return`<!doctype html>
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
</html>`}n(xi,"buildWrapper");async function Hn(e){let r=new URL(e.request.url).searchParams.get("url")||"";if(Nt(e.request))return new Response("Forbidden",{status:403,headers:{"cache-control":"no-store"}});let o;try{o=Mt(r)}catch(a){let s=a instanceof Error?a.message:"invalid_url";return new Response(s,{status:400,headers:{"cache-control":"no-store"}})}try{let a=await fetch(o.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkProxy/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),s=a.headers.get("content-type")||"";if(!a.ok)return new Response(`Fetch failed (${a.status})`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});if(!s.includes("text/html"))return new Response(`Unsupported content-type: ${s}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public, max-age=600"}});let i=await a.text();i.length>$n&&(i=i.slice(0,$n));let l=i.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()||o.host;i=ki(i),/<base\s/i.test(i)||(i=i.replace(/<head([^>]*)>/i,`<head$1><base href="${o.origin}/">`));let m=xi({url:o.toString(),title:l,innerHtml:i});return new Response(m,{status:200,headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600","content-security-policy":"default-src 'none'; img-src https: data:; style-src 'unsafe-inline' https:; font-src https: data:; frame-ancestors 'self';"}})}catch(a){return new Response(`Exception: ${a?.message||String(a)}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}})}}n(Hn,"onRequestGet");var kr="api.openai.com",Lt="api.miromind.ai",Kt="apihub.agnes-ai.com",Dt="ark.ap-southeast.bytepluses.com",xr="ark.eu-west.bytepluses.com",Bn=new Set(["localhost","127.0.0.1","0.0.0.0"]),Re=n(e=>String(e||"").trim().toLowerCase(),"normalizeHost"),we=n((e,t)=>String(e.get(t)||"").trim(),"readHeader"),Gn=n(e=>Bn.has(Re(e)),"isLocalHost"),jn=n(e=>{let t=String(e||"").trim();if(!t)return new Set;let r=new Set;return t.split(",").map(o=>Re(o)).filter(Boolean).forEach(o=>r.add(o)),r},"parseCsvSet"),Wn=n((e,{includeOpenAi:t=!1,includeMiroMind:r=!1,includeAgnes:o=!1,includeBytePlus:a=!1}={})=>{let s=jn(e.KNOWGRPH_INTEGRATION_ALLOWED_HOSTS),i=jn(e.KNOWGRPH_CHAT_PROXY_ALLOWED_HOSTS),c=s.size?s:i,l=c.size?c:new Set([...Bn]);return t&&l.add(kr),r&&l.add(Lt),o&&l.add(Kt),a&&(l.add(Dt),l.add(xr)),l},"parseAllowedHosts"),ae=n(e=>{let t=we(e.headers,"origin");if(!t)return{};let r="";try{r=Re(new URL(t).host)}catch{return{}}let o=Re(new URL(e.url).host);return r===o||r.startsWith("localhost:")||r.startsWith("127.0.0.1:")?{"access-control-allow-origin":t,vary:"Origin"}:{}},"corsHeaders"),he=n((e,t,r)=>new Response(JSON.stringify(t),{status:r,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...ae(e)}}),"jsonResponse");var $t={"content-type":"application/json; charset=utf-8","cache-control":"no-store"};function it(e,t,r=200){return new Response(JSON.stringify(t),{status:r,headers:{...$t,...ae(e)}})}n(it,"jsonResponse");async function Ei(e){let t=new URL("/knowgrph/imports/hackamap/hackamap-graph.json",e.url),r=await fetch(t.toString(),{redirect:"follow"});return r.ok?await r.json():null}n(Ei,"fetchHackamapGraphJson");async function je(e,t){let r=new URL(t,e.url),o=await fetch(r.toString(),{redirect:"follow"});return o.ok?await o.json():null}n(je,"fetchHackamapJson");async function Ci(e){let t=await je(e,"/knowgrph/imports/hackamap/hackamap_api_graph.json");return Vn(t)?t:null}n(Ci,"fetchHackamapApiGraphJson");async function Ti(e){let t=await je(e,"/knowgrph/imports/hackamap/hackamap_pipeline.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n(Ti,"fetchHackamapPipelineJson");async function zn(e){let t=await je(e,"/knowgrph/imports/hackamap/hackamap_query_presets.json");return Array.isArray(t)?t.filter(Boolean):[]}n(zn,"fetchHackamapQueryPresetsJson");async function qn(e){let t=await je(e,"/knowgrph/imports/hackamap/query-outputs/query-runs.manifest.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n(qn,"fetchHackamapQueryRunsManifestJson");function Vn(e){return!e||typeof e!="object"||Array.isArray(e)?!1:Array.isArray(e.nodes)&&Array.isArray(e.edges)}n(Vn,"isApiGraphPayload");function Yn(e,t){let r=String(e&&e.output&&e.output.per_table_prefix||e?.id||t?.preset||"").trim(),o=String(t?.output_suffix||"").trim();return o?`${r}-${o}`:r}n(Yn,"buildHackamapTablePrefix");function Er(e,t){if(!Array.isArray(e))return[];let r=[];for(let o of e){if(!o||typeof o!="object"||Array.isArray(o))continue;let a=String(o[t]||"").trim();a&&r.push(a)}return r}n(Er,"collectRowIds");async function vi(e,t){let r=await je(e,t);return Array.isArray(r)?r.length:0}n(vi,"countHackamapQueryRows");async function Oi(e,t,r){let o=Yn(t,r);if(!o)return{};let a=["events","demos","sources","organizer","team","techstack"],s=await Promise.all(a.map(async i=>[i,await vi(e,`/knowgrph/imports/hackamap/query-outputs/${i}.${o}.query.json`)]));return Object.fromEntries(s.filter(([,i])=>i>0))}n(Oi,"readHackamapRunTableCounts");function Cr(e){return Array.isArray(e)?e.map(Cr):!e||typeof e!="object"?e:Object.fromEntries(Object.entries(e).sort(([t],[r])=>String(t).localeCompare(String(r))).map(([t,r])=>[t,Cr(r)]))}n(Cr,"sortObjectKeys");function Ii(e){try{return JSON.stringify(Cr(e))}catch{return""}}n(Ii,"stableParamSignature");function Mi(e){return typeof e=="string"?{value:e,label:e}:{value:e,label:JSON.stringify(e)}}n(Mi,"toBuilderOption");function Ni(e,t){return e.map(r=>{let o=String(r?.id||"").trim();if(!o)return null;let a=r?.params&&typeof r.params=="object"&&!Array.isArray(r.params)?r.params:{},s=t.filter(l=>String(l?.preset||"").trim()===o),i=Array.from(new Set([...Object.keys(a),...s.flatMap(l=>l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?Object.keys(l.params):[])])).sort((l,p)=>String(l).localeCompare(String(p))),c=Object.fromEntries(i.map(l=>{let p=new Set,m=[],f=[a[l],...s.map(P=>P?.params&&typeof P.params=="object"&&!Array.isArray(P.params)?P.params[l]:void 0)];for(let P of f){if(typeof P>"u")continue;let _=Ii(P);!_||p.has(_)||(p.add(_),m.push(Mi(P)))}return[l,m]}));return{id:o,title:String(r?.title||o).trim(),params:a,param_keys:i,published_param_options:c}}).filter(Boolean)}n(Ni,"buildHackamapPresetRuntimeEntries");async function Ui(e){let[t,r,o]=await Promise.all([Ti(e),zn(e),qn(e)]),a=t&&typeof t=="object"?t.runtime||{}:{},s=String(a?.query_selection?.default_run_id||"").trim()||"enhanced",i=Array.isArray(o?.runs)?o.runs:[],c=(await Promise.all(i.map(async l=>{let p=String(l?.id||"").trim(),m=String(l?.preset||"").trim();if(!p)return null;let f=r.find(_=>String(_?.id||"").trim()===m),P=await Oi(e,f,l);return{id:p,preset:m,title:String(l?.title||l?.id||"").trim(),params:l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?l.params:{},output_suffix:String(l?.output_suffix||"").trim(),is_default:p===s,table_counts:P}}))).filter(l=>l?.id);return{ok:!0,runtime:{...a&&typeof a=="object"?a:{},presets:Ni(r,c),runs:c}}}n(Ui,"buildHackamapRuntimeMeta");async function Li(e,t){let r=String(t||"").trim();if(!r)return null;let[o,a]=await Promise.all([zn(e),qn(e)]),i=(Array.isArray(a?.runs)?a.runs:[]).find(k=>String(k?.id||"").trim()===r);if(!i)return null;let c=o.find(k=>String(k?.id||"").trim()===String(i?.preset||"").trim()),l=Yn(c,i);if(!l)return null;let[p,m]=await Promise.all([je(e,`/knowgrph/imports/hackamap/query-outputs/events.${l}.query.json`),je(e,`/knowgrph/imports/hackamap/query-outputs/demos.${l}.query.json`)]),f=new Set(Er(p,"id")),P=new Set(Er(m,"id")),_=Er(m,"event_id");for(let k of _)f.add(k);return{eventIds:f,demoIds:P}}n(Li,"readHackamapQueryRunSelection");function Fn(e,t,r){if(!r||!Vn(e))return e;if(r.eventIds.size===0&&r.demoIds.size===0)return{...e,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_run_filter_skipped:"no-event-demo-rows"}};let o=new Set;r.eventIds.forEach(c=>o.add(`Event:${c}`)),r.demoIds.forEach(c=>o.add(`Demo:${c}`));let a=Array.isArray(e.nodes)?e.nodes.filter(c=>o.has(String(c?.id||"").trim())):[],s=new Set(a.map(c=>String(c?.id||"").trim()).filter(Boolean)),i=Array.isArray(e.edges)?e.edges.filter(c=>s.has(String(c?.source||"").trim())&&s.has(String(c?.target||"").trim())):[];return{...e,nodes:a,edges:i,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_event_count:r.eventIds.size,selected_demo_count:r.demoIds.size,total_problems:a.filter(c=>String(c?.type||"").trim()==="problem").length,total_solutions:a.filter(c=>String(c?.type||"").trim()==="solution").length}}}n(Fn,"filterHackamapApiGraphPayloadByRun");function Ki(e){let t=Array.isArray(e?.nodes)?e.nodes:[],r=Array.isArray(e?.links)?e.links:[],o=[],a=new Set;for(let i of t){let c=String(i?.id||"").trim(),l=String(i?.type||"").trim(),p=String(i?.label||"").trim();if(!(!c||!l||!p)){if(l==="Event"){o.push({id:c,type:"problem",label:p,cluster:"Event"}),a.add(c);continue}l==="Demo"&&(o.push({id:c,type:"solution",label:p,cluster:"Demo"}),a.add(c))}}let s=[];for(let i of r){let c=String(i?.source||"").trim(),l=String(i?.target||"").trim(),p=String(i?.type||"").trim();!c||!l||p==="has_demo"&&(!a.has(c)||!a.has(l)||s.push({source:c,target:l,type:"has_demo",strength:.35}))}return{nodes:o,edges:s,meta:{source:"hackamap-graph.json:fallback",total_problems:o.filter(i=>i.type==="problem").length,total_solutions:o.filter(i=>i.type==="solution").length,...e?.content_signature?{content_signature:String(e.content_signature)}:{}}}}n(Ki,"toBipartiteApiPayload");async function Jn(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{...ae(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(r!=="GET"&&r!=="HEAD")return it(t,{ok:!1,error:"unsupported_method"},405);if(String(o.searchParams.get("view")||"").trim().toLowerCase()==="meta"){let m=await Ui(t);return r==="HEAD"?new Response(null,{status:200,headers:{...$t,...ae(t)}}):it(t,m,200)}let a=String(o.searchParams.get("run")||"").trim(),s=await Li(t,a),i=await Ci(t);if(i){let m=Fn(i,a,s);return r==="HEAD"?new Response(null,{status:200,headers:{...$t,...ae(t)}}):it(t,m,200)}let c=await Ei(t);if(!c)return it(t,{ok:!1,error:"missing_hackamap_graph",hint:"/knowgrph/imports/hackamap/{hackamap_api_graph.json,hackamap-graph.json} not found"},404);let l=Ki(c),p=Fn(l,a,s);return r==="HEAD"?new Response(null,{status:200,headers:{...$t,...ae(t)}}):it(t,p,200)}n(Jn,"onRequest");var Di=!0,Xn=600,Qn={"content-type":"application/json; charset=utf-8","cache-control":`public, max-age=${Xn}`};function Be(e,t,r={}){return new Response(JSON.stringify(t),{...r,headers:{...Qn,...r.headers||{},...ae(e)}})}n(Be,"jsonResponse");function $i(e){try{let t=new URL(String(e));return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}n($i,"isHttpUrl");function ct(e){return String(e||"").trim().toLowerCase()}n(ct,"normalizeHost");function Tr(e,{exact:t,suffixes:r}){let o=ct(e);return o?!!(Array.isArray(t)&&t.some(a=>o===ct(a))||Array.isArray(r)&&r.some(a=>o===ct(a)||o.endsWith(`.${ct(a)}`))):!1}n(Tr,"isHostMatch");function Hi(e){let t=ct(e.hostname),r=e.toString();return Tr(t,{suffixes:["linkedin.com"]})?new URL(`https://www.linkedin.com/embeds/oembed.json?url=${encodeURIComponent(r)}`):Tr(t,{exact:["twitter.com","x.com"],suffixes:["twitter.com","x.com"]})?new URL(`https://publish.twitter.com/oembed?omit_script=1&url=${encodeURIComponent(r)}`):Tr(t,{exact:["reddit.com"],suffixes:["reddit.com"]})?new URL(`https://www.reddit.com/oembed?url=${encodeURIComponent(r)}`):null}n(Hi,"buildOembedUpstreamUrl");async function ji({upstreamUrl:e}){return await fetch(e.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; OEmbedProxy/1.0)",accept:"application/json,text/json;q=0.9,*/*;q=0.1"},redirect:"follow",cf:{cacheTtl:Xn,cacheEverything:!0}})}n(ji,"fetchJsonUpstream");async function Zn(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{...ae(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD"].includes(r))return Be(t,{ok:!1,error:"unsupported_method"},{status:405});if(o.searchParams.get("ping")==="1")return Be(t,{ok:!0,ping:!0});if(Di)return Be(t,{ok:!1,error:"disabled_by_policy"},{status:200,headers:{"cache-control":"no-store"}});let a=o.searchParams.get("url")||"";if(!$i(a))return Be(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}});let s;try{s=new URL(a)}catch{return Be(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}let i=Hi(s);if(!i)return Be(t,{ok:!1,error:"unsupported_provider"},{status:400,headers:{"cache-control":"no-store"}});let c=await ji({upstreamUrl:i}),l=new Headers(c.headers);l.delete("content-length"),l.set("cache-control",c.ok?Qn["cache-control"]:"no-store");for(let[m,f]of Object.entries(ae(t)))l.set(m,f);if(r==="HEAD")return new Response(null,{status:c.status,headers:l});let p=await c.text();try{JSON.parse(p)}catch{return Be(t,{ok:!1,error:"invalid_upstream_json",status:c.status},{status:502,headers:{"cache-control":"no-store"}})}return l.set("content-type","application/json; charset=utf-8"),new Response(p,{status:c.status,headers:l})}n(Zn,"onRequest");var ea="/__chat_proxy",Ht="agnes-ai",jt="byteplus-modelark",Bt="miromind",Bi=n(e=>{let t=Re(e);return t==="openai"?"openai":t===jt||t==="byteplus"?jt:t===Bt||t==="miromind-api"?Bt:t===Ht||t==="agnes"||t==="agnes-ai-api"?Ht:t},"normalizeProviderId"),Gi=n(e=>Re(e)===Kt,"isAgnesHost"),Wi=n(e=>{let t=Re(e);return t===Dt||t===xr},"isBytePlusHost"),Fi=n(e=>Re(e)===Lt,"isMiroMindHost"),zi=n(({provider:e,requestedUpstream:t,env:r})=>e==="openai"?"https://api.openai.com":e===Bt?t||`https://${Lt}`:e===Ht?t||`https://${Kt}`:e===jt?t||String(r.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim()||`https://${Dt}`:t||String(r.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim(),"pickUpstreamBase");async function ta(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=new URL(t.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":we(t.headers,"origin")||"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD","POST"].includes(o))return he(t,{ok:!1,error:"Unsupported method"},405);let s=Bi(we(t.headers,"x-kg-chat-provider")),i=zi({provider:s,requestedUpstream:we(t.headers,"x-kg-chat-upstream"),env:r});if(!i)return he(t,{ok:!1,error:"Missing chat proxy upstream configuration"},500);let c;try{c=new URL(i)}catch{return he(t,{ok:!1,error:"Invalid chat proxy upstream configuration"},500)}let l=Wn(r,{includeOpenAi:!0,includeMiroMind:!0,includeAgnes:!0,includeBytePlus:!0}),p=Re(c.hostname);if(!l.has(p))return he(t,{ok:!1,error:"Chat proxy upstream host is not allowed"},403);if(!Gn(p)&&c.protocol!=="https:")return he(t,{ok:!1,error:"Chat proxy requires HTTPS for non-local upstream hosts"},403);let m=s==="openai"||p===kr,f=s===Bt||Fi(p),P=s===Ht||Gi(p),_=s===jt||Wi(p),k=we(t.headers,"x-kg-chat-api-key"),j=String(r.KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY||r.OPENAI_API_KEY||"").trim(),L=String(r.KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY||r.MIROMIND_API_KEY||"").trim(),$=String(r.KNOWGRPH_CHAT_PROXY_AGNES_API_KEY||r.AGNES_API_KEY||"").trim(),re=String(r.KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY||r.BYTEPLUS_API_KEY||"").trim(),W=(k||j).slice(0,512),T=(k||L).slice(0,512),O=(k||$).slice(0,512),J=(k||re).slice(0,512),K=_?J:P?O:f?T:W;if(m&&!W)return he(t,{ok:!1,error:"Missing OpenAI API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY or OPENAI_API_KEY)"},401);if(f&&!K)return he(t,{ok:!1,error:"Missing MiroMind API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY or MIROMIND_API_KEY)"},401);if(P&&!K)return he(t,{ok:!1,error:"Missing Agnes API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_AGNES_API_KEY or AGNES_API_KEY)"},401);if(_&&!K)return he(t,{ok:!1,error:"Missing BytePlus API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY or BYTEPLUS_API_KEY)"},401);if(o==="POST"&&!we(t.headers,"content-type").toLowerCase().includes("application/json"))return he(t,{ok:!1,error:"Chat proxy expects application/json payloads"},415);let X=a.pathname.startsWith(ea)&&a.pathname.slice(ea.length)||"/v1/chat/completions",I=X.startsWith("/")?X:`/${X}`,M=new URL(`${I}${a.search||""}`,c),B=new Headers,oe=we(t.headers,"content-type"),pe=we(t.headers,"accept");oe&&B.set("content-type",oe),pe&&B.set("accept",pe),(m||f||P||_)&&B.set("authorization",`Bearer ${K}`);let Se=we(t.headers,"x-client-request-id").slice(0,512);Se&&B.set("x-client-request-id",Se);let A=new AbortController,y=Number(r.KNOWGRPH_CHAT_PROXY_TIMEOUT_MS),S=Number.isFinite(y)?Math.max(5e3,Math.min(18e4,Math.floor(y))):9e4,d=setTimeout(()=>A.abort(),S);try{let h=await fetch(M.toString(),{method:o,headers:B,body:o==="GET"||o==="HEAD"?void 0:t.body,signal:A.signal,redirect:"follow"}),g=new Headers(h.headers);g.delete("content-length"),g.delete("www-authenticate"),g.set("cache-control","no-store");let b=we(t.headers,"origin");return b&&(g.set("access-control-allow-origin",b),g.set("vary","Origin")),o==="HEAD"?new Response(null,{status:h.status,statusText:h.statusText,headers:g}):new Response(h.body,{status:h.status,statusText:h.statusText,headers:g})}catch(h){let g=h&&typeof h=="object"&&"message"in h?String(h.message||""):"",b=A.signal.aborted||/aborted|timeout/i.test(g);return he(t,{ok:!1,error:g||"Failed to reach chat upstream"},b?504:502)}finally{clearTimeout(d)}}n(ta,"onRequest");function qi(e){let t=e.map(r=>r==null?"":typeof r=="boolean"?r?"1":"0":typeof r=="number"?Number.isFinite(r)?String(r):"":String(r)).join("|");return`rich-media-preview:${Xe(t)}`}n(qi,"buildRichMediaPreviewSemanticKey");var oa="png";function lt(e){let t=typeof e=="number"?e:Number(String(e??"").trim());if(!Number.isFinite(t))return null;let r=Math.max(0,Number(t.toFixed(3)));return Number.isFinite(r)?r:null}n(lt,"normalizeRemoteVideoFrameSeconds");function Vi(e){return String(lt(e)??0).replace(/\./g,"_")}n(Vi,"formatRemoteVideoFrameSecondsForFileName");function Wt(e){let t=String(e||"").trim().toLowerCase();return t==="jpg"||t==="jpeg"?"jpg":"png"}n(Wt,"normalizeRemoteVideoFrameFormat");function vr(e){let t=String(e.sourceUrl||"").trim(),r=lt(e.timeSeconds)??0,o=Wt(e.format||oa);return qi(["remote-video-frame",t,r,o])}n(vr,"buildRemoteVideoFrameSemanticKey");function na(e){let t=lt(e.timeSeconds)??0,r=Wt(e.format||oa),o=vr({...e,timeSeconds:t,format:r});return`frame-${o.split(":").pop()||Xe(o)}-t${Vi(t)}.${r}`}n(na,"buildRemoteVideoFrameFileName");var Gt=n(e=>{let t=String(e||"").trim();return t&&/^[A-Za-z0-9_-]{6,128}$/.test(t)?t:null},"normalizeYouTubeIdLikeValue"),ra=n(e=>{try{let t=new URL(String(e||"").trim()),r=String(t.hostname||"").toLowerCase();if(r==="youtu.be"||r.endsWith(".youtu.be")){let o=t.pathname.replace(/^\/+/,"").split("/")[0]?.trim()||"";return Gt(o)}if(r==="youtube.com"||r.endsWith(".youtube.com")||r==="youtube-nocookie.com"||r.endsWith(".youtube-nocookie.com")){let o=String(t.searchParams.get("v")||"").trim();if(o)return Gt(o);let a=t.pathname.split("/").filter(Boolean),s=a[0]||"",i=a[1]||"";if((s==="embed"||s==="shorts"||s==="live")&&i)return Gt(i);if(s==="watch"){let c=String(t.searchParams.get("v")||"").trim();return Gt(c)}}}catch{return null}return null},"readYouTubeIdFromUrl");function Yi(e){let t=String(e||"").trim().replace(/^<|>$/g,"").trim();for(;/[),.;:!?]$/.test(t);){let r=t.slice(0,-1).trim();if(!r)break;let o=ra(t),a=ra(r);if(!a||o&&o!==a)break;t=r}return t}n(Yi,"stripYouTubeUrlTrailingPunctuation");function aa(e){let t=n(r=>{let o=String(r||"").trim();if(!o)return null;if(/^\d+$/.test(o))return Number(o);let a=o.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i);if(!a)return null;let s=a[1]?Number(a[1]):0,i=a[2]?Number(a[2]):0,c=a[3]?Number(a[3]):0,l=s*3600+i*60+c;return l>0&&Number.isFinite(l)?l:null},"parseChunk");try{let r=new URL(Yi(e)),o=r.searchParams.get("t")||r.searchParams.get("start")||"",a=r.hash&&new URLSearchParams(r.hash.replace(/^#/,"")).get("t")||"";return t(o)??t(a)}catch{return null}}n(aa,"parseYouTubeStartSeconds");var Ji="/image/knowgrph/video-frame",Xi=4096,Qi=720*60,Zi=/^frame-[a-f0-9]+-t\d+\.(?:png|jpg)$/i,Nr={"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"accept, content-type"},Mr=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),Or=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:JSON.stringify(e),{status:t,headers:{...Nr,"content-type":"application/json; charset=utf-8","cache-control":"no-store"}}),"jsonResponse"),Ir=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:e,{status:t,headers:{...Nr,"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}}),"textResponse"),ec=n((e,t)=>e===t||e.endsWith(`.${t}`),"hostMatches"),tc=n(e=>{let t=Mr(e?.KG_VIDEO_FRAME_ALLOWED_HOSTS);return t?t.split(",").map(r=>Mr(r).toLowerCase()).filter(Boolean):["youtube.com","youtu.be","youtube-nocookie.com","bilibili.com","b23.tv"]},"readAllowedHosts"),rc=n(e=>Mr(e).replace(/^<|>$/g,"").trim(),"unwrapUrlInput"),oc=n((e,t)=>{try{let r=new URL(e);if(r.protocol!=="https:"&&r.protocol!=="http:")return!1;let o=r.hostname.toLowerCase();return tc(t).some(a=>ec(o,a))}catch{return!1}},"isAllowedSourceUrl"),nc=n((e,t)=>{let r=new URL(e.url),o=rc(r.searchParams.get("url")||"");if(!o)return{error:"Missing url parameter"};if(o.length>Xi)return{error:"Video URL is too long"};if(!oc(o,t))return{error:"Video frame extraction is limited to supported remote video hosts"};let a=lt(r.searchParams.get("time"))??aa(o);if(a==null)return{error:"Missing time parameter"};let s=Math.min(Qi,Math.max(0,a)),i=Wt(r.searchParams.get("format")||"png"),c=na({sourceUrl:o,timeSeconds:s,format:i});if(!Zi.test(c))return{error:"Invalid frame cache key"};let l=`${Ji}/${c}`;return{sourceUrl:o,timeSeconds:s,format:i,fileName:c,publicUrl:l,semanticKey:vr({sourceUrl:o,timeSeconds:s,format:i})}},"readFrameRequest"),ac=n(async(e,t,r)=>{let o=new URL(t,e.request.url),a=new Request(o.toString(),{method:r});return typeof e.env?.ASSETS?.fetch=="function"?await e.env.ASSETS.fetch(a):await fetch(a)},"fetchStaticAsset"),sc=n(e=>`Frame has not been generated yet. Run the local video-frame extractor and publish ${e.publicUrl}.`,"missingFrameMessage"),ic=n((e,t)=>{let r=new Headers;r.set("content-type",t.format==="jpg"?"image/jpeg":"image/png"),r.set("cache-control","public, max-age=31536000, immutable"),r.set("access-control-allow-origin","*");let o=e.headers.get("content-length");o&&r.set("content-length",o);let a=e.headers.get("etag");return a&&r.set("etag",a),r},"imageResponseHeaders");async function sa(e){let t=e.request;if(t.method==="OPTIONS")return new Response(null,{status:204,headers:Nr});if(t.method!=="GET"&&t.method!=="HEAD")return Ir("Method not allowed",405,t.method);let r=new URL(t.url).searchParams.get("emit")==="json",o=nc(t,e.env||{});if("error"in o)return r?Or({ok:!1,error:o.error},400,t.method):Ir(o.error,400,t.method);let a=r&&t.method!=="HEAD"?"GET":r||t.method==="HEAD"?"HEAD":"GET",s=await ac(e,o.publicUrl,a);if(!s.ok){let i=sc(o);return r?Or({ok:!1,error:i,publicUrl:o.publicUrl,semanticKey:o.semanticKey},404,t.method):Ir(i,404,t.method)}if(r){let i=Number(s.headers.get("content-length")||0);return(!Number.isFinite(i)||i<=0)&&t.method!=="HEAD"&&(i=(await s.arrayBuffer()).byteLength),Or({ok:!0,imageUrl:o.publicUrl,publicUrl:o.publicUrl,semanticKey:o.semanticKey,cached:!0,bytes:Number.isFinite(i)?Math.max(0,Math.floor(i)):0,timeSeconds:o.timeSeconds,format:o.format},200,t.method)}return new Response(t.method==="HEAD"?null:s.body,{status:200,headers:ic(s,o)})}n(sa,"onRequest");var ia={"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"content-type"},Ft=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:JSON.stringify(e),{status:t,headers:ia}),"jsonResponse"),Y=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),cc=n(e=>{try{let t=new URL(String(e||"").trim());if(/youtu\.be$/i.test(t.hostname))return Y(t.pathname.split("/").filter(Boolean)[0]);if(/youtube\.com$/i.test(t.hostname)||/youtube-nocookie\.com$/i.test(t.hostname)){let r=Y(t.searchParams.get("v"));if(r)return r;let o=t.pathname.split("/").filter(Boolean),a=o.findIndex(s=>["embed","shorts","live"].includes(s));if(a>=0)return Y(o[a+1])}}catch{}return""},"readVideoId"),lc=n((e,t)=>{let r=e.indexOf(t);if(r<0)return null;let o=e.indexOf("{",r);if(o<0)return null;let a=0,s=!1,i=!1;for(let c=o;c<e.length;c+=1){let l=e[c];if(s){i?i=!1:l==="\\"?i=!0:l==='"'&&(s=!1);continue}if(l==='"')s=!0;else if(l==="{")a+=1;else if(l==="}"&&(a-=1,a===0))return e.slice(o,c+1)}return null},"extractJsonAfter"),pc=n(e=>{for(let t of["ytInitialPlayerResponse =","ytInitialPlayerResponse="]){let r=lc(e,t);if(r)try{return JSON.parse(r)}catch{}}return null},"parsePlayerResponse"),uc=n((e,t)=>{let r=Y(t||"en").toLowerCase();return e.find(o=>Y(o.languageCode).toLowerCase()===r)||e.find(o=>Y(o.languageCode).toLowerCase().startsWith(r.split("-")[0]))||e.find(o=>Y(o.kind)!=="asr")||e[0]||null},"pickCaptionTrack"),dc=n(e=>{let t=new URL(e);return t.searchParams.set("fmt","json3"),t.toString()},"withJsonCaptionFormat"),mc=n(e=>(Array.isArray(e?.events)?e.events:[]).map(r=>{let o=Array.isArray(r.segs)?Y(r.segs.map(i=>i?.utf8||"").join("")):"",a=Number(r.tStartMs)/1e3,s=Number(r.dDurationMs||0)/1e3;return o&&Number.isFinite(a)?{text:o,start:a,duration:Number.isFinite(s)?s:0}:null}).filter(Boolean),"parseCaptionJson3"),hc=n(e=>String(e||"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'"),"decodeXmlText"),gc=n(e=>{let t=[],r=/<text\b([^>]*)>([\s\S]*?)<\/text>/gi,o=null;for(;o=r.exec(String(e||""));){let a=o[1]||"",s=Number(a.match(/\bstart="([^"]+)"/i)?.[1]),i=Number(a.match(/\bdur="([^"]+)"/i)?.[1]||0),c=Y(hc(o[2]||""));c&&Number.isFinite(s)&&t.push({text:c,start:s,duration:Number.isFinite(i)?i:0})}return t},"parseCaptionXml"),fc=n((e,t)=>{let r=String(e||"").trim();if(!r)return[];if(String(t||"").toLowerCase().includes("json")||r.startsWith("{")||r.startsWith("["))try{return mc(JSON.parse(r))}catch{return[]}return gc(r)},"parseCaptionResponseText"),yc=n(e=>{let t=Math.max(0,Math.floor(Number(e)||0)),r=Math.floor(t/60),o=String(t%60).padStart(2,"0");return`${r}:${o}`},"formatTimestamp"),wc=n((e,t)=>{let r=new URL(e);return r.searchParams.set("t",`${Math.max(0,Math.floor(Number(t)||0))}s`),r.toString()},"timestampUrl"),Sc=n(({title:e,sourceUrl:t,videoId:r,authorName:o,thumbnailUrl:a,segments:s})=>[`# ${e||`YouTube ${r}`}`,"",`Video ID: ${r}`,o?`Author: ${o}`:"",`Source: [${t}](${t})`,a?`[![${e||r}](${a})](${t})`:"","",s.length>0?"## Transcript":"## Video Source","",...s.length>0?s.map(i=>`[${yc(i.start)}](${wc(t,i.start)}) ${i.text}`):["Captions were not available from the source at import time.","The source URL, title, author, and thumbnail remain available for downstream storyboard reconstruction."],""].filter(i=>i!=="").join(`
`),"buildMarkdown"),Ur=n(({videoId:e,sourceUrl:t,title:r,authorName:o,thumbnailUrl:a,lang:s,languageCode:i,segments:c,captionStatus:l})=>{let p={type:"rag:YouTubeTranscript",video_id:e,source_url:t,title:r,author_name:o,thumbnail_url:a,language_code:Y(i)||s,caption_status:l,segment_count:c.length,duration:c.reduce((m,f)=>Math.max(m,f.start+f.duration),0),segments:c};return{ok:!0,name:`youtube-${e.toLowerCase()}.md`,markdown:Sc({title:r,sourceUrl:t,videoId:e,authorName:o,thumbnailUrl:a,segments:c}),transcript:p}},"buildPayload");async function _c({sourceUrl:e,lang:t="en",fetchImpl:r=fetch}){let o=cc(e);if(!o)return{ok:!1,error:"unsupported_youtube_url"};let a=`https://www.youtube.com/watch?v=${encodeURIComponent(o)}`,[s,i]=await Promise.all([r(`https://www.youtube.com/oembed?url=${encodeURIComponent(a)}&format=json`,{headers:{accept:"application/json"}}).catch(()=>null),r(a,{headers:{accept:"text/html,application/xhtml+xml","accept-language":"en-US,en;q=0.9","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}})]),c=s?.ok?await s.json().catch(()=>({})):{},l=i.ok?pc(await i.text()):null,p=Y(c.title)||Y(l?.videoDetails?.title)||`YouTube ${o}`,m=Y(c.author_name)||Y(l?.videoDetails?.author),f=Y(c.thumbnail_url)||`https://i.ytimg.com/vi/${o}/hqdefault.jpg`;if(!i.ok)return Ur({videoId:o,sourceUrl:a,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:t,segments:[],captionStatus:`watch-fetch-${i.status}`});let P=l?.captions?.playerCaptionsTracklistRenderer?.captionTracks||[],_=uc(Array.isArray(P)?P:[],t);if(!_?.baseUrl)return Ur({videoId:o,sourceUrl:a,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:t,segments:[],captionStatus:"captions-unavailable"});let k=await r(dc(_.baseUrl),{headers:{accept:"application/json,text/xml,text/plain,*/*","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}}).catch(()=>null),j=k?await k.text().catch(()=>""):"",L=k?.ok?fc(j,k.headers.get("content-type")):[],$=L.length>0?"available":k?.ok?"captions-empty":`captions-fetch-${k?.status||"failed"}`;return Ur({videoId:o,sourceUrl:a,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:_.languageCode,segments:L,captionStatus:$})}n(_c,"buildYouTubeTranscriptPayload");async function ca(e){let t=e.request,r=String(t.method||"GET").toUpperCase();if(r==="OPTIONS")return new Response(null,{status:204,headers:ia});if(r!=="GET"&&r!=="HEAD"&&r!=="POST")return Ft({ok:!1,error:"unsupported_method"},405,r);let o=new URL(t.url),a=Y(o.searchParams.get("url")),s=Y(o.searchParams.get("lang"))||"en";if(!a)return Ft({ok:!1,error:"missing_url"},400,r);try{let i=await _c({sourceUrl:a,lang:s});return Ft(i,i.ok?200:502,r)}catch(i){let c=i&&typeof i=="object"&&"message"in i?Y(i.message):"";return Ft({ok:!1,error:c||"youtube_conversion_failed"},502,r)}}n(ca,"onRequest");async function la(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase();if(r==="OPTIONS")return new Response(null,{status:204,headers:{...ae(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(r!=="GET"&&r!=="HEAD")return new Response(JSON.stringify({ok:!1,error:"unsupported_method"}),{status:405,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...ae(t)}});let o={ok:!0,service:"singabldr-pages",ts:new Date().toISOString()},a={"content-type":"application/json; charset=utf-8","cache-control":"no-store",...ae(t)};return r==="HEAD"?new Response(null,{status:200,headers:a}):new Response(JSON.stringify(o),{status:200,headers:a})}n(la,"onRequest");var Te="https://airvio.co";var le="/knowgrph",Ce=`${Te}${le}/`,bc=`${Te}/`;var ua=`${le}/health`,pa=`${Te}${ua}`,da="/.well-known/agent-card.json",Od=`${le}/.well-known/agent-card.json`,Rc=`${Te}${da}`,Pc=`${Te}/api/storage/source-files`,Ac=`${Te}/api/storage/doc-default/{canonicalPath}`,kc=`${Te}/api/storage/doc/{workspaceId}/{canonicalPath}`,xc=`${Te}/api/storage/blob/{workspaceId}/{canonicalPath}`;var Lr="root-agent-ready-pages",ma=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${le}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${le}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${ua}>; rel="status"; type="application/health+json"`,`<${le}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${da}>; rel="describedby"; type="application/json"`].join(", "),ha=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${Ce}.

## Discovery

- Crawl policy: ${Ce}robots.txt
- Sitemap: ${Ce}sitemap.xml
- API catalog: ${Ce}.well-known/api-catalog
- Auth.md registration instructions: ${bc}auth.md
- Health: ${pa}
- MCP server card: ${Ce}.well-known/mcp/server-card.json
- A2A Agent Card: ${Rc}
- Agent skills: ${Ce}.well-known/agent-skills/index.json
- LLM reference: ${Ce}llms.txt

## APIs

- Agent-ready status: ${pa}
- HTTP MCP: ${Ce}mcp
- Storage API: ${Te}/api/storage/
- Source Files index: ${Pc}
- Default Source File documents: ${Ac}
- Workspace Source File documents: ${kc}
- Workspace binary artifacts: ${xc}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes seven read-only tools for published Source Files, shared documents, data-first search/fetch, and agent-surface inspection.
- HTTP MCP and local stdio expose shared read-only prompt templates through \`prompts/list\` and \`prompts/get\` for Source Files research and agent-surface inspection.
- HTTP MCP and local stdio expose Source Files resource templates through \`resources/templates/list\`; \`kgdoc://source-file/{id}\` reads reuse the existing \`fetch\` executor.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared seven-tool WebMCP surface on \`${Ce}\` HTML routes.

## MCP Apps

- HTTP MCP advertises \`io.modelcontextprotocol/ui\` with \`text/html;profile=mcp-app\`.
- \`inspect_agent_surface\` links to the shared \`ui://knowgrph/agent-ready\` resource through \`_meta.ui.resourceUri\`.
- UI-linked tool descriptors expose no-auth \`securitySchemes\`, mirror them in \`_meta.securitySchemes\`, and set OpenAI widget accessibility metadata from the shared contract.
- \`resources/list\` and \`resources/read\` serve the inline, sandbox-friendly Knowgrph Agent Ready app resource while preserving text fallback and structured tool output; \`resources/templates/list\` exposes Source Files markdown reads under the standard MCP \`resources\` capability.
- The View initiates the MCP Apps \`ui/initialize\` handshake, sends \`ui/notifications/initialized\` and \`ui/notifications/size-changed\`, handles host context/tool input/result/cancel notifications, and calls the originating server through \`tools/call\`.
- \`inspect_agent_surface.structuredContent.mcpAppsServerReadiness\` exposes the native server-readiness model used by the View: app tool/resource binding, prompt discovery, resource-template discovery, output-schema and structured-content readiness, sandbox/security metadata, widget accessibility, Streamable HTTP JSON-RPC transport, local stdio transport, and read-only search/fetch retrieval.
`,ga=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),fa=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(r=>r.trim().startsWith("text/markdown")),"wantsMarkdown"),Kr=n((e,t)=>{let r=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&r.headers.set("x-knowgrph-route-owner",o),a&&r.headers.set("x-knowgrph-route-tag",a),r},"withAgentReadyRouteHeaders");var $r="Agent-actionable chat-to-canvas knowledge graph workspace",pt='<main id="root"></main>',Ec=/<(?:main|div)\s+id=["']root["']\s*><\/(?:main|div)>/i,Cc=n(e=>{let t=/<script>([\s\S]*?)<\/script>/g;for(let r of String(e||"").matchAll(t)){let o=r[1]||"";if(o.includes("createWebMcpLifecycleController")&&o.includes("toolDefinitions"))return o}return""},"extractWebMcpScript"),ya=n(()=>({"content-type":"text/html; charset=utf-8","cache-control":"no-store, no-cache, no-transform, must-revalidate, max-age=0","access-control-allow-origin":"*",link:ma}),"rootHtmlHeaders"),Dr=n((e,t)=>String(e||"").includes("</head>")?String(e||"").replace("</head>",`${t}</head>`):`${String(e||"")}${t}`,"injectIntoHead"),wa=n(e=>String(e||"").replace(Ec,pt),"canonicalizeRootMount"),zt=n(()=>`<main id="knowgrph-root-fallback" data-knowgrph-root-fallback="visible" aria-label="Knowgrph root alias" style="position:fixed;inset:0;z-index:2147483000;display:grid;place-content:center;gap:1rem;padding:2rem;box-sizing:border-box;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#101820;color:#f4f7fb;text-align:center">
      <h1 style="margin:0;font-size:clamp(2.25rem,8vw,5.5rem);line-height:1;font-weight:760">Knowgrph</h1>
      <p style="margin:0 auto;max-width:42rem;font-size:clamp(1rem,2.2vw,1.35rem);line-height:1.55;color:#d6e1ea">${$r}</p>
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
    <\/script>`,"rootVisibleFallbackMarkup"),Tc=n(e=>{let t=wa(e);return/<main\s+id=["']knowgrph-root-fallback["']/i.test(t)?t:t.includes(pt)?t.replace(pt,`${pt}
    ${zt()}`):t.includes("</body>")?t.replace("</body>",`    ${zt()}
  </body>`):`${t}
${zt()}`},"injectRootVisibleFallback"),vc=n(e=>{let t=wa(e);return/<meta\s+name=["']description["'][^>]*>/i.test(t)?t=t.replace(/<meta\s+name=["']description["'][^>]*>/i,`<meta name="description" content="${$r}" />`):t=Dr(t,`    <meta name="description" content="${$r}" />
`),/<link\s+rel=["']canonical["'][^>]*>/i.test(t)||(t=Dr(t,`    <link rel="canonical" href="${le}/" />
`)),/<meta\s+name=["']x-knowgrph-root-alias["'][^>]*>/i.test(t)||(t=Dr(t,`    <meta name="x-knowgrph-root-alias" content="${le}/" />
`)),Tc(t)},"rewriteRootAppHtml"),Oc=n(async e=>{let t=new URL(`${le}/?agentReadyRootWebMcp=1`,e.url),r=await fetch(t,{headers:{accept:"text/html"}});return r.ok?Cc(await r.text()):""},"loadWebMcpScript"),Ic=n(async e=>{let t=new URL(`${le}/?agentReadyRootAlias=1`,e.url),r=await fetch(t,{headers:{accept:"text/html"}});if(!r.ok)return null;let o=vc(await r.text());return!o.includes(pt)||!o.includes(`${le}/assets/`)?null:new Response(o,{status:200,headers:ya()})},"loadKnowgrphAppShell"),Mc=n((e="")=>new Response(`<!DOCTYPE html>
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
    ${zt()}
  </body>
</html>`,{status:200,headers:ya()}),"rootHtmlResponse");async function Sa(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase();if(r!=="GET"&&r!=="HEAD")return e.next();if(fa(t)){let s=Kr(ga(ha),{owner:Lr,tag:"root-homepage-markdown"});return r==="HEAD"?new Response(null,s):s}let o=r==="HEAD"?null:await Ic(t),a=Kr(o||Mc(r==="HEAD"?"":await Oc(t)),{owner:Lr,tag:"root-homepage-html"});return r==="HEAD"?new Response(null,a):a}n(Sa,"onRequest");var R=[{routePath:"/api/llm/chat/completions",mountPath:"/api/llm/chat",method:"",middlewares:[],modules:[Gr]},{routePath:"/api/payments/commerce/x402",mountPath:"/api/payments/commerce",method:"",middlewares:[],modules:[uo]},{routePath:"/api/llm/models",mountPath:"/api/llm",method:"",middlewares:[],modules:[mo]},{routePath:"/api/llm/responses",mountPath:"/api/llm",method:"",middlewares:[],modules:[ho]},{routePath:"/knowgrph/doc-default/:path*",mountPath:"/knowgrph/doc-default",method:"",middlewares:[],modules:[Nn]},{routePath:"/knowgrph/doc/:path*",mountPath:"/knowgrph/doc",method:"",middlewares:[],modules:[Un]},{routePath:"/knowgrph/share/:path*",mountPath:"/knowgrph/share",method:"",middlewares:[],modules:[Ln]},{routePath:"/api/link-preview",mountPath:"/api",method:"GET",middlewares:[],modules:[Dn]},{routePath:"/api/link-proxy",mountPath:"/api",method:"GET",middlewares:[],modules:[Hn]},{routePath:"/api/graph",mountPath:"/api",method:"",middlewares:[],modules:[Jn]},{routePath:"/api/oembed",mountPath:"/api",method:"",middlewares:[],modules:[Zn]},{routePath:"/__chat_proxy/:path*",mountPath:"/__chat_proxy",method:"",middlewares:[],modules:[ta]},{routePath:"/knowgrph/:path*",mountPath:"/knowgrph",method:"",middlewares:[],modules:[Ne]},{routePath:"/__video_frame",mountPath:"/",method:"",middlewares:[],modules:[sa]},{routePath:"/__youtube_transcript",mountPath:"/",method:"",middlewares:[],modules:[ca]},{routePath:"/health",mountPath:"/",method:"",middlewares:[],modules:[la]},{routePath:"/",mountPath:"/",method:"",middlewares:[],modules:[Sa]}];function Nc(e){for(var t=[],r=0;r<e.length;){var o=e[r];if(o==="*"||o==="+"||o==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(o==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(o==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(o==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(o===":"){for(var a="",s=r+1;s<e.length;){var i=e.charCodeAt(s);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){a+=e[s++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:a}),r=s;continue}if(o==="("){var c=1,l="",s=r+1;if(e[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;){if(e[s]==="\\"){l+=e[s++]+e[s++];continue}if(e[s]===")"){if(c--,c===0){s++;break}}else if(e[s]==="("&&(c++,e[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));l+=e[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(r));if(!l)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:l}),r=s;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}n(Nc,"lexer");function Uc(e,t){t===void 0&&(t={});for(var r=Nc(e),o=t.prefixes,a=o===void 0?"./":o,s=t.delimiter,i=s===void 0?"/#?":s,c=[],l=0,p=0,m="",f=n(function(I){if(p<r.length&&r[p].type===I)return r[p++].value},"tryConsume"),P=n(function(I){var M=f(I);if(M!==void 0)return M;var B=r[p],oe=B.type,pe=B.index;throw new TypeError("Unexpected ".concat(oe," at ").concat(pe,", expected ").concat(I))},"mustConsume"),_=n(function(){for(var I="",M;M=f("CHAR")||f("ESCAPED_CHAR");)I+=M;return I},"consumeText"),k=n(function(I){for(var M=0,B=i;M<B.length;M++){var oe=B[M];if(I.indexOf(oe)>-1)return!0}return!1},"isSafe"),j=n(function(I){var M=c[c.length-1],B=I||(M&&typeof M=="string"?M:"");if(M&&!B)throw new TypeError('Must have text between two parameters, missing text after "'.concat(M.name,'"'));return!B||k(B)?"[^".concat(Ue(i),"]+?"):"(?:(?!".concat(Ue(B),")[^").concat(Ue(i),"])+?")},"safePattern");p<r.length;){var L=f("CHAR"),$=f("NAME"),re=f("PATTERN");if($||re){var W=L||"";a.indexOf(W)===-1&&(m+=W,W=""),m&&(c.push(m),m=""),c.push({name:$||l++,prefix:W,suffix:"",pattern:re||j(W),modifier:f("MODIFIER")||""});continue}var T=L||f("ESCAPED_CHAR");if(T){m+=T;continue}m&&(c.push(m),m="");var O=f("OPEN");if(O){var W=_(),J=f("NAME")||"",K=f("PATTERN")||"",X=_();P("CLOSE"),c.push({name:J||(K?l++:""),pattern:J&&!K?j(W):K,prefix:W,suffix:X,modifier:f("MODIFIER")||""});continue}P("END")}return c}n(Uc,"parse");function ut(e,t){var r=[],o=ba(e,r,t);return Lc(o,r,t)}n(ut,"match");function Lc(e,t,r){r===void 0&&(r={});var o=r.decode,a=o===void 0?function(s){return s}:o;return function(s){var i=e.exec(s);if(!i)return!1;for(var c=i[0],l=i.index,p=Object.create(null),m=n(function(P){if(i[P]===void 0)return"continue";var _=t[P-1];_.modifier==="*"||_.modifier==="+"?p[_.name]=i[P].split(_.prefix+_.suffix).map(function(k){return a(k,_)}):p[_.name]=a(i[P],_)},"_loop_1"),f=1;f<i.length;f++)m(f);return{path:c,index:l,params:p}}}n(Lc,"regexpToFunction");function Ue(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}n(Ue,"escapeString");function _a(e){return e&&e.sensitive?"":"i"}n(_a,"flags");function Kc(e,t){if(!t)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,a=r.exec(e.source);a;)t.push({name:a[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),a=r.exec(e.source);return e}n(Kc,"regexpToRegexp");function Dc(e,t,r){var o=e.map(function(a){return ba(a,t,r).source});return new RegExp("(?:".concat(o.join("|"),")"),_a(r))}n(Dc,"arrayToRegexp");function $c(e,t,r){return Hc(Uc(e,r),t,r)}n($c,"stringToRegexp");function Hc(e,t,r){r===void 0&&(r={});for(var o=r.strict,a=o===void 0?!1:o,s=r.start,i=s===void 0?!0:s,c=r.end,l=c===void 0?!0:c,p=r.encode,m=p===void 0?function(M){return M}:p,f=r.delimiter,P=f===void 0?"/#?":f,_=r.endsWith,k=_===void 0?"":_,j="[".concat(Ue(k),"]|$"),L="[".concat(Ue(P),"]"),$=i?"^":"",re=0,W=e;re<W.length;re++){var T=W[re];if(typeof T=="string")$+=Ue(m(T));else{var O=Ue(m(T.prefix)),J=Ue(m(T.suffix));if(T.pattern)if(t&&t.push(T),O||J)if(T.modifier==="+"||T.modifier==="*"){var K=T.modifier==="*"?"?":"";$+="(?:".concat(O,"((?:").concat(T.pattern,")(?:").concat(J).concat(O,"(?:").concat(T.pattern,"))*)").concat(J,")").concat(K)}else $+="(?:".concat(O,"(").concat(T.pattern,")").concat(J,")").concat(T.modifier);else{if(T.modifier==="+"||T.modifier==="*")throw new TypeError('Can not repeat "'.concat(T.name,'" without a prefix and suffix'));$+="(".concat(T.pattern,")").concat(T.modifier)}else $+="(?:".concat(O).concat(J,")").concat(T.modifier)}}if(l)a||($+="".concat(L,"?")),$+=r.endsWith?"(?=".concat(j,")"):"$";else{var X=e[e.length-1],I=typeof X=="string"?L.indexOf(X[X.length-1])>-1:X===void 0;a||($+="(?:".concat(L,"(?=").concat(j,"))?")),I||($+="(?=".concat(L,"|").concat(j,")"))}return new RegExp($,_a(r))}n(Hc,"tokensToRegexp");function ba(e,t,r){return e instanceof RegExp?Kc(e,t):Array.isArray(e)?Dc(e,t,r):$c(e,t,r)}n(ba,"pathToRegexp");var qt=/[.+?^${}()|[\]\\]/g;function*jc(e){let t=new URL(e.url).pathname;for(let r of[...R].reverse()){if(r.method&&r.method!==e.method)continue;let o=ut(r.routePath.replace(qt,"\\$&"),{end:!1}),a=ut(r.mountPath.replace(qt,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i)for(let c of r.middlewares.flat())yield{handler:c,params:s.params,path:i.path}}for(let r of R){if(r.method&&r.method!==e.method)continue;let o=ut(r.routePath.replace(qt,"\\$&"),{end:!0}),a=ut(r.mountPath.replace(qt,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i&&r.modules.length){for(let c of r.modules.flat())yield{handler:c,params:s.params,path:s.path};break}}}n(jc,"executeRequest");var im={async fetch(e,t,r){let o=e,a=jc(o),s={},i=!1,c=n(async(l,p)=>{if(l!==void 0){let f=l;typeof l=="string"&&(f=new URL(l,o.url).toString()),o=new Request(f,p)}let m=a.next();if(m.done===!1){let{handler:f,params:P,path:_}=m.value,k={request:new Request(o.clone()),functionPath:_,next:c,params:P,get data(){return s},set data(L){if(typeof L!="object"||L===null)throw new Error("context.data must be an object");s=L},env:t,waitUntil:r.waitUntil.bind(r),passThroughOnException:n(()=>{i=!0},"passThroughOnException")},j=await f(k);if(!(j instanceof Response))throw new Error("Your Pages function should return a Response");return Hr(j)}else{let f=await t.ASSETS.fetch(o);return Hr(f)}},"next");try{return await c()}catch(l){if(i){let p=await t.ASSETS.fetch(o);return Hr(p)}throw l}}},Hr=n(e=>new Response([101,204,205,304].includes(e.status)?null:e.body,e),"cloneResponse");export{im as default};
