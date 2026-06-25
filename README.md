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

### Repo Evidence
Matched focused repo evidence: 90 files, about 27,798 readable source lines.

Behavior signals:
- auth — 69 file hits
- events — 53 file hits
- persistence — 39 file hits
- runtime — 31 file hits
- commerce — 31 file hits
- state — 23 file hits
- rendering — 21 file hits
- mobile touch — 9 file hits

Routes and APIs:
- POST /api/forge/build ← app/api/forge/build/route.ts
- /daydream/code ← app/daydream/code/page.tsx
- /daydream/forge ← app/daydream/forge/page.tsx
- GET|POST|DELETE /api/follow ← app/api/follow/route.ts
- POST /api/admin/ai-chat ← app/api/admin/ai-chat/route.ts
- GET|PATCH /api/shared-dream/sessions/[id] ← app/api/shared-dream/sessions/[id]/route.ts
- GET /api/embed-feed ← app/api/embed-feed/route.ts
- GET|POST /api/settings/appearance ← app/api/settings/appearance/route.ts
- GET|POST /api/shared-dream/sessions ← app/api/shared-dream/sessions/route.ts
- GET /api/account/export-data ← app/api/account/export-data/route.ts

Components:
- WIDGETS — app/daydream/code/page.tsx
- CodeDaydreamPage — app/daydream/code/page.tsx
- WIDGETS — app/daydream/forge/page.tsx
- ForgeDaydreamPage — app/daydream/forge/page.tsx
- ACCENT — engins/engin.CodeEngin.tsx
- STORAGE_KEY — engins/engin.CodeEngin.tsx
- SNAPSHOT_LIMIT — engins/engin.CodeEngin.tsx
- FONT_MIN — engins/engin.CodeEngin.tsx
- FONT_MAX — engins/engin.CodeEngin.tsx
- SHELL — engins/engin.CodeEngin.tsx
- PANEL — engins/engin.CodeEngin.tsx
- DARK_PANEL — engins/engin.CodeEngin.tsx
- COMMANDS — engins/engin.CodeEngin.tsx
- DEFAULT_FILES — engins/engin.CodeEngin.tsx

Hooks:
- useGamepad — .github/workflows/elite-gameengin-evolution.yml
- useSubmitScore — .github/workflows/elite-gameengin-evolution.yml
- useCaseSensitiveFileNames — .github/workflows/resilient-engine-smoke.yml
- useState — .github/workflows/daydream-engin-build-cycle.yml
- useEffect — .github/workflows/daydream-engin-build-cycle.yml
- useEnginWorkflow — engins/rulesets/workflowEngine.ts
- useSimulation — app/api/forge/build/route.ts
- useCallback — engins/rulesets/useEnginWorkflow.ts
- useEffect — engins/rulesets/useEnginWorkflow.ts
- useState — engins/rulesets/useEnginWorkflow.ts
- useEnginWorkflow — engins/rulesets/useEnginWorkflow.ts
- useEffect — .github/workflows/game-engin-patrol.yml
- useSharedDreamSession — app/api/shared-dream/sessions/[id]/route.ts
- useDaydreamPersistence — engins/engin.CodeEngin.tsx

Exports that define public behavior:
- supabase — .github/workflows/generatesupabasetypes.yml
- default export — Strict English Codebase Export.yml (.github/workflows/Strict English Codebase Export.yml)
- resolveSafeNextPath — supabase/auth/nextRedirect.ts
- buildLoginRedirectPath — supabase/auth/nextRedirect.ts
- EnginId — engins/rulesets/workflowEngine.ts
- WorkflowStage — engins/rulesets/workflowEngine.ts
- STAGE_LABELS — engins/rulesets/workflowEngine.ts
- isValidTransition — engins/rulesets/workflowEngine.ts
- HandoffKind — engins/rulesets/workflowEngine.ts
- HandoffPath — engins/rulesets/workflowEngine.ts
- HANDOFF_PATHS — engins/rulesets/workflowEngine.ts
- handoffsFrom — engins/rulesets/workflowEngine.ts
- WorkflowDef — engins/rulesets/workflowEngine.ts
- WORKFLOW_CATALOG — engins/rulesets/workflowEngine.ts

Import/export connections:
- @supabase/supabase-js
- ./types/supabase
- node:fs
- node:path
- node:child_process
- typescript
- dr-eams/ai/groq
- dr-eams/ai/triad
- engins/forgeengin/forge/forgeBuild
- engins/forgeengin/forge/forgeRegistry
- utils/index
- next/server
- engine/journey/journeyDots
- engine/runtime/dualRuntimeBridge

### Matched Files

