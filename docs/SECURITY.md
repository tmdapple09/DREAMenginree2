# DREAMengin Security and Privacy

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


Status: active implementation guide  
Last updated: 2026-03-06

DREAMengin is privacy-first. `README.md` is the authority for product rules.

## Non-negotiable rules

- nothing is public by default
- all creation starts private
- no hidden sharing
- no fake actions
- no system may bypass privacy rules

## Repo security model

- Next.js App Router server boundaries
- Supabase Auth for authentication
- Supabase Postgres with RLS for protected data
- server-side API routes for sensitive operations
- environment variables for secret server-side provider keys

## Surface boundaries

### HomeDream
Private by default. Source Dreams and live private state belong here.

### EditProfileDream
Private builder surface. Changes here should not become public/shared until explicitly saved.

### ViewProfile
Shared/public output surface. It should render only allowed saved output.

## AI triad guardrails

- Dr. Eams must not imply non-existent actions or bypass privacy intent.
- IDARi must remain admin-only.
- TheBoogieMan.Ai must remain conservative and enforce boundaries.

## Current repo note

The repo contains both canonical and legacy naming. Security documentation should always interpret older route names through the newer spec boundary model rather than the other way around.
