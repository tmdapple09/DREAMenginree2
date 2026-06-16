#DREAMengin

**A modular spatial creative operating environment with one fixed engine + dual runtimes + swappable rule-sets.**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/) [![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/) [![pnpm workspace](https://img.shields.io/badge/pnpm-workspace-orange?logo=pnpm)](https://pnpm.io/workspaces) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![Live Demo](https://img.shields.io/badge/Live-dreamengin.com-000?logo=DREAMengin)](https://dreamengin.com)

## 🗺️ Visual Repository Schematic
See [`VISUAL-SCHEMATIC.md`](VISUAL-SCHEMATIC.md) for a live, auto-updated visual map of every file, function, and connection in this repo — including orphan/floating nodes. Live viewer: https://tmdapple09.github.io

See [`repo_state.md`] for complete current map of entire map of everything. 
ARCHITECTURE.md IS THE DOMINANT AUTHORITY OVER EVERY OTHER DOCUMENT IF THERE ARE ANY DISCREPANCIES UPDATE ALL OTHER DOCUMENTS. DO NOT MODIFY ARCHITECTURE.md FOR ANY REASON.Youll find it in Docs and the repo root.

## What is DREAMengin?
DREAMengin is a spatial creative operating environment built around the **Creative Operating Law**: one fixed engine for universal concerns (state, I/O, events, security), and swappable rule-sets for product behavior. In practice, this means HomeDream, DreamSpace, Dream Windows, Engins, messaging, media, and commerce all share one runtime contract instead of each feature inventing its own stack.

The repository follows the five architecture rules documented in `.cursorrules` and `AGENTS.md`: (1) one fixed engine, (2) unique behavior in external rule-sets, (3) rule-sets contain constraints/transformations/parameters only, (4) engine applies rule-set to base state to produce outcomes, and (5) behavior changes by swapping rule-sets instead of rewriting the engine.

For readers new to the project: DREAMengin is closer to an OS shell than a single app. Surfaces are mounted into runtime regions, Engins provide domain-specific tools, and collaboration/transport modes can switch from solo to co-op without swapping component trees.
## Table of Contents
- [4. Tech Stack & Monorepo Layout](#tech-stack-monorepo-layout)
- [5. The Engins](#the-engins)
- [6. Dual Runtimes](#dual-runtimes)
- [7. Shared Dreams](#shared-dreams)
- [8. Dreamr — Human Media](#dreamr---human-media)
- [9. The Shop](#the-shop)
- [10. The Marketplace](#the-marketplace)
- [11. Ads & User Ads](#ads-user-ads)
- [12. The DmBar (`dreamdmbar/`)](#the-dmbar-dreamdmbar)
- [13. Messaging](#messaging)
- [14. HomeDream](#homedream)
- [15. DreamSpace](#dreamspace)
- [16. Dreams (Widgets / Windows / Surfaces)](#dreams-widgets-windows-surfaces)
- [17. User-Facing Modularity](#user-facing-modularity)
- [18. Custom Engins](#custom-engins)
- [19. Full Website Customizability](#full-website-customizability)
- [20. Backend, System, Core & CoreSurfaces](#backend-system-core-coresurfaces)
- [21. Agents & Workflow](#agents-workflow)
- [22. Research, Experiments & Daydreams](#research-experiments-daydreams)
- [23. Infra & Ops](#infra-ops)
- [24. Testing](#testing)
- [25. Getting Started](#getting-started)
- [26. Environment Variables](#environment-variables)
- [27. Contributing](#contributing)
- [28. License](#license)

## Tech Stack & Monorepo Layout
Tech Stack & Monorepo Layout provides shared infrastructure used across the platform.
### Responsibilities
- Theming, design tokens, and visual customisation
- Quality assurance and integration coverage
- Infrastructure provisioning and operational observability
### Architectural Relationships
- Self-contained — no detected cross-subsystem imports
#### File Structure
```text
├── .env.example
├── .env.local.example
├── eslint.config.mjs
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.base.json
├── tsconfig.games.json
├── tsconfig.gamesengin.json
├── tsconfig.json
├── tsconfig.server.json
├── tsconfig.test.json
├── tsconfig.worker.json
└── vercel.json
```
<details><summary>Tech Stack & Monorepo Layout file index (17 files)</summary>

- `.env.example` — project file.
- `.env.local.example` — project file.
- `eslint.config.mjs` — project file.
- `next.config.mjs` — project file.
- `package.json` — project file.
- `pnpm-lock.yaml` — project file.
- `pnpm-workspace.yaml` — project file.
- `tailwind.config.ts` — TypeScript module.
- `tsconfig.app.json` — project file.
- `tsconfig.base.json` — project file.
- `tsconfig.games.json` — project file.
- `tsconfig.gamesengin.json` — project file.
- `tsconfig.json` — project file.
- `tsconfig.server.json` — project file.
- `tsconfig.test.json` — project file.
- `tsconfig.worker.json` — project file.
- `vercel.json` — project file.

</details>

## The Engins
The Engins is a UI subsystem composed of React components and presentation logic. It exposes useAIDirector, useAgentSession, useArtifactSlot as React hooks for consumption by sibling subsystems. Core abstractions are encapsulated in EnginDispatcher, IntentBus, UniversalEngine. It depends on Backend, System, Core & CoreSurfaces, Custom Engins, Dreamr — Human Media.
### Responsibilities
- Renders DualRuntimeContainer, RuntimeView, RuntimeShell, GlowingLight, DreamDMBar, DreamSystemProvider, +15 more
- Core abstractions: EnginDispatcher, IntentBus, UniversalEngine, RuntimeContainer, H265Encoder
- Runtime orchestration and engin lifecycle management
- AI model integration and inference routing
- Authentication, session, and access control
- Real-time communication and channel management
- Feed ranking, algorithm execution, and content scoring
### Key Modules
- `AgentPanel`
- `CodeEnginOrchestrator`
- `DreamDMBar`
- `DreamSystemProvider`
- `DualRuntimeContainer`
- `EnginDispatcher`
- `GlowingLight`
- `IntentBus`
- `RuntimeContainer`
- `RuntimeShell`
- `RuntimeView`
- `UniversalEngine`
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Custom Engins**
- Depends on **Dreamr — Human Media**
- Depends on **Dreams (Widgets / Windows / Surfaces)**
- Depends on **DreamSpace**
- Depends on **Dual Runtimes**
- Depends on **User-Facing Modularity**
- Integrates with the Dual Runtime layer for execution orchestration
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Custom Engins
- Depends on Dreamr — Human Media
- Depends on Dreams (Widgets / Windows / Surfaces)
### Public Surfaces
**Components:**
`AgentPanel`, `ArtifactSlot`, `AssetViewport`, `BrandingEngin`, `CodeEngin`, `CodeEnginOrchestrator`, `ContentEngin`, `DreamDMBar`, `DreamSystemProvider`, `DualRuntimeContainer`, +11 more
### Notable Abstractions
- `GlowingLightProps` — interface
- `DreamBarSurface` — type
- `DreamBarContext` — interface
- `DMConversation` — interface
- `DraftPayload` — interface
- `DMMessage` — interface
- `SearchResultType` — type
- `SearchResult` — interface
- `UseDreamSearchReturn` — interface
- `MediaType` — type
- `SendMessageParams` — interface
- `UseMessagingCoreReturn` — interface
- `useAIDirector` — hook
- `useAgentSession` — hook
- `useArtifactSlot` — hook
- `useBrandEnginRuntime` — hook
- `useBrandingEnginBridge` — hook
- `useCodeEnginBridge` — hook
- `useCodeEnginRuntime` — hook
- `useContentEnginBridge` — hook
### Capabilities
- Exposes useAIDirector, useAgentSession, useArtifactSlot, useBrandEnginRuntime, useBrandingEnginBridge, useCodeEnginBridge as composable React hooks
- Public contract surface: GlowingLightProps, DreamBarContext, DMConversation, DraftPayload, DMMessage
- Shared type vocabulary: DreamBarSurface, SearchResultType, MediaType, DbNotificationContent, UiNotificationType
- Utility functions: detectSurface, resolveIntentOverride, listAllDraftIds, cleanupStaleDrafts, getDraftAge, mapNotificationType
#### File Structure
```text
├── components
│   └── runtime
│       ├── dream.DualRuntimeContainer.tsx
│       ├── dream.RuntimeView.tsx
│       └── dream.shell.RuntimeShell.tsx
├── dreamdmbar
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── dream.GlowingLight.tsx
│   ├── dreamsurface.dreamdmbar.tsx
│   ├── hooks
│   │   ├── useDreamBarContext.ts
│   │   ├── useDreamDMConversations.ts
│   │   ├── useDreamDMDraft.ts
│   │   ├── useDreamDMMessages.ts
│   │   ├── useDreamSearch.ts
│   │   ├── useMessagingCore.ts
│   │   ├── useModuleBarIntent.ts
│   │   └── useNotifications.ts
│   ├── notifications
│   │   ├── notificationHelpers.ts
│   │   └── useNotifications.ts
│   └── runtime
│       ├── DreamSystemContext.tsx
│       ├── barInteractions.ts
│       └── bridgeSeamFlow.ts
├── engine
│   └── runtime
│       ├── EnginDispatcher.ts
│       ├── channelMetrics.ts
│       ├── coercionTable.ts
│       ├── dreamOSBus.ts
│       ├── dreamsurface
│       │   ├── dreamsurface.bridge.ts
│       │   ├── dreamsurface.delta.ts
│       │   └── index.ts
│       ├── dropTargetRegistry.ts
│       ├── dualRuntime.ts
│       ├── dualRuntimeBridge.ts
│       ├── engin.auth.ts
│       ├── engin.eventbus.ts
│       ├── engin.ledger.ts
│       ├── engin.renderloop.ts
│       ├── enginWorkflowRegistry.ts
│       ├── iEngine.ts
│       ├── index.ts
│       ├── instanceManager.ts
│       ├── isAuthRelatedError.ts
│       ├── madMaxiSnapshotBridge.ts
│       ├── memory.ts
│       ├── moduleRegistry.ts
│       ├── offlineQueue.ts
│       ├── quantumCircuit.ts
│       ├── runtimeChannel.ts
│       ├── runtimeContainer.ts
│       ├── seamClipboard.ts
│       ├── sharedResourcePool.ts
│       ├── snapshotFingerprint.ts
│       ├── swapManager.ts
│       ├── useDragSurface.ts
│       ├── useDualRuntime.ts
│       ├── useDualRuntimePersistence.ts
│       ├── useEnginBridge.ts
│       ├── useEnginCoopSync.ts
│       └── useSharedEnginChannel.ts
└── engins
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── CodeEngin
    │   ├── core
    │   │   └── parser.ts
    │   ├── modules
    │   │   └── ai-co-pilot
    │   │       ├── dream.panel.AgentPanel.tsx
    │   │       ├── index.ts
    │   │       └── useAgentSession.ts
    │   └── orchestrator
    │       └── dream.index.tsx
    ├── autoopen
    │   └── dream.AutoOpenGameEngin.tsx
    ├── brandingengin
    │   └── identity
    │       └── logos.ts
    ├── codeengin
    │   ├── ai
    │   │   └── drEamsCodeAssist.ts
    │   ├── auth.ts
    │   ├── diagnostics.ts
    │   ├── diff
    │   │   ├── aiEditEngine.ts
    │   │   └── diffUtils.ts
    │   ├── git.ts
    │   ├── pathSafety.ts
    │   ├── projectGraph.ts
    │   ├── runner.ts
    │   ├── search.ts
    │   ├── types.ts
    │   └── workspaceStore.ts
    ├── contentengin
    │   ├── AssetViewport.tsx
    │   ├── ImplicitAssetWorkspace.tsx
    │   ├── assetTypes.ts
    │   ├── assets
    │   │   ├── assetOptimizer.ts
    │   │   └── indexedDBStore.ts
    │   ├── builders
    │   │   ├── geometryBuilder.ts
    │   │   ├── meshBuilder.ts
    │   │   ├── modifiers.ts
    │   │   ├── primitiveBuilder.ts
    │   │   ├── textureBuilder.ts
    │   │   └── uvGenerator.ts
    │   ├── cli.ts
    │   ├── composite
    │   │   ├── compositor.ts
    │   │   ├── fxSimulation.ts
    │   │   ├── matchmover.ts
    │   │   ├── motionCapture.ts
    │   │   └── rotoscope.ts
    │   ├── content
    │   │   ├── generativeFill.ts
    │   │   ├── publishIntent.ts
… (262 more files)
```
<details><summary>The Engins file index (382 files)</summary>

- `components/runtime/dream.DualRuntimeContainer.tsx` — React component module.
- `components/runtime/dream.RuntimeView.tsx` — React component module.
- `components/runtime/dream.shell.RuntimeShell.tsx` — React component module.
- `dreamdmbar/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `dreamdmbar/dream.GlowingLight.tsx` — React component module.
- `dreamdmbar/dreamsurface.dreamdmbar.tsx` — React component module.
- `dreamdmbar/hooks/useDreamBarContext.ts` — TypeScript module.
- `dreamdmbar/hooks/useDreamDMConversations.ts` — TypeScript module.
- `dreamdmbar/hooks/useDreamDMDraft.ts` — TypeScript module.
- `dreamdmbar/hooks/useDreamDMMessages.ts` — TypeScript module.
- `dreamdmbar/hooks/useDreamSearch.ts` — TypeScript module.
- `dreamdmbar/hooks/useMessagingCore.ts` — TypeScript module.
- `dreamdmbar/hooks/useModuleBarIntent.ts` — TypeScript module.
- `dreamdmbar/hooks/useNotifications.ts` — TypeScript module.
- `dreamdmbar/notifications/notificationHelpers.ts` — TypeScript module.
- `dreamdmbar/notifications/useNotifications.ts` — TypeScript module.
- `dreamdmbar/runtime/DreamSystemContext.tsx` — React component module.
- `dreamdmbar/runtime/barInteractions.ts` — TypeScript module.
- `dreamdmbar/runtime/bridgeSeamFlow.ts` — TypeScript module.
- `engine/runtime/EnginDispatcher.ts` — TypeScript module.
- `engine/runtime/channelMetrics.ts` — TypeScript module.
- `engine/runtime/coercionTable.ts` — TypeScript module.
- `engine/runtime/dreamOSBus.ts` — TypeScript module.
- `engine/runtime/dreamsurface/dreamsurface.bridge.ts` — TypeScript module.
- `engine/runtime/dreamsurface/dreamsurface.delta.ts` — TypeScript module.
- `engine/runtime/dreamsurface/index.ts` — TypeScript module.
- `engine/runtime/dropTargetRegistry.ts` — TypeScript module.
- `engine/runtime/dualRuntime.ts` — TypeScript module.
- `engine/runtime/dualRuntimeBridge.ts` — TypeScript module.
- `engine/runtime/engin.auth.ts` — TypeScript module.
- `engine/runtime/engin.eventbus.ts` — TypeScript module.
- `engine/runtime/engin.ledger.ts` — TypeScript module.
- `engine/runtime/engin.renderloop.ts` — TypeScript module.
- `engine/runtime/enginWorkflowRegistry.ts` — TypeScript module.
- `engine/runtime/iEngine.ts` — TypeScript module.
- `engine/runtime/index.ts` — TypeScript module.
- `engine/runtime/instanceManager.ts` — TypeScript module.
- `engine/runtime/isAuthRelatedError.ts` — TypeScript module.
- `engine/runtime/madMaxiSnapshotBridge.ts` — TypeScript module.
- `engine/runtime/memory.ts` — TypeScript module.
- `engine/runtime/moduleRegistry.ts` — TypeScript module.
- `engine/runtime/offlineQueue.ts` — TypeScript module.
- `engine/runtime/quantumCircuit.ts` — TypeScript module.
- `engine/runtime/runtimeChannel.ts` — TypeScript module.
- `engine/runtime/runtimeContainer.ts` — TypeScript module.
- `engine/runtime/seamClipboard.ts` — TypeScript module.
- `engine/runtime/sharedResourcePool.ts` — TypeScript module.
- `engine/runtime/snapshotFingerprint.ts` — TypeScript module.
- `engine/runtime/swapManager.ts` — TypeScript module.
- `engine/runtime/useDragSurface.ts` — TypeScript module.
- `engine/runtime/useDualRuntime.ts` — TypeScript module.
- `engine/runtime/useDualRuntimePersistence.ts` — TypeScript module.
- `engine/runtime/useEnginBridge.ts` — TypeScript module.
- `engine/runtime/useEnginCoopSync.ts` — TypeScript module.
- `engine/runtime/useSharedEnginChannel.ts` — TypeScript module.
- `engins/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `engins/CodeEngin/core/parser.ts` — TypeScript module.
- `engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel.tsx` — React component module.
- `engins/CodeEngin/modules/ai-co-pilot/index.ts` — TypeScript module.
- `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts` — TypeScript module.
- `engins/CodeEngin/orchestrator/dream.index.tsx` — React component module.
- `engins/autoopen/dream.AutoOpenGameEngin.tsx` — React component module.
- `engins/brandingengin/identity/logos.ts` — TypeScript module.
- `engins/codeengin/ai/drEamsCodeAssist.ts` — TypeScript module.
- `engins/codeengin/auth.ts` — TypeScript module.
- `engins/codeengin/diagnostics.ts` — TypeScript module.
- `engins/codeengin/diff/aiEditEngine.ts` — TypeScript module.
- `engins/codeengin/diff/diffUtils.ts` — TypeScript module.
- `engins/codeengin/git.ts` — TypeScript module.
- `engins/codeengin/pathSafety.ts` — TypeScript module.
- `engins/codeengin/projectGraph.ts` — TypeScript module.
- `engins/codeengin/runner.ts` — TypeScript module.
- `engins/codeengin/search.ts` — TypeScript module.
- `engins/codeengin/types.ts` — TypeScript module.
- `engins/codeengin/workspaceStore.ts` — TypeScript module.
- `engins/contentengin/AssetViewport.tsx` — React component module.
- `engins/contentengin/ImplicitAssetWorkspace.tsx` — React component module.
- `engins/contentengin/assetTypes.ts` — TypeScript module.
- `engins/contentengin/assets/assetOptimizer.ts` — TypeScript module.
- `engins/contentengin/assets/indexedDBStore.ts` — TypeScript module.
- `engins/contentengin/builders/geometryBuilder.ts` — TypeScript module.
- `engins/contentengin/builders/meshBuilder.ts` — TypeScript module.
- `engins/contentengin/builders/modifiers.ts` — TypeScript module.
- `engins/contentengin/builders/primitiveBuilder.ts` — TypeScript module.
- `engins/contentengin/builders/textureBuilder.ts` — TypeScript module.
- `engins/contentengin/builders/uvGenerator.ts` — TypeScript module.
- `engins/contentengin/cli.ts` — TypeScript module.
- `engins/contentengin/composite/compositor.ts` — TypeScript module.
- `engins/contentengin/composite/fxSimulation.ts` — TypeScript module.
- `engins/contentengin/composite/matchmover.ts` — TypeScript module.
- `engins/contentengin/composite/motionCapture.ts` — TypeScript module.
- `engins/contentengin/composite/rotoscope.ts` — TypeScript module.
- `engins/contentengin/content/generativeFill.ts` — TypeScript module.
- `engins/contentengin/content/publishIntent.ts` — TypeScript module.
- `engins/contentengin/content/seoScorer.ts` — TypeScript module.
- `engins/contentengin/content/transcriptEditor.ts` — TypeScript module.
- `engins/contentengin/content/voiceClone.ts` — TypeScript module.
- `engins/contentengin/grammars/animalGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/bicycleGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/bridgeGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/buildingGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/creatureGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/humanoidGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/propGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/roadGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/shared.ts` — TypeScript module.
- `engins/contentengin/grammars/terrainGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/treeGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/vehicleGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/waterGrammar.ts` — TypeScript module.
- `engins/contentengin/materials/materialTypes.ts` — TypeScript module.
- `engins/contentengin/materials/paletteExtractor.ts` — TypeScript module.
- `engins/contentengin/materials/proceduralMaterials.ts` — TypeScript module.
- `engins/contentengin/media/h265-encoder.ts` — TypeScript module.
- `engins/contentengin/media/ledger.ts` — TypeScript module.
- `engins/contentengin/media/postMedia.ts` — TypeScript module.
- `engins/contentengin/photo/colorCluster.ts` — TypeScript module.
- `engins/contentengin/photo/edgeDetector.ts` — TypeScript module.
- `engins/contentengin/photo/imageAnalyzer.ts` — TypeScript module.
- `engins/contentengin/photo/photoToRecipe.ts` — TypeScript module.
- `engins/contentengin/photo/pngDecoder.ts` — TypeScript module.
- `engins/contentengin/photo/regionDetector.ts` — TypeScript module.
- `engins/contentengin/pipeline/build.ts` — TypeScript module.
- `engins/contentengin/pipeline/bundle.ts` — TypeScript module.
- `engins/contentengin/pipeline/exportGlb.ts` — TypeScript module.
- `engins/contentengin/pipeline/generateCollision.ts` — TypeScript module.
- `engins/contentengin/pipeline/generateLods.ts` — TypeScript module.
- `engins/contentengin/pipeline/paths.ts` — TypeScript module.
- `engins/contentengin/pipeline/validate.ts` — TypeScript module.
- `engins/contentengin/pipeline/writeManifest.ts` — TypeScript module.
- `engins/contentengin/recipes/recipeResolver.ts` — TypeScript module.
- `engins/contentengin/recipes/recipeTypes.ts` — TypeScript module.
- `engins/contentengin/recipes/seededRandom.ts` — TypeScript module.
- `engins/contentengin/rigging/fitArmature.ts` — TypeScript module.
- `engins/contentengin/rigging/index.ts` — TypeScript module.
- `engins/contentengin/rigging/landmarks.ts` — TypeScript module.
- `engins/contentengin/rigging/rigTypes.ts` — TypeScript module.
- `engins/contentengin/rigging/rigValidator.ts` — TypeScript module.
- `engins/contentengin/rigging/templates/bird_basic.json` — project file.
- `engins/contentengin/rigging/templates/fish_basic.json` — project file.
- `engins/contentengin/rigging/templates/humanoid_basic.json` — project file.
- `engins/contentengin/rigging/templates/quadruped_basic.json` — project file.
- `engins/contentengin/rigging/templates/vehicle_mechanical.json` — project file.
- `engins/contentengin/shaders/shaderRegistry.ts` — TypeScript module.
- `engins/contentengin/shaders/shaderTypes.ts` — TypeScript module.
- `engins/contentengin/useImplicitAssetWorkspace.ts` — TypeScript module.
- `engins/dream.ForgeEngin.tsx` — React component module.
- `engins/dream.QuantumCircuitCanvas.tsx` — React component module.
- `engins/engin.BrandingEngin.tsx` — React component module.
- `engins/engin.CodeEngin.tsx` — React component module.
- `engins/engin.ContentEngin.tsx` — React component module.
- `engins/engin.GameEngin.tsx` — React component module.
- `engins/engin.LabEngin.tsx` — React component module.
- `engins/engin.StarMakerEngin.tsx` — React component module.
- `engins/forgeengin/componentInventory.ts` — TypeScript module.
- `engins/forgeengin/enginpipe/artifact/manifest.ts` — TypeScript module.
- `engins/forgeengin/enginpipe/index.ts` — TypeScript module.
- `engins/forgeengin/enginpipe/quality/tiers.ts` — TypeScript module.
- `engins/forgeengin/enginpipe/shell/ArtifactSlot.tsx` — React component module.
- `engins/forgeengin/enginpipe/telemetry/client.ts` — TypeScript module.
- `engins/forgeengin/enginpipe/telemetry/events.ts` — TypeScript module.
- `engins/forgeengin/forge-ngn/assembly.ts` — TypeScript module.
- `engins/forgeengin/forge-ngn/index.ts` — TypeScript module.
- `engins/forgeengin/forge-ngn/piece-registry.ts` — TypeScript module.
- `engins/forgeengin/forge/engineForge.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeBuild.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeIntelligence.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeMomentum.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeNexus.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeRegistry.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeRituals.ts` — TypeScript module.
- `engins/forgeengin/forge/useForgeActivity.ts` — TypeScript module.
- `engins/forgeengin/forge/useForgeBuild.ts` — TypeScript module.
- `engins/gameengin/GameEnginCore.ts` — TypeScript module.
- `engins/gameengin/GameRuntime.tsx` — React component module.
- `engins/gameengin/accessibility-ai.ts` — TypeScript module.
- `engins/gameengin/ai-director.ts` — TypeScript module.
- `engins/gameengin/ai-npcs.ts` — TypeScript module.
- `engins/gameengin/assets/BundleCache.ts` — TypeScript module.
- `engins/gameengin/assets/BundleManifest.ts` — TypeScript module.
- `engins/gameengin/backendNegotiator.ts` — TypeScript module.
- `engins/gameengin/brain-reader.ts` — TypeScript module.
- `engins/gameengin/brain/README.md` — documentation.
- `engins/gameengin/brain/active-projects.json` — project file.
- `engins/gameengin/brain/asset-registry/README.md` — documentation.
- `engins/gameengin/brain/build-history/README.md` — documentation.
- `engins/gameengin/brain/character-voices/mad-maxi.json` — project file.
- `engins/gameengin/brain/composition-principles/leading-lines-landmark.json` — project file.
- `engins/gameengin/brain/composition-principles/parallax-layers.json` — project file.
- `engins/gameengin/brain/concept-library/README.md` — documentation.
- `engins/gameengin/brain/concept-library/neon-courier.json` — project file.
- `engins/gameengin/brain/concept-patterns/README.md` — documentation.
- `engins/gameengin/brain/concept-patterns/protagonists/reluctant-courier.json` — project file.
- `engins/gameengin/brain/concept-patterns/scope-formulas/one-day-runner.json` — project file.
- `engins/gameengin/brain/concept-patterns/settings/neon-rain-megacity.json` — project file.
- `engins/gameengin/brain/crash-reports/README.md` — documentation.
- `engins/gameengin/brain/dialogue-patterns/callback-anchor.json` — project file.
- `engins/gameengin/brain/dialogue-patterns/implied-subject.json` — project file.
- `engins/gameengin/brain/dialogue-patterns/sentence-fragment-rhythm.json` — project file.
- `engins/gameengin/brain/emotional-tones/determined.json` — project file.
- `engins/gameengin/brain/emotional-tones/fierce.json` — project file.
- `engins/gameengin/brain/emotional-tones/hopeful.json` — project file.
- `engins/gameengin/brain/emotional-tones/reflective.json` — project file.
- `engins/gameengin/brain/emotional-tones/weary.json` — project file.
- `engins/gameengin/brain/fun-heuristics/meta-progression.json` — project file.
- `engins/gameengin/brain/fun-heuristics/moment-to-moment.json` — project file.
- `engins/gameengin/brain/fun-heuristics/session-loop.json` — project file.
- `engins/gameengin/brain/genre-dna/action-rpg.json` — project file.
- `engins/gameengin/brain/genre-dna/episodic.json` — project file.
- `engins/gameengin/brain/genre-dna/live-service.json` — project file.
- `engins/gameengin/brain/genre-dna/metroidvania.json` — project file.
- `engins/gameengin/brain/genre-dna/open-world.json` — project file.
- `engins/gameengin/brain/genre-dna/platformer.json` — project file.
- `engins/gameengin/brain/genre-dna/puzzle.json` — project file.
- `engins/gameengin/brain/genre-dna/racing.json` — project file.
- `engins/gameengin/brain/genre-dna/roguelike.json` — project file.
- `engins/gameengin/brain/genre-dna/sandbox.json` — project file.
- `engins/gameengin/brain/genre-dna/template.json` — project file.
- `engins/gameengin/brain/inspiration-corpus/celeste.json` — project file.
- `engins/gameengin/brain/inspiration-corpus/dead-cells.json` — project file.
- `engins/gameengin/brain/inspiration-corpus/hades.json` — project file.
- `engins/gameengin/brain/inspiration-corpus/hollow-knight.json` — project file.
- `engins/gameengin/brain/inspiration-corpus/outer-wilds.json` — project file.
- `engins/gameengin/brain/material-recipes/neon-glass-tube.json` — project file.
- `engins/gameengin/brain/material-recipes/rusted-iron.json` — project file.
- `engins/gameengin/brain/material-recipes/sun-bleached-sandstone.json` — project file.
- `engins/gameengin/brain/mechanic-library/camera/look-ahead.json` — project file.
- `engins/gameengin/brain/mechanic-library/camera/screen-shake.json` — project file.
- `engins/gameengin/brain/mechanic-library/camera/smooth-follow.json` — project file.
- `engins/gameengin/brain/mechanic-library/combat/combo.json` — project file.
- `engins/gameengin/brain/mechanic-library/combat/hit-stop.json` — project file.
- `engins/gameengin/brain/mechanic-library/combat/parry.json` — project file.
- `engins/gameengin/brain/mechanic-library/combat/ranged.json` — project file.
- `engins/gameengin/brain/mechanic-library/movement/coyote-time.json` — project file.
- `engins/gameengin/brain/mechanic-library/movement/dash.json` — project file.
- `engins/gameengin/brain/mechanic-library/movement/double-jump.json` — project file.
- `engins/gameengin/brain/mechanic-library/movement/grapple.json` — project file.
- `engins/gameengin/brain/mechanic-library/movement/wall-slide.json` — project file.
- `engins/gameengin/brain/mechanic-library/progression/metroidvania-gating.json` — project file.
- `engins/gameengin/brain/mechanic-library/progression/roguelike-perks.json` — project file.
- `engins/gameengin/brain/mechanic-library/progression/skill-tree.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/ability-gating.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/meta-progression.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/procedural-generation.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/run-persistence.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/season-pass.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/world-streaming.json` — project file.
- `engins/gameengin/brain/narrative-pacing/default.json` — project file.
- `engins/gameengin/brain/originality-registry/by-cartridge/mad-maxi.json` — project file.
- `engins/gameengin/brain/originality-registry/signatures.json` — project file.
- `engins/gameengin/brain/principles/emotional-core.md` — documentation.
- `engins/gameengin/brain/principles/feedback.md` — documentation.
- `engins/gameengin/brain/principles/mastery.md` — documentation.
- `engins/gameengin/brain/principles/progression.md` — documentation.
- `engins/gameengin/brain/principles/responsiveness.md` — documentation.
- `engins/gameengin/brain/principles/risk-reward.md` — documentation.
- `engins/gameengin/brain/progression-state/README.md` — documentation.
- `engins/gameengin/brain/rd-sessions/README.md` — documentation.
- `engins/gameengin/brain/technique-library/lighting/three-point-mood.json` — project file.
- `engins/gameengin/brain/technique-library/modeling/edge-flow.json` — project file.
- `engins/gameengin/brain/technique-library/modeling/silhouette-first.json` — project file.
- `engins/gameengin/brain/technique-library/optimization/texture-atlasing.json` — project file.
- `engins/gameengin/brain/upgrade-history/README.md` — documentation.
- `engins/gameengin/brain/upgrade-history/prioritization-rules.json` — project file.
- `engins/gameengin/brain/visual-bible/characters/mad-maxi.md` — documentation.
- `engins/gameengin/brain/visual-bible/environments/neon-wasteland.md` — documentation.
- `engins/gameengin/brain/work-queue/README.md` — documentation.
- `engins/gameengin/cartridge-manifest.ts` — TypeScript module.
- `engins/gameengin/cartridge.ts` — TypeScript module.
- `engins/gameengin/cartridgeLoader.ts` — TypeScript module.
- `engins/gameengin/cartridges/achievementEngine.ts` — TypeScript module.
- `engins/gameengin/cartridges/apiStubs.ts` — TypeScript module.
- `engins/gameengin/cartridges/index.ts` — TypeScript module.
- `engins/gameengin/cartridges/loaders.ts` — TypeScript module.
- `engins/gameengin/cartridges/manifest.ts` — TypeScript module.
- `engins/gameengin/cartridges/reactCartridge.ts` — TypeScript module.
- `engins/gameengin/cartridges/saveState.ts` — TypeScript module.
- `engins/gameengin/cloud-compute.ts` — TypeScript module.
- `engins/gameengin/config/demoGameConfig.ts` — TypeScript module.
- `engins/gameengin/controls/control-mappings.ts` — TypeScript module.
- `engins/gameengin/core.ts` — TypeScript module.
- `engins/gameengin/dream-engine.ts` — TypeScript module.
- `engins/gameengin/dreamr-loader.ts` — TypeScript module.
- `engins/gameengin/executionWiring.ts` — TypeScript module.
- `engins/gameengin/gameEnginRuntime.ts` — TypeScript module.
- `engins/gameengin/games/DualSenseManager.ts` — TypeScript module.
- `engins/gameengin/games/avatar.ts` — TypeScript module.
- `engins/gameengin/games/catalog.ts` — TypeScript module.
- `engins/gameengin/games/gameControllerButtons.ts` — TypeScript module.
- `engins/gameengin/games/gameControllerLeft.ts` — TypeScript module.
- `engins/gameengin/games/gameControllerRight.ts` — TypeScript module.
- `engins/gameengin/games/hooks.ts` — TypeScript module.
- `engins/gameengin/games/library-state.ts` — TypeScript module.
- `engins/gameengin/games/lucid-avenue-world.ts` — TypeScript module.
- `engins/gameengin/games/madmaxi-wildfall-world.ts` — TypeScript module.
- `engins/gameengin/games/mobileControls.ts` — TypeScript module.
- `engins/gameengin/games/navigation.ts` — TypeScript module.
- `engins/gameengin/games/performance-baseline.ts` — TypeScript module.
- `engins/gameengin/games/quality-plan.ts` — TypeScript module.
- `engins/gameengin/games/useAIDirector.ts` — TypeScript module.
- `engins/gameengin/games/useGameInputKeyboardBridge.ts` — TypeScript module.
- `engins/gameengin/games/useGamepad.ts` — TypeScript module.
- `engins/gameengin/games/useImmersiveGameLayout.ts` — TypeScript module.
- `engins/gameengin/games/useRemoteChannel.ts` — TypeScript module.
- `engins/gameengin/generative-audio.ts` — TypeScript module.
- `engins/gameengin/index.ts` — TypeScript module.
- `engins/gameengin/input/InputRouter.ts` — TypeScript module.
- `engins/gameengin/input/index.ts` — TypeScript module.
- `engins/gameengin/launcher.ts` — TypeScript module.
- `engins/gameengin/neural-render.ts` — TypeScript module.
- `engins/gameengin/path-tracing.ts` — TypeScript module.
- `engins/gameengin/platform.ts` — TypeScript module.
- `engins/gameengin/post-fx.ts` — TypeScript module.
- `engins/gameengin/power-systems.ts` — TypeScript module.
- `engins/gameengin/predictive-stream.ts` — TypeScript module.
- `engins/gameengin/procgen.ts` — TypeScript module.
- `engins/gameengin/registerCartridges.ts` — TypeScript module.
- `engins/gameengin/remote/comboMachine.ts` — TypeScript module.
- `engins/gameengin/remote/index.ts` — TypeScript module.
- `engins/gameengin/remote/layout.ts` — TypeScript module.
- `engins/gameengin/remote/moves.ts` — TypeScript module.
- `engins/gameengin/remote/sprintDetector.ts` — TypeScript module.
- `engins/gameengin/render/ShaderRegistry.ts` — TypeScript module.
- `engins/gameengin/runtime/FrameBudget.ts` — TypeScript module.
- `engins/gameengin/runtime/FrameClock.ts` — TypeScript module.
- `engins/gameengin/runtime/RuntimeQuality.ts` — TypeScript module.
- `engins/gameengin/runtime/index.ts` — TypeScript module.
- `engins/gameengin/systems/ai.ts` — TypeScript module.
- `engins/gameengin/systems/animation.ts` — TypeScript module.
- `engins/gameengin/systems/assets.ts` — TypeScript module.
- `engins/gameengin/systems/index.ts` — TypeScript module.
- `engins/gameengin/systems/lod.ts` — TypeScript module.
- `engins/gameengin/systems/network.ts` — TypeScript module.
- `engins/gameengin/systems/physics.ts` — TypeScript module.
- `engins/gameengin/systems/pooling.ts` — TypeScript module.
- `engins/gameengin/systems/rendering.ts` — TypeScript module.
- `engins/gameengin/systems/spatial.ts` — TypeScript module.
- `engins/gameengin/systems/world.ts` — TypeScript module.
- `engins/gameengin/unifiedLoop.ts` — TypeScript module.
- `engins/gameengin/useUnifiedLoop.ts` — TypeScript module.
- `engins/gameengin/webgpu-runtime-shell.ts` — TypeScript module.
- `engins/gameengin/world-crdt.ts` — TypeScript module.
- `engins/gameengin/xr.ts` — TypeScript module.
- `engins/isosurfaceAssetPipeline.ts` — TypeScript module.
- `engins/isosurfaceDualContouring.ts` — TypeScript module.
- `engins/labengin/implicitSurface.ts` — TypeScript module.
- `engins/portfolio/dream.PortfolioEngin.tsx` — React component module.
- `engins/rulesets/brand/brandEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/brand/useBrandEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/code/codeEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/code/index.ts` — TypeScript module.
- `engins/rulesets/code/useCodeEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/content/contentEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/content/useContentEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/dreams/index.ts` — TypeScript module.
- `engins/rulesets/forge/index.ts` — TypeScript module.
- `engins/rulesets/game/declarative.ts` — TypeScript module.
- `engins/rulesets/game/gameEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/game/index.ts` — TypeScript module.
- `engins/rulesets/game/useGameEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/homedream/dream.homedream.constants.ts` — TypeScript module.
- `engins/rulesets/homedream/dream.homedream.physics.ts` — TypeScript module.
- `engins/rulesets/homedream/dream.homedream.transforms.ts` — TypeScript module.
- `engins/rulesets/homedream/index.ts` — TypeScript module.
- `engins/rulesets/lab/index.ts` — TypeScript module.
- `engins/rulesets/lab/labEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/lab/useLabEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/music/index.ts` — TypeScript module.
- `engins/rulesets/music/starMakerEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/music/useStarMakerEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/useEnginWorkflow.ts` — TypeScript module.
- `engins/rulesets/workflowEngine.ts` — TypeScript module.
- `engins/starmakerengin/audio-fingerprint/fingerprint.ts` — TypeScript module.
- `engins/starmakerengin/audio-fingerprint/index.ts` — TypeScript module.
- `engins/starmakerengin/audio-fingerprint/peak-map.ts` — TypeScript module.
- `engins/starmakerengin/audio-fingerprint/stem-extractor.ts` — TypeScript module.
- `engins/starmakerengin/audioFingerprint.ts` — TypeScript module.
- `engins/starmakerengin/music/presets.ts` — TypeScript module.
- `engins/starmakerengin/music/starmaker.ts` — TypeScript module.
- `engins/starmakerengin/music/starmakerArrangement.ts` — TypeScript module.
- `engins/starmakerengin/music/starmakerDaw.ts` — TypeScript module.
- `engins/starmakerengin/music/wasmAudioBridge.ts` — TypeScript module.

</details>

### BrandingEngin
BrandingEngin is a UI subsystem composed of React components and presentation logic. It depends on Backend, System, Core & CoreSurfaces, DreamSpace, Dual Runtimes.
#### Responsibilities
- Renders BrandingEngin
#### Key Modules
- `BrandingEngin`
- `engin.BrandingEngin`
#### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **DreamSpace**
- Depends on **Dual Runtimes**
- Depends on **The Engins**
- Integrates with the Dual Runtime layer for execution orchestration
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on DreamSpace
- Depends on Dual Runtimes
- Depends on The Engins
#### Public Surfaces
**Components:**
`BrandingEngin`
##### File Structure
```text
└── engins
    └── engin.BrandingEngin.tsx
```
<details><summary>BrandingEngin file index (1 files)</summary>

- `engins/engin.BrandingEngin.tsx` — React component module.

</details>

### CodeEngin
CodeEngin is a UI subsystem composed of React components and presentation logic. It exposes useAgentSession as React hooks for consumption by sibling subsystems. It depends on DreamSpace, The Engins, User-Facing Modularity.
#### Responsibilities
- Renders AgentPanel, CodeEnginOrchestrator, CodeEngin
#### Key Modules
- `AgentPanel`
- `CodeEngin`
- `CodeEnginOrchestrator`
- `dream.index`
- `dream.panel.AgentPanel`
- `engin.CodeEngin`
#### Architectural Relationships
- Depends on **DreamSpace**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Integrates with the Dual Runtime layer for execution orchestration
- Depends on DreamSpace
- Depends on The Engins
- Depends on User-Facing Modularity
#### Public Surfaces
**Components:**
`AgentPanel`, `CodeEngin`, `CodeEnginOrchestrator`
#### Notable Abstractions
- `ParseError` — interface
- `ParsedSymbol` — interface
- `ParseResult` — interface
- `AgentMessage` — interface
- `UseAgentSessionReturn` — interface
- `AgentMessage` — interface
- `UseAgentSessionReturn` — interface
- `useAgentSession` — hook
#### Capabilities
- Exposes useAgentSession as composable React hooks
- Public contract surface: ParseError, ParsedSymbol, ParseResult, AgentMessage, UseAgentSessionReturn
- Utility functions: parseCode, AgentPanel
##### File Structure
```text
└── engins
    ├── CodeEngin
    │   ├── core
    │   │   └── parser.ts
    │   ├── modules
    │   │   └── ai-co-pilot
    │   │       ├── dream.panel.AgentPanel.tsx
    │   │       ├── index.ts
    │   │       └── useAgentSession.ts
    │   └── orchestrator
    │       └── dream.index.tsx
    └── engin.CodeEngin.tsx
```
<details><summary>CodeEngin file index (6 files)</summary>

- `engins/CodeEngin/core/parser.ts` — TypeScript module.
- `engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel.tsx` — React component module.
- `engins/CodeEngin/modules/ai-co-pilot/index.ts` — TypeScript module.
- `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts` — TypeScript module.
- `engins/CodeEngin/orchestrator/dream.index.tsx` — React component module.
- `engins/engin.CodeEngin.tsx` — React component module.

</details>

### ContentEngin
ContentEngin is a UI subsystem composed of React components and presentation logic. It depends on User-Facing Modularity.
#### Responsibilities
- Renders ContentEngin
#### Key Modules
- `ContentEngin`
- `engin.ContentEngin`
#### Architectural Relationships
- Depends on **User-Facing Modularity**
- Depends on User-Facing Modularity
#### Public Surfaces
**Components:**
`ContentEngin`
##### File Structure
```text
└── engins
    └── engin.ContentEngin.tsx
```
<details><summary>ContentEngin file index (1 files)</summary>

- `engins/engin.ContentEngin.tsx` — React component module.

</details>

### Custom Engins capability (current state)
Custom Engins capability (current state) is a UI subsystem composed of React components and presentation logic. It exposes useAIDirector, useAgentSession, useArtifactSlot as React hooks for consumption by sibling subsystems. Core abstractions are encapsulated in H265Encoder, GameCapture, GameEnginConfigError. It depends on Backend, System, Core & CoreSurfaces, Dreamr — Human Media, Dreams (Widgets / Windows / Surfaces).
#### Responsibilities
- Renders CodeDreamIDE, DiffViewer, JourneyTrail, LabDreamIDE, NGNEngin, OpenDaydreamSideBButton, +23 more
- Core abstractions: H265Encoder, GameCapture, GameEnginConfigError, GameEnginCore, RealtimeCaptioner
- Runtime orchestration and engin lifecycle management
- AI model integration and inference routing
- Authentication, session, and access control
- Feed ranking, algorithm execution, and content scoring
#### Key Modules
- `BrandDaydream`
- `CodeDreamIDE`
- `CompingPanel`
- `DaydreamShell`
- `DiffViewer`
- `DreamConstellationMap`
- `JourneyTrail`
- `LabDreamIDE`
- `MultitrackArrangementPanel`
- `NGNEngin`
- `OpenDaydreamSideBButton`
- `StandaloneEnginSurface`
#### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreamr — Human Media**
- Depends on **Dreams (Widgets / Windows / Surfaces)**
- Depends on **DreamSpace**
- Depends on **Dual Runtimes**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Integrates with the Dual Runtime layer for execution orchestration
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreamr — Human Media
- Depends on Dreams (Widgets / Windows / Surfaces)
- Depends on DreamSpace
#### Public Surfaces
**Components:**
`AgentPanel`, `ArtifactSlot`, `AssetViewport`, `BrandDaydream`, `BrandingEngin`, `CodeDreamIDE`, `CodeEngin`, `CodeEnginOrchestrator`, `CompingPanel`, `ContentEngin`, +19 more
#### Notable Abstractions
- `StandaloneEnginName` — type
- `DaydreamWidget` — type
- `ParseError` — interface
- `ParsedSymbol` — interface
- `ParseResult` — interface
- `AgentMessage` — interface
- `UseAgentSessionReturn` — interface
- `AgentMessage` — interface
- `UseAgentSessionReturn` — interface
- `LogoPath` — type
- `VocabEntry` — interface
- `CellLanguage` — type
- `useAIDirector` — hook
- `useAgentSession` — hook
- `useArtifactSlot` — hook
- `useBrandEnginRuntime` — hook
- `useCodeEnginRuntime` — hook
- `useContentEnginRuntime` — hook
- `useDualSense` — hook
- `useEnginWorkflow` — hook
#### Capabilities
- Exposes useAIDirector, useAgentSession, useArtifactSlot, useBrandEnginRuntime, useCodeEnginRuntime, useContentEnginRuntime as composable React hooks
- Public contract surface: ParseError, ParsedSymbol, ParseResult, AgentMessage, UseAgentSessionReturn
- Shared type vocabulary: StandaloneEnginName, DaydreamWidget, LogoPath, CellLanguage, QueryIntent
- Utility functions: parseCode, AgentPanel, AutoOpenGameEngin, getRandomLogo, resetLogoCache, matchCodeVocabulary
##### File Structure
```text
├── components
│   └── daydream
│       ├── dream.CodeDreamIDE.tsx
│       ├── dream.DiffViewer.tsx
│       ├── dream.JourneyTrail.tsx
│       ├── dream.LabDreamIDE.tsx
│       ├── dream.NGNEngin.tsx
│       ├── dream.OpenDaydreamSideBButton.tsx
│       ├── dream.StandaloneEnginSurface.tsx
│       ├── dream.constellationmap.tsx
│       ├── dream.shell.DaydreamShell.tsx
│       ├── dreamsurface.daydream.BrandDaydream.tsx
│       └── starmaker
│           ├── dream.panel.CompingPanel.tsx
│           ├── dream.panel.MultitrackArrangementPanel.tsx
│           ├── dream.panel.PianoRollPanel.tsx
│           └── dream.panel.SessionViewPanel.tsx
└── engins
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── CodeEngin
    │   ├── core
    │   │   └── parser.ts
    │   ├── modules
    │   │   └── ai-co-pilot
    │   │       ├── dream.panel.AgentPanel.tsx
    │   │       ├── index.ts
    │   │       └── useAgentSession.ts
    │   └── orchestrator
    │       └── dream.index.tsx
    ├── autoopen
    │   └── dream.AutoOpenGameEngin.tsx
    ├── brandingengin
    │   └── identity
    │       └── logos.ts
    ├── codeengin
    │   ├── ai
    │   │   └── drEamsCodeAssist.ts
    │   ├── auth.ts
    │   ├── diagnostics.ts
    │   ├── diff
    │   │   ├── aiEditEngine.ts
    │   │   └── diffUtils.ts
    │   ├── git.ts
    │   ├── pathSafety.ts
    │   ├── projectGraph.ts
    │   ├── runner.ts
    │   ├── search.ts
    │   ├── types.ts
    │   └── workspaceStore.ts
    ├── contentengin
    │   ├── AssetViewport.tsx
    │   ├── ImplicitAssetWorkspace.tsx
    │   ├── assetTypes.ts
    │   ├── assets
    │   │   ├── assetOptimizer.ts
    │   │   └── indexedDBStore.ts
    │   ├── builders
    │   │   ├── geometryBuilder.ts
    │   │   ├── meshBuilder.ts
    │   │   ├── modifiers.ts
    │   │   ├── primitiveBuilder.ts
    │   │   ├── textureBuilder.ts
    │   │   └── uvGenerator.ts
    │   ├── cli.ts
    │   ├── composite
    │   │   ├── compositor.ts
    │   │   ├── fxSimulation.ts
    │   │   ├── matchmover.ts
    │   │   ├── motionCapture.ts
    │   │   └── rotoscope.ts
    │   ├── content
    │   │   ├── generativeFill.ts
    │   │   ├── publishIntent.ts
    │   │   ├── seoScorer.ts
    │   │   ├── transcriptEditor.ts
    │   │   └── voiceClone.ts
    │   ├── grammars
    │   │   ├── animalGrammar.ts
    │   │   ├── bicycleGrammar.ts
    │   │   ├── bridgeGrammar.ts
    │   │   ├── buildingGrammar.ts
    │   │   ├── creatureGrammar.ts
    │   │   ├── humanoidGrammar.ts
    │   │   ├── propGrammar.ts
    │   │   ├── roadGrammar.ts
    │   │   ├── shared.ts
    │   │   ├── terrainGrammar.ts
    │   │   ├── treeGrammar.ts
    │   │   ├── vehicleGrammar.ts
    │   │   └── waterGrammar.ts
    │   ├── materials
    │   │   ├── materialTypes.ts
    │   │   ├── paletteExtractor.ts
    │   │   └── proceduralMaterials.ts
    │   ├── media
    │   │   ├── h265-encoder.ts
    │   │   ├── ledger.ts
    │   │   └── postMedia.ts
    │   ├── photo
    │   │   ├── colorCluster.ts
    │   │   ├── edgeDetector.ts
    │   │   ├── imageAnalyzer.ts
    │   │   ├── photoToRecipe.ts
    │   │   ├── pngDecoder.ts
    │   │   └── regionDetector.ts
    │   ├── pipeline
    │   │   ├── build.ts
    │   │   ├── bundle.ts
    │   │   ├── exportGlb.ts
    │   │   ├── generateCollision.ts
    │   │   ├── generateLods.ts
    │   │   ├── paths.ts
    │   │   ├── validate.ts
    │   │   └── writeManifest.ts
    │   ├── recipes
    │   │   ├── recipeResolver.ts
    │   │   ├── recipeTypes.ts
    │   │   └── seededRandom.ts
    │   ├── rigging
    │   │   ├── fitArmature.ts
… (221 more files)
```
<details><summary>Custom Engins capability (current state) file index (341 files)</summary>

- `components/daydream/dream.CodeDreamIDE.tsx` — React component module.
- `components/daydream/dream.DiffViewer.tsx` — React component module.
- `components/daydream/dream.JourneyTrail.tsx` — React component module.
- `components/daydream/dream.LabDreamIDE.tsx` — React component module.
- `components/daydream/dream.NGNEngin.tsx` — React component module.
- `components/daydream/dream.OpenDaydreamSideBButton.tsx` — React component module.
- `components/daydream/dream.StandaloneEnginSurface.tsx` — React component module.
- `components/daydream/dream.constellationmap.tsx` — React component module.
- `components/daydream/dream.shell.DaydreamShell.tsx` — React component module.
- `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` — React component module.
- `components/daydream/starmaker/dream.panel.CompingPanel.tsx` — React component module.
- `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx` — React component module.
- `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx` — React component module.
- `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` — React component module.
- `engins/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `engins/CodeEngin/core/parser.ts` — TypeScript module.
- `engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel.tsx` — React component module.
- `engins/CodeEngin/modules/ai-co-pilot/index.ts` — TypeScript module.
- `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts` — TypeScript module.
- `engins/CodeEngin/orchestrator/dream.index.tsx` — React component module.
- `engins/autoopen/dream.AutoOpenGameEngin.tsx` — React component module.
- `engins/brandingengin/identity/logos.ts` — TypeScript module.
- `engins/codeengin/ai/drEamsCodeAssist.ts` — TypeScript module.
- `engins/codeengin/auth.ts` — TypeScript module.
- `engins/codeengin/diagnostics.ts` — TypeScript module.
- `engins/codeengin/diff/aiEditEngine.ts` — TypeScript module.
- `engins/codeengin/diff/diffUtils.ts` — TypeScript module.
- `engins/codeengin/git.ts` — TypeScript module.
- `engins/codeengin/pathSafety.ts` — TypeScript module.
- `engins/codeengin/projectGraph.ts` — TypeScript module.
- `engins/codeengin/runner.ts` — TypeScript module.
- `engins/codeengin/search.ts` — TypeScript module.
- `engins/codeengin/types.ts` — TypeScript module.
- `engins/codeengin/workspaceStore.ts` — TypeScript module.
- `engins/contentengin/AssetViewport.tsx` — React component module.
- `engins/contentengin/ImplicitAssetWorkspace.tsx` — React component module.
- `engins/contentengin/assetTypes.ts` — TypeScript module.
- `engins/contentengin/assets/assetOptimizer.ts` — TypeScript module.
- `engins/contentengin/assets/indexedDBStore.ts` — TypeScript module.
- `engins/contentengin/builders/geometryBuilder.ts` — TypeScript module.
- `engins/contentengin/builders/meshBuilder.ts` — TypeScript module.
- `engins/contentengin/builders/modifiers.ts` — TypeScript module.
- `engins/contentengin/builders/primitiveBuilder.ts` — TypeScript module.
- `engins/contentengin/builders/textureBuilder.ts` — TypeScript module.
- `engins/contentengin/builders/uvGenerator.ts` — TypeScript module.
- `engins/contentengin/cli.ts` — TypeScript module.
- `engins/contentengin/composite/compositor.ts` — TypeScript module.
- `engins/contentengin/composite/fxSimulation.ts` — TypeScript module.
- `engins/contentengin/composite/matchmover.ts` — TypeScript module.
- `engins/contentengin/composite/motionCapture.ts` — TypeScript module.
- `engins/contentengin/composite/rotoscope.ts` — TypeScript module.
- `engins/contentengin/content/generativeFill.ts` — TypeScript module.
- `engins/contentengin/content/publishIntent.ts` — TypeScript module.
- `engins/contentengin/content/seoScorer.ts` — TypeScript module.
- `engins/contentengin/content/transcriptEditor.ts` — TypeScript module.
- `engins/contentengin/content/voiceClone.ts` — TypeScript module.
- `engins/contentengin/grammars/animalGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/bicycleGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/bridgeGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/buildingGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/creatureGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/humanoidGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/propGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/roadGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/shared.ts` — TypeScript module.
- `engins/contentengin/grammars/terrainGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/treeGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/vehicleGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/waterGrammar.ts` — TypeScript module.
- `engins/contentengin/materials/materialTypes.ts` — TypeScript module.
- `engins/contentengin/materials/paletteExtractor.ts` — TypeScript module.
- `engins/contentengin/materials/proceduralMaterials.ts` — TypeScript module.
- `engins/contentengin/media/h265-encoder.ts` — TypeScript module.
- `engins/contentengin/media/ledger.ts` — TypeScript module.
- `engins/contentengin/media/postMedia.ts` — TypeScript module.
- `engins/contentengin/photo/colorCluster.ts` — TypeScript module.
- `engins/contentengin/photo/edgeDetector.ts` — TypeScript module.
- `engins/contentengin/photo/imageAnalyzer.ts` — TypeScript module.
- `engins/contentengin/photo/photoToRecipe.ts` — TypeScript module.
- `engins/contentengin/photo/pngDecoder.ts` — TypeScript module.
- `engins/contentengin/photo/regionDetector.ts` — TypeScript module.
- `engins/contentengin/pipeline/build.ts` — TypeScript module.
- `engins/contentengin/pipeline/bundle.ts` — TypeScript module.
- `engins/contentengin/pipeline/exportGlb.ts` — TypeScript module.
- `engins/contentengin/pipeline/generateCollision.ts` — TypeScript module.
- `engins/contentengin/pipeline/generateLods.ts` — TypeScript module.
- `engins/contentengin/pipeline/paths.ts` — TypeScript module.
- `engins/contentengin/pipeline/validate.ts` — TypeScript module.
- `engins/contentengin/pipeline/writeManifest.ts` — TypeScript module.
- `engins/contentengin/recipes/recipeResolver.ts` — TypeScript module.
- `engins/contentengin/recipes/recipeTypes.ts` — TypeScript module.
- `engins/contentengin/recipes/seededRandom.ts` — TypeScript module.
- `engins/contentengin/rigging/fitArmature.ts` — TypeScript module.
- `engins/contentengin/rigging/index.ts` — TypeScript module.
- `engins/contentengin/rigging/landmarks.ts` — TypeScript module.
- `engins/contentengin/rigging/rigTypes.ts` — TypeScript module.
- `engins/contentengin/rigging/rigValidator.ts` — TypeScript module.
- `engins/contentengin/rigging/templates/bird_basic.json` — project file.
- `engins/contentengin/rigging/templates/fish_basic.json` — project file.
- `engins/contentengin/rigging/templates/humanoid_basic.json` — project file.
- `engins/contentengin/rigging/templates/quadruped_basic.json` — project file.
- `engins/contentengin/rigging/templates/vehicle_mechanical.json` — project file.
- `engins/contentengin/shaders/shaderRegistry.ts` — TypeScript module.
- `engins/contentengin/shaders/shaderTypes.ts` — TypeScript module.
- `engins/contentengin/useImplicitAssetWorkspace.ts` — TypeScript module.
- `engins/dream.ForgeEngin.tsx` — React component module.
- `engins/dream.QuantumCircuitCanvas.tsx` — React component module.
- `engins/engin.BrandingEngin.tsx` — React component module.
- `engins/engin.CodeEngin.tsx` — React component module.
- `engins/engin.ContentEngin.tsx` — React component module.
- `engins/engin.GameEngin.tsx` — React component module.
- `engins/engin.LabEngin.tsx` — React component module.
- `engins/engin.StarMakerEngin.tsx` — React component module.
- `engins/forgeengin/componentInventory.ts` — TypeScript module.
- `engins/forgeengin/enginpipe/artifact/manifest.ts` — TypeScript module.
- `engins/forgeengin/enginpipe/index.ts` — TypeScript module.
- `engins/forgeengin/enginpipe/quality/tiers.ts` — TypeScript module.
- `engins/forgeengin/enginpipe/shell/ArtifactSlot.tsx` — React component module.
- `engins/forgeengin/enginpipe/telemetry/client.ts` — TypeScript module.
- `engins/forgeengin/enginpipe/telemetry/events.ts` — TypeScript module.
- `engins/forgeengin/forge-ngn/assembly.ts` — TypeScript module.
- `engins/forgeengin/forge-ngn/index.ts` — TypeScript module.
- `engins/forgeengin/forge-ngn/piece-registry.ts` — TypeScript module.
- `engins/forgeengin/forge/engineForge.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeBuild.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeIntelligence.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeMomentum.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeNexus.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeRegistry.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeRituals.ts` — TypeScript module.
- `engins/forgeengin/forge/useForgeActivity.ts` — TypeScript module.
- `engins/forgeengin/forge/useForgeBuild.ts` — TypeScript module.
- `engins/gameengin/GameEnginCore.ts` — TypeScript module.
- `engins/gameengin/GameRuntime.tsx` — React component module.
- `engins/gameengin/accessibility-ai.ts` — TypeScript module.
- `engins/gameengin/ai-director.ts` — TypeScript module.
- `engins/gameengin/ai-npcs.ts` — TypeScript module.
- `engins/gameengin/assets/BundleCache.ts` — TypeScript module.
- `engins/gameengin/assets/BundleManifest.ts` — TypeScript module.
- `engins/gameengin/backendNegotiator.ts` — TypeScript module.
- `engins/gameengin/brain-reader.ts` — TypeScript module.
- `engins/gameengin/brain/README.md` — documentation.
- `engins/gameengin/brain/active-projects.json` — project file.
- `engins/gameengin/brain/asset-registry/README.md` — documentation.
- `engins/gameengin/brain/build-history/README.md` — documentation.
- `engins/gameengin/brain/character-voices/mad-maxi.json` — project file.
- `engins/gameengin/brain/composition-principles/leading-lines-landmark.json` — project file.
- `engins/gameengin/brain/composition-principles/parallax-layers.json` — project file.
- `engins/gameengin/brain/concept-library/README.md` — documentation.
- `engins/gameengin/brain/concept-library/neon-courier.json` — project file.
- `engins/gameengin/brain/concept-patterns/README.md` — documentation.
- `engins/gameengin/brain/concept-patterns/protagonists/reluctant-courier.json` — project file.
- `engins/gameengin/brain/concept-patterns/scope-formulas/one-day-runner.json` — project file.
- `engins/gameengin/brain/concept-patterns/settings/neon-rain-megacity.json` — project file.
- `engins/gameengin/brain/crash-reports/README.md` — documentation.
- `engins/gameengin/brain/dialogue-patterns/callback-anchor.json` — project file.
- `engins/gameengin/brain/dialogue-patterns/implied-subject.json` — project file.
- `engins/gameengin/brain/dialogue-patterns/sentence-fragment-rhythm.json` — project file.
- `engins/gameengin/brain/emotional-tones/determined.json` — project file.
- `engins/gameengin/brain/emotional-tones/fierce.json` — project file.
- `engins/gameengin/brain/emotional-tones/hopeful.json` — project file.
- `engins/gameengin/brain/emotional-tones/reflective.json` — project file.
- `engins/gameengin/brain/emotional-tones/weary.json` — project file.
- `engins/gameengin/brain/fun-heuristics/meta-progression.json` — project file.
- `engins/gameengin/brain/fun-heuristics/moment-to-moment.json` — project file.
- `engins/gameengin/brain/fun-heuristics/session-loop.json` — project file.
- `engins/gameengin/brain/genre-dna/action-rpg.json` — project file.
- `engins/gameengin/brain/genre-dna/episodic.json` — project file.
- `engins/gameengin/brain/genre-dna/live-service.json` — project file.
- `engins/gameengin/brain/genre-dna/metroidvania.json` — project file.
- `engins/gameengin/brain/genre-dna/open-world.json` — project file.
- `engins/gameengin/brain/genre-dna/platformer.json` — project file.
- `engins/gameengin/brain/genre-dna/puzzle.json` — project file.
- `engins/gameengin/brain/genre-dna/racing.json` — project file.
- `engins/gameengin/brain/genre-dna/roguelike.json` — project file.
- `engins/gameengin/brain/genre-dna/sandbox.json` — project file.
- `engins/gameengin/brain/genre-dna/template.json` — project file.
- `engins/gameengin/brain/inspiration-corpus/celeste.json` — project file.
- `engins/gameengin/brain/inspiration-corpus/dead-cells.json` — project file.
- `engins/gameengin/brain/inspiration-corpus/hades.json` — project file.
- `engins/gameengin/brain/inspiration-corpus/hollow-knight.json` — project file.
- `engins/gameengin/brain/inspiration-corpus/outer-wilds.json` — project file.
- `engins/gameengin/brain/material-recipes/neon-glass-tube.json` — project file.
- `engins/gameengin/brain/material-recipes/rusted-iron.json` — project file.
- `engins/gameengin/brain/material-recipes/sun-bleached-sandstone.json` — project file.
- `engins/gameengin/brain/mechanic-library/camera/look-ahead.json` — project file.
- `engins/gameengin/brain/mechanic-library/camera/screen-shake.json` — project file.
- `engins/gameengin/brain/mechanic-library/camera/smooth-follow.json` — project file.
- `engins/gameengin/brain/mechanic-library/combat/combo.json` — project file.
- `engins/gameengin/brain/mechanic-library/combat/hit-stop.json` — project file.
- `engins/gameengin/brain/mechanic-library/combat/parry.json` — project file.
- `engins/gameengin/brain/mechanic-library/combat/ranged.json` — project file.
- `engins/gameengin/brain/mechanic-library/movement/coyote-time.json` — project file.
- `engins/gameengin/brain/mechanic-library/movement/dash.json` — project file.
- `engins/gameengin/brain/mechanic-library/movement/double-jump.json` — project file.
- `engins/gameengin/brain/mechanic-library/movement/grapple.json` — project file.
- `engins/gameengin/brain/mechanic-library/movement/wall-slide.json` — project file.
- `engins/gameengin/brain/mechanic-library/progression/metroidvania-gating.json` — project file.
- `engins/gameengin/brain/mechanic-library/progression/roguelike-perks.json` — project file.
- `engins/gameengin/brain/mechanic-library/progression/skill-tree.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/ability-gating.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/meta-progression.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/procedural-generation.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/run-persistence.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/season-pass.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/world-streaming.json` — project file.
- `engins/gameengin/brain/narrative-pacing/default.json` — project file.
- `engins/gameengin/brain/originality-registry/by-cartridge/mad-maxi.json` — project file.
- `engins/gameengin/brain/originality-registry/signatures.json` — project file.
- `engins/gameengin/brain/principles/emotional-core.md` — documentation.
- `engins/gameengin/brain/principles/feedback.md` — documentation.
- `engins/gameengin/brain/principles/mastery.md` — documentation.
- `engins/gameengin/brain/principles/progression.md` — documentation.
- `engins/gameengin/brain/principles/responsiveness.md` — documentation.
- `engins/gameengin/brain/principles/risk-reward.md` — documentation.
- `engins/gameengin/brain/progression-state/README.md` — documentation.
- `engins/gameengin/brain/rd-sessions/README.md` — documentation.
- `engins/gameengin/brain/technique-library/lighting/three-point-mood.json` — project file.
- `engins/gameengin/brain/technique-library/modeling/edge-flow.json` — project file.
- `engins/gameengin/brain/technique-library/modeling/silhouette-first.json` — project file.
- `engins/gameengin/brain/technique-library/optimization/texture-atlasing.json` — project file.
- `engins/gameengin/brain/upgrade-history/README.md` — documentation.
- `engins/gameengin/brain/upgrade-history/prioritization-rules.json` — project file.
- `engins/gameengin/brain/visual-bible/characters/mad-maxi.md` — documentation.
- `engins/gameengin/brain/visual-bible/environments/neon-wasteland.md` — documentation.
- `engins/gameengin/brain/work-queue/README.md` — documentation.
- `engins/gameengin/cartridge-manifest.ts` — TypeScript module.
- `engins/gameengin/cartridge.ts` — TypeScript module.
- `engins/gameengin/cartridgeLoader.ts` — TypeScript module.
- `engins/gameengin/cartridges/achievementEngine.ts` — TypeScript module.
- `engins/gameengin/cartridges/apiStubs.ts` — TypeScript module.
- `engins/gameengin/cartridges/index.ts` — TypeScript module.
- `engins/gameengin/cartridges/loaders.ts` — TypeScript module.
- `engins/gameengin/cartridges/manifest.ts` — TypeScript module.
- `engins/gameengin/cartridges/reactCartridge.ts` — TypeScript module.
- `engins/gameengin/cartridges/saveState.ts` — TypeScript module.
- `engins/gameengin/cloud-compute.ts` — TypeScript module.
- `engins/gameengin/config/demoGameConfig.ts` — TypeScript module.
- `engins/gameengin/controls/control-mappings.ts` — TypeScript module.
- `engins/gameengin/core.ts` — TypeScript module.
- `engins/gameengin/dream-engine.ts` — TypeScript module.
- `engins/gameengin/dreamr-loader.ts` — TypeScript module.
- `engins/gameengin/executionWiring.ts` — TypeScript module.
- `engins/gameengin/gameEnginRuntime.ts` — TypeScript module.
- `engins/gameengin/games/DualSenseManager.ts` — TypeScript module.
- `engins/gameengin/games/avatar.ts` — TypeScript module.
- `engins/gameengin/games/catalog.ts` — TypeScript module.
- `engins/gameengin/games/gameControllerButtons.ts` — TypeScript module.
- `engins/gameengin/games/gameControllerLeft.ts` — TypeScript module.
- `engins/gameengin/games/gameControllerRight.ts` — TypeScript module.
- `engins/gameengin/games/hooks.ts` — TypeScript module.
- `engins/gameengin/games/library-state.ts` — TypeScript module.
- `engins/gameengin/games/lucid-avenue-world.ts` — TypeScript module.
- `engins/gameengin/games/madmaxi-wildfall-world.ts` — TypeScript module.
- `engins/gameengin/games/mobileControls.ts` — TypeScript module.
- `engins/gameengin/games/navigation.ts` — TypeScript module.
- `engins/gameengin/games/performance-baseline.ts` — TypeScript module.
- `engins/gameengin/games/quality-plan.ts` — TypeScript module.
- `engins/gameengin/games/useAIDirector.ts` — TypeScript module.
- `engins/gameengin/games/useGameInputKeyboardBridge.ts` — TypeScript module.
- `engins/gameengin/games/useGamepad.ts` — TypeScript module.
- `engins/gameengin/games/useImmersiveGameLayout.ts` — TypeScript module.
- `engins/gameengin/games/useRemoteChannel.ts` — TypeScript module.
- `engins/gameengin/generative-audio.ts` — TypeScript module.
- `engins/gameengin/index.ts` — TypeScript module.
- `engins/gameengin/input/InputRouter.ts` — TypeScript module.
- `engins/gameengin/input/index.ts` — TypeScript module.
- `engins/gameengin/launcher.ts` — TypeScript module.
- `engins/gameengin/neural-render.ts` — TypeScript module.
- `engins/gameengin/path-tracing.ts` — TypeScript module.
- `engins/gameengin/platform.ts` — TypeScript module.
- `engins/gameengin/post-fx.ts` — TypeScript module.
- `engins/gameengin/power-systems.ts` — TypeScript module.
- `engins/gameengin/predictive-stream.ts` — TypeScript module.
- `engins/gameengin/procgen.ts` — TypeScript module.
- `engins/gameengin/registerCartridges.ts` — TypeScript module.
- `engins/gameengin/remote/comboMachine.ts` — TypeScript module.
- `engins/gameengin/remote/index.ts` — TypeScript module.
- `engins/gameengin/remote/layout.ts` — TypeScript module.
- `engins/gameengin/remote/moves.ts` — TypeScript module.
- `engins/gameengin/remote/sprintDetector.ts` — TypeScript module.
- `engins/gameengin/render/ShaderRegistry.ts` — TypeScript module.
- `engins/gameengin/runtime/FrameBudget.ts` — TypeScript module.
- `engins/gameengin/runtime/FrameClock.ts` — TypeScript module.
- `engins/gameengin/runtime/RuntimeQuality.ts` — TypeScript module.
- `engins/gameengin/runtime/index.ts` — TypeScript module.
- `engins/gameengin/systems/ai.ts` — TypeScript module.
- `engins/gameengin/systems/animation.ts` — TypeScript module.
- `engins/gameengin/systems/assets.ts` — TypeScript module.
- `engins/gameengin/systems/index.ts` — TypeScript module.
- `engins/gameengin/systems/lod.ts` — TypeScript module.
- `engins/gameengin/systems/network.ts` — TypeScript module.
- `engins/gameengin/systems/physics.ts` — TypeScript module.
- `engins/gameengin/systems/pooling.ts` — TypeScript module.
- `engins/gameengin/systems/rendering.ts` — TypeScript module.
- `engins/gameengin/systems/spatial.ts` — TypeScript module.
- `engins/gameengin/systems/world.ts` — TypeScript module.
- `engins/gameengin/unifiedLoop.ts` — TypeScript module.
- `engins/gameengin/useUnifiedLoop.ts` — TypeScript module.
- `engins/gameengin/webgpu-runtime-shell.ts` — TypeScript module.
- `engins/gameengin/world-crdt.ts` — TypeScript module.
- `engins/gameengin/xr.ts` — TypeScript module.
- `engins/isosurfaceAssetPipeline.ts` — TypeScript module.
- `engins/isosurfaceDualContouring.ts` — TypeScript module.
- `engins/labengin/implicitSurface.ts` — TypeScript module.
- `engins/portfolio/dream.PortfolioEngin.tsx` — React component module.
- `engins/rulesets/brand/brandEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/brand/useBrandEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/code/codeEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/code/index.ts` — TypeScript module.
- `engins/rulesets/code/useCodeEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/content/contentEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/content/useContentEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/dreams/index.ts` — TypeScript module.
- `engins/rulesets/forge/index.ts` — TypeScript module.
- `engins/rulesets/game/declarative.ts` — TypeScript module.
- `engins/rulesets/game/gameEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/game/index.ts` — TypeScript module.
- `engins/rulesets/game/useGameEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/homedream/dream.homedream.constants.ts` — TypeScript module.
- `engins/rulesets/homedream/dream.homedream.physics.ts` — TypeScript module.
- `engins/rulesets/homedream/dream.homedream.transforms.ts` — TypeScript module.
- `engins/rulesets/homedream/index.ts` — TypeScript module.
- `engins/rulesets/lab/index.ts` — TypeScript module.
- `engins/rulesets/lab/labEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/lab/useLabEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/music/index.ts` — TypeScript module.
- `engins/rulesets/music/starMakerEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/music/useStarMakerEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/useEnginWorkflow.ts` — TypeScript module.
- `engins/rulesets/workflowEngine.ts` — TypeScript module.
- `engins/starmakerengin/audio-fingerprint/fingerprint.ts` — TypeScript module.
- `engins/starmakerengin/audio-fingerprint/index.ts` — TypeScript module.
- `engins/starmakerengin/audio-fingerprint/peak-map.ts` — TypeScript module.
- `engins/starmakerengin/audio-fingerprint/stem-extractor.ts` — TypeScript module.
- `engins/starmakerengin/audioFingerprint.ts` — TypeScript module.
- `engins/starmakerengin/music/presets.ts` — TypeScript module.
- `engins/starmakerengin/music/starmaker.ts` — TypeScript module.
- `engins/starmakerengin/music/starmakerArrangement.ts` — TypeScript module.
- `engins/starmakerengin/music/starmakerDaw.ts` — TypeScript module.
- `engins/starmakerengin/music/wasmAudioBridge.ts` — TypeScript module.

</details>

### ForgeEngin
ForgeEngin is a UI subsystem composed of React components and presentation logic. It depends on Dreams (Widgets / Windows / Surfaces), DreamSpace, The Engins.
#### Responsibilities
- Renders ForgeEngin
#### Key Modules
- `ForgeEngin`
- `dream.ForgeEngin`
#### Architectural Relationships
- Depends on **Dreams (Widgets / Windows / Surfaces)**
- Depends on **DreamSpace**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Integrates with the Dual Runtime layer for execution orchestration
- Depends on Dreams (Widgets / Windows / Surfaces)
- Depends on DreamSpace
- Depends on The Engins
- Depends on User-Facing Modularity
#### Public Surfaces
**Components:**
`ForgeEngin`
##### File Structure
```text
└── engins
    └── dream.ForgeEngin.tsx
```
<details><summary>ForgeEngin file index (1 files)</summary>

- `engins/dream.ForgeEngin.tsx` — React component module.

</details>

### GameEngin
GameEngin is a UI subsystem composed of React components and presentation logic. It depends on Backend, System, Core & CoreSurfaces, DreamSpace, The Engins.
#### Responsibilities
- Renders GameEngin
#### Key Modules
- `GameEngin`
- `dream.AutoOpenGameEngin`
- `engin.GameEngin`
#### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **DreamSpace**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Integrates with the Dual Runtime layer for execution orchestration
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on DreamSpace
- Depends on The Engins
- Depends on User-Facing Modularity
#### Public Surfaces
**Components:**
`GameEngin`
#### Capabilities
- Utility functions: AutoOpenGameEngin
##### File Structure
```text
└── engins
    ├── autoopen
    │   └── dream.AutoOpenGameEngin.tsx
    └── engin.GameEngin.tsx
```
<details><summary>GameEngin file index (2 files)</summary>

- `engins/autoopen/dream.AutoOpenGameEngin.tsx` — React component module.
- `engins/engin.GameEngin.tsx` — React component module.

</details>

### LabEngin
LabEngin is a UI subsystem composed of React components and presentation logic. It depends on Backend, System, Core & CoreSurfaces, Dreams (Widgets / Windows / Surfaces), DreamSpace.
#### Responsibilities
- Renders QuantumCircuitCanvas, LabEngin
#### Key Modules
- `LabEngin`
- `QuantumCircuitCanvas`
- `dream.QuantumCircuitCanvas`
- `engin.LabEngin`
#### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreams (Widgets / Windows / Surfaces)**
- Depends on **DreamSpace**
- Depends on **The Engins**
- Integrates with the Dual Runtime layer for execution orchestration
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreams (Widgets / Windows / Surfaces)
- Depends on DreamSpace
- Depends on The Engins
#### Public Surfaces
**Components:**
`LabEngin`, `QuantumCircuitCanvas`
#### Notable Abstractions
- `GateOp` — type
- `QuantumMeasurementResult` — interface
- `QuantumCircuitCanvasProps` — interface
#### Capabilities
- Public contract surface: QuantumMeasurementResult, QuantumCircuitCanvasProps
- Shared type vocabulary: GateOp
##### File Structure
```text
└── engins
    ├── dream.QuantumCircuitCanvas.tsx
    └── engin.LabEngin.tsx
```
<details><summary>LabEngin file index (2 files)</summary>

- `engins/dream.QuantumCircuitCanvas.tsx` — React component module.
- `engins/engin.LabEngin.tsx` — React component module.

</details>

### PortfolioEngin
PortfolioEngin is a UI subsystem composed of React components and presentation logic. It depends on DreamSpace, The Engins.
#### Responsibilities
- Renders PortfolioEngin
#### Key Modules
- `PortfolioEngin`
- `dream.PortfolioEngin`
#### Architectural Relationships
- Depends on **DreamSpace**
- Depends on **The Engins**
- Integrates with the Dual Runtime layer for execution orchestration
- Depends on DreamSpace
- Depends on The Engins
#### Public Surfaces
**Components:**
`PortfolioEngin`
##### File Structure
```text
└── engins
    └── portfolio
        └── dream.PortfolioEngin.tsx
```
<details><summary>PortfolioEngin file index (1 files)</summary>

- `engins/portfolio/dream.PortfolioEngin.tsx` — React component module.

</details>

### StarMakerEngin
StarMakerEngin is a UI subsystem composed of React components and presentation logic. It depends on Backend, System, Core & CoreSurfaces, Dreams (Widgets / Windows / Surfaces), DreamSpace.
#### Responsibilities
- Renders StarMakerEngin
#### Key Modules
- `StarMakerEngin`
- `engin.StarMakerEngin`
#### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreams (Widgets / Windows / Surfaces)**
- Depends on **DreamSpace**
- Depends on **Dual Runtimes**
- Depends on **The Engins**
- Integrates with the Dual Runtime layer for execution orchestration
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreams (Widgets / Windows / Surfaces)
- Depends on DreamSpace
- Depends on Dual Runtimes
#### Public Surfaces
**Components:**
`StarMakerEngin`
##### File Structure
```text
└── engins
    └── engin.StarMakerEngin.tsx
```
<details><summary>StarMakerEngin file index (1 files)</summary>

- `engins/engin.StarMakerEngin.tsx` — React component module.

</details>

## Dual Runtimes
Dual Runtimes is a UI subsystem composed of React components and presentation logic. It exposes useBrandingEnginBridge, useCodeEnginBridge, useContentEnginBridge as React hooks for consumption by sibling subsystems. Core abstractions are encapsulated in EnginDispatcher, IntentBus, UniversalEngine. It depends on Backend, System, Core & CoreSurfaces, Dreams (Widgets / Windows / Surfaces), Shared Dreams.
### Responsibilities
- Renders DualRuntimeContainer, RuntimeView, RuntimeShell, GlowingLight, DreamDMBar, DreamSystemProvider
- Core abstractions: EnginDispatcher, IntentBus, UniversalEngine, RuntimeContainer, BufferManager
- Runtime orchestration and engin lifecycle management
- Authentication, session, and access control
- Real-time communication and channel management
### Key Modules
- `BufferManager`
- `DreamDMBar`
- `DreamSystemProvider`
- `DualRuntime`
- `DualRuntimeContainer`
- `EnginDispatcher`
- `GlowingLight`
- `IntentBus`
- `RuntimeContainer`
- `RuntimeShell`
- `RuntimeView`
- `UniversalEngine`
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreams (Widgets / Windows / Surfaces)**
- Depends on **Shared Dreams**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Integrates with the Dual Runtime layer for execution orchestration
- Participates in the Shared Dreams pub/sub channel system
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreams (Widgets / Windows / Surfaces)
- Depends on The Engins
### Public Surfaces
**Components:**
`DreamDMBar`, `DreamSystemProvider`, `DualRuntimeContainer`, `GlowingLight`, `RuntimeShell`, `RuntimeView`
### Notable Abstractions
- `GlowingLightProps` — interface
- `DreamBarSurface` — type
- `DreamBarContext` — interface
- `DMConversation` — interface
- `DraftPayload` — interface
- `DMMessage` — interface
- `SearchResultType` — type
- `SearchResult` — interface
- `UseDreamSearchReturn` — interface
- `MediaType` — type
- `SendMessageParams` — interface
- `UseMessagingCoreReturn` — interface
- `useBrandingEnginBridge` — hook
- `useCodeEnginBridge` — hook
- `useContentEnginBridge` — hook
- `useDragSurface` — hook
- `useDreamBarContext` — hook
- `useDreamDMConversations` — hook
- `useDreamDMDraft` — hook
- `useDreamDMMessages` — hook
### Capabilities
- Exposes useBrandingEnginBridge, useCodeEnginBridge, useContentEnginBridge, useDragSurface, useDreamBarContext, useDreamDMConversations as composable React hooks
- Public contract surface: GlowingLightProps, DreamBarContext, DMConversation, DraftPayload, DMMessage
- Shared type vocabulary: DreamBarSurface, SearchResultType, MediaType, DbNotificationContent, UiNotificationType
- Utility functions: detectSurface, resolveIntentOverride, listAllDraftIds, cleanupStaleDrafts, getDraftAge, mapNotificationType
#### File Structure
```text
├── components
│   └── runtime
│       ├── dream.DualRuntimeContainer.tsx
│       ├── dream.RuntimeView.tsx
│       └── dream.shell.RuntimeShell.tsx
├── dreamdmbar
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── dream.GlowingLight.tsx
│   ├── dreamsurface.dreamdmbar.tsx
│   ├── hooks
│   │   ├── useDreamBarContext.ts
│   │   ├── useDreamDMConversations.ts
│   │   ├── useDreamDMDraft.ts
│   │   ├── useDreamDMMessages.ts
│   │   ├── useDreamSearch.ts
│   │   ├── useMessagingCore.ts
│   │   ├── useModuleBarIntent.ts
│   │   └── useNotifications.ts
│   ├── notifications
│   │   ├── notificationHelpers.ts
│   │   └── useNotifications.ts
│   └── runtime
│       ├── DreamSystemContext.tsx
│       ├── barInteractions.ts
│       └── bridgeSeamFlow.ts
├── engine
│   ├── runtime
│   │   ├── EnginDispatcher.ts
│   │   ├── channelMetrics.ts
│   │   ├── coercionTable.ts
│   │   ├── dreamOSBus.ts
│   │   ├── dreamsurface
│   │   │   ├── dreamsurface.bridge.ts
│   │   │   ├── dreamsurface.delta.ts
│   │   │   └── index.ts
│   │   ├── dropTargetRegistry.ts
│   │   ├── dualRuntime.ts
│   │   ├── dualRuntimeBridge.ts
│   │   ├── engin.auth.ts
│   │   ├── engin.eventbus.ts
│   │   ├── engin.ledger.ts
│   │   ├── engin.renderloop.ts
│   │   ├── enginWorkflowRegistry.ts
│   │   ├── iEngine.ts
│   │   ├── index.ts
│   │   ├── instanceManager.ts
│   │   ├── isAuthRelatedError.ts
│   │   ├── madMaxiSnapshotBridge.ts
│   │   ├── memory.ts
│   │   ├── moduleRegistry.ts
│   │   ├── offlineQueue.ts
│   │   ├── quantumCircuit.ts
│   │   ├── runtimeChannel.ts
│   │   ├── runtimeContainer.ts
│   │   ├── seamClipboard.ts
│   │   ├── sharedResourcePool.ts
│   │   ├── snapshotFingerprint.ts
│   │   ├── swapManager.ts
│   │   ├── useDragSurface.ts
│   │   ├── useDualRuntime.ts
│   │   ├── useDualRuntimePersistence.ts
│   │   ├── useEnginBridge.ts
│   │   ├── useEnginCoopSync.ts
│   │   └── useSharedEnginChannel.ts
│   └── vm
│       ├── README.md
│       ├── bufferManager.ts
│       ├── bus-events.ts
│       ├── dual-runtime.ts
│       ├── dualVMCoordinator.ts
│       ├── index.ts
│       ├── inter-vm-messaging.ts
│       ├── pipelineCache.ts
│       ├── resource-quota.ts
│       ├── security.ts
│       ├── snapshot.ts
│       ├── types.ts
│       ├── wasm-features.ts
│       └── wasmGpuVM.ts
└── hooks
    └── useSharedDream.ts
```
<details><summary>Dual Runtimes file index (70 files)</summary>

- `components/runtime/dream.DualRuntimeContainer.tsx` — React component module.
- `components/runtime/dream.RuntimeView.tsx` — React component module.
- `components/runtime/dream.shell.RuntimeShell.tsx` — React component module.
- `dreamdmbar/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `dreamdmbar/dream.GlowingLight.tsx` — React component module.
- `dreamdmbar/dreamsurface.dreamdmbar.tsx` — React component module.
- `dreamdmbar/hooks/useDreamBarContext.ts` — TypeScript module.
- `dreamdmbar/hooks/useDreamDMConversations.ts` — TypeScript module.
- `dreamdmbar/hooks/useDreamDMDraft.ts` — TypeScript module.
- `dreamdmbar/hooks/useDreamDMMessages.ts` — TypeScript module.
- `dreamdmbar/hooks/useDreamSearch.ts` — TypeScript module.
- `dreamdmbar/hooks/useMessagingCore.ts` — TypeScript module.
- `dreamdmbar/hooks/useModuleBarIntent.ts` — TypeScript module.
- `dreamdmbar/hooks/useNotifications.ts` — TypeScript module.
- `dreamdmbar/notifications/notificationHelpers.ts` — TypeScript module.
- `dreamdmbar/notifications/useNotifications.ts` — TypeScript module.
- `dreamdmbar/runtime/DreamSystemContext.tsx` — React component module.
- `dreamdmbar/runtime/barInteractions.ts` — TypeScript module.
- `dreamdmbar/runtime/bridgeSeamFlow.ts` — TypeScript module.
- `engine/runtime/EnginDispatcher.ts` — TypeScript module.
- `engine/runtime/channelMetrics.ts` — TypeScript module.
- `engine/runtime/coercionTable.ts` — TypeScript module.
- `engine/runtime/dreamOSBus.ts` — TypeScript module.
- `engine/runtime/dreamsurface/dreamsurface.bridge.ts` — TypeScript module.
- `engine/runtime/dreamsurface/dreamsurface.delta.ts` — TypeScript module.
- `engine/runtime/dreamsurface/index.ts` — TypeScript module.
- `engine/runtime/dropTargetRegistry.ts` — TypeScript module.
- `engine/runtime/dualRuntime.ts` — TypeScript module.
- `engine/runtime/dualRuntimeBridge.ts` — TypeScript module.
- `engine/runtime/engin.auth.ts` — TypeScript module.
- `engine/runtime/engin.eventbus.ts` — TypeScript module.
- `engine/runtime/engin.ledger.ts` — TypeScript module.
- `engine/runtime/engin.renderloop.ts` — TypeScript module.
- `engine/runtime/enginWorkflowRegistry.ts` — TypeScript module.
- `engine/runtime/iEngine.ts` — TypeScript module.
- `engine/runtime/index.ts` — TypeScript module.
- `engine/runtime/instanceManager.ts` — TypeScript module.
- `engine/runtime/isAuthRelatedError.ts` — TypeScript module.
- `engine/runtime/madMaxiSnapshotBridge.ts` — TypeScript module.
- `engine/runtime/memory.ts` — TypeScript module.
- `engine/runtime/moduleRegistry.ts` — TypeScript module.
- `engine/runtime/offlineQueue.ts` — TypeScript module.
- `engine/runtime/quantumCircuit.ts` — TypeScript module.
- `engine/runtime/runtimeChannel.ts` — TypeScript module.
- `engine/runtime/runtimeContainer.ts` — TypeScript module.
- `engine/runtime/seamClipboard.ts` — TypeScript module.
- `engine/runtime/sharedResourcePool.ts` — TypeScript module.
- `engine/runtime/snapshotFingerprint.ts` — TypeScript module.
- `engine/runtime/swapManager.ts` — TypeScript module.
- `engine/runtime/useDragSurface.ts` — TypeScript module.
- `engine/runtime/useDualRuntime.ts` — TypeScript module.
- `engine/runtime/useDualRuntimePersistence.ts` — TypeScript module.
- `engine/runtime/useEnginBridge.ts` — TypeScript module.
- `engine/runtime/useEnginCoopSync.ts` — TypeScript module.
- `engine/runtime/useSharedEnginChannel.ts` — TypeScript module.
- `engine/vm/README.md` — documentation.
- `engine/vm/bufferManager.ts` — TypeScript module.
- `engine/vm/bus-events.ts` — TypeScript module.
- `engine/vm/dual-runtime.ts` — TypeScript module.
- `engine/vm/dualVMCoordinator.ts` — TypeScript module.
- `engine/vm/index.ts` — TypeScript module.
- `engine/vm/inter-vm-messaging.ts` — TypeScript module.
- `engine/vm/pipelineCache.ts` — TypeScript module.
- `engine/vm/resource-quota.ts` — TypeScript module.
- `engine/vm/security.ts` — TypeScript module.
- `engine/vm/snapshot.ts` — TypeScript module.
- `engine/vm/types.ts` — TypeScript module.
- `engine/vm/wasm-features.ts` — TypeScript module.
- `engine/vm/wasmGpuVM.ts` — TypeScript module.
- `hooks/useSharedDream.ts` — TypeScript module.

</details>

## Shared Dreams
Shared Dreams is a full-stack subsystem that owns both React surfaces and API handlers. It exposes useSharedDream, useSharedDreamSession as React hooks for consumption by sibling subsystems. It depends on Backend, System, Core & CoreSurfaces, Dreams (Widgets / Windows / Surfaces), The Engins.
### Responsibilities
- API surface: /api/dreams
- Renders POST, GET, GET, POST, InviteFlow, SharedDreamCanvas, +2 more
- Database schema ownership and data persistence
- Real-time communication and channel management
- Feed ranking, algorithm execution, and content scoring
### Key Modules
- `GET`
- `InviteFlow`
- `POST`
- `SharedDreamCanvas`
- `SharedDreamProvider`
- `SharedDreamRuntime`
- `dream.InviteFlow`
- `dream.SharedDreamCanvas`
- `dream.SharedDreamProvider`
- `dream.SharedDreamRuntime`
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreams (Widgets / Windows / Surfaces)**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Integrates with the Dual Runtime layer for execution orchestration
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreams (Widgets / Windows / Surfaces)
- Depends on The Engins
- Depends on User-Facing Modularity
### Public Surfaces
**API Endpoints:**
- `/api/dreams/feed` `[GET, POST]`
- `/api/dreams/instances` `[GET]`
- `/api/dreams/transfer` `[POST]`
**Components:**
`GET`, `InviteFlow`, `POST`, `SharedDreamCanvas`, `SharedDreamProvider`, `SharedDreamRuntime`
### Notable Abstractions
- `InviteFlowProps` — interface
- `SharedDreamCanvasProps` — interface
- `CursorPosition` — interface
- `SharedDreamContextValue` — interface
- `SharedDreamProviderProps` — interface
- `SharedDreamRuntimeProps` — interface
- `SharedDreamContextValue` — interface
- `SharedDreamProviderProps` — interface
- `SharedDreamCanvasProps` — interface
- `InviteFlowProps` — interface
- `SharedDreamRuntimeProps` — interface
- `SharedDreamSession` — type
- `useSharedDream` — hook
- `useSharedDreamSession` — hook
### Capabilities
- Exposes useSharedDream, useSharedDreamSession as composable React hooks
- Public contract surface: InviteFlowProps, SharedDreamCanvasProps, CursorPosition, SharedDreamContextValue, SharedDreamProviderProps
- Shared type vocabulary: SharedDreamSession, DreamEventType, DreamBroadcastPayload, DreamEventHandler, DreamSessionRole
- Utility functions: SharedDreamProvider, SharedDreamCanvas, InviteFlow, SharedDreamRuntime, createSharedDreamSession, joinSharedDreamSession
- Read endpoints for data retrieval
- Write endpoints for mutations
#### File Structure
```text
├── app
│   └── api
│       └── dreams
│           ├── feed
│           │   └── route.ts
│           ├── instances
│           │   └── route.ts
│           └── transfer
│               └── route.ts
├── components
│   └── shared-dream
│       ├── dream.InviteFlow.tsx
│       ├── dream.SharedDreamCanvas.tsx
│       ├── dream.SharedDreamProvider.tsx
│       ├── dream.SharedDreamRuntime.tsx
│       └── index.ts
├── engine
│   └── sharedDream.ts
├── hooks
│   └── useSharedDream.ts
└── supabase
    └── realtime.ts
```
<details><summary>Shared Dreams file index (11 files)</summary>

- `app/api/dreams/feed/route.ts` — API route handler.
- `app/api/dreams/instances/route.ts` — API route handler.
- `app/api/dreams/transfer/route.ts` — API route handler.
- `components/shared-dream/dream.InviteFlow.tsx` — React component module.
- `components/shared-dream/dream.SharedDreamCanvas.tsx` — React component module.
- `components/shared-dream/dream.SharedDreamProvider.tsx` — React component module.
- `components/shared-dream/dream.SharedDreamRuntime.tsx` — React component module.
- `components/shared-dream/index.ts` — TypeScript module.
- `engine/sharedDream.ts` — TypeScript module.
- `hooks/useSharedDream.ts` — TypeScript module.
- `supabase/realtime.ts` — TypeScript module.

</details>

## Dreamr — Human Media
Dreamr — Human Media is a full-stack subsystem that owns both React surfaces and API handlers. It exposes useLiveFeed, useYouTubeLiveFeed as React hooks for consumption by sibling subsystems. Core abstractions are encapsulated in BotDetector, PerfectLineTrap, BotSessionTracker. It depends on Backend, System, Core & CoreSurfaces, Dreams (Widgets / Windows / Surfaces), HomeDream.
### Responsibilities
- User-facing surfaces: /dreamr
- API surface: /api/dreamr
- Renders GET, POST, DreamRPage, CloseFriendsSettings, DreamRChannelPanel, DreamRCreatorPanel, +8 more
- Core abstractions: BotDetector, PerfectLineTrap, BotSessionTracker, ViewTallyTracker
- Runtime orchestration and engin lifecycle management
- Feed ranking, algorithm execution, and content scoring
### Key Modules
- `ActiveModuleSurface`
- `CloseFriendsSettings`
- `DaydreamPulseStrip`
- `DreamRChannelPanel`
- `DreamRCreatorPanel`
- `DreamRPage`
- `FlagshipEnginesStrip`
- `GET`
- `GlobalDreamBar`
- `NeuralSeamCanvas`
- `POST`
- `PersistentDreamBar`
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreams (Widgets / Windows / Surfaces)**
- Depends on **HomeDream**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Integrates with the Dual Runtime layer for execution orchestration
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreams (Widgets / Windows / Surfaces)
- Depends on HomeDream
- Depends on The Engins
### Public Surfaces
**Routes:**
- `/dreamr`
**API Endpoints:**
- `/api/dreamr/feed` `[GET]`
- `/api/dreamr/suggested` `[GET]`
- `/api/dreamr/tally` `[POST]`
**Components:**
`ActiveModuleSurface`, `CloseFriendsSettings`, `DaydreamPulseStrip`, `DreamRChannelPanel`, `DreamRCreatorPanel`, `DreamRFeed`, `DreamRPage`, `DreamWidget`, `FlagshipEnginesStrip`, `GET`, +4 more
### Notable Abstractions
- `ActivityFeedTreatment` — type
- `BoogieActivitySignals` — interface
- `ActivityRevenueSplit` — interface
- `ActivityTier` — enum
- `VerificationMethod` — enum
- `CPVTier` — enum
- `AdType` — enum
- `ActivityPoint` — interface
- `ActivityVerification` — interface
- `View` — interface
- `SkipCredit` — interface
- `AdView` — interface
- `useLiveFeed` — hook
- `useYouTubeLiveFeed` — hook
### Capabilities
- Exposes useLiveFeed, useYouTubeLiveFeed as composable React hooks
- Public contract surface: BoogieActivitySignals, ActivityRevenueSplit, ActivityPoint, ActivityVerification, View
- Shared type vocabulary: ActivityFeedTreatment, Path, DreamRSwipeIntent, DreamRViewIntent, SocialSource
- Utility functions: calculateAQS, getUserMetrics, getAQS, qualifiesForPremiumCPV, getAQSTier, getAQSTierColor
- Read endpoints for data retrieval
- Write endpoints for mutations
#### File Structure
```text
├── app
│   ├── api
│   │   └── dreamr
│   │       ├── feed
│   │       │   └── route.ts
│   │       ├── suggested
│   │       │   └── route.ts
│   │       └── tally
│   │           └── route.ts
│   └── dreamr
│       └── page.tsx
├── components
│   ├── dreamr
│   │   ├── dream.CloseFriendsSettings.tsx
│   │   ├── dream.panel.DreamRChannelPanel.tsx
│   │   └── dream.panel.DreamRCreatorPanel.tsx
│   └── home
│       ├── dream.ActiveModuleSurface.tsx
│       ├── dream.DaydreamPulseStrip.tsx
│       ├── dream.FlagshipEnginesStrip.tsx
│       ├── dream.NeuralSeamCanvas.tsx
│       ├── dream.bar.GlobalDreamBar.tsx
│       ├── dream.bar.PersistentDreamBar.tsx
│       └── dream.widget.DreamWidget.tsx
└── dreamr
    ├── activity
    │   ├── aqs.ts
    │   ├── boogieActivityPolicy.ts
    │   ├── revenueSplit.ts
    │   ├── scoring.ts
    │   ├── skipCredits.ts
    │   ├── types.ts
    │   └── visibility-score.ts
    ├── bot-detection
    │   ├── detector.ts
    │   ├── index.ts
    │   ├── swipe-physics.ts
    │   └── view-tally.ts
    ├── botDetection.ts
    ├── components
    │   └── dreamrfeed.tsx
    ├── feed
    │   ├── feedTopics.ts
    │   ├── hashtags.ts
    │   ├── useLiveFeed.ts
    │   └── useYouTubeLiveFeed.ts
    ├── feeds
    │   └── embedFeedLoader.ts
    ├── runtime
    │   ├── closeFriendsVisibility.ts
    │   ├── feedCursor.ts
    │   ├── socialHumanityScore.ts
    │   ├── swipeCalibration.ts
    │   ├── swipePersonalization.ts
    │   └── torridityLedger.ts
    ├── social-feed.ts
    ├── torridity
    │   ├── constants.ts
    │   ├── index.ts
    │   └── physics.ts
    └── torridity.ts
```
<details><summary>Dreamr — Human Media file index (43 files)</summary>

- `app/api/dreamr/feed/route.ts` — API route handler.
- `app/api/dreamr/suggested/route.ts` — API route handler.
- `app/api/dreamr/tally/route.ts` — API route handler.
- `app/dreamr/page.tsx` — route page.
- `components/dreamr/dream.CloseFriendsSettings.tsx` — React component module.
- `components/dreamr/dream.panel.DreamRChannelPanel.tsx` — React component module.
- `components/dreamr/dream.panel.DreamRCreatorPanel.tsx` — React component module.
- `components/home/dream.ActiveModuleSurface.tsx` — React component module.
- `components/home/dream.DaydreamPulseStrip.tsx` — React component module.
- `components/home/dream.FlagshipEnginesStrip.tsx` — React component module.
- `components/home/dream.NeuralSeamCanvas.tsx` — React component module.
- `components/home/dream.bar.GlobalDreamBar.tsx` — React component module.
- `components/home/dream.bar.PersistentDreamBar.tsx` — React component module.
- `components/home/dream.widget.DreamWidget.tsx` — React component module.
- `dreamr/activity/aqs.ts` — TypeScript module.
- `dreamr/activity/boogieActivityPolicy.ts` — TypeScript module.
- `dreamr/activity/revenueSplit.ts` — TypeScript module.
- `dreamr/activity/scoring.ts` — TypeScript module.
- `dreamr/activity/skipCredits.ts` — TypeScript module.
- `dreamr/activity/types.ts` — TypeScript module.
- `dreamr/activity/visibility-score.ts` — TypeScript module.
- `dreamr/bot-detection/detector.ts` — TypeScript module.
- `dreamr/bot-detection/index.ts` — TypeScript module.
- `dreamr/bot-detection/swipe-physics.ts` — TypeScript module.
- `dreamr/bot-detection/view-tally.ts` — TypeScript module.
- `dreamr/botDetection.ts` — TypeScript module.
- `dreamr/components/dreamrfeed.tsx` — React component module.
- `dreamr/feed/feedTopics.ts` — TypeScript module.
- `dreamr/feed/hashtags.ts` — TypeScript module.
- `dreamr/feed/useLiveFeed.ts` — TypeScript module.
- `dreamr/feed/useYouTubeLiveFeed.ts` — TypeScript module.
- `dreamr/feeds/embedFeedLoader.ts` — TypeScript module.
- `dreamr/runtime/closeFriendsVisibility.ts` — TypeScript module.
- `dreamr/runtime/feedCursor.ts` — TypeScript module.
- `dreamr/runtime/socialHumanityScore.ts` — TypeScript module.
- `dreamr/runtime/swipeCalibration.ts` — TypeScript module.
- `dreamr/runtime/swipePersonalization.ts` — TypeScript module.
- `dreamr/runtime/torridityLedger.ts` — TypeScript module.
- `dreamr/social-feed.ts` — TypeScript module.
- `dreamr/torridity.ts` — TypeScript module.
- `dreamr/torridity/constants.ts` — TypeScript module.
- `dreamr/torridity/index.ts` — TypeScript module.
- `dreamr/torridity/physics.ts` — TypeScript module.

</details>

## The Shop
The Shop is a full-stack subsystem that owns both React surfaces and API handlers. It depends on Backend, System, Core & CoreSurfaces, User-Facing Modularity.
### Responsibilities
- User-facing surfaces: /shop, /shop/sell
- API surface: /api/shop
- Renders GET, POST, PUT, DELETE, ShopPage, SellItemPage
### Key Modules
- `DELETE`
- `GET`
- `POST`
- `PUT`
- `SellItemPage`
- `ShopPage`
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **User-Facing Modularity**
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on User-Facing Modularity
### Public Surfaces
**Routes:**
- `/shop`
- `/shop/sell`
**API Endpoints:**
- `/api/shop` `[GET, POST, PUT, DELETE]`
**Components:**
`DELETE`, `GET`, `POST`, `PUT`, `SellItemPage`, `ShopPage`
### Notable Abstractions
- `ShopListingInput` — type
- `ShopListingRecord` — type
- `ValidationResult` — type
### Capabilities
- Shared type vocabulary: ShopListingInput, ShopListingRecord, ValidationResult
- Utility functions: validateShopListing, normalizeShopListing, isOrderOwner
- Read endpoints for data retrieval
- Write endpoints for mutations
- Delete endpoints for resource lifecycle
#### File Structure
```text
├── app
│   ├── api
│   │   └── shop
│   │       └── route.ts
│   └── shop
│       ├── page.tsx
│       └── sell
│           └── page.tsx
└── engine
    └── shop
        └── listings.ts
```
<details><summary>The Shop file index (4 files)</summary>

- `app/api/shop/route.ts` — API route handler.
- `app/shop/page.tsx` — route page.
- `app/shop/sell/page.tsx` — route page.
- `engine/shop/listings.ts` — TypeScript module.

</details>

## The Marketplace
The Marketplace is a full-stack subsystem that owns both React surfaces and API handlers. It depends on Backend, System, Core & CoreSurfaces, User-Facing Modularity.
### Responsibilities
- User-facing surfaces: /marketplace, /marketplace/[id], /marketplace/sell
- API surface: /api/marketplace
- Renders POST, GET, POST, MarketplaceItemPage, MarketplacePage, MarketplaceSellPage, +2 more
### Key Modules
- `GET`
- `MarketplaceItemPage`
- `MarketplaceListingCard`
- `MarketplacePage`
- `MarketplaceRequestButton`
- `MarketplaceSellPage`
- `POST`
- `dream.MarketplaceListingCard`
- `dream.MarketplaceRequestButton`
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **User-Facing Modularity**
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on User-Facing Modularity
### Public Surfaces
**Routes:**
- `/marketplace`
- `/marketplace/[id]`
- `/marketplace/sell`
**API Endpoints:**
- `/api/marketplace` `[GET, POST]`
- `/api/marketplace/request` `[POST]`
**Components:**
`GET`, `MarketplaceItemPage`, `MarketplaceListingCard`, `MarketplacePage`, `MarketplaceRequestButton`, `MarketplaceSellPage`, `POST`
### Notable Abstractions
- `MarketplaceCategory` — type
- `MarketplaceListingInput` — type
- `MarketplaceListingRecord` — type
- `ValidationResult` — type
- `ContactRequestInput` — type
- `ContactRequestRecord` — type
- `ContactRequestValidationResult` — type
### Capabilities
- Shared type vocabulary: MarketplaceCategory, MarketplaceListingInput, MarketplaceListingRecord, ValidationResult, ContactRequestInput
- Utility functions: validateMarketplaceListing, normalizeMarketplaceListing, marketplaceDetailRoute, formatMarketplacePrice, validateContactRequest, buildContactRequestRecord
- Read endpoints for data retrieval
- Write endpoints for mutations
#### File Structure
```text
├── app
│   ├── api
│   │   └── marketplace
│   │       ├── request
│   │       │   └── route.ts
│   │       └── route.ts
│   └── marketplace
│       ├── [id]
│       │   └── page.tsx
│       ├── page.tsx
│       └── sell
│           └── page.tsx
├── components
│   └── marketplace
│       ├── dream.MarketplaceListingCard.tsx
│       └── dream.MarketplaceRequestButton.tsx
└── engine
    └── marketplace
        ├── listings.ts
        └── request.ts
```
<details><summary>The Marketplace file index (9 files)</summary>

- `app/api/marketplace/request/route.ts` — API route handler.
- `app/api/marketplace/route.ts` — API route handler.
- `app/marketplace/[id]/page.tsx` — route page.
- `app/marketplace/page.tsx` — route page.
- `app/marketplace/sell/page.tsx` — route page.
- `components/marketplace/dream.MarketplaceListingCard.tsx` — React component module.
- `components/marketplace/dream.MarketplaceRequestButton.tsx` — React component module.
- `engine/marketplace/listings.ts` — TypeScript module.
- `engine/marketplace/request.ts` — TypeScript module.

</details>

## Ads & User Ads
Ads & User Ads is a full-stack subsystem that owns both React surfaces and API handlers. It depends on Backend, System, Core & CoreSurfaces, Dreamr — Human Media, User-Facing Modularity.
### Responsibilities
- User-facing surfaces: /ads, /ads/create, /ads/slot/[id]
- API surface: /api/ads
- Renders CreateAdSlotPage, AdsPage, AdSlotPage, POST, POST, AdUnit, +1 more
### Key Modules
- `AdSlotPage`
- `AdUnit`
- `AdsPage`
- `CreateAdSlotPage`
- `POST`
- `SkipCreditBalance`
- `dream.AdUnit`
- `dream.SkipCreditBalance`
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreamr — Human Media**
- Depends on **User-Facing Modularity**
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreamr — Human Media
- Depends on User-Facing Modularity
### Public Surfaces
**Routes:**
- `/ads`
- `/ads/create`
- `/ads/slot/[id]`
**API Endpoints:**
- `/api/ads/orders` `[POST]`
- `/api/ads/view` `[POST]`
**Components:**
`AdSlotPage`, `AdUnit`, `AdsPage`, `CreateAdSlotPage`, `POST`, `SkipCreditBalance`
### Notable Abstractions
- `AdPlacement` — type
- `AdSlot` — type
- `ProfileLite` — type
- `AdListing` — type
- `AdOrder` — type
### Capabilities
- Shared type vocabulary: AdPlacement, AdSlot, ProfileLite, AdListing, AdOrder
- Write endpoints for mutations
#### File Structure
```text
├── app
│   ├── ads
│   │   ├── create
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   └── slot
│   │       └── [id]
│   │           └── page.tsx
│   └── api
│       └── ads
│           ├── orders
│           │   └── route.ts
│           └── view
│               └── route.ts
├── components
│   └── ads
│       ├── dream.AdUnit.tsx
│       └── dream.SkipCreditBalance.tsx
└── types
    └── ads.ts
```
<details><summary>Ads & User Ads file index (8 files)</summary>

- `app/ads/create/page.tsx` — route page.
- `app/ads/page.tsx` — route page.
- `app/ads/slot/[id]/page.tsx` — route page.
- `app/api/ads/orders/route.ts` — API route handler.
- `app/api/ads/view/route.ts` — API route handler.
- `components/ads/dream.AdUnit.tsx` — React component module.
- `components/ads/dream.SkipCreditBalance.tsx` — React component module.
- `types/ads.ts` — TypeScript module.

</details>

## The DmBar (`dreamdmbar/`)
The DmBar (`dreamdmbar/`) is a UI subsystem composed of React components and presentation logic. It exposes useDreamBarContext, useDreamDMConversations, useDreamDMDraft as React hooks for consumption by sibling subsystems. It depends on Backend, System, Core & CoreSurfaces, Dreamr — Human Media, The Engins.
### Responsibilities
- Renders GlobalDreamBar, PersistentDreamBar, GlowingLight, DreamDMBar, DreamSystemProvider
- Runtime orchestration and engin lifecycle management
### Key Modules
- `DreamDMBar`
- `DreamSystemContext`
- `DreamSystemProvider`
- `GlobalDreamBar`
- `GlowingLight`
- `PersistentDreamBar`
- `dream.GlowingLight`
- `dream.bar.GlobalDreamBar`
- `dream.bar.PersistentDreamBar`
- `dreamsurface.dreamdmbar`
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreamr — Human Media**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Integrates with the Dual Runtime layer for execution orchestration
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreamr — Human Media
- Depends on The Engins
- Depends on User-Facing Modularity
### Public Surfaces
**Components:**
`DreamDMBar`, `DreamSystemProvider`, `GlobalDreamBar`, `GlowingLight`, `PersistentDreamBar`
### Notable Abstractions
- `GlowingLightProps` — interface
- `DreamBarSurface` — type
- `DreamBarContext` — interface
- `DMConversation` — interface
- `DraftPayload` — interface
- `DMMessage` — interface
- `SearchResultType` — type
- `SearchResult` — interface
- `UseDreamSearchReturn` — interface
- `MediaType` — type
- `SendMessageParams` — interface
- `UseMessagingCoreReturn` — interface
- `useDreamBarContext` — hook
- `useDreamDMConversations` — hook
- `useDreamDMDraft` — hook
- `useDreamDMMessages` — hook
- `useDreamSearch` — hook
- `useDreamSystem` — hook
- `useMessagingCore` — hook
- `useModuleBarIntent` — hook
### Capabilities
- Exposes useDreamBarContext, useDreamDMConversations, useDreamDMDraft, useDreamDMMessages, useDreamSearch, useDreamSystem as composable React hooks
- Public contract surface: GlowingLightProps, DreamBarContext, DMConversation, DraftPayload, DMMessage
- Shared type vocabulary: DreamBarSurface, SearchResultType, MediaType, DbNotificationContent, UiNotificationType
- Utility functions: detectSurface, resolveIntentOverride, listAllDraftIds, cleanupStaleDrafts, getDraftAge, mapNotificationType
#### File Structure
```text
├── components
│   └── home
│       ├── dream.bar.GlobalDreamBar.tsx
│       └── dream.bar.PersistentDreamBar.tsx
└── dreamdmbar
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── dream.GlowingLight.tsx
    ├── dreamsurface.dreamdmbar.tsx
    ├── hooks
    │   ├── useDreamBarContext.ts
    │   ├── useDreamDMConversations.ts
    │   ├── useDreamDMDraft.ts
    │   ├── useDreamDMMessages.ts
    │   ├── useDreamSearch.ts
    │   ├── useMessagingCore.ts
    │   ├── useModuleBarIntent.ts
    │   └── useNotifications.ts
    ├── notifications
    │   ├── notificationHelpers.ts
    │   └── useNotifications.ts
    └── runtime
        ├── DreamSystemContext.tsx
        ├── barInteractions.ts
        └── bridgeSeamFlow.ts
```
<details><summary>The DmBar (`dreamdmbar/`) file index (18 files)</summary>

- `components/home/dream.bar.GlobalDreamBar.tsx` — React component module.
- `components/home/dream.bar.PersistentDreamBar.tsx` — React component module.
- `dreamdmbar/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `dreamdmbar/dream.GlowingLight.tsx` — React component module.
- `dreamdmbar/dreamsurface.dreamdmbar.tsx` — React component module.
- `dreamdmbar/hooks/useDreamBarContext.ts` — TypeScript module.
- `dreamdmbar/hooks/useDreamDMConversations.ts` — TypeScript module.
- `dreamdmbar/hooks/useDreamDMDraft.ts` — TypeScript module.
- `dreamdmbar/hooks/useDreamDMMessages.ts` — TypeScript module.
- `dreamdmbar/hooks/useDreamSearch.ts` — TypeScript module.
- `dreamdmbar/hooks/useMessagingCore.ts` — TypeScript module.
- `dreamdmbar/hooks/useModuleBarIntent.ts` — TypeScript module.
- `dreamdmbar/hooks/useNotifications.ts` — TypeScript module.
- `dreamdmbar/notifications/notificationHelpers.ts` — TypeScript module.
- `dreamdmbar/notifications/useNotifications.ts` — TypeScript module.
- `dreamdmbar/runtime/DreamSystemContext.tsx` — React component module.
- `dreamdmbar/runtime/barInteractions.ts` — TypeScript module.
- `dreamdmbar/runtime/bridgeSeamFlow.ts` — TypeScript module.

</details>

## Messaging
Messaging is a full-stack subsystem that owns both React surfaces and API handlers. It exposes useDreamDMConversations, useDreamDMDraft, useDreamDMMessages as React hooks for consumption by sibling subsystems. It depends on Backend, System, Core & CoreSurfaces, Dreams (Widgets / Windows / Surfaces), The Engins.
### Responsibilities
- User-facing surfaces: /messages, /messages/boards, /messages/boards/[id], /messages/boards/new
- API surface: /api/messages
- Renders POST, GET, POST, BoardDetailPage, NewBoardPage, BoardsPage, +2 more
- Real-time communication and channel management
### Key Modules
- `BoardComposer`
- `BoardDetailPage`
- `BoardsPage`
- `GET`
- `MessagesPage`
- `NewBoardPage`
- `POST`
- `dream.BoardComposer`
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreams (Widgets / Windows / Surfaces)**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Integrates with the Dual Runtime layer for execution orchestration
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreams (Widgets / Windows / Surfaces)
- Depends on The Engins
- Depends on User-Facing Modularity
### Public Surfaces
**Routes:**
- `/messages`
- `/messages/boards`
- `/messages/boards/[id]`
- `/messages/boards/new`
**API Endpoints:**
- `/api/messages` `[GET, POST]`
- `/api/messages/boards` `[POST]`
**Components:**
`BoardComposer`, `BoardDetailPage`, `BoardsPage`, `GET`, `MessagesPage`, `NewBoardPage`, `POST`
### Notable Abstractions
- `DMConversation` — interface
- `DraftPayload` — interface
- `DMMessage` — interface
- `MediaType` — type
- `SendMessageParams` — interface
- `UseMessagingCoreReturn` — interface
- `useDreamDMConversations` — hook
- `useDreamDMDraft` — hook
- `useDreamDMMessages` — hook
- `useMessagingCore` — hook
- `useNotifications` — hook
### Capabilities
- Exposes useDreamDMConversations, useDreamDMDraft, useDreamDMMessages, useMessagingCore, useNotifications as composable React hooks
- Public contract surface: DMConversation, DraftPayload, DMMessage, SendMessageParams, UseMessagingCoreReturn
- Shared type vocabulary: MediaType
- Utility functions: listAllDraftIds, cleanupStaleDrafts, getDraftAge
- Read endpoints for data retrieval
- Write endpoints for mutations
#### File Structure
```text
├── app
│   ├── api
│   │   └── messages
│   │       ├── boards
│   │       │   └── route.ts
│   │       └── route.ts
│   └── messages
│       ├── boards
│       │   ├── [id]
│       │   │   └── page.tsx
│       │   ├── new
│       │   │   └── page.tsx
│       │   └── page.tsx
│       └── page.tsx
├── components
│   └── messaging
│       └── dream.BoardComposer.tsx
└── dreamdmbar
    └── hooks
        ├── useDreamDMConversations.ts
        ├── useDreamDMDraft.ts
        ├── useDreamDMMessages.ts
        ├── useMessagingCore.ts
        └── useNotifications.ts
```
<details><summary>Messaging file index (12 files)</summary>

- `app/api/messages/boards/route.ts` — API route handler.
- `app/api/messages/route.ts` — API route handler.
- `app/messages/boards/[id]/page.tsx` — route page.
- `app/messages/boards/new/page.tsx` — route page.
- `app/messages/boards/page.tsx` — route page.
- `app/messages/page.tsx` — route page.
- `components/messaging/dream.BoardComposer.tsx` — React component module.
- `dreamdmbar/hooks/useDreamDMConversations.ts` — TypeScript module.
- `dreamdmbar/hooks/useDreamDMDraft.ts` — TypeScript module.
- `dreamdmbar/hooks/useDreamDMMessages.ts` — TypeScript module.
- `dreamdmbar/hooks/useMessagingCore.ts` — TypeScript module.
- `dreamdmbar/hooks/useNotifications.ts` — TypeScript module.

</details>

## HomeDream
HomeDream is a UI subsystem composed of React components and presentation logic. It depends on Backend, System, Core & CoreSurfaces, Dreamr — Human Media, Dreams (Widgets / Windows / Surfaces).
### Responsibilities
- User-facing surfaces: /homedream
- Renders HomeDreamPage, ActiveModuleSurface, DaydreamPulseStrip, FlagshipEnginesStrip, NeuralSeamCanvas, GlobalDreamBar, +2 more
### Key Modules
- `ActiveModuleSurface`
- `DaydreamPulseStrip`
- `DreamWidget`
- `FlagshipEnginesStrip`
- `GlobalDreamBar`
- `HomeDreamPage`
- `NeuralSeamCanvas`
- `PersistentDreamBar`
- `dream.ActiveModuleSurface`
- `dream.DaydreamPulseStrip`
- `dream.FlagshipEnginesStrip`
- `dream.NeuralSeamCanvas`
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreamr — Human Media**
- Depends on **Dreams (Widgets / Windows / Surfaces)**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Integrates with the Dual Runtime layer for execution orchestration
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreamr — Human Media
- Depends on Dreams (Widgets / Windows / Surfaces)
- Depends on The Engins
### Public Surfaces
**Routes:**
- `/homedream`
**Components:**
`ActiveModuleSurface`, `DaydreamPulseStrip`, `DreamWidget`, `FlagshipEnginesStrip`, `GlobalDreamBar`, `HomeDreamPage`, `NeuralSeamCanvas`, `PersistentDreamBar`
#### File Structure
```text
├── app
│   └── homedream
│       └── page.tsx
└── components
    └── home
        ├── dream.ActiveModuleSurface.tsx
        ├── dream.DaydreamPulseStrip.tsx
        ├── dream.FlagshipEnginesStrip.tsx
        ├── dream.NeuralSeamCanvas.tsx
        ├── dream.bar.GlobalDreamBar.tsx
        ├── dream.bar.PersistentDreamBar.tsx
        └── dream.widget.DreamWidget.tsx
```
<details><summary>HomeDream file index (8 files)</summary>

- `app/homedream/page.tsx` — route page.
- `components/home/dream.ActiveModuleSurface.tsx` — React component module.
- `components/home/dream.DaydreamPulseStrip.tsx` — React component module.
- `components/home/dream.FlagshipEnginesStrip.tsx` — React component module.
- `components/home/dream.NeuralSeamCanvas.tsx` — React component module.
- `components/home/dream.bar.GlobalDreamBar.tsx` — React component module.
- `components/home/dream.bar.PersistentDreamBar.tsx` — React component module.
- `components/home/dream.widget.DreamWidget.tsx` — React component module.

</details>

## DreamSpace
DreamSpace is a UI subsystem composed of React components and presentation logic. It exposes useDaydreamPersistence, useDaydreamState as React hooks for consumption by sibling subsystems. It depends on Backend, System, Core & CoreSurfaces, Custom Engins, Dreams (Widgets / Windows / Surfaces).
### Responsibilities
- User-facing surfaces: /daydream/brand, /daydream/brand/engin, /daydream/code, /daydream/code/engin, /daydream/constellation, +14 more
- Renders BrandDaydreamPage, CodeDaydreamPage, ConstellationClient, ConstellationPage, CreateDaydreamPage, ForgeDaydreamPage, +28 more
- Asset storage, upload pipelines, and CDN management
### Key Modules
- `BrandDaydreamPage`
- `CodeDaydreamPage`
- `ConstellationClient`
- `ConstellationPage`
- `CreateDaydreamPage`
- `ForgeDaydreamPage`
- `GamePage`
- `GamesDaydreamPage`
- `GamesEnginRedirectPage`
- `ImmersiveGameShell`
- `LabDaydreamPage`
- `OptimizeroPage`
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Custom Engins**
- Depends on **Dreams (Widgets / Windows / Surfaces)**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Integrates with the Dual Runtime layer for execution orchestration
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Custom Engins
- Depends on Dreams (Widgets / Windows / Surfaces)
- Depends on The Engins
### Public Surfaces
**Routes:**
- `/daydream/brand`
- `/daydream/brand/engin`
- `/daydream/code`
- `/daydream/code/engin`
- `/daydream/constellation`
- `/daydream/create`
- `/daydream/create/engin`
- `/daydream/forge`
- `/daydream/game`
- `/daydream/games`
- `/daydream/games/engin`
- `/daydream/lab`
- `/daydream/lab/engin`
- `/daydream/lab/portfolio`
- `/daydream/media-vault`
- `/daydream/music`
- `/daydream/music/engin`
- `/daydream/music/upload`
- `/daydream/play`
**Components:**
`BrandDaydream`, `BrandDaydreamPage`, `CodeDaydreamPage`, `CodeDreamIDE`, `CompingPanel`, `ConstellationClient`, `ConstellationPage`, `CreateDaydreamPage`, `DaydreamShell`, `DiffViewer`, +18 more
### Notable Abstractions
- `StandaloneEnginName` — type
- `DaydreamWidget` — type
- `UseDaydreamPersistenceOptions` — interface
- `UseDaydreamPersistenceReturn` — interface
- `DaydreamSide` — type
- `DaydreamStatePayload` — type
- `UseDaydreamStateOptions` — interface
- `UseDaydreamStateReturn` — interface
- `useDaydreamPersistence` — hook
- `useDaydreamState` — hook
### Capabilities
- Exposes useDaydreamPersistence, useDaydreamState as composable React hooks
- Public contract surface: UseDaydreamPersistenceOptions, UseDaydreamPersistenceReturn, UseDaydreamStateOptions, UseDaydreamStateReturn
- Shared type vocabulary: StandaloneEnginName, DaydreamWidget, DaydreamSide, DaydreamStatePayload
- Utility functions: BrandEnginRedirectPage, CodeEnginRedirectPage, CreateEnginRedirectPage, BabylonSideScroller, LabEnginRedirectPage, MediaVaultLegacyPage
#### File Structure
```text
├── app
│   └── daydream
│       ├── brand
│       │   ├── engin
│       │   │   └── page.tsx
│       │   └── page.tsx
│       ├── code
│       │   ├── engin
│       │   │   └── page.tsx
│       │   └── page.tsx
│       ├── constellation
│       │   ├── dream.ConstellationClient.tsx
│       │   └── page.tsx
│       ├── create
│       │   ├── engin
│       │   │   └── page.tsx
│       │   └── page.tsx
│       ├── forge
│       │   └── page.tsx
│       ├── game
│       │   ├── dream.GamePageClient.tsx
│       │   ├── dream.shell.ImmersiveGameShell.tsx
│       │   └── page.tsx
│       ├── games
│       │   ├── engin
│       │   │   └── page.tsx
│       │   └── page.tsx
│       ├── lab
│       │   ├── engin
│       │   │   └── page.tsx
│       │   ├── page.tsx
│       │   └── portfolio
│       │       └── page.tsx
│       ├── media-vault
│       │   └── page.tsx
│       ├── music
│       │   ├── engin
│       │   │   └── page.tsx
│       │   ├── page.tsx
│       │   └── upload
│       │       └── page.tsx
│       └── play
│           └── page.tsx
├── components
│   └── daydream
│       ├── dream.CodeDreamIDE.tsx
│       ├── dream.DiffViewer.tsx
│       ├── dream.JourneyTrail.tsx
│       ├── dream.LabDreamIDE.tsx
│       ├── dream.NGNEngin.tsx
│       ├── dream.OpenDaydreamSideBButton.tsx
│       ├── dream.StandaloneEnginSurface.tsx
│       ├── dream.constellationmap.tsx
│       ├── dream.shell.DaydreamShell.tsx
│       ├── dreamsurface.daydream.BrandDaydream.tsx
│       └── starmaker
│           ├── dream.panel.CompingPanel.tsx
│           ├── dream.panel.MultitrackArrangementPanel.tsx
│           ├── dream.panel.PianoRollPanel.tsx
│           └── dream.panel.SessionViewPanel.tsx
└── daydreams
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── brand
    │   └── page.tsx
    ├── code
    │   └── page.tsx
    ├── create
    │   └── page.tsx
    ├── games
    │   └── page.tsx
    ├── lab
    │   └── page.tsx
    ├── music
    │   └── page.tsx
    └── shared
        ├── useDaydreamPersistence.ts
        └── useDaydreamState.ts
```
<details><summary>DreamSpace file index (45 files)</summary>

- `app/daydream/brand/engin/page.tsx` — route page.
- `app/daydream/brand/page.tsx` — route page.
- `app/daydream/code/engin/page.tsx` — route page.
- `app/daydream/code/page.tsx` — route page.
- `app/daydream/constellation/dream.ConstellationClient.tsx` — React component module.
- `app/daydream/constellation/page.tsx` — route page.
- `app/daydream/create/engin/page.tsx` — route page.
- `app/daydream/create/page.tsx` — route page.
- `app/daydream/forge/page.tsx` — route page.
- `app/daydream/game/dream.GamePageClient.tsx` — React component module.
- `app/daydream/game/dream.shell.ImmersiveGameShell.tsx` — React component module.
- `app/daydream/game/page.tsx` — route page.
- `app/daydream/games/engin/page.tsx` — route page.
- `app/daydream/games/page.tsx` — route page.
- `app/daydream/lab/engin/page.tsx` — route page.
- `app/daydream/lab/page.tsx` — route page.
- `app/daydream/lab/portfolio/page.tsx` — route page.
- `app/daydream/media-vault/page.tsx` — route page.
- `app/daydream/music/engin/page.tsx` — route page.
- `app/daydream/music/page.tsx` — route page.
- `app/daydream/music/upload/page.tsx` — route page.
- `app/daydream/play/page.tsx` — route page.
- `components/daydream/dream.CodeDreamIDE.tsx` — React component module.
- `components/daydream/dream.DiffViewer.tsx` — React component module.
- `components/daydream/dream.JourneyTrail.tsx` — React component module.
- `components/daydream/dream.LabDreamIDE.tsx` — React component module.
- `components/daydream/dream.NGNEngin.tsx` — React component module.
- `components/daydream/dream.OpenDaydreamSideBButton.tsx` — React component module.
- `components/daydream/dream.StandaloneEnginSurface.tsx` — React component module.
- `components/daydream/dream.constellationmap.tsx` — React component module.
- `components/daydream/dream.shell.DaydreamShell.tsx` — React component module.
- `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` — React component module.
- `components/daydream/starmaker/dream.panel.CompingPanel.tsx` — React component module.
- `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx` — React component module.
- `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx` — React component module.
- `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` — React component module.
- `daydreams/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `daydreams/brand/page.tsx` — route page.
- `daydreams/code/page.tsx` — route page.
- `daydreams/create/page.tsx` — route page.
- `daydreams/games/page.tsx` — route page.
- `daydreams/lab/page.tsx` — route page.
- `daydreams/music/page.tsx` — route page.
- `daydreams/shared/useDaydreamPersistence.ts` — TypeScript module.
- `daydreams/shared/useDaydreamState.ts` — TypeScript module.

</details>

## Dreams (Widgets / Windows / Surfaces)
Dreams (Widgets / Windows / Surfaces) is a UI subsystem composed of React components and presentation logic. It exposes useDreamWindowActions, useDualRuntime, useEditMode as React hooks for consumption by sibling subsystems. Core abstractions are encapsulated in CrossWidgetPostingEngine, WidgetEventBus, WidgetLinkGraph. It depends on Ads & User Ads, Backend, System, Core & CoreSurfaces, Dreamr — Human Media.
### Responsibilities
- Renders AIAssistant, AudioVisualizer3D, BoogieWarningBanner, BrandLogo, CommandPalette, MobileCmdFab, +58 more
- Core abstractions: CrossWidgetPostingEngine, WidgetEventBus, WidgetLinkGraph
- Runtime orchestration and engin lifecycle management
- Feed ranking, algorithm execution, and content scoring
### Key Modules
- `AIAssistant`
- `AudioVisualizer3D`
- `BoogieWarningBanner`
- `BrandLogo`
- `CommandPalette`
- `CreatePostModal`
- `DrEamsModeToggle`
- `DrEamsVoiceAssistant`
- `DragHandle`
- `DragToAnchorClose`
- `ForgeDreamCanvas`
- `MobileCmdFab`
### Architectural Relationships
- Depends on **Ads & User Ads**
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreamr — Human Media**
- Depends on **DreamSpace**
- Depends on **Dual Runtimes**
- Depends on **Shared Dreams**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Integrates with the Dual Runtime layer for execution orchestration
- Participates in the Shared Dreams pub/sub channel system
- Consumes core backend services and database abstractions
- Depends on Ads & User Ads
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreamr — Human Media
- Depends on DreamSpace
### Public Surfaces
**Components:**
`AIAssistant`, `AddDreamCTA`, `AnchorWidget`, `AudioVisualizer3D`, `BoogieWarningBanner`, `BrandLogo`, `ChildSafetyPanel`, `CommandPalette`, `ConfigureSheet`, `CreatePostModal`, +54 more
### Notable Abstractions
- `AudioVisualizer3DProps` — interface
- `DeTheme` — interface
- `RegistryEntry` — interface
- `GameAssetRow` — interface
- `ControlMapping` — interface
- `EnrichedEntry` — interface
- `UniversalAssetRegistryProps` — interface
- `DreamConnectorLayerProps` — interface
- `DreamFeatureLayerProps` — interface
- `DreamOutputMode` — type
- `DreamVisibility` — type
- `DreamOutputLayerProps` — interface
- `useDreamWindowActions` — hook
- `useDualRuntime` — hook
- `useEditMode` — hook
- `useToast` — hook
- `useWidget` — hook
### Capabilities
- Exposes useDreamWindowActions, useDualRuntime, useEditMode, useToast, useWidget as composable React hooks
- Public contract surface: AudioVisualizer3DProps, DeTheme, RegistryEntry, GameAssetRow, ControlMapping
- Shared type vocabulary: DreamOutputMode, DreamVisibility, DreamDataState, DreamDataState, DreamDataState
- Utility functions: pickZoneQuote, hitZone, OSShellActivator, applyTheme, applyVoidTheme, isVoidThemeActive
#### File Structure
```text
├── components
│   ├── dream.AIAssistant.tsx
│   ├── dream.AudioVisualizer3D.tsx
│   ├── dream.BoogieWarningBanner.tsx
│   ├── dream.BrandLogo.tsx
│   ├── dream.CommandPalette.tsx
│   ├── dream.CreatePostModal.tsx
│   ├── dream.DrEamsModeToggle.tsx
│   ├── dream.DrEamsVoiceAssistant.tsx
│   ├── dream.DragToAnchorClose.tsx
│   ├── dream.FeedCard.tsx
│   ├── dream.ForgeDreamCanvas.tsx
│   ├── dream.GlobalOverlays.tsx
│   ├── dream.HeroSprite.tsx
│   ├── dream.HomeFeed.tsx
│   ├── dream.IconSelector.tsx
│   ├── dream.InnerDreamsButton.tsx
│   ├── dream.KonamiDream.tsx
│   ├── dream.LandingHero.tsx
│   ├── dream.LedgerChart.tsx
│   ├── dream.MessagesClient.tsx
│   ├── dream.NotificationCenter.tsx
│   ├── dream.OSShellActivator.tsx
│   ├── dream.PhysicsLab.tsx
│   ├── dream.ProfileEditor.tsx
│   ├── dream.ProfileShareButton.tsx
│   ├── dream.ProfileSpace.tsx
│   ├── dream.PullToRefresh.tsx
│   ├── dream.ShrunkMode.tsx
│   ├── dream.SkeletonLoaders.tsx
│   ├── dream.ThemeApplicator.tsx
│   ├── dream.ThemeToggle.tsx
│   ├── dream.ToastSystem.tsx
│   ├── dream.VoidThemeToggle.tsx
│   ├── dream.panel.ChildSafetyPanel.tsx
│   ├── dream.panel.IDariPanel.tsx
│   ├── dream.universal_asset_registry.tsx
│   ├── dream.widget.AnchorWidget.tsx
│   ├── dream.widget.ProfileWidgetBlock.tsx
│   ├── dream.widget.WidgetBubble.tsx
│   ├── dreams
│   │   ├── dream.DraggableDream.tsx
│   │   ├── dream.GlobalDragLayer.tsx
│   │   ├── dream.PlatformErrorReporter.tsx
│   │   ├── dream.SlideOverPanel.tsx
│   │   ├── dream.connectorlayer.tsx
│   │   ├── dream.featurelayer.tsx
│   │   ├── dream.outputlayer.tsx
│   │   ├── dream.panel.RuntimeMemoryHUD.tsx
│   │   ├── dream.shell.DreamShell.tsx
│   │   ├── dream.shell.SharedDreamShell.tsx
│   │   ├── dream.widget.SuperDreamWidget.tsx
│   │   ├── dream.window.JourneyDreamWindow.tsx
│   │   ├── dreamsurface.dreamspace.tsx
│   │   ├── dreamsurface.shell.tsx
│   │   └── dreamsurface.window.tsx
│   ├── runtime
│   │   ├── dream.DualRuntimeContainer.tsx
│   │   ├── dream.RuntimeView.tsx
│   │   └── dream.shell.RuntimeShell.tsx
│   └── widgets
│       ├── dream.AddDreamCTA.tsx
│       ├── dream.ConfigureSheet.tsx
│       ├── dream.EditModeBanner.tsx
│       ├── dream.EditModeProvider.tsx
│       ├── dream.widget.PlayMediaWidget.tsx
│       ├── dream.widget.UniversalWidget.tsx
│       ├── dream.widget.WidgetCard.tsx
│       ├── dream.widget.WidgetLibrary.tsx
│       ├── dream.widget.WidgetPlaceholder.tsx
│       ├── dream.widget.WidgetShell.tsx
│       └── dream.widget.WidgetSurface.tsx
└── engine
    ├── dream-window
    │   ├── DreamWindowLifecycle.ts
    │   ├── connectionVerbs.ts
    │   ├── enginConnectionNetwork.ts
    │   ├── index.ts
    │   ├── runtimeRegion.ts
    │   └── useDreamWindowActions.ts
    └── widgets
        ├── CrossWidgetPosting.ts
        ├── WidgetBus.ts
        ├── WidgetEngine.tsx
        ├── WidgetEventBus.ts
        ├── WidgetLinkGraph.ts
        ├── feed-resolver.ts
        ├── parse.ts
        ├── parseConfig.ts
        ├── useWidget.ts
        └── widgetRegistry.ts
```
<details><summary>Dreams (Widgets / Windows / Surfaces) file index (84 files)</summary>

- `components/dream.AIAssistant.tsx` — React component module.
- `components/dream.AudioVisualizer3D.tsx` — React component module.
- `components/dream.BoogieWarningBanner.tsx` — React component module.
- `components/dream.BrandLogo.tsx` — React component module.
- `components/dream.CommandPalette.tsx` — React component module.
- `components/dream.CreatePostModal.tsx` — React component module.
- `components/dream.DrEamsModeToggle.tsx` — React component module.
- `components/dream.DrEamsVoiceAssistant.tsx` — React component module.
- `components/dream.DragToAnchorClose.tsx` — React component module.
- `components/dream.FeedCard.tsx` — React component module.
- `components/dream.ForgeDreamCanvas.tsx` — React component module.
- `components/dream.GlobalOverlays.tsx` — React component module.
- `components/dream.HeroSprite.tsx` — React component module.
- `components/dream.HomeFeed.tsx` — React component module.
- `components/dream.IconSelector.tsx` — React component module.
- `components/dream.InnerDreamsButton.tsx` — React component module.
- `components/dream.KonamiDream.tsx` — React component module.
- `components/dream.LandingHero.tsx` — React component module.
- `components/dream.LedgerChart.tsx` — React component module.
- `components/dream.MessagesClient.tsx` — React component module.
- `components/dream.NotificationCenter.tsx` — React component module.
- `components/dream.OSShellActivator.tsx` — React component module.
- `components/dream.PhysicsLab.tsx` — React component module.
- `components/dream.ProfileEditor.tsx` — React component module.
- `components/dream.ProfileShareButton.tsx` — React component module.
- `components/dream.ProfileSpace.tsx` — React component module.
- `components/dream.PullToRefresh.tsx` — React component module.
- `components/dream.ShrunkMode.tsx` — React component module.
- `components/dream.SkeletonLoaders.tsx` — React component module.
- `components/dream.ThemeApplicator.tsx` — React component module.
- `components/dream.ThemeToggle.tsx` — React component module.
- `components/dream.ToastSystem.tsx` — React component module.
- `components/dream.VoidThemeToggle.tsx` — React component module.
- `components/dream.panel.ChildSafetyPanel.tsx` — React component module.
- `components/dream.panel.IDariPanel.tsx` — React component module.
- `components/dream.universal_asset_registry.tsx` — React component module.
- `components/dream.widget.AnchorWidget.tsx` — React component module.
- `components/dream.widget.ProfileWidgetBlock.tsx` — React component module.
- `components/dream.widget.WidgetBubble.tsx` — React component module.
- `components/dreams/dream.DraggableDream.tsx` — React component module.
- `components/dreams/dream.GlobalDragLayer.tsx` — React component module.
- `components/dreams/dream.PlatformErrorReporter.tsx` — React component module.
- `components/dreams/dream.SlideOverPanel.tsx` — React component module.
- `components/dreams/dream.connectorlayer.tsx` — React component module.
- `components/dreams/dream.featurelayer.tsx` — React component module.
- `components/dreams/dream.outputlayer.tsx` — React component module.
- `components/dreams/dream.panel.RuntimeMemoryHUD.tsx` — React component module.
- `components/dreams/dream.shell.DreamShell.tsx` — React component module.
- `components/dreams/dream.shell.SharedDreamShell.tsx` — React component module.
- `components/dreams/dream.widget.SuperDreamWidget.tsx` — React component module.
- `components/dreams/dream.window.JourneyDreamWindow.tsx` — React component module.
- `components/dreams/dreamsurface.dreamspace.tsx` — React component module.
- `components/dreams/dreamsurface.shell.tsx` — React component module.
- `components/dreams/dreamsurface.window.tsx` — React component module.
- `components/runtime/dream.DualRuntimeContainer.tsx` — React component module.
- `components/runtime/dream.RuntimeView.tsx` — React component module.
- `components/runtime/dream.shell.RuntimeShell.tsx` — React component module.
- `components/widgets/dream.AddDreamCTA.tsx` — React component module.
- `components/widgets/dream.ConfigureSheet.tsx` — React component module.
- `components/widgets/dream.EditModeBanner.tsx` — React component module.
- `components/widgets/dream.EditModeProvider.tsx` — React component module.
- `components/widgets/dream.widget.PlayMediaWidget.tsx` — React component module.
- `components/widgets/dream.widget.UniversalWidget.tsx` — React component module.
- `components/widgets/dream.widget.WidgetCard.tsx` — React component module.
- `components/widgets/dream.widget.WidgetLibrary.tsx` — React component module.
- `components/widgets/dream.widget.WidgetPlaceholder.tsx` — React component module.
- `components/widgets/dream.widget.WidgetShell.tsx` — React component module.
- `components/widgets/dream.widget.WidgetSurface.tsx` — React component module.
- `engine/dream-window/DreamWindowLifecycle.ts` — TypeScript module.
- `engine/dream-window/connectionVerbs.ts` — TypeScript module.
- `engine/dream-window/enginConnectionNetwork.ts` — TypeScript module.
- `engine/dream-window/index.ts` — TypeScript module.
- `engine/dream-window/runtimeRegion.ts` — TypeScript module.
- `engine/dream-window/useDreamWindowActions.ts` — TypeScript module.
- `engine/widgets/CrossWidgetPosting.ts` — TypeScript module.
- `engine/widgets/WidgetBus.ts` — TypeScript module.
- `engine/widgets/WidgetEngine.tsx` — React component module.
- `engine/widgets/WidgetEventBus.ts` — TypeScript module.
- `engine/widgets/WidgetLinkGraph.ts` — TypeScript module.
- `engine/widgets/feed-resolver.ts` — TypeScript module.
- `engine/widgets/parse.ts` — TypeScript module.
- `engine/widgets/parseConfig.ts` — TypeScript module.
- `engine/widgets/useWidget.ts` — TypeScript module.
- `engine/widgets/widgetRegistry.ts` — TypeScript module.

</details>

## User-Facing Modularity
User-Facing Modularity is a UI subsystem composed of React components and presentation logic. It exposes useAccount, useAlbums, useBreakpoint as React hooks for consumption by sibling subsystems. Core abstractions are encapsulated in CartridgeErrorBoundary, DualSenseManager, ParticlePool. It depends on Ads & User Ads, Backend, System, Core & CoreSurfaces, dr-eams.
### Responsibilities
- Renders ActivityPostForm, ActivityProfile, TierBadge, AdUnit, SkipCreditBalance, PasswordField, +277 more
- Core abstractions: CartridgeErrorBoundary, DualSenseManager, ParticlePool, ScreenShake, ParallaxLayers
- Runtime orchestration and engin lifecycle management
- Authentication, session, and access control
- Feed ranking, algorithm execution, and content scoring
- Theming, design tokens, and visual customisation
### Key Modules
- `ActivityPostForm`
- `ActivityProfile`
- `AdUnit`
- `AddSliceSheet`
- `ConnectorRow`
- `DreamEnginLogo`
- `LogoHero`
- `Nav`
- `NoSlotDialog`
- `PasswordField`
- `SkipCreditBalance`
- `TierBadge`
### Architectural Relationships
- Depends on **Ads & User Ads**
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **dr-eams**
- Depends on **Dreamr — Human Media**
- Depends on **Dreams (Widgets / Windows / Surfaces)**
- Depends on **DreamSpace**
- Depends on **Dual Runtimes**
- Depends on **Full Website Customizability**
- Depends on **optimizer**
- Depends on **Shared Dreams**
- Depends on **The Engins**
- Depends on **The Marketplace**
- Integrates with the Dual Runtime layer for execution orchestration
- Participates in the Shared Dreams pub/sub channel system
- Consumes core backend services and database abstractions
- Depends on Ads & User Ads
- Depends on Backend, System, Core & CoreSurfaces
- Depends on dr-eams
- Depends on Dreamr — Human Media
### Public Surfaces
**Components:**
`AIAssistant`, `AIBuilderPanel`, `AIPanel`, `ActiveModuleSurface`, `ActivityPostForm`, `ActivityProfile`, `AdUnit`, `AddDreamCTA`, `AddSliceSheet`, `AlgorithmEngine`, +248 more
### Notable Abstractions
- `ActivityPostData` — interface
- `FeedSlice` — interface
- `AddSliceSheetProps` — interface
- `ConnectWidgetPromptProps` — interface
- `ConnectorRowProps` — interface
- `NoSlotDialogProps` — interface
- `PlacedWidget` — interface
- `PlacementModeProps` — interface
- `ConnectWidgetPromptProps` — interface
- `PickerConnector` — interface
- `ConnectorWidgetPickerProps` — interface
- `StandaloneEnginName` — type
- `useAccount` — hook
- `useAlbums` — hook
- `useBreakpoint` — hook
- `useBreakpointValue` — hook
- `useConnectorInstallFlow` — hook
- `useContent` — hook
- `useCustomizeMode` — hook
- `useDreamLayout` — hook
### Capabilities
- Exposes useAccount, useAlbums, useBreakpoint, useBreakpointValue, useConnectorInstallFlow, useContent as composable React hooks
- Public contract surface: ActivityPostData, FeedSlice, AddSliceSheetProps, ConnectWidgetPromptProps, ConnectorRowProps
- Shared type vocabulary: StandaloneEnginName, DaydreamWidget, AssetCategory, UnitComplex, Depth
- Utility functions: ConnectWidgetPrompt, pickZoneQuote, hitZone, OSShellActivator, applyTheme, applyVoidTheme
#### File Structure
```text
├── components
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── activity
│   │   ├── dream.ActivityPostForm.tsx
│   │   ├── dream.ActivityProfile.tsx
│   │   └── dream.TierBadge.tsx
│   ├── ads
│   │   ├── dream.AdUnit.tsx
│   │   └── dream.SkipCreditBalance.tsx
│   ├── auth
│   │   └── dream.PasswordField.tsx
│   ├── branding
│   │   ├── dream.DreamEnginLogo.tsx
│   │   ├── dream.LogoHero.tsx
│   │   └── dream.Nav.tsx
│   ├── connectors
│   │   ├── dream.AddSliceSheet.tsx
│   │   ├── dream.ConnectDreamPrompt.tsx
│   │   ├── dream.ConnectorRow.tsx
│   │   ├── dream.NoSlotDialog.tsx
│   │   ├── dream.PlacementMode.tsx
│   │   ├── dream.widget.ConnectWidgetPrompt.tsx
│   │   └── dream.widget.ConnectorWidgetPicker.tsx
│   ├── contentengin
│   │   ├── AnimationPanel.tsx
│   │   ├── AssetPreview3D.tsx
│   │   ├── ContentEnginStudio.tsx
│   │   ├── ExportPanel.tsx
│   │   ├── MaterialEditor.tsx
│   │   ├── PartTreeEditor.tsx
│   │   ├── PhotoReferencePanel.tsx
│   │   ├── RecipeEditor.tsx
│   │   └── RiggingPanel.tsx
│   ├── core
│   │   └── dream.CoreDream.tsx
│   ├── customize
│   │   ├── dream.GlobalCustomizeUI.tsx
│   │   ├── dream.bar.CustomizeModeBar.tsx
│   │   ├── dream.bar.CustomizeToolbar.tsx
│   │   └── panels
│   │       ├── dream.panel.ColorPanel.tsx
│   │       ├── dream.panel.EffectsPanel.tsx
│   │       ├── dream.panel.FontPanel.tsx
│   │       └── dream.panel.LayoutPanel.tsx
│   ├── daydream
│   │   ├── dream.CodeDreamIDE.tsx
│   │   ├── dream.DiffViewer.tsx
│   │   ├── dream.JourneyTrail.tsx
│   │   ├── dream.LabDreamIDE.tsx
│   │   ├── dream.NGNEngin.tsx
│   │   ├── dream.OpenDaydreamSideBButton.tsx
│   │   ├── dream.StandaloneEnginSurface.tsx
│   │   ├── dream.constellationmap.tsx
│   │   ├── dream.shell.DaydreamShell.tsx
│   │   ├── dreamsurface.daydream.BrandDaydream.tsx
│   │   └── starmaker
│   │       ├── dream.panel.CompingPanel.tsx
│   │       ├── dream.panel.MultitrackArrangementPanel.tsx
│   │       ├── dream.panel.PianoRollPanel.tsx
│   │       └── dream.panel.SessionViewPanel.tsx
│   ├── draggable
│   │   └── dream.DraggableModule.tsx
│   ├── dream.AIAssistant.tsx
│   ├── dream.AudioVisualizer3D.tsx
│   ├── dream.BoogieWarningBanner.tsx
│   ├── dream.BrandLogo.tsx
│   ├── dream.CommandPalette.tsx
│   ├── dream.CreatePostModal.tsx
│   ├── dream.DrEamsModeToggle.tsx
│   ├── dream.DrEamsVoiceAssistant.tsx
│   ├── dream.DragToAnchorClose.tsx
│   ├── dream.FeedCard.tsx
│   ├── dream.ForgeDreamCanvas.tsx
│   ├── dream.GlobalOverlays.tsx
│   ├── dream.HeroSprite.tsx
│   ├── dream.HomeFeed.tsx
│   ├── dream.IconSelector.tsx
│   ├── dream.InnerDreamsButton.tsx
│   ├── dream.KonamiDream.tsx
│   ├── dream.LandingHero.tsx
│   ├── dream.LedgerChart.tsx
│   ├── dream.MessagesClient.tsx
│   ├── dream.NotificationCenter.tsx
│   ├── dream.OSShellActivator.tsx
│   ├── dream.PhysicsLab.tsx
│   ├── dream.ProfileEditor.tsx
│   ├── dream.ProfileShareButton.tsx
│   ├── dream.ProfileSpace.tsx
│   ├── dream.PullToRefresh.tsx
│   ├── dream.ShrunkMode.tsx
│   ├── dream.SkeletonLoaders.tsx
│   ├── dream.ThemeApplicator.tsx
│   ├── dream.ThemeToggle.tsx
│   ├── dream.ToastSystem.tsx
│   ├── dream.VoidThemeToggle.tsx
│   ├── dream.panel.ChildSafetyPanel.tsx
│   ├── dream.panel.IDariPanel.tsx
│   ├── dream.universal_asset_registry.tsx
│   ├── dream.widget.AnchorWidget.tsx
│   ├── dream.widget.ProfileWidgetBlock.tsx
│   ├── dream.widget.WidgetBubble.tsx
│   ├── dreamengin
│   │   ├── dream.CanvasDropZone.tsx
│   │   ├── dream.DREAMenginOS.tsx
│   │   ├── dream.DrEamsCanvas.tsx
│   │   ├── dream.HomeControls.tsx
│   │   ├── dream.bar.DrEamsSearchBar.tsx
│   │   ├── dream.menu.NexusMenu.tsx
│   │   ├── dream.menu.OutdreamMenu.tsx
│   │   ├── dream.overlay.ViewAllDreamsOverlay.tsx
│   │   ├── dream.panel.CrossEnginStatusPanel.tsx
│   │   ├── dream.panel.DrEamsPanel.tsx
│   │   ├── dream.scene.BabylonGameScene.tsx
│   │   ├── dream.scene.DrEamsScene.tsx
│   │   ├── dream.scene.PortfolioOptimizationScene.tsx
│   │   ├── dream.shell.EnginShell.tsx
│   │   ├── dream.widget.AppearanceWidget.tsx
│   │   ├── dreamsurface.dreamengin.tsx
│   │   └── engine
│   │       ├── math.ts
… (219 more files)
```
<details><summary>User-Facing Modularity file index (339 files)</summary>

- `components/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `components/activity/dream.ActivityPostForm.tsx` — React component module.
- `components/activity/dream.ActivityProfile.tsx` — React component module.
- `components/activity/dream.TierBadge.tsx` — React component module.
- `components/ads/dream.AdUnit.tsx` — React component module.
- `components/ads/dream.SkipCreditBalance.tsx` — React component module.
- `components/auth/dream.PasswordField.tsx` — React component module.
- `components/branding/dream.DreamEnginLogo.tsx` — React component module.
- `components/branding/dream.LogoHero.tsx` — React component module.
- `components/branding/dream.Nav.tsx` — React component module.
- `components/connectors/dream.AddSliceSheet.tsx` — React component module.
- `components/connectors/dream.ConnectDreamPrompt.tsx` — React component module.
- `components/connectors/dream.ConnectorRow.tsx` — React component module.
- `components/connectors/dream.NoSlotDialog.tsx` — React component module.
- `components/connectors/dream.PlacementMode.tsx` — React component module.
- `components/connectors/dream.widget.ConnectWidgetPrompt.tsx` — React component module.
- `components/connectors/dream.widget.ConnectorWidgetPicker.tsx` — React component module.
- `components/contentengin/AnimationPanel.tsx` — React component module.
- `components/contentengin/AssetPreview3D.tsx` — React component module.
- `components/contentengin/ContentEnginStudio.tsx` — React component module.
- `components/contentengin/ExportPanel.tsx` — React component module.
- `components/contentengin/MaterialEditor.tsx` — React component module.
- `components/contentengin/PartTreeEditor.tsx` — React component module.
- `components/contentengin/PhotoReferencePanel.tsx` — React component module.
- `components/contentengin/RecipeEditor.tsx` — React component module.
- `components/contentengin/RiggingPanel.tsx` — React component module.
- `components/core/dream.CoreDream.tsx` — React component module.
- `components/customize/dream.GlobalCustomizeUI.tsx` — React component module.
- `components/customize/dream.bar.CustomizeModeBar.tsx` — React component module.
- `components/customize/dream.bar.CustomizeToolbar.tsx` — React component module.
- `components/customize/panels/dream.panel.ColorPanel.tsx` — React component module.
- `components/customize/panels/dream.panel.EffectsPanel.tsx` — React component module.
- `components/customize/panels/dream.panel.FontPanel.tsx` — React component module.
- `components/customize/panels/dream.panel.LayoutPanel.tsx` — React component module.
- `components/daydream/dream.CodeDreamIDE.tsx` — React component module.
- `components/daydream/dream.DiffViewer.tsx` — React component module.
- `components/daydream/dream.JourneyTrail.tsx` — React component module.
- `components/daydream/dream.LabDreamIDE.tsx` — React component module.
- `components/daydream/dream.NGNEngin.tsx` — React component module.
- `components/daydream/dream.OpenDaydreamSideBButton.tsx` — React component module.
- `components/daydream/dream.StandaloneEnginSurface.tsx` — React component module.
- `components/daydream/dream.constellationmap.tsx` — React component module.
- `components/daydream/dream.shell.DaydreamShell.tsx` — React component module.
- `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` — React component module.
- `components/daydream/starmaker/dream.panel.CompingPanel.tsx` — React component module.
- `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx` — React component module.
- `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx` — React component module.
- `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` — React component module.
- `components/draggable/dream.DraggableModule.tsx` — React component module.
- `components/dream.AIAssistant.tsx` — React component module.
- `components/dream.AudioVisualizer3D.tsx` — React component module.
- `components/dream.BoogieWarningBanner.tsx` — React component module.
- `components/dream.BrandLogo.tsx` — React component module.
- `components/dream.CommandPalette.tsx` — React component module.
- `components/dream.CreatePostModal.tsx` — React component module.
- `components/dream.DrEamsModeToggle.tsx` — React component module.
- `components/dream.DrEamsVoiceAssistant.tsx` — React component module.
- `components/dream.DragToAnchorClose.tsx` — React component module.
- `components/dream.FeedCard.tsx` — React component module.
- `components/dream.ForgeDreamCanvas.tsx` — React component module.
- `components/dream.GlobalOverlays.tsx` — React component module.
- `components/dream.HeroSprite.tsx` — React component module.
- `components/dream.HomeFeed.tsx` — React component module.
- `components/dream.IconSelector.tsx` — React component module.
- `components/dream.InnerDreamsButton.tsx` — React component module.
- `components/dream.KonamiDream.tsx` — React component module.
- `components/dream.LandingHero.tsx` — React component module.
- `components/dream.LedgerChart.tsx` — React component module.
- `components/dream.MessagesClient.tsx` — React component module.
- `components/dream.NotificationCenter.tsx` — React component module.
- `components/dream.OSShellActivator.tsx` — React component module.
- `components/dream.PhysicsLab.tsx` — React component module.
- `components/dream.ProfileEditor.tsx` — React component module.
- `components/dream.ProfileShareButton.tsx` — React component module.
- `components/dream.ProfileSpace.tsx` — React component module.
- `components/dream.PullToRefresh.tsx` — React component module.
- `components/dream.ShrunkMode.tsx` — React component module.
- `components/dream.SkeletonLoaders.tsx` — React component module.
- `components/dream.ThemeApplicator.tsx` — React component module.
- `components/dream.ThemeToggle.tsx` — React component module.
- `components/dream.ToastSystem.tsx` — React component module.
- `components/dream.VoidThemeToggle.tsx` — React component module.
- `components/dream.panel.ChildSafetyPanel.tsx` — React component module.
- `components/dream.panel.IDariPanel.tsx` — React component module.
- `components/dream.universal_asset_registry.tsx` — React component module.
- `components/dream.widget.AnchorWidget.tsx` — React component module.
- `components/dream.widget.ProfileWidgetBlock.tsx` — React component module.
- `components/dream.widget.WidgetBubble.tsx` — React component module.
- `components/dreamengin/dream.CanvasDropZone.tsx` — React component module.
- `components/dreamengin/dream.DREAMenginOS.tsx` — React component module.
- `components/dreamengin/dream.DrEamsCanvas.tsx` — React component module.
- `components/dreamengin/dream.HomeControls.tsx` — React component module.
- `components/dreamengin/dream.bar.DrEamsSearchBar.tsx` — React component module.
- `components/dreamengin/dream.menu.NexusMenu.tsx` — React component module.
- `components/dreamengin/dream.menu.OutdreamMenu.tsx` — React component module.
- `components/dreamengin/dream.overlay.ViewAllDreamsOverlay.tsx` — React component module.
- `components/dreamengin/dream.panel.CrossEnginStatusPanel.tsx` — React component module.
- `components/dreamengin/dream.panel.DrEamsPanel.tsx` — React component module.
- `components/dreamengin/dream.scene.BabylonGameScene.tsx` — React component module.
- `components/dreamengin/dream.scene.DrEamsScene.tsx` — React component module.
- `components/dreamengin/dream.scene.PortfolioOptimizationScene.tsx` — React component module.
- `components/dreamengin/dream.shell.EnginShell.tsx` — React component module.
- `components/dreamengin/dream.widget.AppearanceWidget.tsx` — React component module.
- `components/dreamengin/dreamsurface.dreamengin.tsx` — React component module.
- `components/dreamengin/engine/math.ts` — TypeScript module.
- `components/dreamengin/engine/types.ts` — TypeScript module.
- `components/dreamnav/dream.DreamNavControls.tsx` — React component module.
- `components/dreamnav/dreamsurface.dreamnav.tsx` — React component module.
- `components/dreamr/dream.CloseFriendsSettings.tsx` — React component module.
- `components/dreamr/dream.panel.DreamRChannelPanel.tsx` — React component module.
- `components/dreamr/dream.panel.DreamRCreatorPanel.tsx` — React component module.
- `components/dreams/dream.DraggableDream.tsx` — React component module.
- `components/dreams/dream.GlobalDragLayer.tsx` — React component module.
- `components/dreams/dream.PlatformErrorReporter.tsx` — React component module.
- `components/dreams/dream.SlideOverPanel.tsx` — React component module.
- `components/dreams/dream.connectorlayer.tsx` — React component module.
- `components/dreams/dream.featurelayer.tsx` — React component module.
- `components/dreams/dream.outputlayer.tsx` — React component module.
- `components/dreams/dream.panel.RuntimeMemoryHUD.tsx` — React component module.
- `components/dreams/dream.shell.DreamShell.tsx` — React component module.
- `components/dreams/dream.shell.SharedDreamShell.tsx` — React component module.
- `components/dreams/dream.widget.SuperDreamWidget.tsx` — React component module.
- `components/dreams/dream.window.JourneyDreamWindow.tsx` — React component module.
- `components/dreams/dreamsurface.dreamspace.tsx` — React component module.
- `components/dreams/dreamsurface.shell.tsx` — React component module.
- `components/dreams/dreamsurface.window.tsx` — React component module.
- `components/engines/brand/dream.BrandEnginApp.tsx` — React component module.
- `components/engines/brand/index.ts` — TypeScript module.
- `components/engines/brand/panels/dream.panel.CampaignsPanel.tsx` — React component module.
- `components/engines/brand/panels/dream.panel.IdentityPanel.tsx` — React component module.
- `components/engines/code/dream.CodeEnginApp.tsx` — React component module.
- `components/engines/code/index.ts` — TypeScript module.
- `components/engines/code/panels/dream.panel.AIPanel.tsx` — React component module.
- `components/engines/code/panels/dream.panel.NotebookPanel.tsx` — React component module.
- `components/engines/code/panels/dream.panel.ProjectsPanel.tsx` — React component module.
- `components/engines/create/dream.CreateEnginApp.tsx` — React component module.
- `components/engines/create/index.ts` — TypeScript module.
- `components/engines/create/panels/dream.panel.CalendarPanel.tsx` — React component module.
- `components/engines/create/panels/dream.panel.EditorPanel.tsx` — React component module.
- `components/engines/create/panels/dream.panel.QueuePanel.tsx` — React component module.
- `components/engines/games/dream.GameEnginApp.tsx` — React component module.
- `components/engines/games/index.ts` — TypeScript module.
- `components/engines/games/panels/dream.panel.BuilderPanel.tsx` — React component module.
- `components/engines/games/panels/dream.panel.LibraryPanel.tsx` — React component module.
- `components/engines/games/panels/dream.panel.ScoresPanel.tsx` — React component module.
- `components/engines/index.ts` — TypeScript module.
- `components/engines/lab/dream.LabEnginApp.tsx` — React component module.
- `components/engines/lab/index.ts` — TypeScript module.
- `components/engines/lab/panels/dream.panel.DataVizPanel.tsx` — React component module.
- `components/engines/lab/panels/dream.panel.ExperimentsPanel.tsx` — React component module.
- `components/engines/lab/panels/dream.panel.QuantumPanel.tsx` — React component module.
- `components/engines/music/dream.MusicEnginApp.tsx` — React component module.
- `components/engines/music/index.ts` — TypeScript module.
- `components/engines/music/panels/dream.panel.ArrangePanel.tsx` — React component module.
- `components/engines/music/panels/dream.panel.MusicLibraryPanel.tsx` — React component module.
- `components/engines/music/panels/dream.panel.StudioPanel.tsx` — React component module.
- `components/engines/portfolio/dream.PortfolioEnginApp.tsx` — React component module.
- `components/engines/portfolio/index.ts` — TypeScript module.
- `components/engines/portfolio/panels/dream.panel.AssetsPanel.tsx` — React component module.
- `components/engines/portfolio/panels/dream.panel.OptimizePanel.tsx` — React component module.
- `components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel.tsx` — React component module.
- `components/engines/shared/dream.EnginProvider.tsx` — React component module.
- `components/engines/shared/dream.EnginRuleSet.ts` — TypeScript module.
- `components/engines/shared/dream.bar.EnginNavBar.tsx` — React component module.
- `components/engines/shared/dream.makeEnginApp.tsx` — React component module.
- `components/engines/shared/dream.shell.EnginAppShell.tsx` — React component module.
- `components/engines/shared/index.ts` — TypeScript module.
- `components/feed/dream.AlgorithmEngine.tsx` — React component module.
- `components/feed/dream.CommentSection.tsx` — React component module.
- `components/feed/dream.FeedVideoCard.tsx` — React component module.
- `components/feed/dream.FollowButton.tsx` — React component module.
- `components/feed/dream.FollowOnboarding.tsx` — React component module.
- `components/feeds/dream.widget.EmbedFeedWidget.tsx` — React component module.
- `components/forge/dream.EngineBuilderCanvas.tsx` — React component module.
- `components/forge/dream.panel.AIBuilderPanel.tsx` — React component module.
- `components/forge/dream.widget.ForgeMomentumWidget.tsx` — React component module.
- `components/gameengin/README.md` — documentation.
- `components/gameengin/dream.CartridgeRegistryBootstrap.tsx` — React component module.
- `components/gameengin/dream.CrashReportModal.tsx` — React component module.
- `components/gameengin/dream.cartridge.CartridgeBrowser.tsx` — React component module.
- `components/gameengin/dream.cartridge.CartridgeErrorBoundary.tsx` — React component module.
- `components/gameengin/dream.cartridge.CartridgeLauncher.tsx` — React component module.
- `components/gameengin/dream.cartridge.FeaturedCartridges.tsx` — React component module.
- `components/gameengin/input/DualSenseManager.ts` — TypeScript module.
- `components/games/_fx/canvasFx.ts` — TypeScript module.
- `components/games/css-modules.d.ts` — TypeScript module.
- `components/games/dream.AvenueOfMirrors.tsx` — React component module.
- `components/games/dream.BabylonSideScroller.tsx` — React component module.
- `components/games/dream.DefuseRitual.tsx` — React component module.
- `components/games/dream.EchoArena.tsx` — React component module.
- `components/games/dream.EnginFracture.tsx` — React component module.
- `components/games/dream.GameController.module.css` — project file.
- `components/games/dream.GameController.tsx` — React component module.
- `components/games/dream.GamesHub.tsx` — React component module.
- `components/games/dream.Glassfall.tsx` — React component module.
- `components/games/dream.Leaderboard.tsx` — React component module.
- `components/games/dream.LexiconSolitaire.tsx` — React component module.
- `components/games/dream.MadMaxiWildfall.tsx` — React component module.
- `components/games/dream.NeonDrift.tsx` — React component module.
- `components/games/dream.NiteFlyerSolarHymn.tsx` — React component module.
- `components/games/dream.NullCathedral.tsx` — React component module.
- `components/games/dream.RecordingControls.tsx` — React component module.
- `components/games/dream.SerpentSiege.tsx` — React component module.
- `components/games/dream.VoidlineGP.tsx` — React component module.
- `components/games/dream.hud.GameHUD.tsx` — React component module.
- `components/games/dream.hud.LegacyGameHUD.tsx` — React component module.
- `components/games/dream.hud.MobileGameHUD.module.css` — project file.
- `components/games/dream.hud.MobileGameHUD.tsx` — React component module.
- `components/games/dream.remote.GameRemote.tsx` — React component module.
- `components/games/dream.remote.GameRemoteSurface.tsx` — React component module.
- `components/games/dream.remote.LegacyGameRemote.tsx` — React component module.
- `components/games/madmaxi/audio.ts` — TypeScript module.
- `components/games/madmaxi/authoredZonePacks.ts` — TypeScript module.
- `components/games/madmaxi/config.ts` — TypeScript module.
- `components/games/madmaxi/dream.MadmaxiGame.tsx` — React component module.
- `components/games/madmaxi/index.ts` — TypeScript module.
- `components/games/madmaxi/levels.ts` — TypeScript module.
- `components/games/madmaxi/materials.ts` — TypeScript module.
- `components/games/madmaxi/types.ts` — TypeScript module.
- `components/games/madmaxi/vfx.ts` — TypeScript module.
- `components/home/dream.ActiveModuleSurface.tsx` — React component module.
- `components/home/dream.DaydreamPulseStrip.tsx` — React component module.
- `components/home/dream.FlagshipEnginesStrip.tsx` — React component module.
- `components/home/dream.NeuralSeamCanvas.tsx` — React component module.
- `components/home/dream.bar.GlobalDreamBar.tsx` — React component module.
- `components/home/dream.bar.PersistentDreamBar.tsx` — React component module.
- `components/home/dream.widget.DreamWidget.tsx` — React component module.
- `components/icons/sheet.ts` — TypeScript module.
- `components/idari/dream.PlatformHealth.tsx` — React component module.
- `components/landing/dream.LandingNav.tsx` — React component module.
- `components/landing/dream.LandingProductStatement.tsx` — React component module.
- `components/landing/dream.scene.UniverseField.tsx` — React component module.
- `components/marketplace/dream.MarketplaceListingCard.tsx` — React component module.
- `components/marketplace/dream.MarketplaceRequestButton.tsx` — React component module.
- `components/menus/dream.menu.DreamRadialMenu.tsx` — React component module.
- `components/menus/dream.menu.DualBottomMenu.tsx` — React component module.
- `components/menus/dream.menu.RadialMenu.tsx` — React component module.
- `components/menus/dream.menu.SystemRadialMenu.tsx` — React component module.
- `components/menus/dream.panel.MenuPanel.tsx` — React component module.
- `components/messaging/dream.BoardComposer.tsx` — React component module.
- `components/music/dream.SoundRecorder.tsx` — React component module.
- `components/onboarding/dream.OnboardingTip.tsx` — React component module.
- `components/optimizer/dream.scene.BabylonOptimizeroScene.tsx` — React component module.
- `components/overlays/dream.RootStatusScreen.tsx` — React component module.
- `components/panels/dream.panel.AlgorithmPanel.tsx` — React component module.
- `components/panels/dream.panel.AppearancePanel.tsx` — React component module.
- `components/panels/dream.panel.ConnectorsPanel.tsx` — React component module.
- `components/panels/dream.panel.ControlsPanel.tsx` — React component module.
- `components/panels/dream.panel.DataPanel.tsx` — React component module.
- `components/panels/dream.panel.FeedPanel.tsx` — React component module.
- `components/panels/dream.panel.FeedSettingsPanel.tsx` — React component module.
- `components/panels/dream.panel.HelpPanel.tsx` — React component module.
- `components/panels/dream.panel.MarketplacePanel.tsx` — React component module.
- `components/panels/dream.panel.PrivacyPanel.tsx` — React component module.
- `components/panels/dream.panel.ProfilePanel.tsx` — React component module.
- `components/panels/dream.panel.SafetyPanel.tsx` — React component module.
- `components/panels/dream.panel.SettingsPanel.tsx` — React component module.
- `components/panels/dream.panel.WidgetsPanel.tsx` — React component module.
- `components/panels/panelTypes.ts` — TypeScript module.
- `components/profile/dream.EditableAvatar.tsx` — React component module.
- `components/profile/dream.ProfileCanvas.tsx` — React component module.
- `components/profile/dream.ProfileCustomizeButton.tsx` — React component module.
- `components/profile/dream.widget.ProfileWidgetGrid.tsx` — React component module.
- `components/providers/dream.AppSurfaceShell.tsx` — React component module.
- `components/providers/dream.GodTierProvider.tsx` — React component module.
- `components/providers/dream.ThemeProvider.tsx` — React component module.
- `components/runtime/dream.DualRuntimeContainer.tsx` — React component module.
- `components/runtime/dream.RuntimeView.tsx` — React component module.
- `components/runtime/dream.shell.RuntimeShell.tsx` — React component module.
- `components/shaders/dream.LightningWing.tsx` — React component module.
- `components/shaders/dream.NeonGlow.tsx` — React component module.
- `components/shaders/dream.Refractor.tsx` — React component module.
- `components/shaders/index.ts` — TypeScript module.
- `components/shared-dream/dream.InviteFlow.tsx` — React component module.
- `components/shared-dream/dream.SharedDreamCanvas.tsx` — React component module.
- `components/shared-dream/dream.SharedDreamProvider.tsx` — React component module.
- `components/shared-dream/dream.SharedDreamRuntime.tsx` — React component module.
- `components/shared-dream/index.ts` — TypeScript module.
- `components/spatial/dream.PixiPhysicsLayer.tsx` — React component module.
- `components/spatial/dream.ProfileSpace.tsx` — React component module.
- `components/spatial/dream.shell.EnhancedSpatialShell.tsx` — React component module.
- `components/three/dream.scene.tsx` — React component module.
- `components/three/index.ts` — TypeScript module.
- `components/ui-system/CustomizeModeContext.tsx` — React component module.
- `components/ui-system/responsive.ts` — TypeScript module.
- `components/ui-system/runtimeViewport.ts` — TypeScript module.
- `components/ui-system/skin-engine.ts` — TypeScript module.
- `components/ui-system/theme-engine.ts` — TypeScript module.
- `components/ui-system/theme.ts` — TypeScript module.
- `components/ui/dream.AuthenticatedPageHeader.tsx` — React component module.
- `components/ui/dream.DreamWord.tsx` — React component module.
- `components/ui/dream.IconList.tsx` — React component module.
- `components/ui/dream.InfinityIcon.tsx` — React component module.
- `components/ui/dream.PlatformBadge.tsx` — React component module.
- `components/ui/dream.SheetIcon.tsx` — React component module.
- `components/ui/dream.SocialShareSheet.tsx` — React component module.
- `components/universal-editor/dream.UniversalEditor.tsx` — React component module.
- `components/universal-editor/dream.UniversalEditorWrapper.tsx` — React component module.
- `components/universal-editor/index.ts` — TypeScript module.
- `components/universal-editor/useTapHoldMove.ts` — TypeScript module.
- `components/universe/dream.node-cluster.tsx` — React component module.
- `components/universe/dream.shell.universe-shell.tsx` — React component module.
- `components/universe/dream.universe-card.tsx` — React component module.
- `components/universe/index.ts` — TypeScript module.
- `components/warp/dream.WarpCanvas.tsx` — React component module.
- `components/webgpu/dream.WebGPUShowcase.tsx` — React component module.
- `components/webgpu/neuralPostProcess.ts` — TypeScript module.
- `components/webgpu/renderer.ts` — TypeScript module.
- `components/webgpu/shaders.ts` — TypeScript module.
- `components/widgets/dream.AddDreamCTA.tsx` — React component module.
- `components/widgets/dream.ConfigureSheet.tsx` — React component module.
- `components/widgets/dream.EditModeBanner.tsx` — React component module.
- `components/widgets/dream.EditModeProvider.tsx` — React component module.
- `components/widgets/dream.widget.PlayMediaWidget.tsx` — React component module.
- `components/widgets/dream.widget.UniversalWidget.tsx` — React component module.
- `components/widgets/dream.widget.WidgetCard.tsx` — React component module.
- `components/widgets/dream.widget.WidgetLibrary.tsx` — React component module.
- `components/widgets/dream.widget.WidgetPlaceholder.tsx` — React component module.
- `components/widgets/dream.widget.WidgetShell.tsx` — React component module.
- `components/widgets/dream.widget.WidgetSurface.tsx` — React component module.
- `hooks/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `hooks/use-spatial.ts` — TypeScript module.
- `hooks/useAccount.ts` — TypeScript module.
- `hooks/useConnectorInstallFlow.ts` — TypeScript module.
- `hooks/useDreamLayout.ts` — TypeScript module.
- `hooks/useHideOnScroll.ts` — TypeScript module.
- `hooks/useMotionTilt.ts` — TypeScript module.
- `hooks/useResponsive.ts` — TypeScript module.
- `hooks/useSharedDream.ts` — TypeScript module.
- `hooks/useTap.ts` — TypeScript module.
- `hooks/useTapHoldMove.ts` — TypeScript module.
- `hooks/useTick.ts` — TypeScript module.
- `hooks/useViewCounter.ts` — TypeScript module.
- `styles/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `styles/dream-shell.css` — project file.
- `styles/globals.css` — project file.
- `styles/home-dream.css` — project file.
- `styles/theme.css` — project file.
- `styles/view-transitions.css` — project file.

</details>

## Custom Engins
Custom Engins is a UI subsystem composed of React components and presentation logic. It exposes useAIDirector, useAgentSession, useArtifactSlot as React hooks for consumption by sibling subsystems. Core abstractions are encapsulated in H265Encoder, GameCapture, GameEnginConfigError. It depends on Backend, System, Core & CoreSurfaces, Dreamr — Human Media, Dreams (Widgets / Windows / Surfaces).
### Responsibilities
- Renders CodeDreamIDE, DiffViewer, JourneyTrail, LabDreamIDE, NGNEngin, OpenDaydreamSideBButton, +29 more
- Core abstractions: H265Encoder, GameCapture, GameEnginConfigError, GameEnginCore, RealtimeCaptioner
- Runtime orchestration and engin lifecycle management
- AI model integration and inference routing
- Authentication, session, and access control
- Feed ranking, algorithm execution, and content scoring
### Key Modules
- `BrandDaydream`
- `CodeDreamIDE`
- `CompingPanel`
- `DaydreamShell`
- `DiffViewer`
- `DreamConstellationMap`
- `JourneyTrail`
- `LabDreamIDE`
- `MultitrackArrangementPanel`
- `NGNEngin`
- `OpenDaydreamSideBButton`
- `StandaloneEnginSurface`
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreamr — Human Media**
- Depends on **Dreams (Widgets / Windows / Surfaces)**
- Depends on **DreamSpace**
- Depends on **Dual Runtimes**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Integrates with the Dual Runtime layer for execution orchestration
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreamr — Human Media
- Depends on Dreams (Widgets / Windows / Surfaces)
- Depends on DreamSpace
### Public Surfaces
**Components:**
`AgentPanel`, `ArtifactSlot`, `AssetViewport`, `BrandDaydream`, `BrandDaydreamPage`, `BrandingEngin`, `CodeDaydreamPage`, `CodeDreamIDE`, `CodeEngin`, `CodeEnginOrchestrator`, +25 more
### Notable Abstractions
- `StandaloneEnginName` — type
- `DaydreamWidget` — type
- `UseDaydreamPersistenceOptions` — interface
- `UseDaydreamPersistenceReturn` — interface
- `DaydreamSide` — type
- `DaydreamStatePayload` — type
- `UseDaydreamStateOptions` — interface
- `UseDaydreamStateReturn` — interface
- `ParseError` — interface
- `ParsedSymbol` — interface
- `ParseResult` — interface
- `AgentMessage` — interface
- `useAIDirector` — hook
- `useAgentSession` — hook
- `useArtifactSlot` — hook
- `useBrandEnginRuntime` — hook
- `useCodeEnginRuntime` — hook
- `useContentEnginRuntime` — hook
- `useDaydreamPersistence` — hook
- `useDaydreamState` — hook
### Capabilities
- Exposes useAIDirector, useAgentSession, useArtifactSlot, useBrandEnginRuntime, useCodeEnginRuntime, useContentEnginRuntime as composable React hooks
- Public contract surface: UseDaydreamPersistenceOptions, UseDaydreamPersistenceReturn, UseDaydreamStateOptions, UseDaydreamStateReturn, ParseError
- Shared type vocabulary: StandaloneEnginName, DaydreamWidget, DaydreamSide, DaydreamStatePayload, LogoPath
- Utility functions: parseCode, AgentPanel, AutoOpenGameEngin, getRandomLogo, resetLogoCache, matchCodeVocabulary
#### File Structure
```text
├── components
│   └── daydream
│       ├── dream.CodeDreamIDE.tsx
│       ├── dream.DiffViewer.tsx
│       ├── dream.JourneyTrail.tsx
│       ├── dream.LabDreamIDE.tsx
│       ├── dream.NGNEngin.tsx
│       ├── dream.OpenDaydreamSideBButton.tsx
│       ├── dream.StandaloneEnginSurface.tsx
│       ├── dream.constellationmap.tsx
│       ├── dream.shell.DaydreamShell.tsx
│       ├── dreamsurface.daydream.BrandDaydream.tsx
│       └── starmaker
│           ├── dream.panel.CompingPanel.tsx
│           ├── dream.panel.MultitrackArrangementPanel.tsx
│           ├── dream.panel.PianoRollPanel.tsx
│           └── dream.panel.SessionViewPanel.tsx
├── daydreams
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── brand
│   │   └── page.tsx
│   ├── code
│   │   └── page.tsx
│   ├── create
│   │   └── page.tsx
│   ├── games
│   │   └── page.tsx
│   ├── lab
│   │   └── page.tsx
│   ├── music
│   │   └── page.tsx
│   └── shared
│       ├── useDaydreamPersistence.ts
│       └── useDaydreamState.ts
└── engins
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── CodeEngin
    │   ├── core
    │   │   └── parser.ts
    │   ├── modules
    │   │   └── ai-co-pilot
    │   │       ├── dream.panel.AgentPanel.tsx
    │   │       ├── index.ts
    │   │       └── useAgentSession.ts
    │   └── orchestrator
    │       └── dream.index.tsx
    ├── autoopen
    │   └── dream.AutoOpenGameEngin.tsx
    ├── brandingengin
    │   └── identity
    │       └── logos.ts
    ├── codeengin
    │   ├── ai
    │   │   └── drEamsCodeAssist.ts
    │   ├── auth.ts
    │   ├── diagnostics.ts
    │   ├── diff
    │   │   ├── aiEditEngine.ts
    │   │   └── diffUtils.ts
    │   ├── git.ts
    │   ├── pathSafety.ts
    │   ├── projectGraph.ts
    │   ├── runner.ts
    │   ├── search.ts
    │   ├── types.ts
    │   └── workspaceStore.ts
    ├── contentengin
    │   ├── AssetViewport.tsx
    │   ├── ImplicitAssetWorkspace.tsx
    │   ├── assetTypes.ts
    │   ├── assets
    │   │   ├── assetOptimizer.ts
    │   │   └── indexedDBStore.ts
    │   ├── builders
    │   │   ├── geometryBuilder.ts
    │   │   ├── meshBuilder.ts
    │   │   ├── modifiers.ts
    │   │   ├── primitiveBuilder.ts
    │   │   ├── textureBuilder.ts
    │   │   └── uvGenerator.ts
    │   ├── cli.ts
    │   ├── composite
    │   │   ├── compositor.ts
    │   │   ├── fxSimulation.ts
    │   │   ├── matchmover.ts
    │   │   ├── motionCapture.ts
    │   │   └── rotoscope.ts
    │   ├── content
    │   │   ├── generativeFill.ts
    │   │   ├── publishIntent.ts
    │   │   ├── seoScorer.ts
    │   │   ├── transcriptEditor.ts
    │   │   └── voiceClone.ts
    │   ├── grammars
    │   │   ├── animalGrammar.ts
    │   │   ├── bicycleGrammar.ts
    │   │   ├── bridgeGrammar.ts
    │   │   ├── buildingGrammar.ts
    │   │   ├── creatureGrammar.ts
    │   │   ├── humanoidGrammar.ts
    │   │   ├── propGrammar.ts
    │   │   ├── roadGrammar.ts
    │   │   ├── shared.ts
    │   │   ├── terrainGrammar.ts
    │   │   ├── treeGrammar.ts
    │   │   ├── vehicleGrammar.ts
    │   │   └── waterGrammar.ts
    │   ├── materials
    │   │   ├── materialTypes.ts
    │   │   ├── paletteExtractor.ts
    │   │   └── proceduralMaterials.ts
    │   ├── media
    │   │   ├── h265-encoder.ts
    │   │   ├── ledger.ts
    │   │   └── postMedia.ts
    │   ├── photo
    │   │   ├── colorCluster.ts
    │   │   ├── edgeDetector.ts
    │   │   ├── imageAnalyzer.ts
    │   │   ├── photoToRecipe.ts
… (230 more files)
```
<details><summary>Custom Engins file index (350 files)</summary>

- `components/daydream/dream.CodeDreamIDE.tsx` — React component module.
- `components/daydream/dream.DiffViewer.tsx` — React component module.
- `components/daydream/dream.JourneyTrail.tsx` — React component module.
- `components/daydream/dream.LabDreamIDE.tsx` — React component module.
- `components/daydream/dream.NGNEngin.tsx` — React component module.
- `components/daydream/dream.OpenDaydreamSideBButton.tsx` — React component module.
- `components/daydream/dream.StandaloneEnginSurface.tsx` — React component module.
- `components/daydream/dream.constellationmap.tsx` — React component module.
- `components/daydream/dream.shell.DaydreamShell.tsx` — React component module.
- `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` — React component module.
- `components/daydream/starmaker/dream.panel.CompingPanel.tsx` — React component module.
- `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx` — React component module.
- `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx` — React component module.
- `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` — React component module.
- `daydreams/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `daydreams/brand/page.tsx` — route page.
- `daydreams/code/page.tsx` — route page.
- `daydreams/create/page.tsx` — route page.
- `daydreams/games/page.tsx` — route page.
- `daydreams/lab/page.tsx` — route page.
- `daydreams/music/page.tsx` — route page.
- `daydreams/shared/useDaydreamPersistence.ts` — TypeScript module.
- `daydreams/shared/useDaydreamState.ts` — TypeScript module.
- `engins/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `engins/CodeEngin/core/parser.ts` — TypeScript module.
- `engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel.tsx` — React component module.
- `engins/CodeEngin/modules/ai-co-pilot/index.ts` — TypeScript module.
- `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts` — TypeScript module.
- `engins/CodeEngin/orchestrator/dream.index.tsx` — React component module.
- `engins/autoopen/dream.AutoOpenGameEngin.tsx` — React component module.
- `engins/brandingengin/identity/logos.ts` — TypeScript module.
- `engins/codeengin/ai/drEamsCodeAssist.ts` — TypeScript module.
- `engins/codeengin/auth.ts` — TypeScript module.
- `engins/codeengin/diagnostics.ts` — TypeScript module.
- `engins/codeengin/diff/aiEditEngine.ts` — TypeScript module.
- `engins/codeengin/diff/diffUtils.ts` — TypeScript module.
- `engins/codeengin/git.ts` — TypeScript module.
- `engins/codeengin/pathSafety.ts` — TypeScript module.
- `engins/codeengin/projectGraph.ts` — TypeScript module.
- `engins/codeengin/runner.ts` — TypeScript module.
- `engins/codeengin/search.ts` — TypeScript module.
- `engins/codeengin/types.ts` — TypeScript module.
- `engins/codeengin/workspaceStore.ts` — TypeScript module.
- `engins/contentengin/AssetViewport.tsx` — React component module.
- `engins/contentengin/ImplicitAssetWorkspace.tsx` — React component module.
- `engins/contentengin/assetTypes.ts` — TypeScript module.
- `engins/contentengin/assets/assetOptimizer.ts` — TypeScript module.
- `engins/contentengin/assets/indexedDBStore.ts` — TypeScript module.
- `engins/contentengin/builders/geometryBuilder.ts` — TypeScript module.
- `engins/contentengin/builders/meshBuilder.ts` — TypeScript module.
- `engins/contentengin/builders/modifiers.ts` — TypeScript module.
- `engins/contentengin/builders/primitiveBuilder.ts` — TypeScript module.
- `engins/contentengin/builders/textureBuilder.ts` — TypeScript module.
- `engins/contentengin/builders/uvGenerator.ts` — TypeScript module.
- `engins/contentengin/cli.ts` — TypeScript module.
- `engins/contentengin/composite/compositor.ts` — TypeScript module.
- `engins/contentengin/composite/fxSimulation.ts` — TypeScript module.
- `engins/contentengin/composite/matchmover.ts` — TypeScript module.
- `engins/contentengin/composite/motionCapture.ts` — TypeScript module.
- `engins/contentengin/composite/rotoscope.ts` — TypeScript module.
- `engins/contentengin/content/generativeFill.ts` — TypeScript module.
- `engins/contentengin/content/publishIntent.ts` — TypeScript module.
- `engins/contentengin/content/seoScorer.ts` — TypeScript module.
- `engins/contentengin/content/transcriptEditor.ts` — TypeScript module.
- `engins/contentengin/content/voiceClone.ts` — TypeScript module.
- `engins/contentengin/grammars/animalGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/bicycleGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/bridgeGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/buildingGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/creatureGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/humanoidGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/propGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/roadGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/shared.ts` — TypeScript module.
- `engins/contentengin/grammars/terrainGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/treeGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/vehicleGrammar.ts` — TypeScript module.
- `engins/contentengin/grammars/waterGrammar.ts` — TypeScript module.
- `engins/contentengin/materials/materialTypes.ts` — TypeScript module.
- `engins/contentengin/materials/paletteExtractor.ts` — TypeScript module.
- `engins/contentengin/materials/proceduralMaterials.ts` — TypeScript module.
- `engins/contentengin/media/h265-encoder.ts` — TypeScript module.
- `engins/contentengin/media/ledger.ts` — TypeScript module.
- `engins/contentengin/media/postMedia.ts` — TypeScript module.
- `engins/contentengin/photo/colorCluster.ts` — TypeScript module.
- `engins/contentengin/photo/edgeDetector.ts` — TypeScript module.
- `engins/contentengin/photo/imageAnalyzer.ts` — TypeScript module.
- `engins/contentengin/photo/photoToRecipe.ts` — TypeScript module.
- `engins/contentengin/photo/pngDecoder.ts` — TypeScript module.
- `engins/contentengin/photo/regionDetector.ts` — TypeScript module.
- `engins/contentengin/pipeline/build.ts` — TypeScript module.
- `engins/contentengin/pipeline/bundle.ts` — TypeScript module.
- `engins/contentengin/pipeline/exportGlb.ts` — TypeScript module.
- `engins/contentengin/pipeline/generateCollision.ts` — TypeScript module.
- `engins/contentengin/pipeline/generateLods.ts` — TypeScript module.
- `engins/contentengin/pipeline/paths.ts` — TypeScript module.
- `engins/contentengin/pipeline/validate.ts` — TypeScript module.
- `engins/contentengin/pipeline/writeManifest.ts` — TypeScript module.
- `engins/contentengin/recipes/recipeResolver.ts` — TypeScript module.
- `engins/contentengin/recipes/recipeTypes.ts` — TypeScript module.
- `engins/contentengin/recipes/seededRandom.ts` — TypeScript module.
- `engins/contentengin/rigging/fitArmature.ts` — TypeScript module.
- `engins/contentengin/rigging/index.ts` — TypeScript module.
- `engins/contentengin/rigging/landmarks.ts` — TypeScript module.
- `engins/contentengin/rigging/rigTypes.ts` — TypeScript module.
- `engins/contentengin/rigging/rigValidator.ts` — TypeScript module.
- `engins/contentengin/rigging/templates/bird_basic.json` — project file.
- `engins/contentengin/rigging/templates/fish_basic.json` — project file.
- `engins/contentengin/rigging/templates/humanoid_basic.json` — project file.
- `engins/contentengin/rigging/templates/quadruped_basic.json` — project file.
- `engins/contentengin/rigging/templates/vehicle_mechanical.json` — project file.
- `engins/contentengin/shaders/shaderRegistry.ts` — TypeScript module.
- `engins/contentengin/shaders/shaderTypes.ts` — TypeScript module.
- `engins/contentengin/useImplicitAssetWorkspace.ts` — TypeScript module.
- `engins/dream.ForgeEngin.tsx` — React component module.
- `engins/dream.QuantumCircuitCanvas.tsx` — React component module.
- `engins/engin.BrandingEngin.tsx` — React component module.
- `engins/engin.CodeEngin.tsx` — React component module.
- `engins/engin.ContentEngin.tsx` — React component module.
- `engins/engin.GameEngin.tsx` — React component module.
- `engins/engin.LabEngin.tsx` — React component module.
- `engins/engin.StarMakerEngin.tsx` — React component module.
- `engins/forgeengin/componentInventory.ts` — TypeScript module.
- `engins/forgeengin/enginpipe/artifact/manifest.ts` — TypeScript module.
- `engins/forgeengin/enginpipe/index.ts` — TypeScript module.
- `engins/forgeengin/enginpipe/quality/tiers.ts` — TypeScript module.
- `engins/forgeengin/enginpipe/shell/ArtifactSlot.tsx` — React component module.
- `engins/forgeengin/enginpipe/telemetry/client.ts` — TypeScript module.
- `engins/forgeengin/enginpipe/telemetry/events.ts` — TypeScript module.
- `engins/forgeengin/forge-ngn/assembly.ts` — TypeScript module.
- `engins/forgeengin/forge-ngn/index.ts` — TypeScript module.
- `engins/forgeengin/forge-ngn/piece-registry.ts` — TypeScript module.
- `engins/forgeengin/forge/engineForge.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeBuild.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeIntelligence.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeMomentum.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeNexus.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeRegistry.ts` — TypeScript module.
- `engins/forgeengin/forge/forgeRituals.ts` — TypeScript module.
- `engins/forgeengin/forge/useForgeActivity.ts` — TypeScript module.
- `engins/forgeengin/forge/useForgeBuild.ts` — TypeScript module.
- `engins/gameengin/GameEnginCore.ts` — TypeScript module.
- `engins/gameengin/GameRuntime.tsx` — React component module.
- `engins/gameengin/accessibility-ai.ts` — TypeScript module.
- `engins/gameengin/ai-director.ts` — TypeScript module.
- `engins/gameengin/ai-npcs.ts` — TypeScript module.
- `engins/gameengin/assets/BundleCache.ts` — TypeScript module.
- `engins/gameengin/assets/BundleManifest.ts` — TypeScript module.
- `engins/gameengin/backendNegotiator.ts` — TypeScript module.
- `engins/gameengin/brain-reader.ts` — TypeScript module.
- `engins/gameengin/brain/README.md` — documentation.
- `engins/gameengin/brain/active-projects.json` — project file.
- `engins/gameengin/brain/asset-registry/README.md` — documentation.
- `engins/gameengin/brain/build-history/README.md` — documentation.
- `engins/gameengin/brain/character-voices/mad-maxi.json` — project file.
- `engins/gameengin/brain/composition-principles/leading-lines-landmark.json` — project file.
- `engins/gameengin/brain/composition-principles/parallax-layers.json` — project file.
- `engins/gameengin/brain/concept-library/README.md` — documentation.
- `engins/gameengin/brain/concept-library/neon-courier.json` — project file.
- `engins/gameengin/brain/concept-patterns/README.md` — documentation.
- `engins/gameengin/brain/concept-patterns/protagonists/reluctant-courier.json` — project file.
- `engins/gameengin/brain/concept-patterns/scope-formulas/one-day-runner.json` — project file.
- `engins/gameengin/brain/concept-patterns/settings/neon-rain-megacity.json` — project file.
- `engins/gameengin/brain/crash-reports/README.md` — documentation.
- `engins/gameengin/brain/dialogue-patterns/callback-anchor.json` — project file.
- `engins/gameengin/brain/dialogue-patterns/implied-subject.json` — project file.
- `engins/gameengin/brain/dialogue-patterns/sentence-fragment-rhythm.json` — project file.
- `engins/gameengin/brain/emotional-tones/determined.json` — project file.
- `engins/gameengin/brain/emotional-tones/fierce.json` — project file.
- `engins/gameengin/brain/emotional-tones/hopeful.json` — project file.
- `engins/gameengin/brain/emotional-tones/reflective.json` — project file.
- `engins/gameengin/brain/emotional-tones/weary.json` — project file.
- `engins/gameengin/brain/fun-heuristics/meta-progression.json` — project file.
- `engins/gameengin/brain/fun-heuristics/moment-to-moment.json` — project file.
- `engins/gameengin/brain/fun-heuristics/session-loop.json` — project file.
- `engins/gameengin/brain/genre-dna/action-rpg.json` — project file.
- `engins/gameengin/brain/genre-dna/episodic.json` — project file.
- `engins/gameengin/brain/genre-dna/live-service.json` — project file.
- `engins/gameengin/brain/genre-dna/metroidvania.json` — project file.
- `engins/gameengin/brain/genre-dna/open-world.json` — project file.
- `engins/gameengin/brain/genre-dna/platformer.json` — project file.
- `engins/gameengin/brain/genre-dna/puzzle.json` — project file.
- `engins/gameengin/brain/genre-dna/racing.json` — project file.
- `engins/gameengin/brain/genre-dna/roguelike.json` — project file.
- `engins/gameengin/brain/genre-dna/sandbox.json` — project file.
- `engins/gameengin/brain/genre-dna/template.json` — project file.
- `engins/gameengin/brain/inspiration-corpus/celeste.json` — project file.
- `engins/gameengin/brain/inspiration-corpus/dead-cells.json` — project file.
- `engins/gameengin/brain/inspiration-corpus/hades.json` — project file.
- `engins/gameengin/brain/inspiration-corpus/hollow-knight.json` — project file.
- `engins/gameengin/brain/inspiration-corpus/outer-wilds.json` — project file.
- `engins/gameengin/brain/material-recipes/neon-glass-tube.json` — project file.
- `engins/gameengin/brain/material-recipes/rusted-iron.json` — project file.
- `engins/gameengin/brain/material-recipes/sun-bleached-sandstone.json` — project file.
- `engins/gameengin/brain/mechanic-library/camera/look-ahead.json` — project file.
- `engins/gameengin/brain/mechanic-library/camera/screen-shake.json` — project file.
- `engins/gameengin/brain/mechanic-library/camera/smooth-follow.json` — project file.
- `engins/gameengin/brain/mechanic-library/combat/combo.json` — project file.
- `engins/gameengin/brain/mechanic-library/combat/hit-stop.json` — project file.
- `engins/gameengin/brain/mechanic-library/combat/parry.json` — project file.
- `engins/gameengin/brain/mechanic-library/combat/ranged.json` — project file.
- `engins/gameengin/brain/mechanic-library/movement/coyote-time.json` — project file.
- `engins/gameengin/brain/mechanic-library/movement/dash.json` — project file.
- `engins/gameengin/brain/mechanic-library/movement/double-jump.json` — project file.
- `engins/gameengin/brain/mechanic-library/movement/grapple.json` — project file.
- `engins/gameengin/brain/mechanic-library/movement/wall-slide.json` — project file.
- `engins/gameengin/brain/mechanic-library/progression/metroidvania-gating.json` — project file.
- `engins/gameengin/brain/mechanic-library/progression/roguelike-perks.json` — project file.
- `engins/gameengin/brain/mechanic-library/progression/skill-tree.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/ability-gating.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/meta-progression.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/procedural-generation.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/run-persistence.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/season-pass.json` — project file.
- `engins/gameengin/brain/mechanic-library/structural/world-streaming.json` — project file.
- `engins/gameengin/brain/narrative-pacing/default.json` — project file.
- `engins/gameengin/brain/originality-registry/by-cartridge/mad-maxi.json` — project file.
- `engins/gameengin/brain/originality-registry/signatures.json` — project file.
- `engins/gameengin/brain/principles/emotional-core.md` — documentation.
- `engins/gameengin/brain/principles/feedback.md` — documentation.
- `engins/gameengin/brain/principles/mastery.md` — documentation.
- `engins/gameengin/brain/principles/progression.md` — documentation.
- `engins/gameengin/brain/principles/responsiveness.md` — documentation.
- `engins/gameengin/brain/principles/risk-reward.md` — documentation.
- `engins/gameengin/brain/progression-state/README.md` — documentation.
- `engins/gameengin/brain/rd-sessions/README.md` — documentation.
- `engins/gameengin/brain/technique-library/lighting/three-point-mood.json` — project file.
- `engins/gameengin/brain/technique-library/modeling/edge-flow.json` — project file.
- `engins/gameengin/brain/technique-library/modeling/silhouette-first.json` — project file.
- `engins/gameengin/brain/technique-library/optimization/texture-atlasing.json` — project file.
- `engins/gameengin/brain/upgrade-history/README.md` — documentation.
- `engins/gameengin/brain/upgrade-history/prioritization-rules.json` — project file.
- `engins/gameengin/brain/visual-bible/characters/mad-maxi.md` — documentation.
- `engins/gameengin/brain/visual-bible/environments/neon-wasteland.md` — documentation.
- `engins/gameengin/brain/work-queue/README.md` — documentation.
- `engins/gameengin/cartridge-manifest.ts` — TypeScript module.
- `engins/gameengin/cartridge.ts` — TypeScript module.
- `engins/gameengin/cartridgeLoader.ts` — TypeScript module.
- `engins/gameengin/cartridges/achievementEngine.ts` — TypeScript module.
- `engins/gameengin/cartridges/apiStubs.ts` — TypeScript module.
- `engins/gameengin/cartridges/index.ts` — TypeScript module.
- `engins/gameengin/cartridges/loaders.ts` — TypeScript module.
- `engins/gameengin/cartridges/manifest.ts` — TypeScript module.
- `engins/gameengin/cartridges/reactCartridge.ts` — TypeScript module.
- `engins/gameengin/cartridges/saveState.ts` — TypeScript module.
- `engins/gameengin/cloud-compute.ts` — TypeScript module.
- `engins/gameengin/config/demoGameConfig.ts` — TypeScript module.
- `engins/gameengin/controls/control-mappings.ts` — TypeScript module.
- `engins/gameengin/core.ts` — TypeScript module.
- `engins/gameengin/dream-engine.ts` — TypeScript module.
- `engins/gameengin/dreamr-loader.ts` — TypeScript module.
- `engins/gameengin/executionWiring.ts` — TypeScript module.
- `engins/gameengin/gameEnginRuntime.ts` — TypeScript module.
- `engins/gameengin/games/DualSenseManager.ts` — TypeScript module.
- `engins/gameengin/games/avatar.ts` — TypeScript module.
- `engins/gameengin/games/catalog.ts` — TypeScript module.
- `engins/gameengin/games/gameControllerButtons.ts` — TypeScript module.
- `engins/gameengin/games/gameControllerLeft.ts` — TypeScript module.
- `engins/gameengin/games/gameControllerRight.ts` — TypeScript module.
- `engins/gameengin/games/hooks.ts` — TypeScript module.
- `engins/gameengin/games/library-state.ts` — TypeScript module.
- `engins/gameengin/games/lucid-avenue-world.ts` — TypeScript module.
- `engins/gameengin/games/madmaxi-wildfall-world.ts` — TypeScript module.
- `engins/gameengin/games/mobileControls.ts` — TypeScript module.
- `engins/gameengin/games/navigation.ts` — TypeScript module.
- `engins/gameengin/games/performance-baseline.ts` — TypeScript module.
- `engins/gameengin/games/quality-plan.ts` — TypeScript module.
- `engins/gameengin/games/useAIDirector.ts` — TypeScript module.
- `engins/gameengin/games/useGameInputKeyboardBridge.ts` — TypeScript module.
- `engins/gameengin/games/useGamepad.ts` — TypeScript module.
- `engins/gameengin/games/useImmersiveGameLayout.ts` — TypeScript module.
- `engins/gameengin/games/useRemoteChannel.ts` — TypeScript module.
- `engins/gameengin/generative-audio.ts` — TypeScript module.
- `engins/gameengin/index.ts` — TypeScript module.
- `engins/gameengin/input/InputRouter.ts` — TypeScript module.
- `engins/gameengin/input/index.ts` — TypeScript module.
- `engins/gameengin/launcher.ts` — TypeScript module.
- `engins/gameengin/neural-render.ts` — TypeScript module.
- `engins/gameengin/path-tracing.ts` — TypeScript module.
- `engins/gameengin/platform.ts` — TypeScript module.
- `engins/gameengin/post-fx.ts` — TypeScript module.
- `engins/gameengin/power-systems.ts` — TypeScript module.
- `engins/gameengin/predictive-stream.ts` — TypeScript module.
- `engins/gameengin/procgen.ts` — TypeScript module.
- `engins/gameengin/registerCartridges.ts` — TypeScript module.
- `engins/gameengin/remote/comboMachine.ts` — TypeScript module.
- `engins/gameengin/remote/index.ts` — TypeScript module.
- `engins/gameengin/remote/layout.ts` — TypeScript module.
- `engins/gameengin/remote/moves.ts` — TypeScript module.
- `engins/gameengin/remote/sprintDetector.ts` — TypeScript module.
- `engins/gameengin/render/ShaderRegistry.ts` — TypeScript module.
- `engins/gameengin/runtime/FrameBudget.ts` — TypeScript module.
- `engins/gameengin/runtime/FrameClock.ts` — TypeScript module.
- `engins/gameengin/runtime/RuntimeQuality.ts` — TypeScript module.
- `engins/gameengin/runtime/index.ts` — TypeScript module.
- `engins/gameengin/systems/ai.ts` — TypeScript module.
- `engins/gameengin/systems/animation.ts` — TypeScript module.
- `engins/gameengin/systems/assets.ts` — TypeScript module.
- `engins/gameengin/systems/index.ts` — TypeScript module.
- `engins/gameengin/systems/lod.ts` — TypeScript module.
- `engins/gameengin/systems/network.ts` — TypeScript module.
- `engins/gameengin/systems/physics.ts` — TypeScript module.
- `engins/gameengin/systems/pooling.ts` — TypeScript module.
- `engins/gameengin/systems/rendering.ts` — TypeScript module.
- `engins/gameengin/systems/spatial.ts` — TypeScript module.
- `engins/gameengin/systems/world.ts` — TypeScript module.
- `engins/gameengin/unifiedLoop.ts` — TypeScript module.
- `engins/gameengin/useUnifiedLoop.ts` — TypeScript module.
- `engins/gameengin/webgpu-runtime-shell.ts` — TypeScript module.
- `engins/gameengin/world-crdt.ts` — TypeScript module.
- `engins/gameengin/xr.ts` — TypeScript module.
- `engins/isosurfaceAssetPipeline.ts` — TypeScript module.
- `engins/isosurfaceDualContouring.ts` — TypeScript module.
- `engins/labengin/implicitSurface.ts` — TypeScript module.
- `engins/portfolio/dream.PortfolioEngin.tsx` — React component module.
- `engins/rulesets/brand/brandEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/brand/useBrandEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/code/codeEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/code/index.ts` — TypeScript module.
- `engins/rulesets/code/useCodeEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/content/contentEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/content/useContentEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/dreams/index.ts` — TypeScript module.
- `engins/rulesets/forge/index.ts` — TypeScript module.
- `engins/rulesets/game/declarative.ts` — TypeScript module.
- `engins/rulesets/game/gameEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/game/index.ts` — TypeScript module.
- `engins/rulesets/game/useGameEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/homedream/dream.homedream.constants.ts` — TypeScript module.
- `engins/rulesets/homedream/dream.homedream.physics.ts` — TypeScript module.
- `engins/rulesets/homedream/dream.homedream.transforms.ts` — TypeScript module.
- `engins/rulesets/homedream/index.ts` — TypeScript module.
- `engins/rulesets/lab/index.ts` — TypeScript module.
- `engins/rulesets/lab/labEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/lab/useLabEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/music/index.ts` — TypeScript module.
- `engins/rulesets/music/starMakerEnginRuleSet.ts` — TypeScript module.
- `engins/rulesets/music/useStarMakerEnginRuntime.ts` — TypeScript module.
- `engins/rulesets/useEnginWorkflow.ts` — TypeScript module.
- `engins/rulesets/workflowEngine.ts` — TypeScript module.
- `engins/starmakerengin/audio-fingerprint/fingerprint.ts` — TypeScript module.
- `engins/starmakerengin/audio-fingerprint/index.ts` — TypeScript module.
- `engins/starmakerengin/audio-fingerprint/peak-map.ts` — TypeScript module.
- `engins/starmakerengin/audio-fingerprint/stem-extractor.ts` — TypeScript module.
- `engins/starmakerengin/audioFingerprint.ts` — TypeScript module.
- `engins/starmakerengin/music/presets.ts` — TypeScript module.
- `engins/starmakerengin/music/starmaker.ts` — TypeScript module.
- `engins/starmakerengin/music/starmakerArrangement.ts` — TypeScript module.
- `engins/starmakerengin/music/starmakerDaw.ts` — TypeScript module.
- `engins/starmakerengin/music/wasmAudioBridge.ts` — TypeScript module.

</details>

## Full Website Customizability
Full Website Customizability is a full-stack subsystem that owns both React surfaces and API handlers. It depends on Backend, System, Core & CoreSurfaces, dr-eams, Dreams (Widgets / Windows / Surfaces).
### Responsibilities
- User-facing surfaces: /settings, /settings/account, /settings/algorithm, /settings/appearance, /settings/controls, +9 more
- API surface: /api/settings
- Renders GET, POST, GET, POST, GET, POST, +29 more
- Feed ranking, algorithm execution, and content scoring
- Theming, design tokens, and visual customisation
### Key Modules
- `AccountSettingsPage`
- `AlgorithmPage`
- `AppearanceSettingsPage`
- `ControlsClient`
- `ControlsSettingsPage`
- `DangerZoneActions`
- `DataClient`
- `DataSettingsPage`
- `DreamsLayoutEditor`
- `GET`
- `POST`
- `PositionIndicatorToggle`
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **dr-eams**
- Depends on **Dreams (Widgets / Windows / Surfaces)**
- Depends on **User-Facing Modularity**
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on dr-eams
- Depends on Dreams (Widgets / Windows / Surfaces)
- Depends on User-Facing Modularity
### Public Surfaces
**Routes:**
- `/settings`
- `/settings/account`
- `/settings/algorithm`
- `/settings/appearance`
- `/settings/controls`
- `/settings/data`
- `/settings/dreams`
- `/settings/feed`
- `/settings/help`
- `/settings/notifications`
- `/settings/privacy`
- `/settings/safety`
- `/settings/security`
- `/settings/widgets`
**API Endpoints:**
- `/api/settings/appearance` `[GET, POST]`
- `/api/settings/feed` `[GET, POST]`
- `/api/settings/notifications` `[GET, POST]`
- `/api/settings/privacy` `[GET, POST]`
**Components:**
`AccountSettingsPage`, `AlgorithmPage`, `AppearanceSettingsPage`, `ColorPanel`, `ControlsClient`, `ControlsSettingsPage`, `CustomizeModeBar`, `CustomizeToolbar`, `DangerZoneActions`, `DataClient`, +19 more
### Capabilities
- Utility functions: FeedSettingsRedirect
- Read endpoints for data retrieval
- Write endpoints for mutations
#### File Structure
```text
├── app
│   ├── api
│   │   └── settings
│   │       ├── appearance
│   │       │   └── route.ts
│   │       ├── feed
│   │       │   └── route.ts
│   │       ├── notifications
│   │       │   └── route.ts
│   │       └── privacy
│   │           └── route.ts
│   └── settings
│       ├── account
│       │   ├── dream.DangerZoneActions.tsx
│       │   └── page.tsx
│       ├── algorithm
│       │   └── page.tsx
│       ├── appearance
│       │   └── page.tsx
│       ├── controls
│       │   ├── dream.ControlsClient.tsx
│       │   ├── dream.PositionIndicatorToggle.tsx
│       │   └── page.tsx
│       ├── data
│       │   ├── dream.DataClient.tsx
│       │   └── page.tsx
│       ├── dreams
│       │   ├── dreams-layout-editor.tsx
│       │   └── page.tsx
│       ├── feed
│       │   └── page.tsx
│       ├── help
│       │   └── page.tsx
│       ├── notifications
│       │   └── page.tsx
│       ├── page.tsx
│       ├── privacy
│       │   ├── dream.PrivacyClient.tsx
│       │   └── page.tsx
│       ├── safety
│       │   └── page.tsx
│       ├── security
│       │   └── page.tsx
│       └── widgets
│           └── page.tsx
├── components
│   └── customize
│       ├── dream.GlobalCustomizeUI.tsx
│       ├── dream.bar.CustomizeModeBar.tsx
│       ├── dream.bar.CustomizeToolbar.tsx
│       └── panels
│           ├── dream.panel.ColorPanel.tsx
│           ├── dream.panel.EffectsPanel.tsx
│           ├── dream.panel.FontPanel.tsx
│           └── dream.panel.LayoutPanel.tsx
└── styles
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── dream-shell.css
    ├── globals.css
    ├── home-dream.css
    ├── theme.css
    └── view-transitions.css
```
<details><summary>Full Website Customizability file index (37 files)</summary>

- `app/api/settings/appearance/route.ts` — API route handler.
- `app/api/settings/feed/route.ts` — API route handler.
- `app/api/settings/notifications/route.ts` — API route handler.
- `app/api/settings/privacy/route.ts` — API route handler.
- `app/settings/account/dream.DangerZoneActions.tsx` — React component module.
- `app/settings/account/page.tsx` — route page.
- `app/settings/algorithm/page.tsx` — route page.
- `app/settings/appearance/page.tsx` — route page.
- `app/settings/controls/dream.ControlsClient.tsx` — React component module.
- `app/settings/controls/dream.PositionIndicatorToggle.tsx` — React component module.
- `app/settings/controls/page.tsx` — route page.
- `app/settings/data/dream.DataClient.tsx` — React component module.
- `app/settings/data/page.tsx` — route page.
- `app/settings/dreams/dreams-layout-editor.tsx` — React component module.
- `app/settings/dreams/page.tsx` — route page.
- `app/settings/feed/page.tsx` — route page.
- `app/settings/help/page.tsx` — route page.
- `app/settings/notifications/page.tsx` — route page.
- `app/settings/page.tsx` — route page.
- `app/settings/privacy/dream.PrivacyClient.tsx` — React component module.
- `app/settings/privacy/page.tsx` — route page.
- `app/settings/safety/page.tsx` — route page.
- `app/settings/security/page.tsx` — route page.
- `app/settings/widgets/page.tsx` — route page.
- `components/customize/dream.GlobalCustomizeUI.tsx` — React component module.
- `components/customize/dream.bar.CustomizeModeBar.tsx` — React component module.
- `components/customize/dream.bar.CustomizeToolbar.tsx` — React component module.
- `components/customize/panels/dream.panel.ColorPanel.tsx` — React component module.
- `components/customize/panels/dream.panel.EffectsPanel.tsx` — React component module.
- `components/customize/panels/dream.panel.FontPanel.tsx` — React component module.
- `components/customize/panels/dream.panel.LayoutPanel.tsx` — React component module.
- `styles/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `styles/dream-shell.css` — project file.
- `styles/globals.css` — project file.
- `styles/home-dream.css` — project file.
- `styles/theme.css` — project file.
- `styles/view-transitions.css` — project file.

</details>

## Backend, System, Core & CoreSurfaces
Backend, System, Core & CoreSurfaces is a full-stack subsystem that owns both React surfaces and API handlers. It depends on dr-eams, Dreamr — Human Media, Dreams (Widgets / Windows / Surfaces).
### Responsibilities
- API surface: /api/account, /api/activity, /api/admin, /api/ads, …
- Renders POST, POST, GET, POST, POST, POST, +157 more
- Database schema ownership and data persistence
- AI model integration and inference routing
- Authentication, session, and access control
- Real-time communication and channel management
- Feed ranking, algorithm execution, and content scoring
- Asset storage, upload pipelines, and CDN management
- Quality assurance and integration coverage
### Key Modules
- `DELETE`
- `EditProfileDreamPage`
- `GET`
- `PATCH`
- `POST`
- `PUT`
- `ViewProfilePage`
- `dreamsurface.EditProfileDream`
- `dreamsurface.ViewProfile`
### Architectural Relationships
- Depends on **dr-eams**
- Depends on **Dreamr — Human Media**
- Depends on **Dreams (Widgets / Windows / Surfaces)**
- Depends on **The Engins**
- Depends on **The Marketplace**
- Depends on **The Shop**
- Depends on **User-Facing Modularity**
- Integrates with the Dual Runtime layer for execution orchestration
- Depends on dr-eams
- Depends on Dreamr — Human Media
- Depends on Dreams (Widgets / Windows / Surfaces)
- Depends on The Engins
### Public Surfaces
**API Endpoints:**
- `/api/account/delete-data` `[POST]`
- `/api/account/delete-dream` `[POST]`
- `/api/account/export-data` `[GET]`
- `/api/activity/track` `[POST]`
- `/api/admin/ai-chat` `[POST]`
- `/api/admin/ai-request` `[POST]`
- `/api/admin/child-safety` `[GET, POST]`
- `/api/admin/code-files` `[POST]`
- `/api/admin/observability` `[GET]`
- `/api/ads/orders` `[POST]`
- `/api/ads/view` `[POST]`
- `/api/agent/session` `[POST]`
- `/api/ai/boogieman` `[POST]`
- `/api/ai/boogieman/child-safety` `[POST]`
- `/api/ai/boogieman/privacy-event` `[POST]`
- `/api/ai/boogieman/status` `[GET]`
- `/api/ai/eams` `[POST]`
- `/api/ai/execute` `[POST]`
- `/api/ai/idari` `[POST]`
- `/api/appeal` `[POST]`
- `/api/auth/logout` `[GET]`
- `/api/auth/providers` `[GET]`
- `/api/blocks` `[GET, POST, DELETE]`
- `/api/ci/run` `[POST]`
- `/api/close-friends` `[GET, POST, DELETE]`
- `/api/codeengin/diagnostics` `[POST]`
- `/api/codeengin/file` `[POST]`
- `/api/codeengin/git` `[POST]`
- `/api/codeengin/run` `[GET, POST]`
- `/api/codeengin/search` `[POST]`
- `/api/codeengin/upload` `[POST]`
- `/api/codeengin/workspace` `[GET, POST]`
- `/api/comments` `[GET, POST, DELETE]`
- `/api/connectors/[provider]/connect` `[POST]`
- `/api/connectors/[provider]/disconnect` `[DELETE]`
- `/api/connectors/[provider]/items` `[GET]`
- `/api/connectors/[provider]/sync` `[POST]`
- `/api/connectors/[provider]/verify` `[GET]`
- `/api/connectors/cron` `[GET]`
- `/api/connectors/instagram/oauth/callback` `[GET]`
- `/api/connectors/instagram/oauth/start` `[GET]`
- `/api/connectors/status` `[GET]`
- `/api/connectors/webhooks/[provider]` `[GET, POST]`
- `/api/connectors/youtube/oauth/callback` `[GET]`
- `/api/connectors/youtube/oauth/start` `[GET]`
- `/api/content/generative-fill` `[POST]`
- `/api/content/intelligence` `[POST]`
- `/api/content/transcribe` `[POST]`
- `/api/content/voice-clone` `[POST]`
- `/api/contentengin/assets/[assetId]` `[GET]`
- `/api/contentengin/assets/[assetId]/export/gameengin` `[POST]`
- `/api/contentengin/jobs` `[GET, POST]`
- `/api/contentengin/jobs/[jobId]` `[GET]`
- `/api/contentengin/upload` `[POST]`
- `/api/dr-eams/hf` `[POST]`
- `/api/dr-eams/run` `[POST]`
- `/api/drafts` `[GET, POST]`
- `/api/drafts/[id]` `[PATCH, DELETE]`
- `/api/dream-windows` `[GET, POST]`
- `/api/dream-windows/[id]` `[GET, PATCH, DELETE]`
- `/api/dreamengin/os-status` `[GET]`
- `/api/dreamr/feed` `[GET]`
- `/api/dreamr/suggested` `[GET]`
- `/api/dreamr/tally` `[POST]`
- `/api/dreams/feed` `[GET, POST]`
- `/api/dreams/instances` `[GET]`
- `/api/dreams/transfer` `[POST]`
- `/api/embed-feed` `[GET]`
- `/api/favorites` `[GET, POST, DELETE]`
- `/api/feed` `[GET]`
- `/api/follow` `[GET, POST, DELETE]`
- `/api/forge/build` `[POST]`
- `/api/gal` `[POST]`
- `/api/game-scores` `[GET, POST, PATCH]`
- `/api/gameengin/crash-report` `[POST]`
- `/api/health` `[GET]`
- `/api/home-layout` `[GET, POST]`
- `/api/journey` `[GET, POST]`
- `/api/lab/benchmarks` `[POST]`
- `/api/ledger-media` `[GET]`
- `/api/likes` `[GET, POST, DELETE]`
- `/api/marketplace` `[GET, POST]`
- `/api/marketplace/request` `[POST]`
- `/api/messages` `[GET, POST]`
- `/api/messages/boards` `[POST]`
- `/api/metrics` `[GET]`
- `/api/metrics/platform` `[GET]`
- `/api/metrics/user/[userId]` `[GET]`
- `/api/music` `[GET, POST, DELETE]`
- `/api/notifications` `[GET, PUT, DELETE]`
- `/api/platform/errors` `[GET, POST]`
- `/api/posts` `[GET, POST]`
- `/api/posts/[id]` `[DELETE]`
- `/api/posts/[id]/save` `[POST, DELETE]`
- `/api/posts/[id]/view` `[POST]`
- `/api/posts/profile/[userId]` `[GET]`
- `/api/profile` `[GET, PUT]`
- `/api/projects` `[GET, POST, PUT, DELETE]`
- `/api/scheduled-posts` `[GET, POST, PUT, DELETE]`
- `/api/security/scan` `[POST]`
- `/api/settings/appearance` `[GET, POST]`
- `/api/settings/feed` `[GET, POST]`
- `/api/settings/notifications` `[GET, POST]`
- `/api/settings/privacy` `[GET, POST]`
- `/api/setup/check` `[GET]`
- `/api/setup/google-oauth` `[GET]`
- `/api/shared-dream/sessions` `[GET, POST]`
- `/api/shared-dream/sessions/[id]` `[GET, PATCH]`
- `/api/shellhub/devices` `[GET]`
- `/api/shop` `[GET, POST, PUT, DELETE]`
- `/api/skip-credits/balance` `[GET]`
- `/api/skip-credits/earn` `[POST]`
- `/api/skip-credits/use` `[POST]`
- `/api/social/ipfs` `[GET, POST]`
- `/api/social/livekit/room` `[GET]`
- `/api/social/livekit/token` `[POST]`
- `/api/social/rss-feed` `[GET]`
- `/api/upload` `[POST]`
- `/api/user/layout` `[GET, POST]`
- `/api/views/track` `[POST]`
- `/api/widgets/feed` `[GET, POST]`
- `/api/widgets/instances` `[GET]`
- `/api/youtube/channel` `[GET]`
- `/api/youtube/discovery` `[GET]`
- `/api/youtube/live-feed` `[GET]`
**Components:**
`DELETE`, `EditProfileDreamPage`, `GET`, `PATCH`, `POST`, `PUT`, `ViewProfilePage`
### Notable Abstractions
- `FileNode` — interface
- `OAuthProvidersResponse` — interface
- `ConnectorStatusEntry` — interface
- `ContentEnginJobType` — type
- `EmbedFeedResponse` — interface
- `UnifiedFeedEntry` — interface
- `ShellHubDevicesResponse` — interface
- `YouTubeChannelResponse` — interface
- `YouTubeDiscoveryResponse` — interface
- `YouTubeLiveFeedResponse` — interface
- `ButtonGroupName` — type
- `ButtonItem` — type
### Capabilities
- Public contract surface: FileNode, OAuthProvidersResponse, ConnectorStatusEntry, EmbedFeedResponse, UnifiedFeedEntry
- Shared type vocabulary: ContentEnginJobType, ButtonGroupName, ButtonItem, HomeTarget, PresenceStatus
- Utility functions: getOAuthProvidersResponse, GET, POST, GET, GET, POST
- Read endpoints for data retrieval
- Write endpoints for mutations
- Delete endpoints for resource lifecycle
#### File Structure
```text
├── app
│   └── api
│       ├── account
│       │   ├── delete-data
│       │   │   └── route.ts
│       │   ├── delete-dream
│       │   │   └── route.ts
│       │   └── export-data
│       │       └── route.ts
│       ├── activity
│       │   └── track
│       │       └── route.ts
│       ├── admin
│       │   ├── ai-chat
│       │   │   └── route.ts
│       │   ├── ai-request
│       │   │   └── route.ts
│       │   ├── child-safety
│       │   │   └── route.ts
│       │   ├── code-files
│       │   │   └── route.ts
│       │   └── observability
│       │       └── route.ts
│       ├── ads
│       │   ├── orders
│       │   │   └── route.ts
│       │   └── view
│       │       └── route.ts
│       ├── agent
│       │   └── session
│       │       └── route.ts
│       ├── ai
│       │   ├── boogieman
│       │   │   ├── child-safety
│       │   │   │   └── route.ts
│       │   │   ├── privacy-event
│       │   │   │   └── route.ts
│       │   │   ├── route.ts
│       │   │   └── status
│       │   │       └── route.ts
│       │   ├── eams
│       │   │   └── route.ts
│       │   ├── execute
│       │   │   └── route.ts
│       │   └── idari
│       │       └── route.ts
│       ├── appeal
│       │   └── route.ts
│       ├── auth
│       │   ├── logout
│       │   │   └── route.ts
│       │   └── providers
│       │       └── route.ts
│       ├── blocks
│       │   └── route.ts
│       ├── ci
│       │   └── run
│       │       └── route.ts
│       ├── close-friends
│       │   └── route.ts
│       ├── codeengin
│       │   ├── diagnostics
│       │   │   └── route.ts
│       │   ├── file
│       │   │   └── route.ts
│       │   ├── git
│       │   │   └── route.ts
│       │   ├── run
│       │   │   └── route.ts
│       │   ├── search
│       │   │   └── route.ts
│       │   ├── upload
│       │   │   └── route.ts
│       │   └── workspace
│       │       └── route.ts
│       ├── comments
│       │   └── route.ts
│       ├── connectors
│       │   ├── [provider]
│       │   │   ├── connect
│       │   │   │   └── route.ts
│       │   │   ├── disconnect
│       │   │   │   └── route.ts
│       │   │   ├── items
│       │   │   │   └── route.ts
│       │   │   ├── sync
│       │   │   │   └── route.ts
│       │   │   └── verify
│       │   │       └── route.ts
│       │   ├── cron
│       │   │   └── route.ts
│       │   ├── instagram
│       │   │   └── oauth
│       │   │       ├── callback
│       │   │       │   └── route.ts
│       │   │       └── start
│       │   │           └── route.ts
│       │   ├── status
│       │   │   └── route.ts
│       │   ├── webhooks
│       │   │   └── [provider]
│       │   │       └── route.ts
│       │   └── youtube
│       │       └── oauth
│       │           ├── callback
│       │           │   └── route.ts
│       │           └── start
│       │               └── route.ts
│       ├── content
│       │   ├── generative-fill
│       │   │   └── route.ts
│       │   ├── intelligence
│       │   │   └── route.ts
│       │   ├── transcribe
│       │   │   └── route.ts
│       │   └── voice-clone
│       │       └── route.ts
│       ├── contentengin
│       │   ├── assets
│       │   │   └── [assetId]
… (87 more files)
```
<details><summary>Backend, System, Core & CoreSurfaces file index (207 files)</summary>

- `app/api/account/delete-data/route.ts` — API route handler.
- `app/api/account/delete-dream/route.ts` — API route handler.
- `app/api/account/export-data/route.ts` — API route handler.
- `app/api/activity/track/route.ts` — API route handler.
- `app/api/admin/ai-chat/route.ts` — API route handler.
- `app/api/admin/ai-request/route.ts` — API route handler.
- `app/api/admin/child-safety/route.ts` — API route handler.
- `app/api/admin/code-files/route.ts` — API route handler.
- `app/api/admin/observability/route.ts` — API route handler.
- `app/api/ads/orders/route.ts` — API route handler.
- `app/api/ads/view/route.ts` — API route handler.
- `app/api/agent/session/route.ts` — API route handler.
- `app/api/ai/boogieman/child-safety/route.ts` — API route handler.
- `app/api/ai/boogieman/privacy-event/route.ts` — API route handler.
- `app/api/ai/boogieman/route.ts` — API route handler.
- `app/api/ai/boogieman/status/route.ts` — API route handler.
- `app/api/ai/eams/route.ts` — API route handler.
- `app/api/ai/execute/route.ts` — API route handler.
- `app/api/ai/idari/route.ts` — API route handler.
- `app/api/appeal/route.ts` — API route handler.
- `app/api/auth/logout/route.ts` — API route handler.
- `app/api/auth/providers/route.ts` — API route handler.
- `app/api/blocks/route.ts` — API route handler.
- `app/api/ci/run/route.ts` — API route handler.
- `app/api/close-friends/route.ts` — API route handler.
- `app/api/codeengin/diagnostics/route.ts` — API route handler.
- `app/api/codeengin/file/route.ts` — API route handler.
- `app/api/codeengin/git/route.ts` — API route handler.
- `app/api/codeengin/run/route.ts` — API route handler.
- `app/api/codeengin/search/route.ts` — API route handler.
- `app/api/codeengin/upload/route.ts` — API route handler.
- `app/api/codeengin/workspace/route.ts` — API route handler.
- `app/api/comments/route.ts` — API route handler.
- `app/api/connectors/[provider]/connect/route.ts` — API route handler.
- `app/api/connectors/[provider]/disconnect/route.ts` — API route handler.
- `app/api/connectors/[provider]/items/route.ts` — API route handler.
- `app/api/connectors/[provider]/sync/route.ts` — API route handler.
- `app/api/connectors/[provider]/verify/route.ts` — API route handler.
- `app/api/connectors/cron/route.ts` — API route handler.
- `app/api/connectors/instagram/oauth/callback/route.ts` — API route handler.
- `app/api/connectors/instagram/oauth/start/route.ts` — API route handler.
- `app/api/connectors/status/route.ts` — API route handler.
- `app/api/connectors/webhooks/[provider]/route.ts` — API route handler.
- `app/api/connectors/youtube/oauth/callback/route.ts` — API route handler.
- `app/api/connectors/youtube/oauth/start/route.ts` — API route handler.
- `app/api/content/generative-fill/route.ts` — API route handler.
- `app/api/content/intelligence/route.ts` — API route handler.
- `app/api/content/transcribe/route.ts` — API route handler.
- `app/api/content/voice-clone/route.ts` — API route handler.
- `app/api/contentengin/assets/[assetId]/export/gameengin/route.ts` — API route handler.
- `app/api/contentengin/assets/[assetId]/route.ts` — API route handler.
- `app/api/contentengin/jobs/[jobId]/route.ts` — API route handler.
- `app/api/contentengin/jobs/route.ts` — API route handler.
- `app/api/contentengin/upload/route.ts` — API route handler.
- `app/api/dr-eams/hf/route.ts` — API route handler.
- `app/api/dr-eams/run/route.ts` — API route handler.
- `app/api/drafts/[id]/route.ts` — API route handler.
- `app/api/drafts/route.ts` — API route handler.
- `app/api/dream-windows/[id]/route.ts` — API route handler.
- `app/api/dream-windows/route.ts` — API route handler.
- `app/api/dreamengin/os-status/route.ts` — API route handler.
- `app/api/dreamr/feed/route.ts` — API route handler.
- `app/api/dreamr/suggested/route.ts` — API route handler.
- `app/api/dreamr/tally/route.ts` — API route handler.
- `app/api/dreams/feed/route.ts` — API route handler.
- `app/api/dreams/instances/route.ts` — API route handler.
- `app/api/dreams/transfer/route.ts` — API route handler.
- `app/api/embed-feed/route.ts` — API route handler.
- `app/api/favorites/route.ts` — API route handler.
- `app/api/feed/route.ts` — API route handler.
- `app/api/follow/route.ts` — API route handler.
- `app/api/forge/build/route.ts` — API route handler.
- `app/api/gal/route.ts` — API route handler.
- `app/api/game-scores/route.ts` — API route handler.
- `app/api/gameengin/crash-report/route.ts` — API route handler.
- `app/api/health/route.ts` — API route handler.
- `app/api/home-layout/route.ts` — API route handler.
- `app/api/journey/route.ts` — API route handler.
- `app/api/lab/benchmarks/route.ts` — API route handler.
- `app/api/ledger-media/route.ts` — API route handler.
- `app/api/likes/route.ts` — API route handler.
- `app/api/marketplace/request/route.ts` — API route handler.
- `app/api/marketplace/route.ts` — API route handler.
- `app/api/messages/boards/route.ts` — API route handler.
- `app/api/messages/route.ts` — API route handler.
- `app/api/metrics/platform/route.ts` — API route handler.
- `app/api/metrics/route.ts` — API route handler.
- `app/api/metrics/user/[userId]/route.ts` — API route handler.
- `app/api/music/route.ts` — API route handler.
- `app/api/notifications/route.ts` — API route handler.
- `app/api/platform/errors/route.ts` — API route handler.
- `app/api/posts/[id]/route.ts` — API route handler.
- `app/api/posts/[id]/save/route.ts` — API route handler.
- `app/api/posts/[id]/view/route.ts` — API route handler.
- `app/api/posts/profile/[userId]/route.ts` — API route handler.
- `app/api/posts/route.ts` — API route handler.
- `app/api/profile/route.ts` — API route handler.
- `app/api/projects/route.ts` — API route handler.
- `app/api/scheduled-posts/route.ts` — API route handler.
- `app/api/security/scan/route.ts` — API route handler.
- `app/api/settings/appearance/route.ts` — API route handler.
- `app/api/settings/feed/route.ts` — API route handler.
- `app/api/settings/notifications/route.ts` — API route handler.
- `app/api/settings/privacy/route.ts` — API route handler.
- `app/api/setup/check/route.ts` — API route handler.
- `app/api/setup/google-oauth/route.ts` — API route handler.
- `app/api/shared-dream/sessions/[id]/route.ts` — API route handler.
- `app/api/shared-dream/sessions/route.ts` — API route handler.
- `app/api/shellhub/devices/route.ts` — API route handler.
- `app/api/shop/route.ts` — API route handler.
- `app/api/skip-credits/balance/route.ts` — API route handler.
- `app/api/skip-credits/earn/route.ts` — API route handler.
- `app/api/skip-credits/use/route.ts` — API route handler.
- `app/api/social/ipfs/route.ts` — API route handler.
- `app/api/social/livekit/room/route.ts` — API route handler.
- `app/api/social/livekit/token/route.ts` — API route handler.
- `app/api/social/rss-feed/route.ts` — API route handler.
- `app/api/upload/route.ts` — API route handler.
- `app/api/user/layout/route.ts` — API route handler.
- `app/api/views/track/route.ts` — API route handler.
- `app/api/widgets/feed/route.ts` — API route handler.
- `app/api/widgets/instances/route.ts` — API route handler.
- `app/api/youtube/channel/route.ts` — API route handler.
- `app/api/youtube/discovery/route.ts` — API route handler.
- `app/api/youtube/live-feed/route.ts` — API route handler.
- `coresurfaces/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `coresurfaces/dreamsurface.EditProfileDream.tsx` — React component module.
- `coresurfaces/dreamsurface.ViewProfile.tsx` — React component module.
- `coresurfaces/home/buttons/button-groups.ts` — TypeScript module.
- `coresurfaces/home/buttons/contextual-home.ts` — TypeScript module.
- `supabase/.temp/cli-latest` — project file.
- `supabase/.temp/gotrue-version` — project file.
- `supabase/.temp/linked-project.json` — project file.
- `supabase/.temp/pooler-url` — project file.
- `supabase/.temp/postgres-version` — project file.
- `supabase/.temp/project-ref` — project file.
- `supabase/.temp/rest-version` — project file.
- `supabase/.temp/storage-migration` — project file.
- `supabase/.temp/storage-version` — project file.
- `supabase/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `supabase/auth/nextRedirect.ts` — TypeScript module.
- `supabase/client/client.ts` — TypeScript module.
- `supabase/client/safeGetUser.ts` — TypeScript module.
- `supabase/config.toml` — project file.
- `supabase/config.ts` — TypeScript module.
- `supabase/migrations/20240120000000_initial_schema.sql` — SQL schema/migration.
- `supabase/migrations/20240120000001_enable_rls.sql` — SQL schema/migration.
- `supabase/migrations/20260129000000_upgrade_schema.sql` — SQL schema/migration.
- `supabase/migrations/20260210000000_widget_system_v2.sql` — SQL schema/migration.
- `supabase/migrations/20260210000001_ai_system_v2026.sql` — SQL schema/migration.
- `supabase/migrations/20260210_ai_core.sql` — SQL schema/migration.
- `supabase/migrations/20260214000000_security_axioms.sql` — SQL schema/migration.
- `supabase/migrations/20260226000000_admin_lock.sql` — SQL schema/migration.
- `supabase/migrations/20260305000000_create_notes.sql` — SQL schema/migration.
- `supabase/migrations/20260305000001_comments.sql` — SQL schema/migration.
- `supabase/migrations/20260305000002_leaderboard.sql` — SQL schema/migration.
- `supabase/migrations/20260307000000_readme_gaps.sql` — SQL schema/migration.
- `supabase/migrations/20260307000001_conversations_messages.sql` — SQL schema/migration.
- `supabase/migrations/20260310000000_widget_instances_visibility.sql` — SQL schema/migration.
- `supabase/migrations/20260310000001_profiles_widget_config.sql` — SQL schema/migration.
- `supabase/migrations/20260310000002_profile_dream_widgets.sql` — SQL schema/migration.
- `supabase/migrations/20260310000003_connector_accounts.sql` — SQL schema/migration.
- `supabase/migrations/20260310000004_feed_items.sql` — SQL schema/migration.
- `supabase/migrations/20260310000010_dreamdm_bar_pass2.sql` — SQL schema/migration.
- `supabase/migrations/20260315000000_content_drafts.sql` — SQL schema/migration.
- `supabase/migrations/20260316000000_visibility_mappings.sql` — SQL schema/migration.
- `supabase/migrations/20260319000000_journey_dots.sql` — SQL schema/migration.
- `supabase/migrations/20260319065444_new-migration.sql` — SQL schema/migration.
- `supabase/migrations/20260319120000_connector_accounts_schema_reload.sql` — SQL schema/migration.
- `supabase/migrations/20260320000000_scheduled_posts.sql` — SQL schema/migration.
- `supabase/migrations/20260320100000_game_scores_all_games.sql` — SQL schema/migration.
- `supabase/migrations/20260320110000_user_blocks.sql` — SQL schema/migration.
- `supabase/migrations/20260321000000_ads_platform_promotions.sql` — SQL schema/migration.
- `supabase/migrations/20260321200000_phase8a_feed_and_layout.sql` — SQL schema/migration.
- `supabase/migrations/20260322000000_phase8b_dream_windows.sql` — SQL schema/migration.
- `supabase/migrations/20260322000000_policy_events.sql` — SQL schema/migration.
- `supabase/migrations/20260322000001_message_boards.sql` — SQL schema/migration.
- `supabase/migrations/20260323100000_embed_feed_items.sql` — SQL schema/migration.
- `supabase/migrations/20260324000000_phase8e_orders.sql` — SQL schema/migration.
- `supabase/migrations/20260324000001_phase8e_shop_marketplace.sql` — SQL schema/migration.
- `supabase/migrations/20260325000000_phase8f_daydream_network.sql` — SQL schema/migration.
- `supabase/migrations/20260325100000_child_safety.sql` — SQL schema/migration.
- `supabase/migrations/20260401000001_platform_utilities.sql` — SQL schema/migration.
- `supabase/migrations/20260402000001_control_mappings.sql` — SQL schema/migration.
- `supabase/migrations/20260402000002_game_assets.sql` — SQL schema/migration.
- `supabase/migrations/20260403000001_pgvector_embeddings.sql` — SQL schema/migration.
- `supabase/migrations/20260403000002_pgvector_search_rpc.sql` — SQL schema/migration.
- `supabase/migrations/20260405000001_dreamr_feed_registry.sql` — SQL schema/migration.
- `supabase/migrations/20260405042406_auto_scaffold.sql` — SQL schema/migration.
- `supabase/migrations/20260413000000_phase9_activity_first_protocol.sql` — SQL schema/migration.
- `supabase/migrations/20260417000000_repurpose_nods_as_dream_docs.sql` — SQL schema/migration.
- `supabase/migrations/20260417000001_dream_docs_search_rpc.sql` — SQL schema/migration.
- `supabase/migrations/20260418000000_gameengin_core.sql` — SQL schema/migration.
- `supabase/migrations/20260420000001_consent_settings_audit.sql` — SQL schema/migration.
- `supabase/migrations/20260426000000_activity_coop_gameengin_completion.sql` — SQL schema/migration.
- `supabase/migrations/20260426000100_rename_widgets_to_dreams.sql` — SQL schema/migration.
- `supabase/migrations/20260426000200_build_memory_schema_gaps.sql` — SQL schema/migration.
- `supabase/migrations/20260516000000_agent_sessions_forge_rate_limits.sql` — SQL schema/migration.
- `supabase/migrations/20260516000100_dreamr_tally.sql` — SQL schema/migration.
- `supabase/migrations/20260516000300_shared_dream_sessions.sql` — SQL schema/migration.
- `supabase/migrations/20260605015234_auto_scaffold.sql` — SQL schema/migration.
- `supabase/realtime.ts` — TypeScript module.
- `supabase/schema-final.sql` — SQL schema/migration.
- `supabase/seed.sql` — SQL schema/migration.
- `supabase/server/serverClient.ts` — TypeScript module.
- `supabase/vector.ts` — TypeScript module.
- `utils/supabase/server.ts` — TypeScript module.

</details>

## Agents & Workflow
Agents & Workflow provides shared infrastructure used across the platform. It depends on The Engins.
### Responsibilities
- Database schema ownership and data persistence
- Feed ranking, algorithm execution, and content scoring
- Quality assurance and integration coverage
- Infrastructure provisioning and operational observability
### Architectural Relationships
- Depends on **The Engins**
- Integrates with the Dual Runtime layer for execution orchestration
- Depends on The Engins
### Notable Abstractions
- `TarFile` — interface
- `PackResult` — interface
- `SubsectionDescriptor` — interface
- `SectionDescriptor` — interface
- `AutosyncSummary` — interface
- `ExportedSymbol` — interface
- `ImportEdge` — interface
- `RouteEntry` — interface
- `SubsystemModel` — interface
### Capabilities
- Public contract surface: TarFile, PackResult, SubsectionDescriptor, SectionDescriptor, AutosyncSummary
- Utility functions: packTar, unpackTar, packageCartridge, analyzeExports, analyzeImports, analyzeRoutes
#### File Structure
```text
├── .github
│   ├── scripts
│   │   ├── DREAMENGIN_CORE_COMPLETE.md
│   │   ├── DREAMENGIN_CORE_USAGE.md
│   │   ├── ai_implement.py
│   │   ├── ai_neural_decision.py
│   │   ├── ai_propose.py
│   │   ├── ai_report_propose.py
│   │   ├── analyze-repo.js
│   │   ├── assemble_report_context.py
│   │   ├── catalog_games_for_ai.py
│   │   ├── check-root-hygiene.sh
│   │   ├── check_workflow_masking.py
│   │   ├── dreamengin_core.py
│   │   ├── humanai_audit.py
│   │   ├── issue-bot.js
│   │   ├── run-readme-autosync.mjs
│   │   ├── scan_dreamengin_context.py
│   │   ├── scan_gameengin_context.py
│   │   ├── validate_game_sandbox.py
│   │   └── validate_report_agent_spec.py
│   └── workflows
│       ├── Repo Audit Auto Fix.yml
│       ├── ScanArcCleanup.yml
│       ├── Strict English Codebase Export.yml
│       ├── autofixvercelbuild.yml
│       ├── bot-pr-automerge.yml
│       ├── bouncer.yml
│       ├── cleanup-dead-code.yml
│       ├── codeql.yml
│       ├── copilot-setup-steps.yml
│       ├── daydream-all.yml
│       ├── daydream-brand-engin.yml
│       ├── daydream-code-engin.yml
│       ├── daydream-create-engin.yml
│       ├── daydream-engin-build-cycle.yml
│       ├── daydream-engin-sicc-refinement.yml
│       ├── daydream-games-engin.yml
│       ├── daydream-lab-engin.yml
│       ├── daydream-music-engin.yml
│       ├── db-extension-audit.yml
│       ├── db-extension-check.yml
│       ├── deploy-artifact.yml
│       ├── docs-auto-update.yml
│       ├── dreamengin-preflight.yml
│       ├── elite-gameengin-evolution.yml
│       ├── engin-all.yml
│       ├── export-repo-to-artifacts.yml
│       ├── exportrepo.yml
│       ├── full-audit.yml
│       ├── game-engin-patrol.yml
│       ├── game-library-research.yml
│       ├── gameengin-ai-agent.yml
│       ├── gameengin-artisan.yml
│       ├── gameengin-maestro.yml
│       ├── gameengin-mechanic.yml
│       ├── gameengin-prophet.yml
│       ├── gameengin-upgrader.yml
│       ├── gameengin-writer.yml
│       ├── games-library-ai-agent.yml
│       ├── garbageman.yml
│       ├── generatesupabasetypes.yml
│       ├── github-actions.yml
│       ├── humanai-army-audit.yml
│       ├── humanai-audit.yml
│       ├── idari-daily.yml
│       ├── issue-bot.yml
│       ├── massivejson.yml
│       ├── mobile-nextgen-spec-evolution.yml
│       ├── mobile-ps5-spec-evolution.yml
│       ├── neural_decision_engine.yml
│       ├── optimize-dreamengin.yml
│       ├── orphan-guard.yml
│       ├── portfolio-optimization.yml
│       ├── preflight.yml
│       ├── print-codebase.yml
│       ├── readme-autosync.yml
│       ├── refreshlock.yml
│       ├── registry-sync.yml
│       ├── repo-snapshot.yml
│       ├── report-driven-coding-agent.yml
│       ├── resilient-engine-smoke.yml
│       ├── root-hygiene.yml
│       ├── spec-engin-ai-agent.yml
│       ├── sql-migration-guard.yml
│       ├── sync-build-memory.yml
│       ├── type-audit.yml
│       ├── unzip-fonts.yml
│       ├── update-embed-feed.yml
│       ├── update-repo-state.yml
│       ├── vercel-deploy.yml
│       ├── visual-schematic.yml
│       └── visual-schematicpages.yml
├── agents
│   ├── .gitkeep
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── humanAI
│   │   ├── orchestrator.md
│   │   └── personas
│   │       ├── accessibility.md
│   │       ├── creator.md
│   │       ├── ios-first.md
│   │       ├── power-user.md
│   │       └── social-explorer.md
│   └── humanAI.persona.md
└── scripts
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── archive
    │   └── validate-deployment.js
    ├── autofix-vercel-build.mjs
    ├── center-audit.mjs
    ├── check-build-memory-drift.mjs
    ├── check-engin-filenames.mjs
    ├── check-licenses.mjs
    ├── check-orphans.mjs
    ├── check-root-hygiene.mjs
    ├── close-all-open-prs.sh
    ├── contentengin
    │   ├── blender-add-basic-animations.py
    │   ├── blender-auto-rig.py
… (35 more files)
```
<details><summary>Agents & Workflow file index (155 files)</summary>

- `.github/scripts/DREAMENGIN_CORE_COMPLETE.md` — documentation.
- `.github/scripts/DREAMENGIN_CORE_USAGE.md` — documentation.
- `.github/scripts/ai_implement.py` — project file.
- `.github/scripts/ai_neural_decision.py` — project file.
- `.github/scripts/ai_propose.py` — project file.
- `.github/scripts/ai_report_propose.py` — project file.
- `.github/scripts/analyze-repo.js` — TypeScript module.
- `.github/scripts/assemble_report_context.py` — project file.
- `.github/scripts/catalog_games_for_ai.py` — project file.
- `.github/scripts/check-root-hygiene.sh` — project file.
- `.github/scripts/check_workflow_masking.py` — project file.
- `.github/scripts/dreamengin_core.py` — project file.
- `.github/scripts/humanai_audit.py` — project file.
- `.github/scripts/issue-bot.js` — TypeScript module.
- `.github/scripts/run-readme-autosync.mjs` — project file.
- `.github/scripts/scan_dreamengin_context.py` — project file.
- `.github/scripts/scan_gameengin_context.py` — project file.
- `.github/scripts/validate_game_sandbox.py` — project file.
- `.github/scripts/validate_report_agent_spec.py` — project file.
- `.github/workflows/Repo Audit Auto Fix.yml` — project file.
- `.github/workflows/ScanArcCleanup.yml` — project file.
- `.github/workflows/Strict English Codebase Export.yml` — project file.
- `.github/workflows/autofixvercelbuild.yml` — project file.
- `.github/workflows/bot-pr-automerge.yml` — project file.
- `.github/workflows/bouncer.yml` — project file.
- `.github/workflows/cleanup-dead-code.yml` — project file.
- `.github/workflows/codeql.yml` — project file.
- `.github/workflows/copilot-setup-steps.yml` — project file.
- `.github/workflows/daydream-all.yml` — project file.
- `.github/workflows/daydream-brand-engin.yml` — project file.
- `.github/workflows/daydream-code-engin.yml` — project file.
- `.github/workflows/daydream-create-engin.yml` — project file.
- `.github/workflows/daydream-engin-build-cycle.yml` — project file.
- `.github/workflows/daydream-engin-sicc-refinement.yml` — project file.
- `.github/workflows/daydream-games-engin.yml` — project file.
- `.github/workflows/daydream-lab-engin.yml` — project file.
- `.github/workflows/daydream-music-engin.yml` — project file.
- `.github/workflows/db-extension-audit.yml` — project file.
- `.github/workflows/db-extension-check.yml` — project file.
- `.github/workflows/deploy-artifact.yml` — project file.
- `.github/workflows/docs-auto-update.yml` — project file.
- `.github/workflows/dreamengin-preflight.yml` — project file.
- `.github/workflows/elite-gameengin-evolution.yml` — project file.
- `.github/workflows/engin-all.yml` — project file.
- `.github/workflows/export-repo-to-artifacts.yml` — project file.
- `.github/workflows/exportrepo.yml` — project file.
- `.github/workflows/full-audit.yml` — project file.
- `.github/workflows/game-engin-patrol.yml` — project file.
- `.github/workflows/game-library-research.yml` — project file.
- `.github/workflows/gameengin-ai-agent.yml` — project file.
- `.github/workflows/gameengin-artisan.yml` — project file.
- `.github/workflows/gameengin-maestro.yml` — project file.
- `.github/workflows/gameengin-mechanic.yml` — project file.
- `.github/workflows/gameengin-prophet.yml` — project file.
- `.github/workflows/gameengin-upgrader.yml` — project file.
- `.github/workflows/gameengin-writer.yml` — project file.
- `.github/workflows/games-library-ai-agent.yml` — project file.
- `.github/workflows/garbageman.yml` — project file.
- `.github/workflows/generatesupabasetypes.yml` — project file.
- `.github/workflows/github-actions.yml` — project file.
- `.github/workflows/humanai-army-audit.yml` — project file.
- `.github/workflows/humanai-audit.yml` — project file.
- `.github/workflows/idari-daily.yml` — project file.
- `.github/workflows/issue-bot.yml` — project file.
- `.github/workflows/massivejson.yml` — project file.
- `.github/workflows/mobile-nextgen-spec-evolution.yml` — project file.
- `.github/workflows/mobile-ps5-spec-evolution.yml` — project file.
- `.github/workflows/neural_decision_engine.yml` — project file.
- `.github/workflows/optimize-dreamengin.yml` — project file.
- `.github/workflows/orphan-guard.yml` — project file.
- `.github/workflows/portfolio-optimization.yml` — project file.
- `.github/workflows/preflight.yml` — project file.
- `.github/workflows/print-codebase.yml` — project file.
- `.github/workflows/readme-autosync.yml` — project file.
- `.github/workflows/refreshlock.yml` — project file.
- `.github/workflows/registry-sync.yml` — project file.
- `.github/workflows/repo-snapshot.yml` — project file.
- `.github/workflows/report-driven-coding-agent.yml` — project file.
- `.github/workflows/resilient-engine-smoke.yml` — project file.
- `.github/workflows/root-hygiene.yml` — project file.
- `.github/workflows/spec-engin-ai-agent.yml` — project file.
- `.github/workflows/sql-migration-guard.yml` — project file.
- `.github/workflows/sync-build-memory.yml` — project file.
- `.github/workflows/type-audit.yml` — project file.
- `.github/workflows/unzip-fonts.yml` — project file.
- `.github/workflows/update-embed-feed.yml` — project file.
- `.github/workflows/update-repo-state.yml` — project file.
- `.github/workflows/vercel-deploy.yml` — project file.
- `.github/workflows/visual-schematic.yml` — project file.
- `.github/workflows/visual-schematicpages.yml` — project file.
- `agents/.gitkeep` — project file.
- `agents/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `agents/humanAI.persona.md` — documentation.
- `agents/humanAI/orchestrator.md` — documentation.
- `agents/humanAI/personas/accessibility.md` — documentation.
- `agents/humanAI/personas/creator.md` — documentation.
- `agents/humanAI/personas/ios-first.md` — documentation.
- `agents/humanAI/personas/power-user.md` — documentation.
- `agents/humanAI/personas/social-explorer.md` — documentation.
- `scripts/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `scripts/archive/validate-deployment.js` — TypeScript module.
- `scripts/autofix-vercel-build.mjs` — project file.
- `scripts/center-audit.mjs` — project file.
- `scripts/check-build-memory-drift.mjs` — project file.
- `scripts/check-engin-filenames.mjs` — project file.
- `scripts/check-licenses.mjs` — project file.
- `scripts/check-orphans.mjs` — project file.
- `scripts/check-root-hygiene.mjs` — project file.
- `scripts/close-all-open-prs.sh` — project file.
- `scripts/contentengin/blender-add-basic-animations.py` — project file.
- `scripts/contentengin/blender-auto-rig.py` — project file.
- `scripts/contentengin/blender-cleanup.py` — project file.
- `scripts/contentengin/blender-validate-rig.py` — project file.
- `scripts/contentengin/validate-glb.mjs` — project file.
- `scripts/deploy.sh` — project file.
- `scripts/export-full-code.mjs` — project file.
- `scripts/feature-build/generate-features.mjs` — project file.
- `scripts/fix-audit.js` — TypeScript module.
- `scripts/gameengin/architect-run.ts` — TypeScript module.
- `scripts/gameengin/artisan-run.ts` — TypeScript module.
- `scripts/gameengin/lib/tar.ts` — TypeScript module.
- `scripts/gameengin/maestro-analyze.ts` — TypeScript module.
- `scripts/gameengin/mechanic-run.ts` — TypeScript module.
- `scripts/gameengin/package-cartridge.ts` — TypeScript module.
- `scripts/gameengin/prophet-run.ts` — TypeScript module.
- `scripts/gameengin/smoke-webgl.ts` — TypeScript module.
- `scripts/gameengin/smoke-webgpu.ts` — TypeScript module.
- `scripts/gameengin/upgrader-run.ts` — TypeScript module.
- `scripts/gameengin/writer-run.ts` — TypeScript module.
- `scripts/generate-mobile-nextgen-spec.mjs` — project file.
- `scripts/generate-mobile-ps5-spec.mjs` — project file.
- `scripts/generate-readme.ts` — TypeScript module.
- `scripts/generate-repo-state.mjs` — project file.
- `scripts/generate-webapp-final-form.mjs` — project file.
- `scripts/law-check.sh` — project file.
- `scripts/migrate-imports.sh` — project file.
- `scripts/optimize-dreamengin.mjs` — project file.
- `scripts/postbuild.js` — TypeScript module.
- `scripts/postbuild.ts` — TypeScript module.
- `scripts/readme-autosync.ts` — TypeScript module.
- `scripts/repository-state-analysis-section.mjs` — project file.
- `scripts/score-pass.cjs` — project file.
- `scripts/setup-database.sql` — SQL schema/migration.
- `scripts/spec-check.cjs` — project file.
- `scripts/sync-build-memory.mjs` — project file.
- `scripts/ui-ux-agent.py` — project file.
- `scripts/update-bugs.mjs` — project file.
- `scripts/update-embed-feed.mjs` — project file.
- `scripts/update-handoff.mjs` — project file.
- `scripts/update-readme-status-utils.mjs` — project file.
- `scripts/update-readme.mjs` — project file.
- `scripts/validate-schema-sync.sh` — project file.
- `scripts/vercel-ignore.cjs` — project file.
- `scripts/vercel-preflight.cjs` — project file.
- `scripts/wire-orphans.mjs` — project file.

</details>

## Research, Experiments & Daydreams
Research, Experiments & Daydreams is a UI subsystem composed of React components and presentation logic. It exposes useDaydreamPersistence, useDaydreamState as React hooks for consumption by sibling subsystems. It depends on Backend, System, Core & CoreSurfaces, DreamSpace, The Engins.
### Responsibilities
- Renders BrandDaydreamPage, CodeDaydreamPage, CreateDaydreamPage, GamesDaydreamPage, LabDaydreamPage, MusicArtistHubPage
- Quality assurance and integration coverage
### Key Modules
- `BrandDaydreamPage`
- `CodeDaydreamPage`
- `CreateDaydreamPage`
- `GamesDaydreamPage`
- `LabDaydreamPage`
- `MusicArtistHubPage`
- `useDaydreamPersistence`
- `useDaydreamState`
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **DreamSpace**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Integrates with the Dual Runtime layer for execution orchestration
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on DreamSpace
- Depends on The Engins
- Depends on User-Facing Modularity
### Public Surfaces
**Components:**
`BrandDaydreamPage`, `CodeDaydreamPage`, `CreateDaydreamPage`, `GamesDaydreamPage`, `LabDaydreamPage`, `MusicArtistHubPage`
### Notable Abstractions
- `UseDaydreamPersistenceOptions` — interface
- `UseDaydreamPersistenceReturn` — interface
- `DaydreamSide` — type
- `DaydreamStatePayload` — type
- `UseDaydreamStateOptions` — interface
- `UseDaydreamStateReturn` — interface
- `useDaydreamPersistence` — hook
- `useDaydreamState` — hook
### Capabilities
- Exposes useDaydreamPersistence, useDaydreamState as composable React hooks
- Public contract surface: UseDaydreamPersistenceOptions, UseDaydreamPersistenceReturn, UseDaydreamStateOptions, UseDaydreamStateReturn
- Shared type vocabulary: DaydreamSide, DaydreamStatePayload
#### File Structure
```text
├── daydreams
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── brand
│   │   └── page.tsx
│   ├── code
│   │   └── page.tsx
│   ├── create
│   │   └── page.tsx
│   ├── games
│   │   └── page.tsx
│   ├── lab
│   │   └── page.tsx
│   ├── music
│   │   └── page.tsx
│   └── shared
│       ├── useDaydreamPersistence.ts
│       └── useDaydreamState.ts
├── research
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── DISCOVERY.md
│   ├── README.md
│   ├── ccc-ada-twin-engine
│   │   ├── README.md
│   │   ├── code
│   │   │   └── README.md
│   │   ├── data
│   │   │   └── README.md
│   │   ├── notes
│   │   │   └── sharpening_notes.txt
│   │   └── paper
│   │       ├── ccc_ada_axioms_and_invariants.tex
│   │       ├── ccc_ada_black_hole_gravitational_wave_memory.tex
│   │       ├── ccc_ada_holography_and_information_boundary.tex
│   │       ├── ccc_ada_predictions_and_falsifiability.tex
│   │       └── ccc_ada_twin_engine_framework.tex
│   ├── data
│   │   ├── README.md
│   │   └── torr_vs_mond_lock_n11.csv
│   ├── equations
│   │   └── torridityequate.txt
│   └── paper
│       └── torridity_ledger.tex
└── research-and-development
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── LICENSE
    └── tech-spec-v1.md
```
<details><summary>Research, Experiments & Daydreams file index (28 files)</summary>

- `daydreams/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `daydreams/brand/page.tsx` — route page.
- `daydreams/code/page.tsx` — route page.
- `daydreams/create/page.tsx` — route page.
- `daydreams/games/page.tsx` — route page.
- `daydreams/lab/page.tsx` — route page.
- `daydreams/music/page.tsx` — route page.
- `daydreams/shared/useDaydreamPersistence.ts` — TypeScript module.
- `daydreams/shared/useDaydreamState.ts` — TypeScript module.
- `research-and-development/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `research-and-development/LICENSE` — project file.
- `research-and-development/tech-spec-v1.md` — documentation.
- `research/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `research/DISCOVERY.md` — documentation.
- `research/README.md` — documentation.
- `research/ccc-ada-twin-engine/README.md` — documentation.
- `research/ccc-ada-twin-engine/code/README.md` — documentation.
- `research/ccc-ada-twin-engine/data/README.md` — documentation.
- `research/ccc-ada-twin-engine/notes/sharpening_notes.txt` — project file.
- `research/ccc-ada-twin-engine/paper/ccc_ada_axioms_and_invariants.tex` — project file.
- `research/ccc-ada-twin-engine/paper/ccc_ada_black_hole_gravitational_wave_memory.tex` — project file.
- `research/ccc-ada-twin-engine/paper/ccc_ada_holography_and_information_boundary.tex` — project file.
- `research/ccc-ada-twin-engine/paper/ccc_ada_predictions_and_falsifiability.tex` — project file.
- `research/ccc-ada-twin-engine/paper/ccc_ada_twin_engine_framework.tex` — project file.
- `research/data/README.md` — documentation.
- `research/data/torr_vs_mond_lock_n11.csv` — project file.
- `research/equations/torridityequate.txt` — project file.
- `research/paper/torridity_ledger.tex` — project file.

</details>

## Infra & Ops
Infra & Ops provides shared infrastructure used across the platform.
### Responsibilities
- Database schema ownership and data persistence
- Feed ranking, algorithm execution, and content scoring
- Quality assurance and integration coverage
- Infrastructure provisioning and operational observability
### Architectural Relationships
- Self-contained — no detected cross-subsystem imports
#### File Structure
```text
├── .github
│   └── workflows
│       ├── Repo Audit Auto Fix.yml
│       ├── ScanArcCleanup.yml
│       ├── Strict English Codebase Export.yml
│       ├── autofixvercelbuild.yml
│       ├── bot-pr-automerge.yml
│       ├── bouncer.yml
│       ├── cleanup-dead-code.yml
│       ├── codeql.yml
│       ├── copilot-setup-steps.yml
│       ├── daydream-all.yml
│       ├── daydream-brand-engin.yml
│       ├── daydream-code-engin.yml
│       ├── daydream-create-engin.yml
│       ├── daydream-engin-build-cycle.yml
│       ├── daydream-engin-sicc-refinement.yml
│       ├── daydream-games-engin.yml
│       ├── daydream-lab-engin.yml
│       ├── daydream-music-engin.yml
│       ├── db-extension-audit.yml
│       ├── db-extension-check.yml
│       ├── deploy-artifact.yml
│       ├── docs-auto-update.yml
│       ├── dreamengin-preflight.yml
│       ├── elite-gameengin-evolution.yml
│       ├── engin-all.yml
│       ├── export-repo-to-artifacts.yml
│       ├── exportrepo.yml
│       ├── full-audit.yml
│       ├── game-engin-patrol.yml
│       ├── game-library-research.yml
│       ├── gameengin-ai-agent.yml
│       ├── gameengin-artisan.yml
│       ├── gameengin-maestro.yml
│       ├── gameengin-mechanic.yml
│       ├── gameengin-prophet.yml
│       ├── gameengin-upgrader.yml
│       ├── gameengin-writer.yml
│       ├── games-library-ai-agent.yml
│       ├── garbageman.yml
│       ├── generatesupabasetypes.yml
│       ├── github-actions.yml
│       ├── humanai-army-audit.yml
│       ├── humanai-audit.yml
│       ├── idari-daily.yml
│       ├── issue-bot.yml
│       ├── massivejson.yml
│       ├── mobile-nextgen-spec-evolution.yml
│       ├── mobile-ps5-spec-evolution.yml
│       ├── neural_decision_engine.yml
│       ├── optimize-dreamengin.yml
│       ├── orphan-guard.yml
│       ├── portfolio-optimization.yml
│       ├── preflight.yml
│       ├── print-codebase.yml
│       ├── readme-autosync.yml
│       ├── refreshlock.yml
│       ├── registry-sync.yml
│       ├── repo-snapshot.yml
│       ├── report-driven-coding-agent.yml
│       ├── resilient-engine-smoke.yml
│       ├── root-hygiene.yml
│       ├── spec-engin-ai-agent.yml
│       ├── sql-migration-guard.yml
│       ├── sync-build-memory.yml
│       ├── type-audit.yml
│       ├── unzip-fonts.yml
│       ├── update-embed-feed.yml
│       ├── update-repo-state.yml
│       ├── vercel-deploy.yml
│       ├── visual-schematic.yml
│       └── visual-schematicpages.yml
└── vercel.json
```
<details><summary>Infra & Ops file index (72 files)</summary>

- `.github/workflows/Repo Audit Auto Fix.yml` — project file.
- `.github/workflows/ScanArcCleanup.yml` — project file.
- `.github/workflows/Strict English Codebase Export.yml` — project file.
- `.github/workflows/autofixvercelbuild.yml` — project file.
- `.github/workflows/bot-pr-automerge.yml` — project file.
- `.github/workflows/bouncer.yml` — project file.
- `.github/workflows/cleanup-dead-code.yml` — project file.
- `.github/workflows/codeql.yml` — project file.
- `.github/workflows/copilot-setup-steps.yml` — project file.
- `.github/workflows/daydream-all.yml` — project file.
- `.github/workflows/daydream-brand-engin.yml` — project file.
- `.github/workflows/daydream-code-engin.yml` — project file.
- `.github/workflows/daydream-create-engin.yml` — project file.
- `.github/workflows/daydream-engin-build-cycle.yml` — project file.
- `.github/workflows/daydream-engin-sicc-refinement.yml` — project file.
- `.github/workflows/daydream-games-engin.yml` — project file.
- `.github/workflows/daydream-lab-engin.yml` — project file.
- `.github/workflows/daydream-music-engin.yml` — project file.
- `.github/workflows/db-extension-audit.yml` — project file.
- `.github/workflows/db-extension-check.yml` — project file.
- `.github/workflows/deploy-artifact.yml` — project file.
- `.github/workflows/docs-auto-update.yml` — project file.
- `.github/workflows/dreamengin-preflight.yml` — project file.
- `.github/workflows/elite-gameengin-evolution.yml` — project file.
- `.github/workflows/engin-all.yml` — project file.
- `.github/workflows/export-repo-to-artifacts.yml` — project file.
- `.github/workflows/exportrepo.yml` — project file.
- `.github/workflows/full-audit.yml` — project file.
- `.github/workflows/game-engin-patrol.yml` — project file.
- `.github/workflows/game-library-research.yml` — project file.
- `.github/workflows/gameengin-ai-agent.yml` — project file.
- `.github/workflows/gameengin-artisan.yml` — project file.
- `.github/workflows/gameengin-maestro.yml` — project file.
- `.github/workflows/gameengin-mechanic.yml` — project file.
- `.github/workflows/gameengin-prophet.yml` — project file.
- `.github/workflows/gameengin-upgrader.yml` — project file.
- `.github/workflows/gameengin-writer.yml` — project file.
- `.github/workflows/games-library-ai-agent.yml` — project file.
- `.github/workflows/garbageman.yml` — project file.
- `.github/workflows/generatesupabasetypes.yml` — project file.
- `.github/workflows/github-actions.yml` — project file.
- `.github/workflows/humanai-army-audit.yml` — project file.
- `.github/workflows/humanai-audit.yml` — project file.
- `.github/workflows/idari-daily.yml` — project file.
- `.github/workflows/issue-bot.yml` — project file.
- `.github/workflows/massivejson.yml` — project file.
- `.github/workflows/mobile-nextgen-spec-evolution.yml` — project file.
- `.github/workflows/mobile-ps5-spec-evolution.yml` — project file.
- `.github/workflows/neural_decision_engine.yml` — project file.
- `.github/workflows/optimize-dreamengin.yml` — project file.
- `.github/workflows/orphan-guard.yml` — project file.
- `.github/workflows/portfolio-optimization.yml` — project file.
- `.github/workflows/preflight.yml` — project file.
- `.github/workflows/print-codebase.yml` — project file.
- `.github/workflows/readme-autosync.yml` — project file.
- `.github/workflows/refreshlock.yml` — project file.
- `.github/workflows/registry-sync.yml` — project file.
- `.github/workflows/repo-snapshot.yml` — project file.
- `.github/workflows/report-driven-coding-agent.yml` — project file.
- `.github/workflows/resilient-engine-smoke.yml` — project file.
- `.github/workflows/root-hygiene.yml` — project file.
- `.github/workflows/spec-engin-ai-agent.yml` — project file.
- `.github/workflows/sql-migration-guard.yml` — project file.
- `.github/workflows/sync-build-memory.yml` — project file.
- `.github/workflows/type-audit.yml` — project file.
- `.github/workflows/unzip-fonts.yml` — project file.
- `.github/workflows/update-embed-feed.yml` — project file.
- `.github/workflows/update-repo-state.yml` — project file.
- `.github/workflows/vercel-deploy.yml` — project file.
- `.github/workflows/visual-schematic.yml` — project file.
- `.github/workflows/visual-schematicpages.yml` — project file.
- `vercel.json` — project file.

</details>

## Testing
Testing provides shared infrastructure used across the platform. It depends on Agents & Workflow, Backend, System, Core & CoreSurfaces, dr-eams.
### Responsibilities
- Runtime orchestration and engin lifecycle management
- Database schema ownership and data persistence
- AI model integration and inference routing
- Authentication, session, and access control
- Real-time communication and channel management
- Feed ranking, algorithm execution, and content scoring
- Quality assurance and integration coverage
### Key Modules
- `code-dream-preview.test`
- `daydream-engin-routes.test`
- `dream-bar-context.test`
- `dream-continuity-spine.test`
- `dream-effects.test`
- `dream-intent-bus.test`
- `dream-os-bus.test`
- `dream-state.test`
- `dream-window-system.test`
- `dreamdm-bar-intent.test`
- `dreamdm-bar-interactions.test`
- `dreamdm-bar-wild.test`
### Architectural Relationships
- Depends on **Agents & Workflow**
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **dr-eams**
- Depends on **Dreamr — Human Media**
- Depends on **Dreams (Widgets / Windows / Surfaces)**
- Depends on **optimizer**
- Depends on **The Engins**
- Depends on **The Marketplace**
- Depends on **The Shop**
- Depends on **User-Facing Modularity**
- Integrates with the Dual Runtime layer for execution orchestration
- Consumes core backend services and database abstractions
- Orchestrated by agent workflows and automation pipelines
- Depends on Agents & Workflow
- Depends on Backend, System, Core & CoreSurfaces
- Depends on dr-eams
- Depends on Dreamr — Human Media
#### File Structure
```text
├── playwright.config.ts
├── tests
│   ├── Agents-MUST-READ-ARCHITECTURE.md
│   ├── DUALSENSE_TEST_PLAN.md
│   ├── activity-first-protocol.test.ts
│   ├── activity-revenue-split.test.ts
│   ├── admin-lockout.test.ts
│   ├── admin-upgrade-readiness.test.ts
│   ├── agent-bus-consensus.test.ts
│   ├── ai-edit-engine.test.ts
│   ├── api-route-body-guard.test.ts
│   ├── asset-optimizer.test.ts
│   ├── auth-providers-route.test.ts
│   ├── auth-update-password-page.test.ts
│   ├── authenticated-ui-shells.test.ts
│   ├── babylon-optimizero.test.ts
│   ├── babylon-webgpu-engine.test.ts
│   ├── bar-hide-preserves-both-runtimes.test.ts
│   ├── boogie-policy-module.test.ts
│   ├── boogieman.test.ts
│   ├── bot-detector.test.ts
│   ├── branding-logos.test.ts
│   ├── canonical-naming-enforcement.test.ts
│   ├── child-safety.test.ts
│   ├── code-dream-preview.test.ts
│   ├── coercion-table.test.ts
│   ├── collector-extended.test.ts
│   ├── compositeengin-features.test.ts
│   ├── conform-memory-map.test.ts
│   ├── connector-delivery.test.ts
│   ├── connectors.test.ts
│   ├── content-intelligence-routes.test.ts
│   ├── content-publish-intent.test.ts
│   ├── contentengin
│   │   ├── contentengin-api.test.ts
│   │   ├── contentengin-export.test.ts
│   │   ├── contentengin-grammars.test.ts
│   │   ├── contentengin-recipes.test.ts
│   │   ├── contentengin-rigging.test.ts
│   │   └── contentengin-validation.test.ts
│   ├── contentengin-features.test.ts
│   ├── contextual-home.test.ts
│   ├── creative-optimizero.test.ts
│   ├── data-transform-extended.test.ts
│   ├── data-transform.test.ts
│   ├── daydream-engin-routes.test.ts
│   ├── decide-bar-release.test.ts
│   ├── dev-bypass.test.ts
│   ├── diff-viewer.test.ts
│   ├── dr-eams-code-assist.test.ts
│   ├── dr-eams-search-bar.test.ts
│   ├── dream-bar-context.test.ts
│   ├── dream-continuity-spine.test.ts
│   ├── dream-effects.test.ts
│   ├── dream-intent-bus.test.ts
│   ├── dream-os-bus.test.ts
│   ├── dream-state.test.ts
│   ├── dream-window-system.test.ts
│   ├── dreamdm-bar-intent.test.ts
│   ├── dreamdm-bar-interactions.test.ts
│   ├── dreamdm-bar-wild.test.ts
│   ├── dreamdm-draft.test.ts
│   ├── dreamdm-messaging-phase2.test.ts
│   ├── dreamengin-os.test.ts
│   ├── dreamengin-unfakeable-performance-integrity.gate.test.ts
│   ├── dreamnav.tau.test.ts
│   ├── dreamr-algorithm-velocity.test.ts
│   ├── dreamr-algorithm.test.ts
│   ├── dreamr-feed-limits.test.ts
│   ├── dreamr-feed-topics.test.ts
│   ├── dreamr-page-route.test.ts
│   ├── dreamr-swipe-personalization.test.ts
│   ├── dreamr-visibility-cursor.test.ts
│   ├── dreamspace-panel.test.ts
│   ├── drop-target-registry.test.ts
│   ├── dual-runtime-bridge-peer-activity.test.ts
│   ├── durable-bridge.test.ts
│   ├── e2e
│   │   ├── demo.spec.ts
│   │   └── full-coverage.spec.ts
│   ├── edit-profiledream-section7.test.ts
│   ├── engin-capability-targets.test.ts
│   ├── engin-dispatcher-glow.test.ts
│   ├── engin-dispatcher.test.ts
│   ├── engin-hot-runtime-wiring.test.ts
│   ├── engin-runtime-core.test.ts
│   ├── engin-workflow.test.ts
│   ├── enginpipe
│   │   ├── manifest.test.ts
│   │   ├── telemetry.test.ts
│   │   └── tiers.test.ts
│   ├── example.spec.ts
│   ├── export-full-code.test.ts
│   ├── feature-build.test.ts
│   ├── forge-build.test.ts
│   ├── forge-engin.test.ts
│   ├── forge-momentum.test.ts
│   ├── forge-nexus.test.ts
│   ├── forge-rituals.test.ts
│   ├── fusion-cartridges-depth.test.ts
│   ├── fusion-cartridges.test.ts
│   ├── game-controller.test.ts
│   ├── game-engin-ruleset.test.ts
│   ├── game-navigation.test.ts
│   ├── game-performance-baseline.test.ts
│   ├── game-quality-plan.test.ts
│   ├── game-remote-regression.test.ts
│   ├── gameengin-architect.test.ts
│   ├── gameengin-asset-pipeline.test.ts
│   ├── gameengin-cartridges.test.ts
│   ├── gameengin-crash-modal.test.ts
│   ├── gameengin-input-router.test.ts
│   ├── gameengin-loop.test.ts
│   ├── gameengin-power-systems.test.ts
│   ├── gameengin-progression.test.ts
│   ├── gameengin-remote.test.ts
│   ├── gameengin-runtime-upgrade.test.ts
│   ├── gameengin-spec.test.ts
│   ├── games-daydream-page-auth.test.ts
│   ├── god-tier-engine.test.ts
… (106 more files)
```
<details><summary>Testing file index (226 files)</summary>

- `playwright.config.ts` — TypeScript module.
- `tests/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `tests/DUALSENSE_TEST_PLAN.md` — documentation.
- `tests/activity-first-protocol.test.ts` — TypeScript module.
- `tests/activity-revenue-split.test.ts` — TypeScript module.
- `tests/admin-lockout.test.ts` — TypeScript module.
- `tests/admin-upgrade-readiness.test.ts` — TypeScript module.
- `tests/agent-bus-consensus.test.ts` — TypeScript module.
- `tests/ai-edit-engine.test.ts` — TypeScript module.
- `tests/api-route-body-guard.test.ts` — TypeScript module.
- `tests/asset-optimizer.test.ts` — TypeScript module.
- `tests/auth-providers-route.test.ts` — TypeScript module.
- `tests/auth-update-password-page.test.ts` — TypeScript module.
- `tests/authenticated-ui-shells.test.ts` — TypeScript module.
- `tests/babylon-optimizero.test.ts` — TypeScript module.
- `tests/babylon-webgpu-engine.test.ts` — TypeScript module.
- `tests/bar-hide-preserves-both-runtimes.test.ts` — TypeScript module.
- `tests/boogie-policy-module.test.ts` — TypeScript module.
- `tests/boogieman.test.ts` — TypeScript module.
- `tests/bot-detector.test.ts` — TypeScript module.
- `tests/branding-logos.test.ts` — TypeScript module.
- `tests/canonical-naming-enforcement.test.ts` — TypeScript module.
- `tests/child-safety.test.ts` — TypeScript module.
- `tests/code-dream-preview.test.ts` — TypeScript module.
- `tests/coercion-table.test.ts` — TypeScript module.
- `tests/collector-extended.test.ts` — TypeScript module.
- `tests/compositeengin-features.test.ts` — TypeScript module.
- `tests/conform-memory-map.test.ts` — TypeScript module.
- `tests/connector-delivery.test.ts` — TypeScript module.
- `tests/connectors.test.ts` — TypeScript module.
- `tests/content-intelligence-routes.test.ts` — TypeScript module.
- `tests/content-publish-intent.test.ts` — TypeScript module.
- `tests/contentengin-features.test.ts` — TypeScript module.
- `tests/contentengin/contentengin-api.test.ts` — TypeScript module.
- `tests/contentengin/contentengin-export.test.ts` — TypeScript module.
- `tests/contentengin/contentengin-grammars.test.ts` — TypeScript module.
- `tests/contentengin/contentengin-recipes.test.ts` — TypeScript module.
- `tests/contentengin/contentengin-rigging.test.ts` — TypeScript module.
- `tests/contentengin/contentengin-validation.test.ts` — TypeScript module.
- `tests/contextual-home.test.ts` — TypeScript module.
- `tests/creative-optimizero.test.ts` — TypeScript module.
- `tests/data-transform-extended.test.ts` — TypeScript module.
- `tests/data-transform.test.ts` — TypeScript module.
- `tests/daydream-engin-routes.test.ts` — TypeScript module.
- `tests/decide-bar-release.test.ts` — TypeScript module.
- `tests/dev-bypass.test.ts` — TypeScript module.
- `tests/diff-viewer.test.ts` — TypeScript module.
- `tests/dr-eams-code-assist.test.ts` — TypeScript module.
- `tests/dr-eams-search-bar.test.ts` — TypeScript module.
- `tests/dream-bar-context.test.ts` — TypeScript module.
- `tests/dream-continuity-spine.test.ts` — TypeScript module.
- `tests/dream-effects.test.ts` — TypeScript module.
- `tests/dream-intent-bus.test.ts` — TypeScript module.
- `tests/dream-os-bus.test.ts` — TypeScript module.
- `tests/dream-state.test.ts` — TypeScript module.
- `tests/dream-window-system.test.ts` — TypeScript module.
- `tests/dreamdm-bar-intent.test.ts` — TypeScript module.
- `tests/dreamdm-bar-interactions.test.ts` — TypeScript module.
- `tests/dreamdm-bar-wild.test.ts` — TypeScript module.
- `tests/dreamdm-draft.test.ts` — TypeScript module.
- `tests/dreamdm-messaging-phase2.test.ts` — TypeScript module.
- `tests/dreamengin-os.test.ts` — TypeScript module.
- `tests/dreamengin-unfakeable-performance-integrity.gate.test.ts` — TypeScript module.
- `tests/dreamnav.tau.test.ts` — TypeScript module.
- `tests/dreamr-algorithm-velocity.test.ts` — TypeScript module.
- `tests/dreamr-algorithm.test.ts` — TypeScript module.
- `tests/dreamr-feed-limits.test.ts` — TypeScript module.
- `tests/dreamr-feed-topics.test.ts` — TypeScript module.
- `tests/dreamr-page-route.test.ts` — TypeScript module.
- `tests/dreamr-swipe-personalization.test.ts` — TypeScript module.
- `tests/dreamr-visibility-cursor.test.ts` — TypeScript module.
- `tests/dreamspace-panel.test.ts` — TypeScript module.
- `tests/drop-target-registry.test.ts` — TypeScript module.
- `tests/dual-runtime-bridge-peer-activity.test.ts` — TypeScript module.
- `tests/durable-bridge.test.ts` — TypeScript module.
- `tests/e2e/demo.spec.ts` — TypeScript module.
- `tests/e2e/full-coverage.spec.ts` — TypeScript module.
- `tests/edit-profiledream-section7.test.ts` — TypeScript module.
- `tests/engin-capability-targets.test.ts` — TypeScript module.
- `tests/engin-dispatcher-glow.test.ts` — TypeScript module.
- `tests/engin-dispatcher.test.ts` — TypeScript module.
- `tests/engin-hot-runtime-wiring.test.ts` — TypeScript module.
- `tests/engin-runtime-core.test.ts` — TypeScript module.
- `tests/engin-workflow.test.ts` — TypeScript module.
- `tests/enginpipe/manifest.test.ts` — TypeScript module.
- `tests/enginpipe/telemetry.test.ts` — TypeScript module.
- `tests/enginpipe/tiers.test.ts` — TypeScript module.
- `tests/example.spec.ts` — TypeScript module.
- `tests/export-full-code.test.ts` — TypeScript module.
- `tests/feature-build.test.ts` — TypeScript module.
- `tests/forge-build.test.ts` — TypeScript module.
- `tests/forge-engin.test.ts` — TypeScript module.
- `tests/forge-momentum.test.ts` — TypeScript module.
- `tests/forge-nexus.test.ts` — TypeScript module.
- `tests/forge-rituals.test.ts` — TypeScript module.
- `tests/fusion-cartridges-depth.test.ts` — TypeScript module.
- `tests/fusion-cartridges.test.ts` — TypeScript module.
- `tests/game-controller.test.ts` — TypeScript module.
- `tests/game-engin-ruleset.test.ts` — TypeScript module.
- `tests/game-navigation.test.ts` — TypeScript module.
- `tests/game-performance-baseline.test.ts` — TypeScript module.
- `tests/game-quality-plan.test.ts` — TypeScript module.
- `tests/game-remote-regression.test.ts` — TypeScript module.
- `tests/gameengin-architect.test.ts` — TypeScript module.
- `tests/gameengin-asset-pipeline.test.ts` — TypeScript module.
- `tests/gameengin-cartridges.test.ts` — TypeScript module.
- `tests/gameengin-crash-modal.test.ts` — TypeScript module.
- `tests/gameengin-input-router.test.ts` — TypeScript module.
- `tests/gameengin-loop.test.ts` — TypeScript module.
- `tests/gameengin-power-systems.test.ts` — TypeScript module.
- `tests/gameengin-progression.test.ts` — TypeScript module.
- `tests/gameengin-remote.test.ts` — TypeScript module.
- `tests/gameengin-runtime-upgrade.test.ts` — TypeScript module.
- `tests/gameengin-spec.test.ts` — TypeScript module.
- `tests/games-daydream-page-auth.test.ts` — TypeScript module.
- `tests/god-tier-engine.test.ts` — TypeScript module.
- `tests/hero-sprite.test.ts` — TypeScript module.
- `tests/home-feed-home.test.ts` — TypeScript module.
- `tests/homedream-page-auth.test.ts` — TypeScript module.
- `tests/i-engine-runtime.test.ts` — TypeScript module.
- `tests/icons.test.ts` — TypeScript module.
- `tests/idari-admin-guard.test.ts` — TypeScript module.
- `tests/idari-observability-loop.test.ts` — TypeScript module.
- `tests/idari-patch-plan.test.ts` — TypeScript module.
- `tests/instance-manager.test.ts` — TypeScript module.
- `tests/integration-wiring.test.ts` — TypeScript module.
- `tests/is-auth-related-error.test.ts` — TypeScript module.
- `tests/journey-insights.test.ts` — TypeScript module.
- `tests/journey.test.ts` — TypeScript module.
- `tests/lab-dream-split.test.ts` — TypeScript module.
- `tests/lab-section-12-spec.test.ts` — TypeScript module.
- `tests/landing-calibration.test.ts` — TypeScript module.
- `tests/landing-mission-link.test.ts` — TypeScript module.
- `tests/ledger-media.test.ts` — TypeScript module.
- `tests/live-feed.test.ts` — TypeScript module.
- `tests/madmaxi-accessibility-tuning.test.ts` — TypeScript module.
- `tests/madmaxi-authored-levels.test.ts` — TypeScript module.
- `tests/madmaxi-mechanics.test.ts` — TypeScript module.
- `tests/mobile-game-controls.test.ts` — TypeScript module.
- `tests/modular-os-stores.test.ts` — TypeScript module.
- `tests/module-registry.test.ts` — TypeScript module.
- `tests/music-starmaker-section10.test.ts` — TypeScript module.
- `tests/namespace-isolation.test.ts` — TypeScript module.
- `tests/navigation/manifold-physics.spec.ts` — TypeScript module.
- `tests/navigation/navigation.spec.ts` — TypeScript module.
- `tests/navigation/quaternion.spec.ts` — TypeScript module.
- `tests/neural-seam-flow.test.ts` — TypeScript module.
- `tests/notifications.test.ts` — TypeScript module.
- `tests/offline-queue.test.ts` — TypeScript module.
- `tests/optimizer.test.ts` — TypeScript module.
- `tests/orphan-wire-script.test.ts` — TypeScript module.
- `tests/os-subsystem-manifest.test.ts` — TypeScript module.
- `tests/page-surface-wiring.test.ts` — TypeScript module.
- `tests/phase6-privacy-idari.test.ts` — TypeScript module.
- `tests/phase7-naming.test.ts` — TypeScript module.
- `tests/phase8a.test.ts` — TypeScript module.
- `tests/phase8b-dream-windows.test.ts` — TypeScript module.
- `tests/phase8e-orders.test.ts` — TypeScript module.
- `tests/phase8e-shop-marketplace.test.ts` — TypeScript module.
- `tests/phase8f-daydream-activation.test.ts` — TypeScript module.
- `tests/phase8f-daydream-network.test.ts` — TypeScript module.
- `tests/phase8g-dual-runtime-persistence.test.ts` — TypeScript module.
- `tests/phase8h-triad-consensus.test.ts` — TypeScript module.
- `tests/phase8i-settings-persistence.test.ts` — TypeScript module.
- `tests/phase9-adaptive-quality.test.ts` — TypeScript module.
- `tests/phase9-cross-post.test.ts` — TypeScript module.
- `tests/phase9-drag-drop.test.ts` — TypeScript module.
- `tests/phase9-hashtags.test.ts` — TypeScript module.
- `tests/phase9-notifications.test.ts` — TypeScript module.
- `tests/phase9-offline-cache.test.ts` — TypeScript module.
- `tests/phase9-scene-state.test.ts` — TypeScript module.
- `tests/phase9-touch-gestures.test.ts` — TypeScript module.
- `tests/platform-utils.test.ts` — TypeScript module.
- `tests/post-media.test.ts` — TypeScript module.
- `tests/post-view-counting.test.ts` — TypeScript module.
- `tests/product-law-principle10-alignment.test.ts` — TypeScript module.
- `tests/profile-avatar-edit-entrypoints.test.ts` — TypeScript module.
- `tests/rate-limiting.test.ts` — TypeScript module.
- `tests/readme-autosync.test.ts` — TypeScript module.
- `tests/readme-homedream-system.test.ts` — TypeScript module.
- `tests/readme-section13-code-codeengin.test.ts` — TypeScript module.
- `tests/readme-section6-homedream.test.ts` — TypeScript module.
- `tests/report-driven-game-agent.test.ts` — TypeScript module.
- `tests/repository-state-analysis-section.test.ts` — TypeScript module.
- `tests/responsive.test.ts` — TypeScript module.
- `tests/rss-feed.test.ts` — TypeScript module.
- `tests/runtime-channel.test.ts` — TypeScript module.
- `tests/runtime-container.test.ts` — TypeScript module.
- `tests/runtime-viewport.test.ts` — TypeScript module.
- `tests/runtime-wiring.test.ts` — TypeScript module.
- `tests/safe-get-user.test.ts` — TypeScript module.
- `tests/seam-clipboard.test.ts` — TypeScript module.
- `tests/session-continuity.test.ts` — TypeScript module.
- `tests/session-pattern-engine.test.ts` — TypeScript module.
- `tests/setup-env.ts` — TypeScript module.
- `tests/shell-cartridge-wiring.test.ts` — TypeScript module.
- `tests/skip-credits.test.ts` — TypeScript module.
- `tests/social-feed.test.ts` — TypeScript module.
- `tests/social-platforms.test.ts` — TypeScript module.
- `tests/spec35-vm-bus-events.test.ts` — TypeScript module.
- `tests/spec36-bot-detection.test.ts` — TypeScript module.
- `tests/spec37-torridity.test.ts` — TypeScript module.
- `tests/spec38-collaboration.test.ts` — TypeScript module.
- `tests/spec41-engine-builder.test.ts` — TypeScript module.
- `tests/starmaker-music.test.ts` — TypeScript module.
- `tests/structure-ledger.test.ts` — TypeScript module.
- `tests/supabase-config.test.ts` — TypeScript module.
- `tests/swap-manager-extended.test.ts` — TypeScript module.
- `tests/swipe-calibration.test.ts` — TypeScript module.
- `tests/tech-foundation.test.ts` — TypeScript module.
- `tests/torridity-ledger.test.ts` — TypeScript module.
- `tests/universal-asset-registry.test.ts` — TypeScript module.
- `tests/universal-engine.test.ts` — TypeScript module.
- `tests/universal-visual-modularity.test.ts` — TypeScript module.
- `tests/update-readme-current-status.test.ts` — TypeScript module.
- `tests/user-sim.test.ts` — TypeScript module.
- `tests/utils-extended.test.ts` — TypeScript module.
- `tests/utils-supabase-server.test.ts` — TypeScript module.
- `tests/v2-readiness.test.ts` — TypeScript module.
- `tests/view-profile-public-view-controls.test.ts` — TypeScript module.
- `tests/warp-engine.test.ts` — TypeScript module.
- `tests/wasm-gpu-vm.test.ts` — TypeScript module.
- `tests/webgpu-director.test.ts` — TypeScript module.
- `tests/widget-install-flow.test.ts` — TypeScript module.
- `tests/youtube-provider.test.ts` — TypeScript module.
- `vitest.config.ts` — TypeScript module.

</details>

## Getting Started
Getting Started provides shared infrastructure used across the platform.
### Architectural Relationships
- Self-contained — no detected cross-subsystem imports
#### File Structure
```text
├── .env.example
├── .env.local.example
└── README.md
```
<details><summary>Getting Started file index (3 files)</summary>

- `.env.example` — project file.
- `.env.local.example` — project file.
- `README.md` — documentation.

</details>

## Environment Variables
Environment Variables is a full-stack subsystem that owns both React surfaces and API handlers. It depends on Backend, System, Core & CoreSurfaces, dr-eams, Dreamr — Human Media.
### Responsibilities
- API surface: /api/account, /api/activity, /api/admin, /api/ads, …
- Renders POST, POST, GET, POST, POST, POST, +155 more
- AI model integration and inference routing
- Authentication, session, and access control
- Real-time communication and channel management
- Feed ranking, algorithm execution, and content scoring
- Asset storage, upload pipelines, and CDN management
### Key Modules
- `DELETE`
- `GET`
- `PATCH`
- `POST`
- `PUT`
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **dr-eams**
- Depends on **Dreamr — Human Media**
- Depends on **Dreams (Widgets / Windows / Surfaces)**
- Depends on **The Engins**
- Depends on **The Marketplace**
- Depends on **The Shop**
- Integrates with the Dual Runtime layer for execution orchestration
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
- Depends on dr-eams
- Depends on Dreamr — Human Media
- Depends on Dreams (Widgets / Windows / Surfaces)
### Public Surfaces
**API Endpoints:**
- `/api/account/delete-data` `[POST]`
- `/api/account/delete-dream` `[POST]`
- `/api/account/export-data` `[GET]`
- `/api/activity/track` `[POST]`
- `/api/admin/ai-chat` `[POST]`
- `/api/admin/ai-request` `[POST]`
- `/api/admin/child-safety` `[GET, POST]`
- `/api/admin/code-files` `[POST]`
- `/api/admin/observability` `[GET]`
- `/api/ads/orders` `[POST]`
- `/api/ads/view` `[POST]`
- `/api/agent/session` `[POST]`
- `/api/ai/boogieman` `[POST]`
- `/api/ai/boogieman/child-safety` `[POST]`
- `/api/ai/boogieman/privacy-event` `[POST]`
- `/api/ai/boogieman/status` `[GET]`
- `/api/ai/eams` `[POST]`
- `/api/ai/execute` `[POST]`
- `/api/ai/idari` `[POST]`
- `/api/appeal` `[POST]`
- `/api/auth/logout` `[GET]`
- `/api/auth/providers` `[GET]`
- `/api/blocks` `[GET, POST, DELETE]`
- `/api/ci/run` `[POST]`
- `/api/close-friends` `[GET, POST, DELETE]`
- `/api/codeengin/diagnostics` `[POST]`
- `/api/codeengin/file` `[POST]`
- `/api/codeengin/git` `[POST]`
- `/api/codeengin/run` `[GET, POST]`
- `/api/codeengin/search` `[POST]`
- `/api/codeengin/upload` `[POST]`
- `/api/codeengin/workspace` `[GET, POST]`
- `/api/comments` `[GET, POST, DELETE]`
- `/api/connectors/[provider]/connect` `[POST]`
- `/api/connectors/[provider]/disconnect` `[DELETE]`
- `/api/connectors/[provider]/items` `[GET]`
- `/api/connectors/[provider]/sync` `[POST]`
- `/api/connectors/[provider]/verify` `[GET]`
- `/api/connectors/cron` `[GET]`
- `/api/connectors/instagram/oauth/callback` `[GET]`
- `/api/connectors/instagram/oauth/start` `[GET]`
- `/api/connectors/status` `[GET]`
- `/api/connectors/webhooks/[provider]` `[GET, POST]`
- `/api/connectors/youtube/oauth/callback` `[GET]`
- `/api/connectors/youtube/oauth/start` `[GET]`
- `/api/content/generative-fill` `[POST]`
- `/api/content/intelligence` `[POST]`
- `/api/content/transcribe` `[POST]`
- `/api/content/voice-clone` `[POST]`
- `/api/contentengin/assets/[assetId]` `[GET]`
- `/api/contentengin/assets/[assetId]/export/gameengin` `[POST]`
- `/api/contentengin/jobs` `[GET, POST]`
- `/api/contentengin/jobs/[jobId]` `[GET]`
- `/api/contentengin/upload` `[POST]`
- `/api/dr-eams/hf` `[POST]`
- `/api/dr-eams/run` `[POST]`
- `/api/drafts` `[GET, POST]`
- `/api/drafts/[id]` `[PATCH, DELETE]`
- `/api/dream-windows` `[GET, POST]`
- `/api/dream-windows/[id]` `[GET, PATCH, DELETE]`
- `/api/dreamengin/os-status` `[GET]`
- `/api/dreamr/feed` `[GET]`
- `/api/dreamr/suggested` `[GET]`
- `/api/dreamr/tally` `[POST]`
- `/api/dreams/feed` `[GET, POST]`
- `/api/dreams/instances` `[GET]`
- `/api/dreams/transfer` `[POST]`
- `/api/embed-feed` `[GET]`
- `/api/favorites` `[GET, POST, DELETE]`
- `/api/feed` `[GET]`
- `/api/follow` `[GET, POST, DELETE]`
- `/api/forge/build` `[POST]`
- `/api/gal` `[POST]`
- `/api/game-scores` `[GET, POST, PATCH]`
- `/api/gameengin/crash-report` `[POST]`
- `/api/health` `[GET]`
- `/api/home-layout` `[GET, POST]`
- `/api/journey` `[GET, POST]`
- `/api/lab/benchmarks` `[POST]`
- `/api/ledger-media` `[GET]`
- `/api/likes` `[GET, POST, DELETE]`
- `/api/marketplace` `[GET, POST]`
- `/api/marketplace/request` `[POST]`
- `/api/messages` `[GET, POST]`
- `/api/messages/boards` `[POST]`
- `/api/metrics` `[GET]`
- `/api/metrics/platform` `[GET]`
- `/api/metrics/user/[userId]` `[GET]`
- `/api/music` `[GET, POST, DELETE]`
- `/api/notifications` `[GET, PUT, DELETE]`
- `/api/platform/errors` `[GET, POST]`
- `/api/posts` `[GET, POST]`
- `/api/posts/[id]` `[DELETE]`
- `/api/posts/[id]/save` `[POST, DELETE]`
- `/api/posts/[id]/view` `[POST]`
- `/api/posts/profile/[userId]` `[GET]`
- `/api/profile` `[GET, PUT]`
- `/api/projects` `[GET, POST, PUT, DELETE]`
- `/api/scheduled-posts` `[GET, POST, PUT, DELETE]`
- `/api/security/scan` `[POST]`
- `/api/settings/appearance` `[GET, POST]`
- `/api/settings/feed` `[GET, POST]`
- `/api/settings/notifications` `[GET, POST]`
- `/api/settings/privacy` `[GET, POST]`
- `/api/setup/check` `[GET]`
- `/api/setup/google-oauth` `[GET]`
- `/api/shared-dream/sessions` `[GET, POST]`
- `/api/shared-dream/sessions/[id]` `[GET, PATCH]`
- `/api/shellhub/devices` `[GET]`
- `/api/shop` `[GET, POST, PUT, DELETE]`
- `/api/skip-credits/balance` `[GET]`
- `/api/skip-credits/earn` `[POST]`
- `/api/skip-credits/use` `[POST]`
- `/api/social/ipfs` `[GET, POST]`
- `/api/social/livekit/room` `[GET]`
- `/api/social/livekit/token` `[POST]`
- `/api/social/rss-feed` `[GET]`
- `/api/upload` `[POST]`
- `/api/user/layout` `[GET, POST]`
- `/api/views/track` `[POST]`
- `/api/widgets/feed` `[GET, POST]`
- `/api/widgets/instances` `[GET]`
- `/api/youtube/channel` `[GET]`
- `/api/youtube/discovery` `[GET]`
- `/api/youtube/live-feed` `[GET]`
**Components:**
`DELETE`, `GET`, `PATCH`, `POST`, `PUT`
### Notable Abstractions
- `FileNode` — interface
- `OAuthProvidersResponse` — interface
- `ConnectorStatusEntry` — interface
- `ContentEnginJobType` — type
- `EmbedFeedResponse` — interface
- `UnifiedFeedEntry` — interface
- `ShellHubDevicesResponse` — interface
- `YouTubeChannelResponse` — interface
- `YouTubeDiscoveryResponse` — interface
- `YouTubeLiveFeedResponse` — interface
### Capabilities
- Public contract surface: FileNode, OAuthProvidersResponse, ConnectorStatusEntry, EmbedFeedResponse, UnifiedFeedEntry
- Shared type vocabulary: ContentEnginJobType
- Utility functions: getOAuthProvidersResponse, GET, POST, GET, GET, POST
- Read endpoints for data retrieval
- Write endpoints for mutations
- Delete endpoints for resource lifecycle
#### File Structure
```text
├── .env.example
├── .env.local.example
└── app
    └── api
        ├── account
        │   ├── delete-data
        │   │   └── route.ts
        │   ├── delete-dream
        │   │   └── route.ts
        │   └── export-data
        │       └── route.ts
        ├── activity
        │   └── track
        │       └── route.ts
        ├── admin
        │   ├── ai-chat
        │   │   └── route.ts
        │   ├── ai-request
        │   │   └── route.ts
        │   ├── child-safety
        │   │   └── route.ts
        │   ├── code-files
        │   │   └── route.ts
        │   └── observability
        │       └── route.ts
        ├── ads
        │   ├── orders
        │   │   └── route.ts
        │   └── view
        │       └── route.ts
        ├── agent
        │   └── session
        │       └── route.ts
        ├── ai
        │   ├── boogieman
        │   │   ├── child-safety
        │   │   │   └── route.ts
        │   │   ├── privacy-event
        │   │   │   └── route.ts
        │   │   ├── route.ts
        │   │   └── status
        │   │       └── route.ts
        │   ├── eams
        │   │   └── route.ts
        │   ├── execute
        │   │   └── route.ts
        │   └── idari
        │       └── route.ts
        ├── appeal
        │   └── route.ts
        ├── auth
        │   ├── logout
        │   │   └── route.ts
        │   └── providers
        │       └── route.ts
        ├── blocks
        │   └── route.ts
        ├── ci
        │   └── run
        │       └── route.ts
        ├── close-friends
        │   └── route.ts
        ├── codeengin
        │   ├── diagnostics
        │   │   └── route.ts
        │   ├── file
        │   │   └── route.ts
        │   ├── git
        │   │   └── route.ts
        │   ├── run
        │   │   └── route.ts
        │   ├── search
        │   │   └── route.ts
        │   ├── upload
        │   │   └── route.ts
        │   └── workspace
        │       └── route.ts
        ├── comments
        │   └── route.ts
        ├── connectors
        │   ├── [provider]
        │   │   ├── connect
        │   │   │   └── route.ts
        │   │   ├── disconnect
        │   │   │   └── route.ts
        │   │   ├── items
        │   │   │   └── route.ts
        │   │   ├── sync
        │   │   │   └── route.ts
        │   │   └── verify
        │   │       └── route.ts
        │   ├── cron
        │   │   └── route.ts
        │   ├── instagram
        │   │   └── oauth
        │   │       ├── callback
        │   │       │   └── route.ts
        │   │       └── start
        │   │           └── route.ts
        │   ├── status
        │   │   └── route.ts
        │   ├── webhooks
        │   │   └── [provider]
        │   │       └── route.ts
        │   └── youtube
        │       └── oauth
        │           ├── callback
        │           │   └── route.ts
        │           └── start
        │               └── route.ts
        ├── content
        │   ├── generative-fill
        │   │   └── route.ts
        │   ├── intelligence
        │   │   └── route.ts
        │   ├── transcribe
        │   │   └── route.ts
        │   └── voice-clone
        │       └── route.ts
        ├── contentengin
… (7 more files)
```
<details><summary>Environment Variables file index (127 files)</summary>

- `.env.example` — project file.
- `.env.local.example` — project file.
- `app/api/account/delete-data/route.ts` — API route handler.
- `app/api/account/delete-dream/route.ts` — API route handler.
- `app/api/account/export-data/route.ts` — API route handler.
- `app/api/activity/track/route.ts` — API route handler.
- `app/api/admin/ai-chat/route.ts` — API route handler.
- `app/api/admin/ai-request/route.ts` — API route handler.
- `app/api/admin/child-safety/route.ts` — API route handler.
- `app/api/admin/code-files/route.ts` — API route handler.
- `app/api/admin/observability/route.ts` — API route handler.
- `app/api/ads/orders/route.ts` — API route handler.
- `app/api/ads/view/route.ts` — API route handler.
- `app/api/agent/session/route.ts` — API route handler.
- `app/api/ai/boogieman/child-safety/route.ts` — API route handler.
- `app/api/ai/boogieman/privacy-event/route.ts` — API route handler.
- `app/api/ai/boogieman/route.ts` — API route handler.
- `app/api/ai/boogieman/status/route.ts` — API route handler.
- `app/api/ai/eams/route.ts` — API route handler.
- `app/api/ai/execute/route.ts` — API route handler.
- `app/api/ai/idari/route.ts` — API route handler.
- `app/api/appeal/route.ts` — API route handler.
- `app/api/auth/logout/route.ts` — API route handler.
- `app/api/auth/providers/route.ts` — API route handler.
- `app/api/blocks/route.ts` — API route handler.
- `app/api/ci/run/route.ts` — API route handler.
- `app/api/close-friends/route.ts` — API route handler.
- `app/api/codeengin/diagnostics/route.ts` — API route handler.
- `app/api/codeengin/file/route.ts` — API route handler.
- `app/api/codeengin/git/route.ts` — API route handler.
- `app/api/codeengin/run/route.ts` — API route handler.
- `app/api/codeengin/search/route.ts` — API route handler.
- `app/api/codeengin/upload/route.ts` — API route handler.
- `app/api/codeengin/workspace/route.ts` — API route handler.
- `app/api/comments/route.ts` — API route handler.
- `app/api/connectors/[provider]/connect/route.ts` — API route handler.
- `app/api/connectors/[provider]/disconnect/route.ts` — API route handler.
- `app/api/connectors/[provider]/items/route.ts` — API route handler.
- `app/api/connectors/[provider]/sync/route.ts` — API route handler.
- `app/api/connectors/[provider]/verify/route.ts` — API route handler.
- `app/api/connectors/cron/route.ts` — API route handler.
- `app/api/connectors/instagram/oauth/callback/route.ts` — API route handler.
- `app/api/connectors/instagram/oauth/start/route.ts` — API route handler.
- `app/api/connectors/status/route.ts` — API route handler.
- `app/api/connectors/webhooks/[provider]/route.ts` — API route handler.
- `app/api/connectors/youtube/oauth/callback/route.ts` — API route handler.
- `app/api/connectors/youtube/oauth/start/route.ts` — API route handler.
- `app/api/content/generative-fill/route.ts` — API route handler.
- `app/api/content/intelligence/route.ts` — API route handler.
- `app/api/content/transcribe/route.ts` — API route handler.
- `app/api/content/voice-clone/route.ts` — API route handler.
- `app/api/contentengin/assets/[assetId]/export/gameengin/route.ts` — API route handler.
- `app/api/contentengin/assets/[assetId]/route.ts` — API route handler.
- `app/api/contentengin/jobs/[jobId]/route.ts` — API route handler.
- `app/api/contentengin/jobs/route.ts` — API route handler.
- `app/api/contentengin/upload/route.ts` — API route handler.
- `app/api/dr-eams/hf/route.ts` — API route handler.
- `app/api/dr-eams/run/route.ts` — API route handler.
- `app/api/drafts/[id]/route.ts` — API route handler.
- `app/api/drafts/route.ts` — API route handler.
- `app/api/dream-windows/[id]/route.ts` — API route handler.
- `app/api/dream-windows/route.ts` — API route handler.
- `app/api/dreamengin/os-status/route.ts` — API route handler.
- `app/api/dreamr/feed/route.ts` — API route handler.
- `app/api/dreamr/suggested/route.ts` — API route handler.
- `app/api/dreamr/tally/route.ts` — API route handler.
- `app/api/dreams/feed/route.ts` — API route handler.
- `app/api/dreams/instances/route.ts` — API route handler.
- `app/api/dreams/transfer/route.ts` — API route handler.
- `app/api/embed-feed/route.ts` — API route handler.
- `app/api/favorites/route.ts` — API route handler.
- `app/api/feed/route.ts` — API route handler.
- `app/api/follow/route.ts` — API route handler.
- `app/api/forge/build/route.ts` — API route handler.
- `app/api/gal/route.ts` — API route handler.
- `app/api/game-scores/route.ts` — API route handler.
- `app/api/gameengin/crash-report/route.ts` — API route handler.
- `app/api/health/route.ts` — API route handler.
- `app/api/home-layout/route.ts` — API route handler.
- `app/api/journey/route.ts` — API route handler.
- `app/api/lab/benchmarks/route.ts` — API route handler.
- `app/api/ledger-media/route.ts` — API route handler.
- `app/api/likes/route.ts` — API route handler.
- `app/api/marketplace/request/route.ts` — API route handler.
- `app/api/marketplace/route.ts` — API route handler.
- `app/api/messages/boards/route.ts` — API route handler.
- `app/api/messages/route.ts` — API route handler.
- `app/api/metrics/platform/route.ts` — API route handler.
- `app/api/metrics/route.ts` — API route handler.
- `app/api/metrics/user/[userId]/route.ts` — API route handler.
- `app/api/music/route.ts` — API route handler.
- `app/api/notifications/route.ts` — API route handler.
- `app/api/platform/errors/route.ts` — API route handler.
- `app/api/posts/[id]/route.ts` — API route handler.
- `app/api/posts/[id]/save/route.ts` — API route handler.
- `app/api/posts/[id]/view/route.ts` — API route handler.
- `app/api/posts/profile/[userId]/route.ts` — API route handler.
- `app/api/posts/route.ts` — API route handler.
- `app/api/profile/route.ts` — API route handler.
- `app/api/projects/route.ts` — API route handler.
- `app/api/scheduled-posts/route.ts` — API route handler.
- `app/api/security/scan/route.ts` — API route handler.
- `app/api/settings/appearance/route.ts` — API route handler.
- `app/api/settings/feed/route.ts` — API route handler.
- `app/api/settings/notifications/route.ts` — API route handler.
- `app/api/settings/privacy/route.ts` — API route handler.
- `app/api/setup/check/route.ts` — API route handler.
- `app/api/setup/google-oauth/route.ts` — API route handler.
- `app/api/shared-dream/sessions/[id]/route.ts` — API route handler.
- `app/api/shared-dream/sessions/route.ts` — API route handler.
- `app/api/shellhub/devices/route.ts` — API route handler.
- `app/api/shop/route.ts` — API route handler.
- `app/api/skip-credits/balance/route.ts` — API route handler.
- `app/api/skip-credits/earn/route.ts` — API route handler.
- `app/api/skip-credits/use/route.ts` — API route handler.
- `app/api/social/ipfs/route.ts` — API route handler.
- `app/api/social/livekit/room/route.ts` — API route handler.
- `app/api/social/livekit/token/route.ts` — API route handler.
- `app/api/social/rss-feed/route.ts` — API route handler.
- `app/api/upload/route.ts` — API route handler.
- `app/api/user/layout/route.ts` — API route handler.
- `app/api/views/track/route.ts` — API route handler.
- `app/api/widgets/feed/route.ts` — API route handler.
- `app/api/widgets/instances/route.ts` — API route handler.
- `app/api/youtube/channel/route.ts` — API route handler.
- `app/api/youtube/discovery/route.ts` — API route handler.
- `app/api/youtube/live-feed/route.ts` — API route handler.

</details>

## Contributing
Contributing provides shared infrastructure used across the platform. It depends on Backend, System, Core & CoreSurfaces.
### Responsibilities
- Runtime orchestration and engin lifecycle management
- Database schema ownership and data persistence
- Feed ranking, algorithm execution, and content scoring
- Quality assurance and integration coverage
- Infrastructure provisioning and operational observability
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
### Notable Abstractions
- `DreamDocSearchResult` — interface
- `SearchDreamDocsOptions` — interface
- `DreamDocSearchResult` — interface
- `SearchDreamDocsOptions` — interface
### Capabilities
- Public contract surface: DreamDocSearchResult, SearchDreamDocsOptions, DreamDocSearchResult, SearchDreamDocsOptions
- Utility functions: embedDocSection, searchDreamDocs, embedDocSection, searchDreamDocs
#### File Structure
```text
├── .github
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── actions
│   │   ├── resilient-engine
│   │   │   └── action.yml
│   │   └── setup-node
│   │       └── action.yml
│   ├── agents
│   │   ├── Spec-Engin HyperSICC.agent.md
│   │   ├── dreamengin.agent.md
│   │   ├── error-tracker.agent.md
│   │   ├── gameengin-ai-agent.yml
│   │   ├── gameengin.md
│   │   ├── humanAI.agent.md
│   │   ├── idari.agent.md
│   │   ├── my-agent.agent.md
│   │   ├── newagent.agent.md
│   │   └── videogameAi.md
│   ├── copilot-instructions.md
│   ├── issue-triage
│   │   ├── issue-552.md
│   │   ├── issue-556.md
│   │   ├── issue-560.md
│   │   ├── issue-565.md
│   │   ├── issue-571.md
│   │   ├── issue-573.md
│   │   ├── issue-600.md
│   │   ├── issue-601.md
│   │   ├── issue-602.md
│   │   ├── issue-603.md
│   │   ├── issue-604.md
│   │   ├── issue-605.md
│   │   ├── issue-606.md
│   │   ├── issue-607.md
│   │   ├── issue-608.md
│   │   ├── issue-609.md
│   │   ├── issue-610.md
│   │   ├── issue-611.md
│   │   ├── issue-612.md
│   │   ├── issue-613.md
│   │   ├── issue-617.md
│   │   ├── issue-620.md
│   │   ├── issue-621.md
│   │   ├── issue-622.md
│   │   ├── issue-623.md
│   │   ├── issue-647.md
│   │   ├── issue-753.md
│   │   └── issue-754.md
│   ├── pull_request_template.md
│   ├── ruleset
│   │   ├── autofixvercelbuild.yml
│   │   ├── bot-pr-automerge.yml
│   │   ├── bouncer.yml
│   │   ├── copilot-setup-steps.yml
│   │   ├── daydream-all.yml
│   │   ├── daydream-brand-engin.yml
│   │   ├── daydream-code-engin.yml
│   │   ├── daydream-create-engin.yml
│   │   ├── daydream-engin-build-cycle.yml
│   │   ├── daydream-engin-sicc-refinement.yml
│   │   ├── daydream-games-engin.yml
│   │   ├── daydream-lab-engin.yml
│   │   ├── daydream-music-engin.yml
│   │   ├── db-extension-audit.yml
│   │   ├── db-extension-check.yml
│   │   ├── deploy-artifact.yml
│   │   ├── docs-auto-update.yml
│   │   ├── dreamengin-preflight.yml
│   │   ├── elite-gameengin-evolution.yml
│   │   ├── engin-all.yml
│   │   ├── exportrepo.yml
│   │   ├── game-engin-patrol.yml
│   │   ├── game-library-research.yml
│   │   ├── gameengin-ai-agent.yml
│   │   ├── gameengin-artisan.yml
│   │   ├── gameengin-maestro.yml
│   │   ├── gameengin-mechanic.yml
│   │   ├── gameengin-prophet.yml
│   │   ├── gameengin-upgrader.yml
│   │   ├── gameengin-writer.yml
│   │   ├── games-library-ai-agent.yml
│   │   ├── garbageman.yml
│   │   ├── generatesupabasetypes.yml
│   │   ├── github-actions.yml
│   │   ├── humanai-army-audit.yml
│   │   ├── humanai-audit.yml
│   │   ├── idari-daily.yml
│   │   ├── issue-bot.yml
│   │   ├── mobile-nextgen-spec-evolution.yml
│   │   ├── mobile-ps5-spec-evolution.yml
│   │   ├── neural-decision-engine.yml
│   │   ├── optimize-dreamengin.yml
│   │   ├── portfolio-optimization.yml
│   │   ├── preflight.yml
│   │   ├── print-codebase.yml
│   │   ├── readme-autosync.yml
│   │   ├── refreshlock.yml
│   │   ├── repo-snapshot.yml
│   │   ├── report-driven-coding-agent.yml
│   │   ├── root-hygiene.yml
│   │   ├── spec-engin-ai-agent.yml
│   │   ├── sql-migration-guard.yml
│   │   ├── sync-build-memory.yml
│   │   ├── update-embed-feed.yml
│   │   ├── update-repo-state.yml
│   │   └── vercel-deploy.yml
│   ├── scripts
│   │   ├── DREAMENGIN_CORE_COMPLETE.md
│   │   ├── DREAMENGIN_CORE_USAGE.md
│   │   ├── ai_implement.py
│   │   ├── ai_neural_decision.py
│   │   ├── ai_propose.py
│   │   ├── ai_report_propose.py
│   │   ├── analyze-repo.js
│   │   ├── assemble_report_context.py
│   │   ├── catalog_games_for_ai.py
│   │   ├── check-root-hygiene.sh
│   │   ├── check_workflow_masking.py
│   │   ├── dreamengin_core.py
│   │   ├── humanai_audit.py
… (167 more files)
```
<details><summary>Contributing file index (287 files)</summary>

- `.github/PULL_REQUEST_TEMPLATE.md` — documentation.
- `.github/actions/resilient-engine/action.yml` — project file.
- `.github/actions/setup-node/action.yml` — project file.
- `.github/agents/Spec-Engin HyperSICC.agent.md` — documentation.
- `.github/agents/dreamengin.agent.md` — documentation.
- `.github/agents/error-tracker.agent.md` — documentation.
- `.github/agents/gameengin-ai-agent.yml` — project file.
- `.github/agents/gameengin.md` — documentation.
- `.github/agents/humanAI.agent.md` — documentation.
- `.github/agents/idari.agent.md` — documentation.
- `.github/agents/my-agent.agent.md` — documentation.
- `.github/agents/newagent.agent.md` — documentation.
- `.github/agents/videogameAi.md` — documentation.
- `.github/copilot-instructions.md` — documentation.
- `.github/issue-triage/issue-552.md` — documentation.
- `.github/issue-triage/issue-556.md` — documentation.
- `.github/issue-triage/issue-560.md` — documentation.
- `.github/issue-triage/issue-565.md` — documentation.
- `.github/issue-triage/issue-571.md` — documentation.
- `.github/issue-triage/issue-573.md` — documentation.
- `.github/issue-triage/issue-600.md` — documentation.
- `.github/issue-triage/issue-601.md` — documentation.
- `.github/issue-triage/issue-602.md` — documentation.
- `.github/issue-triage/issue-603.md` — documentation.
- `.github/issue-triage/issue-604.md` — documentation.
- `.github/issue-triage/issue-605.md` — documentation.
- `.github/issue-triage/issue-606.md` — documentation.
- `.github/issue-triage/issue-607.md` — documentation.
- `.github/issue-triage/issue-608.md` — documentation.
- `.github/issue-triage/issue-609.md` — documentation.
- `.github/issue-triage/issue-610.md` — documentation.
- `.github/issue-triage/issue-611.md` — documentation.
- `.github/issue-triage/issue-612.md` — documentation.
- `.github/issue-triage/issue-613.md` — documentation.
- `.github/issue-triage/issue-617.md` — documentation.
- `.github/issue-triage/issue-620.md` — documentation.
- `.github/issue-triage/issue-621.md` — documentation.
- `.github/issue-triage/issue-622.md` — documentation.
- `.github/issue-triage/issue-623.md` — documentation.
- `.github/issue-triage/issue-647.md` — documentation.
- `.github/issue-triage/issue-753.md` — documentation.
- `.github/issue-triage/issue-754.md` — documentation.
- `.github/pull_request_template.md` — documentation.
- `.github/ruleset/autofixvercelbuild.yml` — project file.
- `.github/ruleset/bot-pr-automerge.yml` — project file.
- `.github/ruleset/bouncer.yml` — project file.
- `.github/ruleset/copilot-setup-steps.yml` — project file.
- `.github/ruleset/daydream-all.yml` — project file.
- `.github/ruleset/daydream-brand-engin.yml` — project file.
- `.github/ruleset/daydream-code-engin.yml` — project file.
- `.github/ruleset/daydream-create-engin.yml` — project file.
- `.github/ruleset/daydream-engin-build-cycle.yml` — project file.
- `.github/ruleset/daydream-engin-sicc-refinement.yml` — project file.
- `.github/ruleset/daydream-games-engin.yml` — project file.
- `.github/ruleset/daydream-lab-engin.yml` — project file.
- `.github/ruleset/daydream-music-engin.yml` — project file.
- `.github/ruleset/db-extension-audit.yml` — project file.
- `.github/ruleset/db-extension-check.yml` — project file.
- `.github/ruleset/deploy-artifact.yml` — project file.
- `.github/ruleset/docs-auto-update.yml` — project file.
- `.github/ruleset/dreamengin-preflight.yml` — project file.
- `.github/ruleset/elite-gameengin-evolution.yml` — project file.
- `.github/ruleset/engin-all.yml` — project file.
- `.github/ruleset/exportrepo.yml` — project file.
- `.github/ruleset/game-engin-patrol.yml` — project file.
- `.github/ruleset/game-library-research.yml` — project file.
- `.github/ruleset/gameengin-ai-agent.yml` — project file.
- `.github/ruleset/gameengin-artisan.yml` — project file.
- `.github/ruleset/gameengin-maestro.yml` — project file.
- `.github/ruleset/gameengin-mechanic.yml` — project file.
- `.github/ruleset/gameengin-prophet.yml` — project file.
- `.github/ruleset/gameengin-upgrader.yml` — project file.
- `.github/ruleset/gameengin-writer.yml` — project file.
- `.github/ruleset/games-library-ai-agent.yml` — project file.
- `.github/ruleset/garbageman.yml` — project file.
- `.github/ruleset/generatesupabasetypes.yml` — project file.
- `.github/ruleset/github-actions.yml` — project file.
- `.github/ruleset/humanai-army-audit.yml` — project file.
- `.github/ruleset/humanai-audit.yml` — project file.
- `.github/ruleset/idari-daily.yml` — project file.
- `.github/ruleset/issue-bot.yml` — project file.
- `.github/ruleset/mobile-nextgen-spec-evolution.yml` — project file.
- `.github/ruleset/mobile-ps5-spec-evolution.yml` — project file.
- `.github/ruleset/neural-decision-engine.yml` — project file.
- `.github/ruleset/optimize-dreamengin.yml` — project file.
- `.github/ruleset/portfolio-optimization.yml` — project file.
- `.github/ruleset/preflight.yml` — project file.
- `.github/ruleset/print-codebase.yml` — project file.
- `.github/ruleset/readme-autosync.yml` — project file.
- `.github/ruleset/refreshlock.yml` — project file.
- `.github/ruleset/repo-snapshot.yml` — project file.
- `.github/ruleset/report-driven-coding-agent.yml` — project file.
- `.github/ruleset/root-hygiene.yml` — project file.
- `.github/ruleset/spec-engin-ai-agent.yml` — project file.
- `.github/ruleset/sql-migration-guard.yml` — project file.
- `.github/ruleset/sync-build-memory.yml` — project file.
- `.github/ruleset/update-embed-feed.yml` — project file.
- `.github/ruleset/update-repo-state.yml` — project file.
- `.github/ruleset/vercel-deploy.yml` — project file.
- `.github/scripts/DREAMENGIN_CORE_COMPLETE.md` — documentation.
- `.github/scripts/DREAMENGIN_CORE_USAGE.md` — documentation.
- `.github/scripts/ai_implement.py` — project file.
- `.github/scripts/ai_neural_decision.py` — project file.
- `.github/scripts/ai_propose.py` — project file.
- `.github/scripts/ai_report_propose.py` — project file.
- `.github/scripts/analyze-repo.js` — TypeScript module.
- `.github/scripts/assemble_report_context.py` — project file.
- `.github/scripts/catalog_games_for_ai.py` — project file.
- `.github/scripts/check-root-hygiene.sh` — project file.
- `.github/scripts/check_workflow_masking.py` — project file.
- `.github/scripts/dreamengin_core.py` — project file.
- `.github/scripts/humanai_audit.py` — project file.
- `.github/scripts/issue-bot.js` — TypeScript module.
- `.github/scripts/run-readme-autosync.mjs` — project file.
- `.github/scripts/scan_dreamengin_context.py` — project file.
- `.github/scripts/scan_gameengin_context.py` — project file.
- `.github/scripts/validate_game_sandbox.py` — project file.
- `.github/scripts/validate_report_agent_spec.py` — project file.
- `.github/workflows/Repo Audit Auto Fix.yml` — project file.
- `.github/workflows/ScanArcCleanup.yml` — project file.
- `.github/workflows/Strict English Codebase Export.yml` — project file.
- `.github/workflows/autofixvercelbuild.yml` — project file.
- `.github/workflows/bot-pr-automerge.yml` — project file.
- `.github/workflows/bouncer.yml` — project file.
- `.github/workflows/cleanup-dead-code.yml` — project file.
- `.github/workflows/codeql.yml` — project file.
- `.github/workflows/copilot-setup-steps.yml` — project file.
- `.github/workflows/daydream-all.yml` — project file.
- `.github/workflows/daydream-brand-engin.yml` — project file.
- `.github/workflows/daydream-code-engin.yml` — project file.
- `.github/workflows/daydream-create-engin.yml` — project file.
- `.github/workflows/daydream-engin-build-cycle.yml` — project file.
- `.github/workflows/daydream-engin-sicc-refinement.yml` — project file.
- `.github/workflows/daydream-games-engin.yml` — project file.
- `.github/workflows/daydream-lab-engin.yml` — project file.
- `.github/workflows/daydream-music-engin.yml` — project file.
- `.github/workflows/db-extension-audit.yml` — project file.
- `.github/workflows/db-extension-check.yml` — project file.
- `.github/workflows/deploy-artifact.yml` — project file.
- `.github/workflows/docs-auto-update.yml` — project file.
- `.github/workflows/dreamengin-preflight.yml` — project file.
- `.github/workflows/elite-gameengin-evolution.yml` — project file.
- `.github/workflows/engin-all.yml` — project file.
- `.github/workflows/export-repo-to-artifacts.yml` — project file.
- `.github/workflows/exportrepo.yml` — project file.
- `.github/workflows/full-audit.yml` — project file.
- `.github/workflows/game-engin-patrol.yml` — project file.
- `.github/workflows/game-library-research.yml` — project file.
- `.github/workflows/gameengin-ai-agent.yml` — project file.
- `.github/workflows/gameengin-artisan.yml` — project file.
- `.github/workflows/gameengin-maestro.yml` — project file.
- `.github/workflows/gameengin-mechanic.yml` — project file.
- `.github/workflows/gameengin-prophet.yml` — project file.
- `.github/workflows/gameengin-upgrader.yml` — project file.
- `.github/workflows/gameengin-writer.yml` — project file.
- `.github/workflows/games-library-ai-agent.yml` — project file.
- `.github/workflows/garbageman.yml` — project file.
- `.github/workflows/generatesupabasetypes.yml` — project file.
- `.github/workflows/github-actions.yml` — project file.
- `.github/workflows/humanai-army-audit.yml` — project file.
- `.github/workflows/humanai-audit.yml` — project file.
- `.github/workflows/idari-daily.yml` — project file.
- `.github/workflows/issue-bot.yml` — project file.
- `.github/workflows/massivejson.yml` — project file.
- `.github/workflows/mobile-nextgen-spec-evolution.yml` — project file.
- `.github/workflows/mobile-ps5-spec-evolution.yml` — project file.
- `.github/workflows/neural_decision_engine.yml` — project file.
- `.github/workflows/optimize-dreamengin.yml` — project file.
- `.github/workflows/orphan-guard.yml` — project file.
- `.github/workflows/portfolio-optimization.yml` — project file.
- `.github/workflows/preflight.yml` — project file.
- `.github/workflows/print-codebase.yml` — project file.
- `.github/workflows/readme-autosync.yml` — project file.
- `.github/workflows/refreshlock.yml` — project file.
- `.github/workflows/registry-sync.yml` — project file.
- `.github/workflows/repo-snapshot.yml` — project file.
- `.github/workflows/report-driven-coding-agent.yml` — project file.
- `.github/workflows/resilient-engine-smoke.yml` — project file.
- `.github/workflows/root-hygiene.yml` — project file.
- `.github/workflows/spec-engin-ai-agent.yml` — project file.
- `.github/workflows/sql-migration-guard.yml` — project file.
- `.github/workflows/sync-build-memory.yml` — project file.
- `.github/workflows/type-audit.yml` — project file.
- `.github/workflows/unzip-fonts.yml` — project file.
- `.github/workflows/update-embed-feed.yml` — project file.
- `.github/workflows/update-repo-state.yml` — project file.
- `.github/workflows/vercel-deploy.yml` — project file.
- `.github/workflows/visual-schematic.yml` — project file.
- `.github/workflows/visual-schematicpages.yml` — project file.
- `AGENTS.md` — documentation.
- `docs/ACTION_AUDIT.md` — documentation.
- `docs/ACTIVITY_FIRST_PROTOCOL.md` — documentation.
- `docs/ADD_WORKFLOW.md` — documentation.
- `docs/AGENT_PLAYBOOK.md` — documentation.
- `docs/AI_MAP.md` — documentation.
- `docs/ARCHITECTURE.md` — documentation.
- `docs/AUTH_SETUP.md` — documentation.
- `docs/AXIOMS.md` — documentation.
- `docs/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `docs/BOOGIEMAN_POLICY.md` — documentation.
- `docs/BUGS.md` — documentation.
- `docs/CHILD_SAFETY_POLICY.md` — documentation.
- `docs/CONNECTORS.md` — documentation.
- `docs/CONNECTOR_MATRIX.md` — documentation.
- `docs/CONSTITUTION.md` — documentation.
- `docs/COPILOT_TOOLKIT.md` — documentation.
- `docs/DREAMGAME_FORMAT.md` — documentation.
- `docs/DR_EAMS.md` — documentation.
- `docs/DUALSENSE_EXAMPLE.md` — documentation.
- `docs/DUALSENSE_INTEGRATION.md` — documentation.
- `docs/ENGIN_RUNTIME.md` — documentation.
- `docs/FEATURE_STATUS.md` — documentation.
- `docs/GENERATION_LAW.md` — documentation.
- `docs/GITHUB_CODING_AGENT.md` — documentation.
- `docs/GOLD_BUTTON_DUAL_RUNTIME.md` — documentation.
- `docs/GOLD_BUTTON_QUICK_REF.md` — documentation.
- `docs/HANDOFF.md` — documentation.
- `docs/IDARI_CONTRACT.md` — documentation.
- `docs/ISSUE_FIXES.md` — documentation.
- `docs/LAW.md` — documentation.
- `docs/MODULARITY_VIOLATION_LOG.md` — documentation.
- `docs/NAMESPACE_PROTOCOL.md` — documentation.
- `docs/NAMING_AUTHORITY.md` — documentation.
- `docs/OBSERVABILITY.md` — documentation.
- `docs/PHASE9_IMPLEMENTATION.md` — documentation.
- `docs/POLICY_TESTS.md` — documentation.
- `docs/PRINCIPLES_UPDATE.md` — documentation.
- `docs/PRODUCT_DEFINITION.md` — documentation.
- `docs/REPO_COMPANION.md` — documentation.
- `docs/REPO_STATE_ANALYZER.md` — documentation.
- `docs/REPO_STRUCTURE_CONTRACT.md` — documentation.
- `docs/REVIEW_QUEUE.md` — documentation.
- `docs/SECURITY.md` — documentation.
- `docs/THEME.md` — documentation.
- `docs/TRIAGE_LOG.md` — documentation.
- `docs/UNIVERSAL_ENGINE.md` — documentation.
- `docs/WASM_GPU_VM_SUMMARY.md` — documentation.
- `docs/WIDGET_SYSTEM_V2.md` — documentation.
- `docs/alignment/DOCS_CHANGE_TRACKER.md` — documentation.
- `docs/alignment/REPO_TO_SPEC.md` — documentation.
- `docs/archive/.gitkeep` — project file.
- `docs/dream-docs/embed.ts` — TypeScript module.
- `docs/dream-docs/index.ts` — TypeScript module.
- `docs/dream-docs/search.ts` — TypeScript module.
- `docs/dreamdm_bar_pass1.md` — documentation.
- `docs/dreamdm_bar_pass2.md` — documentation.
- `docs/dreamdm_messaging_phase2.md` — documentation.
- `docs/dreamengin_phase1.md` — documentation.
- `docs/dreamengin_phase6.md` — documentation.
- `docs/dreamengin_phase8.md` — documentation.
- `docs/engin_workflows.md` — documentation.
- `docs/engineering/guardrails.md` — documentation.
- `docs/enginpipe/README.md` — documentation.
- `docs/guides/GITHUB_PUSH_GUIDE.md` — documentation.
- `docs/guides/README.agent.md` — documentation.
- `docs/icons.md` — documentation.
- `docs/issue-552-readme-section-bot-ai-agent-quick-reference.md` — documentation.
- `docs/issue-556-readme-section-bot-canonical-route-system.md` — documentation.
- `docs/issue-560-readme-section-bot-runtime-model.md` — documentation.
- `docs/issue-565-readme-section-bot-3-os-layer-naming-law-canonic.md` — documentation.
- `docs/issue-571-readme-section-bot-9-daydream-pair-system-6-dayd.md` — documentation.
- `docs/issue-573-readme-section-bot-11-games-gameengin.md` — documentation.
- `docs/issue-600-readme-section-bot-recent-changes.md` — documentation.
- `docs/issue-601-readme-section-bot-repository-state-analysis.md` — documentation.
- `docs/issue-602-readme-section-bot-homedream-system.md` — documentation.
- `docs/issue-603-readme-section-bot-core-surfaces.md` — documentation.
- `docs/issue-604-readme-section-bot-current-implementation-status.md` — documentation.
- `docs/issue-605-readme-section-bot-daydream-surfaces.md` — documentation.
- `docs/issue-606-readme-section-bot-daydream-engin-network-model.md` — documentation.
- `docs/issue-607-readme-section-bot-dreamdmbar-interaction-rail-r.md` — documentation.
- `docs/issue-608-readme-section-bot-1-product-law-16-foundational.md` — documentation.
- `docs/issue-609-readme-section-bot-6-homedream-core-system-priva.md` — documentation.
- `docs/issue-610-readme-section-bot-10-music-starmakerengin.md` — documentation.
- `docs/issue-611-readme-section-bot-12-lab-labengin.md` — documentation.
- `docs/issue-612-readme-section-bot-13-code-codeengin.md` — documentation.
- `docs/issue-613-readme-section-bot-7-edit-profiledream-core-syst.md` — documentation.
- `docs/issue-617-readme-section-bot-8-view-profile-public-shared-.md` — documentation.
- `docs/issue-620-readme-section-bot-what-this-is.md` — documentation.
- `docs/issue-621-readme-section-bot-start-here.md` — documentation.
- `docs/issue-622-readme-section-bot-structure.md` — documentation.
- `docs/issue-623-readme-section-bot-root-rules.md` — documentation.
- `docs/issue-647-readme-section-bot-how-to-regenerate-this-spec.md` — documentation.
- `docs/logs/README_PATCH.md` — documentation.
- `docs/mobile-nextgen-web-gaming-engine-spec.md` — documentation.
- `docs/mobile-ps5-web-gaming-engine-spec.md` — documentation.
- `docs/policy/theboogie.md` — documentation.
- `docs/wasm_gpu_vm_spec.md` — documentation.

</details>

## License
License provides shared infrastructure used across the platform.
### Architectural Relationships
- Self-contained — no detected cross-subsystem imports
#### File Structure
```text
└── LICENSE
```
<details><summary>License file index (1 files)</summary>

- `LICENSE` — project file.

</details>

## HomeDream System

- Canonical Route: `/homedream`
- Runtime implementation paths:
  - `app/homedream/page.tsx`
  - `app/dreamdmbar/_components/DreamBarDataBridge.tsx`

Canonical vocabulary:
- **Surface**
- **Daydream**
- **Engin**
- **Dream Window**
- **Canonical Route**

Runtime rules:
- DreamDMBar persistence is shell-owned.
- Home orchestration is stateful via `DreamSystemContext`.
- Surface regions preserve mounted state while hidden/minimized.

## 6. HomeDream (Core System, Private Operating Surface)

Single tap: Open dual menus.
Double tap: Go Home.
HomeDream is private by default and persistent between sessions.
The surface is centered around a personalized feed.
Core controls include 6 Daydream navigation, Dream Window layout, feed algorithm settings, and posting routes.

---

## 13. Code / CodeEngin

13.1 Code (Side A)

13.2 CodeEngin (Side B)

13.3 Specialized Dream Windows (Examples)

## UNIVERSAL MODULARITY LAW

See `docs/MODULARITY_VIOLATION_LOG.md` for enforcement and audit.
Required drag wrapper primitives: `DraggableModule`, `DreamWindowShell`, `UniversalEditorWrapper`.

No artificial "repurpose before invent" rule.

## Repo Visualizer
Repo Visualizer provides shared infrastructure used across the platform.
### Architectural Relationships
- Self-contained — no detected cross-subsystem imports
#### File Structure
```text
└── repo-visualizer
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── README.md
    ├── analyzer.mjs
    ├── graph-stats.json
    ├── graph.json
    ├── index.html
    └── server.mjs
```
<details><summary>Repo Visualizer file index (7 files)</summary>

- `repo-visualizer/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `repo-visualizer/README.md` — documentation.
- `repo-visualizer/analyzer.mjs` — project file.
- `repo-visualizer/graph-stats.json` — project file.
- `repo-visualizer/graph.json` — project file.
- `repo-visualizer/index.html` — project file.
- `repo-visualizer/server.mjs` — project file.

</details>

## Build Memory
Build Memory provides shared infrastructure used across the platform.
### Architectural Relationships
- Self-contained — no detected cross-subsystem imports
#### File Structure
```text
└── build-memory
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── actions.json
    ├── events.json
    ├── os-architecture-map.md
    ├── registry.json
    ├── routes.json
    ├── schema.json
    ├── typecheck
    │   └── error-files.txt
    └── ui-surfaces.json
```
<details><summary>Build Memory file index (9 files)</summary>

- `build-memory/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `build-memory/actions.json` — project file.
- `build-memory/events.json` — project file.
- `build-memory/os-architecture-map.md` — documentation.
- `build-memory/registry.json` — project file.
- `build-memory/routes.json` — project file.
- `build-memory/schema.json` — project file.
- `build-memory/typecheck/error-files.txt` — project file.
- `build-memory/ui-surfaces.json` — project file.

</details>

## Src
Src provides shared infrastructure used across the platform.
### Key Modules
- `dreamdmbar`
- `dreamr`
- `dreamsurfaces`
- `homedream`
### Architectural Relationships
- Self-contained — no detected cross-subsystem imports
### Notable Abstractions
- `BrainMap` — type
- `CartridgesMap` — type
- `ConnectorsMap` — type
- `DreamdmbarMap` — type
- `DreamrMap` — type
- `DreamsurfacesMap` — type
- `EnginsMap` — type
- `HomedreamMap` — type
- `HooksMap` — type
- `OsArchitectureGraph` — type
- `OsArchitectureMap` — type
- `OsArchitectureStageEntries` — type
### Capabilities
- Shared type vocabulary: BrainMap, CartridgesMap, ConnectorsMap, DreamdmbarMap, DreamrMap
- Utility functions: hydrateEngineRegistry
#### File Structure
```text
└── src
    └── engin
        └── generated
            ├── brain.ts
            ├── cartridges.ts
            ├── connectors.ts
            ├── dreamdmbar.ts
            ├── dreamr.ts
            ├── dreamsurfaces.ts
            ├── engins.ts
            ├── homedream.ts
            ├── hooks.ts
            ├── index.ts
            ├── osArchitectureMap.ts
            ├── personas.ts
            ├── rulesets.ts
            ├── surfaces.ts
            └── systems.ts
```
<details><summary>Src file index (15 files)</summary>

- `src/engin/generated/brain.ts` — TypeScript module.
- `src/engin/generated/cartridges.ts` — TypeScript module.
- `src/engin/generated/connectors.ts` — TypeScript module.
- `src/engin/generated/dreamdmbar.ts` — TypeScript module.
- `src/engin/generated/dreamr.ts` — TypeScript module.
- `src/engin/generated/dreamsurfaces.ts` — TypeScript module.
- `src/engin/generated/engins.ts` — TypeScript module.
- `src/engin/generated/homedream.ts` — TypeScript module.
- `src/engin/generated/hooks.ts` — TypeScript module.
- `src/engin/generated/index.ts` — TypeScript module.
- `src/engin/generated/osArchitectureMap.ts` — TypeScript module.
- `src/engin/generated/personas.ts` — TypeScript module.
- `src/engin/generated/rulesets.ts` — TypeScript module.
- `src/engin/generated/surfaces.ts` — TypeScript module.
- `src/engin/generated/systems.ts` — TypeScript module.

</details>

## Api
Auto-synced from `api/**` using repository introspection.
- Files tracked: **113**
- API routes discovered: none
- App pages discovered: none
- Components/modules discovered: none
#### Api file structure
```text
└── api
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── account
    │   ├── delete-data
    │   │   └── route.ts
    │   ├── delete-dream
    │   │   └── route.ts
    │   └── export-data
    │       └── route.ts
    ├── activity
    │   └── track
    │       └── route.ts
    ├── admin
    │   ├── ai-chat
    │   │   └── route.ts
    │   ├── ai-request
    │   │   └── route.ts
    │   ├── child-safety
    │   │   └── route.ts
    │   ├── code-files
    │   │   └── route.ts
    │   └── observability
    │       └── route.ts
    ├── ads
    │   ├── orders
    │   │   └── route.ts
    │   └── view
    │       └── route.ts
    ├── agent
    │   └── session
    │       └── route.ts
    ├── ai
    │   ├── boogieman
    │   │   ├── child-safety
    │   │   │   └── route.ts
    │   │   ├── privacy-event
    │   │   │   └── route.ts
    │   │   ├── route.ts
    │   │   └── status
    │   │       └── route.ts
    │   ├── eams
    │   │   └── route.ts
    │   ├── execute
    │   │   └── route.ts
    │   └── idari
    │       └── route.ts
    ├── appeal
    │   └── route.ts
    ├── auth
    │   ├── logout
    │   │   └── route.ts
    │   └── providers
    │       └── route.ts
    ├── blocks
    │   └── route.ts
    ├── ci
    │   └── run
    │       └── route.ts
    ├── close-friends
    │   └── route.ts
    ├── comments
    │   └── route.ts
    ├── connectors
    │   ├── [provider]
    │   │   ├── connect
    │   │   │   └── route.ts
    │   │   ├── disconnect
    │   │   │   └── route.ts
    │   │   ├── items
    │   │   │   └── route.ts
    │   │   ├── sync
    │   │   │   └── route.ts
    │   │   └── verify
    │   │       └── route.ts
    │   ├── cron
    │   │   └── route.ts
    │   ├── instagram
    │   │   └── oauth
    │   │       ├── callback
    │   │       │   └── route.ts
    │   │       └── start
    │   │           └── route.ts
    │   ├── status
    │   │   └── route.ts
    │   ├── webhooks
    │   │   └── [provider]
    │   │       └── route.ts
    │   └── youtube
    │       └── oauth
    │           ├── callback
    │           │   └── route.ts
    │           └── start
    │               └── route.ts
    ├── content
    │   ├── generative-fill
    │   │   └── route.ts
    │   ├── intelligence
    │   │   └── route.ts
    │   ├── transcribe
    │   │   └── route.ts
    │   └── voice-clone
    │       └── route.ts
    ├── dr-eams
    │   ├── hf
    │   │   └── route.ts
    │   └── run
    │       └── route.ts
    ├── drafts
    │   ├── [id]
    │   │   └── route.ts
    │   └── route.ts
    ├── dream-windows
    │   ├── [id]
    │   │   └── route.ts
    │   └── route.ts
    ├── dreamengin
    │   └── os-status
    │       └── route.ts
    ├── dreamr
    │   ├── feed
```
<details><summary>Api file index (113 files)</summary>

- `api/Agents-MUST-READ-ARCHITECTURE.md` — documentation file.
- `api/account/delete-data/route.ts` — API route handler.
- `api/account/delete-dream/route.ts` — API route handler.
- `api/account/export-data/route.ts` — API route handler.
- `api/activity/track/route.ts` — API route handler.
- `api/admin/ai-chat/route.ts` — API route handler.
- `api/admin/ai-request/route.ts` — API route handler.
- `api/admin/child-safety/route.ts` — API route handler.
- `api/admin/code-files/route.ts` — API route handler.
- `api/admin/observability/route.ts` — API route handler.
- `api/ads/orders/route.ts` — API route handler.
- `api/ads/view/route.ts` — API route handler.
- `api/agent/session/route.ts` — API route handler.
- `api/ai/boogieman/child-safety/route.ts` — API route handler.
- `api/ai/boogieman/privacy-event/route.ts` — API route handler.
- `api/ai/boogieman/route.ts` — API route handler.
- `api/ai/boogieman/status/route.ts` — API route handler.
- `api/ai/eams/route.ts` — API route handler.
- `api/ai/execute/route.ts` — API route handler.
- `api/ai/idari/route.ts` — API route handler.
- `api/appeal/route.ts` — API route handler.
- `api/auth/logout/route.ts` — API route handler.
- `api/auth/providers/route.ts` — API route handler.
- `api/blocks/route.ts` — API route handler.
- `api/ci/run/route.ts` — API route handler.
- `api/close-friends/route.ts` — API route handler.
- `api/comments/route.ts` — API route handler.
- `api/connectors/[provider]/connect/route.ts` — API route handler.
- `api/connectors/[provider]/disconnect/route.ts` — API route handler.
- `api/connectors/[provider]/items/route.ts` — API route handler.
- `api/connectors/[provider]/sync/route.ts` — API route handler.
- `api/connectors/[provider]/verify/route.ts` — API route handler.
- `api/connectors/cron/route.ts` — API route handler.
- `api/connectors/instagram/oauth/callback/route.ts` — API route handler.
- `api/connectors/instagram/oauth/start/route.ts` — API route handler.
- `api/connectors/status/route.ts` — API route handler.
- `api/connectors/webhooks/[provider]/route.ts` — API route handler.
- `api/connectors/youtube/oauth/callback/route.ts` — API route handler.
- `api/connectors/youtube/oauth/start/route.ts` — API route handler.
- `api/content/generative-fill/route.ts` — API route handler.
- `api/content/intelligence/route.ts` — API route handler.
- `api/content/transcribe/route.ts` — API route handler.
- `api/content/voice-clone/route.ts` — API route handler.
- `api/dr-eams/hf/route.ts` — API route handler.
- `api/dr-eams/run/route.ts` — API route handler.
- `api/drafts/[id]/route.ts` — API route handler.
- `api/drafts/route.ts` — API route handler.
- `api/dream-windows/[id]/route.ts` — API route handler.
- `api/dream-windows/route.ts` — API route handler.
- `api/dreamengin/os-status/route.ts` — API route handler.
- `api/dreamr/feed/route.ts` — API route handler.
- `api/dreamr/suggested/route.ts` — API route handler.
- `api/dreamr/tally/route.ts` — API route handler.
- `api/dreams/feed/route.ts` — API route handler.
- `api/dreams/instances/route.ts` — API route handler.
- `api/dreams/transfer/route.ts` — API route handler.
- `api/embed-feed/route.ts` — API route handler.
- `api/favorites/route.ts` — API route handler.
- `api/feed/route.ts` — API route handler.
- `api/follow/route.ts` — API route handler.
- `api/gal/route.ts` — API route handler.
- `api/game-scores/route.ts` — API route handler.
- `api/gameengin/crash-report/route.ts` — API route handler.
- `api/health/route.ts` — API route handler.
- `api/home-layout/route.ts` — API route handler.
- `api/journey/route.ts` — API route handler.
- `api/lab/benchmarks/route.ts` — API route handler.
- `api/ledger-media/route.ts` — API route handler.
- `api/likes/route.ts` — API route handler.
- `api/marketplace/request/route.ts` — API route handler.
- `api/marketplace/route.ts` — API route handler.
- `api/messages/boards/route.ts` — API route handler.
- `api/messages/route.ts` — API route handler.
- `api/metrics/platform/route.ts` — API route handler.
- `api/metrics/route.ts` — API route handler.
- `api/metrics/user/[userId]/route.ts` — API route handler.
- `api/music/route.ts` — API route handler.
- `api/notifications/route.ts` — API route handler.
- `api/platform/errors/route.ts` — API route handler.
- `api/posts/[id]/route.ts` — API route handler.
- `api/posts/[id]/save/route.ts` — API route handler.
- `api/posts/[id]/view/route.ts` — API route handler.
- `api/posts/profile/[userId]/route.ts` — API route handler.
- `api/posts/route.ts` — API route handler.
- `api/profile/route.ts` — API route handler.
- `api/projects/route.ts` — API route handler.
- `api/scheduled-posts/route.ts` — API route handler.
- `api/security/scan/route.ts` — API route handler.
- `api/settings/appearance/route.ts` — API route handler.
- `api/settings/feed/route.ts` — API route handler.
- `api/settings/notifications/route.ts` — API route handler.
- `api/settings/privacy/route.ts` — API route handler.
- `api/setup/check/route.ts` — API route handler.
- `api/setup/google-oauth/route.ts` — API route handler.
- `api/shared-dream/sessions/[id]/route.ts` — API route handler.
- `api/shared-dream/sessions/route.ts` — API route handler.
- `api/shellhub/devices/route.ts` — API route handler.
- `api/shop/route.ts` — API route handler.
- `api/skip-credits/balance/route.ts` — API route handler.
- `api/skip-credits/earn/route.ts` — API route handler.
- `api/skip-credits/use/route.ts` — API route handler.
- `api/social/ipfs/route.ts` — API route handler.
- `api/social/livekit/room/route.ts` — API route handler.
- `api/social/livekit/token/route.ts` — API route handler.
- `api/social/rss-feed/route.ts` — API route handler.
- `api/upload/route.ts` — API route handler.
- `api/user/layout/route.ts` — API route handler.
- `api/views/track/route.ts` — API route handler.
- `api/widgets/feed/route.ts` — API route handler.
- `api/widgets/instances/route.ts` — API route handler.
- `api/youtube/channel/route.ts` — API route handler.
- `api/youtube/discovery/route.ts` — API route handler.
- `api/youtube/live-feed/route.ts` — API route handler.

</details>

## Assembly
Assembly provides shared infrastructure used across the platform.
### Architectural Relationships
- Self-contained — no detected cross-subsystem imports
### Capabilities
- Utility functions: enqueue, dequeue, reset, tickPhysicsSIMD, processAudioBufferSIMD, hashBytesFNV1A
#### File Structure
```text
└── assembly
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── bus.ts
    ├── index.ts
    └── mad-maxi-player.ts
```
<details><summary>Assembly file index (4 files)</summary>

- `assembly/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `assembly/bus.ts` — TypeScript module.
- `assembly/index.ts` — TypeScript module.
- `assembly/mad-maxi-player.ts` — TypeScript module.

</details>

## Config
Config provides shared infrastructure used across the platform.
### Responsibilities
- Quality assurance and integration coverage
### Architectural Relationships
- Self-contained — no detected cross-subsystem imports
#### File Structure
```text
└── config
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── advanced-game-targets.json
    ├── optimizer.yaml
    └── ui-ux-spec.yaml
```
<details><summary>Config file index (4 files)</summary>

- `config/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `config/advanced-game-targets.json` — project file.
- `config/optimizer.yaml` — project file.
- `config/ui-ux-spec.yaml` — project file.

</details>

## Dr Eams
Dr Eams provides shared infrastructure used across the platform. Core abstractions are encapsulated in CIC, DrEamsAnimator. It depends on Backend, System, Core & CoreSurfaces.
### Responsibilities
- Core abstractions: CIC, DrEamsAnimator
- AI model integration and inference routing
### Key Modules
- `CIC`
- `DrEamsAnimator`
- `dreams`
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Consumes core backend services and database abstractions
- Depends on Backend, System, Core & CoreSurfaces
### Notable Abstractions
- `CIC` — class
- `BoogiePolicyVersion` — type
- `EnforcementAction` — type
- `EnforcementScope` — type
- `StrikeSeverityLevel` — type
- `RuleCode` — type
- `BoogieEnforceInput` — interface
- `AiAgent` — type
- `AiMessage` — interface
- `AiResponse` — interface
- `GroqRole` — type
- `GroqMessage` — interface
### Capabilities
- Public contract surface: BoogieEnforceInput, AiMessage, AiResponse, GroqMessage, GroqChatOptions
- Shared type vocabulary: BoogiePolicyVersion, EnforcementAction, EnforcementScope, StrikeSeverityLevel, RuleCode
- Utility functions: writeAuditLog, detectSignals, verifyIntents, redactSecrets, computeRiskScore, selectAction
#### File Structure
```text
└── dr-eams
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── ai
    │   ├── CIC.ts
    │   ├── audit.ts
    │   ├── boogie-policy.ts
    │   ├── boogie-verifier.ts
    │   ├── boogieman.ts
    │   ├── capability-gate.ts
    │   ├── client.ts
    │   ├── confirm-token.ts
    │   ├── confirm.ts
    │   ├── groq.ts
    │   ├── handlers
    │   │   ├── dreams.ts
    │   │   ├── index.ts
    │   │   ├── navigation.ts
    │   │   └── social.ts
    │   ├── idempotency.ts
    │   ├── rate-limiter.ts
    │   ├── rateLimit.ts
    │   ├── schemas.ts
    │   ├── tfBackend.ts
    │   ├── tool-router.ts
    │   └── triad.ts
    ├── animation
    │   └── DrEamsAnimator.ts
    ├── capabilities.yaml
    ├── search
    │   └── drEamsSearch.ts
    └── tools.ts
```
<details><summary>Dr Eams file index (26 files)</summary>

- `dr-eams/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `dr-eams/ai/CIC.ts` — TypeScript module.
- `dr-eams/ai/audit.ts` — TypeScript module.
- `dr-eams/ai/boogie-policy.ts` — TypeScript module.
- `dr-eams/ai/boogie-verifier.ts` — TypeScript module.
- `dr-eams/ai/boogieman.ts` — TypeScript module.
- `dr-eams/ai/capability-gate.ts` — TypeScript module.
- `dr-eams/ai/client.ts` — TypeScript module.
- `dr-eams/ai/confirm-token.ts` — TypeScript module.
- `dr-eams/ai/confirm.ts` — TypeScript module.
- `dr-eams/ai/groq.ts` — TypeScript module.
- `dr-eams/ai/handlers/dreams.ts` — TypeScript module.
- `dr-eams/ai/handlers/index.ts` — TypeScript module.
- `dr-eams/ai/handlers/navigation.ts` — TypeScript module.
- `dr-eams/ai/handlers/social.ts` — TypeScript module.
- `dr-eams/ai/idempotency.ts` — TypeScript module.
- `dr-eams/ai/rate-limiter.ts` — TypeScript module.
- `dr-eams/ai/rateLimit.ts` — TypeScript module.
- `dr-eams/ai/schemas.ts` — TypeScript module.
- `dr-eams/ai/tfBackend.ts` — TypeScript module.
- `dr-eams/ai/tool-router.ts` — TypeScript module.
- `dr-eams/ai/triad.ts` — TypeScript module.
- `dr-eams/animation/DrEamsAnimator.ts` — TypeScript module.
- `dr-eams/capabilities.yaml` — project file.
- `dr-eams/search/drEamsSearch.ts` — TypeScript module.
- `dr-eams/tools.ts` — TypeScript module.

</details>

## Dreamr
Auto-synced from `dreamr/**` using repository introspection.
- Files tracked: **2**
- API routes discovered: none
- App pages discovered: none
- Components/modules discovered: `PanelDreamRChannelPanel`
#### Dreamr file structure
```text
└── dreamr
    ├── Agents-MUST-READ-ARCHITECTURE.md
    └── dream.panel.DreamRChannelPanel.tsx
```
<details><summary>Dreamr file index (2 files)</summary>

- `dreamr/Agents-MUST-READ-ARCHITECTURE.md` — documentation file.
- `dreamr/dream.panel.DreamRChannelPanel.tsx` — React UI module for PanelDreamRChannelPanel.

</details>

## Engine
Auto-synced from `engine/**` using repository introspection.
- Files tracked: **0**
- API routes discovered: none
- App pages discovered: none
- Components/modules discovered: none
#### Engine file structure
```text
(no files currently matched)
```
<details><summary>Engine file index (0 files)</summary>

- _No files matched the configured glob set after this change._

</details>

## Frontend
Auto-synced from `frontend/**` using repository introspection.
- Files tracked: **27**
- API routes discovered: none
- App pages discovered: none
- Components/modules discovered: `App`, `BlockchainContext`, `CommentList`, `CommentSection`, `EngagementOverlay`, `Feed`, `FeedItem`, `VideoPlayer`, +1 more
#### Frontend file structure
```text
└── frontend
    ├── Agents-MUST-READ-ARCHITECTURE.md
    └── public
        ├── favicon.ico
        ├── index.html
        └── src
            ├── App.jsx
            ├── DockerFile
            ├── Services
            │   ├── api.js
            │   └── livekit.js
            ├── Utils
            │   ├── socialUtils.js
            │   └── web3Utils.js
            ├── components
            │   ├── Videoplayer
            │   │   ├── EngagementOverlay.jsx
            │   │   ├── VideoPlayer.css
            │   │   └── VideoPlayer.jsx
            │   ├── WalletConnect
            │   │   ├── WalletConnect.css
            │   │   └── WalletConnect.jsx
            │   ├── commentSection
            │   │   ├── CommentList.jsx
            │   │   ├── CommentSection.css
            │   │   └── CommentSection.jsx
            │   └── feed
            │       ├── Feed.css
            │       ├── Feed.jsx
            │       └── FeedItem.jsx
            ├── contexts
            │   └── BlockchainContext.jsx
            ├── hooks
            │   ├── useBlockchain.js
            │   └── useSocialData.js
            ├── index.css
            ├── index.js
            ├── package-lock.json
            └── package.json
```
<details><summary>Frontend file index (27 files)</summary>

- `frontend/Agents-MUST-READ-ARCHITECTURE.md` — documentation file.
- `frontend/public/favicon.ico` — project file (ico).
- `frontend/public/index.html` — project file (html).
- `frontend/public/src/App.jsx` — React UI module for App.
- `frontend/public/src/DockerFile` — project file (no extension).
- `frontend/public/src/Services/api.js` — TypeScript/JavaScript runtime module.
- `frontend/public/src/Services/livekit.js` — TypeScript/JavaScript runtime module.
- `frontend/public/src/Utils/socialUtils.js` — TypeScript/JavaScript runtime module.
- `frontend/public/src/Utils/web3Utils.js` — TypeScript/JavaScript runtime module.
- `frontend/public/src/components/Videoplayer/EngagementOverlay.jsx` — React UI module for EngagementOverlay.
- `frontend/public/src/components/Videoplayer/VideoPlayer.css` — project file (css).
- `frontend/public/src/components/Videoplayer/VideoPlayer.jsx` — React UI module for VideoPlayer.
- `frontend/public/src/components/WalletConnect/WalletConnect.css` — project file (css).
- `frontend/public/src/components/WalletConnect/WalletConnect.jsx` — React UI module for WalletConnect.
- `frontend/public/src/components/commentSection/CommentList.jsx` — React UI module for CommentList.
- `frontend/public/src/components/commentSection/CommentSection.css` — project file (css).
- `frontend/public/src/components/commentSection/CommentSection.jsx` — React UI module for CommentSection.
- `frontend/public/src/components/feed/Feed.css` — project file (css).
- `frontend/public/src/components/feed/Feed.jsx` — React UI module for Feed.
- `frontend/public/src/components/feed/FeedItem.jsx` — React UI module for FeedItem.
- `frontend/public/src/contexts/BlockchainContext.jsx` — React UI module for BlockchainContext.
- `frontend/public/src/hooks/useBlockchain.js` — TypeScript/JavaScript runtime module.
- `frontend/public/src/hooks/useSocialData.js` — TypeScript/JavaScript runtime module.
- `frontend/public/src/index.css` — project file (css).
- `frontend/public/src/index.js` — TypeScript/JavaScript runtime module.
- `frontend/public/src/package-lock.json` — project file (json).
- `frontend/public/src/package.json` — project file (json).

</details>

## Misc
Misc provides shared infrastructure used across the platform.
### Architectural Relationships
- Self-contained — no detected cross-subsystem imports
#### File Structure
```text
└── misc
    ├── Agents-MUST-READ-ARCHITECTURE.md
    └── images
        ├── arm2_transparent.png
        ├── coat_transparent.png
        ├── head_transparent.png
        ├── iconslist.png
        ├── logo_DREAM_transparent.png
        ├── logo_ENGIN_transparent.png
        ├── logo_transparent.png
        ├── shoe1_transparent.png
        ├── shoe2_transparent.png
        ├── sprite_2x_transparent.png
        └── sprite_transparent.png
```
<details><summary>Misc file index (12 files)</summary>

- `misc/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `misc/images/arm2_transparent.png` — project file.
- `misc/images/coat_transparent.png` — project file.
- `misc/images/head_transparent.png` — project file.
- `misc/images/iconslist.png` — project file.
- `misc/images/logo_DREAM_transparent.png` — project file.
- `misc/images/logo_ENGIN_transparent.png` — project file.
- `misc/images/logo_transparent.png` — project file.
- `misc/images/shoe1_transparent.png` — project file.
- `misc/images/shoe2_transparent.png` — project file.
- `misc/images/sprite_2x_transparent.png` — project file.
- `misc/images/sprite_transparent.png` — project file.

</details>

## Optimizer
Optimizer provides shared infrastructure used across the platform. Core abstractions are encapsulated in BabylonOptimizeroScorers, BabylonUIOptimizero, BabylonUIGenerator.
### Responsibilities
- Core abstractions: BabylonOptimizeroScorers, BabylonUIOptimizero, BabylonUIGenerator, ConstraintSolver, CreativeOptimizero
### Key Modules
- `BabylonOptimizeroScorers`
- `BabylonUIGenerator`
- `BabylonUIOptimizero`
- `ConstraintSolver`
- `CreativeOptimizero`
- `DreamOptimizer`
### Architectural Relationships
- Self-contained — no detected cross-subsystem imports
### Notable Abstractions
- `BabylonUICandidate` — interface
- `BabylonOptimizeroScorers` — class
- `BabylonUIOptimizero` — class
- `BabylonUIGenerator` — class
- `ConstraintSolver` — class
- `CreativeCandidate` — interface
- `ScoredCandidate` — interface
- `OptimizeroWeights` — interface
- `OptimizeroResult` — interface
- `HardFailCheck` — type
- `ScoreFunction` — type
- `CreativeOptimizero` — class
### Capabilities
- Public contract surface: BabylonUICandidate, CreativeCandidate, ScoredCandidate, OptimizeroWeights, OptimizeroResult
- Shared type vocabulary: HardFailCheck, ScoreFunction, ConstraintPriority, DeviceType, ConstraintPriority
- Utility functions: createUIOptimizero, validateCreativeOption
#### File Structure
```text
└── optimizer
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── README.md
    ├── babylon-optimizero.ts
    ├── constraint-solver.ts
    ├── creative-optimizero.ts
    ├── creative-validator.ts
    ├── index.ts
    └── types.ts
```
<details><summary>Optimizer file index (8 files)</summary>

- `optimizer/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `optimizer/README.md` — documentation.
- `optimizer/babylon-optimizero.ts` — TypeScript module.
- `optimizer/constraint-solver.ts` — TypeScript module.
- `optimizer/creative-optimizero.ts` — TypeScript module.
- `optimizer/creative-validator.ts` — TypeScript module.
- `optimizer/index.ts` — TypeScript module.
- `optimizer/types.ts` — TypeScript module.

</details>

## Output
Auto-synced from `output/**` using repository introspection.
- Files tracked: **3**
- API routes discovered: none
- App pages discovered: none
- Components/modules discovered: none
#### Output file structure
```text
└── output
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── patch-plan.json
    └── result.json
```
<details><summary>Output file index (3 files)</summary>

- `output/Agents-MUST-READ-ARCHITECTURE.md` — documentation file.
- `output/patch-plan.json` — project file (json).
- `output/result.json` — project file (json).

</details>

## Public
Public provides shared infrastructure used across the platform.
### Responsibilities
- Feed ranking, algorithm execution, and content scoring
- Infrastructure provisioning and operational observability
### Architectural Relationships
- Self-contained — no detected cross-subsystem imports
#### File Structure
```text
└── public
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── DREAMenginree2-completedream
    │   └── public
    │       ├── favicon.ico
    │       ├── file.svg
    │       ├── globe.svg
    │       ├── images
    │       │   ├── logo1.PNG
    │       │   ├── logo2.PNG
    │       │   └── logo3.PNG
    │       ├── next.svg
    │       ├── vercel.svg
    │       └── window.svg
    ├── arm1_transparent.png
    ├── arm2_transparent.png
    ├── cartridges
    │   └── mad-maxi
    │       ├── MANIFEST.json
    │       ├── logic
    │       │   └── main.wasm
    │       └── tuning.json
    ├── coat_transparent.png
    ├── dr-eams-pbr.html
    ├── favicon.ico
    ├── feeds
    │   └── embed-feed.json
    ├── file.svg
    ├── globe.svg
    ├── head_transparent.png
    ├── images
    │   ├── iconslist.png
    │   ├── logo1.PNG
    │   ├── logo2.PNG
    │   └── logo3.PNG
    ├── logo-icon.png
    ├── logo_DREAM_transparent.png
    ├── logo_ENGIN_transparent.png
    ├── manifest.json
    ├── manifest.webmanifest
    ├── module-loader.html
    ├── next.svg
    ├── shoe1_transparent.png
    ├── shoe2_transparent.png
    ├── sprite_2x_transparent.png
    ├── sprite_transparent.png
    ├── vercel.svg
    ├── window.svg
    └── workers
        ├── asset-optimizer.worker.js
        ├── engin-shader.wasm
        └── engin-shader.worker.ts
```
<details><summary>Public file index (42 files)</summary>

- `public/Agents-MUST-READ-ARCHITECTURE.md` — documentation.
- `public/DREAMenginree2-completedream/public/favicon.ico` — project file.
- `public/DREAMenginree2-completedream/public/file.svg` — project file.
- `public/DREAMenginree2-completedream/public/globe.svg` — project file.
- `public/DREAMenginree2-completedream/public/images/logo1.PNG` — project file.
- `public/DREAMenginree2-completedream/public/images/logo2.PNG` — project file.
- `public/DREAMenginree2-completedream/public/images/logo3.PNG` — project file.
- `public/DREAMenginree2-completedream/public/next.svg` — project file.
- `public/DREAMenginree2-completedream/public/vercel.svg` — project file.
- `public/DREAMenginree2-completedream/public/window.svg` — project file.
- `public/arm1_transparent.png` — project file.
- `public/arm2_transparent.png` — project file.
- `public/cartridges/mad-maxi/MANIFEST.json` — project file.
- `public/cartridges/mad-maxi/logic/main.wasm` — project file.
- `public/cartridges/mad-maxi/tuning.json` — project file.
- `public/coat_transparent.png` — project file.
- `public/dr-eams-pbr.html` — project file.
- `public/favicon.ico` — project file.
- `public/feeds/embed-feed.json` — project file.
- `public/file.svg` — project file.
- `public/globe.svg` — project file.
- `public/head_transparent.png` — project file.
- `public/images/iconslist.png` — project file.
- `public/images/logo1.PNG` — project file.
- `public/images/logo2.PNG` — project file.
- `public/images/logo3.PNG` — project file.
- `public/logo-icon.png` — project file.
- `public/logo_DREAM_transparent.png` — project file.
- `public/logo_ENGIN_transparent.png` — project file.
- `public/manifest.json` — project file.
- `public/manifest.webmanifest` — project file.
- `public/module-loader.html` — project file.
- `public/next.svg` — project file.
- `public/shoe1_transparent.png` — project file.
- `public/shoe2_transparent.png` — project file.
- `public/sprite_2x_transparent.png` — project file.
- `public/sprite_transparent.png` — project file.
- `public/vercel.svg` — project file.
- `public/window.svg` — project file.
- `public/workers/asset-optimizer.worker.js` — TypeScript module.
- `public/workers/engin-shader.wasm` — project file.
- `public/workers/engin-shader.worker.ts` — TypeScript module.

</details>

## Supabase
Auto-synced from `supabase/**` using repository introspection.
- Files tracked: **68**
- API routes discovered: none
- App pages discovered: none
- Components/modules discovered: none
- Supabase migrations touched: `20240120000000_initial_schema`, `20240120000001_enable_rls`, `20260129000000_upgrade_schema`, `20260210000000_widget_system_v2`, `20260210000001_ai_system_v2026`, `20260210_ai_core`, `20260214000000_security_axioms`, `20260226000000_admin_lock`, +47 more
#### Supabase file structure
```text
└── supabase
    ├── .temp
    │   ├── cli-latest
    │   ├── gotrue-version
    │   ├── linked-project.json
    │   ├── pooler-url
    │   ├── postgres-version
    │   ├── project-ref
    │   ├── rest-version
    │   ├── storage-migration
    │   └── storage-version
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── config.toml
    ├── migrations
    │   ├── 20240120000000_initial_schema.sql
    │   ├── 20240120000001_enable_rls.sql
    │   ├── 20260129000000_upgrade_schema.sql
    │   ├── 20260210000000_widget_system_v2.sql
    │   ├── 20260210000001_ai_system_v2026.sql
    │   ├── 20260210_ai_core.sql
    │   ├── 20260214000000_security_axioms.sql
    │   ├── 20260226000000_admin_lock.sql
    │   ├── 20260305000000_create_notes.sql
    │   ├── 20260305000001_comments.sql
    │   ├── 20260305000002_leaderboard.sql
    │   ├── 20260307000000_readme_gaps.sql
    │   ├── 20260307000001_conversations_messages.sql
    │   ├── 20260310000000_widget_instances_visibility.sql
    │   ├── 20260310000001_profiles_widget_config.sql
    │   ├── 20260310000002_profile_dream_widgets.sql
    │   ├── 20260310000003_connector_accounts.sql
    │   ├── 20260310000004_feed_items.sql
    │   ├── 20260310000010_dreamdm_bar_pass2.sql
    │   ├── 20260315000000_content_drafts.sql
    │   ├── 20260316000000_visibility_mappings.sql
    │   ├── 20260319000000_journey_dots.sql
    │   ├── 20260319065444_new-migration.sql
    │   ├── 20260319120000_connector_accounts_schema_reload.sql
    │   ├── 20260320000000_scheduled_posts.sql
    │   ├── 20260320100000_game_scores_all_games.sql
    │   ├── 20260320110000_user_blocks.sql
    │   ├── 20260321000000_ads_platform_promotions.sql
    │   ├── 20260321200000_phase8a_feed_and_layout.sql
    │   ├── 20260322000000_phase8b_dream_windows.sql
    │   ├── 20260322000000_policy_events.sql
    │   ├── 20260322000001_message_boards.sql
    │   ├── 20260323100000_embed_feed_items.sql
    │   ├── 20260324000000_phase8e_orders.sql
    │   ├── 20260324000001_phase8e_shop_marketplace.sql
    │   ├── 20260325000000_phase8f_daydream_network.sql
    │   ├── 20260325100000_child_safety.sql
    │   ├── 20260401000001_platform_utilities.sql
    │   ├── 20260402000001_control_mappings.sql
    │   ├── 20260402000002_game_assets.sql
    │   ├── 20260403000001_pgvector_embeddings.sql
    │   ├── 20260403000002_pgvector_search_rpc.sql
    │   ├── 20260405000001_dreamr_feed_registry.sql
    │   ├── 20260405042406_auto_scaffold.sql
    │   ├── 20260413000000_phase9_activity_first_protocol.sql
    │   ├── 20260417000000_repurpose_nods_as_dream_docs.sql
    │   ├── 20260417000001_dream_docs_search_rpc.sql
    │   ├── 20260418000000_gameengin_core.sql
    │   ├── 20260420000001_consent_settings_audit.sql
    │   ├── 20260426000000_activity_coop_gameengin_completion.sql
    │   ├── 20260426000100_rename_widgets_to_dreams.sql
    │   ├── 20260426000200_build_memory_schema_gaps.sql
    │   ├── 20260516000000_agent_sessions_forge_rate_limits.sql
    │   ├── 20260516000100_dreamr_tally.sql
    │   └── 20260516000300_shared_dream_sessions.sql
    ├── schema-final.sql
    └── seed.sql
```
<details><summary>Supabase file index (68 files)</summary>

- `supabase/.temp/cli-latest` — project file (no extension).
- `supabase/.temp/gotrue-version` — project file (no extension).
- `supabase/.temp/linked-project.json` — project file (json).
- `supabase/.temp/pooler-url` — project file (no extension).
- `supabase/.temp/postgres-version` — project file (no extension).
- `supabase/.temp/project-ref` — project file (no extension).
- `supabase/.temp/rest-version` — project file (no extension).
- `supabase/.temp/storage-migration` — project file (no extension).
- `supabase/.temp/storage-version` — project file (no extension).
- `supabase/Agents-MUST-READ-ARCHITECTURE.md` — documentation file.
- `supabase/config.toml` — project file (toml).
- `supabase/migrations/20240120000000_initial_schema.sql` — SQL migration/schema artifact.
- `supabase/migrations/20240120000001_enable_rls.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260129000000_upgrade_schema.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260210000000_widget_system_v2.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260210000001_ai_system_v2026.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260210_ai_core.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260214000000_security_axioms.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260226000000_admin_lock.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260305000000_create_notes.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260305000001_comments.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260305000002_leaderboard.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260307000000_readme_gaps.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260307000001_conversations_messages.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260310000000_widget_instances_visibility.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260310000001_profiles_widget_config.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260310000002_profile_dream_widgets.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260310000003_connector_accounts.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260310000004_feed_items.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260310000010_dreamdm_bar_pass2.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260315000000_content_drafts.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260316000000_visibility_mappings.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260319000000_journey_dots.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260319065444_new-migration.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260319120000_connector_accounts_schema_reload.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260320000000_scheduled_posts.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260320100000_game_scores_all_games.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260320110000_user_blocks.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260321000000_ads_platform_promotions.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260321200000_phase8a_feed_and_layout.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260322000000_phase8b_dream_windows.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260322000000_policy_events.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260322000001_message_boards.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260323100000_embed_feed_items.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260324000000_phase8e_orders.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260324000001_phase8e_shop_marketplace.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260325000000_phase8f_daydream_network.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260325100000_child_safety.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260401000001_platform_utilities.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260402000001_control_mappings.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260402000002_game_assets.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260403000001_pgvector_embeddings.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260403000002_pgvector_search_rpc.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260405000001_dreamr_feed_registry.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260405042406_auto_scaffold.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260413000000_phase9_activity_first_protocol.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260417000000_repurpose_nods_as_dream_docs.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260417000001_dream_docs_search_rpc.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260418000000_gameengin_core.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260420000001_consent_settings_audit.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260426000000_activity_coop_gameengin_completion.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260426000100_rename_widgets_to_dreams.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260426000200_build_memory_schema_gaps.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260516000000_agent_sessions_forge_rate_limits.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260516000100_dreamr_tally.sql` — SQL migration/schema artifact.
- `supabase/migrations/20260516000300_shared_dream_sessions.sql` — SQL migration/schema artifact.
- `supabase/schema-final.sql` — SQL migration/schema artifact.
- `supabase/seed.sql` — SQL migration/schema artifact.

</details>

## Types
Auto-synced from `types/**` using repository introspection.
- Files tracked: **19**
- API routes discovered: none
- App pages discovered: none
- Components/modules discovered: none
#### Types file structure
```text
└── types
    ├── Agents-MUST-READ-ARCHITECTURE.md
    ├── ads.ts
    ├── ai-system.ts
    ├── ai.ts
    ├── ccc.ts
    ├── connector.ts
    ├── dream-window.ts
    ├── dreamArtifact.ts
    ├── experience.ts
    ├── journey.ts
    ├── marketplace.ts
    ├── module-manifest.ts
    ├── rivet-dev-agent-os.d.ts
    ├── spatial.ts
    ├── supabase.ts
    ├── user-sim.ts
    ├── widget-system-v2.ts
    ├── widgetConfigs.ts
    └── widgets.ts
```
<details><summary>Types file index (19 files)</summary>

- `types/Agents-MUST-READ-ARCHITECTURE.md` — documentation file.
- `types/ads.ts` — TypeScript/JavaScript runtime module.
- `types/ai-system.ts` — TypeScript/JavaScript runtime module.
- `types/ai.ts` — TypeScript/JavaScript runtime module.
- `types/ccc.ts` — TypeScript/JavaScript runtime module.
- `types/connector.ts` — TypeScript/JavaScript runtime module.
- `types/dream-window.ts` — TypeScript/JavaScript runtime module.
- `types/dreamArtifact.ts` — TypeScript/JavaScript runtime module.
- `types/experience.ts` — TypeScript/JavaScript runtime module.
- `types/journey.ts` — TypeScript/JavaScript runtime module.
- `types/marketplace.ts` — TypeScript/JavaScript runtime module.
- `types/module-manifest.ts` — TypeScript/JavaScript runtime module.
- `types/rivet-dev-agent-os.d.ts` — TypeScript/JavaScript runtime module.
- `types/spatial.ts` — TypeScript/JavaScript runtime module.
- `types/supabase.ts` — TypeScript/JavaScript runtime module.
- `types/user-sim.ts` — TypeScript/JavaScript runtime module.
- `types/widget-system-v2.ts` — TypeScript/JavaScript runtime module.
- `types/widgetConfigs.ts` — TypeScript/JavaScript runtime module.
- `types/widgets.ts` — TypeScript/JavaScript runtime module.

</details>

## Utils
Auto-synced from `utils/**` using repository introspection.
- Files tracked: **2**
- API routes discovered: none
- App pages discovered: none
- Components/modules discovered: none
#### Utils file structure
```text
└── utils
    ├── Agents-MUST-READ-ARCHITECTURE.md
    └── supabase
        └── server.ts
```
<details><summary>Utils file index (2 files)</summary>

- `utils/Agents-MUST-READ-ARCHITECTURE.md` — documentation file.
- `utils/supabase/server.ts` — TypeScript/JavaScript runtime module.

</details>

## Workflow
Auto-synced from `workflow/**` using repository introspection.
- Files tracked: **0**
- API routes discovered: none
- App pages discovered: none
- Components/modules discovered: none
#### Workflow file structure
```text
(no files currently matched)
```
<details><summary>Workflow file index (0 files)</summary>

- _No files matched the configured glob set after this change._

</details>

## Fonts
Fonts provides shared infrastructure used across the platform.
### Architectural Relationships
- Self-contained — no detected cross-subsystem imports
#### File Structure
```text
└── fonts
    ├── Cormorant_Garamond
    │   ├── CormorantGaramond-Italic-VariableFont_wght.ttf
    │   ├── CormorantGaramond-VariableFont_wght.ttf
    │   ├── OFL.txt
    │   ├── README.txt
    │   └── static
    │       ├── CormorantGaramond-Bold.ttf
    │       ├── CormorantGaramond-BoldItalic.ttf
    │       ├── CormorantGaramond-Italic.ttf
    │       ├── CormorantGaramond-Light.ttf
    │       ├── CormorantGaramond-LightItalic.ttf
    │       ├── CormorantGaramond-Medium.ttf
    │       ├── CormorantGaramond-MediumItalic.ttf
    │       ├── CormorantGaramond-Regular.ttf
    │       ├── CormorantGaramond-SemiBold.ttf
    │       └── CormorantGaramond-SemiBoldItalic.ttf
    ├── Plus_Jakarta_Sans
    │   ├── OFL.txt
    │   ├── PlusJakartaSans-Italic-VariableFont_wght.ttf
    │   ├── PlusJakartaSans-VariableFont_wght.ttf
    │   ├── README.txt
    │   └── static
    │       ├── PlusJakartaSans-Bold.ttf
    │       ├── PlusJakartaSans-BoldItalic.ttf
    │       ├── PlusJakartaSans-ExtraBold.ttf
    │       ├── PlusJakartaSans-ExtraBoldItalic.ttf
    │       ├── PlusJakartaSans-ExtraLight.ttf
    │       ├── PlusJakartaSans-ExtraLightItalic.ttf
    │       ├── PlusJakartaSans-Italic.ttf
    │       ├── PlusJakartaSans-Light.ttf
    │       ├── PlusJakartaSans-LightItalic.ttf
    │       ├── PlusJakartaSans-Medium.ttf
    │       ├── PlusJakartaSans-MediumItalic.ttf
    │       ├── PlusJakartaSans-Regular.ttf
    │       ├── PlusJakartaSans-SemiBold.ttf
    │       └── PlusJakartaSans-SemiBoldItalic.ttf
    ├── Space_Grotesk
    │   ├── OFL.txt
    │   ├── README.txt
    │   ├── SpaceGrotesk-VariableFont_wght.ttf
    │   └── static
    │       ├── SpaceGrotesk-Bold.ttf
    │       ├── SpaceGrotesk-Light.ttf
    │       ├── SpaceGrotesk-Medium.ttf
    │       ├── SpaceGrotesk-Regular.ttf
    │       └── SpaceGrotesk-SemiBold.ttf
    └── fonts.md
```
<details><summary>Fonts file index (41 files)</summary>

- `fonts/Cormorant_Garamond/CormorantGaramond-Italic-VariableFont_wght.ttf` — project file.
- `fonts/Cormorant_Garamond/CormorantGaramond-VariableFont_wght.ttf` — project file.
- `fonts/Cormorant_Garamond/OFL.txt` — project file.
- `fonts/Cormorant_Garamond/README.txt` — project file.
- `fonts/Cormorant_Garamond/static/CormorantGaramond-Bold.ttf` — project file.
- `fonts/Cormorant_Garamond/static/CormorantGaramond-BoldItalic.ttf` — project file.
- `fonts/Cormorant_Garamond/static/CormorantGaramond-Italic.ttf` — project file.
- `fonts/Cormorant_Garamond/static/CormorantGaramond-Light.ttf` — project file.
- `fonts/Cormorant_Garamond/static/CormorantGaramond-LightItalic.ttf` — project file.
- `fonts/Cormorant_Garamond/static/CormorantGaramond-Medium.ttf` — project file.
- `fonts/Cormorant_Garamond/static/CormorantGaramond-MediumItalic.ttf` — project file.
- `fonts/Cormorant_Garamond/static/CormorantGaramond-Regular.ttf` — project file.
- `fonts/Cormorant_Garamond/static/CormorantGaramond-SemiBold.ttf` — project file.
- `fonts/Cormorant_Garamond/static/CormorantGaramond-SemiBoldItalic.ttf` — project file.
- `fonts/Plus_Jakarta_Sans/OFL.txt` — project file.
- `fonts/Plus_Jakarta_Sans/PlusJakartaSans-Italic-VariableFont_wght.ttf` — project file.
- `fonts/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf` — project file.
- `fonts/Plus_Jakarta_Sans/README.txt` — project file.
- `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Bold.ttf` — project file.
- `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-BoldItalic.ttf` — project file.
- `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraBold.ttf` — project file.
- `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraBoldItalic.ttf` — project file.
- `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraLight.ttf` — project file.
- `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraLightItalic.ttf` — project file.
- `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Italic.ttf` — project file.
- `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Light.ttf` — project file.
- `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-LightItalic.ttf` — project file.
- `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Medium.ttf` — project file.
- `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-MediumItalic.ttf` — project file.
- `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Regular.ttf` — project file.
- `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-SemiBold.ttf` — project file.
- `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-SemiBoldItalic.ttf` — project file.
- `fonts/Space_Grotesk/OFL.txt` — project file.
- `fonts/Space_Grotesk/README.txt` — project file.
- `fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf` — project file.
- `fonts/Space_Grotesk/static/SpaceGrotesk-Bold.ttf` — project file.
- `fonts/Space_Grotesk/static/SpaceGrotesk-Light.ttf` — project file.
- `fonts/Space_Grotesk/static/SpaceGrotesk-Medium.ttf` — project file.
- `fonts/Space_Grotesk/static/SpaceGrotesk-Regular.ttf` — project file.
- `fonts/Space_Grotesk/static/SpaceGrotesk-SemiBold.ttf` — project file.
- `fonts/fonts.md` — documentation.

</details>
