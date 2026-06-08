var xa=Object.defineProperty;var n=(e,t)=>xa(e,"name",{value:t,configurable:!0});var Ta="https://api.openai.com/v1";var tr=Object.freeze(["gpt-5.4-nano","gpt-4o-mini"]);function rr(e){return String(e||"").trim()}n(rr,"normalizeOrigin");function Ea(e){let t=rr(e);return t?t.startsWith("http://localhost:")||t.startsWith("http://127.0.0.1:")||t.startsWith("http://0.0.0.0:"):!1}n(Ea,"isAllowedOrigin");function qr(e){let t=rr(e);return Ea(t)?{"access-control-allow-origin":t,vary:"Origin","access-control-allow-methods":"GET, POST, OPTIONS","access-control-allow-headers":"content-type, x-flowinfish-session","access-control-max-age":"86400"}:{}}n(qr,"corsHeaders");function ye(e,{status:t=200,origin:r=""}={}){return new Response(JSON.stringify(e),{status:t,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...qr(r)}})}n(ye,"json");async function Rt(e,{maxBytes:t=1e6}={}){let r=await e.arrayBuffer();if(r.byteLength>t)throw new Error("Request too large");let o=new TextDecoder().decode(r);try{return o?JSON.parse(o):{}}catch{throw new Error("Invalid JSON body")}}n(Rt,"readJsonBody");function Ca(e){let t=String(e?.model||"").trim();if(!t)throw new Error("Missing model");if(!tr.includes(t))throw new Error(`Model not allowed: ${t}`);return t}n(Ca,"enforceAllowedModel");function Oa(e){let t=String(e.OPENAI_API_KEY||"").trim();if(!t)throw new Error("Missing server OPENAI_API_KEY");return t}n(Oa,"requireOpenAiKey");async function Pt({request:e,env:t,pathname:r,payload:o}){let a=Oa(t);Ca(o);let i=`${rr(t.OPENAI_API_BASE)||Ta}${r}`,c=await fetch(i,{method:"POST",headers:{authorization:`Bearer ${a}`,"content-type":"application/json"},body:JSON.stringify(o)}),l=new Headers(c.headers);return l.delete("content-length"),l.set("cache-control","no-store"),new Response(c.body,{status:c.status,headers:l})}n(Pt,"proxyToOpenAi");function Ve(e){let t=e.headers.get("origin")||"";return new Response(null,{status:204,headers:{...qr(t)}})}n(Ve,"handleOptions");async function Yr(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return Ve(t);if(o!=="POST")return ye({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return ye({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await Rt(t);return await Pt({request:t,env:r,pathname:"/chat/completions",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return ye({ok:!1,error:i},{status:400,origin:a})}}n(Yr,"onRequest");var At={checkoutSession:"/api/payments/stripe/checkout/session",webhook:"/api/payments/stripe/webhook"};var me={restrictedKey:"STRIPE_RESTRICTED_KEY",secretKey:"STRIPE_SECRET_KEY",webhookSecret:"STRIPE_WEBHOOK_SECRET",checkoutPriceId:"STRIPE_CHECKOUT_PRICE_ID",checkoutCurrency:"STRIPE_CHECKOUT_CURRENCY",checkoutUnitAmount:"STRIPE_CHECKOUT_UNIT_AMOUNT",checkoutProductName:"STRIPE_CHECKOUT_PRODUCT_NAME",checkoutMode:"STRIPE_CHECKOUT_MODE",checkoutReturnOrigin:"STRIPE_CHECKOUT_RETURN_ORIGIN"},nl=[me.restrictedKey,me.secretKey,me.webhookSecret];var ot={configure:"npm run payment:stripe:configure",d1MigrateRemote:"npm run payment:d1:migrate:remote",readiness:"npm run payment:stripe:readiness",x402Configure:"npm run payment:x402:configure",x402Readiness:"npm run payment:x402:readiness",paymentReadiness:"npm run payment:readiness",applyConfirmation:"apply-stripe-payment-worker-config",writeVisibleVarsFlag:"--write-visible-vars",deployVisibleVarsFlag:"--deploy-visible-vars"};var al=[`Configure Stripe secrets on the server runtime that owns ${At.checkoutSession}.`,"Cloudflare Pages project variables are available to Pages builds/functions, but they are not read by separate Worker routes.","Stripe Projects can provision and sync credentials locally; copy only required server secret names into the payment server runtime."].join(" "),sl=[`Payment server runtime for ${At.checkoutSession}`,"not Cloudflare Pages project variables"].join("; "),va=[me.restrictedKey,me.secretKey].join(" or "),il=[me.checkoutPriceId,`${me.checkoutCurrency} + ${me.checkoutUnitAmount} + ${me.checkoutProductName}`].join(" or "),cl=[`${me.checkoutMode}=payment`,`${me.checkoutMode}=subscription with ${me.checkoutPriceId}`].join(" or "),ll=["Worker secret names","visible Worker [vars]","remote D1 payment tables","required webhook-processing columns/constraints","bounded optional hosted Checkout create-and-expire smoke"].join(" + "),pl=[ot.configure,`write visible Worker [vars] with ${ot.writeVisibleVarsFlag}`,`deploy visible Worker [vars] with ${ot.deployVisibleVarsFlag}`,`apply with -- --apply --yes --confirm=${ot.applyConfirmation}`,ot.readiness].join(" -> "),ul=[`Missing server-managed Stripe key. Set ${va} on the payment server runtime.`,"Pages project variables alone do not satisfy separate Worker routes."].join(" ");var Ia=n(e=>{let t=2166136261;for(let r=0;r<e.length;r+=1)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0},"fnv1a32");function Vr(e){return Ia(String(e??""))}n(Vr,"hashString32");function nt(e){return Vr(e).toString(16).padStart(8,"0")}n(nt,"hashStringToHex");var Ma=n(e=>e==null?"":typeof e=="boolean"?e?"1":"0":typeof e=="number"?Number.isFinite(e)?String(e):"":String(e),"normalizePrimitive"),Na=n(e=>e.map(Ma).join("|"),"buildSignatureText"),kt=n(e=>nt(Na(e)),"hashSignatureParts");var Re=n((e,t)=>kt(["agentic-commerce",e,...t]),"buildAgenticCommerceSemanticKey");var Jr="solana_pay",Xr="/api/payments/commerce/solana-pay/settle";var at="2026-01-30",Zr="1000",eo="USDC",or="https://x402.org/facilitator",to="eip155:84532",Ua="$0.001",ro="x402-payment-required",La="0x0000000000000000000000000000000000000000",Je="2026-04-08",Qr="https://ucp.dev/2026-04-08/specification/overview/",Da=["checkout"],$a=["rest"];var C={acpDiscovery:"/.well-known/acp.json",acpConfig:"/.well-known/acp-config",ucpProfile:"/.well-known/ucp",mppOpenApi:"/openapi.json",x402ApiRoot:"/api",x402ApiV1:"/api/v1",checkoutSessions:"/checkout/sessions",x402PaymentRequired:"/api/payments/commerce/x402",commerceWebhook:"/api/payments/commerce/webhook",commerceProofArtifact:"/api/payments/commerce/harness-proof.json",commerceTraceArtifact:"/api/payments/commerce/trace.jsonl",openboxIngest:"/api/payments/commerce/openbox/ingest",web3Settle:"/api/payments/commerce/web3/settle",solanaPaySettle:Xr},Ml=[C.x402ApiRoot,C.x402ApiV1,C.x402PaymentRequired],Me={sellerId:"SELLER_ID",checkoutBaseUrl:"CHECKOUT_BASE_URL",web3Enabled:"WEB3_ENABLED",web3DepositAddress:"WEB3_DEPOSIT_ADDRESS",baseRpcUrl:"BASE_RPC_URL",baseConfirmationBlocks:"BASE_CONFIRMATION_BLOCKS",easAttestUrl:"EAS_ATTEST_URL",openboxApiUrl:"OPENBOX_API_URL",openboxIngestUrl:"OPENBOX_INGEST_URL",openboxApiKey:"OPENBOX_API_KEY",stripeDelegatePaymentUrl:"STRIPE_DELEGATE_PAYMENT_URL",acpBearerToken:"ACP_BEARER_TOKEN",x402PayToAddress:"X402_PAY_TO_ADDRESS",x402Network:"X402_NETWORK",x402Asset:"X402_ASSET",x402Amount:"X402_AMOUNT",x402FacilitatorUrl:"X402_FACILITATOR_URL",x402Price:"X402_PRICE"},Ne=n((e,t)=>String(e[t]||"").trim(),"readEnvString"),oo=n((e,t)=>{let r=Ne(e,Me.sellerId);if(r)return r;try{return new URL(t).host}catch{return"knowgrph-seller"}},"readAgenticCommerceSellerId");var no=n(e=>{let t=Ne(e,Me.web3Enabled).toLowerCase();return t?t==="0"||t==="false"||t==="no"?!1:t==="1"||t==="true"||t==="yes":!0},"isAgenticCommerceWeb3Enabled");var st=n(e=>String(e||"").trim().replace(/\/+$/g,""),"normalizeAgenticCommerceBaseUrl"),ce=n((e,t)=>`${st(e)}${t}`,"buildAgenticCommerceUrl"),te=n((e,t,r,o,a=o.startsWith("/")?o:null)=>({id:t,label:r,value:o,path:a,semanticKey:Re("mainpanel-commerce-readiness-row",[e,t,r,o,a||""])}),"buildAgenticCommerceMainPanelReadinessRow"),Xe=n((e,t,r)=>({id:e,title:t,rows:r}),"buildAgenticCommerceMainPanelReadinessSection"),Ka=n(()=>{let e=[Xe("overview","Overview",[te("overview","acp-discovery","ACP discovery",`GET ${C.acpDiscovery}`,C.acpDiscovery),te("overview","acp-config","ACP config",`GET ${C.acpConfig}`,C.acpConfig),te("overview","api-version","API version",at,null)]),Xe("discovery","Discovery",[te("discovery","ucp-profile","UCP profile",C.ucpProfile),te("discovery","mpp-openapi","MPP OpenAPI",C.mppOpenApi),te("discovery","x402-payment-required","x402 payment required",C.x402PaymentRequired),te("discovery","x402-api-root","x402 API root",C.x402ApiRoot)]),Xe("sessions","Sessions",[te("sessions","checkout-sessions","Checkout sessions",C.checkoutSessions),te("sessions","stripe-webhook","Stripe webhook",At.webhook)]),Xe("web3","Web3",[te("web3","settle","Settle",C.web3Settle),te("web3","solana-pay-settle","Solana Pay settle",C.solanaPaySettle),te("web3","signals","Signals","Base RPC + Solana RPC confirmation",null)]),Xe("governance","Governance",[te("governance","openbox-ingest","OpenBOX ingest",C.openboxIngest),te("governance","risk-source","Risk source","OpenBOX risk signal",null)]),Xe("proofs","Proofs",[te("proofs","harness-proof","Harness proof",C.commerceProofArtifact),te("proofs","trace-artifact","Trace artifact",C.commerceTraceArtifact)])],t=e.flatMap(a=>a.rows),r=t.map(a=>a.path||"").filter(a=>a.length>0),o=t.filter(a=>!a.path).map(a=>`${a.label}: ${a.value}`);return{surface:"mainpanel-commerce",semanticKey:Re("mainpanel-commerce-readiness",[at,...t.map(a=>a.semanticKey)]),sections:e,routePaths:r,routeCount:r.length,signals:o}},"buildAgenticCommerceMainPanelReadiness"),Nl=Ka(),ao=n((e,t)=>{let r=Ne(e,Me.web3DepositAddress);if(/^0x[0-9a-fA-F]{40}$/.test(r))return r;let o=Re("deposit-address",[t,"0"]),a=Re("deposit-address",[t,"1"]),s=Re("deposit-address",[t,"2"]),i=Re("deposit-address",[t,"3"]),c=Re("deposit-address",[t,"4"]);return`0x${o}${a}${s}${i}${c}`.slice(0,42)},"buildAgenticCommerceDepositAddress");var so=n((e,t=ro)=>{let r=Ne(e,Me.x402PayToAddress);return/^0x[0-9a-fA-F]{40}$/.test(r)&&r.toLowerCase()!==La?r:ao(e,t)},"readAgenticCommerceX402PayToAddress"),Ul=ao({},ro),Ha=/^[a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,64}$/,io=n(e=>{let t=Ne(e,Me.x402Network);return Ha.test(t)?t:to},"readAgenticCommerceX402Network"),co=n(e=>Ne(e,Me.x402Asset)||eo,"readAgenticCommerceX402Asset"),lo=n(e=>{let t=Ne(e,Me.x402Amount);return/^[1-9][0-9]*$/.test(t)?t:Zr},"readAgenticCommerceX402Amount");var po=n(e=>{let t=Ne(e,Me.x402FacilitatorUrl);try{let r=new URL(t||or);return r.protocol==="https:"||r.protocol==="http:"?r.toString().replace(/\/+$/g,""):or}catch{return or}},"readAgenticCommerceX402FacilitatorUrl"),uo=n(e=>{let t=st(e.baseUrl);return{protocol:{name:"acp",version:at,supported_versions:[at],documentation_url:"https://agenticcommerce.dev"},api_base_url:t,transports:[...$a],capabilities:{services:[...Da],...e.web3Enabled?{extensions:[{name:"x-web3"}]}:{}},links:{config:ce(t,C.acpConfig),ucp:ce(t,C.ucpProfile),mpp:ce(t,C.mppOpenApi),x402:ce(t,C.x402PaymentRequired)}}},"buildAgenticCommerceAcpDiscovery"),mo=n(e=>{let t=st(e.baseUrl),r={acp:ce(t,C.acpDiscovery),api:ce(t,C.x402ApiRoot),checkout_sessions:ce(t,C.checkoutSessions),mpp_openapi:ce(t,C.mppOpenApi),proof:ce(t,C.commerceProofArtifact),trace:ce(t,C.commerceTraceArtifact),x402_payment_required:ce(t,C.x402PaymentRequired),solana_pay_settle:ce(t,C.solanaPaySettle)},o={checkout_sessions:!0,content_payments:!0,proof_artifacts:!0,risk_signals:!0,web3_settlement:e.web3Enabled,solana_pay:e.web3Enabled},a={"dev.ucp.shopping":[{version:Je,spec:Qr,transport:"rest",endpoint:r.api,schema:"https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json"}]};return{ucp:{version:Je,protocol_version:Je,services:a,capabilities:{"dev.ucp.shopping.checkout":[{version:Je,spec:"https://ucp.dev/2026-04-08/specification/checkout/",schema:"https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"}]},payment_handlers:{},endpoints:r},protocol_version:Je,protocol:{name:"ucp",version:Je},seller:{id:e.sellerId},services:[{id:"knowgrph-content-payments",type:"content-payments",endpoints:{x402:r.x402_payment_required,checkout_sessions:r.checkout_sessions,solana_pay_settle:r.solana_pay_settle,proof:r.proof,trace:r.trace}}],capabilities:o,endpoints:r,spec_urls:[Qr],schema_urls:["https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json","https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"]}},"buildAgenticCommerceUcpProfile"),ho=n(e=>{let t=st(e.baseUrl);return{openapi:"3.1.0",info:{title:"Knowgrph Machine Payment Protocol",version:at,description:"Machine-readable payable-operation discovery for Knowgrph commerce routes."},servers:[{url:t}],paths:{[C.x402PaymentRequired]:{get:{operationId:"getKnowgrphX402PaymentRequirement",summary:"Return x402 payment requirements for an agent-readable paid resource.","x-payment-info":{intent:"charge",method:"x402",amount:Ua,currency:"usdc"},responses:{402:{description:"Payment Required"}}}},[C.checkoutSessions]:{post:{operationId:"createKnowgrphCommerceCheckoutSession",summary:"Create an agentic commerce checkout session.","x-payment-info":{intent:"session",method:"stripe",amount:"dynamic",currency:"request.currency"},responses:{201:{description:"Checkout session created"}}}},[C.solanaPaySettle]:{post:{operationId:"settleKnowgrphSolanaPayCheckoutSession",summary:"Settle an agentic commerce checkout session from a verified Solana Pay transaction signature.","x-payment-info":{intent:"settlement",method:Jr,amount:"dynamic",currency:"request.currency"},responses:{200:{description:"Solana Pay session settled"},409:{description:"Solana Pay transaction is not confirmed yet"},422:{description:"Solana Pay transaction does not match the session"}}}}}}},"buildAgenticCommerceMppOpenApi"),go=n(e=>{let t=st(e.baseUrl),r=ce(t,C.x402PaymentRequired),o=String(e.amount||Zr);return{x402Version:2,error:"Payment required",resource:{url:r,description:"Knowgrph agentic commerce paid-resource readiness probe",mimeType:"application/json"},accepts:[{scheme:"exact",network:String(e.network||to),amount:o,maxAmountRequired:o,asset:String(e.asset||eo),resource:r,mimeType:"application/json",payTo:e.payTo,maxTimeoutSeconds:300,extra:{name:"USDC",version:"2",resourceUrl:r,...e.facilitatorUrl?{facilitatorUrl:e.facilitatorUrl}:{}}}]}},"buildAgenticCommerceX402PaymentRequired");var ja=n(e=>JSON.stringify(e,null,2),"jsonBody"),Ba=n(e=>String(e||"").trim().replace(/\/+$/g,""),"trimOrigin"),Ga=n(e=>typeof btoa=="function"?btoa(e):typeof Buffer<"u"?Buffer.from(e).toString("base64"):"","encodeBase64"),Wa=n((e,t)=>{try{return new URL(e).origin}catch{return Ba(t)}},"rootOriginFromRequest"),nr=n((e={})=>{let t=Wa(e.requestUrl,e.origin),r=e.env||{},o=oo(r,`${t}/`),a=no(r),s=go({baseUrl:t,payTo:so(r),network:io(r),asset:co(r),amount:lo(r),facilitatorUrl:po(r)});return{acpDiscovery:uo({sellerId:o,baseUrl:t,web3Enabled:a}),ucpProfile:mo({sellerId:o,baseUrl:t,web3Enabled:a}),mppOpenApi:ho({baseUrl:t}),x402PaymentRequired:s}},"buildKnowgrphCommerceDiscovery");var fo=n((e,t={})=>{let r=nr({requestUrl:e?.url,env:t}).x402PaymentRequired,o=Ga(JSON.stringify(r));return new Response(ja(r),{status:402,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*",...o?{"payment-required":o}:{}}})},"buildKnowgrphX402PaymentRequiredResponse");async function yo(e){return fo(e.request,e.env||{})}n(yo,"onRequest");async function wo(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=t.headers.get("origin")||"";return r==="OPTIONS"?Ve(t):r!=="GET"&&r!=="HEAD"?ye({ok:!1,error:"Method not allowed"},{status:405,origin:o}):ye({ok:!0,models:tr.map(a=>({model:a,display_name:a}))},{status:200,origin:o})}n(wo,"onRequest");async function So(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return Ve(t);if(o!=="POST")return ye({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return ye({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await Rt(t);return await Pt({request:t,env:r,pathname:"/responses",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return ye({ok:!1,error:i},{status:400,origin:a})}}n(So,"onRequest");var Qe=Object.freeze({researchSourceFiles:"knowgrph_research_source_files",inspectAgentSurface:"knowgrph_inspect_agent_surface"}),ar=n(e=>String(e||"").trim(),"normalizeString"),Fa=n(e=>({...e,arguments:Array.isArray(e.arguments)?e.arguments.map(t=>({...t})):void 0,_meta:e._meta&&typeof e._meta=="object"?{...e._meta,tools:Array.isArray(e._meta.tools)?[...e._meta.tools]:void 0}:void 0}),"clonePrompt"),bo=Object.freeze([Object.freeze({name:Qe.researchSourceFiles,title:"Research Knowgrph Source Files",description:"Guide an MCP host through read-only Knowgrph Source Files research using search and fetch with citation-ready URLs.",arguments:Object.freeze([Object.freeze({name:"query",description:"Research question or topic to pass to the read-only search tool.",required:!0}),Object.freeze({name:"limit",description:"Optional decimal string for the maximum search results to inspect.",required:!1}),Object.freeze({name:"focus",description:"Optional aspect to prioritize when reading fetched Source Files.",required:!1})]),_meta:Object.freeze({readOnly:!0,tools:Object.freeze(["search","fetch"])})}),Object.freeze({name:Qe.inspectAgentSurface,title:"Inspect Knowgrph Agent Surface",description:"Guide an MCP host through read-only inspection of Knowgrph agent, MCP, and MCP Apps readiness metadata.",arguments:Object.freeze([Object.freeze({name:"focus",description:"Optional readiness area to emphasize, such as transport, tools, resources, prompts, retrieval, or app metadata.",required:!1})]),_meta:Object.freeze({readOnly:!0,tools:Object.freeze(["inspect_agent_surface"])})})]),Ro=n(()=>bo.map(Fa),"buildKnowgrphAgentReadyPromptContracts"),za=n(e=>bo.find(t=>t.name===ar(e))||null,"findPromptContract"),xt=n((e,t)=>!e||typeof e!="object"?"":ar(e[t]),"readPromptArg"),qa=n((e,t)=>{let r=xt(e,t);if(!r)throw new Error(`Missing required prompt argument: ${t}`);return r},"readRequiredPromptArg"),_o=n(e=>({role:"user",content:{type:"text",text:e}}),"buildPromptMessage"),Ya=n((e={})=>{let t=qa(e,"query"),r=xt(e,"limit"),o=xt(e,"focus");return[`Research Knowgrph Source Files for: ${t}`,"","Use the MCP server read-only retrieval path:",`1. Call search with query=${JSON.stringify(t)}${r?` and limit=${JSON.stringify(r)}`:""}.`,"2. Select the most relevant returned ids and call fetch for each id before answering.","3. Ground the answer in fetched markdown content and cite the returned result URLs when summarizing.",o?`4. Prioritize this focus: ${o}.`:"","","Do not mutate graph, canvas, workspace, storage, or browser-local state for this research prompt."].filter(Boolean).join(`
`)},"buildSourceFilesResearchPromptText"),Va=n((e={})=>{let t=xt(e,"focus");return["Inspect the Knowgrph agent-ready surface through the read-only inspect_agent_surface tool.","","Review health, API catalog, MCP server card, A2A card, agent skills, commerce discovery, and mcpAppsServerReadiness.","For MCP Apps readiness, verify tool/resource linkage, output schema, text fallback, structured content, sandbox/security metadata, no-auth security-scheme mirroring, widget accessibility, prompts, search/fetch retrieval, Streamable HTTP, and local stdio support.",t?`Emphasize this readiness area: ${t}.`:"","","Report checklist ids and evidence from structuredContent. Do not infer readiness from prose alone."].filter(Boolean).join(`
`)},"buildAgentSurfaceInspectionPromptText"),Po=n((e,t={})=>{let r=za(e);if(!r)throw new Error(`Unknown Knowgrph MCP prompt: ${ar(e)}`);if(r.name===Qe.researchSourceFiles)return{description:r.description,messages:[_o(Ya(t))]};if(r.name===Qe.inspectAgentSurface)return{description:r.description,messages:[_o(Va(t))]};throw new Error(`Unhandled Knowgrph MCP prompt: ${r.name}`)},"getKnowgrphAgentReadyPrompt");var Ja=Object.freeze({sourceFileById:"knowgrph_source_file_by_id"}),Tt="kgdoc://source-file/{id}",Ao="kgdoc://source-file/",ko="text/markdown",it=n(e=>String(e||"").trim(),"normalizeString"),xo=n(()=>[{uriTemplate:Tt,name:Ja.sourceFileById,title:"Knowgrph Source File By ID",description:"Read a complete published Knowgrph Source File markdown document using a stable kgdoc id returned by search.",mimeType:ko,annotations:{audience:["user","assistant"],priority:.8},_meta:{readOnly:!0,source:"knowgrph-source-files",tool:"fetch"}}],"buildKnowgrphAgentReadyResourceTemplateContracts");var To=n(e=>{let t=it(e);if(!t.startsWith(Ao))return"";let r=t.slice(Ao.length);if(!r)return"";try{return decodeURIComponent(r)}catch{return r}},"parseKnowgrphSourceFileResourceUri"),Eo=n(({uri:e,sourceFile:t}={})=>{let r=typeof t?.content=="string"?t.content:String(t?.text||"");return{contents:[{uri:it(e),mimeType:ko,text:r,_meta:{id:it(t?.id),title:it(t?.title),url:it(t?.url),metadata:t?.metadata&&typeof t.metadata=="object"?{...t.metadata}:{}}}]}},"buildKnowgrphSourceFileResourceReadResult");var Ct="io.modelcontextprotocol/ui",je="text/html;profile=mcp-app",Mo="2026-01-26",Xa="knowgrph-mcp-apps-server-readiness/v0.1",le="ui://knowgrph/agent-ready",cr="knowgrph-agent-ready",Be="inspect_agent_surface",we=Object.freeze(["search","fetch"]),sr=Object.freeze({search:Object.freeze(["ids"]),fetch:Object.freeze(["id","title","content","text"])}),Co=Object.freeze(Object.values(Qe)),xe="streamable-http",Qa=Object.freeze([Object.freeze({type:"noauth"})]),ae=Object.freeze({openAiApps:"openai-apps",claude:"claude-mcp-connector",qwenCode:"qwen-code",kimiCli:"kimi-cli",bytePlusModelArk:"byteplus-modelark",generic:"generic-mcp"}),H=n(e=>String(e||"").trim(),"normalizeString"),Et=n(e=>H(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),"escapeHtml"),Za=n(e=>JSON.stringify(e).replace(/</g,"\\u003c"),"safeJsonForInlineScript"),es=n(e=>{let t=H(e);if(!t)return"";try{return new URL(t).origin}catch{return""}},"readUrlOrigin"),lr=n(()=>({extensions:{[Ct]:{mimeTypes:[je]}}}),"buildKnowgrphMcpAppsCapabilities"),re=n(e=>Array.isArray(e)?e:[],"arrayFrom"),Ot=n(()=>Qa.map(e=>({...e})),"buildKnowgrphMcpNoauthSecuritySchemes"),No=n(e=>(Array.isArray(e)&&e.length?e:Ot()).filter(r=>r&&typeof r=="object").map(r=>({...r})),"normalizeSecuritySchemes"),Oo=n(e=>re(e).some(t=>t?.type==="noauth"),"hasNoauthSecurityScheme"),vo=n(e=>Array.isArray(e)?No(e):[],"readSecuritySchemes"),ts=n(e=>{let t=H(e);return t.includes("window.openai")&&t.includes("openai:set_globals")&&t.includes("toolInput")&&t.includes("toolOutput")&&t.includes("callTool")&&t.includes("request('ui/initialize'")},"hasOpenAiWidgetBridgeHtml"),Io=n((e,t=[])=>e?.outputSchema?.type==="object"&&t.every(r=>re(e.outputSchema?.required).includes(r)),"hasToolOutputSchemaFields"),ir=n(e=>e?.annotations?.readOnlyHint===!0&&e?.annotations?.destructiveHint===!1&&e?.annotations?.openWorldHint===!1&&e?.annotations?.idempotentHint===!0,"hasReadOnlyToolAnnotations"),z=n((e,t,r,o=[])=>({id:e,label:t,ok:r===!0,evidence:re(o).map(H).filter(Boolean)}),"booleanCheck"),pr=n((e={})=>{let t=H(e.baseUrl).replace(/\/+$/,""),r=H(e.serverName)||"knowgrph",o=H(e.mcpUrl)||(t?`${t}/mcp`:"");return{[ae.openAiApps]:{id:ae.openAiApps,label:"OpenAI Apps / ChatGPT",transport:xe,url:o,appResourceUri:le,appToolName:Be,requiredMetadata:["openai/outputTemplate","openai/widgetAccessible","openai/widgetCSP","openai/widgetDomain"],requiredTools:[Be,...we]},[ae.claude]:{id:ae.claude,label:"Claude MCP connector",transport:xe,url:o,beta:"mcp-client-2025-11-20",mcp_servers:[{type:"url",url:o,name:r}],tools:[{type:"mcp_toolset",mcp_server_name:r}],requiredTools:we},[ae.qwenCode]:{id:ae.qwenCode,label:"Qwen Code",transport:"http",url:o,command:`qwen mcp add --transport http ${r} ${o}`,settingsJson:{mcpServers:{[r]:{httpUrl:o,timeout:3e4,trust:!1,includeTools:["search","fetch",Be]}}},requiredTools:we,primaryFlow:"Call search with a natural-language query, then call fetch with the returned kgdoc id."},[ae.kimiCli]:{id:ae.kimiCli,label:"Kimi CLI",transport:"http",url:o,command:`kimi mcp add --transport http ${r} ${o}`,configFile:"~/.kimi/mcp.json",mcpJson:{mcpServers:{[r]:{url:o,transport:"http"}}},requiredTools:we,primaryFlow:"Call search with a natural-language query, then call fetch with the returned kgdoc id."},[ae.bytePlusModelArk]:{id:ae.bytePlusModelArk,label:"BytePlus ModelArk Responses API",transport:xe,url:o,apiBaseUrl:"https://ark.ap-southeast.bytepluses.com/api/v3",endpoint:"/responses",requiredHeaders:{"ark-beta-mcp":"true"},tools:[{type:"mcp",server_label:r,server_url:o,require_approval:"never"}],openAiCompatible:{base_url:"https://ark.ap-southeast.bytepluses.com/api/v3",default_headers:{"ark-beta-mcp":"true"},responsesCreate:{model:"<MODELARK_MODEL_OR_ENDPOINT_ID>",tools:[{type:"mcp",server_label:r,server_url:o,require_approval:"never"}]}},invocationScope:"ModelArk Responses API with MCP service and model permissions enabled.",requiredTools:we,primaryFlow:"Use ModelArk Responses API with the Knowgrph MCP tool entry, then ask the model to call search and fetch."},[ae.generic]:{id:ae.generic,label:"Generic MCP clients",transport:xe,url:o,initialize:{method:"initialize",accept:["application/json","text/event-stream"]},requiredMethods:["initialize","notifications/initialized","tools/list","tools/call"],optionalMethods:["prompts/list","prompts/get","resources/list","resources/templates/list","resources/read"],requiredTools:we}}},"buildKnowgrphMcpClientSetups"),Uo=n((e={})=>{let t=H(e.baseUrl).replace(/\/+$/,""),r=H(e.updatedAt),o=e.mcpServerCard&&typeof e.mcpServerCard=="object"?e.mcpServerCard:{},a=o.capabilities&&typeof o.capabilities=="object"?o.capabilities:{},s=re(e.tools).length?re(e.tools):re(a.tools),i=re(e.resources).length?re(e.resources):[vt({appUrl:t,updatedAt:r})],c=re(e.prompts).length?re(e.prompts):re(o.prompts),l=re(e.resourceTemplates).length?re(e.resourceTemplates):re(o.resourceTemplates),h=s.filter(f=>f?._meta?.ui?.resourceUri===le),u=h.find(f=>f?.name===Be)||h[0]||null,y=i.find(f=>f?.uri===le)||null,P=a.extensions?.[Ct],S=H(o.transport?.url)||(t?`${t}/mcp`:""),A=H(o.transport?.type)||xe,$=H(e.appResourceHtml)||$o({appUrl:t,updatedAt:r,toolName:u?.name||Be}),M=e.clientSetups&&typeof e.clientSetups=="object"?e.clientSetups:pr({baseUrl:t,mcpUrl:S,serverName:o.serverInfo?.name}),K=u?.outputSchema&&typeof u.outputSchema=="object",oe=!!u?.name,W=K,T=u?._meta?.["openai/outputTemplate"]===le,E=ts($),Q=Oo(u?.securitySchemes)&&Oo(u?._meta?.securitySchemes),N=ir(u),V=u?._meta?.["openai/widgetAccessible"]===!0,B=c.map(f=>H(f?.name)).filter(Boolean),I=o.capabilities?.prompts&&typeof o.capabilities.prompts=="object",U=Co.every(f=>B.includes(f)),G=l.map(f=>H(f?.uriTemplate)).filter(Boolean),ne=G.includes(Tt),fe=Object.fromEntries(we.map(f=>[f,s.find(v=>v?.name===f)||null])),be=we.every(f=>{let v=fe[f];return ir(v)&&Io(v,sr[f])}),ie=M[ae.qwenCode],Ie=ie?.transport==="http"&&ie?.url===S&&ie?.settingsJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.httpUrl===S&&String(ie?.command||"").includes("--transport http")&&String(ie?.command||"").includes(S),b=M[ae.kimiCli],g=b?.transport==="http"&&b?.url===S&&b?.mcpJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.url===S&&b?.mcpJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.transport==="http"&&String(b?.command||"").includes("kimi mcp add --transport http")&&String(b?.command||"").includes(S),p=M[ae.bytePlusModelArk],m=p?.transport===xe&&p?.url===S&&p?.endpoint==="/responses"&&p?.requiredHeaders?.["ark-beta-mcp"]==="true"&&re(p?.tools).some(f=>f?.type==="mcp"&&f?.server_label===(o.serverInfo?.name||"knowgrph")&&f?.server_url===S&&f?.require_approval==="never")&&p?.openAiCompatible?.responsesCreate?.tools?.some(f=>f?.type==="mcp"&&f?.server_label===(o.serverInfo?.name||"knowgrph")&&f?.server_url===S&&f?.require_approval==="never"),w=[z("app-tool-resource-link","App tool is linked to the UI resource",h.length>0,h.map(f=>f.name)),z("output-schema","App tool exposes an output schema",K,[u?.name]),z("text-fallback","Tool result keeps a text fallback for non-UI hosts",oe,[u?.name]),z("structured-content","Tool result returns structured content for the View",W,[u?.name]),z("resource-descriptor","MCP resource descriptor uses the MCP Apps MIME type",y?.mimeType===je,[y?.uri]),z("resource-security-meta","Resource declares UI sandbox metadata",y?._meta?.ui?.prefersBorder===!0&&!!y?._meta?.ui?.csp,[y?.uri]),z("openai-output-template","App tool exposes the OpenAI output template metadata key",T,[u?.name]),z("openai-widget-bridge","App resource supports the OpenAI Apps widget bridge",E,["window.openai","openai:set_globals"]),z("tool-security-schemes","App tool exposes no-auth securitySchemes and mirrors them in _meta",Q,[u?.name]),z("tool-impact-annotations","App tool exposes complete read-only impact annotations",N,[u?.name]),z("widget-accessible","App tool allows the widget bridge to call tools",V,[u?.name]),z("prompt-discovery","Server exposes MCP prompt templates for multi-host guidance",I&&U,B),z("source-file-resource-template","Server exposes a dynamic Source Files resource template",ne,G),z("deep-research-search-fetch","Server exposes read-only search and fetch tools",be,we),z("qwen-code-http-client-setup","Server advertises Qwen Code HTTP MCP setup",Ie,[ie?.command]),z("kimi-cli-http-client-setup","Server advertises Kimi CLI HTTP MCP setup",g,[b?.command]),z("byteplus-modelark-responses-mcp-setup","Server advertises BytePlus ModelArk Responses API MCP setup",m,[p?.apiBaseUrl,p?.endpoint]),z("extension-capability","Server advertises the MCP Apps extension capability",P?.mimeTypes?.includes(je),[Ct]),z("streamable-http-transport","Server exposes a stateless Streamable HTTP JSON-RPC transport",!!S&&A===xe,[S,A]),z("stdio-transport","Repo-local MCP server supports stdio host configuration",e.localStdio!==!1,["node mcp/server.js"])],_=w.every(f=>f.ok);return{schemaVersion:Xa,ready:_,updatedAt:r,app:{name:cr,protocolVersion:Mo,resourceUri:le,resourceMimeType:je,extensionId:Ct},tool:{name:u?.name||Be,title:u?.title||"Inspect Agent Surface",resourceUri:u?._meta?.ui?.resourceUri||le,visibility:re(u?._meta?.ui?.visibility).length?u._meta.ui.visibility:["model","app"],readOnly:u?.annotations?.readOnlyHint===!0,destructive:u?.annotations?.destructiveHint===!0,openWorld:u?.annotations?.openWorldHint===!0,idempotent:u?.annotations?.idempotentHint===!0,annotationsReady:N,hasOutputSchema:!!K,textFallback:oe,structuredContent:W,openAiOutputTemplate:T,openAiWidgetBridge:E,securitySchemes:vo(u?.securitySchemes),mirroredSecuritySchemes:vo(u?._meta?.securitySchemes),widgetAccessible:V},resource:{uri:y?.uri||le,name:y?.name||cr,mimeType:y?.mimeType||je,prefersBorder:y?._meta?.ui?.prefersBorder===!0,domain:H(y?._meta?.ui?.domain),csp:y?._meta?.ui?.csp||{},openAiWidgetBridge:E},retrieval:{mode:"deep-research-search-fetch",requiredTools:we,tools:we.map(f=>{let v=fe[f];return{name:f,readOnly:v?.annotations?.readOnlyHint===!0,destructive:v?.annotations?.destructiveHint===!0,openWorld:v?.annotations?.openWorldHint===!0,idempotent:v?.annotations?.idempotentHint===!0,annotationsReady:ir(v),requiredOutputFields:sr[f],outputSchemaReady:Io(v,sr[f])}})},prompts:{requiredPrompts:Co,names:B,capability:!!I,ready:I&&U},resourceTemplates:{requiredTemplates:[Tt],uriTemplates:G,ready:ne},clients:M,transports:[{id:"pages-http-jsonrpc",type:A,url:S,stateless:!0,serverFactory:!0},{id:"local-stdio-jsonrpc",type:"stdio",command:"node mcp/server.js",stateless:!1,serverFactory:!0}],dataModel:{source:"inspect_agent_surface.structuredContent",categories:[{id:"discovery",label:"Discovery metadata",count:["health","apiCatalog","openApi","mcpServerCard","agentCard","agentSkills"].length},{id:"commerce",label:"Commerce discovery",count:["acpDiscovery","ucpProfile","mppOpenApi"].length},{id:"mcp-apps",label:"MCP Apps server bindings",count:w.length}],renderMode:"structured-summary-with-json-fallback"},checklist:w}},"buildKnowgrphMcpAppsServerReadiness"),Lo=n((e={})=>{let t=H(e.resourceUri)||le;return{securitySchemes:No(e.securitySchemes),ui:{resourceUri:t,visibility:Array.isArray(e.visibility)&&e.visibility.length?e.visibility:["model","app"]},"openai/outputTemplate":t,"openai/widgetAccessible":e.widgetAccessible!==!1,"openai/toolInvocation/invoking":H(e.invoking)||"Inspecting Knowgrph.","openai/toolInvocation/invoked":H(e.invoked)||"Knowgrph is ready."}},"buildKnowgrphMcpAppsToolMeta"),Do=Object.freeze({type:"object",additionalProperties:!0,required:["baseUrl","healthUrl","mcpUrl"],properties:{baseUrl:{type:"string"},healthUrl:{type:"string"},mcpUrl:{type:"string"},apiCatalogUrl:{type:"string"},openApiUrl:{type:"string"},mcpServerCardUrl:{type:"string"},agentCardUrl:{type:"string"},agentSkillsUrl:{type:"string"},commerceUrls:{type:"object",additionalProperties:{type:"string"}},health:{type:"object",additionalProperties:!0},apiCatalog:{type:"object",additionalProperties:!0},openApi:{type:"object",additionalProperties:!0},mcpServerCard:{type:"object",additionalProperties:!0},agentCard:{type:"object",additionalProperties:!0},agentSkills:{type:"object",additionalProperties:!0},commerce:{type:"object",additionalProperties:!0},mcpAppsServerReadiness:{type:"object",additionalProperties:!0}}}),vt=n((e={})=>{let t=H(e.appUrl),r=H(e.updatedAt),o=H(e.domain)||es(t),a={connectDomains:[],resourceDomains:[],frameDomains:[],baseUriDomains:[]};return{uri:le,name:cr,description:["Interactive MCP Apps view for the existing Knowgrph agent-ready surface.",t?`App URL: ${t}`:"",r?`Updated: ${r}`:""].filter(Boolean).join(" "),mimeType:je,_meta:{ui:{csp:a,...o?{domain:o}:{},prefersBorder:!0},"openai/widgetDescription":"Interactive Knowgrph agent-ready server-readiness view.","openai/widgetPrefersBorder":!0,...o?{"openai/widgetDomain":o}:{},"openai/widgetCSP":{connect_domains:a.connectDomains,resource_domains:a.resourceDomains,frame_domains:a.frameDomains}}}},"buildKnowgrphMcpAppsResourceDescriptor"),$o=n((e={})=>{let t=H(e.appUrl),r=H(e.updatedAt),o=H(e.toolName)||Be,a=Array.isArray(e.toolNames)?e.toolNames.map(H).filter(Boolean):[o],s={appUrl:t,updatedAt:r,resourceUri:le,toolName:o,toolNames:a,protocolVersion:Mo};return`<!doctype html>
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
        ${t?`<a href="${Et(t)}" target="_blank" rel="noreferrer">Open</a>`:""}
      </nav>
    </header>
    <section aria-label="MCP app state">
      <dl>
        <dt>Resource</dt><dd>${Et(le)}</dd>
        <dt>Tool</dt><dd>${Et(o)}</dd>
        <dt>Host</dt><dd id="host">Not connected.</dd>
        <dt>Updated</dt><dd>${Et(r||"runtime")}</dd>
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
    const boot = ${Za(s)};
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
</html>`},"buildKnowgrphMcpAppsHtml"),ur=n((e={})=>{let t=vt(e);return{contents:[{uri:t.uri,mimeType:je,text:$o(e),_meta:t._meta}]}},"buildKnowgrphMcpAppsResourceReadResult");var rs="/api/payments/strybord",Ue=Object.freeze({runWrite:"knowgrph:run.write",renderWrite:"knowgrph:render.write",publishWrite:"knowgrph:publish.write",payoutWrite:"knowgrph:payout.write"}),O=Object.freeze({startStoryboardRun:"start_storyboard_run",advanceLane:"advance_lane",submitResearchQuery:"submit_research_query",proposeBudget:"propose_budget",requestHumanGate:"request_human_gate",getGateDecision:"get_gate_decision",enqueueRender:"enqueue_render",publishAsset:"publish_asset",settlePayout:"settle_payout",getRunState:"get_run_state"}),os=Object.freeze([O.startStoryboardRun,O.advanceLane,O.submitResearchQuery,O.proposeBudget,O.requestHumanGate,O.enqueueRender,O.publishAsset,O.settlePayout]),ns=new Set(os),Ko=n(e=>ns.has(String(e||"").trim()),"isStrybordMutatingMcpActionToolId"),mp=Object.freeze(["Brief","Research","Storyboard","Storytree","Proof","CTA","Budget","Render","Publish"]),hp=Object.freeze(["pending","running","awaiting_gate","blocked","succeeded","failed","cancelled"]),gp=Object.freeze(["budget","proof","publish","render","compliance"]),fp=Object.freeze(["pending","approved","rejected","expired"]),yp=Object.freeze(["pending","settled","failed","reversed","held"]);var dr=n(e=>`${rs}/mcp-tools/${encodeURIComponent(String(e||"").trim())}`,"buildStrybordMcpToolPath"),Ho=Object.freeze({[O.startStoryboardRun]:{title:"Start Storyboard Run",scope:Ue.runWrite,mutating:!0,description:"Create a dual-persisted StoryboardRun and start the Storyboard Studio OS orchestration loop."},[O.advanceLane]:{title:"Advance Storyboard Run Lane",scope:Ue.runWrite,mutating:!0,description:"Advance a StoryboardRun to the next lane, enforcing iteration bounds and gate state."},[O.submitResearchQuery]:{title:"Submit Strybord Research Query",scope:Ue.runWrite,mutating:!0,description:"Record a research-lane request for a StoryboardRun."},[O.proposeBudget]:{title:"Propose Strybord Budget",scope:Ue.runWrite,mutating:!0,description:"Record a provider-neutral budget estimate before paid render."},[O.requestHumanGate]:{title:"Request Human Gate",scope:Ue.runWrite,mutating:!0,description:"Open or update a human-in-the-loop Budget, Proof, Publish, Render, or Compliance gate."},[O.getGateDecision]:{title:"Get Human Gate Decision",scope:"knowgrph:read",mutating:!1,description:"Read the current decision for a human-in-the-loop gate."},[O.enqueueRender]:{title:"Enqueue Strybord Render",scope:Ue.renderWrite,mutating:!0,description:"Create a render job placeholder only after the Budget gate is approved."},[O.publishAsset]:{title:"Publish Strybord Asset",scope:Ue.publishWrite,mutating:!0,description:"Publish a render artifact only after Proof and Publish gates are approved."},[O.settlePayout]:{title:"Settle Strybord Payout",scope:Ue.payoutWrite,mutating:!0,description:"Settle the creator revenue share at the default 80/20 split through payment-worker ownership."},[O.getRunState]:{title:"Get Storyboard Run State",scope:"knowgrph:read",mutating:!1,description:"Read the D1-authoritative StoryboardRun state and gate/payout summary."}});var d=Object.freeze({search:"search",fetch:"fetch",listSourceFiles:"list_source_files",readSourceFile:"read_source_file",readSharedDocument:"read_shared_document",inspectSharedDocumentStructure:"inspect_shared_document_structure",inspectLocalSettingsChatReadiness:"inspect_local_settings_chat_readiness",inspectLocalMainPanelState:"inspect_local_mainpanel_state",inspectLocalEditorWorkspaceState:"inspect_local_editor_workspace_state",inspectLocalChatPipelineState:"inspect_local_chat_pipeline_state",inspectLocalMainPanelChatCanvasPipeline:"inspect_local_mainpanel_chat_canvas_pipeline",inspectLocalWorkspaceDocument:"inspect_local_workspace_document",inspectLocalCanvasTopology:"inspect_local_canvas_topology",inspectLocalCanvasSnapshot:"inspect_local_canvas_snapshot",inspectLocal3dCameraPose:"inspect_local_3d_camera_pose",inspectLocal3dLayoutPositions:"inspect_local_3d_layout_positions",inspectLocal2dZoomViewport:"inspect_local_2d_zoom_viewport",inspectLocalSourceFilesSnapshot:"inspect_local_source_files_snapshot",inspectAgentSurface:"inspect_agent_surface",...O}),as="knowgrph";var ss=n(()=>Object.freeze({readOnlyHint:!0,destructiveHint:!1,openWorldHint:!1,idempotentHint:!0}),"buildReadOnlyToolAnnotations"),q=ss(),is=n(()=>Object.freeze({readOnlyHint:!1,destructiveHint:!0,openWorldHint:!1,idempotentHint:!0}),"buildMutatingToolAnnotations"),cs=is(),ls=n(e=>[{type:"http",scheme:"bearer",bearerFormat:"opaque",scopes:e?[e]:[]}],"buildKnowgrphMcpBearerSecuritySchemes"),Pe=n(e=>{let t=Ho[e]||{},r=Ko(e);return{name:e,webName:Y(e),title:t.title||e,description:t.description||"Storyboard Studio OS action tool.",inputSchema:{type:"object",additionalProperties:!0,properties:{runId:{type:"string"},idempotencyKey:{type:"string"}}},outputSchema:{type:"object",additionalProperties:!0,required:["ok","apiVersion"],properties:{ok:{type:"boolean"},apiVersion:{type:"string"}}},annotations:r?cs:q,securitySchemes:r?ls(t.scope):Ot()}},"buildStrybordActionToolContract"),ps=Object.freeze({type:"object",additionalProperties:!0,required:["ids","results"],properties:{ids:{type:"array",items:{type:"string"}},results:{type:"array",items:{type:"object",additionalProperties:!0,required:["id","title","url"],properties:{id:{type:"string"},title:{type:"string"},url:{type:"string"},snippet:{type:"string"},workspaceId:{type:"string"},canonicalPath:{type:"string"}}}}}}),us=Object.freeze({type:"object",additionalProperties:!0,required:["id","title","content","text","url"],properties:{id:{type:"string"},title:{type:"string"},content:{type:"string"},text:{type:"string"},url:{type:"string"},metadata:{type:"object",additionalProperties:!0}}}),Y=n((e,t=as)=>`${String(t||"").trim()}.${String(e||"").trim()}`,"buildKnowgrphWebMcpToolName"),mr=n((e={})=>{let t=String(e.defaultWorkspaceId||"").trim(),r=e.includeBrowserOnlyTools===!0;return[{name:d.search,webName:Y(d.search),title:"Search Knowgrph Source Files",description:"Use this when an MCP host needs to search published Knowgrph Source Files and return stable document IDs for the `fetch` tool. Call this first for OpenAI Deep Research-style retrieval, Claude, Qwen Code, Kimi CLI, BytePlus ModelArk, and generic MCP clients.",inputSchema:{type:"object",additionalProperties:!1,required:["query"],properties:{query:{type:"string"},limit:{type:"number",default:10}}},outputSchema:ps,annotations:q},{name:d.fetch,webName:Y(d.fetch),title:"Fetch Knowgrph Source File",description:"Use this when an MCP host needs the complete published Knowgrph Source File for an ID returned by `search`. Returns markdown as both `content` and `text` for OpenAI, Claude, Qwen Code, Kimi CLI, BytePlus ModelArk, and generic MCP clients.",inputSchema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"string"}}},outputSchema:us,annotations:q},{name:d.listSourceFiles,webName:Y(d.listSourceFiles),title:"List Source Files",description:"Use this when an MCP host needs the published Knowgrph Source Files index as markdown.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:d.readSourceFile,webName:Y(d.readSourceFile),title:"Read Source File",description:"Use this when an MCP host knows a published Knowgrph canonical path and needs that Editor Workspace markdown content. Defaults to the canonical docs workspace when workspaceId is omitted.",inputSchema:{type:"object",additionalProperties:!1,required:["canonicalPath"],properties:{canonicalPath:{type:"string"},workspaceId:t?{type:"string",default:t}:{type:"string"}}},annotations:q},{name:d.readSharedDocument,webName:Y(d.readSharedDocument),title:"Read Shared Document",description:"Use this when an MCP host has a Knowgrph share token or public Knowgrph share/document URL and needs the published markdown content.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:q},{name:d.inspectSharedDocumentStructure,webName:Y(d.inspectSharedDocumentStructure),title:"Inspect Shared Document Structure",description:"Use this when an MCP host has a Knowgrph share token or public Knowgrph share/document URL and needs frontmatter/body structure without mutating the document.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:q},Pe(O.startStoryboardRun),Pe(O.advanceLane),Pe(O.submitResearchQuery),Pe(O.proposeBudget),Pe(O.requestHumanGate),Pe(O.getGateDecision),Pe(O.enqueueRender),Pe(O.publishAsset),Pe(O.settlePayout),Pe(O.getRunState),...r?[{name:d.inspectLocalSettingsChatReadiness,webName:Y(d.inspectLocalSettingsChatReadiness),title:"Inspect Local Settings Chat Readiness",description:"Inspect the active browser-local Knowgrph SettingsView chat readiness state for MainPanel MCP, Integrations, and Commerce, including provider, routing, and model discovery status.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:d.inspectLocalMainPanelState,webName:Y(d.inspectLocalMainPanelState),title:"Inspect Local MainPanel State",description:"Inspect the active browser-local Knowgrph MainPanel tab, search, and shared action state for MCP, Integrations, and Commerce readiness.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:d.inspectLocalEditorWorkspaceState,webName:Y(d.inspectLocalEditorWorkspaceState),title:"Inspect Local Editor Workspace State",description:"Inspect the active browser-local Knowgrph Editor Workspace and Markdown pane state, including pane visibility and live draft/frontmatter structure.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:d.inspectLocalChatPipelineState,webName:Y(d.inspectLocalChatPipelineState),title:"Inspect Local Chat Pipeline State",description:"Inspect the active browser-local Knowgrph FloatingPanel chat runtime, including streaming, workspace follow path, and LLM-to-workspace pipeline state.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:d.inspectLocalMainPanelChatCanvasPipeline,webName:Y(d.inspectLocalMainPanelChatCanvasPipeline),title:"Inspect Local MainPanel Chat Canvas Pipeline",description:"Inspect the active browser-local Knowgrph E2E readiness path from MainPanel MCP, Integrations, and Commerce through FloatingPanel Chat, workspace markdown/frontmatter, and canvas topology.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:d.inspectLocalWorkspaceDocument,webName:Y(d.inspectLocalWorkspaceDocument),title:"Inspect Local Workspace Document",description:"Inspect the active browser-local Knowgrph workspace markdown document structure without reading published storage routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:d.inspectLocalCanvasTopology,webName:Y(d.inspectLocalCanvasTopology),title:"Inspect Local Canvas Topology",description:"Inspect the active browser-local Knowgrph canvas topology summary from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:d.inspectLocalCanvasSnapshot,webName:Y(d.inspectLocalCanvasSnapshot),title:"Inspect Local Canvas Snapshot",description:"Inspect the active browser-local Knowgrph canvas SVG snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:d.inspectLocal3dCameraPose,webName:Y(d.inspectLocal3dCameraPose),title:"Inspect Local 3D Camera Pose",description:"Inspect the active browser-local Knowgrph 3D camera pose from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:d.inspectLocal3dLayoutPositions,webName:Y(d.inspectLocal3dLayoutPositions),title:"Inspect Local 3D Layout Positions",description:"Inspect the active browser-local Knowgrph 3D layout positions from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:d.inspectLocal2dZoomViewport,webName:Y(d.inspectLocal2dZoomViewport),title:"Inspect Local 2D Zoom Viewport",description:"Inspect the active browser-local Knowgrph 2D zoom and viewport state from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q},{name:d.inspectLocalSourceFilesSnapshot,webName:Y(d.inspectLocalSourceFilesSnapshot),title:"Inspect Local Source Files Snapshot",description:"Inspect the active browser-local Knowgrph Source Files runtime snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:q}]:[],{name:d.inspectAgentSurface,webName:Y(d.inspectAgentSurface),title:"Inspect Agent Surface",description:"Use this when an MCP Apps-capable host or generic MCP client needs to inspect Knowgrph agent-ready discovery, MCP Apps readiness, OpenAPI, and skill metadata.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},outputSchema:Do,annotations:q,_meta:Lo()}].map(a=>({...a,securitySchemes:Array.isArray(a.securitySchemes)&&a.securitySchemes.length?a.securitySchemes:Ot()}))},"buildKnowgrphAgentReadyToolContracts");var jo=n((e={})=>{let t=String(e.baseUrl||"").replace(/\/+$/,""),r=t?new URL(`${t}/`).origin:"";return{...{baseUrl:t,healthUrl:`${t}/health`,mcpUrl:`${t}/mcp`,apiCatalogUrl:`${t}/.well-known/api-catalog`,openApiUrl:`${t}/.well-known/openapi.json`,mcpServerCardUrl:`${t}/.well-known/mcp/server-card.json`,agentCardUrl:`${t}/.well-known/agent-card.json`,agentSkillsUrl:`${t}/.well-known/agent-skills/index.json`,commerceUrls:{acpDiscoveryUrl:`${r}/.well-known/acp.json`,ucpProfileUrl:`${r}/.well-known/ucp`,mppOpenApiUrl:`${r}/openapi.json`,x402PaymentRequiredUrl:`${r}/api/payments/commerce/x402`},health:e.health,apiCatalog:e.apiCatalog,openApi:e.openApi,mcpServerCard:e.mcpServerCard,agentCard:e.agentCard,agentSkills:e.agentSkills,commerce:e.commerce},mcpAppsServerReadiness:Uo({baseUrl:t,updatedAt:e.updatedAt||e.health?.updatedAt||"",mcpServerCard:e.mcpServerCard})}},"buildAgentSurfaceInspectionPayload");var hr=n((e={})=>{let t=e.toolNames||{},r=String(e.defaultWorkspaceId||"").trim(),o=e.buildStorageDocPath,a=e.fetchSourceFilesIndexResponse,s=e.fetchStorageMarkdownResponse,i=e.resolveSharedDocumentInput,c=e.inspectSharedDocumentStructure,l=e.buildAgentSurfaceInspection,h=e.callStrybordActionTool,u=n(p=>String(p||"").trim(),"normalizeString"),y=u(e.publicBaseUrl).replace(/\/+$/,""),P=n(p=>String(p||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),S=n(p=>{try{return decodeURIComponent(String(p||""))}catch{return String(p||"")}},"safeDecodeURIComponent"),A=n(p=>{let m=u(p).split("/").filter(Boolean);return m[m.length-1]||u(p)||"Knowgrph Source File"},"titleFromCanonicalPath"),$=n((p,m=220)=>{let w=u(p).replace(/\s+/g," ");return w.length<=m?w:`${w.slice(0,m-1)}\u2026`},"truncateSnippet"),M=Math.max(0,Math.min(50,Number.isFinite(Number(e.searchContentScanMax))?Math.floor(Number(e.searchContentScanMax)):32)),K=Math.max(1e3,Math.min(5e4,Number.isFinite(Number(e.searchContentMaxChars))?Math.floor(Number(e.searchContentMaxChars)):24e3)),oe=Math.max(1,Math.min(8,Number.isFinite(Number(e.searchContentConcurrency))?Math.floor(Number(e.searchContentConcurrency)):4)),W=new Set(["a","an","and","are","as","at","be","by","can","do","does","for","from","how","i","in","is","it","of","on","or","the","this","to","what","when","where","which","who","why","with"]),T=n(p=>u(p).toLowerCase().split(/[^a-z0-9:_./-]+/).map(u).filter(m=>m&&!W.has(m)),"tokenizeSearchQuery"),E=n((p,m)=>m.reduce((w,_)=>{let f=String(p||""),v=0,F=0;for(;F<f.length;){let L=f.indexOf(_,F);if(L<0)break;v+=1,F=L+Math.max(1,_.length)}return w+v},0),"countTokenHits"),Q=n((p,m,w=260)=>{let _=u(p).replace(/\s+/g," ");if(!_)return"";let f=_.toLowerCase(),v=m.map(ee=>f.indexOf(ee)).filter(ee=>ee>=0).sort((ee,de)=>ee-de)[0];if(!Number.isFinite(v))return $(_,w);let F=Math.max(0,v-Math.floor(w/3)),L=Math.min(_.length,F+w);return`${F>0?"\u2026":""}${_.slice(F,L)}${L<_.length?"\u2026":""}`},"snippetAroundSearchHit"),N=n(async(p,m)=>{let w=new Array(p.length),_=0,f=Array.from({length:Math.min(oe,p.length)},async()=>{for(;_<p.length;){let v=_;_+=1,w[v]=await m(p[v],v)}});return await Promise.all(f),w},"runBoundedConcurrent"),V=n(({workspaceId:p="",canonicalPath:m=""}={})=>{let w=o(u(m),u(p));return y?`${y}${w}`:w},"buildPublicDocUrl");if(!!(t.search||t.fetch||t.listSourceFiles||t.readSourceFile||t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof o!="function")throw new Error("buildStorageDocPath is required");if((t.search||t.listSourceFiles)&&typeof a!="function")throw new Error("fetchSourceFilesIndexResponse is required");if((t.fetch||t.readSourceFile||t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof s!="function")throw new Error("fetchStorageMarkdownResponse is required");if((t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof i!="function")throw new Error("resolveSharedDocumentInput is required");if(t.inspectSharedDocumentStructure&&typeof c!="function")throw new Error("inspectSharedDocumentStructure is required");if(t.inspectAgentSurface&&typeof l!="function")throw new Error("buildAgentSurfaceInspection is required");let I=t.strybordActionTools&&typeof t.strybordActionTools=="object"?t.strybordActionTools:{};if(Object.keys(I).length>0&&typeof h!="function")throw new Error("callStrybordActionTool is required for Strybord action tools");let U=n(async(p={})=>{let m=u(p.canonicalPath);if(!m)throw new Error("canonicalPath is required");let w=u(p.workspaceId),_=await s(o(m,w));if(!_.ok)throw new Error(`read_source_file failed with ${_.status}`);return{workspaceId:w||r,canonicalPath:m,markdown:await _.text()}},"readSourceFile"),G=n(async(p={})=>{let m=i(p);if(!m)throw new Error("shareToken or shareUrl must resolve to a published Knowgrph document");let w=u(m.workspaceId),_=u(m.canonicalPath),f=await s(o(_,w));if(!f.ok)throw new Error(`read_shared_document failed with ${f.status}`);return{workspaceId:w||r,canonicalPath:_,markdown:await f.text()}},"readSharedDocument"),ne=n(async(p={})=>{let m=await G(p);return c(m)},"inspectSharedDocument"),fe=n(({workspaceId:p="",canonicalPath:m=""}={})=>`kgdoc:${encodeURIComponent(u(p))}:${encodeURIComponent(u(m))}`,"buildSearchFetchId"),be=n(p=>{let m=u(p),w=m.match(/^kgdoc:([^:]*):(.*)$/);if(w)return{workspaceId:S(w[1]||""),canonicalPath:S(w[2]||"")};let _=m.match(/\/(?:api\/storage\/doc|knowgrph\/doc)\/([^/\s)]+)\/([^\s)]+)$/);if(_)return{workspaceId:S(_[1]||""),canonicalPath:S(_[2]||"")};let f=m.match(/\/(?:api\/storage\/doc-default|knowgrph\/doc-default)\/([^\s)]+)$/);return f?{workspaceId:"",canonicalPath:S(f[1]||"")}:null},"parseSearchFetchId"),ie=n(p=>{let m=P(p).split(`
`),w=new Map,_=n(({workspaceId:f="",canonicalPath:v="",line:F=""}={})=>{let L=u(v);if(!L)return;let ee=u(f),de=fe({workspaceId:ee,canonicalPath:L});w.has(de)||w.set(de,{id:de,title:A(L),url:V({workspaceId:ee,canonicalPath:L}),snippet:$(F||L),workspaceId:ee||r,canonicalPath:L})},"addEntry");for(let f of m){let v=/\/(?:api\/storage\/doc|knowgrph\/doc)\/([^/\s)\]]+)\/([^\s)\]]+)/g,F=/\/(?:api\/storage\/doc-default|knowgrph\/doc-default)\/([^\s)\]]+)/g;for(let L of f.matchAll(v))_({workspaceId:S(L[1]||""),canonicalPath:S(L[2]||""),line:f});for(let L of f.matchAll(F))_({workspaceId:"",canonicalPath:S(L[1]||""),line:f})}return Array.from(w.values())},"extractSearchEntriesFromSourceFilesIndex"),Ie=n(async(p={})=>{let m=u(p.query);if(!m)throw new Error("query is required");let w=Math.max(1,Math.min(25,Number.isFinite(Number(p.limit))?Math.floor(Number(p.limit)):10)),_=await a();if(!_.ok)throw new Error(`search failed with ${_.status}`);let f=await _.text(),v=ie(f),F=T(m),L=F.join(" "),ee=v.map(D=>{let Z=`${D.title}
${D.canonicalPath}
${D.workspaceId}
${D.snippet}`.toLowerCase(),St=L&&Z.includes(L)?F.length*4:0,_t=F.reduce((bt,er)=>bt+(Z.includes(er)?2:0),0);return{...D,score:St+_t}}),de=ee.slice().sort((D,Z)=>Z.score-D.score||D.title.localeCompare(Z.title)).slice(0,M).filter(D=>/\.md(?:$|[?#])/i.test(D.canonicalPath)),wt=new Map;await N(de,async D=>{let Z=be(D.id);if(!Z?.canonicalPath)return null;try{let St=await s(o(Z.canonicalPath,Z.workspaceId));if(!St.ok)return null;let _t=(await St.text()).slice(0,K),bt=_t.toLowerCase(),er=L&&bt.includes(L)?F.length*6:0,ka=E(bt,F),zr=er+ka;if(zr<=0)return null;wt.set(D.id,{score:zr,snippet:Q(_t,F)})}catch{return null}return null});let rt=ee.map(D=>{let Z=wt.get(D.id);return{...D,score:D.score+(Z?.score||0),snippet:Z?.snippet||D.snippet}}).filter(D=>D.score>0).sort((D,Z)=>Z.score-D.score||D.title.localeCompare(Z.title)).slice(0,w).map(({score:D,...Z})=>Z);return{ids:rt.map(D=>D.id),results:rt,query:m,totalResults:rt.length}},"searchSourceFiles"),b=n(async(p={})=>{let m=be(p.id);if(!m?.canonicalPath)throw new Error("id must be a stable Knowgrph Source File id returned by search");let w=await U(m),_=V(m);return{id:fe(m),title:A(w.canonicalPath),content:w.markdown,text:w.markdown,url:_,metadata:{workspaceId:w.workspaceId,canonicalPath:w.canonicalPath,contentType:"text/markdown",source:"knowgrph-source-files"}}},"fetchSourceFileBySearchId"),g={};t.search&&(g[t.search]=Ie),t.fetch&&(g[t.fetch]=b),t.listSourceFiles&&(g[t.listSourceFiles]=async()=>{let p=await a();if(!p.ok)throw new Error(`list_source_files failed with ${p.status}`);return{workspaceId:r,markdownIndex:await p.text()}}),t.readSourceFile&&(g[t.readSourceFile]=U),t.readSharedDocument&&(g[t.readSharedDocument]=G),t.inspectSharedDocumentStructure&&(g[t.inspectSharedDocumentStructure]=ne),t.inspectAgentSurface&&(g[t.inspectAgentSurface]=async()=>l());for(let[p,m]of Object.entries(I))m&&(g[m]=async(w={},_={})=>h(p,w,_));return g},"createPublishedAgentReadyToolExecutors"),ds=n(e=>`((...args) => {
  const n = (value) => value
  const __name = (value) => value
  return (${Function.prototype.toString.call(e)})(...args)
})`,"createBrowserSafeFunctionSource"),Bo=ds(hr);var Go=n((e={})=>{let t=n(b=>String(b||"").trim(),"normalizeString"),r=n(b=>String(b||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),o=n(b=>{let g=String(b||"").match(/^\s*/);return g?g[0].length:0},"readIndent"),a=n(b=>/^[A-Za-z0-9_:@-]+\s*:/.test(t(b)),"isYamlKeyLine"),s=n(b=>r(b).split(`
`),"splitLines"),i=n(b=>{let g=s(b),p=0;for(;p<g.length&&!t(g[p]);)p+=1;if(t(g[p])!=="---")return null;for(let m=p+1;m<g.length;m+=1)if(t(g[m])==="---")return{frontmatter:g.slice(p+1,m).join(`
`),body:g.slice(m+1).join(`
`)};return null},"extractLeadingFrontmatter"),c=n(b=>{let g=[];for(let p of s(b)){if(!t(p)||o(p)!==0)continue;let m=p.match(/^([A-Za-z0-9_:@-]+)\s*:/);m?.[1]&&g.push(m[1])}return Array.from(new Set(g)).sort((p,m)=>p.localeCompare(m))},"extractTopLevelFrontmatterKeys"),l=n((b,g)=>{let p=s(b),m=`${g}:`;for(let w=0;w<p.length;w+=1){let _=p[w],f=t(_);if(!f.startsWith(m))continue;let v=o(_),F=f.slice(m.length).trim();if(F)return{indent:v,inlineValue:F,blockLines:[],blockText:""};let L=[];for(let ee=w+1;ee<p.length;ee+=1){let de=p[ee],wt=t(de),rt=o(de);if(wt&&rt<=v&&a(de))break;L.push(de)}return{indent:v,inlineValue:"",blockLines:L,blockText:L.join(`
`)}}return null},"extractYamlBlock"),h=n(b=>{let g=[];for(let p of s(b)){let m=t(p);if(!m||m.startsWith("- "))continue;let w=m.match(/^([A-Za-z0-9_:@-]+)\s*:/);w?.[1]&&g.push(w[1])}return Array.from(new Set(g)).sort((p,m)=>p.localeCompare(m))},"extractNestedYamlKeys"),u=n(b=>{let g=s(b).filter(w=>t(w));if(!g.length)return[];let p=Math.min(...g.map(o)),m=[];for(let w of g){if(o(w)!==p)continue;let _=t(w);if(_.startsWith("- "))continue;let f=_.match(/^([A-Za-z0-9_:@-]+)\s*:/);f?.[1]&&m.push(f[1])}return Array.from(new Set(m)).sort((w,_)=>w.localeCompare(_))},"extractDirectYamlKeys"),y=n(b=>{let g=t(b);if(!g.startsWith("[")||!g.endsWith("]"))return null;let p=g.slice(1,-1).trim();return p?p.split(",").map(m=>t(m)).filter(Boolean).length:0},"countInlineSequenceEntries"),P=n(b=>{let g=t(b);return g.startsWith('"')&&g.endsWith('"')||g.startsWith("'")&&g.endsWith("'")?g.slice(1,-1):g},"cleanYamlScalar"),S=n(b=>{let g=t(b);if(!g.startsWith("[")||!g.endsWith("]"))return null;let p=g.slice(1,-1).trim();return p?p.split(",").map(m=>P(m)).filter(Boolean):[]},"extractInlineSequenceValues"),A=n((b,g)=>{let p=l(b,g);if(!p)return[];if(p.inlineValue)return S(p.inlineValue)||[];let m=[],w=p.indent+2;for(let _ of p.blockLines){let f=t(_);o(_)===w&&f.startsWith("- ")&&m.push(P(f.slice(2)))}return m},"extractYamlSequenceValues"),$=n((b,g)=>{let p=s(b),m=`${g}:`;for(let w of p){let _=t(w);if(_.startsWith(m))return P(_.slice(m.length))}return null},"extractTopLevelScalarValue"),M=n((b,g)=>{let p=l(b,g);if(!p)return null;if(p.inlineValue)return y(p.inlineValue);let m=0,w=p.indent+2;for(let _ of p.blockLines)t(_)&&o(_)===w&&/^\s*-\s+/.test(_)&&(m+=1);return m},"countYamlSequenceEntries"),K=n(b=>{let g=[];for(let p of s(b)){let m=p.match(/^(#{1,6})\s+(.+?)\s*$/);m?.[2]&&g.push({depth:m[1].length,text:t(m[2])})}return g},"extractMarkdownHeadings"),oe=t(e.workspaceId),W=t(e.canonicalPath),T=r(e.markdown),E=i(T),Q=E?c(E.frontmatter):[],N=E?l(E.frontmatter,"flow"):null,V=N?h(N.blockText):[],B=E?l(E.frontmatter,"flow_diagrams"):null,I=B?l(B.blockText,"value"):null,U=I?u(I.blockText).length:0,G=E?l(E.frontmatter,"main_panel_integrations_demo"):null,ne=E?l(E.frontmatter,"superagent_harness_demo"):null,fe=ne?l(ne.blockText,"runtime_surfaces"):null,be=new Set(["kg:subgraphs","clusters","groups","layers"]),ie=Array.from(new Set([...Q,...V].filter(b=>be.has(b)))).sort((b,g)=>b.localeCompare(g)),Ie=K(E?E.body:T);return{workspaceId:oe,canonicalPath:W,markdownLength:T.length,lineCount:T?s(T).length:0,hasFrontmatter:!!E,topLevelKeys:Q,frontmatterScalars:E?{kgCanvasRenderMode:$(E.frontmatter,"kgCanvasRenderMode"),kgCanvas2dRenderer:$(E.frontmatter,"kgCanvas2dRenderer"),deployed_api_claim:$(E.frontmatter,"deployed_api_claim")}:{},mainPanelIntegrationsDemo:G?{present:!0,mainPanelEntries:A(G.blockText,"main_panel_entries"),providerIds:A(G.blockText,"provider_ids"),providerLabels:A(G.blockText,"provider_labels"),taskCapabilities:A(G.blockText,"task_capabilities"),taskLevels:A(G.blockText,"task_levels"),integrationOpenTab:$(G.blockText,"integration_open_tab"),canvas2dRenderer:$(G.blockText,"canvas_2d_renderer"),sourceFile:$(G.blockText,"source_file")}:{present:!1},superAgentHarnessDemo:ne?{present:!0,taskCapabilities:A(ne.blockText,"task_capabilities"),taskLevels:A(ne.blockText,"task_levels"),runtimeSurfaces:fe?u(fe.blockText):[]}:{present:!1},hasFlowBlock:!!N,flowKeys:V,flowDiagramCount:U,flowNodeCount:N?(M(N.blockText,"nodes")??0)+U*3:null,flowConnectionCount:N?(M(N.blockText,"connections")??M(N.blockText,"edges")??0)+U*2:null,flowSubgraphCount:N?M(N.blockText,"subgraphs"):null,forbiddenGroupingKeys:ie,headingCount:Ie.length,headings:Ie.map(b=>b.text),bodyLength:t(E?E.body:T).length}},"inspectSharedDocumentStructure");var Fo="knowgrph-vdeoxpln/v0.1",J=Object.freeze({search:d.search,fetch:d.fetch,uiLaunch:"knowgrph.ui.launch",uiStop:"knowgrph.ui.stop",pipeline:"knowgrph.pipeline",graphragPipeline:"knowgrph.graphrag_pipeline",superagentRun:"knowgrph.superagent.run",agenticCanvasOsPlan:"knowgrph.agentic_canvas_os.plan",browserApiRun:"knowgrph.browser_api.run",vdeoxplnList:"knowgrph.vdeoxpln.list"}),Ge=Object.freeze({sourceFiles:"knowgrph-source-files",agentReady:"knowgrph-agent-ready",localMcp:"knowgrph-mcp-local",chatToCanvas:"knowgrph-chat-to-canvas",strybldr:"knowgrph-strybldr",researchVisual:"knowgrph-research-visual",commerceReadiness:"knowgrph-commerce-readiness"}),fr=n(e=>String(e||"").trim(),"normalizeString"),he=n(e=>Array.from(new Set((Array.isArray(e)?e:[]).map(fr).filter(Boolean))).sort((t,r)=>t.localeCompare(r)),"normalizeStringArray"),Wo=n(e=>{let t=new Set,r=[];for(let o of Array.isArray(e)?e:[]){let a=fr(o);!a||t.has(a)||(t.add(a),r.push(a))}return r},"normalizeOrderedStringArray"),gr=n(e=>Array.isArray(e)?e.map(gr):!e||typeof e!="object"?e:Object.keys(e).sort((t,r)=>t.localeCompare(r)).reduce((t,r)=>(t[r]=gr(e[r]),t),{}),"normalizeJsonValue"),ms=n(e=>JSON.stringify(gr(e)),"stableStringifyVdeoxplnValue"),hs=n((e,t)=>{let r=fr(e)||"vdeoxpln";return`kgvx_${kt([r,Fo,ms(t)])}`},"buildKnowgrphVdeoxplnSemanticKey");var gs=Object.freeze([{id:Ge.sourceFiles,title:"Knowgrph Source Files",purpose:"Discover, read, inspect, and route published Source Files and shared documents through the canonical storage and document-structure owners.",scope:"read-only-published",mutation:"read-only",triggers:["source files","published documents","shared document","read markdown","inspect document structure"],inputs:["workspace document","published markdown","share token","share URL","canonical path"],outputs:["source-files index","published markdown","document structure report"],owners:["canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/sourceFilesSignatures.ts","canvas/src/features/agent-ready/publishedToolExecutors.mjs","canvas/src/features/agent-ready/sharedDocumentStructureInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs"],tools:{published:[d.listSourceFiles,d.readSourceFile,d.readSharedDocument,d.inspectSharedDocumentStructure],browserLocal:[d.inspectLocalSourceFilesSnapshot],local:[J.search,J.fetch,J.vdeoxplnList]},workflow:["Resolve source identity from storage, share token, or canonical path.","Fetch through published storage/document executors.","Inspect structure with the shared document-structure owner.","Return read-only artifacts without graph mutation."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return source-read or structure errors without model calls."},artifactPolicy:{persistence:"published-read-only",graphMaterialization:"none",semanticKeyInputs:["workspaceId","canonicalPath","shareToken","toolContract"]},validation:["agent-ready:check","pages:check-sync","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","webmcp-html-fallback"]},{id:Ge.agentReady,title:"Knowgrph Agent Ready",purpose:"Inspect Knowgrph health, MCP, WebMCP, A2A, OpenAPI, commerce, and browser-local readiness without claiming deployed mutation.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["agent-ready","webmcp","mcp health","openapi","a2a","discovery","readiness"],inputs:["agent-ready base URL","browser runtime state","published metadata"],outputs:["agent surface inspection","browser-local readiness snapshot","metadata report"],owners:["canvas/src/features/agent-ready/knowgrphAgentReadyToolContract.mjs","canvas/src/features/agent-ready/webMcpRuntime.ts","canvas/src/features/agent-ready/agentSurfaceInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs","scripts/check-agent-ready.mjs"],tools:{published:[d.inspectAgentSurface],browserLocal:[d.inspectLocalSettingsChatReadiness,d.inspectLocalMainPanelState,d.inspectLocalEditorWorkspaceState,d.inspectLocalChatPipelineState,d.inspectLocalMainPanelChatCanvasPipeline,d.inspectLocalWorkspaceDocument,d.inspectLocalCanvasTopology,d.inspectLocalCanvasSnapshot,d.inspectLocal3dCameraPose,d.inspectLocal3dLayoutPositions,d.inspectLocal2dZoomViewport,d.inspectLocalSourceFilesSnapshot],local:[J.vdeoxplnList]},workflow:["Inspect published agent-ready metadata.","Inspect browser-local state only when running inside the app runtime.","Report scope boundaries between Pages read-only tools and browser-local inspectors."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return metadata inspection errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["toolContracts","metadataRoutes","browserLocalToolNames"]},validation:["agent-ready:check","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","browser-webmcp"]},{id:Ge.localMcp,title:"Knowgrph Local MCP",purpose:"Expose local UI launch, pipeline, GraphRAG, superagent, Agentic Canvas OS planning, browser bridge, and vdeoxpln inspection tools through the stdio MCP server.",scope:"local-stdio",mutation:"local-confirmed",triggers:["local mcp","launch canvas","run pipeline","graphrag","superagent","agentic canvas os","browser api","list vdeoxpln"],inputs:["local root","workspace file","graph data","pipeline config","browser API runtime"],outputs:["local tool result","pipeline artifact","superagent report","agentic canvas os dashboard plan","vdeoxpln registry snapshot"],owners:["mcp/local-tool-contract.js","mcp/server.js","mcp/agentic-canvas-os-runtime.js","mcp/agentic-canvas-os-lanes.js","mcp/README.md","knowgrph_parser/superagent_harness.py","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[J.search,J.fetch,J.uiLaunch,J.uiStop,J.pipeline,J.graphragPipeline,J.superagentRun,J.agenticCanvasOsPlan,J.browserApiRun,J.vdeoxplnList]},workflow:["List local tools from the shared local MCP contract.","Run only path-guarded local-root operations.","Summarize artifacts and registry metadata in the MCP result."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"tool-owned",fallback:"Return local command failure and detected artifacts."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"tool-owned",semanticKeyInputs:["localToolNames","rootScope","artifactList"]},validation:["vdeoxpln:check","mcpLocalToolContract"],publish:["local-mcp-docs"]},{id:Ge.chatToCanvas,title:"Knowgrph Chat To Canvas",purpose:"Route AI-assisted graph generation through FloatingPanel Chat, KGC validation, Workspace FS, Source Files, and Canvas apply owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["chat to canvas","generate graph","kgc markdown","flow.subgraphs","apply to canvas"],inputs:["chat request","workspace context","selection context","source evidence","model settings"],outputs:["validated KGC Markdown","workspace artifact","GraphData","canvas topology snapshot"],owners:["canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitRequest.ts","canvas/src/features/chat/chatMarkdownValidation.ts","canvas/src/features/chat/chatKgcCanvasApply.ts","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/lib/graph/semanticKey.ts"],tools:{published:[],browserLocal:[d.inspectLocalChatPipelineState,d.inspectLocalMainPanelChatCanvasPipeline,d.inspectLocalWorkspaceDocument,d.inspectLocalCanvasTopology,d.inspectLocalCanvasSnapshot],local:[J.vdeoxplnList]},workflow:["Vdeoxpln context through the shared chat submit request owner.","Call provider transport only after typed request construction.","Validate KGC Markdown with bounded retries.","Persist through Workspace FS and apply through the existing Canvas path."],aiPolicy:{mode:"required-for-generation",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Persist validation or provider failure as reviewable chat/workspace state."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["chatContextScope","workspacePath","graphSemanticKey","sourceLayerHash"]},validation:["chatResponseContract","sourceFiles","vdeoxpln:check"],publish:["browser-webmcp","mainpanel-mcp"]},{id:Ge.strybldr,title:"Knowgrph Strybldr",purpose:"Turn image or media source units into editable Storyboard cards and bounded media handoff artifacts through Strybldr and shared renderer owners.",scope:"browser-local-source-backed",mutation:"browser-local-user-mediated",triggers:["strybldr","storyboard","image to storyboard","media handoff","visual brief"],inputs:["image source unit","media metadata","workspace document","storyboard graph"],outputs:["Strybldr Markdown","Storyboard graph cards","media handoff prompt","canvas snapshot"],owners:["canvas/src/features/strybldr/strybldrStoryboard.ts","canvas/src/features/strybldr","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-strybldr-prd-tad.md"],tools:{published:[],browserLocal:[d.inspectLocalSourceFilesSnapshot,d.inspectLocalCanvasTopology,d.inspectLocalCanvasSnapshot],local:[J.vdeoxplnList]},workflow:["Import media through existing workspace/source owners.","Build Strybldr cards with source-unit provenance.","Render through the shared Storyboard surface.","Compile bounded media handoff only after user approval."],aiPolicy:{mode:"optional-for-refinement",maxAttempts:1,tokenBudget:"user-approved-provider-step",fallback:"Keep editable storyboard and structured handoff error."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"storyboard-graph",semanticKeyInputs:["sourceUnitId","strybldrRunId","graphSemanticKey"]},validation:["strybldr","rendererPipelineNeutrality","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:Ge.researchVisual,title:"Knowgrph Research Visual",purpose:"Create file-backed research visual workflows from source material using Knowgrph parsing, Source Files, Storyboard, renderer, and chat owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["research visual","explainer","formula","algorithm","proof","dynamic scene","storyboard"],inputs:["paper excerpt","formula","algorithm","figure","workspace document","source evidence"],outputs:["mechanism brief","storyboard","renderer-neutral scene plan","validated KGC Markdown"],owners:["canvas/src/features/parsers/default.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-vdeoxpln-prd-tad.md"],tools:{published:[],browserLocal:[d.inspectLocalChatPipelineState,d.inspectLocalSourceFilesSnapshot,d.inspectLocalCanvasTopology],local:[J.vdeoxplnList]},workflow:["Extract source-backed semantic units into workspace artifacts.","Plan exact deterministic graph/storyboard layers before optional AI support.","Persist artifacts through Workspace FS and Source Files.","Use Canvas/Storyboard renderers as projections of graph state."],aiPolicy:{mode:"optional-for-drafting",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Return deterministic source brief with unresolved questions."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["sourceSignature","graphSemanticKey","rendererId"]},validation:["sourceFiles","chatResponseContract","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:Ge.commerceReadiness,title:"Knowgrph Commerce Readiness",purpose:"Inspect Commerce, payment worker, x402, ACP, UCP, MPP, and readiness metadata without bypassing the shared payment SSOT.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["commerce","payment","x402","acp","ucp","mpp","stripe","readiness"],inputs:["agent-ready metadata","commerce route health","browser readiness snapshot"],outputs:["commerce readiness report","payment route summary","agent-ready commerce metadata"],owners:["canvas/src/features/panels/views/CommerceHubView.tsx","canvas/src/features/agent-ready/browserLocalSurfaceSnapshots.ts","cloudflare/pages/knowgrph-agent-ready-commerce.mjs","cloudflare/workers/knowgrph-payment/agenticCommerce.ts","grph-shared/src/payments/agenticCommerceSsot.ts"],tools:{published:[d.inspectAgentSurface],browserLocal:[d.inspectLocalSettingsChatReadiness,d.inspectLocalMainPanelState],local:[J.vdeoxplnList]},workflow:["Inspect published commerce discovery metadata.","Read browser-local readiness snapshots when available.","Report payment capability boundaries without initiating checkout."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return route or metadata errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["commerceSemanticKey","routeHealth","toolContract"]},validation:["agent-ready:check","mainPanelCommerce","vdeoxpln:check"],publish:["pages-agent-skills","mainpanel-mcp","browser-webmcp"]}]),fs=n(e=>{let t={published:he(e.tools?.published),browserLocal:he(e.tools?.browserLocal),local:he(e.tools?.local)},r=hs(e.id,{id:e.id,scope:e.scope,mutation:e.mutation,owners:he(e.owners),tools:t,triggers:he(e.triggers),outputs:he(e.outputs),workflow:Wo(e.workflow),artifactPolicy:e.artifactPolicy||{},aiPolicy:e.aiPolicy||{}}),o=`/.well-known/agent-skills/${e.id}.md`;return Object.freeze({...e,version:Fo,triggers:he(e.triggers),inputs:he(e.inputs),outputs:he(e.outputs),owners:he(e.owners),tools:Object.freeze(t),workflow:Wo(e.workflow),validation:he(e.validation),publish:he(e.publish),semanticKey:r,agentSkill:Object.freeze({name:e.id,type:"markdown",description:e.purpose,path:o})})},"normalizeVdeoxpln"),zo=n(()=>gs.map(fs).sort((e,t)=>e.id.localeCompare(t.id)),"buildKnowgrphVdeoxplnRegistry");var qo=n((e=zo())=>e.map(t=>({...t.agentSkill,vdeoxpln:{id:t.id,title:t.title,scope:t.scope,mutation:t.mutation,semanticKey:t.semanticKey,tools:t.tools,publish:t.publish}})),"buildKnowgrphVdeoxplnAgentSkillDefinitions"),Ae=n(e=>e&&e.length?e.map(t=>`- ${t}`).join(`
`):"- none","markdownList"),ys=n(e=>`# ${e.title} Skill

Use this skill when: ${e.purpose}

## Contract

- Vdeoxpln id: \`${e.id}\`
- Contract version: \`${e.version}\`
- Semantic key: \`${e.semanticKey}\`
- Scope: \`${e.scope}\`
- Mutation boundary: \`${e.mutation}\`

## Triggers

${Ae(e.triggers)}

## Inputs

${Ae(e.inputs)}

## Outputs

${Ae(e.outputs)}

## Tools

Published tools:
${Ae(e.tools.published)}

Browser-local tools:
${Ae(e.tools.browserLocal)}

Local MCP tools:
${Ae(e.tools.local)}

## Workflow

${Ae(e.workflow)}

## Source Owners

${Ae(e.owners)}

## Artifact Policy

- Persistence: \`${e.artifactPolicy?.persistence||"none"}\`
- Graph materialization: \`${e.artifactPolicy?.graphMaterialization||"none"}\`
- Semantic-key inputs:
${Ae(e.artifactPolicy?.semanticKeyInputs||[])}

## AI Policy

- Mode: \`${e.aiPolicy?.mode||"none"}\`
- Max attempts: \`${String(e.aiPolicy?.maxAttempts??0)}\`
- Token budget: \`${String(e.aiPolicy?.tokenBudget??0)}\`
- Fallback: ${e.aiPolicy?.fallback||"Return deterministic errors without model calls."}

## Validation

${Ae(e.validation)}

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
`,"buildKnowgrphVdeoxplnMarkdown"),Yo=n((e=zo())=>Object.fromEntries(e.map(t=>[t.id,ys(t)])),"buildKnowgrphVdeoxplnMarkdownByName");var ws={[d.search]:{id:"search",tags:["mcp","search","source-files","read-only"],examples:["Search Knowgrph Source Files for renderer architecture."],outputModes:["application/json"]},[d.fetch]:{id:"fetch",tags:["mcp","fetch","source-files","markdown","read-only"],examples:["Fetch the Knowgrph Source File id returned by search."],outputModes:["text/markdown","application/json"]},[d.listSourceFiles]:{id:"list-source-files",tags:["mcp","discovery","source-files","read-only"],examples:["List the published Knowgrph Source Files."],outputModes:["text/markdown","application/json"]},[d.readSourceFile]:{id:"read-source-file",tags:["mcp","read","markdown","workspace"],examples:["Read the published source file for docs/getting-started.md."],outputModes:["text/markdown","application/json"]},[d.readSharedDocument]:{id:"read-shared-document",tags:["mcp","read","shared-document","markdown"],examples:["Read the Knowgrph shared document behind this share URL."],outputModes:["text/markdown","application/json"]},[d.inspectSharedDocumentStructure]:{id:"inspect-shared-document-structure",tags:["mcp","inspect","shared-document","structure"],examples:["Inspect the structure of this Knowgrph shared document."],outputModes:["application/json","text/markdown"]},[d.inspectAgentSurface]:{id:"inspect-agent-surface",tags:["mcp","agent-ready","discovery","metadata"],examples:["Show the Knowgrph agent discovery metadata."],outputModes:["application/json","text/markdown"]}},ct=qo(),Vo=n(e=>e.map(t=>{let r=ws[t.name]||{id:String(t.name||"").replace(/_/g,"-"),tags:["mcp","read-only"],examples:[`Call ${t.name} on Knowgrph.`],outputModes:["application/json"]};return{id:r.id,name:t.title,description:t.description,tags:r.tags,examples:r.examples,inputModes:["application/json","text/plain"],outputModes:r.outputModes}}),"buildAgentReadyA2aSkills"),Jo=n(async({appUrl:e,updatedAt:t,sha256ByName:r})=>({$schema:"https://agent-skills.dev/schemas/skills-index.v0.2.json",updated_at:t,skills:await Promise.all(ct.map(async o=>({name:o.name,type:o.type,description:o.description,url:`${String(e||"").replace(/\/+$/,"")}${o.path}`,sha256:await r[o.name],vdeoxpln:o.vdeoxpln})))}),"buildAgentReadyAgentSkillsIndex"),Xo=n(({appBasePath:e,appA2aAgentCardPath:t,healthPath:r})=>{let o=Object.fromEntries(ct.map(a=>[`${e}${a.path}`,{get:{summary:`Read the ${a.name} agent skill markdown`,responses:{200:{description:`Agent skill markdown for ${a.name}`}}}}]));return{[r]:{get:{summary:"Read the Knowgrph agent-ready health status",responses:{200:{description:"Health status in application/health+json format"}}}},[`${e}/mcp`]:{get:{summary:"Read MCP transport metadata",responses:{200:{description:"MCP transport metadata"}}},post:{summary:"Send a JSON-RPC MCP request",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0}}}},responses:{200:{description:"JSON-RPC result payload"}}}},[t]:{get:{summary:"Read the Knowgrph A2A Agent Card",responses:{200:{description:"A2A Agent Card JSON"}}}},"/api/storage/llms.txt":{get:{summary:"Read the Source Files LLM index",responses:{200:{description:"Plain-text LLM index"}}}},"/api/storage/source-files":{get:{summary:"List published Source Files",responses:{200:{description:"Source Files index"}}}},"/api/storage/source-files/{workspaceId}":{get:{summary:"List published Source Files for a workspace",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped Source Files index"}}}},"/api/storage/source-files/{workspaceId}/llms.txt":{get:{summary:"Read the workspace-scoped Source Files LLM index",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped plain-text LLM index"}}}},"/api/storage/doc-default/{canonicalPath}":{get:{summary:"Read a default-workspace Source File markdown document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document from the default Editor Workspace"},404:{description:"Document not found"}}}},"/api/storage/doc/{workspaceId}/{canonicalPath}":{get:{summary:"Read a Source File markdown document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document"},404:{description:"Document not found"}}}},"/api/storage/blob/{workspaceId}/{canonicalPath}":{post:{summary:"Store a workspace binary artifact in R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],requestBody:{required:!0,content:{"application/octet-stream":{schema:{type:"string",format:"binary"}}}},responses:{200:{description:"R2 object coordinates and public storage route"},400:{description:"Invalid workspace, path, or declared payload size"}}},get:{summary:"Read a workspace binary artifact from R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Binary artifact body with stored HTTP metadata"},404:{description:"Object not found"}}},head:{summary:"Read workspace binary artifact metadata from R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Binary artifact metadata"},404:{description:"Object not found"}}}},[`${e}/doc-default/{canonicalPath}`]:{get:{summary:"Read a default-workspace shared document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/doc/{workspaceId}/{canonicalPath}`]:{get:{summary:"Read a shared document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/share/{shareToken}`]:{get:{summary:"Read a shared document through the canonical opaque share token route",parameters:[{name:"shareToken",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or published markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},...o}},"buildAgentReadyOpenApiPaths");var Ss=n((e,t)=>{let r=new URL(e.url);return r.pathname=`${t}/`,r.search="",r.hash="",new Request(r.toString(),e)},"buildKnowgrphAppShellAssetRequest"),Qo=n(async(e,t)=>{let r=Ss(e.request,t);return typeof e.env?.ASSETS?.fetch=="function"?e.env.ASSETS.fetch(r):e.next(r)},"fetchKnowgrphAppShellAsset");var _s="kgShare",Jp=typeof TextEncoder<"u"?new TextEncoder:null,Zo=typeof TextDecoder<"u"?new TextDecoder:null;var bs=n(e=>{if(typeof Buffer<"u")return Uint8Array.from(Buffer.from(e,"base64"));let t=atob(e),r=new Uint8Array(t.length);for(let o=0;o<t.length;o+=1)r[o]=t.charCodeAt(o);return r},"fromBase64");var Rs=n(e=>{let t=String(e||"").replace(/-/g,"+").replace(/_/g,"/");if(!t)return"";let r=t.length%4;return r?`${t}${"=".repeat(4-r)}`:t},"fromBase64Url");var Ps=n(e=>{if(!Zo)throw new Error("TextDecoder is required to decode published doc share tokens");return Zo.decode(bs(Rs(e)))},"decodeUtf8Base64Url"),on=n(e=>String(e||"").trim()||null,"normalizeWorkspaceId"),Sr=n(e=>String(e||"").trim(),"normalizeCanonicalPath"),yr="/knowgrph",en="/doc-default/",tn="/doc/",rn="/share/",As="kgWorkspaceId",ks="kgCanonicalPath",xs=n(e=>{let t=String(e||"").trim();return t?`/${t.replace(/^\/+|\/+$/g,"")}`:yr},"normalizeAppBasePath"),wr=n(e=>{let t=Sr(e?.canonicalPath);return t?{canonicalPath:t,workspaceId:on(e?.workspaceId)}:null},"normalizePublishedDocIdentity"),nn=n((e,t)=>{let r=xs(t),o=String(e||"").replace(/\/+$/,"")||"/";if(!o.startsWith(r))return null;let a=o.slice(r.length)||"/";if(a.startsWith(rn)){let c=decodeURIComponent(a.slice(rn.length)).trim();return _r(c)}if(a.startsWith(en))return wr({canonicalPath:decodeURIComponent(a.slice(en.length))});if(!a.startsWith(tn))return null;let s=a.slice(tn.length),i=s.indexOf("/");return i<1?null:wr({workspaceId:decodeURIComponent(s.slice(0,i)),canonicalPath:decodeURIComponent(s.slice(i+1))})},"parsePublishedDocPathname"),Ts=n(e=>{let t=_r(e?.get(_s));if(t)return t;let r=Sr(decodeURIComponent(String(e?.get(ks)||"")));if(r)return wr({workspaceId:decodeURIComponent(String(e?.get(As)||"")),canonicalPath:r});let o=String(e?.get("kgPath")||"").trim();return o?nn(`${yr}${o}`,yr):null},"parsePublishedDocSearchParams");var _r=n(e=>{let t=String(e||"").trim();if(!t)return null;try{let r=JSON.parse(Ps(t)),o=Sr(r?.canonicalPath);return o?{canonicalPath:o,workspaceId:on(r?.workspaceId)}:null}catch{return null}},"decodePublishedDocShareToken"),It=n((e={})=>{let t=_r(e.shareToken);if(t)return t;let r=String(e.shareUrl||"").trim();if(!r)return null;try{let o=String(e.baseUrl||"https://airvio.co").trim()||"https://airvio.co",a=new URL(r,o);return Ts(a.searchParams)||nn(a.pathname,e.appBasePath)}catch{return null}},"resolvePublishedDocIdentity"),an=String.raw`(args = {}) => {
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
}`;var Mt={push:"/api/storage/push",pull:"/api/storage/pull",collabSave:"/api/storage/collab/save",exportPrefix:"/api/storage/export/",docPrefix:"/api/storage/doc/",defaultDocPrefix:"/api/storage/doc-default/",blobPrefix:"/api/storage/blob/",sourceFilesIndex:"/api/storage/source-files",sourceFilesIndexPrefix:"/api/storage/source-files/",sourceFilesLlms:"/api/storage/llms.txt"};var sn=n((e,t)=>`${Mt.docPrefix}${encodeURIComponent(String(e||"").trim())}/${encodeURIComponent(String(t||"").trim())}`,"buildKnowgrphStorageDocPath"),cn=n(e=>`${Mt.defaultDocPrefix}${encodeURIComponent(String(e||"").trim())}`,"buildKnowgrphStorageDefaultDocPath");var ln=n(e=>{let t=String(e||"").trim();return t?`${Mt.sourceFilesIndexPrefix}${encodeURIComponent(t)}`:Mt.sourceFilesIndex},"buildKnowgrphStorageSourceFilesIndexPath");var j="https://airvio.co",Nt="https://knowgrph-storage.huijoohwee.workers.dev",x="/knowgrph",k=`${j}${x}/`,pn=`${j}/`,lt="kgws:canonical-docs",Te="2026-06-05",et=`${x}/health`,Ze=`${j}${et}`,un="/.well-known/agent-card.json",br=`${x}/.well-known/agent-card.json`,Ut=`${j}${un}`,Rr=`${j}/api/storage/source-files`,Es=`${j}/api/storage/doc-default/{canonicalPath}`,Cs=`${j}/api/storage/doc/{workspaceId}/{canonicalPath}`,Os=`${j}/api/storage/blob/{workspaceId}/{canonicalPath}`,dn="knowgrph-agent-ready-pages";var mn=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${x}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${x}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${et}>; rel="status"; type="application/health+json"`,`<${x}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${un}>; rel="describedby"; type="application/json"`].join(", "),hn=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${k}.

## Discovery

- Crawl policy: ${k}robots.txt
- Sitemap: ${k}sitemap.xml
- API catalog: ${k}.well-known/api-catalog
- Auth.md registration instructions: ${pn}auth.md
- Health: ${Ze}
- MCP server card: ${k}.well-known/mcp/server-card.json
- A2A Agent Card: ${Ut}
- Agent skills: ${k}.well-known/agent-skills/index.json
- LLM reference: ${k}llms.txt

## APIs

- Agent-ready status: ${Ze}
- HTTP MCP: ${k}mcp
- Storage API: ${j}/api/storage/
- Source Files index: ${Rr}
- Default Source File documents: ${Es}
- Workspace Source File documents: ${Cs}
- Workspace binary artifacts: ${Os}

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
`,gn=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),pt=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(r=>r.trim().startsWith("text/markdown")),"wantsMarkdown"),fn=n((e,t)=>{let r=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&r.headers.set("x-knowgrph-route-owner",o),a&&r.headers.set("x-knowgrph-route-tag",a),r},"withAgentReadyRouteHeaders");var Dt=mr({defaultWorkspaceId:lt}),Pn=Ro(),An=xo(),kn=n((e,t="")=>{let r=String(e||"").trim(),o=String(t||"").trim();return o?sn(o,r):cn(r)},"buildStorageDocPath"),mt=n(e=>String(e||"").trim(),"normalizeToolString");var Se=n((e,t="application/json; charset=utf-8")=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"jsonResponse"),pe=n((e,t)=>new Response(JSON.stringify(t,null,2),{status:e,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"jsonStatusResponse"),yn=n((e,t={})=>new Response(null,{status:e,headers:{"cache-control":"no-store","access-control-allow-origin":"*",...t}}),"emptyStatusResponse"),ut=n((e,t)=>new Response(e,{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"textResponse"),vs=n(e=>ut(e,"text/html;profile=mcp-app; charset=utf-8"),"mcpAppsHtmlResponse"),Is=n(e=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":"application/health+json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"healthResponse"),Ms=`${x}/api/workspace/github/write`,Ns="/api/workspace/github/write",wn=12,Sn=9e5,Us=new Set(["css","html","js","json","md","mdx","mjs","svg","ts","tsx","txt","yaml","yml"]),Pr=n((e,t)=>String(e?.[t]||"").trim(),"readEnvString"),Ls=n(e=>{let t=Pr(e,"KNOWGRPH_GITHUB_WRITE_REPOSITORY"),r=Pr(e,"KNOWGRPH_GITHUB_WRITE_TOKEN"),o=Pr(e,"KNOWGRPH_GITHUB_WRITE_BRANCH"),a=[];t||a.push("KNOWGRPH_GITHUB_WRITE_REPOSITORY"),r||a.push("KNOWGRPH_GITHUB_WRITE_TOKEN");let s=t.split("/").map(i=>i.trim()).filter(Boolean);return t&&s.length!==2&&a.push("KNOWGRPH_GITHUB_WRITE_REPOSITORY:owner/repo"),a.length>0?{ok:!1,missing:a}:{ok:!0,owner:s[0],repo:s[1],branch:o,token:r}},"readGitHubWriteConfig"),Ds=n(e=>{let t=String(e||"").trim().replace(/^workspace:/i,"").replace(/\\/g,"/").replace(/^\/+/,"");if(!t)return{ok:!1,error:"missing_workspace_path"};if(/[\u0000-\u001f\u007f]/.test(t))return{ok:!1,error:"invalid_workspace_path"};let r=t.split("/").filter(Boolean);if(r.some(s=>s==="."||s===".."))return{ok:!1,error:"path_traversal_forbidden"};if(r[0]!=="chat-log")return{ok:!1,error:"unsupported_workspace_root"};if(r.length<3)return{ok:!1,error:"chat_log_session_file_required"};let o=r[r.length-1]||"",a=o.includes(".")?o.split(".").pop().toLowerCase():"";return!a||!Us.has(a)?{ok:!1,error:"unsupported_text_extension"}:{ok:!0,path:r.join("/")}},"normalizeGitHubWriteWorkspacePath"),$s=n(e=>{let t=new TextEncoder().encode(String(e||"")),r=32768,o="";for(let a=0;a<t.length;a+=r)o+=String.fromCharCode(...t.slice(a,a+r));return btoa(o)},"encodeBase64Utf8"),tt=class extends Error{static{n(this,"GitHubWorkspaceWriteError")}constructor(t,r,o){super(t),this.name="GitHubWorkspaceWriteError",this.code=t,this.upstreamStatus=r,this.upstreamMessage=o}},xn=n(e=>String(e||"unknown").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim().slice(0,240),"sanitizeGitHubApiMessage"),Tn=n((e,t)=>{let r=String(t||"").split("/").map(a=>encodeURIComponent(a)).join("/"),o=new URL(`https://api.github.com/repos/${encodeURIComponent(e.owner)}/${encodeURIComponent(e.repo)}/contents/${r}`);return e.branch&&o.searchParams.set("ref",e.branch),o},"buildGitHubContentsApiUrl"),En=n(e=>({accept:"application/vnd.github+json",authorization:`Bearer ${e.token}`,"user-agent":"knowgrph-cloudflare-pages","x-github-api-version":"2022-11-28"}),"gitHubApiHeaders"),Cn=n(e=>{let t=String(e||"").replace(/\/+$/,"")||"/";return t===Ms||t===Ns},"isGitHubWorkspaceWriteRoutePath"),Ks=n(async(e,t)=>{let r=await fetch(Tn(e,t),{method:"GET",headers:En(e)});if(r.status===404)return null;let o=await r.json().catch(()=>null);if(!r.ok)throw new tt("github_read_failed",r.status,xn(o?.message||r.statusText));if(o?.type&&o.type!=="file")throw new tt("github_path_not_file",409,t);return String(o?.sha||"").trim()||null},"fetchGitHubExistingFileSha"),Hs=n(async(e,t,r)=>{let o=await Ks(e,t.repositoryPath),a={message:r,content:$s(t.text),...e.branch?{branch:e.branch}:{},...o?{sha:o}:{}},s=await fetch(Tn(e,t.repositoryPath),{method:"PUT",headers:{...En(e),"content-type":"application/json; charset=utf-8"},body:JSON.stringify(a)}),i=await s.json().catch(()=>null);if(!s.ok)throw new tt("github_write_failed",s.status,xn(i?.message||s.statusText));return{workspacePath:t.workspacePath,repositoryPath:t.repositoryPath,action:o?"updated":"created",commitSha:String(i?.commit?.sha||""),contentSha:String(i?.content?.sha||""),htmlUrl:String(i?.content?.html_url||"")}},"putGitHubWorkspaceFile"),js=n(async(e,t)=>{let r=Ls(t);if(!r.ok)return pe(503,{ok:!1,status:"skipped",error:"github_write_not_configured",missing:r.missing});let o=await e.json().catch(()=>null),a=Array.isArray(o?.files)?o.files:[];if(a.length<1)return pe(400,{ok:!1,status:"failed",error:"files_required"});if(a.length>wn)return pe(413,{ok:!1,status:"failed",error:"too_many_files",maxFiles:wn});let s=[],i=new Set;for(let h of a){let u=Ds(h?.workspacePath||h?.path);if(!u.ok)return pe(400,{ok:!1,status:"failed",error:u.error,workspacePath:String(h?.workspacePath||h?.path||"")});if(i.has(u.path))continue;i.add(u.path);let y=String(h?.text??"");if(new TextEncoder().encode(y).length>Sn)return pe(413,{ok:!1,status:"failed",error:"file_too_large",workspacePath:`/${u.path}`,maxTextBytes:Sn});s.push({workspacePath:`/${u.path}`,repositoryPath:u.path,text:y})}if(s.length<1)return pe(400,{ok:!1,status:"failed",error:"files_required"});let c=String(o?.message||"").trim(),l=c&&c.length<=160?c:`Knowgrph chat artifact ${s[0].repositoryPath}`;if(o?.dryRun===!0)return pe(200,{ok:!0,status:"dry_run",repository:`${r.owner}/${r.repo}`,branch:r.branch||null,files:s.map(h=>({workspacePath:h.workspacePath,repositoryPath:h.repositoryPath,textBytes:new TextEncoder().encode(h.text).length}))});try{let h=[];for(let u of s)h.push(await Hs(r,u,l));return pe(200,{ok:!0,status:"applied",repository:`${r.owner}/${r.repo}`,branch:r.branch||null,files:h})}catch(h){let u=h instanceof tt;return pe(u?424:500,{ok:!1,status:"failed",error:u?h.code:h instanceof Error?h.message:String(h||"github_write_failed"),...u?{upstreamStatus:h.upstreamStatus,upstreamMessage:h.upstreamMessage}:{}})}},"handleGitHubWorkspaceWrite"),Bs=n(e=>`User-agent: *
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
`,"buildRobotsTxt"),Gs=n(e=>`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${k}</loc>
    <lastmod>${Te}</lastmod>
  </url>
  <url>
    <loc>${k}llms.txt</loc>
    <lastmod>${Te}</lastmod>
  </url>
  <url>
    <loc>${e}.well-known/mcp/server-card.json</loc>
    <lastmod>${Te}</lastmod>
  </url>
</urlset>
`,"buildSitemapXml"),Ws=Bs(`${k}sitemap.xml`),Fs=Gs(k),On={linkset:[{anchor:k,"service-desc":[{href:`${k}.well-known/openapi.json`,type:"application/vnd.oai.openapi+json;version=3.1"}],"service-doc":[{href:`${k}llms.txt`,type:"text/plain"}],status:[{href:Ze,type:"application/health+json"}],"service-meta":[{href:`${k}.well-known/mcp/server-card.json`,type:"application/json"},{href:Ut,type:"application/json"}]}]},vn={openapi:"3.1.0",info:{title:"Knowgrph API",version:"0.1.0",description:"Agent discovery surface for the Knowgrph Cloudflare deployment."},servers:[{url:j,description:"Knowgrph Cloudflare deployment"}],paths:Xo({appBasePath:x,appA2aAgentCardPath:br,healthPath:et})},dt={resource:k,resource_name:"Knowgrph",authorization_servers:[j],scopes_supported:["knowgrph:read","knowgrph:source-files:read"],bearer_methods_supported:["header"],resource_documentation:`${k}llms.txt`},Ar=`${j}/cdn-cgi/access`,Ce={skill:`${j}/auth.md`,register_uri:`${k}agent/auth`,claim_uri:`${k}agent/auth/claim`,revocation_uri:`${k}agent/auth/revoke`,identity_types_supported:["anonymous","identity_assertion"],anonymous:{credential_types_supported:["api_key"]},identity_assertion:{assertion_types_supported:["urn:ietf:params:oauth:token-type:id-jag","verified_email"],credential_types_supported:["access_token","api_key"]},events_supported:["https://schemas.workos.com/events/agent/auth/identity/assertion/revoked"],registration_status:"metadata_published_runtime_user_mediated"},_n={issuer:j,resource:dt.resource,resource_name:dt.resource_name,authorization_servers:dt.authorization_servers,cloudflare_access_issuer:Ar,authorization_endpoint:`${Ar}/login`,token_endpoint:`${Ar}/token`,jwks_uri:`${k}.well-known/http-message-signatures-directory`,response_types_supported:["code"],grant_types_supported:["authorization_code","client_credentials"],token_endpoint_auth_methods_supported:["client_secret_basic","private_key_jwt"],scopes_supported:dt.scopes_supported,agent_auth:Ce},zs=`# Knowgrph auth.md

Knowgrph publishes agent registration metadata for the read-only agent surface at ${k}. Agents should first fetch ${j}/.well-known/oauth-protected-resource, follow its authorization_servers entry to ${j}/.well-known/oauth-authorization-server, and read the agent_auth block.

## Registration

- Register: ${Ce.register_uri}
- Claim: ${Ce.claim_uri}
- Revoke: ${Ce.revocation_uri}
- Supported identity types: ${Ce.identity_types_supported.join(", ")}
- Anonymous credentials: ${Ce.anonymous.credential_types_supported.join(", ")}
- Identity assertion types: ${Ce.identity_assertion.assertion_types_supported.join(", ")}
- Identity assertion credentials: ${Ce.identity_assertion.credential_types_supported.join(", ")}
- Revocation events: ${Ce.events_supported.join(", ")}
- Current runtime policy: user-mediated access through the existing Cloudflare Access/OAuth boundary; no separate MCP-only auth stack.
- Pipeline rule: agents must not bypass MainPanel -> FloatingPanel Chat -> KGC -> Canvas for user-mediated graph work; published HTTP MCP tools remain read-only until mutation auth and conflict semantics are implemented.`,In={name:"Knowgrph Agent",description:"Agent-readable discovery, published-document retrieval, and WebMCP-ready metadata surface for Knowgrph.",version:"0.1.0",provider:{organization:"airvio / joohwee",url:k},url:`${k}mcp`,preferredTransport:"JSONRPC",supportedInterfaces:[{url:`${k}mcp`,protocolBinding:"JSONRPC",transportProtocol:"JSONRPC",description:"Primary machine interface for read-only discovery and source-file document access."},{url:Rr,protocolBinding:"HTTP+JSON/REST",transportProtocol:"HTTP+JSON/REST",description:"Published source-files index and storage-backed document read surface."}],capabilities:{streaming:!1,pushNotifications:!1,stateTransitionHistory:!1,extendedAgentCard:!1},defaultInputModes:["text/plain","text/markdown","application/json"],defaultOutputModes:["text/plain","text/markdown","application/json"],skills:Vo(Dt)},De={serverInfo:{name:"knowgrph",version:"0.1.0"},transport:{type:xe,url:`${k}mcp`,stateless:!0},capabilities:{tools:Dt.map(e=>({name:e.name,title:e.title,description:e.description,inputSchema:e.inputSchema,outputSchema:e.outputSchema,securitySchemes:e.securitySchemes,annotations:e.annotations,_meta:e._meta})),resources:{listChanged:!1},prompts:{listChanged:!1},...lr()},prompts:Pn,resourceTemplates:An,clientSetups:pr({baseUrl:k,mcpUrl:`${k}mcp`,serverName:"knowgrph"}),links:{apiCatalog:`${k}.well-known/api-catalog`,skills:`${k}.well-known/agent-skills/index.json`,status:Ze,agentCard:Ut}},qs=vt({appUrl:k,updatedAt:Te}),xr=Dt.map(e=>({name:e.webName,title:e.title,description:e.description,inputSchema:e.inputSchema,outputSchema:e.outputSchema,securitySchemes:e.securitySchemes,annotations:e.annotations,_meta:e._meta})),$e=n(e=>mt(Dt.find(t=>t.name===e)?.webName),"findWebMcpToolName"),Ys=$e(d.search),Vs=$e(d.fetch),Js=$e(d.listSourceFiles),Xs=$e(d.readSourceFile),Qs=$e(d.readSharedDocument),Zs=$e(d.inspectSharedDocumentStructure),ei=$e(d.inspectAgentSurface),ti=Object.fromEntries(Object.values(O).map(e=>[e,$e(e)])),ri=`(() => {
  const root = globalThis;
  const siteOrigin = ${JSON.stringify(j)};
  const appBasePath = ${JSON.stringify(x)};
  const defaultWorkspaceId = ${JSON.stringify(lt)};
  const toolDefinitions = ${JSON.stringify(xr)};
  const toolNames = ${JSON.stringify(xr.map(e=>e.name))};
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
  const createPublishedDocIdentityResolver = ${an};
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
  const createPublishedAgentReadyToolExecutors = ${Bo};
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
      search: ${JSON.stringify(Ys)},
      fetch: ${JSON.stringify(Vs)},
      listSourceFiles: ${JSON.stringify(Js)},
      readSourceFile: ${JSON.stringify(Xs)},
      readSharedDocument: ${JSON.stringify(Qs)},
      inspectSharedDocumentStructure: ${JSON.stringify(Zs)},
      inspectAgentSurface: ${JSON.stringify(ei)},
      strybordActionTools: ${JSON.stringify(ti)},
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
      toolName: ${JSON.stringify(d.inspectAgentSurface)},
    }),
    callStrybordActionTool: async (toolId, input = {}) => {
      const response = await fetch(buildStorageRequestUrl(${JSON.stringify(dr("__TOOL__"))}.replace("__TOOL__", encodeURIComponent(toolId))), {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify(input),
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok) throw new Error(payload && payload.error ? payload.error : "Strybord action failed with " + response.status);
      return payload;
    },
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
})();`,oi=n(async e=>{if(!(e.headers.get("content-type")||"").toLowerCase().includes("text/html"))return e;let r=await e.text();if(xr.every(i=>r.includes(i.name)))return new Response(r,e);let o=`<script>${ri}<\/script>`,a=r.includes("</head>")?r.replace("</head>",`${o}</head>`):`${r}${o}`,s=new Response(a,e);return s.headers.delete("content-length"),s},"injectWebMcpScript"),ni={search:d.search,fetch:d.fetch,listSourceFiles:d.listSourceFiles,readSourceFile:d.readSourceFile,readSharedDocument:d.readSharedDocument,inspectSharedDocumentStructure:d.inspectSharedDocumentStructure,inspectAgentSurface:d.inspectAgentSurface,strybordActionTools:Object.fromEntries(Object.values(O).map(e=>[e,e]))},ai=n(async e=>{let t=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(r)].map(o=>o.toString(16).padStart(2,"0")).join("")},"sha256Hex"),Mn=Yo(),si=Object.fromEntries(ct.map(e=>[e.name,ai(Mn[e.name]||"")])),bn=new Map(ct.map(e=>[`${x}${e.path}`.replace(/\/+$/,""),Mn[e.name]||""]));var Nn=n(async()=>Jo({appUrl:k,updatedAt:Te,sha256ByName:si}),"agentSkillsIndex"),ii={keys:[{kty:"OKP",crv:"Ed25519",kid:"knowgrph-agent-ready-2026-05-21",use:"sig",alg:"EdDSA",x:"11qYAYdkVKxA4G0wV47IxPtYfFVH_H7zmC2Di2PcvLU"}]},ci={protocolVersion:"2025-06-18",capabilities:{tools:{},resources:{},prompts:{listChanged:!1},...lr()},serverInfo:De.serverInfo},Tr=De.capabilities.tools,li=[qs],pi=Pn,ui=An,Un=n(()=>({status:"pass",service:"knowgrph-agent-ready-pages",homepage:k,health:Ze,updatedAt:Te,checks:{linkHeaders:!0,markdownNegotiation:!0,httpMcp:!0,webMcp:!0,mcpApps:!0,commerce:{acp:!0,ucp:!0,mpp:!0,x402:!0},defaultWorkspaceId:lt}}),"buildHealthStatusBody"),di=n(async()=>jo({baseUrl:k,health:Un(),apiCatalog:On,openApi:vn,mcpServerCard:De,agentCard:In,agentSkills:await Nn(),commerce:nr({origin:j})}),"buildAgentSurfaceInspection"),mi=hr({toolNames:ni,defaultWorkspaceId:lt,publicBaseUrl:j,buildStorageDocPath:kn,fetchSourceFilesIndexResponse:n(()=>fetch(`${Nt}${ln()}`,{headers:{accept:"text/markdown"}}),"fetchSourceFilesIndexResponse"),fetchStorageMarkdownResponse:n(e=>fetch(`${Nt}${e}`,{headers:{accept:"text/markdown"}}),"fetchStorageMarkdownResponse"),resolveSharedDocumentInput:n((e={})=>It({shareToken:e?.shareToken,shareUrl:e?.shareUrl,appBasePath:x,baseUrl:j}),"resolveSharedDocumentInput"),inspectSharedDocumentStructure:Go,buildAgentSurfaceInspection:di,callStrybordActionTool:n(async(e,t={},r={})=>{let o=r.request,a={"content-type":"application/json",accept:"application/json"},s=o&&o.headers?o.headers.get("authorization"):"";s&&(a.authorization=s);let i=String(t?.idempotencyKey||t?.idempotency_key||"").trim();i&&(a["idempotency-key"]=i);let c=await fetch(`${j}${dr(e)}`,{method:"POST",headers:a,body:JSON.stringify(t||{})}),l=await c.json().catch(()=>null);if(!c.ok)throw new Error(l?.error||`Strybord action failed with ${c.status}`);return l},"callStrybordActionTool")}),Er=n(e=>{try{let t=new URL(e,j);return It({shareUrl:`${t.pathname}${t.search}`,baseUrl:j,appBasePath:x})}catch{return null}},"resolvePublishedDocRequestIdentity"),hi=n(e=>It({shareUrl:String(e||""),baseUrl:j,appBasePath:x}),"resolvePublishedDocPathIdentity"),gi=n(async(e,t)=>{let r=new URL(kn(t.canonicalPath,t.workspaceId),Nt),o=await fetch(r,{method:"GET",headers:{accept:"text/markdown, text/plain;q=0.9, */*;q=0.1"}}),a=new Headers(o.headers),s=String(a.get("vary")||"");return a.set("vary",s?`${s}, Accept`:"Accept"),new Response(String(e.method||"").toUpperCase()==="HEAD"?null:o.body,{status:o.status,statusText:o.statusText,headers:a})},"proxyPublishedDocMarkdownResponse"),fi=n(async e=>{try{let t=await e.json();return t&&typeof t=="object"?t:null}catch{return null}},"readJsonRpcRequest"),Ee=n((e,t)=>pe(200,{jsonrpc:"2.0",id:e??null,result:t}),"jsonRpcResult"),Le=n((e,t,r)=>pe(200,{jsonrpc:"2.0",id:e??null,error:{code:t,message:r}}),"jsonRpcError"),yi=n(e=>String(e.headers.get("accept")||"").toLowerCase().split(",").some(t=>t.trim().startsWith("text/event-stream")),"requestAcceptsEventStream"),kr=n((e,t)=>Object.prototype.hasOwnProperty.call(e,t),"hasOwnProperty"),Ln=n(e=>{if(Array.isArray(e))return e.length>0&&e.every(Ln);if(!e||typeof e!="object"||String(e.jsonrpc||"")!=="2.0")return!1;let t=typeof e.method=="string"&&e.method.length>0,r=kr(e,"id"),o=kr(e,"result")||kr(e,"error");return t&&!r||!t&&o},"isJsonRpcNotificationOrResponse"),We=n(async(e,t)=>{let r=mi[e];if(typeof r!="function")throw new Error(`unknown tool: ${e}`);return r(t,{request:We.currentRequest||null})},"executeMcpTool");We.currentRequest=null;var wi=n(async e=>{let t=mt(e);if(t===le)return ur({appUrl:k,updatedAt:Te,toolNames:Tr.map(o=>o.name)});let r=To(t);if(r){let o=await We(d.fetch,{id:r});return Eo({uri:t,sourceFile:o})}throw new Error(`unknown resource: ${e}`)},"readMcpResource"),Si=n(async e=>{let t=String(e.method||"GET").toUpperCase();if(t==="GET"||t==="HEAD")return yi(e)?yn(405,{allow:"POST"}):Se({ok:!0,transport:De.transport,serverInfo:De.serverInfo,capabilities:De.capabilities});if(t!=="POST")return pe(405,{ok:!1,error:"unsupported_method"});let r=await fi(e);if(!r)return Le(null,-32700,"Parse error");if(Ln(r))return yn(202);if(Array.isArray(r))return Le(null,-32600,"Batch JSON-RPC requests are not supported");switch(r.method){case"initialize":return Ee(r.id,ci);case"tools/list":return Ee(r.id,{tools:Tr});case"prompts/list":return Ee(r.id,{prompts:pi});case"resources/templates/list":return Ee(r.id,{resourceTemplates:ui});case"prompts/get":{let o=mt(r.params?.name),a=r.params?.arguments&&typeof r.params.arguments=="object"?r.params.arguments:{};if(!o)return Le(r.id,-32602,"Prompt name is required");try{return Ee(r.id,Po(o,a))}catch(s){return Le(r.id,-32602,s instanceof Error?s.message:String(s))}}case"resources/list":return Ee(r.id,{resources:li});case"resources/read":{let o=mt(r.params?.uri);if(!o)return Le(r.id,-32602,"Resource URI is required");try{return Ee(r.id,await wi(o))}catch(a){return Le(r.id,-32602,a instanceof Error?a.message:String(a))}}case"tools/call":{let o=mt(r.params?.name),a=r.params?.arguments&&typeof r.params.arguments=="object"?r.params.arguments:{};if(!o)return Le(r.id,-32602,"Tool name is required");try{We.currentRequest=e;let s=await We(o,a);return We.currentRequest=null,Ee(r.id,{content:[{type:"text",text:typeof s?.markdown=="string"?s.markdown:JSON.stringify(s,null,2)}],structuredContent:s,isError:!1})}catch(s){return We.currentRequest=null,Ee(r.id,{content:[{type:"text",text:s instanceof Error?s.message:String(s)}],isError:!0})}}default:return Le(r.id,-32601,"Method not found")}},"handleMcpTransport"),_i=n(()=>ur({appUrl:k,updatedAt:Te,toolNames:Tr.map(e=>e.name)}).contents[0].text,"buildKnowgrphMcpAppHtmlBody");var Cr=n(e=>e===x||e===`${x}/`,"handlesKnowgrphRoot"),bi=n(e=>Cr(e)||!!hi(e),"handlesKnowgrphHtmlSurface"),Ri=n(e=>{let t=new URL(e.url),r=t.pathname.replace(/\/+$/,"")||"/",o=Er(e.url);return r===et?"health":r===`${x}/mcp`?"mcp":Cn(r)?"github-workspace-write":r===`${x}/robots.txt`?"robots":r===`${x}/sitemap.xml`?"sitemap":r===`${x}/auth.md`||r==="/auth.md"?"auth-md":r.startsWith(`${x}/.well-known/`)?"well-known":o?pt(e)?"shared-doc-markdown":"shared-doc-html":Cr(t.pathname)?pt(e)?"homepage-markdown":"homepage-html":"app-surface"},"resolveAgentReadyRouteTag"),Lt=n((e,t)=>fn(t,{owner:dn,tag:Ri(e)}),"withKnowgrphRouteHeaders"),Rn=n(async e=>{let t=new URL(e.url),r=t.pathname.replace(/\/+$/,"")||"/",o=Er(e.url);if(o&&pt(e))return gi(e,o);if(Cr(t.pathname)&&pt(e))return gn(hn);switch(r){case et:return Is(Un());case`${x}/mcp`:return Si(e);case`${x}/robots.txt`:return ut(Ws,"text/plain; charset=utf-8");case`${x}/sitemap.xml`:return ut(Fs,"application/xml; charset=utf-8");case`${x}/auth.md`:case"/auth.md":return ut(zs,"text/markdown; charset=utf-8");case`${x}/.well-known/api-catalog`:return Se(On,"application/linkset+json; charset=utf-8");case`${x}/.well-known/openapi.json`:return Se(vn,"application/vnd.oai.openapi+json; charset=utf-8");case br:return Se(In);case`${x}/.well-known/oauth-protected-resource`:return Se(dt);case`${x}/.well-known/oauth-authorization-server`:return Se(_n);case`${x}/.well-known/openid-configuration`:return Se(_n);case`${x}/.well-known/mcp/server-card.json`:return Se(De);case`${x}/.well-known/mcp/apps/knowgrph-agent-ready.html`:return vs(_i());case`${x}/.well-known/mcp.json`:return Se(De);case`${x}/.well-known/agent-skills/index.json`:return Se(await Nn());case`${x}/.well-known/http-message-signatures-directory`:return Se(ii);default:return bn.has(r)?ut(bn.get(r),"text/markdown; charset=utf-8"):null}},"routeResponse");async function Ke(e){let{env:t,request:r}=e,o=String(r.method||"GET").toUpperCase(),a=new URL(r.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(o==="POST"&&a.pathname.replace(/\/+$/,"")===`${x}/mcp`)return Lt(r,await Rn(r));if(o==="POST"&&Cn(a.pathname))return Lt(r,await js(r,t));if(o!=="GET"&&o!=="HEAD")return pe(405,{ok:!1,error:"unsupported_method"});let s=await Rn(r);if(s){let h=Lt(r,s);return o==="HEAD"?new Response(null,h):h}let i=Er(r.url)?await Qo(e,x):await e.next();if(!bi(a.pathname))return i;let c=o==="HEAD"?i:await oi(i),l=new Response(o==="HEAD"?null:c.body,c);return l.headers.set("link",mn),Lt(r,l)}n(Ke,"onRequest");async function Dn(e){return Ke(e)}n(Dn,"onRequest");async function $n(e){return Ke(e)}n($n,"onRequest");async function Kn(e){return Ke(e)}n(Kn,"onRequest");var Pi=Object.freeze(new Set(["","80","443"])),Ai=Object.freeze([".local",".localhost",".internal"]),ki=Object.freeze(new Set(["localhost"]));function Fe(e){return String(e||"").trim().toLowerCase()}n(Fe,"normalizeHostname");function xi(e){let t=Fe(e);if(!/^\d{1,3}(\.\d{1,3}){3}$/.test(t))return!1;let r=t.split(".").map(o=>Number(o));return r.length!==4?!1:r.every(o=>Number.isInteger(o)&&o>=0&&o<=255)}n(xi,"isIpv4Literal");function Hn(e){let[t,r,o,a]=e.split(".").map(s=>Number(s));return(t<<24|r<<16|o<<8|a)>>>0}n(Hn,"ipv4ToInt");function Ti(e,t,r){if(!Number.isInteger(r)||r<0||r>32)return!1;if(r===0)return!0;let o=4294967295<<32-r>>>0;return(e&o)===(t&o)}n(Ti,"inIpv4Cidr");function Ei(e){let t=Fe(e);return!t||!t.includes(":")?!1:/^[0-9a-f:]+$/i.test(t)}n(Ei,"isIpv6Literal");function Ci(e){let t=Fe(e);return!!(!t||t==="::1"||t==="0:0:0:0:0:0:0:1"||t.startsWith("fc")||t.startsWith("fd")||/^fe[89ab]/i.test(t))}n(Ci,"isBlockedIpv6");function Oi(e,{blockedExact:t,blockedSuffixes:r}={}){let o=Fe(e);if(!o)return!0;let a=t||ki;if(a instanceof Set&&a.has(o))return!0;let s=r||Ai;if(Array.isArray(s))for(let i of s){let c=Fe(i);if(c&&(o===c||o.endsWith(c)))return!0}return!1}n(Oi,"isBlockedHostname");function vi(e){let t=Fe(e);if(!t)return!0;if(xi(t)){let r=Hn(t),o=[{base:"0.0.0.0",bits:8},{base:"10.0.0.0",bits:8},{base:"127.0.0.0",bits:8},{base:"169.254.0.0",bits:16},{base:"172.16.0.0",bits:12},{base:"192.168.0.0",bits:16},{base:"100.64.0.0",bits:10}];for(let a of o){let s=Hn(a.base);if(Ti(r,s,a.bits))return!0}return!1}return Ei(t)?Ci(t):!1}n(vi,"isBlockedIpLiteral");function $t(e,{allowedPorts:t}={}){let r=String(e||"").trim();if(!r)throw new Error("invalid_url");let o;try{o=new URL(r)}catch{throw new Error("invalid_url")}if(o.protocol!=="http:"&&o.protocol!=="https:")throw new Error("invalid_url");if(o.username||o.password)throw new Error("invalid_url");let a=t||Pi,s=String(o.port||"");if(a instanceof Set&&!a.has(s))throw new Error("port_not_allowed");let i=Fe(o.hostname);if(!i)throw new Error("invalid_url");if(Oi(i))throw new Error("blocked_host");if(vi(i))throw new Error("blocked_host");return o}n($t,"parseAndValidateExternalUrl");function Kt(e){return String(e.headers.get("sec-fetch-site")||"").trim().toLowerCase()==="cross-site"}n(Kt,"shouldRejectCrossSiteFetch");var Ii={"content-type":"application/json; charset=utf-8","cache-control":"public, max-age=600"};function ze(e,t={}){return new Response(JSON.stringify(e),{...t,headers:{...Ii,...t.headers||{}}})}n(ze,"json");function Ht(...e){for(let t of e){if(!t)continue;let r=String(t).trim();if(r)return r}return null}n(Ht,"pickFirst");function Mi(e){let t=e.slice(0,8e4),r=t.match(/<title[^>]*>([^<]*)<\/title>/i),o=t.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i),a=t.match(/<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i),s=t.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i),i=t.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i),c=t.match(/<meta[^>]+property=["']og:site_name["'][^>]*content=["']([^"']+)["'][^>]*>/i);return{title:Ht(o?.[1],r?.[1]),description:Ht(a?.[1],s?.[1]),image:Ht(i?.[1]),siteName:Ht(c?.[1])}}n(Mi,"extractMeta");async function jn(e){let t=e.request.url,r=new URL(t);if(r.searchParams.get("ping")==="1")return ze({ok:!0,ping:!0});let o=r.searchParams.get("url")||"";if(Kt(e.request))return ze({ok:!1,error:"forbidden"},{status:403,headers:{"cache-control":"no-store"}});let a;try{a=$t(o)}catch{return ze({ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}try{let s=await fetch(a.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkPreview/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),i=s.headers.get("content-type")||"";if(!s.ok)return ze({ok:!1,error:"fetch_failed",status:s.status,url:a.toString()},{status:200,headers:{"cache-control":"no-store"}});if(!i.includes("text/html"))return ze({ok:!0,url:a.toString(),domain:a.host,contentType:i,title:null,description:null,image:null,siteName:null});let c=await s.text(),l=Mi(c);return ze({ok:!0,url:a.toString(),domain:a.host,contentType:i,...l})}catch(s){return ze({ok:!1,error:"exception",message:s?.message||String(s),url:a.toString()},{status:200,headers:{"cache-control":"no-store"}})}}n(jn,"onRequestGet");var Bn=35e4;function Ni(e){let t=e;return t=t.replace(/<script\b[\s\S]*?<\/script>/gi,""),t=t.replace(/<iframe\b[\s\S]*?<\/iframe>/gi,""),t=t.replace(/<object\b[\s\S]*?<\/object>/gi,""),t=t.replace(/<embed\b[\s\S]*?>/gi,""),t=t.replace(/<noscript\b[\s\S]*?<\/noscript>/gi,""),t=t.replace(/\son[a-z]+\s*=\s*"[^"]*"/gi,""),t=t.replace(/\son[a-z]+\s*=\s*'[^']*'/gi,""),t}n(Ni,"stripActiveContent");function Ui({url:e,title:t,innerHtml:r}){let o=t?String(t).slice(0,140):"Preview",a=String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");return`<!doctype html>
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
</html>`}n(Ui,"buildWrapper");async function Gn(e){let r=new URL(e.request.url).searchParams.get("url")||"";if(Kt(e.request))return new Response("Forbidden",{status:403,headers:{"cache-control":"no-store"}});let o;try{o=$t(r)}catch(a){let s=a instanceof Error?a.message:"invalid_url";return new Response(s,{status:400,headers:{"cache-control":"no-store"}})}try{let a=await fetch(o.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkProxy/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),s=a.headers.get("content-type")||"";if(!a.ok)return new Response(`Fetch failed (${a.status})`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});if(!s.includes("text/html"))return new Response(`Unsupported content-type: ${s}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public, max-age=600"}});let i=await a.text();i.length>Bn&&(i=i.slice(0,Bn));let l=i.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()||o.host;i=Ni(i),/<base\s/i.test(i)||(i=i.replace(/<head([^>]*)>/i,`<head$1><base href="${o.origin}/">`));let u=Ui({url:o.toString(),title:l,innerHtml:i});return new Response(u,{status:200,headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600","content-security-policy":"default-src 'none'; img-src https: data:; style-src 'unsafe-inline' https:; font-src https: data:; frame-ancestors 'self';"}})}catch(a){return new Response(`Exception: ${a?.message||String(a)}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}})}}n(Gn,"onRequestGet");var Or="api.openai.com",jt="api.miromind.ai",Bt="apihub.agnes-ai.com",Gt="ark.ap-southeast.bytepluses.com",vr="ark.eu-west.bytepluses.com",Fn=new Set(["localhost","127.0.0.1","0.0.0.0"]),ke=n(e=>String(e||"").trim().toLowerCase(),"normalizeHost"),_e=n((e,t)=>String(e.get(t)||"").trim(),"readHeader"),zn=n(e=>Fn.has(ke(e)),"isLocalHost"),Wn=n(e=>{let t=String(e||"").trim();if(!t)return new Set;let r=new Set;return t.split(",").map(o=>ke(o)).filter(Boolean).forEach(o=>r.add(o)),r},"parseCsvSet"),qn=n((e,{includeOpenAi:t=!1,includeMiroMind:r=!1,includeAgnes:o=!1,includeBytePlus:a=!1}={})=>{let s=Wn(e.KNOWGRPH_INTEGRATION_ALLOWED_HOSTS),i=Wn(e.KNOWGRPH_CHAT_PROXY_ALLOWED_HOSTS),c=s.size?s:i,l=c.size?c:new Set([...Fn]);return t&&l.add(Or),r&&l.add(jt),o&&l.add(Bt),a&&(l.add(Gt),l.add(vr)),l},"parseAllowedHosts"),se=n(e=>{let t=_e(e.headers,"origin");if(!t)return{};let r="";try{r=ke(new URL(t).host)}catch{return{}}let o=ke(new URL(e.url).host);return r===o||r.startsWith("localhost:")||r.startsWith("127.0.0.1:")?{"access-control-allow-origin":t,vary:"Origin"}:{}},"corsHeaders"),ge=n((e,t,r)=>new Response(JSON.stringify(t),{status:r,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...se(e)}}),"jsonResponse");var Wt={"content-type":"application/json; charset=utf-8","cache-control":"no-store"};function ht(e,t,r=200){return new Response(JSON.stringify(t),{status:r,headers:{...Wt,...se(e)}})}n(ht,"jsonResponse");async function Li(e){let t=new URL("/knowgrph/imports/hackamap/hackamap-graph.json",e.url),r=await fetch(t.toString(),{redirect:"follow"});return r.ok?await r.json():null}n(Li,"fetchHackamapGraphJson");async function qe(e,t){let r=new URL(t,e.url),o=await fetch(r.toString(),{redirect:"follow"});return o.ok?await o.json():null}n(qe,"fetchHackamapJson");async function Di(e){let t=await qe(e,"/knowgrph/imports/hackamap/hackamap_api_graph.json");return Xn(t)?t:null}n(Di,"fetchHackamapApiGraphJson");async function $i(e){let t=await qe(e,"/knowgrph/imports/hackamap/hackamap_pipeline.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n($i,"fetchHackamapPipelineJson");async function Vn(e){let t=await qe(e,"/knowgrph/imports/hackamap/hackamap_query_presets.json");return Array.isArray(t)?t.filter(Boolean):[]}n(Vn,"fetchHackamapQueryPresetsJson");async function Jn(e){let t=await qe(e,"/knowgrph/imports/hackamap/query-outputs/query-runs.manifest.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n(Jn,"fetchHackamapQueryRunsManifestJson");function Xn(e){return!e||typeof e!="object"||Array.isArray(e)?!1:Array.isArray(e.nodes)&&Array.isArray(e.edges)}n(Xn,"isApiGraphPayload");function Qn(e,t){let r=String(e&&e.output&&e.output.per_table_prefix||e?.id||t?.preset||"").trim(),o=String(t?.output_suffix||"").trim();return o?`${r}-${o}`:r}n(Qn,"buildHackamapTablePrefix");function Ir(e,t){if(!Array.isArray(e))return[];let r=[];for(let o of e){if(!o||typeof o!="object"||Array.isArray(o))continue;let a=String(o[t]||"").trim();a&&r.push(a)}return r}n(Ir,"collectRowIds");async function Ki(e,t){let r=await qe(e,t);return Array.isArray(r)?r.length:0}n(Ki,"countHackamapQueryRows");async function Hi(e,t,r){let o=Qn(t,r);if(!o)return{};let a=["events","demos","sources","organizer","team","techstack"],s=await Promise.all(a.map(async i=>[i,await Ki(e,`/knowgrph/imports/hackamap/query-outputs/${i}.${o}.query.json`)]));return Object.fromEntries(s.filter(([,i])=>i>0))}n(Hi,"readHackamapRunTableCounts");function Mr(e){return Array.isArray(e)?e.map(Mr):!e||typeof e!="object"?e:Object.fromEntries(Object.entries(e).sort(([t],[r])=>String(t).localeCompare(String(r))).map(([t,r])=>[t,Mr(r)]))}n(Mr,"sortObjectKeys");function ji(e){try{return JSON.stringify(Mr(e))}catch{return""}}n(ji,"stableParamSignature");function Bi(e){return typeof e=="string"?{value:e,label:e}:{value:e,label:JSON.stringify(e)}}n(Bi,"toBuilderOption");function Gi(e,t){return e.map(r=>{let o=String(r?.id||"").trim();if(!o)return null;let a=r?.params&&typeof r.params=="object"&&!Array.isArray(r.params)?r.params:{},s=t.filter(l=>String(l?.preset||"").trim()===o),i=Array.from(new Set([...Object.keys(a),...s.flatMap(l=>l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?Object.keys(l.params):[])])).sort((l,h)=>String(l).localeCompare(String(h))),c=Object.fromEntries(i.map(l=>{let h=new Set,u=[],y=[a[l],...s.map(P=>P?.params&&typeof P.params=="object"&&!Array.isArray(P.params)?P.params[l]:void 0)];for(let P of y){if(typeof P>"u")continue;let S=ji(P);!S||h.has(S)||(h.add(S),u.push(Bi(P)))}return[l,u]}));return{id:o,title:String(r?.title||o).trim(),params:a,param_keys:i,published_param_options:c}}).filter(Boolean)}n(Gi,"buildHackamapPresetRuntimeEntries");async function Wi(e){let[t,r,o]=await Promise.all([$i(e),Vn(e),Jn(e)]),a=t&&typeof t=="object"?t.runtime||{}:{},s=String(a?.query_selection?.default_run_id||"").trim()||"enhanced",i=Array.isArray(o?.runs)?o.runs:[],c=(await Promise.all(i.map(async l=>{let h=String(l?.id||"").trim(),u=String(l?.preset||"").trim();if(!h)return null;let y=r.find(S=>String(S?.id||"").trim()===u),P=await Hi(e,y,l);return{id:h,preset:u,title:String(l?.title||l?.id||"").trim(),params:l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?l.params:{},output_suffix:String(l?.output_suffix||"").trim(),is_default:h===s,table_counts:P}}))).filter(l=>l?.id);return{ok:!0,runtime:{...a&&typeof a=="object"?a:{},presets:Gi(r,c),runs:c}}}n(Wi,"buildHackamapRuntimeMeta");async function Fi(e,t){let r=String(t||"").trim();if(!r)return null;let[o,a]=await Promise.all([Vn(e),Jn(e)]),i=(Array.isArray(a?.runs)?a.runs:[]).find(A=>String(A?.id||"").trim()===r);if(!i)return null;let c=o.find(A=>String(A?.id||"").trim()===String(i?.preset||"").trim()),l=Qn(c,i);if(!l)return null;let[h,u]=await Promise.all([qe(e,`/knowgrph/imports/hackamap/query-outputs/events.${l}.query.json`),qe(e,`/knowgrph/imports/hackamap/query-outputs/demos.${l}.query.json`)]),y=new Set(Ir(h,"id")),P=new Set(Ir(u,"id")),S=Ir(u,"event_id");for(let A of S)y.add(A);return{eventIds:y,demoIds:P}}n(Fi,"readHackamapQueryRunSelection");function Yn(e,t,r){if(!r||!Xn(e))return e;if(r.eventIds.size===0&&r.demoIds.size===0)return{...e,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_run_filter_skipped:"no-event-demo-rows"}};let o=new Set;r.eventIds.forEach(c=>o.add(`Event:${c}`)),r.demoIds.forEach(c=>o.add(`Demo:${c}`));let a=Array.isArray(e.nodes)?e.nodes.filter(c=>o.has(String(c?.id||"").trim())):[],s=new Set(a.map(c=>String(c?.id||"").trim()).filter(Boolean)),i=Array.isArray(e.edges)?e.edges.filter(c=>s.has(String(c?.source||"").trim())&&s.has(String(c?.target||"").trim())):[];return{...e,nodes:a,edges:i,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_event_count:r.eventIds.size,selected_demo_count:r.demoIds.size,total_problems:a.filter(c=>String(c?.type||"").trim()==="problem").length,total_solutions:a.filter(c=>String(c?.type||"").trim()==="solution").length}}}n(Yn,"filterHackamapApiGraphPayloadByRun");function zi(e){let t=Array.isArray(e?.nodes)?e.nodes:[],r=Array.isArray(e?.links)?e.links:[],o=[],a=new Set;for(let i of t){let c=String(i?.id||"").trim(),l=String(i?.type||"").trim(),h=String(i?.label||"").trim();if(!(!c||!l||!h)){if(l==="Event"){o.push({id:c,type:"problem",label:h,cluster:"Event"}),a.add(c);continue}l==="Demo"&&(o.push({id:c,type:"solution",label:h,cluster:"Demo"}),a.add(c))}}let s=[];for(let i of r){let c=String(i?.source||"").trim(),l=String(i?.target||"").trim(),h=String(i?.type||"").trim();!c||!l||h==="has_demo"&&(!a.has(c)||!a.has(l)||s.push({source:c,target:l,type:"has_demo",strength:.35}))}return{nodes:o,edges:s,meta:{source:"hackamap-graph.json:fallback",total_problems:o.filter(i=>i.type==="problem").length,total_solutions:o.filter(i=>i.type==="solution").length,...e?.content_signature?{content_signature:String(e.content_signature)}:{}}}}n(zi,"toBipartiteApiPayload");async function Zn(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{...se(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(r!=="GET"&&r!=="HEAD")return ht(t,{ok:!1,error:"unsupported_method"},405);if(String(o.searchParams.get("view")||"").trim().toLowerCase()==="meta"){let u=await Wi(t);return r==="HEAD"?new Response(null,{status:200,headers:{...Wt,...se(t)}}):ht(t,u,200)}let a=String(o.searchParams.get("run")||"").trim(),s=await Fi(t,a),i=await Di(t);if(i){let u=Yn(i,a,s);return r==="HEAD"?new Response(null,{status:200,headers:{...Wt,...se(t)}}):ht(t,u,200)}let c=await Li(t);if(!c)return ht(t,{ok:!1,error:"missing_hackamap_graph",hint:"/knowgrph/imports/hackamap/{hackamap_api_graph.json,hackamap-graph.json} not found"},404);let l=zi(c),h=Yn(l,a,s);return r==="HEAD"?new Response(null,{status:200,headers:{...Wt,...se(t)}}):ht(t,h,200)}n(Zn,"onRequest");var qi=!0,ea=600,ta={"content-type":"application/json; charset=utf-8","cache-control":`public, max-age=${ea}`};function Ye(e,t,r={}){return new Response(JSON.stringify(t),{...r,headers:{...ta,...r.headers||{},...se(e)}})}n(Ye,"jsonResponse");function Yi(e){try{let t=new URL(String(e));return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}n(Yi,"isHttpUrl");function gt(e){return String(e||"").trim().toLowerCase()}n(gt,"normalizeHost");function Nr(e,{exact:t,suffixes:r}){let o=gt(e);return o?!!(Array.isArray(t)&&t.some(a=>o===gt(a))||Array.isArray(r)&&r.some(a=>o===gt(a)||o.endsWith(`.${gt(a)}`))):!1}n(Nr,"isHostMatch");function Vi(e){let t=gt(e.hostname),r=e.toString();return Nr(t,{suffixes:["linkedin.com"]})?new URL(`https://www.linkedin.com/embeds/oembed.json?url=${encodeURIComponent(r)}`):Nr(t,{exact:["twitter.com","x.com"],suffixes:["twitter.com","x.com"]})?new URL(`https://publish.twitter.com/oembed?omit_script=1&url=${encodeURIComponent(r)}`):Nr(t,{exact:["reddit.com"],suffixes:["reddit.com"]})?new URL(`https://www.reddit.com/oembed?url=${encodeURIComponent(r)}`):null}n(Vi,"buildOembedUpstreamUrl");async function Ji({upstreamUrl:e}){return await fetch(e.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; OEmbedProxy/1.0)",accept:"application/json,text/json;q=0.9,*/*;q=0.1"},redirect:"follow",cf:{cacheTtl:ea,cacheEverything:!0}})}n(Ji,"fetchJsonUpstream");async function ra(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{...se(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD"].includes(r))return Ye(t,{ok:!1,error:"unsupported_method"},{status:405});if(o.searchParams.get("ping")==="1")return Ye(t,{ok:!0,ping:!0});if(qi)return Ye(t,{ok:!1,error:"disabled_by_policy"},{status:200,headers:{"cache-control":"no-store"}});let a=o.searchParams.get("url")||"";if(!Yi(a))return Ye(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}});let s;try{s=new URL(a)}catch{return Ye(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}let i=Vi(s);if(!i)return Ye(t,{ok:!1,error:"unsupported_provider"},{status:400,headers:{"cache-control":"no-store"}});let c=await Ji({upstreamUrl:i}),l=new Headers(c.headers);l.delete("content-length"),l.set("cache-control",c.ok?ta["cache-control"]:"no-store");for(let[u,y]of Object.entries(se(t)))l.set(u,y);if(r==="HEAD")return new Response(null,{status:c.status,headers:l});let h=await c.text();try{JSON.parse(h)}catch{return Ye(t,{ok:!1,error:"invalid_upstream_json",status:c.status},{status:502,headers:{"cache-control":"no-store"}})}return l.set("content-type","application/json; charset=utf-8"),new Response(h,{status:c.status,headers:l})}n(ra,"onRequest");var oa="/__chat_proxy",Ft="agnes-ai",zt="byteplus-modelark",qt="miromind",Xi=n(e=>{let t=ke(e);return t==="openai"?"openai":t===zt||t==="byteplus"?zt:t===qt||t==="miromind-api"?qt:t===Ft||t==="agnes"||t==="agnes-ai-api"?Ft:t},"normalizeProviderId"),Qi=n(e=>ke(e)===Bt,"isAgnesHost"),Zi=n(e=>{let t=ke(e);return t===Gt||t===vr},"isBytePlusHost"),ec=n(e=>ke(e)===jt,"isMiroMindHost"),tc=n(({provider:e,requestedUpstream:t,env:r})=>e==="openai"?"https://api.openai.com":e===qt?t||`https://${jt}`:e===Ft?t||`https://${Bt}`:e===zt?t||String(r.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim()||`https://${Gt}`:t||String(r.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim(),"pickUpstreamBase");async function na(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=new URL(t.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":_e(t.headers,"origin")||"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD","POST"].includes(o))return ge(t,{ok:!1,error:"Unsupported method"},405);let s=Xi(_e(t.headers,"x-kg-chat-provider")),i=tc({provider:s,requestedUpstream:_e(t.headers,"x-kg-chat-upstream"),env:r});if(!i)return ge(t,{ok:!1,error:"Missing chat proxy upstream configuration"},500);let c;try{c=new URL(i)}catch{return ge(t,{ok:!1,error:"Invalid chat proxy upstream configuration"},500)}let l=qn(r,{includeOpenAi:!0,includeMiroMind:!0,includeAgnes:!0,includeBytePlus:!0}),h=ke(c.hostname);if(!l.has(h))return ge(t,{ok:!1,error:"Chat proxy upstream host is not allowed"},403);if(!zn(h)&&c.protocol!=="https:")return ge(t,{ok:!1,error:"Chat proxy requires HTTPS for non-local upstream hosts"},403);let u=s==="openai"||h===Or,y=s===qt||ec(h),P=s===Ft||Qi(h),S=s===zt||Zi(h),A=_e(t.headers,"x-kg-chat-api-key"),$=String(r.KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY||r.OPENAI_API_KEY||"").trim(),M=String(r.KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY||r.MIROMIND_API_KEY||"").trim(),K=String(r.KNOWGRPH_CHAT_PROXY_AGNES_API_KEY||r.AGNES_API_KEY||"").trim(),oe=String(r.KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY||r.BYTEPLUS_API_KEY||"").trim(),W=(A||$).slice(0,512),T=(A||M).slice(0,512),E=(A||K).slice(0,512),Q=(A||oe).slice(0,512),N=S?Q:P?E:y?T:W;if(u&&!W)return ge(t,{ok:!1,error:"Missing OpenAI API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY or OPENAI_API_KEY)"},401);if(y&&!N)return ge(t,{ok:!1,error:"Missing MiroMind API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY or MIROMIND_API_KEY)"},401);if(P&&!N)return ge(t,{ok:!1,error:"Missing Agnes API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_AGNES_API_KEY or AGNES_API_KEY)"},401);if(S&&!N)return ge(t,{ok:!1,error:"Missing BytePlus API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY or BYTEPLUS_API_KEY)"},401);if(o==="POST"&&!_e(t.headers,"content-type").toLowerCase().includes("application/json"))return ge(t,{ok:!1,error:"Chat proxy expects application/json payloads"},415);let V=a.pathname.startsWith(oa)&&a.pathname.slice(oa.length)||"/v1/chat/completions",B=V.startsWith("/")?V:`/${V}`,I=new URL(`${B}${a.search||""}`,c),U=new Headers,G=_e(t.headers,"content-type"),ne=_e(t.headers,"accept");G&&U.set("content-type",G),ne&&U.set("accept",ne),(u||y||P||S)&&U.set("authorization",`Bearer ${N}`);let fe=_e(t.headers,"x-client-request-id").slice(0,512);fe&&U.set("x-client-request-id",fe);let be=new AbortController,ie=Number(r.KNOWGRPH_CHAT_PROXY_TIMEOUT_MS),Ie=Number.isFinite(ie)?Math.max(5e3,Math.min(18e4,Math.floor(ie))):9e4,b=setTimeout(()=>be.abort(),Ie);try{let g=await fetch(I.toString(),{method:o,headers:U,body:o==="GET"||o==="HEAD"?void 0:t.body,signal:be.signal,redirect:"follow"}),p=new Headers(g.headers);p.delete("content-length"),p.delete("www-authenticate"),p.set("cache-control","no-store");let m=_e(t.headers,"origin");return m&&(p.set("access-control-allow-origin",m),p.set("vary","Origin")),o==="HEAD"?new Response(null,{status:g.status,statusText:g.statusText,headers:p}):new Response(g.body,{status:g.status,statusText:g.statusText,headers:p})}catch(g){let p=g&&typeof g=="object"&&"message"in g?String(g.message||""):"",m=be.signal.aborted||/aborted|timeout/i.test(p);return ge(t,{ok:!1,error:p||"Failed to reach chat upstream"},m?504:502)}finally{clearTimeout(b)}}n(na,"onRequest");function rc(e){let t=e.map(r=>r==null?"":typeof r=="boolean"?r?"1":"0":typeof r=="number"?Number.isFinite(r)?String(r):"":String(r)).join("|");return`rich-media-preview:${nt(t)}`}n(rc,"buildRichMediaPreviewSemanticKey");var sa="png";function Vt(e){let t=typeof e=="number"?e:Number(String(e??"").trim());if(!Number.isFinite(t))return null;let r=Math.max(0,Math.floor(t));return Number.isFinite(r)?r:null}n(Vt,"normalizeRemoteVideoFrameSeconds");function Jt(e){let t=String(e||"").trim().toLowerCase();return t==="jpg"||t==="jpeg"?"jpg":"png"}n(Jt,"normalizeRemoteVideoFrameFormat");function Ur(e){let t=String(e.sourceUrl||"").trim(),r=Vt(e.timeSeconds)??0,o=Jt(e.format||sa);return rc(["remote-video-frame",t,r,o])}n(Ur,"buildRemoteVideoFrameSemanticKey");function ia(e){let t=Vt(e.timeSeconds)??0,r=Jt(e.format||sa),o=Ur({...e,timeSeconds:t,format:r});return`frame-${o.split(":").pop()||nt(o)}-t${t}.${r}`}n(ia,"buildRemoteVideoFrameFileName");var Yt=n(e=>{let t=String(e||"").trim();return t&&/^[A-Za-z0-9_-]{6,128}$/.test(t)?t:null},"normalizeYouTubeIdLikeValue"),aa=n(e=>{try{let t=new URL(String(e||"").trim()),r=String(t.hostname||"").toLowerCase();if(r==="youtu.be"||r.endsWith(".youtu.be")){let o=t.pathname.replace(/^\/+/,"").split("/")[0]?.trim()||"";return Yt(o)}if(r==="youtube.com"||r.endsWith(".youtube.com")||r==="youtube-nocookie.com"||r.endsWith(".youtube-nocookie.com")){let o=String(t.searchParams.get("v")||"").trim();if(o)return Yt(o);let a=t.pathname.split("/").filter(Boolean),s=a[0]||"",i=a[1]||"";if((s==="embed"||s==="shorts"||s==="live")&&i)return Yt(i);if(s==="watch"){let c=String(t.searchParams.get("v")||"").trim();return Yt(c)}}}catch{return null}return null},"readYouTubeIdFromUrl");function oc(e){let t=String(e||"").trim().replace(/^<|>$/g,"").trim();for(;/[),.;:!?]$/.test(t);){let r=t.slice(0,-1).trim();if(!r)break;let o=aa(t),a=aa(r);if(!a||o&&o!==a)break;t=r}return t}n(oc,"stripYouTubeUrlTrailingPunctuation");function ca(e){let t=n(r=>{let o=String(r||"").trim();if(!o)return null;if(/^\d+$/.test(o))return Number(o);let a=o.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i);if(!a)return null;let s=a[1]?Number(a[1]):0,i=a[2]?Number(a[2]):0,c=a[3]?Number(a[3]):0,l=s*3600+i*60+c;return l>0&&Number.isFinite(l)?l:null},"parseChunk");try{let r=new URL(oc(e)),o=r.searchParams.get("t")||r.searchParams.get("start")||"",a=r.hash&&new URLSearchParams(r.hash.replace(/^#/,"")).get("t")||"";return t(o)??t(a)}catch{return null}}n(ca,"parseYouTubeStartSeconds");var nc="/image/knowgrph/video-frame",ac=4096,sc=720*60,ic=/^frame-[a-f0-9]+-t\d+\.(?:png|jpg)$/i,Kr={"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"accept, content-type"},$r=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),Lr=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:JSON.stringify(e),{status:t,headers:{...Kr,"content-type":"application/json; charset=utf-8","cache-control":"no-store"}}),"jsonResponse"),Dr=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:e,{status:t,headers:{...Kr,"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}}),"textResponse"),cc=n((e,t)=>e===t||e.endsWith(`.${t}`),"hostMatches"),lc=n(e=>{let t=$r(e?.KG_VIDEO_FRAME_ALLOWED_HOSTS);return t?t.split(",").map(r=>$r(r).toLowerCase()).filter(Boolean):["youtube.com","youtu.be","youtube-nocookie.com","bilibili.com","b23.tv"]},"readAllowedHosts"),pc=n(e=>$r(e).replace(/^<|>$/g,"").trim(),"unwrapUrlInput"),uc=n((e,t)=>{try{let r=new URL(e);if(r.protocol!=="https:"&&r.protocol!=="http:")return!1;let o=r.hostname.toLowerCase();return lc(t).some(a=>cc(o,a))}catch{return!1}},"isAllowedSourceUrl"),dc=n((e,t)=>{let r=new URL(e.url),o=pc(r.searchParams.get("url")||"");if(!o)return{error:"Missing url parameter"};if(o.length>ac)return{error:"Video URL is too long"};if(!uc(o,t))return{error:"Video frame extraction is limited to supported remote video hosts"};let a=Vt(r.searchParams.get("time"))??ca(o);if(a==null)return{error:"Missing time parameter"};let s=Math.min(sc,Math.max(0,a)),i=Jt(r.searchParams.get("format")||"png"),c=ia({sourceUrl:o,timeSeconds:s,format:i});if(!ic.test(c))return{error:"Invalid frame cache key"};let l=`${nc}/${c}`;return{sourceUrl:o,timeSeconds:s,format:i,fileName:c,publicUrl:l,semanticKey:Ur({sourceUrl:o,timeSeconds:s,format:i})}},"readFrameRequest"),mc=n(async(e,t,r)=>{let o=new URL(t,e.request.url),a=new Request(o.toString(),{method:r});return typeof e.env?.ASSETS?.fetch=="function"?await e.env.ASSETS.fetch(a):await fetch(a)},"fetchStaticAsset"),hc=n(e=>`Frame has not been generated yet. Run the local video-frame extractor and publish ${e.publicUrl}.`,"missingFrameMessage"),gc=n((e,t)=>{let r=new Headers;r.set("content-type",t.format==="jpg"?"image/jpeg":"image/png"),r.set("cache-control","public, max-age=31536000, immutable"),r.set("access-control-allow-origin","*");let o=e.headers.get("content-length");o&&r.set("content-length",o);let a=e.headers.get("etag");return a&&r.set("etag",a),r},"imageResponseHeaders");async function la(e){let t=e.request;if(t.method==="OPTIONS")return new Response(null,{status:204,headers:Kr});if(t.method!=="GET"&&t.method!=="HEAD")return Dr("Method not allowed",405,t.method);let r=new URL(t.url).searchParams.get("emit")==="json",o=dc(t,e.env||{});if("error"in o)return r?Lr({ok:!1,error:o.error},400,t.method):Dr(o.error,400,t.method);let a=r&&t.method!=="HEAD"?"GET":r||t.method==="HEAD"?"HEAD":"GET",s=await mc(e,o.publicUrl,a);if(!s.ok){let i=hc(o);return r?Lr({ok:!1,error:i,publicUrl:o.publicUrl,semanticKey:o.semanticKey},404,t.method):Dr(i,404,t.method)}if(r){let i=Number(s.headers.get("content-length")||0);return(!Number.isFinite(i)||i<=0)&&t.method!=="HEAD"&&(i=(await s.arrayBuffer()).byteLength),Lr({ok:!0,imageUrl:o.publicUrl,publicUrl:o.publicUrl,semanticKey:o.semanticKey,cached:!0,bytes:Number.isFinite(i)?Math.max(0,Math.floor(i)):0,timeSeconds:o.timeSeconds,format:o.format},200,t.method)}return new Response(t.method==="HEAD"?null:s.body,{status:200,headers:gc(s,o)})}n(la,"onRequest");var pa={"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"content-type"},Xt=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:JSON.stringify(e),{status:t,headers:pa}),"jsonResponse"),X=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),fc=n(e=>{try{let t=new URL(String(e||"").trim());if(/youtu\.be$/i.test(t.hostname))return X(t.pathname.split("/").filter(Boolean)[0]);if(/youtube\.com$/i.test(t.hostname)||/youtube-nocookie\.com$/i.test(t.hostname)){let r=X(t.searchParams.get("v"));if(r)return r;let o=t.pathname.split("/").filter(Boolean),a=o.findIndex(s=>["embed","shorts","live"].includes(s));if(a>=0)return X(o[a+1])}}catch{}return""},"readVideoId"),yc=n((e,t)=>{let r=e.indexOf(t);if(r<0)return null;let o=e.indexOf("{",r);if(o<0)return null;let a=0,s=!1,i=!1;for(let c=o;c<e.length;c+=1){let l=e[c];if(s){i?i=!1:l==="\\"?i=!0:l==='"'&&(s=!1);continue}if(l==='"')s=!0;else if(l==="{")a+=1;else if(l==="}"&&(a-=1,a===0))return e.slice(o,c+1)}return null},"extractJsonAfter"),wc=n(e=>{for(let t of["ytInitialPlayerResponse =","ytInitialPlayerResponse="]){let r=yc(e,t);if(r)try{return JSON.parse(r)}catch{}}return null},"parsePlayerResponse"),Sc=n((e,t)=>{let r=X(t||"en").toLowerCase();return e.find(o=>X(o.languageCode).toLowerCase()===r)||e.find(o=>X(o.languageCode).toLowerCase().startsWith(r.split("-")[0]))||e.find(o=>X(o.kind)!=="asr")||e[0]||null},"pickCaptionTrack"),_c=n(e=>{let t=new URL(e);return t.searchParams.set("fmt","json3"),t.toString()},"withJsonCaptionFormat"),bc=n(e=>(Array.isArray(e?.events)?e.events:[]).map(r=>{let o=Array.isArray(r.segs)?X(r.segs.map(i=>i?.utf8||"").join("")):"",a=Number(r.tStartMs)/1e3,s=Number(r.dDurationMs||0)/1e3;return o&&Number.isFinite(a)?{text:o,start:a,duration:Number.isFinite(s)?s:0}:null}).filter(Boolean),"parseCaptionJson3"),Rc=n(e=>String(e||"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'"),"decodeXmlText"),Pc=n(e=>{let t=[],r=/<text\b([^>]*)>([\s\S]*?)<\/text>/gi,o=null;for(;o=r.exec(String(e||""));){let a=o[1]||"",s=Number(a.match(/\bstart="([^"]+)"/i)?.[1]),i=Number(a.match(/\bdur="([^"]+)"/i)?.[1]||0),c=X(Rc(o[2]||""));c&&Number.isFinite(s)&&t.push({text:c,start:s,duration:Number.isFinite(i)?i:0})}return t},"parseCaptionXml"),Ac=n((e,t)=>{let r=String(e||"").trim();if(!r)return[];if(String(t||"").toLowerCase().includes("json")||r.startsWith("{")||r.startsWith("["))try{return bc(JSON.parse(r))}catch{return[]}return Pc(r)},"parseCaptionResponseText"),kc=n(e=>{let t=Math.max(0,Math.floor(Number(e)||0)),r=Math.floor(t/60),o=String(t%60).padStart(2,"0");return`${r}:${o}`},"formatTimestamp"),xc=n((e,t)=>{let r=new URL(e);return r.searchParams.set("t",`${Math.max(0,Math.floor(Number(t)||0))}s`),r.toString()},"timestampUrl"),Tc=n(({title:e,sourceUrl:t,videoId:r,authorName:o,thumbnailUrl:a,segments:s})=>[`# ${e||`YouTube ${r}`}`,"",`Video ID: ${r}`,o?`Author: ${o}`:"",`Source: [${t}](${t})`,a?`[![${e||r}](${a})](${t})`:"","",s.length>0?"## Transcript":"## Video Source","",...s.length>0?s.map(i=>`[${kc(i.start)}](${xc(t,i.start)}) ${i.text}`):["Captions were not available from the source at import time.","The source URL, title, author, and thumbnail remain available for downstream storyboard reconstruction."],""].filter(i=>i!=="").join(`
`),"buildMarkdown"),Hr=n(({videoId:e,sourceUrl:t,title:r,authorName:o,thumbnailUrl:a,lang:s,languageCode:i,segments:c,captionStatus:l})=>{let h={type:"rag:YouTubeTranscript",video_id:e,source_url:t,title:r,author_name:o,thumbnail_url:a,language_code:X(i)||s,caption_status:l,segment_count:c.length,duration:c.reduce((u,y)=>Math.max(u,y.start+y.duration),0),segments:c};return{ok:!0,name:`youtube-${e.toLowerCase()}.md`,markdown:Tc({title:r,sourceUrl:t,videoId:e,authorName:o,thumbnailUrl:a,segments:c}),transcript:h}},"buildPayload");async function Ec({sourceUrl:e,lang:t="en",fetchImpl:r=fetch}){let o=fc(e);if(!o)return{ok:!1,error:"unsupported_youtube_url"};let a=`https://www.youtube.com/watch?v=${encodeURIComponent(o)}`,[s,i]=await Promise.all([r(`https://www.youtube.com/oembed?url=${encodeURIComponent(a)}&format=json`,{headers:{accept:"application/json"}}).catch(()=>null),r(a,{headers:{accept:"text/html,application/xhtml+xml","accept-language":"en-US,en;q=0.9","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}})]),c=s?.ok?await s.json().catch(()=>({})):{},l=i.ok?wc(await i.text()):null,h=X(c.title)||X(l?.videoDetails?.title)||`YouTube ${o}`,u=X(c.author_name)||X(l?.videoDetails?.author),y=X(c.thumbnail_url)||`https://i.ytimg.com/vi/${o}/hqdefault.jpg`;if(!i.ok)return Hr({videoId:o,sourceUrl:a,title:h,authorName:u,thumbnailUrl:y,lang:t,languageCode:t,segments:[],captionStatus:`watch-fetch-${i.status}`});let P=l?.captions?.playerCaptionsTracklistRenderer?.captionTracks||[],S=Sc(Array.isArray(P)?P:[],t);if(!S?.baseUrl)return Hr({videoId:o,sourceUrl:a,title:h,authorName:u,thumbnailUrl:y,lang:t,languageCode:t,segments:[],captionStatus:"captions-unavailable"});let A=await r(_c(S.baseUrl),{headers:{accept:"application/json,text/xml,text/plain,*/*","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}}).catch(()=>null),$=A?await A.text().catch(()=>""):"",M=A?.ok?Ac($,A.headers.get("content-type")):[],K=M.length>0?"available":A?.ok?"captions-empty":`captions-fetch-${A?.status||"failed"}`;return Hr({videoId:o,sourceUrl:a,title:h,authorName:u,thumbnailUrl:y,lang:t,languageCode:S.languageCode,segments:M,captionStatus:K})}n(Ec,"buildYouTubeTranscriptPayload");async function ua(e){let t=e.request,r=String(t.method||"GET").toUpperCase();if(r==="OPTIONS")return new Response(null,{status:204,headers:pa});if(r!=="GET"&&r!=="HEAD"&&r!=="POST")return Xt({ok:!1,error:"unsupported_method"},405,r);let o=new URL(t.url),a=X(o.searchParams.get("url")),s=X(o.searchParams.get("lang"))||"en";if(!a)return Xt({ok:!1,error:"missing_url"},400,r);try{let i=await Ec({sourceUrl:a,lang:s});return Xt(i,i.ok?200:502,r)}catch(i){let c=i&&typeof i=="object"&&"message"in i?X(i.message):"";return Xt({ok:!1,error:c||"youtube_conversion_failed"},502,r)}}n(ua,"onRequest");async function da(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase();if(r==="OPTIONS")return new Response(null,{status:204,headers:{...se(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(r!=="GET"&&r!=="HEAD")return new Response(JSON.stringify({ok:!1,error:"unsupported_method"}),{status:405,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...se(t)}});let o={ok:!0,service:"singabldr-pages",ts:new Date().toISOString()},a={"content-type":"application/json; charset=utf-8","cache-control":"no-store",...se(t)};return r==="HEAD"?new Response(null,{status:200,headers:a}):new Response(JSON.stringify(o),{status:200,headers:a})}n(da,"onRequest");var ve="https://airvio.co";var ue="/knowgrph",Oe=`${ve}${ue}/`,Cc=`${ve}/`;var ha=`${ue}/health`,ma=`${ve}${ha}`,ga="/.well-known/agent-card.json",Cd=`${ue}/.well-known/agent-card.json`,Oc=`${ve}${ga}`,vc=`${ve}/api/storage/source-files`,Ic=`${ve}/api/storage/doc-default/{canonicalPath}`,Mc=`${ve}/api/storage/doc/{workspaceId}/{canonicalPath}`,Nc=`${ve}/api/storage/blob/{workspaceId}/{canonicalPath}`;var jr="root-agent-ready-pages",fa=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${ue}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${ue}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${ha}>; rel="status"; type="application/health+json"`,`<${ue}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${ga}>; rel="describedby"; type="application/json"`].join(", "),ya=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${Oe}.

## Discovery

- Crawl policy: ${Oe}robots.txt
- Sitemap: ${Oe}sitemap.xml
- API catalog: ${Oe}.well-known/api-catalog
- Auth.md registration instructions: ${Cc}auth.md
- Health: ${ma}
- MCP server card: ${Oe}.well-known/mcp/server-card.json
- A2A Agent Card: ${Oc}
- Agent skills: ${Oe}.well-known/agent-skills/index.json
- LLM reference: ${Oe}llms.txt

## APIs

- Agent-ready status: ${ma}
- HTTP MCP: ${Oe}mcp
- Storage API: ${ve}/api/storage/
- Source Files index: ${vc}
- Default Source File documents: ${Ic}
- Workspace Source File documents: ${Mc}
- Workspace binary artifacts: ${Nc}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes seven read-only tools for published Source Files, shared documents, data-first search/fetch, and agent-surface inspection.
- HTTP MCP and local stdio expose shared read-only prompt templates through \`prompts/list\` and \`prompts/get\` for Source Files research and agent-surface inspection.
- HTTP MCP and local stdio expose Source Files resource templates through \`resources/templates/list\`; \`kgdoc://source-file/{id}\` reads reuse the existing \`fetch\` executor.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared seven-tool WebMCP surface on \`${Oe}\` HTML routes.

## MCP Apps

- HTTP MCP advertises \`io.modelcontextprotocol/ui\` with \`text/html;profile=mcp-app\`.
- \`inspect_agent_surface\` links to the shared \`ui://knowgrph/agent-ready\` resource through \`_meta.ui.resourceUri\`.
- UI-linked tool descriptors expose no-auth \`securitySchemes\`, mirror them in \`_meta.securitySchemes\`, and set OpenAI widget accessibility metadata from the shared contract.
- \`resources/list\` and \`resources/read\` serve the inline, sandbox-friendly Knowgrph Agent Ready app resource while preserving text fallback and structured tool output; \`resources/templates/list\` exposes Source Files markdown reads under the standard MCP \`resources\` capability.
- The View initiates the MCP Apps \`ui/initialize\` handshake, sends \`ui/notifications/initialized\` and \`ui/notifications/size-changed\`, handles host context/tool input/result/cancel notifications, and calls the originating server through \`tools/call\`.
- \`inspect_agent_surface.structuredContent.mcpAppsServerReadiness\` exposes the native server-readiness model used by the View: app tool/resource binding, prompt discovery, resource-template discovery, output-schema and structured-content readiness, sandbox/security metadata, widget accessibility, Streamable HTTP JSON-RPC transport, local stdio transport, and read-only search/fetch retrieval.
`,wa=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),Sa=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(r=>r.trim().startsWith("text/markdown")),"wantsMarkdown"),Br=n((e,t)=>{let r=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&r.headers.set("x-knowgrph-route-owner",o),a&&r.headers.set("x-knowgrph-route-tag",a),r},"withAgentReadyRouteHeaders");var Wr="Agent-actionable chat-to-canvas knowledge graph workspace",ft='<main id="root"></main>',Uc=/<(?:main|div)\s+id=["']root["']\s*><\/(?:main|div)>/i,Lc=n(e=>{let t=/<script>([\s\S]*?)<\/script>/g;for(let r of String(e||"").matchAll(t)){let o=r[1]||"";if(o.includes("createWebMcpLifecycleController")&&o.includes("toolDefinitions"))return o}return""},"extractWebMcpScript"),_a=n(()=>({"content-type":"text/html; charset=utf-8","cache-control":"no-store, no-cache, no-transform, must-revalidate, max-age=0","access-control-allow-origin":"*",link:fa}),"rootHtmlHeaders"),Gr=n((e,t)=>String(e||"").includes("</head>")?String(e||"").replace("</head>",`${t}</head>`):`${String(e||"")}${t}`,"injectIntoHead"),ba=n(e=>String(e||"").replace(Uc,ft),"canonicalizeRootMount"),Qt=n(()=>`<main id="knowgrph-root-fallback" data-knowgrph-root-fallback="visible" aria-label="Knowgrph root alias" style="position:fixed;inset:0;z-index:2147483000;display:grid;place-content:center;gap:1rem;padding:2rem;box-sizing:border-box;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#101820;color:#f4f7fb;text-align:center">
      <h1 style="margin:0;font-size:clamp(2.25rem,8vw,5.5rem);line-height:1;font-weight:760">Knowgrph</h1>
      <p style="margin:0 auto;max-width:42rem;font-size:clamp(1rem,2.2vw,1.35rem);line-height:1.55;color:#d6e1ea">${Wr}</p>
      <p style="margin:0"><a href="${ue}/" style="display:inline-flex;align-items:center;justify-content:center;min-height:2.75rem;padding:0 1.05rem;border:1px solid #7db3ff;border-radius:8px;color:#f8fbff;text-decoration:none;background:#1f5fa8">Open Knowgrph</a></p>
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
    <\/script>`,"rootVisibleFallbackMarkup"),Dc=n(e=>{let t=ba(e);return/<main\s+id=["']knowgrph-root-fallback["']/i.test(t)?t:t.includes(ft)?t.replace(ft,`${ft}
    ${Qt()}`):t.includes("</body>")?t.replace("</body>",`    ${Qt()}
  </body>`):`${t}
${Qt()}`},"injectRootVisibleFallback"),$c=n(e=>{let t=ba(e);return/<meta\s+name=["']description["'][^>]*>/i.test(t)?t=t.replace(/<meta\s+name=["']description["'][^>]*>/i,`<meta name="description" content="${Wr}" />`):t=Gr(t,`    <meta name="description" content="${Wr}" />
`),/<link\s+rel=["']canonical["'][^>]*>/i.test(t)||(t=Gr(t,`    <link rel="canonical" href="${ue}/" />
`)),/<meta\s+name=["']x-knowgrph-root-alias["'][^>]*>/i.test(t)||(t=Gr(t,`    <meta name="x-knowgrph-root-alias" content="${ue}/" />
`)),Dc(t)},"rewriteRootAppHtml"),Kc=n(async e=>{let t=new URL(`${ue}/?agentReadyRootWebMcp=1`,e.url),r=await fetch(t,{headers:{accept:"text/html"}});return r.ok?Lc(await r.text()):""},"loadWebMcpScript"),Hc=n(async e=>{let t=new URL(`${ue}/?agentReadyRootAlias=1`,e.url),r=await fetch(t,{headers:{accept:"text/html"}});if(!r.ok)return null;let o=$c(await r.text());return!o.includes(ft)||!o.includes(`${ue}/assets/`)?null:new Response(o,{status:200,headers:_a()})},"loadKnowgrphAppShell"),jc=n((e="")=>new Response(`<!DOCTYPE html>
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
    ${Qt()}
  </body>
</html>`,{status:200,headers:_a()}),"rootHtmlResponse");async function Ra(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase();if(r!=="GET"&&r!=="HEAD")return e.next();if(Sa(t)){let s=Br(wa(ya),{owner:jr,tag:"root-homepage-markdown"});return r==="HEAD"?new Response(null,s):s}let o=r==="HEAD"?null:await Hc(t),a=Br(o||jc(r==="HEAD"?"":await Kc(t)),{owner:jr,tag:"root-homepage-html"});return r==="HEAD"?new Response(null,a):a}n(Ra,"onRequest");var R=[{routePath:"/api/llm/chat/completions",mountPath:"/api/llm/chat",method:"",middlewares:[],modules:[Yr]},{routePath:"/api/payments/commerce/x402",mountPath:"/api/payments/commerce",method:"",middlewares:[],modules:[yo]},{routePath:"/api/llm/models",mountPath:"/api/llm",method:"",middlewares:[],modules:[wo]},{routePath:"/api/llm/responses",mountPath:"/api/llm",method:"",middlewares:[],modules:[So]},{routePath:"/knowgrph/doc-default/:path*",mountPath:"/knowgrph/doc-default",method:"",middlewares:[],modules:[Dn]},{routePath:"/knowgrph/doc/:path*",mountPath:"/knowgrph/doc",method:"",middlewares:[],modules:[$n]},{routePath:"/knowgrph/share/:path*",mountPath:"/knowgrph/share",method:"",middlewares:[],modules:[Kn]},{routePath:"/api/link-preview",mountPath:"/api",method:"GET",middlewares:[],modules:[jn]},{routePath:"/api/link-proxy",mountPath:"/api",method:"GET",middlewares:[],modules:[Gn]},{routePath:"/api/graph",mountPath:"/api",method:"",middlewares:[],modules:[Zn]},{routePath:"/api/oembed",mountPath:"/api",method:"",middlewares:[],modules:[ra]},{routePath:"/__chat_proxy/:path*",mountPath:"/__chat_proxy",method:"",middlewares:[],modules:[na]},{routePath:"/knowgrph/:path*",mountPath:"/knowgrph",method:"",middlewares:[],modules:[Ke]},{routePath:"/__video_frame",mountPath:"/",method:"",middlewares:[],modules:[la]},{routePath:"/__youtube_transcript",mountPath:"/",method:"",middlewares:[],modules:[ua]},{routePath:"/health",mountPath:"/",method:"",middlewares:[],modules:[da]},{routePath:"/",mountPath:"/",method:"",middlewares:[],modules:[Ra]}];function Bc(e){for(var t=[],r=0;r<e.length;){var o=e[r];if(o==="*"||o==="+"||o==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(o==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(o==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(o==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(o===":"){for(var a="",s=r+1;s<e.length;){var i=e.charCodeAt(s);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){a+=e[s++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:a}),r=s;continue}if(o==="("){var c=1,l="",s=r+1;if(e[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;){if(e[s]==="\\"){l+=e[s++]+e[s++];continue}if(e[s]===")"){if(c--,c===0){s++;break}}else if(e[s]==="("&&(c++,e[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));l+=e[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(r));if(!l)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:l}),r=s;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}n(Bc,"lexer");function Gc(e,t){t===void 0&&(t={});for(var r=Bc(e),o=t.prefixes,a=o===void 0?"./":o,s=t.delimiter,i=s===void 0?"/#?":s,c=[],l=0,h=0,u="",y=n(function(B){if(h<r.length&&r[h].type===B)return r[h++].value},"tryConsume"),P=n(function(B){var I=y(B);if(I!==void 0)return I;var U=r[h],G=U.type,ne=U.index;throw new TypeError("Unexpected ".concat(G," at ").concat(ne,", expected ").concat(B))},"mustConsume"),S=n(function(){for(var B="",I;I=y("CHAR")||y("ESCAPED_CHAR");)B+=I;return B},"consumeText"),A=n(function(B){for(var I=0,U=i;I<U.length;I++){var G=U[I];if(B.indexOf(G)>-1)return!0}return!1},"isSafe"),$=n(function(B){var I=c[c.length-1],U=B||(I&&typeof I=="string"?I:"");if(I&&!U)throw new TypeError('Must have text between two parameters, missing text after "'.concat(I.name,'"'));return!U||A(U)?"[^".concat(He(i),"]+?"):"(?:(?!".concat(He(U),")[^").concat(He(i),"])+?")},"safePattern");h<r.length;){var M=y("CHAR"),K=y("NAME"),oe=y("PATTERN");if(K||oe){var W=M||"";a.indexOf(W)===-1&&(u+=W,W=""),u&&(c.push(u),u=""),c.push({name:K||l++,prefix:W,suffix:"",pattern:oe||$(W),modifier:y("MODIFIER")||""});continue}var T=M||y("ESCAPED_CHAR");if(T){u+=T;continue}u&&(c.push(u),u="");var E=y("OPEN");if(E){var W=S(),Q=y("NAME")||"",N=y("PATTERN")||"",V=S();P("CLOSE"),c.push({name:Q||(N?l++:""),pattern:Q&&!N?$(W):N,prefix:W,suffix:V,modifier:y("MODIFIER")||""});continue}P("END")}return c}n(Gc,"parse");function yt(e,t){var r=[],o=Aa(e,r,t);return Wc(o,r,t)}n(yt,"match");function Wc(e,t,r){r===void 0&&(r={});var o=r.decode,a=o===void 0?function(s){return s}:o;return function(s){var i=e.exec(s);if(!i)return!1;for(var c=i[0],l=i.index,h=Object.create(null),u=n(function(P){if(i[P]===void 0)return"continue";var S=t[P-1];S.modifier==="*"||S.modifier==="+"?h[S.name]=i[P].split(S.prefix+S.suffix).map(function(A){return a(A,S)}):h[S.name]=a(i[P],S)},"_loop_1"),y=1;y<i.length;y++)u(y);return{path:c,index:l,params:h}}}n(Wc,"regexpToFunction");function He(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}n(He,"escapeString");function Pa(e){return e&&e.sensitive?"":"i"}n(Pa,"flags");function Fc(e,t){if(!t)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,a=r.exec(e.source);a;)t.push({name:a[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),a=r.exec(e.source);return e}n(Fc,"regexpToRegexp");function zc(e,t,r){var o=e.map(function(a){return Aa(a,t,r).source});return new RegExp("(?:".concat(o.join("|"),")"),Pa(r))}n(zc,"arrayToRegexp");function qc(e,t,r){return Yc(Gc(e,r),t,r)}n(qc,"stringToRegexp");function Yc(e,t,r){r===void 0&&(r={});for(var o=r.strict,a=o===void 0?!1:o,s=r.start,i=s===void 0?!0:s,c=r.end,l=c===void 0?!0:c,h=r.encode,u=h===void 0?function(I){return I}:h,y=r.delimiter,P=y===void 0?"/#?":y,S=r.endsWith,A=S===void 0?"":S,$="[".concat(He(A),"]|$"),M="[".concat(He(P),"]"),K=i?"^":"",oe=0,W=e;oe<W.length;oe++){var T=W[oe];if(typeof T=="string")K+=He(u(T));else{var E=He(u(T.prefix)),Q=He(u(T.suffix));if(T.pattern)if(t&&t.push(T),E||Q)if(T.modifier==="+"||T.modifier==="*"){var N=T.modifier==="*"?"?":"";K+="(?:".concat(E,"((?:").concat(T.pattern,")(?:").concat(Q).concat(E,"(?:").concat(T.pattern,"))*)").concat(Q,")").concat(N)}else K+="(?:".concat(E,"(").concat(T.pattern,")").concat(Q,")").concat(T.modifier);else{if(T.modifier==="+"||T.modifier==="*")throw new TypeError('Can not repeat "'.concat(T.name,'" without a prefix and suffix'));K+="(".concat(T.pattern,")").concat(T.modifier)}else K+="(?:".concat(E).concat(Q,")").concat(T.modifier)}}if(l)a||(K+="".concat(M,"?")),K+=r.endsWith?"(?=".concat($,")"):"$";else{var V=e[e.length-1],B=typeof V=="string"?M.indexOf(V[V.length-1])>-1:V===void 0;a||(K+="(?:".concat(M,"(?=").concat($,"))?")),B||(K+="(?=".concat(M,"|").concat($,")"))}return new RegExp(K,Pa(r))}n(Yc,"tokensToRegexp");function Aa(e,t,r){return e instanceof RegExp?Fc(e,t):Array.isArray(e)?zc(e,t,r):qc(e,t,r)}n(Aa,"pathToRegexp");var Zt=/[.+?^${}()|[\]\\]/g;function*Vc(e){let t=new URL(e.url).pathname;for(let r of[...R].reverse()){if(r.method&&r.method!==e.method)continue;let o=yt(r.routePath.replace(Zt,"\\$&"),{end:!1}),a=yt(r.mountPath.replace(Zt,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i)for(let c of r.middlewares.flat())yield{handler:c,params:s.params,path:i.path}}for(let r of R){if(r.method&&r.method!==e.method)continue;let o=yt(r.routePath.replace(Zt,"\\$&"),{end:!0}),a=yt(r.mountPath.replace(Zt,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i&&r.modules.length){for(let c of r.modules.flat())yield{handler:c,params:s.params,path:s.path};break}}}n(Vc,"executeRequest");var am={async fetch(e,t,r){let o=e,a=Vc(o),s={},i=!1,c=n(async(l,h)=>{if(l!==void 0){let y=l;typeof l=="string"&&(y=new URL(l,o.url).toString()),o=new Request(y,h)}let u=a.next();if(u.done===!1){let{handler:y,params:P,path:S}=u.value,A={request:new Request(o.clone()),functionPath:S,next:c,params:P,get data(){return s},set data(M){if(typeof M!="object"||M===null)throw new Error("context.data must be an object");s=M},env:t,waitUntil:r.waitUntil.bind(r),passThroughOnException:n(()=>{i=!0},"passThroughOnException")},$=await y(A);if(!($ instanceof Response))throw new Error("Your Pages function should return a Response");return Fr($)}else{let y=await t.ASSETS.fetch(o);return Fr(y)}},"next");try{return await c()}catch(l){if(i){let h=await t.ASSETS.fetch(o);return Fr(h)}throw l}}},Fr=n(e=>new Response([101,204,205,304].includes(e.status)?null:e.body,e),"cloneResponse");export{am as default};
