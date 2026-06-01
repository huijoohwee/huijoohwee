import{ms as c,qL as n,qO as r,mp as o,jL as s,el as i}from"./index-DNqOvPvo.js";const h="/schema",a="/schema/schema.json";async function m(){const e=await s();await e.ensureSeed();try{await e.createFolder({parentPath:i,name:"schema"})}catch{}}async function p(){await m();const e=await s();try{await e.readFileText(a);return}catch{}const t=(()=>{try{return JSON.stringify(n.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await e.createFile({parentPath:h,name:"schema.json",text:t})}catch{try{await e.writeFileText(a,t)}catch{}}}function l(){c(n.getState()),(async()=>{try{await p(),r.getState().setActivePath(o(a))}catch{}})()}export{a as S,l as o};
