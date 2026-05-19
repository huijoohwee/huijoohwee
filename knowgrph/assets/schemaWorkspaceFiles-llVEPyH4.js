import{u as c,a6 as s,a4 as n,ae as r,a5 as o}from"./index-B7FLGk58.js";const i="/schema",a="/schema/schema.json";async function h(){const e=await r();await e.ensureSeed();try{await e.createFolder({parentPath:o,name:"schema"})}catch{}}async function S(){await h();const e=await r();try{await e.readFileText(a);return}catch{}const t=(()=>{try{return JSON.stringify(c.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await e.createFile({parentPath:i,name:"schema.json",text:t})}catch{try{await e.writeFileText(a,t)}catch{}}}function p(){try{c.getState().setWorkspaceViewMode("editor")}catch{}(async()=>{try{await S(),s.getState().setActivePath(n(a))}catch{}})()}export{a as S,p as o};
