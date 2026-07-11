var ba=Object.defineProperty;var n=(e,t)=>ba(e,"name",{value:t,configurable:!0});var Aa="https://api.openai.com/v1";var Jt=Object.freeze(["gpt-5.4-nano","gpt-4o-mini"]);function Xt(e){return String(e||"").trim()}n(Xt,"normalizeOrigin");function Pa(e){let t=Xt(e);return t?t.startsWith("http://localhost:")||t.startsWith("http://127.0.0.1:")||t.startsWith("http://0.0.0.0:"):!1}n(Pa,"isAllowedOrigin");function Gr(e){let t=Xt(e);return Pa(t)?{"access-control-allow-origin":t,vary:"Origin","access-control-allow-methods":"GET, POST, OPTIONS","access-control-allow-headers":"content-type, x-flowinfish-session","access-control-max-age":"86400"}:{}}n(Gr,"corsHeaders");function _e(e,{status:t=200,origin:r=""}={}){return new Response(JSON.stringify(e),{status:t,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...Gr(r)}})}n(_e,"json");async function wt(e,{maxBytes:t=1e6}={}){let r=await e.arrayBuffer();if(r.byteLength>t)throw new Error("Request too large");let o=new TextDecoder().decode(r);try{return o?JSON.parse(o):{}}catch{throw new Error("Invalid JSON body")}}n(wt,"readJsonBody");function Ra(e){let t=String(e?.model||"").trim();if(!t)throw new Error("Missing model");if(!Jt.includes(t))throw new Error(`Model not allowed: ${t}`);return t}n(Ra,"enforceAllowedModel");function ka(e){let t=String(e.OPENAI_API_KEY||"").trim();if(!t)throw new Error("Missing server OPENAI_API_KEY");return t}n(ka,"requireOpenAiKey");async function St({request:e,env:t,pathname:r,payload:o}){let a=ka(t);Ra(o);let i=`${Xt(t.OPENAI_API_BASE)||Aa}${r}`,c=await fetch(i,{method:"POST",headers:{authorization:`Bearer ${a}`,"content-type":"application/json"},body:JSON.stringify(o)}),l=new Headers(c.headers);return l.delete("content-length"),l.set("cache-control","no-store"),new Response(c.body,{status:c.status,headers:l})}n(St,"proxyToOpenAi");function Ve(e){let t=e.headers.get("origin")||"";return new Response(null,{status:204,headers:{...Gr(t)}})}n(Ve,"handleOptions");async function Br(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return Ve(t);if(o!=="POST")return _e({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return _e({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await wt(t);return await St({request:t,env:r,pathname:"/chat/completions",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return _e({ok:!1,error:i},{status:400,origin:a})}}n(Br,"onRequest");var _t={checkoutSession:"/api/payments/stripe/checkout/session",webhook:"/api/payments/stripe/webhook"};var ge={restrictedKey:"STRIPE_RESTRICTED_KEY",secretKey:"STRIPE_SECRET_KEY",webhookSecret:"STRIPE_WEBHOOK_SECRET",checkoutPriceId:"STRIPE_CHECKOUT_PRICE_ID",checkoutCurrency:"STRIPE_CHECKOUT_CURRENCY",checkoutUnitAmount:"STRIPE_CHECKOUT_UNIT_AMOUNT",checkoutProductName:"STRIPE_CHECKOUT_PRODUCT_NAME",checkoutMode:"STRIPE_CHECKOUT_MODE",checkoutReturnOrigin:"STRIPE_CHECKOUT_RETURN_ORIGIN"},rl=[ge.restrictedKey,ge.secretKey,ge.webhookSecret];var rt={configure:"npm run payment:stripe:configure",d1MigrateRemote:"npm run payment:d1:migrate:remote",readiness:"npm run payment:stripe:readiness",x402Configure:"npm run payment:x402:configure",x402Readiness:"npm run payment:x402:readiness",paymentReadiness:"npm run payment:readiness",applyConfirmation:"apply-stripe-payment-worker-config",writeVisibleVarsFlag:"--write-visible-vars",deployVisibleVarsFlag:"--deploy-visible-vars"};var ol=[`Configure Stripe secrets on the server runtime that owns ${_t.checkoutSession}.`,"Cloudflare Pages project variables are available to Pages builds/functions, but they are not read by separate Worker routes.","Stripe Projects can provision and sync credentials locally; copy only required server secret names into the payment server runtime."].join(" "),nl=[`Payment server runtime for ${_t.checkoutSession}`,"not Cloudflare Pages project variables"].join("; "),xa=[ge.restrictedKey,ge.secretKey].join(" or "),al=[ge.checkoutPriceId,`${ge.checkoutCurrency} + ${ge.checkoutUnitAmount} + ${ge.checkoutProductName}`].join(" or "),sl=[`${ge.checkoutMode}=payment`,`${ge.checkoutMode}=subscription with ${ge.checkoutPriceId}`].join(" or "),il=["Worker secret names","visible Worker [vars]","remote D1 payment tables","required webhook-processing columns/constraints","bounded optional hosted Checkout create-and-expire smoke"].join(" + "),cl=[rt.configure,`write visible Worker [vars] with ${rt.writeVisibleVarsFlag}`,`deploy visible Worker [vars] with ${rt.deployVisibleVarsFlag}`,`apply with -- --apply --yes --confirm=${rt.applyConfirmation}`,rt.readiness].join(" -> "),ll=[`Missing server-managed Stripe key. Set ${xa} on the payment server runtime.`,"Pages project variables alone do not satisfy separate Worker routes."].join(" ");var Ea=n(e=>{let t=2166136261;for(let r=0;r<e.length;r+=1)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0},"fnv1a32");function Wr(e){return Ea(String(e??""))}n(Wr,"hashString32");function ot(e){return Wr(e).toString(16).padStart(8,"0")}n(ot,"hashStringToHex");var Ca=n(e=>e==null?"":typeof e=="boolean"?e?"1":"0":typeof e=="number"?Number.isFinite(e)?String(e):"":String(e),"normalizePrimitive"),Ta=n(e=>e.map(Ca).join("|"),"buildSignatureText"),bt=n(e=>ot(Ta(e)),"hashSignatureParts");var ke=n((e,t)=>bt(["agentic-commerce",e,...t]),"buildAgenticCommerceSemanticKey");var Fr="solana_pay",zr="/api/payments/commerce/solana-pay/settle";var Ne={recipient:"SOLANA_PAY_RECIPIENT",splToken:"SOLANA_PAY_SPL_TOKEN",label:"SOLANA_PAY_LABEL",rpcUrl:"SOLANA_PAY_RPC_URL",amountScale:"SOLANA_PAY_AMOUNT_SCALE",network:"SOLANA_PAY_NETWORK",commitment:"SOLANA_PAY_COMMITMENT"};var nt="2026-01-30",Vr="1000",Yr="USDC",Qt="https://x402.org/facilitator",Jr="eip155:84532",va="$0.001",Xr="x402-payment-required",Oa="0x0000000000000000000000000000000000000000",Ye="2026-04-08",qr="https://ucp.dev/2026-04-08/specification/overview/",Ia=["checkout"],Ma=["rest"];var I={acpDiscovery:"/.well-known/acp.json",acpConfig:"/.well-known/acp-config",ucpProfile:"/.well-known/ucp",mppOpenApi:"/openapi.json",x402ApiRoot:"/api",x402ApiV1:"/api/v1",checkoutSessions:"/checkout/sessions",x402PaymentRequired:"/api/payments/commerce/x402",commerceWebhook:"/api/payments/commerce/webhook",commerceProofArtifact:"/api/payments/commerce/harness-proof.json",commerceTraceArtifact:"/api/payments/commerce/trace.jsonl",openboxIngest:"/api/payments/commerce/openbox/ingest",web3Settle:"/api/payments/commerce/web3/settle",solanaPaySettle:zr},Ol=[I.x402ApiRoot,I.x402ApiV1,I.x402PaymentRequired],G={sellerId:"SELLER_ID",checkoutBaseUrl:"CHECKOUT_BASE_URL",web3Enabled:"WEB3_ENABLED",web3DepositAddress:"WEB3_DEPOSIT_ADDRESS",baseRpcUrl:"BASE_RPC_URL",baseConfirmationBlocks:"BASE_CONFIRMATION_BLOCKS",easAttestUrl:"EAS_ATTEST_URL",openboxApiUrl:"OPENBOX_API_URL",openboxIngestUrl:"OPENBOX_INGEST_URL",openboxApiKey:"OPENBOX_API_KEY",stripeDelegatePaymentUrl:"STRIPE_DELEGATE_PAYMENT_URL",acpBearerToken:"ACP_BEARER_TOKEN",x402PayToAddress:"X402_PAY_TO_ADDRESS",x402Network:"X402_NETWORK",x402Asset:"X402_ASSET",x402Amount:"X402_AMOUNT",x402FacilitatorUrl:"X402_FACILITATOR_URL",x402Price:"X402_PRICE"},Il=[G.sellerId,G.checkoutBaseUrl,G.web3Enabled,G.web3DepositAddress,G.baseRpcUrl,G.baseConfirmationBlocks,G.easAttestUrl,G.openboxApiUrl,G.openboxIngestUrl,G.stripeDelegatePaymentUrl,G.x402Network,G.x402Asset,G.x402Amount,G.x402FacilitatorUrl,G.x402Price,Ne.recipient,Ne.rpcUrl],Ml=[Ne.splToken,Ne.label,Ne.amountScale,Ne.network,Ne.commitment],Nl=[G.acpBearerToken,G.openboxApiKey],Ul=["Visible Worker [vars] for ACP, Web3, x402, OpenBOX, and Solana Pay.","Worker secrets for ACP bearer auth and OpenBOX API access."].join(" "),Ue=n((e,t)=>String(e[t]||"").trim(),"readEnvString"),Qr=n((e,t)=>{let r=Ue(e,G.sellerId);if(r)return r;try{return new URL(t).host}catch{return"knowgrph-seller"}},"readAgenticCommerceSellerId");var Zr=n(e=>{let t=Ue(e,G.web3Enabled).toLowerCase();return t?t==="0"||t==="false"||t==="no"?!1:t==="1"||t==="true"||t==="yes":!0},"isAgenticCommerceWeb3Enabled");var at=n(e=>String(e||"").trim().replace(/\/+$/g,""),"normalizeAgenticCommerceBaseUrl"),ue=n((e,t)=>`${at(e)}${t}`,"buildAgenticCommerceUrl"),re=n((e,t,r,o,a=o.startsWith("/")?o:null)=>({id:t,label:r,value:o,path:a,semanticKey:ke("mainpanel-commerce-readiness-row",[e,t,r,o,a||""])}),"buildAgenticCommerceMainPanelReadinessRow"),Je=n((e,t,r)=>({id:e,title:t,rows:r}),"buildAgenticCommerceMainPanelReadinessSection"),Na=n(()=>{let e=[Je("overview","Overview",[re("overview","acp-discovery","ACP discovery",`GET ${I.acpDiscovery}`,I.acpDiscovery),re("overview","acp-config","ACP config",`GET ${I.acpConfig}`,I.acpConfig),re("overview","api-version","API version",nt,null)]),Je("discovery","Discovery",[re("discovery","ucp-profile","UCP profile",I.ucpProfile),re("discovery","mpp-openapi","MPP OpenAPI",I.mppOpenApi),re("discovery","x402-payment-required","x402 payment required",I.x402PaymentRequired),re("discovery","x402-api-root","x402 API root",I.x402ApiRoot)]),Je("sessions","Sessions",[re("sessions","checkout-sessions","Checkout sessions",I.checkoutSessions),re("sessions","stripe-webhook","Stripe webhook",_t.webhook)]),Je("web3","Web3",[re("web3","settle","Settle",I.web3Settle),re("web3","solana-pay-settle","Solana Pay settle",I.solanaPaySettle),re("web3","signals","Signals","Base RPC + Solana RPC confirmation",null)]),Je("governance","Governance",[re("governance","openbox-ingest","OpenBOX ingest",I.openboxIngest),re("governance","risk-source","Risk source","OpenBOX risk signal",null)]),Je("proofs","Proofs",[re("proofs","harness-proof","Harness proof",I.commerceProofArtifact),re("proofs","trace-artifact","Trace artifact",I.commerceTraceArtifact)])],t=e.flatMap(a=>a.rows),r=t.map(a=>a.path||"").filter(a=>a.length>0),o=t.filter(a=>!a.path).map(a=>`${a.label}: ${a.value}`);return{surface:"mainpanel-commerce",semanticKey:ke("mainpanel-commerce-readiness",[nt,...t.map(a=>a.semanticKey)]),sections:e,routePaths:r,routeCount:r.length,signals:o}},"buildAgenticCommerceMainPanelReadiness"),Ll=Na(),eo=n((e,t)=>{let r=Ue(e,G.web3DepositAddress);if(/^0x[0-9a-fA-F]{40}$/.test(r))return r;let o=ke("deposit-address",[t,"0"]),a=ke("deposit-address",[t,"1"]),s=ke("deposit-address",[t,"2"]),i=ke("deposit-address",[t,"3"]),c=ke("deposit-address",[t,"4"]);return`0x${o}${a}${s}${i}${c}`.slice(0,42)},"buildAgenticCommerceDepositAddress");var to=n((e,t=Xr)=>{let r=Ue(e,G.x402PayToAddress);return/^0x[0-9a-fA-F]{40}$/.test(r)&&r.toLowerCase()!==Oa?r:eo(e,t)},"readAgenticCommerceX402PayToAddress"),Kl=eo({},Xr),Ua=/^[a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,64}$/,ro=n(e=>{let t=Ue(e,G.x402Network);return Ua.test(t)?t:Jr},"readAgenticCommerceX402Network"),oo=n(e=>Ue(e,G.x402Asset)||Yr,"readAgenticCommerceX402Asset"),no=n(e=>{let t=Ue(e,G.x402Amount);return/^[1-9][0-9]*$/.test(t)?t:Vr},"readAgenticCommerceX402Amount");var ao=n(e=>{let t=Ue(e,G.x402FacilitatorUrl);try{let r=new URL(t||Qt);return r.protocol==="https:"||r.protocol==="http:"?r.toString().replace(/\/+$/g,""):Qt}catch{return Qt}},"readAgenticCommerceX402FacilitatorUrl"),so=n(e=>{let t=at(e.baseUrl);return{protocol:{name:"acp",version:nt,supported_versions:[nt],documentation_url:"https://agenticcommerce.dev"},api_base_url:t,transports:[...Ma],capabilities:{services:[...Ia],...e.web3Enabled?{extensions:[{name:"x-web3"}]}:{}},links:{config:ue(t,I.acpConfig),ucp:ue(t,I.ucpProfile),mpp:ue(t,I.mppOpenApi),x402:ue(t,I.x402PaymentRequired)}}},"buildAgenticCommerceAcpDiscovery"),io=n(e=>{let t=at(e.baseUrl),r={acp:ue(t,I.acpDiscovery),api:ue(t,I.x402ApiRoot),checkout_sessions:ue(t,I.checkoutSessions),mpp_openapi:ue(t,I.mppOpenApi),proof:ue(t,I.commerceProofArtifact),trace:ue(t,I.commerceTraceArtifact),x402_payment_required:ue(t,I.x402PaymentRequired),solana_pay_settle:ue(t,I.solanaPaySettle)},o={checkout_sessions:!0,content_payments:!0,proof_artifacts:!0,risk_signals:!0,web3_settlement:e.web3Enabled,solana_pay:e.web3Enabled},a={"dev.ucp.shopping":[{version:Ye,spec:qr,transport:"rest",endpoint:r.api,schema:"https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json"}]};return{ucp:{version:Ye,protocol_version:Ye,services:a,capabilities:{"dev.ucp.shopping.checkout":[{version:Ye,spec:"https://ucp.dev/2026-04-08/specification/checkout/",schema:"https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"}]},payment_handlers:{},endpoints:r},protocol_version:Ye,protocol:{name:"ucp",version:Ye},seller:{id:e.sellerId},services:[{id:"knowgrph-content-payments",type:"content-payments",endpoints:{x402:r.x402_payment_required,checkout_sessions:r.checkout_sessions,solana_pay_settle:r.solana_pay_settle,proof:r.proof,trace:r.trace}}],capabilities:o,endpoints:r,spec_urls:[qr],schema_urls:["https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json","https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"]}},"buildAgenticCommerceUcpProfile"),co=n(e=>{let t=at(e.baseUrl);return{openapi:"3.1.0",info:{title:"Knowgrph Machine Payment Protocol",version:nt,description:"Machine-readable payable-operation discovery for Knowgrph commerce routes."},servers:[{url:t}],paths:{[I.x402PaymentRequired]:{get:{operationId:"getKnowgrphX402PaymentRequirement",summary:"Return x402 payment requirements for an agent-readable paid resource.","x-payment-info":{intent:"charge",method:"x402",amount:va,currency:"usdc"},responses:{402:{description:"Payment Required"}}}},[I.checkoutSessions]:{post:{operationId:"createKnowgrphCommerceCheckoutSession",summary:"Create an agentic commerce checkout session.","x-payment-info":{intent:"session",method:"stripe",amount:"dynamic",currency:"request.currency"},responses:{201:{description:"Checkout session created"}}}},[I.solanaPaySettle]:{post:{operationId:"settleKnowgrphSolanaPayCheckoutSession",summary:"Settle an agentic commerce checkout session from a verified Solana Pay transaction signature.","x-payment-info":{intent:"settlement",method:Fr,amount:"dynamic",currency:"request.currency"},responses:{200:{description:"Solana Pay session settled"},409:{description:"Solana Pay transaction is not confirmed yet"},422:{description:"Solana Pay transaction does not match the session"}}}}}}},"buildAgenticCommerceMppOpenApi"),lo=n(e=>{let t=at(e.baseUrl),r=ue(t,I.x402PaymentRequired),o=String(e.amount||Vr);return{x402Version:2,error:"Payment required",resource:{url:r,description:"Knowgrph agentic commerce paid-resource readiness probe",mimeType:"application/json"},accepts:[{scheme:"exact",network:String(e.network||Jr),amount:o,maxAmountRequired:o,asset:String(e.asset||Yr),resource:r,mimeType:"application/json",payTo:e.payTo,maxTimeoutSeconds:300,extra:{name:"USDC",version:"2",resourceUrl:r,...e.facilitatorUrl?{facilitatorUrl:e.facilitatorUrl}:{}}}]}},"buildAgenticCommerceX402PaymentRequired");var La=n(e=>JSON.stringify(e,null,2),"jsonBody"),Ka=n(e=>String(e||"").trim().replace(/\/+$/g,""),"trimOrigin"),Da=n(e=>typeof btoa=="function"?btoa(e):typeof Buffer<"u"?Buffer.from(e).toString("base64"):"","encodeBase64"),$a=n((e,t)=>{try{return new URL(e).origin}catch{return Ka(t)}},"rootOriginFromRequest"),Zt=n((e={})=>{let t=$a(e.requestUrl,e.origin),r=e.env||{},o=Qr(r,`${t}/`),a=Zr(r),s=lo({baseUrl:t,payTo:to(r),network:ro(r),asset:oo(r),amount:no(r),facilitatorUrl:ao(r)});return{acpDiscovery:so({sellerId:o,baseUrl:t,web3Enabled:a}),ucpProfile:io({sellerId:o,baseUrl:t,web3Enabled:a}),mppOpenApi:co({baseUrl:t}),x402PaymentRequired:s}},"buildKnowgrphCommerceDiscovery");var po=n((e,t={})=>{let r=Zt({requestUrl:e?.url,env:t}).x402PaymentRequired,o=Da(JSON.stringify(r));return new Response(La(r),{status:402,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*",...o?{"payment-required":o}:{}}})},"buildKnowgrphX402PaymentRequiredResponse");async function uo(e){return po(e.request,e.env||{})}n(uo,"onRequest");async function mo(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=t.headers.get("origin")||"";return r==="OPTIONS"?Ve(t):r!=="GET"&&r!=="HEAD"?_e({ok:!1,error:"Method not allowed"},{status:405,origin:o}):_e({ok:!0,models:Jt.map(a=>({model:a,display_name:a}))},{status:200,origin:o})}n(mo,"onRequest");async function ho(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(o==="OPTIONS")return Ve(t);if(o!=="POST")return _e({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return _e({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await wt(t);return await St({request:t,env:r,pathname:"/responses",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return _e({ok:!1,error:i},{status:400,origin:a})}}n(ho,"onRequest");var Xe=Object.freeze({researchSourceFiles:"knowgrph_research_source_files",inspectAgentSurface:"knowgrph_inspect_agent_surface"}),er=n(e=>String(e||"").trim(),"normalizeString"),Ha=n(e=>({...e,arguments:Array.isArray(e.arguments)?e.arguments.map(t=>({...t})):void 0,_meta:e._meta&&typeof e._meta=="object"?{...e._meta,tools:Array.isArray(e._meta.tools)?[...e._meta.tools]:void 0}:void 0}),"clonePrompt"),fo=Object.freeze([Object.freeze({name:Xe.researchSourceFiles,title:"Research Knowgrph Source Files",description:"Guide an MCP host through read-only Knowgrph Source Files research using search and fetch with citation-ready URLs.",arguments:Object.freeze([Object.freeze({name:"query",description:"Research question or topic to pass to the read-only search tool.",required:!0}),Object.freeze({name:"limit",description:"Optional decimal string for the maximum search results to inspect.",required:!1}),Object.freeze({name:"focus",description:"Optional aspect to prioritize when reading fetched Source Files.",required:!1})]),_meta:Object.freeze({readOnly:!0,tools:Object.freeze(["search","fetch"])})}),Object.freeze({name:Xe.inspectAgentSurface,title:"Inspect Knowgrph Agent Surface",description:"Guide an MCP host through read-only inspection of Knowgrph agent, MCP, and MCP Apps readiness metadata.",arguments:Object.freeze([Object.freeze({name:"focus",description:"Optional readiness area to emphasize, such as transport, tools, resources, prompts, retrieval, or app metadata.",required:!1})]),_meta:Object.freeze({readOnly:!0,tools:Object.freeze(["inspect_agent_surface"])})})]),yo=n(()=>fo.map(Ha),"buildKnowgrphAgentReadyPromptContracts"),ja=n(e=>fo.find(t=>t.name===er(e))||null,"findPromptContract"),At=n((e,t)=>!e||typeof e!="object"?"":er(e[t]),"readPromptArg"),Ga=n((e,t)=>{let r=At(e,t);if(!r)throw new Error(`Missing required prompt argument: ${t}`);return r},"readRequiredPromptArg"),go=n(e=>({role:"user",content:{type:"text",text:e}}),"buildPromptMessage"),Ba=n((e={})=>{let t=Ga(e,"query"),r=At(e,"limit"),o=At(e,"focus");return[`Research Knowgrph Source Files for: ${t}`,"","Use the MCP server read-only retrieval path:",`1. Call search with query=${JSON.stringify(t)}${r?` and limit=${JSON.stringify(r)}`:""}.`,"2. Select the most relevant returned ids and call fetch for each id before answering.","3. Ground the answer in fetched markdown content and cite the returned result URLs when summarizing.",o?`4. Prioritize this focus: ${o}.`:"","","Do not mutate graph, canvas, workspace, storage, or browser-local state for this research prompt."].filter(Boolean).join(`
`)},"buildSourceFilesResearchPromptText"),Wa=n((e={})=>{let t=At(e,"focus");return["Inspect the Knowgrph agent-ready surface through the read-only inspect_agent_surface tool.","","Review health, API catalog, MCP server card, A2A card, agent skills, commerce discovery, and mcpAppsServerReadiness.","For MCP Apps readiness, verify tool/resource linkage, output schema, text fallback, structured content, sandbox/security metadata, no-auth security-scheme mirroring, widget accessibility, prompts, search/fetch retrieval, Streamable HTTP, and local stdio support.",t?`Emphasize this readiness area: ${t}.`:"","","Report checklist ids and evidence from structuredContent. Do not infer readiness from prose alone."].filter(Boolean).join(`
`)},"buildAgentSurfaceInspectionPromptText"),wo=n((e,t={})=>{let r=ja(e);if(!r)throw new Error(`Unknown Knowgrph MCP prompt: ${er(e)}`);if(r.name===Xe.researchSourceFiles)return{description:r.description,messages:[go(Ba(t))]};if(r.name===Xe.inspectAgentSurface)return{description:r.description,messages:[go(Wa(t))]};throw new Error(`Unhandled Knowgrph MCP prompt: ${r.name}`)},"getKnowgrphAgentReadyPrompt");var Fa=Object.freeze({sourceFileById:"knowgrph_source_file_by_id"}),Pt="kgdoc://source-file/{id}",So="kgdoc://source-file/",_o="text/markdown",st=n(e=>String(e||"").trim(),"normalizeString"),bo=n(()=>[{uriTemplate:Pt,name:Fa.sourceFileById,title:"Knowgrph Source File By ID",description:"Read a complete published Knowgrph Source File markdown document using a stable kgdoc id returned by search.",mimeType:_o,annotations:{audience:["user","assistant"],priority:.8},_meta:{readOnly:!0,source:"knowgrph-source-files",tool:"fetch"}}],"buildKnowgrphAgentReadyResourceTemplateContracts");var Ao=n(e=>{let t=st(e);if(!t.startsWith(So))return"";let r=t.slice(So.length);if(!r)return"";try{return decodeURIComponent(r)}catch{return r}},"parseKnowgrphSourceFileResourceUri"),Po=n(({uri:e,sourceFile:t}={})=>{let r=typeof t?.content=="string"?t.content:String(t?.text||"");return{contents:[{uri:st(e),mimeType:_o,text:r,_meta:{id:st(t?.id),title:st(t?.title),url:st(t?.url),metadata:t?.metadata&&typeof t.metadata=="object"?{...t.metadata}:{}}}]}},"buildKnowgrphSourceFileResourceReadResult");var Rt="io.modelcontextprotocol/ui",je="text/html;profile=mcp-app",Co="2026-01-26",za="knowgrph-mcp-apps-server-readiness/v0.1",de="ui://knowgrph/agent-ready",or="knowgrph-agent-ready",Ge="inspect_agent_surface",be=Object.freeze(["search","fetch"]),tr=Object.freeze({search:Object.freeze(["ids"]),fetch:Object.freeze(["id","title","content","text"])}),Ro=Object.freeze(Object.values(Xe)),Ce="streamable-http",qa=Object.freeze([Object.freeze({type:"noauth"})]),ae=Object.freeze({openAiApps:"openai-apps",claude:"claude-mcp-connector",qwenCode:"qwen-code",kimiCli:"kimi-cli",bytePlusModelArk:"byteplus-modelark",generic:"generic-mcp"}),H=n(e=>String(e||"").trim(),"normalizeString"),Qe=n(e=>H(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),"escapeHtml"),Va=n(e=>JSON.stringify(e).replace(/</g,"\\u003c"),"safeJsonForInlineScript"),Ya=n(e=>{let t=H(e);if(!t)return"";try{return new URL(t).origin}catch{return""}},"readUrlOrigin"),nr=n(()=>({extensions:{[Rt]:{mimeTypes:[je]}}}),"buildKnowgrphMcpAppsCapabilities"),oe=n(e=>Array.isArray(e)?e:[],"arrayFrom"),ar=n(()=>qa.map(e=>({...e})),"buildKnowgrphMcpNoauthSecuritySchemes"),To=n(e=>(Array.isArray(e)&&e.length?e:ar()).filter(r=>r&&typeof r=="object").map(r=>({...r})),"normalizeSecuritySchemes"),ko=n(e=>oe(e).some(t=>t?.type==="noauth"),"hasNoauthSecurityScheme"),xo=n(e=>Array.isArray(e)?To(e):[],"readSecuritySchemes"),Ja=n(e=>{let t=H(e);return t.includes("window.openai")&&t.includes("openai:set_globals")&&t.includes("toolInput")&&t.includes("toolOutput")&&t.includes("callTool")&&t.includes("request('ui/initialize'")},"hasOpenAiWidgetBridgeHtml"),Eo=n((e,t=[])=>e?.outputSchema?.type==="object"&&t.every(r=>oe(e.outputSchema?.required).includes(r)),"hasToolOutputSchemaFields"),rr=n(e=>e?.annotations?.readOnlyHint===!0&&e?.annotations?.destructiveHint===!1&&e?.annotations?.openWorldHint===!1&&e?.annotations?.idempotentHint===!0,"hasReadOnlyToolAnnotations"),J=n((e,t,r,o=[])=>({id:e,label:t,ok:r===!0,evidence:oe(o).map(H).filter(Boolean)}),"booleanCheck"),sr=n((e={})=>{let t=H(e.baseUrl).replace(/\/+$/,""),r=H(e.serverName)||"knowgrph",o=H(e.mcpUrl)||(t?`${t}/mcp`:"");return{[ae.openAiApps]:{id:ae.openAiApps,label:"OpenAI Apps / ChatGPT",transport:Ce,url:o,appResourceUri:de,appToolName:Ge,requiredMetadata:["openai/outputTemplate","openai/widgetAccessible","openai/widgetCSP","openai/widgetDomain"],requiredTools:[Ge,...be]},[ae.claude]:{id:ae.claude,label:"Claude MCP connector",transport:Ce,url:o,beta:"mcp-client-2025-11-20",mcp_servers:[{type:"url",url:o,name:r}],tools:[{type:"mcp_toolset",mcp_server_name:r}],requiredTools:be},[ae.qwenCode]:{id:ae.qwenCode,label:"Qwen Code",transport:"http",url:o,command:`qwen mcp add --transport http ${r} ${o}`,settingsJson:{mcpServers:{[r]:{httpUrl:o,timeout:3e4,trust:!1,includeTools:["search","fetch",Ge]}}},requiredTools:be,primaryFlow:"Call search with a natural-language query, then call fetch with the returned kgdoc id."},[ae.kimiCli]:{id:ae.kimiCli,label:"Kimi CLI",transport:"http",url:o,command:`kimi mcp add --transport http ${r} ${o}`,configFile:"~/.kimi/mcp.json",mcpJson:{mcpServers:{[r]:{url:o,transport:"http"}}},requiredTools:be,primaryFlow:"Call search with a natural-language query, then call fetch with the returned kgdoc id."},[ae.bytePlusModelArk]:{id:ae.bytePlusModelArk,label:"BytePlus ModelArk Responses API",transport:Ce,url:o,apiBaseUrl:"https://ark.ap-southeast.bytepluses.com/api/v3",endpoint:"/responses",requiredHeaders:{"ark-beta-mcp":"true"},tools:[{type:"mcp",server_label:r,server_url:o,require_approval:"never"}],openAiCompatible:{base_url:"https://ark.ap-southeast.bytepluses.com/api/v3",default_headers:{"ark-beta-mcp":"true"},responsesCreate:{model:"<MODELARK_MODEL_OR_ENDPOINT_ID>",tools:[{type:"mcp",server_label:r,server_url:o,require_approval:"never"}]}},invocationScope:"ModelArk Responses API with MCP service and model permissions enabled.",requiredTools:be,primaryFlow:"Use ModelArk Responses API with the Knowgrph MCP tool entry, then ask the model to call search and fetch."},[ae.generic]:{id:ae.generic,label:"Generic MCP clients",transport:Ce,url:o,initialize:{method:"initialize",accept:["application/json","text/event-stream"]},requiredMethods:["initialize","notifications/initialized","tools/list","tools/call"],optionalMethods:["prompts/list","prompts/get","resources/list","resources/templates/list","resources/read"],requiredTools:be}}},"buildKnowgrphMcpClientSetups"),vo=n((e={})=>{let t=H(e.baseUrl).replace(/\/+$/,""),r=H(e.updatedAt),o=e.mcpServerCard&&typeof e.mcpServerCard=="object"?e.mcpServerCard:{},a=o.capabilities&&typeof o.capabilities=="object"?o.capabilities:{},s=oe(e.tools).length?oe(e.tools):oe(a.tools),i=oe(e.resources).length?oe(e.resources):[kt({appUrl:t,updatedAt:r})],c=oe(e.prompts).length?oe(e.prompts):oe(o.prompts),l=oe(e.resourceTemplates).length?oe(e.resourceTemplates):oe(o.resourceTemplates),p=s.filter(S=>S?._meta?.ui?.resourceUri===de),m=p.find(S=>S?.name===Ge)||p[0]||null,f=i.find(S=>S?.uri===de)||null,P=a.extensions?.[Rt],_=H(o.transport?.url)||(t?`${t}/mcp`:""),T=H(o.surfaceRoles?.publicReadMcpUrl)||_,M=H(o.surfaceRoles?.controlPlaneMcpUrl)||(t?`${t}/control-plane/mcp`:""),U=H(o.transport?.type)||Ce,B=H(e.appResourceHtml)||Mo({appUrl:t,updatedAt:r,toolName:m?.name||Ge}),X=e.clientSetups&&typeof e.clientSetups=="object"?e.clientSetups:sr({baseUrl:t,mcpUrl:_,serverName:o.serverInfo?.name}),F=m?.outputSchema&&typeof m.outputSchema=="object",x=!!m?.name,v=F,ee=m?._meta?.["openai/outputTemplate"]===de,j=Ja(B),ie=ko(m?.securitySchemes)&&ko(m?._meta?.securitySchemes),L=rr(m),K=m?._meta?.["openai/widgetAccessible"]===!0,V=c.map(S=>H(S?.name)).filter(Boolean),ne=o.capabilities?.prompts&&typeof o.capabilities.prompts=="object",Se=Ro.every(S=>V.includes(S)),Re=l.map(S=>H(S?.uriTemplate)).filter(Boolean),R=Re.includes(Pt),w=Object.fromEntries(be.map(S=>[S,s.find(q=>q?.name===S)||null])),y=be.every(S=>{let q=w[S];return rr(q)&&Eo(q,tr[S])}),d=X[ae.qwenCode],g=d?.transport==="http"&&d?.url===_&&d?.settingsJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.httpUrl===_&&String(d?.command||"").includes("--transport http")&&String(d?.command||"").includes(_),h=X[ae.kimiCli],A=h?.transport==="http"&&h?.url===_&&h?.mcpJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.url===_&&h?.mcpJson?.mcpServers?.[o.serverInfo?.name||"knowgrph"]?.transport==="http"&&String(h?.command||"").includes("kimi mcp add --transport http")&&String(h?.command||"").includes(_),E=X[ae.bytePlusModelArk],z=E?.transport===Ce&&E?.url===_&&E?.endpoint==="/responses"&&E?.requiredHeaders?.["ark-beta-mcp"]==="true"&&oe(E?.tools).some(S=>S?.type==="mcp"&&S?.server_label===(o.serverInfo?.name||"knowgrph")&&S?.server_url===_&&S?.require_approval==="never")&&E?.openAiCompatible?.responsesCreate?.tools?.some(S=>S?.type==="mcp"&&S?.server_label===(o.serverInfo?.name||"knowgrph")&&S?.server_url===_&&S?.require_approval==="never"),$=[J("app-tool-resource-link","App tool is linked to the UI resource",p.length>0,p.map(S=>S.name)),J("output-schema","App tool exposes an output schema",F,[m?.name]),J("text-fallback","Tool result keeps a text fallback for non-UI hosts",x,[m?.name]),J("structured-content","Tool result returns structured content for the View",v,[m?.name]),J("resource-descriptor","MCP resource descriptor uses the MCP Apps MIME type",f?.mimeType===je,[f?.uri]),J("resource-security-meta","Resource declares UI sandbox metadata",f?._meta?.ui?.prefersBorder===!0&&!!f?._meta?.ui?.csp,[f?.uri]),J("openai-output-template","App tool exposes the OpenAI output template metadata key",ee,[m?.name]),J("openai-widget-bridge","App resource supports the OpenAI Apps widget bridge",j,["window.openai","openai:set_globals"]),J("tool-security-schemes","App tool exposes no-auth securitySchemes and mirrors them in _meta",ie,[m?.name]),J("tool-impact-annotations","App tool exposes complete read-only impact annotations",L,[m?.name]),J("widget-accessible","App tool allows the widget bridge to call tools",K,[m?.name]),J("prompt-discovery","Server exposes MCP prompt templates for multi-host guidance",ne&&Se,V),J("source-file-resource-template","Server exposes a dynamic Source Files resource template",R,Re),J("deep-research-search-fetch","Server exposes read-only search and fetch tools",y,be),J("qwen-code-http-client-setup","Server advertises Qwen Code HTTP MCP setup",g,[d?.command]),J("kimi-cli-http-client-setup","Server advertises Kimi CLI HTTP MCP setup",A,[h?.command]),J("byteplus-modelark-responses-mcp-setup","Server advertises BytePlus ModelArk Responses API MCP setup",z,[E?.apiBaseUrl,E?.endpoint]),J("extension-capability","Server advertises the MCP Apps extension capability",P?.mimeTypes?.includes(je),[Rt]),J("streamable-http-transport","Server exposes a stateless Streamable HTTP JSON-RPC transport",!!_&&U===Ce,[_,U]),J("stdio-transport","Repo-local MCP server supports stdio host configuration",e.localStdio!==!1,["node mcp/server.js"])],D=$.every(S=>S.ok);return{schemaVersion:za,ready:D,updatedAt:r,app:{name:or,protocolVersion:Co,resourceUri:de,resourceMimeType:je,extensionId:Rt},tool:{name:m?.name||Ge,title:m?.title||"Inspect Agent Surface",resourceUri:m?._meta?.ui?.resourceUri||de,visibility:oe(m?._meta?.ui?.visibility).length?m._meta.ui.visibility:["model","app"],readOnly:m?.annotations?.readOnlyHint===!0,destructive:m?.annotations?.destructiveHint===!0,openWorld:m?.annotations?.openWorldHint===!0,idempotent:m?.annotations?.idempotentHint===!0,annotationsReady:L,hasOutputSchema:!!F,textFallback:x,structuredContent:v,openAiOutputTemplate:ee,openAiWidgetBridge:j,securitySchemes:xo(m?.securitySchemes),mirroredSecuritySchemes:xo(m?._meta?.securitySchemes),widgetAccessible:K},resource:{uri:f?.uri||de,name:f?.name||or,mimeType:f?.mimeType||je,prefersBorder:f?._meta?.ui?.prefersBorder===!0,domain:H(f?._meta?.ui?.domain),csp:f?._meta?.ui?.csp||{},openAiWidgetBridge:j},retrieval:{mode:"deep-research-search-fetch",requiredTools:be,tools:be.map(S=>{let q=w[S];return{name:S,readOnly:q?.annotations?.readOnlyHint===!0,destructive:q?.annotations?.destructiveHint===!0,openWorld:q?.annotations?.openWorldHint===!0,idempotent:q?.annotations?.idempotentHint===!0,annotationsReady:rr(q),requiredOutputFields:tr[S],outputSchemaReady:Eo(q,tr[S])}})},prompts:{requiredPrompts:Ro,names:V,capability:!!ne,ready:ne&&Se},resourceTemplates:{requiredTemplates:[Pt],uriTemplates:Re,ready:R},clients:X,transports:[{id:"pages-http-jsonrpc",type:U,url:_,stateless:!0,serverFactory:!0},{id:"local-stdio-jsonrpc",type:"stdio",command:"node mcp/server.js",stateless:!1,serverFactory:!0}],dataModel:{source:"inspect_agent_surface.structuredContent",categories:[{id:"discovery",label:"Discovery metadata",count:["health","apiCatalog","openApi","mcpServerCard","agentCard","agentSkills"].length},{id:"commerce",label:"Commerce discovery",count:["acpDiscovery","ucpProfile","mppOpenApi"].length},{id:"mcp-apps",label:"MCP Apps server bindings",count:$.length}],renderMode:"structured-summary-with-json-fallback"},onboarding:{publicReadMcpUrl:T,controlPlaneMcpUrl:M,controlPlaneCondition:"Add the control plane only when the host can preserve MCP session state and needs live /, #, @ grammar lookup.",cheapestProofPath:"Use the source-side README.md quick start or docs/documents/knowgrph-superagent-harness.md in the knowgrph repo before hosted setup.",steps:[{order:1,label:"Install public MCP first",action:T?`Install ${T}.`:"Install the public read-only MCP endpoint first."},{order:2,label:"Add control plane only when session-capable",action:M?`Add ${M} only when the host can preserve MCP session state and needs live /, #, @ grammar lookup.`:"Add the control plane only when the host can preserve MCP session state and needs live /, #, @ grammar lookup."},{order:3,label:"Use the cheapest proof path before hosted setup",action:"Run the source-side README.md quick start or docs/documents/knowgrph-superagent-harness.md first."}]},checklist:$}},"buildKnowgrphMcpAppsServerReadiness"),Oo=n((e={})=>{let t=H(e.resourceUri)||de;return{securitySchemes:To(e.securitySchemes),ui:{resourceUri:t,visibility:Array.isArray(e.visibility)&&e.visibility.length?e.visibility:["model","app"]},"openai/outputTemplate":t,"openai/widgetAccessible":e.widgetAccessible!==!1,"openai/toolInvocation/invoking":H(e.invoking)||"Inspecting Knowgrph.","openai/toolInvocation/invoked":H(e.invoked)||"Knowgrph is ready."}},"buildKnowgrphMcpAppsToolMeta"),Io=Object.freeze({type:"object",additionalProperties:!0,required:["baseUrl","healthUrl","mcpUrl"],properties:{baseUrl:{type:"string"},healthUrl:{type:"string"},mcpUrl:{type:"string"},apiCatalogUrl:{type:"string"},openApiUrl:{type:"string"},mcpServerCardUrl:{type:"string"},agentCardUrl:{type:"string"},agentSkillsUrl:{type:"string"},commerceUrls:{type:"object",additionalProperties:{type:"string"}},health:{type:"object",additionalProperties:!0},apiCatalog:{type:"object",additionalProperties:!0},openApi:{type:"object",additionalProperties:!0},mcpServerCard:{type:"object",additionalProperties:!0},agentCard:{type:"object",additionalProperties:!0},agentSkills:{type:"object",additionalProperties:!0},commerce:{type:"object",additionalProperties:!0},mcpAppsServerReadiness:{type:"object",additionalProperties:!0}}}),kt=n((e={})=>{let t=H(e.appUrl),r=H(e.updatedAt),o=H(e.domain)||Ya(t),a={connectDomains:[],resourceDomains:[],frameDomains:[],baseUriDomains:[]};return{uri:de,name:or,description:["Interactive MCP Apps view for the existing Knowgrph agent-ready surface.",t?`App URL: ${t}`:"",r?`Updated: ${r}`:""].filter(Boolean).join(" "),mimeType:je,_meta:{ui:{csp:a,...o?{domain:o}:{},prefersBorder:!0},"openai/widgetDescription":"Interactive Knowgrph agent-ready server-readiness view.","openai/widgetPrefersBorder":!0,...o?{"openai/widgetDomain":o}:{},"openai/widgetCSP":{connect_domains:a.connectDomains,resource_domains:a.resourceDomains,frame_domains:a.frameDomains}}}},"buildKnowgrphMcpAppsResourceDescriptor"),Mo=n((e={})=>{let t=H(e.appUrl),r=H(e.updatedAt),o=H(e.toolName)||Ge,a=t?`${t.replace(/\/+$/,"")}/mcp`:"",s=t?`${t.replace(/\/+$/,"")}/control-plane/mcp`:"",i=Array.isArray(e.toolNames)?e.toolNames.map(H).filter(Boolean):[o],c={appUrl:t,updatedAt:r,resourceUri:de,toolName:o,toolNames:i,protocolVersion:Co,onboarding:{publicReadMcpUrl:a,controlPlaneMcpUrl:s,cheapestProofPath:"Use the source-side README.md quick start or docs/documents/knowgrph-superagent-harness.md before hosted setup."}};return`<!doctype html>
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
        ${t?`<a href="${Qe(t)}" target="_blank" rel="noreferrer">Open</a>`:""}
      </nav>
    </header>
    <section aria-label="MCP app state">
      <dl>
        <dt>Resource</dt><dd>${Qe(de)}</dd>
        <dt>Tool</dt><dd>${Qe(o)}</dd>
        <dt>Host</dt><dd id="host">Not connected.</dd>
        <dt>Updated</dt><dd>${Qe(r||"runtime")}</dd>
        <dt>Status</dt><dd id="status" class="status">Initializing MCP Apps host bridge.</dd>
      </dl>
    </section>
    <section aria-label="Fastest path">
      <section id="onboarding" class="readiness">
        <strong>Fastest Path</strong>
        <ol>
          <li>${Qe(a?`Install ${a}.`:"Install the public MCP endpoint first.")}</li>
          <li>${Qe(s?`Add ${s} only when the host can preserve MCP session state and needs live /, #, @ grammar lookup.`:"Add the control plane only when the host can preserve MCP session state and needs live /, #, @ grammar lookup.")}</li>
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
    const boot = ${Va(c)};
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
</html>`},"buildKnowgrphMcpAppsHtml"),ir=n((e={})=>{let t=kt(e);return{contents:[{uri:t.uri,mimeType:je,text:Mo(e),_meta:t._meta}]}},"buildKnowgrphMcpAppsResourceReadResult");var u=Object.freeze({search:"search",fetch:"fetch",listSourceFiles:"list_source_files",readSourceFile:"read_source_file",readSharedDocument:"read_shared_document",inspectSharedDocumentStructure:"inspect_shared_document_structure",inspectLocalSettingsChatReadiness:"inspect_local_settings_chat_readiness",inspectLocalMainPanelState:"inspect_local_mainpanel_state",inspectLocalEditorWorkspaceState:"inspect_local_editor_workspace_state",inspectLocalChatPipelineState:"inspect_local_chat_pipeline_state",inspectLocalMainPanelChatCanvasPipeline:"inspect_local_mainpanel_chat_canvas_pipeline",inspectLocalWorkspaceDocument:"inspect_local_workspace_document",inspectLocalCanvasTopology:"inspect_local_canvas_topology",inspectLocalCanvasSnapshot:"inspect_local_canvas_snapshot",inspectLocal3dCameraPose:"inspect_local_3d_camera_pose",inspectLocal3dLayoutPositions:"inspect_local_3d_layout_positions",inspectLocal2dZoomViewport:"inspect_local_2d_zoom_viewport",inspectLocalSourceFilesSnapshot:"inspect_local_source_files_snapshot",inspectAgentSurface:"inspect_agent_surface"}),Xa="knowgrph";var Qa=n(()=>Object.freeze({readOnlyHint:!0,destructiveHint:!1,openWorldHint:!1,idempotentHint:!0}),"buildReadOnlyToolAnnotations"),Q=Qa(),Za=Object.freeze({type:"object",additionalProperties:!0,required:["ids","results"],properties:{ids:{type:"array",items:{type:"string"}},results:{type:"array",items:{type:"object",additionalProperties:!0,required:["id","title","url"],properties:{id:{type:"string"},title:{type:"string"},url:{type:"string"},snippet:{type:"string"},workspaceId:{type:"string"},canonicalPath:{type:"string"}}}}}}),es=Object.freeze({type:"object",additionalProperties:!0,required:["id","title","content","text","url"],properties:{id:{type:"string"},title:{type:"string"},content:{type:"string"},text:{type:"string"},url:{type:"string"},metadata:{type:"object",additionalProperties:!0}}}),Z=n((e,t=Xa)=>`${String(t||"").trim()}.${String(e||"").trim()}`,"buildKnowgrphWebMcpToolName"),cr=n((e={})=>{let t=String(e.defaultWorkspaceId||"").trim(),r=e.includeBrowserOnlyTools===!0;return[{name:u.search,webName:Z(u.search),title:"Search Knowgrph Source Files",description:"Use this when an MCP host needs to search published Knowgrph Source Files and return stable document IDs for the `fetch` tool. Call this first for OpenAI Deep Research-style retrieval, Claude, Qwen Code, Kimi CLI, BytePlus ModelArk, and generic MCP clients.",inputSchema:{type:"object",additionalProperties:!1,required:["query"],properties:{query:{type:"string"},limit:{type:"number",default:10}}},outputSchema:Za,annotations:Q},{name:u.fetch,webName:Z(u.fetch),title:"Fetch Knowgrph Source File",description:"Use this when an MCP host needs the complete published Knowgrph Source File for an ID returned by `search`. Returns markdown as both `content` and `text` for OpenAI, Claude, Qwen Code, Kimi CLI, BytePlus ModelArk, and generic MCP clients.",inputSchema:{type:"object",additionalProperties:!1,required:["id"],properties:{id:{type:"string"}}},outputSchema:es,annotations:Q},{name:u.listSourceFiles,webName:Z(u.listSourceFiles),title:"List Source Files",description:"Use this when an MCP host needs the published Knowgrph Source Files index as markdown.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Q},{name:u.readSourceFile,webName:Z(u.readSourceFile),title:"Read Source File",description:"Use this when an MCP host knows a published Knowgrph canonical path and needs that Editor Workspace markdown content. Defaults to the canonical docs workspace when workspaceId is omitted.",inputSchema:{type:"object",additionalProperties:!1,required:["canonicalPath"],properties:{canonicalPath:{type:"string"},workspaceId:t?{type:"string",default:t}:{type:"string"}}},annotations:Q},{name:u.readSharedDocument,webName:Z(u.readSharedDocument),title:"Read Shared Document",description:"Use this when an MCP host has a Knowgrph share token or public Knowgrph share/document URL and needs the published markdown content.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:Q},{name:u.inspectSharedDocumentStructure,webName:Z(u.inspectSharedDocumentStructure),title:"Inspect Shared Document Structure",description:"Use this when an MCP host has a Knowgrph share token or public Knowgrph share/document URL and needs frontmatter/body structure without mutating the document.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:Q},...r?[{name:u.inspectLocalSettingsChatReadiness,webName:Z(u.inspectLocalSettingsChatReadiness),title:"Inspect Local Settings Chat Readiness",description:"Inspect the active browser-local Knowgrph SettingsView chat readiness state for MainPanel MCP, Integrations, and Commerce, including provider, routing, and model discovery status.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Q},{name:u.inspectLocalMainPanelState,webName:Z(u.inspectLocalMainPanelState),title:"Inspect Local MainPanel State",description:"Inspect the active browser-local Knowgrph MainPanel tab, search, and shared action state for MCP, Integrations, and Commerce readiness.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Q},{name:u.inspectLocalEditorWorkspaceState,webName:Z(u.inspectLocalEditorWorkspaceState),title:"Inspect Local Editor Workspace State",description:"Inspect the active browser-local Knowgrph Editor Workspace and Markdown pane state, including pane visibility and live draft/frontmatter structure.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Q},{name:u.inspectLocalChatPipelineState,webName:Z(u.inspectLocalChatPipelineState),title:"Inspect Local Chat Pipeline State",description:"Inspect the active browser-local Knowgrph FloatingPanel chat runtime, including streaming, workspace follow path, and LLM-to-workspace pipeline state.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Q},{name:u.inspectLocalMainPanelChatCanvasPipeline,webName:Z(u.inspectLocalMainPanelChatCanvasPipeline),title:"Inspect Local MainPanel Chat Canvas Pipeline",description:"Inspect the active browser-local Knowgrph E2E readiness path from MainPanel MCP, Integrations, and Commerce through FloatingPanel Chat, workspace markdown/frontmatter, and canvas topology.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Q},{name:u.inspectLocalWorkspaceDocument,webName:Z(u.inspectLocalWorkspaceDocument),title:"Inspect Local Workspace Document",description:"Inspect the active browser-local Knowgrph workspace markdown document structure without reading published storage routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Q},{name:u.inspectLocalCanvasTopology,webName:Z(u.inspectLocalCanvasTopology),title:"Inspect Local Canvas Topology",description:"Inspect the active browser-local Knowgrph canvas topology summary from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Q},{name:u.inspectLocalCanvasSnapshot,webName:Z(u.inspectLocalCanvasSnapshot),title:"Inspect Local Canvas Snapshot",description:"Inspect the active browser-local Knowgrph canvas SVG snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Q},{name:u.inspectLocal3dCameraPose,webName:Z(u.inspectLocal3dCameraPose),title:"Inspect Local 3D Camera Pose",description:"Inspect the active browser-local Knowgrph 3D camera pose from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Q},{name:u.inspectLocal3dLayoutPositions,webName:Z(u.inspectLocal3dLayoutPositions),title:"Inspect Local 3D Layout Positions",description:"Inspect the active browser-local Knowgrph 3D layout positions from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Q},{name:u.inspectLocal2dZoomViewport,webName:Z(u.inspectLocal2dZoomViewport),title:"Inspect Local 2D Zoom Viewport",description:"Inspect the active browser-local Knowgrph 2D zoom and viewport state from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Q},{name:u.inspectLocalSourceFilesSnapshot,webName:Z(u.inspectLocalSourceFilesSnapshot),title:"Inspect Local Source Files Snapshot",description:"Inspect the active browser-local Knowgrph Source Files runtime snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:Q}]:[],{name:u.inspectAgentSurface,webName:Z(u.inspectAgentSurface),title:"Inspect Agent Surface",description:"Use this when an MCP Apps-capable host or generic MCP client needs to inspect Knowgrph agent-ready discovery, MCP Apps readiness, OpenAPI, and skill metadata.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},outputSchema:Io,annotations:Q,_meta:Oo()}].map(a=>({...a,securitySchemes:Array.isArray(a.securitySchemes)&&a.securitySchemes.length?a.securitySchemes:ar()}))},"buildKnowgrphAgentReadyToolContracts");var No=n((e={})=>{let t=String(e.baseUrl||"").replace(/\/+$/,""),r=t?new URL(`${t}/`).origin:"";return{...{baseUrl:t,healthUrl:`${t}/health`,mcpUrl:`${t}/mcp`,controlPlaneMcpUrl:`${t}/control-plane/mcp`,apiCatalogUrl:`${t}/.well-known/api-catalog`,openApiUrl:`${t}/.well-known/openapi.json`,mcpServerCardUrl:`${t}/.well-known/mcp/server-card.json`,agentCardUrl:`${t}/.well-known/agent-card.json`,agentSkillsUrl:`${t}/.well-known/agent-skills/index.json`,commerceUrls:{acpDiscoveryUrl:`${r}/.well-known/acp.json`,ucpProfileUrl:`${r}/.well-known/ucp`,mppOpenApiUrl:`${r}/openapi.json`,x402PaymentRequiredUrl:`${r}/api/payments/commerce/x402`},health:e.health,apiCatalog:e.apiCatalog,openApi:e.openApi,mcpServerCard:e.mcpServerCard,agentCard:e.agentCard,agentSkills:e.agentSkills,commerce:e.commerce},mcpAppsServerReadiness:vo({baseUrl:t,updatedAt:e.updatedAt||e.health?.updatedAt||"",mcpServerCard:e.mcpServerCard})}},"buildAgentSurfaceInspectionPayload");var lr=n((e={})=>{let t=e.toolNames||{},r=String(e.defaultWorkspaceId||"").trim(),o=e.buildStorageDocPath,a=e.fetchSourceFilesIndexResponse,s=e.fetchStorageMarkdownResponse,i=e.resolveSharedDocumentInput,c=e.inspectSharedDocumentStructure,l=e.buildAgentSurfaceInspection,p=n(d=>String(d||"").trim(),"normalizeString"),m=p(e.publicBaseUrl).replace(/\/+$/,""),f=n(d=>String(d||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),P=n(d=>{try{return decodeURIComponent(String(d||""))}catch{return String(d||"")}},"safeDecodeURIComponent"),_=n(d=>{let g=p(d).split("/").filter(Boolean);return g[g.length-1]||p(d)||"Knowgrph Source File"},"titleFromCanonicalPath"),T=n((d,g=220)=>{let h=p(d).replace(/\s+/g," ");return h.length<=g?h:`${h.slice(0,g-1)}\u2026`},"truncateSnippet"),M=Math.max(0,Math.min(50,Number.isFinite(Number(e.searchContentScanMax))?Math.floor(Number(e.searchContentScanMax)):32)),U=Math.max(1e3,Math.min(5e4,Number.isFinite(Number(e.searchContentMaxChars))?Math.floor(Number(e.searchContentMaxChars)):24e3)),B=Math.max(1,Math.min(8,Number.isFinite(Number(e.searchContentConcurrency))?Math.floor(Number(e.searchContentConcurrency)):4)),X=new Set(["a","an","and","are","as","at","be","by","can","do","does","for","from","how","i","in","is","it","of","on","or","the","this","to","what","when","where","which","who","why","with"]),F=n(d=>p(d).toLowerCase().split(/[^a-z0-9:_./-]+/).map(p).filter(g=>g&&!X.has(g)),"tokenizeSearchQuery"),x=n((d,g)=>g.reduce((h,A)=>{let E=String(d||""),z=0,$=0;for(;$<E.length;){let D=E.indexOf(A,$);if(D<0)break;z+=1,$=D+Math.max(1,A.length)}return h+z},0),"countTokenHits"),v=n((d,g,h=260)=>{let A=p(d).replace(/\s+/g," ");if(!A)return"";let E=A.toLowerCase(),z=g.map(S=>E.indexOf(S)).filter(S=>S>=0).sort((S,q)=>S-q)[0];if(!Number.isFinite(z))return T(A,h);let $=Math.max(0,z-Math.floor(h/3)),D=Math.min(A.length,$+h);return`${$>0?"\u2026":""}${A.slice($,D)}${D<A.length?"\u2026":""}`},"snippetAroundSearchHit"),ee=n(async(d,g)=>{let h=new Array(d.length),A=0,E=Array.from({length:Math.min(B,d.length)},async()=>{for(;A<d.length;){let z=A;A+=1,h[z]=await g(d[z],z)}});return await Promise.all(E),h},"runBoundedConcurrent"),j=n(({workspaceId:d="",canonicalPath:g=""}={})=>{let h=o(p(g),p(d));return m?`${m}${h}`:h},"buildPublicDocUrl");if(!!(t.search||t.fetch||t.listSourceFiles||t.readSourceFile||t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof o!="function")throw new Error("buildStorageDocPath is required");if((t.search||t.listSourceFiles)&&typeof a!="function")throw new Error("fetchSourceFilesIndexResponse is required");if((t.fetch||t.readSourceFile||t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof s!="function")throw new Error("fetchStorageMarkdownResponse is required");if((t.readSharedDocument||t.inspectSharedDocumentStructure)&&typeof i!="function")throw new Error("resolveSharedDocumentInput is required");if(t.inspectSharedDocumentStructure&&typeof c!="function")throw new Error("inspectSharedDocumentStructure is required");if(t.inspectAgentSurface&&typeof l!="function")throw new Error("buildAgentSurfaceInspection is required");let L=n(async(d={})=>{let g=p(d.canonicalPath);if(!g)throw new Error("canonicalPath is required");let h=p(d.workspaceId),A=await s(o(g,h));if(!A.ok)throw new Error(`read_source_file failed with ${A.status}`);return{workspaceId:h||r,canonicalPath:g,markdown:await A.text()}},"readSourceFile"),K=n(async(d={})=>{let g=i(d);if(!g)throw new Error("shareToken or shareUrl must resolve to a published Knowgrph document");let h=p(g.workspaceId),A=p(g.canonicalPath),E=await s(o(A,h));if(!E.ok)throw new Error(`read_shared_document failed with ${E.status}`);return{workspaceId:h||r,canonicalPath:A,markdown:await E.text()}},"readSharedDocument"),V=n(async(d={})=>{let g=await K(d);return c(g)},"inspectSharedDocument"),ne=n(({workspaceId:d="",canonicalPath:g=""}={})=>`kgdoc:${encodeURIComponent(p(d))}:${encodeURIComponent(p(g))}`,"buildSearchFetchId"),Se=n(d=>{let g=p(d),h=g.match(/^kgdoc:([^:]*):(.*)$/);if(h)return{workspaceId:P(h[1]||""),canonicalPath:P(h[2]||"")};let A=g.match(/\/(?:api\/storage\/doc|knowgrph\/doc)\/([^/\s)]+)\/([^\s)]+)$/);if(A)return{workspaceId:P(A[1]||""),canonicalPath:P(A[2]||"")};let E=g.match(/\/(?:api\/storage\/doc-default|knowgrph\/doc-default)\/([^\s)]+)$/);return E?{workspaceId:"",canonicalPath:P(E[1]||"")}:null},"parseSearchFetchId"),Re=n(d=>{let g=f(d).split(`
`),h=new Map,A=n(({workspaceId:E="",canonicalPath:z="",line:$=""}={})=>{let D=p(z);if(!D)return;let S=p(E),q=ne({workspaceId:S,canonicalPath:D});h.has(q)||h.set(q,{id:q,title:_(D),url:j({workspaceId:S,canonicalPath:D}),snippet:T($||D),workspaceId:S||r,canonicalPath:D})},"addEntry");for(let E of g){let z=/\/(?:api\/storage\/doc|knowgrph\/doc)\/([^/\s)\]]+)\/([^\s)\]]+)/g,$=/\/(?:api\/storage\/doc-default|knowgrph\/doc-default)\/([^\s)\]]+)/g;for(let D of E.matchAll(z))A({workspaceId:P(D[1]||""),canonicalPath:P(D[2]||""),line:E});for(let D of E.matchAll($))A({workspaceId:"",canonicalPath:P(D[1]||""),line:E})}return Array.from(h.values())},"extractSearchEntriesFromSourceFilesIndex"),R=n(async(d={})=>{let g=p(d.query);if(!g)throw new Error("query is required");let h=Math.max(1,Math.min(25,Number.isFinite(Number(d.limit))?Math.floor(Number(d.limit)):10)),A=await a();if(!A.ok)throw new Error(`search failed with ${A.status}`);let E=await A.text(),z=Re(E),$=F(g),D=$.join(" "),S=z.map(O=>{let Y=`${O.title}
${O.canonicalPath}
${O.workspaceId}
${O.snippet}`.toLowerCase(),$e=D&&Y.includes(D)?$.length*4:0,He=$.reduce((yt,Yt)=>yt+(Y.includes(Yt)?2:0),0);return{...O,score:$e+He}}),q=S.slice().sort((O,Y)=>Y.score-O.score||O.title.localeCompare(Y.title)).slice(0,M).filter(O=>/\.md(?:$|[?#])/i.test(O.canonicalPath)),ce=new Map;await ee(q,async O=>{let Y=Se(O.id);if(!Y?.canonicalPath)return null;try{let $e=await s(o(Y.canonicalPath,Y.workspaceId));if(!$e.ok)return null;let He=(await $e.text()).slice(0,U),yt=He.toLowerCase(),Yt=D&&yt.includes(D)?$.length*6:0,_a=x(yt,$),jr=Yt+_a;if(jr<=0)return null;ce.set(O.id,{score:jr,snippet:v(He,$)})}catch{return null}return null});let pe=S.map(O=>{let Y=ce.get(O.id);return{...O,score:O.score+(Y?.score||0),snippet:Y?.snippet||O.snippet}}).filter(O=>O.score>0).sort((O,Y)=>Y.score-O.score||O.title.localeCompare(Y.title)).slice(0,h).map(({score:O,...Y})=>Y);return{ids:pe.map(O=>O.id),results:pe,query:g,totalResults:pe.length}},"searchSourceFiles"),w=n(async(d={})=>{let g=Se(d.id);if(!g?.canonicalPath)throw new Error("id must be a stable Knowgrph Source File id returned by search");let h=await L(g),A=j(g);return{id:ne(g),title:_(h.canonicalPath),content:h.markdown,text:h.markdown,url:A,metadata:{workspaceId:h.workspaceId,canonicalPath:h.canonicalPath,contentType:"text/markdown",source:"knowgrph-source-files"}}},"fetchSourceFileBySearchId"),y={};return t.search&&(y[t.search]=R),t.fetch&&(y[t.fetch]=w),t.listSourceFiles&&(y[t.listSourceFiles]=async()=>{let d=await a();if(!d.ok)throw new Error(`list_source_files failed with ${d.status}`);return{workspaceId:r,markdownIndex:await d.text()}}),t.readSourceFile&&(y[t.readSourceFile]=L),t.readSharedDocument&&(y[t.readSharedDocument]=K),t.inspectSharedDocumentStructure&&(y[t.inspectSharedDocumentStructure]=V),t.inspectAgentSurface&&(y[t.inspectAgentSurface]=async()=>l()),y},"createPublishedAgentReadyToolExecutors"),ts=n(e=>`((...args) => {
  const n = (value) => value
  const __name = (value) => value
  return (${Function.prototype.toString.call(e)})(...args)
})`,"createBrowserSafeFunctionSource"),Uo=ts(lr);var Lo=n((e={})=>{let t=n(R=>String(R||"").trim(),"normalizeString"),r=n(R=>String(R||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),o=n(R=>{let w=String(R||"").match(/^\s*/);return w?w[0].length:0},"readIndent"),a=n(R=>/^[A-Za-z0-9_:@-]+\s*:/.test(t(R)),"isYamlKeyLine"),s=n(R=>r(R).split(`
`),"splitLines"),i=n(R=>{let w=s(R),y=0;for(;y<w.length&&!t(w[y]);)y+=1;if(t(w[y])!=="---")return null;for(let d=y+1;d<w.length;d+=1)if(t(w[d])==="---")return{frontmatter:w.slice(y+1,d).join(`
`),body:w.slice(d+1).join(`
`)};return null},"extractLeadingFrontmatter"),c=n(R=>{let w=[];for(let y of s(R)){if(!t(y)||o(y)!==0)continue;let d=y.match(/^([A-Za-z0-9_:@-]+)\s*:/);d?.[1]&&w.push(d[1])}return Array.from(new Set(w)).sort((y,d)=>y.localeCompare(d))},"extractTopLevelFrontmatterKeys"),l=n((R,w)=>{let y=s(R),d=`${w}:`;for(let g=0;g<y.length;g+=1){let h=y[g],A=t(h);if(!A.startsWith(d))continue;let E=o(h),z=A.slice(d.length).trim();if(z)return{indent:E,inlineValue:z,blockLines:[],blockText:""};let $=[];for(let D=g+1;D<y.length;D+=1){let S=y[D],q=t(S),ce=o(S);if(q&&ce<=E&&a(S))break;$.push(S)}return{indent:E,inlineValue:"",blockLines:$,blockText:$.join(`
`)}}return null},"extractYamlBlock"),p=n(R=>{let w=[];for(let y of s(R)){let d=t(y);if(!d||d.startsWith("- "))continue;let g=d.match(/^([A-Za-z0-9_:@-]+)\s*:/);g?.[1]&&w.push(g[1])}return Array.from(new Set(w)).sort((y,d)=>y.localeCompare(d))},"extractNestedYamlKeys"),m=n(R=>{let w=s(R).filter(g=>t(g));if(!w.length)return[];let y=Math.min(...w.map(o)),d=[];for(let g of w){if(o(g)!==y)continue;let h=t(g);if(h.startsWith("- "))continue;let A=h.match(/^([A-Za-z0-9_:@-]+)\s*:/);A?.[1]&&d.push(A[1])}return Array.from(new Set(d)).sort((g,h)=>g.localeCompare(h))},"extractDirectYamlKeys"),f=n(R=>{let w=t(R);if(!w.startsWith("[")||!w.endsWith("]"))return null;let y=w.slice(1,-1).trim();return y?y.split(",").map(d=>t(d)).filter(Boolean).length:0},"countInlineSequenceEntries"),P=n(R=>{let w=t(R);return w.startsWith('"')&&w.endsWith('"')||w.startsWith("'")&&w.endsWith("'")?w.slice(1,-1):w},"cleanYamlScalar"),_=n(R=>{let w=t(R);if(!w.startsWith("[")||!w.endsWith("]"))return null;let y=w.slice(1,-1).trim();return y?y.split(",").map(d=>P(d)).filter(Boolean):[]},"extractInlineSequenceValues"),T=n((R,w)=>{let y=l(R,w);if(!y)return[];if(y.inlineValue)return _(y.inlineValue)||[];let d=[],g=y.indent+2;for(let h of y.blockLines){let A=t(h);o(h)===g&&A.startsWith("- ")&&d.push(P(A.slice(2)))}return d},"extractYamlSequenceValues"),M=n((R,w)=>{let y=s(R),d=`${w}:`;for(let g of y){let h=t(g);if(h.startsWith(d))return P(h.slice(d.length))}return null},"extractTopLevelScalarValue"),U=n((R,w)=>{let y=l(R,w);if(!y)return null;if(y.inlineValue)return f(y.inlineValue);let d=0,g=y.indent+2;for(let h of y.blockLines)t(h)&&o(h)===g&&/^\s*-\s+/.test(h)&&(d+=1);return d},"countYamlSequenceEntries"),B=n(R=>{let w=[];for(let y of s(R)){let d=y.match(/^(#{1,6})\s+(.+?)\s*$/);d?.[2]&&w.push({depth:d[1].length,text:t(d[2])})}return w},"extractMarkdownHeadings"),X=t(e.workspaceId),F=t(e.canonicalPath),x=r(e.markdown),v=i(x),ee=v?c(v.frontmatter):[],j=v?l(v.frontmatter,"flow"):null,ie=j?p(j.blockText):[],L=v?l(v.frontmatter,"main_panel_integrations_demo"):null,K=v?l(v.frontmatter,"superagent_harness_demo"):null,V=K?l(K.blockText,"runtime_surfaces"):null,ne=new Set(["kg:subgraphs","clusters","groups","layers"]),Se=Array.from(new Set([...ee,...ie].filter(R=>ne.has(R)))).sort((R,w)=>R.localeCompare(w)),Re=B(v?v.body:x);return{workspaceId:X,canonicalPath:F,markdownLength:x.length,lineCount:x?s(x).length:0,hasFrontmatter:!!v,topLevelKeys:ee,frontmatterScalars:v?{kgCanvasRenderMode:M(v.frontmatter,"kgCanvasRenderMode"),kgCanvas2dRenderer:M(v.frontmatter,"kgCanvas2dRenderer"),deployed_api_claim:M(v.frontmatter,"deployed_api_claim")}:{},mainPanelIntegrationsDemo:L?{present:!0,mainPanelEntries:T(L.blockText,"main_panel_entries"),providerIds:T(L.blockText,"provider_ids"),providerLabels:T(L.blockText,"provider_labels"),taskCapabilities:T(L.blockText,"task_capabilities"),taskLevels:T(L.blockText,"task_levels"),integrationOpenTab:M(L.blockText,"integration_open_tab"),canvas2dRenderer:M(L.blockText,"canvas_2d_renderer"),sourceFile:M(L.blockText,"source_file")}:{present:!1},superAgentHarnessDemo:K?{present:!0,taskCapabilities:T(K.blockText,"task_capabilities"),taskLevels:T(K.blockText,"task_levels"),runtimeSurfaces:V?m(V.blockText):[]}:{present:!1},hasFlowBlock:!!j,flowKeys:ie,flowNodeCount:j?U(j.blockText,"nodes"):null,flowConnectionCount:j?U(j.blockText,"connections")??U(j.blockText,"edges"):null,flowSubgraphCount:j?U(j.blockText,"subgraphs"):null,forbiddenGroupingKeys:Se,headingCount:Re.length,headings:Re.map(R=>R.text),bodyLength:t(v?v.body:x).length}},"inspectSharedDocumentStructure");var Et=Object.freeze({generate:"knowgrph.probe.generate",select:"knowgrph.probe.select",evolve:"knowgrph.probe.evolve"}),xt=Object.freeze({optionCount:3,maxOptionCount:4,recallTopK:5,tokenBudget:1200,optionCompletionTokenEstimate:64,maxDepth:8,appMemoryScope:"knowgrph-probe-tree"}),Ko=Object.freeze({type:"object",additionalProperties:!0,required:["id","text","rationale"],properties:{id:{type:"string"},text:{type:"string"},rationale:{type:"string"}}}),pr=Object.freeze({type:"object",additionalProperties:!1,required:["model","prompt_tokens","completion_tokens","cache_hits","estimated_cost_usd"],properties:{model:{type:"string"},prompt_tokens:{type:"number"},completion_tokens:{type:"number"},cache_hits:{type:"number"},estimated_cost_usd:{oneOf:[{type:"number"},{type:"null"}]}}}),Tp=Object.freeze({type:"object",additionalProperties:!1,required:["thread_root_id","current_node_id"],properties:{thread_root_id:{type:"string",minLength:1},current_node_id:{type:"string",minLength:1},context_text:{type:"string"},k:{type:"integer",minimum:1,maximum:xt.maxOptionCount,default:xt.optionCount},recall_top_k:{type:"integer",minimum:0,maximum:20,default:xt.recallTopK},token_budget:{type:"integer",minimum:1,default:xt.tokenBudget},graph_store_dir:{type:"string"}}}),vp=Object.freeze({type:"object",additionalProperties:!1,required:["thread_root_id","parent_node_id","chosen_option"],properties:{thread_root_id:{type:"string",minLength:1},parent_node_id:{type:"string",minLength:1},chosen_option:Ko,context_text:{type:"string"},terminal:{type:"boolean",default:!1},graph_store_dir:{type:"string"}}}),Op=Object.freeze({type:"object",additionalProperties:!1,required:["thread_root_id"],properties:{thread_root_id:{type:"string",minLength:1},terminal_node_id:{type:"string"},resolved:{type:"boolean",default:!0},rating:{type:"number",minimum:0,maximum:1},allow_partial_path:{type:"boolean",default:!1},graph_store_dir:{type:"string"}}}),Ip=Object.freeze({type:"object",additionalProperties:!0,required:["contractVersion","ok","options","cost_log"],properties:{contractVersion:{type:"string"},ok:{type:"boolean"},options:{type:"array",items:Ko},degraded:{type:"boolean"},recalled_exemplars:{type:"array",items:{type:"object",additionalProperties:!0}},token_budget:{type:"object",additionalProperties:!0},cost_log:pr}}),Mp=Object.freeze({type:"object",additionalProperties:!0,required:["contractVersion","ok","new_node_id","edge_id","node_path","cost_log"],properties:{contractVersion:{type:"string"},ok:{type:"boolean"},new_node_id:{type:"string"},edge_id:{type:"string"},node_path:{type:"string"},checkpoint:{type:"object",additionalProperties:!0},cost_log:pr}}),Np=Object.freeze({type:"object",additionalProperties:!0,required:["contractVersion","ok","updated_scores","exemplar_id","cost_log"],properties:{contractVersion:{type:"string"},ok:{type:"boolean"},updated_scores:{type:"array",items:{type:"object",additionalProperties:!0}},exemplar_id:{type:"string"},complete_path_scored:{type:"boolean"},unscored_parent_node_ids:{type:"array",items:{type:"string"}},cost_log:pr}});var Do="knowgrph.os.status",N=Object.freeze({search:u.search,fetch:u.fetch,uiLaunch:"knowgrph.ui.launch",uiStop:"knowgrph.ui.stop",pipeline:"knowgrph.pipeline",graphragPipeline:"knowgrph.graphrag_pipeline",superagentRun:"knowgrph.superagent.run",videoRemixRun:"knowgrph.video_remix.run",browserApiRun:"knowgrph.browser_api.run",sealionDetectLanguageVariant:"sealion.detect_language_variant",sealionTranslateLocalize:"sealion.translate_localize",sealionSafetyCheck:"sealion.safety_check",htmlVideoRender:"knowgrph.html_video.render",annotateImage:"knowgrph.annotate.image",annotateVideoFrame:"knowgrph.annotate.video_frame",memoryAdd:"knowgrph.memory.add",memorySearch:"knowgrph.memory.search",memoryAssemblePrompt:"knowgrph.memory.assemble_prompt",memoryExtractProcedural:"knowgrph.memory.extract_procedural",memoryMaterializeUserModel:"knowgrph.memory.materialize_user_model",probeGenerate:Et.generate,probeSelect:Et.select,probeEvolve:Et.evolve,agenticCanvasOsDocsInvoke:"knowgrph.agentic_canvas_os.docs.invoke",showrunnerStartRun:"knowgrph.showrunner.start_run",showrunnerRunStatus:"knowgrph.showrunner.run_status",showrunnerPostChoice:"knowgrph.showrunner.post_choice",showrunnerSubmitCritique:"knowgrph.showrunner.submit_critique",showrunnerApproveStage:"knowgrph.showrunner.approve_stage",showrunnerGetArtifact:"knowgrph.showrunner.get_artifact",sandboxPolicyValidate:"knowgrph.sandbox.policy.validate",sandboxPolicyAuthorize:"knowgrph.sandbox.policy.authorize",osStatus:Do,vdeoxplnList:"knowgrph.vdeoxpln.list"}),$o=n(()=>Object.values(N),"buildKnowgrphLocalMcpToolNameList");var jo="knowgrph-vdeoxpln/v0.1";var fe=Object.freeze({sourceFiles:"knowgrph-source-files",agentReady:"knowgrph-agent-ready",localMcp:"knowgrph-mcp-local",chatToCanvas:"knowgrph-chat-to-canvas",strybldr:"knowgrph-strybldr",researchVisual:"knowgrph-research-visual",memoryLayer:"knowgrph-memory-layer",aiShowrunner:"knowgrph-ai-showrunner",htmlVideoRenderer:"knowgrph-html-video-renderer",videoAgent:"knowgrph-video-agent",visualAnnotationEngine:"knowgrph-visual-annotation-engine",commerceReadiness:"knowgrph-commerce-readiness"}),dr=n(e=>String(e||"").trim(),"normalizeString"),ye=n(e=>Array.from(new Set((Array.isArray(e)?e:[]).map(dr).filter(Boolean))).sort((t,r)=>t.localeCompare(r)),"normalizeStringArray"),Ho=n(e=>{let t=new Set,r=[];for(let o of Array.isArray(e)?e:[]){let a=dr(o);!a||t.has(a)||(t.add(a),r.push(a))}return r},"normalizeOrderedStringArray"),ur=n(e=>Array.isArray(e)?e.map(ur):!e||typeof e!="object"?e:Object.keys(e).sort((t,r)=>t.localeCompare(r)).reduce((t,r)=>(t[r]=ur(e[r]),t),{}),"normalizeJsonValue"),rs=n(e=>JSON.stringify(ur(e)),"stableStringifyVdeoxplnValue"),os=n((e,t)=>{let r=dr(e)||"vdeoxpln";return`kgvx_${bt([r,jo,rs(t)])}`},"buildKnowgrphVdeoxplnSemanticKey");var ns=Object.freeze([{id:fe.sourceFiles,title:"Knowgrph Source Files",purpose:"Discover, read, inspect, and route published Source Files and shared documents through the canonical storage and document-structure owners.",scope:"read-only-published",mutation:"read-only",triggers:["source files","published documents","shared document","read markdown","inspect document structure"],inputs:["workspace document","published markdown","share token","share URL","canonical path"],outputs:["source-files index","published markdown","document structure report"],owners:["canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/sourceFilesSignatures.ts","canvas/src/features/agent-ready/publishedToolExecutors.mjs","canvas/src/features/agent-ready/sharedDocumentStructureInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs"],tools:{published:[u.listSourceFiles,u.readSourceFile,u.readSharedDocument,u.inspectSharedDocumentStructure],browserLocal:[u.inspectLocalSourceFilesSnapshot],local:[N.search,N.fetch,N.vdeoxplnList]},workflow:["Resolve source identity from storage, share token, or canonical path.","Fetch through published storage/document executors.","Inspect structure with the shared document-structure owner.","Return read-only artifacts without graph mutation."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return source-read or structure errors without model calls."},artifactPolicy:{persistence:"published-read-only",graphMaterialization:"none",semanticKeyInputs:["workspaceId","canonicalPath","shareToken","toolContract"]},validation:["agent-ready:check","pages:check-sync","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","webmcp-html-fallback"]},{id:fe.agentReady,title:"Knowgrph Agent Ready",purpose:"Inspect Knowgrph health, MCP, WebMCP, A2A, OpenAPI, commerce, and browser-local readiness without claiming deployed mutation.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["agent-ready","webmcp","mcp health","openapi","a2a","discovery","readiness"],inputs:["agent-ready base URL","browser runtime state","published metadata"],outputs:["agent surface inspection","browser-local readiness snapshot","metadata report"],owners:["canvas/src/features/agent-ready/knowgrphAgentReadyToolContract.mjs","canvas/src/features/agent-ready/webMcpRuntime.ts","canvas/src/features/agent-ready/agentSurfaceInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs","scripts/check-agent-ready.mjs"],tools:{published:[u.inspectAgentSurface],browserLocal:[u.inspectLocalSettingsChatReadiness,u.inspectLocalMainPanelState,u.inspectLocalEditorWorkspaceState,u.inspectLocalChatPipelineState,u.inspectLocalMainPanelChatCanvasPipeline,u.inspectLocalWorkspaceDocument,u.inspectLocalCanvasTopology,u.inspectLocalCanvasSnapshot,u.inspectLocal3dCameraPose,u.inspectLocal3dLayoutPositions,u.inspectLocal2dZoomViewport,u.inspectLocalSourceFilesSnapshot],local:[N.vdeoxplnList]},workflow:["Inspect published agent-ready metadata.","Inspect browser-local state only when running inside the app runtime.","Report scope boundaries between Pages read-only tools and browser-local inspectors."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return metadata inspection errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["toolContracts","metadataRoutes","browserLocalToolNames"]},validation:["agent-ready:check","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","browser-webmcp"]},{id:fe.localMcp,title:"Knowgrph Local MCP",purpose:"Expose Knowgrph-owned local Source Files, Agentic Canvas OS docs invocation, UI, pipeline, SuperAgent, video-remix, browser bridge, SEA-LION, HTML video, visual annotation, memory, probe-tree, showrunner, OS status, and vdeoxpln tools through the stdio MCP server.",scope:"local-stdio",mutation:"local-confirmed",triggers:["local mcp","agentic canvas os docs","/","#","@","launch canvas","run pipeline","graphrag","superagent","video remix","browser api","sealion sidecar","html video","visual annotation","memory layer","probe tree","showrunner","os status","list vdeoxpln"],inputs:["local root","agentic canvas os invocation token","workspace file","graph data","pipeline config","reference URL","source cards","browser API runtime","Southeast Asian language text","render spec","annotation asset","memory scope","probe branch","creative brief"],outputs:["local tool result","Agentic Canvas OS docs invocation result","pipeline artifact","superagent report","video remix run manifest","SEA-LION sidecar result","render manifest","annotation result","memory result","probe checkpoint","showrunner artifact","OS status snapshot","vdeoxpln registry snapshot"],owners:["mcp/local-tool-contract.js","mcp/server.js","mcp/agentic-canvas-os-docs-runtime.js","mcp/director-lanes.js","mcp/director-workflow.js","mcp/video-remix-runtime.js","mcp/README.md","knowgrph_parser/superagent_harness.py","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:$o()},workflow:["List local tools from the shared local MCP contract.","Run only path-guarded local-root operations.","Run video-remix orchestration as an approval-gated local manifest before any paid provider call.","Resolve Agentic Canvas OS /, #, and @ docs invocations from the sibling docs SSOT.","Forward SEA-LION regional language, localization, and safety calls to the hosted sidecar with server-owned auth.","Summarize artifacts and registry metadata in the MCP result."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"tool-owned",fallback:"Return local command failure and detected artifacts."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"tool-owned",semanticKeyInputs:["localToolNames","rootScope","artifactList"]},validation:["vdeoxpln:check","mcpLocalToolContract"],publish:["local-mcp-docs"]},{id:fe.chatToCanvas,title:"Knowgrph Chat To Canvas",purpose:"Route AI-assisted graph generation through FloatingPanel Chat, KGC validation, Workspace FS, Source Files, and Canvas apply owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["chat to canvas","generate graph","kgc markdown","flow.subgraphs","apply to canvas"],inputs:["chat request","workspace context","selection context","source evidence","model settings"],outputs:["validated KGC Markdown","workspace artifact","GraphData","canvas topology snapshot"],owners:["canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitRequest.ts","canvas/src/features/chat/chatMarkdownValidation.ts","canvas/src/features/chat/chatKgcCanvasApply.ts","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/lib/graph/semanticKey.ts"],tools:{published:[],browserLocal:[u.inspectLocalChatPipelineState,u.inspectLocalMainPanelChatCanvasPipeline,u.inspectLocalWorkspaceDocument,u.inspectLocalCanvasTopology,u.inspectLocalCanvasSnapshot],local:[N.vdeoxplnList]},workflow:["Vdeoxpln context through the shared chat submit request owner.","Call provider transport only after typed request construction.","Validate KGC Markdown with bounded retries.","Persist through Workspace FS and apply through the existing Canvas path."],aiPolicy:{mode:"required-for-generation",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Persist validation or provider failure as reviewable chat/workspace state."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["chatContextScope","workspacePath","graphSemanticKey","sourceLayerHash"]},validation:["chatResponseContract","sourceFiles","vdeoxpln:check"],publish:["browser-webmcp","mainpanel-mcp"]},{id:fe.strybldr,title:"Knowgrph Strybldr",purpose:"Turn image or media source units into editable Storyboard cards and bounded media handoff artifacts through Strybldr and shared renderer owners.",scope:"browser-local-source-backed",mutation:"browser-local-user-mediated",triggers:["strybldr","storyboard","image to storyboard","media handoff","visual brief"],inputs:["image source unit","media metadata","workspace document","storyboard graph"],outputs:["Strybldr Markdown","Storyboard graph cards","camera-aware media handoff prompt","canvas snapshot"],owners:["canvas/src/features/strybldr/strybldrStoryboard.ts","canvas/src/features/strybldr","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-strybldr-prd-tad.md"],tools:{published:[],browserLocal:[u.inspectLocalSourceFilesSnapshot,u.inspectLocalCanvasTopology,u.inspectLocalCanvasSnapshot],local:[N.vdeoxplnList]},workflow:["Import media through existing workspace/source owners.","Build Strybldr cards with source-unit provenance.","Persist Camera reframe settings on selected graph cards.","Render through the shared Storyboard surface.","Compile bounded media handoff only after user approval."],aiPolicy:{mode:"optional-for-refinement",maxAttempts:1,tokenBudget:"user-approved-provider-step",fallback:"Keep editable storyboard and structured handoff error."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"storyboard-graph",semanticKeyInputs:["sourceUnitId","strybldrRunId","graphSemanticKey","strybldrCamera"]},validation:["strybldr","rendererPipelineNeutrality","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:fe.researchVisual,title:"Knowgrph Research Visual",purpose:"Create file-backed research visual workflows from source material using Knowgrph parsing, Source Files, Storyboard, renderer, and chat owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["research visual","explainer","formula","algorithm","proof","dynamic scene","storyboard"],inputs:["paper excerpt","formula","algorithm","figure","workspace document","source evidence"],outputs:["mechanism brief","storyboard","renderer-neutral scene plan","validated KGC Markdown"],owners:["canvas/src/features/parsers/default.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-vdeoxpln-prd-tad.md"],tools:{published:[],browserLocal:[u.inspectLocalChatPipelineState,u.inspectLocalSourceFilesSnapshot,u.inspectLocalCanvasTopology],local:[N.vdeoxplnList]},workflow:["Extract source-backed semantic units into workspace artifacts.","Plan exact deterministic graph/storyboard layers before optional AI support.","Persist artifacts through Workspace FS and Source Files.","Use Canvas/Storyboard renderers as projections of graph state."],aiPolicy:{mode:"optional-for-drafting",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Return deterministic source brief with unresolved questions."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["sourceSignature","graphSemanticKey","rendererId"]},validation:["sourceFiles","chatResponseContract","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:fe.memoryLayer,title:"Knowgrph Memory Layer",purpose:"Persist, retrieve, inject, extract, and materialize explicitly scoped agent memories through a provider-neutral local harness with source-owned Markdown outputs.",scope:"local-stdio-and-browser-local",mutation:"local-scoped-memory",triggers:["memory layer","long-term memory","cross-session context","mem0","personalization","prompt memory","procedural memory","harness replay","user model","profile markdown"],inputs:["user or agent message","runtime scope","memory query","harness output dir"],outputs:["memory write result","ranked memory results","bounded prompt context","memory cost log","procedural KGC markdown","USER_MODEL markdown"],owners:["canvas/src/features/memory/aiAgentsMemoryLayerContract.mjs","mcp/memory-layer-runtime.js","mcp/local-tool-contract.js","mcp/server.js","docs/documents/knowgrph-ai-agents-memory-layer-prd-tad.md"],tools:{published:[],browserLocal:[],local:[N.memoryAdd,N.memorySearch,N.memoryAssemblePrompt,N.memoryExtractProcedural,N.memoryMaterializeUserModel,N.vdeoxplnList]},workflow:["Require explicit runtime scope.","Add/search through the configured harness.","Inject only top-ranked memories within token budget.","Extract completed harness runs into reusable KGC procedural-memory documents.","Materialize scoped memories into deterministic USER_MODEL markdown when a source-owned profile is needed."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"memory-harness-owned",fallback:"Return empty memory results or skip write while preserving the agent turn."},artifactPolicy:{persistence:"operator-configured-local-memory-store",graphMaterialization:"none",semanticKeyInputs:["memoryScope","operation","topK","providerMode"]},validation:["vdeoxpln:check","mcpLocalToolContract","aiAgentsMemoryLayer"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:fe.aiShowrunner,title:"Knowgrph AI Showrunner",purpose:"Run provider-neutral multi-agent creative pipelines for podcasts, narrative games, and writers rooms through existing Source Files, memory, MCP, KGC, and Storyboard Widget owners.",scope:"local-stdio-and-browser-local",mutation:"local-approval-gated",triggers:["ai showrunner","podcast pipeline","narrative game","writers room","creative state","multi-agent orchestration"],inputs:["creative brief markdown","run id","choice signal","critique text","operator approval"],outputs:["pipeline run state","creative state entries","script","choice graph","revision history","artifact manifest"],owners:["canvas/src/features/ai-showrunner","canvas/src/features/chat/chatKgcCanvasApply.ts","canvas/src/features/source-files","canvas/src/features/memory/aiAgentsMemoryLayerContract.mjs","canvas/src/lib/graph/semanticKey.ts","mcp/local-tool-contract.js"],tools:{published:[],browserLocal:[],local:[N.showrunnerStartRun,N.showrunnerRunStatus,N.showrunnerPostChoice,N.showrunnerSubmitCritique,N.showrunnerApproveStage,N.showrunnerGetArtifact,N.vdeoxplnList]},workflow:["Validate the frontmatter-first Creative_Brief before any agent turn.","Run bounded role turns through dry-run or injected provider-neutral dispatch.","Persist append-only state, token logs, and manifests through Source Files."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"pipeline-run-owned",fallback:"Halt at approval or structured error while preserving committed Creative_State."},artifactPolicy:{persistence:"source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["run_id","agent_role","turn_index","content_hash"]},validation:["vdeoxpln:check","mcpLocalToolContract","showrunnerDryRun"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:fe.htmlVideoRenderer,title:"Knowgrph HTML Video Renderer",purpose:"Render HTML, CSS, and data documents to MP4 video artifacts through a runtime-selected pluggable engine and the existing rich media output owner.",scope:"local-stdio-and-browser-local",mutation:"local-approval-gated",triggers:["html video render","html to video","programmatic video","render html mp4","coding agent video"],inputs:["html document","css","data json","render spec","engine hint"],outputs:["mp4 video blob","render manifest","artifact path","render job id"],owners:["canvas/src/features/html-video-renderer/htmlVideoRendererSsot.ts","canvas/src/features/html-video-renderer/htmlVideoRenderJob.ts","canvas/src/features/html-video-renderer/htmlVideoEngineRegistry.ts","canvas/src/features/html-video-renderer/htmlVideoRendererSpec.ts","canvas/src/features/html-video-renderer/htmlVideoFlowNode.ts","canvas/src/features/html-video-renderer/htmlVideoWidget.ts","canvas/src/features/chat/richMediaRun.ts","canvas/src/features/source-files","canvas/src/lib/config.storyboard-widget.ts","canvas/src/lib/graph/semanticKey.ts","mcp/local-tool-contract.js","mcp/server.js","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[N.htmlVideoRender,N.vdeoxplnList]},workflow:["Validate the Render_Spec before any engine call.","Resolve active engine from KNOWGRPH_HTML_VIDEO_ENGINE or engineHint at invocation time.","Execute the render engine and capture the video/mp4 blob.","Route the blob through writeRichMediaWidgetRunOutputArtifact exactly once.","Return renderJobId, outputPath, outputManifestPath, and outputStorageUrl."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return structured error without model call."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"rich-media-panel",semanticKeyInputs:["renderJobId","engineId","renderSpecHash","outputPath"]},validation:["vdeoxpln:check","mcpLocalToolContract","htmlVideoRenderer"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:fe.videoAgent,title:"Knowgrph Video Agent",purpose:"Reason over operator-supplied video sources through native knowgrph ingestion, parsing, annotation, dataset operations, zone counting, search planning, edit planning, timeline compilation, generation placeholders, and streamable rich-media output.",scope:"browser-local-and-local-stdio",mutation:"local-approval-gated",triggers:["video agent","video reasoning","video search","video editing","video compilation","video generation","stream video result","visual dataset","zone counting"],inputs:["operator-supplied video url","source manifest","annotation tasks","search intent","edit constraints","render spec"],outputs:["source manifest","visual annotation dataset","zone counting timeline","moment search index","edit plan","timeline manifest","render spec","reasoning artifact manifest","video/mp4 artifact","inline stream preview"],owners:["canvas/src/features/video-agent","canvas/src/features/video-agent/videoAgentDatasetRuntime.ts","canvas/src/features/html-video-renderer/htmlVideoRendererSsot.ts","canvas/src/features/html-video-renderer/htmlVideoFlowNode.ts","canvas/src/features/visual-annotation-engine/annotationDataset.ts","canvas/src/features/visual-annotation-engine/annotationFlowNode.ts","canvas/src/features/visual-annotation-engine/annotationSerializers.ts","canvas/src/features/chat/richMediaRun.ts","canvas/src/features/source-files","canvas/src/lib/graph/semanticKey.ts","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[N.htmlVideoRender,N.annotateImage,N.annotateVideoFrame,N.vdeoxplnList]},workflow:["Ingest an operator-supplied video source without embedding a provider runtime dependency.","Parse source metadata, frame annotations, transcript windows, and searchable moments through existing source and annotation owners.","Load frame annotations into native visual dataset operators for deterministic split, merge, save, and frame-ordered zone counting.","Plan search, edit, compilation, and generation stages as typed reasoning artifacts rather than copied external code.","Compile a source-owned HTML/CSS/data Render_Spec for the selected timeline.","Stream a video/mp4 artifact or outputSrcDoc preview through the shared Rich Media Panel output owner."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"operator-configured",fallback:"Return structured source, annotation, dataset, zone counting, or render errors without invoking external video-agent services."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"rich-media-panel",semanticKeyInputs:["sourceUrl","capabilities","reasoningArtifacts","visualDataset","zoneCounting","renderSpecHash","streamOutput"]},validation:["vdeoxpln:check","mcpLocalToolContract","htmlVideoRenderer","visualAnnotationEngine","visualAnnotationDataset","videoAgentPipeline"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:fe.visualAnnotationEngine,title:"Knowgrph Visual Annotation Engine",purpose:"Run browser-local image and video-frame annotation into LLM-ready structured JSON plus native visual datasets materialised through existing artifact owners.",scope:"browser-local",mutation:"local-approval-gated",triggers:["annotate image","annotate video","visual annotation","object detection","image caption","florence2","semantic labels","llm-ready annotation","annotation dataset","zone counting"],inputs:["image url","video asset url","annotation tasks","model hint","frame timestamp"],outputs:["annotation result json","visual annotation dataset","zone counting timeline","llm-ready payload","annotation canvas node","markdown summary"],owners:["canvas/src/features/visual-annotation-engine/annotationEngineSsot.ts","canvas/src/features/visual-annotation-engine/annotationDataset.ts","canvas/src/features/visual-annotation-engine/annotationWorker.ts","canvas/src/features/visual-annotation-engine/annotationOrchestrator.ts","canvas/src/features/visual-annotation-engine/annotationSerializers.ts","canvas/src/features/visual-annotation-engine/annotationFlowNode.ts","canvas/src/features/visual-annotation-engine/annotationMcpTools.ts","canvas/src/features/visual-annotation-engine/annotationWidget.ts","canvas/src/features/chat/richMediaRun.ts","canvas/src/features/source-files","canvas/src/lib/graph/semanticKey.ts","canvas/src/lib/config.storyboard-widget.ts","mcp/local-tool-contract.js","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[N.annotateImage,N.annotateVideoFrame,N.vdeoxplnList]},workflow:["Validate the Annotation_Spec before model resolution or inference.","Resolve model identifier from modelHint, KNOWGRPH_ANNOTATION_MODEL, or the registered default.","Dispatch through the Annotation_Worker boundary; Dev emits dependency-free heuristic annotations while model adapters remain runtime-owned.","Build annotationId with buildScopedGraphSemanticKey using assetUrl, modelId, and sorted tasks.","Load Annotation_Result or frame-box arrays into the native dataset owner for split, merge, save, and frame-ordered zone counting.","Route JSON output through writeRichMediaWidgetRunOutputArtifact exactly once.","Return annotationId, assetUrl, modelId, tasks, outputPath, and outputManifestPath."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return runtime-local heuristic annotation JSON or a structured validation/runtime error without model call."},artifactPolicy:{persistence:"browser-local",graphMaterialization:"annotation-canvas-node",semanticKeyInputs:["annotationId","assetUrl","modelId","sortedTasks","visualDataset","zoneCounting"]},validation:["vdeoxpln:check","mcpLocalToolContract","visualAnnotationEngine","visualAnnotationDataset"],publish:["local-mcp-docs","mainpanel-mcp"]},{id:fe.commerceReadiness,title:"Knowgrph Commerce Readiness",purpose:"Inspect Commerce, payment worker, x402, ACP, UCP, MPP, and readiness metadata without bypassing the shared payment SSOT.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["commerce","payment","x402","acp","ucp","mpp","stripe","readiness"],inputs:["agent-ready metadata","commerce route health","browser readiness snapshot"],outputs:["commerce readiness report","payment route summary","agent-ready commerce metadata"],owners:["canvas/src/features/panels/views/CommerceHubView.tsx","canvas/src/features/agent-ready/browserLocalSurfaceSnapshots.ts","cloudflare/pages/knowgrph-agent-ready-commerce.mjs","cloudflare/workers/knowgrph-payment/agenticCommerce.ts","grph-shared/src/payments/agenticCommerceSsot.ts"],tools:{published:[u.inspectAgentSurface],browserLocal:[u.inspectLocalSettingsChatReadiness,u.inspectLocalMainPanelState],local:[N.vdeoxplnList]},workflow:["Inspect published commerce discovery metadata.","Read browser-local readiness snapshots when available.","Report payment capability boundaries without initiating checkout."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return route or metadata errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["commerceSemanticKey","routeHealth","toolContract"]},validation:["agent-ready:check","mainPanelCommerce","vdeoxpln:check"],publish:["pages-agent-skills","mainpanel-mcp","browser-webmcp"]}]),as=n(e=>{let t={published:ye(e.tools?.published),browserLocal:ye(e.tools?.browserLocal),local:ye(e.tools?.local)},r=os(e.id,{id:e.id,scope:e.scope,mutation:e.mutation,owners:ye(e.owners),tools:t,triggers:ye(e.triggers),outputs:ye(e.outputs),workflow:Ho(e.workflow),artifactPolicy:e.artifactPolicy||{},aiPolicy:e.aiPolicy||{}}),o=`/.well-known/agent-skills/${e.id}.md`;return Object.freeze({...e,version:jo,triggers:ye(e.triggers),inputs:ye(e.inputs),outputs:ye(e.outputs),owners:ye(e.owners),tools:Object.freeze(t),workflow:Ho(e.workflow),validation:ye(e.validation),publish:ye(e.publish),semanticKey:r,agentSkill:Object.freeze({name:e.id,type:"markdown",description:e.purpose,path:o})})},"normalizeVdeoxpln"),Go=n(()=>ns.map(as).sort((e,t)=>e.id.localeCompare(t.id)),"buildKnowgrphVdeoxplnRegistry");var Bo=n((e=Go())=>e.map(t=>({...t.agentSkill,vdeoxpln:{id:t.id,title:t.title,scope:t.scope,mutation:t.mutation,semanticKey:t.semanticKey,tools:t.tools,publish:t.publish}})),"buildKnowgrphVdeoxplnAgentSkillDefinitions"),xe=n(e=>e&&e.length?e.map(t=>`- ${t}`).join(`
`):"- none","markdownList"),ss=n(e=>`# ${e.title} Skill

Use this skill when: ${e.purpose}

## Contract

- Vdeoxpln id: \`${e.id}\`
- Contract version: \`${e.version}\`
- Semantic key: \`${e.semanticKey}\`
- Scope: \`${e.scope}\`
- Mutation boundary: \`${e.mutation}\`

## Triggers

${xe(e.triggers)}

## Inputs

${xe(e.inputs)}

## Outputs

${xe(e.outputs)}

## Tools

Published tools:
${xe(e.tools.published)}

Browser-local tools:
${xe(e.tools.browserLocal)}

Local MCP tools:
${xe(e.tools.local)}

## Workflow

${xe(e.workflow)}

## Source Owners

${xe(e.owners)}

## Artifact Policy

- Persistence: \`${e.artifactPolicy?.persistence||"none"}\`
- Graph materialization: \`${e.artifactPolicy?.graphMaterialization||"none"}\`
- Semantic-key inputs:
${xe(e.artifactPolicy?.semanticKeyInputs||[])}

## AI Policy

- Mode: \`${e.aiPolicy?.mode||"none"}\`
- Max attempts: \`${String(e.aiPolicy?.maxAttempts??0)}\`
- Token budget: \`${String(e.aiPolicy?.tokenBudget??0)}\`
- Fallback: ${e.aiPolicy?.fallback||"Return deterministic errors without model calls."}

## Validation

${xe(e.validation)}

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
`,"buildKnowgrphVdeoxplnMarkdown"),Wo=n((e=Go())=>Object.fromEntries(e.map(t=>[t.id,ss(t)])),"buildKnowgrphVdeoxplnMarkdownByName");var is={[u.search]:{id:"search",tags:["mcp","search","source-files","read-only"],examples:["Search Knowgrph Source Files for renderer architecture."],outputModes:["application/json"]},[u.fetch]:{id:"fetch",tags:["mcp","fetch","source-files","markdown","read-only"],examples:["Fetch the Knowgrph Source File id returned by search."],outputModes:["text/markdown","application/json"]},[u.listSourceFiles]:{id:"list-source-files",tags:["mcp","discovery","source-files","read-only"],examples:["List the published Knowgrph Source Files."],outputModes:["text/markdown","application/json"]},[u.readSourceFile]:{id:"read-source-file",tags:["mcp","read","markdown","workspace"],examples:["Read the published source file for docs/getting-started.md."],outputModes:["text/markdown","application/json"]},[u.readSharedDocument]:{id:"read-shared-document",tags:["mcp","read","shared-document","markdown"],examples:["Read the Knowgrph shared document behind this share URL."],outputModes:["text/markdown","application/json"]},[u.inspectSharedDocumentStructure]:{id:"inspect-shared-document-structure",tags:["mcp","inspect","shared-document","structure"],examples:["Inspect the structure of this Knowgrph shared document."],outputModes:["application/json","text/markdown"]},[u.inspectAgentSurface]:{id:"inspect-agent-surface",tags:["mcp","agent-ready","discovery","metadata"],examples:["Show the Knowgrph agent discovery metadata."],outputModes:["application/json","text/markdown"]}},it=Bo(),Fo=n(e=>e.map(t=>{let r=is[t.name]||{id:String(t.name||"").replace(/_/g,"-"),tags:["mcp","read-only"],examples:[`Call ${t.name} on Knowgrph.`],outputModes:["application/json"]};return{id:r.id,name:t.title,description:t.description,tags:r.tags,examples:r.examples,inputModes:["application/json","text/plain"],outputModes:r.outputModes}}),"buildAgentReadyA2aSkills"),zo=n(async({appUrl:e,updatedAt:t,sha256ByName:r})=>({$schema:"https://agent-skills.dev/schemas/skills-index.v0.2.json",updated_at:t,skills:await Promise.all(it.map(async o=>({name:o.name,type:o.type,description:o.description,url:`${String(e||"").replace(/\/+$/,"")}${o.path}`,sha256:await r[o.name],vdeoxpln:o.vdeoxpln})))}),"buildAgentReadyAgentSkillsIndex"),qo=n(({appBasePath:e,appA2aAgentCardPath:t,healthPath:r})=>{let o=Object.fromEntries(it.map(a=>[`${e}${a.path}`,{get:{summary:`Read the ${a.name} agent skill markdown`,responses:{200:{description:`Agent skill markdown for ${a.name}`}}}}]));return{[r]:{get:{summary:"Read the Knowgrph agent-ready health status",responses:{200:{description:"Health status in application/health+json format"}}}},[`${e}/mcp`]:{get:{summary:"Read MCP transport metadata",responses:{200:{description:"MCP transport metadata"}}},post:{summary:"Send a JSON-RPC MCP request",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0}}}},responses:{200:{description:"JSON-RPC result payload"}}}},[t]:{get:{summary:"Read the Knowgrph A2A Agent Card",responses:{200:{description:"A2A Agent Card JSON"}}}},"/api/storage/llms.txt":{get:{summary:"Read the Source Files LLM index",responses:{200:{description:"Plain-text LLM index"}}}},"/api/storage/source-files":{get:{summary:"List published Source Files",responses:{200:{description:"Source Files index"}}}},"/api/storage/source-files/{workspaceId}":{get:{summary:"List published Source Files for a workspace",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped Source Files index"}}}},"/api/storage/source-files/{workspaceId}/llms.txt":{get:{summary:"Read the workspace-scoped Source Files LLM index",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped plain-text LLM index"}}}},"/api/storage/doc-default/{canonicalPath}":{get:{summary:"Read a default-workspace Source File markdown document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document from the default Editor Workspace"},404:{description:"Document not found"}}}},"/api/storage/doc/{workspaceId}/{canonicalPath}":{get:{summary:"Read a Source File markdown document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document"},404:{description:"Document not found"}}}},"/api/storage/blob/{workspaceId}/{canonicalPath}":{post:{summary:"Store a workspace binary artifact in R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],requestBody:{required:!0,content:{"application/octet-stream":{schema:{type:"string",format:"binary"}}}},responses:{200:{description:"R2 object coordinates and public storage route"},400:{description:"Invalid workspace, path, or declared payload size"}}},get:{summary:"Read a workspace binary artifact from R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Binary artifact body with stored HTTP metadata"},404:{description:"Object not found"}}},head:{summary:"Read workspace binary artifact metadata from R2",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Binary artifact metadata"},404:{description:"Object not found"}}}},[`${e}/doc-default/{canonicalPath}`]:{get:{summary:"Read a default-workspace shared document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/doc/{workspaceId}/{canonicalPath}`]:{get:{summary:"Read a shared document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/share/{shareToken}`]:{get:{summary:"Read a shared document through the canonical opaque share token route",parameters:[{name:"shareToken",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or published markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},...o}},"buildAgentReadyOpenApiPaths");var cs=n((e,t)=>{let r=new URL(e.url);return r.pathname=`${t}/`,r.search="",r.hash="",new Request(r.toString(),e)},"buildKnowgrphAppShellAssetRequest"),Vo=n(async(e,t)=>{let r=cs(e.request,t);return typeof e.env?.ASSETS?.fetch=="function"?e.env.ASSETS.fetch(r):e.next(r)},"fetchKnowgrphAppShellAsset");var ls="kgShare",lu=typeof TextEncoder<"u"?new TextEncoder:null,Yo=typeof TextDecoder<"u"?new TextDecoder:null;var ps=n(e=>{if(typeof Buffer<"u")return Uint8Array.from(Buffer.from(e,"base64"));let t=atob(e),r=new Uint8Array(t.length);for(let o=0;o<t.length;o+=1)r[o]=t.charCodeAt(o);return r},"fromBase64");var us=n(e=>{let t=String(e||"").replace(/-/g,"+").replace(/_/g,"/");if(!t)return"";let r=t.length%4;return r?`${t}${"=".repeat(4-r)}`:t},"fromBase64Url");var ds=n(e=>{if(!Yo)throw new Error("TextDecoder is required to decode published doc share tokens");return Yo.decode(ps(us(e)))},"decodeUtf8Base64Url"),Zo=n(e=>String(e||"").trim()||null,"normalizeWorkspaceId"),gr=n(e=>String(e||"").trim(),"normalizeCanonicalPath"),mr="/knowgrph",Jo="/doc-default/",Xo="/doc/",Qo="/share/",ms="kgWorkspaceId",hs="kgCanonicalPath",gs=n(e=>{let t=String(e||"").trim();return t?`/${t.replace(/^\/+|\/+$/g,"")}`:mr},"normalizeAppBasePath"),hr=n(e=>{let t=gr(e?.canonicalPath);return t?{canonicalPath:t,workspaceId:Zo(e?.workspaceId)}:null},"normalizePublishedDocIdentity"),en=n((e,t)=>{let r=gs(t),o=String(e||"").replace(/\/+$/,"")||"/";if(!o.startsWith(r))return null;let a=o.slice(r.length)||"/";if(a.startsWith(Qo)){let c=decodeURIComponent(a.slice(Qo.length)).trim();return fr(c)}if(a.startsWith(Jo))return hr({canonicalPath:decodeURIComponent(a.slice(Jo.length))});if(!a.startsWith(Xo))return null;let s=a.slice(Xo.length),i=s.indexOf("/");return i<1?null:hr({workspaceId:decodeURIComponent(s.slice(0,i)),canonicalPath:decodeURIComponent(s.slice(i+1))})},"parsePublishedDocPathname"),fs=n(e=>{let t=fr(e?.get(ls));if(t)return t;let r=gr(decodeURIComponent(String(e?.get(hs)||"")));if(r)return hr({workspaceId:decodeURIComponent(String(e?.get(ms)||"")),canonicalPath:r});let o=String(e?.get("kgPath")||"").trim();return o?en(`${mr}${o}`,mr):null},"parsePublishedDocSearchParams");var fr=n(e=>{let t=String(e||"").trim();if(!t)return null;try{let r=JSON.parse(ds(t)),o=gr(r?.canonicalPath);return o?{canonicalPath:o,workspaceId:Zo(r?.workspaceId)}:null}catch{return null}},"decodePublishedDocShareToken"),Ct=n((e={})=>{let t=fr(e.shareToken);if(t)return t;let r=String(e.shareUrl||"").trim();if(!r)return null;try{let o=String(e.baseUrl||"https://airvio.co").trim()||"https://airvio.co",a=new URL(r,o);return fs(a.searchParams)||en(a.pathname,e.appBasePath)}catch{return null}},"resolvePublishedDocIdentity"),tn=String.raw`(args = {}) => {
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
}`;var Tt={push:"/api/storage/push",pull:"/api/storage/pull",collabSave:"/api/storage/collab/save",chatSession:"/api/storage/chat/session",chatRelay:"/api/storage/chat/relay",chatPoliciesPrefix:"/api/storage/chat/policies/",chatAuditPrefix:"/api/storage/chat/audit/",exportPrefix:"/api/storage/export/",docPrefix:"/api/storage/doc/",defaultDocPrefix:"/api/storage/doc-default/",blobPrefix:"/api/storage/blob/",mediaAssetPersist:"/api/storage/media/assets",mediaAssetPrefix:"/api/storage/media/assets/",mediaPrefix:"/api/storage/media/",sourceFilesIndex:"/api/storage/source-files",sourceFilesIndexPrefix:"/api/storage/source-files/",sourceFilesLlms:"/api/storage/llms.txt"};var rn=n((e,t)=>`${Tt.docPrefix}${encodeURIComponent(String(e||"").trim())}/${encodeURIComponent(String(t||"").trim())}`,"buildKnowgrphStorageDocPath"),on=n(e=>`${Tt.defaultDocPrefix}${encodeURIComponent(String(e||"").trim())}`,"buildKnowgrphStorageDefaultDocPath");var nn=n(e=>{let t=String(e||"").trim();return t?`${Tt.sourceFilesIndexPrefix}${encodeURIComponent(t)}`:Tt.sourceFilesIndex},"buildKnowgrphStorageSourceFilesIndexPath");var W="https://airvio.co",vt="https://knowgrph-storage.huijoohwee.workers.dev",C="/knowgrph",k=`${W}${C}/`,an=`${W}/`,ct="kgws:canonical-docs",Te="2026-06-05",et=`${C}/health`,Ze=`${W}${et}`,sn="/.well-known/agent-card.json",yr=`${C}/.well-known/agent-card.json`,Ot=`${W}${sn}`,wr=`${W}/api/storage/source-files`,ys=`${W}/api/storage/doc-default/{canonicalPath}`,ws=`${W}/api/storage/doc/{workspaceId}/{canonicalPath}`,Ss=`${W}/api/storage/blob/{workspaceId}/{canonicalPath}`,cn="knowgrph-agent-ready-pages";var ln=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${C}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${C}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${et}>; rel="status"; type="application/health+json"`,`<${C}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${sn}>; rel="describedby"; type="application/json"`].join(", "),pn=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${k}.

## Discovery

- Crawl policy: ${k}robots.txt
- Sitemap: ${k}sitemap.xml
- API catalog: ${k}.well-known/api-catalog
- Auth.md registration instructions: ${an}auth.md
- Health: ${Ze}
- MCP server card: ${k}.well-known/mcp/server-card.json
- A2A Agent Card: ${Ot}
- Agent skills: ${k}.well-known/agent-skills/index.json
- LLM reference: ${k}llms.txt

## APIs

- Agent-ready status: ${Ze}
- HTTP MCP: ${k}mcp
- Storage API: ${W}/api/storage/
- Source Files index: ${wr}
- Default Source File documents: ${ys}
- Workspace Source File documents: ${ws}
- Workspace binary artifacts: ${Ss}

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
`,un=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),lt=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(r=>r.trim().startsWith("text/markdown")),"wantsMarkdown"),dn=n((e,t)=>{let r=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&r.headers.set("x-knowgrph-route-owner",o),a&&r.headers.set("x-knowgrph-route-tag",a),r},"withAgentReadyRouteHeaders");var Mt=cr({defaultWorkspaceId:ct}),Sn=yo(),_n=bo(),bn=n((e,t="")=>{let r=String(e||"").trim(),o=String(t||"").trim();return o?rn(o,r):on(r)},"buildStorageDocPath"),dt=n(e=>String(e||"").trim(),"normalizeToolString");var Ae=n((e,t="application/json; charset=utf-8")=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"jsonResponse"),me=n((e,t)=>new Response(JSON.stringify(t,null,2),{status:e,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"jsonStatusResponse"),mn=n((e,t={})=>new Response(null,{status:e,headers:{"cache-control":"no-store","access-control-allow-origin":"*",...t}}),"emptyStatusResponse"),pt=n((e,t)=>new Response(e,{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"textResponse"),_s=n(e=>pt(e,"text/html;profile=mcp-app; charset=utf-8"),"mcpAppsHtmlResponse"),bs=n(e=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":"application/health+json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"healthResponse"),As=`${C}/api/workspace/github/write`,Ps="/api/workspace/github/write",hn=12,gn=9e5,Rs=new Set(["css","html","js","json","md","mdx","mjs","svg","ts","tsx","txt","yaml","yml"]),Sr=n((e,t)=>String(e?.[t]||"").trim(),"readEnvString"),ks=n(e=>{let t=Sr(e,"KNOWGRPH_GITHUB_WRITE_REPOSITORY"),r=Sr(e,"KNOWGRPH_GITHUB_WRITE_TOKEN"),o=Sr(e,"KNOWGRPH_GITHUB_WRITE_BRANCH"),a=[];t||a.push("KNOWGRPH_GITHUB_WRITE_REPOSITORY"),r||a.push("KNOWGRPH_GITHUB_WRITE_TOKEN");let s=t.split("/").map(i=>i.trim()).filter(Boolean);return t&&s.length!==2&&a.push("KNOWGRPH_GITHUB_WRITE_REPOSITORY:owner/repo"),a.length>0?{ok:!1,missing:a}:{ok:!0,owner:s[0],repo:s[1],branch:o,token:r}},"readGitHubWriteConfig"),xs=n(e=>{let t=String(e||"").trim().replace(/^workspace:/i,"").replace(/\\/g,"/").replace(/^\/+/,"");if(!t)return{ok:!1,error:"missing_workspace_path"};if(/[\u0000-\u001f\u007f]/.test(t))return{ok:!1,error:"invalid_workspace_path"};let r=t.split("/").filter(Boolean);if(r.some(s=>s==="."||s===".."))return{ok:!1,error:"path_traversal_forbidden"};if(r[0]!=="chat-log")return{ok:!1,error:"unsupported_workspace_root"};if(r.length<3)return{ok:!1,error:"chat_log_session_file_required"};let o=r[r.length-1]||"",a=o.includes(".")?o.split(".").pop().toLowerCase():"";return!a||!Rs.has(a)?{ok:!1,error:"unsupported_text_extension"}:{ok:!0,path:r.join("/")}},"normalizeGitHubWriteWorkspacePath"),Es=n(e=>{let t=new TextEncoder().encode(String(e||"")),r=32768,o="";for(let a=0;a<t.length;a+=r)o+=String.fromCharCode(...t.slice(a,a+r));return btoa(o)},"encodeBase64Utf8"),tt=class extends Error{static{n(this,"GitHubWorkspaceWriteError")}constructor(t,r,o){super(t),this.name="GitHubWorkspaceWriteError",this.code=t,this.upstreamStatus=r,this.upstreamMessage=o}},An=n(e=>String(e||"unknown").replace(/[\u0000-\u001f\u007f]/g," ").replace(/\s+/g," ").trim().slice(0,240),"sanitizeGitHubApiMessage"),Pn=n((e,t)=>{let r=String(t||"").split("/").map(a=>encodeURIComponent(a)).join("/"),o=new URL(`https://api.github.com/repos/${encodeURIComponent(e.owner)}/${encodeURIComponent(e.repo)}/contents/${r}`);return e.branch&&o.searchParams.set("ref",e.branch),o},"buildGitHubContentsApiUrl"),Rn=n(e=>({accept:"application/vnd.github+json",authorization:`Bearer ${e.token}`,"user-agent":"knowgrph-cloudflare-pages","x-github-api-version":"2022-11-28"}),"gitHubApiHeaders"),kn=n(e=>{let t=String(e||"").replace(/\/+$/,"")||"/";return t===As||t===Ps},"isGitHubWorkspaceWriteRoutePath"),Cs=n(async(e,t)=>{let r=await fetch(Pn(e,t),{method:"GET",headers:Rn(e)});if(r.status===404)return null;let o=await r.json().catch(()=>null);if(!r.ok)throw new tt("github_read_failed",r.status,An(o?.message||r.statusText));if(o?.type&&o.type!=="file")throw new tt("github_path_not_file",409,t);return String(o?.sha||"").trim()||null},"fetchGitHubExistingFileSha"),Ts=n(async(e,t,r)=>{let o=await Cs(e,t.repositoryPath),a={message:r,content:Es(t.text),...e.branch?{branch:e.branch}:{},...o?{sha:o}:{}},s=await fetch(Pn(e,t.repositoryPath),{method:"PUT",headers:{...Rn(e),"content-type":"application/json; charset=utf-8"},body:JSON.stringify(a)}),i=await s.json().catch(()=>null);if(!s.ok)throw new tt("github_write_failed",s.status,An(i?.message||s.statusText));return{workspacePath:t.workspacePath,repositoryPath:t.repositoryPath,action:o?"updated":"created",commitSha:String(i?.commit?.sha||""),contentSha:String(i?.content?.sha||""),htmlUrl:String(i?.content?.html_url||"")}},"putGitHubWorkspaceFile"),vs=n(async(e,t)=>{let r=ks(t);if(!r.ok)return me(503,{ok:!1,status:"skipped",error:"github_write_not_configured",missing:r.missing});let o=await e.json().catch(()=>null),a=Array.isArray(o?.files)?o.files:[];if(a.length<1)return me(400,{ok:!1,status:"failed",error:"files_required"});if(a.length>hn)return me(413,{ok:!1,status:"failed",error:"too_many_files",maxFiles:hn});let s=[],i=new Set;for(let p of a){let m=xs(p?.workspacePath||p?.path);if(!m.ok)return me(400,{ok:!1,status:"failed",error:m.error,workspacePath:String(p?.workspacePath||p?.path||"")});if(i.has(m.path))continue;i.add(m.path);let f=String(p?.text??"");if(new TextEncoder().encode(f).length>gn)return me(413,{ok:!1,status:"failed",error:"file_too_large",workspacePath:`/${m.path}`,maxTextBytes:gn});s.push({workspacePath:`/${m.path}`,repositoryPath:m.path,text:f})}if(s.length<1)return me(400,{ok:!1,status:"failed",error:"files_required"});let c=String(o?.message||"").trim(),l=c&&c.length<=160?c:`Knowgrph chat artifact ${s[0].repositoryPath}`;if(o?.dryRun===!0)return me(200,{ok:!0,status:"dry_run",repository:`${r.owner}/${r.repo}`,branch:r.branch||null,files:s.map(p=>({workspacePath:p.workspacePath,repositoryPath:p.repositoryPath,textBytes:new TextEncoder().encode(p.text).length}))});try{let p=[];for(let m of s)p.push(await Ts(r,m,l));return me(200,{ok:!0,status:"applied",repository:`${r.owner}/${r.repo}`,branch:r.branch||null,files:p})}catch(p){let m=p instanceof tt;return me(m?424:500,{ok:!1,status:"failed",error:m?p.code:p instanceof Error?p.message:String(p||"github_write_failed"),...m?{upstreamStatus:p.upstreamStatus,upstreamMessage:p.upstreamMessage}:{}})}},"handleGitHubWorkspaceWrite"),Os=n(e=>`User-agent: *
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
`,"buildRobotsTxt"),Is=n(e=>`<?xml version="1.0" encoding="UTF-8"?>
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
`,"buildSitemapXml"),Ms=Os(`${k}sitemap.xml`),Ns=Is(k),xn={linkset:[{anchor:k,"service-desc":[{href:`${k}.well-known/openapi.json`,type:"application/vnd.oai.openapi+json;version=3.1"}],"service-doc":[{href:`${k}llms.txt`,type:"text/plain"}],status:[{href:Ze,type:"application/health+json"}],"service-meta":[{href:`${k}.well-known/mcp/server-card.json`,type:"application/json"},{href:Ot,type:"application/json"}]}]},En={openapi:"3.1.0",info:{title:"Knowgrph API",version:"0.1.0",description:"Agent discovery surface for the Knowgrph Cloudflare deployment."},servers:[{url:W,description:"Knowgrph Cloudflare deployment"}],paths:qo({appBasePath:C,appA2aAgentCardPath:yr,healthPath:et})},ut={resource:k,resource_name:"Knowgrph",authorization_servers:[W],scopes_supported:["knowgrph:read","knowgrph:source-files:read"],bearer_methods_supported:["header"],resource_documentation:`${k}llms.txt`},_r=`${W}/cdn-cgi/access`,Oe={skill:`${W}/auth.md`,register_uri:`${k}agent/auth`,claim_uri:`${k}agent/auth/claim`,revocation_uri:`${k}agent/auth/revoke`,identity_types_supported:["anonymous","identity_assertion"],anonymous:{credential_types_supported:["api_key"]},identity_assertion:{assertion_types_supported:["urn:ietf:params:oauth:token-type:id-jag","verified_email"],credential_types_supported:["access_token","api_key"]},events_supported:["https://schemas.workos.com/events/agent/auth/identity/assertion/revoked"],registration_status:"metadata_published_runtime_user_mediated"},fn={issuer:W,resource:ut.resource,resource_name:ut.resource_name,authorization_servers:ut.authorization_servers,cloudflare_access_issuer:_r,authorization_endpoint:`${_r}/login`,token_endpoint:`${_r}/token`,jwks_uri:`${k}.well-known/http-message-signatures-directory`,response_types_supported:["code"],grant_types_supported:["authorization_code","client_credentials"],token_endpoint_auth_methods_supported:["client_secret_basic","private_key_jwt"],scopes_supported:ut.scopes_supported,agent_auth:Oe},Us=`# Knowgrph auth.md

Knowgrph publishes agent registration metadata for the read-only agent surface at ${k}. Agents should first fetch ${W}/.well-known/oauth-protected-resource, follow its authorization_servers entry to ${W}/.well-known/oauth-authorization-server, and read the agent_auth block.

## Registration

- Register: ${Oe.register_uri}
- Claim: ${Oe.claim_uri}
- Revoke: ${Oe.revocation_uri}
- Supported identity types: ${Oe.identity_types_supported.join(", ")}
- Anonymous credentials: ${Oe.anonymous.credential_types_supported.join(", ")}
- Identity assertion types: ${Oe.identity_assertion.assertion_types_supported.join(", ")}
- Identity assertion credentials: ${Oe.identity_assertion.credential_types_supported.join(", ")}
- Revocation events: ${Oe.events_supported.join(", ")}
- Current runtime policy: user-mediated access through the existing Cloudflare Access/OAuth boundary; no separate MCP-only auth stack.
- Pipeline rule: agents must not bypass MainPanel -> FloatingPanel Chat -> KGC -> Canvas for user-mediated graph work; published HTTP MCP tools remain read-only until mutation auth and conflict semantics are implemented.`,Cn={name:"Knowgrph Agent",description:"Agent-readable discovery, published-document retrieval, and WebMCP-ready metadata surface for Knowgrph.",version:"0.1.0",provider:{organization:"airvio / joohwee",url:k},url:`${k}mcp`,preferredTransport:"JSONRPC",supportedInterfaces:[{url:`${k}mcp`,protocolBinding:"JSONRPC",transportProtocol:"JSONRPC",description:"Primary machine interface for read-only discovery and source-file document access."},{url:wr,protocolBinding:"HTTP+JSON/REST",transportProtocol:"HTTP+JSON/REST",description:"Published source-files index and storage-backed document read surface."}],capabilities:{streaming:!1,pushNotifications:!1,stateTransitionHistory:!1,extendedAgentCard:!1},defaultInputModes:["text/plain","text/markdown","application/json"],defaultOutputModes:["text/plain","text/markdown","application/json"],skills:Fo(Mt)},Ee={serverInfo:{name:"knowgrph",version:"0.1.0"},transport:{type:Ce,url:`${k}mcp`,stateless:!0},capabilities:{tools:Mt.map(e=>({name:e.name,title:e.title,description:e.description,inputSchema:e.inputSchema,outputSchema:e.outputSchema,securitySchemes:e.securitySchemes,annotations:e.annotations,_meta:e._meta})),resources:{listChanged:!1},prompts:{listChanged:!1},...nr()},prompts:Sn,resourceTemplates:_n,clientSetups:sr({baseUrl:k,mcpUrl:`${k}mcp`,serverName:"knowgrph"}),surfaceRoles:{publicReadMcpUrl:`${k}mcp`,publicReadMcpScope:"Canonical public install and discovery endpoint for read-only retrieval, prompt discovery, resource discovery, and inspection.",controlPlaneMcpUrl:`${k}control-plane/mcp`,controlPlaneMcpScope:"Approval-gated orchestration endpoint for control-plane tools, remote Agentic Canvas OS docs invocation, and spend-bearing workflows where deployed.",remoteGrammarInvokePublic:!0,remoteGrammarInvokeToolName:"knowgrph.agentic_canvas_os.docs.invoke",remoteGrammarInvokeStatus:"live-control-plane"},links:{apiCatalog:`${k}.well-known/api-catalog`,skills:`${k}.well-known/agent-skills/index.json`,status:Ze,agentCard:Ot,controlPlaneMcp:`${k}control-plane/mcp`}},Ls=kt({appUrl:k,updatedAt:Te}),Ar=Mt.map(e=>({name:e.webName,title:e.title,description:e.description,inputSchema:e.inputSchema,outputSchema:e.outputSchema,securitySchemes:e.securitySchemes,annotations:e.annotations,_meta:e._meta})),Be=n(e=>dt(Mt.find(t=>t.name===e)?.webName),"findWebMcpToolName"),Ks=Be(u.search),Ds=Be(u.fetch),$s=Be(u.listSourceFiles),Hs=Be(u.readSourceFile),js=Be(u.readSharedDocument),Gs=Be(u.inspectSharedDocumentStructure),Bs=Be(u.inspectAgentSurface),Ws=`(() => {
  const root = globalThis;
  const siteOrigin = ${JSON.stringify(W)};
  const appBasePath = ${JSON.stringify(C)};
  const defaultWorkspaceId = ${JSON.stringify(ct)};
  const toolDefinitions = ${JSON.stringify(Ar)};
  const toolNames = ${JSON.stringify(Ar.map(e=>e.name))};
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
      search: ${JSON.stringify(Ks)},
      fetch: ${JSON.stringify(Ds)},
      listSourceFiles: ${JSON.stringify($s)},
      readSourceFile: ${JSON.stringify(Hs)},
      readSharedDocument: ${JSON.stringify(js)},
      inspectSharedDocumentStructure: ${JSON.stringify(Gs)},
      inspectAgentSurface: ${JSON.stringify(Bs)},
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
})();`,Fs=n(async e=>{if(!(e.headers.get("content-type")||"").toLowerCase().includes("text/html"))return e;let r=await e.text();if(Ar.every(i=>r.includes(i.name)))return new Response(r,e);let o=`<script>${Ws}<\/script>`,a=r.includes("</head>")?r.replace("</head>",`${o}</head>`):`${r}${o}`,s=new Response(a,e);return s.headers.delete("content-length"),s},"injectWebMcpScript"),zs={search:u.search,fetch:u.fetch,listSourceFiles:u.listSourceFiles,readSourceFile:u.readSourceFile,readSharedDocument:u.readSharedDocument,inspectSharedDocumentStructure:u.inspectSharedDocumentStructure,inspectAgentSurface:u.inspectAgentSurface},qs=n(async e=>{let t=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(r)].map(o=>o.toString(16).padStart(2,"0")).join("")},"sha256Hex"),Tn=Wo(),Vs=Object.fromEntries(it.map(e=>[e.name,qs(Tn[e.name]||"")])),yn=new Map(it.map(e=>[`${C}${e.path}`.replace(/\/+$/,""),Tn[e.name]||""]));var vn=n(async()=>zo({appUrl:k,updatedAt:Te,sha256ByName:Vs}),"agentSkillsIndex"),Ys={keys:[{kty:"OKP",crv:"Ed25519",kid:"knowgrph-agent-ready-2026-05-21",use:"sig",alg:"EdDSA",x:"11qYAYdkVKxA4G0wV47IxPtYfFVH_H7zmC2Di2PcvLU"}]},Js={protocolVersion:"2025-06-18",capabilities:{tools:{},resources:{},prompts:{listChanged:!1},...nr()},serverInfo:Ee.serverInfo},Pr=Ee.capabilities.tools,Xs=[Ls],Qs=Sn,Zs=_n,On=n(()=>({status:"pass",service:"knowgrph-agent-ready-pages",homepage:k,health:Ze,updatedAt:Te,checks:{linkHeaders:!0,markdownNegotiation:!0,httpMcp:!0,webMcp:!0,mcpApps:!0,commerce:{acp:!0,ucp:!0,mpp:!0,x402:!0},defaultWorkspaceId:ct}}),"buildHealthStatusBody"),ei=n(async()=>No({baseUrl:k,health:On(),apiCatalog:xn,openApi:En,mcpServerCard:Ee,agentCard:Cn,agentSkills:await vn(),commerce:Zt({origin:W})}),"buildAgentSurfaceInspection"),ti=lr({toolNames:zs,defaultWorkspaceId:ct,publicBaseUrl:W,buildStorageDocPath:bn,fetchSourceFilesIndexResponse:n(()=>fetch(`${vt}${nn()}`,{headers:{accept:"text/markdown"}}),"fetchSourceFilesIndexResponse"),fetchStorageMarkdownResponse:n(e=>fetch(`${vt}${e}`,{headers:{accept:"text/markdown"}}),"fetchStorageMarkdownResponse"),resolveSharedDocumentInput:n((e={})=>Ct({shareToken:e?.shareToken,shareUrl:e?.shareUrl,appBasePath:C,baseUrl:W}),"resolveSharedDocumentInput"),inspectSharedDocumentStructure:Lo,buildAgentSurfaceInspection:ei}),Rr=n(e=>{try{let t=new URL(e,W);return Ct({shareUrl:`${t.pathname}${t.search}`,baseUrl:W,appBasePath:C})}catch{return null}},"resolvePublishedDocRequestIdentity"),ri=n(e=>Ct({shareUrl:String(e||""),baseUrl:W,appBasePath:C}),"resolvePublishedDocPathIdentity"),oi=n(async(e,t)=>{let r=new URL(bn(t.canonicalPath,t.workspaceId),vt),o=await fetch(r,{method:"GET",headers:{accept:"text/markdown, text/plain;q=0.9, */*;q=0.1"}}),a=new Headers(o.headers),s=String(a.get("vary")||"");return a.set("vary",s?`${s}, Accept`:"Accept"),new Response(String(e.method||"").toUpperCase()==="HEAD"?null:o.body,{status:o.status,statusText:o.statusText,headers:a})},"proxyPublishedDocMarkdownResponse"),ni=n(async e=>{try{let t=await e.json();return t&&typeof t=="object"?t:null}catch{return null}},"readJsonRpcRequest"),ve=n((e,t)=>me(200,{jsonrpc:"2.0",id:e??null,result:t}),"jsonRpcResult"),Le=n((e,t,r)=>me(200,{jsonrpc:"2.0",id:e??null,error:{code:t,message:r}}),"jsonRpcError"),ai=n(e=>String(e.headers.get("accept")||"").toLowerCase().split(",").some(t=>t.trim().startsWith("text/event-stream")),"requestAcceptsEventStream"),br=n((e,t)=>Object.prototype.hasOwnProperty.call(e,t),"hasOwnProperty"),In=n(e=>{if(Array.isArray(e))return e.length>0&&e.every(In);if(!e||typeof e!="object"||String(e.jsonrpc||"")!=="2.0")return!1;let t=typeof e.method=="string"&&e.method.length>0,r=br(e,"id"),o=br(e,"result")||br(e,"error");return t&&!r||!t&&o},"isJsonRpcNotificationOrResponse"),Mn=n(async(e,t)=>{let r=ti[e];if(typeof r!="function")throw new Error(`unknown tool: ${e}`);return r(t)},"executeMcpTool"),si=n(async e=>{let t=dt(e);if(t===de)return ir({appUrl:k,updatedAt:Te,toolNames:Pr.map(o=>o.name)});let r=Ao(t);if(r){let o=await Mn(u.fetch,{id:r});return Po({uri:t,sourceFile:o})}throw new Error(`unknown resource: ${e}`)},"readMcpResource"),ii=n(async e=>{let t=String(e.method||"GET").toUpperCase();if(t==="GET"||t==="HEAD")return ai(e)?mn(405,{allow:"POST"}):Ae({ok:!0,transport:Ee.transport,serverInfo:Ee.serverInfo,capabilities:Ee.capabilities,links:Ee.links,surfaceRoles:Ee.surfaceRoles});if(t!=="POST")return me(405,{ok:!1,error:"unsupported_method"});let r=await ni(e);if(!r)return Le(null,-32700,"Parse error");if(In(r))return mn(202);if(Array.isArray(r))return Le(null,-32600,"Batch JSON-RPC requests are not supported");switch(r.method){case"initialize":return ve(r.id,Js);case"tools/list":return ve(r.id,{tools:Pr});case"prompts/list":return ve(r.id,{prompts:Qs});case"resources/templates/list":return ve(r.id,{resourceTemplates:Zs});case"prompts/get":{let o=dt(r.params?.name),a=r.params?.arguments&&typeof r.params.arguments=="object"?r.params.arguments:{};if(!o)return Le(r.id,-32602,"Prompt name is required");try{return ve(r.id,wo(o,a))}catch(s){return Le(r.id,-32602,s instanceof Error?s.message:String(s))}}case"resources/list":return ve(r.id,{resources:Xs});case"resources/read":{let o=dt(r.params?.uri);if(!o)return Le(r.id,-32602,"Resource URI is required");try{return ve(r.id,await si(o))}catch(a){return Le(r.id,-32602,a instanceof Error?a.message:String(a))}}case"tools/call":{let o=dt(r.params?.name),a=r.params?.arguments&&typeof r.params.arguments=="object"?r.params.arguments:{};if(!o)return Le(r.id,-32602,"Tool name is required");try{let s=await Mn(o,a);return ve(r.id,{content:[{type:"text",text:typeof s?.markdown=="string"?s.markdown:JSON.stringify(s,null,2)}],structuredContent:s,isError:!1})}catch(s){return ve(r.id,{content:[{type:"text",text:s instanceof Error?s.message:String(s)}],isError:!0})}}default:return Le(r.id,-32601,"Method not found")}},"handleMcpTransport"),ci=n(()=>ir({appUrl:k,updatedAt:Te,toolNames:Pr.map(e=>e.name)}).contents[0].text,"buildKnowgrphMcpAppHtmlBody");var Nt=n(e=>e===C||e===`${C}/`,"handlesKnowgrphRoot"),li=n(e=>Nt(e)||!!ri(e),"handlesKnowgrphHtmlSurface"),pi=n(e=>e.startsWith(`${C}/assets/`),"handlesKnowgrphStaticAsset"),ui=n(async e=>{let t=new Headers(e.request.headers);t.delete("origin");let r=new Request(e.request.url,{method:e.request.method,headers:t});return typeof e.env?.ASSETS?.fetch=="function"?e.env.ASSETS.fetch(r):e.next(r)},"fetchKnowgrphStaticAsset"),di=n(e=>{let t=new URL(e.url),r=t.pathname.replace(/\/+$/,"")||"/",o=Rr(e.url);return r===et?"health":r===`${C}/mcp`?"mcp":kn(r)?"github-workspace-write":r===`${C}/robots.txt`?"robots":r===`${C}/sitemap.xml`?"sitemap":r===`${C}/auth.md`||r==="/auth.md"?"auth-md":r.startsWith(`${C}/.well-known/`)?"well-known":o?lt(e)?"shared-doc-markdown":"shared-doc-html":Nt(t.pathname)?lt(e)?"homepage-markdown":"homepage-html":"app-surface"},"resolveAgentReadyRouteTag"),It=n((e,t)=>dn(t,{owner:cn,tag:di(e)}),"withKnowgrphRouteHeaders"),wn=n(async e=>{let t=new URL(e.url),r=t.pathname.replace(/\/+$/,"")||"/",o=Rr(e.url);if(o&&lt(e))return oi(e,o);if(Nt(t.pathname)&&lt(e))return un(pn);switch(r){case et:return bs(On());case`${C}/mcp`:return ii(e);case`${C}/robots.txt`:return pt(Ms,"text/plain; charset=utf-8");case`${C}/sitemap.xml`:return pt(Ns,"application/xml; charset=utf-8");case`${C}/auth.md`:case"/auth.md":return pt(Us,"text/markdown; charset=utf-8");case`${C}/.well-known/api-catalog`:return Ae(xn,"application/linkset+json; charset=utf-8");case`${C}/.well-known/openapi.json`:return Ae(En,"application/vnd.oai.openapi+json; charset=utf-8");case yr:return Ae(Cn);case`${C}/.well-known/oauth-protected-resource`:return Ae(ut);case`${C}/.well-known/oauth-authorization-server`:return Ae(fn);case`${C}/.well-known/openid-configuration`:return Ae(fn);case`${C}/.well-known/mcp/server-card.json`:return Ae(Ee);case`${C}/.well-known/mcp/apps/knowgrph-agent-ready.html`:return _s(ci());case`${C}/.well-known/mcp.json`:return Ae(Ee);case`${C}/.well-known/agent-skills/index.json`:return Ae(await vn());case`${C}/.well-known/http-message-signatures-directory`:return Ae(Ys);default:return yn.has(r)?pt(yn.get(r),"text/markdown; charset=utf-8"):null}},"routeResponse");async function Ke(e){let{env:t,request:r}=e,o=String(r.method||"GET").toUpperCase(),a=new URL(r.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(o==="POST"&&a.pathname.replace(/\/+$/,"")===`${C}/mcp`)return It(r,await wn(r));if(o==="POST"&&kn(a.pathname))return It(r,await vs(r,t));if(o!=="GET"&&o!=="HEAD")return me(405,{ok:!1,error:"unsupported_method"});if(pi(a.pathname))return ui(e);let s=await wn(r);if(s){let p=It(r,s);return o==="HEAD"?new Response(null,p):p}let i=Rr(r.url)?await Vo(e,C):await e.next();if(!li(a.pathname))return i;let c=o==="HEAD"?i:await Fs(i),l=new Response(o==="HEAD"?null:c.body,c);return l.headers.set("link",ln),Nt(a.pathname)&&(l.headers.delete("x-frame-options"),l.headers.set("content-security-policy","frame-ancestors *")),It(r,l)}n(Ke,"onRequest");async function Nn(e){return Ke(e)}n(Nn,"onRequest");async function Un(e){return Ke(e)}n(Un,"onRequest");async function Ln(e){return Ke(e)}n(Ln,"onRequest");var mi=Object.freeze(new Set(["","80","443"])),hi=Object.freeze([".local",".localhost",".internal"]),gi=Object.freeze(new Set(["localhost"]));function We(e){return String(e||"").trim().toLowerCase()}n(We,"normalizeHostname");function fi(e){let t=We(e);if(!/^\d{1,3}(\.\d{1,3}){3}$/.test(t))return!1;let r=t.split(".").map(o=>Number(o));return r.length!==4?!1:r.every(o=>Number.isInteger(o)&&o>=0&&o<=255)}n(fi,"isIpv4Literal");function Kn(e){let[t,r,o,a]=e.split(".").map(s=>Number(s));return(t<<24|r<<16|o<<8|a)>>>0}n(Kn,"ipv4ToInt");function yi(e,t,r){if(!Number.isInteger(r)||r<0||r>32)return!1;if(r===0)return!0;let o=4294967295<<32-r>>>0;return(e&o)===(t&o)}n(yi,"inIpv4Cidr");function wi(e){let t=We(e);return!t||!t.includes(":")?!1:/^[0-9a-f:]+$/i.test(t)}n(wi,"isIpv6Literal");function Si(e){let t=We(e);return!!(!t||t==="::1"||t==="0:0:0:0:0:0:0:1"||t.startsWith("fc")||t.startsWith("fd")||/^fe[89ab]/i.test(t))}n(Si,"isBlockedIpv6");function _i(e,{blockedExact:t,blockedSuffixes:r}={}){let o=We(e);if(!o)return!0;let a=t||gi;if(a instanceof Set&&a.has(o))return!0;let s=r||hi;if(Array.isArray(s))for(let i of s){let c=We(i);if(c&&(o===c||o.endsWith(c)))return!0}return!1}n(_i,"isBlockedHostname");function bi(e){let t=We(e);if(!t)return!0;if(fi(t)){let r=Kn(t),o=[{base:"0.0.0.0",bits:8},{base:"10.0.0.0",bits:8},{base:"127.0.0.0",bits:8},{base:"169.254.0.0",bits:16},{base:"172.16.0.0",bits:12},{base:"192.168.0.0",bits:16},{base:"100.64.0.0",bits:10}];for(let a of o){let s=Kn(a.base);if(yi(r,s,a.bits))return!0}return!1}return wi(t)?Si(t):!1}n(bi,"isBlockedIpLiteral");function Ut(e,{allowedPorts:t}={}){let r=String(e||"").trim();if(!r)throw new Error("invalid_url");let o;try{o=new URL(r)}catch{throw new Error("invalid_url")}if(o.protocol!=="http:"&&o.protocol!=="https:")throw new Error("invalid_url");if(o.username||o.password)throw new Error("invalid_url");let a=t||mi,s=String(o.port||"");if(a instanceof Set&&!a.has(s))throw new Error("port_not_allowed");let i=We(o.hostname);if(!i)throw new Error("invalid_url");if(_i(i))throw new Error("blocked_host");if(bi(i))throw new Error("blocked_host");return o}n(Ut,"parseAndValidateExternalUrl");function Lt(e){return String(e.headers.get("sec-fetch-site")||"").trim().toLowerCase()==="cross-site"}n(Lt,"shouldRejectCrossSiteFetch");var Ai={"content-type":"application/json; charset=utf-8","cache-control":"public, max-age=600"};function Fe(e,t={}){return new Response(JSON.stringify(e),{...t,headers:{...Ai,...t.headers||{}}})}n(Fe,"json");function Kt(...e){for(let t of e){if(!t)continue;let r=String(t).trim();if(r)return r}return null}n(Kt,"pickFirst");function Pi(e){let t=e.slice(0,8e4),r=t.match(/<title[^>]*>([^<]*)<\/title>/i),o=t.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i),a=t.match(/<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i),s=t.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i),i=t.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i),c=t.match(/<meta[^>]+property=["']og:site_name["'][^>]*content=["']([^"']+)["'][^>]*>/i);return{title:Kt(o?.[1],r?.[1]),description:Kt(a?.[1],s?.[1]),image:Kt(i?.[1]),siteName:Kt(c?.[1])}}n(Pi,"extractMeta");async function Dn(e){let t=e.request.url,r=new URL(t);if(r.searchParams.get("ping")==="1")return Fe({ok:!0,ping:!0});let o=r.searchParams.get("url")||"";if(Lt(e.request))return Fe({ok:!1,error:"forbidden"},{status:403,headers:{"cache-control":"no-store"}});let a;try{a=Ut(o)}catch{return Fe({ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}try{let s=await fetch(a.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkPreview/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),i=s.headers.get("content-type")||"";if(!s.ok)return Fe({ok:!1,error:"fetch_failed",status:s.status,url:a.toString()},{status:200,headers:{"cache-control":"no-store"}});if(!i.includes("text/html"))return Fe({ok:!0,url:a.toString(),domain:a.host,contentType:i,title:null,description:null,image:null,siteName:null});let c=await s.text(),l=Pi(c);return Fe({ok:!0,url:a.toString(),domain:a.host,contentType:i,...l})}catch(s){return Fe({ok:!1,error:"exception",message:s?.message||String(s),url:a.toString()},{status:200,headers:{"cache-control":"no-store"}})}}n(Dn,"onRequestGet");var $n=35e4;function Ri(e){let t=e;return t=t.replace(/<script\b[\s\S]*?<\/script>/gi,""),t=t.replace(/<iframe\b[\s\S]*?<\/iframe>/gi,""),t=t.replace(/<object\b[\s\S]*?<\/object>/gi,""),t=t.replace(/<embed\b[\s\S]*?>/gi,""),t=t.replace(/<noscript\b[\s\S]*?<\/noscript>/gi,""),t=t.replace(/\son[a-z]+\s*=\s*"[^"]*"/gi,""),t=t.replace(/\son[a-z]+\s*=\s*'[^']*'/gi,""),t}n(Ri,"stripActiveContent");function ki({url:e,title:t,innerHtml:r}){let o=t?String(t).slice(0,140):"Preview",a=String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");return`<!doctype html>
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
</html>`}n(ki,"buildWrapper");async function Hn(e){let r=new URL(e.request.url).searchParams.get("url")||"";if(Lt(e.request))return new Response("Forbidden",{status:403,headers:{"cache-control":"no-store"}});let o;try{o=Ut(r)}catch(a){let s=a instanceof Error?a.message:"invalid_url";return new Response(s,{status:400,headers:{"cache-control":"no-store"}})}try{let a=await fetch(o.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkProxy/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),s=a.headers.get("content-type")||"";if(!a.ok)return new Response(`Fetch failed (${a.status})`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});if(!s.includes("text/html"))return new Response(`Unsupported content-type: ${s}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public, max-age=600"}});let i=await a.text();i.length>$n&&(i=i.slice(0,$n));let l=i.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()||o.host;i=Ri(i),/<base\s/i.test(i)||(i=i.replace(/<head([^>]*)>/i,`<head$1><base href="${o.origin}/">`));let m=ki({url:o.toString(),title:l,innerHtml:i});return new Response(m,{status:200,headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600","content-security-policy":"default-src 'none'; img-src https: data:; style-src 'unsafe-inline' https:; font-src https: data:; frame-ancestors 'self';"}})}catch(a){return new Response(`Exception: ${a?.message||String(a)}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}})}}n(Hn,"onRequestGet");var kr="api.openai.com",xr="gateway.ai.cloudflare.com",Er="api.cloudflare.com",Dt="api.miromind.ai",$t="apihub.agnes-ai.com",Ht="ark.ap-southeast.bytepluses.com",Cr="ark.eu-west.bytepluses.com",Gn=new Set(["localhost","127.0.0.1","0.0.0.0"]),Pe=n(e=>String(e||"").trim().toLowerCase(),"normalizeHost"),le=n((e,t)=>String(e.get(t)||"").trim(),"readHeader"),Bn=n(e=>Gn.has(Pe(e)),"isLocalHost"),jn=n(e=>{let t=String(e||"").trim();if(!t)return new Set;let r=new Set;return t.split(",").map(o=>Pe(o)).filter(Boolean).forEach(o=>r.add(o)),r},"parseCsvSet"),Wn=n((e,{includeOpenAi:t=!1,includeAiGateway:r=!1,includeMiroMind:o=!1,includeAgnes:a=!1,includeBytePlus:s=!1}={})=>{let i=jn(e.KNOWGRPH_INTEGRATION_ALLOWED_HOSTS),c=jn(e.KNOWGRPH_CHAT_PROXY_ALLOWED_HOSTS),l=i.size?i:c,p=l.size?l:new Set([...Gn]);return t&&p.add(kr),r&&(p.add(xr),p.add(Er)),o&&p.add(Dt),a&&p.add($t),s&&(p.add(Ht),p.add(Cr)),p},"parseAllowedHosts"),se=n(e=>{let t=le(e.headers,"origin");if(!t)return{};let r="";try{r=Pe(new URL(t).host)}catch{return{}}let o=Pe(new URL(e.url).host);return r===o||r.startsWith("localhost:")||r.startsWith("127.0.0.1:")?{"access-control-allow-origin":t,vary:"Origin"}:{}},"corsHeaders"),he=n((e,t,r)=>new Response(JSON.stringify(t),{status:r,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...se(e)}}),"jsonResponse");var jt={"content-type":"application/json; charset=utf-8","cache-control":"no-store"};function mt(e,t,r=200){return new Response(JSON.stringify(t),{status:r,headers:{...jt,...se(e)}})}n(mt,"jsonResponse");async function xi(e){let t=new URL("/knowgrph/imports/hackamap/hackamap-graph.json",e.url),r=await fetch(t.toString(),{redirect:"follow"});return r.ok?await r.json():null}n(xi,"fetchHackamapGraphJson");async function ze(e,t){let r=new URL(t,e.url),o=await fetch(r.toString(),{redirect:"follow"});return o.ok?await o.json():null}n(ze,"fetchHackamapJson");async function Ei(e){let t=await ze(e,"/knowgrph/imports/hackamap/hackamap_api_graph.json");return Vn(t)?t:null}n(Ei,"fetchHackamapApiGraphJson");async function Ci(e){let t=await ze(e,"/knowgrph/imports/hackamap/hackamap_pipeline.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n(Ci,"fetchHackamapPipelineJson");async function zn(e){let t=await ze(e,"/knowgrph/imports/hackamap/hackamap_query_presets.json");return Array.isArray(t)?t.filter(Boolean):[]}n(zn,"fetchHackamapQueryPresetsJson");async function qn(e){let t=await ze(e,"/knowgrph/imports/hackamap/query-outputs/query-runs.manifest.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n(qn,"fetchHackamapQueryRunsManifestJson");function Vn(e){return!e||typeof e!="object"||Array.isArray(e)?!1:Array.isArray(e.nodes)&&Array.isArray(e.edges)}n(Vn,"isApiGraphPayload");function Yn(e,t){let r=String(e&&e.output&&e.output.per_table_prefix||e?.id||t?.preset||"").trim(),o=String(t?.output_suffix||"").trim();return o?`${r}-${o}`:r}n(Yn,"buildHackamapTablePrefix");function Tr(e,t){if(!Array.isArray(e))return[];let r=[];for(let o of e){if(!o||typeof o!="object"||Array.isArray(o))continue;let a=String(o[t]||"").trim();a&&r.push(a)}return r}n(Tr,"collectRowIds");async function Ti(e,t){let r=await ze(e,t);return Array.isArray(r)?r.length:0}n(Ti,"countHackamapQueryRows");async function vi(e,t,r){let o=Yn(t,r);if(!o)return{};let a=["events","demos","sources","organizer","team","techstack"],s=await Promise.all(a.map(async i=>[i,await Ti(e,`/knowgrph/imports/hackamap/query-outputs/${i}.${o}.query.json`)]));return Object.fromEntries(s.filter(([,i])=>i>0))}n(vi,"readHackamapRunTableCounts");function vr(e){return Array.isArray(e)?e.map(vr):!e||typeof e!="object"?e:Object.fromEntries(Object.entries(e).sort(([t],[r])=>String(t).localeCompare(String(r))).map(([t,r])=>[t,vr(r)]))}n(vr,"sortObjectKeys");function Oi(e){try{return JSON.stringify(vr(e))}catch{return""}}n(Oi,"stableParamSignature");function Ii(e){return typeof e=="string"?{value:e,label:e}:{value:e,label:JSON.stringify(e)}}n(Ii,"toBuilderOption");function Mi(e,t){return e.map(r=>{let o=String(r?.id||"").trim();if(!o)return null;let a=r?.params&&typeof r.params=="object"&&!Array.isArray(r.params)?r.params:{},s=t.filter(l=>String(l?.preset||"").trim()===o),i=Array.from(new Set([...Object.keys(a),...s.flatMap(l=>l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?Object.keys(l.params):[])])).sort((l,p)=>String(l).localeCompare(String(p))),c=Object.fromEntries(i.map(l=>{let p=new Set,m=[],f=[a[l],...s.map(P=>P?.params&&typeof P.params=="object"&&!Array.isArray(P.params)?P.params[l]:void 0)];for(let P of f){if(typeof P>"u")continue;let _=Oi(P);!_||p.has(_)||(p.add(_),m.push(Ii(P)))}return[l,m]}));return{id:o,title:String(r?.title||o).trim(),params:a,param_keys:i,published_param_options:c}}).filter(Boolean)}n(Mi,"buildHackamapPresetRuntimeEntries");async function Ni(e){let[t,r,o]=await Promise.all([Ci(e),zn(e),qn(e)]),a=t&&typeof t=="object"?t.runtime||{}:{},s=String(a?.query_selection?.default_run_id||"").trim()||"enhanced",i=Array.isArray(o?.runs)?o.runs:[],c=(await Promise.all(i.map(async l=>{let p=String(l?.id||"").trim(),m=String(l?.preset||"").trim();if(!p)return null;let f=r.find(_=>String(_?.id||"").trim()===m),P=await vi(e,f,l);return{id:p,preset:m,title:String(l?.title||l?.id||"").trim(),params:l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?l.params:{},output_suffix:String(l?.output_suffix||"").trim(),is_default:p===s,table_counts:P}}))).filter(l=>l?.id);return{ok:!0,runtime:{...a&&typeof a=="object"?a:{},presets:Mi(r,c),runs:c}}}n(Ni,"buildHackamapRuntimeMeta");async function Ui(e,t){let r=String(t||"").trim();if(!r)return null;let[o,a]=await Promise.all([zn(e),qn(e)]),i=(Array.isArray(a?.runs)?a.runs:[]).find(T=>String(T?.id||"").trim()===r);if(!i)return null;let c=o.find(T=>String(T?.id||"").trim()===String(i?.preset||"").trim()),l=Yn(c,i);if(!l)return null;let[p,m]=await Promise.all([ze(e,`/knowgrph/imports/hackamap/query-outputs/events.${l}.query.json`),ze(e,`/knowgrph/imports/hackamap/query-outputs/demos.${l}.query.json`)]),f=new Set(Tr(p,"id")),P=new Set(Tr(m,"id")),_=Tr(m,"event_id");for(let T of _)f.add(T);return{eventIds:f,demoIds:P}}n(Ui,"readHackamapQueryRunSelection");function Fn(e,t,r){if(!r||!Vn(e))return e;if(r.eventIds.size===0&&r.demoIds.size===0)return{...e,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_run_filter_skipped:"no-event-demo-rows"}};let o=new Set;r.eventIds.forEach(c=>o.add(`Event:${c}`)),r.demoIds.forEach(c=>o.add(`Demo:${c}`));let a=Array.isArray(e.nodes)?e.nodes.filter(c=>o.has(String(c?.id||"").trim())):[],s=new Set(a.map(c=>String(c?.id||"").trim()).filter(Boolean)),i=Array.isArray(e.edges)?e.edges.filter(c=>s.has(String(c?.source||"").trim())&&s.has(String(c?.target||"").trim())):[];return{...e,nodes:a,edges:i,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_event_count:r.eventIds.size,selected_demo_count:r.demoIds.size,total_problems:a.filter(c=>String(c?.type||"").trim()==="problem").length,total_solutions:a.filter(c=>String(c?.type||"").trim()==="solution").length}}}n(Fn,"filterHackamapApiGraphPayloadByRun");function Li(e){let t=Array.isArray(e?.nodes)?e.nodes:[],r=Array.isArray(e?.links)?e.links:[],o=[],a=new Set;for(let i of t){let c=String(i?.id||"").trim(),l=String(i?.type||"").trim(),p=String(i?.label||"").trim();if(!(!c||!l||!p)){if(l==="Event"){o.push({id:c,type:"problem",label:p,cluster:"Event"}),a.add(c);continue}l==="Demo"&&(o.push({id:c,type:"solution",label:p,cluster:"Demo"}),a.add(c))}}let s=[];for(let i of r){let c=String(i?.source||"").trim(),l=String(i?.target||"").trim(),p=String(i?.type||"").trim();!c||!l||p==="has_demo"&&(!a.has(c)||!a.has(l)||s.push({source:c,target:l,type:"has_demo",strength:.35}))}return{nodes:o,edges:s,meta:{source:"hackamap-graph.json:fallback",total_problems:o.filter(i=>i.type==="problem").length,total_solutions:o.filter(i=>i.type==="solution").length,...e?.content_signature?{content_signature:String(e.content_signature)}:{}}}}n(Li,"toBipartiteApiPayload");async function Jn(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{...se(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(r!=="GET"&&r!=="HEAD")return mt(t,{ok:!1,error:"unsupported_method"},405);if(String(o.searchParams.get("view")||"").trim().toLowerCase()==="meta"){let m=await Ni(t);return r==="HEAD"?new Response(null,{status:200,headers:{...jt,...se(t)}}):mt(t,m,200)}let a=String(o.searchParams.get("run")||"").trim(),s=await Ui(t,a),i=await Ei(t);if(i){let m=Fn(i,a,s);return r==="HEAD"?new Response(null,{status:200,headers:{...jt,...se(t)}}):mt(t,m,200)}let c=await xi(t);if(!c)return mt(t,{ok:!1,error:"missing_hackamap_graph",hint:"/knowgrph/imports/hackamap/{hackamap_api_graph.json,hackamap-graph.json} not found"},404);let l=Li(c),p=Fn(l,a,s);return r==="HEAD"?new Response(null,{status:200,headers:{...jt,...se(t)}}):mt(t,p,200)}n(Jn,"onRequest");var Ki=!0,Xn=600,Qn={"content-type":"application/json; charset=utf-8","cache-control":`public, max-age=${Xn}`};function qe(e,t,r={}){return new Response(JSON.stringify(t),{...r,headers:{...Qn,...r.headers||{},...se(e)}})}n(qe,"jsonResponse");function Di(e){try{let t=new URL(String(e));return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}n(Di,"isHttpUrl");function ht(e){return String(e||"").trim().toLowerCase()}n(ht,"normalizeHost");function Or(e,{exact:t,suffixes:r}){let o=ht(e);return o?!!(Array.isArray(t)&&t.some(a=>o===ht(a))||Array.isArray(r)&&r.some(a=>o===ht(a)||o.endsWith(`.${ht(a)}`))):!1}n(Or,"isHostMatch");function $i(e){let t=ht(e.hostname),r=e.toString();return Or(t,{suffixes:["linkedin.com"]})?new URL(`https://www.linkedin.com/embeds/oembed.json?url=${encodeURIComponent(r)}`):Or(t,{exact:["twitter.com","x.com"],suffixes:["twitter.com","x.com"]})?new URL(`https://publish.twitter.com/oembed?omit_script=1&url=${encodeURIComponent(r)}`):Or(t,{exact:["reddit.com"],suffixes:["reddit.com"]})?new URL(`https://www.reddit.com/oembed?url=${encodeURIComponent(r)}`):null}n($i,"buildOembedUpstreamUrl");async function Hi({upstreamUrl:e}){return await fetch(e.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; OEmbedProxy/1.0)",accept:"application/json,text/json;q=0.9,*/*;q=0.1"},redirect:"follow",cf:{cacheTtl:Xn,cacheEverything:!0}})}n(Hi,"fetchJsonUpstream");async function Zn(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase(),o=new URL(t.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{...se(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD"].includes(r))return qe(t,{ok:!1,error:"unsupported_method"},{status:405});if(o.searchParams.get("ping")==="1")return qe(t,{ok:!0,ping:!0});if(Ki)return qe(t,{ok:!1,error:"disabled_by_policy"},{status:200,headers:{"cache-control":"no-store"}});let a=o.searchParams.get("url")||"";if(!Di(a))return qe(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}});let s;try{s=new URL(a)}catch{return qe(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}let i=$i(s);if(!i)return qe(t,{ok:!1,error:"unsupported_provider"},{status:400,headers:{"cache-control":"no-store"}});let c=await Hi({upstreamUrl:i}),l=new Headers(c.headers);l.delete("content-length"),l.set("cache-control",c.ok?Qn["cache-control"]:"no-store");for(let[m,f]of Object.entries(se(t)))l.set(m,f);if(r==="HEAD")return new Response(null,{status:c.status,headers:l});let p=await c.text();try{JSON.parse(p)}catch{return qe(t,{ok:!1,error:"invalid_upstream_json",status:c.status},{status:502,headers:{"cache-control":"no-store"}})}return l.set("content-type","application/json; charset=utf-8"),new Response(p,{status:c.status,headers:l})}n(Zn,"onRequest");var ea="/__chat_proxy",Gt="agnes-ai",Bt="byteplus-modelark",Wt="miromind",ji="x-kg-ai-gateway-route",Gi="x-kg-ai-gateway-metadata",Bi="x-kg-ai-gateway-cache-ttl",Wi=n(e=>{let t=Pe(e);return t==="openai"?"openai":t===Bt||t==="byteplus"?Bt:t===Wt||t==="miromind-api"?Wt:t===Gt||t==="agnes"||t==="agnes-ai-api"?Gt:t},"normalizeProviderId"),Fi=n(e=>Pe(e)===$t,"isAgnesHost"),zi=n(e=>{let t=Pe(e);return t===Ht||t===Cr},"isBytePlusHost"),qi=n(e=>Pe(e)===Dt,"isMiroMindHost"),Vi=n(e=>{let t=Pe(e);return t===xr||t===Er},"isAiGatewayHost"),Yi=n(e=>{let t=String(e||"").trim();return/^dynamic\/[a-z0-9._/-]+$/i.test(t)?t.slice(0,128):""},"sanitizeAiGatewayRoute"),Ji=n(e=>{let t=String(e||"").trim();if(!t)return"";try{let r=JSON.parse(t),o=Object.entries(r||{}).filter(([,a])=>typeof a=="string"||typeof a=="number"||typeof a=="boolean").slice(0,5).map(([a,s])=>[String(a||"").trim().slice(0,64),typeof s=="string"?s.trim().slice(0,160):s]).filter(([a])=>a);return o.length?JSON.stringify(Object.fromEntries(o)):""}catch{return""}},"sanitizeAiGatewayMetadata"),Xi=n(e=>{let t=Number(String(e||"").trim());return Number.isFinite(t)?String(Math.max(1,Math.min(86400,Math.floor(t)))):""},"sanitizeAiGatewayCacheTtl"),Qi=n((e,t,r)=>{let a=`${e.pathname==="/"?"":String(e.pathname||"").replace(/\/+$/g,"")}${t.startsWith("/")?t:`/${t}`}`;return new URL(`${a}${r||""}`,`${e.protocol}//${e.host}`)},"buildUpstreamUrl"),Zi=n(({provider:e,requestedUpstream:t,env:r})=>e==="openai"?t||"https://api.openai.com":e===Wt?t||`https://${Dt}`:e===Gt?t||`https://${$t}`:e===Bt?t||String(r.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim()||`https://${Ht}`:t||String(r.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim(),"pickUpstreamBase");async function ta(e){let{request:t,env:r}=e,o=String(t.method||"GET").toUpperCase(),a=new URL(t.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":le(t.headers,"origin")||"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD","POST"].includes(o))return he(t,{ok:!1,error:"Unsupported method"},405);let s=Wi(le(t.headers,"x-kg-chat-provider")),i=Yi(le(t.headers,ji)),c=Ji(le(t.headers,Gi)),l=Xi(le(t.headers,Bi)),p=String(r.KNOWGRPH_CHAT_PROXY_AI_GATEWAY_BASE_URL||"").trim(),m=String(r.KNOWGRPH_CHAT_PROXY_AI_GATEWAY_GATEWAY_ID||"").trim(),f=s==="openai"&&!!p&&!!i,P=Zi({provider:s,requestedUpstream:f?p:le(t.headers,"x-kg-chat-upstream"),env:r});if(!P)return he(t,{ok:!1,error:"Missing chat proxy upstream configuration"},500);let _;try{_=new URL(P)}catch{return he(t,{ok:!1,error:"Invalid chat proxy upstream configuration"},500)}let T=Wn(r,{includeOpenAi:!0,includeAiGateway:!0,includeMiroMind:!0,includeAgnes:!0,includeBytePlus:!0}),M=Pe(_.hostname);if(!T.has(M))return he(t,{ok:!1,error:"Chat proxy upstream host is not allowed"},403);if(!Bn(M)&&_.protocol!=="https:")return he(t,{ok:!1,error:"Chat proxy requires HTTPS for non-local upstream hosts"},403);let U=f||Vi(M),B=!U&&(s==="openai"||M===kr),X=s===Wt||qi(M),F=s===Gt||Fi(M),x=s===Bt||zi(M),v=le(t.headers,"x-kg-chat-api-key"),ee=String(r.KNOWGRPH_CHAT_PROXY_AI_GATEWAY_TOKEN||r.AI_GATEWAY_TOKEN||r.CLOUDFLARE_API_TOKEN||"").trim(),j=String(r.KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY||r.OPENAI_API_KEY||"").trim(),ie=String(r.KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY||r.MIROMIND_API_KEY||"").trim(),L=String(r.KNOWGRPH_CHAT_PROXY_AGNES_API_KEY||r.AGNES_API_KEY||"").trim(),K=String(r.KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY||r.BYTEPLUS_API_KEY||"").trim(),V=(v||ee).slice(0,512),ne=(v||j).slice(0,512),Se=(v||ie).slice(0,512),Re=(v||L).slice(0,512),R=(v||K).slice(0,512),w=x?R:U?V:F?Re:X?Se:ne;if(U&&!w)return he(t,{ok:!1,error:"Missing Cloudflare AI Gateway token for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_AI_GATEWAY_TOKEN or AI_GATEWAY_TOKEN)"},401);if(B&&!ne)return he(t,{ok:!1,error:"Missing OpenAI API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY or OPENAI_API_KEY)"},401);if(X&&!w)return he(t,{ok:!1,error:"Missing MiroMind API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY or MIROMIND_API_KEY)"},401);if(F&&!w)return he(t,{ok:!1,error:"Missing Agnes API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_AGNES_API_KEY or AGNES_API_KEY)"},401);if(x&&!w)return he(t,{ok:!1,error:"Missing BytePlus API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY or BYTEPLUS_API_KEY)"},401);if(o==="POST"&&!le(t.headers,"content-type").toLowerCase().includes("application/json"))return he(t,{ok:!1,error:"Chat proxy expects application/json payloads"},415);let y=a.pathname.startsWith(ea)&&a.pathname.slice(ea.length)||"/v1/chat/completions",d=y.startsWith("/")?y:`/${y}`,g=Qi(_,d,a.search||""),h=new Headers,A=le(t.headers,"content-type"),E=le(t.headers,"accept");A&&h.set("content-type",A),E&&h.set("accept",E),(B||U||X||F||x)&&h.set("authorization",`Bearer ${w}`);let z=le(t.headers,"x-client-request-id").slice(0,512);z&&h.set("x-client-request-id",z),U&&m&&h.set("cf-aig-gateway-id",m),c&&h.set("cf-aig-metadata",c),l&&h.set("cf-aig-cache-ttl",l);let $=new AbortController,D=Number(r.KNOWGRPH_CHAT_PROXY_TIMEOUT_MS),S=Number.isFinite(D)?Math.max(5e3,Math.min(18e4,Math.floor(D))):9e4,q=setTimeout(()=>$.abort(),S);try{let ce=o==="GET"||o==="HEAD"?void 0:t.body;if(f&&o==="POST"){let $e=await t.clone().text();try{let He=JSON.parse($e||"{}");He.model=i,ce=JSON.stringify(He)}catch{ce=$e}}let pe=await fetch(g.toString(),{method:o,headers:h,body:ce,signal:$.signal,redirect:"follow"}),O=new Headers(pe.headers);O.delete("content-length"),O.delete("www-authenticate"),O.set("cache-control","no-store");let Y=le(t.headers,"origin");return Y&&(O.set("access-control-allow-origin",Y),O.set("vary","Origin")),o==="HEAD"?new Response(null,{status:pe.status,statusText:pe.statusText,headers:O}):new Response(pe.body,{status:pe.status,statusText:pe.statusText,headers:O})}catch(ce){let pe=ce&&typeof ce=="object"&&"message"in ce?String(ce.message||""):"",O=$.signal.aborted||/aborted|timeout/i.test(pe);return he(t,{ok:!1,error:pe||"Failed to reach chat upstream"},O?504:502)}finally{clearTimeout(q)}}n(ta,"onRequest");function ec(e){let t=e.map(r=>r==null?"":typeof r=="boolean"?r?"1":"0":typeof r=="number"?Number.isFinite(r)?String(r):"":String(r)).join("|");return`rich-media-preview:${ot(t)}`}n(ec,"buildRichMediaPreviewSemanticKey");var oa="png";function gt(e){let t=typeof e=="number"?e:Number(String(e??"").trim());if(!Number.isFinite(t))return null;let r=Math.max(0,Number(t.toFixed(3)));return Number.isFinite(r)?r:null}n(gt,"normalizeRemoteVideoFrameSeconds");function tc(e){return String(gt(e)??0).replace(/\./g,"_")}n(tc,"formatRemoteVideoFrameSecondsForFileName");function zt(e){let t=String(e||"").trim().toLowerCase();return t==="jpg"||t==="jpeg"?"jpg":"png"}n(zt,"normalizeRemoteVideoFrameFormat");function Ir(e){let t=String(e.sourceUrl||"").trim(),r=gt(e.timeSeconds)??0,o=zt(e.format||oa);return ec(["remote-video-frame",t,r,o])}n(Ir,"buildRemoteVideoFrameSemanticKey");function na(e){let t=gt(e.timeSeconds)??0,r=zt(e.format||oa),o=Ir({...e,timeSeconds:t,format:r});return`frame-${o.split(":").pop()||ot(o)}-t${tc(t)}.${r}`}n(na,"buildRemoteVideoFrameFileName");var Ft=n(e=>{let t=String(e||"").trim();return t&&/^[A-Za-z0-9_-]{6,128}$/.test(t)?t:null},"normalizeYouTubeIdLikeValue"),ra=n(e=>{try{let t=new URL(String(e||"").trim()),r=String(t.hostname||"").toLowerCase();if(r==="youtu.be"||r.endsWith(".youtu.be")){let o=t.pathname.replace(/^\/+/,"").split("/")[0]?.trim()||"";return Ft(o)}if(r==="youtube.com"||r.endsWith(".youtube.com")||r==="youtube-nocookie.com"||r.endsWith(".youtube-nocookie.com")){let o=String(t.searchParams.get("v")||"").trim();if(o)return Ft(o);let a=t.pathname.split("/").filter(Boolean),s=a[0]||"",i=a[1]||"";if((s==="embed"||s==="shorts"||s==="live")&&i)return Ft(i);if(s==="watch"){let c=String(t.searchParams.get("v")||"").trim();return Ft(c)}}}catch{return null}return null},"readYouTubeIdFromUrl");function rc(e){let t=String(e||"").trim().replace(/^<|>$/g,"").trim();for(;/[),.;:!?]$/.test(t);){let r=t.slice(0,-1).trim();if(!r)break;let o=ra(t),a=ra(r);if(!a||o&&o!==a)break;t=r}return t}n(rc,"stripYouTubeUrlTrailingPunctuation");function aa(e){let t=n(r=>{let o=String(r||"").trim();if(!o)return null;if(/^\d+$/.test(o))return Number(o);let a=o.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i);if(!a)return null;let s=a[1]?Number(a[1]):0,i=a[2]?Number(a[2]):0,c=a[3]?Number(a[3]):0,l=s*3600+i*60+c;return l>0&&Number.isFinite(l)?l:null},"parseChunk");try{let r=new URL(rc(e)),o=r.searchParams.get("t")||r.searchParams.get("start")||"",a=r.hash&&new URLSearchParams(r.hash.replace(/^#/,"")).get("t")||"";return t(o)??t(a)}catch{return null}}n(aa,"parseYouTubeStartSeconds");var oc="/image/knowgrph/video-frame",nc=4096,ac=720*60,sc=/^frame-[a-f0-9]+-t\d+\.(?:png|jpg)$/i,Lr={"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"accept, content-type"},Ur=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),Mr=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:JSON.stringify(e),{status:t,headers:{...Lr,"content-type":"application/json; charset=utf-8","cache-control":"no-store"}}),"jsonResponse"),Nr=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:e,{status:t,headers:{...Lr,"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}}),"textResponse"),ic=n((e,t)=>e===t||e.endsWith(`.${t}`),"hostMatches"),cc=n(e=>{let t=Ur(e?.KG_VIDEO_FRAME_ALLOWED_HOSTS);return t?t.split(",").map(r=>Ur(r).toLowerCase()).filter(Boolean):["youtube.com","youtu.be","youtube-nocookie.com","bilibili.com","b23.tv"]},"readAllowedHosts"),lc=n(e=>Ur(e).replace(/^<|>$/g,"").trim(),"unwrapUrlInput"),pc=n((e,t)=>{try{let r=new URL(e);if(r.protocol!=="https:"&&r.protocol!=="http:")return!1;let o=r.hostname.toLowerCase();return cc(t).some(a=>ic(o,a))}catch{return!1}},"isAllowedSourceUrl"),uc=n((e,t)=>{let r=new URL(e.url),o=lc(r.searchParams.get("url")||"");if(!o)return{error:"Missing url parameter"};if(o.length>nc)return{error:"Video URL is too long"};if(!pc(o,t))return{error:"Video frame extraction is limited to supported remote video hosts"};let a=gt(r.searchParams.get("time"))??aa(o);if(a==null)return{error:"Missing time parameter"};let s=Math.min(ac,Math.max(0,a)),i=zt(r.searchParams.get("format")||"png"),c=na({sourceUrl:o,timeSeconds:s,format:i});if(!sc.test(c))return{error:"Invalid frame cache key"};let l=`${oc}/${c}`;return{sourceUrl:o,timeSeconds:s,format:i,fileName:c,publicUrl:l,semanticKey:Ir({sourceUrl:o,timeSeconds:s,format:i})}},"readFrameRequest"),dc=n(async(e,t,r)=>{let o=new URL(t,e.request.url),a=new Request(o.toString(),{method:r});return typeof e.env?.ASSETS?.fetch=="function"?await e.env.ASSETS.fetch(a):await fetch(a)},"fetchStaticAsset"),mc=n(e=>`Frame has not been generated yet. Run the local video-frame extractor and publish ${e.publicUrl}.`,"missingFrameMessage"),hc=n((e,t)=>{let r=new Headers;r.set("content-type",t.format==="jpg"?"image/jpeg":"image/png"),r.set("cache-control","public, max-age=31536000, immutable"),r.set("access-control-allow-origin","*");let o=e.headers.get("content-length");o&&r.set("content-length",o);let a=e.headers.get("etag");return a&&r.set("etag",a),r},"imageResponseHeaders");async function sa(e){let t=e.request;if(t.method==="OPTIONS")return new Response(null,{status:204,headers:Lr});if(t.method!=="GET"&&t.method!=="HEAD")return Nr("Method not allowed",405,t.method);let r=new URL(t.url).searchParams.get("emit")==="json",o=uc(t,e.env||{});if("error"in o)return r?Mr({ok:!1,error:o.error},400,t.method):Nr(o.error,400,t.method);let a=r&&t.method!=="HEAD"?"GET":r||t.method==="HEAD"?"HEAD":"GET",s=await dc(e,o.publicUrl,a);if(!s.ok){let i=mc(o);return r?Mr({ok:!1,error:i,publicUrl:o.publicUrl,semanticKey:o.semanticKey},404,t.method):Nr(i,404,t.method)}if(r){let i=Number(s.headers.get("content-length")||0);return(!Number.isFinite(i)||i<=0)&&t.method!=="HEAD"&&(i=(await s.arrayBuffer()).byteLength),Mr({ok:!0,imageUrl:o.publicUrl,publicUrl:o.publicUrl,semanticKey:o.semanticKey,cached:!0,bytes:Number.isFinite(i)?Math.max(0,Math.floor(i)):0,timeSeconds:o.timeSeconds,format:o.format},200,t.method)}return new Response(t.method==="HEAD"?null:s.body,{status:200,headers:hc(s,o)})}n(sa,"onRequest");var ia={"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"content-type"},qt=n((e,t=200,r="GET")=>new Response(r==="HEAD"?null:JSON.stringify(e),{status:t,headers:ia}),"jsonResponse"),te=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),gc=n(e=>{try{let t=new URL(String(e||"").trim());if(/youtu\.be$/i.test(t.hostname))return te(t.pathname.split("/").filter(Boolean)[0]);if(/youtube\.com$/i.test(t.hostname)||/youtube-nocookie\.com$/i.test(t.hostname)){let r=te(t.searchParams.get("v"));if(r)return r;let o=t.pathname.split("/").filter(Boolean),a=o.findIndex(s=>["embed","shorts","live"].includes(s));if(a>=0)return te(o[a+1])}}catch{}return""},"readVideoId"),fc=n((e,t)=>{let r=e.indexOf(t);if(r<0)return null;let o=e.indexOf("{",r);if(o<0)return null;let a=0,s=!1,i=!1;for(let c=o;c<e.length;c+=1){let l=e[c];if(s){i?i=!1:l==="\\"?i=!0:l==='"'&&(s=!1);continue}if(l==='"')s=!0;else if(l==="{")a+=1;else if(l==="}"&&(a-=1,a===0))return e.slice(o,c+1)}return null},"extractJsonAfter"),yc=n(e=>{for(let t of["ytInitialPlayerResponse =","ytInitialPlayerResponse="]){let r=fc(e,t);if(r)try{return JSON.parse(r)}catch{}}return null},"parsePlayerResponse"),wc=n((e,t)=>{let r=te(t||"en").toLowerCase();return e.find(o=>te(o.languageCode).toLowerCase()===r)||e.find(o=>te(o.languageCode).toLowerCase().startsWith(r.split("-")[0]))||e.find(o=>te(o.kind)!=="asr")||e[0]||null},"pickCaptionTrack"),Sc=n(e=>{let t=new URL(e);return t.searchParams.set("fmt","json3"),t.toString()},"withJsonCaptionFormat"),_c=n(e=>(Array.isArray(e?.events)?e.events:[]).map(r=>{let o=Array.isArray(r.segs)?te(r.segs.map(i=>i?.utf8||"").join("")):"",a=Number(r.tStartMs)/1e3,s=Number(r.dDurationMs||0)/1e3;return o&&Number.isFinite(a)?{text:o,start:a,duration:Number.isFinite(s)?s:0}:null}).filter(Boolean),"parseCaptionJson3"),bc=n(e=>String(e||"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'"),"decodeXmlText"),Ac=n(e=>{let t=[],r=/<text\b([^>]*)>([\s\S]*?)<\/text>/gi,o=null;for(;o=r.exec(String(e||""));){let a=o[1]||"",s=Number(a.match(/\bstart="([^"]+)"/i)?.[1]),i=Number(a.match(/\bdur="([^"]+)"/i)?.[1]||0),c=te(bc(o[2]||""));c&&Number.isFinite(s)&&t.push({text:c,start:s,duration:Number.isFinite(i)?i:0})}return t},"parseCaptionXml"),Pc=n((e,t)=>{let r=String(e||"").trim();if(!r)return[];if(String(t||"").toLowerCase().includes("json")||r.startsWith("{")||r.startsWith("["))try{return _c(JSON.parse(r))}catch{return[]}return Ac(r)},"parseCaptionResponseText"),Rc=n(e=>{let t=Math.max(0,Math.floor(Number(e)||0)),r=Math.floor(t/60),o=String(t%60).padStart(2,"0");return`${r}:${o}`},"formatTimestamp"),kc=n((e,t)=>{let r=new URL(e);return r.searchParams.set("t",`${Math.max(0,Math.floor(Number(t)||0))}s`),r.toString()},"timestampUrl"),xc=n(({title:e,sourceUrl:t,videoId:r,authorName:o,thumbnailUrl:a,segments:s})=>[`# ${e||`YouTube ${r}`}`,"",`Video ID: ${r}`,o?`Author: ${o}`:"",`Source: [${t}](${t})`,a?`[![${e||r}](${a})](${t})`:"","",s.length>0?"## Transcript":"## Video Source","",...s.length>0?s.map(i=>`[${Rc(i.start)}](${kc(t,i.start)}) ${i.text}`):["Captions were not available from the source at import time.","The source URL, title, author, and thumbnail remain available for downstream storyboard reconstruction."],""].filter(i=>i!=="").join(`
`),"buildMarkdown"),Kr=n(({videoId:e,sourceUrl:t,title:r,authorName:o,thumbnailUrl:a,lang:s,languageCode:i,segments:c,captionStatus:l})=>{let p={type:"rag:YouTubeTranscript",video_id:e,source_url:t,title:r,author_name:o,thumbnail_url:a,language_code:te(i)||s,caption_status:l,segment_count:c.length,duration:c.reduce((m,f)=>Math.max(m,f.start+f.duration),0),segments:c};return{ok:!0,name:`youtube-${e.toLowerCase()}.md`,markdown:xc({title:r,sourceUrl:t,videoId:e,authorName:o,thumbnailUrl:a,segments:c}),transcript:p}},"buildPayload");async function Ec({sourceUrl:e,lang:t="en",fetchImpl:r=fetch}){let o=gc(e);if(!o)return{ok:!1,error:"unsupported_youtube_url"};let a=`https://www.youtube.com/watch?v=${encodeURIComponent(o)}`,[s,i]=await Promise.all([r(`https://www.youtube.com/oembed?url=${encodeURIComponent(a)}&format=json`,{headers:{accept:"application/json"}}).catch(()=>null),r(a,{headers:{accept:"text/html,application/xhtml+xml","accept-language":"en-US,en;q=0.9","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}})]),c=s?.ok?await s.json().catch(()=>({})):{},l=i.ok?yc(await i.text()):null,p=te(c.title)||te(l?.videoDetails?.title)||`YouTube ${o}`,m=te(c.author_name)||te(l?.videoDetails?.author),f=te(c.thumbnail_url)||`https://i.ytimg.com/vi/${o}/hqdefault.jpg`;if(!i.ok)return Kr({videoId:o,sourceUrl:a,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:t,segments:[],captionStatus:`watch-fetch-${i.status}`});let P=l?.captions?.playerCaptionsTracklistRenderer?.captionTracks||[],_=wc(Array.isArray(P)?P:[],t);if(!_?.baseUrl)return Kr({videoId:o,sourceUrl:a,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:t,segments:[],captionStatus:"captions-unavailable"});let T=await r(Sc(_.baseUrl),{headers:{accept:"application/json,text/xml,text/plain,*/*","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}}).catch(()=>null),M=T?await T.text().catch(()=>""):"",U=T?.ok?Pc(M,T.headers.get("content-type")):[],B=U.length>0?"available":T?.ok?"captions-empty":`captions-fetch-${T?.status||"failed"}`;return Kr({videoId:o,sourceUrl:a,title:p,authorName:m,thumbnailUrl:f,lang:t,languageCode:_.languageCode,segments:U,captionStatus:B})}n(Ec,"buildYouTubeTranscriptPayload");async function ca(e){let t=e.request,r=String(t.method||"GET").toUpperCase();if(r==="OPTIONS")return new Response(null,{status:204,headers:ia});if(r!=="GET"&&r!=="HEAD"&&r!=="POST")return qt({ok:!1,error:"unsupported_method"},405,r);let o=new URL(t.url),a=te(o.searchParams.get("url")),s=te(o.searchParams.get("lang"))||"en";if(!a)return qt({ok:!1,error:"missing_url"},400,r);try{let i=await Ec({sourceUrl:a,lang:s});return qt(i,i.ok?200:502,r)}catch(i){let c=i&&typeof i=="object"&&"message"in i?te(i.message):"";return qt({ok:!1,error:c||"youtube_conversion_failed"},502,r)}}n(ca,"onRequest");async function la(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase();if(r==="OPTIONS")return new Response(null,{status:204,headers:{...se(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(r!=="GET"&&r!=="HEAD")return new Response(JSON.stringify({ok:!1,error:"unsupported_method"}),{status:405,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...se(t)}});let o={ok:!0,service:"singabldr-pages",ts:new Date().toISOString()},a={"content-type":"application/json; charset=utf-8","cache-control":"no-store",...se(t)};return r==="HEAD"?new Response(null,{status:200,headers:a}):new Response(JSON.stringify(o),{status:200,headers:a})}n(la,"onRequest");var Me="https://airvio.co";var we="/knowgrph",Ie=`${Me}${we}/`,Cc=`${Me}/`;var ua=`${we}/health`,pa=`${Me}${ua}`,da="/.well-known/agent-card.json",jd=`${we}/.well-known/agent-card.json`,Tc=`${Me}${da}`,vc=`${Me}/api/storage/source-files`,Oc=`${Me}/api/storage/doc-default/{canonicalPath}`,Ic=`${Me}/api/storage/doc/{workspaceId}/{canonicalPath}`,Mc=`${Me}/api/storage/blob/{workspaceId}/{canonicalPath}`;var Dr="root-agent-ready-pages",ma=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${we}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${we}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${ua}>; rel="status"; type="application/health+json"`,`<${we}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${da}>; rel="describedby"; type="application/json"`].join(", "),ha=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${Ie}.

## Discovery

- Crawl policy: ${Ie}robots.txt
- Sitemap: ${Ie}sitemap.xml
- API catalog: ${Ie}.well-known/api-catalog
- Auth.md registration instructions: ${Cc}auth.md
- Health: ${pa}
- MCP server card: ${Ie}.well-known/mcp/server-card.json
- A2A Agent Card: ${Tc}
- Agent skills: ${Ie}.well-known/agent-skills/index.json
- LLM reference: ${Ie}llms.txt

## APIs

- Agent-ready status: ${pa}
- HTTP MCP: ${Ie}mcp
- Storage API: ${Me}/api/storage/
- Source Files index: ${vc}
- Default Source File documents: ${Oc}
- Workspace Source File documents: ${Ic}
- Workspace binary artifacts: ${Mc}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes seven read-only tools for published Source Files, shared documents, data-first search/fetch, and agent-surface inspection.
- HTTP MCP and local stdio expose shared read-only prompt templates through \`prompts/list\` and \`prompts/get\` for Source Files research and agent-surface inspection.
- HTTP MCP and local stdio expose Source Files resource templates through \`resources/templates/list\`; \`kgdoc://source-file/{id}\` reads reuse the existing \`fetch\` executor.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared seven-tool WebMCP surface on \`${Ie}\` HTML routes.

## MCP Apps

- HTTP MCP advertises \`io.modelcontextprotocol/ui\` with \`text/html;profile=mcp-app\`.
- \`inspect_agent_surface\` links to the shared \`ui://knowgrph/agent-ready\` resource through \`_meta.ui.resourceUri\`.
- UI-linked tool descriptors expose no-auth \`securitySchemes\`, mirror them in \`_meta.securitySchemes\`, and set OpenAI widget accessibility metadata from the shared contract.
- \`resources/list\` and \`resources/read\` serve the inline, sandbox-friendly Knowgrph Agent Ready app resource while preserving text fallback and structured tool output; \`resources/templates/list\` exposes Source Files markdown reads under the standard MCP \`resources\` capability.
- The View initiates the MCP Apps \`ui/initialize\` handshake, sends \`ui/notifications/initialized\` and \`ui/notifications/size-changed\`, handles host context/tool input/result/cancel notifications, and calls the originating server through \`tools/call\`.
- \`inspect_agent_surface.structuredContent.mcpAppsServerReadiness\` exposes the native server-readiness model used by the View: app tool/resource binding, prompt discovery, resource-template discovery, output-schema and structured-content readiness, sandbox/security metadata, widget accessibility, Streamable HTTP JSON-RPC transport, local stdio transport, and read-only search/fetch retrieval.
`,ga=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),fa=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(r=>r.trim().startsWith("text/markdown")),"wantsMarkdown"),$r=n((e,t)=>{let r=new Response(e.body,e),o=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return o&&r.headers.set("x-knowgrph-route-owner",o),a&&r.headers.set("x-knowgrph-route-tag",a),r},"withAgentReadyRouteHeaders");var Nc="Agent-actionable chat-to-canvas knowledge graph workspace",Uc=n(e=>{let t=/<script>([\s\S]*?)<\/script>/g;for(let r of String(e||"").matchAll(t)){let o=r[1]||"";if(o.includes("createWebMcpLifecycleController")&&o.includes("toolDefinitions"))return o}return""},"extractWebMcpScript"),Lc=n(()=>({"content-type":"text/html; charset=utf-8","cache-control":"no-store, no-cache, no-transform, must-revalidate, max-age=0","access-control-allow-origin":"*",link:ma}),"rootHtmlHeaders"),Kc=n(()=>`<noscript><a href="${we}/">Enter Knowgrph</a></noscript>`,"rootNoscriptFallbackMarkup"),Dc=n(async e=>{let t=new URL(`${we}/?agentReadyRootWebMcp=1`,e.url),r=await fetch(t,{headers:{accept:"text/html"}});return r.ok?Uc(await r.text()):""},"loadWebMcpScript"),$c=n((e="")=>new Response(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${Nc}" />
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
    <iframe class="live-canvas" src="${we}/" title="Interactive Knowgrph canvas"></iframe>
    <div class="veil" aria-hidden="true"></div>
    <div class="glow" aria-hidden="true"></div>
    <main class="launch" data-kg-live-canvas-launch="true">
      <p class="eyebrow"><span class="pulse" aria-hidden="true"></span>Knowgrph \xB7 Live canvas</p>
      <h1><span>Map intent.</span><span>Orchestrate agents.</span><span class="accent">Prove outcomes.</span></h1>
      <p class="lede">A source-backed canvas where <code>/</code> routes work, <code>#</code> sets meaning, and <code>@</code> binds context.</p>
      <form class="deck" action="${we}/" data-kg-live-canvas-hero-command-deck="true">
        <label for="knowgrph-live-canvas-hero-query">Agent-ready query</label>
        <textarea id="knowgrph-live-canvas-hero-query" name="query" spellcheck="false" data-kg-live-canvas-hero-query="true">/runtime-ready.check #token-economics @dev-only</textarea>
        <nav class="chips" aria-label="Live Canvas Hero invocation grammar">
          ${["/runtime-ready.check","/cost.audit","#token-economics","#runtime-ready","@runtime-proof","@dev-only"].map(t=>`<button class="chip" type="button" data-token="${t}">${t}</button>`).join("")}
        </nav>
        <div class="actions">
          <a class="enter" href="${we}/" data-kg-live-canvas-hero-enter="true">Enter Knowgrph</a>
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
    ${Kc()}
  </body>
</html>`,{status:200,headers:Lc()}),"rootHtmlResponse");async function ya(e){let{request:t}=e,r=String(t.method||"GET").toUpperCase();if(r!=="GET"&&r!=="HEAD")return e.next();if(fa(t)){let a=$r(ga(ha),{owner:Dr,tag:"root-homepage-markdown"});return r==="HEAD"?new Response(null,a):a}let o=$r($c(r==="HEAD"?"":await Dc(t)),{owner:Dr,tag:"root-homepage-html"});return r==="HEAD"?new Response(null,o):o}n(ya,"onRequest");var b=[{routePath:"/api/llm/chat/completions",mountPath:"/api/llm/chat",method:"",middlewares:[],modules:[Br]},{routePath:"/api/payments/commerce/x402",mountPath:"/api/payments/commerce",method:"",middlewares:[],modules:[uo]},{routePath:"/api/llm/models",mountPath:"/api/llm",method:"",middlewares:[],modules:[mo]},{routePath:"/api/llm/responses",mountPath:"/api/llm",method:"",middlewares:[],modules:[ho]},{routePath:"/knowgrph/doc-default/:path*",mountPath:"/knowgrph/doc-default",method:"",middlewares:[],modules:[Nn]},{routePath:"/knowgrph/doc/:path*",mountPath:"/knowgrph/doc",method:"",middlewares:[],modules:[Un]},{routePath:"/knowgrph/share/:path*",mountPath:"/knowgrph/share",method:"",middlewares:[],modules:[Ln]},{routePath:"/api/link-preview",mountPath:"/api",method:"GET",middlewares:[],modules:[Dn]},{routePath:"/api/link-proxy",mountPath:"/api",method:"GET",middlewares:[],modules:[Hn]},{routePath:"/api/graph",mountPath:"/api",method:"",middlewares:[],modules:[Jn]},{routePath:"/api/oembed",mountPath:"/api",method:"",middlewares:[],modules:[Zn]},{routePath:"/__chat_proxy/:path*",mountPath:"/__chat_proxy",method:"",middlewares:[],modules:[ta]},{routePath:"/knowgrph/:path*",mountPath:"/knowgrph",method:"",middlewares:[],modules:[Ke]},{routePath:"/__video_frame",mountPath:"/",method:"",middlewares:[],modules:[sa]},{routePath:"/__youtube_transcript",mountPath:"/",method:"",middlewares:[],modules:[ca]},{routePath:"/health",mountPath:"/",method:"",middlewares:[],modules:[la]},{routePath:"/",mountPath:"/",method:"",middlewares:[],modules:[ya]}];function Hc(e){for(var t=[],r=0;r<e.length;){var o=e[r];if(o==="*"||o==="+"||o==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(o==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(o==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(o==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(o===":"){for(var a="",s=r+1;s<e.length;){var i=e.charCodeAt(s);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){a+=e[s++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(r));t.push({type:"NAME",index:r,value:a}),r=s;continue}if(o==="("){var c=1,l="",s=r+1;if(e[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;){if(e[s]==="\\"){l+=e[s++]+e[s++];continue}if(e[s]===")"){if(c--,c===0){s++;break}}else if(e[s]==="("&&(c++,e[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));l+=e[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(r));if(!l)throw new TypeError("Missing pattern at ".concat(r));t.push({type:"PATTERN",index:r,value:l}),r=s;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}n(Hc,"lexer");function jc(e,t){t===void 0&&(t={});for(var r=Hc(e),o=t.prefixes,a=o===void 0?"./":o,s=t.delimiter,i=s===void 0?"/#?":s,c=[],l=0,p=0,m="",f=n(function(L){if(p<r.length&&r[p].type===L)return r[p++].value},"tryConsume"),P=n(function(L){var K=f(L);if(K!==void 0)return K;var V=r[p],ne=V.type,Se=V.index;throw new TypeError("Unexpected ".concat(ne," at ").concat(Se,", expected ").concat(L))},"mustConsume"),_=n(function(){for(var L="",K;K=f("CHAR")||f("ESCAPED_CHAR");)L+=K;return L},"consumeText"),T=n(function(L){for(var K=0,V=i;K<V.length;K++){var ne=V[K];if(L.indexOf(ne)>-1)return!0}return!1},"isSafe"),M=n(function(L){var K=c[c.length-1],V=L||(K&&typeof K=="string"?K:"");if(K&&!V)throw new TypeError('Must have text between two parameters, missing text after "'.concat(K.name,'"'));return!V||T(V)?"[^".concat(De(i),"]+?"):"(?:(?!".concat(De(V),")[^").concat(De(i),"])+?")},"safePattern");p<r.length;){var U=f("CHAR"),B=f("NAME"),X=f("PATTERN");if(B||X){var F=U||"";a.indexOf(F)===-1&&(m+=F,F=""),m&&(c.push(m),m=""),c.push({name:B||l++,prefix:F,suffix:"",pattern:X||M(F),modifier:f("MODIFIER")||""});continue}var x=U||f("ESCAPED_CHAR");if(x){m+=x;continue}m&&(c.push(m),m="");var v=f("OPEN");if(v){var F=_(),ee=f("NAME")||"",j=f("PATTERN")||"",ie=_();P("CLOSE"),c.push({name:ee||(j?l++:""),pattern:ee&&!j?M(F):j,prefix:F,suffix:ie,modifier:f("MODIFIER")||""});continue}P("END")}return c}n(jc,"parse");function ft(e,t){var r=[],o=Sa(e,r,t);return Gc(o,r,t)}n(ft,"match");function Gc(e,t,r){r===void 0&&(r={});var o=r.decode,a=o===void 0?function(s){return s}:o;return function(s){var i=e.exec(s);if(!i)return!1;for(var c=i[0],l=i.index,p=Object.create(null),m=n(function(P){if(i[P]===void 0)return"continue";var _=t[P-1];_.modifier==="*"||_.modifier==="+"?p[_.name]=i[P].split(_.prefix+_.suffix).map(function(T){return a(T,_)}):p[_.name]=a(i[P],_)},"_loop_1"),f=1;f<i.length;f++)m(f);return{path:c,index:l,params:p}}}n(Gc,"regexpToFunction");function De(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}n(De,"escapeString");function wa(e){return e&&e.sensitive?"":"i"}n(wa,"flags");function Bc(e,t){if(!t)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,a=r.exec(e.source);a;)t.push({name:a[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),a=r.exec(e.source);return e}n(Bc,"regexpToRegexp");function Wc(e,t,r){var o=e.map(function(a){return Sa(a,t,r).source});return new RegExp("(?:".concat(o.join("|"),")"),wa(r))}n(Wc,"arrayToRegexp");function Fc(e,t,r){return zc(jc(e,r),t,r)}n(Fc,"stringToRegexp");function zc(e,t,r){r===void 0&&(r={});for(var o=r.strict,a=o===void 0?!1:o,s=r.start,i=s===void 0?!0:s,c=r.end,l=c===void 0?!0:c,p=r.encode,m=p===void 0?function(K){return K}:p,f=r.delimiter,P=f===void 0?"/#?":f,_=r.endsWith,T=_===void 0?"":_,M="[".concat(De(T),"]|$"),U="[".concat(De(P),"]"),B=i?"^":"",X=0,F=e;X<F.length;X++){var x=F[X];if(typeof x=="string")B+=De(m(x));else{var v=De(m(x.prefix)),ee=De(m(x.suffix));if(x.pattern)if(t&&t.push(x),v||ee)if(x.modifier==="+"||x.modifier==="*"){var j=x.modifier==="*"?"?":"";B+="(?:".concat(v,"((?:").concat(x.pattern,")(?:").concat(ee).concat(v,"(?:").concat(x.pattern,"))*)").concat(ee,")").concat(j)}else B+="(?:".concat(v,"(").concat(x.pattern,")").concat(ee,")").concat(x.modifier);else{if(x.modifier==="+"||x.modifier==="*")throw new TypeError('Can not repeat "'.concat(x.name,'" without a prefix and suffix'));B+="(".concat(x.pattern,")").concat(x.modifier)}else B+="(?:".concat(v).concat(ee,")").concat(x.modifier)}}if(l)a||(B+="".concat(U,"?")),B+=r.endsWith?"(?=".concat(M,")"):"$";else{var ie=e[e.length-1],L=typeof ie=="string"?U.indexOf(ie[ie.length-1])>-1:ie===void 0;a||(B+="(?:".concat(U,"(?=").concat(M,"))?")),L||(B+="(?=".concat(U,"|").concat(M,")"))}return new RegExp(B,wa(r))}n(zc,"tokensToRegexp");function Sa(e,t,r){return e instanceof RegExp?Bc(e,t):Array.isArray(e)?Wc(e,t,r):Fc(e,t,r)}n(Sa,"pathToRegexp");var Vt=/[.+?^${}()|[\]\\]/g;function*qc(e){let t=new URL(e.url).pathname;for(let r of[...b].reverse()){if(r.method&&r.method!==e.method)continue;let o=ft(r.routePath.replace(Vt,"\\$&"),{end:!1}),a=ft(r.mountPath.replace(Vt,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i)for(let c of r.middlewares.flat())yield{handler:c,params:s.params,path:i.path}}for(let r of b){if(r.method&&r.method!==e.method)continue;let o=ft(r.routePath.replace(Vt,"\\$&"),{end:!0}),a=ft(r.mountPath.replace(Vt,"\\$&"),{end:!1}),s=o(t),i=a(t);if(s&&i&&r.modules.length){for(let c of r.modules.flat())yield{handler:c,params:s.params,path:s.path};break}}}n(qc,"executeRequest");var ym={async fetch(e,t,r){let o=e,a=qc(o),s={},i=!1,c=n(async(l,p)=>{if(l!==void 0){let f=l;typeof l=="string"&&(f=new URL(l,o.url).toString()),o=new Request(f,p)}let m=a.next();if(m.done===!1){let{handler:f,params:P,path:_}=m.value,T={request:new Request(o.clone()),functionPath:_,next:c,params:P,get data(){return s},set data(U){if(typeof U!="object"||U===null)throw new Error("context.data must be an object");s=U},env:t,waitUntil:r.waitUntil.bind(r),passThroughOnException:n(()=>{i=!0},"passThroughOnException")},M=await f(T);if(!(M instanceof Response))throw new Error("Your Pages function should return a Response");return Hr(M)}else{let f=await t.ASSETS.fetch(o);return Hr(f)}},"next");try{return await c()}catch(l){if(i){let p=await t.ASSETS.fetch(o);return Hr(p)}throw l}}},Hr=n(e=>new Response([101,204,205,304].includes(e.status)?null:e.body,e),"cloneResponse");export{ym as default};
