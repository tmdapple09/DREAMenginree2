# AI MAP

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

## ENTRY ORDER (STRICT)
1. `/README.md`
2. `/docs/AI_MAP.md`
3. `/docs/REPO_STRUCTURE_CONTRACT.md`
4. `/app`
5. `/components`
6. `/lib`

---

## SYSTEM OVERVIEW
- `app/` → product routes + API endpoints
- `components/` → UI and surface components
- `lib/` → shared logic, adapters, utilities
- `.github/workflows/` → active CI/CD automation
- `system/` → archived/operational infrastructure artifacts
- `docs/` → architecture, policy, guides, logs
- `assets/` → non-runtime static asset archives
- `experiments/` → unstable and non-authoritative work

---

## CANONICAL ROOT LAYOUT
Canonical root entries are enforced to:
- `app/`, `components/`, `lib/` (temporary), `engins/`, `games/`
- `core/`, `system/`, `agents/`
- `docs/`, `assets/`, `.github/`, `public/`, `styles/`, `tests/`, `scripts/`
- root config/runtime files only (`package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `next.config.mjs`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.js`, `tailwind.config.ts`, `README.md`, `LICENSE`, `vercel.json`, optional `instrumentation.ts`, optional `middleware.ts`, env/gitignore files)

Enforcement:
- `/.github/scripts/check-root-hygiene.sh`
- `/.github/workflows/root-hygiene.yml`

---

## WHERE TO LOOK
### Product logic
`/app`, `/components`, `/lib`

### Important configs
Root config files (`next.config.mjs`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.*`, `tailwind.config.ts`, `package.json`)

### Active automations
`/.github/workflows`

### Cleanup and governance
`/docs/REPO_STRUCTURE_CONTRACT.md`

---

## IGNORE BY DEFAULT
- `/assets/images`
- `/system/ci/archive`
- `/agents/archive`
- `/docs/logs`
- `/experiments`

---

## GOAL
Understand system behavior quickly with deterministic navigation.
