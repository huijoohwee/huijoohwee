import{u as r}from"./index-MqWGEwUl.js";import{u as n}from"./store-DS1Hkghz.js";import{n as s,g as c,W as o}from"./workspaceFs-Cxs4RuXD.js";const i="/schema",t="/schema/schema.json";async function h(){const e=await c();await e.ensureSeed();try{await e.createFolder({parentPath:o,name:"schema"})}catch{}}async function m(){await h();const e=await c();try{await e.readFileText(t);return}catch{}const a=(()=>{try{return JSON.stringify(r.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await e.createFile({parentPath:i,name:"schema.json",text:a})}catch{try{await e.writeFileText(t,a)}catch{}}}function l(){try{r.getState().setWorkspaceViewMode("editor")}catch{}(async()=>{try{await m(),n.getState().setActivePath(s(t))}catch{}})()}export{t as S,l as o};