Primary files:
- `.github/workflows/gameengin-ai-agent.yml` — 240 lines — score 168 — primary path, path keyword: workflow
- `.github/workflows/generatesupabasetypes.yml` — 57 lines — score 164 — primary path, path keyword: supabase
- `.github/workflows/sql-migration-guard.yml` — 693 lines — score 160 — primary path, path keyword: workflow
- `.github/workflows/idari-daily.yml` — 659 lines — score 160 — primary path, path keyword: workflow
- `.github/workflows/full-audit.yml` — 609 lines — score 160 — primary path, path keyword: workflow
- `.github/workflows/elite-gameengin-evolution.yml` — 426 lines — score 160 — primary path, path keyword: workflow
- `.github/workflows/issue-bot.yml` — 321 lines — score 160 — primary path, path keyword: workflow
- `.github/workflows/games-library-ai-agent.yml` — 124 lines — score 160 — primary path, path keyword: workflow
- `.github/workflows/mobile-nextgen-spec-evolution.yml` — 43 lines — score 156 — primary path, path keyword: next
- `.github/workflows/Strict English Codebase Export.yml` — 1066 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/export-repo-to-artifacts.yml` — 830 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/resilient-engine-smoke.yml` — 588 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/daydream-engin-build-cycle.yml` — 362 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/humanai-army-audit.yml` — 272 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/neural_decision_engine.yml` — 249 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/engin-all.yml` — 233 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/spec-engin-ai-agent.yml` — 225 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/report-driven-coding-agent.yml` — 219 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/github-actions.yml` — 205 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/daydream-all.yml` — 183 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/update-embed-feed.yml` — 177 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/humanai-audit.yml` — 156 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/daydream-games-engin.yml` — 109 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/daydream-lab-engin.yml` — 109 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/daydream-music-engin.yml` — 108 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/daydream-brand-engin.yml` — 107 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/daydream-code-engin.yml` — 107 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/daydream-create-engin.yml` — 107 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/vercel-deploy.yml` — 101 lines — score 152 — primary path, path keyword: workflow
- `.github/workflows/refreshlock.yml` — 59 lines — score 152 — primary path, path keyword: workflow
- `supabase/auth/nextRedirect.ts` — 61 lines — score 148 — primary path, path keyword: next
- `pnpm-lock.yaml` — 6804 lines — score 144 — primary path, path keyword: pnpm
- `.github/workflows/massivejson.yml` — 389 lines — score 144 — primary path, path keyword: workflow
- `engins/rulesets/workflowEngine.ts` — 281 lines — score 144 — primary path, path keyword: workflow

Supporting files:
- `.github/workflows/cleanup-dead-code.yml` — 185 lines — score 144 — primary path, path keyword: workflow
- `.github/workflows/readme-autosync.yml` — 170 lines — score 144 — primary path, path keyword: workflow
- `.github/workflows/type-audit.yml` — 162 lines — score 144 — primary path, path keyword: workflow
- `.github/workflows/preflight.yml` — 137 lines — score 144 — primary path, path keyword: workflow
- `.github/workflows/export-src-only.yml` — 74 lines — score 144 — primary path, path keyword: workflow
- `.github/workflows/gameengin-maestro.yml` — 47 lines — score 144 — primary path, path keyword: workflow
- `supabase/client/safeGetUser.ts` — 40 lines — score 144 — primary path, path keyword: supabase
- `app/api/forge/build/route.ts` — 923 lines — score 142 — primary path
- `.github/workflows/game-library-research.yml` — 245 lines — score 136 — primary path, path keyword: workflow
- `.github/workflows/daydream-engin-sicc-refinement.yml` — 241 lines — score 136 — primary path, path keyword: workflow
- `engins/rulesets/useEnginWorkflow.ts` — 222 lines — score 136 — primary path, path keyword: workflow
- `next.config.mjs` — 207 lines — score 136 — primary path, path keyword: next
- `supabase/server/serverClient.ts` — 191 lines — score 136 — primary path, path keyword: supabase
- `.github/workflows/game-engin-patrol.yml` — 169 lines — score 136 — primary path, path keyword: workflow
- `.github/workflows/print-codebase.yml` — 148 lines — score 136 — primary path, path keyword: workflow
- `.github/workflows/optimize-dreamengin.yml` — 137 lines — score 136 — primary path, path keyword: workflow
- `.github/workflows/dreamengin-preflight.yml` — 133 lines — score 136 — primary path, path keyword: workflow
- `.github/workflows/docs-auto-update.yml` — 118 lines — score 136 — primary path, path keyword: workflow
- `.github/workflows/codeql.yml` — 104 lines — score 136 — primary path, path keyword: workflow
- `.github/workflows/portfolio-optimization.yml` — 94 lines — score 136 — primary path, path keyword: workflow
- `.github/workflows/visual-schematic.yml` — 67 lines — score 136 — primary path, path keyword: workflow
- `.github/workflows/visual-schematicpages.yml` — 63 lines — score 136 — primary path, path keyword: workflow
- `supabase/migrations/20260323100000_embed_feed_items.sql` — 56 lines — score 136 — primary path, path keyword: supabase
- `supabase/config.ts` — 55 lines — score 136 — primary path, path keyword: supabase
- `.github/workflows/autofixvercelbuild.yml` — 54 lines — score 136 — primary path, path keyword: workflow
- `.github/workflows/repo-snapshot.yml` — 52 lines — score 136 — primary path, path keyword: workflow
- `supabase/seed.sql` — 50 lines — score 136 — primary path, path keyword: supabase
- `.github/workflows/contentengin-test-assets.yml` — 48 lines — score 136 — primary path, path keyword: workflow
- `.github/workflows/gameengin-prophet.yml` — 41 lines — score 136 — primary path, path keyword: workflow
- `.github/workflows/exportrepo.yml` — 39 lines — score 136 — primary path, path keyword: workflow
## 5. The Engins and DayDreams

### Plain English
Engins are the production systems; DayDreams are the user-facing creative spaces around them. This section connects engine code, pages, panels, shells, and components that let users create code, games, music, simulations, media, and brand work.

### What users experience
A user experiences this as switching into a real studio surface: CodeEngin, GameEngin, ContentEngin, LabEngin, StarMakerEngin, BrandingEngin, and their DayDream wrappers.

### Repo Evidence
Matched focused repo evidence: 120 files, about 37,449 readable source lines.

Behavior signals:
- auth — 77 file hits
- persistence — 75 file hits
- state — 48 file hits
- rendering — 44 file hits
- commerce — 43 file hits
- runtime — 39 file hits
- mobile touch — 28 file hits
- events — 26 file hits

Routes and APIs:
- /engines/music/studio ← app/engines/music/studio/page.tsx
- /daydream/games/engin ← app/daydream/games/engin/page.tsx
- /daydream/brand/engin ← app/daydream/brand/engin/page.tsx
- /daydream/code/engin ← app/daydream/code/engin/page.tsx
- /daydream/create/engin ← app/daydream/create/engin/page.tsx
- /daydream/lab/engin ← app/daydream/lab/engin/page.tsx
- /daydream/music/engin ← app/daydream/music/engin/page.tsx
- /daydream/code ← app/daydream/code/page.tsx
- /daydream/lab ← app/daydream/lab/page.tsx
- /daydream/games ← app/daydream/games/page.tsx
- /daydream/forge ← app/daydream/forge/page.tsx
- /daydream/create ← app/daydream/create/page.tsx
- /daydream/music ← app/daydream/music/page.tsx
- /daydream/brand ← app/daydream/brand/page.tsx
- /engines/music/arrange ← app/engines/music/arrange/page.tsx
- /engines/music/library ← app/engines/music/library/page.tsx

Components:
- ACCENT — app/engines/music/studio/page.tsx
- NAV_ITEMS — app/engines/music/studio/page.tsx
- MusicStudioPage — app/engines/music/studio/page.tsx
- GamesEnginRedirectPage — app/daydream/games/engin/page.tsx
- BrandEnginRedirectPage — app/daydream/brand/engin/page.tsx
- CodeEnginRedirectPage — app/daydream/code/engin/page.tsx
- CreateEnginRedirectPage — app/daydream/create/engin/page.tsx
- LabEnginRedirectPage — app/daydream/lab/engin/page.tsx
- MusicEnginRedirectPage — app/daydream/music/engin/page.tsx
- StudioPanel — components/engines/music/panels/dream.panel.StudioPanel.tsx
- ImplicitAssetWorkspace — engins/contentengin/ImplicitAssetWorkspace.tsx
- WIDGETS — app/daydream/code/page.tsx
- CodeDaydreamPage — app/daydream/code/page.tsx
- LabEngin — app/daydream/lab/page.tsx

Hooks:
- useCallback — engins/contentengin/useImplicitAssetWorkspace.ts
- useEffect — engins/contentengin/useImplicitAssetWorkspace.ts
- useMemo — engins/contentengin/useImplicitAssetWorkspace.ts
- useRef — engins/contentengin/useImplicitAssetWorkspace.ts
- useState — engins/contentengin/useImplicitAssetWorkspace.ts
- useContentEnginRuntime — engins/contentengin/useImplicitAssetWorkspace.ts
- useImplicitAssetWorkspace — engins/contentengin/useImplicitAssetWorkspace.ts
- useMemoryAdapter — engins/contentengin/useImplicitAssetWorkspace.ts
- useEffect — components/engines/music/panels/dream.panel.StudioPanel.tsx
- useRef — components/engines/music/panels/dream.panel.StudioPanel.tsx
- useState — components/engines/music/panels/dream.panel.StudioPanel.tsx
- useCallback — engins/rulesets/game/useGameEnginRuntime.ts
- useEffect — engins/rulesets/game/useGameEnginRuntime.ts
- useRef — engins/rulesets/game/useGameEnginRuntime.ts

Exports that define public behavior:
- metadata — app/engines/music/studio/page.tsx
- default export — page (app/engines/music/studio/page.tsx)
- default export — page (app/daydream/games/engin/page.tsx)
- default export — page (app/daydream/brand/engin/page.tsx)
- default export — page (app/daydream/code/engin/page.tsx)
- default export — page (app/daydream/create/engin/page.tsx)
- default export — page (app/daydream/lab/engin/page.tsx)
- default export — page (app/daydream/music/engin/page.tsx)
- CellLanguage — engins/rulesets/code/codeEnginRuleSet.ts
- CellStatus — engins/rulesets/code/codeEnginRuleSet.ts
- SourceLanguage — engins/rulesets/code/codeEnginRuleSet.ts
- CiStatus — engins/rulesets/code/codeEnginRuleSet.ts
- DiagnosticSeverity — engins/rulesets/code/codeEnginRuleSet.ts
- CodeRuntimeMode — engins/rulesets/code/codeEnginRuleSet.ts

Import/export connections:
- components/engines/music/panels/dream.panel.StudioPanel
- components/engines/shared
- engine/dev-bypass
- supabase/server/serverClient
- supabase/client/safeGetUser
- next/navigation
- next/server
- engine/engin-runtime/EnginBaseState
- engine/engin-runtime/EnginCapabilities
- engine/engin-runtime/EnginCapabilityTargets
- engine/engin-runtime/EnginRuleSetContract
- react
- engins/rulesets/content/useContentEnginRuntime
- engins/isosurfaceAssetPipeline

### Matched Files

Primary files:
- `app/engines/music/studio/page.tsx` — 40 lines — score 174 — primary path, path keyword: engin
- `app/daydream/games/engin/page.tsx` — 30 lines — score 166 — primary path, path keyword: engin
- `app/daydream/brand/engin/page.tsx` — 11 lines — score 166 — primary path, path keyword: engin
- `app/daydream/code/engin/page.tsx` — 11 lines — score 166 — primary path, path keyword: engin
- `app/daydream/create/engin/page.tsx` — 11 lines — score 166 — primary path, path keyword: engin
- `app/daydream/lab/engin/page.tsx` — 11 lines — score 166 — primary path, path keyword: engin
- `app/daydream/music/engin/page.tsx` — 11 lines — score 166 — primary path, path keyword: engin
- `engins/rulesets/code/codeEnginRuleSet.ts` — 395 lines — score 164 — primary path, path keyword: engin
- `engins/contentengin/useImplicitAssetWorkspace.ts` — 376 lines — score 164 — primary path, path keyword: engin
- `components/engines/shared/dream.EnginRuleSet.ts` — 51 lines — score 164 — primary path, path keyword: engin
- `engins/rulesets/code/index.ts` — 23 lines — score 164 — primary path, path keyword: engin
- `engins/rulesets/music/index.ts` — 23 lines — score 164 — primary path, path keyword: engin
- `engins/rulesets/game/gameEnginRuleSet.ts` — 302 lines — score 156 — primary path, path keyword: engin
- `engins/rulesets/music/starMakerEnginRuleSet.ts` — 265 lines — score 156 — primary path, path keyword: engin
- `engins/rulesets/brand/brandEnginRuleSet.ts` — 241 lines — score 156 — primary path, path keyword: engin
- `engins/rulesets/lab/labEnginRuleSet.ts` — 233 lines — score 156 — primary path, path keyword: engin
- `components/engines/music/panels/dream.panel.StudioPanel.tsx` — 188 lines — score 156 — primary path, path keyword: engin
- `engins/rulesets/game/useGameEnginRuntime.ts` — 119 lines — score 156 — primary path, path keyword: engin
- `engins/rulesets/brand/useBrandEnginRuntime.ts` — 109 lines — score 156 — primary path, path keyword: engin
- `engins/rulesets/code/useCodeEnginRuntime.ts` — 109 lines — score 156 — primary path, path keyword: engin
- `engins/rulesets/content/useContentEnginRuntime.ts` — 109 lines — score 156 — primary path, path keyword: engin
- `engins/rulesets/lab/useLabEnginRuntime.ts` — 109 lines — score 156 — primary path, path keyword: engin
- `engins/rulesets/music/useStarMakerEnginRuntime.ts` — 109 lines — score 156 — primary path, path keyword: engin
- `engins/contentengin/ImplicitAssetWorkspace.tsx` — 77 lines — score 156 — primary path, path keyword: engin
- `engins/rulesets/content/contentEnginRuleSet.ts` — 37 lines — score 156 — primary path, path keyword: engin
- `engins/rulesets/forge/index.ts` — 24 lines — score 156 — primary path, path keyword: engin
- `engins/rulesets/dreams/index.ts` — 23 lines — score 156 — primary path, path keyword: engin
- `engins/rulesets/game/declarative.ts` — 23 lines — score 156 — primary path, path keyword: engin
- `engins/rulesets/lab/index.ts` — 23 lines — score 156 — primary path, path keyword: engin
- `engins/rulesets/game/index.ts` — 17 lines — score 156 — primary path, path keyword: engin
- `engins/rulesets/homedream/index.ts` — 15 lines — score 156 — primary path, path keyword: engin
- `app/daydream/code/page.tsx` — 1118 lines — score 154 — primary path, path keyword: daydream
- `app/daydream/lab/page.tsx` — 1062 lines — score 154 — primary path, path keyword: daydream
- `app/daydream/games/page.tsx` — 365 lines — score 154 — primary path, path keyword: daydream

Supporting files:
- `app/daydream/forge/page.tsx` — 348 lines — score 154 — primary path, path keyword: daydream
- `app/daydream/create/page.tsx` — 107 lines — score 154 — primary path, path keyword: daydream
- `app/daydream/music/page.tsx` — 87 lines — score 154 — primary path, path keyword: daydream
- `app/daydream/brand/page.tsx` — 62 lines — score 154 — primary path, path keyword: daydream
- `app/engines/music/arrange/page.tsx` — 40 lines — score 154 — primary path, path keyword: engin
- `app/engines/music/library/page.tsx` — 40 lines — score 154 — primary path, path keyword: engin
- `engins/engin.StarMakerEngin.tsx` — 4303 lines — score 152 — primary path, path keyword: engin
- `engins/engin.GameEngin.tsx` — 2953 lines — score 152 — primary path, path keyword: engin
- `engins/engin.LabEngin.tsx` — 1989 lines — score 152 — primary path, path keyword: engin
- `engins/engin.CodeEngin.tsx` — 1286 lines — score 152 — primary path, path keyword: engin
- `components/daydream/dream.NGNEngin.tsx` — 600 lines — score 148 — primary path, path keyword: engin
- `engins/rulesets/workflowEngine.ts` — 281 lines — score 148 — primary path, path keyword: engin
- `engins/rulesets/useEnginWorkflow.ts` — 222 lines — score 148 — primary path, path keyword: engin
- `components/daydream/dream.StandaloneEnginSurface.tsx` — 38 lines — score 148 — primary path, path keyword: engin
- `engins/rulesets/homedream/dream.homedream.physics.ts` — 36 lines — score 148 — primary path, path keyword: engin
- `engins/rulesets/homedream/dream.homedream.transforms.ts` — 36 lines — score 148 — primary path, path keyword: engin
- `engins/rulesets/homedream/dream.homedream.constants.ts` — 9 lines — score 148 — primary path, path keyword: engin
- `app/daydream/lab/portfolio/page.tsx` — 189 lines — score 146 — primary path, path keyword: daydream
- `app/engines/page.tsx` — 130 lines — score 146 — primary path, path keyword: engin
- `app/engines/games/builder/page.tsx` — 51 lines — score 146 — primary path, path keyword: engin
- `app/engines/games/library/page.tsx` — 51 lines — score 146 — primary path, path keyword: engin
- `app/engines/games/scores/page.tsx` — 51 lines — score 146 — primary path, path keyword: engin
- `app/engines/code/notebook/page.tsx` — 42 lines — score 146 — primary path, path keyword: engin
- `app/engines/code/ai/page.tsx` — 32 lines — score 146 — primary path, path keyword: engin
- `app/engines/code/projects/page.tsx` — 32 lines — score 146 — primary path, path keyword: engin
- `app/engines/lab/data/page.tsx` — 32 lines — score 146 — primary path, path keyword: engin
- `app/engines/lab/experiments/page.tsx` — 32 lines — score 146 — primary path, path keyword: engin
- `app/engines/lab/quantum/page.tsx` — 32 lines — score 146 — primary path, path keyword: engin
- `app/daydream/game/page.tsx` — 31 lines — score 146 — primary path, path keyword: daydream
- `app/engines/brand/campaigns/page.tsx` — 31 lines — score 146 — primary path, path keyword: engin
## 6. Dual Runtimes

### Plain English
Dual runtimes are the split execution model that coordinates navigation, state, snapshots, handoffs, surface lifecycle, and active Engin behavior without making every screen own the whole system.

### What users experience
Users feel this when one part of the app keeps context while another part opens a studio, preview, editor, remote surface, or companion panel without losing state.

### Repo Evidence
Matched focused repo evidence: 80 files, about 23,754 readable source lines.

Behavior signals:
- auth — 59 file hits
- commerce — 59 file hits
- persistence — 49 file hits
- state — 39 file hits
- events — 31 file hits
- rendering — 31 file hits
- runtime — 28 file hits
- mobile touch — 28 file hits

Routes and APIs:
- /dreamdmbar/dualruntime ← app/dreamdmbar/dualruntime/page.tsx
- /daydream/code ← app/daydream/code/page.tsx
- /daydream/lab ← app/daydream/lab/page.tsx
- POST /api/forge/build ← app/api/forge/build/route.ts
- /settings/appearance ← app/settings/appearance/page.tsx
- /edit-profiledream ← app/edit-profiledream/page.tsx
- /lab/[id]/codespace ← app/lab/[id]/codespace/page.tsx
- /about ← app/about/page.tsx
- /login ← app/login/page.tsx
- /join ← app/join/page.tsx
- /policy ← app/policy/page.tsx
- /discover ← app/discover/page.tsx
- /daydream/games ← app/daydream/games/page.tsx
- /view-profile ← app/view-profile/page.tsx
- GET|POST /api/connectors/webhooks/[provider] ← app/api/connectors/webhooks/[provider]/route.ts
- /daydream/forge ← app/daydream/forge/page.tsx

Components:
- SESSION_STORAGE_KEY — app/dreamdmbar/dualruntime/page.tsx
- DreamDMBarDualRuntimePage — app/dreamdmbar/dualruntime/page.tsx
- DualRuntimeContext — components/runtime/dream.DualRuntimeContainer.tsx
- CORE_VERSION — components/runtime/dream.DualRuntimeContainer.tsx
- SYSTEM_ACTOR — components/runtime/dream.DualRuntimeContainer.tsx
- DualRuntimeContainer — components/runtime/dream.DualRuntimeContainer.tsx
- ENGIN_SURFACES — components/runtime/dream.RuntimeView.tsx
- RuntimeView — components/runtime/dream.RuntimeView.tsx
- DreamComponent — components/runtime/dream.RuntimeView.tsx
- EnginSurface — components/runtime/dream.RuntimeView.tsx
- PANEL_MAP — components/runtime/dream.RuntimeView.tsx
- MIN_ZOOM — components/runtime/dream.shell.RuntimeShell.tsx
- MAX_ZOOM — components/runtime/dream.shell.RuntimeShell.tsx
- ZOOM_STEP — components/runtime/dream.shell.RuntimeShell.tsx

Hooks:
- useCallback — engine/runtime/useDualRuntime.ts
- useEffect — engine/runtime/useDualRuntime.ts
- useRef — engine/runtime/useDualRuntime.ts
- useState — engine/runtime/useDualRuntime.ts
- useDualRuntime — engine/runtime/useDualRuntime.ts
- useDreamSystem — app/dreamdmbar/dualruntime/page.tsx
- useEffect — app/dreamdmbar/dualruntime/page.tsx
- useState — app/dreamdmbar/dualruntime/page.tsx
- useCallback — engine/runtime/useDualRuntimePersistence.ts
- useEffect — engine/runtime/useDualRuntimePersistence.ts
- useState — engine/runtime/useDualRuntimePersistence.ts
- useDualRuntimePersistence — engine/runtime/useDualRuntimePersistence.ts
- useCallback — components/runtime/dream.DualRuntimeContainer.tsx
- useContext — components/runtime/dream.DualRuntimeContainer.tsx

Exports that define public behavior:
- UseDualRuntimeReturn — engine/runtime/useDualRuntime.ts
- useDualRuntime — engine/runtime/useDualRuntime.ts
- default export — page (app/dreamdmbar/dualruntime/page.tsx)
- DEFAULT_DUAL_RUNTIME — engine/runtime/dualRuntime.ts
- TORUS_DOMAINS — engine/runtime/dualRuntime.ts
- TORUS_WIDTH — engine/runtime/dualRuntime.ts
- TORUS_HEIGHT — engine/runtime/dualRuntime.ts
- TORUS_FOCUS_MAP — engine/runtime/dualRuntime.ts
- RuntimeWorld — engine/runtime/dualRuntime.ts
- DualRuntimeState — engine/runtime/dualRuntime.ts
- TorusDomain — engine/runtime/dualRuntime.ts
- setRuntimeWorld — engine/runtime/dualRuntime.ts
- swapDominantRuntime — engine/runtime/dualRuntime.ts
- makeHomeActiveTop — engine/runtime/dualRuntime.ts

Import/export connections:
- react
- ./dualRuntimeBridge
- components/shared-dream/dream.SharedDreamRuntime
- dreamdmbar/runtime/DreamSystemContext
- engine/identity/canonical-names
- components/panels/panelTypes
- ./dualRuntime
- engine/runtime/madMaxiSnapshotBridge
- events
- pending
- engine/runtime/dualRuntime
- engine/runtime/iEngine
- app/dreamdmbar/_components/HomeDreamRegion
- components/dreams/dreamsurface.dreamspace

### Matched Files

Primary files:
- `engine/runtime/useDualRuntime.ts` — 184 lines — score 152 — primary path, path keyword: dualRuntime
- `app/dreamdmbar/dualruntime/page.tsx` — 102 lines — score 146 — primary path, path keyword: dualRuntime
- `engine/runtime/dualRuntime.ts` — 259 lines — score 144 — primary path, path keyword: dualRuntime
- `engine/runtime/useDualRuntimePersistence.ts` — 187 lines — score 144 — primary path, path keyword: dualRuntime
- `engine/runtime/dualRuntimeBridge.ts` — 873 lines — score 136 — primary path, path keyword: dualRuntime
- `components/runtime/dream.DualRuntimeContainer.tsx` — 246 lines — score 136 — primary path, path keyword: dualRuntime
- `components/runtime/dream.RuntimeView.tsx` — 432 lines — score 116 — primary path
- `components/runtime/dream.shell.RuntimeShell.tsx` — 352 lines — score 108 — primary path
- `engine/vm/dual-runtime.ts` — 259 lines — score 81 — supporting path, path keyword: dual runtime
- `engine/vm/README.md` — 253 lines — score 77 — supporting path
- `engine/vm/snapshot.ts` — 334 lines — score 73 — supporting path, path keyword: snapshot
- `engine/runtime/iEngine.ts` — 362 lines — score 69 — supporting path
- `engine/runtime/dreamOSBus.ts` — 792 lines — score 61 — supporting path
- `engine/vm/bus-events.ts` — 56 lines — score 61 — supporting path
- `engine/vm/index.ts` — 47 lines — score 61 — supporting path
- `engine/vm/wasmGpuVM.ts` — 510 lines — score 53 — supporting path
- `engine/vm/types.ts` — 296 lines — score 53 — supporting path
- `engine/vm/dualVMCoordinator.ts` — 49 lines — score 53 — supporting path
- `engine/vm/bufferManager.ts` — 328 lines — score 45 — supporting path
- `engine/vm/pipelineCache.ts` — 276 lines — score 45 — supporting path
- `engine/vm/inter-vm-messaging.ts` — 199 lines — score 45 — supporting path
- `engine/vm/security.ts` — 141 lines — score 45 — supporting path
- `engine/vm/wasm-features.ts` — 137 lines — score 45 — supporting path
- `engine/vm/resource-quota.ts` — 119 lines — score 45 — supporting path
- `.ci/snapshot.md` — 232 lines — score 28 — path keyword: snapshot
- `engine/runtime/snapshotFingerprint.ts` — 145 lines — score 28 — path keyword: snapshot
- `engine/engin-runtime/EnginSnapshotFingerprint.ts` — 90 lines — score 28 — path keyword: snapshot
- `engine/runtime/madMaxiSnapshotBridge.ts` — 67 lines — score 28 — path keyword: snapshot
- `tests/dual-runtime-bridge-peer-activity.test.ts` — 51 lines — score 22 — path keyword: dual runtime, path keyword: runtime bridge
- `.ci/snapshot.diff.txt` — 0 lines — score 20 — path keyword: snapshot
- `scripts/update-handoff.mjs` — 152 lines — score 13 — path keyword: handoff
- `app/daydream/code/page.tsx` — 1118 lines — score 10
- `app/daydream/lab/page.tsx` — 1062 lines — score 10
- `app/api/forge/build/route.ts` — 923 lines — score 10

Supporting files:
- `app/settings/appearance/page.tsx` — 750 lines — score 10
- `app/edit-profiledream/page.tsx` — 561 lines — score 10
- `app/lab/[id]/codespace/page.tsx` — 399 lines — score 10
- `app/about/page.tsx` — 378 lines — score 10
- `app/login/page.tsx` — 377 lines — score 10
- `app/join/page.tsx` — 374 lines — score 10
- `app/policy/page.tsx` — 373 lines — score 10
- `app/discover/page.tsx` — 370 lines — score 10
- `app/daydream/games/page.tsx` — 365 lines — score 10
- `app/view-profile/page.tsx` — 365 lines — score 10
- `app/api/connectors/webhooks/[provider]/route.ts` — 360 lines — score 10
- `app/daydream/forge/page.tsx` — 348 lines — score 10
- `app/api/messages/route.ts` — 342 lines — score 10
- `app/(internal)/idari-console/page.tsx` — 309 lines — score 10
- `app/api/ai/idari/route.ts` — 309 lines — score 10
- `app/api/content/intelligence/route.ts` — 309 lines — score 10
- `app/api/dream-windows/[id]/route.ts` — 300 lines — score 10
- `app/api/content/voice-clone/route.ts` — 292 lines — score 10
- `app/api/social/rss-feed/route.ts` — 277 lines — score 10
- `app/marketplace/sell/page.tsx` — 270 lines — score 10
- `app/ads/page.tsx` — 267 lines — score 10
- `app/api/ai/boogieman/child-safety/route.ts` — 264 lines — score 10
- `app/lab/[id]/page.tsx` — 259 lines — score 10
- `app/settings/security/page.tsx` — 254 lines — score 10
- `app/api/ai/execute/route.ts` — 252 lines — score 10
- `app/profile/[handle]/page.tsx` — 252 lines — score 10
- `app/api/dreamr/suggested/route.ts` — 235 lines — score 10
- `app/lab/page.tsx` — 235 lines — score 10
- `app/api/posts/route.ts` — 232 lines — score 10
- `app/api/feed/route.ts` — 230 lines — score 10
## 7. Shared Dreams

### Plain English
Shared Dreams are the collaboration and publishing layer for Dreams that can be saved, shown, shared, synchronized, or experienced by more than one person.

### What users experience
Users feel this when a Dream becomes something social: visible posts, shared sessions, public/private access, saved creative objects, and collaboration signals.

### Repo Evidence
Matched focused repo evidence: 90 files, about 23,489 readable source lines.

Behavior signals:
- auth — 86 file hits
- persistence — 77 file hits
- commerce — 65 file hits
- state — 41 file hits
- events — 36 file hits
- mobile touch — 29 file hits
- rendering — 23 file hits
- runtime — 16 file hits

Routes and APIs:
- GET|PATCH /api/shared-dream/sessions/[id] ← app/api/shared-dream/sessions/[id]/route.ts
- GET|POST /api/shared-dream/sessions ← app/api/shared-dream/sessions/route.ts
- GET|POST /api/dreams/feed ← app/api/dreams/feed/route.ts
- GET /api/dreams/instances ← app/api/dreams/instances/route.ts
- POST /api/dreams/transfer ← app/api/dreams/transfer/route.ts
- POST /api/agent/session ← app/api/agent/session/route.ts
- /daydream/code ← app/daydream/code/page.tsx
- /daydream/lab ← app/daydream/lab/page.tsx
- POST /api/forge/build ← app/api/forge/build/route.ts
- /settings/appearance ← app/settings/appearance/page.tsx
- /edit-profiledream ← app/edit-profiledream/page.tsx
- /lab/[id]/codespace ← app/lab/[id]/codespace/page.tsx
- /about ← app/about/page.tsx
- /login ← app/login/page.tsx
- /join ← app/join/page.tsx
- /policy ← app/policy/page.tsx

Components:
- SharedDreamContext — components/shared-dream/dream.SharedDreamProvider.tsx
- SharedDreamProvider — components/shared-dream/dream.SharedDreamProvider.tsx
- ENGIN_SLOTS — components/shared-dream/dream.SharedDreamRuntime.tsx
- SharedDreamRuntimeInner — components/shared-dream/dream.SharedDreamRuntime.tsx
- SharedDreamRuntime — components/shared-dream/dream.SharedDreamRuntime.tsx
- PEER_COLORS — components/dreams/dream.shell.SharedDreamShell.tsx
- SharedDreamShell — components/dreams/dream.shell.SharedDreamShell.tsx
- SharedDreamCanvas — components/shared-dream/dream.SharedDreamCanvas.tsx
- InviteFlow — components/shared-dream/dream.InviteFlow.tsx
- T — components/daydream/starmaker/dream.panel.SessionViewPanel.tsx
- CELL_W — components/daydream/starmaker/dream.panel.SessionViewPanel.tsx
- CELL_H — components/daydream/starmaker/dream.panel.SessionViewPanel.tsx
- HEADER_H — components/daydream/starmaker/dream.panel.SessionViewPanel.tsx
- SessionViewPanel — components/daydream/starmaker/dream.panel.SessionViewPanel.tsx

Hooks:
- useSharedDreamSession — supabase/migrations/20260516000300_shared_dream_sessions.sql
- useCallback — components/shared-dream/dream.SharedDreamProvider.tsx
- useContext — components/shared-dream/dream.SharedDreamProvider.tsx
- useEffect — components/shared-dream/dream.SharedDreamProvider.tsx
- useRef — components/shared-dream/dream.SharedDreamProvider.tsx
- useState — components/shared-dream/dream.SharedDreamProvider.tsx
- useSharedDream — components/shared-dream/dream.SharedDreamProvider.tsx
- useSharedDreamSession — app/api/shared-dream/sessions/[id]/route.ts
- useSharedDreamSession — components/shared-dream/dream.SharedDreamRuntime.tsx
- useCallback — components/shared-dream/dream.SharedDreamRuntime.tsx
- useEffect — components/shared-dream/dream.SharedDreamRuntime.tsx
- useState — components/shared-dream/dream.SharedDreamRuntime.tsx
- useEnginCoopSync — components/shared-dream/dream.SharedDreamRuntime.tsx
- useRef — components/shared-dream/dream.SharedDreamRuntime.tsx

Exports that define public behavior:
- CursorPosition — components/shared-dream/dream.SharedDreamProvider.tsx
- SharedDreamContextValue — components/shared-dream/dream.SharedDreamProvider.tsx
- SharedDreamProviderProps — components/shared-dream/dream.SharedDreamProvider.tsx
- SharedDreamProvider — components/shared-dream/dream.SharedDreamProvider.tsx
- useSharedDream — components/shared-dream/dream.SharedDreamProvider.tsx
- GET — app/api/shared-dream/sessions/[id]/route.ts
- PATCH — app/api/shared-dream/sessions/[id]/route.ts
- GET — app/api/shared-dream/sessions/route.ts
- POST — app/api/shared-dream/sessions/route.ts
- SharedDreamRuntimeProps — components/shared-dream/dream.SharedDreamRuntime.tsx
- default export — dream.SharedDreamRuntime (components/shared-dream/dream.SharedDreamRuntime.tsx)
- SharedDreamMember — engine/sharedDream/useSharedDreamSession.ts
- SharedDreamActivityEntry — engine/sharedDream/useSharedDreamSession.ts
- UseSharedDreamSessionOptions — engine/sharedDream/useSharedDreamSession.ts

Import/export connections:
- engine/collaboration/index
- supabase/client/client
- react
- supabase/client/safeGetUser
- supabase/server/serverClient
- @supabase/supabase-js
- next/server
- zod
- engine/runtime/dualRuntimeBridge
- engine/sharedDream/useSharedDreamSession
- ./dream.InviteFlow
- ./dream.SharedDreamCanvas
- ./dream.SharedDreamProvider
- hooks/useSharedDream

### Matched Files

Primary files:
- `supabase/migrations/20260516000300_shared_dream_sessions.sql` — 134 lines — score 189 — primary path, supporting path
- `components/shared-dream/dream.SharedDreamProvider.tsx` — 259 lines — score 172 — primary path, path keyword: shared dream
- `app/api/shared-dream/sessions/[id]/route.ts` — 134 lines — score 166 — primary path, path keyword: shared dream
- `app/api/shared-dream/sessions/route.ts` — 92 lines — score 166 — primary path, path keyword: shared dream
- `components/shared-dream/dream.SharedDreamRuntime.tsx` — 422 lines — score 164 — primary path, path keyword: shared dream
- `engine/sharedDream/useSharedDreamSession.ts` — 328 lines — score 164 — primary path, path keyword: sharedDream
- `components/dreams/dream.shell.SharedDreamShell.tsx` — 402 lines — score 160 — primary path, path keyword: sharedDream
- `components/shared-dream/dream.SharedDreamCanvas.tsx` — 83 lines — score 156 — primary path, path keyword: shared dream
- `hooks/useSharedDream.ts` — 270 lines — score 152 — primary path, path keyword: sharedDream
- `engine/sharedDream.ts` — 168 lines — score 152 — primary path, path keyword: sharedDream
- `components/shared-dream/index.ts` — 22 lines — score 144 — primary path, path keyword: shared dream
- `components/shared-dream/dream.InviteFlow.tsx` — 134 lines — score 136 — primary path, path keyword: shared dream
- `app/api/dreams/feed/route.ts` — 152 lines — score 110 — primary path
- `app/api/dreams/instances/route.ts` — 113 lines — score 110 — primary path
- `app/api/dreams/transfer/route.ts` — 65 lines — score 110 — primary path
- `daydreams/shared/useDaydreamPersistence.ts` — 147 lines — score 108 — primary path
- `daydreams/shared/useDaydreamState.ts` — 93 lines — score 100 — primary path
- `engine/runtime/useSharedEnginChannel.ts` — 163 lines — score 69 — supporting path
- `supabase/migrations/20260322000000_phase8b_dream_windows.sql` — 239 lines — score 53 — supporting path
- `supabase/migrations/20260325000000_phase8f_daydream_network.sql` — 113 lines — score 53 — supporting path
- `engine/collaboration/index.ts` — 815 lines — score 52 — path keyword: collaboration
- `supabase/migrations/20260405000001_dreamr_feed_registry.sql` — 149 lines — score 45 — supporting path
- `supabase/migrations/20260417000000_repurpose_nods_as_dream_docs.sql` — 133 lines — score 45 — supporting path
- `supabase/migrations/20260426000100_rename_widgets_to_dreams.sql` — 110 lines — score 45 — supporting path
- `supabase/migrations/20260516000100_dreamr_tally.sql` — 58 lines — score 45 — supporting path
- `supabase/migrations/20260310000010_dreamdm_bar_pass2.sql` — 57 lines — score 45 — supporting path
- `supabase/migrations/20260417000001_dream_docs_search_rpc.sql` — 49 lines — score 45 — supporting path
- `supabase/migrations/20260310000002_profile_dream_widgets.sql` — 9 lines — score 45 — supporting path
- `app/api/agent/session/route.ts` — 115 lines — score 38 — path keyword: session
- `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` — 456 lines — score 28 — path keyword: session
- `engine/intelligence/sessionContinuity.ts` — 331 lines — score 28 — path keyword: session
- `engine/intelligence/sessionPatternEngine.ts` — 325 lines — score 28 — path keyword: session
- `engine/intelligence/useSessionIntelligence.ts` — 233 lines — score 28 — path keyword: session
- `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts` — 79 lines — score 28 — path keyword: session

Supporting files:
- `supabase/migrations/20260516000000_agent_sessions_forge_rate_limits.sql` — 41 lines — score 28 — path keyword: session
- `engins/gameengin/brain/fun-heuristics/session-loop.json` — 35 lines — score 28 — path keyword: session
- `engins/gameengin/brain/rd-sessions/README.md` — 7 lines — score 28 — path keyword: session
- `app/daydream/code/page.tsx` — 1118 lines — score 10
- `app/daydream/lab/page.tsx` — 1062 lines — score 10
- `app/api/forge/build/route.ts` — 923 lines — score 10
- `app/settings/appearance/page.tsx` — 750 lines — score 10
- `app/edit-profiledream/page.tsx` — 561 lines — score 10
- `app/lab/[id]/codespace/page.tsx` — 399 lines — score 10
- `app/about/page.tsx` — 378 lines — score 10
- `app/login/page.tsx` — 377 lines — score 10
- `app/join/page.tsx` — 374 lines — score 10
- `app/policy/page.tsx` — 373 lines — score 10
- `app/discover/page.tsx` — 370 lines — score 10
- `app/daydream/games/page.tsx` — 365 lines — score 10
- `app/view-profile/page.tsx` — 365 lines — score 10
- `app/api/connectors/webhooks/[provider]/route.ts` — 360 lines — score 10
- `app/daydream/forge/page.tsx` — 348 lines — score 10
- `app/api/messages/route.ts` — 342 lines — score 10
- `app/(internal)/idari-console/page.tsx` — 309 lines — score 10
- `app/api/ai/idari/route.ts` — 309 lines — score 10
- `app/api/content/intelligence/route.ts` — 309 lines — score 10
- `app/api/dream-windows/[id]/route.ts` — 300 lines — score 10
- `app/api/content/voice-clone/route.ts` — 292 lines — score 10
- `app/api/social/rss-feed/route.ts` — 277 lines — score 10
- `app/marketplace/sell/page.tsx` — 270 lines — score 10
- `app/ads/page.tsx` — 267 lines — score 10
- `app/api/ai/boogieman/child-safety/route.ts` — 264 lines — score 10
- `app/lab/[id]/page.tsx` — 259 lines — score 10
- `app/settings/security/page.tsx` — 254 lines — score 10
## 8. DreamR — Human Media

### Plain English
DreamR is the human media layer: feed, discovery, profile, posts, creator identity, and the browsing surfaces where Dreams become media instead of private project files.

### What users experience
Users experience DreamR as the social/media side of DREAMengin: scrolling, viewing people, opening Dreams, editing identity, and discovering what others make.

### Repo Evidence
Matched focused repo evidence: 80 files, about 22,284 readable source lines.

Behavior signals:
- auth — 51 file hits
- commerce — 41 file hits
- persistence — 35 file hits
- mobile touch — 32 file hits
- state — 30 file hits
- rendering — 21 file hits
- runtime — 17 file hits
- events — 17 file hits

Routes and APIs:
- GET /api/dreamr/feed ← app/api/dreamr/feed/route.ts
- /dreamr ← app/dreamr/page.tsx
- GET /api/dreamr/suggested ← app/api/dreamr/suggested/route.ts
- POST /api/dreamr/tally ← app/api/dreamr/tally/route.ts
- /profile/[handle] ← app/profile/[handle]/page.tsx
- /edit-profiledream ← app/edit-profiledream/page.tsx
- /view-profile ← app/view-profile/page.tsx
- /profile ← app/profile/page.tsx
- GET /api/feed ← app/api/feed/route.ts
- GET /api/social/rss-feed ← app/api/social/rss-feed/route.ts
- GET /api/embed-feed ← app/api/embed-feed/route.ts
- GET /api/posts/profile/[userId] ← app/api/posts/profile/[userId]/route.ts
- GET|POST /api/settings/feed ← app/api/settings/feed/route.ts
- GET|PUT /api/profile ← app/api/profile/route.ts
- GET|POST /api/dreams/feed ← app/api/dreams/feed/route.ts
- GET /api/youtube/live-feed ← app/api/youtube/live-feed/route.ts

Components:
- DR — dreamr/components/dreamrfeed.tsx
- DWELL_VIEW_THRESHOLD_MS — dreamr/components/dreamrfeed.tsx
- REDISTRIBUTION_NOTICE_DURATION_MS — dreamr/components/dreamrfeed.tsx
- RIGHT_SWIPE_SCROLL_BUFFER_CARDS — dreamr/components/dreamrfeed.tsx
- REDISTRIBUTION_EXPLANATION — dreamr/components/dreamrfeed.tsx
- DREAMR_TOPICS — dreamr/components/dreamrfeed.tsx
- ActionBtn — dreamr/components/dreamrfeed.tsx
- VideoPostCard — dreamr/components/dreamrfeed.tsx
- PostCard — dreamr/components/dreamrfeed.tsx
- CAPTION_LIMIT — dreamr/components/dreamrfeed.tsx
- SuggestedContentCard — dreamr/components/dreamrfeed.tsx
- SuggestedCreatorCard — dreamr/components/dreamrfeed.tsx
- DreamRFeed — dreamr/components/dreamrfeed.tsx
- DR — components/dreamr/dream.panel.DreamRCreatorPanel.tsx

Hooks:
- useDreamSystem — dreamr/components/dreamrfeed.tsx
- useLiveFeed — dreamr/components/dreamrfeed.tsx
- useCallback — dreamr/components/dreamrfeed.tsx
- useEffect — dreamr/components/dreamrfeed.tsx
- useMemo — dreamr/components/dreamrfeed.tsx
- useRef — dreamr/components/dreamrfeed.tsx
- useState — dreamr/components/dreamrfeed.tsx
- useLiveFeed — components/dreamr/dream.panel.DreamRCreatorPanel.tsx
- useEffect — components/dreamr/dream.panel.DreamRCreatorPanel.tsx
- useRef — components/dreamr/dream.panel.DreamRCreatorPanel.tsx
- useState — components/dreamr/dream.panel.DreamRCreatorPanel.tsx
- useCallback — dreamr/feed/useLiveFeed.ts
- useEffect — dreamr/feed/useLiveFeed.ts
- useRef — dreamr/feed/useLiveFeed.ts

Exports that define public behavior:
- DREAMR_TOPICS — dreamr/components/dreamrfeed.tsx
- default export — dreamrfeed (dreamr/components/dreamrfeed.tsx)
- default export — dream.panel.DreamRCreatorPanel (components/dreamr/dream.panel.DreamRCreatorPanel.tsx)
- GET — app/api/dreamr/feed/route.ts
- FeedPost — dreamr/feed/useLiveFeed.ts
- UseLiveFeedReturn — dreamr/feed/useLiveFeed.ts
- useLiveFeed — dreamr/feed/useLiveFeed.ts
- metadata — app/dreamr/page.tsx
- default export — page (app/dreamr/page.tsx)
- UseYouTubeLiveFeedReturn — dreamr/feed/useYouTubeLiveFeed.ts
- useYouTubeLiveFeed — dreamr/feed/useYouTubeLiveFeed.ts
- dreamrFeedHandler — app/dreamdmbar/_components/dreamr/api/feedHandler.ts
- GET — app/api/dreamr/suggested/route.ts
- default export — dreamsurface.dreamr (app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx)

Import/export connections:
- components/dreamr/dream.panel.DreamRChannelPanel
- components/dreamr/dream.panel.DreamRCreatorPanel
- dreamdmbar/runtime/DreamSystemContext
- dreamr/runtime/swipePersonalization
- dreamr/runtime/torridityLedger
- dreamr/feed/useLiveFeed
- types/connector
- lucide-react
- next/image
- react
- next/link
- app/dreamdmbar/_components/dreamr/api/feedHandler
- engine/io
- engins/contentengin/media/postMedia

### Matched Files

Primary files:
- `dreamr/components/dreamrfeed.tsx` — 1233 lines — score 180 — primary path, path keyword: dreamr
- `components/dreamr/dream.panel.DreamRCreatorPanel.tsx` — 689 lines — score 180 — primary path, path keyword: dreamr
- `app/api/dreamr/feed/route.ts` — 50 lines — score 174 — primary path, path keyword: dreamr
- `dreamr/feed/useLiveFeed.ts` — 301 lines — score 172 — primary path, path keyword: dreamr
- `app/dreamr/page.tsx` — 81 lines — score 170 — primary path, path keyword: dreamr
- `dreamr/feed/useYouTubeLiveFeed.ts` — 222 lines — score 164 — primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/api/feedHandler.ts` — 115 lines — score 164 — primary path, path keyword: dreamr
- `app/api/dreamr/suggested/route.ts` — 235 lines — score 162 — primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx` — 2006 lines — score 160 — primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx` — 159 lines — score 156 — primary path, path keyword: dreamr
- `dreamr/social-feed.ts` — 115 lines — score 156 — primary path, path keyword: dreamr
- `dreamr/feeds/embedFeedLoader.ts` — 108 lines — score 156 — primary path, path keyword: dreamr
- `dreamr/runtime/feedCursor.ts` — 88 lines — score 156 — primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts` — 350 lines — score 152 — primary path, path keyword: dreamr
- `components/dreamr/dream.panel.DreamRChannelPanel.tsx` — 323 lines — score 152 — primary path, path keyword: dreamr
- `dreamr/runtime/swipePersonalization.ts` — 144 lines — score 152 — primary path, path keyword: dreamr
- `dreamr/feed/hashtags.ts` — 167 lines — score 148 — primary path, path keyword: dreamr
- `dreamr/feed/feedTopics.ts` — 80 lines — score 148 — primary path, path keyword: dreamr
- `app/api/dreamr/tally/route.ts` — 97 lines — score 138 — primary path, path keyword: dreamr
- `dreamr/activity/visibility-score.ts` — 234 lines — score 136 — primary path, path keyword: dreamr
- `dreamr/runtime/swipeCalibration.ts` — 115 lines — score 136 — primary path, path keyword: dreamr
- `dreamr/runtime/closeFriendsVisibility.ts` — 100 lines — score 136 — primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/api/route.ts` — 3 lines — score 136 — primary path, path keyword: dreamr
- `dreamr/activity/types.ts` — 345 lines — score 128 — primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts` — 260 lines — score 128 — primary path, path keyword: dreamr
- `components/dreamr/dream.CloseFriendsSettings.tsx` — 250 lines — score 128 — primary path, path keyword: dreamr
- `dreamr/bot-detection/index.ts` — 198 lines — score 128 — primary path, path keyword: dreamr
- `dreamr/runtime/socialHumanityScore.ts` — 191 lines — score 128 — primary path, path keyword: dreamr
- `dreamr/runtime/torridityLedger.ts` — 186 lines — score 128 — primary path, path keyword: dreamr
- `dreamr/activity/scoring.ts` — 174 lines — score 128 — primary path, path keyword: dreamr
- `dreamr/torridity.ts` — 163 lines — score 128 — primary path, path keyword: dreamr
- `dreamr/torridity/physics.ts` — 118 lines — score 128 — primary path, path keyword: dreamr
- `dreamr/activity/boogieActivityPolicy.ts` — 62 lines — score 128 — primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx` — 55 lines — score 128 — primary path, path keyword: dreamr

