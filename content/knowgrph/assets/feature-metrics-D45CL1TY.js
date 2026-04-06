const i=(e,t,n={})=>{try{if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(e,{detail:{event:t,...n}}))}catch{}},o=(e,t={})=>{i("kg:markdownPanelMetric",e,t)};export{o as e};
