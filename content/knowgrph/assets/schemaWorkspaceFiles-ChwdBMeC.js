import{u as c,n,a4 as r,W as s}from"./index-BKae7OPf.js";import{u as o}from"./sourceFilesIngestIntegration-CSGc0C4N.js";const i="/schema",a="/schema/schema.json";async function h(){const e=await r();await e.ensureSeed();try{await e.createFolder({parentPath:s,name:"schema"})}catch{}}async function m(){await h();const e=await r();try{await e.readFileText(a);return}catch{}const t=(()=>{try{return JSON.stringify(c.getState().schema,null,2)}catch{return`{
  "catalog": {
    "nodeTypes": [],
    "edgeLabels": []
  }
}
`}})();try{await e.createFile({parentPath:i,name:"schema.json",text:t})}catch{try{await e.writeFileText(a,t)}catch{}}}function u(){try{c.getState().setWorkspaceViewMode("editor")}catch{}(async()=>{try{await m(),o.getState().setActivePath(n(a))}catch{}})()}export{a as S,u as o};
