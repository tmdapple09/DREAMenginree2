# Render service

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

Render is the shared DREAMengin rendering service. It is not a standalone creative Engin. ContentEngin, GameEngin, CodeEngin, LabEngin, HomeDream, DreamSpace, Daydream, and DreamDMBar route render work through `render.*` intents.

## Current support

- Canonical id: `render`.
- Runtime pipeline: User Action → Intent → Runtime Orchestration → Capability Resolution → Engin Execution → State Mutation → Event Distribution → Surface Update.
- OBJ/GLB parsing, mesh validation, asset manifests, memory estimates, and server RLS for `render_assets`.
- Scene graph domain objects, parent/child transforms, selection, serialization, undo/redo, layers, cameras/lights/environment slots.
- WebGPU viewport with albedo texture binding, shadow-map sampling, per-object uniforms, depth buffer, resize, snapshots, fallback 2D renderer, and explicit disposal.
- Viewport control utilities for orbit, pan, zoom, pinch zoom, fit-to-bounds, picking/raycasting, transform gizmo deltas, axis helper, and bounding boxes.
- Performance proof utilities for frame pacing, dropped frames, GPU latency budget, and 10M-poly proof envelopes.

## Future / not yet certified

- Production hardware timestamp-query capture on real devices.
- Live iPhone thermal certification and signed 10M-poly benchmark artifacts.
- Full DQS skinning render path.
- WebGPU compute-driven meshlet/indirect drawing path.

## Ownership boundary

Core Engine owns auth, state, lifecycle, transport, persistence, sync, and collaboration. Render owns render interpretation, GPU resource lifecycles, shader inputs, and compatibility negotiation. Other Engins call Render only by emitting `render.*` intents.
