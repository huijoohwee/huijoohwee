var an=Object.defineProperty;var n=(e,t)=>an(e,"name",{value:t,configurable:!0});var sn="https://api.openai.com/v1";var xt=Object.freeze(["gpt-5.4-nano","gpt-4o-mini"]);function kt(e){return String(e||"").trim()}n(kt,"normalizeOrigin");function cn(e){let t=kt(e);return t?t.startsWith("http://localhost:")||t.startsWith("http://127.0.0.1:")||t.startsWith("http://0.0.0.0:"):!1}n(cn,"isAllowedOrigin");function ro(e){let t=kt(e);return cn(t)?{"access-control-allow-origin":t,vary:"Origin","access-control-allow-methods":"GET, POST, OPTIONS","access-control-allow-headers":"content-type, x-flowinfish-session","access-control-max-age":"86400"}:{}}n(ro,"corsHeaders");function Y(e,{status:t=200,origin:o=""}={}){return new Response(JSON.stringify(e),{status:t,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...ro(o)}})}n(Y,"json");async function We(e,{maxBytes:t=1e6}={}){let o=await e.arrayBuffer();if(o.byteLength>t)throw new Error("Request too large");let r=new TextDecoder().decode(o);try{return r?JSON.parse(r):{}}catch{throw new Error("Invalid JSON body")}}n(We,"readJsonBody");function ln(e){let t=String(e?.model||"").trim();if(!t)throw new Error("Missing model");if(!xt.includes(t))throw new Error(`Model not allowed: ${t}`);return t}n(ln,"enforceAllowedModel");function pn(e){let t=String(e.OPENAI_API_KEY||"").trim();if(!t)throw new Error("Missing server OPENAI_API_KEY");return t}n(pn,"requireOpenAiKey");async function ze({request:e,env:t,pathname:o,payload:r}){let a=pn(t);ln(r);let i=`${kt(t.OPENAI_API_BASE)||sn}${o}`,c=await fetch(i,{method:"POST",headers:{authorization:`Bearer ${a}`,"content-type":"application/json"},body:JSON.stringify(r)}),l=new Headers(c.headers);return l.delete("content-length"),l.set("cache-control","no-store"),new Response(c.body,{status:c.status,headers:l})}n(ze,"proxyToOpenAi");function Pe(e){let t=e.headers.get("origin")||"";return new Response(null,{status:204,headers:{...ro(t)}})}n(Pe,"handleOptions");async function no(e){let{request:t,env:o}=e,r=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(r==="OPTIONS")return Pe(t);if(r!=="POST")return Y({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return Y({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await We(t);return await ze({request:t,env:o,pathname:"/chat/completions",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return Y({ok:!1,error:i},{status:400,origin:a})}}n(no,"onRequest");var un=n(e=>{let t=2166136261;for(let o=0;o<e.length;o+=1)t^=e.charCodeAt(o),t=Math.imul(t,16777619);return t>>>0},"fnv1a32");function ao(e){return un(String(e??""))}n(ao,"hashString32");function Oe(e){return ao(e).toString(16).padStart(8,"0")}n(Oe,"hashStringToHex");var dn=n(e=>e==null?"":typeof e=="boolean"?e?"1":"0":typeof e=="number"?Number.isFinite(e)?String(e):"":String(e),"normalizePrimitive"),mn=n(e=>e.map(dn).join("|"),"buildSignatureText"),qe=n(e=>Oe(mn(e)),"hashSignatureParts");var Ve={checkoutSession:"/api/payments/stripe/checkout/session",webhook:"/api/payments/stripe/webhook"};var Re={restrictedKey:"STRIPE_RESTRICTED_KEY",secretKey:"STRIPE_SECRET_KEY",webhookSecret:"STRIPE_WEBHOOK_SECRET",checkoutPriceId:"STRIPE_CHECKOUT_PRICE_ID",checkoutCurrency:"STRIPE_CHECKOUT_CURRENCY",checkoutUnitAmount:"STRIPE_CHECKOUT_UNIT_AMOUNT",checkoutProductName:"STRIPE_CHECKOUT_PRODUCT_NAME",checkoutReturnOrigin:"STRIPE_CHECKOUT_RETURN_ORIGIN"};var ci=[`Configure Stripe secrets on the server runtime that owns ${Ve.checkoutSession}.`,"Cloudflare Pages project variables are available to Pages builds/functions, but they are not read by separate Worker routes.","Stripe Projects can provision and sync credentials locally; copy only required server secret names into the payment server runtime."].join(" "),li=[`Payment server runtime for ${Ve.checkoutSession}`,"not Cloudflare Pages project variables"].join("; "),hn=[Re.restrictedKey,Re.secretKey].join(" or "),pi=[Re.checkoutPriceId,`${Re.checkoutCurrency} + ${Re.checkoutUnitAmount} + ${Re.checkoutProductName}`].join(" or "),ui=[`Missing server-managed Stripe key. Set ${hn} on the payment server runtime.`,"Pages project variables alone do not satisfy separate Worker routes."].join(" ");var Ue="2026-01-30",io="1000",co="USDC",Pt="https://x402.org/facilitator",lo="eip155:84532",gn="$0.001",Ae="2026-04-08",so="https://ucp.dev/2026-04-08/specification/overview/",fn=["checkout"],wn=["rest"],R={acpDiscovery:"/.well-known/acp.json",acpConfig:"/.well-known/acp-config",ucpProfile:"/.well-known/ucp",mppOpenApi:"/openapi.json",x402ApiRoot:"/api",x402ApiV1:"/api/v1",checkoutSessions:"/checkout/sessions",x402PaymentRequired:"/api/payments/commerce/x402",commerceWebhook:"/api/payments/commerce/webhook",commerceProofArtifact:"/api/payments/commerce/harness-proof.json",commerceTraceArtifact:"/api/payments/commerce/trace.jsonl",openboxIngest:"/api/payments/commerce/openbox/ingest",web3Settle:"/api/payments/commerce/web3/settle"},wi=[R.x402ApiRoot,R.x402ApiV1,R.x402PaymentRequired],ne={sellerId:"SELLER_ID",checkoutBaseUrl:"CHECKOUT_BASE_URL",web3Enabled:"WEB3_ENABLED",web3DepositAddress:"WEB3_DEPOSIT_ADDRESS",baseRpcUrl:"BASE_RPC_URL",baseConfirmationBlocks:"BASE_CONFIRMATION_BLOCKS",easAttestUrl:"EAS_ATTEST_URL",openboxApiUrl:"OPENBOX_API_URL",openboxIngestUrl:"OPENBOX_INGEST_URL",openboxApiKey:"OPENBOX_API_KEY",stripeDelegatePaymentUrl:"STRIPE_DELEGATE_PAYMENT_URL",acpBearerToken:"ACP_BEARER_TOKEN",x402PayToAddress:"X402_PAY_TO_ADDRESS",x402Network:"X402_NETWORK",x402Asset:"X402_ASSET",x402Amount:"X402_AMOUNT",x402FacilitatorUrl:"X402_FACILITATOR_URL",x402Price:"X402_PRICE"},ae=n((e,t)=>String(e[t]||"").trim(),"readEnvString"),po=n((e,t)=>{let o=ae(e,ne.sellerId);if(o)return o;try{return new URL(t).host}catch{return"knowgrph-seller"}},"readAgenticCommerceSellerId");var uo=n(e=>{let t=ae(e,ne.web3Enabled).toLowerCase();return t?t==="0"||t==="false"||t==="no"?!1:t==="1"||t==="true"||t==="yes":!0},"isAgenticCommerceWeb3Enabled");var de=n((e,t)=>qe(["agentic-commerce",e,...t]),"buildAgenticCommerceSemanticKey"),Me=n(e=>String(e||"").trim().replace(/\/+$/g,""),"normalizeAgenticCommerceBaseUrl"),W=n((e,t)=>`${Me(e)}${t}`,"buildAgenticCommerceUrl"),L=n((e,t,o,r,a=r.startsWith("/")?r:null)=>({id:t,label:o,value:r,path:a,semanticKey:de("mainpanel-commerce-readiness-row",[e,t,o,r,a||""])}),"buildAgenticCommerceMainPanelReadinessRow"),Ee=n((e,t,o)=>({id:e,title:t,rows:o}),"buildAgenticCommerceMainPanelReadinessSection"),yn=n(()=>{let e=[Ee("overview","Overview",[L("overview","acp-discovery","ACP discovery",`GET ${R.acpDiscovery}`,R.acpDiscovery),L("overview","acp-config","ACP config",`GET ${R.acpConfig}`,R.acpConfig),L("overview","api-version","API version",Ue,null)]),Ee("discovery","Discovery",[L("discovery","ucp-profile","UCP profile",R.ucpProfile),L("discovery","mpp-openapi","MPP OpenAPI",R.mppOpenApi),L("discovery","x402-payment-required","x402 payment required",R.x402PaymentRequired),L("discovery","x402-api-root","x402 API root",R.x402ApiRoot)]),Ee("sessions","Sessions",[L("sessions","checkout-sessions","Checkout sessions",R.checkoutSessions),L("sessions","stripe-webhook","Stripe webhook",Ve.webhook)]),Ee("web3","Web3",[L("web3","settle","Settle",R.web3Settle),L("web3","signals","Signals","Base RPC confirmation + EAS attestation",null)]),Ee("governance","Governance",[L("governance","openbox-ingest","OpenBOX ingest",R.openboxIngest),L("governance","risk-source","Risk source","OpenBOX risk signal",null)]),Ee("proofs","Proofs",[L("proofs","harness-proof","Harness proof",R.commerceProofArtifact),L("proofs","trace-artifact","Trace artifact",R.commerceTraceArtifact)])],t=e.flatMap(a=>a.rows),o=t.map(a=>a.path||"").filter(a=>a.length>0),r=t.filter(a=>!a.path).map(a=>`${a.label}: ${a.value}`);return{surface:"mainpanel-commerce",semanticKey:de("mainpanel-commerce-readiness",[Ue,...t.map(a=>a.semanticKey)]),sections:e,routePaths:o,routeCount:o.length,signals:r}},"buildAgenticCommerceMainPanelReadiness"),yi=yn(),Sn=n((e,t)=>{let o=ae(e,ne.web3DepositAddress);if(/^0x[0-9a-fA-F]{40}$/.test(o))return o;let r=de("deposit-address",[t,"0"]),a=de("deposit-address",[t,"1"]),s=de("deposit-address",[t,"2"]),i=de("deposit-address",[t,"3"]),c=de("deposit-address",[t,"4"]);return`0x${r}${a}${s}${i}${c}`.slice(0,42)},"buildAgenticCommerceDepositAddress");var mo=n((e,t="x402-payment-required")=>{let o=ae(e,ne.x402PayToAddress);return/^0x[0-9a-fA-F]{40}$/.test(o)?o:Sn(e,t)},"readAgenticCommerceX402PayToAddress"),bn=/^[a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,64}$/,ho=n(e=>{let t=ae(e,ne.x402Network);return bn.test(t)?t:lo},"readAgenticCommerceX402Network"),go=n(e=>ae(e,ne.x402Asset)||co,"readAgenticCommerceX402Asset"),fo=n(e=>{let t=ae(e,ne.x402Amount);return/^[1-9][0-9]*$/.test(t)?t:io},"readAgenticCommerceX402Amount");var wo=n(e=>{let t=ae(e,ne.x402FacilitatorUrl);try{let o=new URL(t||Pt);return o.protocol==="https:"||o.protocol==="http:"?o.toString().replace(/\/+$/g,""):Pt}catch{return Pt}},"readAgenticCommerceX402FacilitatorUrl"),yo=n(e=>{let t=Me(e.baseUrl);return{protocol:{name:"acp",version:Ue,supported_versions:[Ue],documentation_url:"https://agenticcommerce.dev"},api_base_url:t,transports:[...wn],capabilities:{services:[...fn],...e.web3Enabled?{extensions:[{name:"x-web3"}]}:{}},links:{config:W(t,R.acpConfig),ucp:W(t,R.ucpProfile),mpp:W(t,R.mppOpenApi),x402:W(t,R.x402PaymentRequired)}}},"buildAgenticCommerceAcpDiscovery"),So=n(e=>{let t=Me(e.baseUrl),o={acp:W(t,R.acpDiscovery),api:W(t,R.x402ApiRoot),checkout_sessions:W(t,R.checkoutSessions),mpp_openapi:W(t,R.mppOpenApi),proof:W(t,R.commerceProofArtifact),trace:W(t,R.commerceTraceArtifact),x402_payment_required:W(t,R.x402PaymentRequired)},r={checkout_sessions:!0,content_payments:!0,proof_artifacts:!0,risk_signals:!0,web3_settlement:e.web3Enabled},a={"dev.ucp.shopping":[{version:Ae,spec:so,transport:"rest",endpoint:o.api,schema:"https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json"}]};return{ucp:{version:Ae,protocol_version:Ae,services:a,capabilities:{"dev.ucp.shopping.checkout":[{version:Ae,spec:"https://ucp.dev/2026-04-08/specification/checkout/",schema:"https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"}]},payment_handlers:{},endpoints:o},protocol_version:Ae,protocol:{name:"ucp",version:Ae},seller:{id:e.sellerId},services:[{id:"knowgrph-content-payments",type:"content-payments",endpoints:{x402:o.x402_payment_required,checkout_sessions:o.checkout_sessions,proof:o.proof,trace:o.trace}}],capabilities:r,endpoints:o,spec_urls:[so],schema_urls:["https://ucp.dev/2026-04-08/services/shopping/rest.openapi.json","https://ucp.dev/2026-04-08/schemas/shopping/checkout.json"]}},"buildAgenticCommerceUcpProfile"),bo=n(e=>{let t=Me(e.baseUrl);return{openapi:"3.1.0",info:{title:"Knowgrph Machine Payment Protocol",version:Ue,description:"Machine-readable payable-operation discovery for Knowgrph commerce routes."},servers:[{url:t}],paths:{[R.x402PaymentRequired]:{get:{operationId:"getKnowgrphX402PaymentRequirement",summary:"Return x402 payment requirements for an agent-readable paid resource.","x-payment-info":{intent:"charge",method:"x402",amount:gn,currency:"usdc"},responses:{402:{description:"Payment Required"}}}},[R.checkoutSessions]:{post:{operationId:"createKnowgrphCommerceCheckoutSession",summary:"Create an agentic commerce checkout session.","x-payment-info":{intent:"session",method:"stripe",amount:"dynamic",currency:"request.currency"},responses:{201:{description:"Checkout session created"}}}}}}},"buildAgenticCommerceMppOpenApi"),_o=n(e=>{let t=Me(e.baseUrl),o=W(t,R.x402PaymentRequired),r=String(e.amount||io);return{x402Version:2,error:"Payment required",resource:{url:o,description:"Knowgrph agentic commerce paid-resource readiness probe",mimeType:"application/json"},accepts:[{scheme:"exact",network:String(e.network||lo),amount:r,maxAmountRequired:r,asset:String(e.asset||co),resource:o,mimeType:"application/json",payTo:e.payTo,maxTimeoutSeconds:300,extra:{name:"USDC",version:"2",resourceUrl:o,...e.facilitatorUrl?{facilitatorUrl:e.facilitatorUrl}:{}}}]}},"buildAgenticCommerceX402PaymentRequired");var _n=n(e=>JSON.stringify(e,null,2),"jsonBody"),xn=n(e=>String(e||"").trim().replace(/\/+$/g,""),"trimOrigin"),kn=n(e=>typeof btoa=="function"?btoa(e):typeof Buffer<"u"?Buffer.from(e).toString("base64"):"","encodeBase64"),Pn=n((e,t)=>{try{return new URL(e).origin}catch{return xn(t)}},"rootOriginFromRequest"),Rt=n((e={})=>{let t=Pn(e.requestUrl,e.origin),o=e.env||{},r=po(o,`${t}/`),a=uo(o),s=_o({baseUrl:t,payTo:mo(o),network:ho(o),asset:go(o),amount:fo(o),facilitatorUrl:wo(o)});return{acpDiscovery:yo({sellerId:r,baseUrl:t,web3Enabled:a}),ucpProfile:So({sellerId:r,baseUrl:t,web3Enabled:a}),mppOpenApi:bo({baseUrl:t}),x402PaymentRequired:s}},"buildKnowgrphCommerceDiscovery");var xo=n((e,t={})=>{let o=Rt({requestUrl:e?.url,env:t}).x402PaymentRequired,r=kn(JSON.stringify(o));return new Response(_n(o),{status:402,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*",...r?{"payment-required":r}:{}}})},"buildKnowgrphX402PaymentRequiredResponse");async function ko(e){return xo(e.request,e.env||{})}n(ko,"onRequest");async function Po(e){let{request:t}=e,o=String(t.method||"GET").toUpperCase(),r=t.headers.get("origin")||"";return o==="OPTIONS"?Pe(t):o!=="GET"&&o!=="HEAD"?Y({ok:!1,error:"Method not allowed"},{status:405,origin:r}):Y({ok:!0,models:xt.map(a=>({model:a,display_name:a}))},{status:200,origin:r})}n(Po,"onRequest");async function Ro(e){let{request:t,env:o}=e,r=String(t.method||"GET").toUpperCase(),a=t.headers.get("origin")||"";if(r==="OPTIONS")return Pe(t);if(r!=="POST")return Y({ok:!1,error:"Method not allowed"},{status:405,origin:a});try{if(!String(t.headers.get("content-type")||"").toLowerCase().includes("application/json"))return Y({ok:!1,error:"Expected application/json"},{status:415,origin:a});let i=await We(t);return await ze({request:t,env:o,pathname:"/responses",payload:i})}catch(s){let i=s instanceof Error?s.message:String(s||"Unknown error");return Y({ok:!1,error:i},{status:400,origin:a})}}n(Ro,"onRequest");var Je="io.modelcontextprotocol/ui",he="text/html;profile=mcp-app",Ao="2026-01-26",Rn="knowgrph-mcp-apps-server-readiness/v0.1",J="ui://knowgrph/agent-ready",At="knowgrph-agent-ready",Et="inspect_agent_surface",j=n(e=>String(e||"").trim(),"normalizeString"),Ye=n(e=>j(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),"escapeHtml"),An=n(e=>JSON.stringify(e).replace(/</g,"\\u003c"),"safeJsonForInlineScript"),Ct=n(()=>({extensions:{[Je]:{mimeTypes:[he]}}}),"buildKnowgrphMcpAppsCapabilities"),me=n(e=>Array.isArray(e)?e:[],"arrayFrom"),te=n((e,t,o,r=[])=>({id:e,label:t,ok:o===!0,evidence:me(r).map(j).filter(Boolean)}),"booleanCheck"),Eo=n((e={})=>{let t=j(e.baseUrl).replace(/\/+$/,""),o=j(e.updatedAt),r=e.mcpServerCard&&typeof e.mcpServerCard=="object"?e.mcpServerCard:{},a=r.capabilities&&typeof r.capabilities=="object"?r.capabilities:{},s=me(e.tools).length?me(e.tools):me(a.tools),i=me(e.resources).length?me(e.resources):[Xe({appUrl:t,updatedAt:o})],c=s.filter(E=>E?._meta?.ui?.resourceUri===J),l=c.find(E=>E?.name===Et)||c[0]||null,u=i.find(E=>E?.uri===J)||null,h=a.extensions?.[Je],d=j(r.transport?.url)||(t?`${t}/mcp`:""),_=j(r.transport?.type)||"http",m=l?.outputSchema&&typeof l.outputSchema=="object",y=!!l?.name,A=m,x=[te("app-tool-resource-link","App tool is linked to the UI resource",c.length>0,c.map(E=>E.name)),te("output-schema","App tool exposes an output schema",m,[l?.name]),te("text-fallback","Tool result keeps a text fallback for non-UI hosts",y,[l?.name]),te("structured-content","Tool result returns structured content for the View",A,[l?.name]),te("resource-descriptor","MCP resource descriptor uses the MCP Apps MIME type",u?.mimeType===he,[u?.uri]),te("resource-security-meta","Resource declares UI sandbox metadata",u?._meta?.ui?.prefersBorder===!0&&!!u?._meta?.ui?.csp,[u?.uri]),te("extension-capability","Server advertises the MCP Apps extension capability",h?.mimeTypes?.includes(he),[Je]),te("http-transport","Server exposes a stateless HTTP JSON-RPC transport",!!d,[d]),te("stdio-transport","Repo-local MCP server supports stdio host configuration",e.localStdio!==!1,["node mcp/server.js"])],T=x.every(E=>E.ok);return{schemaVersion:Rn,ready:T,updatedAt:o,app:{name:At,protocolVersion:Ao,resourceUri:J,resourceMimeType:he,extensionId:Je},tool:{name:l?.name||Et,title:l?.title||"Inspect Agent Surface",resourceUri:l?._meta?.ui?.resourceUri||J,visibility:me(l?._meta?.ui?.visibility).length?l._meta.ui.visibility:["model","app"],readOnly:l?.annotations?.readOnlyHint===!0,hasOutputSchema:!!m,textFallback:y,structuredContent:A},resource:{uri:u?.uri||J,name:u?.name||At,mimeType:u?.mimeType||he,prefersBorder:u?._meta?.ui?.prefersBorder===!0,csp:u?._meta?.ui?.csp||{}},transports:[{id:"pages-http-jsonrpc",type:_,url:d,stateless:!0,serverFactory:!0},{id:"local-stdio-jsonrpc",type:"stdio",command:"node mcp/server.js",stateless:!1,serverFactory:!0}],dataModel:{source:"inspect_agent_surface.structuredContent",categories:[{id:"discovery",label:"Discovery metadata",count:["health","apiCatalog","openApi","mcpServerCard","agentCard","agentSkills"].length},{id:"commerce",label:"Commerce discovery",count:["acpDiscovery","ucpProfile","mppOpenApi"].length},{id:"mcp-apps",label:"MCP Apps server bindings",count:x.length}],renderMode:"structured-summary-with-json-fallback"},checklist:x}},"buildKnowgrphMcpAppsServerReadiness"),Co=n((e={})=>({ui:{resourceUri:j(e.resourceUri)||J,visibility:Array.isArray(e.visibility)&&e.visibility.length?e.visibility:["model","app"]}}),"buildKnowgrphMcpAppsToolMeta"),To=Object.freeze({type:"object",additionalProperties:!0,required:["baseUrl","healthUrl","mcpUrl"],properties:{baseUrl:{type:"string"},healthUrl:{type:"string"},mcpUrl:{type:"string"},apiCatalogUrl:{type:"string"},openApiUrl:{type:"string"},mcpServerCardUrl:{type:"string"},agentCardUrl:{type:"string"},agentSkillsUrl:{type:"string"},commerceUrls:{type:"object",additionalProperties:{type:"string"}},health:{type:"object",additionalProperties:!0},apiCatalog:{type:"object",additionalProperties:!0},openApi:{type:"object",additionalProperties:!0},mcpServerCard:{type:"object",additionalProperties:!0},agentCard:{type:"object",additionalProperties:!0},agentSkills:{type:"object",additionalProperties:!0},commerce:{type:"object",additionalProperties:!0},mcpAppsServerReadiness:{type:"object",additionalProperties:!0}}}),Xe=n((e={})=>{let t=j(e.appUrl),o=j(e.updatedAt);return{uri:J,name:At,description:["Interactive MCP Apps view for the existing Knowgrph agent-ready surface.",t?`App URL: ${t}`:"",o?`Updated: ${o}`:""].filter(Boolean).join(" "),mimeType:he,_meta:{ui:{csp:{connectDomains:[],resourceDomains:[],frameDomains:[],baseUriDomains:[]},prefersBorder:!0}}}},"buildKnowgrphMcpAppsResourceDescriptor"),En=n((e={})=>{let t=j(e.appUrl),o=j(e.updatedAt),r=j(e.toolName)||Et,a=Array.isArray(e.toolNames)?e.toolNames.map(j).filter(Boolean):[r],s={appUrl:t,updatedAt:o,resourceUri:J,toolName:r,toolNames:a,protocolVersion:Ao};return`<!doctype html>
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
      <div>
        <h1>Knowgrph Agent Ready</h1>
        <p>Interactive MCP Apps view backed by the existing read-only agent surface.</p>
      </div>
      <div class="actions">
        <button id="refresh" type="button">Refresh</button>
        ${t?`<a href="${Ye(t)}" target="_blank" rel="noreferrer">Open</a>`:""}
      </div>
    </header>
    <section aria-label="MCP app state">
      <dl>
        <dt>Resource</dt><dd>${Ye(J)}</dd>
        <dt>Tool</dt><dd>${Ye(r)}</dd>
        <dt>Host</dt><dd id="host">Not connected.</dd>
        <dt>Updated</dt><dd>${Ye(o||"runtime")}</dd>
        <dt>Status</dt><dd id="status" class="status">Initializing MCP Apps host bridge.</dd>
      </dl>
    </section>
    <section aria-label="MCP Apps server readiness">
      <div id="readiness" class="readiness">Waiting for structured server-readiness data.</div>
    </section>
    <section aria-label="Tool result">
      <pre id="structured">No tool result received yet.</pre>
    </section>
  </main>
  <script>
  (() => {
    const boot = ${An(s)};
    const statusEl = document.getElementById('status');
    const hostEl = document.getElementById('host');
    const readinessEl = document.getElementById('readiness');
    const structuredEl = document.getElementById('structured');
    let nextId = 1;
    const pending = new Map();
    const state = { hostCapabilities: null, hostContext: null, input: null, result: null };
    const hasParent = () => window.parent && window.parent !== window;
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
        const result = await request('tools/call', { name: boot.toolName, arguments: {} });
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
</html>`},"buildKnowgrphMcpAppsHtml"),vo=n((e={})=>{let t=Xe(e);return{contents:[{uri:t.uri,mimeType:he,text:En(e),_meta:t._meta}]}},"buildKnowgrphMcpAppsResourceReadResult");var p=Object.freeze({listSourceFiles:"list_source_files",readSourceFile:"read_source_file",readSharedDocument:"read_shared_document",inspectSharedDocumentStructure:"inspect_shared_document_structure",inspectLocalSettingsChatReadiness:"inspect_local_settings_chat_readiness",inspectLocalMainPanelState:"inspect_local_mainpanel_state",inspectLocalEditorWorkspaceState:"inspect_local_editor_workspace_state",inspectLocalChatPipelineState:"inspect_local_chat_pipeline_state",inspectLocalMainPanelChatCanvasPipeline:"inspect_local_mainpanel_chat_canvas_pipeline",inspectLocalWorkspaceDocument:"inspect_local_workspace_document",inspectLocalCanvasTopology:"inspect_local_canvas_topology",inspectLocalCanvasSnapshot:"inspect_local_canvas_snapshot",inspectLocal3dCameraPose:"inspect_local_3d_camera_pose",inspectLocal3dLayoutPositions:"inspect_local_3d_layout_positions",inspectLocal2dZoomViewport:"inspect_local_2d_zoom_viewport",inspectLocalSourceFilesSnapshot:"inspect_local_source_files_snapshot",inspectAgentSurface:"inspect_agent_surface"}),Cn="knowgrph",M=Object.freeze({readOnlyHint:!0}),N=n((e,t=Cn)=>`${String(t||"").trim()}.${String(e||"").trim()}`,"buildKnowgrphWebMcpToolName"),Tt=n((e={})=>{let t=String(e.defaultWorkspaceId||"").trim(),o=e.includeBrowserOnlyTools===!0;return[{name:p.listSourceFiles,webName:N(p.listSourceFiles),title:"List Source Files",description:"List published Knowgrph Source Files.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:M},{name:p.readSourceFile,webName:N(p.readSourceFile),title:"Read Source File",description:"Read published Knowgrph Editor Workspace markdown content. Defaults to the canonical docs workspace when workspaceId is omitted.",inputSchema:{type:"object",additionalProperties:!1,required:["canonicalPath"],properties:{canonicalPath:{type:"string"},workspaceId:t?{type:"string",default:t}:{type:"string"}}},annotations:M},{name:p.readSharedDocument,webName:N(p.readSharedDocument),title:"Read Shared Document",description:"Read published Knowgrph markdown content from a share token or public Knowgrph share/document URL.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:M},{name:p.inspectSharedDocumentStructure,webName:N(p.inspectSharedDocumentStructure),title:"Inspect Shared Document Structure",description:"Inspect published Knowgrph shared-document frontmatter and body structure from a share token or public Knowgrph share/document URL.",inputSchema:{type:"object",additionalProperties:!1,properties:{shareToken:{type:"string"},shareUrl:{type:"string"}},anyOf:[{required:["shareToken"]},{required:["shareUrl"]}]},annotations:M},...o?[{name:p.inspectLocalSettingsChatReadiness,webName:N(p.inspectLocalSettingsChatReadiness),title:"Inspect Local Settings Chat Readiness",description:"Inspect the active browser-local Knowgrph SettingsView chat readiness state for MainPanel MCP, Integrations, and Commerce, including provider, routing, and model discovery status.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:M},{name:p.inspectLocalMainPanelState,webName:N(p.inspectLocalMainPanelState),title:"Inspect Local MainPanel State",description:"Inspect the active browser-local Knowgrph MainPanel tab, search, and shared action state for MCP, Integrations, and Commerce readiness.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:M},{name:p.inspectLocalEditorWorkspaceState,webName:N(p.inspectLocalEditorWorkspaceState),title:"Inspect Local Editor Workspace State",description:"Inspect the active browser-local Knowgrph Editor Workspace and Markdown pane state, including pane visibility and live draft/frontmatter structure.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:M},{name:p.inspectLocalChatPipelineState,webName:N(p.inspectLocalChatPipelineState),title:"Inspect Local Chat Pipeline State",description:"Inspect the active browser-local Knowgrph FloatingPanel chat runtime, including streaming, workspace follow path, and LLM-to-workspace pipeline state.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:M},{name:p.inspectLocalMainPanelChatCanvasPipeline,webName:N(p.inspectLocalMainPanelChatCanvasPipeline),title:"Inspect Local MainPanel Chat Canvas Pipeline",description:"Inspect the active browser-local Knowgrph E2E readiness path from MainPanel MCP, Integrations, and Commerce through FloatingPanel Chat, workspace markdown/frontmatter, and canvas topology.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:M},{name:p.inspectLocalWorkspaceDocument,webName:N(p.inspectLocalWorkspaceDocument),title:"Inspect Local Workspace Document",description:"Inspect the active browser-local Knowgrph workspace markdown document structure without reading published storage routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:M},{name:p.inspectLocalCanvasTopology,webName:N(p.inspectLocalCanvasTopology),title:"Inspect Local Canvas Topology",description:"Inspect the active browser-local Knowgrph canvas topology summary from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:M},{name:p.inspectLocalCanvasSnapshot,webName:N(p.inspectLocalCanvasSnapshot),title:"Inspect Local Canvas Snapshot",description:"Inspect the active browser-local Knowgrph canvas SVG snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:M},{name:p.inspectLocal3dCameraPose,webName:N(p.inspectLocal3dCameraPose),title:"Inspect Local 3D Camera Pose",description:"Inspect the active browser-local Knowgrph 3D camera pose from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:M},{name:p.inspectLocal3dLayoutPositions,webName:N(p.inspectLocal3dLayoutPositions),title:"Inspect Local 3D Layout Positions",description:"Inspect the active browser-local Knowgrph 3D layout positions from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:M},{name:p.inspectLocal2dZoomViewport,webName:N(p.inspectLocal2dZoomViewport),title:"Inspect Local 2D Zoom Viewport",description:"Inspect the active browser-local Knowgrph 2D zoom and viewport state from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:M},{name:p.inspectLocalSourceFilesSnapshot,webName:N(p.inspectLocalSourceFilesSnapshot),title:"Inspect Local Source Files Snapshot",description:"Inspect the active browser-local Knowgrph Source Files runtime snapshot from the app runtime without calling published storage or Pages MCP routes.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},annotations:M}]:[],{name:p.inspectAgentSurface,webName:N(p.inspectAgentSurface),title:"Inspect Agent Surface",description:"Inspect the deployed Knowgrph agent-ready discovery surface, including health, OpenAPI, MCP, and skill metadata.",inputSchema:{type:"object",additionalProperties:!1,properties:{}},outputSchema:To,annotations:M,_meta:Co()}]},"buildKnowgrphAgentReadyToolContracts");var Io=n((e={})=>{let t=String(e.baseUrl||"").replace(/\/+$/,""),o=t?new URL(`${t}/`).origin:"";return{...{baseUrl:t,healthUrl:`${t}/health`,mcpUrl:`${t}/mcp`,apiCatalogUrl:`${t}/.well-known/api-catalog`,openApiUrl:`${t}/.well-known/openapi.json`,mcpServerCardUrl:`${t}/.well-known/mcp/server-card.json`,agentCardUrl:`${t}/.well-known/agent-card.json`,agentSkillsUrl:`${t}/.well-known/agent-skills/index.json`,commerceUrls:{acpDiscoveryUrl:`${o}/.well-known/acp.json`,ucpProfileUrl:`${o}/.well-known/ucp`,mppOpenApiUrl:`${o}/openapi.json`,x402PaymentRequiredUrl:`${o}/api/payments/commerce/x402`},health:e.health,apiCatalog:e.apiCatalog,openApi:e.openApi,mcpServerCard:e.mcpServerCard,agentCard:e.agentCard,agentSkills:e.agentSkills,commerce:e.commerce},mcpAppsServerReadiness:Eo({baseUrl:t,updatedAt:e.updatedAt||e.health?.updatedAt||"",mcpServerCard:e.mcpServerCard})}},"buildAgentSurfaceInspectionPayload");var Oo=n((e={})=>{let t=e.toolNames||{},o=String(e.defaultWorkspaceId||"").trim(),r=e.buildStorageDocPath,a=e.fetchSourceFilesIndexResponse,s=e.fetchStorageMarkdownResponse,i=e.resolveSharedDocumentInput,c=e.inspectSharedDocumentStructure,l=e.buildAgentSurfaceInspection,u=n(m=>String(m||"").trim(),"normalizeString");if(typeof r!="function")throw new Error("buildStorageDocPath is required");if(typeof a!="function")throw new Error("fetchSourceFilesIndexResponse is required");if(typeof s!="function")throw new Error("fetchStorageMarkdownResponse is required");if(typeof i!="function")throw new Error("resolveSharedDocumentInput is required");if(typeof c!="function")throw new Error("inspectSharedDocumentStructure is required");if(typeof l!="function")throw new Error("buildAgentSurfaceInspection is required");let h=n(async(m={})=>{let y=u(m.canonicalPath);if(!y)throw new Error("canonicalPath is required");let A=u(m.workspaceId),x=await s(r(y,A));if(!x.ok)throw new Error(`read_source_file failed with ${x.status}`);return{workspaceId:A||o,canonicalPath:y,markdown:await x.text()}},"readSourceFile"),d=n(async(m={})=>{let y=i(m);if(!y)throw new Error("shareToken or shareUrl must resolve to a published Knowgrph document");let A=u(y.workspaceId),x=u(y.canonicalPath),T=await s(r(x,A));if(!T.ok)throw new Error(`read_shared_document failed with ${T.status}`);return{workspaceId:A||o,canonicalPath:x,markdown:await T.text()}},"readSharedDocument"),_=n(async(m={})=>{let y=await d(m);return c(y)},"inspectSharedDocument");return{[t.listSourceFiles]:async()=>{let m=await a();if(!m.ok)throw new Error(`list_source_files failed with ${m.status}`);return{workspaceId:o,markdownIndex:await m.text()}},[t.readSourceFile]:h,[t.readSharedDocument]:d,[t.inspectSharedDocumentStructure]:_,[t.inspectAgentSurface]:async()=>l()}},"createPublishedAgentReadyToolExecutors");var Uo=n((e={})=>{let t=n(S=>String(S||"").trim(),"normalizeString"),o=n(S=>String(S||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`),"normalizeMarkdown"),r=n(S=>{let b=String(S||"").match(/^\s*/);return b?b[0].length:0},"readIndent"),a=n(S=>/^[A-Za-z0-9_:@-]+\s*:/.test(t(S)),"isYamlKeyLine"),s=n(S=>o(S).split(`
`),"splitLines"),i=n(S=>{let b=s(S),g=0;for(;g<b.length&&!t(b[g]);)g+=1;if(t(b[g])!=="---")return null;for(let f=g+1;f<b.length;f+=1)if(t(b[f])==="---")return{frontmatter:b.slice(g+1,f).join(`
`),body:b.slice(f+1).join(`
`)};return null},"extractLeadingFrontmatter"),c=n(S=>{let b=[];for(let g of s(S)){if(!t(g)||r(g)!==0)continue;let f=g.match(/^([A-Za-z0-9_:@-]+)\s*:/);f?.[1]&&b.push(f[1])}return Array.from(new Set(b)).sort((g,f)=>g.localeCompare(f))},"extractTopLevelFrontmatterKeys"),l=n((S,b)=>{let g=s(S),f=`${b}:`;for(let C=0;C<g.length;C+=1){let ee=g[C],ue=t(ee);if(!ue.startsWith(f))continue;let be=r(ee),_e=ue.slice(f.length).trim();if(_e)return{indent:be,inlineValue:_e,blockLines:[],blockText:""};let xe=[];for(let Ie=C+1;Ie<g.length;Ie+=1){let ke=g[Ie],D=t(ke),G=r(ke);if(D&&G<=be&&a(ke))break;xe.push(ke)}return{indent:be,inlineValue:"",blockLines:xe,blockText:xe.join(`
`)}}return null},"extractYamlBlock"),u=n(S=>{let b=[];for(let g of s(S)){let f=t(g);if(!f||f.startsWith("- "))continue;let C=f.match(/^([A-Za-z0-9_:@-]+)\s*:/);C?.[1]&&b.push(C[1])}return Array.from(new Set(b)).sort((g,f)=>g.localeCompare(f))},"extractNestedYamlKeys"),h=n(S=>{let b=t(S);if(!b.startsWith("[")||!b.endsWith("]"))return null;let g=b.slice(1,-1).trim();return g?g.split(",").map(f=>t(f)).filter(Boolean).length:0},"countInlineSequenceEntries"),d=n((S,b)=>{let g=l(S,b);if(!g)return null;if(g.inlineValue)return h(g.inlineValue);let f=0;for(let C of g.blockLines)t(C)&&(r(C)<=g.indent||/^\s*-\s+/.test(C)&&(f+=1));return f},"countYamlSequenceEntries"),_=n(S=>{let b=[];for(let g of s(S)){let f=g.match(/^(#{1,6})\s+(.+?)\s*$/);f?.[2]&&b.push({depth:f[1].length,text:t(f[2])})}return b},"extractMarkdownHeadings"),m=t(e.workspaceId),y=t(e.canonicalPath),A=o(e.markdown),x=i(A),T=x?c(x.frontmatter):[],E=x?l(x.frontmatter,"flow"):null,U=E?u(E.blockText):[],v=new Set(["kg:subgraphs","clusters","groups","layers"]),V=Array.from(new Set([...T,...U].filter(S=>v.has(S)))).sort((S,b)=>S.localeCompare(b)),K=_(x?x.body:A);return{workspaceId:m,canonicalPath:y,markdownLength:A.length,lineCount:A?s(A).length:0,hasFrontmatter:!!x,topLevelKeys:T,hasFlowBlock:!!E,flowKeys:U,flowNodeCount:E?d(E.blockText,"nodes"):null,flowConnectionCount:E?d(E.blockText,"connections")??d(E.blockText,"edges"):null,flowSubgraphCount:E?d(E.blockText,"subgraphs"):null,forbiddenGroupingAliases:V,headingCount:K.length,headings:K.map(S=>S.text),bodyLength:t(x?x.body:A).length}},"inspectSharedDocumentStructure");var No="knowgrph-vdeoxpln/v0.1",H=Object.freeze({uiLaunch:"knowgrph.ui.launch",uiStop:"knowgrph.ui.stop",pipeline:"knowgrph.pipeline",graphragPipeline:"knowgrph.graphrag_pipeline",superagentRun:"knowgrph.superagent.run",browserApiRun:"knowgrph.browser_api.run",vdeoxplnList:"knowgrph.vdeoxpln.list"}),ge=Object.freeze({sourceFiles:"knowgrph-source-files",agentReady:"knowgrph-agent-ready",localMcp:"knowgrph-mcp-local",chatToCanvas:"knowgrph-chat-to-canvas",strybldr:"knowgrph-strybldr",researchVisual:"knowgrph-research-visual",commerceReadiness:"knowgrph-commerce-readiness"}),It=n(e=>String(e||"").trim(),"normalizeString"),z=n(e=>Array.from(new Set((Array.isArray(e)?e:[]).map(It).filter(Boolean))).sort((t,o)=>t.localeCompare(o)),"normalizeStringArray"),Mo=n(e=>{let t=new Set,o=[];for(let r of Array.isArray(e)?e:[]){let a=It(r);!a||t.has(a)||(t.add(a),o.push(a))}return o},"normalizeOrderedStringArray"),vt=n(e=>Array.isArray(e)?e.map(vt):!e||typeof e!="object"?e:Object.keys(e).sort((t,o)=>t.localeCompare(o)).reduce((t,o)=>(t[o]=vt(e[o]),t),{}),"normalizeJsonValue"),Tn=n(e=>JSON.stringify(vt(e)),"stableStringifyVdeoxplnValue"),vn=n((e,t)=>{let o=It(e)||"vdeoxpln";return`kgvx_${qe([o,No,Tn(t)])}`},"buildKnowgrphVdeoxplnSemanticKey");var In=Object.freeze([{id:ge.sourceFiles,title:"Knowgrph Source Files",purpose:"Discover, read, inspect, and route published Source Files and shared documents through the canonical storage and document-structure owners.",scope:"read-only-published",mutation:"read-only",triggers:["source files","published documents","shared document","read markdown","inspect document structure"],inputs:["workspace document","published markdown","share token","share URL","canonical path"],outputs:["source-files index","published markdown","document structure report"],owners:["canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/sourceFilesSignatures.ts","canvas/src/features/agent-ready/publishedToolExecutors.mjs","canvas/src/features/agent-ready/sharedDocumentStructureInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs"],tools:{published:[p.listSourceFiles,p.readSourceFile,p.readSharedDocument,p.inspectSharedDocumentStructure],browserLocal:[p.inspectLocalSourceFilesSnapshot],local:[H.vdeoxplnList]},workflow:["Resolve source identity from storage, share token, or canonical path.","Fetch through published storage/document executors.","Inspect structure with the shared document-structure owner.","Return read-only artifacts without graph mutation."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return source-read or structure errors without model calls."},artifactPolicy:{persistence:"published-read-only",graphMaterialization:"none",semanticKeyInputs:["workspaceId","canonicalPath","shareToken","toolContract"]},validation:["agent-ready:check","pages:check-sync","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","webmcp-html-fallback"]},{id:ge.agentReady,title:"Knowgrph Agent Ready",purpose:"Inspect Knowgrph health, MCP, WebMCP, A2A, OpenAPI, commerce, and browser-local readiness without claiming deployed mutation.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["agent-ready","webmcp","mcp health","openapi","a2a","discovery","readiness"],inputs:["agent-ready base URL","browser runtime state","published metadata"],outputs:["agent surface inspection","browser-local readiness snapshot","metadata report"],owners:["canvas/src/features/agent-ready/knowgrphAgentReadyToolContract.mjs","canvas/src/features/agent-ready/webMcpRuntime.ts","canvas/src/features/agent-ready/agentSurfaceInspection.mjs","cloudflare/pages/knowgrph-agent-ready.mjs","scripts/check-agent-ready.mjs"],tools:{published:[p.inspectAgentSurface],browserLocal:[p.inspectLocalSettingsChatReadiness,p.inspectLocalMainPanelState,p.inspectLocalEditorWorkspaceState,p.inspectLocalChatPipelineState,p.inspectLocalMainPanelChatCanvasPipeline,p.inspectLocalWorkspaceDocument,p.inspectLocalCanvasTopology,p.inspectLocalCanvasSnapshot,p.inspectLocal3dCameraPose,p.inspectLocal3dLayoutPositions,p.inspectLocal2dZoomViewport,p.inspectLocalSourceFilesSnapshot],local:[H.vdeoxplnList]},workflow:["Inspect published agent-ready metadata.","Inspect browser-local state only when running inside the app runtime.","Report scope boundaries between Pages read-only tools and browser-local inspectors."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return metadata inspection errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["toolContracts","metadataRoutes","browserLocalToolNames"]},validation:["agent-ready:check","vdeoxpln:check"],publish:["pages-agent-skills","http-mcp","browser-webmcp"]},{id:ge.localMcp,title:"Knowgrph Local MCP",purpose:"Expose local UI launch, pipeline, GraphRAG, superagent, browser bridge, and vdeoxpln inspection tools through the stdio MCP server.",scope:"local-stdio",mutation:"local-confirmed",triggers:["local mcp","launch canvas","run pipeline","graphrag","superagent","browser api","list vdeoxpln"],inputs:["local root","workspace file","graph data","pipeline config","browser API runtime"],outputs:["local tool result","pipeline artifact","superagent report","vdeoxpln registry snapshot"],owners:["mcp/local-tool-contract.js","mcp/server.js","mcp/README.md","knowgrph_parser/superagent_harness.py","canvas/src/features/agent-ready/knowgrphVdeoxplnContract.mjs"],tools:{published:[],browserLocal:[],local:[H.uiLaunch,H.uiStop,H.pipeline,H.graphragPipeline,H.superagentRun,H.browserApiRun,H.vdeoxplnList]},workflow:["List local tools from the shared local MCP contract.","Run only path-guarded local-root operations.","Summarize artifacts and registry metadata in the MCP result."],aiPolicy:{mode:"optional-via-local-tools",maxAttempts:1,tokenBudget:"tool-owned",fallback:"Return local command failure and detected artifacts."},artifactPolicy:{persistence:"local-workspace",graphMaterialization:"tool-owned",semanticKeyInputs:["localToolNames","rootScope","artifactList"]},validation:["vdeoxpln:check","mcpLocalToolContract"],publish:["local-mcp-docs"]},{id:ge.chatToCanvas,title:"Knowgrph Chat To Canvas",purpose:"Route AI-assisted graph generation through FloatingPanel Chat, KGC validation, Workspace FS, Source Files, and Canvas apply owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["chat to canvas","generate graph","kgc markdown","flow.subgraphs","apply to canvas"],inputs:["chat request","workspace context","selection context","source evidence","model settings"],outputs:["validated KGC Markdown","workspace artifact","GraphData","canvas topology snapshot"],owners:["canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitRequest.ts","canvas/src/features/chat/chatMarkdownValidation.ts","canvas/src/features/chat/chatKgcCanvasApply.ts","canvas/src/features/chat/knowgrphVdeoxplnChatArtifacts.ts","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/lib/graph/semanticKey.ts"],tools:{published:[],browserLocal:[p.inspectLocalChatPipelineState,p.inspectLocalMainPanelChatCanvasPipeline,p.inspectLocalWorkspaceDocument,p.inspectLocalCanvasTopology,p.inspectLocalCanvasSnapshot],local:[H.vdeoxplnList]},workflow:["Vdeoxpln context through the shared chat submit request owner.","Call provider transport only after typed request construction.","Validate KGC Markdown with bounded retries.","Persist through Workspace FS and apply through the existing Canvas path."],aiPolicy:{mode:"required-for-generation",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Persist validation or provider failure as reviewable chat/workspace state."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["chatContextScope","workspacePath","graphSemanticKey","sourceLayerHash"]},validation:["chatResponseContract","sourceFiles","vdeoxpln:check"],publish:["browser-webmcp","mainpanel-mcp"]},{id:ge.strybldr,title:"Knowgrph Strybldr",purpose:"Turn image or media source units into editable Storyboard cards and bounded media handoff artifacts through Strybldr and shared renderer owners.",scope:"browser-local-source-backed",mutation:"browser-local-user-mediated",triggers:["strybldr","storyboard","image to storyboard","media handoff","visual brief"],inputs:["image source unit","media metadata","workspace document","storyboard graph"],outputs:["Strybldr Markdown","Storyboard graph cards","media handoff prompt","canvas snapshot"],owners:["canvas/src/features/strybldr/strybldrStoryboard.ts","canvas/src/features/strybldr","canvas/src/features/workspace-fs/workspaceFs.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-strybldr-prd-tad.md"],tools:{published:[],browserLocal:[p.inspectLocalSourceFilesSnapshot,p.inspectLocalCanvasTopology,p.inspectLocalCanvasSnapshot],local:[H.vdeoxplnList]},workflow:["Import media through existing workspace/source owners.","Build Strybldr cards with source-unit provenance.","Render through the shared Storyboard surface.","Compile bounded media handoff only after user approval."],aiPolicy:{mode:"optional-for-refinement",maxAttempts:1,tokenBudget:"user-approved-provider-step",fallback:"Keep editable storyboard and structured handoff error."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"storyboard-graph",semanticKeyInputs:["sourceUnitId","strybldrRunId","graphSemanticKey"]},validation:["strybldr","rendererPipelineNeutrality","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:ge.researchVisual,title:"Knowgrph Research Visual",purpose:"Create file-backed research visual workflows from source material using Knowgrph parsing, Source Files, Storyboard, renderer, and chat owners.",scope:"browser-local-ai-assisted",mutation:"browser-local-user-mediated",triggers:["research visual","explainer","formula","algorithm","proof","dynamic scene","storyboard"],inputs:["paper excerpt","formula","algorithm","figure","workspace document","source evidence"],outputs:["mechanism brief","storyboard","renderer-neutral scene plan","validated KGC Markdown"],owners:["canvas/src/features/parsers/default.ts","canvas/src/features/source-files/applyComposedGraphFromSourceFiles.ts","canvas/src/features/chat/floatingPanelChat/floatingPanelChatSubmitCoordinator.ts","canvas/src/features/chat/knowgrphVdeoxplnChatArtifacts.ts","canvas/src/components/StoryboardCanvas/storyboardModel.ts","canvas/src/lib/config.render.ts","canvas/src/lib/graph/semanticKey.ts","docs/documents/knowgrph-vdeoxpln-prd-tad.md"],tools:{published:[],browserLocal:[p.inspectLocalChatPipelineState,p.inspectLocalSourceFilesSnapshot,p.inspectLocalCanvasTopology],local:[H.vdeoxplnList]},workflow:["Extract source-backed semantic units into workspace artifacts.","Plan exact deterministic graph/storyboard layers before optional AI support.","Persist artifacts through Workspace FS and Source Files.","Use Canvas/Storyboard renderers as projections of graph state."],aiPolicy:{mode:"optional-for-drafting",maxAttempts:2,tokenBudget:"settings-owned",fallback:"Return deterministic source brief with unresolved questions."},artifactPolicy:{persistence:"workspace-fs-and-source-files",graphMaterialization:"kgc-validation-to-canvas-apply",semanticKeyInputs:["sourceSignature","graphSemanticKey","rendererId"]},validation:["sourceFiles","chatResponseContract","vdeoxpln:check"],publish:["mainpanel-mcp","browser-webmcp"]},{id:ge.commerceReadiness,title:"Knowgrph Commerce Readiness",purpose:"Inspect Commerce, payment worker, x402, ACP, UCP, MPP, and readiness metadata without bypassing the shared payment SSOT.",scope:"read-only-published-and-browser-local",mutation:"read-only",triggers:["commerce","payment","x402","acp","ucp","mpp","stripe","readiness"],inputs:["agent-ready metadata","commerce route health","browser readiness snapshot"],outputs:["commerce readiness report","payment route summary","agent-ready commerce metadata"],owners:["canvas/src/features/panels/views/CommerceHubView.tsx","canvas/src/features/agent-ready/browserLocalSurfaceSnapshots.ts","cloudflare/pages/knowgrph-agent-ready-commerce.mjs","cloudflare/workers/knowgrph-payment/agenticCommerce.ts","grph-shared/src/payments/agenticCommerceSsot.ts"],tools:{published:[p.inspectAgentSurface],browserLocal:[p.inspectLocalSettingsChatReadiness,p.inspectLocalMainPanelState],local:[H.vdeoxplnList]},workflow:["Inspect published commerce discovery metadata.","Read browser-local readiness snapshots when available.","Report payment capability boundaries without initiating checkout."],aiPolicy:{mode:"none",maxAttempts:0,tokenBudget:0,fallback:"Return route or metadata errors directly."},artifactPolicy:{persistence:"inspection-only",graphMaterialization:"none",semanticKeyInputs:["commerceSemanticKey","routeHealth","toolContract"]},validation:["agent-ready:check","mainPanelCommerce","vdeoxpln:check"],publish:["pages-agent-skills","mainpanel-mcp","browser-webmcp"]}]),On=n(e=>{let t={published:z(e.tools?.published),browserLocal:z(e.tools?.browserLocal),local:z(e.tools?.local)},o=vn(e.id,{id:e.id,scope:e.scope,mutation:e.mutation,owners:z(e.owners),tools:t,triggers:z(e.triggers),outputs:z(e.outputs),workflow:Mo(e.workflow),artifactPolicy:e.artifactPolicy||{},aiPolicy:e.aiPolicy||{}}),r=`/.well-known/agent-skills/${e.id}.md`;return Object.freeze({...e,version:No,triggers:z(e.triggers),inputs:z(e.inputs),outputs:z(e.outputs),owners:z(e.owners),tools:Object.freeze(t),workflow:Mo(e.workflow),validation:z(e.validation),publish:z(e.publish),semanticKey:o,agentSkill:Object.freeze({name:e.id,type:"markdown",description:e.purpose,path:r})})},"normalizeVdeoxpln"),Lo=n(()=>In.map(On).sort((e,t)=>e.id.localeCompare(t.id)),"buildKnowgrphVdeoxplnRegistry");var $o=n((e=Lo())=>e.map(t=>({...t.agentSkill,vdeoxpln:{id:t.id,title:t.title,scope:t.scope,mutation:t.mutation,semanticKey:t.semanticKey,tools:t.tools,publish:t.publish}})),"buildKnowgrphVdeoxplnAgentSkillDefinitions"),Z=n(e=>e&&e.length?e.map(t=>`- ${t}`).join(`
`):"- none","markdownList"),Un=n(e=>`# ${e.title} Skill

Use this skill when: ${e.purpose}

## Contract

- Vdeoxpln id: \`${e.id}\`
- Contract version: \`${e.version}\`
- Semantic key: \`${e.semanticKey}\`
- Scope: \`${e.scope}\`
- Mutation boundary: \`${e.mutation}\`

## Triggers

${Z(e.triggers)}

## Inputs

${Z(e.inputs)}

## Outputs

${Z(e.outputs)}

## Tools

Published tools:
${Z(e.tools.published)}

Browser-local tools:
${Z(e.tools.browserLocal)}

Local MCP tools:
${Z(e.tools.local)}

## Workflow

${Z(e.workflow)}

## Source Owners

${Z(e.owners)}

## Artifact Policy

- Persistence: \`${e.artifactPolicy?.persistence||"none"}\`
- Graph materialization: \`${e.artifactPolicy?.graphMaterialization||"none"}\`
- Semantic-key inputs:
${Z(e.artifactPolicy?.semanticKeyInputs||[])}

## AI Policy

- Mode: \`${e.aiPolicy?.mode||"none"}\`
- Max attempts: \`${String(e.aiPolicy?.maxAttempts??0)}\`
- Token budget: \`${String(e.aiPolicy?.tokenBudget??0)}\`
- Fallback: ${e.aiPolicy?.fallback||"Return deterministic errors without model calls."}

## Validation

${Z(e.validation)}

## Guardrails

- Keep behavior source-owned in the listed Knowgrph owners.
- Do not add compatibility aliases for stale vdeoxpln ids.
- Do not route by absolute paths, demo filenames, provider keys, or public route labels.
- Do not copy external vdeoxpln source, prompts, schemas, examples, assets, or prose.
`,"buildKnowgrphVdeoxplnMarkdown"),Do=n((e=Lo())=>Object.fromEntries(e.map(t=>[t.id,Un(t)])),"buildKnowgrphVdeoxplnMarkdownByName");var Mn={[p.listSourceFiles]:{id:"list-source-files",tags:["mcp","discovery","source-files","read-only"],examples:["List the published Knowgrph Source Files."],outputModes:["text/markdown","application/json"]},[p.readSourceFile]:{id:"read-source-file",tags:["mcp","read","markdown","workspace"],examples:["Read the published source file for docs/getting-started.md."],outputModes:["text/markdown","application/json"]},[p.readSharedDocument]:{id:"read-shared-document",tags:["mcp","read","shared-document","markdown"],examples:["Read the Knowgrph shared document behind this share URL."],outputModes:["text/markdown","application/json"]},[p.inspectSharedDocumentStructure]:{id:"inspect-shared-document-structure",tags:["mcp","inspect","shared-document","structure"],examples:["Inspect the structure of this Knowgrph shared document."],outputModes:["application/json","text/markdown"]},[p.inspectAgentSurface]:{id:"inspect-agent-surface",tags:["mcp","agent-ready","discovery","metadata"],examples:["Show the Knowgrph agent discovery metadata."],outputModes:["application/json","text/markdown"]}},Ne=$o(),Ko=n(e=>e.map(t=>{let o=Mn[t.name]||{id:String(t.name||"").replace(/_/g,"-"),tags:["mcp","read-only"],examples:[`Call ${t.name} on Knowgrph.`],outputModes:["application/json"]};return{id:o.id,name:t.title,description:t.description,tags:o.tags,examples:o.examples,inputModes:["application/json","text/plain"],outputModes:o.outputModes}}),"buildAgentReadyA2aSkills"),jo=n(async({appUrl:e,updatedAt:t,sha256ByName:o})=>({$schema:"https://agent-skills.dev/schemas/skills-index.v0.2.json",updated_at:t,skills:await Promise.all(Ne.map(async r=>({name:r.name,type:r.type,description:r.description,url:`${String(e||"").replace(/\/+$/,"")}${r.path}`,sha256:await o[r.name],vdeoxpln:r.vdeoxpln})))}),"buildAgentReadyAgentSkillsIndex"),Ho=n(({appBasePath:e,appA2aAgentCardPath:t,healthPath:o})=>{let r=Object.fromEntries(Ne.map(a=>[`${e}${a.path}`,{get:{summary:`Read the ${a.name} agent skill markdown`,responses:{200:{description:`Agent skill markdown for ${a.name}`}}}}]));return{[o]:{get:{summary:"Read the Knowgrph agent-ready health status",responses:{200:{description:"Health status in application/health+json format"}}}},[`${e}/mcp`]:{get:{summary:"Read MCP transport metadata",responses:{200:{description:"MCP transport metadata"}}},post:{summary:"Send a JSON-RPC MCP request",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",additionalProperties:!0}}}},responses:{200:{description:"JSON-RPC result payload"}}}},[t]:{get:{summary:"Read the Knowgrph A2A Agent Card",responses:{200:{description:"A2A Agent Card JSON"}}}},"/api/storage/llms.txt":{get:{summary:"Read the Source Files LLM index",responses:{200:{description:"Plain-text LLM index"}}}},"/api/storage/source-files":{get:{summary:"List published Source Files",responses:{200:{description:"Source Files index"}}}},"/api/storage/source-files/{workspaceId}":{get:{summary:"List published Source Files for a workspace",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped Source Files index"}}}},"/api/storage/source-files/{workspaceId}/llms.txt":{get:{summary:"Read the workspace-scoped Source Files LLM index",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Workspace-scoped plain-text LLM index"}}}},"/api/storage/doc-default/{canonicalPath}":{get:{summary:"Read a default-workspace Source File markdown document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document from the default Editor Workspace"},404:{description:"Document not found"}}}},"/api/storage/doc/{workspaceId}/{canonicalPath}":{get:{summary:"Read a Source File markdown document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Markdown document"},404:{description:"Document not found"}}}},[`${e}/doc-default/{canonicalPath}`]:{get:{summary:"Read a default-workspace shared document",parameters:[{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/doc/{workspaceId}/{canonicalPath}`]:{get:{summary:"Read a shared document",parameters:[{name:"workspaceId",in:"path",required:!0,schema:{type:"string"}},{name:"canonicalPath",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},[`${e}/share/{shareToken}`]:{get:{summary:"Read a shared document through the canonical opaque share token route",parameters:[{name:"shareToken",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTML for browsers or published markdown when Accept includes text/markdown"},404:{description:"Document not found"}}}},...r}},"buildAgentReadyOpenApiPaths");var Nn="kgShare",uc=typeof TextEncoder<"u"?new TextEncoder:null,Bo=typeof TextDecoder<"u"?new TextDecoder:null;var Ln=n(e=>{if(typeof Buffer<"u")return Uint8Array.from(Buffer.from(e,"base64"));let t=atob(e),o=new Uint8Array(t.length);for(let r=0;r<t.length;r+=1)o[r]=t.charCodeAt(r);return o},"fromBase64");var $n=n(e=>{let t=String(e||"").replace(/-/g,"+").replace(/_/g,"/");if(!t)return"";let o=t.length%4;return o?`${t}${"=".repeat(4-o)}`:t},"fromBase64Url");var Dn=n(e=>{if(!Bo)throw new Error("TextDecoder is required to decode published doc share tokens");return Bo.decode(Ln($n(e)))},"decodeUtf8Base64Url"),zo=n(e=>String(e||"").trim()||null,"normalizeWorkspaceId"),Mt=n(e=>String(e||"").trim(),"normalizeCanonicalPath"),Ot="/knowgrph",Fo="/doc-default/",Go="/doc/",Wo="/share/",Kn="kgWorkspaceId",jn="kgCanonicalPath",Hn=n(e=>{let t=String(e||"").trim();return t?`/${t.replace(/^\/+|\/+$/g,"")}`:Ot},"normalizeAppBasePath"),Ut=n(e=>{let t=Mt(e?.canonicalPath);return t?{canonicalPath:t,workspaceId:zo(e?.workspaceId)}:null},"normalizePublishedDocIdentity"),qo=n((e,t)=>{let o=Hn(t),r=String(e||"").replace(/\/+$/,"")||"/";if(!r.startsWith(o))return null;let a=r.slice(o.length)||"/";if(a.startsWith(Wo)){let c=decodeURIComponent(a.slice(Wo.length)).trim();return Nt(c)}if(a.startsWith(Fo))return Ut({canonicalPath:decodeURIComponent(a.slice(Fo.length))});if(!a.startsWith(Go))return null;let s=a.slice(Go.length),i=s.indexOf("/");return i<1?null:Ut({workspaceId:decodeURIComponent(s.slice(0,i)),canonicalPath:decodeURIComponent(s.slice(i+1))})},"parsePublishedDocPathname"),Bn=n(e=>{let t=Nt(e?.get(Nn));if(t)return t;let o=Mt(decodeURIComponent(String(e?.get(jn)||"")));if(o)return Ut({workspaceId:decodeURIComponent(String(e?.get(Kn)||"")),canonicalPath:o});let r=String(e?.get("kgPath")||"").trim();return r?qo(`${Ot}${r}`,Ot):null},"parsePublishedDocSearchParams");var Nt=n(e=>{let t=String(e||"").trim();if(!t)return null;try{let o=JSON.parse(Dn(t)),r=Mt(o?.canonicalPath);return r?{canonicalPath:r,workspaceId:zo(o?.workspaceId)}:null}catch{return null}},"decodePublishedDocShareToken"),Ze=n((e={})=>{let t=Nt(e.shareToken);if(t)return t;let o=String(e.shareUrl||"").trim();if(!o)return null;try{let r=String(e.baseUrl||"https://airvio.co").trim()||"https://airvio.co",a=new URL(o,r);return Bn(a.searchParams)||qo(a.pathname,e.appBasePath)}catch{return null}},"resolvePublishedDocIdentity"),Vo=String.raw`(args = {}) => {
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
}`;var Qe={push:"/api/storage/push",pull:"/api/storage/pull",collabSave:"/api/storage/collab/save",exportPrefix:"/api/storage/export/",docPrefix:"/api/storage/doc/",defaultDocPrefix:"/api/storage/doc-default/",sourceFilesIndex:"/api/storage/source-files",sourceFilesIndexPrefix:"/api/storage/source-files/",sourceFilesLlms:"/api/storage/llms.txt"};var Yo=n((e,t)=>`${Qe.docPrefix}${encodeURIComponent(String(e||"").trim())}/${encodeURIComponent(String(t||"").trim())}`,"buildKnowgrphStorageDocPath"),Jo=n(e=>`${Qe.defaultDocPrefix}${encodeURIComponent(String(e||"").trim())}`,"buildKnowgrphStorageDefaultDocPath"),Xo=n(e=>{let t=String(e||"").trim();return t?`${Qe.sourceFilesIndexPrefix}${encodeURIComponent(t)}`:Qe.sourceFilesIndex},"buildKnowgrphStorageSourceFilesIndexPath");var I="https://airvio.co",et="https://knowgrph-storage.huijoohwee.workers.dev",P="/knowgrph",k=`${I}${P}/`,Zo=`${I}/`,Le="kgws:canonical-docs",se="2026-05-23",Te=`${P}/health`,Ce=`${I}${Te}`,Qo="/.well-known/agent-card.json",Lt=`${P}/.well-known/agent-card.json`,tt=`${I}${Qo}`,$t=`${I}/api/storage/source-files`,Fn=`${I}/api/storage/doc-default/{canonicalPath}`,Gn=`${I}/api/storage/doc/{workspaceId}/{canonicalPath}`,er="knowgrph-agent-ready-pages";var tr=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${P}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${P}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${Te}>; rel="status"; type="application/health+json"`,`<${P}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${Qo}>; rel="describedby"; type="application/json"`].join(", "),or=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${k}.

## Discovery

- Crawl policy: ${k}robots.txt
- Sitemap: ${k}sitemap.xml
- API catalog: ${k}.well-known/api-catalog
- Auth.md registration instructions: ${Zo}auth.md
- Health: ${Ce}
- MCP server card: ${k}.well-known/mcp/server-card.json
- A2A Agent Card: ${tt}
- Agent skills: ${k}.well-known/agent-skills/index.json
- LLM reference: ${k}llms.txt

## APIs

- Agent-ready status: ${Ce}
- HTTP MCP: ${k}mcp
- Storage API: ${I}/api/storage/
- Source Files index: ${$t}
- Default Source File documents: ${Fn}
- Workspace Source File documents: ${Gn}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes five read-only tools for published Source Files, shared documents, and agent-surface inspection.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared five-tool WebMCP surface on \`${k}\` HTML routes.

## MCP Apps

- HTTP MCP advertises \`io.modelcontextprotocol/ui\` with \`text/html;profile=mcp-app\`.
- \`inspect_agent_surface\` links to the shared \`ui://knowgrph/agent-ready\` resource through \`_meta.ui.resourceUri\`.
- \`resources/list\` and \`resources/read\` serve the inline, sandbox-friendly Knowgrph Agent Ready app resource while preserving text fallback and structured tool output.
- The View initiates the MCP Apps \`ui/initialize\` handshake, sends \`ui/notifications/initialized\` and \`ui/notifications/size-changed\`, handles host context/tool input/result/cancel notifications, and calls the originating server through \`tools/call\`.
- \`inspect_agent_surface.structuredContent.mcpAppsServerReadiness\` exposes the native server-readiness model used by the View: app tool/resource binding, output-schema and structured-content readiness, sandbox metadata, HTTP JSON-RPC transport, and local stdio transport.
`,rr=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),$e=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(o=>o.trim().startsWith("text/markdown")),"wantsMarkdown"),nr=n((e,t)=>{let o=new Response(e.body,e),r=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return r&&o.headers.set("x-knowgrph-route-owner",r),a&&o.headers.set("x-knowgrph-route-tag",a),o},"withAgentReadyRouteHeaders");var nt=Tt({defaultWorkspaceId:Le}),cr=n((e,t="")=>{let o=String(e||"").trim(),r=String(t||"").trim();return r?Yo(r,o):Jo(o)},"buildStorageDocPath"),rt=n(e=>String(e||"").trim(),"normalizeToolString");var B=n((e,t="application/json; charset=utf-8")=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"jsonResponse"),lr=n((e,t)=>new Response(JSON.stringify(t,null,2),{status:e,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"jsonStatusResponse"),ot=n((e,t)=>new Response(e,{status:200,headers:{"content-type":t,"cache-control":"public, max-age=3600","access-control-allow-origin":"*"}}),"textResponse"),Wn=n(e=>new Response(JSON.stringify(e,null,2),{status:200,headers:{"content-type":"application/health+json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*"}}),"healthResponse"),zn=n(e=>`User-agent: *
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
`,"buildRobotsTxt"),qn=n(e=>`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${k}</loc>
    <lastmod>${se}</lastmod>
  </url>
  <url>
    <loc>${k}llms.txt</loc>
    <lastmod>${se}</lastmod>
  </url>
  <url>
    <loc>${e}.well-known/mcp/server-card.json</loc>
    <lastmod>${se}</lastmod>
  </url>
</urlset>
`,"buildSitemapXml"),Vn=zn(`${k}sitemap.xml`),Yn=qn(k),pr={linkset:[{anchor:k,"service-desc":[{href:`${k}.well-known/openapi.json`,type:"application/vnd.oai.openapi+json;version=3.1"}],"service-doc":[{href:`${k}llms.txt`,type:"text/plain"}],status:[{href:Ce,type:"application/health+json"}],"service-meta":[{href:`${k}.well-known/mcp/server-card.json`,type:"application/json"},{href:tt,type:"application/json"}]}]},ur={openapi:"3.1.0",info:{title:"Knowgrph API",version:"0.1.0",description:"Agent discovery surface for the Knowgrph Cloudflare deployment."},servers:[{url:I,description:"Knowgrph Cloudflare deployment"}],paths:Ho({appBasePath:P,appA2aAgentCardPath:Lt,healthPath:Te})},Ke={resource:k,resource_name:"Knowgrph",authorization_servers:[I],scopes_supported:["knowgrph:read","knowgrph:source-files:read"],bearer_methods_supported:["header"],resource_documentation:`${k}llms.txt`},Dt=`${I}/cdn-cgi/access`,oe={skill:`${I}/auth.md`,register_uri:`${k}agent/auth`,claim_uri:`${k}agent/auth/claim`,revocation_uri:`${k}agent/auth/revoke`,identity_types_supported:["anonymous","identity_assertion"],anonymous:{credential_types_supported:["api_key"]},identity_assertion:{assertion_types_supported:["urn:ietf:params:oauth:token-type:id-jag","verified_email"],credential_types_supported:["access_token","api_key"]},events_supported:["https://schemas.workos.com/events/agent/auth/identity/assertion/revoked"],registration_status:"metadata_published_runtime_user_mediated"},ar={issuer:I,resource:Ke.resource,resource_name:Ke.resource_name,authorization_servers:Ke.authorization_servers,cloudflare_access_issuer:Dt,authorization_endpoint:`${Dt}/login`,token_endpoint:`${Dt}/token`,jwks_uri:`${k}.well-known/http-message-signatures-directory`,response_types_supported:["code"],grant_types_supported:["authorization_code","client_credentials"],token_endpoint_auth_methods_supported:["client_secret_basic","private_key_jwt"],scopes_supported:Ke.scopes_supported,agent_auth:oe},Jn=`# Knowgrph auth.md

Knowgrph publishes agent registration metadata for the read-only agent surface at ${k}. Agents should first fetch ${I}/.well-known/oauth-protected-resource, follow its authorization_servers entry to ${I}/.well-known/oauth-authorization-server, and read the agent_auth block.

## Registration

- Register: ${oe.register_uri}
- Claim: ${oe.claim_uri}
- Revoke: ${oe.revocation_uri}
- Supported identity types: ${oe.identity_types_supported.join(", ")}
- Anonymous credentials: ${oe.anonymous.credential_types_supported.join(", ")}
- Identity assertion types: ${oe.identity_assertion.assertion_types_supported.join(", ")}
- Identity assertion credentials: ${oe.identity_assertion.credential_types_supported.join(", ")}
- Revocation events: ${oe.events_supported.join(", ")}
- Current runtime policy: user-mediated access through the existing Cloudflare Access/OAuth boundary; no separate MCP-only auth stack.
- Pipeline rule: agents must not bypass MainPanel -> FloatingPanel Chat -> KGC -> Canvas for user-mediated graph work; published HTTP MCP tools remain read-only until mutation auth and conflict semantics are implemented.`,dr={name:"Knowgrph Agent",description:"Agent-readable discovery, published-document retrieval, and WebMCP-ready metadata surface for Knowgrph.",version:"0.1.0",provider:{organization:"airvio / joohwee",url:k},url:`${k}mcp`,preferredTransport:"JSONRPC",supportedInterfaces:[{url:`${k}mcp`,protocolBinding:"JSONRPC",transportProtocol:"JSONRPC",description:"Primary machine interface for read-only discovery and source-file document access."},{url:$t,protocolBinding:"HTTP+JSON/REST",transportProtocol:"HTTP+JSON/REST",description:"Published source-files index and storage-backed document read surface."}],capabilities:{streaming:!1,pushNotifications:!1,stateTransitionHistory:!1,extendedAgentCard:!1},defaultInputModes:["text/plain","text/markdown","application/json"],defaultOutputModes:["text/plain","text/markdown","application/json"],skills:Ko(nt)},ie={serverInfo:{name:"knowgrph",version:"0.1.0"},transport:{type:"http",url:`${k}mcp`},capabilities:{tools:nt.map(e=>({name:e.name,title:e.title,description:e.description,inputSchema:e.inputSchema,outputSchema:e.outputSchema,annotations:e.annotations,_meta:e._meta})),resources:{listChanged:!1},...Ct()},links:{apiCatalog:`${k}.well-known/api-catalog`,skills:`${k}.well-known/agent-skills/index.json`,status:Ce,agentCard:tt}},Xn=Xe({appUrl:k,updatedAt:se}),jt=nt.map(e=>({name:e.webName,title:e.title,description:e.description,inputSchema:e.inputSchema,annotations:e.annotations})),je=n(e=>rt(nt.find(t=>t.name===e)?.webName),"findWebMcpToolName"),Zn=je(p.listSourceFiles),Qn=je(p.readSourceFile),ea=je(p.readSharedDocument),ta=je(p.inspectSharedDocumentStructure),oa=je(p.inspectAgentSurface),ra=`(() => {
  const root = globalThis;
  const siteOrigin = ${JSON.stringify(I)};
  const appBasePath = ${JSON.stringify(P)};
  const defaultWorkspaceId = ${JSON.stringify(Le)};
  const toolDefinitions = ${JSON.stringify(jt)};
  const toolNames = ${JSON.stringify(jt.map(e=>e.name))};
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
  const createPublishedDocIdentityResolver = ${Vo};
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
      listSourceFiles: ${JSON.stringify(Zn)},
      readSourceFile: ${JSON.stringify(Qn)},
      readSharedDocument: ${JSON.stringify(ea)},
      inspectSharedDocumentStructure: ${JSON.stringify(ta)},
      inspectAgentSurface: ${JSON.stringify(oa)},
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
})();`,na=n(async e=>{if(!(e.headers.get("content-type")||"").toLowerCase().includes("text/html"))return e;let o=await e.text();if(jt.every(i=>o.includes(i.name)))return new Response(o,e);let r=`<script>${ra}<\/script>`,a=o.includes("</head>")?o.replace("</head>",`${r}</head>`):`${o}${r}`,s=new Response(a,e);return s.headers.delete("content-length"),s},"injectWebMcpScript"),aa={listSourceFiles:p.listSourceFiles,readSourceFile:p.readSourceFile,readSharedDocument:p.readSharedDocument,inspectSharedDocumentStructure:p.inspectSharedDocumentStructure,inspectAgentSurface:p.inspectAgentSurface},sa=n(async e=>{let t=new TextEncoder().encode(e),o=await crypto.subtle.digest("SHA-256",t);return[...new Uint8Array(o)].map(r=>r.toString(16).padStart(2,"0")).join("")},"sha256Hex"),mr=Do(),ia=Object.fromEntries(Ne.map(e=>[e.name,sa(mr[e.name]||"")])),sr=new Map(Ne.map(e=>[`${P}${e.path}`.replace(/\/+$/,""),mr[e.name]||""]));var hr=n(async()=>jo({appUrl:k,updatedAt:se,sha256ByName:ia}),"agentSkillsIndex"),ca={keys:[{kty:"OKP",crv:"Ed25519",kid:"knowgrph-agent-ready-2026-05-21",use:"sig",alg:"EdDSA",x:"11qYAYdkVKxA4G0wV47IxPtYfFVH_H7zmC2Di2PcvLU"}]},la={protocolVersion:"2025-06-18",capabilities:{tools:{},resources:{},...Ct()},serverInfo:ie.serverInfo},gr=ie.capabilities.tools,pa=[Xn],fr=n(()=>({status:"pass",service:"knowgrph-agent-ready-pages",homepage:k,health:Ce,updatedAt:se,checks:{linkHeaders:!0,markdownNegotiation:!0,httpMcp:!0,webMcp:!0,mcpApps:!0,commerce:{acp:!0,ucp:!0,mpp:!0,x402:!0},defaultWorkspaceId:Le}}),"buildHealthStatusBody"),ua=n(async()=>Io({baseUrl:k,health:fr(),apiCatalog:pr,openApi:ur,mcpServerCard:ie,agentCard:dr,agentSkills:await hr(),commerce:Rt({origin:I})}),"buildAgentSurfaceInspection"),da=Oo({toolNames:aa,defaultWorkspaceId:Le,buildStorageDocPath:cr,fetchSourceFilesIndexResponse:n(()=>fetch(`${et}${Xo()}`,{headers:{accept:"text/markdown"}}),"fetchSourceFilesIndexResponse"),fetchStorageMarkdownResponse:n(e=>fetch(`${et}${e}`,{headers:{accept:"text/markdown"}}),"fetchStorageMarkdownResponse"),resolveSharedDocumentInput:n((e={})=>Ze({shareToken:e?.shareToken,shareUrl:e?.shareUrl,appBasePath:P,baseUrl:I}),"resolveSharedDocumentInput"),inspectSharedDocumentStructure:Uo,buildAgentSurfaceInspection:ua}),wr=n(e=>{try{let t=new URL(e,I);return Ze({shareUrl:`${t.pathname}${t.search}`,baseUrl:I,appBasePath:P})}catch{return null}},"resolvePublishedDocRequestIdentity"),ma=n(e=>Ze({shareUrl:String(e||""),baseUrl:I,appBasePath:P}),"resolvePublishedDocPathIdentity"),ha=n(async(e,t)=>{let o=new URL(cr(t.canonicalPath,t.workspaceId),et),r=await fetch(o,{method:"GET",headers:{accept:"text/markdown, text/plain;q=0.9, */*;q=0.1"}}),a=new Headers(r.headers),s=String(a.get("vary")||"");return a.set("vary",s?`${s}, Accept`:"Accept"),new Response(String(e.method||"").toUpperCase()==="HEAD"?null:r.body,{status:r.status,statusText:r.statusText,headers:a})},"proxyPublishedDocMarkdownResponse"),ga=n(async e=>{try{let t=await e.json();return t&&typeof t=="object"?t:null}catch{return null}},"readJsonRpcRequest"),ve=n((e,t)=>B({jsonrpc:"2.0",id:e??null,result:t}),"jsonRpcResult"),De=n((e,t,o)=>B({jsonrpc:"2.0",id:e??null,error:{code:t,message:o}}),"jsonRpcError"),fa=n(async(e,t)=>{let o=da[e];if(typeof o!="function")throw new Error(`unknown tool: ${e}`);return o(t)},"executeMcpTool"),wa=n(e=>{if(rt(e)!==J)throw new Error(`unknown resource: ${e}`);return vo({appUrl:k,updatedAt:se,toolNames:gr.map(t=>t.name)})},"readMcpResource"),ya=n(async e=>{let t=String(e.method||"GET").toUpperCase();if(t==="GET"||t==="HEAD")return B({ok:!0,transport:ie.transport,serverInfo:ie.serverInfo,capabilities:ie.capabilities});if(t!=="POST")return lr(405,{ok:!1,error:"unsupported_method"});let o=await ga(e);if(!o)return De(null,-32700,"Parse error");switch(o.method){case"initialize":return ve(o.id,la);case"tools/list":return ve(o.id,{tools:gr});case"resources/list":return ve(o.id,{resources:pa});case"resources/read":{let r=rt(o.params?.uri);if(!r)return De(o.id,-32602,"Resource URI is required");try{return ve(o.id,wa(r))}catch(a){return De(o.id,-32602,a instanceof Error?a.message:String(a))}}case"tools/call":{let r=rt(o.params?.name),a=o.params?.arguments&&typeof o.params.arguments=="object"?o.params.arguments:{};if(!r)return De(o.id,-32602,"Tool name is required");try{let s=await fa(r,a);return ve(o.id,{content:[{type:"text",text:typeof s?.markdown=="string"?s.markdown:JSON.stringify(s,null,2)}],structuredContent:s,isError:!1})}catch(s){return ve(o.id,{content:[{type:"text",text:s instanceof Error?s.message:String(s)}],isError:!0})}}default:return De(o.id,-32601,"Method not found")}},"handleMcpTransport");var Ht=n(e=>e===P||e===`${P}/`,"handlesKnowgrphRoot"),Sa=n(e=>Ht(e)||!!ma(e),"handlesKnowgrphHtmlSurface"),ba=n(e=>{let t=new URL(e.url),o=t.pathname.replace(/\/+$/,"")||"/",r=wr(e.url);return o===Te?"health":o===`${P}/mcp`?"mcp":o===`${P}/robots.txt`?"robots":o===`${P}/sitemap.xml`?"sitemap":o===`${P}/auth.md`||o==="/auth.md"?"auth-md":o.startsWith(`${P}/.well-known/`)?"well-known":r?$e(e)?"shared-doc-markdown":"shared-doc-html":Ht(t.pathname)?$e(e)?"homepage-markdown":"homepage-html":"app-surface"},"resolveAgentReadyRouteTag"),Kt=n((e,t)=>nr(t,{owner:er,tag:ba(e)}),"withKnowgrphRouteHeaders"),ir=n(async e=>{let t=new URL(e.url),o=t.pathname.replace(/\/+$/,"")||"/",r=wr(e.url);if(r&&$e(e))return ha(e,r);if(Ht(t.pathname)&&$e(e))return rr(or);switch(o){case Te:return Wn(fr());case`${P}/mcp`:return ya(e);case`${P}/robots.txt`:return ot(Vn,"text/plain; charset=utf-8");case`${P}/sitemap.xml`:return ot(Yn,"application/xml; charset=utf-8");case`${P}/auth.md`:case"/auth.md":return ot(Jn,"text/markdown; charset=utf-8");case`${P}/.well-known/api-catalog`:return B(pr,"application/linkset+json; charset=utf-8");case`${P}/.well-known/openapi.json`:return B(ur,"application/vnd.oai.openapi+json; charset=utf-8");case Lt:return B(dr);case`${P}/.well-known/oauth-protected-resource`:return B(Ke);case`${P}/.well-known/oauth-authorization-server`:return B(ar);case`${P}/.well-known/openid-configuration`:return B(ar);case`${P}/.well-known/mcp/server-card.json`:return B(ie);case`${P}/.well-known/mcp.json`:return B(ie);case`${P}/.well-known/agent-skills/index.json`:return B(await hr());case`${P}/.well-known/http-message-signatures-directory`:return B(ca);default:return sr.has(o)?ot(sr.get(o),"text/markdown; charset=utf-8"):null}},"routeResponse");async function ce(e){let{env:t,request:o}=e,r=String(o.method||"GET").toUpperCase(),a=new URL(o.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(r==="POST"&&a.pathname.replace(/\/+$/,"")===`${P}/mcp`)return Kt(o,await ir(o));if(r!=="GET"&&r!=="HEAD")return lr(405,{ok:!1,error:"unsupported_method"});let s=await ir(o);if(s){let u=Kt(o,s);return r==="HEAD"?new Response(null,u):u}let i=await e.next();if(!Sa(a.pathname))return i;let c=r==="HEAD"?i:await na(i),l=new Response(r==="HEAD"?null:c.body,c);return l.headers.set("link",tr),Kt(o,l)}n(ce,"onRequest");async function yr(e){return ce(e)}n(yr,"onRequest");async function Sr(e){return ce(e)}n(Sr,"onRequest");async function br(e){return ce(e)}n(br,"onRequest");var _a=Object.freeze(new Set(["","80","443"])),xa=Object.freeze([".local",".localhost",".internal"]),ka=Object.freeze(new Set(["localhost"]));function fe(e){return String(e||"").trim().toLowerCase()}n(fe,"normalizeHostname");function Pa(e){let t=fe(e);if(!/^\d{1,3}(\.\d{1,3}){3}$/.test(t))return!1;let o=t.split(".").map(r=>Number(r));return o.length!==4?!1:o.every(r=>Number.isInteger(r)&&r>=0&&r<=255)}n(Pa,"isIpv4Literal");function _r(e){let[t,o,r,a]=e.split(".").map(s=>Number(s));return(t<<24|o<<16|r<<8|a)>>>0}n(_r,"ipv4ToInt");function Ra(e,t,o){if(!Number.isInteger(o)||o<0||o>32)return!1;if(o===0)return!0;let r=4294967295<<32-o>>>0;return(e&r)===(t&r)}n(Ra,"inIpv4Cidr");function Aa(e){let t=fe(e);return!t||!t.includes(":")?!1:/^[0-9a-f:]+$/i.test(t)}n(Aa,"isIpv6Literal");function Ea(e){let t=fe(e);return!!(!t||t==="::1"||t==="0:0:0:0:0:0:0:1"||t.startsWith("fc")||t.startsWith("fd")||/^fe[89ab]/i.test(t))}n(Ea,"isBlockedIpv6");function Ca(e,{blockedExact:t,blockedSuffixes:o}={}){let r=fe(e);if(!r)return!0;let a=t||ka;if(a instanceof Set&&a.has(r))return!0;let s=o||xa;if(Array.isArray(s))for(let i of s){let c=fe(i);if(c&&(r===c||r.endsWith(c)))return!0}return!1}n(Ca,"isBlockedHostname");function Ta(e){let t=fe(e);if(!t)return!0;if(Pa(t)){let o=_r(t),r=[{base:"0.0.0.0",bits:8},{base:"10.0.0.0",bits:8},{base:"127.0.0.0",bits:8},{base:"169.254.0.0",bits:16},{base:"172.16.0.0",bits:12},{base:"192.168.0.0",bits:16},{base:"100.64.0.0",bits:10}];for(let a of r){let s=_r(a.base);if(Ra(o,s,a.bits))return!0}return!1}return Aa(t)?Ea(t):!1}n(Ta,"isBlockedIpLiteral");function at(e,{allowedPorts:t}={}){let o=String(e||"").trim();if(!o)throw new Error("invalid_url");let r;try{r=new URL(o)}catch{throw new Error("invalid_url")}if(r.protocol!=="http:"&&r.protocol!=="https:")throw new Error("invalid_url");if(r.username||r.password)throw new Error("invalid_url");let a=t||_a,s=String(r.port||"");if(a instanceof Set&&!a.has(s))throw new Error("port_not_allowed");let i=fe(r.hostname);if(!i)throw new Error("invalid_url");if(Ca(i))throw new Error("blocked_host");if(Ta(i))throw new Error("blocked_host");return r}n(at,"parseAndValidateExternalUrl");function st(e){return String(e.headers.get("sec-fetch-site")||"").trim().toLowerCase()==="cross-site"}n(st,"shouldRejectCrossSiteFetch");var va={"content-type":"application/json; charset=utf-8","cache-control":"public, max-age=600"};function we(e,t={}){return new Response(JSON.stringify(e),{...t,headers:{...va,...t.headers||{}}})}n(we,"json");function it(...e){for(let t of e){if(!t)continue;let o=String(t).trim();if(o)return o}return null}n(it,"pickFirst");function Ia(e){let t=e.slice(0,8e4),o=t.match(/<title[^>]*>([^<]*)<\/title>/i),r=t.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i),a=t.match(/<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i),s=t.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i),i=t.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i),c=t.match(/<meta[^>]+property=["']og:site_name["'][^>]*content=["']([^"']+)["'][^>]*>/i);return{title:it(r?.[1],o?.[1]),description:it(a?.[1],s?.[1]),image:it(i?.[1]),siteName:it(c?.[1])}}n(Ia,"extractMeta");async function xr(e){let t=e.request.url,o=new URL(t);if(o.searchParams.get("ping")==="1")return we({ok:!0,ping:!0});let r=o.searchParams.get("url")||"";if(st(e.request))return we({ok:!1,error:"forbidden"},{status:403,headers:{"cache-control":"no-store"}});let a;try{a=at(r)}catch{return we({ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}try{let s=await fetch(a.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkPreview/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),i=s.headers.get("content-type")||"";if(!s.ok)return we({ok:!1,error:"fetch_failed",status:s.status,url:a.toString()},{status:200,headers:{"cache-control":"no-store"}});if(!i.includes("text/html"))return we({ok:!0,url:a.toString(),domain:a.host,contentType:i,title:null,description:null,image:null,siteName:null});let c=await s.text(),l=Ia(c);return we({ok:!0,url:a.toString(),domain:a.host,contentType:i,...l})}catch(s){return we({ok:!1,error:"exception",message:s?.message||String(s),url:a.toString()},{status:200,headers:{"cache-control":"no-store"}})}}n(xr,"onRequestGet");var kr=35e4;function Oa(e){let t=e;return t=t.replace(/<script\b[\s\S]*?<\/script>/gi,""),t=t.replace(/<iframe\b[\s\S]*?<\/iframe>/gi,""),t=t.replace(/<object\b[\s\S]*?<\/object>/gi,""),t=t.replace(/<embed\b[\s\S]*?>/gi,""),t=t.replace(/<noscript\b[\s\S]*?<\/noscript>/gi,""),t=t.replace(/\son[a-z]+\s*=\s*"[^"]*"/gi,""),t=t.replace(/\son[a-z]+\s*=\s*'[^']*'/gi,""),t}n(Oa,"stripActiveContent");function Ua({url:e,title:t,innerHtml:o}){let r=t?String(t).slice(0,140):"Preview",a=String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");return`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="referrer" content="no-referrer" />
    <title>${r}</title>
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
      <div class="t">${r}</div>
      <a href="${a}" target="_blank" rel="noopener">Open</a>
    </div>
    <div class="content">${o}</div>
  </body>
</html>`}n(Ua,"buildWrapper");async function Pr(e){let o=new URL(e.request.url).searchParams.get("url")||"";if(st(e.request))return new Response("Forbidden",{status:403,headers:{"cache-control":"no-store"}});let r;try{r=at(o)}catch(a){let s=a instanceof Error?a.message:"invalid_url";return new Response(s,{status:400,headers:{"cache-control":"no-store"}})}try{let a=await fetch(r.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; HackaMapLinkProxy/1.0)",accept:"text/html,application/xhtml+xml"},redirect:"follow",cf:{cacheTtl:600,cacheEverything:!0}}),s=a.headers.get("content-type")||"";if(!a.ok)return new Response(`Fetch failed (${a.status})`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}});if(!s.includes("text/html"))return new Response(`Unsupported content-type: ${s}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public, max-age=600"}});let i=await a.text();i.length>kr&&(i=i.slice(0,kr));let l=i.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()||r.host;i=Oa(i),/<base\s/i.test(i)||(i=i.replace(/<head([^>]*)>/i,`<head$1><base href="${r.origin}/">`));let h=Ua({url:r.toString(),title:l,innerHtml:i});return new Response(h,{status:200,headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600","content-security-policy":"default-src 'none'; img-src https: data:; style-src 'unsafe-inline' https:; font-src https: data:; frame-ancestors 'self';"}})}catch(a){return new Response(`Exception: ${a?.message||String(a)}`,{status:200,headers:{"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}})}}n(Pr,"onRequestGet");var Bt="api.openai.com",ct="api.miromind.ai",lt="apihub.agnes-ai.com",pt="ark.ap-southeast.bytepluses.com",Ft="ark.eu-west.bytepluses.com",Ar=new Set(["localhost","127.0.0.1","0.0.0.0"]),Q=n(e=>String(e||"").trim().toLowerCase(),"normalizeHost"),X=n((e,t)=>String(e.get(t)||"").trim(),"readHeader"),Er=n(e=>Ar.has(Q(e)),"isLocalHost"),Rr=n(e=>{let t=String(e||"").trim();if(!t)return new Set;let o=new Set;return t.split(",").map(r=>Q(r)).filter(Boolean).forEach(r=>o.add(r)),o},"parseCsvSet"),Cr=n((e,{includeOpenAi:t=!1,includeMiroMind:o=!1,includeAgnes:r=!1,includeBytePlus:a=!1}={})=>{let s=Rr(e.KNOWGRPH_INTEGRATION_ALLOWED_HOSTS),i=Rr(e.KNOWGRPH_CHAT_PROXY_ALLOWED_HOSTS),c=s.size?s:i,l=c.size?c:new Set([...Ar]);return t&&l.add(Bt),o&&l.add(ct),r&&l.add(lt),a&&(l.add(pt),l.add(Ft)),l},"parseAllowedHosts"),$=n(e=>{let t=X(e.headers,"origin");if(!t)return{};let o="";try{o=Q(new URL(t).host)}catch{return{}}let r=Q(new URL(e.url).host);return o===r||o.startsWith("localhost:")||o.startsWith("127.0.0.1:")?{"access-control-allow-origin":t,vary:"Origin"}:{}},"corsHeaders"),q=n((e,t,o)=>new Response(JSON.stringify(t),{status:o,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...$(e)}}),"jsonResponse");var ut={"content-type":"application/json; charset=utf-8","cache-control":"no-store"};function He(e,t,o=200){return new Response(JSON.stringify(t),{status:o,headers:{...ut,...$(e)}})}n(He,"jsonResponse");async function Ma(e){let t=new URL("/knowgrph/imports/hackamap/hackamap-graph.json",e.url),o=await fetch(t.toString(),{redirect:"follow"});return o.ok?await o.json():null}n(Ma,"fetchHackamapGraphJson");async function ye(e,t){let o=new URL(t,e.url),r=await fetch(o.toString(),{redirect:"follow"});return r.ok?await r.json():null}n(ye,"fetchHackamapJson");async function Na(e){let t=await ye(e,"/knowgrph/imports/hackamap/hackamap_api_graph.json");return Or(t)?t:null}n(Na,"fetchHackamapApiGraphJson");async function La(e){let t=await ye(e,"/knowgrph/imports/hackamap/hackamap_pipeline.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n(La,"fetchHackamapPipelineJson");async function vr(e){let t=await ye(e,"/knowgrph/imports/hackamap/hackamap_query_presets.json");return Array.isArray(t)?t.filter(Boolean):[]}n(vr,"fetchHackamapQueryPresetsJson");async function Ir(e){let t=await ye(e,"/knowgrph/imports/hackamap/query-outputs/query-runs.manifest.json");return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}n(Ir,"fetchHackamapQueryRunsManifestJson");function Or(e){return!e||typeof e!="object"||Array.isArray(e)?!1:Array.isArray(e.nodes)&&Array.isArray(e.edges)}n(Or,"isApiGraphPayload");function Ur(e,t){let o=String(e&&e.output&&e.output.per_table_prefix||e?.id||t?.preset||"").trim(),r=String(t?.output_suffix||"").trim();return r?`${o}-${r}`:o}n(Ur,"buildHackamapTablePrefix");function Gt(e,t){if(!Array.isArray(e))return[];let o=[];for(let r of e){if(!r||typeof r!="object"||Array.isArray(r))continue;let a=String(r[t]||"").trim();a&&o.push(a)}return o}n(Gt,"collectRowIds");async function $a(e,t){let o=await ye(e,t);return Array.isArray(o)?o.length:0}n($a,"countHackamapQueryRows");async function Da(e,t,o){let r=Ur(t,o);if(!r)return{};let a=["events","demos","sources","organizer","team","techstack"],s=await Promise.all(a.map(async i=>[i,await $a(e,`/knowgrph/imports/hackamap/query-outputs/${i}.${r}.query.json`)]));return Object.fromEntries(s.filter(([,i])=>i>0))}n(Da,"readHackamapRunTableCounts");function Wt(e){return Array.isArray(e)?e.map(Wt):!e||typeof e!="object"?e:Object.fromEntries(Object.entries(e).sort(([t],[o])=>String(t).localeCompare(String(o))).map(([t,o])=>[t,Wt(o)]))}n(Wt,"sortObjectKeys");function Ka(e){try{return JSON.stringify(Wt(e))}catch{return""}}n(Ka,"stableParamSignature");function ja(e){return typeof e=="string"?{value:e,label:e}:{value:e,label:JSON.stringify(e)}}n(ja,"toBuilderOption");function Ha(e,t){return e.map(o=>{let r=String(o?.id||"").trim();if(!r)return null;let a=o?.params&&typeof o.params=="object"&&!Array.isArray(o.params)?o.params:{},s=t.filter(l=>String(l?.preset||"").trim()===r),i=Array.from(new Set([...Object.keys(a),...s.flatMap(l=>l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?Object.keys(l.params):[])])).sort((l,u)=>String(l).localeCompare(String(u))),c=Object.fromEntries(i.map(l=>{let u=new Set,h=[],d=[a[l],...s.map(_=>_?.params&&typeof _.params=="object"&&!Array.isArray(_.params)?_.params[l]:void 0)];for(let _ of d){if(typeof _>"u")continue;let m=Ka(_);!m||u.has(m)||(u.add(m),h.push(ja(_)))}return[l,h]}));return{id:r,title:String(o?.title||r).trim(),params:a,param_keys:i,published_param_options:c}}).filter(Boolean)}n(Ha,"buildHackamapPresetRuntimeEntries");async function Ba(e){let[t,o,r]=await Promise.all([La(e),vr(e),Ir(e)]),a=t&&typeof t=="object"?t.runtime||{}:{},s=String(a?.query_selection?.default_run_id||"").trim()||"enhanced",i=Array.isArray(r?.runs)?r.runs:[],c=(await Promise.all(i.map(async l=>{let u=String(l?.id||"").trim(),h=String(l?.preset||"").trim();if(!u)return null;let d=o.find(m=>String(m?.id||"").trim()===h),_=await Da(e,d,l);return{id:u,preset:h,title:String(l?.title||l?.id||"").trim(),params:l?.params&&typeof l.params=="object"&&!Array.isArray(l.params)?l.params:{},output_suffix:String(l?.output_suffix||"").trim(),is_default:u===s,table_counts:_}}))).filter(l=>l?.id);return{ok:!0,runtime:{...a&&typeof a=="object"?a:{},presets:Ha(o,c),runs:c}}}n(Ba,"buildHackamapRuntimeMeta");async function Fa(e,t){let o=String(t||"").trim();if(!o)return null;let[r,a]=await Promise.all([vr(e),Ir(e)]),i=(Array.isArray(a?.runs)?a.runs:[]).find(y=>String(y?.id||"").trim()===o);if(!i)return null;let c=r.find(y=>String(y?.id||"").trim()===String(i?.preset||"").trim()),l=Ur(c,i);if(!l)return null;let[u,h]=await Promise.all([ye(e,`/knowgrph/imports/hackamap/query-outputs/events.${l}.query.json`),ye(e,`/knowgrph/imports/hackamap/query-outputs/demos.${l}.query.json`)]),d=new Set(Gt(u,"id")),_=new Set(Gt(h,"id")),m=Gt(h,"event_id");for(let y of m)d.add(y);return{eventIds:d,demoIds:_}}n(Fa,"readHackamapQueryRunSelection");function Tr(e,t,o){if(!o||!Or(e))return e;if(o.eventIds.size===0&&o.demoIds.size===0)return{...e,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_run_filter_skipped:"no-event-demo-rows"}};let r=new Set;o.eventIds.forEach(c=>r.add(`Event:${c}`)),o.demoIds.forEach(c=>r.add(`Demo:${c}`));let a=Array.isArray(e.nodes)?e.nodes.filter(c=>r.has(String(c?.id||"").trim())):[],s=new Set(a.map(c=>String(c?.id||"").trim()).filter(Boolean)),i=Array.isArray(e.edges)?e.edges.filter(c=>s.has(String(c?.source||"").trim())&&s.has(String(c?.target||"").trim())):[];return{...e,nodes:a,edges:i,meta:{...e?.meta&&typeof e.meta=="object"?e.meta:{},selected_run_id:t,selected_event_count:o.eventIds.size,selected_demo_count:o.demoIds.size,total_problems:a.filter(c=>String(c?.type||"").trim()==="problem").length,total_solutions:a.filter(c=>String(c?.type||"").trim()==="solution").length}}}n(Tr,"filterHackamapApiGraphPayloadByRun");function Ga(e){let t=Array.isArray(e?.nodes)?e.nodes:[],o=Array.isArray(e?.links)?e.links:[],r=[],a=new Set;for(let i of t){let c=String(i?.id||"").trim(),l=String(i?.type||"").trim(),u=String(i?.label||"").trim();if(!(!c||!l||!u)){if(l==="Event"){r.push({id:c,type:"problem",label:u,cluster:"Event"}),a.add(c);continue}l==="Demo"&&(r.push({id:c,type:"solution",label:u,cluster:"Demo"}),a.add(c))}}let s=[];for(let i of o){let c=String(i?.source||"").trim(),l=String(i?.target||"").trim(),u=String(i?.type||"").trim();!c||!l||u==="has_demo"&&(!a.has(c)||!a.has(l)||s.push({source:c,target:l,type:"has_demo",strength:.35}))}return{nodes:r,edges:s,meta:{source:"hackamap-graph.json:fallback",total_problems:r.filter(i=>i.type==="problem").length,total_solutions:r.filter(i=>i.type==="solution").length,...e?.content_signature?{content_signature:String(e.content_signature)}:{}}}}n(Ga,"toBipartiteApiPayload");async function Mr(e){let{request:t}=e,o=String(t.method||"GET").toUpperCase(),r=new URL(t.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{...$(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(o!=="GET"&&o!=="HEAD")return He(t,{ok:!1,error:"unsupported_method"},405);if(String(r.searchParams.get("view")||"").trim().toLowerCase()==="meta"){let h=await Ba(t);return o==="HEAD"?new Response(null,{status:200,headers:{...ut,...$(t)}}):He(t,h,200)}let a=String(r.searchParams.get("run")||"").trim(),s=await Fa(t,a),i=await Na(t);if(i){let h=Tr(i,a,s);return o==="HEAD"?new Response(null,{status:200,headers:{...ut,...$(t)}}):He(t,h,200)}let c=await Ma(t);if(!c)return He(t,{ok:!1,error:"missing_hackamap_graph",hint:"/knowgrph/imports/hackamap/{hackamap_api_graph.json,hackamap-graph.json} not found"},404);let l=Ga(c),u=Tr(l,a,s);return o==="HEAD"?new Response(null,{status:200,headers:{...ut,...$(t)}}):He(t,u,200)}n(Mr,"onRequest");var Wa=!0,Nr=600,Lr={"content-type":"application/json; charset=utf-8","cache-control":`public, max-age=${Nr}`};function Se(e,t,o={}){return new Response(JSON.stringify(t),{...o,headers:{...Lr,...o.headers||{},...$(e)}})}n(Se,"jsonResponse");function za(e){try{let t=new URL(String(e));return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}n(za,"isHttpUrl");function Be(e){return String(e||"").trim().toLowerCase()}n(Be,"normalizeHost");function zt(e,{exact:t,suffixes:o}){let r=Be(e);return r?!!(Array.isArray(t)&&t.some(a=>r===Be(a))||Array.isArray(o)&&o.some(a=>r===Be(a)||r.endsWith(`.${Be(a)}`))):!1}n(zt,"isHostMatch");function qa(e){let t=Be(e.hostname),o=e.toString();return zt(t,{suffixes:["linkedin.com"]})?new URL(`https://www.linkedin.com/embeds/oembed.json?url=${encodeURIComponent(o)}`):zt(t,{exact:["twitter.com","x.com"],suffixes:["twitter.com","x.com"]})?new URL(`https://publish.twitter.com/oembed?omit_script=1&url=${encodeURIComponent(o)}`):zt(t,{exact:["reddit.com"],suffixes:["reddit.com"]})?new URL(`https://www.reddit.com/oembed?url=${encodeURIComponent(o)}`):null}n(qa,"buildOembedUpstreamUrl");async function Va({upstreamUrl:e}){return await fetch(e.toString(),{headers:{"user-agent":"Mozilla/5.0 (compatible; OEmbedProxy/1.0)",accept:"application/json,text/json;q=0.9,*/*;q=0.1"},redirect:"follow",cf:{cacheTtl:Nr,cacheEverything:!0}})}n(Va,"fetchJsonUpstream");async function $r(e){let{request:t}=e,o=String(t.method||"GET").toUpperCase(),r=new URL(t.url);if(o==="OPTIONS")return new Response(null,{status:204,headers:{...$(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD"].includes(o))return Se(t,{ok:!1,error:"unsupported_method"},{status:405});if(r.searchParams.get("ping")==="1")return Se(t,{ok:!0,ping:!0});if(Wa)return Se(t,{ok:!1,error:"disabled_by_policy"},{status:200,headers:{"cache-control":"no-store"}});let a=r.searchParams.get("url")||"";if(!za(a))return Se(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}});let s;try{s=new URL(a)}catch{return Se(t,{ok:!1,error:"invalid_url"},{status:400,headers:{"cache-control":"no-store"}})}let i=qa(s);if(!i)return Se(t,{ok:!1,error:"unsupported_provider"},{status:400,headers:{"cache-control":"no-store"}});let c=await Va({upstreamUrl:i}),l=new Headers(c.headers);l.delete("content-length"),l.set("cache-control",c.ok?Lr["cache-control"]:"no-store");for(let[h,d]of Object.entries($(t)))l.set(h,d);if(o==="HEAD")return new Response(null,{status:c.status,headers:l});let u=await c.text();try{JSON.parse(u)}catch{return Se(t,{ok:!1,error:"invalid_upstream_json",status:c.status},{status:502,headers:{"cache-control":"no-store"}})}return l.set("content-type","application/json; charset=utf-8"),new Response(u,{status:c.status,headers:l})}n($r,"onRequest");var Dr="/__chat_proxy",dt="agnes-ai",mt="byteplus-modelark",ht="miromind",Ya=n(e=>{let t=Q(e);return t==="openai"?"openai":t===mt||t==="byteplus"?mt:t===ht||t==="miromind-api"?ht:t===dt||t==="agnes"||t==="agnes-ai-api"?dt:t},"normalizeProviderId"),Ja=n(e=>Q(e)===lt,"isAgnesHost"),Xa=n(e=>{let t=Q(e);return t===pt||t===Ft},"isBytePlusHost"),Za=n(e=>Q(e)===ct,"isMiroMindHost"),Qa=n(({provider:e,requestedUpstream:t,env:o})=>e==="openai"?"https://api.openai.com":e===ht?t||`https://${ct}`:e===dt?t||`https://${lt}`:e===mt?t||String(o.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim()||`https://${pt}`:t||String(o.KNOWGRPH_CHAT_PROXY_UPSTREAM||"").trim(),"pickUpstreamBase");async function Kr(e){let{request:t,env:o}=e,r=String(t.method||"GET").toUpperCase(),a=new URL(t.url);if(r==="OPTIONS")return new Response(null,{status:204,headers:{"access-control-allow-origin":X(t.headers,"origin")||"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(!["GET","HEAD","POST"].includes(r))return q(t,{ok:!1,error:"Unsupported method"},405);let s=Ya(X(t.headers,"x-kg-chat-provider")),i=Qa({provider:s,requestedUpstream:X(t.headers,"x-kg-chat-upstream"),env:o});if(!i)return q(t,{ok:!1,error:"Missing chat proxy upstream configuration"},500);let c;try{c=new URL(i)}catch{return q(t,{ok:!1,error:"Invalid chat proxy upstream configuration"},500)}let l=Cr(o,{includeOpenAi:!0,includeMiroMind:!0,includeAgnes:!0,includeBytePlus:!0}),u=Q(c.hostname);if(!l.has(u))return q(t,{ok:!1,error:"Chat proxy upstream host is not allowed"},403);if(!Er(u)&&c.protocol!=="https:")return q(t,{ok:!1,error:"Chat proxy requires HTTPS for non-local upstream hosts"},403);let h=s==="openai"||u===Bt,d=s===ht||Za(u),_=s===dt||Ja(u),m=s===mt||Xa(u),y=X(t.headers,"x-kg-chat-api-key"),A=String(o.KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY||o.OPENAI_API_KEY||"").trim(),x=String(o.KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY||o.MIROMIND_API_KEY||"").trim(),T=String(o.KNOWGRPH_CHAT_PROXY_AGNES_API_KEY||o.AGNES_API_KEY||"").trim(),E=String(o.KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY||o.BYTEPLUS_API_KEY||"").trim(),U=(y||A).slice(0,512),v=(y||x).slice(0,512),V=(y||T).slice(0,512),K=(y||E).slice(0,512),S=m?K:_?V:d?v:U;if(h&&!U)return q(t,{ok:!1,error:"Missing OpenAI API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_OPENAI_API_KEY or OPENAI_API_KEY)"},401);if(d&&!S)return q(t,{ok:!1,error:"Missing MiroMind API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_MIROMIND_API_KEY or MIROMIND_API_KEY)"},401);if(_&&!S)return q(t,{ok:!1,error:"Missing Agnes API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_AGNES_API_KEY or AGNES_API_KEY)"},401);if(m&&!S)return q(t,{ok:!1,error:"Missing BytePlus API key for chat proxy upstream (set KNOWGRPH_CHAT_PROXY_BYTEPLUS_API_KEY or BYTEPLUS_API_KEY)"},401);if(r==="POST"&&!X(t.headers,"content-type").toLowerCase().includes("application/json"))return q(t,{ok:!1,error:"Chat proxy expects application/json payloads"},415);let b=a.pathname.startsWith(Dr)&&a.pathname.slice(Dr.length)||"/v1/chat/completions",g=b.startsWith("/")?b:`/${b}`,f=new URL(`${g}${a.search||""}`,c),C=new Headers,ee=X(t.headers,"content-type"),ue=X(t.headers,"accept");ee&&C.set("content-type",ee),ue&&C.set("accept",ue),(h||d||_||m)&&C.set("authorization",`Bearer ${S}`);let be=X(t.headers,"x-client-request-id").slice(0,512);be&&C.set("x-client-request-id",be);let _e=new AbortController,xe=Number(o.KNOWGRPH_CHAT_PROXY_TIMEOUT_MS),Ie=Number.isFinite(xe)?Math.max(5e3,Math.min(18e4,Math.floor(xe))):9e4,ke=setTimeout(()=>_e.abort(),Ie);try{let D=await fetch(f.toString(),{method:r,headers:C,body:r==="GET"||r==="HEAD"?void 0:t.body,signal:_e.signal,redirect:"follow"}),G=new Headers(D.headers);G.delete("content-length"),G.delete("www-authenticate"),G.set("cache-control","no-store");let Ge=X(t.headers,"origin");return Ge&&(G.set("access-control-allow-origin",Ge),G.set("vary","Origin")),r==="HEAD"?new Response(null,{status:D.status,statusText:D.statusText,headers:G}):new Response(D.body,{status:D.status,statusText:D.statusText,headers:G})}catch(D){let G=D&&typeof D=="object"&&"message"in D?String(D.message||""):"",Ge=_e.signal.aborted||/aborted|timeout/i.test(G);return q(t,{ok:!1,error:G||"Failed to reach chat upstream"},Ge?504:502)}finally{clearTimeout(ke)}}n(Kr,"onRequest");function es(e){let t=e.map(o=>o==null?"":typeof o=="boolean"?o?"1":"0":typeof o=="number"?Number.isFinite(o)?String(o):"":String(o)).join("|");return`rich-media-preview:${Oe(t)}`}n(es,"buildRichMediaPreviewSemanticKey");var Hr="png";function ft(e){let t=typeof e=="number"?e:Number(String(e??"").trim());if(!Number.isFinite(t))return null;let o=Math.max(0,Math.floor(t));return Number.isFinite(o)?o:null}n(ft,"normalizeRemoteVideoFrameSeconds");function wt(e){let t=String(e||"").trim().toLowerCase();return t==="jpg"||t==="jpeg"?"jpg":"png"}n(wt,"normalizeRemoteVideoFrameFormat");function qt(e){let t=String(e.sourceUrl||"").trim(),o=ft(e.timeSeconds)??0,r=wt(e.format||Hr);return es(["remote-video-frame",t,o,r])}n(qt,"buildRemoteVideoFrameSemanticKey");function Br(e){let t=ft(e.timeSeconds)??0,o=wt(e.format||Hr),r=qt({...e,timeSeconds:t,format:o});return`frame-${r.split(":").pop()||Oe(r)}-t${t}.${o}`}n(Br,"buildRemoteVideoFrameFileName");var gt=n(e=>{let t=String(e||"").trim();return t&&/^[A-Za-z0-9_-]{6,128}$/.test(t)?t:null},"normalizeYouTubeIdLikeValue"),jr=n(e=>{try{let t=new URL(String(e||"").trim()),o=String(t.hostname||"").toLowerCase();if(o==="youtu.be"||o.endsWith(".youtu.be")){let r=t.pathname.replace(/^\/+/,"").split("/")[0]?.trim()||"";return gt(r)}if(o==="youtube.com"||o.endsWith(".youtube.com")||o==="youtube-nocookie.com"||o.endsWith(".youtube-nocookie.com")){let r=String(t.searchParams.get("v")||"").trim();if(r)return gt(r);let a=t.pathname.split("/").filter(Boolean),s=a[0]||"",i=a[1]||"";if((s==="embed"||s==="shorts"||s==="live")&&i)return gt(i);if(s==="watch"){let c=String(t.searchParams.get("v")||"").trim();return gt(c)}}}catch{return null}return null},"readYouTubeIdFromUrl");function ts(e){let t=String(e||"").trim().replace(/^<|>$/g,"").trim();for(;/[),.;:!?]$/.test(t);){let o=t.slice(0,-1).trim();if(!o)break;let r=jr(t),a=jr(o);if(!a||r&&r!==a)break;t=o}return t}n(ts,"stripYouTubeUrlTrailingPunctuation");function Fr(e){let t=n(o=>{let r=String(o||"").trim();if(!r)return null;if(/^\d+$/.test(r))return Number(r);let a=r.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i);if(!a)return null;let s=a[1]?Number(a[1]):0,i=a[2]?Number(a[2]):0,c=a[3]?Number(a[3]):0,l=s*3600+i*60+c;return l>0&&Number.isFinite(l)?l:null},"parseChunk");try{let o=new URL(ts(e)),r=o.searchParams.get("t")||o.searchParams.get("start")||"",a=o.hash&&new URLSearchParams(o.hash.replace(/^#/,"")).get("t")||"";return t(r)??t(a)}catch{return null}}n(Fr,"parseYouTubeStartSeconds");var os="/image/knowgrph/video-frame",rs=4096,ns=720*60,as=/^frame-[a-f0-9]+-t\d+\.(?:png|jpg)$/i,Xt={"access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"accept, content-type"},Jt=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),Vt=n((e,t=200,o="GET")=>new Response(o==="HEAD"?null:JSON.stringify(e),{status:t,headers:{...Xt,"content-type":"application/json; charset=utf-8","cache-control":"no-store"}}),"jsonResponse"),Yt=n((e,t=200,o="GET")=>new Response(o==="HEAD"?null:e,{status:t,headers:{...Xt,"content-type":"text/plain; charset=utf-8","cache-control":"no-store"}}),"textResponse"),ss=n((e,t)=>e===t||e.endsWith(`.${t}`),"hostMatches"),is=n(e=>{let t=Jt(e?.KG_VIDEO_FRAME_ALLOWED_HOSTS);return t?t.split(",").map(o=>Jt(o).toLowerCase()).filter(Boolean):["youtube.com","youtu.be","youtube-nocookie.com","bilibili.com","b23.tv"]},"readAllowedHosts"),cs=n(e=>Jt(e).replace(/^<|>$/g,"").trim(),"unwrapUrlInput"),ls=n((e,t)=>{try{let o=new URL(e);if(o.protocol!=="https:"&&o.protocol!=="http:")return!1;let r=o.hostname.toLowerCase();return is(t).some(a=>ss(r,a))}catch{return!1}},"isAllowedSourceUrl"),ps=n((e,t)=>{let o=new URL(e.url),r=cs(o.searchParams.get("url")||"");if(!r)return{error:"Missing url parameter"};if(r.length>rs)return{error:"Video URL is too long"};if(!ls(r,t))return{error:"Video frame extraction is limited to supported remote video hosts"};let a=ft(o.searchParams.get("time"))??Fr(r);if(a==null)return{error:"Missing time parameter"};let s=Math.min(ns,Math.max(0,a)),i=wt(o.searchParams.get("format")||"png"),c=Br({sourceUrl:r,timeSeconds:s,format:i});if(!as.test(c))return{error:"Invalid frame cache key"};let l=`${os}/${c}`;return{sourceUrl:r,timeSeconds:s,format:i,fileName:c,publicUrl:l,semanticKey:qt({sourceUrl:r,timeSeconds:s,format:i})}},"readFrameRequest"),us=n(async(e,t,o)=>{let r=new URL(t,e.request.url),a=new Request(r.toString(),{method:o});return typeof e.env?.ASSETS?.fetch=="function"?await e.env.ASSETS.fetch(a):await fetch(a)},"fetchStaticAsset"),ds=n(e=>`Frame has not been generated yet. Run the local video-frame extractor and publish ${e.publicUrl}.`,"missingFrameMessage"),ms=n((e,t)=>{let o=new Headers;o.set("content-type",t.format==="jpg"?"image/jpeg":"image/png"),o.set("cache-control","public, max-age=31536000, immutable"),o.set("access-control-allow-origin","*");let r=e.headers.get("content-length");r&&o.set("content-length",r);let a=e.headers.get("etag");return a&&o.set("etag",a),o},"imageResponseHeaders");async function Gr(e){let t=e.request;if(t.method==="OPTIONS")return new Response(null,{status:204,headers:Xt});if(t.method!=="GET"&&t.method!=="HEAD")return Yt("Method not allowed",405,t.method);let o=new URL(t.url).searchParams.get("emit")==="json",r=ps(t,e.env||{});if("error"in r)return o?Vt({ok:!1,error:r.error},400,t.method):Yt(r.error,400,t.method);let a=o&&t.method!=="HEAD"?"GET":o||t.method==="HEAD"?"HEAD":"GET",s=await us(e,r.publicUrl,a);if(!s.ok){let i=ds(r);return o?Vt({ok:!1,error:i,publicUrl:r.publicUrl,semanticKey:r.semanticKey},404,t.method):Yt(i,404,t.method)}if(o){let i=Number(s.headers.get("content-length")||0);return(!Number.isFinite(i)||i<=0)&&t.method!=="HEAD"&&(i=(await s.arrayBuffer()).byteLength),Vt({ok:!0,imageUrl:r.publicUrl,publicUrl:r.publicUrl,semanticKey:r.semanticKey,cached:!0,bytes:Number.isFinite(i)?Math.max(0,Math.floor(i)):0,timeSeconds:r.timeSeconds,format:r.format},200,t.method)}return new Response(t.method==="HEAD"?null:s.body,{status:200,headers:ms(s,r)})}n(Gr,"onRequest");var Wr={"content-type":"application/json; charset=utf-8","cache-control":"no-store","access-control-allow-origin":"*","access-control-allow-methods":"GET, HEAD, POST, OPTIONS","access-control-allow-headers":"content-type"},yt=n((e,t=200,o="GET")=>new Response(o==="HEAD"?null:JSON.stringify(e),{status:t,headers:Wr}),"jsonResponse"),O=n(e=>String(e||"").replace(/\s+/g," ").trim(),"cleanText"),hs=n(e=>{try{let t=new URL(String(e||"").trim());if(/youtu\.be$/i.test(t.hostname))return O(t.pathname.split("/").filter(Boolean)[0]);if(/youtube\.com$/i.test(t.hostname)||/youtube-nocookie\.com$/i.test(t.hostname)){let o=O(t.searchParams.get("v"));if(o)return o;let r=t.pathname.split("/").filter(Boolean),a=r.findIndex(s=>["embed","shorts","live"].includes(s));if(a>=0)return O(r[a+1])}}catch{}return""},"readVideoId"),gs=n((e,t)=>{let o=e.indexOf(t);if(o<0)return null;let r=e.indexOf("{",o);if(r<0)return null;let a=0,s=!1,i=!1;for(let c=r;c<e.length;c+=1){let l=e[c];if(s){i?i=!1:l==="\\"?i=!0:l==='"'&&(s=!1);continue}if(l==='"')s=!0;else if(l==="{")a+=1;else if(l==="}"&&(a-=1,a===0))return e.slice(r,c+1)}return null},"extractJsonAfter"),fs=n(e=>{for(let t of["ytInitialPlayerResponse =","ytInitialPlayerResponse="]){let o=gs(e,t);if(o)try{return JSON.parse(o)}catch{}}return null},"parsePlayerResponse"),ws=n((e,t)=>{let o=O(t||"en").toLowerCase();return e.find(r=>O(r.languageCode).toLowerCase()===o)||e.find(r=>O(r.languageCode).toLowerCase().startsWith(o.split("-")[0]))||e.find(r=>O(r.kind)!=="asr")||e[0]||null},"pickCaptionTrack"),ys=n(e=>{let t=new URL(e);return t.searchParams.set("fmt","json3"),t.toString()},"withJsonCaptionFormat"),Ss=n(e=>(Array.isArray(e?.events)?e.events:[]).map(o=>{let r=Array.isArray(o.segs)?O(o.segs.map(i=>i?.utf8||"").join("")):"",a=Number(o.tStartMs)/1e3,s=Number(o.dDurationMs||0)/1e3;return r&&Number.isFinite(a)?{text:r,start:a,duration:Number.isFinite(s)?s:0}:null}).filter(Boolean),"parseCaptionJson3"),bs=n(e=>String(e||"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'"),"decodeXmlText"),_s=n(e=>{let t=[],o=/<text\b([^>]*)>([\s\S]*?)<\/text>/gi,r=null;for(;r=o.exec(String(e||""));){let a=r[1]||"",s=Number(a.match(/\bstart="([^"]+)"/i)?.[1]),i=Number(a.match(/\bdur="([^"]+)"/i)?.[1]||0),c=O(bs(r[2]||""));c&&Number.isFinite(s)&&t.push({text:c,start:s,duration:Number.isFinite(i)?i:0})}return t},"parseCaptionXml"),xs=n((e,t)=>{let o=String(e||"").trim();if(!o)return[];if(String(t||"").toLowerCase().includes("json")||o.startsWith("{")||o.startsWith("["))try{return Ss(JSON.parse(o))}catch{return[]}return _s(o)},"parseCaptionResponseText"),ks=n(e=>{let t=Math.max(0,Math.floor(Number(e)||0)),o=Math.floor(t/60),r=String(t%60).padStart(2,"0");return`${o}:${r}`},"formatTimestamp"),Ps=n((e,t)=>{let o=new URL(e);return o.searchParams.set("t",`${Math.max(0,Math.floor(Number(t)||0))}s`),o.toString()},"timestampUrl"),Rs=n(({title:e,sourceUrl:t,videoId:o,authorName:r,thumbnailUrl:a,segments:s})=>[`# ${e||`YouTube ${o}`}`,"",`Video ID: ${o}`,r?`Author: ${r}`:"",`Source: [${t}](${t})`,a?`[![${e||o}](${a})](${t})`:"","",s.length>0?"## Transcript":"## Video Source","",...s.length>0?s.map(i=>`[${ks(i.start)}](${Ps(t,i.start)}) ${i.text}`):["Captions were not available from the source at import time.","The source URL, title, author, and thumbnail remain available for downstream storyboard reconstruction."],""].filter(i=>i!=="").join(`
`),"buildMarkdown"),Zt=n(({videoId:e,sourceUrl:t,title:o,authorName:r,thumbnailUrl:a,lang:s,languageCode:i,segments:c,captionStatus:l})=>{let u={type:"rag:YouTubeTranscript",video_id:e,source_url:t,title:o,author_name:r,thumbnail_url:a,language_code:O(i)||s,caption_status:l,segment_count:c.length,duration:c.reduce((h,d)=>Math.max(h,d.start+d.duration),0),segments:c};return{ok:!0,name:`youtube-${e.toLowerCase()}.md`,markdown:Rs({title:o,sourceUrl:t,videoId:e,authorName:r,thumbnailUrl:a,segments:c}),transcript:u}},"buildPayload");async function As({sourceUrl:e,lang:t="en",fetchImpl:o=fetch}){let r=hs(e);if(!r)return{ok:!1,error:"unsupported_youtube_url"};let a=`https://www.youtube.com/watch?v=${encodeURIComponent(r)}`,[s,i]=await Promise.all([o(`https://www.youtube.com/oembed?url=${encodeURIComponent(a)}&format=json`,{headers:{accept:"application/json"}}).catch(()=>null),o(a,{headers:{accept:"text/html,application/xhtml+xml","accept-language":"en-US,en;q=0.9","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}})]),c=s?.ok?await s.json().catch(()=>({})):{},l=i.ok?fs(await i.text()):null,u=O(c.title)||O(l?.videoDetails?.title)||`YouTube ${r}`,h=O(c.author_name)||O(l?.videoDetails?.author),d=O(c.thumbnail_url)||`https://i.ytimg.com/vi/${r}/hqdefault.jpg`;if(!i.ok)return Zt({videoId:r,sourceUrl:a,title:u,authorName:h,thumbnailUrl:d,lang:t,languageCode:t,segments:[],captionStatus:`watch-fetch-${i.status}`});let _=l?.captions?.playerCaptionsTracklistRenderer?.captionTracks||[],m=ws(Array.isArray(_)?_:[],t);if(!m?.baseUrl)return Zt({videoId:r,sourceUrl:a,title:u,authorName:h,thumbnailUrl:d,lang:t,languageCode:t,segments:[],captionStatus:"captions-unavailable"});let y=await o(ys(m.baseUrl),{headers:{accept:"application/json,text/xml,text/plain,*/*","user-agent":"Mozilla/5.0 Knowgrph YouTube transcript importer"}}).catch(()=>null),A=y?await y.text().catch(()=>""):"",x=y?.ok?xs(A,y.headers.get("content-type")):[],T=x.length>0?"available":y?.ok?"captions-empty":`captions-fetch-${y?.status||"failed"}`;return Zt({videoId:r,sourceUrl:a,title:u,authorName:h,thumbnailUrl:d,lang:t,languageCode:m.languageCode,segments:x,captionStatus:T})}n(As,"buildYouTubeTranscriptPayload");async function zr(e){let t=e.request,o=String(t.method||"GET").toUpperCase();if(o==="OPTIONS")return new Response(null,{status:204,headers:Wr});if(o!=="GET"&&o!=="HEAD"&&o!=="POST")return yt({ok:!1,error:"unsupported_method"},405,o);let r=new URL(t.url),a=O(r.searchParams.get("url")),s=O(r.searchParams.get("lang"))||"en";if(!a)return yt({ok:!1,error:"missing_url"},400,o);try{let i=await As({sourceUrl:a,lang:s});return yt(i,i.ok?200:502,o)}catch(i){let c=i&&typeof i=="object"&&"message"in i?O(i.message):"";return yt({ok:!1,error:c||"youtube_conversion_failed"},502,o)}}n(zr,"onRequest");async function qr(e){let{request:t}=e,o=String(t.method||"GET").toUpperCase();if(o==="OPTIONS")return new Response(null,{status:204,headers:{...$(t),"access-control-allow-methods":"GET, HEAD, OPTIONS","access-control-allow-headers":"*","access-control-max-age":"86400"}});if(o!=="GET"&&o!=="HEAD")return new Response(JSON.stringify({ok:!1,error:"unsupported_method"}),{status:405,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...$(t)}});let r={ok:!0,service:"singabldr-pages",ts:new Date().toISOString()},a={"content-type":"application/json; charset=utf-8","cache-control":"no-store",...$(t)};return o==="HEAD"?new Response(null,{status:200,headers:a}):new Response(JSON.stringify(r),{status:200,headers:a})}n(qr,"onRequest");var le="https://airvio.co";var F="/knowgrph",re=`${le}${F}/`,Es=`${le}/`;var Yr=`${F}/health`,Vr=`${le}${Yr}`,Jr="/.well-known/agent-card.json",jl=`${F}/.well-known/agent-card.json`,Cs=`${le}${Jr}`,Ts=`${le}/api/storage/source-files`,vs=`${le}/api/storage/doc-default/{canonicalPath}`,Is=`${le}/api/storage/doc/{workspaceId}/{canonicalPath}`;var Qt="root-agent-ready-pages",Xr=['</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',`<${F}/.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"`,`<${F}/llms.txt>; rel="service-doc"; type="text/plain"`,'</auth.md>; rel="service-doc"; type="text/markdown"',`<${Yr}>; rel="status"; type="application/health+json"`,`<${F}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,`<${Jr}>; rel="describedby"; type="application/json"`].join(", "),Zr=`# Knowgrph

Knowgrph is an Agent-actionable chat-to-canvas knowledge graph workspace served at ${re}.

## Discovery

- Crawl policy: ${re}robots.txt
- Sitemap: ${re}sitemap.xml
- API catalog: ${re}.well-known/api-catalog
- Auth.md registration instructions: ${Es}auth.md
- Health: ${Vr}
- MCP server card: ${re}.well-known/mcp/server-card.json
- A2A Agent Card: ${Cs}
- Agent skills: ${re}.well-known/agent-skills/index.json
- LLM reference: ${re}llms.txt

## APIs

- Agent-ready status: ${Vr}
- HTTP MCP: ${re}mcp
- Storage API: ${le}/api/storage/
- Source Files index: ${Ts}
- Default Source File documents: ${vs}
- Workspace Source File documents: ${Is}

## WebMCP

- Browser app runtime installs WebMCP on page load via \`navigator.modelContext\`.
- Shared deployed WebMCP/HTTP MCP surface exposes five read-only tools for published Source Files, shared documents, and agent-surface inspection.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
- Deployed HTML fallback injects the shared five-tool WebMCP surface on \`${re}\` HTML routes.

## MCP Apps

- HTTP MCP advertises \`io.modelcontextprotocol/ui\` with \`text/html;profile=mcp-app\`.
- \`inspect_agent_surface\` links to the shared \`ui://knowgrph/agent-ready\` resource through \`_meta.ui.resourceUri\`.
- \`resources/list\` and \`resources/read\` serve the inline, sandbox-friendly Knowgrph Agent Ready app resource while preserving text fallback and structured tool output.
- The View initiates the MCP Apps \`ui/initialize\` handshake, sends \`ui/notifications/initialized\` and \`ui/notifications/size-changed\`, handles host context/tool input/result/cancel notifications, and calls the originating server through \`tools/call\`.
- \`inspect_agent_surface.structuredContent.mcpAppsServerReadiness\` exposes the native server-readiness model used by the View: app tool/resource binding, output-schema and structured-content readiness, sandbox metadata, HTTP JSON-RPC transport, and local stdio transport.
`,Qr=n(e=>new Response(e,{status:200,headers:{"content-type":"text/markdown; charset=utf-8","cache-control":"public, max-age=3600","access-control-allow-origin":"*",vary:"Accept","x-markdown-tokens":String(Math.ceil(String(e||"").length/4))}}),"markdownResponse"),en=n(e=>(e.headers.get("accept")||"").toLowerCase().split(",").some(o=>o.trim().startsWith("text/markdown")),"wantsMarkdown"),eo=n((e,t)=>{let o=new Response(e.body,e),r=String(t?.owner||"").trim(),a=String(t?.tag||"").trim();return r&&o.headers.set("x-knowgrph-route-owner",r),a&&o.headers.set("x-knowgrph-route-tag",a),o},"withAgentReadyRouteHeaders");var St="Agent-actionable chat-to-canvas knowledge graph workspace",Os=new RegExp(["Agent-readable","knowledge","graph","workspace"].join("\\s+")+"\\.?","g"),Us=n(e=>{let t=/<script>([\s\S]*?)<\/script>/g;for(let o of String(e||"").matchAll(t)){let r=o[1]||"";if(r.includes("createWebMcpLifecycleController")&&r.includes("toolDefinitions"))return r}return""},"extractWebMcpScript"),tn=n(()=>({"content-type":"text/html; charset=utf-8","cache-control":"no-store, no-cache, no-transform, must-revalidate, max-age=0","access-control-allow-origin":"*",link:Xr}),"rootHtmlHeaders"),to=n((e,t)=>String(e||"").includes("</head>")?String(e||"").replace("</head>",`${t}</head>`):`${String(e||"")}${t}`,"injectIntoHead"),bt=n(()=>`<main id="knowgrph-root-fallback" data-knowgrph-root-fallback="visible" aria-label="Knowgrph root alias" style="position:fixed;inset:0;z-index:2147483000;display:grid;place-content:center;gap:1rem;padding:2rem;box-sizing:border-box;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#101820;color:#f4f7fb;text-align:center">
      <h1 style="margin:0;font-size:clamp(2.25rem,8vw,5.5rem);line-height:1;font-weight:760">Knowgrph</h1>
      <p style="margin:0 auto;max-width:42rem;font-size:clamp(1rem,2.2vw,1.35rem);line-height:1.55;color:#d6e1ea">${St}</p>
      <p style="margin:0"><a href="${F}/" style="display:inline-flex;align-items:center;justify-content:center;min-height:2.75rem;padding:0 1.05rem;border:1px solid #7db3ff;border-radius:8px;color:#f8fbff;text-decoration:none;background:#1f5fa8">Open Knowgrph</a></p>
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
    <\/script>`,"rootVisibleFallbackMarkup"),Ms=n(e=>{let t=String(e||"");if(/<main\s+id=["']knowgrph-root-fallback["']/i.test(t))return t;let o=/<div\s+id=["']root["']\s*><\/div>/i;return o.test(t)?t.replace(o,r=>`${r}
    ${bt()}`):t.includes("</body>")?t.replace("</body>",`    ${bt()}
  </body>`):`${t}
${bt()}`},"injectRootVisibleFallback"),Ns=n(e=>{let t=String(e||"").replace(Os,St);return/<meta\s+name=["']description["'][^>]*>/i.test(t)?t=t.replace(/<meta\s+name=["']description["'][^>]*>/i,`<meta name="description" content="${St}" />`):t=to(t,`    <meta name="description" content="${St}" />
`),/<link\s+rel=["']canonical["'][^>]*>/i.test(t)||(t=to(t,`    <link rel="canonical" href="${F}/" />
`)),/<meta\s+name=["']x-knowgrph-root-alias["'][^>]*>/i.test(t)||(t=to(t,`    <meta name="x-knowgrph-root-alias" content="${F}/" />
`)),Ms(t)},"rewriteRootAppHtml"),Ls=n(async e=>{let t=new URL(`${F}/?agentReadyRootWebMcp=1`,e.url),o=await fetch(t,{headers:{accept:"text/html"}});return o.ok?Us(await o.text()):""},"loadWebMcpScript"),$s=n(async e=>{let t=new URL(`${F}/?agentReadyRootAlias=1`,e.url),o=await fetch(t,{headers:{accept:"text/html"}});if(!o.ok)return null;let r=Ns(await o.text());return!r.includes('<div id="root"></div>')||!r.includes(`${F}/assets/`)?null:new Response(r,{status:200,headers:tn()})},"loadKnowgrphAppShell"),Ds=n((e="")=>new Response(`<!DOCTYPE html>
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
    ${bt()}
  </body>
</html>`,{status:200,headers:tn()}),"rootHtmlResponse");async function on(e){let{request:t}=e,o=String(t.method||"GET").toUpperCase();if(o!=="GET"&&o!=="HEAD")return e.next();if(en(t)){let s=eo(Qr(Zr),{owner:Qt,tag:"root-homepage-markdown"});return o==="HEAD"?new Response(null,s):s}let r=o==="HEAD"?null:await $s(t),a=eo(r||Ds(o==="HEAD"?"":await Ls(t)),{owner:Qt,tag:"root-homepage-html"});return o==="HEAD"?new Response(null,a):a}n(on,"onRequest");var w=[{routePath:"/api/llm/chat/completions",mountPath:"/api/llm/chat",method:"",middlewares:[],modules:[no]},{routePath:"/api/payments/commerce/x402",mountPath:"/api/payments/commerce",method:"",middlewares:[],modules:[ko]},{routePath:"/api/llm/models",mountPath:"/api/llm",method:"",middlewares:[],modules:[Po]},{routePath:"/api/llm/responses",mountPath:"/api/llm",method:"",middlewares:[],modules:[Ro]},{routePath:"/knowgrph/doc-default/:path*",mountPath:"/knowgrph/doc-default",method:"",middlewares:[],modules:[yr]},{routePath:"/knowgrph/doc/:path*",mountPath:"/knowgrph/doc",method:"",middlewares:[],modules:[Sr]},{routePath:"/knowgrph/share/:path*",mountPath:"/knowgrph/share",method:"",middlewares:[],modules:[br]},{routePath:"/api/link-preview",mountPath:"/api",method:"GET",middlewares:[],modules:[xr]},{routePath:"/api/link-proxy",mountPath:"/api",method:"GET",middlewares:[],modules:[Pr]},{routePath:"/api/graph",mountPath:"/api",method:"",middlewares:[],modules:[Mr]},{routePath:"/api/oembed",mountPath:"/api",method:"",middlewares:[],modules:[$r]},{routePath:"/__chat_proxy/:path*",mountPath:"/__chat_proxy",method:"",middlewares:[],modules:[Kr]},{routePath:"/knowgrph/:path*",mountPath:"/knowgrph",method:"",middlewares:[],modules:[ce]},{routePath:"/__video_frame",mountPath:"/",method:"",middlewares:[],modules:[Gr]},{routePath:"/__youtube_transcript",mountPath:"/",method:"",middlewares:[],modules:[zr]},{routePath:"/health",mountPath:"/",method:"",middlewares:[],modules:[qr]},{routePath:"/",mountPath:"/",method:"",middlewares:[],modules:[on]}];function Ks(e){for(var t=[],o=0;o<e.length;){var r=e[o];if(r==="*"||r==="+"||r==="?"){t.push({type:"MODIFIER",index:o,value:e[o++]});continue}if(r==="\\"){t.push({type:"ESCAPED_CHAR",index:o++,value:e[o++]});continue}if(r==="{"){t.push({type:"OPEN",index:o,value:e[o++]});continue}if(r==="}"){t.push({type:"CLOSE",index:o,value:e[o++]});continue}if(r===":"){for(var a="",s=o+1;s<e.length;){var i=e.charCodeAt(s);if(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===95){a+=e[s++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(o));t.push({type:"NAME",index:o,value:a}),o=s;continue}if(r==="("){var c=1,l="",s=o+1;if(e[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;){if(e[s]==="\\"){l+=e[s++]+e[s++];continue}if(e[s]===")"){if(c--,c===0){s++;break}}else if(e[s]==="("&&(c++,e[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));l+=e[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(o));if(!l)throw new TypeError("Missing pattern at ".concat(o));t.push({type:"PATTERN",index:o,value:l}),o=s;continue}t.push({type:"CHAR",index:o,value:e[o++]})}return t.push({type:"END",index:o,value:""}),t}n(Ks,"lexer");function js(e,t){t===void 0&&(t={});for(var o=Ks(e),r=t.prefixes,a=r===void 0?"./":r,s=t.delimiter,i=s===void 0?"/#?":s,c=[],l=0,u=0,h="",d=n(function(g){if(u<o.length&&o[u].type===g)return o[u++].value},"tryConsume"),_=n(function(g){var f=d(g);if(f!==void 0)return f;var C=o[u],ee=C.type,ue=C.index;throw new TypeError("Unexpected ".concat(ee," at ").concat(ue,", expected ").concat(g))},"mustConsume"),m=n(function(){for(var g="",f;f=d("CHAR")||d("ESCAPED_CHAR");)g+=f;return g},"consumeText"),y=n(function(g){for(var f=0,C=i;f<C.length;f++){var ee=C[f];if(g.indexOf(ee)>-1)return!0}return!1},"isSafe"),A=n(function(g){var f=c[c.length-1],C=g||(f&&typeof f=="string"?f:"");if(f&&!C)throw new TypeError('Must have text between two parameters, missing text after "'.concat(f.name,'"'));return!C||y(C)?"[^".concat(pe(i),"]+?"):"(?:(?!".concat(pe(C),")[^").concat(pe(i),"])+?")},"safePattern");u<o.length;){var x=d("CHAR"),T=d("NAME"),E=d("PATTERN");if(T||E){var U=x||"";a.indexOf(U)===-1&&(h+=U,U=""),h&&(c.push(h),h=""),c.push({name:T||l++,prefix:U,suffix:"",pattern:E||A(U),modifier:d("MODIFIER")||""});continue}var v=x||d("ESCAPED_CHAR");if(v){h+=v;continue}h&&(c.push(h),h="");var V=d("OPEN");if(V){var U=m(),K=d("NAME")||"",S=d("PATTERN")||"",b=m();_("CLOSE"),c.push({name:K||(S?l++:""),pattern:K&&!S?A(U):S,prefix:U,suffix:b,modifier:d("MODIFIER")||""});continue}_("END")}return c}n(js,"parse");function Fe(e,t){var o=[],r=nn(e,o,t);return Hs(r,o,t)}n(Fe,"match");function Hs(e,t,o){o===void 0&&(o={});var r=o.decode,a=r===void 0?function(s){return s}:r;return function(s){var i=e.exec(s);if(!i)return!1;for(var c=i[0],l=i.index,u=Object.create(null),h=n(function(_){if(i[_]===void 0)return"continue";var m=t[_-1];m.modifier==="*"||m.modifier==="+"?u[m.name]=i[_].split(m.prefix+m.suffix).map(function(y){return a(y,m)}):u[m.name]=a(i[_],m)},"_loop_1"),d=1;d<i.length;d++)h(d);return{path:c,index:l,params:u}}}n(Hs,"regexpToFunction");function pe(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}n(pe,"escapeString");function rn(e){return e&&e.sensitive?"":"i"}n(rn,"flags");function Bs(e,t){if(!t)return e;for(var o=/\((?:\?<(.*?)>)?(?!\?)/g,r=0,a=o.exec(e.source);a;)t.push({name:a[1]||r++,prefix:"",suffix:"",modifier:"",pattern:""}),a=o.exec(e.source);return e}n(Bs,"regexpToRegexp");function Fs(e,t,o){var r=e.map(function(a){return nn(a,t,o).source});return new RegExp("(?:".concat(r.join("|"),")"),rn(o))}n(Fs,"arrayToRegexp");function Gs(e,t,o){return Ws(js(e,o),t,o)}n(Gs,"stringToRegexp");function Ws(e,t,o){o===void 0&&(o={});for(var r=o.strict,a=r===void 0?!1:r,s=o.start,i=s===void 0?!0:s,c=o.end,l=c===void 0?!0:c,u=o.encode,h=u===void 0?function(f){return f}:u,d=o.delimiter,_=d===void 0?"/#?":d,m=o.endsWith,y=m===void 0?"":m,A="[".concat(pe(y),"]|$"),x="[".concat(pe(_),"]"),T=i?"^":"",E=0,U=e;E<U.length;E++){var v=U[E];if(typeof v=="string")T+=pe(h(v));else{var V=pe(h(v.prefix)),K=pe(h(v.suffix));if(v.pattern)if(t&&t.push(v),V||K)if(v.modifier==="+"||v.modifier==="*"){var S=v.modifier==="*"?"?":"";T+="(?:".concat(V,"((?:").concat(v.pattern,")(?:").concat(K).concat(V,"(?:").concat(v.pattern,"))*)").concat(K,")").concat(S)}else T+="(?:".concat(V,"(").concat(v.pattern,")").concat(K,")").concat(v.modifier);else{if(v.modifier==="+"||v.modifier==="*")throw new TypeError('Can not repeat "'.concat(v.name,'" without a prefix and suffix'));T+="(".concat(v.pattern,")").concat(v.modifier)}else T+="(?:".concat(V).concat(K,")").concat(v.modifier)}}if(l)a||(T+="".concat(x,"?")),T+=o.endsWith?"(?=".concat(A,")"):"$";else{var b=e[e.length-1],g=typeof b=="string"?x.indexOf(b[b.length-1])>-1:b===void 0;a||(T+="(?:".concat(x,"(?=").concat(A,"))?")),g||(T+="(?=".concat(x,"|").concat(A,")"))}return new RegExp(T,rn(o))}n(Ws,"tokensToRegexp");function nn(e,t,o){return e instanceof RegExp?Bs(e,t):Array.isArray(e)?Fs(e,t,o):Gs(e,t,o)}n(nn,"pathToRegexp");var _t=/[.+?^${}()|[\]\\]/g;function*zs(e){let t=new URL(e.url).pathname;for(let o of[...w].reverse()){if(o.method&&o.method!==e.method)continue;let r=Fe(o.routePath.replace(_t,"\\$&"),{end:!1}),a=Fe(o.mountPath.replace(_t,"\\$&"),{end:!1}),s=r(t),i=a(t);if(s&&i)for(let c of o.middlewares.flat())yield{handler:c,params:s.params,path:i.path}}for(let o of w){if(o.method&&o.method!==e.method)continue;let r=Fe(o.routePath.replace(_t,"\\$&"),{end:!0}),a=Fe(o.mountPath.replace(_t,"\\$&"),{end:!1}),s=r(t),i=a(t);if(s&&i&&o.modules.length){for(let c of o.modules.flat())yield{handler:c,params:s.params,path:s.path};break}}}n(zs,"executeRequest");var fp={async fetch(e,t,o){let r=e,a=zs(r),s={},i=!1,c=n(async(l,u)=>{if(l!==void 0){let d=l;typeof l=="string"&&(d=new URL(l,r.url).toString()),r=new Request(d,u)}let h=a.next();if(h.done===!1){let{handler:d,params:_,path:m}=h.value,y={request:new Request(r.clone()),functionPath:m,next:c,params:_,get data(){return s},set data(x){if(typeof x!="object"||x===null)throw new Error("context.data must be an object");s=x},env:t,waitUntil:o.waitUntil.bind(o),passThroughOnException:n(()=>{i=!0},"passThroughOnException")},A=await d(y);if(!(A instanceof Response))throw new Error("Your Pages function should return a Response");return oo(A)}else{let d=await t.ASSETS.fetch(r);return oo(d)}},"next");try{return await c()}catch(l){if(i){let u=await t.ASSETS.fetch(r);return oo(u)}throw l}}},oo=n(e=>new Response([101,204,205,304].includes(e.status)?null:e.body,e),"cloneResponse");export{fp as default};
