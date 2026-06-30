<!-- DREAMENGIN_CANONICAL_AI_CONTRACT_START -->
# DREAMengin Canonical AI Contract

This section is authoritative for AI agents, automated code tools, human contributors, and future repair passes. Do not treat DREAMengin as disconnected pages, disconnected engines, or isolated feature islands. DREAMengin must be understood as one web-native creative OS/world where Dreams, posts, messages, games, assets, tools, settings, profiles, media, workspaces, and shared sessions operate as one connected system.

The app should feel like one living surface with multiple forms: feed, profile, HomeDream, DreamSpace, DreamDMBar, Daydreams, Engins, Shared Dreams, GameEngin, ContentEngin, CodeEngin, StarMakerEngin, LabEngin, ForgeEngin, BrandEngin, RenderEngin-as-technology, settings, media, and runtime state.

## 1. Core product identity

DREAMengin is:

- a creative OS;
- a Dream-owned workspace system;
- a social + creative + game + tool environment;
- a mobile-smooth web app;
- a runtime-driven app, not just pages;
- a system where Dreams can be posts, widgets, game cartridges, media objects, profile objects, shared objects, spatial objects, creative surfaces, tools, windows, and runtime-owned surfaces;
- a system where every visible thing can become part of the user's Dream environment;
- a system where behavior is owned by Engins, runtimes, rule-sets, and canonical surfaces, not scattered random pages.

## 2. Irrefrangible behavior rules

DREAMengin must not lie to the user.

Every visible feature must satisfy this chain:

```text
visible user action
→ reachable handler
→ real runtime/API/state behavior
→ persisted or visible result
→ clear feedback/error state
```

Do not ship, preserve, or create:

- fake buttons;
- decorative controls;
- unreachable pages;
- duplicate ownership;
- placeholder panels pretending to work;
- surfaces that claim a feature but do nothing;
- hidden failures;
- "coming soon" acting like a shipped feature;
- multiple profile systems;
- multiple search systems;
- multiple message systems;
- multiple settings systems;
- RenderEngin acting like a destination instead of rendering technology.

A feature is real only when the full behavior chain works.

## 3. The 01–17 project phases

The organized repo phases are actual build and repair order, not decorative folders:

1. Define user flow.
2. Build data model.
3. Build backend.
4. Build API layer.
5. Build runtime state.
6. Build application behavior.
7. Build pages/screens.
8. Build UI components.
9. Wire interactions.
10. Verify build/deploy.
11. Security.
12. Performance.
13. Accessibility.
14. Observability.
15. Dev tooling.
16. Product operations.
17. Compliance/policy.

When repairing a feature, move through the phases required by the behavior chain instead of patching only the visible surface.

## 4. DreamDMBar

DreamDMBar is the main control layer. It should own search, system actions, messages, conversations, drafts, notifications, module switching, Engin switching, Dream actions, quick commands, user/system intent, and routing into HomeDream, DreamSpace, DreamR, Engins, and Daydreams.

There should not be extra search/find routes competing with it. DreamDMBar is the canonical search/control/menu surface.

## 5. DreamR

DreamR is the social layer. It should support feed, profile, edit profile, posts, comments, messages, visibility, social state, user identity, profile customization, media on profile/feed, one source of truth for profile data, and one canonical edit-profile surface.

There must be only one edit profile path, and it must edit the DreamR profile. Do not create duplicate profile editors, disconnected feed/profile/message systems, or separate account profile pages pretending to be the DreamR profile.

## 6. HomeDream

HomeDream is the user's main operating surface. It should show real widgets/cards/modules, open things correctly, route into real Dream behavior, remember layout, be customizable, allow hide/remove/replace/reorder/resize behavior, avoid fake/dead widgets, and connect to DreamDMBar, DreamSpace, DreamR, Engins, and Daydreams.

HomeDream is not a decorative homepage. It is the user's personal operating surface.

## 7. DreamSpace

DreamSpace is the spatial Dream workspace. Users should be able to move Dream objects, resize Dream objects, arrange surfaces, hide/remove/replace widgets, open Dreams, reuse objects, drag/drop surfaces, snap/dock/undock things, work smoothly on touch devices, persist layout/state, and interact with Dream objects like real app pieces instead of static cards.

DreamSpace should feel like a living spatial workspace, not a grid of placeholders.

## 8. Shared Dreams

Shared Dreams is a shared reality layer, not just multiplayer or "invite someone to a room." It should support shared sessions, presence, collaboration, cursor/control state, media sync, shared Dream state, shared creative surfaces, real-time interaction, Dream objects shared between users, co-op and solo flows, synchronized creative work, game/session sharing, and shared watching/listening/building/playing where relevant.

## 9. Engins in general

Engins are first-class capabilities, not tiles that pretend to work. Every Engin should have a real surface, real state, real actions, real runtime behavior, real save/export/import/share behavior where claimed, mobile-smooth UI, no fake buttons, no disconnected panels, and no unreachable claims.

Engins should connect to DreamDMBar, HomeDream, DreamSpace, Daydreams, runtime state, Shared Dreams where relevant, and profile/feed/media where relevant.

## 10. GameEngin

GameEngin is a real playable web-native game engine surface. It should support playable cartridges, a cartridge list containing only real playable cartridges, mobile controls, controller/gamepad input, keyboard bridge, GameRemote behavior, score state, save state, crash feedback, sessions, sharing, cartridge runtime, game assets, GameEngin to Shared Dreams behavior, GameEngin consuming assets from ContentEngin, smooth phone play, and real games that work.

GameEngin is one consumer of the runtime, not the whole app.

## 11. ContentEngin

ContentEngin creates game-ready assets cheaply or locally. It should support procedural asset creation, recipes, part trees, materials, mesh generation, photo references, asset validation, rigging, GLB export, ZIP bundles, export to GameEngin cartridge assets, local/non-AI fallback behavior, reference images, sculpt/edit behavior, touch-first asset editing, clay-like carving, hold-and-stretch editing, zoom-sensitive deformation, terrain creation, and phone-smooth asset interaction.

Zoomed-in editing should enable fine detail. Zoomed-out editing should enable large shaping. ContentEngin should not depend on paid AI providers to be useful.

## 12. RenderEngin

RenderEngin is rendering technology, not a standalone product destination. It should be used inside ContentEngin first, power previews/viewports/rendering, support WebGPU/canvas/shader behavior where available, fallback cleanly when WebGPU is unavailable, improve ContentEngin rendering, and later support GameEngin/LabEngin where needed.

RenderEngin must not have its own fake user-facing route. It must not be a separate RenderEngin page unless the route is dev-only or redirected. The rule: RenderEngin is a component/function/tech layer used by Engins.

## 13. CodeEngin

CodeEngin is a real safe coding IDE/workbench. It should support a per-user uploaded workspace, editor, files, diagnostics, notebook, simulated execution, CLI-like behavior, Dr. Eams quick assist, no repo exposure to random users, no dangerous eval, no fake coding surface, no account getting access to the real repo, safe path handling, workspace upload, and a real coding IDE 2026 feel.

CodeEngin should work without live AI.

## 14. StarMakerEngin / music

StarMakerEngin supports browser-native music creation: arrangement, sequencing, mixer, presets, audio workflow, DAW-like behavior, tracks/stems, MIDI/audio concepts, mobile-friendly controls, and real playback/editing behavior where claimed.

## 15. LabEngin / SimEngin

LabEngin and SimEngin support experiments, physics, particles, quantum/lab concepts, benchmarks, simulation surfaces, interactive parameters, visual experiment controls, runtime-backed simulation, mobile-friendly direct manipulation, and performance-aware rendering.

## 16. ForgeEngin / BrandEngin

BrandEngin supports identity, campaigns, logos, analytics, brand workspace behavior, and real actions instead of placeholder marketing panels.

ForgeEngin supports assembly, pieces, build graph, reusable components, system composition, and turning pieces into working app behavior.

## 17. Daydreams

Daydreams are specialized creative workspaces that open as Dream-owned surfaces, not isolated random pages. Code Daydream, Game Daydream, Create/Content Daydream, Music Daydream, Lab Daydream, Brand Daydream, and render-related internal workspaces must connect to the main runtime and Dream system.

## 18. Settings

Settings are global and real. Settings should include appearance, language, widgets, notifications, safety, Dream settings, feed settings, layout customization, user overrides, accessibility-relevant preferences, reduced motion/touch behavior where needed, and account/data controls.

Settings must affect the app, especially language settings.

## 19. Language settings

Language settings must control app language, YouTube/media language preferences, default English behavior, non-English content only when allowed/selected, and content filtering/localization behavior. Do not show random non-English YouTube/media results unless the language setting allows it.

## 20. YouTube / media

YouTube and media should feel seamless in-app. They should support in-app playback, no ugly external handoff, videos changing on refresh, no stale repeated results, default English results, language setting controls, YouTube discovery, live feed/channel behavior, fallback behavior when API keys are missing, media vault, uploaded photos, playable media objects, Dream media objects, and media sync for Shared Dreams where relevant.

## 21. Uploads / photos / media vault

Upload behavior must be real. It should support uploading photos, storing/previewing uploaded media, media vault, using uploaded media in Dreams, using uploaded media in ContentEngin, profile/feed media where relevant, validation, visible progress/errors, no fake upload buttons, and no uploads disappearing without feedback.

## 22. Customization everywhere

Visible Dream pieces should be customizable. Users should be able to hide, remove, replace, reorder, resize, move, restore, reset layout, customize appearance, customize widgets, customize HomeDream, customize DreamSpace, customize profile, and customize Dream surfaces.

Customization must be unified, not per-page hacks.

## 23. Semantic Determinism

DREAMengin should feel almost AI-like without requiring AI everywhere. Deterministic app behavior should infer user pressure, respond to context, make surfaces feel alive, route actions intelligently, adapt UI based on interaction, preserve coherence, avoid random fake AI behavior, emulate AI-like assistance locally when possible, and work without live AI.

Semantic Determinism should make the app feel smart because behavior is coherent, not because every feature calls a model.

## 24. Intent / AppIntentPressure

Intent must be implemented as application interaction pressure, not vague runtime philosophy.

Intent means unresolved user pressure from current interaction: tap, drag, hold, type, scroll velocity, focus, upload, repeated taps, failed clicks, long press, fast drag, and typing pressure.

Intent should affect touch response, local geometry, hit behavior, surface variables, UI adaptation, interaction depth, and object feel. This must become application code, not a ruleset essay.

## 25. Mobile-first smoothness

Everything should feel smooth on a phone: touch controls, pinch, pan, drag, flick, no double-tap unless intentional, no tiny controls, responsive surfaces, performance-aware rendering, scroll/pinch not fighting the UI, standard phone zoom behavior where appropriate, no desktop-first assumptions, and real device smoothness.

Mobile is not secondary.

## 26. Offline / service drop survival

The whole app should remain usable when service drops, not just GameEngin. Offline behavior should cover runtime state, DreamDMBar, messages/drafts, notifications where possible, feed/profile cached state, HomeDream, DreamSpace, active modules, offline queue, local persistence, reconnect behavior, sync recovery, and clear offline feedback.

The app should not collapse just because network/service drops.

## 27. Runtime / dual runtime

Runtime behavior is the real spine. It should support active runtime, active engine, top/bottom runtime, dominance swap, state transfer, snapshots, memory, event bus/channel behavior, module registry, workflow registry, sync, offline queue, runtime bridge, shared state, rule-set application, and surface-owned experience with Engin-owned behavior.

