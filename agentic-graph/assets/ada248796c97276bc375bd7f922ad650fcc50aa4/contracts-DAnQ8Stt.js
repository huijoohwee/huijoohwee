const n=499999;async function a(t){return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",t)),r=>r.toString(16).padStart(2,"0")).join("")}export{n as MAX_BYTES,a as digest};
