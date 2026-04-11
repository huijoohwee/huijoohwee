#!/usr/bin/env bash
set -euo pipefail

knowgrph_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$knowgrph_dir"

git rev-parse --is-inside-work-tree >/dev/null

git_root="$(git rev-parse --show-toplevel)"
hooks_abs="${knowgrph_dir}/.githooks"
hooks_rel="$(python3 - <<PY
import os
print(os.path.relpath("${hooks_abs}", "${git_root}"))
PY
)"

git config core.hooksPath "${hooks_rel}"
chmod +x .githooks/pre-commit

echo "Enabled git hooks: core.hooksPath=$(git config core.hooksPath)"
echo "Pre-commit hook installed: ${hooks_rel}/pre-commit"

