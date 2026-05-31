# DREAMengin Core Architecture

## 1. Purpose

DREAMengin is a runtime composition system: a fixed engine provides universal services, and behavior is expressed through swappable rule sets and modular Engins. The architecture must preserve a single source of truth for core services while allowing the product surface to evolve without rewriting the engine.

## 2. Structural Model

The platform has five primary layers:

1. **Core Engine**  
   Owns state, events, security, transport, persistence, lifecycle, and synchronization.

2. **Runtime Surfaces**  
   HomeDream, DreamSpace, and future surfaces. A surface is a user-facing runtime container, not merely a page.

3. **DreamDMBar**  
   The exchange and orchestration seam between surfaces. It routes intents, tracks active context, and mediates transfers.

4. **Engins**  
   Capability modules. Engins contain behavior, UI entrypoints, and data contracts.

5. **Rulesets**  
   Declarative behavior definitions that parameterize the core engine without replacing it.

## 3. Core Laws

### Law 1: One Engine
Universal concerns must remain centralized. No Engin may duplicate state management, auth logic, transport policy, or sync policy.

### Law 2: Behavior Is External
Feature behavior belongs in rulesets or Engin modules. The engine remains stable; the behavior changes.

### Law 3: Communication Is Intent-Based
Engins do not talk to each other directly. All cross-module communication flows through the Intent Bus.

### Law 4: Runtime Surfaces Are Recursive
DreamSpaces can contain DreamSpaces. The runtime must support nested surfaces without changing the model.

### Law 5: Visibility Has Three States
Objects are Local, Shared, or Global. Visibility is explicit and enforced by the runtime.

### Law 6: Dual Runtime Is Native
HomeDream and DreamSpace are two canonical runtime contexts. The system must support both independently and together.

### Law 7: DMBar Is Transport
DreamDMBar is not navigation. It is the visible seam for routing, exchange, and orchestration across surfaces.

## 4. Domain Objects

All domain objects must inherit a common envelope:

```ts
type DomainObject<TType extends string, TData> = {
  id: string;
  type: TType;
  ownerId: string;
  runtimeId: string;
  visibility: "local" | "shared" | "global";
  createdAt: string;
  updatedAt: string;
  version: number;
  data: TData;
};
```

This envelope should be used for:

- Dreams
- DreamSpaces
- Engins
- Rulesets
- Intents
- Memories
- Agents
- Windows
- Assets
- Shared objects

## 5. Identity and Ownership

Ownership is layered:

- **User ownership**: who created or controls the object.
- **Runtime ownership**: which runtime surface currently hosts it.
- **Shared ownership**: which participants may mutate it.
- **Global ownership**: system-level or published artifacts.

Ownership must not be implied by UI placement. It must be explicit in the object model.

## 6. Permission Model

All actions must be authorized through capability-based checks:

- `read`
- `write`
- `share`
- `move`
- `duplicate`
- `publish`
- `destroy`
- `admin`

Every capability check should consider:
- actor identity
- runtime context
- object visibility
- surface scope
- collaboration state

## 7. Ruleset Model

Rulesets are declarative behavior definitions. A ruleset may define:
- triggers
- transformations
- constraints
- display parameters
- default values
- compatibility requirements

Rulesets cannot directly own transport, persistence, or auth.

## 8. Implementation Boundaries

The architecture must keep these concerns separate:

- **Engine**: state, bus, transport, security, lifecycle
- **Engins**: features and capabilities
- **Rulesets**: declarative behavior
- **UI surfaces**: presentation and gesture handling
- **Storage**: persistence and snapshots
- **Sync**: collaboration and reconciliation

## 9. Non-Goals

The engine should not:
- embed feature-specific business logic
- hardcode product behavior
- couple UI state to persistence format
- depend on one specific Engin
- assume desktop-only workflows

## 10. Required Outputs

Any implementation must provide:
- runtime lifecycle hooks
- manifest validation
- object schema validation
- intent routing
- sync transport abstraction
- permission enforcement
- state snapshotting
- compatibility negotiation
