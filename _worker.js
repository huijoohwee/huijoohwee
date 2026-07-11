var Pa=Object.defineProperty;var n=(e,t)=>Pa(e,"name",{value:t,configurable:!0});var Aa="https://api.openai.com/v1";var Jt=Object.freeze(["gpt-5.4-nano","gpt-4o-mini"]);function Xt(e){return String(e||"").trim()}n(Xt,"normalizeOrigin");function ka(e){let t=Xt(e);return t?t.startsWith("http://localhost:")||t.startsWith("http://127.0.0.1:")||t.startsWith("http://0.0.0.0:"):!1}n(ka,"isAllowedOrigin");function Br(e){let t=Xt(e);return ka(t)?{"access-control-allow-origin":t,vary:"Origin","access-control-allow-methods":"GET, POST, OPTIONS","access-control-allow-headers":"content-type, x-flowinfish-session","access-control-max-age":"86400"}:{}}n(Br,"corsHeaders");function we(e,{status:t=200,origin:r=""}={}){return new Response(JSON.stringify(e),{status:t,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...Br(r)}})}n(we,"json");async function yt(e,{maxBytes:t=1e6}={}){let r=await e.arrayBuffer();if(r.byteLength>t)throw new Error("Request too large");let o=new TextDecoder().decode(r);try{return o?JSON.parse(o):{}}catch{throw new Error("Invalid JSON body")}}n(yt,"readJsonBody");function xa(e){let t=String(e?.model||"").trim();if(!t)throw new Error("Missing model");if(!Jt.includes(t))throw new Error(`Model not allowed: ${t}`);return t}n(xa,"enforceAllowedModel");function Ea(e){let t=String(e.OPENAI_API_KEY||"").trim();if(!t)throw new Error("Missing server OPENAI_API_KEY");return t}n(Ea,"requireOpenAiKey");async function wt({request:e,env:t,pathname:r,payload:o}){let a=Ea(t);xa(o);let i=`${Xt(t.OPENAI_API_BASE)||Aa}${r}`,c=await fetch(i,{method:"POST",headers:{authorization:`Bearer ${a}`,"content-type":"application/json"},body:JSON.stringify(o)}),l=new Headers(c.headers);return l.delete("content-length"),l.set("cache-control","no-store"),new Response(c.body,{status:c.status,headers:l})}n(wt,"proxyToOpenAi");function We(e){let t=e.headers.get("origin")||"";return new Response(null,{status:204,headers:{...Br(t)}})}n(We,"handleOptions");async function Gr(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return We(t);if(o!=="POST")return we({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return we({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await yt(t);return await wt({request:t,env:r,pathname:"/chat/completions",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return we({ok:!1,error:i},{status:400,origin:a})}}n(Gr,"onRequest");var St={checkoutSession:"/api/payments/stripe/checkout/session",webhook:"/api/payments/stripe/webhook"};var me={restrictedKey:"STRIPE_RESTRICTED_KEY",secretKey:"STRIPE_SECRET_KEY",webhookSecret:"STRIPE_WEBHOOK_SECRET",checkoutPriceId:"STRIPE_CHECKOUT_PRICE_ID",checkoutCurrency:"STRIPE_CHECKOUT_CURRENCY",checkoutUnitAmount:"STRIPE_CHECKOUT_UNIT_AMOUNT",checkoutProductName:"STRIPE_CHECKOUT_PRODUCT_NAME",checkoutMode:"STRIPE_CHECKOUT_MODE",checkoutReturnOrigin:"STRIPE_CHECKOUT_RETURN_ORIGIN"},Xc=[me.restrictedKey,me.secretKey,me.webhookSecret];var Qe={configure:"npm run payment:stripe:configure",d1MigrateRemote:"npm run payment:d1:migrate:remote",readiness:"npm run payment:stripe:readiness",x402Configure:"npm run payment:x402:configure",x402Readiness:"npm run payment:x402:readiness",paymentReadiness:"npm run payment:readiness",applyConfirmation:"apply-stripe-payment-worker-config",writeVisibleVarsFlag:"--write-visible-vars",deployVisibleVarsFlag:"--deploy-visible-vars"};var Qc=[`Configure Stripe secrets on the server runtime that owns ${St.checkoutSession}.`,"Cloudflare Pages project variables are available to Pages builds/functions, but they are not read by separate Worker routes.","Stripe Projects can provision and sync credentials locally; copy only required server secret names into the payment server runtime."].join(" "),Zc=[`Payment server runtime for ${St.checkoutSession}`,"not Cloudflare Pages project variables"].join("; "),Ca=[me.restrictedKey,me.secretKey].join(" or "),el=[me.checkoutPriceId,`${me.checkoutCurrency} + ${me.checkoutUnitAmount} + ${me.checkoutProductName}`].join(" or "),tl=[`${me.checkoutMode}=payment`,`${me.checkoutMode}=subscription with ${me.checkoutPriceId}`].join(" or "),rl=["Worker secret names","visible Worker [vars]","remote D1 payment tables","required webhook-processing columns/constraints","bounded optional hosted Checkout create-and-expire smoke"].join(" + "),ol=[Qe.configure,`write visible Worker [vars] with ${Qe.writeVisibleVarsFlag}`,`deploy visible Worker [vars] with ${Qe.deployVisibleVarsFlag}`,`apply with -- --apply --yes --confirm=${Qe.applyConfirmation}`,Qe.readiness].join(" -> "),nl=[`Missing server-managed Stripe key. Set ${Ca} on the payment server runtime.`,"Pages project variables alone do not satisfy separate Worker routes."].join(" ");var Ta=n(e=>{let t=2166136261;for(let r=0;r<e.length;r+=1)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0},"fnv1a32");function Wr(e){return Ta(String(e??""))}n(Wr,"hashString32");function Ze(e){return Wr(e).toString(16).padStart(8,"0")}n(Ze,"hashStringToHex");var va=n(e=>e==null?"":typeof e=="boolean"?e?"1":"0":typeof e=="number"?Number.isFinite(e)?String(e):"":String(e),"normalizePrimitive"),Oa=n(e=>e.map(va).join("|"),"buildSignatureText"),_t=n(e=>Ze(Oa(e)),"hashSignatureParts");var Re=n((e,t)=>_t(["agentic-commerce",e,...t]),"buildAgenticCommerceSemanticKey");var Fr="solana_pay",zr="/api/payments/commerce/solana-pay/settle";var Ie={recipient:"SOLANA_PAY_RECIPIENT",splToken:"SOLANA_PAY_SPL_TOKEN",label:"SOLANA_PAY_LABEL",rpcUrl:"SOLANA_PAY_RPC_URL",amountScale:"SOLANA_PAY_AMOUNT_SCALE",network:"SOLANA_PAY_NETWORK",commitment:"SOLANA_PAY_COMMITMENT"};var et="2026-01-30",Vr="1000",Yr="USDC",Qt="https://x402.org/facilitator",Jr="eip155:84532",Ia="$0.001",Xr="x402-payment-required",Ma="0x0000000000000000000000000000000000000000",Fe="2026-04-08",qr="https://ucp.dev/2026-04-08/specification/overview/",Na=["checkout"],Ua=["rest"];var v={acpDiscovery:"/.well-known/acp.json",acpConfig:"/.well-known/acp-config",ucpProfile:"/.well-known/ucp",mppOpenApi:"/openapi.json",x402ApiRoot:"/api",x402ApiV1:"/api/v1",checkoutSessions:"/checkout/sessions",x402PaymentRequired:"/api/payments/commerce/x402",commerceWebhook:"/api/payments/commerce/webhook",commerceProofArtifact:"/api/payments/commerce/harness-proof.json",commerceTraceArtifact:"/api/payments/commerce/trace.jsonl",openboxIngest:"/api/payments/commerce/openbox/ingest",web3Settle:"/api/payments/commerce/web3/settle",solanaPaySettle:zr},xl=[v.x402ApiRoot,v.x402ApiV1,v.x402PaymentRequired],G={sellerId:"SELLER_ID",checkoutBaseUrl:"CHECKOUT_BASE_URL",web3Enabled:"WEB3_ENABLED",web3DepositAddress:"WEB3_DEPOSIT_ADDRESS",baseRpcUrl:"BASE_RPC_URL",baseConfirmationBlocks:"BASE_CONFIRMATION_BLOCKS",easAttestUrl:"EAS_ATTEST_URL",openboxApiUrl:"OPENBOX_API_URL",openboxIngestUrl:"OPENBOX_INGEST_URL",openboxApiKey:"OPENBOX_API_KEY",stripeDelegatePaymentUrl:"STRIPE_DELEGATE_PAYMENT_URL",acpBearerToken:"ACP_BEARER_TOKEN",x402PayToAddress:"X402_PAY_TO_ADDRESS",x402Network:"X402_NETWORK",x402Asset:"X402_ASSET",x402Amount:"X402_AMOUNT",x402FacilitatorUrl:"X402_FACILITATOR_URL",x402Price:"X402_PRICE"},El=[G.sellerId,G.checkoutBaseUrl,G.web3Enabled,G.web3DepositAddress,G.baseRpcUrl,G.baseConfirmationBlocks,G.easAttestUrl,G.openboxApiUrl,G.openboxIngestUrl,G.stripeDelegatePaymentUrl,G.x402Network,G.x402Asset,G.x402Amount,G.x402FacilitatorUrl,G.x402Price,Ie.recipient,Ie.rpcUrl],Cl=[Ie.splToken,Ie.label,Ie.amountScale,Ie.network,Ie.commitment],Tl=[G.acpBearerToken,G.openboxApiKey],vl=["Visible Worker [vars] for ACP, Web3, x402, OpenBOX, and Solana Pay.","Worker secrets for ACP bearer auth and OpenBOX API access."].join(" "),Me=n((e,t)=>String(e[t]||"").trim(),"readEnvString"),Qr=n((e,t)=>{let r=Me(e,G.sellerId);if(r)return r;try{return new URL(t).host}catch{return"knowgrph-seller"}},"readAgenticCommerceSellerId");var Zr=n(e=>{let t=Me(e,G.web3Enabled).toLowerCase();return t?t==="0"||t==="false"||t==="no"?!1:t==="1"||t==="true"||t==="yes":!0},"isAgenticCommerceWeb3Enabled");var tt=n(e=>String(e||"").trim().replace(/\/+$/g,""),"normalizeAgenticCommerceBaseUrl"),le=n((e,t)=>`${tt(e)}${t}`,"buildAgenticCommerceUrl"),oe=n((e,t,r,o,a=o.startsWith("/")?o:null)=>({id:t,label:r,value:o,path:a,semanticKey:Re("mainpanel-commerce-readiness-row",[e,t,r,o,a||""])}),"buildAgenticCommerceMainPanelReadinessRow"),ze=n((e,t,r)=>({id:e,title:t,rows:r}),"buildAgenticCommerceMainPanelReadinessSection"),La=n(()=>{let e=[ze("overview","Overview",[oe("overview","acp-discovery","ACP discovery",`GET ${v.acpDiscovery}`,v.acpDiscovery),oe("overview","acp-config","ACP config",`GET ${v.acpConfig}`,v.acpConfig),oe("overview","api-version","API version",et,null)]),ze("discovery","Discovery",[oe("discovery","ucp-profile","UCP profile",v.ucpProfile),oe("discovery","mpp-openapi","MPP OpenAPI",v.mppOpenApi),oe("discovery","x402-payment-required","x402 payment required",v.x402PaymentRequired),oe("discovery","x402-api-root","x402 API root",v.x402ApiRoot)]),ze("sessions","Sessions",[oe("sessions","checkout-sessions","Checkout sessions",v.checkoutSessions),oe("sessions","stripe-webhook","Stripe webhook",St.webhook)]),ze("web3","Web3",[oe("web3","settle","Settle",v.web3Settle),oe("web3","solana-pay-settle","Solana Pay settle",v.solanaPaySettle),oe("web3","signals","Signals","Base RPC + Solana RPC confirmation",null)]),ze("governance","Governance",[oe("governance","openbox-ingest","OpenBOX ingest",v.openboxIngest),oe("governance","risk-source","Risk source","OpenBOX risk signal",null)]),ze("proofs","Proofs",[oe("proofs","harness-proof","Harness proof",v.commerceProofArtifact),oe("proofs","trace-artifact","Trace artifact",v.commerceTraceArtifact)])],t=e.flatMap(a=>a.rows),r=t.map(a=>a.path||"").filter(a=>a.length>0),o=t.filter(a=>!a.path).map(a=>`${a.label}: ${a.value}`);return{surface:"mainpanel-commerce",semanticKey:Re("mainpanel-commerce-readiness",[et,...t.map(a=>a.semanticKey)]),sections:e,routePaths:r,routeCount:r.length,signals:o}},"buildAgenticCommerceMainPanelReadiness"),Ol=La(),eo=n((e,t)=>{let r=Me(e,G.web3DepositAddress);if(/^0x[0-9a-fA-F]{40}$/.test(r))return r;let o=Re("deposit-address",[t,"0"]),a=Re("deposit-address",[t,"1"]),s=Re("deposit-address",[t,"2"]),i=Re("deposit-address",[t,"3"]),c=Re("deposit-address",[t,"4"]);return`0x${o}${a}${s}${i}${c}`.slice(0,42)},"buildAgenticCommerceDepositAddress");var to=n((e,t=Xr)=>{let r=Me(e,G.x402PayToAddress);return/^0x[0-9a-fA-F]{40}$/.test(r)&&r.toLowerCase()!==Ma?r:eo(e,t)},"readAgenticCommerceX402PayToAddress"),Il=eo({},Xr),Ka=/^[a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,64}$/,ro=n(e=>{let t=Me(e,G.x402Network);return Ka.test(t)?t:Jr},"readAgenticCommerceX402Network"),oo=n(e=>Me(e,G.x402Asset)||Yr,"readAgenticCommerceX402Asset"),no=n(e=>{let t=Me(e,G.x402Amount);return/^[1-9][0-9]*$/.test(t)?t:Vr},"readAgenticCommerceX402Amount");var ao=n(e=>{let t=Me(e,G.x402FacilitatorUrl);try{let r=new URL(t||Qt);return r.protocol==="https:"||r.protocol==="http:"?r.toString().replace(/\/+$/g,""):Qt}catch{return Qt}},"readAgenticCommerceX402FacilitatorUrl"),so=n(e=>{let t=tt(e.baseUrl);return{protocol:{name:"acp",version:et,supported_versions:[et],documentation_url:"https://agenticcommerce.dev"},api_base_url:t,transports:[...Ua],capabilities:{services:[...Na],...e.web3Enabled?{extensions:[{name:"x-web3"}]}:{}},links:{config:le(t,v.acpConfig),ucp:le(t,v.ucpProfile),mpp:le(t,v.mppOpenApi),x402:le(t,v.x402PaymentRequired)}}},"buildAgenticCommerceAcpDiscovery"),io=n(e=>{let t=tt(e.baseUrl),r={acp:le(t,v.acpDiscovery),api:le(t,v.x402ApiRoot),checkout_sessions:le(t,v.checkoutSessions),mpp_openapi:le(t,v.mppOpenApi),proof:le(t,v.commerceProofArtifact),trace:le(t,v.commerceTraceArtifact),x402_payment_required:le(t,v.x402PaymentRequired),solana_pay_settle:le(t,v.solanaPaySettle)},o={checkout_sessions:!0,content_payments:!0,proof_artifacts:!0,risk_signals:!0,web3_settlement:e.web3Enabled,solana_pay:e.web3Enabled},a={"dev.ucp.shopping":[{version:Fe,spec:qr,transport:"rest",endpoint:r.api,schema:"https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json"}]};return{ucp:{version:Fe,protocol_version:Fe,services:a,capabilities:{"dev.ucp.shopping.checkout":[{version:Fe,spec:"https://ucp.dev/2026-04-08/specification/checkout/",schema:"https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"}]},payment_handlers:{},endpoints:r},protocol_version:Fe,protocol:{name:"ucp",version:Fe},seller:{id:e.sellerId},services:[{id:"knowgrph-content-payments",type:"content-payments",endpoints:{x402:r.x402_payment_required,checkout_sessions:r.checkout_sessions,solana_pay_settle:r.solana_pay_settle,proof:r.proof,trace:r.trace}}],capabilities:o,endpoints:r,spec_urls:[qr],schema_urls:["https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json","https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"]}},"buildAgenticCommerceUcpProfile"),co=n(e=>{let t=tt(e.baseUrl);return{openapi:"3.1.0",info:{title:"Knowgrph Machine Payment Protocol",version:et,description:"Machine-readable payable-operation discovery for Knowgrph commerce routes."},servers:[{url:t}],paths:{[v.x402PaymentRequired]:{get:{operationId:"getKnowgrphX402PaymentRequirement",summary:"Return x402 payment requirements for an agent-readable paid resource.","x-payment-info":{intent:"charge",method:"x402",amount:Ia,currency:"usdc"},responses:{402:{description:"Payment Required"}}}},[v.checkoutSessions]:{post:{operationId:"createKnowgrphCommerceCheckoutSession",summary:"Create an agentic commerce checkout session.","x-payment-info":{intent:"session",method:"stripe",amount:"dynamic",currency:"request.currency"},responses:{201:{description:"Checkout session created"}}}},[v.solanaPaySettle]:{post:{operationId:"settleKnowgrphSolanaPayCheckoutSession",summary:"Settle an agentic commerce checkout session from a verified Solana Pay transaction signature.","x-payment-info":{intent:"settlement",method:Fr,amount:"dynamic",currency:"request.currency"},responses:{200:{description:"Solana Pay session settled"},409:{description:"Solana Pay transaction is not confirmed yet"},422:{description:"Solana Pay transaction does not match the session"}}}}}}},"buildAgenticCommerceMppOpenApi"),lo=n(e=>{let t=tt(e.baseUrl),r=le(t,v.x402PaymentRequired),o=String(e.amount||Vr);return{x402Version:2,error:"Payment required",resource:{url:r,description:"Knowgrph agentic commerce paid-resource readiness probe",mimeType:"application/json"},accepts:[{scheme:"exact",network:String(e.network||Jr),amount:o,maxAmountRequired:o,asset:String(e.asset||Yr),resource:r,mimeType:"application/json",payTo:e.payTo,maxTimeoutSeconds:300,extra:{name:"USDC",version:"2",resourceUrl:r,...e.facilitatorUrl?{facilitatorUrl:e.facilitatorUrl}:{}}}]}},"buildAgenticCommerceX402PaymentRequired");var $a=n(e=>JSON.stringify(e,null,2),"jsonBody"),Da=n(e=>String(e||"").trim().replace(/\/+$/g,""),"trimOrigin"),Ha=n(e=>typeof btoa=="function"?btoa(e):typeof Buffer<"u"?Buffer.from(e).toString("base64"):"","encodeBase64"),ja=n((e,t)=>{try{return new URL(e).origin}catch{return Da(t)}},"rootOriginFromRequest"),Zt=n((e={})=>{let t=ja(e.requestUrl,e.origin),r=e.env||{},o=Qr(r,`${t}/`),a=Zr(r),s=lo({baseUrl:t,payTo:to(r),network:ro(r),asset:oo(r),amount:no(r),facilitatorUrl:ao(r)});return{acpDiscovery:so({sellerId:o,baseUrl:t,web3Enabled:a}),ucpProfile:io({sellerId:o,baseUrl:t,web3Enabled:a}),mppOpenApi:co({baseUrl:t}),x402PaymentRequired:s}},"buildKnowgrphCommerceDiscovery");var po=n((e,t={})=>{let r=Zt({requestUrl:e?.url,env:t}).x402PaymentRequired,o=Ha(JSON.stringify(r));return new Response($a(r),{status:402,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*",...o?{"payment-required":o}:{}}})},"buildKnowgrphX402PaymentRequiredResponse");async function uo(e){return po(e.request,e.env||{})}n(uo,"onRequest");async function mo(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=t.headers.get("origin")||"";return r==="OPTIONS"?We(t):r!=="GET"&&r!=="HEAD"?we({ok:!1,error:"Method not allowed"},{status:405,origin:o}):we({ok:!0,models:Jt.map(a=>({model:a,display_name:a}))},{status:200,origin:o})}n(mo,"onRequest");async function ho(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return We(t);if(o!=="POST")return we({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return we({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await yt(t);return await wt({request:t,env:r,pathname:"/responses",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return we({ok:!1,error:i},{status:400,origin:a})}}n(ho,"onRequest");var qe=Object.freeze({researchSourceFiles:"knowgrph_research_source_files",inspectAgentSurface:"knowgrph_inspect_agent_surface"}),er=n(e=>String(e||"").trim(),"normalizeString"),Ba=n(e=>({...e,arguments:Array.isArray(e.arguments)?e.arguments.map(t=>({...t})):void 0,_meta:e._meta&&typeof e._meta=="object"?{...e._meta,tools:Array.isArray(e._meta.tools)?[...e._meta.tools]:void 0}:void 0}),"clonePrompt"),fo=Object.freeze([Object.freeze({name:qe.researchSourceFiles,title:"Research Knowgrph Source Files",description:"Guide an MCP host through read-only Knowgrph Source Files research using search and fetch with citation-ready URLs.",arguments:Object.freeze([Object.freeze({name:"query",description:"Research question or topic to pass to the read-only search tool.",required:!0}),Object.freeze({name:"limit",description:"Optional decimal string for the maximum search results to inspect.",required:!1}),Object.freeze({name:"focus",description:"Optional aspect to prioritize when reading fetched Source Files.",required:!1})]),_meta:Object.freeze({readOnly:!0,tools:Object.freeze(["search","fetch"])})}),Object.freeze({name:qe.inspectAgentSurface,title:"Inspect Knowgrph Agent Surface",description:"Guide an MCP host through read-only inspection of Knowgrph agent, MCP, and MCP Apps readiness metadata.",arguments:Object.freeze([Object.freeze({name:"focus",description:"Optional readiness area to emphasize, such as transport, tools, resources, prompts, retrieval, or app metadata.",required:!1})]),_meta:Object.freeze({readOnly:!0,tools:Object.freeze(["inspect_agent_surface"])})})]),yo=n(()=>fo.map(Ba),"buildKnowgrphAgentReadyPromptContracts"),Ga=n(e=>fo.find(t=>t.name===er(e))||null,"findPromptContract"),bt=n((e,t)=>!e||typeof e!="object"?"":er(e[t]),"readPromptArg"),Wa=n((e,t)=>{let r=bt(e,t);if(!r)throw new Error(`Missing required prompt argument: ${t}`);return r},"readRequiredPromptArg"),go=n(e=>({role:"user",content:{type:"text",text:e}}),"buildPromptMessage"),Fa=n((e={})=>{let t=Wa(e,"query"),r=bt(e,"limit"),o=bt(e,"focus");return[`Research Knowgrph Source Files for: ${t}`,"","Use the MCP server read-only retrieval path:",`1. Call search with query=${JSON.stringify(t)}${r?` and limit=${JSON.stringify(r)}`:""}.`,"2. Select the most relevant returned ids and call fetch for each id before answering.","3. Ground the answer in fetched markdown content and cite the returned result URLs when summarizing.",o?`4. Prioritize this focus: ${o}.`:"","","Do not mutate graph, canvas, workspace, storage, or browser-local state for this research prompt."].filter(Boolean).join(`
`)},"buildSourceFilesResearchPromptText"),za=n((e={})=>{let t=bt(e,"focus");return["Inspect the Knowgrph agent-ready surface through the read-only inspect_agent_surface tool.","","Review health, API catalog, MCP server card, A2A card, agent skills, commerce discovery, and mcpAppsServerReadiness.","For MCP Apps readiness, verify tool/resource linkage, output schema, text fallback, structured content, sandbox/security metadata, no-auth security-scheme mirroring, widget accessibility, prompts, search/fetch retrieval, Streamable HTTP, and local stdio support.",t?`Emphasize this readiness area: ${t}.`:"","","Report checklist ids and evidence from structuredContent. Do not infer readiness from prose alone."].filter(Boolean).join(`
`)},"buildAgentSurfaceInspectionPromptText"),wo=n((e,t={})=>{let r=Ga(e);if(!r)throw new Error(`Unknown Knowgrph MCP prompt: ${er(e)}`);if(r.name===qe.researchSourceFiles)return{description:r.description,messages:[go(Fa(t))]};if(r.name===qe.inspectAgentSurface)return{description:r.description,messages:[go(za(t))]};throw new Error(`Unhandled Knowgrph MCP prompt: ${r.name}`)},"getKnowgrphAgentReadyPrompt");var qa=Object.freeze({sourceFileById:"knowgrph_source_file_by_id"}),Rt="kgdoc://source-file/{id}",So="kgdoc://source-file/",_o="text/markdown",rt=n(e=>String(e||"").trim(),"normalizeString"),bo=n(()=>[{uriTemplate:Rt,name:qa.sourceFileById,title:"Knowgrph Source File By ID",description:"Read a complete published Knowgrph Source File markdown document using a stable kgdoc id returned by search.",mimeType:_o,annotations:{audience:["user","assistant"],priority:.8},_meta:{readOnly:!0,source:"knowgrph-source-files",tool:"fetch"}}],"buildKnowgrphAgentReadyResourceTemplateContracts");var Ro=n(e=>{let t=rt(e);if(!t.startsWith(So))return"";let r=t.slice(So.length);if(!r)return"";try{return decodeURIComponent(r)}catch{return r}},"parseKnowgrphSourceFileResourceUri"),Po=n(({uri:e,sourceFile:t}={})=>{let r=typeof t?.content=="string"?t.content:String(t?.text||"");return{contents:[{uri:rt(e),mimeType:_o,text:r,_meta:{id:rt(t?.id),title:rt(t?.title),url:rt(t?.url),metadata:t?.metadata&&typeof t.metadata=="object"?{...t.metadata}:{}}}]}},"buildKnowgrphSourceFileResourceReadResult");var Pt="io.modelcontextprotocol/ui",Ke="text/html;profile=mcp-app",Co="2026-01-26",Va="knowgrph-mcp-apps-server-readiness/v0.1",pe="ui://knowgrph/agent-ready",or="knowgrph-agent-ready",$e="inspect_agent_surface",Se=Object.freeze(["search","fetch"]),tr=Object.freeze({search:Object.freeze(["ids"]),fetch:Object.freeze(["id","title","content","text"])}),Ao=Object.freeze(Object.values(qe)),xe="streamable-http",Ya=Object.freeze([Object.freeze({type:"noauth"})]),ie=Object.freeze({openAiApps:"openai-apps",claude:"claude-mcp-connector",qwenCode:"qwen-code",kimiCli:"kimi-cli",bytePlusModelArk:"byteplus-modelark",generic:"generic-mcp"}),$=n(e=>String(e||"").trim(),"normalizeString"),Ve=n(e=>$(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),"escapeHtml"),Ja=n(e=>JSON.stringify(e).replace(/</g,"\\u003c"),"safeJsonForInlineScript"),Xa=n(e=>{let t=$(e);if(!t)return"";try{return new URL(t).origin}catch{return""}},"readUrlOrigin"),nr=n(()=>({extensions:{[Pt]:{mimeTypes:[Ke]}}}),"buildKnowgrphMcpAppsCapabilities"),ne=n(e=>Array.isArray(e)?e:[],"arrayFrom"),ar=n(()=>Ya.map(e=>({...e})),"buildKnowgrphMcpNoauthSecuritySchemes"),To=n(e=>(Array.isArray(e)&&e.length?e:ar()).filter(r=>r&&typeof r=="object").map(r=>({...r})),"normalizeSecuritySchemes"),ko=n(e=>ne(e).some(t=>t?.type==="noauth"),"hasNoauthSecurityScheme"),xo=n(e=>Array.isArray(e)?To(e):[],"readSecuritySchemes"),Qa=n(e=>{let t=$(e);return t.includes("window.openai")&&t.includes("openai:set_globals")&&t.includes("toolInput")&&t.includes("toolOutput")&&t.includes("callTool")&&t.includes("request('ui/initialize'")},"hasOpenAiWidgetBridgeHtml"),Eo=n((e,t=[])=>e?.outputSchema?.type==="object"&&t.every(r=>ne(e.outputSchema?.required).includes(r)),"hasToolOutputSchemaFields"),rr=n(e=>e?.annotations?.readOnlyHint===!0&&e?.annotations?.destructiveHint===!1&&e?.annotations?.openWorldHint===!1&&e?.annotations?.idempotentHint===!0,"hasReadOnlyToolAnnotations"),Y=n((e,t,r,o=[])=>({id:e,label:t,ok:r===!0,evidence:ne(o).map($).filter(Boolean)}),"booleanCheck"),sr=n((e={})=>{let t=$(e.baseUrl).replace(/\/+$/,""),r=$(e.serverName)||"knowgrph",o=$(e.mcpUrl)||(t?`${t}/mcp`:"");return{[ie.openAiApps]:{id:ie.openAiApps,label:"OpenAI Apps / ChatGPT",transport:xe,url:o,appResourceUri:pe,appToolName:$e,requiredMetadata:["openai/outputTemplate","openai/widgetAccessible","openai/widgetCSP","openai/widgetDomain"],requiredTools:[$e,...Se]},[ie.claude]:{id:ie.claude,label:"Claude MCP connector",transport:xe,url:o,beta:"mcp-client-2025-11-20",mcp_servers:[{type:"url",url:o,name:r}],tools:[{type:"mcp_toolset",mcp_server_name:r}],requiredTools:Se},[ie.qwenCode]:{id:ie.qwenCode,label:"Qwen Code",transport:"http",url:o,command:`qwen mcp add --transport http ${r} ${o}`,settingsJson:{mcpServers:{[r]:{httpUrl:o,timeout:3e4,trust:!1,includeTools:["search","fetch",$e]}}},requiredTools:Se,primaryFlow:"Call search with a natural-language query, then call fetch with the returned kgdoc id."},[ie.kimiCli]:{id:ie.kimiCli,label:"Kimi CLI",transport:"http",url:o,command:`kimi mcp add --transport http ${r} ${o}`,configFile:"~/.kimi/mcp.json",mcpJson:{mcpServers:{[r]:{url:o,transport:"http"}}},requiredTools:Se,primaryFlow:"Call search with a natural-language query, then call fetch with the returned kgdoc id."},[ie.bytePlusModelArk]:{id:ie.bytePlusModelArk,label:"BytePlus ModelArk Responses API",transport:xe,url:o,apiBaseUrl:"https://ark.ap-southeast.bytepluses.com/api/v3",endpoint:"/responses",requiredHeaders:{"ark-beta-mcp":"true"},tools:[{type:"mcp",server_label:r,server_url:o,require_approval:"never"}],openAiCompatible:{base_url:"https://ark.ap-southeast.bytepluses.com/api/v3",default_headers:{"ark-beta-mcp":"true"},responsesCreate:{model:"<MODELARK_MODEL_OR_ENDPOINT_ID>",tools:[{type:"mcp",server_label:r,server_url:o,require_approval:"never"}]}},invocationScope:"ModelArk Responses API with MCP service and model permissions enabled.",requiredTools:Se,primaryFlow:"Use ModelArk Responses API with the Knowgrph MCP tool entry, then ask the model to call search and fetch."},[ie.generic]:{id:ie.generic,label:"Generic MCP clients",transport:xe,url:o,initialize:{method:"initialize",accept:["application/json","text/event-stream"]},requiredMethods:["initialize","notifications/initialized","tools/list","tools/call"],optionalMethods:["prompts/list","prompts/get","resources/list","resources/templates/list","resources/read"],requiredTools:Se}}},"buildKnowgrphMcpClientSetups"),vo=n((e={})=>{let t=$(e.baseUrl).replace(/\/+$/,""),r=$(e.updatedAt),o=e.mcpServerCard&&typeof e.mcpServerCard=="object"?e.mcpServerCard:{},a=o.capabilities&&typeof o.capabilities=="object"?o.capabilities:{},s=ne(e.tools).length?ne(e.tools):ne(a.tools),i=ne(e.resources).length?ne(e.resources):[At({appUrl:t,updatedAt:r})],c=ne(e.prompts).length?ne(e.prompts):ne(o.prompts),l=ne(e.resourceTemplates).length?ne(e.resourceTemplates):ne(o.resourceTemplates),p=s.filter(S=>S?._meta?.ui?.resourceUri===pe),m=p.find(S=>S?.name===$e)||p[0]||null,f=i.find(S=>S?.uri===pe)||null,A=a.extensions?.[Pt],_=$(o.transport?.url)||(t?`${t}/mcp`:""),x=$(o.surfaceRoles?.publicReadMcpUrl)||_,D=$(o.surfaceRoles?.controlPlaneMcpUrl)||(t?`${t}/control-plane/mcp`:""),K=$(o.transport?.type)||xe,F=$(e.appResourceHtml)||Mo({appUrl:t,updatedAt:r,toolName:m?.name||$e}),ee=e.clientSetups&&typeof e.clientSetups=="object"?e.clientSetups:sr({baseUrl:t,mcpUrl:_,serverName:o.serverInfo?.name}),z=m?.outputSchema&&typeof m.outputSchema=="object",C=!!m?.name,O=z,Q=m?._meta?.["openai/outputTemplate"]===pe,U=Qa(F),re=ko(m?.securitySchemes)&&ko(m?._meta?.securitySchemes),M=rr(m),N=m?._meta?.["openai/widgetAccessible"]===!0,B=c.map(S=>$(S?.name)).filter(Boolean),se=o.capabilities?.prompts&&typeof o.capabilities.prompts=="object",de=Ao.every(S=>B.includes(S)),ye=l.map(S=>$(S?.uriTemplate)).filter(Boolean),P=ye.includes(Rt),w=Object.fromEntries(Se.map(S=>[S,s.find(q=>q?.name===S)||null])),y=Se.every(S=>{let q=w[S];return rr(q)&&Eo(q,tr[S])}),d=ee[ie.qwenCode],h=d?.transport==="http"&&d?.url===_&&d?.settingsJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.httpUrl===_&&String(d?.command||"").includes("--transport http")&&String(d?.command||"").includes(_),g=ee[ie.kimiCli],b=g?.transport==="http"&&g?.url===_&&g?.mcpJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.url===_&&g?.mcpJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.transport==="http"&&String(g?.command||"").includes("kimi mcp add --transport http")&&String(g?.command||"").includes(_),T=ee[ie.bytePlusModelArk],V=T?.transport===xe&&T?.url===_&&T?.endpoint==="/responses"&&T?.requiredHeaders?.["ark-beta-mcp"]==="true"&&ne(T?.tools).some(S=>S?.type==="mcp"&&S?.server_label===(o.serverInfo?.name||"knowgrph")&&S?.server_url===_&&S?.require_approval==="never")&&T?.openAiCompatible?.responsesCreate?.tools?.some(S=>S?.type==="mcp"&&S?.server_label===(o.serverInfo?.name||"knowgrph")&&S?.server_url===_&&S?.require_approval==="never"),H=[Y("app-tool-resource-link","App tool is linked to the UI resource",p.length>0,p.map(S=>S.name)),Y("output-schema","App tool exposes an output schema",z,[m?.name]),Y("text-fallback","Tool result keeps a text fallback for non-UI hosts",C,[m?.name]),Y("structured-content","Tool result returns structured content for the View",O,[m?.name]),Y("resource-descriptor","MCP resource descriptor uses the MCP Apps MIME type",f?.mimeType===Ke,[f?.uri]),Y("resource-security-meta","Resource declares UI sandbox metadata",f?._meta?.ui?.prefersBorder===!0&&!!f?._meta?.ui?.csp,[f?.uri]),Y("openai-output-template","App tool exposes the OpenAI output template metadata key",Q,[m?.name]),Y("openai-widget-bridge","App resource supports the OpenAI Apps widget bridge",U,["window.openai","openai:set_globals"]),Y("tool-security-schemes","App tool exposes no-auth securitySchemes and mirrors them in _meta",re,[m?.name]),Y("tool-impact-annotations","App tool exposes complete read-only impact annotations",M,[m?.name]),Y("widget-accessible","App tool allows the widget bridge to call tools",N,[m?.name]),Y("prompt-discovery","Server exposes MCP prompt templates for multi-host guidance",se&&de,B),Y("source-file-resource-template","Server exposes a dynamic Source Files resource template",P,ye),Y("deep-research-search-fetch","Server exposes read-only search and fetch tools",y,Se),Y("qwen-code-http-client-setup","Server advertises Qwen Code HTTP MCP setup",h,[d?.command]),Y("kimi-cli-http-client-setup","Server advertises Kimi CLI HTTP MCP setup",b,[g?.command]),Y("byteplus-modelark-responses-mcp-setup","Server advertises BytePlus ModelArk Responses API MCP setup",V,[T?.apiBaseUrl,T?.endpoint]),Y("extension-capability","Server advertises the MCP Apps extension capability",A?.mimeTypes?.includes(Ke),[Pt]),Y("streamable-http-transport","Server exposes a stateless Streamable HTTP JSON-RPC transport",!!_&&K===xe,[_,K]),Y("stdio-transport","Repo-local MCP server supports stdio host configuration",e.localStdio!==!1,["node mcp/server.js"])],L=H.every(S=>S.ok);return{schemaVersion:Va,ready:L,updatedAt:r,app:{name:or,protocolVersion:Co,resourceUri:pe,resourceMimeType:Ke,extensionId:Pt},tool:{name:m?.name||$e,title:m?.title||"Inspect Agent Surface",resourceUri:m?._meta?.ui?.resourceUri||pe,visibility:ne(m?._meta?.ui?.visibility).length?m._meta.ui.visibility:["model","app"],readOnly:m?.annotations?.readOnlyHint===!0,destructive:m?.annotations?.destructiveHint===!0,openWorld:m?.annotations?.openWorldHint===!0,idempotent:m?.annotations?.idempotentHint===!0,annotationsReady:M,hasOutputSchema:!!z,textFallback:C,structuredContent:O,openAiOutputTemplate:Q,openAiWidgetBridge:U,securitySchemes:xo(m?.securitySchemes),mirroredSecuritySchemes:xo(m?._meta?.securitySchemes),widgetAccessible:N},resource:{uri:f?.uri||pe,name:f?.name||or,mimeType:f?.mimeType||Ke,prefersBorder:f?._meta?.ui?.prefersBorder===!0,domain:$(f?._meta?.ui?.domain),csp:f?._meta?.ui?.csp||{},openAiWidgetBridge:U},retrieval:{mode:"deep-research-search-fetch",requiredTools:Se,tools:Se.map(S=>{let q=w[S];return{name:S,readOnly:q?.annotations?.readOnlyHint===!0,destructive:q?.annotations?.destructiveHint===!0,openWorld:q?.annotations?.openWorldHint===!0,idempotent:q?.annotations?.idempotentHint===!0,annotationsReady:rr(q),requiredOutputFields:tr[S],outputSchemaReady:Eo(q,tr[S])}})},prompts:{requiredPrompts:Ao,names:B,capability:!!se,ready:se&&de},resourceTemplates:{requiredTemplates:[Rt],uriTemplates:ye,ready:P},clients:ee,transports:[{id:"pages-http-jsonrpc",type:K,url:_,stateless:!0,serverFactory:!0},{id:"local-stdio-jsonrpc",type:"stdio",command:"node mcp/server.js",stateless:!1,serverFactory:!0}],dataModel:{source:"inspect_agent_surface.structuredContent",categories:[{id:"discovery",label:"Discovery metadata",count:["health","apiCatalog","openApi","mcpServerCard","agentCard","agentSkills"].length},{id:"commerce",label:"Commerce discovery",count:["acpDiscovery","ucpProfile","mppOpenApi"].length},{id:"mcp-apps",label:"MCP Apps server bindings",count:H.length}],renderMode:"structured-summary-with-json-fallback"},onboarding:{publicReadMcpUrl:x,controlPlaneMcpUrl:D,controlPlaneCondition:"Add the control plane only when the host can preserve MCP session state and needs live /, #, @ grammar lookup.",cheapestProofPath:"Use the source-side README.md quick start or docs/documents/knowgrph-superagent-harness.md in the knowgrph repo before hosted setup.",steps:[{order:1,label:"Install public MCP first",action:x?`Install ${x}.`:"Install the public read-only MCP endpoint first."},{order:2,label:"Add control plane only when session-capable",action:D?`Add ${D} only when the host can preserve MCP session state and needs live /, #, @ grammar lookup.`:"Add the control plane only when the host can preserve MCP session state and needs live /, #, @ grammar lookup."},{order:3,label:"Use the cheapest proof path before hosted setup",action:"Run the source-side README.md quick start or docs/documents/knowgrph-superagent-harness.md first."}]},checklist:H}},"buildKnowgrphMcpAppsServerReadiness"),Oo=n((e={})=>{let t=$(e.resourceUri)||pe;return{securitySchemes:To(e.securitySchemes),ui:{resourceUri:t,visibility:Array.isArray(e.visibility)&&e.visibility.length?e.visibility:["model","app"]},"openai/outputTemplate":t,"openai/widgetAccessible":e.widgetAccessible!==!1,"openai/toolInvocation/invoking":$(e.invoking)||"Inspecting Knowgrph.","openai/toolInvocation/invoked":$(e.invoked)||"Knowgrph is ready."}},"buildKnowgrphMcpAppsToolMeta"),Io=Object.freeze({type:"object",additionalProperties:!0,required:["baseUrl","healthUrl","mcpUrl"],properties:{baseUrl:{type:"string"},healthUrl:{type:"string"},mcpUrl:{type:"string"},apiCatalogUrl:{type:"string"},openApiUrl:{type:"string"},mcpServerCardUrl:{type:"string"},agentCardUrl:{type:"string"},agentSkillsUrl:{type:"string"},commerceUrls:{type:"object",additionalProperties:{type:"string"}},health:{type:"object",additionalProperties:!0},apiCatalog:{type:"object",additionalProperties:!0},openApi:{type:"object",additionalProperties:!0},mcpServerCard:{type:"object",additionalProperties:!0},agentCard:{type:"object",additionalProperties:!0},agentSkills:{type:"object",additionalProperties:!0},commerce:{type:"object",additionalProperties:!0},mcpAppsServerReadiness:{type:"object",additionalProperties:!0}}}),At=n((e={})=>{let t=$(e.appUrl),r=$(e.updatedAt),o=$(e.domain)||Xa(t),a={connectDomains:[],resourceDomains:[],frameDomains:[],baseUriDomains:[]};return{uri:pe,name:or,description:["Interactive MCP Apps view for the existing Knowgrph agent-ready surface.",t?`App URL: ${t}`:"",r?`Updated: ${r}`:""].filter(Boolean).join(" "),mimeType:Ke,_meta:{ui:{csp:a,...o?{domain:o}:{},prefersBorder:!0},"openai/widgetDescription":"Interactive Knowgrph agent-ready server-readiness view.","openai/widgetPrefersBorder":!0,...o?{"openai/widgetDomain":o}:{},"openai/widgetCSP":{connect_domains:a.connectDomains,resource_domains:a.resourceDomains,frame_domains:a.frameDomains}}}},"buildKnowgrphMcpAppsResourceDescriptor"),Mo=n((e={})=>{let t=$(e.appUrl),r=$(e.updatedAt),o=$(e.toolName)||$e,a=t?`${t.replace(/\/+$/,"")}/mcp`:"",s=t?`${t.replace(/\/+$/,"")}/control-plane/mcp`:"",i=Array.isArray(e.toolNames)?e.toolNames.map($).filter(Boolean):[o],c={appUrl:t,updatedAt:r,resourceUri:pe,toolName:o,toolNames:i,protocolVersion:Co,onboarding:{publicReadMcpUrl:a,controlPlaneMcpUrl:s,cheapestProofPath:"Use the source-side README.md quick start or docs/documents/knowgrph-superagent-harness.md before hosted setup."}};return`<!doctype html>
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
    .readiness ol { display: grid; gap: 6px; margin: 8px 0 0; padding-left: 18px; }
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
        ${t?`<a href="${Ve(t)}" target="_blank" rel="noreferrer">Open</a>`:""}
      </nav>
    </header>
    <section aria-label="MCP app state">
      <dl>
        <dt>Resource</dt><dd>${Ve(pe)}</dd>
        <dt>Tool</dt><dd>${Ve(o)}</dd>
        <dt>Host</dt><dd id="host">Not connected.</dd>
        <dt>Updated</dt><dd>${Ve(r||"runtime")}</dd>
        <dt>Status</dt><dd id="status" class="status">Initializing MCP Apps host bridge.</dd>
      </dl>
    </section>
    <section aria-label="Fastest path">
      <section id="onboarding" class="readiness">
        <strong>Fastest Path</strong>
        <ol>
          <li>${Ve(a?`Install ${a}.`:"Install the public MCP endpoint first.")}</li>
          <li>${Ve(s?`Add ${s} only when the host can preserve MCP session state and needs live /, #, @ grammar lookup.`:"Add the control plane only when the host can preserve MCP session state and needs live /, #, @ grammar lookup.")}</li>
          <li>Use the source-side <code>README.md</code> quick start or <code>docs/documents/knowgrph-superagent-harness.md</code> before hosted setup.</li>
        </ol>
      </section>
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
    const boot = ${Ja(c)};
    const statusEl = document.getElementById('status');
    const hostEl = document.getElementById('host');
    const onboardingEl = document.getElementById('onboarding');
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
    const renderOnboarding = (payload) => {
      onboardingEl.replaceChildren();
      const onboarding = payload && payload.onboarding && typeof payload.onboarding === 'object'
        ? payload.onboarding
        : boot.onboarding;
      appendText(onboardingEl, 'strong', 'Fastest Path');
      const list = document.createElement('ol');
      const steps = Array.isArray(onboarding && onboarding.steps) && onboarding.steps.length
        ? onboarding.steps
        : [
          { action: onboarding && onboarding.publicReadMcpUrl ? 'Install ' + onboarding.publicReadMcpUrl + '.' : 'Install the public MCP endpoint first.' },
          { action: onboarding && onboarding.controlPlaneMcpUrl ? 'Add ' + onboarding.controlPlaneMcpUrl + ' only when the host can preserve MCP session state and needs live /, #, @ grammar lookup.' : 'Add the control plane only when the host can preserve MCP session state and needs live /, #, @ grammar lookup.' },
          { action: onboarding && onboarding.cheapestProofPath ? onboarding.cheapestProofPath : 'Use the source-side README.md quick start or docs/documents/knowgrph-superagent-harness.md before hosted setup.' },
        ];
      for (const step of steps) {
        appendText(list, 'li', step && step.action ? String(step.action) : 'Follow the fastest onboarding path.');
      }
      onboardingEl.appendChild(list);
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
      renderOnboarding(payload);
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
</html>`},"buildKnowgrphMcpAppsHtml"),ir=n((e={})=>{let t=At(e);return{contents:[{uri:t.uri,mimeType:Ke,text:Mo(e),_meta:t._meta}]}},"buildKnowgrphMcpAppsResourceReadResult");var u=Object.freeze({search:"search",fetch:"fetch",listSourceFiles:"list_source_files",readSourceFile:"read_source_file",readSharedDocument:"read_shared_document",inspectSharedDocumentStructure:"inspect_shared_document_structure",inspectLocalSettingsChatReadiness:"inspect_local_settings_chat_readiness",inspectLocalMainPanelState:"inspect_local_mainpanel_state",inspectLocalEditorWorkspaceState:"inspect_local_editor_workspace_state",inspectLocalChatPipelineState:"inspect_local_chat_pipeline_state",inspectLocalMainPanelChatCanvasPipeline:"inspect_local_mainpanel_chat_canvas_pipeline",inspectLocalWorkspaceDocument:"inspect_local_workspace_document",inspectLocalCanvasTopology:"inspect_local_canvas_topology",inspectLocalCanvasSnapshot:"inspect_local_canvas_snapshot",inspectLocal3dCameraPose:"inspect_local_3d_camera_pose",inspectLocal3dLayoutPositions:"inspect_local_3d_layout_positions",inspectLocal2dZoomViewport:"inspect_local_2d_zoom_viewport",inspectLocalSourceFilesSnapshot:"inspect_local_source_files_snapshot",inspectAgentSurface:"inspect_agent_surface"}),Za="knowgrph";var es=n(()=>Object.freeze({readOnlyHint:!0,destructiveHint:!1,openWorldHint:!1,idempotentHint:!0}),"buildReadOnlyToolAnnotations"),J=es(),ts=Object.freeze({type:"object",additionalProperties:!0,required:["ids","results"],properties:{ids:{type:"array",items:{type:"string"}},results:{type:"array",items:{type:"object",additionalProperties:!0,required:["id","title","url"],properties:{id:{type:"string"},title:{type:"string"},url:{type:"string"},snippet:{type:"string"},workspaceId:{type:"string"},canonicalPath:{type:"string"}}}}}}),rs=Object.freeze({type:"object",additionalProperties:!0,required:["id","title","content","text","url"],properties:{id:{type:"string"},title:{type:"string"},content:{type:"string"},text:{type:"string"},url:{type:"string"},metadata:{type:"object",additionalProperties:!0}}}),X=n((e,t=Za)=>`${String(t||"").trim()}.${String(e||"").trim()}`,"buildKnowgrphWebMcpToolName"),cr=n((e={})=>{let t=String(e.defaultWorkspaceId||"").trim(),r=e.includeBrowserOnlyTools===!0;return[{name:u.search,webName:X(u.search),title:"Search Knowgrph Source Files",description:"Use this when an MCP host needs to search published Knowgrph Source Files and return stable document IDs for the `fetch` tool. Call this first for OpenAI Deep Research-style retrieval, Claude, Qwen Code, Kimi CLI, BytePlus ModelArk, and generic MCP clients.",inputSchema:{type:"object",additionalProperties:!1,required:["query"],properties:{query:{type:"string"},limit:{type:"number",default:10}}},outputSchema:ts,annotations:J},{name:u.fetch,webName:X(u.fetch),title:"Fetch Knowgrph Source File",description:"Use this when an MCP host needs the complete published Knowgrph Source File for an ID returned by `search`. Returns markdown as both `content` and `text` for OpenAI, Claude, Qwen Code, Kimi CLI, BytePlus ModelArk, and generic MCP clients.",inputSchema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"string"}}},outputSchema:rs,annotations:J},{name:u.listSourceFiles,webName:X(u.listSourceFiles),title:"List Source Files",description:"Use this when an MCP host needs the published Knowgrph Source Files index as markdown.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:u.readSourceFile,webName:X(u.readSourceFile),title:"Read Source File",description:"Use this when an MCP host knows a published Knowgrph canonical path and needs that Editor Workspace markdown content. Defaults to the canonical docs workspace when workspaceId is omitted.",inputSchema:{type:"object",additionalProperties:!1,required:["canonicalPath"],properties:{canonicalPath:{type:"string"},workspaceId:t?{type:"string",default:t}:{type:"string"}}},annotations:J},{name:u.readSharedDocument,webName:X(u.readSharedDocument),title:"Read Shared Document",description:"Use this when an MCP host has a Knowgrph share token or public Knowgrph share/document URL and needs the published markdown content.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:J},{name:u.inspectSharedDocumentStructure,webName:X(u.inspectSharedDocumentStructure),title:"Inspect Shared Document Structure",description:"Use this when an MCP host has a Knowgrph share token or public Knowgrph share/document URL and needs frontmatter/body structure without mutating the document.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:J},...r?[{name:u.inspectLocalSettingsChatReadiness,webName:X(u.inspectLocalSettingsChatReadiness),title:"Inspect Local Settings Chat Readiness",description:"Inspect the active browser-local Knowgrph SettingsView chat readiness state for MainPanel MCP, Integrations, and Commerce, including provider, routing, and model discovery status.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:u.inspectLocalMainPanelState,webName:X(u.inspectLocalMainPanelState),title:"Inspect Local MainPanel State",description:"Inspect the active browser-local Knowgrph MainPanel tab, search, and shared action state for MCP, Integrations, and Commerce readiness.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:u.inspectLocalEditorWorkspaceState,webName:X(u.inspectLocalEditorWorkspaceState),title:"Inspect Local Editor Workspace State",description:"Inspect the active browser-local Knowgrph Editor Workspace and Markdown pane state, including pane visibility and live draft/frontmatter structure.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:u.inspectLocalChatPipelineState,webName:X(u.inspectLocalChatPipelineState),title:"Inspect Local Chat Pipeline State",description:"Inspect the active browser-local Knowgrph FloatingPanel chat runtime, including streaming, workspace follow path, and LLM-to-workspace pipeline state.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:u.inspectLocalMainPanelChatCanvasPipeline,webName:X(u.inspectLocalMainPanelChatCanvasPipeline),title:"Inspect Local MainPanel Chat Canvas Pipeline",description:"Inspect the active browser-local Knowgrph E2E readiness path from MainPanel MCP, Integrations, and Commerce through FloatingPanel Chat, workspace markdown/frontmatter, and canvas topology.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:u.inspectLocalWorkspaceDocument,webName:X(u.inspectLocalWorkspaceDocument),title:"Inspect Local Workspace Document",description:"Inspect the active browser-local Knowgrph workspace markdown document structure without reading published storage routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:u.inspectLocalCanvasTopology,webName:X(u.inspectLocalCanvasTopology),title:"Inspect Local Canvas Topology",description:"Inspect the active browser-local Knowgrph canvas topology summary from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:u.inspectLocalCanvasSnapshot,webName:X(u.inspectLocalCanvasSnapshot),title:"Inspect Local Canvas Snapshot",description:"Inspect the active browser-local Knowgrph canvas SVG snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:u.inspectLocal3dCameraPose,webName:X(u.inspectLocal3dCameraPose),title:"Inspect Local 3D Camera Pose",description:"Inspect the active browser-local Knowgrph 3D camera pose from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:u.inspectLocal3dLayoutPositions,webName:X(u.inspectLocal3dLayoutPositions),title:"Inspect Local 3D Layout Positions",description:"Inspect the active browser-local Knowgrph 3D layout positions from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:u.inspectLocal2dZoomViewport,webName:X(u.inspectLocal2dZoomViewport),title:"Inspect Local 2D Zoom Viewport",description:"Inspect the active browser-local Knowgrph 2D zoom and viewport state from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:u.inspectLocalSourceFilesSnapshot,webName:X(u.inspectLocalSourceFilesSnapshot),title:"Inspect Local Source Files Snapshot",description:"Inspect the active browser-local Knowgrph Source Files runtime snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J}]:[],{name:u.inspectAgentSurface,webName:X(u.inspectAgentSurface),title:"Inspect Agent Surface",description:"Use this when an MCP Apps-capable host or generic MCP client needs to inspect Knowgrph agent-ready discovery, MCP Apps readiness, OpenAPI, and skill metadata.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},outputSchema:Io,annotations:J,_meta:Oo()}].map(a=>({...a,securitySchemes:Array.isArray(a.securitySchemes)&&a.securitySchemes.length?a.securitySchemes:ar()}))},"buildKnowgrphAgentReadyToolContracts");var No=n((e={})=>{let t=String(e.baseUrl||"").replace(/\/+$/,""),r=t?new URL(`${t}/`).origin:"";return{...{baseUrl:t,healthUrl:`${t}/health`,mcpUrl:`${t}/mcp`,controlPlaneMcpUrl:`${t}/control-plane/mcp`,apiCatalogUrl:`${t}/.well-known/api-catalog`,openApiUrl:`${t}/.well-known/openapi.json`,mcpServerCardUrl:`${t}/.well-known/mcp/server-card.json`,agentCardUrl:`${t}/.well-known/agent-card.json`,agentSkillsUrl:`${t}/.well-known/agent-skills/index.json`,commerceUrls:{acpDiscoveryUrl:`${r}/.well-known/acp.json`,ucpProfileUrl:`${r}/.well-known/ucp`,mppOpenApiUrl:`${r}/openapi.json`,x402PaymentRequiredUrl:`${r}/api/payments/commerce/x402`},health:e.health,apiCatalog:e.apiCatalog,openApi:e.openApi,mcpServerCard:e.mcpServerCard,agentCard:e.agentCard,agentSkills:e.agentSkills,commerce:e.commerce},mcpAppsServerReadiness:vo({baseUrl:t,updatedAt:e.updatedAt||e.health?.updatedAt||"",mcpServerCard:e.mcpServerCard})}},"buildAgentSurfaceInspectionPayload");var lr=n((e={})=>{let t=e.toolNames||{},r=String(e.defaultWorkspaceId||"").trim(),o=e.buildStorageDocPath,a=e.fetchSourceFilesIndexResponse,s=e.fetchStorageMarkdownResponse,i=e.resolveSharedDocumentInput,c=e.inspectSharedDocumentStructure,l=e.buildAgentSurfaceInspection,p=n(d=>String(d||"").trim(),"normalizeString"),m=p(e.publicBaseUrl).replace(/\/+$/,""),f=n(d=>String(d||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),A=n(d=>{try{return decodeURIComponent(String(d||""))}catch{return String(d||"")}},"safeDecodeURIComponent"),_=n(d=>{let h=p(d).split("/").filter(Boolean);return h[h.length-1]||p(d)||"Knowgrph Source File"},"titleFromCanonicalPath"),x=n((d,h=220)=>{let g=p(d).replace(/\s+/g," ");return g.length<=h?g:`${g.slice(0,h-1)}\u2026`},"truncateSnippet"),D=Math.max(0,Math.min(50,Number.isFinite(Number(e.searchContentScanMax))?Math.floor(Number(e.searchContentScanMax)):32)),K=Math.max(1e3,Math.min(5e4,Number.isFinite(Number(e.searchContentMaxChars))?Math.floor(Number(e.searchContentMaxChars)):24e3)),F=Math.max(1,Math.min(8,Number.isFinite(Number(e.searchContentConcurrency))?Math.floor(Number(e.searchContentConcurrency)):4)),ee=new Set(["a","an","and","are","as","at","be","by","can","do","does","for","from","how","i","in","is","it","of","on","or","the","this","to","what","when","where","which","who","why","with"]),z=n(d=>p(d).toLowerCase().split(/[^a-z0-9:_./-]+/).map(p).filter(h=>h&&!ee.has(h)),"tokenizeSearchQuery"),C=n((d,h)=>h.reduce((g,b)=>{let T=String(d||""),V=0,H=0;for(;H<T.length;){let L=T.indexOf(b,H);if(L<0)break;V+=1,H=L+Math.max(1,b.length)}return g+V},0),"countTokenHits"),O=n((d,h,g=260)=>{let b=p(d).replace(/\s+/g," ");if(!b)return"";let T=b.toLowerCase(),V=h.map(S=>T.indexOf(S)).filter(S=>S>=0).sort((S,q)=>S-q)[0];if(!Number.isFinite(V))return x(b,g);let H=Math.max(0,V-Math.floor(g/3)),L=Math.min(b.length,H+g);return`${H>0?"\u2026":""}${b.slice(H,L)}${L<b.length?"\u2026":""}`},"snippetAroundSearchHit"),Q=n(async(d,h)=>{let g=new Array(d.length),b=0,T=Array.from({length:Math.min(F,d.length)},async()=>{for(;b<d.length;){let V=b;b+=1,g[V]=await h(d[V],V)}});return await Promise.all(T),g},"runBoundedConcurrent"),U=n(({workspaceId:d="",canonicalPath:h=""}={})=>{let g=o(p(h),p(d));return m?`${m}${g}`:g},"buildPublicDocUrl");if(!!(t.search||t.fetch||t.listSourceFiles||t.readSourceFile||t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof o!="function")throw new Error("buildStorageDocPath is required");if((t.search||t.listSourceFiles)&&typeof a!="function")throw new Error("fetchSourceFilesIndexResponse is required");if((t.fetch||t.readSourceFile||t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof s!="function")throw new Error("fetchStorageMarkdownResponse is required");if((t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof i!="function")throw new Error("resolveSharedDocumentInput is required");if(t.inspectSharedDocumentStructure&&typeof c!="function")throw new Error("inspectSharedDocumentStructure is required");if(t.inspectAgentSurface&&typeof l!="function")throw new Error("buildAgentSurfaceInspection is required");let M=n(async(d={})=>{let h=p(d.canonicalPath);if(!h)throw new Error("canonicalPath is required");let g=p(d.workspaceId),b=await s(o(h,g));if(!b.ok)throw new Error(`read_source_file failed with ${b.status}`);return{workspaceId:g||r,canonicalPath:h,markdown:await b.text()}},"readSourceFile"),N=n(async(d={})=>{let h=i(d);if(!h)throw new Error("shareToken or shareUrl must resolve to a published Knowgrph document");let g=p(h.workspaceId),b=p(h.canonicalPath),T=await s(o(b,g));if(!T.ok)throw new Error(`read_shared_document failed with ${T.status}`);return{workspaceId:g||r,canonicalPath:b,markdown:await T.text()}},"readSharedDocument"),B=n(async(d={})=>{let h=await N(d);return c(h)},"inspectSharedDocument"),se=n(({workspaceId:d="",canonicalPath:h=""}={})=>`kgdoc:${encodeURIComponent(p(d))}:${encodeURIComponent(p(h))}`,"buildSearchFetchId"),de=n(d=>{let h=p(d),g=h.match(/^kgdoc:([^:]*):(.*)$/);if(g)return{workspaceId:A(g[1]||""),canonicalPath:A(g[2]||"")};let b=h.match(/\/(?:api\/storage\/doc|knowgrph\/doc)\/([^/\s)]+)\/([^\s)]+)$/);if(b)return{workspaceId:A(b[1]||""),canonicalPath:A(b[2]||"")};let T=h.match(/\/(?:api\/storage\/doc-default|knowgrph\/doc-default)\/([^\s)]+)$/);return T?{workspaceId:"",canonicalPath:A(T[1]||"")}:null},"parseSearchFetchId"),ye=n(d=>{let h=f(d).split(`
`),g=new Map,b=n(({workspaceId:T="",canonicalPath:V="",line:H=""}={})=>{let L=p(V);if(!L)return;let S=p(T),q=se({workspaceId:S,canonicalPath:L});g.has(q)||g.set(q,{id:q,title:_(L),url:U({workspaceId:S,canonicalPath:L}),snippet:x(H||L),workspaceId:S||r,canonicalPath:L})},"addEntry");for(let T of h){let V=/\/(?:api\/storage\/doc|knowgrph\/doc)\/([^/\s)\]]+)\/([^\s)\]]+)/g,H=/\/(?:api\/storage\/doc-default|knowgrph\/doc-default)\/([^\s)\]]+)/g;for(let L of T.matchAll(V))b({workspaceId:A(L[1]||""),canonicalPath:A(L[2]||""),line:T});for(let L of T.matchAll(H))b({workspaceId:"",canonicalPath:A(L[1]||""),line:T})}return Array.from(g.values())},"extractSearchEntriesFromSourceFilesIndex"),P=n(async(d={})=>{let h=p(d.query);if(!h)throw new Error("query is required");let g=Math.max(1,Math.min(25,Number.isFinite(Number(d.limit))?Math.floor(Number(d.limit)):10)),b=await a();if(!b.ok)throw new Error(`search failed with ${b.status}`);let T=await b.text(),V=ye(T),H=z(h),L=H.join(" "),S=V.map(j=>{let te=`${j.title}
${j.canonicalPath}
${j.workspaceId}
${j.snippet}`.toLowerCase(),ht=L&&te.includes(L)?H.length*4:0,gt=H.reduce((ft,Yt)=>ft+(te.includes(Yt)?2:0),0);return{...j,score:ht+gt}}),q=S.slice().sort((j,te)=>te.score-j.score||j.title.localeCompare(te.title)).slice(0,D).filter(j=>/\.md(?:$|[?#])/i.test(j.canonicalPath)),mt=new Map;await Q(q,async j=>{let te=de(j.id);if(!te?.canonicalPath)return null;try{let ht=await s(o(te.canonicalPath,te.workspaceId));if(!ht.ok)return null;let gt=(await ht.text()).slice(0,K),ft=gt.toLowerCase(),Yt=L&&ft.includes(L)?H.length*6:0,Ra=C(ft,H),jr=Yt+Ra;if(jr<=0)return null;mt.set(j.id,{score:jr,snippet:O(gt,H)})}catch{return null}return null});let Vt=S.map(j=>{let te=mt.get(j.id);return{...j,score:j.score+(te?.score||0),snippet:te?.snippet||j.snippet}}).filter(j=>j.score>0).sort((j,te)=>te.score-j.score||j.title.localeCompare(te.title)).slice(0,g).map(({score:j,...te})=>te);return{ids:Vt.map(j=>j.id),results:Vt,query:h,totalResults:Vt.length}},"searchSourceFiles"),w=n(async(d={})=>{let h=de(d.id);if(!h?.canonicalPath)throw new Error("id must be a stable Knowgrph Source File id returned by search");let g=await M(h),b=U(h);return{id:se(h),title:_(g.canonicalPath),content:g.markdown,text:g.markdown,url:b,metadata:{workspaceId:g.workspaceId,canonicalPath:g.canonicalPath,contentType:"text/markdown",source:"knowgrph-source-files"}}},"fetchSourceFileBySearchId"),y={};return t.search&&(y[t.search]=P),t.fetch&&(y[t.fetch]=w),t.listSourceFiles&&(y[t.listSourceFiles]=async()=>{let d=await a();if(!d.ok)throw new Error(`list_source_files failed with ${d.status}`);return{workspaceId:r,markdownIndex:await d.text()}}),t.readSourceFile&&(y[t.readSourceFile]=M),t.readSharedDocument&&(y[t.readSharedDocument]=N),t.inspectSharedDocumentStructure&&(y[t.inspectSharedDocumentStructure]=B),t.inspectAgentSurface&&(y[t.inspectAgentSurface]=async()=>l()),y},"createPublishedAgentReadyToolExecutors"),os=n(e=>`((...args) => {
  const n = (value) => value
  const __name = (value) => value
  return (${Function.prototype.toString.call(e)})(...args)
})`,"createBrowserSafeFunctionSource"),Uo=os(lr);var Lo=n((e={})=>{let t=n(P=>String(P||"").trim(),"normalizeString"),r=n(P=>String(P||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),o=n(P=>{let w=String(P||"").match(/^\s*/);return w?w[0].length:0},"readIndent"),a=n(P=>/^[A-Za-z0-9_:@-]+\s*:/.test(t(P)),"isYamlKeyLine"),s=n(P=>r(P).split(`
`),"splitLines"),i=n(P=>{let w=s(P),y=0;for(;y<w.length&&!t(w[y]);)y+=1;if(t(w[y])!=="---")return null;for(let d=y+1;d<w.length;d+=1)if(t(w[d])==="---")return{frontmatter:w.slice(y+1,d).join(`
`),body:w.slice(d+1).join(`
`)};return null},"extractLeadingFrontmatter"),c=n(P=>{let w=[];for(let y of s(P)){if(!t(y)||o(y)!==0)continue;let d=y.match(/^([A-Za-z0-9_:@-]+)\s*:/);d?.[1]&&w.push(d[1])}return Array.from(new Set(w)).sort((y,d)=>y.localeCompare(d))},"extractTopLevelFrontmatterKeys"),l=n((P,w)=>{let y=s(P),d=`${w}:`;for(let h=0;h<y.length;h+=1){let g=y[h],b=t(g);if(!b.startsWith(d))continue;let T=o(g),V=b.slice(d.length).trim();if(V)return{indent:T,inlineValue:V,blockLines:[],blockText:""};let H=[];for(let L=h+1;L<y.length;L+=1){let S=y[L],q=t(S),mt=o(S);if(q&&mt<=T&&a(S))break;H.push(S)}return{indent:T,inlineValue:"",blockLines:H,blockText:H.join(`
`)}}return null},"extractYamlBlock"),p=n(P=>{let w=[];for(let y of s(P)){let d=t(y);if(!d||d.startsWith("- "))continue;let h=d.match(/^([A-Za-z0-9_:@-]+)\s*:/);h?.[1]&&w.push(h[1])}return Array.from(new Set(w)).sort((y,d)=>y.localeCompare(d))},"extractNestedYamlKeys"),m=n(P=>{let w=s(P).filter(h=>t(h));if(!w.length)return[];let y=Math.min(...w.map(o)),d=[];for(let h of w){if(o(h)!==y)continue;let g=t(h);if(g.startsWith("- "))continue;let b=g.match(/^([A-Za-z0-9_:@-]+)\s*:/);b?.[1]&&d.push(b[1])}return Array.from(new Set(d)).sort((h,g)=>h.localeCompare(g))},"extractDirectYamlKeys"),f=n(P=>{let w=t(P);if(!w.startsWith("[")||!w.endsWith("]"))return null;let y=w.slice(1,-1).trim();return y?y.split(",").map(d=>t(d)).filter(Boolean).length:0},"countInlineSequenceEntries"),A=n(P=>{let w=t(P);return w.startsWith('"')&&w.endsWith('"')||w.startsWith("'")&&w.endsWith("'")?w.slice(1,-1):w},"cleanYamlScalar"),_=n(P=>{let w=t(P);if(!w.startsWith("[")||!w.endsWith("]"))return null;let y=w.slice(1,-1).trim();return y?y.split(",").map(d=>A(d)).filter(Boolean):[]},"extractInlineSequenceValues"),x=n((P,w)=>{let y=l(P,w);if(!y)return[];if(y.inlineValue)return _(y.inlineValue)||[];let d=[],h=y.indent+2;for(let g of y.blockLines){let b=t(g);o(g)===h&&b.startsWith("- ")&&d.push(A(b.slice(2)))}return d},"extractYamlSequenceValues"),D=n((P,w)=>{let y=s(P),d=`${w}:`;for(let h of y){let g=t(h);if(g.startsWith(d))return A(g.slice(d.length))}return null},"extractTopLevelScalarValue"),K=n((P,w)=>{let y=l(P,w);if(!y)return null;if(y.inlineValue)return f(y.inlineValue);let d=0,h=y.indent+2;for(let g of y.blockLines)t(g)&&o(g)===h&&/^\s*-\s+/.test(g)&&(d+=1);return d},"countYamlSequenceEntries"),F=n(P=>{let w=[];for(let y of s(P)){let d=y.match(/^(#{1,6})\s+(.+?)\s*$/);d?.[2]&&w.push({depth:d[1].length,text:t(d[2])})}return w},"extractMarkdownHeadings"),ee=t(e.workspaceId),z=t(e.canonicalPath),C=r(e.markdown),O=i(C),Q=O?c(O.frontmatter):[],U=O?l(O.frontmatter,"flow"):null,re=U?p(U.blockText):[],M=O?l(O.frontmatter,"main_panel_integrations_demo"):null,N=O?l(O.frontmatter,"superagent_harness_demo"):null,B=N?l(N.blockText,"runtime_surfaces"):null,se=new Set(["kg:subgraphs","clusters","groups","layers"]),de=Array.from(new Set([...Q,...re].filter(P=>se.has(P)))).sort((P,w)=>P.localeCompare(w)),ye=F(O?O.body:C);return{workspaceId:ee,canonicalPath:z,markdownLength:C.length,lineCount:C?s(C).length:0,hasFrontmatter:!!O,topLevelKeys:Q,frontmatterScalars:O?{kgCanvasRenderMode:D(O.frontmatter,"kgCanvasRenderMode"),kgCanvas2dRenderer:D(O.frontmatter,"kgCanvas2dRenderer"),deployed_api_claim:D(O.frontmatter,"deployed_api_claim")}:{},mainPanelIntegrationsDemo:M?{present:!0,mainPanelEntries:x(M.blockText,"main_panel_entries"),providerIds:x(M.blockText,"provider_ids"),providerLabels:x(M.blockText,"provider_labels"),taskCapabilities:x(M.blockText,"task_capabilities"),taskLevels:x(M.blockText,"task_levels"),integrationOpenTab:D(M.blockText,"integration_open_tab"),canvas2dRenderer:D(M.blockText,"canvas_2d_renderer"),sourceFile:D(M.blockText,"source_file")}:{present:!1},superAgentHarnessDemo:N?{present:!0,taskCapabilities:x(N.blockText,"task_capabilities"),taskLevels:x(N.blockText,"task_levels"),runtimeSurfaces:B?m(B.blockText):[]}:{present:!1},hasFlowBlock:!!U,flowKeys:re,flowNodeCount:U?K(U.blockText,"nodes"):null,flowConnectionCount:U?K(U.blockText,"connections")??K(U.blockText,"edges"):null,flowSubgraphCount:U?K(U.blockText,"subgraphs"):null,forbiddenGroupingKeys:de,headingCount:ye.length,headings:ye.map(P=>P.text),bodyLength:t(O?O.body:C).length}},"inspectSharedDocumentStructure");var xt=Object.freeze({generate:"knowgrph.probe.generate",select:"knowgrph.probe.select",evolve:"knowgrph.probe.evolve"}),kt=Object.freeze({optionCount:3,maxOptionCount:4,recallTopK:5,tokenBudget:1200,optionCompletionTokenEstimate:64,maxDepth:8,appMemoryScope:"knowgrph-probe-tree"}),Ko=Object.freeze({type:"object",additionalProperties:!0,required:["id","text","rationale"],properties:{id:{type:"string"},text:{type:"string"},rationale:{type:"string"}}}),pr=Object.freeze({type:"object",additionalProperties:!1,required:["model","prompt_tokens","completion_tokens","cache_hits","estimated_cost_usd"],properties:{model:{type:"string"},prompt_tokens:{type:"number"},completion_tokens:{type:"number"},cache_hits:{type:"number"},estimated_cost_usd:{oneOf:[{type:"number"},{type:"null"}]}}}),Ap=Object.freeze({type:"object",additionalProperties:!1,required:["thread_root_id","current_node_id"],properties:{thread_root_id:{type:"string",minLength:1},current_node_id:{type:"string",minLength:1},context_text:{type:"string"},k:{type:"integer",minimum:1,maximum:kt.maxOptionCount,default:kt.optionCount},recall_top_k:{type:"integer",minimum:0,maximum:20,default:kt.recallTopK},token_budget:{type:"integer",minimum:1,default:kt.tokenBudget},graph_store_dir:{type:"string"}}}),kp=Object.freeze({type:"object",additionalProperties:!1,required:["thread_root_id","parent_node_id","chosen_option"],properties:{thread_root_id:{type:"string",minLength:1},parent_node_id:{type:"string",minLength:1},chosen_option:Ko,context_text:{type:"string"},terminal:{type:"boolean",default:!1},graph_store_dir:{type:"string"}}}),xp=Object.freeze({type:"object",additionalProperties:!1,required:["thread_root_id"],properties:{thread_root_id:{type:"string",minLength:1},terminal_node_id:{type:"string"},resolved:{type:"boolean",default:!0},rating:{type:"number",minimum:0,maximum:1},allow_partial_path:{type:"boolean",default:!1},graph_store_dir:{type:"string"}}}),Ep=Object.freeze({type:"object",additionalProperties:!0,required:["contractVersion","ok","options","cost_log"],properties:{contractVersion:{type:"string"},ok:{type:"boolean"},options:{type:"array",items:Ko},degraded:{type:"boolean"},recalled_exemplars:{type:"array",items:{type:"object",additionalProperties:!0}},token_budget:{type:"object",additionalProperties:!0},cost_log:pr}}),Cp=Object.freeze({type:"object",additionalProperties:!0,required:["contractVersion","ok","new_node_id","edge_id","node_path","cost_log"],properties:{contractVersion:{type:"string"},ok:{type:"boolean"},new_node_id:{type:"string"},edge_id:{type:"string"},node_path:{type:"string"},checkpoint:{type:"object",additionalProperties:!0},cost_log:pr}}),Tp=Object.freeze({type:"object",additionalProperties:!0,required:["contractVersion","ok","updated_scores","exemplar_id","cost_log"],properties:{contractVersion:{type:"string"},ok:{type:"boolean"},updated_scores:{type:"array",items:{type:"object",additionalProperties:!0}},exemplar_id:{type:"string"},complete_path_scored:{type:"boolean"},unscored_parent_node_ids:{type:"array",items:{type:"string"}},cost_log:pr}});var $o="knowgrph.os.status",I=Object.freeze({search:u.search,fetch:u.fetch,uiLaunch:"knowgrph.ui.launch",uiStop:"knowgrph.ui.stop",pipeline:"knowgrph.pipeline",graphragPipeline:"knowgrph.graphrag_pipeline",superagentRun:"knowgrph.superagent.run",videoRemixRun:"knowgrph.video_remix.run",browserApiRun:"knowgrph.browser_api.run",sealionDetectLanguageVariant:"sealion.detect_language_variant",sealionTranslateLocalize:"sealion.translate_localize",sealionSafetyCheck:"sealion.safety_check",htmlVideoRender:"knowgrph.html_video.render",annotateImage:"knowgrph.annotate.image",annotateVideoFrame:"knowgrph.annotate.video_frame",memoryAdd:"knowgrph.memory.add",memorySearch:"knowgrph.memory.search",memoryAssemblePrompt:"knowgrph.memory.assemble_prompt",memoryExtractProcedural:"knowgrph.memory.extract_procedural",memoryMaterializeUserModel:"knowgrph.memory.materialize_user_model",probeGenerate:xt.generate,probeSelect:xt.select,probeEvolve:xt.evolve,agenticCanvasOsDocsInvoke:"knowgrph.agentic_canvas_os.docs.invoke",showrunnerStartRun:"knowgrph.showrunner.start_run",showrunnerRunStatus:"knowgrph.showrunner.run_status",showrunnerPostChoice:"knowgrph.showrunner.post_choice",showrunnerSubmitCritique:"knowgrph.showrunner.submit_critique",showrunnerApproveStage:"knowgrph.showrunner.approve_stage",showrunnerGetArtifact:"knowgrph.showrunner.get_artifact",sandboxPolicyValidate:"knowgrph.sandbox.policy.validate",sandboxPolicyAuthorize:"knowgrph.sandbox.policy.authorize",osStatus:$o,vdeoxplnList:"knowgrph.vdeoxpln.list"}),Do=n(()=>Object.values(I),"buildKnowgrphLocalMcpToolNameList");var jo="knowgrph-vdeoxpln/v0.1";var he=Object.freeze({sourceFiles:"knowgrph-source-files",agentReady:"knowgrph-agent-ready",localMcp:"knowgrph-mcp-local",chatToCanvas:"knowgrph-chat-to-canvas",strybldr:"knowgrph-strybldr",researchVisual:"knowgrph-research-visual",memoryLayer:"knowgrph-memory-layer",aiShowrunner:"knowgrph-ai-showrunner",htmlVideoRenderer:"knowgrph-html-video-renderer",videoAgent:"knowgrph-video-agent",visualAnnotationEngine:"knowgrph-visual-annotation-engine",commerceReadiness:"knowgrph-commerce-readiness"}),dr=n(e=>String(e||"").trim(),"normalizeString"),ge=n(e=>Array.from(new Set((Array.isArray(e)?e:[]).map(dr).filter(Boolean))).sort((t,r)=>t.localeCompare(r)),"normalizeStringArray"),Ho=n(e=>{let t=new Set,r=[];for(let o of Array.isArray(e)?e:[]){let a=dr(o);!a||t.has(a)||(t.add(a),r.push(a))}return r},"normalizeOrderedStringArray"),ur=n(e=>Array.isArray(e)?e.map(ur):!e||typeof e!="object"?e:Object.keys(e).sort((t,r)=>t.localeCompare(r)).reduce((t,r)=>(t[r]=ur(e[r]),t),{}),"normalizeJsonValue"),ns=n(e=>JSON.stringify(ur(e)),"stableStringifyVdeoxplnValue"),as=n((e,t)=>{let r=dr(e)||"vdeoxpln";return`kgvx_${_t([r,jo,ns(t)])}`},"buildKnowgrphVdeoxplnSemanticKey");var ss=Object.freeze([{id:he.sourceFiles,title:"Knowgrph Source Files",purpose:"Discover, read, inspect, and route published Source Files and shared documents through the canonical storage and document-structure owners.",scope:"read-only-published",mutation:"read-only",triggers:["source files","published documents","shared document","read markdown","inspect document structure"],inputs:["workspace document","published markdown","share token","share URL","canonical path"],outputs:["source-files index","published markdown","document structure report"],owners:["canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/sourceFilesSignatures.ts","canvas/src/features/agent-ready/publishedToolExecutors.mjs","canvas/src/features/agent-ready/sharedDocumentStructureInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs"],tools:{published:[u.listSourceFiles,u.readSourceFile,u.readSharedDocument,u.inspectSharedDocumentStructure],browserLocal:[u.inspectLocalSourceFilesSnapshot],local:[I.search,I.fetch,I.vdeoxplnList]},workflow:["Resolve source identity from storage, share token, or canonical path.","Fetch through published storage/document executors.","Inspect structure with the shared document-structure owner.","Return read-only artifacts without graph mutation."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return source-read or structure errors without model calls."},artifactPolicy:{persistence:"published-read-only",graphMaterialization:"none",semanticKeyInputs:["workspaceId","canonicalPath","shareToken","toolContract"]},validation:["agent-ready:check","pages:check-sync","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","webmcp-html-fallback"]},{id:he.agentReady,title:"Knowgrph Agent Ready",purpose:"Inspect Knowgrph health, MCP, WebMCP, A2A, OpenAPI, commerce, and browser-local readiness without claiming deployed mutation.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["agent-ready","webmcp","mcp health","openapi","a2a","discovery","readiness"],inputs:["agent-ready base URL","browser runtime state","published metadata"],outputs:["agent surface inspection","browser-local readiness snapshot","metadata report"],owners:["canvas/src/features/agent-ready/knowgrphAgentReadyToolContract.mjs","canvas/src/features/agent-ready/webMcpRuntime.ts","canvas/src/features/agent-ready/agentSurfaceInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs","scripts/check-agent-ready.mjs"],tools:{published:[u.inspectAgentSurface],browserLocal:[u.inspectLocalSettingsChatReadiness,u.inspectLocalMainPanelState,u.inspectLocalEditorWorkspaceState,u.inspectLocalChatPipelineState,u.inspectLocalMainPanelChatCanvasPipeline,u.inspectLocalWorkspaceDocument,u.inspectLocalCanvasTopology,u.inspectLocalCanvasSnapshot,u.inspectLocal3dCameraPose,u.inspectLocal3dLayoutPositions,u.inspectLocal2dZoomViewport,u.inspectLocalSourceFilesSnapshot],local:[I.vdeoxplnList]},workflow:["Inspect published agent-ready metadata.","Inspect browser-local state only when running inside the app runtime.","Report scope boundaries between Pages read-only tools and browser-local inspectors."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return metadata inspection errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["toolContracts","metadataRoutes","browserLocalToolNames"]},validation:["agent-ready:check","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","browser-webmcp"]},{id:he.localMcp,title:"Knowgrph Local MCP",purpose:"Expose Knowgrph-owned local Source Files, Agentic Canvas OS docs invocation, UI, pipeline, SuperAgent, video-remix, browser bridge, SEA-LION, HTML video, visual annotation, memory, probe-tree, showrunner, OS status, and vdeoxpln tools through the stdio MCP server.",scope:"local-stdio",mutation:"local-confirmed",triggers:["local mcp","agentic canvas os docs","/","#","@","launch canvas","run pipeline","graphrag","superagent","video remix","browser api","sealion sidecar","html video","visual annotation","memory layer","probe tree","showrunner","os status","list vdeoxpln"],inputs:["local root","agentic canvas os invocation token","workspace file","graph data","pipeline config","reference URL","source cards","browser API runtime","Southeast Asian language text","render spec","annotation asset","memory scope","probe branch","creative brief"],outputs:["local tool result","Agentic Canvas OS docs invocation result","pipeline artifact","superagent report","video remix run manifest","SEA-LION sidecar result","render manifest","annotation result","memory result","probe checkpoint","showrunner artifact","OS status snapshot","vdeoxpln registry snapshot"],owners:["mcp/local-tool-contract.js","mcp/server.js","mcp/agentic-canvas-os-docs-runtime.js","mcp/director-lanes.js","mcp/director-workflow.js","mcp/video-remix-runtime.js","mcp/README.md","knowgrph_parser/superagent_harness.py","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:Do()},workflow:["List local tools from the shared local MCP contract.","Run only path-guarded local-root operations.","Run video-remix orchestration as an approval-gated local manifest before any paid provider call.","Resolve Agentic Canvas OS /, #, and @ docs invocations from the sibling docs SSOT.","Forward SEA-LION regional language, localization, and safety calls to the hosted sidecar with server-owned auth.","Summarize artifacts and registry metadata in the MCP result."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"tool-owned",fallback:"Return local command failure and detected artifacts."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"tool-owned",semanticKeyInputs:["localToolNames","rootScope","artifactList"]},validation:["vdeoxpln:check","mcpLocalToolContract"],publish:["local-mcp-docs"]},{id:he.chatToCanvas,title:"Knowgrph Chat To Canvas",purpose:"Route AI-assisted graph generation through FloatingPanel Chat, KGC validation, Workspace FS, Source Files, and Canvas apply owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["chat to canvas","generate graph","kgc markdown","flow.subgraphs","apply to canvas"],inputs:["chat request","workspace context","selection context","source evidence","model settings"],outputs:["validated KGC Markdown","workspace artifact","GraphData","canvas topology snapshot"],owners:["canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitRequest.ts","canvas/src/features/chat/chatMarkdownValidation.ts","canvas/src/features/chat/chatKgcCanvasApply.ts","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/lib/graph/semanticKey.ts"],tools:{published:[],browserLocal:[u.inspectLocalChatPipelineState,u.inspectLocalMainPanelChatCanvasPipeline,u.inspectLocalWorkspaceDocument,u.inspectLocalCanvasTopology,u.inspectLocalCanvasSnapshot],local:[I.vdeoxplnList]},workflow:["Vdeoxpln context through the shared chat submit request owner.","Call provider transport only after typed request construction.","Validate KGC Markdown with bounded retries.","Persist through Workspace FS and apply through the existing Canvas path."],aiPolicy:{mode:"required-for-generation",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Persist validation or provider failure as reviewable chat/workspace state."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["chatContextScope","workspacePath","graphSemanticKey","sourceLayerHash"]},validation:["chatResponseContract","sourceFiles","vdeoxpln:check"],publish:["browser-webmcp","mainpanel-mcp"]},{id:he.strybldr,title:"Knowgrph Strybldr",purpose:"Turn image or media source units into editable Storyboard cards and bounded media handoff artifacts through Strybldr and shared renderer owners.",scope:"browser-local-source-backed",mutation:"browser-local-user-mediated",triggers:["strybldr","storyboard","image to storyboard","media handoff","visual brief"],inputs:["image source unit","media metadata","workspace document","storyboard graph"],outputs:["Strybldr Markdown","Storyboard graph cards","camera-aware media handoff prompt","canvas snapshot"],owners:["canvas/src/features/strybldr/strybldrStoryboard.ts","canvas/src/features/strybldr","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-strybldr-prd-tad.md"],tools:{published:[],browserLocal:[u.inspectLocalSourceFilesSnapshot,u.inspectLocalCanvasTopology,u.inspectLocalCanvasSnapshot],local:[I.vdeoxplnList]},workflow:["Import media through existing workspace/source owners.","Build Strybldr cards with source-unit provenance.","Persist Camera reframe settings on selected graph cards.","Render through the shared Storyboard surface.","Compile bounded media handoff only after user approval."],aiPolicy:{mode:"optional-for-refinement",maxAttempts:1,tokenBudget:"user-approved-provider-step",fallback:"Keep editable storyboard and structured handoff error."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"storyboard-graph",semanticKeyInputs:["sourceUnitId","strybldrRunId","graphSemanticKey","strybldrCamera"]},validation:["strybldr","rendererPipelineNeutrality","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:he.researchVisual,title:"Knowgrph Research Visual",purpose:"Create file-backed research visual workflows from source material using Knowgrph parsing, Source Files, Storyboard, renderer, and chat owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["research visual","explainer","formula","algorithm","proof","dynamic scene","storyboard"],inputs:["paper excerpt","formula","algorithm","figure","workspace document","source evidence"],outputs:["mechanism brief","storyboard","renderer-neutral scene plan","validated KGC Markdown"],owners:["canvas/src/features/parsers/default.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-vdeoxpln-prd-tad.md"],tools:{published:[],browserLocal:[u.inspectLocalChatPipelineState,u.inspectLocalSourceFilesSnapshot,u.inspectLocalCanvasTopology],local:[I.vdeoxplnList]},workflow:["Extract source-backed semantic units into workspace artifacts.","Plan exact deterministic graph/storyboard layers before optional AI support.","Persist artifacts through Workspace FS and Source Files.","Use Canvas/Storyboard renderers as projections of graph state."],aiPolicy:{mode:"optional-for-drafting",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Return deterministic source brief with unresolved questions."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["sourceSignature","graphSemanticKey","rendererId"]},validation:["sourceFiles","chatResponseContract","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:he.memoryLayer,title:"Knowgrph Memory Layer",purpose:"Persist, retrieve, inject, extract, and materialize explicitly scoped agent memories through a provider-neutral local harness with source-owned Markdown outputs.",scope:"local-stdio-and-browser-local",mutation:"local-scoped-memory",triggers:["memory layer","long-term memory","cross-session context","mem0","personalization","prompt memory","procedural memory","harness replay","user model","profile markdown"],inputs:["user or agent message","runtime scope","memory query","harness output dir"],outputs:["memory write result","ranked memory results","bounded prompt context","memory cost log","procedural KGC markdown","USER_MODEL markdown"],owners:["canvas/src/features/memory/aiAgentsMemoryLayerContract.mjs","mcp/memory-layer-runtime.js","mcp/local-tool-contract.js","mcp/server.js","docs/documents/knowgrph-ai-agents-memory-layer-prd-tad.md"],tools:{published:[],browserLocal:[],local:[I.memoryAdd,I.memorySearch,I.memoryAssemblePrompt,I.memoryExtractProcedural,I.memoryMaterializeUserModel,I.vdeoxplnList]},workflow:["Require explicit runtime scope.","Add/search through the configured harness.","Inject only top-ranked memories within token budget.","Extract completed harness runs into reusable KGC procedural-memory documents.","Materialize scoped memories into deterministic USER_MODEL markdown when a source-owned profile is needed."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"memory-harness-owned",fallback:"Return empty memory results or skip write while preserving the agent turn."},artifactPolicy:{persistence:"operator-configured-local-memory-store",graphMaterialization:"none",semanticKeyInputs:["memoryScope","operation","topK","providerMode"]},validation:["vdeoxpln:check","mcpLocalToolContract","aiAgentsMemoryLayer"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:he.aiShowrunner,title:"Knowgrph AI Showrunner",purpose:"Run provider-neutral multi-agent creative pipelines for podcasts, narrative games, and writers rooms through existing Source Files, memory, MCP, KGC, and Storyboard Widget owners.",scope:"local-stdio-and-browser-local",mutation:"local-approval-gated",triggers:["ai showrunner","podcast pipeline","narrative game","writers room","creative state","multi-agent orchestration"],inputs:["creative brief markdown","run id","choice signal","critique text","operator approval"],outputs:["pipeline run state","creative state entries","script","choice graph","revision history","artifact manifest"],owners:["canvas/src/features/ai-showrunner","canvas/src/features/chat/chatKgcCanvasApply.ts","canvas/src/features/source-files","canvas/src/features/memory/aiAgentsMemoryLayerContract.mjs","canvas/src/lib/graph/semanticKey.ts","mcp/local-tool-contract.js"],tools:{published:[],browserLocal:[],local:[I.showrunnerStartRun,I.showrunnerRunStatus,I.showrunnerPostChoice,I.showrunnerSubmitCritique,I.showrunnerApproveStage,I.showrunnerGetArtifact,I.vdeoxplnList]},workflow:["Validate the frontmatter-first Creative_Brief before any agent turn.","Run bounded role turns through dry-run or injected provider-neutral dispatch.","Persist append-only state, token logs, and manifests through Source Files."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"pipeline-run-owned",fallback:"Halt at approval or structured error while preserving committed Creative_State."},artifactPolicy:{persistence:"source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["run_id","agent_role","turn_index","content_hash"]},validation:["vdeoxpln:check","mcpLocalToolContract","showrunnerDryRun"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:he.htmlVideoRenderer,title:"Knowgrph HTML Video Renderer",purpose:"Render HTML, CSS, and data documents to MP4 video artifacts through a runtime-selected pluggable engine and the existing rich media output owner.",scope:"local-stdio-and-browser-local",mutation:"local-approval-gated",triggers:["html video render","html to video","programmatic video","render html mp4","coding agent video"],inputs:["html document","css","data json","render spec","engine hint"],outputs:["mp4 video blob","render manifest","artifact path","render job id"],owners:["canvas/src/features/html-video-renderer/htmlVideoRendererSsot.ts","canvas/src/features/html-video-renderer/htmlVideoRenderJob.ts","canvas/src/features/html-video-renderer/htmlVideoEngineRegistry.ts","canvas/src/features/html-video-renderer/htmlVideoRendererSpec.ts","canvas/src/features/html-video-renderer/htmlVideoFlowNode.ts","canvas/src/features/html-video-renderer/htmlVideoWidget.ts","canvas/src/features/chat/richMediaRun.ts","canvas/src/features/source-files","canvas/src/lib/config.storyboard-widget.ts","canvas/src/lib/graph/semanticKey.ts","mcp/local-tool-contract.js","mcp/server.js","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[I.htmlVideoRender,I.vdeoxplnList]},workflow:["Validate the Render_Spec before any engine call.","Resolve active engine from KNOWGRPH_HTML_VIDEO_ENGINE or engineHint at invocation time.","Execute the render engine and capture the video/mp4 blob.","Route the blob through writeRichMediaWidgetRunOutputArtifact exactly once.","Return renderJobId, outputPath, outputManifestPath, and outputStorageUrl."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return structured error without model call."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"rich-media-panel",semanticKeyInputs:["renderJobId","engineId","renderSpecHash","outputPath"]},validation:["vdeoxpln:check","mcpLocalToolContract","htmlVideoRenderer"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:he.videoAgent,title:"Knowgrph Video Agent",purpose:"Reason over operator-supplied video sources through native knowgrph ingestion, parsing, annotation, dataset operations, zone counting, search planning, edit planning, timeline compilation, generation placeholders, and streamable rich-media output.",scope:"browser-local-and-local-stdio",mutation:"local-approval-gated",triggers:["video agent","video reasoning","video search","video editing","video compilation","video generation","stream video result","visual dataset","zone counting"],inputs:["operator-supplied video url","source manifest","annotation tasks","search intent","edit constraints","render spec"],outputs:["source manifest","visual annotation dataset","zone counting timeline","moment search index","edit plan","timeline manifest","render spec","reasoning artifact manifest","video/mp4 artifact","inline stream preview"],owners:["canvas/src/features/video-agent","canvas/src/features/video-agent/videoAgentDatasetRuntime.ts","canvas/src/features/html-video-renderer/htmlVideoRendererSsot.ts","canvas/src/features/html-video-renderer/htmlVideoFlowNode.ts","canvas/src/features/visual-annotation-engine/annotationDataset.ts","canvas/src/features/visual-annotation-engine/annotationFlowNode.ts","canvas/src/features/visual-annotation-engine/annotationSerializers.ts","canvas/src/features/chat/richMediaRun.ts","canvas/src/features/source-files","canvas/src/lib/graph/semanticKey.ts","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[I.htmlVideoRender,I.annotateImage,I.annotateVideoFrame,I.vdeoxplnList]},workflow:["Ingest an operator-supplied video source without embedding a provider runtime dependency.","Parse source metadata, frame annotations, transcript windows, and searchable moments through existing source and annotation owners.","Load frame annotations into native visual dataset operators for deterministic split, merge, save, and frame-ordered zone counting.","Plan search, edit, compilation, and generation stages as typed reasoning artifacts rather than copied external code.","Compile a source-owned HTML/CSS/data Render_Spec for the selected timeline.","Stream a video/mp4 artifact or outputSrcDoc preview through the shared Rich Media Panel output owner."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"operator-configured",fallback:"Return structured source, annotation, dataset, zone counting, or render errors without invoking external video-agent services."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"rich-media-panel",semanticKeyInputs:["sourceUrl","capabilities","reasoningArtifacts","visualDataset","zoneCounting","renderSpecHash","streamOutput"]},validation:["vdeoxpln:check","mcpLocalToolContract","htmlVideoRenderer","visualAnnotationEngine","visualAnnotationDataset","videoAgentPipeline"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:he.visualAnnotationEngine,title:"Knowgrph Visual Annotation Engine",purpose:"Run browser-local image and video-frame annotation into LLM-ready structured JSON plus native visual datasets materialised through existing artifact owners.",scope:"browser-local",mutation:"local-approval-gated",triggers:["annotate image","annotate video","visual annotation","object detection","image caption","florence2","semantic labels","llm-ready annotation","annotation dataset","zone counting"],inputs:["image url","video asset url","annotation tasks","model hint","frame timestamp"],outputs:["annotation result json","visual annotation dataset","zone counting timeline","llm-ready payload","annotation canvas node","markdown summary"],owners:["canvas/src/features/visual-annotation-engine/annotationEngineSsot.ts","canvas/src/features/visual-annotation-engine/annotationDataset.ts","canvas/src/features/visual-annotation-engine/annotationWorker.ts","canvas/src/features/visual-annotation-engine/annotationOrchestrator.ts","canvas/src/features/visual-annotation-engine/annotationSerializers.ts","canvas/src/features/visual-annotation-engine/annotationFlowNode.ts","canvas/src/features/visual-annotation-engine/annotationMcpTools.ts","canvas/src/features/visual-annotation-engine/annotationWidget.ts","canvas/src/features/chat/richMediaRun.ts","canvas/src/features/source-files","canvas/src/lib/graph/semanticKey.ts","canvas/src/lib/config.storyboard-widget.ts","mcp/local-tool-contract.js","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[I.annotateImage,I.annotateVideoFrame,I.vdeoxplnList]},workflow:["Validate the Annotation_Spec before model resolution or inference.","Resolve model identifier from modelHint, KNOWGRPH_ANNOTATION_MODEL, or the registered default.","Dispatch through the Annotation_Worker boundary; Dev emits dependency-free heuristic annotations while model adapters remain runtime-owned.","Build annotationId with buildScopedGraphSemanticKey using assetUrl, modelId, and sorted tasks.","Load Annotation_Result or frame-box arrays into the native dataset owner for split, merge, save, and frame-ordered zone counting.","Route JSON output through writeRichMediaWidgetRunOutputArtifact exactly once.","Return annotationId, assetUrl, modelId, tasks, outputPath, and outputManifestPath."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return runtime-local heuristic annotation JSON or a structured validation/runtime error without model call."},artifactPolicy:{persistence:"browser-local",graphMaterialization:"annotation-canvas-node",semanticKeyInputs:["annotationId","assetUrl","modelId","sortedTasks","visualDataset","zoneCounting"]},validation:["vdeoxpln:check","mcpLocalToolContract","visualAnnotationEngine","visualAnnotationDataset"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:he.commerceReadiness,title:"Knowgrph Commerce Readiness",purpose:"Inspect Commerce, payment worker, x402, ACP, UCP, MPP, and readiness metadata without bypassing the shared payment SSOT.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["commerce","payment","x402","acp","ucp","mpp","stripe","readiness"],inputs:["agent-ready metadata","commerce route health","browser readiness snapshot"],outputs:["commerce readiness report","payment route summary","agent-ready commerce metadata"],owners:["canvas/src/features/panels/views/CommerceHubView.tsx","canvas/src/features/agent-ready/browserLocalSurfaceSnapshots.ts","cloudflare/pages/knowgrph-agent-ready-commerce.mjs","cloudflare/workers/knowgrph-payment/agenticCommerce.ts","grph-shared/src/payments/agenticCommerceSsot.ts"],tools:{published:[u.inspectAgentSurface],browserLocal:[u.inspectLocalSettingsChatReadiness,u.inspectLocalMainPanelState],local:[I.vdeoxplnList]},workflow:["Inspect published commerce discovery metadata.","Read browser-local readiness snapshots when available.","Report payment capability boundaries without initiating checkout."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return route or metadata errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["commerceSemanticKey","routeHealth","toolContract"]},validation:["agent-ready:check","mainPanelCommerce","vdeoxpln:check"],publish:["pages-agent-skills","mainpanel-mcp","browser-webmcp"]}]),is=n(e=>{let t={published:ge(e.tools?.published),browserLocal:ge(e.tools?.browserLocal),local:ge(e.tools?.local)},r=as(e.id,{id:e.id,scope:e.scope,mutation:e.mutation,owners:ge(e.owners),tools:t,triggers:ge(e.triggers),outputs:ge(e.outputs),workflow:Ho(e.workflow),artifactPolicy:e.artifactPolicy||{},aiPolicy:e.aiPolicy||{}}),o=`/.well-known/agent-skills/${e.id}.md`;return Object.freeze({...e,version:jo,triggers:ge(e.triggers),inputs:ge(e.inputs),outputs:ge(e.outputs),owners:ge(e.owners),tools:Object.freeze(t),workflow:Ho(e.workflow),validation:ge(e.validation),publish:ge(e.publish),semanticKey:r,agentSkill:Object.freeze({name:e.id,type:"markdown",description:e.purpose,path:o})})},"normalizeVdeoxpln"),Bo=n(()=>ss.map(is).sort((e,t)=>e.id.localeCompare(t.id)),"buildKnowgrphVdeoxplnRegistry");var Go=n((e=Bo())=>e.map(t=>({...t.agentSkill,vdeoxpln:{id:t.id,title:t.title,scope:t.scope,mutation:t.mutation,semanticKey:t.semanticKey,tools:t.tools,publish:t.publish}})),"buildKnowgrphVdeoxplnAgentSkillDefinitions"),Pe=n(e=>e&&e.length?e.map(t=>`- ${t}`).join(`
`):"- none","markdownList"),cs=n(e=>`# ${e.title} Skill

Use this skill when: ${e.purpose}

## Contract

- Vdeoxpln id: \`${e.id}\`
- Contract version: \`${e.version}\`
- Semantic key: \`${e.semanticKey}\`
- Scope: \`${e.scope}\`
- Mutation boundary: \`${e.mutation}\`

## Triggers

${Pe(e.triggers)}

## Inputs

${Pe(e.inputs)}

## Outputs

${Pe(e.outputs)}

## Tools

Published tools:
${Pe(e.tools.published)}

Browser-local tools:
${Pe(e.tools.browserLocal)}

Local MCP tools:
${Pe(e.tools.local)}

## Workflow

${Pe(e.workflow)}

## Source Owners

${Pe(e.owners)}

## Artifact Policy

- Persistence: \`${e.artifactPolicy?.persistence||"none"}\`
- Graph materialization: \`${e.artifactPolicy?.graphMaterialization||"none"}\`
- Semantic-key inputs:
${Pe(e.artifactPolicy?.semanticKeyInputs||[])}

## AI Policy

- Mode: \`${e.aiPolicy?.mode||"none"}\`
- Max attempts: \`${String(e.aiPolicy?.maxAttempts??0)}\`
- Token budget: \`${String(e.aiPolicy?.tokenBudget??0)}\`
- Fallback: ${e.aiPolicy?.fallback||"Return deterministic errors without model calls."}

## Validation

${Pe(e.validation)}

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
`,"buildKnowgrphVdeoxplnMarkdown"),Wo=n((e=Bo())=>Object.fromEntries(e.map(t=>[t.id,cs(t)])),"buildKnowgrphVdeoxplnMarkdownByName");var ls={[u.search]:{id:"search",tags:["mcp","search","source-files","read-only"],examples:["Search Knowgrph Source Files for renderer architecture."],outputModes:["application/json"]},[u.fetch]:{id:"fetch",tags:["mcp","fetch","source-files","markdown","read-only"],examples:["Fetch the Knowgrph Source File id returned by search."],outputModes:["text/markdown","application/json"]},[u.listSourceFiles]:{id:"list-source-files",tags:["mcp","discovery","source-files","read-only"],examples:["List the published Knowgrph Source Files."],outputModes:["text/markdown","application/json"]},[u.readSourceFile]:{id:"read-source-file",tags:["mcp","read","markdown","workspace"],examples:["Read the published source file for docs/getting-started.md."],outputModes:["text/markdown","application/json"]},[u.readSharedDocument]:{id:"read-shared-document",tags:["mcp","read","shared-document","markdown"],examples:["Read the Knowgrph shared document behind this share URL."],outputModes:["text/markdown","application/json"]},[u.inspectSharedDocumentStructure]:{id:"inspect-shared-document-structure",tags:["mcp","inspect","shared-document","structure"],examples:["Inspect the structure of this Knowgrph shared document."],outputModes:["application/json","text/markdown"]},[u.inspectAgentSurface]:{id:"inspect-agent-surface",tags:["mcp","agent-ready","discovery","metadata"],examples:["Show the Knowgrph agent discovery metadata."],outputModes:["application/json","text/markdown"]}},ot=Go(),Fo=n(e=>e.map(t=>{let r=ls[t.name]||{id:String(t.name||"").replace(/_/g,"-"),tags:["mcp","read-only"],examples:[`Call ${t.name} on Knowgrph.`],outputModes:["application/json"]};return{id:r.id,name:t.title,description:t.description,tags:r.tags,examples:r.examples,inputModes:["application/json","text/plain"],outputModes:r.outputModes}}),"buildAgentReadyA2aSkills"),zo=n(async({appUrl:e,updatedAt:t,sha256ByName:r})=>({$schema:"https://agent-skills.dev/schemas/skills-index.v0.2.json",updated_at:t,skills:await Promise.all(ot.map(async o=>({name:o.name,type:o.type,description:o.description,url:`${String(e||"").replace(/\/+$/,"")}${o.path}`,sha256:await r[o.name],vdeoxpln:o.vdeoxpln})))}),"buildAgentReadyAgentSkillsIndex"),qo=n(({appBasePath:e,appA2aAgentCardPath:t,healthPath:r})=>{let o=Object.fromEntries(ot.map(a=>[`${e}${a.path}`,{get:{summary:`Read the ${a.name} agent skill markdown`,responses:{200:{description:`Agent skill markdown for ${a.name}`}}}}]));return{[r]:{get:{summary:"Read the Knowgrph agent-ready health status",responses:{200:{description:"Health status in application/health+json format"}}}},[`${e}/mcp`]:{get:{summary:"Read MCP transport metadata",responses:{200:{description:"MCP transport metadata"}}},post:{summary:"Send a JSON-RPC MCP request",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0}}}},responses:{200:{description:"JSON-RPC result payload"}}}},[t]:{get:{summary:"Read the Knowgrph A2A Agent Card",responses:{200:{description:"A2A Agent Card JSON"}}}},"/api/storage/llms.txt":{get:{summary:"Read the Source Files LLM index",responses:{200:{description:"Plain-text LLM index"}}}},"/api/storage/source-files":{get:{summary:"List published Source Files",responses:{200:{description:"Source Files index"}}}},"/api/storage/source-files/{workspaceId}":{get:{summary:"List published Source Files for a workspace",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped Source Files index"}}}},"/api/storage/source-files/{workspaceId}/llms.txt":{get:{summary:"Read the workspace-scoped Source Files LLM index",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped plain-text LLM index"}}}},"/api/storage/doc-default/{canonicalPath}":{get:{summary:"Read a default-workspace Source File markdown document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document from the default Editor Workspace"},404:{description:"Document not found"}}}},"/api/storage/doc/{workspaceId}/{canonicalPath}":{get:{summary:"Read a Source File markdown document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document"},404:{description:"Document not found"}}}},"/api/storage/blob/{workspaceId}/{canonicalPath}":{post:{summary:"Store a workspace binary artifact in R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],requestBody:{required:!0,content:{"application/octet-stream":{schema:{type:"string",format:"binary"}}}},responses:{200:{description:"R2 object coordinates and public storage route"},400:{description:"Invalid workspace, path, or declared payload size"}}},get:{summary:"Read a workspace binary artifact from R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Binary artifact body with stored HTTP metadata"},404:{description:"Object not found"}}},head:{summary:"Read workspace binary artifact metadata from R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Binary artifact metadata"},404:{description:"Object not found"}}}},[`${e}/doc-default/{canonicalPath}`]:{get:{summary:"Read a default-workspace shared document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/doc/{workspaceId}/{canonicalPath}`]:{get:{summary:"Read a shared document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/share/{shareToken}`]:{get:{summary:"Read a shared document through the canonical opaque share token route",parameters:[{name:"shareToken",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or published markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},...o}},"buildAgentReadyOpenApiPaths");var ps=n((e,t)=>{let r=new URL(e.url);return r.pathname=`${t}/`,r.search="",r.hash="",new Request(r.toString(),e)},"buildKnowgrphAppShellAssetRequest"),Vo=n(async(e,t)=>{let r=ps(e.request,t);return typeof e.env?.ASSETS?.fetch=="function"?e.env.ASSETS.fetch(r):e.next(r)},"fetchKnowgrphAppShellAsset");var us="kgShare",nu=typeof TextEncoder<"u"?new TextEncoder:null,Yo=typeof TextDecoder<"u"?new TextDecoder:null;var ds=n(e=>{if(typeof Buffer<"u")return Uint8Array.from(Buffer.from(e,"base64"));let t=atob(e),r=new Uint8Array(t.length);for(let o=0;o<t.length;o+=1)r[o]=t.charCodeAt(o);return r},"fromBase64");var ms=n(e=>{let t=String(e||"").replace(/-/g,"+").replace(/_/g,"/");if(!t)return"";let r=t.length%4;return r?`${t}${"=".repeat(4-r)}`:t},"fromBase64Url");var hs=n(e=>{if(!Yo)throw new Error("TextDecoder is required to decode published doc share tokens");return Yo.decode(ds(ms(e)))},"decodeUtf8Base64Url"),Zo=n(e=>String(e||"").trim()||null,"normalizeWorkspaceId"),gr=n(e=>String(e||"").trim(),"normalizeCanonicalPath"),mr="/knowgrph",Jo="/doc-default/",Xo="/doc/",Qo="/share/",gs="kgWorkspaceId",fs="kgCanonicalPath",ys=n(e=>{let t=String(e||"").trim();return t?`/${t.replace(/^\/+|\/+$/g,"")}`:mr},"normalizeAppBasePath"),hr=n(e=>{let t=gr(e?.canonicalPath);return t?{canonicalPath:t,workspaceId:Zo(e?.workspaceId)}:null},"normalizePublishedDocIdentity"),en=n((e,t)=>{let r=ys(t),o=String(e||"").replace(/\/+$/,"")||"/";if(!o.startsWith(r))return null;let a=o.slice(r.length)||"/";if(a.startsWith(Qo)){let c=decodeURIComponent(a.slice(Qo.length)).trim();return fr(c)}if(a.startsWith(Jo))return hr({canonicalPath:decodeURIComponent(a.slice(Jo.length))});if(!a.startsWith(Xo))return null;let s=a.slice(Xo.length),i=s.indexOf("/");return i<1?null:hr({workspaceId:decodeURIComponent(s.slice(0,i)),canonicalPath:decodeURIComponent(s.slice(i+1))})},"parsePublishedDocPathname"),ws=n(e=>{let t=fr(e?.get(us));if(t)return t;let r=gr(decodeURIComponent(String(e?.get(fs)||"")));if(r)return hr({workspaceId:decodeURIComponent(String(e?.get(gs)||"")),canonicalPath:r});let o=String(e?.get("kgPath")||"").trim();return o?en(`${mr}${o}`,mr):null},"parsePublishedDocSearchParams");var fr=n(e=>{let t=String(e||"").trim();if(!t)return null;try{let r=JSON.parse(hs(t)),o=gr(r?.canonicalPath);return o?{canonicalPath:o,workspaceId:Zo(r?.workspaceId)}:null}catch{return null}},"decodePublishedDocShareToken"),Et=n((e={})=>{let t=fr(e.shareToken);if(t)return t;let r=String(e.shareUrl||"").trim();if(!r)return null;try{let o=String(e.baseUrl||"https://airvio.co").trim()||"https://airvio.co",a=new URL(r,o);return ws(a.searchParams)||en(a.pathname,e.appBasePath)}catch{return null}},"resolvePublishedDocIdentity"),tn=String.raw`(args = {}) => {
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
}`;var Ct={push:"/api/storage/push",pull:"/api/storage/pull",collabSave:"/api/storage/collab/save",chatSession:"/api/storage/chat/session",chatRelay:"/api/storage/chat/relay",chatPoliciesPrefix:"/api/storage/chat/policies/",chatAuditPrefix:"/api/storage/chat/audit/",exportPrefix:"/api/storage/export/",docPrefix:"/api/storage/doc/",defaultDocPrefix:"/api/storage/doc-default/",blobPrefix:"/api/storage/blob/",mediaAssetPersist:"/api/storage/media/assets",mediaAssetPrefix:"/api/storage/media/assets/",mediaPrefix:"/api/storage/media/",sourceFilesIndex:"/api/storage/source-files",sourceFilesIndexPrefix:"/api/storage/source-files/",sourceFilesLlms:"/api/storage/llms.txt"};var rn=n((e,t)=>`${Ct.docPrefix}${encodeURIComponent(String(e||"").trim())}/${encodeURIComponent(String(t||"").trim())}`,"buildKnowgrphStorageDocPath"),on=n(e=>`${Ct.defaultDocPrefix}${encodeURIComponent(String(e||"").trim())}`,"buildKnowgrphStorageDefaultDocPath");var nn=n(e=>{let t=String(e||"").trim();return t?`${Ct.sourceFilesIndexPrefix}${encodeURIComponent(t)}`:Ct.sourceFilesIndex},"buildKnowgrphStorageSourceFilesIndexPath");var W="https://airvio.co",Tt="https://knowgrph-storage.huijoohwee.workers.dev",E="/knowgrph",k=`${W}${E}/`,an=`${W}/`,nt="kgws:canonical-docs",Ee="2026-06-05",Je=`${E}/health`,Ye=`${W}${Je}`,sn="/.well-known/agent-card.json",yr=`${E}/.well-known/agent-card.json`,vt=`${W}${sn}`,wr=`${W}/api/storage/source-files`,Ss=`${W}/api/storage/doc-default/{canonicalPath}`,_s=`${W}/api/storage/doc/{workspaceId}/{canonicalPath}`,bs=`${W}/api/storage/blob/{workspaceId}/{canonicalPath}`,cn="knowgrph-agent-ready-pages";var ln=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${E}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${E}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${Je}>; rel="status"; type="application/health+json"`,`<${E}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${sn}>; rel="describedby"; type="application/json"`].join(", "),pn=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${k}.

## Discovery

- Crawl policy: ${k}robots.txt
- Sitemap: ${k}sitemap.xml
- API catalog: ${k}.well-known/api-catalog
- Auth.md registration instructions: ${an}auth.md
- Health: ${Ye}
- MCP server card: ${k}.well-known/mcp/server-card.json
- A2A Agent Card: ${vt}
- Agent skills: ${k}.well-known/agent-skills/index.json
- LLM reference: ${k}llms.txt

## APIs

- Agent-ready status: ${Ye}
- HTTP MCP: ${k}mcp
- Storage API: ${W}/api/storage/
- Source Files index: ${wr}
- Default Source File documents: ${Ss}
- Workspace Source File documents: ${_s}
- Workspace binary artifacts: ${bs}

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
`,un=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),at=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(r=>r.trim().startsWith("text/markdown")),"wantsMarkdown"),dn=n((e,t)=>{let r=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&r.headers.set("x-knowgrph-route-owner",o),a&&r.headers.set("x-knowgrph-route-tag",a),r},"withAgentReadyRouteHeaders");var It=cr({defaultWorkspaceId:nt}),Sn=yo(),_n=bo(),bn=n((e,t="")=>{let r=String(e||"").trim(),o=String(t||"").trim();return o?rn(o,r):on(r)},"buildStorageDocPath"),ct=n(e=>String(e||"").trim(),"normalizeToolString");var _e=n((e,t="application/json; charset=utf-8")=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"jsonResponse"),ue=n((e,t)=>new Response(JSON.stringify(t,null,2),{status:e,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"jsonStatusResponse"),mn=n((e,t={})=>new Response(null,{status:e,headers:{"cache-control":"no-store","access-control-allow-origin":"*",...t}}),"emptyStatusResponse"),st=n((e,t)=>new Response(e,{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"textResponse"),Rs=n(e=>st(e,"text/html;profile=mcp-app; charset=utf-8"),"mcpAppsHtmlResponse"),Ps=n(e=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":"application/health+json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"healthResponse"),As=`${E}/api/workspace/github/write`,ks="/api/workspace/github/write",hn=12,gn=9e5,xs=new Set(["css","html","js","json","md","mdx","mjs","svg","ts","tsx","txt","yaml","yml"]),Sr=n((e,t)=>String(e?.[t]||"").trim(),"readEnvString"),Es=n(e=>{let t=Sr(e,"KNOWGRPH_GITHUB_WRITE_REPOSITORY"),r=Sr(e,"KNOWGRPH_GITHUB_WRITE_TOKEN"),o=Sr(e,"KNOWGRPH_GITHUB_WRITE_BRANCH"),a=[];t||a.push("KNOWGRPH_GITHUB_WRITE_REPOSITORY"),r||a.push("KNOWGRPH_GITHUB_WRITE_TOKEN");let s=t.split("/").map(i=>i.trim()).filter(Boolean);return t&&s.length!==2&&a.push("KNOWGRPH_GITHUB_WRITE_REPOSITORY:owner/repo"),a.length>0?{ok:!1,missing:a}:{ok:!0,owner:s[0],repo:s[1],branch:o,token:r}},"readGitHubWriteConfig"),Cs=n(e=>{let t=String(e||"").trim().replace(/^workspace:/i,"").replace(/\\/g,"/").replace(/^\/+/,"");if(!t)return{ok:!1,error:"missing_workspace_path"};if(/[\u0000-\u001f\u007f]/.test(t))return{ok:!1,error:"invalid_workspace_path"};let r=t.split("/").filter(Boolean);if(r.some(s=>s==="."||s===".."))return{ok:!1,error:"path_traversal_forbidden"};if(r[0]!=="chat-log")return{ok:!1,error:"unsupported_workspace_root"};if(r.length<3)return{ok:!1,error:"chat_log_session_file_required"};let o=r[r.length-1]||"",a=o.includes(".")?o.split(".").pop().toLowerCase():"";return!a||!xs.has(a)?{ok:!1,error:"unsupported_text_extension"}:{ok:!0,path:r.join("/")}},"normalizeGitHubWriteWorkspacePath"),Ts=n(e=>{let t=new TextEncoder().encode(String(e||"")),r=32768,o="";for(let a=0;a<t.length;a+=r)o+=String.fromCharCode(...t.slice(a,a+r));return btoa(o)},"encodeBase64Utf8"),Xe=class extends Error{static{n(this,"GitHubWorkspaceWriteError")}constructor(t,r,o){super(t),this.name="GitHubWorkspaceWriteError",this.code=t,this.upstreamStatus=r,this.upstreamMessage=o}},Rn=n(e=>String(e||"unknown").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim().slice(0,240),"sanitizeGitHubApiMessage"),Pn=n((e,t)=>{let r=String(t||"").split("/").map(a=>encodeURIComponent(a)).join("/"),o=new URL(`https://api.github.com/repos/${encodeURIComponent(e.owner)}/${encodeURIComponent(e.repo)}/contents/${r}`);return e.branch&&o.searchParams.set("ref",e.branch),o},"buildGitHubContentsApiUrl"),An=n(e=>({accept:"application/vnd.github+json",authorization:`Bearer ${e.token}`,"user-agent":"knowgrph-cloudflare-pages","x-github-api-version":"2022-11-28"}),"gitHubApiHeaders"),kn=n(e=>{let t=String(e||"").replace(/\/+$/,"")||"/";return t===As||t===ks},"isGitHubWorkspaceWriteRoutePath"),vs=n(async(e,t)=>{let r=await fetch(Pn(e,t),{method:"GET",headers:An(e)});if(r.status===404)return null;let o=await r.json().catch(()=>null);if(!r.ok)throw new Xe("github_read_failed",r.status,Rn(o?.message||r.statusText));if(o?.type&&o.type!=="file")throw new Xe("github_path_not_file",409,t);return String(o?.sha||"").trim()||null},"fetchGitHubExistingFileSha"),Os=n(async(e,t,r)=>{let o=await vs(e,t.repositoryPath),a={message:r,content:Ts(t.text),...e.branch?{branch:e.branch}:{},...o?{sha:o}:{}},s=await fetch(Pn(e,t.repositoryPath),{method:"PUT",headers:{...An(e),"content-type":"application/json; charset=utf-8"},body:JSON.stringify(a)}),i=await s.json().catch(()=>null);if(!s.ok)throw new Xe("github_write_failed",s.status,Rn(i?.message||s.statusText));return{workspacePath:t.workspacePath,repositoryPath:t.repositoryPath,action:o?"updated":"created",commitSha:String(i?.commit?.sha||""),contentSha:String(i?.content?.sha||""),htmlUrl:String(i?.content?.html_url||"")}},"putGitHubWorkspaceFile"),Is=n(async(e,t)=>{let r=Es(t);if(!r.ok)return ue(503,{ok:!1,status:"skipped",error:"github_write_not_configured",missing:r.missing});let o=await e.json().catch(()=>null),a=Array.isArray(o?.files)?o.files:[];if(a.length<1)return ue(400,{ok:!1,status:"failed",error:"files_required"});if(a.length>hn)return ue(413,{ok:!1,status:"failed",error:"too_many_files",maxFiles:hn});let s=[],i=new Set;for(let p of a){let m=Cs(p?.workspacePath||p?.path);if(!m.ok)return ue(400,{ok:!1,status:"failed",error:m.error,workspacePath:String(p?.workspacePath||p?.path||"")});if(i.has(m.path))continue;i.add(m.path);let f=String(p?.text??"");if(new TextEncoder().encode(f).length>gn)return ue(413,{ok:!1,status:"failed",error:"file_too_large",workspacePath:`/${m.path}`,maxTextBytes:gn});s.push({workspacePath:`/${m.path}`,repositoryPath:m.path,text:f})}if(s.length<1)return ue(400,{ok:!1,status:"failed",error:"files_required"});let c=String(o?.message||"").trim(),l=c&&c.length<=160?c:`Knowgrph chat artifact ${s[0].repositoryPath}`;if(o?.dryRun===!0)return ue(200,{ok:!0,status:"dry_run",repository:`${r.owner}/${r.repo}`,branch:r.branch||null,files:s.map(p=>({workspacePath:p.workspacePath,repositoryPath:p.repositoryPath,textBytes:new TextEncoder().encode(p.text).length}))});try{let p=[];for(let m of s)p.push(await Os(r,m,l));return ue(200,{ok:!0,status:"applied",repository:`${r.owner}/${r.repo}`,branch:r.branch||null,files:p})}catch(p){let m=p instanceof Xe;return ue(m?424:500,{ok:!1,status:"failed",error:m?p.code:p instanceof Error?p.message:String(p||"github_write_failed"),...m?{upstreamStatus:p.upstreamStatus,upstreamMessage:p.upstreamMessage}:{}})}},"handleGitHubWorkspaceWrite"),Ms=n(e=>`User-agent: *
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
`,"buildRobotsTxt"),Ns=n(e=>`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${k}</loc>
    <lastmod>${Ee}</lastmod>
  </url>
  <url>
    <loc>${k}llms.txt</loc>
    <lastmod>${Ee}</lastmod>
  </url>
  <url>
    <loc>${e}.well-known/mcp/server-card.json</loc>
    <lastmod>${Ee}</lastmod>
  </url>
</urlset>
`,"buildSitemapXml"),Us=Ms(`${k}sitemap.xml`),Ls=Ns(k),xn={linkset:[{anchor:k,"service-desc":[{href:`${k}.well-known/openapi.json`,type:"application/vnd.oai.openapi+json;version=3.1"}],"service-doc":[{href:`${k}llms.txt`,type:"text/plain"}],status:[{href:Ye,type:"application/health+json"}],"service-meta":[{href:`${k}.well-known/mcp/server-card.json`,type:"application/json"},{href:vt,type:"application/json"}]}]},En={openapi:"3.1.0",info:{title:"Knowgrph API",version:"0.1.0",description:"Agent discovery surface for the Knowgrph Cloudflare deployment."},servers:[{url:W,description:"Knowgrph Cloudflare deployment"}],paths:qo({appBasePath:E,appA2aAgentCardPath:yr,healthPath:Je})},it={resource:k,resource_name:"Knowgrph",authorization_servers:[W],scopes_supported:["knowgrph:read","knowgrph:source-files:read"],bearer_methods_supported:["header"],resource_documentation:`${k}llms.txt`},_r=`${W}/cdn-cgi/access`,Te={skill:`${W}/auth.md`,register_uri:`${k}agent/auth`,claim_uri:`${k}agent/auth/claim`,revocation_uri:`${k}agent/auth/revoke`,identity_types_supported:["anonymous","identity_assertion"],anonymous:{credential_types_supported:["api_key"]},identity_assertion:{assertion_types_supported:["urn:ietf:params:oauth:token-type:id-jag","verified_email"],credential_types_supported:["access_token","api_key"]},events_supported:["https://schemas.workos.com/events/agent/auth/identity/assertion/revoked"],registration_status:"metadata_published_runtime_user_mediated"},fn={issuer:W,resource:it.resource,resource_name:it.resource_name,authorization_servers:it.authorization_servers,cloudflare_access_issuer:_r,authorization_endpoint:`${_r}/login`,token_endpoint:`${_r}/token`,jwks_uri:`${k}.well-known/http-message-signatures-directory`,response_types_supported:["code"],grant_types_supported:["authorization_code","client_credentials"],token_endpoint_auth_methods_supported:["client_secret_basic","private_key_jwt"],scopes_supported:it.scopes_supported,agent_auth:Te},Ks=`# Knowgrph auth.md

Knowgrph publishes agent registration metadata for the read-only agent surface at ${k}. Agents should first fetch ${W}/.well-known/oauth-protected-resource, follow its authorization_servers entry to ${W}/.well-known/oauth-authorization-server, and read the agent_auth block.

## Registration

- Register: ${Te.register_uri}
- Claim: ${Te.claim_uri}
- Revoke: ${Te.revocation_uri}
- Supported identity types: ${Te.identity_types_supported.join(", ")}
- Anonymous credentials: ${Te.anonymous.credential_types_supported.join(", ")}
- Identity assertion types: ${Te.identity_assertion.assertion_types_supported.join(", ")}
- Identity assertion credentials: ${Te.identity_assertion.credential_types_supported.join(", ")}
- Revocation events: ${Te.events_supported.join(", ")}
- Current runtime policy: user-mediated access through the existing Cloudflare Access/OAuth boundary; no separate MCP-only auth stack.
- Pipeline rule: agents must not bypass MainPanel -> FloatingPanel Chat -> KGC -> Canvas for user-mediated graph work; published HTTP MCP tools remain read-only until mutation auth and conflict semantics are implemented.`,Cn={name:"Knowgrph Agent",description:"Agent-readable discovery, published-document retrieval, and WebMCP-ready metadata surface for Knowgrph.",version:"0.1.0",provider:{organization:"airvio / joohwee",url:k},url:`${k}mcp`,preferredTransport:"JSONRPC",supportedInterfaces:[{url:`${k}mcp`,protocolBinding:"JSONRPC",transportProtocol:"JSONRPC",description:"Primary machine interface for read-only discovery and source-file document access."},{url:wr,protocolBinding:"HTTP+JSON/REST",transportProtocol:"HTTP+JSON/REST",description:"Published source-files index and storage-backed document read surface."}],capabilities:{streaming:!1,pushNotifications:!1,stateTransitionHistory:!1,extendedAgentCard:!1},defaultInputModes:["text/plain","text/markdown","application/json"],defaultOutputModes:["text/plain","text/markdown","application/json"],skills:Fo(It)},Ae={serverInfo:{name:"knowgrph",version:"0.1.0"},transport:{type:xe,url:`${k}mcp`,stateless:!0},capabilities:{tools:It.map(e=>({name:e.name,title:e.title,description:e.description,inputSchema:e.inputSchema,outputSchema:e.outputSchema,securitySchemes:e.securitySchemes,annotations:e.annotations,_meta:e._meta})),resources:{listChanged:!1},prompts:{listChanged:!1},...nr()},prompts:Sn,resourceTemplates:_n,clientSetups:sr({baseUrl:k,mcpUrl:`${k}mcp`,serverName:"knowgrph"}),surfaceRoles:{publicReadMcpUrl:`${k}mcp`,publicReadMcpScope:"Canonical public install and discovery endpoint for read-only retrieval, prompt discovery, resource discovery, and inspection.",controlPlaneMcpUrl:`${k}control-plane/mcp`,controlPlaneMcpScope:"Approval-gated orchestration endpoint for control-plane tools, remote Agentic Canvas OS docs invocation, and spend-bearing workflows where deployed.",remoteGrammarInvokePublic:!0,remoteGrammarInvokeToolName:"knowgrph.agentic_canvas_os.docs.invoke",remoteGrammarInvokeStatus:"live-control-plane"},links:{apiCatalog:`${k}.well-known/api-catalog`,skills:`${k}.well-known/agent-skills/index.json`,status:Ye,agentCard:vt,controlPlaneMcp:`${k}control-plane/mcp`}},$s=At({appUrl:k,updatedAt:Ee}),Rr=It.map(e=>({name:e.webName,title:e.title,description:e.description,inputSchema:e.inputSchema,outputSchema:e.outputSchema,securitySchemes:e.securitySchemes,annotations:e.annotations,_meta:e._meta})),De=n(e=>ct(It.find(t=>t.name===e)?.webName),"findWebMcpToolName"),Ds=De(u.search),Hs=De(u.fetch),js=De(u.listSourceFiles),Bs=De(u.readSourceFile),Gs=De(u.readSharedDocument),Ws=De(u.inspectSharedDocumentStructure),Fs=De(u.inspectAgentSurface),zs=`(() => {
  const root = globalThis;
  const siteOrigin = ${JSON.stringify(W)};
  const appBasePath = ${JSON.stringify(E)};
  const defaultWorkspaceId = ${JSON.stringify(nt)};
  const toolDefinitions = ${JSON.stringify(Rr)};
  const toolNames = ${JSON.stringify(Rr.map(e=>e.name))};
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
      search: ${JSON.stringify(Ds)},
      fetch: ${JSON.stringify(Hs)},
      listSourceFiles: ${JSON.stringify(js)},
      readSourceFile: ${JSON.stringify(Bs)},
      readSharedDocument: ${JSON.stringify(Gs)},
      inspectSharedDocumentStructure: ${JSON.stringify(Ws)},
      inspectAgentSurface: ${JSON.stringify(Fs)},
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
})();`,qs=n(async e=>{if(!(e.headers.get("content-type")||"").toLowerCase().includes("text/html"))return e;let r=await e.text();if(Rr.every(i=>r.includes(i.name)))return new Response(r,e);let o=`<script>${zs}<\/script>`,a=r.includes("</head>")?r.replace("</head>",`${o}</head>`):`${r}${o}`,s=new Response(a,e);return s.headers.delete("content-length"),s},"injectWebMcpScript"),Vs={search:u.search,fetch:u.fetch,listSourceFiles:u.listSourceFiles,readSourceFile:u.readSourceFile,readSharedDocument:u.readSharedDocument,inspectSharedDocumentStructure:u.inspectSharedDocumentStructure,inspectAgentSurface:u.inspectAgentSurface},Ys=n(async e=>{let t=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(r)].map(o=>o.toString(16).padStart(2,"0")).join("")},"sha256Hex"),Tn=Wo(),Js=Object.fromEntries(ot.map(e=>[e.name,Ys(Tn[e.name]||"")])),yn=new Map(ot.map(e=>[`${E}${e.path}`.replace(/\/+$/,""),Tn[e.name]||""]));var vn=n(async()=>zo({appUrl:k,updatedAt:Ee,sha256ByName:Js}),"agentSkillsIndex"),Xs={keys:[{kty:"OKP",crv:"Ed25519",kid:"knowgrph-agent-ready-2026-05-21",use:"sig",alg:"EdDSA",x:"11qYAYdkVKxA4G0wV47IxPtYfFVH_H7zmC2Di2PcvLU"}]},Qs={protocolVersion:"2025-06-18",capabilities:{tools:{},resources:{},prompts:{listChanged:!1},...nr()},serverInfo:Ae.serverInfo},Pr=Ae.capabilities.tools,Zs=[$s],ei=Sn,ti=_n,On=n(()=>({status:"pass",service:"knowgrph-agent-ready-pages",homepage:k,health:Ye,updatedAt:Ee,checks:{linkHeaders:!0,markdownNegotiation:!0,httpMcp:!0,webMcp:!0,mcpApps:!0,commerce:{acp:!0,ucp:!0,mpp:!0,x402:!0},defaultWorkspaceId:nt}}),"buildHealthStatusBody"),ri=n(async()=>No({baseUrl:k,health:On(),apiCatalog:xn,openApi:En,mcpServerCard:Ae,agentCard:Cn,agentSkills:await vn(),commerce:Zt({origin:W})}),"buildAgentSurfaceInspection"),oi=lr({toolNames:Vs,defaultWorkspaceId:nt,publicBaseUrl:W,buildStorageDocPath:bn,fetchSourceFilesIndexResponse:n(()=>fetch(`${Tt}${nn()}`,{headers:{accept:"text/markdown"}}),"fetchSourceFilesIndexResponse"),fetchStorageMarkdownResponse:n(e=>fetch(`${Tt}${e}`,{headers:{accept:"text/markdown"}}),"fetchStorageMarkdownResponse"),resolveSharedDocumentInput:n((e={})=>Et({shareToken:e?.shareToken,shareUrl:e?.shareUrl,appBasePath:E,baseUrl:W}),"resolveSharedDocumentInput"),inspectSharedDocumentStructure:Lo,buildAgentSurfaceInspection:ri}),Ar=n(e=>{try{let t=new URL(e,W);return Et({shareUrl:`${t.pathname}${t.search}`,baseUrl:W,appBasePath:E})}catch{return null}},"resolvePublishedDocRequestIdentity"),ni=n(e=>Et({shareUrl:String(e||""),baseUrl:W,appBasePath:E}),"resolvePublishedDocPathIdentity"),ai=n(async(e,t)=>{let r=new URL(bn(t.canonicalPath,t.workspaceId),Tt),o=await fetch(r,{method:"GET",headers:{accept:"text/markdown, text/plain;q=0.9, */*;q=0.1"}}),a=new Headers(o.headers),s=String(a.get("vary")||"");return a.set("vary",s?`${s}, Accept`:"Accept"),new Response(String(e.method||"").toUpperCase()==="HEAD"?null:o.body,{status:o.status,statusText:o.statusText,headers:a})},"proxyPublishedDocMarkdownResponse"),si=n(async e=>{try{let t=await e.json();return t&&typeof t=="object"?t:null}catch{return null}},"readJsonRpcRequest"),Ce=n((e,t)=>ue(200,{jsonrpc:"2.0",id:e??null,result:t}),"jsonRpcResult"),Ne=n((e,t,r)=>ue(200,{jsonrpc:"2.0",id:e??null,error:{code:t,message:r}}),"jsonRpcError"),ii=n(e=>String(e.headers.get("accept")||"").toLowerCase().split(",").some(t=>t.trim().startsWith("text/event-stream")),"requestAcceptsEventStream"),br=n((e,t)=>Object.prototype.hasOwnProperty.call(e,t),"hasOwnProperty"),In=n(e=>{if(Array.isArray(e))return e.length>0&&e.every(In);if(!e||typeof e!="object"||String(e.jsonrpc||"")!=="2.0")return!1;let t=typeof e.method=="string"&&e.method.length>0,r=br(e,"id"),o=br(e,"result")||br(e,"error");return t&&!r||!t&&o},"isJsonRpcNotificationOrResponse"),Mn=n(async(e,t)=>{let r=oi[e];if(typeof r!="function")throw new Error(`unknown tool: ${e}`);return r(t)},"executeMcpTool"),ci=n(async e=>{let t=ct(e);if(t===pe)return ir({appUrl:k,updatedAt:Ee,toolNames:Pr.map(o=>o.name)});let r=Ro(t);if(r){let o=await Mn(u.fetch,{id:r});return Po({uri:t,sourceFile:o})}throw new Error(`unknown resource: ${e}`)},"readMcpResource"),li=n(async e=>{let t=String(e.method||"GET").toUpperCase();if(t==="GET"||t==="HEAD")return ii(e)?mn(405,{allow:"POST"}):_e({ok:!0,transport:Ae.transport,serverInfo:Ae.serverInfo,capabilities:Ae.capabilities,links:Ae.links,surfaceRoles:Ae.surfaceRoles});if(t!=="POST")return ue(405,{ok:!1,error:"unsupported_method"});let r=await si(e);if(!r)return Ne(null,-32700,"Parse error");if(In(r))return mn(202);if(Array.isArray(r))return Ne(null,-32600,"Batch JSON-RPC requests are not supported");switch(r.method){case"initialize":return Ce(r.id,Qs);case"tools/list":return Ce(r.id,{tools:Pr});case"prompts/list":return Ce(r.id,{prompts:ei});case"resources/templates/list":return Ce(r.id,{resourceTemplates:ti});case"prompts/get":{let o=ct(r.params?.name),a=r.params?.arguments&&typeof r.params.arguments=="object"?r.params.arguments:{};if(!o)return Ne(r.id,-32602,"Prompt name is required");try{return Ce(r.id,wo(o,a))}catch(s){return Ne(r.id,-32602,s instanceof Error?s.message:String(s))}}case"resources/list":return Ce(r.id,{resources:Zs});case"resources/read":{let o=ct(r.params?.uri);if(!o)return Ne(r.id,-32602,"Resource URI is required");try{return Ce(r.id,await ci(o))}catch(a){return Ne(r.id,-32602,a instanceof Error?a.message:String(a))}}case"tools/call":{let o=ct(r.params?.name),a=r.params?.arguments&&typeof r.params.arguments=="object"?r.params.arguments:{};if(!o)return Ne(r.id,-32602,"Tool name is required");try{let s=await Mn(o,a);return Ce(r.id,{content:[{type:"text",text:typeof s?.markdown=="string"?s.markdown:JSON.stringify(s,null,2)}],structuredContent:s,isError:!1})}catch(s){return Ce(r.id,{content:[{type:"text",text:s instanceof Error?s.message:String(s)}],isError:!0})}}default:return Ne(r.id,-32601,"Method not found")}},"handleMcpTransport"),pi=n(()=>ir({appUrl:k,updatedAt:Ee,toolNames:Pr.map(e=>e.name)}).contents[0].text,"buildKnowgrphMcpAppHtmlBody");var Mt=n(e=>e===E||e===`${E}/`,"handlesKnowgrphRoot"),ui=n(e=>Mt(e)||!!ni(e),"handlesKnowgrphHtmlSurface"),di=n(e=>e.startsWith(`${E}/assets/`),"handlesKnowgrphStaticAsset"),mi=n(async e=>{let t=new Headers(e.request.headers);t.delete("origin");let r=new Request(e.request.url,{method:e.request.method,headers:t});return typeof e.env?.ASSETS?.fetch=="function"?e.env.ASSETS.fetch(r):e.next(r)},"fetchKnowgrphStaticAsset"),hi=n(e=>{let t=new URL(e.url),r=t.pathname.replace(/\/+$/,"")||"/",o=Ar(e.url);return r===Je?"health":r===`${E}/mcp`?"mcp":kn(r)?"github-workspace-write":r===`${E}/robots.txt`?"robots":r===`${E}/sitemap.xml`?"sitemap":r===`${E}/auth.md`||r==="/auth.md"?"auth-md":r.startsWith(`${E}/.well-known/`)?"well-known":o?at(e)?"shared-doc-markdown":"shared-doc-html":Mt(t.pathname)?at(e)?"homepage-markdown":"homepage-html":"app-surface"},"resolveAgentReadyRouteTag"),Ot=n((e,t)=>dn(t,{owner:cn,tag:hi(e)}),"withKnowgrphRouteHeaders"),wn=n(async e=>{let t=new URL(e.url),r=t.pathname.replace(/\/+$/,"")||"/",o=Ar(e.url);if(o&&at(e))return ai(e,o);if(Mt(t.pathname)&&at(e))return un(pn);switch(r){case Je:return Ps(On());case`${E}/mcp`:return li(e);case`${E}/robots.txt`:return st(Us,"text/plain; charset=utf-8");case`${E}/sitemap.xml`:return st(Ls,"application/xml; charset=utf-8");case`${E}/auth.md`:case"/auth.md":return st(Ks,"text/markdown; charset=utf-8");case`${E}/.well-known/api-catalog`:return _e(xn,"application/linkset+json; charset=utf-8");case`${E}/.well-known/openapi.json`:return _e(En,"application/vnd.oai.openapi+json; charset=utf-8");case yr:return _e(Cn);case`${E}/.well-known/oauth-protected-resource`:return _e(it);case`${E}/.well-known/oauth-authorization-server`:return _e(fn);case`${E}/.well-known/openid-configuration`:return _e(fn);case`${E}/.well-known/mcp/server-card.json`:return _e(Ae);case`${E}/.well-known/mcp/apps/knowgrph-agent-ready.html`:return Rs(pi());case`${E}/.well-known/mcp.json`:return _e(Ae);case`${E}/.well-known/agent-skills/index.json`:return _e(await vn());case`${E}/.well-known/http-message-signatures-directory`:return _e(Xs);default:return yn.has(r)?st(yn.get(r),"text/markdown; charset=utf-8"):null}},"routeResponse");async function Ue(e){let{env:t,request:r}=e,o=String(r.method||"GET").toUpperCase(),a=new URL(r.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(o==="POST"&&a.pathname.replace(/\/+$/,"")===`${E}/mcp`)return Ot(r,await wn(r));if(o==="POST"&&kn(a.pathname))return Ot(r,await Is(r,t));if(o!=="GET"&&o!=="HEAD")return ue(405,{ok:!1,error:"unsupported_method"});if(di(a.pathname))return mi(e);let s=await wn(r);if(s){let p=Ot(r,s);return o==="HEAD"?new Response(null,p):p}let i=Ar(r.url)?await Vo(e,E):await e.next();if(!ui(a.pathname))return i;let c=o==="HEAD"?i:await qs(i),l=new Response(o==="HEAD"?null:c.body,c);return l.headers.set("link",ln),Mt(a.pathname)&&(l.headers.delete("x-frame-options"),l.headers.delete("content-security-policy-report-only"),l.headers.set("content-security-policy","frame-ancestors *")),Ot(r,l)}n(Ue,"onRequest");async function Nn(e){return Ue(e)}n(Nn,"onRequest");async function Un(e){return Ue(e)}n(Un,"onRequest");async function Ln(e){return Ue(e)}n(Ln,"onRequest");var gi=Object.freeze(new Set(["","80","443"])),fi=Object.freeze([".local",".localhost",".internal"]),yi=Object.freeze(new Set(["localhost"]));function He(e){return String(e||"").trim().toLowerCase()}n(He,"normalizeHostname");function wi(e){let t=He(e);if(!/^\d{1,3}(\.\d{1,3}){3}$/.test(t))return!1;let r=t.split(".").map(o=>Number(o));return r.length!==4?!1:r.every(o=>Number.isInteger(o)&&o>=0&&o<=255)}n(wi,"isIpv4Literal");function Kn(e){let[t,r,o,a]=e.split(".").map(s=>Number(s));return(t<<24|r<<16|o<<8|a)>>>0}n(Kn,"ipv4ToInt");function Si(e,t,r){if(!Number.isInteger(r)||r<0||r>32)return!1;if(r===0)return!0;let o=4294967295<<32-r>>>0;return(e&o)===(t&o)}n(Si,"inIpv4Cidr");function _i(e){let t=He(e);return!t||!t.includes(":")?!1:/^[0-9a-f:]+$/i.test(t)}n(_i,"isIpv6Literal");function bi(e){let t=He(e);return!!(!t||t==="::1"||t==="0:0:0:0:0:0:0:1"||t.startsWith("fc")||t.startsWith("fd")||/^fe[89ab]/i.test(t))}n(bi,"isBlockedIpv6");function Ri(e,{blockedExact:t,blockedSuffixes:r}={}){let o=He(e);if(!o)return!0;let a=t||yi;if(a instanceof Set&&a.has(o))return!0;let s=r||fi;if(Array.isArray(s))for(let i of s){let c=He(i);if(c&&(o===c||o.endsWith(c)))return!0}return!1}n(Ri,"isBlockedHostname");function Pi(e){let t=He(e);if(!t)return!0;if(wi(t)){let r=Kn(t),o=[{base:"0.0.0.0",bits:8},{base:"10.0.0.0",bits:8},{base:"127.0.0.0",bits:8},{base:"169.254.0.0",bits:16},{base:"172.16.0.0",bits:12},{base:"192.168.0.0",bits:16},{base:"100.64.0.0",bits:10}];for(let a of o){let s=Kn(a.base);if(Si(r,s,a.bits))return!0}return!1}return _i(t)?bi(t):!1}n(Pi,"isBlockedIpLiteral");function Nt(e,{allowedPorts:t}={}){let r=String(e||"").trim();if(!r)throw new Error("invalid_url");let o;try{o=new URL(r)}catch{throw new Error("invalid_url")}if(o.protocol!=="http:"&&o.protocol!=="https:")throw new Error("invalid_url");if(o.username||o.password)throw new Error("invalid_url");let a=t||gi,s=String(o.port||"");if(a instanceof Set&&!a.has(s))throw new Error("port_not_allowed");let i=He(o.hostname);if(!i)throw new Error("invalid_url");if(Ri(i))throw new Error("blocked_host");if(Pi(i))throw new Error("blocked_host");return o}n(Nt,"parseAndValidateExternalUrl");function Ut(e){return String(e.headers.get("sec-fetch-site")||"").trim().toLowerCase()==="cross-site"}n(Ut,"shouldRejectCrossSiteFetch");var Ai={"content-type":"application/json; charset=utf-8","cache-control":"public, max-age=600"};function je(e,t={}){return new Response(JSON.stringify(e),{...t,headers:{...Ai,...t.headers||{}}})}n(je,"json");function Lt(...e){for(let t of e){if(!t)continue;let r=String(t).trim();if(r)return r}return null}n(Lt,"pickFirst");function ki(e){let t=e.slice(0,8e4),r=t.match(/<title[^>]*>([^<]*)<\/title>/i),o=t.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i),a=t.match(/<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i),s=t.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i),i=t.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i),c=t.match(/<meta[^>]+property=["']og:site_name["'][^>]*content=["']([^"']+)["'][^>]*>/i);return{title:Lt(o?.[1],r?.[1]),description:Lt(a?.[1],s?.[1]),image:Lt(i?.[1]),siteName:Lt(c?.[1])}}n(ki,"extractMeta");async function $n(e){let t=e.request.url,r=new URL(t);if(r.searchParams.get("ping")==="1")return je({ok:!0,ping:!0});let o=r.searchParams.get("url")||"";if(Ut(e.request))return je({ok:!1,error:"forbidden"},{status:403,headers:{"cache-control":"no-store"}});let a;try{a=Nt(o)}catch{return je({ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}try{let s=await fetch(a.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkPreview/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),i=s.headers.get("content-type")||"";if(!s.ok)return je({ok:!1,error:"fetch_failed",status:s.status,url:a.toString()},{status:200,headers:{"cache-control":"no-store"}});if(!i.includes("text/html"))return je({ok:!0,url:a.toString(),domain:a.host,contentType:i,title:null,description:null,image:null,siteName:null});let c=await s.text(),l=ki(c);return je({ok:!0,url:a.toString(),domain:a.host,contentType:i,...l})}catch(s){return je({ok:!1,error:"exception",message:s?.message||String(s),url:a.toString()},{status:200,headers:{"cache-control":"no-store"}})}}n($n,"onRequestGet");var Dn=35e4;function xi(e){let t=e;return t=t.replace(/<script\b[\s\S]*?<\/script>/gi,""),t=t.replace(/<iframe\b[\s\S]*?<\/iframe>/gi,""),t=t.replace(/<object\b[\s\S]*?<\/object>/gi,""),t=t.replace(/<embed\b[\s\S]*?>/gi,""),t=t.replace(/<noscript\b[\s\S]*?<\/noscript>/gi,""),t=t.replace(/\son[a-z]+\s*=\s*"[^"]*"/gi,""),t=t.replace(/\son[a-z]+\s*=\s*'[^']*'/gi,""),t}n(xi,"stripActiveContent");function Ei({url:e,title:t,innerHtml:r}){let o=t?String(t).slice(0,140):"Preview",a=String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");return`<!doctype html>
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
</html>`}n(Ei,"buildWrapper");async function Hn(e){let r=new URL(e.request.url).searchParams.get("url")||"";if(Ut(e.request))return new Response("Forbidden",{status:403,headers:{"cache-control":"no-store"}});let o;try{o=Nt(r)}catch(a){let s=a instanceof Error?a.message:"invalid_url";return new Response(s,{status:400,headers:{"cache-control":"no-store"}})}try{let a=await fetch(o.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkProxy/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),s=a.headers.get("content-type")||"";if(!a.ok)return new Response(`Fetch failed (${a.status})`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});if(!s.includes("text/html"))return new Response(`Unsupported content-type: ${s}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public, max-age=600"}});let i=await a.text();i.length>Dn&&(i=i.slice(0,Dn));let l=i.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()||o.host;i=xi(i),/<base\s/i.test(i)||(i=i.replace(/<head([^>]*)>/i,`<head$1><base href="${o.origin}/">`));let m=Ei({url:o.toString(),title:l,innerHtml:i});return new Response(m,{status:200,headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600","content-security-policy":"default-src 'none'; img-src https: data:; style-src 'unsafe-inline' https:; font-src https: data:; frame-ancestors 'self';"}})}catch(a){return new Response(`Exception: ${a?.message||String(a)}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}})}}n(Hn,"onRequestGet");var kr="api.openai.com",Kt="api.miromind.ai",$t="apihub.agnes-ai.com",Dt="ark.ap-southeast.bytepluses.com",xr="ark.eu-west.bytepluses.com",Bn=new Set(["localhost","127.0.0.1","0.0.0.0"]),ke=n(e=>String(e||"").trim().toLowerCase(),"normalizeHost"),be=n((e,t)=>String(e.get(t)||"").trim(),"readHeader"),Gn=n(e=>Bn.has(ke(e)),"isLocalHost"),jn=n(e=>{let t=String(e||"").trim();if(!t)return new Set;let r=new Set;return t.split(",").map(o=>ke(o)).filter(Boolean).forEach(o=>r.add(o)),r},"parseCsvSet"),Wn=n((e,{includeOpenAi:t=!1,includeMiroMind:r=!1,includeAgnes:o=!1,includeBytePlus:a=!1}={})=>{let s=jn(e.KNOWGRPH_INTEGRATION_ALLOWED_HOSTS),i=jn(e.KNOWGRPH_CHAT_PROXY_ALLOWED_HOSTS),c=s.size?s:i,l=c.size?c:new Set([...Bn]);return t&&l.add(kr),r&&l.add(Kt),o&&l.add($t),a&&(l.add(Dt),l.add(xr)),l},"parseAllowedHosts"),ce=n(e=>{let t=be(e.headers,"origin");if(!t)return{};let r="";try{r=ke(new URL(t).host)}catch{return{}}let o=ke(new URL(e.url).host);return r===o||r.startsWith("localhost:")||r.startsWith("127.0.0.1:")?{"access-control-allow-origin":t,vary:"Origin"}:{}},"corsHeaders"),fe=n((e,t,r)=>new Response(JSON.stringify(t),{status:r,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...ce(e)}}),"jsonResponse");var Ht={"content-type":"application/json; charset=utf-8","cache-control":"no-store"};function lt(e,t,r=200){return new Response(JSON.stringify(t),{status:r,headers:{...Ht,...ce(e)}})}n(lt,"jsonResponse");async function Ci(e){let t=new URL("/knowgrph/imports/hackamap/hackamap-graph.json",e.url),r=await fetch(t.toString(),{redirect:"follow"});return r.ok?await r.json():null}n(Ci,"fetchHackamapGraphJson");async function Be(e,t){let r=new URL(t,e.url),o=await fetch(r.toString(),{redirect:"follow"});return o.ok?await o.json():null}n(Be,"fetchHackamapJson");async function Ti(e){let t=await Be(e,"/knowgrph/imports/hackamap/hackamap_api_graph.json");return Vn(t)?t:null}n(Ti,"fetchHackamapApiGraphJson");async function vi(e){let t=await Be(e,"/knowgrph/imports/hackamap/hackamap_pipeline.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n(vi,"fetchHackamapPipelineJson");async function zn(e){let t=await Be(e,"/knowgrph/imports/hackamap/hackamap_query_presets.json");return Array.isArray(t)?t.filter(Boolean):[]}n(zn,"fetchHackamapQueryPresetsJson");async function qn(e){let t=await Be(e,"/knowgrph/imports/hackamap/query-outputs/query-runs.manifest.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n(qn,"fetchHackamapQueryRunsManifestJson");function Vn(e){return!e||typeof e!="object"||Array.isArray(e)?!1:Array.isArray(e.nodes)&&Array.isArray(e.edges)}n(Vn,"isApiGraphPayload");function Yn(e,t){let r=String(e&&e.output&&e.output.per_table_prefix||e?.id||t?.preset||"").trim(),o=String(t?.output_suffix||"").trim();return o?`${r}-${o}`:r}n(Yn,"buildHackamapTablePrefix");function Er(e,t){if(!Array.isArray(e))return[];let r=[];for(let o of e){if(!o||typeof o!="object"||Array.isArray(o))continue;let a=String(o[t]||"").trim();a&&r.push(a)}return r}n(Er,"collectRowIds");async function Oi(e,t){let r=await Be(e,t);return Array.isArray(r)?r.length:0}n(Oi,"countHackamapQueryRows");async function Ii(e,t,r){let o=Yn(t,r);if(!o)return{};let a=["events","demos","sources","organizer","team","techstack"],s=await Promise.all(a.map(async i=>[i,await Oi(e,`/knowgrph/imports/hackamap/query-outputs/${i}.${o}.query.json`)]));return Object.fromEntries(s.filter(([,i])=>i>0))}n(Ii,"readHackamapRunTableCounts");function Cr(e){return Array.isArray(e)?e.map(Cr):!e||typeof e!="object"?e:Object.fromEntries(Object.entries(e).sort(([t],[r])=>String(t).localeCompare(String(r))).map(([t,r])=>[t,Cr(r)]))}n(Cr,"sortObjectKeys");function Mi(e){try{return JSON.stringify(Cr(e))}catch{return""}}n(Mi,"stableParamSignature");function Ni(e){return typeof e=="string"?{value:e,label:e}:{value:e,label:JSON.stringify(e)}}n(Ni,"toBuilderOption");function Ui(e,t){return e.map(r=>{let o=String(r?.id||"").trim();if(!o)return null;let a=r?.params&&typeof r.params=="object"&&!Array.isArray(r.params)?r.params:{},s=t.filter(l=>String(l?.preset||"").trim()===o),i=Array.from(new Set([...Object.keys(a),...s.flatMap(l=>l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?Object.keys(l.params):[])])).sort((l,p)=>String(l).localeCompare(String(p))),c=Object.fromEntries(i.map(l=>{let p=new Set,m=[],f=[a[l],...s.map(A=>A?.params&&typeof A.params=="object"&&!Array.isArray(A.params)?A.params[l]:void 0)];for(let A of f){if(typeof A>"u")continue;let _=Mi(A);!_||p.has(_)||(p.add(_),m.push(Ni(A)))}return[l,m]}));return{id:o,title:String(r?.title||o).trim(),params:a,param_keys:i,published_param_options:c}}).filter(Boolean)}n(Ui,"buildHackamapPresetRuntimeEntries");async function Li(e){let[t,r,o]=await Promise.all([vi(e),zn(e),qn(e)]),a=t&&typeof t=="object"?t.runtime||{}:{},s=String(a?.query_selection?.default_run_id||"").trim()||"enhanced",i=Array.isArray(o?.runs)?o.runs:[],c=(await Promise.all(i.map(async l=>{let p=String(l?.id||"").trim(),m=String(l?.preset||"").trim();if(!p)return null;let f=r.find(_=>String(_?.id||"").trim()===m),A=await Ii(e,f,l);return{id:p,preset:m,title:String(l?.title||l?.id||"").trim(),params:l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?l.params:{},output_suffix:String(l?.output_suffix||"").trim(),is_default:p===s,table_counts:A}}))).filter(l=>l?.id);return{ok:!0,runtime:{...a&&typeof a=="object"?a:{},presets:Ui(r,c),runs:c}}}n(Li,"buildHackamapRuntimeMeta");async function Ki(e,t){let r=String(t||"").trim();if(!r)return null;let[o,a]=await Promise.all([zn(e),qn(e)]),i=(Array.isArray(a?.runs)?a.runs:[]).find(x=>String(x?.id||"").trim()===r);if(!i)return null;let c=o.find(x=>String(x?.id||"").trim()===String(i?.preset||"").trim()),l=Yn(c,i);if(!l)return null;let[p,m]=await Promise.all([Be(e,`/knowgrph/imports/hackamap/query-outputs/events.${l}.query.json`),Be(e,`/knowgrph/imports/hackamap/query-outputs/demos.${l}.query.json`)]),f=new Set(Er(p,"id")),A=new Set(Er(m,"id")),_=Er(m,"event_id");for(let x of _)f.add(x);return{eventIds:f,demoIds:A}}n(Ki,"readHackamapQueryRunSelection");function Fn(e,t,r){if(!r||!Vn(e))return e;if(r.eventIds.size===0&&r.demoIds.size===0)return{...e,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_run_filter_skipped:"no-event-demo-rows"}};let o=new Set;r.eventIds.forEach(c=>o.add(`Event:${c}`)),r.demoIds.forEach(c=>o.add(`Demo:${c}`));let a=Array.isArray(e.nodes)?e.nodes.filter(c=>o.has(String(c?.id||"").trim())):[],s=new Set(a.map(c=>String(c?.id||"").trim()).filter(Boolean)),i=Array.isArray(e.edges)?e.edges.filter(c=>s.has(String(c?.source||"").trim())&&s.has(String(c?.target||"").trim())):[];return{...e,nodes:a,edges:i,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_event_count:r.eventIds.size,selected_demo_count:r.demoIds.size,total_problems:a.filter(c=>String(c?.type||"").trim()==="problem").length,total_solutions:a.filter(c=>String(c?.type||"").trim()==="solution").length}}}n(Fn,"filterHackamapApiGraphPayloadByRun");function $i(e){let t=Array.isArray(e?.nodes)?e.nodes:[],r=Array.isArray(e?.links)?e.links:[],o=[],a=new Set;for(let i of t){let c=String(i?.id||"").trim(),l=String(i?.type||"").trim(),p=String(i?.label||"").trim();if(!(!c||!l||!p)){if(l==="Event"){o.push({id:c,type:"problem",label:p,cluster:"Event"}),a.add(c);continue}l==="Demo"&&(o.push({id:c,type:"solution",label:p,cluster:"Demo"}),a.add(c))}}let s=[];for(let i of r){let c=String(i?.source||"").trim(),l=String(i?.target||"").trim(),p=String(i?.type||"").trim();!c||!l||p==="has_demo"&&(!a.has(c)||!a.has(l)||s.push({source:c,target:l,type:"has_demo",strength:.35}))}return{nodes:o,edges:s,meta:{source:"hackamap-graph.json:fallback",total_problems:o.filter(i=>i.type==="problem").length,total_solutions:o.filter(i=>i.type==="solution").length,...e?.content_signature?{content_signature:String(e.content_signature)}:{}}}}n($i,"toBipartiteApiPayload");async function Jn(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{...ce(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(r!=="GET"&&r!=="HEAD")return lt(t,{ok:!1,error:"unsupported_method"},405);if(String(o.searchParams.get("view")||"").trim().toLowerCase()==="meta"){let m=await Li(t);return r==="HEAD"?new Response(null,{status:200,headers:{...Ht,...ce(t)}}):lt(t,m,200)}let a=String(o.searchParams.get("run")||"").trim(),s=await Ki(t,a),i=await Ti(t);if(i){let m=Fn(i,a,s);return r==="HEAD"?new Response(null,{status:200,headers:{...Ht,...ce(t)}}):lt(t,m,200)}let c=await Ci(t);if(!c)return lt(t,{ok:!1,error:"missing_hackamap_graph",hint:"/knowgrph/imports/hackamap/{hackamap_api_graph.json,hackamap-graph.json} not found"},404);let l=$i(c),p=Fn(l,a,s);return r==="HEAD"?new Response(null,{status:200,headers:{...Ht,...ce(t)}}):lt(t,p,200)}n(Jn,"onRequest");var Di=!0,Xn=600,Qn={"content-type":"application/json; charset=utf-8","cache-control":`public, max-age=${Xn}`};function Ge(e,t,r={}){return new Response(JSON.stringify(t),{...r,headers:{...Qn,...r.headers||{},...ce(e)}})}n(Ge,"jsonResponse");function Hi(e){try{let t=new URL(String(e));return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}n(Hi,"isHttpUrl");function pt(e){return String(e||"").trim().toLowerCase()}n(pt,"normalizeHost");function Tr(e,{exact:t,suffixes:r}){let o=pt(e);return o?!!(Array.isArray(t)&&t.some(a=>o===pt(a))||Array.isArray(r)&&r.some(a=>o===pt(a)||o.endsWith(`.${pt(a)}`))):!1}n(Tr,"isHostMatch");function ji(e){let t=pt(e.hostname),r=e.toString();return Tr(t,{suffixes:["linkedin.com"]})?new URL(`https://www.linkedin.com/embeds/oembed.json?url=${encodeURIComponent(r)}`):Tr(t,{exact:["twitter.com","x.com"],suffixes:["twitter.com","x.com"]})?new URL(`https://publish.twitter.com/oembed?omit_script=1&url=${encodeURIComponent(r)}`):Tr(t,{exact:["reddit.com"],suffixes:["reddit.com"]})?new URL(`https://www.reddit.com/oembed?url=${encodeURIComponent(r)}`):null}n(ji,"buildOembedUpstreamUrl");async function Bi({upstreamUrl:e}){return await fetch(e.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; OEmbedProxy/1.0)",accept:"application/json,text/json;q=0.9,*/*;q=0.1"},redirect:"follow",cf:{cacheTtl:Xn,cacheEverything:!0}})}n(Bi,"fetchJsonUpstream");async function Zn(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{...ce(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD"].includes(r))return Ge(t,{ok:!1,error:"unsupported_method"},{status:405});if(o.searchParams.get("ping")==="1")return Ge(t,{ok:!0,ping:!0});if(Di)return Ge(t,{ok:!1,error:"disabled_by_policy"},{status:200,headers:{"cache-control":"no-store"}});let a=o.searchParams.get("url")||"";if(!Hi(a))return Ge(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}});let s;try{s=new URL(a)}catch{return Ge(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}let i=ji(s);if(!i)return Ge(t,{ok:!1,error:"unsupported_provider"},{status:400,headers:{"cache-control":"no-store"}});let c=await Bi({upstreamUrl:i}),l=new Headers(c.headers);l.delete("content-length"),l.set("cache-control",c.ok?Qn["cache-control"]:"no-store");for(let[m,f]of Object.entries(ce(t)))l.set(m,f);if(r==="HEAD")return new Response(null,{status:c.status,headers:l});let p=await c.text();try{JSON.parse(p)}catch{return Ge(t,{ok:!1,error:"invalid_upstream_json",status:c.status},{status:502,headers:{"cache-control":"no-store"}})}return l.set("content-type","application/json; charset=utf-8"),new Response(p,{status:c.status,headers:l})}n(Zn,"onRequest");var ea="/__chat_proxy",jt="agnes-ai",Bt="byteplus-modelark",Gt="miromind",Gi=n(e=>{let t=ke(e);return t==="openai"?"openai":t===Bt||t==="byteplus"?Bt:t===Gt||t==="miromind-api"?Gt:t===jt||t==="agnes"||t==="agnes-ai-api"?jt:t},"normalizeProviderId"),Wi=n(e=>ke(e)===$t,"isAgnesHost"),Fi=n(e=>{let t=ke(e);return t===Dt||t===xr},"isBytePlusHost"),zi=n(e=>ke(e)===Kt,"isMiroMindHost"),qi=n(({provider:e,requestedUpstream:t,env:r})=>e==="openai"?"https://api.openai.com":e===Gt?t||`https://${Kt}`:e===jt?t||`https://${$t}`:e===Bt?t||String(r.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim()||`https://${Dt}`:t||String(r.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim(),"pickUpstreamBase");async function ta(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=new URL(t.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":be(t.headers,"origin")||"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD","POST"].includes(o))return fe(t,{ok:!1,error:"Unsupported method"},405);let s=Gi(be(t.headers,"x-kg-chat-provider")),i=qi({provider:s,requestedUpstream:be(t.headers,"x-kg-chat-upstream"),env:r});if(!i)return fe(t,{ok:!1,error:"Missing chat proxy upstream configuration"},500);let c;try{c=new URL(i)}catch{return fe(t,{ok:!1,error:"Invalid chat proxy upstream configuration"},500)}let l=Wn(r,{includeOpenAi:!0,includeMiroMind:!0,includeAgnes:!0,includeBytePlus:!0}),p=ke(c.hostname);if(!l.has(p))return fe(t,{ok:!1,error:"Chat proxy upstream host is not allowed"},403);if(!Gn(p)&&c.protocol!=="https:")return fe(t,{ok:!1,error:"Chat proxy requires HTTPS for non-local upstream hosts"},403);let m=s==="openai"||p===kr,f=s===Gt||zi(p),A=s===jt||Wi(p),_=s===Bt||Fi(p),x=be(t.headers,"x-kg-chat-api-key"),D=String(r.KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY||r.OPENAI_API_KEY||"").trim(),K=String(r.KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY||r.MIROMIND_API_KEY||"").trim(),F=String(r.KNOWGRPH_CHAT_PROXY_AGNES_API_KEY||r.AGNES_API_KEY||"").trim(),ee=String(r.KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY||r.BYTEPLUS_API_KEY||"").trim(),z=(x||D).slice(0,512),C=(x||K).slice(0,512),O=(x||F).slice(0,512),Q=(x||ee).slice(0,512),U=_?Q:A?O:f?C:z;if(m&&!z)return fe(t,{ok:!1,error:"Missing OpenAI API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY or OPENAI_API_KEY)"},401);if(f&&!U)return fe(t,{ok:!1,error:"Missing MiroMind API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY or MIROMIND_API_KEY)"},401);if(A&&!U)return fe(t,{ok:!1,error:"Missing Agnes API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_AGNES_API_KEY or AGNES_API_KEY)"},401);if(_&&!U)return fe(t,{ok:!1,error:"Missing BytePlus API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY or BYTEPLUS_API_KEY)"},401);if(o==="POST"&&!be(t.headers,"content-type").toLowerCase().includes("application/json"))return fe(t,{ok:!1,error:"Chat proxy expects application/json payloads"},415);let re=a.pathname.startsWith(ea)&&a.pathname.slice(ea.length)||"/v1/chat/completions",M=re.startsWith("/")?re:`/${re}`,N=new URL(`${M}${a.search||""}`,c),B=new Headers,se=be(t.headers,"content-type"),de=be(t.headers,"accept");se&&B.set("content-type",se),de&&B.set("accept",de),(m||f||A||_)&&B.set("authorization",`Bearer ${U}`);let ye=be(t.headers,"x-client-request-id").slice(0,512);ye&&B.set("x-client-request-id",ye);let P=new AbortController,w=Number(r.KNOWGRPH_CHAT_PROXY_TIMEOUT_MS),y=Number.isFinite(w)?Math.max(5e3,Math.min(18e4,Math.floor(w))):9e4,d=setTimeout(()=>P.abort(),y);try{let h=await fetch(N.toString(),{method:o,headers:B,body:o==="GET"||o==="HEAD"?void 0:t.body,signal:P.signal,redirect:"follow"}),g=new Headers(h.headers);g.delete("content-length"),g.delete("www-authenticate"),g.set("cache-control","no-store");let b=be(t.headers,"origin");return b&&(g.set("access-control-allow-origin",b),g.set("vary","Origin")),o==="HEAD"?new Response(null,{status:h.status,statusText:h.statusText,headers:g}):new Response(h.body,{status:h.status,statusText:h.statusText,headers:g})}catch(h){let g=h&&typeof h=="object"&&"message"in h?String(h.message||""):"",b=P.signal.aborted||/aborted|timeout/i.test(g);return fe(t,{ok:!1,error:g||"Failed to reach chat upstream"},b?504:502)}finally{clearTimeout(d)}}n(ta,"onRequest");function Vi(e){let t=e.map(r=>r==null?"":typeof r=="boolean"?r?"1":"0":typeof r=="number"?Number.isFinite(r)?String(r):"":String(r)).join("|");return`rich-media-preview:${Ze(t)}`}n(Vi,"buildRichMediaPreviewSemanticKey");var oa="png";function ut(e){let t=typeof e=="number"?e:Number(String(e??"").trim());if(!Number.isFinite(t))return null;let r=Math.max(0,Number(t.toFixed(3)));return Number.isFinite(r)?r:null}n(ut,"normalizeRemoteVideoFrameSeconds");function Yi(e){return String(ut(e)??0).replace(/\./g,"_")}n(Yi,"formatRemoteVideoFrameSecondsForFileName");function Ft(e){let t=String(e||"").trim().toLowerCase();return t==="jpg"||t==="jpeg"?"jpg":"png"}n(Ft,"normalizeRemoteVideoFrameFormat");function vr(e){let t=String(e.sourceUrl||"").trim(),r=ut(e.timeSeconds)??0,o=Ft(e.format||oa);return Vi(["remote-video-frame",t,r,o])}n(vr,"buildRemoteVideoFrameSemanticKey");function na(e){let t=ut(e.timeSeconds)??0,r=Ft(e.format||oa),o=vr({...e,timeSeconds:t,format:r});return`frame-${o.split(":").pop()||Ze(o)}-t${Yi(t)}.${r}`}n(na,"buildRemoteVideoFrameFileName");var Wt=n(e=>{let t=String(e||"").trim();return t&&/^[A-Za-z0-9_-]{6,128}$/.test(t)?t:null},"normalizeYouTubeIdLikeValue"),ra=n(e=>{try{let t=new URL(String(e||"").trim()),r=String(t.hostname||"").toLowerCase();if(r==="youtu.be"||r.endsWith(".youtu.be")){let o=t.pathname.replace(/^\/+/,"").split("/")[0]?.trim()||"";return Wt(o)}if(r==="youtube.com"||r.endsWith(".youtube.com")||r==="youtube-nocookie.com"||r.endsWith(".youtube-nocookie.com")){let o=String(t.searchParams.get("v")||"").trim();if(o)return Wt(o);let a=t.pathname.split("/").filter(Boolean),s=a[0]||"",i=a[1]||"";if((s==="embed"||s==="shorts"||s==="live")&&i)return Wt(i);if(s==="watch"){let c=String(t.searchParams.get("v")||"").trim();return Wt(c)}}}catch{return null}return null},"readYouTubeIdFromUrl");function Ji(e){let t=String(e||"").trim().replace(/^<|>$/g,"").trim();for(;/[),.;:!?]$/.test(t);){let r=t.slice(0,-1).trim();if(!r)break;let o=ra(t),a=ra(r);if(!a||o&&o!==a)break;t=r}return t}n(Ji,"stripYouTubeUrlTrailingPunctuation");function aa(e){let t=n(r=>{let o=String(r||"").trim();if(!o)return null;if(/^\d+$/.test(o))return Number(o);let a=o.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i);if(!a)return null;let s=a[1]?Number(a[1]):0,i=a[2]?Number(a[2]):0,c=a[3]?Number(a[3]):0,l=s*3600+i*60+c;return l>0&&Number.isFinite(l)?l:null},"parseChunk");try{let r=new URL(Ji(e)),o=r.searchParams.get("t")||r.searchParams.get("start")||"",a=r.hash&&new URLSearchParams(r.hash.replace(/^#/,"")).get("t")||"";return t(o)??t(a)}catch{return null}}n(aa,"parseYouTubeStartSeconds");var Xi="/image/knowgrph/video-frame",Qi=4096,Zi=720*60,ec=/^frame-[a-f0-9]+-t\d+\.(?:png|jpg)$/i,Nr={"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"accept, content-type"},Mr=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),Or=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:JSON.stringify(e),{status:t,headers:{...Nr,"content-type":"application/json; charset=utf-8","cache-control":"no-store"}}),"jsonResponse"),Ir=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:e,{status:t,headers:{...Nr,"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}}),"textResponse"),tc=n((e,t)=>e===t||e.endsWith(`.${t}`),"hostMatches"),rc=n(e=>{let t=Mr(e?.KG_VIDEO_FRAME_ALLOWED_HOSTS);return t?t.split(",").map(r=>Mr(r).toLowerCase()).filter(Boolean):["youtube.com","youtu.be","youtube-nocookie.com","bilibili.com","b23.tv"]},"readAllowedHosts"),oc=n(e=>Mr(e).replace(/^<|>$/g,"").trim(),"unwrapUrlInput"),nc=n((e,t)=>{try{let r=new URL(e);if(r.protocol!=="https:"&&r.protocol!=="http:")return!1;let o=r.hostname.toLowerCase();return rc(t).some(a=>tc(o,a))}catch{return!1}},"isAllowedSourceUrl"),ac=n((e,t)=>{let r=new URL(e.url),o=oc(r.searchParams.get("url")||"");if(!o)return{error:"Missing url parameter"};if(o.length>Qi)return{error:"Video URL is too long"};if(!nc(o,t))return{error:"Video frame extraction is limited to supported remote video hosts"};let a=ut(r.searchParams.get("time"))??aa(o);if(a==null)return{error:"Missing time parameter"};let s=Math.min(Zi,Math.max(0,a)),i=Ft(r.searchParams.get("format")||"png"),c=na({sourceUrl:o,timeSeconds:s,format:i});if(!ec.test(c))return{error:"Invalid frame cache key"};let l=`${Xi}/${c}`;return{sourceUrl:o,timeSeconds:s,format:i,fileName:c,publicUrl:l,semanticKey:vr({sourceUrl:o,timeSeconds:s,format:i})}},"readFrameRequest"),sc=n(async(e,t,r)=>{let o=new URL(t,e.request.url),a=new Request(o.toString(),{method:r});return typeof e.env?.ASSETS?.fetch=="function"?await e.env.ASSETS.fetch(a):await fetch(a)},"fetchStaticAsset"),ic=n(e=>`Frame has not been generated yet. Run the local video-frame extractor and publish ${e.publicUrl}.`,"missingFrameMessage"),cc=n((e,t)=>{let r=new Headers;r.set("content-type",t.format==="jpg"?"image/jpeg":"image/png"),r.set("cache-control","public, max-age=31536000, immutable"),r.set("access-control-allow-origin","*");let o=e.headers.get("content-length");o&&r.set("content-length",o);let a=e.headers.get("etag");return a&&r.set("etag",a),r},"imageResponseHeaders");async function sa(e){let t=e.request;if(t.method==="OPTIONS")return new Response(null,{status:204,headers:Nr});if(t.method!=="GET"&&t.method!=="HEAD")return Ir("Method not allowed",405,t.method);let r=new URL(t.url).searchParams.get("emit")==="json",o=ac(t,e.env||{});if("error"in o)return r?Or({ok:!1,error:o.error},400,t.method):Ir(o.error,400,t.method);let a=r&&t.method!=="HEAD"?"GET":r||t.method==="HEAD"?"HEAD":"GET",s=await sc(e,o.publicUrl,a);if(!s.ok){let i=ic(o);return r?Or({ok:!1,error:i,publicUrl:o.publicUrl,semanticKey:o.semanticKey},404,t.method):Ir(i,404,t.method)}if(r){let i=Number(s.headers.get("content-length")||0);return(!Number.isFinite(i)||i<=0)&&t.method!=="HEAD"&&(i=(await s.arrayBuffer()).byteLength),Or({ok:!0,imageUrl:o.publicUrl,publicUrl:o.publicUrl,semanticKey:o.semanticKey,cached:!0,bytes:Number.isFinite(i)?Math.max(0,Math.floor(i)):0,timeSeconds:o.timeSeconds,format:o.format},200,t.method)}return new Response(t.method==="HEAD"?null:s.body,{status:200,headers:cc(s,o)})}n(sa,"onRequest");var ia={"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"content-type"},zt=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:JSON.stringify(e),{status:t,headers:ia}),"jsonResponse"),Z=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),lc=n(e=>{try{let t=new URL(String(e||"").trim());if(/youtu\.be$/i.test(t.hostname))return Z(t.pathname.split("/").filter(Boolean)[0]);if(/youtube\.com$/i.test(t.hostname)||/youtube-nocookie\.com$/i.test(t.hostname)){let r=Z(t.searchParams.get("v"));if(r)return r;let o=t.pathname.split("/").filter(Boolean),a=o.findIndex(s=>["embed","shorts","live"].includes(s));if(a>=0)return Z(o[a+1])}}catch{}return""},"readVideoId"),pc=n((e,t)=>{let r=e.indexOf(t);if(r<0)return null;let o=e.indexOf("{",r);if(o<0)return null;let a=0,s=!1,i=!1;for(let c=o;c<e.length;c+=1){let l=e[c];if(s){i?i=!1:l==="\\"?i=!0:l==='"'&&(s=!1);continue}if(l==='"')s=!0;else if(l==="{")a+=1;else if(l==="}"&&(a-=1,a===0))return e.slice(o,c+1)}return null},"extractJsonAfter"),uc=n(e=>{for(let t of["ytInitialPlayerResponse =","ytInitialPlayerResponse="]){let r=pc(e,t);if(r)try{return JSON.parse(r)}catch{}}return null},"parsePlayerResponse"),dc=n((e,t)=>{let r=Z(t||"en").toLowerCase();return e.find(o=>Z(o.languageCode).toLowerCase()===r)||e.find(o=>Z(o.languageCode).toLowerCase().startsWith(r.split("-")[0]))||e.find(o=>Z(o.kind)!=="asr")||e[0]||null},"pickCaptionTrack"),mc=n(e=>{let t=new URL(e);return t.searchParams.set("fmt","json3"),t.toString()},"withJsonCaptionFormat"),hc=n(e=>(Array.isArray(e?.events)?e.events:[]).map(r=>{let o=Array.isArray(r.segs)?Z(r.segs.map(i=>i?.utf8||"").join("")):"",a=Number(r.tStartMs)/1e3,s=Number(r.dDurationMs||0)/1e3;return o&&Number.isFinite(a)?{text:o,start:a,duration:Number.isFinite(s)?s:0}:null}).filter(Boolean),"parseCaptionJson3"),gc=n(e=>String(e||"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'"),"decodeXmlText"),fc=n(e=>{let t=[],r=/<text\b([^>]*)>([\s\S]*?)<\/text>/gi,o=null;for(;o=r.exec(String(e||""));){let a=o[1]||"",s=Number(a.match(/\bstart="([^"]+)"/i)?.[1]),i=Number(a.match(/\bdur="([^"]+)"/i)?.[1]||0),c=Z(gc(o[2]||""));c&&Number.isFinite(s)&&t.push({text:c,start:s,duration:Number.isFinite(i)?i:0})}return t},"parseCaptionXml"),yc=n((e,t)=>{let r=String(e||"").trim();if(!r)return[];if(String(t||"").toLowerCase().includes("json")||r.startsWith("{")||r.startsWith("["))try{return hc(JSON.parse(r))}catch{return[]}return fc(r)},"parseCaptionResponseText"),wc=n(e=>{let t=Math.max(0,Math.floor(Number(e)||0)),r=Math.floor(t/60),o=String(t%60).padStart(2,"0");return`${r}:${o}`},"formatTimestamp"),Sc=n((e,t)=>{let r=new URL(e);return r.searchParams.set("t",`${Math.max(0,Math.floor(Number(t)||0))}s`),r.toString()},"timestampUrl"),_c=n(({title:e,sourceUrl:t,videoId:r,authorName:o,thumbnailUrl:a,segments:s})=>[`# ${e||`YouTube ${r}`}`,"",`Video ID: ${r}`,o?`Author: ${o}`:"",`Source: [${t}](${t})`,a?`[![${e||r}](${a})](${t})`:"","",s.length>0?"## Transcript":"## Video Source","",...s.length>0?s.map(i=>`[${wc(i.start)}](${Sc(t,i.start)}) ${i.text}`):["Captions were not available from the source at import time.","The source URL, title, author, and thumbnail remain available for downstream storyboard reconstruction."],""].filter(i=>i!=="").join(`
`),"buildMarkdown"),Ur=n(({videoId:e,sourceUrl:t,title:r,authorName:o,thumbnailUrl:a,lang:s,languageCode:i,segments:c,captionStatus:l})=>{let p={type:"rag:YouTubeTranscript",video_id:e,source_url:t,title:r,author_name:o,thumbnail_url:a,language_code:Z(i)||s,caption_status:l,segment_count:c.length,duration:c.reduce((m,f)=>Math.max(m,f.start+f.duration),0),segments:c};return{ok:!0,name:`youtube-${e.toLowerCase()}.md`,markdown:_c({title:r,sourceUrl:t,videoId:e,authorName:o,thumbnailUrl:a,segments:c}),transcript:p}},"buildPayload");async function bc({sourceUrl:e,lang:t="en",fetchImpl:r=fetch}){let o=lc(e);if(!o)return{ok:!1,error:"unsupported_youtube_url"};let a=`https://www.youtube.com/watch?v=${encodeURIComponent(o)}`,[s,i]=await Promise.all([r(`https://www.youtube.com/oembed?url=${encodeURIComponent(a)}&format=json`,{headers:{accept:"application/json"}}).catch(()=>null),r(a,{headers:{accept:"text/html,application/xhtml+xml","accept-language":"en-US,en;q=0.9","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}})]),c=s?.ok?await s.json().catch(()=>({})):{},l=i.ok?uc(await i.text()):null,p=Z(c.title)||Z(l?.videoDetails?.title)||`YouTube ${o}`,m=Z(c.author_name)||Z(l?.videoDetails?.author),f=Z(c.thumbnail_url)||`https://i.ytimg.com/vi/${o}/hqdefault.jpg`;if(!i.ok)return Ur({videoId:o,sourceUrl:a,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:t,segments:[],captionStatus:`watch-fetch-${i.status}`});let A=l?.captions?.playerCaptionsTracklistRenderer?.captionTracks||[],_=dc(Array.isArray(A)?A:[],t);if(!_?.baseUrl)return Ur({videoId:o,sourceUrl:a,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:t,segments:[],captionStatus:"captions-unavailable"});let x=await r(mc(_.baseUrl),{headers:{accept:"application/json,text/xml,text/plain,*/*","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}}).catch(()=>null),D=x?await x.text().catch(()=>""):"",K=x?.ok?yc(D,x.headers.get("content-type")):[],F=K.length>0?"available":x?.ok?"captions-empty":`captions-fetch-${x?.status||"failed"}`;return Ur({videoId:o,sourceUrl:a,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:_.languageCode,segments:K,captionStatus:F})}n(bc,"buildYouTubeTranscriptPayload");async function ca(e){let t=e.request,r=String(t.method||"GET").toUpperCase();if(r==="OPTIONS")return new Response(null,{status:204,headers:ia});if(r!=="GET"&&r!=="HEAD"&&r!=="POST")return zt({ok:!1,error:"unsupported_method"},405,r);let o=new URL(t.url),a=Z(o.searchParams.get("url")),s=Z(o.searchParams.get("lang"))||"en";if(!a)return zt({ok:!1,error:"missing_url"},400,r);try{let i=await bc({sourceUrl:a,lang:s});return zt(i,i.ok?200:502,r)}catch(i){let c=i&&typeof i=="object"&&"message"in i?Z(i.message):"";return zt({ok:!1,error:c||"youtube_conversion_failed"},502,r)}}n(ca,"onRequest");async function la(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase();if(r==="OPTIONS")return new Response(null,{status:204,headers:{...ce(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(r!=="GET"&&r!=="HEAD")return new Response(JSON.stringify({ok:!1,error:"unsupported_method"}),{status:405,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...ce(t)}});let o={ok:!0,service:"singabldr-pages",ts:new Date().toISOString()},a={"content-type":"application/json; charset=utf-8","cache-control":"no-store",...ce(t)};return r==="HEAD"?new Response(null,{status:200,headers:a}):new Response(JSON.stringify(o),{status:200,headers:a})}n(la,"onRequest");var Oe="https://airvio.co";var ae="/knowgrph",ve=`${Oe}${ae}/`,Rc=`${Oe}/`;var ua=`${ae}/health`,pa=`${Oe}${ua}`,da="/.well-known/agent-card.json",Ld=`${ae}/.well-known/agent-card.json`,Pc=`${Oe}${da}`,Ac=`${Oe}/api/storage/source-files`,kc=`${Oe}/api/storage/doc-default/{canonicalPath}`,xc=`${Oe}/api/storage/doc/{workspaceId}/{canonicalPath}`,Ec=`${Oe}/api/storage/blob/{workspaceId}/{canonicalPath}`;var Lr="root-agent-ready-pages",ma=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${ae}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${ae}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${ua}>; rel="status"; type="application/health+json"`,`<${ae}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${da}>; rel="describedby"; type="application/json"`].join(", "),ha=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${ve}.

## Discovery

- Crawl policy: ${ve}robots.txt
- Sitemap: ${ve}sitemap.xml
- API catalog: ${ve}.well-known/api-catalog
- Auth.md registration instructions: ${Rc}auth.md
- Health: ${pa}
- MCP server card: ${ve}.well-known/mcp/server-card.json
- A2A Agent Card: ${Pc}
- Agent skills: ${ve}.well-known/agent-skills/index.json
- LLM reference: ${ve}llms.txt

## APIs

- Agent-ready status: ${pa}
- HTTP MCP: ${ve}mcp
- Storage API: ${Oe}/api/storage/
- Source Files index: ${Ac}
- Default Source File documents: ${kc}
- Workspace Source File documents: ${xc}
- Workspace binary artifacts: ${Ec}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes seven read-only tools for published Source Files, shared documents, data-first search/fetch, and agent-surface inspection.
- HTTP MCP and local stdio expose shared read-only prompt templates through \`prompts/list\` and \`prompts/get\` for Source Files research and agent-surface inspection.
- HTTP MCP and local stdio expose Source Files resource templates through \`resources/templates/list\`; \`kgdoc://source-file/{id}\` reads reuse the existing \`fetch\` executor.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared seven-tool WebMCP surface on \`${ve}\` HTML routes.

## MCP Apps

- HTTP MCP advertises \`io.modelcontextprotocol/ui\` with \`text/html;profile=mcp-app\`.
- \`inspect_agent_surface\` links to the shared \`ui://knowgrph/agent-ready\` resource through \`_meta.ui.resourceUri\`.
- UI-linked tool descriptors expose no-auth \`securitySchemes\`, mirror them in \`_meta.securitySchemes\`, and set OpenAI widget accessibility metadata from the shared contract.
- \`resources/list\` and \`resources/read\` serve the inline, sandbox-friendly Knowgrph Agent Ready app resource while preserving text fallback and structured tool output; \`resources/templates/list\` exposes Source Files markdown reads under the standard MCP \`resources\` capability.
- The View initiates the MCP Apps \`ui/initialize\` handshake, sends \`ui/notifications/initialized\` and \`ui/notifications/size-changed\`, handles host context/tool input/result/cancel notifications, and calls the originating server through \`tools/call\`.
- \`inspect_agent_surface.structuredContent.mcpAppsServerReadiness\` exposes the native server-readiness model used by the View: app tool/resource binding, prompt discovery, resource-template discovery, output-schema and structured-content readiness, sandbox/security metadata, widget accessibility, Streamable HTTP JSON-RPC transport, local stdio transport, and read-only search/fetch retrieval.
`,ga=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),fa=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(r=>r.trim().startsWith("text/markdown")),"wantsMarkdown"),Kr=n((e,t)=>{let r=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&r.headers.set("x-knowgrph-route-owner",o),a&&r.headers.set("x-knowgrph-route-tag",a),r},"withAgentReadyRouteHeaders");var Dr="Agent-actionable chat-to-canvas knowledge graph workspace",ya='<main id="root"></main>',Cc=/<(?:main|div)\s+id=["']root["']\s*><\/(?:main|div)>/i,Tc=n(e=>{let t=/<script>([\s\S]*?)<\/script>/g;for(let r of String(e||"").matchAll(t)){let o=r[1]||"";if(o.includes("createWebMcpLifecycleController")&&o.includes("toolDefinitions"))return o}return""},"extractWebMcpScript"),wa=n(()=>({"content-type":"text/html; charset=utf-8","cache-control":"no-store, no-cache, no-transform, must-revalidate, max-age=0","access-control-allow-origin":"*",link:ma}),"rootHtmlHeaders"),vc=n(()=>`<noscript><a href="${ae}/">Enter Knowgrph</a></noscript>`,"rootNoscriptFallbackMarkup"),$r=n((e,t)=>String(e||"").includes("</head>")?String(e||"").replace("</head>",`${t}</head>`):`${String(e||"")}${t}`,"injectIntoHead"),Oc=n(e=>{let t=String(e||"").replace(Cc,ya);return/<meta\s+name=["']description["'][^>]*>/i.test(t)?t=t.replace(/<meta\s+name=["']description["'][^>]*>/i,`<meta name="description" content="${Dr}" />`):t=$r(t,`    <meta name="description" content="${Dr}" />
`),/<link\s+rel=["']canonical["'][^>]*>/i.test(t)||(t=$r(t,`    <link rel="canonical" href="${ae}/" />
`)),/<meta\s+name=["']x-knowgrph-root-alias["'][^>]*>/i.test(t)||(t=$r(t,`    <meta name="x-knowgrph-root-alias" content="${ae}/" />
`)),t},"rewriteRootAppHtml"),Ic=n(async e=>{let t=new URL(`${ae}/?agentReadyRootWebMcp=1`,e.url),r=await fetch(t,{headers:{accept:"text/html"}});return r.ok?Tc(await r.text()):""},"loadWebMcpScript"),Mc=n(async e=>{let t=new URL(`${ae}/?agentReadyRootAlias=1`,e.url),r=await fetch(t,{headers:{accept:"text/html"}});if(!r.ok)return null;let o=Oc(await r.text());return!o.includes(ya)||!o.includes(`${ae}/assets/`)?null:new Response(o,{status:200,headers:wa()})},"loadKnowgrphAppShell"),Nc=n((e="")=>new Response(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${Dr}" />
    <title>Knowgrph</title>
    <link rel="canonical" href="/knowgrph/" />
    <style>
      :root { color-scheme: dark; font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
      * { box-sizing: border-box; }
      body { margin: 0; min-height: 100dvh; overflow: hidden; background: #071019; color: #f8fafc; }
      .live-canvas { position: fixed; inset: 0; width: 100%; height: 100%; border: 0; background: #071019; }
      .veil { position: fixed; inset: 0; pointer-events: none; background: linear-gradient(90deg, rgba(7,16,25,.96) 0%, rgba(7,16,25,.82) 34%, rgba(7,16,25,.16) 60%, transparent 72%); }
      .glow { position: fixed; z-index: 1; left: -12rem; top: 50%; width: 46rem; height: 46rem; transform: translateY(-50%); border-radius: 999px; background: rgba(79,209,197,.1); filter: blur(64px); pointer-events: none; }
      .launch { position: fixed; z-index: 2; left: clamp(2rem, 4vw, 3rem); top: 50%; width: min(34rem, calc(100% - 4rem)); max-height: calc(100dvh - 2.5rem); overflow-y: auto; transform: translateY(-50%); }
      .eyebrow { display: flex; align-items: center; gap: .5rem; margin: 0; color: #a7b4c4; font-size: .625rem; font-weight: 700; letter-spacing: .24em; text-transform: uppercase; }
      .pulse { width: .5rem; height: .5rem; border-radius: 999px; background: #4fd1c5; box-shadow: 0 0 18px #4fd1c5; }
      h1 { margin: 1rem 0 0; font-size: clamp(3rem, 4.5vw, 3.5rem); font-weight: 600; line-height: 1.02; letter-spacing: -.045em; text-wrap: balance; }
      h1 span { display: block; }
      h1 .accent { color: #4fd1c5; }
      .lede { max-width: 34rem; margin: 1rem 0 0; color: #a7b4c4; font-size: 1rem; line-height: 1.5rem; }
      .lede code { color: #f8fafc; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      .deck { margin-top: 1.5rem; padding: 1rem; border: 1px solid rgba(148,163,184,.28); border-radius: 1rem; background: rgba(15,23,34,.72); box-shadow: 0 18px 64px rgba(7,16,25,.72); backdrop-filter: blur(20px); }
      .deck label { display: block; color: #a7b4c4; font-size: .625rem; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; }
      textarea { display: block; width: 100%; min-height: 4rem; margin-top: .5rem; resize: vertical; border: 1px solid rgba(148,163,184,.28); border-radius: .75rem; padding: .625rem .75rem; outline: 0; background: rgba(3,10,18,.88); color: #d9f4f1; font: .75rem/1.25rem ui-monospace, SFMono-Regular, Menlo, monospace; }
      textarea:focus { border-color: #4fd1c5; box-shadow: 0 0 0 1px #4fd1c5; }
      .chips, .actions, .posture { display: flex; flex-wrap: wrap; gap: .375rem; }
      .chips { margin-top: .75rem; }
      .chip, .secondary { border: 1px solid rgba(148,163,184,.28); background: rgba(15,23,34,.72); color: #a7b4c4; }
      .chip { border-radius: 999px; padding: .25rem .625rem; font: .625rem ui-monospace, SFMono-Regular, Menlo, monospace; cursor: pointer; }
      .chip.active { border-color: #4fd1c5; background: rgba(79,209,197,.16); color: #f8fafc; }
      .actions { align-items: center; margin-top: 1rem; gap: .5rem; }
      .enter, .secondary { display: inline-flex; min-height: 2.5rem; align-items: center; justify-content: center; border-radius: .5rem; padding: 0 1rem; font-size: .875rem; font-weight: 650; text-decoration: none; }
      .enter { border: 1px solid #4fd1c5; background: #4fd1c5; color: #071019; }
      .shortcut { color: #a7b4c4; font-size: .6875rem; }
      .enter:focus-visible, .secondary:focus-visible, .chip:focus-visible { outline: 2px solid #4fd1c5; outline-offset: 2px; }
      .posture { margin: .75rem 0 0; padding: 0; list-style: none; }
      .posture li { border: 1px solid rgba(148,163,184,.28); border-radius: 999px; padding: .25rem .625rem; background: rgba(15,23,34,.54); color: #a7b4c4; font-size: .625rem; backdrop-filter: blur(12px); }
      @media (max-width: 720px) { .veil { background: linear-gradient(180deg, transparent 0%, rgba(7,16,25,.14) 25%, rgba(7,16,25,.92) 56%, #071019 100%); } .glow { left: -12rem; top: auto; bottom: -18rem; width: 38rem; height: 38rem; transform: none; } .launch { inset: auto 1rem 4rem; width: auto; max-height: calc(100dvh - 8rem); transform: none; } h1 { margin-top: .75rem; font-size: 1.875rem; } .lede { font-size: .875rem; } .deck { margin-top: 1rem; padding: .75rem; } .posture { display: none; } }
    </style>
    ${e?`<script>${e}<\/script>`:""}
  </head>
  <body>
    <iframe class="live-canvas" src="${ae}/" title="Interactive Knowgrph canvas"></iframe>
    <div class="veil" aria-hidden="true"></div>
    <div class="glow" aria-hidden="true"></div>
    <main class="launch" data-kg-live-canvas-launch="true">
      <p class="eyebrow"><span class="pulse" aria-hidden="true"></span>Knowgrph \xB7 Live canvas</p>
      <h1><span>Map intent.</span><span>Orchestrate agents.</span><span class="accent">Prove outcomes.</span></h1>
      <p class="lede">A source-backed canvas where <code>/</code> routes work, <code>#</code> sets meaning, and <code>@</code> binds context.</p>
      <form class="deck" action="${ae}/" data-kg-live-canvas-hero-command-deck="true">
        <label for="knowgrph-live-canvas-hero-query">Agent-ready query</label>
        <textarea id="knowgrph-live-canvas-hero-query" name="query" spellcheck="false" data-kg-live-canvas-hero-query="true">/runtime-ready.check #token-economics @dev-only</textarea>
        <nav class="chips" aria-label="Live Canvas Hero invocation grammar">
          ${["/runtime-ready.check","/cost.audit","#token-economics","#runtime-ready","@runtime-proof","@dev-only"].map(t=>`<button class="chip" type="button" data-token="${t}">${t}</button>`).join("")}
        </nav>
        <div class="actions">
          <a class="enter" href="${ae}/" data-kg-live-canvas-hero-enter="true">Enter Knowgrph</a>
          <button class="secondary" type="submit" data-kg-live-canvas-hero-start="true">Start locally</button>
          <span class="shortcut">Ctrl/\u2318 + Enter</span>
        </div>
      </form>
      <ul class="posture" aria-label="Agent-ready execution posture"><li>0 model calls before Run</li><li>Frontmatter SSOT</li><li>Approval-gated</li></ul>
    </main>
    <script>
      (() => {
        const query = document.querySelector('[data-kg-live-canvas-hero-query="true"]');
        const normalize = (value) => String(value || '').trim().replace(/\\s+/g, ' ');
        const sync = () => document.querySelectorAll('[data-token]').forEach((button) => {
          const tokens = normalize(query.value).toLowerCase().split(' ');
          button.classList.toggle('active', tokens.includes(button.dataset.token.toLowerCase()));
        });
        document.querySelectorAll('[data-token]').forEach((button) => button.addEventListener('click', () => {
          const token = button.dataset.token;
          const tokens = normalize(query.value).split(' ');
          if (!tokens.some((value) => value.toLowerCase() === token.toLowerCase())) query.value = normalize(query.value + ' ' + token);
          sync();
          query.focus();
        }));
        query.addEventListener('input', sync);
        query.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) event.currentTarget.form.requestSubmit();
        });
        sync();
      })();
    <\/script>
    ${vc()}
  </body>
</html>`,{status:200,headers:wa()}),"rootHtmlResponse");async function Sa(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase();if(r!=="GET"&&r!=="HEAD")return e.next();if(fa(t)){let s=Kr(ga(ha),{owner:Lr,tag:"root-homepage-markdown"});return r==="HEAD"?new Response(null,s):s}let o=r==="HEAD"?null:await Mc(t),a=Kr(o||Nc(r==="HEAD"?"":await Ic(t)),{owner:Lr,tag:"root-homepage-html"});return r==="HEAD"?new Response(null,a):a}n(Sa,"onRequest");var R=[{routePath:"/api/llm/chat/completions",mountPath:"/api/llm/chat",method:"",middlewares:[],modules:[Gr]},{routePath:"/api/payments/commerce/x402",mountPath:"/api/payments/commerce",method:"",middlewares:[],modules:[uo]},{routePath:"/api/llm/models",mountPath:"/api/llm",method:"",middlewares:[],modules:[mo]},{routePath:"/api/llm/responses",mountPath:"/api/llm",method:"",middlewares:[],modules:[ho]},{routePath:"/knowgrph/doc-default/:path*",mountPath:"/knowgrph/doc-default",method:"",middlewares:[],modules:[Nn]},{routePath:"/knowgrph/doc/:path*",mountPath:"/knowgrph/doc",method:"",middlewares:[],modules:[Un]},{routePath:"/knowgrph/share/:path*",mountPath:"/knowgrph/share",method:"",middlewares:[],modules:[Ln]},{routePath:"/api/link-preview",mountPath:"/api",method:"GET",middlewares:[],modules:[$n]},{routePath:"/api/link-proxy",mountPath:"/api",method:"GET",middlewares:[],modules:[Hn]},{routePath:"/api/graph",mountPath:"/api",method:"",middlewares:[],modules:[Jn]},{routePath:"/api/oembed",mountPath:"/api",method:"",middlewares:[],modules:[Zn]},{routePath:"/__chat_proxy/:path*",mountPath:"/__chat_proxy",method:"",middlewares:[],modules:[ta]},{routePath:"/knowgrph/:path*",mountPath:"/knowgrph",method:"",middlewares:[],modules:[Ue]},{routePath:"/__video_frame",mountPath:"/",method:"",middlewares:[],modules:[sa]},{routePath:"/__youtube_transcript",mountPath:"/",method:"",middlewares:[],modules:[ca]},{routePath:"/health",mountPath:"/",method:"",middlewares:[],modules:[la]},{routePath:"/",mountPath:"/",method:"",middlewares:[],modules:[Sa]}];function Uc(e){for(var t=[],r=0;r<e.length;){var o=e[r];if(o==="*"||o==="+"||o==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(o==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(o==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(o==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(o===":"){for(var a="",s=r+1;s<e.length;){var i=e.charCodeAt(s);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){a+=e[s++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:a}),r=s;continue}if(o==="("){var c=1,l="",s=r+1;if(e[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;){if(e[s]==="\\"){l+=e[s++]+e[s++];continue}if(e[s]===")"){if(c--,c===0){s++;break}}else if(e[s]==="("&&(c++,e[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));l+=e[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(r));if(!l)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:l}),r=s;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}n(Uc,"lexer");function Lc(e,t){t===void 0&&(t={});for(var r=Uc(e),o=t.prefixes,a=o===void 0?"./":o,s=t.delimiter,i=s===void 0?"/#?":s,c=[],l=0,p=0,m="",f=n(function(M){if(p<r.length&&r[p].type===M)return r[p++].value},"tryConsume"),A=n(function(M){var N=f(M);if(N!==void 0)return N;var B=r[p],se=B.type,de=B.index;throw new TypeError("Unexpected ".concat(se," at ").concat(de,", expected ").concat(M))},"mustConsume"),_=n(function(){for(var M="",N;N=f("CHAR")||f("ESCAPED_CHAR");)M+=N;return M},"consumeText"),x=n(function(M){for(var N=0,B=i;N<B.length;N++){var se=B[N];if(M.indexOf(se)>-1)return!0}return!1},"isSafe"),D=n(function(M){var N=c[c.length-1],B=M||(N&&typeof N=="string"?N:"");if(N&&!B)throw new TypeError('Must have text between two parameters, missing text after "'.concat(N.name,'"'));return!B||x(B)?"[^".concat(Le(i),"]+?"):"(?:(?!".concat(Le(B),")[^").concat(Le(i),"])+?")},"safePattern");p<r.length;){var K=f("CHAR"),F=f("NAME"),ee=f("PATTERN");if(F||ee){var z=K||"";a.indexOf(z)===-1&&(m+=z,z=""),m&&(c.push(m),m=""),c.push({name:F||l++,prefix:z,suffix:"",pattern:ee||D(z),modifier:f("MODIFIER")||""});continue}var C=K||f("ESCAPED_CHAR");if(C){m+=C;continue}m&&(c.push(m),m="");var O=f("OPEN");if(O){var z=_(),Q=f("NAME")||"",U=f("PATTERN")||"",re=_();A("CLOSE"),c.push({name:Q||(U?l++:""),pattern:Q&&!U?D(z):U,prefix:z,suffix:re,modifier:f("MODIFIER")||""});continue}A("END")}return c}n(Lc,"parse");function dt(e,t){var r=[],o=ba(e,r,t);return Kc(o,r,t)}n(dt,"match");function Kc(e,t,r){r===void 0&&(r={});var o=r.decode,a=o===void 0?function(s){return s}:o;return function(s){var i=e.exec(s);if(!i)return!1;for(var c=i[0],l=i.index,p=Object.create(null),m=n(function(A){if(i[A]===void 0)return"continue";var _=t[A-1];_.modifier==="*"||_.modifier==="+"?p[_.name]=i[A].split(_.prefix+_.suffix).map(function(x){return a(x,_)}):p[_.name]=a(i[A],_)},"_loop_1"),f=1;f<i.length;f++)m(f);return{path:c,index:l,params:p}}}n(Kc,"regexpToFunction");function Le(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}n(Le,"escapeString");function _a(e){return e&&e.sensitive?"":"i"}n(_a,"flags");function $c(e,t){if(!t)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,a=r.exec(e.source);a;)t.push({name:a[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),a=r.exec(e.source);return e}n($c,"regexpToRegexp");function Dc(e,t,r){var o=e.map(function(a){return ba(a,t,r).source});return new RegExp("(?:".concat(o.join("|"),")"),_a(r))}n(Dc,"arrayToRegexp");function Hc(e,t,r){return jc(Lc(e,r),t,r)}n(Hc,"stringToRegexp");function jc(e,t,r){r===void 0&&(r={});for(var o=r.strict,a=o===void 0?!1:o,s=r.start,i=s===void 0?!0:s,c=r.end,l=c===void 0?!0:c,p=r.encode,m=p===void 0?function(N){return N}:p,f=r.delimiter,A=f===void 0?"/#?":f,_=r.endsWith,x=_===void 0?"":_,D="[".concat(Le(x),"]|$"),K="[".concat(Le(A),"]"),F=i?"^":"",ee=0,z=e;ee<z.length;ee++){var C=z[ee];if(typeof C=="string")F+=Le(m(C));else{var O=Le(m(C.prefix)),Q=Le(m(C.suffix));if(C.pattern)if(t&&t.push(C),O||Q)if(C.modifier==="+"||C.modifier==="*"){var U=C.modifier==="*"?"?":"";F+="(?:".concat(O,"((?:").concat(C.pattern,")(?:").concat(Q).concat(O,"(?:").concat(C.pattern,"))*)").concat(Q,")").concat(U)}else F+="(?:".concat(O,"(").concat(C.pattern,")").concat(Q,")").concat(C.modifier);else{if(C.modifier==="+"||C.modifier==="*")throw new TypeError('Can not repeat "'.concat(C.name,'" without a prefix and suffix'));F+="(".concat(C.pattern,")").concat(C.modifier)}else F+="(?:".concat(O).concat(Q,")").concat(C.modifier)}}if(l)a||(F+="".concat(K,"?")),F+=r.endsWith?"(?=".concat(D,")"):"$";else{var re=e[e.length-1],M=typeof re=="string"?K.indexOf(re[re.length-1])>-1:re===void 0;a||(F+="(?:".concat(K,"(?=").concat(D,"))?")),M||(F+="(?=".concat(K,"|").concat(D,")"))}return new RegExp(F,_a(r))}n(jc,"tokensToRegexp");function ba(e,t,r){return e instanceof RegExp?$c(e,t):Array.isArray(e)?Dc(e,t,r):Hc(e,t,r)}n(ba,"pathToRegexp");var qt=/[.+?^${}()|[\]\\]/g;function*Bc(e){let t=new URL(e.url).pathname;for(let r of[...R].reverse()){if(r.method&&r.method!==e.method)continue;let o=dt(r.routePath.replace(qt,"\\$&"),{end:!1}),a=dt(r.mountPath.replace(qt,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i)for(let c of r.middlewares.flat())yield{handler:c,params:s.params,path:i.path}}for(let r of R){if(r.method&&r.method!==e.method)continue;let o=dt(r.routePath.replace(qt,"\\$&"),{end:!0}),a=dt(r.mountPath.replace(qt,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i&&r.modules.length){for(let c of r.modules.flat())yield{handler:c,params:s.params,path:s.path};break}}}n(Bc,"executeRequest");var dm={async fetch(e,t,r){let o=e,a=Bc(o),s={},i=!1,c=n(async(l,p)=>{if(l!==void 0){let f=l;typeof l=="string"&&(f=new URL(l,o.url).toString()),o=new Request(f,p)}let m=a.next();if(m.done===!1){let{handler:f,params:A,path:_}=m.value,x={request:new Request(o.clone()),functionPath:_,next:c,params:A,get data(){return s},set data(K){if(typeof K!="object"||K===null)throw new Error("context.data must be an object");s=K},env:t,waitUntil:r.waitUntil.bind(r),passThroughOnException:n(()=>{i=!0},"passThroughOnException")},D=await f(x);if(!(D instanceof Response))throw new Error("Your Pages function should return a Response");return Hr(D)}else{let f=await t.ASSETS.fetch(o);return Hr(f)}},"next");try{return await c()}catch(l){if(i){let p=await t.ASSETS.fetch(o);return Hr(p)}throw l}}},Hr=n(e=>new Response([101,204,205,304].includes(e.status)?null:e.body,e),"cloneResponse");export{dm as default};
