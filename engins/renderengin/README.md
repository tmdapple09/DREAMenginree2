# Render service

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
