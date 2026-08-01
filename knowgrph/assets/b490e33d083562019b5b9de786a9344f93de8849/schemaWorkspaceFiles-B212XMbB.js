import{bs as s,u as n,n as c,an as r,q as o}from"./settings-mcp-docs-BixccDip.js";import{u as i}from"./index-CHcHH1W8.js";const h="/schema",e="/schema/schema.json";async function m(){const a=await r();await a.ensureSeed();try{await a.createFolder({parentPath:o,name:"schema"})}catch{}}async function p(){await m();const a=await r();try{await a.readFileText(e);return}catch{}const t=(()=>{try{return JSON.stringify(n.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await a.createFile({parentPath:h,name:"schema.json",text:t})}catch{try{await a.writeFileText(e,t)}catch{}}}function l(){s(n.getState()),(async()=>{try{await p(),i.getState().setActivePath(c(e))}catch{}})()}export{e as S,l as o};
