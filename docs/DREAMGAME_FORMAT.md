# .dreamgame ZIP Format Specification

<!-- DREAMENGIN_DOCUMENT_ALIGNMENT_GUARD_START -->
## DREAMengin Vision Alignment Guard

This document must not drift away from the DREAMengin canonical product contract.

Interpret this file under these rules:

- DREAMengin is a web-native creative OS/world, not disconnected pages.
- Dreams, posts, messages, games, assets, tools, settings, profiles, media, workspaces, and shared sessions must operate as one connected system.
- Every visible feature must satisfy: visible user action → reachable handler → real runtime/API/state behavior → persisted or visible result → clear feedback/error state.
- DreamDMBar is the canonical search/control/menu layer.
- DreamR owns feed/profile/posts/comments/messages/social identity, with one canonical edit-profile path.
- HomeDream and DreamSpace must be real operating surfaces, not decorative grids.
- Engins are first-class capabilities with real surfaces, state, actions, runtime behavior, and mobile-smooth UI.
- RenderEngin is rendering technology used by Engins, especially ContentEngin first, not a standalone fake destination.
- Settings, language, uploads, media, YouTube behavior, customization, Shared Dreams, offline behavior, performance, security, accessibility, and observability must connect to canonical state.
- AI-like behavior should be deterministic and work without live AI where possible.
- Code should follow the DREAMengin grammar: directive → imports → identity/law → constants → types → helpers → owned state → derived gates → named actions → effects/cleanup → render/return → export.

If this document describes a feature, route, surface, tool, setting, or Engin behavior, it must not imply fake buttons, decorative controls, duplicate ownership, unreachable pages, hidden failures, or placeholder panels pretending to work.
<!-- DREAMENGIN_DOCUMENT_ALIGNMENT_GUARD_END -->

**Version:** 1.0  
**Status:** Active — used by `lib/gameengin/gameEnginRuntime.ts`

---

## Overview

A `.dreamgame` file is a standard ZIP archive containing a WebAssembly game module,
its associated assets, and a `manifest.json` that describes how to load and run the game.

The format is designed to be:
- **Self-contained** — all runtime dependencies ship inside the archive.
- **Streamed** — large asset files can be fetched lazily after initial WASM load.
- **Versioned** — the manifest includes a `version` field for compatibility checks.

---

## Archive Structure

```
my-game.dreamgame  (ZIP archive)
├── manifest.json          ← Required. Describes the game.
├── game.wasm              ← Required. Compiled WebAssembly module.
├── assets/
│   ├── sprites.png        ← Optional sprite atlas.
│   ├── audio/
│   │   ├── music.ogg
│   │   └── sfx.ogg
│   ├── shaders/
│   │   └── terrain.wgsl   ← Optional WGSL shaders for WebGPU.
│   └── levels/
│       └── level1.json    ← Level data / tilemaps.
└── icon.png               ← Optional 256×256 game icon.
```

---

## manifest.json Schema

```json
{
  "id": "string — unique game identifier (e.g. 'com.dreamengin.spacedrift')",
  "name": "string — human-readable game title",
  "version": "string — semver (e.g. '1.0.0')",
  "wasmUrl": "string — path to WASM inside archive (e.g. 'game.wasm')",
  "assetUrls": ["array of strings — relative paths to asset files"],
  "compatibleRuntime": "GameEngin",
  "entryPoint": "string (optional) — WASM export function name to call on start (default: 'start')",
  "requiredFeatures": ["array of WebGPU feature strings (optional)"],
  "description": "string (optional)",
  "author": "string (optional)",
  "category": "string (optional) — e.g. 'platformer', 'puzzle', 'RTS'"
}
```

### Example manifest.json

```json
{
  "id": "com.dreamengin.bouncedream",
  "name": "Bounce Dream",
  "version": "1.2.0",
  "wasmUrl": "game.wasm",
  "assetUrls": [
    "assets/sprites.png",
    "assets/audio/music.ogg",
    "assets/levels/level1.json"
  ],
  "compatibleRuntime": "GameEngin",
  "entryPoint": "start",
  "requiredFeatures": [],
  "description": "A physics-based bouncing ball puzzle game.",
  "author": "DreamStudio",
  "category": "puzzle"
}
```

---

## WASM Module Contract

The WASM module must export the following functions (TypeScript-style signature):

```typescript
// Required
export function start(): void;

// Optional but recommended
export function stop(): void;
export function update(dt: number): void;   // dt in seconds
export function onInput(type: i32, x: f32, y: f32): void;
export function getVersion(): i32;           // returns major version * 100 + minor
```

The host (GameEnginRuntime) provides these imports:

```typescript
// Minimal import object supplied to WebAssembly.instantiate
env: {
  memory: WebAssembly.Memory;  // initial: 16 pages = 1 MB
  abort(msg: i32, file: i32, line: i32, col: i32): void;
}
```

Games that need more imports (canvas, audio context, etc.) should use the JS host bridge
pattern and register their imports before calling `loadDreamGame`.

---

## Loading Flow

```
GameEnginRuntime.loadGame(manifest)
  └─ loadDreamGame(manifest)
       ├─ fetch(manifest.wasmUrl)      → ArrayBuffer
       ├─ WebAssembly.instantiate(...)
       ├─ fetch(manifest.assetUrls[i]) → ArrayBuffer (parallel)
       └─ returns DreamGameInstance { start(), stop(), assets }
```

---

## Packaging a .dreamgame File

Any standard ZIP tool works:

```bash
# macOS / Linux
zip -r my-game.dreamgame manifest.json game.wasm assets/ icon.png

# Node.js (jszip or archiver)
const archiver = require('archiver');
const output   = fs.createWriteStream('my-game.dreamgame');
const archive  = archiver('zip');
archive.pipe(output);
archive.file('manifest.json');
archive.file('game.wasm');
archive.directory('assets/', 'assets');
archive.finalize();
```

The `.dreamgame` extension is registered in the DREAMengin platform as MIME type
`application/x-dreamgame+zip`.

---

## Versioning

| Field     | Rule |
|-----------|------|
| `version` | SemVer 2.0. Patch bumps = bug fixes. Minor = new optional exports. Major = breaking changes to WASM contract. |
| Archive   | ZIP format version 2.0 or later. ZIP64 for archives > 4 GB (rare). |
| Manifest  | Schema version is implied by `compatibleRuntime: "GameEngin"`. Future runtimes will use `"GameEngin2"`, etc. |

---

## Security

- WASM modules run in the browser sandbox — no native file system access.
- Asset URLs must be relative paths (no `..` traversal).
- The `GameEnginRuntime` validates that `compatibleRuntime === 'GameEngin'` before loading.
- Content policy: all `.dreamgame` packages distributed through DREAMengin must pass the
  platform's child-safety and content moderation pipeline before publishing.

---

*This document is the normative specification for the `.dreamgame` format.*  
*Implementation: `lib/gameengin/gameEnginRuntime.ts` → `loadDreamGame()`*
