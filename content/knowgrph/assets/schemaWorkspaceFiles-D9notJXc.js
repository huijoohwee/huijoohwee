import{u as r}from"./index-mXzroygG.js";import{r as n,n as s,t as c,h as o}from"./Canvas-CUdICYaC.js";const i="/schema",t="/schema/schema.json";async function h(){const e=await c();await e.ensureSeed();try{await e.createFolder({parentPath:o,name:"schema"})}catch{}}async function m(){await h();const e=await c();try{await e.readFileText(t);return}catch{}const a=(()=>{try{return JSON.stringify(r.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await e.createFile({parentPath:i,name:"schema.json",text:a})}catch{try{await e.writeFileText(t,a)}catch{}}}function l(){try{r.getState().setWorkspaceViewMode("editor")}catch{}(async()=>{try{await m(),n.getState().setActivePath(s(t))}catch{}})()}export{t as S,l as o};