Supporting files:
- `dreamr/activity/revenueSplit.ts` — 48 lines — score 128 — primary path, path keyword: dreamr
- `dreamr/torridity/constants.ts` — 20 lines — score 128 — primary path, path keyword: dreamr
- `dreamr/torridity/index.ts` — 12 lines — score 128 — primary path, path keyword: dreamr
- `dreamr/botDetection.ts` — 293 lines — score 120 — primary path, path keyword: dreamr
- `dreamr/bot-detection/swipe-physics.ts` — 230 lines — score 120 — primary path, path keyword: dreamr
- `dreamr/activity/aqs.ts` — 191 lines — score 120 — primary path, path keyword: dreamr
- `dreamr/bot-detection/detector.ts` — 152 lines — score 120 — primary path, path keyword: dreamr
- `dreamr/bot-detection/view-tally.ts` — 86 lines — score 120 — primary path, path keyword: dreamr
- `dreamr/activity/skipCredits.ts` — 36 lines — score 120 — primary path, path keyword: dreamr
- `app/profile/[handle]/page.tsx` — 252 lines — score 91 — supporting path, path keyword: profile
- `app/edit-profiledream/page.tsx` — 561 lines — score 83 — supporting path, path keyword: profile
- `app/view-profile/page.tsx` — 365 lines — score 83 — supporting path, path keyword: profile
- `app/profile/page.tsx` — 18 lines — score 83 — supporting path, path keyword: profile
- `supabase/migrations/20260405000001_dreamr_feed_registry.sql` — 149 lines — score 64 — path keyword: dreamr, path keyword: feed
- `app/api/feed/route.ts` — 230 lines — score 54 — path keyword: feed
- `app/dreamdmbar/_components/HomeDreamRegion.tsx` — 460 lines — score 52 — path keyword: dreamr
- `app/api/social/rss-feed/route.ts` — 277 lines — score 46 — path keyword: feed
- `app/api/embed-feed/route.ts` — 99 lines — score 46 — path keyword: feed
- `app/api/posts/profile/[userId]/route.ts` — 89 lines — score 46 — path keyword: profile
- `app/api/settings/feed/route.ts` — 89 lines — score 46 — path keyword: feed
- `components/dream.HomeFeed.tsx` — 1329 lines — score 44 — path keyword: feed
- `components/feed/dream.AlgorithmEngine.tsx` — 598 lines — score 44 — path keyword: feed
- `engine/social/rss-feed.ts` — 503 lines — score 44 — path keyword: feed
- `components/feed/dream.FeedVideoCard.tsx` — 494 lines — score 44 — path keyword: feed
- `components/dream.FeedCard.tsx` — 469 lines — score 44 — path keyword: feed
- `agents/humanAI/personas/creator.md` — 75 lines — score 44 — path keyword: creator
- `app/api/profile/route.ts` — 167 lines — score 38 — path keyword: profile
- `app/api/dreams/feed/route.ts` — 152 lines — score 38 — path keyword: feed
- `app/api/youtube/live-feed/route.ts` — 99 lines — score 38 — path keyword: feed
- `app/feed-settings/page.tsx` — 19 lines — score 38 — path keyword: feed
## 9. The Shop

### Plain English
The Shop is the owned storefront area for a user or creator. It covers products, services, offers, carts, and purchase-related surfaces tied to a person or brand.

### What users experience
Users feel this as a creator storefront: things to buy, services to offer, and commercial parts attached to the creator identity.

### Repo Evidence
Matched focused repo evidence: 45 files, about 15,126 readable source lines.

Behavior signals:
- auth — 42 file hits
- commerce — 41 file hits
- persistence — 38 file hits
- mobile touch — 20 file hits
- state — 18 file hits
- events — 17 file hits
- rendering — 13 file hits
- runtime — 6 file hits

Routes and APIs:
- GET|POST|PUT|DELETE /api/shop ← app/api/shop/route.ts
- /shop ← app/shop/page.tsx
- /shop/sell ← app/shop/sell/page.tsx
- /daydream/code ← app/daydream/code/page.tsx
- /daydream/lab ← app/daydream/lab/page.tsx
- POST /api/forge/build ← app/api/forge/build/route.ts
- /settings/appearance ← app/settings/appearance/page.tsx
- /edit-profiledream ← app/edit-profiledream/page.tsx
- /lab/[id]/codespace ← app/lab/[id]/codespace/page.tsx
- /about ← app/about/page.tsx
- /login ← app/login/page.tsx
- /join ← app/join/page.tsx
- /policy ← app/policy/page.tsx
- /discover ← app/discover/page.tsx
- /daydream/games ← app/daydream/games/page.tsx
- /view-profile ← app/view-profile/page.tsx

Components:
- ShopPage — app/shop/page.tsx
- SellItemPage — app/shop/sell/page.tsx
- CATEGORY_EMOJI — components/marketplace/dream.MarketplaceListingCard.tsx
- MarketplaceListingCard — components/marketplace/dream.MarketplaceListingCard.tsx
- WIDGETS — app/daydream/code/page.tsx
- CodeDaydreamPage — app/daydream/code/page.tsx
- LabEngin — app/daydream/lab/page.tsx
- WIDGETS — app/daydream/lab/page.tsx
- LabDaydreamPage — app/daydream/lab/page.tsx
- VoidThemeSection — app/settings/appearance/page.tsx
- GradientThemePicker — app/settings/appearance/page.tsx
- Slider — app/settings/appearance/page.tsx
- PresetCard — app/settings/appearance/page.tsx
- BgImageSection — app/settings/appearance/page.tsx

Hooks:
- useRouter — app/shop/sell/page.tsx
- useState — app/shop/sell/page.tsx
- useSimulation — app/api/forge/build/route.ts
- useTheme — app/settings/appearance/page.tsx
- useCustomizeMode — app/settings/appearance/page.tsx
- useCallback — app/settings/appearance/page.tsx
- useEffect — app/settings/appearance/page.tsx
- useRef — app/settings/appearance/page.tsx
- useState — app/settings/appearance/page.tsx
- useRouter — app/edit-profiledream/page.tsx
- useCallback — app/edit-profiledream/page.tsx
- useEffect — app/edit-profiledream/page.tsx
- useRef — app/edit-profiledream/page.tsx
- useState — app/edit-profiledream/page.tsx

Exports that define public behavior:
- SHOP_TABLE — engine/shop/listings.ts
- SHOP_LISTING_REQUIRED_FIELDS — engine/shop/listings.ts
- SHOP_TITLE_MAX_LENGTH — engine/shop/listings.ts
- SHOP_PRICE_MIN — engine/shop/listings.ts
- ShopListingInput — engine/shop/listings.ts
- ShopListingRecord — engine/shop/listings.ts
- ValidationResult — engine/shop/listings.ts
- validateShopListing — engine/shop/listings.ts
- normalizeShopListing — engine/shop/listings.ts
- SHOP_ORDERS_TABLE — engine/shop/listings.ts
- SHOP_ORDERS_PRIVATE_FIELDS — engine/shop/listings.ts
- isOrderOwner — engine/shop/listings.ts
- GET — app/api/shop/route.ts
- POST — app/api/shop/route.ts

Import/export connections:
- engine/shop/listings
- supabase/server/serverClient
- supabase/client/safeGetUser
- types/supabase
- @supabase/supabase-js
- next/server
- utils/index
- components/ui/dream.DreamWord
- lucide-react
- next/link
- next/navigation
- supabase/client/client
- next/image
- react

### Matched Files

Primary files:
- `engine/shop/listings.ts` — 124 lines — score 164 — primary path, path keyword: shop
- `app/api/shop/route.ts` — 181 lines — score 154 — primary path, path keyword: shop
- `app/shop/page.tsx` — 130 lines — score 154 — primary path, path keyword: shop
- `app/shop/sell/page.tsx` — 201 lines — score 146 — primary path, path keyword: shop
- `supabase/migrations/20260324000001_phase8e_shop_marketplace.sql` — 186 lines — score 144 — primary path, path keyword: shop
- `engine/marketplace/listings.ts` — 154 lines — score 44 — path keyword: listing
- `components/marketplace/dream.MarketplaceListingCard.tsx` — 78 lines — score 28 — path keyword: listing
- `app/daydream/code/page.tsx` — 1118 lines — score 10
- `app/daydream/lab/page.tsx` — 1062 lines — score 10
- `app/api/forge/build/route.ts` — 923 lines — score 10
- `app/settings/appearance/page.tsx` — 750 lines — score 10
- `app/edit-profiledream/page.tsx` — 561 lines — score 10
- `app/lab/[id]/codespace/page.tsx` — 399 lines — score 10
- `app/about/page.tsx` — 378 lines — score 10
- `app/login/page.tsx` — 377 lines — score 10
- `app/join/page.tsx` — 374 lines — score 10
- `app/policy/page.tsx` — 373 lines — score 10
- `app/discover/page.tsx` — 370 lines — score 10
- `app/daydream/games/page.tsx` — 365 lines — score 10
- `app/view-profile/page.tsx` — 365 lines — score 10
- `app/api/connectors/webhooks/[provider]/route.ts` — 360 lines — score 10
- `app/daydream/forge/page.tsx` — 348 lines — score 10
- `app/api/messages/route.ts` — 342 lines — score 10
- `app/(internal)/idari-console/page.tsx` — 309 lines — score 10
- `app/api/ai/idari/route.ts` — 309 lines — score 10
- `app/api/content/intelligence/route.ts` — 309 lines — score 10
- `app/api/dream-windows/[id]/route.ts` — 300 lines — score 10
- `app/api/content/voice-clone/route.ts` — 292 lines — score 10
- `app/api/social/rss-feed/route.ts` — 277 lines — score 10
- `app/marketplace/sell/page.tsx` — 270 lines — score 10
- `app/ads/page.tsx` — 267 lines — score 10
- `app/api/ai/boogieman/child-safety/route.ts` — 264 lines — score 10
- `app/lab/[id]/page.tsx` — 259 lines — score 10
- `app/settings/security/page.tsx` — 254 lines — score 10

Supporting files:
- `app/api/ai/execute/route.ts` — 252 lines — score 10
- `app/profile/[handle]/page.tsx` — 252 lines — score 10
- `app/api/dreamr/suggested/route.ts` — 235 lines — score 10
- `app/lab/page.tsx` — 235 lines — score 10
- `app/api/posts/route.ts` — 232 lines — score 10
- `app/api/feed/route.ts` — 230 lines — score 10
- `app/lab/new/page.tsx` — 220 lines — score 10
- `app/auth/update-password/page.tsx` — 212 lines — score 10
- `app/daydream/music/upload/page.tsx` — 210 lines — score 10
- `app/onboarding/page.tsx` — 210 lines — score 10
- `app/api/comments/route.ts` — 209 lines — score 10
## 10. The Marketplace

### Plain English
The Marketplace is the broader exchange area where listings, selling pages, catalogs, vendors, or public offerings live beyond one personal shop.

### What users experience
Users experience this as the public commercial side of the ecosystem: browsing, listing, buying, selling, and moving between creator shops and wider discovery.

### Repo Evidence
Matched focused repo evidence: 45 files, about 14,633 readable source lines.

Behavior signals:
- commerce — 41 file hits
- auth — 39 file hits
- persistence — 36 file hits
- mobile touch — 19 file hits
- state — 17 file hits
- rendering — 15 file hits
- events — 14 file hits
- runtime — 7 file hits

Routes and APIs:
- /marketplace/sell ← app/marketplace/sell/page.tsx
- /marketplace/[id] ← app/marketplace/[id]/page.tsx
- GET|POST /api/marketplace ← app/api/marketplace/route.ts
- /marketplace ← app/marketplace/page.tsx
- POST /api/marketplace/request ← app/api/marketplace/request/route.ts
- /daydream/code ← app/daydream/code/page.tsx
- /daydream/lab ← app/daydream/lab/page.tsx
- POST /api/forge/build ← app/api/forge/build/route.ts
- /settings/appearance ← app/settings/appearance/page.tsx
- /edit-profiledream ← app/edit-profiledream/page.tsx
- /lab/[id]/codespace ← app/lab/[id]/codespace/page.tsx
- /about ← app/about/page.tsx
- /login ← app/login/page.tsx
- /join ← app/join/page.tsx
- /policy ← app/policy/page.tsx
- /discover ← app/discover/page.tsx

Components:
- CATEGORIES — app/marketplace/sell/page.tsx
- MarketplaceSellPage — app/marketplace/sell/page.tsx
- CATEGORY_EMOJI — app/marketplace/[id]/page.tsx
- MarketplaceItemPage — app/marketplace/[id]/page.tsx
- FALLBACK_CATEGORIES — app/marketplace/page.tsx
- MarketplacePage — app/marketplace/page.tsx
- MarketplaceRequestButton — components/marketplace/dream.MarketplaceRequestButton.tsx
- CATEGORY_EMOJI — components/marketplace/dream.MarketplaceListingCard.tsx
- MarketplaceListingCard — components/marketplace/dream.MarketplaceListingCard.tsx
- FALLBACK_CATEGORIES — components/panels/dream.panel.MarketplacePanel.tsx
- MarketplacePanel — components/panels/dream.panel.MarketplacePanel.tsx
- WIDGETS — app/daydream/code/page.tsx
- CodeDaydreamPage — app/daydream/code/page.tsx
- LabEngin — app/daydream/lab/page.tsx

Hooks:
- useRouter — app/marketplace/sell/page.tsx
- useEffect — app/marketplace/sell/page.tsx
- useState — app/marketplace/sell/page.tsx
- useState — components/marketplace/dream.MarketplaceRequestButton.tsx
- useDreamSystem — components/panels/dream.panel.MarketplacePanel.tsx
- useEffect — components/panels/dream.panel.MarketplacePanel.tsx
- useState — components/panels/dream.panel.MarketplacePanel.tsx
- useSimulation — app/api/forge/build/route.ts
- useTheme — app/settings/appearance/page.tsx
- useCustomizeMode — app/settings/appearance/page.tsx
- useCallback — app/settings/appearance/page.tsx
- useEffect — app/settings/appearance/page.tsx
- useRef — app/settings/appearance/page.tsx
- useState — app/settings/appearance/page.tsx

Exports that define public behavior:
- default export — page (app/marketplace/sell/page.tsx)
- default export — page (app/marketplace/[id]/page.tsx)
- GET — app/api/marketplace/route.ts
- POST — app/api/marketplace/route.ts
- metadata — app/marketplace/page.tsx
- default export — page (app/marketplace/page.tsx)
- POST — app/api/marketplace/request/route.ts
- MARKETPLACE_TABLE — engine/marketplace/listings.ts
- MARKETPLACE_CONTACT_TABLE — engine/marketplace/listings.ts
- VALID_MARKETPLACE_CATEGORIES — engine/marketplace/listings.ts
- MarketplaceCategory — engine/marketplace/listings.ts
- MARKETPLACE_TITLE_MAX — engine/marketplace/listings.ts
- MARKETPLACE_TAGS_MAX — engine/marketplace/listings.ts
- MARKETPLACE_TAG_MAX_LENGTH — engine/marketplace/listings.ts

Import/export connections:
- supabase/client/client
- supabase/client/safeGetUser
- lucide-react
- next/link
- next/navigation
- react
- utils/index
- components/marketplace/dream.MarketplaceRequestButton
- components/ui/dream.DreamWord
- supabase/server/serverClient
- @supabase/supabase-js
- next/server
- components/marketplace/dream.MarketplaceListingCard
- components/ui/dream.AuthenticatedPageHeader

### Matched Files

