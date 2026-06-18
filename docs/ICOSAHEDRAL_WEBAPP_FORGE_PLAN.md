# Icosahedral Webapp Forge Plan

Status: strategic implementation plan  
Owner intent: make DREAMengin the place where people build webapps by shaping worlds, not wiring pages  
Date: 2026-06-18

## 1. The moonshot

DREAMengin becomes the first **spatial webapp foundry**: a creator enters HomeDream, speaks or drags an intent into the DreamDMBar, and watches a living webapp assemble itself as a recursive DreamSpace. The app is not generated as disconnected files first. It is born as domain objects, routed through the Intent Bus, governed by Rulesets, rendered as nested surfaces, and only then exported as deployable Next.js, WebGPU, Babylon.js, WebAssembly, and Supabase assets.

The never-before-seen shift is this:

```txt
Old webapp building:
idea → backlog → components → pages → state bugs → auth bugs → deploy

DREAMengin webapp forging:
intent → law-checked domain object → ruleset outcome → spatial surface → deployable artifact
```

The user no longer asks, "Which framework file do I edit?" The user asks, "What should this world do?" DREAMengin answers by negotiating capability, visibility, collaboration, runtime, and export shape before any UI becomes permanent.

## 2. Product name

**The Icosahedral Forge**

The forge is named after the 20-faced ι-shape because each face is a lawful build dimension. A webapp is valid only when every face aligns:

1. Intent
2. Domain object envelope
3. Actor identity
4. Runtime context
5. Visibility
6. Surface scope
7. Collaboration state
8. Ruleset
9. Engin manifest
10. Lifecycle hooks
11. Sync transport
12. Snapshot
13. Compatibility negotiation
14. Render target
15. Asset graph
16. Capability policy
17. Persistence boundary
18. Observability
19. Export artifact
20. Human user experience

## 3. The core interaction

The user opens the DreamDMBar and drops an intent such as:

```txt
Build a shared music marketplace where artists mint listening rooms, sell stems, and co-create live with fans.
```

DREAMengin does not produce a blob of code. It produces a **Build Dream** object:

```ts
type BuildDreamData = {
  title: string;
  desiredOutcome: string;
  activeRulesetId: string;
  surfaceTreeRootId: string;
  exportTargets: Array<"next" | "webgpu" | "babylon" | "wasm" | "supabase">;
  compatibilityFloor: {
    browser: "safari-ios" | "chrome" | "edge" | "firefox";
    gpu: "none" | "webgl" | "webgpu";
    offline: boolean;
  };
};

type BuildDream = DomainObject<"dream.build", BuildDreamData>;
```

From that object, the Core Engine applies one active Forge Ruleset and routes all activity through intents. Every generated screen, schema, worker, shader, policy, or component is a child domain object with explicit ownership and visibility.

## 4. Architecture promise

The Icosahedral Forge obeys the ι-Engine model:

- **One engine:** state, auth, lifecycle, sync, transport, snapshots, and authorization stay in the Core Engine.
- **External behavior:** app-specific logic lives in Forge Rulesets and Engins.
- **Intent-only coordination:** modules never call each other directly; they emit and receive typed intents.
- **Recursive surfaces:** every generated webapp is a DreamSpace that can contain another Build Dream without a new structural model.
- **Explicit visibility:** every object is local, shared, or global before it can render.
- **Dual runtime:** HomeDream and DreamSpace can build independently or coupled.
- **DreamDMBar seam:** DreamDMBar becomes the launch rail, intent router, context tracker, and surface exchanger for the forge.

## 5. New domain object families

All objects use the exact `DomainObject<TType, TData>` envelope. The forge adds these object types without creating a new infrastructure layer:

