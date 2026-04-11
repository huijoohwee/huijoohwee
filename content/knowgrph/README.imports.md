# Imports integrity (FORBID churn)

This repo includes import bundles under `imports/`.

## HackaMap bundle

`imports/hackamap/` is managed by the SSOT pipeline in:
- `project/prjt4000-hackamap` → `make publish-knowgrph-import`

To prevent partial updates / stale files, enable the repo-managed pre-commit hook:
```bash
./scripts/setup_git_hooks.sh
```

The hook validates that:
- `imports/hackamap/bundle-manifest.json` matches the SHA256 of every file in the bundle
- there are no extra/unlisted files in the bundle directory

