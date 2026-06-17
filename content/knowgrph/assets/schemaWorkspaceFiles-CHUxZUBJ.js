import{c2 as c,u as n,n as s,O as r,e as o}from"./settings-mcp-docs-QpQuV4wl.js";import{u as i}from"./index-CW6ye32C.js";const h="/schema",a="/schema/schema.json";async function m(){const e=await r();await e.ensureSeed();try{await e.createFolder({parentPath:o,name:"schema"})}catch{}}async function p(){await m();const e=await r();try{await e.readFileText(a);return}catch{}const t=(()=>{try{return JSON.stringify(n.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await e.createFile({parentPath:h,name:"schema.json",text:t})}catch{try{await e.writeFileText(a,t)}catch{}}}function l(){c(n.getState()),(async()=>{try{await p(),i.getState().setActivePath(s(a))}catch{}})()}export{a as S,l as o};