DualRuntime must coordinate real surfaces.

## 28. Rule-sets

Rule-sets carry behavior. DREAMengin's core model is:

1. single engine;
2. behavior lives in rule-sets;
3. rule-sets are constraints, transformations, and parameters;
4. the engine applies a rule-set to base state;
5. swapping rule-sets changes behavior.

Rule-sets must be concrete and used by Engins.

## 29. Dream objects / Dreams as everything

Dreams are the universal unit. A Dream can be a post, widget, media object, game cartridge, workspace, surface, shared session, profile object, spatial object, creative object, asset, tool, or runtime-owned thing.

Dreams should move across surfaces instead of being trapped in one page.

## 30. Messaging

Messaging must be real and connected: conversations, messages, drafts, notifications, DreamDMBar integration, DreamR/profile integration where needed, no duplicate messaging systems, no dead message UI, persistent draft behavior, and user-visible send/receive state.

## 31. Posting / comments / social actions

Users should be able to post, comment, message, edit profile, customize profile, manage visibility, see feed updates, interact socially, create and share Dreams, and attach media/assets/games to social surfaces where relevant. DreamR owns this social layer.

## 32. Search

Search is centralized in DreamDMBar. It should search app/Dreams/content/users/media/Engins as appropriate, avoid extra standalone search routes, avoid duplicate find/search pages, route results into real surfaces, be fast and useful, and work with deterministic behavior.

## 33. Real navigation / reachability

Every major behavior must be reachable through the correct path: HomeDream, DreamSpace, DreamDMBar, DreamR, Daydreams, Engins, settings, profile, media, Shared Dreams, GameEngin cartridges, ContentEngin asset work, and CodeEngin workspace.

No orphaned surface. No route that exists only because it used to. No user-facing route with wrong ownership.

## 34. Performance

Performance must be high-end, especially on mobile: low interaction latency, smooth frame rate, WebGPU where useful, canvas/render optimization, no jank, no huge blocking runtime work, no fake benchmark claims, real performance gates, render cost awareness, mobile touch responsiveness, memory discipline, and offline/cache behavior that does not freeze UI.

## 35. Security / safety

Security is real, especially for auth, account/profile ownership, uploaded workspaces, CodeEngin file access, profile editing, messages, media uploads, public/private visibility, Shared Dreams, safe AI/non-AI behavior, no repo leakage, no dangerous eval, and no users accessing things they should not.

## 36. Accessibility

Accessibility is part of irrefrangible behavior: focus states, keyboard where appropriate, mobile touch targets, labels, readable states, loading/error/empty states, reduced motion where needed, and screen-reader-safe semantics where relevant.

## 37. Observability / crash feedback

Failures must be exposed instead of hidden. The app should have crash feedback, error states, logs/metrics where useful, health checks, user-visible failure paths, upload errors, save errors, reconnect state, API error feedback, GameEngin crash reporting, and no silent failure.

## 38. AI-free fallback

Anything AI-related must work without live AI: local deterministic behavior, emulated AI-like logic where needed, no feature completely dependent on paid/remote AI, no dead AI buttons, Dr. Eams/helper behavior with safe fallback, and Semantic Determinism as the feels-intelligent layer.

## 39. Physical-principle inspired UI/behavior

DREAMengin may use physical principles in unusual places: pressure, flow, force, distribution, Bernoulli-style thinking, resonance/metaphor translated into actual app behavior, interaction pressure affecting UI feel, and surfaces responding based on movement, velocity, duration, direction, and confidence.

This must become real code, not abstract language.

## 40. Code/project quality

The repo should be coherent, patterned, professional, easy for real developers to understand, easy for AI/code tools to navigate, structured by ownership, free of random side packages, free of fake completion, free of stubs hiding failure, and free of duplicate systems.

Do not add files unless needed for the task. Do not add architecture talk unless it maps to actual files during code work.

## 41. Master requirement

DREAMengin should let a user create, play, post, message, customize, move, edit, share, remix, build, simulate, render, upload, watch, code, and collaborate inside one coherent Dream-owned runtime world, with every visible action reachable, every claim enforced, and every surface connected to one canonical system.

## DREAMengin application code grammar

All application code should follow this structure where applicable:

```text
directive
→ imports
→ file identity / law comments
→ constants / descriptors / defaults
→ types / interfaces / envelopes
→ helpers
→ owned state
→ derived gates
→ named actions
→ effects / subscriptions / cleanup
→ render / return surface
→ exported public surface
```

Patch behavior in this operational grammar:

```text
Receive
→ Check
→ Gate
→ Change
→ Share/Emit
→ Persist
→ Give Back
→ Clean Up
```

Never add loose UI before owned behavior exists. Never expose a feature unless its route, handler, runtime/API/state path, result, and feedback are real.
<!-- DREAMENGIN_CANONICAL_AI_CONTRACT_END -->

**Branch:** `completedream` | **Stack:** Next.js 16 / React 19 / Supabase / Babylon.js 9 / WebGPU  
> **Owner:** José Mancilla (appthemanger-ctrl) | **Total files:** 1,962 | **Total LOC:** ~166,000

Every subsystem below includes: primary purpose, core files, PEER relationships, how to contribute/extend, and what is banned.

---

## THE MASTER LAW (read before everything else)

> **The new part is the standard. The surrounding code is the chassis.**  
> One fixed engine handles all universal operations. All unique behaviors live outside it in lightweight, swappable rule-sets. To change behavior: swap the rule-set. **The engine never changes.**

| Rule | Law |
|------|-----|
| 1 | One fixed engine handles all universal operations: state, I/O, events, security. |
| 2 | All unique behaviors live **outside** the engine in lightweight, swappable rule-sets. |
| 3 | Each rule-set contains only: constraints, transformations, parameters — **no infrastructure**. |
| 4 | The engine applies the active rule-set to base state → generates dynamic outcome. |
| 5 | To change behavior: swap the rule-set. **The engine never changes.** |

---

## SYSTEM FLOW OVERVIEW

```
User Action / Agent / CI
        │
        ▼
   [Surface / Shell]          ← components/, app/, coresurfaces/, daydreams/
        │ dispatches Intent
        ▼
   [EnginDispatcher]          ← lib/runtime/EnginDispatcher.ts
        │ looks up ModuleKey
        ▼
   [Module Registry]          ← lib/runtime/moduleRegistry.ts
        │ routes to Engin
        ▼
   [Engin Logic]              ← /engins/*.tsx + lib/engin-runtime/
        │ applies rule-set
        ▼
   [State Mutation + Bus]     ← lib/runtime/dreamOSBus.ts
        │
        ▼
   [Re-render / Persistence]  ← Supabase, lib/vm/, lib/runtime/
```

---

## 1. Runtime Kernel

**Purpose:** Ultimate authority for all state, event, and mutation orchestration. Enforces: all flows are Intent-driven; only registered Engins mutate state.

**Core files:**
- `lib/runtime/EnginDispatcher.ts` — event dispatcher / mutation kernel (imported by 5 surfaces)
- `lib/runtime/dualRuntime.ts` — dual-mode runtime coordination (HomeDream + DreamSpace run concurrently)
- `lib/runtime/dualRuntimeBridge.ts` — the bridge between both runtimes; most-imported runtime file (34 consumers)
- `lib/runtime/moduleRegistry.ts` — system-wide Engin/ModuleKey registry
- `lib/runtime/dreamOSBus.ts` — cross-surface global event bus (12 consumers)
- `lib/runtime/memory.ts` — dispatcher memory map
- `lib/runtime/instanceManager.ts` — multi-instance Engin lifecycle manager
- `lib/runtime/runtimeChannel.ts` — shared channel between runtime instances
- `lib/runtime/runtimeContainer.ts` — container context for runtime lifecycle
- `lib/runtime/seamClipboard.ts` — seam clipboard for cross-engin data transfer
- `lib/runtime/useEnginCoopSync.ts` — cooperative sync hook used by all Engins
- `lib/runtime/useEnginBridge.ts` — bridge hook connecting Engins to dual runtime
- `lib/runtime/useSharedEnginChannel.ts` — shared channel hook for coop sessions
- `lib/runtime/swapManager.ts` — hot-swaps runtimes without full remount
- `lib/runtime/offlineQueue.ts` — queues mutations while offline
- `lib/runtime/coercionTable.ts` — drag-drop type coercion rules
- `lib/runtime/dropTargetRegistry.ts` — registered drop target slots
- `lib/runtime/enginWorkflowRegistry.ts` — workflow step registry
- `lib/runtime/channelMetrics.ts` — perf metrics per runtime channel
- `lib/runtime/sharedResourcePool.ts` — shared GPU / WASM resource pool
- `lib/runtime/madMaxiSnapshotBridge.ts` — game snapshot bridge for MadMaxi
- `lib/runtime/snapshotFingerprint.ts` — state fingerprinting for diffing
- `lib/runtime/quantumCircuit.ts` — experimental quantum circuit runtime stub
- `lib/runtime/isAuthRelatedError.ts` — auth error classifier for runtime recovery
- `engine/io.ts` — low-level I/O primitives used by live feed, collaboration, connectors

**Relationships:**
- **Receives from:** all surfaces (`EnginDispatcher.dispatch(intent)`)
- **Routes to:** `moduleRegistry` → specific Engin logic
- **Publishes to:** `dreamOSBus` → all listening surfaces re-render
- **Reads:** `lib/runtime/memory.ts` for state snapshot

**TO CONTRIBUTE:**
- Register new ModuleKeys only inside `moduleRegistry.ts`
- New runtime behaviors → create a new runtime util in `lib/runtime/`, export, register
- Keep `EnginDispatcher.ts` kernel contract stable; expand only when truly necessary

**NEVER:**
- Write feature logic directly into dispatcher files
- Bypass the dispatcher with direct state mutations from UI
- Create hidden state stores outside this subsystem

---

## 2. Intent & State Contracts

**Purpose:** Defines the structural model for every mutation, state shape, and allowed system action. The single source of truth for all typing.

**Core files:**
- `types/ai-system.ts` — `DrEamsIntentType` API + state interface contract (7 consumers including dispatcher)
- `types/module-manifest.ts` — ModuleKey definitions, drag-drop manifest (8 consumers)
- `types/connector.ts` — connector data contract (30 consumers — most imported type)
- `types/dream-window.ts` — DreamWindow lifecycle type
- `types/dreamArtifact.ts` — artifact store types
- `types/widget-system-v2.ts` — widget feed and instance types
- `types/journey.ts` — user journey dot types (7 consumers)
- `types/spatial.ts` — spatial shell position types
- `types/ai.ts` — AI agent type contracts
- `types/widgets.ts` — widget registry types
- `types/widgetConfigs.ts` — per-widget config types
- `types/user-sim.ts` — user simulation agent types
- `types/ads.ts` — ad unit types
- `types/supabase.ts` — generated Supabase DB types (6 consumers)
- `/types/*.ts` — all remaining domain types

**Relationships:**
- All subsystems import from here; nothing flows the other direction
- When adding a feature, **Intent comes first** — define the type before building logic

**TO CONTRIBUTE:**
- Add a new Intent type or extend a state contract ONLY when system behavior truly changes
- Keep this as source of truth; refactor consumers to match types, not vice versa

