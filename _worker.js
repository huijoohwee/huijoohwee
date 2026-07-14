var Ya=Object.defineProperty;var n=(e,t)=>Ya(e,"name",{value:t,configurable:!0});var Va="https://api.openai.com/v1";var er=Object.freeze(["gpt-5.4-nano","gpt-4o-mini"]);function tr(e){return String(e||"").trim()}n(tr,"normalizeOrigin");function Ja(e){let t=tr(e);return t?t.startsWith("http://localhost:")||t.startsWith("http://127.0.0.1:")||t.startsWith("http://0.0.0.0:"):!1}n(Ja,"isAllowedOrigin");function eo(e){let t=tr(e);return Ja(t)?{"access-control-allow-origin":t,vary:"Origin","access-control-allow-methods":"GET, POST, OPTIONS","access-control-allow-headers":"content-type, x-flowinfish-session","access-control-max-age":"86400"}:{}}n(eo,"corsHeaders");function be(e,{status:t=200,origin:r=""}={}){return new Response(JSON.stringify(e),{status:t,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...eo(r)}})}n(be,"json");async function At(e,{maxBytes:t=1e6}={}){let r=await e.arrayBuffer();if(r.byteLength>t)throw new Error("Request too large");let o=new TextDecoder().decode(r);try{return o?JSON.parse(o):{}}catch{throw new Error("Invalid JSON body")}}n(At,"readJsonBody");function Xa(e){let t=String(e?.model||"").trim();if(!t)throw new Error("Missing model");if(!er.includes(t))throw new Error(`Model not allowed: ${t}`);return t}n(Xa,"enforceAllowedModel");function Qa(e){let t=String(e.OPENAI_API_KEY||"").trim();if(!t)throw new Error("Missing server OPENAI_API_KEY");return t}n(Qa,"requireOpenAiKey");async function Pt({request:e,env:t,pathname:r,payload:o}){let a=Qa(t);Xa(o);let i=`${tr(t.OPENAI_API_BASE)||Va}${r}`,c=await fetch(i,{method:"POST",headers:{authorization:`Bearer ${a}`,"content-type":"application/json"},body:JSON.stringify(o)}),l=new Headers(c.headers);return l.delete("content-length"),l.set("cache-control","no-store"),new Response(c.body,{status:c.status,headers:l})}n(Pt,"proxyToOpenAi");function Qe(e){let t=e.headers.get("origin")||"";return new Response(null,{status:204,headers:{...eo(t)}})}n(Qe,"handleOptions");async function to(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return Qe(t);if(o!=="POST")return be({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return be({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await At(t);return await Pt({request:t,env:r,pathname:"/chat/completions",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return be({ok:!1,error:i},{status:400,origin:a})}}n(to,"onRequest");var kt={checkoutSession:"/api/payments/stripe/checkout/session",webhook:"/api/payments/stripe/webhook"};var fe={restrictedKey:"STRIPE_RESTRICTED_KEY",secretKey:"STRIPE_SECRET_KEY",webhookSecret:"STRIPE_WEBHOOK_SECRET",checkoutPriceId:"STRIPE_CHECKOUT_PRICE_ID",checkoutCurrency:"STRIPE_CHECKOUT_CURRENCY",checkoutUnitAmount:"STRIPE_CHECKOUT_UNIT_AMOUNT",checkoutProductName:"STRIPE_CHECKOUT_PRODUCT_NAME",checkoutMode:"STRIPE_CHECKOUT_MODE",checkoutReturnOrigin:"STRIPE_CHECKOUT_RETURN_ORIGIN"},Ll=[fe.restrictedKey,fe.secretKey,fe.webhookSecret];var at={configure:"npm run payment:stripe:configure",d1MigrateRemote:"npm run payment:d1:migrate:remote",readiness:"npm run payment:stripe:readiness",x402Configure:"npm run payment:x402:configure",x402Readiness:"npm run payment:x402:readiness",paymentReadiness:"npm run payment:readiness",applyConfirmation:"apply-stripe-payment-worker-config",writeVisibleVarsFlag:"--write-visible-vars",deployVisibleVarsFlag:"--deploy-visible-vars"};var $l=[`Configure Stripe secrets on the server runtime that owns ${kt.checkoutSession}.`,"Cloudflare Pages project variables are available to Pages builds/functions, but they are not read by separate Worker routes.","Stripe Projects can provision and sync credentials locally; copy only required server secret names into the payment server runtime."].join(" "),Dl=[`Payment server runtime for ${kt.checkoutSession}`,"not Cloudflare Pages project variables"].join("; "),Za=[fe.restrictedKey,fe.secretKey].join(" or "),Hl=[fe.checkoutPriceId,`${fe.checkoutCurrency} + ${fe.checkoutUnitAmount} + ${fe.checkoutProductName}`].join(" or "),Kl=[`${fe.checkoutMode}=payment`,`${fe.checkoutMode}=subscription with ${fe.checkoutPriceId}`].join(" or "),jl=["Worker secret names","visible Worker [vars]","remote D1 payment tables","required webhook-processing columns/constraints","bounded optional hosted Checkout create-and-expire smoke"].join(" + "),Bl=[at.configure,`write visible Worker [vars] with ${at.writeVisibleVarsFlag}`,`deploy visible Worker [vars] with ${at.deployVisibleVarsFlag}`,`apply with -- --apply --yes --confirm=${at.applyConfirmation}`,at.readiness].join(" -> "),Fl=[`Missing server-managed Stripe key. Set ${Za} on the payment server runtime.`,"Pages project variables alone do not satisfy separate Worker routes."].join(" ");var es=n(e=>{let t=2166136261;for(let r=0;r<e.length;r+=1)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0},"fnv1a32");function ro(e){return es(String(e??""))}n(ro,"hashString32");function st(e){return ro(e).toString(16).padStart(8,"0")}n(st,"hashStringToHex");var ts=n(e=>e==null?"":typeof e=="boolean"?e?"1":"0":typeof e=="number"?Number.isFinite(e)?String(e):"":String(e),"normalizePrimitive"),rs=n(e=>e.map(ts).join("|"),"buildSignatureText"),oo=n(e=>st(rs(e)),"hashSignatureParts");var Re=n((e,t)=>oo(["agentic-commerce",e,...t]),"buildAgenticCommerceSemanticKey");var no="solana_pay",ao="/api/payments/commerce/solana-pay/settle";var $e={recipient:"SOLANA_PAY_RECIPIENT",splToken:"SOLANA_PAY_SPL_TOKEN",label:"SOLANA_PAY_LABEL",rpcUrl:"SOLANA_PAY_RPC_URL",amountScale:"SOLANA_PAY_AMOUNT_SCALE",network:"SOLANA_PAY_NETWORK",commitment:"SOLANA_PAY_COMMITMENT"};var it="2026-01-30",io="1000",co="USDC",rr="https://x402.org/facilitator",lo="eip155:84532",os="$0.001",po="x402-payment-required",ns="0x0000000000000000000000000000000000000000",Ze="2026-04-08",so="https://ucp.dev/2026-04-08/specification/overview/",as=["checkout"],ss=["rest"];var I={acpDiscovery:"/.well-known/acp.json",acpConfig:"/.well-known/acp-config",ucpProfile:"/.well-known/ucp",mppOpenApi:"/openapi.json",x402ApiRoot:"/api",x402ApiV1:"/api/v1",checkoutSessions:"/checkout/sessions",x402PaymentRequired:"/api/payments/commerce/x402",commerceWebhook:"/api/payments/commerce/webhook",commerceProofArtifact:"/api/payments/commerce/harness-proof.json",commerceTraceArtifact:"/api/payments/commerce/trace.jsonl",openboxIngest:"/api/payments/commerce/openbox/ingest",web3Settle:"/api/payments/commerce/web3/settle",solanaPaySettle:ao},up=[I.x402ApiRoot,I.x402ApiV1,I.x402PaymentRequired],z={sellerId:"SELLER_ID",checkoutBaseUrl:"CHECKOUT_BASE_URL",web3Enabled:"WEB3_ENABLED",web3DepositAddress:"WEB3_DEPOSIT_ADDRESS",baseRpcUrl:"BASE_RPC_URL",baseConfirmationBlocks:"BASE_CONFIRMATION_BLOCKS",easAttestUrl:"EAS_ATTEST_URL",openboxApiUrl:"OPENBOX_API_URL",openboxIngestUrl:"OPENBOX_INGEST_URL",openboxApiKey:"OPENBOX_API_KEY",stripeDelegatePaymentUrl:"STRIPE_DELEGATE_PAYMENT_URL",acpBearerToken:"ACP_BEARER_TOKEN",x402PayToAddress:"X402_PAY_TO_ADDRESS",x402Network:"X402_NETWORK",x402Asset:"X402_ASSET",x402Amount:"X402_AMOUNT",x402FacilitatorUrl:"X402_FACILITATOR_URL",x402Price:"X402_PRICE"},dp=[z.sellerId,z.checkoutBaseUrl,z.web3Enabled,z.web3DepositAddress,z.baseRpcUrl,z.baseConfirmationBlocks,z.easAttestUrl,z.openboxApiUrl,z.openboxIngestUrl,z.stripeDelegatePaymentUrl,z.x402Network,z.x402Asset,z.x402Amount,z.x402FacilitatorUrl,z.x402Price,$e.recipient,$e.rpcUrl],mp=[$e.splToken,$e.label,$e.amountScale,$e.network,$e.commitment],hp=[z.acpBearerToken,z.openboxApiKey],gp=["Visible Worker [vars] for ACP, Web3, x402, OpenBOX, and Solana Pay.","Worker secrets for ACP bearer auth and OpenBOX API access."].join(" "),De=n((e,t)=>String(e[t]||"").trim(),"readEnvString"),uo=n((e,t)=>{let r=De(e,z.sellerId);if(r)return r;try{return new URL(t).host}catch{return"knowgrph-seller"}},"readAgenticCommerceSellerId");var mo=n(e=>{let t=De(e,z.web3Enabled).toLowerCase();return t?t==="0"||t==="false"||t==="no"?!1:t==="1"||t==="true"||t==="yes":!0},"isAgenticCommerceWeb3Enabled");var ct=n(e=>String(e||"").trim().replace(/\/+$/g,""),"normalizeAgenticCommerceBaseUrl"),de=n((e,t)=>`${ct(e)}${t}`,"buildAgenticCommerceUrl"),oe=n((e,t,r,o,a=o.startsWith("/")?o:null)=>({id:t,label:r,value:o,path:a,semanticKey:Re("mainpanel-commerce-readiness-row",[e,t,r,o,a||""])}),"buildAgenticCommerceMainPanelReadinessRow"),et=n((e,t,r)=>({id:e,title:t,rows:r}),"buildAgenticCommerceMainPanelReadinessSection"),is=n(()=>{let e=[et("overview","Overview",[oe("overview","acp-discovery","ACP discovery",`GET ${I.acpDiscovery}`,I.acpDiscovery),oe("overview","acp-config","ACP config",`GET ${I.acpConfig}`,I.acpConfig),oe("overview","api-version","API version",it,null)]),et("discovery","Discovery",[oe("discovery","ucp-profile","UCP profile",I.ucpProfile),oe("discovery","mpp-openapi","MPP OpenAPI",I.mppOpenApi),oe("discovery","x402-payment-required","x402 payment required",I.x402PaymentRequired),oe("discovery","x402-api-root","x402 API root",I.x402ApiRoot)]),et("sessions","Sessions",[oe("sessions","checkout-sessions","Checkout sessions",I.checkoutSessions),oe("sessions","stripe-webhook","Stripe webhook",kt.webhook)]),et("web3","Web3",[oe("web3","settle","Settle",I.web3Settle),oe("web3","solana-pay-settle","Solana Pay settle",I.solanaPaySettle),oe("web3","signals","Signals","Base RPC + Solana RPC confirmation",null)]),et("governance","Governance",[oe("governance","openbox-ingest","OpenBOX ingest",I.openboxIngest),oe("governance","risk-source","Risk source","OpenBOX risk signal",null)]),et("proofs","Proofs",[oe("proofs","harness-proof","Harness proof",I.commerceProofArtifact),oe("proofs","trace-artifact","Trace artifact",I.commerceTraceArtifact)])],t=e.flatMap(a=>a.rows),r=t.map(a=>a.path||"").filter(a=>a.length>0),o=t.filter(a=>!a.path).map(a=>`${a.label}: ${a.value}`);return{surface:"mainpanel-commerce",semanticKey:Re("mainpanel-commerce-readiness",[it,...t.map(a=>a.semanticKey)]),sections:e,routePaths:r,routeCount:r.length,signals:o}},"buildAgenticCommerceMainPanelReadiness"),fp=is(),ho=n((e,t)=>{let r=De(e,z.web3DepositAddress);if(/^0x[0-9a-fA-F]{40}$/.test(r))return r;let o=Re("deposit-address",[t,"0"]),a=Re("deposit-address",[t,"1"]),s=Re("deposit-address",[t,"2"]),i=Re("deposit-address",[t,"3"]),c=Re("deposit-address",[t,"4"]);return`0x${o}${a}${s}${i}${c}`.slice(0,42)},"buildAgenticCommerceDepositAddress");var go=n((e,t=po)=>{let r=De(e,z.x402PayToAddress);return/^0x[0-9a-fA-F]{40}$/.test(r)&&r.toLowerCase()!==ns?r:ho(e,t)},"readAgenticCommerceX402PayToAddress"),yp=ho({},po),cs=/^[a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,64}$/,fo=n(e=>{let t=De(e,z.x402Network);return cs.test(t)?t:lo},"readAgenticCommerceX402Network"),yo=n(e=>De(e,z.x402Asset)||co,"readAgenticCommerceX402Asset"),wo=n(e=>{let t=De(e,z.x402Amount);return/^[1-9][0-9]*$/.test(t)?t:io},"readAgenticCommerceX402Amount");var So=n(e=>{let t=De(e,z.x402FacilitatorUrl);try{let r=new URL(t||rr);return r.protocol==="https:"||r.protocol==="http:"?r.toString().replace(/\/+$/g,""):rr}catch{return rr}},"readAgenticCommerceX402FacilitatorUrl"),bo=n(e=>{let t=ct(e.baseUrl);return{protocol:{name:"acp",version:it,supported_versions:[it],documentation_url:"https://agenticcommerce.dev"},api_base_url:t,transports:[...ss],capabilities:{services:[...as],...e.web3Enabled?{extensions:[{name:"x-web3"}]}:{}},links:{config:de(t,I.acpConfig),ucp:de(t,I.ucpProfile),mpp:de(t,I.mppOpenApi),x402:de(t,I.x402PaymentRequired)}}},"buildAgenticCommerceAcpDiscovery"),_o=n(e=>{let t=ct(e.baseUrl),r={acp:de(t,I.acpDiscovery),api:de(t,I.x402ApiRoot),checkout_sessions:de(t,I.checkoutSessions),mpp_openapi:de(t,I.mppOpenApi),proof:de(t,I.commerceProofArtifact),trace:de(t,I.commerceTraceArtifact),x402_payment_required:de(t,I.x402PaymentRequired),solana_pay_settle:de(t,I.solanaPaySettle)},o={checkout_sessions:!0,content_payments:!0,proof_artifacts:!0,risk_signals:!0,web3_settlement:e.web3Enabled,solana_pay:e.web3Enabled},a={"dev.ucp.shopping":[{version:Ze,spec:so,transport:"rest",endpoint:r.api,schema:"https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json"}]};return{ucp:{version:Ze,protocol_version:Ze,services:a,capabilities:{"dev.ucp.shopping.checkout":[{version:Ze,spec:"https://ucp.dev/2026-04-08/specification/checkout/",schema:"https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"}]},payment_handlers:{},endpoints:r},protocol_version:Ze,protocol:{name:"ucp",version:Ze},seller:{id:e.sellerId},services:[{id:"knowgrph-content-payments",type:"content-payments",endpoints:{x402:r.x402_payment_required,checkout_sessions:r.checkout_sessions,solana_pay_settle:r.solana_pay_settle,proof:r.proof,trace:r.trace}}],capabilities:o,endpoints:r,spec_urls:[so],schema_urls:["https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json","https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"]}},"buildAgenticCommerceUcpProfile"),Ao=n(e=>{let t=ct(e.baseUrl);return{openapi:"3.1.0",info:{title:"Knowgrph Machine Payment Protocol",version:it,description:"Machine-readable payable-operation discovery for Knowgrph commerce routes."},servers:[{url:t}],paths:{[I.x402PaymentRequired]:{get:{operationId:"getKnowgrphX402PaymentRequirement",summary:"Return x402 payment requirements for an agent-readable paid resource.","x-payment-info":{intent:"charge",method:"x402",amount:os,currency:"usdc"},responses:{402:{description:"Payment Required"}}}},[I.checkoutSessions]:{post:{operationId:"createKnowgrphCommerceCheckoutSession",summary:"Create an agentic commerce checkout session.","x-payment-info":{intent:"session",method:"stripe",amount:"dynamic",currency:"request.currency"},responses:{201:{description:"Checkout session created"}}}},[I.solanaPaySettle]:{post:{operationId:"settleKnowgrphSolanaPayCheckoutSession",summary:"Settle an agentic commerce checkout session from a verified Solana Pay transaction signature.","x-payment-info":{intent:"settlement",method:no,amount:"dynamic",currency:"request.currency"},responses:{200:{description:"Solana Pay session settled"},409:{description:"Solana Pay transaction is not confirmed yet"},422:{description:"Solana Pay transaction does not match the session"}}}}}}},"buildAgenticCommerceMppOpenApi"),Po=n(e=>{let t=ct(e.baseUrl),r=de(t,I.x402PaymentRequired),o=String(e.amount||io);return{x402Version:2,error:"Payment required",resource:{url:r,description:"Knowgrph agentic commerce paid-resource readiness probe",mimeType:"application/json"},accepts:[{scheme:"exact",network:String(e.network||lo),amount:o,maxAmountRequired:o,asset:String(e.asset||co),resource:r,mimeType:"application/json",payTo:e.payTo,maxTimeoutSeconds:300,extra:{name:"USDC",version:"2",resourceUrl:r,...e.facilitatorUrl?{facilitatorUrl:e.facilitatorUrl}:{}}}]}},"buildAgenticCommerceX402PaymentRequired");var ls=n(e=>JSON.stringify(e,null,2),"jsonBody"),ps=n(e=>String(e||"").trim().replace(/\/+$/g,""),"trimOrigin"),us=n(e=>typeof btoa=="function"?btoa(e):typeof Buffer<"u"?Buffer.from(e).toString("base64"):"","encodeBase64"),ds=n((e,t)=>{try{return new URL(e).origin}catch{return ps(t)}},"rootOriginFromRequest"),or=n((e={})=>{let t=ds(e.requestUrl,e.origin),r=e.env||{},o=uo(r,`${t}/`),a=mo(r),s=Po({baseUrl:t,payTo:go(r),network:fo(r),asset:yo(r),amount:wo(r),facilitatorUrl:So(r)});return{acpDiscovery:bo({sellerId:o,baseUrl:t,web3Enabled:a}),ucpProfile:_o({sellerId:o,baseUrl:t,web3Enabled:a}),mppOpenApi:Ao({baseUrl:t}),x402PaymentRequired:s}},"buildKnowgrphCommerceDiscovery");var ko=n((e,t={})=>{let r=or({requestUrl:e?.url,env:t}).x402PaymentRequired,o=us(JSON.stringify(r));return new Response(ls(r),{status:402,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*",...o?{"payment-required":o}:{}}})},"buildKnowgrphX402PaymentRequiredResponse");async function xo(e){return ko(e.request,e.env||{})}n(xo,"onRequest");async function Ro(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=t.headers.get("origin")||"";return r==="OPTIONS"?Qe(t):r!=="GET"&&r!=="HEAD"?be({ok:!1,error:"Method not allowed"},{status:405,origin:o}):be({ok:!0,models:er.map(a=>({model:a,display_name:a}))},{status:200,origin:o})}n(Ro,"onRequest");async function Eo(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return Qe(t);if(o!=="POST")return be({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return be({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await At(t);return await Pt({request:t,env:r,pathname:"/responses",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return be({ok:!1,error:i},{status:400,origin:a})}}n(Eo,"onRequest");var tt=Object.freeze({researchSourceFiles:"knowgrph_research_source_files",inspectAgentSurface:"knowgrph_inspect_agent_surface"}),nr=n(e=>String(e||"").trim(),"normalizeString"),ms=n(e=>({...e,arguments:Array.isArray(e.arguments)?e.arguments.map(t=>({...t})):void 0,_meta:e._meta&&typeof e._meta=="object"?{...e._meta,tools:Array.isArray(e._meta.tools)?[...e._meta.tools]:void 0}:void 0}),"clonePrompt"),To=Object.freeze([Object.freeze({name:tt.researchSourceFiles,title:"Research Knowgrph Source Files",description:"Guide an MCP host through read-only Knowgrph Source Files research using search and fetch with citation-ready URLs.",arguments:Object.freeze([Object.freeze({name:"query",description:"Research question or topic to pass to the read-only search tool.",required:!0}),Object.freeze({name:"limit",description:"Optional decimal string for the maximum search results to inspect.",required:!1}),Object.freeze({name:"focus",description:"Optional aspect to prioritize when reading fetched Source Files.",required:!1})]),_meta:Object.freeze({readOnly:!0,tools:Object.freeze(["search","fetch"])})}),Object.freeze({name:tt.inspectAgentSurface,title:"Inspect Knowgrph Agent Surface",description:"Guide an MCP host through read-only inspection of Knowgrph agent, MCP, and MCP Apps readiness metadata.",arguments:Object.freeze([Object.freeze({name:"focus",description:"Optional readiness area to emphasize, such as transport, tools, resources, prompts, retrieval, or app metadata.",required:!1})]),_meta:Object.freeze({readOnly:!0,tools:Object.freeze(["inspect_agent_surface"])})})]),vo=n(()=>To.map(ms),"buildKnowgrphAgentReadyPromptContracts"),hs=n(e=>To.find(t=>t.name===nr(e))||null,"findPromptContract"),xt=n((e,t)=>!e||typeof e!="object"?"":nr(e[t]),"readPromptArg"),gs=n((e,t)=>{let r=xt(e,t);if(!r)throw new Error(`Missing required prompt argument: ${t}`);return r},"readRequiredPromptArg"),Co=n(e=>({role:"user",content:{type:"text",text:e}}),"buildPromptMessage"),fs=n((e={})=>{let t=gs(e,"query"),r=xt(e,"limit"),o=xt(e,"focus");return[`Research Knowgrph Source Files for: ${t}`,"","Use the MCP server read-only retrieval path:",`1. Call search with query=${JSON.stringify(t)}${r?` and limit=${JSON.stringify(r)}`:""}.`,"2. Select the most relevant returned ids and call fetch for each id before answering.","3. Ground the answer in fetched markdown content and cite the returned result URLs when summarizing.",o?`4. Prioritize this focus: ${o}.`:"","","Do not mutate graph, canvas, workspace, storage, or browser-local state for this research prompt."].filter(Boolean).join(`
`)},"buildSourceFilesResearchPromptText"),ys=n((e={})=>{let t=xt(e,"focus");return["Inspect the Knowgrph agent-ready surface through the read-only inspect_agent_surface tool.","","Review health, API catalog, MCP server card, A2A card, agent skills, commerce discovery, and mcpAppsServerReadiness.","For MCP Apps readiness, verify tool/resource linkage, output schema, text fallback, structured content, sandbox/security metadata, no-auth security-scheme mirroring, widget accessibility, prompts, search/fetch retrieval, Streamable HTTP, and local stdio support.",t?`Emphasize this readiness area: ${t}.`:"","","Report checklist ids and evidence from structuredContent. Do not infer readiness from prose alone."].filter(Boolean).join(`
`)},"buildAgentSurfaceInspectionPromptText"),Oo=n((e,t={})=>{let r=hs(e);if(!r)throw new Error(`Unknown Knowgrph MCP prompt: ${nr(e)}`);if(r.name===tt.researchSourceFiles)return{description:r.description,messages:[Co(fs(t))]};if(r.name===tt.inspectAgentSurface)return{description:r.description,messages:[Co(ys(t))]};throw new Error(`Unhandled Knowgrph MCP prompt: ${r.name}`)},"getKnowgrphAgentReadyPrompt");var ws=Object.freeze({sourceFileById:"knowgrph_source_file_by_id"}),Rt="kgdoc://source-file/{id}",Io="kgdoc://source-file/",Mo="text/markdown",lt=n(e=>String(e||"").trim(),"normalizeString"),No=n(()=>[{uriTemplate:Rt,name:ws.sourceFileById,title:"Knowgrph Source File By ID",description:"Read a complete published Knowgrph Source File markdown document using a stable kgdoc id returned by search.",mimeType:Mo,annotations:{audience:["user","assistant"],priority:.8},_meta:{readOnly:!0,source:"knowgrph-source-files",tool:"fetch"}}],"buildKnowgrphAgentReadyResourceTemplateContracts");var Uo=n(e=>{let t=lt(e);if(!t.startsWith(Io))return"";let r=t.slice(Io.length);if(!r)return"";try{return decodeURIComponent(r)}catch{return r}},"parseKnowgrphSourceFileResourceUri"),Lo=n(({uri:e,sourceFile:t}={})=>{let r=typeof t?.content=="string"?t.content:String(t?.text||"");return{contents:[{uri:lt(e),mimeType:Mo,text:r,_meta:{id:lt(t?.id),title:lt(t?.title),url:lt(t?.url),metadata:t?.metadata&&typeof t.metadata=="object"?{...t.metadata}:{}}}]}},"buildKnowgrphSourceFileResourceReadResult");var Ee=n(e=>String(e||"").trim(),"normalizeString"),ve=n(e=>Ee(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),"escapeHtml");var ar="Map intent. Orchestrate agents. Prove outcomes.",sr="A source-backed canvas where / routes work, # sets meaning, and @ binds context.",Oe="knowgrph.agentic_canvas_os.docs.invoke",Et=Object.freeze(["/mcp.capabilities","#mcp","@mcp-gateway"]),ir="One canonical operator contract: install and discovery stay on the public endpoint, while live /, #, @ grammar stays on the approval-gated control plane or an app-owned forwarder until the host proves MCP session support.",cr="Canonicalize the contract first, not the transport. Keep the runtime split underneath until hosted proof supports a single runtime.",Ss=Object.freeze(["Lovable","Vercel"]),lr="Hosted app builders such as Lovable and Vercel should keep /mcp for discovery and use an app-owned forwarder for live /, #, @ unless the host proves MCP session support.";var pr=n(({publicReadMcpUrl:e,controlPlaneMcpUrl:t}={})=>({promise:ar,grammarSummary:sr,canonicalOperatorContract:ir,canonicalTransportRule:cr,publicReadMcpUrl:Ee(e),controlPlaneMcpUrl:Ee(t),controlPlaneCondition:"Add the control plane only when the host can preserve MCP session state and needs live /, #, @ grammar lookup.",grammarToolName:Oe,grammarExamples:Et.map(r=>Ee(r)),grammarExecutionBoundary:"Keep install on the public discovery endpoint and execute live grammar on the approval-gated control plane.",hostedBuilderExamples:Ss.map(r=>Ee(r)),hostedGrammarDefaultPath:lr,hostedGrammarFallback:"app-owned-forwarder",cheapestProofPath:"Use the source-side README.md quick start or docs/documents/knowgrph-superagent-harness.md in the knowgrph repo before hosted setup.",steps:[{order:1,label:"Map intent",action:e?`Map intent: install ${Ee(e)} first for public discovery, retrieval, and inspection.`:"Map intent: install the public MCP endpoint first for discovery, retrieval, and inspection."},{order:2,label:"Orchestrate agents",action:t?`Orchestrate agents: add ${Ee(t)} only when the host can preserve MCP session state and needs live /, #, @ grammar lookup through ${Oe}.`:`Orchestrate agents: add the control plane only when the host can preserve MCP session state and needs live /, #, @ grammar lookup through ${Oe}.`},{order:3,label:"Prove outcomes",action:"Prove outcomes: for zero-spend evaluation, run the source-side README.md quick start or docs/documents/knowgrph-superagent-harness.md first."}]}),"buildMcpOnboarding"),$o=n(({publicReadMcpUrl:e,controlPlaneMcpUrl:t}={})=>`<section aria-label="Fastest path">
  <section id="onboarding" class="readiness">
    <strong>Fastest Path</strong>
    <p>${ve(ar)}</p>
    <p>${ve(sr)}</p>
    <p>${ve(ir)}</p>
    <p>${ve(cr)}</p>
    <p>${ve(`Live grammar executes through ${Oe} on the control plane. Try ${Et.join(", ")}.`)}</p>
    <p>${ve(lr)}</p>
    <ol>
      <li>${ve(e?`Map intent: install ${Ee(e)} first for public discovery, retrieval, and inspection.`:"Map intent: install the public MCP endpoint first for discovery, retrieval, and inspection.")}</li>
      <li>${ve(t?`Orchestrate agents: add ${Ee(t)} only when the host can preserve MCP session state and needs live /, #, @ grammar lookup through ${Oe}.`:`Orchestrate agents: add the control plane only when the host can preserve MCP session state and needs live /, #, @ grammar lookup through ${Oe}.`)}</li>
      <li>Prove outcomes: for zero-spend evaluation, use the source-side <code>README.md</code> quick start or <code>docs/documents/knowgrph-superagent-harness.md</code> first.</li>
    </ol>
  </section>
</section>`,"buildMcpOnboardingHtml"),Do=`const renderOnboarding = (payload) => {
  onboardingEl.replaceChildren();
  const onboarding = payload && payload.onboarding && typeof payload.onboarding === 'object' ? payload.onboarding : boot.onboarding;
  appendText(onboardingEl, 'strong', 'Fastest Path');
  appendText(onboardingEl, 'p', onboarding && onboarding.promise ? String(onboarding.promise) : '${ar}');
  appendText(onboardingEl, 'p', onboarding && onboarding.grammarSummary ? String(onboarding.grammarSummary) : '${sr}');
  appendText(
    onboardingEl,
    'p',
    onboarding && onboarding.canonicalOperatorContract
      ? String(onboarding.canonicalOperatorContract)
      : '${ir}',
  );
  appendText(
    onboardingEl,
    'p',
    onboarding && onboarding.canonicalTransportRule
      ? String(onboarding.canonicalTransportRule)
      : '${cr}',
  );
  appendText(
    onboardingEl,
    'p',
    onboarding && onboarding.grammarToolName
      ? 'Live grammar executes through ' + String(onboarding.grammarToolName) + ' on the control plane. Try ' + (Array.isArray(onboarding.grammarExamples) && onboarding.grammarExamples.length ? onboarding.grammarExamples.join(', ') : '${Et.join(", ")}') + '.'
      : 'Live grammar executes through ${Oe} on the control plane. Try ${Et.join(", ")}.',
  );
  appendText(
    onboardingEl,
    'p',
    onboarding && onboarding.hostedGrammarDefaultPath
      ? String(onboarding.hostedGrammarDefaultPath)
      : '${lr}',
  );
  const list = document.createElement('ol');
  const steps = Array.isArray(onboarding && onboarding.steps) && onboarding.steps.length ? onboarding.steps : [
    { action: onboarding && onboarding.publicReadMcpUrl ? 'Map intent: install ' + onboarding.publicReadMcpUrl + ' first for public discovery, retrieval, and inspection.' : 'Map intent: install the public MCP endpoint first for discovery, retrieval, and inspection.' },
    { action: onboarding && onboarding.controlPlaneMcpUrl ? 'Orchestrate agents: add ' + onboarding.controlPlaneMcpUrl + ' only when the host can preserve MCP session state and needs live /, #, @ grammar lookup through ${Oe}.' : 'Orchestrate agents: add the control plane only when the host can preserve MCP session state and needs live /, #, @ grammar lookup through ${Oe}.' },
    { action: 'Prove outcomes: for zero-spend evaluation, use the source-side README.md quick start or docs/documents/knowgrph-superagent-harness.md first.' },
  ];
  for (const step of steps) appendText(list, 'li', step && step.action ? String(step.action) : 'Follow the fastest onboarding path.');
  onboardingEl.appendChild(list);
};`;var Ct="io.modelcontextprotocol/ui",ze="text/html;profile=mcp-app",Fo="2026-01-26",bs="knowgrph-mcp-apps-server-readiness/v0.1",me="ui://knowgrph/agent-ready",mr="knowgrph-agent-ready",Ge="inspect_agent_surface",Ae=Object.freeze(["search","fetch"]),ur=Object.freeze({search:Object.freeze(["ids"]),fetch:Object.freeze(["id","title","content","text"])}),Ho=Object.freeze(Object.values(tt)),Ie="streamable-http",_s=Object.freeze([Object.freeze({type:"noauth"})]),ie=Object.freeze({openAiApps:"openai-apps",claude:"claude-mcp-connector",qwenCode:"qwen-code",kimiCli:"kimi-cli",bytePlusModelArk:"byteplus-modelark",generic:"generic-mcp"}),K=n(e=>String(e||"").trim(),"normalizeString"),_e=n(e=>K(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),"escapeHtml"),As=n(e=>JSON.stringify(e).replace(/</g,"\\u003c"),"safeJsonForInlineScript"),Ps=n(e=>{let t=K(e);if(!t)return"";try{return new URL(t).origin}catch{return""}},"readUrlOrigin"),zo=n(()=>({availability:"template-only-published-contract",scope:"mirror-saved-local-artifacts-only",commandTemplate:"#promotion.retry <path...>",exactCommandSource:"browser-local finalize inspection after a real mirroring failure",reusesSavedLocalArtifacts:!0,rerunsValidation:!1,reappliesCanvas:!1,githubBeforeStorage:!0,insertionMode:"append",surfaces:["published-operator-card","final-assistant-ledger","browser-local-finalize-inspection","warning-toast","toast-insert-action"],note:"This published card shows the command template only. The exact runnable path-bearing command appears after a real mirroring failure in the browser-local finalize inspection, finalize ledger, and warning toast."}),"buildPublishedPromotionRecoveryContract"),ks=n(e=>`<section aria-label="Promotion recovery">
  <section id="promotion-recovery" class="readiness">
    <strong>Promotion Recovery</strong>
    <p>${_e("Retry mirroring only for already-saved local artifacts. Do not regenerate, revalidate, or reapply Canvas.")}</p>
    <p>${_e(`Command template: ${e.commandTemplate}`)}</p>
    <ul>
      <li>${_e(`Scope: ${e.scope}`)}</li>
      <li>${_e(`Exact command source: ${e.exactCommandSource}`)}</li>
      <li>${_e(`Insert mode: ${e.insertionMode}`)}</li>
      <li>${_e(`GitHub before storage: ${e.githubBeforeStorage?"true":"false"}`)}</li>
    </ul>
    <p>${_e(e.note)}</p>
  </section>
</section>`,"buildPromotionRecoveryHtml"),hr=n(()=>({extensions:{[Ct]:{mimeTypes:[ze]}}}),"buildKnowgrphMcpAppsCapabilities"),ne=n(e=>Array.isArray(e)?e:[],"arrayFrom"),gr=n(()=>_s.map(e=>({...e})),"buildKnowgrphMcpNoauthSecuritySchemes"),Go=n(e=>(Array.isArray(e)&&e.length?e:gr()).filter(r=>r&&typeof r=="object").map(r=>({...r})),"normalizeSecuritySchemes"),Ko=n(e=>ne(e).some(t=>t?.type==="noauth"),"hasNoauthSecurityScheme"),jo=n(e=>Array.isArray(e)?Go(e):[],"readSecuritySchemes"),xs=n(e=>{let t=K(e);return t.includes("window.openai")&&t.includes("openai:set_globals")&&t.includes("toolInput")&&t.includes("toolOutput")&&t.includes("callTool")&&t.includes("request('ui/initialize'")},"hasOpenAiWidgetBridgeHtml"),Bo=n((e,t=[])=>e?.outputSchema?.type==="object"&&t.every(r=>ne(e.outputSchema?.required).includes(r)),"hasToolOutputSchemaFields"),dr=n(e=>e?.annotations?.readOnlyHint===!0&&e?.annotations?.destructiveHint===!1&&e?.annotations?.openWorldHint===!1&&e?.annotations?.idempotentHint===!0,"hasReadOnlyToolAnnotations"),X=n((e,t,r,o=[])=>({id:e,label:t,ok:r===!0,evidence:ne(o).map(K).filter(Boolean)}),"booleanCheck"),fr=n((e={})=>{let t=K(e.baseUrl).replace(/\/+$/,""),r=K(e.serverName)||"knowgrph",o=K(e.mcpUrl)||(t?`${t}/mcp`:"");return{[ie.openAiApps]:{id:ie.openAiApps,label:"OpenAI Apps / ChatGPT",transport:Ie,url:o,appResourceUri:me,appToolName:Ge,requiredMetadata:["openai/outputTemplate","openai/widgetAccessible","openai/widgetCSP","openai/widgetDomain"],requiredTools:[Ge,...Ae]},[ie.claude]:{id:ie.claude,label:"Claude MCP connector",transport:Ie,url:o,beta:"mcp-client-2025-11-20",mcp_servers:[{type:"url",url:o,name:r}],tools:[{type:"mcp_toolset",mcp_server_name:r}],requiredTools:Ae},[ie.qwenCode]:{id:ie.qwenCode,label:"Qwen Code",transport:"http",url:o,command:`qwen mcp add --transport http ${r} ${o}`,settingsJson:{mcpServers:{[r]:{httpUrl:o,timeout:3e4,trust:!1,includeTools:["search","fetch",Ge]}}},requiredTools:Ae,primaryFlow:"Call search with a natural-language query, then call fetch with the returned kgdoc id."},[ie.kimiCli]:{id:ie.kimiCli,label:"Kimi CLI",transport:"http",url:o,command:`kimi mcp add --transport http ${r} ${o}`,configFile:"~/.kimi/mcp.json",mcpJson:{mcpServers:{[r]:{url:o,transport:"http"}}},requiredTools:Ae,primaryFlow:"Call search with a natural-language query, then call fetch with the returned kgdoc id."},[ie.bytePlusModelArk]:{id:ie.bytePlusModelArk,label:"BytePlus ModelArk Responses API",transport:Ie,url:o,apiBaseUrl:"https://ark.ap-southeast.bytepluses.com/api/v3",endpoint:"/responses",requiredHeaders:{"ark-beta-mcp":"true"},tools:[{type:"mcp",server_label:r,server_url:o,require_approval:"never"}],openAiCompatible:{base_url:"https://ark.ap-southeast.bytepluses.com/api/v3",default_headers:{"ark-beta-mcp":"true"},responsesCreate:{model:"<MODELARK_MODEL_OR_ENDPOINT_ID>",tools:[{type:"mcp",server_label:r,server_url:o,require_approval:"never"}]}},invocationScope:"ModelArk Responses API with MCP service and model permissions enabled.",requiredTools:Ae,primaryFlow:"Use ModelArk Responses API with the Knowgrph MCP tool entry, then ask the model to call search and fetch."},[ie.generic]:{id:ie.generic,label:"Generic MCP clients",transport:Ie,url:o,initialize:{method:"initialize",accept:["application/json","text/event-stream"]},requiredMethods:["initialize","notifications/initialized","tools/list","tools/call"],optionalMethods:["prompts/list","prompts/get","resources/list","resources/templates/list","resources/read"],requiredTools:Ae}}},"buildKnowgrphMcpClientSetups"),Wo=n((e={})=>{let t=K(e.baseUrl).replace(/\/+$/,""),r=K(e.updatedAt),o=e.mcpServerCard&&typeof e.mcpServerCard=="object"?e.mcpServerCard:{},a=o.capabilities&&typeof o.capabilities=="object"?o.capabilities:{},s=ne(e.tools).length?ne(e.tools):ne(a.tools),i=ne(e.resources).length?ne(e.resources):[Tt({appUrl:t,updatedAt:r})],c=ne(e.prompts).length?ne(e.prompts):ne(o.prompts),l=ne(e.resourceTemplates).length?ne(e.resourceTemplates):ne(o.resourceTemplates),p=s.filter(_=>_?._meta?.ui?.resourceUri===me),m=p.find(_=>_?.name===Ge)||p[0]||null,f=i.find(_=>_?.uri===me)||null,P=a.extensions?.[Ct],S=K(o.transport?.url)||(t?`${t}/mcp`:""),O=K(o.surfaceRoles?.publicReadMcpUrl)||S,D=K(o.surfaceRoles?.controlPlaneMcpUrl)||(t?`${t}/control-plane/mcp`:""),N=K(o.transport?.type)||Ie,G=K(e.appResourceHtml)||Vo({appUrl:t,updatedAt:r,toolName:m?.name||Ge}),Q=e.clientSetups&&typeof e.clientSetups=="object"?e.clientSetups:fr({baseUrl:t,mcpUrl:S,serverName:o.serverInfo?.name}),W=m?.outputSchema&&typeof m.outputSchema=="object",R=!!m?.name,T=W,te=m?._meta?.["openai/outputTemplate"]===me,F=xs(G),le=Ko(m?.securitySchemes)&&Ko(m?._meta?.securitySchemes),U=dr(m),L=m?._meta?.["openai/widgetAccessible"]===!0,Y=c.map(_=>K(_?.name)).filter(Boolean),se=o.capabilities?.prompts&&typeof o.capabilities.prompts=="object",Se=Ho.every(_=>Y.includes(_)),xe=l.map(_=>K(_?.uriTemplate)).filter(Boolean),k=xe.includes(Rt),w=Object.fromEntries(Ae.map(_=>[_,s.find(j=>j?.name===_)||null])),y=Ae.every(_=>{let j=w[_];return dr(j)&&Bo(j,ur[_])}),d=Q[ie.qwenCode],g=d?.transport==="http"&&d?.url===S&&d?.settingsJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.httpUrl===S&&String(d?.command||"").includes("--transport http")&&String(d?.command||"").includes(S),h=Q[ie.kimiCli],A=h?.transport==="http"&&h?.url===S&&h?.mcpJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.url===S&&h?.mcpJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.transport==="http"&&String(h?.command||"").includes("kimi mcp add --transport http")&&String(h?.command||"").includes(S),E=Q[ie.bytePlusModelArk],q=E?.transport===Ie&&E?.url===S&&E?.endpoint==="/responses"&&E?.requiredHeaders?.["ark-beta-mcp"]==="true"&&ne(E?.tools).some(_=>_?.type==="mcp"&&_?.server_label===(o.serverInfo?.name||"knowgrph")&&_?.server_url===S&&_?.require_approval==="never")&&E?.openAiCompatible?.responsesCreate?.tools?.some(_=>_?.type==="mcp"&&_?.server_label===(o.serverInfo?.name||"knowgrph")&&_?.server_url===S&&_?.require_approval==="never"),H=[X("app-tool-resource-link","App tool is linked to the UI resource",p.length>0,p.map(_=>_.name)),X("output-schema","App tool exposes an output schema",W,[m?.name]),X("text-fallback","Tool result keeps a text fallback for non-UI hosts",R,[m?.name]),X("structured-content","Tool result returns structured content for the View",T,[m?.name]),X("resource-descriptor","MCP resource descriptor uses the MCP Apps MIME type",f?.mimeType===ze,[f?.uri]),X("resource-security-meta","Resource declares UI sandbox metadata",f?._meta?.ui?.prefersBorder===!0&&!!f?._meta?.ui?.csp,[f?.uri]),X("openai-output-template","App tool exposes the OpenAI output template metadata key",te,[m?.name]),X("openai-widget-bridge","App resource supports the OpenAI Apps widget bridge",F,["window.openai","openai:set_globals"]),X("tool-security-schemes","App tool exposes no-auth securitySchemes and mirrors them in _meta",le,[m?.name]),X("tool-impact-annotations","App tool exposes complete read-only impact annotations",U,[m?.name]),X("widget-accessible","App tool allows the widget bridge to call tools",L,[m?.name]),X("prompt-discovery","Server exposes MCP prompt templates for multi-host guidance",se&&Se,Y),X("source-file-resource-template","Server exposes a dynamic Source Files resource template",k,xe),X("deep-research-search-fetch","Server exposes read-only search and fetch tools",y,Ae),X("qwen-code-http-client-setup","Server advertises Qwen Code HTTP MCP setup",g,[d?.command]),X("kimi-cli-http-client-setup","Server advertises Kimi CLI HTTP MCP setup",A,[h?.command]),X("byteplus-modelark-responses-mcp-setup","Server advertises BytePlus ModelArk Responses API MCP setup",q,[E?.apiBaseUrl,E?.endpoint]),X("extension-capability","Server advertises the MCP Apps extension capability",P?.mimeTypes?.includes(ze),[Ct]),X("streamable-http-transport","Server exposes a stateless Streamable HTTP JSON-RPC transport",!!S&&N===Ie,[S,N]),X("stdio-transport","Repo-local MCP server supports stdio host configuration",e.localStdio!==!1,["node mcp/server.js"])],$=H.every(_=>_.ok),V=zo();return{schemaVersion:bs,ready:$,updatedAt:r,app:{name:mr,protocolVersion:Fo,resourceUri:me,resourceMimeType:ze,extensionId:Ct},tool:{name:m?.name||Ge,title:m?.title||"Inspect Agent Surface",resourceUri:m?._meta?.ui?.resourceUri||me,visibility:ne(m?._meta?.ui?.visibility).length?m._meta.ui.visibility:["model","app"],readOnly:m?.annotations?.readOnlyHint===!0,destructive:m?.annotations?.destructiveHint===!0,openWorld:m?.annotations?.openWorldHint===!0,idempotent:m?.annotations?.idempotentHint===!0,annotationsReady:U,hasOutputSchema:!!W,textFallback:R,structuredContent:T,openAiOutputTemplate:te,openAiWidgetBridge:F,securitySchemes:jo(m?.securitySchemes),mirroredSecuritySchemes:jo(m?._meta?.securitySchemes),widgetAccessible:L},resource:{uri:f?.uri||me,name:f?.name||mr,mimeType:f?.mimeType||ze,prefersBorder:f?._meta?.ui?.prefersBorder===!0,domain:K(f?._meta?.ui?.domain),csp:f?._meta?.ui?.csp||{},openAiWidgetBridge:F},retrieval:{mode:"deep-research-search-fetch",requiredTools:Ae,tools:Ae.map(_=>{let j=w[_];return{name:_,readOnly:j?.annotations?.readOnlyHint===!0,destructive:j?.annotations?.destructiveHint===!0,openWorld:j?.annotations?.openWorldHint===!0,idempotent:j?.annotations?.idempotentHint===!0,annotationsReady:dr(j),requiredOutputFields:ur[_],outputSchemaReady:Bo(j,ur[_])}})},prompts:{requiredPrompts:Ho,names:Y,capability:!!se,ready:se&&Se},resourceTemplates:{requiredTemplates:[Rt],uriTemplates:xe,ready:k},clients:Q,transports:[{id:"pages-http-jsonrpc",type:N,url:S,stateless:!0,serverFactory:!0},{id:"local-stdio-jsonrpc",type:"stdio",command:"node mcp/server.js",stateless:!1,serverFactory:!0}],dataModel:{source:"inspect_agent_surface.structuredContent",categories:[{id:"discovery",label:"Discovery metadata",count:["health","apiCatalog","openApi","mcpServerCard","agentCard","agentSkills"].length},{id:"commerce",label:"Commerce discovery",count:["acpDiscovery","ucpProfile","mppOpenApi"].length},{id:"mcp-apps",label:"MCP Apps server bindings",count:H.length}],renderMode:"structured-summary-with-json-fallback"},onboarding:pr({publicReadMcpUrl:O,controlPlaneMcpUrl:D}),operatorContracts:{promotionRecovery:V},checklist:H}},"buildKnowgrphMcpAppsServerReadiness"),qo=n((e={})=>{let t=K(e.resourceUri)||me;return{securitySchemes:Go(e.securitySchemes),ui:{resourceUri:t,visibility:Array.isArray(e.visibility)&&e.visibility.length?e.visibility:["model","app"]},"openai/outputTemplate":t,"openai/widgetAccessible":e.widgetAccessible!==!1,"openai/toolInvocation/invoking":K(e.invoking)||"Inspecting Knowgrph.","openai/toolInvocation/invoked":K(e.invoked)||"Knowgrph is ready."}},"buildKnowgrphMcpAppsToolMeta"),Yo=Object.freeze({type:"object",additionalProperties:!0,required:["baseUrl","healthUrl","mcpUrl"],properties:{baseUrl:{type:"string"},healthUrl:{type:"string"},mcpUrl:{type:"string"},apiCatalogUrl:{type:"string"},openApiUrl:{type:"string"},mcpServerCardUrl:{type:"string"},agentCardUrl:{type:"string"},agentSkillsUrl:{type:"string"},commerceUrls:{type:"object",additionalProperties:{type:"string"}},health:{type:"object",additionalProperties:!0},apiCatalog:{type:"object",additionalProperties:!0},openApi:{type:"object",additionalProperties:!0},mcpServerCard:{type:"object",additionalProperties:!0},agentCard:{type:"object",additionalProperties:!0},agentSkills:{type:"object",additionalProperties:!0},commerce:{type:"object",additionalProperties:!0},mcpAppsServerReadiness:{type:"object",additionalProperties:!0}}}),Tt=n((e={})=>{let t=K(e.appUrl),r=K(e.updatedAt),o=K(e.domain)||Ps(t),a={connectDomains:[],resourceDomains:[],frameDomains:[],baseUriDomains:[]};return{uri:me,name:mr,description:["Interactive MCP Apps view for the existing Knowgrph agent-ready surface.",t?`App URL: ${t}`:"",r?`Updated: ${r}`:""].filter(Boolean).join(" "),mimeType:ze,_meta:{ui:{csp:a,...o?{domain:o}:{},prefersBorder:!0},"openai/widgetDescription":"Interactive Knowgrph agent-ready server-readiness view.","openai/widgetPrefersBorder":!0,...o?{"openai/widgetDomain":o}:{},"openai/widgetCSP":{connect_domains:a.connectDomains,resource_domains:a.resourceDomains,frame_domains:a.frameDomains}}}},"buildKnowgrphMcpAppsResourceDescriptor"),Vo=n((e={})=>{let t=K(e.appUrl),r=K(e.updatedAt),o=K(e.toolName)||Ge,a=t?`${t.replace(/\/+$/,"")}/mcp`:"",s=t?`${t.replace(/\/+$/,"")}/control-plane/mcp`:"",i=Array.isArray(e.toolNames)?e.toolNames.map(K).filter(Boolean):[o],c={appUrl:t,updatedAt:r,resourceUri:me,toolName:o,toolNames:i,protocolVersion:Fo,onboarding:pr({publicReadMcpUrl:a,controlPlaneMcpUrl:s}),promotionRecovery:zo()};return`<!doctype html>
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
        ${t?`<a href="${_e(t)}" target="_blank" rel="noreferrer">Open</a>`:""}
      </nav>
    </header>
    <section aria-label="MCP app state">
      <dl>
        <dt>Resource</dt><dd>${_e(me)}</dd>
        <dt>Tool</dt><dd>${_e(o)}</dd>
        <dt>Host</dt><dd id="host">Not connected.</dd>
        <dt>Updated</dt><dd>${_e(r||"runtime")}</dd>
        <dt>Status</dt><dd id="status" class="status">Initializing MCP Apps host bridge.</dd>
      </dl>
    </section>
    ${$o({publicReadMcpUrl:a,controlPlaneMcpUrl:s})}
    ${ks(c.promotionRecovery)}
    <section aria-label="MCP Apps server readiness">
      <section id="readiness" class="readiness">Waiting for structured server-readiness data.</section>
    </section>
    <section aria-label="Tool result">
      <pre id="structured">No tool result received yet.</pre>
    </section>
  </main>
  <script>
  (() => {
    const boot = ${As(c)};
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
    ${Do}
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
</html>`},"buildKnowgrphMcpAppsHtml"),yr=n((e={})=>{let t=Tt(e);return{contents:[{uri:t.uri,mimeType:ze,text:Vo(e),_meta:t._meta}]}},"buildKnowgrphMcpAppsResourceReadResult");var u=Object.freeze({search:"search",fetch:"fetch",listSourceFiles:"list_source_files",readSourceFile:"read_source_file",readSharedDocument:"read_shared_document",inspectSharedDocumentStructure:"inspect_shared_document_structure",inspectLocalSettingsChatReadiness:"inspect_local_settings_chat_readiness",inspectLocalMainPanelState:"inspect_local_mainpanel_state",inspectLocalEditorWorkspaceState:"inspect_local_editor_workspace_state",inspectLocalChatPipelineState:"inspect_local_chat_pipeline_state",inspectLocalMainPanelChatCanvasPipeline:"inspect_local_mainpanel_chat_canvas_pipeline",inspectLocalWorkspaceDocument:"inspect_local_workspace_document",inspectLocalCanvasTopology:"inspect_local_canvas_topology",inspectLocalCanvasSnapshot:"inspect_local_canvas_snapshot",inspectLocal3dCameraPose:"inspect_local_3d_camera_pose",inspectLocal3dLayoutPositions:"inspect_local_3d_layout_positions",inspectLocal2dZoomViewport:"inspect_local_2d_zoom_viewport",inspectLocalSourceFilesSnapshot:"inspect_local_source_files_snapshot",inspectAgentSurface:"inspect_agent_surface"}),Rs="knowgrph";var Es=n(()=>Object.freeze({readOnlyHint:!0,destructiveHint:!1,openWorldHint:!1,idempotentHint:!0}),"buildReadOnlyToolAnnotations"),Z=Es(),Cs=Object.freeze({type:"object",additionalProperties:!0,required:["ids","results"],properties:{ids:{type:"array",items:{type:"string"}},results:{type:"array",items:{type:"object",additionalProperties:!0,required:["id","title","url"],properties:{id:{type:"string"},title:{type:"string"},url:{type:"string"},snippet:{type:"string"},workspaceId:{type:"string"},canonicalPath:{type:"string"}}}}}}),Ts=Object.freeze({type:"object",additionalProperties:!0,required:["id","title","content","text","url"],properties:{id:{type:"string"},title:{type:"string"},content:{type:"string"},text:{type:"string"},url:{type:"string"},metadata:{type:"object",additionalProperties:!0}}}),ee=n((e,t=Rs)=>`${String(t||"").trim()}.${String(e||"").trim()}`,"buildKnowgrphWebMcpToolName"),wr=n((e={})=>{let t=String(e.defaultWorkspaceId||"").trim(),r=e.includeBrowserOnlyTools===!0;return[{name:u.search,webName:ee(u.search),title:"Search Knowgrph Source Files",description:"Use this when an MCP host needs to search published Knowgrph Source Files and return stable document IDs for the `fetch` tool. Call this first for OpenAI Deep Research-style retrieval, Claude, Qwen Code, Kimi CLI, BytePlus ModelArk, and generic MCP clients.",inputSchema:{type:"object",additionalProperties:!1,required:["query"],properties:{query:{type:"string"},limit:{type:"number",default:10}}},outputSchema:Cs,annotations:Z},{name:u.fetch,webName:ee(u.fetch),title:"Fetch Knowgrph Source File",description:"Use this when an MCP host needs the complete published Knowgrph Source File for an ID returned by `search`. Returns markdown as both `content` and `text` for OpenAI, Claude, Qwen Code, Kimi CLI, BytePlus ModelArk, and generic MCP clients.",inputSchema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"string"}}},outputSchema:Ts,annotations:Z},{name:u.listSourceFiles,webName:ee(u.listSourceFiles),title:"List Source Files",description:"Use this when an MCP host needs the published Knowgrph Source Files index as markdown.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Z},{name:u.readSourceFile,webName:ee(u.readSourceFile),title:"Read Source File",description:"Use this when an MCP host knows a published Knowgrph canonical path and needs that Editor Workspace markdown content. Defaults to the canonical docs workspace when workspaceId is omitted.",inputSchema:{type:"object",additionalProperties:!1,required:["canonicalPath"],properties:{canonicalPath:{type:"string"},workspaceId:t?{type:"string",default:t}:{type:"string"}}},annotations:Z},{name:u.readSharedDocument,webName:ee(u.readSharedDocument),title:"Read Shared Document",description:"Use this when an MCP host has a Knowgrph share token or public Knowgrph share/document URL and needs the published markdown content.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:Z},{name:u.inspectSharedDocumentStructure,webName:ee(u.inspectSharedDocumentStructure),title:"Inspect Shared Document Structure",description:"Use this when an MCP host has a Knowgrph share token or public Knowgrph share/document URL and needs frontmatter/body structure without mutating the document.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:Z},...r?[{name:u.inspectLocalSettingsChatReadiness,webName:ee(u.inspectLocalSettingsChatReadiness),title:"Inspect Local Settings Chat Readiness",description:"Inspect the active browser-local Knowgrph SettingsView chat readiness state for MainPanel MCP, Integrations, and Commerce, including provider, routing, and model discovery status.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Z},{name:u.inspectLocalMainPanelState,webName:ee(u.inspectLocalMainPanelState),title:"Inspect Local MainPanel State",description:"Inspect the active browser-local Knowgrph MainPanel tab, search, and shared action state for MCP, Integrations, and Commerce readiness.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Z},{name:u.inspectLocalEditorWorkspaceState,webName:ee(u.inspectLocalEditorWorkspaceState),title:"Inspect Local Editor Workspace State",description:"Inspect the active browser-local Knowgrph Editor Workspace and Markdown pane state, including pane visibility and live draft/frontmatter structure.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Z},{name:u.inspectLocalChatPipelineState,webName:ee(u.inspectLocalChatPipelineState),title:"Inspect Local Chat Pipeline State",description:"Inspect the active browser-local Knowgrph FloatingPanel chat runtime, including streaming, workspace follow path, LLM-to-workspace pipeline state, and promotion retry recovery for already-saved local artifacts.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Z},{name:u.inspectLocalMainPanelChatCanvasPipeline,webName:ee(u.inspectLocalMainPanelChatCanvasPipeline),title:"Inspect Local MainPanel Chat Canvas Pipeline",description:"Inspect the active browser-local Knowgrph E2E readiness path from MainPanel MCP, Integrations, and Commerce through FloatingPanel Chat, workspace markdown/frontmatter, and canvas topology.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Z},{name:u.inspectLocalWorkspaceDocument,webName:ee(u.inspectLocalWorkspaceDocument),title:"Inspect Local Workspace Document",description:"Inspect the active browser-local Knowgrph workspace markdown document structure without reading published storage routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Z},{name:u.inspectLocalCanvasTopology,webName:ee(u.inspectLocalCanvasTopology),title:"Inspect Local Canvas Topology",description:"Inspect the active browser-local Knowgrph canvas topology summary from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Z},{name:u.inspectLocalCanvasSnapshot,webName:ee(u.inspectLocalCanvasSnapshot),title:"Inspect Local Canvas Snapshot",description:"Inspect the active browser-local Knowgrph canvas SVG snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Z},{name:u.inspectLocal3dCameraPose,webName:ee(u.inspectLocal3dCameraPose),title:"Inspect Local 3D Camera Pose",description:"Inspect the active browser-local Knowgrph 3D camera pose from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Z},{name:u.inspectLocal3dLayoutPositions,webName:ee(u.inspectLocal3dLayoutPositions),title:"Inspect Local 3D Layout Positions",description:"Inspect the active browser-local Knowgrph 3D layout positions from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Z},{name:u.inspectLocal2dZoomViewport,webName:ee(u.inspectLocal2dZoomViewport),title:"Inspect Local 2D Zoom Viewport",description:"Inspect the active browser-local Knowgrph 2D zoom and viewport state from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Z},{name:u.inspectLocalSourceFilesSnapshot,webName:ee(u.inspectLocalSourceFilesSnapshot),title:"Inspect Local Source Files Snapshot",description:"Inspect the active browser-local Knowgrph Source Files runtime snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Z}]:[],{name:u.inspectAgentSurface,webName:ee(u.inspectAgentSurface),title:"Inspect Agent Surface",description:"Use this when an MCP Apps-capable host or generic MCP client needs to inspect Knowgrph agent-ready discovery, MCP Apps readiness, OpenAPI, and skill metadata.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},outputSchema:Yo,annotations:Z,_meta:qo()}].map(a=>({...a,securitySchemes:Array.isArray(a.securitySchemes)&&a.securitySchemes.length?a.securitySchemes:gr()}))},"buildKnowgrphAgentReadyToolContracts");var Jo=n((e={})=>{let t=String(e.baseUrl||"").replace(/\/+$/,""),r=t?new URL(`${t}/`).origin:"";return{...{baseUrl:t,healthUrl:`${t}/health`,mcpUrl:`${t}/mcp`,controlPlaneMcpUrl:`${t}/control-plane/mcp`,apiCatalogUrl:`${t}/.well-known/api-catalog`,openApiUrl:`${t}/.well-known/openapi.json`,mcpServerCardUrl:`${t}/.well-known/mcp/server-card.json`,agentCardUrl:`${t}/.well-known/agent-card.json`,agentSkillsUrl:`${t}/.well-known/agent-skills/index.json`,commerceUrls:{acpDiscoveryUrl:`${r}/.well-known/acp.json`,ucpProfileUrl:`${r}/.well-known/ucp`,mppOpenApiUrl:`${r}/openapi.json`,x402PaymentRequiredUrl:`${r}/api/payments/commerce/x402`},health:e.health,apiCatalog:e.apiCatalog,openApi:e.openApi,mcpServerCard:e.mcpServerCard,agentCard:e.agentCard,agentSkills:e.agentSkills,commerce:e.commerce},mcpAppsServerReadiness:Wo({baseUrl:t,updatedAt:e.updatedAt||e.health?.updatedAt||"",mcpServerCard:e.mcpServerCard})}},"buildAgentSurfaceInspectionPayload");var Sr=n((e={})=>{let t=e.toolNames||{},r=String(e.defaultWorkspaceId||"").trim(),o=e.buildStorageDocPath,a=e.fetchSourceFilesIndexResponse,s=e.fetchStorageMarkdownResponse,i=e.resolveSharedDocumentInput,c=e.inspectSharedDocumentStructure,l=e.buildAgentSurfaceInspection,p=n(d=>String(d||"").trim(),"normalizeString"),m=p(e.publicBaseUrl).replace(/\/+$/,""),f=n(d=>String(d||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),P=n(d=>{try{return decodeURIComponent(String(d||""))}catch{return String(d||"")}},"safeDecodeURIComponent"),S=n(d=>{let g=p(d).split("/").filter(Boolean);return g[g.length-1]||p(d)||"Knowgrph Source File"},"titleFromCanonicalPath"),O=n((d,g=220)=>{let h=p(d).replace(/\s+/g," ");return h.length<=g?h:`${h.slice(0,g-1)}\u2026`},"truncateSnippet"),D=Math.max(0,Math.min(50,Number.isFinite(Number(e.searchContentScanMax))?Math.floor(Number(e.searchContentScanMax)):32)),N=Math.max(1e3,Math.min(5e4,Number.isFinite(Number(e.searchContentMaxChars))?Math.floor(Number(e.searchContentMaxChars)):24e3)),G=Math.max(1,Math.min(8,Number.isFinite(Number(e.searchContentConcurrency))?Math.floor(Number(e.searchContentConcurrency)):4)),Q=new Set(["a","an","and","are","as","at","be","by","can","do","does","for","from","how","i","in","is","it","of","on","or","the","this","to","what","when","where","which","who","why","with"]),W=n(d=>p(d).toLowerCase().split(/[^a-z0-9:_./-]+/).map(p).filter(g=>g&&!Q.has(g)),"tokenizeSearchQuery"),R=n((d,g)=>g.reduce((h,A)=>{let E=String(d||""),q=0,H=0;for(;H<E.length;){let $=E.indexOf(A,H);if($<0)break;q+=1,H=$+Math.max(1,A.length)}return h+q},0),"countTokenHits"),T=n((d,g,h=260)=>{let A=p(d).replace(/\s+/g," ");if(!A)return"";let E=A.toLowerCase(),q=g.map(V=>E.indexOf(V)).filter(V=>V>=0).sort((V,_)=>V-_)[0];if(!Number.isFinite(q))return O(A,h);let H=Math.max(0,q-Math.floor(h/3)),$=Math.min(A.length,H+h);return`${H>0?"\u2026":""}${A.slice(H,$)}${$<A.length?"\u2026":""}`},"snippetAroundSearchHit"),te=n(async(d,g)=>{let h=new Array(d.length),A=0,E=Array.from({length:Math.min(G,d.length)},async()=>{for(;A<d.length;){let q=A;A+=1,h[q]=await g(d[q],q)}});return await Promise.all(E),h},"runBoundedConcurrent"),F=n(({workspaceId:d="",canonicalPath:g=""}={})=>{let h=o(p(g),p(d));return m?`${m}${h}`:h},"buildPublicDocUrl");if(!!(t.search||t.fetch||t.listSourceFiles||t.readSourceFile||t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof o!="function")throw new Error("buildStorageDocPath is required");if((t.search||t.listSourceFiles)&&typeof a!="function")throw new Error("fetchSourceFilesIndexResponse is required");if((t.fetch||t.readSourceFile||t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof s!="function")throw new Error("fetchStorageMarkdownResponse is required");if((t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof i!="function")throw new Error("resolveSharedDocumentInput is required");if(t.inspectSharedDocumentStructure&&typeof c!="function")throw new Error("inspectSharedDocumentStructure is required");if(t.inspectAgentSurface&&typeof l!="function")throw new Error("buildAgentSurfaceInspection is required");let U=n(async(d={})=>{let g=p(d.canonicalPath);if(!g)throw new Error("canonicalPath is required");let h=p(d.workspaceId),A=await s(o(g,h));if(!A.ok)throw new Error(`read_source_file failed with ${A.status}`);return{workspaceId:h||r,canonicalPath:g,markdown:await A.text()}},"readSourceFile"),L=n(async(d={})=>{let g=i(d);if(!g)throw new Error("shareToken or shareUrl must resolve to a published Knowgrph document");let h=p(g.workspaceId),A=p(g.canonicalPath),E=await s(o(A,h));if(!E.ok)throw new Error(`read_shared_document failed with ${E.status}`);return{workspaceId:h||r,canonicalPath:A,markdown:await E.text()}},"readSharedDocument"),Y=n(async(d={})=>{let g=await L(d);return c(g)},"inspectSharedDocument"),se=n(({workspaceId:d="",canonicalPath:g=""}={})=>`kgdoc:${encodeURIComponent(p(d))}:${encodeURIComponent(p(g))}`,"buildSearchFetchId"),Se=n(d=>{let g=p(d),h=g.match(/^kgdoc:([^:]*):(.*)$/);if(h)return{workspaceId:P(h[1]||""),canonicalPath:P(h[2]||"")};let A=g.match(/\/(?:api\/storage\/doc|knowgrph\/doc)\/([^/\s)]+)\/([^\s)]+)$/);if(A)return{workspaceId:P(A[1]||""),canonicalPath:P(A[2]||"")};let E=g.match(/\/(?:api\/storage\/doc-default|knowgrph\/doc-default)\/([^\s)]+)$/);return E?{workspaceId:"",canonicalPath:P(E[1]||"")}:null},"parseSearchFetchId"),xe=n(d=>{let g=f(d).split(`
`),h=new Map,A=n(({workspaceId:E="",canonicalPath:q="",line:H=""}={})=>{let $=p(q);if(!$)return;let V=p(E),_=se({workspaceId:V,canonicalPath:$});h.has(_)||h.set(_,{id:_,title:S($),url:F({workspaceId:V,canonicalPath:$}),snippet:O(H||$),workspaceId:V||r,canonicalPath:$})},"addEntry");for(let E of g){let q=/\/(?:api\/storage\/doc|knowgrph\/doc)\/([^/\s)\]]+)\/([^\s)\]]+)/g,H=/\/(?:api\/storage\/doc-default|knowgrph\/doc-default)\/([^\s)\]]+)/g;for(let $ of E.matchAll(q))A({workspaceId:P($[1]||""),canonicalPath:P($[2]||""),line:E});for(let $ of E.matchAll(H))A({workspaceId:"",canonicalPath:P($[1]||""),line:E})}return Array.from(h.values())},"extractSearchEntriesFromSourceFilesIndex"),k=n(async(d={})=>{let g=p(d.query);if(!g)throw new Error("query is required");let h=Math.max(1,Math.min(25,Number.isFinite(Number(d.limit))?Math.floor(Number(d.limit)):10)),A=await a();if(!A.ok)throw new Error(`search failed with ${A.status}`);let E=await A.text(),q=xe(E),H=W(g),$=H.join(" "),V=q.map(v=>{let J=`${v.title}
${v.canonicalPath}
${v.workspaceId}
${v.snippet}`.toLowerCase(),Be=$&&J.includes($)?H.length*4:0,Fe=H.reduce((_t,Zt)=>_t+(J.includes(Zt)?2:0),0);return{...v,score:Be+Fe}}),_=V.slice().sort((v,J)=>J.score-v.score||v.title.localeCompare(J.title)).slice(0,D).filter(v=>/\.md(?:$|[?#])/i.test(v.canonicalPath)),j=new Map;await te(_,async v=>{let J=Se(v.id);if(!J?.canonicalPath)return null;try{let Be=await s(o(J.canonicalPath,J.workspaceId));if(!Be.ok)return null;let Fe=(await Be.text()).slice(0,N),_t=Fe.toLowerCase(),Zt=$&&_t.includes($)?H.length*6:0,qa=R(_t,H),Zr=Zt+qa;if(Zr<=0)return null;j.set(v.id,{score:Zr,snippet:T(Fe,H)})}catch{return null}return null});let ue=V.map(v=>{let J=j.get(v.id);return{...v,score:v.score+(J?.score||0),snippet:J?.snippet||v.snippet}}).filter(v=>v.score>0).sort((v,J)=>J.score-v.score||v.title.localeCompare(J.title)).slice(0,h).map(({score:v,...J})=>J);return{ids:ue.map(v=>v.id),results:ue,query:g,totalResults:ue.length}},"searchSourceFiles"),w=n(async(d={})=>{let g=Se(d.id);if(!g?.canonicalPath)throw new Error("id must be a stable Knowgrph Source File id returned by search");let h=await U(g),A=F(g);return{id:se(g),title:S(h.canonicalPath),content:h.markdown,text:h.markdown,url:A,metadata:{workspaceId:h.workspaceId,canonicalPath:h.canonicalPath,contentType:"text/markdown",source:"knowgrph-source-files"}}},"fetchSourceFileBySearchId"),y={};return t.search&&(y[t.search]=k),t.fetch&&(y[t.fetch]=w),t.listSourceFiles&&(y[t.listSourceFiles]=async()=>{let d=await a();if(!d.ok)throw new Error(`list_source_files failed with ${d.status}`);return{workspaceId:r,markdownIndex:await d.text()}}),t.readSourceFile&&(y[t.readSourceFile]=U),t.readSharedDocument&&(y[t.readSharedDocument]=L),t.inspectSharedDocumentStructure&&(y[t.inspectSharedDocumentStructure]=Y),t.inspectAgentSurface&&(y[t.inspectAgentSurface]=async()=>l()),y},"createPublishedAgentReadyToolExecutors"),vs=n(e=>`((...args) => {
  const n = (value) => value
  const __name = (value) => value
  return (${Function.prototype.toString.call(e)})(...args)
})`,"createBrowserSafeFunctionSource"),Xo=vs(Sr);var Qo=n((e={})=>{let t=n(k=>String(k||"").trim(),"normalizeString"),r=n(k=>String(k||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),o=n(k=>{let w=String(k||"").match(/^\s*/);return w?w[0].length:0},"readIndent"),a=n(k=>/^[A-Za-z0-9_:@-]+\s*:/.test(t(k)),"isYamlKeyLine"),s=n(k=>r(k).split(`
`),"splitLines"),i=n(k=>{let w=s(k),y=0;for(;y<w.length&&!t(w[y]);)y+=1;if(t(w[y])!=="---")return null;for(let d=y+1;d<w.length;d+=1)if(t(w[d])==="---")return{frontmatter:w.slice(y+1,d).join(`
`),body:w.slice(d+1).join(`
`)};return null},"extractLeadingFrontmatter"),c=n(k=>{let w=[];for(let y of s(k)){if(!t(y)||o(y)!==0)continue;let d=y.match(/^([A-Za-z0-9_:@-]+)\s*:/);d?.[1]&&w.push(d[1])}return Array.from(new Set(w)).sort((y,d)=>y.localeCompare(d))},"extractTopLevelFrontmatterKeys"),l=n((k,w)=>{let y=s(k),d=`${w}:`;for(let g=0;g<y.length;g+=1){let h=y[g],A=t(h);if(!A.startsWith(d))continue;let E=o(h),q=A.slice(d.length).trim();if(q)return{indent:E,inlineValue:q,blockLines:[],blockText:""};let H=[];for(let $=g+1;$<y.length;$+=1){let V=y[$],_=t(V),j=o(V);if(_&&j<=E&&a(V))break;H.push(V)}return{indent:E,inlineValue:"",blockLines:H,blockText:H.join(`
`)}}return null},"extractYamlBlock"),p=n(k=>{let w=[];for(let y of s(k)){let d=t(y);if(!d||d.startsWith("- "))continue;let g=d.match(/^([A-Za-z0-9_:@-]+)\s*:/);g?.[1]&&w.push(g[1])}return Array.from(new Set(w)).sort((y,d)=>y.localeCompare(d))},"extractNestedYamlKeys"),m=n(k=>{let w=s(k).filter(g=>t(g));if(!w.length)return[];let y=Math.min(...w.map(o)),d=[];for(let g of w){if(o(g)!==y)continue;let h=t(g);if(h.startsWith("- "))continue;let A=h.match(/^([A-Za-z0-9_:@-]+)\s*:/);A?.[1]&&d.push(A[1])}return Array.from(new Set(d)).sort((g,h)=>g.localeCompare(h))},"extractDirectYamlKeys"),f=n(k=>{let w=t(k);if(!w.startsWith("[")||!w.endsWith("]"))return null;let y=w.slice(1,-1).trim();return y?y.split(",").map(d=>t(d)).filter(Boolean).length:0},"countInlineSequenceEntries"),P=n(k=>{let w=t(k);return w.startsWith('"')&&w.endsWith('"')||w.startsWith("'")&&w.endsWith("'")?w.slice(1,-1):w},"cleanYamlScalar"),S=n(k=>{let w=t(k);if(!w.startsWith("[")||!w.endsWith("]"))return null;let y=w.slice(1,-1).trim();return y?y.split(",").map(d=>P(d)).filter(Boolean):[]},"extractInlineSequenceValues"),O=n((k,w)=>{let y=l(k,w);if(!y)return[];if(y.inlineValue)return S(y.inlineValue)||[];let d=[],g=y.indent+2;for(let h of y.blockLines){let A=t(h);o(h)===g&&A.startsWith("- ")&&d.push(P(A.slice(2)))}return d},"extractYamlSequenceValues"),D=n((k,w)=>{let y=s(k),d=`${w}:`;for(let g of y){let h=t(g);if(h.startsWith(d))return P(h.slice(d.length))}return null},"extractTopLevelScalarValue"),N=n((k,w)=>{let y=l(k,w);if(!y)return null;if(y.inlineValue)return f(y.inlineValue);let d=0,g=y.indent+2;for(let h of y.blockLines)t(h)&&o(h)===g&&/^\s*-\s+/.test(h)&&(d+=1);return d},"countYamlSequenceEntries"),G=n(k=>{let w=[];for(let y of s(k)){let d=y.match(/^(#{1,6})\s+(.+?)\s*$/);d?.[2]&&w.push({depth:d[1].length,text:t(d[2])})}return w},"extractMarkdownHeadings"),Q=t(e.workspaceId),W=t(e.canonicalPath),R=r(e.markdown),T=i(R),te=T?c(T.frontmatter):[],F=T?l(T.frontmatter,"flow"):null,le=F?p(F.blockText):[],U=T?l(T.frontmatter,"main_panel_integrations_demo"):null,L=T?l(T.frontmatter,"superagent_harness_demo"):null,Y=L?l(L.blockText,"runtime_surfaces"):null,se=new Set(["kg:subgraphs","clusters","groups","layers"]),Se=Array.from(new Set([...te,...le].filter(k=>se.has(k)))).sort((k,w)=>k.localeCompare(w)),xe=G(T?T.body:R);return{workspaceId:Q,canonicalPath:W,markdownLength:R.length,lineCount:R?s(R).length:0,hasFrontmatter:!!T,topLevelKeys:te,frontmatterScalars:T?{kgCanvasRenderMode:D(T.frontmatter,"kgCanvasRenderMode"),kgCanvas2dRenderer:D(T.frontmatter,"kgCanvas2dRenderer"),deployed_api_claim:D(T.frontmatter,"deployed_api_claim")}:{},mainPanelIntegrationsDemo:U?{present:!0,mainPanelEntries:O(U.blockText,"main_panel_entries"),providerIds:O(U.blockText,"provider_ids"),providerLabels:O(U.blockText,"provider_labels"),taskCapabilities:O(U.blockText,"task_capabilities"),taskLevels:O(U.blockText,"task_levels"),integrationOpenTab:D(U.blockText,"integration_open_tab"),canvas2dRenderer:D(U.blockText,"canvas_2d_renderer"),sourceFile:D(U.blockText,"source_file")}:{present:!1},superAgentHarnessDemo:L?{present:!0,taskCapabilities:O(L.blockText,"task_capabilities"),taskLevels:O(L.blockText,"task_levels"),runtimeSurfaces:Y?m(Y.blockText):[]}:{present:!1},hasFlowBlock:!!F,flowKeys:le,flowNodeCount:F?N(F.blockText,"nodes"):null,flowConnectionCount:F?N(F.blockText,"connections")??N(F.blockText,"edges"):null,flowSubgraphCount:F?N(F.blockText,"subgraphs"):null,forbiddenGroupingKeys:Se,headingCount:xe.length,headings:xe.map(k=>k.text),bodyLength:t(T?T.body:R).length}},"inspectSharedDocumentStructure");var br=n(e=>Array.isArray(e)?e.map(br):!e||typeof e!="object"?e:Object.keys(e).sort((t,r)=>t.localeCompare(r)).reduce((t,r)=>(t[r]=br(e[r]),t),{}),"normalizeJsonValue"),Zo=n(e=>JSON.stringify(br(e)),"stableStringify");function en(e){let t=e.map(o=>o==null?"":String(o)).join("|"),r=2166136261;for(let o=0;o<t.length;o+=1)r^=t.charCodeAt(o),r=Math.imul(r,16777619);return(r>>>0).toString(16).padStart(8,"0")}n(en,"hashSemanticParts");var Ot=Object.freeze({generate:"knowgrph.probe.generate",select:"knowgrph.probe.select",evolve:"knowgrph.probe.evolve"}),vt=Object.freeze({optionCount:3,maxOptionCount:4,recallTopK:5,tokenBudget:1200,optionCompletionTokenEstimate:64,maxDepth:8,appMemoryScope:"knowgrph-probe-tree"}),tn=Object.freeze({type:"object",additionalProperties:!0,required:["id","text","rationale"],properties:{id:{type:"string"},text:{type:"string"},rationale:{type:"string"}}}),_r=Object.freeze({type:"object",additionalProperties:!1,required:["model","prompt_tokens","completion_tokens","cache_hits","estimated_cost_usd"],properties:{model:{type:"string"},prompt_tokens:{type:"number"},completion_tokens:{type:"number"},cache_hits:{type:"number"},estimated_cost_usd:{oneOf:[{type:"number"},{type:"null"}]}}}),bu=Object.freeze({type:"object",additionalProperties:!1,required:["thread_root_id","current_node_id"],properties:{thread_root_id:{type:"string",minLength:1},current_node_id:{type:"string",minLength:1},context_text:{type:"string"},k:{type:"integer",minimum:1,maximum:vt.maxOptionCount,default:vt.optionCount},recall_top_k:{type:"integer",minimum:0,maximum:20,default:vt.recallTopK},token_budget:{type:"integer",minimum:1,default:vt.tokenBudget},graph_store_dir:{type:"string"}}}),_u=Object.freeze({type:"object",additionalProperties:!1,required:["thread_root_id","parent_node_id","chosen_option"],properties:{thread_root_id:{type:"string",minLength:1},parent_node_id:{type:"string",minLength:1},chosen_option:tn,context_text:{type:"string"},terminal:{type:"boolean",default:!1},graph_store_dir:{type:"string"}}}),Au=Object.freeze({type:"object",additionalProperties:!1,required:["thread_root_id"],properties:{thread_root_id:{type:"string",minLength:1},terminal_node_id:{type:"string"},resolved:{type:"boolean",default:!0},rating:{type:"number",minimum:0,maximum:1},allow_partial_path:{type:"boolean",default:!1},graph_store_dir:{type:"string"}}}),Pu=Object.freeze({type:"object",additionalProperties:!0,required:["contractVersion","ok","options","cost_log"],properties:{contractVersion:{type:"string"},ok:{type:"boolean"},options:{type:"array",items:tn},degraded:{type:"boolean"},recalled_exemplars:{type:"array",items:{type:"object",additionalProperties:!0}},token_budget:{type:"object",additionalProperties:!0},cost_log:_r}}),ku=Object.freeze({type:"object",additionalProperties:!0,required:["contractVersion","ok","new_node_id","edge_id","node_path","cost_log"],properties:{contractVersion:{type:"string"},ok:{type:"boolean"},new_node_id:{type:"string"},edge_id:{type:"string"},node_path:{type:"string"},checkpoint:{type:"object",additionalProperties:!0},cost_log:_r}}),xu=Object.freeze({type:"object",additionalProperties:!0,required:["contractVersion","ok","updated_scores","exemplar_id","cost_log"],properties:{contractVersion:{type:"string"},ok:{type:"boolean"},updated_scores:{type:"array",items:{type:"object",additionalProperties:!0}},exemplar_id:{type:"string"},complete_path_scored:{type:"boolean"},unscored_parent_node_ids:{type:"array",items:{type:"string"}},cost_log:_r}});var rn="knowgrph.os.status",M=Object.freeze({search:u.search,fetch:u.fetch,uiLaunch:"knowgrph.ui.launch",uiStop:"knowgrph.ui.stop",pipeline:"knowgrph.pipeline",graphragPipeline:"knowgrph.graphrag_pipeline",superagentRun:"knowgrph.superagent.run",videoRemixRun:"knowgrph.video_remix.run",browserApiRun:"knowgrph.browser_api.run",sealionDetectLanguageVariant:"sealion.detect_language_variant",sealionTranslateLocalize:"sealion.translate_localize",sealionSafetyCheck:"sealion.safety_check",htmlVideoRender:"knowgrph.html_video.render",annotateImage:"knowgrph.annotate.image",annotateVideoFrame:"knowgrph.annotate.video_frame",memoryAdd:"knowgrph.memory.add",memorySearch:"knowgrph.memory.search",memoryAssemblePrompt:"knowgrph.memory.assemble_prompt",memoryExtractProcedural:"knowgrph.memory.extract_procedural",memoryMaterializeUserModel:"knowgrph.memory.materialize_user_model",probeGenerate:Ot.generate,probeSelect:Ot.select,probeEvolve:Ot.evolve,smeSourceNormalize:"knowgrph.sme.source.normalize",smeTriggerEvaluate:"knowgrph.sme.trigger.evaluate",smeBrokerDraftNudge:"knowgrph.sme.broker.draft_nudge",smeMarketplaceMatch:"knowgrph.sme.marketplace.match",smeMultilingualAdapt:"knowgrph.sme.multilingual.adapt",smeCareAgentStatus:"sme_care_agent_status",agenticCanvasOsDocsInvoke:"knowgrph.agentic_canvas_os.docs.invoke",showrunnerStartRun:"knowgrph.showrunner.start_run",showrunnerRunStatus:"knowgrph.showrunner.run_status",showrunnerPostChoice:"knowgrph.showrunner.post_choice",showrunnerSubmitCritique:"knowgrph.showrunner.submit_critique",showrunnerApproveStage:"knowgrph.showrunner.approve_stage",showrunnerGetArtifact:"knowgrph.showrunner.get_artifact",sandboxPolicyValidate:"knowgrph.sandbox.policy.validate",sandboxPolicyAuthorize:"knowgrph.sandbox.policy.authorize",osStatus:rn,vdeoxplnList:"knowgrph.vdeoxpln.list"}),on=n(()=>Object.values(M),"buildKnowgrphLocalMcpToolNameList");var an="knowgrph-vdeoxpln/v0.1";var ye=Object.freeze({sourceFiles:"knowgrph-source-files",agentReady:"knowgrph-agent-ready",localMcp:"knowgrph-mcp-local",chatToCanvas:"knowgrph-chat-to-canvas",strybldr:"knowgrph-strybldr",researchVisual:"knowgrph-research-visual",memoryLayer:"knowgrph-memory-layer",aiShowrunner:"knowgrph-ai-showrunner",htmlVideoRenderer:"knowgrph-html-video-renderer",videoAgent:"knowgrph-video-agent",visualAnnotationEngine:"knowgrph-visual-annotation-engine",commerceReadiness:"knowgrph-commerce-readiness"}),Ar=n(e=>String(e||"").trim(),"normalizeString"),we=n(e=>Array.from(new Set((Array.isArray(e)?e:[]).map(Ar).filter(Boolean))).sort((t,r)=>t.localeCompare(r)),"normalizeStringArray"),nn=n(e=>{let t=new Set,r=[];for(let o of Array.isArray(e)?e:[]){let a=Ar(o);!a||t.has(a)||(t.add(a),r.push(a))}return r},"normalizeOrderedStringArray"),Os=Zo,Is=n((e,t)=>{let r=Ar(e)||"vdeoxpln";return`kgvx_${en([r,an,Os(t)])}`},"buildKnowgrphVdeoxplnSemanticKey");var Ms=Object.freeze([{id:ye.sourceFiles,title:"Knowgrph Source Files",purpose:"Discover, read, inspect, and route published Source Files and shared documents through the canonical storage and document-structure owners.",scope:"read-only-published",mutation:"read-only",triggers:["source files","published documents","shared document","read markdown","inspect document structure"],inputs:["workspace document","published markdown","share token","share URL","canonical path"],outputs:["source-files index","published markdown","document structure report"],owners:["canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/sourceFilesSignatures.ts","canvas/src/features/agent-ready/publishedToolExecutors.mjs","canvas/src/features/agent-ready/sharedDocumentStructureInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs"],tools:{published:[u.listSourceFiles,u.readSourceFile,u.readSharedDocument,u.inspectSharedDocumentStructure],browserLocal:[u.inspectLocalSourceFilesSnapshot],local:[M.search,M.fetch,M.vdeoxplnList]},workflow:["Resolve source identity from storage, share token, or canonical path.","Fetch through published storage/document executors.","Inspect structure with the shared document-structure owner.","Return read-only artifacts without graph mutation."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return source-read or structure errors without model calls."},artifactPolicy:{persistence:"published-read-only",graphMaterialization:"none",semanticKeyInputs:["workspaceId","canonicalPath","shareToken","toolContract"]},validation:["agent-ready:check","pages:check-sync","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","webmcp-html-fallback"]},{id:ye.agentReady,title:"Knowgrph Agent Ready",purpose:"Inspect Knowgrph health, MCP, WebMCP, A2A, OpenAPI, commerce, and browser-local readiness without claiming deployed mutation.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["agent-ready","webmcp","mcp health","openapi","a2a","discovery","readiness"],inputs:["agent-ready base URL","browser runtime state","published metadata"],outputs:["agent surface inspection","browser-local readiness snapshot","metadata report"],owners:["canvas/src/features/agent-ready/knowgrphAgentReadyToolContract.mjs","canvas/src/features/agent-ready/webMcpRuntime.ts","canvas/src/features/agent-ready/agentSurfaceInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs","scripts/check-agent-ready.mjs"],tools:{published:[u.inspectAgentSurface],browserLocal:[u.inspectLocalSettingsChatReadiness,u.inspectLocalMainPanelState,u.inspectLocalEditorWorkspaceState,u.inspectLocalChatPipelineState,u.inspectLocalMainPanelChatCanvasPipeline,u.inspectLocalWorkspaceDocument,u.inspectLocalCanvasTopology,u.inspectLocalCanvasSnapshot,u.inspectLocal3dCameraPose,u.inspectLocal3dLayoutPositions,u.inspectLocal2dZoomViewport,u.inspectLocalSourceFilesSnapshot],local:[M.vdeoxplnList]},workflow:["Inspect published agent-ready metadata.","Inspect browser-local state only when running inside the app runtime.","Report scope boundaries between Pages read-only tools and browser-local inspectors."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return metadata inspection errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["toolContracts","metadataRoutes","browserLocalToolNames"]},validation:["agent-ready:check","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","browser-webmcp"]},{id:ye.localMcp,title:"Knowgrph Local MCP",purpose:"Expose Knowgrph-owned local Source Files, Agentic Canvas OS docs invocation, UI, pipeline, SuperAgent, video-remix, browser bridge, SEA-LION, HTML video, visual annotation, memory, probe-tree, showrunner, OS status, and vdeoxpln tools through the stdio MCP server.",scope:"local-stdio",mutation:"local-confirmed",triggers:["local mcp","agentic canvas os docs","/","#","@","launch canvas","run pipeline","graphrag","superagent","video remix","browser api","sealion sidecar","html video","visual annotation","memory layer","probe tree","showrunner","os status","list vdeoxpln"],inputs:["local root","agentic canvas os invocation token","workspace file","graph data","pipeline config","reference URL","source cards","browser API runtime","Southeast Asian language text","render spec","annotation asset","memory scope","probe branch","creative brief"],outputs:["local tool result","Agentic Canvas OS docs invocation result","pipeline artifact","superagent report","video remix run manifest","SEA-LION sidecar result","render manifest","annotation result","memory result","probe checkpoint","showrunner artifact","OS status snapshot","vdeoxpln registry snapshot"],owners:["mcp/local-tool-contract.js","mcp/server.js","mcp/agentic-canvas-os-docs-runtime.js","mcp/director-lanes.js","mcp/director-workflow.js","mcp/video-remix-runtime.js","mcp/README.md","knowgrph_parser/superagent_harness.py","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:on()},workflow:["List local tools from the shared local MCP contract.","Run only path-guarded local-root operations.","Run video-remix orchestration as an approval-gated local manifest before any paid provider call.","Resolve Agentic Canvas OS /, #, and @ docs invocations from the sibling docs SSOT.","Forward SEA-LION regional language, localization, and safety calls to the hosted sidecar with server-owned auth.","Summarize artifacts and registry metadata in the MCP result."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"tool-owned",fallback:"Return local command failure and detected artifacts."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"tool-owned",semanticKeyInputs:["localToolNames","rootScope","artifactList"]},validation:["vdeoxpln:check","mcpLocalToolContract"],publish:["local-mcp-docs"]},{id:ye.chatToCanvas,title:"Knowgrph Chat To Canvas",purpose:"Route AI-assisted graph generation through FloatingPanel Chat, KGC validation, Workspace FS, Source Files, and Canvas apply owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["chat to canvas","generate graph","kgc markdown","flow.subgraphs","apply to canvas"],inputs:["chat request","workspace context","selection context","source evidence","model settings"],outputs:["validated KGC Markdown","workspace artifact","GraphData","canvas topology snapshot"],owners:["canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitRequest.ts","canvas/src/features/chat/chatMarkdownValidation.ts","canvas/src/features/chat/chatKgcCanvasApply.ts","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/lib/graph/semanticKey.ts"],tools:{published:[],browserLocal:[u.inspectLocalChatPipelineState,u.inspectLocalMainPanelChatCanvasPipeline,u.inspectLocalWorkspaceDocument,u.inspectLocalCanvasTopology,u.inspectLocalCanvasSnapshot],local:[M.vdeoxplnList]},workflow:["Vdeoxpln context through the shared chat submit request owner.","Call provider transport only after typed request construction.","Validate KGC Markdown with bounded retries.","Persist through Workspace FS and apply through the existing Canvas path."],aiPolicy:{mode:"required-for-generation",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Persist validation or provider failure as reviewable chat/workspace state."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["chatContextScope","workspacePath","graphSemanticKey","sourceLayerHash"]},validation:["chatResponseContract","sourceFiles","vdeoxpln:check"],publish:["browser-webmcp","mainpanel-mcp"]},{id:ye.strybldr,title:"Knowgrph Strybldr",purpose:"Turn image or media source units into editable Storyboard cards and bounded media handoff artifacts through Strybldr and shared renderer owners.",scope:"browser-local-source-backed",mutation:"browser-local-user-mediated",triggers:["strybldr","storyboard","image to storyboard","media handoff","visual brief"],inputs:["image source unit","media metadata","workspace document","storyboard graph"],outputs:["Strybldr Markdown","Storyboard graph cards","camera-aware media handoff prompt","canvas snapshot"],owners:["canvas/src/features/strybldr/strybldrStoryboard.ts","canvas/src/features/strybldr","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-strybldr-prd-tad.md"],tools:{published:[],browserLocal:[u.inspectLocalSourceFilesSnapshot,u.inspectLocalCanvasTopology,u.inspectLocalCanvasSnapshot],local:[M.vdeoxplnList]},workflow:["Import media through existing workspace/source owners.","Build Strybldr cards with source-unit provenance.","Persist Camera reframe settings on selected graph cards.","Render through the shared Storyboard surface.","Compile bounded media handoff only after user approval."],aiPolicy:{mode:"optional-for-refinement",maxAttempts:1,tokenBudget:"user-approved-provider-step",fallback:"Keep editable storyboard and structured handoff error."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"storyboard-graph",semanticKeyInputs:["sourceUnitId","strybldrRunId","graphSemanticKey","strybldrCamera"]},validation:["strybldr","rendererPipelineNeutrality","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:ye.researchVisual,title:"Knowgrph Research Visual",purpose:"Create file-backed research visual workflows from source material using Knowgrph parsing, Source Files, Storyboard, renderer, and chat owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["research visual","explainer","formula","algorithm","proof","dynamic scene","storyboard"],inputs:["paper excerpt","formula","algorithm","figure","workspace document","source evidence"],outputs:["mechanism brief","storyboard","renderer-neutral scene plan","validated KGC Markdown"],owners:["canvas/src/features/parsers/default.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-vdeoxpln-prd-tad.md"],tools:{published:[],browserLocal:[u.inspectLocalChatPipelineState,u.inspectLocalSourceFilesSnapshot,u.inspectLocalCanvasTopology],local:[M.vdeoxplnList]},workflow:["Extract source-backed semantic units into workspace artifacts.","Plan exact deterministic graph/storyboard layers before optional AI support.","Persist artifacts through Workspace FS and Source Files.","Use Canvas/Storyboard renderers as projections of graph state."],aiPolicy:{mode:"optional-for-drafting",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Return deterministic source brief with unresolved questions."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["sourceSignature","graphSemanticKey","rendererId"]},validation:["sourceFiles","chatResponseContract","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:ye.memoryLayer,title:"Knowgrph Memory Layer",purpose:"Persist, retrieve, inject, extract, and materialize explicitly scoped agent memories through a provider-neutral local harness with source-owned Markdown outputs.",scope:"local-stdio-and-browser-local",mutation:"local-scoped-memory",triggers:["memory layer","long-term memory","cross-session context","mem0","personalization","prompt memory","procedural memory","harness replay","user model","profile markdown"],inputs:["user or agent message","runtime scope","memory query","harness output dir"],outputs:["memory write result","ranked memory results","bounded prompt context","memory cost log","procedural KGC markdown","USER_MODEL markdown"],owners:["canvas/src/features/memory/aiAgentsMemoryLayerContract.mjs","mcp/memory-layer-runtime.js","mcp/local-tool-contract.js","mcp/server.js","docs/documents/knowgrph-ai-agents-memory-layer-prd-tad.md"],tools:{published:[],browserLocal:[],local:[M.memoryAdd,M.memorySearch,M.memoryAssemblePrompt,M.memoryExtractProcedural,M.memoryMaterializeUserModel,M.vdeoxplnList]},workflow:["Require explicit runtime scope.","Add/search through the configured harness.","Inject only top-ranked memories within token budget.","Extract completed harness runs into reusable KGC procedural-memory documents.","Materialize scoped memories into deterministic USER_MODEL markdown when a source-owned profile is needed."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"memory-harness-owned",fallback:"Return empty memory results or skip write while preserving the agent turn."},artifactPolicy:{persistence:"operator-configured-local-memory-store",graphMaterialization:"none",semanticKeyInputs:["memoryScope","operation","topK","providerMode"]},validation:["vdeoxpln:check","mcpLocalToolContract","aiAgentsMemoryLayer"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:ye.aiShowrunner,title:"Knowgrph AI Showrunner",purpose:"Run provider-neutral multi-agent creative pipelines for podcasts, narrative games, and writers rooms through existing Source Files, memory, MCP, KGC, and Storyboard Widget owners.",scope:"local-stdio-and-browser-local",mutation:"local-approval-gated",triggers:["ai showrunner","podcast pipeline","narrative game","writers room","creative state","multi-agent orchestration"],inputs:["creative brief markdown","run id","choice signal","critique text","operator approval"],outputs:["pipeline run state","creative state entries","script","choice graph","revision history","artifact manifest"],owners:["canvas/src/features/ai-showrunner","canvas/src/features/chat/chatKgcCanvasApply.ts","canvas/src/features/source-files","canvas/src/features/memory/aiAgentsMemoryLayerContract.mjs","canvas/src/lib/graph/semanticKey.ts","mcp/local-tool-contract.js"],tools:{published:[],browserLocal:[],local:[M.showrunnerStartRun,M.showrunnerRunStatus,M.showrunnerPostChoice,M.showrunnerSubmitCritique,M.showrunnerApproveStage,M.showrunnerGetArtifact,M.vdeoxplnList]},workflow:["Validate the frontmatter-first Creative_Brief before any agent turn.","Run bounded role turns through dry-run or injected provider-neutral dispatch.","Persist append-only state, token logs, and manifests through Source Files."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"pipeline-run-owned",fallback:"Halt at approval or structured error while preserving committed Creative_State."},artifactPolicy:{persistence:"source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["run_id","agent_role","turn_index","content_hash"]},validation:["vdeoxpln:check","mcpLocalToolContract","showrunnerDryRun"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:ye.htmlVideoRenderer,title:"Knowgrph HTML Video Renderer",purpose:"Render HTML, CSS, and data documents to MP4 video artifacts through a runtime-selected pluggable engine and the existing rich media output owner.",scope:"local-stdio-and-browser-local",mutation:"local-approval-gated",triggers:["html video render","html to video","programmatic video","render html mp4","coding agent video"],inputs:["html document","css","data json","render spec","engine hint"],outputs:["mp4 video blob","render manifest","artifact path","render job id"],owners:["canvas/src/features/html-video-renderer/htmlVideoRendererSsot.ts","canvas/src/features/html-video-renderer/htmlVideoRenderJob.ts","canvas/src/features/html-video-renderer/htmlVideoEngineRegistry.ts","canvas/src/features/html-video-renderer/htmlVideoRendererSpec.ts","canvas/src/features/html-video-renderer/htmlVideoFlowNode.ts","canvas/src/features/html-video-renderer/htmlVideoWidget.ts","canvas/src/features/chat/richMediaRun.ts","canvas/src/features/source-files","canvas/src/lib/config.storyboard-widget.ts","canvas/src/lib/graph/semanticKey.ts","mcp/local-tool-contract.js","mcp/server.js","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[M.htmlVideoRender,M.vdeoxplnList]},workflow:["Validate the Render_Spec before any engine call.","Resolve active engine from KNOWGRPH_HTML_VIDEO_ENGINE or engineHint at invocation time.","Execute the render engine and capture the video/mp4 blob.","Route the blob through writeRichMediaWidgetRunOutputArtifact exactly once.","Return renderJobId, outputPath, outputManifestPath, and outputStorageUrl."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return structured error without model call."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"rich-media-panel",semanticKeyInputs:["renderJobId","engineId","renderSpecHash","outputPath"]},validation:["vdeoxpln:check","mcpLocalToolContract","htmlVideoRenderer"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:ye.videoAgent,title:"Knowgrph Video Agent",purpose:"Reason over operator-supplied video sources through native knowgrph ingestion, parsing, annotation, dataset operations, zone counting, search planning, edit planning, timeline compilation, generation placeholders, and streamable rich-media output.",scope:"browser-local-and-local-stdio",mutation:"local-approval-gated",triggers:["video agent","video reasoning","video search","video editing","video compilation","video generation","stream video result","visual dataset","zone counting"],inputs:["operator-supplied video url","source manifest","annotation tasks","search intent","edit constraints","render spec"],outputs:["source manifest","visual annotation dataset","zone counting timeline","moment search index","edit plan","timeline manifest","render spec","reasoning artifact manifest","video/mp4 artifact","inline stream preview"],owners:["canvas/src/features/video-agent","canvas/src/features/video-agent/videoAgentDatasetRuntime.ts","canvas/src/features/html-video-renderer/htmlVideoRendererSsot.ts","canvas/src/features/html-video-renderer/htmlVideoFlowNode.ts","canvas/src/features/visual-annotation-engine/annotationDataset.ts","canvas/src/features/visual-annotation-engine/annotationFlowNode.ts","canvas/src/features/visual-annotation-engine/annotationSerializers.ts","canvas/src/features/chat/richMediaRun.ts","canvas/src/features/source-files","canvas/src/lib/graph/semanticKey.ts","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[M.htmlVideoRender,M.annotateImage,M.annotateVideoFrame,M.vdeoxplnList]},workflow:["Ingest an operator-supplied video source without embedding a provider runtime dependency.","Parse source metadata, frame annotations, transcript windows, and searchable moments through existing source and annotation owners.","Load frame annotations into native visual dataset operators for deterministic split, merge, save, and frame-ordered zone counting.","Plan search, edit, compilation, and generation stages as typed reasoning artifacts rather than copied external code.","Compile a source-owned HTML/CSS/data Render_Spec for the selected timeline.","Stream a video/mp4 artifact or outputSrcDoc preview through the shared Rich Media Panel output owner."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"operator-configured",fallback:"Return structured source, annotation, dataset, zone counting, or render errors without invoking external video-agent services."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"rich-media-panel",semanticKeyInputs:["sourceUrl","capabilities","reasoningArtifacts","visualDataset","zoneCounting","renderSpecHash","streamOutput"]},validation:["vdeoxpln:check","mcpLocalToolContract","htmlVideoRenderer","visualAnnotationEngine","visualAnnotationDataset","videoAgentPipeline"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:ye.visualAnnotationEngine,title:"Knowgrph Visual Annotation Engine",purpose:"Run browser-local image and video-frame annotation into LLM-ready structured JSON plus native visual datasets materialised through existing artifact owners.",scope:"browser-local",mutation:"local-approval-gated",triggers:["annotate image","annotate video","visual annotation","object detection","image caption","florence2","semantic labels","llm-ready annotation","annotation dataset","zone counting"],inputs:["image url","video asset url","annotation tasks","model hint","frame timestamp"],outputs:["annotation result json","visual annotation dataset","zone counting timeline","llm-ready payload","annotation canvas node","markdown summary"],owners:["canvas/src/features/visual-annotation-engine/annotationEngineSsot.ts","canvas/src/features/visual-annotation-engine/annotationDataset.ts","canvas/src/features/visual-annotation-engine/annotationWorker.ts","canvas/src/features/visual-annotation-engine/annotationOrchestrator.ts","canvas/src/features/visual-annotation-engine/annotationSerializers.ts","canvas/src/features/visual-annotation-engine/annotationFlowNode.ts","canvas/src/features/visual-annotation-engine/annotationMcpTools.ts","canvas/src/features/visual-annotation-engine/annotationWidget.ts","canvas/src/features/chat/richMediaRun.ts","canvas/src/features/source-files","canvas/src/lib/graph/semanticKey.ts","canvas/src/lib/config.storyboard-widget.ts","mcp/local-tool-contract.js","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[M.annotateImage,M.annotateVideoFrame,M.vdeoxplnList]},workflow:["Validate the Annotation_Spec before model resolution or inference.","Resolve model identifier from modelHint, KNOWGRPH_ANNOTATION_MODEL, or the registered default.","Dispatch through the Annotation_Worker boundary; Dev emits dependency-free heuristic annotations while model adapters remain runtime-owned.","Build annotationId with buildScopedGraphSemanticKey using assetUrl, modelId, and sorted tasks.","Load Annotation_Result or frame-box arrays into the native dataset owner for split, merge, save, and frame-ordered zone counting.","Route JSON output through writeRichMediaWidgetRunOutputArtifact exactly once.","Return annotationId, assetUrl, modelId, tasks, outputPath, and outputManifestPath."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return runtime-local heuristic annotation JSON or a structured validation/runtime error without model call."},artifactPolicy:{persistence:"browser-local",graphMaterialization:"annotation-canvas-node",semanticKeyInputs:["annotationId","assetUrl","modelId","sortedTasks","visualDataset","zoneCounting"]},validation:["vdeoxpln:check","mcpLocalToolContract","visualAnnotationEngine","visualAnnotationDataset"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:ye.commerceReadiness,title:"Knowgrph Commerce Readiness",purpose:"Inspect Commerce, payment worker, x402, ACP, UCP, MPP, and readiness metadata without bypassing the shared payment SSOT.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["commerce","payment","x402","acp","ucp","mpp","stripe","readiness"],inputs:["agent-ready metadata","commerce route health","browser readiness snapshot"],outputs:["commerce readiness report","payment route summary","agent-ready commerce metadata"],owners:["canvas/src/features/panels/views/CommerceHubView.tsx","canvas/src/features/agent-ready/browserLocalSurfaceSnapshots.ts","cloudflare/pages/knowgrph-agent-ready-commerce.mjs","cloudflare/workers/knowgrph-payment/agenticCommerce.ts","grph-shared/src/payments/agenticCommerceSsot.ts"],tools:{published:[u.inspectAgentSurface],browserLocal:[u.inspectLocalSettingsChatReadiness,u.inspectLocalMainPanelState],local:[M.vdeoxplnList]},workflow:["Inspect published commerce discovery metadata.","Read browser-local readiness snapshots when available.","Report payment capability boundaries without initiating checkout."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return route or metadata errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["commerceSemanticKey","routeHealth","toolContract"]},validation:["agent-ready:check","mainPanelCommerce","vdeoxpln:check"],publish:["pages-agent-skills","mainpanel-mcp","browser-webmcp"]}]),Ns=n(e=>{let t={published:we(e.tools?.published),browserLocal:we(e.tools?.browserLocal),local:we(e.tools?.local)},r=Is(e.id,{id:e.id,scope:e.scope,mutation:e.mutation,owners:we(e.owners),tools:t,triggers:we(e.triggers),outputs:we(e.outputs),workflow:nn(e.workflow),artifactPolicy:e.artifactPolicy||{},aiPolicy:e.aiPolicy||{}}),o=`/.well-known/agent-skills/${e.id}.md`;return Object.freeze({...e,version:an,triggers:we(e.triggers),inputs:we(e.inputs),outputs:we(e.outputs),owners:we(e.owners),tools:Object.freeze(t),workflow:nn(e.workflow),validation:we(e.validation),publish:we(e.publish),semanticKey:r,agentSkill:Object.freeze({name:e.id,type:"markdown",description:e.purpose,path:o})})},"normalizeVdeoxpln"),sn=n(()=>Ms.map(Ns).sort((e,t)=>e.id.localeCompare(t.id)),"buildKnowgrphVdeoxplnRegistry");var cn=n((e=sn())=>e.map(t=>({...t.agentSkill,vdeoxpln:{id:t.id,title:t.title,scope:t.scope,mutation:t.mutation,semanticKey:t.semanticKey,tools:t.tools,publish:t.publish}})),"buildKnowgrphVdeoxplnAgentSkillDefinitions"),Ce=n(e=>e&&e.length?e.map(t=>`- ${t}`).join(`
`):"- none","markdownList"),Us=n(e=>`# ${e.title} Skill

Use this skill when: ${e.purpose}

## Contract

- Vdeoxpln id: \`${e.id}\`
- Contract version: \`${e.version}\`
- Semantic key: \`${e.semanticKey}\`
- Scope: \`${e.scope}\`
- Mutation boundary: \`${e.mutation}\`

## Triggers

${Ce(e.triggers)}

## Inputs

${Ce(e.inputs)}

## Outputs

${Ce(e.outputs)}

## Tools

Published tools:
${Ce(e.tools.published)}

Browser-local tools:
${Ce(e.tools.browserLocal)}

Local MCP tools:
${Ce(e.tools.local)}

## Workflow

${Ce(e.workflow)}

## Source Owners

${Ce(e.owners)}

## Artifact Policy

- Persistence: \`${e.artifactPolicy?.persistence||"none"}\`
- Graph materialization: \`${e.artifactPolicy?.graphMaterialization||"none"}\`
- Semantic-key inputs:
${Ce(e.artifactPolicy?.semanticKeyInputs||[])}

## AI Policy

- Mode: \`${e.aiPolicy?.mode||"none"}\`
- Max attempts: \`${String(e.aiPolicy?.maxAttempts??0)}\`
- Token budget: \`${String(e.aiPolicy?.tokenBudget??0)}\`
- Fallback: ${e.aiPolicy?.fallback||"Return deterministic errors without model calls."}

## Validation

${Ce(e.validation)}

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
`,"buildKnowgrphVdeoxplnMarkdown"),ln=n((e=sn())=>Object.fromEntries(e.map(t=>[t.id,Us(t)])),"buildKnowgrphVdeoxplnMarkdownByName");var pn=n(({appUrl:e,rootUrl:t,storageSourceFilesUrl:r,storageLlmsUrl:o,storageManifestUrl:a,agentCardUrl:s,updatedAt:i})=>`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[e,`${e}llms.txt`,`${t}llms.txt`,r,o,a,`${e}.well-known/openapi.json`,s,`${e}.well-known/mcp/server-card.json`].map(p=>`  <url>
    <loc>${p}</loc>
    <lastmod>${i}</lastmod>
  </url>`).join(`
`)}
</urlset>
`,"buildMarkdownDiscoverySitemapXml"),un=n(({appUrl:e,rootUrl:t,storageLlmsUrl:r,storageManifestUrl:o,agentCardUrl:a})=>`# Airvio

> Agent discovery index for Airvio products and machine-readable interfaces.

## Products

- [Knowgrph](${e}llms.txt): Agent-actionable chat-to-canvas knowledge graph workspace.

## Agent Interfaces

- [Knowgrph Source Files](${r})
- [Markdown Content Manifest](${o})
- [Knowgrph OpenAPI](${e}.well-known/openapi.json)
- [A2A Agent Card](${a})
- [MCP Server Card](${e}.well-known/mcp/server-card.json)
- [Crawl policy](${t}robots.txt)
- [Sitemap](${t}sitemap.xml)
`,"buildRootLlmsTxt"),Ls=new Map([["/knowgrph/openapi.json","/knowgrph/.well-known/openapi.json"],["/knowgrph/api-catalog.json","/knowgrph/.well-known/api-catalog"]]),dn=n(e=>Ls.get(e)||"","resolveMachineRouteRedirect"),$s={[u.search]:{id:"search",tags:["mcp","search","source-files","read-only"],examples:["Search Knowgrph Source Files for renderer architecture."],outputModes:["application/json"]},[u.fetch]:{id:"fetch",tags:["mcp","fetch","source-files","markdown","read-only"],examples:["Fetch the Knowgrph Source File id returned by search."],outputModes:["text/markdown","application/json"]},[u.listSourceFiles]:{id:"list-source-files",tags:["mcp","discovery","source-files","read-only"],examples:["List the published Knowgrph Source Files."],outputModes:["text/markdown","application/json"]},[u.readSourceFile]:{id:"read-source-file",tags:["mcp","read","markdown","workspace"],examples:["Read the published source file for docs/getting-started.md."],outputModes:["text/markdown","application/json"]},[u.readSharedDocument]:{id:"read-shared-document",tags:["mcp","read","shared-document","markdown"],examples:["Read the Knowgrph shared document behind this share URL."],outputModes:["text/markdown","application/json"]},[u.inspectSharedDocumentStructure]:{id:"inspect-shared-document-structure",tags:["mcp","inspect","shared-document","structure"],examples:["Inspect the structure of this Knowgrph shared document."],outputModes:["application/json","text/markdown"]},[u.inspectAgentSurface]:{id:"inspect-agent-surface",tags:["mcp","agent-ready","discovery","metadata"],examples:["Show the Knowgrph agent discovery metadata."],outputModes:["application/json","text/markdown"]}},pt=cn(),mn=n(e=>e.map(t=>{let r=$s[t.name]||{id:String(t.name||"").replace(/_/g,"-"),tags:["mcp","read-only"],examples:[`Call ${t.name} on Knowgrph.`],outputModes:["application/json"]};return{id:r.id,name:t.title,description:t.description,tags:r.tags,examples:r.examples,inputModes:["application/json","text/plain"],outputModes:r.outputModes}}),"buildAgentReadyA2aSkills"),hn=n(async({appUrl:e,updatedAt:t,sha256ByName:r})=>({$schema:"https://agent-skills.dev/schemas/skills-index.v0.2.json",updated_at:t,skills:await Promise.all(pt.map(async o=>({name:o.name,type:o.type,description:o.description,url:`${String(e||"").replace(/\/+$/,"")}${o.path}`,sha256:await r[o.name],vdeoxpln:o.vdeoxpln})))}),"buildAgentReadyAgentSkillsIndex"),gn=n(({appBasePath:e,appA2aAgentCardPath:t,healthPath:r})=>{let o=Object.fromEntries(pt.map(a=>[`${e}${a.path}`,{get:{summary:`Read the ${a.name} agent skill markdown`,responses:{200:{description:`Agent skill markdown for ${a.name}`}}}}]));return{[r]:{get:{summary:"Read the Knowgrph agent-ready health status",responses:{200:{description:"Health status in application/health+json format"}}}},[`${e}/mcp`]:{get:{summary:"Read MCP transport metadata",responses:{200:{description:"MCP transport metadata"}}},post:{summary:"Send a JSON-RPC MCP request",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0}}}},responses:{200:{description:"JSON-RPC result payload"}}}},[t]:{get:{summary:"Read the Knowgrph A2A Agent Card",responses:{200:{description:"A2A Agent Card JSON"}}}},"/api/storage/llms.txt":{get:{summary:"Read the Source Files LLM index",responses:{200:{description:"Plain-text LLM index"}}}},"/api/storage/content-manifest.json":{get:{summary:"Read the Markdown-first published content manifest",responses:{200:{description:"Editor Workspace source paths with canonical HTML and Markdown projections"}}}},"/api/storage/source-files":{get:{summary:"List published Source Files",responses:{200:{description:"Source Files index"}}}},"/api/storage/source-files/{workspaceId}":{get:{summary:"List published Source Files for a workspace",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped Source Files index"}}}},"/api/storage/source-files/{workspaceId}/llms.txt":{get:{summary:"Read the workspace-scoped Source Files LLM index",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped plain-text LLM index"}}}},"/api/storage/doc-default/{canonicalPath}":{get:{summary:"Read a default-workspace Source File markdown document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document from the default Editor Workspace"},404:{description:"Document not found"}}}},"/api/storage/doc/{workspaceId}/{canonicalPath}":{get:{summary:"Read a Source File markdown document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document"},404:{description:"Document not found"}}}},"/api/storage/blob/{workspaceId}/{canonicalPath}":{post:{summary:"Store a workspace binary artifact in R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],requestBody:{required:!0,content:{"application/octet-stream":{schema:{type:"string",format:"binary"}}}},responses:{200:{description:"R2 object coordinates and public storage route"},400:{description:"Invalid workspace, path, or declared payload size"}}},get:{summary:"Read a workspace binary artifact from R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Binary artifact body with stored HTTP metadata"},404:{description:"Object not found"}}},head:{summary:"Read workspace binary artifact metadata from R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Binary artifact metadata"},404:{description:"Object not found"}}}},[`${e}/doc-default/{canonicalPath}`]:{get:{summary:"Read a default-workspace shared document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/doc/{workspaceId}/{canonicalPath}`]:{get:{summary:"Read a shared document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/share/{shareToken}`]:{get:{summary:"Read a shared document through the canonical opaque share token route",parameters:[{name:"shareToken",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or published markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},...o}},"buildAgentReadyOpenApiPaths");var Ds=n((e,t)=>{let r=new URL(e.url);return r.pathname=`${t}/`,r.search="",r.hash="",new Request(r.toString(),e)},"buildKnowgrphAppShellAssetRequest"),fn=n(async(e,t)=>{let r=Ds(e.request,t);return typeof e.env?.ASSETS?.fetch=="function"?e.env.ASSETS.fetch(r):e.next(r)},"fetchKnowgrphAppShellAsset");var Hs="kgShare",ed=typeof TextEncoder<"u"?new TextEncoder:null,yn=typeof TextDecoder<"u"?new TextDecoder:null;var Ks=n(e=>{if(typeof Buffer<"u")return Uint8Array.from(Buffer.from(e,"base64"));let t=atob(e),r=new Uint8Array(t.length);for(let o=0;o<t.length;o+=1)r[o]=t.charCodeAt(o);return r},"fromBase64");var js=n(e=>{let t=String(e||"").replace(/-/g,"+").replace(/_/g,"/");if(!t)return"";let r=t.length%4;return r?`${t}${"=".repeat(4-r)}`:t},"fromBase64Url");var Bs=n(e=>{if(!yn)throw new Error("TextDecoder is required to decode published doc share tokens");return yn.decode(Ks(js(e)))},"decodeUtf8Base64Url"),_n=n(e=>String(e||"").trim()||null,"normalizeWorkspaceId"),xr=n(e=>String(e||"").trim(),"normalizeCanonicalPath"),Pr="/knowgrph",wn="/doc-default/",Sn="/doc/",bn="/share/",Fs="kgWorkspaceId",zs="kgCanonicalPath",Gs=n(e=>{let t=String(e||"").trim();return t?`/${t.replace(/^\/+|\/+$/g,"")}`:Pr},"normalizeAppBasePath"),kr=n(e=>{let t=xr(e?.canonicalPath);return t?{canonicalPath:t,workspaceId:_n(e?.workspaceId)}:null},"normalizePublishedDocIdentity"),An=n((e,t)=>{let r=Gs(t),o=String(e||"").replace(/\/+$/,"")||"/";if(!o.startsWith(r))return null;let a=o.slice(r.length)||"/";if(a.startsWith(bn)){let c=decodeURIComponent(a.slice(bn.length)).trim();return Rr(c)}if(a.startsWith(wn))return kr({canonicalPath:decodeURIComponent(a.slice(wn.length))});if(!a.startsWith(Sn))return null;let s=a.slice(Sn.length),i=s.indexOf("/");return i<1?null:kr({workspaceId:decodeURIComponent(s.slice(0,i)),canonicalPath:decodeURIComponent(s.slice(i+1))})},"parsePublishedDocPathname"),Ws=n(e=>{let t=Rr(e?.get(Hs));if(t)return t;let r=xr(decodeURIComponent(String(e?.get(zs)||"")));if(r)return kr({workspaceId:decodeURIComponent(String(e?.get(Fs)||"")),canonicalPath:r});let o=String(e?.get("kgPath")||"").trim();return o?An(`${Pr}${o}`,Pr):null},"parsePublishedDocSearchParams");var Rr=n(e=>{let t=String(e||"").trim();if(!t)return null;try{let r=JSON.parse(Bs(t)),o=xr(r?.canonicalPath);return o?{canonicalPath:o,workspaceId:_n(r?.workspaceId)}:null}catch{return null}},"decodePublishedDocShareToken"),It=n((e={})=>{let t=Rr(e.shareToken);if(t)return t;let r=String(e.shareUrl||"").trim();if(!r)return null;try{let o=String(e.baseUrl||"https://airvio.co").trim()||"https://airvio.co",a=new URL(r,o);return Ws(a.searchParams)||An(a.pathname,e.appBasePath)}catch{return null}},"resolvePublishedDocIdentity"),Pn=String.raw`(args = {}) => {
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
}`;var B="https://airvio.co",Nt="https://knowgrph-storage.huijoohwee.workers.dev",C="/knowgrph",x=`${B}${C}/`,Mt=`${B}/`,ut="kgws:canonical-docs",We="2026-06-05",ot=`${C}/health`,rt=`${B}${ot}`,kn="/.well-known/agent-card.json",Er=`${C}/.well-known/agent-card.json`,dt=`${B}${kn}`,Cr="/api/storage/source-files",qs=`${Cr}/`,xn="/api/storage/doc-default/",Rn="/api/storage/doc/",Ut=`${B}${Cr}`,Ys=`${B}${xn}{canonicalPath}`,Vs=`${B}${Rn}{workspaceId}/{canonicalPath}`,Js=`${B}/api/storage/blob/{workspaceId}/{canonicalPath}`,En="knowgrph-agent-ready-pages";var Cn=n((e,t)=>`${Rn}${encodeURIComponent(String(e||"").trim())}/${encodeURIComponent(String(t||"").trim())}`,"buildKnowgrphStorageDocPath"),Tn=n(e=>`${xn}${encodeURIComponent(String(e||"").trim())}`,"buildKnowgrphStorageDefaultDocPath"),vn=n(e=>{let t=String(e||"").trim();return t?`${qs}${encodeURIComponent(t)}`:Cr},"buildKnowgrphStorageSourceFilesIndexPath"),On=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${C}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${C}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${ot}>; rel="status"; type="application/health+json"`,`<${C}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${kn}>; rel="describedby"; type="application/json"`].join(", "),In=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${x}.

## Discovery

- Crawl policy: ${x}robots.txt
- Sitemap: ${x}sitemap.xml
- API catalog: ${x}.well-known/api-catalog
- Auth.md registration instructions: ${Mt}auth.md
- Health: ${rt}
- MCP server card: ${x}.well-known/mcp/server-card.json
- A2A Agent Card: ${dt}
- Agent skills: ${x}.well-known/agent-skills/index.json
- LLM reference: ${x}llms.txt
- Live Canvas Hero discovery markdown: ${Mt}knowgrph-live-canvas-hero.md

## APIs

- Agent-ready status: ${rt}
- HTTP MCP: ${x}mcp
- Storage API: ${B}/api/storage/
- Source Files index: ${Ut}
- Default Source File documents: ${Ys}
- Workspace Source File documents: ${Vs}
- Workspace binary artifacts: ${Js}

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
`,Mn=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),mt=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(r=>r.trim().startsWith("text/markdown")),"wantsMarkdown"),Nn=n((e,t)=>{let r=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&r.headers.set("x-knowgrph-route-owner",o),a&&r.headers.set("x-knowgrph-route-tag",a),r},"withAgentReadyRouteHeaders");var $t=wr({defaultWorkspaceId:ut}),jn=vo(),Bn=No(),Xs=`${B}/api/storage/llms.txt`,Qs=`${B}/api/storage/content-manifest.json`,Fn=n((e,t="")=>{let r=String(e||"").trim(),o=String(t||"").trim();return o?Cn(o,r):Tn(r)},"buildStorageDocPath"),ft=n(e=>String(e||"").trim(),"normalizeToolString");var Pe=n((e,t="application/json; charset=utf-8")=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"jsonResponse"),he=n((e,t)=>new Response(JSON.stringify(t,null,2),{status:e,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"jsonStatusResponse"),Un=n((e,t={})=>new Response(null,{status:e,headers:{"cache-control":"no-store","access-control-allow-origin":"*",...t}}),"emptyStatusResponse"),ht=n((e,t)=>new Response(e,{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"textResponse"),Zs=n(e=>ht(e,"text/html;profile=mcp-app; charset=utf-8"),"mcpAppsHtmlResponse"),ei=n(e=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":"application/health+json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"healthResponse"),ti=`${C}/api/workspace/github/write`,ri="/api/workspace/github/write",Ln=12,$n=9e5,oi=new Set(["css","html","js","json","md","mdx","mjs","svg","ts","tsx","txt","yaml","yml"]),Tr=n((e,t)=>String(e?.[t]||"").trim(),"readEnvString"),ni=n(e=>{let t=Tr(e,"KNOWGRPH_GITHUB_WRITE_REPOSITORY"),r=Tr(e,"KNOWGRPH_GITHUB_WRITE_TOKEN"),o=Tr(e,"KNOWGRPH_GITHUB_WRITE_BRANCH"),a=[];t||a.push("KNOWGRPH_GITHUB_WRITE_REPOSITORY"),r||a.push("KNOWGRPH_GITHUB_WRITE_TOKEN");let s=t.split("/").map(i=>i.trim()).filter(Boolean);return t&&s.length!==2&&a.push("KNOWGRPH_GITHUB_WRITE_REPOSITORY:owner/repo"),a.length>0?{ok:!1,missing:a}:{ok:!0,owner:s[0],repo:s[1],branch:o,token:r}},"readGitHubWriteConfig"),ai=n(e=>{let t=String(e||"").trim().replace(/^workspace:/i,"").replace(/\\/g,"/").replace(/^\/+/,"");if(!t)return{ok:!1,error:"missing_workspace_path"};if(/[\u0000-\u001f\u007f]/.test(t))return{ok:!1,error:"invalid_workspace_path"};let r=t.split("/").filter(Boolean);if(r.some(s=>s==="."||s===".."))return{ok:!1,error:"path_traversal_forbidden"};if(r[0]!=="chat-log")return{ok:!1,error:"unsupported_workspace_root"};if(r.length<3)return{ok:!1,error:"chat_log_session_file_required"};let o=r[r.length-1]||"",a=o.includes(".")?o.split(".").pop().toLowerCase():"";return!a||!oi.has(a)?{ok:!1,error:"unsupported_text_extension"}:{ok:!0,path:r.join("/")}},"normalizeGitHubWriteWorkspacePath"),si=n(e=>{let t=new TextEncoder().encode(String(e||"")),r=32768,o="";for(let a=0;a<t.length;a+=r)o+=String.fromCharCode(...t.slice(a,a+r));return btoa(o)},"encodeBase64Utf8"),nt=class extends Error{static{n(this,"GitHubWorkspaceWriteError")}constructor(t,r,o){super(t),this.name="GitHubWorkspaceWriteError",this.code=t,this.upstreamStatus=r,this.upstreamMessage=o}},zn=n(e=>String(e||"unknown").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim().slice(0,240),"sanitizeGitHubApiMessage"),Gn=n((e,t)=>{let r=String(t||"").split("/").map(a=>encodeURIComponent(a)).join("/"),o=new URL(`https://api.github.com/repos/${encodeURIComponent(e.owner)}/${encodeURIComponent(e.repo)}/contents/${r}`);return e.branch&&o.searchParams.set("ref",e.branch),o},"buildGitHubContentsApiUrl"),Wn=n(e=>({accept:"application/vnd.github+json",authorization:`Bearer ${e.token}`,"user-agent":"knowgrph-cloudflare-pages","x-github-api-version":"2022-11-28"}),"gitHubApiHeaders"),qn=n(e=>{let t=String(e||"").replace(/\/+$/,"")||"/";return t===ti||t===ri},"isGitHubWorkspaceWriteRoutePath"),ii=n(async(e,t)=>{let r=await fetch(Gn(e,t),{method:"GET",headers:Wn(e)});if(r.status===404)return null;let o=await r.json().catch(()=>null);if(!r.ok)throw new nt("github_read_failed",r.status,zn(o?.message||r.statusText));if(o?.type&&o.type!=="file")throw new nt("github_path_not_file",409,t);return String(o?.sha||"").trim()||null},"fetchGitHubExistingFileSha"),ci=n(async(e,t,r)=>{let o=await ii(e,t.repositoryPath),a={message:r,content:si(t.text),...e.branch?{branch:e.branch}:{},...o?{sha:o}:{}},s=await fetch(Gn(e,t.repositoryPath),{method:"PUT",headers:{...Wn(e),"content-type":"application/json; charset=utf-8"},body:JSON.stringify(a)}),i=await s.json().catch(()=>null);if(!s.ok)throw new nt("github_write_failed",s.status,zn(i?.message||s.statusText));return{workspacePath:t.workspacePath,repositoryPath:t.repositoryPath,action:o?"updated":"created",commitSha:String(i?.commit?.sha||""),contentSha:String(i?.content?.sha||""),htmlUrl:String(i?.content?.html_url||"")}},"putGitHubWorkspaceFile"),li=n(async(e,t)=>{let r=ni(t);if(!r.ok)return he(503,{ok:!1,status:"skipped",error:"github_write_not_configured",missing:r.missing});let o=await e.json().catch(()=>null),a=Array.isArray(o?.files)?o.files:[];if(a.length<1)return he(400,{ok:!1,status:"failed",error:"files_required"});if(a.length>Ln)return he(413,{ok:!1,status:"failed",error:"too_many_files",maxFiles:Ln});let s=[],i=new Set;for(let p of a){let m=ai(p?.workspacePath||p?.path);if(!m.ok)return he(400,{ok:!1,status:"failed",error:m.error,workspacePath:String(p?.workspacePath||p?.path||"")});if(i.has(m.path))continue;i.add(m.path);let f=String(p?.text??"");if(new TextEncoder().encode(f).length>$n)return he(413,{ok:!1,status:"failed",error:"file_too_large",workspacePath:`/${m.path}`,maxTextBytes:$n});s.push({workspacePath:`/${m.path}`,repositoryPath:m.path,text:f})}if(s.length<1)return he(400,{ok:!1,status:"failed",error:"files_required"});let c=String(o?.message||"").trim(),l=c&&c.length<=160?c:`Knowgrph chat artifact ${s[0].repositoryPath}`;if(o?.dryRun===!0)return he(200,{ok:!0,status:"dry_run",repository:`${r.owner}/${r.repo}`,branch:r.branch||null,files:s.map(p=>({workspacePath:p.workspacePath,repositoryPath:p.repositoryPath,textBytes:new TextEncoder().encode(p.text).length}))});try{let p=[];for(let m of s)p.push(await ci(r,m,l));return he(200,{ok:!0,status:"applied",repository:`${r.owner}/${r.repo}`,branch:r.branch||null,files:p})}catch(p){let m=p instanceof nt;return he(m?424:500,{ok:!1,status:"failed",error:m?p.code:p instanceof Error?p.message:String(p||"github_write_failed"),...m?{upstreamStatus:p.upstreamStatus,upstreamMessage:p.upstreamMessage}:{}})}},"handleGitHubWorkspaceWrite"),pi=n(e=>`User-agent: *
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
`,"buildRobotsTxt"),ui=pi(`${x}sitemap.xml`),Yn={appUrl:x,rootUrl:Mt,storageSourceFilesUrl:Ut,storageLlmsUrl:Xs,storageManifestUrl:Qs,agentCardUrl:dt,updatedAt:We},di=pn(Yn),Rd=un(Yn),Vn={linkset:[{anchor:x,"service-desc":[{href:`${x}.well-known/openapi.json`,type:"application/vnd.oai.openapi+json;version=3.1"}],"service-doc":[{href:`${x}llms.txt`,type:"text/plain"}],status:[{href:rt,type:"application/health+json"}],"service-meta":[{href:`${x}.well-known/mcp/server-card.json`,type:"application/json"},{href:dt,type:"application/json"}]}]},Jn={openapi:"3.1.0",info:{title:"Knowgrph API",version:"0.1.0",description:"Agent discovery surface for the Knowgrph Cloudflare deployment."},servers:[{url:B,description:"Knowgrph Cloudflare deployment"}],paths:gn({appBasePath:C,appA2aAgentCardPath:Er,healthPath:ot})},gt={resource:x,resource_name:"Knowgrph",authorization_servers:[B],scopes_supported:["knowgrph:read","knowgrph:source-files:read"],bearer_methods_supported:["header"],resource_documentation:`${x}llms.txt`},vr=`${B}/cdn-cgi/access`,Ne={skill:`${B}/auth.md`,register_uri:`${x}agent/auth`,claim_uri:`${x}agent/auth/claim`,revocation_uri:`${x}agent/auth/revoke`,identity_types_supported:["anonymous","identity_assertion"],anonymous:{credential_types_supported:["api_key"]},identity_assertion:{assertion_types_supported:["urn:ietf:params:oauth:token-type:id-jag","verified_email"],credential_types_supported:["access_token","api_key"]},events_supported:["https://schemas.workos.com/events/agent/auth/identity/assertion/revoked"],registration_status:"metadata_published_runtime_user_mediated"},Dn={issuer:B,resource:gt.resource,resource_name:gt.resource_name,authorization_servers:gt.authorization_servers,cloudflare_access_issuer:vr,authorization_endpoint:`${vr}/login`,token_endpoint:`${vr}/token`,jwks_uri:`${x}.well-known/http-message-signatures-directory`,response_types_supported:["code"],grant_types_supported:["authorization_code","client_credentials"],token_endpoint_auth_methods_supported:["client_secret_basic","private_key_jwt"],scopes_supported:gt.scopes_supported,agent_auth:Ne},mi=`# Knowgrph auth.md

Knowgrph publishes agent registration metadata for the read-only agent surface at ${x}. Agents should first fetch ${B}/.well-known/oauth-protected-resource, follow its authorization_servers entry to ${B}/.well-known/oauth-authorization-server, and read the agent_auth block.

## Registration

- Register: ${Ne.register_uri}
- Claim: ${Ne.claim_uri}
- Revoke: ${Ne.revocation_uri}
- Supported identity types: ${Ne.identity_types_supported.join(", ")}
- Anonymous credentials: ${Ne.anonymous.credential_types_supported.join(", ")}
- Identity assertion types: ${Ne.identity_assertion.assertion_types_supported.join(", ")}
- Identity assertion credentials: ${Ne.identity_assertion.credential_types_supported.join(", ")}
- Revocation events: ${Ne.events_supported.join(", ")}
- Current runtime policy: user-mediated access through the existing Cloudflare Access/OAuth boundary; no separate MCP-only auth stack.
- Pipeline rule: agents must not bypass MainPanel -> FloatingPanel Chat -> KGC -> Canvas for user-mediated graph work; published HTTP MCP tools remain read-only until mutation auth and conflict semantics are implemented.`,Xn={name:"Knowgrph Agent",description:"Agent-readable discovery, published-document retrieval, and WebMCP-ready metadata surface for Knowgrph.",version:"0.1.0",provider:{organization:"airvio / joohwee",url:x},url:`${x}mcp`,preferredTransport:"JSONRPC",supportedInterfaces:[{url:`${x}mcp`,protocolBinding:"JSONRPC",transportProtocol:"JSONRPC",description:"Primary machine interface for read-only discovery and source-file document access."},{url:Ut,protocolBinding:"HTTP+JSON/REST",transportProtocol:"HTTP+JSON/REST",description:"Published source-files index and storage-backed document read surface."}],capabilities:{streaming:!1,pushNotifications:!1,stateTransitionHistory:!1,extendedAgentCard:!1},defaultInputModes:["text/plain","text/markdown","application/json"],defaultOutputModes:["text/plain","text/markdown","application/json"],skills:mn($t)},Te={serverInfo:{name:"knowgrph",version:"0.1.0"},transport:{type:Ie,url:`${x}mcp`,stateless:!0},capabilities:{tools:$t.map(e=>({name:e.name,title:e.title,description:e.description,inputSchema:e.inputSchema,outputSchema:e.outputSchema,securitySchemes:e.securitySchemes,annotations:e.annotations,_meta:e._meta})),resources:{listChanged:!1},prompts:{listChanged:!1},...hr()},prompts:jn,resourceTemplates:Bn,clientSetups:fr({baseUrl:x,mcpUrl:`${x}mcp`,serverName:"knowgrph"}),surfaceRoles:{publicReadMcpUrl:`${x}mcp`,publicReadMcpScope:"Canonical public install and discovery endpoint for read-only retrieval, prompt discovery, resource discovery, and inspection.",controlPlaneMcpUrl:`${x}control-plane/mcp`,controlPlaneMcpScope:"Approval-gated orchestration endpoint for control-plane tools, remote Agentic Canvas OS docs invocation, and spend-bearing workflows where deployed.",hostedGrammarDefaultPath:"app-owned-forwarder",hostedGrammarDefaultScope:"Hosted app builders should keep /mcp for discovery and route live /, #, @ through an app-owned forwarder unless the host proves MCP session support.",remoteGrammarInvokePublic:!0,remoteGrammarInvokeToolName:"knowgrph.agentic_canvas_os.docs.invoke",remoteGrammarInvokeStatus:"live-control-plane"},links:{apiCatalog:`${x}.well-known/api-catalog`,skills:`${x}.well-known/agent-skills/index.json`,status:rt,agentCard:dt,controlPlaneMcp:`${x}control-plane/mcp`}},hi=Tt({appUrl:x,updatedAt:We}),Ir=$t.map(e=>({name:e.webName,title:e.title,description:e.description,inputSchema:e.inputSchema,outputSchema:e.outputSchema,securitySchemes:e.securitySchemes,annotations:e.annotations,_meta:e._meta})),qe=n(e=>ft($t.find(t=>t.name===e)?.webName),"findWebMcpToolName"),gi=qe(u.search),fi=qe(u.fetch),yi=qe(u.listSourceFiles),wi=qe(u.readSourceFile),Si=qe(u.readSharedDocument),bi=qe(u.inspectSharedDocumentStructure),_i=qe(u.inspectAgentSurface),Ai=`(() => {
  const root = globalThis;
  const siteOrigin = ${JSON.stringify(B)};
  const appBasePath = ${JSON.stringify(C)};
  const defaultWorkspaceId = ${JSON.stringify(ut)};
  const toolDefinitions = ${JSON.stringify(Ir)};
  const toolNames = ${JSON.stringify(Ir.map(e=>e.name))};
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
  const createPublishedDocIdentityResolver = ${Pn};
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
  const createPublishedAgentReadyToolExecutors = ${Xo};
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
      search: ${JSON.stringify(gi)},
      fetch: ${JSON.stringify(fi)},
      listSourceFiles: ${JSON.stringify(yi)},
      readSourceFile: ${JSON.stringify(wi)},
      readSharedDocument: ${JSON.stringify(Si)},
      inspectSharedDocumentStructure: ${JSON.stringify(bi)},
      inspectAgentSurface: ${JSON.stringify(_i)},
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
})();`,Pi=n(async e=>{if(!(e.headers.get("content-type")||"").toLowerCase().includes("text/html"))return e;let r=await e.text();if(Ir.every(i=>r.includes(i.name)))return new Response(r,e);let o=`<script>${Ai}<\/script>`,a=r.includes("</head>")?r.replace("</head>",`${o}</head>`):`${r}${o}`,s=new Response(a,e);return s.headers.delete("content-length"),s},"injectWebMcpScript"),ki={search:u.search,fetch:u.fetch,listSourceFiles:u.listSourceFiles,readSourceFile:u.readSourceFile,readSharedDocument:u.readSharedDocument,inspectSharedDocumentStructure:u.inspectSharedDocumentStructure,inspectAgentSurface:u.inspectAgentSurface},xi=n(async e=>{let t=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(r)].map(o=>o.toString(16).padStart(2,"0")).join("")},"sha256Hex"),Qn=ln(),Ri=Object.fromEntries(pt.map(e=>[e.name,xi(Qn[e.name]||"")])),Hn=new Map(pt.map(e=>[`${C}${e.path}`.replace(/\/+$/,""),Qn[e.name]||""]));var Zn=n(async()=>hn({appUrl:x,updatedAt:We,sha256ByName:Ri}),"agentSkillsIndex"),Ei={keys:[{kty:"OKP",crv:"Ed25519",kid:"knowgrph-agent-ready-2026-05-21",use:"sig",alg:"EdDSA",x:"11qYAYdkVKxA4G0wV47IxPtYfFVH_H7zmC2Di2PcvLU"}]},Ci={protocolVersion:"2025-06-18",capabilities:{tools:{},resources:{},prompts:{listChanged:!1},...hr()},serverInfo:Te.serverInfo},Mr=Te.capabilities.tools,Ti=[hi],vi=jn,Oi=Bn,ea=n(()=>({status:"pass",service:"knowgrph-agent-ready-pages",homepage:x,health:rt,updatedAt:We,checks:{linkHeaders:!0,markdownNegotiation:!0,httpMcp:!0,webMcp:!0,mcpApps:!0,commerce:{acp:!0,ucp:!0,mpp:!0,x402:!0},defaultWorkspaceId:ut}}),"buildHealthStatusBody"),Ii=n(async()=>Jo({baseUrl:x,health:ea(),apiCatalog:Vn,openApi:Jn,mcpServerCard:Te,agentCard:Xn,agentSkills:await Zn(),commerce:or({origin:B})}),"buildAgentSurfaceInspection"),Mi=Sr({toolNames:ki,defaultWorkspaceId:ut,publicBaseUrl:B,buildStorageDocPath:Fn,fetchSourceFilesIndexResponse:n(()=>fetch(`${Nt}${vn()}`,{headers:{accept:"text/markdown"}}),"fetchSourceFilesIndexResponse"),fetchStorageMarkdownResponse:n(e=>fetch(`${Nt}${e}`,{headers:{accept:"text/markdown"}}),"fetchStorageMarkdownResponse"),resolveSharedDocumentInput:n((e={})=>It({shareToken:e?.shareToken,shareUrl:e?.shareUrl,appBasePath:C,baseUrl:B}),"resolveSharedDocumentInput"),inspectSharedDocumentStructure:Qo,buildAgentSurfaceInspection:Ii}),Nr=n(e=>{try{let t=new URL(e,B);return It({shareUrl:`${t.pathname}${t.search}`,baseUrl:B,appBasePath:C})}catch{return null}},"resolvePublishedDocRequestIdentity"),Ni=n(e=>It({shareUrl:String(e||""),baseUrl:B,appBasePath:C}),"resolvePublishedDocPathIdentity"),Ui=n(async(e,t)=>{let r=new URL(Fn(t.canonicalPath,t.workspaceId),Nt),o=await fetch(r,{method:"GET",headers:{accept:"text/markdown, text/plain;q=0.9, */*;q=0.1"}}),a=new Headers(o.headers),s=String(a.get("vary")||"");return a.set("vary",s?`${s}, Accept`:"Accept"),new Response(String(e.method||"").toUpperCase()==="HEAD"?null:o.body,{status:o.status,statusText:o.statusText,headers:a})},"proxyPublishedDocMarkdownResponse"),Li=n(async e=>{try{let t=await e.json();return t&&typeof t=="object"?t:null}catch{return null}},"readJsonRpcRequest"),Me=n((e,t)=>he(200,{jsonrpc:"2.0",id:e??null,result:t}),"jsonRpcResult"),He=n((e,t,r)=>he(200,{jsonrpc:"2.0",id:e??null,error:{code:t,message:r}}),"jsonRpcError"),$i=n(e=>String(e.headers.get("accept")||"").toLowerCase().split(",").some(t=>t.trim().startsWith("text/event-stream")),"requestAcceptsEventStream"),Or=n((e,t)=>Object.prototype.hasOwnProperty.call(e,t),"hasOwnProperty"),ta=n(e=>{if(Array.isArray(e))return e.length>0&&e.every(ta);if(!e||typeof e!="object"||String(e.jsonrpc||"")!=="2.0")return!1;let t=typeof e.method=="string"&&e.method.length>0,r=Or(e,"id"),o=Or(e,"result")||Or(e,"error");return t&&!r||!t&&o},"isJsonRpcNotificationOrResponse"),ra=n(async(e,t)=>{let r=Mi[e];if(typeof r!="function")throw new Error(`unknown tool: ${e}`);return r(t)},"executeMcpTool"),Di=n(async e=>{let t=ft(e);if(t===me)return yr({appUrl:x,updatedAt:We,toolNames:Mr.map(o=>o.name)});let r=Uo(t);if(r){let o=await ra(u.fetch,{id:r});return Lo({uri:t,sourceFile:o})}throw new Error(`unknown resource: ${e}`)},"readMcpResource"),Hi=n(async e=>{let t=String(e.method||"GET").toUpperCase();if(t==="GET"||t==="HEAD")return $i(e)?Un(405,{allow:"POST"}):Pe({ok:!0,transport:Te.transport,serverInfo:Te.serverInfo,capabilities:Te.capabilities,links:Te.links,surfaceRoles:Te.surfaceRoles});if(t!=="POST")return he(405,{ok:!1,error:"unsupported_method"});let r=await Li(e);if(!r)return He(null,-32700,"Parse error");if(ta(r))return Un(202);if(Array.isArray(r))return He(null,-32600,"Batch JSON-RPC requests are not supported");switch(r.method){case"initialize":return Me(r.id,Ci);case"tools/list":return Me(r.id,{tools:Mr});case"prompts/list":return Me(r.id,{prompts:vi});case"resources/templates/list":return Me(r.id,{resourceTemplates:Oi});case"prompts/get":{let o=ft(r.params?.name),a=r.params?.arguments&&typeof r.params.arguments=="object"?r.params.arguments:{};if(!o)return He(r.id,-32602,"Prompt name is required");try{return Me(r.id,Oo(o,a))}catch(s){return He(r.id,-32602,s instanceof Error?s.message:String(s))}}case"resources/list":return Me(r.id,{resources:Ti});case"resources/read":{let o=ft(r.params?.uri);if(!o)return He(r.id,-32602,"Resource URI is required");try{return Me(r.id,await Di(o))}catch(a){return He(r.id,-32602,a instanceof Error?a.message:String(a))}}case"tools/call":{let o=ft(r.params?.name),a=r.params?.arguments&&typeof r.params.arguments=="object"?r.params.arguments:{};if(!o)return He(r.id,-32602,"Tool name is required");try{let s=await ra(o,a);return Me(r.id,{content:[{type:"text",text:typeof s?.markdown=="string"?s.markdown:JSON.stringify(s,null,2)}],structuredContent:s,isError:!1})}catch(s){return Me(r.id,{content:[{type:"text",text:s instanceof Error?s.message:String(s)}],isError:!0})}}default:return He(r.id,-32601,"Method not found")}},"handleMcpTransport"),Ki=n(()=>yr({appUrl:x,updatedAt:We,toolNames:Mr.map(e=>e.name)}).contents[0].text,"buildKnowgrphMcpAppHtmlBody");var Dt=n(e=>e===C||e===`${C}/`,"handlesKnowgrphRoot"),ji=n(e=>Dt(e)||!!Ni(e),"handlesKnowgrphHtmlSurface"),Bi=n(e=>e.startsWith(`${C}/assets/`),"handlesKnowgrphStaticAsset"),Fi=n(async e=>{let t=new Headers(e.request.headers);t.delete("origin");let r=new Request(e.request.url,{method:e.request.method,headers:t});return typeof e.env?.ASSETS?.fetch=="function"?e.env.ASSETS.fetch(r):e.next(r)},"fetchKnowgrphStaticAsset"),zi=n(e=>{let t=new URL(e.url),r=t.pathname.replace(/\/+$/,"")||"/",o=Nr(e.url);return r===ot?"health":r===`${C}/mcp`?"mcp":qn(r)?"github-workspace-write":r===`${C}/robots.txt`?"robots":r===`${C}/sitemap.xml`?"sitemap":r===`${C}/auth.md`||r==="/auth.md"?"auth-md":r.startsWith(`${C}/.well-known/`)?"well-known":o?mt(e)?"shared-doc-markdown":"shared-doc-html":Dt(t.pathname)?mt(e)?"homepage-markdown":"homepage-html":"app-surface"},"resolveAgentReadyRouteTag"),Lt=n((e,t)=>Nn(t,{owner:En,tag:zi(e)}),"withKnowgrphRouteHeaders"),Kn=n(async e=>{let t=new URL(e.url),r=t.pathname.replace(/\/+$/,"")||"/",o=Nr(e.url),a=dn(r);if(a)return Response.redirect(new URL(a,e.url),308);if(o&&mt(e))return Ui(e,o);if(Dt(t.pathname)&&mt(e))return Mn(In);switch(r){case ot:return ei(ea());case`${C}/mcp`:return Hi(e);case`${C}/robots.txt`:return ht(ui,"text/plain; charset=utf-8");case`${C}/sitemap.xml`:return ht(di,"application/xml; charset=utf-8");case`${C}/auth.md`:case"/auth.md":return ht(mi,"text/markdown; charset=utf-8");case`${C}/.well-known/api-catalog`:return Pe(Vn,"application/linkset+json; charset=utf-8");case`${C}/.well-known/openapi.json`:return Pe(Jn,"application/vnd.oai.openapi+json; charset=utf-8");case Er:return Pe(Xn);case`${C}/.well-known/oauth-protected-resource`:return Pe(gt);case`${C}/.well-known/oauth-authorization-server`:return Pe(Dn);case`${C}/.well-known/openid-configuration`:return Pe(Dn);case`${C}/.well-known/mcp/server-card.json`:return Pe(Te);case`${C}/.well-known/mcp/apps/knowgrph-agent-ready.html`:return Zs(Ki());case`${C}/.well-known/mcp.json`:return Pe(Te);case`${C}/.well-known/agent-skills/index.json`:return Pe(await Zn());case`${C}/.well-known/http-message-signatures-directory`:return Pe(Ei);default:return Hn.has(r)?ht(Hn.get(r),"text/markdown; charset=utf-8"):null}},"routeResponse");async function Ke(e){let{env:t,request:r}=e,o=String(r.method||"GET").toUpperCase(),a=new URL(r.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(o==="POST"&&a.pathname.replace(/\/+$/,"")===`${C}/mcp`)return Lt(r,await Kn(r));if(o==="POST"&&qn(a.pathname))return Lt(r,await li(r,t));if(o!=="GET"&&o!=="HEAD")return he(405,{ok:!1,error:"unsupported_method"});if(Bi(a.pathname))return Fi(e);let s=await Kn(r);if(s){let m=Lt(r,s);return o==="HEAD"?new Response(null,m):m}let i=Nr(r.url),c=i?await fn(e,C):await e.next();if(!ji(a.pathname))return c;let l=o==="HEAD"?c:await Pi(c),p=new Response(o==="HEAD"?null:l.body,l);return p.headers.set("link",On),(Dt(a.pathname)||i)&&(p.headers.delete("x-frame-options"),p.headers.delete("content-security-policy-report-only"),p.headers.set("content-security-policy","frame-ancestors *")),Lt(r,p)}n(Ke,"onRequest");async function oa(e){return Ke(e)}n(oa,"onRequest");async function na(e){return Ke(e)}n(na,"onRequest");async function aa(e){return Ke(e)}n(aa,"onRequest");var Gi=Object.freeze(new Set(["","80","443"])),Wi=Object.freeze([".local",".localhost",".internal"]),qi=Object.freeze(new Set(["localhost"]));function Ye(e){return String(e||"").trim().toLowerCase()}n(Ye,"normalizeHostname");function Yi(e){let t=Ye(e);if(!/^\d{1,3}(\.\d{1,3}){3}$/.test(t))return!1;let r=t.split(".").map(o=>Number(o));return r.length!==4?!1:r.every(o=>Number.isInteger(o)&&o>=0&&o<=255)}n(Yi,"isIpv4Literal");function sa(e){let[t,r,o,a]=e.split(".").map(s=>Number(s));return(t<<24|r<<16|o<<8|a)>>>0}n(sa,"ipv4ToInt");function Vi(e,t,r){if(!Number.isInteger(r)||r<0||r>32)return!1;if(r===0)return!0;let o=4294967295<<32-r>>>0;return(e&o)===(t&o)}n(Vi,"inIpv4Cidr");function Ji(e){let t=Ye(e);return!t||!t.includes(":")?!1:/^[0-9a-f:]+$/i.test(t)}n(Ji,"isIpv6Literal");function Xi(e){let t=Ye(e);return!!(!t||t==="::1"||t==="0:0:0:0:0:0:0:1"||t.startsWith("fc")||t.startsWith("fd")||/^fe[89ab]/i.test(t))}n(Xi,"isBlockedIpv6");function Qi(e,{blockedExact:t,blockedSuffixes:r}={}){let o=Ye(e);if(!o)return!0;let a=t||qi;if(a instanceof Set&&a.has(o))return!0;let s=r||Wi;if(Array.isArray(s))for(let i of s){let c=Ye(i);if(c&&(o===c||o.endsWith(c)))return!0}return!1}n(Qi,"isBlockedHostname");function Zi(e){let t=Ye(e);if(!t)return!0;if(Yi(t)){let r=sa(t),o=[{base:"0.0.0.0",bits:8},{base:"10.0.0.0",bits:8},{base:"127.0.0.0",bits:8},{base:"169.254.0.0",bits:16},{base:"172.16.0.0",bits:12},{base:"192.168.0.0",bits:16},{base:"100.64.0.0",bits:10}];for(let a of o){let s=sa(a.base);if(Vi(r,s,a.bits))return!0}return!1}return Ji(t)?Xi(t):!1}n(Zi,"isBlockedIpLiteral");function Ht(e,{allowedPorts:t}={}){let r=String(e||"").trim();if(!r)throw new Error("invalid_url");let o;try{o=new URL(r)}catch{throw new Error("invalid_url")}if(o.protocol!=="http:"&&o.protocol!=="https:")throw new Error("invalid_url");if(o.username||o.password)throw new Error("invalid_url");let a=t||Gi,s=String(o.port||"");if(a instanceof Set&&!a.has(s))throw new Error("port_not_allowed");let i=Ye(o.hostname);if(!i)throw new Error("invalid_url");if(Qi(i))throw new Error("blocked_host");if(Zi(i))throw new Error("blocked_host");return o}n(Ht,"parseAndValidateExternalUrl");function Kt(e){return String(e.headers.get("sec-fetch-site")||"").trim().toLowerCase()==="cross-site"}n(Kt,"shouldRejectCrossSiteFetch");var ec={"content-type":"application/json; charset=utf-8","cache-control":"public, max-age=600"};function Ve(e,t={}){return new Response(JSON.stringify(e),{...t,headers:{...ec,...t.headers||{}}})}n(Ve,"json");function jt(...e){for(let t of e){if(!t)continue;let r=String(t).trim();if(r)return r}return null}n(jt,"pickFirst");function tc(e){let t=e.slice(0,8e4),r=t.match(/<title[^>]*>([^<]*)<\/title>/i),o=t.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i),a=t.match(/<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i),s=t.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i),i=t.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i),c=t.match(/<meta[^>]+property=["']og:site_name["'][^>]*content=["']([^"']+)["'][^>]*>/i);return{title:jt(o?.[1],r?.[1]),description:jt(a?.[1],s?.[1]),image:jt(i?.[1]),siteName:jt(c?.[1])}}n(tc,"extractMeta");async function ia(e){let t=e.request.url,r=new URL(t);if(r.searchParams.get("ping")==="1")return Ve({ok:!0,ping:!0});let o=r.searchParams.get("url")||"";if(Kt(e.request))return Ve({ok:!1,error:"forbidden"},{status:403,headers:{"cache-control":"no-store"}});let a;try{a=Ht(o)}catch{return Ve({ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}try{let s=await fetch(a.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkPreview/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),i=s.headers.get("content-type")||"";if(!s.ok)return Ve({ok:!1,error:"fetch_failed",status:s.status,url:a.toString()},{status:200,headers:{"cache-control":"no-store"}});if(!i.includes("text/html"))return Ve({ok:!0,url:a.toString(),domain:a.host,contentType:i,title:null,description:null,image:null,siteName:null});let c=await s.text(),l=tc(c);return Ve({ok:!0,url:a.toString(),domain:a.host,contentType:i,...l})}catch(s){return Ve({ok:!1,error:"exception",message:s?.message||String(s),url:a.toString()},{status:200,headers:{"cache-control":"no-store"}})}}n(ia,"onRequestGet");var ca=35e4;function rc(e){let t=e;return t=t.replace(/<script\b[\s\S]*?<\/script>/gi,""),t=t.replace(/<iframe\b[\s\S]*?<\/iframe>/gi,""),t=t.replace(/<object\b[\s\S]*?<\/object>/gi,""),t=t.replace(/<embed\b[\s\S]*?>/gi,""),t=t.replace(/<noscript\b[\s\S]*?<\/noscript>/gi,""),t=t.replace(/\son[a-z]+\s*=\s*"[^"]*"/gi,""),t=t.replace(/\son[a-z]+\s*=\s*'[^']*'/gi,""),t}n(rc,"stripActiveContent");function oc({url:e,title:t,innerHtml:r}){let o=t?String(t).slice(0,140):"Preview",a=String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");return`<!doctype html>
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
</html>`}n(oc,"buildWrapper");async function la(e){let r=new URL(e.request.url).searchParams.get("url")||"";if(Kt(e.request))return new Response("Forbidden",{status:403,headers:{"cache-control":"no-store"}});let o;try{o=Ht(r)}catch(a){let s=a instanceof Error?a.message:"invalid_url";return new Response(s,{status:400,headers:{"cache-control":"no-store"}})}try{let a=await fetch(o.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkProxy/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),s=a.headers.get("content-type")||"";if(!a.ok)return new Response(`Fetch failed (${a.status})`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});if(!s.includes("text/html"))return new Response(`Unsupported content-type: ${s}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public, max-age=600"}});let i=await a.text();i.length>ca&&(i=i.slice(0,ca));let l=i.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()||o.host;i=rc(i),/<base\s/i.test(i)||(i=i.replace(/<head([^>]*)>/i,`<head$1><base href="${o.origin}/">`));let m=oc({url:o.toString(),title:l,innerHtml:i});return new Response(m,{status:200,headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600","content-security-policy":"default-src 'none'; img-src https: data:; style-src 'unsafe-inline' https:; font-src https: data:; frame-ancestors 'self';"}})}catch(a){return new Response(`Exception: ${a?.message||String(a)}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}})}}n(la,"onRequestGet");var Ur="api.openai.com",Lr="gateway.ai.cloudflare.com",$r="api.cloudflare.com",Bt="api.miromind.ai",Ft="apihub.agnes-ai.com",zt="ark.ap-southeast.bytepluses.com",Dr="ark.eu-west.bytepluses.com",ua=new Set(["localhost","127.0.0.1","0.0.0.0"]),ke=n(e=>String(e||"").trim().toLowerCase(),"normalizeHost"),pe=n((e,t)=>String(e.get(t)||"").trim(),"readHeader"),da=n(e=>ua.has(ke(e)),"isLocalHost"),pa=n(e=>{let t=String(e||"").trim();if(!t)return new Set;let r=new Set;return t.split(",").map(o=>ke(o)).filter(Boolean).forEach(o=>r.add(o)),r},"parseCsvSet"),ma=n((e,{includeOpenAi:t=!1,includeAiGateway:r=!1,includeMiroMind:o=!1,includeAgnes:a=!1,includeBytePlus:s=!1}={})=>{let i=pa(e.KNOWGRPH_INTEGRATION_ALLOWED_HOSTS),c=pa(e.KNOWGRPH_CHAT_PROXY_ALLOWED_HOSTS),l=i.size?i:c,p=l.size?l:new Set([...ua]);return t&&p.add(Ur),r&&(p.add(Lr),p.add($r)),o&&p.add(Bt),a&&p.add(Ft),s&&(p.add(zt),p.add(Dr)),p},"parseAllowedHosts"),ce=n(e=>{let t=pe(e.headers,"origin");if(!t)return{};let r="";try{r=ke(new URL(t).host)}catch{return{}}let o=ke(new URL(e.url).host);return r===o||r.startsWith("localhost:")||r.startsWith("127.0.0.1:")?{"access-control-allow-origin":t,vary:"Origin"}:{}},"corsHeaders"),ge=n((e,t,r)=>new Response(JSON.stringify(t),{status:r,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...ce(e)}}),"jsonResponse");var Gt={"content-type":"application/json; charset=utf-8","cache-control":"no-store"};function yt(e,t,r=200){return new Response(JSON.stringify(t),{status:r,headers:{...Gt,...ce(e)}})}n(yt,"jsonResponse");async function nc(e){let t=new URL("/knowgrph/imports/hackamap/hackamap-graph.json",e.url),r=await fetch(t.toString(),{redirect:"follow"});return r.ok?await r.json():null}n(nc,"fetchHackamapGraphJson");async function Je(e,t){let r=new URL(t,e.url),o=await fetch(r.toString(),{redirect:"follow"});return o.ok?await o.json():null}n(Je,"fetchHackamapJson");async function ac(e){let t=await Je(e,"/knowgrph/imports/hackamap/hackamap_api_graph.json");return ya(t)?t:null}n(ac,"fetchHackamapApiGraphJson");async function sc(e){let t=await Je(e,"/knowgrph/imports/hackamap/hackamap_pipeline.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n(sc,"fetchHackamapPipelineJson");async function ga(e){let t=await Je(e,"/knowgrph/imports/hackamap/hackamap_query_presets.json");return Array.isArray(t)?t.filter(Boolean):[]}n(ga,"fetchHackamapQueryPresetsJson");async function fa(e){let t=await Je(e,"/knowgrph/imports/hackamap/query-outputs/query-runs.manifest.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n(fa,"fetchHackamapQueryRunsManifestJson");function ya(e){return!e||typeof e!="object"||Array.isArray(e)?!1:Array.isArray(e.nodes)&&Array.isArray(e.edges)}n(ya,"isApiGraphPayload");function wa(e,t){let r=String(e&&e.output&&e.output.per_table_prefix||e?.id||t?.preset||"").trim(),o=String(t?.output_suffix||"").trim();return o?`${r}-${o}`:r}n(wa,"buildHackamapTablePrefix");function Hr(e,t){if(!Array.isArray(e))return[];let r=[];for(let o of e){if(!o||typeof o!="object"||Array.isArray(o))continue;let a=String(o[t]||"").trim();a&&r.push(a)}return r}n(Hr,"collectRowIds");async function ic(e,t){let r=await Je(e,t);return Array.isArray(r)?r.length:0}n(ic,"countHackamapQueryRows");async function cc(e,t,r){let o=wa(t,r);if(!o)return{};let a=["events","demos","sources","organizer","team","techstack"],s=await Promise.all(a.map(async i=>[i,await ic(e,`/knowgrph/imports/hackamap/query-outputs/${i}.${o}.query.json`)]));return Object.fromEntries(s.filter(([,i])=>i>0))}n(cc,"readHackamapRunTableCounts");function Kr(e){return Array.isArray(e)?e.map(Kr):!e||typeof e!="object"?e:Object.fromEntries(Object.entries(e).sort(([t],[r])=>String(t).localeCompare(String(r))).map(([t,r])=>[t,Kr(r)]))}n(Kr,"sortObjectKeys");function lc(e){try{return JSON.stringify(Kr(e))}catch{return""}}n(lc,"stableParamSignature");function pc(e){return typeof e=="string"?{value:e,label:e}:{value:e,label:JSON.stringify(e)}}n(pc,"toBuilderOption");function uc(e,t){return e.map(r=>{let o=String(r?.id||"").trim();if(!o)return null;let a=r?.params&&typeof r.params=="object"&&!Array.isArray(r.params)?r.params:{},s=t.filter(l=>String(l?.preset||"").trim()===o),i=Array.from(new Set([...Object.keys(a),...s.flatMap(l=>l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?Object.keys(l.params):[])])).sort((l,p)=>String(l).localeCompare(String(p))),c=Object.fromEntries(i.map(l=>{let p=new Set,m=[],f=[a[l],...s.map(P=>P?.params&&typeof P.params=="object"&&!Array.isArray(P.params)?P.params[l]:void 0)];for(let P of f){if(typeof P>"u")continue;let S=lc(P);!S||p.has(S)||(p.add(S),m.push(pc(P)))}return[l,m]}));return{id:o,title:String(r?.title||o).trim(),params:a,param_keys:i,published_param_options:c}}).filter(Boolean)}n(uc,"buildHackamapPresetRuntimeEntries");async function dc(e){let[t,r,o]=await Promise.all([sc(e),ga(e),fa(e)]),a=t&&typeof t=="object"?t.runtime||{}:{},s=String(a?.query_selection?.default_run_id||"").trim()||"enhanced",i=Array.isArray(o?.runs)?o.runs:[],c=(await Promise.all(i.map(async l=>{let p=String(l?.id||"").trim(),m=String(l?.preset||"").trim();if(!p)return null;let f=r.find(S=>String(S?.id||"").trim()===m),P=await cc(e,f,l);return{id:p,preset:m,title:String(l?.title||l?.id||"").trim(),params:l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?l.params:{},output_suffix:String(l?.output_suffix||"").trim(),is_default:p===s,table_counts:P}}))).filter(l=>l?.id);return{ok:!0,runtime:{...a&&typeof a=="object"?a:{},presets:uc(r,c),runs:c}}}n(dc,"buildHackamapRuntimeMeta");async function mc(e,t){let r=String(t||"").trim();if(!r)return null;let[o,a]=await Promise.all([ga(e),fa(e)]),i=(Array.isArray(a?.runs)?a.runs:[]).find(O=>String(O?.id||"").trim()===r);if(!i)return null;let c=o.find(O=>String(O?.id||"").trim()===String(i?.preset||"").trim()),l=wa(c,i);if(!l)return null;let[p,m]=await Promise.all([Je(e,`/knowgrph/imports/hackamap/query-outputs/events.${l}.query.json`),Je(e,`/knowgrph/imports/hackamap/query-outputs/demos.${l}.query.json`)]),f=new Set(Hr(p,"id")),P=new Set(Hr(m,"id")),S=Hr(m,"event_id");for(let O of S)f.add(O);return{eventIds:f,demoIds:P}}n(mc,"readHackamapQueryRunSelection");function ha(e,t,r){if(!r||!ya(e))return e;if(r.eventIds.size===0&&r.demoIds.size===0)return{...e,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_run_filter_skipped:"no-event-demo-rows"}};let o=new Set;r.eventIds.forEach(c=>o.add(`Event:${c}`)),r.demoIds.forEach(c=>o.add(`Demo:${c}`));let a=Array.isArray(e.nodes)?e.nodes.filter(c=>o.has(String(c?.id||"").trim())):[],s=new Set(a.map(c=>String(c?.id||"").trim()).filter(Boolean)),i=Array.isArray(e.edges)?e.edges.filter(c=>s.has(String(c?.source||"").trim())&&s.has(String(c?.target||"").trim())):[];return{...e,nodes:a,edges:i,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_event_count:r.eventIds.size,selected_demo_count:r.demoIds.size,total_problems:a.filter(c=>String(c?.type||"").trim()==="problem").length,total_solutions:a.filter(c=>String(c?.type||"").trim()==="solution").length}}}n(ha,"filterHackamapApiGraphPayloadByRun");function hc(e){let t=Array.isArray(e?.nodes)?e.nodes:[],r=Array.isArray(e?.links)?e.links:[],o=[],a=new Set;for(let i of t){let c=String(i?.id||"").trim(),l=String(i?.type||"").trim(),p=String(i?.label||"").trim();if(!(!c||!l||!p)){if(l==="Event"){o.push({id:c,type:"problem",label:p,cluster:"Event"}),a.add(c);continue}l==="Demo"&&(o.push({id:c,type:"solution",label:p,cluster:"Demo"}),a.add(c))}}let s=[];for(let i of r){let c=String(i?.source||"").trim(),l=String(i?.target||"").trim(),p=String(i?.type||"").trim();!c||!l||p==="has_demo"&&(!a.has(c)||!a.has(l)||s.push({source:c,target:l,type:"has_demo",strength:.35}))}return{nodes:o,edges:s,meta:{source:"hackamap-graph.json:fallback",total_problems:o.filter(i=>i.type==="problem").length,total_solutions:o.filter(i=>i.type==="solution").length,...e?.content_signature?{content_signature:String(e.content_signature)}:{}}}}n(hc,"toBipartiteApiPayload");async function Sa(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{...ce(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(r!=="GET"&&r!=="HEAD")return yt(t,{ok:!1,error:"unsupported_method"},405);if(String(o.searchParams.get("view")||"").trim().toLowerCase()==="meta"){let m=await dc(t);return r==="HEAD"?new Response(null,{status:200,headers:{...Gt,...ce(t)}}):yt(t,m,200)}let a=String(o.searchParams.get("run")||"").trim(),s=await mc(t,a),i=await ac(t);if(i){let m=ha(i,a,s);return r==="HEAD"?new Response(null,{status:200,headers:{...Gt,...ce(t)}}):yt(t,m,200)}let c=await nc(t);if(!c)return yt(t,{ok:!1,error:"missing_hackamap_graph",hint:"/knowgrph/imports/hackamap/{hackamap_api_graph.json,hackamap-graph.json} not found"},404);let l=hc(c),p=ha(l,a,s);return r==="HEAD"?new Response(null,{status:200,headers:{...Gt,...ce(t)}}):yt(t,p,200)}n(Sa,"onRequest");var gc=!0,ba=600,_a={"content-type":"application/json; charset=utf-8","cache-control":`public, max-age=${ba}`};function Xe(e,t,r={}){return new Response(JSON.stringify(t),{...r,headers:{..._a,...r.headers||{},...ce(e)}})}n(Xe,"jsonResponse");function fc(e){try{let t=new URL(String(e));return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}n(fc,"isHttpUrl");function wt(e){return String(e||"").trim().toLowerCase()}n(wt,"normalizeHost");function jr(e,{exact:t,suffixes:r}){let o=wt(e);return o?!!(Array.isArray(t)&&t.some(a=>o===wt(a))||Array.isArray(r)&&r.some(a=>o===wt(a)||o.endsWith(`.${wt(a)}`))):!1}n(jr,"isHostMatch");function yc(e){let t=wt(e.hostname),r=e.toString();return jr(t,{suffixes:["linkedin.com"]})?new URL(`https://www.linkedin.com/embeds/oembed.json?url=${encodeURIComponent(r)}`):jr(t,{exact:["twitter.com","x.com"],suffixes:["twitter.com","x.com"]})?new URL(`https://publish.twitter.com/oembed?omit_script=1&url=${encodeURIComponent(r)}`):jr(t,{exact:["reddit.com"],suffixes:["reddit.com"]})?new URL(`https://www.reddit.com/oembed?url=${encodeURIComponent(r)}`):null}n(yc,"buildOembedUpstreamUrl");async function wc({upstreamUrl:e}){return await fetch(e.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; OEmbedProxy/1.0)",accept:"application/json,text/json;q=0.9,*/*;q=0.1"},redirect:"follow",cf:{cacheTtl:ba,cacheEverything:!0}})}n(wc,"fetchJsonUpstream");async function Aa(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{...ce(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD"].includes(r))return Xe(t,{ok:!1,error:"unsupported_method"},{status:405});if(o.searchParams.get("ping")==="1")return Xe(t,{ok:!0,ping:!0});if(gc)return Xe(t,{ok:!1,error:"disabled_by_policy"},{status:200,headers:{"cache-control":"no-store"}});let a=o.searchParams.get("url")||"";if(!fc(a))return Xe(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}});let s;try{s=new URL(a)}catch{return Xe(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}let i=yc(s);if(!i)return Xe(t,{ok:!1,error:"unsupported_provider"},{status:400,headers:{"cache-control":"no-store"}});let c=await wc({upstreamUrl:i}),l=new Headers(c.headers);l.delete("content-length"),l.set("cache-control",c.ok?_a["cache-control"]:"no-store");for(let[m,f]of Object.entries(ce(t)))l.set(m,f);if(r==="HEAD")return new Response(null,{status:c.status,headers:l});let p=await c.text();try{JSON.parse(p)}catch{return Xe(t,{ok:!1,error:"invalid_upstream_json",status:c.status},{status:502,headers:{"cache-control":"no-store"}})}return l.set("content-type","application/json; charset=utf-8"),new Response(p,{status:c.status,headers:l})}n(Aa,"onRequest");var Pa="/__chat_proxy",Wt="agnes-ai",qt="byteplus-modelark",Yt="miromind",Sc="x-kg-ai-gateway-route",bc="x-kg-ai-gateway-metadata",_c="x-kg-ai-gateway-cache-ttl",Ac=n(e=>{let t=ke(e);return t==="openai"?"openai":t===qt||t==="byteplus"?qt:t===Yt||t==="miromind-api"?Yt:t===Wt||t==="agnes"||t==="agnes-ai-api"?Wt:t},"normalizeProviderId"),Pc=n(e=>ke(e)===Ft,"isAgnesHost"),kc=n(e=>{let t=ke(e);return t===zt||t===Dr},"isBytePlusHost"),xc=n(e=>ke(e)===Bt,"isMiroMindHost"),Rc=n(e=>{let t=ke(e);return t===Lr||t===$r},"isAiGatewayHost"),Ec=n(e=>{let t=String(e||"").trim();return/^dynamic\/[a-z0-9._/-]+$/i.test(t)?t.slice(0,128):""},"sanitizeAiGatewayRoute"),Cc=n(e=>{let t=String(e||"").trim();if(!t)return"";try{let r=JSON.parse(t),o=Object.entries(r||{}).filter(([,a])=>typeof a=="string"||typeof a=="number"||typeof a=="boolean").slice(0,5).map(([a,s])=>[String(a||"").trim().slice(0,64),typeof s=="string"?s.trim().slice(0,160):s]).filter(([a])=>a);return o.length?JSON.stringify(Object.fromEntries(o)):""}catch{return""}},"sanitizeAiGatewayMetadata"),Tc=n(e=>{let t=Number(String(e||"").trim());return Number.isFinite(t)?String(Math.max(1,Math.min(86400,Math.floor(t)))):""},"sanitizeAiGatewayCacheTtl"),vc=n((e,t,r)=>{let a=`${e.pathname==="/"?"":String(e.pathname||"").replace(/\/+$/g,"")}${t.startsWith("/")?t:`/${t}`}`;return new URL(`${a}${r||""}`,`${e.protocol}//${e.host}`)},"buildUpstreamUrl"),Oc=n(({provider:e,requestedUpstream:t,env:r})=>e==="openai"?t||"https://api.openai.com":e===Yt?t||`https://${Bt}`:e===Wt?t||`https://${Ft}`:e===qt?t||String(r.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim()||`https://${zt}`:t||String(r.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim(),"pickUpstreamBase");async function ka(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=new URL(t.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":pe(t.headers,"origin")||"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD","POST"].includes(o))return ge(t,{ok:!1,error:"Unsupported method"},405);let s=Ac(pe(t.headers,"x-kg-chat-provider")),i=Ec(pe(t.headers,Sc)),c=Cc(pe(t.headers,bc)),l=Tc(pe(t.headers,_c)),p=String(r.KNOWGRPH_CHAT_PROXY_AI_GATEWAY_BASE_URL||"").trim(),m=String(r.KNOWGRPH_CHAT_PROXY_AI_GATEWAY_GATEWAY_ID||"").trim(),f=s==="openai"&&!!p&&!!i,P=Oc({provider:s,requestedUpstream:f?p:pe(t.headers,"x-kg-chat-upstream"),env:r});if(!P)return ge(t,{ok:!1,error:"Missing chat proxy upstream configuration"},500);let S;try{S=new URL(P)}catch{return ge(t,{ok:!1,error:"Invalid chat proxy upstream configuration"},500)}let O=ma(r,{includeOpenAi:!0,includeAiGateway:!0,includeMiroMind:!0,includeAgnes:!0,includeBytePlus:!0}),D=ke(S.hostname);if(!O.has(D))return ge(t,{ok:!1,error:"Chat proxy upstream host is not allowed"},403);if(!da(D)&&S.protocol!=="https:")return ge(t,{ok:!1,error:"Chat proxy requires HTTPS for non-local upstream hosts"},403);let N=f||Rc(D),G=!N&&(s==="openai"||D===Ur),Q=s===Yt||xc(D),W=s===Wt||Pc(D),R=s===qt||kc(D),T=pe(t.headers,"x-kg-chat-api-key"),te=String(r.KNOWGRPH_CHAT_PROXY_AI_GATEWAY_TOKEN||r.AI_GATEWAY_TOKEN||r.CLOUDFLARE_API_TOKEN||"").trim(),F=String(r.KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY||r.OPENAI_API_KEY||"").trim(),le=String(r.KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY||r.MIROMIND_API_KEY||"").trim(),U=String(r.KNOWGRPH_CHAT_PROXY_AGNES_API_KEY||r.AGNES_API_KEY||"").trim(),L=String(r.KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY||r.BYTEPLUS_API_KEY||"").trim(),Y=(T||te).slice(0,512),se=(T||F).slice(0,512),Se=(T||le).slice(0,512),xe=(T||U).slice(0,512),k=(T||L).slice(0,512),w=R?k:N?Y:W?xe:Q?Se:se;if(N&&!w)return ge(t,{ok:!1,error:"Missing Cloudflare AI Gateway token for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_AI_GATEWAY_TOKEN or AI_GATEWAY_TOKEN)"},401);if(G&&!se)return ge(t,{ok:!1,error:"Missing OpenAI API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY or OPENAI_API_KEY)"},401);if(Q&&!w)return ge(t,{ok:!1,error:"Missing MiroMind API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY or MIROMIND_API_KEY)"},401);if(W&&!w)return ge(t,{ok:!1,error:"Missing Agnes API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_AGNES_API_KEY or AGNES_API_KEY)"},401);if(R&&!w)return ge(t,{ok:!1,error:"Missing BytePlus API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY or BYTEPLUS_API_KEY)"},401);if(o==="POST"&&!pe(t.headers,"content-type").toLowerCase().includes("application/json"))return ge(t,{ok:!1,error:"Chat proxy expects application/json payloads"},415);let y=a.pathname.startsWith(Pa)&&a.pathname.slice(Pa.length)||"/v1/chat/completions",d=y.startsWith("/")?y:`/${y}`,g=vc(S,d,a.search||""),h=new Headers,A=pe(t.headers,"content-type"),E=pe(t.headers,"accept");A&&h.set("content-type",A),E&&h.set("accept",E),(G||N||Q||W||R)&&h.set("authorization",`Bearer ${w}`);let q=pe(t.headers,"x-client-request-id").slice(0,512);q&&h.set("x-client-request-id",q),N&&m&&h.set("cf-aig-gateway-id",m),c&&h.set("cf-aig-metadata",c),l&&h.set("cf-aig-cache-ttl",l);let H=new AbortController,$=Number(r.KNOWGRPH_CHAT_PROXY_TIMEOUT_MS),V=Number.isFinite($)?Math.max(5e3,Math.min(18e4,Math.floor($))):9e4,_=setTimeout(()=>H.abort(),V);try{let j=o==="GET"||o==="HEAD"?void 0:t.body;if(f&&o==="POST"){let Be=await t.clone().text();try{let Fe=JSON.parse(Be||"{}");Fe.model=i,j=JSON.stringify(Fe)}catch{j=Be}}let ue=await fetch(g.toString(),{method:o,headers:h,body:j,signal:H.signal,redirect:"follow"}),v=new Headers(ue.headers);v.delete("content-length"),v.delete("www-authenticate"),v.set("cache-control","no-store");let J=pe(t.headers,"origin");return J&&(v.set("access-control-allow-origin",J),v.set("vary","Origin")),o==="HEAD"?new Response(null,{status:ue.status,statusText:ue.statusText,headers:v}):new Response(ue.body,{status:ue.status,statusText:ue.statusText,headers:v})}catch(j){let ue=j&&typeof j=="object"&&"message"in j?String(j.message||""):"",v=H.signal.aborted||/aborted|timeout/i.test(ue);return ge(t,{ok:!1,error:ue||"Failed to reach chat upstream"},v?504:502)}finally{clearTimeout(_)}}n(ka,"onRequest");function Ic(e){let t=e.map(r=>r==null?"":typeof r=="boolean"?r?"1":"0":typeof r=="number"?Number.isFinite(r)?String(r):"":String(r)).join("|");return`rich-media-preview:${st(t)}`}n(Ic,"buildRichMediaPreviewSemanticKey");var Ra="png";function St(e){let t=typeof e=="number"?e:Number(String(e??"").trim());if(!Number.isFinite(t))return null;let r=Math.max(0,Number(t.toFixed(3)));return Number.isFinite(r)?r:null}n(St,"normalizeRemoteVideoFrameSeconds");function Mc(e){return String(St(e)??0).replace(/\./g,"_")}n(Mc,"formatRemoteVideoFrameSecondsForFileName");function Jt(e){let t=String(e||"").trim().toLowerCase();return t==="jpg"||t==="jpeg"?"jpg":"png"}n(Jt,"normalizeRemoteVideoFrameFormat");function Br(e){let t=String(e.sourceUrl||"").trim(),r=St(e.timeSeconds)??0,o=Jt(e.format||Ra);return Ic(["remote-video-frame",t,r,o])}n(Br,"buildRemoteVideoFrameSemanticKey");function Ea(e){let t=St(e.timeSeconds)??0,r=Jt(e.format||Ra),o=Br({...e,timeSeconds:t,format:r});return`frame-${o.split(":").pop()||st(o)}-t${Mc(t)}.${r}`}n(Ea,"buildRemoteVideoFrameFileName");var Vt=n(e=>{let t=String(e||"").trim();return t&&/^[A-Za-z0-9_-]{6,128}$/.test(t)?t:null},"normalizeYouTubeIdLikeValue"),xa=n(e=>{try{let t=new URL(String(e||"").trim()),r=String(t.hostname||"").toLowerCase();if(r==="youtu.be"||r.endsWith(".youtu.be")){let o=t.pathname.replace(/^\/+/,"").split("/")[0]?.trim()||"";return Vt(o)}if(r==="youtube.com"||r.endsWith(".youtube.com")||r==="youtube-nocookie.com"||r.endsWith(".youtube-nocookie.com")){let o=String(t.searchParams.get("v")||"").trim();if(o)return Vt(o);let a=t.pathname.split("/").filter(Boolean),s=a[0]||"",i=a[1]||"";if((s==="embed"||s==="shorts"||s==="live")&&i)return Vt(i);if(s==="watch"){let c=String(t.searchParams.get("v")||"").trim();return Vt(c)}}}catch{return null}return null},"readYouTubeIdFromUrl");function Nc(e){let t=String(e||"").trim().replace(/^<|>$/g,"").trim();for(;/[),.;:!?]$/.test(t);){let r=t.slice(0,-1).trim();if(!r)break;let o=xa(t),a=xa(r);if(!a||o&&o!==a)break;t=r}return t}n(Nc,"stripYouTubeUrlTrailingPunctuation");function Ca(e){let t=n(r=>{let o=String(r||"").trim();if(!o)return null;if(/^\d+$/.test(o))return Number(o);let a=o.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i);if(!a)return null;let s=a[1]?Number(a[1]):0,i=a[2]?Number(a[2]):0,c=a[3]?Number(a[3]):0,l=s*3600+i*60+c;return l>0&&Number.isFinite(l)?l:null},"parseChunk");try{let r=new URL(Nc(e)),o=r.searchParams.get("t")||r.searchParams.get("start")||"",a=r.hash&&new URLSearchParams(r.hash.replace(/^#/,"")).get("t")||"";return t(o)??t(a)}catch{return null}}n(Ca,"parseYouTubeStartSeconds");var Uc="/image/knowgrph/video-frame",Lc=4096,$c=720*60,Dc=/^frame-[a-f0-9]+-t\d+\.(?:png|jpg)$/i,Wr={"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"accept, content-type"},Gr=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),Fr=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:JSON.stringify(e),{status:t,headers:{...Wr,"content-type":"application/json; charset=utf-8","cache-control":"no-store"}}),"jsonResponse"),zr=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:e,{status:t,headers:{...Wr,"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}}),"textResponse"),Hc=n((e,t)=>e===t||e.endsWith(`.${t}`),"hostMatches"),Kc=n(e=>{let t=Gr(e?.KG_VIDEO_FRAME_ALLOWED_HOSTS);return t?t.split(",").map(r=>Gr(r).toLowerCase()).filter(Boolean):["youtube.com","youtu.be","youtube-nocookie.com","bilibili.com","b23.tv"]},"readAllowedHosts"),jc=n(e=>Gr(e).replace(/^<|>$/g,"").trim(),"unwrapUrlInput"),Bc=n((e,t)=>{try{let r=new URL(e);if(r.protocol!=="https:"&&r.protocol!=="http:")return!1;let o=r.hostname.toLowerCase();return Kc(t).some(a=>Hc(o,a))}catch{return!1}},"isAllowedSourceUrl"),Fc=n((e,t)=>{let r=new URL(e.url),o=jc(r.searchParams.get("url")||"");if(!o)return{error:"Missing url parameter"};if(o.length>Lc)return{error:"Video URL is too long"};if(!Bc(o,t))return{error:"Video frame extraction is limited to supported remote video hosts"};let a=St(r.searchParams.get("time"))??Ca(o);if(a==null)return{error:"Missing time parameter"};let s=Math.min($c,Math.max(0,a)),i=Jt(r.searchParams.get("format")||"png"),c=Ea({sourceUrl:o,timeSeconds:s,format:i});if(!Dc.test(c))return{error:"Invalid frame cache key"};let l=`${Uc}/${c}`;return{sourceUrl:o,timeSeconds:s,format:i,fileName:c,publicUrl:l,semanticKey:Br({sourceUrl:o,timeSeconds:s,format:i})}},"readFrameRequest"),zc=n(async(e,t,r)=>{let o=new URL(t,e.request.url),a=new Request(o.toString(),{method:r});return typeof e.env?.ASSETS?.fetch=="function"?await e.env.ASSETS.fetch(a):await fetch(a)},"fetchStaticAsset"),Gc=n(e=>`Frame has not been generated yet. Run the local video-frame extractor and publish ${e.publicUrl}.`,"missingFrameMessage"),Wc=n((e,t)=>{let r=new Headers;r.set("content-type",t.format==="jpg"?"image/jpeg":"image/png"),r.set("cache-control","public, max-age=31536000, immutable"),r.set("access-control-allow-origin","*");let o=e.headers.get("content-length");o&&r.set("content-length",o);let a=e.headers.get("etag");return a&&r.set("etag",a),r},"imageResponseHeaders");async function Ta(e){let t=e.request;if(t.method==="OPTIONS")return new Response(null,{status:204,headers:Wr});if(t.method!=="GET"&&t.method!=="HEAD")return zr("Method not allowed",405,t.method);let r=new URL(t.url).searchParams.get("emit")==="json",o=Fc(t,e.env||{});if("error"in o)return r?Fr({ok:!1,error:o.error},400,t.method):zr(o.error,400,t.method);let a=r&&t.method!=="HEAD"?"GET":r||t.method==="HEAD"?"HEAD":"GET",s=await zc(e,o.publicUrl,a);if(!s.ok){let i=Gc(o);return r?Fr({ok:!1,error:i,publicUrl:o.publicUrl,semanticKey:o.semanticKey},404,t.method):zr(i,404,t.method)}if(r){let i=Number(s.headers.get("content-length")||0);return(!Number.isFinite(i)||i<=0)&&t.method!=="HEAD"&&(i=(await s.arrayBuffer()).byteLength),Fr({ok:!0,imageUrl:o.publicUrl,publicUrl:o.publicUrl,semanticKey:o.semanticKey,cached:!0,bytes:Number.isFinite(i)?Math.max(0,Math.floor(i)):0,timeSeconds:o.timeSeconds,format:o.format},200,t.method)}return new Response(t.method==="HEAD"?null:s.body,{status:200,headers:Wc(s,o)})}n(Ta,"onRequest");var va={"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"content-type"},Xt=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:JSON.stringify(e),{status:t,headers:va}),"jsonResponse"),re=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),qc=n(e=>{try{let t=new URL(String(e||"").trim());if(/youtu\.be$/i.test(t.hostname))return re(t.pathname.split("/").filter(Boolean)[0]);if(/youtube\.com$/i.test(t.hostname)||/youtube-nocookie\.com$/i.test(t.hostname)){let r=re(t.searchParams.get("v"));if(r)return r;let o=t.pathname.split("/").filter(Boolean),a=o.findIndex(s=>["embed","shorts","live"].includes(s));if(a>=0)return re(o[a+1])}}catch{}return""},"readVideoId"),Yc=n((e,t)=>{let r=e.indexOf(t);if(r<0)return null;let o=e.indexOf("{",r);if(o<0)return null;let a=0,s=!1,i=!1;for(let c=o;c<e.length;c+=1){let l=e[c];if(s){i?i=!1:l==="\\"?i=!0:l==='"'&&(s=!1);continue}if(l==='"')s=!0;else if(l==="{")a+=1;else if(l==="}"&&(a-=1,a===0))return e.slice(o,c+1)}return null},"extractJsonAfter"),Vc=n(e=>{for(let t of["ytInitialPlayerResponse =","ytInitialPlayerResponse="]){let r=Yc(e,t);if(r)try{return JSON.parse(r)}catch{}}return null},"parsePlayerResponse"),Jc=n((e,t)=>{let r=re(t||"en").toLowerCase();return e.find(o=>re(o.languageCode).toLowerCase()===r)||e.find(o=>re(o.languageCode).toLowerCase().startsWith(r.split("-")[0]))||e.find(o=>re(o.kind)!=="asr")||e[0]||null},"pickCaptionTrack"),Xc=n(e=>{let t=new URL(e);return t.searchParams.set("fmt","json3"),t.toString()},"withJsonCaptionFormat"),Qc=n(e=>(Array.isArray(e?.events)?e.events:[]).map(r=>{let o=Array.isArray(r.segs)?re(r.segs.map(i=>i?.utf8||"").join("")):"",a=Number(r.tStartMs)/1e3,s=Number(r.dDurationMs||0)/1e3;return o&&Number.isFinite(a)?{text:o,start:a,duration:Number.isFinite(s)?s:0}:null}).filter(Boolean),"parseCaptionJson3"),Zc=n(e=>String(e||"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'"),"decodeXmlText"),el=n(e=>{let t=[],r=/<text\b([^>]*)>([\s\S]*?)<\/text>/gi,o=null;for(;o=r.exec(String(e||""));){let a=o[1]||"",s=Number(a.match(/\bstart="([^"]+)"/i)?.[1]),i=Number(a.match(/\bdur="([^"]+)"/i)?.[1]||0),c=re(Zc(o[2]||""));c&&Number.isFinite(s)&&t.push({text:c,start:s,duration:Number.isFinite(i)?i:0})}return t},"parseCaptionXml"),tl=n((e,t)=>{let r=String(e||"").trim();if(!r)return[];if(String(t||"").toLowerCase().includes("json")||r.startsWith("{")||r.startsWith("["))try{return Qc(JSON.parse(r))}catch{return[]}return el(r)},"parseCaptionResponseText"),rl=n(e=>{let t=Math.max(0,Math.floor(Number(e)||0)),r=Math.floor(t/60),o=String(t%60).padStart(2,"0");return`${r}:${o}`},"formatTimestamp"),ol=n((e,t)=>{let r=new URL(e);return r.searchParams.set("t",`${Math.max(0,Math.floor(Number(t)||0))}s`),r.toString()},"timestampUrl"),nl=n(({title:e,sourceUrl:t,videoId:r,authorName:o,thumbnailUrl:a,segments:s})=>[`# ${e||`YouTube ${r}`}`,"",`Video ID: ${r}`,o?`Author: ${o}`:"",`Source: [${t}](${t})`,a?`[![${e||r}](${a})](${t})`:"","",s.length>0?"## Transcript":"## Video Source","",...s.length>0?s.map(i=>`[${rl(i.start)}](${ol(t,i.start)}) ${i.text}`):["Captions were not available from the source at import time.","The source URL, title, author, and thumbnail remain available for downstream storyboard reconstruction."],""].filter(i=>i!=="").join(`
`),"buildMarkdown"),qr=n(({videoId:e,sourceUrl:t,title:r,authorName:o,thumbnailUrl:a,lang:s,languageCode:i,segments:c,captionStatus:l})=>{let p={type:"rag:YouTubeTranscript",video_id:e,source_url:t,title:r,author_name:o,thumbnail_url:a,language_code:re(i)||s,caption_status:l,segment_count:c.length,duration:c.reduce((m,f)=>Math.max(m,f.start+f.duration),0),segments:c};return{ok:!0,name:`youtube-${e.toLowerCase()}.md`,markdown:nl({title:r,sourceUrl:t,videoId:e,authorName:o,thumbnailUrl:a,segments:c}),transcript:p}},"buildPayload");async function al({sourceUrl:e,lang:t="en",fetchImpl:r=fetch}){let o=qc(e);if(!o)return{ok:!1,error:"unsupported_youtube_url"};let a=`https://www.youtube.com/watch?v=${encodeURIComponent(o)}`,[s,i]=await Promise.all([r(`https://www.youtube.com/oembed?url=${encodeURIComponent(a)}&format=json`,{headers:{accept:"application/json"}}).catch(()=>null),r(a,{headers:{accept:"text/html,application/xhtml+xml","accept-language":"en-US,en;q=0.9","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}})]),c=s?.ok?await s.json().catch(()=>({})):{},l=i.ok?Vc(await i.text()):null,p=re(c.title)||re(l?.videoDetails?.title)||`YouTube ${o}`,m=re(c.author_name)||re(l?.videoDetails?.author),f=re(c.thumbnail_url)||`https://i.ytimg.com/vi/${o}/hqdefault.jpg`;if(!i.ok)return qr({videoId:o,sourceUrl:a,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:t,segments:[],captionStatus:`watch-fetch-${i.status}`});let P=l?.captions?.playerCaptionsTracklistRenderer?.captionTracks||[],S=Jc(Array.isArray(P)?P:[],t);if(!S?.baseUrl)return qr({videoId:o,sourceUrl:a,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:t,segments:[],captionStatus:"captions-unavailable"});let O=await r(Xc(S.baseUrl),{headers:{accept:"application/json,text/xml,text/plain,*/*","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}}).catch(()=>null),D=O?await O.text().catch(()=>""):"",N=O?.ok?tl(D,O.headers.get("content-type")):[],G=N.length>0?"available":O?.ok?"captions-empty":`captions-fetch-${O?.status||"failed"}`;return qr({videoId:o,sourceUrl:a,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:S.languageCode,segments:N,captionStatus:G})}n(al,"buildYouTubeTranscriptPayload");async function Oa(e){let t=e.request,r=String(t.method||"GET").toUpperCase();if(r==="OPTIONS")return new Response(null,{status:204,headers:va});if(r!=="GET"&&r!=="HEAD"&&r!=="POST")return Xt({ok:!1,error:"unsupported_method"},405,r);let o=new URL(t.url),a=re(o.searchParams.get("url")),s=re(o.searchParams.get("lang"))||"en";if(!a)return Xt({ok:!1,error:"missing_url"},400,r);try{let i=await al({sourceUrl:a,lang:s});return Xt(i,i.ok?200:502,r)}catch(i){let c=i&&typeof i=="object"&&"message"in i?re(i.message):"";return Xt({ok:!1,error:c||"youtube_conversion_failed"},502,r)}}n(Oa,"onRequest");async function Ia(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase();if(r==="OPTIONS")return new Response(null,{status:204,headers:{...ce(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(r!=="GET"&&r!=="HEAD")return new Response(JSON.stringify({ok:!1,error:"unsupported_method"}),{status:405,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...ce(t)}});let o={ok:!0,service:"singabldr-pages",ts:new Date().toISOString()},a={"content-type":"application/json; charset=utf-8","cache-control":"no-store",...ce(t)};return r==="HEAD"?new Response(null,{status:200,headers:a}):new Response(JSON.stringify(o),{status:200,headers:a})}n(Ia,"onRequest");var Le="https://airvio.co";var ae="/knowgrph",Ue=`${Le}${ae}/`,Ma=`${Le}/`;var Ua=`${ae}/health`,Na=`${Le}${Ua}`,La="/.well-known/agent-card.json",Tm=`${ae}/.well-known/agent-card.json`,sl=`${Le}${La}`,$a="/api/storage/source-files",vm=`${$a}/`,il="/api/storage/doc-default/",cl="/api/storage/doc/",ll=`${Le}${$a}`,pl=`${Le}${il}{canonicalPath}`,ul=`${Le}${cl}{workspaceId}/{canonicalPath}`,dl=`${Le}/api/storage/blob/{workspaceId}/{canonicalPath}`;var Yr="root-agent-ready-pages";var Da=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${ae}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${ae}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${Ua}>; rel="status"; type="application/health+json"`,`<${ae}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${La}>; rel="describedby"; type="application/json"`].join(", "),Ha=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${Ue}.

## Discovery

- Crawl policy: ${Ue}robots.txt
- Sitemap: ${Ue}sitemap.xml
- API catalog: ${Ue}.well-known/api-catalog
- Auth.md registration instructions: ${Ma}auth.md
- Health: ${Na}
- MCP server card: ${Ue}.well-known/mcp/server-card.json
- A2A Agent Card: ${sl}
- Agent skills: ${Ue}.well-known/agent-skills/index.json
- LLM reference: ${Ue}llms.txt
- Live Canvas Hero discovery markdown: ${Ma}knowgrph-live-canvas-hero.md

## APIs

- Agent-ready status: ${Na}
- HTTP MCP: ${Ue}mcp
- Storage API: ${Le}/api/storage/
- Source Files index: ${ll}
- Default Source File documents: ${pl}
- Workspace Source File documents: ${ul}
- Workspace binary artifacts: ${dl}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes seven read-only tools for published Source Files, shared documents, data-first search/fetch, and agent-surface inspection.
- HTTP MCP and local stdio expose shared read-only prompt templates through \`prompts/list\` and \`prompts/get\` for Source Files research and agent-surface inspection.
- HTTP MCP and local stdio expose Source Files resource templates through \`resources/templates/list\`; \`kgdoc://source-file/{id}\` reads reuse the existing \`fetch\` executor.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared seven-tool WebMCP surface on \`${Ue}\` HTML routes.

## MCP Apps

- HTTP MCP advertises \`io.modelcontextprotocol/ui\` with \`text/html;profile=mcp-app\`.
- \`inspect_agent_surface\` links to the shared \`ui://knowgrph/agent-ready\` resource through \`_meta.ui.resourceUri\`.
- UI-linked tool descriptors expose no-auth \`securitySchemes\`, mirror them in \`_meta.securitySchemes\`, and set OpenAI widget accessibility metadata from the shared contract.
- \`resources/list\` and \`resources/read\` serve the inline, sandbox-friendly Knowgrph Agent Ready app resource while preserving text fallback and structured tool output; \`resources/templates/list\` exposes Source Files markdown reads under the standard MCP \`resources\` capability.
- The View initiates the MCP Apps \`ui/initialize\` handshake, sends \`ui/notifications/initialized\` and \`ui/notifications/size-changed\`, handles host context/tool input/result/cancel notifications, and calls the originating server through \`tools/call\`.
- \`inspect_agent_surface.structuredContent.mcpAppsServerReadiness\` exposes the native server-readiness model used by the View: app tool/resource binding, prompt discovery, resource-template discovery, output-schema and structured-content readiness, sandbox/security metadata, widget accessibility, Streamable HTTP JSON-RPC transport, local stdio transport, and read-only search/fetch retrieval.
`,Ka=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),ja=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(r=>r.trim().startsWith("text/markdown")),"wantsMarkdown"),Vr=n((e,t)=>{let r=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&r.headers.set("x-knowgrph-route-owner",o),a&&r.headers.set("x-knowgrph-route-tag",a),r},"withAgentReadyRouteHeaders");var Xr="Agent-actionable chat-to-canvas knowledge graph workspace",Ba='<main id="root"></main>',ml=/<(?:main|div)\s+id=["']root["']\s*><\/(?:main|div)>/i,hl=n(e=>{let t=/<script>([\s\S]*?)<\/script>/g;for(let r of String(e||"").matchAll(t)){let o=r[1]||"";if(o.includes("createWebMcpLifecycleController")&&o.includes("toolDefinitions"))return o}return""},"extractWebMcpScript"),Fa=n(()=>({"content-type":"text/html; charset=utf-8","cache-control":"no-store, no-cache, no-transform, must-revalidate, max-age=0","access-control-allow-origin":"*",link:Da}),"rootHtmlHeaders"),gl=n(()=>`<noscript><a href="${ae}/">Enter Knowgrph</a></noscript>`,"rootNoscriptFallbackMarkup"),Jr=n((e,t)=>String(e||"").includes("</head>")?String(e||"").replace("</head>",`${t}</head>`):`${String(e||"")}${t}`,"injectIntoHead"),fl=n(e=>{let t=String(e||"").replace(ml,Ba);return/<meta\s+name=["']description["'][^>]*>/i.test(t)?t=t.replace(/<meta\s+name=["']description["'][^>]*>/i,`<meta name="description" content="${Xr}" />`):t=Jr(t,`    <meta name="description" content="${Xr}" />
`),/<link\s+rel=["']canonical["'][^>]*>/i.test(t)||(t=Jr(t,`    <link rel="canonical" href="${ae}/" />
`)),/<meta\s+name=["']x-knowgrph-root-alias["'][^>]*>/i.test(t)||(t=Jr(t,`    <meta name="x-knowgrph-root-alias" content="${ae}/" />
`)),t},"rewriteRootAppHtml"),yl=n(async e=>{let t=new URL(`${ae}/?agentReadyRootWebMcp=1`,e.url),r=await fetch(t,{headers:{accept:"text/html"}});return r.ok?hl(await r.text()):""},"loadWebMcpScript"),wl=n(async e=>{let t=new URL(`${ae}/?agentReadyRootAlias=1`,e.url),r=await fetch(t,{headers:{accept:"text/html"}});if(!r.ok)return null;let o=fl(await r.text());return!o.includes(Ba)||!o.includes(`${ae}/assets/`)?null:new Response(o,{status:200,headers:Fa()})},"loadKnowgrphAppShell"),Sl=n((e="")=>new Response(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${Xr}" />
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
    ${gl()}
  </body>
</html>`,{status:200,headers:Fa()}),"rootHtmlResponse");async function za(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase();if(r!=="GET"&&r!=="HEAD")return e.next();if(ja(t)){let s=Vr(Ka(Ha),{owner:Yr,tag:"root-homepage-markdown"});return r==="HEAD"?new Response(null,s):s}let o=r==="HEAD"?null:await wl(t),a=Vr(o||Sl(r==="HEAD"?"":await yl(t)),{owner:Yr,tag:"root-homepage-html"});return r==="HEAD"?new Response(null,a):a}n(za,"onRequest");var b=[{routePath:"/api/llm/chat/completions",mountPath:"/api/llm/chat",method:"",middlewares:[],modules:[to]},{routePath:"/api/payments/commerce/x402",mountPath:"/api/payments/commerce",method:"",middlewares:[],modules:[xo]},{routePath:"/api/llm/models",mountPath:"/api/llm",method:"",middlewares:[],modules:[Ro]},{routePath:"/api/llm/responses",mountPath:"/api/llm",method:"",middlewares:[],modules:[Eo]},{routePath:"/knowgrph/doc-default/:path*",mountPath:"/knowgrph/doc-default",method:"",middlewares:[],modules:[oa]},{routePath:"/knowgrph/doc/:path*",mountPath:"/knowgrph/doc",method:"",middlewares:[],modules:[na]},{routePath:"/knowgrph/share/:path*",mountPath:"/knowgrph/share",method:"",middlewares:[],modules:[aa]},{routePath:"/api/link-preview",mountPath:"/api",method:"GET",middlewares:[],modules:[ia]},{routePath:"/api/link-proxy",mountPath:"/api",method:"GET",middlewares:[],modules:[la]},{routePath:"/api/graph",mountPath:"/api",method:"",middlewares:[],modules:[Sa]},{routePath:"/api/oembed",mountPath:"/api",method:"",middlewares:[],modules:[Aa]},{routePath:"/__chat_proxy/:path*",mountPath:"/__chat_proxy",method:"",middlewares:[],modules:[ka]},{routePath:"/knowgrph/:path*",mountPath:"/knowgrph",method:"",middlewares:[],modules:[Ke]},{routePath:"/__video_frame",mountPath:"/",method:"",middlewares:[],modules:[Ta]},{routePath:"/__youtube_transcript",mountPath:"/",method:"",middlewares:[],modules:[Oa]},{routePath:"/health",mountPath:"/",method:"",middlewares:[],modules:[Ia]},{routePath:"/",mountPath:"/",method:"",middlewares:[],modules:[za]}];function bl(e){for(var t=[],r=0;r<e.length;){var o=e[r];if(o==="*"||o==="+"||o==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(o==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(o==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(o==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(o===":"){for(var a="",s=r+1;s<e.length;){var i=e.charCodeAt(s);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){a+=e[s++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:a}),r=s;continue}if(o==="("){var c=1,l="",s=r+1;if(e[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;){if(e[s]==="\\"){l+=e[s++]+e[s++];continue}if(e[s]===")"){if(c--,c===0){s++;break}}else if(e[s]==="("&&(c++,e[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));l+=e[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(r));if(!l)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:l}),r=s;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}n(bl,"lexer");function _l(e,t){t===void 0&&(t={});for(var r=bl(e),o=t.prefixes,a=o===void 0?"./":o,s=t.delimiter,i=s===void 0?"/#?":s,c=[],l=0,p=0,m="",f=n(function(U){if(p<r.length&&r[p].type===U)return r[p++].value},"tryConsume"),P=n(function(U){var L=f(U);if(L!==void 0)return L;var Y=r[p],se=Y.type,Se=Y.index;throw new TypeError("Unexpected ".concat(se," at ").concat(Se,", expected ").concat(U))},"mustConsume"),S=n(function(){for(var U="",L;L=f("CHAR")||f("ESCAPED_CHAR");)U+=L;return U},"consumeText"),O=n(function(U){for(var L=0,Y=i;L<Y.length;L++){var se=Y[L];if(U.indexOf(se)>-1)return!0}return!1},"isSafe"),D=n(function(U){var L=c[c.length-1],Y=U||(L&&typeof L=="string"?L:"");if(L&&!Y)throw new TypeError('Must have text between two parameters, missing text after "'.concat(L.name,'"'));return!Y||O(Y)?"[^".concat(je(i),"]+?"):"(?:(?!".concat(je(Y),")[^").concat(je(i),"])+?")},"safePattern");p<r.length;){var N=f("CHAR"),G=f("NAME"),Q=f("PATTERN");if(G||Q){var W=N||"";a.indexOf(W)===-1&&(m+=W,W=""),m&&(c.push(m),m=""),c.push({name:G||l++,prefix:W,suffix:"",pattern:Q||D(W),modifier:f("MODIFIER")||""});continue}var R=N||f("ESCAPED_CHAR");if(R){m+=R;continue}m&&(c.push(m),m="");var T=f("OPEN");if(T){var W=S(),te=f("NAME")||"",F=f("PATTERN")||"",le=S();P("CLOSE"),c.push({name:te||(F?l++:""),pattern:te&&!F?D(W):F,prefix:W,suffix:le,modifier:f("MODIFIER")||""});continue}P("END")}return c}n(_l,"parse");function bt(e,t){var r=[],o=Wa(e,r,t);return Al(o,r,t)}n(bt,"match");function Al(e,t,r){r===void 0&&(r={});var o=r.decode,a=o===void 0?function(s){return s}:o;return function(s){var i=e.exec(s);if(!i)return!1;for(var c=i[0],l=i.index,p=Object.create(null),m=n(function(P){if(i[P]===void 0)return"continue";var S=t[P-1];S.modifier==="*"||S.modifier==="+"?p[S.name]=i[P].split(S.prefix+S.suffix).map(function(O){return a(O,S)}):p[S.name]=a(i[P],S)},"_loop_1"),f=1;f<i.length;f++)m(f);return{path:c,index:l,params:p}}}n(Al,"regexpToFunction");function je(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}n(je,"escapeString");function Ga(e){return e&&e.sensitive?"":"i"}n(Ga,"flags");function Pl(e,t){if(!t)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,a=r.exec(e.source);a;)t.push({name:a[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),a=r.exec(e.source);return e}n(Pl,"regexpToRegexp");function kl(e,t,r){var o=e.map(function(a){return Wa(a,t,r).source});return new RegExp("(?:".concat(o.join("|"),")"),Ga(r))}n(kl,"arrayToRegexp");function xl(e,t,r){return Rl(_l(e,r),t,r)}n(xl,"stringToRegexp");function Rl(e,t,r){r===void 0&&(r={});for(var o=r.strict,a=o===void 0?!1:o,s=r.start,i=s===void 0?!0:s,c=r.end,l=c===void 0?!0:c,p=r.encode,m=p===void 0?function(L){return L}:p,f=r.delimiter,P=f===void 0?"/#?":f,S=r.endsWith,O=S===void 0?"":S,D="[".concat(je(O),"]|$"),N="[".concat(je(P),"]"),G=i?"^":"",Q=0,W=e;Q<W.length;Q++){var R=W[Q];if(typeof R=="string")G+=je(m(R));else{var T=je(m(R.prefix)),te=je(m(R.suffix));if(R.pattern)if(t&&t.push(R),T||te)if(R.modifier==="+"||R.modifier==="*"){var F=R.modifier==="*"?"?":"";G+="(?:".concat(T,"((?:").concat(R.pattern,")(?:").concat(te).concat(T,"(?:").concat(R.pattern,"))*)").concat(te,")").concat(F)}else G+="(?:".concat(T,"(").concat(R.pattern,")").concat(te,")").concat(R.modifier);else{if(R.modifier==="+"||R.modifier==="*")throw new TypeError('Can not repeat "'.concat(R.name,'" without a prefix and suffix'));G+="(".concat(R.pattern,")").concat(R.modifier)}else G+="(?:".concat(T).concat(te,")").concat(R.modifier)}}if(l)a||(G+="".concat(N,"?")),G+=r.endsWith?"(?=".concat(D,")"):"$";else{var le=e[e.length-1],U=typeof le=="string"?N.indexOf(le[le.length-1])>-1:le===void 0;a||(G+="(?:".concat(N,"(?=").concat(D,"))?")),U||(G+="(?=".concat(N,"|").concat(D,")"))}return new RegExp(G,Ga(r))}n(Rl,"tokensToRegexp");function Wa(e,t,r){return e instanceof RegExp?Pl(e,t):Array.isArray(e)?kl(e,t,r):xl(e,t,r)}n(Wa,"pathToRegexp");var Qt=/[.+?^${}()|[\]\\]/g;function*El(e){let t=new URL(e.url).pathname;for(let r of[...b].reverse()){if(r.method&&r.method!==e.method)continue;let o=bt(r.routePath.replace(Qt,"\\$&"),{end:!1}),a=bt(r.mountPath.replace(Qt,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i)for(let c of r.middlewares.flat())yield{handler:c,params:s.params,path:i.path}}for(let r of b){if(r.method&&r.method!==e.method)continue;let o=bt(r.routePath.replace(Qt,"\\$&"),{end:!0}),a=bt(r.mountPath.replace(Qt,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i&&r.modules.length){for(let c of r.modules.flat())yield{handler:c,params:s.params,path:s.path};break}}}n(El,"executeRequest");var sh={async fetch(e,t,r){let o=e,a=El(o),s={},i=!1,c=n(async(l,p)=>{if(l!==void 0){let f=l;typeof l=="string"&&(f=new URL(l,o.url).toString()),o=new Request(f,p)}let m=a.next();if(m.done===!1){let{handler:f,params:P,path:S}=m.value,O={request:new Request(o.clone()),functionPath:S,next:c,params:P,get data(){return s},set data(N){if(typeof N!="object"||N===null)throw new Error("context.data must be an object");s=N},env:t,waitUntil:r.waitUntil.bind(r),passThroughOnException:n(()=>{i=!0},"passThroughOnException")},D=await f(O);if(!(D instanceof Response))throw new Error("Your Pages function should return a Response");return Qr(D)}else{let f=await t.ASSETS.fetch(o);return Qr(f)}},"next");try{return await c()}catch(l){if(i){let p=await t.ASSETS.fetch(o);return Qr(p)}throw l}}},Qr=n(e=>new Response([101,204,205,304].includes(e.status)?null:e.body,e),"cloneResponse");export{sh as default};