Primary files:
- `app/marketplace/sell/page.tsx` — 270 lines — score 138 — primary path, path keyword: marketplace
- `app/marketplace/[id]/page.tsx` — 205 lines — score 138 — primary path, path keyword: marketplace
- `app/api/marketplace/route.ts` — 142 lines — score 138 — primary path, path keyword: marketplace
- `app/marketplace/page.tsx` — 137 lines — score 138 — primary path, path keyword: marketplace
- `app/api/marketplace/request/route.ts` — 90 lines — score 138 — primary path, path keyword: marketplace
- `engine/marketplace/listings.ts` — 154 lines — score 136 — primary path, path keyword: marketplace
- `engine/marketplace/request.ts` — 88 lines — score 136 — primary path, path keyword: marketplace
- `supabase/migrations/20260324000001_phase8e_shop_marketplace.sql` — 186 lines — score 128 — primary path, path keyword: marketplace
- `components/marketplace/dream.MarketplaceRequestButton.tsx` — 132 lines — score 128 — primary path, path keyword: marketplace
- `components/marketplace/dream.MarketplaceListingCard.tsx` — 78 lines — score 128 — primary path, path keyword: marketplace
- `types/marketplace.ts` — 51 lines — score 128 — primary path, path keyword: marketplace
- `components/panels/dream.panel.MarketplacePanel.tsx` — 139 lines — score 73 — supporting path, path keyword: marketplace
- `app/daydream/code/page.tsx` — 1118 lines — score 10
- `app/daydream/lab/page.tsx` — 1062 lines — score 10
- `app/api/forge/build/route.ts` — 923 lines — score 10
- `app/settings/appearance/page.tsx` — 750 lines — score 10
- `app/edit-profiledream/page.tsx` — 561 lines — score 10
- `app/lab/[id]/codespace/page.tsx` — 399 lines — score 10
- `app/about/page.tsx` — 378 lines — score 10
- `app/login/page.tsx` — 377 lines — score 10
- `app/join/page.tsx` — 374 lines — score 10
- `app/policy/page.tsx` — 373 lines — score 10
- `app/discover/page.tsx` — 370 lines — score 10
- `app/daydream/games/page.tsx` — 365 lines — score 10
- `app/view-profile/page.tsx` — 365 lines — score 10
- `app/api/connectors/webhooks/[provider]/route.ts` — 360 lines — score 10
- `app/daydream/forge/page.tsx` — 348 lines — score 10
- `app/api/messages/route.ts` — 342 lines — score 10
- `app/(internal)/idari-console/page.tsx` — 309 lines — score 10
- `app/api/ai/idari/route.ts` — 309 lines — score 10
- `app/api/content/intelligence/route.ts` — 309 lines — score 10
- `app/api/dream-windows/[id]/route.ts` — 300 lines — score 10
- `app/api/content/voice-clone/route.ts` — 292 lines — score 10
- `app/api/social/rss-feed/route.ts` — 277 lines — score 10

Supporting files:
- `app/ads/page.tsx` — 267 lines — score 10
- `app/api/ai/boogieman/child-safety/route.ts` — 264 lines — score 10
- `app/lab/[id]/page.tsx` — 259 lines — score 10
- `app/settings/security/page.tsx` — 254 lines — score 10
- `app/api/ai/execute/route.ts` — 252 lines — score 10
- `app/profile/[handle]/page.tsx` — 252 lines — score 10
- `app/api/dreamr/suggested/route.ts` — 235 lines — score 10
- `app/lab/page.tsx` — 235 lines — score 10
- `app/api/posts/route.ts` — 232 lines — score 10
- `app/api/feed/route.ts` — 230 lines — score 10
- `app/lab/new/page.tsx` — 220 lines — score 10
## 11. Ads & User Ads

### Plain English
Ads and User Ads cover promotion, sponsored inventory, campaign surfaces, impressions, clicks, targeting rules, and any app code that lets users or the platform promote content.

### What users experience
Users see this as promoted Dreams, user-created campaigns, ad slots, sponsor cards, or paid visibility controls.

### Repo Evidence
Matched focused repo evidence: 55 files, about 15,283 readable source lines.

Behavior signals:
- commerce — 34 file hits
- auth — 32 file hits
- persistence — 26 file hits
- state — 25 file hits
- rendering — 23 file hits
- mobile touch — 16 file hits
- runtime — 14 file hits
- events — 14 file hits

Routes and APIs:
- /ads ← app/ads/page.tsx
- /ads/create ← app/ads/create/page.tsx
- POST /api/ads/view ← app/api/ads/view/route.ts
- /ads/slot/[id] ← app/ads/slot/[id]/page.tsx
- POST /api/ads/orders ← app/api/ads/orders/route.ts
- /engines/brand/campaigns ← app/engines/brand/campaigns/page.tsx
- /daydream/music/upload ← app/daydream/music/upload/page.tsx
- POST /api/admin/code-files ← app/api/admin/code-files/route.ts
- GET|POST /api/admin/child-safety ← app/api/admin/child-safety/route.ts
- POST /api/admin/ai-chat ← app/api/admin/ai-chat/route.ts
- POST /api/upload ← app/api/upload/route.ts
- GET /api/admin/observability ← app/api/admin/observability/route.ts
- POST /api/codeengin/upload ← app/api/codeengin/upload/route.ts
- POST /api/admin/ai-request ← app/api/admin/ai-request/route.ts
- POST /api/contentengin/upload ← app/api/contentengin/upload/route.ts

Components:
- AdsPage — app/ads/page.tsx
- CreateAdSlotPage — app/ads/create/page.tsx
- AdSlotPage — app/ads/slot/[id]/page.tsx
- AdUnit — components/ads/dream.AdUnit.tsx
- SkipCreditBalance — components/ads/dream.SkipCreditBalance.tsx
- ACCENT — app/engines/brand/campaigns/page.tsx
- NAV_ITEMS — app/engines/brand/campaigns/page.tsx
- BrandCampaignsPage — app/engines/brand/campaigns/page.tsx
- INIT_CAMPAIGNS — components/engines/brand/panels/dream.panel.CampaignsPanel.tsx
- CampaignsPanel — components/engines/brand/panels/dream.panel.CampaignsPanel.tsx
- UploadMusicPage — app/daydream/music/upload/page.tsx
- GW — components/games/madmaxi/dream.MadmaxiGame.tsx
- GH — components/games/madmaxi/dream.MadmaxiGame.tsx
- GRAV — components/games/madmaxi/dream.MadmaxiGame.tsx

Hooks:
- useRouter — app/ads/create/page.tsx
- useState — app/ads/create/page.tsx
- useEffect — components/ads/dream.AdUnit.tsx
- useState — components/ads/dream.AdUnit.tsx
- useEffect — components/ads/dream.SkipCreditBalance.tsx
- useState — components/ads/dream.SkipCreditBalance.tsx
- useState — components/engines/brand/panels/dream.panel.CampaignsPanel.tsx
- useRouter — app/daydream/music/upload/page.tsx
- useState — app/daydream/music/upload/page.tsx
- useGameAutoStart — components/games/madmaxi/dream.MadmaxiGame.tsx
- useSubmitScore — components/games/madmaxi/dream.MadmaxiGame.tsx
- useImmersiveGameLayout — components/games/madmaxi/dream.MadmaxiGame.tsx
- useCallback — components/games/madmaxi/dream.MadmaxiGame.tsx
- useEffect — components/games/madmaxi/dream.MadmaxiGame.tsx

Exports that define public behavior:
- default export — page (app/ads/page.tsx)
- default export — page (app/ads/create/page.tsx)
- POST — app/api/ads/view/route.ts
- default export — page (app/ads/slot/[id]/page.tsx)
- POST — app/api/ads/orders/route.ts
- AdPlacement — types/ads.ts
- AdSlot — types/ads.ts
- ProfileLite — types/ads.ts
- AdListing — types/ads.ts
- AdOrder — types/ads.ts
- AdUnit — components/ads/dream.AdUnit.tsx
- SkipCreditBalance — components/ads/dream.SkipCreditBalance.tsx
- metadata — app/engines/brand/campaigns/page.tsx
- default export — page (app/engines/brand/campaigns/page.tsx)

Import/export connections:
- components/ui/dream.DreamWord
- supabase/server/serverClient
- supabase/client/safeGetUser
- types/ads
- @supabase/supabase-js
- lucide-react
- next/link
- next/navigation
- next/server
- supabase/client/client
- react
- utils/index
- dreamr/activity/aqs
- dreamr/activity/revenueSplit

### Matched Files

Primary files:
- `supabase/migrations/20260321000000_ads_platform_promotions.sql` — 38 lines — score 184 — primary path, path keyword: ad
- `app/ads/page.tsx` — 267 lines — score 174 — primary path, path keyword: ad
- `app/ads/create/page.tsx` — 203 lines — score 166 — primary path, path keyword: ad
- `app/api/ads/view/route.ts` — 192 lines — score 166 — primary path, path keyword: ad
- `app/ads/slot/[id]/page.tsx` — 139 lines — score 166 — primary path, path keyword: ad
- `app/api/ads/orders/route.ts` — 91 lines — score 166 — primary path, path keyword: ad
- `types/ads.ts` — 46 lines — score 164 — primary path, path keyword: ad
- `components/ads/dream.AdUnit.tsx` — 229 lines — score 156 — primary path, path keyword: ad
- `components/ads/dream.SkipCreditBalance.tsx` — 58 lines — score 156 — primary path, path keyword: ad
- `app/engines/brand/campaigns/page.tsx` — 31 lines — score 91 — supporting path, path keyword: campaign
- `components/engines/brand/panels/dream.panel.CampaignsPanel.tsx` — 213 lines — score 81 — supporting path, path keyword: campaign
- `app/daydream/music/upload/page.tsx` — 210 lines — score 38 — path keyword: ad
- `app/api/admin/code-files/route.ts` — 172 lines — score 38 — path keyword: ad
- `app/api/admin/child-safety/route.ts` — 146 lines — score 38 — path keyword: ad
- `app/api/admin/ai-chat/route.ts` — 137 lines — score 38 — path keyword: ad
- `app/api/upload/route.ts` — 121 lines — score 38 — path keyword: ad
- `app/api/admin/observability/route.ts` — 84 lines — score 38 — path keyword: ad
- `app/api/codeengin/upload/route.ts` — 51 lines — score 38 — path keyword: ad
- `app/api/admin/ai-request/route.ts` — 29 lines — score 38 — path keyword: ad
- `app/api/contentengin/upload/route.ts` — 3 lines — score 38 — path keyword: ad
- `components/games/madmaxi/dream.MadmaxiGame.tsx` — 3516 lines — score 36 — path keyword: ad
- `components/games/madmaxi/authoredZonePacks.ts` — 1171 lines — score 36 — path keyword: ad
- `engine/navigation/README.md` — 480 lines — score 36 — path keyword: ad
- `public/workers/engin-shader.worker.ts` — 350 lines — score 36 — path keyword: ad
- `components/webgpu/shaders.ts` — 330 lines — score 36 — path keyword: ad
- `dr-eams/ai/triad.ts` — 329 lines — score 36 — path keyword: ad
- `engins/gameengin/games/useGamepad.ts` — 313 lines — score 36 — path keyword: ad
- `supabase/migrations/20260129000000_upgrade_schema.sql` — 290 lines — score 36 — path keyword: ad
- `assembly/mad-maxi-player.ts` — 253 lines — score 36 — path keyword: ad
- `engine/vm/README.md` — 253 lines — score 36 — path keyword: ad
- `components/games/madmaxi/materials.ts` — 246 lines — score 36 — path keyword: ad
- `COOP_AND_SOLO_ROADMAP.md` — 120 lines — score 36 — path keyword: ad
- `dreamr/feeds/embedFeedLoader.ts` — 108 lines — score 36 — path keyword: ad
- `engine/runtime/madMaxiSnapshotBridge.ts` — 67 lines — score 36 — path keyword: ad

Supporting files:
- `engins/contentengin/upgradeMatrix.ts` — 40 lines — score 36 — path keyword: ad
- `engins/gameengin/brain/work-queue/README.md` — 13 lines — score 36 — path keyword: ad
- `engins/gameengin/brain-reader.ts` — 871 lines — score 28 — path keyword: ad
- `components/games/dream.MadMaxiWildfall.tsx` — 429 lines — score 28 — path keyword: ad
- `optimizer/README.md` — 381 lines — score 28 — path keyword: ad
- `engins/gameengin/games/madmaxi-wildfall-world.ts` — 319 lines — score 28 — path keyword: ad
- `engine/rendering/webgpu/adaptiveQuality.ts` — 273 lines — score 28 — path keyword: ad
- `engins/renderengin/advancedRendering.ts` — 267 lines — score 28 — path keyword: ad
- `supabase/migrations/20260307000000_readme_gaps.sql` — 233 lines — score 28 — path keyword: ad
- `components/games/madmaxi/audio.ts` — 224 lines — score 28 — path keyword: ad
- `components/games/madmaxi/vfx.ts` — 219 lines — score 28 — path keyword: ad
- `engine/engin-runtime/EnginIOAdapter.ts` — 214 lines — score 28 — path keyword: ad
- `engine/admin/upgrade-readiness.ts` — 211 lines — score 28 — path keyword: ad
- `components/games/madmaxi/levels.ts` — 210 lines — score 28 — path keyword: ad
- `components/connectors/dream.AddSliceSheet.tsx` — 183 lines — score 28 — path keyword: ad
- `components/gameengin/README.md` — 175 lines — score 28 — path keyword: ad
- `components/games/dream.Leaderboard.tsx` — 169 lines — score 28 — path keyword: ad
- `components/ui/dream.PlatformBadge.tsx` — 153 lines — score 28 — path keyword: ad
- `components/shaders/dream.LightningWing.tsx` — 143 lines — score 28 — path keyword: ad
- `components/shaders/dream.Refractor.tsx` — 136 lines — score 28 — path keyword: ad
- `components/games/madmaxi/config.ts` — 134 lines — score 28 — path keyword: ad
## 12. The DreamDmBar (dreamdmbar/)

### Plain English
The DreamDmBar is the communication, navigation, search, command, notification, and contextual action layer that should always be near the user.

### What users experience
Users feel it as the bar that lets them message, search, jump between modules, respond to context, open actions, and keep moving without hunting through pages.

### Repo Evidence
Matched focused repo evidence: 90 files, about 26,042 readable source lines.

Behavior signals:
- commerce — 63 file hits
- auth — 60 file hits
- persistence — 51 file hits
- mobile touch — 48 file hits
- state — 46 file hits
- rendering — 38 file hits
- runtime — 35 file hits
- events — 27 file hits

Routes and APIs:
- /dreamdmbar/dualruntime ← app/dreamdmbar/dualruntime/page.tsx
- /dreamdmbar/dreamspace ← app/dreamdmbar/dreamspace/page.tsx
- /dreamdmbar/homedream ← app/dreamdmbar/homedream/page.tsx
- /dreamdmbar ← app/dreamdmbar/page.tsx
- GET|POST /api/messages ← app/api/messages/route.ts
- /messages ← app/messages/page.tsx
- /messages/boards/[id] ← app/messages/boards/[id]/page.tsx
- /messages/boards ← app/messages/boards/page.tsx
- /messages/boards/new ← app/messages/boards/new/page.tsx
- POST /api/messages/boards ← app/api/messages/boards/route.ts
- /messages/new ← app/messages/new/page.tsx
- /settings/notifications ← app/settings/notifications/page.tsx
- GET|PUT|DELETE /api/notifications ← app/api/notifications/route.ts
- GET|POST /api/settings/notifications ← app/api/settings/notifications/route.ts
- /daydream/code ← app/daydream/code/page.tsx
- /daydream/lab ← app/daydream/lab/page.tsx

Components:
- BAR_H — dreamdmbar/dreamsurface.dreamdmbar.tsx
- TOP_H — dreamdmbar/dreamsurface.dreamdmbar.tsx
- NAV_H — dreamdmbar/dreamsurface.dreamdmbar.tsx
- GOLD_SZ — dreamdmbar/dreamsurface.dreamdmbar.tsx
- GOLD_MIN_H — dreamdmbar/dreamsurface.dreamdmbar.tsx
- SNAP_DOWN_PX — dreamdmbar/dreamsurface.dreamdmbar.tsx
- EXPAND_THRESHOLD — dreamdmbar/dreamsurface.dreamdmbar.tsx
- SPRING — dreamdmbar/dreamsurface.dreamdmbar.tsx
- ORB_DRAG_SLOP — dreamdmbar/dreamsurface.dreamdmbar.tsx
- SEAM_H — dreamdmbar/dreamsurface.dreamdmbar.tsx
- PARTICLE_D — dreamdmbar/dreamsurface.dreamdmbar.tsx
- SEAM_DRAG_SLOP — dreamdmbar/dreamsurface.dreamdmbar.tsx
- AvatarChip — dreamdmbar/dreamsurface.dreamdmbar.tsx
- ContextIcon — dreamdmbar/dreamsurface.dreamdmbar.tsx

Hooks:
- useCallback — dreamdmbar/hooks/useNotifications.ts
- useEffect — dreamdmbar/hooks/useNotifications.ts
- useRef — dreamdmbar/hooks/useNotifications.ts
- useState — dreamdmbar/hooks/useNotifications.ts
- useNotifications — dreamdmbar/hooks/useNotifications.ts
- useCallback — dreamdmbar/dreamsurface.dreamdmbar.tsx
- useEffect — dreamdmbar/dreamsurface.dreamdmbar.tsx
- useRef — dreamdmbar/dreamsurface.dreamdmbar.tsx
- useState — dreamdmbar/dreamsurface.dreamdmbar.tsx
- useDreamSystem — dreamdmbar/dreamsurface.dreamdmbar.tsx
- useDreamBarContext — dreamdmbar/dreamsurface.dreamdmbar.tsx
- useDreamDMConversations — dreamdmbar/dreamsurface.dreamdmbar.tsx
- useDreamDMDraft — dreamdmbar/dreamsurface.dreamdmbar.tsx
- useDreamDMMessages — dreamdmbar/dreamsurface.dreamdmbar.tsx

Exports that define public behavior:
- useNotifications — dreamdmbar/hooks/useNotifications.ts
- BAR_H — dreamdmbar/dreamsurface.dreamdmbar.tsx
- NAV_H — dreamdmbar/dreamsurface.dreamdmbar.tsx
- default export — dreamsurface.dreamdmbar (dreamdmbar/dreamsurface.dreamdmbar.tsx)
- default export — HomeDreamRegion (app/dreamdmbar/_components/HomeDreamRegion.tsx)
- DbNotificationContent — dreamdmbar/notifications/notificationHelpers.ts
- DbNotificationRow — dreamdmbar/notifications/notificationHelpers.ts
- UiNotificationType — dreamdmbar/notifications/notificationHelpers.ts
- UiNotification — dreamdmbar/notifications/notificationHelpers.ts
- mapNotificationType — dreamdmbar/notifications/notificationHelpers.ts
- getNotificationTitle — dreamdmbar/notifications/notificationHelpers.ts
- getNotificationActionUrl — dreamdmbar/notifications/notificationHelpers.ts
- extractNotificationMessage — dreamdmbar/notifications/notificationHelpers.ts
- normalizeDbRow — dreamdmbar/notifications/notificationHelpers.ts

Import/export connections:
- react
- lucide-react
- next/image
- components/ui/dream.DreamWord
- dreamdmbar/dream.GlowingLight
- dreamdmbar/runtime/barInteractions
- dreamdmbar/runtime/DreamSystemContext
- dreamdmbar/hooks/useDreamBarContext
- dreamdmbar/hooks/useDreamDMConversations
- dreamdmbar/hooks/useDreamDMDraft
- dreamdmbar/hooks/useDreamDMMessages
- dreamdmbar/hooks/useDreamSearch
- dreamdmbar/hooks/useMessagingCore
- dreamdmbar/notifications/useNotifications

### Matched Files

