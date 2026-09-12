function c(r){return`"${String(r||"").replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`}function l(r,t){const n=String(t||"").replace(/\r/g,"").trim();if(!n)return[];const e=n.split(`
`);return[`${r}: |`,...e.map(a=>`  ${a}`)]}export{l as a,c as y};
