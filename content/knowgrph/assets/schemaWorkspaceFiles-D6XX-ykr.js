import{m2 as c,q7 as n,qb as r,l$ as o,js as s,eb as i}from"./index-CqzvF9nK.js";const h="/schema",a="/schema/schema.json";async function S(){const e=await s();await e.ensureSeed();try{await e.createFolder({parentPath:i,name:"schema"})}catch{}}async function m(){await S();const e=await s();try{await e.readFileText(a);return}catch{}const t=(()=>{try{return JSON.stringify(n.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await e.createFile({parentPath:h,name:"schema.json",text:t})}catch{try{await e.writeFileText(a,t)}catch{}}}function l(){c(n.getState()),(async()=>{try{await m(),r.getState().setActivePath(o(a))}catch{}})()}export{a as S,l as o};
