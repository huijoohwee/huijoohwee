import{md as c,qo as n,qs as r,ma as o,jy as s,eb as i}from"./index-COViKHvI.js";const h="/schema",e="/schema/schema.json";async function m(){const a=await s();await a.ensureSeed();try{await a.createFolder({parentPath:i,name:"schema"})}catch{}}async function S(){await m();const a=await s();try{await a.readFileText(e);return}catch{}const t=(()=>{try{return JSON.stringify(n.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await a.createFile({parentPath:h,name:"schema.json",text:t})}catch{try{await a.writeFileText(e,t)}catch{}}}function l(){c(n.getState()),(async()=>{try{await S(),r.getState().setActivePath(o(e))}catch{}})()}export{e as S,l as o};
