# Knowgrph Published Documents Skill

Use this skill when an agent needs to discover, read, or inspect published Knowgrph Source Files and shared documents.

## Tools

- list_source_files: fetch https://airvio.co/api/storage/source-files.
- read_source_file: fetch https://airvio.co/api/storage/doc-default/{canonicalPath} by default, or https://airvio.co/api/storage/doc/{workspaceId}/{canonicalPath} for an explicit workspace.
- read_shared_document: resolve a Knowgrph share token or public share/document URL, then fetch the canonical published markdown document from storage.
- inspect_shared_document_structure: inspect published Knowgrph shared-document frontmatter/body structure from a share token or public share/document URL.

## Scope

- Shared read-only surface across HTTP MCP, MCP server-card metadata, and deployed HTML WebMCP fallback.
- Public/browser URLs stay canonical on https://airvio.co/api/storage/*.
- Server-side Pages reads use https://knowgrph-storage.huijoohwee.workers.dev to avoid custom-domain self-fetch rewrite failures.