**NEVER:**
- Work around types or smuggle "magic" data in untyped payloads
- Duplicate type definitions in feature files

---

## 3. Module Registry / Engins

**Purpose:** Modular, hot-swappable logic units — concrete reactions to Intents. Each Engin is a self-contained creative workspace: Brand, Code, Create (Content), Games, Lab, Music, Portfolio, Forge, Analytics.

**Core files — Engin implementations:**
- `engins/engin.BrandingEngin.tsx` — Brand workspace (15 imports, 5 consumers)
- `engins/engin.CodeEngin.tsx` — Code IDE workspace (19 imports, 5 consumers)
- `engins/engin.ContentEngin.tsx` — Create/content workspace (22 imports, 5 consumers)
- `engins/engin.GameEngin.tsx` — Gaming workspace (29 imports — most complex Engin, 5 consumers)
- `engins/engin.LabEngin.tsx` — Lab / experiments workspace (15 imports)
- `engins/engin.StarMakerEngin.tsx` — Music / DAW workspace (27 imports)
- `engins/dream.ForgeEngin.tsx` — Engine builder / Forge workspace (11 imports)
- `engins/dream.panel.AnalyticsEngin.tsx` — Analytics panel Engin
- `engins/portfolio/dream.PortfolioEngin.tsx` — Portfolio / quantum optimizer Engin
- `engins/autoopen/dream.AutoOpenGameEngin.tsx` — Auto-opens game Engin on navigation
- `engins/CodeEngin/core/parser.ts` — Code parser logic
- `engins/CodeEngin/modules/ai-co-pilot/` — AI co-pilot agent panel + session hook
- `engins/CodeEngin/orchestrator/dream.index.tsx` — Orchestrator for code Engin pipeline
- `engins/dream.QuantumCircuitCanvas.tsx` — Quantum circuit visualization

**Core files — Engin runtime layer:**
- `lib/engin-runtime/EnginRuntime.ts` — base runtime class all Engins extend
- `lib/engin-runtime/EnginBaseState.ts` — shared base state shape
- `lib/engin-runtime/EnginCapabilities.ts` — capability flags per Engin
- `lib/engin-runtime/EnginRuleSetContract.ts` — rule-set interface contract
- `lib/engin-runtime/EnginIOAdapter.ts` — I/O bridge for Engin ↔ runtime
- `lib/engin-runtime/EnginEventBus.ts` — per-Engin event bus (wraps global bus)
- `lib/engin-runtime/index.ts` — barrel export

**Core files — per-Engin rule-sets:**
- `lib/engins/brand/brandEnginRuleSet.ts` + `useBrandEnginRuntime.ts`
- `lib/engins/code/codeEnginRuleSet.ts` + `useCodeEnginRuntime.ts`
- `lib/engins/content/contentEnginRuleSet.ts` + `useContentEnginRuntime.ts`
- `lib/engins/game/gameEnginRuleSet.ts` + `useGameEnginRuntime.ts` + `index.ts`
- `lib/engins/lab/labEnginRuleSet.ts` + `useLabEnginRuntime.ts`
- `lib/engins/music/starMakerEnginRuleSet.ts` + `useStarMakerEnginRuntime.ts`
- `lib/engins/useEnginWorkflow.ts` — shared workflow composition hook
- `lib/engins/workflowEngine.ts` — workflow step execution engine
- `lib/enginpipe/` — artifact pipeline: `index.ts`, `artifact/manifest.ts`, `quality/tiers.ts`, `telemetry/events.ts`, `telemetry/client.ts`, `shell/ArtifactSlot.tsx`

**Module registry wiring:**
- `lib/runtime/moduleRegistry.ts` — maps ModuleKeys → Engin constructors
- `lib/gameengin/registerCartridges.ts` — wires game cartridges into registry

**Relationships:**
- Kernel (`EnginDispatcher`) → ModuleKey → Engin logic
- Engins emit state mutations → bus → surfaces re-render
- Engins read rule-sets from `lib/engins/<name>/`; never from kernel

**TO CONTRIBUTE:**
- Build new Engin in `/engins/`, export as named class/function
- Add rule-set in `lib/engins/<name>/`
- Register ModuleKey in `moduleRegistry.ts`
- Wire in `src/engin/generated/rulesets.ts` (auto-generated manifest)

**NEVER:**
- Mix UI code, React hooks, or side effects into rule-set logic
- Put state mutation logic inside surface/component files

---

## 4. Rulesets & Assembly

**Purpose:** Declarative JSON/TS config that controls system-wide and Engin-level behavior without rewriting logic. The engine reads these and changes behavior. You never change the engine.

**Core files:**
- `assembly/index.ts` + `assembly/bus.ts` + `assembly/mad-maxi-player.ts` — AssemblyScript WASM entry points
- `src/dream/rulesets/homedream/` — HomeDream physics, transforms, constants (4 consumers)
- `src/dream/rulesets/codeengin/index.ts` — CodeEngin ruleset declaration
- `src/dream/rulesets/gameengin/index.ts` — GameEngin ruleset declaration
- `src/dream/rulesets/labengin/index.ts` — LabEngin ruleset declaration
- `src/dream/rulesets/starmakerengin/index.ts` — StarMakerEngin ruleset declaration
- `src/dream/rulesets/forgengn/index.ts` — ForgeNGN ruleset declaration
- `src/dream/rulesets/dreamsengin/index.ts` — DreamsEngin ruleset declaration
- `src/engin/generated/rulesets.ts` — auto-generated manifest of all rulesets
- `lib/runtime/EnginDispatcher.ts` — reads ruleset at dispatch time
- `config/optimizer.yaml` — optimizer behavior config
- `config/ui-ux-spec.yaml` — UI/UX quality spec config
- `config/advanced-game-targets.json` — game performance targets

**Relationships:**
- Kernel reads ruleset at dispatch time to determine logic without code changes
- Engins reference ruleset constraints via `EnginRuleSetContract`
- `src/engin/generated/rulesets.ts` is the auto-generated registry

**TO CONTRIBUTE:**
- Add/extend a ruleset file when behavior needs changing — never update Engin code for config-only changes
- All rulesets must be pure declarations (no functions, no side effects)

**NEVER:**
- Put executable logic inside ruleset files
- Skip registering a new ruleset in `src/engin/generated/rulesets.ts`

---

## 5. Surfaces, Shells & UI Hosts

**Purpose:** Presentation-only layer. Zero business logic. Initiates Intents; listens via Bus or Engin output; renders reactively.

**Core files — App shell & layout:**
- `app/layout.tsx` — root Next.js layout (14 imports)
- `components/providers/dream.AppSurfaceShell.tsx` — top-level surface wrapper (10 imports)
- `components/providers/dream.ThemeProvider.tsx` — theme injection
- `components/providers/dream.GodTierProvider.tsx` — high-perf rendering context
- `app/dreamdmbar/layout.tsx` — DreamDMBar layout (auth-gated, 9 imports)

**Core files — HomeDream surface:**
- `app/dreamdmbar/_components/HomeDreamRegion.tsx` — home region (10 imports, 3 consumers)
- `app/dreamdmbar/_components/DreamSpaceRegion.tsx` — DreamSpace region (7 imports)
- `app/dreamdmbar/_components/DreamBarDataBridge.tsx` — data bridge layer (7 imports)
- `app/dreamdmbar/_components/DreamWidgetGrid.tsx` — widget grid mount
- `dreamdmbar/dreamsurface.dreamdmbar.tsx` — DreamDMBar surface (16 imports)
- `dreamdmbar/dream.GlowingLight.tsx` — ambient UI element
- `components/home/dream.bar.PersistentDreamBar.tsx` — persistent bottom bar (11 imports)
- `components/home/dream.bar.GlobalDreamBar.tsx` — global top bar
- `components/home/dream.ActiveModuleSurface.tsx` — active module display
- `components/home/dream.NeuralSeamCanvas.tsx` — seam animation canvas
- `components/home/dream.HomeFeed.tsx` — live feed display
- `components/home/dream.FlagshipEnginesStrip.tsx` — engine launcher strip
- `components/home/dream.DaydreamPulseStrip.tsx` — pulse activity strip

**Core files — DreamsOS / Engin OS:**
- `components/dreamengin/dream.DREAMenginOS.tsx` — OS host (9 imports, 3 consumers)
- `components/dreamengin/dreamsurface.dreamengin.tsx` — DreamsEngin surface mount
- `components/dreamengin/dream.menu.NexusMenu.tsx` — nexus radial menu
- `components/dreamengin/dream.menu.OutdreamMenu.tsx` — out-dream navigation menu
- `components/dreamengin/dream.overlay.ViewAllDreamsOverlay.tsx` — all-dreams overlay
- `components/dreamengin/dream.panel.CrossEnginStatusPanel.tsx` — cross-Engin status
- `components/dreamengin/dream.panel.DrEamsPanel.tsx` — DrEams AI panel
- `components/dreamengin/dream.bar.DrEamsSearchBar.tsx` — OS-level search
- `components/dreamengin/dream.CanvasDropZone.tsx` — drag-drop target
- `components/dreamengin/dream.HomeControls.tsx` — home control buttons
- `lib/dreamenginOS/index.ts` — OS subsystem bootstrap (11 imports, 8 consumers)
- `lib/dreamenginOS/OSContext.tsx` — OS React context

**Core files — Runtime views:**
- `components/runtime/dream.RuntimeView.tsx` — main runtime panel view (21 imports)
- `components/runtime/dream.DualRuntimeContainer.tsx` — dual runtime mount
- `components/runtime/dream.shell.RuntimeShell.tsx` — runtime shell wrapper
- `dream.RuntimeView.tsx` (root) — entry runtime view

**Core files — DreamSpace (DreamWindows):**
- `components/dreams/dreamsurface.dreamspace.tsx` — dreamspace container (10 imports)
- `components/dreams/dream.widget.SuperDreamWidget.tsx` — universal dream widget
- `components/dreams/dream.DraggableDream.tsx` — draggable dream module
- `components/dreams/dream.GlobalDragLayer.tsx` — global drag overlay
- `app/dreamspace/page.tsx` — DreamSpace page

**Core files — DreamR (feed surface):**
- `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx` — DreamR feed surface
- `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx` — feed component
- `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx` — core DreamR logic
- `dreamr/dream.panel.DreamRChannelPanel.tsx` — channel panel
- `app/dreamr/page.tsx` — standalone DreamR page

**Core files — Daydream surfaces (per-Engin workspaces):**
- `daydreams/brand/page.tsx`, `daydreams/code/page.tsx`, `daydreams/create/page.tsx`, `daydreams/games/page.tsx`, `daydreams/lab/page.tsx`, `daydreams/music/page.tsx`
- `app/daydream/*/page.tsx` — all Daydream workspace pages
- `components/daydream/dream.shell.DaydreamShell.tsx` — shared Daydream shell (7 imports, 16 consumers)
- `components/daydream/dream.JourneyTrail.tsx` — user journey trail (12 consumers)
- `components/daydream/dream.OpenDaydreamSideBButton.tsx` — side panel toggle

