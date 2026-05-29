import{bm as r,u as n,bn as s,a$ as o,b1 as c,bo as i}from"./index-CZ6iEu4L.js";const h="/schema",e="/schema/schema.json";async function S(){const a=await c();await a.ensureSeed();try{await a.createFolder({parentPath:i,name:"schema"})}catch{}}async function m(){await S();const a=await c();try{await a.readFileText(e);return}catch{}const t=(()=>{try{return JSON.stringify(n.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await a.createFile({parentPath:h,name:"schema.json",text:t})}catch{try{await a.writeFileText(e,t)}catch{}}}function l(){r(n.getState()),(async()=>{try{await m(),s.getState().setActivePath(o(e))}catch{}})()}export{e as S,l as o};