| Object                 | Type                     | Purpose                                                                 |
| ---------------------- | ------------------------ | ----------------------------------------------------------------------- |
| Build Dream            | `dream.build`            | User-facing webapp build goal and active build runtime                  |
| Forge Ruleset          | `ruleset.forge`          | Declarative constraints, transformations, and parameters for generation |
| Capability Intent      | `intent.capability`      | Requests read/write/share/move/duplicate/publish/destroy/admin actions  |
| Surface Node           | `surface.node`           | Recursive render container in HomeDream or DreamSpace                   |
| Artifact Asset         | `asset.artifact`         | Generated TSX, shader, WASM, SQL, policy, manifest, or media asset      |
| Compatibility Contract | `contract.compatibility` | Browser/GPU/runtime negotiation result                                  |
| Memory Trace           | `memory.trace`           | Auditable why/how record for generated decisions                        |
| Agent Task             | `agent.task`             | Scoped AI work item with actor, runtime, and visibility boundaries      |

## 6. Intent vocabulary

The first version needs only a small vocabulary. The power comes from strict routing, not from many verbs.

```txt
forge.describe
forge.negotiateCompatibility
forge.createBuildDream
forge.applyRuleset
forge.materializeSurface
forge.generateArtifact
forge.authorizeCapability
forge.snapshotRuntime
forge.syncRuntime
forge.previewSurface
forge.publishArtifact
forge.rollbackSnapshot
```

Every intent carries:

- actor identity
- runtime id
- source surface id
- target object id when applicable
- requested capability
- collaboration context
- idempotency key
- timestamp

## 7. Ruleset shape

A Forge Ruleset contains behavior, never infrastructure:

```ts
type ForgeRulesetData = {
  name: string;
  constraints: {
    allowedExportTargets: string[];
    requiredDomainTypes: string[];
    maxSurfaceDepth: number;
    persistenceRequired: boolean;
    collaborationRequired: boolean;
  };
  transformations: {
    intentToObjects: string;
    objectsToSurfaces: string;
    surfacesToArtifacts: string;
    artifactsToDeploymentPlan: string;
  };
  parameters: {
    visualDensity: "calm" | "rich" | "cinematic";
    generationMode: "strict" | "experimental";
    runtimeBudget: "mobile-first" | "desktop-rich" | "gpu-premium";
  };
};

type ForgeRuleset = DomainObject<"ruleset.forge", ForgeRulesetData>;
```

The Core Engine applies this ruleset. The ruleset does not own auth, persistence, sync, or transport.

## 8. Lifecycle hooks required for every generated app

Every Build Dream passes through the same lifecycle:

```txt
created → negotiated → materialized → previewed → snapshotted → synchronized → published → observed → evolved
```

Required hooks:

- `onCreateBuildDream`
- `onValidateManifest`
- `onNegotiateCompatibility`
- `onAuthorizeIntent`
- `onApplyRuleset`
- `onMaterializeSurface`
- `onGenerateArtifact`
- `onSnapshotRuntime`
- `onSyncTransport`
- `onPublishArtifact`
- `onRollbackSnapshot`

No generated webapp is valid until these hooks are present in its manifest and validated by schema.

## 9. Manifest and schema validation

Each generated webapp ships with a Build Manifest:

```ts
type BuildManifest = DomainObject<
  "manifest.build",
  {
    buildDreamId: string;
    rulesetId: string;
    engins: string[];
    intents: string[];
    lifecycleHooks: string[];
    transport: "local" | "supabase-realtime" | "worker" | "hybrid";
    snapshots: {
      latestSnapshotId: string | null;
      retention: number;
    };
    compatibility: {
      minBrowser: string;
      gpuMode: "none" | "webgl" | "webgpu";
      wasmRequired: boolean;
    };
  }
>;
```

Validation checks:

- every object has the domain envelope
- every capability request goes through authorization
- every Engin declares manifest compatibility
- every Ruleset declares constraints, transformations, and parameters
- every lifecycle hook exists
- every transport is abstracted behind the Core Engine
- every surface node declares `local`, `shared`, or `global`

## 10. Snapshotting model

A snapshot is not just saved UI state. It is a lawful runtime checkpoint:

```txt
snapshot = domain objects + active ruleset id + intent log cursor + compatibility contract + surface tree hash + artifact graph hash
```

