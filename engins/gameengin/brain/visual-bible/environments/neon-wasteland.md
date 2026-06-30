# Visual Bible: Neon Wasteland

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

## Mood
Sun-bleached desert ruins reclaimed by chrome-and-magenta neon graffiti.
Dawn / dusk light only — never noon, never midnight.

## Palette
| Role | Hex |
|------|-----|
| Sky base | `#1a0d2e` |
| Sky accent | `#ff2bd6` |
| Sand | `#c8981a` |
| Rust | `#7a2e1a` |
| Neon primary | `#0ff` |
| Neon secondary | `#f0f` |

## Materials
- PBR with `metallic: 0.6, roughness: 0.45` for chrome surfaces.
- Emissive intensity 2.5 for neon strips (HDR bloom in PostFX).
- Anisotropic dust on every horizontal surface (wind direction +X).

## Forbidden
- Pure greens (saturated foliage breaks the wasteland fiction).
- Volumetric god-rays at noon angles.
- Photoreal human skin.
