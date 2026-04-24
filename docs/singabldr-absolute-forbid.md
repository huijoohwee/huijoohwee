# Singabldr: AI-native “absolute forbid” boundary

## Goal
Make production changes **mechanical + reviewable**, so the publish repo stays a clean deployment target and never becomes a second SSOT.

## Boundary (absolute forbid)
In the publish repo (`huijoohwee`), the following paths are **deployment artifacts** and must not be hand-edited:

- `content/singabldr/**`
- `singabldr/**`

> These are protected via `.github/CODEOWNERS` and should be additionally enforced by GitHub branch protection rules.

## Allowed workflow (only)
1) Edit SSOT in dev repo: `project/prjt0002-singabldr`
   - `singabldr/assets/**` (boot scripts, overrides)
   - `singabldr/index.html`, `singabldr/manifest.webmanifest`
   - `singabldr.json`, `singabldr.assets.json`, `singabldr.elements.json`, `singabldr.geojson`
   - `script-mobility-pwa.v1.json`, etc.
2) Run from dev repo:
   - `npm run release:pages`
3) Push `huijoohwee` to deploy Cloudflare Pages.

## GitHub enforcement checklist (recommended)
In GitHub → Repo Settings → Branches → Branch protection (for the deploy branch):

- Require pull request reviews before merging
- Require review from Code Owners
- Restrict who can push to matching branches
- (Optional) Require signed commits

## Local enforcement (already in pipeline)
The dev repo `release:pages` script refuses to proceed if it detects changes in the publish repo’s deploy surface that are not part of the SSOT release targets.

