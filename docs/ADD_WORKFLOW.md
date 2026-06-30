# GitHub Actions Workflow Note

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


Last updated: 2026-04-01

This repo keeps all GitHub Actions workflow files under:
- `.github/workflows/`

The reusable composite Node setup action lives at:
- `.github/actions/setup-node/action.yml`

If the GitHub importer or mobile flow cannot write into `.github/workflows/`, create the file manually in GitHub and paste in the workflow contents.

## Standard action versions (as of 2026-04-01)

All workflows should use these pinned versions:

| Action | Version |
|--------|---------|
| `actions/checkout` | `@v4` |
| `actions/setup-node` | `@v4` |
| `actions/upload-artifact` | `@v4` |
| `actions/download-artifact` | `@v4` |
| `pnpm/action-setup` | `@v4` |

## Reminder

Workflow additions must preserve these repo assumptions:
- Node 25 (set via `.github/actions/setup-node`)
- pnpm 10.30.0 (set via `pnpm/action-setup@v4`)
- Next.js App Router repo layout
- Prefer the shared `.github/actions/setup-node` composite action over inline Node setup
- Tag bot commits with `[skip ci]` to prevent infinite trigger loops
- Use `permissions: contents: write` on any job that pushes a commit back
