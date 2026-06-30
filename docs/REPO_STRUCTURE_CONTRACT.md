# Repository Structure Contract

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

## Purpose
Enforce a stable, AI-readable repository hierarchy and prevent root-level drift.

## Root Contract
Only keep runtime/build-critical files at repository root.

### Allowed root markdown files
- `README.md`
- `CHANGELOG.md`
- `AGENTS.md`
- `REPO_STATE.md`

All other markdown files must live under `docs/`.

### Disallowed root asset files
- `*.png`
- `*.jpg`
- `*.jpeg`

All non-runtime image archives must live under `assets/images/`.

## Ownership Boundaries
| Top-level path | Scope owner |
|---|---|
| `app/` | Product routes + API runtime |
| `components/` | Product UI surfaces |
| `lib/` | Shared domain logic and adapters |
| `.github/workflows/` | CI/CD automation |
| `docs/` | Governance, architecture, guides, logs |
| `assets/` | Archived static assets (non-runtime) |
| `system/` | Infrastructure archive + operational support |
| `tests/` | Verification and regression coverage |

## Archive Rules
- Archive first; do not delete in first cleanup pass.
- Use `system/ci/archive/` for non-active workflow artifacts.
- Use `docs/logs/` for historical notes/status files.
- Use `agents/archive/` for inactive agent artifacts.

## Enforcement
- `scripts/check-root-hygiene.mjs` enforces root file hygiene.
- `.github/workflows/root-hygiene.yml` runs hygiene checks on push/PR.
