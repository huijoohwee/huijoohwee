import{m2 as c,q6 as n,qa as r,l$ as o,js as s,eb as i}from"./index-BpgMIE8a.js";const h="/schema",e="/schema/schema.json";async function S(){const a=await s();await a.ensureSeed();try{await a.createFolder({parentPath:i,name:"schema"})}catch{}}async function m(){await S();const a=await s();try{await a.readFileText(e);return}catch{}const t=(()=>{try{return JSON.stringify(n.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await a.createFile({parentPath:h,name:"schema.json",text:t})}catch{try{await a.writeFileText(e,t)}catch{}}}function l(){c(n.getState()),(async()=>{try{await m(),r.getState().setActivePath(o(e))}catch{}})()}export{e as S,l as o};
