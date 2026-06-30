# DREAMengin Engineering Guardrails

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


Last updated: 2026-03-14

## Guardrails

- `README.md` is the product authority.
- Favor spec names over legacy repo wording.
- Build freely, clean as you go; do not enforce a blanket "repurpose before invent" rule.
- Keep privacy-first behavior intact.
- Keep HomeDream private-source logic separate from ViewProfile output logic.
- Keep DreamAds separate from platform promotion systems.
- Keep AI roles separated: Dr. Eams user-facing, IDARi admin-only, TheBoogieMan.Ai enforcement.
- Keep Node 25, pnpm, Next.js 16+, and Supabase assumptions stable unless a real repo need requires change.

---

## Hard Blocks vs Advisory Checks

**The app is action-first.** Guard rails must not intercept normal user actions.
Only wrap truly dangerous cases with hard blocks.

### Hard blocks (always enforce — gate the action)
- Any mutation (POST/PUT/DELETE) without `supabase.auth.getUser()` check → **block**
- Admin or owner-only routes accessed by non-admin users → **block**
- Destructive deletes without confirmed ownership verification → **block**
- Writing data to a profile or workspace that belongs to another user → **block**

### Advisory only (log, warn, or annotate — never gate normal flow)
- TypeScript type errors (pre-existing errors exist; Next.js SWC build skips type validation)
- ESLint lint warnings (style, best-practices — do not fail the pipeline)
- `TODO` / `FIXME` comments in non-critical paths
- Optional feature checks (connector availability, optional platform capabilities)

### CI / Build gates
- **Build failing** → always a hard gate. The `pnpm run build` step must pass.
- **Tests failing** → hard gate. `pnpm run test:ci` must pass.
- **Lint warnings** → advisory. `continue-on-error: true` in workflow.
- **Typecheck warnings** → advisory. `continue-on-error: true` in workflow.

See `docs/ACTION_AUDIT.md` for a full label of every user-facing action.