**Core files — Engine App shells (per-Engin sub-nav):**
- `components/engines/shared/dream.shell.EnginAppShell.tsx` — shared app shell
- `components/engines/shared/dream.bar.EnginNavBar.tsx` — per-engine nav bar
- `components/engines/shared/dream.makeEnginApp.tsx` — factory for engine apps
- `components/engines/shared/dream.EnginRuleSet.ts` — shared engine ruleset
- `components/engines/shared/dream.EnginProvider.tsx` — per-engine React context
- `components/engines/shared/index.ts` — barrel (29 consumers)
- `components/engines/brand/`, `code/`, `create/`, `games/`, `lab/`, `music/`, `portfolio/` — per-Engin app + panels

**Core files — Core Surfaces:**
- `coresurfaces/dreamsurface.ViewProfile.tsx` — public profile view
- `coresurfaces/dreamsurface.EditProfileDream.tsx` — edit profile surface
- `dream.CoreDream.tsx` (root) — root core dream mount
- `dream.ProfileSpace.tsx` (root) — profile spatial layout
- `dream.panel.PianoRollPanel.tsx` (root) — standalone piano roll

**Core files — Panels (RuntimeView panels):**
- `components/panels/dream.panel.SettingsPanel.tsx`
- `components/panels/dream.panel.AppearancePanel.tsx`
- `components/panels/dream.panel.FeedPanel.tsx` + `FeedSettingsPanel.tsx`
- `components/panels/dream.panel.ConnectorsPanel.tsx`
- `components/panels/dream.panel.MarketplacePanel.tsx`
- `components/panels/dream.panel.SafetyPanel.tsx`
- `components/panels/dream.panel.ProfilePanel.tsx`
- `components/panels/dream.panel.DataPanel.tsx`
- `components/panels/dream.panel.WidgetsPanel.tsx`
- `components/panels/dream.panel.AlgorithmPanel.tsx`
- `components/panels/dream.panel.ControlsPanel.tsx`
- `components/panels/dream.panel.PrivacyPanel.tsx`
- `components/panels/dream.panel.HelpPanel.tsx`

**Core files — Shared Dream (co-creation sessions):**
- `components/shared-dream/dream.SharedDreamProvider.tsx`
- `components/shared-dream/dream.SharedDreamCanvas.tsx`
- `components/shared-dream/dream.SharedDreamRuntime.tsx`
- `components/shared-dream/dream.InviteFlow.tsx`

**Core files — Global UI primitives:**
- `components/dream.GlobalOverlays.tsx` — global overlay manager
- `components/dream.CommandPalette.tsx` — command palette
- `components/dream.OSShellActivator.tsx` — OS shell trigger (7 imports)
- `components/dream.BrandLogo.tsx` — brand logo (5 consumers)
- `lib/dreamdm/DreamSystemContext.tsx` — global DreamDM context (4 imports, 26 consumers)
- `lib/dreamdm/barInteractions.ts` — bar interaction state (12 consumers)
- `lib/panels/panelTypes.ts` — panel type definitions (7 consumers)
- `lib/routing/surfaces.ts` — surface routing map

**Relationships:**
- Call `EnginDispatcher.dispatch()` to initiate actions
- Listen to `dreamOSBus` for state changes; render reactively
- Read from `DreamSystemContext` for shared panel/bar state

**TO CONTRIBUTE:**
- Add new visual shells or surface mounts
- Wire UI to dispatcher and Bus for state — never direct mutation
- Use `DreamSystemContext` for DreamBar/panel shared state

**NEVER:**
- Add feature or state logic inside surface files
- Update core state directly from UI event handlers

---

## 6. Navigation & Spatial Engine

**Purpose:** Handles gesture-driven spatial navigation, anchor widgets, quaternion-based transforms, and the DreamNav system for switching between OS layers.

**Core files:**
- `lib/navigation/SpatialNavigationEngine.ts` — main navigation engine (7 imports, 4 consumers)
- `lib/navigation/GestureFrameComputer.ts` — gesture frame analysis
- `lib/navigation/GestureIntentResolver.ts` — resolves gesture → intent
- `lib/navigation/PointerEventCapture.ts` — raw pointer capture
- `lib/navigation/TransformSolver.ts` — quaternion transform solver
- `lib/navigation/quaternion.ts` — quaternion math utilities
- `lib/navigation/manifold.ts` — navigation manifold topology
- `lib/navigation/NavStateBuffer.ts` — navigation state buffer
- `lib/navigation/ReturnStack.ts` — back-navigation stack
- `lib/navigation/AnchorWidgetStorage.ts` — persists anchor widget positions
- `lib/navigation/AnchorStateBuffer.ts` — real-time anchor state buffer
- `lib/navigation/WidgetInstanceMemory.ts` — widget position memory
- `lib/navigation/dream-state.ts` — navigation state snapshot
- `lib/navigation/StructureLedger.ts` — navigation structure ledger
- `lib/navigation/anchorField.ts` — spatial anchor field
- `lib/navigation/useNavigation.ts` — navigation hook
- `lib/navigation/index.ts` — barrel (16 sub-exports)
- `lib/dreamnav/delta.ts` — delta navigation primitives (7 consumers)
- `lib/dreamnav/path.ts` — path resolution
- `lib/dreamnav/tau.ts` — tau navigation metric
- `lib/dreamnav/gctAssist.ts` — GCT-assisted navigation
- `lib/dreamnav/gestures6.ts` — 6-axis gesture primitives
- `lib/gestures/touchGestures.ts` + `useTouchGestures.ts` — mobile touch gestures
- `components/dream.widget.AnchorWidget.tsx` — anchor widget component
- `components/dream.ShrunkMode.tsx` — shrunk/collapsed navigation mode
- `components/spatial/dream.shell.EnhancedSpatialShell.tsx` — spatial shell (5 imports)
- `components/spatial/dream.PixiPhysicsLayer.tsx` — Pixi.js physics layer
- `lib/ui/runtimeViewport.ts` — viewport management (6 consumers)
- `lib/ui/responsive.ts` — responsive breakpoints
- `use-spatial.ts` (root) — spatial hook entry

**Relationships:**
- Receives pointer/touch events from surfaces
- Publishes navigation intents to `EnginDispatcher`
- `GCT` subsystem feeds recommendations into navigation hints

**TO CONTRIBUTE:**
- Add new gesture patterns to `gestures6.ts` or `touchGestures.ts`
- New navigation targets: add to `manifold.ts` and register an anchor

**NEVER:**
- Bypass the navigation engine for programmatic route changes
- Store spatial state outside `AnchorWidgetStorage` / `NavStateBuffer`

---

## 7. DreamDM Bar & Messaging

**Purpose:** The persistent bottom interaction rail — home feed, notifications, DMs, and the dual-runtime seam. Also hosts the full DM messaging system.

**Core files:**
- `lib/dreamdm/DreamSystemContext.tsx` — bar's React context (26 consumers)
- `lib/dreamdm/barInteractions.ts` — bar drag, swipe, release logic (12 consumers)
- `lib/dreamdm/bridgeSeamFlow.ts` — neural seam bridge animation
- `lib/dreamdm/useDreamDMMessages.ts` — message fetching/sending
- `lib/dreamdm/useDreamDMDraft.ts` — draft message state
- `lib/dreamdm/useDreamDMConversations.ts` — conversation list
- `lib/dreamdm/useMessagingCore.ts` — messaging core composable
- `lib/dreamdm/useDreamSearch.ts` — DM search
- `lib/dreamdm/useNotifications.ts` — notification stream
- `lib/dreamdm/useDreamBarContext.ts` — bar context hook
- `lib/dreamdm/useModuleBarIntent.ts` — module bar intent hook
- `components/home/dream.NeuralSeamCanvas.tsx` — animated seam (3 imports)
- `components/dream.MessagesClient.tsx` — messages UI (6 imports)
- `components/dream.NotificationCenter.tsx` — notification UI
- `app/dreamdmbar/_components/DreamBarDataBridge.tsx` — data bridge to dual runtime
- `app/messages/page.tsx` + `app/messages/boards/` — message pages
- `lib/media/ledger.ts` — media ledger for DM attachments (14 consumers)

**Relationships:**
- `DreamSystemContext` is the shared global for bar + panel state
- Bar interactions emit Intents via `EnginDispatcher`
- Messages persist to Supabase via `api/messages/route.ts`
- `dreamOSBus` fires bar open/close events

**TO CONTRIBUTE:**
- New bar panels → add to `panelTypes.ts`, mount in `RuntimeView`
- New messaging features → extend `useMessagingCore.ts`

**NEVER:**
- Mutate bar state outside `barInteractions.ts` / `DreamSystemContext`
- Bypass child-safety scan on message content

---

## 8. DreamR Feed & Algorithm

**Purpose:** The TikTok-style swipe feed. Algorithm, bot detection, close-friends visibility, torridity scoring, and swipe personalization.

**Core files:**
- `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts` — feed ranking algorithm (6 consumers)
- `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts` — real-time bot detection
- `app/dreamdmbar/_components/dreamr/api/feedHandler.ts` — feed API handler
- `app/dreamdmbar/_components/dreamr/api/route.ts` — local feed route
- `lib/dreamr/torridityLedger.ts` — torridity engagement ledger (5 consumers)
- `lib/dreamr/swipeCalibration.ts` — swipe physics calibration
- `lib/dreamr/swipePersonalization.ts` — per-user swipe personalization
- `lib/dreamr/closeFriendsVisibility.ts` — close friends feed filter
- `lib/dreamr/feedCursor.ts` — pagination cursor
- `lib/dreamr/socialHumanityScore.ts` — humanity scoring for anti-bot
- `lib/dreamr/dreamrfeed.tsx` — feed composition (7 imports)
- `lib/feed/useLiveFeed.ts` — live Supabase realtime feed (3 imports, 10 consumers)
- `lib/feed/useYouTubeLiveFeed.ts` — YouTube connector feed
- `lib/feed/feedTopics.ts` — topic filtering
- `lib/feed/hashtags.ts` — hashtag parsing
- `lib/torridity.ts` + `lib/torridity/` — Torridity physics model (engagement gravity)
- `lib/bot-detection/` — bot detection index, detector, swipe-physics, view-tally
- `lib/botDetection.ts` — top-level bot detection facade (5 consumers)
- `app/api/dreamr/feed/route.ts` + `suggested/route.ts` + `tally/route.ts` — API endpoints

**Relationships:**
- Feed data → Supabase via `useLiveFeed`
- Torridity score influences `visibility-score.ts` in the activity system
- DreamR surface renders in `dreamsurface.dreamr.tsx`

**TO CONTRIBUTE:**
- Tune algorithm weights in `dreamrAlgorithm.ts`
- New feed signals → extend `torridityLedger.ts`

**NEVER:**
- Expose raw user velocity/swipe data to the surface layer
- Bypass bot detection on feed ranking

---

## 9. GameEngin & Cartridge System

**Purpose:** Console-class browser gaming. PS5/PS6-equivalent logical performance via WebGPU + WASM SIMD + Babylon.js 9. Cartridges are `.dreamr` binary packages.

**Core files — GameEngin runtime:**
- `lib/gameengin/GameRuntime.tsx` — main game runtime (8 imports, 4 consumers)
- `lib/gameengin/core.ts` — core game loop (2 imports)
- `lib/gameengin/platform.ts` — platform abstraction (4 imports)
- `lib/gameengin/power-systems.ts` — power/performance systems (14 consumers)
- `lib/gameengin/ai-director.ts` — AI difficulty director
- `lib/gameengin/unifiedLoop.ts` + `useUnifiedLoop.ts` — unified game loop
- `lib/gameengin/index.ts` — barrel (13 sub-exports)
- `lib/gameengin/systems/` — physics, rendering, spatial, AI, animation, assets, LOD, network, pooling, world
- `lib/gameengin/remote/` — remote control: combo machine, moves, sprint detector, layout

