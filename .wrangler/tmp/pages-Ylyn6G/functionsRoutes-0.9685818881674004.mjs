import { onRequestGet as __api_link_preview_js_onRequestGet } from "/sessions/69d1ba22bebd14ea7a4a1db6/workspace/huijoohwee/functions/api/link-preview.js"
import { onRequestGet as __api_link_proxy_js_onRequestGet } from "/sessions/69d1ba22bebd14ea7a4a1db6/workspace/huijoohwee/functions/api/link-proxy.js"

export const routes = [
    {
      routePath: "/api/link-preview",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_link_preview_js_onRequestGet],
    },
  {
      routePath: "/api/link-proxy",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_link_proxy_js_onRequestGet],
    },
  ]