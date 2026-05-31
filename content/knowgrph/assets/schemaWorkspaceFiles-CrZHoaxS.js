import{m9 as r,qk as n,qo as s,m6 as o,ju as c,e7 as i}from"./index-QyPU4ngJ.js";const h="/schema",a="/schema/schema.json";async function m(){const e=await c();await e.ensureSeed();try{await e.createFolder({parentPath:i,name:"schema"})}catch{}}async function S(){await m();const e=await c();try{await e.readFileText(a);return}catch{}const t=(()=>{try{return JSON.stringify(n.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await e.createFile({parentPath:h,name:"schema.json",text:t})}catch{try{await e.writeFileText(a,t)}catch{}}}function l(){r(n.getState()),(async()=>{try{await S(),s.getState().setActivePath(o(a))}catch{}})()}export{a as S,l as o};
