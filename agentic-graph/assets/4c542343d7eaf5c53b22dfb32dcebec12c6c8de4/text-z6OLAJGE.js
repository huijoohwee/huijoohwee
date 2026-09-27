function x(t,i){var o;const r=i==null?void 0:i.maxLines,c=typeof r=="number"&&Number.isFinite(r)?Math.max(1,Math.floor(r)):4,f=!!(i!=null&&i.stripErrorPrefix),a=(t instanceof Error?t.message:String(t??"")).split(`
`).map(n=>n.trimEnd()),s=[];for(let n=0;n<a.length;n+=1){let e=((o=a[n])==null?void 0:o.trim())||"";if(e&&!/^at\s+/i.test(e)&&!(f&&/^error:\s*/i.test(e)&&(e=e.replace(/^error:\s*/i,"").trim(),!e))&&(s.push(e),s.length>=c))break}return s.join(`
`).trim()}export{x as s};
