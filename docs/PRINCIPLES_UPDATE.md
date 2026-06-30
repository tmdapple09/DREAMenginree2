# SICC Principles Update — Stylized → Synchronized

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

> **Change Date:** 2026-04-14 (confirmed 2026-07 Generation Law MANIFEST pass)  
> **Author:** Idari (admin AI) + Spec-Engin HyperSICC

---

## Current SICC Definition

**S — Synchronized** · **I — Intuitive** · **C — Coherent** · **C — Cohesive**

| Letter | Principle        | Meaning |
|--------|-----------------|---------|
| **S**  | **Synchronized** | Real-time coordination across runtimes, shared state, collaborative actions, and immediate feedback |
| **I**  | Intuitive        | Natural interaction, no manuals, gestures feel obvious |
| **C**  | Coherent         | Clear logic, consistent naming, predictable behavior |
| **C**  | Cohesive         | All parts (Engins, Daydreams, Dream Windows) fit together as a unified spatial OS |

---

## Summary of Change

SICC updated: **"Stylized" replaced with "Synchronized"** to emphasize real-time collaboration
over visual decoration.

---

## Old SICC (archived)

| Letter | Principle  | Meaning |
|--------|------------|---------|
| S      | Stylized   | Consistent design language, tokens, and visual identity |
| I      | Intuitive  | Discoverable interactions, clear affordances, accessible |
| C      | Coherent   | Clear logic, consistent naming, predictable behavior |
| C      | Cohesive   | All parts (Engins, Daydreams, Dream Windows) fit as a unified spatial OS |

---

## Rationale

The original emphasis on "Stylized" led to excessive focus on visual design (UI effects,
animations, gold accents) at the expense of functional connectivity. The new first principle,
**Synchronized**, redirects the platform's energy toward:

- Real-time state coordination between runtimes and peers
- Low-latency feedback on all user actions
- Shared state that stays consistent across Dream Windows and Engins
- Collaborative actions visible to all connected participants immediately

Visual quality remains important through the Cohesive and Coherent principles — design tokens,
consistent border radii, and transition timing are still tracked in `SICC_GLOBAL_CRITERIA`.
The change removes "Stylized" as a *first principle* to prevent over-indexing on decorative work
when synchronization features are incomplete.

---

## Files Changed

| File | Change |
|------|--------|
| `lib/feature-build/uiQualityCriteria.ts` | `SICCDimension` type: `'stylized'` → `'synchronized'`; section header; `SICC_DIMENSIONS` entry |
| `tests/feature-build.test.ts` | All test arrays and assertions updated |
| `components/connectors/dream.widget.ConnectorWidgetPicker.tsx` | Comment: `S.I.C.C. — Stylized…` → `S.I.C.C. — Synchronized…` |
| `components/dream.LandingHero.tsx` | Comment updated |
| `components/home/dream.DaydreamPulseStrip.tsx` | Comment updated |
| `lib/feature-build/buildCycle.ts` | Comment updated |
| `docs/AXIOMS.md` | Axiom 4 updated from "Stylized" to "Synchronized" |
| `CHANGELOG.md` | Entry documenting the change |
| `docs/PRINCIPLES_UPDATE.md` | This file |

### Not changed

- CSS class names prefixed `sicc-` (e.g. `sicc-shimmer`, `sicc-glass-in`) — design
  system identifiers unrelated to the principle name.
