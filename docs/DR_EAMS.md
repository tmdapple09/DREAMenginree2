# Dr. Eams

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


Status: active triad surface  
Last updated: 2026-03-16

Dr. Eams is the user-facing assistant in DREAMengin — a DreamDM-Bar-led spatial operating environment.

`README.md` defines Dr. Eams as:
- a primary assistant presence in DreamMenu
- a HomeDream Surface search and guidance surface
- a message-launch surface that routes users into DreamDM Surface when they send a message

## Canonical route

- Primary route: `POST /api/ai/eams`

## Legacy support routes still in the repo

- `app/api/dr-eams/*`

These legacy routes should be treated as support material, not the canonical product-facing path.

## Product role

Dr. Eams must remain:
- useful
- context-sensitive
- non-intrusive
- aligned to real system actions only

Dr. Eams must not:
- imply actions that do not exist
- bypass privacy rules
- bypass visibility rules
- create public output without explicit user intent

## Surface placement

### HomeDream Surface
Dr. Eams acts as:
- search
- guidance
- destination suggestion
- message launcher

### DreamMenu
Dr. Eams appears as a system guide and helper.

### DreamDM Surface
When the user is composing a real message through the Dr. Eams flow, the action should land in DreamDM Surface rather than pretending the message was sent somewhere else.

## Vocabulary rules

Use OS-layer canonical vocabulary:
- HomeDream Surface (not "home page" or "dashboard")
- Edit ProfileDream Surface (not "profile editor" or "builder page")
- View Profile Surface (not "public profile page")
- Dream Windows (not "widgets" or "cards")
- DreamSpace (not "widget layer" or "bottom panel")
- HomeDream Surface or primary surface (not "main area" or "top")
- DreamMenu (not "nav" or "sidebar")
- DreamDM Surface (not "messages page" or "chat")
- DreamShop Surface (not "shop page")
- DreamMarketplace Surface (not "marketplace page")
- DreamAds Surface (not "ads page")

Connection language:
- Say "bind", "mount", "activate", "attach", "route into", "open into", "connect across"
- Do not say "link widget", "open page", "go to tab", "launch card"

Avoid reviving old mixed language when a canonical term exists.

## Capability notes

Dr. Eams capability metadata is defined in:
- `dr-eams/capabilities.yaml`
- `dr-eams/tools.ts`

## Honest implementation status

The repo contains both canonical and legacy Dr. Eams routing. Documentation and code should continue to prefer `/api/ai/eams` while legacy support routes are absorbed or retired.
