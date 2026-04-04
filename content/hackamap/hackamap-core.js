// HackaMap core: constants, scheduler, parsing, resource loading, graph building.
// Kept separate from UI rendering to reduce churn and keep files <600 lines.

export const NULL_CELL = "—";

export const IS_DEV =
  (window.location?.hostname || "") === "localhost" || (window.location?.hostname || "") === "127.0.0.1";

export const FETCH_OPTIONS = { cache: IS_DEV ? "no-store" : "force-cache" };

export const COLORS = {
  Event: "#22c55e",
  Demo: "#a855f7",
  Organizer: "#fb7185",
  Team: "#fb7185",
  Tech: "#94a3b8",
  Location: "#34d399",
  Audience: "#fbbf24",
  Source: "#64748b",
  PainPoint: "#f472b6",
  Product: "#60a5fa",
};

export const RADII = {
  Event: 18,
  Demo: 12,
  Organizer: 9,
  Team: 9,
  Tech: 8,
  Location: 8,
  Audience: 8,
  Source: 7,
  PainPoint: 7,
  Product: 7,
};

export const EDGE_COLORS = {
  has_demo: "rgba(255,255,255,0.22)",
  organized_by: "rgba(255,255,255,0.22)",
  focuses_on: "rgba(255,255,255,0.18)",
  uses: "rgba(255,255,255,0.18)",
  built_by: "rgba(255,255,255,0.20)",
  held_at: "rgba(255,255,255,0.16)",
  targets: "rgba(255,255,255,0.16)",
  addresses: "rgba(255,255,255,0.14)",
  produces: "rgba(255,255,255,0.14)",
  sourced_from: "rgba(255,255,255,0.14)",
};

export function createCoalescedScheduler() {
  /** @type {Map<string, number>} */
  const scheduled = new Map();
  return {
    schedule(key, fn, delayMs = 0) {
      const existing = scheduled.get(key);
      if (existing !== undefined) {
        if (delayMs === 0) cancelAnimationFrame(existing);
        else clearTimeout(existing);
        scheduled.delete(key);
      }
      if (delayMs === 0) {
        const id = requestAnimationFrame(() => {
          scheduled.delete(key);
          fn();
        });
        scheduled.set(key, id);
        return;
      }
      const id = window.setTimeout(() => {
        scheduled.delete(key);
        fn();
      }, delayMs);
      scheduled.set(key, id);
    },
  };
}

export function sanitizeCell(value) {
  return (value ?? "").toString().replaceAll("|", NULL_CELL).trim() || NULL_CELL;
}

export function parseJsonArrayCell(cell) {
  const c = (cell ?? "").toString().trim();
  if (!c || c === NULL_CELL) return [];
  let raw = c;
  if (raw.startsWith("`") && raw.endsWith("`")) raw = raw.slice(1, -1).trim();
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed.map((x) => sanitizeCell(String(x))).filter((x) => x !== NULL_CELL);
  } catch (_) {}
  return [];
}

export function splitUrls(cell) {
  const c = (cell ?? "").toString().trim();
  if (!c || c === NULL_CELL) return [];
  return c
    .split(";")
    .map((p) => p.trim())
    .filter(Boolean);
}

export function parseMarkdownTable(md) {
  const lines = md.split("\n").map((line) => line.replace(/\r$/, ""));
  const tableLines = [];
  let inTable = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("|") && trimmed.slice(1).includes("|")) {
      tableLines.push(line);
      inTable = true;
      continue;
    }
    if (inTable) break;
  }
  if (tableLines.length < 3) throw new Error("No markdown pipe-table found");
  const headers = tableLines[0]
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim());
  const rows = [];
  for (const line of tableLines.slice(2)) {
    const parts = line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());
    while (parts.length < headers.length) parts.push("");
    rows.push(parts.slice(0, headers.length));
  }
  return { headers, rows };
}

export function domainOf(url) {
  try {
    return new URL(url).host || NULL_CELL;
  } catch (_) {
    return NULL_CELL;
  }
}

