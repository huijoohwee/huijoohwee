import{bT as c,u as n,n as s,S as r,o}from"./settings-mcp-docs-BfZfrOYH.js";import{u as i}from"./index-DQnPBJwx.js";const h="/schema",e="/schema/schema.json";async function S(){const a=await r();await a.ensureSeed();try{await a.createFolder({parentPath:o,name:"schema"})}catch{}}async function m(){await S();const a=await r();try{await a.readFileText(e);return}catch{}const t=(()=>{try{return JSON.stringify(n.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await a.createFile({parentPath:h,name:"schema.json",text:t})}catch{try{await a.writeFileText(e,t)}catch{}}}function l(){c(n.getState()),(async()=>{try{await m(),i.getState().setActivePath(s(e))}catch{}})()}export{e as S,l as o};
