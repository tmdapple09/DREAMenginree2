# DREAMengin

> A capability-driven creative operating system for code, games, music, media, simulations, identity, commerce, communication, and shared Dreams.

[![README Autosync](https://img.shields.io/badge/readme-weekly%20autosync-blue)](.github/workflows/readme-autosync.yml)
[![TypeScript](https://img.shields.io/badge/typescript-product%20code-blue)](tsconfig.json)
[![Next.js](https://img.shields.io/badge/next.js-app%20router-black)](next.config.mjs)
[![License](https://img.shields.io/badge/license-repo%20license-yellow)](LICENSE)

## 1. Project Overview

### What is this?

DREAMengin is a web-native creative operating system built around Engins, DayDreams, shared runtime state, communication, social discovery, commerce, and user-owned creative surfaces. It is not a set of isolated apps. It is one product where creative work can move between code, games, content, lab simulations, music, branding, shops, messaging, and social surfaces.

This repository currently exposes about 112 app pages, 125 API route files, and 360 files under `engins/`, with `ARCHITECTURE.md` treated as the project authority for system meaning.

### Why would I use it?

Use DREAMengin when you want a single product shell where creation, publishing, identity, communication, customization, selling, sharing, and runtime surfaces are connected instead of split across unrelated tools. Engins own domain behavior, DayDreams provide user-facing workspaces, and the runtime moves state, events, and context between them.

The practical problem it solves is creative fragmentation. A user should be able to build, preview, discuss, publish, sell, share, customize, and return to work without leaving the ecosystem or rebuilding context manually.

## 2. Getting Started

### Prerequisites

- Node.js 25 for parity with the repository workflow.
- pnpm, because the repo includes `pnpm-lock.yaml` and `pnpm-workspace.yaml`.
- Supabase environment values for authenticated/database-backed flows.

### Installation

```bash
git clone <your-dreamengin-repo-url>
cd <your-dreamengin-repo>
pnpm install
```

## 3. Usage, Configuration & Project Notes

### Usage

Run the local web app:

```bash
pnpm dev
```

Common validation commands:

```bash
pnpm build
pnpm lint
pnpm typecheck
pnpm tsx scripts/generate-readme.ts --full --line-budget 2800
```

Expected local result:

```text
> Next.js starts the DREAMengin app locally.
> README generation rewrites README.md from the professional front door plus product-section evidence.
```

### Configuration

Create a local environment file from the example values and fill in project-specific secrets.

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_your_key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SITE_URL=https://your-domain.com
OWNER_EMAIL=
GROQ_API_KEY=
ANTHROPIC_API_KEY=
YOUTUBEAPI=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
INSTAGRAM_CLIENT_ID=
INSTAGRAM_CLIENT_SECRET=
REPLICATE_API_TOKEN=
ELEVENLABS_API_KEY=
WEBHOOK_VERIFY_TOKEN=
CRON_SECRET=
CI_API_KEY=
METRICS_BEARER_TOKEN=
```

### Documentation

- `ARCHITECTURE.md` is the source of truth for system architecture.
- `FILE_TREE.md` is useful as an import/export map, but the README generator verifies against real files.
- `CONTENTenginSPEC.md`, `GameENGINspec.md`, and the core architecture documents explain major product areas in more depth.

### Contributing

Keep generated README edits reproducible. Change the generator scripts instead of hand-editing generated product sections. Run the README workflow manually after major file moves, new Engins, new routes, or product-surface rewrites.

### License

See `LICENSE` for repository licensing details.

### Acknowledgements

DREAMengin is organized around the project architecture in `ARCHITECTURE.md` and the connected source code in `app/`, `engine/`, `engins/`, `components/`, `dreamdmbar/`, `dreamr/`, `daydreams/`, and the supporting system folders.

## Table of Contents

- [1. Project Overview](#1-project-overview)
- [2. Getting Started](#2-getting-started)
- [3. Usage, Configuration & Project Notes](#3-usage-configuration-project-notes)
- [4. Tech Stack & Monorepo Layout](#4-tech-stack-monorepo-layout)
- [5. The Engins and DayDreams](#5-the-engins-and-daydreams)
- [6. Dual Runtimes](#6-dual-runtimes)
- [7. Shared Dreams](#7-shared-dreams)
- [8. DreamR — Human Media](#8-dreamr-human-media)
- [9. The Shop](#9-the-shop)
- [10. The Marketplace](#10-the-marketplace)
- [11. Ads & User Ads](#11-ads-user-ads)
- [12. The DreamDmBar (dreamdmbar/)](#12-the-dreamdmbar-dreamdmbar)
- [13. Messaging](#13-messaging)
- [14. HomeDream](#14-homedream)
- [15. DreamSpace](#15-dreamspace)
- [16. Dreams (Widgets / Windows / Surfaces)](#16-dreams-widgets-windows-surfaces)
- [17. User-Facing Modularity](#17-user-facing-modularity)
- [18. Custom Engins](#18-custom-engins)
- [19. Full Website Customizability](#19-full-website-customizability)
- [20. Backend, System, Core & CoreSurfaces](#20-backend-system-core-coresurfaces)

<!-- DREAMENGIN_PRODUCT_README:START -->

## 4. Tech Stack & Monorepo Layout

### Plain English
This is the build shape of DREAMengin: the Next.js app, TypeScript source, package scripts, styling system, GitHub automation, Supabase schema, and major folders that make the product ship as one web-native system.

### What users experience
Users do not see the monorepo directly, but this layout decides whether the app loads, routes, stores data, renders screens, and keeps every Engin available from one product shell.

### Repo-grounded detail
Matched repo evidence: 1762 files, about 377,910 readable source lines.

Important source roots:
- `engins` — 360 matched files
- `components` — 324 matched files
- `app` — 278 matched files
- `engine` — 270 matched files
- `.github` — 178 matched files
- `supabase` — 80 matched files
- `scripts` — 52 matched files
- `docs` — 45 matched files

Behavior signals found in matched files:
- commerce — 719 file hits
- rendering — 636 file hits
- runtime — 500 file hits
- auth — 474 file hits
- persistence — 460 file hits
- state — 445 file hits
- mobile-touch — 414 file hits
- events — 358 file hits

Routes and API endpoints:
- `/auth/reset-password ← app/auth/reset-password/page.tsx`
- `/connectors ← app/connectors/page.tsx`
- `/daydream/code ← app/daydream/code/page.tsx`
- `/daydream/forge ← app/daydream/forge/page.tsx`
- `/daydream/lab/portfolio ← app/daydream/lab/portfolio/page.tsx`
- `/edit-profiledream ← app/edit-profiledream/page.tsx`
- `/join ← app/join/page.tsx`
- `/login ← app/login/page.tsx`
- `/profile/[handle] ← app/profile/[handle]/page.tsx`
- `/settings/security ← app/settings/security/page.tsx`
- `/shop ← app/shop/page.tsx`
- `/shop/sell ← app/shop/sell/page.tsx`
- `/view-profile ← app/view-profile/page.tsx`
- `/idari-console ← app/(internal)/idari-console/page.tsx`

Components and hooks:
- `component:CANONICAL_PROJECT_REF`
- `component:CANONICAL_SUPABASE_URL`
- `component:CANONICAL_SUPABASE_PUBLISHABLE_KEY`
- `component:SUPABASE_URL`
- `component:SUPABASE_PUBLISHABLE_KEY`
- `component:SUPABASE_SERVICE_ROLE_KEY`
- `component:SUPABASE_CONFIG`
- `component:ACCENT`
- `component:STAGE_ORDER`
- `component:STAGE_LABELS`
- `component:HANDOFF_PATHS`
- `component:WORKFLOW_CATALOG`
- `component:FALLBACK_NEXT_PATH`
- `component:SAFE_NEXT_ORIGIN`
- `component:DIRS`
- `component:REPORT_FILE`

Exports that define public behavior:
- `supabase (named)`
- `default (default)`
- `SUPABASE_URL (named)`
- `SUPABASE_PUBLISHABLE_KEY (named)`
- `SUPABASE_SERVICE_ROLE_KEY (named)`
- `SUPABASE_CONFIG (named)`
- `getServerSiteOrigin (named)`
- `buildAuthCallbackUrl (named)`
- `getSupabaseAuthCallbackUrl (named)`
- `EnginId (named)`
- `WorkflowStage (named)`
- `STAGE_LABELS (named)`

Import/export connections:
- `@supabase/supabase-js`
- `./types/supabase`
- `next`
- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`
- `typescript`
- `engine/journey/journeyDots.ts`
- `engine/runtime/dualRuntimeBridge.ts`
- `react`
- `engins/rulesets/workflowEngine.ts`
- `types/supabase.ts`
- `@supabase/ssr`

### Key files
- `.github/workflows/generatesupabasetypes.yml` — 57 lines; state/persistence/commerce
- `next.config.mjs` — 207 lines; runtime/persistence/rendering
- `.github/workflows/mobile-nextgen-spec-evolution.yml` — 43 lines; state/commerce
- `supabase/config.ts` — 55 lines; persistence/events/auth · CANONICAL_PROJECT_REF
- `.github/workflows/daydream-all.yml` — 183 lines; state/events/commerce
- `.github/workflows/daydream-brand-engin.yml` — 107 lines; state/runtime/commerce
- `.github/workflows/daydream-code-engin.yml` — 107 lines; state/runtime/commerce
- `.github/workflows/daydream-create-engin.yml` — 107 lines; state/runtime/commerce
- `.github/workflows/daydream-engin-build-cycle.yml` — 362 lines; state/runtime/persistence · ACCENT
- `.github/workflows/daydream-games-engin.yml` — 109 lines; state/runtime/commerce
- `.github/workflows/daydream-lab-engin.yml` — 109 lines; state/runtime/commerce
- `.github/workflows/daydream-music-engin.yml` — 108 lines; state/runtime/commerce
- `.github/workflows/export-repo-to-artifacts.yml` — 830 lines; state/runtime/persistence
- `.github/workflows/export-src-only.yml` — 74 lines; state/persistence/commerce
- `.github/workflows/gameengin-ai-agent.yml` — 240 lines; state/runtime/mobile-touch
- `.github/workflows/games-library-ai-agent.yml` — 124 lines; state/runtime/rendering
- `.github/workflows/issue-bot.yml` — 321 lines; state/events/mobile-touch
- `.github/workflows/neural_decision_engine.yml` — 249 lines; state/commerce
- `.github/workflows/refreshlock.yml` — 59 lines; state/commerce
- `.github/workflows/report-driven-coding-agent.yml` — 219 lines; state/commerce
- `.github/workflows/spec-engin-ai-agent.yml` — 225 lines; state/commerce
- `.github/workflows/sql-migration-guard.yml` — 693 lines; state/runtime/persistence
- `.github/workflows/update-embed-feed.yml` — 177 lines; state/runtime/rendering
- `config/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `engins/rulesets/workflowEngine.ts` — 281 lines; events/rendering/commerce · STAGE_ORDER
- `eslint.config.mjs` — 104 lines; rendering/commerce
- `package.json` — 116 lines; runtime/persistence/rendering
- `pnpm-lock.yaml` — 6804 lines; runtime/persistence/events
- `supabase/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `supabase/auth/nextRedirect.ts` — 61 lines; FALLBACK_NEXT_PATH
- `supabase/config.toml` — 94 lines; runtime/persistence/auth
- `supabase/migrations/20260310000001_profiles_widget_config.sql` — 22 lines; rendering
- `tailwind.config.ts` — 99 lines; commerce
- `.github/workflows/elite-gameengin-evolution.yml` — 426 lines; state/runtime/rendering
- Plus 1728 additional matched files summarized by roots/signals above.

## 5. The Engins and DayDreams

### Plain English
Engins are the production systems; DayDreams are the user-facing creative spaces around them. This section connects engine code, pages, panels, shells, and components that let users create code, games, music, simulations, media, and brand work.

### What users experience
A user experiences this as switching into a real studio surface: CodeEngin, GameEngin, ContentEngin, LabEngin, StarMakerEngin, BrandingEngin, and their DayDream wrappers.

### Repo-grounded detail
Matched repo evidence: 1340 files, about 351,758 readable source lines.

Important source roots:
- `engins` — 360 matched files
- `engine` — 270 matched files
- `components` — 165 matched files
- `.github` — 128 matched files
- `tests` — 123 matched files
- `app` — 112 matched files
- `docs` — 44 matched files
- `scripts` — 26 matched files

Behavior signals found in matched files:
- rendering — 549 file hits
- commerce — 514 file hits
- runtime — 511 file hits
- mobile-touch — 312 file hits
- events — 311 file hits
- state — 299 file hits
- auth — 289 file hits
- persistence — 280 file hits

Routes and API endpoints:
- `/engines/music/studio ← app/engines/music/studio/page.tsx`
- `/engines/music/arrange ← app/engines/music/arrange/page.tsx`
- `/engines/music/library ← app/engines/music/library/page.tsx`
- `/engines/brand/campaigns ← app/engines/brand/campaigns/page.tsx`
- `/engines/brand/identity ← app/engines/brand/identity/page.tsx`
- `/engines/code/ai ← app/engines/code/ai/page.tsx`
- `/engines/code/notebook ← app/engines/code/notebook/page.tsx`
- `/engines/code/projects ← app/engines/code/projects/page.tsx`
- `/engines/games/builder ← app/engines/games/builder/page.tsx`
- `/engines/games/library ← app/engines/games/library/page.tsx`
- `/engines/games/scores ← app/engines/games/scores/page.tsx`
- `/engines/lab/data ← app/engines/lab/data/page.tsx`
- `/engines/lab/experiments ← app/engines/lab/experiments/page.tsx`
- `/engines/lab/quantum ← app/engines/lab/quantum/page.tsx`

Components and hooks:
- `component:ACCENT`
- `component:NAV_ITEMS`
- `component:MusicStudioPage`
- `component:ImplicitAssetWorkspace`
- `component:StudioPanel`
- `component:STAGE_ORDER`
- `component:STAGE_LABELS`
- `component:HANDOFF_PATHS`
- `component:WORKFLOW_CATALOG`
- `component:DEFAULT_CELLS`
- `component:DEFAULT_WORKSPACE_FILES`
- `component:HomePage`
- `component:DEFAULT_DOMAIN`
- `component:PARAMS`
- `component:ACTION_TYPES`
- `component:MANIFEST`

Exports that define public behavior:
- `metadata (named)`
- `MusicStudioPage (default)`
- `ImplicitAssetWorkspace (default)`
- `StudioPanel (default)`
- `WorkspaceIntentLog (named)`
- `useImplicitAssetWorkspace (named)`
- `EnginId (named)`
- `WorkflowStage (named)`
- `STAGE_LABELS (named)`
- `isValidTransition (named)`
- `HandoffKind (named)`
- `HandoffPath (named)`

Import/export connections:
- `components/engines/music/panels/dream.panel.StudioPanel.tsx`
- `components/engines/shared`
- `engine/dev-bypass.ts`
- `supabase/server/serverClient.ts`
- `supabase/client/safeGetUser.ts`
- `next/navigation`
- `next/server`
- `engins/contentengin/AssetViewport.tsx`
- `engins/isosurfaceAssetPipeline.ts`
- `engins/renderengin`
- `engins/contentengin/useImplicitAssetWorkspace.ts`
- `react`

### Key files
- `app/engines/music/studio/page.tsx` — 40 lines; page · persistence/auth · ACCENT
- `engins/contentengin/ImplicitAssetWorkspace.tsx` — 77 lines; state/runtime/mobile-touch · ImplicitAssetWorkspace · useImplicitAssetWorkspace
- `components/engines/music/panels/dream.panel.StudioPanel.tsx` — 188 lines; state/events/auth · StudioPanel · useState
- `engins/contentengin/useImplicitAssetWorkspace.ts` — 376 lines; state/runtime/rendering · useImplicitAssetWorkspace
- `engins/rulesets/workflowEngine.ts` — 281 lines; events/rendering/commerce · STAGE_ORDER
- `engins/rulesets/code/codeEnginRuleSet.ts` — 395 lines; runtime · DEFAULT_CELLS
- `app/engines/music/arrange/page.tsx` — 40 lines; page · persistence/auth · ACCENT
- `app/engines/music/library/page.tsx` — 40 lines; page · persistence/auth · ACCENT
- `components/engines/code/panels/dream.panel.ProjectsPanel.tsx` — 201 lines; state/persistence/auth · ProjectsPanel · useState
- `components/engines/music/dream.MusicEnginApp.tsx` — 33 lines; StarMakerEngin
- `components/engines/shared/dream.EnginRuleSet.ts` — 51 lines; runtime/rendering/commerce
- `engins/gameengin/dream-engine.ts` — 166 lines; persistence/events/rendering · DreamEngine
- `engins/rulesets/brand/brandEnginRuleSet.ts` — 241 lines; runtime/persistence · DEFAULT_METRICS
- `engins/rulesets/brand/useBrandEnginRuntime.ts` — 109 lines; state/runtime/rendering · useBrandEnginRuntime
- `engins/rulesets/content/contentEnginRuleSet.ts` — 37 lines; runtime/rendering · DEFAULT_DOMAIN
- `engins/rulesets/content/useContentEnginRuntime.ts` — 109 lines; state/runtime/rendering · useContentEnginRuntime
- `engins/rulesets/game/gameEnginRuleSet.ts` — 302 lines; runtime/persistence/events · GRAVITY_VALUES
- `engins/rulesets/game/useGameEnginRuntime.ts` — 119 lines; state/runtime/rendering · useGameEnginRuntime
- `engins/rulesets/lab/useLabEnginRuntime.ts` — 109 lines; state/runtime/rendering · useLabEnginRuntime
- `engins/rulesets/music/starMakerEnginRuleSet.ts` — 265 lines; runtime/persistence/events · DEFAULT_STEMS
- `engins/rulesets/music/useStarMakerEnginRuntime.ts` — 109 lines; state/runtime/rendering · useStarMakerEnginRuntime
- `app/engines/brand/campaigns/page.tsx` — 31 lines; page · persistence/auth · ACCENT
- `app/engines/brand/identity/page.tsx` — 31 lines; page · persistence/auth · ACCENT
- `app/engines/code/ai/page.tsx` — 32 lines; page · persistence/auth · ACCENT
- `app/engines/code/notebook/page.tsx` — 42 lines; page · persistence/auth · ACCENT
- `app/engines/code/projects/page.tsx` — 32 lines; page · persistence/auth · ACCENT
- `app/engines/games/builder/page.tsx` — 51 lines; page · persistence/auth/commerce · ACCENT
- `app/engines/games/library/page.tsx` — 51 lines; page · persistence/auth/commerce · ACCENT
- `app/engines/games/scores/page.tsx` — 51 lines; page · persistence/auth/commerce · ACCENT
- `app/engines/lab/data/page.tsx` — 32 lines; page · persistence/auth · ACCENT
- `app/engines/lab/experiments/page.tsx` — 32 lines; page · persistence/auth · ACCENT
- `app/engines/lab/quantum/page.tsx` — 32 lines; page · persistence/auth · ACCENT
- `app/engines/music/layout.tsx` — 18 lines; MusicEnginLayout
- `components/engines/brand/dream.BrandEnginApp.tsx` — 29 lines
- Plus 1306 additional matched files summarized by roots/signals above.

## 6. Dual Runtimes

### Plain English
Dual runtimes are the split execution model that lets DREAMengin coordinate navigation, state, snapshots, handoffs, surface lifecycle, and active Engin behavior without making every screen own the whole system.

### What users experience
Users feel this when one part of the app keeps context while another part opens a studio, preview, editor, remote surface, or companion panel without losing state.

### Repo-grounded detail
Matched repo evidence: 379 files, about 200,456 readable source lines.

Important source roots:
- `engine` — 107 matched files
- `engins` — 55 matched files
- `tests` — 44 matched files
- `components` — 29 matched files
- `docs` — 29 matched files
- `.github` — 18 matched files
- `dreamdmbar` — 16 matched files
- `scripts` — 13 matched files

Behavior signals found in matched files:
- runtime — 281 file hits
- rendering — 255 file hits
- events — 188 file hits
- commerce — 167 file hits
- state — 162 file hits
- mobile-touch — 148 file hits
- auth — 122 file hits
- persistence — 120 file hits

Routes and API endpoints:
- `/dreamdmbar/dualruntime ← app/dreamdmbar/dualruntime/page.tsx`
- `POST /api/connectors/[provider]/sync ← app/api/connectors/[provider]/sync/route.ts`
- `GET /api/youtube/channel ← app/api/youtube/channel/route.ts`
- `POST /api/ai/idari ← app/api/ai/idari/route.ts`
- `POST /api/ai/execute ← app/api/ai/execute/route.ts`

Components and hooks:
- `component:VM_QUEUE_CAPACITY`
- `component:VM_MESSAGE_SIZE`
- `component:VM_QUEUE_BUF_SIZE`
- `component:ENTRY_WORDS`
- `component:ENTRY_BYTES`
- `component:PAYLOAD_PREFIX_BYTES`
- `component:DEFAULT_ALLOC_START`
- `component:POLL_INTERVAL_MS`
- `component:BUS_WASM_URL`
- `component:MAX_DURABLE_QUEUE_SIZE`
- `component:EVICT_EVERY_N`
- `component:MAX_ARTIFACTS`
- `component:INTENT_BUS_COHERENCE_CAPACITY`
- `component:DREAMDM_BAR_CAPABILITIES`
- `component:CAPABILITY_DESCRIPTORS`
- `component:DualRuntimeContext`

Exports that define public behavior:
- `DualRuntimeChannel (named)`
- `VMRegion (named)`
- `QuantumComputeResult (named)`
- `VMWorkload (named)`
- `ChannelEventKey (named)`
- `ChannelEventPayload (named)`
- `BridgeEventHandler (named)`
- `UnsubscribeFn (named)`
- `PeerState (named)`
- `AnyBridgeEmission (named)`
- `AckStatus (named)`
- `QueuedEmission (named)`

Import/export connections:
- `engine/runtime/madMaxiSnapshotBridge.ts`
- `events`
- `pending`
- `engine/vm/wasmGpuVM.ts`
- `engine/identity/canonical-names.ts`
- `engine/runtime/dualRuntime.ts`
- `engine/runtime/dualRuntimeBridge.ts`
- `engine/runtime/runtimeContainer.ts`
- `engins/forgeengin/forge/forgeRegistry.ts`
- `types/dreamArtifact.ts`
- `engine/engin-runtime/EnginBaseState.ts`
- `engine/engin-runtime/EnginCapabilities.ts`

### Key files
- `engine/runtime/dualRuntimeBridge.ts` — 873 lines; state/runtime/events · VM_QUEUE_CAPACITY
- `engine/runtime/madMaxiSnapshotBridge.ts` — 67 lines; runtime/rendering/commerce
- `engine/runtime/dreamOSBus.ts` — 792 lines; state/runtime/events · MAX_ARTIFACTS
- `engine/runtime/useDualRuntime.ts` — 184 lines; state/runtime/events · useDualRuntime
- `components/runtime/dream.DualRuntimeContainer.tsx` — 246 lines; state/runtime/rendering · DualRuntimeContext · useDualRuntime
- `engine/runtime/channelMetrics.ts` — 141 lines; runtime/events/rendering
- `engine/runtime/useEnginCoopSync.ts` — 120 lines; state/runtime/events · useEnginCoopSync
- `dreamdmbar/runtime/bridgeSeamFlow.ts` — 214 lines; runtime/events/rendering · SEAM_CHANNEL_COLORS
- `engine/runtime/dualRuntime.ts` — 259 lines; runtime/events/mobile-touch · DEFAULT_DUAL_RUNTIME
- `engine/runtime/EnginDispatcher.ts` — 725 lines; state/runtime/mobile-touch · WASM_PAGE_BYTES
- `engine/runtime/runtimeChannel.ts` — 268 lines; runtime/persistence/events
- `engine/vm/dual-runtime.ts` — 259 lines; state/runtime/events
- `engine/runtime/dreamsurface/dreamsurface.bridge.ts` — 51 lines; runtime/events
- `engine/runtime/snapshotFingerprint.ts` — 145 lines; runtime/rendering
- `engine/runtime/useDualRuntimePersistence.ts` — 187 lines; state/runtime/persistence · STORAGE_KEY · useDualRuntimePersistence
- `engine/runtime/useEnginBridge.ts` — 626 lines; state/runtime/events · useCodeEnginBridge
- `engine/runtime/useSharedEnginChannel.ts` — 163 lines; state/runtime/events · useSharedEnginChannel
- `dreamdmbar/runtime/DreamSystemContext.tsx` — 401 lines; state/runtime/persistence · DEFAULT_BAR_INTENT · useDreamSystem
- `engine/runtime/apperception.ts` — 123 lines; runtime/rendering
- `engine/runtime/engin.eventbus.ts` — 41 lines; events
- `engine/runtime/iEngine.ts` — 362 lines; runtime/events/rendering
- `engine/runtime/superciliousPlatformRuntime.ts` — 229 lines; runtime/events/rendering · COMPETING_PLATFORMS
- `components/runtime/dream.RuntimeView.tsx` — 432 lines; state/runtime/mobile-touch · ENGIN_SURFACES · useMemo
- `engine/runtime/enginWorkflowRegistry.ts` — 599 lines; runtime/events/mobile-touch · ENGIN_KEYS
- `engine/runtime/index.ts` — 478 lines; state/runtime/persistence
- `engine/runtime/coercionTable.ts` — 212 lines; runtime/mobile-touch/rendering · MIME_MAP
- `engine/runtime/instanceManager.ts` — 318 lines; runtime/persistence/events · LS_KEY · useInstanceManager
- `engine/runtime/memory.ts` — 660 lines; runtime/events/mobile-touch · MEMORY_SIZE
- `engine/runtime/moduleRegistry.ts` — 170 lines; runtime/events/rendering · useModuleRegistry
- `engine/runtime/offlineQueue.ts` — 267 lines; runtime/persistence/events · STORAGE_KEY
- `engine/runtime/seamClipboard.ts` — 272 lines; state/runtime/events · MAX_PAYLOAD_BYTES
- `engine/vm/bus-events.ts` — 56 lines; runtime/events
- `engine/vm/dualVMCoordinator.ts` — 49 lines; runtime/rendering
- `components/runtime/dream.shell.RuntimeShell.tsx` — 352 lines; state/runtime/persistence · MIN_ZOOM · useState
- Plus 345 additional matched files summarized by roots/signals above.

## 7. Shared Dreams

### Plain English
Shared Dreams are the collaboration and publishing layer for Dreams that can be saved, shown, shared, synchronized, or experienced by more than one person.

### What users experience
Users feel this when a Dream becomes something social: visible posts, shared sessions, public/private access, saved creative objects, and collaboration signals.

### Repo-grounded detail
Matched repo evidence: 819 files, about 261,371 readable source lines.

Important source roots:
- `components` — 279 matched files
- `app` — 111 matched files
- `supabase` — 80 matched files
- `engine` — 60 matched files
- `tests` — 55 matched files
- `docs` — 45 matched files
- `.github` — 35 matched files
- `dreamr` — 29 matched files

Behavior signals found in matched files:
- commerce — 460 file hits
- rendering — 358 file hits
- state — 303 file hits
- auth — 301 file hits
- mobile-touch — 293 file hits
- events — 265 file hits
- persistence — 261 file hits
- runtime — 260 file hits

Routes and API endpoints:
- `/daydream/brand ← app/daydream/brand/page.tsx`
- `/daydream/music/upload ← app/daydream/music/upload/page.tsx`
- `/dreamdmbar/dualruntime ← app/dreamdmbar/dualruntime/page.tsx`
- `/edit-profiledream ← app/edit-profiledream/page.tsx`
- `/homedream ← app/homedream/page.tsx`
- `/daydream/code ← app/daydream/code/page.tsx`
- `/daydream/create ← app/daydream/create/page.tsx`
- `/daydream/lab ← app/daydream/lab/page.tsx`
- `/daydream/lab/portfolio ← app/daydream/lab/portfolio/page.tsx`
- `/daydream/music ← app/daydream/music/page.tsx`
- `/daydream/constellation ← app/daydream/constellation/page.tsx`
- `/daydream/forge ← app/daydream/forge/page.tsx`
- `/daydream/games ← app/daydream/games/page.tsx`
- `/dreamr ← app/dreamr/page.tsx`

Components and hooks:
- `component:SharedDreamContext`
- `component:SharedDreamProvider`
- `component:ENGIN_SLOTS`
- `component:SharedDreamRuntimeInner`
- `component:SharedDreamRuntime`
- `component:InviteFlow`
- `component:SharedDreamCanvas`
- `component:POST`
- `component:GET`
- `component:QuerySchema`
- `component:SURFACE`
- `component:PEER_COLORS`
- `component:SharedDreamShell`
- `component:PatchSchema`
- `component:PATCH`
- `component:CreateSchema`

Exports that define public behavior:
- `SharedDreamSession (named)`
- `DreamEventType (named)`
- `DreamBroadcastPayload (named)`
- `DreamEventHandler (named)`
- `DreamSessionRole (named)`
- `DreamSessionMode (named)`
- `DreamPresenceUpdate (named)`
- `SharedDreamSessionOptions (named)`
- `createSharedDreamSession (named)`
- `joinSharedDreamSession (named)`
- `broadcastCursorPosition (named)`
- `broadcastEdit (named)`

Import/export connections:
- `engine/io.ts`
- `engine/collaboration/index.ts`
- `supabase/client/client.ts`
- `react`
- `engine/runtime/dualRuntimeBridge.ts`
- `engine/sharedDream/useSharedDreamSession.ts`
- `components/shared-dream/dream.InviteFlow.tsx`
- `components/shared-dream/dream.SharedDreamCanvas.tsx`
- `components/shared-dream/dream.SharedDreamProvider.tsx`
- `supabase/client/safeGetUser.ts`
- `engine/sharedDream`
- `supabase/server/serverClient.ts`

### Key files
- `supabase/migrations/20260516000300_shared_dream_sessions.sql` — 134 lines; events/mobile-touch/auth
- `engine/sharedDream.ts` — 168 lines; runtime/persistence/events
- `components/shared-dream/dream.SharedDreamProvider.tsx` — 259 lines; state/persistence/events · SharedDreamContext · useSharedDream
- `components/shared-dream/dream.SharedDreamRuntime.tsx` — 422 lines; state/runtime/events · ENGIN_SLOTS · useEffect
- `engine/sharedDream/useSharedDreamSession.ts` — 328 lines; state/runtime/persistence · useSharedDreamSession
- `hooks/useSharedDream.ts` — 270 lines; state/runtime/persistence · useSharedDream
- `components/shared-dream/dream.InviteFlow.tsx` — 134 lines; state/persistence/commerce · InviteFlow · useSharedDream
- `components/shared-dream/dream.SharedDreamCanvas.tsx` — 83 lines; mobile-touch/rendering/commerce · SharedDreamCanvas · useSharedDream
- `components/shared-dream/index.ts` — 22 lines; runtime
- `supabase/migrations/20260325000000_phase8f_daydream_network.sql` — 113 lines; events/auth
- `supabase/migrations/20260322000000_phase8b_dream_windows.sql` — 239 lines; events/auth/commerce
- `supabase/migrations/20260405000001_dreamr_feed_registry.sql` — 149 lines; persistence/auth
- `supabase/migrations/20260310000010_dreamdm_bar_pass2.sql` — 57 lines; persistence/auth
- `supabase/migrations/20260417000000_repurpose_nods_as_dream_docs.sql` — 133 lines; events/auth/commerce
- `supabase/migrations/20260417000001_dream_docs_search_rpc.sql` — 49 lines; events
- `supabase/migrations/20260426000100_rename_widgets_to_dreams.sql` — 110 lines; runtime/auth
- `supabase/migrations/20260516000100_dreamr_tally.sql` — 58 lines; runtime/events/auth
- `supabase/migrations/20260310000002_profile_dream_widgets.sql` — 9 lines; commerce
- `app/api/dreams/feed/route.ts` — 152 lines; api · persistence/auth · POST
- `app/api/dreams/instances/route.ts` — 113 lines; api · persistence/rendering/auth · QuerySchema
- `app/api/dreams/transfer/route.ts` — 65 lines; api · runtime/persistence/rendering · SURFACE
- `components/dreams/dream.shell.SharedDreamShell.tsx` — 402 lines; state/events/mobile-touch · PEER_COLORS · useSharedDream
- `engine/runtime/useSharedEnginChannel.ts` — 163 lines; state/runtime/events · useSharedEnginChannel
- `app/api/shared-dream/sessions/[id]/route.ts` — 134 lines; api · persistence/events/rendering · PatchSchema
- `app/api/shared-dream/sessions/route.ts` — 92 lines; api · persistence/events/rendering · CreateSchema
- `daydreams/shared/useDaydreamPersistence.ts` — 147 lines; state/persistence/auth · useDaydreamPersistence
- `daydreams/shared/useDaydreamState.ts` — 93 lines; persistence/auth · useDaydreamState
- `docs/issue-617-readme-section-bot-8-view-profile-public-shared-.md` — 68 lines
- `components/engines/shared/dream.bar.EnginNavBar.tsx` — 51 lines; commerce · EnginNavBar · usePathname
- `components/engines/shared/dream.EnginProvider.tsx` — 54 lines; state/rendering · EnginContext · useEngin
- `components/engines/shared/dream.EnginRuleSet.ts` — 51 lines; runtime/rendering/commerce
- `components/engines/shared/dream.makeEnginApp.tsx` — 64 lines; rendering/commerce · EnginApp · useRouter
- `components/engines/shared/dream.shell.EnginAppShell.tsx` — 114 lines; rendering/commerce · EnginAppShell · useEffect
- `supabase/migrations/20260316000000_visibility_mappings.sql` — 89 lines; rendering/auth
- Plus 785 additional matched files summarized by roots/signals above.

## 8. DreamR — Human Media

### Plain English
DreamR is the human media layer: feed, discovery, profile, posts, creator identity, and the browsing surfaces where Dreams become media instead of private project files.

### What users experience
Users experience DreamR as the social/media side of DREAMengin: scrolling, viewing people, opening Dreams, editing identity, and discovering what others make.

### Repo-grounded detail
Matched repo evidence: 310 files, about 105,914 readable source lines.

Important source roots:
- `app` — 56 matched files
- `components` — 37 matched files
- `engine` — 31 matched files
- `tests` — 30 matched files
- `dreamr` — 29 matched files
- `docs` — 25 matched files
- `supabase` — 22 matched files
- `engins` — 18 matched files

Behavior signals found in matched files:
- commerce — 165 file hits
- auth — 141 file hits
- rendering — 141 file hits
- persistence — 101 file hits
- mobile-touch — 93 file hits
- events — 89 file hits
- runtime — 89 file hits
- state — 60 file hits

Routes and API endpoints:
- `/dreamr ← app/dreamr/page.tsx`
- `/edit-profiledream ← app/edit-profiledream/page.tsx`
- `/view-profile ← app/view-profile/page.tsx`
- `/profile/[handle] ← app/profile/[handle]/page.tsx`
- `/about ← app/about/page.tsx`
- `/daydream/media-vault ← app/daydream/media-vault/page.tsx`
- `/engines/brand/identity ← app/engines/brand/identity/page.tsx`
- `/feed-settings ← app/feed-settings/page.tsx`
- `/profile ← app/profile/page.tsx`
- `/settings/feed ← app/settings/feed/page.tsx`
- `/homedream ← app/homedream/page.tsx`
- `/connectors ← app/connectors/page.tsx`
- `/daydream/brand ← app/daydream/brand/page.tsx`
- `/daydream/create ← app/daydream/create/page.tsx`

Components and hooks:
- `component:GET`
- `component:DR`
- `component:SocialBadge`
- `component:DreamRCreatorPanel`
- `component:DWELL_VIEW_THRESHOLD_MS`
- `component:REDISTRIBUTION_NOTICE_DURATION_MS`
- `component:RIGHT_SWIPE_SCROLL_BUFFER_CARDS`
- `component:REDISTRIBUTION_EXPLANATION`
- `component:DREAMR_TOPICS`
- `component:ActionBtn`
- `component:VideoPostCard`
- `component:PostCard`
- `component:CAPTION_LIMIT`
- `component:SuggestedContentCard`
- `component:SuggestedCreatorCard`
- `component:DreamRFeed`

Exports that define public behavior:
- `GET (named)`
- `DreamRCreatorPanel (default)`
- `DREAMR_TOPICS (named)`
- `DreamRFeed (default)`
- `FeedPost (named)`
- `UseLiveFeedReturn (named)`
- `useLiveFeed (named)`
- `SocialHumanityInput (named)`
- `HumanityScore (named)`
- `computeSocialHumanityScore (named)`
- `EmbedFeedItem (named)`
- `EmbedFeedAlgorithm (named)`

Import/export connections:
- `app/dreamdmbar/_components/dreamr/api/feedHandler.ts`
- `dreamr/feed/useLiveFeed.ts`
- `lucide-react`
- `next/image`
- `next/link`
- `react`
- `components/dreamr/dream.panel.DreamRChannelPanel.tsx`
- `components/dreamr/dream.panel.DreamRCreatorPanel.tsx`
- `dreamdmbar/runtime/DreamSystemContext.tsx`
- `dreamr/runtime/swipePersonalization.ts`
- `dreamr/runtime/torridityLedger.ts`
- `types/connector.ts`

### Key files
- `app/api/dreamr/feed/route.ts` — 50 lines; api · rendering · GET
- `components/dreamr/dream.panel.DreamRCreatorPanel.tsx` — 689 lines; state/mobile-touch/rendering · DR · useState
- `dreamr/components/dreamrfeed.tsx` — 1233 lines; state/runtime/events · DR · useState
- `dreamr/feed/useLiveFeed.ts` — 301 lines; state/persistence/events · useLiveFeed
- `dreamr/runtime/socialHumanityScore.ts` — 191 lines; persistence/commerce · DEFAULT_THRESHOLD
- `dreamr/feeds/embedFeedLoader.ts` — 108 lines; runtime/events/rendering · FEED_PATH
- `dreamr/social-feed.ts` — 115 lines; rendering/auth
- `dreamr/feed/hashtags.ts` — 167 lines; MAX_TAGS_PER_POST
- `dreamr/feed/useYouTubeLiveFeed.ts` — 222 lines; state/persistence/events · FEED_MAX · useYouTubeLiveFeed
- `dreamr/runtime/feedCursor.ts` — 88 lines; rendering · MAX_SEEN_IDS
- `app/api/dreamr/suggested/route.ts` — 235 lines; api · runtime/persistence/auth · GET
- `app/dreamr/page.tsx` — 81 lines; page · persistence/events/auth · DEV_BYPASS_USER_ID
- `components/dreamr/dream.panel.DreamRChannelPanel.tsx` — 323 lines; state/events/mobile-touch · DR · useState
- `dreamr/feed/feedTopics.ts` — 80 lines; persistence · ALL_TOPICS
- `dreamr/activity/visibility-score.ts` — 234 lines; persistence/auth/commerce
- `dreamr/runtime/swipePersonalization.ts` — 144 lines; LONGFORM_CONTENT_THRESHOLD
- `dreamr/runtime/torridityLedger.ts` — 186 lines; rendering · TORRIDITY_LEDGER_CONFIG
- `dreamr/activity/types.ts` — 345 lines; persistence · TIER_MULTIPLIERS
- `dreamr/bot-detection/index.ts` — 198 lines; rendering · HUMAN_MIN_DEVIATION_PX · useViewTimer
- `dreamr/bot-detection/swipe-physics.ts` — 230 lines; commerce · N
- `dreamr/botDetection.ts` — 293 lines; mobile-touch · MAX_HISTORY
- `dreamr/runtime/closeFriendsVisibility.ts` — 100 lines; persistence/auth
- `dreamr/runtime/swipeCalibration.ts` — 115 lines; mobile-touch · FACTORY_DEFAULTS
- `dreamr/torridity.ts` — 163 lines; TORRIDITY_N
- `dreamr/torridity/constants.ts` — 20 lines
- `app/api/dreamr/tally/route.ts` — 97 lines; api · persistence/events/rendering · TallyBodySchema
- `app/edit-profiledream/page.tsx` — 561 lines; page · state/persistence/events · EditProfileDreamPage · useState
- `components/dreamr/dream.CloseFriendsSettings.tsx` — 250 lines; state/rendering/commerce · ACCENT · useState
- `dreamr/activity/aqs.ts` — 191 lines; persistence/auth/commerce
- `dreamr/activity/boogieActivityPolicy.ts` — 62 lines; SEARCH_ONLY_CATEGORIES
- `dreamr/activity/revenueSplit.ts` — 48 lines; ACTIVITY_REVENUE_SPLIT
- `dreamr/activity/scoring.ts` — 174 lines; BASE_POINTS_BY_TIER
- `dreamr/torridity/physics.ts` — 118 lines
- `app/view-profile/page.tsx` — 365 lines; page · persistence/mobile-touch/rendering · ViewProfilePage
- Plus 276 additional matched files summarized by roots/signals above.

## 9. The Shop

### Plain English
The Shop is the owned storefront area for a user or creator. It covers the files that present products, services, offers, carts, and purchase-related surfaces tied to a person or brand.

### What users experience
Users feel this as a creator storefront: things to buy, services to offer, and commercial parts attached to the creator identity.

### Repo-grounded detail
Matched repo evidence: 57 files, about 10,102 readable source lines.

Important source roots:
- `engins` — 15 matched files
- `components` — 9 matched files
- `tests` — 8 matched files
- `app` — 7 matched files
- `docs` — 3 matched files
- `engine` — 3 matched files
- `agents` — 2 matched files
- `public` — 2 matched files

Behavior signals found in matched files:
- commerce — 51 file hits
- rendering — 30 file hits
- runtime — 26 file hits
- auth — 19 file hits
- events — 15 file hits
- persistence — 14 file hits
- state — 13 file hits
- mobile-touch — 12 file hits

Routes and API endpoints:
- `/shop ← app/shop/page.tsx`
- `/shop/sell ← app/shop/sell/page.tsx`
- `/gameengin/cartridges/[id] ← app/gameengin/cartridges/[id]/page.tsx`
- `/gameengin/cartridges ← app/gameengin/cartridges/page.tsx`
- `/marketplace ← app/marketplace/page.tsx`
- `GET|POST|PUT|DELETE /api/shop ← app/api/shop/route.ts`
- `POST /api/ads/orders ← app/api/ads/orders/route.ts`

Components and hooks:
- `component:ShopPage`
- `component:GET`
- `component:POST`
- `component:PUT`
- `component:DELETE`
- `component:SHOP_TABLE`
- `component:SHOP_LISTING_REQUIRED_FIELDS`
- `component:SHOP_TITLE_MAX_LENGTH`
- `component:SHOP_PRICE_MIN`
- `component:SHOP_ORDERS_TABLE`
- `component:SHOP_ORDERS_PRIVATE_FIELDS`
- `component:SellItemPage`
- `component:PHASE8E_MIGRATION`
- `component:SOURCE_EXTENSIONS`
- `component:MEDIA_EXTENSIONS`
- `component:EXCLUDED_PARTS`

Exports that define public behavior:
- `metadata (named)`
- `ShopPage (default)`
- `GET (named)`
- `POST (named)`
- `PUT (named)`
- `DELETE (named)`
- `SHOP_TABLE (named)`
- `SHOP_LISTING_REQUIRED_FIELDS (named)`
- `SHOP_TITLE_MAX_LENGTH (named)`
- `SHOP_PRICE_MIN (named)`
- `ShopListingInput (named)`
- `ShopListingRecord (named)`

Import/export connections:
- `components/ui/dream.DreamWord.tsx`
- `supabase/server/serverClient.ts`
- `supabase/client/safeGetUser.ts`
- `lucide-react`
- `next/link`
- `next/navigation`
- `next/server`
- `engine/shop/listings.ts`
- `types/supabase.ts`
- `@supabase/supabase-js`
- `utils/index.ts`
- `supabase/client/client.ts`

### Key files
- `app/shop/page.tsx` — 130 lines; page · persistence/auth/commerce · ShopPage
- `app/api/shop/route.ts` — 181 lines; api · persistence/auth/commerce · GET
- `engine/shop/listings.ts` — 124 lines; rendering/commerce · SHOP_TABLE
- `supabase/migrations/20260324000001_phase8e_shop_marketplace.sql` — 186 lines; events/auth/commerce
- `app/shop/sell/page.tsx` — 201 lines; page · state/persistence/rendering · SellItemPage · useState
- `tests/phase8e-shop-marketplace.test.ts` — 649 lines; persistence/events/rendering · PHASE8E_MIGRATION
- `scripts/readme-autosync.ts` — 580 lines; state/runtime/persistence · SOURCE_EXTENSIONS
- `components/gameengin/dream.cartridge.CartridgeBrowser.tsx` — 396 lines; state/mobile-touch/rendering · ALL · useState
- `components/gameengin/dream.cartridge.FeaturedCartridges.tsx` — 73 lines; rendering/commerce · FeaturedCartridges
- `components/landing/dream.LandingProductStatement.tsx` — 146 lines; events/commerce · LandingProductStatement
- `engins/gameengin/cartridge.ts` — 402 lines; runtime/persistence/events · ENGINE_VERSION
- `engins/gameengin/cartridges/manifest.ts` — 172 lines; runtime/mobile-touch/rendering · CARTRIDGE_MANIFEST
- `supabase/migrations/20260324000000_phase8e_orders.sql` — 62 lines; auth/commerce
- `tests/phase8e-orders.test.ts` — 90 lines; persistence/events/rendering
- `app/api/ads/orders/route.ts` — 91 lines; api · persistence/mobile-touch/rendering · PLATFORM_SHARE_PERCENT
- `app/gameengin/cartridges/[id]/page.tsx` — 34 lines; page · runtime/rendering/commerce · GameEnginCartridgePage
- `app/gameengin/cartridges/page.tsx` — 15 lines; page · commerce · GameEnginCartridgesPage
- `components/engines/render/dream.RenderServiceDiagnostics.tsx` — 124 lines; state/runtime/events · RenderDiagnosticsSurface · useMemo
- `components/gameengin/dream.cartridge.CartridgeErrorBoundary.tsx` — 96 lines; runtime/events/rendering · useGlobalCrashListener
- `components/gameengin/dream.cartridge.CartridgeLauncher.tsx` — 293 lines; state/runtime/rendering · CartridgeLauncher · useCallback
- `components/gameengin/dream.CartridgeRegistryBootstrap.tsx` — 24 lines; runtime/commerce · CartridgeRegistryBootstrap · useEffect
- `components/music/dream.SoundRecorder.tsx` — 459 lines; state/events/mobile-touch · SoundRecorder · useState
- `docs/issue-608-readme-section-bot-1-product-law-16-foundational.md` — 68 lines
- `docs/PRODUCT_DEFINITION.md` — 251 lines; runtime/rendering/auth
- `engine/generated/cartridges.ts` — 8 lines; commerce
- `engins/gameengin/brain/genre-dna/live-service.json` — 48 lines
- `engins/gameengin/brain/originality-registry/by-cartridge/mad-maxi.json` — 14 lines; commerce
- `engins/gameengin/cartridge-manifest.ts` — 65 lines; runtime/rendering/auth · CARTRIDGE_MAGIC
- `engins/gameengin/cartridgeLoader.ts` — 8 lines
- `engins/gameengin/cartridges/achievementEngine.ts` — 126 lines; runtime/persistence/commerce · PREFIX
- `engins/gameengin/cartridges/apiStubs.ts` — 75 lines; runtime/rendering/commerce
- `engins/gameengin/cartridges/index.ts` — 17 lines; commerce
- `engins/gameengin/cartridges/loaders.ts` — 97 lines; commerce · CARTRIDGE_LOADERS
- `engins/gameengin/cartridges/reactCartridge.ts` — 138 lines; runtime/rendering/commerce · GameEngineAPIContext · useGameEngineAPI
- Plus 23 additional matched files summarized by roots/signals above.

## 10. The Marketplace

### Plain English
The Marketplace is the broader exchange area where listings, selling pages, catalogs, vendors, or public offerings live beyond one personal shop.

### What users experience
Users experience this as the public commercial side of the ecosystem: browsing, listing, buying, selling, and moving between creator shops and wider discovery.

### Repo-grounded detail
Matched repo evidence: 20 files, about 5,820 readable source lines.

Important source roots:
- `app` — 7 matched files
- `components` — 3 matched files
- `engine` — 3 matched files
- `config` — 1 matched files
- `engins` — 1 matched files
- `README.md` — 1 matched files
- `scripts` — 1 matched files
- `supabase` — 1 matched files

Behavior signals found in matched files:
- commerce — 20 file hits
- auth — 13 file hits
- events — 12 file hits
- persistence — 12 file hits
- rendering — 12 file hits
- state — 6 file hits
- mobile-touch — 4 file hits
- runtime — 4 file hits

Routes and API endpoints:
- `/marketplace/sell ← app/marketplace/sell/page.tsx`
- `/marketplace/[id] ← app/marketplace/[id]/page.tsx`
- `/marketplace ← app/marketplace/page.tsx`
- `/shop/sell ← app/shop/sell/page.tsx`
- `/shop ← app/shop/page.tsx`
- `POST /api/marketplace/request ← app/api/marketplace/request/route.ts`
- `GET|POST /api/marketplace ← app/api/marketplace/route.ts`

Components and hooks:
- `component:CATEGORIES`
- `component:MarketplaceSellPage`
- `component:CATEGORY_EMOJI`
- `component:MarketplaceListingCard`
- `component:MARKETPLACE_TABLE`
- `component:MARKETPLACE_CONTACT_TABLE`
- `component:VALID_MARKETPLACE_CATEGORIES`
- `component:MARKETPLACE_TITLE_MAX`
- `component:MARKETPLACE_TAGS_MAX`
- `component:MARKETPLACE_TAG_MAX_LENGTH`
- `component:POST`
- `component:GET`
- `component:VALID_CATEGORIES`
- `component:MarketplaceItemPage`
- `component:FALLBACK_CATEGORIES`
- `component:MarketplacePage`

Exports that define public behavior:
- `MarketplaceSellPage (default)`
- `MarketplaceListingCard (default)`
- `MARKETPLACE_TABLE (named)`
- `MARKETPLACE_CONTACT_TABLE (named)`
- `VALID_MARKETPLACE_CATEGORIES (named)`
- `MarketplaceCategory (named)`
- `MARKETPLACE_TITLE_MAX (named)`
- `MARKETPLACE_TAGS_MAX (named)`
- `MARKETPLACE_TAG_MAX_LENGTH (named)`
- `MarketplaceListingInput (named)`
- `MarketplaceListingRecord (named)`
- `ValidationResult (named)`

Import/export connections:
- `supabase/client/client.ts`
- `supabase/client/safeGetUser.ts`
- `lucide-react`
- `next/link`
- `next/navigation`
- `react`
- `utils/index.ts`
- `engine/marketplace/request.ts`
- `supabase/server/serverClient.ts`
- `next/server`
- `components/marketplace/dream.MarketplaceRequestButton.tsx`
- `components/ui/dream.DreamWord.tsx`

### Key files
- `app/marketplace/sell/page.tsx` — 270 lines; page · state/persistence/events · CATEGORIES · useRouter
- `components/marketplace/dream.MarketplaceListingCard.tsx` — 78 lines; rendering/commerce · CATEGORY_EMOJI
- `engine/marketplace/listings.ts` — 154 lines; events/rendering/commerce · MARKETPLACE_TABLE
- `supabase/migrations/20260324000001_phase8e_shop_marketplace.sql` — 186 lines; events/auth/commerce
- `types/marketplace.ts` — 51 lines; events/commerce
- `app/api/marketplace/request/route.ts` — 90 lines; api · persistence/events/auth · POST
- `app/api/marketplace/route.ts` — 142 lines; api · persistence/events/auth · GET
- `app/marketplace/[id]/page.tsx` — 205 lines; page · persistence/events/rendering · CATEGORY_EMOJI
- `app/marketplace/page.tsx` — 137 lines; page · persistence/events/auth · FALLBACK_CATEGORIES
- `components/marketplace/dream.MarketplaceRequestButton.tsx` — 132 lines; state/commerce · MarketplaceRequestButton · useState
- `engine/marketplace/request.ts` — 88 lines; rendering/auth/commerce · CONTACT_REQUEST_MESSAGE_MAX
- `components/panels/dream.panel.MarketplacePanel.tsx` — 139 lines; state/runtime/persistence · FALLBACK_CATEGORIES · useDreamSystem
- `tests/phase8e-shop-marketplace.test.ts` — 649 lines; persistence/events/rendering · PHASE8E_MIGRATION
- `app/shop/sell/page.tsx` — 201 lines; page · state/persistence/rendering · SellItemPage · useState
- `engine/shop/listings.ts` — 124 lines; rendering/commerce · SHOP_TABLE
- `scripts/readme-autosync.ts` — 580 lines; state/runtime/persistence · SOURCE_EXTENSIONS
- `engins/gameengin/games/catalog.ts` — 37 lines; rendering/commerce · MOBILE_HUD_BY_GAME_ID
- `README.md` — 2298 lines; state/runtime/persistence · useImplicitAssetWorkspace
- `app/shop/page.tsx` — 130 lines; page · persistence/auth/commerce · ShopPage
- `config/ui-ux-spec.yaml` — 129 lines; runtime/persistence/rendering

## 11. Ads & User Ads

### Plain English
Ads and User Ads cover promotion, sponsored inventory, campaign surfaces, impressions, clicks, targeting rules, and any app code that lets users or the platform promote content.

### What users experience
Users see this as promoted Dreams, user-created campaigns, ad slots, sponsor cards, or paid visibility controls.

### Repo-grounded detail
Matched repo evidence: 203 files, about 60,423 readable source lines.

Important source roots:
- `engins` — 33 matched files
- `docs` — 32 matched files
- `components` — 31 matched files
- `tests` — 20 matched files
- `app` — 17 matched files
- `engine` — 10 matched files
- `supabase` — 8 matched files
- `research` — 7 matched files

Behavior signals found in matched files:
- commerce — 95 file hits
- rendering — 74 file hits
- runtime — 65 file hits
- auth — 63 file hits
- persistence — 54 file hits
- state — 54 file hits
- mobile-touch — 49 file hits
- events — 43 file hits

Routes and API endpoints:
- `/ads/create ← app/ads/create/page.tsx`
- `/ads ← app/ads/page.tsx`
- `/ads/slot/[id] ← app/ads/slot/[id]/page.tsx`
- `/daydream/music/upload ← app/daydream/music/upload/page.tsx`
- `/engines/brand/campaigns ← app/engines/brand/campaigns/page.tsx`
- `POST /api/ads/orders ← app/api/ads/orders/route.ts`
- `POST /api/ads/view ← app/api/ads/view/route.ts`
- `POST /api/admin/ai-chat ← app/api/admin/ai-chat/route.ts`
- `POST /api/admin/ai-request ← app/api/admin/ai-request/route.ts`
- `GET|POST /api/admin/child-safety ← app/api/admin/child-safety/route.ts`
- `POST /api/admin/code-files ← app/api/admin/code-files/route.ts`
- `GET /api/admin/observability ← app/api/admin/observability/route.ts`
- `POST /api/codeengin/upload ← app/api/codeengin/upload/route.ts`
- `POST /api/contentengin/upload ← app/api/contentengin/upload/route.ts`

Components and hooks:
- `component:CreateAdSlotPage`
- `component:AdsPage`
- `component:AdSlotPage`
- `component:PLATFORM_SHARE_PERCENT`
- `component:POST`
- `component:AdUnit`
- `component:SkipCreditBalance`
- `component:SOURCE_EXTENSIONS`
- `component:MEDIA_EXTENSIONS`
- `component:EXCLUDED_PARTS`
- `component:PRODUCT_SECTIONS`
- `component:UploadMusicPage`
- `component:INIT_CAMPAIGNS`
- `component:CampaignsPanel`
- `component:MyCartridge`
- `component:ICONS`

Exports that define public behavior:
- `CreateAdSlotPage (default)`
- `AdPlacement (named)`
- `AdSlot (named)`
- `ProfileLite (named)`
- `AdListing (named)`
- `AdOrder (named)`
- `AdsPage (default)`
- `AdSlotPage (default)`
- `POST (named)`
- `AdUnit (named)`
- `SkipCreditBalance (named)`
- `ProductSection (named)`

Import/export connections:
- `supabase/client/client.ts`
- `supabase/client/safeGetUser.ts`
- `lucide-react`
- `next/link`
- `next/navigation`
- `react`
- `utils/index.ts`
- `components/ui/dream.DreamWord.tsx`
- `supabase/server/serverClient.ts`
- `types/ads.ts`
- `@supabase/supabase-js`
- `next/server`

### Key files
- `supabase/migrations/20260321000000_ads_platform_promotions.sql` — 38 lines
- `app/ads/create/page.tsx` — 203 lines; page · state/persistence/auth · CreateAdSlotPage · useState
- `types/ads.ts` — 46 lines
- `app/ads/page.tsx` — 267 lines; page · persistence/rendering/auth · AdsPage
- `app/ads/slot/[id]/page.tsx` — 139 lines; page · persistence/auth/commerce · AdSlotPage
- `app/api/ads/orders/route.ts` — 91 lines; api · persistence/mobile-touch/rendering · PLATFORM_SHARE_PERCENT
- `app/api/ads/view/route.ts` — 192 lines; api · persistence/auth · POST
- `components/ads/dream.AdUnit.tsx` — 229 lines; state/rendering/commerce · AdUnit · useState
- `components/ads/dream.SkipCreditBalance.tsx` — 58 lines; state/mobile-touch · SkipCreditBalance · useState
- `config/advanced-game-targets.json` — 52 lines; rendering/commerce
- `scripts/readme-autosync.ts` — 580 lines; state/runtime/persistence · SOURCE_EXTENSIONS
- `.github/workflows/gameengin-upgrader.yml` — 34 lines; state/commerce
- `Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `agents/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `app/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `app/daydream/music/upload/page.tsx` — 210 lines; page · state/persistence/auth · UploadMusicPage · useState
- `assembly/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `components/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `components/engines/brand/panels/dream.panel.CampaignsPanel.tsx` — 213 lines; state/commerce · INIT_CAMPAIGNS · useState
- `components/gameengin/README.md` — 175 lines; runtime/events/mobile-touch · MyCartridge
- `components/menus/dream.menu.RadialMenu.tsx` — 125 lines; events/commerce · ICONS · useEffect
- `components/webgpu/shaders.ts` — 330 lines; persistence/mobile-touch/rendering · N_PARTICLES
- `config/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `COOP_AND_SOLO_ROADMAP.md` — 120 lines; state/runtime/events · useState
- `coresurfaces/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `daydreams/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `docs/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `dr-eams/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `dreamdmbar/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `engine/admin/upgrade-readiness.ts` — 211 lines; runtime/commerce
- `engine/navigation/README.md` — 480 lines; runtime/persistence/mobile-touch · F · useNavigation
- `engins/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `engins/renderengin/advancedRendering.ts` — 267 lines; rendering
- `hooks/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- Plus 169 additional matched files summarized by roots/signals above.

## 12. The DreamDmBar (dreamdmbar/)

### Plain English
The DreamDmBar is the communication, navigation, search, command, notification, and contextual action layer that should always be near the user.

### What users experience
Users feel it as the bar that lets them message, search, jump between modules, respond to context, open actions, and keep moving without hunting through pages.

### Repo-grounded detail
Matched repo evidence: 147 files, about 43,564 readable source lines.

Important source roots:
- `app` — 30 matched files
- `components` — 18 matched files
- `dreamdmbar` — 16 matched files
- `tests` — 15 matched files
- `docs` — 12 matched files
- `research` — 9 matched files
- `engine` — 7 matched files
- `engins` — 7 matched files

Behavior signals found in matched files:
- commerce — 73 file hits
- rendering — 69 file hits
- runtime — 65 file hits
- mobile-touch — 55 file hits
- auth — 52 file hits
- persistence — 49 file hits
- events — 47 file hits
- state — 42 file hits

Routes and API endpoints:
- `/dreamdmbar/dualruntime ← app/dreamdmbar/dualruntime/page.tsx`
- `/dreamdmbar/dreamspace ← app/dreamdmbar/dreamspace/page.tsx`
- `/dreamdmbar/homedream ← app/dreamdmbar/homedream/page.tsx`
- `/dreamdmbar ← app/dreamdmbar/page.tsx`
- `/messages/new ← app/messages/new/page.tsx`
- `/messages ← app/messages/page.tsx`
- `/settings/notifications ← app/settings/notifications/page.tsx`
- `/messages/boards/[id] ← app/messages/boards/[id]/page.tsx`
- `/messages/boards/new ← app/messages/boards/new/page.tsx`
- `/messages/boards ← app/messages/boards/page.tsx`
- `/about ← app/about/page.tsx`
- `PATCH|DELETE /api/drafts/[id] ← app/api/drafts/[id]/route.ts`
- `GET|POST /api/messages ← app/api/messages/route.ts`
- `GET|POST /api/settings/notifications ← app/api/settings/notifications/route.ts`

Components and hooks:
- `component:MAX_DRAFT_CHARS`
- `component:STORAGE_PREFIX`
- `component:DR_EAMS_KEY`
- `component:DEBOUNCE_MS`
- `component:MAX_RESULTS`
- `component:PER_TYPE`
- `component:SEARCH_DESTINATIONS`
- `component:POLL_INTERVAL_MS`
- `component:ACTIVE_POLL_INTERVAL_MS`
- `component:MAX_BACKOFF_MS`
- `component:CONTEXT_MAP`
- `component:DEFAULT_BAR_INTENT`
- `component:DEFAULT_WORLD_FOCUS`
- `component:DreamSystemContext`
- `component:DreamSystemProvider`
- `component:SESSION_STORAGE_KEY`

Exports that define public behavior:
- `DraftPayload (named)`
- `listAllDraftIds (named)`
- `cleanupStaleDrafts (named)`
- `getDraftAge (named)`
- `useDreamDMDraft (named)`
- `SearchResultType (named)`
- `SearchResult (named)`
- `UseDreamSearchReturn (named)`
- `useDreamSearch (named)`
- `DbNotificationContent (named)`
- `DbNotificationRow (named)`
- `UiNotificationType (named)`

Import/export connections:
- `react`
- `engins/forgeengin/forge/forgeRegistry.ts`
- `supabase/client/client.ts`
- `engine/io.ts`
- `dreamdmbar/runtime/DreamSystemContext.tsx`
- `dreamdmbar/notifications/notificationHelpers.ts`
- `utils/index.ts`
- `next/navigation`
- `dreamdmbar/runtime/barInteractions.ts`
- `components/panels/panelTypes.ts`
- `engine/runtime/dualRuntime.ts`
- `supabase/client/safeGetUser.ts`

### Key files
- `dreamdmbar/hooks/useDreamDMDraft.ts` — 176 lines; state/persistence/rendering · MAX_DRAFT_CHARS · useDreamDMDraft
- `dreamdmbar/hooks/useDreamSearch.ts` — 233 lines; state/persistence/rendering · DR_EAMS_KEY · useDreamSearch
- `dreamdmbar/notifications/notificationHelpers.ts` — 266 lines
- `dreamdmbar/hooks/useDreamDMMessages.ts` — 141 lines; state/persistence/events · useDreamDMMessages
- `dreamdmbar/hooks/useDreamDMConversations.ts` — 123 lines; state/persistence/events · useDreamDMConversations
- `dreamdmbar/hooks/useModuleBarIntent.ts` — 87 lines; runtime/rendering · useModuleBarIntent
- `dreamdmbar/hooks/useNotifications.ts` — 97 lines; state · POLL_INTERVAL_MS · useNotifications
- `dreamdmbar/notifications/useNotifications.ts` — 172 lines; state/persistence/mobile-touch · POLL_INTERVAL_MS · useNotifications
- `dreamdmbar/hooks/useDreamBarContext.ts` — 185 lines; runtime · CONTEXT_MAP · useDreamBarContext
- `dreamdmbar/runtime/DreamSystemContext.tsx` — 401 lines; state/runtime/persistence · DEFAULT_BAR_INTENT · useDreamSystem
- `app/dreamdmbar/dualruntime/page.tsx` — 102 lines; page · state/runtime/persistence · SESSION_STORAGE_KEY · useDreamSystem
- `dreamdmbar/dreamsurface.dreamdmbar.tsx` — 3098 lines; state/runtime/persistence · BAR_H · useImmersiveGameLayout
- `dreamdmbar/hooks/useMessagingCore.ts` — 189 lines; state/persistence · MAX_FILE_BYTES · useMessagingCore
- `dreamdmbar/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `app/dreamdmbar/_components/DreamBarDataBridge.tsx` — 196 lines; state/runtime/persistence · DEFAULT_WORKFLOW_SPLIT · useDualRuntime
- `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts` — 260 lines; runtime/mobile-touch · BINS
- `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts` — 350 lines; runtime/commerce · DREAMR_WEIGHTS
- `app/dreamdmbar/_components/dreamr/api/feedHandler.ts` — 115 lines; runtime/persistence/auth · FALLBACK_CREATED_AT
- `app/dreamdmbar/_components/dreamr/api/route.ts` — 3 lines
- `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx` — 55 lines; runtime/events/mobile-touch · DreamRCore · useEffect
- `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx` — 159 lines; state/runtime/mobile-touch · DreamRFeed · useState
- `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx` — 2006 lines; state/persistence/mobile-touch · DR · useState
- `app/dreamdmbar/_components/DreamSpaceRegion.tsx` — 459 lines; state/runtime/events · SUGGESTED_DREAMS · useAccount
- `app/dreamdmbar/_components/DreamWidgetGrid.tsx` — 33 lines; mobile-touch · DreamWidgetGrid
- `app/dreamdmbar/_components/HomeDreamRegion.tsx` — 460 lines; state/runtime/events · DREAMR_MANIFESTO · useRouter
- `app/dreamdmbar/dreamspace/page.tsx` — 19 lines; page · runtime · DreamDMBarDreamSpacePage · useDreamSystem
- `app/dreamdmbar/homedream/page.tsx` — 19 lines; page · runtime · DreamDMBarHomeDreamPage · useDreamSystem
- `app/dreamdmbar/layout.tsx` — 184 lines; persistence/rendering/auth · DEV_BYPASS_USER_ID
- `app/dreamdmbar/page.tsx` — 11 lines; page · DreamDMBarPage
- `dreamdmbar/dream.GlowingLight.tsx` — 103 lines; mobile-touch/commerce · GlowingLight
- `dreamdmbar/runtime/barInteractions.ts` — 533 lines; runtime/mobile-touch/rendering · DIVIDER_H
- `dreamdmbar/runtime/bridgeSeamFlow.ts` — 214 lines; runtime/events/rendering · SEAM_CHANNEL_COLORS
- `docs/issue-607-readme-section-bot-dreamdmbar-interaction-rail-r.md` — 68 lines; runtime
- `engine/generated/dreamdmbar.ts` — 22 lines; runtime
- Plus 113 additional matched files summarized by roots/signals above.

## 13. Messaging

### Plain English
Messaging is the direct communication layer: conversations, drafts, notifications, inbox behavior, message APIs, and hooks that keep communication alive across surfaces.

### What users experience
Users experience this when they send a message, receive a notification, open a conversation, keep a draft, or continue a thread from another surface.

### Repo-grounded detail
Matched repo evidence: 168 files, about 36,631 readable source lines.

Important source roots:
- `docs` — 35 matched files
- `app` — 33 matched files
- `tests` — 19 matched files
- `dreamdmbar` — 16 matched files
- `components` — 15 matched files
- `engins` — 14 matched files
- `engine` — 8 matched files
- `supabase` — 6 matched files

Behavior signals found in matched files:
- commerce — 61 file hits
- rendering — 53 file hits
- runtime — 53 file hits
- auth — 51 file hits
- persistence — 49 file hits
- mobile-touch — 38 file hits
- state — 35 file hits
- events — 28 file hits

Routes and API endpoints:
- `/messages/new ← app/messages/new/page.tsx`
- `/messages ← app/messages/page.tsx`
- `/messages/boards/[id] ← app/messages/boards/[id]/page.tsx`
- `/messages/boards/new ← app/messages/boards/new/page.tsx`
- `/messages/boards ← app/messages/boards/page.tsx`
- `/settings/notifications ← app/settings/notifications/page.tsx`
- `/dreamdmbar/dreamspace ← app/dreamdmbar/dreamspace/page.tsx`
- `/dreamdmbar/dualruntime ← app/dreamdmbar/dualruntime/page.tsx`
- `/dreamdmbar/homedream ← app/dreamdmbar/homedream/page.tsx`
- `/dreamdmbar ← app/dreamdmbar/page.tsx`
- `GET|POST /api/messages ← app/api/messages/route.ts`
- `POST /api/messages/boards ← app/api/messages/boards/route.ts`
- `PATCH|DELETE /api/drafts/[id] ← app/api/drafts/[id]/route.ts`
- `POST /api/admin/ai-chat ← app/api/admin/ai-chat/route.ts`

Components and hooks:
- `component:MAX_DRAFT_CHARS`
- `component:STORAGE_PREFIX`
- `component:POLL_INTERVAL_MS`
- `component:ACTIVE_POLL_INTERVAL_MS`
- `component:MAX_BACKOFF_MS`
- `component:MAX_FILE_BYTES`
- `component:BUCKET_MAP`
- `component:GET`
- `component:POST`
- `component:NewMessagePage`
- `component:MessagesPage`
- `component:PostSchema`
- `component:BoardSchema`
- `component:BoardDetailPage`
- `component:NewBoardPage`
- `component:BoardsPage`

Exports that define public behavior:
- `DraftPayload (named)`
- `listAllDraftIds (named)`
- `cleanupStaleDrafts (named)`
- `getDraftAge (named)`
- `useDreamDMDraft (named)`
- `DMMessage (named)`
- `useDreamDMMessages (named)`
- `DMConversation (named)`
- `useDreamDMConversations (named)`
- `useNotifications (named)`
- `MediaType (named)`
- `SendMessageParams (named)`

Import/export connections:
- `react`
- `engine/io.ts`
- `supabase/client/client.ts`
- `engins/contentengin/media/ledger.ts`
- `dreamdmbar/hooks/useDreamDMMessages.ts`
- `utils/index.ts`
- `engine/safety/child-safety/childSafetyDetector.ts`
- `engine/safety/child-safety/ncmecReporter.ts`
- `engine/safety/child-safety/scanMediaUrls.ts`
- `supabase/client/safeGetUser.ts`
- `supabase/server/serverClient.ts`
- `@supabase/supabase-js`

### Key files
- `dreamdmbar/hooks/useDreamDMDraft.ts` — 176 lines; state/persistence/rendering · MAX_DRAFT_CHARS · useDreamDMDraft
- `dreamdmbar/hooks/useDreamDMMessages.ts` — 141 lines; state/persistence/events · useDreamDMMessages
- `dreamdmbar/hooks/useDreamDMConversations.ts` — 123 lines; state/persistence/events · useDreamDMConversations
- `dreamdmbar/hooks/useNotifications.ts` — 97 lines; state · POLL_INTERVAL_MS · useNotifications
- `supabase/migrations/20260307000001_conversations_messages.sql` — 80 lines; auth
- `dreamdmbar/hooks/useMessagingCore.ts` — 189 lines; state/persistence · MAX_FILE_BYTES · useMessagingCore
- `app/api/messages/route.ts` — 342 lines; api · persistence/auth/commerce · GET
- `app/messages/new/page.tsx` — 86 lines; page · persistence/auth · NewMessagePage
- `app/messages/page.tsx` — 69 lines; page · persistence/auth/commerce · MessagesPage
- `app/api/messages/boards/route.ts` — 92 lines; api · persistence/rendering/auth · PostSchema
- `app/messages/boards/[id]/page.tsx` — 178 lines; page · persistence/auth/commerce · BoardDetailPage
- `app/messages/boards/new/page.tsx` — 110 lines; page · state/mobile-touch/commerce · NewBoardPage · useState
- `app/messages/boards/page.tsx` — 119 lines; page · persistence/rendering/auth · BoardsPage
- `supabase/migrations/20260322000001_message_boards.sql` — 63 lines; auth
- `components/messaging/dream.BoardComposer.tsx` — 89 lines; state/mobile-touch/commerce · BoardComposer · useState
- `dreamdmbar/notifications/notificationHelpers.ts` — 266 lines
- `tests/dreamdm-draft.test.ts` — 184 lines; persistence/rendering · MAX_DRAFT_CHARS
- `dreamdmbar/notifications/useNotifications.ts` — 172 lines; state/persistence/mobile-touch · POLL_INTERVAL_MS · useNotifications
- `docs/dreamdm_bar_pass1.md` — 352 lines; persistence/rendering/auth
- `docs/dreamdm_bar_pass2.md` — 304 lines; persistence/events/rendering
- `docs/dreamdm_messaging_phase2.md` — 197 lines; persistence/mobile-touch/auth · useDreamSearch
- `supabase/migrations/20260310000010_dreamdm_bar_pass2.sql` — 57 lines; persistence/auth
- `tests/dreamdm-messaging-phase2.test.ts` — 234 lines; persistence · DR_EAMS_KEY
- `app/api/drafts/[id]/route.ts` — 133 lines; api · persistence/rendering/auth · CONTENT_TYPES
- `components/dream.MessagesClient.tsx` — 837 lines; state/persistence/mobile-touch · MessageContent · useState
- `COOP_AND_SOLO_ROADMAP.md` — 120 lines; state/runtime/events · useState
- `dreamdmbar/hooks/useDreamSearch.ts` — 233 lines; state/persistence/rendering · DR_EAMS_KEY · useDreamSearch
- `supabase/migrations/20260315000000_content_drafts.sql` — 65 lines; persistence/auth/commerce
- `tests/notifications.test.ts` — 428 lines; commerce
- `.github/scripts/run-readme-autosync.mjs` — 253 lines; mobile-touch · ROOT
- `app/api/admin/ai-chat/route.ts` — 137 lines; api · persistence/rendering/auth · IDARI_SYSTEM
- `app/api/drafts/route.ts` — 119 lines; api · persistence/events/rendering · CONTENT_TYPES
- `app/api/settings/notifications/route.ts` — 84 lines; api · persistence/rendering/auth · GET
- `app/settings/notifications/page.tsx` — 207 lines; page · state/persistence/mobile-touch · STORAGE_KEY · useState
- Plus 134 additional matched files summarized by roots/signals above.

## 14. HomeDream

### Plain English
HomeDream is the personal home surface: the first meaningful app space after login, combining identity, feed, launcher cards, Dream access, and social entry points.

### What users experience
Users feel HomeDream as the personal starting point where they see themselves, their Dreams, people, feed items, and the app modules they can open.

### Repo-grounded detail
Matched repo evidence: 257 files, about 84,412 readable source lines.

Important source roots:
- `components` — 53 matched files
- `app` — 45 matched files
- `docs` — 33 matched files
- `tests` — 26 matched files
- `engine` — 23 matched files
- `supabase` — 14 matched files
- `engins` — 10 matched files
- `dreamr` — 8 matched files

Behavior signals found in matched files:
- commerce — 154 file hits
- auth — 120 file hits
- rendering — 118 file hits
- mobile-touch — 88 file hits
- runtime — 81 file hits
- persistence — 77 file hits
- events — 74 file hits
- state — 62 file hits

Routes and API endpoints:
- `/homedream ← app/homedream/page.tsx`
- `/dreamdmbar/homedream ← app/dreamdmbar/homedream/page.tsx`
- `/edit-profiledream ← app/edit-profiledream/page.tsx`
- `/profile/[handle] ← app/profile/[handle]/page.tsx`
- `/feed-settings ← app/feed-settings/page.tsx`
- `/profile ← app/profile/page.tsx`
- `/settings/feed ← app/settings/feed/page.tsx`
- `/view-profile ← app/view-profile/page.tsx`
- `/onboarding ← app/onboarding/page.tsx`
- `/about ← app/about/page.tsx`
- `/settings ← app/settings/page.tsx`
- `/connectors ← app/connectors/page.tsx`
- `/daydream/brand ← app/daydream/brand/page.tsx`
- `/daydream/create ← app/daydream/create/page.tsx`

Components and hooks:
- `component:DEV_BYPASS_USER_ID`
- `component:HomeDreamPage`
- `component:GlobalDreamBar`
- `component:DEFAULT_WORKFLOW_SPLIT`
- `component:PersistentDreamBar`
- `component:DreamDMContainer`
- `component:SHINY_GOLD`
- `component:FLAGSHIPS`
- `component:FlagshipEnginesStrip`
- `component:DEFAULT_WINDOW_SIZE`
- `component:ActiveModuleSurface`
- `component:DreamWidget`
- `component:DAYDREAMS`
- `component:DaydreamPulseStrip`
- `component:BLEED_PX`
- `component:IDLE_PARTICLE_TARGET`

Exports that define public behavior:
- `HomeDreamPage (default)`
- `GlobalDreamBar (default)`
- `PersistentDreamBar (default)`
- `DreamDMContainer (named)`
- `FlagshipEnginesStrip (default)`
- `ActiveModuleSurface (default)`
- `DreamWidget (default)`
- `DaydreamPulseStrip (default)`
- `NeuralSeamCanvas (default)`
- `HomeDreamSurface (default)`
- `HomeFeed (default)`
- `GET (named)`

Import/export connections:
- `app/dreamdmbar/_components/HomeDreamRegion.tsx`
- `engine/dev-bypass.ts`
- `dreamr/feed/useLiveFeed.ts`
- `supabase/client/safeGetUser.ts`
- `supabase/server/serverClient.ts`
- `next/navigation`
- `next/server`
- `components/dreamengin/dream.panel.DrEamsPanel.tsx`
- `components/menus/dream.menu.DualBottomMenu.tsx`
- `dreamdmbar/runtime/DreamSystemContext.tsx`
- `coresurfaces/home/buttons/contextual-home.ts`
- `engine/routing/surfaces.ts`

### Key files
- `app/homedream/page.tsx` — 75 lines; page · runtime/persistence/auth · DEV_BYPASS_USER_ID
- `components/home/dream.bar.GlobalDreamBar.tsx` — 100 lines; state/runtime/auth · GlobalDreamBar · usePathname
- `components/home/dream.bar.PersistentDreamBar.tsx` — 345 lines; state/runtime/persistence · DEFAULT_WORKFLOW_SPLIT · usePathname
- `components/home/dream.FlagshipEnginesStrip.tsx` — 278 lines; runtime/mobile-touch/rendering · SHINY_GOLD · useRouter
- `components/home/dream.ActiveModuleSurface.tsx` — 475 lines; state/runtime/events · DEFAULT_WINDOW_SIZE · useState
- `components/home/dream.widget.DreamWidget.tsx` — 117 lines; mobile-touch · DreamWidget
- `components/home/dream.DaydreamPulseStrip.tsx` — 139 lines; mobile-touch/commerce · DAYDREAMS · useRouter
- `components/home/dream.NeuralSeamCanvas.tsx` — 276 lines; runtime/events/mobile-touch · BLEED_PX · useCallback
- `app/dreamdmbar/_components/HomeDreamRegion.tsx` — 460 lines; state/runtime/events · DREAMR_MANIFESTO · useRouter
- `components/dream.HomeFeed.tsx` — 1329 lines; state/runtime/persistence · HomeFeed · useLiveFeed
- `tests/homedream-page-auth.test.ts` — 88 lines; persistence/rendering/auth
- `app/api/posts/profile/[userId]/route.ts` — 89 lines; api · persistence/auth/commerce · GET
- `components/dream.FeedCard.tsx` — 469 lines; state/events/mobile-touch · FeedCard · useState
- `components/feed/dream.FeedVideoCard.tsx` — 494 lines; state/events/mobile-touch · FeedVideoCard · useState
- `tests/home-feed-home.test.ts` — 106 lines; runtime/persistence/events
- `tests/readme-section6-homedream.test.ts` — 24 lines
- `app/dreamdmbar/homedream/page.tsx` — 19 lines; page · runtime · DreamDMBarHomeDreamPage · useDreamSystem
- `docs/issue-602-readme-section-bot-homedream-system.md` — 68 lines
- `docs/issue-609-readme-section-bot-6-homedream-core-system-priva.md` — 68 lines
- `engine/generated/homedream.ts` — 8 lines
- `engins/rulesets/homedream/dream.homedream.constants.ts` — 9 lines; HOMEDREAM_GRAVITY
- `engins/rulesets/homedream/dream.homedream.physics.ts` — 36 lines; HOMEDREAM_PHYSICS_CONSTRAINTS
- `engins/rulesets/homedream/dream.homedream.transforms.ts` — 36 lines
- `engins/rulesets/homedream/index.ts` — 15 lines
- `src/engin/generated/homedream.ts` — 8 lines
- `tests/readme-homedream-system.test.ts` — 30 lines; runtime
- `app/api/feed/route.ts` — 230 lines; api · persistence/events/auth · GET
- `dreamr/feed/useLiveFeed.ts` — 301 lines; state/persistence/events · useLiveFeed
- `styles/home-dream.css` — 235 lines; mobile-touch/commerce
- `app/api/home-layout/route.ts` — 109 lines; api · persistence/rendering/auth · GET
- `components/feed/dream.CommentSection.tsx` — 353 lines; state/mobile-touch/rendering · COMMENT_MAX_LENGTH · useState
- `dreamr/components/dreamrfeed.tsx` — 1233 lines; state/runtime/events · DR · useState
- `supabase/migrations/20260321200000_phase8a_feed_and_layout.sql` — 52 lines; rendering
- `supabase/migrations/20260405000001_dreamr_feed_registry.sql` — 149 lines; persistence/auth
- Plus 223 additional matched files summarized by roots/signals above.

## 15. DreamSpace

### Plain English
DreamSpace is the workspace/canvas layer where DayDream surfaces, Engins, regions, runtime shells, and user-created windows become one creative environment.

### What users experience
Users experience DreamSpace as the place where they arrange, open, move through, and work inside creative surfaces rather than just clicking normal web pages.

### Repo-grounded detail
Matched repo evidence: 444 files, about 170,847 readable source lines.

Important source roots:
- `engine` — 79 matched files
- `components` — 60 matched files
- `.github` — 54 matched files
- `tests` — 48 matched files
- `app` — 43 matched files
- `engins` — 40 matched files
- `docs` — 33 matched files
- `daydreams` — 9 matched files

Behavior signals found in matched files:
- runtime — 341 file hits
- rendering — 267 file hits
- commerce — 232 file hits
- mobile-touch — 197 file hits
- events — 165 file hits
- state — 161 file hits
- auth — 159 file hits
- persistence — 124 file hits

Routes and API endpoints:
- `/daydream/games ← app/daydream/games/page.tsx`
- `/daydream/music ← app/daydream/music/page.tsx`
- `/daydream/brand ← app/daydream/brand/page.tsx`
- `/daydream/code ← app/daydream/code/page.tsx`
- `/daydream/create ← app/daydream/create/page.tsx`
- `/daydream/forge ← app/daydream/forge/page.tsx`
- `/daydream/lab ← app/daydream/lab/page.tsx`
- `/daydream/lab/portfolio ← app/daydream/lab/portfolio/page.tsx`
- `/daydream/brand/engin ← app/daydream/brand/engin/page.tsx`
- `/daydream/code/engin ← app/daydream/code/engin/page.tsx`
- `/daydream/constellation ← app/daydream/constellation/page.tsx`
- `/daydream/create/engin ← app/daydream/create/engin/page.tsx`
- `/daydream/game ← app/daydream/game/page.tsx`
- `/daydream/games/engin ← app/daydream/games/engin/page.tsx`

Components and hooks:
- `component:BOOT_KEYFRAMES`
- `component:DEFAULT_HUD_BOTTOM`
- `component:MIN_STAGE_BOTTOM_CLEARANCE`
- `component:LANDSCAPE_MIN_STAGE_BOTTOM`
- `component:ImmersiveGameShell`
- `component:DaydreamShell`
- `component:EnginComponent`
- `component:EnginSurface`
- `component:EnginPillControls`
- `component:MarbleWidget`
- `component:ACCENT`
- `component:PALETTE_PRESETS`
- `component:BRAND_HEALTH_DIMENSIONS`
- `component:AUDIENCE_SEGMENTS`
- `component:BIO_VARIANTS`
- `component:BRAND_STORY`

Exports that define public behavior:
- `ImmersiveGameShell (default)`
- `DaydreamWidget (named)`
- `DaydreamShell (default)`
- `BrandDaydream (default)`
- `StandaloneEnginName (named)`
- `StandaloneEnginSurface (default)`
- `metadata (named)`
- `GamesDaydreamPage (default)`
- `MusicArtistHubPage (default)`
- `CodeDaydreamPage (default)`
- `BrandDaydreamPage (default)`
- `CreateDaydreamPage (default)`

Import/export connections:
- `components/games/dream.remote.GameRemote.tsx`
- `engins/gameengin/GameRuntime.tsx`
- `engins/gameengin/cartridge.ts`
- `engins/gameengin/cartridges/loaders.ts`
- `engins/gameengin/cartridges/manifest.ts`
- `engins/gameengin/games/navigation.ts`
- `next/navigation`
- `react`
- `utils/index.ts`
- `components/dream.BrandLogo.tsx`
- `daydreams/shared/useDaydreamState.ts`
- `engins/forgeengin/forge/useForgeActivity.ts`

### Key files
- `app/daydream/game/dream.shell.ImmersiveGameShell.tsx` — 330 lines; state/runtime/persistence · BOOT_KEYFRAMES · useRouter
- `components/daydream/dream.shell.DaydreamShell.tsx` — 465 lines; state/events/mobile-touch · DaydreamShell · useSearchParams
- `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` — 684 lines; state/runtime/persistence · ACCENT · useForgeActivity
- `components/daydream/dream.StandaloneEnginSurface.tsx` — 38 lines; ForgeEngin · useRouter
- `coresurfaces/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `daydreams/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `app/daydream/games/page.tsx` — 365 lines; page · runtime/persistence/mobile-touch · GameEngin
- `app/daydream/music/page.tsx` — 87 lines; page · persistence/events/auth · StarMakerEngin
- `daydreams/code/page.tsx` — 545 lines; runtime/persistence/mobile-touch · WIDGETS
- `daydreams/games/page.tsx` — 356 lines; runtime/persistence/mobile-touch · GameEngin
- `app/daydream/brand/page.tsx` — 62 lines; page · persistence/auth/commerce · ACCENT
- `app/daydream/code/page.tsx` — 1118 lines; page · runtime/persistence/mobile-touch · WIDGETS
- `app/daydream/create/page.tsx` — 107 lines; page · persistence/auth/commerce · WIDGETS
- `app/daydream/forge/page.tsx` — 348 lines; page · persistence/auth/commerce · WIDGETS
- `app/daydream/lab/page.tsx` — 1062 lines; page · persistence/events/mobile-touch · LabEngin
- `app/daydream/lab/portfolio/page.tsx` — 189 lines; page · persistence/auth/commerce · WIDGETS
- `components/daydream/dream.CodeDreamIDE.tsx` — 1707 lines; state/runtime/persistence · ACCENT · useState
- `components/daydream/dream.constellationmap.tsx` — 356 lines; state/events/mobile-touch · NODES · useRouter
- `components/daydream/dream.JourneyTrail.tsx` — 386 lines; state/mobile-touch/auth · DAY · useState
- `components/daydream/dream.NGNEngin.tsx` — 600 lines; state/runtime/persistence · T · useState
- `components/daydream/starmaker/dream.panel.CompingPanel.tsx` — 347 lines; state/mobile-touch/commerce · T · useState
- `coresurfaces/home/buttons/contextual-home.ts` — 67 lines; runtime/rendering · HOME_BOTTOM_THRESHOLD
- `daydreams/brand/page.tsx` — 57 lines; persistence/auth/commerce · ACCENT
- `daydreams/shared/useDaydreamPersistence.ts` — 147 lines; state/persistence/auth · useDaydreamPersistence
- `app/daydream/brand/engin/page.tsx` — 11 lines; page · BrandEnginRedirectPage
- `app/daydream/code/engin/page.tsx` — 11 lines; page · CodeEnginRedirectPage
- `app/daydream/constellation/page.tsx` — 26 lines; page · persistence/auth · ConstellationPage
- `app/daydream/create/engin/page.tsx` — 11 lines; page · CreateEnginRedirectPage
- `app/daydream/game/page.tsx` — 31 lines; page · GamePage
- `app/daydream/games/engin/page.tsx` — 30 lines; page · GamesEnginRedirectPage
- `app/daydream/lab/engin/page.tsx` — 11 lines; page · LabEnginRedirectPage
- `app/daydream/media-vault/page.tsx` — 21 lines; page · auth · MediaVaultLegacyPage
- `app/daydream/music/engin/page.tsx` — 11 lines; page · MusicEnginRedirectPage
- `app/daydream/music/upload/page.tsx` — 210 lines; page · state/persistence/auth · UploadMusicPage · useState
- Plus 410 additional matched files summarized by roots/signals above.

## 16. Dreams (Widgets / Windows / Surfaces)

### Plain English
Dreams, widgets, windows, and surfaces are the visible objects users manipulate. This section maps the components and runtime support that make them openable, stateful, movable, and connected to Engins.

### What users experience
Users feel this as cards, panels, windows, widgets, surface launches, and interactive objects that turn the product into a creative operating system rather than a static website.

### Repo-grounded detail
Matched repo evidence: 760 files, about 223,119 readable source lines.

Important source roots:
- `components` — 284 matched files
- `app` — 117 matched files
- `engine` — 65 matched files
- `tests` — 56 matched files
- `docs` — 42 matched files
- `.github` — 31 matched files
- `dreamr` — 29 matched files
- `engins` — 26 matched files

Behavior signals found in matched files:
- commerce — 441 file hits
- rendering — 343 file hits
- mobile-touch — 304 file hits
- state — 294 file hits
- runtime — 258 file hits
- auth — 238 file hits
- persistence — 230 file hits
- events — 228 file hits

Routes and API endpoints:
- `/daydream/code ← app/daydream/code/page.tsx`
- `/daydream/create ← app/daydream/create/page.tsx`
- `/daydream/forge ← app/daydream/forge/page.tsx`
- `/daydream/music ← app/daydream/music/page.tsx`
- `/daydream/music/upload ← app/daydream/music/upload/page.tsx`
- `/edit-profiledream ← app/edit-profiledream/page.tsx`
- `/settings/dreams ← app/settings/dreams/page.tsx`
- `/settings/widgets ← app/settings/widgets/page.tsx`
- `/daydream/games ← app/daydream/games/page.tsx`
- `/daydream/lab ← app/daydream/lab/page.tsx`
- `/daydream/lab/portfolio ← app/daydream/lab/portfolio/page.tsx`
- `/dream-effects ← app/dream-effects/page.tsx`
- `/dreamdmbar/dualruntime ← app/dreamdmbar/dualruntime/page.tsx`
- `/daydream/brand/engin ← app/daydream/brand/engin/page.tsx`

Components and hooks:
- `component:DreamWindowShell`
- `component:WidgetCard`
- `component:DAYDREAMS`
- `component:ENGIN_APPS`
- `component:SERVICE_TABS`
- `component:ICON_SIZE`
- `component:ICON_RADIUS`
- `component:ICON_FONT`
- `component:LABEL_FONT`
- `component:AppIcon`
- `component:EngineBarChart`
- `component:DreamsSpacePanel`
- `component:TAB_LABELS`
- `component:TAP_SLOP`
- `component:HOLD_THRESHOLD_MS`
- `component:AnchorWidget`

Exports that define public behavior:
- `DreamWindowShellProps (named)`
- `DreamWindowShell (named)`
- `default (default)`
- `WidgetCardProps (named)`
- `WidgetCard (default)`
- `getAppRoute (named)`
- `RecentDestination (named)`
- `buildRecentDestinations (named)`
- `DreamsSpacePanel (default)`
- `AnchorWidget (named)`
- `SlideOverPanel (default)`
- `SuperDreamWidgetProps (named)`

Import/export connections:
- `hooks/useTapHoldMove.ts`
- `engine/editor/universalEditor.ts`
- `react`
- `components/dreams/dreamsurface.shell.tsx`
- `app/dreamdmbar/_components/DreamSpaceRegion.tsx`
- `components/home/dream.ActiveModuleSurface.tsx`
- `components/spatial/dream.ProfileSpace.tsx`
- `components/widgets/dream.widget.UniversalWidget.tsx`
- `engine/dreams/useDreamsRuntime.ts`
- `engins/forgeengin/forge/forgeIntelligence.ts`
- `engins/forgeengin/forge/forgeMomentum.ts`
- `engins/forgeengin/forge/forgeRegistry.ts`

### Key files
- `components/dreams/dreamsurface.window.tsx` — 67 lines; runtime/mobile-touch/commerce · DreamWindowShell · useTapHoldMove
- `components/widgets/dream.widget.WidgetCard.tsx` — 62 lines; WidgetCard
- `components/widgets/dream.widget.WidgetSurface.tsx` — 19 lines; rendering
- `components/dreams/dreamsurface.dreamspace.tsx` — 891 lines; state/runtime/mobile-touch · DAYDREAMS · useState
- `components/dream.widget.AnchorWidget.tsx` — 300 lines; state/events/mobile-touch · TAP_SLOP · useRef
- `components/dreams/dream.SlideOverPanel.tsx` — 50 lines; commerce · SlideOverPanel
- `components/dreams/dream.widget.SuperDreamWidget.tsx` — 377 lines; state/mobile-touch/rendering · COMPATIBILITY_CLUSTERS · useDreamWindowActions
- `components/dreams/dream.window.JourneyDreamWindow.tsx` — 57 lines; commerce · JourneyDreamWindow
- `components/widgets/dream.widget.WidgetPlaceholder.tsx` — 106 lines; events/mobile-touch/rendering · WidgetPlaceholder
- `coresurfaces/dreamsurface.EditProfileDream.tsx` — 537 lines; state/persistence/events · EditProfileDreamPage · useState
- `engine/dream-window/connectionVerbs.ts` — 229 lines; state/runtime/events
- `components/dream.DragToAnchorClose.tsx` — 174 lines; state/mobile-touch · DragToAnchorClose · useState
- `components/dream.FeedCard.tsx` — 469 lines; state/events/mobile-touch · FeedCard · useState
- `components/dream.panel.ChildSafetyPanel.tsx` — 586 lines; state/auth/commerce · STATUS_CONFIG · useState
- `components/dream.widget.WidgetBubble.tsx` — 112 lines; mobile-touch · WidgetBubble · useDrag
- `components/dreams/dream.DraggableDream.tsx` — 75 lines; state/runtime/events · DraggableDream · useState
- `components/dreams/dream.GlobalDragLayer.tsx` — 97 lines; state/events/mobile-touch · GlobalDreamDragLayer · useEffect
- `components/dreams/dream.panel.RuntimeMemoryHUD.tsx` — 158 lines; state/runtime/events · MAX_ARTIFACTS · useEffect
- `components/dreams/dreamsurface.shell.tsx` — 258 lines; state/events/mobile-touch · SkeletonRow · useState
- `components/widgets/dream.widget.WidgetLibrary.tsx` — 19 lines
- `coresurfaces/dreamsurface.ViewProfile.tsx` — 354 lines; persistence/mobile-touch/rendering · ViewProfilePage
- `engine/dream-window/DreamWindowLifecycle.ts` — 302 lines; runtime/rendering/commerce · DREAM_WINDOW_REQUIRED_LAYERS
- `engine/dream-window/enginConnectionNetwork.ts` — 205 lines; runtime · ALL_CONNECTION_PATHS
- `engine/dream-window/index.ts` — 51 lines; state/runtime/auth
- `engine/dream-window/runtimeRegion.ts` — 256 lines; runtime/rendering · DEFAULT_RUNTIME_REGION_STATE
- `types/dream-window.ts` — 105 lines; runtime/rendering/auth
- `components/dream.panel.IDariPanel.tsx` — 374 lines; state/persistence/events · ADMIN_UI · useState
- `components/dream.universal_asset_registry.tsx` — 1856 lines; state/persistence/events · ACCENT · useForgeActivity
- `components/dream.widget.ProfileWidgetBlock.tsx` — 102 lines; commerce · ProfileWidgetBlock
- `components/runtime/dream.shell.RuntimeShell.tsx` — 352 lines; state/runtime/persistence · MIN_ZOOM · useState
- `components/widgets/dream.AddDreamCTA.tsx` — 63 lines; mobile-touch/commerce · AddDreamCTA
- `components/widgets/dream.ConfigureSheet.tsx` — 160 lines; state/mobile-touch/commerce · ConfigureSheet
- `components/widgets/dream.EditModeBanner.tsx` — 55 lines; mobile-touch/commerce · EditModeBanner · useEditMode
- `components/widgets/dream.EditModeProvider.tsx` — 35 lines; state · EditModeContext · useEditMode
- Plus 726 additional matched files summarized by roots/signals above.

## 17. User-Facing Modularity

### Plain English
User-facing modularity is the part of DREAMengin that lets features feel composable to people: launchable modules, reusable panels, shared shells, configurable surfaces, and modules that can move between contexts.

### What users experience
Users feel modularity when they can open a tool from more than one place, carry state across a surface, combine Engins, and customize the product without waiting for a fixed page.

### Repo-grounded detail
Matched repo evidence: 194 files, about 82,664 readable source lines.

Important source roots:
- `components` — 80 matched files
- `engine` — 23 matched files
- `docs` — 21 matched files
- `engins` — 13 matched files
- `tests` — 11 matched files
- `coresurfaces` — 5 matched files
- `dreamdmbar` — 5 matched files
- `scripts` — 4 matched files

Behavior signals found in matched files:
- commerce — 136 file hits
- rendering — 119 file hits
- runtime — 114 file hits
- mobile-touch — 109 file hits
- state — 101 file hits
- events — 86 file hits
- auth — 77 file hits
- persistence — 66 file hits

Routes and API endpoints:
- No direct app routes matched this section.

Components and hooks:
- `component:ENGIN_SURFACES`
- `component:RuntimeView`
- `component:DreamComponent`
- `component:EnginSurface`
- `component:PANEL_MAP`
- `component:DualRuntimeContext`
- `component:CORE_VERSION`
- `component:SYSTEM_ACTOR`
- `component:DualRuntimeContainer`
- `component:MIN_ZOOM`
- `component:MAX_ZOOM`
- `component:ZOOM_STEP`
- `component:COARSE_POINTER_QUERY`
- `component:CHROME_BAR_H`
- `component:RuntimeShell`
- `component:DEFAULT_WINDOW_SIZE`

Exports that define public behavior:
- `UseModuleBarIntentResult (named)`
- `useModuleBarIntent (named)`
- `useModuleRegistry (named)`
- `moduleRegistry (named)`
- `subscribeRegistryToTransferEvents (named)`
- `manifestFromWidget (named)`
- `RuntimeId (named)`
- `ModuleType (named)`
- `ModuleManifest (named)`
- `RuntimeCompatibility (named)`
- `ModuleCompatibility (named)`
- `isModuleManifest (named)`

Import/export connections:
- `dreamdmbar/runtime/DreamSystemContext.tsx`
- `react`
- `engine/runtime/dualRuntimeBridge.ts`
- `types/module-manifest.ts`
- `zustand`
- `types/widgets.ts`
- `engine/engin-runtime/EnginBaseState.ts`
- `app/dreamdmbar/_components/HomeDreamRegion.tsx`
- `components/dreams/dreamsurface.dreamspace.tsx`
- `components/runtime/dream.shell.RuntimeShell.tsx`
- `components/spatial/dream.shell.EnhancedSpatialShell.tsx`
- `engins/forgeengin/forge/forgeRegistry.ts`

### Key files
- `dreamdmbar/hooks/useModuleBarIntent.ts` — 87 lines; runtime/rendering · useModuleBarIntent
- `engine/runtime/moduleRegistry.ts` — 170 lines; runtime/events/rendering · useModuleRegistry
- `types/module-manifest.ts` — 183 lines; runtime/mobile-touch/rendering
- `components/runtime/dream.RuntimeView.tsx` — 432 lines; state/runtime/mobile-touch · ENGIN_SURFACES · useMemo
- `components/runtime/dream.DualRuntimeContainer.tsx` — 246 lines; state/runtime/rendering · DualRuntimeContext · useDualRuntime
- `components/runtime/dream.shell.RuntimeShell.tsx` — 352 lines; state/runtime/persistence · MIN_ZOOM · useState
- `components/home/dream.ActiveModuleSurface.tsx` — 475 lines; state/runtime/events · DEFAULT_WINDOW_SIZE · useState
- `engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel.tsx` — 92 lines; state · AgentPanel · useAgentSession
- `coresurfaces/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `docs/MODULARITY_VIOLATION_LOG.md` — 86 lines; runtime/mobile-touch/rendering
- `dreamdmbar/dreamsurface.dreamdmbar.tsx` — 3098 lines; state/runtime/persistence · BAR_H · useImmersiveGameLayout
- `tests/dreamspace-panel.test.ts` — 79 lines; runtime/mobile-touch/rendering
- `tests/modular-os-stores.test.ts` — 141 lines; runtime/persistence/events
- `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx` — 2006 lines; state/persistence/mobile-touch · DR · useState
- `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` — 456 lines; state/mobile-touch/commerce · T · useState
- `components/dreams/dream.panel.RuntimeMemoryHUD.tsx` — 158 lines; state/runtime/events · MAX_ARTIFACTS · useEffect
- `engine/engin-runtime/EnginCapabilityScorecard.ts` — 122 lines; runtime/rendering
- `tests/universal-visual-modularity.test.ts` — 301 lines; runtime/events/mobile-touch · DraggableModule
- `components/daydream/starmaker/dream.panel.CompingPanel.tsx` — 347 lines; state/mobile-touch/commerce · T · useState
- `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx` — 378 lines; state/mobile-touch/commerce · T · useState
- `components/dream.panel.ChildSafetyPanel.tsx` — 586 lines; state/auth/commerce · STATUS_CONFIG · useState
- `components/dreamengin/dream.panel.DrEamsPanel.tsx` — 358 lines; state/runtime/events · QUICK_ACTIONS · useState
- `components/dreamengin/dreamsurface.dreamengin.tsx` — 163 lines; state/events/mobile-touch · DreamenginApp · usePathname
- `components/dreams/dreamsurface.dreamspace.tsx` — 891 lines; state/runtime/mobile-touch · DAYDREAMS · useState
- `components/dreams/dreamsurface.window.tsx` — 67 lines; runtime/mobile-touch/commerce · DreamWindowShell · useTapHoldMove
- `components/engines/code/panels/dream.panel.NotebookPanel.tsx` — 263 lines; state/commerce · STARTER_CELLS · useCallback
- `components/panels/dream.panel.AlgorithmPanel.tsx` — 36 lines; runtime/mobile-touch/rendering · AlgorithmPanel · useDreamSystem
- `components/panels/dream.panel.AppearancePanel.tsx` — 166 lines; state/runtime/persistence · GradientThemePicker · useState
- `components/panels/dream.panel.ControlsPanel.tsx` — 90 lines; state/runtime/persistence · STORAGE_KEY · useDreamSystem
- `components/panels/dream.panel.DataPanel.tsx` — 139 lines; state/runtime/persistence · DataPanel · useDreamSystem
- `components/panels/dream.panel.HelpPanel.tsx` — 71 lines; runtime/mobile-touch/rendering · GUIDES · useDreamSystem
- `components/panels/dream.panel.MarketplacePanel.tsx` — 139 lines; state/runtime/persistence · FALLBACK_CATEGORIES · useDreamSystem
- `components/panels/dream.panel.PrivacyPanel.tsx` — 146 lines; state/runtime/persistence · STORAGE_KEY · useDreamSystem
- `components/panels/dream.panel.SafetyPanel.tsx` — 102 lines; state/runtime/persistence · SafetyPanel · useDreamSystem
- Plus 160 additional matched files summarized by roots/signals above.

## 18. Custom Engins

### Plain English
Custom Engins are the extension story: code, rules, manifests, registries, and capability boundaries that let DREAMengin grow by adding or composing new Engin behavior.

### What users experience
Users feel this when the product can add new studios, workflows, or creative capabilities without forcing a totally new app.

### Repo-grounded detail
Matched repo evidence: 1057 files, about 237,262 readable source lines.

Important source roots:
- `engins` — 360 matched files
- `engine` — 270 matched files
- `components` — 101 matched files
- `.github` — 91 matched files
- `tests` — 66 matched files
- `app` — 61 matched files
- `docs` — 24 matched files
- `scripts` — 18 matched files

Behavior signals found in matched files:
- rendering — 409 file hits
- runtime — 390 file hits
- commerce — 353 file hits
- events — 227 file hits
- state — 227 file hits
- mobile-touch — 192 file hits
- auth — 190 file hits
- persistence — 187 file hits

Routes and API endpoints:
- `/gameengin/cartridges/[id] ← app/gameengin/cartridges/[id]/page.tsx`
- `/daydream/brand/engin ← app/daydream/brand/engin/page.tsx`
- `/daydream/code/engin ← app/daydream/code/engin/page.tsx`
- `/daydream/create/engin ← app/daydream/create/engin/page.tsx`
- `/daydream/games/engin ← app/daydream/games/engin/page.tsx`
- `/daydream/lab/engin ← app/daydream/lab/engin/page.tsx`
- `/daydream/music/engin ← app/daydream/music/engin/page.tsx`
- `/engines/brand/campaigns ← app/engines/brand/campaigns/page.tsx`
- `/engines/brand/identity ← app/engines/brand/identity/page.tsx`
- `/engines/brand ← app/engines/brand/page.tsx`
- `/engines/code/ai ← app/engines/code/ai/page.tsx`
- `/engines/code/notebook ← app/engines/code/notebook/page.tsx`
- `/engines/code ← app/engines/code/page.tsx`
- `/engines/code/projects ← app/engines/code/projects/page.tsx`

Components and hooks:
- `component:INFORMATION_DOMAINS`
- `component:ENGIN_REGISTRY`
- `component:USER_FACING_ENGINES`
- `component:CREATIVE_ENGINES`
- `component:INTERNAL_SERVICE_ENGINES`
- `component:FORGE_STORAGE_KEY`
- `component:FORGE_HISTORY_KEY`
- `component:MAX_HISTORY`
- `component:FORGE_WORKFLOWS`
- `component:CARTRIDGE_MANIFEST`
- `component:DEFAULT_METRICS`
- `component:DEFAULT_DOMAIN`
- `component:PARAMS`
- `component:MANIFEST`
- `component:REQUIRED_CAPABILITIES`
- `component:BRAND_ENGIN_RULE_SET`

Exports that define public behavior:
- `useModuleRegistry (named)`
- `moduleRegistry (named)`
- `subscribeRegistryToTransferEvents (named)`
- `manifestFromWidget (named)`
- `DropTarget (named)`
- `dropTargetRegistry (named)`
- `INFORMATION_DOMAINS (named)`
- `InformationDomain (named)`
- `EnginEntry (named)`
- `ENGIN_REGISTRY (named)`
- `USER_FACING_ENGINES (named)`
- `CREATIVE_ENGINES (named)`

Import/export connections:
- `engine/runtime/dualRuntimeBridge.ts`
- `types/module-manifest.ts`
- `zustand`
- `types/widgets.ts`
- `engine/runtime/coercionTable.ts`
- `engins/gameengin/cartridge.ts`
- `engine/engin-runtime/EnginBaseState.ts`
- `engine/engin-runtime/EnginCapabilities.ts`
- `engine/engin-runtime/EnginCapabilityTargets.ts`
- `engine/engin-runtime/EnginRuleSetContract.ts`
- `engins/contentengin/assetTypes.ts`
- `zod`

### Key files
- `engine/runtime/moduleRegistry.ts` — 170 lines; runtime/events/rendering · useModuleRegistry
- `engine/runtime/dropTargetRegistry.ts` — 116 lines; runtime/mobile-touch/rendering
- `engins/forgeengin/forge/forgeRegistry.ts` — 433 lines; runtime/persistence/rendering · INFORMATION_DOMAINS
- `engins/gameengin/brain/asset-registry/README.md` — 16 lines; commerce
- `engins/gameengin/cartridges/manifest.ts` — 172 lines; runtime/mobile-touch/rendering · CARTRIDGE_MANIFEST
- `engins/rulesets/brand/brandEnginRuleSet.ts` — 241 lines; runtime/persistence · DEFAULT_METRICS
- `engins/rulesets/content/contentEnginRuleSet.ts` — 37 lines; runtime/rendering · DEFAULT_DOMAIN
- `engins/rulesets/lab/labEnginRuleSet.ts` — 233 lines; runtime/persistence/events · DEFAULT_DOMAIN
- `engine/runtime/enginWorkflowRegistry.ts` — 599 lines; runtime/events/mobile-touch · ENGIN_KEYS
- `engins/contentengin/pipeline/writeManifest.ts` — 4 lines; runtime/rendering
- `engins/contentengin/shaders/shaderRegistry.ts` — 6 lines; SHADERS
- `engins/forgeengin/enginpipe/artifact/manifest.ts` — 103 lines; rendering/commerce · ArtifactPermissionSchema
- `engins/forgeengin/forge-ngn/piece-registry.ts` — 304 lines; runtime/persistence/events · AUDIO_PIECES
- `engins/gameengin/assets/BundleManifest.ts` — 40 lines; rendering/commerce
- `engins/gameengin/brain/originality-registry/by-cartridge/mad-maxi.json` — 14 lines; commerce
- `engins/gameengin/brain/originality-registry/signatures.json` — 20 lines; commerce
- `engins/gameengin/cartridge-manifest.ts` — 65 lines; runtime/rendering/auth · CARTRIDGE_MAGIC
- `engins/gameengin/render/ShaderRegistry.ts` — 48 lines; commerce
- `engins/rulesets/brand/useBrandEnginRuntime.ts` — 109 lines; state/runtime/rendering · useBrandEnginRuntime
- `engins/rulesets/code/codeEnginRuleSet.ts` — 395 lines; runtime · DEFAULT_CELLS
- `engins/rulesets/code/index.ts` — 23 lines
- `engins/rulesets/code/useCodeEnginRuntime.ts` — 109 lines; state/runtime/rendering · useCodeEnginRuntime
- `engins/rulesets/content/useContentEnginRuntime.ts` — 109 lines; state/runtime/rendering · useContentEnginRuntime
- `engins/rulesets/dreams/index.ts` — 23 lines
- `engins/rulesets/forge/index.ts` — 24 lines
- `engins/rulesets/game/declarative.ts` — 23 lines; commerce
- `engins/rulesets/game/gameEnginRuleSet.ts` — 302 lines; runtime/persistence/events · GRAVITY_VALUES
- `engins/rulesets/game/index.ts` — 17 lines
- `engins/rulesets/game/useGameEnginRuntime.ts` — 119 lines; state/runtime/rendering · useGameEnginRuntime
- `engins/rulesets/homedream/dream.homedream.constants.ts` — 9 lines; HOMEDREAM_GRAVITY
- `engins/rulesets/homedream/dream.homedream.physics.ts` — 36 lines; HOMEDREAM_PHYSICS_CONSTRAINTS
- `engins/rulesets/homedream/dream.homedream.transforms.ts` — 36 lines
- `engins/rulesets/homedream/index.ts` — 15 lines
- `engins/rulesets/lab/index.ts` — 23 lines
- Plus 1023 additional matched files summarized by roots/signals above.

## 19. Full Website Customizability

### Plain English
Full website customizability covers appearance, profile editing, brand surfaces, themes, layouts, public profiles, settings, and any code that lets users change how their site or identity looks.

### What users experience
Users experience this as profile editing, theme choices, brand customization, public pages, custom identity, and the ability to make DREAMengin feel like their own site.

### Repo-grounded detail
Matched repo evidence: 210 files, about 80,580 readable source lines.

Important source roots:
- `app` — 59 matched files
- `components` — 58 matched files
- `docs` — 19 matched files
- `tests` — 11 matched files
- `engine` — 10 matched files
- `engins` — 10 matched files
- `supabase` — 7 matched files
- `styles` — 6 matched files

Behavior signals found in matched files:
- commerce — 138 file hits
- rendering — 95 file hits
- auth — 93 file hits
- mobile-touch — 81 file hits
- persistence — 78 file hits
- runtime — 64 file hits
- state — 64 file hits
- events — 55 file hits

Routes and API endpoints:
- `/settings/appearance ← app/settings/appearance/page.tsx`
- `/settings/help ← app/settings/help/page.tsx`
- `/settings ← app/settings/page.tsx`
- `/settings/account ← app/settings/account/page.tsx`
- `/settings/dreams ← app/settings/dreams/page.tsx`
- `/settings/widgets ← app/settings/widgets/page.tsx`
- `/settings/notifications ← app/settings/notifications/page.tsx`
- `/settings/safety ← app/settings/safety/page.tsx`
- `/settings/security ← app/settings/security/page.tsx`
- `/view-profile ← app/view-profile/page.tsx`
- `/edit-profiledream ← app/edit-profiledream/page.tsx`
- `/settings/algorithm ← app/settings/algorithm/page.tsx`
- `/settings/controls ← app/settings/controls/page.tsx`
- `/settings/data ← app/settings/data/page.tsx`

Components and hooks:
- `component:VoidThemeSection`
- `component:GradientThemePicker`
- `component:Slider`
- `component:PresetCard`
- `component:BgImageSection`
- `component:ACCENT_SWATCHES`
- `component:BG_STYLES`
- `component:AppearanceSettingsPage`
- `component:ProfileCustomizeButton`
- `component:DEFAULT_DREAMS`
- `component:DreamsLayoutEditor`
- `component:HelpPage`
- `component:NAV_GROUPS`
- `component:SettingsPage`
- `component:DataClient`
- `component:ACCENT`

Exports that define public behavior:
- `AppearanceSettingsPage (default)`
- `ProfileCustomizeButton (default)`
- `DreamsLayoutEditor (default)`
- `metadata (named)`
- `HelpPage (default)`
- `SettingsPage (default)`
- `DataClient (default)`
- `BrandingEngin (default)`
- `DangerZoneActions (default)`
- `AccountSettingsPage (default)`
- `DreamsSettingsPage (default)`
- `PrivacyClient (default)`

Import/export connections:
- `components/dream.ThemeApplicator.tsx`
- `components/providers/dream.ThemeProvider.tsx`
- `components/ui-system/CustomizeModeContext.tsx`
- `components/ui-system/theme-engine.ts`
- `lucide-react`
- `next/link`
- `react`
- `components/dreams/dream.DraggableDream.tsx`
- `hooks/useDreamLayout.ts`
- `components/ui/dream.AuthenticatedPageHeader.tsx`
- `supabase/server/serverClient.ts`
- `supabase/client/safeGetUser.ts`

### Key files
- `app/settings/appearance/page.tsx` — 750 lines; page · state/persistence/events · VoidThemeSection · useState
- `components/profile/dream.ProfileCustomizeButton.tsx` — 30 lines; mobile-touch/rendering/commerce · ProfileCustomizeButton · useCustomizeMode
- `app/settings/dreams/dreams-layout-editor.tsx` — 83 lines; runtime/commerce · DEFAULT_DREAMS · useDreamLayout
- `app/settings/help/page.tsx` — 94 lines; page · persistence/auth/commerce · HelpPage
- `app/settings/page.tsx` — 172 lines; page · persistence/auth/commerce · NAV_GROUPS
- `styles/theme.css` — 34 lines; commerce
- `app/settings/data/dream.DataClient.tsx` — 138 lines; state/events/commerce · DataClient · useState
- `engins/engin.BrandingEngin.tsx` — 1260 lines; state/runtime/persistence · ACCENT · useBrandingEnginBridge
- `app/settings/account/dream.DangerZoneActions.tsx` — 325 lines; state/mobile-touch/auth · ConfirmModal · useState
- `app/settings/account/page.tsx` — 125 lines; page · persistence/auth/commerce · AccountSettingsPage
- `app/settings/dreams/page.tsx` — 40 lines; page · auth/commerce · DreamsSettingsPage
- `app/settings/privacy/dream.PrivacyClient.tsx` — 394 lines; state/persistence/events · STORAGE_KEY · useState
- `app/settings/widgets/page.tsx` — 40 lines; page · auth/commerce · LegacyWidgetsSettingsPage
- `components/profile/dream.ProfileCanvas.tsx` — 340 lines; state/persistence/mobile-touch · WIDGET_SLOTS · useState
- `app/settings/controls/dream.ControlsClient.tsx` — 163 lines; state/persistence/mobile-touch · STORAGE_KEY · useState
- `app/settings/controls/dream.PositionIndicatorToggle.tsx` — 54 lines; state/persistence/mobile-touch · STORAGE_KEY · useState
- `app/settings/notifications/page.tsx` — 207 lines; page · state/persistence/mobile-touch · STORAGE_KEY · useState
- `app/settings/safety/page.tsx` — 179 lines; page · persistence/events/auth · SafetySettingsPage
- `app/settings/security/page.tsx` — 254 lines; page · state/persistence/auth · SecuritySettingsPage · useState
- `app/view-profile/page.tsx` — 365 lines; page · persistence/mobile-touch/rendering · ViewProfilePage
- `components/profile/dream.EditableAvatar.tsx` — 110 lines; mobile-touch/commerce · EditableAvatar · useRouter
- `components/profile/dream.widget.ProfileWidgetGrid.tsx` — 2209 lines; state/mobile-touch/rendering · DEFAULT_CONFIG · useState
- `styles/Agents-MUST-READ-ARCHITECTURE.md` — 1280 lines; state/runtime/persistence
- `styles/globals.css` — 5174 lines; runtime/mobile-touch/rendering
- `app/edit-profiledream/page.tsx` — 561 lines; page · state/persistence/events · EditProfileDreamPage · useState
- `app/settings/algorithm/page.tsx` — 39 lines; page · persistence/auth/commerce · AlgorithmPage
- `app/settings/controls/page.tsx` — 19 lines; page · persistence/auth · ControlsSettingsPage
- `app/settings/data/page.tsx` — 19 lines; page · persistence/auth · DataSettingsPage
- `app/settings/feed/page.tsx` — 14 lines; page · FeedSettingsRedirect
- `app/settings/privacy/page.tsx` — 19 lines; page · persistence/auth · PrivacySettingsPage
- `styles/dream-shell.css` — 24 lines
- `styles/home-dream.css` — 235 lines; mobile-touch/commerce
- `styles/view-transitions.css` — 49 lines; rendering
- `app/api/settings/appearance/route.ts` — 92 lines; api · persistence/rendering/auth · GET
- Plus 176 additional matched files summarized by roots/signals above.

## 20. Backend, System, Core & CoreSurfaces

### Plain English
Backend, system, core, and CoreSurfaces are the under-the-hood execution pieces: APIs, server routes, persistence, Supabase schema, shared runtime code, system surfaces, and infrastructure that keep the app functional.

### What users experience
Users feel this indirectly when data saves, pages load, auth works, messages arrive, runtime state persists, and core surfaces do not collapse while switching contexts.

### Repo-grounded detail
Matched repo evidence: 856 files, about 278,172 readable source lines.

Important source roots:
- `engine` — 270 matched files
- `app` — 168 matched files
- `supabase` — 80 matched files
- `docs` — 51 matched files
- `engins` — 50 matched files
- `tests` — 41 matched files
- `components` — 33 matched files
- `.github` — 25 matched files

Behavior signals found in matched files:
- auth — 429 file hits
- rendering — 406 file hits
- commerce — 359 file hits
- persistence — 348 file hits
- runtime — 296 file hits
- events — 250 file hits
- mobile-touch — 201 file hits
- state — 181 file hits

Routes and API endpoints:
- `/engines/games/scores ← app/engines/games/scores/page.tsx`
- `/auth/reset-password ← app/auth/reset-password/page.tsx`
- `/auth/update-password ← app/auth/update-password/page.tsx`
- `/idari-console ← app/(internal)/idari-console/page.tsx`
- `/daydream/games ← app/daydream/games/page.tsx`
- `/edit-profiledream ← app/edit-profiledream/page.tsx`
- `/daydream/lab ← app/daydream/lab/page.tsx`
- `/join ← app/join/page.tsx`
- `/login ← app/login/page.tsx`
- `/marketplace/[id] ← app/marketplace/[id]/page.tsx`
- `/profile/[handle] ← app/profile/[handle]/page.tsx`
- `/settings/help ← app/settings/help/page.tsx`
- `/settings ← app/settings/page.tsx`
- `/view-profile ← app/view-profile/page.tsx`

Components and hooks:
- `component:IG_TOKEN_URL`
- `component:IG_LONG_TOKEN_URL`
- `component:GET`
- `component:GOOGLE_TOKEN_URL`
- `component:VALID_GAME_IDS`
- `component:VALID_GAMES`
- `component:PostScoreSchema`
- `component:PATCH`
- `component:POST`
- `component:SUPABASE_AUTH_COOKIE`
- `component:UNKNOWN_OAUTH_PROVIDERS`
- `component:IG_AUTH_URL`
- `component:IG_SCOPE`
- `component:GOOGLE_AUTH_URL`
- `component:YOUTUBE_SCOPE`
- `component:DeleteDreamBodySchema`

Exports that define public behavior:
- `GET (named)`
- `PATCH (named)`
- `POST (named)`
- `OAuthProvidersResponse (named)`
- `UNKNOWN_OAUTH_PROVIDERS (named)`
- `getOAuthProvidersResponse (named)`
- `ConnectorStatusEntry (named)`
- `DELETE (named)`
- `UnifiedFeedEntry (named)`
- `fetchWithRetry (named)`
- `PUT (named)`
- `ShellHubDevicesResponse (named)`

Import/export connections:
- `supabase/server/serverClient.ts`
- `supabase/client/safeGetUser.ts`
- `@supabase/supabase-js`
- `next/headers`
- `next/server`
- `engins/gameengin/cartridges/manifest.ts`
- `zod`
- `utils/index.ts`
- `supabase/config.ts`
- `engine/agents/agentBus.ts`
- `dr-eams/ai/audit.ts`
- `engine/api/route.ts`

### Key files
- `app/api/connectors/instagram/oauth/callback/route.ts` — 167 lines; api · persistence/auth · IG_TOKEN_URL
- `app/api/connectors/youtube/oauth/callback/route.ts` — 146 lines; api · persistence/auth · GOOGLE_TOKEN_URL
- `app/api/game-scores/route.ts` — 177 lines; api · persistence/rendering/auth · VALID_GAME_IDS
- `app/api/auth/logout/route.ts` — 24 lines; api · persistence/auth · SUPABASE_AUTH_COOKIE
- `app/api/auth/providers/route.ts` — 72 lines; api · persistence/auth · UNKNOWN_OAUTH_PROVIDERS
- `app/api/connectors/instagram/oauth/start/route.ts` — 66 lines; api · auth/commerce · IG_AUTH_URL
- `app/api/connectors/youtube/oauth/start/route.ts` — 70 lines; api · auth/commerce · GOOGLE_AUTH_URL
- `app/api/setup/google-oauth/route.ts` — 101 lines; api · persistence/auth · GET
- `app/api/account/delete-dream/route.ts` — 154 lines; api · persistence/rendering/auth · DeleteDreamBodySchema
- `app/api/admin/ai-chat/route.ts` — 137 lines; api · persistence/rendering/auth · IDARI_SYSTEM
- `app/api/ads/view/route.ts` — 192 lines; api · persistence/auth · POST
- `app/api/agent/session/route.ts` — 115 lines; api · persistence/auth · SESSION_TTL_MS
- `app/api/ai/idari/route.ts` — 309 lines; api · runtime/persistence/rendering · RATE_LIMITS
- `app/api/connectors/status/route.ts` — 59 lines; api · persistence/auth · GET
- `app/api/drafts/[id]/route.ts` — 133 lines; api · persistence/rendering/auth · CONTENT_TYPES
- `app/api/drafts/route.ts` — 119 lines; api · persistence/events/rendering · CONTENT_TYPES
- `app/api/dream-windows/[id]/route.ts` — 300 lines; api · persistence/rendering/auth · GET
- `app/api/dream-windows/route.ts` — 185 lines; api · persistence/rendering/auth · REQUIRED_FIELDS
- `app/api/favorites/route.ts` — 112 lines; api · persistence/auth · GET
- `app/api/marketplace/request/route.ts` — 90 lines; api · persistence/events/auth · POST
- `app/api/settings/appearance/route.ts` — 92 lines; api · persistence/rendering/auth · GET
- `app/api/shared-dream/sessions/[id]/route.ts` — 134 lines; api · persistence/events/rendering · PatchSchema
- `app/api/shared-dream/sessions/route.ts` — 92 lines; api · persistence/events/rendering · CreateSchema
- `app/api/skip-credits/balance/route.ts` — 54 lines; api · persistence/auth · GET
- `app/api/skip-credits/earn/route.ts` — 126 lines; api · persistence/auth · POST
- `app/api/skip-credits/use/route.ts` — 81 lines; api · persistence/auth · POST
- `app/api/account/delete-data/route.ts` — 99 lines; api · persistence/rendering/auth · DeleteDataBodySchema
- `app/api/account/export-data/route.ts` — 84 lines; api · persistence/auth · EXPORT_TARGETS
- `app/api/activity/track/route.ts` — 122 lines; api · persistence/auth · POST
- `app/api/admin/observability/route.ts` — 84 lines; api · persistence/auth · GET
- `app/api/ai/boogieman/privacy-event/route.ts` — 161 lines; api · persistence/events/rendering · PrivacyEventSchema
- `app/api/ai/boogieman/route.ts` — 155 lines; api · persistence/rendering/auth · BoogieRequestSchema
- `app/api/ai/eams/route.ts` — 193 lines; api · persistence/auth/commerce · POST
- `app/api/ai/execute/route.ts` — 252 lines; api · state/persistence/rendering · ROUTE_MAP
- Plus 822 additional matched files summarized by roots/signals above.

<!-- DREAMENGIN_PRODUCT_README:END -->