**Core files — Cartridge system:**
- `lib/gameengin/cartridge.ts` — cartridge contract (12 consumers)
- `lib/gameengin/cartridges/manifest.ts` — cartridge manifest (13 consumers)
- `lib/gameengin/cartridges/loaders.ts` — cartridge loader (14 imports, 7 consumers)
- `lib/gameengin/cartridges/reactCartridge.ts` — React cartridge wrapper
- `lib/gameengin/cartridges/achievementEngine.ts` — achievements
- `lib/gameengin/cartridges/saveState.ts` — save/load state
- `lib/gameengin/cartridges/apiStubs.ts` — game API stubs
- `lib/gameengin/cartridge-manifest.ts` — manifest schema
- `lib/gameengin/cartridgeLoader.ts` — WASM/asset loader
- `lib/gameengin/dreamr-loader.ts` — `.dreamr` binary loader
- `lib/gameengin/registerCartridges.ts` — wires cartridges into module registry (3 imports)
- `lib/gameengin/webgpu-runtime-shell.ts` — WebGPU shell for game runtime

**Core files — AI & procgen:**
- `lib/gameengin/ai-npcs.ts` — NPC AI agents
- `lib/gameengin/accessibility-ai.ts` — accessibility AI adapations
- `lib/gameengin/procgen.ts` — procedural generation
- `lib/gameengin/generative-audio.ts` — AI audio generation
- `lib/gameengin/neural-render.ts` — neural rendering
- `lib/gameengin/path-tracing.ts` — path tracing
- `lib/gameengin/world-crdt.ts` — CRDT world state for multiplayer
- `lib/gameengin/xr.ts` — XR/VR support stub
- `lib/gameengin/cloud-compute.ts` — cloud compute offload
- `lib/gameengin/predictive-stream.ts` — predictive asset streaming

**Core files — Knowledge Brain (R&D substrate):**
- `lib/gameengin/brain-reader.ts` — reads brain JSON files (7 consumers)
- `lib/gameengin/brain/` — 60+ JSON files: genre-dna, mechanic-library, inspiration-corpus (Hades, Celeste, Dead Cells, Hollow Knight, Outer Wilds), fun-heuristics, dialogue-patterns, emotional-tones, character-voices, material-recipes, technique-library, originality-registry

**Core files — Game components:**
- `components/gameengin/dream.cartridge.CartridgeLauncher.tsx` — cartridge launcher (6 imports)
- `components/gameengin/dream.cartridge.CartridgeBrowser.tsx` — cartridge browser
- `components/gameengin/dream.cartridge.CartridgeErrorBoundary.tsx` — error boundary
- `components/gameengin/dream.CrashReportModal.tsx` — crash reporting UI
- `components/gameengin/dream.CartridgeRegistryBootstrap.tsx` — bootstrap on app load
- `app/daydream/game/dream.shell.ImmersiveGameShell.tsx` — immersive full-screen shell (8 imports)
- `app/gameengin/cartridges/[id]/page.tsx` + `page.tsx` — cartridge pages
- `app/daydream/games/page.tsx` — games workspace page

**Core files — Built-in games:**
- `components/games/madmaxi/` — Mad Maxi platformer (full Babylon.js game): `dream.MadmaxiGame.tsx`, `config.ts`, `types.ts`, `levels.ts`, `authoredZonePacks.ts`, `materials.ts`, `vfx.ts`, `audio.ts`
- `components/games/dream.NeonDrift.tsx` — NeonDrift racing game
- `components/games/dream.EchoArena.tsx` — Echo Arena
- `components/games/dream.AvenueOfMirrors.tsx` — Avenue of Mirrors
- `components/games/dream.BabylonSideScroller.tsx` — Babylon side-scroller base
- `components/games/dream.GamesHub.tsx` — games hub (19 imports, 5 consumers)
- Plus: `dream.DefuseRitual.tsx`, `dream.EnginFracture.tsx`, `dream.Glassfall.tsx`, `dream.LexiconSolitaire.tsx`, `dream.NiteFlyerSolarHymn.tsx`, `dream.NullCathedral.tsx`, `dream.SerpentSiege.tsx`, `dream.VoidlineGP.tsx`
- `components/games/dream.GameController.tsx` — on-screen touch controller
- `components/games/dream.hud.GameHUD.tsx` + `MobileGameHUD.tsx`
- `components/games/dream.remote.GameRemote.tsx` + `GameRemoteSurface.tsx` — remote control

**Core files — Game hooks & utilities:**
- `lib/games/hooks.ts` — game lifecycle hooks (14 consumers)
- `lib/games/catalog.ts` — game catalog
- `lib/games/navigation.ts` — game navigation (10 consumers)
- `lib/games/mobileControls.ts` — mobile control scheme (8 consumers)
- `lib/games/performance-baseline.ts` — performance measurement baseline
- `lib/games/quality-plan.ts` — quality tier plan
- `lib/games/library-state.ts` — games library state
- `lib/games/avatar.ts` — player avatar
- `lib/games/useGamepad.ts` + `DualSenseManager.ts` — gamepad / DualSense haptics
- `lib/games/useGameInputKeyboardBridge.ts` — keyboard → game input bridge
- `lib/games/useRemoteChannel.ts` — remote game session channel
- `lib/games/useImmersiveGameLayout.ts` — immersive layout hook
- `lib/games/useAIDirector.ts` — AI director hook

**Autonomous Studio Team (AI agent roles):**
- `scripts/gameengin/maestro-analyze.ts` — Maestro (orchestrator)
- `scripts/gameengin/prophet-run.ts` — Prophet (R&D / fun design)
- `scripts/gameengin/artisan-run.ts` — Artisan (visual asset generation)
- `scripts/gameengin/mechanic-run.ts` — Mechanic (logic, physics, WASM)
- `scripts/gameengin/writer-run.ts` — Writer (narrative & dialogue)
- `scripts/gameengin/upgrader-run.ts` — Tech Director (performance)
- `scripts/gameengin/architect-run.ts` — Architect (system design)
- `scripts/gameengin/package-cartridge.ts` — Cartridge packager
- `GameENGINspec.md` — full technical spec (FlatBuffers schema, WASM spec, Havok physics)

**Relationships:**
- `GameRuntime` pulls from `cartridges/loaders.ts` → `.dreamr` binary
- `registerCartridges.ts` wires cartridges into `moduleRegistry.ts`
- `dreamOSBus` receives game events (score, crash, complete)
- `brain-reader.ts` feeds AI agents design knowledge

**TO CONTRIBUTE:**
- New game → build as a React cartridge in `components/games/`, register in `cartridges/loaders.ts`
- New brain knowledge → add JSON files to `lib/gameengin/brain/`
- New AI agent role → add script in `scripts/gameengin/`

**NEVER:**
- Mix game logic with OS/surface logic
- Skip registering a cartridge in `registerCartridges.ts`
- Put save-state outside `cartridges/saveState.ts`

---

## 10. WebGPU & Rendering

**Purpose:** Browser-native GPU rendering. Adaptive quality tier selection, Babylon.js engine creation, god-tier post-processing, and WebGPU shader pipeline.

**Core files:**
- `lib/webgpu.ts` — top-level WebGPU facade (4 consumers)
- `lib/webgpu/director.ts` — render director (6 consumers)
- `lib/webgpu/adaptiveQuality.ts` — adaptive quality tier switching
- `lib/webgpu/useWebGPUDirector.ts` — director hook
- `lib/god-tier/godTierEngine.ts` — god-tier post-fx engine (7 consumers)
- `lib/god-tier/useGodTier.ts` — god-tier hook
- `lib/babylon/createEngine.ts` — Babylon.js engine factory (9 consumers)
- `lib/babylon/dreamengine-hybrid.ts` — hybrid Babylon/WebGPU setup
- `lib/renderer/Canvas2DRenderer.ts` — 2D canvas renderer fallback
- `lib/renderer/FrustumCuller.ts` — frustum culling
- `lib/renderer/IRenderer.ts` — renderer interface
- `lib/renderer/index.ts` — renderer barrel
- `components/webgpu/dream.WebGPUShowcase.tsx` — WebGPU demo
- `components/webgpu/renderer.ts` — renderer component logic
- `components/webgpu/shaders.ts` — shader constants
- `components/webgpu/neuralPostProcess.ts` — neural post-processing
- `components/dreamengin/dream.scene.BabylonGameScene.tsx` — Babylon game scene (3 imports)
- `components/dreamengin/dream.scene.DrEamsScene.tsx` — DrEams 3D scene
- `components/optimizer/dream.scene.BabylonOptimizeroScene.tsx` — optimizer scene
- `dream.scene.BabylonOptimizeroScene.tsx` (root) + `dream.scene.DrEamsScene.tsx` (root)
- `components/three/dream.scene.tsx` — Three.js scene
- `components/shaders/dream.NeonGlow.tsx`, `dream.LightningWing.tsx`, `dream.Refractor.tsx`
- `components/warp/dream.WarpCanvas.tsx` + `lib/warp/warpEngine.ts` + `useWarp.ts`
- `public/workers/engin-shader.wasm` + `engin-shader.worker.ts` — shader WASM worker
- `lib/bus.wasm` — compiled WASM bus module

**Relationships:**
- `godTierEngine` consumes `webgpu/director.ts`
- `GameRuntime` uses `createEngine` + `godTierEngine`
- Adaptive quality reads `lib/games/performance-baseline.ts` targets

**TO CONTRIBUTE:**
- New shaders → add to `components/shaders/` and import in scene
- New render pass → extend `godTierEngine.ts`

**NEVER:**
- Call Babylon.js directly from surface components — use `createEngine`
- Skip adaptive quality tier checks before heavy rendering

---

## 11. VM & WASM Runtime

**Purpose:** Dual-VM coordination: one JavaScript VM and one WASM/GPU VM for high-performance game and compute tasks. Manages inter-VM messaging, resource quotas, and snapshots.

**Core files:**
- `lib/vm/wasmGpuVM.ts` — WASM/GPU VM (3 imports, 5 consumers)
- `lib/vm/bufferManager.ts` — GPU buffer manager
- `lib/vm/pipelineCache.ts` — WebGPU pipeline cache
- `lib/vm/types.ts` — VM type definitions (6 consumers)
- `lib/vm/snapshot.ts` — VM state snapshots
- `lib/vm/dualVMCoordinator.ts` — coordinates both VMs
- `lib/vm/dual-runtime.ts` — dual runtime bridge at VM level
- `lib/vm/inter-vm-messaging.ts` — cross-VM message protocol
- `lib/vm/bus-events.ts` — VM bus event types
- `lib/vm/index.ts` — barrel (11 sub-exports)
- `lib/vm/resource-quota.ts` — per-VM resource limits
- `lib/vm/security.ts` — VM isolation / security
- `lib/vm/wasm-features.ts` — WASM feature detection
- `assembly/` — AssemblyScript source for WASM compilation
- `public/cartridges/mad-maxi/logic/main.wasm` — compiled game WASM

**Relationships:**
- `dualRuntimeBridge.ts` (runtime subsystem) bridges JS ↔ WASM VMs
- `GameRuntime` uses WASM VM for physics and game logic
- `EnginDispatcher` can route compute-heavy Intents to WASM VM

