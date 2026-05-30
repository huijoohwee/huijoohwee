import{m8 as r,qj as n,qn as s,m5 as o,jt as c,e6 as i}from"./index-DtYFWiSP.js";const h="/schema",a="/schema/schema.json";async function m(){const e=await c();await e.ensureSeed();try{await e.createFolder({parentPath:i,name:"schema"})}catch{}}async function S(){await m();const e=await c();try{await e.readFileText(a);return}catch{}const t=(()=>{try{return JSON.stringify(n.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await e.createFile({parentPath:h,name:"schema.json",text:t})}catch{try{await e.writeFileText(a,t)}catch{}}}function l(){r(n.getState()),(async()=>{try{await S(),s.getState().setActivePath(o(a))}catch{}})()}export{a as S,l as o};
