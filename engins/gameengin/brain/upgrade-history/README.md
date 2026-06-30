# Upgrade History

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

Append-only ledger of every upgrade decision made by Upgrader, organised per cartridge.

Filename pattern: `<cartridge_id>/<YYYY-MM-DD>-<ISO-stamp>.json`.

Each entry records:
- `cartridge_id`
- `upgrade_targets`: which dimensions were judged to need refresh (`mechanics`, `visuals`, `narrative`, `tuning`)
- `priority_scores`: numeric scores per dimension
- `dispatched_agents`: which agents Upgrader invoked (or would have invoked in dry mode)
- `backward_compatibility_checks`: list of save-schema and level-format checks performed

Used by Upgrader itself to track which improvements have already been applied, and by Maestro to weigh upgrade-pressure against new-cartridge work.
