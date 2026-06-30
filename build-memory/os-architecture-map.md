# DREAMengin OS Architecture Map

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

Generated by `scripts/wire-orphans.mjs`.

```txt
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
   [Engin Logic]              ← /engins/*.tsx + lib/engins/*RuleSet.ts + lib/engin-runtime/
        │ applies rule-set
        ▼
   [State Mutation + Bus]     ← lib/runtime/dreamOSBus.ts
        │
        ▼
   [Re-render / Persistence]  ← Supabase, lib/vm/, lib/runtime/
```

## Generated Slot Counts

| Slot | Count |
| --- | ---: |
| core-surface | 4 |
| daydream | 2 |
| surface | 304 |
| route-surface | 276 |
| dreamsurface | 15 |
| engin | 274 |
| engine-ruleset | 0 |
| dreamr | 4 |
| dreamdmbar | 15 |
| homedream | 1 |
| connector | 0 |
| brain-node | 0 |
| brain-doc | 0 |
| cartridge | 1 |
| persona | 6 |
| migration | 60 |
| memory | 6 |
| dr-eams-tool | 26 |
| hook | 13 |
| engine-system | 0 |
| engine-utility | 0 |

## Architecture Stages

| Stage ID | Label | Paths | Slots | Dispatches To |
| --- | --- | --- | --- | --- |
| `user-action` | User Action / Agent / CI | — | — | `surface-shell` |
| `surface-shell` | Surface / Shell | `components/`, `app/`, `coresurfaces/`, `daydreams/`, `lib/dreams/`, `lib/dream-window/`, `lib/widgets/` | `core-surface`, `daydream`, `surface`, `route-surface`, `dreamsurface` | `engin-dispatcher` |
| `engin-dispatcher` | EnginDispatcher | `lib/runtime/EnginDispatcher.ts` | — | `module-registry` |
| `module-registry` | Module Registry | `lib/runtime/moduleRegistry.ts`, `engine/generated/` | `dreamr`, `dreamdmbar`, `homedream`, `connector`, `dr-eams-tool` | `engin-logic` |
| `engin-logic` | Engin Logic | `engins/`, `lib/engins/`, `lib/engin-runtime/`, `lib/gameengin/brain/`, `lib/gameengin/cartridges/`, `public/cartridges/` | `engin`, `engine-ruleset`, `brain-node`, `brain-doc`, `cartridge`, `persona` | `state-mutation-bus` |
| `state-mutation-bus` | State Mutation + Bus | `lib/runtime/dreamOSBus.ts`, `lib/runtime/`, `lib/hooks/`, `hooks/`, `lib/gameengin/`, `lib/games/` | `hook`, `engine-system`, `engine-utility` | `rerender-persistence` |
| `rerender-persistence` | Re-render / Persistence | `supabase/`, `supabase/migrations/`, `build-memory/`, `lib/vm/`, `lib/runtime/` | `migration`, `memory` | — |

## Shell Classification

| Source Path | Slot |
| --- | --- |
| `coresurfaces/` | `core-surface` |
| `daydreams/` | `daydream` |
| `components/` | `surface` |
| `app/` | `route-surface` |
| `engins/` | `engin` |
| `lib/engins/` | `engine-ruleset` |
| `lib/dreamr/` | `dreamr` |
| `app/dreamr/` | `dreamr` |
| `lib/dreamdm/` | `dreamdmbar` |
| `dreamdmbar/` | `dreamdmbar` |
| `lib/home-buttons/` | `homedream` |
| `lib/dreams/` | `dreamsurface` |
| `lib/dream-window/` | `dreamsurface` |
| `lib/widgets/` | `dreamsurface` |

## Generated Router Lanes

| Generated File | Slots |
| --- | --- |
| `engine/generated/engins.ts` | `engin` |
| `engine/generated/rulesets.ts` | `engine-ruleset` |
| `engine/generated/surfaces.ts` | `core-surface`, `daydream`, `surface`, `route-surface` |
| `engine/generated/dreamsurfaces.ts` | `dreamsurface` |
| `engine/generated/dreamr.ts` | `dreamr` |
| `engine/generated/dreamdmbar.ts` | `dreamdmbar` |
| `engine/generated/homedream.ts` | `homedream` |
| `engine/generated/connectors.ts` | `connector` |
| `engine/generated/cartridges.ts` | `cartridge` |
| `engine/generated/brain.ts` | `brain-node`, `brain-doc` |
| `engine/generated/personas.ts` | `persona` |
| `engine/generated/systems.ts` | `engine-system`, `engine-utility` |
| `engine/generated/hooks.ts` | `hook` |

## Machine-Usable Exports

`engine/generated/osArchitectureMap.ts` exports:

| Export | Purpose |
| --- | --- |
| `osArchitectureFlow` | Human-readable canonical OS flow diagram |
| `osArchitectureMap` | Markdown architecture map |
| `osArchitectureGraph` | Machine-readable stage graph |
| `osArchitectureStageEntries` | Registry entries grouped by OS stage |
| `osGeneratedRouters` | Generated router file map |
| `osSlotCounts` | Live slot totals from the registry |
