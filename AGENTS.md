# Huijoohwee Runtime Mirror Routing

- Treat this repository as the generated production mirror for `agentic-graph`, not an authoring source for `content/agentic-graph`, `agentic-graph`, `image/agentic-graph`, `functions`, `canvas`, `contracts`, or `grph-shared`.
- Use `agentic-graph` for public product paths and generated artifact names. `agenticgraph` and `knowgrph` are retired mirror namespaces; retain them only as finite, source-owned compatibility redirects emitted by the protected release workflow.
- Use `agentic-*` for Cloudflare deployable service identities. Reserve `AGENTIC_OS_*` and `/agentic-os/...` for internal runtime protocol boundaries; do not broad-rename schemas, D1 migration history, or Durable Object identities.
- Accept generated mirror updates only from `agentic-graph`'s protected-main release workflow after live production smoke succeeds.
- Keep the registered `main` checkout clean and equal to fetched `origin/main`; author repository policy only in an isolated task worktree.
- Store notes, generated runtime output, logs, caches, and local experiments outside the repository.
- Never repair generated assets manually. Fix `agentic-graph`'s source or sync owner and regenerate the mirror.
- Run `npm run runtime:check` for every pull request and pushed `main` revision.
- Do not add a second Cloudflare deploy workflow here. `agentic-graph` `.github/workflows/release.yml` owns build, deployment, rollback, verification, and mirror publication.
- Never commit credentials, account identifiers, developer-specific paths, or mutable deployment values.
