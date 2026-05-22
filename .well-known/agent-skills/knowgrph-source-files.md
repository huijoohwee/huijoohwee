# Knowgrph Source Files Skill

Use this skill when an agent needs to discover and read published Knowgrph Source Files from the Cloudflare storage API.

## Tools

- list_source_files: fetch https://airvio.co/api/storage/source-files.
- read_source_file: fetch https://airvio.co/api/storage/doc-default/{canonicalPath} by default, or https://airvio.co/api/storage/doc/{workspaceId}/{canonicalPath} for an explicit workspace.
- read_shared_document: resolve a Knowgrph share token or public share/document URL, then fetch the canonical published markdown document from storage.
- inspect_shared_document_structure: inspect published Knowgrph shared-document frontmatter/body structure from a share token or public share/document URL.
- inspect_agent_surface: inspect the deployed Knowgrph health, OpenAPI, MCP server-card, A2A agent-card, and agent-skills metadata.
