import{u as c,a4 as r,n as s,a5 as n,W as o}from"./index-D3qz735V.js";const i="/schema",a="/schema/schema.json";async function h(){const e=await n();await e.ensureSeed();try{await e.createFolder({parentPath:o,name:"schema"})}catch{}}async function S(){await h();const e=await n();try{await e.readFileText(a);return}catch{}const t=(()=>{try{return JSON.stringify(c.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await e.createFile({parentPath:i,name:"schema.json",text:t})}catch{try{await e.writeFileText(a,t)}catch{}}}function p(){try{c.getState().setWorkspaceViewMode("editor")}catch{}(async()=>{try{await S(),r.getState().setActivePath(s(a))}catch{}})()}export{a as S,p as o};
