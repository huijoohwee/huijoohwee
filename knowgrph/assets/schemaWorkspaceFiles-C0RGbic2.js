import{lY as r,p_ as n,q2 as s,lV as o,jn as c,eb as i}from"./index-uHYG-_V2.js";const h="/schema",a="/schema/schema.json";async function p(){const e=await c();await e.ensureSeed();try{await e.createFolder({parentPath:i,name:"schema"})}catch{}}async function S(){await p();const e=await c();try{await e.readFileText(a);return}catch{}const t=(()=>{try{return JSON.stringify(n.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await e.createFile({parentPath:h,name:"schema.json",text:t})}catch{try{await e.writeFileText(a,t)}catch{}}}function m(){r(n.getState()),(async()=>{try{await S(),s.getState().setActivePath(o(a))}catch{}})()}export{a as S,m as o};