**TO CONTRIBUTE:**
- New WASM module → write in `assembly/`, compile, register in `wasmGpuVM`
- New inter-VM message type → extend `bus-events.ts`

**NEVER:**
- Run game physics on JS VM (always WASM)
- Share mutable state directly between VMs (use `inter-vm-messaging`)

---

## 12. AI System (DrEams / Boogieman / Idari / EAMS / Triad)

**Purpose:** Multi-model AI orchestration. Covers: in-app AI assistant (DrEams), content moderation AI (Boogieman), platform health agent (Idari), event-driven AI (EAMS), and the Triad consensus system.

**Core files — AI core:**
- `lib/ai/triad.ts` — Triad multi-agent consensus system (2 imports, 17 consumers)
- `lib/ai/schemas.ts` — AI request/response schemas (9 consumers)
- `lib/ai/groq.ts` — Groq LLM integration (5 consumers)
- `lib/ai/tool-router.ts` — routes AI tool calls to handlers (3 imports)
- `lib/ai/handlers/index.ts` + `navigation.ts` + `dreams.ts` + `social.ts` — tool call handlers
- `lib/ai/audit.ts` — AI action audit log (2 imports, 11 consumers)
- `lib/ai/capability-gate.ts` — per-user AI capability gating (3 imports)
- `lib/ai/confirm.ts` — AI action confirmation gate
- `lib/ai/confirm-token.ts` — one-time confirmation tokens
- `lib/ai/idempotency.ts` — idempotency for AI requests
- `lib/ai/rate-limiter.ts` + `rateLimit.ts` — dual-layer rate limiting
- `lib/ai/CIC.ts` — CIC (content intelligence classifier)
- `lib/ai/tfBackend.ts` — TensorFlow.js backend

**Core files — Boogieman (moderation):**
- `lib/ai/boogieman.ts` — content moderation engine (2 imports, 7 consumers)
- `lib/ai/boogie-policy.ts` — moderation policy rules (10 consumers)
- `lib/ai/boogie-verifier.ts` — policy verification
- `lib/policy/boogiePolicy.ts` — platform-level boogie policy
- `lib/activity/boogieActivityPolicy.ts` — activity-specific policy
- `app/api/ai/boogieman/route.ts` + `child-safety/route.ts` + `privacy-event/route.ts` + `status/route.ts`

**Core files — Child Safety:**
- `lib/child-safety/childSafetyDetector.ts` — main detector (1 import, 8 consumers)
- `lib/child-safety/imageClassifier.ts` — image-based CSAM detection (1 import, 5 consumers)
- `lib/child-safety/ncmecReporter.ts` — mandatory NCMEC reporting (2 imports, 5 consumers)
- `lib/child-safety/scanMediaUrls.ts` — scans media URLs (2 imports, 4 consumers)
- `lib/child-safety/messageContextChecker.ts` — message-context safety check
- `app/api/admin/child-safety/route.ts`

**Core files — Idari (platform health agent):**
- `lib/agents/idari.ts` — Idari agent (1 import, 6 consumers)
- `lib/agents/idariLoop.ts` — Idari observation loop (5 imports, 3 consumers)
- `lib/observability/collector.ts` — metric collector (1 import, 9 consumers)
- `lib/observability/correlator.ts` — metric correlator
- `lib/observability/rootCauseAnalyzer.ts` — root cause engine (3 imports, 6 consumers)
- `lib/observability/immediateAction.ts` — immediate remediation actions
- `lib/observability/healthTrend.ts` — health trend tracking
- `lib/observability/otel.ts` + `otelBridge.ts` — OpenTelemetry integration
- `lib/observability/index.ts` — barrel
- `app/(internal)/idari-console/` — internal admin pages (health, errors, AI console)
- `app/api/admin/observability/route.ts` + `ai-chat/route.ts`

**Core files — EAMS & agent bus:**
- `lib/agents/agentBus.ts` — agent event bus (2 imports, 7 consumers)
- `lib/agents/boogieManAI.ts` — BoogieMan AI agent
- `lib/agents/drEamsMode.ts` — DrEams mode toggle
- `lib/agents/teachBus.ts` — teaching/learn event bus
- `lib/agents/uiActions.ts` — AI-driven UI actions
- `lib/agents/dreamengin.ts` — DREAMengin agent interface
- `lib/agentOS.ts` + `lib/agentOS/hostTools.ts` — Agent OS host
- `app/api/ai/eams/route.ts` + `execute/route.ts` + `idari/route.ts`

**Core files — DrEams AI (in-app):**
- `dr-eams/tools.ts` + `dr-eams/capabilities.yaml` — DrEams tool definitions
- `lib/code/drEamsCodeAssist.ts` — code assist AI
- `lib/dreamengin/drEamsSearch.ts` — OS-level semantic search
- `lib/dreamengin/DrEamsAnimator.ts` — DrEams animation controller
- `components/dream.AIAssistant.tsx` — AI assistant UI
- `components/dream.DrEamsModeToggle.tsx` — mode toggle
- `components/dream.DrEamsVoiceAssistant.tsx` — voice interface
- `app/api/dr-eams/run/route.ts` + `hf/route.ts`

**Human AI Army (UX auditing):**
- `.github/scripts/humanai_audit.py` — audit script
- `agents/humanAI.persona.md` — base persona definition
- `agents/humanAI/personas/` — 5 personas: accessibility, creator, ios-first, power-user, social-explorer
- `agents/humanAI/orchestrator.md` — audit orchestration spec
- `.github/workflows/humanai-audit.yml` — workflow

**Relationships:**
- All AI routes → `lib/ai/audit.ts` for logging
- `Triad` system achieves consensus across multiple models before acting
- `Boogieman` is called by every content-creating endpoint (posts, comments, messages)
- `Idari` loop reads `observability/collector.ts` → triggers `immediateAction`

**TO CONTRIBUTE:**
- New AI tool → add to `lib/ai/handlers/`, register in `tool-router.ts`
- New moderation rule → extend `boogie-policy.ts`
- New audit persona → add to `agents/humanAI/personas/`

**NEVER:**
- Bypass child safety scan on any user-generated content
- Ship AI actions without audit trail
- Let Boogieman run on unverified data

---

## 13. Social & Content System

**Purpose:** Connectors to external platforms (Instagram, YouTube, Bluesky, Mastodon, Twitter/X, Reddit, GitHub, TikTok, and more), post/comment/like/follow social graph, RSS feed, cross-posting, and content intelligence.

**Core files — Connectors:**
- `lib/connectors/connectorRegistry.ts` — registry of all connectors (9 consumers)
- `lib/connectors/normalise.ts` — normalizes data from all platforms (19 consumers)
- `lib/connectors/syncDispatch.ts` — sync dispatcher (8 imports, 4 consumers)
- `lib/connectors/reconcile.ts` — conflict reconciliation (4 imports, 3 consumers)
- `lib/connectors/installFlow.ts` — connector install/auth flow (1 import, 5 consumers)
- `lib/connectors/webhookVerification.ts` — inbound webhook verification
- `lib/connectors/deliveryStrategy.ts` — content delivery strategy
- `lib/connectors/providers/youtube.ts` — YouTube (2 imports, 8 consumers)
- `lib/connectors/providers/instagram.ts` — Instagram
- `lib/connectors/providers/bluesky.ts` — Bluesky / AT Protocol
- `lib/connectors/providers/mastodon.ts` — Mastodon
- `lib/connectors/providers/nostr.ts` — Nostr (decentralized)
- `lib/connectors/providers/twitter.ts`, `reddit.ts`, `github.ts`, `tiktok.ts`, `facebook.ts`, `devto.ts`, `medium.ts`, `hackernews.ts`, `substack.ts`, `tumblr.ts`, `pinterest.ts`, `podcast.ts`
- `lib/connectors/providers/shellhub.ts` — ShellHub device connector
- `lib/connectors/youtube.ts` — YouTube OAuth integration
- `app/api/connectors/[provider]/` — connect, disconnect, sync, verify, items, webhooks
- `app/api/connectors/instagram/oauth/` + `youtube/oauth/` — OAuth flows
- `app/connectors/dream.ConnectorsClient.tsx` — connectors management UI (10 imports)

**Core files — Social graph:**
- `lib/social/platforms.ts` — platform definitions (8 consumers)
- `lib/social/crossPost.ts` — cross-platform posting
- `lib/social/rss-feed.ts` — RSS generation (13 consumers)
- `lib/social/livekit.ts` — LiveKit real-time video/audio
- `lib/social-feed.ts` — social feed aggregation
- `app/api/follow/route.ts`, `likes/route.ts`, `comments/route.ts`, `blocks/route.ts`, `close-friends/route.ts`
- `app/api/posts/` — CRUD for posts, views, saves
- `app/api/profile/route.ts`, `activity/track/route.ts`, `notifications/route.ts`
- `app/api/social/livekit/` — LiveKit room + token
- `app/api/social/ipfs/route.ts` — IPFS decentralized storage
- `app/api/social/rss-feed/route.ts`

**Core files — Content intelligence:**
- `lib/content/publishIntent.ts` — publish workflow
- `lib/content/seoScorer.ts` — SEO scoring
- `lib/content/transcriptEditor.ts` — transcript editing
- `lib/content/voiceClone.ts` — voice cloning
- `lib/content/generativeFill.ts` — generative image fill
- `lib/composite/` — compositor, rotoscope, matchmover, motionCapture, fxSimulation
- `app/api/content/` — transcribe, voice-clone, generative-fill, intelligence

**Core files — Media ledger:**
- `lib/media/ledger.ts` — media asset ledger (14 consumers)
- `lib/media/postMedia.ts` — post media processing (9 consumers)
- `app/api/ledger-media/route.ts`, `upload/route.ts`

**Relationships:**
- Every connector feeds data through `normalise.ts` before storage
- Supabase stores all social graph data; real-time via `useLiveFeed`
- Child safety scans run on all posts, comments, and messages before storage

**TO CONTRIBUTE:**
- New connector → add provider in `lib/connectors/providers/`, register in `connectorRegistry.ts`, add OAuth route
- Must implement: `normalise`, `sync`, `verify`, `disconnect`

**NEVER:**
- Store connector OAuth tokens anywhere except Supabase
- Skip the child safety scan on content

---

## 14. Activity & Economy System

**Purpose:** Activity Quality Score (AQS), activity tracking, revenue split, Skip Credits (in-app currency), ads platform, and the boogie moderation-activity policy bridge.

**Core files:**
- `lib/activity/types.ts` — activity type definitions (21 consumers — 2nd most imported type)
- `lib/activity/scoring.ts` — activity scoring logic (5 consumers)
- `lib/activity/aqs.ts` — Activity Quality Score engine (2 imports, 5 consumers)
- `lib/activity/visibility-score.ts` — feed visibility scoring (3 imports, 3 consumers)
- `lib/activity/revenueSplit.ts` — creator revenue split
- `lib/activity/skipCredits.ts` — Skip Credits balance management
- `lib/activity/boogieActivityPolicy.ts` — boogie-activity bridge policy
- `app/api/activity/track/route.ts` — activity tracking endpoint
- `app/api/ads/` — ads orders, view tracking
- `app/api/skip-credits/` — balance, earn, use
- `app/api/views/track/route.ts` — view counting
- `components/activity/dream.ActivityProfile.tsx` — activity profile display
- `components/activity/dream.ActivityPostForm.tsx` — activity-aware post form
- `components/activity/dream.TierBadge.tsx` — tier badge display
- `components/ads/dream.AdUnit.tsx` — ad unit component
- `components/ads/dream.SkipCreditBalance.tsx` — Skip Credit balance display