This makes rollback, branching, collaboration, and AI repair understandable. A user can say, "Go back to the version before checkout became ugly," and DREAMengin can restore the exact runtime state instead of guessing which files changed.

## 11. Sync transport abstraction

The Forge never talks directly to a transport provider. The Core Engine owns sync and exposes transport modes:

| Mode                | Use                                                   |
| ------------------- | ----------------------------------------------------- |
| `local`             | Solo drafts, offline previews, private experiments    |
| `supabase-realtime` | Shared editing, presence, multiplayer build sessions  |
| `worker`            | Heavy generation, WASM simulation, artifact packaging |
| `hybrid`            | Local-first editing with shared publication           |

Engins can request sync through intents only. They cannot embed their own transport logic.

## 12. Compatibility negotiation

Before generation, DREAMengin negotiates a compatibility contract:

```txt
requested experience → device/browser/GPU/collaboration scan → compatibility floor → allowed render/material/export plan
```

If WebGPU is unavailable, the object model remains the same. Only the render target changes. The forge does not fork product logic by device.

## 13. Implementation passes

### Pass 1 — Lawful contracts

- Add shared TypeScript contracts for Forge domain objects, intents, manifests, compatibility, and snapshots.
- Add schema validation for the Build Manifest and Forge Ruleset.
- Add tests proving invalid envelopes, missing lifecycle hooks, and direct transport declarations fail.

### Pass 2 — Intent Bus integration

- Route Forge intents through the existing Dream intent system.
- Add capability authorization checks for read, write, share, move, duplicate, publish, destroy, and admin.
- Add intent log snapshot cursors.

### Pass 3 — DreamDMBar forge rail

- Add a DreamDMBar entrypoint that creates a Build Dream from user intent.
- Show active runtime, ruleset, compatibility, and visibility before materialization.
- Make DreamDMBar the only surface exchange seam.

### Pass 4 — Recursive surface materializer

- Convert Build Dream object graphs into nested HomeDream and DreamSpace surface nodes.
- Support infinite nesting using the same `surface.node` shape.
- Render preview surfaces without coupling UI state to persistence format.

### Pass 5 — Artifact graph generator

- Generate deployable artifact assets from domain objects.
- Separate Next.js TSX, Babylon scene data, WebGPU material plans, WASM modules, Supabase schemas, and policy artifacts.
- Keep every artifact traceable to the intent and ruleset that produced it.

### Pass 6 — Snapshot, rollback, and branch

- Persist lawful snapshots.
- Add rollback and branch creation from snapshots.
- Show Memory Trace explanations for every generated or reverted change.

### Pass 7 — Shared build sessions

- Add shared Build Dreams with presence and collaboration state.
- Enforce visibility and surface scope at every capability action.
- Allow users to co-create nested webapps inside DreamSpace.

### Pass 8 — Publish and export

- Package artifacts into a deployment plan.
- Publish only after manifest validation, compatibility negotiation, authorization, and snapshot creation pass.
- Produce a human-readable build certificate explaining what was created and why it is safe to run.

## 14. What changes for builders

Builders stop thinking in pages, routes, and state bugs. They think in:

```txt
What is the intent?
Who owns it?
Where does it live?
Who can see it?
Which ruleset shapes it?
Which surface renders it?
Which artifact exports it?
Which snapshot can restore it?
```

That is the webapp-building revolution: DREAMengin turns software creation into lawful spatial composition.

## 15. Definition of amazing

The first demo is successful when a user can:

1. create a Build Dream from one DreamDMBar intent
2. see DREAMengin negotiate compatibility and visibility
3. preview a nested webapp inside DreamSpace
4. inspect its Ruleset, domain objects, artifact graph, and snapshot
5. branch the app by swapping one Ruleset
6. publish a validated deployment plan
7. roll back to an earlier runtime snapshot without editing files manually

If these seven things work, DREAMengin is no longer a website builder. It is a lawful spatial runtime that builds websites as living worlds.
