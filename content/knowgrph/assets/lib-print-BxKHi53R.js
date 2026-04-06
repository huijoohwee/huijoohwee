async function p(c,i){try{if(typeof window>"u"||!c)return;const l=String((i==null?void 0:i.title)||"Document"),s=document.title,e="kg-print-root",r="kg-print-style",d=document.getElementById(e);if(d)try{d.remove()}catch{}const a=document.getElementById(r);if(a)try{a.remove()}catch{}const t=document.createElement("div");t.id=e,t.style.position="fixed",t.style.inset="0",t.style.zIndex="2147483647",t.style.background="white",t.style.overflow="auto",t.style.padding="14mm";const m=c.cloneNode(!0);t.appendChild(m),document.body.appendChild(t);const n=document.createElement("style");n.id=r,n.textContent=`
      @media print {
        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        body > *:not(#${e}) { display: none !important; }
        #${e} { position: static !important; inset: auto !important; overflow: visible !important; padding: 0 !important; }
        @page { margin: 14mm; }
      }
    `,document.head.appendChild(n);const o=()=>{try{document.title=s}catch{}try{n.remove()}catch{}try{t.remove()}catch{}try{window.removeEventListener("afterprint",o)}catch{}};try{document.title=l}catch{}try{window.addEventListener("afterprint",o)}catch{}try{window.focus()}catch{}try{window.print()}catch{o()}setTimeout(()=>{o()},3e4)}catch{}}export{p};
