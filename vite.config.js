import { defineConfig } from "vite";

/**
 * Local dev convenience:
 * - Vite serves static assets / client code.
 * - Cloudflare Pages Functions are served separately via `npm run dev:pages`.
 * This proxy routes `/api/*` to the local Pages Functions server so browser calls stay same-origin.
 */
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5175",
        changeOrigin: true,
        secure: false,
      },
      "/__chat_proxy": {
        target: "http://localhost:5175",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

