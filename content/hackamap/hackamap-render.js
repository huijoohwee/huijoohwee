// HackaMap UI: rendering + interaction (2D/3D), optimized for mobile/low-end devices.

import {
  NULL_CELL,
  COLORS,
  RADII,
  EDGE_COLORS,
  getSharedCoalescedScheduler,
  PREVIEW_PROXY_HOST_SUFFIXES,
  nodeTooltipHtml,
  loader,
  buildGraphFromMarkdown,
} from "./hackamap-core.js";

// Shared scheduler: dedupe across runtime + any future persistence subscriptions.
const scheduler = getSharedCoalescedScheduler("hackamap-ui");

function buildLegend(types) {
  const legend = document.getElementById("legend");
  legend.innerHTML =
    '<div style="font-weight:600;color:rgba(255,255,255,0.88);margin-bottom:6px">Legend</div>';
  for (const t of types) {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<div class="dot" style="background:${COLORS[t] || "#999"}"></div><div>${t}</div>`;
    legend.appendChild(div);
  }
}

function buildFilters(types, onChange) {
  const filtersEl = document.getElementById("filters");
  filtersEl.innerHTML = "";
  const state = Object.fromEntries(types.map((t) => [t, true]));
  for (const t of types) {
    const id = `filter-${t}`;
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.innerHTML = `<input id="${id}" type="checkbox" checked /> <span>${t}</span>`;
    filtersEl.appendChild(label);
    label.querySelector("input").addEventListener("change", (e) => {
      state[t] = e.target.checked;
      onChange(state);
    });
  }
  return state;
}