export function nodeId(type, key) {
  return `${type}:${sanitizeCell(key)}`;
}

export function pickDemoLabel(demoRow, demoIndex) {
  const products = parseJsonArrayCell(demoRow[demoIndex["Product"]] ?? "");
  return products[0] || sanitizeCell(demoRow[demoIndex["id"]]);
}

export function escapeHtml(s) {
  return (s ?? "").toString().replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

export function nodeTooltipHtml(node) {
  const lines = [];
  lines.push(`<div style="font-weight:600;margin-bottom:4px">${escapeHtml(node.label || node.id)}</div>`);
  lines.push(`<div class="muted">Type: ${escapeHtml(node.type)}</div>`);
  if (node.meta?.ref_id && node.type !== "Source") lines.push(`<div class="muted">Ref: ${escapeHtml(node.meta.ref_id)}</div>`);
  const url = node.meta?.url;
  if (url && url !== NULL_CELL) {
    lines.push(`<div style="margin-top:6px"><a href="${escapeHtml(url)}" target="_blank" rel="noopener">Open URL</a></div>`);
  }
  if (node.type === "Tech") {
    const { foss, category, license, vendor, tco_notes } = node.meta || {};
    if (category && category !== NULL_CELL) lines.push(`<div class="muted">Category: ${escapeHtml(category)}</div>`);
    if (vendor && vendor !== NULL_CELL) lines.push(`<div class="muted">Vendor/Org: ${escapeHtml(vendor)}</div>`);
    if (foss && foss !== NULL_CELL) lines.push(`<div class="muted">FOSS: ${escapeHtml(foss)}</div>`);
    if (license && license !== NULL_CELL) lines.push(`<div class="muted">License: ${escapeHtml(license)}</div>`);
    if (tco_notes && tco_notes !== NULL_CELL) lines.push(`<div style="margin-top:6px" class="muted">TCO: ${escapeHtml(tco_notes)}</div>`);
  }
  return lines.join("");
}

export function createResourceLoader() {
  /** @type {Map<string, Promise<any>>} */
  const promiseCache = new Map();

  const load = async (path, kind) => {
    const key = `${kind}:${path}:${FETCH_OPTIONS.cache}`;
    if (promiseCache.has(key)) return promiseCache.get(key);

    const promise = (async () => {
      const res = await fetch(path, FETCH_OPTIONS);
      if (!res.ok) {
        if (kind === "json") return null;
        throw new Error(`Fetch failed: ${path} (${res.status})`);
      }
      if (kind === "json") return await res.json();
      return await res.text();
    })();

    promiseCache.set(key, promise);
    return promise;
  };

  return {
    text: (path) => load(path, "text"),
    json: (path) => load(path, "json"),
  };
}

export const loader = createResourceLoader();

export async function buildGraphFromMarkdown() {
  const [eventsMd, demosMd] = await Promise.all([loader.text("./events.md"), loader.text("./demos.md")]);

  let sourcesLu = {};
  let orgLu = {};
  let teamLu = {};
  let techLu = {};
  try {
    const [sourcesMd, orgMd, teamMd, techMd] = await Promise.all([
      loader.text("./sources.md"),
      loader.text("./organizer.md"),
      loader.text("./team.md"),
      loader.text("./techstack.md"),
    ]);
    const sourcesTable = parseMarkdownTable(sourcesMd);
    const organizerTable = parseMarkdownTable(orgMd);
    const teamTable = parseMarkdownTable(teamMd);
    const techTable = parseMarkdownTable(techMd);

    const sourcesIndex = Object.fromEntries(sourcesTable.headers.map((h, i) => [h, i]));
    for (const r of sourcesTable.rows) {
      const url = sanitizeCell(r[sourcesIndex["URL"]]);
      sourcesLu[url] = {
        id: sanitizeCell(r[sourcesIndex["id"]]),
        domain: sanitizeCell(r[sourcesIndex["Domain"]]),
        source_type: r[sourcesIndex["Source Type"]],
      };
    }

    const organizerIndex = Object.fromEntries(organizerTable.headers.map((h, i) => [h, i]));
    for (const r of organizerTable.rows) {
      const key = sanitizeCell(r[organizerIndex["Organizer"]]);
      orgLu[key] = { type: sanitizeCell(r[organizerIndex["Type"]]), url: sanitizeCell(r[organizerIndex["URL"]]) };
    }

    const teamIndex = Object.fromEntries(teamTable.headers.map((h, i) => [h, i]));
    for (const r of teamTable.rows) {
      const key = sanitizeCell(r[teamIndex["Team"]]);
      teamLu[key] = { type: sanitizeCell(r[teamIndex["Type"]]), url: sanitizeCell(r[teamIndex["URL"]]) };
    }

    const techIndex = Object.fromEntries(techTable.headers.map((h, i) => [h, i]));
    for (const r of techTable.rows) {
      const key = sanitizeCell(r[techIndex["Tech"]]);
      techLu[key] = {
        category: sanitizeCell(r[techIndex["Category"]]),
        foss: sanitizeCell(r[techIndex["FOSS"]]),
        license: sanitizeCell(r[techIndex["License"]]),
        vendor: sanitizeCell(r[techIndex["Vendor/Org"]]),
        foss_alternatives: r[techIndex["FOSS Alternatives"]],
        tco_notes: sanitizeCell(r[techIndex["TCO Notes"]]),
      };
    }
  } catch (_) {
    // derived tables are optional
  }

  const eventsTable = parseMarkdownTable(eventsMd);
  const demosTable = parseMarkdownTable(demosMd);
  const eventsIndex = Object.fromEntries(eventsTable.headers.map((h, i) => [h, i]));
  const demosIndex = Object.fromEntries(demosTable.headers.map((h, i) => [h, i]));

  /** @type {Map<string, any>} */
  const nodes = new Map();
  /** @type {Array<any>} */
  const links = [];
  const linkSeen = new Set();

  function addNode(type, key, label = null, meta = {}) {
    const k = sanitizeCell(key);
    if (k === NULL_CELL) return "";
    const id = nodeId(type, k);
    if (!nodes.has(id)) {
      nodes.set(id, { id, type, label: sanitizeCell(label ?? k), meta: meta || {} });
      return id;
    }
    if (!meta || typeof meta !== "object") return id;
    const node = nodes.get(id);
    for (const [metaKey, metaValue] of Object.entries(meta)) {
      if (node.meta[metaKey] !== undefined) continue;
      if (metaValue === undefined || metaValue === null || metaValue === "" || metaValue === NULL_CELL) continue;
      node.meta[metaKey] = metaValue;
    }
    return id;
  }

  function addLink(source, target, type) {
    if (!source || !target || source === target) return;
    const key = `${source}__${target}__${type}`;
    if (linkSeen.has(key)) return;
    linkSeen.add(key);
    links.push({ source, target, type });
  }

  // events
  for (const r of eventsTable.rows) {
    const eventId = sanitizeCell(r[eventsIndex["id"]]);
    if (eventId === NULL_CELL) continue;
    const eventName = sanitizeCell(r[eventsIndex["Event"]]);
    const urls = parseJsonArrayCell(r[eventsIndex["URL"]]);

    const eventNode = addNode("Event", eventId, eventName, {
      ref_id: eventId,
      url: urls[0] || NULL_CELL,
      confidence: sanitizeCell(r[eventsIndex["Confidence"]]).toLowerCase(),
    });

    const location = sanitizeCell(r[eventsIndex["Location"]]);
    if (location !== NULL_CELL) {
      const locationNode = addNode("Location", location, location);
      addLink(eventNode, locationNode, "held_at");
    }

    for (const organizer of parseJsonArrayCell(r[eventsIndex["Organizer"]])) {
      const meta = orgLu[organizer] ? { url: orgLu[organizer].url, entity_type: orgLu[organizer].type } : {};
      const organizerNode = addNode("Organizer", organizer, organizer, meta);
      addLink(eventNode, organizerNode, "organized_by");
    }

    for (const tech of parseJsonArrayCell(r[eventsIndex["Tech Focus"]])) {
      const meta = techLu[tech] ? { ...techLu[tech] } : {};
      const techNode = addNode("Tech", tech, tech, meta);
      addLink(eventNode, techNode, "focuses_on");
    }

    for (const audience of parseJsonArrayCell(r[eventsIndex["Eligibility"]])) {
      const audienceNode = addNode("Audience", audience, audience);
      addLink(eventNode, audienceNode, "targets");
    }

    for (const url of urls) {
      const lu = sourcesLu[url] || {};
      const label = lu.domain && lu.domain !== NULL_CELL ? lu.domain : domainOf(url) || url;
      const sourceNode = addNode("Source", url, label, {
        url,
        domain: lu.domain || domainOf(url),
        ref_id: lu.id || NULL_CELL,
        source_type: lu.source_type || NULL_CELL,
      });
      addLink(eventNode, sourceNode, "sourced_from");
    }
  }

  // demos
  for (const r of demosTable.rows) {
    const demoId = sanitizeCell(r[demosIndex["id"]]);
    if (demoId === NULL_CELL) continue;
    const demoLabel = pickDemoLabel(r, demosIndex);
    const demoUrls = splitUrls(r[demosIndex["Demo URL"]]);

    const demoNode = addNode("Demo", demoId, demoLabel, {
      ref_id: demoId,
      event_id: sanitizeCell(r[demosIndex["event_id"]]),
      url: demoUrls[0] || NULL_CELL,
      repo_url: sanitizeCell(r[demosIndex["Repo URL"]]),
      video_url: sanitizeCell(r[demosIndex["Video URL"]]),
      confidence: sanitizeCell(r[demosIndex["Confidence"]]).toLowerCase(),
    });

    const eventId = sanitizeCell(r[demosIndex["event_id"]]);
    if (eventId !== NULL_CELL) {
      const eventNode = addNode("Event", eventId, eventId);
      addLink(eventNode, demoNode, "has_demo");
    }

    for (const team of parseJsonArrayCell(r[demosIndex["Team"]])) {
      const meta = teamLu[team] ? { url: teamLu[team].url, entity_type: teamLu[team].type } : {};
      const teamNode = addNode("Team", team, team, meta);
      addLink(demoNode, teamNode, "built_by");
    }

    for (const tech of parseJsonArrayCell(r[demosIndex["Tech Stack"]])) {
      const meta = techLu[tech] ? { ...techLu[tech] } : {};
      const techNode = addNode("Tech", tech, tech, meta);
      addLink(demoNode, techNode, "uses");
    }

    const painPoint = sanitizeCell(r[demosIndex["Pain Point"]]);
    if (painPoint !== NULL_CELL) {
      const painNode = addNode("PainPoint", demoId, painPoint, { ref_demo_id: demoId });
      addLink(demoNode, painNode, "addresses");
    }

    for (const product of parseJsonArrayCell(r[demosIndex["Product"]])) {
      const productNode = addNode("Product", product, product);
      addLink(demoNode, productNode, "produces");
    }

    const repo = sanitizeCell(r[demosIndex["Repo URL"]]);
    const video = sanitizeCell(r[demosIndex["Video URL"]]);
    const allUrls = [...demoUrls];
    if (repo !== NULL_CELL) allUrls.push(repo);
    if (video !== NULL_CELL) allUrls.push(video);

    for (const url of allUrls) {
      const lu = sourcesLu[url] || {};
      const label = lu.domain && lu.domain !== NULL_CELL ? lu.domain : domainOf(url) || url;
      const srcNode = addNode("Source", url, label, {
        url,
        domain: lu.domain || domainOf(url),
        ref_id: lu.id || NULL_CELL,
        source_type: lu.source_type || NULL_CELL,
      });
      addLink(demoNode, srcNode, "sourced_from");
    }
  }

  return { nodes: Array.from(nodes.values()), links };
}

