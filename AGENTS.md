# Huijoohwee Runtime Mirror Routing

- Treat this repository as the generated production mirror for Knowgrph, not an authoring source for `content/knowgrph`, `knowgrph`, `functions`, `canvas`, `contracts`, or `grph-shared`.
- Accept generated mirror updates only from Knowgrph's protected-main release workflow after live production smoke succeeds.
- Keep the registered `main` checkout clean and equal to fetched `origin/main`; author repository policy only in an isolated task worktree.
- Store notes, generated runtime output, logs, caches, and local experiments outside the repository.
- Never repair generated assets manually. Fix Knowgrph's source or sync owner and regenerate the mirror.
- Run `npm run runtime:check` for every pull request and pushed `main` revision.
- Do not add a second Cloudflare deploy workflow here. Knowgrph `.github/workflows/release.yml` owns build, deployment, rollback, verification, and mirror publication.
- Never commit credentials, account identifiers, developer-specific paths, or mutable deployment values.
