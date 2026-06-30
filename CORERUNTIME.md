# DREAMengin Runtime Specification

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

This document defines how the runtime behaves at the implementation level. It describes lifecycle, context separation, routing, synchronization, persistence, and module loading.

## 2. Runtime Topology

DREAMengin runs as a multi-surface runtime with these canonical contexts:

- **HomeDream**: persistent personal context
- **DreamSpace**: project or world context
- **DreamDMBar**: orchestration seam between contexts
- **SharedDream**: collaborative runtime state shared by multiple users
- **Engin Runtime Instances**: module-level execution contexts

Each runtime context must be able to:
- mount
- suspend
- resume
- snapshot
- restore
- duplicate
- detach
- reattach

## 3. Runtime Lifecycle

A runtime surface moves through this lifecycle:

1. `BOOT`
2. `HYDRATE`
3. `MOUNT`
4. `ACTIVE`
5. `IDLE`
6. `SUSPEND`
7. `RESUME`
8. `SNAPSHOT`
9. `DESTROY`

### Lifecycle Rules

- `BOOT` initializes engine singletons and transport adapters.
- `HYDRATE` restores persisted state and runtime graph.
- `MOUNT` attaches the runtime to the visible UI.
- `ACTIVE` allows intents, gestures, and collaboration.
- `SUSPEND` pauses rendering and subscriptions.
- `SNAPSHOT` captures state for recovery or duplication.
- `DESTROY` fully removes listeners and resources.

## 4. Intent Bus

The Intent Bus is the only valid path for behavior change.

### Intent Envelope

```ts
type IntentEnvelope<TType extends string, TPayload> = {
  id: string;
  type: TType;
  sourceRuntimeId: string;
  targetRuntimeId?: string;
  actorId: string;
  timestamp: string;
  priority: "low" | "normal" | "high" | "system";
  payload: TPayload;
};
```

### Intent Requirements

- Every intent must be typed.
- Every intent must be validated.
- Every intent must have a deterministic handler.
- Handlers must be idempotent where possible.
- Intents must be serializable for transport and replay.

### Intent Categories

- surface actions
- runtime actions
- Engin actions
- collaboration actions
- synchronization actions
- security actions
- persistence actions
- system actions

## 5. Event Bus vs Intent Bus

- **Intent Bus**: user-driven or system-driven action requests
- **Event Bus**: emitted facts about completed state transitions

An intent asks for change. An event records that change happened.

## 6. DreamDMBar Transport

DreamDMBar is the visible transport seam. It must support:

- local exchange between UI regions
- runtime switching
- object transfer
- drag/drop forwarding
- clipboard forwarding
- collaboration presence
- runtime targeting

### Transport Layers

1. **Intra-page state** for same-tree communication.
2. **BroadcastChannel** for same-origin windows/tabs.
3. **WebSocket / Realtime** for multi-device collaboration.
4. **Persistence-backed replay** for recovery and offline reconciliation.

## 7. Dual Runtime Coordination

HomeDream and DreamSpace must coexist without sharing implementation details.

### Required APIs

- `activateHomeDream()`
- `activateDreamSpace(spaceId)`
- `openDreamSpace(parentId?)`
- `duplicateDreamSpace(spaceId)`
- `suspendRuntime(runtimeId)`
- `restoreRuntime(runtimeId)`
- `transferObject(objectId, fromRuntimeId, toRuntimeId)`

### Coordination Rules

- A runtime can be active, backgrounded, or detached.
- A runtime may host multiple surfaces.
- The same object may be mirrored or linked across surfaces.
- State ownership must remain unambiguous.

## 8. State Model

State is split into:

- **Ephemeral state**: current UI and interaction state
- **Runtime state**: persistent state for a runtime surface
- **Shared state**: collaborative state visible to multiple users
- **Global state**: system identity, permissions, registry, and configuration

Ephemeral state must never be treated as authoritative.

## 9. Persistence Model

Persistence must support:
- snapshots
- incremental updates
- object-level writes
- runtime-level writes
- historical replay
- version migration

Recommended storage categories:
- relational DB for identity, permissions, indexes, manifests
- CRDT-backed storage for collaborative documents and shared objects
- object storage for large binary assets
- edge cache for runtime boot data

## 10. Synchronization

Synchronization should use:
- local optimistic updates
- CRDT merge for shared collaborative objects
- authoritative commit for privileged operations
- replay logs for recovery

### Sync Contract

All shared objects must expose:
- version
- last known author
- conflict policy
- merge strategy
- persistence target

## 11. Module Loading

Engins must load dynamically.

Loading lifecycle:
1. discover manifest
2. validate manifest
3. resolve dependencies
4. load module
5. initialize context
6. mount UI or behavior
7. subscribe to intents
8. unload safely

## 12. Rendering Model

Rendering is a concern of the UI layer, but the runtime must expose:
- viewport state
- scene state
- runtime hierarchy
- surface focus state
- performance hints

The runtime must not hardcode rendering technology, but it should support:
- React
- Next.js App Router
- canvas-based surfaces
- Babylon.js/WebGPU surfaces
- worker-backed rendering

## 13. Recovery and Offline

The runtime must support:
- local queueing
- reconnect replay
- conflict reconciliation
- restored sessions
- partial runtime resume

## 14. Required Events

At minimum the runtime must emit:
- `runtime.booted`
- `runtime.hydrated`
- `runtime.mounted`
- `runtime.activated`
- `runtime.suspended`
- `runtime.snapshotted`
- `runtime.destroyed`
- `intent.dispatched`
- `intent.handled`
- `object.transferred`
- `shared.object.merged`
- `presence.updated`
