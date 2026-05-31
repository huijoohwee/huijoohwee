import{mp as r,qE as n,qI as s,mm as o,jE as c,ea as i}from"./index-CuWpTN5X.js";const h="/schema",e="/schema/schema.json";async function m(){const a=await c();await a.ensureSeed();try{await a.createFolder({parentPath:i,name:"schema"})}catch{}}async function p(){await m();const a=await c();try{await a.readFileText(e);return}catch{}const t=(()=>{try{return JSON.stringify(n.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await a.createFile({parentPath:h,name:"schema.json",text:t})}catch{try{await a.writeFileText(e,t)}catch{}}}function l(){r(n.getState()),(async()=>{try{await p(),s.getState().setActivePath(o(e))}catch{}})()}export{e as S,l as o};
