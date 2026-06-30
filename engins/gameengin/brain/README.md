# GameEngin Brain — File-Based Knowledge Substrate

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

Authoritative source: [`GameENGINspec.md`](../../../GameENGINspec.md) §2.

The Brain is a version-controlled directory that is the **single source of truth**
for game-design knowledge, inspiration, and originality tracking used by the
autonomous studio agents (Maestro, Prophet, Artisan, Mechanic, Writer, Tech
Director).

## Layout

| Path | Purpose |
|------|---------|
| `principles/`            | Timeless axioms of game feel (markdown) |
| `genre-dna/`             | What defines each genre (JSON) |
| `mechanic-library/`      | Catalog of proven mechanics, by category (JSON) |
| `inspiration-corpus/`    | Deep analysis of great games 2006–2026 (JSON) |
| `fun-heuristics/`        | Quantifiable "fun" signals (JSON) |
| `review-corpus/`         | Cached scraped review data (JSON) |
| `originality-registry/`  | Mechanic-combo signature hashes preventing accidental clones |
| `rd-sessions/`           | Append-only logs of every AI research session |
| `predictions/`           | Pending and validated AI fun-score predictions |
| `visual-bible/`          | Art-style references for Artisan |

## Read / Write API

All agents interact with the brain through `lib/gameengin/brain-reader.ts`
(see §2.3 of the spec).
