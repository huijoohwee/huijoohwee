var Ya=Object.defineProperty;var n=(e,t)=>Ya(e,"name",{value:t,configurable:!0});var Xa="https://api.openai.com/v1";var er=Object.freeze(["gpt-5.4-nano","gpt-4o-mini"]);function tr(e){return String(e||"").trim()}n(tr,"normalizeOrigin");function Ja(e){let t=tr(e);return t?t.startsWith("http://localhost:")||t.startsWith("http://127.0.0.1:")||t.startsWith("http://0.0.0.0:"):!1}n(Ja,"isAllowedOrigin");function to(e){let t=tr(e);return Ja(t)?{"access-control-allow-origin":t,vary:"Origin","access-control-allow-methods":"GET, POST, OPTIONS","access-control-allow-headers":"content-type, x-flowinfish-session","access-control-max-age":"86400"}:{}}n(to,"corsHeaders");function Se(e,{status:t=200,origin:r=""}={}){return new Response(JSON.stringify(e),{status:t,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...to(r)}})}n(Se,"json");async function Pt(e,{maxBytes:t=1e6}={}){let r=await e.arrayBuffer();if(r.byteLength>t)throw new Error("Request too large");let o=new TextDecoder().decode(r);try{return o?JSON.parse(o):{}}catch{throw new Error("Invalid JSON body")}}n(Pt,"readJsonBody");function Qa(e){let t=String(e?.model||"").trim();if(!t)throw new Error("Missing model");if(!er.includes(t))throw new Error(`Model not allowed: ${t}`);return t}n(Qa,"enforceAllowedModel");function Za(e){let t=String(e.OPENAI_API_KEY||"").trim();if(!t)throw new Error("Missing server OPENAI_API_KEY");return t}n(Za,"requireOpenAiKey");async function xt({request:e,env:t,pathname:r,payload:o}){let a=Za(t);Qa(o);let i=`${tr(t.OPENAI_API_BASE)||Xa}${r}`,c=await fetch(i,{method:"POST",headers:{authorization:`Bearer ${a}`,"content-type":"application/json"},body:JSON.stringify(o)}),l=new Headers(c.headers);return l.delete("content-length"),l.set("cache-control","no-store"),new Response(c.body,{status:c.status,headers:l})}n(xt,"proxyToOpenAi");function Ze(e){let t=e.headers.get("origin")||"";return new Response(null,{status:204,headers:{...to(t)}})}n(Ze,"handleOptions");async function ro(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return Ze(t);if(o!=="POST")return Se({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return Se({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await Pt(t);return await xt({request:t,env:r,pathname:"/chat/completions",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return Se({ok:!1,error:i},{status:400,origin:a})}}n(ro,"onRequest");var kt={checkoutSession:"/api/payments/stripe/checkout/session",webhook:"/api/payments/stripe/webhook"};var fe={restrictedKey:"STRIPE_RESTRICTED_KEY",secretKey:"STRIPE_SECRET_KEY",webhookSecret:"STRIPE_WEBHOOK_SECRET",checkoutPriceId:"STRIPE_CHECKOUT_PRICE_ID",checkoutCurrency:"STRIPE_CHECKOUT_CURRENCY",checkoutUnitAmount:"STRIPE_CHECKOUT_UNIT_AMOUNT",checkoutProductName:"STRIPE_CHECKOUT_PRODUCT_NAME",checkoutMode:"STRIPE_CHECKOUT_MODE",checkoutReturnOrigin:"STRIPE_CHECKOUT_RETURN_ORIGIN"},Hl=[fe.restrictedKey,fe.secretKey,fe.webhookSecret];var st={configure:"npm run payment:stripe:configure",d1MigrateRemote:"npm run payment:d1:migrate:remote",readiness:"npm run payment:stripe:readiness",x402Configure:"npm run payment:x402:configure",x402Readiness:"npm run payment:x402:readiness",paymentReadiness:"npm run payment:readiness",applyConfirmation:"apply-stripe-payment-worker-config",writeVisibleVarsFlag:"--write-visible-vars",deployVisibleVarsFlag:"--deploy-visible-vars"};var Kl=[`Configure Stripe secrets on the server runtime that owns ${kt.checkoutSession}.`,"Cloudflare Pages project variables are available to Pages builds/functions, but they are not read by separate Worker routes.","Stripe Projects can provision and sync credentials locally; copy only required server secret names into the payment server runtime."].join(" "),Bl=[`Payment server runtime for ${kt.checkoutSession}`,"not Cloudflare Pages project variables"].join("; "),es=[fe.restrictedKey,fe.secretKey].join(" or "),zl=[fe.checkoutPriceId,`${fe.checkoutCurrency} + ${fe.checkoutUnitAmount} + ${fe.checkoutProductName}`].join(" or "),Fl=[`${fe.checkoutMode}=payment`,`${fe.checkoutMode}=subscription with ${fe.checkoutPriceId}`].join(" or "),Gl=["Worker secret names","visible Worker [vars]","remote D1 payment tables","required webhook-processing columns/constraints","bounded optional hosted Checkout create-and-expire smoke"].join(" + "),Wl=[st.configure,`write visible Worker [vars] with ${st.writeVisibleVarsFlag}`,`deploy visible Worker [vars] with ${st.deployVisibleVarsFlag}`,`apply with -- --apply --yes --confirm=${st.applyConfirmation}`,st.readiness].join(" -> "),ql=[`Missing server-managed Stripe key. Set ${es} on the payment server runtime.`,"Pages project variables alone do not satisfy separate Worker routes."].join(" ");var ts=n(e=>{let t=2166136261;for(let r=0;r<e.length;r+=1)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0},"fnv1a32");function oo(e){return ts(String(e??""))}n(oo,"hashString32");function it(e){return oo(e).toString(16).padStart(8,"0")}n(it,"hashStringToHex");var rs=n(e=>e==null?"":typeof e=="boolean"?e?"1":"0":typeof e=="number"?Number.isFinite(e)?String(e):"":String(e),"normalizePrimitive"),os=n(e=>e.map(rs).join("|"),"buildSignatureText"),no=n(e=>it(os(e)),"hashSignatureParts");var Re=n((e,t)=>no(["agentic-commerce",e,...t]),"buildAgenticCommerceSemanticKey");var ao="solana_pay",so="/api/payments/commerce/solana-pay/settle";var De={recipient:"SOLANA_PAY_RECIPIENT",splToken:"SOLANA_PAY_SPL_TOKEN",label:"SOLANA_PAY_LABEL",rpcUrl:"SOLANA_PAY_RPC_URL",amountScale:"SOLANA_PAY_AMOUNT_SCALE",network:"SOLANA_PAY_NETWORK",commitment:"SOLANA_PAY_COMMITMENT"};var ct="2026-01-30",co="1000",lo="USDC",rr="https://x402.org/facilitator",po="eip155:84532",ns="$0.001",uo="x402-payment-required",as="0x0000000000000000000000000000000000000000",et="2026-04-08",io="https://ucp.dev/2026-04-08/specification/overview/",ss=["checkout"],is=["rest"];var I={acpDiscovery:"/.well-known/acp.json",acpConfig:"/.well-known/acp-config",ucpProfile:"/.well-known/ucp",mppOpenApi:"/openapi.json",x402ApiRoot:"/api",x402ApiV1:"/api/v1",checkoutSessions:"/checkout/sessions",x402PaymentRequired:"/api/payments/commerce/x402",commerceWebhook:"/api/payments/commerce/webhook",commerceProofArtifact:"/api/payments/commerce/harness-proof.json",commerceTraceArtifact:"/api/payments/commerce/trace.jsonl",openboxIngest:"/api/payments/commerce/openbox/ingest",web3Settle:"/api/payments/commerce/web3/settle",solanaPaySettle:so},gp=[I.x402ApiRoot,I.x402ApiV1,I.x402PaymentRequired],F={sellerId:"SELLER_ID",checkoutBaseUrl:"CHECKOUT_BASE_URL",web3Enabled:"WEB3_ENABLED",web3DepositAddress:"WEB3_DEPOSIT_ADDRESS",baseRpcUrl:"BASE_RPC_URL",baseConfirmationBlocks:"BASE_CONFIRMATION_BLOCKS",easAttestUrl:"EAS_ATTEST_URL",openboxApiUrl:"OPENBOX_API_URL",openboxIngestUrl:"OPENBOX_INGEST_URL",openboxApiKey:"OPENBOX_API_KEY",stripeDelegatePaymentUrl:"STRIPE_DELEGATE_PAYMENT_URL",acpBearerToken:"ACP_BEARER_TOKEN",x402PayToAddress:"X402_PAY_TO_ADDRESS",x402Network:"X402_NETWORK",x402Asset:"X402_ASSET",x402Amount:"X402_AMOUNT",x402FacilitatorUrl:"X402_FACILITATOR_URL",x402Price:"X402_PRICE"},fp=[F.sellerId,F.checkoutBaseUrl,F.web3Enabled,F.web3DepositAddress,F.baseRpcUrl,F.baseConfirmationBlocks,F.easAttestUrl,F.openboxApiUrl,F.openboxIngestUrl,F.stripeDelegatePaymentUrl,F.x402Network,F.x402Asset,F.x402Amount,F.x402FacilitatorUrl,F.x402Price,De.recipient,De.rpcUrl],yp=[De.splToken,De.label,De.amountScale,De.network,De.commitment],wp=[F.acpBearerToken,F.openboxApiKey],bp=["Visible Worker [vars] for ACP, Web3, x402, OpenBOX, and Solana Pay.","Worker secrets for ACP bearer auth and OpenBOX API access."].join(" "),je=n((e,t)=>String(e[t]||"").trim(),"readEnvString"),mo=n((e,t)=>{let r=je(e,F.sellerId);if(r)return r;try{return new URL(t).host}catch{return"knowgrph-seller"}},"readAgenticCommerceSellerId");var ho=n(e=>{let t=je(e,F.web3Enabled).toLowerCase();return t?t==="0"||t==="false"||t==="no"?!1:t==="1"||t==="true"||t==="yes":!0},"isAgenticCommerceWeb3Enabled");var lt=n(e=>String(e||"").trim().replace(/\/+$/g,""),"normalizeAgenticCommerceBaseUrl"),ue=n((e,t)=>`${lt(e)}${t}`,"buildAgenticCommerceUrl"),oe=n((e,t,r,o,a=o.startsWith("/")?o:null)=>({id:t,label:r,value:o,path:a,semanticKey:Re("mainpanel-commerce-readiness-row",[e,t,r,o,a||""])}),"buildAgenticCommerceMainPanelReadinessRow"),tt=n((e,t,r)=>({id:e,title:t,rows:r}),"buildAgenticCommerceMainPanelReadinessSection"),cs=n(()=>{let e=[tt("overview","Overview",[oe("overview","acp-discovery","ACP discovery",`GET ${I.acpDiscovery}`,I.acpDiscovery),oe("overview","acp-config","ACP config",`GET ${I.acpConfig}`,I.acpConfig),oe("overview","api-version","API version",ct,null)]),tt("discovery","Discovery",[oe("discovery","ucp-profile","UCP profile",I.ucpProfile),oe("discovery","mpp-openapi","MPP OpenAPI",I.mppOpenApi),oe("discovery","x402-payment-required","x402 payment required",I.x402PaymentRequired),oe("discovery","x402-api-root","x402 API root",I.x402ApiRoot)]),tt("sessions","Sessions",[oe("sessions","checkout-sessions","Checkout sessions",I.checkoutSessions),oe("sessions","stripe-webhook","Stripe webhook",kt.webhook)]),tt("web3","Web3",[oe("web3","settle","Settle",I.web3Settle),oe("web3","solana-pay-settle","Solana Pay settle",I.solanaPaySettle),oe("web3","signals","Signals","Base RPC + Solana RPC confirmation",null)]),tt("governance","Governance",[oe("governance","openbox-ingest","OpenBOX ingest",I.openboxIngest),oe("governance","risk-source","Risk source","OpenBOX risk signal",null)]),tt("proofs","Proofs",[oe("proofs","harness-proof","Harness proof",I.commerceProofArtifact),oe("proofs","trace-artifact","Trace artifact",I.commerceTraceArtifact)])],t=e.flatMap(a=>a.rows),r=t.map(a=>a.path||"").filter(a=>a.length>0),o=t.filter(a=>!a.path).map(a=>`${a.label}: ${a.value}`);return{surface:"mainpanel-commerce",semanticKey:Re("mainpanel-commerce-readiness",[ct,...t.map(a=>a.semanticKey)]),sections:e,routePaths:r,routeCount:r.length,signals:o}},"buildAgenticCommerceMainPanelReadiness"),Sp=cs(),go=n((e,t)=>{let r=je(e,F.web3DepositAddress);if(/^0x[0-9a-fA-F]{40}$/.test(r))return r;let o=Re("deposit-address",[t,"0"]),a=Re("deposit-address",[t,"1"]),s=Re("deposit-address",[t,"2"]),i=Re("deposit-address",[t,"3"]),c=Re("deposit-address",[t,"4"]);return`0x${o}${a}${s}${i}${c}`.slice(0,42)},"buildAgenticCommerceDepositAddress");var fo=n((e,t=uo)=>{let r=je(e,F.x402PayToAddress);return/^0x[0-9a-fA-F]{40}$/.test(r)&&r.toLowerCase()!==as?r:go(e,t)},"readAgenticCommerceX402PayToAddress"),_p=go({},uo),ls=/^[a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,64}$/,yo=n(e=>{let t=je(e,F.x402Network);return ls.test(t)?t:po},"readAgenticCommerceX402Network"),wo=n(e=>je(e,F.x402Asset)||lo,"readAgenticCommerceX402Asset"),bo=n(e=>{let t=je(e,F.x402Amount);return/^[1-9][0-9]*$/.test(t)?t:co},"readAgenticCommerceX402Amount");var So=n(e=>{let t=je(e,F.x402FacilitatorUrl);try{let r=new URL(t||rr);return r.protocol==="https:"||r.protocol==="http:"?r.toString().replace(/\/+$/g,""):rr}catch{return rr}},"readAgenticCommerceX402FacilitatorUrl"),_o=n(e=>{let t=lt(e.baseUrl);return{protocol:{name:"acp",version:ct,supported_versions:[ct],documentation_url:"https://agenticcommerce.dev"},api_base_url:t,transports:[...is],capabilities:{services:[...ss],...e.web3Enabled?{extensions:[{name:"x-web3"}]}:{}},links:{config:ue(t,I.acpConfig),ucp:ue(t,I.ucpProfile),mpp:ue(t,I.mppOpenApi),x402:ue(t,I.x402PaymentRequired)}}},"buildAgenticCommerceAcpDiscovery"),Ao=n(e=>{let t=lt(e.baseUrl),r={acp:ue(t,I.acpDiscovery),api:ue(t,I.x402ApiRoot),checkout_sessions:ue(t,I.checkoutSessions),mpp_openapi:ue(t,I.mppOpenApi),proof:ue(t,I.commerceProofArtifact),trace:ue(t,I.commerceTraceArtifact),x402_payment_required:ue(t,I.x402PaymentRequired),solana_pay_settle:ue(t,I.solanaPaySettle)},o={checkout_sessions:!0,content_payments:!0,proof_artifacts:!0,risk_signals:!0,web3_settlement:e.web3Enabled,solana_pay:e.web3Enabled},a={"dev.ucp.shopping":[{version:et,spec:io,transport:"rest",endpoint:r.api,schema:"https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json"}]};return{ucp:{version:et,protocol_version:et,services:a,capabilities:{"dev.ucp.shopping.checkout":[{version:et,spec:"https://ucp.dev/2026-04-08/specification/checkout/",schema:"https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"}]},payment_handlers:{},endpoints:r},protocol_version:et,protocol:{name:"ucp",version:et},seller:{id:e.sellerId},services:[{id:"knowgrph-content-payments",type:"content-payments",endpoints:{x402:r.x402_payment_required,checkout_sessions:r.checkout_sessions,solana_pay_settle:r.solana_pay_settle,proof:r.proof,trace:r.trace}}],capabilities:o,endpoints:r,spec_urls:[io],schema_urls:["https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json","https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"]}},"buildAgenticCommerceUcpProfile"),Po=n(e=>{let t=lt(e.baseUrl);return{openapi:"3.1.0",info:{title:"Knowgrph Machine Payment Protocol",version:ct,description:"Machine-readable payable-operation discovery for Knowgrph commerce routes."},servers:[{url:t}],paths:{[I.x402PaymentRequired]:{get:{operationId:"getKnowgrphX402PaymentRequirement",summary:"Return x402 payment requirements for an agent-readable paid resource.","x-payment-info":{intent:"charge",method:"x402",amount:ns,currency:"usdc"},responses:{402:{description:"Payment Required"}}}},[I.checkoutSessions]:{post:{operationId:"createKnowgrphCommerceCheckoutSession",summary:"Create an agentic commerce checkout session.","x-payment-info":{intent:"session",method:"stripe",amount:"dynamic",currency:"request.currency"},responses:{201:{description:"Checkout session created"}}}},[I.solanaPaySettle]:{post:{operationId:"settleKnowgrphSolanaPayCheckoutSession",summary:"Settle an agentic commerce checkout session from a verified Solana Pay transaction signature.","x-payment-info":{intent:"settlement",method:ao,amount:"dynamic",currency:"request.currency"},responses:{200:{description:"Solana Pay session settled"},409:{description:"Solana Pay transaction is not confirmed yet"},422:{description:"Solana Pay transaction does not match the session"}}}}}}},"buildAgenticCommerceMppOpenApi"),xo=n(e=>{let t=lt(e.baseUrl),r=ue(t,I.x402PaymentRequired),o=String(e.amount||co);return{x402Version:2,error:"Payment required",resource:{url:r,description:"Knowgrph agentic commerce paid-resource readiness probe",mimeType:"application/json"},accepts:[{scheme:"exact",network:String(e.network||po),amount:o,maxAmountRequired:o,asset:String(e.asset||lo),resource:r,mimeType:"application/json",payTo:e.payTo,maxTimeoutSeconds:300,extra:{name:"USDC",version:"2",resourceUrl:r,...e.facilitatorUrl?{facilitatorUrl:e.facilitatorUrl}:{}}}]}},"buildAgenticCommerceX402PaymentRequired");var ps=n(e=>JSON.stringify(e,null,2),"jsonBody"),ds=n(e=>String(e||"").trim().replace(/\/+$/g,""),"trimOrigin"),us=n(e=>typeof btoa=="function"?btoa(e):typeof Buffer<"u"?Buffer.from(e).toString("base64"):"","encodeBase64"),ms=n((e,t)=>{try{return new URL(e).origin}catch{return ds(t)}},"rootOriginFromRequest"),or=n((e={})=>{let t=ms(e.requestUrl,e.origin),r=e.env||{},o=mo(r,`${t}/`),a=ho(r),s=xo({baseUrl:t,payTo:fo(r),network:yo(r),asset:wo(r),amount:bo(r),facilitatorUrl:So(r)});return{acpDiscovery:_o({sellerId:o,baseUrl:t,web3Enabled:a}),ucpProfile:Ao({sellerId:o,baseUrl:t,web3Enabled:a}),mppOpenApi:Po({baseUrl:t}),x402PaymentRequired:s}},"buildKnowgrphCommerceDiscovery");var ko=n((e,t={})=>{let r=or({requestUrl:e?.url,env:t}).x402PaymentRequired,o=us(JSON.stringify(r));return new Response(ps(r),{status:402,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*",...o?{"payment-required":o}:{}}})},"buildKnowgrphX402PaymentRequiredResponse");async function Ro(e){return ko(e.request,e.env||{})}n(Ro,"onRequest");async function Eo(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=t.headers.get("origin")||"";return r==="OPTIONS"?Ze(t):r!=="GET"&&r!=="HEAD"?Se({ok:!1,error:"Method not allowed"},{status:405,origin:o}):Se({ok:!0,models:er.map(a=>({model:a,display_name:a}))},{status:200,origin:o})}n(Eo,"onRequest");async function Co(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return Ze(t);if(o!=="POST")return Se({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return Se({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await Pt(t);return await xt({request:t,env:r,pathname:"/responses",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return Se({ok:!1,error:i},{status:400,origin:a})}}n(Co,"onRequest");var rt=Object.freeze({researchSourceFiles:"knowgrph_research_source_files",inspectAgentSurface:"knowgrph_inspect_agent_surface"}),nr=n(e=>String(e||"").trim(),"normalizeString"),hs=n(e=>({...e,arguments:Array.isArray(e.arguments)?e.arguments.map(t=>({...t})):void 0,_meta:e._meta&&typeof e._meta=="object"?{...e._meta,tools:Array.isArray(e._meta.tools)?[...e._meta.tools]:void 0}:void 0}),"clonePrompt"),vo=Object.freeze([Object.freeze({name:rt.researchSourceFiles,title:"Research Knowgrph Source Files",description:"Guide an MCP host through read-only Knowgrph Source Files research using search and fetch with citation-ready URLs.",arguments:Object.freeze([Object.freeze({name:"query",description:"Research question or topic to pass to the read-only search tool.",required:!0}),Object.freeze({name:"limit",description:"Optional decimal string for the maximum search results to inspect.",required:!1}),Object.freeze({name:"focus",description:"Optional aspect to prioritize when reading fetched Source Files.",required:!1})]),_meta:Object.freeze({readOnly:!0,tools:Object.freeze(["search","fetch"])})}),Object.freeze({name:rt.inspectAgentSurface,title:"Inspect Knowgrph Agent Surface",description:"Guide an MCP host through read-only inspection of Knowgrph agent, MCP, and MCP Apps readiness metadata.",arguments:Object.freeze([Object.freeze({name:"focus",description:"Optional readiness area to emphasize, such as transport, tools, resources, prompts, retrieval, or app metadata.",required:!1})]),_meta:Object.freeze({readOnly:!0,tools:Object.freeze(["inspect_agent_surface"])})})]),Oo=n(()=>vo.map(hs),"buildKnowgrphAgentReadyPromptContracts"),gs=n(e=>vo.find(t=>t.name===nr(e))||null,"findPromptContract"),Rt=n((e,t)=>!e||typeof e!="object"?"":nr(e[t]),"readPromptArg"),fs=n((e,t)=>{let r=Rt(e,t);if(!r)throw new Error(`Missing required prompt argument: ${t}`);return r},"readRequiredPromptArg"),To=n(e=>({role:"user",content:{type:"text",text:e}}),"buildPromptMessage"),ys=n((e={})=>{let t=fs(e,"query"),r=Rt(e,"limit"),o=Rt(e,"focus");return[`Research Knowgrph Source Files for: ${t}`,"","Use the MCP server read-only retrieval path:",`1. Call search with query=${JSON.stringify(t)}${r?` and limit=${JSON.stringify(r)}`:""}.`,"2. Select the most relevant returned ids and call fetch for each id before answering.","3. Ground the answer in fetched markdown content and cite the returned result URLs when summarizing.",o?`4. Prioritize this focus: ${o}.`:"","","Do not mutate graph, canvas, workspace, storage, or browser-local state for this research prompt."].filter(Boolean).join(`
`)},"buildSourceFilesResearchPromptText"),ws=n((e={})=>{let t=Rt(e,"focus");return["Inspect the Knowgrph agent-ready surface through the read-only inspect_agent_surface tool.","","Review health, API catalog, MCP server card, A2A card, agent skills, commerce discovery, and mcpAppsServerReadiness.","For MCP Apps readiness, verify tool/resource linkage, output schema, text fallback, structured content, sandbox/security metadata, no-auth security-scheme mirroring, widget accessibility, prompts, search/fetch retrieval, Streamable HTTP, and local stdio support.",t?`Emphasize this readiness area: ${t}.`:"","","Report checklist ids and evidence from structuredContent. Do not infer readiness from prose alone."].filter(Boolean).join(`
`)},"buildAgentSurfaceInspectionPromptText"),Io=n((e,t={})=>{let r=gs(e);if(!r)throw new Error(`Unknown Knowgrph MCP prompt: ${nr(e)}`);if(r.name===rt.researchSourceFiles)return{description:r.description,messages:[To(ys(t))]};if(r.name===rt.inspectAgentSurface)return{description:r.description,messages:[To(ws(t))]};throw new Error(`Unhandled Knowgrph MCP prompt: ${r.name}`)},"getKnowgrphAgentReadyPrompt");var bs=Object.freeze({sourceFileById:"knowgrph_source_file_by_id"}),Et="kgdoc://source-file/{id}",Mo="kgdoc://source-file/",No="text/markdown",pt=n(e=>String(e||"").trim(),"normalizeString"),Uo=n(()=>[{uriTemplate:Et,name:bs.sourceFileById,title:"Knowgrph Source File By ID",description:"Read a complete published Knowgrph Source File markdown document using a stable kgdoc id returned by search.",mimeType:No,annotations:{audience:["user","assistant"],priority:.8},_meta:{readOnly:!0,source:"knowgrph-source-files",tool:"fetch"}}],"buildKnowgrphAgentReadyResourceTemplateContracts");var Lo=n(e=>{let t=pt(e);if(!t.startsWith(Mo))return"";let r=t.slice(Mo.length);if(!r)return"";try{return decodeURIComponent(r)}catch{return r}},"parseKnowgrphSourceFileResourceUri"),$o=n(({uri:e,sourceFile:t}={})=>{let r=typeof t?.content=="string"?t.content:String(t?.text||"");return{contents:[{uri:pt(e),mimeType:No,text:r,_meta:{id:pt(t?.id),title:pt(t?.title),url:pt(t?.url),metadata:t?.metadata&&typeof t.metadata=="object"?{...t.metadata}:{}}}]}},"buildKnowgrphSourceFileResourceReadResult");var Ee=n(e=>String(e||"").trim(),"normalizeString"),Oe=n(e=>Ee(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),"escapeHtml");var ar="Map intent. Orchestrate agents. Prove outcomes.",sr="A source-backed canvas where / routes work, # sets meaning, and @ binds context.",Ie="knowgrph.agentic_canvas_os.docs.invoke",Ct=Object.freeze(["/mcp.capabilities","#mcp","@mcp-gateway"]),ir="One canonical operator contract: install and discovery stay on the public endpoint, while live /, #, @ grammar stays on the approval-gated control plane or an app-owned forwarder until the host proves MCP session support.",cr="Canonicalize the contract first, not the transport. Keep the runtime split underneath until hosted proof supports a single runtime.",Ss=Object.freeze(["Lovable","Vercel"]),lr="Hosted app builders such as Lovable and Vercel should keep /mcp for discovery and use an app-owned forwarder for live /, #, @ unless the host proves MCP session support.";var pr=n(({publicReadMcpUrl:e,controlPlaneMcpUrl:t}={})=>({promise:ar,grammarSummary:sr,canonicalOperatorContract:ir,canonicalTransportRule:cr,publicReadMcpUrl:Ee(e),controlPlaneMcpUrl:Ee(t),controlPlaneCondition:"Add the control plane only when the host can preserve MCP session state and needs live /, #, @ grammar lookup.",grammarToolName:Ie,grammarExamples:Ct.map(r=>Ee(r)),grammarExecutionBoundary:"Keep install on the public discovery endpoint and execute live grammar on the approval-gated control plane.",hostedBuilderExamples:Ss.map(r=>Ee(r)),hostedGrammarDefaultPath:lr,hostedGrammarFallback:"app-owned-forwarder",cheapestProofPath:"Use the source-side README.md quick start or docs/documents/knowgrph-superagent-harness.md in the knowgrph repo before hosted setup.",steps:[{order:1,label:"Map intent",action:e?`Map intent: install ${Ee(e)} first for public discovery, retrieval, and inspection.`:"Map intent: install the public MCP endpoint first for discovery, retrieval, and inspection."},{order:2,label:"Orchestrate agents",action:t?`Orchestrate agents: add ${Ee(t)} only when the host can preserve MCP session state and needs live /, #, @ grammar lookup through ${Ie}.`:`Orchestrate agents: add the control plane only when the host can preserve MCP session state and needs live /, #, @ grammar lookup through ${Ie}.`},{order:3,label:"Prove outcomes",action:"Prove outcomes: for zero-spend evaluation, run the source-side README.md quick start or docs/documents/knowgrph-superagent-harness.md first."}]}),"buildMcpOnboarding"),Do=n(({publicReadMcpUrl:e,controlPlaneMcpUrl:t}={})=>`<section aria-label="Fastest path">
  <section id="onboarding" class="readiness">
    <strong>Fastest Path</strong>
    <p>${Oe(ar)}</p>
    <p>${Oe(sr)}</p>
    <p>${Oe(ir)}</p>
    <p>${Oe(cr)}</p>
    <p>${Oe(`Live grammar executes through ${Ie} on the control plane. Try ${Ct.join(", ")}.`)}</p>
    <p>${Oe(lr)}</p>
    <ol>
      <li>${Oe(e?`Map intent: install ${Ee(e)} first for public discovery, retrieval, and inspection.`:"Map intent: install the public MCP endpoint first for discovery, retrieval, and inspection.")}</li>
      <li>${Oe(t?`Orchestrate agents: add ${Ee(t)} only when the host can preserve MCP session state and needs live /, #, @ grammar lookup through ${Ie}.`:`Orchestrate agents: add the control plane only when the host can preserve MCP session state and needs live /, #, @ grammar lookup through ${Ie}.`)}</li>
      <li>Prove outcomes: for zero-spend evaluation, use the source-side <code>README.md</code> quick start or <code>docs/documents/knowgrph-superagent-harness.md</code> first.</li>
    </ol>
  </section>
</section>`,"buildMcpOnboardingHtml"),jo=`const renderOnboarding = (payload) => {
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
      ? 'Live grammar executes through ' + String(onboarding.grammarToolName) + ' on the control plane. Try ' + (Array.isArray(onboarding.grammarExamples) && onboarding.grammarExamples.length ? onboarding.grammarExamples.join(', ') : '${Ct.join(", ")}') + '.'
      : 'Live grammar executes through ${Ie} on the control plane. Try ${Ct.join(", ")}.',
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
    { action: onboarding && onboarding.controlPlaneMcpUrl ? 'Orchestrate agents: add ' + onboarding.controlPlaneMcpUrl + ' only when the host can preserve MCP session state and needs live /, #, @ grammar lookup through ${Ie}.' : 'Orchestrate agents: add the control plane only when the host can preserve MCP session state and needs live /, #, @ grammar lookup through ${Ie}.' },
    { action: 'Prove outcomes: for zero-spend evaluation, use the source-side README.md quick start or docs/documents/knowgrph-superagent-harness.md first.' },
  ];
  for (const step of steps) appendText(list, 'li', step && step.action ? String(step.action) : 'Follow the fastest onboarding path.');
  onboardingEl.appendChild(list);
};`;var Tt="io.modelcontextprotocol/ui",Ge="text/html;profile=mcp-app",Fo="2026-01-26",_s="knowgrph-mcp-apps-server-readiness/v0.1",me="ui://knowgrph/agent-ready",mr="knowgrph-agent-ready",We="inspect_agent_surface",Ae=Object.freeze(["search","fetch"]),dr=Object.freeze({search:Object.freeze(["ids"]),fetch:Object.freeze(["id","title","content","text"])}),Ho=Object.freeze(Object.values(rt)),Me="streamable-http",As=Object.freeze([Object.freeze({type:"noauth"})]),ie=Object.freeze({openAiApps:"openai-apps",claude:"claude-mcp-connector",qwenCode:"qwen-code",kimiCli:"kimi-cli",bytePlusModelArk:"byteplus-modelark",generic:"generic-mcp"}),H=n(e=>String(e||"").trim(),"normalizeString"),_e=n(e=>H(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),"escapeHtml"),Ps=n(e=>JSON.stringify(e).replace(/</g,"\\u003c"),"safeJsonForInlineScript"),xs=n(e=>{let t=H(e);if(!t)return"";try{return new URL(t).origin}catch{return""}},"readUrlOrigin"),Go=n(()=>({availability:"template-only-published-contract",scope:"mirror-saved-local-artifacts-only",commandTemplate:"#promotion.retry <path...>",exactCommandSource:"browser-local finalize inspection after a real mirroring failure",reusesSavedLocalArtifacts:!0,rerunsValidation:!1,reappliesCanvas:!1,githubBeforeStorage:!0,insertionMode:"append",surfaces:["published-operator-card","final-assistant-ledger","browser-local-finalize-inspection","warning-toast","toast-insert-action"],note:"This published card shows the command template only. The exact runnable path-bearing command appears after a real mirroring failure in the browser-local finalize inspection, finalize ledger, and warning toast."}),"buildPublishedPromotionRecoveryContract"),ks=n(e=>`<section aria-label="Promotion recovery">
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
</section>`,"buildPromotionRecoveryHtml"),hr=n(()=>({extensions:{[Tt]:{mimeTypes:[Ge]}}}),"buildKnowgrphMcpAppsCapabilities"),ne=n(e=>Array.isArray(e)?e:[],"arrayFrom"),gr=n(()=>As.map(e=>({...e})),"buildKnowgrphMcpNoauthSecuritySchemes"),Wo=n(e=>(Array.isArray(e)&&e.length?e:gr()).filter(r=>r&&typeof r=="object").map(r=>({...r})),"normalizeSecuritySchemes"),Ko=n(e=>ne(e).some(t=>t?.type==="noauth"),"hasNoauthSecurityScheme"),Bo=n(e=>Array.isArray(e)?Wo(e):[],"readSecuritySchemes"),Rs=n(e=>{let t=H(e);return t.includes("window.openai")&&t.includes("openai:set_globals")&&t.includes("toolInput")&&t.includes("toolOutput")&&t.includes("callTool")&&t.includes("request('ui/initialize'")},"hasOpenAiWidgetBridgeHtml"),zo=n((e,t=[])=>e?.outputSchema?.type==="object"&&t.every(r=>ne(e.outputSchema?.required).includes(r)),"hasToolOutputSchemaFields"),ur=n(e=>e?.annotations?.readOnlyHint===!0&&e?.annotations?.destructiveHint===!1&&e?.annotations?.openWorldHint===!1&&e?.annotations?.idempotentHint===!0,"hasReadOnlyToolAnnotations"),Z=n((e,t,r,o=[])=>({id:e,label:t,ok:r===!0,evidence:ne(o).map(H).filter(Boolean)}),"booleanCheck"),fr=n((e={})=>{let t=H(e.baseUrl).replace(/\/+$/,""),r=H(e.serverName)||"knowgrph",o=H(e.mcpUrl)||(t?`${t}/mcp`:"");return{[ie.openAiApps]:{id:ie.openAiApps,label:"OpenAI Apps / ChatGPT",transport:Me,url:o,appResourceUri:me,appToolName:We,requiredMetadata:["openai/outputTemplate","openai/widgetAccessible","openai/widgetCSP","openai/widgetDomain"],requiredTools:[We,...Ae]},[ie.claude]:{id:ie.claude,label:"Claude MCP connector",transport:Me,url:o,beta:"mcp-client-2025-11-20",mcp_servers:[{type:"url",url:o,name:r}],tools:[{type:"mcp_toolset",mcp_server_name:r}],requiredTools:Ae},[ie.qwenCode]:{id:ie.qwenCode,label:"Qwen Code",transport:"http",url:o,command:`qwen mcp add --transport http ${r} ${o}`,settingsJson:{mcpServers:{[r]:{httpUrl:o,timeout:3e4,trust:!1,includeTools:["search","fetch",We]}}},requiredTools:Ae,primaryFlow:"Call search with a natural-language query, then call fetch with the returned kgdoc id."},[ie.kimiCli]:{id:ie.kimiCli,label:"Kimi CLI",transport:"http",url:o,command:`kimi mcp add --transport http ${r} ${o}`,configFile:"~/.kimi/mcp.json",mcpJson:{mcpServers:{[r]:{url:o,transport:"http"}}},requiredTools:Ae,primaryFlow:"Call search with a natural-language query, then call fetch with the returned kgdoc id."},[ie.bytePlusModelArk]:{id:ie.bytePlusModelArk,label:"BytePlus ModelArk Responses API",transport:Me,url:o,apiBaseUrl:"https://ark.ap-southeast.bytepluses.com/api/v3",endpoint:"/responses",requiredHeaders:{"ark-beta-mcp":"true"},tools:[{type:"mcp",server_label:r,server_url:o,require_approval:"never"}],openAiCompatible:{base_url:"https://ark.ap-southeast.bytepluses.com/api/v3",default_headers:{"ark-beta-mcp":"true"},responsesCreate:{model:"<MODELARK_MODEL_OR_ENDPOINT_ID>",tools:[{type:"mcp",server_label:r,server_url:o,require_approval:"never"}]}},invocationScope:"ModelArk Responses API with MCP service and model permissions enabled.",requiredTools:Ae,primaryFlow:"Use ModelArk Responses API with the Knowgrph MCP tool entry, then ask the model to call search and fetch."},[ie.generic]:{id:ie.generic,label:"Generic MCP clients",transport:Me,url:o,initialize:{method:"initialize",accept:["application/json","text/event-stream"]},requiredMethods:["initialize","notifications/initialized","tools/list","tools/call"],optionalMethods:["prompts/list","prompts/get","resources/list","resources/templates/list","resources/read"],requiredTools:Ae}}},"buildKnowgrphMcpClientSetups"),qo=n((e={})=>{let t=H(e.baseUrl).replace(/\/+$/,""),r=H(e.updatedAt),o=e.mcpServerCard&&typeof e.mcpServerCard=="object"?e.mcpServerCard:{},a=o.capabilities&&typeof o.capabilities=="object"?o.capabilities:{},s=ne(e.tools).length?ne(e.tools):ne(a.tools),i=ne(e.resources).length?ne(e.resources):[vt({appUrl:t,updatedAt:r})],c=ne(e.prompts).length?ne(e.prompts):ne(o.prompts),l=ne(e.resourceTemplates).length?ne(e.resourceTemplates):ne(o.resourceTemplates),p=s.filter(_=>_?._meta?.ui?.resourceUri===me),m=p.find(_=>_?.name===We)||p[0]||null,f=i.find(_=>_?.uri===me)||null,P=a.extensions?.[Tt],b=H(o.transport?.url)||(t?`${t}/mcp`:""),O=H(o.surfaceRoles?.publicReadMcpUrl)||b,D=H(o.surfaceRoles?.controlPlaneMcpUrl)||(t?`${t}/control-plane/mcp`:""),N=H(o.transport?.type)||Me,G=H(e.appResourceHtml)||Xo({appUrl:t,updatedAt:r,toolName:m?.name||We}),ee=e.clientSetups&&typeof e.clientSetups=="object"?e.clientSetups:fr({baseUrl:t,mcpUrl:b,serverName:o.serverInfo?.name}),W=m?.outputSchema&&typeof m.outputSchema=="object",R=!!m?.name,T=W,te=m?._meta?.["openai/outputTemplate"]===me,z=Rs(G),le=Ko(m?.securitySchemes)&&Ko(m?._meta?.securitySchemes),U=ur(m),L=m?._meta?.["openai/widgetAccessible"]===!0,Y=c.map(_=>H(_?.name)).filter(Boolean),se=o.capabilities?.prompts&&typeof o.capabilities.prompts=="object",be=Ho.every(_=>Y.includes(_)),ke=l.map(_=>H(_?.uriTemplate)).filter(Boolean),x=ke.includes(Et),w=Object.fromEntries(Ae.map(_=>[_,s.find(K=>K?.name===_)||null])),y=Ae.every(_=>{let K=w[_];return ur(K)&&zo(K,dr[_])}),u=ee[ie.qwenCode],g=u?.transport==="http"&&u?.url===b&&u?.settingsJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.httpUrl===b&&String(u?.command||"").includes("--transport http")&&String(u?.command||"").includes(b),h=ee[ie.kimiCli],A=h?.transport==="http"&&h?.url===b&&h?.mcpJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.url===b&&h?.mcpJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.transport==="http"&&String(h?.command||"").includes("kimi mcp add --transport http")&&String(h?.command||"").includes(b),E=ee[ie.bytePlusModelArk],q=E?.transport===Me&&E?.url===b&&E?.endpoint==="/responses"&&E?.requiredHeaders?.["ark-beta-mcp"]==="true"&&ne(E?.tools).some(_=>_?.type==="mcp"&&_?.server_label===(o.serverInfo?.name||"knowgrph")&&_?.server_url===b&&_?.require_approval==="never")&&E?.openAiCompatible?.responsesCreate?.tools?.some(_=>_?.type==="mcp"&&_?.server_label===(o.serverInfo?.name||"knowgrph")&&_?.server_url===b&&_?.require_approval==="never"),j=[Z("app-tool-resource-link","App tool is linked to the UI resource",p.length>0,p.map(_=>_.name)),Z("output-schema","App tool exposes an output schema",W,[m?.name]),Z("text-fallback","Tool result keeps a text fallback for non-UI hosts",R,[m?.name]),Z("structured-content","Tool result returns structured content for the View",T,[m?.name]),Z("resource-descriptor","MCP resource descriptor uses the MCP Apps MIME type",f?.mimeType===Ge,[f?.uri]),Z("resource-security-meta","Resource declares UI sandbox metadata",f?._meta?.ui?.prefersBorder===!0&&!!f?._meta?.ui?.csp,[f?.uri]),Z("openai-output-template","App tool exposes the OpenAI output template metadata key",te,[m?.name]),Z("openai-widget-bridge","App resource supports the OpenAI Apps widget bridge",z,["window.openai","openai:set_globals"]),Z("tool-security-schemes","App tool exposes no-auth securitySchemes and mirrors them in _meta",le,[m?.name]),Z("tool-impact-annotations","App tool exposes complete read-only impact annotations",U,[m?.name]),Z("widget-accessible","App tool allows the widget bridge to call tools",L,[m?.name]),Z("prompt-discovery","Server exposes MCP prompt templates for multi-host guidance",se&&be,Y),Z("source-file-resource-template","Server exposes a dynamic Source Files resource template",x,ke),Z("deep-research-search-fetch","Server exposes read-only search and fetch tools",y,Ae),Z("qwen-code-http-client-setup","Server advertises Qwen Code HTTP MCP setup",g,[u?.command]),Z("kimi-cli-http-client-setup","Server advertises Kimi CLI HTTP MCP setup",A,[h?.command]),Z("byteplus-modelark-responses-mcp-setup","Server advertises BytePlus ModelArk Responses API MCP setup",q,[E?.apiBaseUrl,E?.endpoint]),Z("extension-capability","Server advertises the MCP Apps extension capability",P?.mimeTypes?.includes(Ge),[Tt]),Z("streamable-http-transport","Server exposes a stateless Streamable HTTP JSON-RPC transport",!!b&&N===Me,[b,N]),Z("stdio-transport","Repo-local MCP server supports stdio host configuration",e.localStdio!==!1,["node mcp/server.js"])],$=j.every(_=>_.ok),X=Go();return{schemaVersion:_s,ready:$,updatedAt:r,app:{name:mr,protocolVersion:Fo,resourceUri:me,resourceMimeType:Ge,extensionId:Tt},tool:{name:m?.name||We,title:m?.title||"Inspect Agent Surface",resourceUri:m?._meta?.ui?.resourceUri||me,visibility:ne(m?._meta?.ui?.visibility).length?m._meta.ui.visibility:["model","app"],readOnly:m?.annotations?.readOnlyHint===!0,destructive:m?.annotations?.destructiveHint===!0,openWorld:m?.annotations?.openWorldHint===!0,idempotent:m?.annotations?.idempotentHint===!0,annotationsReady:U,hasOutputSchema:!!W,textFallback:R,structuredContent:T,openAiOutputTemplate:te,openAiWidgetBridge:z,securitySchemes:Bo(m?.securitySchemes),mirroredSecuritySchemes:Bo(m?._meta?.securitySchemes),widgetAccessible:L},resource:{uri:f?.uri||me,name:f?.name||mr,mimeType:f?.mimeType||Ge,prefersBorder:f?._meta?.ui?.prefersBorder===!0,domain:H(f?._meta?.ui?.domain),csp:f?._meta?.ui?.csp||{},openAiWidgetBridge:z},retrieval:{mode:"deep-research-search-fetch",requiredTools:Ae,tools:Ae.map(_=>{let K=w[_];return{name:_,readOnly:K?.annotations?.readOnlyHint===!0,destructive:K?.annotations?.destructiveHint===!0,openWorld:K?.annotations?.openWorldHint===!0,idempotent:K?.annotations?.idempotentHint===!0,annotationsReady:ur(K),requiredOutputFields:dr[_],outputSchemaReady:zo(K,dr[_])}})},prompts:{requiredPrompts:Ho,names:Y,capability:!!se,ready:se&&be},resourceTemplates:{requiredTemplates:[Et],uriTemplates:ke,ready:x},clients:ee,transports:[{id:"pages-http-jsonrpc",type:N,url:b,stateless:!0,serverFactory:!0},{id:"local-stdio-jsonrpc",type:"stdio",command:"node mcp/server.js",stateless:!1,serverFactory:!0}],dataModel:{source:"inspect_agent_surface.structuredContent",categories:[{id:"discovery",label:"Discovery metadata",count:["health","apiCatalog","openApi","mcpServerCard","agentCard","agentSkills"].length},{id:"commerce",label:"Commerce discovery",count:["acpDiscovery","ucpProfile","mppOpenApi"].length},{id:"mcp-apps",label:"MCP Apps server bindings",count:j.length}],renderMode:"structured-summary-with-json-fallback"},onboarding:pr({publicReadMcpUrl:O,controlPlaneMcpUrl:D}),operatorContracts:{promotionRecovery:X},checklist:j}},"buildKnowgrphMcpAppsServerReadiness"),Vo=n((e={})=>{let t=H(e.resourceUri)||me;return{securitySchemes:Wo(e.securitySchemes),ui:{resourceUri:t,visibility:Array.isArray(e.visibility)&&e.visibility.length?e.visibility:["model","app"]},"openai/outputTemplate":t,"openai/widgetAccessible":e.widgetAccessible!==!1,"openai/toolInvocation/invoking":H(e.invoking)||"Inspecting Knowgrph.","openai/toolInvocation/invoked":H(e.invoked)||"Knowgrph is ready."}},"buildKnowgrphMcpAppsToolMeta"),Yo=Object.freeze({type:"object",additionalProperties:!0,required:["baseUrl","healthUrl","mcpUrl"],properties:{baseUrl:{type:"string"},healthUrl:{type:"string"},mcpUrl:{type:"string"},apiCatalogUrl:{type:"string"},openApiUrl:{type:"string"},mcpServerCardUrl:{type:"string"},agentCardUrl:{type:"string"},agentSkillsUrl:{type:"string"},commerceUrls:{type:"object",additionalProperties:{type:"string"}},health:{type:"object",additionalProperties:!0},apiCatalog:{type:"object",additionalProperties:!0},openApi:{type:"object",additionalProperties:!0},mcpServerCard:{type:"object",additionalProperties:!0},agentCard:{type:"object",additionalProperties:!0},agentSkills:{type:"object",additionalProperties:!0},commerce:{type:"object",additionalProperties:!0},mcpAppsServerReadiness:{type:"object",additionalProperties:!0}}}),vt=n((e={})=>{let t=H(e.appUrl),r=H(e.updatedAt),o=H(e.domain)||xs(t),a={connectDomains:[],resourceDomains:[],frameDomains:[],baseUriDomains:[]};return{uri:me,name:mr,description:["Interactive MCP Apps view for the existing Knowgrph agent-ready surface.",t?`App URL: ${t}`:"",r?`Updated: ${r}`:""].filter(Boolean).join(" "),mimeType:Ge,_meta:{ui:{csp:a,...o?{domain:o}:{},prefersBorder:!0},"openai/widgetDescription":"Interactive Knowgrph agent-ready server-readiness view.","openai/widgetPrefersBorder":!0,...o?{"openai/widgetDomain":o}:{},"openai/widgetCSP":{connect_domains:a.connectDomains,resource_domains:a.resourceDomains,frame_domains:a.frameDomains}}}},"buildKnowgrphMcpAppsResourceDescriptor"),Xo=n((e={})=>{let t=H(e.appUrl),r=H(e.updatedAt),o=H(e.toolName)||We,a=t?`${t.replace(/\/+$/,"")}/mcp`:"",s=t?`${t.replace(/\/+$/,"")}/control-plane/mcp`:"",i=Array.isArray(e.toolNames)?e.toolNames.map(H).filter(Boolean):[o],c={appUrl:t,updatedAt:r,resourceUri:me,toolName:o,toolNames:i,protocolVersion:Fo,onboarding:pr({publicReadMcpUrl:a,controlPlaneMcpUrl:s}),promotionRecovery:Go()};return`<!doctype html>
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
    ${Do({publicReadMcpUrl:a,controlPlaneMcpUrl:s})}
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
    const boot = ${Ps(c)};
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
    ${jo}
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
</html>`},"buildKnowgrphMcpAppsHtml"),yr=n((e={})=>{let t=vt(e);return{contents:[{uri:t.uri,mimeType:Ge,text:Xo(e),_meta:t._meta}]}},"buildKnowgrphMcpAppsResourceReadResult");var wr=Object.freeze({inspect:"inspect_local_xr_scene_assets",control:"control_local_xr_scene"}),id=Object.freeze({stage:"/xr.stage",place:"/xr.place",animate:"/xr.animate",label:"/xr.label",remove:"/xr.remove"}),cd=Object.freeze({travel:"#travel",hold:"#hold"});var d=Object.freeze({search:"search",fetch:"fetch",listSourceFiles:"list_source_files",readSourceFile:"read_source_file",readSharedDocument:"read_shared_document",inspectSharedDocumentStructure:"inspect_shared_document_structure",inspectLocalSettingsChatReadiness:"inspect_local_settings_chat_readiness",inspectLocalMainPanelState:"inspect_local_mainpanel_state",inspectLocalEditorWorkspaceState:"inspect_local_editor_workspace_state",inspectLocalChatPipelineState:"inspect_local_chat_pipeline_state",inspectLocalMainPanelChatCanvasPipeline:"inspect_local_mainpanel_chat_canvas_pipeline",inspectLocalWorkspaceDocument:"inspect_local_workspace_document",inspectLocalCanvasTopology:"inspect_local_canvas_topology",inspectLocalCanvasSnapshot:"inspect_local_canvas_snapshot",inspectLocal3dCameraPose:"inspect_local_3d_camera_pose",inspectLocal3dLayoutPositions:"inspect_local_3d_layout_positions",inspectLocalXrSceneAssets:wr.inspect,controlLocalXrScene:wr.control,inspectLocal2dZoomViewport:"inspect_local_2d_zoom_viewport",inspectLocalSourceFilesSnapshot:"inspect_local_source_files_snapshot",readLocalRuntimeIdentity:"read_local_runtime_identity",inspectAgentSurface:"inspect_agent_surface"}),Es="knowgrph";var Cs=n(()=>Object.freeze({readOnlyHint:!0,destructiveHint:!1,openWorldHint:!1,idempotentHint:!0}),"buildReadOnlyToolAnnotations"),J=Cs(),Ts=Object.freeze({readOnlyHint:!1,destructiveHint:!1,openWorldHint:!1,idempotentHint:!1}),vs=Object.freeze({type:"object",additionalProperties:!0,required:["ids","results"],properties:{ids:{type:"array",items:{type:"string"}},results:{type:"array",items:{type:"object",additionalProperties:!0,required:["id","title","url"],properties:{id:{type:"string"},title:{type:"string"},url:{type:"string"},snippet:{type:"string"},workspaceId:{type:"string"},canonicalPath:{type:"string"}}}}}}),Os=Object.freeze({type:"object",additionalProperties:!0,required:["id","title","content","text","url"],properties:{id:{type:"string"},title:{type:"string"},content:{type:"string"},text:{type:"string"},url:{type:"string"},metadata:{type:"object",additionalProperties:!0}}}),Is=Object.freeze({type:"object",additionalProperties:!1,required:["identity","gate"],properties:{identity:{type:"object",additionalProperties:!0,required:["schema","device","branch","knowgrphRevision","agenticCanvasOsRevision","catalogRevision","catalogHydration","catalogCounts"]},gate:{type:"object",additionalProperties:!0,required:["schema","status","transportStatus","requiredDeviceCount","observedDeviceCount","expiresAtMs","verificationDigest","message","differences"]}}}),V=n((e,t=Es)=>`${String(t||"").trim()}.${String(e||"").trim()}`,"buildKnowgrphWebMcpToolName"),br=n((e={})=>{let t=String(e.defaultWorkspaceId||"").trim(),r=e.includeBrowserOnlyTools===!0;return[{name:d.search,webName:V(d.search),title:"Search Knowgrph Source Files",description:"Use this when an MCP host needs to search published Knowgrph Source Files and return stable document IDs for the `fetch` tool. Call this first for OpenAI Deep Research-style retrieval, Claude, Qwen Code, Kimi CLI, BytePlus ModelArk, and generic MCP clients.",inputSchema:{type:"object",additionalProperties:!1,required:["query"],properties:{query:{type:"string"},limit:{type:"number",default:10}}},outputSchema:vs,annotations:J},{name:d.fetch,webName:V(d.fetch),title:"Fetch Knowgrph Source File",description:"Use this when an MCP host needs the complete published Knowgrph Source File for an ID returned by `search`. Returns markdown as both `content` and `text` for OpenAI, Claude, Qwen Code, Kimi CLI, BytePlus ModelArk, and generic MCP clients.",inputSchema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"string"}}},outputSchema:Os,annotations:J},{name:d.listSourceFiles,webName:V(d.listSourceFiles),title:"List Source Files",description:"Use this when an MCP host needs the published Knowgrph Source Files index as markdown.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:d.readSourceFile,webName:V(d.readSourceFile),title:"Read Source File",description:"Use this when an MCP host knows a published Knowgrph canonical path and needs that Editor Workspace markdown content. Defaults to the canonical docs workspace when workspaceId is omitted.",inputSchema:{type:"object",additionalProperties:!1,required:["canonicalPath"],properties:{canonicalPath:{type:"string"},workspaceId:t?{type:"string",default:t}:{type:"string"}}},annotations:J},{name:d.readSharedDocument,webName:V(d.readSharedDocument),title:"Read Shared Document",description:"Use this when an MCP host has a Knowgrph share token or public Knowgrph share/document URL and needs the published markdown content.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:J},{name:d.inspectSharedDocumentStructure,webName:V(d.inspectSharedDocumentStructure),title:"Inspect Shared Document Structure",description:"Use this when an MCP host has a Knowgrph share token or public Knowgrph share/document URL and needs frontmatter/body structure without mutating the document.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:J},...r?[{name:d.inspectLocalSettingsChatReadiness,webName:V(d.inspectLocalSettingsChatReadiness),title:"Inspect Local Settings Chat Readiness",description:"Inspect the active browser-local Knowgrph SettingsView chat readiness state for MainPanel MCP, Integrations, and Commerce, including provider, routing, and model discovery status.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:d.inspectLocalMainPanelState,webName:V(d.inspectLocalMainPanelState),title:"Inspect Local MainPanel State",description:"Inspect the active browser-local Knowgrph MainPanel tab, search, and shared action state for MCP, Integrations, and Commerce readiness.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:d.inspectLocalEditorWorkspaceState,webName:V(d.inspectLocalEditorWorkspaceState),title:"Inspect Local Editor Workspace State",description:"Inspect the active browser-local Knowgrph Editor Workspace and Markdown pane state, including pane visibility and live draft/frontmatter structure.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:d.inspectLocalChatPipelineState,webName:V(d.inspectLocalChatPipelineState),title:"Inspect Local Chat Pipeline State",description:"Inspect the active browser-local Knowgrph FloatingPanel chat runtime, including streaming, workspace follow path, LLM-to-workspace pipeline state, and promotion retry recovery for already-saved local artifacts.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:d.inspectLocalMainPanelChatCanvasPipeline,webName:V(d.inspectLocalMainPanelChatCanvasPipeline),title:"Inspect Local MainPanel Chat Canvas Pipeline",description:"Inspect the active browser-local Knowgrph E2E readiness path from MainPanel MCP, Integrations, and Commerce through FloatingPanel Chat, workspace markdown/frontmatter, and canvas topology.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:d.inspectLocalWorkspaceDocument,webName:V(d.inspectLocalWorkspaceDocument),title:"Inspect Local Workspace Document",description:"Inspect the active browser-local Knowgrph workspace markdown document structure without reading published storage routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:d.inspectLocalCanvasTopology,webName:V(d.inspectLocalCanvasTopology),title:"Inspect Local Canvas Topology",description:"Inspect the active browser-local Knowgrph canvas topology summary from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:d.inspectLocalCanvasSnapshot,webName:V(d.inspectLocalCanvasSnapshot),title:"Inspect Local Canvas Snapshot",description:"Inspect the active browser-local Knowgrph canvas SVG snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:d.inspectLocal3dCameraPose,webName:V(d.inspectLocal3dCameraPose),title:"Inspect Local 3D Camera Pose",description:"Inspect the active browser-local Knowgrph 3D camera pose from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:d.inspectLocal3dLayoutPositions,webName:V(d.inspectLocal3dLayoutPositions),title:"Inspect Local 3D Layout Positions",description:"Inspect the active browser-local Knowgrph 3D layout positions from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:d.inspectLocalXrSceneAssets,webName:V(d.inspectLocalXrSceneAssets),title:"Inspect Local XR Scene Assets",description:"Inspect the browser-local XR environment kits, procedural 3D asset library, / @ # invocation grammar, placed subjects, and animation state without mutating the scene.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},outputSchema:{type:"object",additionalProperties:!0,required:["schema","webMcpTools","sceneReady","invocationGrammar","environments","assets","runtime"]},annotations:J},{name:d.controlLocalXrScene,webName:V(d.controlLocalXrScene),title:"Control Local XR Scene",description:"Control the open browser-local XR scene through structured actions or /xr.stage, /xr.place, and /xr.animate invocations with @ targets and #travel or #hold animation tokens.",inputSchema:{type:"object",additionalProperties:!1,properties:{invocation:{type:"string",description:"Invocation such as /xr.place @person-adult #travel."},action:{type:"string",enum:["stage","place","animate","label","remove"]},stageId:{type:"string"},assetId:{type:"string"},subjectId:{type:"string"},label:{type:"string",maxLength:80},motion:{type:"string",enum:["travel","hold"]}},anyOf:[{required:["invocation"]},{required:["action"]}]},outputSchema:{type:"object",additionalProperties:!0,required:["ok","message"]},annotations:Ts},{name:d.inspectLocal2dZoomViewport,webName:V(d.inspectLocal2dZoomViewport),title:"Inspect Local 2D Zoom Viewport",description:"Inspect the active browser-local Knowgrph 2D zoom and viewport state from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:d.inspectLocalSourceFilesSnapshot,webName:V(d.inspectLocalSourceFilesSnapshot),title:"Inspect Local Source Files Snapshot",description:"Inspect the active browser-local Knowgrph Source Files runtime snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:J},{name:d.readLocalRuntimeIdentity,webName:V(d.readLocalRuntimeIdentity),title:"Read Local Runtime Identity",description:"Read the application-global canonical Knowgrph runtime identity and automatic cross-device verification status without refreshing catalogs, rebuilding identity, copying clipboard data, or mutating source.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},outputSchema:Is,annotations:J}]:[],{name:d.inspectAgentSurface,webName:V(d.inspectAgentSurface),title:"Inspect Agent Surface",description:"Use this when an MCP Apps-capable host or generic MCP client needs to inspect Knowgrph agent-ready discovery, MCP Apps readiness, OpenAPI, and skill metadata.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},outputSchema:Yo,annotations:J,_meta:Vo()}].map(a=>({...a,securitySchemes:Array.isArray(a.securitySchemes)&&a.securitySchemes.length?a.securitySchemes:gr()}))},"buildKnowgrphAgentReadyToolContracts");var Jo=n((e={})=>{let t=String(e.baseUrl||"").replace(/\/+$/,""),r=t?new URL(`${t}/`).origin:"";return{...{baseUrl:t,healthUrl:`${t}/health`,mcpUrl:`${t}/mcp`,controlPlaneMcpUrl:`${t}/control-plane/mcp`,apiCatalogUrl:`${t}/.well-known/api-catalog`,openApiUrl:`${t}/.well-known/openapi.json`,mcpServerCardUrl:`${t}/.well-known/mcp/server-card.json`,agentCardUrl:`${t}/.well-known/agent-card.json`,agentSkillsUrl:`${t}/.well-known/agent-skills/index.json`,commerceUrls:{acpDiscoveryUrl:`${r}/.well-known/acp.json`,ucpProfileUrl:`${r}/.well-known/ucp`,mppOpenApiUrl:`${r}/openapi.json`,x402PaymentRequiredUrl:`${r}/api/payments/commerce/x402`},health:e.health,apiCatalog:e.apiCatalog,openApi:e.openApi,mcpServerCard:e.mcpServerCard,agentCard:e.agentCard,agentSkills:e.agentSkills,commerce:e.commerce},mcpAppsServerReadiness:qo({baseUrl:t,updatedAt:e.updatedAt||e.health?.updatedAt||"",mcpServerCard:e.mcpServerCard})}},"buildAgentSurfaceInspectionPayload");var Sr=n((e={})=>{let t=e.toolNames||{},r=String(e.defaultWorkspaceId||"").trim(),o=e.buildStorageDocPath,a=e.fetchSourceFilesIndexResponse,s=e.fetchStorageMarkdownResponse,i=e.resolveSharedDocumentInput,c=e.inspectSharedDocumentStructure,l=e.buildAgentSurfaceInspection,p=n(u=>String(u||"").trim(),"normalizeString"),m=p(e.publicBaseUrl).replace(/\/+$/,""),f=n(u=>String(u||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),P=n(u=>{try{return decodeURIComponent(String(u||""))}catch{return String(u||"")}},"safeDecodeURIComponent"),b=n(u=>{let g=p(u).split("/").filter(Boolean);return g[g.length-1]||p(u)||"Knowgrph Source File"},"titleFromCanonicalPath"),O=n((u,g=220)=>{let h=p(u).replace(/\s+/g," ");return h.length<=g?h:`${h.slice(0,g-1)}\u2026`},"truncateSnippet"),D=Math.max(0,Math.min(50,Number.isFinite(Number(e.searchContentScanMax))?Math.floor(Number(e.searchContentScanMax)):32)),N=Math.max(1e3,Math.min(5e4,Number.isFinite(Number(e.searchContentMaxChars))?Math.floor(Number(e.searchContentMaxChars)):24e3)),G=Math.max(1,Math.min(8,Number.isFinite(Number(e.searchContentConcurrency))?Math.floor(Number(e.searchContentConcurrency)):4)),ee=new Set(["a","an","and","are","as","at","be","by","can","do","does","for","from","how","i","in","is","it","of","on","or","the","this","to","what","when","where","which","who","why","with"]),W=n(u=>p(u).toLowerCase().split(/[^a-z0-9:_./-]+/).map(p).filter(g=>g&&!ee.has(g)),"tokenizeSearchQuery"),R=n((u,g)=>g.reduce((h,A)=>{let E=String(u||""),q=0,j=0;for(;j<E.length;){let $=E.indexOf(A,j);if($<0)break;q+=1,j=$+Math.max(1,A.length)}return h+q},0),"countTokenHits"),T=n((u,g,h=260)=>{let A=p(u).replace(/\s+/g," ");if(!A)return"";let E=A.toLowerCase(),q=g.map(X=>E.indexOf(X)).filter(X=>X>=0).sort((X,_)=>X-_)[0];if(!Number.isFinite(q))return O(A,h);let j=Math.max(0,q-Math.floor(h/3)),$=Math.min(A.length,j+h);return`${j>0?"\u2026":""}${A.slice(j,$)}${$<A.length?"\u2026":""}`},"snippetAroundSearchHit"),te=n(async(u,g)=>{let h=new Array(u.length),A=0,E=Array.from({length:Math.min(G,u.length)},async()=>{for(;A<u.length;){let q=A;A+=1,h[q]=await g(u[q],q)}});return await Promise.all(E),h},"runBoundedConcurrent"),z=n(({workspaceId:u="",canonicalPath:g=""}={})=>{let h=o(p(g),p(u));return m?`${m}${h}`:h},"buildPublicDocUrl");if(!!(t.search||t.fetch||t.listSourceFiles||t.readSourceFile||t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof o!="function")throw new Error("buildStorageDocPath is required");if((t.search||t.listSourceFiles)&&typeof a!="function")throw new Error("fetchSourceFilesIndexResponse is required");if((t.fetch||t.readSourceFile||t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof s!="function")throw new Error("fetchStorageMarkdownResponse is required");if((t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof i!="function")throw new Error("resolveSharedDocumentInput is required");if(t.inspectSharedDocumentStructure&&typeof c!="function")throw new Error("inspectSharedDocumentStructure is required");if(t.inspectAgentSurface&&typeof l!="function")throw new Error("buildAgentSurfaceInspection is required");let U=n(async(u={})=>{let g=p(u.canonicalPath);if(!g)throw new Error("canonicalPath is required");let h=p(u.workspaceId),A=await s(o(g,h));if(!A.ok)throw new Error(`read_source_file failed with ${A.status}`);return{workspaceId:h||r,canonicalPath:g,markdown:await A.text()}},"readSourceFile"),L=n(async(u={})=>{let g=i(u);if(!g)throw new Error("shareToken or shareUrl must resolve to a published Knowgrph document");let h=p(g.workspaceId),A=p(g.canonicalPath),E=await s(o(A,h));if(!E.ok)throw new Error(`read_shared_document failed with ${E.status}`);return{workspaceId:h||r,canonicalPath:A,markdown:await E.text()}},"readSharedDocument"),Y=n(async(u={})=>{let g=await L(u);return c(g)},"inspectSharedDocument"),se=n(({workspaceId:u="",canonicalPath:g=""}={})=>`kgdoc:${encodeURIComponent(p(u))}:${encodeURIComponent(p(g))}`,"buildSearchFetchId"),be=n(u=>{let g=p(u),h=g.match(/^kgdoc:([^:]*):(.*)$/);if(h)return{workspaceId:P(h[1]||""),canonicalPath:P(h[2]||"")};let A=g.match(/\/(?:api\/storage\/doc|knowgrph\/doc)\/([^/\s)]+)\/([^\s)]+)$/);if(A)return{workspaceId:P(A[1]||""),canonicalPath:P(A[2]||"")};let E=g.match(/\/(?:api\/storage\/doc-default|knowgrph\/doc-default)\/([^\s)]+)$/);return E?{workspaceId:"",canonicalPath:P(E[1]||"")}:null},"parseSearchFetchId"),ke=n(u=>{let g=f(u).split(`
`),h=new Map,A=n(({workspaceId:E="",canonicalPath:q="",line:j=""}={})=>{let $=p(q);if(!$)return;let X=p(E),_=se({workspaceId:X,canonicalPath:$});h.has(_)||h.set(_,{id:_,title:b($),url:z({workspaceId:X,canonicalPath:$}),snippet:O(j||$),workspaceId:X||r,canonicalPath:$})},"addEntry");for(let E of g){let q=/\/(?:api\/storage\/doc|knowgrph\/doc)\/([^/\s)\]]+)\/([^\s)\]]+)/g,j=/\/(?:api\/storage\/doc-default|knowgrph\/doc-default)\/([^\s)\]]+)/g;for(let $ of E.matchAll(q))A({workspaceId:P($[1]||""),canonicalPath:P($[2]||""),line:E});for(let $ of E.matchAll(j))A({workspaceId:"",canonicalPath:P($[1]||""),line:E})}return Array.from(h.values())},"extractSearchEntriesFromSourceFilesIndex"),x=n(async(u={})=>{let g=p(u.query);if(!g)throw new Error("query is required");let h=Math.max(1,Math.min(25,Number.isFinite(Number(u.limit))?Math.floor(Number(u.limit)):10)),A=await a();if(!A.ok)throw new Error(`search failed with ${A.status}`);let E=await A.text(),q=ke(E),j=W(g),$=j.join(" "),X=q.map(v=>{let Q=`${v.title}
${v.canonicalPath}
${v.workspaceId}
${v.snippet}`.toLowerCase(),ze=$&&Q.includes($)?j.length*4:0,Fe=j.reduce((At,Zt)=>At+(Q.includes(Zt)?2:0),0);return{...v,score:ze+Fe}}),_=X.slice().sort((v,Q)=>Q.score-v.score||v.title.localeCompare(Q.title)).slice(0,D).filter(v=>/\.md(?:$|[?#])/i.test(v.canonicalPath)),K=new Map;await te(_,async v=>{let Q=be(v.id);if(!Q?.canonicalPath)return null;try{let ze=await s(o(Q.canonicalPath,Q.workspaceId));if(!ze.ok)return null;let Fe=(await ze.text()).slice(0,N),At=Fe.toLowerCase(),Zt=$&&At.includes($)?j.length*6:0,Va=R(At,j),eo=Zt+Va;if(eo<=0)return null;K.set(v.id,{score:eo,snippet:T(Fe,j)})}catch{return null}return null});let de=X.map(v=>{let Q=K.get(v.id);return{...v,score:v.score+(Q?.score||0),snippet:Q?.snippet||v.snippet}}).filter(v=>v.score>0).sort((v,Q)=>Q.score-v.score||v.title.localeCompare(Q.title)).slice(0,h).map(({score:v,...Q})=>Q);return{ids:de.map(v=>v.id),results:de,query:g,totalResults:de.length}},"searchSourceFiles"),w=n(async(u={})=>{let g=be(u.id);if(!g?.canonicalPath)throw new Error("id must be a stable Knowgrph Source File id returned by search");let h=await U(g),A=z(g);return{id:se(g),title:b(h.canonicalPath),content:h.markdown,text:h.markdown,url:A,metadata:{workspaceId:h.workspaceId,canonicalPath:h.canonicalPath,contentType:"text/markdown",source:"knowgrph-source-files"}}},"fetchSourceFileBySearchId"),y={};return t.search&&(y[t.search]=x),t.fetch&&(y[t.fetch]=w),t.listSourceFiles&&(y[t.listSourceFiles]=async()=>{let u=await a();if(!u.ok)throw new Error(`list_source_files failed with ${u.status}`);return{workspaceId:r,markdownIndex:await u.text()}}),t.readSourceFile&&(y[t.readSourceFile]=U),t.readSharedDocument&&(y[t.readSharedDocument]=L),t.inspectSharedDocumentStructure&&(y[t.inspectSharedDocumentStructure]=Y),t.inspectAgentSurface&&(y[t.inspectAgentSurface]=async()=>l()),y},"createPublishedAgentReadyToolExecutors"),Ms=n(e=>`((...args) => {
  const n = (value) => value
  const __name = (value) => value
  return (${Function.prototype.toString.call(e)})(...args)
})`,"createBrowserSafeFunctionSource"),Qo=Ms(Sr);var Zo=n((e={})=>{let t=n(x=>String(x||"").trim(),"normalizeString"),r=n(x=>String(x||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),o=n(x=>{let w=String(x||"").match(/^\s*/);return w?w[0].length:0},"readIndent"),a=n(x=>/^[A-Za-z0-9_:@-]+\s*:/.test(t(x)),"isYamlKeyLine"),s=n(x=>r(x).split(`
`),"splitLines"),i=n(x=>{let w=s(x),y=0;for(;y<w.length&&!t(w[y]);)y+=1;if(t(w[y])!=="---")return null;for(let u=y+1;u<w.length;u+=1)if(t(w[u])==="---")return{frontmatter:w.slice(y+1,u).join(`
`),body:w.slice(u+1).join(`
`)};return null},"extractLeadingFrontmatter"),c=n(x=>{let w=[];for(let y of s(x)){if(!t(y)||o(y)!==0)continue;let u=y.match(/^([A-Za-z0-9_:@-]+)\s*:/);u?.[1]&&w.push(u[1])}return Array.from(new Set(w)).sort((y,u)=>y.localeCompare(u))},"extractTopLevelFrontmatterKeys"),l=n((x,w)=>{let y=s(x),u=`${w}:`;for(let g=0;g<y.length;g+=1){let h=y[g],A=t(h);if(!A.startsWith(u))continue;let E=o(h),q=A.slice(u.length).trim();if(q)return{indent:E,inlineValue:q,blockLines:[],blockText:""};let j=[];for(let $=g+1;$<y.length;$+=1){let X=y[$],_=t(X),K=o(X);if(_&&K<=E&&a(X))break;j.push(X)}return{indent:E,inlineValue:"",blockLines:j,blockText:j.join(`
`)}}return null},"extractYamlBlock"),p=n(x=>{let w=[];for(let y of s(x)){let u=t(y);if(!u||u.startsWith("- "))continue;let g=u.match(/^([A-Za-z0-9_:@-]+)\s*:/);g?.[1]&&w.push(g[1])}return Array.from(new Set(w)).sort((y,u)=>y.localeCompare(u))},"extractNestedYamlKeys"),m=n(x=>{let w=s(x).filter(g=>t(g));if(!w.length)return[];let y=Math.min(...w.map(o)),u=[];for(let g of w){if(o(g)!==y)continue;let h=t(g);if(h.startsWith("- "))continue;let A=h.match(/^([A-Za-z0-9_:@-]+)\s*:/);A?.[1]&&u.push(A[1])}return Array.from(new Set(u)).sort((g,h)=>g.localeCompare(h))},"extractDirectYamlKeys"),f=n(x=>{let w=t(x);if(!w.startsWith("[")||!w.endsWith("]"))return null;let y=w.slice(1,-1).trim();return y?y.split(",").map(u=>t(u)).filter(Boolean).length:0},"countInlineSequenceEntries"),P=n(x=>{let w=t(x);return w.startsWith('"')&&w.endsWith('"')||w.startsWith("'")&&w.endsWith("'")?w.slice(1,-1):w},"cleanYamlScalar"),b=n(x=>{let w=t(x);if(!w.startsWith("[")||!w.endsWith("]"))return null;let y=w.slice(1,-1).trim();return y?y.split(",").map(u=>P(u)).filter(Boolean):[]},"extractInlineSequenceValues"),O=n((x,w)=>{let y=l(x,w);if(!y)return[];if(y.inlineValue)return b(y.inlineValue)||[];let u=[],g=y.indent+2;for(let h of y.blockLines){let A=t(h);o(h)===g&&A.startsWith("- ")&&u.push(P(A.slice(2)))}return u},"extractYamlSequenceValues"),D=n((x,w)=>{let y=s(x),u=`${w}:`;for(let g of y){let h=t(g);if(h.startsWith(u))return P(h.slice(u.length))}return null},"extractTopLevelScalarValue"),N=n((x,w)=>{let y=l(x,w);if(!y)return null;if(y.inlineValue)return f(y.inlineValue);let u=0,g=y.indent+2;for(let h of y.blockLines)t(h)&&o(h)===g&&/^\s*-\s+/.test(h)&&(u+=1);return u},"countYamlSequenceEntries"),G=n(x=>{let w=[];for(let y of s(x)){let u=y.match(/^(#{1,6})\s+(.+?)\s*$/);u?.[2]&&w.push({depth:u[1].length,text:t(u[2])})}return w},"extractMarkdownHeadings"),ee=t(e.workspaceId),W=t(e.canonicalPath),R=r(e.markdown),T=i(R),te=T?c(T.frontmatter):[],z=T?l(T.frontmatter,"flow"):null,le=z?p(z.blockText):[],U=T?l(T.frontmatter,"main_panel_integrations_demo"):null,L=T?l(T.frontmatter,"superagent_harness_demo"):null,Y=L?l(L.blockText,"runtime_surfaces"):null,se=new Set(["kg:subgraphs","clusters","groups","layers"]),be=Array.from(new Set([...te,...le].filter(x=>se.has(x)))).sort((x,w)=>x.localeCompare(w)),ke=G(T?T.body:R);return{workspaceId:ee,canonicalPath:W,markdownLength:R.length,lineCount:R?s(R).length:0,hasFrontmatter:!!T,topLevelKeys:te,frontmatterScalars:T?{kgCanvasRenderMode:D(T.frontmatter,"kgCanvasRenderMode"),kgCanvas2dRenderer:D(T.frontmatter,"kgCanvas2dRenderer"),deployed_api_claim:D(T.frontmatter,"deployed_api_claim")}:{},mainPanelIntegrationsDemo:U?{present:!0,mainPanelEntries:O(U.blockText,"main_panel_entries"),providerIds:O(U.blockText,"provider_ids"),providerLabels:O(U.blockText,"provider_labels"),taskCapabilities:O(U.blockText,"task_capabilities"),taskLevels:O(U.blockText,"task_levels"),integrationOpenTab:D(U.blockText,"integration_open_tab"),canvas2dRenderer:D(U.blockText,"canvas_2d_renderer"),sourceFile:D(U.blockText,"source_file")}:{present:!1},superAgentHarnessDemo:L?{present:!0,taskCapabilities:O(L.blockText,"task_capabilities"),taskLevels:O(L.blockText,"task_levels"),runtimeSurfaces:Y?m(Y.blockText):[]}:{present:!1},hasFlowBlock:!!z,flowKeys:le,flowNodeCount:z?N(z.blockText,"nodes"):null,flowConnectionCount:z?N(z.blockText,"connections")??N(z.blockText,"edges"):null,flowSubgraphCount:z?N(z.blockText,"subgraphs"):null,forbiddenGroupingKeys:be,headingCount:ke.length,headings:ke.map(x=>x.text),bodyLength:t(T?T.body:R).length}},"inspectSharedDocumentStructure");var _r=n(e=>Array.isArray(e)?e.map(_r):!e||typeof e!="object"?e:Object.keys(e).sort((t,r)=>t.localeCompare(r)).reduce((t,r)=>(t[r]=_r(e[r]),t),{}),"normalizeJsonValue"),en=n(e=>JSON.stringify(_r(e)),"stableStringify");function tn(e){let t=e.map(o=>o==null?"":String(o)).join("|"),r=2166136261;for(let o=0;o<t.length;o+=1)r^=t.charCodeAt(o),r=Math.imul(r,16777619);return(r>>>0).toString(16).padStart(8,"0")}n(tn,"hashSemanticParts");var Ns="probe-tree-llm-response/v1",Ot=Object.freeze({generate:"knowgrph.probe.generate",select:"knowgrph.probe.select",evolve:"knowgrph.probe.evolve"}),Ce=Object.freeze({optionCount:3,minOptionCount:2,maxOptionCount:4,recallTopK:5,tokenBudget:1200,optionCompletionTokenEstimate:64,maxDepth:8,appMemoryScope:"knowgrph-probe-tree"}),vd=Object.freeze([{text:"What outcome would make this resolved?",rationale:"Locks the terminal condition before more branching."},{text:"Which constraint matters most right now?",rationale:"Separates blockers from preferences so the next step can narrow quickly."},{text:"What information is still missing?",rationale:"Finds the smallest context gap before handing off to a downstream capability."},{text:"Which path should be ruled out first?",rationale:"Cuts low-value branches before spending more tokens or taps."}]);var rn=Object.freeze({type:"object",additionalProperties:!0,required:["id","text","rationale"],properties:{id:{type:"string"},text:{type:"string"},rationale:{type:"string"}}}),Ar=Object.freeze({type:"object",additionalProperties:!1,required:["model","prompt_tokens","completion_tokens","cache_hits","estimated_cost_usd"],properties:{model:{type:"string"},prompt_tokens:{type:"number"},completion_tokens:{type:"number"},cache_hits:{type:"number"},estimated_cost_usd:{oneOf:[{type:"number"},{type:"null"}]}}}),Od=Object.freeze({type:"object",additionalProperties:!1,required:["thread_root_id","current_node_id"],properties:{thread_root_id:{type:"string",minLength:1},current_node_id:{type:"string",minLength:1},context_text:{type:"string"},k:{type:"integer",minimum:Ce.minOptionCount,maximum:Ce.maxOptionCount,default:Ce.optionCount},recall_top_k:{type:"integer",minimum:0,maximum:20,default:Ce.recallTopK},token_budget:{type:"integer",minimum:1,default:Ce.tokenBudget},probe_tree_depth:{type:"integer",minimum:1,maximum:Ce.maxDepth,default:1},graph_store_dir:{type:"string"}}}),Id=Object.freeze({type:"object",additionalProperties:!1,required:["thread_root_id","parent_node_id","chosen_option"],properties:{thread_root_id:{type:"string",minLength:1},parent_node_id:{type:"string",minLength:1},chosen_option:rn,context_text:{type:"string"},terminal:{type:"boolean",default:!1},graph_store_dir:{type:"string"}}}),Md=Object.freeze({type:"object",additionalProperties:!1,required:["thread_root_id"],properties:{thread_root_id:{type:"string",minLength:1},terminal_node_id:{type:"string"},resolved:{type:"boolean",default:!0},rating:{type:"number",minimum:0,maximum:1},allow_partial_path:{type:"boolean",default:!1},graph_store_dir:{type:"string"}}}),Nd=Object.freeze({type:"object",additionalProperties:!0,required:["contractVersion","ok","options","response","cost_log"],properties:{contractVersion:{type:"string"},ok:{type:"boolean"},options:{type:"array",minItems:Ce.minOptionCount,maxItems:Ce.maxOptionCount,items:rn},response:{type:"object",additionalProperties:!1,required:["structuredContent"],properties:{structuredContent:{type:"object",additionalProperties:!0,required:["contractVersion","widgets","cards","panels","edges"],properties:{contractVersion:{const:Ns},widgets:{type:"array",minItems:1,maxItems:1,items:{type:"object",additionalProperties:!0}},cards:{type:"array",minItems:Ce.minOptionCount,maxItems:Ce.maxOptionCount,items:{type:"object",additionalProperties:!0}},panels:{type:"array",minItems:1,maxItems:1,items:{type:"object",additionalProperties:!0}},edges:{type:"array",items:{type:"object",additionalProperties:!0}}}}}},degraded:{type:"boolean"},recalled_exemplars:{type:"array",items:{type:"object",additionalProperties:!0}},token_budget:{type:"object",additionalProperties:!0},cost_log:Ar}}),Ud=Object.freeze({type:"object",additionalProperties:!0,required:["contractVersion","ok","new_node_id","edge_id","node_path","cost_log"],properties:{contractVersion:{type:"string"},ok:{type:"boolean"},new_node_id:{type:"string"},edge_id:{type:"string"},node_path:{type:"string"},checkpoint:{type:"object",additionalProperties:!0},cost_log:Ar}}),Ld=Object.freeze({type:"object",additionalProperties:!0,required:["contractVersion","ok","updated_scores","exemplar_id","cost_log"],properties:{contractVersion:{type:"string"},ok:{type:"boolean"},updated_scores:{type:"array",items:{type:"object",additionalProperties:!0}},exemplar_id:{type:"string"},complete_path_scored:{type:"boolean"},unscored_parent_node_ids:{type:"array",items:{type:"string"}},cost_log:Ar}});var on="knowgrph.os.status",M=Object.freeze({search:d.search,fetch:d.fetch,uiLaunch:"knowgrph.ui.launch",uiStop:"knowgrph.ui.stop",pipeline:"knowgrph.pipeline",graphragPipeline:"knowgrph.graphrag_pipeline",superagentRun:"knowgrph.superagent.run",videoRemixRun:"knowgrph.video_remix.run",browserApiRun:"knowgrph.browser_api.run",sealionDetectLanguageVariant:"sealion.detect_language_variant",sealionTranslateLocalize:"sealion.translate_localize",sealionSafetyCheck:"sealion.safety_check",htmlVideoRender:"knowgrph.html_video.render",annotateImage:"knowgrph.annotate.image",annotateVideoFrame:"knowgrph.annotate.video_frame",memoryAdd:"knowgrph.memory.add",memorySearch:"knowgrph.memory.search",memoryAssemblePrompt:"knowgrph.memory.assemble_prompt",memoryExtractProcedural:"knowgrph.memory.extract_procedural",memoryMaterializeUserModel:"knowgrph.memory.materialize_user_model",probeGenerate:Ot.generate,probeSelect:Ot.select,probeEvolve:Ot.evolve,smeSourceNormalize:"knowgrph.sme.source.normalize",smeTriggerEvaluate:"knowgrph.sme.trigger.evaluate",smeBrokerDraftNudge:"knowgrph.sme.broker.draft_nudge",smeMarketplaceMatch:"knowgrph.sme.marketplace.match",smeMultilingualAdapt:"knowgrph.sme.multilingual.adapt",smeCareAgentStatus:"sme_care_agent_status",agenticCanvasOsDocsInvoke:"knowgrph.agentic_canvas_os.docs.invoke",showrunnerStartRun:"knowgrph.showrunner.start_run",showrunnerRunStatus:"knowgrph.showrunner.run_status",showrunnerPostChoice:"knowgrph.showrunner.post_choice",showrunnerSubmitCritique:"knowgrph.showrunner.submit_critique",showrunnerApproveStage:"knowgrph.showrunner.approve_stage",showrunnerGetArtifact:"knowgrph.showrunner.get_artifact",sandboxPolicyValidate:"knowgrph.sandbox.policy.validate",sandboxPolicyAuthorize:"knowgrph.sandbox.policy.authorize",osStatus:on,vdeoxplnList:"knowgrph.vdeoxpln.list"}),nn=n(()=>Object.values(M),"buildKnowgrphLocalMcpToolNameList");var sn="knowgrph-vdeoxpln/v0.1";var ye=Object.freeze({sourceFiles:"knowgrph-source-files",agentReady:"knowgrph-agent-ready",localMcp:"knowgrph-mcp-local",chatToCanvas:"knowgrph-chat-to-canvas",strybldr:"knowgrph-strybldr",researchVisual:"knowgrph-research-visual",memoryLayer:"knowgrph-memory-layer",aiShowrunner:"knowgrph-ai-showrunner",htmlVideoRenderer:"knowgrph-html-video-renderer",videoAgent:"knowgrph-video-agent",visualAnnotationEngine:"knowgrph-visual-annotation-engine",commerceReadiness:"knowgrph-commerce-readiness"}),Pr=n(e=>String(e||"").trim(),"normalizeString"),we=n(e=>Array.from(new Set((Array.isArray(e)?e:[]).map(Pr).filter(Boolean))).sort((t,r)=>t.localeCompare(r)),"normalizeStringArray"),an=n(e=>{let t=new Set,r=[];for(let o of Array.isArray(e)?e:[]){let a=Pr(o);!a||t.has(a)||(t.add(a),r.push(a))}return r},"normalizeOrderedStringArray"),Us=en,Ls=n((e,t)=>{let r=Pr(e)||"vdeoxpln";return`kgvx_${tn([r,sn,Us(t)])}`},"buildKnowgrphVdeoxplnSemanticKey");var $s=Object.freeze([{id:ye.sourceFiles,title:"Knowgrph Source Files",purpose:"Discover, read, inspect, and route published Source Files and shared documents through the canonical storage and document-structure owners.",scope:"read-only-published",mutation:"read-only",triggers:["source files","published documents","shared document","read markdown","inspect document structure"],inputs:["workspace document","published markdown","share token","share URL","canonical path"],outputs:["source-files index","published markdown","document structure report"],owners:["canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/sourceFilesSignatures.ts","canvas/src/features/agent-ready/publishedToolExecutors.mjs","canvas/src/features/agent-ready/sharedDocumentStructureInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs"],tools:{published:[d.listSourceFiles,d.readSourceFile,d.readSharedDocument,d.inspectSharedDocumentStructure],browserLocal:[d.inspectLocalSourceFilesSnapshot],local:[M.search,M.fetch,M.vdeoxplnList]},workflow:["Resolve source identity from storage, share token, or canonical path.","Fetch through published storage/document executors.","Inspect structure with the shared document-structure owner.","Return read-only artifacts without graph mutation."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return source-read or structure errors without model calls."},artifactPolicy:{persistence:"published-read-only",graphMaterialization:"none",semanticKeyInputs:["workspaceId","canonicalPath","shareToken","toolContract"]},validation:["agent-ready:check","pages:check-sync","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","webmcp-html-fallback"]},{id:ye.agentReady,title:"Knowgrph Agent Ready",purpose:"Inspect Knowgrph health, MCP, WebMCP, A2A, OpenAPI, commerce, and browser-local readiness without claiming deployed mutation.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["agent-ready","webmcp","mcp health","openapi","a2a","discovery","readiness"],inputs:["agent-ready base URL","browser runtime state","published metadata"],outputs:["agent surface inspection","browser-local readiness snapshot","metadata report"],owners:["canvas/src/features/agent-ready/knowgrphAgentReadyToolContract.mjs","canvas/src/features/agent-ready/webMcpRuntime.ts","canvas/src/features/agent-ready/agentSurfaceInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs","scripts/check-agent-ready.mjs"],tools:{published:[d.inspectAgentSurface],browserLocal:[d.inspectLocalSettingsChatReadiness,d.inspectLocalMainPanelState,d.inspectLocalEditorWorkspaceState,d.inspectLocalChatPipelineState,d.inspectLocalMainPanelChatCanvasPipeline,d.inspectLocalWorkspaceDocument,d.inspectLocalCanvasTopology,d.inspectLocalCanvasSnapshot,d.inspectLocal3dCameraPose,d.inspectLocal3dLayoutPositions,d.inspectLocal2dZoomViewport,d.inspectLocalSourceFilesSnapshot],local:[M.vdeoxplnList]},workflow:["Inspect published agent-ready metadata.","Inspect browser-local state only when running inside the app runtime.","Report scope boundaries between Pages read-only tools and browser-local inspectors."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return metadata inspection errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["toolContracts","metadataRoutes","browserLocalToolNames"]},validation:["agent-ready:check","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","browser-webmcp"]},{id:ye.localMcp,title:"Knowgrph Local MCP",purpose:"Expose Knowgrph-owned local Source Files, Agentic Canvas OS docs invocation, UI, pipeline, SuperAgent, video-remix, browser bridge, SEA-LION, HTML video, visual annotation, memory, probe-tree, showrunner, OS status, and vdeoxpln tools through the stdio MCP server.",scope:"local-stdio",mutation:"local-confirmed",triggers:["local mcp","agentic canvas os docs","/","#","@","launch canvas","run pipeline","graphrag","superagent","video remix","browser api","sealion sidecar","html video","visual annotation","memory layer","probe tree","showrunner","os status","list vdeoxpln"],inputs:["local root","agentic canvas os invocation token","workspace file","graph data","pipeline config","reference URL","source cards","browser API runtime","Southeast Asian language text","render spec","annotation asset","memory scope","probe branch","creative brief"],outputs:["local tool result","Agentic Canvas OS docs invocation result","pipeline artifact","superagent report","video remix run manifest","SEA-LION sidecar result","render manifest","annotation result","memory result","probe checkpoint","showrunner artifact","OS status snapshot","vdeoxpln registry snapshot"],owners:["mcp/local-tool-contract.js","mcp/server.js","mcp/agentic-canvas-os-docs-runtime.js","mcp/director-lanes.js","mcp/director-workflow.js","mcp/video-remix-runtime.js","mcp/README.md","knowgrph_parser/superagent_harness.py","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:nn()},workflow:["List local tools from the shared local MCP contract.","Run only path-guarded local-root operations.","Run video-remix orchestration as an approval-gated local manifest before any paid provider call.","Resolve Agentic Canvas OS /, #, and @ docs invocations from the sibling docs SSOT.","Forward SEA-LION regional language, localization, and safety calls to the hosted sidecar with server-owned auth.","Summarize artifacts and registry metadata in the MCP result."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"tool-owned",fallback:"Return local command failure and detected artifacts."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"tool-owned",semanticKeyInputs:["localToolNames","rootScope","artifactList"]},validation:["vdeoxpln:check","mcpLocalToolContract"],publish:["local-mcp-docs"]},{id:ye.chatToCanvas,title:"Knowgrph Chat To Canvas",purpose:"Route AI-assisted graph generation through FloatingPanel Chat, KGC validation, Workspace FS, Source Files, and Canvas apply owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["chat to canvas","generate graph","kgc markdown","flow.subgraphs","apply to canvas"],inputs:["chat request","workspace context","selection context","source evidence","model settings"],outputs:["validated KGC Markdown","workspace artifact","GraphData","canvas topology snapshot"],owners:["canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitRequest.ts","canvas/src/features/chat/chatMarkdownValidation.ts","canvas/src/features/chat/chatKgcCanvasApply.ts","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/lib/graph/semanticKey.ts"],tools:{published:[],browserLocal:[d.inspectLocalChatPipelineState,d.inspectLocalMainPanelChatCanvasPipeline,d.inspectLocalWorkspaceDocument,d.inspectLocalCanvasTopology,d.inspectLocalCanvasSnapshot],local:[M.vdeoxplnList]},workflow:["Vdeoxpln context through the shared chat submit request owner.","Call provider transport only after typed request construction.","Validate KGC Markdown with bounded retries.","Persist through Workspace FS and apply through the existing Canvas path."],aiPolicy:{mode:"required-for-generation",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Persist validation or provider failure as reviewable chat/workspace state."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["chatContextScope","workspacePath","graphSemanticKey","sourceLayerHash"]},validation:["chatResponseContract","sourceFiles","vdeoxpln:check"],publish:["browser-webmcp","mainpanel-mcp"]},{id:ye.strybldr,title:"Knowgrph Strybldr",purpose:"Turn image or media source units into editable Storyboard cards and bounded media handoff artifacts through Strybldr and shared renderer owners.",scope:"browser-local-source-backed",mutation:"browser-local-user-mediated",triggers:["strybldr","storyboard","image to storyboard","media handoff","visual brief"],inputs:["image source unit","media metadata","workspace document","storyboard graph"],outputs:["Strybldr Markdown","Storyboard graph cards","camera-aware media handoff prompt","canvas snapshot"],owners:["canvas/src/features/strybldr/strybldrStoryboard.ts","canvas/src/features/strybldr","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-strybldr-prd-tad.md"],tools:{published:[],browserLocal:[d.inspectLocalSourceFilesSnapshot,d.inspectLocalCanvasTopology,d.inspectLocalCanvasSnapshot],local:[M.vdeoxplnList]},workflow:["Import media through existing workspace/source owners.","Build Strybldr cards with source-unit provenance.","Persist Camera reframe settings on selected graph cards.","Render through the shared Storyboard surface.","Compile bounded media handoff only after user approval."],aiPolicy:{mode:"optional-for-refinement",maxAttempts:1,tokenBudget:"user-approved-provider-step",fallback:"Keep editable storyboard and structured handoff error."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"storyboard-graph",semanticKeyInputs:["sourceUnitId","strybldrRunId","graphSemanticKey","strybldrCamera"]},validation:["strybldr","rendererPipelineNeutrality","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:ye.researchVisual,title:"Knowgrph Research Visual",purpose:"Create file-backed research visual workflows from source material using Knowgrph parsing, Source Files, Storyboard, renderer, and chat owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["research visual","explainer","formula","algorithm","proof","dynamic scene","storyboard"],inputs:["paper excerpt","formula","algorithm","figure","workspace document","source evidence"],outputs:["mechanism brief","storyboard","renderer-neutral scene plan","validated KGC Markdown"],owners:["canvas/src/features/parsers/default.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-vdeoxpln-prd-tad.md"],tools:{published:[],browserLocal:[d.inspectLocalChatPipelineState,d.inspectLocalSourceFilesSnapshot,d.inspectLocalCanvasTopology],local:[M.vdeoxplnList]},workflow:["Extract source-backed semantic units into workspace artifacts.","Plan exact deterministic graph/storyboard layers before optional AI support.","Persist artifacts through Workspace FS and Source Files.","Use Canvas/Storyboard renderers as projections of graph state."],aiPolicy:{mode:"optional-for-drafting",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Return deterministic source brief with unresolved questions."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["sourceSignature","graphSemanticKey","rendererId"]},validation:["sourceFiles","chatResponseContract","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:ye.memoryLayer,title:"Knowgrph Memory Layer",purpose:"Persist, retrieve, inject, extract, and materialize explicitly scoped agent memories through a provider-neutral local harness with source-owned Markdown outputs.",scope:"local-stdio-and-browser-local",mutation:"local-scoped-memory",triggers:["memory layer","long-term memory","cross-session context","mem0","personalization","prompt memory","procedural memory","harness replay","user model","profile markdown"],inputs:["user or agent message","runtime scope","memory query","harness output dir"],outputs:["memory write result","ranked memory results","bounded prompt context","memory cost log","procedural KGC markdown","USER_MODEL markdown"],owners:["canvas/src/features/memory/aiAgentsMemoryLayerContract.mjs","mcp/memory-layer-runtime.js","mcp/local-tool-contract.js","mcp/server.js","docs/documents/knowgrph-ai-agents-memory-layer-prd-tad.md"],tools:{published:[],browserLocal:[],local:[M.memoryAdd,M.memorySearch,M.memoryAssemblePrompt,M.memoryExtractProcedural,M.memoryMaterializeUserModel,M.vdeoxplnList]},workflow:["Require explicit runtime scope.","Add/search through the configured harness.","Inject only top-ranked memories within token budget.","Extract completed harness runs into reusable KGC procedural-memory documents.","Materialize scoped memories into deterministic USER_MODEL markdown when a source-owned profile is needed."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"memory-harness-owned",fallback:"Return empty memory results or skip write while preserving the agent turn."},artifactPolicy:{persistence:"operator-configured-local-memory-store",graphMaterialization:"none",semanticKeyInputs:["memoryScope","operation","topK","providerMode"]},validation:["vdeoxpln:check","mcpLocalToolContract","aiAgentsMemoryLayer"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:ye.aiShowrunner,title:"Knowgrph AI Showrunner",purpose:"Run provider-neutral multi-agent creative pipelines for podcasts, narrative games, and writers rooms through existing Source Files, memory, MCP, KGC, and Storyboard Widget owners.",scope:"local-stdio-and-browser-local",mutation:"local-approval-gated",triggers:["ai showrunner","podcast pipeline","narrative game","writers room","creative state","multi-agent orchestration"],inputs:["creative brief markdown","run id","choice signal","critique text","operator approval"],outputs:["pipeline run state","creative state entries","script","choice graph","revision history","artifact manifest"],owners:["canvas/src/features/ai-showrunner","canvas/src/features/chat/chatKgcCanvasApply.ts","canvas/src/features/source-files","canvas/src/features/memory/aiAgentsMemoryLayerContract.mjs","canvas/src/lib/graph/semanticKey.ts","mcp/local-tool-contract.js"],tools:{published:[],browserLocal:[],local:[M.showrunnerStartRun,M.showrunnerRunStatus,M.showrunnerPostChoice,M.showrunnerSubmitCritique,M.showrunnerApproveStage,M.showrunnerGetArtifact,M.vdeoxplnList]},workflow:["Validate the frontmatter-first Creative_Brief before any agent turn.","Run bounded role turns through dry-run or injected provider-neutral dispatch.","Persist append-only state, token logs, and manifests through Source Files."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"pipeline-run-owned",fallback:"Halt at approval or structured error while preserving committed Creative_State."},artifactPolicy:{persistence:"source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["run_id","agent_role","turn_index","content_hash"]},validation:["vdeoxpln:check","mcpLocalToolContract","showrunnerDryRun"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:ye.htmlVideoRenderer,title:"Knowgrph HTML Video Renderer",purpose:"Render HTML, CSS, and data documents to MP4 video artifacts through a runtime-selected pluggable engine and the existing rich media output owner.",scope:"local-stdio-and-browser-local",mutation:"local-approval-gated",triggers:["html video render","html to video","programmatic video","render html mp4","coding agent video"],inputs:["html document","css","data json","render spec","engine hint"],outputs:["mp4 video blob","render manifest","artifact path","render job id"],owners:["canvas/src/features/html-video-renderer/htmlVideoRendererSsot.ts","canvas/src/features/html-video-renderer/htmlVideoRenderJob.ts","canvas/src/features/html-video-renderer/htmlVideoEngineRegistry.ts","canvas/src/features/html-video-renderer/htmlVideoRendererSpec.ts","canvas/src/features/html-video-renderer/htmlVideoFlowNode.ts","canvas/src/features/html-video-renderer/htmlVideoWidget.ts","canvas/src/features/chat/richMediaRun.ts","canvas/src/features/source-files","canvas/src/lib/config.storyboard-widget.ts","canvas/src/lib/graph/semanticKey.ts","mcp/local-tool-contract.js","mcp/server.js","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[M.htmlVideoRender,M.vdeoxplnList]},workflow:["Validate the Render_Spec before any engine call.","Resolve active engine from KNOWGRPH_HTML_VIDEO_ENGINE or engineHint at invocation time.","Execute the render engine and capture the video/mp4 blob.","Route the blob through writeRichMediaWidgetRunOutputArtifact exactly once.","Return renderJobId, outputPath, outputManifestPath, and outputStorageUrl."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return structured error without model call."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"rich-media-panel",semanticKeyInputs:["renderJobId","engineId","renderSpecHash","outputPath"]},validation:["vdeoxpln:check","mcpLocalToolContract","htmlVideoRenderer"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:ye.videoAgent,title:"Knowgrph Video Agent",purpose:"Reason over operator-supplied video sources through native knowgrph ingestion, parsing, annotation, dataset operations, zone counting, search planning, edit planning, timeline compilation, generation placeholders, and streamable rich-media output.",scope:"browser-local-and-local-stdio",mutation:"local-approval-gated",triggers:["video agent","video reasoning","video search","video editing","video compilation","video generation","stream video result","visual dataset","zone counting"],inputs:["operator-supplied video url","source manifest","annotation tasks","search intent","edit constraints","render spec"],outputs:["source manifest","visual annotation dataset","zone counting timeline","moment search index","edit plan","timeline manifest","render spec","reasoning artifact manifest","video/mp4 artifact","inline stream preview"],owners:["canvas/src/features/video-agent","canvas/src/features/video-agent/videoAgentDatasetRuntime.ts","canvas/src/features/html-video-renderer/htmlVideoRendererSsot.ts","canvas/src/features/html-video-renderer/htmlVideoFlowNode.ts","canvas/src/features/visual-annotation-engine/annotationDataset.ts","canvas/src/features/visual-annotation-engine/annotationFlowNode.ts","canvas/src/features/visual-annotation-engine/annotationSerializers.ts","canvas/src/features/chat/richMediaRun.ts","canvas/src/features/source-files","canvas/src/lib/graph/semanticKey.ts","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[M.htmlVideoRender,M.annotateImage,M.annotateVideoFrame,M.vdeoxplnList]},workflow:["Ingest an operator-supplied video source without embedding a provider runtime dependency.","Parse source metadata, frame annotations, transcript windows, and searchable moments through existing source and annotation owners.","Load frame annotations into native visual dataset operators for deterministic split, merge, save, and frame-ordered zone counting.","Plan search, edit, compilation, and generation stages as typed reasoning artifacts rather than copied external code.","Compile a source-owned HTML/CSS/data Render_Spec for the selected timeline.","Stream a video/mp4 artifact or outputSrcDoc preview through the shared Rich Media Panel output owner."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"operator-configured",fallback:"Return structured source, annotation, dataset, zone counting, or render errors without invoking external video-agent services."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"rich-media-panel",semanticKeyInputs:["sourceUrl","capabilities","reasoningArtifacts","visualDataset","zoneCounting","renderSpecHash","streamOutput"]},validation:["vdeoxpln:check","mcpLocalToolContract","htmlVideoRenderer","visualAnnotationEngine","visualAnnotationDataset","videoAgentPipeline"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:ye.visualAnnotationEngine,title:"Knowgrph Visual Annotation Engine",purpose:"Run browser-local image and video-frame annotation into LLM-ready structured JSON plus native visual datasets materialised through existing artifact owners.",scope:"browser-local",mutation:"local-approval-gated",triggers:["annotate image","annotate video","visual annotation","object detection","image caption","florence2","semantic labels","llm-ready annotation","annotation dataset","zone counting"],inputs:["image url","video asset url","annotation tasks","model hint","frame timestamp"],outputs:["annotation result json","visual annotation dataset","zone counting timeline","llm-ready payload","annotation canvas node","markdown summary"],owners:["canvas/src/features/visual-annotation-engine/annotationEngineSsot.ts","canvas/src/features/visual-annotation-engine/annotationDataset.ts","canvas/src/features/visual-annotation-engine/annotationWorker.ts","canvas/src/features/visual-annotation-engine/annotationOrchestrator.ts","canvas/src/features/visual-annotation-engine/annotationSerializers.ts","canvas/src/features/visual-annotation-engine/annotationFlowNode.ts","canvas/src/features/visual-annotation-engine/annotationMcpTools.ts","canvas/src/features/visual-annotation-engine/annotationWidget.ts","canvas/src/features/chat/richMediaRun.ts","canvas/src/features/source-files","canvas/src/lib/graph/semanticKey.ts","canvas/src/lib/config.storyboard-widget.ts","mcp/local-tool-contract.js","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[M.annotateImage,M.annotateVideoFrame,M.vdeoxplnList]},workflow:["Validate the Annotation_Spec before model resolution or inference.","Resolve model identifier from modelHint, KNOWGRPH_ANNOTATION_MODEL, or the registered default.","Dispatch through the Annotation_Worker boundary; Dev emits dependency-free heuristic annotations while model adapters remain runtime-owned.","Build annotationId with buildScopedGraphSemanticKey using assetUrl, modelId, and sorted tasks.","Load Annotation_Result or frame-box arrays into the native dataset owner for split, merge, save, and frame-ordered zone counting.","Route JSON output through writeRichMediaWidgetRunOutputArtifact exactly once.","Return annotationId, assetUrl, modelId, tasks, outputPath, and outputManifestPath."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return runtime-local heuristic annotation JSON or a structured validation/runtime error without model call."},artifactPolicy:{persistence:"browser-local",graphMaterialization:"annotation-canvas-node",semanticKeyInputs:["annotationId","assetUrl","modelId","sortedTasks","visualDataset","zoneCounting"]},validation:["vdeoxpln:check","mcpLocalToolContract","visualAnnotationEngine","visualAnnotationDataset"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:ye.commerceReadiness,title:"Knowgrph Commerce Readiness",purpose:"Inspect Commerce, payment worker, x402, ACP, UCP, MPP, and readiness metadata without bypassing the shared payment SSOT.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["commerce","payment","x402","acp","ucp","mpp","stripe","readiness"],inputs:["agent-ready metadata","commerce route health","browser readiness snapshot"],outputs:["commerce readiness report","payment route summary","agent-ready commerce metadata"],owners:["canvas/src/features/panels/views/CommerceHubView.tsx","canvas/src/features/agent-ready/browserLocalSurfaceSnapshots.ts","cloudflare/pages/knowgrph-agent-ready-commerce.mjs","cloudflare/workers/knowgrph-payment/agenticCommerce.ts","grph-shared/src/payments/agenticCommerceSsot.ts"],tools:{published:[d.inspectAgentSurface],browserLocal:[d.inspectLocalSettingsChatReadiness,d.inspectLocalMainPanelState],local:[M.vdeoxplnList]},workflow:["Inspect published commerce discovery metadata.","Read browser-local readiness snapshots when available.","Report payment capability boundaries without initiating checkout."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return route or metadata errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["commerceSemanticKey","routeHealth","toolContract"]},validation:["agent-ready:check","mainPanelCommerce","vdeoxpln:check"],publish:["pages-agent-skills","mainpanel-mcp","browser-webmcp"]}]),Ds=n(e=>{let t={published:we(e.tools?.published),browserLocal:we(e.tools?.browserLocal),local:we(e.tools?.local)},r=Ls(e.id,{id:e.id,scope:e.scope,mutation:e.mutation,owners:we(e.owners),tools:t,triggers:we(e.triggers),outputs:we(e.outputs),workflow:an(e.workflow),artifactPolicy:e.artifactPolicy||{},aiPolicy:e.aiPolicy||{}}),o=`/.well-known/agent-skills/${e.id}.md`;return Object.freeze({...e,version:sn,triggers:we(e.triggers),inputs:we(e.inputs),outputs:we(e.outputs),owners:we(e.owners),tools:Object.freeze(t),workflow:an(e.workflow),validation:we(e.validation),publish:we(e.publish),semanticKey:r,agentSkill:Object.freeze({name:e.id,type:"markdown",description:e.purpose,path:o})})},"normalizeVdeoxpln"),cn=n(()=>$s.map(Ds).sort((e,t)=>e.id.localeCompare(t.id)),"buildKnowgrphVdeoxplnRegistry");var ln=n((e=cn())=>e.map(t=>({...t.agentSkill,vdeoxpln:{id:t.id,title:t.title,scope:t.scope,mutation:t.mutation,semanticKey:t.semanticKey,tools:t.tools,publish:t.publish}})),"buildKnowgrphVdeoxplnAgentSkillDefinitions"),Te=n(e=>e&&e.length?e.map(t=>`- ${t}`).join(`
`):"- none","markdownList"),js=n(e=>`# ${e.title} Skill

Use this skill when: ${e.purpose}

## Contract

- Vdeoxpln id: \`${e.id}\`
- Contract version: \`${e.version}\`
- Semantic key: \`${e.semanticKey}\`
- Scope: \`${e.scope}\`
- Mutation boundary: \`${e.mutation}\`

## Triggers

${Te(e.triggers)}

## Inputs

${Te(e.inputs)}

## Outputs

${Te(e.outputs)}

## Tools

Published tools:
${Te(e.tools.published)}

Browser-local tools:
${Te(e.tools.browserLocal)}

Local MCP tools:
${Te(e.tools.local)}

## Workflow

${Te(e.workflow)}

## Source Owners

${Te(e.owners)}

## Artifact Policy

- Persistence: \`${e.artifactPolicy?.persistence||"none"}\`
- Graph materialization: \`${e.artifactPolicy?.graphMaterialization||"none"}\`
- Semantic-key inputs:
${Te(e.artifactPolicy?.semanticKeyInputs||[])}

## AI Policy

- Mode: \`${e.aiPolicy?.mode||"none"}\`
- Max attempts: \`${String(e.aiPolicy?.maxAttempts??0)}\`
- Token budget: \`${String(e.aiPolicy?.tokenBudget??0)}\`
- Fallback: ${e.aiPolicy?.fallback||"Return deterministic errors without model calls."}

## Validation

${Te(e.validation)}

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
`,"buildKnowgrphVdeoxplnMarkdown"),pn=n((e=cn())=>Object.fromEntries(e.map(t=>[t.id,js(t)])),"buildKnowgrphVdeoxplnMarkdownByName");var dn=n(({appUrl:e,rootUrl:t,storageSourceFilesUrl:r,storageLlmsUrl:o,storageManifestUrl:a,agentCardUrl:s,updatedAt:i})=>`<?xml version="1.0" encoding="UTF-8"?>
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
`,"buildRootLlmsTxt"),Hs=new Map([["/knowgrph/openapi.json","/knowgrph/.well-known/openapi.json"],["/knowgrph/api-catalog.json","/knowgrph/.well-known/api-catalog"]]),mn=n(e=>Hs.get(e)||"","resolveMachineRouteRedirect"),Ks={[d.search]:{id:"search",tags:["mcp","search","source-files","read-only"],examples:["Search Knowgrph Source Files for renderer architecture."],outputModes:["application/json"]},[d.fetch]:{id:"fetch",tags:["mcp","fetch","source-files","markdown","read-only"],examples:["Fetch the Knowgrph Source File id returned by search."],outputModes:["text/markdown","application/json"]},[d.listSourceFiles]:{id:"list-source-files",tags:["mcp","discovery","source-files","read-only"],examples:["List the published Knowgrph Source Files."],outputModes:["text/markdown","application/json"]},[d.readSourceFile]:{id:"read-source-file",tags:["mcp","read","markdown","workspace"],examples:["Read the published source file for docs/getting-started.md."],outputModes:["text/markdown","application/json"]},[d.readSharedDocument]:{id:"read-shared-document",tags:["mcp","read","shared-document","markdown"],examples:["Read the Knowgrph shared document behind this share URL."],outputModes:["text/markdown","application/json"]},[d.inspectSharedDocumentStructure]:{id:"inspect-shared-document-structure",tags:["mcp","inspect","shared-document","structure"],examples:["Inspect the structure of this Knowgrph shared document."],outputModes:["application/json","text/markdown"]},[d.inspectAgentSurface]:{id:"inspect-agent-surface",tags:["mcp","agent-ready","discovery","metadata"],examples:["Show the Knowgrph agent discovery metadata."],outputModes:["application/json","text/markdown"]}},dt=ln(),hn=n(e=>e.map(t=>{let r=Ks[t.name]||{id:String(t.name||"").replace(/_/g,"-"),tags:["mcp","read-only"],examples:[`Call ${t.name} on Knowgrph.`],outputModes:["application/json"]};return{id:r.id,name:t.title,description:t.description,tags:r.tags,examples:r.examples,inputModes:["application/json","text/plain"],outputModes:r.outputModes}}),"buildAgentReadyA2aSkills"),gn=n(async({appUrl:e,updatedAt:t,sha256ByName:r})=>({$schema:"https://agent-skills.dev/schemas/skills-index.v0.2.json",updated_at:t,skills:await Promise.all(dt.map(async o=>({name:o.name,type:o.type,description:o.description,url:`${String(e||"").replace(/\/+$/,"")}${o.path}`,sha256:await r[o.name],vdeoxpln:o.vdeoxpln})))}),"buildAgentReadyAgentSkillsIndex"),fn=n(({appBasePath:e,appA2aAgentCardPath:t,healthPath:r})=>{let o=Object.fromEntries(dt.map(a=>[`${e}${a.path}`,{get:{summary:`Read the ${a.name} agent skill markdown`,responses:{200:{description:`Agent skill markdown for ${a.name}`}}}}]));return{[r]:{get:{summary:"Read the Knowgrph agent-ready health status",responses:{200:{description:"Health status in application/health+json format"}}}},[`${e}/mcp`]:{get:{summary:"Read MCP transport metadata",responses:{200:{description:"MCP transport metadata"}}},post:{summary:"Send a JSON-RPC MCP request",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0}}}},responses:{200:{description:"JSON-RPC result payload"}}}},[t]:{get:{summary:"Read the Knowgrph A2A Agent Card",responses:{200:{description:"A2A Agent Card JSON"}}}},"/api/storage/llms.txt":{get:{summary:"Read the Source Files LLM index",responses:{200:{description:"Plain-text LLM index"}}}},"/api/storage/content-manifest.json":{get:{summary:"Read the Markdown-first published content manifest",responses:{200:{description:"Editor Workspace source paths with canonical HTML and Markdown projections"}}}},"/api/storage/source-files":{get:{summary:"List published Source Files",responses:{200:{description:"Source Files index"}}}},"/api/storage/source-files/{workspaceId}":{get:{summary:"List published Source Files for a workspace",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped Source Files index"}}}},"/api/storage/source-files/{workspaceId}/llms.txt":{get:{summary:"Read the workspace-scoped Source Files LLM index",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped plain-text LLM index"}}}},"/api/storage/doc-default/{canonicalPath}":{get:{summary:"Read a default-workspace Source File markdown document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document from the default Editor Workspace"},404:{description:"Document not found"}}}},"/api/storage/doc/{workspaceId}/{canonicalPath}":{get:{summary:"Read a Source File markdown document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document"},404:{description:"Document not found"}}}},"/api/storage/blob/{workspaceId}/{canonicalPath}":{post:{summary:"Store a workspace binary artifact in R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],requestBody:{required:!0,content:{"application/octet-stream":{schema:{type:"string",format:"binary"}}}},responses:{200:{description:"R2 object coordinates and public storage route"},400:{description:"Invalid workspace, path, or declared payload size"}}},get:{summary:"Read a workspace binary artifact from R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Binary artifact body with stored HTTP metadata"},404:{description:"Object not found"}}},head:{summary:"Read workspace binary artifact metadata from R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Binary artifact metadata"},404:{description:"Object not found"}}}},[`${e}/doc-default/{canonicalPath}`]:{get:{summary:"Read a default-workspace shared document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/doc/{workspaceId}/{canonicalPath}`]:{get:{summary:"Read a shared document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/share/{shareToken}`]:{get:{summary:"Read a shared document through the canonical opaque share token route",parameters:[{name:"shareToken",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or published markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},...o}},"buildAgentReadyOpenApiPaths");var Bs=n((e,t)=>{let r=new URL(e.url);return r.pathname=`${t}/`,r.search="",r.hash="",new Request(r.toString(),e)},"buildKnowgrphAppShellAssetRequest"),yn=n(async(e,t)=>{let r=Bs(e.request,t);return typeof e.env?.ASSETS?.fetch=="function"?e.env.ASSETS.fetch(r):e.next(r)},"fetchKnowgrphAppShellAsset");var zs="kgShare",uu=typeof TextEncoder<"u"?new TextEncoder:null,wn=typeof TextDecoder<"u"?new TextDecoder:null;var Fs=n(e=>{if(typeof Buffer<"u")return Uint8Array.from(Buffer.from(e,"base64"));let t=atob(e),r=new Uint8Array(t.length);for(let o=0;o<t.length;o+=1)r[o]=t.charCodeAt(o);return r},"fromBase64");var Gs=n(e=>{let t=String(e||"").replace(/-/g,"+").replace(/_/g,"/");if(!t)return"";let r=t.length%4;return r?`${t}${"=".repeat(4-r)}`:t},"fromBase64Url");var Ws=n(e=>{if(!wn)throw new Error("TextDecoder is required to decode published doc share tokens");return wn.decode(Fs(Gs(e)))},"decodeUtf8Base64Url"),An=n(e=>String(e||"").trim()||null,"normalizeWorkspaceId"),Rr=n(e=>String(e||"").trim(),"normalizeCanonicalPath"),xr="/knowgrph",bn="/doc-default/",Sn="/doc/",_n="/share/",qs="kgWorkspaceId",Vs="kgCanonicalPath",Ys=n(e=>{let t=String(e||"").trim();return t?`/${t.replace(/^\/+|\/+$/g,"")}`:xr},"normalizeAppBasePath"),kr=n(e=>{let t=Rr(e?.canonicalPath);return t?{canonicalPath:t,workspaceId:An(e?.workspaceId)}:null},"normalizePublishedDocIdentity"),Pn=n((e,t)=>{let r=Ys(t),o=String(e||"").replace(/\/+$/,"")||"/";if(!o.startsWith(r))return null;let a=o.slice(r.length)||"/";if(a.startsWith(_n)){let c=decodeURIComponent(a.slice(_n.length)).trim();return Er(c)}if(a.startsWith(bn))return kr({canonicalPath:decodeURIComponent(a.slice(bn.length))});if(!a.startsWith(Sn))return null;let s=a.slice(Sn.length),i=s.indexOf("/");return i<1?null:kr({workspaceId:decodeURIComponent(s.slice(0,i)),canonicalPath:decodeURIComponent(s.slice(i+1))})},"parsePublishedDocPathname"),Xs=n(e=>{let t=Er(e?.get(zs));if(t)return t;let r=Rr(decodeURIComponent(String(e?.get(Vs)||"")));if(r)return kr({workspaceId:decodeURIComponent(String(e?.get(qs)||"")),canonicalPath:r});let o=String(e?.get("kgPath")||"").trim();return o?Pn(`${xr}${o}`,xr):null},"parsePublishedDocSearchParams");var Er=n(e=>{let t=String(e||"").trim();if(!t)return null;try{let r=JSON.parse(Ws(t)),o=Rr(r?.canonicalPath);return o?{canonicalPath:o,workspaceId:An(r?.workspaceId)}:null}catch{return null}},"decodePublishedDocShareToken"),It=n((e={})=>{let t=Er(e.shareToken);if(t)return t;let r=String(e.shareUrl||"").trim();if(!r)return null;try{let o=String(e.baseUrl||"https://airvio.co").trim()||"https://airvio.co",a=new URL(r,o);return Xs(a.searchParams)||Pn(a.pathname,e.appBasePath)}catch{return null}},"resolvePublishedDocIdentity"),xn=String.raw`(args = {}) => {
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
}`;var B="https://airvio.co",Nt="https://knowgrph-storage.huijoohwee.workers.dev",C="/knowgrph",k=`${B}${C}/`,Mt=`${B}/`,ut="kgws:canonical-docs",qe="2026-06-05",nt=`${C}/health`,ot=`${B}${nt}`,kn="/.well-known/agent-card.json",Cr=`${C}/.well-known/agent-card.json`,mt=`${B}${kn}`,Tr="/api/storage/source-files",Js=`${Tr}/`,Rn="/api/storage/doc-default/",En="/api/storage/doc/",Ut=`${B}${Tr}`,Qs=`${B}${Rn}{canonicalPath}`,Zs=`${B}${En}{workspaceId}/{canonicalPath}`,ei=`${B}/api/storage/blob/{workspaceId}/{canonicalPath}`,Cn="knowgrph-agent-ready-pages";var Tn=n((e,t)=>`${En}${encodeURIComponent(String(e||"").trim())}/${encodeURIComponent(String(t||"").trim())}`,"buildKnowgrphStorageDocPath"),vn=n(e=>`${Rn}${encodeURIComponent(String(e||"").trim())}`,"buildKnowgrphStorageDefaultDocPath"),On=n(e=>{let t=String(e||"").trim();return t?`${Js}${encodeURIComponent(t)}`:Tr},"buildKnowgrphStorageSourceFilesIndexPath"),In=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${C}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${C}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${nt}>; rel="status"; type="application/health+json"`,`<${C}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${kn}>; rel="describedby"; type="application/json"`].join(", "),Mn=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${k}.

## Discovery

- Crawl policy: ${k}robots.txt
- Sitemap: ${k}sitemap.xml
- API catalog: ${k}.well-known/api-catalog
- Auth.md registration instructions: ${Mt}auth.md
- Health: ${ot}
- MCP server card: ${k}.well-known/mcp/server-card.json
- A2A Agent Card: ${mt}
- Agent skills: ${k}.well-known/agent-skills/index.json
- LLM reference: ${k}llms.txt
- Live Canvas Hero discovery markdown: ${Mt}knowgrph-live-canvas-hero.md

## APIs

- Agent-ready status: ${ot}
- HTTP MCP: ${k}mcp
- Storage API: ${B}/api/storage/
- Source Files index: ${Ut}
- Default Source File documents: ${Qs}
- Workspace Source File documents: ${Zs}
- Workspace binary artifacts: ${ei}

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
`,Nn=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),ht=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(r=>r.trim().startsWith("text/markdown")),"wantsMarkdown"),Un=n((e,t)=>{let r=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&r.headers.set("x-knowgrph-route-owner",o),a&&r.headers.set("x-knowgrph-route-tag",a),r},"withAgentReadyRouteHeaders");var $t=br({defaultWorkspaceId:ut}),Bn=Oo(),zn=Uo(),ti=`${B}/api/storage/llms.txt`,ri=`${B}/api/storage/content-manifest.json`,Fn=n((e,t="")=>{let r=String(e||"").trim(),o=String(t||"").trim();return o?Tn(o,r):vn(r)},"buildStorageDocPath"),yt=n(e=>String(e||"").trim(),"normalizeToolString");var Pe=n((e,t="application/json; charset=utf-8")=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"jsonResponse"),he=n((e,t)=>new Response(JSON.stringify(t,null,2),{status:e,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"jsonStatusResponse"),Ln=n((e,t={})=>new Response(null,{status:e,headers:{"cache-control":"no-store","access-control-allow-origin":"*",...t}}),"emptyStatusResponse"),gt=n((e,t)=>new Response(e,{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"textResponse"),oi=n(e=>gt(e,"text/html;profile=mcp-app; charset=utf-8"),"mcpAppsHtmlResponse"),ni=n(e=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":"application/health+json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"healthResponse"),ai=`${C}/api/workspace/github/write`,si="/api/workspace/github/write",$n=12,Dn=9e5,ii=new Set(["css","html","js","json","md","mdx","mjs","svg","ts","tsx","txt","yaml","yml"]),vr=n((e,t)=>String(e?.[t]||"").trim(),"readEnvString"),ci=n(e=>{let t=vr(e,"KNOWGRPH_GITHUB_WRITE_REPOSITORY"),r=vr(e,"KNOWGRPH_GITHUB_WRITE_TOKEN"),o=vr(e,"KNOWGRPH_GITHUB_WRITE_BRANCH"),a=[];t||a.push("KNOWGRPH_GITHUB_WRITE_REPOSITORY"),r||a.push("KNOWGRPH_GITHUB_WRITE_TOKEN");let s=t.split("/").map(i=>i.trim()).filter(Boolean);return t&&s.length!==2&&a.push("KNOWGRPH_GITHUB_WRITE_REPOSITORY:owner/repo"),a.length>0?{ok:!1,missing:a}:{ok:!0,owner:s[0],repo:s[1],branch:o,token:r}},"readGitHubWriteConfig"),li=n(e=>{let t=String(e||"").trim().replace(/^workspace:/i,"").replace(/\\/g,"/").replace(/^\/+/,"");if(!t)return{ok:!1,error:"missing_workspace_path"};if(/[\u0000-\u001f\u007f]/.test(t))return{ok:!1,error:"invalid_workspace_path"};let r=t.split("/").filter(Boolean);if(r.some(s=>s==="."||s===".."))return{ok:!1,error:"path_traversal_forbidden"};if(r[0]!=="chat-log")return{ok:!1,error:"unsupported_workspace_root"};if(r.length<3)return{ok:!1,error:"chat_log_session_file_required"};let o=r[r.length-1]||"",a=o.includes(".")?o.split(".").pop().toLowerCase():"";return!a||!ii.has(a)?{ok:!1,error:"unsupported_text_extension"}:{ok:!0,path:r.join("/")}},"normalizeGitHubWriteWorkspacePath"),pi=n(e=>{let t=new TextEncoder().encode(String(e||"")),r=32768,o="";for(let a=0;a<t.length;a+=r)o+=String.fromCharCode(...t.slice(a,a+r));return btoa(o)},"encodeBase64Utf8"),at=class extends Error{static{n(this,"GitHubWorkspaceWriteError")}constructor(t,r,o){super(t),this.name="GitHubWorkspaceWriteError",this.code=t,this.upstreamStatus=r,this.upstreamMessage=o}},Gn=n(e=>String(e||"unknown").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim().slice(0,240),"sanitizeGitHubApiMessage"),Wn=n((e,t)=>{let r=String(t||"").split("/").map(a=>encodeURIComponent(a)).join("/"),o=new URL(`https://api.github.com/repos/${encodeURIComponent(e.owner)}/${encodeURIComponent(e.repo)}/contents/${r}`);return e.branch&&o.searchParams.set("ref",e.branch),o},"buildGitHubContentsApiUrl"),qn=n(e=>({accept:"application/vnd.github+json",authorization:`Bearer ${e.token}`,"user-agent":"knowgrph-cloudflare-pages","x-github-api-version":"2022-11-28"}),"gitHubApiHeaders"),Vn=n(e=>{let t=String(e||"").replace(/\/+$/,"")||"/";return t===ai||t===si},"isGitHubWorkspaceWriteRoutePath"),di=n(async(e,t)=>{let r=await fetch(Wn(e,t),{method:"GET",headers:qn(e)});if(r.status===404)return null;let o=await r.json().catch(()=>null);if(!r.ok)throw new at("github_read_failed",r.status,Gn(o?.message||r.statusText));if(o?.type&&o.type!=="file")throw new at("github_path_not_file",409,t);return String(o?.sha||"").trim()||null},"fetchGitHubExistingFileSha"),ui=n(async(e,t,r)=>{let o=await di(e,t.repositoryPath),a={message:r,content:pi(t.text),...e.branch?{branch:e.branch}:{},...o?{sha:o}:{}},s=await fetch(Wn(e,t.repositoryPath),{method:"PUT",headers:{...qn(e),"content-type":"application/json; charset=utf-8"},body:JSON.stringify(a)}),i=await s.json().catch(()=>null);if(!s.ok)throw new at("github_write_failed",s.status,Gn(i?.message||s.statusText));return{workspacePath:t.workspacePath,repositoryPath:t.repositoryPath,action:o?"updated":"created",commitSha:String(i?.commit?.sha||""),contentSha:String(i?.content?.sha||""),htmlUrl:String(i?.content?.html_url||"")}},"putGitHubWorkspaceFile"),mi=n(async(e,t)=>{let r=ci(t);if(!r.ok)return he(503,{ok:!1,status:"skipped",error:"github_write_not_configured",missing:r.missing});let o=await e.json().catch(()=>null),a=Array.isArray(o?.files)?o.files:[];if(a.length<1)return he(400,{ok:!1,status:"failed",error:"files_required"});if(a.length>$n)return he(413,{ok:!1,status:"failed",error:"too_many_files",maxFiles:$n});let s=[],i=new Set;for(let p of a){let m=li(p?.workspacePath||p?.path);if(!m.ok)return he(400,{ok:!1,status:"failed",error:m.error,workspacePath:String(p?.workspacePath||p?.path||"")});if(i.has(m.path))continue;i.add(m.path);let f=String(p?.text??"");if(new TextEncoder().encode(f).length>Dn)return he(413,{ok:!1,status:"failed",error:"file_too_large",workspacePath:`/${m.path}`,maxTextBytes:Dn});s.push({workspacePath:`/${m.path}`,repositoryPath:m.path,text:f})}if(s.length<1)return he(400,{ok:!1,status:"failed",error:"files_required"});let c=String(o?.message||"").trim(),l=c&&c.length<=160?c:`Knowgrph chat artifact ${s[0].repositoryPath}`;if(o?.dryRun===!0)return he(200,{ok:!0,status:"dry_run",repository:`${r.owner}/${r.repo}`,branch:r.branch||null,files:s.map(p=>({workspacePath:p.workspacePath,repositoryPath:p.repositoryPath,textBytes:new TextEncoder().encode(p.text).length}))});try{let p=[];for(let m of s)p.push(await ui(r,m,l));return he(200,{ok:!0,status:"applied",repository:`${r.owner}/${r.repo}`,branch:r.branch||null,files:p})}catch(p){let m=p instanceof at;return he(m?424:500,{ok:!1,status:"failed",error:m?p.code:p instanceof Error?p.message:String(p||"github_write_failed"),...m?{upstreamStatus:p.upstreamStatus,upstreamMessage:p.upstreamMessage}:{}})}},"handleGitHubWorkspaceWrite"),hi=n(e=>`User-agent: *
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
`,"buildRobotsTxt"),gi=hi(`${k}sitemap.xml`),Yn={appUrl:k,rootUrl:Mt,storageSourceFilesUrl:Ut,storageLlmsUrl:ti,storageManifestUrl:ri,agentCardUrl:mt,updatedAt:qe},fi=dn(Yn),Du=un(Yn),Xn={linkset:[{anchor:k,"service-desc":[{href:`${k}.well-known/openapi.json`,type:"application/vnd.oai.openapi+json;version=3.1"}],"service-doc":[{href:`${k}llms.txt`,type:"text/plain"}],status:[{href:ot,type:"application/health+json"}],"service-meta":[{href:`${k}.well-known/mcp/server-card.json`,type:"application/json"},{href:mt,type:"application/json"}]}]},Jn={openapi:"3.1.0",info:{title:"Knowgrph API",version:"0.1.0",description:"Agent discovery surface for the Knowgrph Cloudflare deployment."},servers:[{url:B,description:"Knowgrph Cloudflare deployment"}],paths:fn({appBasePath:C,appA2aAgentCardPath:Cr,healthPath:nt})},ft={resource:k,resource_name:"Knowgrph",authorization_servers:[B],scopes_supported:["knowgrph:read","knowgrph:source-files:read"],bearer_methods_supported:["header"],resource_documentation:`${k}llms.txt`},Or=`${B}/cdn-cgi/access`,Ue={skill:`${B}/auth.md`,register_uri:`${k}agent/auth`,claim_uri:`${k}agent/auth/claim`,revocation_uri:`${k}agent/auth/revoke`,identity_types_supported:["anonymous","identity_assertion"],anonymous:{credential_types_supported:["api_key"]},identity_assertion:{assertion_types_supported:["urn:ietf:params:oauth:token-type:id-jag","verified_email"],credential_types_supported:["access_token","api_key"]},events_supported:["https://schemas.workos.com/events/agent/auth/identity/assertion/revoked"],registration_status:"metadata_published_runtime_user_mediated"},jn={issuer:B,resource:ft.resource,resource_name:ft.resource_name,authorization_servers:ft.authorization_servers,cloudflare_access_issuer:Or,authorization_endpoint:`${Or}/login`,token_endpoint:`${Or}/token`,jwks_uri:`${k}.well-known/http-message-signatures-directory`,response_types_supported:["code"],grant_types_supported:["authorization_code","client_credentials"],token_endpoint_auth_methods_supported:["client_secret_basic","private_key_jwt"],scopes_supported:ft.scopes_supported,agent_auth:Ue},yi=`# Knowgrph auth.md

Knowgrph publishes agent registration metadata for the read-only agent surface at ${k}. Agents should first fetch ${B}/.well-known/oauth-protected-resource, follow its authorization_servers entry to ${B}/.well-known/oauth-authorization-server, and read the agent_auth block.

## Registration

- Register: ${Ue.register_uri}
- Claim: ${Ue.claim_uri}
- Revoke: ${Ue.revocation_uri}
- Supported identity types: ${Ue.identity_types_supported.join(", ")}
- Anonymous credentials: ${Ue.anonymous.credential_types_supported.join(", ")}
- Identity assertion types: ${Ue.identity_assertion.assertion_types_supported.join(", ")}
- Identity assertion credentials: ${Ue.identity_assertion.credential_types_supported.join(", ")}
- Revocation events: ${Ue.events_supported.join(", ")}
- Current runtime policy: user-mediated access through the existing Cloudflare Access/OAuth boundary; no separate MCP-only auth stack.
- Pipeline rule: agents must not bypass MainPanel -> FloatingPanel Chat -> KGC -> Canvas for user-mediated graph work; published HTTP MCP tools remain read-only until mutation auth and conflict semantics are implemented.`,Qn={name:"Knowgrph Agent",description:"Agent-readable discovery, published-document retrieval, and WebMCP-ready metadata surface for Knowgrph.",version:"0.1.0",provider:{organization:"airvio / joohwee",url:k},url:`${k}mcp`,preferredTransport:"JSONRPC",supportedInterfaces:[{url:`${k}mcp`,protocolBinding:"JSONRPC",transportProtocol:"JSONRPC",description:"Primary machine interface for read-only discovery and source-file document access."},{url:Ut,protocolBinding:"HTTP+JSON/REST",transportProtocol:"HTTP+JSON/REST",description:"Published source-files index and storage-backed document read surface."}],capabilities:{streaming:!1,pushNotifications:!1,stateTransitionHistory:!1,extendedAgentCard:!1},defaultInputModes:["text/plain","text/markdown","application/json"],defaultOutputModes:["text/plain","text/markdown","application/json"],skills:hn($t)},ve={serverInfo:{name:"knowgrph",version:"0.1.0"},transport:{type:Me,url:`${k}mcp`,stateless:!0},capabilities:{tools:$t.map(e=>({name:e.name,title:e.title,description:e.description,inputSchema:e.inputSchema,outputSchema:e.outputSchema,securitySchemes:e.securitySchemes,annotations:e.annotations,_meta:e._meta})),resources:{listChanged:!1},prompts:{listChanged:!1},...hr()},prompts:Bn,resourceTemplates:zn,clientSetups:fr({baseUrl:k,mcpUrl:`${k}mcp`,serverName:"knowgrph"}),surfaceRoles:{publicReadMcpUrl:`${k}mcp`,publicReadMcpScope:"Canonical public install and discovery endpoint for read-only retrieval, prompt discovery, resource discovery, and inspection.",controlPlaneMcpUrl:`${k}control-plane/mcp`,controlPlaneMcpScope:"Approval-gated orchestration endpoint for control-plane tools, remote Agentic Canvas OS docs invocation, and spend-bearing workflows where deployed.",hostedGrammarDefaultPath:"app-owned-forwarder",hostedGrammarDefaultScope:"Hosted app builders should keep /mcp for discovery and route live /, #, @ through an app-owned forwarder unless the host proves MCP session support.",remoteGrammarInvokePublic:!0,remoteGrammarInvokeToolName:"knowgrph.agentic_canvas_os.docs.invoke",remoteGrammarInvokeStatus:"live-control-plane"},links:{apiCatalog:`${k}.well-known/api-catalog`,skills:`${k}.well-known/agent-skills/index.json`,status:ot,agentCard:mt,controlPlaneMcp:`${k}control-plane/mcp`}},wi=vt({appUrl:k,updatedAt:qe}),Mr=$t.map(e=>({name:e.webName,title:e.title,description:e.description,inputSchema:e.inputSchema,outputSchema:e.outputSchema,securitySchemes:e.securitySchemes,annotations:e.annotations,_meta:e._meta})),Ve=n(e=>yt($t.find(t=>t.name===e)?.webName),"findWebMcpToolName"),bi=Ve(d.search),Si=Ve(d.fetch),_i=Ve(d.listSourceFiles),Ai=Ve(d.readSourceFile),Pi=Ve(d.readSharedDocument),xi=Ve(d.inspectSharedDocumentStructure),ki=Ve(d.inspectAgentSurface),Ri=`(() => {
  const root = globalThis;
  const siteOrigin = ${JSON.stringify(B)};
  const appBasePath = ${JSON.stringify(C)};
  const defaultWorkspaceId = ${JSON.stringify(ut)};
  const toolDefinitions = ${JSON.stringify(Mr)};
  const toolNames = ${JSON.stringify(Mr.map(e=>e.name))};
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
  const createPublishedDocIdentityResolver = ${xn};
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
  const createPublishedAgentReadyToolExecutors = ${Qo};
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
      search: ${JSON.stringify(bi)},
      fetch: ${JSON.stringify(Si)},
      listSourceFiles: ${JSON.stringify(_i)},
      readSourceFile: ${JSON.stringify(Ai)},
      readSharedDocument: ${JSON.stringify(Pi)},
      inspectSharedDocumentStructure: ${JSON.stringify(xi)},
      inspectAgentSurface: ${JSON.stringify(ki)},
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
})();`,Ei=n(async e=>{if(!(e.headers.get("content-type")||"").toLowerCase().includes("text/html"))return e;let r=await e.text();if(Mr.every(i=>r.includes(i.name)))return new Response(r,e);let o=`<script>${Ri}<\/script>`,a=r.includes("</head>")?r.replace("</head>",`${o}</head>`):`${r}${o}`,s=new Response(a,e);return s.headers.delete("content-length"),s},"injectWebMcpScript"),Ci={search:d.search,fetch:d.fetch,listSourceFiles:d.listSourceFiles,readSourceFile:d.readSourceFile,readSharedDocument:d.readSharedDocument,inspectSharedDocumentStructure:d.inspectSharedDocumentStructure,inspectAgentSurface:d.inspectAgentSurface},Ti=n(async e=>{let t=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(r)].map(o=>o.toString(16).padStart(2,"0")).join("")},"sha256Hex"),Zn=pn(),vi=Object.fromEntries(dt.map(e=>[e.name,Ti(Zn[e.name]||"")])),Hn=new Map(dt.map(e=>[`${C}${e.path}`.replace(/\/+$/,""),Zn[e.name]||""]));var ea=n(async()=>gn({appUrl:k,updatedAt:qe,sha256ByName:vi}),"agentSkillsIndex"),Oi={keys:[{kty:"OKP",crv:"Ed25519",kid:"knowgrph-agent-ready-2026-05-21",use:"sig",alg:"EdDSA",x:"11qYAYdkVKxA4G0wV47IxPtYfFVH_H7zmC2Di2PcvLU"}]},Ii={protocolVersion:"2025-06-18",capabilities:{tools:{},resources:{},prompts:{listChanged:!1},...hr()},serverInfo:ve.serverInfo},Nr=ve.capabilities.tools,Mi=[wi],Ni=Bn,Ui=zn,ta=n(()=>({status:"pass",service:"knowgrph-agent-ready-pages",homepage:k,health:ot,updatedAt:qe,checks:{linkHeaders:!0,markdownNegotiation:!0,httpMcp:!0,webMcp:!0,mcpApps:!0,commerce:{acp:!0,ucp:!0,mpp:!0,x402:!0},defaultWorkspaceId:ut}}),"buildHealthStatusBody"),Li=n(async()=>Jo({baseUrl:k,health:ta(),apiCatalog:Xn,openApi:Jn,mcpServerCard:ve,agentCard:Qn,agentSkills:await ea(),commerce:or({origin:B})}),"buildAgentSurfaceInspection"),$i=Sr({toolNames:Ci,defaultWorkspaceId:ut,publicBaseUrl:B,buildStorageDocPath:Fn,fetchSourceFilesIndexResponse:n(()=>fetch(`${Nt}${On()}`,{headers:{accept:"text/markdown"}}),"fetchSourceFilesIndexResponse"),fetchStorageMarkdownResponse:n(e=>fetch(`${Nt}${e}`,{headers:{accept:"text/markdown"}}),"fetchStorageMarkdownResponse"),resolveSharedDocumentInput:n((e={})=>It({shareToken:e?.shareToken,shareUrl:e?.shareUrl,appBasePath:C,baseUrl:B}),"resolveSharedDocumentInput"),inspectSharedDocumentStructure:Zo,buildAgentSurfaceInspection:Li}),Ur=n(e=>{try{let t=new URL(e,B);return It({shareUrl:`${t.pathname}${t.search}`,baseUrl:B,appBasePath:C})}catch{return null}},"resolvePublishedDocRequestIdentity"),Di=n(e=>It({shareUrl:String(e||""),baseUrl:B,appBasePath:C}),"resolvePublishedDocPathIdentity"),ji=n(async(e,t)=>{let r=new URL(Fn(t.canonicalPath,t.workspaceId),Nt),o=await fetch(r,{method:"GET",headers:{accept:"text/markdown, text/plain;q=0.9, */*;q=0.1"}}),a=new Headers(o.headers),s=String(a.get("vary")||"");return a.set("vary",s?`${s}, Accept`:"Accept"),new Response(String(e.method||"").toUpperCase()==="HEAD"?null:o.body,{status:o.status,statusText:o.statusText,headers:a})},"proxyPublishedDocMarkdownResponse"),Hi=n(async e=>{try{let t=await e.json();return t&&typeof t=="object"?t:null}catch{return null}},"readJsonRpcRequest"),Ne=n((e,t)=>he(200,{jsonrpc:"2.0",id:e??null,result:t}),"jsonRpcResult"),He=n((e,t,r)=>he(200,{jsonrpc:"2.0",id:e??null,error:{code:t,message:r}}),"jsonRpcError"),Ki=n(e=>String(e.headers.get("accept")||"").toLowerCase().split(",").some(t=>t.trim().startsWith("text/event-stream")),"requestAcceptsEventStream"),Ir=n((e,t)=>Object.prototype.hasOwnProperty.call(e,t),"hasOwnProperty"),ra=n(e=>{if(Array.isArray(e))return e.length>0&&e.every(ra);if(!e||typeof e!="object"||String(e.jsonrpc||"")!=="2.0")return!1;let t=typeof e.method=="string"&&e.method.length>0,r=Ir(e,"id"),o=Ir(e,"result")||Ir(e,"error");return t&&!r||!t&&o},"isJsonRpcNotificationOrResponse"),oa=n(async(e,t)=>{let r=$i[e];if(typeof r!="function")throw new Error(`unknown tool: ${e}`);return r(t)},"executeMcpTool"),Bi=n(async e=>{let t=yt(e);if(t===me)return yr({appUrl:k,updatedAt:qe,toolNames:Nr.map(o=>o.name)});let r=Lo(t);if(r){let o=await oa(d.fetch,{id:r});return $o({uri:t,sourceFile:o})}throw new Error(`unknown resource: ${e}`)},"readMcpResource"),zi=n(async e=>{let t=String(e.method||"GET").toUpperCase();if(t==="GET"||t==="HEAD")return Ki(e)?Ln(405,{allow:"POST"}):Pe({ok:!0,transport:ve.transport,serverInfo:ve.serverInfo,capabilities:ve.capabilities,links:ve.links,surfaceRoles:ve.surfaceRoles});if(t!=="POST")return he(405,{ok:!1,error:"unsupported_method"});let r=await Hi(e);if(!r)return He(null,-32700,"Parse error");if(ra(r))return Ln(202);if(Array.isArray(r))return He(null,-32600,"Batch JSON-RPC requests are not supported");switch(r.method){case"initialize":return Ne(r.id,Ii);case"tools/list":return Ne(r.id,{tools:Nr});case"prompts/list":return Ne(r.id,{prompts:Ni});case"resources/templates/list":return Ne(r.id,{resourceTemplates:Ui});case"prompts/get":{let o=yt(r.params?.name),a=r.params?.arguments&&typeof r.params.arguments=="object"?r.params.arguments:{};if(!o)return He(r.id,-32602,"Prompt name is required");try{return Ne(r.id,Io(o,a))}catch(s){return He(r.id,-32602,s instanceof Error?s.message:String(s))}}case"resources/list":return Ne(r.id,{resources:Mi});case"resources/read":{let o=yt(r.params?.uri);if(!o)return He(r.id,-32602,"Resource URI is required");try{return Ne(r.id,await Bi(o))}catch(a){return He(r.id,-32602,a instanceof Error?a.message:String(a))}}case"tools/call":{let o=yt(r.params?.name),a=r.params?.arguments&&typeof r.params.arguments=="object"?r.params.arguments:{};if(!o)return He(r.id,-32602,"Tool name is required");try{let s=await oa(o,a);return Ne(r.id,{content:[{type:"text",text:typeof s?.markdown=="string"?s.markdown:JSON.stringify(s,null,2)}],structuredContent:s,isError:!1})}catch(s){return Ne(r.id,{content:[{type:"text",text:s instanceof Error?s.message:String(s)}],isError:!0})}}default:return He(r.id,-32601,"Method not found")}},"handleMcpTransport"),Fi=n(()=>yr({appUrl:k,updatedAt:qe,toolNames:Nr.map(e=>e.name)}).contents[0].text,"buildKnowgrphMcpAppHtmlBody");var Dt=n(e=>e===C||e===`${C}/`,"handlesKnowgrphRoot"),Gi=n(e=>Dt(e)||!!Di(e),"handlesKnowgrphHtmlSurface"),Wi=n(e=>e.startsWith(`${C}/assets/`),"handlesKnowgrphStaticAsset"),qi=n(async e=>{let t=new Headers(e.request.headers);t.delete("origin");let r=new Request(e.request.url,{method:e.request.method,headers:t});return typeof e.env?.ASSETS?.fetch=="function"?e.env.ASSETS.fetch(r):e.next(r)},"fetchKnowgrphStaticAsset"),Vi=n(e=>{let t=new URL(e.url),r=t.pathname.replace(/\/+$/,"")||"/",o=Ur(e.url);return r===nt?"health":r===`${C}/mcp`?"mcp":Vn(r)?"github-workspace-write":r===`${C}/robots.txt`?"robots":r===`${C}/sitemap.xml`?"sitemap":r===`${C}/auth.md`||r==="/auth.md"?"auth-md":r.startsWith(`${C}/.well-known/`)?"well-known":o?ht(e)?"shared-doc-markdown":"shared-doc-html":Dt(t.pathname)?ht(e)?"homepage-markdown":"homepage-html":"app-surface"},"resolveAgentReadyRouteTag"),Lt=n((e,t)=>Un(t,{owner:Cn,tag:Vi(e)}),"withKnowgrphRouteHeaders"),Kn=n(async e=>{let t=new URL(e.url),r=t.pathname.replace(/\/+$/,"")||"/",o=Ur(e.url),a=mn(r);if(a)return Response.redirect(new URL(a,e.url),308);if(o&&ht(e))return ji(e,o);if(Dt(t.pathname)&&ht(e))return Nn(Mn);switch(r){case nt:return ni(ta());case`${C}/mcp`:return zi(e);case`${C}/robots.txt`:return gt(gi,"text/plain; charset=utf-8");case`${C}/sitemap.xml`:return gt(fi,"application/xml; charset=utf-8");case`${C}/auth.md`:case"/auth.md":return gt(yi,"text/markdown; charset=utf-8");case`${C}/.well-known/api-catalog`:return Pe(Xn,"application/linkset+json; charset=utf-8");case`${C}/.well-known/openapi.json`:return Pe(Jn,"application/vnd.oai.openapi+json; charset=utf-8");case Cr:return Pe(Qn);case`${C}/.well-known/oauth-protected-resource`:return Pe(ft);case`${C}/.well-known/oauth-authorization-server`:return Pe(jn);case`${C}/.well-known/openid-configuration`:return Pe(jn);case`${C}/.well-known/mcp/server-card.json`:return Pe(ve);case`${C}/.well-known/mcp/apps/knowgrph-agent-ready.html`:return oi(Fi());case`${C}/.well-known/mcp.json`:return Pe(ve);case`${C}/.well-known/agent-skills/index.json`:return Pe(await ea());case`${C}/.well-known/http-message-signatures-directory`:return Pe(Oi);default:return Hn.has(r)?gt(Hn.get(r),"text/markdown; charset=utf-8"):null}},"routeResponse");async function Ke(e){let{env:t,request:r}=e,o=String(r.method||"GET").toUpperCase(),a=new URL(r.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(o==="POST"&&a.pathname.replace(/\/+$/,"")===`${C}/mcp`)return Lt(r,await Kn(r));if(o==="POST"&&Vn(a.pathname))return Lt(r,await mi(r,t));if(o!=="GET"&&o!=="HEAD")return he(405,{ok:!1,error:"unsupported_method"});if(Wi(a.pathname))return qi(e);let s=await Kn(r);if(s){let m=Lt(r,s);return o==="HEAD"?new Response(null,m):m}let i=Ur(r.url),c=i?await yn(e,C):await e.next();if(!Gi(a.pathname))return c;let l=o==="HEAD"?c:await Ei(c),p=new Response(o==="HEAD"?null:l.body,l);return p.headers.set("link",In),(Dt(a.pathname)||i)&&(p.headers.delete("x-frame-options"),p.headers.delete("content-security-policy-report-only"),p.headers.set("content-security-policy","frame-ancestors *")),Lt(r,p)}n(Ke,"onRequest");async function na(e){return Ke(e)}n(na,"onRequest");async function aa(e){return Ke(e)}n(aa,"onRequest");async function sa(e){return Ke(e)}n(sa,"onRequest");var Yi=Object.freeze(new Set(["","80","443"])),Xi=Object.freeze([".local",".localhost",".internal"]),Ji=Object.freeze(new Set(["localhost"]));function Ye(e){return String(e||"").trim().toLowerCase()}n(Ye,"normalizeHostname");function Qi(e){let t=Ye(e);if(!/^\d{1,3}(\.\d{1,3}){3}$/.test(t))return!1;let r=t.split(".").map(o=>Number(o));return r.length!==4?!1:r.every(o=>Number.isInteger(o)&&o>=0&&o<=255)}n(Qi,"isIpv4Literal");function ia(e){let[t,r,o,a]=e.split(".").map(s=>Number(s));return(t<<24|r<<16|o<<8|a)>>>0}n(ia,"ipv4ToInt");function Zi(e,t,r){if(!Number.isInteger(r)||r<0||r>32)return!1;if(r===0)return!0;let o=4294967295<<32-r>>>0;return(e&o)===(t&o)}n(Zi,"inIpv4Cidr");function ec(e){let t=Ye(e);return!t||!t.includes(":")?!1:/^[0-9a-f:]+$/i.test(t)}n(ec,"isIpv6Literal");function tc(e){let t=Ye(e);return!!(!t||t==="::1"||t==="0:0:0:0:0:0:0:1"||t.startsWith("fc")||t.startsWith("fd")||/^fe[89ab]/i.test(t))}n(tc,"isBlockedIpv6");function rc(e,{blockedExact:t,blockedSuffixes:r}={}){let o=Ye(e);if(!o)return!0;let a=t||Ji;if(a instanceof Set&&a.has(o))return!0;let s=r||Xi;if(Array.isArray(s))for(let i of s){let c=Ye(i);if(c&&(o===c||o.endsWith(c)))return!0}return!1}n(rc,"isBlockedHostname");function oc(e){let t=Ye(e);if(!t)return!0;if(Qi(t)){let r=ia(t),o=[{base:"0.0.0.0",bits:8},{base:"10.0.0.0",bits:8},{base:"127.0.0.0",bits:8},{base:"169.254.0.0",bits:16},{base:"172.16.0.0",bits:12},{base:"192.168.0.0",bits:16},{base:"100.64.0.0",bits:10}];for(let a of o){let s=ia(a.base);if(Zi(r,s,a.bits))return!0}return!1}return ec(t)?tc(t):!1}n(oc,"isBlockedIpLiteral");function jt(e,{allowedPorts:t}={}){let r=String(e||"").trim();if(!r)throw new Error("invalid_url");let o;try{o=new URL(r)}catch{throw new Error("invalid_url")}if(o.protocol!=="http:"&&o.protocol!=="https:")throw new Error("invalid_url");if(o.username||o.password)throw new Error("invalid_url");let a=t||Yi,s=String(o.port||"");if(a instanceof Set&&!a.has(s))throw new Error("port_not_allowed");let i=Ye(o.hostname);if(!i)throw new Error("invalid_url");if(rc(i))throw new Error("blocked_host");if(oc(i))throw new Error("blocked_host");return o}n(jt,"parseAndValidateExternalUrl");function Ht(e){return String(e.headers.get("sec-fetch-site")||"").trim().toLowerCase()==="cross-site"}n(Ht,"shouldRejectCrossSiteFetch");var nc={"content-type":"application/json; charset=utf-8","cache-control":"public, max-age=600"};function Xe(e,t={}){return new Response(JSON.stringify(e),{...t,headers:{...nc,...t.headers||{}}})}n(Xe,"json");function Kt(...e){for(let t of e){if(!t)continue;let r=String(t).trim();if(r)return r}return null}n(Kt,"pickFirst");function ac(e){let t=e.slice(0,8e4),r=t.match(/<title[^>]*>([^<]*)<\/title>/i),o=t.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i),a=t.match(/<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i),s=t.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i),i=t.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i),c=t.match(/<meta[^>]+property=["']og:site_name["'][^>]*content=["']([^"']+)["'][^>]*>/i);return{title:Kt(o?.[1],r?.[1]),description:Kt(a?.[1],s?.[1]),image:Kt(i?.[1]),siteName:Kt(c?.[1])}}n(ac,"extractMeta");async function ca(e){let t=e.request.url,r=new URL(t);if(r.searchParams.get("ping")==="1")return Xe({ok:!0,ping:!0});let o=r.searchParams.get("url")||"";if(Ht(e.request))return Xe({ok:!1,error:"forbidden"},{status:403,headers:{"cache-control":"no-store"}});let a;try{a=jt(o)}catch{return Xe({ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}try{let s=await fetch(a.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkPreview/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),i=s.headers.get("content-type")||"";if(!s.ok)return Xe({ok:!1,error:"fetch_failed",status:s.status,url:a.toString()},{status:200,headers:{"cache-control":"no-store"}});if(!i.includes("text/html"))return Xe({ok:!0,url:a.toString(),domain:a.host,contentType:i,title:null,description:null,image:null,siteName:null});let c=await s.text(),l=ac(c);return Xe({ok:!0,url:a.toString(),domain:a.host,contentType:i,...l})}catch(s){return Xe({ok:!1,error:"exception",message:s?.message||String(s),url:a.toString()},{status:200,headers:{"cache-control":"no-store"}})}}n(ca,"onRequestGet");var la=35e4;function sc(e){let t=e;return t=t.replace(/<script\b[\s\S]*?<\/script>/gi,""),t=t.replace(/<iframe\b[\s\S]*?<\/iframe>/gi,""),t=t.replace(/<object\b[\s\S]*?<\/object>/gi,""),t=t.replace(/<embed\b[\s\S]*?>/gi,""),t=t.replace(/<noscript\b[\s\S]*?<\/noscript>/gi,""),t=t.replace(/\son[a-z]+\s*=\s*"[^"]*"/gi,""),t=t.replace(/\son[a-z]+\s*=\s*'[^']*'/gi,""),t}n(sc,"stripActiveContent");function ic({url:e,title:t,innerHtml:r}){let o=t?String(t).slice(0,140):"Preview",a=String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");return`<!doctype html>
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
</html>`}n(ic,"buildWrapper");async function pa(e){let r=new URL(e.request.url).searchParams.get("url")||"";if(Ht(e.request))return new Response("Forbidden",{status:403,headers:{"cache-control":"no-store"}});let o;try{o=jt(r)}catch(a){let s=a instanceof Error?a.message:"invalid_url";return new Response(s,{status:400,headers:{"cache-control":"no-store"}})}try{let a=await fetch(o.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkProxy/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),s=a.headers.get("content-type")||"";if(!a.ok)return new Response(`Fetch failed (${a.status})`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});if(!s.includes("text/html"))return new Response(`Unsupported content-type: ${s}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public, max-age=600"}});let i=await a.text();i.length>la&&(i=i.slice(0,la));let l=i.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()||o.host;i=sc(i),/<base\s/i.test(i)||(i=i.replace(/<head([^>]*)>/i,`<head$1><base href="${o.origin}/">`));let m=ic({url:o.toString(),title:l,innerHtml:i});return new Response(m,{status:200,headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600","content-security-policy":"default-src 'none'; img-src https: data:; style-src 'unsafe-inline' https:; font-src https: data:; frame-ancestors 'self';"}})}catch(a){return new Response(`Exception: ${a?.message||String(a)}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}})}}n(pa,"onRequestGet");var Lr="api.openai.com",$r="gateway.ai.cloudflare.com",Dr="api.cloudflare.com",Bt="api.miromind.ai",zt="apihub.agnes-ai.com",Ft="ark.ap-southeast.bytepluses.com",jr="ark.eu-west.bytepluses.com",ua=new Set(["localhost","127.0.0.1","0.0.0.0"]),xe=n(e=>String(e||"").trim().toLowerCase(),"normalizeHost"),pe=n((e,t)=>String(e.get(t)||"").trim(),"readHeader"),ma=n(e=>ua.has(xe(e)),"isLocalHost"),da=n(e=>{let t=String(e||"").trim();if(!t)return new Set;let r=new Set;return t.split(",").map(o=>xe(o)).filter(Boolean).forEach(o=>r.add(o)),r},"parseCsvSet"),ha=n((e,{includeOpenAi:t=!1,includeAiGateway:r=!1,includeMiroMind:o=!1,includeAgnes:a=!1,includeBytePlus:s=!1}={})=>{let i=da(e.KNOWGRPH_INTEGRATION_ALLOWED_HOSTS),c=da(e.KNOWGRPH_CHAT_PROXY_ALLOWED_HOSTS),l=i.size?i:c,p=l.size?l:new Set([...ua]);return t&&p.add(Lr),r&&(p.add($r),p.add(Dr)),o&&p.add(Bt),a&&p.add(zt),s&&(p.add(Ft),p.add(jr)),p},"parseAllowedHosts"),ce=n(e=>{let t=pe(e.headers,"origin");if(!t)return{};let r="";try{r=xe(new URL(t).host)}catch{return{}}let o=xe(new URL(e.url).host);return r===o||r.startsWith("localhost:")||r.startsWith("127.0.0.1:")?{"access-control-allow-origin":t,vary:"Origin"}:{}},"corsHeaders"),ge=n((e,t,r)=>new Response(JSON.stringify(t),{status:r,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...ce(e)}}),"jsonResponse");var Gt={"content-type":"application/json; charset=utf-8","cache-control":"no-store"};function wt(e,t,r=200){return new Response(JSON.stringify(t),{status:r,headers:{...Gt,...ce(e)}})}n(wt,"jsonResponse");async function cc(e){let t=new URL("/knowgrph/imports/hackamap/hackamap-graph.json",e.url),r=await fetch(t.toString(),{redirect:"follow"});return r.ok?await r.json():null}n(cc,"fetchHackamapGraphJson");async function Je(e,t){let r=new URL(t,e.url),o=await fetch(r.toString(),{redirect:"follow"});return o.ok?await o.json():null}n(Je,"fetchHackamapJson");async function lc(e){let t=await Je(e,"/knowgrph/imports/hackamap/hackamap_api_graph.json");return wa(t)?t:null}n(lc,"fetchHackamapApiGraphJson");async function pc(e){let t=await Je(e,"/knowgrph/imports/hackamap/hackamap_pipeline.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n(pc,"fetchHackamapPipelineJson");async function fa(e){let t=await Je(e,"/knowgrph/imports/hackamap/hackamap_query_presets.json");return Array.isArray(t)?t.filter(Boolean):[]}n(fa,"fetchHackamapQueryPresetsJson");async function ya(e){let t=await Je(e,"/knowgrph/imports/hackamap/query-outputs/query-runs.manifest.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n(ya,"fetchHackamapQueryRunsManifestJson");function wa(e){return!e||typeof e!="object"||Array.isArray(e)?!1:Array.isArray(e.nodes)&&Array.isArray(e.edges)}n(wa,"isApiGraphPayload");function ba(e,t){let r=String(e&&e.output&&e.output.per_table_prefix||e?.id||t?.preset||"").trim(),o=String(t?.output_suffix||"").trim();return o?`${r}-${o}`:r}n(ba,"buildHackamapTablePrefix");function Hr(e,t){if(!Array.isArray(e))return[];let r=[];for(let o of e){if(!o||typeof o!="object"||Array.isArray(o))continue;let a=String(o[t]||"").trim();a&&r.push(a)}return r}n(Hr,"collectRowIds");async function dc(e,t){let r=await Je(e,t);return Array.isArray(r)?r.length:0}n(dc,"countHackamapQueryRows");async function uc(e,t,r){let o=ba(t,r);if(!o)return{};let a=["events","demos","sources","organizer","team","techstack"],s=await Promise.all(a.map(async i=>[i,await dc(e,`/knowgrph/imports/hackamap/query-outputs/${i}.${o}.query.json`)]));return Object.fromEntries(s.filter(([,i])=>i>0))}n(uc,"readHackamapRunTableCounts");function Kr(e){return Array.isArray(e)?e.map(Kr):!e||typeof e!="object"?e:Object.fromEntries(Object.entries(e).sort(([t],[r])=>String(t).localeCompare(String(r))).map(([t,r])=>[t,Kr(r)]))}n(Kr,"sortObjectKeys");function mc(e){try{return JSON.stringify(Kr(e))}catch{return""}}n(mc,"stableParamSignature");function hc(e){return typeof e=="string"?{value:e,label:e}:{value:e,label:JSON.stringify(e)}}n(hc,"toBuilderOption");function gc(e,t){return e.map(r=>{let o=String(r?.id||"").trim();if(!o)return null;let a=r?.params&&typeof r.params=="object"&&!Array.isArray(r.params)?r.params:{},s=t.filter(l=>String(l?.preset||"").trim()===o),i=Array.from(new Set([...Object.keys(a),...s.flatMap(l=>l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?Object.keys(l.params):[])])).sort((l,p)=>String(l).localeCompare(String(p))),c=Object.fromEntries(i.map(l=>{let p=new Set,m=[],f=[a[l],...s.map(P=>P?.params&&typeof P.params=="object"&&!Array.isArray(P.params)?P.params[l]:void 0)];for(let P of f){if(typeof P>"u")continue;let b=mc(P);!b||p.has(b)||(p.add(b),m.push(hc(P)))}return[l,m]}));return{id:o,title:String(r?.title||o).trim(),params:a,param_keys:i,published_param_options:c}}).filter(Boolean)}n(gc,"buildHackamapPresetRuntimeEntries");async function fc(e){let[t,r,o]=await Promise.all([pc(e),fa(e),ya(e)]),a=t&&typeof t=="object"?t.runtime||{}:{},s=String(a?.query_selection?.default_run_id||"").trim()||"enhanced",i=Array.isArray(o?.runs)?o.runs:[],c=(await Promise.all(i.map(async l=>{let p=String(l?.id||"").trim(),m=String(l?.preset||"").trim();if(!p)return null;let f=r.find(b=>String(b?.id||"").trim()===m),P=await uc(e,f,l);return{id:p,preset:m,title:String(l?.title||l?.id||"").trim(),params:l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?l.params:{},output_suffix:String(l?.output_suffix||"").trim(),is_default:p===s,table_counts:P}}))).filter(l=>l?.id);return{ok:!0,runtime:{...a&&typeof a=="object"?a:{},presets:gc(r,c),runs:c}}}n(fc,"buildHackamapRuntimeMeta");async function yc(e,t){let r=String(t||"").trim();if(!r)return null;let[o,a]=await Promise.all([fa(e),ya(e)]),i=(Array.isArray(a?.runs)?a.runs:[]).find(O=>String(O?.id||"").trim()===r);if(!i)return null;let c=o.find(O=>String(O?.id||"").trim()===String(i?.preset||"").trim()),l=ba(c,i);if(!l)return null;let[p,m]=await Promise.all([Je(e,`/knowgrph/imports/hackamap/query-outputs/events.${l}.query.json`),Je(e,`/knowgrph/imports/hackamap/query-outputs/demos.${l}.query.json`)]),f=new Set(Hr(p,"id")),P=new Set(Hr(m,"id")),b=Hr(m,"event_id");for(let O of b)f.add(O);return{eventIds:f,demoIds:P}}n(yc,"readHackamapQueryRunSelection");function ga(e,t,r){if(!r||!wa(e))return e;if(r.eventIds.size===0&&r.demoIds.size===0)return{...e,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_run_filter_skipped:"no-event-demo-rows"}};let o=new Set;r.eventIds.forEach(c=>o.add(`Event:${c}`)),r.demoIds.forEach(c=>o.add(`Demo:${c}`));let a=Array.isArray(e.nodes)?e.nodes.filter(c=>o.has(String(c?.id||"").trim())):[],s=new Set(a.map(c=>String(c?.id||"").trim()).filter(Boolean)),i=Array.isArray(e.edges)?e.edges.filter(c=>s.has(String(c?.source||"").trim())&&s.has(String(c?.target||"").trim())):[];return{...e,nodes:a,edges:i,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_event_count:r.eventIds.size,selected_demo_count:r.demoIds.size,total_problems:a.filter(c=>String(c?.type||"").trim()==="problem").length,total_solutions:a.filter(c=>String(c?.type||"").trim()==="solution").length}}}n(ga,"filterHackamapApiGraphPayloadByRun");function wc(e){let t=Array.isArray(e?.nodes)?e.nodes:[],r=Array.isArray(e?.links)?e.links:[],o=[],a=new Set;for(let i of t){let c=String(i?.id||"").trim(),l=String(i?.type||"").trim(),p=String(i?.label||"").trim();if(!(!c||!l||!p)){if(l==="Event"){o.push({id:c,type:"problem",label:p,cluster:"Event"}),a.add(c);continue}l==="Demo"&&(o.push({id:c,type:"solution",label:p,cluster:"Demo"}),a.add(c))}}let s=[];for(let i of r){let c=String(i?.source||"").trim(),l=String(i?.target||"").trim(),p=String(i?.type||"").trim();!c||!l||p==="has_demo"&&(!a.has(c)||!a.has(l)||s.push({source:c,target:l,type:"has_demo",strength:.35}))}return{nodes:o,edges:s,meta:{source:"hackamap-graph.json:fallback",total_problems:o.filter(i=>i.type==="problem").length,total_solutions:o.filter(i=>i.type==="solution").length,...e?.content_signature?{content_signature:String(e.content_signature)}:{}}}}n(wc,"toBipartiteApiPayload");async function Sa(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{...ce(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(r!=="GET"&&r!=="HEAD")return wt(t,{ok:!1,error:"unsupported_method"},405);if(String(o.searchParams.get("view")||"").trim().toLowerCase()==="meta"){let m=await fc(t);return r==="HEAD"?new Response(null,{status:200,headers:{...Gt,...ce(t)}}):wt(t,m,200)}let a=String(o.searchParams.get("run")||"").trim(),s=await yc(t,a),i=await lc(t);if(i){let m=ga(i,a,s);return r==="HEAD"?new Response(null,{status:200,headers:{...Gt,...ce(t)}}):wt(t,m,200)}let c=await cc(t);if(!c)return wt(t,{ok:!1,error:"missing_hackamap_graph",hint:"/knowgrph/imports/hackamap/{hackamap_api_graph.json,hackamap-graph.json} not found"},404);let l=wc(c),p=ga(l,a,s);return r==="HEAD"?new Response(null,{status:200,headers:{...Gt,...ce(t)}}):wt(t,p,200)}n(Sa,"onRequest");var bc=!0,_a=600,Aa={"content-type":"application/json; charset=utf-8","cache-control":`public, max-age=${_a}`};function Qe(e,t,r={}){return new Response(JSON.stringify(t),{...r,headers:{...Aa,...r.headers||{},...ce(e)}})}n(Qe,"jsonResponse");function Sc(e){try{let t=new URL(String(e));return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}n(Sc,"isHttpUrl");function bt(e){return String(e||"").trim().toLowerCase()}n(bt,"normalizeHost");function Br(e,{exact:t,suffixes:r}){let o=bt(e);return o?!!(Array.isArray(t)&&t.some(a=>o===bt(a))||Array.isArray(r)&&r.some(a=>o===bt(a)||o.endsWith(`.${bt(a)}`))):!1}n(Br,"isHostMatch");function _c(e){let t=bt(e.hostname),r=e.toString();return Br(t,{suffixes:["linkedin.com"]})?new URL(`https://www.linkedin.com/embeds/oembed.json?url=${encodeURIComponent(r)}`):Br(t,{exact:["twitter.com","x.com"],suffixes:["twitter.com","x.com"]})?new URL(`https://publish.twitter.com/oembed?omit_script=1&url=${encodeURIComponent(r)}`):Br(t,{exact:["reddit.com"],suffixes:["reddit.com"]})?new URL(`https://www.reddit.com/oembed?url=${encodeURIComponent(r)}`):null}n(_c,"buildOembedUpstreamUrl");async function Ac({upstreamUrl:e}){return await fetch(e.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; OEmbedProxy/1.0)",accept:"application/json,text/json;q=0.9,*/*;q=0.1"},redirect:"follow",cf:{cacheTtl:_a,cacheEverything:!0}})}n(Ac,"fetchJsonUpstream");async function Pa(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{...ce(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD"].includes(r))return Qe(t,{ok:!1,error:"unsupported_method"},{status:405});if(o.searchParams.get("ping")==="1")return Qe(t,{ok:!0,ping:!0});if(bc)return Qe(t,{ok:!1,error:"disabled_by_policy"},{status:200,headers:{"cache-control":"no-store"}});let a=o.searchParams.get("url")||"";if(!Sc(a))return Qe(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}});let s;try{s=new URL(a)}catch{return Qe(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}let i=_c(s);if(!i)return Qe(t,{ok:!1,error:"unsupported_provider"},{status:400,headers:{"cache-control":"no-store"}});let c=await Ac({upstreamUrl:i}),l=new Headers(c.headers);l.delete("content-length"),l.set("cache-control",c.ok?Aa["cache-control"]:"no-store");for(let[m,f]of Object.entries(ce(t)))l.set(m,f);if(r==="HEAD")return new Response(null,{status:c.status,headers:l});let p=await c.text();try{JSON.parse(p)}catch{return Qe(t,{ok:!1,error:"invalid_upstream_json",status:c.status},{status:502,headers:{"cache-control":"no-store"}})}return l.set("content-type","application/json; charset=utf-8"),new Response(p,{status:c.status,headers:l})}n(Pa,"onRequest");var xa="/__chat_proxy",Wt="agnes-ai",qt="byteplus-modelark",Vt="miromind",Pc="x-kg-ai-gateway-route",xc="x-kg-ai-gateway-metadata",kc="x-kg-ai-gateway-cache-ttl",Rc=n(e=>{let t=xe(e);return t==="openai"?"openai":t===qt||t==="byteplus"?qt:t===Vt||t==="miromind-api"?Vt:t===Wt||t==="agnes"||t==="agnes-ai-api"?Wt:t},"normalizeProviderId"),Ec=n(e=>xe(e)===zt,"isAgnesHost"),Cc=n(e=>{let t=xe(e);return t===Ft||t===jr},"isBytePlusHost"),Tc=n(e=>xe(e)===Bt,"isMiroMindHost"),vc=n(e=>{let t=xe(e);return t===$r||t===Dr},"isAiGatewayHost"),Oc=n(e=>{let t=String(e||"").trim();return/^dynamic\/[a-z0-9._/-]+$/i.test(t)?t.slice(0,128):""},"sanitizeAiGatewayRoute"),Ic=n(e=>{let t=String(e||"").trim();if(!t)return"";try{let r=JSON.parse(t),o=Object.entries(r||{}).filter(([,a])=>typeof a=="string"||typeof a=="number"||typeof a=="boolean").slice(0,5).map(([a,s])=>[String(a||"").trim().slice(0,64),typeof s=="string"?s.trim().slice(0,160):s]).filter(([a])=>a);return o.length?JSON.stringify(Object.fromEntries(o)):""}catch{return""}},"sanitizeAiGatewayMetadata"),Mc=n(e=>{let t=Number(String(e||"").trim());return Number.isFinite(t)?String(Math.max(1,Math.min(86400,Math.floor(t)))):""},"sanitizeAiGatewayCacheTtl"),Nc=n((e,t,r)=>{let a=`${e.pathname==="/"?"":String(e.pathname||"").replace(/\/+$/g,"")}${t.startsWith("/")?t:`/${t}`}`;return new URL(`${a}${r||""}`,`${e.protocol}//${e.host}`)},"buildUpstreamUrl"),Uc=n(({provider:e,requestedUpstream:t,env:r})=>e==="openai"?t||"https://api.openai.com":e===Vt?t||`https://${Bt}`:e===Wt?t||`https://${zt}`:e===qt?t||String(r.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim()||`https://${Ft}`:t||String(r.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim(),"pickUpstreamBase");async function ka(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=new URL(t.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":pe(t.headers,"origin")||"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD","POST"].includes(o))return ge(t,{ok:!1,error:"Unsupported method"},405);let s=Rc(pe(t.headers,"x-kg-chat-provider")),i=Oc(pe(t.headers,Pc)),c=Ic(pe(t.headers,xc)),l=Mc(pe(t.headers,kc)),p=String(r.KNOWGRPH_CHAT_PROXY_AI_GATEWAY_BASE_URL||"").trim(),m=String(r.KNOWGRPH_CHAT_PROXY_AI_GATEWAY_GATEWAY_ID||"").trim(),f=s==="openai"&&!!p&&!!i,P=Uc({provider:s,requestedUpstream:f?p:pe(t.headers,"x-kg-chat-upstream"),env:r});if(!P)return ge(t,{ok:!1,error:"Missing chat proxy upstream configuration"},500);let b;try{b=new URL(P)}catch{return ge(t,{ok:!1,error:"Invalid chat proxy upstream configuration"},500)}let O=ha(r,{includeOpenAi:!0,includeAiGateway:!0,includeMiroMind:!0,includeAgnes:!0,includeBytePlus:!0}),D=xe(b.hostname);if(!O.has(D))return ge(t,{ok:!1,error:"Chat proxy upstream host is not allowed"},403);if(!ma(D)&&b.protocol!=="https:")return ge(t,{ok:!1,error:"Chat proxy requires HTTPS for non-local upstream hosts"},403);let N=f||vc(D),G=!N&&(s==="openai"||D===Lr),ee=s===Vt||Tc(D),W=s===Wt||Ec(D),R=s===qt||Cc(D),T=pe(t.headers,"x-kg-chat-api-key"),te=String(r.KNOWGRPH_CHAT_PROXY_AI_GATEWAY_TOKEN||r.AI_GATEWAY_TOKEN||r.CLOUDFLARE_API_TOKEN||"").trim(),z=String(r.KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY||r.OPENAI_API_KEY||"").trim(),le=String(r.KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY||r.MIROMIND_API_KEY||"").trim(),U=String(r.KNOWGRPH_CHAT_PROXY_AGNES_API_KEY||r.AGNES_API_KEY||"").trim(),L=String(r.KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY||r.BYTEPLUS_API_KEY||"").trim(),Y=(T||te).slice(0,512),se=(T||z).slice(0,512),be=(T||le).slice(0,512),ke=(T||U).slice(0,512),x=(T||L).slice(0,512),w=R?x:N?Y:W?ke:ee?be:se;if(N&&!w)return ge(t,{ok:!1,error:"Missing Cloudflare AI Gateway token for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_AI_GATEWAY_TOKEN or AI_GATEWAY_TOKEN)"},401);if(G&&!se)return ge(t,{ok:!1,error:"Missing OpenAI API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY or OPENAI_API_KEY)"},401);if(ee&&!w)return ge(t,{ok:!1,error:"Missing MiroMind API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY or MIROMIND_API_KEY)"},401);if(W&&!w)return ge(t,{ok:!1,error:"Missing Agnes API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_AGNES_API_KEY or AGNES_API_KEY)"},401);if(R&&!w)return ge(t,{ok:!1,error:"Missing BytePlus API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY or BYTEPLUS_API_KEY)"},401);if(o==="POST"&&!pe(t.headers,"content-type").toLowerCase().includes("application/json"))return ge(t,{ok:!1,error:"Chat proxy expects application/json payloads"},415);let y=a.pathname.startsWith(xa)&&a.pathname.slice(xa.length)||"/v1/chat/completions",u=y.startsWith("/")?y:`/${y}`,g=Nc(b,u,a.search||""),h=new Headers,A=pe(t.headers,"content-type"),E=pe(t.headers,"accept");A&&h.set("content-type",A),E&&h.set("accept",E),(G||N||ee||W||R)&&h.set("authorization",`Bearer ${w}`);let q=pe(t.headers,"x-client-request-id").slice(0,512);q&&h.set("x-client-request-id",q),N&&m&&h.set("cf-aig-gateway-id",m),c&&h.set("cf-aig-metadata",c),l&&h.set("cf-aig-cache-ttl",l);let j=new AbortController,$=Number(r.KNOWGRPH_CHAT_PROXY_TIMEOUT_MS),X=Number.isFinite($)?Math.max(5e3,Math.min(18e4,Math.floor($))):9e4,_=setTimeout(()=>j.abort(),X);try{let K=o==="GET"||o==="HEAD"?void 0:t.body;if(f&&o==="POST"){let ze=await t.clone().text();try{let Fe=JSON.parse(ze||"{}");Fe.model=i,K=JSON.stringify(Fe)}catch{K=ze}}let de=await fetch(g.toString(),{method:o,headers:h,body:K,signal:j.signal,redirect:"follow"}),v=new Headers(de.headers);v.delete("content-length"),v.delete("www-authenticate"),v.set("cache-control","no-store");let Q=pe(t.headers,"origin");return Q&&(v.set("access-control-allow-origin",Q),v.set("vary","Origin")),o==="HEAD"?new Response(null,{status:de.status,statusText:de.statusText,headers:v}):new Response(de.body,{status:de.status,statusText:de.statusText,headers:v})}catch(K){let de=K&&typeof K=="object"&&"message"in K?String(K.message||""):"",v=j.signal.aborted||/aborted|timeout/i.test(de);return ge(t,{ok:!1,error:de||"Failed to reach chat upstream"},v?504:502)}finally{clearTimeout(_)}}n(ka,"onRequest");function Lc(e){let t=e.map(r=>r==null?"":typeof r=="boolean"?r?"1":"0":typeof r=="number"?Number.isFinite(r)?String(r):"":String(r)).join("|");return`rich-media-preview:${it(t)}`}n(Lc,"buildRichMediaPreviewSemanticKey");var Ea="png";function St(e){let t=typeof e=="number"?e:Number(String(e??"").trim());if(!Number.isFinite(t))return null;let r=Math.max(0,Number(t.toFixed(3)));return Number.isFinite(r)?r:null}n(St,"normalizeRemoteVideoFrameSeconds");function $c(e){return String(St(e)??0).replace(/\./g,"_")}n($c,"formatRemoteVideoFrameSecondsForFileName");function Xt(e){let t=String(e||"").trim().toLowerCase();return t==="jpg"||t==="jpeg"?"jpg":"png"}n(Xt,"normalizeRemoteVideoFrameFormat");function zr(e){let t=String(e.sourceUrl||"").trim(),r=St(e.timeSeconds)??0,o=Xt(e.format||Ea);return Lc(["remote-video-frame",t,r,o])}n(zr,"buildRemoteVideoFrameSemanticKey");function Ca(e){let t=St(e.timeSeconds)??0,r=Xt(e.format||Ea),o=zr({...e,timeSeconds:t,format:r});return`frame-${o.split(":").pop()||it(o)}-t${$c(t)}.${r}`}n(Ca,"buildRemoteVideoFrameFileName");var Yt=n(e=>{let t=String(e||"").trim();return t&&/^[A-Za-z0-9_-]{6,128}$/.test(t)?t:null},"normalizeYouTubeIdLikeValue"),Ra=n(e=>{try{let t=new URL(String(e||"").trim()),r=String(t.hostname||"").toLowerCase();if(r==="youtu.be"||r.endsWith(".youtu.be")){let o=t.pathname.replace(/^\/+/,"").split("/")[0]?.trim()||"";return Yt(o)}if(r==="youtube.com"||r.endsWith(".youtube.com")||r==="youtube-nocookie.com"||r.endsWith(".youtube-nocookie.com")){let o=String(t.searchParams.get("v")||"").trim();if(o)return Yt(o);let a=t.pathname.split("/").filter(Boolean),s=a[0]||"",i=a[1]||"";if((s==="embed"||s==="shorts"||s==="live")&&i)return Yt(i);if(s==="watch"){let c=String(t.searchParams.get("v")||"").trim();return Yt(c)}}}catch{return null}return null},"readYouTubeIdFromUrl");function Dc(e){let t=String(e||"").trim().replace(/^<|>$/g,"").trim();for(;/[),.;:!?]$/.test(t);){let r=t.slice(0,-1).trim();if(!r)break;let o=Ra(t),a=Ra(r);if(!a||o&&o!==a)break;t=r}return t}n(Dc,"stripYouTubeUrlTrailingPunctuation");function Ta(e){let t=n(r=>{let o=String(r||"").trim();if(!o)return null;if(/^\d+$/.test(o))return Number(o);let a=o.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i);if(!a)return null;let s=a[1]?Number(a[1]):0,i=a[2]?Number(a[2]):0,c=a[3]?Number(a[3]):0,l=s*3600+i*60+c;return l>0&&Number.isFinite(l)?l:null},"parseChunk");try{let r=new URL(Dc(e)),o=r.searchParams.get("t")||r.searchParams.get("start")||"",a=r.hash&&new URLSearchParams(r.hash.replace(/^#/,"")).get("t")||"";return t(o)??t(a)}catch{return null}}n(Ta,"parseYouTubeStartSeconds");var jc="/image/knowgrph/video-frame",Hc=4096,Kc=720*60,Bc=/^frame-[a-f0-9]+-t\d+\.(?:png|jpg)$/i,qr={"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"accept, content-type"},Wr=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),Fr=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:JSON.stringify(e),{status:t,headers:{...qr,"content-type":"application/json; charset=utf-8","cache-control":"no-store"}}),"jsonResponse"),Gr=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:e,{status:t,headers:{...qr,"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}}),"textResponse"),zc=n((e,t)=>e===t||e.endsWith(`.${t}`),"hostMatches"),Fc=n(e=>{let t=Wr(e?.KG_VIDEO_FRAME_ALLOWED_HOSTS);return t?t.split(",").map(r=>Wr(r).toLowerCase()).filter(Boolean):["youtube.com","youtu.be","youtube-nocookie.com","bilibili.com","b23.tv"]},"readAllowedHosts"),Gc=n(e=>Wr(e).replace(/^<|>$/g,"").trim(),"unwrapUrlInput"),Wc=n((e,t)=>{try{let r=new URL(e);if(r.protocol!=="https:"&&r.protocol!=="http:")return!1;let o=r.hostname.toLowerCase();return Fc(t).some(a=>zc(o,a))}catch{return!1}},"isAllowedSourceUrl"),qc=n((e,t)=>{let r=new URL(e.url),o=Gc(r.searchParams.get("url")||"");if(!o)return{error:"Missing url parameter"};if(o.length>Hc)return{error:"Video URL is too long"};if(!Wc(o,t))return{error:"Video frame extraction is limited to supported remote video hosts"};let a=St(r.searchParams.get("time"))??Ta(o);if(a==null)return{error:"Missing time parameter"};let s=Math.min(Kc,Math.max(0,a)),i=Xt(r.searchParams.get("format")||"png"),c=Ca({sourceUrl:o,timeSeconds:s,format:i});if(!Bc.test(c))return{error:"Invalid frame cache key"};let l=`${jc}/${c}`;return{sourceUrl:o,timeSeconds:s,format:i,fileName:c,publicUrl:l,semanticKey:zr({sourceUrl:o,timeSeconds:s,format:i})}},"readFrameRequest"),Vc=n(async(e,t,r)=>{let o=new URL(t,e.request.url),a=new Request(o.toString(),{method:r});return typeof e.env?.ASSETS?.fetch=="function"?await e.env.ASSETS.fetch(a):await fetch(a)},"fetchStaticAsset"),Yc=n(e=>`Frame has not been generated yet. Run the local video-frame extractor and publish ${e.publicUrl}.`,"missingFrameMessage"),Xc=n((e,t)=>{let r=new Headers;r.set("content-type",t.format==="jpg"?"image/jpeg":"image/png"),r.set("cache-control","public, max-age=31536000, immutable"),r.set("access-control-allow-origin","*");let o=e.headers.get("content-length");o&&r.set("content-length",o);let a=e.headers.get("etag");return a&&r.set("etag",a),r},"imageResponseHeaders");async function va(e){let t=e.request;if(t.method==="OPTIONS")return new Response(null,{status:204,headers:qr});if(t.method!=="GET"&&t.method!=="HEAD")return Gr("Method not allowed",405,t.method);let r=new URL(t.url).searchParams.get("emit")==="json",o=qc(t,e.env||{});if("error"in o)return r?Fr({ok:!1,error:o.error},400,t.method):Gr(o.error,400,t.method);let a=r&&t.method!=="HEAD"?"GET":r||t.method==="HEAD"?"HEAD":"GET",s=await Vc(e,o.publicUrl,a);if(!s.ok){let i=Yc(o);return r?Fr({ok:!1,error:i,publicUrl:o.publicUrl,semanticKey:o.semanticKey},404,t.method):Gr(i,404,t.method)}if(r){let i=Number(s.headers.get("content-length")||0);return(!Number.isFinite(i)||i<=0)&&t.method!=="HEAD"&&(i=(await s.arrayBuffer()).byteLength),Fr({ok:!0,imageUrl:o.publicUrl,publicUrl:o.publicUrl,semanticKey:o.semanticKey,cached:!0,bytes:Number.isFinite(i)?Math.max(0,Math.floor(i)):0,timeSeconds:o.timeSeconds,format:o.format},200,t.method)}return new Response(t.method==="HEAD"?null:s.body,{status:200,headers:Xc(s,o)})}n(va,"onRequest");var Oa={"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"content-type"},Jt=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:JSON.stringify(e),{status:t,headers:Oa}),"jsonResponse"),re=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),Jc=n(e=>{try{let t=new URL(String(e||"").trim());if(/youtu\.be$/i.test(t.hostname))return re(t.pathname.split("/").filter(Boolean)[0]);if(/youtube\.com$/i.test(t.hostname)||/youtube-nocookie\.com$/i.test(t.hostname)){let r=re(t.searchParams.get("v"));if(r)return r;let o=t.pathname.split("/").filter(Boolean),a=o.findIndex(s=>["embed","shorts","live"].includes(s));if(a>=0)return re(o[a+1])}}catch{}return""},"readVideoId"),Qc=n((e,t)=>{let r=e.indexOf(t);if(r<0)return null;let o=e.indexOf("{",r);if(o<0)return null;let a=0,s=!1,i=!1;for(let c=o;c<e.length;c+=1){let l=e[c];if(s){i?i=!1:l==="\\"?i=!0:l==='"'&&(s=!1);continue}if(l==='"')s=!0;else if(l==="{")a+=1;else if(l==="}"&&(a-=1,a===0))return e.slice(o,c+1)}return null},"extractJsonAfter"),Zc=n(e=>{for(let t of["ytInitialPlayerResponse =","ytInitialPlayerResponse="]){let r=Qc(e,t);if(r)try{return JSON.parse(r)}catch{}}return null},"parsePlayerResponse"),el=n((e,t)=>{let r=re(t||"en").toLowerCase();return e.find(o=>re(o.languageCode).toLowerCase()===r)||e.find(o=>re(o.languageCode).toLowerCase().startsWith(r.split("-")[0]))||e.find(o=>re(o.kind)!=="asr")||e[0]||null},"pickCaptionTrack"),tl=n(e=>{let t=new URL(e);return t.searchParams.set("fmt","json3"),t.toString()},"withJsonCaptionFormat"),rl=n(e=>(Array.isArray(e?.events)?e.events:[]).map(r=>{let o=Array.isArray(r.segs)?re(r.segs.map(i=>i?.utf8||"").join("")):"",a=Number(r.tStartMs)/1e3,s=Number(r.dDurationMs||0)/1e3;return o&&Number.isFinite(a)?{text:o,start:a,duration:Number.isFinite(s)?s:0}:null}).filter(Boolean),"parseCaptionJson3"),ol=n(e=>String(e||"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'"),"decodeXmlText"),nl=n(e=>{let t=[],r=/<text\b([^>]*)>([\s\S]*?)<\/text>/gi,o=null;for(;o=r.exec(String(e||""));){let a=o[1]||"",s=Number(a.match(/\bstart="([^"]+)"/i)?.[1]),i=Number(a.match(/\bdur="([^"]+)"/i)?.[1]||0),c=re(ol(o[2]||""));c&&Number.isFinite(s)&&t.push({text:c,start:s,duration:Number.isFinite(i)?i:0})}return t},"parseCaptionXml"),al=n((e,t)=>{let r=String(e||"").trim();if(!r)return[];if(String(t||"").toLowerCase().includes("json")||r.startsWith("{")||r.startsWith("["))try{return rl(JSON.parse(r))}catch{return[]}return nl(r)},"parseCaptionResponseText"),sl=n(e=>{let t=Math.max(0,Math.floor(Number(e)||0)),r=Math.floor(t/60),o=String(t%60).padStart(2,"0");return`${r}:${o}`},"formatTimestamp"),il=n((e,t)=>{let r=new URL(e);return r.searchParams.set("t",`${Math.max(0,Math.floor(Number(t)||0))}s`),r.toString()},"timestampUrl"),cl=n(({title:e,sourceUrl:t,videoId:r,authorName:o,thumbnailUrl:a,segments:s})=>[`# ${e||`YouTube ${r}`}`,"",`Video ID: ${r}`,o?`Author: ${o}`:"",`Source: [${t}](${t})`,a?`[![${e||r}](${a})](${t})`:"","",s.length>0?"## Transcript":"## Video Source","",...s.length>0?s.map(i=>`[${sl(i.start)}](${il(t,i.start)}) ${i.text}`):["Captions were not available from the source at import time.","The source URL, title, author, and thumbnail remain available for downstream storyboard reconstruction."],""].filter(i=>i!=="").join(`
`),"buildMarkdown"),Vr=n(({videoId:e,sourceUrl:t,title:r,authorName:o,thumbnailUrl:a,lang:s,languageCode:i,segments:c,captionStatus:l})=>{let p={type:"rag:YouTubeTranscript",video_id:e,source_url:t,title:r,author_name:o,thumbnail_url:a,language_code:re(i)||s,caption_status:l,segment_count:c.length,duration:c.reduce((m,f)=>Math.max(m,f.start+f.duration),0),segments:c};return{ok:!0,name:`youtube-${e.toLowerCase()}.md`,markdown:cl({title:r,sourceUrl:t,videoId:e,authorName:o,thumbnailUrl:a,segments:c}),transcript:p}},"buildPayload");async function ll({sourceUrl:e,lang:t="en",fetchImpl:r=fetch}){let o=Jc(e);if(!o)return{ok:!1,error:"unsupported_youtube_url"};let a=`https://www.youtube.com/watch?v=${encodeURIComponent(o)}`,[s,i]=await Promise.all([r(`https://www.youtube.com/oembed?url=${encodeURIComponent(a)}&format=json`,{headers:{accept:"application/json"}}).catch(()=>null),r(a,{headers:{accept:"text/html,application/xhtml+xml","accept-language":"en-US,en;q=0.9","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}})]),c=s?.ok?await s.json().catch(()=>({})):{},l=i.ok?Zc(await i.text()):null,p=re(c.title)||re(l?.videoDetails?.title)||`YouTube ${o}`,m=re(c.author_name)||re(l?.videoDetails?.author),f=re(c.thumbnail_url)||`https://i.ytimg.com/vi/${o}/hqdefault.jpg`;if(!i.ok)return Vr({videoId:o,sourceUrl:a,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:t,segments:[],captionStatus:`watch-fetch-${i.status}`});let P=l?.captions?.playerCaptionsTracklistRenderer?.captionTracks||[],b=el(Array.isArray(P)?P:[],t);if(!b?.baseUrl)return Vr({videoId:o,sourceUrl:a,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:t,segments:[],captionStatus:"captions-unavailable"});let O=await r(tl(b.baseUrl),{headers:{accept:"application/json,text/xml,text/plain,*/*","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}}).catch(()=>null),D=O?await O.text().catch(()=>""):"",N=O?.ok?al(D,O.headers.get("content-type")):[],G=N.length>0?"available":O?.ok?"captions-empty":`captions-fetch-${O?.status||"failed"}`;return Vr({videoId:o,sourceUrl:a,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:b.languageCode,segments:N,captionStatus:G})}n(ll,"buildYouTubeTranscriptPayload");async function Ia(e){let t=e.request,r=String(t.method||"GET").toUpperCase();if(r==="OPTIONS")return new Response(null,{status:204,headers:Oa});if(r!=="GET"&&r!=="HEAD"&&r!=="POST")return Jt({ok:!1,error:"unsupported_method"},405,r);let o=new URL(t.url),a=re(o.searchParams.get("url")),s=re(o.searchParams.get("lang"))||"en";if(!a)return Jt({ok:!1,error:"missing_url"},400,r);try{let i=await ll({sourceUrl:a,lang:s});return Jt(i,i.ok?200:502,r)}catch(i){let c=i&&typeof i=="object"&&"message"in i?re(i.message):"";return Jt({ok:!1,error:c||"youtube_conversion_failed"},502,r)}}n(Ia,"onRequest");async function Ma(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase();if(r==="OPTIONS")return new Response(null,{status:204,headers:{...ce(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(r!=="GET"&&r!=="HEAD")return new Response(JSON.stringify({ok:!1,error:"unsupported_method"}),{status:405,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...ce(t)}});let o={ok:!0,service:"singabldr-pages",ts:new Date().toISOString()},a={"content-type":"application/json; charset=utf-8","cache-control":"no-store",...ce(t)};return r==="HEAD"?new Response(null,{status:200,headers:a}):new Response(JSON.stringify(o),{status:200,headers:a})}n(Ma,"onRequest");var $e="https://airvio.co";var ae="/knowgrph",Le=`${$e}${ae}/`,Na=`${$e}/`;var La=`${ae}/health`,Ua=`${$e}${La}`,$a="/.well-known/agent-card.json",Km=`${ae}/.well-known/agent-card.json`,pl=`${$e}${$a}`,Da="/api/storage/source-files",Bm=`${Da}/`,dl="/api/storage/doc-default/",ul="/api/storage/doc/",ml=`${$e}${Da}`,hl=`${$e}${dl}{canonicalPath}`,gl=`${$e}${ul}{workspaceId}/{canonicalPath}`,fl=`${$e}/api/storage/blob/{workspaceId}/{canonicalPath}`;var Yr="root-agent-ready-pages";var ja=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${ae}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${ae}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${La}>; rel="status"; type="application/health+json"`,`<${ae}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${$a}>; rel="describedby"; type="application/json"`].join(", "),Ha=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${Le}.

## Discovery

- Crawl policy: ${Le}robots.txt
- Sitemap: ${Le}sitemap.xml
- API catalog: ${Le}.well-known/api-catalog
- Auth.md registration instructions: ${Na}auth.md
- Health: ${Ua}
- MCP server card: ${Le}.well-known/mcp/server-card.json
- A2A Agent Card: ${pl}
- Agent skills: ${Le}.well-known/agent-skills/index.json
- LLM reference: ${Le}llms.txt
- Live Canvas Hero discovery markdown: ${Na}knowgrph-live-canvas-hero.md

## APIs

- Agent-ready status: ${Ua}
- HTTP MCP: ${Le}mcp
- Storage API: ${$e}/api/storage/
- Source Files index: ${ml}
- Default Source File documents: ${hl}
- Workspace Source File documents: ${gl}
- Workspace binary artifacts: ${fl}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes seven read-only tools for published Source Files, shared documents, data-first search/fetch, and agent-surface inspection.
- HTTP MCP and local stdio expose shared read-only prompt templates through \`prompts/list\` and \`prompts/get\` for Source Files research and agent-surface inspection.
- HTTP MCP and local stdio expose Source Files resource templates through \`resources/templates/list\`; \`kgdoc://source-file/{id}\` reads reuse the existing \`fetch\` executor.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared seven-tool WebMCP surface on \`${Le}\` HTML routes.

## MCP Apps

- HTTP MCP advertises \`io.modelcontextprotocol/ui\` with \`text/html;profile=mcp-app\`.
- \`inspect_agent_surface\` links to the shared \`ui://knowgrph/agent-ready\` resource through \`_meta.ui.resourceUri\`.
- UI-linked tool descriptors expose no-auth \`securitySchemes\`, mirror them in \`_meta.securitySchemes\`, and set OpenAI widget accessibility metadata from the shared contract.
- \`resources/list\` and \`resources/read\` serve the inline, sandbox-friendly Knowgrph Agent Ready app resource while preserving text fallback and structured tool output; \`resources/templates/list\` exposes Source Files markdown reads under the standard MCP \`resources\` capability.
- The View initiates the MCP Apps \`ui/initialize\` handshake, sends \`ui/notifications/initialized\` and \`ui/notifications/size-changed\`, handles host context/tool input/result/cancel notifications, and calls the originating server through \`tools/call\`.
- \`inspect_agent_surface.structuredContent.mcpAppsServerReadiness\` exposes the native server-readiness model used by the View: app tool/resource binding, prompt discovery, resource-template discovery, output-schema and structured-content readiness, sandbox/security metadata, widget accessibility, Streamable HTTP JSON-RPC transport, local stdio transport, and read-only search/fetch retrieval.
`,Ka=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),Ba=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(r=>r.trim().startsWith("text/markdown")),"wantsMarkdown"),Xr=n((e,t)=>{let r=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&r.headers.set("x-knowgrph-route-owner",o),a&&r.headers.set("x-knowgrph-route-tag",a),r},"withAgentReadyRouteHeaders");var Qr="Agent-actionable chat-to-canvas knowledge graph workspace",za='<main id="root"></main>',yl=/<(?:main|div)\s+id=["']root["']\s*><\/(?:main|div)>/i,wl=n(e=>{let t=/<script>([\s\S]*?)<\/script>/g;for(let r of String(e||"").matchAll(t)){let o=r[1]||"";if(o.includes("createWebMcpLifecycleController")&&o.includes("toolDefinitions"))return o}return""},"extractWebMcpScript"),Fa=n(()=>({"content-type":"text/html; charset=utf-8","cache-control":"no-store, no-cache, no-transform, must-revalidate, max-age=0","access-control-allow-origin":"*",link:ja}),"rootHtmlHeaders"),bl=n(()=>`<noscript><a href="${ae}/">Enter Knowgrph</a></noscript>`,"rootNoscriptFallbackMarkup"),Jr=n((e,t)=>String(e||"").includes("</head>")?String(e||"").replace("</head>",`${t}</head>`):`${String(e||"")}${t}`,"injectIntoHead"),Sl=n(e=>{let t=String(e||"").replace(yl,za);return/<meta\s+name=["']description["'][^>]*>/i.test(t)?t=t.replace(/<meta\s+name=["']description["'][^>]*>/i,`<meta name="description" content="${Qr}" />`):t=Jr(t,`    <meta name="description" content="${Qr}" />
`),/<link\s+rel=["']canonical["'][^>]*>/i.test(t)||(t=Jr(t,`    <link rel="canonical" href="${ae}/" />
`)),/<meta\s+name=["']x-knowgrph-root-alias["'][^>]*>/i.test(t)||(t=Jr(t,`    <meta name="x-knowgrph-root-alias" content="${ae}/" />
`)),t},"rewriteRootAppHtml"),_l=n(async e=>{let t=new URL(`${ae}/?agentReadyRootWebMcp=1`,e.url),r=await fetch(t,{headers:{accept:"text/html"}});return r.ok?wl(await r.text()):""},"loadWebMcpScript"),Al=n(async e=>{let t=new URL(`${ae}/?agentReadyRootAlias=1`,e.url),r=await fetch(t,{headers:{accept:"text/html"}});if(!r.ok)return null;let o=Sl(await r.text());return!o.includes(za)||!o.includes(`${ae}/assets/`)?null:new Response(o,{status:200,headers:Fa()})},"loadKnowgrphAppShell"),Pl=n((e="")=>new Response(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${Qr}" />
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
    ${bl()}
  </body>
</html>`,{status:200,headers:Fa()}),"rootHtmlResponse");async function Ga(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase();if(r!=="GET"&&r!=="HEAD")return e.next();if(Ba(t)){let s=Xr(Ka(Ha),{owner:Yr,tag:"root-homepage-markdown"});return r==="HEAD"?new Response(null,s):s}let o=r==="HEAD"?null:await Al(t),a=Xr(o||Pl(r==="HEAD"?"":await _l(t)),{owner:Yr,tag:"root-homepage-html"});return r==="HEAD"?new Response(null,a):a}n(Ga,"onRequest");var S=[{routePath:"/api/llm/chat/completions",mountPath:"/api/llm/chat",method:"",middlewares:[],modules:[ro]},{routePath:"/api/payments/commerce/x402",mountPath:"/api/payments/commerce",method:"",middlewares:[],modules:[Ro]},{routePath:"/api/llm/models",mountPath:"/api/llm",method:"",middlewares:[],modules:[Eo]},{routePath:"/api/llm/responses",mountPath:"/api/llm",method:"",middlewares:[],modules:[Co]},{routePath:"/knowgrph/doc-default/:path*",mountPath:"/knowgrph/doc-default",method:"",middlewares:[],modules:[na]},{routePath:"/knowgrph/doc/:path*",mountPath:"/knowgrph/doc",method:"",middlewares:[],modules:[aa]},{routePath:"/knowgrph/share/:path*",mountPath:"/knowgrph/share",method:"",middlewares:[],modules:[sa]},{routePath:"/api/link-preview",mountPath:"/api",method:"GET",middlewares:[],modules:[ca]},{routePath:"/api/link-proxy",mountPath:"/api",method:"GET",middlewares:[],modules:[pa]},{routePath:"/api/graph",mountPath:"/api",method:"",middlewares:[],modules:[Sa]},{routePath:"/api/oembed",mountPath:"/api",method:"",middlewares:[],modules:[Pa]},{routePath:"/__chat_proxy/:path*",mountPath:"/__chat_proxy",method:"",middlewares:[],modules:[ka]},{routePath:"/knowgrph/:path*",mountPath:"/knowgrph",method:"",middlewares:[],modules:[Ke]},{routePath:"/__video_frame",mountPath:"/",method:"",middlewares:[],modules:[va]},{routePath:"/__youtube_transcript",mountPath:"/",method:"",middlewares:[],modules:[Ia]},{routePath:"/health",mountPath:"/",method:"",middlewares:[],modules:[Ma]},{routePath:"/",mountPath:"/",method:"",middlewares:[],modules:[Ga]}];function xl(e){for(var t=[],r=0;r<e.length;){var o=e[r];if(o==="*"||o==="+"||o==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(o==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(o==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(o==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(o===":"){for(var a="",s=r+1;s<e.length;){var i=e.charCodeAt(s);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){a+=e[s++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:a}),r=s;continue}if(o==="("){var c=1,l="",s=r+1;if(e[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;){if(e[s]==="\\"){l+=e[s++]+e[s++];continue}if(e[s]===")"){if(c--,c===0){s++;break}}else if(e[s]==="("&&(c++,e[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));l+=e[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(r));if(!l)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:l}),r=s;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}n(xl,"lexer");function kl(e,t){t===void 0&&(t={});for(var r=xl(e),o=t.prefixes,a=o===void 0?"./":o,s=t.delimiter,i=s===void 0?"/#?":s,c=[],l=0,p=0,m="",f=n(function(U){if(p<r.length&&r[p].type===U)return r[p++].value},"tryConsume"),P=n(function(U){var L=f(U);if(L!==void 0)return L;var Y=r[p],se=Y.type,be=Y.index;throw new TypeError("Unexpected ".concat(se," at ").concat(be,", expected ").concat(U))},"mustConsume"),b=n(function(){for(var U="",L;L=f("CHAR")||f("ESCAPED_CHAR");)U+=L;return U},"consumeText"),O=n(function(U){for(var L=0,Y=i;L<Y.length;L++){var se=Y[L];if(U.indexOf(se)>-1)return!0}return!1},"isSafe"),D=n(function(U){var L=c[c.length-1],Y=U||(L&&typeof L=="string"?L:"");if(L&&!Y)throw new TypeError('Must have text between two parameters, missing text after "'.concat(L.name,'"'));return!Y||O(Y)?"[^".concat(Be(i),"]+?"):"(?:(?!".concat(Be(Y),")[^").concat(Be(i),"])+?")},"safePattern");p<r.length;){var N=f("CHAR"),G=f("NAME"),ee=f("PATTERN");if(G||ee){var W=N||"";a.indexOf(W)===-1&&(m+=W,W=""),m&&(c.push(m),m=""),c.push({name:G||l++,prefix:W,suffix:"",pattern:ee||D(W),modifier:f("MODIFIER")||""});continue}var R=N||f("ESCAPED_CHAR");if(R){m+=R;continue}m&&(c.push(m),m="");var T=f("OPEN");if(T){var W=b(),te=f("NAME")||"",z=f("PATTERN")||"",le=b();P("CLOSE"),c.push({name:te||(z?l++:""),pattern:te&&!z?D(W):z,prefix:W,suffix:le,modifier:f("MODIFIER")||""});continue}P("END")}return c}n(kl,"parse");function _t(e,t){var r=[],o=qa(e,r,t);return Rl(o,r,t)}n(_t,"match");function Rl(e,t,r){r===void 0&&(r={});var o=r.decode,a=o===void 0?function(s){return s}:o;return function(s){var i=e.exec(s);if(!i)return!1;for(var c=i[0],l=i.index,p=Object.create(null),m=n(function(P){if(i[P]===void 0)return"continue";var b=t[P-1];b.modifier==="*"||b.modifier==="+"?p[b.name]=i[P].split(b.prefix+b.suffix).map(function(O){return a(O,b)}):p[b.name]=a(i[P],b)},"_loop_1"),f=1;f<i.length;f++)m(f);return{path:c,index:l,params:p}}}n(Rl,"regexpToFunction");function Be(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}n(Be,"escapeString");function Wa(e){return e&&e.sensitive?"":"i"}n(Wa,"flags");function El(e,t){if(!t)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,a=r.exec(e.source);a;)t.push({name:a[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),a=r.exec(e.source);return e}n(El,"regexpToRegexp");function Cl(e,t,r){var o=e.map(function(a){return qa(a,t,r).source});return new RegExp("(?:".concat(o.join("|"),")"),Wa(r))}n(Cl,"arrayToRegexp");function Tl(e,t,r){return vl(kl(e,r),t,r)}n(Tl,"stringToRegexp");function vl(e,t,r){r===void 0&&(r={});for(var o=r.strict,a=o===void 0?!1:o,s=r.start,i=s===void 0?!0:s,c=r.end,l=c===void 0?!0:c,p=r.encode,m=p===void 0?function(L){return L}:p,f=r.delimiter,P=f===void 0?"/#?":f,b=r.endsWith,O=b===void 0?"":b,D="[".concat(Be(O),"]|$"),N="[".concat(Be(P),"]"),G=i?"^":"",ee=0,W=e;ee<W.length;ee++){var R=W[ee];if(typeof R=="string")G+=Be(m(R));else{var T=Be(m(R.prefix)),te=Be(m(R.suffix));if(R.pattern)if(t&&t.push(R),T||te)if(R.modifier==="+"||R.modifier==="*"){var z=R.modifier==="*"?"?":"";G+="(?:".concat(T,"((?:").concat(R.pattern,")(?:").concat(te).concat(T,"(?:").concat(R.pattern,"))*)").concat(te,")").concat(z)}else G+="(?:".concat(T,"(").concat(R.pattern,")").concat(te,")").concat(R.modifier);else{if(R.modifier==="+"||R.modifier==="*")throw new TypeError('Can not repeat "'.concat(R.name,'" without a prefix and suffix'));G+="(".concat(R.pattern,")").concat(R.modifier)}else G+="(?:".concat(T).concat(te,")").concat(R.modifier)}}if(l)a||(G+="".concat(N,"?")),G+=r.endsWith?"(?=".concat(D,")"):"$";else{var le=e[e.length-1],U=typeof le=="string"?N.indexOf(le[le.length-1])>-1:le===void 0;a||(G+="(?:".concat(N,"(?=").concat(D,"))?")),U||(G+="(?=".concat(N,"|").concat(D,")"))}return new RegExp(G,Wa(r))}n(vl,"tokensToRegexp");function qa(e,t,r){return e instanceof RegExp?El(e,t):Array.isArray(e)?Cl(e,t,r):Tl(e,t,r)}n(qa,"pathToRegexp");var Qt=/[.+?^${}()|[\]\\]/g;function*Ol(e){let t=new URL(e.url).pathname;for(let r of[...S].reverse()){if(r.method&&r.method!==e.method)continue;let o=_t(r.routePath.replace(Qt,"\\$&"),{end:!1}),a=_t(r.mountPath.replace(Qt,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i)for(let c of r.middlewares.flat())yield{handler:c,params:s.params,path:i.path}}for(let r of S){if(r.method&&r.method!==e.method)continue;let o=_t(r.routePath.replace(Qt,"\\$&"),{end:!0}),a=_t(r.mountPath.replace(Qt,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i&&r.modules.length){for(let c of r.modules.flat())yield{handler:c,params:s.params,path:s.path};break}}}n(Ol,"executeRequest");var wh={async fetch(e,t,r){let o=e,a=Ol(o),s={},i=!1,c=n(async(l,p)=>{if(l!==void 0){let f=l;typeof l=="string"&&(f=new URL(l,o.url).toString()),o=new Request(f,p)}let m=a.next();if(m.done===!1){let{handler:f,params:P,path:b}=m.value,O={request:new Request(o.clone()),functionPath:b,next:c,params:P,get data(){return s},set data(N){if(typeof N!="object"||N===null)throw new Error("context.data must be an object");s=N},env:t,waitUntil:r.waitUntil.bind(r),passThroughOnException:n(()=>{i=!0},"passThroughOnException")},D=await f(O);if(!(D instanceof Response))throw new Error("Your Pages function should return a Response");return Zr(D)}else{let f=await t.ASSETS.fetch(o);return Zr(f)}},"next");try{return await c()}catch(l){if(i){let p=await t.ASSETS.fetch(o);return Zr(p)}throw l}}},Zr=n(e=>new Response([101,204,205,304].includes(e.status)?null:e.body,e),"cloneResponse");export{wh as default};
