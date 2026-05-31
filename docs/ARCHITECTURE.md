```
# DREAMengin Architecture Specification

This document defines the permanent technical architecture of the DREAMengin
codebase. It describes what subsystems exist, where they live, what they own,
and how they communicate. The architecture is authoritative: when implementation
and architecture conflict, the implementation must be corrected.

---

## Foundational Invariants

1.  **The Runtime Kernel is the sole authority for state mutation.**
2.  **All behavior variation is expressed through rule-sets.**
3.  **Engins are isolated capability domains.**
4.  **Surfaces are presentation layers and do not own business logic.**
5.  **Intents are the only mechanism for requesting change.**
6.  **Cross-context communication occurs through registered channels.**

---

## 1. RUNTIME KERNEL

### Purpose
Ultimate authority for state, events, I/O, security, transport,
orchestration, and lifecycle. The kernel is the sole executor of Intents;
every meaningful state change passes through it.

### Core Files
`lib/runtime/EnginDispatcher.ts` – Intent routing  
`lib/runtime/dreamOSBus.ts` – Global event bus  
`lib/runtime/moduleRegistry.ts` – Module/Engin registry  
`lib/runtime/dualRuntime.ts` – Dual‑runtime state machine  
`lib/runtime/dualRuntimeBridge.ts` – Cross‑context bridge  
`lib/runtime/memory.ts` – Shared memory layout  
`lib/runtime/instanceManager.ts` – Runtime instance lifecycle  
`lib/runtime/runtimeChannel.ts` – Local / realtime channels  
`lib/runtime/runtimeContainer.ts` – Logical container  
`lib/runtime/seamClipboard.ts` – Cross‑context clipboard  
`lib/runtime/coercionTable.ts` – Drop/payload coercion  
`lib/runtime/dropTargetRegistry.ts` – Registered drop handlers  
`lib/runtime/offlineQueue.ts` – Offline mutation queue  
`lib/runtime/sharedResourcePool.ts` – Managed shared resources  
`lib/runtime/swapManager.ts` – Context swap state  
`lib/runtime/channelMetrics.ts` – Telemetry for channels  

### Relationships
Receives Intents from every surface; routes them to handlers via the
registry; publishes state mutations to the bus; coordinates dual‑runtime
state through the bridge; persists state to Supabase; replays offline
mutations.

### Contribution Rules
- Register new module keys only through the registry.
- Add utilities in `lib/runtime/` only if truly universal.
- Preserve the dispatcher contract; never embed feature logic in kernel files.

### Prohibitions
- No direct UI state mutation.
- No hidden stores outside the runtime.
- No bypassing the dispatcher.

---

## 2. INTENT SYSTEM

### Purpose
Intents are the universal mechanism for requesting change. This system
defines the Intent envelope, the dispatch lifecycle, and the global bus
contract. Every surface, Engin, and agent uses Intents to communicate
with the runtime.

### Core Files
`lib/runtime/EnginDispatcher.ts` – Receives, authorizes, and routes Intents  
`lib/runtime/dreamOSBus.ts` – Publish/subscribe bus for state and events  
`types/ai-system.ts` – Intent envelope schema (also used by AI)  
`lib/ai/schemas.ts` – Zod schemas for Intent validation  

### Intent Lifecycle
1. **Emission** – A surface, Engin, or agent dispatches an Intent.
2. **Authorization** – The kernel checks the user’s role and the target Engin’s
   permissions (capability gate).
3. **Routing** – The dispatcher looks up the handler in the Module Registry.
4. **Execution** – The handler (often a rule‑set) applies constraints,
   transformations, and state mutations.
5. **Publication** – The resulting state change is published on the bus.
6. **Reaction** – Subscribers (surfaces, Engins) update accordingly.

### Bus Contract
- All state mutations are published as typed events on `dreamOSBus`.
- Subscribers register by event type; the bus ensures decoupling.
- Events are synchronous within a context and relayed across contexts via
  the dual‑runtime bridge.

### Contribution Rules
- Every new action must be modelled as an Intent with a typed schema.
- Intent handlers must be registered in the Module Registry.
- Intents are never fired directly at a surface; surfaces only subscribe.

### Prohibitions
- No ad‑hoc state changes outside the Intent lifecycle.
- No surface‑to‑surface direct communication.

### Terminology
- **Intent** – A request for change (e.g., "CreateObject", "MoveWidget").
- **Event** – A notification that a change has occurred (published on the bus).
- **Command** – An Intent that is expected to produce a side‑effect.
- **Query** – A read‑only request for current state (routed separately, never mutates).

---

## 3. RULESET ARCHITECTURE

### Purpose
The core engine is immutable. All variable behaviour is defined by
replaceable rule‑sets. A rule‑set is a pure, declarative module that
specifies constraints, transformations, parameters, capabilities, and
workflow composition. It never contains infrastructure, side effects,
React hooks, persistence, or network calls.

### Core Files
`lib/engin-runtime/EnginRuleSetContract.ts` – Rule‑set type contract  
`lib/engins/brand/brandEnginRuleSet.ts`  
`lib/engins/code/codeEnginRuleSet.ts`  
`lib/engins/content/contentEnginRuleSet.ts`  
`lib/engins/game/gameEnginRuleSet.ts`  
`lib/engins/lab/labEnginRuleSet.ts`  
`lib/engins/music/starMakerEnginRuleSet.ts`  
`src/dream/rulesets/*/index.ts` – Per‑surface rule‑set stubs  
`src/engin/generated/rulesets.ts` – Auto‑generated registry  

### Relationships
The engine reads rule‑sets to constrain Intents, transform state, and
validate outputs. Engin runtimes consume their rule‑set to derive
behaviour. The generated registry ensures consistency between code and
declarations.

### Contribution Rules
- When behaviour changes but infrastructure does not, update the rule‑set.
- Keep rule‑sets declarative, deterministic, and free of side effects.
- Register new rule‑sets in the generated registry.

### Prohibitions
- No executable logic inside rule‑set files.
- No side effects (API calls, DOM access, timers).
- No unregistered rule‑sets.
- No rule‑set that modifies the engine’s own responsibilities.

---

## 4. TYPE SYSTEM & CONTRACTS

### Purpose
Canonical structural definitions for the entire system: Intents, manifests,
runtime state, connector schemas, database models, journey dots, etc.
The type layer is the authoritative definition of structure; all
implementations must conform.

### Core Files
`types/ai-system.ts` – Intent envelopes and AI schemas  
`types/module-manifest.ts` – Engin registration contracts  
`types/connector.ts` – Social connector data models  
`types/dream-window.ts` – Window lifecycle and state  
`types/dreamArtifact.ts` – Shared artifact definitions  
`types/widget-system-v2.ts` – Widget and feed contracts  
`types/journey.ts` – Journey dot structures  
`types/spatial.ts` – Spatial layout types  
`types/supabase.ts` – Database schema types  

### Relationships
All other subsystems import from here. Every Intent, manifest, and state
update is validated at runtime boundaries using Zod schemas derived from
these types.

### Contribution Rules
- Define new types in `types/` before implementing logic.
- Extend contracts only when behaviour changes; never duplicate.
- Ensure Zod validation schemas match the exported TypeScript types exactly.

### Prohibitions
- No duplicate or ad‑hoc type definitions outside `types/`.
- No untyped data crossing runtime boundaries.

---

## 5. ENGIN SYSTEM

### Purpose
Engins are the bounded, modular capability units of DREAMengin. Each
Engin represents a creative domain and is composed of a manifest, a
rule‑set, a runtime adapter, and UI components. Engins are loaded,
mounted, and swapped without changing the core engine.

### Core Files – Implementations
`engins/engin.BrandingEngin.tsx`  
`engins/engin.CodeEngin.tsx`  
`engins/engin.ContentEngin.tsx`  
`engins/engin.GameEngin.tsx`  
`engins/engin.LabEngin.tsx`  
`engins/engin.StarMakerEngin.tsx`  
`engins/dream.ForgeEngin.tsx`  
`engins/dream.panel.AnalyticsEngin.tsx`  
`engins/portfolio/dream.PortfolioEngin.tsx`  
`engins/autoopen/dream.AutoOpenGameEngin.tsx`  

### Core Files – Runtime Adapters
`lib/engin-runtime/EnginRuntime.ts`  
`lib/engin-runtime/EnginBaseState.ts`  
`lib/engin-runtime/EnginCapabilities.ts`  
`lib/engin-runtime/EnginEventBus.ts`  
`lib/engin-runtime/EnginIOAdapter.ts`  
`lib/engins/brand/useBrandEnginRuntime.ts`  
`lib/engins/code/useCodeEnginRuntime.ts`  
`lib/engins/content/useContentEnginRuntime.ts`  
`lib/engins/game/useGameEnginRuntime.ts`  
`lib/engins/lab/useLabEnginRuntime.ts`  
`lib/engins/music/useStarMakerEnginRuntime.ts`  

### Manifest Schema (example)
```json
{
  "name": "CodeEngin",
  "enginId": "code",
  "version": "1.0.0",
  "entryScript": "engin.CodeEngin.js",
  "ui": "CodeEnginUI.html",
  "inputs": { "code": { "type": "string" } },
  "outputs": { "result": { "type": "data" } },
  "permissions": { "networkAccess": ["api.github.com"], "clipboard": true }
}
```

### Relationships
The engine registers Engins via the ModuleRegistry. Runtimes feed the
rule‑set to the EnginRuntime adapter, which connects to the bus and
dual‑runtime bridge. UI surfaces mount Engins through shell components
and dispatch Intents upward.

### Contribution Rules
- Every new Engin requires a manifest, a rule‑set, and a runtime.
- UI must stay in `components/engines/<name>/`; rule‑set logic in `lib/engins/<name>/`.
- Engins communicate only through the bus.

### Prohibitions
- No surface‑owned feature logic inside Engin UI.
- No side effects in rule‑sets.
- No Engin that cannot be described by a manifest.

---

## 6. DUAL RUNTIME (Cross‑Context Orchestration)

### Purpose
Orchestrate parallel runtime contexts (HomeDream and DreamSpace) sharing
authoritative state. Enable drag, teleport, and workflow transfer between
them.

### Core Files
`lib/runtime/dualRuntime.ts`  
`lib/runtime/dualRuntimeBridge.ts`  
`lib/runtime/runtimeChannel.ts`  
`lib/runtime/runtimeContainer.ts`  
`components/runtime/dream.DualRuntimeContainer.tsx`  
`components/runtime/dream.RuntimeView.tsx`  

### Relationships
The bridge uses BroadcastChannel for intra‑browser sync and WebSocket/
Supabase Realtime for cross‑device. The dual‑runtime state machine
determines which context is dominant.

### Contribution Rules
- All cross‑context messages must go through the bridge.
- Offline mutations must be queued and replayed.

### Prohibitions
- No direct shared state between contexts outside the bridge.

---

## 7. STATE OWNERSHIP

### Purpose
Prevent hidden state stores and ambiguous ownership. Every piece of
runtime state has a defined owner. No other subsystem may directly
mutate state owned by another owner.

### Ownership Map

**Kernel (Runtime Core)**
- Intent ledger
- Runtime lifecycle
- Module registry
- Channel registry
- Shared memory layout (SAB)
- Authoritative session state

**Engins**
- Engin-local state (managed through EnginRuntime)
- Capability metadata (from manifest)

**DreamSpace**
- Layout metadata (widget positions, sizes)
- Active widget instances
- Workspace configuration

**HomeDream**
- Active module surface state
- Feed visibility preferences

**SharedDream**
- CRDT documents (Yjs)
- Presence state (cursors, selections)

**DreamR**
- Feed ranking state
- Swipe personalization data
- Torridity ledger

**Navigation Engine**
- Anchor widget positions
- Navigation history / return stack
- Gesture state

**Observability (Idari)**
- Telemetry buffers
- Health trend data

### Contribution Rules
- New state must be explicitly assigned to an owner.
- Access to another owner’s state must go through the bus or a defined channel.

### Prohibitions
- No ad-hoc `useState`/`zustand` stores that duplicate owned state.
- No direct mutation of another subsystem’s state.

---

## 8. APPLICATION LAYERS & SURFACES

The following subsystems are **consumers** of the runtime architecture.
They depend on the kernel, Intents, and Engins but do not extend the
runtime model itself.

### 8.1 DreamDM Bar (Exchange Layer)
**Purpose:** Permanent interaction rail connecting HomeDream, DreamSpace,
messaging, and navigation.  
**Core Files:** `dreamdmbar/dreamsurface.dreamdmbar.tsx`,
`lib/dreamdm/barInteractions.ts`, `lib/dreamdm/DreamSystemContext.tsx`

### 8.2 HomeDream (Global Workspace)
**Purpose:** Persistent feed, active modules, notifications, social hub.  
**Core Files:** `app/dreamdmbar/_components/HomeDreamRegion.tsx`,
`components/home/dream.HomeFeed.tsx`

### 8.3 DreamSpace (Project Canvas)
**Purpose:** Active creative surface where Engins are composed.  
**Core Files:** `app/dreamdmbar/_components/DreamSpaceRegion.tsx`,
`components/dreams/dreamsurface.dreamspace.tsx`

### 8.4 SharedDream (Collaboration)
**Purpose:** Real‑time multi‑user editing with CRDTs and presence.  
**Core Files:** `components/shared-dream/dream.SharedDreamProvider.tsx`,
`lib/collaboration/index.ts`

### 8.5 DreamR (Feed & Algorithm)
**Purpose:** Swipe‑based content feed, ranking, bot detection.  
**Core Files:** `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts`,
`lib/dreamr/torridityLedger.ts`

### 8.6 GameEngin (Cartridge System)
**Purpose:** Console‑class gaming runtime; exercises the full stack.  
**Core Files:** `lib/gameengin/core.ts`, `lib/gameengin/GameRuntime.tsx`,
`lib/gameengin/cartridges/loaders.ts`

### 8.7 WebGPU & Rendering
**Purpose:** Browser‑native GPU rendering, adaptive quality, Babylon.js
integration.  
**Core Files:** `lib/webgpu.ts`, `lib/babylon/createEngine.ts`,
`lib/god-tier/godTierEngine.ts`

### 8.8 VM / WASM Runtime
**Purpose:** Isolated high‑performance compute for game logic.  
**Core Files:** `lib/vm/wasmGpuVM.ts`, `lib/vm/dualVMCoordinator.ts`

### 8.9 Navigation Engine
**Purpose:** Gesture‑driven spatial navigation with anchor widgets.  
**Core Files:** `lib/navigation/SpatialNavigationEngine.ts`,
`lib/navigation/GestureFrameComputer.ts`

### 8.10 AI System
**Purpose:** Multi‑model orchestration for moderation, assistance, and
health.  
**Core Files:** `lib/ai/triad.ts`, `lib/ai/boogieman.ts`,
`lib/agents/agentBus.ts`

### 8.11 Security & Permissions
**Purpose:** Intent authorization, Engin permissions, sandboxing, child
safety.  
**Core Files:** `lib/ai/capability-gate.ts`, `lib/child-safety/childSafetyDetector.ts`

### 8.12 Observability (Idari)
**Purpose:** Platform health, telemetry, root cause analysis.  
**Core Files:** `lib/observability/collector.ts`, `lib/agents/idari.ts`

---

## 9. BUILD, DEPLOY & MONOREPO

### Purpose
Define how the codebase is structured, built, and deployed while
preserving the architecture.

### Structure
```
app/        – Next.js App Router (pages, API routes)
components/ – React components (surfaces, shells, widgets)
engins/     – Engin entry points and orchestrators
lib/        – Business logic, runtime, utilities, rule‑sets
types/      – Shared TypeScript types and schemas
assembly/   – WASM modules (AssemblyScript)
public/     – Static assets and cartridge bundles
scripts/    – CI, studio agents, analysis tools
config/     – YAML/JSON configuration files
```

### Deployment
- Core engine deploys as a single Next.js application.
- Engins can be federated modules, multi‑zones, or dynamic imports.
- Monorepo managed by Turborepo/Nx.

### Contribution Rules
- New libraries go in `lib/`; UI in `components/`; types in `types/`.
- Keep build pipelines per Engin independent.

---

## 10. CONTRIBUTION RULES

- Every new Engin must include a manifest, a rule‑set, and a runtime.
- New runtime utilities go in `lib/runtime/` only if truly universal.
- New Intents and state shapes must be typed in `types/` before implementation.
- No direct DOM mutation from Engin logic; use the bus.
- No hidden state stores; all state flows through the engine.
- Mobile‑first: all critical interactions must work on a phone.
- When architecture and code disagree, the code must be refactored.

---

All subsystems defined above must maintain their declared boundaries.
Violating these boundaries breaks the runtime model.
```
