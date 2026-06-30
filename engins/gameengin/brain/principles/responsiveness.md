# Principle: Responsiveness

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

## Definition
The game must feel like a direct extension of the player's intent. Input
latency, frame rate, and control predictability are paramount.

## Quantifiable Targets (Web Environment)
| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| End-to-end latency | < 50 ms | `performance.now()` from input event to frame commit |
| Frame time | 16.67 ms (60 FPS) | `requestAnimationFrame` delta |
| Coyote time frames | 6 frames | Game logic counter |
| Input buffer frames | 8 frames | Game logic counter |
| Jump variable height | Hold to rise, release to fall faster | Gravity multiplier on jump hold |

## Implementation (WebGPU/Babylon.js)
- Use fixed timestep (60 Hz) for physics in WASM.
- Process all inputs once at the start of `requestAnimationFrame`.
- Avoid `setTimeout`/`setInterval` for game logic.
- Use Web Workers for Draco/Basis decoding to keep main thread free.

## Anti-Patterns to Avoid
- Variable frame rate physics.
- Reading input state mid-frame after physics has started.
- Blocking the main thread with synchronous asset decoding.

## Source Games Analyzed
- Celeste (2018): 6-frame coyote time, 8-frame input buffer.
- Super Meat Boy (2010): Instant respawn, tight air control.
- Hollow Knight (2017): Responsive dash, predictable knockback.
