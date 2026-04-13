/**
 * Cloudflare Pages Function: /api/graph
 *
 * Purpose:
 * - Provide same-origin API data source for Knowgrph ("Toolbar → Launch → Fetch API Data Source")
 * - Backed by the HackaMap SSOT import bundle under `/knowgrph/imports/hackamap/`
 *
 * Notes:
 * - This is intentionally NOT a generic proxy.
 * - No external deps; deterministic conversion.
 */
import { corsHeaders } from "./_integrationHub.js";

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
};

function jsonResponse(request, body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...JSON_HEADERS, ...corsHeaders(request) },
  });
}

async function fetchHackamapGraphJson(request) {
  // Static asset served by the Pages site (Knowgrph is deployed under /knowgrph/).
  const url = new URL("/knowgrph/imports/hackamap/hackamap-graph.json", request.url);
  const res = await fetch(url.toString(), { redirect: "follow" });
  if (!res.ok) return null;
  return await res.json();
}

async function fetchHackamapApiGraphJson(request) {
  const url = new URL("/knowgrph/imports/hackamap/hackamap_api_graph.json", request.url);
  const res = await fetch(url.toString(), { redirect: "follow" });
  if (!res.ok) return null;
  const payload = await res.json();
  return isApiGraphPayload(payload) ? payload : null;
}

function isApiGraphPayload(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  return Array.isArray(value.nodes) && Array.isArray(value.edges);
}

function toBipartiteApiPayload(graphJson) {
  const nodesRaw = Array.isArray(graphJson?.nodes) ? graphJson.nodes : [];
  const linksRaw = Array.isArray(graphJson?.links) ? graphJson.links : [];

  // Bipartite: Event -> Demo (`has_demo`) so it renders well in d3Bipartite.
  const nodes = [];
  const keep = new Set();
  for (const n of nodesRaw) {
    const id = String(n?.id || "").trim();
    const type = String(n?.type || "").trim();
    const label = String(n?.label || "").trim();
    if (!id || !type || !label) continue;
    if (type === "Event") {
      nodes.push({ id, type: "problem", label, cluster: "Event" });
      keep.add(id);
      continue;
    }
    if (type === "Demo") {
      nodes.push({ id, type: "solution", label, cluster: "Demo" });
      keep.add(id);
    }
  }

  const edges = [];
  for (const e of linksRaw) {
    const source = String(e?.source || "").trim();
    const target = String(e?.target || "").trim();
    const t = String(e?.type || "").trim();
    if (!source || !target) continue;
    if (t !== "has_demo") continue;
    if (!keep.has(source) || !keep.has(target)) continue;
    edges.push({ source, target, type: "has_demo", strength: 0.35 });
  }

  return {
    nodes,
    edges,
    meta: {
      source: "hackamap-graph.json:fallback",
      total_problems: nodes.filter((n) => n.type === "problem").length,
      total_solutions: nodes.filter((n) => n.type === "solution").length,
      ...(graphJson?.content_signature ? { content_signature: String(graphJson.content_signature) } : {}),
    },
  };
}

export async function onRequest(context) {
  const { request } = context;
  const method = String(request.method || "GET").toUpperCase();
  if (method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        ...corsHeaders(request),
        "access-control-allow-methods": "GET, HEAD, OPTIONS",
        "access-control-allow-headers": "*",
        "access-control-max-age": "86400",
      },
    });
  }
  if (method !== "GET" && method !== "HEAD") {
    return jsonResponse(request, { ok: false, error: "unsupported_method" }, 405);
  }

  const apiPayload = await fetchHackamapApiGraphJson(request);
  if (apiPayload) {
    if (method === "HEAD") return new Response(null, { status: 200, headers: { ...JSON_HEADERS, ...corsHeaders(request) } });
    return jsonResponse(request, apiPayload, 200);
  }

  const graphJson = await fetchHackamapGraphJson(request);
  if (!graphJson) {
    return jsonResponse(
      request,
      {
        ok: false,
        error: "missing_hackamap_graph",
        hint: "/knowgrph/imports/hackamap/{hackamap_api_graph.json,hackamap-graph.json} not found",
      },
      404,
    );
  }

  const payload = toBipartiteApiPayload(graphJson);
  if (method === "HEAD") return new Response(null, { status: 200, headers: { ...JSON_HEADERS, ...corsHeaders(request) } });
  return jsonResponse(request, payload, 200);
}
