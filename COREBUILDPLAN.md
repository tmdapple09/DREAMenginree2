# DREAMengin Build Plan

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

## 1. Purpose

This document defines the implementation order from current repository state to final runtime composition platform.

## 2. Governing Rule

Build the platform in this order:

1. stabilize the engine
2. formalize contracts
3. unify runtime surfaces
4. harden transport
5. support collaboration
6. enable Engin composition
7. add SharedDream
8. add AI agents
9. scale into a platform

Do not build product features before the contracts are stable.

## 3. Phase 0 — Audit Consolidation

### Goals
- remove dead code
- eliminate duplicate architecture paths
- stabilize imports
- fix broken types
- unify naming

### Deliverables
- green build
- passing typecheck
- stable registry
- stable runtime boot path

## 4. Phase 1 — Core Runtime Stabilization

### Goals
- finalize runtime lifecycle
- finalize Intent Bus
- finalize Event Bus
- finalize object envelope
- finalize permissions model

### Deliverables
- `COREARCHITECTURE` laws implemented
- `CORERUNTIME` APIs implemented
- runtime snapshot/restore working
- base persistence path working

## 5. Phase 2 — DreamDMBar and Surface Coordination

### Goals
- make DreamDMBar the visible exchange layer
- support runtime switching
- support object transfer
- support clipboard transfer
- support nested surface opening

### Deliverables
- `activateHomeDream`
- `activateDreamSpace`
- `duplicateDreamSpace`
- `transferObject`
- `openNestedDreamSpace`

## 6. Phase 3 — Engin Platform

### Goals
- formalize Engin manifest
- create SDK
- load Engins dynamically
- mount/unmount Engins safely
- enforce permissions and compatibility

### Deliverables
- Engin registry
- Engin manifest validator
- Engin lifecycle manager
- Engin surface host
- Engin test harness

## 7. Phase 4 — UX Completion

### Goals
- make the mobile interaction model complete
- make desktop enhancement mode consistent
- make transfer gestures intuitive
- make DreamDMBar interaction legible

### Deliverables
- HomeDream UI completion
- DreamSpace UI completion
- mobile touch interactions
- desktop layouts
- gesture framework
- runtime feedback system

## 8. Phase 5 — Collaboration and SharedDream

### Goals
- add shared runtime state
- add presence
- add collaboration permissions
- add merge and replay
- add shared object ownership

### Deliverables
- CRDT layer
- multi-user presence
- shared cursors/focus
- shared object sync
- collaboration session lifecycle

## 9. Phase 6 — AI Runtime

### Goals
- add native agent model
- add agent memory
- add agent permissions
- let agents act through the same runtime laws

### Deliverables
- Agent model
- Agent Engin
- memory stores
- agent action bus
- AI-safe permissions

## 10. Phase 7 — Persistence, Publishing, and Distribution

### Goals
- support published Dreams
- support versioned runtime artifacts
- support replayable sessions
- support shareable runtime packages

### Deliverables
- publish flow
- import flow
- version snapshots
- runtime package format
- asset distribution model

## 11. Phase 8 — Scale and Hardening

### Goals
- performance
- observability
- security
- testing
- upgrade strategy

### Deliverables
- automated test suite
- e2e multi-device collaboration tests
- logging and metrics
- permission audits
- transport resilience
- load testing

## 12. MVP Definition

The first meaningful version must support:
- HomeDream
- DreamSpace
- DreamDMBar
- at least 3 Engins
- runtime switching
- object transfer
- local persistence
- clear mobile UX

## 13. Final-State Definition

The final platform must support:
- recursive DreamSpaces
- SharedDream collaboration
- Engin SDK
- AI runtime actors
- object portability
- rule-set based behavior
- reliable sync
- publish/import of Dreams
- phone-first and desktop-enhanced workflows

## 14. Success Criteria

The platform is ready for final form when:
- the core engine does not change for feature work
- new behavior ships as Engins or rulesets
- users can compose experiences without code
- shared runtime collaboration is stable
- mobile workflow feels native
- the platform can recover from offline and sync loss
