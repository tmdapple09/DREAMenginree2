# DREAMengin

> A capability-driven creative operating system for code, games, music, media, simulations, identity, commerce, communication, and shared Dreams.

[![README Autosync](https://img.shields.io/badge/readme-weekly%20autosync-blue)](.github/workflows/readme-autosync.yml)
[![TypeScript](https://img.shields.io/badge/typescript-product%20code-blue)](tsconfig.json)
[![Next.js](https://img.shields.io/badge/next.js-app%20router-black)](next.config.mjs)
[![License](https://img.shields.io/badge/license-repo%20license-yellow)](LICENSE)

## 1. Project Overview

### What is this?

DREAMengin is a web-native creative operating system built around Engins, DayDreams, shared runtime state, communication, social discovery, commerce, and user-owned creative surfaces. It is not a set of isolated apps. It is one product where creative work can move between code, games, content, lab simulations, music, branding, shops, messaging, and social surfaces.

This repository currently exposes about 112 app pages, 125 API route files, and 361 files under `engins/`, with `ARCHITECTURE.md` treated as the project authority for system meaning.

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
This is the build shape of DREAMengin: the Next.js app, TypeScript source, package scripts, styling system, GitHub automation, Supabase setup, and major folders that make the product ship as one web-native system.

### What users experience
Users do not see the monorepo directly, but this layout decides whether the app loads, routes, stores data, renders screens, and keeps every Engin available from one product shell.

### Repo Evidence
Matched focused repo evidence: 80 files, about 34,403 readable source lines.

Behavior signals:
- auth — 49 file hits
- commerce — 43 file hits
- persistence — 40 file hits
- rendering — 34 file hits
- state — 33 file hits
- events — 29 file hits
- runtime — 26 file hits
- mobile touch — 24 file hits

Routes and APIs:
- /edit-profiledream ← app/edit-profiledream/page.tsx
- /login ← app/login/page.tsx
- /join ← app/join/page.tsx
- /discover ← app/discover/page.tsx
- /view-profile ← app/view-profile/page.tsx
- /ads ← app/ads/page.tsx
- /lab ← app/lab/page.tsx
- /onboarding ← app/onboarding/page.tsx
- /settings ← app/settings/page.tsx
- /marketplace ← app/marketplace/page.tsx
- /engines ← app/engines/page.tsx
- /shop ← app/shop/page.tsx
- /dreamr ← app/dreamr/page.tsx
- /notes ← app/notes/page.tsx
- /homedream ← app/homedream/page.tsx
- /messages ← app/messages/page.tsx

Components:
- EditProfileDreamPage — app/edit-profiledream/page.tsx
- LoginPageInner — app/login/page.tsx
- LoginPage — app/login/page.tsx
- JoinPage — app/join/page.tsx
- DiscoverPage — app/discover/page.tsx
- ViewProfilePage — app/view-profile/page.tsx
- AdsPage — app/ads/page.tsx
- VisibilityBadge — app/lab/page.tsx
- ProjectCard — app/lab/page.tsx
- LabPage — app/lab/page.tsx
- OnboardingPage — app/onboarding/page.tsx
- SettingsPage — app/settings/page.tsx
- MarketplacePage — app/marketplace/page.tsx
- EnginesHubPage — app/engines/page.tsx

Hooks:
- useRouter — app/edit-profiledream/page.tsx
- useCallback — app/edit-profiledream/page.tsx
- useEffect — app/edit-profiledream/page.tsx
- useRef — app/edit-profiledream/page.tsx
- useState — app/edit-profiledream/page.tsx
- useRouter — app/login/page.tsx
- useSearchParams — app/login/page.tsx
- useEffect — app/login/page.tsx
- useMemo — app/login/page.tsx
- useState — app/login/page.tsx
- useRouter — app/join/page.tsx
- useEffect — app/join/page.tsx
- useMemo — app/join/page.tsx
- useState — app/join/page.tsx

Exports that define public behavior:
- safeGetUser — supabase/client/safeGetUser.ts
- default export — next.config (next.config.mjs)
- SupabaseCookieStore — supabase/server/serverClient.ts
- createServerClientWithCookies — supabase/server/serverClient.ts
- createServerClient — supabase/server/serverClient.ts
- createServerClientWithCustomCookies — supabase/server/serverClient.ts
- createServiceClient — supabase/server/serverClient.ts
- getServerSiteOrigin — supabase/config.ts
- buildAuthCallbackUrl — supabase/config.ts
- getSupabaseAuthCallbackUrl — supabase/config.ts
- createClient — supabase/client/client.ts
- default export — page (app/edit-profiledream/page.tsx)
- default export — page (app/login/page.tsx)
- default export — page (app/join/page.tsx)

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
- `supabase/client/safeGetUser.ts` — 40 lines — score 134 — primary path, path keyword: supabase
- `next.config.mjs` — 207 lines — score 130 — primary path, path keyword: next
- `supabase/server/serverClient.ts` — 191 lines — score 130 — primary path, path keyword: supabase
- `supabase/config.ts` — 55 lines — score 130 — primary path, path keyword: supabase
- `supabase/client/client.ts` — 27 lines — score 126 — primary path, path keyword: supabase
- `pnpm-workspace.yaml` — 10 lines — score 122 — primary path, path keyword: pnpm
- `app/edit-profiledream/page.tsx` — 561 lines — score 116 — primary path
- `app/login/page.tsx` — 377 lines — score 116 — primary path
- `app/join/page.tsx` — 374 lines — score 116 — primary path
- `app/discover/page.tsx` — 370 lines — score 116 — primary path
- `app/view-profile/page.tsx` — 365 lines — score 116 — primary path
- `app/ads/page.tsx` — 267 lines — score 116 — primary path
- `app/lab/page.tsx` — 235 lines — score 116 — primary path
- `app/onboarding/page.tsx` — 210 lines — score 116 — primary path
- `app/settings/page.tsx` — 172 lines — score 116 — primary path
- `app/marketplace/page.tsx` — 137 lines — score 116 — primary path
- `app/engines/page.tsx` — 130 lines — score 116 — primary path
- `app/shop/page.tsx` — 130 lines — score 116 — primary path
- `package.json` — 116 lines — score 116 — primary path
- `app/dreamr/page.tsx` — 81 lines — score 116 — primary path
- `app/notes/page.tsx` — 81 lines — score 116 — primary path
- `app/homedream/page.tsx` — 75 lines — score 116 — primary path
- `app/messages/page.tsx` — 69 lines — score 116 — primary path
- `app/connectors/page.tsx` — 65 lines — score 116 — primary path
- `app/feed-settings/page.tsx` — 19 lines — score 116 — primary path
- `engins/engin.StarMakerEngin.tsx` — 4303 lines — score 112 — primary path
- `engins/engin.CodeEngin.tsx` — 1286 lines — score 112 — primary path
- `eslint.config.mjs` — 102 lines — score 112 — primary path
- `engins/engin.GameEngin.tsx` — 2953 lines — score 108 — primary path
- `engins/engin.LabEngin.tsx` — 1989 lines — score 108 — primary path
- `engins/dream.ForgeEngin.tsx` — 1928 lines — score 108 — primary path
- `engins/engin.BrandingEngin.tsx` — 1260 lines — score 108 — primary path
- `.github/workflows/readme-autosync.yml` — 170 lines — score 108 — primary path
- `.github/workflows/preflight.yml` — 137 lines — score 108 — primary path

Supporting files:
- `engins/forgeengin/enginpipe/shell/ArtifactSlot.tsx` — 120 lines — score 108 — primary path
- `.github/workflows/codeql.yml` — 104 lines — score 108 — primary path
- `.github/workflows/vercel-deploy.yml` — 101 lines — score 108 — primary path
- `.github/workflows/export-src-only.yml` — 74 lines — score 108 — primary path
- `engins/dream.QuantumCircuitCanvas.tsx` — 522 lines — score 104 — primary path
- `engins/portfolio/dream.PortfolioEngin.tsx` — 501 lines — score 104 — primary path
- `engine/runtime/index.ts` — 478 lines — score 104 — primary path
- `components/runtime/dream.RuntimeView.tsx` — 432 lines — score 104 — primary path
- `engins/renderengin/RenderEnginViewport.tsx` — 387 lines — score 104 — primary path
- `components/runtime/dream.DualRuntimeContainer.tsx` — 246 lines — score 104 — primary path
- `engine/runtime/moduleRegistry.ts` — 170 lines — score 104 — primary path
- `.github/workflows/dreamengin-preflight.yml` — 133 lines — score 104 — primary path
- `components/providers/dream.ThemeProvider.tsx` — 91 lines — score 104 — primary path
- `engins/contentengin/ImplicitAssetWorkspace.tsx` — 77 lines — score 104 — primary path
- `engins/autoopen/dream.AutoOpenGameEngin.tsx` — 42 lines — score 104 — primary path
- `components/providers/dream.GodTierProvider.tsx` — 37 lines — score 104 — primary path
- `tsconfig.app.json` — 32 lines — score 104 — primary path
- `tsconfig.server.json` — 29 lines — score 104 — primary path
- `tsconfig.worker.json` — 28 lines — score 104 — primary path
- `tsconfig.games.json` — 27 lines — score 104 — primary path
- `tsconfig.test.json` — 26 lines — score 104 — primary path
- `styles/globals.css` — 5218 lines — score 100 — primary path
- `components/runtime/dream.shell.RuntimeShell.tsx` — 547 lines — score 100 — primary path
- `styles/home-dream.css` — 235 lines — score 100 — primary path
- `tailwind.config.ts` — 99 lines — score 100 — primary path
- `styles/view-transitions.css` — 49 lines — score 100 — primary path
- `components/providers/dream.AppSurfaceShell.tsx` — 45 lines — score 100 — primary path
- `styles/theme.css` — 34 lines — score 100 — primary path
- `tsconfig.base.json` — 32 lines — score 100 — primary path
- `styles/dream-shell.css` — 24 lines — score 100 — primary path
## 5. The Engins and DayDreams

### Plain English
Engins are the production systems; DayDreams are the user-facing creative spaces around them. This section connects engine code, pages, panels, shells, and components that let users create code, games, music, simulations, media, and brand work.

### What users experience
A user experiences this as switching into a real studio surface: CodeEngin, GameEngin, ContentEngin, LabEngin, StarMakerEngin, BrandingEngin, ForgeEngin, and their DayDream wrappers.

### Repo Evidence
Matched focused repo evidence: 110 files, about 43,575 readable source lines.

Behavior signals:
- auth — 72 file hits
- persistence — 60 file hits
- commerce — 53 file hits
- state — 52 file hits
- rendering — 47 file hits
- runtime — 39 file hits
- mobile touch — 39 file hits
- events — 36 file hits

Routes and APIs:
- /daydream/games/engin ← app/daydream/games/engin/page.tsx
- /daydream/brand/engin ← app/daydream/brand/engin/page.tsx
- /daydream/code/engin ← app/daydream/code/engin/page.tsx
- /daydream/create/engin ← app/daydream/create/engin/page.tsx
- /daydream/lab/engin ← app/daydream/lab/engin/page.tsx
- /daydream/music/engin ← app/daydream/music/engin/page.tsx
- /daydream/code ← app/daydream/code/page.tsx
- /daydream/lab ← app/daydream/lab/page.tsx
- /daydream/games ← app/daydream/games/page.tsx
- /daydream/create ← app/daydream/create/page.tsx
- /daydream/music ← app/daydream/music/page.tsx
- /daydream/brand ← app/daydream/brand/page.tsx
- /daydream/forge ← app/daydream/forge/page.tsx
- /daydream/lab/portfolio ← app/daydream/lab/portfolio/page.tsx
- /engines/music/studio ← app/engines/music/studio/page.tsx
- /daydream/music/upload ← app/daydream/music/upload/page.tsx

Components:
- GamesEnginRedirectPage — app/daydream/games/engin/page.tsx
- BrandEnginRedirectPage — app/daydream/brand/engin/page.tsx
- CodeEnginRedirectPage — app/daydream/code/engin/page.tsx
- CreateEnginRedirectPage — app/daydream/create/engin/page.tsx
- LabEnginRedirectPage — app/daydream/lab/engin/page.tsx
- MusicEnginRedirectPage — app/daydream/music/engin/page.tsx
- CodeDaydreamPage — app/daydream/code/page.tsx
- LabDaydreamPage — app/daydream/lab/page.tsx
- GamesDaydreamPage — app/daydream/games/page.tsx
- CreateDaydreamPage — app/daydream/create/page.tsx
- MusicArtistHubPage — app/daydream/music/page.tsx
- BrandDaydreamPage — app/daydream/brand/page.tsx
- ForgeDaydreamPage — app/daydream/forge/page.tsx
- OptimizeroPage — app/daydream/lab/portfolio/page.tsx

Hooks:
- useSharedDream — engins/engin.StarMakerEngin.tsx
- useDaydreamPersistence — engins/engin.StarMakerEngin.tsx
- useDaydreamState — engins/engin.StarMakerEngin.tsx
- useStarMakerEnginRuntime — engins/engin.StarMakerEngin.tsx
- useEnginWorkflow — engins/engin.StarMakerEngin.tsx
- useForgeActivity — engins/engin.StarMakerEngin.tsx
- useEnginCoopSync — engins/engin.StarMakerEngin.tsx
- useCallback — engins/engin.StarMakerEngin.tsx
- useEffect — engins/engin.StarMakerEngin.tsx
- useMemo — engins/engin.StarMakerEngin.tsx
- useRef — engins/engin.StarMakerEngin.tsx
- useState — engins/engin.StarMakerEngin.tsx
- useGlobalCrashListener — engins/engin.GameEngin.tsx
- useDaydreamPersistence — engins/engin.GameEngin.tsx

Exports that define public behavior:
- default export — page (app/daydream/games/engin/page.tsx)
- default export — page (app/daydream/brand/engin/page.tsx)
- default export — page (app/daydream/code/engin/page.tsx)
- default export — page (app/daydream/create/engin/page.tsx)
- default export — page (app/daydream/lab/engin/page.tsx)
- default export — page (app/daydream/music/engin/page.tsx)
- metadata — app/daydream/code/page.tsx
- default export — page (app/daydream/code/page.tsx)
- metadata — app/daydream/lab/page.tsx
- default export — page (app/daydream/lab/page.tsx)
- metadata — app/daydream/games/page.tsx
- default export — page (app/daydream/games/page.tsx)
- metadata — app/daydream/create/page.tsx
- default export — page (app/daydream/create/page.tsx)

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
- `app/daydream/games/engin/page.tsx` — 30 lines — score 152 — primary path, path keyword: engin
- `app/daydream/brand/engin/page.tsx` — 11 lines — score 152 — primary path, path keyword: engin
- `app/daydream/code/engin/page.tsx` — 11 lines — score 152 — primary path, path keyword: engin
- `app/daydream/create/engin/page.tsx` — 11 lines — score 152 — primary path, path keyword: engin
- `app/daydream/lab/engin/page.tsx` — 11 lines — score 152 — primary path, path keyword: engin
- `app/daydream/music/engin/page.tsx` — 11 lines — score 152 — primary path, path keyword: engin
- `app/daydream/code/page.tsx` — 1118 lines — score 142 — primary path, path keyword: daydream
- `app/daydream/lab/page.tsx` — 1062 lines — score 142 — primary path, path keyword: daydream
- `app/daydream/games/page.tsx` — 365 lines — score 142 — primary path, path keyword: daydream
- `app/daydream/create/page.tsx` — 107 lines — score 142 — primary path, path keyword: daydream
- `app/daydream/music/page.tsx` — 87 lines — score 142 — primary path, path keyword: daydream
- `app/daydream/brand/page.tsx` — 62 lines — score 142 — primary path, path keyword: daydream
- `app/daydream/forge/page.tsx` — 348 lines — score 138 — primary path, path keyword: daydream
- `app/daydream/lab/portfolio/page.tsx` — 189 lines — score 138 — primary path, path keyword: daydream
- `app/engines/music/studio/page.tsx` — 40 lines — score 138 — primary path, path keyword: studio
- `engins/engin.StarMakerEngin.tsx` — 4303 lines — score 134 — primary path, path keyword: engin
- `engins/engin.GameEngin.tsx` — 2953 lines — score 134 — primary path, path keyword: engin
- `engins/engin.LabEngin.tsx` — 1989 lines — score 134 — primary path, path keyword: engin
- `engins/engin.CodeEngin.tsx` — 1286 lines — score 134 — primary path, path keyword: engin
- `app/daydream/music/upload/page.tsx` — 210 lines — score 134 — primary path, path keyword: daydream
- `components/daydream/dream.CodeDreamIDE.tsx` — 1707 lines — score 130 — primary path, path keyword: daydream
- `engins/engin.BrandingEngin.tsx` — 1260 lines — score 130 — primary path, path keyword: engin
- `components/daydream/dream.shell.DaydreamShell.tsx` — 465 lines — score 130 — primary path, path keyword: daydream
- `app/daydream/game/page.tsx` — 31 lines — score 130 — primary path, path keyword: daydream
- `components/daydream/dream.LabDreamIDE.tsx` — 1294 lines — score 126 — primary path, path keyword: daydream
- `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` — 684 lines — score 126 — primary path, path keyword: daydream
- `components/daydream/dream.NGNEngin.tsx` — 600 lines — score 126 — primary path, path keyword: daydream
- `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx` — 378 lines — score 126 — primary path, path keyword: daydream
- `components/daydream/dream.constellationmap.tsx` — 356 lines — score 126 — primary path, path keyword: daydream
- `components/daydream/dream.DiffViewer.tsx` — 353 lines — score 126 — primary path, path keyword: daydream
- `app/daydream/game/dream.shell.ImmersiveGameShell.tsx` — 330 lines — score 126 — primary path, path keyword: daydream
- `components/daydream/dream.StandaloneEnginSurface.tsx` — 38 lines — score 126 — primary path, path keyword: daydream
- `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx` — 668 lines — score 122 — primary path, path keyword: daydream
- `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` — 456 lines — score 122 — primary path, path keyword: daydream

Supporting files:
- `components/daydream/dream.JourneyTrail.tsx` — 386 lines — score 122 — primary path, path keyword: daydream
- `components/daydream/starmaker/dream.panel.CompingPanel.tsx` — 347 lines — score 122 — primary path, path keyword: daydream
- `components/daydream/dream.OpenDaydreamSideBButton.tsx` — 19 lines — score 122 — primary path, path keyword: daydream
- `app/daydream/game/dream.GamePageClient.tsx` — 5 lines — score 122 — primary path, path keyword: daydream
- `engins/engin.ContentEngin.tsx` — 4 lines — score 122 — primary path, path keyword: engin
- `app/engines/page.tsx` — 130 lines — score 116 — primary path
- `app/engines/music/arrange/page.tsx` — 40 lines — score 116 — primary path
- `app/engines/music/library/page.tsx` — 40 lines — score 116 — primary path
- `daydreams/lab/page.tsx` — 486 lines — score 112 — primary path
- `daydreams/music/page.tsx` — 393 lines — score 112 — primary path
- `daydreams/games/page.tsx` — 356 lines — score 112 — primary path
- `daydreams/shared/useDaydreamPersistence.ts` — 147 lines — score 112 — primary path
- `components/engines/shared/dream.makeEnginApp.tsx` — 64 lines — score 112 — primary path
- `daydreams/brand/page.tsx` — 57 lines — score 112 — primary path
- `app/engines/games/builder/page.tsx` — 51 lines — score 112 — primary path
- `app/engines/games/library/page.tsx` — 51 lines — score 112 — primary path
- `app/engines/games/scores/page.tsx` — 51 lines — score 112 — primary path
- `app/engines/code/notebook/page.tsx` — 42 lines — score 112 — primary path
- `components/engines/music/dream.MusicEnginApp.tsx` — 33 lines — score 112 — primary path
- `app/engines/code/ai/page.tsx` — 32 lines — score 112 — primary path
- `app/engines/code/projects/page.tsx` — 32 lines — score 112 — primary path
- `engins/renderengin/runtimeRegistration.ts` — 20 lines — score 112 — primary path
- `components/engines/create/dream.CreateEnginApp.tsx` — 5 lines — score 112 — primary path
- `engins/gameengin/index.ts` — 3927 lines — score 108 — primary path
- `engins/dream.ForgeEngin.tsx` — 1928 lines — score 108 — primary path
- `daydreams/code/page.tsx` — 545 lines — score 108 — primary path
- `daydreams/create/page.tsx` — 456 lines — score 108 — primary path
- `engins/forgeengin/forge/forgeRegistry.ts` — 433 lines — score 108 — primary path
- `engins/rulesets/code/codeEnginRuleSet.ts` — 395 lines — score 108 — primary path
- `engins/rulesets/game/gameEnginRuleSet.ts` — 302 lines — score 108 — primary path
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
Matched focused repo evidence: 26 files, about 7,200 readable source lines.

Behavior signals:
- runtime — 19 file hits
- state — 17 file hits
- rendering — 15 file hits
- commerce — 13 file hits
- events — 11 file hits
- auth — 9 file hits
- mobile touch — 5 file hits
- persistence — 2 file hits

Routes and APIs:
- /dreamdmbar/dualruntime ← app/dreamdmbar/dualruntime/page.tsx

Components:
- DreamDMBarDualRuntimePage — app/dreamdmbar/dualruntime/page.tsx
- DualRuntimeContainer — components/runtime/dream.DualRuntimeContainer.tsx
- RuntimeView — components/runtime/dream.RuntimeView.tsx
- RuntimeShell — components/runtime/dream.shell.RuntimeShell.tsx

Hooks:
- useDreamSystem — app/dreamdmbar/dualruntime/page.tsx
- useEffect — app/dreamdmbar/dualruntime/page.tsx
- useState — app/dreamdmbar/dualruntime/page.tsx
- useCallback — components/runtime/dream.DualRuntimeContainer.tsx
- useContext — components/runtime/dream.DualRuntimeContainer.tsx
- useMemo — components/runtime/dream.DualRuntimeContainer.tsx
- useRef — components/runtime/dream.DualRuntimeContainer.tsx
- useState — components/runtime/dream.DualRuntimeContainer.tsx
- useDualRuntime — components/runtime/dream.DualRuntimeContainer.tsx
- useCallback — engine/runtime/useDualRuntime.ts
- useEffect — engine/runtime/useDualRuntime.ts
- useRef — engine/runtime/useDualRuntime.ts
- useState — engine/runtime/useDualRuntime.ts
- useDualRuntime — engine/runtime/useDualRuntime.ts

Exports that define public behavior:
- default export — page (app/dreamdmbar/dualruntime/page.tsx)
- RuntimeWorld — engine/runtime/dualRuntime.ts
- DualRuntimeState — engine/runtime/dualRuntime.ts
- TorusDomain — engine/runtime/dualRuntime.ts
- setRuntimeWorld — engine/runtime/dualRuntime.ts
- swapDominantRuntime — engine/runtime/dualRuntime.ts
- makeHomeActiveTop — engine/runtime/dualRuntime.ts
- makeHomeDreamSpaceActive — engine/runtime/dualRuntime.ts
- makeDreamSpaceActiveSurface — engine/runtime/dualRuntime.ts
- isHomeActiveTop — engine/runtime/dualRuntime.ts
- worldsEqual — engine/runtime/dualRuntime.ts
- torusFocusKey — engine/runtime/dualRuntime.ts
- moveTorus — engine/runtime/dualRuntime.ts
- useDualRuntime — components/runtime/dream.DualRuntimeContainer.tsx

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
- `app/dreamdmbar/dualruntime/page.tsx` — 102 lines — score 134 — primary path, path keyword: dualruntime
- `engine/runtime/dualRuntime.ts` — 259 lines — score 130 — primary path, path keyword: dualruntime
- `components/runtime/dream.DualRuntimeContainer.tsx` — 246 lines — score 112 — primary path
- `engine/runtime/useDualRuntime.ts` — 184 lines — score 112 — primary path
- `engine/runtime/useDualRuntimePersistence.ts` — 187 lines — score 108 — primary path
- `engine/runtime/dualRuntimeBridge.ts` — 873 lines — score 104 — primary path
- `components/runtime/dream.RuntimeView.tsx` — 432 lines — score 104 — primary path
- `components/runtime/dream.shell.RuntimeShell.tsx` — 547 lines — score 100 — primary path
- `engine/vm/dual-runtime.ts` — 259 lines — score 85 — supporting path, path keyword: dual runtime
- `engine/vm/snapshot.ts` — 334 lines — score 81 — supporting path, path keyword: snapshot
- `engine/runtime/iEngine.ts` — 362 lines — score 67 — supporting path
- `engine/vm/README.md` — 253 lines — score 67 — supporting path
- `engine/vm/index.ts` — 47 lines — score 67 — supporting path
- `engine/runtime/dreamOSBus.ts` — 792 lines — score 63 — supporting path
- `engine/vm/bus-events.ts` — 56 lines — score 63 — supporting path
- `engine/vm/wasmGpuVM.ts` — 510 lines — score 59 — supporting path
- `engine/runtime/snapshotFingerprint.ts` — 145 lines — score 59 — supporting path
- `engine/vm/bufferManager.ts` — 328 lines — score 55 — supporting path
- `engine/vm/types.ts` — 296 lines — score 55 — supporting path
- `engine/vm/pipelineCache.ts` — 276 lines — score 55 — supporting path
- `engine/vm/inter-vm-messaging.ts` — 199 lines — score 55 — supporting path
- `engine/vm/security.ts` — 141 lines — score 55 — supporting path
- `engine/vm/wasm-features.ts` — 137 lines — score 55 — supporting path
- `engine/vm/resource-quota.ts` — 119 lines — score 55 — supporting path
- `engine/runtime/madMaxiSnapshotBridge.ts` — 67 lines — score 55 — supporting path
- `engine/vm/dualVMCoordinator.ts` — 49 lines — score 55 — supporting path

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
- auth — 19 file hits
- persistence — 16 file hits
- state — 13 file hits
- commerce — 13 file hits
- events — 10 file hits
- runtime — 7 file hits
- rendering — 7 file hits
- mobile touch — 5 file hits

Routes and APIs:
- GET|PATCH /api/shared-dream/sessions/[id] ← app/api/shared-dream/sessions/[id]/route.ts
- GET|POST /api/shared-dream/sessions ← app/api/shared-dream/sessions/route.ts
- GET|POST /api/dreams/feed ← app/api/dreams/feed/route.ts
- GET /api/dreams/instances ← app/api/dreams/instances/route.ts
- POST /api/dreams/transfer ← app/api/dreams/transfer/route.ts

Components:
- SharedDreamProvider — components/shared-dream/dream.SharedDreamProvider.tsx
- SharedDreamRuntimeInner — components/shared-dream/dream.SharedDreamRuntime.tsx
- SharedDreamRuntime — components/shared-dream/dream.SharedDreamRuntime.tsx
- InviteFlow — components/shared-dream/dream.InviteFlow.tsx
- SharedDreamCanvas — components/shared-dream/dream.SharedDreamCanvas.tsx
- SharedDreamShell — components/dreams/dream.shell.SharedDreamShell.tsx

Hooks:
- useSharedDreamSession — engine/sharedDream.ts
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
- SharedDreamSession — engine/sharedDream.ts
- DreamEventType — engine/sharedDream.ts
- DreamBroadcastPayload — engine/sharedDream.ts
- DreamEventHandler — engine/sharedDream.ts
- DreamSessionRole — engine/sharedDream.ts
- DreamSessionMode — engine/sharedDream.ts
- DreamPresenceUpdate — engine/sharedDream.ts
- SharedDreamSessionOptions — engine/sharedDream.ts
- createSharedDreamSession — engine/sharedDream.ts
- joinSharedDreamSession — engine/sharedDream.ts
- broadcastCursorPosition — engine/sharedDream.ts
- broadcastEdit — engine/sharedDream.ts
- broadcastStatePatch — engine/sharedDream.ts
- broadcastDataPacket — engine/sharedDream.ts

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
- `engine/sharedDream.ts` — 168 lines — score 138 — primary path, path keyword: sharedDream
- `components/shared-dream/dream.SharedDreamProvider.tsx` — 259 lines — score 134 — primary path, path keyword: shared dream
- `app/api/shared-dream/sessions/[id]/route.ts` — 134 lines — score 134 — primary path, path keyword: shared dream
- `supabase/migrations/20260516000300_shared_dream_sessions.sql` — 134 lines — score 134 — primary path, path keyword: shared dream
- `app/api/shared-dream/sessions/route.ts` — 92 lines — score 134 — primary path, path keyword: shared dream
- `components/shared-dream/dream.SharedDreamRuntime.tsx` — 422 lines — score 130 — primary path, path keyword: shared dream
- `engine/sharedDream/useSharedDreamSession.ts` — 328 lines — score 130 — primary path, path keyword: sharedDream
- `components/shared-dream/index.ts` — 22 lines — score 130 — primary path, path keyword: shared dream
- `components/shared-dream/dream.InviteFlow.tsx` — 134 lines — score 126 — primary path, path keyword: shared dream
- `components/shared-dream/dream.SharedDreamCanvas.tsx` — 83 lines — score 126 — primary path, path keyword: shared dream
- `components/dreams/dream.shell.SharedDreamShell.tsx` — 402 lines — score 116 — primary path
- `hooks/useSharedDream.ts` — 270 lines — score 116 — primary path
- `app/api/dreams/feed/route.ts` — 152 lines — score 108 — primary path
- `app/api/dreams/instances/route.ts` — 113 lines — score 108 — primary path
- `app/api/dreams/transfer/route.ts` — 65 lines — score 108 — primary path
- `daydreams/shared/useDaydreamPersistence.ts` — 147 lines — score 100 — primary path
- `daydreams/shared/useDaydreamState.ts` — 93 lines — score 100 — primary path
- `engine/collaboration/index.ts` — 815 lines — score 89 — supporting path, path keyword: collaboration
- `supabase/migrations/20260322000000_phase8b_dream_windows.sql` — 239 lines — score 59 — supporting path
- `engine/runtime/useSharedEnginChannel.ts` — 163 lines — score 59 — supporting path
- `supabase/migrations/20260325000000_phase8f_daydream_network.sql` — 113 lines — score 55 — supporting path

Supporting files:
- None found.
## 8. DreamR — Human Media

### Plain English
DreamR is the human media layer: feed, discovery, profile, posts, creator identity, and the browsing surfaces where Dreams become media instead of private project files.

### What users experience
Users experience DreamR as the social/media side of DREAMengin: scrolling, viewing people, opening Dreams, editing identity, and discovering what others make.

### Repo Evidence
Matched focused repo evidence: 55 files, about 15,036 readable source lines.

Behavior signals:
- auth — 35 file hits
- commerce — 26 file hits
- mobile touch — 23 file hits
- persistence — 21 file hits
- state — 20 file hits
- runtime — 15 file hits
- rendering — 15 file hits
- events — 11 file hits

Routes and APIs:
- GET /api/dreamr/feed ← app/api/dreamr/feed/route.ts
- /dreamr ← app/dreamr/page.tsx
- GET /api/dreamr/suggested ← app/api/dreamr/suggested/route.ts
- POST /api/dreamr/tally ← app/api/dreamr/tally/route.ts
- GET /api/feed ← app/api/feed/route.ts
- /profile/[handle] ← app/profile/[handle]/page.tsx
- /view-profile ← app/view-profile/page.tsx
- /profile ← app/profile/page.tsx
- /edit-profiledream ← app/edit-profiledream/page.tsx

Components:
- DreamRPage — app/dreamr/page.tsx
- TrendIcon — app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx
- CreateTab — app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx
- PlatformTab — app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx
- SignalTab — app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx
- JourneyTab — app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx
- DreamRSection — app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx
- SocialBadge — components/dreamr/dream.panel.DreamRCreatorPanel.tsx
- DreamRCreatorPanel — components/dreamr/dream.panel.DreamRCreatorPanel.tsx
- ActionBtn — dreamr/components/dreamrfeed.tsx
- VideoPostCard — dreamr/components/dreamrfeed.tsx
- PostCard — dreamr/components/dreamrfeed.tsx
- SuggestedContentCard — dreamr/components/dreamrfeed.tsx
- SuggestedCreatorCard — dreamr/components/dreamrfeed.tsx

Hooks:
- useCallback — dreamr/feed/useLiveFeed.ts
- useEffect — dreamr/feed/useLiveFeed.ts
- useRef — dreamr/feed/useLiveFeed.ts
- useState — dreamr/feed/useLiveFeed.ts
- useLiveFeed — dreamr/feed/useLiveFeed.ts
- useDreamDMMessages — dreamr/feed/useLiveFeed.ts
- useLiveFeed — dreamr/feed/useYouTubeLiveFeed.ts
- useCallback — dreamr/feed/useYouTubeLiveFeed.ts
- useEffect — dreamr/feed/useYouTubeLiveFeed.ts
- useRef — dreamr/feed/useYouTubeLiveFeed.ts
- useState — dreamr/feed/useYouTubeLiveFeed.ts
- useYouTubeLiveFeed — dreamr/feed/useYouTubeLiveFeed.ts
- useLiveFeed — app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx
- useCallback — app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx

Exports that define public behavior:
- FeedPost — dreamr/feed/useLiveFeed.ts
- UseLiveFeedReturn — dreamr/feed/useLiveFeed.ts
- useLiveFeed — dreamr/feed/useLiveFeed.ts
- UseYouTubeLiveFeedReturn — dreamr/feed/useYouTubeLiveFeed.ts
- useYouTubeLiveFeed — dreamr/feed/useYouTubeLiveFeed.ts
- SocialSource — dreamr/social-feed.ts
- SocialFeedItem — dreamr/social-feed.ts
- stripHtml — dreamr/social-feed.ts
- extractFirstImage — dreamr/social-feed.ts
- fetchSocialFeed — dreamr/social-feed.ts
- metadata — app/dreamr/page.tsx
- default export — page (app/dreamr/page.tsx)
- Hashtag — dreamr/feed/hashtags.ts
- TrendingTag — dreamr/feed/hashtags.ts

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
- `app/api/dreamr/feed/route.ts` — 50 lines — score 164 — primary path, path keyword: dreamr
- `dreamr/feed/useLiveFeed.ts` — 301 lines — score 160 — primary path, path keyword: dreamr
- `dreamr/feed/useYouTubeLiveFeed.ts` — 222 lines — score 152 — primary path, path keyword: dreamr
- `dreamr/social-feed.ts` — 115 lines — score 152 — primary path, path keyword: dreamr
- `app/dreamr/page.tsx` — 81 lines — score 150 — primary path, path keyword: dreamr
- `dreamr/feed/hashtags.ts` — 167 lines — score 148 — primary path, path keyword: dreamr
- `dreamr/feed/feedTopics.ts` — 80 lines — score 148 — primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx` — 2006 lines — score 142 — primary path, path keyword: dreamr
- `components/dreamr/dream.panel.DreamRCreatorPanel.tsx` — 689 lines — score 142 — primary path, path keyword: dreamr
- `app/api/dreamr/suggested/route.ts` — 235 lines — score 142 — primary path, path keyword: dreamr
- `dreamr/components/dreamrfeed.tsx` — 1233 lines — score 138 — primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts` — 350 lines — score 134 — primary path, path keyword: dreamr
- `app/api/dreamr/tally/route.ts` — 97 lines — score 134 — primary path, path keyword: dreamr
- `components/dreamr/dream.panel.DreamRChannelPanel.tsx` — 323 lines — score 130 — primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/api/feedHandler.ts` — 115 lines — score 130 — primary path, path keyword: dreamr
- `dreamr/runtime/swipeCalibration.ts` — 115 lines — score 130 — primary path, path keyword: dreamr
- `dreamr/feeds/embedFeedLoader.ts` — 108 lines — score 130 — primary path, path keyword: dreamr
- `dreamr/runtime/closeFriendsVisibility.ts` — 100 lines — score 130 — primary path, path keyword: dreamr
- `dreamr/runtime/feedCursor.ts` — 88 lines — score 130 — primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts` — 260 lines — score 126 — primary path, path keyword: dreamr
- `dreamr/activity/visibility-score.ts` — 234 lines — score 126 — primary path, path keyword: dreamr
- `dreamr/bot-detection/index.ts` — 198 lines — score 126 — primary path, path keyword: dreamr
- `dreamr/runtime/torridityLedger.ts` — 186 lines — score 126 — primary path, path keyword: dreamr
- `dreamr/activity/scoring.ts` — 174 lines — score 126 — primary path, path keyword: dreamr
- `dreamr/torridity.ts` — 163 lines — score 126 — primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx` — 159 lines — score 126 — primary path, path keyword: dreamr
- `dreamr/runtime/swipePersonalization.ts` — 144 lines — score 126 — primary path, path keyword: dreamr
- `dreamr/torridity/physics.ts` — 118 lines — score 126 — primary path, path keyword: dreamr
- `dreamr/activity/boogieActivityPolicy.ts` — 62 lines — score 126 — primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx` — 55 lines — score 126 — primary path, path keyword: dreamr
- `dreamr/activity/revenueSplit.ts` — 48 lines — score 126 — primary path, path keyword: dreamr
- `dreamr/torridity/constants.ts` — 20 lines — score 126 — primary path, path keyword: dreamr
- `dreamr/activity/types.ts` — 345 lines — score 122 — primary path, path keyword: dreamr
- `dreamr/botDetection.ts` — 293 lines — score 122 — primary path, path keyword: dreamr

Supporting files:
- `components/dreamr/dream.CloseFriendsSettings.tsx` — 250 lines — score 122 — primary path, path keyword: dreamr
- `dreamr/bot-detection/swipe-physics.ts` — 230 lines — score 122 — primary path, path keyword: dreamr
- `dreamr/activity/aqs.ts` — 191 lines — score 122 — primary path, path keyword: dreamr
- `dreamr/runtime/socialHumanityScore.ts` — 191 lines — score 122 — primary path, path keyword: dreamr
- `dreamr/bot-detection/detector.ts` — 152 lines — score 122 — primary path, path keyword: dreamr
- `dreamr/bot-detection/view-tally.ts` — 86 lines — score 122 — primary path, path keyword: dreamr
- `dreamr/activity/skipCredits.ts` — 36 lines — score 122 — primary path, path keyword: dreamr
- `dreamr/torridity/index.ts` — 12 lines — score 122 — primary path, path keyword: dreamr
- `app/dreamdmbar/_components/dreamr/api/route.ts` — 3 lines — score 122 — primary path, path keyword: dreamr
- `app/api/feed/route.ts` — 230 lines — score 97 — supporting path, path keyword: feed
- `app/profile/[handle]/page.tsx` — 252 lines — score 93 — supporting path, path keyword: profile
- `components/feed/dream.AlgorithmEngine.tsx` — 598 lines — score 89 — supporting path, path keyword: feed
- `app/view-profile/page.tsx` — 365 lines — score 89 — supporting path, path keyword: profile
- `app/profile/page.tsx` — 18 lines — score 89 — supporting path, path keyword: profile
- `components/feed/dream.FeedVideoCard.tsx` — 494 lines — score 85 — supporting path, path keyword: feed
- `components/feed/dream.CommentSection.tsx` — 353 lines — score 81 — supporting path, path keyword: feed
- `components/feed/dream.FollowOnboarding.tsx` — 164 lines — score 81 — supporting path, path keyword: feed
- `components/feed/dream.FollowButton.tsx` — 118 lines — score 81 — supporting path, path keyword: feed
- `components/dream.HomeFeed.tsx` — 1329 lines — score 67 — supporting path
- `app/edit-profiledream/page.tsx` — 561 lines — score 67 — supporting path
- `components/dream.FeedCard.tsx` — 469 lines — score 63 — supporting path
## 9. The Shop

### Plain English
The Shop is the owned storefront area for a user or creator. It covers products, services, offers, carts, and purchase-related surfaces tied to a person or brand.

### What users experience
Users feel this as a creator storefront: things to buy, services to offer, and commercial parts attached to the creator identity.

### Repo Evidence
Matched focused repo evidence: 5 files, about 822 readable source lines.

Behavior signals:
- auth — 5 file hits
- commerce — 5 file hits
- persistence — 4 file hits
- state — 1 file hits
- events — 1 file hits

Routes and APIs:
- GET|POST|PUT|DELETE /api/shop ← app/api/shop/route.ts
- /shop ← app/shop/page.tsx
- /shop/sell ← app/shop/sell/page.tsx

Components:
- ShopPage — app/shop/page.tsx
- SellItemPage — app/shop/sell/page.tsx

Hooks:
- useRouter — app/shop/sell/page.tsx
- useState — app/shop/sell/page.tsx

Exports that define public behavior:
- ShopListingInput — engine/shop/listings.ts
- ShopListingRecord — engine/shop/listings.ts
- ValidationResult — engine/shop/listings.ts
- validateShopListing — engine/shop/listings.ts
- normalizeShopListing — engine/shop/listings.ts
- isOrderOwner — engine/shop/listings.ts
- metadata — app/shop/page.tsx
- default export — page (app/shop/page.tsx)
- default export — page (app/shop/sell/page.tsx)

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
- `engine/shop/listings.ts` — 124 lines — score 156 — primary path, path keyword: shop
- `app/api/shop/route.ts` — 181 lines — score 138 — primary path, path keyword: shop
- `app/shop/page.tsx` — 130 lines — score 138 — primary path, path keyword: shop
- `app/shop/sell/page.tsx` — 201 lines — score 134 — primary path, path keyword: shop
- `supabase/migrations/20260324000001_phase8e_shop_marketplace.sql` — 186 lines — score 126 — primary path, path keyword: shop

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
- commerce — 12 file hits
- persistence — 7 file hits
- auth — 7 file hits
- state — 3 file hits
- events — 2 file hits
- mobile touch — 2 file hits
- rendering — 2 file hits
- runtime — 1 file hits

Routes and APIs:
- POST /api/marketplace/request ← app/api/marketplace/request/route.ts
- /marketplace/sell ← app/marketplace/sell/page.tsx
- /marketplace/[id] ← app/marketplace/[id]/page.tsx
- GET|POST /api/marketplace ← app/api/marketplace/route.ts
- /marketplace ← app/marketplace/page.tsx

Components:
- MarketplaceSellPage — app/marketplace/sell/page.tsx
- MarketplaceItemPage — app/marketplace/[id]/page.tsx
- MarketplacePage — app/marketplace/page.tsx
- MarketplaceRequestButton — components/marketplace/dream.MarketplaceRequestButton.tsx
- MarketplaceListingCard — components/marketplace/dream.MarketplaceListingCard.tsx
- MarketplacePanel — components/panels/dream.panel.MarketplacePanel.tsx

Hooks:
- useRouter — app/marketplace/sell/page.tsx
- useEffect — app/marketplace/sell/page.tsx
- useState — app/marketplace/sell/page.tsx
- useState — components/marketplace/dream.MarketplaceRequestButton.tsx
- useDreamSystem — components/panels/dream.panel.MarketplacePanel.tsx
- useEffect — components/panels/dream.panel.MarketplacePanel.tsx
- useState — components/panels/dream.panel.MarketplacePanel.tsx

Exports that define public behavior:
- default export — page (app/marketplace/sell/page.tsx)
- default export — page (app/marketplace/[id]/page.tsx)
- metadata — app/marketplace/page.tsx
- default export — page (app/marketplace/page.tsx)
- MarketplaceCategory — engine/marketplace/listings.ts
- MarketplaceListingInput — engine/marketplace/listings.ts
- MarketplaceListingRecord — engine/marketplace/listings.ts
- ValidationResult — engine/marketplace/listings.ts
- validateMarketplaceListing — engine/marketplace/listings.ts
- normalizeMarketplaceListing — engine/marketplace/listings.ts
- marketplaceDetailRoute — engine/marketplace/listings.ts
- formatMarketplacePrice — engine/marketplace/listings.ts
- default export — dream.MarketplaceRequestButton (components/marketplace/dream.MarketplaceRequestButton.tsx)
- ContactRequestInput — engine/marketplace/request.ts

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
- `app/api/marketplace/request/route.ts` — 90 lines — score 138 — primary path, path keyword: marketplace
- `app/marketplace/sell/page.tsx` — 270 lines — score 134 — primary path, path keyword: marketplace
- `app/marketplace/[id]/page.tsx` — 205 lines — score 134 — primary path, path keyword: marketplace
- `app/api/marketplace/route.ts` — 142 lines — score 134 — primary path, path keyword: marketplace
- `app/marketplace/page.tsx` — 137 lines — score 134 — primary path, path keyword: marketplace
- `supabase/migrations/20260324000001_phase8e_shop_marketplace.sql` — 186 lines — score 130 — primary path, path keyword: marketplace
- `engine/marketplace/listings.ts` — 154 lines — score 130 — primary path, path keyword: marketplace
- `components/marketplace/dream.MarketplaceRequestButton.tsx` — 132 lines — score 130 — primary path, path keyword: marketplace
- `engine/marketplace/request.ts` — 88 lines — score 130 — primary path, path keyword: marketplace
- `components/marketplace/dream.MarketplaceListingCard.tsx` — 78 lines — score 126 — primary path, path keyword: marketplace
- `types/marketplace.ts` — 51 lines — score 126 — primary path, path keyword: marketplace
- `components/panels/dream.panel.MarketplacePanel.tsx` — 139 lines — score 59 — supporting path

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
- commerce — 10 file hits
- auth — 9 file hits
- persistence — 7 file hits
- state — 4 file hits
- events — 2 file hits
- mobile touch — 2 file hits
- rendering — 1 file hits

Routes and APIs:
- /ads ← app/ads/page.tsx
- /ads/create ← app/ads/create/page.tsx
- POST /api/ads/view ← app/api/ads/view/route.ts
- /ads/slot/[id] ← app/ads/slot/[id]/page.tsx
- POST /api/ads/orders ← app/api/ads/orders/route.ts
- /engines/brand/campaigns ← app/engines/brand/campaigns/page.tsx

Components:
- AdsPage — app/ads/page.tsx
- CreateAdSlotPage — app/ads/create/page.tsx
- AdSlotPage — app/ads/slot/[id]/page.tsx
- AdUnit — components/ads/dream.AdUnit.tsx
- SkipCreditBalance — components/ads/dream.SkipCreditBalance.tsx
- BrandCampaignsPage — app/engines/brand/campaigns/page.tsx
- CampaignsPanel — components/engines/brand/panels/dream.panel.CampaignsPanel.tsx

Hooks:
- useRouter — app/ads/create/page.tsx
- useState — app/ads/create/page.tsx
- useEffect — components/ads/dream.AdUnit.tsx
- useState — components/ads/dream.AdUnit.tsx
- useEffect — components/ads/dream.SkipCreditBalance.tsx
- useState — components/ads/dream.SkipCreditBalance.tsx
- useState — components/engines/brand/panels/dream.panel.CampaignsPanel.tsx

Exports that define public behavior:
- default export — page (app/ads/page.tsx)
- default export — page (app/ads/create/page.tsx)
- default export — page (app/ads/slot/[id]/page.tsx)
- AdUnit — components/ads/dream.AdUnit.tsx
- SkipCreditBalance — components/ads/dream.SkipCreditBalance.tsx
- AdPlacement — types/ads.ts
- AdSlot — types/ads.ts
- ProfileLite — types/ads.ts
- AdListing — types/ads.ts
- AdOrder — types/ads.ts
- metadata — app/engines/brand/campaigns/page.tsx
- default export — page (app/engines/brand/campaigns/page.tsx)
- default export — dream.panel.CampaignsPanel (components/engines/brand/panels/dream.panel.CampaignsPanel.tsx)

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
- `app/ads/page.tsx` — 267 lines — score 130 — primary path, path keyword: ads
- `app/ads/create/page.tsx` — 203 lines — score 130 — primary path, path keyword: ads
- `app/api/ads/view/route.ts` — 192 lines — score 130 — primary path, path keyword: ads
- `app/ads/slot/[id]/page.tsx` — 139 lines — score 130 — primary path, path keyword: ads
- `app/api/ads/orders/route.ts` — 91 lines — score 130 — primary path, path keyword: ads
- `supabase/migrations/20260321000000_ads_platform_promotions.sql` — 38 lines — score 126 — primary path, path keyword: ads
- `components/ads/dream.AdUnit.tsx` — 229 lines — score 122 — primary path, path keyword: ads
- `components/ads/dream.SkipCreditBalance.tsx` — 58 lines — score 122 — primary path, path keyword: ads
- `types/ads.ts` — 46 lines — score 122 — primary path, path keyword: ads
- `app/engines/brand/campaigns/page.tsx` — 31 lines — score 67 — supporting path
- `components/engines/brand/panels/dream.panel.CampaignsPanel.tsx` — 213 lines — score 59 — supporting path

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
Matched focused repo evidence: 58 files, about 16,906 readable source lines.

Behavior signals:
- commerce — 39 file hits
- runtime — 38 file hits
- state — 38 file hits
- auth — 36 file hits
- rendering — 33 file hits
- mobile touch — 32 file hits
- persistence — 26 file hits
- events — 19 file hits

Routes and APIs:
- /dreamdmbar/dualruntime ← app/dreamdmbar/dualruntime/page.tsx
- /dreamdmbar/dreamspace ← app/dreamdmbar/dreamspace/page.tsx
- /dreamdmbar/homedream ← app/dreamdmbar/homedream/page.tsx
- /dreamdmbar ← app/dreamdmbar/page.tsx
- /messages/boards ← app/messages/boards/page.tsx
- GET|POST /api/messages ← app/api/messages/route.ts
- /messages/boards/[id] ← app/messages/boards/[id]/page.tsx
- /messages/boards/new ← app/messages/boards/new/page.tsx

Components:
- DreamDMBarDualRuntimePage — app/dreamdmbar/dualruntime/page.tsx
- DreamSystemProvider — dreamdmbar/runtime/DreamSystemContext.tsx
- AvatarChip — dreamdmbar/dreamsurface.dreamdmbar.tsx
- ContextIcon — dreamdmbar/dreamsurface.dreamdmbar.tsx
- DreamDMBar — dreamdmbar/dreamsurface.dreamdmbar.tsx
- CompactNotificationStrip — dreamdmbar/dreamsurface.dreamdmbar.tsx
- ModeButton — dreamdmbar/dreamsurface.dreamdmbar.tsx
- DreamSpaceMessaging — dreamdmbar/dreamsurface.dreamdmbar.tsx
- DreamDMBarDreamSpacePage — app/dreamdmbar/dreamspace/page.tsx
- DreamDMBarHomeDreamPage — app/dreamdmbar/homedream/page.tsx
- RuntimeView — components/runtime/dream.RuntimeView.tsx
- TrendIcon — app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx
- CreateTab — app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx
- PlatformTab — app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx

Hooks:
- useDreamSystem — app/dreamdmbar/dualruntime/page.tsx
- useEffect — app/dreamdmbar/dualruntime/page.tsx
- useState — app/dreamdmbar/dualruntime/page.tsx
- useCallback — dreamdmbar/runtime/DreamSystemContext.tsx
- useContext — dreamdmbar/runtime/DreamSystemContext.tsx
- useEffect — dreamdmbar/runtime/DreamSystemContext.tsx
- useRef — dreamdmbar/runtime/DreamSystemContext.tsx
- useState — dreamdmbar/runtime/DreamSystemContext.tsx
- useDreamSystem — dreamdmbar/runtime/DreamSystemContext.tsx
- useCallback — dreamdmbar/dreamsurface.dreamdmbar.tsx
- useEffect — dreamdmbar/dreamsurface.dreamdmbar.tsx
- useRef — dreamdmbar/dreamsurface.dreamdmbar.tsx
- useState — dreamdmbar/dreamsurface.dreamdmbar.tsx
- useDreamSystem — dreamdmbar/dreamsurface.dreamdmbar.tsx

Exports that define public behavior:
- default export — page (app/dreamdmbar/dualruntime/page.tsx)
- HomeData — dreamdmbar/runtime/DreamSystemContext.tsx
- BarIntentMode — dreamdmbar/runtime/DreamSystemContext.tsx
- ModuleBarAction — dreamdmbar/runtime/DreamSystemContext.tsx
- BarIntent — dreamdmbar/runtime/DreamSystemContext.tsx
- WorldFocusState — dreamdmbar/runtime/DreamSystemContext.tsx
- RuntimeCallbacks — dreamdmbar/runtime/DreamSystemContext.tsx
- DreamSystemProvider — dreamdmbar/runtime/DreamSystemContext.tsx
- useDreamSystem — dreamdmbar/runtime/DreamSystemContext.tsx
- snapToSplitPoint — dreamdmbar/runtime/barInteractions.ts
- snapSplitRatioOnRelease — dreamdmbar/runtime/barInteractions.ts
- resolveGoldTapAction — dreamdmbar/runtime/barInteractions.ts
- shouldTreatGoldReleaseAsTap — dreamdmbar/runtime/barInteractions.ts
- calculatePointerVelocity — dreamdmbar/runtime/barInteractions.ts

Import/export connections:
- components/shared-dream/dream.SharedDreamRuntime
- dreamdmbar/runtime/DreamSystemContext
- react
- dreamdmbar/runtime/barInteractions
- components/panels/panelTypes
- engine/runtime/dualRuntime
- supabase/client/client
- supabase/client/safeGetUser
- lucide-react
- next/image
- components/ui/dream.DreamWord
- dreamdmbar/dream.GlowingLight
- dreamdmbar/hooks/useDreamBarContext
- dreamdmbar/hooks/useDreamDMConversations

### Matched Files

Primary files:
- `app/dreamdmbar/dualruntime/page.tsx` — 102 lines — score 164 — primary path, path keyword: dreamdmbar
- `dreamdmbar/runtime/DreamSystemContext.tsx` — 401 lines — score 160 — primary path, path keyword: dreamdmbar
- `dreamdmbar/runtime/barInteractions.ts` — 531 lines — score 156 — primary path, path keyword: dreamdmbar
- `dreamdmbar/runtime/bridgeSeamFlow.ts` — 214 lines — score 152 — primary path, path keyword: dreamdmbar
- `dreamdmbar/dreamsurface.dreamdmbar.tsx` — 3045 lines — score 146 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/dreamspace/page.tsx` — 19 lines — score 142 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/homedream/page.tsx` — 19 lines — score 142 — primary path, path keyword: dreamdmbar
- `components/runtime/dream.RuntimeView.tsx` — 432 lines — score 138 — primary path, path keyword: runtime
- `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx` — 2006 lines — score 134 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/HomeDreamRegion.tsx` — 460 lines — score 134 — primary path, path keyword: dreamdmbar
- `components/runtime/dream.DualRuntimeContainer.tsx` — 246 lines — score 134 — primary path, path keyword: runtime
- `app/dreamdmbar/_components/DreamBarDataBridge.tsx` — 196 lines — score 134 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/page.tsx` — 11 lines — score 134 — primary path, path keyword: dreamdmbar
- `components/runtime/dream.shell.RuntimeShell.tsx` — 547 lines — score 130 — primary path, path keyword: runtime
- `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts` — 350 lines — score 130 — primary path, path keyword: dreamdmbar
- `dreamdmbar/notifications/notificationHelpers.ts` — 266 lines — score 130 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts` — 260 lines — score 130 — primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useDreamBarContext.ts` — 185 lines — score 130 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx` — 159 lines — score 130 — primary path, path keyword: dreamdmbar
- `dreamdmbar/dream.GlowingLight.tsx` — 118 lines — score 130 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/dreamr/api/feedHandler.ts` — 115 lines — score 130 — primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useNotifications.ts` — 97 lines — score 130 — primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useModuleBarIntent.ts` — 87 lines — score 130 — primary path, path keyword: dreamdmbar
- `engine/generated/dreamdmbar.ts` — 22 lines — score 130 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/DreamSpaceRegion.tsx` — 459 lines — score 126 — primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useDreamSearch.ts` — 233 lines — score 126 — primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useMessagingCore.ts` — 189 lines — score 126 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/layout.tsx` — 184 lines — score 126 — primary path, path keyword: dreamdmbar
- `dreamdmbar/notifications/useNotifications.ts` — 172 lines — score 126 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx` — 55 lines — score 126 — primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useDreamDMDraft.ts` — 176 lines — score 122 — primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useDreamDMMessages.ts` — 141 lines — score 122 — primary path, path keyword: dreamdmbar
- `dreamdmbar/hooks/useDreamDMConversations.ts` — 123 lines — score 122 — primary path, path keyword: dreamdmbar
- `app/dreamdmbar/_components/DreamWidgetGrid.tsx` — 33 lines — score 122 — primary path, path keyword: dreamdmbar

Supporting files:
- `app/dreamdmbar/_components/dreamr/api/route.ts` — 3 lines — score 122 — primary path, path keyword: dreamdmbar
- `engine/runtime/dualRuntime.ts` — 259 lines — score 111 — supporting path, path keyword: runtime
- `engine/runtime/useDualRuntimePersistence.ts` — 187 lines — score 85 — supporting path, path keyword: runtime
- `engine/runtime/dualRuntimeBridge.ts` — 873 lines — score 81 — supporting path, path keyword: runtime
- `engine/runtime/useDualRuntime.ts` — 184 lines — score 81 — supporting path, path keyword: runtime
- `components/home/dream.bar.PersistentDreamBar.tsx` — 345 lines — score 71 — supporting path
- `components/dream.NotificationCenter.tsx` — 414 lines — score 67 — supporting path
- `components/panels/dream.panel.AppearancePanel.tsx` — 166 lines — score 67 — supporting path
- `components/panels/dream.panel.MarketplacePanel.tsx` — 139 lines — score 67 — supporting path
- `app/messages/boards/page.tsx` — 119 lines — score 67 — supporting path
- `components/panels/dream.panel.WidgetsPanel.tsx` — 108 lines — score 67 — supporting path
- `components/panels/dream.panel.HelpPanel.tsx` — 71 lines — score 67 — supporting path
- `components/dream.CommandPalette.tsx` — 482 lines — score 63 — supporting path
- `app/api/messages/route.ts` — 342 lines — score 63 — supporting path
- `components/panels/dream.panel.SettingsPanel.tsx` — 185 lines — score 63 — supporting path
- `app/messages/boards/[id]/page.tsx` — 178 lines — score 63 — supporting path
- `components/panels/dream.panel.PrivacyPanel.tsx` — 146 lines — score 63 — supporting path
- `components/panels/dream.panel.DataPanel.tsx` — 139 lines — score 63 — supporting path
- `app/messages/boards/new/page.tsx` — 110 lines — score 63 — supporting path
- `components/panels/dream.panel.SafetyPanel.tsx` — 102 lines — score 63 — supporting path
- `components/home/dream.bar.GlobalDreamBar.tsx` — 100 lines — score 63 — supporting path
- `components/panels/dream.panel.ControlsPanel.tsx` — 90 lines — score 63 — supporting path
- `components/panels/dream.panel.AlgorithmPanel.tsx` — 36 lines — score 63 — supporting path
- `components/home/dream.ActiveModuleSurface.tsx` — 475 lines — score 59 — supporting path
## 13. Messaging

### Plain English
Messaging is the direct communication layer: conversations, drafts, notifications, inbox behavior, message APIs, and hooks that keep communication alive across surfaces.

### What users experience
Users experience this when they send a message, receive a notification, open a conversation, keep a draft, or continue a thread from another surface.

### Repo Evidence
Matched focused repo evidence: 22 files, about 4,091 readable source lines.

Behavior signals:
- persistence — 18 file hits
- auth — 18 file hits
- commerce — 14 file hits
- state — 12 file hits
- mobile touch — 6 file hits
- events — 5 file hits
- rendering — 4 file hits

Routes and APIs:
- GET|POST /api/messages ← app/api/messages/route.ts
- PATCH|DELETE /api/drafts/[id] ← app/api/drafts/[id]/route.ts
- GET|POST /api/drafts ← app/api/drafts/route.ts
- /messages ← app/messages/page.tsx
- /messages/boards/[id] ← app/messages/boards/[id]/page.tsx
- /messages/boards ← app/messages/boards/page.tsx
- /messages/boards/new ← app/messages/boards/new/page.tsx
- POST /api/messages/boards ← app/api/messages/boards/route.ts
- /messages/new ← app/messages/new/page.tsx
- /settings/notifications ← app/settings/notifications/page.tsx
- GET|POST /api/settings/notifications ← app/api/settings/notifications/route.ts

Components:
- MessagesPage — app/messages/page.tsx
- BoardDetailPage — app/messages/boards/[id]/page.tsx
- BoardsPage — app/messages/boards/page.tsx
- NewBoardPage — app/messages/boards/new/page.tsx
- NewMessagePage — app/messages/new/page.tsx
- BoardComposer — components/messaging/dream.BoardComposer.tsx
- NotificationSettingsPage — app/settings/notifications/page.tsx
- MessageContent — components/dream.MessagesClient.tsx
- MessagesClient — components/dream.MessagesClient.tsx
- NotifIcon — components/dream.NotificationCenter.tsx
- NotifRow — components/dream.NotificationCenter.tsx
- NotificationCenter — components/dream.NotificationCenter.tsx

Hooks:
- useCallback — dreamdmbar/hooks/useDreamDMDraft.ts
- useEffect — dreamdmbar/hooks/useDreamDMDraft.ts
- useRef — dreamdmbar/hooks/useDreamDMDraft.ts
- useState — dreamdmbar/hooks/useDreamDMDraft.ts
- useDreamDMDraft — dreamdmbar/hooks/useDreamDMDraft.ts
- useCallback — dreamdmbar/hooks/useDreamDMMessages.ts
- useEffect — dreamdmbar/hooks/useDreamDMMessages.ts
- useRef — dreamdmbar/hooks/useDreamDMMessages.ts
- useState — dreamdmbar/hooks/useDreamDMMessages.ts
- useDreamDMMessages — dreamdmbar/hooks/useDreamDMMessages.ts
- useRouter — app/messages/boards/new/page.tsx
- useState — app/messages/boards/new/page.tsx
- useCallback — dreamdmbar/hooks/useMessagingCore.ts
- useState — dreamdmbar/hooks/useMessagingCore.ts

Exports that define public behavior:
- DraftPayload — dreamdmbar/hooks/useDreamDMDraft.ts
- listAllDraftIds — dreamdmbar/hooks/useDreamDMDraft.ts
- cleanupStaleDrafts — dreamdmbar/hooks/useDreamDMDraft.ts
- getDraftAge — dreamdmbar/hooks/useDreamDMDraft.ts
- useDreamDMDraft — dreamdmbar/hooks/useDreamDMDraft.ts
- default export — page (app/messages/page.tsx)
- DbNotificationContent — dreamdmbar/notifications/notificationHelpers.ts
- DbNotificationRow — dreamdmbar/notifications/notificationHelpers.ts
- UiNotificationType — dreamdmbar/notifications/notificationHelpers.ts
- UiNotification — dreamdmbar/notifications/notificationHelpers.ts
- mapNotificationType — dreamdmbar/notifications/notificationHelpers.ts
- getNotificationTitle — dreamdmbar/notifications/notificationHelpers.ts
- getNotificationActionUrl — dreamdmbar/notifications/notificationHelpers.ts
- extractNotificationMessage — dreamdmbar/notifications/notificationHelpers.ts

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
- `app/api/messages/route.ts` — 342 lines — score 120 — primary path
- `app/api/drafts/[id]/route.ts` — 133 lines — score 116 — primary path
- `dreamdmbar/hooks/useDreamDMDraft.ts` — 176 lines — score 112 — primary path
- `app/api/drafts/route.ts` — 119 lines — score 112 — primary path
- `app/messages/page.tsx` — 69 lines — score 112 — primary path
- `dreamdmbar/notifications/notificationHelpers.ts` — 266 lines — score 108 — primary path
- `app/messages/boards/[id]/page.tsx` — 178 lines — score 108 — primary path
- `dreamdmbar/hooks/useDreamDMMessages.ts` — 141 lines — score 108 — primary path
- `app/messages/boards/page.tsx` — 119 lines — score 108 — primary path
- `app/messages/boards/new/page.tsx` — 110 lines — score 108 — primary path
- `app/api/messages/boards/route.ts` — 92 lines — score 108 — primary path
- `app/messages/new/page.tsx` — 86 lines — score 108 — primary path
- `supabase/migrations/20260315000000_content_drafts.sql` — 65 lines — score 108 — primary path
- `dreamdmbar/hooks/useMessagingCore.ts` — 189 lines — score 104 — primary path
- `dreamdmbar/notifications/useNotifications.ts` — 172 lines — score 104 — primary path
- `dreamdmbar/hooks/useDreamDMConversations.ts` — 123 lines — score 104 — primary path
- `supabase/migrations/20260307000001_conversations_messages.sql` — 80 lines — score 104 — primary path
- `components/messaging/dream.BoardComposer.tsx` — 89 lines — score 100 — primary path
- `app/settings/notifications/page.tsx` — 207 lines — score 71 — supporting path
- `app/api/settings/notifications/route.ts` — 84 lines — score 71 — supporting path
- `components/dream.MessagesClient.tsx` — 837 lines — score 67 — supporting path
- `components/dream.NotificationCenter.tsx` — 414 lines — score 63 — supporting path

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
- commerce — 11 file hits
- mobile touch — 10 file hits
- events — 9 file hits
- state — 8 file hits
- auth — 8 file hits
- runtime — 7 file hits
- persistence — 5 file hits
- rendering — 5 file hits

Routes and APIs:
- /homedream ← app/homedream/page.tsx
- GET|POST /api/home-layout ← app/api/home-layout/route.ts

Components:
- PersistentDreamBar — components/home/dream.bar.PersistentDreamBar.tsx
- HomeDreamPage — app/homedream/page.tsx
- ActiveModuleSurface — components/home/dream.ActiveModuleSurface.tsx
- FlagshipEnginesStrip — components/home/dream.FlagshipEnginesStrip.tsx
- NeuralSeamCanvas — components/home/dream.NeuralSeamCanvas.tsx
- DaydreamPulseStrip — components/home/dream.DaydreamPulseStrip.tsx
- DreamWidget — components/home/dream.widget.DreamWidget.tsx
- GlobalDreamBar — components/home/dream.bar.GlobalDreamBar.tsx
- QuickLink — app/dreamdmbar/_components/HomeDreamRegion.tsx
- HomeDreamSurface — app/dreamdmbar/_components/HomeDreamRegion.tsx
- HomeFeed — components/dream.HomeFeed.tsx
- FeedCard — components/dream.FeedCard.tsx

Hooks:
- useDualRuntime — components/home/dream.bar.PersistentDreamBar.tsx
- useDreamLayout — components/home/dream.bar.PersistentDreamBar.tsx
- useDreamSystem — components/home/dream.bar.PersistentDreamBar.tsx
- useOS — components/home/dream.bar.PersistentDreamBar.tsx
- usePathname — components/home/dream.bar.PersistentDreamBar.tsx
- useCallback — components/home/dream.bar.PersistentDreamBar.tsx
- useEffect — components/home/dream.bar.PersistentDreamBar.tsx
- useState — components/home/dream.bar.PersistentDreamBar.tsx
- useLiveFeed — app/homedream/page.tsx
- useDreamWindowActions — components/home/dream.ActiveModuleSurface.tsx
- useCallback — components/home/dream.ActiveModuleSurface.tsx
- useEffect — components/home/dream.ActiveModuleSurface.tsx
- useMemo — components/home/dream.ActiveModuleSurface.tsx
- useRef — components/home/dream.ActiveModuleSurface.tsx

Exports that define public behavior:
- DreamDMContainer — components/home/dream.bar.PersistentDreamBar.tsx
- default export — dream.bar.PersistentDreamBar (components/home/dream.bar.PersistentDreamBar.tsx)
- default export — page (app/homedream/page.tsx)
- default export — dream.ActiveModuleSurface (components/home/dream.ActiveModuleSurface.tsx)
- default export — dream.FlagshipEnginesStrip (components/home/dream.FlagshipEnginesStrip.tsx)
- default export — dream.NeuralSeamCanvas (components/home/dream.NeuralSeamCanvas.tsx)
- PhysicsConstraint — engins/rulesets/homedream/dream.homedream.physics.ts
- resolveConstraint — engins/rulesets/homedream/dream.homedream.physics.ts
- EntityState — engins/rulesets/homedream/dream.homedream.transforms.ts
- HomeDreamState — engins/rulesets/homedream/dream.homedream.transforms.ts
- applyDelta — engins/rulesets/homedream/dream.homedream.transforms.ts
- createInitialState — engins/rulesets/homedream/dream.homedream.transforms.ts
- homedream — engine/generated/homedream.ts
- HomedreamMap — engine/generated/homedream.ts

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
- `components/home/dream.bar.PersistentDreamBar.tsx` — 345 lines — score 130 — primary path, path keyword: home dream
- `styles/home-dream.css` — 235 lines — score 130 — primary path, path keyword: home dream
- `app/homedream/page.tsx` — 75 lines — score 130 — primary path, path keyword: homedream
- `components/home/dream.ActiveModuleSurface.tsx` — 475 lines — score 126 — primary path, path keyword: home dream
- `components/home/dream.FlagshipEnginesStrip.tsx` — 278 lines — score 126 — primary path, path keyword: home dream
- `components/home/dream.NeuralSeamCanvas.tsx` — 276 lines — score 126 — primary path, path keyword: home dream
- `engins/rulesets/homedream/dream.homedream.physics.ts` — 36 lines — score 126 — primary path, path keyword: homedream
- `engins/rulesets/homedream/dream.homedream.transforms.ts` — 36 lines — score 126 — primary path, path keyword: homedream
- `engins/rulesets/homedream/index.ts` — 15 lines — score 126 — primary path, path keyword: homedream
- `engins/rulesets/homedream/dream.homedream.constants.ts` — 9 lines — score 126 — primary path, path keyword: homedream
- `engine/generated/homedream.ts` — 8 lines — score 126 — primary path, path keyword: homedream
- `components/home/dream.DaydreamPulseStrip.tsx` — 139 lines — score 122 — primary path, path keyword: home dream
- `components/home/dream.widget.DreamWidget.tsx` — 117 lines — score 122 — primary path, path keyword: home dream
- `components/home/dream.bar.GlobalDreamBar.tsx` — 100 lines — score 122 — primary path, path keyword: home dream
- `app/dreamdmbar/_components/HomeDreamRegion.tsx` — 460 lines — score 112 — primary path
- `app/api/home-layout/route.ts` — 109 lines — score 67 — supporting path
- `components/dream.HomeFeed.tsx` — 1329 lines — score 59 — supporting path
- `components/dream.FeedCard.tsx` — 469 lines — score 55 — supporting path

Supporting files:
- None found.
## 15. DreamSpace

### Plain English
DreamSpace is the workspace/canvas layer where DayDream surfaces, Engins, regions, runtime shells, and user-created windows become one creative environment.

### What users experience
Users experience DreamSpace as the place where they arrange, open, move through, and work inside creative surfaces rather than just clicking normal web pages.

### Repo Evidence
Matched focused repo evidence: 62 files, about 19,376 readable source lines.

Behavior signals:
- auth — 39 file hits
- commerce — 39 file hits
- state — 31 file hits
- mobile touch — 28 file hits
- persistence — 27 file hits
- rendering — 23 file hits
- runtime — 20 file hits
- events — 17 file hits

Routes and APIs:
- /dreamdmbar/dreamspace ← app/dreamdmbar/dreamspace/page.tsx
- /dreamspace ← app/dreamspace/page.tsx
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

Components:
- DreamDMBarDreamSpacePage — app/dreamdmbar/dreamspace/page.tsx
- DreamSpacePage — app/dreamspace/page.tsx
- AppIcon — components/dreams/dreamsurface.dreamspace.tsx
- EngineBarChart — components/dreams/dreamsurface.dreamspace.tsx
- DreamsSpacePanel — components/dreams/dreamsurface.dreamspace.tsx
- ProfileSpace — components/spatial/dream.ProfileSpace.tsx
- EmptyProfileState — components/spatial/dream.ProfileSpace.tsx
- WidgetRenderer — components/spatial/dream.ProfileSpace.tsx
- GalleryWidget — components/spatial/dream.ProfileSpace.tsx
- BlankWidget — components/spatial/dream.ProfileSpace.tsx
- MediaWidget — components/spatial/dream.ProfileSpace.tsx
- TextWidget — components/spatial/dream.ProfileSpace.tsx
- ProfileInfoWidget — components/spatial/dream.ProfileSpace.tsx
- LinkTreeWidget — components/spatial/dream.ProfileSpace.tsx

Hooks:
- useDualRuntime — app/dreamdmbar/dreamspace/page.tsx
- useDreamSystem — app/dreamdmbar/dreamspace/page.tsx
- useEffect — app/dreamdmbar/dreamspace/page.tsx
- useDreamsRuntime — components/dreams/dreamsurface.dreamspace.tsx
- useSessionIntelligence — components/dreams/dreamsurface.dreamspace.tsx
- useRouter — components/dreams/dreamsurface.dreamspace.tsx
- useCallback — components/dreams/dreamsurface.dreamspace.tsx
- useEffect — components/dreams/dreamsurface.dreamspace.tsx
- useRef — components/dreams/dreamsurface.dreamspace.tsx
- useState — components/dreams/dreamsurface.dreamspace.tsx
- useContent — components/spatial/dream.ProfileSpace.tsx
- useWidgets — components/spatial/dream.ProfileSpace.tsx
- useCallback — components/spatial/dream.ProfileSpace.tsx
- useEffect — components/spatial/dream.ProfileSpace.tsx

Exports that define public behavior:
- default export — page (app/dreamdmbar/dreamspace/page.tsx)
- default export — page (app/dreamspace/page.tsx)
- getAppRoute — components/dreams/dreamsurface.dreamspace.tsx
- RecentDestination — components/dreams/dreamsurface.dreamspace.tsx
- buildRecentDestinations — components/dreams/dreamsurface.dreamspace.tsx
- default export — dreamsurface.dreamspace (components/dreams/dreamsurface.dreamspace.tsx)
- default export — dream.ProfileSpace (components/spatial/dream.ProfileSpace.tsx)
- default export — dream.shell.EnhancedSpatialShell (components/spatial/dream.shell.EnhancedSpatialShell.tsx)
- PixiPhysicsLayerProps — components/spatial/dream.PixiPhysicsLayer.tsx
- default export — dream.PixiPhysicsLayer (components/spatial/dream.PixiPhysicsLayer.tsx)
- metadata — app/daydream/games/page.tsx
- default export — page (app/daydream/games/page.tsx)
- metadata — app/daydream/music/page.tsx
- default export — page (app/daydream/music/page.tsx)

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
- `app/dreamdmbar/dreamspace/page.tsx` — 19 lines — score 134 — primary path, path keyword: dreamspace
- `app/dreamspace/page.tsx` — 8 lines — score 134 — primary path, path keyword: dreamspace
- `components/dreams/dreamsurface.dreamspace.tsx` — 891 lines — score 130 — primary path, path keyword: dreamspace
- `components/spatial/dream.ProfileSpace.tsx` — 822 lines — score 126 — primary path, path keyword: spatial
- `components/spatial/dream.shell.EnhancedSpatialShell.tsx` — 203 lines — score 126 — primary path, path keyword: spatial
- `components/spatial/dream.PixiPhysicsLayer.tsx` — 149 lines — score 122 — primary path, path keyword: spatial
- `app/daydream/games/page.tsx` — 365 lines — score 112 — primary path
- `app/daydream/music/page.tsx` — 87 lines — score 112 — primary path
- `app/daydream/code/page.tsx` — 1118 lines — score 108 — primary path
- `app/daydream/lab/page.tsx` — 1062 lines — score 108 — primary path
- `app/dreamdmbar/_components/DreamSpaceRegion.tsx` — 459 lines — score 108 — primary path
- `app/daydream/forge/page.tsx` — 348 lines — score 108 — primary path
- `app/daydream/music/upload/page.tsx` — 210 lines — score 108 — primary path
- `app/daydream/lab/portfolio/page.tsx` — 189 lines — score 108 — primary path
- `app/daydream/create/page.tsx` — 107 lines — score 108 — primary path
- `app/daydream/brand/page.tsx` — 62 lines — score 108 — primary path
- `app/daydream/game/page.tsx` — 31 lines — score 108 — primary path
- `app/daydream/games/engin/page.tsx` — 30 lines — score 108 — primary path
- `app/daydream/constellation/page.tsx` — 26 lines — score 108 — primary path
- `app/daydream/media-vault/page.tsx` — 21 lines — score 108 — primary path
- `app/daydream/play/page.tsx` — 19 lines — score 108 — primary path
- `app/daydream/brand/engin/page.tsx` — 11 lines — score 108 — primary path
- `app/daydream/code/engin/page.tsx` — 11 lines — score 108 — primary path
- `app/daydream/create/engin/page.tsx` — 11 lines — score 108 — primary path
- `app/daydream/lab/engin/page.tsx` — 11 lines — score 108 — primary path
- `app/daydream/music/engin/page.tsx` — 11 lines — score 108 — primary path
- `app/daydream/render/page.tsx` — 6 lines — score 108 — primary path
- `components/daydream/dream.CodeDreamIDE.tsx` — 1707 lines — score 104 — primary path
- `coresurfaces/home/buttons/contextual-home.ts` — 67 lines — score 104 — primary path
- `components/daydream/dream.LabDreamIDE.tsx` — 1294 lines — score 100 — primary path
- `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` — 684 lines — score 100 — primary path
- `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx` — 668 lines — score 100 — primary path
- `components/daydream/dream.NGNEngin.tsx` — 600 lines — score 100 — primary path
- `daydreams/code/page.tsx` — 545 lines — score 100 — primary path

Supporting files:
- `coresurfaces/dreamsurface.EditProfileDream.tsx` — 537 lines — score 100 — primary path
- `daydreams/lab/page.tsx` — 486 lines — score 100 — primary path
- `components/daydream/dream.shell.DaydreamShell.tsx` — 465 lines — score 100 — primary path
- `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` — 456 lines — score 100 — primary path
- `daydreams/create/page.tsx` — 456 lines — score 100 — primary path
- `daydreams/music/page.tsx` — 393 lines — score 100 — primary path
- `components/daydream/dream.JourneyTrail.tsx` — 386 lines — score 100 — primary path
- `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx` — 378 lines — score 100 — primary path
- `components/daydream/dream.constellationmap.tsx` — 356 lines — score 100 — primary path
- `daydreams/games/page.tsx` — 356 lines — score 100 — primary path
- `coresurfaces/dreamsurface.ViewProfile.tsx` — 354 lines — score 100 — primary path
- `components/daydream/dream.DiffViewer.tsx` — 353 lines — score 100 — primary path
- `components/daydream/starmaker/dream.panel.CompingPanel.tsx` — 347 lines — score 100 — primary path
- `app/daydream/game/dream.shell.ImmersiveGameShell.tsx` — 330 lines — score 100 — primary path
- `daydreams/shared/useDaydreamPersistence.ts` — 147 lines — score 100 — primary path
- `app/daydream/constellation/dream.ConstellationClient.tsx` — 114 lines — score 100 — primary path
- `daydreams/shared/useDaydreamState.ts` — 93 lines — score 100 — primary path
- `coresurfaces/home/buttons/button-groups.ts` — 91 lines — score 100 — primary path
- `daydreams/brand/page.tsx` — 57 lines — score 100 — primary path
- `components/daydream/dream.StandaloneEnginSurface.tsx` — 38 lines — score 100 — primary path
- `components/daydream/dream.OpenDaydreamSideBButton.tsx` — 19 lines — score 100 — primary path
- `app/daydream/game/dream.GamePageClient.tsx` — 5 lines — score 100 — primary path
- `components/runtime/dream.RuntimeView.tsx` — 432 lines — score 63 — supporting path
- `components/runtime/dream.shell.RuntimeShell.tsx` — 547 lines — score 59 — supporting path
- `components/runtime/dream.DualRuntimeContainer.tsx` — 246 lines — score 59 — supporting path
- `engine/runtime/dreamsurface/dreamsurface.bridge.ts` — 51 lines — score 55 — supporting path
- `engine/runtime/dreamsurface/dreamsurface.delta.ts` — 23 lines — score 55 — supporting path
- `engine/runtime/dreamsurface/index.ts` — 8 lines — score 55 — supporting path
## 16. Dreams (Widgets / Windows / Surfaces)

### Plain English
Dreams, widgets, windows, and surfaces are the visible objects users manipulate. This section maps the components and runtime support that make them openable, stateful, movable, and connected to Engins.

### What users experience
Users feel this as cards, panels, windows, widgets, surface launches, and interactive objects that turn the product into a creative operating system rather than a static website.

### Repo Evidence
Matched focused repo evidence: 52 files, about 8,304 readable source lines.

Behavior signals:
- state — 29 file hits
- commerce — 27 file hits
- auth — 26 file hits
- mobile touch — 21 file hits
- runtime — 17 file hits
- events — 15 file hits
- rendering — 12 file hits
- persistence — 8 file hits

Routes and APIs:
- GET|PATCH|DELETE /api/dream-windows/[id] ← app/api/dream-windows/[id]/route.ts
- GET|POST /api/dream-windows ← app/api/dream-windows/route.ts
- /settings/dreams ← app/settings/dreams/page.tsx
- /settings/widgets ← app/settings/widgets/page.tsx

Components:
- AppIcon — components/dreams/dreamsurface.dreamspace.tsx
- EngineBarChart — components/dreams/dreamsurface.dreamspace.tsx
- DreamsSpacePanel — components/dreams/dreamsurface.dreamspace.tsx
- DreamWindowTile — components/dreams/dream.widget.SuperDreamWidget.tsx
- ClusterCard — components/dreams/dream.widget.SuperDreamWidget.tsx
- SuperDreamWidget — components/dreams/dream.widget.SuperDreamWidget.tsx
- WidgetCard — components/widgets/dream.widget.WidgetCard.tsx
- JourneyDreamWindow — components/dreams/dream.window.JourneyDreamWindow.tsx
- SkeletonRow — components/dreams/dreamsurface.shell.tsx
- DreamShell — components/dreams/dreamsurface.shell.tsx
- AnchorWidget — components/dream.widget.AnchorWidget.tsx
- UniversalWidget — components/widgets/dream.widget.UniversalWidget.tsx
- PlayMediaWidget — components/widgets/dream.widget.PlayMediaWidget.tsx
- WidgetBubble — components/dream.widget.WidgetBubble.tsx

Hooks:
- useDreamsRuntime — components/dreams/dreamsurface.dreamspace.tsx
- useSessionIntelligence — components/dreams/dreamsurface.dreamspace.tsx
- useRouter — components/dreams/dreamsurface.dreamspace.tsx
- useCallback — components/dreams/dreamsurface.dreamspace.tsx
- useEffect — components/dreams/dreamsurface.dreamspace.tsx
- useRef — components/dreams/dreamsurface.dreamspace.tsx
- useState — components/dreams/dreamsurface.dreamspace.tsx
- useDreamWindowActions — components/dreams/dream.widget.SuperDreamWidget.tsx
- useCallback — components/dreams/dream.widget.SuperDreamWidget.tsx
- useMemo — components/dreams/dream.widget.SuperDreamWidget.tsx
- useState — components/dreams/dream.widget.SuperDreamWidget.tsx
- useEffect — components/dreams/dreamsurface.shell.tsx
- useRef — components/dreams/dreamsurface.shell.tsx
- useState — components/dreams/dreamsurface.shell.tsx

Exports that define public behavior:
- getAppRoute — components/dreams/dreamsurface.dreamspace.tsx
- RecentDestination — components/dreams/dreamsurface.dreamspace.tsx
- buildRecentDestinations — components/dreams/dreamsurface.dreamspace.tsx
- default export — dreamsurface.dreamspace (components/dreams/dreamsurface.dreamspace.tsx)
- DreamSurface — types/widget-system-v2.ts
- DreamSurfaceKey — types/widget-system-v2.ts
- WidgetTransform — types/widget-system-v2.ts
- transformToArray — types/widget-system-v2.ts
- transformFromArray — types/widget-system-v2.ts
- FeedHostConfig — types/widget-system-v2.ts
- CompositePane — types/widget-system-v2.ts
- CompositeHostConfig — types/widget-system-v2.ts
- HostConfig — types/widget-system-v2.ts
- DreamDefinition — types/widget-system-v2.ts

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
- `components/dreams/dreamsurface.dreamspace.tsx` — 891 lines — score 138 — primary path, path keyword: dreamsurface
- `types/widget-system-v2.ts` — 373 lines — score 138 — primary path, path keyword: widget
- `components/dreams/dream.widget.SuperDreamWidget.tsx` — 377 lines — score 134 — primary path, path keyword: widget
- `app/api/dream-windows/[id]/route.ts` — 300 lines — score 134 — primary path, path keyword: dream window
- `app/api/dream-windows/route.ts` — 185 lines — score 134 — primary path, path keyword: dream window
- `components/widgets/dream.widget.WidgetCard.tsx` — 62 lines — score 134 — primary path, path keyword: widget
- `components/dreams/dream.window.JourneyDreamWindow.tsx` — 57 lines — score 134 — primary path, path keyword: dream window
- `components/widgets/dream.widget.WidgetSurface.tsx` — 19 lines — score 134 — primary path, path keyword: widget
- `engine/dream-window/DreamWindowLifecycle.ts` — 302 lines — score 130 — primary path, path keyword: dream window
- `components/dreams/dreamsurface.shell.tsx` — 258 lines — score 130 — primary path, path keyword: dreamsurface
- `engine/dream-window/runtimeRegion.ts` — 256 lines — score 130 — primary path, path keyword: dream window
- `engine/dream-window/connectionVerbs.ts` — 229 lines — score 130 — primary path, path keyword: dream window
- `types/dream-window.ts` — 105 lines — score 130 — primary path, path keyword: dream window
- `engine/dream-window/index.ts` — 51 lines — score 130 — primary path, path keyword: dream window
- `components/widgets/dream.widget.WidgetLibrary.tsx` — 19 lines — score 130 — primary path, path keyword: widget
- `components/widgets/dream.widget.WidgetShell.tsx` — 9 lines — score 130 — primary path, path keyword: widget
- `components/dream.widget.AnchorWidget.tsx` — 300 lines — score 126 — primary path, path keyword: widget
- `engine/dream-window/useDreamWindowActions.ts` — 287 lines — score 126 — primary path, path keyword: dream window
- `components/widgets/dream.widget.UniversalWidget.tsx` — 230 lines — score 126 — primary path, path keyword: widget
- `engine/dream-window/enginConnectionNetwork.ts` — 205 lines — score 126 — primary path, path keyword: dream window
- `components/widgets/dream.widget.PlayMediaWidget.tsx` — 152 lines — score 126 — primary path, path keyword: widget
- `components/dream.widget.WidgetBubble.tsx` — 112 lines — score 126 — primary path, path keyword: widget
- `components/widgets/dream.widget.WidgetPlaceholder.tsx` — 106 lines — score 126 — primary path, path keyword: widget
- `components/dream.widget.ProfileWidgetBlock.tsx` — 102 lines — score 126 — primary path, path keyword: widget
- `components/dreams/dreamsurface.window.tsx` — 67 lines — score 126 — primary path, path keyword: dreamsurface
- `app/settings/dreams/page.tsx` — 40 lines — score 120 — primary path
- `app/settings/widgets/page.tsx` — 40 lines — score 120 — primary path
- `engine/dreams/types.ts` — 483 lines — score 116 — primary path
- `components/dream.DragToAnchorClose.tsx` — 174 lines — score 108 — primary path
- `app/settings/dreams/dreams-layout-editor.tsx` — 83 lines — score 108 — primary path
- `engine/dreams/dreamIntentBus.ts` — 184 lines — score 104 — primary path
- `components/widgets/dream.ConfigureSheet.tsx` — 160 lines — score 104 — primary path
- `components/dreams/dream.panel.RuntimeMemoryHUD.tsx` — 158 lines — score 104 — primary path
- `types/widgets.ts` — 155 lines — score 104 — primary path

Supporting files:
- `engine/dreams/useDreamsRuntime.ts` — 101 lines — score 104 — primary path
- `types/widgetConfigs.ts` — 98 lines — score 104 — primary path
- `components/dreams/dream.DraggableDream.tsx` — 75 lines — score 104 — primary path
- `engine/dreams/drag.ts` — 65 lines — score 104 — primary path
- `components/widgets/dream.AddDreamCTA.tsx` — 63 lines — score 104 — primary path
- `components/dreams/dream.SlideOverPanel.tsx` — 50 lines — score 104 — primary path
- `components/dreams/dream.shell.DreamShell.tsx` — 5 lines — score 104 — primary path
- `components/dreams/dream.shell.SharedDreamShell.tsx` — 402 lines — score 100 — primary path
- `engine/dreams/DreamRegistry.tsx` — 119 lines — score 100 — primary path
- `components/dreams/dream.GlobalDragLayer.tsx` — 97 lines — score 100 — primary path
- `components/widgets/dream.EditModeBanner.tsx` — 55 lines — score 100 — primary path
- `components/widgets/dream.EditModeProvider.tsx` — 35 lines — score 100 — primary path
- `components/dreams/dream.outputlayer.tsx` — 33 lines — score 100 — primary path
- `components/dreams/dream.connectorlayer.tsx` — 31 lines — score 100 — primary path
- `engine/dreams/profileProjection.ts` — 28 lines — score 100 — primary path
- `components/dreams/dream.PlatformErrorReporter.tsx` — 25 lines — score 100 — primary path
- `components/dreams/dream.featurelayer.tsx` — 22 lines — score 100 — primary path
- `components/dream.FeedCard.tsx` — 469 lines — score 59 — supporting path
## 17. User-Facing Modularity

### Plain English
User-facing modularity is the part of DREAMengin that lets features feel composable to people: launchable modules, reusable panels, shared shells, configurable surfaces, and modules that can move between contexts.

### What users experience
Users feel modularity when they can open a tool from more than one place, carry state across a surface, combine Engins, and customize the product without waiting for a fixed page.

### Repo Evidence
Matched focused repo evidence: 45 files, about 7,318 readable source lines.

Behavior signals:
- commerce — 30 file hits
- state — 26 file hits
- mobile touch — 25 file hits
- rendering — 25 file hits
- runtime — 24 file hits
- auth — 20 file hits
- events — 15 file hits
- persistence — 13 file hits

Routes and APIs:
- None found.

Components:
- ProfilePanel — components/panels/dream.panel.ProfilePanel.tsx
- SettingsPanel — components/panels/dream.panel.SettingsPanel.tsx
- HelpPanel — components/panels/dream.panel.HelpPanel.tsx
- Toggle — components/panels/dream.panel.FeedSettingsPanel.tsx
- FeedSettingsPanel — components/panels/dream.panel.FeedSettingsPanel.tsx
- GradientThemePicker — components/panels/dream.panel.AppearancePanel.tsx
- Slider — components/panels/dream.panel.AppearancePanel.tsx
- PresetCard — components/panels/dream.panel.AppearancePanel.tsx
- AppearancePanel — components/panels/dream.panel.AppearancePanel.tsx
- Toggle — components/panels/dream.panel.PrivacyPanel.tsx
- PrivacyPanel — components/panels/dream.panel.PrivacyPanel.tsx
- DataPanel — components/panels/dream.panel.DataPanel.tsx
- MarketplacePanel — components/panels/dream.panel.MarketplacePanel.tsx
- WidgetsPanel — components/panels/dream.panel.WidgetsPanel.tsx

Hooks:
- useCallback — components/panels/dream.panel.ProfilePanel.tsx
- useEffect — components/panels/dream.panel.ProfilePanel.tsx
- useRef — components/panels/dream.panel.ProfilePanel.tsx
- useState — components/panels/dream.panel.ProfilePanel.tsx
- useDreamSystem — components/panels/dream.panel.SettingsPanel.tsx
- useEffect — components/panels/dream.panel.SettingsPanel.tsx
- useState — components/panels/dream.panel.SettingsPanel.tsx
- useDreamSystem — components/panels/dream.panel.HelpPanel.tsx
- useCallback — components/panels/dream.panel.FeedSettingsPanel.tsx
- useEffect — components/panels/dream.panel.FeedSettingsPanel.tsx
- useState — components/panels/dream.panel.FeedSettingsPanel.tsx
- useTheme — components/panels/dream.panel.AppearancePanel.tsx
- useDreamSystem — components/panels/dream.panel.AppearancePanel.tsx
- useCustomizeMode — components/panels/dream.panel.AppearancePanel.tsx

Exports that define public behavior:
- RuntimeId — types/module-manifest.ts
- ModuleType — types/module-manifest.ts
- ModuleManifest — types/module-manifest.ts
- RuntimeCompatibility — types/module-manifest.ts
- ModuleCompatibility — types/module-manifest.ts
- isModuleManifest — types/module-manifest.ts
- negotiateModuleCompatibility — types/module-manifest.ts
- default export — dream.panel.ProfilePanel (components/panels/dream.panel.ProfilePanel.tsx)
- default export — dream.panel.SettingsPanel (components/panels/dream.panel.SettingsPanel.tsx)
- default export — dream.panel.HelpPanel (components/panels/dream.panel.HelpPanel.tsx)
- default export — dream.panel.FeedSettingsPanel (components/panels/dream.panel.FeedSettingsPanel.tsx)
- default export — dream.panel.AppearancePanel (components/panels/dream.panel.AppearancePanel.tsx)
- default export — dream.panel.PrivacyPanel (components/panels/dream.panel.PrivacyPanel.tsx)
- default export — dream.panel.DataPanel (components/panels/dream.panel.DataPanel.tsx)

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
- `types/module-manifest.ts` — 183 lines — score 152 — primary path, path keyword: module
- `components/panels/dream.panel.ProfilePanel.tsx` — 338 lines — score 126 — primary path, path keyword: panel
- `components/panels/dream.panel.SettingsPanel.tsx` — 185 lines — score 126 — primary path, path keyword: panel
- `components/panels/dream.panel.HelpPanel.tsx` — 71 lines — score 126 — primary path, path keyword: panel
- `components/panels/dream.panel.FeedPanel.tsx` — 4 lines — score 126 — primary path, path keyword: panel
- `components/panels/dream.panel.FeedSettingsPanel.tsx` — 192 lines — score 122 — primary path, path keyword: panel
- `components/panels/dream.panel.AppearancePanel.tsx` — 166 lines — score 122 — primary path, path keyword: panel
- `components/panels/dream.panel.PrivacyPanel.tsx` — 146 lines — score 122 — primary path, path keyword: panel
- `components/panels/dream.panel.DataPanel.tsx` — 139 lines — score 122 — primary path, path keyword: panel
- `components/panels/dream.panel.MarketplacePanel.tsx` — 139 lines — score 122 — primary path, path keyword: panel
- `components/panels/dream.panel.WidgetsPanel.tsx` — 108 lines — score 122 — primary path, path keyword: panel
- `components/panels/dream.panel.SafetyPanel.tsx` — 102 lines — score 122 — primary path, path keyword: panel
- `components/panels/dream.panel.ControlsPanel.tsx` — 90 lines — score 122 — primary path, path keyword: panel
- `components/panels/dream.panel.ConnectorsPanel.tsx` — 48 lines — score 122 — primary path, path keyword: panel
- `components/panels/dream.panel.AlgorithmPanel.tsx` — 36 lines — score 122 — primary path, path keyword: panel
- `engine/runtime/moduleRegistry.ts` — 170 lines — score 112 — primary path
- `engine/runtime/dropTargetRegistry.ts` — 116 lines — score 112 — primary path
- `components/runtime/dream.shell.RuntimeShell.tsx` — 547 lines — score 108 — primary path
- `components/runtime/dream.RuntimeView.tsx` — 432 lines — score 108 — primary path
- `components/runtime/dream.DualRuntimeContainer.tsx` — 246 lines — score 108 — primary path
- `components/home/dream.ActiveModuleSurface.tsx` — 475 lines — score 104 — primary path
- `dreamdmbar/hooks/useModuleBarIntent.ts` — 87 lines — score 104 — primary path
- `components/panels/panelTypes.ts` — 47 lines — score 104 — primary path
- `components/dreams/dream.panel.RuntimeMemoryHUD.tsx` — 158 lines — score 85 — supporting path, path keyword: panel
- `components/draggable/dream.DraggableModule.tsx` — 359 lines — score 63 — supporting path
- `components/dreams/dreamsurface.window.tsx` — 67 lines — score 63 — supporting path
- `components/dreams/dreamsurface.dreamspace.tsx` — 891 lines — score 59 — supporting path
- `components/dreams/dream.SlideOverPanel.tsx` — 50 lines — score 59 — supporting path
- `components/dreams/dream.shell.SharedDreamShell.tsx` — 402 lines — score 55 — supporting path
- `components/dreams/dream.widget.SuperDreamWidget.tsx` — 377 lines — score 55 — supporting path
- `components/dreams/dreamsurface.shell.tsx` — 258 lines — score 55 — supporting path
- `components/engines/shared/dream.shell.EnginAppShell.tsx` — 114 lines — score 55 — supporting path
- `components/dreams/dream.GlobalDragLayer.tsx` — 97 lines — score 55 — supporting path
- `components/dreams/dream.DraggableDream.tsx` — 75 lines — score 55 — supporting path

Supporting files:
- `components/engines/shared/dream.makeEnginApp.tsx` — 64 lines — score 55 — supporting path
- `components/dreams/dream.window.JourneyDreamWindow.tsx` — 57 lines — score 55 — supporting path
- `components/engines/shared/dream.EnginProvider.tsx` — 54 lines — score 55 — supporting path
- `components/engines/shared/dream.bar.EnginNavBar.tsx` — 51 lines — score 55 — supporting path
- `components/engines/shared/dream.EnginRuleSet.ts` — 51 lines — score 55 — supporting path
- `components/dreams/dream.outputlayer.tsx` — 33 lines — score 55 — supporting path
- `components/dreams/dream.connectorlayer.tsx` — 31 lines — score 55 — supporting path
- `components/dreams/dream.PlatformErrorReporter.tsx` — 25 lines — score 55 — supporting path
- `components/dreams/dream.featurelayer.tsx` — 22 lines — score 55 — supporting path
- `components/engines/shared/index.ts` — 10 lines — score 55 — supporting path
- `components/dreams/dream.shell.DreamShell.tsx` — 5 lines — score 55 — supporting path
## 18. Custom Engins

### Plain English
Custom Engins are the extension story: code, rules, manifests, registries, and capability boundaries that let DREAMengin grow by adding or composing new Engin behavior.

### What users experience
Users feel this when the product can add new studios, workflows, or creative capabilities without forcing a totally new app.

### Repo Evidence
Matched focused repo evidence: 90 files, about 16,492 readable source lines.

Behavior signals:
- persistence — 49 file hits
- state — 47 file hits
- runtime — 42 file hits
- auth — 41 file hits
- rendering — 39 file hits
- events — 23 file hits
- commerce — 20 file hits
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
- EnginesHubPage — app/engines/page.tsx
- GamesBuilderPage — app/engines/games/builder/page.tsx
- GamesLibraryPage — app/engines/games/library/page.tsx
- GamesScoresPage — app/engines/games/scores/page.tsx
- CodeNotebookPage — app/engines/code/notebook/page.tsx
- MusicArrangePage — app/engines/music/arrange/page.tsx
- MusicLibraryPage — app/engines/music/library/page.tsx
- MusicStudioPage — app/engines/music/studio/page.tsx
- CodeAIPage — app/engines/code/ai/page.tsx
- CodeProjectsPage — app/engines/code/projects/page.tsx
- LabDataPage — app/engines/lab/data/page.tsx
- LabExperimentsPage — app/engines/lab/experiments/page.tsx
- LabQuantumPage — app/engines/lab/quantum/page.tsx
- PortfolioAssetsPage — app/engines/portfolio/assets/page.tsx

Hooks:
- useContext — engins/gameengin/cartridges/reactCartridge.ts
- useGameEngineAPI — engins/gameengin/cartridges/reactCartridge.ts
- useEffect — engins/gameengin/cartridges/reactCartridge.ts
- useEnginWorkflow — engins/rulesets/workflowEngine.ts
- useCallback — engins/forgeengin/forge/useForgeBuild.ts
- useRef — engins/forgeengin/forge/useForgeBuild.ts
- useState — engins/forgeengin/forge/useForgeBuild.ts
- useForgeBuild — engins/forgeengin/forge/useForgeBuild.ts
- useCallback — engins/rulesets/useEnginWorkflow.ts
- useEffect — engins/rulesets/useEnginWorkflow.ts
- useState — engins/rulesets/useEnginWorkflow.ts
- useEnginWorkflow — engins/rulesets/useEnginWorkflow.ts
- useCallback — engins/rulesets/game/useGameEnginRuntime.ts
- useEffect — engins/rulesets/game/useGameEnginRuntime.ts

Exports that define public behavior:
- CartridgeRenderMode — engins/gameengin/cartridges/manifest.ts
- CartridgeAssetPolicy — engins/gameengin/cartridges/manifest.ts
- CartridgeLaunchMetadata — engins/gameengin/cartridges/manifest.ts
- CartridgeManifestEntry — engins/gameengin/cartridges/manifest.ts
- getCartridgeManifest — engins/gameengin/cartridges/manifest.ts
- getCartridgeCategories — engins/gameengin/cartridges/manifest.ts
- RuntimeId — types/module-manifest.ts
- ModuleType — types/module-manifest.ts
- ModuleManifest — types/module-manifest.ts
- RuntimeCompatibility — types/module-manifest.ts
- ModuleCompatibility — types/module-manifest.ts
- isModuleManifest — types/module-manifest.ts
- negotiateModuleCompatibility — types/module-manifest.ts
- ArtifactPermissionSchema — engins/forgeengin/enginpipe/artifact/manifest.ts

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
- `engins/gameengin/cartridges/manifest.ts` — 172 lines — score 130 — primary path, path keyword: manifest
- `types/module-manifest.ts` — 183 lines — score 126 — primary path, path keyword: manifest
- `engins/forgeengin/enginpipe/artifact/manifest.ts` — 103 lines — score 126 — primary path, path keyword: manifest
- `engins/gameengin/cartridge-manifest.ts` — 65 lines — score 126 — primary path, path keyword: manifest
- `engine/engin-runtime/EnginRuntime.ts` — 1082 lines — score 112 — primary path
- `engine/engin-runtime/EnginRuleSetContract.ts` — 286 lines — score 112 — primary path
- `engine/engin-runtime/EnginCapabilityTargets.ts` — 473 lines — score 108 — primary path
- `engins/forgeengin/forge/forgeRegistry.ts` — 433 lines — score 108 — primary path
- `engins/rulesets/game/gameEnginRuleSet.ts` — 302 lines — score 108 — primary path
- `engins/rulesets/music/starMakerEnginRuleSet.ts` — 265 lines — score 108 — primary path
- `engins/rulesets/brand/brandEnginRuleSet.ts` — 241 lines — score 108 — primary path
- `engins/rulesets/lab/labEnginRuleSet.ts` — 233 lines — score 108 — primary path
- `engins/gameengin/cartridges/loaders.ts` — 97 lines — score 108 — primary path
- `engins/gameengin/cartridges/index.ts` — 17 lines — score 108 — primary path
- `engine/engin-runtime/EnginDomainCores.ts` — 758 lines — score 104 — primary path
- `engins/forgeengin/forge/forgeIntelligence.ts` — 618 lines — score 104 — primary path
- `engine/runtime/enginWorkflowRegistry.ts` — 599 lines — score 104 — primary path
- `engine/engin-runtime/EnginBaseState.ts` — 496 lines — score 104 — primary path
- `engins/rulesets/code/codeEnginRuleSet.ts` — 395 lines — score 104 — primary path
- `engine/engin-runtime/EnginCapabilities.ts` — 242 lines — score 104 — primary path
- `engine/engin-runtime/index.ts` — 233 lines — score 104 — primary path
- `engine/engin-runtime/PremiumRuntimeQuality.ts` — 173 lines — score 104 — primary path
- `engins/gameengin/cartridges/reactCartridge.ts` — 138 lines — score 104 — primary path
- `engins/gameengin/cartridges/achievementEngine.ts` — 126 lines — score 104 — primary path
- `engins/gameengin/cartridges/apiStubs.ts` — 75 lines — score 104 — primary path
- `engins/gameengin/assets/BundleManifest.ts` — 40 lines — score 104 — primary path
- `engins/rulesets/content/contentEnginRuleSet.ts` — 37 lines — score 104 — primary path
- `engine/engin-runtime/EnginRuntimeRegistry.ts` — 35 lines — score 104 — primary path
- `engins/rulesets/forge/index.ts` — 24 lines — score 104 — primary path
- `engins/rulesets/code/index.ts` — 23 lines — score 104 — primary path
- `engins/rulesets/dreams/index.ts` — 23 lines — score 104 — primary path
- `engins/rulesets/game/declarative.ts` — 23 lines — score 104 — primary path
- `engins/rulesets/lab/index.ts` — 23 lines — score 104 — primary path
- `engins/rulesets/music/index.ts` — 23 lines — score 104 — primary path

Supporting files:
- `engins/rulesets/homedream/index.ts` — 15 lines — score 104 — primary path
- `engins/contentengin/pipeline/writeManifest.ts` — 4 lines — score 104 — primary path
- `engine/engin-runtime/HotRuntime.ts` — 1164 lines — score 100 — primary path
- `engine/engin-runtime/EnginCapabilityExecution.ts` — 515 lines — score 100 — primary path
- `engins/forgeengin/forge/forgeRituals.ts` — 375 lines — score 100 — primary path
- `engins/forgeengin/forge/forgeNexus.ts` — 311 lines — score 100 — primary path
- `engins/forgeengin/forge/forgeMomentum.ts` — 297 lines — score 100 — primary path
- `engins/rulesets/workflowEngine.ts` — 281 lines — score 100 — primary path
- `engins/forgeengin/forge/engineForge.ts` — 234 lines — score 100 — primary path
- `engins/forgeengin/forge/useForgeBuild.ts` — 234 lines — score 100 — primary path
- `engins/forgeengin/forge/forgeBuild.ts` — 227 lines — score 100 — primary path
- `engins/rulesets/useEnginWorkflow.ts` — 222 lines — score 100 — primary path
- `engine/engin-runtime/EnginIOAdapter.ts` — 214 lines — score 100 — primary path
- `engins/gameengin/cartridges/saveState.ts` — 145 lines — score 100 — primary path
- `engine/engin-runtime/EnginEventBus.ts` — 123 lines — score 100 — primary path
- `engine/engin-runtime/EnginCapabilityScorecard.ts` — 122 lines — score 100 — primary path
- `engins/rulesets/game/useGameEnginRuntime.ts` — 119 lines — score 100 — primary path
- `engins/rulesets/brand/useBrandEnginRuntime.ts` — 109 lines — score 100 — primary path
- `engins/rulesets/code/useCodeEnginRuntime.ts` — 109 lines — score 100 — primary path
- `engins/rulesets/content/useContentEnginRuntime.ts` — 109 lines — score 100 — primary path
- `engins/rulesets/lab/useLabEnginRuntime.ts` — 109 lines — score 100 — primary path
- `engins/rulesets/music/useStarMakerEnginRuntime.ts` — 109 lines — score 100 — primary path
- `engine/engin-runtime/EnginHardwareCapabilities.ts` — 96 lines — score 100 — primary path
- `engine/engin-runtime/EnginPerformanceProbe.ts` — 94 lines — score 100 — primary path
- `engine/engin-runtime/EnginSnapshotFingerprint.ts` — 90 lines — score 100 — primary path
- `engins/forgeengin/forge/useForgeActivity.ts` — 65 lines — score 100 — primary path
- `engine/engin-runtime/InternalMetrics.ts` — 47 lines — score 100 — primary path
- `engins/rulesets/homedream/dream.homedream.physics.ts` — 36 lines — score 100 — primary path
- `app/engines/page.tsx` — 130 lines — score 63 — supporting path
- `app/engines/games/builder/page.tsx` — 51 lines — score 63 — supporting path
## 19. Full Website Customizability

### Plain English
Full website customizability covers appearance, profile editing, brand surfaces, themes, layouts, public profiles, settings, and any code that lets users change how their site or identity looks.

### What users experience
Users experience this as profile editing, theme choices, brand customization, public pages, custom identity, and the ability to make DREAMengin feel like their own site.

### Repo Evidence
Matched focused repo evidence: 52 files, about 16,248 readable source lines.

Behavior signals:
- commerce — 37 file hits
- auth — 29 file hits
- persistence — 28 file hits
- mobile touch — 24 file hits
- state — 19 file hits
- events — 11 file hits
- rendering — 9 file hits
- runtime — 3 file hits

Routes and APIs:
- /settings/appearance ← app/settings/appearance/page.tsx
- /view-profile ← app/view-profile/page.tsx
- /profile/[handle] ← app/profile/[handle]/page.tsx
- /profile ← app/profile/page.tsx
- /settings ← app/settings/page.tsx
- /settings/help ← app/settings/help/page.tsx
- /edit-profiledream ← app/edit-profiledream/page.tsx
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
- VoidThemeSection — app/settings/appearance/page.tsx
- GradientThemePicker — app/settings/appearance/page.tsx
- Slider — app/settings/appearance/page.tsx
- PresetCard — app/settings/appearance/page.tsx
- BgImageSection — app/settings/appearance/page.tsx
- AppearanceSettingsPage — app/settings/appearance/page.tsx
- ViewProfilePage — app/view-profile/page.tsx
- ProfilePage — app/profile/[handle]/page.tsx
- ProfileCustomizeButton — components/profile/dream.ProfileCustomizeButton.tsx
- ProfileLegacyPage — app/profile/page.tsx
- DotGrid — components/profile/dream.widget.ProfileWidgetGrid.tsx
- SparkLine — components/profile/dream.widget.ProfileWidgetGrid.tsx
- BarChart — components/profile/dream.widget.ProfileWidgetGrid.tsx
- WidgetConfigSheet — components/profile/dream.widget.ProfileWidgetGrid.tsx

Hooks:
- useTheme — app/settings/appearance/page.tsx
- useCustomizeMode — app/settings/appearance/page.tsx
- useCallback — app/settings/appearance/page.tsx
- useEffect — app/settings/appearance/page.tsx
- useRef — app/settings/appearance/page.tsx
- useState — app/settings/appearance/page.tsx
- useCustomizeMode — components/profile/dream.ProfileCustomizeButton.tsx
- useRef — components/profile/dream.widget.ProfileWidgetGrid.tsx
- useState — components/profile/dream.widget.ProfileWidgetGrid.tsx
- useCallback — components/profile/dream.ProfileCanvas.tsx
- useState — components/profile/dream.ProfileCanvas.tsx
- useRouter — components/profile/dream.EditableAvatar.tsx
- useSharedDream — engins/engin.BrandingEngin.tsx
- useDaydreamPersistence — engins/engin.BrandingEngin.tsx

Exports that define public behavior:
- default export — page (app/settings/appearance/page.tsx)
- metadata — app/view-profile/page.tsx
- default export — page (app/view-profile/page.tsx)
- default export — page (app/profile/[handle]/page.tsx)
- default export — dream.ProfileCustomizeButton (components/profile/dream.ProfileCustomizeButton.tsx)
- default export — page (app/profile/page.tsx)
- WidgetType — components/profile/dream.widget.ProfileWidgetGrid.tsx
- WidgetSize — components/profile/dream.widget.ProfileWidgetGrid.tsx
- WidgetBgStyle — components/profile/dream.widget.ProfileWidgetGrid.tsx
- WidgetConfig — components/profile/dream.widget.ProfileWidgetGrid.tsx
- Widget — components/profile/dream.widget.ProfileWidgetGrid.tsx
- DreamType — components/profile/dream.widget.ProfileWidgetGrid.tsx
- DreamSize — components/profile/dream.widget.ProfileWidgetGrid.tsx
- DreamBgStyle — components/profile/dream.widget.ProfileWidgetGrid.tsx

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
- `app/settings/appearance/page.tsx` — 750 lines — score 146 — primary path, path keyword: appearance
- `app/view-profile/page.tsx` — 365 lines — score 134 — primary path, path keyword: profile
- `app/profile/[handle]/page.tsx` — 252 lines — score 134 — primary path, path keyword: profile
- `components/profile/dream.ProfileCustomizeButton.tsx` — 30 lines — score 134 — primary path, path keyword: profile
- `app/profile/page.tsx` — 18 lines — score 134 — primary path, path keyword: profile
- `components/profile/dream.widget.ProfileWidgetGrid.tsx` — 2209 lines — score 130 — primary path, path keyword: profile
- `components/profile/dream.ProfileCanvas.tsx` — 340 lines — score 130 — primary path, path keyword: profile
- `components/ui-system/theme-engine.ts` — 279 lines — score 126 — primary path, path keyword: theme
- `components/profile/dream.EditableAvatar.tsx` — 110 lines — score 126 — primary path, path keyword: profile
- `app/settings/page.tsx` — 172 lines — score 124 — primary path
- `styles/theme.css` — 34 lines — score 122 — primary path, path keyword: theme
- `app/settings/help/page.tsx` — 94 lines — score 116 — primary path
- `styles/globals.css` — 5218 lines — score 112 — primary path
- `engins/engin.BrandingEngin.tsx` — 1260 lines — score 112 — primary path
- `app/edit-profiledream/page.tsx` — 561 lines — score 112 — primary path
- `app/settings/account/page.tsx` — 125 lines — score 112 — primary path
- `app/settings/security/page.tsx` — 254 lines — score 108 — primary path
- `app/settings/notifications/page.tsx` — 207 lines — score 108 — primary path
- `app/settings/safety/page.tsx` — 179 lines — score 108 — primary path
- `app/settings/dreams/page.tsx` — 40 lines — score 108 — primary path
- `app/settings/widgets/page.tsx` — 40 lines — score 108 — primary path
- `app/settings/algorithm/page.tsx` — 39 lines — score 108 — primary path
- `app/settings/controls/page.tsx` — 19 lines — score 108 — primary path
- `app/settings/data/page.tsx` — 19 lines — score 108 — primary path
- `app/settings/privacy/page.tsx` — 19 lines — score 108 — primary path
- `app/settings/feed/page.tsx` — 14 lines — score 108 — primary path
- `app/settings/privacy/dream.PrivacyClient.tsx` — 394 lines — score 104 — primary path
- `app/settings/account/dream.DangerZoneActions.tsx` — 325 lines — score 104 — primary path
- `components/ui-system/CustomizeModeContext.tsx` — 143 lines — score 104 — primary path
- `app/settings/data/dream.DataClient.tsx` — 138 lines — score 104 — primary path
- `components/dream.ThemeApplicator.tsx` — 96 lines — score 104 — primary path
- `components/providers/dream.ThemeProvider.tsx` — 91 lines — score 104 — primary path
- `styles/home-dream.css` — 235 lines — score 100 — primary path
- `app/settings/controls/dream.ControlsClient.tsx` — 163 lines — score 100 — primary path

Supporting files:
- `app/settings/dreams/dreams-layout-editor.tsx` — 83 lines — score 100 — primary path
- `app/settings/controls/dream.PositionIndicatorToggle.tsx` — 54 lines — score 100 — primary path
- `styles/view-transitions.css` — 49 lines — score 100 — primary path
- `styles/dream-shell.css` — 24 lines — score 100 — primary path
- `app/api/settings/appearance/route.ts` — 92 lines — score 93 — supporting path, path keyword: appearance
- `components/customize/dream.bar.CustomizeModeBar.tsx` — 92 lines — score 85 — supporting path, path keyword: customize
- `components/customize/dream.bar.CustomizeToolbar.tsx` — 104 lines — score 81 — supporting path, path keyword: customize
- `components/customize/dream.GlobalCustomizeUI.tsx` — 31 lines — score 81 — supporting path, path keyword: customize
- `components/customize/panels/dream.panel.ColorPanel.tsx` — 234 lines — score 77 — supporting path, path keyword: customize
- `components/customize/panels/dream.panel.LayoutPanel.tsx` — 141 lines — score 77 — supporting path, path keyword: customize
- `components/customize/panels/dream.panel.EffectsPanel.tsx` — 112 lines — score 77 — supporting path, path keyword: customize
- `components/customize/panels/dream.panel.FontPanel.tsx` — 110 lines — score 77 — supporting path, path keyword: customize
- `components/dream.ProfileEditor.tsx` — 457 lines — score 67 — supporting path
- `app/api/settings/feed/route.ts` — 89 lines — score 63 — supporting path
- `app/api/settings/notifications/route.ts` — 84 lines — score 63 — supporting path
- `app/api/settings/privacy/route.ts` — 84 lines — score 63 — supporting path
- `components/dream.ProfileSpace.tsx` — 102 lines — score 59 — supporting path
- `components/dream.ProfileShareButton.tsx` — 74 lines — score 59 — supporting path
## 20. Backend, System, Core & CoreSurfaces

### Plain English
Backend, system, core, and CoreSurfaces are the under-the-hood execution pieces: APIs, server routes, persistence, Supabase schema, shared runtime code, system surfaces, and infrastructure that keep the app functional.

### What users experience
Users feel this indirectly when data saves, pages load, auth works, messages arrive, runtime state persists, and core surfaces do not collapse while switching contexts.

### Repo Evidence
Matched focused repo evidence: 100 files, about 31,683 readable source lines.

Behavior signals:
- auth — 95 file hits
- persistence — 87 file hits
- commerce — 46 file hits
- state — 32 file hits
- events — 28 file hits
- rendering — 23 file hits
- runtime — 20 file hits
- mobile touch — 14 file hits

Routes and APIs:
- GET /api/auth/providers ← app/api/auth/providers/route.ts
- GET /api/auth/logout ← app/api/auth/logout/route.ts
- POST /api/forge/build ← app/api/forge/build/route.ts
- POST /api/ai/idari ← app/api/ai/idari/route.ts
- POST /api/ads/view ← app/api/ads/view/route.ts
- POST /api/account/delete-dream ← app/api/account/delete-dream/route.ts
- POST /api/admin/ai-chat ← app/api/admin/ai-chat/route.ts
- PATCH|DELETE /api/drafts/[id] ← app/api/drafts/[id]/route.ts
- POST /api/skip-credits/earn ← app/api/skip-credits/earn/route.ts
- GET|POST|DELETE /api/favorites ← app/api/favorites/route.ts
- POST /api/marketplace/request ← app/api/marketplace/request/route.ts
- POST /api/skip-credits/use ← app/api/skip-credits/use/route.ts
- GET /api/skip-credits/balance ← app/api/skip-credits/balance/route.ts
- GET|PATCH|DELETE /api/dream-windows/[id] ← app/api/dream-windows/[id]/route.ts
- GET /api/feed ← app/api/feed/route.ts
- GET|POST|DELETE /api/comments ← app/api/comments/route.ts

Components:
- EditProfileDreamPage — coresurfaces/dreamsurface.EditProfileDream.tsx
- ViewProfilePage — coresurfaces/dreamsurface.ViewProfile.tsx

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
- OAuthProvidersResponse — app/api/auth/providers/route.ts
- getOAuthProvidersResponse — app/api/auth/providers/route.ts
- fetchWithRetry — app/api/forge/build/route.ts
- resolveSafeNextPath — supabase/auth/nextRedirect.ts
- buildLoginRedirectPath — supabase/auth/nextRedirect.ts
- UnifiedFeedEntry — app/api/feed/route.ts
- ShellHubDevicesResponse — app/api/shellhub/devices/route.ts
- UserRole — types/ai-system.ts
- ActorContextSchema — types/ai-system.ts
- ActorContext — types/ai-system.ts
- HomeAnchorState — types/ai-system.ts
- Surface — types/ai-system.ts
- CubePosition — types/ai-system.ts
- Overlay — types/ai-system.ts

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
- `app/api/auth/providers/route.ts` — 72 lines — score 160 — primary path, path keyword: api
- `app/api/auth/logout/route.ts` — 24 lines — score 160 — primary path, path keyword: api
- `supabase/migrations/20260210_ai_core.sql` — 280 lines — score 156 — primary path, path keyword: supabase
- `supabase/migrations/20260418000000_gameengin_core.sql` — 104 lines — score 156 — primary path, path keyword: supabase
- `supabase/migrations/20260210000001_ai_system_v2026.sql` — 454 lines — score 152 — primary path, path keyword: supabase
- `supabase/migrations/20260210000000_widget_system_v2.sql` — 364 lines — score 152 — primary path, path keyword: supabase
- `app/api/forge/build/route.ts` — 923 lines — score 146 — primary path, path keyword: api
- `app/api/ai/idari/route.ts` — 309 lines — score 146 — primary path, path keyword: api
- `supabase/auth/nextRedirect.ts` — 61 lines — score 144 — primary path, path keyword: supabase
- `app/api/ads/view/route.ts` — 192 lines — score 142 — primary path, path keyword: api
- `app/api/account/delete-dream/route.ts` — 154 lines — score 142 — primary path, path keyword: api
- `app/api/admin/ai-chat/route.ts` — 137 lines — score 142 — primary path, path keyword: api
- `app/api/drafts/[id]/route.ts` — 133 lines — score 142 — primary path, path keyword: api
- `app/api/skip-credits/earn/route.ts` — 126 lines — score 142 — primary path, path keyword: api
- `app/api/favorites/route.ts` — 112 lines — score 142 — primary path, path keyword: api
- `app/api/marketplace/request/route.ts` — 90 lines — score 142 — primary path, path keyword: api
- `app/api/skip-credits/use/route.ts` — 81 lines — score 142 — primary path, path keyword: api
- `app/api/skip-credits/balance/route.ts` — 54 lines — score 142 — primary path, path keyword: api
- `app/api/dream-windows/[id]/route.ts` — 300 lines — score 138 — primary path, path keyword: api
- `app/api/feed/route.ts` — 230 lines — score 138 — primary path, path keyword: api
- `app/api/comments/route.ts` — 209 lines — score 138 — primary path, path keyword: api
- `app/api/ai/eams/route.ts` — 193 lines — score 138 — primary path, path keyword: api
- `app/api/dream-windows/route.ts` — 185 lines — score 138 — primary path, path keyword: api
- `app/api/metrics/platform/route.ts` — 185 lines — score 138 — primary path, path keyword: api
- `app/api/game-scores/route.ts` — 177 lines — score 138 — primary path, path keyword: api
- `app/api/likes/route.ts` — 164 lines — score 138 — primary path, path keyword: api
- `app/api/ai/boogieman/route.ts` — 155 lines — score 138 — primary path, path keyword: api
- `app/api/dreams/feed/route.ts` — 152 lines — score 138 — primary path, path keyword: api
- `app/api/social/ipfs/route.ts` — 144 lines — score 138 — primary path, path keyword: api
- `app/api/marketplace/route.ts` — 142 lines — score 138 — primary path, path keyword: api
- `app/api/connectors/[provider]/connect/route.ts` — 138 lines — score 138 — primary path, path keyword: api
- `app/api/scheduled-posts/route.ts` — 138 lines — score 138 — primary path, path keyword: api
- `app/api/shared-dream/sessions/[id]/route.ts` — 134 lines — score 138 — primary path, path keyword: api
- `app/api/activity/track/route.ts` — 122 lines — score 138 — primary path, path keyword: api

Supporting files:
- `app/api/drafts/route.ts` — 119 lines — score 138 — primary path, path keyword: api
- `app/api/agent/session/route.ts` — 115 lines — score 138 — primary path, path keyword: api
- `app/api/dreams/instances/route.ts` — 113 lines — score 138 — primary path, path keyword: api
- `app/api/journey/route.ts` — 110 lines — score 138 — primary path, path keyword: api
- `app/api/setup/google-oauth/route.ts` — 101 lines — score 138 — primary path, path keyword: api
- `app/api/account/delete-data/route.ts` — 99 lines — score 138 — primary path, path keyword: api
- `app/api/settings/appearance/route.ts` — 92 lines — score 138 — primary path, path keyword: api
- `app/api/shellhub/devices/route.ts` — 85 lines — score 138 — primary path, path keyword: api
- `app/api/account/export-data/route.ts` — 84 lines — score 138 — primary path, path keyword: api
- `app/api/admin/observability/route.ts` — 84 lines — score 138 — primary path, path keyword: api
- `app/api/settings/notifications/route.ts` — 84 lines — score 138 — primary path, path keyword: api
- `app/api/settings/privacy/route.ts` — 84 lines — score 138 — primary path, path keyword: api
- `app/api/connectors/[provider]/disconnect/route.ts` — 72 lines — score 138 — primary path, path keyword: api
- `app/api/posts/[id]/route.ts` — 69 lines — score 138 — primary path, path keyword: api
- `app/api/social/livekit/room/route.ts` — 68 lines — score 138 — primary path, path keyword: api
- `app/api/social/livekit/token/route.ts` — 67 lines — score 138 — primary path, path keyword: api
- `supabase/migrations/20260413000000_phase9_activity_first_protocol.sql` — 769 lines — score 134 — primary path, path keyword: supabase
- `types/ai-system.ts` — 513 lines — score 134 — primary path, path keyword: system
- `supabase/migrations/20260324000001_phase8e_shop_marketplace.sql` — 186 lines — score 134 — primary path, path keyword: supabase
- `supabase/migrations/20260129000000_upgrade_schema.sql` — 290 lines — score 130 — primary path, path keyword: supabase
- `supabase/migrations/20260322000000_phase8b_dream_windows.sql` — 239 lines — score 130 — primary path, path keyword: supabase
- `supabase/migrations/20260405042406_auto_scaffold.sql` — 225 lines — score 130 — primary path, path keyword: supabase
- `supabase/server/serverClient.ts` — 191 lines — score 130 — primary path, path keyword: supabase
- `supabase/migrations/20260325100000_child_safety.sql` — 160 lines — score 130 — primary path, path keyword: supabase
- `supabase/migrations/20260405000001_dreamr_feed_registry.sql` — 149 lines — score 130 — primary path, path keyword: supabase
- `supabase/migrations/20260417000000_repurpose_nods_as_dream_docs.sql` — 133 lines — score 130 — primary path, path keyword: supabase
- `supabase/migrations/20260310000003_connector_accounts.sql` — 124 lines — score 130 — primary path, path keyword: supabase
- `supabase/migrations/20260403000001_pgvector_embeddings.sql` — 102 lines — score 130 — primary path, path keyword: supabase
- `supabase/migrations/20260426000200_build_memory_schema_gaps.sql` — 98 lines — score 130 — primary path, path keyword: supabase
- `supabase/migrations/20260319120000_connector_accounts_schema_reload.sql` — 89 lines — score 130 — primary path, path keyword: supabase

<!-- DREAMENGIN_PRODUCT_README:END -->
