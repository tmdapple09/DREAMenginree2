# DREAMengin Theme

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


Status: active design implementation note  
Last updated: 2026-03-06

`README.md` is the product authority. This file records the design language that the repo should use while aligning to that spec.

## Core palette intent

- **Gold** = action, save, confirm, premium emphasis
- **Light Blue** = connected state, live state, signal state
- **White** = base surface, clarity, breathing room

## Product feel

DREAMengin should feel:
- premium
- mobile-first
- clear
- intentional
- privacy-first

It should not feel:
- noisy
- gamey by default
- cluttered
- dark just for drama

## Surface language

### HomeDream
Gold should anchor the persistent navigation and other high-authority actions.

### EditProfileDream
Gold should signal unsaved-change save actions, publish/confirm moments, and explicit visibility changes.

### ViewProfile
Light blue and white should carry most of the public/shared presentation, with gold used sparingly for owner-authority cues.

## Motion rules

- motion should be intentional
- motion should help orientation
- motion should not consume battery for decoration alone
- visually rich surfaces still need restraint

## Repo implementation note

Theme implementation material currently lives across:
- `app/globals.css`
- `app/globals-enhanced.css`
- `styles/theme.css`
- `components/dream.ThemeApplicator.tsx`
- `components/providers/dream.ThemeProvider.tsx`

## Alignment rule

When theme docs or code mention older sky/frosted-glass language, keep what is useful, but prioritize the README palette and behavior model.
