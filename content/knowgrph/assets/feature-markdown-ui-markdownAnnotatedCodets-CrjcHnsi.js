const d={yaml:/^\s*#\s?(.*)$/,yml:/^\s*#\s?(.*)$/,python:/^\s*#\s?(.*)$/,py:/^\s*#\s?(.*)$/,sh:/^\s*#\s?(.*)$/,bash:/^\s*#\s?(.*)$/,dockerfile:/^\s*#\s?(.*)$/,makefile:/^\s*#\s?(.*)$/,javascript:/^\s*\/\/\s?(.*)$/,js:/^\s*\/\/\s?(.*)$/,typescript:/^\s*\/\/\s?(.*)$/,ts:/^\s*\/\/\s?(.*)$/,java:/^\s*\/\/\s?(.*)$/,c:/^\s*\/\/\s?(.*)$/,cpp:/^\s*\/\/\s?(.*)$/,rust:/^\s*\/\/\s?(.*)$/,go:/^\s*\/\/\s?(.*)$/};function g($,c,l=1){const a=$.split(`
`),t=[],h=d[c.toLowerCase()],n=[];let s=[],o=l,e=l;for(let i=0;i<a.length;i++){const p=a[i],r=h?p.match(h):null;r?(s.length>0&&(t.push({id:`row-${t.length}`,code:s.join(`
`),annotation:n.length>0?n.join(`
`):null,startLine:o,endLine:e-1}),s=[],n.length=0),n.push(r[1].trim())):(s.length===0&&(o=e),s.push(p)),e++}return(s.length>0||n.length>0)&&t.push({id:`row-${t.length}`,code:s.join(`
`),annotation:n.length>0?n.join(`
`):null,startLine:o,endLine:e-1}),t}export{g as p};
