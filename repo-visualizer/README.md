# Repo Visualizer

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

Supabase-style repository schematic for DREAMengin.

## Regenerate graph data

```bash
pnpm viz:build
```

This runs `repo-visualizer/analyzer.mjs` and refreshes:
- `repo-visualizer/graph.json`
- `repo-visualizer/graph-stats.json`
- auto-generated section inside `VISUAL-SCHEMATIC.md`

## Open the interactive viewer

```bash
pnpm viz
```

(or run `pnpm viz:serve` after a prior `pnpm viz:build`)

Viewer URL: `http://localhost:4317`

## Visual legend

### Node colors
- **Blue**: TS/JS files
- **Cyan**: Next.js route files
- **Green**: function/class symbols
- **Gold**: SQL entities (tables/policies/functions)
- **Purple**: docs
- **Gray**: folders/config
- **Red**: orphan/floating nodes

### Edge styles
- **Solid**: `import`, `route-uses`
- **Dashed**: `call`
- **Dotted**: `sql-reference`
- **Double-headed**: `reexport`

## Reading orphans

Orphan/floating nodes are rendered under `🪐 DISCONNECTED / FLOATING` and highlighted in red.
A node is orphaned when it has zero incoming edges and is not an entry point (`app/**/page|layout|route`, `middleware`, root config files, `.github/workflows/*`, `tests/**`).