export function renderGraph(graph) {
  const statusEl = document.getElementById("status");
  const tooltip = document.getElementById("tooltip");
  const urlPreview = document.getElementById("urlPreview");
  const urlPreviewFrame = document.getElementById("urlPreviewFrame");
  const urlPreviewTitle = document.getElementById("urlPreviewTitle");
  const urlPreviewOpen = document.getElementById("urlPreviewOpen");
  const urlPreviewClose = document.getElementById("urlPreviewClose");
  const urlPreviewStatus = document.getElementById("urlPreviewStatus");
  const svg = d3.select("#svg");
  const threeEl = document.getElementById("three");
  const modeSelect = document.getElementById("mode");
  const layoutSelect = document.getElementById("layout");
  const mainEl = document.getElementById("main");
  const actionsEl = document.getElementById("actions");

  const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  const isSmallScreen = window.matchMedia?.("(max-width: 640px)")?.matches ?? false;

  const state = {
    filterState: null,
    searchQuery: "",
    showLabels: !(isSmallScreen || prefersReducedMotion),
    mode: (modeSelect?.value || "2d").toLowerCase(),
    layout: layoutSelect?.value || "default",
  };

  function setStatus(msg) {
    statusEl.textContent = msg;
  }

  function showTooltip(html, x, y) {
    tooltip.style.display = "block";
    tooltip.innerHTML = html;
    tooltip.style.left = `${Math.min(x + 12, window.innerWidth - 460)}px`;
    tooltip.style.top = `${Math.min(y + 12, window.innerHeight - 220)}px`;
  }
  function hideTooltip() {
    tooltip.style.display = "none";
  }

  // URL preview panel (hover-driven). Kept outside tooltip to avoid constant innerHTML churn.
  let previewLocked = false;
  let lastPreviewUrl = null;
  let hoveredPreviewNode = null;
  let previewSeq = 0;
  /** @type {Map<string, Promise<any>>} */
  const linkPreviewMetaCache = new Map();
  /** @type {Promise<boolean> | null} */
  let previewApiAvailablePromise = null;
  /** @type {{ x: number, y: number }} */
  let lastPointer = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 };

  const showPreviewStatus = (msg) => {
    if (!urlPreviewStatus) return;
    urlPreviewStatus.textContent = msg;
    urlPreviewStatus.style.display = "flex";
  };
  const hidePreviewStatus = () => {
    if (!urlPreviewStatus) return;
    urlPreviewStatus.style.display = "none";
  };

  if (urlPreviewFrame && urlPreview) {
    urlPreviewFrame.addEventListener("load", () => {
      const active = urlPreview.dataset?.previewSeq;
      if (!active) return;
      if (active !== String(previewSeq)) return;
      hidePreviewStatus();
    });
  }

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  const positionUrlPreview = (clientX, clientY) => {
    if (!urlPreview) return;
    if (!Number.isFinite(clientX) || !Number.isFinite(clientY)) return;
    // urlPreview is positioned within #main (position: relative), so convert viewport coords
    // (clientX/clientY) into local coords.
    const mainRect = mainEl?.getBoundingClientRect?.() ?? null;
    if (!mainRect) return;
    const localX = clientX - mainRect.left;
    const localY = clientY - mainRect.top;
    const pad = 12;
    const gap = 14;
    const w = urlPreview.offsetWidth || 460;
    const h = urlPreview.offsetHeight || 340;

    let left = localX + gap;
    let top = localY + gap;
    if (left + w > mainRect.width - pad) left = localX - gap - w;
    if (top + h > mainRect.height - pad) top = localY - gap - h;

    const maxLeft = Math.max(pad, mainRect.width - pad - w);
    const maxTop = Math.max(pad, mainRect.height - pad - h);
    left = clamp(left, pad, maxLeft);
    top = clamp(top, pad, maxTop);

    urlPreview.style.left = `${left}px`;
    urlPreview.style.top = `${top}px`;
    urlPreview.style.right = "";
    urlPreview.style.bottom = "";
  };

  const loadLinkPreviewMeta = async (targetUrl) => {
    if (!targetUrl) return null;
    if (linkPreviewMetaCache.has(targetUrl)) return linkPreviewMetaCache.get(targetUrl);
    const p = (async () => {
      try {
        const res = await fetch(`/api/link-preview?url=${encodeURIComponent(targetUrl)}`, { cache: "force-cache" });
        if (!res.ok) return null;
        return await res.json();
      } catch (_) {
        return null;
      }
    })();
    linkPreviewMetaCache.set(targetUrl, p);
    if (linkPreviewMetaCache.size > 250) {
      const firstKey = linkPreviewMetaCache.keys().next().value;
      linkPreviewMetaCache.delete(firstKey);
    }
    return p;
  };

  const proxiedPreviewUrl = (targetUrl) => `/api/link-proxy?url=${encodeURIComponent(targetUrl)}`;
  const hasPreviewApi = () => {
    if (previewApiAvailablePromise) return previewApiAvailablePromise;
    previewApiAvailablePromise = (async () => {
      try {
        const res = await Promise.race([
          fetch("/api/link-preview?ping=1", { cache: "no-store" }),
          new Promise((resolve) => window.setTimeout(() => resolve(null), 800)),
        ]);
        if (!res || !res.ok) return false;
        const data = await res.json().catch(() => null);
        return Boolean(data && typeof data === "object" && data.ok === true);
      } catch (_) {
        return false;
      }
    })();
    return previewApiAvailablePromise;
  };

  const shouldProxyFirst = (targetUrl) => {
    try {
      const host = new URL(String(targetUrl)).host.toLowerCase();
      return PREVIEW_PROXY_HOST_SUFFIXES.some((suffix) => host === suffix || host.endsWith(`.${suffix}`));
    } catch (_) {
      return false;
    }
  };

  const isPreviewableUrl = (url) => {
    if (!url || url === NULL_CELL) return false;
    try {
      const u = new URL(String(url));
      return u.protocol === "http:" || u.protocol === "https:";
    } catch (_) {
      return false;
    }
  };

  const hideUrlPreview = ({ clearSrc } = { clearSrc: false }) => {
    if (!urlPreview) return;
    if (previewLocked) return;
    urlPreview.style.display = "none";
    hidePreviewStatus();
    scheduler.cancel?.("url-preview-timeout");
    if (clearSrc && urlPreviewFrame) {
      lastPreviewUrl = null;
      // Release resources after the user stops hovering for a bit.
      scheduler.schedule("url-preview-clear", () => {
        if (!urlPreviewFrame) return;
        urlPreviewFrame.src = "about:blank";
      }, 900);
    }
  };

  const showUrlPreviewForNode = (node) => {
    if (!urlPreview || !urlPreviewFrame || !urlPreviewTitle || !urlPreviewOpen) return;
    const url = node?.meta?.url;
    if (!isPreviewableUrl(url)) {
      hideUrlPreview({ clearSrc: true });
      return;
    }

    const nextUrl = String(url);
    if (nextUrl === lastPreviewUrl && urlPreview.style.display === "block") return;

    previewSeq += 1;
    urlPreview.dataset.previewSeq = String(previewSeq);
    lastPreviewUrl = nextUrl;
    urlPreviewTitle.textContent = node?.label || node?.id || "Preview";
    urlPreviewOpen.href = nextUrl;
    urlPreview.style.display = "block";
    showPreviewStatus("Loading preview…");
    positionUrlPreview(lastPointer.x, lastPointer.y);

    // Coalesce rapid hover switches to avoid iframe reload churn.
    scheduler.schedule("url-preview-src", () => {
      if (!urlPreviewFrame) return;
      // Proxy-first for commonly blocked sites to avoid net::ERR_ABORTED spam and blank previews.
      if (shouldProxyFirst(nextUrl)) urlPreviewFrame.src = proxiedPreviewUrl(nextUrl);
      else urlPreviewFrame.src = nextUrl;
    }, 80);

    // Many sites block iframing (X-Frame-Options / CSP). Provide a visible fallback hint.
    scheduler.schedule("url-preview-timeout", () => {
      if (!urlPreviewStatus) return;
      if (urlPreview.dataset?.previewSeq !== String(previewSeq)) return;
      hasPreviewApi().then((ok) => {
        if (urlPreview.dataset?.previewSeq !== String(previewSeq)) return;
        if (!ok) {
          showPreviewStatus("Preview blocked by site policy (no preview API). Use “Open”.");
          return;
        }

        showPreviewStatus("Preview blocked by site policy. Loading safe preview…");
        scheduler.schedule("url-preview-proxy", () => {
          if (!urlPreviewFrame) return;
          if (urlPreview.dataset?.previewSeq !== String(previewSeq)) return;
          urlPreviewFrame.src = proxiedPreviewUrl(nextUrl);
        }, 0);

        // If proxy still fails to render something useful, fallback to metadata.
        scheduler.schedule("url-preview-meta", () => {
          if (urlPreview.dataset?.previewSeq !== String(previewSeq)) return;
          showPreviewStatus("Safe preview unavailable. Fetching metadata…");
          loadLinkPreviewMeta(nextUrl).then((meta) => {
            if (urlPreview.dataset?.previewSeq !== String(previewSeq)) return;
            const title = meta?.title || meta?.siteName || meta?.domain || null;
            const desc = meta?.description || null;
            if (title && desc) showPreviewStatus(`${title}\n${desc}`);
            else if (title) showPreviewStatus(`${title}\nPreview blocked by site policy. Use “Open”.`);
            else showPreviewStatus("Preview blocked by site policy. Use “Open”.");
          });
        }, 2600);
      });
    }, 900);
  };

  if (urlPreview) {
    urlPreview.addEventListener("mouseenter", () => {
      previewLocked = true;
    });
    urlPreview.addEventListener("mouseleave", () => {
      previewLocked = false;
      if (!hoveredPreviewNode) hideUrlPreview({ clearSrc: false });
    });
  }
  if (urlPreviewClose) {
    urlPreviewClose.addEventListener("click", () => {
      hoveredPreviewNode = null;
      hideUrlPreview({ clearSrc: true });
    });
  }
  if (mainEl) {
    mainEl.addEventListener("mousemove", (e) => {
      lastPointer = { x: e.clientX, y: e.clientY };
      if (!urlPreview) return;
      if (previewLocked) return;
      if (urlPreview.style.display !== "block") return;
      scheduler.schedule("url-preview-pos", () => positionUrlPreview(lastPointer.x, lastPointer.y), 0);
    });
    mainEl.addEventListener("mouseleave", () => {
      hoveredPreviewNode = null;
      hideUrlPreview({ clearSrc: true });
    });
  }

  // Types present
  const types = Array.from(new Set(graph.nodes.map((n) => n.type))).sort();
  buildLegend(types);

  // Actions UI (kept light for mobile)
  actionsEl.innerHTML = "";
  const labelsToggle = document.createElement("label");
  labelsToggle.style.display = "flex";
  labelsToggle.style.alignItems = "center";
  labelsToggle.style.gap = "8px";
  labelsToggle.style.fontSize = "12px";
  labelsToggle.style.color = "rgba(255,255,255,0.85)";
  labelsToggle.innerHTML = `<input id="toggleLabels" type="checkbox" ${state.showLabels ? "checked" : ""} /> <span>Labels</span>`;
  actionsEl.appendChild(labelsToggle);
  labelsToggle.querySelector("input").addEventListener("change", (e) => {
    state.showLabels = Boolean(e.target.checked);
    scheduler.schedule("labels-visibility", applyLabelsVisibility, 0);
  });

  // Filters (coalesced)
  let visibleIdsToken = 0;
  /** @type {Set<string> | null} */
  let visibleIdsCache = null;
  let visibleIdsCacheToken = -1;

  state.filterState = buildFilters(types, (next) => {
    state.filterState = next;
    visibleIdsToken += 1;
    scheduler.schedule("apply-visibility", applyVisibilityAndStatus, 0);
    scheduler.schedule("apply-hulls", updateHullsNow, 120);
    scheduler.schedule("apply-search", applySearchHighlight, 60);
    scheduler.schedule("apply-3d", update3D, 0);
  });

  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", () => {
    state.searchQuery = (searchInput.value || "").trim().toLowerCase();
    scheduler.schedule("apply-search", applySearchHighlight, 60);
  });
  document.getElementById("clearSearch").addEventListener("click", () => {
    searchInput.value = "";
    state.searchQuery = "";
    scheduler.schedule("apply-search", applySearchHighlight, 0);
  });

  let width = mainEl.clientWidth;
  let height = mainEl.clientHeight;
  svg.attr("viewBox", [0, 0, width, height]);

  const container = svg.append("g").attr("class", "container");
  const hullLayer = container.append("g").attr("class", "hulls");
  const linkLayer = container.append("g").attr("stroke-linecap", "round");
  const nodeLayer = container.append("g");
  const labelLayer = container.append("g");

  const zoom = d3
    .zoom()
    .scaleExtent([0.1, 4])
    .on("zoom", (event) => container.attr("transform", event.transform));
  svg.call(zoom);

  const linkSel = linkLayer
    .selectAll("line")
    .data(graph.links, (d) => `${d.source}__${d.target}__${d.type}`)
    .join("line")
    .attr("stroke-width", 1)
    .attr("stroke", (d) => EDGE_COLORS[d.type] || "rgba(255,255,255,0.16)");

  const nodeSel = nodeLayer
    .selectAll("circle")
    .data(graph.nodes, (d) => d.id)
    .join("circle")
    .attr("r", (d) => RADII[d.type] || 8)
    .attr("fill", (d) => COLORS[d.type] || "#999")
    .attr("stroke", "rgba(0,0,0,0.55)")
    .attr("stroke-width", 1)
    .call(
      d3
        .drag()
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.25).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on("end", (event) => {
          if (!event.active) simulation.alphaTarget(0);
        })
    )
    .on("mousemove", (event, d) => {
      if (state.mode !== "2d") return;
      showTooltip(nodeTooltipHtml(d), event.clientX, event.clientY);
      hoveredPreviewNode = d;
      lastPointer = { x: event.clientX, y: event.clientY };
      scheduler.schedule("url-preview", () => showUrlPreviewForNode(d), 60);
    })
    .on("mouseleave", () => {
      hideTooltip();
    })
    .on("click", (_event, d) => {
      const url = d.meta?.url;
      if (url && url !== NULL_CELL) window.open(url, "_blank", "noopener");
    });

  const labelSel = labelLayer
    .selectAll("text")
    .data(graph.nodes, (d) => d.id)
    .join("text")
    .attr("fill", "rgba(255,255,255,0.75)")
    .attr("font-size", 10)
    .attr("dx", 10)
    .attr("dy", 3)
    .text((d) => (d.label || "").slice(0, 38));

  function applyLabelsVisibility() {
    labelSel.style("display", state.showLabels ? null : "none");
  }
  applyLabelsVisibility();

  function visibleNodeIds() {
    if (visibleIdsCache && visibleIdsCacheToken === visibleIdsToken) return visibleIdsCache;
    const ids = new Set();
    for (const n of graph.nodes) {
      if (state.filterState?.[n.type] === false) continue;
      ids.add(n.id);
    }
    visibleIdsCache = ids;
    visibleIdsCacheToken = visibleIdsToken;
    return ids;
  }

  function applyVisibilityAndStatus() {
    const visibleIds = visibleNodeIds();
    nodeSel.style("display", (d) => (visibleIds.has(d.id) ? null : "none"));
    labelSel.style("display", (d) => (state.showLabels && visibleIds.has(d.id) ? null : "none"));
    linkSel.style("display", (l) =>
      visibleIds.has(l.source.id || l.source) && visibleIds.has(l.target.id || l.target) ? null : "none"
    );
    const visibleNodesCount = visibleIds.size;
    let visibleLinksCount = 0;
    for (const l of graph.links) {
      const s = l.source.id || l.source;
      const t = l.target.id || l.target;
      if (visibleIds.has(s) && visibleIds.has(t)) visibleLinksCount += 1;
    }
    setStatus(`${visibleNodesCount} nodes · ${visibleLinksCount} links (filter applied)`);
  }

  function applySearchHighlight() {
    const q = state.searchQuery;
    if (!q) {
      nodeSel.attr("stroke", "rgba(0,0,0,0.55)").attr("stroke-width", 1);
    } else {
      nodeSel
        .attr("stroke", (d) => ((d.label || d.id).toLowerCase().includes(q) ? "#fde047" : "rgba(0,0,0,0.55)"))
        .attr("stroke-width", (d) => ((d.label || d.id).toLowerCase().includes(q) ? 2.5 : 1));
    }
    scheduler.schedule("apply-3d", update3D, 0);
  }

  function layoutTargets(node) {
    if (state.layout !== "pain_product") return { x: width * 0.5, y: height * 0.5 };
    if (node.type === "PainPoint") return { x: width * 0.22, y: height * 0.55 };
    if (node.type === "Product") return { x: width * 0.78, y: height * 0.55 };
    if (node.type === "Source") return { x: width * 0.5, y: height * 0.72 };
    return { x: width * 0.5, y: height * 0.45 };
  }

  function applyLayoutForces() {
    const xStrength = state.layout === "pain_product" ? 0.18 : 0.06;
    const yStrength = state.layout === "pain_product" ? 0.14 : 0.06;
    simulation.force("x", d3.forceX((n) => layoutTargets(n).x).strength(xStrength));
    simulation.force("y", d3.forceY((n) => layoutTargets(n).y).strength(yStrength));
    simulation.alpha(0.45).restart();
    scheduler.schedule("apply-hulls", updateHullsNow, 120);
  }

  layoutSelect?.addEventListener("change", () => {
    state.layout = layoutSelect.value || "default";
    scheduler.schedule("apply-layout", applyLayoutForces, 0);
    scheduler.schedule("apply-3d", update3D, 0);
  });

  function hullPath(points) {
    if (!points || points.length < 3) return null;
    const hull = d3.polygonHull(points);
    if (!hull || hull.length < 3) return null;
    const pad = 18;
    const centroid = d3.polygonCentroid(hull);
    const expanded = hull.map(([x, y]) => {
      const dx = x - centroid[0];
      const dy = y - centroid[1];
      const len = Math.hypot(dx, dy) || 1;
      return [x + (dx / len) * pad, y + (dy / len) * pad];
    });
    return "M" + expanded.map((p) => p.join(",")).join("L") + "Z";
  }

  const painHull = hullLayer
    .append("path")
    .attr("fill", "rgba(244,114,182,0.10)")
    .attr("stroke", "rgba(244,114,182,0.35)")
    .attr("stroke-width", 1.5)
    .attr("pointer-events", "none");

  const prodHull = hullLayer
    .append("path")
    .attr("fill", "rgba(96,165,250,0.10)")
    .attr("stroke", "rgba(96,165,250,0.35)")
    .attr("stroke-width", 1.5)
    .attr("pointer-events", "none");

  function updateHullsNow() {
    const visibleIds = visibleNodeIds();
    const painPts = [];
    const prodPts = [];
    for (const n of graph.nodes) {
      if (!visibleIds.has(n.id)) continue;
      if (!Number.isFinite(n.x) || !Number.isFinite(n.y)) continue;
      if (n.type === "PainPoint") painPts.push([n.x, n.y]);
      if (n.type === "Product") prodPts.push([n.x, n.y]);
    }
    const painD = hullPath(painPts);
    const prodD = hullPath(prodPts);
    painHull.attr("d", painD || "").style("display", painD ? null : "none");
    prodHull.attr("d", prodD || "").style("display", prodD ? null : "none");
  }

  // Single 2D simulation (avoid rebuild churn).
  const simulation = d3
    .forceSimulation(graph.nodes)
    .force(
      "link",
      d3
        .forceLink(graph.links)
        .id((d) => d.id)
        .distance((l) => {
          const t = l.type || "";
          if (t === "has_demo") return 45;
          if (t === "organized_by" || t === "built_by") return 55;
          if (t === "focuses_on" || t === "uses") return 60;
          if (t === "addresses" || t === "produces") return 40;
          return 70;
        })
        .strength(0.14)
    )
    .force("charge", d3.forceManyBody().strength(isSmallScreen ? -140 : -160))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide().radius((d) => (RADII[d.type] || 8) + 3).iterations(1))
    .alphaDecay(prefersReducedMotion ? 0.12 : 0.08);

  applyLayoutForces();
  applyVisibilityAndStatus();
  applySearchHighlight();
  scheduler.schedule("apply-hulls", updateHullsNow, 200);

  simulation.on("tick", () => {
    linkSel
      .attr("x1", (d) => d.source.x ?? 0)
      .attr("y1", (d) => d.source.y ?? 0)
      .attr("x2", (d) => d.target.x ?? 0)
      .attr("y2", (d) => d.target.y ?? 0);
    nodeSel.attr("cx", (d) => d.x ?? 0).attr("cy", (d) => d.y ?? 0);
    labelSel.attr("x", (d) => d.x ?? 0).attr("y", (d) => d.y ?? 0);
    // Hot loop: avoid cancel/reschedule churn. Throttle by only scheduling if absent.
    scheduler.scheduleIfAbsent("apply-hulls", updateHullsNow, 120);
  });

  function fit2D() {
    const bounds = container.node().getBBox();
    if (!bounds || bounds.width === 0 || bounds.height === 0) return;
    const fullWidth = width;
    const fullHeight = height;
    const midX = bounds.x + bounds.width / 2;
    const midY = bounds.y + bounds.height / 2;
    const scale = 0.9 / Math.max(bounds.width / fullWidth, bounds.height / fullHeight);
    const translate = [fullWidth / 2 - scale * midX, fullHeight / 2 - scale * midY];
    svg
      .transition()
      .duration(280)
      .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
  }

  // 3D renderer handle
  let fg3d = null;

  function init3DIfNeeded() {
    if (fg3d) return;
    fg3d = ForceGraph3D()(threeEl)
      .backgroundColor("#0b1020")
      .nodeId("id")
      .nodeLabel((n) => `${n.type}: ${n.label || n.id}`)
      .nodeColor((n) => COLORS[n.type] || "#999")
      .nodeVal((n) => (RADII[n.type] || 8) * 0.6)
      .linkDirectionalParticles(0)
      .linkColor((l) => EDGE_COLORS[l.type] || "rgba(255,255,255,0.16)")
      .linkWidth((l) => (l.type === "has_demo" ? 1.6 : 1.0));
    fg3d.onNodeHover((n) => {
      if (state.mode !== "3d") return;
      if (!n) return;
      hoveredPreviewNode = n;
      scheduler.schedule("url-preview", () => showUrlPreviewForNode(n), 60);
    });
    fg3d.onNodeClick((n) => {
      const url = n?.meta?.url;
      if (url && url !== NULL_CELL) window.open(url, "_blank", "noopener");
    });
  }

  function update3D() {
    if (state.mode !== "3d") return;
    init3DIfNeeded();
    if (!fg3d) return;

    const visibleIds = visibleNodeIds();
    const visibleNodes = graph.nodes.filter((n) => visibleIds.has(n.id));
    const visibleLinks = graph.links.filter(
      (l) => visibleIds.has(l.source.id || l.source) && visibleIds.has(l.target.id || l.target)
    );
    fg3d.graphData({ nodes: visibleNodes, links: visibleLinks });

    const q = state.searchQuery;
    fg3d.nodeColor((n) => {
      const base = COLORS[n.type] || "#999";
      if (!q) return base;
      return (n.label || n.id || "").toLowerCase().includes(q) ? "#fde047" : base;
    });
    fg3d.nodeVal((n) => {
      const base = (RADII[n.type] || 8) * 0.6;
      if (!q) return base;
      return (n.label || n.id || "").toLowerCase().includes(q) ? base * 1.6 : base;
    });

    const xStrength = state.layout === "pain_product" ? 0.18 : 0.06;
    const yStrength = state.layout === "pain_product" ? 0.14 : 0.06;
    fg3d.d3Force("x", d3.forceX((n) => layoutTargets(n).x).strength(xStrength));
    fg3d.d3Force("y", d3.forceY((n) => layoutTargets(n).y).strength(yStrength));
  }

  function setMode(nextMode) {
    state.mode = (nextMode || "2d").toLowerCase();
    const is3d = state.mode === "3d";
    svg.style("display", is3d ? "none" : null);
    threeEl.style.display = is3d ? "block" : "none";
    hideTooltip();
    hoveredPreviewNode = null;
    hideUrlPreview({ clearSrc: false });
    scheduler.schedule("apply-visibility", applyVisibilityAndStatus, 0);
    scheduler.schedule("apply-search", applySearchHighlight, 0);
    scheduler.schedule("apply-hulls", updateHullsNow, 120);
    scheduler.schedule("apply-3d", update3D, 0);
    scheduler.schedule(
      "fit",
      () => (is3d ? fg3d?.zoomToFit?.(350, 30) : fit2D()),
      220
    );
  }

  modeSelect?.addEventListener("change", () => setMode(modeSelect.value));

  document.getElementById("fit").addEventListener("click", () =>
    scheduler.schedule("fit", () => (state.mode === "3d" ? fg3d?.zoomToFit?.(350, 30) : fit2D()), 0)
  );
  document.getElementById("restart").addEventListener("click", () => {
    simulation.alpha(0.55).restart();
    scheduler.schedule("apply-hulls", updateHullsNow, 200);
    scheduler.schedule("fit", fit2D, 220);
  });

  window.addEventListener("resize", () => {
    scheduler.schedule(
      "resize",
      () => {
        width = mainEl.clientWidth;
        height = mainEl.clientHeight;
        svg.attr("viewBox", [0, 0, width, height]);
        simulation.force("center", d3.forceCenter(width / 2, height / 2));
        applyLayoutForces();
        scheduler.schedule("fit", fit2D, 250);
      },
      120
    );
  });

  // Initial mode + fit
  setMode(state.mode);
  scheduler.schedule("fit", fit2D, 280);
}

export async function main() {
  const statusEl = document.getElementById("status");
  const setStatus = (msg) => {
    statusEl.textContent = msg;
  };

  setStatus("Loading graph…");

  if (window.location?.protocol === "file:") {
    setStatus(
      "Open via a web server (not file://). Example: python3 -m http.server then visit http://localhost:8000/hackamap.html"
    );
    return;
  }

  // Prefer JSON if present (fast), fallback to markdown parsing.
  const pre = await loader.json("./hackamap-graph.json");
  if (pre && pre.nodes && pre.links) {
    setStatus(`Loaded hackamap-graph.json (${pre.nodes.length} nodes · ${pre.links.length} links)`);
    renderGraph({ nodes: pre.nodes, links: pre.links });
    return;
  }

  try {
    const g = await buildGraphFromMarkdown();
    setStatus(`Parsed markdown (${g.nodes.length} nodes · ${g.links.length} links)`);
    renderGraph(g);
  } catch (e) {
    console.error(e);
    setStatus(`Failed to build graph: ${e?.message || e}`);
  }
}