Primary files:
- `dreamdmbar/hooks/useNotifications.ts` — 97 lines — score 184 — primary path, path keyword: dreamdmbar
- `dreamdmbar/dreamsurface.dreamdmbar.tsx` — 3098 lines — score 172 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/HomeDreamRegion.tsx` — 460 lines — score 172 — primary path, path keyword: dreamdmbar
- `dreamdmbar/notifications/notificationHelpers.ts` — 266 lines — score 168 — primary path, path keyword: dreamdmbar
- `dreamdmbar/notifications/useNotifications.ts` — 172 lines — score 168 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/dualruntime/page.tsx` — 102 lines — score 166 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/dreamspace/page.tsx` — 19 lines — score 166 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/homedream/page.tsx` — 19 lines — score 166 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/page.tsx` — 11 lines — score 166 — primary path, path keyword: dreamdmbar
- `dreamdmbar/runtime/barInteractions.ts` — 533 lines — score 164 — primary path, path keyword: dreamdmbar
- `engine/generated/dreamdmbar.ts` — 22 lines — score 164 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx` — 2006 lines — score 156 — primary path, path keyword: dreamdmbar
- `dreamdmbar/runtime/DreamSystemContext.tsx` — 401 lines — score 156 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts` — 260 lines — score 156 — primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useDreamSearch.ts` — 233 lines — score 156 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/DreamBarDataBridge.tsx` — 196 lines — score 156 — primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useDreamBarContext.ts` — 185 lines — score 156 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/layout.tsx` — 184 lines — score 156 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/dreamr/api/feedHandler.ts` — 115 lines — score 156 — primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useModuleBarIntent.ts` — 87 lines — score 156 — primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useMessagingCore.ts` — 189 lines — score 148 — primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useDreamDMDraft.ts` — 176 lines — score 148 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx` — 159 lines — score 148 — primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useDreamDMMessages.ts` — 141 lines — score 148 — primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useDreamDMConversations.ts` — 123 lines — score 148 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/DreamSpaceRegion.tsx` — 459 lines — score 140 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts` — 350 lines — score 140 — primary path, path keyword: dreamdmbar
- `dreamdmbar/runtime/bridgeSeamFlow.ts` — 214 lines — score 140 — primary path, path keyword: dreamdmbar
- `dreamdmbar/dream.GlowingLight.tsx` — 103 lines — score 140 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx` — 55 lines — score 140 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/DreamWidgetGrid.tsx` — 33 lines — score 140 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/dreamr/api/route.ts` — 3 lines — score 140 — primary path, path keyword: dreamdmbar
- `components/panels/dream.panel.SettingsPanel.tsx` — 185 lines — score 116 — primary path
- `components/panels/dream.panel.AppearancePanel.tsx` — 166 lines — score 116 — primary path

Supporting files:
- `components/panels/dream.panel.PrivacyPanel.tsx` — 146 lines — score 116 — primary path
- `components/panels/dream.panel.DataPanel.tsx` — 139 lines — score 116 — primary path
- `components/panels/dream.panel.MarketplacePanel.tsx` — 139 lines — score 116 — primary path
- `components/panels/dream.panel.WidgetsPanel.tsx` — 108 lines — score 116 — primary path
- `components/panels/dream.panel.SafetyPanel.tsx` — 102 lines — score 116 — primary path
- `components/panels/dream.panel.ControlsPanel.tsx` — 90 lines — score 116 — primary path
- `components/panels/dream.panel.HelpPanel.tsx` — 71 lines — score 116 — primary path
- `components/panels/dream.panel.AlgorithmPanel.tsx` — 36 lines — score 116 — primary path
- `components/panels/dream.panel.ProfilePanel.tsx` — 338 lines — score 108 — primary path
- `components/panels/dream.panel.FeedSettingsPanel.tsx` — 192 lines — score 100 — primary path
- `components/panels/dream.panel.ConnectorsPanel.tsx` — 48 lines — score 100 — primary path
- `components/panels/dream.panel.FeedPanel.tsx` — 4 lines — score 100 — primary path
- `src/engin/generated/dreamdmbar.ts` — 22 lines — score 64 — path keyword: dreamdmbar, path keyword: bar
- `app/api/messages/route.ts` — 342 lines — score 63 — supporting path
- `app/messages/page.tsx` — 69 lines — score 63 — supporting path
- `app/messages/boards/[id]/page.tsx` — 178 lines — score 55 — supporting path
- `app/messages/boards/page.tsx` — 119 lines — score 55 — supporting path
- `app/messages/boards/new/page.tsx` — 110 lines — score 55 — supporting path
- `app/api/messages/boards/route.ts` — 92 lines — score 55 — supporting path
- `app/messages/new/page.tsx` — 86 lines — score 55 — supporting path
- `components/dream.CommandPalette.tsx` — 482 lines — score 44 — path keyword: command
- `components/dream.NotificationCenter.tsx` — 414 lines — score 44 — path keyword: notification
- `components/home/dream.bar.PersistentDreamBar.tsx` — 345 lines — score 44 — path keyword: bar
- `app/settings/notifications/page.tsx` — 207 lines — score 38 — path keyword: notification
- `app/api/notifications/route.ts` — 136 lines — score 38 — path keyword: notification
- `app/api/settings/notifications/route.ts` — 84 lines — score 38 — path keyword: notification
- `components/dreamengin/dream.bar.DrEamsSearchBar.tsx` — 502 lines — score 36 — path keyword: bar
- `components/home/dream.bar.GlobalDreamBar.tsx` — 100 lines — score 36 — path keyword: bar
- `supabase/migrations/20260310000010_dreamdm_bar_pass2.sql` — 57 lines — score 36 — path keyword: bar
- `components/customize/dream.bar.CustomizeToolbar.tsx` — 104 lines — score 28 — path keyword: bar
## 13. Messaging

### Plain English
Messaging is the direct communication layer: conversations, drafts, notifications, inbox behavior, message APIs, and hooks that keep communication alive across surfaces.

### What users experience
Users experience this when they send a message, receive a notification, open a conversation, keep a draft, or continue a thread from another surface.

### Repo Evidence
Matched focused repo evidence: 85 files, about 22,582 readable source lines.

Behavior signals:
- auth — 80 file hits
- persistence — 75 file hits
- commerce — 63 file hits
- state — 36 file hits
- events — 27 file hits
- mobile touch — 27 file hits
- rendering — 19 file hits
- runtime — 8 file hits

Routes and APIs:
- GET|POST /api/messages ← app/api/messages/route.ts
- PATCH|DELETE /api/drafts/[id] ← app/api/drafts/[id]/route.ts
- GET|POST /api/drafts ← app/api/drafts/route.ts
- /messages/new ← app/messages/new/page.tsx
- /messages ← app/messages/page.tsx
- /messages/boards/[id] ← app/messages/boards/[id]/page.tsx
- /messages/boards ← app/messages/boards/page.tsx
- /messages/boards/new ← app/messages/boards/new/page.tsx
- POST /api/messages/boards ← app/api/messages/boards/route.ts
- /settings/notifications ← app/settings/notifications/page.tsx
- GET|POST /api/settings/notifications ← app/api/settings/notifications/route.ts
- GET|PUT|DELETE /api/notifications ← app/api/notifications/route.ts
- /daydream/code ← app/daydream/code/page.tsx
- /daydream/lab ← app/daydream/lab/page.tsx
- POST /api/forge/build ← app/api/forge/build/route.ts
- /settings/appearance ← app/settings/appearance/page.tsx

Components:
- NewMessagePage — app/messages/new/page.tsx
- MessagesPage — app/messages/page.tsx
- BoardDetailPage — app/messages/boards/[id]/page.tsx
- BoardsPage — app/messages/boards/page.tsx
- NewBoardPage — app/messages/boards/new/page.tsx
- BoardComposer — components/messaging/dream.BoardComposer.tsx
- STORAGE_KEY — app/settings/notifications/page.tsx
- DEFAULT_SETTINGS — app/settings/notifications/page.tsx
- NotificationSettingsPage — app/settings/notifications/page.tsx
- MessageContent — components/dream.MessagesClient.tsx
- SUGGESTIONS_CLOSE_DELAY_MS — components/dream.MessagesClient.tsx
- MessagesClient — components/dream.MessagesClient.tsx
- NotifIcon — components/dream.NotificationCenter.tsx
- NotifRow — components/dream.NotificationCenter.tsx

Hooks:
- useCallback — dreamdmbar/hooks/useDreamDMDraft.ts
- useEffect — dreamdmbar/hooks/useDreamDMDraft.ts
- useRef — dreamdmbar/hooks/useDreamDMDraft.ts
- useState — dreamdmbar/hooks/useDreamDMDraft.ts
- useDreamDMDraft — dreamdmbar/hooks/useDreamDMDraft.ts
- useRouter — app/messages/boards/new/page.tsx
- useState — app/messages/boards/new/page.tsx
- useCallback — dreamdmbar/notifications/useNotifications.ts
- useEffect — dreamdmbar/notifications/useNotifications.ts
- useRef — dreamdmbar/notifications/useNotifications.ts
- useState — dreamdmbar/notifications/useNotifications.ts
- useNotifications — dreamdmbar/notifications/useNotifications.ts
- useCallback — dreamdmbar/hooks/useDreamDMMessages.ts
- useEffect — dreamdmbar/hooks/useDreamDMMessages.ts

Exports that define public behavior:
- GET — app/api/messages/route.ts
- POST — app/api/messages/route.ts
- DELETE — app/api/drafts/[id]/route.ts
- PATCH — app/api/drafts/[id]/route.ts
- GET — app/api/drafts/route.ts
- POST — app/api/drafts/route.ts
- default export — page (app/messages/new/page.tsx)
- default export — page (app/messages/page.tsx)
- DbNotificationContent — dreamdmbar/notifications/notificationHelpers.ts
- DbNotificationRow — dreamdmbar/notifications/notificationHelpers.ts
- UiNotificationType — dreamdmbar/notifications/notificationHelpers.ts
- UiNotification — dreamdmbar/notifications/notificationHelpers.ts
- mapNotificationType — dreamdmbar/notifications/notificationHelpers.ts
- getNotificationTitle — dreamdmbar/notifications/notificationHelpers.ts

Import/export connections:
- engine/safety/child-safety/childSafetyDetector
- engine/safety/child-safety/ncmecReporter
- engine/safety/child-safety/scanMediaUrls
- supabase/client/safeGetUser
- supabase/server/serverClient
- utils/index
- @supabase/supabase-js
- crypto
- next/server
- zod
- next/navigation
- components/dream.MessagesClient
- react
- components/messaging/dream.BoardComposer

### Matched Files

Primary files:
- `app/api/messages/route.ts` — 342 lines — score 162 — primary path, path keyword: message
- `supabase/migrations/20260307000001_conversations_messages.sql` — 80 lines — score 156 — primary path, path keyword: message
- `app/api/drafts/[id]/route.ts` — 133 lines — score 146 — primary path, path keyword: draft
- `app/api/drafts/route.ts` — 119 lines — score 146 — primary path, path keyword: draft
- `app/messages/new/page.tsx` — 86 lines — score 146 — primary path, path keyword: message
- `app/messages/page.tsx` — 69 lines — score 146 — primary path, path keyword: message
- `dreamdmbar/notifications/notificationHelpers.ts` — 266 lines — score 144 — primary path, path keyword: notification
- `dreamdmbar/hooks/useDreamDMDraft.ts` — 176 lines — score 144 — primary path, path keyword: draft
- `app/messages/boards/[id]/page.tsx` — 178 lines — score 138 — primary path, path keyword: message
- `app/messages/boards/page.tsx` — 119 lines — score 138 — primary path, path keyword: message
- `app/messages/boards/new/page.tsx` — 110 lines — score 138 — primary path, path keyword: message
- `app/api/messages/boards/route.ts` — 92 lines — score 138 — primary path, path keyword: message
- `dreamdmbar/notifications/useNotifications.ts` — 172 lines — score 136 — primary path, path keyword: notification
- `dreamdmbar/hooks/useDreamDMMessages.ts` — 141 lines — score 136 — primary path, path keyword: message
- `dreamdmbar/hooks/useDreamDMConversations.ts` — 123 lines — score 136 — primary path, path keyword: conversation
- `dreamdmbar/hooks/useMessagingCore.ts` — 189 lines — score 116 — primary path
- `components/messaging/dream.BoardComposer.tsx` — 89 lines — score 108 — primary path
- `app/settings/notifications/page.tsx` — 207 lines — score 91 — supporting path, path keyword: notification
- `app/api/settings/notifications/route.ts` — 84 lines — score 91 — supporting path, path keyword: notification
- `app/api/notifications/route.ts` — 136 lines — score 46 — path keyword: notification
- `components/dream.MessagesClient.tsx` — 837 lines — score 44 — path keyword: message
- `engine/safety/child-safety/messageContextChecker.ts` — 455 lines — score 36 — path keyword: message
- `components/dream.NotificationCenter.tsx` — 414 lines — score 36 — path keyword: notification
- `dreamdmbar/hooks/useNotifications.ts` — 97 lines — score 36 — path keyword: notification
- `supabase/migrations/20260315000000_content_drafts.sql` — 65 lines — score 36 — path keyword: draft
- `supabase/migrations/20260322000001_message_boards.sql` — 63 lines — score 28 — path keyword: message
- `app/daydream/code/page.tsx` — 1118 lines — score 10
- `app/daydream/lab/page.tsx` — 1062 lines — score 10
- `app/api/forge/build/route.ts` — 923 lines — score 10
- `app/settings/appearance/page.tsx` — 750 lines — score 10
- `app/edit-profiledream/page.tsx` — 561 lines — score 10
- `app/lab/[id]/codespace/page.tsx` — 399 lines — score 10
- `app/about/page.tsx` — 378 lines — score 10
- `app/login/page.tsx` — 377 lines — score 10

Supporting files:
- `app/join/page.tsx` — 374 lines — score 10
- `app/policy/page.tsx` — 373 lines — score 10
- `app/discover/page.tsx` — 370 lines — score 10
- `app/daydream/games/page.tsx` — 365 lines — score 10
- `app/view-profile/page.tsx` — 365 lines — score 10
- `app/api/connectors/webhooks/[provider]/route.ts` — 360 lines — score 10
- `app/daydream/forge/page.tsx` — 348 lines — score 10
- `app/(internal)/idari-console/page.tsx` — 309 lines — score 10
- `app/api/ai/idari/route.ts` — 309 lines — score 10
- `app/api/content/intelligence/route.ts` — 309 lines — score 10
- `app/api/dream-windows/[id]/route.ts` — 300 lines — score 10
- `app/api/content/voice-clone/route.ts` — 292 lines — score 10
- `app/api/social/rss-feed/route.ts` — 277 lines — score 10
- `app/marketplace/sell/page.tsx` — 270 lines — score 10
- `app/ads/page.tsx` — 267 lines — score 10
- `app/api/ai/boogieman/child-safety/route.ts` — 264 lines — score 10
- `app/lab/[id]/page.tsx` — 259 lines — score 10
- `app/settings/security/page.tsx` — 254 lines — score 10
- `app/api/ai/execute/route.ts` — 252 lines — score 10
- `app/profile/[handle]/page.tsx` — 252 lines — score 10
- `app/api/dreamr/suggested/route.ts` — 235 lines — score 10
- `app/lab/page.tsx` — 235 lines — score 10
- `app/api/posts/route.ts` — 232 lines — score 10
- `app/api/feed/route.ts` — 230 lines — score 10
- `app/lab/new/page.tsx` — 220 lines — score 10
- `app/auth/update-password/page.tsx` — 212 lines — score 10
- `app/daydream/music/upload/page.tsx` — 210 lines — score 10
- `app/onboarding/page.tsx` — 210 lines — score 10
- `app/api/comments/route.ts` — 209 lines — score 10
- `app/marketplace/[id]/page.tsx` — 205 lines — score 10
## 14. HomeDream

### Plain English
HomeDream is the personal home surface: the first meaningful app space after login, combining identity, feed, launcher cards, Dream access, and social entry points.

### What users experience
Users feel HomeDream as the personal starting point where they see themselves, their Dreams, people, feed items, and the app modules they can open.

### Repo Evidence
Matched focused repo evidence: 80 files, about 22,750 readable source lines.

Behavior signals:
- auth — 65 file hits
- commerce — 61 file hits
- persistence — 59 file hits
- state — 32 file hits
- mobile touch — 32 file hits
- events — 31 file hits
- rendering — 21 file hits
- runtime — 18 file hits

Routes and APIs:
- /homedream ← app/homedream/page.tsx
- GET|POST /api/home-layout ← app/api/home-layout/route.ts
- /dreamdmbar/homedream ← app/dreamdmbar/homedream/page.tsx
- /daydream/code ← app/daydream/code/page.tsx
- /daydream/lab ← app/daydream/lab/page.tsx
- POST /api/forge/build ← app/api/forge/build/route.ts
- /settings/appearance ← app/settings/appearance/page.tsx
- /edit-profiledream ← app/edit-profiledream/page.tsx
- /lab/[id]/codespace ← app/lab/[id]/codespace/page.tsx
- /about ← app/about/page.tsx
- /login ← app/login/page.tsx
- /join ← app/join/page.tsx
- /policy ← app/policy/page.tsx
- /discover ← app/discover/page.tsx
- /daydream/games ← app/daydream/games/page.tsx
- /view-profile ← app/view-profile/page.tsx

Components:
- DEV_BYPASS_USER_ID — app/homedream/page.tsx
- HomeDreamPage — app/homedream/page.tsx
- DREAMR_MANIFESTO — app/dreamdmbar/_components/HomeDreamRegion.tsx
- QuickLink — app/dreamdmbar/_components/HomeDreamRegion.tsx
- HomeDreamSurface — app/dreamdmbar/_components/HomeDreamRegion.tsx
- DEFAULT_WINDOW_SIZE — components/home/dream.ActiveModuleSurface.tsx
- ActiveModuleSurface — components/home/dream.ActiveModuleSurface.tsx
- DEFAULT_WORKFLOW_SPLIT — components/home/dream.bar.PersistentDreamBar.tsx
- PersistentDreamBar — components/home/dream.bar.PersistentDreamBar.tsx
- DreamDMContainer — components/home/dream.bar.PersistentDreamBar.tsx
- SHINY_GOLD — components/home/dream.FlagshipEnginesStrip.tsx
- FLAGSHIPS — components/home/dream.FlagshipEnginesStrip.tsx
- FlagshipEnginesStrip — components/home/dream.FlagshipEnginesStrip.tsx
- BLEED_PX — components/home/dream.NeuralSeamCanvas.tsx

Hooks:
- useLiveFeed — app/homedream/page.tsx
- useRouter — app/dreamdmbar/_components/HomeDreamRegion.tsx
- useEffect — app/dreamdmbar/_components/HomeDreamRegion.tsx
- useState — app/dreamdmbar/_components/HomeDreamRegion.tsx
- useNotifications — app/dreamdmbar/_components/HomeDreamRegion.tsx
- useDreamWindowActions — components/home/dream.ActiveModuleSurface.tsx
- useCallback — components/home/dream.ActiveModuleSurface.tsx
- useEffect — components/home/dream.ActiveModuleSurface.tsx
- useMemo — components/home/dream.ActiveModuleSurface.tsx
- useRef — components/home/dream.ActiveModuleSurface.tsx
- useState — components/home/dream.ActiveModuleSurface.tsx
- useDualRuntime — components/home/dream.bar.PersistentDreamBar.tsx
- useDreamLayout — components/home/dream.bar.PersistentDreamBar.tsx
- useDreamSystem — components/home/dream.bar.PersistentDreamBar.tsx

Exports that define public behavior:
- default export — page (app/homedream/page.tsx)
- default export — HomeDreamRegion (app/dreamdmbar/_components/HomeDreamRegion.tsx)
- PhysicsConstraint — engins/rulesets/homedream/dream.homedream.physics.ts
- HOMEDREAM_PHYSICS_CONSTRAINTS — engins/rulesets/homedream/dream.homedream.physics.ts
- resolveConstraint — engins/rulesets/homedream/dream.homedream.physics.ts
- EntityState — engins/rulesets/homedream/dream.homedream.transforms.ts
- HomeDreamState — engins/rulesets/homedream/dream.homedream.transforms.ts
- applyDelta — engins/rulesets/homedream/dream.homedream.transforms.ts
- createInitialState — engins/rulesets/homedream/dream.homedream.transforms.ts
- HOMEDREAM_GRAVITY — engins/rulesets/homedream/dream.homedream.constants.ts
- HOMEDREAM_MAX_ENTITIES — engins/rulesets/homedream/dream.homedream.constants.ts
- HOMEDREAM_FRAME_BUDGET_MS — engins/rulesets/homedream/dream.homedream.constants.ts
- HOMEDREAM_WORLD_ID — engins/rulesets/homedream/dream.homedream.constants.ts
- homedream — engine/generated/homedream.ts

Import/export connections:
- app/dreamdmbar/_components/HomeDreamRegion
- engine/dev-bypass
- dreamr/feed/useLiveFeed
- supabase/client/safeGetUser
- supabase/server/serverClient
- next/navigation
- next/server
- lucide-react
- react
- app/dreamdmbar/_components/dreamr/dreamsurface.dreamr
- components/dream.BrandLogo
- components/dream.HomeFeed
- components/dream.NotificationCenter
- components/dreams/dream.DraggableDream

### Matched Files

Primary files:
- `app/homedream/page.tsx` — 75 lines — score 138 — primary path, path keyword: homedream
- `app/dreamdmbar/_components/HomeDreamRegion.tsx` — 460 lines — score 128 — primary path, path keyword: homedream
- `styles/home-dream.css` — 235 lines — score 128 — primary path, path keyword: home dream
- `engins/rulesets/homedream/dream.homedream.physics.ts` — 36 lines — score 128 — primary path, path keyword: homedream
- `engins/rulesets/homedream/dream.homedream.transforms.ts` — 36 lines — score 128 — primary path, path keyword: homedream
- `engins/rulesets/homedream/index.ts` — 15 lines — score 128 — primary path, path keyword: homedream
- `engins/rulesets/homedream/dream.homedream.constants.ts` — 9 lines — score 128 — primary path, path keyword: homedream
- `engine/generated/homedream.ts` — 8 lines — score 128 — primary path, path keyword: homedream
- `components/home/dream.ActiveModuleSurface.tsx` — 475 lines — score 108 — primary path
- `components/home/dream.bar.PersistentDreamBar.tsx` — 345 lines — score 108 — primary path
- `components/home/dream.FlagshipEnginesStrip.tsx` — 278 lines — score 108 — primary path
- `components/home/dream.NeuralSeamCanvas.tsx` — 276 lines — score 100 — primary path
- `components/home/dream.DaydreamPulseStrip.tsx` — 139 lines — score 100 — primary path
- `components/home/dream.widget.DreamWidget.tsx` — 117 lines — score 100 — primary path
- `components/home/dream.bar.GlobalDreamBar.tsx` — 100 lines — score 100 — primary path
- `app/api/home-layout/route.ts` — 109 lines — score 63 — supporting path
- `components/dream.HomeFeed.tsx` — 1329 lines — score 53 — supporting path
- `components/dream.FeedCard.tsx` — 469 lines — score 45 — supporting path
- `app/dreamdmbar/homedream/page.tsx` — 19 lines — score 38 — path keyword: homedream
- `components/gameengin/dream.cartridge.CartridgeLauncher.tsx` — 293 lines — score 28 — path keyword: launcher
- `engins/gameengin/launcher.ts` — 99 lines — score 28 — path keyword: launcher
- `src/engin/generated/homedream.ts` — 8 lines — score 28 — path keyword: homedream
- `app/daydream/code/page.tsx` — 1118 lines — score 10
- `app/daydream/lab/page.tsx` — 1062 lines — score 10
- `app/api/forge/build/route.ts` — 923 lines — score 10
- `app/settings/appearance/page.tsx` — 750 lines — score 10
- `app/edit-profiledream/page.tsx` — 561 lines — score 10
- `app/lab/[id]/codespace/page.tsx` — 399 lines — score 10
- `app/about/page.tsx` — 378 lines — score 10
- `app/login/page.tsx` — 377 lines — score 10
- `app/join/page.tsx` — 374 lines — score 10
- `app/policy/page.tsx` — 373 lines — score 10
- `app/discover/page.tsx` — 370 lines — score 10
- `app/daydream/games/page.tsx` — 365 lines — score 10

Supporting files:
- `app/view-profile/page.tsx` — 365 lines — score 10
- `app/api/connectors/webhooks/[provider]/route.ts` — 360 lines — score 10
- `app/daydream/forge/page.tsx` — 348 lines — score 10
- `app/api/messages/route.ts` — 342 lines — score 10
- `app/(internal)/idari-console/page.tsx` — 309 lines — score 10
- `app/api/ai/idari/route.ts` — 309 lines — score 10
- `app/api/content/intelligence/route.ts` — 309 lines — score 10
- `app/api/dream-windows/[id]/route.ts` — 300 lines — score 10
- `app/api/content/voice-clone/route.ts` — 292 lines — score 10
- `app/api/social/rss-feed/route.ts` — 277 lines — score 10
- `app/marketplace/sell/page.tsx` — 270 lines — score 10
- `app/ads/page.tsx` — 267 lines — score 10
- `app/api/ai/boogieman/child-safety/route.ts` — 264 lines — score 10
- `app/lab/[id]/page.tsx` — 259 lines — score 10
- `app/settings/security/page.tsx` — 254 lines — score 10
- `app/api/ai/execute/route.ts` — 252 lines — score 10
- `app/profile/[handle]/page.tsx` — 252 lines — score 10
- `app/api/dreamr/suggested/route.ts` — 235 lines — score 10
- `app/lab/page.tsx` — 235 lines — score 10
- `app/api/posts/route.ts` — 232 lines — score 10
- `app/api/feed/route.ts` — 230 lines — score 10
- `app/lab/new/page.tsx` — 220 lines — score 10
- `app/auth/update-password/page.tsx` — 212 lines — score 10
- `app/daydream/music/upload/page.tsx` — 210 lines — score 10
- `app/onboarding/page.tsx` — 210 lines — score 10
- `app/api/comments/route.ts` — 209 lines — score 10
- `app/settings/notifications/page.tsx` — 207 lines — score 10
- `app/marketplace/[id]/page.tsx` — 205 lines — score 10
- `app/ads/create/page.tsx` — 203 lines — score 10
- `app/shop/sell/page.tsx` — 201 lines — score 10
## 15. DreamSpace

### Plain English
DreamSpace is the workspace/canvas layer where DayDream surfaces, Engins, regions, runtime shells, and user-created windows become one creative environment.

### What users experience
Users experience DreamSpace as the place where they arrange, open, move through, and work inside creative surfaces rather than just clicking normal web pages.

### Repo Evidence
Matched focused repo evidence: 95 files, about 34,814 readable source lines.

Behavior signals:
- commerce — 61 file hits
- auth — 57 file hits
- state — 49 file hits
- mobile touch — 48 file hits
- rendering — 41 file hits
- persistence — 40 file hits
- events — 34 file hits
- runtime — 33 file hits

Routes and APIs:
- /dreamdmbar/dreamspace ← app/dreamdmbar/dreamspace/page.tsx
- /daydream/games ← app/daydream/games/page.tsx
- /daydream/music ← app/daydream/music/page.tsx
- /daydream/code ← app/daydream/code/page.tsx
- /daydream/lab ← app/daydream/lab/page.tsx
- /daydream/forge ← app/daydream/forge/page.tsx
- /daydream/music/upload ← app/daydream/music/upload/page.tsx
- /daydream/lab/portfolio ← app/daydream/lab/portfolio/page.tsx
- /daydream/create ← app/daydream/create/page.tsx
- /daydream/brand ← app/daydream/brand/page.tsx
- /daydream/game ← app/daydream/game/page.tsx
- /daydream/games/engin ← app/daydream/games/engin/page.tsx
- /daydream/constellation ← app/daydream/constellation/page.tsx
- /daydream/media-vault ← app/daydream/media-vault/page.tsx
- /daydream/play ← app/daydream/play/page.tsx
- /daydream/brand/engin ← app/daydream/brand/engin/page.tsx

Components:
- DAYDREAMS — components/dreams/dreamsurface.dreamspace.tsx
- ENGIN_APPS — components/dreams/dreamsurface.dreamspace.tsx
- SERVICE_TABS — components/dreams/dreamsurface.dreamspace.tsx
- ICON_SIZE — components/dreams/dreamsurface.dreamspace.tsx
- ICON_RADIUS — components/dreams/dreamsurface.dreamspace.tsx
- ICON_FONT — components/dreams/dreamsurface.dreamspace.tsx
- LABEL_FONT — components/dreams/dreamsurface.dreamspace.tsx
- AppIcon — components/dreams/dreamsurface.dreamspace.tsx
- EngineBarChart — components/dreams/dreamsurface.dreamspace.tsx
- DreamsSpacePanel — components/dreams/dreamsurface.dreamspace.tsx
- TAB_LABELS — components/dreams/dreamsurface.dreamspace.tsx
- DreamDMBarDreamSpacePage — app/dreamdmbar/dreamspace/page.tsx
- SUGGESTED_DREAMS — app/dreamdmbar/_components/DreamSpaceRegion.tsx
- DreamSpace — app/dreamdmbar/_components/DreamSpaceRegion.tsx

Hooks:
- useDreamsRuntime — components/dreams/dreamsurface.dreamspace.tsx
- useSessionIntelligence — components/dreams/dreamsurface.dreamspace.tsx
- useRouter — components/dreams/dreamsurface.dreamspace.tsx
- useCallback — components/dreams/dreamsurface.dreamspace.tsx
- useEffect — components/dreams/dreamsurface.dreamspace.tsx
- useRef — components/dreams/dreamsurface.dreamspace.tsx
- useState — components/dreams/dreamsurface.dreamspace.tsx
- useDualRuntime — app/dreamdmbar/dreamspace/page.tsx
- useDreamSystem — app/dreamdmbar/dreamspace/page.tsx
- useEffect — app/dreamdmbar/dreamspace/page.tsx
- useAccount — app/dreamdmbar/_components/DreamSpaceRegion.tsx
- useOS — app/dreamdmbar/_components/DreamSpaceRegion.tsx
- useCallback — app/dreamdmbar/_components/DreamSpaceRegion.tsx
- useEffect — app/dreamdmbar/_components/DreamSpaceRegion.tsx

Exports that define public behavior:
- getAppRoute — components/dreams/dreamsurface.dreamspace.tsx
- RecentDestination — components/dreams/dreamsurface.dreamspace.tsx
- buildRecentDestinations — components/dreams/dreamsurface.dreamspace.tsx
- default export — dreamsurface.dreamspace (components/dreams/dreamsurface.dreamspace.tsx)
- default export — page (app/dreamdmbar/dreamspace/page.tsx)
- default export — DreamSpaceRegion (app/dreamdmbar/_components/DreamSpaceRegion.tsx)
- HOME_BOTTOM_THRESHOLD — coresurfaces/home/buttons/contextual-home.ts
- HOME_TOP_THRESHOLD — coresurfaces/home/buttons/contextual-home.ts
- HomeTarget — coresurfaces/home/buttons/contextual-home.ts
- resolveHomeTarget — coresurfaces/home/buttons/contextual-home.ts
- RuntimeHomeCallbacks — coresurfaces/home/buttons/contextual-home.ts
- runHomeAction — coresurfaces/home/buttons/contextual-home.ts
- default export — dream.ProfileSpace (components/spatial/dream.ProfileSpace.tsx)
- default export — dreamsurface.EditProfileDream (coresurfaces/dreamsurface.EditProfileDream.tsx)

Import/export connections:
- app/dreamdmbar/_components/DreamSpaceRegion
- components/home/dream.ActiveModuleSurface
- components/spatial/dream.ProfileSpace
- components/widgets/dream.widget.UniversalWidget
- engine/dreams/useDreamsRuntime
- engins/forgeengin/forge/forgeIntelligence
- engins/forgeengin/forge/forgeMomentum
- engins/forgeengin/forge/forgeRegistry
- engine/intelligence/continuityHelpers
- engine/intelligence/useSessionIntelligence
- framer-motion
- next/navigation
- types/dreamArtifact
- react

### Matched Files

Primary files:
- `components/dreams/dreamsurface.dreamspace.tsx` — 891 lines — score 164 — primary path, path keyword: dreamspace
- `app/dreamdmbar/dreamspace/page.tsx` — 19 lines — score 138 — primary path, path keyword: dreamspace
- `app/dreamdmbar/_components/DreamSpaceRegion.tsx` — 459 lines — score 136 — primary path, path keyword: dreamspace
- `coresurfaces/home/buttons/contextual-home.ts` — 67 lines — score 136 — primary path, path keyword: surface
- `components/spatial/dream.ProfileSpace.tsx` — 822 lines — score 128 — primary path, path keyword: spatial
- `coresurfaces/dreamsurface.EditProfileDream.tsx` — 537 lines — score 128 — primary path, path keyword: surface
- `coresurfaces/dreamsurface.ViewProfile.tsx` — 354 lines — score 128 — primary path, path keyword: surface
- `components/spatial/dream.shell.EnhancedSpatialShell.tsx` — 203 lines — score 128 — primary path, path keyword: spatial
- `components/daydream/dream.StandaloneEnginSurface.tsx` — 38 lines — score 128 — primary path, path keyword: surface
- `app/daydream/games/page.tsx` — 365 lines — score 126 — primary path
- `app/daydream/music/page.tsx` — 87 lines — score 126 — primary path
- `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` — 684 lines — score 120 — primary path, path keyword: surface
- `components/spatial/dream.PixiPhysicsLayer.tsx` — 149 lines — score 120 — primary path, path keyword: spatial
- `coresurfaces/home/buttons/button-groups.ts` — 91 lines — score 120 — primary path, path keyword: surface
- `app/daydream/code/page.tsx` — 1118 lines — score 118 — primary path
- `app/daydream/lab/page.tsx` — 1062 lines — score 118 — primary path
- `app/daydream/forge/page.tsx` — 348 lines — score 118 — primary path
- `app/daydream/music/upload/page.tsx` — 210 lines — score 118 — primary path
- `app/daydream/lab/portfolio/page.tsx` — 189 lines — score 118 — primary path
- `app/daydream/create/page.tsx` — 107 lines — score 118 — primary path
- `app/daydream/brand/page.tsx` — 62 lines — score 118 — primary path
- `app/daydream/game/page.tsx` — 31 lines — score 118 — primary path
- `app/daydream/games/engin/page.tsx` — 30 lines — score 118 — primary path
- `app/daydream/constellation/page.tsx` — 26 lines — score 118 — primary path
- `app/daydream/media-vault/page.tsx` — 21 lines — score 118 — primary path
- `app/daydream/play/page.tsx` — 19 lines — score 118 — primary path
- `app/daydream/brand/engin/page.tsx` — 11 lines — score 118 — primary path
- `app/daydream/code/engin/page.tsx` — 11 lines — score 118 — primary path
- `app/daydream/create/engin/page.tsx` — 11 lines — score 118 — primary path
- `app/daydream/lab/engin/page.tsx` — 11 lines — score 118 — primary path
- `app/daydream/music/engin/page.tsx` — 11 lines — score 118 — primary path
- `app/daydream/render/page.tsx` — 6 lines — score 110 — primary path
- `components/daydream/dream.CodeDreamIDE.tsx` — 1707 lines — score 108 — primary path
- `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx` — 668 lines — score 108 — primary path

Supporting files:
- `daydreams/code/page.tsx` — 545 lines — score 108 — primary path
- `components/daydream/dream.shell.DaydreamShell.tsx` — 465 lines — score 108 — primary path
- `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` — 456 lines — score 108 — primary path
- `daydreams/create/page.tsx` — 456 lines — score 108 — primary path
- `components/daydream/dream.JourneyTrail.tsx` — 386 lines — score 108 — primary path
- `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx` — 378 lines — score 108 — primary path
- `components/daydream/dream.constellationmap.tsx` — 356 lines — score 108 — primary path
- `daydreams/games/page.tsx` — 356 lines — score 108 — primary path
- `components/daydream/starmaker/dream.panel.CompingPanel.tsx` — 347 lines — score 108 — primary path
- `daydreams/shared/useDaydreamPersistence.ts` — 147 lines — score 108 — primary path
- `app/daydream/constellation/dream.ConstellationClient.tsx` — 114 lines — score 108 — primary path
- `daydreams/shared/useDaydreamState.ts` — 93 lines — score 108 — primary path
- `daydreams/brand/page.tsx` — 57 lines — score 108 — primary path
- `components/daydream/dream.LabDreamIDE.tsx` — 1294 lines — score 100 — primary path
- `components/daydream/dream.NGNEngin.tsx` — 600 lines — score 100 — primary path
- `daydreams/lab/page.tsx` — 486 lines — score 100 — primary path
- `daydreams/music/page.tsx` — 393 lines — score 100 — primary path
- `components/daydream/dream.DiffViewer.tsx` — 353 lines — score 100 — primary path
- `app/daydream/game/dream.shell.ImmersiveGameShell.tsx` — 330 lines — score 100 — primary path
- `components/daydream/dream.OpenDaydreamSideBButton.tsx` — 19 lines — score 100 — primary path
- `app/daydream/game/dream.GamePageClient.tsx` — 5 lines — score 100 — primary path
- `engine/runtime/dreamsurface/dreamsurface.bridge.ts` — 51 lines — score 73 — supporting path, path keyword: surface
- `engine/runtime/dreamsurface/dreamsurface.delta.ts` — 23 lines — score 73 — supporting path, path keyword: surface
- `engine/runtime/dreamsurface/index.ts` — 8 lines — score 73 — supporting path, path keyword: surface
- `components/runtime/dream.RuntimeView.tsx` — 432 lines — score 69 — supporting path
- `components/runtime/dream.shell.RuntimeShell.tsx` — 352 lines — score 61 — supporting path
- `components/runtime/dream.DualRuntimeContainer.tsx` — 246 lines — score 61 — supporting path
- `app/dreamspace/page.tsx` — 8 lines — score 46 — path keyword: dreamspace
- `dreamdmbar/dreamsurface.dreamdmbar.tsx` — 3098 lines — score 44 — path keyword: surface
- `src/engin/generated/surfaces.ts` — 590 lines — score 44 — path keyword: surface
## 16. Dreams (Widgets / Windows / Surfaces)

### Plain English
Dreams, widgets, windows, and surfaces are the visible objects users manipulate. This section maps the components and runtime support that make them openable, stateful, movable, and connected to Engins.

### What users experience
Users feel this as cards, panels, windows, widgets, surface launches, and interactive objects that turn the product into a creative operating system rather than a static website.

### Repo Evidence
Matched focused repo evidence: 110 files, about 28,506 readable source lines.

Behavior signals:
- commerce — 58 file hits
- state — 55 file hits
- auth — 52 file hits
- mobile touch — 47 file hits
- runtime — 38 file hits
- events — 34 file hits
- rendering — 32 file hits
- persistence — 26 file hits

Routes and APIs:
- /settings/widgets ← app/settings/widgets/page.tsx
- GET|PATCH|DELETE /api/dream-windows/[id] ← app/api/dream-windows/[id]/route.ts
- GET|POST /api/dream-windows ← app/api/dream-windows/route.ts
- /settings/dreams ← app/settings/dreams/page.tsx
- GET|POST /api/widgets/feed ← app/api/widgets/feed/route.ts
- GET /api/widgets/instances ← app/api/widgets/instances/route.ts
- /daydream/code ← app/daydream/code/page.tsx

Components:
- DAYDREAMS — components/dreams/dreamsurface.dreamspace.tsx
- ENGIN_APPS — components/dreams/dreamsurface.dreamspace.tsx
- SERVICE_TABS — components/dreams/dreamsurface.dreamspace.tsx
- ICON_SIZE — components/dreams/dreamsurface.dreamspace.tsx
- ICON_RADIUS — components/dreams/dreamsurface.dreamspace.tsx
- ICON_FONT — components/dreams/dreamsurface.dreamspace.tsx
- LABEL_FONT — components/dreams/dreamsurface.dreamspace.tsx
- AppIcon — components/dreams/dreamsurface.dreamspace.tsx
- EngineBarChart — components/dreams/dreamsurface.dreamspace.tsx
- DreamsSpacePanel — components/dreams/dreamsurface.dreamspace.tsx
- TAB_LABELS — components/dreams/dreamsurface.dreamspace.tsx
- SkeletonRow — components/dreams/dreamsurface.shell.tsx
- DreamShell — components/dreams/dreamsurface.shell.tsx
- LegacyWidgetsSettingsPage — app/settings/widgets/page.tsx

Hooks:
- useDreamsRuntime — components/dreams/dreamsurface.dreamspace.tsx
- useSessionIntelligence — components/dreams/dreamsurface.dreamspace.tsx
- useRouter — components/dreams/dreamsurface.dreamspace.tsx
- useCallback — components/dreams/dreamsurface.dreamspace.tsx
- useEffect — components/dreams/dreamsurface.dreamspace.tsx
- useRef — components/dreams/dreamsurface.dreamspace.tsx
- useState — components/dreams/dreamsurface.dreamspace.tsx
- useEffect — components/dreams/dreamsurface.shell.tsx
- useRef — components/dreams/dreamsurface.shell.tsx
- useState — components/dreams/dreamsurface.shell.tsx
- useTapHoldMove — components/dreams/dreamsurface.window.tsx
- useRef — components/dreams/dreamsurface.window.tsx
- useDreamWindowActions — components/dreams/dream.widget.SuperDreamWidget.tsx
- useCallback — components/dreams/dream.widget.SuperDreamWidget.tsx

Exports that define public behavior:
- getAppRoute — components/dreams/dreamsurface.dreamspace.tsx
- RecentDestination — components/dreams/dreamsurface.dreamspace.tsx
- buildRecentDestinations — components/dreams/dreamsurface.dreamspace.tsx
- default export — dreamsurface.dreamspace (components/dreams/dreamsurface.dreamspace.tsx)
- DreamDataState — components/dreams/dreamsurface.shell.tsx
- DreamShellProps — components/dreams/dreamsurface.shell.tsx
- default export — dreamsurface.shell (components/dreams/dreamsurface.shell.tsx)
- metadata — app/settings/widgets/page.tsx
- default export — page (app/settings/widgets/page.tsx)
- WidgetCardProps — components/widgets/dream.widget.WidgetCard.tsx
- default export — dream.widget.WidgetCard (components/widgets/dream.widget.WidgetCard.tsx)
- DreamWindowShellProps — components/dreams/dreamsurface.window.tsx
- DreamWindowShell — components/dreams/dreamsurface.window.tsx
- default export — dreamsurface.window (components/dreams/dreamsurface.window.tsx)

Import/export connections:
- app/dreamdmbar/_components/DreamSpaceRegion
- components/home/dream.ActiveModuleSurface
- components/spatial/dream.ProfileSpace
- components/widgets/dream.widget.UniversalWidget
- engine/dreams/useDreamsRuntime
- engins/forgeengin/forge/forgeIntelligence
- engins/forgeengin/forge/forgeMomentum
- engins/forgeengin/forge/forgeRegistry
- engine/intelligence/continuityHelpers
- engine/intelligence/useSessionIntelligence
- framer-motion
- next/navigation
- types/dreamArtifact
- react

### Matched Files

Primary files:
- `components/dreams/dreamsurface.dreamspace.tsx` — 891 lines — score 172 — primary path, path keyword: surface
- `components/dreams/dreamsurface.shell.tsx` — 258 lines — score 164 — primary path, path keyword: surface
- `components/widgets/dream.widget.WidgetSurface.tsx` — 19 lines — score 164 — primary path, path keyword: widget
- `app/settings/widgets/page.tsx` — 40 lines — score 154 — primary path, path keyword: widget
- `components/widgets/dream.widget.WidgetCard.tsx` — 62 lines — score 152 — primary path, path keyword: widget
- `components/dreams/dreamsurface.window.tsx` — 67 lines — score 148 — primary path, path keyword: surface
- `components/dreams/dream.widget.SuperDreamWidget.tsx` — 377 lines — score 144 — primary path, path keyword: widget
- `components/widgets/dream.widget.WidgetShell.tsx` — 9 lines — score 144 — primary path, path keyword: widget
- `app/api/dream-windows/[id]/route.ts` — 300 lines — score 138 — primary path, path keyword: dream window
- `app/api/dream-windows/route.ts` — 185 lines — score 138 — primary path, path keyword: dream window
- `engine/dream-window/DreamWindowLifecycle.ts` — 302 lines — score 136 — primary path, path keyword: dream window
- `engine/dream-window/runtimeRegion.ts` — 256 lines — score 136 — primary path, path keyword: dream window
- `engine/dream-window/connectionVerbs.ts` — 229 lines — score 136 — primary path, path keyword: dream window
- `engine/dream-window/enginConnectionNetwork.ts` — 205 lines — score 136 — primary path, path keyword: dream window
- `types/dream-window.ts` — 105 lines — score 136 — primary path, path keyword: dream window
- `engine/dream-window/index.ts` — 51 lines — score 136 — primary path, path keyword: dream window
- `components/widgets/dream.widget.WidgetLibrary.tsx` — 19 lines — score 136 — primary path, path keyword: widget
- `app/settings/dreams/page.tsx` — 40 lines — score 134 — primary path
- `components/dream.widget.AnchorWidget.tsx` — 300 lines — score 128 — primary path, path keyword: widget
- `engine/dream-window/useDreamWindowActions.ts` — 287 lines — score 128 — primary path, path keyword: dream window
- `components/widgets/dream.widget.UniversalWidget.tsx` — 230 lines — score 128 — primary path, path keyword: widget
- `components/widgets/dream.ConfigureSheet.tsx` — 160 lines — score 128 — primary path, path keyword: widget
- `components/widgets/dream.widget.PlayMediaWidget.tsx` — 152 lines — score 128 — primary path, path keyword: widget
- `components/dream.widget.WidgetBubble.tsx` — 112 lines — score 128 — primary path, path keyword: widget
- `components/widgets/dream.widget.WidgetPlaceholder.tsx` — 106 lines — score 128 — primary path, path keyword: widget
- `components/dream.widget.ProfileWidgetBlock.tsx` — 102 lines — score 128 — primary path, path keyword: widget
- `components/dreams/dream.DraggableDream.tsx` — 75 lines — score 128 — primary path, path keyword: draggable
- `components/widgets/dream.AddDreamCTA.tsx` — 63 lines — score 128 — primary path, path keyword: widget
- `app/settings/dreams/dreams-layout-editor.tsx` — 83 lines — score 124 — primary path
- `components/dreams/dream.window.JourneyDreamWindow.tsx` — 57 lines — score 124 — primary path
- `components/widgets/dream.EditModeBanner.tsx` — 55 lines — score 120 — primary path, path keyword: widget
- `components/widgets/dream.EditModeProvider.tsx` — 35 lines — score 120 — primary path, path keyword: widget
- `components/dream.DragToAnchorClose.tsx` — 174 lines — score 116 — primary path
- `components/dreams/dream.shell.DreamShell.tsx` — 5 lines — score 116 — primary path

Supporting files:
- `components/dreams/dream.panel.RuntimeMemoryHUD.tsx` — 158 lines — score 108 — primary path
- `components/dreams/dream.SlideOverPanel.tsx` — 50 lines — score 108 — primary path
- `components/dreams/dream.outputlayer.tsx` — 33 lines — score 108 — primary path
- `components/dreams/dream.shell.SharedDreamShell.tsx` — 402 lines — score 100 — primary path
- `components/dreams/dream.GlobalDragLayer.tsx` — 97 lines — score 100 — primary path
- `components/dreams/dream.connectorlayer.tsx` — 31 lines — score 100 — primary path
- `components/dreams/dream.PlatformErrorReporter.tsx` — 25 lines — score 100 — primary path
- `components/dreams/dream.featurelayer.tsx` — 22 lines — score 100 — primary path
- `engine/dreams/types.ts` — 483 lines — score 77 — supporting path
- `engine/generated/dreamsurfaces.ts` — 22 lines — score 72 — path keyword: surface, path keyword: dreamsurface
- `src/engin/generated/dreamsurfaces.ts` — 22 lines — score 72 — path keyword: surface, path keyword: dreamsurface
- `coresurfaces/dreamsurface.EditProfileDream.tsx` — 537 lines — score 64 — path keyword: surface, path keyword: dreamsurface
- `coresurfaces/dreamsurface.ViewProfile.tsx` — 354 lines — score 64 — path keyword: surface, path keyword: dreamsurface
- `components/dream.FeedCard.tsx` — 469 lines — score 61 — supporting path
- `engine/dreams/drag.ts` — 65 lines — score 61 — supporting path
- `dreamdmbar/dreamsurface.dreamdmbar.tsx` — 3098 lines — score 56 — path keyword: surface, path keyword: dreamsurface
- `components/dreamengin/dreamsurface.dreamengin.tsx` — 163 lines — score 56 — path keyword: surface, path keyword: dreamsurface
- `engine/runtime/dreamsurface/dreamsurface.bridge.ts` — 51 lines — score 56 — path keyword: surface, path keyword: dreamsurface
- `engine/runtime/dreamsurface/dreamsurface.delta.ts` — 23 lines — score 56 — path keyword: surface, path keyword: dreamsurface
- `engine/runtime/dreamsurface/index.ts` — 8 lines — score 56 — path keyword: surface, path keyword: dreamsurface
- `engine/dreams/dreamIntentBus.ts` — 184 lines — score 53 — supporting path
- `engine/dreams/useDreamsRuntime.ts` — 101 lines — score 53 — supporting path
- `engine/dreams/profileProjection.ts` — 28 lines — score 53 — supporting path
- `src/engin/generated/surfaces.ts` — 590 lines — score 52 — path keyword: surface
- `engine/generated/surfaces.ts` — 580 lines — score 52 — path keyword: surface
- `types/widget-system-v2.ts` — 373 lines — score 52 — path keyword: widget
- `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx` — 2006 lines — score 48 — path keyword: surface, path keyword: dreamsurface
- `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` — 684 lines — score 48 — path keyword: surface, path keyword: dreamsurface
- `engine/dreams/DreamRegistry.tsx` — 119 lines — score 45 — supporting path
- `build-memory/ui-surfaces.json` — 1450 lines — score 44 — path keyword: surface
## 17. User-Facing Modularity

### Plain English
User-facing modularity is the part of DREAMengin that lets features feel composable to people: launchable modules, reusable panels, shared shells, configurable surfaces, and modules that can move between contexts.

### What users experience
Users feel modularity when they can open a tool from more than one place, carry state across a surface, combine Engins, and customize the product without waiting for a fixed page.

### Repo Evidence
Matched focused repo evidence: 85 files, about 31,567 readable source lines.

Behavior signals:
- commerce — 64 file hits
- state — 58 file hits
- mobile touch — 47 file hits
- auth — 40 file hits
- rendering — 39 file hits
- runtime — 35 file hits
- events — 33 file hits
- persistence — 23 file hits

Routes and APIs:
- None found.

Components:
- GUIDES — components/panels/dream.panel.HelpPanel.tsx
- HelpPanel — components/panels/dream.panel.HelpPanel.tsx
- DEFAULT_WINDOW_SIZE — components/home/dream.ActiveModuleSurface.tsx
- ActiveModuleSurface — components/home/dream.ActiveModuleSurface.tsx
- ProfilePanel — components/panels/dream.panel.ProfilePanel.tsx
- STORAGE_KEY — components/panels/dream.panel.FeedSettingsPanel.tsx
- DEFAULT_PREFS — components/panels/dream.panel.FeedSettingsPanel.tsx
- Toggle — components/panels/dream.panel.FeedSettingsPanel.tsx
- FeedSettingsPanel — components/panels/dream.panel.FeedSettingsPanel.tsx
- NAV_GROUPS — components/panels/dream.panel.SettingsPanel.tsx
- SettingsPanel — components/panels/dream.panel.SettingsPanel.tsx
- GradientThemePicker — components/panels/dream.panel.AppearancePanel.tsx
- Slider — components/panels/dream.panel.AppearancePanel.tsx
- PresetCard — components/panels/dream.panel.AppearancePanel.tsx

Hooks:
- useModuleRegistry — engine/runtime/moduleRegistry.ts
- useDreamSystem — components/panels/dream.panel.HelpPanel.tsx
- useDreamWindowActions — components/home/dream.ActiveModuleSurface.tsx
- useCallback — components/home/dream.ActiveModuleSurface.tsx
- useEffect — components/home/dream.ActiveModuleSurface.tsx
- useMemo — components/home/dream.ActiveModuleSurface.tsx
- useRef — components/home/dream.ActiveModuleSurface.tsx
- useState — components/home/dream.ActiveModuleSurface.tsx
- useCallback — components/panels/dream.panel.ProfilePanel.tsx
- useEffect — components/panels/dream.panel.ProfilePanel.tsx
- useRef — components/panels/dream.panel.ProfilePanel.tsx
- useState — components/panels/dream.panel.ProfilePanel.tsx
- useCallback — components/panels/dream.panel.FeedSettingsPanel.tsx
- useEffect — components/panels/dream.panel.FeedSettingsPanel.tsx

Exports that define public behavior:
- RuntimeId — types/module-manifest.ts
- ModuleType — types/module-manifest.ts
- ModuleManifest — types/module-manifest.ts
- RuntimeCompatibility — types/module-manifest.ts
- ModuleCompatibility — types/module-manifest.ts
- isModuleManifest — types/module-manifest.ts
- negotiateModuleCompatibility — types/module-manifest.ts
- useModuleRegistry — engine/runtime/moduleRegistry.ts
- moduleRegistry — engine/runtime/moduleRegistry.ts
- subscribeRegistryToTransferEvents — engine/runtime/moduleRegistry.ts
- manifestFromWidget — engine/runtime/moduleRegistry.ts
- DropTarget — engine/runtime/dropTargetRegistry.ts
- dropTargetRegistry — engine/runtime/dropTargetRegistry.ts
- default export — dream.panel.HelpPanel (components/panels/dream.panel.HelpPanel.tsx)

Import/export connections:
- engine/engin-runtime/EnginBaseState
- engine/runtime/dualRuntimeBridge
- types/module-manifest
- zustand
- types/widgets
- engine/runtime/coercionTable
- dreamdmbar/runtime/DreamSystemContext
- lucide-react
- engine/activeModulesStore
- engine/artifacts/artifactStore
- engine/dream-window/DreamWindowLifecycle
- engine/dream-window/useDreamWindowActions
- engine/runtime/dreamOSBus
- types/dreamArtifact

### Matched Files

Primary files:
- `types/module-manifest.ts` — 183 lines — score 164 — primary path, path keyword: module
- `engine/runtime/moduleRegistry.ts` — 170 lines — score 164 — primary path, path keyword: module
- `engine/runtime/dropTargetRegistry.ts` — 116 lines — score 144 — primary path, path keyword: registry
- `components/panels/dream.panel.HelpPanel.tsx` — 71 lines — score 136 — primary path, path keyword: panel
- `components/home/dream.ActiveModuleSurface.tsx` — 475 lines — score 128 — primary path, path keyword: module
- `components/panels/dream.panel.ProfilePanel.tsx` — 338 lines — score 128 — primary path, path keyword: panel
- `components/panels/dream.panel.FeedSettingsPanel.tsx` — 192 lines — score 128 — primary path, path keyword: panel
- `components/panels/dream.panel.SettingsPanel.tsx` — 185 lines — score 128 — primary path, path keyword: panel
- `components/panels/dream.panel.AppearancePanel.tsx` — 166 lines — score 128 — primary path, path keyword: panel
- `components/panels/dream.panel.PrivacyPanel.tsx` — 146 lines — score 128 — primary path, path keyword: panel
- `components/panels/dream.panel.DataPanel.tsx` — 139 lines — score 128 — primary path, path keyword: panel
- `components/panels/dream.panel.MarketplacePanel.tsx` — 139 lines — score 128 — primary path, path keyword: panel
- `components/panels/dream.panel.WidgetsPanel.tsx` — 108 lines — score 128 — primary path, path keyword: panel
- `components/panels/dream.panel.SafetyPanel.tsx` — 102 lines — score 128 — primary path, path keyword: panel
- `components/panels/dream.panel.ControlsPanel.tsx` — 90 lines — score 128 — primary path, path keyword: panel
- `dreamdmbar/hooks/useModuleBarIntent.ts` — 87 lines — score 128 — primary path, path keyword: module
- `components/panels/dream.panel.ConnectorsPanel.tsx` — 48 lines — score 128 — primary path, path keyword: panel
- `components/panels/panelTypes.ts` — 47 lines — score 128 — primary path, path keyword: panel
- `components/panels/dream.panel.AlgorithmPanel.tsx` — 36 lines — score 128 — primary path, path keyword: panel
- `components/panels/dream.panel.FeedPanel.tsx` — 4 lines — score 128 — primary path, path keyword: panel
- `components/runtime/dream.RuntimeView.tsx` — 432 lines — score 124 — primary path
- `components/runtime/dream.DualRuntimeContainer.tsx` — 246 lines — score 124 — primary path
- `components/runtime/dream.shell.RuntimeShell.tsx` — 352 lines — score 116 — primary path
- `components/dreams/dream.panel.RuntimeMemoryHUD.tsx` — 158 lines — score 81 — supporting path, path keyword: panel
- `components/dreams/dream.SlideOverPanel.tsx` — 50 lines — score 73 — supporting path, path keyword: panel
- `components/dreams/dreamsurface.dreamspace.tsx` — 891 lines — score 69 — supporting path
- `components/dreams/dreamsurface.window.tsx` — 67 lines — score 61 — supporting path
- `build-memory/registry.json` — 10916 lines — score 60 — path keyword: registry
- `components/engines/shared/dream.EnginProvider.tsx` — 54 lines — score 53 — supporting path
- `engins/forgeengin/forge-ngn/piece-registry.ts` — 304 lines — score 52 — path keyword: registry
- `engins/gameengin/cartridges/manifest.ts` — 172 lines — score 52 — path keyword: manifest
- `engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel.tsx` — 92 lines — score 48 — path keyword: module, path keyword: panel
- `components/dreams/dream.shell.SharedDreamShell.tsx` — 402 lines — score 45 — supporting path
- `components/dreams/dream.widget.SuperDreamWidget.tsx` — 377 lines — score 45 — supporting path

Supporting files:
- `components/dreams/dreamsurface.shell.tsx` — 258 lines — score 45 — supporting path
- `components/engines/shared/dream.shell.EnginAppShell.tsx` — 114 lines — score 45 — supporting path
- `components/dreams/dream.GlobalDragLayer.tsx` — 97 lines — score 45 — supporting path
- `components/dreams/dream.DraggableDream.tsx` — 75 lines — score 45 — supporting path
- `components/engines/shared/dream.makeEnginApp.tsx` — 64 lines — score 45 — supporting path
- `components/dreams/dream.window.JourneyDreamWindow.tsx` — 57 lines — score 45 — supporting path
- `components/engines/shared/dream.bar.EnginNavBar.tsx` — 51 lines — score 45 — supporting path
- `components/engines/shared/dream.EnginRuleSet.ts` — 51 lines — score 45 — supporting path
- `components/dreams/dream.outputlayer.tsx` — 33 lines — score 45 — supporting path
- `components/dreams/dream.connectorlayer.tsx` — 31 lines — score 45 — supporting path
- `components/dreams/dream.PlatformErrorReporter.tsx` — 25 lines — score 45 — supporting path
- `components/dreams/dream.featurelayer.tsx` — 22 lines — score 45 — supporting path
- `components/engines/shared/index.ts` — 10 lines — score 45 — supporting path
- `components/dreams/dream.shell.DreamShell.tsx` — 5 lines — score 45 — supporting path
- `components/forge/dream.panel.AIBuilderPanel.tsx` — 1047 lines — score 44 — path keyword: panel
- `components/dreamengin/dream.panel.DrEamsPanel.tsx` — 358 lines — score 44 — path keyword: panel
- `engine/manifests/osSubsystemManifest.ts` — 253 lines — score 44 — path keyword: manifest
- `engins/gameengin/launcher.ts` — 99 lines — score 44 — path keyword: launch
- `components/dream.universal_asset_registry.tsx` — 1856 lines — score 36 — path keyword: registry
- `engine/runtime/enginWorkflowRegistry.ts` — 599 lines — score 36 — path keyword: registry
- `components/dream.panel.ChildSafetyPanel.tsx` — 586 lines — score 36 — path keyword: panel
- `engine/connectors/connectorRegistry.ts` — 520 lines — score 36 — path keyword: registry
- `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` — 456 lines — score 36 — path keyword: panel
- `engins/forgeengin/forge/forgeRegistry.ts` — 433 lines — score 36 — path keyword: registry
- `components/draggable/dream.DraggableModule.tsx` — 359 lines — score 36 — path keyword: module
- `engine/feature-build/featureManifest.ts` — 300 lines — score 36 — path keyword: manifest
- `components/gameengin/dream.cartridge.CartridgeLauncher.tsx` — 293 lines — score 36 — path keyword: launch
- `components/engines/code/panels/dream.panel.NotebookPanel.tsx` — 263 lines — score 36 — path keyword: panel
- `components/engines/brand/panels/dream.panel.CampaignsPanel.tsx` — 213 lines — score 36 — path keyword: panel
- `engine/dreams/DreamRegistry.tsx` — 119 lines — score 36 — path keyword: registry
## 18. Custom Engins

### Plain English
Custom Engins are the extension story: code, rules, manifests, registries, and capability boundaries that let DREAMengin grow by adding or composing new Engin behavior.

### What users experience
Users feel this when the product can add new studios, workflows, or creative capabilities without forcing a totally new app.

### Repo Evidence
Matched focused repo evidence: 105 files, about 27,271 readable source lines.

Behavior signals:
- persistence — 60 file hits
- auth — 53 file hits
- state — 47 file hits
- runtime — 44 file hits
- rendering — 40 file hits
- events — 23 file hits
- commerce — 19 file hits
- mobile touch — 12 file hits

Routes and APIs:
- /engines ← app/engines/page.tsx
- /engines/games/builder ← app/engines/games/builder/page.tsx
- /engines/games/library ← app/engines/games/library/page.tsx
- /engines/games/scores ← app/engines/games/scores/page.tsx
- /engines/code/notebook ← app/engines/code/notebook/page.tsx
- /engines/music/arrange ← app/engines/music/arrange/page.tsx
- /engines/music/library ← app/engines/music/library/page.tsx
- /engines/music/studio ← app/engines/music/studio/page.tsx
- /engines/code/ai ← app/engines/code/ai/page.tsx
- /engines/code/projects ← app/engines/code/projects/page.tsx
- /engines/lab/data ← app/engines/lab/data/page.tsx
- /engines/lab/experiments ← app/engines/lab/experiments/page.tsx
- /engines/lab/quantum ← app/engines/lab/quantum/page.tsx
- /engines/portfolio/assets ← app/engines/portfolio/assets/page.tsx
- /engines/portfolio/optimize ← app/engines/portfolio/optimize/page.tsx
- /engines/portfolio/quantum ← app/engines/portfolio/quantum/page.tsx

Components:
- ENGINES — app/engines/page.tsx
- EnginesHubPage — app/engines/page.tsx
- RenderDiagnosticsSurface — components/engines/render/dream.RenderServiceDiagnostics.tsx
- ACCENT — app/engines/games/builder/page.tsx
- NAV_ITEMS — app/engines/games/builder/page.tsx
- GamesBuilderPage — app/engines/games/builder/page.tsx
- ACCENT — app/engines/games/library/page.tsx
- NAV_ITEMS — app/engines/games/library/page.tsx
- GamesLibraryPage — app/engines/games/library/page.tsx
- ACCENT — app/engines/games/scores/page.tsx
- NAV_ITEMS — app/engines/games/scores/page.tsx
- GamesScoresPage — app/engines/games/scores/page.tsx
- ACCENT — app/engines/code/notebook/page.tsx
- NAV_ITEMS — app/engines/code/notebook/page.tsx

Hooks:
- useCallback — engins/rulesets/game/useGameEnginRuntime.ts
- useEffect — engins/rulesets/game/useGameEnginRuntime.ts
- useRef — engins/rulesets/game/useGameEnginRuntime.ts
- useState — engins/rulesets/game/useGameEnginRuntime.ts
- useGameEnginRuntime — engins/rulesets/game/useGameEnginRuntime.ts
- useMemoryAdapter — engins/rulesets/game/useGameEnginRuntime.ts
- useCallback — engins/rulesets/brand/useBrandEnginRuntime.ts
- useEffect — engins/rulesets/brand/useBrandEnginRuntime.ts
- useRef — engins/rulesets/brand/useBrandEnginRuntime.ts
- useState — engins/rulesets/brand/useBrandEnginRuntime.ts
- useBrandEnginRuntime — engins/rulesets/brand/useBrandEnginRuntime.ts
- useMemoryAdapter — engins/rulesets/brand/useBrandEnginRuntime.ts
- useCallback — engins/rulesets/code/useCodeEnginRuntime.ts
- useEffect — engins/rulesets/code/useCodeEnginRuntime.ts

Exports that define public behavior:
- ENGIN_CAPABILITY_PROFILES — engine/engin-runtime/EnginCapabilityTargets.ts
- CANONICAL_ENGIN_IDS — engine/engin-runtime/EnginCapabilityTargets.ts
- CANONICAL_ENGIN_ALIASES — engine/engin-runtime/EnginCapabilityTargets.ts
- CanonicalEnginId — engine/engin-runtime/EnginCapabilityTargets.ts
- CustomEnginProfileId — engine/engin-runtime/EnginCapabilityTargets.ts
- EnginProfileId — engine/engin-runtime/EnginCapabilityTargets.ts
- CapabilityTargetDimension — engine/engin-runtime/EnginCapabilityTargets.ts
- CapabilityTargetUnit — engine/engin-runtime/EnginCapabilityTargets.ts
- CapabilityTargetDirection — engine/engin-runtime/EnginCapabilityTargets.ts
- EnginCapabilityTarget — engine/engin-runtime/EnginCapabilityTargets.ts
- EnginCapabilityProfile — engine/engin-runtime/EnginCapabilityTargets.ts
- CapabilityTargetEvaluation — engine/engin-runtime/EnginCapabilityTargets.ts
- CapabilityProfileValidation — engine/engin-runtime/EnginCapabilityTargets.ts
- acceptanceValueForTarget — engine/engin-runtime/EnginCapabilityTargets.ts

Import/export connections:
- engine/engin-runtime/EnginBaseState
- engine/engin-runtime/EnginCapabilities
- engine/engin-runtime/EnginCapabilityTargets
- engine/engin-runtime/EnginRuleSetContract
- ./EnginBaseState
- ./EnginCapabilities
- ./EnginCapabilityTargets
- engins/contentengin/assetTypes
- ../cartridge
- ./EnginRuleSetContract
- ./EnginRuntime
- engine/engin-runtime
- ./EnginEventBus
- ./EnginIOAdapter

### Matched Files

Primary files:
- `engine/engin-runtime/EnginCapabilityTargets.ts` — 473 lines — score 152 — primary path, path keyword: capability
- `engins/rulesets/code/codeEnginRuleSet.ts` — 395 lines — score 144 — primary path, path keyword: ruleset
- `engins/rulesets/game/gameEnginRuleSet.ts` — 302 lines — score 144 — primary path, path keyword: ruleset
- `engine/engin-runtime/EnginRuleSetContract.ts` — 286 lines — score 144 — primary path, path keyword: ruleset
- `engins/rulesets/music/starMakerEnginRuleSet.ts` — 265 lines — score 144 — primary path, path keyword: ruleset
- `engins/rulesets/brand/brandEnginRuleSet.ts` — 241 lines — score 144 — primary path, path keyword: ruleset
- `engins/rulesets/lab/labEnginRuleSet.ts` — 233 lines — score 144 — primary path, path keyword: ruleset
- `engins/rulesets/content/contentEnginRuleSet.ts` — 37 lines — score 144 — primary path, path keyword: ruleset
- `engins/forgeengin/forge/forgeRegistry.ts` — 433 lines — score 136 — primary path, path keyword: registry
- `engins/gameengin/cartridges/manifest.ts` — 172 lines — score 136 — primary path, path keyword: manifest
- `engine/engin-runtime/EnginRuntimeRegistry.ts` — 35 lines — score 136 — primary path, path keyword: registry
- `engine/engin-runtime/index.ts` — 233 lines — score 132 — primary path
- `engine/runtime/enginWorkflowRegistry.ts` — 599 lines — score 128 — primary path, path keyword: registry
- `engine/engin-runtime/EnginCapabilityExecution.ts` — 515 lines — score 128 — primary path, path keyword: capability
- `types/module-manifest.ts` — 183 lines — score 128 — primary path, path keyword: manifest
- `engine/engin-runtime/EnginCapabilityScorecard.ts` — 122 lines — score 128 — primary path, path keyword: capability
- `engins/rulesets/game/useGameEnginRuntime.ts` — 119 lines — score 128 — primary path, path keyword: ruleset
- `engins/rulesets/brand/useBrandEnginRuntime.ts` — 109 lines — score 128 — primary path, path keyword: ruleset
- `engins/rulesets/code/useCodeEnginRuntime.ts` — 109 lines — score 128 — primary path, path keyword: ruleset
- `engins/rulesets/content/useContentEnginRuntime.ts` — 109 lines — score 128 — primary path, path keyword: ruleset
- `engins/rulesets/lab/useLabEnginRuntime.ts` — 109 lines — score 128 — primary path, path keyword: ruleset
- `engins/rulesets/music/useStarMakerEnginRuntime.ts` — 109 lines — score 128 — primary path, path keyword: ruleset
- `engins/forgeengin/enginpipe/artifact/manifest.ts` — 103 lines — score 128 — primary path, path keyword: manifest
- `engins/gameengin/cartridge-manifest.ts` — 65 lines — score 128 — primary path, path keyword: manifest
- `engins/gameengin/assets/BundleManifest.ts` — 40 lines — score 128 — primary path, path keyword: manifest
- `engins/rulesets/forge/index.ts` — 24 lines — score 128 — primary path, path keyword: ruleset
- `engins/rulesets/code/index.ts` — 23 lines — score 128 — primary path, path keyword: ruleset
- `engins/rulesets/dreams/index.ts` — 23 lines — score 128 — primary path, path keyword: ruleset
- `engins/rulesets/game/declarative.ts` — 23 lines — score 128 — primary path, path keyword: ruleset
- `engins/rulesets/lab/index.ts` — 23 lines — score 128 — primary path, path keyword: ruleset
- `engins/rulesets/music/index.ts` — 23 lines — score 128 — primary path, path keyword: ruleset
- `engins/rulesets/game/index.ts` — 17 lines — score 128 — primary path, path keyword: ruleset
- `engins/rulesets/homedream/index.ts` — 15 lines — score 128 — primary path, path keyword: ruleset
- `engins/contentengin/pipeline/writeManifest.ts` — 4 lines — score 128 — primary path, path keyword: manifest

Supporting files:
- `engine/engin-runtime/HotRuntime.ts` — 1164 lines — score 124 — primary path
- `engine/engin-runtime/EnginRuntime.ts` — 1082 lines — score 124 — primary path
- `engine/engin-runtime/EnginDomainCores.ts` — 758 lines — score 124 — primary path
- `engins/rulesets/workflowEngine.ts` — 281 lines — score 120 — primary path, path keyword: ruleset
- `engins/rulesets/useEnginWorkflow.ts` — 222 lines — score 120 — primary path, path keyword: ruleset
- `engins/rulesets/homedream/dream.homedream.physics.ts` — 36 lines — score 120 — primary path, path keyword: ruleset
- `engins/rulesets/homedream/dream.homedream.transforms.ts` — 36 lines — score 120 — primary path, path keyword: ruleset
- `engins/rulesets/homedream/dream.homedream.constants.ts` — 9 lines — score 120 — primary path, path keyword: ruleset
- `engins/forgeengin/forge/forgeIntelligence.ts` — 618 lines — score 116 — primary path
- `engine/engin-runtime/PremiumRuntimeQuality.ts` — 173 lines — score 116 — primary path
- `engins/gameengin/cartridges/loaders.ts` — 97 lines — score 116 — primary path
- `engins/gameengin/cartridges/index.ts` — 17 lines — score 116 — primary path
- `engine/engin-runtime/EnginBaseState.ts` — 496 lines — score 108 — primary path
- `engins/forgeengin/forge/forgeRituals.ts` — 375 lines — score 108 — primary path
- `engins/forgeengin/forge/forgeNexus.ts` — 311 lines — score 108 — primary path
- `engins/forgeengin/forge/forgeMomentum.ts` — 297 lines — score 108 — primary path
- `engine/engin-runtime/EnginCapabilities.ts` — 242 lines — score 108 — primary path
- `engins/forgeengin/forge/forgeBuild.ts` — 227 lines — score 108 — primary path
- `engins/gameengin/cartridges/reactCartridge.ts` — 138 lines — score 108 — primary path
- `engins/gameengin/cartridges/achievementEngine.ts` — 126 lines — score 108 — primary path
- `engine/engin-runtime/EnginPerformanceProbe.ts` — 94 lines — score 108 — primary path
- `engins/gameengin/cartridges/apiStubs.ts` — 75 lines — score 108 — primary path
- `engins/forgeengin/forge/useForgeActivity.ts` — 65 lines — score 108 — primary path
- `engine/engin-runtime/InternalMetrics.ts` — 47 lines — score 108 — primary path
- `engins/forgeengin/forge/engineForge.ts` — 234 lines — score 100 — primary path
- `engins/forgeengin/forge/useForgeBuild.ts` — 234 lines — score 100 — primary path
- `engine/engin-runtime/EnginIOAdapter.ts` — 214 lines — score 100 — primary path
- `engins/gameengin/cartridges/saveState.ts` — 145 lines — score 100 — primary path
- `engine/engin-runtime/EnginEventBus.ts` — 123 lines — score 100 — primary path
- `engine/engin-runtime/EnginHardwareCapabilities.ts` — 96 lines — score 100 — primary path
## 19. Full Website Customizability

### Plain English
Full website customizability covers appearance, profile editing, brand surfaces, themes, layouts, public profiles, settings, and any code that lets users change how their site or identity looks.

### What users experience
Users experience this as profile editing, theme choices, brand customization, public pages, custom identity, and the ability to make DREAMengin feel like their own site.

### Repo Evidence
Matched focused repo evidence: 95 files, about 28,851 readable source lines.

Behavior signals:
- commerce — 70 file hits
- auth — 59 file hits
- persistence — 57 file hits
- mobile touch — 44 file hits
- state — 38 file hits
- rendering — 26 file hits
- events — 25 file hits
- runtime — 10 file hits

Routes and APIs:
- /settings/appearance ← app/settings/appearance/page.tsx
- /profile/[handle] ← app/profile/[handle]/page.tsx
- /settings ← app/settings/page.tsx
- /edit-profiledream ← app/edit-profiledream/page.tsx
- /view-profile ← app/view-profile/page.tsx
- /profile ← app/profile/page.tsx
- /settings/help ← app/settings/help/page.tsx
- /settings/account ← app/settings/account/page.tsx
- /settings/security ← app/settings/security/page.tsx
- /settings/notifications ← app/settings/notifications/page.tsx
- /settings/safety ← app/settings/safety/page.tsx
- /settings/dreams ← app/settings/dreams/page.tsx
- /settings/widgets ← app/settings/widgets/page.tsx
- /settings/algorithm ← app/settings/algorithm/page.tsx
- /settings/controls ← app/settings/controls/page.tsx
- /settings/data ← app/settings/data/page.tsx

Components:
- ProfileCustomizeButton — components/profile/dream.ProfileCustomizeButton.tsx
- VoidThemeSection — app/settings/appearance/page.tsx
- GradientThemePicker — app/settings/appearance/page.tsx
- Slider — app/settings/appearance/page.tsx
- PresetCard — app/settings/appearance/page.tsx
- BgImageSection — app/settings/appearance/page.tsx
- ACCENT_SWATCHES — app/settings/appearance/page.tsx
- BG_STYLES — app/settings/appearance/page.tsx
- AppearanceSettingsPage — app/settings/appearance/page.tsx
- ACCENT — engins/engin.BrandingEngin.tsx
- ACCENT_LEGACY — engins/engin.BrandingEngin.tsx
- ACCENT_GRADIENT_LEGACY — engins/engin.BrandingEngin.tsx
- BrandingEngin — engins/engin.BrandingEngin.tsx
- PALETTE_PRESETS — engins/engin.BrandingEngin.tsx

Hooks:
- useCustomizeMode — components/profile/dream.ProfileCustomizeButton.tsx
- useTheme — app/settings/appearance/page.tsx
- useCustomizeMode — app/settings/appearance/page.tsx
- useCallback — app/settings/appearance/page.tsx
- useEffect — app/settings/appearance/page.tsx
- useRef — app/settings/appearance/page.tsx
- useState — app/settings/appearance/page.tsx
- useSharedDream — engins/engin.BrandingEngin.tsx
- useDaydreamPersistence — engins/engin.BrandingEngin.tsx
- useDaydreamState — engins/engin.BrandingEngin.tsx
- useBrandEnginRuntime — engins/engin.BrandingEngin.tsx
- useEnginWorkflow — engins/engin.BrandingEngin.tsx
- useForgeActivity — engins/engin.BrandingEngin.tsx
- useBrandingEnginBridge — engins/engin.BrandingEngin.tsx

Exports that define public behavior:
- default export — dream.ProfileCustomizeButton (components/profile/dream.ProfileCustomizeButton.tsx)
- default export — page (app/settings/appearance/page.tsx)
- default export — engin.BrandingEngin (engins/engin.BrandingEngin.tsx)
- default export — page (app/profile/[handle]/page.tsx)
- metadata — app/settings/page.tsx
- default export — page (app/settings/page.tsx)
- default export — page (app/edit-profiledream/page.tsx)
- metadata — app/view-profile/page.tsx
- default export — page (app/view-profile/page.tsx)
- default export — page (app/profile/page.tsx)
- WidgetType — components/profile/dream.widget.ProfileWidgetGrid.tsx
- WidgetSize — components/profile/dream.widget.ProfileWidgetGrid.tsx
- WidgetBgStyle — components/profile/dream.widget.ProfileWidgetGrid.tsx
- WidgetConfig — components/profile/dream.widget.ProfileWidgetGrid.tsx

Import/export connections:
- components/ui-system/CustomizeModeContext
- components/dream.ThemeApplicator
- components/providers/dream.ThemeProvider
- components/ui-system/theme-engine
- lucide-react
- next/link
- react
- components/daydream/dream.JourneyTrail
- hooks/useSharedDream
- daydreams/shared/useDaydreamPersistence
- daydreams/shared/useDaydreamState
- engine/os/index
- engins/forgeengin/enginpipe/index
- engins/rulesets/brand/useBrandEnginRuntime

### Matched Files

Primary files:
- `components/profile/dream.ProfileCustomizeButton.tsx` — 30 lines — score 164 — primary path, path keyword: profile
- `app/settings/appearance/page.tsx` — 750 lines — score 162 — primary path, path keyword: appearance
- `engins/engin.BrandingEngin.tsx` — 1260 lines — score 152 — primary path, path keyword: branding
- `app/profile/[handle]/page.tsx` — 252 lines — score 146 — primary path, path keyword: profile
- `app/settings/page.tsx` — 172 lines — score 142 — primary path
- `styles/globals.css` — 5174 lines — score 140 — primary path
- `app/edit-profiledream/page.tsx` — 561 lines — score 138 — primary path, path keyword: profile
- `app/view-profile/page.tsx` — 365 lines — score 138 — primary path, path keyword: profile
- `app/profile/page.tsx` — 18 lines — score 138 — primary path, path keyword: profile
- `components/profile/dream.widget.ProfileWidgetGrid.tsx` — 2209 lines — score 136 — primary path, path keyword: profile
- `components/profile/dream.ProfileCanvas.tsx` — 340 lines — score 136 — primary path, path keyword: profile
- `components/ui-system/theme-engine.ts` — 279 lines — score 128 — primary path, path keyword: theme
- `components/profile/dream.EditableAvatar.tsx` — 110 lines — score 128 — primary path, path keyword: profile
- `components/dream.ThemeApplicator.tsx` — 96 lines — score 128 — primary path, path keyword: theme
- `components/providers/dream.ThemeProvider.tsx` — 91 lines — score 128 — primary path, path keyword: theme
- `app/settings/help/page.tsx` — 94 lines — score 126 — primary path
- `styles/theme.css` — 34 lines — score 120 — primary path, path keyword: theme
- `app/settings/account/page.tsx` — 125 lines — score 118 — primary path
- `app/settings/account/dream.DangerZoneActions.tsx` — 325 lines — score 116 — primary path
- `app/settings/security/page.tsx` — 254 lines — score 110 — primary path
- `app/settings/notifications/page.tsx` — 207 lines — score 110 — primary path
- `app/settings/safety/page.tsx` — 179 lines — score 110 — primary path
- `app/settings/dreams/page.tsx` — 40 lines — score 110 — primary path
- `app/settings/widgets/page.tsx` — 40 lines — score 110 — primary path
- `app/settings/algorithm/page.tsx` — 39 lines — score 110 — primary path
- `app/settings/controls/page.tsx` — 19 lines — score 110 — primary path
- `app/settings/data/page.tsx` — 19 lines — score 110 — primary path
- `app/settings/privacy/page.tsx` — 19 lines — score 110 — primary path
- `app/settings/feed/page.tsx` — 14 lines — score 110 — primary path
- `app/settings/privacy/dream.PrivacyClient.tsx` — 394 lines — score 108 — primary path
- `app/settings/data/dream.DataClient.tsx` — 138 lines — score 108 — primary path
- `styles/home-dream.css` — 235 lines — score 100 — primary path
- `app/settings/controls/dream.ControlsClient.tsx` — 163 lines — score 100 — primary path
- `app/settings/dreams/dreams-layout-editor.tsx` — 83 lines — score 100 — primary path

Supporting files:
- `app/settings/controls/dream.PositionIndicatorToggle.tsx` — 54 lines — score 100 — primary path
- `styles/view-transitions.css` — 49 lines — score 100 — primary path
- `styles/dream-shell.css` — 24 lines — score 100 — primary path
- `app/api/settings/appearance/route.ts` — 92 lines — score 91 — supporting path, path keyword: appearance
- `components/ui-system/CustomizeModeContext.tsx` — 143 lines — score 73 — supporting path, path keyword: customize
- `app/api/settings/feed/route.ts` — 89 lines — score 63 — supporting path
- `app/api/settings/notifications/route.ts` — 84 lines — score 55 — supporting path
- `app/api/settings/privacy/route.ts` — 84 lines — score 55 — supporting path
- `components/panels/dream.panel.AppearancePanel.tsx` — 166 lines — score 52 — path keyword: appearance
- `components/dream.ProfileEditor.tsx` — 457 lines — score 44 — path keyword: profile
- `app/api/profile/route.ts` — 167 lines — score 38 — path keyword: profile
- `app/api/posts/profile/[userId]/route.ts` — 89 lines — score 38 — path keyword: profile
- `components/dreamengin/dream.widget.AppearanceWidget.tsx` — 281 lines — score 36 — path keyword: appearance
- `components/customize/dream.bar.CustomizeModeBar.tsx` — 92 lines — score 36 — path keyword: customize
- `components/spatial/dream.ProfileSpace.tsx` — 822 lines — score 28 — path keyword: profile
- `coresurfaces/dreamsurface.EditProfileDream.tsx` — 537 lines — score 28 — path keyword: profile
- `coresurfaces/dreamsurface.ViewProfile.tsx` — 354 lines — score 28 — path keyword: profile
- `components/panels/dream.panel.ProfilePanel.tsx` — 338 lines — score 28 — path keyword: profile
- `components/customize/panels/dream.panel.ColorPanel.tsx` — 234 lines — score 28 — path keyword: customize
- `components/activity/dream.ActivityProfile.tsx` — 184 lines — score 28 — path keyword: profile
- `components/customize/panels/dream.panel.LayoutPanel.tsx` — 141 lines — score 28 — path keyword: customize
- `components/customize/panels/dream.panel.EffectsPanel.tsx` — 112 lines — score 28 — path keyword: customize
- `components/customize/panels/dream.panel.FontPanel.tsx` — 110 lines — score 28 — path keyword: customize
- `components/customize/dream.bar.CustomizeToolbar.tsx` — 104 lines — score 28 — path keyword: customize
- `components/dream.ProfileSpace.tsx` — 102 lines — score 28 — path keyword: profile
- `components/dream.widget.ProfileWidgetBlock.tsx` — 102 lines — score 28 — path keyword: profile
- `components/dream.ProfileShareButton.tsx` — 74 lines — score 28 — path keyword: profile
- `components/dream.VoidThemeToggle.tsx` — 56 lines — score 28 — path keyword: theme
- `engins/contentengin/runtimeProfile.ts` — 55 lines — score 28 — path keyword: profile
- `engins/brandingengin/identity/logos.ts` — 51 lines — score 28 — path keyword: branding
## 20. Backend, System, Core & CoreSurfaces

### Plain English
Backend, system, core, and CoreSurfaces are the under-the-hood execution pieces: APIs, server routes, persistence, Supabase schema, shared runtime code, system surfaces, and infrastructure that keep the app functional.

### What users experience
Users feel this indirectly when data saves, pages load, auth works, messages arrive, runtime state persists, and core surfaces do not collapse while switching contexts.

### Repo Evidence
Matched focused repo evidence: 120 files, about 28,128 readable source lines.

Behavior signals:
- auth — 117 file hits
- persistence — 111 file hits
- commerce — 53 file hits
- events — 26 file hits
- state — 19 file hits
- rendering — 12 file hits
- runtime — 7 file hits
- mobile touch — 5 file hits

Routes and APIs:
- GET|POST|PATCH /api/game-scores ← app/api/game-scores/route.ts
- POST /api/ai/idari ← app/api/ai/idari/route.ts
- GET /api/connectors/instagram/oauth/callback ← app/api/connectors/instagram/oauth/callback/route.ts
- GET /api/connectors/youtube/oauth/callback ← app/api/connectors/youtube/oauth/callback/route.ts
- GET /api/setup/google-oauth ← app/api/setup/google-oauth/route.ts
- GET /api/auth/providers ← app/api/auth/providers/route.ts
- POST /api/forge/build ← app/api/forge/build/route.ts
- GET /api/feed ← app/api/feed/route.ts
- POST /api/admin/ai-chat ← app/api/admin/ai-chat/route.ts
- GET /api/connectors/youtube/oauth/start ← app/api/connectors/youtube/oauth/start/route.ts
- GET /api/connectors/instagram/oauth/start ← app/api/connectors/instagram/oauth/start/route.ts
- GET /api/auth/logout ← app/api/auth/logout/route.ts
- GET /api/dreamr/suggested ← app/api/dreamr/suggested/route.ts
- POST /api/ai/eams ← app/api/ai/eams/route.ts
- POST /api/ads/view ← app/api/ads/view/route.ts
- POST /api/ai/boogieman ← app/api/ai/boogieman/route.ts

Components:
- EditProfileDreamPage — coresurfaces/dreamsurface.EditProfileDream.tsx

Hooks:
- useSimulation — app/api/forge/build/route.ts
- useSharedDreamSession — app/api/shared-dream/sessions/[id]/route.ts
- useTapHoldMove — engine/generated/osArchitectureMap.ts
- useDaydreamPersistence — engine/generated/osArchitectureMap.ts
- useDaydreamState — engine/generated/osArchitectureMap.ts
- useDreamBarContext — engine/generated/osArchitectureMap.ts
- useDreamDMConversations — engine/generated/osArchitectureMap.ts
- useDreamDMDraft — engine/generated/osArchitectureMap.ts
- useDreamDMMessages — engine/generated/osArchitectureMap.ts
- useDreamSearch — engine/generated/osArchitectureMap.ts
- useMessagingCore — engine/generated/osArchitectureMap.ts
- useModuleBarIntent — engine/generated/osArchitectureMap.ts
- useNotifications — engine/generated/osArchitectureMap.ts
- useAgentSession — engine/generated/osArchitectureMap.ts

Exports that define public behavior:
- GET — app/api/game-scores/route.ts
- PATCH — app/api/game-scores/route.ts
- POST — app/api/game-scores/route.ts
- POST — app/api/ai/idari/route.ts
- GET — app/api/connectors/instagram/oauth/callback/route.ts
- GET — app/api/connectors/youtube/oauth/callback/route.ts
- GET — app/api/setup/google-oauth/route.ts
- OAuthProvidersResponse — app/api/auth/providers/route.ts
- UNKNOWN_OAUTH_PROVIDERS — app/api/auth/providers/route.ts
- getOAuthProvidersResponse — app/api/auth/providers/route.ts
- GET — app/api/auth/providers/route.ts
- fetchWithRetry — app/api/forge/build/route.ts
- POST — app/api/forge/build/route.ts
- UnifiedFeedEntry — app/api/feed/route.ts

Import/export connections:
- engins/gameengin/cartridges/manifest
- supabase/server/serverClient
- supabase/client/safeGetUser
- next/server
- zod
- utils/index
- engine/agents/idari
- dr-eams/ai/audit
- dr-eams/ai/boogieman
- dr-eams/ai/groq
- dr-eams/ai/rateLimit
- dr-eams/ai/schemas
- dr-eams/ai/triad
- engine/api/route

### Matched Files

Primary files:
- `app/api/game-scores/route.ts` — 177 lines — score 182 — primary path, path keyword: api
- `app/api/ai/idari/route.ts` — 309 lines — score 178 — primary path, path keyword: api
- `app/api/connectors/instagram/oauth/callback/route.ts` — 167 lines — score 174 — primary path, path keyword: api
- `app/api/connectors/youtube/oauth/callback/route.ts` — 146 lines — score 174 — primary path, path keyword: api
- `app/api/setup/google-oauth/route.ts` — 101 lines — score 174 — primary path, path keyword: api
- `app/api/auth/providers/route.ts` — 72 lines — score 174 — primary path, path keyword: api
- `supabase/migrations/20260210000001_ai_system_v2026.sql` — 454 lines — score 172 — primary path, path keyword: supabase
- `app/api/forge/build/route.ts` — 923 lines — score 170 — primary path, path keyword: api
- `app/api/feed/route.ts` — 230 lines — score 170 — primary path, path keyword: api
- `app/api/admin/ai-chat/route.ts` — 137 lines — score 170 — primary path, path keyword: api
- `app/api/connectors/youtube/oauth/start/route.ts` — 70 lines — score 166 — primary path, path keyword: api
- `app/api/connectors/instagram/oauth/start/route.ts` — 66 lines — score 166 — primary path, path keyword: api
- `app/api/auth/logout/route.ts` — 24 lines — score 166 — primary path, path keyword: api
- `supabase/migrations/20260210000000_widget_system_v2.sql` — 364 lines — score 164 — primary path, path keyword: supabase
- `supabase/migrations/20260210_ai_core.sql` — 280 lines — score 164 — primary path, path keyword: supabase
- `supabase/migrations/20260418000000_gameengin_core.sql` — 104 lines — score 164 — primary path, path keyword: supabase
- `app/api/dreamr/suggested/route.ts` — 235 lines — score 162 — primary path, path keyword: api
- `app/api/ai/eams/route.ts` — 193 lines — score 162 — primary path, path keyword: api
- `app/api/ads/view/route.ts` — 192 lines — score 162 — primary path, path keyword: api
- `app/api/ai/boogieman/route.ts` — 155 lines — score 162 — primary path, path keyword: api
- `app/api/account/delete-dream/route.ts` — 154 lines — score 162 — primary path, path keyword: api
- `app/api/dreams/feed/route.ts` — 152 lines — score 162 — primary path, path keyword: api
- `app/api/social/ipfs/route.ts` — 144 lines — score 162 — primary path, path keyword: api
- `app/api/drafts/[id]/route.ts` — 133 lines — score 162 — primary path, path keyword: api
- `app/api/skip-credits/earn/route.ts` — 126 lines — score 162 — primary path, path keyword: api
- `app/api/dreams/instances/route.ts` — 113 lines — score 162 — primary path, path keyword: api
- `app/api/favorites/route.ts` — 112 lines — score 162 — primary path, path keyword: api
- `app/api/dreamr/tally/route.ts` — 97 lines — score 162 — primary path, path keyword: api
- `app/api/marketplace/request/route.ts` — 90 lines — score 162 — primary path, path keyword: api
- `app/api/skip-credits/use/route.ts` — 81 lines — score 162 — primary path, path keyword: api
- `app/api/social/livekit/room/route.ts` — 68 lines — score 162 — primary path, path keyword: api
- `app/api/social/livekit/token/route.ts` — 67 lines — score 162 — primary path, path keyword: api
- `app/api/skip-credits/balance/route.ts` — 54 lines — score 162 — primary path, path keyword: api
- `app/api/connectors/webhooks/[provider]/route.ts` — 360 lines — score 154 — primary path, path keyword: api

Supporting files:
- `app/api/content/intelligence/route.ts` — 309 lines — score 154 — primary path, path keyword: api
- `app/api/dream-windows/[id]/route.ts` — 300 lines — score 154 — primary path, path keyword: api
- `app/api/content/voice-clone/route.ts` — 292 lines — score 154 — primary path, path keyword: api
- `app/api/ai/boogieman/child-safety/route.ts` — 264 lines — score 154 — primary path, path keyword: api
- `app/api/ai/execute/route.ts` — 252 lines — score 154 — primary path, path keyword: api
- `app/api/comments/route.ts` — 209 lines — score 154 — primary path, path keyword: api
- `app/api/content/generative-fill/route.ts` — 186 lines — score 154 — primary path, path keyword: api
- `app/api/dream-windows/route.ts` — 185 lines — score 154 — primary path, path keyword: api
- `app/api/metrics/platform/route.ts` — 185 lines — score 154 — primary path, path keyword: api
- `app/api/profile/route.ts` — 167 lines — score 154 — primary path, path keyword: api
- `app/api/likes/route.ts` — 164 lines — score 154 — primary path, path keyword: api
- `app/api/ai/boogieman/privacy-event/route.ts` — 161 lines — score 154 — primary path, path keyword: api
- `app/api/admin/child-safety/route.ts` — 146 lines — score 154 — primary path, path keyword: api
- `app/api/connectors/[provider]/verify/route.ts` — 145 lines — score 154 — primary path, path keyword: api
- `app/api/marketplace/route.ts` — 142 lines — score 154 — primary path, path keyword: api
- `app/api/connectors/[provider]/connect/route.ts` — 138 lines — score 154 — primary path, path keyword: api
- `app/api/scheduled-posts/route.ts` — 138 lines — score 154 — primary path, path keyword: api
- `app/api/connectors/cron/route.ts` — 134 lines — score 154 — primary path, path keyword: api
- `app/api/shared-dream/sessions/[id]/route.ts` — 134 lines — score 154 — primary path, path keyword: api
- `app/api/activity/track/route.ts` — 122 lines — score 154 — primary path, path keyword: api
- `app/api/drafts/route.ts` — 119 lines — score 154 — primary path, path keyword: api
- `app/api/posts/[id]/save/route.ts` — 114 lines — score 154 — primary path, path keyword: api
- `app/api/journey/route.ts` — 110 lines — score 154 — primary path, path keyword: api
- `app/api/home-layout/route.ts` — 109 lines — score 154 — primary path, path keyword: api
- `app/api/close-friends/route.ts` — 108 lines — score 154 — primary path, path keyword: api
- `app/api/account/delete-data/route.ts` — 99 lines — score 154 — primary path, path keyword: api
- `app/api/embed-feed/route.ts` — 99 lines — score 154 — primary path, path keyword: api
- `app/api/connectors/[provider]/sync/route.ts` — 97 lines — score 154 — primary path, path keyword: api
- `app/api/posts/[id]/view/route.ts` — 95 lines — score 154 — primary path, path keyword: api
- `app/api/messages/boards/route.ts` — 92 lines — score 154 — primary path, path keyword: api

<!-- DREAMENGIN_PRODUCT_README:END -->
