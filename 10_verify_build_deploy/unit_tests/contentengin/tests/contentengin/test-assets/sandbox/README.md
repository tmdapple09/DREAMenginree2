# ContentEngin Sandbox Test Assets

This directory is an isolated ContentEngin sandbox. It stores deterministic text recipes in git and intentionally does **not** store binary exports.

## Why exports are generated

Git pushes in this environment do not support binary assets, so `model.glb` and `thumbnail.webp` are generated after push by the `ContentEngin Test Assets` workflow and uploaded as the `contentengin-sandbox-test-assets` artifact.

## Generate locally

```bash
node scripts/contentengin/generate-test-assets.mjs
```

Generated bundles are written to `tests/contentengin/test-assets/sandbox/exports/`, which is gitignored.
