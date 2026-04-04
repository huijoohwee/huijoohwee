#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional, Tuple
from urllib.parse import urlparse


NULL = "—"


def sanitize_cell(s: str) -> str:
    # Markdown tables use '|' as delimiter; keep data safe.
    return (s or "").replace("|", "—").strip() or NULL


def parse_md_table(md: str) -> Tuple[List[str], List[List[str]]]:
    """
    Parses the first markdown pipe-table found in a file.
    Returns: (headers, rows)
    """
    lines = [ln.rstrip("\n") for ln in md.splitlines()]
    table_lines: List[str] = []
    in_table = False
    for ln in lines:
        if ln.strip().startswith("|") and "|" in ln.strip()[1:]:
            table_lines.append(ln)
            in_table = True
        elif in_table:
            break

    if len(table_lines) < 3:
        raise ValueError("No markdown pipe-table found")

    headers = [c.strip() for c in table_lines[0].strip().strip("|").split("|")]
    rows: List[List[str]] = []
    for ln in table_lines[2:]:
        parts = [c.strip() for c in ln.strip().strip("|").split("|")]
        # pad / trim to header width
        while len(parts) < len(headers):
            parts.append("")
        rows.append(parts[: len(headers)])
    return headers, rows


def parse_json_array_cell(cell: str) -> List[str]:
    c = cell.strip()
    if c in (NULL, ""):
        return []
    if c.startswith("`") and c.endswith("`"):
        c = c[1:-1].strip()
    try:
        v = json.loads(c)
        if isinstance(v, list):
            out: List[str] = []
            for x in v:
                sx = sanitize_cell(str(x))
                if sx != NULL:
                    out.append(sx)
            return out
    except Exception:
        return []
    return []


def split_urls(cell: str) -> List[str]:
    """
    demo.Demo URL may be semicolon-separated.
    """
    c = cell.strip()
    if c in (NULL, ""):
        return []
    parts = [p.strip() for p in c.split(";")]
    out: List[str] = []
    for p in parts:
        if p:
            out.append(sanitize_cell(p))
    return out


def domain_of(url: str) -> str:
    try:
        u = urlparse(url)
        return u.netloc or NULL
    except Exception:
        return NULL


@dataclass
class Node:
    id: str
    type: str
    label: str
    meta: Dict[str, Any]


@dataclass
class Link:
    source: str
    target: str
    type: str


class GraphBuilder:
    def __init__(self) -> None:
        self.nodes: Dict[str, Node] = {}
        self.links: List[Link] = []
        self._link_seen: set[tuple[str, str, str]] = set()

    @staticmethod
    def node_id(node_type: str, key: str) -> str:
        key = sanitize_cell(key)
        return f"{node_type}:{key}"

    def add_node(self, node_type: str, key: str, label: Optional[str] = None, meta: Optional[Dict[str, Any]] = None) -> str:
        key = sanitize_cell(key)
        if key == NULL:
            return ""
        nid = self.node_id(node_type, key)
        if nid not in self.nodes:
            self.nodes[nid] = Node(
                id=nid,
                type=node_type,
                label=sanitize_cell(label if label is not None else key),
                meta=meta or {},
            )
        else:
            # shallow meta merge (do not overwrite existing keys)
            if meta:
                for k, v in meta.items():
                    if k not in self.nodes[nid].meta and v not in (None, "", NULL):
                        self.nodes[nid].meta[k] = v
        return nid

    def add_link(self, source: str, target: str, edge_type: str) -> None:
        if not source or not target:
            return
        if source == target:
            return
        k = (source, target, edge_type)
        if k in self._link_seen:
            return
        self._link_seen.add(k)
        self.links.append(Link(source=source, target=target, type=edge_type))


def load_lookup_table(base: Path, filename: str, key_col: str) -> Dict[str, Dict[str, str]]:
    """
    For derived tables like organizer.md/team.md/techstack.md/sources.md.
    Returns: { key_col_value -> row_map }
    """
    p = base / filename
    if not p.exists():
        return {}
    cols, rows = parse_md_table(p.read_text(encoding="utf-8"))
    idx = {c: i for i, c in enumerate(cols)}
    if key_col not in idx:
        return {}
    out: Dict[str, Dict[str, str]] = {}
    for r in rows:
        key = sanitize_cell(r[idx[key_col]])
        if key == NULL:
            continue
        row_map = {c: sanitize_cell(r[idx[c]]) if c in idx else NULL for c in cols}
        out[key] = row_map
    return out


