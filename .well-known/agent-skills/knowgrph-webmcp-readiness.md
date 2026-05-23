# Knowgrph WebMCP Readiness Skill

Use this skill when an agent or browser needs to inspect the deployed Knowgrph agent-ready surface and WebMCP lifecycle.

## Shared deployed tools

- inspect_agent_surface: inspect health, OpenAPI, API catalog, MCP server card, A2A card, and agent-skills metadata.

## WebMCP implementation notes

- Browser app runtime installs WebMCP on page load via navigator.modelContext in canvas/src/main.tsx.
- Runtime prefers provideContext({ tools }) when available and also registers each tool with registerTool(tool, { signal }) when supported.
- AbortController-backed registration is used so tools can be unregistered cleanly with the platform lifecycle.
- Deployed HTML fallback injects the shared five-tool WebMCP surface on /knowgrph HTML routes.
- Full app runtime additionally exposes browser-local inspect tools for the active workspace document, canvas topology, canvas snapshot, 3d camera pose, 3d layout positions, 2d zoom viewport, and Source Files snapshot.
