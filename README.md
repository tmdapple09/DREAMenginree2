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
- [8. DreamR â Human Media](#8-dreamr-human-media)
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
This is the build shape of DREAMengin: the Next.js app, TypeScript source, package scripts, styling system, GitHub automation, Supabase setup, and major folders that make the product ship as one web-native system.

### What users experience
Users do not see the monorepo directly, but this layout decides whether the app loads, routes, stores data, renders screens, and keeps every Engin available from one product shell.

### Repo Evidence
Matched focused repo evidence: 80 files, about 33,928 readable source lines.

Behavior signals:
- auth â 50 file hits
- commerce â 43 file hits
- persistence â 40 file hits
- rendering â 34 file hits
- state â 33 file hits
- events â 28 file hits
- runtime â 26 file hits
- mobile touch â 23 file hits

Routes and APIs:
- /edit-profiledream â app/edit-profiledream/page.tsx
- /login â app/login/page.tsx
- /join â app/join/page.tsx
- /discover â app/discover/page.tsx
- /view-profile â app/view-profile/page.tsx
- /ads â app/ads/page.tsx
- /lab â app/lab/page.tsx
- /onboarding â app/onboarding/page.tsx
- /settings â app/settings/page.tsx
- /marketplace â app/marketplace/page.tsx
- /engines â app/engines/page.tsx
- /shop â app/shop/page.tsx
- /dreamr â app/dreamr/page.tsx
- /notes â app/notes/page.tsx
- /homedream â app/homedream/page.tsx
- /messages â app/messages/page.tsx

Components:
- EditProfileDreamPage â app/edit-profiledream/page.tsx
- LoginPageInner â app/login/page.tsx
- LoginPage â app/login/page.tsx
- JoinPage â app/join/page.tsx
- DiscoverPage â app/discover/page.tsx
- ViewProfilePage â app/view-profile/page.tsx
- AdsPage â app/ads/page.tsx
- VisibilityBadge â app/lab/page.tsx
- ProjectCard â app/lab/page.tsx
- LabPage â app/lab/page.tsx
- OnboardingPage â app/onboarding/page.tsx
- SettingsPage â app/settings/page.tsx
- MarketplacePage â app/marketplace/page.tsx
- EnginesHubPage â app/engines/page.tsx

Hooks:
- useRouter â app/edit-profiledream/page.tsx
- useCallback â app/edit-profiledream/page.tsx
- useEffect â app/edit-profiledream/page.tsx
- useRef â app/edit-profiledream/page.tsx
- useState â app/edit-profiledream/page.tsx
- useRouter â app/login/page.tsx
- useSearchParams â app/login/page.tsx
- useEffect â app/login/page.tsx
- useMemo â app/login/page.tsx
- useState â app/login/page.tsx
- useRouter â app/join/page.tsx
- useEffect â app/join/page.tsx
- useMemo â app/join/page.tsx
- useState â app/join/page.tsx

Exports that define public behavior:
- safeGetUser â supabase/client/safeGetUser.ts
- default export â next.config (next.config.mjs)
- SupabaseCookieStore â supabase/server/serverClient.ts
- createServerClientWithCookies â supabase/server/serverClient.ts
- createServerClient â supabase/server/serverClient.ts
- createServerClientWithCustomCookies â supabase/server/serverClient.ts
- createServiceClient â supabase/server/serverClient.ts
- getServerSiteOrigin â supabase/config.ts
- buildAuthCallbackUrl â supabase/config.ts
- getSupabaseAuthCallbackUrl â supabase/config.ts
- createClient â supabase/client/client.ts
- default export â page (app/edit-profiledream/page.tsx)
- default export â page (app/login/page.tsx)
- default export â page (app/join/page.tsx)

Import/export connections:
- @supabase/supabase-js
- types/supabase
- @supabase/ssr
- next/headers
- ../config
- components/activity/dream.ActivityProfile
- components/profile/dream.widget.ProfileWidgetGrid
- components/ui/dream.DreamWord
- supabase/client/client
- supabase/client/safeGetUser
- lucide-react
- next/link
- next/navigation
- react

### Matched Files

Primary files:
- `supabase/client/safeGetUser.ts` â 40 lines â score 134 â primary path, path keyword: supabase
- `next.config.mjs` â 207 lines â score 130 â primary path, path keyword: next
- `supabase/server/serverClient.ts` â 191 lines â score 130 â primary path, path keyword: supabase
- `supabase/config.ts` â 55 lines â score 130 â primary path, path keyword: supabase
- `supabase/client/client.ts` â 27 lines â score 126 â primary path, path keyword: supabase
- `pnpm-workspace.yaml` â 10 lines â score 122 â primary path, path keyword: pnpm
- `app/edit-profiledream/page.tsx` â 561 lines â score 116 â primary path
- `app/login/page.tsx` â 377 lines â score 116 â primary path
- `app/join/page.tsx` â 374 lines â score 116 â primary path
- `app/discover/page.tsx` â 370 lines â score 116 â primary path
- `app/view-profile/page.tsx` â 365 lines â score 116 â primary path
- `app/ads/page.tsx` â 267 lines â score 116 â primary path
- `app/lab/page.tsx` â 235 lines â score 116 â primary path
- `app/onboarding/page.tsx` â 210 lines â score 116 â primary path
- `app/settings/page.tsx` â 172 lines â score 116 â primary path
- `app/marketplace/page.tsx` â 137 lines â score 116 â primary path
- `app/engines/page.tsx` â 130 lines â score 116 â primary path
- `app/shop/page.tsx` â 130 lines â score 116 â primary path
- `package.json` â 116 lines â score 116 â primary path
- `app/dreamr/page.tsx` â 81 lines â score 116 â primary path
- `app/notes/page.tsx` â 81 lines â score 116 â primary path
- `app/homedream/page.tsx` â 75 lines â score 116 â primary path
- `app/messages/page.tsx` â 69 lines â score 116 â primary path
- `app/connectors/page.tsx` â 65 lines â score 116 â primary path
- `app/feed-settings/page.tsx` â 19 lines â score 116 â primary path
- `engins/engin.StarMakerEngin.tsx` â 4303 lines â score 112 â primary path
- `engins/engin.CodeEngin.tsx` â 1286 lines â score 112 â primary path
- `eslint.config.mjs` â 104 lines â score 112 â primary path
- `engins/engin.GameEngin.tsx` â 2953 lines â score 108 â primary path
- `engins/engin.LabEngin.tsx` â 1989 lines â score 108 â primary path
- `engins/dream.ForgeEngin.tsx` â 1928 lines â score 108 â primary path
- `engins/engin.BrandingEngin.tsx` â 1260 lines â score 108 â primary path
- `.github/workflows/readme-autosync.yml` â 170 lines â score 108 â primary path
- `.github/workflows/preflight.yml` â 137 lines â score 108 â primary path

Supporting files:
- `engins/forgeengin/enginpipe/shell/ArtifactSlot.tsx` â 120 lines â score 108 â primary path
- `.github/workflows/codeql.yml` â 104 lines â score 108 â primary path
- `.github/workflows/vercel-deploy.yml` â 101 lines â score 108 â primary path
- `.github/workflows/export-src-only.yml` â 74 lines â score 108 â primary path
- `engins/dream.QuantumCircuitCanvas.tsx` â 522 lines â score 104 â primary path
- `engins/portfolio/dream.PortfolioEngin.tsx` â 501 lines â score 104 â primary path
- `engine/runtime/index.ts` â 478 lines â score 104 â primary path
- `components/runtime/dream.RuntimeView.tsx` â 432 lines â score 104 â primary path
- `engins/renderengin/RenderEnginViewport.tsx` â 378 lines â score 104 â primary path
- `components/runtime/dream.DualRuntimeContainer.tsx` â 246 lines â score 104 â primary path
- `engine/runtime/moduleRegistry.ts` â 170 lines â score 104 â primary path
- `.github/workflows/dreamengin-preflight.yml` â 133 lines â score 104 â primary path
- `components/providers/dream.ThemeProvider.tsx` â 91 lines â score 104 â primary path
- `engins/contentengin/ImplicitAssetWorkspace.tsx` â 77 lines â score 104 â primary path
- `engins/autoopen/dream.AutoOpenGameEngin.tsx` â 42 lines â score 104 â primary path
- `components/providers/dream.GodTierProvider.tsx` â 37 lines â score 104 â primary path
- `tsconfig.app.json` â 32 lines â score 104 â primary path
- `tsconfig.server.json` â 29 lines â score 104 â primary path
- `tsconfig.worker.json` â 28 lines â score 104 â primary path
- `tsconfig.games.json` â 27 lines â score 104 â primary path
- `tsconfig.test.json` â 26 lines â score 104 â primary path
- `styles/globals.css` â 5174 lines â score 100 â primary path
- `components/runtime/dream.shell.RuntimeShell.tsx` â 352 lines â score 100 â primary path
- `styles/home-dream.css` â 235 lines â score 100 â primary path
- `tailwind.config.ts` â 99 lines â score 100 â primary path
- `styles/view-transitions.css` â 49 lines â score 100 â primary path
- `components/providers/dream.AppSurfaceShell.tsx` â 45 lines â score 100 â primary path
- `styles/theme.css` â 34 lines â score 100 â primary path
- `tsconfig.base.json` â 32 lines â score 100 â primary path
- `styles/dream-shell.css` â 24 lines â score 100 â primary path
## 5. The Engins and DayDreams

### Plain English
Engins are the production systems; DayDreams are the user-facing creative spaces around them. This section connects engine code, pages, panels, shells, and components that let users create code, games, music, simulations, media, and brand work.

### What users experience
A user experiences this as switching into a real studio surface: CodeEngin, GameEngin, ContentEngin, LabEngin, StarMakerEngin, BrandingEngin, ForgeEngin, and their DayDream wrappers.

### Repo Evidence
Matched focused repo evidence: 110 files, about 43,447 readable source lines.

Behavior signals:
- auth â 73 file hits
- persistence â 60 file hits
- commerce â 53 file hits
- state â 52 file hits
- rendering â 47 file hits
- runtime â 40 file hits
- mobile touch â 40 file hits
- events â 36 file hits

Routes and APIs:
- /daydream/games/engin â app/daydream/games/engin/page.tsx
- /daydream/brand/engin â app/daydream/brand/engin/page.tsx
- /daydream/code/engin â app/daydream/code/engin/page.tsx
- /daydream/create/engin â app/daydream/create/engin/page.tsx
- /daydream/lab/engin â app/daydream/lab/engin/page.tsx
- /daydream/music/engin â app/daydream/music/engin/page.tsx
- /daydream/code â app/daydream/code/page.tsx
- /daydream/lab â app/daydream/lab/page.tsx
- /daydream/games â app/daydream/games/page.tsx
- /daydream/create â app/daydream/create/page.tsx
- /daydream/music â app/daydream/music/page.tsx
- /daydream/brand â app/daydream/brand/page.tsx
- /daydream/forge â app/daydream/forge/page.tsx
- /daydream/lab/portfolio â app/daydream/lab/portfolio/page.tsx
- /engines/music/studio â app/engines/music/studio/page.tsx
- /daydream/music/upload â app/daydream/music/upload/page.tsx

Components:
- GamesEnginRedirectPage â app/daydream/games/engin/page.tsx
- BrandEnginRedirectPage â app/daydream/brand/engin/page.tsx
- CodeEnginRedirectPage â app/daydream/code/engin/page.tsx
- CreateEnginRedirectPage â app/daydream/create/engin/page.tsx
- LabEnginRedirectPage â app/daydream/lab/engin/page.tsx
- MusicEnginRedirectPage â app/daydream/music/engin/page.tsx
- CodeDaydreamPage â app/daydream/code/page.tsx
- LabDaydreamPage â app/daydream/lab/page.tsx
- GamesDaydreamPage â app/daydream/games/page.tsx
- CreateDaydreamPage â app/daydream/create/page.tsx
- MusicArtistHubPage â app/daydream/music/page.tsx
- BrandDaydreamPage â app/daydream/brand/page.tsx
- ForgeDaydreamPage â app/daydream/forge/page.tsx
- OptimizeroPage â app/daydream/lab/portfolio/page.tsx

Hooks:
- useSharedDream â engins/engin.StarMakerEngin.tsx
- useDaydreamPersistence â engins/engin.StarMakerEngin.tsx
- useDaydreamState â engins/engin.StarMakerEngin.tsx
- useStarMakerEnginRuntime â engins/engin.StarMakerEngin.tsx
- useEnginWorkflow â engins/engin.StarMakerEngin.tsx
- useForgeActivity â engins/engin.StarMakerEngin.tsx
- useEnginCoopSync â engins/engin.StarMakerEngin.tsx
- useCallback â engins/engin.StarMakerEngin.tsx
- useEffect â engins/engin.StarMakerEngin.tsx
- useMemo â engins/engin.StarMakerEngin.tsx
- useRef â engins/engin.StarMakerEngin.tsx
- useState â engins/engin.StarMakerEngin.tsx
- useGlobalCrashListener â engins/engin.GameEngin.tsx
- useDaydreamPersistence â engins/engin.GameEngin.tsx

Exports that define public behavior:
- default export â page (app/daydream/games/engin/page.tsx)
- default export â page (app/daydream/brand/engin/page.tsx)
- default export â page (app/daydream/code/engin/page.tsx)
- default export â page (app/daydream/create/engin/page.tsx)
- default export â page (app/daydream/lab/engin/page.tsx)
- default export â page (app/daydream/music/engin/page.tsx)
- metadata â app/daydream/code/page.tsx
- default export â page (app/daydream/code/page.tsx)
- metadata â app/daydream/lab/page.tsx
- default export â page (app/daydream/lab/page.tsx)
- metadata â app/daydream/games/page.tsx
- default export â page (app/daydream/games/page.tsx)
- metadata â app/daydream/create/page.tsx
- default export â page (app/daydream/create/page.tsx)

Import/export connections:
- next/navigation
- next/server
- components/daydream/dream.OpenDaydreamSideBButton
- components/daydream/dream.shell.DaydreamShell
- components/ui/dream.AuthenticatedPageHeader
- engins/engin.CodeEngin
- engine/dev-bypass
- supabase/server/serverClient
- supabase/client/safeGetUser
- lucide-react
- next/link
- next/dynamic
- components/games/dream.GamesHub
- engins/autoopen/dream.AutoOpenGameEngin

### Matched Files

Primary files:
- `app/daydream/games/engin/page.tsx` â 30 lines â score 152 â primary path, path keyword: engin
- `app/daydream/brand/engin/page.tsx` â 11 lines â score 152 â primary path, path keyword: engin
- `app/daydream/code/engin/page.tsx` â 11 lines â score 152 â primary path, path keyword: engin
- `app/daydream/create/engin/page.tsx` â 11 lines â score 152 â primary path, path keyword: engin
- `app/daydream/lab/engin/page.tsx` â 11 lines â score 152 â primary path, path keyword: engin
- `app/daydream/music/engin/page.tsx` â 11 lines â score 152 â primary path, path keyword: engin
- `app/daydream/code/page.tsx` â 1118 lines â score 142 â primary path, path keyword: daydream
- `app/daydream/lab/page.tsx` â 1062 lines â score 142 â primary path, path keyword: daydream
- `app/daydream/games/page.tsx` â 365 lines â score 142 â primary path, path keyword: daydream
- `app/daydream/create/page.tsx` â 107 lines â score 142 â primary path, path keyword: daydream
- `app/daydream/music/page.tsx` â 87 lines â score 142 â primary path, path keyword: daydream
- `app/daydream/brand/page.tsx` â 62 lines â score 142 â primary path, path keyword: daydream
- `app/daydream/forge/page.tsx` â 348 lines â score 138 â primary path, path keyword: daydream
- `app/daydream/lab/portfolio/page.tsx` â 189 lines â score 138 â primary path, path keyword: daydream
- `app/engines/music/studio/page.tsx` â 40 lines â score 138 â primary path, path keyword: studio
- `engins/engin.StarMakerEngin.tsx` â 4303 lines â score 134 â primary path, path keyword: engin
- `engins/engin.GameEngin.tsx` â 2953 lines â score 134 â primary path, path keyword: engin
- `engins/engin.LabEngin.tsx` â 1989 lines â score 134 â primary path, path keyword: engin
- `engins/engin.CodeEngin.tsx` â 1286 lines â score 134 â primary path, path keyword: engin
- `app/daydream/music/upload/page.tsx` â 210 lines â score 134 â primary path, path keyword: daydream
- `components/daydream/dream.CodeDreamIDE.tsx` â 1707 lines â score 130 â primary path, path keyword: daydream
- `engins/engin.BrandingEngin.tsx` â 1260 lines â score 130 â primary path, path keyword: engin
- `components/daydream/dream.shell.DaydreamShell.tsx` â 465 lines â score 130 â primary path, path keyword: daydream
- `app/daydream/game/page.tsx` â 31 lines â score 130 â primary path, path keyword: daydream
- `components/daydream/dream.LabDreamIDE.tsx` â 1294 lines â score 126 â primary path, path keyword: daydream
- `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` â 684 lines â score 126 â primary path, path keyword: daydream
- `components/daydream/dream.NGNEngin.tsx` â 600 lines â score 126 â primary path, path keyword: daydream
- `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx` â 378 lines â score 126 â primary path, path keyword: daydream
- `components/daydream/dream.constellationmap.tsx` â 356 lines â score 126 â primary path, path keyword: daydream
- `components/daydream/dream.DiffViewer.tsx` â 353 lines â score 126 â primary path, path keyword: daydream
- `app/daydream/game/dream.shell.ImmersiveGameShell.tsx` â 330 lines â score 126 â primary path, path keyword: daydream
- `components/daydream/dream.StandaloneEnginSurface.tsx` â 38 lines â score 126 â primary path, path keyword: daydream
- `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx` â 668 lines â score 122 â primary path, path keyword: daydream
- `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` â 456 lines â score 122 â primary path, path keyword: daydream

Supporting files:
- `components/daydream/dream.JourneyTrail.tsx` â 386 lines â score 122 â primary path, path keyword: daydream
- `components/daydream/starmaker/dream.panel.CompingPanel.tsx` â 347 lines â score 122 â primary path, path keyword: daydream
- `components/daydream/dream.OpenDaydreamSideBButton.tsx` â 19 lines â score 122 â primary path, path keyword: daydream
- `app/daydream/game/dream.GamePageClient.tsx` â 5 lines â score 122 â primary path, path keyword: daydream
- `engins/engin.ContentEngin.tsx` â 4 lines â score 122 â primary path, path keyword: engin
- `app/engines/page.tsx` â 130 lines â score 116 â primary path
- `app/engines/music/arrange/page.tsx` â 40 lines â score 116 â primary path
- `app/engines/music/library/page.tsx` â 40 lines â score 116 â primary path
- `daydreams/lab/page.tsx` â 486 lines â score 112 â primary path
- `daydreams/music/page.tsx` â 393 lines â score 112 â primary path
- `daydreams/games/page.tsx` â 356 lines â score 112 â primary path
- `daydreams/shared/useDaydreamPersistence.ts` â 147 lines â score 112 â primary path
- `components/engines/shared/dream.makeEnginApp.tsx` â 64 lines â score 112 â primary path
- `daydreams/brand/page.tsx` â 57 lines â score 112 â primary path
- `app/engines/games/builder/page.tsx` â 51 lines â score 112 â primary path
- `app/engines/games/library/page.tsx` â 51 lines â score 112 â primary path
- `app/engines/games/scores/page.tsx` â 51 lines â score 112 â primary path
- `app/engines/code/notebook/page.tsx` â 42 lines â score 112 â primary path
- `components/engines/music/dream.MusicEnginApp.tsx` â 33 lines â score 112 â primary path
- `app/engines/code/ai/page.tsx` â 32 lines â score 112 â primary path
- `app/engines/code/projects/page.tsx` â 32 lines â score 112 â primary path
- `engins/renderengin/runtimeRegistration.ts` â 20 lines â score 112 â primary path
- `components/engines/create/dream.CreateEnginApp.tsx` â 5 lines â score 112 â primary path
- `engins/gameengin/index.ts` â 3927 lines â score 108 â primary path
- `engins/dream.ForgeEngin.tsx` â 1928 lines â score 108 â primary path
- `daydreams/code/page.tsx` â 545 lines â score 108 â primary path
- `daydreams/create/page.tsx` â 456 lines â score 108 â primary path
- `engins/forgeengin/forge/forgeRegistry.ts` â 433 lines â score 108 â primary path
- `engins/rulesets/code/codeEnginRuleSet.ts` â 395 lines â score 108 â primary path
- `engins/rulesets/game/gameEnginRuleSet.ts` â 302 lines â score 108 â primary path
## 6. Dual Runtimes

### Plain English
Dual runtimes are the split execution model that lets DREAMengin keep two active product worlds available at once instead of replacing one page with another. The runtime layer tracks which world is active, which surface is dominant, and how state, snapshots, and handoffs move between HomeDream, DreamSpace, Engins, and shared surfaces.

### What users experience
Users feel this as a two-lane workspace: one side can keep HomeDream, DreamSpace, a studio, preview, editor, remote surface, or companion panel alive while the other side changes. Switching context should preserve the active runtime instead of making the user start over.

### Key interaction model
- DualRuntimeContainer owns the user-facing split runtime shell and renders runtime worlds through RuntimeView and RuntimeShell.
- The runtime helpers expose world changes, HomeDream activation, DreamSpace activation, surface activation, focus keys, movement, and dominant-runtime swaps.
- DreamDmBar is the control layer that should be able to drive these runtime changes without acting like a separate app destination.
- The important user behavior is continuity: open, swap, collapse, expand, or refocus a runtime surface without losing the state the user was already carrying.

### Repo Evidence
Matched focused repo evidence: 26 files, about 7,005 readable source lines.

Behavior signals:
- runtime â 19 file hits
- state â 17 file hits
- rendering â 15 file hits
- commerce â 13 file hits
- events â 11 file hits
- auth â 9 file hits
- mobile touch â 5 file hits
- persistence â 2 file hits

Routes and APIs:
- /dreamdmbar/dualruntime â app/dreamdmbar/dualruntime/page.tsx

Components:
- DreamDMBarDualRuntimePage â app/dreamdmbar/dualruntime/page.tsx
- DualRuntimeContainer â components/runtime/dream.DualRuntimeContainer.tsx
- RuntimeView â components/runtime/dream.RuntimeView.tsx
- RuntimeShell â components/runtime/dream.shell.RuntimeShell.tsx

Hooks:
- useDreamSystem â app/dreamdmbar/dualruntime/page.tsx
- useEffect â app/dreamdmbar/dualruntime/page.tsx
- useState â app/dreamdmbar/dualruntime/page.tsx
- useCallback â components/runtime/dream.DualRuntimeContainer.tsx
- useContext â components/runtime/dream.DualRuntimeContainer.tsx
- useMemo â components/runtime/dream.DualRuntimeContainer.tsx
- useRef â components/runtime/dream.DualRuntimeContainer.tsx
- useState â components/runtime/dream.DualRuntimeContainer.tsx
- useDualRuntime â components/runtime/dream.DualRuntimeContainer.tsx
- useCallback â engine/runtime/useDualRuntime.ts
- useEffect â engine/runtime/useDualRuntime.ts
- useRef â engine/runtime/useDualRuntime.ts
- useState â engine/runtime/useDualRuntime.ts
- useDualRuntime â engine/runtime/useDualRuntime.ts

Exports that define public behavior:
- default export â page (app/dreamdmbar/dualruntime/page.tsx)
- RuntimeWorld â engine/runtime/dualRuntime.ts
- DualRuntimeState â engine/runtime/dualRuntime.ts
- TorusDomain â engine/runtime/dualRuntime.ts
- setRuntimeWorld â engine/runtime/dualRuntime.ts
- swapDominantRuntime â engine/runtime/dualRuntime.ts
- makeHomeActiveTop â engine/runtime/dualRuntime.ts
- makeHomeDreamSpaceActive â engine/runtime/dualRuntime.ts
- makeDreamSpaceActiveSurface â engine/runtime/dualRuntime.ts
- isHomeActiveTop â engine/runtime/dualRuntime.ts
- worldsEqual â engine/runtime/dualRuntime.ts
- torusFocusKey â engine/runtime/dualRuntime.ts
- moveTorus â engine/runtime/dualRuntime.ts
- useDualRuntime â components/runtime/dream.DualRuntimeContainer.tsx

Import/export connections:
- components/shared-dream/dream.SharedDreamRuntime
- dreamdmbar/runtime/DreamSystemContext
- react
- engine/identity/canonical-names
- components/panels/panelTypes
- engine/runtime/dualRuntime
- engine/runtime/iEngine
- ./dualRuntimeBridge
- ./dualRuntime
- engine/runtime/madMaxiSnapshotBridge
- events
- pending
- app/dreamdmbar/_components/HomeDreamRegion
- components/dreams/dreamsurface.dreamspace

### Matched Files

Primary files:
- `app/dreamdmbar/dualruntime/page.tsx` â 102 lines â score 134 â primary path, path keyword: dualruntime
- `engine/runtime/dualRuntime.ts` â 259 lines â score 130 â primary path, path keyword: dualruntime
- `components/runtime/dream.DualRuntimeContainer.tsx` â 246 lines â score 112 â primary path
- `engine/runtime/useDualRuntime.ts` â 184 lines â score 112 â primary path
- `engine/runtime/useDualRuntimePersistence.ts` â 187 lines â score 108 â primary path
- `engine/runtime/dualRuntimeBridge.ts` â 873 lines â score 104 â primary path
- `components/runtime/dream.RuntimeView.tsx` â 432 lines â score 104 â primary path
- `components/runtime/dream.shell.RuntimeShell.tsx` â 352 lines â score 100 â primary path
- `engine/vm/dual-runtime.ts` â 259 lines â score 85 â supporting path, path keyword: dual runtime
- `engine/vm/snapshot.ts` â 334 lines â score 81 â supporting path, path keyword: snapshot
- `engine/runtime/iEngine.ts` â 362 lines â score 67 â supporting path
- `engine/vm/README.md` â 253 lines â score 67 â supporting path
- `engine/vm/index.ts` â 47 lines â score 67 â supporting path
- `engine/runtime/dreamOSBus.ts` â 792 lines â score 63 â supporting path
- `engine/vm/bus-events.ts` â 56 lines â score 63 â supporting path
- `engine/vm/wasmGpuVM.ts` â 510 lines â score 59 â supporting path
- `engine/runtime/snapshotFingerprint.ts` â 145 lines â score 59 â supporting path
- `engine/vm/bufferManager.ts` â 328 lines â score 55 â supporting path
- `engine/vm/types.ts` â 296 lines â score 55 â supporting path
- `engine/vm/pipelineCache.ts` â 276 lines â score 55 â supporting path
- `engine/vm/inter-vm-messaging.ts` â 199 lines â score 55 â supporting path
- `engine/vm/security.ts` â 141 lines â score 55 â supporting path
- `engine/vm/wasm-features.ts` â 137 lines â score 55 â supporting path
- `engine/vm/resource-quota.ts` â 119 lines â score 55 â supporting path
- `engine/runtime/madMaxiSnapshotBridge.ts` â 67 lines â score 55 â supporting path
- `engine/vm/dualVMCoordinator.ts` â 49 lines â score 55 â supporting path

Supporting files:
- None found.
## 7. Shared Dreams

### Plain English
Shared Dreams are the collaboration and publishing layer for Dreams that can be saved, shown, shared, synchronized, or experienced by more than one person.

### What users experience
Users feel this when a Dream becomes something social: visible posts, shared sessions, public/private access, saved creative objects, and collaboration signals.

### Repo Evidence
Matched focused repo evidence: 21 files, about 4,348 readable source lines.

Behavior signals:
- auth â 19 file hits
- persistence â 16 file hits
- state â 13 file hits
- commerce â 13 file hits
- events â 10 file hits
- runtime â 7 file hits
- rendering â 7 file hits
- mobile touch â 5 file hits

Routes and APIs:
- GET|PATCH /api/shared-dream/sessions/[id] â app/api/shared-dream/sessions/[id]/route.ts
- GET|POST /api/shared-dream/sessions â app/api/shared-dream/sessions/route.ts
- GET|POST /api/dreams/feed â app/api/dreams/feed/route.ts
- GET /api/dreams/instances â app/api/dreams/instances/route.ts
- POST /api/dreams/transfer â app/api/dreams/transfer/route.ts

Components:
- SharedDreamProvider â components/shared-dream/dream.SharedDreamProvider.tsx
- SharedDreamRuntimeInner â components/shared-dream/dream.SharedDreamRuntime.tsx
- SharedDreamRuntime â components/shared-dream/dream.SharedDreamRuntime.tsx
- InviteFlow â components/shared-dream/dream.InviteFlow.tsx
- SharedDreamCanvas â components/shared-dream/dream.SharedDreamCanvas.tsx
- SharedDreamShell â components/dreams/dream.shell.SharedDreamShell.tsx

Hooks:
- useSharedDreamSession â engine/sharedDream.ts
- useCallback â components/shared-dream/dream.SharedDreamProvider.tsx
- useContext â components/shared-dream/dream.SharedDreamProvider.tsx
- useEffect â components/shared-dream/dream.SharedDreamProvider.tsx
- useRef â components/shared-dream/dream.SharedDreamProvider.tsx
- useState â components/shared-dream/dream.SharedDreamProvider.tsx
- useSharedDream â components/shared-dream/dream.SharedDreamProvider.tsx
- useSharedDreamSession â app/api/shared-dream/sessions/[id]/route.ts
- useSharedDreamSession â components/shared-dream/dream.SharedDreamRuntime.tsx
- useCallback â components/shared-dream/dream.SharedDreamRuntime.tsx
- useEffect â components/shared-dream/dream.SharedDreamRuntime.tsx
- useState â components/shared-dream/dream.SharedDreamRuntime.tsx
- useEnginCoopSync â components/shared-dream/dream.SharedDreamRuntime.tsx
- useRef â components/shared-dream/dream.SharedDreamRuntime.tsx

Exports that define public behavior:
- SharedDreamSession â engine/sharedDream.ts
- DreamEventType â engine/sharedDream.ts
- DreamBroadcastPayload â engine/sharedDream.ts
- DreamEventHandler â engine/sharedDream.ts
- DreamSessionRole â engine/sharedDream.ts
- DreamSessionMode â engine/sharedDream.ts
- DreamPresenceUpdate â engine/sharedDream.ts
- SharedDreamSessionOptions â engine/sharedDream.ts
- createSharedDreamSession â engine/sharedDream.ts
- joinSharedDreamSession â engine/sharedDream.ts
- broadcastCursorPosition â engine/sharedDream.ts
- broadcastEdit â engine/sharedDream.ts
- broadcastStatePatch â engine/sharedDream.ts
- broadcastDataPacket â engine/sharedDream.ts

Import/export connections:
- engine/io
- engine/collaboration/index
- engine/sharedDream/useSharedDreamSession
- supabase/client/client
- react
- supabase/client/safeGetUser
- supabase/server/serverClient
- @supabase/supabase-js
- next/server
- zod
- engine/runtime/dualRuntimeBridge
- ./dream.InviteFlow
- ./dream.SharedDreamCanvas
- ./dream.SharedDreamProvider

### Matched Files

Primary files:
- `engine/sharedDream.ts` â 168 lines â score 138 â primary path, path keyword: sharedDream
- `components/shared-dream/dream.SharedDreamProvider.tsx` â 259 lines â score 134 â primary path, path keyword: shared dream
- `app/api/shared-dream/sessions/[id]/route.ts` â 134 lines â score 134 â primary path, path keyword: shared dream
- `supabase/migrations/20260516000300_shared_dream_sessions.sql` â 134 lines â score 134 â primary path, path keyword: shared dream
- `app/api/shared-dream/sessions/route.ts` â 92 lines â score 134 â primary path, path keyword: shared dream
- `components/shared-dream/dream.SharedDreamRuntime.tsx` â 422 lines â score 130 â primary path, path keyword: shared dream
- `engine/sharedDream/useSharedDreamSession.ts` â 328 lines â score 130 â primary path, path keyword: sharedDream
- `components/shared-dream/index.ts` â 22 lines â score 130 â primary path, path keyword: shared dream
- `components/shared-dream/dream.InviteFlow.tsx` â 134 lines â score 126 â primary path, path keyword: shared dream
- `components/shared-dream/dream.SharedDreamCanvas.tsx` â 83 lines â score 126 â primary path, path keyword: shared dream
- `components/dreams/dream.shell.SharedDreamShell.tsx` â 402 lines â score 116 â primary path
- `hooks/useSharedDream.ts` â 270 lines â score 116 â primary path
- `app/api/dreams/feed/route.ts` â 152 lines â score 108 â primary path
- `app/api/dreams/instances/route.ts` â 113 lines â score 108 â primary path
- `app/api/dreams/transfer/route.ts` â 65 lines â score 108 â primary path
- `daydreams/shared/useDaydreamPersistence.ts` â 147 lines â score 100 â primary path
- `daydreams/shared/useDaydreamState.ts` â 93 lines â score 100 â primary path
- `engine/collaboration/index.ts` â 815 lines â score 89 â supporting path, path keyword: collaboration
- `supabase/migrations/20260322000000_phase8b_dream_windows.sql` â 239 lines â score 59 â supporting path
- `engine/runtime/useSharedEnginChannel.ts` â 163 lines â score 59 â supporting path
- `supabase/migrations/20260325000000_phase8f_daydream_network.sql` â 113 lines â score 55 â supporting path

Supporting files:
- None found.
## 8. DreamR â Human Media

### Plain English
DreamR is the human media layer: feed, discovery, profile, posts, creator identity, and the browsing surfaces where Dreams become media instead of private project files.

### What users experience
Users experience DreamR as the social/media side of DREAMengin: scrolling, viewing people, opening Dreams, editing identity, and discovering what others make.

### Repo Evidence
Matched focused repo evidence: 55 files, about 15,036 readable source lines.

Behavior signals:
- auth â 35 file hits
- commerce â 26 file hits
- mobile touch â 23 file hits
- persistence â 21 file hits
- state â 20 file hits
- runtime â 15 file hits
- rendering â 15 file hits
- events â 11 file hits

Routes and APIs:
- GET /api/dreamr/feed â app/api/dreamr/feed/route.ts
- /dreamr â app/dreamr/page.tsx
- GET /api/dreamr/suggested â app/api/dreamr/suggested/route.ts
- POST /api/dreamr/tally â app/api/dreamr/tally/route.ts
- GET /api/feed â app/api/feed/route.ts
- /profile/[handle] â app/profile/[handle]/page.tsx
- /view-profile â app/view-profile/page.tsx
- /profile â app/profile/page.tsx
- /edit-profiledream â app/edit-profiledream/page.tsx

Components:
- DreamRPage â app/dreamr/page.tsx
- TrendIcon â app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx
- CreateTab â app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx
- PlatformTab â app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx
- SignalTab â app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx
- JourneyTab â app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx
- DreamRSection â app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx
- SocialBadge â components/dreamr/dream.panel.DreamRCreatorPanel.tsx
- DreamRCreatorPanel â components/dreamr/dream.panel.DreamRCreatorPanel.tsx
- ActionBtn â dreamr/components/dreamrfeed.tsx
- VideoPostCard â dreamr/components/dreamrfeed.tsx
- PostCard â dreamr/components/dreamrfeed.tsx
- SuggestedContentCard â dreamr/components/dreamrfeed.tsx
- SuggestedCreatorCard â dreamr/components/dreamrfeed.tsx

Hooks:
- useCallback â dreamr/feed/useLiveFeed.ts
- useEffect â dreamr/feed/useLiveFeed.ts
- useRef â dreamr/feed/useLiveFeed.ts
- useState â dreamr/feed/useLiveFeed.ts
- useLiveFeed â dreamr/feed/useLiveFeed.ts
- useDreamDMMessages â dreamr/feed/useLiveFeed.ts
- useLiveFeed â dreamr/feed/useYouTubeLiveFeed.ts
- useCallback â dreamr/feed/useYouTubeLiveFeed.ts
- useEffect â dreamr/feed/useYouTubeLiveFeed.ts
- useRef â dreamr/feed/useYouTubeLiveFeed.ts
- useState â dreamr/feed/useYouTubeLiveFeed.ts
- useYouTubeLiveFeed â dreamr/feed/useYouTubeLiveFeed.ts
- useLiveFeed â app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx
- useCallback â app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx

Exports that define public behavior:
- FeedPost â dreamr/feed/useLiveFeed.ts
- UseLiveFeedReturn â dreamr/feed/useLiveFeed.ts
- useLiveFeed â dreamr/feed/useLiveFeed.ts
- UseYouTubeLiveFeedReturn â dreamr/feed/useYouTubeLiveFeed.ts
- useYouTubeLiveFeed â dreamr/feed/useYouTubeLiveFeed.ts
- SocialSource â dreamr/social-feed.ts
- SocialFeedItem â dreamr/social-feed.ts
- stripHtml â dreamr/social-feed.ts
- extractFirstImage â dreamr/social-feed.ts
- fetchSocialFeed â dreamr/social-feed.ts
- metadata â app/dreamr/page.tsx
- default export â page (app/dreamr/page.tsx)
- Hashtag â dreamr/feed/hashtags.ts
- TrendingTag â dreamr/feed/hashtags.ts

Import/export connections:
- app/dreamdmbar/_components/dreamr/api/feedHandler
- engine/io
- engins/contentengin/media/postMedia
- supabase/client/client
- react
- dreamr/feed/feedTopics
- dreamr/feed/useLiveFeed
- types/connector
- rss-parser
- app/dreamdmbar/_components/dreamr/dreamsurface.dreamr
- components/ui/dream.AuthenticatedPageHeader
- engine/dev-bypass
- supabase/client/safeGetUser
- supabase/server/serverClient

### Matched Files

Primary files:
- `app/api/dreamr/feed/route.ts` â 50 lines â score 164 â primary path, path keyword: dreamr
- `dreamr/feed/useLiveFeed.ts` â 301 lines â score 160 â primary path, path keyword: dreamr
- `dreamr/feed/useYouTubeLiveFeed.ts` â 222 lines â score 152 â primary path, path keyword: dreamr
- `dreamr/social-feed.ts` â 115 lines â score 152 â primary path, path keyword: dreamr
- `app/dreamr/page.tsx` â 81 lines â score 150 â primary path, path keyword: dreamr
- `dreamr/feed/hashtags.ts` â 167 lines â score 148 â primary path, path keyword: dreamr
- `dreamr/feed/feedTopics.ts` â 80 lines â score 148 â primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx` â 2006 lines â score 142 â primary path, path keyword: dreamr
- `components/dreamr/dream.panel.DreamRCreatorPanel.tsx` â 689 lines â score 142 â primary path, path keyword: dreamr
- `app/api/dreamr/suggested/route.ts` â 235 lines â score 142 â primary path, path keyword: dreamr
- `dreamr/components/dreamrfeed.tsx` â 1233 lines â score 138 â primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts` â 350 lines â score 134 â primary path, path keyword: dreamr
- `app/api/dreamr/tally/route.ts` â 97 lines â score 134 â primary path, path keyword: dreamr
- `components/dreamr/dream.panel.DreamRChannelPanel.tsx` â 323 lines â score 130 â primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/api/feedHandler.ts` â 115 lines â score 130 â primary path, path keyword: dreamr
- `dreamr/runtime/swipeCalibration.ts` â 115 lines â score 130 â primary path, path keyword: dreamr
- `dreamr/feeds/embedFeedLoader.ts` â 108 lines â score 130 â primary path, path keyword: dreamr
- `dreamr/runtime/closeFriendsVisibility.ts` â 100 lines â score 130 â primary path, path keyword: dreamr
- `dreamr/runtime/feedCursor.ts` â 88 lines â score 130 â primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts` â 260 lines â score 126 â primary path, path keyword: dreamr
- `dreamr/activity/visibility-score.ts` â 234 lines â score 126 â primary path, path keyword: dreamr
- `dreamr/bot-detection/index.ts` â 198 lines â score 126 â primary path, path keyword: dreamr
- `dreamr/runtime/torridityLedger.ts` â 186 lines â score 126 â primary path, path keyword: dreamr
- `dreamr/activity/scoring.ts` â 174 lines â score 126 â primary path, path keyword: dreamr
- `dreamr/torridity.ts` â 163 lines â score 126 â primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx` â 159 lines â score 126 â primary path, path keyword: dreamr
- `dreamr/runtime/swipePersonalization.ts` â 144 lines â score 126 â primary path, path keyword: dreamr
- `dreamr/torridity/physics.ts` â 118 lines â score 126 â primary path, path keyword: dreamr
- `dreamr/activity/boogieActivityPolicy.ts` â 62 lines â score 126 â primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx` â 55 lines â score 126 â primary path, path keyword: dreamr
- `dreamr/activity/revenueSplit.ts` â 48 lines â score 126 â primary path, path keyword: dreamr
- `dreamr/torridity/constants.ts` â 20 lines â score 126 â primary path, path keyword: dreamr
- `dreamr/activity/types.ts` â 345 lines â score 122 â primary path, path keyword: dreamr
- `dreamr/botDetection.ts` â 293 lines â score 122 â primary path, path keyword: dreamr

Supporting files:
- `components/dreamr/dream.CloseFriendsSettings.tsx` â 250 lines â score 122 â primary path, path keyword: dreamr
- `dreamr/bot-detection/swipe-physics.ts` â 230 lines â score 122 â primary path, path keyword: dreamr
- `dreamr/activity/aqs.ts` â 191 lines â score 122 â primary path, path keyword: dreamr
- `dreamr/runtime/socialHumanityScore.ts` â 191 lines â score 122 â primary path, path keyword: dreamr
- `dreamr/bot-detection/detector.ts` â 152 lines â score 122 â primary path, path keyword: dreamr
- `dreamr/bot-detection/view-tally.ts` â 86 lines â score 122 â primary path, path keyword: dreamr
- `dreamr/activity/skipCredits.ts` â 36 lines â score 122 â primary path, path keyword: dreamr
- `dreamr/torridity/index.ts` â 12 lines â score 122 â primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/api/route.ts` â 3 lines â score 122 â primary path, path keyword: dreamr
- `app/api/feed/route.ts` â 230 lines â score 97 â supporting path, path keyword: feed
- `app/profile/[handle]/page.tsx` â 252 lines â score 93 â supporting path, path keyword: profile
- `components/feed/dream.AlgorithmEngine.tsx` â 598 lines â score 89 â supporting path, path keyword: feed
- `app/view-profile/page.tsx` â 365 lines â score 89 â supporting path, path keyword: profile
- `app/profile/page.tsx` â 18 lines â score 89 â supporting path, path keyword: profile
- `components/feed/dream.FeedVideoCard.tsx` â 494 lines â score 85 â supporting path, path keyword: feed
- `components/feed/dream.CommentSection.tsx` â 353 lines â score 81 â supporting path, path keyword: feed
- `components/feed/dream.FollowOnboarding.tsx` â 164 lines â score 81 â supporting path, path keyword: feed
- `components/feed/dream.FollowButton.tsx` â 118 lines â score 81 â supporting path, path keyword: feed
- `components/dream.HomeFeed.tsx` â 1329 lines â score 67 â supporting path
- `app/edit-profiledream/page.tsx` â 561 lines â score 67 â supporting path
- `components/dream.FeedCard.tsx` â 469 lines â score 63 â supporting path
## 9. The Shop

### Plain English
The Shop is the owned storefront area for a user or creator. It covers products, services, offers, carts, and purchase-related surfaces tied to a person or brand.

### What users experience
Users feel this as a creator storefront: things to buy, services to offer, and commercial parts attached to the creator identity.

### Repo Evidence
Matched focused repo evidence: 5 files, about 822 readable source lines.

Behavior signals:
- auth â 5 file hits
- commerce â 5 file hits
- persistence â 4 file hits
- state â 1 file hits
- events â 1 file hits

Routes and APIs:
- GET|POST|PUT|DELETE /api/shop â app/api/shop/route.ts
- /shop â app/shop/page.tsx
- /shop/sell â app/shop/sell/page.tsx

Components:
- ShopPage â app/shop/page.tsx
- SellItemPage â app/shop/sell/page.tsx

Hooks:
- useRouter â app/shop/sell/page.tsx
- useState â app/shop/sell/page.tsx

Exports that define public behavior:
- ShopListingInput â engine/shop/listings.ts
- ShopListingRecord â engine/shop/listings.ts
- ValidationResult â engine/shop/listings.ts
- validateShopListing â engine/shop/listings.ts
- normalizeShopListing â engine/shop/listings.ts
- isOrderOwner â engine/shop/listings.ts
- metadata â app/shop/page.tsx
- default export â page (app/shop/page.tsx)
- default export â page (app/shop/sell/page.tsx)

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
- `engine/shop/listings.ts` â 124 lines â score 156 â primary path, path keyword: shop
- `app/api/shop/route.ts` â 181 lines â score 138 â primary path, path keyword: shop
- `app/shop/page.tsx` â 130 lines â score 138 â primary path, path keyword: shop
- `app/shop/sell/page.tsx` â 201 lines â score 134 â primary path, path keyword: shop
- `supabase/migrations/20260324000001_phase8e_shop_marketplace.sql` â 186 lines â score 126 â primary path, path keyword: shop

Supporting files:
- None found.
## 10. The Marketplace

### Plain English
The Marketplace is the broader exchange area where listings, selling pages, catalogs, vendors, or public offerings live beyond one personal shop.

### What users experience
Users experience this as the public commercial side of the ecosystem: browsing, listing, buying, selling, and moving between creator shops and wider discovery.

### Repo Evidence
Matched focused repo evidence: 12 files, about 1,672 readable source lines.

Behavior signals:
- commerce â 12 file hits
- persistence â 7 file hits
- auth â 7 file hits
- state â 3 file hits
- events â 2 file hits
- mobile touch â 2 file hits
- rendering â 2 file hits
- runtime â 1 file hits

Routes and APIs:
- POST /api/marketplace/request â app/api/marketplace/request/route.ts
- /marketplace/sell â app/marketplace/sell/page.tsx
- /marketplace/[id] â app/marketplace/[id]/page.tsx
- GET|POST /api/marketplace â app/api/marketplace/route.ts
- /marketplace â app/marketplace/page.tsx

Components:
- MarketplaceSellPage â app/marketplace/sell/page.tsx
- MarketplaceItemPage â app/marketplace/[id]/page.tsx
- MarketplacePage â app/marketplace/page.tsx
- MarketplaceRequestButton â components/marketplace/dream.MarketplaceRequestButton.tsx
- MarketplaceListingCard â components/marketplace/dream.MarketplaceListingCard.tsx
- MarketplacePanel â components/panels/dream.panel.MarketplacePanel.tsx

Hooks:
- useRouter â app/marketplace/sell/page.tsx
- useEffect â app/marketplace/sell/page.tsx
- useState â app/marketplace/sell/page.tsx
- useState â components/marketplace/dream.MarketplaceRequestButton.tsx
- useDreamSystem â components/panels/dream.panel.MarketplacePanel.tsx
- useEffect â components/panels/dream.panel.MarketplacePanel.tsx
- useState â components/panels/dream.panel.MarketplacePanel.tsx

Exports that define public behavior:
- default export â page (app/marketplace/sell/page.tsx)
- default export â page (app/marketplace/[id]/page.tsx)
- metadata â app/marketplace/page.tsx
- default export â page (app/marketplace/page.tsx)
- MarketplaceCategory â engine/marketplace/listings.ts
- MarketplaceListingInput â engine/marketplace/listings.ts
- MarketplaceListingRecord â engine/marketplace/listings.ts
- ValidationResult â engine/marketplace/listings.ts
- validateMarketplaceListing â engine/marketplace/listings.ts
- normalizeMarketplaceListing â engine/marketplace/listings.ts
- marketplaceDetailRoute â engine/marketplace/listings.ts
- formatMarketplacePrice â engine/marketplace/listings.ts
- default export â dream.MarketplaceRequestButton (components/marketplace/dream.MarketplaceRequestButton.tsx)
- ContactRequestInput â engine/marketplace/request.ts

Import/export connections:
- engine/marketplace/request
- supabase/server/serverClient
- supabase/client/safeGetUser
- next/server
- supabase/client/client
- lucide-react
- next/link
- next/navigation
- react
- utils/index
- components/marketplace/dream.MarketplaceRequestButton
- components/ui/dream.DreamWord
- @supabase/supabase-js
- components/marketplace/dream.MarketplaceListingCard

### Matched Files

Primary files:
- `app/api/marketplace/request/route.ts` â 90 lines â score 138 â primary path, path keyword: marketplace
- `app/marketplace/sell/page.tsx` â 270 lines â score 134 â primary path, path keyword: marketplace
- `app/marketplace/[id]/page.tsx` â 205 lines â score 134 â primary path, path keyword: marketplace
- `app/api/marketplace/route.ts` â 142 lines â score 134 â primary path, path keyword: marketplace
- `app/marketplace/page.tsx` â 137 lines â score 134 â primary path, path keyword: marketplace
- `supabase/migrations/20260324000001_phase8e_shop_marketplace.sql` â 186 lines â score 130 â primary path, path keyword: marketplace
- `engine/marketplace/listings.ts` â 154 lines â score 130 â primary path, path keyword: marketplace
- `components/marketplace/dream.MarketplaceRequestButton.tsx` â 132 lines â score 130 â primary path, path keyword: marketplace
- `engine/marketplace/request.ts` â 88 lines â score 130 â primary path, path keyword: marketplace
- `components/marketplace/dream.MarketplaceListingCard.tsx` â 78 lines â score 126 â primary path, path keyword: marketplace
- `types/marketplace.ts` â 51 lines â score 126 â primary path, path keyword: marketplace
- `components/panels/dream.panel.MarketplacePanel.tsx` â 139 lines â score 59 â supporting path

Supporting files:
- None found.
## 11. Ads & User Ads

### Plain English
Ads and User Ads cover promotion, sponsored inventory, campaign surfaces, impressions, clicks, targeting rules, and any app code that lets users or the platform promote content.

### What users experience
Users see this as promoted Dreams, user-created campaigns, ad slots, sponsor cards, or paid visibility controls.

### Repo Evidence
Matched focused repo evidence: 11 files, about 1,507 readable source lines.

Behavior signals:
- commerce â 10 file hits
- auth â 9 file hits
- persistence â 7 file hits
- state â 4 file hits
- events â 2 file hits
- mobile touch â 2 file hits
- rendering â 1 file hits

Routes and APIs:
- /ads â app/ads/page.tsx
- /ads/create â app/ads/create/page.tsx
- POST /api/ads/view â app/api/ads/view/route.ts
- /ads/slot/[id] â app/ads/slot/[id]/page.tsx
- POST /api/ads/orders â app/api/ads/orders/route.ts
- /engines/brand/campaigns â app/engines/brand/campaigns/page.tsx

Components:
- AdsPage â app/ads/page.tsx
- CreateAdSlotPage â app/ads/create/page.tsx
- AdSlotPage â app/ads/slot/[id]/page.tsx
- AdUnit â components/ads/dream.AdUnit.tsx
- SkipCreditBalance â components/ads/dream.SkipCreditBalance.tsx
- BrandCampaignsPage â app/engines/brand/campaigns/page.tsx
- CampaignsPanel â components/engines/brand/panels/dream.panel.CampaignsPanel.tsx

Hooks:
- useRouter â app/ads/create/page.tsx
- useState â app/ads/create/page.tsx
- useEffect â components/ads/dream.AdUnit.tsx
- useState â components/ads/dream.AdUnit.tsx
- useEffect â components/ads/dream.SkipCreditBalance.tsx
- useState â components/ads/dream.SkipCreditBalance.tsx
- useState â components/engines/brand/panels/dream.panel.CampaignsPanel.tsx

Exports that define public behavior:
- default export â page (app/ads/page.tsx)
- default export â page (app/ads/create/page.tsx)
- default export â page (app/ads/slot/[id]/page.tsx)
- AdUnit â components/ads/dream.AdUnit.tsx
- SkipCreditBalance â components/ads/dream.SkipCreditBalance.tsx
- AdPlacement â types/ads.ts
- AdSlot â types/ads.ts
- ProfileLite â types/ads.ts
- AdListing â types/ads.ts
- AdOrder â types/ads.ts
- metadata â app/engines/brand/campaigns/page.tsx
- default export â page (app/engines/brand/campaigns/page.tsx)
- default export â dream.panel.CampaignsPanel (components/engines/brand/panels/dream.panel.CampaignsPanel.tsx)

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
- `app/ads/page.tsx` â 267 lines â score 130 â primary path, path keyword: ads
- `app/ads/create/page.tsx` â 203 lines â score 130 â primary path, path keyword: ads
- `app/api/ads/view/route.ts` â 192 lines â score 130 â primary path, path keyword: ads
- `app/ads/slot/[id]/page.tsx` â 139 lines â score 130 â primary path, path keyword: ads
- `app/api/ads/orders/route.ts` â 91 lines â score 130 â primary path, path keyword: ads
- `supabase/migrations/20260321000000_ads_platform_promotions.sql` â 38 lines â score 126 â primary path, path keyword: ads
- `components/ads/dream.AdUnit.tsx` â 229 lines â score 122 â primary path, path keyword: ads
- `components/ads/dream.SkipCreditBalance.tsx` â 58 lines â score 122 â primary path, path keyword: ads
- `types/ads.ts` â 46 lines â score 122 â primary path, path keyword: ads
- `app/engines/brand/campaigns/page.tsx` â 31 lines â score 67 â supporting path
- `components/engines/brand/panels/dream.panel.CampaignsPanel.tsx` â 213 lines â score 59 â supporting path

Supporting files:
- None found.
## 12. The DreamDmBar (dreamdmbar/)

### Plain English
The DreamDmBar is the persistent interaction rail for DREAMengin: messaging, search, notifications, quick actions, module intent, DreamR, HomeDream, DreamSpace, and runtime control live around this bar instead of being scattered across isolated pages.

### What users experience
Users experience DreamDmBar as the always-near control surface: tap for immediate action, drag or swipe the gold control to expand, collapse, split, or reveal context, keep DM/search/notification state alive, and jump between HomeDream, DreamSpace, DreamR, messages, panels, and active Engins without losing the runtime they were using.

### Key interaction model
- The visible bar is not just navigation. It is an input surface that interprets gold tap, release, drag, swipe, velocity, snap points, and split ratio.
- barInteractions owns the physical feel of the bar: tap-vs-release detection, pointer velocity, snap-to-split behavior, collapse decisions, and gold-tap action resolution.
- DreamSystemContext is the shared context that lets the bar coordinate active surfaces, module state, panels, and runtime-adjacent decisions.
- The bar carries communication state through useDreamDMConversations, useDreamDMDraft, useDreamDMMessages, useMessagingCore, and notification hooks.
- The bar carries navigation and command state through useDreamSearch, useDreamBarContext, useModuleBarIntent, command palette connections, and panel connections.
- The bar is tied to runtime behavior through the DreamDMBar dualruntime, homedream, and dreamspace routes plus DualRuntimeContainer, RuntimeView, HomeDreamRegion, and DreamSpaceRegion connections.
- The README must describe this as a touch-first runtime control surface, not as a generic toolbar or a page with messaging links.

### Repo Evidence
Matched focused repo evidence: 62 files, about 17,333 readable source lines.

Behavior signals:
- commerce â 42 file hits
- state â 40 file hits
- runtime â 38 file hits
- auth â 37 file hits
- mobile touch â 34 file hits
- rendering â 34 file hits
- persistence â 28 file hits
- events â 20 file hits

Routes and APIs:
- /dreamdmbar/dreamspace â app/dreamdmbar/dreamspace/page.tsx
- /dreamdmbar/dualruntime â app/dreamdmbar/dualruntime/page.tsx
- /dreamdmbar/homedream â app/dreamdmbar/homedream/page.tsx
- /dreamdmbar â app/dreamdmbar/page.tsx
- GET|POST /api/messages â app/api/messages/route.ts
- /messages/boards/[id] â app/messages/boards/[id]/page.tsx
- /messages/boards â app/messages/boards/page.tsx
- /messages/boards/new â app/messages/boards/new/page.tsx

Components:
- DreamSystemProvider â dreamdmbar/runtime/DreamSystemContext.tsx
- DreamDMBarDreamSpacePage â app/dreamdmbar/dreamspace/page.tsx
- DreamDMBarDualRuntimePage â app/dreamdmbar/dualruntime/page.tsx
- DreamDMBarHomeDreamPage â app/dreamdmbar/homedream/page.tsx
- AvatarChip â dreamdmbar/dreamsurface.dreamdmbar.tsx
- ContextIcon â dreamdmbar/dreamsurface.dreamdmbar.tsx
- DreamDMBar â dreamdmbar/dreamsurface.dreamdmbar.tsx
- CompactNotificationStrip â dreamdmbar/dreamsurface.dreamdmbar.tsx
- ModeButton â dreamdmbar/dreamsurface.dreamdmbar.tsx
- DreamSpaceMessaging â dreamdmbar/dreamsurface.dreamdmbar.tsx
- QuickLink â app/dreamdmbar/_components/HomeDreamRegion.tsx
- HomeDreamSurface â app/dreamdmbar/_components/HomeDreamRegion.tsx
- RuntimeView â components/runtime/dream.RuntimeView.tsx
- DualRuntimeContainer â components/runtime/dream.DualRuntimeContainer.tsx

Hooks:
- useCallback â dreamdmbar/runtime/DreamSystemContext.tsx
- useContext â dreamdmbar/runtime/DreamSystemContext.tsx
- useEffect â dreamdmbar/runtime/DreamSystemContext.tsx
- useRef â dreamdmbar/runtime/DreamSystemContext.tsx
- useState â dreamdmbar/runtime/DreamSystemContext.tsx
- useDreamSystem â dreamdmbar/runtime/DreamSystemContext.tsx
- useDualRuntime â app/dreamdmbar/dreamspace/page.tsx
- useDreamSystem â app/dreamdmbar/dreamspace/page.tsx
- useEffect â app/dreamdmbar/dreamspace/page.tsx
- useDreamSystem â app/dreamdmbar/dualruntime/page.tsx
- useEffect â app/dreamdmbar/dualruntime/page.tsx
- useState â app/dreamdmbar/dualruntime/page.tsx
- useDualRuntime â app/dreamdmbar/homedream/page.tsx
- useDreamSystem â app/dreamdmbar/homedream/page.tsx

Exports that define public behavior:
- HomeData â dreamdmbar/runtime/DreamSystemContext.tsx
- BarIntentMode â dreamdmbar/runtime/DreamSystemContext.tsx
- ModuleBarAction â dreamdmbar/runtime/DreamSystemContext.tsx
- BarIntent â dreamdmbar/runtime/DreamSystemContext.tsx
- WorldFocusState â dreamdmbar/runtime/DreamSystemContext.tsx
- RuntimeCallbacks â dreamdmbar/runtime/DreamSystemContext.tsx
- DreamSystemProvider â dreamdmbar/runtime/DreamSystemContext.tsx
- useDreamSystem â dreamdmbar/runtime/DreamSystemContext.tsx
- default export â page (app/dreamdmbar/dreamspace/page.tsx)
- snapToSplitPoint â dreamdmbar/runtime/barInteractions.ts
- snapSplitRatioOnRelease â dreamdmbar/runtime/barInteractions.ts
- resolveGoldTapAction â dreamdmbar/runtime/barInteractions.ts
- shouldTreatGoldReleaseAsTap â dreamdmbar/runtime/barInteractions.ts
- calculatePointerVelocity â dreamdmbar/runtime/barInteractions.ts

Import/export connections:
- dreamdmbar/runtime/barInteractions
- components/panels/panelTypes
- engine/runtime/dualRuntime
- supabase/client/client
- supabase/client/safeGetUser
- react
- components/runtime/dream.DualRuntimeContainer
- dreamdmbar/runtime/DreamSystemContext
- components/shared-dream/dream.SharedDreamRuntime
- lucide-react
- next/image
- components/ui/dream.DreamWord
- dreamdmbar/dream.GlowingLight
- dreamdmbar/hooks/useDreamBarContext

### Matched Files

Primary files:
- `dreamdmbar/runtime/DreamSystemContext.tsx` â 401 lines â score 168 â primary path, path keyword: dreamdmbar
- `app/dreamdmbar/dreamspace/page.tsx` â 19 lines â score 168 â primary path, path keyword: dreamdmbar
- `dreamdmbar/runtime/barInteractions.ts` â 533 lines â score 164 â primary path, path keyword: dreamdmbar
- `app/dreamdmbar/dualruntime/page.tsx` â 102 lines â score 164 â primary path, path keyword: dreamdmbar
- `app/dreamdmbar/homedream/page.tsx` â 19 lines â score 164 â primary path, path keyword: dreamdmbar
- `dreamdmbar/dreamsurface.dreamdmbar.tsx` â 3098 lines â score 150 â primary path, path keyword: dreamdmbar
- `dreamdmbar/runtime/bridgeSeamFlow.ts` â 214 lines â score 148 â primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/HomeDreamRegion.tsx` â 460 lines â score 142 â primary path, path keyword: dreamdmbar
- `components/runtime/dream.RuntimeView.tsx` â 432 lines â score 142 â primary path, path keyword: runtime
- `components/runtime/dream.DualRuntimeContainer.tsx` â 246 lines â score 142 â primary path, path keyword: runtime
- `app/dreamdmbar/_components/DreamBarDataBridge.tsx` â 196 lines â score 142 â primary path, path keyword: dreamdmbar
- `components/runtime/dream.shell.RuntimeShell.tsx` â 352 lines â score 138 â primary path, path keyword: runtime
- `app/dreamdmbar/page.tsx` â 11 lines â score 138 â primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/DreamSpaceRegion.tsx` â 459 lines â score 134 â primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts` â 260 lines â score 134 â primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useDreamSearch.ts` â 233 lines â score 134 â primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useDreamBarContext.ts` â 185 lines â score 134 â primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx` â 2006 lines â score 130 â primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/dreamr/api/feedHandler.ts` â 115 lines â score 130 â primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useNotifications.ts` â 97 lines â score 130 â primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useModuleBarIntent.ts` â 87 lines â score 130 â primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx` â 55 lines â score 130 â primary path, path keyword: dreamdmbar
- `engine/generated/dreamdmbar.ts` â 22 lines â score 130 â primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts` â 350 lines â score 126 â primary path, path keyword: dreamdmbar
- `dreamdmbar/notifications/notificationHelpers.ts` â 266 lines â score 126 â primary path, path keyword: dreamdmbar
- `app/dreamdmbar/layout.tsx` â 184 lines â score 126 â primary path, path keyword: dreamdmbar
- `dreamdmbar/notifications/useNotifications.ts` â 172 lines â score 126 â primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx` â 159 lines â score 126 â primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useMessagingCore.ts` â 189 lines â score 122 â primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useDreamDMDraft.ts` â 176 lines â score 122 â primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useDreamDMMessages.ts` â 141 lines â score 122 â primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useDreamDMConversations.ts` â 123 lines â score 122 â primary path, path keyword: dreamdmbar
- `dreamdmbar/dream.GlowingLight.tsx` â 103 lines â score 122 â primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/DreamWidgetGrid.tsx` â 33 lines â score 122 â primary path, path keyword: dreamdmbar

Supporting files:
- `app/dreamdmbar/_components/dreamr/api/route.ts` â 3 lines â score 122 â primary path, path keyword: dreamdmbar
- `engine/runtime/dualRuntime.ts` â 259 lines â score 115 â supporting path, path keyword: dualruntime
- `engine/runtime/useDualRuntimePersistence.ts` â 187 lines â score 89 â supporting path, path keyword: runtime
- `engine/runtime/dualRuntimeBridge.ts` â 873 lines â score 81 â supporting path, path keyword: runtime
- `engine/runtime/useDualRuntime.ts` â 184 lines â score 81 â supporting path, path keyword: runtime
- `components/home/dream.bar.PersistentDreamBar.tsx` â 345 lines â score 75 â supporting path
- `components/dream.CommandPalette.tsx` â 482 lines â score 67 â supporting path
- `components/home/dream.ActiveModuleSurface.tsx` â 475 lines â score 67 â supporting path
- `components/panels/dream.panel.AppearancePanel.tsx` â 166 lines â score 67 â supporting path
- `components/panels/dream.panel.WidgetsPanel.tsx` â 108 lines â score 67 â supporting path
- `components/home/dream.bar.GlobalDreamBar.tsx` â 100 lines â score 67 â supporting path
- `components/dream.NotificationCenter.tsx` â 414 lines â score 63 â supporting path
- `app/api/messages/route.ts` â 342 lines â score 63 â supporting path
- `components/panels/dream.panel.SettingsPanel.tsx` â 185 lines â score 63 â supporting path
- `app/messages/boards/[id]/page.tsx` â 178 lines â score 63 â supporting path
- `components/panels/dream.panel.PrivacyPanel.tsx` â 146 lines â score 63 â supporting path
- `components/panels/dream.panel.DataPanel.tsx` â 139 lines â score 63 â supporting path
- `components/panels/dream.panel.MarketplacePanel.tsx` â 139 lines â score 63 â supporting path
- `app/messages/boards/page.tsx` â 119 lines â score 63 â supporting path
- `app/messages/boards/new/page.tsx` â 110 lines â score 63 â supporting path
- `components/panels/dream.panel.SafetyPanel.tsx` â 102 lines â score 63 â supporting path
- `components/panels/dream.panel.ControlsPanel.tsx` â 90 lines â score 63 â supporting path
- `components/panels/dream.panel.HelpPanel.tsx` â 71 lines â score 63 â supporting path
- `components/panels/dream.panel.AlgorithmPanel.tsx` â 36 lines â score 63 â supporting path
- `components/panels/dream.panel.ProfilePanel.tsx` â 338 lines â score 55 â supporting path
- `components/panels/dream.panel.FeedSettingsPanel.tsx` â 192 lines â score 55 â supporting path
- `components/panels/dream.panel.ConnectorsPanel.tsx` â 48 lines â score 55 â supporting path
- `components/panels/dream.panel.FeedPanel.tsx` â 4 lines â score 55 â supporting path
## 13. Messaging

### Plain English
Messaging is the direct communication layer: conversations, drafts, notifications, inbox behavior, message APIs, and hooks that keep communication alive across surfaces.

### What users experience
Users experience this when they send a message, receive a notification, open a conversation, keep a draft, or continue a thread from another surface.

### Repo Evidence
Matched focused repo evidence: 22 files, about 4,091 readable source lines.

Behavior signals:
- persistence â 18 file hits
- auth â 18 file hits
- commerce â 14 file hits
- state â 12 file hits
- mobile touch â 6 file hits
- events â 5 file hits
- rendering â 4 file hits

Routes and APIs:
- GET|POST /api/messages â app/api/messages/route.ts
- PATCH|DELETE /api/drafts/[id] â app/api/drafts/[id]/route.ts
- GET|POST /api/drafts â app/api/drafts/route.ts
- /messages â app/messages/page.tsx
- /messages/boards/[id] â app/messages/boards/[id]/page.tsx
- /messages/boards â app/messages/boards/page.tsx
- /messages/boards/new â app/messages/boards/new/page.tsx
- POST /api/messages/boards â app/api/messages/boards/route.ts
- /messages/new â app/messages/new/page.tsx
- /settings/notifications â app/settings/notifications/page.tsx
- GET|POST /api/settings/notifications â app/api/settings/notifications/route.ts

Components:
- MessagesPage â app/messages/page.tsx
- BoardDetailPage â app/messages/boards/[id]/page.tsx
- BoardsPage â app/messages/boards/page.tsx
- NewBoardPage â app/messages/boards/new/page.tsx
- NewMessagePage â app/messages/new/page.tsx
- BoardComposer â components/messaging/dream.BoardComposer.tsx
- NotificationSettingsPage â app/settings/notifications/page.tsx
- MessageContent â components/dream.MessagesClient.tsx
- MessagesClient â components/dream.MessagesClient.tsx
- NotifIcon â components/dream.NotificationCenter.tsx
- NotifRow â components/dream.NotificationCenter.tsx
- NotificationCenter â components/dream.NotificationCenter.tsx

Hooks:
- useCallback â dreamdmbar/hooks/useDreamDMDraft.ts
- useEffect â dreamdmbar/hooks/useDreamDMDraft.ts
- useRef â dreamdmbar/hooks/useDreamDMDraft.ts
- useState â dreamdmbar/hooks/useDreamDMDraft.ts
- useDreamDMDraft â dreamdmbar/hooks/useDreamDMDraft.ts
- useCallback â dreamdmbar/hooks/useDreamDMMessages.ts
- useEffect â dreamdmbar/hooks/useDreamDMMessages.ts
- useRef â dreamdmbar/hooks/useDreamDMMessages.ts
- useState â dreamdmbar/hooks/useDreamDMMessages.ts
- useDreamDMMessages â dreamdmbar/hooks/useDreamDMMessages.ts
- useRouter â app/messages/boards/new/page.tsx
- useState â app/messages/boards/new/page.tsx
- useCallback â dreamdmbar/hooks/useMessagingCore.ts
- useState â dreamdmbar/hooks/useMessagingCore.ts

Exports that define public behavior:
- DraftPayload â dreamdmbar/hooks/useDreamDMDraft.ts
- listAllDraftIds â dreamdmbar/hooks/useDreamDMDraft.ts
- cleanupStaleDrafts â dreamdmbar/hooks/useDreamDMDraft.ts
- getDraftAge â dreamdmbar/hooks/useDreamDMDraft.ts
- useDreamDMDraft â dreamdmbar/hooks/useDreamDMDraft.ts
- default export â page (app/messages/page.tsx)
- DbNotificationContent â dreamdmbar/notifications/notificationHelpers.ts
- DbNotificationRow â dreamdmbar/notifications/notificationHelpers.ts
- UiNotificationType â dreamdmbar/notifications/notificationHelpers.ts
- UiNotification â dreamdmbar/notifications/notificationHelpers.ts
- mapNotificationType â dreamdmbar/notifications/notificationHelpers.ts
- getNotificationTitle â dreamdmbar/notifications/notificationHelpers.ts
- getNotificationActionUrl â dreamdmbar/notifications/notificationHelpers.ts
- extractNotificationMessage â dreamdmbar/notifications/notificationHelpers.ts

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
- react
- components/dream.MessagesClient
- next/navigation
- components/messaging/dream.BoardComposer

### Matched Files

Primary files:
- `app/api/messages/route.ts` â 342 lines â score 120 â primary path
- `app/api/drafts/[id]/route.ts` â 133 lines â score 116 â primary path
- `dreamdmbar/hooks/useDreamDMDraft.ts` â 176 lines â score 112 â primary path
- `app/api/drafts/route.ts` â 119 lines â score 112 â primary path
- `app/messages/page.tsx` â 69 lines â score 112 â primary path
- `dreamdmbar/notifications/notificationHelpers.ts` â 266 lines â score 108 â primary path
- `app/messages/boards/[id]/page.tsx` â 178 lines â score 108 â primary path
- `dreamdmbar/hooks/useDreamDMMessages.ts` â 141 lines â score 108 â primary path
- `app/messages/boards/page.tsx` â 119 lines â score 108 â primary path
- `app/messages/boards/new/page.tsx` â 110 lines â score 108 â primary path
- `app/api/messages/boards/route.ts` â 92 lines â score 108 â primary path
- `app/messages/new/page.tsx` â 86 lines â score 108 â primary path
- `supabase/migrations/20260315000000_content_drafts.sql` â 65 lines â score 108 â primary path
- `dreamdmbar/hooks/useMessagingCore.ts` â 189 lines â score 104 â primary path
- `dreamdmbar/notifications/useNotifications.ts` â 172 lines â score 104 â primary path
- `dreamdmbar/hooks/useDreamDMConversations.ts` â 123 lines â score 104 â primary path
- `supabase/migrations/20260307000001_conversations_messages.sql` â 80 lines â score 104 â primary path
- `components/messaging/dream.BoardComposer.tsx` â 89 lines â score 100 â primary path
- `app/settings/notifications/page.tsx` â 207 lines â score 71 â supporting path
- `app/api/settings/notifications/route.ts` â 84 lines â score 71 â supporting path
- `components/dream.MessagesClient.tsx` â 837 lines â score 67 â supporting path
- `components/dream.NotificationCenter.tsx` â 414 lines â score 63 â supporting path

Supporting files:
- None found.
## 14. HomeDream

### Plain English
HomeDream is the personal home surface: the first meaningful app space after login, combining identity, feed, launcher cards, Dream access, and social entry points.

### What users experience
Users feel HomeDream as the personal starting point where they see themselves, their Dreams, people, feed items, and the app modules they can open.

### Repo Evidence
Matched focused repo evidence: 18 files, about 4,511 readable source lines.

Behavior signals:
- commerce â 11 file hits
- mobile touch â 10 file hits
- events â 9 file hits
- state â 8 file hits
- auth â 8 file hits
- runtime â 7 file hits
- persistence â 5 file hits
- rendering â 5 file hits

Routes and APIs:
- /homedream â app/homedream/page.tsx
- GET|POST /api/home-layout â app/api/home-layout/route.ts

Components:
- PersistentDreamBar â components/home/dream.bar.PersistentDreamBar.tsx
- HomeDreamPage â app/homedream/page.tsx
- ActiveModuleSurface â components/home/dream.ActiveModuleSurface.tsx
- FlagshipEnginesStrip â components/home/dream.FlagshipEnginesStrip.tsx
- NeuralSeamCanvas â components/home/dream.NeuralSeamCanvas.tsx
- DaydreamPulseStrip â components/home/dream.DaydreamPulseStrip.tsx
- DreamWidget â components/home/dream.widget.DreamWidget.tsx
- GlobalDreamBar â components/home/dream.bar.GlobalDreamBar.tsx
- QuickLink â app/dreamdmbar/_components/HomeDreamRegion.tsx
- HomeDreamSurface â app/dreamdmbar/_components/HomeDreamRegion.tsx
- HomeFeed â components/dream.HomeFeed.tsx
- FeedCard â components/dream.FeedCard.tsx

Hooks:
- useDualRuntime â components/home/dream.bar.PersistentDreamBar.tsx
- useDreamLayout â components/home/dream.bar.PersistentDreamBar.tsx
- useDreamSystem â components/home/dream.bar.PersistentDreamBar.tsx
- useOS â components/home/dream.bar.PersistentDreamBar.tsx
- usePathname â components/home/dream.bar.PersistentDreamBar.tsx
- useCallback â components/home/dream.bar.PersistentDreamBar.tsx
- useEffect â components/home/dream.bar.PersistentDreamBar.tsx
- useState â components/home/dream.bar.PersistentDreamBar.tsx
- useLiveFeed â app/homedream/page.tsx
- useDreamWindowActions â components/home/dream.ActiveModuleSurface.tsx
- useCallback â components/home/dream.ActiveModuleSurface.tsx
- useEffect â components/home/dream.ActiveModuleSurface.tsx
- useMemo â components/home/dream.ActiveModuleSurface.tsx
- useRef â components/home/dream.ActiveModuleSurface.tsx

Exports that define public behavior:
- DreamDMContainer â components/home/dream.bar.PersistentDreamBar.tsx
- default export â dream.bar.PersistentDreamBar (components/home/dream.bar.PersistentDreamBar.tsx)
- default export â page (app/homedream/page.tsx)
- default export â dream.ActiveModuleSurface (components/home/dream.ActiveModuleSurface.tsx)
- default export â dream.FlagshipEnginesStrip (components/home/dream.FlagshipEnginesStrip.tsx)
- default export â dream.NeuralSeamCanvas (components/home/dream.NeuralSeamCanvas.tsx)
- PhysicsConstraint â engins/rulesets/homedream/dream.homedream.physics.ts
- resolveConstraint â engins/rulesets/homedream/dream.homedream.physics.ts
- EntityState â engins/rulesets/homedream/dream.homedream.transforms.ts
- HomeDreamState â engins/rulesets/homedream/dream.homedream.transforms.ts
- applyDelta â engins/rulesets/homedream/dream.homedream.transforms.ts
- createInitialState â engins/rulesets/homedream/dream.homedream.transforms.ts
- homedream â engine/generated/homedream.ts
- HomedreamMap â engine/generated/homedream.ts

Import/export connections:
- components/home/dream.NeuralSeamCanvas
- components/runtime/dream.DualRuntimeContainer
- components/runtime/dream.RuntimeView
- dreamdmbar/dreamsurface.dreamdmbar
- hooks/useDreamLayout
- dreamdmbar/runtime/DreamSystemContext
- dreamdmbar/runtime/barInteractions
- engine/os/OSContext
- engine/dreams/drag
- engine/routing/surfaces
- next/navigation
- react
- components/home/dream.bar.PersistentDreamBar
- app/dreamdmbar/_components/HomeDreamRegion

### Matched Files

Primary files:
- `components/home/dream.bar.PersistentDreamBar.tsx` â 345 lines â score 130 â primary path, path keyword: home dream
- `styles/home-dream.css` â 235 lines â score 130 â primary path, path keyword: home dream
- `app/homedream/page.tsx` â 75 lines â score 130 â primary path, path keyword: homedream
- `components/home/dream.ActiveModuleSurface.tsx` â 475 lines â score 126 â primary path, path keyword: home dream
- `components/home/dream.FlagshipEnginesStrip.tsx` â 278 lines â score 126 â primary path, path keyword: home dream
- `components/home/dream.NeuralSeamCanvas.tsx` â 276 lines â score 126 â primary path, path keyword: home dream
- `engins/rulesets/homedream/dream.homedream.physics.ts` â 36 lines â score 126 â primary path, path keyword: homedream
- `engins/rulesets/homedream/dream.homedream.transforms.ts` â 36 lines â score 126 â primary path, path keyword: homedream
- `engins/rulesets/homedream/index.ts` â 15 lines â score 126 â primary path, path keyword: homedream
- `engins/rulesets/homedream/dream.homedream.constants.ts` â 9 lines â score 126 â primary path, path keyword: homedream
- `engine/generated/homedream.ts` â 8 lines â score 126 â primary path, path keyword: homedream
- `components/home/dream.DaydreamPulseStrip.tsx` â 139 lines â score 122 â primary path, path keyword: home dream
- `components/home/dream.widget.DreamWidget.tsx` â 117 lines â score 122 â primary path, path keyword: home dream
- `components/home/dream.bar.GlobalDreamBar.tsx` â 100 lines â score 122 â primary path, path keyword: home dream
- `app/dreamdmbar/_components/HomeDreamRegion.tsx` â 460 lines â score 112 â primary path
- `app/api/home-layout/route.ts` â 109 lines â score 67 â supporting path
- `components/dream.HomeFeed.tsx` â 1329 lines â score 59 â supporting path
- `components/dream.FeedCard.tsx` â 469 lines â score 55 â supporting path

Supporting files:
- None found.
## 15. DreamSpace

### Plain English
DreamSpace is the workspace/canvas layer where DayDream surfaces, Engins, regions, runtime shells, and user-created windows become one creative environment.

### What users experience
Users experience DreamSpace as the place where they arrange, open, move through, and work inside creative surfaces rather than just clicking normal web pages.

### Repo Evidence
Matched focused repo evidence: 62 files, about 19,181 readable source lines.

Behavior signals:
- auth â 39 file hits
- commerce â 39 file hits
- state â 31 file hits
- mobile touch â 28 file hits
- persistence â 27 file hits
- rendering â 23 file hits
- runtime â 20 file hits
- events â 17 file hits

Routes and APIs:
- /dreamdmbar/dreamspace â app/dreamdmbar/dreamspace/page.tsx
- /dreamspace â app/dreamspace/page.tsx
- /daydream/games â app/daydream/games/page.tsx
- /daydream/music â app/daydream/music/page.tsx
- /daydream/code â app/daydream/code/page.tsx
- /daydream/lab â app/daydream/lab/page.tsx
- /daydream/forge â app/daydream/forge/page.tsx
- /daydream/music/upload â app/daydream/music/upload/page.tsx
- /daydream/lab/portfolio â app/daydream/lab/portfolio/page.tsx
- /daydream/create â app/daydream/create/page.tsx
- /daydream/brand â app/daydream/brand/page.tsx
- /daydream/game â app/daydream/game/page.tsx
- /daydream/games/engin â app/daydream/games/engin/page.tsx
- /daydream/constellation â app/daydream/constellation/page.tsx
- /daydream/media-vault â app/daydream/media-vault/page.tsx
- /daydream/play â app/daydream/play/page.tsx

Components:
- DreamDMBarDreamSpacePage â app/dreamdmbar/dreamspace/page.tsx
- DreamSpacePage â app/dreamspace/page.tsx
- AppIcon â components/dreams/dreamsurface.dreamspace.tsx
- EngineBarChart â components/dreams/dreamsurface.dreamspace.tsx
- DreamsSpacePanel â components/dreams/dreamsurface.dreamspace.tsx
- ProfileSpace â components/spatial/dream.ProfileSpace.tsx
- EmptyProfileState â components/spatial/dream.ProfileSpace.tsx
- WidgetRenderer â components/spatial/dream.ProfileSpace.tsx
- GalleryWidget â components/spatial/dream.ProfileSpace.tsx
- BlankWidget â components/spatial/dream.ProfileSpace.tsx
- MediaWidget â components/spatial/dream.ProfileSpace.tsx
- TextWidget â components/spatial/dream.ProfileSpace.tsx
- ProfileInfoWidget â components/spatial/dream.ProfileSpace.tsx
- LinkTreeWidget â components/spatial/dream.ProfileSpace.tsx

Hooks:
- useDualRuntime â app/dreamdmbar/dreamspace/page.tsx
- useDreamSystem â app/dreamdmbar/dreamspace/page.tsx
- useEffect â app/dreamdmbar/dreamspace/page.tsx
- useDreamsRuntime â components/dreams/dreamsurface.dreamspace.tsx
- useSessionIntelligence â components/dreams/dreamsurface.dreamspace.tsx
- useRouter â components/dreams/dreamsurface.dreamspace.tsx
- useCallback â components/dreams/dreamsurface.dreamspace.tsx
- useEffect â components/dreams/dreamsurface.dreamspace.tsx
- useRef â components/dreams/dreamsurface.dreamspace.tsx
- useState â components/dreams/dreamsurface.dreamspace.tsx
- useContent â components/spatial/dream.ProfileSpace.tsx
- useWidgets â components/spatial/dream.ProfileSpace.tsx
- useCallback â components/spatial/dream.ProfileSpace.tsx
- useEffect â components/spatial/dream.ProfileSpace.tsx

Exports that define public behavior:
- default export â page (app/dreamdmbar/dreamspace/page.tsx)
- default export â page (app/dreamspace/page.tsx)
- getAppRoute â components/dreams/dreamsurface.dreamspace.tsx
- RecentDestination â components/dreams/dreamsurface.dreamspace.tsx
- buildRecentDestinations â components/dreams/dreamsurface.dreamspace.tsx
- default export â dreamsurface.dreamspace (components/dreams/dreamsurface.dreamspace.tsx)
- default export â dream.ProfileSpace (components/spatial/dream.ProfileSpace.tsx)
- default export â dream.shell.EnhancedSpatialShell (components/spatial/dream.shell.EnhancedSpatialShell.tsx)
- PixiPhysicsLayerProps â components/spatial/dream.PixiPhysicsLayer.tsx
- default export â dream.PixiPhysicsLayer (components/spatial/dream.PixiPhysicsLayer.tsx)
- metadata â app/daydream/games/page.tsx
- default export â page (app/daydream/games/page.tsx)
- metadata â app/daydream/music/page.tsx
- default export â page (app/daydream/music/page.tsx)

Import/export connections:
- components/runtime/dream.DualRuntimeContainer
- dreamdmbar/runtime/DreamSystemContext
- react
- components/dreams/dreamsurface.dreamspace
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

### Matched Files

Primary files:
- `app/dreamdmbar/dreamspace/page.tsx` â 19 lines â score 134 â primary path, path keyword: dreamspace
- `app/dreamspace/page.tsx` â 8 lines â score 134 â primary path, path keyword: dreamspace
- `components/dreams/dreamsurface.dreamspace.tsx` â 891 lines â score 130 â primary path, path keyword: dreamspace
- `components/spatial/dream.ProfileSpace.tsx` â 822 lines â score 126 â primary path, path keyword: spatial
- `components/spatial/dream.shell.EnhancedSpatialShell.tsx` â 203 lines â score 126 â primary path, path keyword: spatial
- `components/spatial/dream.PixiPhysicsLayer.tsx` â 149 lines â score 122 â primary path, path keyword: spatial
- `app/daydream/games/page.tsx` â 365 lines â score 112 â primary path
- `app/daydream/music/page.tsx` â 87 lines â score 112 â primary path
- `app/daydream/code/page.tsx` â 1118 lines â score 108 â primary path
- `app/daydream/lab/page.tsx` â 1062 lines â score 108 â primary path
- `app/dreamdmbar/_components/DreamSpaceRegion.tsx` â 459 lines â score 108 â primary path
- `app/daydream/forge/page.tsx` â 348 lines â score 108 â primary path
- `app/daydream/music/upload/page.tsx` â 210 lines â score 108 â primary path
- `app/daydream/lab/portfolio/page.tsx` â 189 lines â score 108 â primary path
- `app/daydream/create/page.tsx` â 107 lines â score 108 â primary path
- `app/daydream/brand/page.tsx` â 62 lines â score 108 â primary path
- `app/daydream/game/page.tsx` â 31 lines â score 108 â primary path
- `app/daydream/games/engin/page.tsx` â 30 lines â score 108 â primary path
- `app/daydream/constellation/page.tsx` â 26 lines â score 108 â primary path
- `app/daydream/media-vault/page.tsx` â 21 lines â score 108 â primary path
- `app/daydream/play/page.tsx` â 19 lines â score 108 â primary path
- `app/daydream/brand/engin/page.tsx` â 11 lines â score 108 â primary path
- `app/daydream/code/engin/page.tsx` â 11 lines â score 108 â primary path
- `app/daydream/create/engin/page.tsx` â 11 lines â score 108 â primary path
- `app/daydream/lab/engin/page.tsx` â 11 lines â score 108 â primary path
- `app/daydream/music/engin/page.tsx` â 11 lines â score 108 â primary path
- `app/daydream/render/page.tsx` â 6 lines â score 108 â primary path
- `components/daydream/dream.CodeDreamIDE.tsx` â 1707 lines â score 104 â primary path
- `coresurfaces/home/buttons/contextual-home.ts` â 67 lines â score 104 â primary path
- `components/daydream/dream.LabDreamIDE.tsx` â 1294 lines â score 100 â primary path
- `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` â 684 lines â score 100 â primary path
- `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx` â 668 lines â score 100 â primary path
- `components/daydream/dream.NGNEngin.tsx` â 600 lines â score 100 â primary path
- `daydreams/code/page.tsx` â 545 lines â score 100 â primary path

Supporting files:
- `coresurfaces/dreamsurface.EditProfileDream.tsx` â 537 lines â score 100 â primary path
- `daydreams/lab/page.tsx` â 486 lines â score 100 â primary path
- `components/daydream/dream.shell.DaydreamShell.tsx` â 465 lines â score 100 â primary path
- `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` â 456 lines â score 100 â primary path
- `daydreams/create/page.tsx` â 456 lines â score 100 â primary path
- `daydreams/music/page.tsx` â 393 lines â score 100 â primary path
- `components/daydream/dream.JourneyTrail.tsx` â 386 lines â score 100 â primary path
- `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx` â 378 lines â score 100 â primary path
- `components/daydream/dream.constellationmap.tsx` â 356 lines â score 100 â primary path
- `daydreams/games/page.tsx` â 356 lines â score 100 â primary path
- `coresurfaces/dreamsurface.ViewProfile.tsx` â 354 lines â score 100 â primary path
- `components/daydream/dream.DiffViewer.tsx` â 353 lines â score 100 â primary path
- `components/daydream/starmaker/dream.panel.CompingPanel.tsx` â 347 lines â score 100 â primary path
- `app/daydream/game/dream.shell.ImmersiveGameShell.tsx` â 330 lines â score 100 â primary path
- `daydreams/shared/useDaydreamPersistence.ts` â 147 lines â score 100 â primary path
- `app/daydream/constellation/dream.ConstellationClient.tsx` â 114 lines â score 100 â primary path
- `daydreams/shared/useDaydreamState.ts` â 93 lines â score 100 â primary path
- `coresurfaces/home/buttons/button-groups.ts` â 91 lines â score 100 â primary path
- `daydreams/brand/page.tsx` â 57 lines â score 100 â primary path
- `components/daydream/dream.StandaloneEnginSurface.tsx` â 38 lines â score 100 â primary path
- `components/daydream/dream.OpenDaydreamSideBButton.tsx` â 19 lines â score 100 â primary path
- `app/daydream/game/dream.GamePageClient.tsx` â 5 lines â score 100 â primary path
- `components/runtime/dream.RuntimeView.tsx` â 432 lines â score 63 â supporting path
- `components/runtime/dream.shell.RuntimeShell.tsx` â 352 lines â score 59 â supporting path
- `components/runtime/dream.DualRuntimeContainer.tsx` â 246 lines â score 59 â supporting path
- `engine/runtime/dreamsurface/dreamsurface.bridge.ts` â 51 lines â score 55 â supporting path
- `engine/runtime/dreamsurface/dreamsurface.delta.ts` â 23 lines â score 55 â supporting path
- `engine/runtime/dreamsurface/index.ts` â 8 lines â score 55 â supporting path
## 16. Dreams (Widgets / Windows / Surfaces)

### Plain English
Dreams, widgets, windows, and surfaces are the visible objects users manipulate. This section maps the components and runtime support that make them openable, stateful, movable, and connected to Engins.

### What users experience
Users feel this as cards, panels, windows, widgets, surface launches, and interactive objects that turn the product into a creative operating system rather than a static website.

### Repo Evidence
Matched focused repo evidence: 52 files, about 8,304 readable source lines.

Behavior signals:
- state â 29 file hits
- commerce â 27 file hits
- auth â 26 file hits
- mobile touch â 21 file hits
- runtime â 17 file hits
- events â 15 file hits
- rendering â 12 file hits
- persistence â 8 file hits

Routes and APIs:
- GET|PATCH|DELETE /api/dream-windows/[id] â app/api/dream-windows/[id]/route.ts
- GET|POST /api/dream-windows â app/api/dream-windows/route.ts
- /settings/dreams â app/settings/dreams/page.tsx
- /settings/widgets â app/settings/widgets/page.tsx

Components:
- AppIcon â components/dreams/dreamsurface.dreamspace.tsx
- EngineBarChart â components/dreams/dreamsurface.dreamspace.tsx
- DreamsSpacePanel â components/dreams/dreamsurface.dreamspace.tsx
- DreamWindowTile â components/dreams/dream.widget.SuperDreamWidget.tsx
- ClusterCard â components/dreams/dream.widget.SuperDreamWidget.tsx
- SuperDreamWidget â components/dreams/dream.widget.SuperDreamWidget.tsx
- WidgetCard â components/widgets/dream.widget.WidgetCard.tsx
- JourneyDreamWindow â components/dreams/dream.window.JourneyDreamWindow.tsx
- SkeletonRow â components/dreams/dreamsurface.shell.tsx
- DreamShell â components/dreams/dreamsurface.shell.tsx
- AnchorWidget â components/dream.widget.AnchorWidget.tsx
- UniversalWidget â components/widgets/dream.widget.UniversalWidget.tsx
- PlayMediaWidget â components/widgets/dream.widget.PlayMediaWidget.tsx
- WidgetBubble â components/dream.widget.WidgetBubble.tsx

Hooks:
- useDreamsRuntime â components/dreams/dreamsurface.dreamspace.tsx
- useSessionIntelligence â components/dreams/dreamsurface.dreamspace.tsx
- useRouter â components/dreams/dreamsurface.dreamspace.tsx
- useCallback â components/dreams/dreamsurface.dreamspace.tsx
- useEffect â components/dreams/dreamsurface.dreamspace.tsx
- useRef â components/dreams/dreamsurface.dreamspace.tsx
- useState â components/dreams/dreamsurface.dreamspace.tsx
- useDreamWindowActions â components/dreams/dream.widget.SuperDreamWidget.tsx
- useCallback â components/dreams/dream.widget.SuperDreamWidget.tsx
- useMemo â components/dreams/dream.widget.SuperDreamWidget.tsx
- useState â components/dreams/dream.widget.SuperDreamWidget.tsx
- useEffect â components/dreams/dreamsurface.shell.tsx
- useRef â components/dreams/dreamsurface.shell.tsx
- useState â components/dreams/dreamsurface.shell.tsx

Exports that define public behavior:
- getAppRoute â components/dreams/dreamsurface.dreamspace.tsx
- RecentDestination â components/dreams/dreamsurface.dreamspace.tsx
- buildRecentDestinations â components/dreams/dreamsurface.dreamspace.tsx
- default export â dreamsurface.dreamspace (components/dreams/dreamsurface.dreamspace.tsx)
- DreamSurface â types/widget-system-v2.ts
- DreamSurfaceKey â types/widget-system-v2.ts
- WidgetTransform â types/widget-system-v2.ts
- transformToArray â types/widget-system-v2.ts
- transformFromArray â types/widget-system-v2.ts
- FeedHostConfig â types/widget-system-v2.ts
- CompositePane â types/widget-system-v2.ts
- CompositeHostConfig â types/widget-system-v2.ts
- HostConfig â types/widget-system-v2.ts
- DreamDefinition â types/widget-system-v2.ts

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
- `components/dreams/dreamsurface.dreamspace.tsx` â 891 lines â score 138 â primary path, path keyword: dreamsurface
- `types/widget-system-v2.ts` â 373 lines â score 138 â primary path, path keyword: widget
- `components/dreams/dream.widget.SuperDreamWidget.tsx` â 377 lines â score 134 â primary path, path keyword: widget
- `app/api/dream-windows/[id]/route.ts` â 300 lines â score 134 â primary path, path keyword: dream window
- `app/api/dream-windows/route.ts` â 185 lines â score 134 â primary path, path keyword: dream window
- `components/widgets/dream.widget.WidgetCard.tsx` â 62 lines â score 134 â primary path, path keyword: widget
- `components/dreams/dream.window.JourneyDreamWindow.tsx` â 57 lines â score 134 â primary path, path keyword: dream window
- `components/widgets/dream.widget.WidgetSurface.tsx` â 19 lines â score 134 â primary path, path keyword: widget
- `engine/dream-window/DreamWindowLifecycle.ts` â 302 lines â score 130 â primary path, path keyword: dream window
- `components/dreams/dreamsurface.shell.tsx` â 258 lines â score 130 â primary path, path keyword: dreamsurface
- `engine/dream-window/runtimeRegion.ts` â 256 lines â score 130 â primary path, path keyword: dream window
- `engine/dream-window/connectionVerbs.ts` â 229 lines â score 130 â primary path, path keyword: dream window
- `types/dream-window.ts` â 105 lines â score 130 â primary path, path keyword: dream window
- `engine/dream-window/index.ts` â 51 lines â score 130 â primary path, path keyword: dream window
- `components/widgets/dream.widget.WidgetLibrary.tsx` â 19 lines â score 130 â primary path, path keyword: widget
- `components/widgets/dream.widget.WidgetShell.tsx` â 9 lines â score 130 â primary path, path keyword: widget
- `components/dream.widget.AnchorWidget.tsx` â 300 lines â score 126 â primary path, path keyword: widget
- `engine/dream-window/useDreamWindowActions.ts` â 287 lines â score 126 â primary path, path keyword: dream window
- `components/widgets/dream.widget.UniversalWidget.tsx` â 230 lines â score 126 â primary path, path keyword: widget
- `engine/dream-window/enginConnectionNetwork.ts` â 205 lines â score 126 â primary path, path keyword: dream window
- `components/widgets/dream.widget.PlayMediaWidget.tsx` â 152 lines â score 126 â primary path, path keyword: widget
- `components/dream.widget.WidgetBubble.tsx` â 112 lines â score 126 â primary path, path keyword: widget
- `components/widgets/dream.widget.WidgetPlaceholder.tsx` â 106 lines â score 126 â primary path, path keyword: widget
- `components/dream.widget.ProfileWidgetBlock.tsx` â 102 lines â score 126 â primary path, path keyword: widget
- `components/dreams/dreamsurface.window.tsx` â 67 lines â score 126 â primary path, path keyword: dreamsurface
- `app/settings/dreams/page.tsx` â 40 lines â score 120 â primary path
- `app/settings/widgets/page.tsx` â 40 lines â score 120 â primary path
- `engine/dreams/types.ts` â 483 lines â score 116 â primary path
- `components/dream.DragToAnchorClose.tsx` â 174 lines â score 108 â primary path
- `app/settings/dreams/dreams-layout-editor.tsx` â 83 lines â score 108 â primary path
- `engine/dreams/dreamIntentBus.ts` â 184 lines â score 104 â primary path
- `components/widgets/dream.ConfigureSheet.tsx` â 160 lines â score 104 â primary path
- `components/dreams/dream.panel.RuntimeMemoryHUD.tsx` â 158 lines â score 104 â primary path
- `types/widgets.ts` â 155 lines â score 104 â primary path

Supporting files:
- `engine/dreams/useDreamsRuntime.ts` â 101 lines â score 104 â primary path
- `types/widgetConfigs.ts` â 98 lines â score 104 â primary path
- `components/dreams/dream.DraggableDream.tsx` â 75 lines â score 104 â primary path
- `engine/dreams/drag.ts` â 65 lines â score 104 â primary path
- `components/widgets/dream.AddDreamCTA.tsx` â 63 lines â score 104 â primary path
- `components/dreams/dream.SlideOverPanel.tsx` â 50 lines â score 104 â primary path
- `components/dreams/dream.shell.DreamShell.tsx` â 5 lines â score 104 â primary path
- `components/dreams/dream.shell.SharedDreamShell.tsx` â 402 lines â score 100 â primary path
- `engine/dreams/DreamRegistry.tsx` â 119 lines â score 100 â primary path
- `components/dreams/dream.GlobalDragLayer.tsx` â 97 lines â score 100 â primary path
- `components/widgets/dream.EditModeBanner.tsx` â 55 lines â score 100 â primary path
- `components/widgets/dream.EditModeProvider.tsx` â 35 lines â score 100 â primary path
- `components/dreams/dream.outputlayer.tsx` â 33 lines â score 100 â primary path
- `components/dreams/dream.connectorlayer.tsx` â 31 lines â score 100 â primary path
- `engine/dreams/profileProjection.ts` â 28 lines â score 100 â primary path
- `components/dreams/dream.PlatformErrorReporter.tsx` â 25 lines â score 100 â primary path
- `components/dreams/dream.featurelayer.tsx` â 22 lines â score 100 â primary path
- `components/dream.FeedCard.tsx` â 469 lines â score 59 â supporting path
## 17. User-Facing Modularity

### Plain English
User-facing modularity is the part of DREAMengin that lets features feel composable to people: launchable modules, reusable panels, shared shells, configurable surfaces, and modules that can move between contexts.

### What users experience
Users feel modularity when they can open a tool from more than one place, carry state across a surface, combine Engins, and customize the product without waiting for a fixed page.

### Repo Evidence
Matched focused repo evidence: 45 files, about 7,123 readable source lines.

Behavior signals:
- commerce â 30 file hits
- state â 26 file hits
- mobile touch â 25 file hits
- rendering â 25 file hits
- runtime â 24 file hits
- auth â 20 file hits
- events â 15 file hits
- persistence â 13 file hits

Routes and APIs:
- None found.

Components:
- ProfilePanel â components/panels/dream.panel.ProfilePanel.tsx
- SettingsPanel â components/panels/dream.panel.SettingsPanel.tsx
- HelpPanel â components/panels/dream.panel.HelpPanel.tsx
- Toggle â components/panels/dream.panel.FeedSettingsPanel.tsx
- FeedSettingsPanel â components/panels/dream.panel.FeedSettingsPanel.tsx
- GradientThemePicker â components/panels/dream.panel.AppearancePanel.tsx
- Slider â components/panels/dream.panel.AppearancePanel.tsx
- PresetCard â components/panels/dream.panel.AppearancePanel.tsx
- AppearancePanel â components/panels/dream.panel.AppearancePanel.tsx
- Toggle â components/panels/dream.panel.PrivacyPanel.tsx
- PrivacyPanel â components/panels/dream.panel.PrivacyPanel.tsx
- DataPanel â components/panels/dream.panel.DataPanel.tsx
- MarketplacePanel â components/panels/dream.panel.MarketplacePanel.tsx
- WidgetsPanel â components/panels/dream.panel.WidgetsPanel.tsx

Hooks:
- useCallback â components/panels/dream.panel.ProfilePanel.tsx
- useEffect â components/panels/dream.panel.ProfilePanel.tsx
- useRef â components/panels/dream.panel.ProfilePanel.tsx
- useState â components/panels/dream.panel.ProfilePanel.tsx
- useDreamSystem â components/panels/dream.panel.SettingsPanel.tsx
- useEffect â components/panels/dream.panel.SettingsPanel.tsx
- useState â components/panels/dream.panel.SettingsPanel.tsx
- useDreamSystem â components/panels/dream.panel.HelpPanel.tsx
- useCallback â components/panels/dream.panel.FeedSettingsPanel.tsx
- useEffect â components/panels/dream.panel.FeedSettingsPanel.tsx
- useState â components/panels/dream.panel.FeedSettingsPanel.tsx
- useTheme â components/panels/dream.panel.AppearancePanel.tsx
- useDreamSystem â components/panels/dream.panel.AppearancePanel.tsx
- useCustomizeMode â components/panels/dream.panel.AppearancePanel.tsx

Exports that define public behavior:
- RuntimeId â types/module-manifest.ts
- ModuleType â types/module-manifest.ts
- ModuleManifest â types/module-manifest.ts
- RuntimeCompatibility â types/module-manifest.ts
- ModuleCompatibility â types/module-manifest.ts
- isModuleManifest â types/module-manifest.ts
- negotiateModuleCompatibility â types/module-manifest.ts
- default export â dream.panel.ProfilePanel (components/panels/dream.panel.ProfilePanel.tsx)
- default export â dream.panel.SettingsPanel (components/panels/dream.panel.SettingsPanel.tsx)
- default export â dream.panel.HelpPanel (components/panels/dream.panel.HelpPanel.tsx)
- default export â dream.panel.FeedSettingsPanel (components/panels/dream.panel.FeedSettingsPanel.tsx)
- default export â dream.panel.AppearancePanel (components/panels/dream.panel.AppearancePanel.tsx)
- default export â dream.panel.PrivacyPanel (components/panels/dream.panel.PrivacyPanel.tsx)
- default export â dream.panel.DataPanel (components/panels/dream.panel.DataPanel.tsx)

Import/export connections:
- engine/engin-runtime/EnginBaseState
- components/profile/dream.widget.ProfileWidgetGrid
- components/ui/dream.DreamWord
- supabase/client/client
- supabase/client/safeGetUser
- lucide-react
- react
- dreamdmbar/runtime/DreamSystemContext
- components/panels/panelTypes
- components/panels/dream.panel.FeedSettingsPanel
- dreamr/feed/feedTopics
- components/dream.ThemeApplicator
- components/providers/dream.ThemeProvider
- components/ui-system/CustomizeModeContext

### Matched Files

Primary files:
- `types/module-manifest.ts` â 183 lines â score 152 â primary path, path keyword: module
- `components/panels/dream.panel.ProfilePanel.tsx` â 338 lines â score 126 â primary path, path keyword: panel
- `components/panels/dream.panel.SettingsPanel.tsx` â 185 lines â score 126 â primary path, path keyword: panel
- `components/panels/dream.panel.HelpPanel.tsx` â 71 lines â score 126 â primary path, path keyword: panel
- `components/panels/dream.panel.FeedPanel.tsx` â 4 lines â score 126 â primary path, path keyword: panel
- `components/panels/dream.panel.FeedSettingsPanel.tsx` â 192 lines â score 122 â primary path, path keyword: panel
- `components/panels/dream.panel.AppearancePanel.tsx` â 166 lines â score 122 â primary path, path keyword: panel
- `components/panels/dream.panel.PrivacyPanel.tsx` â 146 lines â score 122 â primary path, path keyword: panel
- `components/panels/dream.panel.DataPanel.tsx` â 139 lines â score 122 â primary path, path keyword: panel
- `components/panels/dream.panel.MarketplacePanel.tsx` â 139 lines â score 122 â primary path, path keyword: panel
- `components/panels/dream.panel.WidgetsPanel.tsx` â 108 lines â score 122 â primary path, path keyword: panel
- `components/panels/dream.panel.SafetyPanel.tsx` â 102 lines â score 122 â primary path, path keyword: panel
- `components/panels/dream.panel.ControlsPanel.tsx` â 90 lines â score 122 â primary path, path keyword: panel
- `components/panels/dream.panel.ConnectorsPanel.tsx` â 48 lines â score 122 â primary path, path keyword: panel
- `components/panels/dream.panel.AlgorithmPanel.tsx` â 36 lines â score 122 â primary path, path keyword: panel
- `engine/runtime/moduleRegistry.ts` â 170 lines â score 112 â primary path
- `engine/runtime/dropTargetRegistry.ts` â 116 lines â score 112 â primary path
- `components/runtime/dream.RuntimeView.tsx` â 432 lines â score 108 â primary path
- `components/runtime/dream.shell.RuntimeShell.tsx` â 352 lines â score 108 â primary path
- `components/runtime/dream.DualRuntimeContainer.tsx` â 246 lines â score 108 â primary path
- `components/home/dream.ActiveModuleSurface.tsx` â 475 lines â score 104 â primary path
- `dreamdmbar/hooks/useModuleBarIntent.ts` â 87 lines â score 104 â primary path
- `components/panels/panelTypes.ts` â 47 lines â score 104 â primary path
- `components/dreams/dream.panel.RuntimeMemoryHUD.tsx` â 158 lines â score 85 â supporting path, path keyword: panel
- `components/draggable/dream.DraggableModule.tsx` â 359 lines â score 63 â supporting path
- `components/dreams/dreamsurface.window.tsx` â 67 lines â score 63 â supporting path
- `components/dreams/dreamsurface.dreamspace.tsx` â 891 lines â score 59 â supporting path
- `components/dreams/dream.SlideOverPanel.tsx` â 50 lines â score 59 â supporting path
- `components/dreams/dream.shell.SharedDreamShell.tsx` â 402 lines â score 55 â supporting path
- `components/dreams/dream.widget.SuperDreamWidget.tsx` â 377 lines â score 55 â supporting path
- `components/dreams/dreamsurface.shell.tsx` â 258 lines â score 55 â supporting path
- `components/engines/shared/dream.shell.EnginAppShell.tsx` â 114 lines â score 55 â supporting path
- `components/dreams/dream.GlobalDragLayer.tsx` â 97 lines â score 55 â supporting path
- `components/dreams/dream.DraggableDream.tsx` â 75 lines â score 55 â supporting path

Supporting files:
- `components/engines/shared/dream.makeEnginApp.tsx` â 64 lines â score 55 â supporting path
- `components/dreams/dream.window.JourneyDreamWindow.tsx` â 57 lines â score 55 â supporting path
- `components/engines/shared/dream.EnginProvider.tsx` â 54 lines â score 55 â supporting path
- `components/engines/shared/dream.bar.EnginNavBar.tsx` â 51 lines â score 55 â supporting path
- `components/engines/shared/dream.EnginRuleSet.ts` â 51 lines â score 55 â supporting path
- `components/dreams/dream.outputlayer.tsx` â 33 lines â score 55 â supporting path
- `components/dreams/dream.connectorlayer.tsx` â 31 lines â score 55 â supporting path
- `components/dreams/dream.PlatformErrorReporter.tsx` â 25 lines â score 55 â supporting path
- `components/dreams/dream.featurelayer.tsx` â 22 lines â score 55 â supporting path
- `components/engines/shared/index.ts` â 10 lines â score 55 â supporting path
- `components/dreams/dream.shell.DreamShell.tsx` â 5 lines â score 55 â supporting path
## 18. Custom Engins

### Plain English
Custom Engins are the extension story: code, rules, manifests, registries, and capability boundaries that let DREAMengin grow by adding or composing new Engin behavior.

### What users experience
Users feel this when the product can add new studios, workflows, or creative capabilities without forcing a totally new app.

### Repo Evidence
Matched focused repo evidence: 90 files, about 16,492 readable source lines.

Behavior signals:
- persistence â 49 file hits
- state â 47 file hits
- runtime â 42 file hits
- auth â 41 file hits
- rendering â 39 file hits
- events â 23 file hits
- commerce â 20 file hits
- mobile touch â 12 file hits

Routes and APIs:
- /engines â app/engines/page.tsx
- /engines/games/builder â app/engines/games/builder/page.tsx
- /engines/games/library â app/engines/games/library/page.tsx
- /engines/games/scores â app/engines/games/scores/page.tsx
- /engines/code/notebook â app/engines/code/notebook/page.tsx
- /engines/music/arrange â app/engines/music/arrange/page.tsx
- /engines/music/library â app/engines/music/library/page.tsx
- /engines/music/studio â app/engines/music/studio/page.tsx
- /engines/code/ai â app/engines/code/ai/page.tsx
- /engines/code/projects â app/engines/code/projects/page.tsx
- /engines/lab/data â app/engines/lab/data/page.tsx
- /engines/lab/experiments â app/engines/lab/experiments/page.tsx
- /engines/lab/quantum â app/engines/lab/quantum/page.tsx
- /engines/portfolio/assets â app/engines/portfolio/assets/page.tsx
- /engines/portfolio/optimize â app/engines/portfolio/optimize/page.tsx
- /engines/portfolio/quantum â app/engines/portfolio/quantum/page.tsx

Components:
- EnginesHubPage â app/engines/page.tsx
- GamesBuilderPage â app/engines/games/builder/page.tsx
- GamesLibraryPage â app/engines/games/library/page.tsx
- GamesScoresPage â app/engines/games/scores/page.tsx
- CodeNotebookPage â app/engines/code/notebook/page.tsx
- MusicArrangePage â app/engines/music/arrange/page.tsx
- MusicLibraryPage â app/engines/music/library/page.tsx
- MusicStudioPage â app/engines/music/studio/page.tsx
- CodeAIPage â app/engines/code/ai/page.tsx
- CodeProjectsPage â app/engines/code/projects/page.tsx
- LabDataPage â app/engines/lab/data/page.tsx
- LabExperimentsPage â app/engines/lab/experiments/page.tsx
- LabQuantumPage â app/engines/lab/quantum/page.tsx
- PortfolioAssetsPage â app/engines/portfolio/assets/page.tsx

Hooks:
- useContext â engins/gameengin/cartridges/reactCartridge.ts
- useGameEngineAPI â engins/gameengin/cartridges/reactCartridge.ts
- useEffect â engins/gameengin/cartridges/reactCartridge.ts
- useEnginWorkflow â engins/rulesets/workflowEngine.ts
- useCallback â engins/forgeengin/forge/useForgeBuild.ts
- useRef â engins/forgeengin/forge/useForgeBuild.ts
- useState â engins/forgeengin/forge/useForgeBuild.ts
- useForgeBuild â engins/forgeengin/forge/useForgeBuild.ts
- useCallback â engins/rulesets/useEnginWorkflow.ts
- useEffect â engins/rulesets/useEnginWorkflow.ts
- useState â engins/rulesets/useEnginWorkflow.ts
- useEnginWorkflow â engins/rulesets/useEnginWorkflow.ts
- useCallback â engins/rulesets/game/useGameEnginRuntime.ts
- useEffect â engins/rulesets/game/useGameEnginRuntime.ts

Exports that define public behavior:
- CartridgeRenderMode â engins/gameengin/cartridges/manifest.ts
- CartridgeAssetPolicy â engins/gameengin/cartridges/manifest.ts
- CartridgeLaunchMetadata â engins/gameengin/cartridges/manifest.ts
- CartridgeManifestEntry â engins/gameengin/cartridges/manifest.ts
- getCartridgeManifest â engins/gameengin/cartridges/manifest.ts
- getCartridgeCategories â engins/gameengin/cartridges/manifest.ts
- RuntimeId â types/module-manifest.ts
- ModuleType â types/module-manifest.ts
- ModuleManifest â types/module-manifest.ts
- RuntimeCompatibility â types/module-manifest.ts
- ModuleCompatibility â types/module-manifest.ts
- isModuleManifest â types/module-manifest.ts
- negotiateModuleCompatibility â types/module-manifest.ts
- ArtifactPermissionSchema â engins/forgeengin/enginpipe/artifact/manifest.ts

Import/export connections:
- ../cartridge
- engine/engin-runtime/EnginBaseState
- zod
- ./EnginBaseState
- ./EnginCapabilities
- ./EnginEventBus
- ./EnginIOAdapter
- ./EnginCapabilityTargets
- ./EnginCapabilityExecution
- ./HotRuntime
- ./EnginSnapshotFingerprint
- ./PremiumRuntimeQuality
- ./EnginRuleSetContract
- engine/engin-runtime/EnginCapabilities

### Matched Files

Primary files:
- `engins/gameengin/cartridges/manifest.ts` â 172 lines â score 130 â primary path, path keyword: manifest
- `types/module-manifest.ts` â 183 lines â score 126 â primary path, path keyword: manifest
- `engins/forgeengin/enginpipe/artifact/manifest.ts` â 103 lines â score 126 â primary path, path keyword: manifest
- `engins/gameengin/cartridge-manifest.ts` â 65 lines â score 126 â primary path, path keyword: manifest
- `engine/engin-runtime/EnginRuntime.ts` â 1082 lines â score 112 â primary path
- `engine/engin-runtime/EnginRuleSetContract.ts` â 286 lines â score 112 â primary path
- `engine/engin-runtime/EnginCapabilityTargets.ts` â 473 lines â score 108 â primary path
- `engins/forgeengin/forge/forgeRegistry.ts` â 433 lines â score 108 â primary path
- `engins/rulesets/game/gameEnginRuleSet.ts` â 302 lines â score 108 â primary path
- `engins/rulesets/music/starMakerEnginRuleSet.ts` â 265 lines â score 108 â primary path
- `engins/rulesets/brand/brandEnginRuleSet.ts` â 241 lines â score 108 â primary path
- `engins/rulesets/lab/labEnginRuleSet.ts` â 233 lines â score 108 â primary path
- `engins/gameengin/cartridges/loaders.ts` â 97 lines â score 108 â primary path
- `engins/gameengin/cartridges/index.ts` â 17 lines â score 108 â primary path
- `engine/engin-runtime/EnginDomainCores.ts` â 758 lines â score 104 â primary path
- `engins/forgeengin/forge/forgeIntelligence.ts` â 618 lines â score 104 â primary path
- `engine/runtime/enginWorkflowRegistry.ts` â 599 lines â score 104 â primary path
- `engine/engin-runtime/EnginBaseState.ts` â 496 lines â score 104 â primary path
- `engins/rulesets/code/codeEnginRuleSet.ts` â 395 lines â score 104 â primary path
- `engine/engin-runtime/EnginCapabilities.ts` â 242 lines â score 104 â primary path
- `engine/engin-runtime/index.ts` â 233 lines â score 104 â primary path
- `engine/engin-runtime/PremiumRuntimeQuality.ts` â 173 lines â score 104 â primary path
- `engins/gameengin/cartridges/reactCartridge.ts` â 138 lines â score 104 â primary path
- `engins/gameengin/cartridges/achievementEngine.ts` â 126 lines â score 104 â primary path
- `engins/gameengin/cartridges/apiStubs.ts` â 75 lines â score 104 â primary path
- `engins/gameengin/assets/BundleManifest.ts` â 40 lines â score 104 â primary path
- `engins/rulesets/content/contentEnginRuleSet.ts` â 37 lines â score 104 â primary path
- `engine/engin-runtime/EnginRuntimeRegistry.ts` â 35 lines â score 104 â primary path
- `engins/rulesets/forge/index.ts` â 24 lines â score 104 â primary path
- `engins/rulesets/code/index.ts` â 23 lines â score 104 â primary path
- `engins/rulesets/dreams/index.ts` â 23 lines â score 104 â primary path
- `engins/rulesets/game/declarative.ts` â 23 lines â score 104 â primary path
- `engins/rulesets/lab/index.ts` â 23 lines â score 104 â primary path
- `engins/rulesets/music/index.ts` â 23 lines â score 104 â primary path

Supporting files:
- `engins/rulesets/homedream/index.ts` â 15 lines â score 104 â primary path
- `engins/contentengin/pipeline/writeManifest.ts` â 4 lines â score 104 â primary path
- `engine/engin-runtime/HotRuntime.ts` â 1164 lines â score 100 â primary path
- `engine/engin-runtime/EnginCapabilityExecution.ts` â 515 lines â score 100 â primary path
- `engins/forgeengin/forge/forgeRituals.ts` â 375 lines â score 100 â primary path
- `engins/forgeengin/forge/forgeNexus.ts` â 311 lines â score 100 â primary path
- `engins/forgeengin/forge/forgeMomentum.ts` â 297 lines â score 100 â primary path
- `engins/rulesets/workflowEngine.ts` â 281 lines â score 100 â primary path
- `engins/forgeengin/forge/engineForge.ts` â 234 lines â score 100 â primary path
- `engins/forgeengin/forge/useForgeBuild.ts` â 234 lines â score 100 â primary path
- `engins/forgeengin/forge/forgeBuild.ts` â 227 lines â score 100 â primary path
- `engins/rulesets/useEnginWorkflow.ts` â 222 lines â score 100 â primary path
- `engine/engin-runtime/EnginIOAdapter.ts` â 214 lines â score 100 â primary path
- `engins/gameengin/cartridges/saveState.ts` â 145 lines â score 100 â primary path
- `engine/engin-runtime/EnginEventBus.ts` â 123 lines â score 100 â primary path
- `engine/engin-runtime/EnginCapabilityScorecard.ts` â 122 lines â score 100 â primary path
- `engins/rulesets/game/useGameEnginRuntime.ts` â 119 lines â score 100 â primary path
- `engins/rulesets/brand/useBrandEnginRuntime.ts` â 109 lines â score 100 â primary path
- `engins/rulesets/code/useCodeEnginRuntime.ts` â 109 lines â score 100 â primary path
- `engins/rulesets/content/useContentEnginRuntime.ts` â 109 lines â score 100 â primary path
- `engins/rulesets/lab/useLabEnginRuntime.ts` â 109 lines â score 100 â primary path
- `engins/rulesets/music/useStarMakerEnginRuntime.ts` â 109 lines â score 100 â primary path
- `engine/engin-runtime/EnginHardwareCapabilities.ts` â 96 lines â score 100 â primary path
- `engine/engin-runtime/EnginPerformanceProbe.ts` â 94 lines â score 100 â primary path
- `engine/engin-runtime/EnginSnapshotFingerprint.ts` â 90 lines â score 100 â primary path
- `engins/forgeengin/forge/useForgeActivity.ts` â 65 lines â score 100 â primary path
- `engine/engin-runtime/InternalMetrics.ts` â 47 lines â score 100 â primary path
- `engins/rulesets/homedream/dream.homedream.physics.ts` â 36 lines â score 100 â primary path
- `app/engines/page.tsx` â 130 lines â score 63 â supporting path
- `app/engines/games/builder/page.tsx` â 51 lines â score 63 â supporting path
## 19. Full Website Customizability

### Plain English
Full website customizability covers appearance, profile editing, brand surfaces, themes, layouts, public profiles, settings, and any code that lets users change how their site or identity looks.

### What users experience
Users experience this as profile editing, theme choices, brand customization, public pages, custom identity, and the ability to make DREAMengin feel like their own site.

### Repo Evidence
Matched focused repo evidence: 52 files, about 16,204 readable source lines.

Behavior signals:
- commerce â 37 file hits
- auth â 29 file hits
- persistence â 28 file hits
- mobile touch â 24 file hits
- state â 19 file hits
- events â 11 file hits
- rendering â 9 file hits
- runtime â 3 file hits

Routes and APIs:
- /settings/appearance â app/settings/appearance/page.tsx
- /view-profile â app/view-profile/page.tsx
- /profile/[handle] â app/profile/[handle]/page.tsx
- /profile â app/profile/page.tsx
- /settings â app/settings/page.tsx
- /settings/help â app/settings/help/page.tsx
- /edit-profiledream â app/edit-profiledream/page.tsx
- /settings/account â app/settings/account/page.tsx
- /settings/security â app/settings/security/page.tsx
- /settings/notifications â app/settings/notifications/page.tsx
- /settings/safety â app/settings/safety/page.tsx
- /settings/dreams â app/settings/dreams/page.tsx
- /settings/widgets â app/settings/widgets/page.tsx
- /settings/algorithm â app/settings/algorithm/page.tsx
- /settings/controls â app/settings/controls/page.tsx
- /settings/data â app/settings/data/page.tsx

Components:
- VoidThemeSection â app/settings/appearance/page.tsx
- GradientThemePicker â app/settings/appearance/page.tsx
- Slider â app/settings/appearance/page.tsx
- PresetCard â app/settings/appearance/page.tsx
- BgImageSection â app/settings/appearance/page.tsx
- AppearanceSettingsPage â app/settings/appearance/page.tsx
- ViewProfilePage â app/view-profile/page.tsx
- ProfilePage â app/profile/[handle]/page.tsx
- ProfileCustomizeButton â components/profile/dream.ProfileCustomizeButton.tsx
- ProfileLegacyPage â app/profile/page.tsx
- DotGrid â components/profile/dream.widget.ProfileWidgetGrid.tsx
- SparkLine â components/profile/dream.widget.ProfileWidgetGrid.tsx
- BarChart â components/profile/dream.widget.ProfileWidgetGrid.tsx
- WidgetConfigSheet â components/profile/dream.widget.ProfileWidgetGrid.tsx

Hooks:
- useTheme â app/settings/appearance/page.tsx
- useCustomizeMode â app/settings/appearance/page.tsx
- useCallback â app/settings/appearance/page.tsx
- useEffect â app/settings/appearance/page.tsx
- useRef â app/settings/appearance/page.tsx
- useState â app/settings/appearance/page.tsx
- useCustomizeMode â components/profile/dream.ProfileCustomizeButton.tsx
- useRef â components/profile/dream.widget.ProfileWidgetGrid.tsx
- useState â components/profile/dream.widget.ProfileWidgetGrid.tsx
- useCallback â components/profile/dream.ProfileCanvas.tsx
- useState â components/profile/dream.ProfileCanvas.tsx
- useRouter â components/profile/dream.EditableAvatar.tsx
- useSharedDream â engins/engin.BrandingEngin.tsx
- useDaydreamPersistence â engins/engin.BrandingEngin.tsx

Exports that define public behavior:
- default export â page (app/settings/appearance/page.tsx)
- metadata â app/view-profile/page.tsx
- default export â page (app/view-profile/page.tsx)
- default export â page (app/profile/[handle]/page.tsx)
- default export â dream.ProfileCustomizeButton (components/profile/dream.ProfileCustomizeButton.tsx)
- default export â page (app/profile/page.tsx)
- WidgetType â components/profile/dream.widget.ProfileWidgetGrid.tsx
- WidgetSize â components/profile/dream.widget.ProfileWidgetGrid.tsx
- WidgetBgStyle â components/profile/dream.widget.ProfileWidgetGrid.tsx
- WidgetConfig â components/profile/dream.widget.ProfileWidgetGrid.tsx
- Widget â components/profile/dream.widget.ProfileWidgetGrid.tsx
- DreamType â components/profile/dream.widget.ProfileWidgetGrid.tsx
- DreamSize â components/profile/dream.widget.ProfileWidgetGrid.tsx
- DreamBgStyle â components/profile/dream.widget.ProfileWidgetGrid.tsx

Import/export connections:
- components/dream.ThemeApplicator
- components/providers/dream.ThemeProvider
- components/ui-system/CustomizeModeContext
- components/ui-system/theme-engine
- lucide-react
- next/link
- react
- components/activity/dream.ActivityProfile
- components/dream.ProfileShareButton
- components/profile/dream.widget.ProfileWidgetGrid
- components/ui/dream.DreamWord
- supabase/server/serverClient
- supabase/client/safeGetUser
- @supabase/supabase-js

### Matched Files

Primary files:
- `app/settings/appearance/page.tsx` â 750 lines â score 146 â primary path, path keyword: appearance
- `app/view-profile/page.tsx` â 365 lines â score 134 â primary path, path keyword: profile
- `app/profile/[handle]/page.tsx` â 252 lines â score 134 â primary path, path keyword: profile
- `components/profile/dream.ProfileCustomizeButton.tsx` â 30 lines â score 134 â primary path, path keyword: profile
- `app/profile/page.tsx` â 18 lines â score 134 â primary path, path keyword: profile
- `components/profile/dream.widget.ProfileWidgetGrid.tsx` â 2209 lines â score 130 â primary path, path keyword: profile
- `components/profile/dream.ProfileCanvas.tsx` â 340 lines â score 130 â primary path, path keyword: profile
- `components/ui-system/theme-engine.ts` â 279 lines â score 126 â primary path, path keyword: theme
- `components/profile/dream.EditableAvatar.tsx` â 110 lines â score 126 â primary path, path keyword: profile
- `app/settings/page.tsx` â 172 lines â score 124 â primary path
- `styles/theme.css` â 34 lines â score 122 â primary path, path keyword: theme
- `app/settings/help/page.tsx` â 94 lines â score 116 â primary path
- `styles/globals.css` â 5174 lines â score 112 â primary path
- `engins/engin.BrandingEngin.tsx` â 1260 lines â score 112 â primary path
- `app/edit-profiledream/page.tsx` â 561 lines â score 112 â primary path
- `app/settings/account/page.tsx` â 125 lines â score 112 â primary path
- `app/settings/security/page.tsx` â 254 lines â score 108 â primary path
- `app/settings/notifications/page.tsx` â 207 lines â score 108 â primary path
- `app/settings/safety/page.tsx` â 179 lines â score 108 â primary path
- `app/settings/dreams/page.tsx` â 40 lines â score 108 â primary path
- `app/settings/widgets/page.tsx` â 40 lines â score 108 â primary path
- `app/settings/algorithm/page.tsx` â 39 lines â score 108 â primary path
- `app/settings/controls/page.tsx` â 19 lines â score 108 â primary path
- `app/settings/data/page.tsx` â 19 lines â score 108 â primary path
- `app/settings/privacy/page.tsx` â 19 lines â score 108 â primary path
- `app/settings/feed/page.tsx` â 14 lines â score 108 â primary path
- `app/settings/privacy/dream.PrivacyClient.tsx` â 394 lines â score 104 â primary path
- `app/settings/account/dream.DangerZoneActions.tsx` â 325 lines â score 104 â primary path
- `components/ui-system/CustomizeModeContext.tsx` â 143 lines â score 104 â primary path
- `app/settings/data/dream.DataClient.tsx` â 138 lines â score 104 â primary path
- `components/dream.ThemeApplicator.tsx` â 96 lines â score 104 â primary path
- `components/providers/dream.ThemeProvider.tsx` â 91 lines â score 104 â primary path
- `styles/home-dream.css` â 235 lines â score 100 â primary path
- `app/settings/controls/dream.ControlsClient.tsx` â 163 lines â score 100 â primary path

Supporting files:
- `app/settings/dreams/dreams-layout-editor.tsx` â 83 lines â score 100 â primary path
- `app/settings/controls/dream.PositionIndicatorToggle.tsx` â 54 lines â score 100 â primary path
- `styles/view-transitions.css` â 49 lines â score 100 â primary path
- `styles/dream-shell.css` â 24 lines â score 100 â primary path
- `app/api/settings/appearance/route.ts` â 92 lines â score 93 â supporting path, path keyword: appearance
- `components/customize/dream.bar.CustomizeModeBar.tsx` â 92 lines â score 85 â supporting path, path keyword: customize
- `components/customize/dream.bar.CustomizeToolbar.tsx` â 104 lines â score 81 â supporting path, path keyword: customize
- `components/customize/dream.GlobalCustomizeUI.tsx` â 31 lines â score 81 â supporting path, path keyword: customize
- `components/customize/panels/dream.panel.ColorPanel.tsx` â 234 lines â score 77 â supporting path, path keyword: customize
- `components/customize/panels/dream.panel.LayoutPanel.tsx` â 141 lines â score 77 â supporting path, path keyword: customize
- `components/customize/panels/dream.panel.EffectsPanel.tsx` â 112 lines â score 77 â supporting path, path keyword: customize
- `components/customize/panels/dream.panel.FontPanel.tsx` â 110 lines â score 77 â supporting path, path keyword: customize
- `components/dream.ProfileEditor.tsx` â 457 lines â score 67 â supporting path
- `app/api/settings/feed/route.ts` â 89 lines â score 63 â supporting path
- `app/api/settings/notifications/route.ts` â 84 lines â score 63 â supporting path
- `app/api/settings/privacy/route.ts` â 84 lines â score 63 â supporting path
- `components/dream.ProfileSpace.tsx` â 102 lines â score 59 â supporting path
- `components/dream.ProfileShareButton.tsx` â 74 lines â score 59 â supporting path
## 20. Backend, System, Core & CoreSurfaces

### Plain English
Backend, system, core, and CoreSurfaces are the under-the-hood execution pieces: APIs, server routes, persistence, Supabase schema, shared runtime code, system surfaces, and infrastructure that keep the app functional.

### What users experience
Users feel this indirectly when data saves, pages load, auth works, messages arrive, runtime state persists, and core surfaces do not collapse while switching contexts.

### Repo Evidence
Matched focused repo evidence: 100 files, about 31,663 readable source lines.

Behavior signals:
- auth â 95 file hits
- persistence â 87 file hits
- commerce â 46 file hits
- state â 32 file hits
- events â 28 file hits
- rendering â 23 file hits
- runtime â 20 file hits
- mobile touch â 14 file hits

Routes and APIs:
- GET /api/auth/providers â app/api/auth/providers/route.ts
- GET /api/auth/logout â app/api/auth/logout/route.ts
- POST /api/forge/build â app/api/forge/build/route.ts
- POST /api/ai/idari â app/api/ai/idari/route.ts
- POST /api/ads/view â app/api/ads/view/route.ts
- POST /api/account/delete-dream â app/api/account/delete-dream/route.ts
- POST /api/admin/ai-chat â app/api/admin/ai-chat/route.ts
- PATCH|DELETE /api/drafts/[id] â app/api/drafts/[id]/route.ts
- POST /api/skip-credits/earn â app/api/skip-credits/earn/route.ts
- GET|POST|DELETE /api/favorites â app/api/favorites/route.ts
- POST /api/marketplace/request â app/api/marketplace/request/route.ts
- POST /api/skip-credits/use â app/api/skip-credits/use/route.ts
- GET /api/skip-credits/balance â app/api/skip-credits/balance/route.ts
- GET|PATCH|DELETE /api/dream-windows/[id] â app/api/dream-windows/[id]/route.ts
- GET /api/feed â app/api/feed/route.ts
- GET|POST|DELETE /api/comments â app/api/comments/route.ts

Components:
- EditProfileDreamPage â coresurfaces/dreamsurface.EditProfileDream.tsx
- ViewProfilePage â coresurfaces/dreamsurface.ViewProfile.tsx

Hooks:
- useSimulation â app/api/forge/build/route.ts
- useSharedDreamSession â app/api/shared-dream/sessions/[id]/route.ts
- useTapHoldMove â engine/generated/osArchitectureMap.ts
- useDaydreamPersistence â engine/generated/osArchitectureMap.ts
- useDaydreamState â engine/generated/osArchitectureMap.ts
- useDreamBarContext â engine/generated/osArchitectureMap.ts
- useDreamDMConversations â engine/generated/osArchitectureMap.ts
- useDreamDMDraft â engine/generated/osArchitectureMap.ts
- useDreamDMMessages â engine/generated/osArchitectureMap.ts
- useDreamSearch â engine/generated/osArchitectureMap.ts
- useMessagingCore â engine/generated/osArchitectureMap.ts
- useModuleBarIntent â engine/generated/osArchitectureMap.ts
- useNotifications â engine/generated/osArchitectureMap.ts
- useAgentSession â engine/generated/osArchitectureMap.ts

Exports that define public behavior:
- OAuthProvidersResponse â app/api/auth/providers/route.ts
- getOAuthProvidersResponse â app/api/auth/providers/route.ts
- fetchWithRetry â app/api/forge/build/route.ts
- resolveSafeNextPath â supabase/auth/nextRedirect.ts
- buildLoginRedirectPath â supabase/auth/nextRedirect.ts
- UnifiedFeedEntry â app/api/feed/route.ts
- ShellHubDevicesResponse â app/api/shellhub/devices/route.ts
- UserRole â types/ai-system.ts
- ActorContextSchema â types/ai-system.ts
- ActorContext â types/ai-system.ts
- HomeAnchorState â types/ai-system.ts
- Surface â types/ai-system.ts
- CubePosition â types/ai-system.ts
- Overlay â types/ai-system.ts

Import/export connections:
- supabase/config
- next/server
- supabase/server/serverClient
- dr-eams/ai/groq
- dr-eams/ai/triad
- engins/forgeengin/forge/forgeBuild
- engins/forgeengin/forge/forgeRegistry
- utils/index
- @supabase/supabase-js
- engine/agents/idari
- dr-eams/ai/audit
- dr-eams/ai/boogieman
- dr-eams/ai/rateLimit
- dr-eams/ai/schemas

### Matched Files

Primary files:
- `app/api/auth/providers/route.ts` â 72 lines â score 160 â primary path, path keyword: api
- `app/api/auth/logout/route.ts` â 24 lines â score 160 â primary path, path keyword: api
- `supabase/migrations/20260210_ai_core.sql` â 280 lines â score 156 â primary path, path keyword: supabase
- `supabase/migrations/20260418000000_gameengin_core.sql` â 104 lines â score 156 â primary path, path keyword: supabase
- `supabase/migrations/20260210000001_ai_system_v2026.sql` â 454 lines â score 152 â primary path, path keyword: supabase
- `supabase/migrations/20260210000000_widget_system_v2.sql` â 364 lines â score 152 â primary path, path keyword: supabase
- `app/api/forge/build/route.ts` â 923 lines â score 146 â primary path, path keyword: api
- `app/api/ai/idari/route.ts` â 309 lines â score 146 â primary path, path keyword: api
- `supabase/auth/nextRedirect.ts` â 61 lines â score 144 â primary path, path keyword: supabase
- `app/api/ads/view/route.ts` â 192 lines â score 142 â primary path, path keyword: api
- `app/api/account/delete-dream/route.ts` â 154 lines â score 142 â primary path, path keyword: api
- `app/api/admin/ai-chat/route.ts` â 137 lines â score 142 â primary path, path keyword: api
- `app/api/drafts/[id]/route.ts` â 133 lines â score 142 â primary path, path keyword: api
- `app/api/skip-credits/earn/route.ts` â 126 lines â score 142 â primary path, path keyword: api
- `app/api/favorites/route.ts` â 112 lines â score 142 â primary path, path keyword: api
- `app/api/marketplace/request/route.ts` â 90 lines â score 142 â primary path, path keyword: api
- `app/api/skip-credits/use/route.ts` â 81 lines â score 142 â primary path, path keyword: api
- `app/api/skip-credits/balance/route.ts` â 54 lines â score 142 â primary path, path keyword: api
- `app/api/dream-windows/[id]/route.ts` â 300 lines â score 138 â primary path, path keyword: api
- `app/api/feed/route.ts` â 230 lines â score 138 â primary path, path keyword: api
- `app/api/comments/route.ts` â 209 lines â score 138 â primary path, path keyword: api
- `app/api/ai/eams/route.ts` â 193 lines â score 138 â primary path, path keyword: api
- `app/api/dream-windows/route.ts` â 185 lines â score 138 â primary path, path keyword: api
- `app/api/metrics/platform/route.ts` â 185 lines â score 138 â primary path, path keyword: api
- `app/api/game-scores/route.ts` â 177 lines â score 138 â primary path, path keyword: api
- `app/api/likes/route.ts` â 164 lines â score 138 â primary path, path keyword: api
- `app/api/ai/boogieman/route.ts` â 155 lines â score 138 â primary path, path keyword: api
- `app/api/dreams/feed/route.ts` â 152 lines â score 138 â primary path, path keyword: api
- `app/api/social/ipfs/route.ts` â 144 lines â score 138 â primary path, path keyword: api
- `app/api/marketplace/route.ts` â 142 lines â score 138 â primary path, path keyword: api
- `app/api/connectors/[provider]/connect/route.ts` â 138 lines â score 138 â primary path, path keyword: api
- `app/api/scheduled-posts/route.ts` â 138 lines â score 138 â primary path, path keyword: api
- `app/api/shared-dream/sessions/[id]/route.ts` â 134 lines â score 138 â primary path, path keyword: api
- `app/api/activity/track/route.ts` â 122 lines â score 138 â primary path, path keyword: api

Supporting files:
- `app/api/drafts/route.ts` â 119 lines â score 138 â primary path, path keyword: api
- `app/api/agent/session/route.ts` â 115 lines â score 138 â primary path, path keyword: api
- `app/api/dreams/instances/route.ts` â 113 lines â score 138 â primary path, path keyword: api
- `app/api/journey/route.ts` â 110 lines â score 138 â primary path, path keyword: api
- `app/api/setup/google-oauth/route.ts` â 101 lines â score 138 â primary path, path keyword: api
- `app/api/account/delete-data/route.ts` â 99 lines â score 138 â primary path, path keyword: api
- `app/api/settings/appearance/route.ts` â 92 lines â score 138 â primary path, path keyword: api
- `app/api/shellhub/devices/route.ts` â 85 lines â score 138 â primary path, path keyword: api
- `app/api/account/export-data/route.ts` â 84 lines â score 138 â primary path, path keyword: api
- `app/api/admin/observability/route.ts` â 84 lines â score 138 â primary path, path keyword: api
- `app/api/settings/notifications/route.ts` â 84 lines â score 138 â primary path, path keyword: api
- `app/api/settings/privacy/route.ts` â 84 lines â score 138 â primary path, path keyword: api
- `app/api/connectors/[provider]/disconnect/route.ts` â 72 lines â score 138 â primary path, path keyword: api
- `app/api/posts/[id]/route.ts` â 69 lines â score 138 â primary path, path keyword: api
- `app/api/social/livekit/room/route.ts` â 68 lines â score 138 â primary path, path keyword: api
- `app/api/social/livekit/token/route.ts` â 67 lines â score 138 â primary path, path keyword: api
- `supabase/migrations/20260413000000_phase9_activity_first_protocol.sql` â 769 lines â score 134 â primary path, path keyword: supabase
- `types/ai-system.ts` â 513 lines â score 134 â primary path, path keyword: system
- `supabase/migrations/20260324000001_phase8e_shop_marketplace.sql` â 186 lines â score 134 â primary path, path keyword: supabase
- `supabase/migrations/20260129000000_upgrade_schema.sql` â 290 lines â score 130 â primary path, path keyword: supabase
- `supabase/migrations/20260322000000_phase8b_dream_windows.sql` â 239 lines â score 130 â primary path, path keyword: supabase
- `supabase/migrations/20260405042406_auto_scaffold.sql` â 225 lines â score 130 â primary path, path keyword: supabase
- `supabase/server/serverClient.ts` â 191 lines â score 130 â primary path, path keyword: supabase
- `supabase/migrations/20260325100000_child_safety.sql` â 160 lines â score 130 â primary path, path keyword: supabase
- `supabase/migrations/20260405000001_dreamr_feed_registry.sql` â 149 lines â score 130 â primary path, path keyword: supabase
- `supabase/migrations/20260417000000_repurpose_nods_as_dream_docs.sql` â 133 lines â score 130 â primary path, path keyword: supabase
- `supabase/migrations/20260310000003_connector_accounts.sql` â 124 lines â score 130 â primary path, path keyword: supabase
- `supabase/migrations/20260403000001_pgvector_embeddings.sql` â 102 lines â score 130 â primary path, path keyword: supabase
- `supabase/migrations/20260426000200_build_memory_schema_gaps.sql` â 98 lines â score 130 â primary path, path keyword: supabase
- `supabase/migrations/20260319120000_connector_accounts_schema_reload.sql` â 89 lines â score 130 â primary path, path keyword: supabase

<!-- DREAMENGIN_PRODUCT_README:END -->
