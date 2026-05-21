import{ae as r,u as n,a6 as s,a4 as o,af as c,a5 as i}from"./index-fPiT0Ual.js";const h="/schema",e="/schema/schema.json";async function S(){const a=await c();await a.ensureSeed();try{await a.createFolder({parentPath:i,name:"schema"})}catch{}}async function p(){await S();const a=await c();try{await a.readFileText(e);return}catch{}const t=(()=>{try{return JSON.stringify(n.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await a.createFile({parentPath:h,name:"schema.json",text:t})}catch{try{await a.writeFileText(e,t)}catch{}}}function l(){r(n.getState()),(async()=>{try{await p(),s.getState().setActivePath(o(e))}catch{}})()}export{e as S,l as o};
