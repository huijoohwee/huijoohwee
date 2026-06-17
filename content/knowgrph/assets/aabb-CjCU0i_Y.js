const e=(l,a)=>Math.abs(l.x-a.x)<l.halfW+a.halfW&&Math.abs(l.y-a.y)<l.halfH+a.halfH,r=(l,a)=>{for(let t=0;t<a.length;t+=1)if(e(l,a[t]))return!0;return!1};export{e as a,r as b};
