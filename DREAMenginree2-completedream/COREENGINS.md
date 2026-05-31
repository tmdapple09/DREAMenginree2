# DREAMengin Engin Specification

## 1. Purpose

Engins are modular capability units. They are not just pages or widgets. An Engin packages behavior, UI, inputs, outputs, permissions, and lifecycle into a reusable runtime module.

## 2. Definition

An Engin is a domain-specific capability container with:
- a manifest
- a runtime implementation
- a surface or UI entrypoint
- typed inputs and outputs
- declared permissions
- a mount and unmount lifecycle

## 3. Manifest Contract

Every Engin must provide a manifest.

```ts
type EnginManifest = {
  enginId: string;
  name: string;
  version: string;
  description: string;
  category: string;
  entrypoint: string;
  uiEntrypoint?: string;
  inputs: Record<string, EnginPort>;
  outputs: Record<string, EnginPort>;
  permissions: EnginPermissions;
  runtimeRequirements?: EnginRuntimeRequirements;
  dependencies?: string[];
  compatibility?: string[];
};
```

## 4. Port Contract

```ts
type EnginPort = {
  type: string;
  required?: boolean;
  defaultValue?: unknown;
  description?: string;
};
```

Ports define what an Engin accepts and emits.

## 5. Permissions

An Engin must declare permissions explicitly.

Examples:
- `read:memory`
- `write:memory`
- `read:workspace`
- `write:workspace`
- `publish:object`
- `use:clipboard`
- `use:network`
- `use:camera`
- `use:microphone`
- `use:gpu`
- `use:storage`

No permission is assumed by default.

## 6. Lifecycle

An Engin must support this lifecycle:

1. discover
2. validate
3. register
4. load
5. initialize
6. mount
7. active
8. suspend
9. resume
10. unmount
11. destroy

## 7. Runtime Context

When mounted, an Engin receives:
- runtimeId
- surfaceId
- userId
- permission grants
- bus handle
- storage handle
- sync handle
- object references
- theme/environment data

An Engin must never infer these from global state.

## 8. Communication Model

Engins may communicate only through:
- Intent Bus
- Event Bus
- declared ports
- runtime-provided callbacks

Direct Engin-to-Engin coupling is prohibited.

## 9. UI Model

An Engin may provide:
- a full-screen surface
- a panel
- a card
- a node
- a controller
- a tool palette
- a background process

The runtime must know which presentation mode is requested.

## 10. Capability Types

Core Engin classes may include:
- document Engins
- memory Engins
- media Engins
- social Engins
- AI Engins
- simulation Engins
- commerce Engins
- utility Engins
- rendering Engins

## 11. Composition

Engins may expose sub-capabilities. Those sub-capabilities are not full Engins, but they can be promoted into standalone Engins if needed.

## 12. Compatibility

A compatibility graph must exist between Engins and runtime surfaces.

Examples:
- a media Engin may require shared storage
- a simulation Engin may require GPU support
- an AI Engin may require agent permissions
- a collaboration Engin may require SharedDream sync

## 13. Event Contract

Engins must be able to emit and consume standardized events:
- `engin.mounted`
- `engin.unmounted`
- `engin.intent.received`
- `engin.output.emitted`
- `engin.permission.requested`
- `engin.permission.denied`
- `engin.sync.updated`

## 14. Registry

The Engin registry must support:
- discover
- register
- version resolution
- capability lookup
- compatibility lookup
- dynamic load
- safe unload
- dependency tracking

## 15. Example Engin Classes

### Home / Navigation
- `HomeEngin`
- `DreamDMBarEngin`

### Creation
- `CodeEngin`
- `LabEngin`
- `ForgeEngin`

### Simulation
- `GameEngin`
- `WorldEngin`

### Media
- `MediaEngin`
- `SoundEngin`

### Collaboration
- `SharedDreamEngin`
- `PresenceEngin`

### AI
- `AgentEngin`
- `MemoryEngin`

### Commerce
- `MarketEngin`
- `CheckoutEngin`

## 16. SDK Requirements

The SDK must provide:
- manifest generator
- type generator
- event helper
- permission helper
- mount helper
- test harness
- local demo runtime
- compatibility checker

## 17. Packaging

Engins may be delivered as:
- in-repo modules
- federated remotes
- dynamic imports
- package bundles

The runtime must treat all packaging modes identically once loaded.
