# DREAMengin Axioms

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

> Authoritative bar/runtime model lives in `docs/LAW.md` §0 Bar Ownership Law.

Status: active alignment axioms  
Last updated: 2026-04-21

These axioms are the repo-level interpretation of the current product direction.

## Build axioms

1. **Coherent** — the system should read as one runtime, not a pile of unrelated surfaces.
2. **Cohesive** — naming, routing, docs, and UI language should reinforce the same runtime structure.
3. **Intuitive** — interactions should feel obvious and direct. Navigation should feel like depth, not surface switching.
4. **Synchronized** — real-time coordination across runtimes, shared state, collaborative
   actions, and immediate feedback. (Formerly "Stylized" — see `docs/PRINCIPLES_UPDATE.md`.)
   Visual quality continues to be enforced through Coherent + Cohesive principles.
5. **DreamR-first** — start with a stable core and move feature variance into swappable
   rule-sets. DreamR is the first reference split: durable runtime core,
   separate feed surface, separate algorithm/rule-set layer.

## Architectural commandment

Build new systems the way DreamR is structured:
- the **core** owns runtime state, events, visibility boundaries, and durable contracts
- the **rule-set** owns ranking, transforms, presets, thresholds, and feature-specific variation
- new product behavior should enter through rule-set composition before any core rewrite
- if a request needs a feature-specific fork in the core, the architecture boundary is wrong

## Product integrity rules

These are always in force:
- nothing is public by default
- all creation starts private
- every visible action must do something real
- no fake buttons
- no accidental sharing
- no hidden posting
- no system bypass of privacy rules

## OS-layer naming rules

Always in force:
- Say **surface**, not page
- Say **Dream Window**, not widget or card
- Say **DreamSpace**, not widget layer
- Say **HomeDream Surface** or **primary surface**, not top area
- Say **runtime**, not app
- Say **runtime environment**, not platform
- Say **surface switching**, not tab navigation
- Say **bind / mount / activate**, not link widget / open page / launch card
- Say **connection path**, not pair

## Alignment rule

When an older doc or code path conflicts with the README naming model or the canonical OS-layer naming model, the canonical naming authority wins.
