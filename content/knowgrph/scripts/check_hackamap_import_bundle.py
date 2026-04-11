#!/usr/bin/env python3
from __future__ import annotations

import hashlib
import json
from pathlib import Path
from typing import Dict, List


def sha256_file(p: Path) -> str:
    h = hashlib.sha256()
    with p.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def fail(msg: str) -> None:
    print(f"[FAIL] {msg}")
    raise SystemExit(1)


def ok(msg: str) -> None:
    print(f"[OK] {msg}")


def main() -> None:
    knowgrph_dir = Path(__file__).resolve().parents[1]
    bundle_dir = knowgrph_dir / "imports" / "hackamap"
    manifest_path = bundle_dir / "bundle-manifest.json"

    if not bundle_dir.exists():
        fail(f"Missing bundle folder: {bundle_dir}")
    if not manifest_path.exists():
        fail(f"Missing bundle manifest: {manifest_path}")

    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    files: List[Dict[str, str]] = manifest.get("files") or []
    if not isinstance(files, list) or not files:
        fail("bundle-manifest.json has no files[] entries")

    expected_paths: set[Path] = set()
    mismatches: List[str] = []

    for entry in files:
        rel = entry.get("path")
        expected = entry.get("sha256")
        if not rel or not expected:
            mismatches.append(f"Invalid manifest entry: {entry}")
            continue
        p = (bundle_dir / rel).resolve()
        expected_paths.add(p)
        if not p.exists():
            mismatches.append(f"Missing file: {rel}")
            continue
        actual = sha256_file(p)
        if actual != expected:
            mismatches.append(f"SHA mismatch: {rel} expected={expected} actual={actual}")

    # Forbid untracked files inside the bundle (prevents partial manual edits / stale files).
    extra_files: List[str] = []
    for p in sorted(bundle_dir.rglob("*")):
        if not p.is_file():
            continue
        if p.resolve() == manifest_path.resolve():
            continue
        if p.resolve() not in expected_paths:
            extra_files.append(str(p.relative_to(bundle_dir)))

    if mismatches:
        fail("Bundle manifest validation failed:\n  - " + "\n  - ".join(mismatches))
    if extra_files:
        fail("Bundle contains files not listed in bundle-manifest.json:\n  - " + "\n  - ".join(extra_files))

    ok("HackaMap import bundle matches bundle-manifest.json")


if __name__ == "__main__":
    main()