**Relationships:**
- AQS score feeds into DreamR algorithm via `visibility-score`
- Boogie moderation events affect activity score
- Skip Credits gate ad-skip behavior

**TO CONTRIBUTE:**
- New activity signal → extend `types.ts` and `scoring.ts`
- New credit mechanic → extend `skipCredits.ts`

**NEVER:**
- Modify AQS score directly from UI
- Let ads bypass boogie moderation

---

## 15. Identity & Canonical Naming

**Purpose:** Enforces a strict canonical naming system for all modules, surfaces, and entities. Prevents naming collisions across the distributed OS.

**Core files:**
- `lib/identity/canonical-names.ts` — canonical name registry (16 consumers — critical hub)
- `lib/dreamengin/osSubsystemManifest.ts` — OS subsystem manifest (5 imports, 3 consumers)
- `lib/dream-window/DreamWindowLifecycle.ts` — dream window lifecycle (1 import, 10 consumers)
- `lib/dream-window/enginConnectionNetwork.ts` — Engin connection topology
- `lib/dream-window/connectionVerbs.ts` — connection action vocabulary
- `lib/dream-window/runtimeRegion.ts` — runtime region mapping
- `lib/dream-window/useDreamWindowActions.ts` — dream window action hook
- `lib/dream-window/index.ts` — barrel
- `lib/feature-build/featureManifest.ts` — feature manifest (1 import, 4 consumers)
- `lib/feature-build/buildCycle.ts` — feature build cycle
- `lib/feature-build/uiQualityCriteria.ts` — UI quality criteria
- `lib/feature-build/index.ts` — barrel

**Relationships:**
- `canonical-names.ts` is imported by `DreamWindowLifecycle`, `osSubsystemManifest`, `seamClipboard`, `enginConnectionNetwork`
- Naming violations detected by `.github/scripts/check_workflow_masking.py`

**TO CONTRIBUTE:**
- All new modules, surfaces, or entities must be registered in `canonical-names.ts` first
- Update `osSubsystemManifest.ts` when adding a new OS subsystem

**NEVER:**
- Create modules with undeclared or non-canonical names
- Rename existing canonical entries without updating all consumers

---

## 16. Backend & API Layer

**Purpose:** All Next.js API routes, the Express social aggregator backend, Supabase integration, and platform-level health/auth.

**Core files — Next.js API routes (107 endpoints):**
- `app/api/auth/` — logout, providers, OAuth callback
- `app/api/account/` — delete-data, delete-dream, export-data
- `app/api/admin/` — ai-chat, ai-request, child-safety, code-files, observability
- `app/api/ai/` — boogieman (4 routes), eams, execute, idari
- `app/api/posts/` — CRUD, save, view, profile
- `app/api/feed/route.ts` + `embed-feed/route.ts`
- `app/api/dreamr/` — feed, suggested, tally
- `app/api/dreams/` — feed, instances, transfer
- `app/api/messages/` — direct messages, boards
- `app/api/connectors/` — full connector lifecycle
- `app/api/content/` — media intelligence APIs
- `app/api/gameengin/crash-report/route.ts`
- `app/api/health/route.ts`, `metrics/route.ts`, `platform/errors/route.ts`
- `app/api/marketplace/` + `shop/` + `ads/` + `skip-credits/`
- `app/api/shared-dream/sessions/` — co-creation sessions
- `app/api/social/` — LiveKit, IPFS, RSS
- `app/api/widgets/` + `dream-windows/` + `home-layout/` + `user/layout/`
- `lib/api/route.ts` — shared route handler factory (14 consumers)

**Core files — Express backend:**
- `backend/index.js` — Express server entry
- `backend/src/Routes/apiRoutes.js` — API route definitions
- `backend/src/services/livekitService.js` — LiveKit integration service

**Core files — Supabase integration:**
- `lib/supabase/server.ts` — server-side client (187 consumers — most imported file)
- `lib/supabase/client.ts` — browser-side client (63 consumers)
- `lib/supabase/config.ts` — Supabase config (14 consumers)
- `lib/supabase/safeGetUser.ts` — safe user getter (8 consumers)
- `lib/supabase/vector.ts` — pgvector support
- `lib/supabase/realtime.ts` — realtime subscription helpers
- `supabase/migrations/` — 55 SQL migration files (full schema history)
- `supabase/schema-final.sql` — consolidated schema
- `supabase/seed.sql` — development seed data

**Core files — Auth:**
- `app/auth/callback/route.ts` — OAuth callback
- `lib/auth/nextRedirect.ts` — auth redirect helper (9 consumers)
- `lib/admin/lockout.ts` — admin lockout protection
- `lib/admin/upgrade-readiness.ts` — upgrade readiness checker
- `lib/setup/checks.ts` — first-run setup checks
- `lib/consent/consentManager.ts` — user consent management

**Relationships:**
- All routes → `lib/supabase/server.ts` for DB access
- Content routes → Boogieman scan before storage
- Admin routes → `lib/admin/lockout.ts` gate

**TO CONTRIBUTE:**
- New endpoint → add in `app/api/<domain>/route.ts`, use `lib/api/route.ts` factory
- New DB table → add Supabase migration in `supabase/migrations/`
- Auth-required routes → use `safeGetUser.ts`

**NEVER:**
- Create hidden state stores outside Supabase
- Ship DB changes without a migration file
- Bypass `lockout.ts` for admin endpoints

---

## 17. Widget & DreamWindow System

**Purpose:** Modular, user-placeable widgets ("Dreams") that mount inside the spatial shell. Each widget is a mini-app that can host connectors, games, media, or arbitrary content.

**Core files:**
- `lib/widgets/widgetRegistry.ts` — widget type registry (9 consumers)
- `lib/widgets/parseConfig.ts` — parse widget config from DB
- `lib/widgets/parse.ts` — widget config parser
- `lib/widgets/feed-resolver.ts` — widget feed data resolver
- `lib/widgets/WidgetBus.ts` — widget event bus
- `lib/widgets/WidgetEventBus.ts` — typed event bus
- `lib/widgets/WidgetLinkGraph.ts` — widget link graph
- `lib/widgets/CrossWidgetPosting.ts` — cross-widget data posting
- `lib/widgets/useWidget.ts` — widget lifecycle hook
- `components/dreams/dream.widget.SuperDreamWidget.tsx` — universal widget host (3 imports)
- `components/widgets/dream.widget.WidgetCard.tsx` — widget card shell
- `components/widgets/dream.widget.UniversalWidget.tsx` — universal widget
- `components/widgets/dream.widget.WidgetShell.tsx` — widget shell
- `components/widgets/dream.widget.WidgetLibrary.tsx` — widget picker
- `components/widgets/dream.widget.WidgetSurface.tsx` — widget surface
- `components/widgets/dream.widget.WidgetPlaceholder.tsx` — loading placeholder
- `components/widgets/dream.widget.PlayMediaWidget.tsx` — media widget
- `components/widgets/dream.EditModeProvider.tsx` + `dream.EditModeBanner.tsx`
- `components/widgets/dream.AddDreamCTA.tsx` + `dream.ConfigureSheet.tsx`
- `lib/dream-window/DreamWindowLifecycle.ts` — dream window lifecycle (10 consumers)
- `app/api/widgets/feed/route.ts` + `instances/route.ts`
- `app/api/dream-windows/route.ts` + `[id]/route.ts`

**Relationships:**
- Widgets are registered in `widgetRegistry` and installed via `connectors/installFlow`
- Widget state persists to Supabase `widget_instances` table
- `CrossWidgetPosting` allows widgets to share data via `WidgetLinkGraph`

**TO CONTRIBUTE:**
- New widget → implement in `components/widgets/`, register in `widgetRegistry.ts`
- New widget config → extend `types/widgetConfigs.ts` and `parseConfig.ts`

**NEVER:**
- Put widget business logic inside the `SuperDreamWidget` host
- Bypass the widget registry for direct widget mounting

---

## 18. Music / StarMaker Engin

**Purpose:** DAW (Digital Audio Workstation) built into the platform. Piano roll, multitrack arrangement, session view, comping, audio fingerprinting, and voice cloning.

**Core files:**
- `lib/music/starmaker.ts` — StarMaker DAW core (3 consumers)
- `lib/music/starmakerDaw.ts` — DAW session management (6 consumers)
- `lib/music/starmakerArrangement.ts` — multitrack arrangement
- `lib/music/presets.ts` — instrument/effect presets
- `lib/music/wasmAudioBridge.ts` — WASM audio DSP bridge
- `lib/audioFingerprint.ts` + `lib/audio-fingerprint/` — fingerprint, peak-map, stem-extractor
- `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx` — piano roll UI
- `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx`
- `components/daydream/starmaker/dream.panel.CompingPanel.tsx`
- `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx`
- `components/dream.AudioVisualizer3D.tsx` — 3D audio visualizer
- `components/music/dream.SoundRecorder.tsx` — recording UI
- `dream.panel.PianoRollPanel.tsx` (root) — root-mounted piano roll
- `app/daydream/music/page.tsx` + `upload/page.tsx` + `app/api/music/route.ts`
- `engins/engin.StarMakerEngin.tsx` — StarMaker Engin host (27 imports)

**Relationships:**
- Audio fingerprinting feeds into `torridity` engagement scoring
- StarMaker Engin uses `EnginRuleSetContract` for mode switching
- WASM audio bridge processes DSP off the main thread

**TO CONTRIBUTE:**
- New DAW feature → add to `starmakerDaw.ts` + corresponding panel component
- New audio effect → implement WASM module, bridge via `wasmAudioBridge`

---

## 19. Forge & Engine Builder

**Purpose:** Visual engine builder for creating new Engins and Daydream surfaces. The Forge is where creators build custom dream environments.

**Core files:**
- `lib/forge/forgeRegistry.ts` — forge registry (18 consumers — most imported forge file)
- `lib/forge/forgeIntelligence.ts` — AI intelligence for forge (1 import, 12 consumers)
- `lib/forge/forgeMomentum.ts` — forge activity momentum (1 import, 6 consumers)
- `lib/forge/forgeNexus.ts` — forge nexus connections
- `lib/forge/forgeRituals.ts` — forge build rituals
- `lib/forge/forgeBuild.ts` — build execution
- `lib/forge/engineForge.ts` — engine forge core (2 imports)
- `lib/forge/useForgeActivity.ts` — forge activity hook (1 import, 13 consumers)
- `lib/forge/useForgeBuild.ts` — forge build hook
- `lib/forge-ngn/piece-registry.ts` — NGN piece registry (4 consumers)
- `lib/forge-ngn/assembly.ts` — NGN assembly logic
- `lib/forge-ngn/index.ts` — NGN barrel
- `lib/componentInventory.ts` — component inventory for forge (6 consumers)
- `components/forge/dream.panel.AIBuilderPanel.tsx` — AI builder panel (3 imports)
- `components/forge/dream.EngineBuilderCanvas.tsx` — drag-drop canvas
- `components/forge/dream.widget.ForgeMomentumWidget.tsx` — momentum display
- `components/daydream/dream.NGNEngin.tsx` — NGN (Next-Generation) Engin builder
- `dream.ForgeDreamCanvas.tsx` (root) — root canvas mount
- `engins/dream.ForgeEngin.tsx` — Forge Engin (11 imports)
- `app/daydream/forge/page.tsx`
- `app/api/forge/build/route.ts`

