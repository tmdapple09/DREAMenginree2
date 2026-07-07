# VISUAL SCHEMATIC

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

This is the owner-facing Supabase-style visual schematic for the entire DREAMengin repository.
It shows every file, folder, symbol, and connection, including disconnected/floating orphan nodes.

**Live viewer:** https://appthemanger-ctrl.github.io/DREAMengin/

<!-- VISUAL-SCHEMATIC:AUTO-GENERATED:START -->
### Auto-Generated Repository Overview

- **Total files:** 2244
- **Total function/class nodes:** 4807
- **Total edges:** 8476
- **Orphan nodes:** 4124

#### Top-Level Folder Connectivity (overview)
```mermaid
graph LR
  app["app"] -->|703| supabase["supabase"]
  src["src"] -->|322| components["components"]
  engine["engine"] -->|314| components["components"]
  app["app"] -->|289| components["components"]
  src["src"] -->|274| engins["engins"]
  src["src"] -->|271| app["app"]
  engine["engine"] -->|268| app["app"]
  app["app"] -->|253| engine["engine"]
  engine["engine"] -->|240| engins["engins"]
  components["components"] -->|128| engine["engine"]
  tests["tests"] -->|122| engine["engine"]
  app["app"] -->|120| utils["utils"]
  tests["tests"] -->|117| engins["engins"]
  app["app"] -->|110| engins["engins"]
  components["components"] -->|103| engins["engins"]
  engins["engins"] -->|102| engine["engine"]
  app["app"] -->|85| dr_eams["dr-eams"]
  engine["engine"] -->|43| types["types"]
  app["app"] -->|42| types["types"]
  app["app"] -->|40| dreamr["dreamr"]
  engins["engins"] -->|37| components["components"]
  components["components"] -->|27| utils["utils"]
  components["components"] -->|27| dreamdmbar["dreamdmbar"]
  tests["tests"] -->|26| components["components"]
  components["components"] -->|21| supabase["supabase"]
  daydreams["daydreams"] -->|19| components["components"]
  components["components"] -->|18| dreamr["dreamr"]
  engine["engine"] -->|18| utils["utils"]
  daydreams["daydreams"] -->|16| supabase["supabase"]
  engine["engine"] -->|15| supabase["supabase"]
  engine["engine"] -->|15| dreamdmbar["dreamdmbar"]
  src["src"] -->|15| dreamdmbar["dreamdmbar"]
  tests["tests"] -->|15| dreamr["dreamr"]
  tests["tests"] -->|15| app["app"]
  engins["engins"] -->|13| supabase["supabase"]
  src["src"] -->|13| hooks["hooks"]
  app["app"] -->|12| dreamdmbar["dreamdmbar"]
  components["components"] -->|12| types["types"]
  engine["engine"] -->|12| hooks["hooks"]
  tests["tests"] -->|11| dreamdmbar["dreamdmbar"]
```

#### File-Level Connectivity (auto-generated)

<details><summary>engins/ (366 files)</summary>

| File | Type | Imports | Imported By | Top Importers | Top Imports |
|---|---|---|---|---|---|
| `engins/contentengin/assetTypes.ts` | ts | 0 | 39 | `components/contentengin/AssetPreview3D.tsx`, `engine/generated/engins.ts`, `engins/contentengin/builders/geometryBuilder.ts` | — |
| `engins/forgeengin/forge/forgeRegistry.ts` | ts | 0 | 26 | `app/daydream/forge/page.tsx`, `app/engines/page.tsx`, `components/dreams/dreamsurface.dreamspace.tsx` | — |
| `engins/gameengin/cartridges/manifest.ts` | ts | 1 | 21 | `app/api/game-scores/route.ts`, `app/daydream/game/dream.shell.ImmersiveGameShell.tsx`, `app/gameengin/cartridges/[id]/page.tsx` | `engins/gameengin/cartridge.ts` |
| `engins/renderengin/core.ts` | ts | 2 | 21 | `engine/runtime/EnginDispatcher.ts`, `engins/contentengin/AssetViewport.tsx`, `engins/renderengin/RenderEnginInlineSurface.tsx` | `engine/engin-runtime/EnginBaseState.ts`, `engine/engin-runtime/EnginRuleSetContract.ts` |
| `engins/gameengin/cartridge.ts` | ts | 0 | 20 | `app/daydream/game/dream.shell.ImmersiveGameShell.tsx`, `components/gameengin/dream.cartridge.CartridgeLauncher.tsx`, `engine/generated/engins.ts` | — |
| `engins/renderengin/index.ts` | ts | 24 | 17 | `components/engines/render/dream.RenderServiceDiagnostics.tsx`, `engins/contentengin/ImplicitAssetWorkspace.tsx`, `engins/engin.GameEngin.tsx` | `engins/renderengin/core.ts`, `engins/renderengin/webgpu.ts`, `engins/renderengin/RenderEnginViewport.tsx` |
| `engins/contentengin/media/ledger.ts` | ts | 1 | 15 | `app/api/ledger-media/route.ts`, `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`, `components/dream.CreatePostModal.tsx` | `utils/index.ts` |
| `engins/gameengin/games/hooks.ts` | ts | 2 | 15 | `components/games/dream.AvenueOfMirrors.tsx`, `components/games/dream.DefuseRitual.tsx`, `components/games/dream.EchoArena.tsx` | `engins/gameengin/games/performance-baseline.ts`, `engine/rendering/webgpu.ts` |
| `engins/gameengin/power-systems.ts` | ts | 1 | 14 | `engine/generated/engins.ts`, `engins/gameengin/core.ts`, `engins/gameengin/index.ts` | `engins/renderengin/webgpu.ts` |
| `engins/forgeengin/forge/forgeIntelligence.ts` | ts | 1 | 12 | `components/daydream/dreamsurface.daydream.BrandDaydream.tsx`, `components/dreams/dreamsurface.dreamspace.tsx`, `engine/generated/engins.ts` | `engins/forgeengin/forge/forgeRegistry.ts` |
| `engins/forgeengin/forge/useForgeActivity.ts` | ts | 1 | 12 | `components/daydream/dream.shell.DaydreamShell.tsx`, `components/daydream/dreamsurface.daydream.BrandDaydream.tsx`, `components/dream.universal_asset_registry.tsx` | `engins/forgeengin/forge/forgeRegistry.ts` |
| `engins/gameengin/cartridges/loaders.ts` | ts | 16 | 11 | `app/daydream/game/dream.shell.ImmersiveGameShell.tsx`, `components/gameengin/dream.cartridge.CartridgeLauncher.tsx`, `engine/generated/engins.ts` | `engins/gameengin/cartridge.ts`, `engins/gameengin/cartridges/manifest.ts`, `engins/gameengin/cartridges/reactCartridge.ts` |
| `engins/renderengin/webgpu.ts` | ts | 1 | 11 | `components/webgpu/renderer.ts`, `engine/rendering/webgpu.ts`, `engins/contentengin/AssetViewport.tsx` | `engins/renderengin/core.ts` |
| `engins/codeengin/pathSafety.ts` | ts | 0 | 10 | `app/api/codeengin/diagnostics/route.ts`, `app/api/codeengin/file/route.ts`, `app/api/codeengin/git/route.ts` | — |
| `engins/codeengin/workspaceStore.ts` | ts | 2 | 10 | `app/api/codeengin/file/route.ts`, `app/api/codeengin/upload/route.ts`, `app/api/codeengin/workspace/route.ts` | `engins/codeengin/pathSafety.ts`, `engins/codeengin/types.ts` |
| `engins/forgeengin/enginpipe/index.ts` | ts | 5 | 10 | `engine/generated/engins.ts`, `engins/CodeEngin/orchestrator/dream.index.tsx`, `engins/codeengin-ui/orchestrator/dream.index.tsx` | `engins/forgeengin/enginpipe/artifact/manifest.ts`, `engins/forgeengin/enginpipe/telemetry/client.ts`, `engins/forgeengin/enginpipe/telemetry/events.ts` |
| `engins/gameengin/games/navigation.ts` | ts | 0 | 10 | `app/daydream/game/dream.shell.ImmersiveGameShell.tsx`, `app/daydream/games/page.tsx`, `app/daydream/play/page.tsx` | — |
| `engins/codeengin/auth.ts` | ts | 3 | 9 | `app/api/codeengin/diagnostics/route.ts`, `app/api/codeengin/file/route.ts`, `app/api/codeengin/git/route.ts` | `engine/admin/lockout.ts`, `supabase/client/safeGetUser.ts`, `supabase/server/serverClient.ts` |
| `engins/contentengin/media/postMedia.ts` | ts | 0 | 9 | `app/api/dreamr/suggested/route.ts`, `app/api/feed/route.ts`, `app/api/posts/route.ts` | — |
| `engins/engin.GameEngin.tsx` | tsx | 40 | 8 | `app/daydream/games/page.tsx`, `components/daydream/dream.StandaloneEnginSurface.tsx`, `components/engines/games/dream.GameEnginApp.tsx` | `components/daydream/dream.JourneyTrail.tsx`, `components/gameengin/dream.CartridgeRegistryBootstrap.tsx`, `components/gameengin/dream.cartridge.FeaturedCartridges.tsx` |
| `engins/engin.StarMakerEngin.tsx` | tsx | 27 | 8 | `app/daydream/music/page.tsx`, `components/daydream/dream.StandaloneEnginSurface.tsx`, `components/engines/music/dream.MusicEnginApp.tsx` | `components/daydream/dream.JourneyTrail.tsx`, `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx`, `components/daydream/starmaker/dream.panel.CompingPanel.tsx` |
| `engins/gameengin/brain-reader.ts` | ts | 0 | 8 | `app/api/gameengin/crash-report/route.ts`, `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/rulesets/game/gameEnginRuleSet.ts` | ts | 4 | 8 | `engine/generated/engins.ts`, `engins/engin.GameEngin.tsx`, `engins/gameengin/handlers.ts` | `engine/engin-runtime/EnginBaseState.ts`, `engine/engin-runtime/EnginCapabilities.ts`, `engine/engin-runtime/EnginCapabilityTargets.ts` |
| `engins/codeengin/types.ts` | ts | 0 | 7 | `engine/generated/engins.ts`, `engins/codeengin/diagnostics.ts`, `engins/codeengin/projectGraph.ts` | — |
| `engins/engin.BrandingEngin.tsx` | tsx | 15 | 7 | `app/daydream/brand/page.tsx`, `components/daydream/dream.StandaloneEnginSurface.tsx`, `components/engines/brand/dream.BrandEnginApp.tsx` | `components/daydream/dream.JourneyTrail.tsx`, `hooks/useSharedDream.ts`, `daydreams/shared/useDaydreamPersistence.ts` |
| `engins/engin.CodeEngin.tsx` | tsx | 12 | 7 | `app/daydream/code/page.tsx`, `components/daydream/dream.StandaloneEnginSurface.tsx`, `components/engines/code/dream.CodeEnginApp.tsx` | `components/dreamengin/dream.panel.CrossEnginStatusPanel.tsx`, `daydreams/shared/useDaydreamPersistence.ts`, `daydreams/shared/useDaydreamState.ts` |
| `engins/engin.ContentEngin.tsx` | tsx | 1 | 7 | `app/daydream/create/page.tsx`, `components/daydream/dream.StandaloneEnginSurface.tsx`, `components/engines/create/dream.CreateEnginApp.tsx` | `components/contentengin/ContentEnginStudio.tsx` |
| `engins/engin.LabEngin.tsx` | tsx | 15 | 7 | `app/daydream/lab/page.tsx`, `components/daydream/dream.StandaloneEnginSurface.tsx`, `components/engines/lab/dream.LabEnginApp.tsx` | `components/daydream/dream.JourneyTrail.tsx`, `components/dream.ForgeDreamCanvas.tsx`, `daydreams/shared/useDaydreamPersistence.ts` |
| `engins/forgeengin/componentInventory.ts` | ts | 0 | 7 | `components/dream.ForgeDreamCanvas.tsx`, `components/forge/dream.EngineBuilderCanvas.tsx`, `engine/generated/engins.ts` | — |
| `engins/gameengin/ai-director.ts` | ts | 0 | 7 | `components/games/dream.NeonDrift.tsx`, `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts` | — |
| `engins/gameengin/core.ts` | ts | 2 | 7 | `components/games/dream.NeonDrift.tsx`, `engine/generated/engins.ts`, `engins/gameengin/GameEnginCore.ts` | `engins/gameengin/power-systems.ts`, `engine/rendering/babylon/createEngine.ts` |
| `engins/gameengin/games/catalog.ts` | ts | 3 | 7 | `components/engines/games/panels/dream.panel.LibraryPanel.tsx`, `components/games/dream.GamesHub.tsx`, `engine/generated/engins.ts` | `engins/gameengin/cartridges/manifest.ts`, `engins/gameengin/games/mobileControls.ts`, `engins/gameengin/games/performance-baseline.ts` |
| `engins/gameengin/games/mobileControls.ts` | ts | 1 | 7 | `components/games/dream.EchoArena.tsx`, `components/games/dream.hud.GameHUD.tsx`, `components/games/dream.hud.MobileGameHUD.tsx` | `engins/gameengin/games/useRemoteChannel.ts` |
| `engins/gameengin/games/performance-baseline.ts` | ts | 0 | 7 | `components/games/dream.EchoArena.tsx`, `components/games/dream.NeonDrift.tsx`, `engine/generated/engins.ts` | — |
| `engins/isosurfaceDualContouring.ts` | ts | 0 | 7 | `engins/contentengin/AssetViewport.tsx`, `engins/contentengin/builders/meshBuilder.ts`, `engins/contentengin/useImplicitAssetWorkspace.ts` | — |
| `engins/starmakerengin/music/starmakerDaw.ts` | ts | 0 | 7 | `components/daydream/starmaker/dream.panel.CompingPanel.tsx`, `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx`, `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` | — |
| `engins/forgeengin/forge/engineForge.ts` | ts | 2 | 6 | `components/dream.ForgeDreamCanvas.tsx`, `components/forge/dream.EngineBuilderCanvas.tsx`, `engine/generated/engins.ts` | `engins/forgeengin/componentInventory.ts`, `engine/events/eventBus.ts` |
| `engins/forgeengin/forge/forgeMomentum.ts` | ts | 1 | 6 | `components/dreams/dreamsurface.dreamspace.tsx`, `components/forge/dream.widget.ForgeMomentumWidget.tsx`, `engine/generated/engins.ts` | `engins/forgeengin/forge/forgeRegistry.ts` |
| `engins/gameengin/cartridges/reactCartridge.ts` | ts | 2 | 6 | `components/games/dream.AvenueOfMirrors.tsx`, `components/games/dream.MadMaxiWildfall.tsx`, `engine/generated/engins.ts` | `engins/gameengin/cartridge.ts`, `engins/gameengin/cartridges/manifest.ts` |
| `engins/gameengin/GameRuntime.tsx` | tsx | 9 | 6 | `app/daydream/game/dream.shell.ImmersiveGameShell.tsx`, `components/gameengin/dream.cartridge.CartridgeLauncher.tsx`, `engine/generated/engins.ts` | `engine/runtime/channelMetrics.ts`, `engine/runtime/dreamOSBus.ts`, `engine/runtime/runtimeChannel.ts` |
| `engins/gameengin/games/quality-plan.ts` | ts | 0 | 6 | `app/daydream/games/page.tsx`, `daydreams/games/page.tsx`, `engine/generated/engins.ts` | — |
| `engins/isosurfaceAssetPipeline.ts` | ts | 2 | 6 | `engins/contentengin/AssetViewport.tsx`, `engins/contentengin/ImplicitAssetWorkspace.tsx`, `engins/contentengin/useImplicitAssetWorkspace.ts` | `engins/isosurfaceDualContouring.ts`, `engins/contentengin/assetTypes.ts` |
| `engins/renderengin/serviceRuntime.ts` | ts | 3 | 6 | `engins/renderengin/RenderEnginInlineSurface.tsx`, `engins/renderengin/RenderEnginViewport.tsx`, `engins/renderengin/RenderStage.tsx` | `engine/engin-runtime/EnginBaseState.ts`, `engine/runtime/EnginDispatcher.ts`, `engins/renderengin/core.ts` |
| `engins/rulesets/useEnginWorkflow.ts` | ts | 3 | 6 | `engine/generated/engins.ts`, `engins/engin.BrandingEngin.tsx`, `engins/engin.CodeEngin.tsx` | `engine/journey/journeyDots.ts`, `engine/runtime/dualRuntimeBridge.ts`, `engins/rulesets/workflowEngine.ts` |
| `engins/starmakerengin/audioFingerprint.ts` | ts | 1 | 6 | `components/dream.AudioVisualizer3D.tsx`, `engine/generated/engins.ts`, `engine/ledger/ledger.ts` | `dreamr/torridity.ts` |
| `engins/codeengin-ui/core/parser.ts` | ts | 0 | 5 | `engine/generated/engins.ts`, `engins/codeengin/diagnostics.ts`, `engins/codeengin/projectGraph.ts` | — |
| `engins/codeengin/ai/drEamsCodeAssist.ts` | ts | 0 | 5 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts`, `tests/code-dream-preview.test.ts` | — |
| `engins/contentengin/assets/indexedDBStore.ts` | ts | 0 | 5 | `engine/generated/engins.ts`, `engins/contentengin/assets/assetOptimizer.ts`, `engins/contentengin/assets/localAssetLibrary.ts` | — |
| `engins/contentengin/pipeline/paths.ts` | ts | 0 | 5 | `app/api/contentengin/assets/[assetId]/export/gameengin/route.ts`, `app/api/contentengin/assets/[assetId]/route.ts`, `engine/generated/engins.ts` | — |
| `engins/dream.ForgeEngin.tsx` | tsx | 11 | 5 | `app/daydream/forge/page.tsx`, `components/daydream/dream.StandaloneEnginSurface.tsx`, `components/runtime/dream.RuntimeView.tsx` | `components/daydream/dream.JourneyTrail.tsx`, `components/dream.BrandLogo.tsx`, `components/forge/dream.panel.AIBuilderPanel.tsx` |
| `engins/dream.QuantumCircuitCanvas.tsx` | tsx | 0 | 5 | `components/engines/portfolio/panels/dream.panel.OptimizePanel.tsx`, `engine/generated/engins.ts`, `engins/engin.LabEngin.tsx` | — |
| `engins/forgeengin/enginpipe/telemetry/client.ts` | ts | 1 | 5 | `engine/generated/engins.ts`, `engins/forgeengin/enginpipe/index.ts`, `src/engin/generated/engins.ts` | `engins/forgeengin/enginpipe/telemetry/events.ts` |
| `engins/forgeengin/enginpipe/telemetry/events.ts` | ts | 0 | 5 | `engine/generated/engins.ts`, `engins/forgeengin/enginpipe/index.ts`, `engins/forgeengin/enginpipe/telemetry/client.ts` | — |
| `engins/forgeengin/forge-ngn/piece-registry.ts` | ts | 0 | 5 | `components/daydream/dream.NGNEngin.tsx`, `engine/generated/engins.ts`, `engins/forgeengin/forge-ngn/assembly.ts` | — |
| `engins/forgeengin/forge/forgeBuild.ts` | ts | 0 | 5 | `components/forge/dream.panel.AIBuilderPanel.tsx`, `engine/generated/engins.ts`, `engins/forgeengin/forge/useForgeBuild.ts` | — |
| `engins/gameengin/assets/BundleManifest.ts` | ts | 1 | 5 | `engine/generated/engins.ts`, `engins/gameengin/assets/BundleCache.ts`, `engins/gameengin/systems/assets.ts` | `engins/gameengin/cartridge.ts` |
| `engins/gameengin/gameEnginRuntime.ts` | ts | 4 | 5 | `engine/generated/engins.ts`, `engine/os/index.ts`, `engins/gameengin/GameEnginCore.ts` | `engine/events/eventBus.ts`, `engins/gameengin/runtime/FrameBudget.ts`, `engins/gameengin/runtime/RuntimeQuality.ts` |
| `engins/gameengin/games/library-state.ts` | ts | 0 | 5 | `components/games/dream.GamesHub.tsx`, `engine/generated/engins.ts`, `engins/engin.GameEngin.tsx` | — |
| `engins/gameengin/games/useRemoteChannel.ts` | ts | 0 | 5 | `components/games/dream.remote.GameRemoteSurface.tsx`, `engine/generated/engins.ts`, `engins/engin.GameEngin.tsx` | — |
| `engins/gameengin/post-fx.ts` | ts | 1 | 5 | `components/games/dream.NeonDrift.tsx`, `engine/generated/engins.ts`, `engins/gameengin/index.ts` | `engins/gameengin/core.ts` |
| `engins/gameengin/remote/moves.ts` | ts | 0 | 5 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/remote/comboMachine.ts` | — |
| `engins/gameengin/runtime/FrameBudget.ts` | ts | 0 | 5 | `engine/generated/engins.ts`, `engins/gameengin/gameEnginRuntime.ts`, `engins/gameengin/runtime/FrameClock.ts` | — |
| `engins/gameengin/runtime/RuntimeQuality.ts` | ts | 0 | 5 | `engine/generated/engins.ts`, `engins/gameengin/backendNegotiator.ts`, `engins/gameengin/gameEnginRuntime.ts` | — |
| `engins/rulesets/code/codeEnginRuleSet.ts` | ts | 4 | 5 | `engine/generated/engins.ts`, `engins/rulesets/code/useCodeEnginRuntime.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts`, `engine/engin-runtime/EnginCapabilities.ts`, `engine/engin-runtime/EnginCapabilityTargets.ts` |
| `engins/rulesets/homedream/dream.homedream.constants.ts` | ts | 0 | 5 | `engine/generated/rulesets.ts`, `engins/rulesets/homedream/dream.homedream.physics.ts`, `engins/rulesets/homedream/dream.homedream.transforms.ts` | — |
| `engins/autoopen/dream.AutoOpenGameEngin.tsx` | tsx | 2 | 4 | `app/daydream/games/page.tsx`, `daydreams/games/page.tsx`, `engine/generated/engins.ts` | `engine/runtime/instanceManager.ts`, `engine/runtime/useSharedEnginChannel.ts` |
| `engins/brandingengin/identity/logos.ts` | ts | 0 | 4 | `components/dream.BrandLogo.tsx`, `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/codeengin-ui/modules/ai-co-pilot/dream.panel.AgentPanel.tsx` | tsx | 1 | 4 | `engine/generated/engins.ts`, `engins/codeengin-ui/modules/ai-co-pilot/index.ts`, `engins/codeengin-ui/orchestrator/dream.index.tsx` | `engins/codeengin-ui/modules/ai-co-pilot/useAgentSession.ts` |
| `engins/codeengin-ui/modules/ai-co-pilot/useAgentSession.ts` | ts | 0 | 4 | `engine/generated/engins.ts`, `engins/codeengin-ui/modules/ai-co-pilot/dream.panel.AgentPanel.tsx`, `engins/codeengin-ui/modules/ai-co-pilot/index.ts` | — |
| `engins/codeengin/diff/diffUtils.ts` | ts | 0 | 4 | `components/daydream/dream.DiffViewer.tsx`, `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/codeengin/runner.ts` | ts | 3 | 4 | `app/api/ci/run/route.ts`, `app/api/codeengin/run/route.ts`, `engine/generated/engins.ts` | `engins/codeengin/workspaceStore.ts`, `engins/codeengin/runnerCommands.ts`, `engins/codeengin/types.ts` |
| `engins/contentengin/builders/primitiveBuilder.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/contentengin/builders/geometryBuilder.ts`, `engins/contentengin/builders/meshBuilder.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/materials/paletteExtractor.ts` | ts | 0 | 4 | `engine/generated/engins.ts`, `engins/contentengin/photo/colorCluster.ts`, `engins/contentengin/photo/imageAnalyzer.ts` | — |
| `engins/contentengin/photo/imageAnalyzer.ts` | ts | 3 | 4 | `app/api/contentengin/upload/route.ts`, `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts`, `engins/contentengin/materials/paletteExtractor.ts`, `engins/contentengin/photo/pngDecoder.ts` |
| `engins/contentengin/photo/regionDetector.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/contentengin/builders/meshBuilder.ts`, `engins/contentengin/photo/photoToRecipe.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/pipeline/exportGlb.ts` | ts | 2 | 4 | `engine/generated/engins.ts`, `engins/contentengin/pipeline/validate.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts`, `engins/contentengin/builders/geometryBuilder.ts` |
| `engins/forgeengin/enginpipe/artifact/manifest.ts` | ts | 0 | 4 | `engine/generated/engins.ts`, `engins/forgeengin/enginpipe/index.ts`, `src/engin/generated/engins.ts` | — |
| `engins/forgeengin/enginpipe/quality/tiers.ts` | ts | 0 | 4 | `engine/generated/engins.ts`, `engins/forgeengin/enginpipe/index.ts`, `src/engin/generated/engins.ts` | — |
| `engins/forgeengin/forge-ngn/assembly.ts` | ts | 1 | 4 | `components/daydream/dream.NGNEngin.tsx`, `engine/generated/engins.ts`, `engins/forgeengin/forge-ngn/index.ts` | `engins/forgeengin/forge-ngn/piece-registry.ts` |
| `engins/forgeengin/forge/forgeNexus.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/dream.ForgeEngin.tsx`, `src/engin/generated/engins.ts` | `engins/forgeengin/forge/forgeRegistry.ts` |
| `engins/forgeengin/forge/forgeRituals.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/dream.ForgeEngin.tsx`, `src/engin/generated/engins.ts` | `engins/forgeengin/forge/forgeRegistry.ts` |
| `engins/gameengin/assets/BundleCache.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/gameengin/systems/assets.ts`, `src/engin/generated/engins.ts` | `engins/gameengin/assets/BundleManifest.ts` |
| `engins/gameengin/cartridge-manifest.ts` | ts | 0 | 4 | `engine/generated/engins.ts`, `engins/gameengin/dreamr-loader.ts`, `src/engin/generated/engins.ts` | — |
| `engins/gameengin/cartridgeLoader.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `src/engin/generated/engins.ts` | `engins/gameengin/dreamr-loader.ts` |
| `engins/gameengin/controls/control-mappings.ts` | ts | 2 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/index.ts` | `supabase/client/client.ts`, `supabase/client/safeGetUser.ts` |
| `engins/gameengin/dream-engine.ts` | ts | 4 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/index.ts` | `engins/contentengin/media/ledger.ts`, `supabase/client/client.ts`, `supabase/client/safeGetUser.ts` |
| `engins/gameengin/dreamr-loader.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/gameengin/cartridgeLoader.ts`, `engins/gameengin/webgpu-runtime-shell.ts` | `engins/gameengin/cartridge-manifest.ts` |
| `engins/gameengin/executionWiring.ts` | ts | 39 | 4 | `engine/generated/engins.ts`, `engins/gameengin/GameRuntime.tsx`, `engins/gameengin/index.ts` | `engins/gameengin/accessibility-ai.ts`, `engins/gameengin/ai-director.ts`, `engins/gameengin/ai-npcs.ts` |
| `engins/gameengin/games/avatar.ts` | ts | 0 | 4 | `components/games/dream.GamesHub.tsx`, `engine/generated/engins.ts`, `engins/engin.GameEngin.tsx` | — |
| `engins/gameengin/games/gameControllerButtons.ts` | ts | 0 | 4 | `components/games/dream.remote.GameRemoteSurface.tsx`, `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/gameengin/games/madmaxi-wildfall-world.ts` | ts | 0 | 4 | `components/games/dream.MadMaxiWildfall.tsx`, `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts` | — |
| `engins/gameengin/games/useGameInputKeyboardBridge.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/engin.GameEngin.tsx`, `src/engin/generated/engins.ts` | `components/games/dream.remote.GameRemote.tsx` |
| `engins/gameengin/games/useImmersiveGameLayout.ts` | ts | 0 | 4 | `components/games/madmaxi/dream.MadmaxiGame.tsx`, `dreamdmbar/dreamsurface.dreamdmbar.tsx`, `engine/generated/engins.ts` | — |
| `engins/gameengin/platform.ts` | ts | 4 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/index.ts` | `engins/gameengin/ai-director.ts`, `engins/gameengin/cartridge.ts`, `engins/gameengin/core.ts` |
| `engins/gameengin/procgen.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `src/engin/generated/engins.ts` | `engins/isosurfaceDualContouring.ts` |
| `engins/gameengin/registerCartridges.ts` | ts | 4 | 4 | `components/gameengin/dream.CartridgeRegistryBootstrap.tsx`, `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/gameengin/cartridges/manifest.ts`, `engins/gameengin/cartridges/loaders.ts`, `engine/runtime/moduleRegistry.ts` |
| `engins/gameengin/remote/comboMachine.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/remote/index.ts` | `engins/gameengin/remote/moves.ts` |
| `engins/gameengin/remote/layout.ts` | ts | 0 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/remote/index.ts` | — |
| `engins/gameengin/remote/sprintDetector.ts` | ts | 0 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/remote/index.ts` | — |
| `engins/gameengin/systems/ai.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/systems/index.ts` | `engins/gameengin/power-systems.ts` |
| `engins/gameengin/systems/animation.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/systems/index.ts` | `engins/gameengin/power-systems.ts` |
| `engins/gameengin/systems/assets.ts` | ts | 3 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/systems/index.ts` | `engins/gameengin/power-systems.ts`, `engins/gameengin/assets/BundleManifest.ts`, `engins/gameengin/assets/BundleCache.ts` |
| `engins/gameengin/systems/lod.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/systems/index.ts` | `engins/gameengin/power-systems.ts` |
| `engins/gameengin/systems/network.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/systems/index.ts` | `engins/gameengin/power-systems.ts` |
| `engins/gameengin/systems/physics.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/systems/index.ts` | `engins/gameengin/power-systems.ts` |
| `engins/gameengin/systems/pooling.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/systems/index.ts` | `engins/gameengin/power-systems.ts` |
| `engins/gameengin/systems/rendering.ts` | ts | 2 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/systems/index.ts` | `engins/gameengin/power-systems.ts`, `engins/renderengin/webgpu.ts` |
| `engins/gameengin/systems/spatial.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/systems/index.ts` | `engins/gameengin/power-systems.ts` |
| `engins/gameengin/systems/world.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/systems/index.ts` | `engins/gameengin/power-systems.ts` |
| `engins/gameengin/unifiedLoop.ts` | ts | 0 | 4 | `engine/generated/engins.ts`, `engins/gameengin/index.ts`, `engins/gameengin/useUnifiedLoop.ts` | — |
| `engins/gameengin/useUnifiedLoop.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `engins/gameengin/index.ts` | `engins/gameengin/unifiedLoop.ts` |
| `engins/gameengin/world-crdt.ts` | ts | 0 | 4 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `src/engin/generated/engins.ts` | — |
| `engins/portfolio/dream.PortfolioEngin.tsx` | tsx | 5 | 4 | `app/daydream/lab/portfolio/page.tsx`, `components/engines/portfolio/dream.PortfolioEnginApp.tsx`, `engine/generated/engins.ts` | `components/daydream/dream.JourneyTrail.tsx`, `engins/dream.QuantumCircuitCanvas.tsx`, `engins/forgeengin/forge/forgeIntelligence.ts` |
| `engins/renderengin/RenderEnginViewport.tsx` | tsx | 5 | 4 | `engins/renderengin/RenderEnginInlineSurface.tsx`, `engins/renderengin/RenderStage.tsx`, `engins/renderengin/index.ts` | `engine/engin-runtime/EnginRuntime.ts`, `engins/renderengin/core.ts`, `engins/renderengin/assets.ts` |
| `engins/renderengin/RenderStage.tsx` | tsx | 5 | 4 | `components/contentengin/AssetPreview3D.tsx`, `components/webgpu/dream.WebGPUShowcase.tsx`, `engins/renderengin/index.ts` | `engine/engin-runtime/EnginRuntime.ts`, `engine/engin-runtime/EnginBaseState.ts`, `engins/renderengin/core.ts` |
| `engins/renderengin/runtimeRegistration.ts` | ts | 2 | 4 | `components/engines/render/dream.RenderServiceDiagnostics.tsx`, `engins/renderengin/index.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginRuntimeRegistry.ts`, `engins/renderengin/core.ts` |
| `engins/renderengin/virtualization.ts` | ts | 2 | 4 | `engins/renderengin/advancedRendering.ts`, `engins/renderengin/index.ts`, `engins/renderengin/viewportControls.ts` | `engins/renderengin/core.ts`, `engins/renderengin/scene.ts` |
| `engins/rulesets/brand/brandEnginRuleSet.ts` | ts | 4 | 4 | `engine/generated/engins.ts`, `engins/rulesets/brand/useBrandEnginRuntime.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts`, `engine/engin-runtime/EnginCapabilities.ts`, `engine/engin-runtime/EnginCapabilityTargets.ts` |
| `engins/rulesets/content/contentEnginRuleSet.ts` | ts | 5 | 4 | `engine/generated/engins.ts`, `engins/rulesets/content/useContentEnginRuntime.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts`, `engine/engin-runtime/EnginCapabilities.ts`, `engine/engin-runtime/EnginCapabilityTargets.ts` |
| `engins/rulesets/homedream/dream.homedream.transforms.ts` | ts | 1 | 4 | `engine/generated/rulesets.ts`, `engine/runtime/dreamsurface/dreamsurface.bridge.ts`, `engins/rulesets/homedream/index.ts` | `engins/rulesets/homedream/dream.homedream.constants.ts` |
| `engins/rulesets/lab/labEnginRuleSet.ts` | ts | 4 | 4 | `engine/generated/engins.ts`, `engins/rulesets/lab/useLabEnginRuntime.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts`, `engine/engin-runtime/EnginCapabilities.ts`, `engine/engin-runtime/EnginCapabilityTargets.ts` |
| `engins/rulesets/music/starMakerEnginRuleSet.ts` | ts | 4 | 4 | `engine/generated/engins.ts`, `engins/rulesets/music/useStarMakerEnginRuntime.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts`, `engine/engin-runtime/EnginCapabilities.ts`, `engine/engin-runtime/EnginCapabilityTargets.ts` |
| `engins/starmakerengin/audio-fingerprint/fingerprint.ts` | ts | 1 | 4 | `engine/generated/engins.ts`, `engins/starmakerengin/audio-fingerprint/index.ts`, `engins/starmakerengin/audio-fingerprint/stem-extractor.ts` | `engins/starmakerengin/audio-fingerprint/peak-map.ts` |
| `engins/starmakerengin/audio-fingerprint/peak-map.ts` | ts | 0 | 4 | `engine/generated/engins.ts`, `engins/starmakerengin/audio-fingerprint/fingerprint.ts`, `engins/starmakerengin/audio-fingerprint/index.ts` | — |
| `engins/starmakerengin/music/starmaker.ts` | ts | 0 | 4 | `engine/generated/engins.ts`, `engins/engin.StarMakerEngin.tsx`, `src/engin/generated/engins.ts` | — |
| `engins/starmakerengin/music/starmakerArrangement.ts` | ts | 0 | 4 | `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx`, `engine/generated/engins.ts`, `engins/engin.StarMakerEngin.tsx` | — |
| `engins/codeengin-ui/modules/ai-co-pilot/index.ts` | ts | 2 | 3 | `engine/generated/engins.ts`, `engins/engin.CodeEngin.tsx`, `src/engin/generated/engins.ts` | `engins/codeengin-ui/modules/ai-co-pilot/dream.panel.AgentPanel.tsx`, `engins/codeengin-ui/modules/ai-co-pilot/useAgentSession.ts` |
| `engins/codeengin/diagnostics.ts` | ts | 3 | 3 | `app/api/codeengin/diagnostics/route.ts`, `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/codeengin-ui/core/parser.ts`, `engins/codeengin/workspaceStore.ts`, `engins/codeengin/types.ts` |
| `engins/codeengin/diff/aiEditEngine.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts`, `tests/ai-edit-engine.test.ts` | — |
| `engins/codeengin/git.ts` | ts | 1 | 3 | `app/api/codeengin/git/route.ts`, `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/codeengin/workspaceStore.ts` |
| `engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel.tsx` | tsx | 1 | 3 | `engins/CodeEngin/modules/ai-co-pilot/index.ts`, `engins/CodeEngin/orchestrator/dream.index.tsx`, `src/engin/generated/engins.ts` | `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts` |
| `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts` | ts | 0 | 3 | `engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel.tsx`, `engins/CodeEngin/modules/ai-co-pilot/index.ts`, `src/engin/generated/engins.ts` | — |
| `engins/codeengin/projectGraph.ts` | ts | 3 | 3 | `app/api/codeengin/workspace/route.ts`, `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/codeengin-ui/core/parser.ts`, `engins/codeengin/workspaceStore.ts`, `engins/codeengin/types.ts` |
| `engins/codeengin/runnerCommands.ts` | ts | 0 | 3 | `app/api/codeengin/workspace/route.ts`, `engins/codeengin/runner.ts`, `src/engin/generated/engins.ts` | — |
| `engins/codeengin/search.ts` | ts | 2 | 3 | `app/api/codeengin/search/route.ts`, `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/codeengin/workspaceStore.ts`, `engins/codeengin/types.ts` |
| `engins/contentengin/assets/assetOptimizer.ts` | ts | 1 | 3 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts`, `tests/asset-optimizer.test.ts` | `engins/contentengin/assets/indexedDBStore.ts` |
| `engins/contentengin/builders/geometryBuilder.ts` | ts | 2 | 3 | `engine/generated/engins.ts`, `engins/contentengin/pipeline/exportGlb.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts`, `engins/contentengin/builders/primitiveBuilder.ts` |
| `engins/contentengin/builders/meshBuilder.ts` | ts | 4 | 3 | `engine/generated/engins.ts`, `engins/contentengin/pipeline/validate.ts`, `src/engin/generated/engins.ts` | `engins/isosurfaceDualContouring.ts`, `engins/contentengin/assetTypes.ts`, `engins/contentengin/builders/primitiveBuilder.ts` |
| `engins/contentengin/content/publishIntent.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts`, `tests/content-publish-intent.test.ts` | — |
| `engins/contentengin/content/transcriptEditor.ts` | ts | 0 | 3 | `app/api/content/transcribe/route.ts`, `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/content/voiceClone.ts` | ts | 0 | 3 | `app/api/content/voice-clone/route.ts`, `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/grammars/animalGrammar.ts` | ts | 1 | 3 | `engine/generated/engins.ts`, `engins/contentengin/grammars/creatureGrammar.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/media/h265-encoder.ts` | ts | 0 | 3 | `components/games/dream.RecordingControls.tsx`, `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/photo/pngDecoder.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `engins/contentengin/photo/imageAnalyzer.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/pipeline/build.ts` | ts | 1 | 3 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts`, `tests/contentengin/contentengin-export.test.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/pipeline/validate.ts` | ts | 3 | 3 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts`, `tests/contentengin/contentengin-export.test.ts` | `engins/contentengin/assetTypes.ts`, `engins/contentengin/builders/meshBuilder.ts`, `engins/contentengin/pipeline/exportGlb.ts` |
| `engins/contentengin/recipes/recipeTypes.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `engins/contentengin/recipes/recipeResolver.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/rigging/fitArmature.ts` | ts | 1 | 3 | `engine/generated/engins.ts`, `engins/contentengin/rigging/index.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/rigging/index.ts` | ts | 2 | 3 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts`, `tests/contentengin/contentengin-rigging.test.ts` | `engins/contentengin/rigging/fitArmature.ts`, `engins/contentengin/rigging/rigTypes.ts` |
| `engins/contentengin/rigging/rigTypes.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `engins/contentengin/rigging/index.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/rigging/rigValidator.ts` | ts | 1 | 3 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts`, `tests/contentengin/contentengin-rigging.test.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/forgeengin/enginpipe/shell/ArtifactSlot.tsx` | tsx | 1 | 3 | `engine/generated/engins.ts`, `engins/forgeengin/enginpipe/index.ts`, `src/engin/generated/engins.ts` | `engine/events/eventBus.ts` |
| `engins/forgeengin/forge/useForgeBuild.ts` | ts | 2 | 3 | `components/forge/dream.panel.AIBuilderPanel.tsx`, `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/forgeengin/forge/forgeBuild.ts`, `utils/index.ts` |
| `engins/gameengin/accessibility-ai.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `src/engin/generated/engins.ts` | — |
| `engins/gameengin/ai-npcs.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `src/engin/generated/engins.ts` | — |
| `engins/gameengin/backendNegotiator.ts` | ts | 3 | 3 | `components/gameengin/dream.cartridge.CartridgeLauncher.tsx`, `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/gameengin/cartridge.ts`, `engins/gameengin/cartridges/manifest.ts`, `engins/gameengin/runtime/RuntimeQuality.ts` |
| `engins/gameengin/cartridges/achievementEngine.ts` | ts | 1 | 3 | `engine/generated/engins.ts`, `engins/gameengin/GameRuntime.tsx`, `src/engin/generated/engins.ts` | `engins/gameengin/cartridge.ts` |
| `engins/gameengin/cartridges/apiStubs.ts` | ts | 1 | 3 | `engine/generated/engins.ts`, `engins/gameengin/GameRuntime.tsx`, `src/engin/generated/engins.ts` | `engins/gameengin/cartridge.ts` |
| `engins/gameengin/cartridges/index.ts` | ts | 2 | 3 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `src/engin/generated/engins.ts` | `engins/gameengin/cartridges/manifest.ts`, `engins/gameengin/cartridges/loaders.ts` |
| `engins/gameengin/cartridges/saveState.ts` | ts | 1 | 3 | `engine/generated/engins.ts`, `engins/gameengin/GameRuntime.tsx`, `src/engin/generated/engins.ts` | `engins/gameengin/cartridge.ts` |
| `engins/gameengin/cloud-compute.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `src/engin/generated/engins.ts` | — |
| `engins/gameengin/GameEnginCore.ts` | ts | 2 | 3 | `engins/gameengin/config/demoGameConfig.ts`, `engins/gameengin/launcher.ts`, `src/engin/generated/engins.ts` | `engins/gameengin/core.ts`, `engins/gameengin/gameEnginRuntime.ts` |
| `engins/gameengin/games/DualSenseManager.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `engins/engin.GameEngin.tsx`, `src/engin/generated/engins.ts` | — |
| `engins/gameengin/games/gameControllerLeft.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts`, `tests/game-controller.test.ts` | — |
| `engins/gameengin/games/gameControllerRight.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts`, `tests/game-controller.test.ts` | — |
| `engins/gameengin/games/useAIDirector.ts` | ts | 1 | 3 | `engine/generated/engins.ts`, `engins/engin.GameEngin.tsx`, `src/engin/generated/engins.ts` | `engins/gameengin/ai-director.ts` |
| `engins/gameengin/games/useGamepad.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `engins/engin.GameEngin.tsx`, `src/engin/generated/engins.ts` | — |
| `engins/gameengin/generative-audio.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `src/engin/generated/engins.ts` | — |
| `engins/gameengin/input/index.ts` | ts | 1 | 3 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts`, `tests/gameengin-input-router.test.ts` | `engins/gameengin/input/InputRouter.ts` |
| `engins/gameengin/input/InputRouter.ts` | ts | 1 | 3 | `engine/generated/engins.ts`, `engins/gameengin/input/index.ts`, `src/engin/generated/engins.ts` | `engins/gameengin/cartridge.ts` |
| `engins/gameengin/neural-render.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `src/engin/generated/engins.ts` | — |
| `engins/gameengin/path-tracing.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `src/engin/generated/engins.ts` | — |
| `engins/gameengin/predictive-stream.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `src/engin/generated/engins.ts` | — |
| `engins/gameengin/remote/index.ts` | ts | 4 | 3 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts`, `tests/gameengin-remote.test.ts` | `engins/gameengin/remote/comboMachine.ts`, `engins/gameengin/remote/layout.ts`, `engins/gameengin/remote/moves.ts` |
| `engins/gameengin/render/ShaderRegistry.ts` | ts | 1 | 3 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts`, `tests/gameengin-asset-pipeline.test.ts` | `engins/gameengin/cartridge.ts` |
| `engins/gameengin/runtime/FrameClock.ts` | ts | 1 | 3 | `engine/generated/engins.ts`, `engins/gameengin/runtime/index.ts`, `src/engin/generated/engins.ts` | `engins/gameengin/runtime/FrameBudget.ts` |
| `engins/gameengin/runtime/index.ts` | ts | 3 | 3 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts`, `tests/gameengin-runtime-upgrade.test.ts` | `engins/gameengin/runtime/FrameBudget.ts`, `engins/gameengin/runtime/FrameClock.ts`, `engins/gameengin/runtime/RuntimeQuality.ts` |
| `engins/gameengin/webgpu-runtime-shell.ts` | ts | 1 | 3 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `src/engin/generated/engins.ts` | `engins/gameengin/dreamr-loader.ts` |
| `engins/gameengin/xr.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `src/engin/generated/engins.ts` | — |
| `engins/renderengin/assets.ts` | ts | 3 | 3 | `engins/renderengin/RenderEnginViewport.tsx`, `engins/renderengin/index.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginCapabilities.ts`, `engine/engin-runtime/EnginBaseState.ts`, `engins/renderengin/core.ts` |
| `engins/renderengin/scene.ts` | ts | 2 | 3 | `engins/renderengin/index.ts`, `engins/renderengin/virtualization.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts`, `engins/renderengin/core.ts` |
| `engins/rulesets/brand/useBrandEnginRuntime.ts` | ts | 3 | 3 | `engine/generated/engins.ts`, `engins/engin.BrandingEngin.tsx`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginIOAdapter.ts`, `engine/engin-runtime/EnginRuntime.ts`, `engins/rulesets/brand/brandEnginRuleSet.ts` |
| `engins/rulesets/code/useCodeEnginRuntime.ts` | ts | 3 | 3 | `engine/generated/engins.ts`, `engins/engin.CodeEngin.tsx`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginIOAdapter.ts`, `engine/engin-runtime/EnginRuntime.ts`, `engins/rulesets/code/codeEnginRuleSet.ts` |
| `engins/rulesets/content/useContentEnginRuntime.ts` | ts | 3 | 3 | `engine/generated/engins.ts`, `engins/contentengin/useImplicitAssetWorkspace.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginIOAdapter.ts`, `engine/engin-runtime/EnginRuntime.ts`, `engins/rulesets/content/contentEnginRuleSet.ts` |
| `engins/rulesets/game/index.ts` | ts | 1 | 3 | `engine/generated/engins.ts`, `engins/gameengin/executionWiring.ts`, `src/engin/generated/engins.ts` | `engins/rulesets/game/gameEnginRuleSet.ts` |
| `engins/rulesets/game/useGameEnginRuntime.ts` | ts | 3 | 3 | `engine/generated/engins.ts`, `engins/engin.GameEngin.tsx`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginIOAdapter.ts`, `engine/engin-runtime/EnginRuntime.ts`, `engins/rulesets/game/gameEnginRuleSet.ts` |
| `engins/rulesets/homedream/dream.homedream.physics.ts` | ts | 1 | 3 | `engine/generated/rulesets.ts`, `engins/rulesets/homedream/index.ts`, `src/engin/generated/engins.ts` | `engins/rulesets/homedream/dream.homedream.constants.ts` |
| `engins/rulesets/lab/useLabEnginRuntime.ts` | ts | 3 | 3 | `engine/generated/engins.ts`, `engins/engin.LabEngin.tsx`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginIOAdapter.ts`, `engine/engin-runtime/EnginRuntime.ts`, `engins/rulesets/lab/labEnginRuleSet.ts` |
| `engins/rulesets/music/useStarMakerEnginRuntime.ts` | ts | 3 | 3 | `engine/generated/engins.ts`, `engins/engin.StarMakerEngin.tsx`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginIOAdapter.ts`, `engine/engin-runtime/EnginRuntime.ts`, `engins/rulesets/music/starMakerEnginRuleSet.ts` |
| `engins/rulesets/workflowEngine.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `engins/rulesets/useEnginWorkflow.ts`, `src/engin/generated/engins.ts` | — |
| `engins/starmakerengin/audio-fingerprint/stem-extractor.ts` | ts | 1 | 3 | `engine/generated/engins.ts`, `engins/starmakerengin/audio-fingerprint/index.ts`, `src/engin/generated/engins.ts` | `engins/starmakerengin/audio-fingerprint/fingerprint.ts` |
| `engins/starmakerengin/music/presets.ts` | ts | 0 | 3 | `engine/generated/engins.ts`, `engins/engin.StarMakerEngin.tsx`, `src/engin/generated/engins.ts` | — |
| `engins/codeengin-ui/orchestrator/dream.index.tsx` | tsx | 2 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/forgeengin/enginpipe/index.ts`, `engins/codeengin-ui/modules/ai-co-pilot/dream.panel.AgentPanel.tsx` |
| `engins/contentengin/AssetViewport.tsx` | tsx | 4 | 2 | `engins/contentengin/ImplicitAssetWorkspace.tsx`, `src/engin/generated/engins.ts` | `engins/isosurfaceAssetPipeline.ts`, `engins/isosurfaceDualContouring.ts`, `engins/renderengin/core.ts` |
| `engins/contentengin/builders/modifiers.ts` | ts | 0 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/builders/textureBuilder.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/builders/uvGenerator.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/cli.ts` | ts | 0 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/composite/compositor.ts` | ts | 0 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/composite/fxSimulation.ts` | ts | 0 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/composite/matchmover.ts` | ts | 0 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/composite/motionCapture.ts` | ts | 0 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/composite/rotoscope.ts` | ts | 0 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/content/generativeFill.ts` | ts | 0 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/content/seoScorer.ts` | ts | 0 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/grammars/bicycleGrammar.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/grammars/bridgeGrammar.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/grammars/buildingGrammar.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/grammars/creatureGrammar.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/grammars/animalGrammar.ts` |
| `engins/contentengin/grammars/humanoidGrammar.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/grammars/propGrammar.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/grammars/roadGrammar.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/grammars/shared.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/grammars/terrainGrammar.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/grammars/treeGrammar.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/grammars/vehicleGrammar.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/grammars/waterGrammar.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/ImplicitAssetWorkspace.tsx` | tsx | 4 | 2 | `components/contentengin/ContentEnginStudio.tsx`, `src/engin/generated/engins.ts` | `engins/contentengin/AssetViewport.tsx`, `engins/isosurfaceAssetPipeline.ts`, `engins/renderengin/index.ts` |
| `engins/contentengin/materials/materialTypes.ts` | ts | 0 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/materials/proceduralMaterials.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/photo/colorCluster.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/materials/paletteExtractor.ts` |
| `engins/contentengin/photo/edgeDetector.ts` | ts | 0 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/photo/photoToRecipe.ts` | ts | 2 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts`, `engins/contentengin/photo/regionDetector.ts` |
| `engins/contentengin/pipeline/bundle.ts` | ts | 0 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/pipeline/generateCollision.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/pipeline/generateLods.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/pipeline/writeManifest.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/recipes/recipeResolver.ts` | ts | 2 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts`, `engins/contentengin/recipes/recipeTypes.ts` |
| `engins/contentengin/recipes/seededRandom.ts` | ts | 0 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/rigging/landmarks.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/runtimeProfile.ts` | ts | 2 | 2 | `engins/contentengin/performancePlan.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts`, `engins/contentengin/upgradeMatrix.ts` |
| `engins/contentengin/shaders/shaderRegistry.ts` | ts | 1 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/shaders/shaderTypes.ts` | ts | 0 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/contentengin/upgradeMatrix.ts` | ts | 1 | 2 | `engins/contentengin/runtimeProfile.ts`, `src/engin/generated/engins.ts` | `engins/contentengin/assetTypes.ts` |
| `engins/contentengin/useImplicitAssetWorkspace.ts` | ts | 4 | 2 | `engins/contentengin/ImplicitAssetWorkspace.tsx`, `src/engin/generated/engins.ts` | `engine/offline/offlineCache.ts`, `engins/rulesets/content/useContentEnginRuntime.ts`, `engins/isosurfaceAssetPipeline.ts` |
| `engins/forgeengin/forge-ngn/index.ts` | ts | 2 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/forgeengin/forge-ngn/assembly.ts`, `engins/forgeengin/forge-ngn/piece-registry.ts` |
| `engins/gameengin/config/demoGameConfig.ts` | ts | 1 | 2 | `engins/gameengin/launcher.ts`, `src/engin/generated/engins.ts` | `engins/gameengin/GameEnginCore.ts` |
| `engins/gameengin/games/lucid-avenue-world.ts` | ts | 0 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/gameengin/handlers.ts` | ts | 1 | 2 | `engins/engin.GameEngin.tsx`, `src/engin/generated/engins.ts` | `engins/rulesets/game/gameEnginRuleSet.ts` |
| `engins/gameengin/index.ts` | ts | 15 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/gameengin/controls/control-mappings.ts`, `engins/gameengin/core.ts`, `engins/gameengin/dream-engine.ts` |
| `engins/gameengin/systems/index.ts` | ts | 10 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/gameengin/systems/ai.ts`, `engins/gameengin/systems/animation.ts`, `engins/gameengin/systems/assets.ts` |
| `engins/renderengin/advancedRendering.ts` | ts | 2 | 2 | `engins/renderengin/index.ts`, `src/engin/generated/engins.ts` | `engins/renderengin/core.ts`, `engins/renderengin/virtualization.ts` |
| `engins/renderengin/animation.ts` | ts | 1 | 2 | `engins/renderengin/index.ts`, `src/engin/generated/engins.ts` | `engins/renderengin/core.ts` |
| `engins/renderengin/benchmarkProof.ts` | ts | 1 | 2 | `engins/renderengin/index.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts` |
| `engins/renderengin/completionEvidence.ts` | ts | 1 | 2 | `engins/renderengin/index.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts` |
| `engins/renderengin/diagnostics.ts` | ts | 3 | 2 | `engins/renderengin/index.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts`, `engins/renderengin/core.ts`, `engins/renderengin/webgpu.ts` |
| `engins/renderengin/lighting.ts` | ts | 2 | 2 | `engins/renderengin/index.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts`, `engins/renderengin/core.ts` |
| `engins/renderengin/liveBenchmark.ts` | ts | 2 | 2 | `engins/renderengin/index.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts`, `engins/renderengin/webgpu.ts` |
| `engins/renderengin/materials.ts` | ts | 2 | 2 | `engins/renderengin/index.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts`, `engins/renderengin/core.ts` |
| `engins/renderengin/performanceIntegrity.ts` | ts | 1 | 2 | `engins/renderengin/index.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts` |
| `engins/renderengin/postProcessing.ts` | ts | 1 | 2 | `engins/renderengin/index.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts` |
| `engins/renderengin/RenderEnginInlineSurface.tsx` | tsx | 4 | 2 | `components/engines/render/dream.RenderSurface.tsx`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginRuntime.ts`, `engins/renderengin/core.ts`, `engins/renderengin/serviceRuntime.ts` |
| `engins/renderengin/renderSettings.ts` | ts | 1 | 2 | `engins/renderengin/index.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts` |
| `engins/renderengin/security.ts` | ts | 1 | 2 | `engins/renderengin/index.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts` |
| `engins/renderengin/serviceIntegration.ts` | ts | 3 | 2 | `engins/renderengin/index.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts`, `engins/renderengin/core.ts`, `engins/renderengin/serviceRuntime.ts` |
| `engins/renderengin/textures.ts` | ts | 1 | 2 | `engins/renderengin/index.ts`, `src/engin/generated/engins.ts` | `engine/engin-runtime/EnginBaseState.ts` |
| `engins/renderengin/viewportControls.ts` | ts | 2 | 2 | `engins/renderengin/index.ts`, `src/engin/generated/engins.ts` | `engins/renderengin/core.ts`, `engins/renderengin/virtualization.ts` |
| `engins/rulesets/code/index.ts` | ts | 0 | 2 | `engine/generated/rulesets.ts`, `src/engin/generated/engins.ts` | — |
| `engins/rulesets/dreams/index.ts` | ts | 0 | 2 | `engine/generated/rulesets.ts`, `src/engin/generated/engins.ts` | — |
| `engins/rulesets/forge/index.ts` | ts | 0 | 2 | `engine/generated/rulesets.ts`, `src/engin/generated/engins.ts` | — |
| `engins/rulesets/game/declarative.ts` | ts | 0 | 2 | `engine/generated/rulesets.ts`, `src/engin/generated/engins.ts` | — |
| `engins/rulesets/homedream/index.ts` | ts | 3 | 2 | `engine/generated/rulesets.ts`, `src/engin/generated/engins.ts` | `engins/rulesets/homedream/dream.homedream.constants.ts`, `engins/rulesets/homedream/dream.homedream.transforms.ts`, `engins/rulesets/homedream/dream.homedream.physics.ts` |
| `engins/rulesets/lab/index.ts` | ts | 0 | 2 | `engine/generated/rulesets.ts`, `src/engin/generated/engins.ts` | — |
| `engins/rulesets/music/index.ts` | ts | 0 | 2 | `engine/generated/rulesets.ts`, `src/engin/generated/engins.ts` | — |
| `engins/starmakerengin/audio-fingerprint/index.ts` | ts | 3 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | `engins/starmakerengin/audio-fingerprint/fingerprint.ts`, `engins/starmakerengin/audio-fingerprint/peak-map.ts`, `engins/starmakerengin/audio-fingerprint/stem-extractor.ts` |
| `engins/starmakerengin/music/wasmAudioBridge.ts` | ts | 0 | 2 | `engine/generated/engins.ts`, `src/engin/generated/engins.ts` | — |
| `engins/CodeEngin/core/parser.ts` | ts | 0 | 1 | `src/engin/generated/engins.ts` | — |
| `engins/CodeEngin/modules/ai-co-pilot/index.ts` | ts | 2 | 1 | `src/engin/generated/engins.ts` | `engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel.tsx`, `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts` |
| `engins/CodeEngin/orchestrator/dream.index.tsx` | tsx | 2 | 1 | `src/engin/generated/engins.ts` | `engins/forgeengin/enginpipe/index.ts`, `engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel.tsx` |
| `engins/contentengin/assets/localAssetLibrary.ts` | ts | 1 | 1 | `src/engin/generated/engins.ts` | `engins/contentengin/assets/indexedDBStore.ts` |
| `engins/contentengin/performancePlan.ts` | ts | 1 | 1 | `src/engin/generated/engins.ts` | `engins/contentengin/runtimeProfile.ts` |
| `engins/gameengin/launcher.ts` | ts | 3 | 1 | `src/engin/generated/engins.ts` | `engins/gameengin/config/demoGameConfig.ts`, `engins/gameengin/GameEnginCore.ts`, `utils/index.ts` |
| `engins/labengin/implicitSurface.ts` | ts | 1 | 1 | `src/engin/generated/engins.ts` | `engins/isosurfaceDualContouring.ts` |
| `engins/renderengin/wasmAcceleration.ts` | ts | 1 | 1 | `src/engin/generated/engins.ts` | `engins/renderengin/core.ts` |
| `engins/Agents-MUST-READ-ARCHITECTURE.md` | doc | 0 | 0 | — | — |
| `engins/contentengin/rigging/templates/bird_basic.json` | config | 0 | 0 | — | — |
| `engins/contentengin/rigging/templates/fish_basic.json` | config | 0 | 0 | — | — |
| `engins/contentengin/rigging/templates/humanoid_basic.json` | config | 0 | 0 | — | — |
| `engins/contentengin/rigging/templates/quadruped_basic.json` | config | 0 | 0 | — | — |
| `engins/contentengin/rigging/templates/vehicle_mechanical.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/active-projects.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/asset-registry/README.md` | doc | 0 | 0 | — | — |
| `engins/gameengin/brain/build-history/README.md` | doc | 0 | 0 | — | — |
| `engins/gameengin/brain/character-voices/mad-maxi.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/composition-principles/leading-lines-landmark.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/composition-principles/parallax-layers.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/concept-library/neon-courier.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/concept-library/README.md` | doc | 0 | 0 | — | — |
| `engins/gameengin/brain/concept-patterns/protagonists/reluctant-courier.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/concept-patterns/README.md` | doc | 0 | 0 | — | — |
| `engins/gameengin/brain/concept-patterns/scope-formulas/one-day-runner.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/concept-patterns/settings/neon-rain-megacity.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/crash-reports/README.md` | doc | 0 | 0 | — | — |
| `engins/gameengin/brain/dialogue-patterns/callback-anchor.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/dialogue-patterns/implied-subject.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/dialogue-patterns/sentence-fragment-rhythm.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/emotional-tones/determined.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/emotional-tones/fierce.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/emotional-tones/hopeful.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/emotional-tones/reflective.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/emotional-tones/weary.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/fun-heuristics/meta-progression.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/fun-heuristics/moment-to-moment.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/fun-heuristics/session-loop.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/genre-dna/action-rpg.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/genre-dna/episodic.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/genre-dna/live-service.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/genre-dna/metroidvania.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/genre-dna/open-world.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/genre-dna/platformer.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/genre-dna/puzzle.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/genre-dna/racing.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/genre-dna/roguelike.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/genre-dna/sandbox.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/genre-dna/template.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/inspiration-corpus/celeste.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/inspiration-corpus/dead-cells.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/inspiration-corpus/hades.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/inspiration-corpus/hollow-knight.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/inspiration-corpus/outer-wilds.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/material-recipes/neon-glass-tube.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/material-recipes/rusted-iron.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/material-recipes/sun-bleached-sandstone.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/camera/look-ahead.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/camera/screen-shake.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/camera/smooth-follow.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/combat/combo.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/combat/hit-stop.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/combat/parry.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/combat/ranged.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/movement/coyote-time.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/movement/dash.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/movement/double-jump.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/movement/grapple.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/movement/wall-slide.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/progression/metroidvania-gating.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/progression/roguelike-perks.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/progression/skill-tree.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/structural/ability-gating.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/structural/meta-progression.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/structural/procedural-generation.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/structural/run-persistence.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/structural/season-pass.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/mechanic-library/structural/world-streaming.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/narrative-pacing/default.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/originality-registry/by-cartridge/mad-maxi.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/originality-registry/signatures.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/principles/emotional-core.md` | doc | 0 | 0 | — | — |
| `engins/gameengin/brain/principles/feedback.md` | doc | 0 | 0 | — | — |
| `engins/gameengin/brain/principles/mastery.md` | doc | 0 | 0 | — | — |
| `engins/gameengin/brain/principles/progression.md` | doc | 0 | 0 | — | — |
| `engins/gameengin/brain/principles/responsiveness.md` | doc | 0 | 0 | — | — |
| `engins/gameengin/brain/principles/risk-reward.md` | doc | 0 | 0 | — | — |
| `engins/gameengin/brain/progression-state/README.md` | doc | 0 | 0 | — | — |
| `engins/gameengin/brain/rd-sessions/README.md` | doc | 0 | 0 | — | — |
| `engins/gameengin/brain/README.md` | doc | 0 | 0 | — | — |
| `engins/gameengin/brain/technique-library/lighting/three-point-mood.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/technique-library/modeling/edge-flow.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/technique-library/modeling/silhouette-first.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/technique-library/optimization/texture-atlasing.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/upgrade-history/prioritization-rules.json` | config | 0 | 0 | — | — |
| `engins/gameengin/brain/upgrade-history/README.md` | doc | 0 | 0 | — | — |
| `engins/gameengin/brain/visual-bible/characters/mad-maxi.md` | doc | 0 | 0 | — | — |
| `engins/gameengin/brain/visual-bible/environments/neon-wasteland.md` | doc | 0 | 0 | — | — |
| `engins/gameengin/brain/work-queue/README.md` | doc | 0 | 0 | — | — |
| `engins/renderengin/README.md` | doc | 0 | 0 | — | — |

</details>

<details><summary>components/ (328 files)</summary>

| File | Type | Imports | Imported By | Top Importers | Top Imports |
|---|---|---|---|---|---|
| `components/engines/shared/index.ts` | ts | 4 | 27 | `app/engines/brand/campaigns/page.tsx`, `app/engines/brand/identity/page.tsx`, `app/engines/code/ai/page.tsx` | `components/engines/shared/dream.bar.EnginNavBar.tsx`, `components/engines/shared/dream.EnginProvider.tsx`, `components/engines/shared/dream.makeEnginApp.tsx` |
| `components/ui/dream.AuthenticatedPageHeader.tsx` | tsx | 1 | 24 | `app/daydream/brand/page.tsx`, `app/daydream/code/page.tsx`, `app/daydream/create/page.tsx` | `components/dream.BrandLogo.tsx` |
| `components/daydream/dream.shell.DaydreamShell.tsx` | tsx | 7 | 16 | `app/daydream/brand/page.tsx`, `app/daydream/code/page.tsx`, `app/daydream/create/page.tsx` | `components/dream.BrandLogo.tsx`, `components/games/dream.remote.GameRemote.tsx`, `daydreams/shared/useDaydreamState.ts` |
| `components/ui/dream.DreamWord.tsx` | tsx | 0 | 16 | `app/ads/page.tsx`, `app/edit-profiledream/page.tsx`, `app/marketplace/[id]/page.tsx` | — |
| `components/ui-system/CustomizeModeContext.tsx` | tsx | 1 | 14 | `app/layout.tsx`, `app/settings/appearance/page.tsx`, `components/customize/dream.bar.CustomizeModeBar.tsx` | `components/ui-system/skin-engine.ts` |
| `components/daydream/dream.JourneyTrail.tsx` | tsx | 2 | 10 | `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`, `components/dreams/dream.window.JourneyDreamWindow.tsx`, `engine/generated/surfaces.ts` | `engine/journey/journeyInsights.ts`, `types/journey.ts` |
| `components/daydream/dream.OpenDaydreamSideBButton.tsx` | tsx | 0 | 10 | `app/daydream/code/page.tsx`, `app/daydream/create/page.tsx`, `app/daydream/games/page.tsx` | — |
| `components/games/dream.remote.GameRemote.tsx` | tsx | 1 | 10 | `app/daydream/game/dream.shell.ImmersiveGameShell.tsx`, `components/daydream/dream.shell.DaydreamShell.tsx`, `components/games/dream.GameController.tsx` | `components/games/dream.remote.GameRemoteSurface.tsx` |
| `components/runtime/dream.DualRuntimeContainer.tsx` | tsx | 3 | 9 | `app/dreamdmbar/_components/DreamBarDataBridge.tsx`, `app/dreamdmbar/dreamspace/page.tsx`, `app/dreamdmbar/homedream/page.tsx` | `engine/runtime/dualRuntime.ts`, `engine/runtime/iEngine.ts`, `engine/offline/offlineCache.ts` |
| `components/panels/panelTypes.ts` | ts | 0 | 8 | `app/dreamdmbar/_components/DreamBarDataBridge.tsx`, `components/dream.OSShellActivator.tsx`, `components/panels/dream.panel.SettingsPanel.tsx` | — |
| `components/profile/dream.widget.ProfileWidgetGrid.tsx` | tsx | 2 | 8 | `app/edit-profiledream/page.tsx`, `app/profile/[handle]/page.tsx`, `app/view-profile/page.tsx` | `components/connectors/dream.widget.ConnectorWidgetPicker.tsx`, `components/profile/dream.EditableAvatar.tsx` |
| `components/ui-system/runtimeViewport.ts` | ts | 1 | 8 | `app/dreamdmbar/_components/HomeDreamRegion.tsx`, `components/dream.HomeFeed.tsx`, `components/runtime/dream.shell.RuntimeShell.tsx` | `components/ui-system/responsive.ts` |
| `components/dream.ThemeApplicator.tsx` | tsx | 0 | 7 | `app/layout.tsx`, `app/settings/appearance/page.tsx`, `components/dream.VoidThemeToggle.tsx` | — |
| `components/engines/create/dream.CreateEnginApp.tsx` | tsx | 2 | 7 | `app/engines/create/calendar/page.tsx`, `app/engines/create/editor/page.tsx`, `app/engines/create/page.tsx` | `components/engines/shared/index.ts`, `engins/engin.ContentEngin.tsx` |
| `components/games/madmaxi/index.ts` | ts | 3 | 7 | `components/games/dream.BabylonSideScroller.tsx`, `components/games/dream.GamesHub.tsx`, `engine/generated/surfaces.ts` | `components/games/madmaxi/dream.MadmaxiGame.tsx`, `components/games/madmaxi/config.ts`, `components/games/madmaxi/levels.ts` |
| `components/providers/dream.ThemeProvider.tsx` | tsx | 1 | 7 | `app/layout.tsx`, `app/settings/appearance/page.tsx`, `components/dreamengin/dream.widget.AppearanceWidget.tsx` | `components/ui-system/theme-engine.ts` |
| `components/customize/panels/dream.panel.ColorPanel.tsx` | tsx | 2 | 6 | `components/customize/dream.GlobalCustomizeUI.tsx`, `components/customize/panels/dream.panel.EffectsPanel.tsx`, `components/customize/panels/dream.panel.FontPanel.tsx` | `components/ui-system/CustomizeModeContext.tsx`, `components/ui-system/skin-engine.ts` |
| `components/dream.BrandLogo.tsx` | tsx | 1 | 6 | `app/dreamdmbar/_components/HomeDreamRegion.tsx`, `components/daydream/dream.shell.DaydreamShell.tsx`, `components/ui/dream.AuthenticatedPageHeader.tsx` | `engins/brandingengin/identity/logos.ts` |
| `components/dreams/dreamsurface.shell.tsx` | tsx | 0 | 6 | `components/dreams/dream.shell.DreamShell.tsx`, `components/widgets/dream.widget.WidgetCard.tsx`, `components/widgets/dream.widget.WidgetShell.tsx` | — |
| `components/games/_fx/canvasFx.ts` | ts | 0 | 6 | `components/games/dream.Glassfall.tsx`, `components/games/dream.NullCathedral.tsx`, `components/games/dream.SerpentSiege.tsx` | — |
| `components/games/madmaxi/config.ts` | ts | 1 | 6 | `components/games/madmaxi/authoredZonePacks.ts`, `components/games/madmaxi/dream.MadmaxiGame.tsx`, `components/games/madmaxi/index.ts` | `components/games/madmaxi/types.ts` |
| `components/games/madmaxi/types.ts` | ts | 0 | 6 | `components/games/madmaxi/authoredZonePacks.ts`, `components/games/madmaxi/config.ts`, `components/games/madmaxi/dream.MadmaxiGame.tsx` | — |
| `components/shared-dream/dream.SharedDreamProvider.tsx` | tsx | 2 | 6 | `components/shared-dream/dream.InviteFlow.tsx`, `components/shared-dream/dream.SharedDreamCanvas.tsx`, `components/shared-dream/dream.SharedDreamRuntime.tsx` | `engine/collaboration/index.ts`, `supabase/client/client.ts` |
| `components/ui-system/skin-engine.ts` | ts | 0 | 6 | `components/customize/panels/dream.panel.ColorPanel.tsx`, `components/customize/panels/dream.panel.FontPanel.tsx`, `components/customize/panels/dream.panel.LayoutPanel.tsx` | — |
| `components/ui-system/theme-engine.ts` | ts | 0 | 6 | `app/settings/appearance/page.tsx`, `components/dreamengin/dream.widget.AppearanceWidget.tsx`, `components/panels/dream.panel.AppearancePanel.tsx` | — |
| `components/activity/dream.ActivityProfile.tsx` | tsx | 3 | 5 | `app/edit-profiledream/page.tsx`, `app/profile/[handle]/page.tsx`, `app/view-profile/page.tsx` | `dreamr/activity/aqs.ts`, `dreamr/activity/types.ts`, `components/activity/dream.TierBadge.tsx` |
| `components/auth/dream.PasswordField.tsx` | tsx | 0 | 5 | `app/auth/update-password/page.tsx`, `app/join/page.tsx`, `app/login/page.tsx` | — |
| `components/dream.ProfileShareButton.tsx` | tsx | 1 | 5 | `app/profile/[handle]/page.tsx`, `app/view-profile/page.tsx`, `coresurfaces/dreamsurface.ViewProfile.tsx` | `components/ui/dream.SocialShareSheet.tsx` |
| `components/dreamengin/dream.CanvasDropZone.tsx` | tsx | 1 | 5 | `components/dreamengin/dream.DREAMenginOS.tsx`, `components/dreamengin/dreamsurface.dreamengin.tsx`, `engine/generated/surfaces.ts` | `engine/offline/offlineCache.ts` |
| `components/dreamnav/dreamsurface.dreamnav.tsx` | tsx | 1 | 5 | `components/dreamengin/dream.menu.OutdreamMenu.tsx`, `components/dreamengin/dream.overlay.ViewAllDreamsOverlay.tsx`, `components/dreamengin/dreamsurface.dreamengin.tsx` | `engine/dreamnav/delta.ts` |
| `components/dreams/dream.DraggableDream.tsx` | tsx | 1 | 5 | `app/dreamdmbar/_components/DreamSpaceRegion.tsx`, `app/dreamdmbar/_components/HomeDreamRegion.tsx`, `app/settings/dreams/dreams-layout-editor.tsx` | `engine/dreams/drag.ts` |
| `components/dreams/dream.widget.SuperDreamWidget.tsx` | tsx | 3 | 5 | `components/widgets/dream.widget.WidgetLibrary.tsx`, `components/widgets/dream.widget.WidgetSurface.tsx`, `engine/generated/dreamsurfaces.ts` | `engine/dream-window/DreamWindowLifecycle.ts`, `engine/dream-window/useDreamWindowActions.ts`, `types/dream-window.ts` |
| `components/dreams/dreamsurface.dreamspace.tsx` | tsx | 11 | 5 | `app/dreamspace/page.tsx`, `components/runtime/dream.RuntimeView.tsx`, `engine/generated/dreamsurfaces.ts` | `app/dreamdmbar/_components/DreamSpaceRegion.tsx`, `components/home/dream.ActiveModuleSurface.tsx`, `components/spatial/dream.ProfileSpace.tsx` |
| `components/engines/shared/dream.bar.EnginNavBar.tsx` | tsx | 0 | 5 | `components/engines/shared/dream.EnginRuleSet.ts`, `components/engines/shared/dream.makeEnginApp.tsx`, `components/engines/shared/index.ts` | — |
| `components/gameengin/dream.cartridge.CartridgeErrorBoundary.tsx` | tsx | 1 | 5 | `components/gameengin/dream.cartridge.CartridgeLauncher.tsx`, `engine/generated/surfaces.ts`, `engins/engin.GameEngin.tsx` | `utils/index.ts` |
| `components/gameengin/dream.CrashReportModal.tsx` | tsx | 1 | 5 | `components/gameengin/dream.cartridge.CartridgeLauncher.tsx`, `engine/generated/surfaces.ts`, `engins/engin.GameEngin.tsx` | `utils/index.ts` |
| `components/games/dream.BabylonSideScroller.tsx` | tsx | 1 | 5 | `app/daydream/game/dream.GamePageClient.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/games/madmaxi/index.ts` |
| `components/games/dream.GamesHub.tsx` | tsx | 19 | 5 | `app/daydream/games/page.tsx`, `daydreams/games/page.tsx`, `engine/generated/surfaces.ts` | `engins/gameengin/games/avatar.ts`, `engins/gameengin/games/catalog.ts`, `engins/gameengin/games/library-state.ts` |
| `components/icons/sheet.ts` | ts | 0 | 5 | `components/ui/dream.PlatformBadge.tsx`, `components/ui/dream.SheetIcon.tsx`, `engine/generated/surfaces.ts` | — |
| `components/overlays/dream.RootStatusScreen.tsx` | tsx | 0 | 5 | `app/error.tsx`, `app/loading.tsx`, `app/not-found.tsx` | — |
| `components/widgets/dream.widget.WidgetCard.tsx` | tsx | 1 | 5 | `components/widgets/dream.widget.PlayMediaWidget.tsx`, `components/widgets/dream.widget.UniversalWidget.tsx`, `engine/generated/surfaces.ts` | `components/dreams/dreamsurface.shell.tsx` |
| `components/activity/dream.TierBadge.tsx` | tsx | 2 | 4 | `components/activity/dream.ActivityPostForm.tsx`, `components/activity/dream.ActivityProfile.tsx`, `engine/generated/surfaces.ts` | `dreamr/activity/scoring.ts`, `dreamr/activity/types.ts` |
| `components/connectors/dream.widget.ConnectWidgetPrompt.tsx` | tsx | 1 | 4 | `app/connectors/dream.ConnectorsClient.tsx`, `components/connectors/dream.ConnectDreamPrompt.tsx`, `engine/generated/surfaces.ts` | `engine/widgets/widgetRegistry.ts` |
| `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` | tsx | 5 | 4 | `app/daydream/brand/page.tsx`, `daydreams/brand/page.tsx`, `engine/generated/surfaces.ts` | `engins/forgeengin/forge/forgeIntelligence.ts`, `engins/forgeengin/forge/useForgeActivity.ts`, `engine/runtime/dualRuntimeBridge.ts` |
| `components/dream.CommandPalette.tsx` | tsx | 0 | 4 | `components/dream.CommandPaletteMount.tsx`, `components/providers/dream.AppSurfaceShell.tsx`, `engine/generated/surfaces.ts` | — |
| `components/dream.GlobalOverlays.tsx` | tsx | 4 | 4 | `app/layout.tsx`, `components/providers/dream.AppSurfaceShell.tsx`, `engine/generated/surfaces.ts` | `components/customize/dream.GlobalCustomizeUI.tsx`, `components/dreams/dream.GlobalDragLayer.tsx`, `components/dreams/dream.PlatformErrorReporter.tsx` |
| `components/dreamengin/dream.DREAMenginOS.tsx` | tsx | 9 | 4 | `components/dreamengin/dreamsurface.dreamengin.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dreamengin/dream.CanvasDropZone.tsx`, `engine/agents/agentBus.ts`, `engine/rendering/babylon/createEngine.ts` |
| `components/dreamengin/dream.panel.DrEamsPanel.tsx` | tsx | 0 | 4 | `components/dreamengin/dreamsurface.dreamengin.tsx`, `components/home/dream.bar.GlobalDreamBar.tsx`, `engine/generated/surfaces.ts` | — |
| `components/engines/brand/dream.BrandEnginApp.tsx` | tsx | 2 | 4 | `app/engines/brand/page.tsx`, `components/engines/brand/index.ts`, `engine/generated/surfaces.ts` | `components/engines/shared/index.ts`, `engins/engin.BrandingEngin.tsx` |
| `components/engines/brand/panels/dream.panel.CampaignsPanel.tsx` | tsx | 0 | 4 | `app/engines/brand/campaigns/page.tsx`, `components/engines/brand/index.ts`, `engine/generated/surfaces.ts` | — |
| `components/engines/brand/panels/dream.panel.IdentityPanel.tsx` | tsx | 1 | 4 | `app/engines/brand/identity/page.tsx`, `components/engines/brand/index.ts`, `engine/generated/surfaces.ts` | `engine/runtime/dualRuntimeBridge.ts` |
| `components/engines/code/dream.CodeEnginApp.tsx` | tsx | 2 | 4 | `app/engines/code/page.tsx`, `components/engines/code/index.ts`, `engine/generated/surfaces.ts` | `components/engines/shared/index.ts`, `engins/engin.CodeEngin.tsx` |
| `components/engines/code/panels/dream.panel.AIPanel.tsx` | tsx | 0 | 4 | `app/engines/code/ai/page.tsx`, `components/engines/code/index.ts`, `engine/generated/surfaces.ts` | — |
| `components/engines/code/panels/dream.panel.NotebookPanel.tsx` | tsx | 0 | 4 | `app/engines/code/notebook/page.tsx`, `components/engines/code/index.ts`, `engine/generated/surfaces.ts` | — |
| `components/engines/code/panels/dream.panel.ProjectsPanel.tsx` | tsx | 3 | 4 | `app/engines/code/projects/page.tsx`, `components/engines/code/index.ts`, `engine/generated/surfaces.ts` | `supabase/client/client.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `components/engines/games/dream.GameEnginApp.tsx` | tsx | 2 | 4 | `app/engines/games/page.tsx`, `components/engines/games/index.ts`, `engine/generated/surfaces.ts` | `components/engines/shared/index.ts`, `engins/engin.GameEngin.tsx` |
| `components/engines/games/panels/dream.panel.BuilderPanel.tsx` | tsx | 1 | 4 | `app/engines/games/builder/page.tsx`, `components/engines/games/index.ts`, `engine/generated/surfaces.ts` | `engine/runtime/dualRuntimeBridge.ts` |
| `components/engines/games/panels/dream.panel.LibraryPanel.tsx` | tsx | 2 | 4 | `app/engines/games/library/page.tsx`, `components/engines/games/index.ts`, `engine/generated/surfaces.ts` | `engins/gameengin/games/catalog.ts`, `engins/gameengin/games/navigation.ts` |
| `components/engines/games/panels/dream.panel.ScoresPanel.tsx` | tsx | 0 | 4 | `app/engines/games/scores/page.tsx`, `components/engines/games/index.ts`, `engine/generated/surfaces.ts` | — |
| `components/engines/lab/dream.LabEnginApp.tsx` | tsx | 2 | 4 | `app/engines/lab/page.tsx`, `components/engines/lab/index.ts`, `engine/generated/surfaces.ts` | `components/engines/shared/index.ts`, `engins/engin.LabEngin.tsx` |
| `components/engines/lab/panels/dream.panel.DataVizPanel.tsx` | tsx | 0 | 4 | `app/engines/lab/data/page.tsx`, `components/engines/lab/index.ts`, `engine/generated/surfaces.ts` | — |
| `components/engines/lab/panels/dream.panel.ExperimentsPanel.tsx` | tsx | 0 | 4 | `app/engines/lab/experiments/page.tsx`, `components/engines/lab/index.ts`, `engine/generated/surfaces.ts` | — |
| `components/engines/lab/panels/dream.panel.QuantumPanel.tsx` | tsx | 0 | 4 | `app/engines/lab/quantum/page.tsx`, `components/engines/lab/index.ts`, `engine/generated/surfaces.ts` | — |
| `components/engines/music/dream.MusicEnginApp.tsx` | tsx | 2 | 4 | `app/engines/music/page.tsx`, `components/engines/music/index.ts`, `engine/generated/surfaces.ts` | `components/engines/shared/index.ts`, `engins/engin.StarMakerEngin.tsx` |
| `components/engines/music/panels/dream.panel.ArrangePanel.tsx` | tsx | 0 | 4 | `app/engines/music/arrange/page.tsx`, `components/engines/music/index.ts`, `engine/generated/surfaces.ts` | — |
| `components/engines/music/panels/dream.panel.MusicLibraryPanel.tsx` | tsx | 0 | 4 | `app/engines/music/library/page.tsx`, `components/engines/music/index.ts`, `engine/generated/surfaces.ts` | — |
| `components/engines/music/panels/dream.panel.StudioPanel.tsx` | tsx | 1 | 4 | `app/engines/music/studio/page.tsx`, `components/engines/music/index.ts`, `engine/generated/surfaces.ts` | `utils/index.ts` |
| `components/engines/portfolio/dream.PortfolioEnginApp.tsx` | tsx | 2 | 4 | `app/engines/portfolio/page.tsx`, `components/engines/portfolio/index.ts`, `engine/generated/surfaces.ts` | `components/engines/shared/index.ts`, `engins/portfolio/dream.PortfolioEngin.tsx` |
| `components/engines/portfolio/panels/dream.panel.AssetsPanel.tsx` | tsx | 0 | 4 | `app/engines/portfolio/assets/page.tsx`, `components/engines/portfolio/index.ts`, `engine/generated/surfaces.ts` | — |
| `components/engines/portfolio/panels/dream.panel.OptimizePanel.tsx` | tsx | 1 | 4 | `app/engines/portfolio/optimize/page.tsx`, `components/engines/portfolio/index.ts`, `engine/generated/surfaces.ts` | `engins/dream.QuantumCircuitCanvas.tsx` |
| `components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel.tsx` | tsx | 0 | 4 | `app/engines/portfolio/quantum/page.tsx`, `components/engines/portfolio/index.ts`, `engine/generated/surfaces.ts` | — |
| `components/engines/shared/dream.EnginProvider.tsx` | tsx | 0 | 4 | `components/engines/shared/dream.EnginRuleSet.ts`, `components/engines/shared/index.ts`, `engine/generated/surfaces.ts` | — |
| `components/engines/shared/dream.shell.EnginAppShell.tsx` | tsx | 1 | 4 | `components/engines/shared/dream.makeEnginApp.tsx`, `components/engines/shared/index.ts`, `engine/generated/surfaces.ts` | `components/shared-dream/index.ts` |
| `components/feed/dream.AlgorithmEngine.tsx` | tsx | 0 | 4 | `app/settings/algorithm/page.tsx`, `components/panels/dream.panel.AlgorithmPanel.tsx`, `engine/generated/surfaces.ts` | — |
| `components/gameengin/dream.cartridge.CartridgeLauncher.tsx` | tsx | 8 | 4 | `app/gameengin/cartridges/[id]/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/gameengin/GameRuntime.tsx`, `engins/gameengin/cartridge.ts`, `engins/gameengin/cartridges/loaders.ts` |
| `components/gameengin/dream.CartridgeRegistryBootstrap.tsx` | tsx | 2 | 4 | `app/layout.tsx`, `engine/generated/surfaces.ts`, `engins/engin.GameEngin.tsx` | `engins/gameengin/registerCartridges.ts`, `engine/runtime/dreamOSBus.ts` |
| `components/gameengin/input/DualSenseManager.ts` | ts | 0 | 4 | `components/games/dream.EchoArena.tsx`, `components/games/dream.NeonDrift.tsx`, `engine/generated/surfaces.ts` | — |
| `components/games/dream.DefuseRitual.tsx` | tsx | 1 | 4 | `components/games/dream.GamesHub.tsx`, `engine/generated/surfaces.ts`, `engins/gameengin/cartridges/loaders.ts` | `engins/gameengin/games/hooks.ts` |
| `components/games/dream.EchoArena.tsx` | tsx | 4 | 4 | `components/games/dream.GamesHub.tsx`, `engine/generated/surfaces.ts`, `engins/gameengin/cartridges/loaders.ts` | `components/gameengin/input/DualSenseManager.ts`, `engins/gameengin/games/hooks.ts`, `engins/gameengin/games/mobileControls.ts` |
| `components/games/dream.EnginFracture.tsx` | tsx | 1 | 4 | `components/games/dream.GamesHub.tsx`, `engine/generated/surfaces.ts`, `engins/gameengin/cartridges/loaders.ts` | `engins/gameengin/games/hooks.ts` |
| `components/games/dream.Glassfall.tsx` | tsx | 2 | 4 | `components/games/dream.GamesHub.tsx`, `engine/generated/surfaces.ts`, `engins/gameengin/cartridges/loaders.ts` | `engins/gameengin/games/hooks.ts`, `components/games/_fx/canvasFx.ts` |
| `components/games/dream.LexiconSolitaire.tsx` | tsx | 1 | 4 | `components/games/dream.GamesHub.tsx`, `engine/generated/surfaces.ts`, `engins/gameengin/cartridges/loaders.ts` | `engins/gameengin/games/hooks.ts` |
| `components/games/dream.MadMaxiWildfall.tsx` | tsx | 3 | 4 | `components/games/dream.GamesHub.tsx`, `engine/generated/surfaces.ts`, `engins/gameengin/cartridges/loaders.ts` | `engins/gameengin/games/hooks.ts`, `engins/gameengin/cartridges/reactCartridge.ts`, `engins/gameengin/games/madmaxi-wildfall-world.ts` |
| `components/games/dream.NeonDrift.tsx` | tsx | 7 | 4 | `components/games/dream.GamesHub.tsx`, `engine/generated/surfaces.ts`, `engins/gameengin/cartridges/loaders.ts` | `components/gameengin/input/DualSenseManager.ts`, `engins/gameengin/core.ts`, `engins/gameengin/ai-director.ts` |
| `components/games/dream.NiteFlyerSolarHymn.tsx` | tsx | 1 | 4 | `components/games/dream.GamesHub.tsx`, `engine/generated/surfaces.ts`, `engins/gameengin/cartridges/loaders.ts` | `engins/gameengin/games/hooks.ts` |
| `components/games/dream.NullCathedral.tsx` | tsx | 2 | 4 | `components/games/dream.GamesHub.tsx`, `engine/generated/surfaces.ts`, `engins/gameengin/cartridges/loaders.ts` | `engins/gameengin/games/hooks.ts`, `components/games/_fx/canvasFx.ts` |
| `components/games/dream.SerpentSiege.tsx` | tsx | 2 | 4 | `components/games/dream.GamesHub.tsx`, `engine/generated/surfaces.ts`, `engins/gameengin/cartridges/loaders.ts` | `engins/gameengin/games/hooks.ts`, `components/games/_fx/canvasFx.ts` |
| `components/games/dream.VoidlineGP.tsx` | tsx | 2 | 4 | `components/games/dream.GamesHub.tsx`, `engine/generated/surfaces.ts`, `engins/gameengin/cartridges/loaders.ts` | `engins/gameengin/games/hooks.ts`, `components/games/_fx/canvasFx.ts` |
| `components/games/madmaxi/levels.ts` | ts | 3 | 4 | `components/games/madmaxi/dream.MadmaxiGame.tsx`, `components/games/madmaxi/index.ts`, `engine/generated/surfaces.ts` | `components/games/madmaxi/authoredZonePacks.ts`, `components/games/madmaxi/config.ts`, `components/games/madmaxi/types.ts` |
| `components/home/dream.ActiveModuleSurface.tsx` | tsx | 7 | 4 | `app/dreamdmbar/_components/HomeDreamRegion.tsx`, `components/dreams/dreamsurface.dreamspace.tsx`, `engine/generated/surfaces.ts` | `engine/activeModulesStore.ts`, `engine/artifacts/artifactStore.ts`, `engine/dream-window/DreamWindowLifecycle.ts` |
| `components/marketplace/dream.MarketplaceListingCard.tsx` | tsx | 0 | 4 | `app/marketplace/page.tsx`, `components/panels/dream.panel.MarketplacePanel.tsx`, `engine/generated/surfaces.ts` | — |
| `components/menus/dream.panel.MenuPanel.tsx` | tsx | 0 | 4 | `components/menus/dream.menu.DreamRadialMenu.tsx`, `components/menus/dream.menu.SystemRadialMenu.tsx`, `engine/generated/surfaces.ts` | — |
| `components/music/dream.SoundRecorder.tsx` | tsx | 2 | 4 | `app/daydream/music/page.tsx`, `daydreams/music/page.tsx`, `engine/generated/surfaces.ts` | `engine/artifacts/artifactStore.ts`, `utils/index.ts` |
| `components/panels/dream.panel.FeedSettingsPanel.tsx` | tsx | 1 | 4 | `components/panels/dream.panel.FeedPanel.tsx`, `components/runtime/dream.RuntimeView.tsx`, `engine/generated/surfaces.ts` | `dreamr/feed/feedTopics.ts` |
| `components/profile/dream.EditableAvatar.tsx` | tsx | 0 | 4 | `components/dream.HomeFeed.tsx`, `components/profile/dream.widget.ProfileWidgetGrid.tsx`, `engine/generated/surfaces.ts` | — |
| `components/providers/dream.GodTierProvider.tsx` | tsx | 1 | 4 | `app/layout.tsx`, `components/providers/dream.AppSurfaceShell.tsx`, `engine/generated/surfaces.ts` | `engine/rendering/god-tier/useGodTier.ts` |
| `components/shaders/dream.LightningWing.tsx` | tsx | 0 | 4 | `components/shaders/index.ts`, `components/three/dream.scene.tsx`, `engine/generated/surfaces.ts` | — |
| `components/shaders/dream.NeonGlow.tsx` | tsx | 0 | 4 | `components/shaders/index.ts`, `components/three/dream.scene.tsx`, `engine/generated/surfaces.ts` | — |
| `components/shaders/dream.Refractor.tsx` | tsx | 0 | 4 | `components/shaders/index.ts`, `components/three/dream.scene.tsx`, `engine/generated/surfaces.ts` | — |
| `components/shared-dream/dream.InviteFlow.tsx` | tsx | 1 | 4 | `components/shared-dream/dream.SharedDreamRuntime.tsx`, `components/shared-dream/index.ts`, `engine/generated/surfaces.ts` | `components/shared-dream/dream.SharedDreamProvider.tsx` |
| `components/shared-dream/dream.SharedDreamCanvas.tsx` | tsx | 1 | 4 | `components/shared-dream/dream.SharedDreamRuntime.tsx`, `components/shared-dream/index.ts`, `engine/generated/surfaces.ts` | `components/shared-dream/dream.SharedDreamProvider.tsx` |
| `components/shared-dream/dream.SharedDreamRuntime.tsx` | tsx | 5 | 4 | `app/dreamdmbar/dualruntime/page.tsx`, `components/shared-dream/index.ts`, `engine/generated/surfaces.ts` | `engine/runtime/dualRuntimeBridge.ts`, `engine/sharedDream/useSharedDreamSession.ts`, `components/shared-dream/dream.InviteFlow.tsx` |
| `components/three/dream.scene.tsx` | tsx | 3 | 4 | `app/dream-effects/page.tsx`, `components/three/index.ts`, `engine/generated/surfaces.ts` | `components/shaders/dream.LightningWing.tsx`, `components/shaders/dream.NeonGlow.tsx`, `components/shaders/dream.Refractor.tsx` |
| `components/ui-system/theme.ts` | ts | 0 | 4 | `components/dream.ThemeToggle.tsx`, `engine/agents/uiActions.ts`, `engine/generated/surfaces.ts` | — |
| `components/ui/dream.InfinityIcon.tsx` | tsx | 0 | 4 | `app/profile/[handle]/page.tsx`, `components/dreamengin/dream.HomeControls.tsx`, `engine/generated/surfaces.ts` | — |
| `components/ui/dream.PlatformBadge.tsx` | tsx | 3 | 4 | `app/about/page.tsx`, `components/profile/dream.ProfileCanvas.tsx`, `engine/generated/surfaces.ts` | `components/ui/dream.SheetIcon.tsx`, `components/icons/sheet.ts`, `engine/social/platforms.ts` |
| `components/ui/dream.SheetIcon.tsx` | tsx | 1 | 4 | `components/ui/dream.IconList.tsx`, `components/ui/dream.PlatformBadge.tsx`, `engine/generated/surfaces.ts` | `components/icons/sheet.ts` |
| `components/ui/dream.SocialShareSheet.tsx` | tsx | 1 | 4 | `components/dream.HomeFeed.tsx`, `components/dream.ProfileShareButton.tsx`, `engine/generated/surfaces.ts` | `engine/social/platforms.ts` |
| `components/universal-editor/useTapHoldMove.ts` | ts | 1 | 4 | `components/universal-editor/dream.UniversalEditorWrapper.tsx`, `components/universal-editor/index.ts`, `engine/generated/surfaces.ts` | `types/module-manifest.ts` |
| `components/widgets/dream.widget.UniversalWidget.tsx` | tsx | 1 | 4 | `components/dreams/dreamsurface.dreamspace.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/widgets/dream.widget.WidgetCard.tsx` |
| `components/widgets/dream.widget.WidgetShell.tsx` | tsx | 1 | 4 | `app/connectors/dream.ConnectorsClient.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dreams/dreamsurface.shell.tsx` |
| `components/ads/dream.AdUnit.tsx` | tsx | 1 | 3 | `components/dream.HomeFeed.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamr/activity/types.ts` |
| `components/connectors/dream.AddSliceSheet.tsx` | tsx | 1 | 3 | `app/connectors/dream.ConnectorsClient.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/connectors/connectorRegistry.ts` |
| `components/connectors/dream.ConnectorRow.tsx` | tsx | 1 | 3 | `app/connectors/dream.ConnectorsClient.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/connectors/connectorRegistry.ts` |
| `components/connectors/dream.NoSlotDialog.tsx` | tsx | 1 | 3 | `app/connectors/dream.ConnectorsClient.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/widgets/widgetRegistry.ts` |
| `components/connectors/dream.PlacementMode.tsx` | tsx | 2 | 3 | `app/connectors/dream.ConnectorsClient.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/connectors/installFlow.ts`, `engine/widgets/widgetRegistry.ts` |
| `components/connectors/dream.widget.ConnectorWidgetPicker.tsx` | tsx | 1 | 3 | `components/profile/dream.widget.ProfileWidgetGrid.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `types/widgets.ts` |
| `components/contentengin/ContentEnginStudio.tsx` | tsx | 1 | 3 | `engine/generated/surfaces.ts`, `engins/engin.ContentEngin.tsx`, `src/engin/generated/surfaces.ts` | `engins/contentengin/ImplicitAssetWorkspace.tsx` |
| `components/customize/dream.bar.CustomizeModeBar.tsx` | tsx | 1 | 3 | `components/customize/dream.GlobalCustomizeUI.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui-system/CustomizeModeContext.tsx` |
| `components/customize/dream.bar.CustomizeToolbar.tsx` | tsx | 1 | 3 | `components/customize/dream.GlobalCustomizeUI.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui-system/CustomizeModeContext.tsx` |
| `components/customize/dream.GlobalCustomizeUI.tsx` | tsx | 6 | 3 | `components/dream.GlobalOverlays.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/customize/dream.bar.CustomizeModeBar.tsx`, `components/customize/dream.bar.CustomizeToolbar.tsx`, `components/customize/panels/dream.panel.ColorPanel.tsx` |
| `components/customize/panels/dream.panel.EffectsPanel.tsx` | tsx | 2 | 3 | `components/customize/dream.GlobalCustomizeUI.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui-system/CustomizeModeContext.tsx`, `components/customize/panels/dream.panel.ColorPanel.tsx` |
| `components/customize/panels/dream.panel.FontPanel.tsx` | tsx | 3 | 3 | `components/customize/dream.GlobalCustomizeUI.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui-system/CustomizeModeContext.tsx`, `components/ui-system/skin-engine.ts`, `components/customize/panels/dream.panel.ColorPanel.tsx` |
| `components/customize/panels/dream.panel.LayoutPanel.tsx` | tsx | 3 | 3 | `components/customize/dream.GlobalCustomizeUI.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui-system/CustomizeModeContext.tsx`, `components/ui-system/skin-engine.ts`, `components/customize/panels/dream.panel.ColorPanel.tsx` |
| `components/daydream/dream.constellationmap.tsx` | tsx | 0 | 3 | `app/daydream/constellation/dream.ConstellationClient.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/daydream/starmaker/dream.panel.CompingPanel.tsx` | tsx | 1 | 3 | `engine/generated/surfaces.ts`, `engins/engin.StarMakerEngin.tsx`, `src/engin/generated/surfaces.ts` | `engins/starmakerengin/music/starmakerDaw.ts` |
| `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx` | tsx | 1 | 3 | `engine/generated/surfaces.ts`, `engins/engin.StarMakerEngin.tsx`, `src/engin/generated/surfaces.ts` | `engins/starmakerengin/music/starmakerArrangement.ts` |
| `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx` | tsx | 1 | 3 | `engine/generated/surfaces.ts`, `engins/engin.StarMakerEngin.tsx`, `src/engin/generated/surfaces.ts` | `engins/starmakerengin/music/starmakerDaw.ts` |
| `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` | tsx | 1 | 3 | `engine/generated/surfaces.ts`, `engins/engin.StarMakerEngin.tsx`, `src/engin/generated/surfaces.ts` | `engins/starmakerengin/music/starmakerDaw.ts` |
| `components/dream.AudioVisualizer3D.tsx` | tsx | 1 | 3 | `engine/generated/surfaces.ts`, `engins/engin.StarMakerEngin.tsx`, `src/engin/generated/surfaces.ts` | `engins/starmakerengin/audioFingerprint.ts` |
| `components/dream.DragToAnchorClose.tsx` | tsx | 0 | 3 | `components/dream.ProfileSpace.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/dream.ForgeDreamCanvas.tsx` | tsx | 5 | 3 | `engine/generated/surfaces.ts`, `engins/engin.LabEngin.tsx`, `src/engin/generated/surfaces.ts` | `engins/forgeengin/componentInventory.ts`, `engine/events/eventBus.ts`, `engins/forgeengin/forge/engineForge.ts` |
| `components/dream.HeroSprite.tsx` | tsx | 0 | 3 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts`, `tests/hero-sprite.test.ts` | — |
| `components/dream.HomeFeed.tsx` | tsx | 14 | 3 | `app/dreamdmbar/_components/HomeDreamRegion.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ads/dream.AdUnit.tsx`, `components/feed/dream.FeedVideoCard.tsx`, `components/profile/dream.EditableAvatar.tsx` |
| `components/dream.KonamiDream.tsx` | tsx | 0 | 3 | `components/dream.GlobalOverlays.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/dream.LandingHero.tsx` | tsx | 2 | 3 | `app/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamr/runtime/swipeCalibration.ts`, `components/landing/dream.LandingProductStatement.tsx` |
| `components/dream.MessagesClient.tsx` | tsx | 8 | 3 | `app/messages/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamdmbar/hooks/useDreamDMDraft.ts`, `dreamdmbar/hooks/useDreamDMMessages.ts`, `dreamdmbar/hooks/useDreamSearch.ts` |
| `components/dream.NotificationCenter.tsx` | tsx | 2 | 3 | `app/dreamdmbar/_components/HomeDreamRegion.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamdmbar/notifications/notificationHelpers.ts`, `dreamdmbar/notifications/useNotifications.ts` |
| `components/dream.panel.ChildSafetyPanel.tsx` | tsx | 1 | 3 | `app/(internal)/idari-console/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `utils/index.ts` |
| `components/dream.panel.IDariPanel.tsx` | tsx | 2 | 3 | `app/(internal)/idari-console/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/agents/agentBus.ts`, `utils/index.ts` |
| `components/dream.ProfileSpace.tsx` | tsx | 2 | 3 | `components/spatial/dream.shell.EnhancedSpatialShell.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/navigation/WidgetInstanceMemory.ts`, `components/dream.DragToAnchorClose.tsx` |
| `components/dream.universal_asset_registry.tsx` | tsx | 4 | 3 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts`, `tests/universal-asset-registry.test.ts` | `engins/forgeengin/forge/useForgeActivity.ts`, `supabase/client/client.ts`, `supabase/client/safeGetUser.ts` |
| `components/dreamengin/dream.HomeControls.tsx` | tsx | 1 | 3 | `components/dreamengin/dreamsurface.dreamengin.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui/dream.InfinityIcon.tsx` |
| `components/dreamengin/dream.menu.NexusMenu.tsx` | tsx | 1 | 3 | `components/dreamengin/dreamsurface.dreamengin.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui/dream.DreamWord.tsx` |
| `components/dreamengin/dream.menu.OutdreamMenu.tsx` | tsx | 3 | 3 | `components/dreamengin/dreamsurface.dreamengin.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dreamnav/dreamsurface.dreamnav.tsx`, `engine/dreamnav/delta.ts`, `engine/dreamnav/path.ts` |
| `components/dreamengin/dream.panel.CrossEnginStatusPanel.tsx` | tsx | 1 | 3 | `engine/generated/surfaces.ts`, `engins/engin.CodeEngin.tsx`, `src/engin/generated/surfaces.ts` | `engine/runtime/dualRuntimeBridge.ts` |
| `components/dreamengin/engine/math.ts` | ts | 0 | 3 | `components/dreamengin/engine/types.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/dreamr/dream.panel.DreamRChannelPanel.tsx` | tsx | 2 | 3 | `dreamr/components/dreamrfeed.tsx`, `engine/generated/dreamr.ts`, `src/engin/generated/dreamr.ts` | `dreamr/feed/useLiveFeed.ts`, `types/connector.ts` |
| `components/dreamr/dream.panel.DreamRCreatorPanel.tsx` | tsx | 1 | 3 | `dreamr/components/dreamrfeed.tsx`, `engine/generated/dreamr.ts`, `src/engin/generated/dreamr.ts` | `dreamr/feed/useLiveFeed.ts` |
| `components/dreams/dream.GlobalDragLayer.tsx` | tsx | 1 | 3 | `components/dream.GlobalOverlays.tsx`, `engine/generated/dreamsurfaces.ts`, `src/engin/generated/dreamsurfaces.ts` | `engine/dreams/drag.ts` |
| `components/dreams/dream.PlatformErrorReporter.tsx` | tsx | 0 | 3 | `components/dream.GlobalOverlays.tsx`, `engine/generated/dreamsurfaces.ts`, `src/engin/generated/dreamsurfaces.ts` | — |
| `components/engines/brand/index.ts` | ts | 3 | 3 | `components/engines/index.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/brand/dream.BrandEnginApp.tsx`, `components/engines/brand/panels/dream.panel.CampaignsPanel.tsx`, `components/engines/brand/panels/dream.panel.IdentityPanel.tsx` |
| `components/engines/code/index.ts` | ts | 4 | 3 | `components/engines/index.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/code/dream.CodeEnginApp.tsx`, `components/engines/code/panels/dream.panel.AIPanel.tsx`, `components/engines/code/panels/dream.panel.NotebookPanel.tsx` |
| `components/engines/create/index.ts` | ts | 4 | 3 | `components/engines/index.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/create/dream.CreateEnginApp.tsx`, `components/engines/create/panels/dream.panel.CalendarPanel.tsx`, `components/engines/create/panels/dream.panel.EditorPanel.tsx` |
| `components/engines/create/panels/dream.panel.CalendarPanel.tsx` | tsx | 0 | 3 | `components/engines/create/index.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/engines/create/panels/dream.panel.EditorPanel.tsx` | tsx | 0 | 3 | `components/engines/create/index.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/engines/create/panels/dream.panel.QueuePanel.tsx` | tsx | 0 | 3 | `components/engines/create/index.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/engines/games/index.ts` | ts | 4 | 3 | `components/engines/index.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/games/dream.GameEnginApp.tsx`, `components/engines/games/panels/dream.panel.BuilderPanel.tsx`, `components/engines/games/panels/dream.panel.LibraryPanel.tsx` |
| `components/engines/lab/index.ts` | ts | 4 | 3 | `components/engines/index.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/lab/dream.LabEnginApp.tsx`, `components/engines/lab/panels/dream.panel.DataVizPanel.tsx`, `components/engines/lab/panels/dream.panel.ExperimentsPanel.tsx` |
| `components/engines/music/index.ts` | ts | 4 | 3 | `components/engines/index.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/music/dream.MusicEnginApp.tsx`, `components/engines/music/panels/dream.panel.ArrangePanel.tsx`, `components/engines/music/panels/dream.panel.MusicLibraryPanel.tsx` |
| `components/engines/portfolio/index.ts` | ts | 4 | 3 | `components/engines/index.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/portfolio/dream.PortfolioEnginApp.tsx`, `components/engines/portfolio/panels/dream.panel.AssetsPanel.tsx`, `components/engines/portfolio/panels/dream.panel.OptimizePanel.tsx` |
| `components/engines/shared/dream.EnginRuleSet.ts` | ts | 2 | 3 | `components/engines/shared/dream.makeEnginApp.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/shared/dream.EnginProvider.tsx`, `components/engines/shared/dream.bar.EnginNavBar.tsx` |
| `components/engines/shared/dream.makeEnginApp.tsx` | tsx | 3 | 3 | `components/engines/shared/index.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/shared/dream.bar.EnginNavBar.tsx`, `components/engines/shared/dream.EnginRuleSet.ts`, `components/engines/shared/dream.shell.EnginAppShell.tsx` |
| `components/feed/dream.CommentSection.tsx` | tsx | 1 | 3 | `components/dream.FeedCard.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `utils/index.ts` |
| `components/feed/dream.FeedVideoCard.tsx` | tsx | 1 | 3 | `components/dream.HomeFeed.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamr/feed/useLiveFeed.ts` |
| `components/feed/dream.FollowButton.tsx` | tsx | 1 | 3 | `app/profile/[handle]/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/feed/dream.FollowOnboarding.tsx` |
| `components/feed/dream.FollowOnboarding.tsx` | tsx | 0 | 3 | `components/feed/dream.FollowButton.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/forge/dream.panel.AIBuilderPanel.tsx` | tsx | 3 | 3 | `engine/generated/surfaces.ts`, `engins/dream.ForgeEngin.tsx`, `src/engin/generated/surfaces.ts` | `engins/forgeengin/forge/forgeBuild.ts`, `engins/forgeengin/forge/forgeRegistry.ts`, `engins/forgeengin/forge/useForgeBuild.ts` |
| `components/forge/dream.widget.ForgeMomentumWidget.tsx` | tsx | 1 | 3 | `app/daydream/forge/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/forgeengin/forge/forgeMomentum.ts` |
| `components/gameengin/dream.cartridge.CartridgeBrowser.tsx` | tsx | 1 | 3 | `app/gameengin/cartridges/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/gameengin/cartridges/manifest.ts` |
| `components/gameengin/dream.cartridge.FeaturedCartridges.tsx` | tsx | 1 | 3 | `engine/generated/surfaces.ts`, `engins/engin.GameEngin.tsx`, `src/engin/generated/surfaces.ts` | `engins/gameengin/cartridges/manifest.ts` |
| `components/games/dream.hud.LegacyGameHUD.tsx` | tsx | 1 | 3 | `engine/generated/surfaces.ts`, `engins/engin.GameEngin.tsx`, `src/engin/generated/surfaces.ts` | `components/games/dream.remote.GameRemote.tsx` |
| `components/games/dream.hud.MobileGameHUD.tsx` | tsx | 2 | 3 | `engine/generated/surfaces.ts`, `engins/engin.GameEngin.tsx`, `src/engin/generated/surfaces.ts` | `components/games/dream.hud.MobileGameHUD.module.css`, `engins/gameengin/games/mobileControls.ts` |
| `components/games/dream.Leaderboard.tsx` | tsx | 0 | 3 | `engine/generated/surfaces.ts`, `engins/engin.GameEngin.tsx`, `src/engin/generated/surfaces.ts` | — |
| `components/games/dream.remote.GameRemoteSurface.tsx` | tsx | 2 | 3 | `components/games/dream.remote.GameRemote.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/gameengin/games/useRemoteChannel.ts`, `engins/gameengin/games/gameControllerButtons.ts` |
| `components/games/madmaxi/audio.ts` | ts | 0 | 3 | `components/games/madmaxi/dream.MadmaxiGame.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/games/madmaxi/authoredZonePacks.ts` | ts | 2 | 3 | `components/games/madmaxi/levels.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/games/madmaxi/config.ts`, `components/games/madmaxi/types.ts` |
| `components/games/madmaxi/dream.MadmaxiGame.tsx` | tsx | 10 | 3 | `components/games/madmaxi/index.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/rendering/babylon/createEngine.ts`, `engins/gameengin/games/hooks.ts`, `engins/gameengin/games/useImmersiveGameLayout.ts` |
| `components/games/madmaxi/materials.ts` | ts | 0 | 3 | `components/games/madmaxi/dream.MadmaxiGame.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/games/madmaxi/vfx.ts` | ts | 0 | 3 | `components/games/madmaxi/dream.MadmaxiGame.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/home/dream.bar.GlobalDreamBar.tsx` | tsx | 5 | 3 | `app/dreamdmbar/layout.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dreamengin/dream.panel.DrEamsPanel.tsx`, `components/menus/dream.menu.DualBottomMenu.tsx`, `dreamdmbar/runtime/DreamSystemContext.tsx` |
| `components/home/dream.bar.PersistentDreamBar.tsx` | tsx | 13 | 3 | `app/dreamdmbar/layout.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/home/dream.NeuralSeamCanvas.tsx`, `components/home/dream.ZoomablePane.tsx`, `components/runtime/dream.DualRuntimeContainer.tsx` |
| `components/home/dream.DaydreamPulseStrip.tsx` | tsx | 0 | 3 | `app/dreamdmbar/_components/HomeDreamRegion.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/home/dream.FlagshipEnginesStrip.tsx` | tsx | 1 | 3 | `app/dreamdmbar/_components/HomeDreamRegion.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/forgeengin/forge/forgeRegistry.ts` |
| `components/home/dream.NeuralSeamCanvas.tsx` | tsx | 3 | 3 | `components/home/dream.bar.PersistentDreamBar.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamdmbar/runtime/barInteractions.ts`, `dreamdmbar/runtime/bridgeSeamFlow.ts`, `engine/runtime/dualRuntimeBridge.ts` |
| `components/idari/dream.PlatformHealth.tsx` | tsx | 1 | 3 | `app/(internal)/idari-console/platform-health/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamr/activity/types.ts` |
| `components/landing/dream.LandingNav.tsx` | tsx | 0 | 3 | `app/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/landing/dream.LandingProductStatement.tsx` | tsx | 0 | 3 | `components/dream.LandingHero.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/landing/dream.scene.UniverseField.tsx` | tsx | 1 | 3 | `app/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamr/torridity/constants.ts` |
| `components/marketplace/dream.MarketplaceRequestButton.tsx` | tsx | 2 | 3 | `app/marketplace/[id]/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `utils/index.ts`, `engine/offline/offlineCache.ts` |
| `components/menus/dream.menu.DualBottomMenu.tsx` | tsx | 0 | 3 | `components/home/dream.bar.GlobalDreamBar.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/messaging/dream.BoardComposer.tsx` | tsx | 0 | 3 | `app/messages/boards/[id]/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/panels/dream.panel.AlgorithmPanel.tsx` | tsx | 2 | 3 | `components/runtime/dream.RuntimeView.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/feed/dream.AlgorithmEngine.tsx`, `dreamdmbar/runtime/DreamSystemContext.tsx` |
| `components/panels/dream.panel.AppearancePanel.tsx` | tsx | 5 | 3 | `components/runtime/dream.RuntimeView.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dream.ThemeApplicator.tsx`, `components/providers/dream.ThemeProvider.tsx`, `dreamdmbar/runtime/DreamSystemContext.tsx` |
| `components/panels/dream.panel.ConnectorsPanel.tsx` | tsx | 1 | 3 | `components/runtime/dream.RuntimeView.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `app/connectors/dream.ConnectorsClient.tsx` |
| `components/panels/dream.panel.ControlsPanel.tsx` | tsx | 2 | 3 | `components/runtime/dream.RuntimeView.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `app/settings/controls/dream.PositionIndicatorToggle.tsx`, `dreamdmbar/runtime/DreamSystemContext.tsx` |
| `components/panels/dream.panel.DataPanel.tsx` | tsx | 2 | 3 | `components/runtime/dream.RuntimeView.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamdmbar/runtime/DreamSystemContext.tsx`, `supabase/client/client.ts` |
| `components/panels/dream.panel.HelpPanel.tsx` | tsx | 1 | 3 | `components/runtime/dream.RuntimeView.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamdmbar/runtime/DreamSystemContext.tsx` |
| `components/panels/dream.panel.MarketplacePanel.tsx` | tsx | 4 | 3 | `components/runtime/dream.RuntimeView.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/marketplace/dream.MarketplaceListingCard.tsx`, `components/ui/dream.DreamWord.tsx`, `dreamdmbar/runtime/DreamSystemContext.tsx` |
| `components/panels/dream.panel.PrivacyPanel.tsx` | tsx | 1 | 3 | `components/runtime/dream.RuntimeView.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamdmbar/runtime/DreamSystemContext.tsx` |
| `components/panels/dream.panel.ProfilePanel.tsx` | tsx | 4 | 3 | `components/runtime/dream.RuntimeView.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/profile/dream.widget.ProfileWidgetGrid.tsx`, `components/ui/dream.DreamWord.tsx`, `supabase/client/client.ts` |
| `components/panels/dream.panel.SafetyPanel.tsx` | tsx | 4 | 3 | `components/runtime/dream.RuntimeView.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dr-eams/ai/boogie-policy.ts`, `dreamdmbar/runtime/DreamSystemContext.tsx`, `supabase/client/client.ts` |
| `components/panels/dream.panel.SettingsPanel.tsx` | tsx | 4 | 3 | `components/runtime/dream.RuntimeView.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamdmbar/runtime/DreamSystemContext.tsx`, `components/panels/panelTypes.ts`, `supabase/client/client.ts` |
| `components/panels/dream.panel.WidgetsPanel.tsx` | tsx | 2 | 3 | `components/runtime/dream.RuntimeView.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui/dream.DreamWord.tsx`, `dreamdmbar/runtime/DreamSystemContext.tsx` |
| `components/profile/dream.ProfileCustomizeButton.tsx` | tsx | 1 | 3 | `app/profile/[handle]/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui-system/CustomizeModeContext.tsx` |
| `components/runtime/dream.RuntimeView.tsx` | tsx | 31 | 3 | `components/home/dream.bar.PersistentDreamBar.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `app/dreamdmbar/_components/HomeDreamRegion.tsx`, `components/dreams/dreamsurface.dreamspace.tsx`, `components/runtime/dream.shell.RuntimeShell.tsx` |
| `components/runtime/dream.shell.RuntimeShell.tsx` | tsx | 2 | 3 | `components/runtime/dream.RuntimeView.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui-system/runtimeViewport.ts`, `engine/runtime/apperception.ts` |
| `components/shared-dream/index.ts` | ts | 4 | 3 | `components/engines/shared/dream.shell.EnginAppShell.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/shared-dream/dream.SharedDreamProvider.tsx`, `components/shared-dream/dream.SharedDreamCanvas.tsx`, `components/shared-dream/dream.InviteFlow.tsx` |
| `components/spatial/dream.PixiPhysicsLayer.tsx` | tsx | 0 | 3 | `components/spatial/dream.shell.EnhancedSpatialShell.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/spatial/dream.ProfileSpace.tsx` | tsx | 3 | 3 | `components/dreams/dreamsurface.dreamspace.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `hooks/use-spatial.ts`, `utils/index.ts`, `types/spatial.ts` |
| `components/spatial/dream.shell.EnhancedSpatialShell.tsx` | tsx | 5 | 3 | `components/runtime/dream.RuntimeView.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dream.ProfileSpace.tsx`, `components/spatial/dream.PixiPhysicsLayer.tsx`, `engine/navigation/NavStateBuffer.ts` |
| `components/ui-system/responsive.ts` | ts | 0 | 3 | `components/ui-system/runtimeViewport.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/universal-editor/dream.UniversalEditor.tsx` | tsx | 1 | 3 | `components/universal-editor/index.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/runtime/coercionTable.ts` |
| `components/universal-editor/dream.UniversalEditorWrapper.tsx` | tsx | 2 | 3 | `components/universal-editor/index.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `types/module-manifest.ts`, `components/universal-editor/useTapHoldMove.ts` |
| `components/universe/dream.node-cluster.tsx` | tsx | 1 | 3 | `components/universe/index.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `utils/index.ts` |
| `components/universe/dream.shell.universe-shell.tsx` | tsx | 1 | 3 | `components/universe/index.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `utils/index.ts` |
| `components/universe/dream.universe-card.tsx` | tsx | 1 | 3 | `components/universe/index.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `utils/index.ts` |
| `components/universe/index.ts` | ts | 3 | 3 | `components/dream.FeedCard.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/universe/dream.node-cluster.tsx`, `components/universe/dream.shell.universe-shell.tsx`, `components/universe/dream.universe-card.tsx` |
| `components/webgpu/shaders.ts` | ts | 0 | 3 | `components/webgpu/renderer.ts`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/widgets/dream.EditModeProvider.tsx` | tsx | 0 | 3 | `components/widgets/dream.EditModeBanner.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/widgets/dream.widget.WidgetLibrary.tsx` | tsx | 1 | 3 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts`, `tests/phase8b-dream-windows.test.ts` | `components/dreams/dream.widget.SuperDreamWidget.tsx` |
| `components/widgets/dream.widget.WidgetSurface.tsx` | tsx | 1 | 3 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts`, `tests/phase8b-dream-windows.test.ts` | `components/dreams/dream.widget.SuperDreamWidget.tsx` |
| `components/activity/dream.ActivityPostForm.tsx` | tsx | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamr/activity/scoring.ts`, `dreamr/activity/types.ts`, `components/activity/dream.TierBadge.tsx` |
| `components/ads/dream.SkipCreditBalance.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/connectors/dream.ConnectDreamPrompt.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/connectors/dream.widget.ConnectWidgetPrompt.tsx` |
| `components/contentengin/AnimationPanel.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/contentengin/AssetPreview3D.tsx` | tsx | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/contentengin/assetTypes.ts`, `engins/renderengin/RenderStage.tsx` |
| `components/contentengin/ExportPanel.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/contentengin/MaterialEditor.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/contentengin/PartTreeEditor.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/contentengin/PhotoReferencePanel.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/contentengin/RecipeEditor.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/contentengin/RiggingPanel.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/core/dream.CoreDream.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `app/dreamdmbar/_components/HomeDreamRegion.tsx` |
| `components/daydream/dream.CodeDreamIDE.tsx` | tsx | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/runtime/dualRuntimeBridge.ts`, `engine/runtime/swapManager.ts` |
| `components/daydream/dream.DiffViewer.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/codeengin/diff/diffUtils.ts` |
| `components/daydream/dream.LabDreamIDE.tsx` | tsx | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/runtime/dualRuntimeBridge.ts`, `engine/runtime/swapManager.ts` |
| `components/daydream/dream.NGNEngin.tsx` | tsx | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/events/event-bus/index.ts`, `engins/forgeengin/forge-ngn/assembly.ts`, `engins/forgeengin/forge-ngn/piece-registry.ts` |
| `components/daydream/dream.StandaloneEnginSurface.tsx` | tsx | 7 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/dream.ForgeEngin.tsx`, `engins/engin.BrandingEngin.tsx`, `engins/engin.CodeEngin.tsx` |
| `components/draggable/dream.DraggableModule.tsx` | tsx | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/runtime/dualRuntimeBridge.ts`, `types/module-manifest.ts` |
| `components/dream.AIAssistant.tsx` | tsx | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/agents/agentBus.ts`, `engine/agents/drEamsMode.ts`, `engine/agents/teachBus.ts` |
| `components/dream.BoogieWarningBanner.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/policy/boogiePolicy.ts` |
| `components/dream.CommandPaletteMount.tsx` | tsx | 1 | 2 | `app/layout.tsx`, `src/engin/generated/surfaces.ts` | `components/dream.CommandPalette.tsx` |
| `components/dream.CreatePostModal.tsx` | tsx | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/contentengin/media/ledger.ts`, `supabase/client/client.ts`, `utils/index.ts` |
| `components/dream.DrEamsModeToggle.tsx` | tsx | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/agents/drEamsMode.ts`, `engine/agents/teachBus.ts` |
| `components/dream.DrEamsVoiceAssistant.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/agents/agentBus.ts` |
| `components/dream.FeedCard.tsx` | tsx | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/feed/dream.CommentSection.tsx`, `components/universe/index.ts`, `utils/index.ts` |
| `components/dream.IconSelector.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/dream.InnerDreamsButton.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/dream.LedgerChart.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/ledger/ledger-data.ts` |
| `components/dream.OSShellActivator.tsx` | tsx | 7 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/runtime/dream.DualRuntimeContainer.tsx`, `dreamdmbar/runtime/DreamSystemContext.tsx`, `dreamdmbar/runtime/barInteractions.ts` |
| `components/dream.PhysicsLab.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/dream.ProfileEditor.tsx` | tsx | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/contentengin/media/ledger.ts`, `engine/social/platforms.ts`, `supabase/client/client.ts` |
| `components/dream.PullToRefresh.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/dream.ShrunkMode.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/navigation/AnchorWidgetStorage.ts` |
| `components/dream.SkeletonLoaders.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/dream.ThemeToggle.tsx` | tsx | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/agents/teachBus.ts`, `components/ui-system/theme.ts` |
| `components/dream.ToastSystem.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/dream.VoidThemeToggle.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dream.ThemeApplicator.tsx` |
| `components/dream.widget.AnchorWidget.tsx` | tsx | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/navigation/AnchorStateBuffer.ts`, `engine/navigation/AnchorWidgetStorage.ts`, `engine/navigation/NavStateBuffer.ts` |
| `components/dream.widget.ProfileWidgetBlock.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/dream.widget.WidgetBubble.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/dreamengin/dream.bar.DrEamsSearchBar.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dr-eams/search/drEamsSearch.ts` |
| `components/dreamengin/dream.DrEamsCanvas.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dr-eams/animation/DrEamsAnimator.ts` |
| `components/dreamengin/dream.overlay.ViewAllDreamsOverlay.tsx` | tsx | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dreamnav/dreamsurface.dreamnav.tsx`, `engine/dreamnav/delta.ts`, `engine/dreamnav/path.ts` |
| `components/dreamengin/dream.scene.BabylonGameScene.tsx` | tsx | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/rendering/babylon/createEngine.ts`, `engine/rendering/god-tier/godTierEngine.ts`, `engine/rendering/webgpu/director.ts` |
| `components/dreamengin/dream.scene.DrEamsScene.tsx` | tsx | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/rendering/babylon/createEngine.ts`, `engine/rendering/god-tier/godTierEngine.ts` |
| `components/dreamengin/dream.scene.PortfolioOptimizationScene.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/dreamengin/dream.shell.EnginShell.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/dreamengin/dream.widget.AppearanceWidget.tsx` | tsx | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/providers/dream.ThemeProvider.tsx`, `components/ui-system/theme-engine.ts` |
| `components/dreamengin/dreamsurface.dreamengin.tsx` | tsx | 7 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dreamnav/dreamsurface.dreamnav.tsx`, `components/dreamengin/dream.CanvasDropZone.tsx`, `components/dreamengin/dream.DREAMenginOS.tsx` |
| `components/dreamengin/engine/types.ts` | ts | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dreamengin/engine/math.ts` |
| `components/dreamnav/dream.DreamNavControls.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/dreamr/dream.CloseFriendsSettings.tsx` | tsx | 0 | 2 | `engine/generated/dreamr.ts`, `src/engin/generated/dreamr.ts` | — |
| `components/dreams/dream.connectorlayer.tsx` | tsx | 0 | 2 | `engine/generated/dreamsurfaces.ts`, `src/engin/generated/dreamsurfaces.ts` | — |
| `components/dreams/dream.featurelayer.tsx` | tsx | 0 | 2 | `engine/generated/dreamsurfaces.ts`, `src/engin/generated/dreamsurfaces.ts` | — |
| `components/dreams/dream.outputlayer.tsx` | tsx | 1 | 2 | `engine/generated/dreamsurfaces.ts`, `src/engin/generated/dreamsurfaces.ts` | `engine/dreams/profileProjection.ts` |
| `components/dreams/dream.panel.RuntimeMemoryHUD.tsx` | tsx | 2 | 2 | `engine/generated/dreamsurfaces.ts`, `src/engin/generated/dreamsurfaces.ts` | `engine/intelligence/continuityHelpers.ts`, `engine/runtime/dreamOSBus.ts` |
| `components/dreams/dream.shell.DreamShell.tsx` | tsx | 1 | 2 | `engine/generated/dreamsurfaces.ts`, `src/engin/generated/dreamsurfaces.ts` | `components/dreams/dreamsurface.shell.tsx` |
| `components/dreams/dream.shell.SharedDreamShell.tsx` | tsx | 3 | 2 | `engine/generated/dreamsurfaces.ts`, `src/engin/generated/dreamsurfaces.ts` | `hooks/useSharedDream.ts`, `engine/sharedDream.ts`, `utils/index.ts` |
| `components/dreams/dream.SlideOverPanel.tsx` | tsx | 0 | 2 | `engine/generated/dreamsurfaces.ts`, `src/engin/generated/dreamsurfaces.ts` | — |
| `components/dreams/dream.window.JourneyDreamWindow.tsx` | tsx | 1 | 2 | `engine/generated/dreamsurfaces.ts`, `src/engin/generated/dreamsurfaces.ts` | `components/daydream/dream.JourneyTrail.tsx` |
| `components/dreams/dreamsurface.window.tsx` | tsx | 2 | 2 | `engine/generated/dreamsurfaces.ts`, `src/engin/generated/dreamsurfaces.ts` | `hooks/useTapHoldMove.ts`, `engine/editor/universalEditor.ts` |
| `components/engines/index.ts` | ts | 8 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/shared/index.ts`, `components/engines/brand/index.ts`, `components/engines/code/index.ts` |
| `components/engines/render/dream.RenderServiceDiagnostics.tsx` | tsx | 3 | 2 | `components/engines/render/index.ts`, `src/engin/generated/surfaces.ts` | `engine/engin-runtime/EnginRuntime.ts`, `engins/renderengin/index.ts`, `engins/renderengin/runtimeRegistration.ts` |
| `components/feeds/dream.widget.EmbedFeedWidget.tsx` | tsx | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamr/feeds/embedFeedLoader.ts`, `utils/index.ts` |
| `components/forge/dream.EngineBuilderCanvas.tsx` | tsx | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/forgeengin/componentInventory.ts`, `engins/forgeengin/forge/engineForge.ts` |
| `components/games/dream.AvenueOfMirrors.tsx` | tsx | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/gameengin/games/hooks.ts`, `engins/gameengin/cartridges/reactCartridge.ts` |
| `components/games/dream.GameController.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/games/dream.remote.GameRemote.tsx` |
| `components/games/dream.hud.GameHUD.tsx` | tsx | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/games/dream.remote.GameRemote.tsx`, `engins/gameengin/games/mobileControls.ts` |
| `components/games/dream.RecordingControls.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/contentengin/media/h265-encoder.ts` |
| `components/games/dream.remote.LegacyGameRemote.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/games/dream.remote.GameRemote.tsx` |
| `components/home/dream.widget.DreamWidget.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `utils/index.ts` |
| `components/menus/dream.menu.DreamRadialMenu.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/menus/dream.panel.MenuPanel.tsx` |
| `components/menus/dream.menu.RadialMenu.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/menus/dream.menu.SystemRadialMenu.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/menus/dream.panel.MenuPanel.tsx` |
| `components/offline/dream.OfflineRuntimeBootstrap.tsx` | tsx | 2 | 2 | `app/layout.tsx`, `src/engin/generated/surfaces.ts` | `engine/offline/offlineCache.ts`, `engine/runtime/offlineQueue.ts` |
| `components/offline/dream.OfflineStatusPill.tsx` | tsx | 1 | 2 | `app/layout.tsx`, `src/engin/generated/surfaces.ts` | `engine/runtime/offlineQueue.ts` |
| `components/onboarding/dream.OnboardingTip.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/optimizer/dream.scene.BabylonOptimizeroScene.tsx` | tsx | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/rendering/babylon/createEngine.ts`, `engine/rendering/god-tier/godTierEngine.ts`, `optimizer/babylon-optimizero.ts` |
| `components/panels/dream.panel.FeedPanel.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/panels/dream.panel.FeedSettingsPanel.tsx` |
| `components/profile/dream.ProfileCanvas.tsx` | tsx | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui/dream.PlatformBadge.tsx`, `engine/social/platforms.ts`, `supabase/client/client.ts` |
| `components/providers/dream.AppSurfaceShell.tsx` | tsx | 10 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dream.CommandPalette.tsx`, `components/dream.GlobalOverlays.tsx`, `components/dream.ThemeApplicator.tsx` |
| `components/shaders/index.ts` | ts | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/shaders/dream.NeonGlow.tsx`, `components/shaders/dream.LightningWing.tsx`, `components/shaders/dream.Refractor.tsx` |
| `components/three/index.ts` | ts | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/three/dream.scene.tsx` |
| `components/ui/dream.IconList.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui/dream.SheetIcon.tsx` |
| `components/universal-editor/index.ts` | ts | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/universal-editor/useTapHoldMove.ts`, `components/universal-editor/dream.UniversalEditorWrapper.tsx`, `components/universal-editor/dream.UniversalEditor.tsx` |
| `components/warp/dream.WarpCanvas.tsx` | tsx | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/rendering/warp/useWarp.ts`, `engine/rendering/warp/warpEngine.ts` |
| `components/webgpu/dream.WebGPUShowcase.tsx` | tsx | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/rendering/webgpu.ts`, `engins/renderengin/RenderStage.tsx` |
| `components/webgpu/neuralPostProcess.ts` | ts | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/webgpu/renderer.ts` | ts | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/renderengin/webgpu.ts`, `components/webgpu/shaders.ts` |
| `components/widgets/dream.AddDreamCTA.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/widgets/dream.ConfigureSheet.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/widgets/dream.EditModeBanner.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/widgets/dream.EditModeProvider.tsx` |
| `components/widgets/dream.widget.PlayMediaWidget.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/widgets/dream.widget.WidgetCard.tsx` |
| `components/widgets/dream.widget.WidgetPlaceholder.tsx` | tsx | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `components/branding/dream.DreamEnginLogo.tsx` | tsx | 1 | 1 | `src/engin/generated/surfaces.ts` | `engine/rendering/babylon/useDreamLogoScene.ts` |
| `components/branding/dream.LogoHero.tsx` | tsx | 0 | 1 | `src/engin/generated/surfaces.ts` | — |
| `components/branding/dream.Nav.tsx` | tsx | 0 | 1 | `src/engin/generated/surfaces.ts` | — |
| `components/dream.FirstTouchActivator.tsx` | tsx | 0 | 1 | `src/engin/generated/surfaces.ts` | — |
| `components/engines/render/dream.RenderSurface.tsx` | tsx | 1 | 1 | `src/engin/generated/surfaces.ts` | `engins/renderengin/RenderEnginInlineSurface.tsx` |
| `components/engines/render/index.ts` | ts | 1 | 1 | `src/engin/generated/surfaces.ts` | `components/engines/render/dream.RenderServiceDiagnostics.tsx` |
| `components/games/dream.hud.MobileGameHUD.module.css` | css | 0 | 1 | `components/games/dream.hud.MobileGameHUD.tsx` | — |
| `components/home/dream.ZoomablePane.tsx` | tsx | 0 | 1 | `components/home/dream.bar.PersistentDreamBar.tsx` | — |
| `components/Agents-MUST-READ-ARCHITECTURE.md` | doc | 0 | 0 | — | — |
| `components/gameengin/README.md` | doc | 0 | 0 | — | — |
| `components/games/css-modules.d.ts` | ts | 0 | 0 | — | — |
| `components/games/dream.GameController.module.css` | css | 0 | 0 | — | — |

</details>

<details><summary>app/ (277 files)</summary>

| File | Type | Imports | Imported By | Top Importers | Top Imports |
|---|---|---|---|---|---|
| `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts` | ts | 1 | 6 | `app/api/dreamr/suggested/route.ts`, `app/dreamdmbar/_components/dreamr/api/feedHandler.ts`, `engine/generated/surfaces.ts` | `dreamr/runtime/torridityLedger.ts` |
| `app/dreamdmbar/_components/HomeDreamRegion.tsx` | tsx | 13 | 5 | `app/homedream/page.tsx`, `components/core/dream.CoreDream.tsx`, `components/runtime/dream.RuntimeView.tsx` | `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`, `components/dream.BrandLogo.tsx`, `components/dream.HomeFeed.tsx` |
| `app/connectors/dream.ConnectorsClient.tsx` | tsx | 10 | 4 | `app/connectors/page.tsx`, `components/panels/dream.panel.ConnectorsPanel.tsx`, `engine/generated/surfaces.ts` | `components/connectors/dream.AddSliceSheet.tsx`, `components/connectors/dream.ConnectorRow.tsx`, `components/connectors/dream.NoSlotDialog.tsx` |
| `app/dreamdmbar/_components/dreamr/api/feedHandler.ts` | ts | 7 | 4 | `app/api/dreamr/feed/route.ts`, `app/dreamdmbar/_components/dreamr/api/route.ts`, `engine/generated/surfaces.ts` | `dreamr/runtime/closeFriendsVisibility.ts`, `dreamr/runtime/feedCursor.ts`, `engins/contentengin/media/postMedia.ts` |
| `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx` | tsx | 6 | 4 | `app/dreamdmbar/_components/HomeDreamRegion.tsx`, `app/dreamr/page.tsx`, `engine/generated/surfaces.ts` | `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx`, `components/daydream/dream.JourneyTrail.tsx`, `dreamr/components/dreamrfeed.tsx` |
| `app/settings/controls/dream.PositionIndicatorToggle.tsx` | tsx | 0 | 4 | `app/settings/controls/dream.ControlsClient.tsx`, `components/panels/dream.panel.ControlsPanel.tsx`, `engine/generated/surfaces.ts` | — |
| `app/api/ads/orders/route.ts` | route | 3 | 3 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts`, `tests/platform-utils.test.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/auth/providers/route.ts` | route | 1 | 3 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts`, `tests/auth-providers-route.test.ts` | `supabase/config.ts` |
| `app/api/content/generative-fill/route.ts` | route | 3 | 3 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts`, `tests/contentengin-features.test.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/content/intelligence/route.ts` | route | 3 | 3 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts`, `tests/content-intelligence-routes.test.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/content/transcribe/route.ts` | route | 3 | 3 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts`, `tests/contentengin-features.test.ts` | `engins/contentengin/content/transcriptEditor.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/content/voice-clone/route.ts` | route | 4 | 3 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts`, `tests/contentengin-features.test.ts` | `engins/contentengin/content/voiceClone.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/gal/route.ts` | route | 3 | 3 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts`, `tests/platform-utils.test.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/gameengin/crash-report/route.ts` | route | 2 | 3 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts`, `tests/gameengin-loop.test.ts` | `engins/gameengin/brain-reader.ts`, `utils/index.ts` |
| `app/api/lab/benchmarks/route.ts` | route | 3 | 3 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts`, `tests/content-intelligence-routes.test.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/daydream/constellation/dream.ConstellationClient.tsx` | tsx | 1 | 3 | `app/daydream/constellation/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/daydream/dream.constellationmap.tsx` |
| `app/daydream/games/page.tsx` | route | 12 | 3 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts`, `tests/games-daydream-page-auth.test.ts` | `components/games/dream.GamesHub.tsx`, `engine/dev-bypass.ts`, `supabase/client/safeGetUser.ts` |
| `app/dreamdmbar/_components/DreamBarDataBridge.tsx` | tsx | 7 | 3 | `app/dreamdmbar/layout.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/runtime/dream.DualRuntimeContainer.tsx`, `dreamdmbar/runtime/DreamSystemContext.tsx`, `dreamdmbar/runtime/barInteractions.ts` |
| `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts` | ts | 1 | 3 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts`, `tests/bot-detector.test.ts` | `dreamr/runtime/torridityLedger.ts` |
| `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx` | tsx | 1 | 3 | `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/runtime/dualRuntimeBridge.ts` |
| `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx` | tsx | 3 | 3 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts`, `tests/dreamr-feed-topics.test.ts` | `dreamr/botDetection.ts`, `engine/runtime/dualRuntimeBridge.ts`, `dreamr/components/dreamrfeed.tsx` |
| `app/dreamdmbar/_components/DreamSpaceRegion.tsx` | tsx | 7 | 3 | `components/dreams/dreamsurface.dreamspace.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dreams/dream.DraggableDream.tsx`, `hooks/useAccount.ts`, `engine/artifacts/artifactStore.ts` |
| `app/dreamdmbar/layout.tsx` | route | 9 | 3 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts`, `tests/homedream-page-auth.test.ts` | `app/dreamdmbar/_components/DreamBarDataBridge.tsx`, `components/home/dream.bar.GlobalDreamBar.tsx`, `components/home/dream.bar.PersistentDreamBar.tsx` |
| `app/feed-settings/dream.FeedSettingsClient.tsx` | tsx | 1 | 3 | `app/feed-settings/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/offline/offlineCache.ts` |
| `app/settings/account/dream.DangerZoneActions.tsx` | tsx | 0 | 3 | `app/settings/account/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/settings/controls/dream.ControlsClient.tsx` | tsx | 2 | 3 | `app/settings/controls/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/offline/offlineCache.ts`, `app/settings/controls/dream.PositionIndicatorToggle.tsx` |
| `app/settings/data/dream.DataClient.tsx` | tsx | 0 | 3 | `app/settings/data/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/settings/dreams/dreams-layout-editor.tsx` | tsx | 2 | 3 | `app/settings/dreams/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dreams/dream.DraggableDream.tsx`, `hooks/useDreamLayout.ts` |
| `app/settings/privacy/dream.PrivacyClient.tsx` | tsx | 1 | 3 | `app/settings/privacy/page.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/offline/offlineCache.ts` |
| `app/(internal)/idari-console/page.tsx` | route | 7 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dream.panel.ChildSafetyPanel.tsx`, `components/dream.panel.IDariPanel.tsx`, `engine/admin/upgrade-readiness.ts` |
| `app/(internal)/idari-console/platform-errors/page.tsx` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/(internal)/idari-console/platform-health/page.tsx` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/idari/dream.PlatformHealth.tsx`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/about/page.tsx` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui/dream.PlatformBadge.tsx` |
| `app/actions/dream-docs.ts` | ts | 6 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dr-eams/ai/triad.ts`, `docs/dream-docs/embed.ts`, `supabase/server/serverClient.ts` |
| `app/ads/create/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/client/client.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/ads/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui/dream.DreamWord.tsx`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/ads/slot/[id]/page.tsx` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `types/ads.ts` |
| `app/api/account/delete-data/route.ts` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dr-eams/ai/audit.ts`, `engine/api/route.ts`, `supabase/server/serverClient.ts` |
| `app/api/account/delete-dream/route.ts` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/agents/agentBus.ts`, `dr-eams/ai/audit.ts`, `engine/api/route.ts` |
| `app/api/account/export-data/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/api/route.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/activity/track/route.ts` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamr/activity/scoring.ts`, `dreamr/activity/types.ts`, `supabase/server/serverClient.ts` |
| `app/api/admin/ai-chat/route.ts` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/admin/lockout.ts`, `dr-eams/ai/groq.ts`, `dr-eams/ai/triad.ts` |
| `app/api/admin/ai-request/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/admin/child-safety/route.ts` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dr-eams/ai/triad.ts`, `engine/api/route.ts`, `supabase/server/serverClient.ts` |
| `app/api/admin/code-files/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/admin/lockout.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/admin/observability/route.ts` | route | 8 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dr-eams/ai/triad.ts`, `engine/api/route.ts`, `engine/observability/collector.ts` |
| `app/api/ads/view/route.ts` | route | 6 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamr/activity/aqs.ts`, `dreamr/activity/revenueSplit.ts`, `dreamr/activity/skipCredits.ts` |
| `app/api/agent/session/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/agentOS.ts`, `engine/agentOS/hostTools.ts` |
| `app/api/ai/boogieman/child-safety/route.ts` | route | 10 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dr-eams/ai/audit.ts`, `dr-eams/ai/boogieman.ts`, `dr-eams/ai/rateLimit.ts` |
| `app/api/ai/boogieman/privacy-event/route.ts` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dr-eams/ai/audit.ts`, `dr-eams/ai/boogieman.ts`, `engine/api/route.ts` |
| `app/api/ai/boogieman/route.ts` | route | 7 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dr-eams/ai/audit.ts`, `dr-eams/ai/boogieman.ts`, `dr-eams/ai/rateLimit.ts` |
| `app/api/ai/boogieman/status/route.ts` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dr-eams/ai/boogie-policy.ts` |
| `app/api/ai/eams/route.ts` | route | 9 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dr-eams/ai/audit.ts`, `dr-eams/ai/boogieman.ts`, `dr-eams/ai/confirm.ts` |
| `app/api/ai/execute/route.ts` | route | 10 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dr-eams/ai/audit.ts`, `dr-eams/ai/confirm.ts`, `dr-eams/ai/rateLimit.ts` |
| `app/api/ai/idari/route.ts` | route | 10 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/agents/idari.ts`, `dr-eams/ai/audit.ts`, `dr-eams/ai/boogieman.ts` |
| `app/api/appeal/route.ts` | route | 6 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dr-eams/ai/audit.ts`, `dr-eams/ai/boogie-policy.ts`, `dr-eams/ai/schemas.ts` |
| `app/api/auth/logout/route.ts` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts` |
| `app/api/blocks/route.ts` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/api/route.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/ci/run/route.ts` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/codeengin/runner.ts` |
| `app/api/close-friends/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/codeengin/diagnostics/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/codeengin/auth.ts`, `engins/codeengin/diagnostics.ts`, `engins/codeengin/pathSafety.ts` |
| `app/api/codeengin/file/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/codeengin/auth.ts`, `engins/codeengin/pathSafety.ts`, `engins/codeengin/workspaceStore.ts` |
| `app/api/codeengin/git/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/codeengin/auth.ts`, `engins/codeengin/git.ts`, `engins/codeengin/pathSafety.ts` |
| `app/api/codeengin/run/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/codeengin/auth.ts`, `engins/codeengin/pathSafety.ts`, `engins/codeengin/runner.ts` |
| `app/api/codeengin/search/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/codeengin/auth.ts`, `engins/codeengin/pathSafety.ts`, `engins/codeengin/search.ts` |
| `app/api/codeengin/upload/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/codeengin/auth.ts`, `engins/codeengin/pathSafety.ts`, `engins/codeengin/workspaceStore.ts` |
| `app/api/codeengin/workspace/route.ts` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/codeengin/auth.ts`, `engins/codeengin/projectGraph.ts`, `engins/codeengin/pathSafety.ts` |
| `app/api/comments/route.ts` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/safety/child-safety/childSafetyDetector.ts`, `engine/safety/child-safety/ncmecReporter.ts`, `supabase/server/serverClient.ts` |
| `app/api/connectors/[provider]/connect/route.ts` | route | 10 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/connectors/providers/bluesky.ts`, `engine/connectors/providers/github.ts`, `engine/connectors/providers/mastodon.ts` |
| `app/api/connectors/[provider]/disconnect/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/connectors/[provider]/items/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/client/safeGetUser.ts`, `supabase/server/serverClient.ts`, `utils/index.ts` |
| `app/api/connectors/[provider]/sync/route.ts` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/connectors/reconcile.ts`, `engine/connectors/syncDispatch.ts`, `supabase/server/serverClient.ts` |
| `app/api/connectors/[provider]/verify/route.ts` | route | 10 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/connectors/providers/bluesky.ts`, `engine/connectors/providers/github.ts`, `engine/connectors/providers/mastodon.ts` |
| `app/api/connectors/cron/route.ts` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/connectors/reconcile.ts`, `engine/connectors/syncDispatch.ts`, `engine/connectors/webhookVerification.ts` |
| `app/api/connectors/instagram/oauth/callback/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/connectors/instagram/oauth/start/route.ts` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/api/connectors/status/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/connectors/connectorRegistry.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/connectors/webhooks/[provider]/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/connectors/deliveryStrategy.ts`, `engine/connectors/webhookVerification.ts`, `utils/index.ts` |
| `app/api/connectors/youtube/oauth/callback/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/connectors/youtube/oauth/start/route.ts` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/api/contentengin/assets/[assetId]/export/gameengin/route.ts` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/contentengin/pipeline/paths.ts` |
| `app/api/contentengin/assets/[assetId]/route.ts` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/contentengin/pipeline/paths.ts` |
| `app/api/contentengin/jobs/[jobId]/route.ts` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/api/contentengin/jobs/route.ts` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/api/contentengin/upload/route.ts` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/contentengin/photo/imageAnalyzer.ts` |
| `app/api/dr-eams/hf/route.ts` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/api/dr-eams/run/route.ts` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/api/drafts/[id]/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/drafts/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/dream-windows/[id]/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/dream-window/DreamWindowLifecycle.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/dream-windows/route.ts` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/dream-window/DreamWindowLifecycle.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/dreamengin/os-status/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/dreamr/feed/route.ts` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `app/dreamdmbar/_components/dreamr/api/feedHandler.ts` |
| `app/api/dreamr/suggested/route.ts` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts`, `dreamr/runtime/closeFriendsVisibility.ts`, `engins/contentengin/media/postMedia.ts` |
| `app/api/dreamr/tally/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/dreams/feed/route.ts` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `engine/widgets/feed-resolver.ts` |
| `app/api/dreams/instances/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `types/widget-system-v2.ts` |
| `app/api/dreams/transfer/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/embed-feed/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamr/feeds/embedFeedLoader.ts`, `supabase/server/serverClient.ts` |
| `app/api/favorites/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/feed/route.ts` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamr/activity/visibility-score.ts`, `engins/contentengin/media/postMedia.ts`, `supabase/server/serverClient.ts` |
| `app/api/follow/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/game-scores/route.ts` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/gameengin/cartridges/manifest.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/health/route.ts` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/api/home-layout/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/journey/route.ts` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `types/supabase.ts` |
| `app/api/ledger-media/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/contentengin/media/ledger.ts`, `supabase/server/serverClient.ts`, `utils/index.ts` |
| `app/api/likes/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/marketplace/request/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/marketplace/request.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/marketplace/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/messages/boards/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/messages/route.ts` | route | 6 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/safety/child-safety/childSafetyDetector.ts`, `engine/safety/child-safety/ncmecReporter.ts`, `engine/safety/child-safety/scanMediaUrls.ts` |
| `app/api/metrics/platform/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamr/activity/types.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/metrics/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/observability/otel.ts`, `engine/observability/otelBridge.ts` |
| `app/api/metrics/user/[userId]/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamr/activity/types.ts`, `supabase/server/serverClient.ts`, `types/supabase.ts` |
| `app/api/music/route.ts` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `types/supabase.ts` |
| `app/api/notifications/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/platform/errors/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/posts/[id]/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/posts/[id]/save/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/posts/[id]/view/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/posts/profile/[userId]/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/posts/route.ts` | route | 8 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/safety/child-safety/childSafetyDetector.ts`, `engine/safety/child-safety/ncmecReporter.ts`, `engine/safety/child-safety/scanMediaUrls.ts` |
| `app/api/profile/route.ts` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `types/supabase.ts` |
| `app/api/projects/route.ts` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `types/supabase.ts` |
| `app/api/scheduled-posts/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/security/scan/route.ts` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `utils/index.ts` |
| `app/api/settings/appearance/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/settings/feed/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/settings/notifications/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/settings/privacy/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/setup/check/route.ts` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/setup/checks.ts` |
| `app/api/setup/google-oauth/route.ts` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/config.ts` |
| `app/api/shared-dream/sessions/[id]/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/client/safeGetUser.ts`, `supabase/server/serverClient.ts` |
| `app/api/shared-dream/sessions/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/client/safeGetUser.ts`, `supabase/server/serverClient.ts` |
| `app/api/shellhub/devices/route.ts` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/connectors/providers/shellhub.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/shop/route.ts` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/shop/listings.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/skip-credits/balance/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/skip-credits/earn/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamr/activity/types.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/skip-credits/use/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamr/activity/types.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/social/ipfs/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/social/livekit/room/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/social/livekit.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/social/livekit/token/route.ts` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/social/livekit.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/social/rss-feed/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/social/rss-feed.ts`, `types/connector.ts`, `utils/index.ts` |
| `app/api/upload/route.ts` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/user/layout/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/api/views/track/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dreamr/activity/types.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/api/widgets/feed/route.ts` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/api/widgets/instances/route.ts` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/api/youtube/channel/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/connectors/providers/youtube.ts`, `types/connector.ts`, `utils/index.ts` |
| `app/api/youtube/discovery/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/connectors/providers/youtube.ts`, `types/connector.ts`, `utils/index.ts` |
| `app/api/youtube/live-feed/route.ts` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/connectors/providers/youtube.ts`, `engine/social/rss-feed.ts`, `types/connector.ts` |
| `app/auth/callback/route.ts` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/auth/nextRedirect.ts`, `supabase/config.ts`, `supabase/server/serverClient.ts` |
| `app/auth/reset-password/page.tsx` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/client/client.ts`, `supabase/config.ts` |
| `app/auth/update-password/page.tsx` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/auth/dream.PasswordField.tsx`, `supabase/client/client.ts` |
| `app/connectors/page.tsx` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `app/connectors/dream.ConnectorsClient.tsx` |
| `app/daydream/brand/engin/page.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/daydream/brand/page.tsx` | route | 7 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/daydream/dream.shell.DaydreamShell.tsx`, `components/daydream/dreamsurface.daydream.BrandDaydream.tsx`, `components/ui/dream.AuthenticatedPageHeader.tsx` |
| `app/daydream/code/engin/page.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/daydream/code/page.tsx` | route | 7 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/daydream/dream.OpenDaydreamSideBButton.tsx`, `components/daydream/dream.shell.DaydreamShell.tsx`, `components/ui/dream.AuthenticatedPageHeader.tsx` |
| `app/daydream/constellation/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/dev-bypass.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/daydream/create/engin/page.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/daydream/create/page.tsx` | route | 7 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/daydream/dream.OpenDaydreamSideBButton.tsx`, `components/daydream/dream.shell.DaydreamShell.tsx`, `components/ui/dream.AuthenticatedPageHeader.tsx` |
| `app/daydream/forge/page.tsx` | route | 8 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/daydream/dream.shell.DaydreamShell.tsx`, `components/forge/dream.widget.ForgeMomentumWidget.tsx`, `components/ui/dream.AuthenticatedPageHeader.tsx` |
| `app/daydream/game/dream.GamePageClient.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/games/dream.BabylonSideScroller.tsx` |
| `app/daydream/game/dream.shell.ImmersiveGameShell.tsx` | tsx | 7 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/games/dream.remote.GameRemote.tsx`, `engins/gameengin/GameRuntime.tsx`, `engins/gameengin/cartridge.ts` |
| `app/daydream/game/page.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/daydream/games/engin/page.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/daydream/lab/engin/page.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/daydream/lab/page.tsx` | route | 7 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/daydream/dream.shell.DaydreamShell.tsx`, `engine/dev-bypass.ts`, `supabase/server/serverClient.ts` |
| `app/daydream/lab/portfolio/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/daydream/dream.shell.DaydreamShell.tsx`, `engins/portfolio/dream.PortfolioEngin.tsx`, `engine/dev-bypass.ts` |
| `app/daydream/media-vault/page.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/daydream/music/engin/page.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/daydream/music/page.tsx` | route | 7 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/daydream/dream.shell.DaydreamShell.tsx`, `components/music/dream.SoundRecorder.tsx`, `engine/dev-bypass.ts` |
| `app/daydream/music/upload/page.tsx` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/client/client.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/daydream/play/page.tsx` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engins/gameengin/games/navigation.ts` |
| `app/discover/page.tsx` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/dream-effects/page.tsx` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/animation/gsap/useGsapEntrance.ts`, `utils/index.ts`, `components/three/dream.scene.tsx` |
| `app/dreamdmbar/_components/dreamr/api/route.ts` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `app/dreamdmbar/_components/dreamr/api/feedHandler.ts` |
| `app/dreamdmbar/_components/DreamWidgetGrid.tsx` | tsx | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `types/widgets.ts` |
| `app/dreamdmbar/dreamspace/page.tsx` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/runtime/dream.DualRuntimeContainer.tsx`, `dreamdmbar/runtime/DreamSystemContext.tsx` |
| `app/dreamdmbar/dualruntime/page.tsx` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/shared-dream/dream.SharedDreamRuntime.tsx`, `dreamdmbar/runtime/DreamSystemContext.tsx` |
| `app/dreamdmbar/homedream/page.tsx` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/runtime/dream.DualRuntimeContainer.tsx`, `dreamdmbar/runtime/DreamSystemContext.tsx` |
| `app/dreamdmbar/page.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/dreamr/page.tsx` | route | 5 | 2 | `engine/generated/dreamr.ts`, `src/engin/generated/dreamr.ts` | `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`, `components/ui/dream.AuthenticatedPageHeader.tsx`, `engine/dev-bypass.ts` |
| `app/dreamspace/page.tsx` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dreams/dreamsurface.dreamspace.tsx` |
| `app/edit-profiledream/page.tsx` | route | 6 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/activity/dream.ActivityProfile.tsx`, `components/profile/dream.widget.ProfileWidgetGrid.tsx`, `components/ui/dream.DreamWord.tsx` |
| `app/engines/brand/campaigns/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/brand/panels/dream.panel.CampaignsPanel.tsx`, `components/engines/shared/index.ts`, `engine/dev-bypass.ts` |
| `app/engines/brand/identity/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/brand/panels/dream.panel.IdentityPanel.tsx`, `components/engines/shared/index.ts`, `engine/dev-bypass.ts` |
| `app/engines/brand/layout.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/engines/brand/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/brand/dream.BrandEnginApp.tsx`, `engine/dev-bypass.ts`, `supabase/server/serverClient.ts` |
| `app/engines/code/ai/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/code/panels/dream.panel.AIPanel.tsx`, `components/engines/shared/index.ts`, `engine/dev-bypass.ts` |
| `app/engines/code/layout.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/engines/code/notebook/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/code/panels/dream.panel.NotebookPanel.tsx`, `components/engines/shared/index.ts`, `engine/dev-bypass.ts` |
| `app/engines/code/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/code/dream.CodeEnginApp.tsx`, `engine/dev-bypass.ts`, `supabase/server/serverClient.ts` |
| `app/engines/code/projects/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/code/panels/dream.panel.ProjectsPanel.tsx`, `components/engines/shared/index.ts`, `engine/dev-bypass.ts` |
| `app/engines/create/calendar/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/create/dream.CreateEnginApp.tsx`, `engine/dev-bypass.ts`, `supabase/client/safeGetUser.ts` |
| `app/engines/create/editor/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/create/dream.CreateEnginApp.tsx`, `engine/dev-bypass.ts`, `supabase/client/safeGetUser.ts` |
| `app/engines/create/layout.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/engines/create/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/create/dream.CreateEnginApp.tsx`, `engine/dev-bypass.ts`, `supabase/server/serverClient.ts` |
| `app/engines/create/queue/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/create/dream.CreateEnginApp.tsx`, `engine/dev-bypass.ts`, `supabase/client/safeGetUser.ts` |
| `app/engines/games/builder/page.tsx` | route | 6 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/games/panels/dream.panel.BuilderPanel.tsx`, `components/engines/shared/index.ts`, `supabase/auth/nextRedirect.ts` |
| `app/engines/games/layout.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/engines/games/library/page.tsx` | route | 6 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/games/panels/dream.panel.LibraryPanel.tsx`, `components/engines/shared/index.ts`, `supabase/auth/nextRedirect.ts` |
| `app/engines/games/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/games/dream.GameEnginApp.tsx`, `supabase/auth/nextRedirect.ts`, `engine/dev-bypass.ts` |
| `app/engines/games/scores/page.tsx` | route | 6 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/games/panels/dream.panel.ScoresPanel.tsx`, `components/engines/shared/index.ts`, `supabase/auth/nextRedirect.ts` |
| `app/engines/lab/data/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/lab/panels/dream.panel.DataVizPanel.tsx`, `components/engines/shared/index.ts`, `engine/dev-bypass.ts` |
| `app/engines/lab/experiments/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/lab/panels/dream.panel.ExperimentsPanel.tsx`, `components/engines/shared/index.ts`, `engine/dev-bypass.ts` |
| `app/engines/lab/layout.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/engines/lab/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/lab/dream.LabEnginApp.tsx`, `engine/dev-bypass.ts`, `supabase/server/serverClient.ts` |
| `app/engines/lab/quantum/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/lab/panels/dream.panel.QuantumPanel.tsx`, `components/engines/shared/index.ts`, `engine/dev-bypass.ts` |
| `app/engines/layout.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/engines/music/arrange/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/music/panels/dream.panel.ArrangePanel.tsx`, `components/engines/shared/index.ts`, `engine/dev-bypass.ts` |
| `app/engines/music/layout.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/engines/music/library/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/music/panels/dream.panel.MusicLibraryPanel.tsx`, `components/engines/shared/index.ts`, `engine/dev-bypass.ts` |
| `app/engines/music/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/music/dream.MusicEnginApp.tsx`, `engine/dev-bypass.ts`, `supabase/server/serverClient.ts` |
| `app/engines/music/studio/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/music/panels/dream.panel.StudioPanel.tsx`, `components/engines/shared/index.ts`, `engine/dev-bypass.ts` |
| `app/engines/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `engine/dev-bypass.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/engines/portfolio/assets/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/portfolio/panels/dream.panel.AssetsPanel.tsx`, `components/engines/shared/index.ts`, `engine/dev-bypass.ts` |
| `app/engines/portfolio/layout.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/engines/portfolio/optimize/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/portfolio/panels/dream.panel.OptimizePanel.tsx`, `components/engines/shared/index.ts`, `engine/dev-bypass.ts` |
| `app/engines/portfolio/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/portfolio/dream.PortfolioEnginApp.tsx`, `engine/dev-bypass.ts`, `supabase/server/serverClient.ts` |
| `app/engines/portfolio/quantum/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel.tsx`, `components/engines/shared/index.ts`, `engine/dev-bypass.ts` |
| `app/feed-settings/page.tsx` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `app/feed-settings/dream.FeedSettingsClient.tsx` |
| `app/gameengin/cartridges/[id]/page.tsx` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/gameengin/dream.cartridge.CartridgeLauncher.tsx`, `engins/gameengin/cartridges/manifest.ts` |
| `app/gameengin/cartridges/page.tsx` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/gameengin/dream.cartridge.CartridgeBrowser.tsx` |
| `app/gameengin/page.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/homedream/page.tsx` | route | 5 | 2 | `engine/generated/homedream.ts`, `src/engin/generated/homedream.ts` | `app/dreamdmbar/_components/HomeDreamRegion.tsx`, `engine/dev-bypass.ts`, `dreamr/feed/useLiveFeed.ts` |
| `app/join/page.tsx` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/auth/dream.PasswordField.tsx`, `supabase/client/client.ts`, `supabase/config.ts` |
| `app/lab/[id]/codespace/page.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/lab/[id]/page.tsx` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/lab/new/page.tsx` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/client/client.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/lab/page.tsx` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/layout.tsx` | route | 16 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dream.CommandPaletteMount.tsx`, `components/dream.GlobalOverlays.tsx`, `components/offline/dream.OfflineRuntimeBootstrap.tsx` |
| `app/login/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/auth/dream.PasswordField.tsx`, `supabase/auth/nextRedirect.ts`, `supabase/client/client.ts` |
| `app/marketplace/[id]/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/marketplace/dream.MarketplaceRequestButton.tsx`, `components/ui/dream.DreamWord.tsx`, `supabase/server/serverClient.ts` |
| `app/marketplace/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/marketplace/dream.MarketplaceListingCard.tsx`, `components/ui/dream.AuthenticatedPageHeader.tsx`, `components/ui/dream.DreamWord.tsx` |
| `app/marketplace/sell/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/client/client.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/messages/boards/[id]/page.tsx` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/messaging/dream.BoardComposer.tsx`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/messages/boards/new/page.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/messages/boards/page.tsx` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/messages/page.tsx` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dream.MessagesClient.tsx`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/mission/page.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/notes/page.tsx` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/onboarding/page.tsx` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/client/safeGetUser.ts`, `supabase/server/serverClient.ts`, `components/dream.LandingHero.tsx` |
| `app/policy/page.tsx` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dr-eams/ai/boogie-policy.ts` |
| `app/profile/[handle]/page.tsx` | route | 9 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/activity/dream.ActivityProfile.tsx`, `components/dream.ProfileShareButton.tsx`, `components/feed/dream.FollowButton.tsx` |
| `app/profile/page.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/settings/account/page.tsx` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `app/settings/account/dream.DangerZoneActions.tsx` |
| `app/settings/algorithm/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/feed/dream.AlgorithmEngine.tsx`, `components/ui/dream.AuthenticatedPageHeader.tsx`, `supabase/server/serverClient.ts` |
| `app/settings/appearance/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dream.ThemeApplicator.tsx`, `components/providers/dream.ThemeProvider.tsx`, `components/ui-system/CustomizeModeContext.tsx` |
| `app/settings/controls/page.tsx` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `app/settings/controls/dream.ControlsClient.tsx` |
| `app/settings/data/page.tsx` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `app/settings/data/dream.DataClient.tsx` |
| `app/settings/dreams/page.tsx` | route | 2 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui/dream.AuthenticatedPageHeader.tsx`, `app/settings/dreams/dreams-layout-editor.tsx` |
| `app/settings/feed/page.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/settings/help/page.tsx` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui/dream.AuthenticatedPageHeader.tsx`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/settings/notifications/page.tsx` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui/dream.AuthenticatedPageHeader.tsx` |
| `app/settings/page.tsx` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `dr-eams/ai/triad.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/settings/privacy/page.tsx` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts`, `app/settings/privacy/dream.PrivacyClient.tsx` |
| `app/settings/safety/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui/dream.AuthenticatedPageHeader.tsx`, `dr-eams/ai/boogie-policy.ts`, `supabase/server/serverClient.ts` |
| `app/settings/security/page.tsx` | route | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui/dream.AuthenticatedPageHeader.tsx`, `supabase/client/client.ts`, `supabase/client/safeGetUser.ts` |
| `app/settings/widgets/page.tsx` | route | 1 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui/dream.AuthenticatedPageHeader.tsx` |
| `app/shop/page.tsx` | route | 3 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/ui/dream.DreamWord.tsx`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `app/shop/sell/page.tsx` | route | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `supabase/client/client.ts`, `supabase/client/safeGetUser.ts`, `utils/index.ts` |
| `app/u/[handle]/page.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/view-profile/page.tsx` | route | 6 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/activity/dream.ActivityProfile.tsx`, `components/dream.ProfileShareButton.tsx`, `components/profile/dream.widget.ProfileWidgetGrid.tsx` |
| `app/webgpu/page.tsx` | route | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `app/daydream/render/page.tsx` | route | 0 | 1 | `src/engin/generated/surfaces.ts` | — |
| `app/engines/render/page.tsx` | route | 0 | 1 | `src/engin/generated/surfaces.ts` | — |
| `app/messages/new/page.tsx` | route | 2 | 1 | `src/engin/generated/surfaces.ts` | `supabase/client/safeGetUser.ts`, `supabase/server/serverClient.ts` |
| `app/Agents-MUST-READ-ARCHITECTURE.md` | doc | 0 | 0 | — | — |
| `app/error.tsx` | tsx | 3 | 0 | — | `components/overlays/dream.RootStatusScreen.tsx`, `engine/runtime/isAuthRelatedError.ts`, `supabase/client/client.ts` |
| `app/global-error.tsx` | tsx | 1 | 0 | — | `utils/index.ts` |
| `app/globals-enhanced.css` | css | 0 | 0 | — | — |
| `app/loading.tsx` | tsx | 1 | 0 | — | `components/overlays/dream.RootStatusScreen.tsx` |
| `app/not-found.tsx` | tsx | 1 | 0 | — | `components/overlays/dream.RootStatusScreen.tsx` |

</details>

<details><summary>tests/ (246 files)</summary>

| File | Type | Imports | Imported By | Top Importers | Top Imports |
|---|---|---|---|---|---|
| `tests/activity-first-protocol.test.ts` | ts | 0 | 0 | — | — |
| `tests/activity-revenue-split.test.ts` | ts | 1 | 0 | — | `dreamr/activity/revenueSplit.ts` |
| `tests/admin-lockout.test.ts` | ts | 1 | 0 | — | `engine/admin/lockout.ts` |
| `tests/admin-upgrade-readiness.test.ts` | ts | 3 | 0 | — | `engine/feature-build/index.ts`, `engine/admin/upgrade-readiness.ts`, `engine/setup/checks.ts` |
| `tests/agent-bus-consensus.test.ts` | ts | 2 | 0 | — | `dr-eams/ai/triad.ts`, `engine/agents/agentBus.ts` |
| `tests/Agents-MUST-READ-ARCHITECTURE.md` | doc | 0 | 0 | — | — |
| `tests/ai-edit-engine.test.ts` | ts | 1 | 0 | — | `engins/codeengin/diff/aiEditEngine.ts` |
| `tests/api-route-body-guard.test.ts` | ts | 0 | 0 | — | — |
| `tests/asset-optimizer.test.ts` | ts | 3 | 0 | — | `types/supabase.ts`, `engins/contentengin/assets/assetOptimizer.ts`, `engins/contentengin/assets/indexedDBStore.ts` |
| `tests/auth-providers-route.test.ts` | ts | 1 | 0 | — | `app/api/auth/providers/route.ts` |
| `tests/auth-update-password-page.test.ts` | ts | 0 | 0 | — | — |
| `tests/authenticated-ui-shells.test.ts` | ts | 0 | 0 | — | — |
| `tests/babylon-optimizero.test.ts` | ts | 2 | 0 | — | `optimizer/babylon-optimizero.ts`, `optimizer/creative-optimizero.ts` |
| `tests/babylon-webgpu-engine.test.ts` | ts | 1 | 0 | — | `engine/rendering/babylon/createEngine.ts` |
| `tests/bar-hide-preserves-both-runtimes.test.ts` | ts | 1 | 0 | — | `dreamdmbar/runtime/barInteractions.ts` |
| `tests/boogie-policy-module.test.ts` | ts | 1 | 0 | — | `engine/policy/boogiePolicy.ts` |
| `tests/boogieman.test.ts` | ts | 3 | 0 | — | `dr-eams/ai/boogieman.ts`, `dr-eams/ai/boogie-policy.ts`, `dr-eams/ai/schemas.ts` |
| `tests/bot-detector.test.ts` | ts | 1 | 0 | — | `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts` |
| `tests/branding-logos.test.ts` | ts | 1 | 0 | — | `engins/brandingengin/identity/logos.ts` |
| `tests/canonical-naming-enforcement.test.ts` | ts | 0 | 0 | — | — |
| `tests/child-safety.test.ts` | ts | 4 | 0 | — | `engine/safety/child-safety/childSafetyDetector.ts`, `engine/safety/child-safety/imageClassifier.ts`, `engine/safety/child-safety/scanMediaUrls.ts` |
| `tests/code-dream-preview.test.ts` | ts | 1 | 0 | — | `engins/codeengin/ai/drEamsCodeAssist.ts` |
| `tests/coercion-table.test.ts` | ts | 0 | 0 | — | — |
| `tests/collector-extended.test.ts` | ts | 0 | 0 | — | — |
| `tests/compositeengin-features.test.ts` | ts | 0 | 0 | — | — |
| `tests/conform-memory-map.test.ts` | ts | 1 | 0 | — | `engine/runtime/memory.ts` |
| `tests/connector-delivery.test.ts` | ts | 2 | 0 | — | `engine/connectors/deliveryStrategy.ts`, `engine/connectors/webhookVerification.ts` |
| `tests/connectors.test.ts` | ts | 3 | 0 | — | `engine/connectors/connectorRegistry.ts`, `engine/connectors/normalise.ts`, `engine/connectors/providers/nostr.ts` |
| `tests/content-intelligence-routes.test.ts` | ts | 2 | 0 | — | `app/api/content/intelligence/route.ts`, `app/api/lab/benchmarks/route.ts` |
| `tests/content-publish-intent.test.ts` | ts | 1 | 0 | — | `engins/contentengin/content/publishIntent.ts` |
| `tests/contentengin-features.test.ts` | ts | 3 | 0 | — | `app/api/content/transcribe/route.ts`, `app/api/content/generative-fill/route.ts`, `app/api/content/voice-clone/route.ts` |
| `tests/contentengin/assetviewport-pickmode.test.ts` | ts | 0 | 0 | — | — |
| `tests/contentengin/contentengin-api.test.ts` | ts | 1 | 0 | — | `engins/contentengin/photo/imageAnalyzer.ts` |
| `tests/contentengin/contentengin-export.test.ts` | ts | 4 | 0 | — | `engins/contentengin/pipeline/build.ts`, `engins/contentengin/pipeline/exportGlb.ts`, `engins/contentengin/pipeline/paths.ts` |
| `tests/contentengin/contentengin-glb-import.test.ts` | ts | 1 | 0 | — | `engins/isosurfaceAssetPipeline.ts` |
| `tests/contentengin/contentengin-grammars.test.ts` | ts | 0 | 0 | — | — |
| `tests/contentengin/contentengin-recipes.test.ts` | ts | 0 | 0 | — | — |
| `tests/contentengin/contentengin-rigging.test.ts` | ts | 3 | 0 | — | `engins/isosurfaceAssetPipeline.ts`, `engins/contentengin/rigging/index.ts`, `engins/contentengin/rigging/rigValidator.ts` |
| `tests/contentengin/contentengin-validation.test.ts` | ts | 0 | 0 | — | — |
| `tests/contentengin/test-assets/sandbox/README.md` | doc | 0 | 0 | — | — |
| `tests/contentengin/test-assets/sandbox/recipes/canyon-racer.recipe.json` | config | 0 | 0 | — | — |
| `tests/contentengin/test-assets/sandbox/recipes/glass-canopy-tree.recipe.json` | config | 0 | 0 | — | — |
| `tests/contentengin/test-assets/sandbox/recipes/neon-runner.recipe.json` | config | 0 | 0 | — | — |
| `tests/contextual-home.test.ts` | ts | 1 | 0 | — | `coresurfaces/home/buttons/contextual-home.ts` |
| `tests/creative-optimizero.test.ts` | ts | 1 | 0 | — | `optimizer/creative-optimizero.ts` |
| `tests/data-transform-extended.test.ts` | ts | 0 | 0 | — | — |
| `tests/data-transform.test.ts` | ts | 1 | 0 | — | `engine/data-transform.ts` |
| `tests/daydream-engin-routes.test.ts` | ts | 0 | 0 | — | — |
| `tests/decide-bar-release.test.ts` | ts | 1 | 0 | — | `dreamdmbar/runtime/barInteractions.ts` |
| `tests/dev-bypass.test.ts` | ts | 1 | 0 | — | `engine/dev-bypass.ts` |
| `tests/diff-viewer.test.ts` | ts | 1 | 0 | — | `engins/codeengin/diff/diffUtils.ts` |
| `tests/dr-eams-code-assist.test.ts` | ts | 1 | 0 | — | `engins/codeengin/ai/drEamsCodeAssist.ts` |
| `tests/dr-eams-search-bar.test.ts` | ts | 1 | 0 | — | `dr-eams/search/drEamsSearch.ts` |
| `tests/dream-bar-context.test.ts` | ts | 1 | 0 | — | `dreamdmbar/hooks/useDreamBarContext.ts` |
| `tests/dream-continuity-spine.test.ts` | ts | 2 | 0 | — | `engine/intelligence/continuityHelpers.ts`, `engins/forgeengin/forge/forgeRegistry.ts` |
| `tests/dream-effects.test.ts` | ts | 0 | 0 | — | — |
| `tests/dream-intent-bus.test.ts` | ts | 2 | 0 | — | `engine/runtime/dreamOSBus.ts`, `engine/dreams/dreamIntentBus.ts` |
| `tests/dream-os-bus.test.ts` | ts | 2 | 0 | — | `engine/runtime/dualRuntimeBridge.ts`, `engine/runtime/dreamOSBus.ts` |
| `tests/dream-state.test.ts` | ts | 1 | 0 | — | `engine/navigation/dream-state.ts` |
| `tests/dream-window-system.test.ts` | ts | 6 | 0 | — | `engine/dream-window/DreamWindowLifecycle.ts`, `engine/dream-window/connectionVerbs.ts`, `engine/dream-window/runtimeRegion.ts` |
| `tests/dreamdm-bar-intent.test.ts` | ts | 2 | 0 | — | `dreamdmbar/hooks/useDreamBarContext.ts`, `dreamdmbar/runtime/DreamSystemContext.tsx` |
| `tests/dreamdm-bar-interactions.test.ts` | ts | 1 | 0 | — | `dreamdmbar/runtime/barInteractions.ts` |
| `tests/dreamdm-bar-wild.test.ts` | ts | 1 | 0 | — | `dreamdmbar/runtime/barInteractions.ts` |
| `tests/dreamdm-draft.test.ts` | ts | 0 | 0 | — | — |
| `tests/dreamdm-messaging-phase2.test.ts` | ts | 0 | 0 | — | — |
| `tests/dreamengin-os.test.ts` | ts | 2 | 0 | — | `components/dreamengin/dream.DREAMenginOS.tsx`, `engine/rendering/babylon/createEngine.ts` |
| `tests/dreamengin-superiority/dreamengin-competitive-workflow-gate.test.ts` | ts | 0 | 0 | — | — |
| `tests/dreamengin-unfakeable-performance-integrity.gate.test.ts` | ts | 0 | 0 | — | — |
| `tests/dreamnav.tau.test.ts` | ts | 1 | 0 | — | `engine/dreamnav/tau.ts` |
| `tests/dreamr-algorithm-velocity.test.ts` | ts | 1 | 0 | — | `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts` |
| `tests/dreamr-algorithm.test.ts` | ts | 1 | 0 | — | `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts` |
| `tests/dreamr-feed-limits.test.ts` | ts | 0 | 0 | — | — |
| `tests/dreamr-feed-topics.test.ts` | ts | 1 | 0 | — | `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx` |
| `tests/dreamr-page-route.test.ts` | ts | 0 | 0 | — | — |
| `tests/dreamr-swipe-personalization.test.ts` | ts | 1 | 0 | — | `dreamr/runtime/swipePersonalization.ts` |
| `tests/dreamr-visibility-cursor.test.ts` | ts | 2 | 0 | — | `dreamr/runtime/closeFriendsVisibility.ts`, `dreamr/runtime/feedCursor.ts` |
| `tests/dreamspace-panel.test.ts` | ts | 1 | 0 | — | `components/dreams/dreamsurface.dreamspace.tsx` |
| `tests/drop-target-registry.test.ts` | ts | 0 | 0 | — | — |
| `tests/dual-runtime-bridge-peer-activity.test.ts` | ts | 1 | 0 | — | `engine/runtime/dualRuntimeBridge.ts` |
| `tests/DUALSENSE_TEST_PLAN.md` | doc | 0 | 0 | — | — |
| `tests/durable-bridge.test.ts` | ts | 1 | 0 | — | `engine/runtime/dualRuntimeBridge.ts` |
| `tests/e2e/demo.spec.ts` | ts | 0 | 0 | — | — |
| `tests/e2e/full-coverage.spec.ts` | ts | 0 | 0 | — | — |
| `tests/edit-profiledream-section7.test.ts` | ts | 0 | 0 | — | — |
| `tests/engin-capability-targets.test.ts` | ts | 8 | 0 | — | `engine/engin-runtime/EnginCapabilityExecution.ts`, `engine/engin-runtime/EnginCapabilityTargets.ts`, `engins/rulesets/brand/brandEnginRuleSet.ts` |
| `tests/engin-dispatcher-glow.test.ts` | ts | 1 | 0 | — | `engine/runtime/EnginDispatcher.ts` |
| `tests/engin-dispatcher.test.ts` | ts | 2 | 0 | — | `engine/runtime/memory.ts`, `engine/runtime/EnginDispatcher.ts` |
| `tests/engin-hot-runtime-wiring.test.ts` | ts | 2 | 0 | — | `engine/engin-runtime/index.ts`, `engine/engin-runtime/EnginBaseState.ts` |
| `tests/engin-runtime-core.test.ts` | ts | 8 | 0 | — | `engine/engin-runtime/EnginBaseState.ts`, `engine/engin-runtime/EnginCapabilities.ts`, `engine/engin-runtime/EnginIOAdapter.ts` |
| `tests/engin-workflow.test.ts` | ts | 0 | 0 | — | — |
| `tests/enginpipe/manifest.test.ts` | ts | 1 | 0 | — | `engins/forgeengin/enginpipe/artifact/manifest.ts` |
| `tests/enginpipe/telemetry.test.ts` | ts | 2 | 0 | — | `engins/forgeengin/enginpipe/telemetry/events.ts`, `engins/forgeengin/enginpipe/telemetry/client.ts` |
| `tests/enginpipe/tiers.test.ts` | ts | 1 | 0 | — | `engins/forgeengin/enginpipe/quality/tiers.ts` |
| `tests/example.spec.ts` | ts | 0 | 0 | — | — |
| `tests/export-full-code.test.ts` | ts | 0 | 0 | — | — |
| `tests/feature-build.test.ts` | ts | 4 | 0 | — | `engine/feature-build/featureManifest.ts`, `engine/feature-build/buildCycle.ts`, `engine/feature-build/uiQualityCriteria.ts` |
| `tests/forge-build.test.ts` | ts | 1 | 0 | — | `engins/forgeengin/forge/forgeBuild.ts` |
| `tests/forge-engin.test.ts` | ts | 2 | 0 | — | `engins/forgeengin/forge/forgeRegistry.ts`, `engins/forgeengin/forge/forgeIntelligence.ts` |
| `tests/forge-momentum.test.ts` | ts | 2 | 0 | — | `engins/forgeengin/forge/forgeMomentum.ts`, `engins/forgeengin/forge/forgeRegistry.ts` |
| `tests/forge-nexus.test.ts` | ts | 2 | 0 | — | `engins/forgeengin/forge/forgeNexus.ts`, `engins/forgeengin/forge/forgeRegistry.ts` |
| `tests/forge-rituals.test.ts` | ts | 2 | 0 | — | `engins/forgeengin/forge/forgeRituals.ts`, `engins/forgeengin/forge/forgeRegistry.ts` |
| `tests/fusion-cartridges-depth.test.ts` | ts | 0 | 0 | — | — |
| `tests/fusion-cartridges.test.ts` | ts | 2 | 0 | — | `engins/gameengin/cartridges/manifest.ts`, `engins/gameengin/cartridges/loaders.ts` |
| `tests/game-controller.test.ts` | ts | 3 | 0 | — | `engins/gameengin/games/gameControllerLeft.ts`, `engins/gameengin/games/gameControllerRight.ts`, `engins/gameengin/games/gameControllerButtons.ts` |
| `tests/game-engin-ruleset.test.ts` | ts | 2 | 0 | — | `engine/engin-runtime/EnginBaseState.ts`, `engins/rulesets/game/gameEnginRuleSet.ts` |
| `tests/game-navigation.test.ts` | ts | 5 | 0 | — | `supabase/auth/nextRedirect.ts`, `supabase/config.ts`, `engins/gameengin/games/library-state.ts` |
| `tests/game-performance-baseline.test.ts` | ts | 1 | 0 | — | `engins/gameengin/games/performance-baseline.ts` |
| `tests/game-quality-plan.test.ts` | ts | 1 | 0 | — | `engins/gameengin/games/quality-plan.ts` |
| `tests/game-remote-regression.test.ts` | ts | 0 | 0 | — | — |
| `tests/gameengin-architect.test.ts` | ts | 1 | 0 | — | `engins/gameengin/brain-reader.ts` |
| `tests/gameengin-asset-pipeline.test.ts` | ts | 3 | 0 | — | `engins/gameengin/assets/BundleManifest.ts`, `engins/gameengin/assets/BundleCache.ts`, `engins/gameengin/render/ShaderRegistry.ts` |
| `tests/gameengin-cartridges.test.ts` | ts | 4 | 0 | — | `engins/gameengin/cartridges/manifest.ts`, `engins/gameengin/cartridges/loaders.ts`, `components/games/dream.GamesHub.tsx` |
| `tests/gameengin-crash-modal.test.ts` | ts | 4 | 0 | — | `engins/gameengin/brain-reader.ts`, `components/gameengin/dream.CrashReportModal.tsx`, `components/gameengin/dream.cartridge.CartridgeErrorBoundary.tsx` |
| `tests/gameengin-input-router.test.ts` | ts | 2 | 0 | — | `engins/gameengin/input/index.ts`, `engins/gameengin/cartridge.ts` |
| `tests/gameengin-loop.test.ts` | ts | 2 | 0 | — | `engins/gameengin/brain-reader.ts`, `app/api/gameengin/crash-report/route.ts` |
| `tests/gameengin-power-systems.test.ts` | ts | 0 | 0 | — | — |
| `tests/gameengin-progression.test.ts` | ts | 1 | 0 | — | `engins/gameengin/brain-reader.ts` |
| `tests/gameengin-remote.test.ts` | ts | 1 | 0 | — | `engins/gameengin/remote/index.ts` |
| `tests/gameengin-runtime-upgrade.test.ts` | ts | 1 | 0 | — | `engins/gameengin/runtime/index.ts` |
| `tests/gameengin-spec.test.ts` | ts | 4 | 0 | — | `engins/gameengin/cartridge-manifest.ts`, `engins/gameengin/cartridgeLoader.ts`, `engins/gameengin/brain-reader.ts` |
| `tests/games-daydream-page-auth.test.ts` | ts | 1 | 0 | — | `app/daydream/games/page.tsx` |
| `tests/god-tier-engine.test.ts` | ts | 1 | 0 | — | `engine/rendering/god-tier/godTierEngine.ts` |
| `tests/hero-sprite.test.ts` | ts | 1 | 0 | — | `components/dream.HeroSprite.tsx` |
| `tests/home-feed-home.test.ts` | ts | 1 | 0 | — | `dreamdmbar/runtime/barInteractions.ts` |
| `tests/homedream-page-auth.test.ts` | ts | 1 | 0 | — | `app/dreamdmbar/layout.tsx` |
| `tests/i-engine-runtime.test.ts` | ts | 3 | 0 | — | `engine/runtime/dualRuntime.ts`, `engine/runtime/iEngine.ts`, `engine/runtime/superciliousPlatformRuntime.ts` |
| `tests/icons.test.ts` | ts | 1 | 0 | — | `components/icons/sheet.ts` |
| `tests/idari-admin-guard.test.ts` | ts | 0 | 0 | — | — |
| `tests/idari-observability-loop.test.ts` | ts | 5 | 0 | — | `engine/observability/collector.ts`, `engine/observability/correlator.ts`, `engine/observability/rootCauseAnalyzer.ts` |
| `tests/idari-patch-plan.test.ts` | ts | 1 | 0 | — | `engine/agents/idari.ts` |
| `tests/instance-manager.test.ts` | ts | 0 | 0 | — | — |
| `tests/integration-wiring.test.ts` | ts | 1 | 0 | — | `engins/forgeengin/forge/forgeRegistry.ts` |
| `tests/is-auth-related-error.test.ts` | ts | 1 | 0 | — | `engine/runtime/isAuthRelatedError.ts` |
| `tests/journey-insights.test.ts` | ts | 2 | 0 | — | `types/journey.ts`, `engine/journey/journeyInsights.ts` |
| `tests/journey.test.ts` | ts | 1 | 0 | — | `types/journey.ts` |
| `tests/lab-dream-split.test.ts` | ts | 1 | 0 | — | `engins/codeengin/ai/drEamsCodeAssist.ts` |
| `tests/lab-section-12-spec.test.ts` | ts | 0 | 0 | — | — |
| `tests/landing-calibration.test.ts` | ts | 0 | 0 | — | — |
| `tests/landing-mission-link.test.ts` | ts | 0 | 0 | — | — |
| `tests/ledger-media.test.ts` | ts | 1 | 0 | — | `engins/contentengin/media/ledger.ts` |
| `tests/live-feed.test.ts` | ts | 1 | 0 | — | `dreamr/feed/useLiveFeed.ts` |
| `tests/madmaxi-accessibility-tuning.test.ts` | ts | 0 | 0 | — | — |
| `tests/madmaxi-authored-levels.test.ts` | ts | 2 | 0 | — | `components/games/madmaxi/index.ts`, `components/games/dream.BabylonSideScroller.tsx` |
| `tests/madmaxi-mechanics.test.ts` | ts | 2 | 0 | — | `components/games/madmaxi/index.ts`, `components/games/dream.BabylonSideScroller.tsx` |
| `tests/mobile-game-controls.test.ts` | ts | 2 | 0 | — | `engins/gameengin/games/mobileControls.ts`, `engins/gameengin/games/catalog.ts` |
| `tests/modular-os-stores.test.ts` | ts | 4 | 0 | — | `engine/artifacts/artifactStore.ts`, `engine/activeModulesStore.ts`, `engine/runtime/dreamOSBus.ts` |
| `tests/module-registry.test.ts` | ts | 1 | 0 | — | `types/module-manifest.ts` |
| `tests/music-starmaker-section10.test.ts` | ts | 0 | 0 | — | — |
| `tests/namespace-isolation.test.ts` | ts | 0 | 0 | — | — |
| `tests/navigation/manifold-physics.spec.ts` | ts | 0 | 0 | — | — |
| `tests/navigation/navigation.spec.ts` | ts | 0 | 0 | — | — |
| `tests/navigation/quaternion.spec.ts` | ts | 0 | 0 | — | — |
| `tests/neural-seam-flow.test.ts` | ts | 1 | 0 | — | `dreamdmbar/runtime/bridgeSeamFlow.ts` |
| `tests/notifications.test.ts` | ts | 1 | 0 | — | `dreamdmbar/notifications/notificationHelpers.ts` |
| `tests/offline-queue.test.ts` | ts | 0 | 0 | — | — |
| `tests/optimizer.test.ts` | ts | 4 | 0 | — | `optimizer/constraint-solver.ts`, `optimizer/index.ts`, `optimizer/creative-validator.ts` |
| `tests/orphan-wire-script.test.ts` | ts | 1 | 0 | — | `scripts/wire-orphans.mjs` |
| `tests/os-subsystem-manifest.test.ts` | ts | 1 | 0 | — | `engine/manifests/osSubsystemManifest.ts` |
| `tests/page-surface-wiring.test.ts` | ts | 0 | 0 | — | — |
| `tests/performance-hot-paths.test.ts` | ts | 4 | 0 | — | `engine/vm/inter-vm-messaging.ts`, `engins/forgeengin/enginpipe/telemetry/client.ts`, `engins/gameengin/procgen.ts` |
| `tests/phase6-privacy-idari.test.ts` | ts | 0 | 0 | — | — |
| `tests/phase7-naming.test.ts` | ts | 1 | 0 | — | `engine/identity/canonical-names.ts` |
| `tests/phase8a.test.ts` | ts | 1 | 0 | — | `dr-eams/ai/triad.ts` |
| `tests/phase8b-dream-windows.test.ts` | ts | 10 | 0 | — | `engine/dream-window/DreamWindowLifecycle.ts`, `engine/dream-window/useDreamWindowActions.ts`, `components/dreams/dream.widget.SuperDreamWidget.tsx` |
| `tests/phase8e-orders.test.ts` | ts | 0 | 0 | — | — |
| `tests/phase8e-shop-marketplace.test.ts` | ts | 3 | 0 | — | `engine/shop/listings.ts`, `engine/marketplace/listings.ts`, `engine/marketplace/request.ts` |
| `tests/phase8f-daydream-activation.test.ts` | ts | 0 | 0 | — | — |
| `tests/phase8f-daydream-network.test.ts` | ts | 0 | 0 | — | — |
| `tests/phase8g-dual-runtime-persistence.test.ts` | ts | 0 | 0 | — | — |
| `tests/phase8h-triad-consensus.test.ts` | ts | 0 | 0 | — | — |
| `tests/phase8i-settings-persistence.test.ts` | ts | 0 | 0 | — | — |
| `tests/phase9-adaptive-quality.test.ts` | ts | 1 | 0 | — | `engine/rendering/webgpu/adaptiveQuality.ts` |
| `tests/phase9-cross-post.test.ts` | ts | 2 | 0 | — | `engine/social/crossPost.ts`, `engine/social/platforms.ts` |
| `tests/phase9-drag-drop.test.ts` | ts | 1 | 0 | — | `components/dreamengin/dream.CanvasDropZone.tsx` |
| `tests/phase9-hashtags.test.ts` | ts | 1 | 0 | — | `dreamr/feed/hashtags.ts` |
| `tests/phase9-notifications.test.ts` | ts | 1 | 0 | — | `dreamdmbar/notifications/notificationHelpers.ts` |
| `tests/phase9-offline-cache.test.ts` | ts | 1 | 0 | — | `engine/offline/offlineCache.ts` |
| `tests/phase9-scene-state.test.ts` | ts | 1 | 0 | — | `engine/scene/sceneState.ts` |
| `tests/phase9-touch-gestures.test.ts` | ts | 1 | 0 | — | `engine/gestures/touchGestures.ts` |
| `tests/platform-utils.test.ts` | ts | 2 | 0 | — | `app/api/ads/orders/route.ts`, `app/api/gal/route.ts` |
| `tests/post-media.test.ts` | ts | 1 | 0 | — | `engins/contentengin/media/postMedia.ts` |
| `tests/post-view-counting.test.ts` | ts | 0 | 0 | — | — |
| `tests/product-law-principle10-alignment.test.ts` | ts | 0 | 0 | — | — |
| `tests/profile-avatar-edit-entrypoints.test.ts` | ts | 0 | 0 | — | — |
| `tests/rate-limiting.test.ts` | ts | 0 | 0 | — | — |
| `tests/readme-autosync.test.ts` | ts | 1 | 0 | — | `scripts/readme-autosync.ts` |
| `tests/readme-homedream-system.test.ts` | ts | 0 | 0 | — | — |
| `tests/readme-section13-code-codeengin.test.ts` | ts | 0 | 0 | — | — |
| `tests/readme-section6-homedream.test.ts` | ts | 0 | 0 | — | — |
| `tests/render-completion-evidence.test.ts` | ts | 1 | 0 | — | `engins/renderengin/index.ts` |
| `tests/render-full-integration.test.ts` | ts | 2 | 0 | — | `engine/runtime/EnginDispatcher.ts`, `engins/renderengin/index.ts` |
| `tests/render-service-integration.test.ts` | ts | 2 | 0 | — | `engine/runtime/EnginDispatcher.ts`, `engins/renderengin/index.ts` |
| `tests/render-viewport-lifecycle-source.test.ts` | ts | 0 | 0 | — | — |
| `tests/render-viewport-security-performance.test.ts` | ts | 1 | 0 | — | `engins/renderengin/index.ts` |
| `tests/renderengin-advanced-rendering.test.ts` | ts | 1 | 0 | — | `engins/renderengin/index.ts` |
| `tests/renderengin-assets-scene.test.ts` | ts | 1 | 0 | — | `engins/renderengin/index.ts` |
| `tests/renderengin-core.test.ts` | ts | 1 | 0 | — | `engins/renderengin/index.ts` |
| `tests/renderengin-glb-virtual-animation.test.ts` | ts | 1 | 0 | — | `engins/renderengin/index.ts` |
| `tests/renderengin-gpu-proof-security.test.ts` | ts | 1 | 0 | — | `engins/renderengin/index.ts` |
| `tests/renderengin-material-security-performance.test.ts` | ts | 1 | 0 | — | `engins/renderengin/index.ts` |
| `tests/renderengin-runtime-wiring.test.ts` | ts | 5 | 0 | — | `engine/engin-runtime/EnginRuntime.ts`, `engine/engin-runtime/EnginRuntimeRegistry.ts`, `engins/renderengin/runtimeRegistration.ts` |
| `tests/renderengin-texture-lighting-settings.test.ts` | ts | 1 | 0 | — | `engins/renderengin/index.ts` |
| `tests/renderengin-webgpu.test.ts` | ts | 1 | 0 | — | `engins/renderengin/index.ts` |
| `tests/report-driven-game-agent.test.ts` | ts | 0 | 0 | — | — |
| `tests/repository-state-analysis-section.test.ts` | ts | 1 | 0 | — | `scripts/repository-state-analysis-section.mjs` |
| `tests/responsive.test.ts` | ts | 0 | 0 | — | — |
| `tests/rss-feed.test.ts` | ts | 1 | 0 | — | `engine/social/rss-feed.ts` |
| `tests/runtime-channel.test.ts` | ts | 1 | 0 | — | `engine/runtime/runtimeChannel.ts` |
| `tests/runtime-container.test.ts` | ts | 1 | 0 | — | `engine/runtime/runtimeContainer.ts` |
| `tests/runtime-viewport.test.ts` | ts | 1 | 0 | — | `components/ui-system/runtimeViewport.ts` |
| `tests/runtime-wiring.test.ts` | ts | 0 | 0 | — | — |
| `tests/safe-get-user.test.ts` | ts | 1 | 0 | — | `supabase/client/safeGetUser.ts` |
| `tests/seam-clipboard.test.ts` | ts | 3 | 0 | — | `engine/runtime/dualRuntimeBridge.ts`, `engine/runtime/enginWorkflowRegistry.ts`, `engine/runtime/seamClipboard.ts` |
| `tests/session-continuity.test.ts` | ts | 1 | 0 | — | `engine/intelligence/sessionContinuity.ts` |
| `tests/session-pattern-engine.test.ts` | ts | 1 | 0 | — | `engine/intelligence/sessionPatternEngine.ts` |
| `tests/setup-env.ts` | ts | 0 | 0 | — | — |
| `tests/shell-cartridge-wiring.test.ts` | ts | 5 | 0 | — | `engins/gameengin/cartridges/manifest.ts`, `engins/gameengin/registerCartridges.ts`, `engine/runtime/moduleRegistry.ts` |
| `tests/skip-credits.test.ts` | ts | 2 | 0 | — | `dreamr/activity/skipCredits.ts`, `dreamr/activity/types.ts` |
| `tests/social-feed.test.ts` | ts | 1 | 0 | — | `dreamr/social-feed.ts` |
| `tests/social-platforms.test.ts` | ts | 1 | 0 | — | `engine/social/platforms.ts` |
| `tests/spec35-vm-bus-events.test.ts` | ts | 0 | 0 | — | — |
| `tests/spec36-bot-detection.test.ts` | ts | 2 | 0 | — | `dreamr/bot-detection/index.ts`, `dreamr/botDetection.ts` |
| `tests/spec37-torridity.test.ts` | ts | 1 | 0 | — | `dreamr/torridity.ts` |
| `tests/spec38-collaboration.test.ts` | ts | 1 | 0 | — | `engine/collaboration/index.ts` |
| `tests/spec41-engine-builder.test.ts` | ts | 3 | 0 | — | `engins/forgeengin/forge/engineForge.ts`, `engins/forgeengin/componentInventory.ts`, `engine/events/eventBus.ts` |
| `tests/starmaker-music.test.ts` | ts | 2 | 0 | — | `engins/starmakerengin/music/starmaker.ts`, `engins/starmakerengin/music/starmakerDaw.ts` |
| `tests/structure-ledger.test.ts` | ts | 2 | 0 | — | `engine/navigation/dream-state.ts`, `engine/navigation/StructureLedger.ts` |
| `tests/supabase-config.test.ts` | ts | 1 | 0 | — | `supabase/config.ts` |
| `tests/swap-manager-extended.test.ts` | ts | 0 | 0 | — | — |
| `tests/swipe-calibration.test.ts` | ts | 1 | 0 | — | `dreamr/runtime/swipeCalibration.ts` |
| `tests/tech-foundation.test.ts` | ts | 0 | 0 | — | — |
| `tests/torridity-ledger.test.ts` | ts | 1 | 0 | — | `dreamr/runtime/torridityLedger.ts` |
| `tests/universal-asset-registry.test.ts` | ts | 1 | 0 | — | `components/dream.universal_asset_registry.tsx` |
| `tests/universal-engine.test.ts` | ts | 1 | 0 | — | `engine/index.ts` |
| `tests/universal-visual-modularity.test.ts` | ts | 0 | 0 | — | — |
| `tests/update-readme-current-status.test.ts` | ts | 1 | 0 | — | `scripts/update-readme-status-utils.mjs` |
| `tests/user-sim.test.ts` | ts | 2 | 0 | — | `types/user-sim.ts`, `engine/user-sim/userSimAgent.ts` |
| `tests/utils-extended.test.ts` | ts | 0 | 0 | — | — |
| `tests/utils-supabase-server.test.ts` | ts | 1 | 0 | — | `utils/supabase/server.ts` |
| `tests/v2-readiness.test.ts` | ts | 1 | 0 | — | `engine/identity/canonical-names.ts` |
| `tests/view-profile-public-view-controls.test.ts` | ts | 0 | 0 | — | — |
| `tests/warp-engine.test.ts` | ts | 1 | 0 | — | `engine/rendering/warp/warpEngine.ts` |
| `tests/wasm-gpu-vm.test.ts` | ts | 6 | 0 | — | `engine/vm/types.ts`, `engine/vm/bufferManager.ts`, `engine/vm/pipelineCache.ts` |
| `tests/webgpu-director.test.ts` | ts | 1 | 0 | — | `engine/rendering/webgpu/director.ts` |
| `tests/widget-install-flow.test.ts` | ts | 3 | 0 | — | `engine/connectors/installFlow.ts`, `engine/widgets/widgetRegistry.ts`, `engine/connectors/connectorRegistry.ts` |
| `tests/youtube-provider.test.ts` | ts | 1 | 0 | — | `engine/connectors/providers/youtube.ts` |

</details>

<details><summary>scripts/ (57 files)</summary>

| File | Type | Imports | Imported By | Top Importers | Top Imports |
|---|---|---|---|---|---|
| `scripts/readme-autosync.ts` | ts | 0 | 2 | `scripts/generate-readme.ts`, `tests/readme-autosync.test.ts` | — |
| `scripts/update-readme-status-utils.mjs` | mjs | 0 | 2 | `scripts/update-readme.mjs`, `tests/update-readme-current-status.test.ts` | — |
| `scripts/wire-orphans.mjs` | mjs | 0 | 2 | `scripts/check-orphans.mjs`, `tests/orphan-wire-script.test.ts` | — |
| `scripts/gameengin/lib/tar.ts` | ts | 0 | 1 | `tests/gameengin-spec.test.ts` | — |
| `scripts/repository-state-analysis-section.mjs` | mjs | 0 | 1 | `tests/repository-state-analysis-section.test.ts` | — |
| `scripts/Agents-MUST-READ-ARCHITECTURE.md` | doc | 0 | 0 | — | — |
| `scripts/archive/validate-deployment.js` | js | 0 | 0 | — | — |
| `scripts/autofix-vercel-build.mjs` | mjs | 0 | 0 | — | — |
| `scripts/center-audit.mjs` | mjs | 0 | 0 | — | — |
| `scripts/check-build-memory-drift.mjs` | mjs | 0 | 0 | — | — |
| `scripts/check-engin-filenames.mjs` | mjs | 0 | 0 | — | — |
| `scripts/check-licenses.mjs` | mjs | 0 | 0 | — | — |
| `scripts/check-orphans.mjs` | mjs | 1 | 0 | — | `scripts/wire-orphans.mjs` |
| `scripts/check-root-hygiene.mjs` | mjs | 0 | 0 | — | — |
| `scripts/close-all-open-prs.sh` | file | 0 | 0 | — | — |
| `scripts/contentengin/blender-add-basic-animations.py` | python | 0 | 0 | — | — |
| `scripts/contentengin/blender-auto-rig.py` | python | 0 | 0 | — | — |
| `scripts/contentengin/blender-cleanup.py` | python | 0 | 0 | — | — |
| `scripts/contentengin/blender-validate-rig.py` | python | 0 | 0 | — | — |
| `scripts/contentengin/generate-test-assets.mjs` | mjs | 0 | 0 | — | — |
| `scripts/contentengin/validate-glb.mjs` | mjs | 0 | 0 | — | — |
| `scripts/deploy.sh` | file | 0 | 0 | — | — |
| `scripts/export-full-code.mjs` | mjs | 0 | 0 | — | — |
| `scripts/feature-build/generate-features.mjs` | mjs | 0 | 0 | — | — |
| `scripts/fix-audit.js` | js | 0 | 0 | — | — |
| `scripts/gameengin/architect-run.ts` | ts | 0 | 0 | — | — |
| `scripts/gameengin/artisan-run.ts` | ts | 0 | 0 | — | — |
| `scripts/gameengin/maestro-analyze.ts` | ts | 0 | 0 | — | — |
| `scripts/gameengin/mechanic-run.ts` | ts | 0 | 0 | — | — |
| `scripts/gameengin/package-cartridge.ts` | ts | 0 | 0 | — | — |
| `scripts/gameengin/prophet-run.ts` | ts | 0 | 0 | — | — |
| `scripts/gameengin/smoke-webgl.ts` | ts | 1 | 0 | — | `engins/gameengin/cartridges/manifest.ts` |
| `scripts/gameengin/smoke-webgpu.ts` | ts | 1 | 0 | — | `engins/gameengin/cartridges/manifest.ts` |
| `scripts/gameengin/upgrader-run.ts` | ts | 0 | 0 | — | — |
| `scripts/gameengin/writer-run.ts` | ts | 0 | 0 | — | — |
| `scripts/generate-mobile-nextgen-spec.mjs` | mjs | 0 | 0 | — | — |
| `scripts/generate-mobile-ps5-spec.mjs` | mjs | 0 | 0 | — | — |
| `scripts/generate-readme.ts` | ts | 1 | 0 | — | `scripts/readme-autosync.ts` |
| `scripts/generate-repo-state.mjs` | mjs | 0 | 0 | — | — |
| `scripts/generate-webapp-final-form.mjs` | mjs | 0 | 0 | — | — |
| `scripts/law-check.sh` | file | 0 | 0 | — | — |
| `scripts/migrate-imports.sh` | file | 0 | 0 | — | — |
| `scripts/optimize-dreamengin.mjs` | mjs | 0 | 0 | — | — |
| `scripts/postbuild.js` | js | 0 | 0 | — | — |
| `scripts/postbuild.ts` | ts | 0 | 0 | — | — |
| `scripts/score-pass.cjs` | cjs | 0 | 0 | — | — |
| `scripts/setup-database.sql` | sql | 0 | 0 | — | — |
| `scripts/spec-check.cjs` | cjs | 0 | 0 | — | — |
| `scripts/sync-build-memory.mjs` | mjs | 0 | 0 | — | — |
| `scripts/ui-ux-agent.py` | python | 0 | 0 | — | — |
| `scripts/update-bugs.mjs` | mjs | 0 | 0 | — | — |
| `scripts/update-embed-feed.mjs` | mjs | 0 | 0 | — | — |
| `scripts/update-handoff.mjs` | mjs | 0 | 0 | — | — |
| `scripts/update-readme.mjs` | mjs | 1 | 0 | — | `scripts/update-readme-status-utils.mjs` |
| `scripts/validate-schema-sync.sh` | file | 0 | 0 | — | — |
| `scripts/vercel-ignore.cjs` | cjs | 0 | 0 | — | — |
| `scripts/vercel-preflight.cjs` | cjs | 0 | 0 | — | — |

</details>

<details><summary>dr-eams/ (26 files)</summary>

| File | Type | Imports | Imported By | Top Importers | Top Imports |
|---|---|---|---|---|---|
| `dr-eams/ai/triad.ts` | ts | 2 | 16 | `app/(internal)/idari-console/page.tsx`, `app/actions/dream-docs.ts`, `app/api/admin/ai-chat/route.ts` | `dr-eams/ai/groq.ts`, `dr-eams/ai/schemas.ts` |
| `dr-eams/ai/audit.ts` | ts | 2 | 10 | `app/api/account/delete-data/route.ts`, `app/api/account/delete-dream/route.ts`, `app/api/ai/boogieman/child-safety/route.ts` | `dr-eams/ai/boogie-policy.ts`, `supabase/server/serverClient.ts` |
| `dr-eams/ai/boogie-policy.ts` | ts | 0 | 9 | `app/api/ai/boogieman/status/route.ts`, `app/api/appeal/route.ts`, `app/policy/page.tsx` | — |
| `dr-eams/ai/schemas.ts` | ts | 0 | 8 | `app/api/ai/eams/route.ts`, `app/api/ai/execute/route.ts`, `app/api/ai/idari/route.ts` | — |
| `dr-eams/ai/boogieman.ts` | ts | 2 | 6 | `app/api/ai/boogieman/child-safety/route.ts`, `app/api/ai/boogieman/privacy-event/route.ts`, `app/api/ai/boogieman/route.ts` | `dr-eams/ai/boogie-policy.ts`, `dr-eams/ai/schemas.ts` |
| `dr-eams/ai/rateLimit.ts` | ts | 1 | 5 | `app/api/ai/boogieman/child-safety/route.ts`, `app/api/ai/boogieman/route.ts`, `app/api/ai/eams/route.ts` | `supabase/server/serverClient.ts` |
| `dr-eams/ai/groq.ts` | ts | 0 | 4 | `app/api/admin/ai-chat/route.ts`, `app/api/ai/idari/route.ts`, `dr-eams/ai/triad.ts` | — |
| `dr-eams/ai/tool-router.ts` | ts | 4 | 4 | `dr-eams/ai/handlers/dreams.ts`, `dr-eams/ai/handlers/index.ts`, `dr-eams/ai/handlers/navigation.ts` | `engine/io.ts`, `types/ai-system.ts`, `dr-eams/ai/audit.ts` |
| `dr-eams/ai/confirm.ts` | ts | 0 | 2 | `app/api/ai/eams/route.ts`, `app/api/ai/execute/route.ts` | — |
| `dr-eams/search/drEamsSearch.ts` | ts | 0 | 2 | `components/dreamengin/dream.bar.DrEamsSearchBar.tsx`, `tests/dr-eams-search-bar.test.ts` | — |
| `dr-eams/ai/capability-gate.ts` | ts | 4 | 1 | `engine/runtime/index.ts` | `dr-eams/ai/triad.ts`, `supabase/server/serverClient.ts`, `supabase/client/safeGetUser.ts` |
| `dr-eams/ai/confirm-token.ts` | ts | 2 | 1 | `engine/runtime/index.ts` | `supabase/server/serverClient.ts`, `types/ai-system.ts` |
| `dr-eams/ai/handlers/dreams.ts` | ts | 2 | 1 | `dr-eams/ai/handlers/index.ts` | `types/ai-system.ts`, `dr-eams/ai/tool-router.ts` |
| `dr-eams/ai/handlers/navigation.ts` | ts | 2 | 1 | `dr-eams/ai/handlers/index.ts` | `types/ai-system.ts`, `dr-eams/ai/tool-router.ts` |
| `dr-eams/ai/handlers/social.ts` | ts | 2 | 1 | `dr-eams/ai/handlers/index.ts` | `types/ai-system.ts`, `dr-eams/ai/tool-router.ts` |
| `dr-eams/ai/idempotency.ts` | ts | 1 | 1 | `engine/runtime/index.ts` | `supabase/server/serverClient.ts` |
| `dr-eams/ai/rate-limiter.ts` | ts | 1 | 1 | `engine/runtime/index.ts` | `supabase/server/serverClient.ts` |
| `dr-eams/animation/DrEamsAnimator.ts` | ts | 0 | 1 | `components/dreamengin/dream.DrEamsCanvas.tsx` | — |
| `dr-eams/Agents-MUST-READ-ARCHITECTURE.md` | doc | 0 | 0 | — | — |
| `dr-eams/ai/boogie-verifier.ts` | ts | 2 | 0 | — | `supabase/server/serverClient.ts`, `types/ai-system.ts` |
| `dr-eams/ai/CIC.ts` | ts | 0 | 0 | — | — |
| `dr-eams/ai/client.ts` | ts | 0 | 0 | — | — |
| `dr-eams/ai/handlers/index.ts` | ts | 4 | 0 | — | `dr-eams/ai/tool-router.ts`, `dr-eams/ai/handlers/navigation.ts`, `dr-eams/ai/handlers/dreams.ts` |
| `dr-eams/ai/tfBackend.ts` | ts | 0 | 0 | — | — |
| `dr-eams/capabilities.yaml` | config | 0 | 0 | — | — |
| `dr-eams/tools.ts` | ts | 0 | 0 | — | — |

</details>

<details><summary>types/ (19 files)</summary>

| File | Type | Imports | Imported By | Top Importers | Top Imports |
|---|---|---|---|---|---|
| `types/connector.ts` | ts | 0 | 30 | `app/api/connectors/[provider]/connect/route.ts`, `app/api/connectors/[provider]/sync/route.ts`, `app/api/connectors/[provider]/verify/route.ts` | — |
| `types/supabase.ts` | ts | 0 | 13 | `app/actions/dream-docs.ts`, `app/api/ai/execute/route.ts`, `app/api/journey/route.ts` | — |
| `types/module-manifest.ts` | ts | 1 | 12 | `components/draggable/dream.DraggableModule.tsx`, `components/universal-editor/dream.UniversalEditorWrapper.tsx`, `components/universal-editor/useTapHoldMove.ts` | `engine/engin-runtime/EnginBaseState.ts` |
| `types/dreamArtifact.ts` | ts | 0 | 10 | `app/dreamdmbar/_components/DreamSpaceRegion.tsx`, `app/dreamdmbar/_components/HomeDreamRegion.tsx`, `components/dreams/dreamsurface.dreamspace.tsx` | — |
| `types/ai-system.ts` | ts | 0 | 7 | `dr-eams/ai/boogie-verifier.ts`, `dr-eams/ai/capability-gate.ts`, `dr-eams/ai/confirm-token.ts` | — |
| `types/journey.ts` | ts | 0 | 7 | `components/daydream/dream.JourneyTrail.tsx`, `components/daydream/dream.shell.DaydreamShell.tsx`, `engine/journey/journeyDots.ts` | — |
| `types/dream-window.ts` | ts | 1 | 3 | `components/dreams/dream.widget.SuperDreamWidget.tsx`, `engine/dream-window/useDreamWindowActions.ts`, `tests/phase8b-dream-windows.test.ts` | `engine/dream-window/DreamWindowLifecycle.ts` |
| `types/widget-system-v2.ts` | ts | 0 | 3 | `app/api/dreams/feed/route.ts`, `app/api/dreams/instances/route.ts`, `engine/widgets/feed-resolver.ts` | — |
| `types/widgets.ts` | ts | 0 | 3 | `app/dreamdmbar/_components/DreamWidgetGrid.tsx`, `components/connectors/dream.widget.ConnectorWidgetPicker.tsx`, `engine/runtime/moduleRegistry.ts` | — |
| `types/ads.ts` | ts | 0 | 2 | `app/ads/page.tsx`, `app/ads/slot/[id]/page.tsx` | — |
| `types/ai.ts` | ts | 0 | 2 | `engine/agents/boogieManAI.ts`, `engine/agents/idari.ts` | — |
| `types/spatial.ts` | ts | 0 | 2 | `components/spatial/dream.ProfileSpace.tsx`, `hooks/use-spatial.ts` | — |
| `types/user-sim.ts` | ts | 0 | 2 | `engine/user-sim/userSimAgent.ts`, `tests/user-sim.test.ts` | — |
| `types/widgetConfigs.ts` | ts | 0 | 2 | `engine/widgets/parse.ts`, `engine/widgets/parseConfig.ts` | — |
| `types/Agents-MUST-READ-ARCHITECTURE.md` | doc | 0 | 0 | — | — |
| `types/ccc.ts` | ts | 0 | 0 | — | — |
| `types/experience.ts` | ts | 0 | 0 | — | — |
| `types/marketplace.ts` | ts | 0 | 0 | — | — |
| `types/rivet-dev-agent-os.d.ts` | ts | 0 | 0 | — | — |

</details>

<details><summary>dreamdmbar/ (17 files)</summary>

| File | Type | Imports | Imported By | Top Importers | Top Imports |
|---|---|---|---|---|---|
| `dreamdmbar/runtime/DreamSystemContext.tsx` | tsx | 6 | 28 | `app/dreamdmbar/_components/DreamBarDataBridge.tsx`, `app/dreamdmbar/dreamspace/page.tsx`, `app/dreamdmbar/dualruntime/page.tsx` | `dreamdmbar/runtime/barInteractions.ts`, `components/panels/panelTypes.ts`, `engine/runtime/dualRuntime.ts` |
| `dreamdmbar/runtime/barInteractions.ts` | ts | 0 | 13 | `app/dreamdmbar/_components/DreamBarDataBridge.tsx`, `components/dream.OSShellActivator.tsx`, `components/home/dream.NeuralSeamCanvas.tsx` | — |
| `dreamdmbar/notifications/notificationHelpers.ts` | ts | 0 | 7 | `components/dream.NotificationCenter.tsx`, `dreamdmbar/dreamsurface.dreamdmbar.tsx`, `dreamdmbar/notifications/useNotifications.ts` | — |
| `dreamdmbar/dream.GlowingLight.tsx` | tsx | 0 | 5 | `app/dreamdmbar/_components/HomeDreamRegion.tsx`, `components/home/dream.bar.PersistentDreamBar.tsx`, `dreamdmbar/dreamsurface.dreamdmbar.tsx` | — |
| `dreamdmbar/hooks/useDreamBarContext.ts` | ts | 1 | 5 | `dreamdmbar/dreamsurface.dreamdmbar.tsx`, `engine/generated/dreamdmbar.ts`, `src/engin/generated/dreamdmbar.ts` | `dreamdmbar/runtime/DreamSystemContext.tsx` |
| `dreamdmbar/hooks/useDreamDMMessages.ts` | ts | 3 | 5 | `components/dream.MessagesClient.tsx`, `dreamdmbar/dreamsurface.dreamdmbar.tsx`, `dreamdmbar/hooks/useMessagingCore.ts` | `engine/io.ts`, `supabase/client/client.ts`, `engine/offline/offlineCache.ts` |
| `dreamdmbar/notifications/useNotifications.ts` | ts | 4 | 5 | `app/dreamdmbar/_components/HomeDreamRegion.tsx`, `components/dream.NotificationCenter.tsx`, `dreamdmbar/dreamsurface.dreamdmbar.tsx` | `dreamdmbar/notifications/notificationHelpers.ts`, `utils/index.ts`, `engine/offline/offlineCache.ts` |
| `dreamdmbar/hooks/useDreamDMDraft.ts` | ts | 1 | 4 | `components/dream.MessagesClient.tsx`, `dreamdmbar/dreamsurface.dreamdmbar.tsx`, `engine/generated/dreamdmbar.ts` | `engine/offline/offlineCache.ts` |
| `dreamdmbar/hooks/useDreamSearch.ts` | ts | 2 | 4 | `components/dream.MessagesClient.tsx`, `dreamdmbar/dreamsurface.dreamdmbar.tsx`, `engine/generated/dreamdmbar.ts` | `engins/forgeengin/forge/forgeRegistry.ts`, `supabase/client/client.ts` |
| `dreamdmbar/runtime/bridgeSeamFlow.ts` | ts | 0 | 4 | `components/home/dream.NeuralSeamCanvas.tsx`, `engine/generated/dreamdmbar.ts`, `src/engin/generated/dreamdmbar.ts` | — |
| `dreamdmbar/dreamsurface.dreamdmbar.tsx` | tsx | 18 | 3 | `components/home/dream.bar.PersistentDreamBar.tsx`, `engine/generated/dreamdmbar.ts`, `src/engin/generated/dreamdmbar.ts` | `components/ui/dream.DreamWord.tsx`, `dreamdmbar/dream.GlowingLight.tsx`, `dreamdmbar/dream.PhaseTrail.tsx` |
| `dreamdmbar/hooks/useDreamDMConversations.ts` | ts | 3 | 3 | `dreamdmbar/dreamsurface.dreamdmbar.tsx`, `engine/generated/dreamdmbar.ts`, `src/engin/generated/dreamdmbar.ts` | `engine/io.ts`, `supabase/client/client.ts`, `engine/offline/offlineCache.ts` |
| `dreamdmbar/hooks/useMessagingCore.ts` | ts | 4 | 3 | `dreamdmbar/dreamsurface.dreamdmbar.tsx`, `engine/generated/dreamdmbar.ts`, `src/engin/generated/dreamdmbar.ts` | `engins/contentengin/media/ledger.ts`, `supabase/client/client.ts`, `dreamdmbar/hooks/useDreamDMMessages.ts` |
| `dreamdmbar/dream.PhaseTrail.tsx` | tsx | 0 | 2 | `components/home/dream.bar.PersistentDreamBar.tsx`, `dreamdmbar/dreamsurface.dreamdmbar.tsx` | — |
| `dreamdmbar/hooks/useModuleBarIntent.ts` | ts | 1 | 2 | `engine/generated/dreamdmbar.ts`, `src/engin/generated/dreamdmbar.ts` | `dreamdmbar/runtime/DreamSystemContext.tsx` |
| `dreamdmbar/hooks/useNotifications.ts` | ts | 0 | 2 | `engine/generated/dreamdmbar.ts`, `src/engin/generated/dreamdmbar.ts` | — |
| `dreamdmbar/Agents-MUST-READ-ARCHITECTURE.md` | doc | 0 | 0 | — | — |

</details>

<details><summary>src/ (15 files)</summary>

| File | Type | Imports | Imported By | Top Importers | Top Imports |
|---|---|---|---|---|---|
| `src/engin/generated/brain.ts` | ts | 0 | 1 | `src/engin/generated/index.ts` | — |
| `src/engin/generated/cartridges.ts` | ts | 1 | 1 | `src/engin/generated/index.ts` | `public/cartridges/mad-maxi/MANIFEST.json` |
| `src/engin/generated/connectors.ts` | ts | 0 | 1 | `src/engin/generated/index.ts` | — |
| `src/engin/generated/dreamdmbar.ts` | ts | 15 | 1 | `src/engin/generated/index.ts` | `dreamdmbar/dream.GlowingLight.tsx`, `dreamdmbar/dreamsurface.dreamdmbar.tsx`, `dreamdmbar/hooks/useDreamBarContext.ts` |
| `src/engin/generated/dreamr.ts` | ts | 4 | 1 | `src/engin/generated/index.ts` | `app/dreamr/page.tsx`, `components/dreamr/dream.CloseFriendsSettings.tsx`, `components/dreamr/dream.panel.DreamRChannelPanel.tsx` |
| `src/engin/generated/dreamsurfaces.ts` | ts | 15 | 1 | `src/engin/generated/index.ts` | `components/dreams/dream.connectorlayer.tsx`, `components/dreams/dream.DraggableDream.tsx`, `components/dreams/dream.featurelayer.tsx` |
| `src/engin/generated/engins.ts` | ts | 274 | 1 | `src/engin/generated/index.ts` | `engins/autoopen/dream.AutoOpenGameEngin.tsx`, `engins/brandingengin/identity/logos.ts`, `engins/codeengin-ui/core/parser.ts` |
| `src/engin/generated/homedream.ts` | ts | 1 | 1 | `src/engin/generated/index.ts` | `app/homedream/page.tsx` |
| `src/engin/generated/hooks.ts` | ts | 13 | 1 | `src/engin/generated/index.ts` | `hooks/use-spatial.ts`, `hooks/useAccount.ts`, `hooks/useAppIntentPressureSurface.ts` |
| `src/engin/generated/osArchitectureMap.ts` | ts | 0 | 1 | `src/engin/generated/index.ts` | — |
| `src/engin/generated/personas.ts` | ts | 0 | 1 | `src/engin/generated/index.ts` | — |
| `src/engin/generated/rulesets.ts` | ts | 0 | 1 | `src/engin/generated/index.ts` | — |
| `src/engin/generated/surfaces.ts` | ts | 585 | 1 | `src/engin/generated/index.ts` | `app/(internal)/idari-console/page.tsx`, `app/(internal)/idari-console/platform-errors/page.tsx`, `app/(internal)/idari-console/platform-health/page.tsx` |
| `src/engin/generated/systems.ts` | ts | 0 | 1 | `src/engin/generated/index.ts` | — |
| `src/engin/generated/index.ts` | ts | 14 | 0 | — | `src/engin/generated/engins.ts`, `src/engin/generated/rulesets.ts`, `src/engin/generated/surfaces.ts` |

</details>

<details><summary>hooks/ (14 files)</summary>

| File | Type | Imports | Imported By | Top Importers | Top Imports |
|---|---|---|---|---|---|
| `hooks/useSharedDream.ts` | ts | 3 | 5 | `components/dreams/dream.shell.SharedDreamShell.tsx`, `engine/generated/hooks.ts`, `engins/engin.BrandingEngin.tsx` | `engine/collaboration/index.ts`, `engine/sharedDream.ts`, `supabase/client/client.ts` |
| `hooks/useDreamLayout.ts` | ts | 2 | 4 | `app/settings/dreams/dreams-layout-editor.tsx`, `components/home/dream.bar.PersistentDreamBar.tsx`, `engine/generated/hooks.ts` | `engine/offline/offlineCache.ts`, `engine/runtime/offlineQueue.ts` |
| `hooks/use-spatial.ts` | ts | 2 | 3 | `components/spatial/dream.ProfileSpace.tsx`, `engine/generated/hooks.ts`, `src/engin/generated/hooks.ts` | `supabase/client/client.ts`, `types/spatial.ts` |
| `hooks/useAccount.ts` | ts | 1 | 3 | `app/dreamdmbar/_components/DreamSpaceRegion.tsx`, `engine/generated/hooks.ts`, `src/engin/generated/hooks.ts` | `supabase/client/client.ts` |
| `hooks/useConnectorInstallFlow.ts` | ts | 4 | 3 | `app/connectors/dream.ConnectorsClient.tsx`, `engine/generated/hooks.ts`, `src/engin/generated/hooks.ts` | `engine/connectors/connectorRegistry.ts`, `engine/connectors/installFlow.ts`, `engine/widgets/widgetRegistry.ts` |
| `hooks/useMotionTilt.ts` | ts | 0 | 3 | `components/games/dream.GamesHub.tsx`, `engine/generated/hooks.ts`, `src/engin/generated/hooks.ts` | — |
| `hooks/useTapHoldMove.ts` | ts | 1 | 3 | `components/dreams/dreamsurface.window.tsx`, `engine/generated/hooks.ts`, `src/engin/generated/hooks.ts` | `engine/editor/universalEditor.ts` |
| `hooks/useHideOnScroll.ts` | ts | 0 | 2 | `engine/generated/hooks.ts`, `src/engin/generated/hooks.ts` | — |
| `hooks/useResponsive.ts` | ts | 1 | 2 | `engine/generated/hooks.ts`, `src/engin/generated/hooks.ts` | `components/ui-system/runtimeViewport.ts` |
| `hooks/useTap.ts` | ts | 0 | 2 | `engine/generated/hooks.ts`, `src/engin/generated/hooks.ts` | — |
| `hooks/useTick.ts` | ts | 0 | 2 | `engine/generated/hooks.ts`, `src/engin/generated/hooks.ts` | — |
| `hooks/useViewCounter.ts` | ts | 0 | 2 | `engine/generated/hooks.ts`, `src/engin/generated/hooks.ts` | — |
| `hooks/useAppIntentPressureSurface.ts` | ts | 1 | 1 | `src/engin/generated/hooks.ts` | `engine/intent/appIntentPressure.ts` |
| `hooks/Agents-MUST-READ-ARCHITECTURE.md` | doc | 0 | 0 | — | — |

</details>

<details><summary>agents/ (9 files)</summary>

| File | Type | Imports | Imported By | Top Importers | Top Imports |
|---|---|---|---|---|---|
| `agents/.gitkeep` | file | 0 | 0 | — | — |
| `agents/Agents-MUST-READ-ARCHITECTURE.md` | doc | 0 | 0 | — | — |
| `agents/humanAI.persona.md` | doc | 0 | 0 | — | — |
| `agents/humanAI/orchestrator.md` | doc | 0 | 0 | — | — |
| `agents/humanAI/personas/accessibility.md` | doc | 0 | 0 | — | — |
| `agents/humanAI/personas/creator.md` | doc | 0 | 0 | — | — |
| `agents/humanAI/personas/ios-first.md` | doc | 0 | 0 | — | — |
| `agents/humanAI/personas/power-user.md` | doc | 0 | 0 | — | — |
| `agents/humanAI/personas/social-explorer.md` | doc | 0 | 0 | — | — |

</details>

<details><summary>daydreams/ (9 files)</summary>

| File | Type | Imports | Imported By | Top Importers | Top Imports |
|---|---|---|---|---|---|
| `daydreams/shared/useDaydreamPersistence.ts` | ts | 2 | 7 | `engine/generated/surfaces.ts`, `engins/engin.BrandingEngin.tsx`, `engins/engin.CodeEngin.tsx` | `supabase/client/client.ts`, `supabase/client/safeGetUser.ts` |
| `daydreams/shared/useDaydreamState.ts` | ts | 2 | 6 | `components/daydream/dream.shell.DaydreamShell.tsx`, `engine/generated/surfaces.ts`, `engins/engin.BrandingEngin.tsx` | `supabase/client/client.ts`, `supabase/client/safeGetUser.ts` |
| `daydreams/brand/page.tsx` | tsx | 6 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/daydream/dream.shell.DaydreamShell.tsx`, `components/daydream/dreamsurface.daydream.BrandDaydream.tsx`, `components/ui/dream.AuthenticatedPageHeader.tsx` |
| `daydreams/code/page.tsx` | tsx | 6 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/daydream/dream.OpenDaydreamSideBButton.tsx`, `components/daydream/dream.shell.DaydreamShell.tsx`, `components/ui/dream.AuthenticatedPageHeader.tsx` |
| `daydreams/create/page.tsx` | tsx | 6 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/daydream/dream.OpenDaydreamSideBButton.tsx`, `components/daydream/dream.shell.DaydreamShell.tsx`, `components/ui/dream.AuthenticatedPageHeader.tsx` |
| `daydreams/games/page.tsx` | tsx | 11 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/games/dream.GamesHub.tsx`, `supabase/client/safeGetUser.ts`, `supabase/server/serverClient.ts` |
| `daydreams/lab/page.tsx` | tsx | 6 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/daydream/dream.OpenDaydreamSideBButton.tsx`, `components/daydream/dream.shell.DaydreamShell.tsx`, `components/ui/dream.AuthenticatedPageHeader.tsx` |
| `daydreams/music/page.tsx` | tsx | 7 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/daydream/dream.shell.DaydreamShell.tsx`, `components/music/dream.SoundRecorder.tsx`, `components/ui/dream.AuthenticatedPageHeader.tsx` |
| `daydreams/Agents-MUST-READ-ARCHITECTURE.md` | doc | 0 | 0 | — | — |

</details>

<details><summary>coresurfaces/ (5 files)</summary>

| File | Type | Imports | Imported By | Top Importers | Top Imports |
|---|---|---|---|---|---|
| `coresurfaces/home/buttons/contextual-home.ts` | ts | 0 | 4 | `components/home/dream.bar.GlobalDreamBar.tsx`, `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `coresurfaces/dreamsurface.EditProfileDream.tsx` | tsx | 4 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/profile/dream.widget.ProfileWidgetGrid.tsx`, `components/ui/dream.DreamWord.tsx`, `supabase/client/client.ts` |
| `coresurfaces/dreamsurface.ViewProfile.tsx` | tsx | 5 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | `components/dream.ProfileShareButton.tsx`, `components/profile/dream.widget.ProfileWidgetGrid.tsx`, `components/ui/dream.DreamWord.tsx` |
| `coresurfaces/home/buttons/button-groups.ts` | ts | 0 | 2 | `engine/generated/surfaces.ts`, `src/engin/generated/surfaces.ts` | — |
| `coresurfaces/Agents-MUST-READ-ARCHITECTURE.md` | doc | 0 | 0 | — | — |

</details>

<details><summary>assembly/ (4 files)</summary>

| File | Type | Imports | Imported By | Top Importers | Top Imports |
|---|---|---|---|---|---|
| `assembly/Agents-MUST-READ-ARCHITECTURE.md` | doc | 0 | 0 | — | — |
| `assembly/bus.ts` | ts | 0 | 0 | — | — |
| `assembly/index.ts` | ts | 0 | 0 | — | — |
| `assembly/mad-maxi-player.ts` | ts | 0 | 0 | — | — |

</details>

<details><summary>utils/ (3 files)</summary>

| File | Type | Imports | Imported By | Top Importers | Top Imports |
|---|---|---|---|---|---|
| `utils/index.ts` | ts | 0 | 120 | `app/actions/dream-docs.ts`, `app/ads/create/page.tsx`, `app/api/account/delete-data/route.ts` | — |
| `utils/supabase/server.ts` | ts | 1 | 1 | `tests/utils-supabase-server.test.ts` | `supabase/server/serverClient.ts` |
| `utils/Agents-MUST-READ-ARCHITECTURE.md` | doc | 0 | 0 | — | — |

</details>


#### File-Level Graphs by Folder

<details><summary>utils/ — 3 files</summary>

```mermaid
graph LR
  f_utils_supabase_server_ts["server.ts"]
  f_supabase_server_serverClient_ts["serverClient.ts"]
  f_utils_Agents_MUST_READ_ARCHITECTURE_md["Agents-MUST-READ-ARCHITECTURE.md"]
  f_utils_index_ts["index.ts"]
  f_utils_supabase_server_ts --> f_supabase_server_serverClient_ts
```

</details>

<details><summary>assembly/ — 4 files</summary>

```mermaid
graph LR
  f_assembly_Agents_MUST_READ_ARCHITECTURE_md["Agents-MUST-READ-ARCHITECTURE.md"]
  f_assembly_bus_ts["bus.ts"]
  f_assembly_index_ts["index.ts"]
  f_assembly_mad_maxi_player_ts["mad-maxi-player.ts"]
```

</details>

<details><summary>coresurfaces/ — 5 files</summary>

```mermaid
graph LR
  f_coresurfaces_dreamsurface_EditProfileDream_tsx["dreamsurface.EditProfileDream.tsx"]
  f_components_profile_dream_widget_ProfileWidgetGrid_tsx["dream.widget.ProfileWidgetGrid.tsx"]
  f_components_ui_dream_DreamWord_tsx["dream.DreamWord.tsx"]
  f_supabase_client_client_ts["client.ts"]
  f_supabase_client_safeGetUser_ts["safeGetUser.ts"]
  f_coresurfaces_dreamsurface_ViewProfile_tsx["dreamsurface.ViewProfile.tsx"]
  f_components_dream_ProfileShareButton_tsx["dream.ProfileShareButton.tsx"]
  f_supabase_server_serverClient_ts["serverClient.ts"]
  f_coresurfaces_Agents_MUST_READ_ARCHITECTURE_md["Agents-MUST-READ-ARCHITECTURE.md"]
  f_coresurfaces_home_buttons_button_groups_ts["button-groups.ts"]
  f_coresurfaces_home_buttons_contextual_home_ts["contextual-home.ts"]
  f_coresurfaces_dreamsurface_EditProfileDream_tsx --> f_components_profile_dream_widget_ProfileWidgetGrid_tsx
  f_coresurfaces_dreamsurface_EditProfileDream_tsx --> f_components_ui_dream_DreamWord_tsx
  f_coresurfaces_dreamsurface_EditProfileDream_tsx --> f_supabase_client_client_ts
  f_coresurfaces_dreamsurface_EditProfileDream_tsx --> f_supabase_client_safeGetUser_ts
  f_coresurfaces_dreamsurface_ViewProfile_tsx --> f_components_dream_ProfileShareButton_tsx
  f_coresurfaces_dreamsurface_ViewProfile_tsx --> f_components_profile_dream_widget_ProfileWidgetGrid_tsx
  f_coresurfaces_dreamsurface_ViewProfile_tsx --> f_components_ui_dream_DreamWord_tsx
  f_coresurfaces_dreamsurface_ViewProfile_tsx --> f_supabase_server_serverClient_ts
  f_coresurfaces_dreamsurface_ViewProfile_tsx --> f_supabase_client_safeGetUser_ts
```

</details>

<details><summary>agents/ — 9 files</summary>

```mermaid
graph LR
  f_agents__gitkeep[".gitkeep"]
  f_agents_Agents_MUST_READ_ARCHITECTURE_md["Agents-MUST-READ-ARCHITECTURE.md"]
  f_agents_humanAI_persona_md["humanAI.persona.md"]
  f_agents_humanAI_orchestrator_md["orchestrator.md"]
  f_agents_humanAI_personas_accessibility_md["accessibility.md"]
  f_agents_humanAI_personas_creator_md["creator.md"]
  f_agents_humanAI_personas_ios_first_md["ios-first.md"]
  f_agents_humanAI_personas_power_user_md["power-user.md"]
  f_agents_humanAI_personas_social_explorer_md["social-explorer.md"]
```

</details>

<details><summary>daydreams/ — 9 files</summary>

```mermaid
graph LR
  f_daydreams_brand_page_tsx["page.tsx"]
  f_components_daydream_dream_shell_DaydreamShell_tsx["dream.shell.DaydreamShell.tsx"]
  f_components_daydream_dreamsurface_daydream_BrandDaydream_tsx["dreamsurface.daydream.BrandDaydream.tsx"]
  f_components_ui_dream_AuthenticatedPageHeader_tsx["dream.AuthenticatedPageHeader.tsx"]
  f_engins_engin_BrandingEngin_tsx["engin.BrandingEngin.tsx"]
  f_supabase_server_serverClient_ts["serverClient.ts"]
  f_supabase_client_safeGetUser_ts["safeGetUser.ts"]
  f_daydreams_code_page_tsx["page.tsx"]
  f_components_daydream_dream_OpenDaydreamSideBButton_tsx["dream.OpenDaydreamSideBButton.tsx"]
  f_engins_engin_CodeEngin_tsx["engin.CodeEngin.tsx"]
  f_daydreams_create_page_tsx["page.tsx"]
  f_engins_engin_ContentEngin_tsx["engin.ContentEngin.tsx"]
  f_daydreams_games_page_tsx["page.tsx"]
  f_components_games_dream_GamesHub_tsx["dream.GamesHub.tsx"]
  f_engins_autoopen_dream_AutoOpenGameEngin_tsx["dream.AutoOpenGameEngin.tsx"]
  f_engine_dev_bypass_ts["dev-bypass.ts"]
  f_engins_gameengin_games_navigation_ts["navigation.ts"]
  f_engins_gameengin_games_quality_plan_ts["quality-plan.ts"]
  f_engins_engin_GameEngin_tsx["engin.GameEngin.tsx"]
  f_daydreams_lab_page_tsx["page.tsx"]
  f_engins_engin_LabEngin_tsx["engin.LabEngin.tsx"]
  f_daydreams_music_page_tsx["page.tsx"]
  f_components_music_dream_SoundRecorder_tsx["dream.SoundRecorder.tsx"]
  f_engins_engin_StarMakerEngin_tsx["engin.StarMakerEngin.tsx"]
  f_daydreams_shared_useDaydreamPersistence_ts["useDaydreamPersistence.ts"]
  f_supabase_client_client_ts["client.ts"]
  f_daydreams_shared_useDaydreamState_ts["useDaydreamState.ts"]
  f_daydreams_Agents_MUST_READ_ARCHITECTURE_md["Agents-MUST-READ-ARCHITECTURE.md"]
  f_daydreams_brand_page_tsx --> f_components_daydream_dream_shell_DaydreamShell_tsx
  f_daydreams_brand_page_tsx --> f_components_daydream_dreamsurface_daydream_BrandDaydream_tsx
  f_daydreams_brand_page_tsx --> f_components_ui_dream_AuthenticatedPageHeader_tsx
  f_daydreams_brand_page_tsx --> f_engins_engin_BrandingEngin_tsx
  f_daydreams_brand_page_tsx --> f_supabase_server_serverClient_ts
  f_daydreams_brand_page_tsx --> f_supabase_client_safeGetUser_ts
  f_daydreams_code_page_tsx --> f_components_daydream_dream_OpenDaydreamSideBButton_tsx
  f_daydreams_code_page_tsx --> f_components_daydream_dream_shell_DaydreamShell_tsx
  f_daydreams_code_page_tsx --> f_components_ui_dream_AuthenticatedPageHeader_tsx
  f_daydreams_code_page_tsx --> f_engins_engin_CodeEngin_tsx
  f_daydreams_code_page_tsx --> f_supabase_server_serverClient_ts
  f_daydreams_code_page_tsx --> f_supabase_client_safeGetUser_ts
  f_daydreams_create_page_tsx --> f_components_daydream_dream_OpenDaydreamSideBButton_tsx
  f_daydreams_create_page_tsx --> f_components_daydream_dream_shell_DaydreamShell_tsx
  f_daydreams_create_page_tsx --> f_components_ui_dream_AuthenticatedPageHeader_tsx
  f_daydreams_create_page_tsx --> f_engins_engin_ContentEngin_tsx
  f_daydreams_create_page_tsx --> f_supabase_server_serverClient_ts
  f_daydreams_create_page_tsx --> f_supabase_client_safeGetUser_ts
  f_daydreams_games_page_tsx --> f_components_games_dream_GamesHub_tsx
  f_daydreams_games_page_tsx --> f_supabase_client_safeGetUser_ts
  f_daydreams_games_page_tsx --> f_supabase_server_serverClient_ts
  f_daydreams_games_page_tsx --> f_components_daydream_dream_OpenDaydreamSideBButton_tsx
  f_daydreams_games_page_tsx --> f_components_daydream_dream_shell_DaydreamShell_tsx
  f_daydreams_games_page_tsx --> f_components_ui_dream_AuthenticatedPageHeader_tsx
  f_daydreams_games_page_tsx --> f_engins_autoopen_dream_AutoOpenGameEngin_tsx
  f_daydreams_games_page_tsx --> f_engine_dev_bypass_ts
  f_daydreams_games_page_tsx --> f_engins_gameengin_games_navigation_ts
  f_daydreams_games_page_tsx --> f_engins_gameengin_games_quality_plan_ts
  f_daydreams_games_page_tsx --> f_engins_engin_GameEngin_tsx
  f_daydreams_lab_page_tsx --> f_components_daydream_dream_OpenDaydreamSideBButton_tsx
  f_daydreams_lab_page_tsx --> f_components_daydream_dream_shell_DaydreamShell_tsx
  f_daydreams_lab_page_tsx --> f_components_ui_dream_AuthenticatedPageHeader_tsx
  f_daydreams_lab_page_tsx --> f_engins_engin_LabEngin_tsx
  f_daydreams_lab_page_tsx --> f_supabase_server_serverClient_ts
  f_daydreams_lab_page_tsx --> f_supabase_client_safeGetUser_ts
  f_daydreams_music_page_tsx --> f_components_daydream_dream_shell_DaydreamShell_tsx
  f_daydreams_music_page_tsx --> f_components_music_dream_SoundRecorder_tsx
  f_daydreams_music_page_tsx --> f_components_ui_dream_AuthenticatedPageHeader_tsx
  f_daydreams_music_page_tsx --> f_engins_engin_StarMakerEngin_tsx
  f_daydreams_music_page_tsx --> f_engine_dev_bypass_ts
  f_daydreams_music_page_tsx --> f_supabase_server_serverClient_ts
  f_daydreams_music_page_tsx --> f_supabase_client_safeGetUser_ts
  f_daydreams_shared_useDaydreamPersistence_ts --> f_supabase_client_client_ts
  f_daydreams_shared_useDaydreamPersistence_ts --> f_supabase_client_safeGetUser_ts
  f_daydreams_shared_useDaydreamState_ts --> f_supabase_client_client_ts
  f_daydreams_shared_useDaydreamState_ts --> f_supabase_client_safeGetUser_ts
```

</details>

<details><summary>hooks/ — 14 files</summary>

```mermaid
graph LR
  f_hooks_use_spatial_ts["use-spatial.ts"]
  f_supabase_client_client_ts["client.ts"]
  f_types_spatial_ts["spatial.ts"]
  f_hooks_useAccount_ts["useAccount.ts"]
  f_hooks_useAppIntentPressureSurface_ts["useAppIntentPressureSurface.ts"]
  f_engine_intent_appIntentPressure_ts["appIntentPressure.ts"]
  f_hooks_useConnectorInstallFlow_ts["useConnectorInstallFlow.ts"]
  f_engine_connectors_connectorRegistry_ts["connectorRegistry.ts"]
  f_engine_connectors_installFlow_ts["installFlow.ts"]
  f_engine_widgets_widgetRegistry_ts["widgetRegistry.ts"]
  f_engine_offline_offlineCache_ts["offlineCache.ts"]
  f_hooks_useDreamLayout_ts["useDreamLayout.ts"]
  f_engine_runtime_offlineQueue_ts["offlineQueue.ts"]
  f_hooks_useResponsive_ts["useResponsive.ts"]
  f_components_ui_system_runtimeViewport_ts["runtimeViewport.ts"]
  f_hooks_useSharedDream_ts["useSharedDream.ts"]
  f_engine_collaboration_index_ts["index.ts"]
  f_engine_sharedDream_ts["sharedDream.ts"]
  f_hooks_useTapHoldMove_ts["useTapHoldMove.ts"]
  f_engine_editor_universalEditor_ts["universalEditor.ts"]
  f_hooks_Agents_MUST_READ_ARCHITECTURE_md["Agents-MUST-READ-ARCHITECTURE.md"]
  f_hooks_useHideOnScroll_ts["useHideOnScroll.ts"]
  f_hooks_useMotionTilt_ts["useMotionTilt.ts"]
  f_hooks_useTap_ts["useTap.ts"]
  f_hooks_useTick_ts["useTick.ts"]
  f_hooks_useViewCounter_ts["useViewCounter.ts"]
  f_hooks_use_spatial_ts --> f_supabase_client_client_ts
  f_hooks_use_spatial_ts --> f_types_spatial_ts
  f_hooks_useAccount_ts --> f_supabase_client_client_ts
  f_hooks_useAppIntentPressureSurface_ts --> f_engine_intent_appIntentPressure_ts
  f_hooks_useConnectorInstallFlow_ts --> f_engine_connectors_connectorRegistry_ts
  f_hooks_useConnectorInstallFlow_ts --> f_engine_connectors_installFlow_ts
  f_hooks_useConnectorInstallFlow_ts --> f_engine_widgets_widgetRegistry_ts
  f_hooks_useConnectorInstallFlow_ts --> f_engine_offline_offlineCache_ts
  f_hooks_useDreamLayout_ts --> f_engine_offline_offlineCache_ts
  f_hooks_useDreamLayout_ts --> f_engine_runtime_offlineQueue_ts
  f_hooks_useResponsive_ts --> f_components_ui_system_runtimeViewport_ts
  f_hooks_useSharedDream_ts --> f_engine_collaboration_index_ts
  f_hooks_useSharedDream_ts --> f_engine_sharedDream_ts
  f_hooks_useSharedDream_ts --> f_supabase_client_client_ts
  f_hooks_useTapHoldMove_ts --> f_engine_editor_universalEditor_ts
```

</details>

<details><summary>src/ — 15 files</summary>

```mermaid
graph LR
  f_src_engin_generated_cartridges_ts["cartridges.ts"]
  f_public_cartridges_mad_maxi_MANIFEST_json["MANIFEST.json"]
  f_src_engin_generated_dreamdmbar_ts["dreamdmbar.ts"]
  f_dreamdmbar_dream_GlowingLight_tsx["dream.GlowingLight.tsx"]
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx["dreamsurface.dreamdmbar.tsx"]
  f_dreamdmbar_hooks_useDreamBarContext_ts["useDreamBarContext.ts"]
  f_dreamdmbar_hooks_useDreamDMConversations_ts["useDreamDMConversations.ts"]
  f_dreamdmbar_hooks_useDreamDMDraft_ts["useDreamDMDraft.ts"]
  f_dreamdmbar_hooks_useDreamDMMessages_ts["useDreamDMMessages.ts"]
  f_dreamdmbar_hooks_useDreamSearch_ts["useDreamSearch.ts"]
  f_dreamdmbar_hooks_useMessagingCore_ts["useMessagingCore.ts"]
  f_dreamdmbar_hooks_useModuleBarIntent_ts["useModuleBarIntent.ts"]
  f_dreamdmbar_hooks_useNotifications_ts["useNotifications.ts"]
  f_dreamdmbar_notifications_notificationHelpers_ts["notificationHelpers.ts"]
  f_dreamdmbar_notifications_useNotifications_ts["useNotifications.ts"]
  f_dreamdmbar_runtime_barInteractions_ts["barInteractions.ts"]
  f_dreamdmbar_runtime_bridgeSeamFlow_ts["bridgeSeamFlow.ts"]
  f_dreamdmbar_runtime_DreamSystemContext_tsx["DreamSystemContext.tsx"]
  f_src_engin_generated_dreamr_ts["dreamr.ts"]
  f_app_dreamr_page_tsx["page.tsx"]
  f_components_dreamr_dream_CloseFriendsSettings_tsx["dream.CloseFriendsSettings.tsx"]
  f_components_dreamr_dream_panel_DreamRChannelPanel_tsx["dream.panel.DreamRChannelPanel.tsx"]
  f_components_dreamr_dream_panel_DreamRCreatorPanel_tsx["dream.panel.DreamRCreatorPanel.tsx"]
  f_src_engin_generated_dreamsurfaces_ts["dreamsurfaces.ts"]
  f_components_dreams_dream_connectorlayer_tsx["dream.connectorlayer.tsx"]
  f_components_dreams_dream_DraggableDream_tsx["dream.DraggableDream.tsx"]
  f_components_dreams_dream_featurelayer_tsx["dream.featurelayer.tsx"]
  f_components_dreams_dream_GlobalDragLayer_tsx["dream.GlobalDragLayer.tsx"]
  f_components_dreams_dream_outputlayer_tsx["dream.outputlayer.tsx"]
  f_components_dreams_dream_panel_RuntimeMemoryHUD_tsx["dream.panel.RuntimeMemoryHUD.tsx"]
  f_components_dreams_dream_PlatformErrorReporter_tsx["dream.PlatformErrorReporter.tsx"]
  f_components_dreams_dream_shell_DreamShell_tsx["dream.shell.DreamShell.tsx"]
  f_components_dreams_dream_shell_SharedDreamShell_tsx["dream.shell.SharedDreamShell.tsx"]
  f_components_dreams_dream_SlideOverPanel_tsx["dream.SlideOverPanel.tsx"]
  f_components_dreams_dream_widget_SuperDreamWidget_tsx["dream.widget.SuperDreamWidget.tsx"]
  f_components_dreams_dream_window_JourneyDreamWindow_tsx["dream.window.JourneyDreamWindow.tsx"]
  f_components_dreams_dreamsurface_dreamspace_tsx["dreamsurface.dreamspace.tsx"]
  f_components_dreams_dreamsurface_shell_tsx["dreamsurface.shell.tsx"]
  f_components_dreams_dreamsurface_window_tsx["dreamsurface.window.tsx"]
  f_src_engin_generated_engins_ts["engins.ts"]
  f_engins_autoopen_dream_AutoOpenGameEngin_tsx["dream.AutoOpenGameEngin.tsx"]
  f_engins_brandingengin_identity_logos_ts["logos.ts"]
  f_engins_codeengin_ui_core_parser_ts["parser.ts"]
  f_engins_codeengin_ui_modules_ai_co_pilot_dream_panel_AgentPanel_tsx["dream.panel.AgentPanel.tsx"]
  f_engins_codeengin_ui_modules_ai_co_pilot_index_ts["index.ts"]
  f_engins_codeengin_ui_modules_ai_co_pilot_useAgentSession_ts["useAgentSession.ts"]
  f_engins_codeengin_ui_orchestrator_dream_index_tsx["dream.index.tsx"]
  f_engins_codeengin_ai_drEamsCodeAssist_ts["drEamsCodeAssist.ts"]
  f_engins_codeengin_auth_ts["auth.ts"]
  f_engins_CodeEngin_core_parser_ts["parser.ts"]
  f_engins_codeengin_diagnostics_ts["diagnostics.ts"]
  f_engins_codeengin_diff_aiEditEngine_ts["aiEditEngine.ts"]
  f_engins_codeengin_diff_diffUtils_ts["diffUtils.ts"]
  f_engins_codeengin_git_ts["git.ts"]
  f_engins_CodeEngin_modules_ai_co_pilot_dream_panel_AgentPanel_tsx["dream.panel.AgentPanel.tsx"]
  f_engins_CodeEngin_modules_ai_co_pilot_index_ts["index.ts"]
  f_engins_CodeEngin_modules_ai_co_pilot_useAgentSession_ts["useAgentSession.ts"]
  f_engins_CodeEngin_orchestrator_dream_index_tsx["dream.index.tsx"]
  f_engins_codeengin_pathSafety_ts["pathSafety.ts"]
  f_engins_codeengin_projectGraph_ts["projectGraph.ts"]
  f_engins_codeengin_runner_ts["runner.ts"]
  f_engins_codeengin_runnerCommands_ts["runnerCommands.ts"]
  f_engins_codeengin_search_ts["search.ts"]
  f_engins_codeengin_types_ts["types.ts"]
  f_engins_codeengin_workspaceStore_ts["workspaceStore.ts"]
  f_engins_contentengin_assets_assetOptimizer_ts["assetOptimizer.ts"]
  f_engins_contentengin_assets_indexedDBStore_ts["indexedDBStore.ts"]
  f_engins_contentengin_assets_localAssetLibrary_ts["localAssetLibrary.ts"]
  f_engins_contentengin_assetTypes_ts["assetTypes.ts"]
  f_engins_contentengin_AssetViewport_tsx["AssetViewport.tsx"]
  f_engins_contentengin_builders_geometryBuilder_ts["geometryBuilder.ts"]
  f_engins_contentengin_builders_meshBuilder_ts["meshBuilder.ts"]
  f_engins_contentengin_builders_modifiers_ts["modifiers.ts"]
  f_engins_contentengin_builders_primitiveBuilder_ts["primitiveBuilder.ts"]
  f_engins_contentengin_builders_textureBuilder_ts["textureBuilder.ts"]
  f_engins_contentengin_builders_uvGenerator_ts["uvGenerator.ts"]
  f_engins_contentengin_cli_ts["cli.ts"]
  f_engins_contentengin_composite_compositor_ts["compositor.ts"]
  f_engins_contentengin_composite_fxSimulation_ts["fxSimulation.ts"]
  f_engins_contentengin_composite_matchmover_ts["matchmover.ts"]
  f_engins_contentengin_composite_motionCapture_ts["motionCapture.ts"]
  f_engins_contentengin_composite_rotoscope_ts["rotoscope.ts"]
  f_engins_contentengin_content_generativeFill_ts["generativeFill.ts"]
  f_engins_contentengin_content_publishIntent_ts["publishIntent.ts"]
  f_engins_contentengin_content_seoScorer_ts["seoScorer.ts"]
  f_engins_contentengin_content_transcriptEditor_ts["transcriptEditor.ts"]
  f_engins_contentengin_content_voiceClone_ts["voiceClone.ts"]
  f_engins_contentengin_grammars_animalGrammar_ts["animalGrammar.ts"]
  f_engins_contentengin_grammars_bicycleGrammar_ts["bicycleGrammar.ts"]
  f_engins_contentengin_grammars_bridgeGrammar_ts["bridgeGrammar.ts"]
  f_engins_contentengin_grammars_buildingGrammar_ts["buildingGrammar.ts"]
  f_engins_contentengin_grammars_creatureGrammar_ts["creatureGrammar.ts"]
  f_engins_contentengin_grammars_humanoidGrammar_ts["humanoidGrammar.ts"]
  f_engins_contentengin_grammars_propGrammar_ts["propGrammar.ts"]
  f_engins_contentengin_grammars_roadGrammar_ts["roadGrammar.ts"]
  f_engins_contentengin_grammars_shared_ts["shared.ts"]
  f_engins_contentengin_grammars_terrainGrammar_ts["terrainGrammar.ts"]
  f_engins_contentengin_grammars_treeGrammar_ts["treeGrammar.ts"]
  f_engins_contentengin_grammars_vehicleGrammar_ts["vehicleGrammar.ts"]
  f_engins_contentengin_grammars_waterGrammar_ts["waterGrammar.ts"]
  f_engins_contentengin_ImplicitAssetWorkspace_tsx["ImplicitAssetWorkspace.tsx"]
  f_engins_contentengin_materials_materialTypes_ts["materialTypes.ts"]
  f_engins_contentengin_materials_paletteExtractor_ts["paletteExtractor.ts"]
  f_engins_contentengin_materials_proceduralMaterials_ts["proceduralMaterials.ts"]
  f_engins_contentengin_media_h265_encoder_ts["h265-encoder.ts"]
  f_engins_contentengin_media_ledger_ts["ledger.ts"]
  f_engins_contentengin_media_postMedia_ts["postMedia.ts"]
  f_engins_contentengin_performancePlan_ts["performancePlan.ts"]
  f_engins_contentengin_photo_colorCluster_ts["colorCluster.ts"]
  f_engins_contentengin_photo_edgeDetector_ts["edgeDetector.ts"]
  f_engins_contentengin_photo_imageAnalyzer_ts["imageAnalyzer.ts"]
  f_engins_contentengin_photo_photoToRecipe_ts["photoToRecipe.ts"]
  f_engins_contentengin_photo_pngDecoder_ts["pngDecoder.ts"]
  f_engins_contentengin_photo_regionDetector_ts["regionDetector.ts"]
  f_engins_contentengin_pipeline_build_ts["build.ts"]
  f_engins_contentengin_pipeline_bundle_ts["bundle.ts"]
  f_engins_contentengin_pipeline_exportGlb_ts["exportGlb.ts"]
  f_engins_contentengin_pipeline_generateCollision_ts["generateCollision.ts"]
  f_engins_contentengin_pipeline_generateLods_ts["generateLods.ts"]
  f_engins_contentengin_pipeline_paths_ts["paths.ts"]
  f_engins_contentengin_pipeline_validate_ts["validate.ts"]
  f_engins_contentengin_pipeline_writeManifest_ts["writeManifest.ts"]
  f_engins_contentengin_recipes_recipeResolver_ts["recipeResolver.ts"]
  f_engins_contentengin_recipes_recipeTypes_ts["recipeTypes.ts"]
  f_engins_contentengin_recipes_seededRandom_ts["seededRandom.ts"]
  f_engins_contentengin_rigging_fitArmature_ts["fitArmature.ts"]
  f_engins_contentengin_rigging_index_ts["index.ts"]
  f_engins_contentengin_rigging_landmarks_ts["landmarks.ts"]
  f_engins_contentengin_rigging_rigTypes_ts["rigTypes.ts"]
  f_engins_contentengin_rigging_rigValidator_ts["rigValidator.ts"]
  f_engins_contentengin_runtimeProfile_ts["runtimeProfile.ts"]
  f_engins_contentengin_shaders_shaderRegistry_ts["shaderRegistry.ts"]
  f_engins_contentengin_shaders_shaderTypes_ts["shaderTypes.ts"]
  f_engins_contentengin_upgradeMatrix_ts["upgradeMatrix.ts"]
  f_engins_contentengin_useImplicitAssetWorkspace_ts["useImplicitAssetWorkspace.ts"]
  f_engins_dream_ForgeEngin_tsx["dream.ForgeEngin.tsx"]
  f_engins_dream_QuantumCircuitCanvas_tsx["dream.QuantumCircuitCanvas.tsx"]
  f_engins_engin_BrandingEngin_tsx["engin.BrandingEngin.tsx"]
  f_engins_engin_CodeEngin_tsx["engin.CodeEngin.tsx"]
  f_engins_engin_ContentEngin_tsx["engin.ContentEngin.tsx"]
  f_engins_engin_GameEngin_tsx["engin.GameEngin.tsx"]
  f_engins_engin_LabEngin_tsx["engin.LabEngin.tsx"]
  f_engins_engin_StarMakerEngin_tsx["engin.StarMakerEngin.tsx"]
  f_engins_forgeengin_componentInventory_ts["componentInventory.ts"]
  f_engins_forgeengin_enginpipe_artifact_manifest_ts["manifest.ts"]
  f_engins_forgeengin_enginpipe_index_ts["index.ts"]
  f_engins_forgeengin_enginpipe_quality_tiers_ts["tiers.ts"]
  f_engins_forgeengin_enginpipe_shell_ArtifactSlot_tsx["ArtifactSlot.tsx"]
  f_engins_forgeengin_enginpipe_telemetry_client_ts["client.ts"]
  f_engins_forgeengin_enginpipe_telemetry_events_ts["events.ts"]
  f_engins_forgeengin_forge_ngn_assembly_ts["assembly.ts"]
  f_engins_forgeengin_forge_ngn_index_ts["index.ts"]
  f_engins_forgeengin_forge_ngn_piece_registry_ts["piece-registry.ts"]
  f_engins_forgeengin_forge_engineForge_ts["engineForge.ts"]
  f_engins_forgeengin_forge_forgeBuild_ts["forgeBuild.ts"]
  f_engins_forgeengin_forge_forgeIntelligence_ts["forgeIntelligence.ts"]
  f_engins_forgeengin_forge_forgeMomentum_ts["forgeMomentum.ts"]
  f_engins_forgeengin_forge_forgeNexus_ts["forgeNexus.ts"]
  f_engins_forgeengin_forge_forgeRegistry_ts["forgeRegistry.ts"]
  f_engins_forgeengin_forge_forgeRituals_ts["forgeRituals.ts"]
  f_engins_forgeengin_forge_useForgeActivity_ts["useForgeActivity.ts"]
  f_engins_forgeengin_forge_useForgeBuild_ts["useForgeBuild.ts"]
  f_engins_gameengin_accessibility_ai_ts["accessibility-ai.ts"]
  f_engins_gameengin_ai_director_ts["ai-director.ts"]
  f_engins_gameengin_ai_npcs_ts["ai-npcs.ts"]
  f_engins_gameengin_assets_BundleCache_ts["BundleCache.ts"]
  f_engins_gameengin_assets_BundleManifest_ts["BundleManifest.ts"]
  f_engins_gameengin_backendNegotiator_ts["backendNegotiator.ts"]
  f_engins_gameengin_brain_reader_ts["brain-reader.ts"]
  f_engins_gameengin_cartridge_manifest_ts["cartridge-manifest.ts"]
  f_engins_gameengin_cartridge_ts["cartridge.ts"]
  f_engins_gameengin_cartridgeLoader_ts["cartridgeLoader.ts"]
  f_engins_gameengin_cartridges_achievementEngine_ts["achievementEngine.ts"]
  f_engins_gameengin_cartridges_apiStubs_ts["apiStubs.ts"]
  f_engins_gameengin_cartridges_index_ts["index.ts"]
  f_engins_gameengin_cartridges_loaders_ts["loaders.ts"]
  f_engins_gameengin_cartridges_manifest_ts["manifest.ts"]
  f_engins_gameengin_cartridges_reactCartridge_ts["reactCartridge.ts"]
  f_engins_gameengin_cartridges_saveState_ts["saveState.ts"]
  f_engins_gameengin_cloud_compute_ts["cloud-compute.ts"]
  f_engins_gameengin_config_demoGameConfig_ts["demoGameConfig.ts"]
  f_engins_gameengin_controls_control_mappings_ts["control-mappings.ts"]
  f_engins_gameengin_core_ts["core.ts"]
  f_engins_gameengin_dream_engine_ts["dream-engine.ts"]
  f_engins_gameengin_dreamr_loader_ts["dreamr-loader.ts"]
  f_engins_gameengin_executionWiring_ts["executionWiring.ts"]
  f_engins_gameengin_GameEnginCore_ts["GameEnginCore.ts"]
  f_engins_gameengin_gameEnginRuntime_ts["gameEnginRuntime.ts"]
  f_engins_gameengin_GameRuntime_tsx["GameRuntime.tsx"]
  f_engins_gameengin_games_avatar_ts["avatar.ts"]
  f_engins_gameengin_games_catalog_ts["catalog.ts"]
  f_engins_gameengin_games_DualSenseManager_ts["DualSenseManager.ts"]
  f_engins_gameengin_games_gameControllerButtons_ts["gameControllerButtons.ts"]
  f_engins_gameengin_games_gameControllerLeft_ts["gameControllerLeft.ts"]
  f_engins_gameengin_games_gameControllerRight_ts["gameControllerRight.ts"]
  f_engins_gameengin_games_hooks_ts["hooks.ts"]
  f_engins_gameengin_games_library_state_ts["library-state.ts"]
  f_engins_gameengin_games_lucid_avenue_world_ts["lucid-avenue-world.ts"]
  f_engins_gameengin_games_madmaxi_wildfall_world_ts["madmaxi-wildfall-world.ts"]
  f_engins_gameengin_games_mobileControls_ts["mobileControls.ts"]
  f_engins_gameengin_games_navigation_ts["navigation.ts"]
  f_engins_gameengin_games_performance_baseline_ts["performance-baseline.ts"]
  f_engins_gameengin_games_quality_plan_ts["quality-plan.ts"]
  f_engins_gameengin_games_useAIDirector_ts["useAIDirector.ts"]
  f_engins_gameengin_games_useGameInputKeyboardBridge_ts["useGameInputKeyboardBridge.ts"]
  f_engins_gameengin_games_useGamepad_ts["useGamepad.ts"]
  f_engins_gameengin_games_useImmersiveGameLayout_ts["useImmersiveGameLayout.ts"]
  f_engins_gameengin_games_useRemoteChannel_ts["useRemoteChannel.ts"]
  f_engins_gameengin_generative_audio_ts["generative-audio.ts"]
  f_engins_gameengin_handlers_ts["handlers.ts"]
  f_engins_gameengin_index_ts["index.ts"]
  f_engins_gameengin_input_index_ts["index.ts"]
  f_engins_gameengin_input_InputRouter_ts["InputRouter.ts"]
  f_engins_gameengin_launcher_ts["launcher.ts"]
  f_engins_gameengin_neural_render_ts["neural-render.ts"]
  f_engins_gameengin_path_tracing_ts["path-tracing.ts"]
  f_engins_gameengin_platform_ts["platform.ts"]
  f_engins_gameengin_post_fx_ts["post-fx.ts"]
  f_engins_gameengin_power_systems_ts["power-systems.ts"]
  f_engins_gameengin_predictive_stream_ts["predictive-stream.ts"]
  f_engins_gameengin_procgen_ts["procgen.ts"]
  f_engins_gameengin_registerCartridges_ts["registerCartridges.ts"]
  f_engins_gameengin_remote_comboMachine_ts["comboMachine.ts"]
  f_engins_gameengin_remote_index_ts["index.ts"]
  f_engins_gameengin_remote_layout_ts["layout.ts"]
  f_engins_gameengin_remote_moves_ts["moves.ts"]
  f_engins_gameengin_remote_sprintDetector_ts["sprintDetector.ts"]
  f_engins_gameengin_render_ShaderRegistry_ts["ShaderRegistry.ts"]
  f_engins_gameengin_runtime_FrameBudget_ts["FrameBudget.ts"]
  f_engins_gameengin_runtime_FrameClock_ts["FrameClock.ts"]
  f_engins_gameengin_runtime_index_ts["index.ts"]
  f_engins_gameengin_runtime_RuntimeQuality_ts["RuntimeQuality.ts"]
  f_engins_gameengin_systems_ai_ts["ai.ts"]
  f_engins_gameengin_systems_animation_ts["animation.ts"]
  f_engins_gameengin_systems_assets_ts["assets.ts"]
  f_engins_gameengin_systems_index_ts["index.ts"]
  f_engins_gameengin_systems_lod_ts["lod.ts"]
  f_engins_gameengin_systems_network_ts["network.ts"]
  f_engins_gameengin_systems_physics_ts["physics.ts"]
  f_engins_gameengin_systems_pooling_ts["pooling.ts"]
  f_engins_gameengin_systems_rendering_ts["rendering.ts"]
  f_engins_gameengin_systems_spatial_ts["spatial.ts"]
  f_engins_gameengin_systems_world_ts["world.ts"]
  f_engins_gameengin_unifiedLoop_ts["unifiedLoop.ts"]
  f_engins_gameengin_useUnifiedLoop_ts["useUnifiedLoop.ts"]
  f_engins_gameengin_webgpu_runtime_shell_ts["webgpu-runtime-shell.ts"]
  f_engins_gameengin_world_crdt_ts["world-crdt.ts"]
  f_engins_gameengin_xr_ts["xr.ts"]
  f_engins_isosurfaceAssetPipeline_ts["isosurfaceAssetPipeline.ts"]
  f_engins_isosurfaceDualContouring_ts["isosurfaceDualContouring.ts"]
  f_engins_labengin_implicitSurface_ts["implicitSurface.ts"]
  f_engins_portfolio_dream_PortfolioEngin_tsx["dream.PortfolioEngin.tsx"]
  f_engins_renderengin_advancedRendering_ts["advancedRendering.ts"]
  f_engins_renderengin_animation_ts["animation.ts"]
  f_engins_renderengin_assets_ts["assets.ts"]
  f_engins_renderengin_benchmarkProof_ts["benchmarkProof.ts"]
  f_engins_renderengin_completionEvidence_ts["completionEvidence.ts"]
  f_engins_renderengin_core_ts["core.ts"]
  f_engins_renderengin_diagnostics_ts["diagnostics.ts"]
  f_engins_renderengin_index_ts["index.ts"]
  f_engins_renderengin_lighting_ts["lighting.ts"]
  f_engins_renderengin_liveBenchmark_ts["liveBenchmark.ts"]
  f_engins_renderengin_materials_ts["materials.ts"]
  f_engins_renderengin_performanceIntegrity_ts["performanceIntegrity.ts"]
  f_engins_renderengin_postProcessing_ts["postProcessing.ts"]
  f_engins_renderengin_RenderEnginInlineSurface_tsx["RenderEnginInlineSurface.tsx"]
  f_engins_renderengin_RenderEnginViewport_tsx["RenderEnginViewport.tsx"]
  f_engins_renderengin_renderSettings_ts["renderSettings.ts"]
  f_engins_renderengin_RenderStage_tsx["RenderStage.tsx"]
  f_engins_renderengin_runtimeRegistration_ts["runtimeRegistration.ts"]
  f_engins_renderengin_scene_ts["scene.ts"]
  f_engins_renderengin_security_ts["security.ts"]
  f_engins_renderengin_serviceIntegration_ts["serviceIntegration.ts"]
  f_engins_renderengin_serviceRuntime_ts["serviceRuntime.ts"]
  f_engins_renderengin_textures_ts["textures.ts"]
  f_engins_renderengin_viewportControls_ts["viewportControls.ts"]
  f_engins_renderengin_virtualization_ts["virtualization.ts"]
  f_engins_renderengin_wasmAcceleration_ts["wasmAcceleration.ts"]
  f_engins_renderengin_webgpu_ts["webgpu.ts"]
  f_engins_rulesets_brand_brandEnginRuleSet_ts["brandEnginRuleSet.ts"]
  f_engins_rulesets_brand_useBrandEnginRuntime_ts["useBrandEnginRuntime.ts"]
  f_engins_rulesets_code_codeEnginRuleSet_ts["codeEnginRuleSet.ts"]
  f_engins_rulesets_code_index_ts["index.ts"]
  f_engins_rulesets_code_useCodeEnginRuntime_ts["useCodeEnginRuntime.ts"]
  f_engins_rulesets_content_contentEnginRuleSet_ts["contentEnginRuleSet.ts"]
  f_engins_rulesets_content_useContentEnginRuntime_ts["useContentEnginRuntime.ts"]
  f_engins_rulesets_dreams_index_ts["index.ts"]
  f_engins_rulesets_forge_index_ts["index.ts"]
  f_engins_rulesets_game_declarative_ts["declarative.ts"]
  f_engins_rulesets_game_gameEnginRuleSet_ts["gameEnginRuleSet.ts"]
  f_engins_rulesets_game_index_ts["index.ts"]
  f_engins_rulesets_game_useGameEnginRuntime_ts["useGameEnginRuntime.ts"]
  f_engins_rulesets_homedream_dream_homedream_constants_ts["dream.homedream.constants.ts"]
  f_engins_rulesets_homedream_dream_homedream_physics_ts["dream.homedream.physics.ts"]
  f_engins_rulesets_homedream_dream_homedream_transforms_ts["dream.homedream.transforms.ts"]
  f_engins_rulesets_homedream_index_ts["index.ts"]
  f_engins_rulesets_lab_index_ts["index.ts"]
  f_engins_rulesets_lab_labEnginRuleSet_ts["labEnginRuleSet.ts"]
  f_engins_rulesets_lab_useLabEnginRuntime_ts["useLabEnginRuntime.ts"]
  f_engins_rulesets_music_index_ts["index.ts"]
  f_engins_rulesets_music_starMakerEnginRuleSet_ts["starMakerEnginRuleSet.ts"]
  f_engins_rulesets_music_useStarMakerEnginRuntime_ts["useStarMakerEnginRuntime.ts"]
  f_engins_rulesets_useEnginWorkflow_ts["useEnginWorkflow.ts"]
  f_engins_rulesets_workflowEngine_ts["workflowEngine.ts"]
  f_engins_starmakerengin_audio_fingerprint_fingerprint_ts["fingerprint.ts"]
  f_engins_starmakerengin_audio_fingerprint_index_ts["index.ts"]
  f_engins_starmakerengin_audio_fingerprint_peak_map_ts["peak-map.ts"]
  f_engins_starmakerengin_audio_fingerprint_stem_extractor_ts["stem-extractor.ts"]
  f_engins_starmakerengin_audioFingerprint_ts["audioFingerprint.ts"]
  f_engins_starmakerengin_music_presets_ts["presets.ts"]
  f_engins_starmakerengin_music_starmaker_ts["starmaker.ts"]
  f_engins_starmakerengin_music_starmakerArrangement_ts["starmakerArrangement.ts"]
  f_engins_starmakerengin_music_starmakerDaw_ts["starmakerDaw.ts"]
  f_engins_starmakerengin_music_wasmAudioBridge_ts["wasmAudioBridge.ts"]
  f_src_engin_generated_homedream_ts["homedream.ts"]
  f_app_homedream_page_tsx["page.tsx"]
  f_src_engin_generated_hooks_ts["hooks.ts"]
  f_hooks_use_spatial_ts["use-spatial.ts"]
  f_hooks_useAccount_ts["useAccount.ts"]
  f_hooks_useAppIntentPressureSurface_ts["useAppIntentPressureSurface.ts"]
  f_hooks_useConnectorInstallFlow_ts["useConnectorInstallFlow.ts"]
  f_hooks_useDreamLayout_ts["useDreamLayout.ts"]
  f_hooks_useHideOnScroll_ts["useHideOnScroll.ts"]
  f_hooks_useMotionTilt_ts["useMotionTilt.ts"]
  f_hooks_useResponsive_ts["useResponsive.ts"]
  f_hooks_useSharedDream_ts["useSharedDream.ts"]
  f_hooks_useTap_ts["useTap.ts"]
  f_hooks_useTapHoldMove_ts["useTapHoldMove.ts"]
  f_hooks_useTick_ts["useTick.ts"]
  f_hooks_useViewCounter_ts["useViewCounter.ts"]
  f_src_engin_generated_index_ts["index.ts"]
  f_src_engin_generated_rulesets_ts["rulesets.ts"]
  f_src_engin_generated_surfaces_ts["surfaces.ts"]
  f_src_engin_generated_connectors_ts["connectors.ts"]
  f_src_engin_generated_brain_ts["brain.ts"]
  f_src_engin_generated_personas_ts["personas.ts"]
  f_src_engin_generated_systems_ts["systems.ts"]
  f_src_engin_generated_osArchitectureMap_ts["osArchitectureMap.ts"]
  f_app__internal__idari_console_page_tsx["page.tsx"]
  f_app__internal__idari_console_platform_errors_page_tsx["page.tsx"]
  f_app__internal__idari_console_platform_health_page_tsx["page.tsx"]
  f_app_about_page_tsx["page.tsx"]
  f_app_actions_dream_docs_ts["dream-docs.ts"]
  f_app_ads_create_page_tsx["page.tsx"]
  f_app_ads_page_tsx["page.tsx"]
  f_app_ads_slot__id__page_tsx["page.tsx"]
  f_app_api_account_delete_data_route_ts["route.ts"]
  f_app_api_account_delete_dream_route_ts["route.ts"]
  f_app_api_account_export_data_route_ts["route.ts"]
  f_app_api_activity_track_route_ts["route.ts"]
  f_app_api_admin_ai_chat_route_ts["route.ts"]
  f_app_api_admin_ai_request_route_ts["route.ts"]
  f_app_api_admin_child_safety_route_ts["route.ts"]
  f_app_api_admin_code_files_route_ts["route.ts"]
  f_app_api_admin_observability_route_ts["route.ts"]
  f_app_api_ads_orders_route_ts["route.ts"]
  f_app_api_ads_view_route_ts["route.ts"]
  f_app_api_agent_session_route_ts["route.ts"]
  f_app_api_ai_boogieman_child_safety_route_ts["route.ts"]
  f_app_api_ai_boogieman_privacy_event_route_ts["route.ts"]
  f_app_api_ai_boogieman_route_ts["route.ts"]
  f_app_api_ai_boogieman_status_route_ts["route.ts"]
  f_app_api_ai_eams_route_ts["route.ts"]
  f_app_api_ai_execute_route_ts["route.ts"]
  f_app_api_ai_idari_route_ts["route.ts"]
  f_app_api_appeal_route_ts["route.ts"]
  f_app_api_auth_logout_route_ts["route.ts"]
  f_app_api_auth_providers_route_ts["route.ts"]
  f_app_api_blocks_route_ts["route.ts"]
  f_app_api_ci_run_route_ts["route.ts"]
  f_app_api_close_friends_route_ts["route.ts"]
  f_app_api_codeengin_diagnostics_route_ts["route.ts"]
  f_app_api_codeengin_file_route_ts["route.ts"]
  f_app_api_codeengin_git_route_ts["route.ts"]
  f_app_api_codeengin_run_route_ts["route.ts"]
  f_app_api_codeengin_search_route_ts["route.ts"]
  f_app_api_codeengin_upload_route_ts["route.ts"]
  f_app_api_codeengin_workspace_route_ts["route.ts"]
  f_app_api_comments_route_ts["route.ts"]
  f_app_api_connectors__provider__connect_route_ts["route.ts"]
  f_app_api_connectors__provider__disconnect_route_ts["route.ts"]
  f_app_api_connectors__provider__items_route_ts["route.ts"]
  f_app_api_connectors__provider__sync_route_ts["route.ts"]
  f_app_api_connectors__provider__verify_route_ts["route.ts"]
  f_app_api_connectors_cron_route_ts["route.ts"]
  f_app_api_connectors_instagram_oauth_callback_route_ts["route.ts"]
  f_app_api_connectors_instagram_oauth_start_route_ts["route.ts"]
  f_app_api_connectors_status_route_ts["route.ts"]
  f_app_api_connectors_webhooks__provider__route_ts["route.ts"]
  f_app_api_connectors_youtube_oauth_callback_route_ts["route.ts"]
  f_app_api_connectors_youtube_oauth_start_route_ts["route.ts"]
  f_app_api_content_generative_fill_route_ts["route.ts"]
  f_app_api_content_intelligence_route_ts["route.ts"]
  f_app_api_content_transcribe_route_ts["route.ts"]
  f_app_api_content_voice_clone_route_ts["route.ts"]
  f_app_api_contentengin_assets__assetId__export_gameengin_route_ts["route.ts"]
  f_app_api_contentengin_assets__assetId__route_ts["route.ts"]
  f_app_api_contentengin_jobs__jobId__route_ts["route.ts"]
  f_app_api_contentengin_jobs_route_ts["route.ts"]
  f_app_api_contentengin_upload_route_ts["route.ts"]
  f_app_api_dr_eams_hf_route_ts["route.ts"]
  f_app_api_dr_eams_run_route_ts["route.ts"]
  f_app_api_drafts__id__route_ts["route.ts"]
  f_app_api_drafts_route_ts["route.ts"]
  f_app_api_dream_windows__id__route_ts["route.ts"]
  f_app_api_dream_windows_route_ts["route.ts"]
  f_app_api_dreamengin_os_status_route_ts["route.ts"]
  f_app_api_dreamr_feed_route_ts["route.ts"]
  f_app_api_dreamr_suggested_route_ts["route.ts"]
  f_app_api_dreamr_tally_route_ts["route.ts"]
  f_app_api_dreams_feed_route_ts["route.ts"]
  f_app_api_dreams_instances_route_ts["route.ts"]
  f_app_api_dreams_transfer_route_ts["route.ts"]
  f_app_api_embed_feed_route_ts["route.ts"]
  f_app_api_favorites_route_ts["route.ts"]
  f_app_api_feed_route_ts["route.ts"]
  f_app_api_follow_route_ts["route.ts"]
  f_app_api_gal_route_ts["route.ts"]
  f_app_api_game_scores_route_ts["route.ts"]
  f_app_api_gameengin_crash_report_route_ts["route.ts"]
  f_app_api_health_route_ts["route.ts"]
  f_app_api_home_layout_route_ts["route.ts"]
  f_app_api_journey_route_ts["route.ts"]
  f_app_api_lab_benchmarks_route_ts["route.ts"]
  f_app_api_ledger_media_route_ts["route.ts"]
  f_app_api_likes_route_ts["route.ts"]
  f_app_api_marketplace_request_route_ts["route.ts"]
  f_app_api_marketplace_route_ts["route.ts"]
  f_app_api_messages_boards_route_ts["route.ts"]
  f_app_api_messages_route_ts["route.ts"]
  f_app_api_metrics_platform_route_ts["route.ts"]
  f_app_api_metrics_route_ts["route.ts"]
  f_app_api_metrics_user__userId__route_ts["route.ts"]
  f_app_api_music_route_ts["route.ts"]
  f_app_api_notifications_route_ts["route.ts"]
  f_app_api_platform_errors_route_ts["route.ts"]
  f_app_api_posts__id__route_ts["route.ts"]
  f_app_api_posts__id__save_route_ts["route.ts"]
  f_app_api_posts__id__view_route_ts["route.ts"]
  f_app_api_posts_profile__userId__route_ts["route.ts"]
  f_app_api_posts_route_ts["route.ts"]
  f_app_api_profile_route_ts["route.ts"]
  f_app_api_projects_route_ts["route.ts"]
  f_app_api_scheduled_posts_route_ts["route.ts"]
  f_app_api_security_scan_route_ts["route.ts"]
  f_app_api_settings_appearance_route_ts["route.ts"]
  f_app_api_settings_feed_route_ts["route.ts"]
  f_app_api_settings_notifications_route_ts["route.ts"]
  f_app_api_settings_privacy_route_ts["route.ts"]
  f_app_api_setup_check_route_ts["route.ts"]
  f_app_api_setup_google_oauth_route_ts["route.ts"]
  f_app_api_shared_dream_sessions__id__route_ts["route.ts"]
  f_app_api_shared_dream_sessions_route_ts["route.ts"]
  f_app_api_shellhub_devices_route_ts["route.ts"]
  f_app_api_shop_route_ts["route.ts"]
  f_app_api_skip_credits_balance_route_ts["route.ts"]
  f_app_api_skip_credits_earn_route_ts["route.ts"]
  f_app_api_skip_credits_use_route_ts["route.ts"]
  f_app_api_social_ipfs_route_ts["route.ts"]
  f_app_api_social_livekit_room_route_ts["route.ts"]
  f_app_api_social_livekit_token_route_ts["route.ts"]
  f_app_api_social_rss_feed_route_ts["route.ts"]
  f_app_api_upload_route_ts["route.ts"]
  f_app_api_user_layout_route_ts["route.ts"]
  f_app_api_views_track_route_ts["route.ts"]
  f_app_api_widgets_feed_route_ts["route.ts"]
  f_app_api_widgets_instances_route_ts["route.ts"]
  f_app_api_youtube_channel_route_ts["route.ts"]
  f_app_api_youtube_discovery_route_ts["route.ts"]
  f_app_api_youtube_live_feed_route_ts["route.ts"]
  f_app_auth_callback_route_ts["route.ts"]
  f_app_auth_reset_password_page_tsx["page.tsx"]
  f_app_auth_update_password_page_tsx["page.tsx"]
  f_app_connectors_dream_ConnectorsClient_tsx["dream.ConnectorsClient.tsx"]
  f_app_connectors_page_tsx["page.tsx"]
  f_app_daydream_brand_engin_page_tsx["page.tsx"]
  f_app_daydream_brand_page_tsx["page.tsx"]
  f_app_daydream_code_engin_page_tsx["page.tsx"]
  f_app_daydream_code_page_tsx["page.tsx"]
  f_app_daydream_constellation_dream_ConstellationClient_tsx["dream.ConstellationClient.tsx"]
  f_app_daydream_constellation_page_tsx["page.tsx"]
  f_app_daydream_create_engin_page_tsx["page.tsx"]
  f_app_daydream_create_page_tsx["page.tsx"]
  f_app_daydream_forge_page_tsx["page.tsx"]
  f_app_daydream_game_dream_GamePageClient_tsx["dream.GamePageClient.tsx"]
  f_app_daydream_game_dream_shell_ImmersiveGameShell_tsx["dream.shell.ImmersiveGameShell.tsx"]
  f_app_daydream_game_page_tsx["page.tsx"]
  f_app_daydream_games_engin_page_tsx["page.tsx"]
  f_app_daydream_games_page_tsx["page.tsx"]
  f_app_daydream_lab_engin_page_tsx["page.tsx"]
  f_app_daydream_lab_page_tsx["page.tsx"]
  f_app_daydream_lab_portfolio_page_tsx["page.tsx"]
  f_app_daydream_media_vault_page_tsx["page.tsx"]
  f_app_daydream_music_engin_page_tsx["page.tsx"]
  f_app_daydream_music_page_tsx["page.tsx"]
  f_app_daydream_music_upload_page_tsx["page.tsx"]
  f_app_daydream_play_page_tsx["page.tsx"]
  f_app_daydream_render_page_tsx["page.tsx"]
  f_app_discover_page_tsx["page.tsx"]
  f_app_dream_effects_page_tsx["page.tsx"]
  f_app_dreamdmbar__components_DreamBarDataBridge_tsx["DreamBarDataBridge.tsx"]
  f_app_dreamdmbar__components_dreamr_algorithms_botDetector_ts["botDetector.ts"]
  f_app_dreamdmbar__components_dreamr_algorithms_dreamrAlgorithm_ts["dreamrAlgorithm.ts"]
  f_app_dreamdmbar__components_dreamr_api_feedHandler_ts["feedHandler.ts"]
  f_app_dreamdmbar__components_dreamr_api_route_ts["route.ts"]
  f_app_dreamdmbar__components_dreamr_dream_DreamRCore_tsx["dream.DreamRCore.tsx"]
  f_app_dreamdmbar__components_dreamr_dream_DreamRFeed_tsx["dream.DreamRFeed.tsx"]
  f_app_dreamdmbar__components_dreamr_dreamsurface_dreamr_tsx["dreamsurface.dreamr.tsx"]
  f_app_dreamdmbar__components_DreamSpaceRegion_tsx["DreamSpaceRegion.tsx"]
  f_app_dreamdmbar__components_DreamWidgetGrid_tsx["DreamWidgetGrid.tsx"]
  f_app_dreamdmbar__components_HomeDreamRegion_tsx["HomeDreamRegion.tsx"]
  f_app_dreamdmbar_dreamspace_page_tsx["page.tsx"]
  f_app_dreamdmbar_dualruntime_page_tsx["page.tsx"]
  f_app_dreamdmbar_homedream_page_tsx["page.tsx"]
  f_app_dreamdmbar_layout_tsx["layout.tsx"]
  f_app_dreamdmbar_page_tsx["page.tsx"]
  f_app_dreamspace_page_tsx["page.tsx"]
  f_app_edit_profiledream_page_tsx["page.tsx"]
  f_app_engines_brand_campaigns_page_tsx["page.tsx"]
  f_app_engines_brand_identity_page_tsx["page.tsx"]
  f_app_engines_brand_layout_tsx["layout.tsx"]
  f_app_engines_brand_page_tsx["page.tsx"]
  f_app_engines_code_ai_page_tsx["page.tsx"]
  f_app_engines_code_layout_tsx["layout.tsx"]
  f_app_engines_code_notebook_page_tsx["page.tsx"]
  f_app_engines_code_page_tsx["page.tsx"]
  f_app_engines_code_projects_page_tsx["page.tsx"]
  f_app_engines_create_calendar_page_tsx["page.tsx"]
  f_app_engines_create_editor_page_tsx["page.tsx"]
  f_app_engines_create_layout_tsx["layout.tsx"]
  f_app_engines_create_page_tsx["page.tsx"]
  f_app_engines_create_queue_page_tsx["page.tsx"]
  f_app_engines_games_builder_page_tsx["page.tsx"]
  f_app_engines_games_layout_tsx["layout.tsx"]
  f_app_engines_games_library_page_tsx["page.tsx"]
  f_app_engines_games_page_tsx["page.tsx"]
  f_app_engines_games_scores_page_tsx["page.tsx"]
  f_app_engines_lab_data_page_tsx["page.tsx"]
  f_app_engines_lab_experiments_page_tsx["page.tsx"]
  f_app_engines_lab_layout_tsx["layout.tsx"]
  f_app_engines_lab_page_tsx["page.tsx"]
  f_app_engines_lab_quantum_page_tsx["page.tsx"]
  f_app_engines_layout_tsx["layout.tsx"]
  f_app_engines_music_arrange_page_tsx["page.tsx"]
  f_app_engines_music_layout_tsx["layout.tsx"]
  f_app_engines_music_library_page_tsx["page.tsx"]
  f_app_engines_music_page_tsx["page.tsx"]
  f_app_engines_music_studio_page_tsx["page.tsx"]
  f_app_engines_page_tsx["page.tsx"]
  f_app_engines_portfolio_assets_page_tsx["page.tsx"]
  f_app_engines_portfolio_layout_tsx["layout.tsx"]
  f_app_engines_portfolio_optimize_page_tsx["page.tsx"]
  f_app_engines_portfolio_page_tsx["page.tsx"]
  f_app_engines_portfolio_quantum_page_tsx["page.tsx"]
  f_app_engines_render_page_tsx["page.tsx"]
  f_app_feed_settings_dream_FeedSettingsClient_tsx["dream.FeedSettingsClient.tsx"]
  f_app_feed_settings_page_tsx["page.tsx"]
  f_app_gameengin_cartridges__id__page_tsx["page.tsx"]
  f_app_gameengin_cartridges_page_tsx["page.tsx"]
  f_app_gameengin_page_tsx["page.tsx"]
  f_app_join_page_tsx["page.tsx"]
  f_app_lab__id__codespace_page_tsx["page.tsx"]
  f_app_lab__id__page_tsx["page.tsx"]
  f_app_lab_new_page_tsx["page.tsx"]
  f_app_lab_page_tsx["page.tsx"]
  f_app_layout_tsx["layout.tsx"]
  f_app_login_page_tsx["page.tsx"]
  f_app_marketplace__id__page_tsx["page.tsx"]
  f_app_marketplace_page_tsx["page.tsx"]
  f_app_marketplace_sell_page_tsx["page.tsx"]
  f_app_messages_boards__id__page_tsx["page.tsx"]
  f_app_messages_boards_new_page_tsx["page.tsx"]
  f_app_messages_boards_page_tsx["page.tsx"]
  f_app_messages_new_page_tsx["page.tsx"]
  f_app_messages_page_tsx["page.tsx"]
  f_app_mission_page_tsx["page.tsx"]
  f_app_notes_page_tsx["page.tsx"]
  f_app_onboarding_page_tsx["page.tsx"]
  f_app_page_tsx["page.tsx"]
  f_app_policy_page_tsx["page.tsx"]
  f_app_profile__handle__page_tsx["page.tsx"]
  f_app_profile_page_tsx["page.tsx"]
  f_app_settings_account_dream_DangerZoneActions_tsx["dream.DangerZoneActions.tsx"]
  f_app_settings_account_page_tsx["page.tsx"]
  f_app_settings_algorithm_page_tsx["page.tsx"]
  f_app_settings_appearance_page_tsx["page.tsx"]
  f_app_settings_controls_dream_ControlsClient_tsx["dream.ControlsClient.tsx"]
  f_app_settings_controls_dream_PositionIndicatorToggle_tsx["dream.PositionIndicatorToggle.tsx"]
  f_app_settings_controls_page_tsx["page.tsx"]
  f_app_settings_data_dream_DataClient_tsx["dream.DataClient.tsx"]
  f_app_settings_data_page_tsx["page.tsx"]
  f_app_settings_dreams_dreams_layout_editor_tsx["dreams-layout-editor.tsx"]
  f_app_settings_dreams_page_tsx["page.tsx"]
  f_app_settings_feed_page_tsx["page.tsx"]
  f_app_settings_help_page_tsx["page.tsx"]
  f_app_settings_notifications_page_tsx["page.tsx"]
  f_app_settings_page_tsx["page.tsx"]
  f_app_settings_privacy_dream_PrivacyClient_tsx["dream.PrivacyClient.tsx"]
  f_app_settings_privacy_page_tsx["page.tsx"]
  f_app_settings_safety_page_tsx["page.tsx"]
  f_app_settings_security_page_tsx["page.tsx"]
  f_app_settings_widgets_page_tsx["page.tsx"]
  f_app_shop_page_tsx["page.tsx"]
  f_app_shop_sell_page_tsx["page.tsx"]
  f_app_u__handle__page_tsx["page.tsx"]
  f_app_view_profile_page_tsx["page.tsx"]
  f_app_webgpu_page_tsx["page.tsx"]
  f_components_activity_dream_ActivityPostForm_tsx["dream.ActivityPostForm.tsx"]
  f_components_activity_dream_ActivityProfile_tsx["dream.ActivityProfile.tsx"]
  f_components_activity_dream_TierBadge_tsx["dream.TierBadge.tsx"]
  f_components_ads_dream_AdUnit_tsx["dream.AdUnit.tsx"]
  f_components_ads_dream_SkipCreditBalance_tsx["dream.SkipCreditBalance.tsx"]
  f_components_auth_dream_PasswordField_tsx["dream.PasswordField.tsx"]
  f_components_branding_dream_DreamEnginLogo_tsx["dream.DreamEnginLogo.tsx"]
  f_components_branding_dream_LogoHero_tsx["dream.LogoHero.tsx"]
  f_components_branding_dream_Nav_tsx["dream.Nav.tsx"]
  f_components_connectors_dream_AddSliceSheet_tsx["dream.AddSliceSheet.tsx"]
  f_components_connectors_dream_ConnectDreamPrompt_tsx["dream.ConnectDreamPrompt.tsx"]
  f_components_connectors_dream_ConnectorRow_tsx["dream.ConnectorRow.tsx"]
  f_components_connectors_dream_NoSlotDialog_tsx["dream.NoSlotDialog.tsx"]
  f_components_connectors_dream_PlacementMode_tsx["dream.PlacementMode.tsx"]
  f_components_connectors_dream_widget_ConnectorWidgetPicker_tsx["dream.widget.ConnectorWidgetPicker.tsx"]
  f_components_connectors_dream_widget_ConnectWidgetPrompt_tsx["dream.widget.ConnectWidgetPrompt.tsx"]
  f_components_contentengin_AnimationPanel_tsx["AnimationPanel.tsx"]
  f_components_contentengin_AssetPreview3D_tsx["AssetPreview3D.tsx"]
  f_components_contentengin_ContentEnginStudio_tsx["ContentEnginStudio.tsx"]
  f_components_contentengin_ExportPanel_tsx["ExportPanel.tsx"]
  f_components_contentengin_MaterialEditor_tsx["MaterialEditor.tsx"]
  f_components_contentengin_PartTreeEditor_tsx["PartTreeEditor.tsx"]
  f_components_contentengin_PhotoReferencePanel_tsx["PhotoReferencePanel.tsx"]
  f_components_contentengin_RecipeEditor_tsx["RecipeEditor.tsx"]
  f_components_contentengin_RiggingPanel_tsx["RiggingPanel.tsx"]
  f_components_core_dream_CoreDream_tsx["dream.CoreDream.tsx"]
  f_components_customize_dream_bar_CustomizeModeBar_tsx["dream.bar.CustomizeModeBar.tsx"]
  f_components_customize_dream_bar_CustomizeToolbar_tsx["dream.bar.CustomizeToolbar.tsx"]
  f_components_customize_dream_GlobalCustomizeUI_tsx["dream.GlobalCustomizeUI.tsx"]
  f_components_customize_panels_dream_panel_ColorPanel_tsx["dream.panel.ColorPanel.tsx"]
  f_components_customize_panels_dream_panel_EffectsPanel_tsx["dream.panel.EffectsPanel.tsx"]
  f_components_customize_panels_dream_panel_FontPanel_tsx["dream.panel.FontPanel.tsx"]
  f_components_customize_panels_dream_panel_LayoutPanel_tsx["dream.panel.LayoutPanel.tsx"]
  f_components_daydream_dream_CodeDreamIDE_tsx["dream.CodeDreamIDE.tsx"]
  f_components_daydream_dream_constellationmap_tsx["dream.constellationmap.tsx"]
  f_components_daydream_dream_DiffViewer_tsx["dream.DiffViewer.tsx"]
  f_components_daydream_dream_JourneyTrail_tsx["dream.JourneyTrail.tsx"]
  f_components_daydream_dream_LabDreamIDE_tsx["dream.LabDreamIDE.tsx"]
  f_components_daydream_dream_NGNEngin_tsx["dream.NGNEngin.tsx"]
  f_components_daydream_dream_OpenDaydreamSideBButton_tsx["dream.OpenDaydreamSideBButton.tsx"]
  f_components_daydream_dream_shell_DaydreamShell_tsx["dream.shell.DaydreamShell.tsx"]
  f_components_daydream_dream_StandaloneEnginSurface_tsx["dream.StandaloneEnginSurface.tsx"]
  f_components_daydream_dreamsurface_daydream_BrandDaydream_tsx["dreamsurface.daydream.BrandDaydream.tsx"]
  f_components_daydream_starmaker_dream_panel_CompingPanel_tsx["dream.panel.CompingPanel.tsx"]
  f_components_daydream_starmaker_dream_panel_MultitrackArrangementPanel_tsx["dream.panel.MultitrackArrangementPanel.tsx"]
  f_components_daydream_starmaker_dream_panel_PianoRollPanel_tsx["dream.panel.PianoRollPanel.tsx"]
  f_components_daydream_starmaker_dream_panel_SessionViewPanel_tsx["dream.panel.SessionViewPanel.tsx"]
  f_components_draggable_dream_DraggableModule_tsx["dream.DraggableModule.tsx"]
  f_components_dream_AIAssistant_tsx["dream.AIAssistant.tsx"]
  f_components_dream_AudioVisualizer3D_tsx["dream.AudioVisualizer3D.tsx"]
  f_components_dream_BoogieWarningBanner_tsx["dream.BoogieWarningBanner.tsx"]
  f_components_dream_BrandLogo_tsx["dream.BrandLogo.tsx"]
  f_components_dream_CommandPalette_tsx["dream.CommandPalette.tsx"]
  f_components_dream_CommandPaletteMount_tsx["dream.CommandPaletteMount.tsx"]
  f_components_dream_CreatePostModal_tsx["dream.CreatePostModal.tsx"]
  f_components_dream_DragToAnchorClose_tsx["dream.DragToAnchorClose.tsx"]
  f_components_dream_DrEamsModeToggle_tsx["dream.DrEamsModeToggle.tsx"]
  f_components_dream_DrEamsVoiceAssistant_tsx["dream.DrEamsVoiceAssistant.tsx"]
  f_components_dream_FeedCard_tsx["dream.FeedCard.tsx"]
  f_components_dream_FirstTouchActivator_tsx["dream.FirstTouchActivator.tsx"]
  f_components_dream_ForgeDreamCanvas_tsx["dream.ForgeDreamCanvas.tsx"]
  f_components_dream_GlobalOverlays_tsx["dream.GlobalOverlays.tsx"]
  f_components_dream_HeroSprite_tsx["dream.HeroSprite.tsx"]
  f_components_dream_HomeFeed_tsx["dream.HomeFeed.tsx"]
  f_components_dream_IconSelector_tsx["dream.IconSelector.tsx"]
  f_components_dream_InnerDreamsButton_tsx["dream.InnerDreamsButton.tsx"]
  f_components_dream_KonamiDream_tsx["dream.KonamiDream.tsx"]
  f_components_dream_LandingHero_tsx["dream.LandingHero.tsx"]
  f_components_dream_LedgerChart_tsx["dream.LedgerChart.tsx"]
  f_components_dream_MessagesClient_tsx["dream.MessagesClient.tsx"]
  f_components_dream_NotificationCenter_tsx["dream.NotificationCenter.tsx"]
  f_components_dream_OSShellActivator_tsx["dream.OSShellActivator.tsx"]
  f_components_dream_panel_ChildSafetyPanel_tsx["dream.panel.ChildSafetyPanel.tsx"]
  f_components_dream_panel_IDariPanel_tsx["dream.panel.IDariPanel.tsx"]
  f_components_dream_PhysicsLab_tsx["dream.PhysicsLab.tsx"]
  f_components_dream_ProfileEditor_tsx["dream.ProfileEditor.tsx"]
  f_components_dream_ProfileShareButton_tsx["dream.ProfileShareButton.tsx"]
  f_components_dream_ProfileSpace_tsx["dream.ProfileSpace.tsx"]
  f_components_dream_PullToRefresh_tsx["dream.PullToRefresh.tsx"]
  f_components_dream_ShrunkMode_tsx["dream.ShrunkMode.tsx"]
  f_components_dream_SkeletonLoaders_tsx["dream.SkeletonLoaders.tsx"]
  f_components_dream_ThemeApplicator_tsx["dream.ThemeApplicator.tsx"]
  f_components_dream_ThemeToggle_tsx["dream.ThemeToggle.tsx"]
  f_components_dream_ToastSystem_tsx["dream.ToastSystem.tsx"]
  f_components_dream_universal_asset_registry_tsx["dream.universal_asset_registry.tsx"]
  f_components_dream_VoidThemeToggle_tsx["dream.VoidThemeToggle.tsx"]
  f_components_dream_widget_AnchorWidget_tsx["dream.widget.AnchorWidget.tsx"]
  f_components_dream_widget_ProfileWidgetBlock_tsx["dream.widget.ProfileWidgetBlock.tsx"]
  f_components_dream_widget_WidgetBubble_tsx["dream.widget.WidgetBubble.tsx"]
  f_components_dreamengin_dream_bar_DrEamsSearchBar_tsx["dream.bar.DrEamsSearchBar.tsx"]
  f_components_dreamengin_dream_CanvasDropZone_tsx["dream.CanvasDropZone.tsx"]
  f_components_dreamengin_dream_DREAMenginOS_tsx["dream.DREAMenginOS.tsx"]
  f_components_dreamengin_dream_DrEamsCanvas_tsx["dream.DrEamsCanvas.tsx"]
  f_components_dreamengin_dream_HomeControls_tsx["dream.HomeControls.tsx"]
  f_components_dreamengin_dream_menu_NexusMenu_tsx["dream.menu.NexusMenu.tsx"]
  f_components_dreamengin_dream_menu_OutdreamMenu_tsx["dream.menu.OutdreamMenu.tsx"]
  f_components_dreamengin_dream_overlay_ViewAllDreamsOverlay_tsx["dream.overlay.ViewAllDreamsOverlay.tsx"]
  f_components_dreamengin_dream_panel_CrossEnginStatusPanel_tsx["dream.panel.CrossEnginStatusPanel.tsx"]
  f_components_dreamengin_dream_panel_DrEamsPanel_tsx["dream.panel.DrEamsPanel.tsx"]
  f_components_dreamengin_dream_scene_BabylonGameScene_tsx["dream.scene.BabylonGameScene.tsx"]
  f_components_dreamengin_dream_scene_DrEamsScene_tsx["dream.scene.DrEamsScene.tsx"]
  f_components_dreamengin_dream_scene_PortfolioOptimizationScene_tsx["dream.scene.PortfolioOptimizationScene.tsx"]
  f_components_dreamengin_dream_shell_EnginShell_tsx["dream.shell.EnginShell.tsx"]
  f_components_dreamengin_dream_widget_AppearanceWidget_tsx["dream.widget.AppearanceWidget.tsx"]
  f_components_dreamengin_dreamsurface_dreamengin_tsx["dreamsurface.dreamengin.tsx"]
  f_components_dreamengin_engine_math_ts["math.ts"]
  f_components_dreamengin_engine_types_ts["types.ts"]
  f_components_dreamnav_dream_DreamNavControls_tsx["dream.DreamNavControls.tsx"]
  f_components_dreamnav_dreamsurface_dreamnav_tsx["dreamsurface.dreamnav.tsx"]
  f_components_engines_brand_dream_BrandEnginApp_tsx["dream.BrandEnginApp.tsx"]
  f_components_engines_brand_index_ts["index.ts"]
  f_components_engines_brand_panels_dream_panel_CampaignsPanel_tsx["dream.panel.CampaignsPanel.tsx"]
  f_components_engines_brand_panels_dream_panel_IdentityPanel_tsx["dream.panel.IdentityPanel.tsx"]
  f_components_engines_code_dream_CodeEnginApp_tsx["dream.CodeEnginApp.tsx"]
  f_components_engines_code_index_ts["index.ts"]
  f_components_engines_code_panels_dream_panel_AIPanel_tsx["dream.panel.AIPanel.tsx"]
  f_components_engines_code_panels_dream_panel_NotebookPanel_tsx["dream.panel.NotebookPanel.tsx"]
  f_components_engines_code_panels_dream_panel_ProjectsPanel_tsx["dream.panel.ProjectsPanel.tsx"]
  f_components_engines_create_dream_CreateEnginApp_tsx["dream.CreateEnginApp.tsx"]
  f_components_engines_create_index_ts["index.ts"]
  f_components_engines_create_panels_dream_panel_CalendarPanel_tsx["dream.panel.CalendarPanel.tsx"]
  f_components_engines_create_panels_dream_panel_EditorPanel_tsx["dream.panel.EditorPanel.tsx"]
  f_components_engines_create_panels_dream_panel_QueuePanel_tsx["dream.panel.QueuePanel.tsx"]
  f_components_engines_games_dream_GameEnginApp_tsx["dream.GameEnginApp.tsx"]
  f_components_engines_games_index_ts["index.ts"]
  f_components_engines_games_panels_dream_panel_BuilderPanel_tsx["dream.panel.BuilderPanel.tsx"]
  f_components_engines_games_panels_dream_panel_LibraryPanel_tsx["dream.panel.LibraryPanel.tsx"]
  f_components_engines_games_panels_dream_panel_ScoresPanel_tsx["dream.panel.ScoresPanel.tsx"]
  f_components_engines_index_ts["index.ts"]
  f_components_engines_lab_dream_LabEnginApp_tsx["dream.LabEnginApp.tsx"]
  f_components_engines_lab_index_ts["index.ts"]
  f_components_engines_lab_panels_dream_panel_DataVizPanel_tsx["dream.panel.DataVizPanel.tsx"]
  f_components_engines_lab_panels_dream_panel_ExperimentsPanel_tsx["dream.panel.ExperimentsPanel.tsx"]
  f_components_engines_lab_panels_dream_panel_QuantumPanel_tsx["dream.panel.QuantumPanel.tsx"]
  f_components_engines_music_dream_MusicEnginApp_tsx["dream.MusicEnginApp.tsx"]
  f_components_engines_music_index_ts["index.ts"]
  f_components_engines_music_panels_dream_panel_ArrangePanel_tsx["dream.panel.ArrangePanel.tsx"]
  f_components_engines_music_panels_dream_panel_MusicLibraryPanel_tsx["dream.panel.MusicLibraryPanel.tsx"]
  f_components_engines_music_panels_dream_panel_StudioPanel_tsx["dream.panel.StudioPanel.tsx"]
  f_components_engines_portfolio_dream_PortfolioEnginApp_tsx["dream.PortfolioEnginApp.tsx"]
  f_components_engines_portfolio_index_ts["index.ts"]
  f_components_engines_portfolio_panels_dream_panel_AssetsPanel_tsx["dream.panel.AssetsPanel.tsx"]
  f_components_engines_portfolio_panels_dream_panel_OptimizePanel_tsx["dream.panel.OptimizePanel.tsx"]
  f_components_engines_portfolio_panels_dream_panel_PortfolioQuantumPanel_tsx["dream.panel.PortfolioQuantumPanel.tsx"]
  f_components_engines_render_dream_RenderServiceDiagnostics_tsx["dream.RenderServiceDiagnostics.tsx"]
  f_components_engines_render_dream_RenderSurface_tsx["dream.RenderSurface.tsx"]
  f_components_engines_render_index_ts["index.ts"]
  f_components_engines_shared_dream_bar_EnginNavBar_tsx["dream.bar.EnginNavBar.tsx"]
  f_components_engines_shared_dream_EnginProvider_tsx["dream.EnginProvider.tsx"]
  f_components_engines_shared_dream_EnginRuleSet_ts["dream.EnginRuleSet.ts"]
  f_components_engines_shared_dream_makeEnginApp_tsx["dream.makeEnginApp.tsx"]
  f_components_engines_shared_dream_shell_EnginAppShell_tsx["dream.shell.EnginAppShell.tsx"]
  f_components_engines_shared_index_ts["index.ts"]
  f_components_feed_dream_AlgorithmEngine_tsx["dream.AlgorithmEngine.tsx"]
  f_components_feed_dream_CommentSection_tsx["dream.CommentSection.tsx"]
  f_components_feed_dream_FeedVideoCard_tsx["dream.FeedVideoCard.tsx"]
  f_components_feed_dream_FollowButton_tsx["dream.FollowButton.tsx"]
  f_components_feed_dream_FollowOnboarding_tsx["dream.FollowOnboarding.tsx"]
  f_components_feeds_dream_widget_EmbedFeedWidget_tsx["dream.widget.EmbedFeedWidget.tsx"]
  f_components_forge_dream_EngineBuilderCanvas_tsx["dream.EngineBuilderCanvas.tsx"]
  f_components_forge_dream_panel_AIBuilderPanel_tsx["dream.panel.AIBuilderPanel.tsx"]
  f_components_forge_dream_widget_ForgeMomentumWidget_tsx["dream.widget.ForgeMomentumWidget.tsx"]
  f_components_gameengin_dream_cartridge_CartridgeBrowser_tsx["dream.cartridge.CartridgeBrowser.tsx"]
  f_components_gameengin_dream_cartridge_CartridgeErrorBoundary_tsx["dream.cartridge.CartridgeErrorBoundary.tsx"]
  f_components_gameengin_dream_cartridge_CartridgeLauncher_tsx["dream.cartridge.CartridgeLauncher.tsx"]
  f_components_gameengin_dream_cartridge_FeaturedCartridges_tsx["dream.cartridge.FeaturedCartridges.tsx"]
  f_components_gameengin_dream_CartridgeRegistryBootstrap_tsx["dream.CartridgeRegistryBootstrap.tsx"]
  f_components_gameengin_dream_CrashReportModal_tsx["dream.CrashReportModal.tsx"]
  f_components_gameengin_input_DualSenseManager_ts["DualSenseManager.ts"]
  f_components_games__fx_canvasFx_ts["canvasFx.ts"]
  f_components_games_dream_AvenueOfMirrors_tsx["dream.AvenueOfMirrors.tsx"]
  f_components_games_dream_BabylonSideScroller_tsx["dream.BabylonSideScroller.tsx"]
  f_components_games_dream_DefuseRitual_tsx["dream.DefuseRitual.tsx"]
  f_components_games_dream_EchoArena_tsx["dream.EchoArena.tsx"]
  f_components_games_dream_EnginFracture_tsx["dream.EnginFracture.tsx"]
  f_components_games_dream_GameController_tsx["dream.GameController.tsx"]
  f_components_games_dream_GamesHub_tsx["dream.GamesHub.tsx"]
  f_components_games_dream_Glassfall_tsx["dream.Glassfall.tsx"]
  f_components_games_dream_hud_GameHUD_tsx["dream.hud.GameHUD.tsx"]
  f_components_games_dream_hud_LegacyGameHUD_tsx["dream.hud.LegacyGameHUD.tsx"]
  f_components_games_dream_hud_MobileGameHUD_tsx["dream.hud.MobileGameHUD.tsx"]
  f_components_games_dream_Leaderboard_tsx["dream.Leaderboard.tsx"]
  f_components_games_dream_LexiconSolitaire_tsx["dream.LexiconSolitaire.tsx"]
  f_components_games_dream_MadMaxiWildfall_tsx["dream.MadMaxiWildfall.tsx"]
  f_components_games_dream_NeonDrift_tsx["dream.NeonDrift.tsx"]
  f_components_games_dream_NiteFlyerSolarHymn_tsx["dream.NiteFlyerSolarHymn.tsx"]
  f_components_games_dream_NullCathedral_tsx["dream.NullCathedral.tsx"]
  f_components_games_dream_RecordingControls_tsx["dream.RecordingControls.tsx"]
  f_components_games_dream_remote_GameRemote_tsx["dream.remote.GameRemote.tsx"]
  f_components_games_dream_remote_GameRemoteSurface_tsx["dream.remote.GameRemoteSurface.tsx"]
  f_components_games_dream_remote_LegacyGameRemote_tsx["dream.remote.LegacyGameRemote.tsx"]
  f_components_games_dream_SerpentSiege_tsx["dream.SerpentSiege.tsx"]
  f_components_games_dream_VoidlineGP_tsx["dream.VoidlineGP.tsx"]
  f_components_games_madmaxi_audio_ts["audio.ts"]
  f_components_games_madmaxi_authoredZonePacks_ts["authoredZonePacks.ts"]
  f_components_games_madmaxi_config_ts["config.ts"]
  f_components_games_madmaxi_dream_MadmaxiGame_tsx["dream.MadmaxiGame.tsx"]
  f_components_games_madmaxi_index_ts["index.ts"]
  f_components_games_madmaxi_levels_ts["levels.ts"]
  f_components_games_madmaxi_materials_ts["materials.ts"]
  f_components_games_madmaxi_types_ts["types.ts"]
  f_components_games_madmaxi_vfx_ts["vfx.ts"]
  f_components_home_dream_ActiveModuleSurface_tsx["dream.ActiveModuleSurface.tsx"]
  f_components_home_dream_bar_GlobalDreamBar_tsx["dream.bar.GlobalDreamBar.tsx"]
  f_components_home_dream_bar_PersistentDreamBar_tsx["dream.bar.PersistentDreamBar.tsx"]
  f_components_home_dream_DaydreamPulseStrip_tsx["dream.DaydreamPulseStrip.tsx"]
  f_components_home_dream_FlagshipEnginesStrip_tsx["dream.FlagshipEnginesStrip.tsx"]
  f_components_home_dream_NeuralSeamCanvas_tsx["dream.NeuralSeamCanvas.tsx"]
  f_components_home_dream_widget_DreamWidget_tsx["dream.widget.DreamWidget.tsx"]
  f_components_icons_sheet_ts["sheet.ts"]
  f_components_idari_dream_PlatformHealth_tsx["dream.PlatformHealth.tsx"]
  f_components_landing_dream_LandingNav_tsx["dream.LandingNav.tsx"]
  f_components_landing_dream_LandingProductStatement_tsx["dream.LandingProductStatement.tsx"]
  f_components_landing_dream_scene_UniverseField_tsx["dream.scene.UniverseField.tsx"]
  f_components_marketplace_dream_MarketplaceListingCard_tsx["dream.MarketplaceListingCard.tsx"]
  f_components_marketplace_dream_MarketplaceRequestButton_tsx["dream.MarketplaceRequestButton.tsx"]
  f_components_menus_dream_menu_DreamRadialMenu_tsx["dream.menu.DreamRadialMenu.tsx"]
  f_components_menus_dream_menu_DualBottomMenu_tsx["dream.menu.DualBottomMenu.tsx"]
  f_components_menus_dream_menu_RadialMenu_tsx["dream.menu.RadialMenu.tsx"]
  f_components_menus_dream_menu_SystemRadialMenu_tsx["dream.menu.SystemRadialMenu.tsx"]
  f_components_menus_dream_panel_MenuPanel_tsx["dream.panel.MenuPanel.tsx"]
  f_components_messaging_dream_BoardComposer_tsx["dream.BoardComposer.tsx"]
  f_components_music_dream_SoundRecorder_tsx["dream.SoundRecorder.tsx"]
  f_components_offline_dream_OfflineRuntimeBootstrap_tsx["dream.OfflineRuntimeBootstrap.tsx"]
  f_components_offline_dream_OfflineStatusPill_tsx["dream.OfflineStatusPill.tsx"]
  f_components_onboarding_dream_OnboardingTip_tsx["dream.OnboardingTip.tsx"]
  f_components_optimizer_dream_scene_BabylonOptimizeroScene_tsx["dream.scene.BabylonOptimizeroScene.tsx"]
  f_components_overlays_dream_RootStatusScreen_tsx["dream.RootStatusScreen.tsx"]
  f_components_panels_dream_panel_AlgorithmPanel_tsx["dream.panel.AlgorithmPanel.tsx"]
  f_components_panels_dream_panel_AppearancePanel_tsx["dream.panel.AppearancePanel.tsx"]
  f_components_panels_dream_panel_ConnectorsPanel_tsx["dream.panel.ConnectorsPanel.tsx"]
  f_components_panels_dream_panel_ControlsPanel_tsx["dream.panel.ControlsPanel.tsx"]
  f_components_panels_dream_panel_DataPanel_tsx["dream.panel.DataPanel.tsx"]
  f_components_panels_dream_panel_FeedPanel_tsx["dream.panel.FeedPanel.tsx"]
  f_components_panels_dream_panel_FeedSettingsPanel_tsx["dream.panel.FeedSettingsPanel.tsx"]
  f_components_panels_dream_panel_HelpPanel_tsx["dream.panel.HelpPanel.tsx"]
  f_components_panels_dream_panel_MarketplacePanel_tsx["dream.panel.MarketplacePanel.tsx"]
  f_components_panels_dream_panel_PrivacyPanel_tsx["dream.panel.PrivacyPanel.tsx"]
  f_components_panels_dream_panel_ProfilePanel_tsx["dream.panel.ProfilePanel.tsx"]
  f_components_panels_dream_panel_SafetyPanel_tsx["dream.panel.SafetyPanel.tsx"]
  f_components_panels_dream_panel_SettingsPanel_tsx["dream.panel.SettingsPanel.tsx"]
  f_components_panels_dream_panel_WidgetsPanel_tsx["dream.panel.WidgetsPanel.tsx"]
  f_components_panels_panelTypes_ts["panelTypes.ts"]
  f_components_profile_dream_EditableAvatar_tsx["dream.EditableAvatar.tsx"]
  f_components_profile_dream_ProfileCanvas_tsx["dream.ProfileCanvas.tsx"]
  f_components_profile_dream_ProfileCustomizeButton_tsx["dream.ProfileCustomizeButton.tsx"]
  f_components_profile_dream_widget_ProfileWidgetGrid_tsx["dream.widget.ProfileWidgetGrid.tsx"]
  f_components_providers_dream_AppSurfaceShell_tsx["dream.AppSurfaceShell.tsx"]
  f_components_providers_dream_GodTierProvider_tsx["dream.GodTierProvider.tsx"]
  f_components_providers_dream_ThemeProvider_tsx["dream.ThemeProvider.tsx"]
  f_components_runtime_dream_DualRuntimeContainer_tsx["dream.DualRuntimeContainer.tsx"]
  f_components_runtime_dream_RuntimeView_tsx["dream.RuntimeView.tsx"]
  f_components_runtime_dream_shell_RuntimeShell_tsx["dream.shell.RuntimeShell.tsx"]
  f_components_shaders_dream_LightningWing_tsx["dream.LightningWing.tsx"]
  f_components_shaders_dream_NeonGlow_tsx["dream.NeonGlow.tsx"]
  f_components_shaders_dream_Refractor_tsx["dream.Refractor.tsx"]
  f_components_shaders_index_ts["index.ts"]
  f_components_shared_dream_dream_InviteFlow_tsx["dream.InviteFlow.tsx"]
  f_components_shared_dream_dream_SharedDreamCanvas_tsx["dream.SharedDreamCanvas.tsx"]
  f_components_shared_dream_dream_SharedDreamProvider_tsx["dream.SharedDreamProvider.tsx"]
  f_components_shared_dream_dream_SharedDreamRuntime_tsx["dream.SharedDreamRuntime.tsx"]
  f_components_shared_dream_index_ts["index.ts"]
  f_components_spatial_dream_PixiPhysicsLayer_tsx["dream.PixiPhysicsLayer.tsx"]
  f_components_spatial_dream_ProfileSpace_tsx["dream.ProfileSpace.tsx"]
  f_components_spatial_dream_shell_EnhancedSpatialShell_tsx["dream.shell.EnhancedSpatialShell.tsx"]
  f_components_three_dream_scene_tsx["dream.scene.tsx"]
  f_components_three_index_ts["index.ts"]
  f_components_ui_system_CustomizeModeContext_tsx["CustomizeModeContext.tsx"]
  f_components_ui_system_responsive_ts["responsive.ts"]
  f_components_ui_system_runtimeViewport_ts["runtimeViewport.ts"]
  f_components_ui_system_skin_engine_ts["skin-engine.ts"]
  f_components_ui_system_theme_engine_ts["theme-engine.ts"]
  f_components_ui_system_theme_ts["theme.ts"]
  f_components_ui_dream_AuthenticatedPageHeader_tsx["dream.AuthenticatedPageHeader.tsx"]
  f_components_ui_dream_DreamWord_tsx["dream.DreamWord.tsx"]
  f_components_ui_dream_IconList_tsx["dream.IconList.tsx"]
  f_components_ui_dream_InfinityIcon_tsx["dream.InfinityIcon.tsx"]
  f_components_ui_dream_PlatformBadge_tsx["dream.PlatformBadge.tsx"]
  f_components_ui_dream_SheetIcon_tsx["dream.SheetIcon.tsx"]
  f_components_ui_dream_SocialShareSheet_tsx["dream.SocialShareSheet.tsx"]
  f_components_universal_editor_dream_UniversalEditor_tsx["dream.UniversalEditor.tsx"]
  f_components_universal_editor_dream_UniversalEditorWrapper_tsx["dream.UniversalEditorWrapper.tsx"]
  f_components_universal_editor_index_ts["index.ts"]
  f_components_universal_editor_useTapHoldMove_ts["useTapHoldMove.ts"]
  f_components_universe_dream_node_cluster_tsx["dream.node-cluster.tsx"]
  f_components_universe_dream_shell_universe_shell_tsx["dream.shell.universe-shell.tsx"]
  f_components_universe_dream_universe_card_tsx["dream.universe-card.tsx"]
  f_components_universe_index_ts["index.ts"]
  f_components_warp_dream_WarpCanvas_tsx["dream.WarpCanvas.tsx"]
  f_components_webgpu_dream_WebGPUShowcase_tsx["dream.WebGPUShowcase.tsx"]
  f_components_webgpu_neuralPostProcess_ts["neuralPostProcess.ts"]
  f_components_webgpu_renderer_ts["renderer.ts"]
  f_components_webgpu_shaders_ts["shaders.ts"]
  f_components_widgets_dream_AddDreamCTA_tsx["dream.AddDreamCTA.tsx"]
  f_components_widgets_dream_ConfigureSheet_tsx["dream.ConfigureSheet.tsx"]
  f_components_widgets_dream_EditModeBanner_tsx["dream.EditModeBanner.tsx"]
  f_components_widgets_dream_EditModeProvider_tsx["dream.EditModeProvider.tsx"]
  f_components_widgets_dream_widget_PlayMediaWidget_tsx["dream.widget.PlayMediaWidget.tsx"]
  f_components_widgets_dream_widget_UniversalWidget_tsx["dream.widget.UniversalWidget.tsx"]
  f_components_widgets_dream_widget_WidgetCard_tsx["dream.widget.WidgetCard.tsx"]
  f_components_widgets_dream_widget_WidgetLibrary_tsx["dream.widget.WidgetLibrary.tsx"]
  f_components_widgets_dream_widget_WidgetPlaceholder_tsx["dream.widget.WidgetPlaceholder.tsx"]
  f_components_widgets_dream_widget_WidgetShell_tsx["dream.widget.WidgetShell.tsx"]
  f_components_widgets_dream_widget_WidgetSurface_tsx["dream.widget.WidgetSurface.tsx"]
  f_coresurfaces_dreamsurface_EditProfileDream_tsx["dreamsurface.EditProfileDream.tsx"]
  f_coresurfaces_dreamsurface_ViewProfile_tsx["dreamsurface.ViewProfile.tsx"]
  f_coresurfaces_home_buttons_button_groups_ts["button-groups.ts"]
  f_coresurfaces_home_buttons_contextual_home_ts["contextual-home.ts"]
  f_daydreams_brand_page_tsx["page.tsx"]
  f_daydreams_code_page_tsx["page.tsx"]
  f_daydreams_create_page_tsx["page.tsx"]
  f_daydreams_games_page_tsx["page.tsx"]
  f_daydreams_lab_page_tsx["page.tsx"]
  f_daydreams_music_page_tsx["page.tsx"]
  f_daydreams_shared_useDaydreamPersistence_ts["useDaydreamPersistence.ts"]
  f_daydreams_shared_useDaydreamState_ts["useDaydreamState.ts"]
  f_src_engin_generated_cartridges_ts --> f_public_cartridges_mad_maxi_MANIFEST_json
  f_src_engin_generated_dreamdmbar_ts --> f_dreamdmbar_dream_GlowingLight_tsx
  f_src_engin_generated_dreamdmbar_ts --> f_dreamdmbar_dreamsurface_dreamdmbar_tsx
  f_src_engin_generated_dreamdmbar_ts --> f_dreamdmbar_hooks_useDreamBarContext_ts
  f_src_engin_generated_dreamdmbar_ts --> f_dreamdmbar_hooks_useDreamDMConversations_ts
  f_src_engin_generated_dreamdmbar_ts --> f_dreamdmbar_hooks_useDreamDMDraft_ts
  f_src_engin_generated_dreamdmbar_ts --> f_dreamdmbar_hooks_useDreamDMMessages_ts
  f_src_engin_generated_dreamdmbar_ts --> f_dreamdmbar_hooks_useDreamSearch_ts
  f_src_engin_generated_dreamdmbar_ts --> f_dreamdmbar_hooks_useMessagingCore_ts
  f_src_engin_generated_dreamdmbar_ts --> f_dreamdmbar_hooks_useModuleBarIntent_ts
  f_src_engin_generated_dreamdmbar_ts --> f_dreamdmbar_hooks_useNotifications_ts
  f_src_engin_generated_dreamdmbar_ts --> f_dreamdmbar_notifications_notificationHelpers_ts
  f_src_engin_generated_dreamdmbar_ts --> f_dreamdmbar_notifications_useNotifications_ts
  f_src_engin_generated_dreamdmbar_ts --> f_dreamdmbar_runtime_barInteractions_ts
  f_src_engin_generated_dreamdmbar_ts --> f_dreamdmbar_runtime_bridgeSeamFlow_ts
  f_src_engin_generated_dreamdmbar_ts --> f_dreamdmbar_runtime_DreamSystemContext_tsx
  f_src_engin_generated_dreamr_ts --> f_app_dreamr_page_tsx
  f_src_engin_generated_dreamr_ts --> f_components_dreamr_dream_CloseFriendsSettings_tsx
  f_src_engin_generated_dreamr_ts --> f_components_dreamr_dream_panel_DreamRChannelPanel_tsx
  f_src_engin_generated_dreamr_ts --> f_components_dreamr_dream_panel_DreamRCreatorPanel_tsx
  f_src_engin_generated_dreamsurfaces_ts --> f_components_dreams_dream_connectorlayer_tsx
  f_src_engin_generated_dreamsurfaces_ts --> f_components_dreams_dream_DraggableDream_tsx
  f_src_engin_generated_dreamsurfaces_ts --> f_components_dreams_dream_featurelayer_tsx
  f_src_engin_generated_dreamsurfaces_ts --> f_components_dreams_dream_GlobalDragLayer_tsx
  f_src_engin_generated_dreamsurfaces_ts --> f_components_dreams_dream_outputlayer_tsx
  f_src_engin_generated_dreamsurfaces_ts --> f_components_dreams_dream_panel_RuntimeMemoryHUD_tsx
  f_src_engin_generated_dreamsurfaces_ts --> f_components_dreams_dream_PlatformErrorReporter_tsx
  f_src_engin_generated_dreamsurfaces_ts --> f_components_dreams_dream_shell_DreamShell_tsx
  f_src_engin_generated_dreamsurfaces_ts --> f_components_dreams_dream_shell_SharedDreamShell_tsx
  f_src_engin_generated_dreamsurfaces_ts --> f_components_dreams_dream_SlideOverPanel_tsx
  f_src_engin_generated_dreamsurfaces_ts --> f_components_dreams_dream_widget_SuperDreamWidget_tsx
  f_src_engin_generated_dreamsurfaces_ts --> f_components_dreams_dream_window_JourneyDreamWindow_tsx
  f_src_engin_generated_dreamsurfaces_ts --> f_components_dreams_dreamsurface_dreamspace_tsx
  f_src_engin_generated_dreamsurfaces_ts --> f_components_dreams_dreamsurface_shell_tsx
  f_src_engin_generated_dreamsurfaces_ts --> f_components_dreams_dreamsurface_window_tsx
  f_src_engin_generated_engins_ts --> f_engins_autoopen_dream_AutoOpenGameEngin_tsx
  f_src_engin_generated_engins_ts --> f_engins_brandingengin_identity_logos_ts
  f_src_engin_generated_engins_ts --> f_engins_codeengin_ui_core_parser_ts
  f_src_engin_generated_engins_ts --> f_engins_codeengin_ui_modules_ai_co_pilot_dream_panel_AgentPanel_tsx
  f_src_engin_generated_engins_ts --> f_engins_codeengin_ui_modules_ai_co_pilot_index_ts
  f_src_engin_generated_engins_ts --> f_engins_codeengin_ui_modules_ai_co_pilot_useAgentSession_ts
  f_src_engin_generated_engins_ts --> f_engins_codeengin_ui_orchestrator_dream_index_tsx
  f_src_engin_generated_engins_ts --> f_engins_codeengin_ai_drEamsCodeAssist_ts
  f_src_engin_generated_engins_ts --> f_engins_codeengin_auth_ts
  f_src_engin_generated_engins_ts --> f_engins_CodeEngin_core_parser_ts
  f_src_engin_generated_engins_ts --> f_engins_codeengin_diagnostics_ts
  f_src_engin_generated_engins_ts --> f_engins_codeengin_diff_aiEditEngine_ts
  f_src_engin_generated_engins_ts --> f_engins_codeengin_diff_diffUtils_ts
  f_src_engin_generated_engins_ts --> f_engins_codeengin_git_ts
  f_src_engin_generated_engins_ts --> f_engins_CodeEngin_modules_ai_co_pilot_dream_panel_AgentPanel_tsx
  f_src_engin_generated_engins_ts --> f_engins_CodeEngin_modules_ai_co_pilot_index_ts
  f_src_engin_generated_engins_ts --> f_engins_CodeEngin_modules_ai_co_pilot_useAgentSession_ts
  f_src_engin_generated_engins_ts --> f_engins_CodeEngin_orchestrator_dream_index_tsx
  f_src_engin_generated_engins_ts --> f_engins_codeengin_pathSafety_ts
  f_src_engin_generated_engins_ts --> f_engins_codeengin_projectGraph_ts
  f_src_engin_generated_engins_ts --> f_engins_codeengin_runner_ts
  f_src_engin_generated_engins_ts --> f_engins_codeengin_runnerCommands_ts
  f_src_engin_generated_engins_ts --> f_engins_codeengin_search_ts
  f_src_engin_generated_engins_ts --> f_engins_codeengin_types_ts
  f_src_engin_generated_engins_ts --> f_engins_codeengin_workspaceStore_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_assets_assetOptimizer_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_assets_indexedDBStore_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_assets_localAssetLibrary_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_assetTypes_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_AssetViewport_tsx
  f_src_engin_generated_engins_ts --> f_engins_contentengin_builders_geometryBuilder_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_builders_meshBuilder_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_builders_modifiers_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_builders_primitiveBuilder_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_builders_textureBuilder_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_builders_uvGenerator_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_cli_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_composite_compositor_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_composite_fxSimulation_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_composite_matchmover_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_composite_motionCapture_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_composite_rotoscope_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_content_generativeFill_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_content_publishIntent_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_content_seoScorer_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_content_transcriptEditor_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_content_voiceClone_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_grammars_animalGrammar_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_grammars_bicycleGrammar_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_grammars_bridgeGrammar_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_grammars_buildingGrammar_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_grammars_creatureGrammar_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_grammars_humanoidGrammar_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_grammars_propGrammar_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_grammars_roadGrammar_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_grammars_shared_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_grammars_terrainGrammar_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_grammars_treeGrammar_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_grammars_vehicleGrammar_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_grammars_waterGrammar_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_ImplicitAssetWorkspace_tsx
  f_src_engin_generated_engins_ts --> f_engins_contentengin_materials_materialTypes_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_materials_paletteExtractor_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_materials_proceduralMaterials_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_media_h265_encoder_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_media_ledger_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_media_postMedia_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_performancePlan_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_photo_colorCluster_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_photo_edgeDetector_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_photo_imageAnalyzer_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_photo_photoToRecipe_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_photo_pngDecoder_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_photo_regionDetector_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_pipeline_build_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_pipeline_bundle_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_pipeline_exportGlb_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_pipeline_generateCollision_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_pipeline_generateLods_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_pipeline_paths_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_pipeline_validate_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_pipeline_writeManifest_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_recipes_recipeResolver_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_recipes_recipeTypes_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_recipes_seededRandom_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_rigging_fitArmature_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_rigging_index_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_rigging_landmarks_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_rigging_rigTypes_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_rigging_rigValidator_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_runtimeProfile_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_shaders_shaderRegistry_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_shaders_shaderTypes_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_upgradeMatrix_ts
  f_src_engin_generated_engins_ts --> f_engins_contentengin_useImplicitAssetWorkspace_ts
  f_src_engin_generated_engins_ts --> f_engins_dream_ForgeEngin_tsx
  f_src_engin_generated_engins_ts --> f_engins_dream_QuantumCircuitCanvas_tsx
  f_src_engin_generated_engins_ts --> f_engins_engin_BrandingEngin_tsx
  f_src_engin_generated_engins_ts --> f_engins_engin_CodeEngin_tsx
  f_src_engin_generated_engins_ts --> f_engins_engin_ContentEngin_tsx
  f_src_engin_generated_engins_ts --> f_engins_engin_GameEngin_tsx
  f_src_engin_generated_engins_ts --> f_engins_engin_LabEngin_tsx
  f_src_engin_generated_engins_ts --> f_engins_engin_StarMakerEngin_tsx
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_componentInventory_ts
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_enginpipe_artifact_manifest_ts
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_enginpipe_index_ts
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_enginpipe_quality_tiers_ts
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_enginpipe_shell_ArtifactSlot_tsx
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_enginpipe_telemetry_client_ts
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_enginpipe_telemetry_events_ts
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_forge_ngn_assembly_ts
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_forge_ngn_index_ts
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_forge_ngn_piece_registry_ts
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_forge_engineForge_ts
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_forge_forgeBuild_ts
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_forge_forgeIntelligence_ts
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_forge_forgeMomentum_ts
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_forge_forgeNexus_ts
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_forge_forgeRegistry_ts
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_forge_forgeRituals_ts
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_forge_useForgeActivity_ts
  f_src_engin_generated_engins_ts --> f_engins_forgeengin_forge_useForgeBuild_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_accessibility_ai_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_ai_director_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_ai_npcs_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_assets_BundleCache_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_assets_BundleManifest_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_backendNegotiator_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_brain_reader_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_cartridge_manifest_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_cartridge_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_cartridgeLoader_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_cartridges_achievementEngine_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_cartridges_apiStubs_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_cartridges_index_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_cartridges_loaders_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_cartridges_manifest_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_cartridges_reactCartridge_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_cartridges_saveState_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_cloud_compute_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_config_demoGameConfig_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_controls_control_mappings_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_core_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_dream_engine_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_dreamr_loader_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_executionWiring_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_GameEnginCore_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_gameEnginRuntime_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_GameRuntime_tsx
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_avatar_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_catalog_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_DualSenseManager_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_gameControllerButtons_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_gameControllerLeft_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_gameControllerRight_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_hooks_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_library_state_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_lucid_avenue_world_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_madmaxi_wildfall_world_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_mobileControls_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_navigation_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_performance_baseline_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_quality_plan_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_useAIDirector_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_useGameInputKeyboardBridge_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_useGamepad_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_useImmersiveGameLayout_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_games_useRemoteChannel_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_generative_audio_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_handlers_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_index_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_input_index_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_input_InputRouter_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_launcher_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_neural_render_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_path_tracing_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_platform_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_post_fx_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_power_systems_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_predictive_stream_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_procgen_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_registerCartridges_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_remote_comboMachine_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_remote_index_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_remote_layout_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_remote_moves_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_remote_sprintDetector_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_render_ShaderRegistry_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_runtime_FrameBudget_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_runtime_FrameClock_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_runtime_index_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_runtime_RuntimeQuality_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_systems_ai_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_systems_animation_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_systems_assets_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_systems_index_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_systems_lod_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_systems_network_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_systems_physics_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_systems_pooling_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_systems_rendering_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_systems_spatial_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_systems_world_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_unifiedLoop_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_useUnifiedLoop_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_webgpu_runtime_shell_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_world_crdt_ts
  f_src_engin_generated_engins_ts --> f_engins_gameengin_xr_ts
  f_src_engin_generated_engins_ts --> f_engins_isosurfaceAssetPipeline_ts
  f_src_engin_generated_engins_ts --> f_engins_isosurfaceDualContouring_ts
  f_src_engin_generated_engins_ts --> f_engins_labengin_implicitSurface_ts
  f_src_engin_generated_engins_ts --> f_engins_portfolio_dream_PortfolioEngin_tsx
  f_src_engin_generated_engins_ts --> f_engins_renderengin_advancedRendering_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_animation_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_assets_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_benchmarkProof_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_completionEvidence_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_core_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_diagnostics_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_index_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_lighting_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_liveBenchmark_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_materials_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_performanceIntegrity_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_postProcessing_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_RenderEnginInlineSurface_tsx
  f_src_engin_generated_engins_ts --> f_engins_renderengin_RenderEnginViewport_tsx
  f_src_engin_generated_engins_ts --> f_engins_renderengin_renderSettings_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_RenderStage_tsx
  f_src_engin_generated_engins_ts --> f_engins_renderengin_runtimeRegistration_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_scene_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_security_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_serviceIntegration_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_serviceRuntime_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_textures_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_viewportControls_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_virtualization_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_wasmAcceleration_ts
  f_src_engin_generated_engins_ts --> f_engins_renderengin_webgpu_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_brand_brandEnginRuleSet_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_brand_useBrandEnginRuntime_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_code_codeEnginRuleSet_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_code_index_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_code_useCodeEnginRuntime_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_content_contentEnginRuleSet_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_content_useContentEnginRuntime_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_dreams_index_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_forge_index_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_game_declarative_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_game_gameEnginRuleSet_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_game_index_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_game_useGameEnginRuntime_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_homedream_dream_homedream_constants_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_homedream_dream_homedream_physics_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_homedream_dream_homedream_transforms_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_homedream_index_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_lab_index_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_lab_labEnginRuleSet_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_lab_useLabEnginRuntime_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_music_index_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_music_starMakerEnginRuleSet_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_music_useStarMakerEnginRuntime_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_useEnginWorkflow_ts
  f_src_engin_generated_engins_ts --> f_engins_rulesets_workflowEngine_ts
  f_src_engin_generated_engins_ts --> f_engins_starmakerengin_audio_fingerprint_fingerprint_ts
  f_src_engin_generated_engins_ts --> f_engins_starmakerengin_audio_fingerprint_index_ts
  f_src_engin_generated_engins_ts --> f_engins_starmakerengin_audio_fingerprint_peak_map_ts
  f_src_engin_generated_engins_ts --> f_engins_starmakerengin_audio_fingerprint_stem_extractor_ts
  f_src_engin_generated_engins_ts --> f_engins_starmakerengin_audioFingerprint_ts
  f_src_engin_generated_engins_ts --> f_engins_starmakerengin_music_presets_ts
  f_src_engin_generated_engins_ts --> f_engins_starmakerengin_music_starmaker_ts
  f_src_engin_generated_engins_ts --> f_engins_starmakerengin_music_starmakerArrangement_ts
  f_src_engin_generated_engins_ts --> f_engins_starmakerengin_music_starmakerDaw_ts
  f_src_engin_generated_engins_ts --> f_engins_starmakerengin_music_wasmAudioBridge_ts
  f_src_engin_generated_homedream_ts --> f_app_homedream_page_tsx
  f_src_engin_generated_hooks_ts --> f_hooks_use_spatial_ts
  f_src_engin_generated_hooks_ts --> f_hooks_useAccount_ts
  f_src_engin_generated_hooks_ts --> f_hooks_useAppIntentPressureSurface_ts
  f_src_engin_generated_hooks_ts --> f_hooks_useConnectorInstallFlow_ts
  f_src_engin_generated_hooks_ts --> f_hooks_useDreamLayout_ts
  f_src_engin_generated_hooks_ts --> f_hooks_useHideOnScroll_ts
  f_src_engin_generated_hooks_ts --> f_hooks_useMotionTilt_ts
  f_src_engin_generated_hooks_ts --> f_hooks_useResponsive_ts
  f_src_engin_generated_hooks_ts --> f_hooks_useSharedDream_ts
  f_src_engin_generated_hooks_ts --> f_hooks_useTap_ts
  f_src_engin_generated_hooks_ts --> f_hooks_useTapHoldMove_ts
  f_src_engin_generated_hooks_ts --> f_hooks_useTick_ts
  f_src_engin_generated_hooks_ts --> f_hooks_useViewCounter_ts
  f_src_engin_generated_index_ts --> f_src_engin_generated_engins_ts
  f_src_engin_generated_index_ts --> f_src_engin_generated_rulesets_ts
  f_src_engin_generated_index_ts --> f_src_engin_generated_surfaces_ts
  f_src_engin_generated_index_ts --> f_src_engin_generated_dreamsurfaces_ts
  f_src_engin_generated_index_ts --> f_src_engin_generated_dreamr_ts
  f_src_engin_generated_index_ts --> f_src_engin_generated_dreamdmbar_ts
  f_src_engin_generated_index_ts --> f_src_engin_generated_homedream_ts
  f_src_engin_generated_index_ts --> f_src_engin_generated_connectors_ts
  f_src_engin_generated_index_ts --> f_src_engin_generated_cartridges_ts
  f_src_engin_generated_index_ts --> f_src_engin_generated_brain_ts
  f_src_engin_generated_index_ts --> f_src_engin_generated_personas_ts
  f_src_engin_generated_index_ts --> f_src_engin_generated_systems_ts
  f_src_engin_generated_index_ts --> f_src_engin_generated_hooks_ts
  f_src_engin_generated_index_ts --> f_src_engin_generated_osArchitectureMap_ts
  f_src_engin_generated_surfaces_ts --> f_app__internal__idari_console_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app__internal__idari_console_platform_errors_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app__internal__idari_console_platform_health_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_about_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_actions_dream_docs_ts
  f_src_engin_generated_surfaces_ts --> f_app_ads_create_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_ads_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_ads_slot__id__page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_api_account_delete_data_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_account_delete_dream_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_account_export_data_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_activity_track_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_admin_ai_chat_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_admin_ai_request_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_admin_child_safety_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_admin_code_files_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_admin_observability_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_ads_orders_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_ads_view_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_agent_session_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_ai_boogieman_child_safety_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_ai_boogieman_privacy_event_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_ai_boogieman_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_ai_boogieman_status_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_ai_eams_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_ai_execute_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_ai_idari_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_appeal_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_auth_logout_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_auth_providers_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_blocks_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_ci_run_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_close_friends_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_codeengin_diagnostics_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_codeengin_file_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_codeengin_git_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_codeengin_run_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_codeengin_search_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_codeengin_upload_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_codeengin_workspace_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_comments_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_connectors__provider__connect_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_connectors__provider__disconnect_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_connectors__provider__items_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_connectors__provider__sync_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_connectors__provider__verify_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_connectors_cron_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_connectors_instagram_oauth_callback_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_connectors_instagram_oauth_start_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_connectors_status_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_connectors_webhooks__provider__route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_connectors_youtube_oauth_callback_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_connectors_youtube_oauth_start_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_content_generative_fill_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_content_intelligence_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_content_transcribe_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_content_voice_clone_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_contentengin_assets__assetId__export_gameengin_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_contentengin_assets__assetId__route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_contentengin_jobs__jobId__route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_contentengin_jobs_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_contentengin_upload_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_dr_eams_hf_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_dr_eams_run_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_drafts__id__route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_drafts_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_dream_windows__id__route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_dream_windows_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_dreamengin_os_status_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_dreamr_feed_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_dreamr_suggested_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_dreamr_tally_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_dreams_feed_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_dreams_instances_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_dreams_transfer_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_embed_feed_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_favorites_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_feed_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_follow_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_gal_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_game_scores_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_gameengin_crash_report_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_health_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_home_layout_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_journey_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_lab_benchmarks_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_ledger_media_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_likes_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_marketplace_request_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_marketplace_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_messages_boards_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_messages_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_metrics_platform_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_metrics_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_metrics_user__userId__route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_music_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_notifications_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_platform_errors_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_posts__id__route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_posts__id__save_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_posts__id__view_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_posts_profile__userId__route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_posts_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_profile_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_projects_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_scheduled_posts_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_security_scan_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_settings_appearance_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_settings_feed_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_settings_notifications_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_settings_privacy_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_setup_check_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_setup_google_oauth_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_shared_dream_sessions__id__route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_shared_dream_sessions_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_shellhub_devices_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_shop_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_skip_credits_balance_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_skip_credits_earn_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_skip_credits_use_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_social_ipfs_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_social_livekit_room_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_social_livekit_token_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_social_rss_feed_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_upload_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_user_layout_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_views_track_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_widgets_feed_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_widgets_instances_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_youtube_channel_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_youtube_discovery_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_api_youtube_live_feed_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_auth_callback_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_auth_reset_password_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_auth_update_password_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_connectors_dream_ConnectorsClient_tsx
  f_src_engin_generated_surfaces_ts --> f_app_connectors_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_brand_engin_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_brand_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_code_engin_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_code_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_constellation_dream_ConstellationClient_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_constellation_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_create_engin_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_create_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_forge_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_game_dream_GamePageClient_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_game_dream_shell_ImmersiveGameShell_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_game_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_games_engin_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_games_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_lab_engin_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_lab_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_lab_portfolio_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_media_vault_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_music_engin_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_music_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_music_upload_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_play_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_daydream_render_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_discover_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_dream_effects_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_dreamdmbar__components_DreamBarDataBridge_tsx
  f_src_engin_generated_surfaces_ts --> f_app_dreamdmbar__components_dreamr_algorithms_botDetector_ts
  f_src_engin_generated_surfaces_ts --> f_app_dreamdmbar__components_dreamr_algorithms_dreamrAlgorithm_ts
  f_src_engin_generated_surfaces_ts --> f_app_dreamdmbar__components_dreamr_api_feedHandler_ts
  f_src_engin_generated_surfaces_ts --> f_app_dreamdmbar__components_dreamr_api_route_ts
  f_src_engin_generated_surfaces_ts --> f_app_dreamdmbar__components_dreamr_dream_DreamRCore_tsx
  f_src_engin_generated_surfaces_ts --> f_app_dreamdmbar__components_dreamr_dream_DreamRFeed_tsx
  f_src_engin_generated_surfaces_ts --> f_app_dreamdmbar__components_dreamr_dreamsurface_dreamr_tsx
  f_src_engin_generated_surfaces_ts --> f_app_dreamdmbar__components_DreamSpaceRegion_tsx
  f_src_engin_generated_surfaces_ts --> f_app_dreamdmbar__components_DreamWidgetGrid_tsx
  f_src_engin_generated_surfaces_ts --> f_app_dreamdmbar__components_HomeDreamRegion_tsx
  f_src_engin_generated_surfaces_ts --> f_app_dreamdmbar_dreamspace_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_dreamdmbar_dualruntime_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_dreamdmbar_homedream_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_dreamdmbar_layout_tsx
  f_src_engin_generated_surfaces_ts --> f_app_dreamdmbar_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_dreamspace_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_edit_profiledream_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_brand_campaigns_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_brand_identity_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_brand_layout_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_brand_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_code_ai_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_code_layout_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_code_notebook_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_code_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_code_projects_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_create_calendar_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_create_editor_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_create_layout_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_create_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_create_queue_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_games_builder_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_games_layout_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_games_library_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_games_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_games_scores_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_lab_data_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_lab_experiments_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_lab_layout_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_lab_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_lab_quantum_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_layout_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_music_arrange_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_music_layout_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_music_library_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_music_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_music_studio_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_portfolio_assets_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_portfolio_layout_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_portfolio_optimize_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_portfolio_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_portfolio_quantum_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_engines_render_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_feed_settings_dream_FeedSettingsClient_tsx
  f_src_engin_generated_surfaces_ts --> f_app_feed_settings_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_gameengin_cartridges__id__page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_gameengin_cartridges_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_gameengin_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_join_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_lab__id__codespace_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_lab__id__page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_lab_new_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_lab_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_layout_tsx
  f_src_engin_generated_surfaces_ts --> f_app_login_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_marketplace__id__page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_marketplace_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_marketplace_sell_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_messages_boards__id__page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_messages_boards_new_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_messages_boards_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_messages_new_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_messages_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_mission_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_notes_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_onboarding_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_policy_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_profile__handle__page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_profile_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_account_dream_DangerZoneActions_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_account_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_algorithm_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_appearance_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_controls_dream_ControlsClient_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_controls_dream_PositionIndicatorToggle_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_controls_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_data_dream_DataClient_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_data_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_dreams_dreams_layout_editor_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_dreams_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_feed_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_help_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_notifications_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_privacy_dream_PrivacyClient_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_privacy_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_safety_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_security_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_settings_widgets_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_shop_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_shop_sell_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_u__handle__page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_view_profile_page_tsx
  f_src_engin_generated_surfaces_ts --> f_app_webgpu_page_tsx
  f_src_engin_generated_surfaces_ts --> f_components_activity_dream_ActivityPostForm_tsx
  f_src_engin_generated_surfaces_ts --> f_components_activity_dream_ActivityProfile_tsx
  f_src_engin_generated_surfaces_ts --> f_components_activity_dream_TierBadge_tsx
  f_src_engin_generated_surfaces_ts --> f_components_ads_dream_AdUnit_tsx
  f_src_engin_generated_surfaces_ts --> f_components_ads_dream_SkipCreditBalance_tsx
  f_src_engin_generated_surfaces_ts --> f_components_auth_dream_PasswordField_tsx
  f_src_engin_generated_surfaces_ts --> f_components_branding_dream_DreamEnginLogo_tsx
  f_src_engin_generated_surfaces_ts --> f_components_branding_dream_LogoHero_tsx
  f_src_engin_generated_surfaces_ts --> f_components_branding_dream_Nav_tsx
  f_src_engin_generated_surfaces_ts --> f_components_connectors_dream_AddSliceSheet_tsx
  f_src_engin_generated_surfaces_ts --> f_components_connectors_dream_ConnectDreamPrompt_tsx
  f_src_engin_generated_surfaces_ts --> f_components_connectors_dream_ConnectorRow_tsx
  f_src_engin_generated_surfaces_ts --> f_components_connectors_dream_NoSlotDialog_tsx
  f_src_engin_generated_surfaces_ts --> f_components_connectors_dream_PlacementMode_tsx
  f_src_engin_generated_surfaces_ts --> f_components_connectors_dream_widget_ConnectorWidgetPicker_tsx
  f_src_engin_generated_surfaces_ts --> f_components_connectors_dream_widget_ConnectWidgetPrompt_tsx
  f_src_engin_generated_surfaces_ts --> f_components_contentengin_AnimationPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_contentengin_AssetPreview3D_tsx
  f_src_engin_generated_surfaces_ts --> f_components_contentengin_ContentEnginStudio_tsx
  f_src_engin_generated_surfaces_ts --> f_components_contentengin_ExportPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_contentengin_MaterialEditor_tsx
  f_src_engin_generated_surfaces_ts --> f_components_contentengin_PartTreeEditor_tsx
  f_src_engin_generated_surfaces_ts --> f_components_contentengin_PhotoReferencePanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_contentengin_RecipeEditor_tsx
  f_src_engin_generated_surfaces_ts --> f_components_contentengin_RiggingPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_core_dream_CoreDream_tsx
  f_src_engin_generated_surfaces_ts --> f_components_customize_dream_bar_CustomizeModeBar_tsx
  f_src_engin_generated_surfaces_ts --> f_components_customize_dream_bar_CustomizeToolbar_tsx
  f_src_engin_generated_surfaces_ts --> f_components_customize_dream_GlobalCustomizeUI_tsx
  f_src_engin_generated_surfaces_ts --> f_components_customize_panels_dream_panel_ColorPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_customize_panels_dream_panel_EffectsPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_customize_panels_dream_panel_FontPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_customize_panels_dream_panel_LayoutPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_daydream_dream_CodeDreamIDE_tsx
  f_src_engin_generated_surfaces_ts --> f_components_daydream_dream_constellationmap_tsx
  f_src_engin_generated_surfaces_ts --> f_components_daydream_dream_DiffViewer_tsx
  f_src_engin_generated_surfaces_ts --> f_components_daydream_dream_JourneyTrail_tsx
  f_src_engin_generated_surfaces_ts --> f_components_daydream_dream_LabDreamIDE_tsx
  f_src_engin_generated_surfaces_ts --> f_components_daydream_dream_NGNEngin_tsx
  f_src_engin_generated_surfaces_ts --> f_components_daydream_dream_OpenDaydreamSideBButton_tsx
  f_src_engin_generated_surfaces_ts --> f_components_daydream_dream_shell_DaydreamShell_tsx
  f_src_engin_generated_surfaces_ts --> f_components_daydream_dream_StandaloneEnginSurface_tsx
  f_src_engin_generated_surfaces_ts --> f_components_daydream_dreamsurface_daydream_BrandDaydream_tsx
  f_src_engin_generated_surfaces_ts --> f_components_daydream_starmaker_dream_panel_CompingPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_daydream_starmaker_dream_panel_MultitrackArrangementPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_daydream_starmaker_dream_panel_PianoRollPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_daydream_starmaker_dream_panel_SessionViewPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_draggable_dream_DraggableModule_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_AIAssistant_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_AudioVisualizer3D_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_BoogieWarningBanner_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_BrandLogo_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_CommandPalette_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_CommandPaletteMount_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_CreatePostModal_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_DragToAnchorClose_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_DrEamsModeToggle_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_DrEamsVoiceAssistant_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_FeedCard_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_FirstTouchActivator_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_ForgeDreamCanvas_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_GlobalOverlays_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_HeroSprite_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_HomeFeed_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_IconSelector_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_InnerDreamsButton_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_KonamiDream_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_LandingHero_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_LedgerChart_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_MessagesClient_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_NotificationCenter_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_OSShellActivator_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_panel_ChildSafetyPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_panel_IDariPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_PhysicsLab_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_ProfileEditor_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_ProfileShareButton_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_ProfileSpace_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_PullToRefresh_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_ShrunkMode_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_SkeletonLoaders_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_ThemeApplicator_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_ThemeToggle_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_ToastSystem_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_universal_asset_registry_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_VoidThemeToggle_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_widget_AnchorWidget_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_widget_ProfileWidgetBlock_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dream_widget_WidgetBubble_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_dream_bar_DrEamsSearchBar_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_dream_CanvasDropZone_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_dream_DREAMenginOS_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_dream_DrEamsCanvas_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_dream_HomeControls_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_dream_menu_NexusMenu_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_dream_menu_OutdreamMenu_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_dream_overlay_ViewAllDreamsOverlay_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_dream_panel_CrossEnginStatusPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_dream_panel_DrEamsPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_dream_scene_BabylonGameScene_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_dream_scene_DrEamsScene_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_dream_scene_PortfolioOptimizationScene_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_dream_shell_EnginShell_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_dream_widget_AppearanceWidget_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_dreamsurface_dreamengin_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_engine_math_ts
  f_src_engin_generated_surfaces_ts --> f_components_dreamengin_engine_types_ts
  f_src_engin_generated_surfaces_ts --> f_components_dreamnav_dream_DreamNavControls_tsx
  f_src_engin_generated_surfaces_ts --> f_components_dreamnav_dreamsurface_dreamnav_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_brand_dream_BrandEnginApp_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_brand_index_ts
  f_src_engin_generated_surfaces_ts --> f_components_engines_brand_panels_dream_panel_CampaignsPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_brand_panels_dream_panel_IdentityPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_code_dream_CodeEnginApp_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_code_index_ts
  f_src_engin_generated_surfaces_ts --> f_components_engines_code_panels_dream_panel_AIPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_code_panels_dream_panel_NotebookPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_code_panels_dream_panel_ProjectsPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_create_dream_CreateEnginApp_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_create_index_ts
  f_src_engin_generated_surfaces_ts --> f_components_engines_create_panels_dream_panel_CalendarPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_create_panels_dream_panel_EditorPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_create_panels_dream_panel_QueuePanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_games_dream_GameEnginApp_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_games_index_ts
  f_src_engin_generated_surfaces_ts --> f_components_engines_games_panels_dream_panel_BuilderPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_games_panels_dream_panel_LibraryPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_games_panels_dream_panel_ScoresPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_index_ts
  f_src_engin_generated_surfaces_ts --> f_components_engines_lab_dream_LabEnginApp_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_lab_index_ts
  f_src_engin_generated_surfaces_ts --> f_components_engines_lab_panels_dream_panel_DataVizPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_lab_panels_dream_panel_ExperimentsPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_lab_panels_dream_panel_QuantumPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_music_dream_MusicEnginApp_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_music_index_ts
  f_src_engin_generated_surfaces_ts --> f_components_engines_music_panels_dream_panel_ArrangePanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_music_panels_dream_panel_MusicLibraryPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_music_panels_dream_panel_StudioPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_portfolio_dream_PortfolioEnginApp_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_portfolio_index_ts
  f_src_engin_generated_surfaces_ts --> f_components_engines_portfolio_panels_dream_panel_AssetsPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_portfolio_panels_dream_panel_OptimizePanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_portfolio_panels_dream_panel_PortfolioQuantumPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_render_dream_RenderServiceDiagnostics_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_render_dream_RenderSurface_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_render_index_ts
  f_src_engin_generated_surfaces_ts --> f_components_engines_shared_dream_bar_EnginNavBar_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_shared_dream_EnginProvider_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_shared_dream_EnginRuleSet_ts
  f_src_engin_generated_surfaces_ts --> f_components_engines_shared_dream_makeEnginApp_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_shared_dream_shell_EnginAppShell_tsx
  f_src_engin_generated_surfaces_ts --> f_components_engines_shared_index_ts
  f_src_engin_generated_surfaces_ts --> f_components_feed_dream_AlgorithmEngine_tsx
  f_src_engin_generated_surfaces_ts --> f_components_feed_dream_CommentSection_tsx
  f_src_engin_generated_surfaces_ts --> f_components_feed_dream_FeedVideoCard_tsx
  f_src_engin_generated_surfaces_ts --> f_components_feed_dream_FollowButton_tsx
  f_src_engin_generated_surfaces_ts --> f_components_feed_dream_FollowOnboarding_tsx
  f_src_engin_generated_surfaces_ts --> f_components_feeds_dream_widget_EmbedFeedWidget_tsx
  f_src_engin_generated_surfaces_ts --> f_components_forge_dream_EngineBuilderCanvas_tsx
  f_src_engin_generated_surfaces_ts --> f_components_forge_dream_panel_AIBuilderPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_forge_dream_widget_ForgeMomentumWidget_tsx
  f_src_engin_generated_surfaces_ts --> f_components_gameengin_dream_cartridge_CartridgeBrowser_tsx
  f_src_engin_generated_surfaces_ts --> f_components_gameengin_dream_cartridge_CartridgeErrorBoundary_tsx
  f_src_engin_generated_surfaces_ts --> f_components_gameengin_dream_cartridge_CartridgeLauncher_tsx
  f_src_engin_generated_surfaces_ts --> f_components_gameengin_dream_cartridge_FeaturedCartridges_tsx
  f_src_engin_generated_surfaces_ts --> f_components_gameengin_dream_CartridgeRegistryBootstrap_tsx
  f_src_engin_generated_surfaces_ts --> f_components_gameengin_dream_CrashReportModal_tsx
  f_src_engin_generated_surfaces_ts --> f_components_gameengin_input_DualSenseManager_ts
  f_src_engin_generated_surfaces_ts --> f_components_games__fx_canvasFx_ts
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_AvenueOfMirrors_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_BabylonSideScroller_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_DefuseRitual_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_EchoArena_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_EnginFracture_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_GameController_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_GamesHub_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_Glassfall_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_hud_GameHUD_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_hud_LegacyGameHUD_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_hud_MobileGameHUD_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_Leaderboard_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_LexiconSolitaire_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_MadMaxiWildfall_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_NeonDrift_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_NiteFlyerSolarHymn_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_NullCathedral_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_RecordingControls_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_remote_GameRemote_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_remote_GameRemoteSurface_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_remote_LegacyGameRemote_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_SerpentSiege_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_dream_VoidlineGP_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_madmaxi_audio_ts
  f_src_engin_generated_surfaces_ts --> f_components_games_madmaxi_authoredZonePacks_ts
  f_src_engin_generated_surfaces_ts --> f_components_games_madmaxi_config_ts
  f_src_engin_generated_surfaces_ts --> f_components_games_madmaxi_dream_MadmaxiGame_tsx
  f_src_engin_generated_surfaces_ts --> f_components_games_madmaxi_index_ts
  f_src_engin_generated_surfaces_ts --> f_components_games_madmaxi_levels_ts
  f_src_engin_generated_surfaces_ts --> f_components_games_madmaxi_materials_ts
  f_src_engin_generated_surfaces_ts --> f_components_games_madmaxi_types_ts
  f_src_engin_generated_surfaces_ts --> f_components_games_madmaxi_vfx_ts
  f_src_engin_generated_surfaces_ts --> f_components_home_dream_ActiveModuleSurface_tsx
  f_src_engin_generated_surfaces_ts --> f_components_home_dream_bar_GlobalDreamBar_tsx
  f_src_engin_generated_surfaces_ts --> f_components_home_dream_bar_PersistentDreamBar_tsx
  f_src_engin_generated_surfaces_ts --> f_components_home_dream_DaydreamPulseStrip_tsx
  f_src_engin_generated_surfaces_ts --> f_components_home_dream_FlagshipEnginesStrip_tsx
  f_src_engin_generated_surfaces_ts --> f_components_home_dream_NeuralSeamCanvas_tsx
  f_src_engin_generated_surfaces_ts --> f_components_home_dream_widget_DreamWidget_tsx
  f_src_engin_generated_surfaces_ts --> f_components_icons_sheet_ts
  f_src_engin_generated_surfaces_ts --> f_components_idari_dream_PlatformHealth_tsx
  f_src_engin_generated_surfaces_ts --> f_components_landing_dream_LandingNav_tsx
  f_src_engin_generated_surfaces_ts --> f_components_landing_dream_LandingProductStatement_tsx
  f_src_engin_generated_surfaces_ts --> f_components_landing_dream_scene_UniverseField_tsx
  f_src_engin_generated_surfaces_ts --> f_components_marketplace_dream_MarketplaceListingCard_tsx
  f_src_engin_generated_surfaces_ts --> f_components_marketplace_dream_MarketplaceRequestButton_tsx
  f_src_engin_generated_surfaces_ts --> f_components_menus_dream_menu_DreamRadialMenu_tsx
  f_src_engin_generated_surfaces_ts --> f_components_menus_dream_menu_DualBottomMenu_tsx
  f_src_engin_generated_surfaces_ts --> f_components_menus_dream_menu_RadialMenu_tsx
  f_src_engin_generated_surfaces_ts --> f_components_menus_dream_menu_SystemRadialMenu_tsx
  f_src_engin_generated_surfaces_ts --> f_components_menus_dream_panel_MenuPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_messaging_dream_BoardComposer_tsx
  f_src_engin_generated_surfaces_ts --> f_components_music_dream_SoundRecorder_tsx
  f_src_engin_generated_surfaces_ts --> f_components_offline_dream_OfflineRuntimeBootstrap_tsx
  f_src_engin_generated_surfaces_ts --> f_components_offline_dream_OfflineStatusPill_tsx
  f_src_engin_generated_surfaces_ts --> f_components_onboarding_dream_OnboardingTip_tsx
  f_src_engin_generated_surfaces_ts --> f_components_optimizer_dream_scene_BabylonOptimizeroScene_tsx
  f_src_engin_generated_surfaces_ts --> f_components_overlays_dream_RootStatusScreen_tsx
  f_src_engin_generated_surfaces_ts --> f_components_panels_dream_panel_AlgorithmPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_panels_dream_panel_AppearancePanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_panels_dream_panel_ConnectorsPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_panels_dream_panel_ControlsPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_panels_dream_panel_DataPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_panels_dream_panel_FeedPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_panels_dream_panel_FeedSettingsPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_panels_dream_panel_HelpPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_panels_dream_panel_MarketplacePanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_panels_dream_panel_PrivacyPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_panels_dream_panel_ProfilePanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_panels_dream_panel_SafetyPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_panels_dream_panel_SettingsPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_panels_dream_panel_WidgetsPanel_tsx
  f_src_engin_generated_surfaces_ts --> f_components_panels_panelTypes_ts
  f_src_engin_generated_surfaces_ts --> f_components_profile_dream_EditableAvatar_tsx
  f_src_engin_generated_surfaces_ts --> f_components_profile_dream_ProfileCanvas_tsx
  f_src_engin_generated_surfaces_ts --> f_components_profile_dream_ProfileCustomizeButton_tsx
  f_src_engin_generated_surfaces_ts --> f_components_profile_dream_widget_ProfileWidgetGrid_tsx
  f_src_engin_generated_surfaces_ts --> f_components_providers_dream_AppSurfaceShell_tsx
  f_src_engin_generated_surfaces_ts --> f_components_providers_dream_GodTierProvider_tsx
  f_src_engin_generated_surfaces_ts --> f_components_providers_dream_ThemeProvider_tsx
  f_src_engin_generated_surfaces_ts --> f_components_runtime_dream_DualRuntimeContainer_tsx
  f_src_engin_generated_surfaces_ts --> f_components_runtime_dream_RuntimeView_tsx
  f_src_engin_generated_surfaces_ts --> f_components_runtime_dream_shell_RuntimeShell_tsx
  f_src_engin_generated_surfaces_ts --> f_components_shaders_dream_LightningWing_tsx
  f_src_engin_generated_surfaces_ts --> f_components_shaders_dream_NeonGlow_tsx
  f_src_engin_generated_surfaces_ts --> f_components_shaders_dream_Refractor_tsx
  f_src_engin_generated_surfaces_ts --> f_components_shaders_index_ts
  f_src_engin_generated_surfaces_ts --> f_components_shared_dream_dream_InviteFlow_tsx
  f_src_engin_generated_surfaces_ts --> f_components_shared_dream_dream_SharedDreamCanvas_tsx
  f_src_engin_generated_surfaces_ts --> f_components_shared_dream_dream_SharedDreamProvider_tsx
  f_src_engin_generated_surfaces_ts --> f_components_shared_dream_dream_SharedDreamRuntime_tsx
  f_src_engin_generated_surfaces_ts --> f_components_shared_dream_index_ts
  f_src_engin_generated_surfaces_ts --> f_components_spatial_dream_PixiPhysicsLayer_tsx
  f_src_engin_generated_surfaces_ts --> f_components_spatial_dream_ProfileSpace_tsx
  f_src_engin_generated_surfaces_ts --> f_components_spatial_dream_shell_EnhancedSpatialShell_tsx
  f_src_engin_generated_surfaces_ts --> f_components_three_dream_scene_tsx
  f_src_engin_generated_surfaces_ts --> f_components_three_index_ts
  f_src_engin_generated_surfaces_ts --> f_components_ui_system_CustomizeModeContext_tsx
  f_src_engin_generated_surfaces_ts --> f_components_ui_system_responsive_ts
  f_src_engin_generated_surfaces_ts --> f_components_ui_system_runtimeViewport_ts
  f_src_engin_generated_surfaces_ts --> f_components_ui_system_skin_engine_ts
  f_src_engin_generated_surfaces_ts --> f_components_ui_system_theme_engine_ts
  f_src_engin_generated_surfaces_ts --> f_components_ui_system_theme_ts
  f_src_engin_generated_surfaces_ts --> f_components_ui_dream_AuthenticatedPageHeader_tsx
  f_src_engin_generated_surfaces_ts --> f_components_ui_dream_DreamWord_tsx
  f_src_engin_generated_surfaces_ts --> f_components_ui_dream_IconList_tsx
  f_src_engin_generated_surfaces_ts --> f_components_ui_dream_InfinityIcon_tsx
  f_src_engin_generated_surfaces_ts --> f_components_ui_dream_PlatformBadge_tsx
  f_src_engin_generated_surfaces_ts --> f_components_ui_dream_SheetIcon_tsx
  f_src_engin_generated_surfaces_ts --> f_components_ui_dream_SocialShareSheet_tsx
  f_src_engin_generated_surfaces_ts --> f_components_universal_editor_dream_UniversalEditor_tsx
  f_src_engin_generated_surfaces_ts --> f_components_universal_editor_dream_UniversalEditorWrapper_tsx
  f_src_engin_generated_surfaces_ts --> f_components_universal_editor_index_ts
  f_src_engin_generated_surfaces_ts --> f_components_universal_editor_useTapHoldMove_ts
  f_src_engin_generated_surfaces_ts --> f_components_universe_dream_node_cluster_tsx
  f_src_engin_generated_surfaces_ts --> f_components_universe_dream_shell_universe_shell_tsx
  f_src_engin_generated_surfaces_ts --> f_components_universe_dream_universe_card_tsx
  f_src_engin_generated_surfaces_ts --> f_components_universe_index_ts
  f_src_engin_generated_surfaces_ts --> f_components_warp_dream_WarpCanvas_tsx
  f_src_engin_generated_surfaces_ts --> f_components_webgpu_dream_WebGPUShowcase_tsx
  f_src_engin_generated_surfaces_ts --> f_components_webgpu_neuralPostProcess_ts
  f_src_engin_generated_surfaces_ts --> f_components_webgpu_renderer_ts
  f_src_engin_generated_surfaces_ts --> f_components_webgpu_shaders_ts
  f_src_engin_generated_surfaces_ts --> f_components_widgets_dream_AddDreamCTA_tsx
  f_src_engin_generated_surfaces_ts --> f_components_widgets_dream_ConfigureSheet_tsx
  f_src_engin_generated_surfaces_ts --> f_components_widgets_dream_EditModeBanner_tsx
  f_src_engin_generated_surfaces_ts --> f_components_widgets_dream_EditModeProvider_tsx
  f_src_engin_generated_surfaces_ts --> f_components_widgets_dream_widget_PlayMediaWidget_tsx
  f_src_engin_generated_surfaces_ts --> f_components_widgets_dream_widget_UniversalWidget_tsx
  f_src_engin_generated_surfaces_ts --> f_components_widgets_dream_widget_WidgetCard_tsx
  f_src_engin_generated_surfaces_ts --> f_components_widgets_dream_widget_WidgetLibrary_tsx
  f_src_engin_generated_surfaces_ts --> f_components_widgets_dream_widget_WidgetPlaceholder_tsx
  f_src_engin_generated_surfaces_ts --> f_components_widgets_dream_widget_WidgetShell_tsx
  f_src_engin_generated_surfaces_ts --> f_components_widgets_dream_widget_WidgetSurface_tsx
  f_src_engin_generated_surfaces_ts --> f_coresurfaces_dreamsurface_EditProfileDream_tsx
  f_src_engin_generated_surfaces_ts --> f_coresurfaces_dreamsurface_ViewProfile_tsx
  f_src_engin_generated_surfaces_ts --> f_coresurfaces_home_buttons_button_groups_ts
  f_src_engin_generated_surfaces_ts --> f_coresurfaces_home_buttons_contextual_home_ts
  f_src_engin_generated_surfaces_ts --> f_daydreams_brand_page_tsx
  f_src_engin_generated_surfaces_ts --> f_daydreams_code_page_tsx
  f_src_engin_generated_surfaces_ts --> f_daydreams_create_page_tsx
  f_src_engin_generated_surfaces_ts --> f_daydreams_games_page_tsx
  f_src_engin_generated_surfaces_ts --> f_daydreams_lab_page_tsx
  f_src_engin_generated_surfaces_ts --> f_daydreams_music_page_tsx
  f_src_engin_generated_surfaces_ts --> f_daydreams_shared_useDaydreamPersistence_ts
  f_src_engin_generated_surfaces_ts --> f_daydreams_shared_useDaydreamState_ts
```

</details>

<details><summary>dreamdmbar/ — 17 files</summary>

```mermaid
graph LR
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx["dreamsurface.dreamdmbar.tsx"]
  f_components_ui_dream_DreamWord_tsx["dream.DreamWord.tsx"]
  f_dreamdmbar_dream_GlowingLight_tsx["dream.GlowingLight.tsx"]
  f_dreamdmbar_dream_PhaseTrail_tsx["dream.PhaseTrail.tsx"]
  f_dreamdmbar_runtime_barInteractions_ts["barInteractions.ts"]
  f_dreamdmbar_runtime_DreamSystemContext_tsx["DreamSystemContext.tsx"]
  f_dreamdmbar_hooks_useDreamBarContext_ts["useDreamBarContext.ts"]
  f_dreamdmbar_hooks_useDreamDMConversations_ts["useDreamDMConversations.ts"]
  f_dreamdmbar_hooks_useDreamDMDraft_ts["useDreamDMDraft.ts"]
  f_dreamdmbar_hooks_useDreamDMMessages_ts["useDreamDMMessages.ts"]
  f_dreamdmbar_hooks_useDreamSearch_ts["useDreamSearch.ts"]
  f_dreamdmbar_hooks_useMessagingCore_ts["useMessagingCore.ts"]
  f_dreamdmbar_notifications_useNotifications_ts["useNotifications.ts"]
  f_dreamdmbar_notifications_notificationHelpers_ts["notificationHelpers.ts"]
  f_engins_gameengin_games_useImmersiveGameLayout_ts["useImmersiveGameLayout.ts"]
  f_engins_contentengin_media_ledger_ts["ledger.ts"]
  f_components_ui_system_runtimeViewport_ts["runtimeViewport.ts"]
  f_utils_index_ts["index.ts"]
  f_supabase_client_client_ts["client.ts"]
  f_engine_io_ts["io.ts"]
  f_engine_offline_offlineCache_ts["offlineCache.ts"]
  f_engins_forgeengin_forge_forgeRegistry_ts["forgeRegistry.ts"]
  f_dreamdmbar_hooks_useModuleBarIntent_ts["useModuleBarIntent.ts"]
  f_engine_runtime_offlineQueue_ts["offlineQueue.ts"]
  f_components_panels_panelTypes_ts["panelTypes.ts"]
  f_engine_runtime_dualRuntime_ts["dualRuntime.ts"]
  f_supabase_client_safeGetUser_ts["safeGetUser.ts"]
  f_dreamdmbar_Agents_MUST_READ_ARCHITECTURE_md["Agents-MUST-READ-ARCHITECTURE.md"]
  f_dreamdmbar_hooks_useNotifications_ts["useNotifications.ts"]
  f_dreamdmbar_runtime_bridgeSeamFlow_ts["bridgeSeamFlow.ts"]
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_components_ui_dream_DreamWord_tsx
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_dreamdmbar_dream_GlowingLight_tsx
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_dreamdmbar_dream_PhaseTrail_tsx
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_dreamdmbar_runtime_barInteractions_ts
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_dreamdmbar_runtime_DreamSystemContext_tsx
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_dreamdmbar_hooks_useDreamBarContext_ts
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_dreamdmbar_hooks_useDreamDMConversations_ts
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_dreamdmbar_hooks_useDreamDMDraft_ts
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_dreamdmbar_hooks_useDreamDMMessages_ts
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_dreamdmbar_hooks_useDreamSearch_ts
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_dreamdmbar_hooks_useMessagingCore_ts
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_dreamdmbar_notifications_useNotifications_ts
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_dreamdmbar_notifications_notificationHelpers_ts
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_engins_gameengin_games_useImmersiveGameLayout_ts
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_engins_contentengin_media_ledger_ts
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_components_ui_system_runtimeViewport_ts
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_utils_index_ts
  f_dreamdmbar_dreamsurface_dreamdmbar_tsx --> f_supabase_client_client_ts
  f_dreamdmbar_hooks_useDreamBarContext_ts --> f_dreamdmbar_runtime_DreamSystemContext_tsx
  f_dreamdmbar_hooks_useDreamDMConversations_ts --> f_engine_io_ts
  f_dreamdmbar_hooks_useDreamDMConversations_ts --> f_supabase_client_client_ts
  f_dreamdmbar_hooks_useDreamDMConversations_ts --> f_engine_offline_offlineCache_ts
  f_dreamdmbar_hooks_useDreamDMDraft_ts --> f_engine_offline_offlineCache_ts
  f_dreamdmbar_hooks_useDreamDMMessages_ts --> f_engine_io_ts
  f_dreamdmbar_hooks_useDreamDMMessages_ts --> f_supabase_client_client_ts
  f_dreamdmbar_hooks_useDreamDMMessages_ts --> f_engine_offline_offlineCache_ts
  f_dreamdmbar_hooks_useDreamSearch_ts --> f_engins_forgeengin_forge_forgeRegistry_ts
  f_dreamdmbar_hooks_useDreamSearch_ts --> f_supabase_client_client_ts
  f_dreamdmbar_hooks_useMessagingCore_ts --> f_engins_contentengin_media_ledger_ts
  f_dreamdmbar_hooks_useMessagingCore_ts --> f_supabase_client_client_ts
  f_dreamdmbar_hooks_useMessagingCore_ts --> f_dreamdmbar_hooks_useDreamDMMessages_ts
  f_dreamdmbar_hooks_useMessagingCore_ts --> f_utils_index_ts
  f_dreamdmbar_hooks_useModuleBarIntent_ts --> f_dreamdmbar_runtime_DreamSystemContext_tsx
  f_dreamdmbar_notifications_useNotifications_ts --> f_dreamdmbar_notifications_notificationHelpers_ts
  f_dreamdmbar_notifications_useNotifications_ts --> f_utils_index_ts
  f_dreamdmbar_notifications_useNotifications_ts --> f_engine_offline_offlineCache_ts
  f_dreamdmbar_notifications_useNotifications_ts --> f_engine_runtime_offlineQueue_ts
  f_dreamdmbar_runtime_DreamSystemContext_tsx --> f_dreamdmbar_runtime_barInteractions_ts
  f_dreamdmbar_runtime_DreamSystemContext_tsx --> f_components_panels_panelTypes_ts
  f_dreamdmbar_runtime_DreamSystemContext_tsx --> f_engine_runtime_dualRuntime_ts
  f_dreamdmbar_runtime_DreamSystemContext_tsx --> f_supabase_client_client_ts
  f_dreamdmbar_runtime_DreamSystemContext_tsx --> f_engine_offline_offlineCache_ts
  f_dreamdmbar_runtime_DreamSystemContext_tsx --> f_supabase_client_safeGetUser_ts
```

</details>

<details><summary>types/ — 19 files</summary>

```mermaid
graph LR
  f_types_dream_window_ts["dream-window.ts"]
  f_engine_dream_window_DreamWindowLifecycle_ts["DreamWindowLifecycle.ts"]
  f_types_module_manifest_ts["module-manifest.ts"]
  f_engine_engin_runtime_EnginBaseState_ts["EnginBaseState.ts"]
  f_types_Agents_MUST_READ_ARCHITECTURE_md["Agents-MUST-READ-ARCHITECTURE.md"]
  f_types_ads_ts["ads.ts"]
  f_types_ai_system_ts["ai-system.ts"]
  f_types_ai_ts["ai.ts"]
  f_types_ccc_ts["ccc.ts"]
  f_types_connector_ts["connector.ts"]
  f_types_dreamArtifact_ts["dreamArtifact.ts"]
  f_types_experience_ts["experience.ts"]
  f_types_journey_ts["journey.ts"]
  f_types_marketplace_ts["marketplace.ts"]
  f_types_rivet_dev_agent_os_d_ts["rivet-dev-agent-os.d.ts"]
  f_types_spatial_ts["spatial.ts"]
  f_types_supabase_ts["supabase.ts"]
  f_types_user_sim_ts["user-sim.ts"]
  f_types_widget_system_v2_ts["widget-system-v2.ts"]
  f_types_widgetConfigs_ts["widgetConfigs.ts"]
  f_types_widgets_ts["widgets.ts"]
  f_types_dream_window_ts --> f_engine_dream_window_DreamWindowLifecycle_ts
  f_types_module_manifest_ts --> f_engine_engin_runtime_EnginBaseState_ts
```

</details>

<details><summary>dr-eams/ — 26 files</summary>

```mermaid
graph LR
  f_dr_eams_ai_audit_ts["audit.ts"]
  f_dr_eams_ai_boogie_policy_ts["boogie-policy.ts"]
  f_supabase_server_serverClient_ts["serverClient.ts"]
  f_dr_eams_ai_boogie_verifier_ts["boogie-verifier.ts"]
  f_types_ai_system_ts["ai-system.ts"]
  f_dr_eams_ai_boogieman_ts["boogieman.ts"]
  f_dr_eams_ai_schemas_ts["schemas.ts"]
  f_dr_eams_ai_capability_gate_ts["capability-gate.ts"]
  f_dr_eams_ai_triad_ts["triad.ts"]
  f_supabase_client_safeGetUser_ts["safeGetUser.ts"]
  f_dr_eams_ai_confirm_token_ts["confirm-token.ts"]
  f_dr_eams_ai_handlers_dreams_ts["dreams.ts"]
  f_dr_eams_ai_tool_router_ts["tool-router.ts"]
  f_dr_eams_ai_handlers_index_ts["index.ts"]
  f_dr_eams_ai_handlers_navigation_ts["navigation.ts"]
  f_dr_eams_ai_handlers_social_ts["social.ts"]
  f_dr_eams_ai_idempotency_ts["idempotency.ts"]
  f_dr_eams_ai_rate_limiter_ts["rate-limiter.ts"]
  f_dr_eams_ai_rateLimit_ts["rateLimit.ts"]
  f_engine_io_ts["io.ts"]
  f_utils_index_ts["index.ts"]
  f_dr_eams_ai_groq_ts["groq.ts"]
  f_dr_eams_Agents_MUST_READ_ARCHITECTURE_md["Agents-MUST-READ-ARCHITECTURE.md"]
  f_dr_eams_ai_CIC_ts["CIC.ts"]
  f_dr_eams_ai_client_ts["client.ts"]
  f_dr_eams_ai_confirm_ts["confirm.ts"]
  f_dr_eams_ai_tfBackend_ts["tfBackend.ts"]
  f_dr_eams_animation_DrEamsAnimator_ts["DrEamsAnimator.ts"]
  f_dr_eams_capabilities_yaml["capabilities.yaml"]
  f_dr_eams_search_drEamsSearch_ts["drEamsSearch.ts"]
  f_dr_eams_tools_ts["tools.ts"]
  f_dr_eams_ai_audit_ts --> f_dr_eams_ai_boogie_policy_ts
  f_dr_eams_ai_audit_ts --> f_supabase_server_serverClient_ts
  f_dr_eams_ai_boogie_verifier_ts --> f_supabase_server_serverClient_ts
  f_dr_eams_ai_boogie_verifier_ts --> f_types_ai_system_ts
  f_dr_eams_ai_boogieman_ts --> f_dr_eams_ai_boogie_policy_ts
  f_dr_eams_ai_boogieman_ts --> f_dr_eams_ai_schemas_ts
  f_dr_eams_ai_capability_gate_ts --> f_dr_eams_ai_triad_ts
  f_dr_eams_ai_capability_gate_ts --> f_supabase_server_serverClient_ts
  f_dr_eams_ai_capability_gate_ts --> f_supabase_client_safeGetUser_ts
  f_dr_eams_ai_capability_gate_ts --> f_types_ai_system_ts
  f_dr_eams_ai_confirm_token_ts --> f_supabase_server_serverClient_ts
  f_dr_eams_ai_confirm_token_ts --> f_types_ai_system_ts
  f_dr_eams_ai_handlers_dreams_ts --> f_types_ai_system_ts
  f_dr_eams_ai_handlers_dreams_ts --> f_dr_eams_ai_tool_router_ts
  f_dr_eams_ai_handlers_index_ts --> f_dr_eams_ai_tool_router_ts
  f_dr_eams_ai_handlers_index_ts --> f_dr_eams_ai_handlers_navigation_ts
  f_dr_eams_ai_handlers_index_ts --> f_dr_eams_ai_handlers_dreams_ts
  f_dr_eams_ai_handlers_index_ts --> f_dr_eams_ai_handlers_social_ts
  f_dr_eams_ai_handlers_navigation_ts --> f_types_ai_system_ts
  f_dr_eams_ai_handlers_navigation_ts --> f_dr_eams_ai_tool_router_ts
  f_dr_eams_ai_handlers_social_ts --> f_types_ai_system_ts
  f_dr_eams_ai_handlers_social_ts --> f_dr_eams_ai_tool_router_ts
  f_dr_eams_ai_idempotency_ts --> f_supabase_server_serverClient_ts
  f_dr_eams_ai_rate_limiter_ts --> f_supabase_server_serverClient_ts
  f_dr_eams_ai_rateLimit_ts --> f_supabase_server_serverClient_ts
  f_dr_eams_ai_tool_router_ts --> f_engine_io_ts
  f_dr_eams_ai_tool_router_ts --> f_types_ai_system_ts
  f_dr_eams_ai_tool_router_ts --> f_dr_eams_ai_audit_ts
  f_dr_eams_ai_tool_router_ts --> f_utils_index_ts
  f_dr_eams_ai_triad_ts --> f_dr_eams_ai_groq_ts
  f_dr_eams_ai_triad_ts --> f_dr_eams_ai_schemas_ts
```

</details>

<details><summary>scripts/ — 57 files</summary>

```mermaid
graph LR
  f_scripts_check_orphans_mjs["check-orphans.mjs"]
  f_scripts_wire_orphans_mjs["wire-orphans.mjs"]
  f_scripts_gameengin_smoke_webgl_ts["smoke-webgl.ts"]
  f_engins_gameengin_cartridges_manifest_ts["manifest.ts"]
  f_scripts_gameengin_smoke_webgpu_ts["smoke-webgpu.ts"]
  f_scripts_generate_readme_ts["generate-readme.ts"]
  f_scripts_readme_autosync_ts["readme-autosync.ts"]
  f_scripts_update_readme_mjs["update-readme.mjs"]
  f_scripts_update_readme_status_utils_mjs["update-readme-status-utils.mjs"]
  f_scripts_Agents_MUST_READ_ARCHITECTURE_md["Agents-MUST-READ-ARCHITECTURE.md"]
  f_scripts_archive_validate_deployment_js["validate-deployment.js"]
  f_scripts_autofix_vercel_build_mjs["autofix-vercel-build.mjs"]
  f_scripts_center_audit_mjs["center-audit.mjs"]
  f_scripts_check_build_memory_drift_mjs["check-build-memory-drift.mjs"]
  f_scripts_check_engin_filenames_mjs["check-engin-filenames.mjs"]
  f_scripts_check_licenses_mjs["check-licenses.mjs"]
  f_scripts_check_root_hygiene_mjs["check-root-hygiene.mjs"]
  f_scripts_close_all_open_prs_sh["close-all-open-prs.sh"]
  f_scripts_contentengin_blender_add_basic_animations_py["blender-add-basic-animations.py"]
  f_scripts_contentengin_blender_auto_rig_py["blender-auto-rig.py"]
  f_scripts_contentengin_blender_cleanup_py["blender-cleanup.py"]
  f_scripts_contentengin_blender_validate_rig_py["blender-validate-rig.py"]
  f_scripts_contentengin_generate_test_assets_mjs["generate-test-assets.mjs"]
  f_scripts_contentengin_validate_glb_mjs["validate-glb.mjs"]
  f_scripts_deploy_sh["deploy.sh"]
  f_scripts_export_full_code_mjs["export-full-code.mjs"]
  f_scripts_feature_build_generate_features_mjs["generate-features.mjs"]
  f_scripts_fix_audit_js["fix-audit.js"]
  f_scripts_gameengin_architect_run_ts["architect-run.ts"]
  f_scripts_gameengin_artisan_run_ts["artisan-run.ts"]
  f_scripts_gameengin_lib_tar_ts["tar.ts"]
  f_scripts_gameengin_maestro_analyze_ts["maestro-analyze.ts"]
  f_scripts_gameengin_mechanic_run_ts["mechanic-run.ts"]
  f_scripts_gameengin_package_cartridge_ts["package-cartridge.ts"]
  f_scripts_gameengin_prophet_run_ts["prophet-run.ts"]
  f_scripts_gameengin_upgrader_run_ts["upgrader-run.ts"]
  f_scripts_gameengin_writer_run_ts["writer-run.ts"]
  f_scripts_generate_mobile_nextgen_spec_mjs["generate-mobile-nextgen-spec.mjs"]
  f_scripts_generate_mobile_ps5_spec_mjs["generate-mobile-ps5-spec.mjs"]
  f_scripts_generate_repo_state_mjs["generate-repo-state.mjs"]
  f_scripts_generate_webapp_final_form_mjs["generate-webapp-final-form.mjs"]
  f_scripts_law_check_sh["law-check.sh"]
  f_scripts_migrate_imports_sh["migrate-imports.sh"]
  f_scripts_optimize_dreamengin_mjs["optimize-dreamengin.mjs"]
  f_scripts_postbuild_js["postbuild.js"]
  f_scripts_postbuild_ts["postbuild.ts"]
  f_scripts_repository_state_analysis_section_mjs["repository-state-analysis-section.mjs"]
  f_scripts_score_pass_cjs["score-pass.cjs"]
  f_scripts_setup_database_sql["setup-database.sql"]
  f_scripts_spec_check_cjs["spec-check.cjs"]
  f_scripts_sync_build_memory_mjs["sync-build-memory.mjs"]
  f_scripts_ui_ux_agent_py["ui-ux-agent.py"]
  f_scripts_update_bugs_mjs["update-bugs.mjs"]
  f_scripts_update_embed_feed_mjs["update-embed-feed.mjs"]
  f_scripts_update_handoff_mjs["update-handoff.mjs"]
  f_scripts_validate_schema_sync_sh["validate-schema-sync.sh"]
  f_scripts_vercel_ignore_cjs["vercel-ignore.cjs"]
  f_scripts_vercel_preflight_cjs["vercel-preflight.cjs"]
  f_scripts_check_orphans_mjs --> f_scripts_wire_orphans_mjs
  f_scripts_gameengin_smoke_webgl_ts --> f_engins_gameengin_cartridges_manifest_ts
  f_scripts_gameengin_smoke_webgpu_ts --> f_engins_gameengin_cartridges_manifest_ts
  f_scripts_generate_readme_ts --> f_scripts_readme_autosync_ts
  f_scripts_update_readme_mjs --> f_scripts_update_readme_status_utils_mjs
```

</details>

<details><summary>tests/ — 246 files</summary>

_File-level graph omitted: 246 files exceeds Mermaid render budget. See table above._

</details>

<details><summary>app/ — 277 files</summary>

_File-level graph omitted: 277 files exceeds Mermaid render budget. See table above._

</details>

<details><summary>components/ — 328 files</summary>

_File-level graph omitted: 328 files exceeds Mermaid render budget. See table above._

</details>

<details><summary>engins/ — 366 files</summary>

_File-level graph omitted: 366 files exceeds Mermaid render budget. See table above._

</details>


#### Orphan Files (floating/disconnected)
| Path | Type |
|---|---|
| `_manifest.json` | config |
| `.ci/DREAMengin CI-CD Pipeline` | file |
| `.ci/snapshot.diff.txt` | doc |
| `.ci/snapshot.md` | doc |
| `.cursorrules` | file |
| `.env.example` | file |
| `.env.local.example` | file |
| `.github/actions/resilient-engine/action.yml` | config |
| `.github/actions/setup-node/action.yml` | config |
| `.github/agents/dreamengin.agent.md` | doc |
| `.github/agents/error-tracker.agent.md` | doc |
| `.github/agents/gameengin-ai-agent.yml` | config |
| `.github/agents/gameengin.md` | doc |
| `.github/agents/humanAI.agent.md` | doc |
| `.github/agents/idari.agent.md` | doc |
| `.github/agents/my-agent.agent.md` | doc |
| `.github/agents/newagent.agent.md` | doc |
| `.github/agents/Spec-Engin HyperSICC.agent.md` | doc |
| `.github/agents/videogameAi.md` | doc |
| `.github/copilot-instructions.md` | doc |
| `.github/issue-triage/issue-552.md` | doc |
| `.github/issue-triage/issue-556.md` | doc |
| `.github/issue-triage/issue-560.md` | doc |
| `.github/issue-triage/issue-565.md` | doc |
| `.github/issue-triage/issue-571.md` | doc |
| `.github/issue-triage/issue-573.md` | doc |
| `.github/issue-triage/issue-600.md` | doc |
| `.github/issue-triage/issue-601.md` | doc |
| `.github/issue-triage/issue-602.md` | doc |
| `.github/issue-triage/issue-603.md` | doc |
| `.github/issue-triage/issue-604.md` | doc |
| `.github/issue-triage/issue-605.md` | doc |
| `.github/issue-triage/issue-606.md` | doc |
| `.github/issue-triage/issue-607.md` | doc |
| `.github/issue-triage/issue-608.md` | doc |
| `.github/issue-triage/issue-609.md` | doc |
| `.github/issue-triage/issue-610.md` | doc |
| `.github/issue-triage/issue-611.md` | doc |
| `.github/issue-triage/issue-612.md` | doc |
| `.github/issue-triage/issue-613.md` | doc |
| `.github/issue-triage/issue-617.md` | doc |
| `.github/issue-triage/issue-620.md` | doc |
| `.github/issue-triage/issue-621.md` | doc |
| `.github/issue-triage/issue-622.md` | doc |
| `.github/issue-triage/issue-623.md` | doc |
| `.github/issue-triage/issue-647.md` | doc |
| `.github/issue-triage/issue-753.md` | doc |
| `.github/issue-triage/issue-754.md` | doc |
| `.github/pull_request_template.md` | doc |
| `.github/PULL_REQUEST_TEMPLATE.md` | doc |
| `.github/ruleset/autofixvercelbuild.yml` | config |
| `.github/ruleset/bot-pr-automerge.yml` | config |
| `.github/ruleset/bouncer.yml` | config |
| `.github/ruleset/copilot-setup-steps.yml` | config |
| `.github/ruleset/daydream-all.yml` | config |
| `.github/ruleset/daydream-brand-engin.yml` | config |
| `.github/ruleset/daydream-code-engin.yml` | config |
| `.github/ruleset/daydream-create-engin.yml` | config |
| `.github/ruleset/daydream-engin-build-cycle.yml` | config |
| `.github/ruleset/daydream-engin-sicc-refinement.yml` | config |
| `.github/ruleset/daydream-games-engin.yml` | config |
| `.github/ruleset/daydream-lab-engin.yml` | config |
| `.github/ruleset/daydream-music-engin.yml` | config |
| `.github/ruleset/db-extension-audit.yml` | config |
| `.github/ruleset/db-extension-check.yml` | config |
| `.github/ruleset/deploy-artifact.yml` | config |
| `.github/ruleset/docs-auto-update.yml` | config |
| `.github/ruleset/dreamengin-preflight.yml` | config |
| `.github/ruleset/elite-gameengin-evolution.yml` | config |
| `.github/ruleset/engin-all.yml` | config |
| `.github/ruleset/exportrepo.yml` | config |
| `.github/ruleset/game-engin-patrol.yml` | config |
| `.github/ruleset/game-library-research.yml` | config |
| `.github/ruleset/gameengin-ai-agent.yml` | config |
| `.github/ruleset/gameengin-artisan.yml` | config |
| `.github/ruleset/gameengin-maestro.yml` | config |
| `.github/ruleset/gameengin-mechanic.yml` | config |
| `.github/ruleset/gameengin-prophet.yml` | config |
| `.github/ruleset/gameengin-upgrader.yml` | config |
| `.github/ruleset/gameengin-writer.yml` | config |
| `.github/ruleset/games-library-ai-agent.yml` | config |
| `.github/ruleset/garbageman.yml` | config |
| `.github/ruleset/generatesupabasetypes.yml` | config |
| `.github/ruleset/github-actions.yml` | config |
| `.github/ruleset/humanai-army-audit.yml` | config |
| `.github/ruleset/humanai-audit.yml` | config |
| `.github/ruleset/idari-daily.yml` | config |
| `.github/ruleset/issue-bot.yml` | config |
| `.github/ruleset/mobile-nextgen-spec-evolution.yml` | config |
| `.github/ruleset/mobile-ps5-spec-evolution.yml` | config |
| `.github/ruleset/neural-decision-engine.yml` | config |
| `.github/ruleset/optimize-dreamengin.yml` | config |
| `.github/ruleset/portfolio-optimization.yml` | config |
| `.github/ruleset/preflight.yml` | config |
| `.github/ruleset/print-codebase.yml` | config |
| `.github/ruleset/readme-autosync.yml` | config |
| `.github/ruleset/refreshlock.yml` | config |
| `.github/ruleset/repo-snapshot.yml` | config |
| `.github/ruleset/report-driven-coding-agent.yml` | config |
| `.github/ruleset/root-hygiene.yml` | config |
| `.github/ruleset/spec-engin-ai-agent.yml` | config |
| `.github/ruleset/sql-migration-guard.yml` | config |
| `.github/ruleset/sync-build-memory.yml` | config |
| `.github/ruleset/update-embed-feed.yml` | config |
| `.github/ruleset/update-repo-state.yml` | config |
| `.github/ruleset/vercel-deploy.yml` | config |
| `.github/scripts/ai_implement.py` | python |
| `.github/scripts/ai_neural_decision.py` | python |
| `.github/scripts/ai_propose.py` | python |
| `.github/scripts/ai_report_propose.py` | python |
| `.github/scripts/analyze-repo.js` | js |
| `.github/scripts/assemble_report_context.py` | python |
| `.github/scripts/catalog_games_for_ai.py` | python |
| `.github/scripts/check_workflow_masking.py` | python |
| `.github/scripts/check-root-hygiene.sh` | file |
| `.github/scripts/DREAMENGIN_CORE_COMPLETE.md` | doc |
| `.github/scripts/DREAMENGIN_CORE_USAGE.md` | doc |
| `.github/scripts/dreamengin_core.py` | python |
| `.github/scripts/humanai_audit.py` | python |
| `.github/scripts/issue-bot.js` | js |
| `.github/scripts/run-readme-autosync.mjs` | mjs |
| `.github/scripts/scan_dreamengin_context.py` | python |
| `.github/scripts/scan_gameengin_context.py` | python |
| `.github/scripts/validate_game_sandbox.py` | python |
| `.github/scripts/validate_report_agent_spec.py` | python |
| `.gitignore` | file |
| `.gitleaks.toml` | config |
| `Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `AGENTS.md` | doc |
| `agents/.gitkeep` | file |
| `agents/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `agents/humanAI.persona.md` | doc |
| `agents/humanAI/orchestrator.md` | doc |
| `agents/humanAI/personas/accessibility.md` | doc |
| `agents/humanAI/personas/creator.md` | doc |
| `agents/humanAI/personas/ios-first.md` | doc |
| `agents/humanAI/personas/power-user.md` | doc |
| `agents/humanAI/personas/social-explorer.md` | doc |
| `app/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `app/error.tsx` | tsx |
| `app/global-error.tsx` | tsx |
| `app/globals-enhanced.css` | css |
| `app/loading.tsx` | tsx |
| `app/not-found.tsx` | tsx |
| `Architecture Vision vs Engineering Blueprint.md` | doc |
| `ARCHITECTURE.md` | doc |
| `assembly/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `assembly/bus.ts` | ts |
| `assembly/index.ts` | ts |
| `assembly/mad-maxi-player.ts` | ts |
| `build-memory/actions.json` | config |
| `build-memory/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `build-memory/events.json` | config |
| `build-memory/os-architecture-map.md` | doc |
| `build-memory/routes.json` | config |
| `build-memory/schema.json` | config |
| `build-memory/typecheck/error-files.txt` | doc |
| `build-memory/ui-surfaces.json` | config |
| `CHANGELOG.md` | doc |
| `components/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `components/gameengin/README.md` | doc |
| `components/games/css-modules.d.ts` | ts |
| `components/games/dream.GameController.module.css` | css |
| `config/advanced-game-targets.json` | config |
| `config/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `config/optimizer.yaml` | config |
| `config/ui-ux-spec.yaml` | config |
| `CONTENTenginSPEC.md` | doc |
| `COOP_AND_SOLO_ROADMAP.md` | doc |
| `COREARCHITECTURE.md` | doc |
| `COREBUILDPLAN.md` | doc |
| `COREENGINS.md` | doc |
| `CORERUNTIME.md` | doc |
| `coresurfaces/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `COREUX.md` | doc |
| `COREVISION.md` | doc |
| `daydreams/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `deepseek_json_20260701_3ac1d7.json` | config |
| `docs/ACTION_AUDIT.md` | doc |
| `docs/ACTIVITY_FIRST_PROTOCOL.md` | doc |
| `docs/ADD_WORKFLOW.md` | doc |
| `docs/AGENT_PLAYBOOK.md` | doc |
| `docs/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `docs/AI_MAP.md` | doc |
| `docs/alignment/DOCS_CHANGE_TRACKER.md` | doc |
| `docs/alignment/REPO_TO_SPEC.md` | doc |
| `docs/ARCHITECTURE.md` | doc |
| `docs/archive/.gitkeep` | file |
| `docs/AUTH_SETUP.md` | doc |
| `docs/AXIOMS.md` | doc |
| `docs/BOOGIEMAN_POLICY.md` | doc |
| `docs/BUGS.md` | doc |
| `docs/CHILD_SAFETY_POLICY.md` | doc |
| `docs/CONNECTOR_MATRIX.md` | doc |
| `docs/CONNECTORS.md` | doc |
| `docs/CONSTITUTION.md` | doc |
| `docs/COPILOT_TOOLKIT.md` | doc |
| `docs/DR_EAMS.md` | doc |
| `docs/dream-docs/index.ts` | ts |
| `docs/dreamdm_bar_pass1.md` | doc |
| `docs/dreamdm_bar_pass2.md` | doc |
| `docs/dreamdm_messaging_phase2.md` | doc |
| `docs/dreamengin_phase1.md` | doc |
| `docs/dreamengin_phase6.md` | doc |
| `docs/dreamengin_phase8.md` | doc |
| `docs/DREAMGAME_FORMAT.md` | doc |
| `docs/DUALSENSE_EXAMPLE.md` | doc |
| `docs/DUALSENSE_INTEGRATION.md` | doc |
| `docs/ENGIN_RUNTIME.md` | doc |
| `docs/engin_workflows.md` | doc |
| `docs/engineering/guardrails.md` | doc |
| `docs/enginpipe/README.md` | doc |
| `docs/FEATURE_STATUS.md` | doc |
| `docs/GENERATION_LAW.md` | doc |
| `docs/GITHUB_CODING_AGENT.md` | doc |
| `docs/GOLD_BUTTON_DUAL_RUNTIME.md` | doc |
| `docs/GOLD_BUTTON_QUICK_REF.md` | doc |
| `docs/guides/GITHUB_PUSH_GUIDE.md` | doc |
| `docs/guides/README.agent.md` | doc |
| `docs/HANDOFF.md` | doc |
| `docs/icons.md` | doc |
| `docs/ICOSAHEDRAL_WEBAPP_FORGE_PLAN.md` | doc |
| `docs/IDARI_CONTRACT.md` | doc |
| `docs/ISSUE_FIXES.md` | doc |
| `docs/issue-552-readme-section-bot-ai-agent-quick-reference.md` | doc |
| `docs/issue-556-readme-section-bot-canonical-route-system.md` | doc |
| `docs/issue-560-readme-section-bot-runtime-model.md` | doc |
| `docs/issue-565-readme-section-bot-3-os-layer-naming-law-canonic.md` | doc |
| `docs/issue-571-readme-section-bot-9-daydream-pair-system-6-dayd.md` | doc |
| `docs/issue-573-readme-section-bot-11-games-gameengin.md` | doc |
| `docs/issue-600-readme-section-bot-recent-changes.md` | doc |
| `docs/issue-601-readme-section-bot-repository-state-analysis.md` | doc |
| `docs/issue-602-readme-section-bot-homedream-system.md` | doc |
| `docs/issue-603-readme-section-bot-core-surfaces.md` | doc |
| `docs/issue-604-readme-section-bot-current-implementation-status.md` | doc |
| `docs/issue-605-readme-section-bot-daydream-surfaces.md` | doc |
| `docs/issue-606-readme-section-bot-daydream-engin-network-model.md` | doc |
| `docs/issue-607-readme-section-bot-dreamdmbar-interaction-rail-r.md` | doc |
| `docs/issue-608-readme-section-bot-1-product-law-16-foundational.md` | doc |
| `docs/issue-609-readme-section-bot-6-homedream-core-system-priva.md` | doc |
| `docs/issue-610-readme-section-bot-10-music-starmakerengin.md` | doc |
| `docs/issue-611-readme-section-bot-12-lab-labengin.md` | doc |
| `docs/issue-612-readme-section-bot-13-code-codeengin.md` | doc |
| `docs/issue-613-readme-section-bot-7-edit-profiledream-core-syst.md` | doc |
| `docs/issue-617-readme-section-bot-8-view-profile-public-shared-.md` | doc |
| `docs/issue-620-readme-section-bot-what-this-is.md` | doc |
| `docs/issue-621-readme-section-bot-start-here.md` | doc |
| `docs/issue-622-readme-section-bot-structure.md` | doc |
| `docs/issue-623-readme-section-bot-root-rules.md` | doc |
| `docs/issue-647-readme-section-bot-how-to-regenerate-this-spec.md` | doc |
| `docs/LAW.md` | doc |
| `docs/logs/README_PATCH.md` | doc |
| `docs/mobile-nextgen-web-gaming-engine-spec.md` | doc |
| `docs/mobile-ps5-web-gaming-engine-spec.md` | doc |
| `docs/MODULARITY_VIOLATION_LOG.md` | doc |
| `docs/NAMESPACE_PROTOCOL.md` | doc |
| `docs/NAMING_AUTHORITY.md` | doc |
| `docs/OBSERVABILITY.md` | doc |
| `docs/PHASE9_IMPLEMENTATION.md` | doc |
| `docs/POLICY_TESTS.md` | doc |
| `docs/policy/theboogie.md` | doc |
| `docs/PRINCIPLES_UPDATE.md` | doc |
| `docs/PRODUCT_DEFINITION.md` | doc |
| `docs/REPO_COMPANION.md` | doc |
| `docs/REPO_STATE_ANALYZER.md` | doc |
| `docs/REPO_STRUCTURE_CONTRACT.md` | doc |
| `docs/REVIEW_QUEUE.md` | doc |
| `docs/SECURITY.md` | doc |
| `docs/THEME.md` | doc |
| `docs/TRIAGE_LOG.md` | doc |
| `docs/UNIVERSAL_ENGINE.md` | doc |
| `docs/wasm_gpu_vm_spec.md` | doc |
| `docs/WASM_GPU_VM_SUMMARY.md` | doc |
| `docs/WIDGET_SYSTEM_V2.md` | doc |
| `dr-eams/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `dr-eams/ai/boogie-verifier.ts` | ts |
| `dr-eams/ai/CIC.ts` | ts |
| `dr-eams/ai/client.ts` | ts |
| `dr-eams/ai/handlers/index.ts` | ts |
| `dr-eams/ai/tfBackend.ts` | ts |
| `dr-eams/capabilities.yaml` | config |
| `dr-eams/tools.ts` | ts |
| `dreamdmbar/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `Dreamengin.names.json` | config |
| `dreamr/activity/boogieActivityPolicy.ts` | ts |
| `dreamr/bot-detection/detector.ts` | ts |
| `dreamr/bot-detection/view-tally.ts` | ts |
| `dreamr/runtime/socialHumanityScore.ts` | ts |
| `dreamr/torridity/index.ts` | ts |
| `engine/agents/adari.ts` | ts |
| `engine/agents/dreamengin.ts` | ts |
| `engine/assets/engineAssets.ts` | ts |
| `engine/bus.wasm` | file |
| `engine/connectors/providers/devto.ts` | ts |
| `engine/connectors/providers/facebook.ts` | ts |
| `engine/connectors/providers/hackernews.ts` | ts |
| `engine/connectors/providers/medium.ts` | ts |
| `engine/connectors/providers/pinterest.ts` | ts |
| `engine/connectors/providers/podcast.ts` | ts |
| `engine/connectors/providers/substack.ts` | ts |
| `engine/connectors/providers/tiktok.ts` | ts |
| `engine/connectors/providers/tumblr.ts` | ts |
| `engine/connectors/providers/twitter.ts` | ts |
| `engine/connectors/youtube.ts` | ts |
| `engine/consent/consentManager.ts` | ts |
| `engine/dream-window/index.ts` | ts |
| `engine/dreamnav/gctAssist.ts` | ts |
| `engine/dreamnav/gestures6.ts` | ts |
| `engine/gestures/useTouchGestures.ts` | ts |
| `engine/journey/withJourney.ts` | ts |
| `engine/navigation/index.ts` | ts |
| `engine/navigation/README.md` | doc |
| `engine/observability/healthTrend.ts` | ts |
| `engine/observability/index.ts` | ts |
| `engine/offline/useOfflineSync.ts` | ts |
| `engine/platform/index.ts` | ts |
| `engine/reality/realityStore.ts` | ts |
| `engine/rendering/babylon/dreamengine-hybrid.ts` | ts |
| `engine/rendering/renderer/index.ts` | ts |
| `engine/rendering/webgpu/useWebGPUDirector.ts` | ts |
| `engine/runtime/dreamsurface/index.ts` | ts |
| `engine/runtime/quantumCircuit.ts` | ts |
| `engine/runtime/snapshotFingerprint.ts` | ts |
| `engine/runtime/useDragSurface.ts` | ts |
| `engine/runtime/useDualRuntime.ts` | ts |
| `engine/runtime/useDualRuntimePersistence.ts` | ts |
| `engine/social/useSocialData.ts` | ts |
| `engine/vm/index.ts` | ts |
| `engine/vm/README.md` | doc |
| `engine/web3/index.ts` | ts |
| `engine/widgets/CrossWidgetPosting.ts` | ts |
| `engine/widgets/parse.ts` | ts |
| `engine/widgets/useWidget.ts` | ts |
| `engine/widgets/WidgetEngine.tsx` | tsx |
| `engins/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `engins/contentengin/rigging/templates/bird_basic.json` | config |
| `engins/contentengin/rigging/templates/fish_basic.json` | config |
| `engins/contentengin/rigging/templates/humanoid_basic.json` | config |
| `engins/contentengin/rigging/templates/quadruped_basic.json` | config |
| `engins/contentengin/rigging/templates/vehicle_mechanical.json` | config |
| `engins/gameengin/brain/active-projects.json` | config |
| `engins/gameengin/brain/asset-registry/README.md` | doc |
| `engins/gameengin/brain/build-history/README.md` | doc |
| `engins/gameengin/brain/character-voices/mad-maxi.json` | config |
| `engins/gameengin/brain/composition-principles/leading-lines-landmark.json` | config |
| `engins/gameengin/brain/composition-principles/parallax-layers.json` | config |
| `engins/gameengin/brain/concept-library/neon-courier.json` | config |
| `engins/gameengin/brain/concept-library/README.md` | doc |
| `engins/gameengin/brain/concept-patterns/protagonists/reluctant-courier.json` | config |
| `engins/gameengin/brain/concept-patterns/README.md` | doc |
| `engins/gameengin/brain/concept-patterns/scope-formulas/one-day-runner.json` | config |
| `engins/gameengin/brain/concept-patterns/settings/neon-rain-megacity.json` | config |
| `engins/gameengin/brain/crash-reports/README.md` | doc |
| `engins/gameengin/brain/dialogue-patterns/callback-anchor.json` | config |
| `engins/gameengin/brain/dialogue-patterns/implied-subject.json` | config |
| `engins/gameengin/brain/dialogue-patterns/sentence-fragment-rhythm.json` | config |
| `engins/gameengin/brain/emotional-tones/determined.json` | config |
| `engins/gameengin/brain/emotional-tones/fierce.json` | config |
| `engins/gameengin/brain/emotional-tones/hopeful.json` | config |
| `engins/gameengin/brain/emotional-tones/reflective.json` | config |
| `engins/gameengin/brain/emotional-tones/weary.json` | config |
| `engins/gameengin/brain/fun-heuristics/meta-progression.json` | config |
| `engins/gameengin/brain/fun-heuristics/moment-to-moment.json` | config |
| `engins/gameengin/brain/fun-heuristics/session-loop.json` | config |
| `engins/gameengin/brain/genre-dna/action-rpg.json` | config |
| `engins/gameengin/brain/genre-dna/episodic.json` | config |
| `engins/gameengin/brain/genre-dna/live-service.json` | config |
| `engins/gameengin/brain/genre-dna/metroidvania.json` | config |
| `engins/gameengin/brain/genre-dna/open-world.json` | config |
| `engins/gameengin/brain/genre-dna/platformer.json` | config |
| `engins/gameengin/brain/genre-dna/puzzle.json` | config |
| `engins/gameengin/brain/genre-dna/racing.json` | config |
| `engins/gameengin/brain/genre-dna/roguelike.json` | config |
| `engins/gameengin/brain/genre-dna/sandbox.json` | config |
| `engins/gameengin/brain/genre-dna/template.json` | config |
| `engins/gameengin/brain/inspiration-corpus/celeste.json` | config |
| `engins/gameengin/brain/inspiration-corpus/dead-cells.json` | config |
| `engins/gameengin/brain/inspiration-corpus/hades.json` | config |
| `engins/gameengin/brain/inspiration-corpus/hollow-knight.json` | config |
| `engins/gameengin/brain/inspiration-corpus/outer-wilds.json` | config |
| `engins/gameengin/brain/material-recipes/neon-glass-tube.json` | config |
| `engins/gameengin/brain/material-recipes/rusted-iron.json` | config |
| `engins/gameengin/brain/material-recipes/sun-bleached-sandstone.json` | config |
| `engins/gameengin/brain/mechanic-library/camera/look-ahead.json` | config |
| `engins/gameengin/brain/mechanic-library/camera/screen-shake.json` | config |
| `engins/gameengin/brain/mechanic-library/camera/smooth-follow.json` | config |
| `engins/gameengin/brain/mechanic-library/combat/combo.json` | config |
| `engins/gameengin/brain/mechanic-library/combat/hit-stop.json` | config |
| `engins/gameengin/brain/mechanic-library/combat/parry.json` | config |
| `engins/gameengin/brain/mechanic-library/combat/ranged.json` | config |
| `engins/gameengin/brain/mechanic-library/movement/coyote-time.json` | config |
| `engins/gameengin/brain/mechanic-library/movement/dash.json` | config |
| `engins/gameengin/brain/mechanic-library/movement/double-jump.json` | config |
| `engins/gameengin/brain/mechanic-library/movement/grapple.json` | config |
| `engins/gameengin/brain/mechanic-library/movement/wall-slide.json` | config |
| `engins/gameengin/brain/mechanic-library/progression/metroidvania-gating.json` | config |
| `engins/gameengin/brain/mechanic-library/progression/roguelike-perks.json` | config |
| `engins/gameengin/brain/mechanic-library/progression/skill-tree.json` | config |
| `engins/gameengin/brain/mechanic-library/structural/ability-gating.json` | config |
| `engins/gameengin/brain/mechanic-library/structural/meta-progression.json` | config |
| `engins/gameengin/brain/mechanic-library/structural/procedural-generation.json` | config |
| `engins/gameengin/brain/mechanic-library/structural/run-persistence.json` | config |
| `engins/gameengin/brain/mechanic-library/structural/season-pass.json` | config |
| `engins/gameengin/brain/mechanic-library/structural/world-streaming.json` | config |
| `engins/gameengin/brain/narrative-pacing/default.json` | config |
| `engins/gameengin/brain/originality-registry/by-cartridge/mad-maxi.json` | config |
| `engins/gameengin/brain/originality-registry/signatures.json` | config |
| `engins/gameengin/brain/principles/emotional-core.md` | doc |
| `engins/gameengin/brain/principles/feedback.md` | doc |
| `engins/gameengin/brain/principles/mastery.md` | doc |
| `engins/gameengin/brain/principles/progression.md` | doc |
| `engins/gameengin/brain/principles/responsiveness.md` | doc |
| `engins/gameengin/brain/principles/risk-reward.md` | doc |
| `engins/gameengin/brain/progression-state/README.md` | doc |
| `engins/gameengin/brain/rd-sessions/README.md` | doc |
| `engins/gameengin/brain/README.md` | doc |
| `engins/gameengin/brain/technique-library/lighting/three-point-mood.json` | config |
| `engins/gameengin/brain/technique-library/modeling/edge-flow.json` | config |
| `engins/gameengin/brain/technique-library/modeling/silhouette-first.json` | config |
| `engins/gameengin/brain/technique-library/optimization/texture-atlasing.json` | config |
| `engins/gameengin/brain/upgrade-history/prioritization-rules.json` | config |
| `engins/gameengin/brain/upgrade-history/README.md` | doc |
| `engins/gameengin/brain/visual-bible/characters/mad-maxi.md` | doc |
| `engins/gameengin/brain/visual-bible/environments/neon-wasteland.md` | doc |
| `engins/gameengin/brain/work-queue/README.md` | doc |
| `engins/renderengin/README.md` | doc |
| `FILE_TREE.md` | doc |
| `fix-audit.js` | js |
| `fix-repo.cjs` | cjs |
| `fonts/Cormorant_Garamond/CormorantGaramond-Italic-VariableFont_wght.ttf` | file |
| `fonts/Cormorant_Garamond/CormorantGaramond-VariableFont_wght.ttf` | file |
| `fonts/Cormorant_Garamond/OFL.txt` | doc |
| `fonts/Cormorant_Garamond/README.txt` | doc |
| `fonts/Cormorant_Garamond/static/CormorantGaramond-Bold.ttf` | file |
| `fonts/Cormorant_Garamond/static/CormorantGaramond-BoldItalic.ttf` | file |
| `fonts/Cormorant_Garamond/static/CormorantGaramond-Italic.ttf` | file |
| `fonts/Cormorant_Garamond/static/CormorantGaramond-Light.ttf` | file |
| `fonts/Cormorant_Garamond/static/CormorantGaramond-LightItalic.ttf` | file |
| `fonts/Cormorant_Garamond/static/CormorantGaramond-Medium.ttf` | file |
| `fonts/Cormorant_Garamond/static/CormorantGaramond-MediumItalic.ttf` | file |
| `fonts/Cormorant_Garamond/static/CormorantGaramond-Regular.ttf` | file |
| `fonts/Cormorant_Garamond/static/CormorantGaramond-SemiBold.ttf` | file |
| `fonts/Cormorant_Garamond/static/CormorantGaramond-SemiBoldItalic.ttf` | file |
| `fonts/fonts.md` | doc |
| `fonts/Plus_Jakarta_Sans/OFL.txt` | doc |
| `fonts/Plus_Jakarta_Sans/PlusJakartaSans-Italic-VariableFont_wght.ttf` | file |
| `fonts/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf` | file |
| `fonts/Plus_Jakarta_Sans/README.txt` | doc |
| `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Bold.ttf` | file |
| `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-BoldItalic.ttf` | file |
| `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraBold.ttf` | file |
| `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraBoldItalic.ttf` | file |
| `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraLight.ttf` | file |
| `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-ExtraLightItalic.ttf` | file |
| `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Italic.ttf` | file |
| `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Light.ttf` | file |
| `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-LightItalic.ttf` | file |
| `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Medium.ttf` | file |
| `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-MediumItalic.ttf` | file |
| `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Regular.ttf` | file |
| `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-SemiBold.ttf` | file |
| `fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-SemiBoldItalic.ttf` | file |
| `fonts/Space_Grotesk/OFL.txt` | doc |
| `fonts/Space_Grotesk/README.txt` | doc |
| `fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf` | file |
| `fonts/Space_Grotesk/static/SpaceGrotesk-Bold.ttf` | file |
| `fonts/Space_Grotesk/static/SpaceGrotesk-Light.ttf` | file |
| `fonts/Space_Grotesk/static/SpaceGrotesk-Medium.ttf` | file |
| `fonts/Space_Grotesk/static/SpaceGrotesk-Regular.ttf` | file |
| `fonts/Space_Grotesk/static/SpaceGrotesk-SemiBold.ttf` | file |
| `GameENGINspec.md` | doc |
| `hooks/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `LICENSE` | file |
| `misc/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `next-env.d.ts` | ts |
| `optimizer/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `optimizer/README.md` | doc |
| `proxy.ts` | ts |
| `public/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `public/cartridges/mad-maxi/logic/main.wasm` | file |
| `public/cartridges/mad-maxi/tuning.json` | config |
| `public/dr-eams-pbr.html` | file |
| `public/dreamengin-sw.js` | js |
| `public/favicon.ico` | file |
| `public/feeds/embed-feed.json` | config |
| `public/file.svg` | file |
| `public/globe.svg` | file |
| `public/manifest.json` | config |
| `public/manifest.webmanifest` | file |
| `public/module-loader.html` | file |
| `public/next.svg` | file |
| `public/vercel.svg` | file |
| `public/window.svg` | file |
| `public/workers/asset-optimizer.worker.js` | js |
| `public/workers/engin-shader.wasm` | file |
| `public/workers/engin-shader.worker.ts` | ts |
| `README.md` | doc |
| `REPO_STATE.md` | doc |
| `repo-visualizer/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `repo-visualizer/analyzer.mjs` | mjs |
| `repo-visualizer/graph-stats.json` | config |
| `repo-visualizer/graph.json` | config |
| `repo-visualizer/index.html` | file |
| `repo-visualizer/README.md` | doc |
| `repo-visualizer/server.mjs` | mjs |
| `research-and-development/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `research-and-development/LICENSE` | file |
| `research-and-development/tech-spec-v1.md` | doc |
| `research/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `research/ccc-ada-twin-engine/code/README.md` | doc |
| `research/ccc-ada-twin-engine/data/README.md` | doc |
| `research/ccc-ada-twin-engine/notes/sharpening_notes.txt` | doc |
| `research/ccc-ada-twin-engine/paper/ccc_ada_axioms_and_invariants.tex` | file |
| `research/ccc-ada-twin-engine/paper/ccc_ada_black_hole_gravitational_wave_memory.tex` | file |
| `research/ccc-ada-twin-engine/paper/ccc_ada_holography_and_information_boundary.tex` | file |
| `research/ccc-ada-twin-engine/paper/ccc_ada_predictions_and_falsifiability.tex` | file |
| `research/ccc-ada-twin-engine/paper/ccc_ada_twin_engine_framework.tex` | file |
| `research/ccc-ada-twin-engine/README.md` | doc |
| `research/data/README.md` | doc |
| `research/data/torr_vs_mond_lock_n11.csv` | file |
| `research/DISCOVERY.md` | doc |
| `research/equations/torridityequate.txt` | doc |
| `research/paper/torridity_ledger.tex` | file |
| `research/README.md` | doc |
| `scripts/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `scripts/archive/validate-deployment.js` | js |
| `scripts/autofix-vercel-build.mjs` | mjs |
| `scripts/center-audit.mjs` | mjs |
| `scripts/check-build-memory-drift.mjs` | mjs |
| `scripts/check-engin-filenames.mjs` | mjs |
| `scripts/check-licenses.mjs` | mjs |
| `scripts/check-orphans.mjs` | mjs |
| `scripts/check-root-hygiene.mjs` | mjs |
| `scripts/close-all-open-prs.sh` | file |
| `scripts/contentengin/blender-add-basic-animations.py` | python |
| `scripts/contentengin/blender-auto-rig.py` | python |
| `scripts/contentengin/blender-cleanup.py` | python |
| `scripts/contentengin/blender-validate-rig.py` | python |
| `scripts/contentengin/generate-test-assets.mjs` | mjs |
| `scripts/contentengin/validate-glb.mjs` | mjs |
| `scripts/deploy.sh` | file |
| `scripts/export-full-code.mjs` | mjs |
| `scripts/feature-build/generate-features.mjs` | mjs |
| `scripts/fix-audit.js` | js |
| `scripts/gameengin/architect-run.ts` | ts |
| `scripts/gameengin/artisan-run.ts` | ts |
| `scripts/gameengin/maestro-analyze.ts` | ts |
| `scripts/gameengin/mechanic-run.ts` | ts |
| `scripts/gameengin/package-cartridge.ts` | ts |
| `scripts/gameengin/prophet-run.ts` | ts |
| `scripts/gameengin/smoke-webgl.ts` | ts |
| `scripts/gameengin/smoke-webgpu.ts` | ts |
| `scripts/gameengin/upgrader-run.ts` | ts |
| `scripts/gameengin/writer-run.ts` | ts |
| `scripts/generate-mobile-nextgen-spec.mjs` | mjs |
| `scripts/generate-mobile-ps5-spec.mjs` | mjs |
| `scripts/generate-readme.ts` | ts |
| `scripts/generate-repo-state.mjs` | mjs |
| `scripts/generate-webapp-final-form.mjs` | mjs |
| `scripts/law-check.sh` | file |
| `scripts/migrate-imports.sh` | file |
| `scripts/optimize-dreamengin.mjs` | mjs |
| `scripts/postbuild.js` | js |
| `scripts/postbuild.ts` | ts |
| `scripts/score-pass.cjs` | cjs |
| `scripts/setup-database.sql` | sql |
| `scripts/spec-check.cjs` | cjs |
| `scripts/sync-build-memory.mjs` | mjs |
| `scripts/ui-ux-agent.py` | python |
| `scripts/update-bugs.mjs` | mjs |
| `scripts/update-embed-feed.mjs` | mjs |
| `scripts/update-handoff.mjs` | mjs |
| `scripts/update-readme.mjs` | mjs |
| `scripts/validate-schema-sync.sh` | file |
| `scripts/vercel-ignore.cjs` | cjs |
| `scripts/vercel-preflight.cjs` | cjs |
| `src/engin/generated/index.ts` | ts |
| `styles/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `styles/theme.css` | css |
| `supabase/.temp/cli-latest` | file |
| `supabase/.temp/gotrue-version` | file |
| `supabase/.temp/linked-project.json` | config |
| `supabase/.temp/pooler-url` | file |
| `supabase/.temp/postgres-version` | file |
| `supabase/.temp/project-ref` | file |
| `supabase/.temp/rest-version` | file |
| `supabase/.temp/storage-migration` | file |
| `supabase/.temp/storage-version` | file |
| `supabase/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `supabase/config.toml` | config |
| `supabase/migrations/20240120000000_initial_schema.sql` | sql |
| `supabase/migrations/20240120000001_enable_rls.sql` | sql |
| `supabase/migrations/20260129000000_upgrade_schema.sql` | sql |
| `supabase/migrations/20260210_ai_core.sql` | sql |
| `supabase/migrations/20260210000000_widget_system_v2.sql` | sql |
| `supabase/migrations/20260210000001_ai_system_v2026.sql` | sql |
| `supabase/migrations/20260214000000_security_axioms.sql` | sql |
| `supabase/migrations/20260226000000_admin_lock.sql` | sql |
| `supabase/migrations/20260305000000_create_notes.sql` | sql |
| `supabase/migrations/20260305000001_comments.sql` | sql |
| `supabase/migrations/20260305000002_leaderboard.sql` | sql |
| `supabase/migrations/20260307000000_readme_gaps.sql` | sql |
| `supabase/migrations/20260307000001_conversations_messages.sql` | sql |
| `supabase/migrations/20260310000000_widget_instances_visibility.sql` | sql |
| `supabase/migrations/20260310000001_profiles_widget_config.sql` | sql |
| `supabase/migrations/20260310000002_profile_dream_widgets.sql` | sql |
| `supabase/migrations/20260310000003_connector_accounts.sql` | sql |
| `supabase/migrations/20260310000004_feed_items.sql` | sql |
| `supabase/migrations/20260310000010_dreamdm_bar_pass2.sql` | sql |
| `supabase/migrations/20260315000000_content_drafts.sql` | sql |
| `supabase/migrations/20260316000000_visibility_mappings.sql` | sql |
| `supabase/migrations/20260319000000_journey_dots.sql` | sql |
| `supabase/migrations/20260319065444_new-migration.sql` | sql |
| `supabase/migrations/20260319120000_connector_accounts_schema_reload.sql` | sql |
| `supabase/migrations/20260320000000_scheduled_posts.sql` | sql |
| `supabase/migrations/20260320100000_game_scores_all_games.sql` | sql |
| `supabase/migrations/20260320110000_user_blocks.sql` | sql |
| `supabase/migrations/20260321000000_ads_platform_promotions.sql` | sql |
| `supabase/migrations/20260321200000_phase8a_feed_and_layout.sql` | sql |
| `supabase/migrations/20260322000000_phase8b_dream_windows.sql` | sql |
| `supabase/migrations/20260322000000_policy_events.sql` | sql |
| `supabase/migrations/20260322000001_message_boards.sql` | sql |
| `supabase/migrations/20260323100000_embed_feed_items.sql` | sql |
| `supabase/migrations/20260324000000_phase8e_orders.sql` | sql |
| `supabase/migrations/20260324000001_phase8e_shop_marketplace.sql` | sql |
| `supabase/migrations/20260325000000_phase8f_daydream_network.sql` | sql |
| `supabase/migrations/20260325100000_child_safety.sql` | sql |
| `supabase/migrations/20260401000001_platform_utilities.sql` | sql |
| `supabase/migrations/20260402000001_control_mappings.sql` | sql |
| `supabase/migrations/20260402000002_game_assets.sql` | sql |
| `supabase/migrations/20260403000001_pgvector_embeddings.sql` | sql |
| `supabase/migrations/20260403000002_pgvector_search_rpc.sql` | sql |
| `supabase/migrations/20260405000001_dreamr_feed_registry.sql` | sql |
| `supabase/migrations/20260405042406_auto_scaffold.sql` | sql |
| `supabase/migrations/20260413000000_phase9_activity_first_protocol.sql` | sql |
| `supabase/migrations/20260417000000_repurpose_nods_as_dream_docs.sql` | sql |
| `supabase/migrations/20260417000001_dream_docs_search_rpc.sql` | sql |
| `supabase/migrations/20260418000000_gameengin_core.sql` | sql |
| `supabase/migrations/20260420000001_consent_settings_audit.sql` | sql |
| `supabase/migrations/20260426000000_activity_coop_gameengin_completion.sql` | sql |
| `supabase/migrations/20260426000100_rename_widgets_to_dreams.sql` | sql |
| `supabase/migrations/20260426000200_build_memory_schema_gaps.sql` | sql |
| `supabase/migrations/20260516000000_agent_sessions_forge_rate_limits.sql` | sql |
| `supabase/migrations/20260516000100_dreamr_tally.sql` | sql |
| `supabase/migrations/20260516000300_shared_dream_sessions.sql` | sql |
| `supabase/migrations/20260605015234_auto_scaffold.sql` | sql |
| `supabase/migrations/20260619000000_renderengin_assets_rls.sql` | sql |
| `supabase/migrations/20260619034000_connector_feed_items.sql` | sql |
| `supabase/migrations/20260619034100_profile_optional_fields.sql` | sql |
| `supabase/migrations/20260619034200_saved_posts.sql` | sql |
| `supabase/realtime.ts` | ts |
| `supabase/schema-final.sql` | sql |
| `supabase/seed.sql` | sql |
| `supabase/vector.ts` | ts |
| `supabaseClient.ts` | ts |
| `tailwindcss-animate.d.ts` | ts |
| `tsconfig.app.json` | config |
| `tsconfig.base.json` | config |
| `tsconfig.games.json` | config |
| `tsconfig.gamesengin.json` | config |
| `tsconfig.server.json` | config |
| `tsconfig.test.json` | config |
| `tsconfig.tsbuildinfo` | file |
| `tsconfig.worker.json` | config |
| `types/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `types/ccc.ts` | ts |
| `types/experience.ts` | ts |
| `types/marketplace.ts` | ts |
| `types/rivet-dev-agent-os.d.ts` | ts |
| `utils/Agents-MUST-READ-ARCHITECTURE.md` | doc |
| `VISUAL-SCHEMATIC.md` | doc |

_Generated by `repo-visualizer/analyzer.mjs`._
<!-- VISUAL-SCHEMATIC:AUTO-GENERATED:END -->

Use the interactive viewer in `repo-visualizer/index.html` (served via `pnpm viz`) for click/zoom/filter exploration.
