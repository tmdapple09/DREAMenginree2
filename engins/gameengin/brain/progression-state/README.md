# Progression State

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

Per-cartridge ledger that captures **structure-aware** progression — the
modern alternative to "what level are you on?". One JSON file per
cartridge, keyed by `<cartridge_id>.json`. Written by Mechanic / Maestro
through `recordProgressionState` in `brain-reader.ts`; read by Maestro
when planning the next dispatch.

Schema (every gameplay field optional — present only when the structure
type uses it):

- `cartridge_id` — slug, required
- `structure_type` — one of the StructureType union, required
- `world_map_completion_pct` — 0..1 (open-world / metroidvania)
- `ability_unlocks` — string ids (metroidvania / open-world / action-rpg)
- `sequence_breaks` — string ids (metroidvania)
- `run_count` — non-negative integer (run-based)
- `meta_currency` — `{ [name]: number }` (run-based / live-service)
- `season_phase` — string id (live-service)
- `active_events` — string ids (live-service)
- `last_updated_at` — ISO timestamp (auto-set on write)
