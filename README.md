#DREAMengin

**A modular spatial creative operating environment with one fixed engine + dual runtimes + swappable rule-sets.**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/) [![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/) [![pnpm workspace](https://img.shields.io/badge/pnpm-workspace-orange?logo=pnpm)](https://pnpm.io/workspaces) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![Live Demo](https://img.shields.io/badge/Live-dreamengin.com-000?logo=DREAMengin)](https://dreamengin.com)


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
- [12. The DreamDmBar (`dreamdmbar/`)](#the-dmbar-dreamdmbar)
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

<!-- DREAMENGIN_AUTOSYNC:START -->

> This block is generated from DREAMengin application source code only.
> It excludes tests, docs, scripts, CI, media, public assets, generated files, and config inventory.

## The Engins
The Engins is a user-facing application surface subsystem composed of React components and presentation logic. It exposes useAIDirector, useAgentSession, useArtifactSlot as reusable hooks. Core abstractions are encapsulated in EnginDispatcher, SpatialRuntimeCore, IntentBus. It depends on app, Backend, System, Core & CoreSurfaces, Dreamr — Human Media.
### Responsibilities
- Renders production surfaces/components: DualRuntimeContainer, RuntimeView, RuntimeShell, DreamDMBar, BAR_H, NAV_H, +128 more
- Core abstractions: EnginDispatcher, SpatialRuntimeCore, IntentBus, UniversalEngine, RuntimeContainer
- Runtime orchestration, capability routing, and Engin lifecycle coordination
- AI provider integration and inference routing
- Authentication, sessions, authorization, and access control
- Messaging, conversations, notifications, realtime channels, or presence
- Feed, post, comment, ranking, or social interaction behavior
- Asset storage, upload, export, or CDN-facing pipelines
- GameEngin cartridge/runtime interaction or playable system behavior
- ContentEngin asset creation, validation, rigging, animation, or export behavior
### Key Modules
- engine/runtime/EnginDispatcher.ts — initWasmEngine, WorkerInitMessage, WorkerStopMessage (important path; behavior evidence; runtime layer)
- engine/runtime/iEngine.ts — authorizeCapability, validateManifest, createRuntimeObject (important path; behavior evidence; runtime layer)
- engine/runtime/index.ts — RegistrySlot, RegistryEntry, UniversalEngine (important path; behavior evidence; runtime layer)
- engine/runtime/useEnginBridge.ts — useCodeEnginBridge, useGameEnginBridge, useStarMakerEnginBridge (important path; behavior evidence; runtime layer)
- dreamdmbar/runtime/DreamSystemContext.tsx — DreamSystemProvider, BarIntentMode, BarIntent (important path; behavior evidence; DreamDMBar layer)
- engine/runtime/runtimeContainer.ts — RuntimeStrategy, RuntimeContainerOptions, RuntimeContainer (important path; behavior evidence; runtime layer)
- engine/runtime/useDragSurface.ts — useDragSurface, UseDragSurfaceOptions, UseDragSurfaceResult (important path; behavior evidence; runtime layer)
- engine/runtime/useDualRuntime.ts — useDualRuntime, UseDualRuntimeReturn, BridgeEventHandler (important path; behavior evidence; runtime layer)
- engine/runtime/useEnginCoopSync.ts — useEnginCoopSync, UseEnginCoopSyncOptions, UseEnginCoopSyncResult (important path; behavior evidence; runtime layer)
- engine/runtime/useSharedEnginChannel.ts — useSharedEnginChannel, SharedEnginChannelOptions, SharedEnginChannelResult (important path; behavior evidence; runtime layer)
- components/runtime/dream.DualRuntimeContainer.tsx — useDualRuntime, DualRuntimeContainer (important path; behavior evidence; runtime layer)
- dreamdmbar/hooks/useDreamBarContext.ts — detectSurface, resolveIntentOverride, useDreamBarContext (important path; behavior evidence; DreamDMBar layer)
### Architectural Relationships
- Depends on **app**
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreamr — Human Media**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **DreamSpace**
- Depends on **Dual Runtimes**
- Depends on **engins**
- Depends on **Runtime Orchestration**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on app
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreamr — Human Media
- Depends on Dreams, Widgets, Windows & Surfaces
### Public Surfaces
**Production Components:**
`AUDIO_QUALITY_PRESETS`, `AUTOMATABLE_PARAMS`, `AgentPanel`, `ArtifactPermissionSchema`, `ArtifactSlot`, `AssetViewport`, `BAR_FLING_LINE_RATIO`, `BAR_FLING_TO_BOTTOM_VELOCITY_THRESHOLD_PX_PER_MS`, `BAR_FLING_TO_TOP_MIN_DRAG_PX`, `BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS`, +121 more
### Notable Abstractions
- `DreamBarSurface` — type in `dreamdmbar/hooks/useDreamBarContext.ts`
- `DreamBarContext` — interface in `dreamdmbar/hooks/useDreamBarContext.ts`
- `DMConversation` — interface in `dreamdmbar/hooks/useDreamDMConversations.ts`
- `DMMessage` — interface in `dreamdmbar/hooks/useDreamDMMessages.ts`
- `UseDreamSearchReturn` — interface in `dreamdmbar/hooks/useDreamSearch.ts`
- `SendMessageParams` — interface in `dreamdmbar/hooks/useMessagingCore.ts`
- `UseModuleBarIntentResult` — interface in `dreamdmbar/hooks/useModuleBarIntent.ts`
- `DbNotificationContent` — type in `dreamdmbar/notifications/notificationHelpers.ts`
- `DbNotificationRow` — interface in `dreamdmbar/notifications/notificationHelpers.ts`
- `UiNotificationType` — type in `dreamdmbar/notifications/notificationHelpers.ts`
- `UiNotification` — interface in `dreamdmbar/notifications/notificationHelpers.ts`
- `UseNotificationsReturn` — interface in `dreamdmbar/notifications/useNotifications.ts`
- `useAIDirector` — hook
- `useAgentSession` — hook
- `useArtifactSlot` — hook
- `useBrandEnginRuntime` — hook
- `useBrandingEnginBridge` — hook
- `useCodeEnginBridge` — hook
- `useCodeEnginRuntime` — hook
- `useContentEnginBridge` — hook
### Capabilities
- Exposes hooks: useAIDirector, useAgentSession, useArtifactSlot, useBrandEnginRuntime, useBrandingEnginBridge, useCodeEnginBridge, +41 more
- Important contract surface: DreamBarContext, DMConversation, DMMessage, UseDreamSearchReturn, SendMessageParams
- Important shared type vocabulary: DreamBarSurface, DbNotificationContent, UiNotificationType, BarIntentMode, SurfaceAccent
- Behavior functions: detectSurface, resolveIntentOverride, mapNotificationType, getNotificationTitle, getNotificationActionUrl, extractNotificationMessage
#### Application Source Structure
```text
├── components
│   └── runtime
│       ├── dream.DualRuntimeContainer.tsx
│       ├── dream.RuntimeView.tsx
│       └── dream.shell.RuntimeShell.tsx
├── dreamdmbar
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
│       ├── apperception.ts
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
│       ├── superciliousPlatformRuntime.ts
│       ├── swapManager.ts
│       ├── useDragSurface.ts
│       ├── useDualRuntime.ts
│       ├── useDualRuntimePersistence.ts
│       ├── useEnginBridge.ts
│       ├── useEnginCoopSync.ts
│       └── useSharedEnginChannel.ts
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
    │   ├── runnerCommands.ts
    │   ├── search.ts
    │   ├── types.ts
    │   └── workspaceStore.ts
    ├── contentengin
    │   ├── AssetViewport.tsx
    │   ├── ImplicitAssetWorkspace.tsx
    │   ├── assetTypes.ts
    │   ├── assets
    │   │   ├── assetOptimizer.ts
    │   │   ├── indexedDBStore.ts
    │   │   └── localAssetLibrary.ts
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
… (202 more application source files)
```
<details><summary>The Engins application source index (322 files)</summary>

- `components/runtime/dream.DualRuntimeContainer.tsx` — React application module.
- `components/runtime/dream.RuntimeView.tsx` — React application module.
- `components/runtime/dream.shell.RuntimeShell.tsx` — React application module.
- `dreamdmbar/dream.GlowingLight.tsx` — React application module.
- `dreamdmbar/dreamsurface.dreamdmbar.tsx` — React application module.
- `dreamdmbar/hooks/useDreamBarContext.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamDMConversations.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamDMDraft.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamDMMessages.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamSearch.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useMessagingCore.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useModuleBarIntent.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useNotifications.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/notifications/notificationHelpers.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/notifications/useNotifications.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/runtime/DreamSystemContext.tsx` — React application module.
- `dreamdmbar/runtime/barInteractions.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/runtime/bridgeSeamFlow.ts` — TypeScript/JavaScript application module.
- `engine/runtime/EnginDispatcher.ts` — TypeScript/JavaScript application module.
- `engine/runtime/apperception.ts` — TypeScript/JavaScript application module.
- `engine/runtime/channelMetrics.ts` — TypeScript/JavaScript application module.
- `engine/runtime/coercionTable.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamOSBus.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamsurface/dreamsurface.bridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamsurface/dreamsurface.delta.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamsurface/index.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dropTargetRegistry.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dualRuntime.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dualRuntimeBridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.auth.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.eventbus.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.ledger.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.renderloop.ts` — TypeScript/JavaScript application module.
- `engine/runtime/enginWorkflowRegistry.ts` — TypeScript/JavaScript application module.
- `engine/runtime/iEngine.ts` — TypeScript/JavaScript application module.
- `engine/runtime/index.ts` — TypeScript/JavaScript application module.
- `engine/runtime/instanceManager.ts` — TypeScript/JavaScript application module.
- `engine/runtime/isAuthRelatedError.ts` — TypeScript/JavaScript application module.
- `engine/runtime/madMaxiSnapshotBridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/memory.ts` — TypeScript/JavaScript application module.
- `engine/runtime/moduleRegistry.ts` — TypeScript/JavaScript application module.
- `engine/runtime/offlineQueue.ts` — TypeScript/JavaScript application module.
- `engine/runtime/quantumCircuit.ts` — TypeScript/JavaScript application module.
- `engine/runtime/runtimeChannel.ts` — TypeScript/JavaScript application module.
- `engine/runtime/runtimeContainer.ts` — TypeScript/JavaScript application module.
- `engine/runtime/seamClipboard.ts` — TypeScript/JavaScript application module.
- `engine/runtime/sharedResourcePool.ts` — TypeScript/JavaScript application module.
- `engine/runtime/snapshotFingerprint.ts` — TypeScript/JavaScript application module.
- `engine/runtime/superciliousPlatformRuntime.ts` — TypeScript/JavaScript application module.
- `engine/runtime/swapManager.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useDragSurface.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useDualRuntime.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useDualRuntimePersistence.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useEnginBridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useEnginCoopSync.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useSharedEnginChannel.ts` — TypeScript/JavaScript application module.
- `engins/CodeEngin/core/parser.ts` — TypeScript/JavaScript application module.
- `engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel.tsx` — React application module.
- `engins/CodeEngin/modules/ai-co-pilot/index.ts` — TypeScript/JavaScript application module.
- `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts` — TypeScript/JavaScript application module.
- `engins/CodeEngin/orchestrator/dream.index.tsx` — React application module.
- `engins/autoopen/dream.AutoOpenGameEngin.tsx` — React application module.
- `engins/brandingengin/identity/logos.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/ai/drEamsCodeAssist.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/auth.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/diagnostics.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/diff/aiEditEngine.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/diff/diffUtils.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/git.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/pathSafety.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/projectGraph.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/runner.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/runnerCommands.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/search.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/types.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/workspaceStore.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/AssetViewport.tsx` — React application module.
- `engins/contentengin/ImplicitAssetWorkspace.tsx` — React application module.
- `engins/contentengin/assetTypes.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/assets/assetOptimizer.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/assets/indexedDBStore.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/assets/localAssetLibrary.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/geometryBuilder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/meshBuilder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/modifiers.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/primitiveBuilder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/textureBuilder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/uvGenerator.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/cli.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/composite/compositor.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/composite/fxSimulation.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/composite/matchmover.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/composite/motionCapture.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/composite/rotoscope.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/content/generativeFill.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/content/publishIntent.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/content/seoScorer.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/content/transcriptEditor.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/content/voiceClone.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/animalGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/bicycleGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/bridgeGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/buildingGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/creatureGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/humanoidGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/propGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/roadGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/shared.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/terrainGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/treeGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/vehicleGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/waterGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/materials/materialTypes.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/materials/paletteExtractor.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/materials/proceduralMaterials.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/media/h265-encoder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/media/ledger.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/media/postMedia.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/performancePlan.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/colorCluster.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/edgeDetector.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/imageAnalyzer.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/photoToRecipe.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/pngDecoder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/regionDetector.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/build.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/bundle.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/exportGlb.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/generateCollision.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/generateLods.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/paths.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/validate.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/writeManifest.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/recipes/recipeResolver.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/recipes/recipeTypes.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/recipes/seededRandom.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/rigging/fitArmature.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/rigging/index.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/rigging/landmarks.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/rigging/rigTypes.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/rigging/rigValidator.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/runtimeProfile.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/shaders/shaderRegistry.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/shaders/shaderTypes.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/upgradeMatrix.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/useImplicitAssetWorkspace.ts` — TypeScript/JavaScript application module.
- `engins/dream.ForgeEngin.tsx` — React application module.
- `engins/dream.QuantumCircuitCanvas.tsx` — React application module.
- `engins/engin.BrandingEngin.tsx` — React application module.
- `engins/engin.CodeEngin.tsx` — React application module.
- `engins/engin.ContentEngin.tsx` — React application module.
- `engins/engin.GameEngin.tsx` — React application module.
- `engins/engin.LabEngin.tsx` — React application module.
- `engins/engin.StarMakerEngin.tsx` — React application module.
- `engins/forgeengin/componentInventory.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/artifact/manifest.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/index.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/quality/tiers.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/shell/ArtifactSlot.tsx` — React application module.
- `engins/forgeengin/enginpipe/telemetry/client.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/telemetry/events.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge-ngn/assembly.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge-ngn/index.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge-ngn/piece-registry.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/engineForge.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeBuild.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeIntelligence.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeMomentum.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeNexus.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeRegistry.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeRituals.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/useForgeActivity.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/useForgeBuild.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/GameEnginCore.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/GameRuntime.tsx` — React application module.
- `engins/gameengin/accessibility-ai.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/ai-director.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/ai-npcs.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/assets/BundleCache.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/assets/BundleManifest.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/backendNegotiator.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/brain-reader.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridge-manifest.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridge.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridgeLoader.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/achievementEngine.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/apiStubs.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/loaders.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/manifest.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/reactCartridge.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/saveState.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cloud-compute.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/config/demoGameConfig.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/controls/control-mappings.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/core.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/dream-engine.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/dreamr-loader.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/executionWiring.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/gameEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/DualSenseManager.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/avatar.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/catalog.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/gameControllerButtons.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/gameControllerLeft.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/gameControllerRight.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/hooks.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/library-state.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/lucid-avenue-world.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/madmaxi-wildfall-world.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/mobileControls.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/navigation.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/performance-baseline.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/quality-plan.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/useAIDirector.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/useGameInputKeyboardBridge.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/useGamepad.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/useImmersiveGameLayout.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/useRemoteChannel.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/generative-audio.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/handlers.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/input/InputRouter.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/input/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/launcher.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/neural-render.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/path-tracing.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/platform.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/post-fx.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/power-systems.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/predictive-stream.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/procgen.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/registerCartridges.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/remote/comboMachine.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/remote/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/remote/layout.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/remote/moves.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/remote/sprintDetector.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/render/ShaderRegistry.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/runtime/FrameBudget.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/runtime/FrameClock.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/runtime/RuntimeQuality.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/runtime/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/ai.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/animation.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/assets.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/lod.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/network.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/physics.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/pooling.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/rendering.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/spatial.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/world.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/unifiedLoop.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/useUnifiedLoop.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/webgpu-runtime-shell.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/world-crdt.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/xr.ts` — TypeScript/JavaScript application module.
- `engins/isosurfaceAssetPipeline.ts` — TypeScript/JavaScript application module.
- `engins/isosurfaceDualContouring.ts` — TypeScript/JavaScript application module.
- `engins/labengin/implicitSurface.ts` — TypeScript/JavaScript application module.
- `engins/portfolio/dream.PortfolioEngin.tsx` — React application module.
- `engins/renderengin/RenderEnginViewport.tsx` — React application module.
- `engins/renderengin/advancedRendering.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/animation.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/assets.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/benchmarkProof.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/completionEvidence.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/core.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/diagnostics.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/index.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/lighting.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/liveBenchmark.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/materials.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/performanceIntegrity.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/postProcessing.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/renderSettings.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/runtimeRegistration.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/scene.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/security.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/serviceIntegration.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/serviceRuntime.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/textures.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/viewportControls.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/virtualization.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/webgpu.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/brand/brandEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/brand/useBrandEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/code/codeEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/code/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/code/useCodeEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/content/contentEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/content/useContentEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/dreams/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/forge/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/game/declarative.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/game/gameEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/game/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/game/useGameEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/homedream/dream.homedream.constants.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/homedream/dream.homedream.physics.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/homedream/dream.homedream.transforms.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/homedream/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/lab/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/lab/labEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/lab/useLabEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/music/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/music/starMakerEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/music/useStarMakerEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/useEnginWorkflow.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/workflowEngine.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/audio-fingerprint/fingerprint.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/audio-fingerprint/index.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/audio-fingerprint/peak-map.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/audio-fingerprint/stem-extractor.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/audioFingerprint.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/music/presets.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/music/starmaker.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/music/starmakerArrangement.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/music/starmakerDaw.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/music/wasmAudioBridge.ts` — TypeScript/JavaScript application module.

</details>

### AnalyticsEngin
AnalyticsEngin is registered in the application-source registry but currently has no matched source files.
#### Key Modules
- _none detected_
#### Capabilities
- No application source files currently matched — section registered but unpopulated
##### Application Source Structure
```text
(no application source files currently matched)
```
<details><summary>AnalyticsEngin application source index (0 files)</summary>

- _No application source files currently matched._

</details>

### BrandingEngin
BrandingEngin is a user-facing application surface subsystem composed of React components and presentation logic. It depends on Backend, System, Core & CoreSurfaces, DreamSpace, Dual Runtimes.
#### Responsibilities
- Renders production surfaces/components: BrandingEngin, BRAND_ENGIN_RULE_SET
- Runtime orchestration, capability routing, and Engin lifecycle coordination
#### Key Modules
- engins/engin.BrandingEngin.tsx — BrandingEngin (important path; behavior evidence; Engin entry)
- engins/rulesets/brand/brandEnginRuleSet.ts — BrandProfile, BrandAsset, BrandEnginDerivedState (important path; behavior evidence; important exports: BrandProfile, BrandAsset, BrandEnginDerivedState)
#### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **DreamSpace**
- Depends on **Dual Runtimes**
- Depends on **The Engins**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on DreamSpace
- Depends on Dual Runtimes
- Depends on The Engins
#### Public Surfaces
**Production Components:**
`BRAND_ENGIN_RULE_SET`, `BrandingEngin`
#### Notable Abstractions
- `BrandProfile` — interface in `engins/rulesets/brand/brandEnginRuleSet.ts`
- `BrandAsset` — interface in `engins/rulesets/brand/brandEnginRuleSet.ts`
- `BrandEnginDerivedState` — interface in `engins/rulesets/brand/brandEnginRuleSet.ts`
- `BrandEnginAction` — type in `engins/rulesets/brand/brandEnginRuleSet.ts`
#### Capabilities
- Important contract surface: BrandProfile, BrandAsset, BrandEnginDerivedState
- Important shared type vocabulary: BrandEnginAction
##### Application Source Structure
```text
└── engins
    ├── engin.BrandingEngin.tsx
    └── rulesets
        └── brand
            └── brandEnginRuleSet.ts
```
<details><summary>BrandingEngin application source index (2 files)</summary>

- `engins/engin.BrandingEngin.tsx` — React application module.
- `engins/rulesets/brand/brandEnginRuleSet.ts` — TypeScript/JavaScript application module.

</details>

### CodeEngin
CodeEngin is a user-facing application surface subsystem composed of React components and presentation logic. It exposes useAgentSession as reusable hooks. It depends on DreamSpace, The Engins, User-Facing Modularity.
#### Responsibilities
- Renders production surfaces/components: CodeDreamIDE, AgentPanel, CodeEnginOrchestrator, CodeEngin
- Authentication, sessions, authorization, and access control
#### Key Modules
- engins/engin.CodeEngin.tsx — CodeEngin (important path; behavior evidence; Engin entry)
- components/daydream/dream.CodeDreamIDE.tsx — CodeDreamIDE (important path; behavior evidence; important exports: CodeDreamIDE)
- engins/CodeEngin/modules/ai-co-pilot/index.ts — useAgentSession, AgentMessage, UseAgentSessionReturn (behavior evidence; important exports: useAgentSession, AgentMessage, UseAgentSessionReturn; important hook)
- engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts — useAgentSession, AgentMessage, UseAgentSessionReturn (behavior evidence; important exports: useAgentSession, AgentMessage, UseAgentSessionReturn; important hook)
- engins/CodeEngin/orchestrator/dream.index.tsx — CodeEnginOrchestrator (behavior evidence; important exports: CodeEnginOrchestrator)
#### Architectural Relationships
- Depends on **DreamSpace**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Integrates with the Engin / Runtime layer for execution orchestration
- Depends on DreamSpace
- Depends on The Engins
- Depends on User-Facing Modularity
#### Public Surfaces
**Production Components:**
`AgentPanel`, `CodeDreamIDE`, `CodeEngin`, `CodeEnginOrchestrator`
#### Notable Abstractions
- `AgentMessage` — interface in `engins/CodeEngin/modules/ai-co-pilot/index.ts`
- `UseAgentSessionReturn` — interface in `engins/CodeEngin/modules/ai-co-pilot/index.ts`
- `AgentMessage` — interface in `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts`
- `UseAgentSessionReturn` — interface in `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts`
- `useAgentSession` — hook
#### Capabilities
- Exposes hooks: useAgentSession
- Important contract surface: AgentMessage, UseAgentSessionReturn, AgentMessage, UseAgentSessionReturn
##### Application Source Structure
```text
├── components
│   └── daydream
│       └── dream.CodeDreamIDE.tsx
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
<details><summary>CodeEngin application source index (7 files)</summary>

- `components/daydream/dream.CodeDreamIDE.tsx` — React application module.
- `engins/CodeEngin/core/parser.ts` — TypeScript/JavaScript application module.
- `engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel.tsx` — React application module.
- `engins/CodeEngin/modules/ai-co-pilot/index.ts` — TypeScript/JavaScript application module.
- `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts` — TypeScript/JavaScript application module.
- `engins/CodeEngin/orchestrator/dream.index.tsx` — React application module.
- `engins/engin.CodeEngin.tsx` — React application module.

</details>

### ContentEngin
ContentEngin is a full-stack application subsystem with React surfaces and API transport boundaries. It depends on The Engins, User-Facing Modularity.
#### Responsibilities
- API transport boundaries: /api/contentengin
- Renders production surfaces/components: AnimationPanel, AssetPreview3D, ContentEnginStudio, ExportPanel, MaterialEditor, PartTreeEditor, +4 more
- Asset storage, upload, export, or CDN-facing pipelines
- GameEngin cartridge/runtime interaction or playable system behavior
- ContentEngin asset creation, validation, rigging, animation, or export behavior
#### Key Modules
- engins/engin.ContentEngin.tsx — ContentEngin (important path; behavior evidence; Engin entry)
- app/api/contentengin/jobs/route.ts — ContentEnginJobType (important path; behavior evidence; API boundary)
- app/api/contentengin/assets/[assetId]/export/gameengin/route.ts (important path; behavior evidence; API boundary)
- app/api/contentengin/assets/[assetId]/route.ts (important path; behavior evidence; API boundary)
- app/api/contentengin/jobs/[jobId]/route.ts (important path; behavior evidence; API boundary)
- app/api/contentengin/upload/route.ts (important path; behavior evidence; API boundary)
- components/contentengin/AssetPreview3D.tsx — AssetPreview3D (important path; behavior evidence; important exports: AssetPreview3D)
- components/contentengin/ContentEnginStudio.tsx — ContentEnginStudio (important path; behavior evidence; important exports: ContentEnginStudio)
- components/contentengin/ExportPanel.tsx — ExportPanel (important path; behavior evidence; important exports: ExportPanel)
- components/contentengin/AnimationPanel.tsx (important path; behavior evidence)
- components/contentengin/MaterialEditor.tsx (important path; behavior evidence)
- components/contentengin/PartTreeEditor.tsx (important path; behavior evidence)
#### Architectural Relationships
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Integrates with the Engin / Runtime layer for execution orchestration
- Depends on The Engins
- Depends on User-Facing Modularity
#### Public Surfaces
**API Endpoints:**
- `/api/contentengin/assets/[assetId]` `[GET]` — `app/api/contentengin/assets/[assetId]/route.ts`
- `/api/contentengin/assets/[assetId]/export/gameengin` `[POST]` — `app/api/contentengin/assets/[assetId]/export/gameengin/route.ts`
- `/api/contentengin/jobs` `[GET, POST]` — `app/api/contentengin/jobs/route.ts`
- `/api/contentengin/jobs/[jobId]` `[GET]` — `app/api/contentengin/jobs/[jobId]/route.ts`
- `/api/contentengin/upload` `[POST]` — `app/api/contentengin/upload/route.ts`
**Production Components:**
`AnimationPanel`, `AssetPreview3D`, `ContentEngin`, `ContentEnginStudio`, `ExportPanel`, `MaterialEditor`, `PartTreeEditor`, `PhotoReferencePanel`, `RecipeEditor`, `RiggingPanel`
#### Notable Abstractions
- `ContentEnginJobType` — type in `app/api/contentengin/jobs/route.ts`
#### Capabilities
- Important shared type vocabulary: ContentEnginJobType
- Read endpoints for data retrieval
- Write endpoints for mutations
##### Application Source Structure
```text
├── app
│   └── api
│       └── contentengin
│           ├── assets
│           │   └── [assetId]
│           │       ├── export
│           │       │   └── gameengin
│           │       │       └── route.ts
│           │       └── route.ts
│           ├── jobs
│           │   ├── [jobId]
│           │   │   └── route.ts
│           │   └── route.ts
│           └── upload
│               └── route.ts
├── components
│   └── contentengin
│       ├── AnimationPanel.tsx
│       ├── AssetPreview3D.tsx
│       ├── ContentEnginStudio.tsx
│       ├── ExportPanel.tsx
│       ├── MaterialEditor.tsx
│       ├── PartTreeEditor.tsx
│       ├── PhotoReferencePanel.tsx
│       ├── RecipeEditor.tsx
│       └── RiggingPanel.tsx
└── engins
    └── engin.ContentEngin.tsx
```
<details><summary>ContentEngin application source index (15 files)</summary>

- `app/api/contentengin/assets/[assetId]/export/gameengin/route.ts` — API route transport boundary.
- `app/api/contentengin/assets/[assetId]/route.ts` — API route transport boundary.
- `app/api/contentengin/jobs/[jobId]/route.ts` — API route transport boundary.
- `app/api/contentengin/jobs/route.ts` — API route transport boundary.
- `app/api/contentengin/upload/route.ts` — API route transport boundary.
- `components/contentengin/AnimationPanel.tsx` — React application module.
- `components/contentengin/AssetPreview3D.tsx` — React application module.
- `components/contentengin/ContentEnginStudio.tsx` — React application module.
- `components/contentengin/ExportPanel.tsx` — React application module.
- `components/contentengin/MaterialEditor.tsx` — React application module.
- `components/contentengin/PartTreeEditor.tsx` — React application module.
- `components/contentengin/PhotoReferencePanel.tsx` — React application module.
- `components/contentengin/RecipeEditor.tsx` — React application module.
- `components/contentengin/RiggingPanel.tsx` — React application module.
- `engins/engin.ContentEngin.tsx` — React application module.

</details>

### Custom Engins capability
Custom Engins capability is a user-facing application surface subsystem composed of React components and presentation logic. It exposes useAIDirector, useAgentSession, useArtifactSlot as reusable hooks. Core abstractions are encapsulated in H265Encoder, GameCapture, GameEnginConfigError. It depends on Backend, System, Core & CoreSurfaces, Dreamr — Human Media, Dreams, Widgets, Windows & Surfaces.
#### Responsibilities
- Renders production surfaces/components: CodeDreamIDE, DiffViewer, JourneyTrail, LabDreamIDE, NGNEngin, StandaloneEnginSurface, +96 more
- Core abstractions: H265Encoder, GameCapture, GameEnginConfigError, GameEnginCore, RealtimeCaptioner
- Runtime orchestration, capability routing, and Engin lifecycle coordination
- AI provider integration and inference routing
- Authentication, sessions, authorization, and access control
- Messaging, conversations, notifications, realtime channels, or presence
- Feed, post, comment, ranking, or social interaction behavior
- Asset storage, upload, export, or CDN-facing pipelines
- GameEngin cartridge/runtime interaction or playable system behavior
- ContentEngin asset creation, validation, rigging, animation, or export behavior
#### Key Modules
- engins/engin.BrandingEngin.tsx — BrandingEngin (important path; behavior evidence; Engin entry)
- engins/engin.CodeEngin.tsx — CodeEngin (important path; behavior evidence; Engin entry)
- engins/engin.GameEngin.tsx — GameEngin (important path; behavior evidence; Engin entry)
- engins/engin.LabEngin.tsx — LabEngin (important path; behavior evidence; Engin entry)
- engins/engin.StarMakerEngin.tsx — StarMakerEngin (important path; behavior evidence; Engin entry)
- engins/engin.ContentEngin.tsx — ContentEngin (important path; behavior evidence; Engin entry)
- engins/gameengin/gameEnginRuntime.ts — loadDreamGame, DreamGameBackend, DreamGameManifest (important path; behavior evidence; important exports: loadDreamGame, DreamGameBackend, DreamGameManifest)
- engins/gameengin/render/ShaderRegistry.ts — GameEnginShaderStage, GameEnginShaderSource, GameEnginShaderCompileKey (important path; behavior evidence; important exports: GameEnginShaderStage, GameEnginShaderSource, GameEnginShaderCompileKey)
- engins/gameengin/runtime/index.ts — GAMEENGIN_FRAME_BUDGETS, GameEnginFrameBudget, GameEnginQualityTier (important path; behavior evidence; important exports: GAMEENGIN_FRAME_BUDGETS, GameEnginFrameBudget, GameEnginQualityTier)
- engins/rulesets/brand/useBrandEnginRuntime.ts — useBrandEnginRuntime, UseBrandEnginRuntimeOptions, UseBrandEnginRuntimeResult (important path; behavior evidence; important exports: useBrandEnginRuntime, UseBrandEnginRuntimeOptions, UseBrandEnginRuntimeResult)
- engins/rulesets/code/useCodeEnginRuntime.ts — useCodeEnginRuntime, UseCodeEnginRuntimeOptions, UseCodeEnginRuntimeResult (important path; behavior evidence; important exports: useCodeEnginRuntime, UseCodeEnginRuntimeOptions, UseCodeEnginRuntimeResult)
- engins/rulesets/content/useContentEnginRuntime.ts — useContentEnginRuntime, UseContentEnginRuntimeOptions, UseContentEnginRuntimeResult (important path; behavior evidence; important exports: useContentEnginRuntime, UseContentEnginRuntimeOptions, UseContentEnginRuntimeResult)
#### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreamr — Human Media**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **DreamSpace**
- Depends on **Dual Runtimes**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreamr — Human Media
- Depends on Dreams, Widgets, Windows & Surfaces
- Depends on DreamSpace
#### Public Surfaces
**Production Components:**
`AUDIO_QUALITY_PRESETS`, `AUTOMATABLE_PARAMS`, `AgentPanel`, `ArtifactPermissionSchema`, `ArtifactSlot`, `AssetViewport`, `BRAIN_ROOT`, `BRAND_ENGIN_RULE_SET`, `BTN_DOUBLE_TAP_MAX_MS`, `BTN_LONG_PRESS_MS`, +90 more
#### Notable Abstractions
- `StandaloneEnginName` — type in `components/daydream/dream.StandaloneEnginSurface.tsx`
- `DaydreamWidget` — type in `components/daydream/dream.shell.DaydreamShell.tsx`
- `AgentMessage` — interface in `engins/CodeEngin/modules/ai-co-pilot/index.ts`
- `UseAgentSessionReturn` — interface in `engins/CodeEngin/modules/ai-co-pilot/index.ts`
- `AgentMessage` — interface in `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts`
- `UseAgentSessionReturn` — interface in `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts`
- `QueryIntent` — type in `engins/codeengin/ai/drEamsCodeAssist.ts`
- `NLCommand` — interface in `engins/codeengin/ai/drEamsCodeAssist.ts`
- `CodeEnginAuthenticatedUser` — interface in `engins/codeengin/auth.ts`
- `UndoSnapshot` — interface in `engins/codeengin/diff/aiEditEngine.ts`
- `CodeEnginFileNode` — interface in `engins/codeengin/types.ts`
- `CodeEnginFileRecord` — interface in `engins/codeengin/types.ts`
- `useAIDirector` — hook
- `useAgentSession` — hook
- `useArtifactSlot` — hook
- `useBrandEnginRuntime` — hook
- `useCodeEnginRuntime` — hook
- `useContentEnginRuntime` — hook
- `useDualSense` — hook
- `useEnginWorkflow` — hook
#### Capabilities
- Exposes hooks: useAIDirector, useAgentSession, useArtifactSlot, useBrandEnginRuntime, useCodeEnginRuntime, useContentEnginRuntime, +21 more
- Important contract surface: AgentMessage, UseAgentSessionReturn, AgentMessage, UseAgentSessionReturn, NLCommand
- Important shared type vocabulary: StandaloneEnginName, DaydreamWidget, QueryIntent, ExportProfile, ContentAssetCategory
- Behavior functions: AutoOpenGameEngin, detectNLCommand, generateCodeFromCommand, assertCodeEnginAccess, getCodeEnginWorkspacesRoot, safeErrorMessage
##### Application Source Structure
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
    │   ├── runnerCommands.ts
    │   ├── search.ts
    │   ├── types.ts
    │   └── workspaceStore.ts
    ├── contentengin
    │   ├── AssetViewport.tsx
    │   ├── ImplicitAssetWorkspace.tsx
    │   ├── assetTypes.ts
    │   ├── assets
    │   │   ├── assetOptimizer.ts
    │   │   ├── indexedDBStore.ts
    │   │   └── localAssetLibrary.ts
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
    │   ├── performancePlan.ts
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
… (160 more application source files)
```
<details><summary>Custom Engins capability application source index (280 files)</summary>

- `components/daydream/dream.CodeDreamIDE.tsx` — React application module.
- `components/daydream/dream.DiffViewer.tsx` — React application module.
- `components/daydream/dream.JourneyTrail.tsx` — React application module.
- `components/daydream/dream.LabDreamIDE.tsx` — React application module.
- `components/daydream/dream.NGNEngin.tsx` — React application module.
- `components/daydream/dream.OpenDaydreamSideBButton.tsx` — React application module.
- `components/daydream/dream.StandaloneEnginSurface.tsx` — React application module.
- `components/daydream/dream.constellationmap.tsx` — React application module.
- `components/daydream/dream.shell.DaydreamShell.tsx` — React application module.
- `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` — React application module.
- `components/daydream/starmaker/dream.panel.CompingPanel.tsx` — React application module.
- `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx` — React application module.
- `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx` — React application module.
- `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` — React application module.
- `engins/CodeEngin/core/parser.ts` — TypeScript/JavaScript application module.
- `engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel.tsx` — React application module.
- `engins/CodeEngin/modules/ai-co-pilot/index.ts` — TypeScript/JavaScript application module.
- `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts` — TypeScript/JavaScript application module.
- `engins/CodeEngin/orchestrator/dream.index.tsx` — React application module.
- `engins/autoopen/dream.AutoOpenGameEngin.tsx` — React application module.
- `engins/brandingengin/identity/logos.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/ai/drEamsCodeAssist.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/auth.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/diagnostics.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/diff/aiEditEngine.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/diff/diffUtils.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/git.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/pathSafety.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/projectGraph.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/runner.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/runnerCommands.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/search.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/types.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/workspaceStore.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/AssetViewport.tsx` — React application module.
- `engins/contentengin/ImplicitAssetWorkspace.tsx` — React application module.
- `engins/contentengin/assetTypes.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/assets/assetOptimizer.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/assets/indexedDBStore.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/assets/localAssetLibrary.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/geometryBuilder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/meshBuilder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/modifiers.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/primitiveBuilder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/textureBuilder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/uvGenerator.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/cli.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/composite/compositor.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/composite/fxSimulation.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/composite/matchmover.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/composite/motionCapture.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/composite/rotoscope.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/content/generativeFill.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/content/publishIntent.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/content/seoScorer.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/content/transcriptEditor.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/content/voiceClone.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/animalGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/bicycleGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/bridgeGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/buildingGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/creatureGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/humanoidGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/propGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/roadGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/shared.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/terrainGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/treeGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/vehicleGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/waterGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/materials/materialTypes.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/materials/paletteExtractor.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/materials/proceduralMaterials.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/media/h265-encoder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/media/ledger.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/media/postMedia.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/performancePlan.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/colorCluster.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/edgeDetector.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/imageAnalyzer.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/photoToRecipe.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/pngDecoder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/regionDetector.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/build.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/bundle.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/exportGlb.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/generateCollision.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/generateLods.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/paths.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/validate.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/writeManifest.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/recipes/recipeResolver.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/recipes/recipeTypes.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/recipes/seededRandom.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/rigging/fitArmature.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/rigging/index.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/rigging/landmarks.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/rigging/rigTypes.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/rigging/rigValidator.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/runtimeProfile.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/shaders/shaderRegistry.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/shaders/shaderTypes.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/upgradeMatrix.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/useImplicitAssetWorkspace.ts` — TypeScript/JavaScript application module.
- `engins/dream.ForgeEngin.tsx` — React application module.
- `engins/dream.QuantumCircuitCanvas.tsx` — React application module.
- `engins/engin.BrandingEngin.tsx` — React application module.
- `engins/engin.CodeEngin.tsx` — React application module.
- `engins/engin.ContentEngin.tsx` — React application module.
- `engins/engin.GameEngin.tsx` — React application module.
- `engins/engin.LabEngin.tsx` — React application module.
- `engins/engin.StarMakerEngin.tsx` — React application module.
- `engins/forgeengin/componentInventory.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/artifact/manifest.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/index.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/quality/tiers.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/shell/ArtifactSlot.tsx` — React application module.
- `engins/forgeengin/enginpipe/telemetry/client.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/telemetry/events.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge-ngn/assembly.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge-ngn/index.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge-ngn/piece-registry.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/engineForge.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeBuild.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeIntelligence.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeMomentum.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeNexus.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeRegistry.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeRituals.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/useForgeActivity.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/useForgeBuild.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/GameEnginCore.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/GameRuntime.tsx` — React application module.
- `engins/gameengin/accessibility-ai.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/ai-director.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/ai-npcs.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/assets/BundleCache.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/assets/BundleManifest.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/backendNegotiator.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/brain-reader.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridge-manifest.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridge.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridgeLoader.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/achievementEngine.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/apiStubs.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/loaders.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/manifest.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/reactCartridge.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/saveState.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cloud-compute.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/config/demoGameConfig.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/controls/control-mappings.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/core.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/dream-engine.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/dreamr-loader.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/executionWiring.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/gameEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/DualSenseManager.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/avatar.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/catalog.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/gameControllerButtons.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/gameControllerLeft.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/gameControllerRight.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/hooks.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/library-state.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/lucid-avenue-world.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/madmaxi-wildfall-world.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/mobileControls.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/navigation.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/performance-baseline.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/quality-plan.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/useAIDirector.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/useGameInputKeyboardBridge.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/useGamepad.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/useImmersiveGameLayout.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/useRemoteChannel.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/generative-audio.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/handlers.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/input/InputRouter.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/input/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/launcher.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/neural-render.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/path-tracing.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/platform.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/post-fx.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/power-systems.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/predictive-stream.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/procgen.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/registerCartridges.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/remote/comboMachine.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/remote/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/remote/layout.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/remote/moves.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/remote/sprintDetector.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/render/ShaderRegistry.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/runtime/FrameBudget.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/runtime/FrameClock.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/runtime/RuntimeQuality.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/runtime/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/ai.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/animation.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/assets.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/lod.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/network.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/physics.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/pooling.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/rendering.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/spatial.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/world.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/unifiedLoop.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/useUnifiedLoop.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/webgpu-runtime-shell.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/world-crdt.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/xr.ts` — TypeScript/JavaScript application module.
- `engins/isosurfaceAssetPipeline.ts` — TypeScript/JavaScript application module.
- `engins/isosurfaceDualContouring.ts` — TypeScript/JavaScript application module.
- `engins/labengin/implicitSurface.ts` — TypeScript/JavaScript application module.
- `engins/portfolio/dream.PortfolioEngin.tsx` — React application module.
- `engins/renderengin/RenderEnginViewport.tsx` — React application module.
- `engins/renderengin/advancedRendering.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/animation.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/assets.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/benchmarkProof.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/completionEvidence.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/core.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/diagnostics.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/index.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/lighting.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/liveBenchmark.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/materials.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/performanceIntegrity.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/postProcessing.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/renderSettings.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/runtimeRegistration.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/scene.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/security.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/serviceIntegration.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/serviceRuntime.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/textures.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/viewportControls.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/virtualization.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/webgpu.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/brand/brandEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/brand/useBrandEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/code/codeEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/code/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/code/useCodeEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/content/contentEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/content/useContentEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/dreams/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/forge/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/game/declarative.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/game/gameEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/game/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/game/useGameEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/homedream/dream.homedream.constants.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/homedream/dream.homedream.physics.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/homedream/dream.homedream.transforms.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/homedream/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/lab/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/lab/labEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/lab/useLabEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/music/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/music/starMakerEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/music/useStarMakerEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/useEnginWorkflow.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/workflowEngine.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/audio-fingerprint/fingerprint.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/audio-fingerprint/index.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/audio-fingerprint/peak-map.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/audio-fingerprint/stem-extractor.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/audioFingerprint.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/music/presets.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/music/starmaker.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/music/starmakerArrangement.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/music/starmakerDaw.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/music/wasmAudioBridge.ts` — TypeScript/JavaScript application module.

</details>

### ForgeEngin
ForgeEngin is a user-facing application surface subsystem composed of React components and presentation logic. It exposes useArtifactSlot, useForgeActivity, useForgeBuild as reusable hooks. It depends on Backend, System, Core & CoreSurfaces, Dreams, Widgets, Windows & Surfaces, DreamSpace.
#### Responsibilities
- Renders production surfaces/components: ForgeEngin, ArtifactPermissionSchema, EnginArtifactManifestSchema, DEFAULT_TIER_CONFIG, ArtifactSlot
#### Key Modules
- engins/forgeengin/forge/forgeRegistry.ts — isUserFacingEnginName, getEnginById, getEnginByName (important path; behavior evidence; important exports: isUserFacingEnginName, getEnginById, getEnginByName)
- engins/forgeengin/forge-ngn/piece-registry.ts — PieceManifest, PIECE_REGISTRY (important path; behavior evidence; important exports: PieceManifest, PIECE_REGISTRY)
- engins/forgeengin/forge/forgeIntelligence.ts — predictNextEngines, parseGoalToWorkflow, saveCustomWorkflow (behavior evidence; important exports: predictNextEngines, parseGoalToWorkflow, saveCustomWorkflow; large behavior file)
- engins/forgeengin/enginpipe/artifact/manifest.ts — parseManifest, safeParseManifest, createManifest (behavior evidence; important exports: parseManifest, safeParseManifest, createManifest)
- engins/forgeengin/enginpipe/quality/tiers.ts — detectCapabilityTier, CapabilityNavigator, CapabilityScreen (behavior evidence; important exports: detectCapabilityTier, CapabilityNavigator, CapabilityScreen)
- engins/forgeengin/enginpipe/telemetry/client.ts — createTelemetryClient, TelemetrySupabaseClient, TelemetryClientOptions (behavior evidence; important exports: createTelemetryClient, TelemetrySupabaseClient, TelemetryClientOptions)
- engins/forgeengin/forge-ngn/index.ts — EngineAssembly, PieceManifest, PIECE_REGISTRY (behavior evidence; important exports: EngineAssembly, PieceManifest, PIECE_REGISTRY)
- engins/forgeengin/forge/forgeNexus.ts — findDominantPipeline, NexusSnapshot (behavior evidence; important exports: findDominantPipeline, NexusSnapshot; large behavior file)
- engins/forgeengin/forge/forgeRituals.ts — detectSessionPatterns, RitualSnapshot (behavior evidence; important exports: detectSessionPatterns, RitualSnapshot; large behavior file)
- engins/forgeengin/enginpipe/telemetry/events.ts — TelemetryEventTypeSchema, TelemetryEventSchema (behavior evidence; important exports: TelemetryEventTypeSchema, TelemetryEventSchema)
- engins/dream.ForgeEngin.tsx — ForgeEngin (behavior evidence; important exports: ForgeEngin; large behavior file)
- engins/forgeengin/enginpipe/index.ts — ArtifactPermissionSchema, EnginArtifactManifestSchema, createManifest (behavior evidence; important exports: ArtifactPermissionSchema, EnginArtifactManifestSchema, createManifest; low-signal export)
#### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **DreamSpace**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreams, Widgets, Windows & Surfaces
- Depends on DreamSpace
- Depends on The Engins
#### Public Surfaces
**Production Components:**
`ArtifactPermissionSchema`, `ArtifactSlot`, `DEFAULT_TIER_CONFIG`, `EnginArtifactManifestSchema`, `ForgeEngin`
#### Notable Abstractions
- `ArtifactPermission` — type in `engins/forgeengin/enginpipe/artifact/manifest.ts`
- `EnginArtifactManifest` — type in `engins/forgeengin/enginpipe/artifact/manifest.ts`
- `ArtifactPermission` — type in `engins/forgeengin/enginpipe/index.ts`
- `EnginArtifactManifest` — type in `engins/forgeengin/enginpipe/index.ts`
- `TelemetryClient` — type in `engins/forgeengin/enginpipe/index.ts`
- `TelemetryClientOptions` — interface in `engins/forgeengin/enginpipe/index.ts`
- `TelemetrySupabaseClient` — interface in `engins/forgeengin/enginpipe/index.ts`
- `CapabilityInput` — interface in `engins/forgeengin/enginpipe/index.ts`
- `CapabilityNavigator` — interface in `engins/forgeengin/enginpipe/index.ts`
- `CapabilityScreen` — interface in `engins/forgeengin/enginpipe/index.ts`
- `CapabilityNavigator` — interface in `engins/forgeengin/enginpipe/quality/tiers.ts`
- `CapabilityScreen` — interface in `engins/forgeengin/enginpipe/quality/tiers.ts`
- `useArtifactSlot` — hook
- `useForgeActivity` — hook
- `useForgeBuild` — hook
- `useOptionalArtifactSlot` — hook
#### Capabilities
- Exposes hooks: useArtifactSlot, useForgeActivity, useForgeBuild, useOptionalArtifactSlot
- Important contract surface: TelemetryClientOptions, TelemetrySupabaseClient, CapabilityInput, CapabilityNavigator, CapabilityScreen
- Important shared type vocabulary: ArtifactPermission, EnginArtifactManifest, ArtifactPermission, EnginArtifactManifest, TelemetryClient
- Behavior functions: parseManifest, safeParseManifest, createManifest, createManifest, parseManifest, safeParseManifest
##### Application Source Structure
```text
└── engins
    ├── dream.ForgeEngin.tsx
    └── forgeengin
        ├── componentInventory.ts
        ├── enginpipe
        │   ├── artifact
        │   │   └── manifest.ts
        │   ├── index.ts
        │   ├── quality
        │   │   └── tiers.ts
        │   ├── shell
        │   │   └── ArtifactSlot.tsx
        │   └── telemetry
        │       ├── client.ts
        │       └── events.ts
        ├── forge
        │   ├── engineForge.ts
        │   ├── forgeBuild.ts
        │   ├── forgeIntelligence.ts
        │   ├── forgeMomentum.ts
        │   ├── forgeNexus.ts
        │   ├── forgeRegistry.ts
        │   ├── forgeRituals.ts
        │   ├── useForgeActivity.ts
        │   └── useForgeBuild.ts
        └── forge-ngn
            ├── assembly.ts
            ├── index.ts
            └── piece-registry.ts
```
<details><summary>ForgeEngin application source index (20 files)</summary>

- `engins/dream.ForgeEngin.tsx` — React application module.
- `engins/forgeengin/componentInventory.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/artifact/manifest.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/index.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/quality/tiers.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/shell/ArtifactSlot.tsx` — React application module.
- `engins/forgeengin/enginpipe/telemetry/client.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/telemetry/events.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge-ngn/assembly.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge-ngn/index.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge-ngn/piece-registry.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/engineForge.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeBuild.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeIntelligence.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeMomentum.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeNexus.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeRegistry.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeRituals.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/useForgeActivity.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/useForgeBuild.ts` — TypeScript/JavaScript application module.

</details>

### GameEngin
GameEngin is a full-stack application subsystem with React surfaces and API transport boundaries. Core abstractions are encapsulated in ParticlePool, ScreenShake, ParallaxLayers. It depends on Backend, System, Core & CoreSurfaces, DreamSpace, The Engins.
#### Responsibilities
- API transport boundaries: /api/gameengin
- Renders production surfaces/components: POST, AvenueOfMirrors, DefuseRitual, EchoArena, EnginFracture, GamesHub, +17 more
- Core abstractions: ParticlePool, ScreenShake, ParallaxLayers, HitStop, MadmaxiAudioController
- Authentication, sessions, authorization, and access control
- Theming, design tokens, visual customization, or settings surfaces
- GameEngin cartridge/runtime interaction or playable system behavior
#### Key Modules
- engins/engin.GameEngin.tsx — GameEngin (important path; behavior evidence; Engin entry)
- components/games/madmaxi/authoredZonePacks.ts — getAuthoredStarterLevel, isMadmaxiAuthoredLevel (important path; behavior evidence; important exports: getAuthoredStarterLevel, isMadmaxiAuthoredLevel)
- components/games/madmaxi/audio.ts — MadmaxiAudioController (important path; behavior evidence; important exports: MadmaxiAudioController)
- app/api/gameengin/crash-report/route.ts (important path; behavior evidence; API boundary)
- components/games/dream.EnginFracture.tsx — EnginFracture (important path; behavior evidence; important exports: EnginFracture)
- components/games/dream.BabylonSideScroller.tsx — isMadmaxiAuthoredLevel (important path; behavior evidence; important exports: isMadmaxiAuthoredLevel)
- components/games/madmaxi/index.ts — isMadmaxiAuthoredLevel (important path; behavior evidence; important exports: isMadmaxiAuthoredLevel)
- components/games/madmaxi/levels.ts — isMadmaxiAuthoredLevel (important path; behavior evidence; important exports: isMadmaxiAuthoredLevel)
- components/games/dream.AvenueOfMirrors.tsx (important path; behavior evidence; large behavior file)
- components/games/dream.EchoArena.tsx (important path; behavior evidence; large behavior file)
- components/games/dream.GamesHub.tsx (important path; behavior evidence; large behavior file)
- components/games/dream.Glassfall.tsx (important path; behavior evidence; large behavior file)
#### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **DreamSpace**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on DreamSpace
- Depends on The Engins
- Depends on User-Facing Modularity
#### Public Surfaces
**API Endpoints:**
- `/api/gameengin/crash-report` `[POST]` — `app/api/gameengin/crash-report/route.ts`
**Production Components:**
`AvenueOfMirrors`, `BabylonSideScroller`, `DefuseRitual`, `EchoArena`, `EnginFracture`, `GAMES`, `GameEngin`, `GameHUD`, `GameRemote`, `GamesHub`, +12 more
#### Notable Abstractions
- `ScreenShake` — class in `components/games/_fx/canvasFx.ts`
- `ParallaxLayers` — class in `components/games/_fx/canvasFx.ts`
- `HitStop` — class in `components/games/_fx/canvasFx.ts`
- `MadmaxiAudioController` — class in `components/games/madmaxi/audio.ts`
#### Capabilities
- Behavior functions: isMadmaxiAuthoredLevel, getAuthoredStarterLevel, isMadmaxiAuthoredLevel, isMadmaxiAuthoredLevel, isMadmaxiAuthoredLevel, AutoOpenGameEngin
- Write endpoints for mutations
##### Application Source Structure
```text
├── app
│   └── api
│       └── gameengin
│           └── crash-report
│               └── route.ts
├── components
│   └── games
│       ├── _fx
│       │   └── canvasFx.ts
│       ├── dream.AvenueOfMirrors.tsx
│       ├── dream.BabylonSideScroller.tsx
│       ├── dream.DefuseRitual.tsx
│       ├── dream.EchoArena.tsx
│       ├── dream.EnginFracture.tsx
│       ├── dream.GameController.module.css
│       ├── dream.GameController.tsx
│       ├── dream.GamesHub.tsx
│       ├── dream.Glassfall.tsx
│       ├── dream.Leaderboard.tsx
│       ├── dream.LexiconSolitaire.tsx
│       ├── dream.MadMaxiWildfall.tsx
│       ├── dream.NeonDrift.tsx
│       ├── dream.NiteFlyerSolarHymn.tsx
│       ├── dream.NullCathedral.tsx
│       ├── dream.RecordingControls.tsx
│       ├── dream.SerpentSiege.tsx
│       ├── dream.VoidlineGP.tsx
│       ├── dream.hud.GameHUD.tsx
│       ├── dream.hud.LegacyGameHUD.tsx
│       ├── dream.hud.MobileGameHUD.module.css
│       ├── dream.hud.MobileGameHUD.tsx
│       ├── dream.remote.GameRemote.tsx
│       ├── dream.remote.GameRemoteSurface.tsx
│       ├── dream.remote.LegacyGameRemote.tsx
│       └── madmaxi
│           ├── audio.ts
│           ├── authoredZonePacks.ts
│           ├── config.ts
│           ├── dream.MadmaxiGame.tsx
│           ├── index.ts
│           ├── levels.ts
│           ├── materials.ts
│           ├── types.ts
│           └── vfx.ts
└── engins
    ├── autoopen
    │   └── dream.AutoOpenGameEngin.tsx
    └── engin.GameEngin.tsx
```
<details><summary>GameEngin application source index (38 files)</summary>

- `app/api/gameengin/crash-report/route.ts` — API route transport boundary.
- `components/games/_fx/canvasFx.ts` — TypeScript/JavaScript application module.
- `components/games/dream.AvenueOfMirrors.tsx` — React application module.
- `components/games/dream.BabylonSideScroller.tsx` — React application module.
- `components/games/dream.DefuseRitual.tsx` — React application module.
- `components/games/dream.EchoArena.tsx` — React application module.
- `components/games/dream.EnginFracture.tsx` — React application module.
- `components/games/dream.GameController.module.css` — application style source.
- `components/games/dream.GameController.tsx` — React application module.
- `components/games/dream.GamesHub.tsx` — React application module.
- `components/games/dream.Glassfall.tsx` — React application module.
- `components/games/dream.Leaderboard.tsx` — React application module.
- `components/games/dream.LexiconSolitaire.tsx` — React application module.
- `components/games/dream.MadMaxiWildfall.tsx` — React application module.
- `components/games/dream.NeonDrift.tsx` — React application module.
- `components/games/dream.NiteFlyerSolarHymn.tsx` — React application module.
- `components/games/dream.NullCathedral.tsx` — React application module.
- `components/games/dream.RecordingControls.tsx` — React application module.
- `components/games/dream.SerpentSiege.tsx` — React application module.
- `components/games/dream.VoidlineGP.tsx` — React application module.
- `components/games/dream.hud.GameHUD.tsx` — React application module.
- `components/games/dream.hud.LegacyGameHUD.tsx` — React application module.
- `components/games/dream.hud.MobileGameHUD.module.css` — application style source.
- `components/games/dream.hud.MobileGameHUD.tsx` — React application module.
- `components/games/dream.remote.GameRemote.tsx` — React application module.
- `components/games/dream.remote.GameRemoteSurface.tsx` — React application module.
- `components/games/dream.remote.LegacyGameRemote.tsx` — React application module.
- `components/games/madmaxi/audio.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/authoredZonePacks.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/config.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/dream.MadmaxiGame.tsx` — React application module.
- `components/games/madmaxi/index.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/levels.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/materials.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/types.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/vfx.ts` — TypeScript/JavaScript application module.
- `engins/autoopen/dream.AutoOpenGameEngin.tsx` — React application module.
- `engins/engin.GameEngin.tsx` — React application module.

</details>

### LabEngin
LabEngin is a user-facing application surface subsystem composed of React components and presentation logic. It depends on Backend, System, Core & CoreSurfaces, Dreams, Widgets, Windows & Surfaces, DreamSpace.
#### Responsibilities
- Renders production surfaces/components: LabDreamIDE, QuantumCircuitCanvas, LabEngin
#### Key Modules
- engins/engin.LabEngin.tsx — LabEngin (important path; behavior evidence; Engin entry)
- components/daydream/dream.LabDreamIDE.tsx — LabDreamIDE (important path; behavior evidence; important exports: LabDreamIDE)
#### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **DreamSpace**
- Depends on **The Engins**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreams, Widgets, Windows & Surfaces
- Depends on DreamSpace
- Depends on The Engins
#### Public Surfaces
**Production Components:**
`LabDreamIDE`, `LabEngin`, `QuantumCircuitCanvas`
##### Application Source Structure
```text
├── components
│   └── daydream
│       └── dream.LabDreamIDE.tsx
└── engins
    ├── dream.QuantumCircuitCanvas.tsx
    └── engin.LabEngin.tsx
```
<details><summary>LabEngin application source index (3 files)</summary>

- `components/daydream/dream.LabDreamIDE.tsx` — React application module.
- `engins/dream.QuantumCircuitCanvas.tsx` — React application module.
- `engins/engin.LabEngin.tsx` — React application module.

</details>

### PortfolioEngin
PortfolioEngin is a user-facing application surface subsystem composed of React components and presentation logic. It depends on DreamSpace, The Engins.
#### Responsibilities
- Renders production surfaces/components: PortfolioEngin
#### Key Modules
- engins/portfolio/dream.PortfolioEngin.tsx — PortfolioEngin (behavior evidence; important exports: PortfolioEngin; large behavior file)
#### Architectural Relationships
- Depends on **DreamSpace**
- Depends on **The Engins**
- Integrates with the Engin / Runtime layer for execution orchestration
- Depends on DreamSpace
- Depends on The Engins
#### Public Surfaces
**Production Components:**
`PortfolioEngin`
##### Application Source Structure
```text
└── engins
    └── portfolio
        └── dream.PortfolioEngin.tsx
```
<details><summary>PortfolioEngin application source index (1 files)</summary>

- `engins/portfolio/dream.PortfolioEngin.tsx` — React application module.

</details>

### StarMakerEngin
StarMakerEngin is a user-facing application surface subsystem composed of React components and presentation logic. It depends on Backend, System, Core & CoreSurfaces, Dreams, Widgets, Windows & Surfaces, DreamSpace.
#### Responsibilities
- Renders production surfaces/components: StarMakerEngin, STAR_MAKER_ENGIN_RULE_SET
- Runtime orchestration, capability routing, and Engin lifecycle coordination
#### Key Modules
- engins/engin.StarMakerEngin.tsx — StarMakerEngin (important path; behavior evidence; Engin entry)
- engins/rulesets/music/starMakerEnginRuleSet.ts — StemChannel, StarMakerEnginDerivedState, StarMakerEnginAction (important path; behavior evidence; important exports: StemChannel, StarMakerEnginDerivedState, StarMakerEnginAction)
#### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **DreamSpace**
- Depends on **Dual Runtimes**
- Depends on **The Engins**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreams, Widgets, Windows & Surfaces
- Depends on DreamSpace
- Depends on Dual Runtimes
#### Public Surfaces
**Production Components:**
`STAR_MAKER_ENGIN_RULE_SET`, `StarMakerEngin`
#### Notable Abstractions
- `StemChannel` — interface in `engins/rulesets/music/starMakerEnginRuleSet.ts`
- `StarMakerEnginDerivedState` — interface in `engins/rulesets/music/starMakerEnginRuleSet.ts`
- `StarMakerEnginAction` — type in `engins/rulesets/music/starMakerEnginRuleSet.ts`
#### Capabilities
- Important contract surface: StemChannel, StarMakerEnginDerivedState
- Important shared type vocabulary: StarMakerEnginAction
##### Application Source Structure
```text
└── engins
    ├── engin.StarMakerEngin.tsx
    └── rulesets
        └── music
            └── starMakerEnginRuleSet.ts
```
<details><summary>StarMakerEngin application source index (2 files)</summary>

- `engins/engin.StarMakerEngin.tsx` — React application module.
- `engins/rulesets/music/starMakerEnginRuleSet.ts` — TypeScript/JavaScript application module.

</details>

## Runtime Orchestration
Runtime Orchestration is a user-facing application surface subsystem composed of React components and presentation logic. It exposes useBrandingEnginBridge, useCodeEnginBridge, useContentEnginBridge as reusable hooks. Core abstractions are encapsulated in EnginDispatcher, SpatialRuntimeCore, IntentBus. It depends on app, Backend, System, Core & CoreSurfaces, Dreams, Widgets, Windows & Surfaces.
### Responsibilities
- Renders production surfaces/components: DualRuntimeContainer, RuntimeView, RuntimeShell, CAPABILITY_DESCRIPTORS, INFORMATION_DOMAINS, DEFAULT_DUAL_RUNTIME, +12 more
- Core abstractions: EnginDispatcher, SpatialRuntimeCore, IntentBus, UniversalEngine, RuntimeContainer
- Runtime orchestration, capability routing, and Engin lifecycle coordination
- Authentication, sessions, authorization, and access control
- Messaging, conversations, notifications, realtime channels, or presence
- GameEngin cartridge/runtime interaction or playable system behavior
### Key Modules
- engine/runtime/EnginDispatcher.ts — initWasmEngine, WorkerInitMessage, WorkerStopMessage (important path; behavior evidence; runtime layer)
- engine/runtime/iEngine.ts — authorizeCapability, validateManifest, createRuntimeObject (important path; behavior evidence; runtime layer)
- engine/runtime/index.ts — RegistrySlot, RegistryEntry, UniversalEngine (important path; behavior evidence; runtime layer)
- engine/runtime/useEnginBridge.ts — useCodeEnginBridge, useGameEnginBridge, useStarMakerEnginBridge (important path; behavior evidence; runtime layer)
- engine/runtime/runtimeContainer.ts — RuntimeStrategy, RuntimeContainerOptions, RuntimeContainer (important path; behavior evidence; runtime layer)
- engine/runtime/useDragSurface.ts — useDragSurface, UseDragSurfaceOptions, UseDragSurfaceResult (important path; behavior evidence; runtime layer)
- engine/runtime/useDualRuntime.ts — useDualRuntime, UseDualRuntimeReturn, BridgeEventHandler (important path; behavior evidence; runtime layer)
- engine/runtime/useEnginCoopSync.ts — useEnginCoopSync, UseEnginCoopSyncOptions, UseEnginCoopSyncResult (important path; behavior evidence; runtime layer)
- engine/runtime/useSharedEnginChannel.ts — useSharedEnginChannel, SharedEnginChannelOptions, SharedEnginChannelResult (important path; behavior evidence; runtime layer)
- components/runtime/dream.DualRuntimeContainer.tsx — useDualRuntime, DualRuntimeContainer (important path; behavior evidence; runtime layer)
- engine/runtime/dreamOSBus.ts — isIntentEnvelope, getCapabilityDescriptor, getCapabilityChildren (important path; behavior evidence; runtime layer)
- engine/runtime/dualRuntime.ts — setRuntimeWorld, swapDominantRuntime, makeHomeDreamSpaceActive (important path; behavior evidence; runtime layer)
### Architectural Relationships
- Depends on **app**
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **Dual Runtimes**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on app
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreams, Widgets, Windows & Surfaces
- Depends on Dual Runtimes
### Public Surfaces
**Production Components:**
`CAPABILITY_DESCRIPTORS`, `COMPETING_PLATFORMS`, `DEFAULT_DUAL_RUNTIME`, `DEFAULT_VM_CONFIG`, `DEFAULT_VM_QUOTAS`, `DualRuntimeContainer`, `ENGIN_KEYS`, `ErrorCode`, `INFORMATION_DOMAINS`, `RUNTIME_REGIONS`, +8 more
### Notable Abstractions
- `WorkerInitMessage` — interface in `engine/runtime/EnginDispatcher.ts`
- `WorkerStopMessage` — interface in `engine/runtime/EnginDispatcher.ts`
- `WorkerTickMessage` — interface in `engine/runtime/EnginDispatcher.ts`
- `WorkerBoundsViolationMessage` — interface in `engine/runtime/EnginDispatcher.ts`
- `WorkerWasmBudgetExceededMessage` — interface in `engine/runtime/EnginDispatcher.ts`
- `DispatcherToWorkerMessage` — type in `engine/runtime/EnginDispatcher.ts`
- `WorkerToDispatcherMessage` — type in `engine/runtime/EnginDispatcher.ts`
- `WorkerOutboundMessage` — type in `engine/runtime/EnginDispatcher.ts`
- `WorkerInboundMessage` — type in `engine/runtime/EnginDispatcher.ts`
- `WasmEngineExports` — interface in `engine/runtime/EnginDispatcher.ts`
- `RenderDispatcherIntent` — interface in `engine/runtime/EnginDispatcher.ts`
- `DispatcherStats` — interface in `engine/runtime/EnginDispatcher.ts`
- `useBrandingEnginBridge` — hook
- `useCodeEnginBridge` — hook
- `useContentEnginBridge` — hook
- `useDragSurface` — hook
- `useDualRuntime` — hook
- `useDualRuntimePersistence` — hook
- `useEnginCoopSync` — hook
- `useGameEnginBridge` — hook
### Capabilities
- Exposes hooks: useBrandingEnginBridge, useCodeEnginBridge, useContentEnginBridge, useDragSurface, useDualRuntime, useDualRuntimePersistence, +5 more
- Important contract surface: WorkerInitMessage, WorkerStopMessage, WorkerTickMessage, WorkerBoundsViolationMessage, WorkerWasmBudgetExceededMessage
- Important shared type vocabulary: DispatcherToWorkerMessage, WorkerToDispatcherMessage, WorkerOutboundMessage, WorkerInboundMessage, ApperceptiveSurface
- Behavior functions: initWasmEngine, getChannelMetrics, getAllChannelMetrics, resetChannelMetrics, isIntentEnvelope, getCapabilityDescriptor
#### Application Source Structure
```text
├── components
│   └── runtime
│       ├── dream.DualRuntimeContainer.tsx
│       ├── dream.RuntimeView.tsx
│       └── dream.shell.RuntimeShell.tsx
└── engine
    ├── runtime
    │   ├── EnginDispatcher.ts
    │   ├── apperception.ts
    │   ├── channelMetrics.ts
    │   ├── coercionTable.ts
    │   ├── dreamOSBus.ts
    │   ├── dreamsurface
    │   │   ├── dreamsurface.bridge.ts
    │   │   ├── dreamsurface.delta.ts
    │   │   └── index.ts
    │   ├── dropTargetRegistry.ts
    │   ├── dualRuntime.ts
    │   ├── dualRuntimeBridge.ts
    │   ├── engin.auth.ts
    │   ├── engin.eventbus.ts
    │   ├── engin.ledger.ts
    │   ├── engin.renderloop.ts
    │   ├── enginWorkflowRegistry.ts
    │   ├── iEngine.ts
    │   ├── index.ts
    │   ├── instanceManager.ts
    │   ├── isAuthRelatedError.ts
    │   ├── madMaxiSnapshotBridge.ts
    │   ├── memory.ts
    │   ├── moduleRegistry.ts
    │   ├── offlineQueue.ts
    │   ├── quantumCircuit.ts
    │   ├── runtimeChannel.ts
    │   ├── runtimeContainer.ts
    │   ├── seamClipboard.ts
    │   ├── sharedResourcePool.ts
    │   ├── snapshotFingerprint.ts
    │   ├── superciliousPlatformRuntime.ts
    │   ├── swapManager.ts
    │   ├── useDragSurface.ts
    │   ├── useDualRuntime.ts
    │   ├── useDualRuntimePersistence.ts
    │   ├── useEnginBridge.ts
    │   ├── useEnginCoopSync.ts
    │   └── useSharedEnginChannel.ts
    └── vm
        ├── bufferManager.ts
        ├── bus-events.ts
        ├── dual-runtime.ts
        ├── dualVMCoordinator.ts
        ├── index.ts
        ├── inter-vm-messaging.ts
        ├── pipelineCache.ts
        ├── resource-quota.ts
        ├── security.ts
        ├── snapshot.ts
        ├── types.ts
        ├── wasm-features.ts
        └── wasmGpuVM.ts
```
<details><summary>Runtime Orchestration application source index (54 files)</summary>

- `components/runtime/dream.DualRuntimeContainer.tsx` — React application module.
- `components/runtime/dream.RuntimeView.tsx` — React application module.
- `components/runtime/dream.shell.RuntimeShell.tsx` — React application module.
- `engine/runtime/EnginDispatcher.ts` — TypeScript/JavaScript application module.
- `engine/runtime/apperception.ts` — TypeScript/JavaScript application module.
- `engine/runtime/channelMetrics.ts` — TypeScript/JavaScript application module.
- `engine/runtime/coercionTable.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamOSBus.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamsurface/dreamsurface.bridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamsurface/dreamsurface.delta.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamsurface/index.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dropTargetRegistry.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dualRuntime.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dualRuntimeBridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.auth.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.eventbus.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.ledger.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.renderloop.ts` — TypeScript/JavaScript application module.
- `engine/runtime/enginWorkflowRegistry.ts` — TypeScript/JavaScript application module.
- `engine/runtime/iEngine.ts` — TypeScript/JavaScript application module.
- `engine/runtime/index.ts` — TypeScript/JavaScript application module.
- `engine/runtime/instanceManager.ts` — TypeScript/JavaScript application module.
- `engine/runtime/isAuthRelatedError.ts` — TypeScript/JavaScript application module.
- `engine/runtime/madMaxiSnapshotBridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/memory.ts` — TypeScript/JavaScript application module.
- `engine/runtime/moduleRegistry.ts` — TypeScript/JavaScript application module.
- `engine/runtime/offlineQueue.ts` — TypeScript/JavaScript application module.
- `engine/runtime/quantumCircuit.ts` — TypeScript/JavaScript application module.
- `engine/runtime/runtimeChannel.ts` — TypeScript/JavaScript application module.
- `engine/runtime/runtimeContainer.ts` — TypeScript/JavaScript application module.
- `engine/runtime/seamClipboard.ts` — TypeScript/JavaScript application module.
- `engine/runtime/sharedResourcePool.ts` — TypeScript/JavaScript application module.
- `engine/runtime/snapshotFingerprint.ts` — TypeScript/JavaScript application module.
- `engine/runtime/superciliousPlatformRuntime.ts` — TypeScript/JavaScript application module.
- `engine/runtime/swapManager.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useDragSurface.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useDualRuntime.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useDualRuntimePersistence.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useEnginBridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useEnginCoopSync.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useSharedEnginChannel.ts` — TypeScript/JavaScript application module.
- `engine/vm/bufferManager.ts` — TypeScript/JavaScript application module.
- `engine/vm/bus-events.ts` — TypeScript/JavaScript application module.
- `engine/vm/dual-runtime.ts` — TypeScript/JavaScript application module.
- `engine/vm/dualVMCoordinator.ts` — TypeScript/JavaScript application module.
- `engine/vm/index.ts` — TypeScript/JavaScript application module.
- `engine/vm/inter-vm-messaging.ts` — TypeScript/JavaScript application module.
- `engine/vm/pipelineCache.ts` — TypeScript/JavaScript application module.
- `engine/vm/resource-quota.ts` — TypeScript/JavaScript application module.
- `engine/vm/security.ts` — TypeScript/JavaScript application module.
- `engine/vm/snapshot.ts` — TypeScript/JavaScript application module.
- `engine/vm/types.ts` — TypeScript/JavaScript application module.
- `engine/vm/wasm-features.ts` — TypeScript/JavaScript application module.
- `engine/vm/wasmGpuVM.ts` — TypeScript/JavaScript application module.

</details>

## Dual Runtimes
Dual Runtimes is a user-facing application surface subsystem composed of React components and presentation logic. It exposes useBrandingEnginBridge, useCodeEnginBridge, useContentEnginBridge as reusable hooks. Core abstractions are encapsulated in EnginDispatcher, SpatialRuntimeCore, IntentBus. It depends on app, Backend, System, Core & CoreSurfaces, Dreams, Widgets, Windows & Surfaces.
### Responsibilities
- Renders production surfaces/components: DualRuntimeContainer, RuntimeView, RuntimeShell, DreamDMBar, BAR_H, NAV_H, +42 more
- Core abstractions: EnginDispatcher, SpatialRuntimeCore, IntentBus, UniversalEngine, RuntimeContainer
- Runtime orchestration, capability routing, and Engin lifecycle coordination
- Authentication, sessions, authorization, and access control
- Messaging, conversations, notifications, realtime channels, or presence
- GameEngin cartridge/runtime interaction or playable system behavior
### Key Modules
- engine/runtime/EnginDispatcher.ts — initWasmEngine, WorkerInitMessage, WorkerStopMessage (important path; behavior evidence; runtime layer)
- engine/runtime/iEngine.ts — authorizeCapability, validateManifest, createRuntimeObject (important path; behavior evidence; runtime layer)
- engine/runtime/index.ts — RegistrySlot, RegistryEntry, UniversalEngine (important path; behavior evidence; runtime layer)
- engine/runtime/useEnginBridge.ts — useCodeEnginBridge, useGameEnginBridge, useStarMakerEnginBridge (important path; behavior evidence; runtime layer)
- dreamdmbar/runtime/DreamSystemContext.tsx — DreamSystemProvider, BarIntentMode, BarIntent (important path; behavior evidence; DreamDMBar layer)
- engine/runtime/runtimeContainer.ts — RuntimeStrategy, RuntimeContainerOptions, RuntimeContainer (important path; behavior evidence; runtime layer)
- engine/runtime/useDragSurface.ts — useDragSurface, UseDragSurfaceOptions, UseDragSurfaceResult (important path; behavior evidence; runtime layer)
- engine/runtime/useDualRuntime.ts — useDualRuntime, UseDualRuntimeReturn, BridgeEventHandler (important path; behavior evidence; runtime layer)
- engine/runtime/useEnginCoopSync.ts — useEnginCoopSync, UseEnginCoopSyncOptions, UseEnginCoopSyncResult (important path; behavior evidence; runtime layer)
- engine/runtime/useSharedEnginChannel.ts — useSharedEnginChannel, SharedEnginChannelOptions, SharedEnginChannelResult (important path; behavior evidence; runtime layer)
- components/runtime/dream.DualRuntimeContainer.tsx — useDualRuntime, DualRuntimeContainer (important path; behavior evidence; runtime layer)
- dreamdmbar/hooks/useDreamBarContext.ts — detectSurface, resolveIntentOverride, useDreamBarContext (important path; behavior evidence; DreamDMBar layer)
### Architectural Relationships
- Depends on **app**
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **Runtime Orchestration**
- Depends on **Shared Dreams**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Participates in the Shared Dreams pub/sub channel system
- Consumes backend, engine, Supabase, or core system services
- Depends on app
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreams, Widgets, Windows & Surfaces
- Depends on Runtime Orchestration
### Public Surfaces
**Production Components:**
`BAR_FLING_LINE_RATIO`, `BAR_FLING_TO_BOTTOM_VELOCITY_THRESHOLD_PX_PER_MS`, `BAR_FLING_TO_TOP_MIN_DRAG_PX`, `BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS`, `BAR_H`, `BAR_SNAP_TO_TOP_HEIGHT_RATIO`, `BAR_SNAP_TO_TOP_THRESHOLD_PX`, `CAPABILITY_DESCRIPTORS`, `COMPETING_PLATFORMS`, `DEFAULT_BAR_INTENT`, +38 more
### Notable Abstractions
- `DreamBarSurface` — type in `dreamdmbar/hooks/useDreamBarContext.ts`
- `DreamBarContext` — interface in `dreamdmbar/hooks/useDreamBarContext.ts`
- `DMConversation` — interface in `dreamdmbar/hooks/useDreamDMConversations.ts`
- `DMMessage` — interface in `dreamdmbar/hooks/useDreamDMMessages.ts`
- `UseDreamSearchReturn` — interface in `dreamdmbar/hooks/useDreamSearch.ts`
- `SendMessageParams` — interface in `dreamdmbar/hooks/useMessagingCore.ts`
- `UseModuleBarIntentResult` — interface in `dreamdmbar/hooks/useModuleBarIntent.ts`
- `DbNotificationContent` — type in `dreamdmbar/notifications/notificationHelpers.ts`
- `DbNotificationRow` — interface in `dreamdmbar/notifications/notificationHelpers.ts`
- `UiNotificationType` — type in `dreamdmbar/notifications/notificationHelpers.ts`
- `UiNotification` — interface in `dreamdmbar/notifications/notificationHelpers.ts`
- `UseNotificationsReturn` — interface in `dreamdmbar/notifications/useNotifications.ts`
- `useBrandingEnginBridge` — hook
- `useCodeEnginBridge` — hook
- `useContentEnginBridge` — hook
- `useDragSurface` — hook
- `useDreamBarContext` — hook
- `useDreamDMConversations` — hook
- `useDreamDMDraft` — hook
- `useDreamDMMessages` — hook
### Capabilities
- Exposes hooks: useBrandingEnginBridge, useCodeEnginBridge, useContentEnginBridge, useDragSurface, useDreamBarContext, useDreamDMConversations, +15 more
- Important contract surface: DreamBarContext, DMConversation, DMMessage, UseDreamSearchReturn, SendMessageParams
- Important shared type vocabulary: DreamBarSurface, DbNotificationContent, UiNotificationType, BarIntentMode, SurfaceAccent
- Behavior functions: detectSurface, resolveIntentOverride, mapNotificationType, getNotificationTitle, getNotificationActionUrl, extractNotificationMessage
#### Application Source Structure
```text
├── components
│   └── runtime
│       ├── dream.DualRuntimeContainer.tsx
│       ├── dream.RuntimeView.tsx
│       └── dream.shell.RuntimeShell.tsx
├── dreamdmbar
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
│   │   ├── apperception.ts
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
│   │   ├── superciliousPlatformRuntime.ts
│   │   ├── swapManager.ts
│   │   ├── useDragSurface.ts
│   │   ├── useDualRuntime.ts
│   │   ├── useDualRuntimePersistence.ts
│   │   ├── useEnginBridge.ts
│   │   ├── useEnginCoopSync.ts
│   │   └── useSharedEnginChannel.ts
│   └── vm
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
<details><summary>Dual Runtimes application source index (70 files)</summary>

- `components/runtime/dream.DualRuntimeContainer.tsx` — React application module.
- `components/runtime/dream.RuntimeView.tsx` — React application module.
- `components/runtime/dream.shell.RuntimeShell.tsx` — React application module.
- `dreamdmbar/dream.GlowingLight.tsx` — React application module.
- `dreamdmbar/dreamsurface.dreamdmbar.tsx` — React application module.
- `dreamdmbar/hooks/useDreamBarContext.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamDMConversations.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamDMDraft.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamDMMessages.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamSearch.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useMessagingCore.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useModuleBarIntent.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useNotifications.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/notifications/notificationHelpers.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/notifications/useNotifications.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/runtime/DreamSystemContext.tsx` — React application module.
- `dreamdmbar/runtime/barInteractions.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/runtime/bridgeSeamFlow.ts` — TypeScript/JavaScript application module.
- `engine/runtime/EnginDispatcher.ts` — TypeScript/JavaScript application module.
- `engine/runtime/apperception.ts` — TypeScript/JavaScript application module.
- `engine/runtime/channelMetrics.ts` — TypeScript/JavaScript application module.
- `engine/runtime/coercionTable.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamOSBus.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamsurface/dreamsurface.bridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamsurface/dreamsurface.delta.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamsurface/index.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dropTargetRegistry.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dualRuntime.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dualRuntimeBridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.auth.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.eventbus.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.ledger.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.renderloop.ts` — TypeScript/JavaScript application module.
- `engine/runtime/enginWorkflowRegistry.ts` — TypeScript/JavaScript application module.
- `engine/runtime/iEngine.ts` — TypeScript/JavaScript application module.
- `engine/runtime/index.ts` — TypeScript/JavaScript application module.
- `engine/runtime/instanceManager.ts` — TypeScript/JavaScript application module.
- `engine/runtime/isAuthRelatedError.ts` — TypeScript/JavaScript application module.
- `engine/runtime/madMaxiSnapshotBridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/memory.ts` — TypeScript/JavaScript application module.
- `engine/runtime/moduleRegistry.ts` — TypeScript/JavaScript application module.
- `engine/runtime/offlineQueue.ts` — TypeScript/JavaScript application module.
- `engine/runtime/quantumCircuit.ts` — TypeScript/JavaScript application module.
- `engine/runtime/runtimeChannel.ts` — TypeScript/JavaScript application module.
- `engine/runtime/runtimeContainer.ts` — TypeScript/JavaScript application module.
- `engine/runtime/seamClipboard.ts` — TypeScript/JavaScript application module.
- `engine/runtime/sharedResourcePool.ts` — TypeScript/JavaScript application module.
- `engine/runtime/snapshotFingerprint.ts` — TypeScript/JavaScript application module.
- `engine/runtime/superciliousPlatformRuntime.ts` — TypeScript/JavaScript application module.
- `engine/runtime/swapManager.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useDragSurface.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useDualRuntime.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useDualRuntimePersistence.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useEnginBridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useEnginCoopSync.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useSharedEnginChannel.ts` — TypeScript/JavaScript application module.
- `engine/vm/bufferManager.ts` — TypeScript/JavaScript application module.
- `engine/vm/bus-events.ts` — TypeScript/JavaScript application module.
- `engine/vm/dual-runtime.ts` — TypeScript/JavaScript application module.
- `engine/vm/dualVMCoordinator.ts` — TypeScript/JavaScript application module.
- `engine/vm/index.ts` — TypeScript/JavaScript application module.
- `engine/vm/inter-vm-messaging.ts` — TypeScript/JavaScript application module.
- `engine/vm/pipelineCache.ts` — TypeScript/JavaScript application module.
- `engine/vm/resource-quota.ts` — TypeScript/JavaScript application module.
- `engine/vm/security.ts` — TypeScript/JavaScript application module.
- `engine/vm/snapshot.ts` — TypeScript/JavaScript application module.
- `engine/vm/types.ts` — TypeScript/JavaScript application module.
- `engine/vm/wasm-features.ts` — TypeScript/JavaScript application module.
- `engine/vm/wasmGpuVM.ts` — TypeScript/JavaScript application module.
- `hooks/useSharedDream.ts` — TypeScript/JavaScript application module.

</details>

## Shared Dreams
Shared Dreams is a full-stack application subsystem with React surfaces and API transport boundaries. It exposes useSharedDream, useSharedDreamSession as reusable hooks. It depends on Backend, System, Core & CoreSurfaces, Dreams, Widgets, Windows & Surfaces, The Engins.
### Responsibilities
- API transport boundaries: /api/dreams
- Renders production surfaces/components: POST, GET, GET, POST, InviteFlow, SharedDreamCanvas, +2 more
- Database access, persistence, and server-side data coordination
- Messaging, conversations, notifications, realtime channels, or presence
- Feed, post, comment, ranking, or social interaction behavior
### Key Modules
- engine/sharedDream.ts — createSharedDreamSession, joinSharedDreamSession, broadcastMediaSync (important path; behavior evidence; important exports: createSharedDreamSession, joinSharedDreamSession, broadcastMediaSync)
- components/shared-dream/dream.SharedDreamProvider.tsx — SharedDreamProvider, useSharedDream, SharedDreamContextValue (important path; behavior evidence; important exports: SharedDreamProvider, useSharedDream, SharedDreamContextValue)
- supabase/realtime.ts — subscribeDreamR, subscribeLiveMessages, trackPresence (important path; behavior evidence; important exports: subscribeDreamR, subscribeLiveMessages, trackPresence)
- app/api/dreams/feed/route.ts (important path; behavior evidence; API boundary)
- app/api/dreams/instances/route.ts (important path; behavior evidence; API boundary)
- app/api/dreams/transfer/route.ts (important path; behavior evidence; API boundary)
- components/shared-dream/index.ts — SharedDreamProvider, useSharedDream, SharedDreamContextValue (important path; behavior evidence; important exports: SharedDreamProvider, useSharedDream, SharedDreamContextValue)
- hooks/useSharedDream.ts — useSharedDream, UseSharedDreamReturn (behavior evidence; important exports: useSharedDream, UseSharedDreamReturn; important hook)
- components/shared-dream/dream.SharedDreamRuntime.tsx — SharedDreamRuntime (important path; behavior evidence; important exports: SharedDreamRuntime)
- components/shared-dream/dream.SharedDreamCanvas.tsx — SharedDreamCanvas (important path; behavior evidence; important exports: SharedDreamCanvas)
- components/shared-dream/dream.InviteFlow.tsx (important path; behavior evidence; low-signal export)
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreams, Widgets, Windows & Surfaces
- Depends on The Engins
- Depends on User-Facing Modularity
### Public Surfaces
**API Endpoints:**
- `/api/dreams/feed` `[GET, POST]` — `app/api/dreams/feed/route.ts`
- `/api/dreams/instances` `[GET]` — `app/api/dreams/instances/route.ts`
- `/api/dreams/transfer` `[POST]` — `app/api/dreams/transfer/route.ts`
**Production Components:**
`GET`, `InviteFlow`, `POST`, `SharedDreamCanvas`, `SharedDreamProvider`, `SharedDreamRuntime`
### Notable Abstractions
- `SharedDreamContextValue` — interface in `components/shared-dream/dream.SharedDreamProvider.tsx`
- `SharedDreamContextValue` — interface in `components/shared-dream/index.ts`
- `SharedDreamSession` — type in `engine/sharedDream.ts`
- `DreamEventType` — type in `engine/sharedDream.ts`
- `DreamBroadcastPayload` — type in `engine/sharedDream.ts`
- `DreamEventHandler` — type in `engine/sharedDream.ts`
- `DreamSessionRole` — type in `engine/sharedDream.ts`
- `DreamSessionMode` — type in `engine/sharedDream.ts`
- `DreamPresenceUpdate` — type in `engine/sharedDream.ts`
- `SharedDreamSessionOptions` — interface in `engine/sharedDream.ts`
- `SharedDreamActivityEntry` — interface in `engine/sharedDream.ts`
- `SharedDreamMember` — interface in `engine/sharedDream.ts`
- `useSharedDream` — hook
- `useSharedDreamSession` — hook
### Capabilities
- Exposes hooks: useSharedDream, useSharedDreamSession
- Important contract surface: SharedDreamContextValue, SharedDreamContextValue, SharedDreamSessionOptions, SharedDreamActivityEntry, SharedDreamMember
- Important shared type vocabulary: SharedDreamSession, DreamEventType, DreamBroadcastPayload, DreamEventHandler, DreamSessionRole
- Behavior functions: SharedDreamProvider, SharedDreamCanvas, SharedDreamRuntime, createSharedDreamSession, joinSharedDreamSession, broadcastMediaSync
- Read endpoints for data retrieval
- Write endpoints for mutations
#### Application Source Structure
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
<details><summary>Shared Dreams application source index (11 files)</summary>

- `app/api/dreams/feed/route.ts` — API route transport boundary.
- `app/api/dreams/instances/route.ts` — API route transport boundary.
- `app/api/dreams/transfer/route.ts` — API route transport boundary.
- `components/shared-dream/dream.InviteFlow.tsx` — React application module.
- `components/shared-dream/dream.SharedDreamCanvas.tsx` — React application module.
- `components/shared-dream/dream.SharedDreamProvider.tsx` — React application module.
- `components/shared-dream/dream.SharedDreamRuntime.tsx` — React application module.
- `components/shared-dream/index.ts` — TypeScript/JavaScript application module.
- `engine/sharedDream.ts` — TypeScript/JavaScript application module.
- `hooks/useSharedDream.ts` — TypeScript/JavaScript application module.
- `supabase/realtime.ts` — TypeScript/JavaScript application module.

</details>

## HomeDream
HomeDream is a user-facing application surface subsystem composed of React components and presentation logic. Primary route surface: /homedream. It depends on app, Backend, System, Core & CoreSurfaces, Dreamr — Human Media.
### Responsibilities
- User-facing surfaces: /homedream
- Renders production surfaces/components: HomeDreamPage, ActiveModuleSurface, DaydreamPulseStrip, FlagshipEnginesStrip, NeuralSeamCanvas, GlobalDreamBar, +3 more
### Key Modules
- app/homedream/page.tsx — HomeDreamPage (important path; behavior evidence; route surface)
- components/home/dream.ActiveModuleSurface.tsx — ActiveModuleSurface (important path; behavior evidence; important exports: ActiveModuleSurface)
- components/home/dream.bar.PersistentDreamBar.tsx — PersistentDreamBar, DreamDMContainer (behavior evidence; important exports: PersistentDreamBar, DreamDMContainer; large behavior file)
- components/home/dream.FlagshipEnginesStrip.tsx — FlagshipEnginesStrip (behavior evidence; important exports: FlagshipEnginesStrip; large behavior file)
- components/home/dream.bar.GlobalDreamBar.tsx — GlobalDreamBar (behavior evidence; important exports: GlobalDreamBar)
- components/home/dream.DaydreamPulseStrip.tsx — DaydreamPulseStrip (behavior evidence; important exports: DaydreamPulseStrip)
- components/home/dream.widget.DreamWidget.tsx — DreamWidget (behavior evidence; important exports: DreamWidget)
### Architectural Relationships
- Depends on **app**
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreamr — Human Media**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on app
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreamr — Human Media
- Depends on Dreams, Widgets, Windows & Surfaces
### Public Surfaces
**Routes:**
- `/homedream` — `app/homedream/page.tsx`
**Production Components:**
`ActiveModuleSurface`, `DaydreamPulseStrip`, `DreamDMContainer`, `DreamWidget`, `FlagshipEnginesStrip`, `GlobalDreamBar`, `HomeDreamPage`, `NeuralSeamCanvas`, `PersistentDreamBar`
#### Application Source Structure
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
<details><summary>HomeDream application source index (8 files)</summary>

- `app/homedream/page.tsx` — route page surface.
- `components/home/dream.ActiveModuleSurface.tsx` — React application module.
- `components/home/dream.DaydreamPulseStrip.tsx` — React application module.
- `components/home/dream.FlagshipEnginesStrip.tsx` — React application module.
- `components/home/dream.NeuralSeamCanvas.tsx` — React application module.
- `components/home/dream.bar.GlobalDreamBar.tsx` — React application module.
- `components/home/dream.bar.PersistentDreamBar.tsx` — React application module.
- `components/home/dream.widget.DreamWidget.tsx` — React application module.

</details>

## Dreamr — Human Media
Dreamr — Human Media is a full-stack application subsystem with React surfaces and API transport boundaries. Primary route surface: /dreamr. It depends on app, Backend, System, Core & CoreSurfaces, Connectors & Live Feeds.
### Responsibilities
- User-facing surfaces: /dreamr
- API transport boundaries: /api/dreamr
- Renders production surfaces/components: GET, POST, DreamRPage, CloseFriendsSettings, DreamRChannelPanel, DreamRCreatorPanel, +8 more
- Messaging, conversations, notifications, realtime channels, or presence
- Feed, post, comment, ranking, or social interaction behavior
### Key Modules
- app/dreamr/page.tsx — DreamRPage (important path; behavior evidence; route surface)
- app/api/dreamr/feed/route.ts (important path; behavior evidence; API boundary)
- app/api/dreamr/suggested/route.ts (important path; behavior evidence; API boundary)
- app/api/dreamr/tally/route.ts (important path; behavior evidence; API boundary)
- components/dreamr/dream.panel.DreamRChannelPanel.tsx — DreamRChannelPanel (important path; behavior evidence; important exports: DreamRChannelPanel)
- components/dreamr/dream.panel.DreamRCreatorPanel.tsx — DreamRCreatorPanel (important path; behavior evidence; important exports: DreamRCreatorPanel)
- components/home/dream.ActiveModuleSurface.tsx — ActiveModuleSurface (important path; behavior evidence; important exports: ActiveModuleSurface)
- components/dreamr/dream.CloseFriendsSettings.tsx (important path; behavior evidence; large behavior file)
- components/home/dream.bar.PersistentDreamBar.tsx — PersistentDreamBar, DreamDMContainer (behavior evidence; important exports: PersistentDreamBar, DreamDMContainer; large behavior file)
- components/home/dream.FlagshipEnginesStrip.tsx — FlagshipEnginesStrip (behavior evidence; important exports: FlagshipEnginesStrip; large behavior file)
- components/home/dream.bar.GlobalDreamBar.tsx — GlobalDreamBar (behavior evidence; important exports: GlobalDreamBar)
- components/home/dream.DaydreamPulseStrip.tsx — DaydreamPulseStrip (behavior evidence; important exports: DaydreamPulseStrip)
### Architectural Relationships
- Depends on **app**
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Connectors & Live Feeds**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **HomeDream**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on app
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Connectors & Live Feeds
- Depends on Dreams, Widgets, Windows & Surfaces
### Public Surfaces
**Routes:**
- `/dreamr` — `app/dreamr/page.tsx`
**API Endpoints:**
- `/api/dreamr/feed` `[GET]` — `app/api/dreamr/feed/route.ts`
- `/api/dreamr/suggested` `[GET]` — `app/api/dreamr/suggested/route.ts`
- `/api/dreamr/tally` `[POST]` — `app/api/dreamr/tally/route.ts`
**Production Components:**
`ActiveModuleSurface`, `CloseFriendsSettings`, `DaydreamPulseStrip`, `DreamDMContainer`, `DreamRChannelPanel`, `DreamRCreatorPanel`, `DreamRPage`, `DreamWidget`, `FlagshipEnginesStrip`, `GET`, +4 more
### Capabilities
- Read endpoints for data retrieval
- Write endpoints for mutations
#### Application Source Structure
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
└── components
    ├── dreamr
    │   ├── dream.CloseFriendsSettings.tsx
    │   ├── dream.panel.DreamRChannelPanel.tsx
    │   └── dream.panel.DreamRCreatorPanel.tsx
    └── home
        ├── dream.ActiveModuleSurface.tsx
        ├── dream.DaydreamPulseStrip.tsx
        ├── dream.FlagshipEnginesStrip.tsx
        ├── dream.NeuralSeamCanvas.tsx
        ├── dream.bar.GlobalDreamBar.tsx
        ├── dream.bar.PersistentDreamBar.tsx
        └── dream.widget.DreamWidget.tsx
```
<details><summary>Dreamr — Human Media application source index (14 files)</summary>

- `app/api/dreamr/feed/route.ts` — API route transport boundary.
- `app/api/dreamr/suggested/route.ts` — API route transport boundary.
- `app/api/dreamr/tally/route.ts` — API route transport boundary.
- `app/dreamr/page.tsx` — route page surface.
- `components/dreamr/dream.CloseFriendsSettings.tsx` — React application module.
- `components/dreamr/dream.panel.DreamRChannelPanel.tsx` — React application module.
- `components/dreamr/dream.panel.DreamRCreatorPanel.tsx` — React application module.
- `components/home/dream.ActiveModuleSurface.tsx` — React application module.
- `components/home/dream.DaydreamPulseStrip.tsx` — React application module.
- `components/home/dream.FlagshipEnginesStrip.tsx` — React application module.
- `components/home/dream.NeuralSeamCanvas.tsx` — React application module.
- `components/home/dream.bar.GlobalDreamBar.tsx` — React application module.
- `components/home/dream.bar.PersistentDreamBar.tsx` — React application module.
- `components/home/dream.widget.DreamWidget.tsx` — React application module.

</details>

## DreamSpace
DreamSpace is a user-facing application surface subsystem composed of React components and presentation logic. Primary route surfaces: /daydream/brand, /daydream/brand/engin, /daydream/code, …. It exposes useDaydreamPersistence, useDaydreamState as reusable hooks. It depends on app, Backend, System, Core & CoreSurfaces, daydreams.
### Responsibilities
- User-facing surfaces: /daydream/brand, /daydream/brand/engin, /daydream/code, /daydream/code/engin, /daydream/constellation, +15 more
- Renders production surfaces/components: BrandDaydreamPage, CodeDaydreamPage, ConstellationClient, ConstellationPage, CreateDaydreamPage, ForgeDaydreamPage, +27 more
- Authentication, sessions, authorization, and access control
- Asset storage, upload, export, or CDN-facing pipelines
- GameEngin cartridge/runtime interaction or playable system behavior
### Key Modules
- app/daydream/code/page.tsx — CodeDaydreamPage (important path; behavior evidence; route surface)
- app/daydream/forge/page.tsx — ForgeDaydreamPage (important path; behavior evidence; route surface)
- app/daydream/games/page.tsx — GamesDaydreamPage (important path; behavior evidence; route surface)
- app/daydream/lab/page.tsx — LabDaydreamPage (important path; behavior evidence; route surface)
- components/daydream/dream.shell.DaydreamShell.tsx — DaydreamShell, DaydreamWidget (important path; behavior evidence; important exports: DaydreamShell, DaydreamWidget)
- app/daydream/brand/engin/page.tsx — BrandEnginRedirectPage (important path; behavior evidence; route surface)
- app/daydream/brand/page.tsx — BrandDaydreamPage (important path; behavior evidence; route surface)
- app/daydream/code/engin/page.tsx — CodeEnginRedirectPage (important path; behavior evidence; route surface)
- app/daydream/create/engin/page.tsx — CreateEnginRedirectPage (important path; behavior evidence; route surface)
- app/daydream/create/page.tsx — CreateDaydreamPage (important path; behavior evidence; route surface)
- app/daydream/games/engin/page.tsx — GamesEnginRedirectPage (important path; behavior evidence; route surface)
- app/daydream/lab/engin/page.tsx — LabEnginRedirectPage (important path; behavior evidence; route surface)
### Architectural Relationships
- Depends on **app**
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **daydreams**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on app
- Depends on Backend, System, Core & CoreSurfaces
- Depends on daydreams
- Depends on Dreams, Widgets, Windows & Surfaces
### Public Surfaces
**Routes:**
- `/daydream/brand` — `app/daydream/brand/page.tsx`
- `/daydream/brand/engin` — `app/daydream/brand/engin/page.tsx`
- `/daydream/code` — `app/daydream/code/page.tsx`
- `/daydream/code/engin` — `app/daydream/code/engin/page.tsx`
- `/daydream/constellation` — `app/daydream/constellation/page.tsx`
- `/daydream/create` — `app/daydream/create/page.tsx`
- `/daydream/create/engin` — `app/daydream/create/engin/page.tsx`
- `/daydream/forge` — `app/daydream/forge/page.tsx`
- `/daydream/game` — `app/daydream/game/page.tsx`
- `/daydream/games` — `app/daydream/games/page.tsx`
- `/daydream/games/engin` — `app/daydream/games/engin/page.tsx`
- `/daydream/lab` — `app/daydream/lab/page.tsx`
- `/daydream/lab/engin` — `app/daydream/lab/engin/page.tsx`
- `/daydream/lab/portfolio` — `app/daydream/lab/portfolio/page.tsx`
- `/daydream/media-vault` — `app/daydream/media-vault/page.tsx`
- `/daydream/music` — `app/daydream/music/page.tsx`
- `/daydream/music/engin` — `app/daydream/music/engin/page.tsx`
- `/daydream/music/upload` — `app/daydream/music/upload/page.tsx`
- `/daydream/play` — `app/daydream/play/page.tsx`
- `/daydream/render` — `app/daydream/render/page.tsx`
**Production Components:**
`BrandDaydream`, `BrandDaydreamPage`, `CodeDaydreamPage`, `CodeDreamIDE`, `CompingPanel`, `ConstellationClient`, `ConstellationPage`, `CreateDaydreamPage`, `DaydreamShell`, `DiffViewer`, +17 more
### Notable Abstractions
- `StandaloneEnginName` — type in `components/daydream/dream.StandaloneEnginSurface.tsx`
- `DaydreamWidget` — type in `components/daydream/dream.shell.DaydreamShell.tsx`
- `UseDaydreamPersistenceOptions` — interface in `daydreams/shared/useDaydreamPersistence.ts`
- `UseDaydreamPersistenceReturn` — interface in `daydreams/shared/useDaydreamPersistence.ts`
- `DaydreamSide` — type in `daydreams/shared/useDaydreamState.ts`
- `DaydreamStatePayload` — type in `daydreams/shared/useDaydreamState.ts`
- `UseDaydreamStateOptions` — interface in `daydreams/shared/useDaydreamState.ts`
- `UseDaydreamStateReturn` — interface in `daydreams/shared/useDaydreamState.ts`
- `useDaydreamPersistence` — hook
- `useDaydreamState` — hook
### Capabilities
- Exposes hooks: useDaydreamPersistence, useDaydreamState
- Important contract surface: UseDaydreamPersistenceOptions, UseDaydreamPersistenceReturn, UseDaydreamStateOptions, UseDaydreamStateReturn
- Important shared type vocabulary: StandaloneEnginName, DaydreamWidget, DaydreamSide, DaydreamStatePayload
- Behavior functions: BrandEnginRedirectPage, CodeEnginRedirectPage, CreateEnginRedirectPage, LabEnginRedirectPage, MusicEnginRedirectPage, PlayDaydreamLegacyPage
#### Application Source Structure
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
│       ├── play
│       │   └── page.tsx
│       └── render
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
<details><summary>DreamSpace application source index (45 files)</summary>

- `app/daydream/brand/engin/page.tsx` — route page surface.
- `app/daydream/brand/page.tsx` — route page surface.
- `app/daydream/code/engin/page.tsx` — route page surface.
- `app/daydream/code/page.tsx` — route page surface.
- `app/daydream/constellation/dream.ConstellationClient.tsx` — React application module.
- `app/daydream/constellation/page.tsx` — route page surface.
- `app/daydream/create/engin/page.tsx` — route page surface.
- `app/daydream/create/page.tsx` — route page surface.
- `app/daydream/forge/page.tsx` — route page surface.
- `app/daydream/game/dream.GamePageClient.tsx` — React application module.
- `app/daydream/game/dream.shell.ImmersiveGameShell.tsx` — React application module.
- `app/daydream/game/page.tsx` — route page surface.
- `app/daydream/games/engin/page.tsx` — route page surface.
- `app/daydream/games/page.tsx` — route page surface.
- `app/daydream/lab/engin/page.tsx` — route page surface.
- `app/daydream/lab/page.tsx` — route page surface.
- `app/daydream/lab/portfolio/page.tsx` — route page surface.
- `app/daydream/media-vault/page.tsx` — route page surface.
- `app/daydream/music/engin/page.tsx` — route page surface.
- `app/daydream/music/page.tsx` — route page surface.
- `app/daydream/music/upload/page.tsx` — route page surface.
- `app/daydream/play/page.tsx` — route page surface.
- `app/daydream/render/page.tsx` — route page surface.
- `components/daydream/dream.CodeDreamIDE.tsx` — React application module.
- `components/daydream/dream.DiffViewer.tsx` — React application module.
- `components/daydream/dream.JourneyTrail.tsx` — React application module.
- `components/daydream/dream.LabDreamIDE.tsx` — React application module.
- `components/daydream/dream.NGNEngin.tsx` — React application module.
- `components/daydream/dream.OpenDaydreamSideBButton.tsx` — React application module.
- `components/daydream/dream.StandaloneEnginSurface.tsx` — React application module.
- `components/daydream/dream.constellationmap.tsx` — React application module.
- `components/daydream/dream.shell.DaydreamShell.tsx` — React application module.
- `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` — React application module.
- `components/daydream/starmaker/dream.panel.CompingPanel.tsx` — React application module.
- `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx` — React application module.
- `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx` — React application module.
- `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` — React application module.
- `daydreams/brand/page.tsx` — route page surface.
- `daydreams/code/page.tsx` — route page surface.
- `daydreams/create/page.tsx` — route page surface.
- `daydreams/games/page.tsx` — route page surface.
- `daydreams/lab/page.tsx` — route page surface.
- `daydreams/music/page.tsx` — route page surface.
- `daydreams/shared/useDaydreamPersistence.ts` — TypeScript/JavaScript application module.
- `daydreams/shared/useDaydreamState.ts` — TypeScript/JavaScript application module.

</details>

## DreamDMBar
DreamDMBar is a user-facing application surface subsystem composed of React components and presentation logic. It exposes useDreamBarContext, useDreamDMConversations, useDreamDMDraft as reusable hooks. It depends on Backend, System, Core & CoreSurfaces, HomeDream, The Engins.
### Responsibilities
- Renders production surfaces/components: GlobalDreamBar, PersistentDreamBar, DreamDMContainer, DreamDMBar, BAR_H, NAV_H, +27 more
- Runtime orchestration, capability routing, and Engin lifecycle coordination
- Messaging, conversations, notifications, realtime channels, or presence
### Key Modules
- dreamdmbar/runtime/DreamSystemContext.tsx — DreamSystemProvider, BarIntentMode, BarIntent (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useDreamBarContext.ts — detectSurface, resolveIntentOverride, useDreamBarContext (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useDreamDMConversations.ts — useDreamDMConversations, DMConversation (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useDreamDMMessages.ts — useDreamDMMessages, DMMessage (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useDreamSearch.ts — useDreamSearch, UseDreamSearchReturn (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useModuleBarIntent.ts — useModuleBarIntent, UseModuleBarIntentResult (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/notifications/notificationHelpers.ts — mapNotificationType, getNotificationTitle, getNotificationActionUrl (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/notifications/useNotifications.ts — useNotifications, UseNotificationsReturn (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useDreamDMDraft.ts — useDreamDMDraft (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useNotifications.ts — useNotifications (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/dreamsurface.dreamdmbar.tsx — DreamDMBar (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useMessagingCore.ts — SendMessageParams (important path; behavior evidence; DreamDMBar layer)
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **HomeDream**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on HomeDream
- Depends on The Engins
- Depends on User-Facing Modularity
### Public Surfaces
**Production Components:**
`BAR_FLING_LINE_RATIO`, `BAR_FLING_TO_BOTTOM_VELOCITY_THRESHOLD_PX_PER_MS`, `BAR_FLING_TO_TOP_MIN_DRAG_PX`, `BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS`, `BAR_H`, `BAR_SNAP_TO_TOP_HEIGHT_RATIO`, `BAR_SNAP_TO_TOP_THRESHOLD_PX`, `DEFAULT_BAR_INTENT`, `DEFAULT_SPLIT_RATIO`, `DEFAULT_WORLD_FOCUS`, +23 more
### Notable Abstractions
- `DreamBarSurface` — type in `dreamdmbar/hooks/useDreamBarContext.ts`
- `DreamBarContext` — interface in `dreamdmbar/hooks/useDreamBarContext.ts`
- `DMConversation` — interface in `dreamdmbar/hooks/useDreamDMConversations.ts`
- `DMMessage` — interface in `dreamdmbar/hooks/useDreamDMMessages.ts`
- `UseDreamSearchReturn` — interface in `dreamdmbar/hooks/useDreamSearch.ts`
- `SendMessageParams` — interface in `dreamdmbar/hooks/useMessagingCore.ts`
- `UseModuleBarIntentResult` — interface in `dreamdmbar/hooks/useModuleBarIntent.ts`
- `DbNotificationContent` — type in `dreamdmbar/notifications/notificationHelpers.ts`
- `DbNotificationRow` — interface in `dreamdmbar/notifications/notificationHelpers.ts`
- `UiNotificationType` — type in `dreamdmbar/notifications/notificationHelpers.ts`
- `UiNotification` — interface in `dreamdmbar/notifications/notificationHelpers.ts`
- `UseNotificationsReturn` — interface in `dreamdmbar/notifications/useNotifications.ts`
- `useDreamBarContext` — hook
- `useDreamDMConversations` — hook
- `useDreamDMDraft` — hook
- `useDreamDMMessages` — hook
- `useDreamSearch` — hook
- `useDreamSystem` — hook
- `useMessagingCore` — hook
- `useModuleBarIntent` — hook
### Capabilities
- Exposes hooks: useDreamBarContext, useDreamDMConversations, useDreamDMDraft, useDreamDMMessages, useDreamSearch, useDreamSystem, +3 more
- Important contract surface: DreamBarContext, DMConversation, DMMessage, UseDreamSearchReturn, SendMessageParams
- Important shared type vocabulary: DreamBarSurface, DbNotificationContent, UiNotificationType, BarIntentMode, SurfaceAccent
- Behavior functions: detectSurface, resolveIntentOverride, mapNotificationType, getNotificationTitle, getNotificationActionUrl, extractNotificationMessage
#### Application Source Structure
```text
├── components
│   └── home
│       ├── dream.bar.GlobalDreamBar.tsx
│       └── dream.bar.PersistentDreamBar.tsx
└── dreamdmbar
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
<details><summary>DreamDMBar application source index (17 files)</summary>

- `components/home/dream.bar.GlobalDreamBar.tsx` — React application module.
- `components/home/dream.bar.PersistentDreamBar.tsx` — React application module.
- `dreamdmbar/dream.GlowingLight.tsx` — React application module.
- `dreamdmbar/dreamsurface.dreamdmbar.tsx` — React application module.
- `dreamdmbar/hooks/useDreamBarContext.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamDMConversations.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamDMDraft.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamDMMessages.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamSearch.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useMessagingCore.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useModuleBarIntent.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useNotifications.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/notifications/notificationHelpers.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/notifications/useNotifications.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/runtime/DreamSystemContext.tsx` — React application module.
- `dreamdmbar/runtime/barInteractions.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/runtime/bridgeSeamFlow.ts` — TypeScript/JavaScript application module.

</details>

## Messaging
Messaging is a full-stack application subsystem with React surfaces and API transport boundaries. Primary route surfaces: /messages, /messages/boards, /messages/boards/[id], …. It exposes useDreamDMConversations, useDreamDMDraft, useDreamDMMessages as reusable hooks. It depends on Backend, System, Core & CoreSurfaces, Dreams, Widgets, Windows & Surfaces, The Engins.
### Responsibilities
- User-facing surfaces: /messages, /messages/boards, /messages/boards/[id], /messages/boards/new, /messages/new
- API transport boundaries: /api/messages
- Renders production surfaces/components: POST, GET, POST, BoardDetailPage, NewBoardPage, BoardsPage, +3 more
- Messaging, conversations, notifications, realtime channels, or presence
### Key Modules
- dreamdmbar/hooks/useDreamDMConversations.ts — useDreamDMConversations, DMConversation (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useDreamDMMessages.ts — useDreamDMMessages, DMMessage (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useDreamDMDraft.ts — useDreamDMDraft (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useNotifications.ts — useNotifications (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useMessagingCore.ts — SendMessageParams (important path; behavior evidence; DreamDMBar layer)
- app/api/messages/route.ts (important path; behavior evidence; API boundary)
- app/messages/new/page.tsx — NewMessagePage (important path; behavior evidence; route surface)
- app/messages/page.tsx — MessagesPage (important path; behavior evidence; route surface)
- app/api/messages/boards/route.ts (important path; behavior evidence; API boundary)
- app/messages/boards/[id]/page.tsx (important path; behavior evidence; route surface)
- app/messages/boards/new/page.tsx (important path; behavior evidence; route surface)
- app/messages/boards/page.tsx (important path; behavior evidence; route surface)
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreams, Widgets, Windows & Surfaces
- Depends on The Engins
- Depends on User-Facing Modularity
### Public Surfaces
**Routes:**
- `/messages` — `app/messages/page.tsx`
- `/messages/boards` — `app/messages/boards/page.tsx`
- `/messages/boards/[id]` — `app/messages/boards/[id]/page.tsx`
- `/messages/boards/new` — `app/messages/boards/new/page.tsx`
- `/messages/new` — `app/messages/new/page.tsx`
**API Endpoints:**
- `/api/messages` `[GET, POST]` — `app/api/messages/route.ts`
- `/api/messages/boards` `[POST]` — `app/api/messages/boards/route.ts`
**Production Components:**
`BoardComposer`, `BoardDetailPage`, `BoardsPage`, `GET`, `MessagesPage`, `NewBoardPage`, `NewMessagePage`, `POST`
### Notable Abstractions
- `DMConversation` — interface in `dreamdmbar/hooks/useDreamDMConversations.ts`
- `DMMessage` — interface in `dreamdmbar/hooks/useDreamDMMessages.ts`
- `SendMessageParams` — interface in `dreamdmbar/hooks/useMessagingCore.ts`
- `useDreamDMConversations` — hook
- `useDreamDMDraft` — hook
- `useDreamDMMessages` — hook
- `useMessagingCore` — hook
- `useNotifications` — hook
### Capabilities
- Exposes hooks: useDreamDMConversations, useDreamDMDraft, useDreamDMMessages, useMessagingCore, useNotifications
- Important contract surface: DMConversation, DMMessage, SendMessageParams
- Read endpoints for data retrieval
- Write endpoints for mutations
#### Application Source Structure
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
│       ├── new
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
<details><summary>Messaging application source index (13 files)</summary>

- `app/api/messages/boards/route.ts` — API route transport boundary.
- `app/api/messages/route.ts` — API route transport boundary.
- `app/messages/boards/[id]/page.tsx` — route page surface.
- `app/messages/boards/new/page.tsx` — route page surface.
- `app/messages/boards/page.tsx` — route page surface.
- `app/messages/new/page.tsx` — route page surface.
- `app/messages/page.tsx` — route page surface.
- `components/messaging/dream.BoardComposer.tsx` — React application module.
- `dreamdmbar/hooks/useDreamDMConversations.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamDMDraft.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamDMMessages.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useMessagingCore.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useNotifications.ts` — TypeScript/JavaScript application module.

</details>

## Connectors & Live Feeds
Connectors & Live Feeds is a full-stack application subsystem with React surfaces and API transport boundaries. It exposes useSocialData as reusable hooks. Core abstractions are encapsulated in UnsupportedProviderError, LiveKitError, LiveKitRoomManager. It depends on Backend, System, Core & CoreSurfaces, Dreams, Widgets, Windows & Surfaces, utils.
### Responsibilities
- API transport boundaries: /api/youtube
- Renders production surfaces/components: GET, GET, GET, CONNECTOR_REGISTRY, DELIVERY_STRATEGY_MATRIX, INSTAGRAM_CREDENTIAL_FIELDS, +3 more
- Core abstractions: UnsupportedProviderError, LiveKitError, LiveKitRoomManager
- Messaging, conversations, notifications, realtime channels, or presence
- Feed, post, comment, ranking, or social interaction behavior
### Key Modules
- engine/connectors/syncDispatch.ts — dispatchSync, DISPATCH_SUPPORTED_PROVIDERS, DispatchSupportedProvider (important path; behavior evidence; important exports: dispatchSync, DISPATCH_SUPPORTED_PROVIDERS, DispatchSupportedProvider)
- engine/connectors/connectorRegistry.ts — getConnectorDef, ConnectorStatus, ConnectorCategory (important path; behavior evidence; important exports: getConnectorDef, ConnectorStatus, ConnectorCategory)
- engine/connectors/installFlow.ts — queueSuggestedWidget, isSessionDismissed, enqueueForPlacement (important path; behavior evidence; important exports: queueSuggestedWidget, isSessionDismissed, enqueueForPlacement)
- engine/social/rss-feed.ts — youtubeChannelRssUrl, githubUserAtomUrl, nostrGatewayRssUrl (important path; behavior evidence; important exports: youtubeChannelRssUrl, githubUserAtomUrl, nostrGatewayRssUrl)
- app/api/youtube/channel/route.ts — YouTubeChannelResponse (important path; behavior evidence; API boundary)
- app/api/youtube/live-feed/route.ts — YouTubeLiveFeedResponse (important path; behavior evidence; API boundary)
- engine/connectors/deliveryStrategy.ts — knownDeliveryProviders, ConnectorDeliveryStrategy (important path; behavior evidence; important exports: knownDeliveryProviders, ConnectorDeliveryStrategy)
- engine/connectors/providers/hackernews.ts — hackernewsSync, HNFeedType (important path; behavior evidence; important exports: hackernewsSync, HNFeedType)
- engine/connectors/providers/instagram.ts — instagramSync, getInstagramOAuthConfig (important path; behavior evidence; important exports: instagramSync, getInstagramOAuthConfig)
- engine/connectors/providers/reddit.ts — redditSync, redditSyncSaved (important path; behavior evidence; important exports: redditSync, redditSyncSaved)
- engine/social/crossPost.ts — buildDreamOgMeta, DreamSharePayload (important path; behavior evidence; important exports: buildDreamOgMeta, DreamSharePayload)
- app/api/youtube/discovery/route.ts (important path; behavior evidence; API boundary)
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **utils**
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreams, Widgets, Windows & Surfaces
- Depends on utils
### Public Surfaces
**API Endpoints:**
- `/api/youtube/channel` `[GET]` — `app/api/youtube/channel/route.ts`
- `/api/youtube/discovery` `[GET]` — `app/api/youtube/discovery/route.ts`
- `/api/youtube/live-feed` `[GET]` — `app/api/youtube/live-feed/route.ts`
**Production Components:**
`CONNECTOR_REGISTRY`, `DEFAULT_NITTER_INSTANCE`, `DELIVERY_STRATEGY_MATRIX`, `DISPATCH_SUPPORTED_PROVIDERS`, `GET`, `INSTAGRAM_CREDENTIAL_FIELDS`, `SHELLHUB_DEFAULT_SERVER`
### Notable Abstractions
- `YouTubeChannelResponse` — interface in `app/api/youtube/channel/route.ts`
- `YouTubeLiveFeedResponse` — interface in `app/api/youtube/live-feed/route.ts`
- `ConnectorStatus` — type in `engine/connectors/connectorRegistry.ts`
- `ConnectorCategory` — type in `engine/connectors/connectorRegistry.ts`
- `ConnectorTier` — type in `engine/connectors/connectorRegistry.ts`
- `ConnectorLimitation` — interface in `engine/connectors/connectorRegistry.ts`
- `ConnectorDef` — interface in `engine/connectors/connectorRegistry.ts`
- `ConnectorDeliveryStrategy` — interface in `engine/connectors/deliveryStrategy.ts`
- `HNFeedType` — type in `engine/connectors/providers/hackernews.ts`
- `DispatchSupportedProvider` — type in `engine/connectors/syncDispatch.ts`
- `UnsupportedProviderError` — class in `engine/connectors/syncDispatch.ts`
- `DreamSharePayload` — interface in `engine/social/crossPost.ts`
- `useSocialData` — hook
### Capabilities
- Exposes hooks: useSocialData
- Important contract surface: YouTubeChannelResponse, YouTubeLiveFeedResponse, ConnectorLimitation, ConnectorDef, ConnectorDeliveryStrategy
- Important shared type vocabulary: ConnectorStatus, ConnectorCategory, ConnectorTier, HNFeedType, DispatchSupportedProvider
- Behavior functions: getConnectorDef, knownDeliveryProviders, queueSuggestedWidget, isSessionDismissed, enqueueForPlacement, dequeueNextPlacement
- Read endpoints for data retrieval
#### Application Source Structure
```text
├── app
│   └── api
│       └── youtube
│           ├── channel
│           │   └── route.ts
│           ├── discovery
│           │   └── route.ts
│           └── live-feed
│               └── route.ts
├── engine
│   ├── connectors
│   │   ├── connectorRegistry.ts
│   │   ├── deliveryStrategy.ts
│   │   ├── installFlow.ts
│   │   ├── normalise.ts
│   │   ├── providers
│   │   │   ├── bluesky.ts
│   │   │   ├── devto.ts
│   │   │   ├── facebook.ts
│   │   │   ├── github.ts
│   │   │   ├── hackernews.ts
│   │   │   ├── instagram.ts
│   │   │   ├── mastodon.ts
│   │   │   ├── medium.ts
│   │   │   ├── nostr.ts
│   │   │   ├── pinterest.ts
│   │   │   ├── podcast.ts
│   │   │   ├── reddit.ts
│   │   │   ├── shellhub.ts
│   │   │   ├── substack.ts
│   │   │   ├── tiktok.ts
│   │   │   ├── tumblr.ts
│   │   │   ├── twitter.ts
│   │   │   └── youtube.ts
│   │   ├── reconcile.ts
│   │   ├── syncDispatch.ts
│   │   ├── webhookVerification.ts
│   │   └── youtube.ts
│   └── social
│       ├── crossPost.ts
│       ├── livekit.ts
│       ├── normalizers.ts
│       ├── platforms.ts
│       ├── rss-feed.ts
│       └── useSocialData.ts
└── types
    └── connector.ts
```
<details><summary>Connectors & Live Feeds application source index (36 files)</summary>

- `app/api/youtube/channel/route.ts` — API route transport boundary.
- `app/api/youtube/discovery/route.ts` — API route transport boundary.
- `app/api/youtube/live-feed/route.ts` — API route transport boundary.
- `engine/connectors/connectorRegistry.ts` — TypeScript/JavaScript application module.
- `engine/connectors/deliveryStrategy.ts` — TypeScript/JavaScript application module.
- `engine/connectors/installFlow.ts` — TypeScript/JavaScript application module.
- `engine/connectors/normalise.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/bluesky.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/devto.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/facebook.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/github.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/hackernews.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/instagram.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/mastodon.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/medium.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/nostr.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/pinterest.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/podcast.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/reddit.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/shellhub.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/substack.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/tiktok.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/tumblr.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/twitter.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/youtube.ts` — TypeScript/JavaScript application module.
- `engine/connectors/reconcile.ts` — TypeScript/JavaScript application module.
- `engine/connectors/syncDispatch.ts` — TypeScript/JavaScript application module.
- `engine/connectors/webhookVerification.ts` — TypeScript/JavaScript application module.
- `engine/connectors/youtube.ts` — TypeScript/JavaScript application module.
- `engine/social/crossPost.ts` — TypeScript/JavaScript application module.
- `engine/social/livekit.ts` — TypeScript/JavaScript application module.
- `engine/social/normalizers.ts` — TypeScript/JavaScript application module.
- `engine/social/platforms.ts` — TypeScript/JavaScript application module.
- `engine/social/rss-feed.ts` — TypeScript/JavaScript application module.
- `engine/social/useSocialData.ts` — TypeScript/JavaScript application module.
- `types/connector.ts` — TypeScript/JavaScript application module.

</details>

## Dreams, Widgets, Windows & Surfaces
Dreams, Widgets, Windows & Surfaces is a user-facing application surface subsystem composed of React components and presentation logic. It exposes useDreamWindowActions, useDualRuntime, useEditMode as reusable hooks. Core abstractions are encapsulated in CrossWidgetPostingEngine, WidgetEventBus, WidgetLinkGraph. It depends on app, Backend, System, Core & CoreSurfaces, Connectors & Live Feeds.
### Responsibilities
- Renders production surfaces/components: AIAssistant, AudioVisualizer3D, BoogieWarningBanner, BrandLogo, CommandPalette, MobileCmdFab, +56 more
- Core abstractions: CrossWidgetPostingEngine, WidgetEventBus, WidgetLinkGraph
- Runtime orchestration, capability routing, and Engin lifecycle coordination
- Messaging, conversations, notifications, realtime channels, or presence
- Feed, post, comment, ranking, or social interaction behavior
- Asset storage, upload, export, or CDN-facing pipelines
- Theming, design tokens, visual customization, or settings surfaces
- ContentEngin asset creation, validation, rigging, animation, or export behavior
### Key Modules
- components/runtime/dream.DualRuntimeContainer.tsx — useDualRuntime, DualRuntimeContainer (important path; behavior evidence; runtime layer)
- engine/dream-window/useDreamWindowActions.ts — createDreamWindow, patchDreamWindow, useDreamWindowActions (important path; behavior evidence; important exports: createDreamWindow, patchDreamWindow, useDreamWindowActions)
- components/runtime/dream.RuntimeView.tsx — RuntimeView (important path; behavior evidence; runtime layer)
- components/runtime/dream.shell.RuntimeShell.tsx — RuntimeShell (important path; behavior evidence; runtime layer)
- engine/dream-window/DreamWindowLifecycle.ts — bindDreamWindow, mountDreamWindow, collapseDreamWindow (important path; behavior evidence; important exports: bindDreamWindow, mountDreamWindow, collapseDreamWindow)
- engine/dream-window/runtimeRegion.ts — activateSurface, mountWindowInDreamSpace, dismountWindowFromDreamSpace (important path; behavior evidence; important exports: activateSurface, mountWindowInDreamSpace, dismountWindowFromDreamSpace)
- engine/widgets/CrossWidgetPosting.ts — WidgetCapabilityConfig, CrossWidgetPostingEngine (important path; behavior evidence; important exports: WidgetCapabilityConfig, CrossWidgetPostingEngine)
- engine/widgets/feed-resolver.ts — resolveFeedHost, subscribeAppPostsRealtime, getFeedChannelKey (important path; behavior evidence; important exports: resolveFeedHost, subscribeAppPostsRealtime, getFeedChannelKey)
- engine/widgets/WidgetEventBus.ts — WidgetEventBus, widgetEventBus (important path; behavior evidence; important exports: WidgetEventBus, widgetEventBus)
- engine/dream-window/index.ts — DreamWindowConfig, DreamWindowInstance, DreamWindowPosition (important path; behavior evidence; important exports: DreamWindowConfig, DreamWindowInstance, DreamWindowPosition)
- engine/widgets/parseConfig.ts — parseSocialProfileWidgetConfig, parseSocialFeedWidgetConfig, inferProviderFromUrl (important path; behavior evidence; important exports: parseSocialProfileWidgetConfig, parseSocialFeedWidgetConfig, inferProviderFromUrl)
- engine/widgets/widgetRegistry.ts — getWidgetTypesForConnector, resolveConnectorState, ConnectorRequirement (important path; behavior evidence; important exports: getWidgetTypesForConnector, resolveConnectorState, ConnectorRequirement)
### Architectural Relationships
- Depends on **app**
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Connectors & Live Feeds**
- Depends on **Dreamr — Human Media**
- Depends on **DreamSpace**
- Depends on **Dual Runtimes**
- Depends on **HomeDream**
- Depends on **Shared Dreams**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Participates in the Shared Dreams pub/sub channel system
- Consumes backend, engine, Supabase, or core system services
- Depends on app
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Connectors & Live Feeds
- Depends on Dreamr — Human Media
### Public Surfaces
**Production Components:**
`AIAssistant`, `AddDreamCTA`, `AnchorWidget`, `AudioVisualizer3D`, `BoogieWarningBanner`, `BrandLogo`, `ChildSafetyPanel`, `CommandPalette`, `CommandPaletteMount`, `ConfigureSheet`, +52 more
### Notable Abstractions
- `RegistryEntry` — interface in `components/dream.universal_asset_registry.tsx`
- `GameAssetRow` — interface in `components/dream.universal_asset_registry.tsx`
- `DreamOutputMode` — type in `components/dreams/dream.outputlayer.tsx`
- `DreamVisibility` — type in `components/dreams/dream.outputlayer.tsx`
- `DreamDataState` — type in `components/dreams/dream.shell.DreamShell.tsx`
- `DreamDataState` — type in `components/dreams/dreamsurface.shell.tsx`
- `DreamDataState` — type in `components/widgets/dream.widget.WidgetShell.tsx`
- `DreamWindowSize` — interface in `engine/dream-window/DreamWindowLifecycle.ts`
- `DreamWindowPosition` — interface in `engine/dream-window/DreamWindowLifecycle.ts`
- `DreamWindowConfig` — interface in `engine/dream-window/DreamWindowLifecycle.ts`
- `DreamWindowInstance` — interface in `engine/dream-window/DreamWindowLifecycle.ts`
- `DreamWindowLayer` — type in `engine/dream-window/DreamWindowLifecycle.ts`
- `useDreamWindowActions` — hook
- `useDualRuntime` — hook
- `useEditMode` — hook
- `useToast` — hook
- `useWidget` — hook
### Capabilities
- Exposes hooks: useDreamWindowActions, useDualRuntime, useEditMode, useToast, useWidget
- Important contract surface: RegistryEntry, GameAssetRow, DreamWindowSize, DreamWindowPosition, DreamWindowConfig
- Important shared type vocabulary: DreamOutputMode, DreamVisibility, DreamDataState, DreamDataState, DreamDataState
- Behavior functions: DreamShell, SuperDreamWidget, DreamShell, SuperDreamWidget, bindDreamWindow, mountDreamWindow
#### Application Source Structure
```text
├── components
│   ├── dream.AIAssistant.tsx
│   ├── dream.AudioVisualizer3D.tsx
│   ├── dream.BoogieWarningBanner.tsx
│   ├── dream.BrandLogo.tsx
│   ├── dream.CommandPalette.tsx
│   ├── dream.CommandPaletteMount.tsx
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
<details><summary>Dreams, Widgets, Windows & Surfaces application source index (85 files)</summary>

- `components/dream.AIAssistant.tsx` — React application module.
- `components/dream.AudioVisualizer3D.tsx` — React application module.
- `components/dream.BoogieWarningBanner.tsx` — React application module.
- `components/dream.BrandLogo.tsx` — React application module.
- `components/dream.CommandPalette.tsx` — React application module.
- `components/dream.CommandPaletteMount.tsx` — React application module.
- `components/dream.CreatePostModal.tsx` — React application module.
- `components/dream.DrEamsModeToggle.tsx` — React application module.
- `components/dream.DrEamsVoiceAssistant.tsx` — React application module.
- `components/dream.DragToAnchorClose.tsx` — React application module.
- `components/dream.FeedCard.tsx` — React application module.
- `components/dream.ForgeDreamCanvas.tsx` — React application module.
- `components/dream.GlobalOverlays.tsx` — React application module.
- `components/dream.HeroSprite.tsx` — React application module.
- `components/dream.HomeFeed.tsx` — React application module.
- `components/dream.IconSelector.tsx` — React application module.
- `components/dream.InnerDreamsButton.tsx` — React application module.
- `components/dream.KonamiDream.tsx` — React application module.
- `components/dream.LandingHero.tsx` — React application module.
- `components/dream.LedgerChart.tsx` — React application module.
- `components/dream.MessagesClient.tsx` — React application module.
- `components/dream.NotificationCenter.tsx` — React application module.
- `components/dream.OSShellActivator.tsx` — React application module.
- `components/dream.PhysicsLab.tsx` — React application module.
- `components/dream.ProfileEditor.tsx` — React application module.
- `components/dream.ProfileShareButton.tsx` — React application module.
- `components/dream.ProfileSpace.tsx` — React application module.
- `components/dream.PullToRefresh.tsx` — React application module.
- `components/dream.ShrunkMode.tsx` — React application module.
- `components/dream.SkeletonLoaders.tsx` — React application module.
- `components/dream.ThemeApplicator.tsx` — React application module.
- `components/dream.ThemeToggle.tsx` — React application module.
- `components/dream.ToastSystem.tsx` — React application module.
- `components/dream.VoidThemeToggle.tsx` — React application module.
- `components/dream.panel.ChildSafetyPanel.tsx` — React application module.
- `components/dream.panel.IDariPanel.tsx` — React application module.
- `components/dream.universal_asset_registry.tsx` — React application module.
- `components/dream.widget.AnchorWidget.tsx` — React application module.
- `components/dream.widget.ProfileWidgetBlock.tsx` — React application module.
- `components/dream.widget.WidgetBubble.tsx` — React application module.
- `components/dreams/dream.DraggableDream.tsx` — React application module.
- `components/dreams/dream.GlobalDragLayer.tsx` — React application module.
- `components/dreams/dream.PlatformErrorReporter.tsx` — React application module.
- `components/dreams/dream.SlideOverPanel.tsx` — React application module.
- `components/dreams/dream.connectorlayer.tsx` — React application module.
- `components/dreams/dream.featurelayer.tsx` — React application module.
- `components/dreams/dream.outputlayer.tsx` — React application module.
- `components/dreams/dream.panel.RuntimeMemoryHUD.tsx` — React application module.
- `components/dreams/dream.shell.DreamShell.tsx` — React application module.
- `components/dreams/dream.shell.SharedDreamShell.tsx` — React application module.
- `components/dreams/dream.widget.SuperDreamWidget.tsx` — React application module.
- `components/dreams/dream.window.JourneyDreamWindow.tsx` — React application module.
- `components/dreams/dreamsurface.dreamspace.tsx` — React application module.
- `components/dreams/dreamsurface.shell.tsx` — React application module.
- `components/dreams/dreamsurface.window.tsx` — React application module.
- `components/runtime/dream.DualRuntimeContainer.tsx` — React application module.
- `components/runtime/dream.RuntimeView.tsx` — React application module.
- `components/runtime/dream.shell.RuntimeShell.tsx` — React application module.
- `components/widgets/dream.AddDreamCTA.tsx` — React application module.
- `components/widgets/dream.ConfigureSheet.tsx` — React application module.
- `components/widgets/dream.EditModeBanner.tsx` — React application module.
- `components/widgets/dream.EditModeProvider.tsx` — React application module.
- `components/widgets/dream.widget.PlayMediaWidget.tsx` — React application module.
- `components/widgets/dream.widget.UniversalWidget.tsx` — React application module.
- `components/widgets/dream.widget.WidgetCard.tsx` — React application module.
- `components/widgets/dream.widget.WidgetLibrary.tsx` — React application module.
- `components/widgets/dream.widget.WidgetPlaceholder.tsx` — React application module.
- `components/widgets/dream.widget.WidgetShell.tsx` — React application module.
- `components/widgets/dream.widget.WidgetSurface.tsx` — React application module.
- `engine/dream-window/DreamWindowLifecycle.ts` — TypeScript/JavaScript application module.
- `engine/dream-window/connectionVerbs.ts` — TypeScript/JavaScript application module.
- `engine/dream-window/enginConnectionNetwork.ts` — TypeScript/JavaScript application module.
- `engine/dream-window/index.ts` — TypeScript/JavaScript application module.
- `engine/dream-window/runtimeRegion.ts` — TypeScript/JavaScript application module.
- `engine/dream-window/useDreamWindowActions.ts` — TypeScript/JavaScript application module.
- `engine/widgets/CrossWidgetPosting.ts` — TypeScript/JavaScript application module.
- `engine/widgets/WidgetBus.ts` — TypeScript/JavaScript application module.
- `engine/widgets/WidgetEngine.tsx` — React application module.
- `engine/widgets/WidgetEventBus.ts` — TypeScript/JavaScript application module.
- `engine/widgets/WidgetLinkGraph.ts` — TypeScript/JavaScript application module.
- `engine/widgets/feed-resolver.ts` — TypeScript/JavaScript application module.
- `engine/widgets/parse.ts` — TypeScript/JavaScript application module.
- `engine/widgets/parseConfig.ts` — TypeScript/JavaScript application module.
- `engine/widgets/useWidget.ts` — TypeScript/JavaScript application module.
- `engine/widgets/widgetRegistry.ts` — TypeScript/JavaScript application module.

</details>

## User-Facing Modularity
User-Facing Modularity is a user-facing application surface subsystem composed of React components and presentation logic. It exposes useAccount, useAlbums, useBreakpoint as reusable hooks. Core abstractions are encapsulated in CartridgeErrorBoundary, DualSenseManager, ParticlePool. It depends on Ads & User Ads, app, Backend, System, Core & CoreSurfaces.
### Responsibilities
- Renders production surfaces/components: ActivityPostForm, ActivityProfile, AdUnit, SkipCreditBalance, PasswordField, DreamEnginLogo, +291 more
- Core abstractions: CartridgeErrorBoundary, DualSenseManager, ParticlePool, ScreenShake, ParallaxLayers
- Runtime orchestration, capability routing, and Engin lifecycle coordination
- Authentication, sessions, authorization, and access control
- Messaging, conversations, notifications, realtime channels, or presence
- Feed, post, comment, ranking, or social interaction behavior
- Asset storage, upload, export, or CDN-facing pipelines
- Theming, design tokens, visual customization, or settings surfaces
- GameEngin cartridge/runtime interaction or playable system behavior
- ContentEngin asset creation, validation, rigging, animation, or export behavior
### Key Modules
- components/runtime/dream.DualRuntimeContainer.tsx — useDualRuntime, DualRuntimeContainer (important path; behavior evidence; runtime layer)
- components/runtime/dream.RuntimeView.tsx — RuntimeView (important path; behavior evidence; runtime layer)
- components/runtime/dream.shell.RuntimeShell.tsx — RuntimeShell (important path; behavior evidence; runtime layer)
- components/shared-dream/dream.SharedDreamProvider.tsx — SharedDreamProvider, useSharedDream, SharedDreamContextValue (important path; behavior evidence; important exports: SharedDreamProvider, useSharedDream, SharedDreamContextValue)
- components/daydream/dream.shell.DaydreamShell.tsx — DaydreamShell, DaydreamWidget (important path; behavior evidence; important exports: DaydreamShell, DaydreamWidget)
- components/games/madmaxi/authoredZonePacks.ts — getAuthoredStarterLevel, isMadmaxiAuthoredLevel (important path; behavior evidence; important exports: getAuthoredStarterLevel, isMadmaxiAuthoredLevel)
- components/daydream/dream.StandaloneEnginSurface.tsx — StandaloneEnginSurface, StandaloneEnginName (important path; behavior evidence; important exports: StandaloneEnginSurface, StandaloneEnginName)
- components/games/madmaxi/audio.ts — MadmaxiAudioController (important path; behavior evidence; important exports: MadmaxiAudioController)
- components/daydream/dream.CodeDreamIDE.tsx — CodeDreamIDE (important path; behavior evidence; important exports: CodeDreamIDE)
- components/daydream/dream.constellationmap.tsx — DreamConstellationMap (important path; behavior evidence; important exports: DreamConstellationMap)
- components/daydream/dream.LabDreamIDE.tsx — LabDreamIDE (important path; behavior evidence; important exports: LabDreamIDE)
- components/daydream/dream.NGNEngin.tsx — NGNEngin (important path; behavior evidence; important exports: NGNEngin)
### Architectural Relationships
- Depends on **Ads & User Ads**
- Depends on **app**
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **components**
- Depends on **Connectors & Live Feeds**
- Depends on **Dreamr — Human Media**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **DreamSpace**
- Depends on **Dual Runtimes**
- Depends on **HomeDream**
- Depends on **hooks**
- Depends on **Settings & Customization**
- Depends on **Shared Dreams**
- Depends on **The Engins**
- Depends on **The Marketplace**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Participates in the Shared Dreams pub/sub channel system
- Consumes backend, engine, Supabase, or core system services
- Depends on Ads & User Ads
- Depends on app
- Depends on Backend, System, Core & CoreSurfaces
- Depends on components
### Public Surfaces
**Production Components:**
`AIAssistant`, `AIBuilderPanel`, `AIPanel`, `ASSET_IMPORT_EVENT`, `ActiveModuleSurface`, `ActivityPostForm`, `ActivityProfile`, `AdUnit`, `AddDreamCTA`, `AddSliceSheet`, +262 more
### Notable Abstractions
- `FeedSlice` — interface in `components/connectors/dream.AddSliceSheet.tsx`
- `PickerConnector` — interface in `components/connectors/dream.widget.ConnectorWidgetPicker.tsx`
- `StandaloneEnginName` — type in `components/daydream/dream.StandaloneEnginSurface.tsx`
- `DaydreamWidget` — type in `components/daydream/dream.shell.DaydreamShell.tsx`
- `RegistryEntry` — interface in `components/dream.universal_asset_registry.tsx`
- `GameAssetRow` — interface in `components/dream.universal_asset_registry.tsx`
- `AssetCategory` — type in `components/dreamengin/dream.CanvasDropZone.tsx`
- `AssetImportPayload` — interface in `components/dreamengin/dream.CanvasDropZone.tsx`
- `EngineState` — interface in `components/dreamengin/engine/types.ts`
- `DreamOutputMode` — type in `components/dreams/dream.outputlayer.tsx`
- `DreamVisibility` — type in `components/dreams/dream.outputlayer.tsx`
- `DreamDataState` — type in `components/dreams/dream.shell.DreamShell.tsx`
- `useAccount` — hook
- `useAlbums` — hook
- `useBreakpoint` — hook
- `useBreakpointValue` — hook
- `useConnectorInstallFlow` — hook
- `useContent` — hook
- `useCustomizeMode` — hook
- `useDreamLayout` — hook
### Capabilities
- Exposes hooks: useAccount, useAlbums, useBreakpoint, useBreakpointValue, useConnectorInstallFlow, useContent, +28 more
- Important contract surface: FeedSlice, PickerConnector, RegistryEntry, GameAssetRow, AssetImportPayload
- Important shared type vocabulary: StandaloneEnginName, DaydreamWidget, AssetCategory, DreamOutputMode, DreamVisibility
- Behavior functions: DreamShell, QueuePanel, makeEnginApp, AssetsPanel, makeEnginApp, EnginNavBar
#### Application Source Structure
```text
├── components
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
│   ├── dream.CommandPaletteMount.tsx
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
… (217 more application source files)
```
<details><summary>User-Facing Modularity application source index (337 files)</summary>

- `components/activity/dream.ActivityPostForm.tsx` — React application module.
- `components/activity/dream.ActivityProfile.tsx` — React application module.
- `components/activity/dream.TierBadge.tsx` — React application module.
- `components/ads/dream.AdUnit.tsx` — React application module.
- `components/ads/dream.SkipCreditBalance.tsx` — React application module.
- `components/auth/dream.PasswordField.tsx` — React application module.
- `components/branding/dream.DreamEnginLogo.tsx` — React application module.
- `components/branding/dream.LogoHero.tsx` — React application module.
- `components/branding/dream.Nav.tsx` — React application module.
- `components/connectors/dream.AddSliceSheet.tsx` — React application module.
- `components/connectors/dream.ConnectDreamPrompt.tsx` — React application module.
- `components/connectors/dream.ConnectorRow.tsx` — React application module.
- `components/connectors/dream.NoSlotDialog.tsx` — React application module.
- `components/connectors/dream.PlacementMode.tsx` — React application module.
- `components/connectors/dream.widget.ConnectWidgetPrompt.tsx` — React application module.
- `components/connectors/dream.widget.ConnectorWidgetPicker.tsx` — React application module.
- `components/contentengin/AnimationPanel.tsx` — React application module.
- `components/contentengin/AssetPreview3D.tsx` — React application module.
- `components/contentengin/ContentEnginStudio.tsx` — React application module.
- `components/contentengin/ExportPanel.tsx` — React application module.
- `components/contentengin/MaterialEditor.tsx` — React application module.
- `components/contentengin/PartTreeEditor.tsx` — React application module.
- `components/contentengin/PhotoReferencePanel.tsx` — React application module.
- `components/contentengin/RecipeEditor.tsx` — React application module.
- `components/contentengin/RiggingPanel.tsx` — React application module.
- `components/core/dream.CoreDream.tsx` — React application module.
- `components/customize/dream.GlobalCustomizeUI.tsx` — React application module.
- `components/customize/dream.bar.CustomizeModeBar.tsx` — React application module.
- `components/customize/dream.bar.CustomizeToolbar.tsx` — React application module.
- `components/customize/panels/dream.panel.ColorPanel.tsx` — React application module.
- `components/customize/panels/dream.panel.EffectsPanel.tsx` — React application module.
- `components/customize/panels/dream.panel.FontPanel.tsx` — React application module.
- `components/customize/panels/dream.panel.LayoutPanel.tsx` — React application module.
- `components/daydream/dream.CodeDreamIDE.tsx` — React application module.
- `components/daydream/dream.DiffViewer.tsx` — React application module.
- `components/daydream/dream.JourneyTrail.tsx` — React application module.
- `components/daydream/dream.LabDreamIDE.tsx` — React application module.
- `components/daydream/dream.NGNEngin.tsx` — React application module.
- `components/daydream/dream.OpenDaydreamSideBButton.tsx` — React application module.
- `components/daydream/dream.StandaloneEnginSurface.tsx` — React application module.
- `components/daydream/dream.constellationmap.tsx` — React application module.
- `components/daydream/dream.shell.DaydreamShell.tsx` — React application module.
- `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` — React application module.
- `components/daydream/starmaker/dream.panel.CompingPanel.tsx` — React application module.
- `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx` — React application module.
- `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx` — React application module.
- `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` — React application module.
- `components/draggable/dream.DraggableModule.tsx` — React application module.
- `components/dream.AIAssistant.tsx` — React application module.
- `components/dream.AudioVisualizer3D.tsx` — React application module.
- `components/dream.BoogieWarningBanner.tsx` — React application module.
- `components/dream.BrandLogo.tsx` — React application module.
- `components/dream.CommandPalette.tsx` — React application module.
- `components/dream.CommandPaletteMount.tsx` — React application module.
- `components/dream.CreatePostModal.tsx` — React application module.
- `components/dream.DrEamsModeToggle.tsx` — React application module.
- `components/dream.DrEamsVoiceAssistant.tsx` — React application module.
- `components/dream.DragToAnchorClose.tsx` — React application module.
- `components/dream.FeedCard.tsx` — React application module.
- `components/dream.ForgeDreamCanvas.tsx` — React application module.
- `components/dream.GlobalOverlays.tsx` — React application module.
- `components/dream.HeroSprite.tsx` — React application module.
- `components/dream.HomeFeed.tsx` — React application module.
- `components/dream.IconSelector.tsx` — React application module.
- `components/dream.InnerDreamsButton.tsx` — React application module.
- `components/dream.KonamiDream.tsx` — React application module.
- `components/dream.LandingHero.tsx` — React application module.
- `components/dream.LedgerChart.tsx` — React application module.
- `components/dream.MessagesClient.tsx` — React application module.
- `components/dream.NotificationCenter.tsx` — React application module.
- `components/dream.OSShellActivator.tsx` — React application module.
- `components/dream.PhysicsLab.tsx` — React application module.
- `components/dream.ProfileEditor.tsx` — React application module.
- `components/dream.ProfileShareButton.tsx` — React application module.
- `components/dream.ProfileSpace.tsx` — React application module.
- `components/dream.PullToRefresh.tsx` — React application module.
- `components/dream.ShrunkMode.tsx` — React application module.
- `components/dream.SkeletonLoaders.tsx` — React application module.
- `components/dream.ThemeApplicator.tsx` — React application module.
- `components/dream.ThemeToggle.tsx` — React application module.
- `components/dream.ToastSystem.tsx` — React application module.
- `components/dream.VoidThemeToggle.tsx` — React application module.
- `components/dream.panel.ChildSafetyPanel.tsx` — React application module.
- `components/dream.panel.IDariPanel.tsx` — React application module.
- `components/dream.universal_asset_registry.tsx` — React application module.
- `components/dream.widget.AnchorWidget.tsx` — React application module.
- `components/dream.widget.ProfileWidgetBlock.tsx` — React application module.
- `components/dream.widget.WidgetBubble.tsx` — React application module.
- `components/dreamengin/dream.CanvasDropZone.tsx` — React application module.
- `components/dreamengin/dream.DREAMenginOS.tsx` — React application module.
- `components/dreamengin/dream.DrEamsCanvas.tsx` — React application module.
- `components/dreamengin/dream.HomeControls.tsx` — React application module.
- `components/dreamengin/dream.bar.DrEamsSearchBar.tsx` — React application module.
- `components/dreamengin/dream.menu.NexusMenu.tsx` — React application module.
- `components/dreamengin/dream.menu.OutdreamMenu.tsx` — React application module.
- `components/dreamengin/dream.overlay.ViewAllDreamsOverlay.tsx` — React application module.
- `components/dreamengin/dream.panel.CrossEnginStatusPanel.tsx` — React application module.
- `components/dreamengin/dream.panel.DrEamsPanel.tsx` — React application module.
- `components/dreamengin/dream.scene.BabylonGameScene.tsx` — React application module.
- `components/dreamengin/dream.scene.DrEamsScene.tsx` — React application module.
- `components/dreamengin/dream.scene.PortfolioOptimizationScene.tsx` — React application module.
- `components/dreamengin/dream.shell.EnginShell.tsx` — React application module.
- `components/dreamengin/dream.widget.AppearanceWidget.tsx` — React application module.
- `components/dreamengin/dreamsurface.dreamengin.tsx` — React application module.
- `components/dreamengin/engine/math.ts` — TypeScript/JavaScript application module.
- `components/dreamengin/engine/types.ts` — TypeScript/JavaScript application module.
- `components/dreamnav/dream.DreamNavControls.tsx` — React application module.
- `components/dreamnav/dreamsurface.dreamnav.tsx` — React application module.
- `components/dreamr/dream.CloseFriendsSettings.tsx` — React application module.
- `components/dreamr/dream.panel.DreamRChannelPanel.tsx` — React application module.
- `components/dreamr/dream.panel.DreamRCreatorPanel.tsx` — React application module.
- `components/dreams/dream.DraggableDream.tsx` — React application module.
- `components/dreams/dream.GlobalDragLayer.tsx` — React application module.
- `components/dreams/dream.PlatformErrorReporter.tsx` — React application module.
- `components/dreams/dream.SlideOverPanel.tsx` — React application module.
- `components/dreams/dream.connectorlayer.tsx` — React application module.
- `components/dreams/dream.featurelayer.tsx` — React application module.
- `components/dreams/dream.outputlayer.tsx` — React application module.
- `components/dreams/dream.panel.RuntimeMemoryHUD.tsx` — React application module.
- `components/dreams/dream.shell.DreamShell.tsx` — React application module.
- `components/dreams/dream.shell.SharedDreamShell.tsx` — React application module.
- `components/dreams/dream.widget.SuperDreamWidget.tsx` — React application module.
- `components/dreams/dream.window.JourneyDreamWindow.tsx` — React application module.
- `components/dreams/dreamsurface.dreamspace.tsx` — React application module.
- `components/dreams/dreamsurface.shell.tsx` — React application module.
- `components/dreams/dreamsurface.window.tsx` — React application module.
- `components/engines/brand/dream.BrandEnginApp.tsx` — React application module.
- `components/engines/brand/index.ts` — TypeScript/JavaScript application module.
- `components/engines/brand/panels/dream.panel.CampaignsPanel.tsx` — React application module.
- `components/engines/brand/panels/dream.panel.IdentityPanel.tsx` — React application module.
- `components/engines/code/dream.CodeEnginApp.tsx` — React application module.
- `components/engines/code/index.ts` — TypeScript/JavaScript application module.
- `components/engines/code/panels/dream.panel.AIPanel.tsx` — React application module.
- `components/engines/code/panels/dream.panel.NotebookPanel.tsx` — React application module.
- `components/engines/code/panels/dream.panel.ProjectsPanel.tsx` — React application module.
- `components/engines/create/dream.CreateEnginApp.tsx` — React application module.
- `components/engines/create/index.ts` — TypeScript/JavaScript application module.
- `components/engines/create/panels/dream.panel.CalendarPanel.tsx` — React application module.
- `components/engines/create/panels/dream.panel.EditorPanel.tsx` — React application module.
- `components/engines/create/panels/dream.panel.QueuePanel.tsx` — React application module.
- `components/engines/games/dream.GameEnginApp.tsx` — React application module.
- `components/engines/games/index.ts` — TypeScript/JavaScript application module.
- `components/engines/games/panels/dream.panel.BuilderPanel.tsx` — React application module.
- `components/engines/games/panels/dream.panel.LibraryPanel.tsx` — React application module.
- `components/engines/games/panels/dream.panel.ScoresPanel.tsx` — React application module.
- `components/engines/index.ts` — TypeScript/JavaScript application module.
- `components/engines/lab/dream.LabEnginApp.tsx` — React application module.
- `components/engines/lab/index.ts` — TypeScript/JavaScript application module.
- `components/engines/lab/panels/dream.panel.DataVizPanel.tsx` — React application module.
- `components/engines/lab/panels/dream.panel.ExperimentsPanel.tsx` — React application module.
- `components/engines/lab/panels/dream.panel.QuantumPanel.tsx` — React application module.
- `components/engines/music/dream.MusicEnginApp.tsx` — React application module.
- `components/engines/music/index.ts` — TypeScript/JavaScript application module.
- `components/engines/music/panels/dream.panel.ArrangePanel.tsx` — React application module.
- `components/engines/music/panels/dream.panel.MusicLibraryPanel.tsx` — React application module.
- `components/engines/music/panels/dream.panel.StudioPanel.tsx` — React application module.
- `components/engines/portfolio/dream.PortfolioEnginApp.tsx` — React application module.
- `components/engines/portfolio/index.ts` — TypeScript/JavaScript application module.
- `components/engines/portfolio/panels/dream.panel.AssetsPanel.tsx` — React application module.
- `components/engines/portfolio/panels/dream.panel.OptimizePanel.tsx` — React application module.
- `components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel.tsx` — React application module.
- `components/engines/render/dream.RenderServiceDiagnostics.tsx` — React application module.
- `components/engines/render/index.ts` — TypeScript/JavaScript application module.
- `components/engines/shared/dream.EnginProvider.tsx` — React application module.
- `components/engines/shared/dream.EnginRuleSet.ts` — TypeScript/JavaScript application module.
- `components/engines/shared/dream.bar.EnginNavBar.tsx` — React application module.
- `components/engines/shared/dream.makeEnginApp.tsx` — React application module.
- `components/engines/shared/dream.shell.EnginAppShell.tsx` — React application module.
- `components/engines/shared/index.ts` — TypeScript/JavaScript application module.
- `components/feed/dream.AlgorithmEngine.tsx` — React application module.
- `components/feed/dream.CommentSection.tsx` — React application module.
- `components/feed/dream.FeedVideoCard.tsx` — React application module.
- `components/feed/dream.FollowButton.tsx` — React application module.
- `components/feed/dream.FollowOnboarding.tsx` — React application module.
- `components/feeds/dream.widget.EmbedFeedWidget.tsx` — React application module.
- `components/forge/dream.EngineBuilderCanvas.tsx` — React application module.
- `components/forge/dream.panel.AIBuilderPanel.tsx` — React application module.
- `components/forge/dream.widget.ForgeMomentumWidget.tsx` — React application module.
- `components/gameengin/dream.CartridgeRegistryBootstrap.tsx` — React application module.
- `components/gameengin/dream.CrashReportModal.tsx` — React application module.
- `components/gameengin/dream.cartridge.CartridgeBrowser.tsx` — React application module.
- `components/gameengin/dream.cartridge.CartridgeErrorBoundary.tsx` — React application module.
- `components/gameengin/dream.cartridge.CartridgeLauncher.tsx` — React application module.
- `components/gameengin/dream.cartridge.FeaturedCartridges.tsx` — React application module.
- `components/gameengin/input/DualSenseManager.ts` — TypeScript/JavaScript application module.
- `components/games/_fx/canvasFx.ts` — TypeScript/JavaScript application module.
- `components/games/dream.AvenueOfMirrors.tsx` — React application module.
- `components/games/dream.BabylonSideScroller.tsx` — React application module.
- `components/games/dream.DefuseRitual.tsx` — React application module.
- `components/games/dream.EchoArena.tsx` — React application module.
- `components/games/dream.EnginFracture.tsx` — React application module.
- `components/games/dream.GameController.module.css` — application style source.
- `components/games/dream.GameController.tsx` — React application module.
- `components/games/dream.GamesHub.tsx` — React application module.
- `components/games/dream.Glassfall.tsx` — React application module.
- `components/games/dream.Leaderboard.tsx` — React application module.
- `components/games/dream.LexiconSolitaire.tsx` — React application module.
- `components/games/dream.MadMaxiWildfall.tsx` — React application module.
- `components/games/dream.NeonDrift.tsx` — React application module.
- `components/games/dream.NiteFlyerSolarHymn.tsx` — React application module.
- `components/games/dream.NullCathedral.tsx` — React application module.
- `components/games/dream.RecordingControls.tsx` — React application module.
- `components/games/dream.SerpentSiege.tsx` — React application module.
- `components/games/dream.VoidlineGP.tsx` — React application module.
- `components/games/dream.hud.GameHUD.tsx` — React application module.
- `components/games/dream.hud.LegacyGameHUD.tsx` — React application module.
- `components/games/dream.hud.MobileGameHUD.module.css` — application style source.
- `components/games/dream.hud.MobileGameHUD.tsx` — React application module.
- `components/games/dream.remote.GameRemote.tsx` — React application module.
- `components/games/dream.remote.GameRemoteSurface.tsx` — React application module.
- `components/games/dream.remote.LegacyGameRemote.tsx` — React application module.
- `components/games/madmaxi/audio.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/authoredZonePacks.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/config.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/dream.MadmaxiGame.tsx` — React application module.
- `components/games/madmaxi/index.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/levels.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/materials.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/types.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/vfx.ts` — TypeScript/JavaScript application module.
- `components/home/dream.ActiveModuleSurface.tsx` — React application module.
- `components/home/dream.DaydreamPulseStrip.tsx` — React application module.
- `components/home/dream.FlagshipEnginesStrip.tsx` — React application module.
- `components/home/dream.NeuralSeamCanvas.tsx` — React application module.
- `components/home/dream.bar.GlobalDreamBar.tsx` — React application module.
- `components/home/dream.bar.PersistentDreamBar.tsx` — React application module.
- `components/home/dream.widget.DreamWidget.tsx` — React application module.
- `components/icons/sheet.ts` — TypeScript/JavaScript application module.
- `components/idari/dream.PlatformHealth.tsx` — React application module.
- `components/landing/dream.LandingNav.tsx` — React application module.
- `components/landing/dream.LandingProductStatement.tsx` — React application module.
- `components/landing/dream.scene.UniverseField.tsx` — React application module.
- `components/marketplace/dream.MarketplaceListingCard.tsx` — React application module.
- `components/marketplace/dream.MarketplaceRequestButton.tsx` — React application module.
- `components/menus/dream.menu.DreamRadialMenu.tsx` — React application module.
- `components/menus/dream.menu.DualBottomMenu.tsx` — React application module.
- `components/menus/dream.menu.RadialMenu.tsx` — React application module.
- `components/menus/dream.menu.SystemRadialMenu.tsx` — React application module.
- `components/menus/dream.panel.MenuPanel.tsx` — React application module.
- `components/messaging/dream.BoardComposer.tsx` — React application module.
- `components/music/dream.SoundRecorder.tsx` — React application module.
- `components/onboarding/dream.OnboardingTip.tsx` — React application module.
- `components/optimizer/dream.scene.BabylonOptimizeroScene.tsx` — React application module.
- `components/overlays/dream.RootStatusScreen.tsx` — React application module.
- `components/panels/dream.panel.AlgorithmPanel.tsx` — React application module.
- `components/panels/dream.panel.AppearancePanel.tsx` — React application module.
- `components/panels/dream.panel.ConnectorsPanel.tsx` — React application module.
- `components/panels/dream.panel.ControlsPanel.tsx` — React application module.
- `components/panels/dream.panel.DataPanel.tsx` — React application module.
- `components/panels/dream.panel.FeedPanel.tsx` — React application module.
- `components/panels/dream.panel.FeedSettingsPanel.tsx` — React application module.
- `components/panels/dream.panel.HelpPanel.tsx` — React application module.
- `components/panels/dream.panel.MarketplacePanel.tsx` — React application module.
- `components/panels/dream.panel.PrivacyPanel.tsx` — React application module.
- `components/panels/dream.panel.ProfilePanel.tsx` — React application module.
- `components/panels/dream.panel.SafetyPanel.tsx` — React application module.
- `components/panels/dream.panel.SettingsPanel.tsx` — React application module.
- `components/panels/dream.panel.WidgetsPanel.tsx` — React application module.
- `components/panels/panelTypes.ts` — TypeScript/JavaScript application module.
- `components/profile/dream.EditableAvatar.tsx` — React application module.
- `components/profile/dream.ProfileCanvas.tsx` — React application module.
- `components/profile/dream.ProfileCustomizeButton.tsx` — React application module.
- `components/profile/dream.widget.ProfileWidgetGrid.tsx` — React application module.
- `components/providers/dream.AppSurfaceShell.tsx` — React application module.
- `components/providers/dream.GodTierProvider.tsx` — React application module.
- `components/providers/dream.ThemeProvider.tsx` — React application module.
- `components/runtime/dream.DualRuntimeContainer.tsx` — React application module.
- `components/runtime/dream.RuntimeView.tsx` — React application module.
- `components/runtime/dream.shell.RuntimeShell.tsx` — React application module.
- `components/shaders/dream.LightningWing.tsx` — React application module.
- `components/shaders/dream.NeonGlow.tsx` — React application module.
- `components/shaders/dream.Refractor.tsx` — React application module.
- `components/shaders/index.ts` — TypeScript/JavaScript application module.
- `components/shared-dream/dream.InviteFlow.tsx` — React application module.
- `components/shared-dream/dream.SharedDreamCanvas.tsx` — React application module.
- `components/shared-dream/dream.SharedDreamProvider.tsx` — React application module.
- `components/shared-dream/dream.SharedDreamRuntime.tsx` — React application module.
- `components/shared-dream/index.ts` — TypeScript/JavaScript application module.
- `components/spatial/dream.PixiPhysicsLayer.tsx` — React application module.
- `components/spatial/dream.ProfileSpace.tsx` — React application module.
- `components/spatial/dream.shell.EnhancedSpatialShell.tsx` — React application module.
- `components/three/dream.scene.tsx` — React application module.
- `components/three/index.ts` — TypeScript/JavaScript application module.
- `components/ui-system/CustomizeModeContext.tsx` — React application module.
- `components/ui-system/responsive.ts` — TypeScript/JavaScript application module.
- `components/ui-system/runtimeViewport.ts` — TypeScript/JavaScript application module.
- `components/ui-system/skin-engine.ts` — TypeScript/JavaScript application module.
- `components/ui-system/theme-engine.ts` — TypeScript/JavaScript application module.
- `components/ui-system/theme.ts` — TypeScript/JavaScript application module.
- `components/ui/dream.AuthenticatedPageHeader.tsx` — React application module.
- `components/ui/dream.DreamWord.tsx` — React application module.
- `components/ui/dream.IconList.tsx` — React application module.
- `components/ui/dream.InfinityIcon.tsx` — React application module.
- `components/ui/dream.PlatformBadge.tsx` — React application module.
- `components/ui/dream.SheetIcon.tsx` — React application module.
- `components/ui/dream.SocialShareSheet.tsx` — React application module.
- `components/universal-editor/dream.UniversalEditor.tsx` — React application module.
- `components/universal-editor/dream.UniversalEditorWrapper.tsx` — React application module.
- `components/universal-editor/index.ts` — TypeScript/JavaScript application module.
- `components/universal-editor/useTapHoldMove.ts` — TypeScript/JavaScript application module.
- `components/universe/dream.node-cluster.tsx` — React application module.
- `components/universe/dream.shell.universe-shell.tsx` — React application module.
- `components/universe/dream.universe-card.tsx` — React application module.
- `components/universe/index.ts` — TypeScript/JavaScript application module.
- `components/warp/dream.WarpCanvas.tsx` — React application module.
- `components/webgpu/dream.WebGPUShowcase.tsx` — React application module.
- `components/webgpu/neuralPostProcess.ts` — TypeScript/JavaScript application module.
- `components/webgpu/renderer.ts` — TypeScript/JavaScript application module.
- `components/webgpu/shaders.ts` — TypeScript/JavaScript application module.
- `components/widgets/dream.AddDreamCTA.tsx` — React application module.
- `components/widgets/dream.ConfigureSheet.tsx` — React application module.
- `components/widgets/dream.EditModeBanner.tsx` — React application module.
- `components/widgets/dream.EditModeProvider.tsx` — React application module.
- `components/widgets/dream.widget.PlayMediaWidget.tsx` — React application module.
- `components/widgets/dream.widget.UniversalWidget.tsx` — React application module.
- `components/widgets/dream.widget.WidgetCard.tsx` — React application module.
- `components/widgets/dream.widget.WidgetLibrary.tsx` — React application module.
- `components/widgets/dream.widget.WidgetPlaceholder.tsx` — React application module.
- `components/widgets/dream.widget.WidgetShell.tsx` — React application module.
- `components/widgets/dream.widget.WidgetSurface.tsx` — React application module.
- `hooks/use-spatial.ts` — TypeScript/JavaScript application module.
- `hooks/useAccount.ts` — TypeScript/JavaScript application module.
- `hooks/useConnectorInstallFlow.ts` — TypeScript/JavaScript application module.
- `hooks/useDreamLayout.ts` — TypeScript/JavaScript application module.
- `hooks/useHideOnScroll.ts` — TypeScript/JavaScript application module.
- `hooks/useMotionTilt.ts` — TypeScript/JavaScript application module.
- `hooks/useResponsive.ts` — TypeScript/JavaScript application module.
- `hooks/useSharedDream.ts` — TypeScript/JavaScript application module.
- `hooks/useTap.ts` — TypeScript/JavaScript application module.
- `hooks/useTapHoldMove.ts` — TypeScript/JavaScript application module.
- `hooks/useTick.ts` — TypeScript/JavaScript application module.
- `hooks/useViewCounter.ts` — TypeScript/JavaScript application module.
- `styles/dream-shell.css` — application style source.
- `styles/globals.css` — application style source.
- `styles/home-dream.css` — application style source.
- `styles/theme.css` — application style source.
- `styles/view-transitions.css` — application style source.

</details>

## The Shop
The Shop is a full-stack application subsystem with React surfaces and API transport boundaries. Primary route surfaces: /shop, /shop/sell. It depends on Backend, System, Core & CoreSurfaces, User-Facing Modularity, utils.
### Responsibilities
- User-facing surfaces: /shop, /shop/sell
- API transport boundaries: /api/shop
- Renders production surfaces/components: GET, POST, PUT, DELETE, ShopPage, SellItemPage
### Key Modules
- app/api/shop/route.ts (important path; behavior evidence; API boundary)
- app/shop/page.tsx (important path; behavior evidence; route surface)
- app/shop/sell/page.tsx (important path; behavior evidence; route surface)
- engine/shop/listings.ts (important path; behavior evidence)
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on User-Facing Modularity
- Depends on utils
### Public Surfaces
**Routes:**
- `/shop` — `app/shop/page.tsx`
- `/shop/sell` — `app/shop/sell/page.tsx`
**API Endpoints:**
- `/api/shop` `[GET, POST, PUT, DELETE]` — `app/api/shop/route.ts`
**Production Components:**
`DELETE`, `GET`, `POST`, `PUT`, `SellItemPage`, `ShopPage`
### Capabilities
- Read endpoints for data retrieval
- Write endpoints for mutations
- Delete endpoints for resource lifecycle
#### Application Source Structure
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
<details><summary>The Shop application source index (4 files)</summary>

- `app/api/shop/route.ts` — API route transport boundary.
- `app/shop/page.tsx` — route page surface.
- `app/shop/sell/page.tsx` — route page surface.
- `engine/shop/listings.ts` — TypeScript/JavaScript application module.

</details>

## The Marketplace
The Marketplace is a full-stack application subsystem with React surfaces and API transport boundaries. Primary route surfaces: /marketplace, /marketplace/[id], /marketplace/sell. It depends on Backend, System, Core & CoreSurfaces, User-Facing Modularity, utils.
### Responsibilities
- User-facing surfaces: /marketplace, /marketplace/[id], /marketplace/sell
- API transport boundaries: /api/marketplace
- Renders production surfaces/components: POST, GET, POST, MarketplaceItemPage, MarketplacePage, MarketplaceSellPage
### Key Modules
- app/api/marketplace/request/route.ts (important path; behavior evidence; API boundary)
- app/api/marketplace/route.ts (important path; behavior evidence; API boundary)
- app/marketplace/sell/page.tsx (important path; behavior evidence; route surface)
- app/marketplace/[id]/page.tsx (important path; behavior evidence; route surface)
- app/marketplace/page.tsx (important path; behavior evidence; route surface)
- engine/marketplace/request.ts — CONTACT_REQUEST_MESSAGE_MAX (important path; behavior evidence; important exports: CONTACT_REQUEST_MESSAGE_MAX)
- engine/marketplace/listings.ts (important path; behavior evidence)
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on User-Facing Modularity
- Depends on utils
### Public Surfaces
**Routes:**
- `/marketplace` — `app/marketplace/page.tsx`
- `/marketplace/[id]` — `app/marketplace/[id]/page.tsx`
- `/marketplace/sell` — `app/marketplace/sell/page.tsx`
**API Endpoints:**
- `/api/marketplace` `[GET, POST]` — `app/api/marketplace/route.ts`
- `/api/marketplace/request` `[POST]` — `app/api/marketplace/request/route.ts`
**Production Components:**
`GET`, `MarketplaceItemPage`, `MarketplacePage`, `MarketplaceSellPage`, `POST`
### Capabilities
- Read endpoints for data retrieval
- Write endpoints for mutations
#### Application Source Structure
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
<details><summary>The Marketplace application source index (9 files)</summary>

- `app/api/marketplace/request/route.ts` — API route transport boundary.
- `app/api/marketplace/route.ts` — API route transport boundary.
- `app/marketplace/[id]/page.tsx` — route page surface.
- `app/marketplace/page.tsx` — route page surface.
- `app/marketplace/sell/page.tsx` — route page surface.
- `components/marketplace/dream.MarketplaceListingCard.tsx` — React application module.
- `components/marketplace/dream.MarketplaceRequestButton.tsx` — React application module.
- `engine/marketplace/listings.ts` — TypeScript/JavaScript application module.
- `engine/marketplace/request.ts` — TypeScript/JavaScript application module.

</details>

## Ads & User Ads
Ads & User Ads is a full-stack application subsystem with React surfaces and API transport boundaries. Primary route surfaces: /ads, /ads/create, /ads/slot/[id]. It depends on Backend, System, Core & CoreSurfaces, Dreamr — Human Media, User-Facing Modularity.
### Responsibilities
- User-facing surfaces: /ads, /ads/create, /ads/slot/[id]
- API transport boundaries: /api/ads
- Renders production surfaces/components: CreateAdSlotPage, AdsPage, AdSlotPage, POST, POST, AdUnit, +1 more
### Key Modules
- app/api/ads/orders/route.ts (important path; behavior evidence; API boundary)
- app/api/ads/view/route.ts (important path; behavior evidence; API boundary)
- app/ads/page.tsx (behavior evidence; route surface; large behavior file)
- app/ads/create/page.tsx (behavior evidence; route surface)
- app/ads/slot/[id]/page.tsx (behavior evidence; route surface)
- types/ads.ts — ProfileLite (important path; behavior evidence; important exports: ProfileLite)
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreamr — Human Media**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreamr — Human Media
- Depends on User-Facing Modularity
- Depends on utils
### Public Surfaces
**Routes:**
- `/ads` — `app/ads/page.tsx`
- `/ads/create` — `app/ads/create/page.tsx`
- `/ads/slot/[id]` — `app/ads/slot/[id]/page.tsx`
**API Endpoints:**
- `/api/ads/orders` `[POST]` — `app/api/ads/orders/route.ts`
- `/api/ads/view` `[POST]` — `app/api/ads/view/route.ts`
**Production Components:**
`AdSlotPage`, `AdUnit`, `AdsPage`, `CreateAdSlotPage`, `POST`, `SkipCreditBalance`
### Notable Abstractions
- `ProfileLite` — type in `types/ads.ts`
### Capabilities
- Important shared type vocabulary: ProfileLite
- Write endpoints for mutations
#### Application Source Structure
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
<details><summary>Ads & User Ads application source index (8 files)</summary>

- `app/ads/create/page.tsx` — route page surface.
- `app/ads/page.tsx` — route page surface.
- `app/ads/slot/[id]/page.tsx` — route page surface.
- `app/api/ads/orders/route.ts` — API route transport boundary.
- `app/api/ads/view/route.ts` — API route transport boundary.
- `components/ads/dream.AdUnit.tsx` — React application module.
- `components/ads/dream.SkipCreditBalance.tsx` — React application module.
- `types/ads.ts` — TypeScript/JavaScript application module.

</details>

## Settings & Customization
Settings & Customization is a full-stack application subsystem with React surfaces and API transport boundaries. Primary route surfaces: /settings, /settings/account, /settings/algorithm, …. It depends on app, Backend, System, Core & CoreSurfaces, Dreams, Widgets, Windows & Surfaces.
### Responsibilities
- User-facing surfaces: /settings, /settings/account, /settings/algorithm, /settings/appearance, /settings/controls, +9 more
- API transport boundaries: /api/settings
- Renders production surfaces/components: GET, POST, GET, POST, GET, POST, +29 more
- Messaging, conversations, notifications, realtime channels, or presence
- Feed, post, comment, ranking, or social interaction behavior
- Theming, design tokens, visual customization, or settings surfaces
### Key Modules
- app/settings/dreams/page.tsx — DreamsSettingsPage (important path; behavior evidence; route surface)
- app/settings/feed/page.tsx — FeedSettingsRedirect (important path; behavior evidence; route surface)
- app/settings/notifications/page.tsx — NotificationSettingsPage (important path; behavior evidence; route surface)
- app/api/settings/appearance/route.ts (important path; behavior evidence; API boundary)
- app/api/settings/feed/route.ts (important path; behavior evidence; API boundary)
- app/api/settings/notifications/route.ts (important path; behavior evidence; API boundary)
- app/api/settings/privacy/route.ts (important path; behavior evidence; API boundary)
- app/settings/appearance/page.tsx (important path; behavior evidence; route surface)
- app/settings/privacy/dream.PrivacyClient.tsx — PrivacyClient (important path; behavior evidence; important exports: PrivacyClient)
- app/settings/security/page.tsx (important path; behavior evidence; route surface)
- app/settings/account/page.tsx (important path; behavior evidence; route surface)
- app/settings/algorithm/page.tsx (important path; behavior evidence; route surface)
### Architectural Relationships
- Depends on **app**
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Consumes backend, engine, Supabase, or core system services
- Depends on app
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreams, Widgets, Windows & Surfaces
- Depends on User-Facing Modularity
### Public Surfaces
**Routes:**
- `/settings` — `app/settings/page.tsx`
- `/settings/account` — `app/settings/account/page.tsx`
- `/settings/algorithm` — `app/settings/algorithm/page.tsx`
- `/settings/appearance` — `app/settings/appearance/page.tsx`
- `/settings/controls` — `app/settings/controls/page.tsx`
- `/settings/data` — `app/settings/data/page.tsx`
- `/settings/dreams` — `app/settings/dreams/page.tsx`
- `/settings/feed` — `app/settings/feed/page.tsx`
- `/settings/help` — `app/settings/help/page.tsx`
- `/settings/notifications` — `app/settings/notifications/page.tsx`
- `/settings/privacy` — `app/settings/privacy/page.tsx`
- `/settings/safety` — `app/settings/safety/page.tsx`
- `/settings/security` — `app/settings/security/page.tsx`
- `/settings/widgets` — `app/settings/widgets/page.tsx`
**API Endpoints:**
- `/api/settings/appearance` `[GET, POST]` — `app/api/settings/appearance/route.ts`
- `/api/settings/feed` `[GET, POST]` — `app/api/settings/feed/route.ts`
- `/api/settings/notifications` `[GET, POST]` — `app/api/settings/notifications/route.ts`
- `/api/settings/privacy` `[GET, POST]` — `app/api/settings/privacy/route.ts`
**Production Components:**
`AccountSettingsPage`, `AlgorithmPage`, `AppearanceSettingsPage`, `ColorPanel`, `ControlsClient`, `ControlsSettingsPage`, `CustomizeModeBar`, `CustomizeToolbar`, `DangerZoneActions`, `DataClient`, +19 more
### Capabilities
- Behavior functions: FeedSettingsRedirect
- Read endpoints for data retrieval
- Write endpoints for mutations
#### Application Source Structure
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
    ├── dream-shell.css
    ├── globals.css
    ├── home-dream.css
    ├── theme.css
    └── view-transitions.css
```
<details><summary>Settings & Customization application source index (36 files)</summary>

- `app/api/settings/appearance/route.ts` — API route transport boundary.
- `app/api/settings/feed/route.ts` — API route transport boundary.
- `app/api/settings/notifications/route.ts` — API route transport boundary.
- `app/api/settings/privacy/route.ts` — API route transport boundary.
- `app/settings/account/dream.DangerZoneActions.tsx` — React application module.
- `app/settings/account/page.tsx` — route page surface.
- `app/settings/algorithm/page.tsx` — route page surface.
- `app/settings/appearance/page.tsx` — route page surface.
- `app/settings/controls/dream.ControlsClient.tsx` — React application module.
- `app/settings/controls/dream.PositionIndicatorToggle.tsx` — React application module.
- `app/settings/controls/page.tsx` — route page surface.
- `app/settings/data/dream.DataClient.tsx` — React application module.
- `app/settings/data/page.tsx` — route page surface.
- `app/settings/dreams/dreams-layout-editor.tsx` — React application module.
- `app/settings/dreams/page.tsx` — route page surface.
- `app/settings/feed/page.tsx` — route page surface.
- `app/settings/help/page.tsx` — route page surface.
- `app/settings/notifications/page.tsx` — route page surface.
- `app/settings/page.tsx` — route page surface.
- `app/settings/privacy/dream.PrivacyClient.tsx` — React application module.
- `app/settings/privacy/page.tsx` — route page surface.
- `app/settings/safety/page.tsx` — route page surface.
- `app/settings/security/page.tsx` — route page surface.
- `app/settings/widgets/page.tsx` — route page surface.
- `components/customize/dream.GlobalCustomizeUI.tsx` — React application module.
- `components/customize/dream.bar.CustomizeModeBar.tsx` — React application module.
- `components/customize/dream.bar.CustomizeToolbar.tsx` — React application module.
- `components/customize/panels/dream.panel.ColorPanel.tsx` — React application module.
- `components/customize/panels/dream.panel.EffectsPanel.tsx` — React application module.
- `components/customize/panels/dream.panel.FontPanel.tsx` — React application module.
- `components/customize/panels/dream.panel.LayoutPanel.tsx` — React application module.
- `styles/dream-shell.css` — application style source.
- `styles/globals.css` — application style source.
- `styles/home-dream.css` — application style source.
- `styles/theme.css` — application style source.
- `styles/view-transitions.css` — application style source.

</details>

## Backend, System, Core & CoreSurfaces
Backend, System, Core & CoreSurfaces is a full-stack application subsystem with React surfaces and API transport boundaries. It exposes useBrandingEnginBridge, useCodeEnginBridge, useContentEnginBridge as reusable hooks. Core abstractions are encapsulated in WebRTCCollabSession, UnsupportedProviderError, ConsentManager. It depends on app, Connectors & Live Feeds, Dreamr — Human Media.
### Responsibilities
- API transport boundaries: /api/account, /api/activity, /api/admin, /api/ads, …
- Renders production surfaces/components: POST, POST, GET, POST, POST, POST, +305 more
- Core abstractions: WebRTCCollabSession, UnsupportedProviderError, ConsentManager, CodeEditRingBuffer, GeometryBatcher
- Runtime orchestration, capability routing, and Engin lifecycle coordination
- Database access, persistence, and server-side data coordination
- AI provider integration and inference routing
- Authentication, sessions, authorization, and access control
- Messaging, conversations, notifications, realtime channels, or presence
- Feed, post, comment, ranking, or social interaction behavior
- Asset storage, upload, export, or CDN-facing pipelines
- GameEngin cartridge/runtime interaction or playable system behavior
- ContentEngin asset creation, validation, rigging, animation, or export behavior
### Key Modules
- engine/runtime/EnginDispatcher.ts — initWasmEngine, WorkerInitMessage, WorkerStopMessage (important path; behavior evidence; runtime layer)
- engine/runtime/iEngine.ts — authorizeCapability, validateManifest, createRuntimeObject (important path; behavior evidence; runtime layer)
- engine/runtime/index.ts — RegistrySlot, RegistryEntry, UniversalEngine (important path; behavior evidence; runtime layer)
- engine/runtime/useEnginBridge.ts — useCodeEnginBridge, useGameEnginBridge, useStarMakerEnginBridge (important path; behavior evidence; runtime layer)
- engine/runtime/runtimeContainer.ts — RuntimeStrategy, RuntimeContainerOptions, RuntimeContainer (important path; behavior evidence; runtime layer)
- engine/runtime/useDragSurface.ts — useDragSurface, UseDragSurfaceOptions, UseDragSurfaceResult (important path; behavior evidence; runtime layer)
- engine/runtime/useDualRuntime.ts — useDualRuntime, UseDualRuntimeReturn, BridgeEventHandler (important path; behavior evidence; runtime layer)
- engine/runtime/useEnginCoopSync.ts — useEnginCoopSync, UseEnginCoopSyncOptions, UseEnginCoopSyncResult (important path; behavior evidence; runtime layer)
- engine/runtime/useSharedEnginChannel.ts — useSharedEnginChannel, SharedEnginChannelOptions, SharedEnginChannelResult (important path; behavior evidence; runtime layer)
- engine/runtime/dreamOSBus.ts — isIntentEnvelope, getCapabilityDescriptor, getCapabilityChildren (important path; behavior evidence; runtime layer)
- engine/runtime/dualRuntime.ts — setRuntimeWorld, swapDominantRuntime, makeHomeDreamSpaceActive (important path; behavior evidence; runtime layer)
- engine/runtime/dualRuntimeBridge.ts — DualRuntimeChannel, ChannelEventKey, ChannelEventPayload (important path; behavior evidence; runtime layer)
### Architectural Relationships
- Depends on **app**
- Depends on **Connectors & Live Feeds**
- Depends on **Dreamr — Human Media**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **engine**
- Depends on **Runtime Orchestration**
- Depends on **supabase**
- Depends on **The Engins**
- Depends on **The Marketplace**
- Depends on **The Shop**
- Depends on **types**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Depends on app
- Depends on Connectors & Live Feeds
- Depends on Dreamr — Human Media
- Depends on Dreams, Widgets, Windows & Surfaces
### Public Surfaces
**API Endpoints:**
- `/api/account/delete-data` `[POST]` — `app/api/account/delete-data/route.ts`
- `/api/account/delete-dream` `[POST]` — `app/api/account/delete-dream/route.ts`
- `/api/account/export-data` `[GET]` — `app/api/account/export-data/route.ts`
- `/api/activity/track` `[POST]` — `app/api/activity/track/route.ts`
- `/api/admin/ai-chat` `[POST]` — `app/api/admin/ai-chat/route.ts`
- `/api/admin/ai-request` `[POST]` — `app/api/admin/ai-request/route.ts`
- `/api/admin/child-safety` `[GET, POST]` — `app/api/admin/child-safety/route.ts`
- `/api/admin/code-files` `[POST]` — `app/api/admin/code-files/route.ts`
- `/api/admin/observability` `[GET]` — `app/api/admin/observability/route.ts`
- `/api/ads/orders` `[POST]` — `app/api/ads/orders/route.ts`
- `/api/ads/view` `[POST]` — `app/api/ads/view/route.ts`
- `/api/agent/session` `[POST]` — `app/api/agent/session/route.ts`
- `/api/ai/boogieman` `[POST]` — `app/api/ai/boogieman/route.ts`
- `/api/ai/boogieman/child-safety` `[POST]` — `app/api/ai/boogieman/child-safety/route.ts`
- `/api/ai/boogieman/privacy-event` `[POST]` — `app/api/ai/boogieman/privacy-event/route.ts`
- `/api/ai/boogieman/status` `[GET]` — `app/api/ai/boogieman/status/route.ts`
- `/api/ai/eams` `[POST]` — `app/api/ai/eams/route.ts`
- `/api/ai/execute` `[POST]` — `app/api/ai/execute/route.ts`
- `/api/ai/idari` `[POST]` — `app/api/ai/idari/route.ts`
- `/api/appeal` `[POST]` — `app/api/appeal/route.ts`
- `/api/auth/logout` `[GET]` — `app/api/auth/logout/route.ts`
- `/api/auth/providers` `[GET]` — `app/api/auth/providers/route.ts`
- `/api/blocks` `[GET, POST, DELETE]` — `app/api/blocks/route.ts`
- `/api/ci/run` `[POST]` — `app/api/ci/run/route.ts`
- `/api/close-friends` `[GET, POST, DELETE]` — `app/api/close-friends/route.ts`
- `/api/codeengin/diagnostics` `[POST]` — `app/api/codeengin/diagnostics/route.ts`
- `/api/codeengin/file` `[POST]` — `app/api/codeengin/file/route.ts`
- `/api/codeengin/git` `[POST]` — `app/api/codeengin/git/route.ts`
- `/api/codeengin/run` `[GET, POST]` — `app/api/codeengin/run/route.ts`
- `/api/codeengin/search` `[POST]` — `app/api/codeengin/search/route.ts`
- `/api/codeengin/upload` `[POST]` — `app/api/codeengin/upload/route.ts`
- `/api/codeengin/workspace` `[GET, POST]` — `app/api/codeengin/workspace/route.ts`
- `/api/comments` `[GET, POST, DELETE]` — `app/api/comments/route.ts`
- `/api/connectors/[provider]/connect` `[POST]` — `app/api/connectors/[provider]/connect/route.ts`
- `/api/connectors/[provider]/disconnect` `[DELETE]` — `app/api/connectors/[provider]/disconnect/route.ts`
- `/api/connectors/[provider]/items` `[GET]` — `app/api/connectors/[provider]/items/route.ts`
- `/api/connectors/[provider]/sync` `[POST]` — `app/api/connectors/[provider]/sync/route.ts`
- `/api/connectors/[provider]/verify` `[GET]` — `app/api/connectors/[provider]/verify/route.ts`
- `/api/connectors/cron` `[GET]` — `app/api/connectors/cron/route.ts`
- `/api/connectors/instagram/oauth/callback` `[GET]` — `app/api/connectors/instagram/oauth/callback/route.ts`
- `/api/connectors/instagram/oauth/start` `[GET]` — `app/api/connectors/instagram/oauth/start/route.ts`
- `/api/connectors/status` `[GET]` — `app/api/connectors/status/route.ts`
- `/api/connectors/webhooks/[provider]` `[GET, POST]` — `app/api/connectors/webhooks/[provider]/route.ts`
- `/api/connectors/youtube/oauth/callback` `[GET]` — `app/api/connectors/youtube/oauth/callback/route.ts`
- `/api/connectors/youtube/oauth/start` `[GET]` — `app/api/connectors/youtube/oauth/start/route.ts`
- `/api/content/generative-fill` `[POST]` — `app/api/content/generative-fill/route.ts`
- `/api/content/intelligence` `[POST]` — `app/api/content/intelligence/route.ts`
- `/api/content/transcribe` `[POST]` — `app/api/content/transcribe/route.ts`
- `/api/content/voice-clone` `[POST]` — `app/api/content/voice-clone/route.ts`
- `/api/contentengin/assets/[assetId]` `[GET]` — `app/api/contentengin/assets/[assetId]/route.ts`
- `/api/contentengin/assets/[assetId]/export/gameengin` `[POST]` — `app/api/contentengin/assets/[assetId]/export/gameengin/route.ts`
- `/api/contentengin/jobs` `[GET, POST]` — `app/api/contentengin/jobs/route.ts`
- `/api/contentengin/jobs/[jobId]` `[GET]` — `app/api/contentengin/jobs/[jobId]/route.ts`
- `/api/contentengin/upload` `[POST]` — `app/api/contentengin/upload/route.ts`
- `/api/dr-eams/hf` `[POST]` — `app/api/dr-eams/hf/route.ts`
- `/api/dr-eams/run` `[POST]` — `app/api/dr-eams/run/route.ts`
- `/api/drafts` `[GET, POST]` — `app/api/drafts/route.ts`
- `/api/drafts/[id]` `[PATCH, DELETE]` — `app/api/drafts/[id]/route.ts`
- `/api/dream-windows` `[GET, POST]` — `app/api/dream-windows/route.ts`
- `/api/dream-windows/[id]` `[GET, PATCH, DELETE]` — `app/api/dream-windows/[id]/route.ts`
- `/api/dreamengin/os-status` `[GET]` — `app/api/dreamengin/os-status/route.ts`
- `/api/dreamr/feed` `[GET]` — `app/api/dreamr/feed/route.ts`
- `/api/dreamr/suggested` `[GET]` — `app/api/dreamr/suggested/route.ts`
- `/api/dreamr/tally` `[POST]` — `app/api/dreamr/tally/route.ts`
- `/api/dreams/feed` `[GET, POST]` — `app/api/dreams/feed/route.ts`
- `/api/dreams/instances` `[GET]` — `app/api/dreams/instances/route.ts`
- `/api/dreams/transfer` `[POST]` — `app/api/dreams/transfer/route.ts`
- `/api/embed-feed` `[GET]` — `app/api/embed-feed/route.ts`
- `/api/favorites` `[GET, POST, DELETE]` — `app/api/favorites/route.ts`
- `/api/feed` `[GET]` — `app/api/feed/route.ts`
- `/api/follow` `[GET, POST, DELETE]` — `app/api/follow/route.ts`
- `/api/forge/build` `[POST]` — `app/api/forge/build/route.ts`
- `/api/gal` `[POST]` — `app/api/gal/route.ts`
- `/api/game-scores` `[GET, POST, PATCH]` — `app/api/game-scores/route.ts`
- `/api/gameengin/crash-report` `[POST]` — `app/api/gameengin/crash-report/route.ts`
- `/api/health` `[GET]` — `app/api/health/route.ts`
- `/api/home-layout` `[GET, POST]` — `app/api/home-layout/route.ts`
- `/api/journey` `[GET, POST]` — `app/api/journey/route.ts`
- `/api/lab/benchmarks` `[POST]` — `app/api/lab/benchmarks/route.ts`
- `/api/ledger-media` `[GET]` — `app/api/ledger-media/route.ts`
- `/api/likes` `[GET, POST, DELETE]` — `app/api/likes/route.ts`
- `/api/marketplace` `[GET, POST]` — `app/api/marketplace/route.ts`
- `/api/marketplace/request` `[POST]` — `app/api/marketplace/request/route.ts`
- `/api/messages` `[GET, POST]` — `app/api/messages/route.ts`
- `/api/messages/boards` `[POST]` — `app/api/messages/boards/route.ts`
- `/api/metrics` `[GET]` — `app/api/metrics/route.ts`
- `/api/metrics/platform` `[GET]` — `app/api/metrics/platform/route.ts`
- `/api/metrics/user/[userId]` `[GET]` — `app/api/metrics/user/[userId]/route.ts`
- `/api/music` `[GET, POST, DELETE]` — `app/api/music/route.ts`
- `/api/notifications` `[GET, PUT, DELETE]` — `app/api/notifications/route.ts`
- `/api/platform/errors` `[GET, POST]` — `app/api/platform/errors/route.ts`
- `/api/posts` `[GET, POST]` — `app/api/posts/route.ts`
- `/api/posts/[id]` `[DELETE]` — `app/api/posts/[id]/route.ts`
- `/api/posts/[id]/save` `[POST, DELETE]` — `app/api/posts/[id]/save/route.ts`
- `/api/posts/[id]/view` `[POST]` — `app/api/posts/[id]/view/route.ts`
- `/api/posts/profile/[userId]` `[GET]` — `app/api/posts/profile/[userId]/route.ts`
- `/api/profile` `[GET, PUT]` — `app/api/profile/route.ts`
- `/api/projects` `[GET, POST, PUT, DELETE]` — `app/api/projects/route.ts`
- `/api/scheduled-posts` `[GET, POST, PUT, DELETE]` — `app/api/scheduled-posts/route.ts`
- `/api/security/scan` `[POST]` — `app/api/security/scan/route.ts`
- `/api/settings/appearance` `[GET, POST]` — `app/api/settings/appearance/route.ts`
- `/api/settings/feed` `[GET, POST]` — `app/api/settings/feed/route.ts`
- `/api/settings/notifications` `[GET, POST]` — `app/api/settings/notifications/route.ts`
- `/api/settings/privacy` `[GET, POST]` — `app/api/settings/privacy/route.ts`
- `/api/setup/check` `[GET]` — `app/api/setup/check/route.ts`
- `/api/setup/google-oauth` `[GET]` — `app/api/setup/google-oauth/route.ts`
- `/api/shared-dream/sessions` `[GET, POST]` — `app/api/shared-dream/sessions/route.ts`
- `/api/shared-dream/sessions/[id]` `[GET, PATCH]` — `app/api/shared-dream/sessions/[id]/route.ts`
- `/api/shellhub/devices` `[GET]` — `app/api/shellhub/devices/route.ts`
- `/api/shop` `[GET, POST, PUT, DELETE]` — `app/api/shop/route.ts`
- `/api/skip-credits/balance` `[GET]` — `app/api/skip-credits/balance/route.ts`
- `/api/skip-credits/earn` `[POST]` — `app/api/skip-credits/earn/route.ts`
- `/api/skip-credits/use` `[POST]` — `app/api/skip-credits/use/route.ts`
- `/api/social/ipfs` `[GET, POST]` — `app/api/social/ipfs/route.ts`
- `/api/social/livekit/room` `[GET]` — `app/api/social/livekit/room/route.ts`
- `/api/social/livekit/token` `[POST]` — `app/api/social/livekit/token/route.ts`
- `/api/social/rss-feed` `[GET]` — `app/api/social/rss-feed/route.ts`
- `/api/upload` `[POST]` — `app/api/upload/route.ts`
- `/api/user/layout` `[GET, POST]` — `app/api/user/layout/route.ts`
- `/api/views/track` `[POST]` — `app/api/views/track/route.ts`
- `/api/widgets/feed` `[GET, POST]` — `app/api/widgets/feed/route.ts`
- `/api/widgets/instances` `[GET]` — `app/api/widgets/instances/route.ts`
- `/api/youtube/channel` `[GET]` — `app/api/youtube/channel/route.ts`
- `/api/youtube/discovery` `[GET]` — `app/api/youtube/discovery/route.ts`
- `/api/youtube/live-feed` `[GET]` — `app/api/youtube/live-feed/route.ts`
**Production Components:**
`AI_AGENTS`, `AI_ROUTES`, `AI_TRIAD`, `ALL_CANONICAL_NAMES`, `ALL_CATEGORIES`, `ALL_ENGIN_NAMES`, `AUTH_GET_USER_TIMEOUT_MS`, `AXIOMS`, `BOOGIEMAN_EVENT`, `BOOGIE_POLICY_VERSION`, +127 more
### Notable Abstractions
- `OAuthProvidersResponse` — interface in `app/api/auth/providers/route.ts`
- `ConnectorStatusEntry` — interface in `app/api/connectors/status/route.ts`
- `ContentEnginJobType` — type in `app/api/contentengin/jobs/route.ts`
- `EmbedFeedResponse` — interface in `app/api/embed-feed/route.ts`
- `UnifiedFeedEntry` — interface in `app/api/feed/route.ts`
- `YouTubeChannelResponse` — interface in `app/api/youtube/channel/route.ts`
- `YouTubeLiveFeedResponse` — interface in `app/api/youtube/live-feed/route.ts`
- `RuntimeHomeCallbacks` — interface in `coresurfaces/home/buttons/contextual-home.ts`
- `UpgradeReadinessSnapshot` — interface in `engine/admin/upgrade-readiness.ts`
- `CodeEnginHostTools` — type in `engine/agentOS/hostTools.ts`
- `GameEnginAgentRole` — type in `engine/agents/agentBus.ts`
- `InnerDreamsEventType` — type in `engine/agents/agentBus.ts`
- `useBrandingEnginBridge` — hook
- `useCodeEnginBridge` — hook
- `useContentEnginBridge` — hook
- `useDragSurface` — hook
- `useDreamLogoScene` — hook
- `useDreamWindowActions` — hook
- `useDreamsRuntime` — hook
- `useDualRuntime` — hook
### Capabilities
- Exposes hooks: useBrandingEnginBridge, useCodeEnginBridge, useContentEnginBridge, useDragSurface, useDreamLogoScene, useDreamWindowActions, +22 more
- Important contract surface: OAuthProvidersResponse, ConnectorStatusEntry, EmbedFeedResponse, UnifiedFeedEntry, YouTubeChannelResponse
- Important shared type vocabulary: ContentEnginJobType, CodeEnginHostTools, GameEnginAgentRole, InnerDreamsEventType, InnerDreamsEventDetail
- Behavior functions: getOAuthProvidersResponse, createUpgradeReadinessSnapshot, emitGameEnginAgentEvent, checkPolicy, getDrEamsMode, setDrEamsMode
- Read endpoints for data retrieval
- Write endpoints for mutations
- Delete endpoints for resource lifecycle
#### Application Source Structure
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
… (348 more application source files)
```
<details><summary>Backend, System, Core & CoreSurfaces application source index (468 files)</summary>

- `app/api/account/delete-data/route.ts` — API route transport boundary.
- `app/api/account/delete-dream/route.ts` — API route transport boundary.
- `app/api/account/export-data/route.ts` — API route transport boundary.
- `app/api/activity/track/route.ts` — API route transport boundary.
- `app/api/admin/ai-chat/route.ts` — API route transport boundary.
- `app/api/admin/ai-request/route.ts` — API route transport boundary.
- `app/api/admin/child-safety/route.ts` — API route transport boundary.
- `app/api/admin/code-files/route.ts` — API route transport boundary.
- `app/api/admin/observability/route.ts` — API route transport boundary.
- `app/api/ads/orders/route.ts` — API route transport boundary.
- `app/api/ads/view/route.ts` — API route transport boundary.
- `app/api/agent/session/route.ts` — API route transport boundary.
- `app/api/ai/boogieman/child-safety/route.ts` — API route transport boundary.
- `app/api/ai/boogieman/privacy-event/route.ts` — API route transport boundary.
- `app/api/ai/boogieman/route.ts` — API route transport boundary.
- `app/api/ai/boogieman/status/route.ts` — API route transport boundary.
- `app/api/ai/eams/route.ts` — API route transport boundary.
- `app/api/ai/execute/route.ts` — API route transport boundary.
- `app/api/ai/idari/route.ts` — API route transport boundary.
- `app/api/appeal/route.ts` — API route transport boundary.
- `app/api/auth/logout/route.ts` — API route transport boundary.
- `app/api/auth/providers/route.ts` — API route transport boundary.
- `app/api/blocks/route.ts` — API route transport boundary.
- `app/api/ci/run/route.ts` — API route transport boundary.
- `app/api/close-friends/route.ts` — API route transport boundary.
- `app/api/codeengin/diagnostics/route.ts` — API route transport boundary.
- `app/api/codeengin/file/route.ts` — API route transport boundary.
- `app/api/codeengin/git/route.ts` — API route transport boundary.
- `app/api/codeengin/run/route.ts` — API route transport boundary.
- `app/api/codeengin/search/route.ts` — API route transport boundary.
- `app/api/codeengin/upload/route.ts` — API route transport boundary.
- `app/api/codeengin/workspace/route.ts` — API route transport boundary.
- `app/api/comments/route.ts` — API route transport boundary.
- `app/api/connectors/[provider]/connect/route.ts` — API route transport boundary.
- `app/api/connectors/[provider]/disconnect/route.ts` — API route transport boundary.
- `app/api/connectors/[provider]/items/route.ts` — API route transport boundary.
- `app/api/connectors/[provider]/sync/route.ts` — API route transport boundary.
- `app/api/connectors/[provider]/verify/route.ts` — API route transport boundary.
- `app/api/connectors/cron/route.ts` — API route transport boundary.
- `app/api/connectors/instagram/oauth/callback/route.ts` — API route transport boundary.
- `app/api/connectors/instagram/oauth/start/route.ts` — API route transport boundary.
- `app/api/connectors/status/route.ts` — API route transport boundary.
- `app/api/connectors/webhooks/[provider]/route.ts` — API route transport boundary.
- `app/api/connectors/youtube/oauth/callback/route.ts` — API route transport boundary.
- `app/api/connectors/youtube/oauth/start/route.ts` — API route transport boundary.
- `app/api/content/generative-fill/route.ts` — API route transport boundary.
- `app/api/content/intelligence/route.ts` — API route transport boundary.
- `app/api/content/transcribe/route.ts` — API route transport boundary.
- `app/api/content/voice-clone/route.ts` — API route transport boundary.
- `app/api/contentengin/assets/[assetId]/export/gameengin/route.ts` — API route transport boundary.
- `app/api/contentengin/assets/[assetId]/route.ts` — API route transport boundary.
- `app/api/contentengin/jobs/[jobId]/route.ts` — API route transport boundary.
- `app/api/contentengin/jobs/route.ts` — API route transport boundary.
- `app/api/contentengin/upload/route.ts` — API route transport boundary.
- `app/api/dr-eams/hf/route.ts` — API route transport boundary.
- `app/api/dr-eams/run/route.ts` — API route transport boundary.
- `app/api/drafts/[id]/route.ts` — API route transport boundary.
- `app/api/drafts/route.ts` — API route transport boundary.
- `app/api/dream-windows/[id]/route.ts` — API route transport boundary.
- `app/api/dream-windows/route.ts` — API route transport boundary.
- `app/api/dreamengin/os-status/route.ts` — API route transport boundary.
- `app/api/dreamr/feed/route.ts` — API route transport boundary.
- `app/api/dreamr/suggested/route.ts` — API route transport boundary.
- `app/api/dreamr/tally/route.ts` — API route transport boundary.
- `app/api/dreams/feed/route.ts` — API route transport boundary.
- `app/api/dreams/instances/route.ts` — API route transport boundary.
- `app/api/dreams/transfer/route.ts` — API route transport boundary.
- `app/api/embed-feed/route.ts` — API route transport boundary.
- `app/api/favorites/route.ts` — API route transport boundary.
- `app/api/feed/route.ts` — API route transport boundary.
- `app/api/follow/route.ts` — API route transport boundary.
- `app/api/forge/build/route.ts` — API route transport boundary.
- `app/api/gal/route.ts` — API route transport boundary.
- `app/api/game-scores/route.ts` — API route transport boundary.
- `app/api/gameengin/crash-report/route.ts` — API route transport boundary.
- `app/api/health/route.ts` — API route transport boundary.
- `app/api/home-layout/route.ts` — API route transport boundary.
- `app/api/journey/route.ts` — API route transport boundary.
- `app/api/lab/benchmarks/route.ts` — API route transport boundary.
- `app/api/ledger-media/route.ts` — API route transport boundary.
- `app/api/likes/route.ts` — API route transport boundary.
- `app/api/marketplace/request/route.ts` — API route transport boundary.
- `app/api/marketplace/route.ts` — API route transport boundary.
- `app/api/messages/boards/route.ts` — API route transport boundary.
- `app/api/messages/route.ts` — API route transport boundary.
- `app/api/metrics/platform/route.ts` — API route transport boundary.
- `app/api/metrics/route.ts` — API route transport boundary.
- `app/api/metrics/user/[userId]/route.ts` — API route transport boundary.
- `app/api/music/route.ts` — API route transport boundary.
- `app/api/notifications/route.ts` — API route transport boundary.
- `app/api/platform/errors/route.ts` — API route transport boundary.
- `app/api/posts/[id]/route.ts` — API route transport boundary.
- `app/api/posts/[id]/save/route.ts` — API route transport boundary.
- `app/api/posts/[id]/view/route.ts` — API route transport boundary.
- `app/api/posts/profile/[userId]/route.ts` — API route transport boundary.
- `app/api/posts/route.ts` — API route transport boundary.
- `app/api/profile/route.ts` — API route transport boundary.
- `app/api/projects/route.ts` — API route transport boundary.
- `app/api/scheduled-posts/route.ts` — API route transport boundary.
- `app/api/security/scan/route.ts` — API route transport boundary.
- `app/api/settings/appearance/route.ts` — API route transport boundary.
- `app/api/settings/feed/route.ts` — API route transport boundary.
- `app/api/settings/notifications/route.ts` — API route transport boundary.
- `app/api/settings/privacy/route.ts` — API route transport boundary.
- `app/api/setup/check/route.ts` — API route transport boundary.
- `app/api/setup/google-oauth/route.ts` — API route transport boundary.
- `app/api/shared-dream/sessions/[id]/route.ts` — API route transport boundary.
- `app/api/shared-dream/sessions/route.ts` — API route transport boundary.
- `app/api/shellhub/devices/route.ts` — API route transport boundary.
- `app/api/shop/route.ts` — API route transport boundary.
- `app/api/skip-credits/balance/route.ts` — API route transport boundary.
- `app/api/skip-credits/earn/route.ts` — API route transport boundary.
- `app/api/skip-credits/use/route.ts` — API route transport boundary.
- `app/api/social/ipfs/route.ts` — API route transport boundary.
- `app/api/social/livekit/room/route.ts` — API route transport boundary.
- `app/api/social/livekit/token/route.ts` — API route transport boundary.
- `app/api/social/rss-feed/route.ts` — API route transport boundary.
- `app/api/upload/route.ts` — API route transport boundary.
- `app/api/user/layout/route.ts` — API route transport boundary.
- `app/api/views/track/route.ts` — API route transport boundary.
- `app/api/widgets/feed/route.ts` — API route transport boundary.
- `app/api/widgets/instances/route.ts` — API route transport boundary.
- `app/api/youtube/channel/route.ts` — API route transport boundary.
- `app/api/youtube/discovery/route.ts` — API route transport boundary.
- `app/api/youtube/live-feed/route.ts` — API route transport boundary.
- `coresurfaces/dreamsurface.EditProfileDream.tsx` — React application module.
- `coresurfaces/dreamsurface.ViewProfile.tsx` — React application module.
- `coresurfaces/home/buttons/button-groups.ts` — TypeScript/JavaScript application module.
- `coresurfaces/home/buttons/contextual-home.ts` — TypeScript/JavaScript application module.
- `engine/activeModulesStore.ts` — TypeScript/JavaScript application module.
- `engine/admin/lockout.ts` — TypeScript/JavaScript application module.
- `engine/admin/upgrade-readiness.ts` — TypeScript/JavaScript application module.
- `engine/agentOS.ts` — TypeScript/JavaScript application module.
- `engine/agentOS/hostTools.ts` — TypeScript/JavaScript application module.
- `engine/agents/adari.ts` — TypeScript/JavaScript application module.
- `engine/agents/agentBus.ts` — TypeScript/JavaScript application module.
- `engine/agents/boogieManAI.ts` — TypeScript/JavaScript application module.
- `engine/agents/drEamsMode.ts` — TypeScript/JavaScript application module.
- `engine/agents/dreamengin.ts` — TypeScript/JavaScript application module.
- `engine/agents/idari.ts` — TypeScript/JavaScript application module.
- `engine/agents/idariLoop.ts` — TypeScript/JavaScript application module.
- `engine/agents/teachBus.ts` — TypeScript/JavaScript application module.
- `engine/agents/uiActions.ts` — TypeScript/JavaScript application module.
- `engine/animation/gsap/gsap.ts` — TypeScript/JavaScript application module.
- `engine/animation/gsap/useGsapEntrance.ts` — TypeScript/JavaScript application module.
- `engine/animation/gsap/useGsapFlip.ts` — TypeScript/JavaScript application module.
- `engine/animation/gsap/useGsapScrollReveal.ts` — TypeScript/JavaScript application module.
- `engine/api/route.ts` — API route transport boundary.
- `engine/artifacts/artifactStore.ts` — TypeScript/JavaScript application module.
- `engine/assets/engineAssets.ts` — TypeScript/JavaScript application module.
- `engine/collaboration/index.ts` — TypeScript/JavaScript application module.
- `engine/connectors/connectorRegistry.ts` — TypeScript/JavaScript application module.
- `engine/connectors/deliveryStrategy.ts` — TypeScript/JavaScript application module.
- `engine/connectors/installFlow.ts` — TypeScript/JavaScript application module.
- `engine/connectors/normalise.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/bluesky.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/devto.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/facebook.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/github.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/hackernews.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/instagram.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/mastodon.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/medium.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/nostr.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/pinterest.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/podcast.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/reddit.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/shellhub.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/substack.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/tiktok.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/tumblr.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/twitter.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/youtube.ts` — TypeScript/JavaScript application module.
- `engine/connectors/reconcile.ts` — TypeScript/JavaScript application module.
- `engine/connectors/syncDispatch.ts` — TypeScript/JavaScript application module.
- `engine/connectors/webhookVerification.ts` — TypeScript/JavaScript application module.
- `engine/connectors/youtube.ts` — TypeScript/JavaScript application module.
- `engine/consent/consentManager.ts` — TypeScript/JavaScript application module.
- `engine/data-transform.ts` — TypeScript/JavaScript application module.
- `engine/dev-bypass.ts` — TypeScript/JavaScript application module.
- `engine/dream-window/DreamWindowLifecycle.ts` — TypeScript/JavaScript application module.
- `engine/dream-window/connectionVerbs.ts` — TypeScript/JavaScript application module.
- `engine/dream-window/enginConnectionNetwork.ts` — TypeScript/JavaScript application module.
- `engine/dream-window/index.ts` — TypeScript/JavaScript application module.
- `engine/dream-window/runtimeRegion.ts` — TypeScript/JavaScript application module.
- `engine/dream-window/useDreamWindowActions.ts` — TypeScript/JavaScript application module.
- `engine/dreamnav/delta.ts` — TypeScript/JavaScript application module.
- `engine/dreamnav/gctAssist.ts` — TypeScript/JavaScript application module.
- `engine/dreamnav/gestures6.ts` — TypeScript/JavaScript application module.
- `engine/dreamnav/path.ts` — TypeScript/JavaScript application module.
- `engine/dreamnav/tau.ts` — TypeScript/JavaScript application module.
- `engine/dreams/DreamRegistry.tsx` — React application module.
- `engine/dreams/drag.ts` — TypeScript/JavaScript application module.
- `engine/dreams/dreamIntentBus.ts` — TypeScript/JavaScript application module.
- `engine/dreams/profileProjection.ts` — TypeScript/JavaScript application module.
- `engine/dreams/types.ts` — TypeScript/JavaScript application module.
- `engine/dreams/useDreamsRuntime.ts` — TypeScript/JavaScript application module.
- `engine/editor/universalEditor.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginBaseState.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginCapabilities.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginCapabilityExecution.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginCapabilityScorecard.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginCapabilityTargets.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginDomainCores.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginEventBus.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginHardwareCapabilities.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginIOAdapter.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginPerformanceProbe.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginRuleSetContract.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginRuntime.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginRuntimeRegistry.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginSnapshotFingerprint.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/HotRuntime.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/InternalMetrics.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/PremiumRuntimeQuality.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/index.ts` — TypeScript/JavaScript application module.
- `engine/events/event-bus/index.ts` — TypeScript/JavaScript application module.
- `engine/events/eventBus.ts` — TypeScript/JavaScript application module.
- `engine/feature-build/buildCycle.ts` — TypeScript/JavaScript application module.
- `engine/feature-build/featureManifest.ts` — TypeScript/JavaScript application module.
- `engine/feature-build/index.ts` — TypeScript/JavaScript application module.
- `engine/feature-build/uiQualityCriteria.ts` — TypeScript/JavaScript application module.
- `engine/gct/anomaly-detection.ts` — TypeScript/JavaScript application module.
- `engine/gct/audio-fingerprint.ts` — TypeScript/JavaScript application module.
- `engine/gct/gct-engine.ts` — TypeScript/JavaScript application module.
- `engine/gct/image-search.ts` — TypeScript/JavaScript application module.
- `engine/gct/index.ts` — TypeScript/JavaScript application module.
- `engine/gct/recommendations.ts` — TypeScript/JavaScript application module.
- `engine/generationLaw.ts` — TypeScript/JavaScript application module.
- `engine/gestures/touchGestures.ts` — TypeScript/JavaScript application module.
- `engine/gestures/useTouchGestures.ts` — TypeScript/JavaScript application module.
- `engine/identity/canonical-names.ts` — TypeScript/JavaScript application module.
- `engine/index.ts` — TypeScript/JavaScript application module.
- `engine/intelligence/continuityHelpers.ts` — TypeScript/JavaScript application module.
- `engine/intelligence/sessionContinuity.ts` — TypeScript/JavaScript application module.
- `engine/intelligence/sessionPatternEngine.ts` — TypeScript/JavaScript application module.
- `engine/intelligence/useSessionIntelligence.ts` — TypeScript/JavaScript application module.
- `engine/io.ts` — TypeScript/JavaScript application module.
- `engine/journey/journeyDots.ts` — TypeScript/JavaScript application module.
- `engine/journey/journeyInsights.ts` — TypeScript/JavaScript application module.
- `engine/journey/withJourney.ts` — TypeScript/JavaScript application module.
- `engine/ledger/ledger-data.ts` — TypeScript/JavaScript application module.
- `engine/ledger/ledger.ts` — TypeScript/JavaScript application module.
- `engine/manifests/osSubsystemManifest.ts` — TypeScript/JavaScript application module.
- `engine/marketplace/listings.ts` — TypeScript/JavaScript application module.
- `engine/marketplace/request.ts` — TypeScript/JavaScript application module.
- `engine/navigation/AnchorStateBuffer.ts` — TypeScript/JavaScript application module.
- `engine/navigation/AnchorWidgetStorage.ts` — TypeScript/JavaScript application module.
- `engine/navigation/GestureFrameComputer.ts` — TypeScript/JavaScript application module.
- `engine/navigation/GestureIntentResolver.ts` — TypeScript/JavaScript application module.
- `engine/navigation/NavStateBuffer.ts` — TypeScript/JavaScript application module.
- `engine/navigation/PointerEventCapture.ts` — TypeScript/JavaScript application module.
- `engine/navigation/ReturnStack.ts` — TypeScript/JavaScript application module.
- `engine/navigation/SpatialNavigationEngine.ts` — TypeScript/JavaScript application module.
- `engine/navigation/StructureLedger.ts` — TypeScript/JavaScript application module.
- `engine/navigation/TransformSolver.ts` — TypeScript/JavaScript application module.
- `engine/navigation/WidgetInstanceMemory.ts` — TypeScript/JavaScript application module.
- `engine/navigation/anchorField.ts` — TypeScript/JavaScript application module.
- `engine/navigation/dream-state.ts` — TypeScript/JavaScript application module.
- `engine/navigation/index.ts` — TypeScript/JavaScript application module.
- `engine/navigation/manifold.ts` — TypeScript/JavaScript application module.
- `engine/navigation/physics.ts` — TypeScript/JavaScript application module.
- `engine/navigation/quaternion.ts` — TypeScript/JavaScript application module.
- `engine/navigation/useNavigation.ts` — TypeScript/JavaScript application module.
- `engine/observability/collector.ts` — TypeScript/JavaScript application module.
- `engine/observability/correlator.ts` — TypeScript/JavaScript application module.
- `engine/observability/healthTrend.ts` — TypeScript/JavaScript application module.
- `engine/observability/immediateAction.ts` — TypeScript/JavaScript application module.
- `engine/observability/index.ts` — TypeScript/JavaScript application module.
- `engine/observability/otel.ts` — TypeScript/JavaScript application module.
- `engine/observability/otelBridge.ts` — TypeScript/JavaScript application module.
- `engine/observability/rootCauseAnalyzer.ts` — TypeScript/JavaScript application module.
- `engine/offline/offlineCache.ts` — TypeScript/JavaScript application module.
- `engine/offline/useOfflineSync.ts` — TypeScript/JavaScript application module.
- `engine/os/OSContext.tsx` — React application module.
- `engine/os/index.ts` — TypeScript/JavaScript application module.
- `engine/platform/index.ts` — TypeScript/JavaScript application module.
- `engine/platform/lab.ts` — TypeScript/JavaScript application module.
- `engine/policy/boogiePolicy.ts` — TypeScript/JavaScript application module.
- `engine/reality/realityStore.ts` — TypeScript/JavaScript application module.
- `engine/reality/types.ts` — TypeScript/JavaScript application module.
- `engine/rendering/babylon/createEngine.ts` — TypeScript/JavaScript application module.
- `engine/rendering/babylon/dreamengine-hybrid.ts` — TypeScript/JavaScript application module.
- `engine/rendering/babylon/useDreamLogoScene.ts` — TypeScript/JavaScript application module.
- `engine/rendering/god-tier/godTierEngine.ts` — TypeScript/JavaScript application module.
- `engine/rendering/god-tier/useGodTier.ts` — TypeScript/JavaScript application module.
- `engine/rendering/renderer/Canvas2DRenderer.ts` — TypeScript/JavaScript application module.
- `engine/rendering/renderer/FrustumCuller.ts` — TypeScript/JavaScript application module.
- `engine/rendering/renderer/IRenderer.ts` — TypeScript/JavaScript application module.
- `engine/rendering/renderer/index.ts` — TypeScript/JavaScript application module.
- `engine/rendering/warp/useWarp.ts` — TypeScript/JavaScript application module.
- `engine/rendering/warp/warpEngine.ts` — TypeScript/JavaScript application module.
- `engine/rendering/webgpu.ts` — TypeScript/JavaScript application module.
- `engine/rendering/webgpu/adaptiveQuality.ts` — TypeScript/JavaScript application module.
- `engine/rendering/webgpu/director.ts` — TypeScript/JavaScript application module.
- `engine/rendering/webgpu/useWebGPUDirector.ts` — TypeScript/JavaScript application module.
- `engine/routing/surfaces.ts` — TypeScript/JavaScript application module.
- `engine/runtime/EnginDispatcher.ts` — TypeScript/JavaScript application module.
- `engine/runtime/apperception.ts` — TypeScript/JavaScript application module.
- `engine/runtime/channelMetrics.ts` — TypeScript/JavaScript application module.
- `engine/runtime/coercionTable.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamOSBus.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamsurface/dreamsurface.bridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamsurface/dreamsurface.delta.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamsurface/index.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dropTargetRegistry.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dualRuntime.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dualRuntimeBridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.auth.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.eventbus.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.ledger.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.renderloop.ts` — TypeScript/JavaScript application module.
- `engine/runtime/enginWorkflowRegistry.ts` — TypeScript/JavaScript application module.
- `engine/runtime/iEngine.ts` — TypeScript/JavaScript application module.
- `engine/runtime/index.ts` — TypeScript/JavaScript application module.
- `engine/runtime/instanceManager.ts` — TypeScript/JavaScript application module.
- `engine/runtime/isAuthRelatedError.ts` — TypeScript/JavaScript application module.
- `engine/runtime/madMaxiSnapshotBridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/memory.ts` — TypeScript/JavaScript application module.
- `engine/runtime/moduleRegistry.ts` — TypeScript/JavaScript application module.
- `engine/runtime/offlineQueue.ts` — TypeScript/JavaScript application module.
- `engine/runtime/quantumCircuit.ts` — TypeScript/JavaScript application module.
- `engine/runtime/runtimeChannel.ts` — TypeScript/JavaScript application module.
- `engine/runtime/runtimeContainer.ts` — TypeScript/JavaScript application module.
- `engine/runtime/seamClipboard.ts` — TypeScript/JavaScript application module.
- `engine/runtime/sharedResourcePool.ts` — TypeScript/JavaScript application module.
- `engine/runtime/snapshotFingerprint.ts` — TypeScript/JavaScript application module.
- `engine/runtime/superciliousPlatformRuntime.ts` — TypeScript/JavaScript application module.
- `engine/runtime/swapManager.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useDragSurface.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useDualRuntime.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useDualRuntimePersistence.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useEnginBridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useEnginCoopSync.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useSharedEnginChannel.ts` — TypeScript/JavaScript application module.
- `engine/safety/child-safety/childSafetyDetector.ts` — TypeScript/JavaScript application module.
- `engine/safety/child-safety/imageClassifier.ts` — TypeScript/JavaScript application module.
- `engine/safety/child-safety/messageContextChecker.ts` — TypeScript/JavaScript application module.
- `engine/safety/child-safety/ncmecReporter.ts` — TypeScript/JavaScript application module.
- `engine/safety/child-safety/scanMediaUrls.ts` — TypeScript/JavaScript application module.
- `engine/scene/sceneState.ts` — TypeScript/JavaScript application module.
- `engine/setup/checks.ts` — TypeScript/JavaScript application module.
- `engine/sharedDream.ts` — TypeScript/JavaScript application module.
- `engine/sharedDream/useSharedDreamSession.ts` — TypeScript/JavaScript application module.
- `engine/shop/listings.ts` — TypeScript/JavaScript application module.
- `engine/slog.ts` — TypeScript/JavaScript application module.
- `engine/social/crossPost.ts` — TypeScript/JavaScript application module.
- `engine/social/livekit.ts` — TypeScript/JavaScript application module.
- `engine/social/normalizers.ts` — TypeScript/JavaScript application module.
- `engine/social/platforms.ts` — TypeScript/JavaScript application module.
- `engine/social/rss-feed.ts` — TypeScript/JavaScript application module.
- `engine/social/useSocialData.ts` — TypeScript/JavaScript application module.
- `engine/user-sim/userSimAgent.ts` — TypeScript/JavaScript application module.
- `engine/vm/bufferManager.ts` — TypeScript/JavaScript application module.
- `engine/vm/bus-events.ts` — TypeScript/JavaScript application module.
- `engine/vm/dual-runtime.ts` — TypeScript/JavaScript application module.
- `engine/vm/dualVMCoordinator.ts` — TypeScript/JavaScript application module.
- `engine/vm/index.ts` — TypeScript/JavaScript application module.
- `engine/vm/inter-vm-messaging.ts` — TypeScript/JavaScript application module.
- `engine/vm/pipelineCache.ts` — TypeScript/JavaScript application module.
- `engine/vm/resource-quota.ts` — TypeScript/JavaScript application module.
- `engine/vm/security.ts` — TypeScript/JavaScript application module.
- `engine/vm/snapshot.ts` — TypeScript/JavaScript application module.
- `engine/vm/types.ts` — TypeScript/JavaScript application module.
- `engine/vm/wasm-features.ts` — TypeScript/JavaScript application module.
- `engine/vm/wasmGpuVM.ts` — TypeScript/JavaScript application module.
- `engine/web3/client.ts` — TypeScript/JavaScript application module.
- `engine/web3/engagement.ts` — TypeScript/JavaScript application module.
- `engine/web3/index.ts` — TypeScript/JavaScript application module.
- `engine/web3/ipfs.ts` — TypeScript/JavaScript application module.
- `engine/web3/types.ts` — TypeScript/JavaScript application module.
- `engine/widgets/CrossWidgetPosting.ts` — TypeScript/JavaScript application module.
- `engine/widgets/WidgetBus.ts` — TypeScript/JavaScript application module.
- `engine/widgets/WidgetEngine.tsx` — React application module.
- `engine/widgets/WidgetEventBus.ts` — TypeScript/JavaScript application module.
- `engine/widgets/WidgetLinkGraph.ts` — TypeScript/JavaScript application module.
- `engine/widgets/feed-resolver.ts` — TypeScript/JavaScript application module.
- `engine/widgets/parse.ts` — TypeScript/JavaScript application module.
- `engine/widgets/parseConfig.ts` — TypeScript/JavaScript application module.
- `engine/widgets/useWidget.ts` — TypeScript/JavaScript application module.
- `engine/widgets/widgetRegistry.ts` — TypeScript/JavaScript application module.
- `supabase/auth/nextRedirect.ts` — TypeScript/JavaScript application module.
- `supabase/client/client.ts` — TypeScript/JavaScript application module.
- `supabase/client/safeGetUser.ts` — TypeScript/JavaScript application module.
- `supabase/config.ts` — TypeScript/JavaScript application module.
- `supabase/migrations/20240120000000_initial_schema.sql` — SQL schema/persistence source.
- `supabase/migrations/20240120000001_enable_rls.sql` — SQL schema/persistence source.
- `supabase/migrations/20260129000000_upgrade_schema.sql` — SQL schema/persistence source.
- `supabase/migrations/20260210000000_widget_system_v2.sql` — SQL schema/persistence source.
- `supabase/migrations/20260210000001_ai_system_v2026.sql` — SQL schema/persistence source.
- `supabase/migrations/20260210_ai_core.sql` — SQL schema/persistence source.
- `supabase/migrations/20260214000000_security_axioms.sql` — SQL schema/persistence source.
- `supabase/migrations/20260226000000_admin_lock.sql` — SQL schema/persistence source.
- `supabase/migrations/20260305000000_create_notes.sql` — SQL schema/persistence source.
- `supabase/migrations/20260305000001_comments.sql` — SQL schema/persistence source.
- `supabase/migrations/20260305000002_leaderboard.sql` — SQL schema/persistence source.
- `supabase/migrations/20260307000000_readme_gaps.sql` — SQL schema/persistence source.
- `supabase/migrations/20260307000001_conversations_messages.sql` — SQL schema/persistence source.
- `supabase/migrations/20260310000000_widget_instances_visibility.sql` — SQL schema/persistence source.
- `supabase/migrations/20260310000001_profiles_widget_config.sql` — SQL schema/persistence source.
- `supabase/migrations/20260310000002_profile_dream_widgets.sql` — SQL schema/persistence source.
- `supabase/migrations/20260310000003_connector_accounts.sql` — SQL schema/persistence source.
- `supabase/migrations/20260310000004_feed_items.sql` — SQL schema/persistence source.
- `supabase/migrations/20260310000010_dreamdm_bar_pass2.sql` — SQL schema/persistence source.
- `supabase/migrations/20260315000000_content_drafts.sql` — SQL schema/persistence source.
- `supabase/migrations/20260316000000_visibility_mappings.sql` — SQL schema/persistence source.
- `supabase/migrations/20260319000000_journey_dots.sql` — SQL schema/persistence source.
- `supabase/migrations/20260319065444_new-migration.sql` — SQL schema/persistence source.
- `supabase/migrations/20260319120000_connector_accounts_schema_reload.sql` — SQL schema/persistence source.
- `supabase/migrations/20260320000000_scheduled_posts.sql` — SQL schema/persistence source.
- `supabase/migrations/20260320100000_game_scores_all_games.sql` — SQL schema/persistence source.
- `supabase/migrations/20260320110000_user_blocks.sql` — SQL schema/persistence source.
- `supabase/migrations/20260321000000_ads_platform_promotions.sql` — SQL schema/persistence source.
- `supabase/migrations/20260321200000_phase8a_feed_and_layout.sql` — SQL schema/persistence source.
- `supabase/migrations/20260322000000_phase8b_dream_windows.sql` — SQL schema/persistence source.
- `supabase/migrations/20260322000000_policy_events.sql` — SQL schema/persistence source.
- `supabase/migrations/20260322000001_message_boards.sql` — SQL schema/persistence source.
- `supabase/migrations/20260323100000_embed_feed_items.sql` — SQL schema/persistence source.
- `supabase/migrations/20260324000000_phase8e_orders.sql` — SQL schema/persistence source.
- `supabase/migrations/20260324000001_phase8e_shop_marketplace.sql` — SQL schema/persistence source.
- `supabase/migrations/20260325000000_phase8f_daydream_network.sql` — SQL schema/persistence source.
- `supabase/migrations/20260325100000_child_safety.sql` — SQL schema/persistence source.
- `supabase/migrations/20260401000001_platform_utilities.sql` — SQL schema/persistence source.
- `supabase/migrations/20260402000001_control_mappings.sql` — SQL schema/persistence source.
- `supabase/migrations/20260402000002_game_assets.sql` — SQL schema/persistence source.
- `supabase/migrations/20260403000001_pgvector_embeddings.sql` — SQL schema/persistence source.
- `supabase/migrations/20260403000002_pgvector_search_rpc.sql` — SQL schema/persistence source.
- `supabase/migrations/20260405000001_dreamr_feed_registry.sql` — SQL schema/persistence source.
- `supabase/migrations/20260405042406_auto_scaffold.sql` — SQL schema/persistence source.
- `supabase/migrations/20260413000000_phase9_activity_first_protocol.sql` — SQL schema/persistence source.
- `supabase/migrations/20260417000000_repurpose_nods_as_dream_docs.sql` — SQL schema/persistence source.
- `supabase/migrations/20260417000001_dream_docs_search_rpc.sql` — SQL schema/persistence source.
- `supabase/migrations/20260418000000_gameengin_core.sql` — SQL schema/persistence source.
- `supabase/migrations/20260420000001_consent_settings_audit.sql` — SQL schema/persistence source.
- `supabase/migrations/20260426000000_activity_coop_gameengin_completion.sql` — SQL schema/persistence source.
- `supabase/migrations/20260426000100_rename_widgets_to_dreams.sql` — SQL schema/persistence source.
- `supabase/migrations/20260426000200_build_memory_schema_gaps.sql` — SQL schema/persistence source.
- `supabase/migrations/20260516000000_agent_sessions_forge_rate_limits.sql` — SQL schema/persistence source.
- `supabase/migrations/20260516000100_dreamr_tally.sql` — SQL schema/persistence source.
- `supabase/migrations/20260516000300_shared_dream_sessions.sql` — SQL schema/persistence source.
- `supabase/migrations/20260605015234_auto_scaffold.sql` — SQL schema/persistence source.
- `supabase/migrations/20260619000000_renderengin_assets_rls.sql` — SQL schema/persistence source.
- `supabase/migrations/20260619034000_connector_feed_items.sql` — SQL schema/persistence source.
- `supabase/migrations/20260619034100_profile_optional_fields.sql` — SQL schema/persistence source.
- `supabase/migrations/20260619034200_saved_posts.sql` — SQL schema/persistence source.
- `supabase/realtime.ts` — TypeScript/JavaScript application module.
- `supabase/schema-final.sql` — SQL schema/persistence source.
- `supabase/seed.sql` — SQL schema/persistence source.
- `supabase/server/serverClient.ts` — TypeScript/JavaScript application module.
- `supabase/vector.ts` — TypeScript/JavaScript application module.
- `types/ads.ts` — TypeScript/JavaScript application module.
- `types/ai-system.ts` — TypeScript/JavaScript application module.
- `types/ai.ts` — TypeScript/JavaScript application module.
- `types/ccc.ts` — TypeScript/JavaScript application module.
- `types/connector.ts` — TypeScript/JavaScript application module.
- `types/dream-window.ts` — TypeScript/JavaScript application module.
- `types/dreamArtifact.ts` — TypeScript/JavaScript application module.
- `types/experience.ts` — TypeScript/JavaScript application module.
- `types/journey.ts` — TypeScript/JavaScript application module.
- `types/marketplace.ts` — TypeScript/JavaScript application module.
- `types/module-manifest.ts` — TypeScript/JavaScript application module.
- `types/spatial.ts` — TypeScript/JavaScript application module.
- `types/supabase.ts` — TypeScript/JavaScript application module.
- `types/user-sim.ts` — TypeScript/JavaScript application module.
- `types/widget-system-v2.ts` — TypeScript/JavaScript application module.
- `types/widgetConfigs.ts` — TypeScript/JavaScript application module.
- `types/widgets.ts` — TypeScript/JavaScript application module.
- `utils/supabase/server.ts` — TypeScript/JavaScript application module.

</details>

## App
App is a full-stack application subsystem with React surfaces and API transport boundaries. Primary route surfaces: /about, /ads, /ads/create, …. It depends on Ads & User Ads, Backend, System, Core & CoreSurfaces, Connectors & Live Feeds.
### Responsibilities
- User-facing surfaces: /about, /ads, /ads/create, /ads/slot/[id], /auth/reset-password, +107 more
- API transport boundaries: /api/account, /api/activity, /api/admin, /api/ads, …
- Renders production surfaces/components: AdminPage, PlatformErrorsPage, PlatformHealthPage, AboutPage, CreateAdSlotPage, AdsPage, +284 more
- Runtime orchestration, capability routing, and Engin lifecycle coordination
- AI provider integration and inference routing
- Authentication, sessions, authorization, and access control
- Messaging, conversations, notifications, realtime channels, or presence
- Feed, post, comment, ranking, or social interaction behavior
- Asset storage, upload, export, or CDN-facing pipelines
- Theming, design tokens, visual customization, or settings surfaces
- GameEngin cartridge/runtime interaction or playable system behavior
- ContentEngin asset creation, validation, rigging, animation, or export behavior
### Key Modules
- app/api/contentengin/jobs/route.ts — ContentEnginJobType (important path; behavior evidence; API boundary)
- app/api/youtube/channel/route.ts — YouTubeChannelResponse (important path; behavior evidence; API boundary)
- app/api/youtube/live-feed/route.ts — YouTubeLiveFeedResponse (important path; behavior evidence; API boundary)
- app/daydream/code/page.tsx — CodeDaydreamPage (important path; behavior evidence; route surface)
- app/daydream/forge/page.tsx — ForgeDaydreamPage (important path; behavior evidence; route surface)
- app/daydream/games/page.tsx — GamesDaydreamPage (important path; behavior evidence; route surface)
- app/daydream/lab/page.tsx — LabDaydreamPage (important path; behavior evidence; route surface)
- app/view-profile/page.tsx — ViewProfilePage (important path; behavior evidence; route surface)
- app/api/auth/providers/route.ts — getOAuthProvidersResponse, OAuthProvidersResponse, UNKNOWN_OAUTH_PROVIDERS (behavior evidence; API boundary; important exports: getOAuthProvidersResponse, OAuthProvidersResponse, UNKNOWN_OAUTH_PROVIDERS)
- app/api/messages/route.ts (important path; behavior evidence; API boundary)
- app/daydream/brand/engin/page.tsx — BrandEnginRedirectPage (important path; behavior evidence; route surface)
- app/daydream/brand/page.tsx — BrandDaydreamPage (important path; behavior evidence; route surface)
### Architectural Relationships
- Depends on **Ads & User Ads**
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Connectors & Live Feeds**
- Depends on **Dreamr — Human Media**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **DreamSpace**
- Depends on **HomeDream**
- Depends on **Messaging**
- Depends on **Settings & Customization**
- Depends on **Shared Dreams**
- Depends on **The Engins**
- Depends on **The Marketplace**
- Depends on **The Shop**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Participates in the Shared Dreams pub/sub channel system
- Consumes backend, engine, Supabase, or core system services
- Depends on Ads & User Ads
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Connectors & Live Feeds
- Depends on Dreamr — Human Media
### Public Surfaces
**Routes:**
- `/about` — `app/about/page.tsx`
- `/ads` — `app/ads/page.tsx`
- `/ads/create` — `app/ads/create/page.tsx`
- `/ads/slot/[id]` — `app/ads/slot/[id]/page.tsx`
- `/auth/reset-password` — `app/auth/reset-password/page.tsx`
- `/auth/update-password` — `app/auth/update-password/page.tsx`
- `/connectors` — `app/connectors/page.tsx`
- `/daydream/brand` — `app/daydream/brand/page.tsx`
- `/daydream/brand/engin` — `app/daydream/brand/engin/page.tsx`
- `/daydream/code` — `app/daydream/code/page.tsx`
- `/daydream/code/engin` — `app/daydream/code/engin/page.tsx`
- `/daydream/constellation` — `app/daydream/constellation/page.tsx`
- `/daydream/create` — `app/daydream/create/page.tsx`
- `/daydream/create/engin` — `app/daydream/create/engin/page.tsx`
- `/daydream/forge` — `app/daydream/forge/page.tsx`
- `/daydream/game` — `app/daydream/game/page.tsx`
- `/daydream/games` — `app/daydream/games/page.tsx`
- `/daydream/games/engin` — `app/daydream/games/engin/page.tsx`
- `/daydream/lab` — `app/daydream/lab/page.tsx`
- `/daydream/lab/engin` — `app/daydream/lab/engin/page.tsx`
- `/daydream/lab/portfolio` — `app/daydream/lab/portfolio/page.tsx`
- `/daydream/media-vault` — `app/daydream/media-vault/page.tsx`
- `/daydream/music` — `app/daydream/music/page.tsx`
- `/daydream/music/engin` — `app/daydream/music/engin/page.tsx`
- `/daydream/music/upload` — `app/daydream/music/upload/page.tsx`
- `/daydream/play` — `app/daydream/play/page.tsx`
- `/daydream/render` — `app/daydream/render/page.tsx`
- `/discover` — `app/discover/page.tsx`
- `/dream-effects` — `app/dream-effects/page.tsx`
- `/dreamdmbar` — `app/dreamdmbar/page.tsx`
- `/dreamdmbar/dreamspace` — `app/dreamdmbar/dreamspace/page.tsx`
- `/dreamdmbar/dualruntime` — `app/dreamdmbar/dualruntime/page.tsx`
- `/dreamdmbar/homedream` — `app/dreamdmbar/homedream/page.tsx`
- `/dreamr` — `app/dreamr/page.tsx`
- `/dreamspace` — `app/dreamspace/page.tsx`
- `/edit-profiledream` — `app/edit-profiledream/page.tsx`
- `/engines` — `app/engines/page.tsx`
- `/engines/brand` — `app/engines/brand/page.tsx`
- `/engines/brand/campaigns` — `app/engines/brand/campaigns/page.tsx`
- `/engines/brand/identity` — `app/engines/brand/identity/page.tsx`
- `/engines/code` — `app/engines/code/page.tsx`
- `/engines/code/ai` — `app/engines/code/ai/page.tsx`
- `/engines/code/notebook` — `app/engines/code/notebook/page.tsx`
- `/engines/code/projects` — `app/engines/code/projects/page.tsx`
- `/engines/create` — `app/engines/create/page.tsx`
- `/engines/create/calendar` — `app/engines/create/calendar/page.tsx`
- `/engines/create/editor` — `app/engines/create/editor/page.tsx`
- `/engines/create/queue` — `app/engines/create/queue/page.tsx`
- `/engines/games` — `app/engines/games/page.tsx`
- `/engines/games/builder` — `app/engines/games/builder/page.tsx`
- `/engines/games/library` — `app/engines/games/library/page.tsx`
- `/engines/games/scores` — `app/engines/games/scores/page.tsx`
- `/engines/lab` — `app/engines/lab/page.tsx`
- `/engines/lab/data` — `app/engines/lab/data/page.tsx`
- `/engines/lab/quantum` — `app/engines/lab/quantum/page.tsx`
- `/engines/music` — `app/engines/music/page.tsx`
- `/engines/music/arrange` — `app/engines/music/arrange/page.tsx`
- `/engines/music/library` — `app/engines/music/library/page.tsx`
- `/engines/music/studio` — `app/engines/music/studio/page.tsx`
- `/engines/portfolio` — `app/engines/portfolio/page.tsx`
- `/engines/portfolio/assets` — `app/engines/portfolio/assets/page.tsx`
- `/engines/portfolio/optimize` — `app/engines/portfolio/optimize/page.tsx`
- `/engines/portfolio/quantum` — `app/engines/portfolio/quantum/page.tsx`
- `/engines/render` — `app/engines/render/page.tsx`
- `/feed-settings` — `app/feed-settings/page.tsx`
- `/gameengin` — `app/gameengin/page.tsx`
- `/gameengin/cartridges` — `app/gameengin/cartridges/page.tsx`
- `/gameengin/cartridges/[id]` — `app/gameengin/cartridges/[id]/page.tsx`
- `/homedream` — `app/homedream/page.tsx`
- `/idari-console` — `app/(internal)/idari-console/page.tsx`
- `/idari-console/platform-errors` — `app/(internal)/idari-console/platform-errors/page.tsx`
- `/idari-console/platform-health` — `app/(internal)/idari-console/platform-health/page.tsx`
- `/join` — `app/join/page.tsx`
- `/lab` — `app/lab/page.tsx`
- `/lab/[id]` — `app/lab/[id]/page.tsx`
- `/lab/[id]/codespace` — `app/lab/[id]/codespace/page.tsx`
- `/lab/new` — `app/lab/new/page.tsx`
- `/login` — `app/login/page.tsx`
- `/marketplace` — `app/marketplace/page.tsx`
- `/marketplace/[id]` — `app/marketplace/[id]/page.tsx`
- `/marketplace/sell` — `app/marketplace/sell/page.tsx`
- `/messages` — `app/messages/page.tsx`
- `/messages/boards` — `app/messages/boards/page.tsx`
- `/messages/boards/[id]` — `app/messages/boards/[id]/page.tsx`
- `/messages/boards/new` — `app/messages/boards/new/page.tsx`
- `/messages/new` — `app/messages/new/page.tsx`
- `/mission` — `app/mission/page.tsx`
- `/notes` — `app/notes/page.tsx`
- `/onboarding` — `app/onboarding/page.tsx`
- `/page.tsx` — `app/page.tsx`
- `/policy` — `app/policy/page.tsx`
- `/profile` — `app/profile/page.tsx`
- `/profile/[handle]` — `app/profile/[handle]/page.tsx`
- `/settings` — `app/settings/page.tsx`
- `/settings/account` — `app/settings/account/page.tsx`
- `/settings/algorithm` — `app/settings/algorithm/page.tsx`
- `/settings/appearance` — `app/settings/appearance/page.tsx`
- `/settings/controls` — `app/settings/controls/page.tsx`
- `/settings/data` — `app/settings/data/page.tsx`
- `/settings/dreams` — `app/settings/dreams/page.tsx`
- `/settings/feed` — `app/settings/feed/page.tsx`
- `/settings/help` — `app/settings/help/page.tsx`
- `/settings/notifications` — `app/settings/notifications/page.tsx`
- `/settings/privacy` — `app/settings/privacy/page.tsx`
- `/settings/safety` — `app/settings/safety/page.tsx`
- `/settings/security` — `app/settings/security/page.tsx`
- `/settings/widgets` — `app/settings/widgets/page.tsx`
- `/shop` — `app/shop/page.tsx`
- `/shop/sell` — `app/shop/sell/page.tsx`
- `/u/[handle]` — `app/u/[handle]/page.tsx`
- `/view-profile` — `app/view-profile/page.tsx`
- `/webgpu` — `app/webgpu/page.tsx`
**API Endpoints:**
- `/api/account/delete-data` `[POST]` — `app/api/account/delete-data/route.ts`
- `/api/account/delete-dream` `[POST]` — `app/api/account/delete-dream/route.ts`
- `/api/account/export-data` `[GET]` — `app/api/account/export-data/route.ts`
- `/api/activity/track` `[POST]` — `app/api/activity/track/route.ts`
- `/api/admin/ai-chat` `[POST]` — `app/api/admin/ai-chat/route.ts`
- `/api/admin/ai-request` `[POST]` — `app/api/admin/ai-request/route.ts`
- `/api/admin/child-safety` `[GET, POST]` — `app/api/admin/child-safety/route.ts`
- `/api/admin/code-files` `[POST]` — `app/api/admin/code-files/route.ts`
- `/api/admin/observability` `[GET]` — `app/api/admin/observability/route.ts`
- `/api/ads/orders` `[POST]` — `app/api/ads/orders/route.ts`
- `/api/ads/view` `[POST]` — `app/api/ads/view/route.ts`
- `/api/agent/session` `[POST]` — `app/api/agent/session/route.ts`
- `/api/ai/boogieman` `[POST]` — `app/api/ai/boogieman/route.ts`
- `/api/ai/boogieman/child-safety` `[POST]` — `app/api/ai/boogieman/child-safety/route.ts`
- `/api/ai/boogieman/privacy-event` `[POST]` — `app/api/ai/boogieman/privacy-event/route.ts`
- `/api/ai/boogieman/status` `[GET]` — `app/api/ai/boogieman/status/route.ts`
- `/api/ai/eams` `[POST]` — `app/api/ai/eams/route.ts`
- `/api/ai/execute` `[POST]` — `app/api/ai/execute/route.ts`
- `/api/ai/idari` `[POST]` — `app/api/ai/idari/route.ts`
- `/api/appeal` `[POST]` — `app/api/appeal/route.ts`
- `/api/auth/logout` `[GET]` — `app/api/auth/logout/route.ts`
- `/api/auth/providers` `[GET]` — `app/api/auth/providers/route.ts`
- `/api/blocks` `[GET, POST, DELETE]` — `app/api/blocks/route.ts`
- `/api/ci/run` `[POST]` — `app/api/ci/run/route.ts`
- `/api/close-friends` `[GET, POST, DELETE]` — `app/api/close-friends/route.ts`
- `/api/codeengin/diagnostics` `[POST]` — `app/api/codeengin/diagnostics/route.ts`
- `/api/codeengin/file` `[POST]` — `app/api/codeengin/file/route.ts`
- `/api/codeengin/git` `[POST]` — `app/api/codeengin/git/route.ts`
- `/api/codeengin/run` `[GET, POST]` — `app/api/codeengin/run/route.ts`
- `/api/codeengin/search` `[POST]` — `app/api/codeengin/search/route.ts`
- `/api/codeengin/upload` `[POST]` — `app/api/codeengin/upload/route.ts`
- `/api/codeengin/workspace` `[GET, POST]` — `app/api/codeengin/workspace/route.ts`
- `/api/comments` `[GET, POST, DELETE]` — `app/api/comments/route.ts`
- `/api/connectors/[provider]/connect` `[POST]` — `app/api/connectors/[provider]/connect/route.ts`
- `/api/connectors/[provider]/disconnect` `[DELETE]` — `app/api/connectors/[provider]/disconnect/route.ts`
- `/api/connectors/[provider]/items` `[GET]` — `app/api/connectors/[provider]/items/route.ts`
- `/api/connectors/[provider]/sync` `[POST]` — `app/api/connectors/[provider]/sync/route.ts`
- `/api/connectors/[provider]/verify` `[GET]` — `app/api/connectors/[provider]/verify/route.ts`
- `/api/connectors/cron` `[GET]` — `app/api/connectors/cron/route.ts`
- `/api/connectors/instagram/oauth/callback` `[GET]` — `app/api/connectors/instagram/oauth/callback/route.ts`
- `/api/connectors/instagram/oauth/start` `[GET]` — `app/api/connectors/instagram/oauth/start/route.ts`
- `/api/connectors/status` `[GET]` — `app/api/connectors/status/route.ts`
- `/api/connectors/webhooks/[provider]` `[GET, POST]` — `app/api/connectors/webhooks/[provider]/route.ts`
- `/api/connectors/youtube/oauth/callback` `[GET]` — `app/api/connectors/youtube/oauth/callback/route.ts`
- `/api/connectors/youtube/oauth/start` `[GET]` — `app/api/connectors/youtube/oauth/start/route.ts`
- `/api/content/generative-fill` `[POST]` — `app/api/content/generative-fill/route.ts`
- `/api/content/intelligence` `[POST]` — `app/api/content/intelligence/route.ts`
- `/api/content/transcribe` `[POST]` — `app/api/content/transcribe/route.ts`
- `/api/content/voice-clone` `[POST]` — `app/api/content/voice-clone/route.ts`
- `/api/contentengin/assets/[assetId]` `[GET]` — `app/api/contentengin/assets/[assetId]/route.ts`
- `/api/contentengin/assets/[assetId]/export/gameengin` `[POST]` — `app/api/contentengin/assets/[assetId]/export/gameengin/route.ts`
- `/api/contentengin/jobs` `[GET, POST]` — `app/api/contentengin/jobs/route.ts`
- `/api/contentengin/jobs/[jobId]` `[GET]` — `app/api/contentengin/jobs/[jobId]/route.ts`
- `/api/contentengin/upload` `[POST]` — `app/api/contentengin/upload/route.ts`
- `/api/dr-eams/hf` `[POST]` — `app/api/dr-eams/hf/route.ts`
- `/api/dr-eams/run` `[POST]` — `app/api/dr-eams/run/route.ts`
- `/api/drafts` `[GET, POST]` — `app/api/drafts/route.ts`
- `/api/drafts/[id]` `[PATCH, DELETE]` — `app/api/drafts/[id]/route.ts`
- `/api/dream-windows` `[GET, POST]` — `app/api/dream-windows/route.ts`
- `/api/dream-windows/[id]` `[GET, PATCH, DELETE]` — `app/api/dream-windows/[id]/route.ts`
- `/api/dreamengin/os-status` `[GET]` — `app/api/dreamengin/os-status/route.ts`
- `/api/dreamr/feed` `[GET]` — `app/api/dreamr/feed/route.ts`
- `/api/dreamr/suggested` `[GET]` — `app/api/dreamr/suggested/route.ts`
- `/api/dreamr/tally` `[POST]` — `app/api/dreamr/tally/route.ts`
- `/api/dreams/feed` `[GET, POST]` — `app/api/dreams/feed/route.ts`
- `/api/dreams/instances` `[GET]` — `app/api/dreams/instances/route.ts`
- `/api/dreams/transfer` `[POST]` — `app/api/dreams/transfer/route.ts`
- `/api/embed-feed` `[GET]` — `app/api/embed-feed/route.ts`
- `/api/favorites` `[GET, POST, DELETE]` — `app/api/favorites/route.ts`
- `/api/feed` `[GET]` — `app/api/feed/route.ts`
- `/api/follow` `[GET, POST, DELETE]` — `app/api/follow/route.ts`
- `/api/forge/build` `[POST]` — `app/api/forge/build/route.ts`
- `/api/gal` `[POST]` — `app/api/gal/route.ts`
- `/api/game-scores` `[GET, POST, PATCH]` — `app/api/game-scores/route.ts`
- `/api/gameengin/crash-report` `[POST]` — `app/api/gameengin/crash-report/route.ts`
- `/api/health` `[GET]` — `app/api/health/route.ts`
- `/api/home-layout` `[GET, POST]` — `app/api/home-layout/route.ts`
- `/api/journey` `[GET, POST]` — `app/api/journey/route.ts`
- `/api/lab/benchmarks` `[POST]` — `app/api/lab/benchmarks/route.ts`
- `/api/ledger-media` `[GET]` — `app/api/ledger-media/route.ts`
- `/api/likes` `[GET, POST, DELETE]` — `app/api/likes/route.ts`
- `/api/marketplace` `[GET, POST]` — `app/api/marketplace/route.ts`
- `/api/marketplace/request` `[POST]` — `app/api/marketplace/request/route.ts`
- `/api/messages` `[GET, POST]` — `app/api/messages/route.ts`
- `/api/messages/boards` `[POST]` — `app/api/messages/boards/route.ts`
- `/api/metrics` `[GET]` — `app/api/metrics/route.ts`
- `/api/metrics/platform` `[GET]` — `app/api/metrics/platform/route.ts`
- `/api/metrics/user/[userId]` `[GET]` — `app/api/metrics/user/[userId]/route.ts`
- `/api/music` `[GET, POST, DELETE]` — `app/api/music/route.ts`
- `/api/notifications` `[GET, PUT, DELETE]` — `app/api/notifications/route.ts`
- `/api/platform/errors` `[GET, POST]` — `app/api/platform/errors/route.ts`
- `/api/posts` `[GET, POST]` — `app/api/posts/route.ts`
- `/api/posts/[id]` `[DELETE]` — `app/api/posts/[id]/route.ts`
- `/api/posts/[id]/save` `[POST, DELETE]` — `app/api/posts/[id]/save/route.ts`
- `/api/posts/[id]/view` `[POST]` — `app/api/posts/[id]/view/route.ts`
- `/api/posts/profile/[userId]` `[GET]` — `app/api/posts/profile/[userId]/route.ts`
- `/api/profile` `[GET, PUT]` — `app/api/profile/route.ts`
- `/api/projects` `[GET, POST, PUT, DELETE]` — `app/api/projects/route.ts`
- `/api/scheduled-posts` `[GET, POST, PUT, DELETE]` — `app/api/scheduled-posts/route.ts`
- `/api/security/scan` `[POST]` — `app/api/security/scan/route.ts`
- `/api/settings/appearance` `[GET, POST]` — `app/api/settings/appearance/route.ts`
- `/api/settings/feed` `[GET, POST]` — `app/api/settings/feed/route.ts`
- `/api/settings/notifications` `[GET, POST]` — `app/api/settings/notifications/route.ts`
- `/api/settings/privacy` `[GET, POST]` — `app/api/settings/privacy/route.ts`
- `/api/setup/check` `[GET]` — `app/api/setup/check/route.ts`
- `/api/setup/google-oauth` `[GET]` — `app/api/setup/google-oauth/route.ts`
- `/api/shared-dream/sessions` `[GET, POST]` — `app/api/shared-dream/sessions/route.ts`
- `/api/shared-dream/sessions/[id]` `[GET, PATCH]` — `app/api/shared-dream/sessions/[id]/route.ts`
- `/api/shellhub/devices` `[GET]` — `app/api/shellhub/devices/route.ts`
- `/api/shop` `[GET, POST, PUT, DELETE]` — `app/api/shop/route.ts`
- `/api/skip-credits/balance` `[GET]` — `app/api/skip-credits/balance/route.ts`
- `/api/skip-credits/earn` `[POST]` — `app/api/skip-credits/earn/route.ts`
- `/api/skip-credits/use` `[POST]` — `app/api/skip-credits/use/route.ts`
- `/api/social/ipfs` `[GET, POST]` — `app/api/social/ipfs/route.ts`
- `/api/social/livekit/room` `[GET]` — `app/api/social/livekit/room/route.ts`
- `/api/social/livekit/token` `[POST]` — `app/api/social/livekit/token/route.ts`
- `/api/social/rss-feed` `[GET]` — `app/api/social/rss-feed/route.ts`
- `/api/upload` `[POST]` — `app/api/upload/route.ts`
- `/api/user/layout` `[GET, POST]` — `app/api/user/layout/route.ts`
- `/api/views/track` `[POST]` — `app/api/views/track/route.ts`
- `/api/widgets/feed` `[GET, POST]` — `app/api/widgets/feed/route.ts`
- `/api/widgets/instances` `[GET]` — `app/api/widgets/instances/route.ts`
- `/api/youtube/channel` `[GET]` — `app/api/youtube/channel/route.ts`
- `/api/youtube/discovery` `[GET]` — `app/api/youtube/discovery/route.ts`
- `/api/youtube/live-feed` `[GET]` — `app/api/youtube/live-feed/route.ts`
- `/auth/callback` `[GET]` — `app/auth/callback/route.ts`
- `/dreamdmbar/_components/dreamr/api` — `app/dreamdmbar/_components/dreamr/api/route.ts`
**Production Components:**
`AboutPage`, `AccountSettingsPage`, `AdSlotPage`, `AdminPage`, `AdsPage`, `AlgorithmPage`, `AppearanceSettingsPage`, `BoardDetailPage`, `BoardsPage`, `BrandCampaignsPage`, +121 more
### Notable Abstractions
- `CreateDreamDocInput` — interface in `app/actions/dream-docs.ts`
- `OAuthProvidersResponse` — interface in `app/api/auth/providers/route.ts`
- `ConnectorStatusEntry` — interface in `app/api/connectors/status/route.ts`
- `ContentEnginJobType` — type in `app/api/contentengin/jobs/route.ts`
- `EmbedFeedResponse` — interface in `app/api/embed-feed/route.ts`
- `UnifiedFeedEntry` — interface in `app/api/feed/route.ts`
- `YouTubeChannelResponse` — interface in `app/api/youtube/channel/route.ts`
- `YouTubeLiveFeedResponse` — interface in `app/api/youtube/live-feed/route.ts`
- `DreamRSignals` — interface in `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts`
### Capabilities
- Important contract surface: CreateDreamDocInput, OAuthProvidersResponse, ConnectorStatusEntry, EmbedFeedResponse, UnifiedFeedEntry
- Important shared type vocabulary: ContentEnginJobType
- Behavior functions: createDreamDoc, publishDreamDoc, getOAuthProvidersResponse, BrandEnginRedirectPage, CodeEnginRedirectPage, CreateEnginRedirectPage
- Read endpoints for data retrieval
- Write endpoints for mutations
- Delete endpoints for resource lifecycle
#### Application Source Structure
```text
└── app
    ├── (internal)
    │   └── idari-console
    │       ├── page.tsx
    │       ├── platform-errors
    │       │   └── page.tsx
    │       └── platform-health
    │           └── page.tsx
    ├── about
    │   └── page.tsx
    ├── actions
    │   └── dream-docs.ts
    ├── ads
    │   ├── create
    │   │   └── page.tsx
    │   ├── page.tsx
    │   └── slot
    │       └── [id]
    │           └── page.tsx
    ├── api
    │   ├── account
    │   │   ├── delete-data
    │   │   │   └── route.ts
    │   │   ├── delete-dream
    │   │   │   └── route.ts
    │   │   └── export-data
    │   │       └── route.ts
    │   ├── activity
    │   │   └── track
    │   │       └── route.ts
    │   ├── admin
    │   │   ├── ai-chat
    │   │   │   └── route.ts
    │   │   ├── ai-request
    │   │   │   └── route.ts
    │   │   ├── child-safety
    │   │   │   └── route.ts
    │   │   ├── code-files
    │   │   │   └── route.ts
    │   │   └── observability
    │   │       └── route.ts
    │   ├── ads
    │   │   ├── orders
    │   │   │   └── route.ts
    │   │   └── view
    │   │       └── route.ts
    │   ├── agent
    │   │   └── session
    │   │       └── route.ts
    │   ├── ai
    │   │   ├── boogieman
    │   │   │   ├── child-safety
    │   │   │   │   └── route.ts
    │   │   │   ├── privacy-event
    │   │   │   │   └── route.ts
    │   │   │   ├── route.ts
    │   │   │   └── status
    │   │   │       └── route.ts
    │   │   ├── eams
    │   │   │   └── route.ts
    │   │   ├── execute
    │   │   │   └── route.ts
    │   │   └── idari
    │   │       └── route.ts
    │   ├── appeal
    │   │   └── route.ts
    │   ├── auth
    │   │   ├── logout
    │   │   │   └── route.ts
    │   │   └── providers
    │   │       └── route.ts
    │   ├── blocks
    │   │   └── route.ts
    │   ├── ci
    │   │   └── run
    │   │       └── route.ts
    │   ├── close-friends
    │   │   └── route.ts
    │   ├── codeengin
    │   │   ├── diagnostics
    │   │   │   └── route.ts
    │   │   ├── file
    │   │   │   └── route.ts
    │   │   ├── git
    │   │   │   └── route.ts
    │   │   ├── run
    │   │   │   └── route.ts
    │   │   ├── search
    │   │   │   └── route.ts
    │   │   ├── upload
    │   │   │   └── route.ts
    │   │   └── workspace
    │   │       └── route.ts
    │   ├── comments
    │   │   └── route.ts
    │   ├── connectors
    │   │   ├── [provider]
    │   │   │   ├── connect
    │   │   │   │   └── route.ts
    │   │   │   ├── disconnect
    │   │   │   │   └── route.ts
    │   │   │   ├── items
    │   │   │   │   └── route.ts
    │   │   │   ├── sync
    │   │   │   │   └── route.ts
    │   │   │   └── verify
    │   │   │       └── route.ts
    │   │   ├── cron
    │   │   │   └── route.ts
    │   │   ├── instagram
    │   │   │   └── oauth
    │   │   │       ├── callback
    │   │   │       │   └── route.ts
    │   │   │       └── start
    │   │   │           └── route.ts
    │   │   ├── status
    │   │   │   └── route.ts
    │   │   ├── webhooks
    │   │   │   └── [provider]
    │   │   │       └── route.ts
… (156 more application source files)
```
<details><summary>App application source index (276 files)</summary>

- `app/(internal)/idari-console/page.tsx` — route page surface.
- `app/(internal)/idari-console/platform-errors/page.tsx` — route page surface.
- `app/(internal)/idari-console/platform-health/page.tsx` — route page surface.
- `app/about/page.tsx` — route page surface.
- `app/actions/dream-docs.ts` — TypeScript/JavaScript application module.
- `app/ads/create/page.tsx` — route page surface.
- `app/ads/page.tsx` — route page surface.
- `app/ads/slot/[id]/page.tsx` — route page surface.
- `app/api/account/delete-data/route.ts` — API route transport boundary.
- `app/api/account/delete-dream/route.ts` — API route transport boundary.
- `app/api/account/export-data/route.ts` — API route transport boundary.
- `app/api/activity/track/route.ts` — API route transport boundary.
- `app/api/admin/ai-chat/route.ts` — API route transport boundary.
- `app/api/admin/ai-request/route.ts` — API route transport boundary.
- `app/api/admin/child-safety/route.ts` — API route transport boundary.
- `app/api/admin/code-files/route.ts` — API route transport boundary.
- `app/api/admin/observability/route.ts` — API route transport boundary.
- `app/api/ads/orders/route.ts` — API route transport boundary.
- `app/api/ads/view/route.ts` — API route transport boundary.
- `app/api/agent/session/route.ts` — API route transport boundary.
- `app/api/ai/boogieman/child-safety/route.ts` — API route transport boundary.
- `app/api/ai/boogieman/privacy-event/route.ts` — API route transport boundary.
- `app/api/ai/boogieman/route.ts` — API route transport boundary.
- `app/api/ai/boogieman/status/route.ts` — API route transport boundary.
- `app/api/ai/eams/route.ts` — API route transport boundary.
- `app/api/ai/execute/route.ts` — API route transport boundary.
- `app/api/ai/idari/route.ts` — API route transport boundary.
- `app/api/appeal/route.ts` — API route transport boundary.
- `app/api/auth/logout/route.ts` — API route transport boundary.
- `app/api/auth/providers/route.ts` — API route transport boundary.
- `app/api/blocks/route.ts` — API route transport boundary.
- `app/api/ci/run/route.ts` — API route transport boundary.
- `app/api/close-friends/route.ts` — API route transport boundary.
- `app/api/codeengin/diagnostics/route.ts` — API route transport boundary.
- `app/api/codeengin/file/route.ts` — API route transport boundary.
- `app/api/codeengin/git/route.ts` — API route transport boundary.
- `app/api/codeengin/run/route.ts` — API route transport boundary.
- `app/api/codeengin/search/route.ts` — API route transport boundary.
- `app/api/codeengin/upload/route.ts` — API route transport boundary.
- `app/api/codeengin/workspace/route.ts` — API route transport boundary.
- `app/api/comments/route.ts` — API route transport boundary.
- `app/api/connectors/[provider]/connect/route.ts` — API route transport boundary.
- `app/api/connectors/[provider]/disconnect/route.ts` — API route transport boundary.
- `app/api/connectors/[provider]/items/route.ts` — API route transport boundary.
- `app/api/connectors/[provider]/sync/route.ts` — API route transport boundary.
- `app/api/connectors/[provider]/verify/route.ts` — API route transport boundary.
- `app/api/connectors/cron/route.ts` — API route transport boundary.
- `app/api/connectors/instagram/oauth/callback/route.ts` — API route transport boundary.
- `app/api/connectors/instagram/oauth/start/route.ts` — API route transport boundary.
- `app/api/connectors/status/route.ts` — API route transport boundary.
- `app/api/connectors/webhooks/[provider]/route.ts` — API route transport boundary.
- `app/api/connectors/youtube/oauth/callback/route.ts` — API route transport boundary.
- `app/api/connectors/youtube/oauth/start/route.ts` — API route transport boundary.
- `app/api/content/generative-fill/route.ts` — API route transport boundary.
- `app/api/content/intelligence/route.ts` — API route transport boundary.
- `app/api/content/transcribe/route.ts` — API route transport boundary.
- `app/api/content/voice-clone/route.ts` — API route transport boundary.
- `app/api/contentengin/assets/[assetId]/export/gameengin/route.ts` — API route transport boundary.
- `app/api/contentengin/assets/[assetId]/route.ts` — API route transport boundary.
- `app/api/contentengin/jobs/[jobId]/route.ts` — API route transport boundary.
- `app/api/contentengin/jobs/route.ts` — API route transport boundary.
- `app/api/contentengin/upload/route.ts` — API route transport boundary.
- `app/api/dr-eams/hf/route.ts` — API route transport boundary.
- `app/api/dr-eams/run/route.ts` — API route transport boundary.
- `app/api/drafts/[id]/route.ts` — API route transport boundary.
- `app/api/drafts/route.ts` — API route transport boundary.
- `app/api/dream-windows/[id]/route.ts` — API route transport boundary.
- `app/api/dream-windows/route.ts` — API route transport boundary.
- `app/api/dreamengin/os-status/route.ts` — API route transport boundary.
- `app/api/dreamr/feed/route.ts` — API route transport boundary.
- `app/api/dreamr/suggested/route.ts` — API route transport boundary.
- `app/api/dreamr/tally/route.ts` — API route transport boundary.
- `app/api/dreams/feed/route.ts` — API route transport boundary.
- `app/api/dreams/instances/route.ts` — API route transport boundary.
- `app/api/dreams/transfer/route.ts` — API route transport boundary.
- `app/api/embed-feed/route.ts` — API route transport boundary.
- `app/api/favorites/route.ts` — API route transport boundary.
- `app/api/feed/route.ts` — API route transport boundary.
- `app/api/follow/route.ts` — API route transport boundary.
- `app/api/forge/build/route.ts` — API route transport boundary.
- `app/api/gal/route.ts` — API route transport boundary.
- `app/api/game-scores/route.ts` — API route transport boundary.
- `app/api/gameengin/crash-report/route.ts` — API route transport boundary.
- `app/api/health/route.ts` — API route transport boundary.
- `app/api/home-layout/route.ts` — API route transport boundary.
- `app/api/journey/route.ts` — API route transport boundary.
- `app/api/lab/benchmarks/route.ts` — API route transport boundary.
- `app/api/ledger-media/route.ts` — API route transport boundary.
- `app/api/likes/route.ts` — API route transport boundary.
- `app/api/marketplace/request/route.ts` — API route transport boundary.
- `app/api/marketplace/route.ts` — API route transport boundary.
- `app/api/messages/boards/route.ts` — API route transport boundary.
- `app/api/messages/route.ts` — API route transport boundary.
- `app/api/metrics/platform/route.ts` — API route transport boundary.
- `app/api/metrics/route.ts` — API route transport boundary.
- `app/api/metrics/user/[userId]/route.ts` — API route transport boundary.
- `app/api/music/route.ts` — API route transport boundary.
- `app/api/notifications/route.ts` — API route transport boundary.
- `app/api/platform/errors/route.ts` — API route transport boundary.
- `app/api/posts/[id]/route.ts` — API route transport boundary.
- `app/api/posts/[id]/save/route.ts` — API route transport boundary.
- `app/api/posts/[id]/view/route.ts` — API route transport boundary.
- `app/api/posts/profile/[userId]/route.ts` — API route transport boundary.
- `app/api/posts/route.ts` — API route transport boundary.
- `app/api/profile/route.ts` — API route transport boundary.
- `app/api/projects/route.ts` — API route transport boundary.
- `app/api/scheduled-posts/route.ts` — API route transport boundary.
- `app/api/security/scan/route.ts` — API route transport boundary.
- `app/api/settings/appearance/route.ts` — API route transport boundary.
- `app/api/settings/feed/route.ts` — API route transport boundary.
- `app/api/settings/notifications/route.ts` — API route transport boundary.
- `app/api/settings/privacy/route.ts` — API route transport boundary.
- `app/api/setup/check/route.ts` — API route transport boundary.
- `app/api/setup/google-oauth/route.ts` — API route transport boundary.
- `app/api/shared-dream/sessions/[id]/route.ts` — API route transport boundary.
- `app/api/shared-dream/sessions/route.ts` — API route transport boundary.
- `app/api/shellhub/devices/route.ts` — API route transport boundary.
- `app/api/shop/route.ts` — API route transport boundary.
- `app/api/skip-credits/balance/route.ts` — API route transport boundary.
- `app/api/skip-credits/earn/route.ts` — API route transport boundary.
- `app/api/skip-credits/use/route.ts` — API route transport boundary.
- `app/api/social/ipfs/route.ts` — API route transport boundary.
- `app/api/social/livekit/room/route.ts` — API route transport boundary.
- `app/api/social/livekit/token/route.ts` — API route transport boundary.
- `app/api/social/rss-feed/route.ts` — API route transport boundary.
- `app/api/upload/route.ts` — API route transport boundary.
- `app/api/user/layout/route.ts` — API route transport boundary.
- `app/api/views/track/route.ts` — API route transport boundary.
- `app/api/widgets/feed/route.ts` — API route transport boundary.
- `app/api/widgets/instances/route.ts` — API route transport boundary.
- `app/api/youtube/channel/route.ts` — API route transport boundary.
- `app/api/youtube/discovery/route.ts` — API route transport boundary.
- `app/api/youtube/live-feed/route.ts` — API route transport boundary.
- `app/auth/callback/route.ts` — API route transport boundary.
- `app/auth/reset-password/page.tsx` — route page surface.
- `app/auth/update-password/page.tsx` — route page surface.
- `app/connectors/dream.ConnectorsClient.tsx` — React application module.
- `app/connectors/page.tsx` — route page surface.
- `app/daydream/brand/engin/page.tsx` — route page surface.
- `app/daydream/brand/page.tsx` — route page surface.
- `app/daydream/code/engin/page.tsx` — route page surface.
- `app/daydream/code/page.tsx` — route page surface.
- `app/daydream/constellation/dream.ConstellationClient.tsx` — React application module.
- `app/daydream/constellation/page.tsx` — route page surface.
- `app/daydream/create/engin/page.tsx` — route page surface.
- `app/daydream/create/page.tsx` — route page surface.
- `app/daydream/forge/page.tsx` — route page surface.
- `app/daydream/game/dream.GamePageClient.tsx` — React application module.
- `app/daydream/game/dream.shell.ImmersiveGameShell.tsx` — React application module.
- `app/daydream/game/page.tsx` — route page surface.
- `app/daydream/games/engin/page.tsx` — route page surface.
- `app/daydream/games/page.tsx` — route page surface.
- `app/daydream/lab/engin/page.tsx` — route page surface.
- `app/daydream/lab/page.tsx` — route page surface.
- `app/daydream/lab/portfolio/page.tsx` — route page surface.
- `app/daydream/media-vault/page.tsx` — route page surface.
- `app/daydream/music/engin/page.tsx` — route page surface.
- `app/daydream/music/page.tsx` — route page surface.
- `app/daydream/music/upload/page.tsx` — route page surface.
- `app/daydream/play/page.tsx` — route page surface.
- `app/daydream/render/page.tsx` — route page surface.
- `app/discover/page.tsx` — route page surface.
- `app/dream-effects/page.tsx` — route page surface.
- `app/dreamdmbar/_components/DreamBarDataBridge.tsx` — React application module.
- `app/dreamdmbar/_components/DreamSpaceRegion.tsx` — React application module.
- `app/dreamdmbar/_components/DreamWidgetGrid.tsx` — React application module.
- `app/dreamdmbar/_components/HomeDreamRegion.tsx` — React application module.
- `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts` — TypeScript/JavaScript application module.
- `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts` — TypeScript/JavaScript application module.
- `app/dreamdmbar/_components/dreamr/api/feedHandler.ts` — TypeScript/JavaScript application module.
- `app/dreamdmbar/_components/dreamr/api/route.ts` — API route transport boundary.
- `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx` — React application module.
- `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx` — React application module.
- `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx` — React application module.
- `app/dreamdmbar/dreamspace/page.tsx` — route page surface.
- `app/dreamdmbar/dualruntime/page.tsx` — route page surface.
- `app/dreamdmbar/homedream/page.tsx` — route page surface.
- `app/dreamdmbar/layout.tsx` — React application module.
- `app/dreamdmbar/page.tsx` — route page surface.
- `app/dreamr/page.tsx` — route page surface.
- `app/dreamspace/page.tsx` — route page surface.
- `app/edit-profiledream/page.tsx` — route page surface.
- `app/engines/brand/campaigns/page.tsx` — route page surface.
- `app/engines/brand/identity/page.tsx` — route page surface.
- `app/engines/brand/layout.tsx` — React application module.
- `app/engines/brand/page.tsx` — route page surface.
- `app/engines/code/ai/page.tsx` — route page surface.
- `app/engines/code/layout.tsx` — React application module.
- `app/engines/code/notebook/page.tsx` — route page surface.
- `app/engines/code/page.tsx` — route page surface.
- `app/engines/code/projects/page.tsx` — route page surface.
- `app/engines/create/calendar/page.tsx` — route page surface.
- `app/engines/create/editor/page.tsx` — route page surface.
- `app/engines/create/layout.tsx` — React application module.
- `app/engines/create/page.tsx` — route page surface.
- `app/engines/create/queue/page.tsx` — route page surface.
- `app/engines/games/builder/page.tsx` — route page surface.
- `app/engines/games/layout.tsx` — React application module.
- `app/engines/games/library/page.tsx` — route page surface.
- `app/engines/games/page.tsx` — route page surface.
- `app/engines/games/scores/page.tsx` — route page surface.
- `app/engines/lab/data/page.tsx` — route page surface.
- `app/engines/lab/layout.tsx` — React application module.
- `app/engines/lab/page.tsx` — route page surface.
- `app/engines/lab/quantum/page.tsx` — route page surface.
- `app/engines/layout.tsx` — React application module.
- `app/engines/music/arrange/page.tsx` — route page surface.
- `app/engines/music/layout.tsx` — React application module.
- `app/engines/music/library/page.tsx` — route page surface.
- `app/engines/music/page.tsx` — route page surface.
- `app/engines/music/studio/page.tsx` — route page surface.
- `app/engines/page.tsx` — route page surface.
- `app/engines/portfolio/assets/page.tsx` — route page surface.
- `app/engines/portfolio/layout.tsx` — React application module.
- `app/engines/portfolio/optimize/page.tsx` — route page surface.
- `app/engines/portfolio/page.tsx` — route page surface.
- `app/engines/portfolio/quantum/page.tsx` — route page surface.
- `app/engines/render/page.tsx` — route page surface.
- `app/error.tsx` — React application module.
- `app/feed-settings/dream.FeedSettingsClient.tsx` — React application module.
- `app/feed-settings/page.tsx` — route page surface.
- `app/gameengin/cartridges/[id]/page.tsx` — route page surface.
- `app/gameengin/cartridges/page.tsx` — route page surface.
- `app/gameengin/page.tsx` — route page surface.
- `app/global-error.tsx` — React application module.
- `app/globals-enhanced.css` — application style source.
- `app/homedream/page.tsx` — route page surface.
- `app/join/page.tsx` — route page surface.
- `app/lab/[id]/codespace/page.tsx` — route page surface.
- `app/lab/[id]/page.tsx` — route page surface.
- `app/lab/new/page.tsx` — route page surface.
- `app/lab/page.tsx` — route page surface.
- `app/layout.tsx` — React application module.
- `app/loading.tsx` — React application module.
- `app/login/page.tsx` — route page surface.
- `app/marketplace/[id]/page.tsx` — route page surface.
- `app/marketplace/page.tsx` — route page surface.
- `app/marketplace/sell/page.tsx` — route page surface.
- `app/messages/boards/[id]/page.tsx` — route page surface.
- `app/messages/boards/new/page.tsx` — route page surface.
- `app/messages/boards/page.tsx` — route page surface.
- `app/messages/new/page.tsx` — route page surface.
- `app/messages/page.tsx` — route page surface.
- `app/mission/page.tsx` — route page surface.
- `app/not-found.tsx` — React application module.
- `app/notes/page.tsx` — route page surface.
- `app/onboarding/page.tsx` — route page surface.
- `app/page.tsx` — route page surface.
- `app/policy/page.tsx` — route page surface.
- `app/profile/[handle]/page.tsx` — route page surface.
- `app/profile/page.tsx` — route page surface.
- `app/settings/account/dream.DangerZoneActions.tsx` — React application module.
- `app/settings/account/page.tsx` — route page surface.
- `app/settings/algorithm/page.tsx` — route page surface.
- `app/settings/appearance/page.tsx` — route page surface.
- `app/settings/controls/dream.ControlsClient.tsx` — React application module.
- `app/settings/controls/dream.PositionIndicatorToggle.tsx` — React application module.
- `app/settings/controls/page.tsx` — route page surface.
- `app/settings/data/dream.DataClient.tsx` — React application module.
- `app/settings/data/page.tsx` — route page surface.
- `app/settings/dreams/dreams-layout-editor.tsx` — React application module.
- `app/settings/dreams/page.tsx` — route page surface.
- `app/settings/feed/page.tsx` — route page surface.
- `app/settings/help/page.tsx` — route page surface.
- `app/settings/notifications/page.tsx` — route page surface.
- `app/settings/page.tsx` — route page surface.
- `app/settings/privacy/dream.PrivacyClient.tsx` — React application module.
- `app/settings/privacy/page.tsx` — route page surface.
- `app/settings/safety/page.tsx` — route page surface.
- `app/settings/security/page.tsx` — route page surface.
- `app/settings/widgets/page.tsx` — route page surface.
- `app/shop/page.tsx` — route page surface.
- `app/shop/sell/page.tsx` — route page surface.
- `app/u/[handle]/page.tsx` — route page surface.
- `app/view-profile/page.tsx` — route page surface.
- `app/webgpu/page.tsx` — route page surface.

</details>

## Components
Components is a user-facing application surface subsystem composed of React components and presentation logic. It exposes useCustomizeMode, useDreamNav, useDualRuntime as reusable hooks. Core abstractions are encapsulated in CartridgeErrorBoundary, DualSenseManager, ParticlePool. It depends on app, Backend, System, Core & CoreSurfaces, Connectors & Live Feeds.
### Responsibilities
- Renders production surfaces/components: ActivityPostForm, ActivityProfile, AdUnit, SkipCreditBalance, PasswordField, DreamEnginLogo, +291 more
- Core abstractions: CartridgeErrorBoundary, DualSenseManager, ParticlePool, ScreenShake, ParallaxLayers
- Runtime orchestration, capability routing, and Engin lifecycle coordination
- Authentication, sessions, authorization, and access control
- Messaging, conversations, notifications, realtime channels, or presence
- Feed, post, comment, ranking, or social interaction behavior
- Asset storage, upload, export, or CDN-facing pipelines
- Theming, design tokens, visual customization, or settings surfaces
- GameEngin cartridge/runtime interaction or playable system behavior
- ContentEngin asset creation, validation, rigging, animation, or export behavior
### Key Modules
- components/runtime/dream.DualRuntimeContainer.tsx — useDualRuntime, DualRuntimeContainer (important path; behavior evidence; runtime layer)
- components/runtime/dream.RuntimeView.tsx — RuntimeView (important path; behavior evidence; runtime layer)
- components/runtime/dream.shell.RuntimeShell.tsx — RuntimeShell (important path; behavior evidence; runtime layer)
- components/shared-dream/dream.SharedDreamProvider.tsx — SharedDreamProvider, useSharedDream, SharedDreamContextValue (important path; behavior evidence; important exports: SharedDreamProvider, useSharedDream, SharedDreamContextValue)
- components/daydream/dream.shell.DaydreamShell.tsx — DaydreamShell, DaydreamWidget (important path; behavior evidence; important exports: DaydreamShell, DaydreamWidget)
- components/games/madmaxi/authoredZonePacks.ts — getAuthoredStarterLevel, isMadmaxiAuthoredLevel (important path; behavior evidence; important exports: getAuthoredStarterLevel, isMadmaxiAuthoredLevel)
- components/daydream/dream.StandaloneEnginSurface.tsx — StandaloneEnginSurface, StandaloneEnginName (important path; behavior evidence; important exports: StandaloneEnginSurface, StandaloneEnginName)
- components/games/madmaxi/audio.ts — MadmaxiAudioController (important path; behavior evidence; important exports: MadmaxiAudioController)
- components/daydream/dream.CodeDreamIDE.tsx — CodeDreamIDE (important path; behavior evidence; important exports: CodeDreamIDE)
- components/daydream/dream.constellationmap.tsx — DreamConstellationMap (important path; behavior evidence; important exports: DreamConstellationMap)
- components/daydream/dream.LabDreamIDE.tsx — LabDreamIDE (important path; behavior evidence; important exports: LabDreamIDE)
- components/daydream/dream.NGNEngin.tsx — NGNEngin (important path; behavior evidence; important exports: NGNEngin)
### Architectural Relationships
- Depends on **app**
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Connectors & Live Feeds**
- Depends on **Dreamr — Human Media**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **DreamSpace**
- Depends on **Dual Runtimes**
- Depends on **HomeDream**
- Depends on **Settings & Customization**
- Depends on **Shared Dreams**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Participates in the Shared Dreams pub/sub channel system
- Consumes backend, engine, Supabase, or core system services
- Depends on app
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Connectors & Live Feeds
- Depends on Dreamr — Human Media
### Public Surfaces
**Production Components:**
`AIAssistant`, `AIBuilderPanel`, `AIPanel`, `ASSET_IMPORT_EVENT`, `ActiveModuleSurface`, `ActivityPostForm`, `ActivityProfile`, `AdUnit`, `AddDreamCTA`, `AddSliceSheet`, +262 more
### Notable Abstractions
- `FeedSlice` — interface in `components/connectors/dream.AddSliceSheet.tsx`
- `PickerConnector` — interface in `components/connectors/dream.widget.ConnectorWidgetPicker.tsx`
- `StandaloneEnginName` — type in `components/daydream/dream.StandaloneEnginSurface.tsx`
- `DaydreamWidget` — type in `components/daydream/dream.shell.DaydreamShell.tsx`
- `RegistryEntry` — interface in `components/dream.universal_asset_registry.tsx`
- `GameAssetRow` — interface in `components/dream.universal_asset_registry.tsx`
- `AssetCategory` — type in `components/dreamengin/dream.CanvasDropZone.tsx`
- `AssetImportPayload` — interface in `components/dreamengin/dream.CanvasDropZone.tsx`
- `EngineState` — interface in `components/dreamengin/engine/types.ts`
- `DreamOutputMode` — type in `components/dreams/dream.outputlayer.tsx`
- `DreamVisibility` — type in `components/dreams/dream.outputlayer.tsx`
- `DreamDataState` — type in `components/dreams/dream.shell.DreamShell.tsx`
- `useCustomizeMode` — hook
- `useDreamNav` — hook
- `useDualRuntime` — hook
- `useEditMode` — hook
- `useEngin` — hook
- `useGlobalCrashListener` — hook
- `useSharedDream` — hook
- `useTapHoldMove` — hook
### Capabilities
- Exposes hooks: useCustomizeMode, useDreamNav, useDualRuntime, useEditMode, useEngin, useGlobalCrashListener, +4 more
- Important contract surface: FeedSlice, PickerConnector, RegistryEntry, GameAssetRow, AssetImportPayload
- Important shared type vocabulary: StandaloneEnginName, DaydreamWidget, AssetCategory, DreamOutputMode, DreamVisibility
- Behavior functions: DreamShell, QueuePanel, makeEnginApp, AssetsPanel, makeEnginApp, EnginNavBar
#### Application Source Structure
```text
└── components
    ├── activity
    │   ├── dream.ActivityPostForm.tsx
    │   ├── dream.ActivityProfile.tsx
    │   └── dream.TierBadge.tsx
    ├── ads
    │   ├── dream.AdUnit.tsx
    │   └── dream.SkipCreditBalance.tsx
    ├── auth
    │   └── dream.PasswordField.tsx
    ├── branding
    │   ├── dream.DreamEnginLogo.tsx
    │   ├── dream.LogoHero.tsx
    │   └── dream.Nav.tsx
    ├── connectors
    │   ├── dream.AddSliceSheet.tsx
    │   ├── dream.ConnectDreamPrompt.tsx
    │   ├── dream.ConnectorRow.tsx
    │   ├── dream.NoSlotDialog.tsx
    │   ├── dream.PlacementMode.tsx
    │   ├── dream.widget.ConnectWidgetPrompt.tsx
    │   └── dream.widget.ConnectorWidgetPicker.tsx
    ├── contentengin
    │   ├── AnimationPanel.tsx
    │   ├── AssetPreview3D.tsx
    │   ├── ContentEnginStudio.tsx
    │   ├── ExportPanel.tsx
    │   ├── MaterialEditor.tsx
    │   ├── PartTreeEditor.tsx
    │   ├── PhotoReferencePanel.tsx
    │   ├── RecipeEditor.tsx
    │   └── RiggingPanel.tsx
    ├── core
    │   └── dream.CoreDream.tsx
    ├── customize
    │   ├── dream.GlobalCustomizeUI.tsx
    │   ├── dream.bar.CustomizeModeBar.tsx
    │   ├── dream.bar.CustomizeToolbar.tsx
    │   └── panels
    │       ├── dream.panel.ColorPanel.tsx
    │       ├── dream.panel.EffectsPanel.tsx
    │       ├── dream.panel.FontPanel.tsx
    │       └── dream.panel.LayoutPanel.tsx
    ├── daydream
    │   ├── dream.CodeDreamIDE.tsx
    │   ├── dream.DiffViewer.tsx
    │   ├── dream.JourneyTrail.tsx
    │   ├── dream.LabDreamIDE.tsx
    │   ├── dream.NGNEngin.tsx
    │   ├── dream.OpenDaydreamSideBButton.tsx
    │   ├── dream.StandaloneEnginSurface.tsx
    │   ├── dream.constellationmap.tsx
    │   ├── dream.shell.DaydreamShell.tsx
    │   ├── dreamsurface.daydream.BrandDaydream.tsx
    │   └── starmaker
    │       ├── dream.panel.CompingPanel.tsx
    │       ├── dream.panel.MultitrackArrangementPanel.tsx
    │       ├── dream.panel.PianoRollPanel.tsx
    │       └── dream.panel.SessionViewPanel.tsx
    ├── draggable
    │   └── dream.DraggableModule.tsx
    ├── dream.AIAssistant.tsx
    ├── dream.AudioVisualizer3D.tsx
    ├── dream.BoogieWarningBanner.tsx
    ├── dream.BrandLogo.tsx
    ├── dream.CommandPalette.tsx
    ├── dream.CommandPaletteMount.tsx
    ├── dream.CreatePostModal.tsx
    ├── dream.DrEamsModeToggle.tsx
    ├── dream.DrEamsVoiceAssistant.tsx
    ├── dream.DragToAnchorClose.tsx
    ├── dream.FeedCard.tsx
    ├── dream.ForgeDreamCanvas.tsx
    ├── dream.GlobalOverlays.tsx
    ├── dream.HeroSprite.tsx
    ├── dream.HomeFeed.tsx
    ├── dream.IconSelector.tsx
    ├── dream.InnerDreamsButton.tsx
    ├── dream.KonamiDream.tsx
    ├── dream.LandingHero.tsx
    ├── dream.LedgerChart.tsx
    ├── dream.MessagesClient.tsx
    ├── dream.NotificationCenter.tsx
    ├── dream.OSShellActivator.tsx
    ├── dream.PhysicsLab.tsx
    ├── dream.ProfileEditor.tsx
    ├── dream.ProfileShareButton.tsx
    ├── dream.ProfileSpace.tsx
    ├── dream.PullToRefresh.tsx
    ├── dream.ShrunkMode.tsx
    ├── dream.SkeletonLoaders.tsx
    ├── dream.ThemeApplicator.tsx
    ├── dream.ThemeToggle.tsx
    ├── dream.ToastSystem.tsx
    ├── dream.VoidThemeToggle.tsx
    ├── dream.panel.ChildSafetyPanel.tsx
    ├── dream.panel.IDariPanel.tsx
    ├── dream.universal_asset_registry.tsx
    ├── dream.widget.AnchorWidget.tsx
    ├── dream.widget.ProfileWidgetBlock.tsx
    ├── dream.widget.WidgetBubble.tsx
    ├── dreamengin
    │   ├── dream.CanvasDropZone.tsx
    │   ├── dream.DREAMenginOS.tsx
    │   ├── dream.DrEamsCanvas.tsx
    │   ├── dream.HomeControls.tsx
    │   ├── dream.bar.DrEamsSearchBar.tsx
    │   ├── dream.menu.NexusMenu.tsx
    │   ├── dream.menu.OutdreamMenu.tsx
    │   ├── dream.overlay.ViewAllDreamsOverlay.tsx
    │   ├── dream.panel.CrossEnginStatusPanel.tsx
    │   ├── dream.panel.DrEamsPanel.tsx
    │   ├── dream.scene.BabylonGameScene.tsx
    │   ├── dream.scene.DrEamsScene.tsx
    │   ├── dream.scene.PortfolioOptimizationScene.tsx
    │   ├── dream.shell.EnginShell.tsx
    │   ├── dream.widget.AppearanceWidget.tsx
    │   ├── dreamsurface.dreamengin.tsx
    │   └── engine
    │       ├── math.ts
… (200 more application source files)
```
<details><summary>Components application source index (320 files)</summary>

- `components/activity/dream.ActivityPostForm.tsx` — React application module.
- `components/activity/dream.ActivityProfile.tsx` — React application module.
- `components/activity/dream.TierBadge.tsx` — React application module.
- `components/ads/dream.AdUnit.tsx` — React application module.
- `components/ads/dream.SkipCreditBalance.tsx` — React application module.
- `components/auth/dream.PasswordField.tsx` — React application module.
- `components/branding/dream.DreamEnginLogo.tsx` — React application module.
- `components/branding/dream.LogoHero.tsx` — React application module.
- `components/branding/dream.Nav.tsx` — React application module.
- `components/connectors/dream.AddSliceSheet.tsx` — React application module.
- `components/connectors/dream.ConnectDreamPrompt.tsx` — React application module.
- `components/connectors/dream.ConnectorRow.tsx` — React application module.
- `components/connectors/dream.NoSlotDialog.tsx` — React application module.
- `components/connectors/dream.PlacementMode.tsx` — React application module.
- `components/connectors/dream.widget.ConnectWidgetPrompt.tsx` — React application module.
- `components/connectors/dream.widget.ConnectorWidgetPicker.tsx` — React application module.
- `components/contentengin/AnimationPanel.tsx` — React application module.
- `components/contentengin/AssetPreview3D.tsx` — React application module.
- `components/contentengin/ContentEnginStudio.tsx` — React application module.
- `components/contentengin/ExportPanel.tsx` — React application module.
- `components/contentengin/MaterialEditor.tsx` — React application module.
- `components/contentengin/PartTreeEditor.tsx` — React application module.
- `components/contentengin/PhotoReferencePanel.tsx` — React application module.
- `components/contentengin/RecipeEditor.tsx` — React application module.
- `components/contentengin/RiggingPanel.tsx` — React application module.
- `components/core/dream.CoreDream.tsx` — React application module.
- `components/customize/dream.GlobalCustomizeUI.tsx` — React application module.
- `components/customize/dream.bar.CustomizeModeBar.tsx` — React application module.
- `components/customize/dream.bar.CustomizeToolbar.tsx` — React application module.
- `components/customize/panels/dream.panel.ColorPanel.tsx` — React application module.
- `components/customize/panels/dream.panel.EffectsPanel.tsx` — React application module.
- `components/customize/panels/dream.panel.FontPanel.tsx` — React application module.
- `components/customize/panels/dream.panel.LayoutPanel.tsx` — React application module.
- `components/daydream/dream.CodeDreamIDE.tsx` — React application module.
- `components/daydream/dream.DiffViewer.tsx` — React application module.
- `components/daydream/dream.JourneyTrail.tsx` — React application module.
- `components/daydream/dream.LabDreamIDE.tsx` — React application module.
- `components/daydream/dream.NGNEngin.tsx` — React application module.
- `components/daydream/dream.OpenDaydreamSideBButton.tsx` — React application module.
- `components/daydream/dream.StandaloneEnginSurface.tsx` — React application module.
- `components/daydream/dream.constellationmap.tsx` — React application module.
- `components/daydream/dream.shell.DaydreamShell.tsx` — React application module.
- `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` — React application module.
- `components/daydream/starmaker/dream.panel.CompingPanel.tsx` — React application module.
- `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx` — React application module.
- `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx` — React application module.
- `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` — React application module.
- `components/draggable/dream.DraggableModule.tsx` — React application module.
- `components/dream.AIAssistant.tsx` — React application module.
- `components/dream.AudioVisualizer3D.tsx` — React application module.
- `components/dream.BoogieWarningBanner.tsx` — React application module.
- `components/dream.BrandLogo.tsx` — React application module.
- `components/dream.CommandPalette.tsx` — React application module.
- `components/dream.CommandPaletteMount.tsx` — React application module.
- `components/dream.CreatePostModal.tsx` — React application module.
- `components/dream.DrEamsModeToggle.tsx` — React application module.
- `components/dream.DrEamsVoiceAssistant.tsx` — React application module.
- `components/dream.DragToAnchorClose.tsx` — React application module.
- `components/dream.FeedCard.tsx` — React application module.
- `components/dream.ForgeDreamCanvas.tsx` — React application module.
- `components/dream.GlobalOverlays.tsx` — React application module.
- `components/dream.HeroSprite.tsx` — React application module.
- `components/dream.HomeFeed.tsx` — React application module.
- `components/dream.IconSelector.tsx` — React application module.
- `components/dream.InnerDreamsButton.tsx` — React application module.
- `components/dream.KonamiDream.tsx` — React application module.
- `components/dream.LandingHero.tsx` — React application module.
- `components/dream.LedgerChart.tsx` — React application module.
- `components/dream.MessagesClient.tsx` — React application module.
- `components/dream.NotificationCenter.tsx` — React application module.
- `components/dream.OSShellActivator.tsx` — React application module.
- `components/dream.PhysicsLab.tsx` — React application module.
- `components/dream.ProfileEditor.tsx` — React application module.
- `components/dream.ProfileShareButton.tsx` — React application module.
- `components/dream.ProfileSpace.tsx` — React application module.
- `components/dream.PullToRefresh.tsx` — React application module.
- `components/dream.ShrunkMode.tsx` — React application module.
- `components/dream.SkeletonLoaders.tsx` — React application module.
- `components/dream.ThemeApplicator.tsx` — React application module.
- `components/dream.ThemeToggle.tsx` — React application module.
- `components/dream.ToastSystem.tsx` — React application module.
- `components/dream.VoidThemeToggle.tsx` — React application module.
- `components/dream.panel.ChildSafetyPanel.tsx` — React application module.
- `components/dream.panel.IDariPanel.tsx` — React application module.
- `components/dream.universal_asset_registry.tsx` — React application module.
- `components/dream.widget.AnchorWidget.tsx` — React application module.
- `components/dream.widget.ProfileWidgetBlock.tsx` — React application module.
- `components/dream.widget.WidgetBubble.tsx` — React application module.
- `components/dreamengin/dream.CanvasDropZone.tsx` — React application module.
- `components/dreamengin/dream.DREAMenginOS.tsx` — React application module.
- `components/dreamengin/dream.DrEamsCanvas.tsx` — React application module.
- `components/dreamengin/dream.HomeControls.tsx` — React application module.
- `components/dreamengin/dream.bar.DrEamsSearchBar.tsx` — React application module.
- `components/dreamengin/dream.menu.NexusMenu.tsx` — React application module.
- `components/dreamengin/dream.menu.OutdreamMenu.tsx` — React application module.
- `components/dreamengin/dream.overlay.ViewAllDreamsOverlay.tsx` — React application module.
- `components/dreamengin/dream.panel.CrossEnginStatusPanel.tsx` — React application module.
- `components/dreamengin/dream.panel.DrEamsPanel.tsx` — React application module.
- `components/dreamengin/dream.scene.BabylonGameScene.tsx` — React application module.
- `components/dreamengin/dream.scene.DrEamsScene.tsx` — React application module.
- `components/dreamengin/dream.scene.PortfolioOptimizationScene.tsx` — React application module.
- `components/dreamengin/dream.shell.EnginShell.tsx` — React application module.
- `components/dreamengin/dream.widget.AppearanceWidget.tsx` — React application module.
- `components/dreamengin/dreamsurface.dreamengin.tsx` — React application module.
- `components/dreamengin/engine/math.ts` — TypeScript/JavaScript application module.
- `components/dreamengin/engine/types.ts` — TypeScript/JavaScript application module.
- `components/dreamnav/dream.DreamNavControls.tsx` — React application module.
- `components/dreamnav/dreamsurface.dreamnav.tsx` — React application module.
- `components/dreamr/dream.CloseFriendsSettings.tsx` — React application module.
- `components/dreamr/dream.panel.DreamRChannelPanel.tsx` — React application module.
- `components/dreamr/dream.panel.DreamRCreatorPanel.tsx` — React application module.
- `components/dreams/dream.DraggableDream.tsx` — React application module.
- `components/dreams/dream.GlobalDragLayer.tsx` — React application module.
- `components/dreams/dream.PlatformErrorReporter.tsx` — React application module.
- `components/dreams/dream.SlideOverPanel.tsx` — React application module.
- `components/dreams/dream.connectorlayer.tsx` — React application module.
- `components/dreams/dream.featurelayer.tsx` — React application module.
- `components/dreams/dream.outputlayer.tsx` — React application module.
- `components/dreams/dream.panel.RuntimeMemoryHUD.tsx` — React application module.
- `components/dreams/dream.shell.DreamShell.tsx` — React application module.
- `components/dreams/dream.shell.SharedDreamShell.tsx` — React application module.
- `components/dreams/dream.widget.SuperDreamWidget.tsx` — React application module.
- `components/dreams/dream.window.JourneyDreamWindow.tsx` — React application module.
- `components/dreams/dreamsurface.dreamspace.tsx` — React application module.
- `components/dreams/dreamsurface.shell.tsx` — React application module.
- `components/dreams/dreamsurface.window.tsx` — React application module.
- `components/engines/brand/dream.BrandEnginApp.tsx` — React application module.
- `components/engines/brand/index.ts` — TypeScript/JavaScript application module.
- `components/engines/brand/panels/dream.panel.CampaignsPanel.tsx` — React application module.
- `components/engines/brand/panels/dream.panel.IdentityPanel.tsx` — React application module.
- `components/engines/code/dream.CodeEnginApp.tsx` — React application module.
- `components/engines/code/index.ts` — TypeScript/JavaScript application module.
- `components/engines/code/panels/dream.panel.AIPanel.tsx` — React application module.
- `components/engines/code/panels/dream.panel.NotebookPanel.tsx` — React application module.
- `components/engines/code/panels/dream.panel.ProjectsPanel.tsx` — React application module.
- `components/engines/create/dream.CreateEnginApp.tsx` — React application module.
- `components/engines/create/index.ts` — TypeScript/JavaScript application module.
- `components/engines/create/panels/dream.panel.CalendarPanel.tsx` — React application module.
- `components/engines/create/panels/dream.panel.EditorPanel.tsx` — React application module.
- `components/engines/create/panels/dream.panel.QueuePanel.tsx` — React application module.
- `components/engines/games/dream.GameEnginApp.tsx` — React application module.
- `components/engines/games/index.ts` — TypeScript/JavaScript application module.
- `components/engines/games/panels/dream.panel.BuilderPanel.tsx` — React application module.
- `components/engines/games/panels/dream.panel.LibraryPanel.tsx` — React application module.
- `components/engines/games/panels/dream.panel.ScoresPanel.tsx` — React application module.
- `components/engines/index.ts` — TypeScript/JavaScript application module.
- `components/engines/lab/dream.LabEnginApp.tsx` — React application module.
- `components/engines/lab/index.ts` — TypeScript/JavaScript application module.
- `components/engines/lab/panels/dream.panel.DataVizPanel.tsx` — React application module.
- `components/engines/lab/panels/dream.panel.ExperimentsPanel.tsx` — React application module.
- `components/engines/lab/panels/dream.panel.QuantumPanel.tsx` — React application module.
- `components/engines/music/dream.MusicEnginApp.tsx` — React application module.
- `components/engines/music/index.ts` — TypeScript/JavaScript application module.
- `components/engines/music/panels/dream.panel.ArrangePanel.tsx` — React application module.
- `components/engines/music/panels/dream.panel.MusicLibraryPanel.tsx` — React application module.
- `components/engines/music/panels/dream.panel.StudioPanel.tsx` — React application module.
- `components/engines/portfolio/dream.PortfolioEnginApp.tsx` — React application module.
- `components/engines/portfolio/index.ts` — TypeScript/JavaScript application module.
- `components/engines/portfolio/panels/dream.panel.AssetsPanel.tsx` — React application module.
- `components/engines/portfolio/panels/dream.panel.OptimizePanel.tsx` — React application module.
- `components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel.tsx` — React application module.
- `components/engines/render/dream.RenderServiceDiagnostics.tsx` — React application module.
- `components/engines/render/index.ts` — TypeScript/JavaScript application module.
- `components/engines/shared/dream.EnginProvider.tsx` — React application module.
- `components/engines/shared/dream.EnginRuleSet.ts` — TypeScript/JavaScript application module.
- `components/engines/shared/dream.bar.EnginNavBar.tsx` — React application module.
- `components/engines/shared/dream.makeEnginApp.tsx` — React application module.
- `components/engines/shared/dream.shell.EnginAppShell.tsx` — React application module.
- `components/engines/shared/index.ts` — TypeScript/JavaScript application module.
- `components/feed/dream.AlgorithmEngine.tsx` — React application module.
- `components/feed/dream.CommentSection.tsx` — React application module.
- `components/feed/dream.FeedVideoCard.tsx` — React application module.
- `components/feed/dream.FollowButton.tsx` — React application module.
- `components/feed/dream.FollowOnboarding.tsx` — React application module.
- `components/feeds/dream.widget.EmbedFeedWidget.tsx` — React application module.
- `components/forge/dream.EngineBuilderCanvas.tsx` — React application module.
- `components/forge/dream.panel.AIBuilderPanel.tsx` — React application module.
- `components/forge/dream.widget.ForgeMomentumWidget.tsx` — React application module.
- `components/gameengin/dream.CartridgeRegistryBootstrap.tsx` — React application module.
- `components/gameengin/dream.CrashReportModal.tsx` — React application module.
- `components/gameengin/dream.cartridge.CartridgeBrowser.tsx` — React application module.
- `components/gameengin/dream.cartridge.CartridgeErrorBoundary.tsx` — React application module.
- `components/gameengin/dream.cartridge.CartridgeLauncher.tsx` — React application module.
- `components/gameengin/dream.cartridge.FeaturedCartridges.tsx` — React application module.
- `components/gameengin/input/DualSenseManager.ts` — TypeScript/JavaScript application module.
- `components/games/_fx/canvasFx.ts` — TypeScript/JavaScript application module.
- `components/games/dream.AvenueOfMirrors.tsx` — React application module.
- `components/games/dream.BabylonSideScroller.tsx` — React application module.
- `components/games/dream.DefuseRitual.tsx` — React application module.
- `components/games/dream.EchoArena.tsx` — React application module.
- `components/games/dream.EnginFracture.tsx` — React application module.
- `components/games/dream.GameController.module.css` — application style source.
- `components/games/dream.GameController.tsx` — React application module.
- `components/games/dream.GamesHub.tsx` — React application module.
- `components/games/dream.Glassfall.tsx` — React application module.
- `components/games/dream.Leaderboard.tsx` — React application module.
- `components/games/dream.LexiconSolitaire.tsx` — React application module.
- `components/games/dream.MadMaxiWildfall.tsx` — React application module.
- `components/games/dream.NeonDrift.tsx` — React application module.
- `components/games/dream.NiteFlyerSolarHymn.tsx` — React application module.
- `components/games/dream.NullCathedral.tsx` — React application module.
- `components/games/dream.RecordingControls.tsx` — React application module.
- `components/games/dream.SerpentSiege.tsx` — React application module.
- `components/games/dream.VoidlineGP.tsx` — React application module.
- `components/games/dream.hud.GameHUD.tsx` — React application module.
- `components/games/dream.hud.LegacyGameHUD.tsx` — React application module.
- `components/games/dream.hud.MobileGameHUD.module.css` — application style source.
- `components/games/dream.hud.MobileGameHUD.tsx` — React application module.
- `components/games/dream.remote.GameRemote.tsx` — React application module.
- `components/games/dream.remote.GameRemoteSurface.tsx` — React application module.
- `components/games/dream.remote.LegacyGameRemote.tsx` — React application module.
- `components/games/madmaxi/audio.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/authoredZonePacks.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/config.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/dream.MadmaxiGame.tsx` — React application module.
- `components/games/madmaxi/index.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/levels.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/materials.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/types.ts` — TypeScript/JavaScript application module.
- `components/games/madmaxi/vfx.ts` — TypeScript/JavaScript application module.
- `components/home/dream.ActiveModuleSurface.tsx` — React application module.
- `components/home/dream.DaydreamPulseStrip.tsx` — React application module.
- `components/home/dream.FlagshipEnginesStrip.tsx` — React application module.
- `components/home/dream.NeuralSeamCanvas.tsx` — React application module.
- `components/home/dream.bar.GlobalDreamBar.tsx` — React application module.
- `components/home/dream.bar.PersistentDreamBar.tsx` — React application module.
- `components/home/dream.widget.DreamWidget.tsx` — React application module.
- `components/icons/sheet.ts` — TypeScript/JavaScript application module.
- `components/idari/dream.PlatformHealth.tsx` — React application module.
- `components/landing/dream.LandingNav.tsx` — React application module.
- `components/landing/dream.LandingProductStatement.tsx` — React application module.
- `components/landing/dream.scene.UniverseField.tsx` — React application module.
- `components/marketplace/dream.MarketplaceListingCard.tsx` — React application module.
- `components/marketplace/dream.MarketplaceRequestButton.tsx` — React application module.
- `components/menus/dream.menu.DreamRadialMenu.tsx` — React application module.
- `components/menus/dream.menu.DualBottomMenu.tsx` — React application module.
- `components/menus/dream.menu.RadialMenu.tsx` — React application module.
- `components/menus/dream.menu.SystemRadialMenu.tsx` — React application module.
- `components/menus/dream.panel.MenuPanel.tsx` — React application module.
- `components/messaging/dream.BoardComposer.tsx` — React application module.
- `components/music/dream.SoundRecorder.tsx` — React application module.
- `components/onboarding/dream.OnboardingTip.tsx` — React application module.
- `components/optimizer/dream.scene.BabylonOptimizeroScene.tsx` — React application module.
- `components/overlays/dream.RootStatusScreen.tsx` — React application module.
- `components/panels/dream.panel.AlgorithmPanel.tsx` — React application module.
- `components/panels/dream.panel.AppearancePanel.tsx` — React application module.
- `components/panels/dream.panel.ConnectorsPanel.tsx` — React application module.
- `components/panels/dream.panel.ControlsPanel.tsx` — React application module.
- `components/panels/dream.panel.DataPanel.tsx` — React application module.
- `components/panels/dream.panel.FeedPanel.tsx` — React application module.
- `components/panels/dream.panel.FeedSettingsPanel.tsx` — React application module.
- `components/panels/dream.panel.HelpPanel.tsx` — React application module.
- `components/panels/dream.panel.MarketplacePanel.tsx` — React application module.
- `components/panels/dream.panel.PrivacyPanel.tsx` — React application module.
- `components/panels/dream.panel.ProfilePanel.tsx` — React application module.
- `components/panels/dream.panel.SafetyPanel.tsx` — React application module.
- `components/panels/dream.panel.SettingsPanel.tsx` — React application module.
- `components/panels/dream.panel.WidgetsPanel.tsx` — React application module.
- `components/panels/panelTypes.ts` — TypeScript/JavaScript application module.
- `components/profile/dream.EditableAvatar.tsx` — React application module.
- `components/profile/dream.ProfileCanvas.tsx` — React application module.
- `components/profile/dream.ProfileCustomizeButton.tsx` — React application module.
- `components/profile/dream.widget.ProfileWidgetGrid.tsx` — React application module.
- `components/providers/dream.AppSurfaceShell.tsx` — React application module.
- `components/providers/dream.GodTierProvider.tsx` — React application module.
- `components/providers/dream.ThemeProvider.tsx` — React application module.
- `components/runtime/dream.DualRuntimeContainer.tsx` — React application module.
- `components/runtime/dream.RuntimeView.tsx` — React application module.
- `components/runtime/dream.shell.RuntimeShell.tsx` — React application module.
- `components/shaders/dream.LightningWing.tsx` — React application module.
- `components/shaders/dream.NeonGlow.tsx` — React application module.
- `components/shaders/dream.Refractor.tsx` — React application module.
- `components/shaders/index.ts` — TypeScript/JavaScript application module.
- `components/shared-dream/dream.InviteFlow.tsx` — React application module.
- `components/shared-dream/dream.SharedDreamCanvas.tsx` — React application module.
- `components/shared-dream/dream.SharedDreamProvider.tsx` — React application module.
- `components/shared-dream/dream.SharedDreamRuntime.tsx` — React application module.
- `components/shared-dream/index.ts` — TypeScript/JavaScript application module.
- `components/spatial/dream.PixiPhysicsLayer.tsx` — React application module.
- `components/spatial/dream.ProfileSpace.tsx` — React application module.
- `components/spatial/dream.shell.EnhancedSpatialShell.tsx` — React application module.
- `components/three/dream.scene.tsx` — React application module.
- `components/three/index.ts` — TypeScript/JavaScript application module.
- `components/ui-system/CustomizeModeContext.tsx` — React application module.
- `components/ui-system/responsive.ts` — TypeScript/JavaScript application module.
- `components/ui-system/runtimeViewport.ts` — TypeScript/JavaScript application module.
- `components/ui-system/skin-engine.ts` — TypeScript/JavaScript application module.
- `components/ui-system/theme-engine.ts` — TypeScript/JavaScript application module.
- `components/ui-system/theme.ts` — TypeScript/JavaScript application module.
- `components/ui/dream.AuthenticatedPageHeader.tsx` — React application module.
- `components/ui/dream.DreamWord.tsx` — React application module.
- `components/ui/dream.IconList.tsx` — React application module.
- `components/ui/dream.InfinityIcon.tsx` — React application module.
- `components/ui/dream.PlatformBadge.tsx` — React application module.
- `components/ui/dream.SheetIcon.tsx` — React application module.
- `components/ui/dream.SocialShareSheet.tsx` — React application module.
- `components/universal-editor/dream.UniversalEditor.tsx` — React application module.
- `components/universal-editor/dream.UniversalEditorWrapper.tsx` — React application module.
- `components/universal-editor/index.ts` — TypeScript/JavaScript application module.
- `components/universal-editor/useTapHoldMove.ts` — TypeScript/JavaScript application module.
- `components/universe/dream.node-cluster.tsx` — React application module.
- `components/universe/dream.shell.universe-shell.tsx` — React application module.
- `components/universe/dream.universe-card.tsx` — React application module.
- `components/universe/index.ts` — TypeScript/JavaScript application module.
- `components/warp/dream.WarpCanvas.tsx` — React application module.
- `components/webgpu/dream.WebGPUShowcase.tsx` — React application module.
- `components/webgpu/neuralPostProcess.ts` — TypeScript/JavaScript application module.
- `components/webgpu/renderer.ts` — TypeScript/JavaScript application module.
- `components/webgpu/shaders.ts` — TypeScript/JavaScript application module.
- `components/widgets/dream.AddDreamCTA.tsx` — React application module.
- `components/widgets/dream.ConfigureSheet.tsx` — React application module.
- `components/widgets/dream.EditModeBanner.tsx` — React application module.
- `components/widgets/dream.EditModeProvider.tsx` — React application module.
- `components/widgets/dream.widget.PlayMediaWidget.tsx` — React application module.
- `components/widgets/dream.widget.UniversalWidget.tsx` — React application module.
- `components/widgets/dream.widget.WidgetCard.tsx` — React application module.
- `components/widgets/dream.widget.WidgetLibrary.tsx` — React application module.
- `components/widgets/dream.widget.WidgetPlaceholder.tsx` — React application module.
- `components/widgets/dream.widget.WidgetShell.tsx` — React application module.
- `components/widgets/dream.widget.WidgetSurface.tsx` — React application module.

</details>

## Coresurfaces
Coresurfaces is a user-facing application surface subsystem composed of React components and presentation logic. It depends on Backend, System, Core & CoreSurfaces, Dreams, Widgets, Windows & Surfaces, User-Facing Modularity.
### Responsibilities
- Renders production surfaces/components: EditProfileDreamPage, ViewProfilePage
### Key Modules
- coresurfaces/dreamsurface.EditProfileDream.tsx — EditProfileDreamPage (behavior evidence; important exports: EditProfileDreamPage; large behavior file)
- coresurfaces/dreamsurface.ViewProfile.tsx — ViewProfilePage (behavior evidence; important exports: ViewProfilePage; large behavior file)
- coresurfaces/home/buttons/contextual-home.ts — RuntimeHomeCallbacks (behavior evidence; important exports: RuntimeHomeCallbacks)
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **User-Facing Modularity**
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreams, Widgets, Windows & Surfaces
- Depends on User-Facing Modularity
### Public Surfaces
**Production Components:**
`EditProfileDreamPage`, `ViewProfilePage`
### Notable Abstractions
- `RuntimeHomeCallbacks` — interface in `coresurfaces/home/buttons/contextual-home.ts`
### Capabilities
- Important contract surface: RuntimeHomeCallbacks
#### Application Source Structure
```text
└── coresurfaces
    ├── dreamsurface.EditProfileDream.tsx
    ├── dreamsurface.ViewProfile.tsx
    └── home
        └── buttons
            ├── button-groups.ts
            └── contextual-home.ts
```
<details><summary>Coresurfaces application source index (4 files)</summary>

- `coresurfaces/dreamsurface.EditProfileDream.tsx` — React application module.
- `coresurfaces/dreamsurface.ViewProfile.tsx` — React application module.
- `coresurfaces/home/buttons/button-groups.ts` — TypeScript/JavaScript application module.
- `coresurfaces/home/buttons/contextual-home.ts` — TypeScript/JavaScript application module.

</details>

## Daydreams
Daydreams is a user-facing application surface subsystem composed of React components and presentation logic. It exposes useDaydreamPersistence, useDaydreamState as reusable hooks. It depends on Backend, System, Core & CoreSurfaces, DreamSpace, The Engins.
### Responsibilities
- Renders production surfaces/components: BrandDaydreamPage, CodeDaydreamPage, CreateDaydreamPage, GamesDaydreamPage, LabDaydreamPage, MusicArtistHubPage
- GameEngin cartridge/runtime interaction or playable system behavior
### Key Modules
- daydreams/shared/useDaydreamPersistence.ts — useDaydreamPersistence, UseDaydreamPersistenceOptions, UseDaydreamPersistenceReturn (behavior evidence; important exports: useDaydreamPersistence, UseDaydreamPersistenceOptions, UseDaydreamPersistenceReturn; important hook)
- daydreams/shared/useDaydreamState.ts — useDaydreamState, DaydreamSide, DaydreamStatePayload (behavior evidence; important exports: useDaydreamState, DaydreamSide, DaydreamStatePayload; important hook)
- daydreams/code/page.tsx — CodeDaydreamPage (behavior evidence; route surface; important exports: CodeDaydreamPage)
- daydreams/create/page.tsx — CreateDaydreamPage (behavior evidence; route surface; important exports: CreateDaydreamPage)
- daydreams/games/page.tsx — GamesDaydreamPage (behavior evidence; route surface; important exports: GamesDaydreamPage)
- daydreams/lab/page.tsx — LabDaydreamPage (behavior evidence; route surface; important exports: LabDaydreamPage)
- daydreams/brand/page.tsx — BrandDaydreamPage (behavior evidence; route surface; important exports: BrandDaydreamPage)
- daydreams/music/page.tsx (behavior evidence; route surface; large behavior file)
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **DreamSpace**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on DreamSpace
- Depends on The Engins
- Depends on User-Facing Modularity
### Public Surfaces
**Production Components:**
`BrandDaydreamPage`, `CodeDaydreamPage`, `CreateDaydreamPage`, `GamesDaydreamPage`, `LabDaydreamPage`, `MusicArtistHubPage`
### Notable Abstractions
- `UseDaydreamPersistenceOptions` — interface in `daydreams/shared/useDaydreamPersistence.ts`
- `UseDaydreamPersistenceReturn` — interface in `daydreams/shared/useDaydreamPersistence.ts`
- `DaydreamSide` — type in `daydreams/shared/useDaydreamState.ts`
- `DaydreamStatePayload` — type in `daydreams/shared/useDaydreamState.ts`
- `UseDaydreamStateOptions` — interface in `daydreams/shared/useDaydreamState.ts`
- `UseDaydreamStateReturn` — interface in `daydreams/shared/useDaydreamState.ts`
- `useDaydreamPersistence` — hook
- `useDaydreamState` — hook
### Capabilities
- Exposes hooks: useDaydreamPersistence, useDaydreamState
- Important contract surface: UseDaydreamPersistenceOptions, UseDaydreamPersistenceReturn, UseDaydreamStateOptions, UseDaydreamStateReturn
- Important shared type vocabulary: DaydreamSide, DaydreamStatePayload
#### Application Source Structure
```text
└── daydreams
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
<details><summary>Daydreams application source index (8 files)</summary>

- `daydreams/brand/page.tsx` — route page surface.
- `daydreams/code/page.tsx` — route page surface.
- `daydreams/create/page.tsx` — route page surface.
- `daydreams/games/page.tsx` — route page surface.
- `daydreams/lab/page.tsx` — route page surface.
- `daydreams/music/page.tsx` — route page surface.
- `daydreams/shared/useDaydreamPersistence.ts` — TypeScript/JavaScript application module.
- `daydreams/shared/useDaydreamState.ts` — TypeScript/JavaScript application module.

</details>

## Dreamdmbar
Dreamdmbar is a user-facing application surface subsystem composed of React components and presentation logic. It exposes useDreamBarContext, useDreamDMConversations, useDreamDMDraft as reusable hooks. It depends on Backend, System, Core & CoreSurfaces, The Engins, User-Facing Modularity.
### Responsibilities
- Renders production surfaces/components: DreamDMBar, BAR_H, NAV_H, DreamSystemProvider, DEFAULT_BAR_INTENT, DEFAULT_WORLD_FOCUS, +24 more
- Runtime orchestration, capability routing, and Engin lifecycle coordination
- Messaging, conversations, notifications, realtime channels, or presence
### Key Modules
- dreamdmbar/runtime/DreamSystemContext.tsx — DreamSystemProvider, BarIntentMode, BarIntent (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useDreamBarContext.ts — detectSurface, resolveIntentOverride, useDreamBarContext (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useDreamDMConversations.ts — useDreamDMConversations, DMConversation (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useDreamDMMessages.ts — useDreamDMMessages, DMMessage (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useDreamSearch.ts — useDreamSearch, UseDreamSearchReturn (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useModuleBarIntent.ts — useModuleBarIntent, UseModuleBarIntentResult (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/notifications/notificationHelpers.ts — mapNotificationType, getNotificationTitle, getNotificationActionUrl (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/notifications/useNotifications.ts — useNotifications, UseNotificationsReturn (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useDreamDMDraft.ts — useDreamDMDraft (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useNotifications.ts — useNotifications (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/dreamsurface.dreamdmbar.tsx — DreamDMBar (important path; behavior evidence; DreamDMBar layer)
- dreamdmbar/hooks/useMessagingCore.ts — SendMessageParams (important path; behavior evidence; DreamDMBar layer)
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on The Engins
- Depends on User-Facing Modularity
- Depends on utils
### Public Surfaces
**Production Components:**
`BAR_FLING_LINE_RATIO`, `BAR_FLING_TO_BOTTOM_VELOCITY_THRESHOLD_PX_PER_MS`, `BAR_FLING_TO_TOP_MIN_DRAG_PX`, `BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS`, `BAR_H`, `BAR_SNAP_TO_TOP_HEIGHT_RATIO`, `BAR_SNAP_TO_TOP_THRESHOLD_PX`, `DEFAULT_BAR_INTENT`, `DEFAULT_SPLIT_RATIO`, `DEFAULT_WORLD_FOCUS`, +20 more
### Notable Abstractions
- `DreamBarSurface` — type in `dreamdmbar/hooks/useDreamBarContext.ts`
- `DreamBarContext` — interface in `dreamdmbar/hooks/useDreamBarContext.ts`
- `DMConversation` — interface in `dreamdmbar/hooks/useDreamDMConversations.ts`
- `DMMessage` — interface in `dreamdmbar/hooks/useDreamDMMessages.ts`
- `UseDreamSearchReturn` — interface in `dreamdmbar/hooks/useDreamSearch.ts`
- `SendMessageParams` — interface in `dreamdmbar/hooks/useMessagingCore.ts`
- `UseModuleBarIntentResult` — interface in `dreamdmbar/hooks/useModuleBarIntent.ts`
- `DbNotificationContent` — type in `dreamdmbar/notifications/notificationHelpers.ts`
- `DbNotificationRow` — interface in `dreamdmbar/notifications/notificationHelpers.ts`
- `UiNotificationType` — type in `dreamdmbar/notifications/notificationHelpers.ts`
- `UiNotification` — interface in `dreamdmbar/notifications/notificationHelpers.ts`
- `UseNotificationsReturn` — interface in `dreamdmbar/notifications/useNotifications.ts`
- `useDreamBarContext` — hook
- `useDreamDMConversations` — hook
- `useDreamDMDraft` — hook
- `useDreamDMMessages` — hook
- `useDreamSearch` — hook
- `useDreamSystem` — hook
- `useMessagingCore` — hook
- `useModuleBarIntent` — hook
### Capabilities
- Exposes hooks: useDreamBarContext, useDreamDMConversations, useDreamDMDraft, useDreamDMMessages, useDreamSearch, useDreamSystem, +3 more
- Important contract surface: DreamBarContext, DMConversation, DMMessage, UseDreamSearchReturn, SendMessageParams
- Important shared type vocabulary: DreamBarSurface, DbNotificationContent, UiNotificationType, BarIntentMode, SurfaceAccent
- Behavior functions: detectSurface, resolveIntentOverride, mapNotificationType, getNotificationTitle, getNotificationActionUrl, extractNotificationMessage
#### Application Source Structure
```text
└── dreamdmbar
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
<details><summary>Dreamdmbar application source index (15 files)</summary>

- `dreamdmbar/dream.GlowingLight.tsx` — React application module.
- `dreamdmbar/dreamsurface.dreamdmbar.tsx` — React application module.
- `dreamdmbar/hooks/useDreamBarContext.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamDMConversations.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamDMDraft.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamDMMessages.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useDreamSearch.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useMessagingCore.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useModuleBarIntent.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/hooks/useNotifications.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/notifications/notificationHelpers.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/notifications/useNotifications.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/runtime/DreamSystemContext.tsx` — React application module.
- `dreamdmbar/runtime/barInteractions.ts` — TypeScript/JavaScript application module.
- `dreamdmbar/runtime/bridgeSeamFlow.ts` — TypeScript/JavaScript application module.

</details>

## Engine
Engine is a user-facing application surface subsystem composed of React components and presentation logic. It exposes useBrandingEnginBridge, useCodeEnginBridge, useContentEnginBridge as reusable hooks. Core abstractions are encapsulated in WebRTCCollabSession, UnsupportedProviderError, ConsentManager. It depends on Backend, System, Core & CoreSurfaces, Connectors & Live Feeds, Dreams, Widgets, Windows & Surfaces.
### Responsibilities
- Renders production surfaces/components: BOOGIEMAN_EVENT, IDENTITY, AXIOMS, VOCABULARY, CORE_SURFACES, DAYDREAM_SURFACES, +136 more
- Core abstractions: WebRTCCollabSession, UnsupportedProviderError, ConsentManager, CodeEditRingBuffer, GeometryBatcher
- Runtime orchestration, capability routing, and Engin lifecycle coordination
- AI provider integration and inference routing
- Authentication, sessions, authorization, and access control
- Messaging, conversations, notifications, realtime channels, or presence
- Feed, post, comment, ranking, or social interaction behavior
- Asset storage, upload, export, or CDN-facing pipelines
- GameEngin cartridge/runtime interaction or playable system behavior
- ContentEngin asset creation, validation, rigging, animation, or export behavior
### Key Modules
- engine/runtime/EnginDispatcher.ts — initWasmEngine, WorkerInitMessage, WorkerStopMessage (important path; behavior evidence; runtime layer)
- engine/runtime/iEngine.ts — authorizeCapability, validateManifest, createRuntimeObject (important path; behavior evidence; runtime layer)
- engine/runtime/index.ts — RegistrySlot, RegistryEntry, UniversalEngine (important path; behavior evidence; runtime layer)
- engine/runtime/useEnginBridge.ts — useCodeEnginBridge, useGameEnginBridge, useStarMakerEnginBridge (important path; behavior evidence; runtime layer)
- engine/runtime/runtimeContainer.ts — RuntimeStrategy, RuntimeContainerOptions, RuntimeContainer (important path; behavior evidence; runtime layer)
- engine/runtime/useDragSurface.ts — useDragSurface, UseDragSurfaceOptions, UseDragSurfaceResult (important path; behavior evidence; runtime layer)
- engine/runtime/useDualRuntime.ts — useDualRuntime, UseDualRuntimeReturn, BridgeEventHandler (important path; behavior evidence; runtime layer)
- engine/runtime/useEnginCoopSync.ts — useEnginCoopSync, UseEnginCoopSyncOptions, UseEnginCoopSyncResult (important path; behavior evidence; runtime layer)
- engine/runtime/useSharedEnginChannel.ts — useSharedEnginChannel, SharedEnginChannelOptions, SharedEnginChannelResult (important path; behavior evidence; runtime layer)
- engine/runtime/dreamOSBus.ts — isIntentEnvelope, getCapabilityDescriptor, getCapabilityChildren (important path; behavior evidence; runtime layer)
- engine/runtime/dualRuntime.ts — setRuntimeWorld, swapDominantRuntime, makeHomeDreamSpaceActive (important path; behavior evidence; runtime layer)
- engine/runtime/dualRuntimeBridge.ts — DualRuntimeChannel, ChannelEventKey, ChannelEventPayload (important path; behavior evidence; runtime layer)
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Connectors & Live Feeds**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **Runtime Orchestration**
- Depends on **The Engins**
- Depends on **The Marketplace**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Connectors & Live Feeds
- Depends on Dreams, Widgets, Windows & Surfaces
- Depends on Runtime Orchestration
### Public Surfaces
**Production Components:**
`AI_AGENTS`, `AI_ROUTES`, `AI_TRIAD`, `ALL_CANONICAL_NAMES`, `ALL_CATEGORIES`, `ALL_ENGIN_NAMES`, `AXIOMS`, `BOOGIEMAN_EVENT`, `BOOGIE_POLICY_VERSION`, `BUGS_LOG`, +114 more
### Notable Abstractions
- `UpgradeReadinessSnapshot` — interface in `engine/admin/upgrade-readiness.ts`
- `CodeEnginHostTools` — type in `engine/agentOS/hostTools.ts`
- `GameEnginAgentRole` — type in `engine/agents/agentBus.ts`
- `InnerDreamsEventType` — type in `engine/agents/agentBus.ts`
- `InnerDreamsEventDetail` — type in `engine/agents/agentBus.ts`
- `Intent` — type in `engine/agents/agentBus.ts`
- `PolicyVerdict` — type in `engine/agents/boogieManAI.ts`
- `PolicyCheck` — interface in `engine/agents/boogieManAI.ts`
- `PolicyResult` — interface in `engine/agents/boogieManAI.ts`
- `DreamWindowState` — type in `engine/agents/dreamengin.ts`
- `DreamEnginEventType` — type in `engine/agents/dreamengin.ts`
- `DreamEnginEventDetail` — interface in `engine/agents/dreamengin.ts`
- `useBrandingEnginBridge` — hook
- `useCodeEnginBridge` — hook
- `useContentEnginBridge` — hook
- `useDragSurface` — hook
- `useDreamLogoScene` — hook
- `useDreamWindowActions` — hook
- `useDreamsRuntime` — hook
- `useDualRuntime` — hook
### Capabilities
- Exposes hooks: useBrandingEnginBridge, useCodeEnginBridge, useContentEnginBridge, useDragSurface, useDreamLogoScene, useDreamWindowActions, +22 more
- Important contract surface: UpgradeReadinessSnapshot, PolicyCheck, PolicyResult, DreamEnginEventDetail, LoopSnapshotSummary
- Important shared type vocabulary: CodeEnginHostTools, GameEnginAgentRole, InnerDreamsEventType, InnerDreamsEventDetail, Intent
- Behavior functions: createUpgradeReadinessSnapshot, emitGameEnginAgentEvent, checkPolicy, getDrEamsMode, setDrEamsMode, onDrEamsModeChange
#### Application Source Structure
```text
└── engine
    ├── activeModulesStore.ts
    ├── admin
    │   ├── lockout.ts
    │   └── upgrade-readiness.ts
    ├── agentOS
    │   └── hostTools.ts
    ├── agentOS.ts
    ├── agents
    │   ├── adari.ts
    │   ├── agentBus.ts
    │   ├── boogieManAI.ts
    │   ├── drEamsMode.ts
    │   ├── dreamengin.ts
    │   ├── idari.ts
    │   ├── idariLoop.ts
    │   ├── teachBus.ts
    │   └── uiActions.ts
    ├── animation
    │   └── gsap
    │       ├── gsap.ts
    │       ├── useGsapEntrance.ts
    │       ├── useGsapFlip.ts
    │       └── useGsapScrollReveal.ts
    ├── api
    │   └── route.ts
    ├── artifacts
    │   └── artifactStore.ts
    ├── assets
    │   └── engineAssets.ts
    ├── collaboration
    │   └── index.ts
    ├── connectors
    │   ├── connectorRegistry.ts
    │   ├── deliveryStrategy.ts
    │   ├── installFlow.ts
    │   ├── normalise.ts
    │   ├── providers
    │   │   ├── bluesky.ts
    │   │   ├── devto.ts
    │   │   ├── facebook.ts
    │   │   ├── github.ts
    │   │   ├── hackernews.ts
    │   │   ├── instagram.ts
    │   │   ├── mastodon.ts
    │   │   ├── medium.ts
    │   │   ├── nostr.ts
    │   │   ├── pinterest.ts
    │   │   ├── podcast.ts
    │   │   ├── reddit.ts
    │   │   ├── shellhub.ts
    │   │   ├── substack.ts
    │   │   ├── tiktok.ts
    │   │   ├── tumblr.ts
    │   │   ├── twitter.ts
    │   │   └── youtube.ts
    │   ├── reconcile.ts
    │   ├── syncDispatch.ts
    │   ├── webhookVerification.ts
    │   └── youtube.ts
    ├── consent
    │   └── consentManager.ts
    ├── data-transform.ts
    ├── dev-bypass.ts
    ├── dream-window
    │   ├── DreamWindowLifecycle.ts
    │   ├── connectionVerbs.ts
    │   ├── enginConnectionNetwork.ts
    │   ├── index.ts
    │   ├── runtimeRegion.ts
    │   └── useDreamWindowActions.ts
    ├── dreamnav
    │   ├── delta.ts
    │   ├── gctAssist.ts
    │   ├── gestures6.ts
    │   ├── path.ts
    │   └── tau.ts
    ├── dreams
    │   ├── DreamRegistry.tsx
    │   ├── drag.ts
    │   ├── dreamIntentBus.ts
    │   ├── profileProjection.ts
    │   ├── types.ts
    │   └── useDreamsRuntime.ts
    ├── editor
    │   └── universalEditor.ts
    ├── engin-runtime
    │   ├── EnginBaseState.ts
    │   ├── EnginCapabilities.ts
    │   ├── EnginCapabilityExecution.ts
    │   ├── EnginCapabilityScorecard.ts
    │   ├── EnginCapabilityTargets.ts
    │   ├── EnginDomainCores.ts
    │   ├── EnginEventBus.ts
    │   ├── EnginHardwareCapabilities.ts
    │   ├── EnginIOAdapter.ts
    │   ├── EnginPerformanceProbe.ts
    │   ├── EnginRuleSetContract.ts
    │   ├── EnginRuntime.ts
    │   ├── EnginRuntimeRegistry.ts
    │   ├── EnginSnapshotFingerprint.ts
    │   ├── HotRuntime.ts
    │   ├── InternalMetrics.ts
    │   ├── PremiumRuntimeQuality.ts
    │   └── index.ts
    ├── events
    │   ├── event-bus
    │   │   └── index.ts
    │   └── eventBus.ts
    ├── feature-build
    │   ├── buildCycle.ts
    │   ├── featureManifest.ts
    │   ├── index.ts
    │   └── uiQualityCriteria.ts
    ├── gct
    │   ├── anomaly-detection.ts
    │   ├── audio-fingerprint.ts
    │   ├── gct-engine.ts
    │   ├── image-search.ts
    │   ├── index.ts
… (132 more application source files)
```
<details><summary>Engine application source index (252 files)</summary>

- `engine/activeModulesStore.ts` — TypeScript/JavaScript application module.
- `engine/admin/lockout.ts` — TypeScript/JavaScript application module.
- `engine/admin/upgrade-readiness.ts` — TypeScript/JavaScript application module.
- `engine/agentOS.ts` — TypeScript/JavaScript application module.
- `engine/agentOS/hostTools.ts` — TypeScript/JavaScript application module.
- `engine/agents/adari.ts` — TypeScript/JavaScript application module.
- `engine/agents/agentBus.ts` — TypeScript/JavaScript application module.
- `engine/agents/boogieManAI.ts` — TypeScript/JavaScript application module.
- `engine/agents/drEamsMode.ts` — TypeScript/JavaScript application module.
- `engine/agents/dreamengin.ts` — TypeScript/JavaScript application module.
- `engine/agents/idari.ts` — TypeScript/JavaScript application module.
- `engine/agents/idariLoop.ts` — TypeScript/JavaScript application module.
- `engine/agents/teachBus.ts` — TypeScript/JavaScript application module.
- `engine/agents/uiActions.ts` — TypeScript/JavaScript application module.
- `engine/animation/gsap/gsap.ts` — TypeScript/JavaScript application module.
- `engine/animation/gsap/useGsapEntrance.ts` — TypeScript/JavaScript application module.
- `engine/animation/gsap/useGsapFlip.ts` — TypeScript/JavaScript application module.
- `engine/animation/gsap/useGsapScrollReveal.ts` — TypeScript/JavaScript application module.
- `engine/api/route.ts` — API route transport boundary.
- `engine/artifacts/artifactStore.ts` — TypeScript/JavaScript application module.
- `engine/assets/engineAssets.ts` — TypeScript/JavaScript application module.
- `engine/collaboration/index.ts` — TypeScript/JavaScript application module.
- `engine/connectors/connectorRegistry.ts` — TypeScript/JavaScript application module.
- `engine/connectors/deliveryStrategy.ts` — TypeScript/JavaScript application module.
- `engine/connectors/installFlow.ts` — TypeScript/JavaScript application module.
- `engine/connectors/normalise.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/bluesky.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/devto.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/facebook.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/github.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/hackernews.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/instagram.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/mastodon.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/medium.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/nostr.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/pinterest.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/podcast.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/reddit.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/shellhub.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/substack.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/tiktok.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/tumblr.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/twitter.ts` — TypeScript/JavaScript application module.
- `engine/connectors/providers/youtube.ts` — TypeScript/JavaScript application module.
- `engine/connectors/reconcile.ts` — TypeScript/JavaScript application module.
- `engine/connectors/syncDispatch.ts` — TypeScript/JavaScript application module.
- `engine/connectors/webhookVerification.ts` — TypeScript/JavaScript application module.
- `engine/connectors/youtube.ts` — TypeScript/JavaScript application module.
- `engine/consent/consentManager.ts` — TypeScript/JavaScript application module.
- `engine/data-transform.ts` — TypeScript/JavaScript application module.
- `engine/dev-bypass.ts` — TypeScript/JavaScript application module.
- `engine/dream-window/DreamWindowLifecycle.ts` — TypeScript/JavaScript application module.
- `engine/dream-window/connectionVerbs.ts` — TypeScript/JavaScript application module.
- `engine/dream-window/enginConnectionNetwork.ts` — TypeScript/JavaScript application module.
- `engine/dream-window/index.ts` — TypeScript/JavaScript application module.
- `engine/dream-window/runtimeRegion.ts` — TypeScript/JavaScript application module.
- `engine/dream-window/useDreamWindowActions.ts` — TypeScript/JavaScript application module.
- `engine/dreamnav/delta.ts` — TypeScript/JavaScript application module.
- `engine/dreamnav/gctAssist.ts` — TypeScript/JavaScript application module.
- `engine/dreamnav/gestures6.ts` — TypeScript/JavaScript application module.
- `engine/dreamnav/path.ts` — TypeScript/JavaScript application module.
- `engine/dreamnav/tau.ts` — TypeScript/JavaScript application module.
- `engine/dreams/DreamRegistry.tsx` — React application module.
- `engine/dreams/drag.ts` — TypeScript/JavaScript application module.
- `engine/dreams/dreamIntentBus.ts` — TypeScript/JavaScript application module.
- `engine/dreams/profileProjection.ts` — TypeScript/JavaScript application module.
- `engine/dreams/types.ts` — TypeScript/JavaScript application module.
- `engine/dreams/useDreamsRuntime.ts` — TypeScript/JavaScript application module.
- `engine/editor/universalEditor.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginBaseState.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginCapabilities.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginCapabilityExecution.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginCapabilityScorecard.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginCapabilityTargets.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginDomainCores.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginEventBus.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginHardwareCapabilities.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginIOAdapter.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginPerformanceProbe.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginRuleSetContract.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginRuntime.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginRuntimeRegistry.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/EnginSnapshotFingerprint.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/HotRuntime.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/InternalMetrics.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/PremiumRuntimeQuality.ts` — TypeScript/JavaScript application module.
- `engine/engin-runtime/index.ts` — TypeScript/JavaScript application module.
- `engine/events/event-bus/index.ts` — TypeScript/JavaScript application module.
- `engine/events/eventBus.ts` — TypeScript/JavaScript application module.
- `engine/feature-build/buildCycle.ts` — TypeScript/JavaScript application module.
- `engine/feature-build/featureManifest.ts` — TypeScript/JavaScript application module.
- `engine/feature-build/index.ts` — TypeScript/JavaScript application module.
- `engine/feature-build/uiQualityCriteria.ts` — TypeScript/JavaScript application module.
- `engine/gct/anomaly-detection.ts` — TypeScript/JavaScript application module.
- `engine/gct/audio-fingerprint.ts` — TypeScript/JavaScript application module.
- `engine/gct/gct-engine.ts` — TypeScript/JavaScript application module.
- `engine/gct/image-search.ts` — TypeScript/JavaScript application module.
- `engine/gct/index.ts` — TypeScript/JavaScript application module.
- `engine/gct/recommendations.ts` — TypeScript/JavaScript application module.
- `engine/generationLaw.ts` — TypeScript/JavaScript application module.
- `engine/gestures/touchGestures.ts` — TypeScript/JavaScript application module.
- `engine/gestures/useTouchGestures.ts` — TypeScript/JavaScript application module.
- `engine/identity/canonical-names.ts` — TypeScript/JavaScript application module.
- `engine/index.ts` — TypeScript/JavaScript application module.
- `engine/intelligence/continuityHelpers.ts` — TypeScript/JavaScript application module.
- `engine/intelligence/sessionContinuity.ts` — TypeScript/JavaScript application module.
- `engine/intelligence/sessionPatternEngine.ts` — TypeScript/JavaScript application module.
- `engine/intelligence/useSessionIntelligence.ts` — TypeScript/JavaScript application module.
- `engine/io.ts` — TypeScript/JavaScript application module.
- `engine/journey/journeyDots.ts` — TypeScript/JavaScript application module.
- `engine/journey/journeyInsights.ts` — TypeScript/JavaScript application module.
- `engine/journey/withJourney.ts` — TypeScript/JavaScript application module.
- `engine/ledger/ledger-data.ts` — TypeScript/JavaScript application module.
- `engine/ledger/ledger.ts` — TypeScript/JavaScript application module.
- `engine/manifests/osSubsystemManifest.ts` — TypeScript/JavaScript application module.
- `engine/marketplace/listings.ts` — TypeScript/JavaScript application module.
- `engine/marketplace/request.ts` — TypeScript/JavaScript application module.
- `engine/navigation/AnchorStateBuffer.ts` — TypeScript/JavaScript application module.
- `engine/navigation/AnchorWidgetStorage.ts` — TypeScript/JavaScript application module.
- `engine/navigation/GestureFrameComputer.ts` — TypeScript/JavaScript application module.
- `engine/navigation/GestureIntentResolver.ts` — TypeScript/JavaScript application module.
- `engine/navigation/NavStateBuffer.ts` — TypeScript/JavaScript application module.
- `engine/navigation/PointerEventCapture.ts` — TypeScript/JavaScript application module.
- `engine/navigation/ReturnStack.ts` — TypeScript/JavaScript application module.
- `engine/navigation/SpatialNavigationEngine.ts` — TypeScript/JavaScript application module.
- `engine/navigation/StructureLedger.ts` — TypeScript/JavaScript application module.
- `engine/navigation/TransformSolver.ts` — TypeScript/JavaScript application module.
- `engine/navigation/WidgetInstanceMemory.ts` — TypeScript/JavaScript application module.
- `engine/navigation/anchorField.ts` — TypeScript/JavaScript application module.
- `engine/navigation/dream-state.ts` — TypeScript/JavaScript application module.
- `engine/navigation/index.ts` — TypeScript/JavaScript application module.
- `engine/navigation/manifold.ts` — TypeScript/JavaScript application module.
- `engine/navigation/physics.ts` — TypeScript/JavaScript application module.
- `engine/navigation/quaternion.ts` — TypeScript/JavaScript application module.
- `engine/navigation/useNavigation.ts` — TypeScript/JavaScript application module.
- `engine/observability/collector.ts` — TypeScript/JavaScript application module.
- `engine/observability/correlator.ts` — TypeScript/JavaScript application module.
- `engine/observability/healthTrend.ts` — TypeScript/JavaScript application module.
- `engine/observability/immediateAction.ts` — TypeScript/JavaScript application module.
- `engine/observability/index.ts` — TypeScript/JavaScript application module.
- `engine/observability/otel.ts` — TypeScript/JavaScript application module.
- `engine/observability/otelBridge.ts` — TypeScript/JavaScript application module.
- `engine/observability/rootCauseAnalyzer.ts` — TypeScript/JavaScript application module.
- `engine/offline/offlineCache.ts` — TypeScript/JavaScript application module.
- `engine/offline/useOfflineSync.ts` — TypeScript/JavaScript application module.
- `engine/os/OSContext.tsx` — React application module.
- `engine/os/index.ts` — TypeScript/JavaScript application module.
- `engine/platform/index.ts` — TypeScript/JavaScript application module.
- `engine/platform/lab.ts` — TypeScript/JavaScript application module.
- `engine/policy/boogiePolicy.ts` — TypeScript/JavaScript application module.
- `engine/reality/realityStore.ts` — TypeScript/JavaScript application module.
- `engine/reality/types.ts` — TypeScript/JavaScript application module.
- `engine/rendering/babylon/createEngine.ts` — TypeScript/JavaScript application module.
- `engine/rendering/babylon/dreamengine-hybrid.ts` — TypeScript/JavaScript application module.
- `engine/rendering/babylon/useDreamLogoScene.ts` — TypeScript/JavaScript application module.
- `engine/rendering/god-tier/godTierEngine.ts` — TypeScript/JavaScript application module.
- `engine/rendering/god-tier/useGodTier.ts` — TypeScript/JavaScript application module.
- `engine/rendering/renderer/Canvas2DRenderer.ts` — TypeScript/JavaScript application module.
- `engine/rendering/renderer/FrustumCuller.ts` — TypeScript/JavaScript application module.
- `engine/rendering/renderer/IRenderer.ts` — TypeScript/JavaScript application module.
- `engine/rendering/renderer/index.ts` — TypeScript/JavaScript application module.
- `engine/rendering/warp/useWarp.ts` — TypeScript/JavaScript application module.
- `engine/rendering/warp/warpEngine.ts` — TypeScript/JavaScript application module.
- `engine/rendering/webgpu.ts` — TypeScript/JavaScript application module.
- `engine/rendering/webgpu/adaptiveQuality.ts` — TypeScript/JavaScript application module.
- `engine/rendering/webgpu/director.ts` — TypeScript/JavaScript application module.
- `engine/rendering/webgpu/useWebGPUDirector.ts` — TypeScript/JavaScript application module.
- `engine/routing/surfaces.ts` — TypeScript/JavaScript application module.
- `engine/runtime/EnginDispatcher.ts` — TypeScript/JavaScript application module.
- `engine/runtime/apperception.ts` — TypeScript/JavaScript application module.
- `engine/runtime/channelMetrics.ts` — TypeScript/JavaScript application module.
- `engine/runtime/coercionTable.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamOSBus.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamsurface/dreamsurface.bridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamsurface/dreamsurface.delta.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dreamsurface/index.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dropTargetRegistry.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dualRuntime.ts` — TypeScript/JavaScript application module.
- `engine/runtime/dualRuntimeBridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.auth.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.eventbus.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.ledger.ts` — TypeScript/JavaScript application module.
- `engine/runtime/engin.renderloop.ts` — TypeScript/JavaScript application module.
- `engine/runtime/enginWorkflowRegistry.ts` — TypeScript/JavaScript application module.
- `engine/runtime/iEngine.ts` — TypeScript/JavaScript application module.
- `engine/runtime/index.ts` — TypeScript/JavaScript application module.
- `engine/runtime/instanceManager.ts` — TypeScript/JavaScript application module.
- `engine/runtime/isAuthRelatedError.ts` — TypeScript/JavaScript application module.
- `engine/runtime/madMaxiSnapshotBridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/memory.ts` — TypeScript/JavaScript application module.
- `engine/runtime/moduleRegistry.ts` — TypeScript/JavaScript application module.
- `engine/runtime/offlineQueue.ts` — TypeScript/JavaScript application module.
- `engine/runtime/quantumCircuit.ts` — TypeScript/JavaScript application module.
- `engine/runtime/runtimeChannel.ts` — TypeScript/JavaScript application module.
- `engine/runtime/runtimeContainer.ts` — TypeScript/JavaScript application module.
- `engine/runtime/seamClipboard.ts` — TypeScript/JavaScript application module.
- `engine/runtime/sharedResourcePool.ts` — TypeScript/JavaScript application module.
- `engine/runtime/snapshotFingerprint.ts` — TypeScript/JavaScript application module.
- `engine/runtime/superciliousPlatformRuntime.ts` — TypeScript/JavaScript application module.
- `engine/runtime/swapManager.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useDragSurface.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useDualRuntime.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useDualRuntimePersistence.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useEnginBridge.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useEnginCoopSync.ts` — TypeScript/JavaScript application module.
- `engine/runtime/useSharedEnginChannel.ts` — TypeScript/JavaScript application module.
- `engine/safety/child-safety/childSafetyDetector.ts` — TypeScript/JavaScript application module.
- `engine/safety/child-safety/imageClassifier.ts` — TypeScript/JavaScript application module.
- `engine/safety/child-safety/messageContextChecker.ts` — TypeScript/JavaScript application module.
- `engine/safety/child-safety/ncmecReporter.ts` — TypeScript/JavaScript application module.
- `engine/safety/child-safety/scanMediaUrls.ts` — TypeScript/JavaScript application module.
- `engine/scene/sceneState.ts` — TypeScript/JavaScript application module.
- `engine/setup/checks.ts` — TypeScript/JavaScript application module.
- `engine/sharedDream.ts` — TypeScript/JavaScript application module.
- `engine/sharedDream/useSharedDreamSession.ts` — TypeScript/JavaScript application module.
- `engine/shop/listings.ts` — TypeScript/JavaScript application module.
- `engine/slog.ts` — TypeScript/JavaScript application module.
- `engine/social/crossPost.ts` — TypeScript/JavaScript application module.
- `engine/social/livekit.ts` — TypeScript/JavaScript application module.
- `engine/social/normalizers.ts` — TypeScript/JavaScript application module.
- `engine/social/platforms.ts` — TypeScript/JavaScript application module.
- `engine/social/rss-feed.ts` — TypeScript/JavaScript application module.
- `engine/social/useSocialData.ts` — TypeScript/JavaScript application module.
- `engine/user-sim/userSimAgent.ts` — TypeScript/JavaScript application module.
- `engine/vm/bufferManager.ts` — TypeScript/JavaScript application module.
- `engine/vm/bus-events.ts` — TypeScript/JavaScript application module.
- `engine/vm/dual-runtime.ts` — TypeScript/JavaScript application module.
- `engine/vm/dualVMCoordinator.ts` — TypeScript/JavaScript application module.
- `engine/vm/index.ts` — TypeScript/JavaScript application module.
- `engine/vm/inter-vm-messaging.ts` — TypeScript/JavaScript application module.
- `engine/vm/pipelineCache.ts` — TypeScript/JavaScript application module.
- `engine/vm/resource-quota.ts` — TypeScript/JavaScript application module.
- `engine/vm/security.ts` — TypeScript/JavaScript application module.
- `engine/vm/snapshot.ts` — TypeScript/JavaScript application module.
- `engine/vm/types.ts` — TypeScript/JavaScript application module.
- `engine/vm/wasm-features.ts` — TypeScript/JavaScript application module.
- `engine/vm/wasmGpuVM.ts` — TypeScript/JavaScript application module.
- `engine/web3/client.ts` — TypeScript/JavaScript application module.
- `engine/web3/engagement.ts` — TypeScript/JavaScript application module.
- `engine/web3/index.ts` — TypeScript/JavaScript application module.
- `engine/web3/ipfs.ts` — TypeScript/JavaScript application module.
- `engine/web3/types.ts` — TypeScript/JavaScript application module.
- `engine/widgets/CrossWidgetPosting.ts` — TypeScript/JavaScript application module.
- `engine/widgets/WidgetBus.ts` — TypeScript/JavaScript application module.
- `engine/widgets/WidgetEngine.tsx` — React application module.
- `engine/widgets/WidgetEventBus.ts` — TypeScript/JavaScript application module.
- `engine/widgets/WidgetLinkGraph.ts` — TypeScript/JavaScript application module.
- `engine/widgets/feed-resolver.ts` — TypeScript/JavaScript application module.
- `engine/widgets/parse.ts` — TypeScript/JavaScript application module.
- `engine/widgets/parseConfig.ts` — TypeScript/JavaScript application module.
- `engine/widgets/useWidget.ts` — TypeScript/JavaScript application module.
- `engine/widgets/widgetRegistry.ts` — TypeScript/JavaScript application module.

</details>

## Engins
Engins is a user-facing application surface subsystem composed of React components and presentation logic. It exposes useAIDirector, useAgentSession, useArtifactSlot as reusable hooks. Core abstractions are encapsulated in H265Encoder, GameCapture, GameEnginConfigError. It depends on Backend, System, Core & CoreSurfaces, Dreamr — Human Media, Dreams, Widgets, Windows & Surfaces.
### Responsibilities
- Renders production surfaces/components: AgentPanel, CodeEnginOrchestrator, CODE_VOCABULARY, VOCAB_TERMS, CODEENGIN_PRODUCTION_MODE, SCOPE_ORDER, +83 more
- Core abstractions: H265Encoder, GameCapture, GameEnginConfigError, GameEnginCore, RealtimeCaptioner
- Runtime orchestration, capability routing, and Engin lifecycle coordination
- AI provider integration and inference routing
- Authentication, sessions, authorization, and access control
- Messaging, conversations, notifications, realtime channels, or presence
- Feed, post, comment, ranking, or social interaction behavior
- Asset storage, upload, export, or CDN-facing pipelines
- GameEngin cartridge/runtime interaction or playable system behavior
- ContentEngin asset creation, validation, rigging, animation, or export behavior
### Key Modules
- engins/engin.BrandingEngin.tsx — BrandingEngin (important path; behavior evidence; Engin entry)
- engins/engin.CodeEngin.tsx — CodeEngin (important path; behavior evidence; Engin entry)
- engins/engin.GameEngin.tsx — GameEngin (important path; behavior evidence; Engin entry)
- engins/engin.LabEngin.tsx — LabEngin (important path; behavior evidence; Engin entry)
- engins/engin.StarMakerEngin.tsx — StarMakerEngin (important path; behavior evidence; Engin entry)
- engins/engin.ContentEngin.tsx — ContentEngin (important path; behavior evidence; Engin entry)
- engins/gameengin/gameEnginRuntime.ts — loadDreamGame, DreamGameBackend, DreamGameManifest (important path; behavior evidence; important exports: loadDreamGame, DreamGameBackend, DreamGameManifest)
- engins/gameengin/render/ShaderRegistry.ts — GameEnginShaderStage, GameEnginShaderSource, GameEnginShaderCompileKey (important path; behavior evidence; important exports: GameEnginShaderStage, GameEnginShaderSource, GameEnginShaderCompileKey)
- engins/gameengin/runtime/index.ts — GAMEENGIN_FRAME_BUDGETS, GameEnginFrameBudget, GameEnginQualityTier (important path; behavior evidence; important exports: GAMEENGIN_FRAME_BUDGETS, GameEnginFrameBudget, GameEnginQualityTier)
- engins/rulesets/brand/useBrandEnginRuntime.ts — useBrandEnginRuntime, UseBrandEnginRuntimeOptions, UseBrandEnginRuntimeResult (important path; behavior evidence; important exports: useBrandEnginRuntime, UseBrandEnginRuntimeOptions, UseBrandEnginRuntimeResult)
- engins/rulesets/code/useCodeEnginRuntime.ts — useCodeEnginRuntime, UseCodeEnginRuntimeOptions, UseCodeEnginRuntimeResult (important path; behavior evidence; important exports: useCodeEnginRuntime, UseCodeEnginRuntimeOptions, UseCodeEnginRuntimeResult)
- engins/rulesets/content/useContentEnginRuntime.ts — useContentEnginRuntime, UseContentEnginRuntimeOptions, UseContentEnginRuntimeResult (important path; behavior evidence; important exports: useContentEnginRuntime, UseContentEnginRuntimeOptions, UseContentEnginRuntimeResult)
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreamr — Human Media**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **DreamSpace**
- Depends on **Dual Runtimes**
- Depends on **The Engins**
- Depends on **User-Facing Modularity**
- Depends on **utils**
- Integrates with the Engin / Runtime layer for execution orchestration
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreamr — Human Media
- Depends on Dreams, Widgets, Windows & Surfaces
- Depends on DreamSpace
### Public Surfaces
**Production Components:**
`AUDIO_QUALITY_PRESETS`, `AUTOMATABLE_PARAMS`, `AgentPanel`, `ArtifactPermissionSchema`, `ArtifactSlot`, `AssetViewport`, `BRAIN_ROOT`, `BRAND_ENGIN_RULE_SET`, `BTN_DOUBLE_TAP_MAX_MS`, `BTN_LONG_PRESS_MS`, +77 more
### Notable Abstractions
- `AgentMessage` — interface in `engins/CodeEngin/modules/ai-co-pilot/index.ts`
- `UseAgentSessionReturn` — interface in `engins/CodeEngin/modules/ai-co-pilot/index.ts`
- `AgentMessage` — interface in `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts`
- `UseAgentSessionReturn` — interface in `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts`
- `QueryIntent` — type in `engins/codeengin/ai/drEamsCodeAssist.ts`
- `NLCommand` — interface in `engins/codeengin/ai/drEamsCodeAssist.ts`
- `CodeEnginAuthenticatedUser` — interface in `engins/codeengin/auth.ts`
- `UndoSnapshot` — interface in `engins/codeengin/diff/aiEditEngine.ts`
- `CodeEnginFileNode` — interface in `engins/codeengin/types.ts`
- `CodeEnginFileRecord` — interface in `engins/codeengin/types.ts`
- `CodeEnginDiagnostic` — interface in `engins/codeengin/types.ts`
- `CodeEnginSymbol` — interface in `engins/codeengin/types.ts`
- `useAIDirector` — hook
- `useAgentSession` — hook
- `useArtifactSlot` — hook
- `useBrandEnginRuntime` — hook
- `useCodeEnginRuntime` — hook
- `useContentEnginRuntime` — hook
- `useDualSense` — hook
- `useEnginWorkflow` — hook
### Capabilities
- Exposes hooks: useAIDirector, useAgentSession, useArtifactSlot, useBrandEnginRuntime, useCodeEnginRuntime, useContentEnginRuntime, +21 more
- Important contract surface: AgentMessage, UseAgentSessionReturn, AgentMessage, UseAgentSessionReturn, NLCommand
- Important shared type vocabulary: QueryIntent, ExportProfile, ContentAssetCategory, ContentAssetObject, AssetUploadContext
- Behavior functions: AutoOpenGameEngin, detectNLCommand, generateCodeFromCommand, assertCodeEnginAccess, getCodeEnginWorkspacesRoot, safeErrorMessage
#### Application Source Structure
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
    │   ├── runnerCommands.ts
    │   ├── search.ts
    │   ├── types.ts
    │   └── workspaceStore.ts
    ├── contentengin
    │   ├── AssetViewport.tsx
    │   ├── ImplicitAssetWorkspace.tsx
    │   ├── assetTypes.ts
    │   ├── assets
    │   │   ├── assetOptimizer.ts
    │   │   ├── indexedDBStore.ts
    │   │   └── localAssetLibrary.ts
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
    │   ├── performancePlan.ts
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
    │   │   ├── index.ts
    │   │   ├── landmarks.ts
    │   │   ├── rigTypes.ts
    │   │   └── rigValidator.ts
    │   ├── runtimeProfile.ts
    │   ├── shaders
    │   │   ├── shaderRegistry.ts
    │   │   └── shaderTypes.ts
    │   ├── upgradeMatrix.ts
    │   └── useImplicitAssetWorkspace.ts
    ├── dream.ForgeEngin.tsx
    ├── dream.QuantumCircuitCanvas.tsx
    ├── engin.BrandingEngin.tsx
    ├── engin.CodeEngin.tsx
    ├── engin.ContentEngin.tsx
… (146 more application source files)
```
<details><summary>Engins application source index (266 files)</summary>

- `engins/CodeEngin/core/parser.ts` — TypeScript/JavaScript application module.
- `engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel.tsx` — React application module.
- `engins/CodeEngin/modules/ai-co-pilot/index.ts` — TypeScript/JavaScript application module.
- `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts` — TypeScript/JavaScript application module.
- `engins/CodeEngin/orchestrator/dream.index.tsx` — React application module.
- `engins/autoopen/dream.AutoOpenGameEngin.tsx` — React application module.
- `engins/brandingengin/identity/logos.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/ai/drEamsCodeAssist.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/auth.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/diagnostics.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/diff/aiEditEngine.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/diff/diffUtils.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/git.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/pathSafety.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/projectGraph.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/runner.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/runnerCommands.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/search.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/types.ts` — TypeScript/JavaScript application module.
- `engins/codeengin/workspaceStore.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/AssetViewport.tsx` — React application module.
- `engins/contentengin/ImplicitAssetWorkspace.tsx` — React application module.
- `engins/contentengin/assetTypes.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/assets/assetOptimizer.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/assets/indexedDBStore.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/assets/localAssetLibrary.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/geometryBuilder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/meshBuilder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/modifiers.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/primitiveBuilder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/textureBuilder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/builders/uvGenerator.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/cli.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/composite/compositor.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/composite/fxSimulation.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/composite/matchmover.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/composite/motionCapture.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/composite/rotoscope.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/content/generativeFill.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/content/publishIntent.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/content/seoScorer.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/content/transcriptEditor.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/content/voiceClone.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/animalGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/bicycleGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/bridgeGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/buildingGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/creatureGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/humanoidGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/propGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/roadGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/shared.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/terrainGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/treeGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/vehicleGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/grammars/waterGrammar.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/materials/materialTypes.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/materials/paletteExtractor.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/materials/proceduralMaterials.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/media/h265-encoder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/media/ledger.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/media/postMedia.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/performancePlan.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/colorCluster.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/edgeDetector.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/imageAnalyzer.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/photoToRecipe.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/pngDecoder.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/photo/regionDetector.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/build.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/bundle.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/exportGlb.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/generateCollision.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/generateLods.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/paths.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/validate.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/pipeline/writeManifest.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/recipes/recipeResolver.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/recipes/recipeTypes.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/recipes/seededRandom.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/rigging/fitArmature.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/rigging/index.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/rigging/landmarks.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/rigging/rigTypes.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/rigging/rigValidator.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/runtimeProfile.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/shaders/shaderRegistry.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/shaders/shaderTypes.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/upgradeMatrix.ts` — TypeScript/JavaScript application module.
- `engins/contentengin/useImplicitAssetWorkspace.ts` — TypeScript/JavaScript application module.
- `engins/dream.ForgeEngin.tsx` — React application module.
- `engins/dream.QuantumCircuitCanvas.tsx` — React application module.
- `engins/engin.BrandingEngin.tsx` — React application module.
- `engins/engin.CodeEngin.tsx` — React application module.
- `engins/engin.ContentEngin.tsx` — React application module.
- `engins/engin.GameEngin.tsx` — React application module.
- `engins/engin.LabEngin.tsx` — React application module.
- `engins/engin.StarMakerEngin.tsx` — React application module.
- `engins/forgeengin/componentInventory.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/artifact/manifest.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/index.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/quality/tiers.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/shell/ArtifactSlot.tsx` — React application module.
- `engins/forgeengin/enginpipe/telemetry/client.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/enginpipe/telemetry/events.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge-ngn/assembly.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge-ngn/index.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge-ngn/piece-registry.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/engineForge.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeBuild.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeIntelligence.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeMomentum.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeNexus.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeRegistry.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/forgeRituals.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/useForgeActivity.ts` — TypeScript/JavaScript application module.
- `engins/forgeengin/forge/useForgeBuild.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/GameEnginCore.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/GameRuntime.tsx` — React application module.
- `engins/gameengin/accessibility-ai.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/ai-director.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/ai-npcs.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/assets/BundleCache.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/assets/BundleManifest.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/backendNegotiator.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/brain-reader.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridge-manifest.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridge.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridgeLoader.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/achievementEngine.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/apiStubs.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/loaders.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/manifest.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/reactCartridge.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cartridges/saveState.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/cloud-compute.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/config/demoGameConfig.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/controls/control-mappings.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/core.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/dream-engine.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/dreamr-loader.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/executionWiring.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/gameEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/DualSenseManager.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/avatar.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/catalog.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/gameControllerButtons.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/gameControllerLeft.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/gameControllerRight.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/hooks.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/library-state.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/lucid-avenue-world.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/madmaxi-wildfall-world.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/mobileControls.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/navigation.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/performance-baseline.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/quality-plan.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/useAIDirector.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/useGameInputKeyboardBridge.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/useGamepad.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/useImmersiveGameLayout.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/games/useRemoteChannel.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/generative-audio.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/handlers.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/input/InputRouter.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/input/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/launcher.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/neural-render.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/path-tracing.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/platform.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/post-fx.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/power-systems.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/predictive-stream.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/procgen.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/registerCartridges.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/remote/comboMachine.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/remote/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/remote/layout.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/remote/moves.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/remote/sprintDetector.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/render/ShaderRegistry.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/runtime/FrameBudget.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/runtime/FrameClock.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/runtime/RuntimeQuality.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/runtime/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/ai.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/animation.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/assets.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/index.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/lod.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/network.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/physics.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/pooling.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/rendering.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/spatial.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/systems/world.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/unifiedLoop.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/useUnifiedLoop.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/webgpu-runtime-shell.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/world-crdt.ts` — TypeScript/JavaScript application module.
- `engins/gameengin/xr.ts` — TypeScript/JavaScript application module.
- `engins/isosurfaceAssetPipeline.ts` — TypeScript/JavaScript application module.
- `engins/isosurfaceDualContouring.ts` — TypeScript/JavaScript application module.
- `engins/labengin/implicitSurface.ts` — TypeScript/JavaScript application module.
- `engins/portfolio/dream.PortfolioEngin.tsx` — React application module.
- `engins/renderengin/RenderEnginViewport.tsx` — React application module.
- `engins/renderengin/advancedRendering.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/animation.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/assets.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/benchmarkProof.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/completionEvidence.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/core.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/diagnostics.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/index.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/lighting.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/liveBenchmark.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/materials.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/performanceIntegrity.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/postProcessing.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/renderSettings.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/runtimeRegistration.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/scene.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/security.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/serviceIntegration.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/serviceRuntime.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/textures.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/viewportControls.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/virtualization.ts` — TypeScript/JavaScript application module.
- `engins/renderengin/webgpu.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/brand/brandEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/brand/useBrandEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/code/codeEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/code/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/code/useCodeEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/content/contentEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/content/useContentEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/dreams/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/forge/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/game/declarative.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/game/gameEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/game/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/game/useGameEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/homedream/dream.homedream.constants.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/homedream/dream.homedream.physics.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/homedream/dream.homedream.transforms.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/homedream/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/lab/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/lab/labEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/lab/useLabEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/music/index.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/music/starMakerEnginRuleSet.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/music/useStarMakerEnginRuntime.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/useEnginWorkflow.ts` — TypeScript/JavaScript application module.
- `engins/rulesets/workflowEngine.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/audio-fingerprint/fingerprint.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/audio-fingerprint/index.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/audio-fingerprint/peak-map.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/audio-fingerprint/stem-extractor.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/audioFingerprint.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/music/presets.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/music/starmaker.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/music/starmakerArrangement.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/music/starmakerDaw.ts` — TypeScript/JavaScript application module.
- `engins/starmakerengin/music/wasmAudioBridge.ts` — TypeScript/JavaScript application module.

</details>

## Hooks
Hooks provides application behavior, contracts, or infrastructure used by DREAMengin. It exposes useAccount, useAlbums, useBreakpoint as reusable hooks. It depends on Backend, System, Core & CoreSurfaces, Connectors & Live Feeds, Dreams, Widgets, Windows & Surfaces.
### Key Modules
- hooks/useConnectorInstallFlow.ts — useConnectorInstallFlow, ConnectorInstallFlowOptions, ConnectorInstallFlowState (behavior evidence; important exports: useConnectorInstallFlow, ConnectorInstallFlowOptions, ConnectorInstallFlowState; important hook)
- hooks/useSharedDream.ts — useSharedDream, UseSharedDreamReturn (behavior evidence; important exports: useSharedDream, UseSharedDreamReturn; important hook)
- hooks/useDreamLayout.ts — useDreamLayout, UserDreamLayout (behavior evidence; important exports: useDreamLayout, UserDreamLayout; important hook)
- hooks/use-spatial.ts — useShareToProfile (behavior evidence; important exports: useShareToProfile; important hook)
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Connectors & Live Feeds**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Depends on **Shared Dreams**
- Depends on **User-Facing Modularity**
- Participates in the Shared Dreams pub/sub channel system
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Connectors & Live Feeds
- Depends on Dreams, Widgets, Windows & Surfaces
### Notable Abstractions
- `ConnectorInstallFlowOptions` — interface in `hooks/useConnectorInstallFlow.ts`
- `ConnectorInstallFlowState` — interface in `hooks/useConnectorInstallFlow.ts`
- `ConnectorInstallFlowActions` — interface in `hooks/useConnectorInstallFlow.ts`
- `UserDreamLayout` — interface in `hooks/useDreamLayout.ts`
- `UseSharedDreamReturn` — interface in `hooks/useSharedDream.ts`
- `useAccount` — hook
- `useAlbums` — hook
- `useBreakpoint` — hook
- `useBreakpointValue` — hook
- `useConnectorInstallFlow` — hook
- `useContent` — hook
- `useDreamLayout` — hook
- `useFluid` — hook
### Capabilities
- Exposes hooks: useAccount, useAlbums, useBreakpoint, useBreakpointValue, useConnectorInstallFlow, useContent, +20 more
- Important contract surface: ConnectorInstallFlowOptions, ConnectorInstallFlowState, ConnectorInstallFlowActions, UserDreamLayout, UseSharedDreamReturn
#### Application Source Structure
```text
└── hooks
    ├── use-spatial.ts
    ├── useAccount.ts
    ├── useConnectorInstallFlow.ts
    ├── useDreamLayout.ts
    ├── useHideOnScroll.ts
    ├── useMotionTilt.ts
    ├── useResponsive.ts
    ├── useSharedDream.ts
    ├── useTap.ts
    ├── useTapHoldMove.ts
    ├── useTick.ts
    └── useViewCounter.ts
```
<details><summary>Hooks application source index (12 files)</summary>

- `hooks/use-spatial.ts` — TypeScript/JavaScript application module.
- `hooks/useAccount.ts` — TypeScript/JavaScript application module.
- `hooks/useConnectorInstallFlow.ts` — TypeScript/JavaScript application module.
- `hooks/useDreamLayout.ts` — TypeScript/JavaScript application module.
- `hooks/useHideOnScroll.ts` — TypeScript/JavaScript application module.
- `hooks/useMotionTilt.ts` — TypeScript/JavaScript application module.
- `hooks/useResponsive.ts` — TypeScript/JavaScript application module.
- `hooks/useSharedDream.ts` — TypeScript/JavaScript application module.
- `hooks/useTap.ts` — TypeScript/JavaScript application module.
- `hooks/useTapHoldMove.ts` — TypeScript/JavaScript application module.
- `hooks/useTick.ts` — TypeScript/JavaScript application module.
- `hooks/useViewCounter.ts` — TypeScript/JavaScript application module.

</details>

## Styles
Styles provides application behavior, contracts, or infrastructure used by DREAMengin.
### Responsibilities
- Theming, design tokens, visual customization, or settings surfaces
### Key Modules
- _none detected_
### Architectural Relationships
- Self-contained by detected imports — no cross-subsystem dependency found
#### Application Source Structure
```text
└── styles
    ├── dream-shell.css
    ├── globals.css
    ├── home-dream.css
    ├── theme.css
    └── view-transitions.css
```
<details><summary>Styles application source index (5 files)</summary>

- `styles/dream-shell.css` — application style source.
- `styles/globals.css` — application style source.
- `styles/home-dream.css` — application style source.
- `styles/theme.css` — application style source.
- `styles/view-transitions.css` — application style source.

</details>

## Supabase
Supabase is a user-facing application surface subsystem composed of React components and presentation logic. It depends on Backend, System, Core & CoreSurfaces, utils.
### Responsibilities
- Renders production surfaces/components: AUTH_GET_USER_TIMEOUT_MS
- Database access, persistence, and server-side data coordination
- AI provider integration and inference routing
- Authentication, sessions, authorization, and access control
- Messaging, conversations, notifications, realtime channels, or presence
- Feed, post, comment, ranking, or social interaction behavior
- Asset storage, upload, export, or CDN-facing pipelines
- GameEngin cartridge/runtime interaction or playable system behavior
- ContentEngin asset creation, validation, rigging, animation, or export behavior
### Key Modules
- supabase/realtime.ts — subscribeDreamR, subscribeLiveMessages, trackPresence (important path; behavior evidence; important exports: subscribeDreamR, subscribeLiveMessages, trackPresence)
- supabase/config.ts — buildAuthCallbackUrl, getSupabaseAuthCallbackUrl, SUPABASE_SERVICE_ROLE_KEY (important path; behavior evidence; important exports: buildAuthCallbackUrl, getSupabaseAuthCallbackUrl, SUPABASE_SERVICE_ROLE_KEY)
- supabase/server/serverClient.ts — createServerClientWithCookies, createServerClient, createServerClientWithCustomCookies (important path; behavior evidence; important exports: createServerClientWithCookies, createServerClient, createServerClientWithCustomCookies)
- supabase/client/client.ts — createClient (important path; behavior evidence; important exports: createClient)
- supabase/client/safeGetUser.ts — AUTH_GET_USER_TIMEOUT_MS (important path; behavior evidence; important exports: AUTH_GET_USER_TIMEOUT_MS)
- supabase/auth/nextRedirect.ts (important path; behavior evidence)
- supabase/vector.ts (important path; behavior evidence)
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **utils**
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on utils
### Public Surfaces
**Production Components:**
`AUTH_GET_USER_TIMEOUT_MS`
### Notable Abstractions
- `DreamRPulse` — interface in `supabase/realtime.ts`
- `DreamRSubscribeOptions` — interface in `supabase/realtime.ts`
- `DreamRHandle` — interface in `supabase/realtime.ts`
- `LiveMessage` — interface in `supabase/realtime.ts`
- `LiveMessageSubscribeOptions` — interface in `supabase/realtime.ts`
- `LiveMessageHandle` — interface in `supabase/realtime.ts`
- `PresenceStatus` — type in `supabase/realtime.ts`
- `PresencePayload` — interface in `supabase/realtime.ts`
- `PresenceState` — interface in `supabase/realtime.ts`
- `PresenceTracker` — interface in `supabase/realtime.ts`
- `SupabaseCookieStore` — type in `supabase/server/serverClient.ts`
### Capabilities
- Important contract surface: DreamRPulse, DreamRSubscribeOptions, DreamRHandle, LiveMessage, LiveMessageSubscribeOptions
- Important shared type vocabulary: PresenceStatus, SupabaseCookieStore
- Behavior functions: createClient, buildAuthCallbackUrl, getSupabaseAuthCallbackUrl, subscribeDreamR, subscribeLiveMessages, trackPresence
#### Application Source Structure
```text
└── supabase
    ├── auth
    │   └── nextRedirect.ts
    ├── client
    │   ├── client.ts
    │   └── safeGetUser.ts
    ├── config.ts
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
    │   ├── 20260516000300_shared_dream_sessions.sql
    │   ├── 20260605015234_auto_scaffold.sql
    │   ├── 20260619000000_renderengin_assets_rls.sql
    │   ├── 20260619034000_connector_feed_items.sql
    │   ├── 20260619034100_profile_optional_fields.sql
    │   └── 20260619034200_saved_posts.sql
    ├── realtime.ts
    ├── schema-final.sql
    ├── seed.sql
    ├── server
    │   └── serverClient.ts
    └── vector.ts
```
<details><summary>Supabase application source index (69 files)</summary>

- `supabase/auth/nextRedirect.ts` — TypeScript/JavaScript application module.
- `supabase/client/client.ts` — TypeScript/JavaScript application module.
- `supabase/client/safeGetUser.ts` — TypeScript/JavaScript application module.
- `supabase/config.ts` — TypeScript/JavaScript application module.
- `supabase/migrations/20240120000000_initial_schema.sql` — SQL schema/persistence source.
- `supabase/migrations/20240120000001_enable_rls.sql` — SQL schema/persistence source.
- `supabase/migrations/20260129000000_upgrade_schema.sql` — SQL schema/persistence source.
- `supabase/migrations/20260210000000_widget_system_v2.sql` — SQL schema/persistence source.
- `supabase/migrations/20260210000001_ai_system_v2026.sql` — SQL schema/persistence source.
- `supabase/migrations/20260210_ai_core.sql` — SQL schema/persistence source.
- `supabase/migrations/20260214000000_security_axioms.sql` — SQL schema/persistence source.
- `supabase/migrations/20260226000000_admin_lock.sql` — SQL schema/persistence source.
- `supabase/migrations/20260305000000_create_notes.sql` — SQL schema/persistence source.
- `supabase/migrations/20260305000001_comments.sql` — SQL schema/persistence source.
- `supabase/migrations/20260305000002_leaderboard.sql` — SQL schema/persistence source.
- `supabase/migrations/20260307000000_readme_gaps.sql` — SQL schema/persistence source.
- `supabase/migrations/20260307000001_conversations_messages.sql` — SQL schema/persistence source.
- `supabase/migrations/20260310000000_widget_instances_visibility.sql` — SQL schema/persistence source.
- `supabase/migrations/20260310000001_profiles_widget_config.sql` — SQL schema/persistence source.
- `supabase/migrations/20260310000002_profile_dream_widgets.sql` — SQL schema/persistence source.
- `supabase/migrations/20260310000003_connector_accounts.sql` — SQL schema/persistence source.
- `supabase/migrations/20260310000004_feed_items.sql` — SQL schema/persistence source.
- `supabase/migrations/20260310000010_dreamdm_bar_pass2.sql` — SQL schema/persistence source.
- `supabase/migrations/20260315000000_content_drafts.sql` — SQL schema/persistence source.
- `supabase/migrations/20260316000000_visibility_mappings.sql` — SQL schema/persistence source.
- `supabase/migrations/20260319000000_journey_dots.sql` — SQL schema/persistence source.
- `supabase/migrations/20260319065444_new-migration.sql` — SQL schema/persistence source.
- `supabase/migrations/20260319120000_connector_accounts_schema_reload.sql` — SQL schema/persistence source.
- `supabase/migrations/20260320000000_scheduled_posts.sql` — SQL schema/persistence source.
- `supabase/migrations/20260320100000_game_scores_all_games.sql` — SQL schema/persistence source.
- `supabase/migrations/20260320110000_user_blocks.sql` — SQL schema/persistence source.
- `supabase/migrations/20260321000000_ads_platform_promotions.sql` — SQL schema/persistence source.
- `supabase/migrations/20260321200000_phase8a_feed_and_layout.sql` — SQL schema/persistence source.
- `supabase/migrations/20260322000000_phase8b_dream_windows.sql` — SQL schema/persistence source.
- `supabase/migrations/20260322000000_policy_events.sql` — SQL schema/persistence source.
- `supabase/migrations/20260322000001_message_boards.sql` — SQL schema/persistence source.
- `supabase/migrations/20260323100000_embed_feed_items.sql` — SQL schema/persistence source.
- `supabase/migrations/20260324000000_phase8e_orders.sql` — SQL schema/persistence source.
- `supabase/migrations/20260324000001_phase8e_shop_marketplace.sql` — SQL schema/persistence source.
- `supabase/migrations/20260325000000_phase8f_daydream_network.sql` — SQL schema/persistence source.
- `supabase/migrations/20260325100000_child_safety.sql` — SQL schema/persistence source.
- `supabase/migrations/20260401000001_platform_utilities.sql` — SQL schema/persistence source.
- `supabase/migrations/20260402000001_control_mappings.sql` — SQL schema/persistence source.
- `supabase/migrations/20260402000002_game_assets.sql` — SQL schema/persistence source.
- `supabase/migrations/20260403000001_pgvector_embeddings.sql` — SQL schema/persistence source.
- `supabase/migrations/20260403000002_pgvector_search_rpc.sql` — SQL schema/persistence source.
- `supabase/migrations/20260405000001_dreamr_feed_registry.sql` — SQL schema/persistence source.
- `supabase/migrations/20260405042406_auto_scaffold.sql` — SQL schema/persistence source.
- `supabase/migrations/20260413000000_phase9_activity_first_protocol.sql` — SQL schema/persistence source.
- `supabase/migrations/20260417000000_repurpose_nods_as_dream_docs.sql` — SQL schema/persistence source.
- `supabase/migrations/20260417000001_dream_docs_search_rpc.sql` — SQL schema/persistence source.
- `supabase/migrations/20260418000000_gameengin_core.sql` — SQL schema/persistence source.
- `supabase/migrations/20260420000001_consent_settings_audit.sql` — SQL schema/persistence source.
- `supabase/migrations/20260426000000_activity_coop_gameengin_completion.sql` — SQL schema/persistence source.
- `supabase/migrations/20260426000100_rename_widgets_to_dreams.sql` — SQL schema/persistence source.
- `supabase/migrations/20260426000200_build_memory_schema_gaps.sql` — SQL schema/persistence source.
- `supabase/migrations/20260516000000_agent_sessions_forge_rate_limits.sql` — SQL schema/persistence source.
- `supabase/migrations/20260516000100_dreamr_tally.sql` — SQL schema/persistence source.
- `supabase/migrations/20260516000300_shared_dream_sessions.sql` — SQL schema/persistence source.
- `supabase/migrations/20260605015234_auto_scaffold.sql` — SQL schema/persistence source.
- `supabase/migrations/20260619000000_renderengin_assets_rls.sql` — SQL schema/persistence source.
- `supabase/migrations/20260619034000_connector_feed_items.sql` — SQL schema/persistence source.
- `supabase/migrations/20260619034100_profile_optional_fields.sql` — SQL schema/persistence source.
- `supabase/migrations/20260619034200_saved_posts.sql` — SQL schema/persistence source.
- `supabase/realtime.ts` — TypeScript/JavaScript application module.
- `supabase/schema-final.sql` — SQL schema/persistence source.
- `supabase/seed.sql` — SQL schema/persistence source.
- `supabase/server/serverClient.ts` — TypeScript/JavaScript application module.
- `supabase/vector.ts` — TypeScript/JavaScript application module.

</details>

## Types
Types is a user-facing application surface subsystem composed of React components and presentation logic. It depends on Backend, System, Core & CoreSurfaces, Dreams, Widgets, Windows & Surfaces.
### Responsibilities
- Renders production surfaces/components: JOURNEY_DOMAIN_COLORS, Constants, DreamSurface, DEFAULT_FEED_HOST_CONFIG
- Database access, persistence, and server-side data coordination
### Key Modules
- types/dream-window.ts — DreamWindowRecord, CreateDreamWindowBody, PatchDreamWindowBody (important path; behavior evidence; important exports: DreamWindowRecord, CreateDreamWindowBody, PatchDreamWindowBody)
- types/ai-system.ts — ActorContextSchema, Surface, UIContextSchema (behavior evidence; important exports: ActorContextSchema, Surface, UIContextSchema; large behavior file)
- types/widget-system-v2.ts — isFeedHostConfig, validateFeedHostConfig, DreamSurface (behavior evidence; important exports: isFeedHostConfig, validateFeedHostConfig, DreamSurface; large behavior file)
- types/connector.ts — ConnectorAccount, ConnectorAccountPublic, FeedItemMedia (important path; behavior evidence; important exports: ConnectorAccount, ConnectorAccountPublic, FeedItemMedia)
- types/dreamArtifact.ts — DreamArtifactType, DreamArtifactSource, RuntimeRegionKey (important path; behavior evidence; important exports: DreamArtifactType, DreamArtifactSource, RuntimeRegionKey)
- types/module-manifest.ts — isModuleManifest, RuntimeId, ModuleManifest (behavior evidence; important exports: isModuleManifest, RuntimeId, ModuleManifest)
- types/spatial.ts — ShareIntent, FeedItem (behavior evidence; important exports: ShareIntent, FeedItem; large behavior file)
- types/user-sim.ts — PersonaTypeSchema, PersonaSchema, ViewportSchema (behavior evidence; important exports: PersonaTypeSchema, PersonaSchema, ViewportSchema)
- types/experience.ts — DreamKind, Dream (behavior evidence; important exports: DreamKind, Dream)
- types/ads.ts — ProfileLite (important path; behavior evidence; important exports: ProfileLite)
- types/widgets.ts — isFeedWidget (behavior evidence; important exports: isFeedWidget)
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Depends on **Dreams, Widgets, Windows & Surfaces**
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
- Depends on Dreams, Widgets, Windows & Surfaces
### Public Surfaces
**Production Components:**
`Constants`, `DEFAULT_FEED_HOST_CONFIG`, `DreamSurface`, `JOURNEY_DOMAIN_COLORS`
### Notable Abstractions
- `ProfileLite` — type in `types/ads.ts`
- `Intent` — type in `types/ai-system.ts`
- `IntentEnvelope` — type in `types/ai-system.ts`
- `DrEamsAgent` — interface in `types/ai.ts`
- `ConnectorAccount` — interface in `types/connector.ts`
- `ConnectorAccountPublic` — interface in `types/connector.ts`
- `FeedItemMedia` — interface in `types/connector.ts`
- `UnifiedFeedItem` — interface in `types/connector.ts`
- `FeedItemRow` — interface in `types/connector.ts`
- `ConnectorConnectRequest` — interface in `types/connector.ts`
- `ConnectorConnectResponse` — interface in `types/connector.ts`
- `ConnectorVerifyResponse` — interface in `types/connector.ts`
### Capabilities
- Important contract surface: DrEamsAgent, ConnectorAccount, ConnectorAccountPublic, FeedItemMedia, UnifiedFeedItem
- Important shared type vocabulary: ProfileLite, Intent, IntentEnvelope, DreamWindowState, DreamArtifactType
- Behavior functions: isModuleManifest, isFeedHostConfig, validateFeedHostConfig, isFeedWidget
#### Application Source Structure
```text
└── types
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
    ├── spatial.ts
    ├── supabase.ts
    ├── user-sim.ts
    ├── widget-system-v2.ts
    ├── widgetConfigs.ts
    └── widgets.ts
```
<details><summary>Types application source index (17 files)</summary>

- `types/ads.ts` — TypeScript/JavaScript application module.
- `types/ai-system.ts` — TypeScript/JavaScript application module.
- `types/ai.ts` — TypeScript/JavaScript application module.
- `types/ccc.ts` — TypeScript/JavaScript application module.
- `types/connector.ts` — TypeScript/JavaScript application module.
- `types/dream-window.ts` — TypeScript/JavaScript application module.
- `types/dreamArtifact.ts` — TypeScript/JavaScript application module.
- `types/experience.ts` — TypeScript/JavaScript application module.
- `types/journey.ts` — TypeScript/JavaScript application module.
- `types/marketplace.ts` — TypeScript/JavaScript application module.
- `types/module-manifest.ts` — TypeScript/JavaScript application module.
- `types/spatial.ts` — TypeScript/JavaScript application module.
- `types/supabase.ts` — TypeScript/JavaScript application module.
- `types/user-sim.ts` — TypeScript/JavaScript application module.
- `types/widget-system-v2.ts` — TypeScript/JavaScript application module.
- `types/widgetConfigs.ts` — TypeScript/JavaScript application module.
- `types/widgets.ts` — TypeScript/JavaScript application module.

</details>

## Utils
Utils provides application behavior, contracts, or infrastructure used by DREAMengin. It depends on Backend, System, Core & CoreSurfaces.
### Responsibilities
- Database access, persistence, and server-side data coordination
### Key Modules
- utils/supabase/server.ts — createClient (important path; behavior evidence; important exports: createClient)
### Architectural Relationships
- Depends on **Backend, System, Core & CoreSurfaces**
- Consumes backend, engine, Supabase, or core system services
- Depends on Backend, System, Core & CoreSurfaces
### Capabilities
- Behavior functions: createClient
#### Application Source Structure
```text
└── utils
    └── supabase
        └── server.ts
```
<details><summary>Utils application source index (1 files)</summary>

- `utils/supabase/server.ts` — TypeScript/JavaScript application module.

</details>

<!-- DREAMENGIN_AUTOSYNC:END -->
