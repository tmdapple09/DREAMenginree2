# Crash Reports — Project History (Brain feedback loop)

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

Append-only ledger of player-submitted crash & critical-bug reports for each
cartridge. When a cartridge crashes, a report window opens; the statement the
player writes is POSTed to `/api/gameengin/crash-report` and stored here as
part of that cartridge's **Project History** so Maestro can read it on the
next dispatch cycle and route fixes to the right specialist agent.

## Filename pattern

`<cartridge_id>/YYYY-MM-DD-<ISO-stamp>.json`

## Rules

- Reports are **only** accepted for cartridges currently listed in
  `active-projects.json`. Unknown / inactive cartridges are rejected by the
  API so the back-catalog stays Upgrader's domain.
- The endpoint never trusts client input for `received_at`.
- Maximum payload size enforced server-side (16 KB).