**Relationships:**
- Forge reads `componentInventory` to populate builder canvas
- `forgeIntelligence` uses AI Triad for smart suggestions
- Built Engins register in `moduleRegistry` via the runtime

---

## 20. Journey & Intelligence System

**Purpose:** Tracks user journeys through the platform, provides session continuity, and powers contextual intelligence (what the user is working on, what they need next).

**Core files:**
- `lib/journey/journeyDots.ts` — journey dot tracking (1 import, 4 consumers)
- `lib/journey/journeyInsights.ts` — journey analytics (1 import, 3 consumers)
- `lib/journey/withJourney.ts` — HOC for journey tracking
- `lib/intelligence/sessionContinuity.ts` — session continuity
- `lib/intelligence/sessionPatternEngine.ts` — behavioral pattern engine
- `lib/intelligence/continuityHelpers.ts` — continuity utilities (1 import, 4 consumers)
- `lib/intelligence/useSessionIntelligence.ts` — session intelligence hook (3 imports, 3 consumers)
- `components/daydream/dream.JourneyTrail.tsx` — journey trail visualization (12 consumers)
- `app/api/journey/route.ts`
- `types/journey.ts` — journey type definitions (7 consumers)

**Relationships:**
- `journeyDots` emits to `useEnginWorkflow` for workflow continuity
- `sessionPatternEngine` feeds into `forgeIntelligence` for suggestions
- `useSessionIntelligence` connects to `dreamOSBus` for OS-level continuity

---

## 21. Observability & Platform Health

**Purpose:** OpenTelemetry metrics, error collection, root cause analysis, and the Idari agent's automated remediation loop.

**Core files:**
- `lib/observability/collector.ts` — metric collector (9 consumers)
- `lib/observability/correlator.ts` — metric correlator (1 import, 6 consumers)
- `lib/observability/rootCauseAnalyzer.ts` — root cause engine (3 imports, 6 consumers)
- `lib/observability/immediateAction.ts` — automated fixes (1 import, 4 consumers)
- `lib/observability/healthTrend.ts` — health trend tracker
- `lib/observability/otel.ts` + `otelBridge.ts` — OpenTelemetry bridging
- `lib/observability/index.ts` — barrel
- `lib/runtime/snapshotFingerprint.ts` — state diff fingerprinting
- `grafana/` — Grafana dashboards and Prometheus datasource config
- `prometheus/prometheus.yml` — Prometheus scrape config
- `app/api/metrics/route.ts` + `platform/route.ts` + `user/[userId]/route.ts`
- `app/api/health/route.ts`
- `app/api/platform/errors/route.ts`
- `app/(internal)/idari-console/` — internal health + error dashboards
- `components/idari/dream.PlatformHealth.tsx`

**Relationships:**
- Idari loop: `collector` → `correlator` → `rootCauseAnalyzer` → `immediateAction`
- `snapshotFingerprint` diffs state to detect regressions

---

## 22. GCT (Geometric Content Theory) System

**Purpose:** Anomaly detection, audio fingerprinting for GCT analysis, image search, and recommendation generation. Used for content quality and originality scoring.

**Core files:**
- `lib/gct/gct-engine.ts` — GCT core engine (6 consumers)
- `lib/gct/anomaly-detection.ts` — anomaly detection
- `lib/gct/audio-fingerprint.ts` — audio GCT fingerprinting
- `lib/gct/image-search.ts` — image similarity search
- `lib/gct/recommendations.ts` — GCT-based recommendations
- `lib/gct/index.ts` — barrel (5 exports, 2 consumers)
- `lib/dreamnav/gctAssist.ts` — GCT-assisted navigation hints
- `lib/dreamnav/tau.ts` — tau navigation metric (GCT-derived)
- `research/ccc-ada-twin-engine/` — theoretical research backing GCT

**Relationships:**
- GCT recommendations feed into DreamR algorithm
- GCT audio fingerprint is separate from music StarMaker fingerprint
- `gctAssist` provides navigation suggestions to `SpatialNavigationEngine`

---

## 23. Optimizer & Experiments

**Purpose:** Incubator for performance optimization, creative validation, constraint solving, and pre-production trials.

**Core files:**
- `lib/optimizer/constraint-solver.ts` — optimization constraint solver (1 import, 3 consumers)
- `lib/optimizer/creative-validator.ts` — creative output validator (1 import, 3 consumers)
- `lib/optimizer/creative-optimizero.ts` — creative optimizer (5 consumers)
- `lib/optimizer/babylon-optimizero.ts` — Babylon.js scene optimizer (1 import, 3 consumers)
- `lib/optimizer/types.ts` — optimizer type definitions (5 consumers)
- `lib/optimizer/index.ts` — barrel
- `optimizer/constraint-solver.ts`, `creative-validator.ts`, `index.ts`, `types.ts` — root-level optimizer dir
- `components/optimizer/dream.scene.BabylonOptimizeroScene.tsx` — optimizer 3D scene
- `dream.scene.BabylonOptimizeroScene.tsx` (root) — root mount
- `experiments/.gitkeep` — experiments sandbox (empty until needed)
- `config/advanced-game-targets.json` — target performance specs
- `config/optimizer.yaml` — optimizer tuning

**Portfolio optimizer:**
- `engins/portfolio/dream.PortfolioEngin.tsx` — portfolio optimization Engin
- `engins/dream.QuantumCircuitCanvas.tsx` — quantum circuit visualization
- `components/engines/portfolio/panels/dream.panel.OptimizePanel.tsx`
- `components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel.tsx`

---

## 24. CI/CD, Automation & Repo Health

**Purpose:** GitHub Actions pipelines, automated audits, PR bots, build memory, and repo hygiene enforcement.

**Core files — Workflows (55 total):**
- `daydream-engin-build-cycle.yml` — build cycle automation
- `humanai-audit.yml` + `humanai-army-audit.yml` — UX audit
- `idari-daily.yml` — daily Idari health check
- `full-audit.yml` — comprehensive audit
- `gameengin-ai-agent.yml` — game AI agent workflow
- `spec-engin-ai-agent.yml` — spec enforcement agent
- `report-driven-coding-agent.yml` — report-driven feature builds
- `elite-gameengin-evolution.yml` — evolution pipeline
- `sql-migration-guard.yml` — DB migration safety
- `daydream-{brand,code,create,games,lab,music}-engin.yml` — per-Engin daydream workflows
- `vercel-deploy.yml` — Vercel deployment
- `preflight.yml` + `dreamengin-preflight.yml` — pre-merge checks
- `bouncer.yml` — PR quality gate
- `bot-pr-automerge.yml` — bot PR automation
- `garbageman.yml` — dead code cleanup
- `readme-autosync.yml` + `docs-auto-update.yml` — doc automation
- `repo-snapshot.yml` + `update-repo-state.yml` — state tracking
- `generatesupabasetypes.yml` — auto-generate Supabase TS types
- `db-extension-audit.yml` + `db-extension-check.yml` — DB safety
- `orphan-guard.yml` — detect disconnected code

**Core files — Scripts:**
- `.github/scripts/humanai_audit.py` — human AI audit (45KB)
- `.github/scripts/dreamengin_core.py` — core system checks (19KB)
- `.github/scripts/ai_implement.py` — AI implementation agent
- `.github/scripts/ai_neural_decision.py` — neural decision engine
- `.github/scripts/ai_propose.py` + `ai_report_propose.py` — AI proposal agents
- `.github/scripts/humanai_audit.py` — UX audit
- `.github/scripts/issue-bot.js` — issue bot (45KB)
- `scripts/check-root-hygiene.mjs` — root hygiene checker
- `scripts/check-orphans.mjs` + `wire-orphans.mjs` — orphan management
- `scripts/export-full-code.mjs` — codebase export
- `scripts/update-readme.mjs` — README auto-sync
- `build-memory/` — actions.json, events.json, routes.json, schema.json, ui-surfaces.json
- `repo-visualizer/` — live graph visualizer (served via `pnpm viz`)
- `.ci/snapshot.md` + `snapshot.diff.txt` — CI state snapshots

**Relationships:**
- Workflows trigger on PR, push, schedule, and manual dispatch
- `build-memory/` is read by `dreamengin_core.py` to track system state
- `humanai_audit.py` outputs reports that feed back into Idari

**TO CONTRIBUTE:**
- New workflow → add YAML to `.github/workflows/`, add ruleset to `.github/ruleset/`
- New audit script → add to `.github/scripts/`

**NEVER:**
- Merge without passing `preflight.yml` and `bouncer.yml`
- Skip the `sql-migration-guard.yml` on DB changes

---

## 25. Specs, Docs & System Reference

**Purpose:** Living specification, architecture, contributor guidelines, and project roadmap. The plan wins in any dispute.

**Core files:**
- `AGENTS.md` — Operating law for all AI agents
- `GameENGINspec.md` — Full GameEngin technical spec (cartridge format, FlatBuffers, Havok)
- `VISUAL-SCHEMATIC.md` — Auto-generated repo graph (1,962 files, 6,314 edges)
- `COOP_AND_SOLO_ROADMAP.md` — Coop and solo development roadmap
- `REPO_STATE.md` — Auto-generated repo state analysis
- `README.md` — Main entry point
- `CHANGELOG.md` — Change history
- `docs/ARCHITECTURE.md`, `AXIOMS.md`, `CONSTITUTION.md`, `LAW.md` — system laws
- `docs/ENGIN_RUNTIME.md`, `GENERATION_LAW.md`, `WIDGET_SYSTEM_V2.md` — subsystem specs
- `docs/BOOGIEMAN_POLICY.md`, `CHILD_SAFETY_POLICY.md` — safety policy docs
- `docs/IDARI_CONTRACT.md`, `OBSERVABILITY.md` — agent contracts
- `docs/wasm_gpu_vm_spec.md`, `DUALSENSE_INTEGRATION.md` — technical specs
- `docs/dreamengin_phase*.md` — phase implementation notes
- `docs/alignment/` — repo-to-spec alignment tracking
- `docs/issue-*.md` — per-issue README section documentation
- `research/` — theoretical research (CCC/ADA twin engine, torridity physics)
- `research-and-development/tech-spec-v1.md` — R&D technical spec

**Relationships:**
- All code/architecture changes are mirrored/documented here
- `VISUAL-SCHEMATIC.md` is auto-regenerated on every push via `visual-schematic.yml`
- `REPO_STATE.md` is auto-regenerated via `update-repo-state.yml`

**TO CONTRIBUTE:**
- Document all new/altered Intents, Engins, and system flows
- Update roadmap when major milestones shift

**NEVER:**
- Edit `VISUAL-SCHEMATIC.md` or `REPO_STATE.md` manually — they are auto-generated
- Ship a new subsystem without a corresponding doc entry

---

## FINAL RULE

> **If a subsystem needs changing, update its contract/type. Wire with the dispatcher and bus. Never break architecture law or put features where they don't belong. Law is in `AGENTS.md` and `GameENGINspec.md`.**

The new part is always the standard. The surrounding code always conforms to it.
