# DREAMengin Icons

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

> **Documentation Owner:** José Mancilla (appthemanger-ctrl)  
> **Documentation Date:** 2026-04-06


Last updated: 2026-03-06

This document tracks the sprite-sheet driven icon set used for Dreams, connectors, and supporting surfaces.

## Sheet file

| Property | Value |
|---|---|
| Path | `/public/images/iconslist.png` |
| Served at | `/images/iconslist.png` |
| Dimensions | `1168 × 896 px` |
| Format | `PNG` |
| Grid | `11 columns × 9 rows` |

## Usage rule

Icons should reinforce Dreams, connectors, DreamMenu, and related system surfaces without inventing off-spec product names.

## Current icon coverage

The current sprite includes social, media, commerce, browser, platform, and utility icons suitable for connector-facing Dreams.

## Implementation pointers

- `components/ui/dream.SheetIcon.tsx`
- `components/ui/dream.IconList.tsx`
- `lib/icons/*` when present in the repo
