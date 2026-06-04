import{rj as c,vV as n,vY as s,rg as o,oz as r,iD as i}from"./index-zIRQAAPG.js";const h="/schema",e="/schema/schema.json";async function S(){const a=await r();await a.ensureSeed();try{await a.createFolder({parentPath:i,name:"schema"})}catch{}}async function p(){await S();const a=await r();try{await a.readFileText(e);return}catch{}const t=(()=>{try{return JSON.stringify(n.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await a.createFile({parentPath:h,name:"schema.json",text:t})}catch{try{await a.writeFileText(e,t)}catch{}}}function l(){c(n.getState()),(async()=>{try{await p(),s.getState().setActivePath(o(e))}catch{}})()}export{e as S,l as o};