def build_graph(base: Path) -> Dict[str, Any]:
    gb = GraphBuilder()

    # Optional metadata lookups from derived tables
    org_lu = load_lookup_table(base, "organizer.md", "Organizer")
    team_lu = load_lookup_table(base, "team.md", "Team")
    tech_lu = load_lookup_table(base, "techstack.md", "Tech")
    src_lu = load_lookup_table(base, "sources.md", "URL")

    # Canonical tables
    events_cols, events_rows = parse_md_table((base / "events.md").read_text(encoding="utf-8"))
    demos_cols, demos_rows = parse_md_table((base / "demos.md").read_text(encoding="utf-8"))
    e = {c: i for i, c in enumerate(events_cols)}
    d = {c: i for i, c in enumerate(demos_cols)}

    # Build Event nodes + edges to Organizer/Tech/Location/Audience/Source
    for r in events_rows:
        eid = sanitize_cell(r[e["id"]])
        if eid == NULL:
            continue

        event_label = sanitize_cell(r[e["Event"]])
        event_urls = parse_json_array_cell(r[e["URL"]])
        event_sources = [u for u in event_urls if u != NULL]

        event_meta: Dict[str, Any] = {
            "ref_id": eid,
            "url": event_urls[0] if event_urls else NULL,
            "confidence": sanitize_cell(r[e.get("Confidence", 0)]).lower() if "Confidence" in e else NULL,
            "source_type": parse_json_array_cell(r[e["Source Type"]]) if "Source Type" in e else [],
            "date_start": sanitize_cell(r[e.get("Date Start", 0)]) if "Date Start" in e else NULL,
            "date_end": sanitize_cell(r[e.get("Date End", 0)]) if "Date End" in e else NULL,
        }
        n_event = gb.add_node("Event", eid, label=event_label, meta=event_meta)

        # Location
        loc = sanitize_cell(r[e["Location"]]) if "Location" in e else NULL
        if loc != NULL:
            n_loc = gb.add_node("Location", loc, label=loc)
            gb.add_link(n_event, n_loc, "held_at")

        # Organizer(s)
        for org in parse_json_array_cell(r[e["Organizer"]]):
            meta = {}
            if org in org_lu:
                meta = {
                    "entity_type": org_lu[org].get("Type", NULL),
                    "url": org_lu[org].get("URL", NULL),
                }
            n_org = gb.add_node("Organizer", org, label=org, meta=meta)
            gb.add_link(n_event, n_org, "organized_by")

        # Tech focus
        for tech in parse_json_array_cell(r[e["Tech Focus"]]) if "Tech Focus" in e else []:
            meta = {}
            if tech in tech_lu:
                meta = {
                    "category": tech_lu[tech].get("Category", NULL),
                    "foss": tech_lu[tech].get("FOSS", NULL),
                    "license": tech_lu[tech].get("License", NULL),
                    "vendor": tech_lu[tech].get("Vendor/Org", NULL),
                    "tco_notes": tech_lu[tech].get("TCO Notes", NULL),
                    "foss_alternatives": tech_lu[tech].get("FOSS Alternatives", NULL),
                }
            n_tech = gb.add_node("Tech", tech, label=tech, meta=meta)
            gb.add_link(n_event, n_tech, "focuses_on")

        # Eligibility => Audience
        for aud in parse_json_array_cell(r[e["Eligibility"]]) if "Eligibility" in e else []:
            n_aud = gb.add_node("Audience", aud, label=aud)
            gb.add_link(n_event, n_aud, "targets")

        # Sources from events.URL[]
        for url in event_sources:
            smeta = {"url": url, "domain": domain_of(url)}
            if url in src_lu:
                smeta["domain"] = src_lu[url].get("Domain", smeta["domain"])
                smeta["source_type"] = src_lu[url].get("Source Type", NULL)
                smeta["ref_id"] = src_lu[url].get("id", NULL)
            n_src = gb.add_node("Source", url, label=domain_of(url) or url, meta=smeta)
            gb.add_link(n_event, n_src, "sourced_from")

    # Build Demo nodes + edges
    for r in demos_rows:
        did = sanitize_cell(r[d["id"]])
        if did == NULL:
            continue

        # Demo label: first product item if possible, else id
        products = parse_json_array_cell(r[d["Product"]]) if "Product" in d else []
        demo_label = products[0] if products else did
        demo_urls = split_urls(r[d["Demo URL"]]) if "Demo URL" in d else []
        repo_url = sanitize_cell(r[d["Repo URL"]]) if "Repo URL" in d else NULL
        video_url = sanitize_cell(r[d["Video URL"]]) if "Video URL" in d else NULL

        demo_meta: Dict[str, Any] = {
            "ref_id": did,
            "event_id": sanitize_cell(r[d["event_id"]]) if "event_id" in d else NULL,
            "url": demo_urls[0] if demo_urls else NULL,
            "repo_url": repo_url,
            "video_url": video_url,
            "confidence": sanitize_cell(r[d.get("Confidence", 0)]).lower() if "Confidence" in d else NULL,
            "source_type": parse_json_array_cell(r[d["Source Type"]]) if "Source Type" in d else [],
        }
        n_demo = gb.add_node("Demo", did, label=demo_label, meta=demo_meta)

        # FK edge: Event -> Demo
        event_id = sanitize_cell(r[d["event_id"]]) if "event_id" in d else NULL
        if event_id != NULL:
            n_event = gb.add_node("Event", event_id, label=event_id)
            gb.add_link(n_event, n_demo, "has_demo")

        # Team(s)
        for team in parse_json_array_cell(r[d["Team"]]) if "Team" in d else []:
            meta = {}
            if team in team_lu:
                meta = {
                    "entity_type": team_lu[team].get("Type", NULL),
                    "url": team_lu[team].get("URL", NULL),
                }
            n_team = gb.add_node("Team", team, label=team, meta=meta)
            gb.add_link(n_demo, n_team, "built_by")

        # Tech stack
        for tech in parse_json_array_cell(r[d["Tech Stack"]]) if "Tech Stack" in d else []:
            meta = {}
            if tech in tech_lu:
                meta = {
                    "category": tech_lu[tech].get("Category", NULL),
                    "foss": tech_lu[tech].get("FOSS", NULL),
                    "license": tech_lu[tech].get("License", NULL),
                    "vendor": tech_lu[tech].get("Vendor/Org", NULL),
                    "tco_notes": tech_lu[tech].get("TCO Notes", NULL),
                    "foss_alternatives": tech_lu[tech].get("FOSS Alternatives", NULL),
                }
            n_tech = gb.add_node("Tech", tech, label=tech, meta=meta)
            gb.add_link(n_demo, n_tech, "uses")

        # Pain point (prose anchored to demo id)
        pp = sanitize_cell(r[d["Pain Point"]]) if "Pain Point" in d else NULL
        if pp != NULL:
            n_pp = gb.add_node("PainPoint", did, label=pp, meta={"ref_demo_id": did})
            gb.add_link(n_demo, n_pp, "addresses")

        # Products
        for prod in products:
            n_prod = gb.add_node("Product", prod, label=prod)
            gb.add_link(n_demo, n_prod, "produces")

        # Sources from demo urls + repo/video
        all_urls: List[str] = []
        all_urls.extend([u for u in demo_urls if u != NULL])
        if repo_url not in (NULL, ""):
            all_urls.append(repo_url)
        if video_url not in (NULL, ""):
            all_urls.append(video_url)

        for url in all_urls:
            smeta = {"url": url, "domain": domain_of(url)}
            if url in src_lu:
                smeta["domain"] = src_lu[url].get("Domain", smeta["domain"])
                smeta["source_type"] = src_lu[url].get("Source Type", NULL)
                smeta["ref_id"] = src_lu[url].get("id", NULL)
            n_src = gb.add_node("Source", url, label=domain_of(url) or url, meta=smeta)
            gb.add_link(n_demo, n_src, "sourced_from")

    return {
        "schema_version": "1.0",
        "nodes": [
            {"id": n.id, "type": n.type, "label": n.label, "meta": n.meta} for n in gb.nodes.values()
        ],
        "links": [{"source": l.source, "target": l.target, "type": l.type} for l in gb.links],
    }


def main() -> None:
    ap = argparse.ArgumentParser(description="Export HackaMap markdown tables to a D3-friendly graph JSON.")
    ap.add_argument("--base", type=str, default=".", help="Folder containing hackamap *.md files (events.md, demos.md, etc.)")
    ap.add_argument("--out", type=str, default="hackamap-graph.json", help="Output JSON filepath")
    args = ap.parse_args()

    base = Path(args.base).expanduser().resolve()
    out = Path(args.out).expanduser().resolve()

    graph = build_graph(base)
    out.write_text(json.dumps(graph, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {out} ({len(graph['nodes'])} nodes, {len(graph['links'])} links)")


if __name__ == "__main__":
    main()

