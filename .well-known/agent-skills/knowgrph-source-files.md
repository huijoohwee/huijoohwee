# Knowgrph Source Files Skill

Use this skill when an agent needs to discover and read published Knowgrph Source Files from the Cloudflare storage API.

## Tools

- list_source_files: fetch https://airvio.co/api/storage/source-files.
- read_source_file: fetch https://airvio.co/api/storage/doc-default/{canonicalPath} by default, or https://airvio.co/api/storage/doc/{workspaceId}/{canonicalPath} for an explicit workspace.
