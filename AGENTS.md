# Huijoohwee Runtime Mirror Routing

- Continuously obey the pinned `node_modules/agentic-os/guides/SYSTEM-PROMPT-RUNTIME.md`,
  `node_modules/agentic-os/docs/adlc-guidelines.md`, and its `docs/START-WORKFLOW.md`
  and `docs/RELEASE-WORKFLOW.md`. Install with `npm ci --ignore-scripts` if missing.
- Use the committed `.agentic-os.json` and shared ADLC commands for repository lifecycle;
  never recreate the retired ACOS controller or copy the upstream policy. Source integration
  does not authorize generated mirror publication or deployment.
- Treat this repository as the generated production mirror for `agentic-graph`; `content/agentic-commerce-os` is a separate generated Commerce asset mirror. Neither is an authoring source.
- Do not author `content/agentic-graph`, `agentic-graph`, `image/agentic-graph`, `functions`, `canvas`, `contracts`, or `grph-shared` here.
- `content/agentic-commerce-os` is generated only by the protected Commerce mirror publisher from the exact clean `agentic-commerce-os` main revision. Its manifest and files must be validated together; never edit the projection by hand.
- Use `agentic-graph` for public product paths and generated artifact names. `agenticgraph` and `knowgrph` are retired mirror namespaces; retain them only as finite, source-owned compatibility redirects emitted by the protected release workflow.
- Use `agentic-*` for Cloudflare deployable service identities. Reserve `AGENTIC_OS_*` and `/agentic-os/...` for internal runtime protocol boundaries; do not broad-rename schemas, D1 migration history, or Durable Object identities.
- Accept Graph mirror updates only from `agentic-graph`'s protected-main release workflow after live production smoke succeeds. Accept Commerce content updates only through the protected non-deploying publisher PR after source checks pass; the Commerce repository's existing Local-first Production Release remains the Worker deployment and rollback owner.
- Keep the registered `main` checkout clean and equal to fetched `origin/main`; author repository policy only in an isolated task worktree.
- Store notes, generated runtime output, logs, caches, and local experiments outside the repository.
- Never repair generated assets manually. Fix `agentic-graph`'s source or sync owner and regenerate the mirror.
- Run `npm run runtime:check` for every pull request and pushed `main` revision.
- Do not add a Cloudflare deploy workflow here. `agentic-graph` `.github/workflows/release.yml` owns Graph build, deployment, rollback, verification, and Graph mirror publication. The Commerce publisher only opens a content PR; `agentic-commerce-os` owns its Worker deployment, route, verification, and rollback.
- Never commit credentials, account identifiers, developer-specific paths, or mutable deployment values.
