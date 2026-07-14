# DREAMengin

<!-- DREAMENGIN_DOCUMENT_ALIGNMENT_GUARD_START -->
## DREAMengin Vision Alignment Guard

This README is generated from tracked repository evidence. It must not claim decorative controls, unreachable features, duplicate ownership, silent failure, or completion that the code cannot enforce.
<!-- DREAMENGIN_DOCUMENT_ALIGNMENT_GUARD_END -->

> A capability-driven creative operating system for code, games, music, media, simulations, identity, commerce, communication, and shared Dreams.

[![README Autosync](https://img.shields.io/badge/README-full%20repository%20autosync-blue)](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/.github/workflows/readme-autosync.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-%5E6.0.0-blue)](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/tsconfig.json)
[![Next.js](https://img.shields.io/badge/Next.js-%5E16.2.3-black)](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/next.config.mjs)

Generated from [`c10dced`](https://github.com/tmdapple09/DREAMenginree2/commit/c10dced47fa510b1b078f725e827136b4a12e35e) on `completedream`. Commit date: 2026-07-14T05:20:25Z.

## Table of Contents

- [1. Project Overview](#1-project-overview)
- [2. Getting Started](#2-getting-started)
- [3. Repository Map and Operating Notes](#3-repository-map-and-operating-notes)
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
- [Recent Changes](#recent-changes)
- [README Generation Contract](#readme-generation-contract)

## 1. Project Overview

DREAMengin is one connected web-native creative environment. Engins own domain capability, DayDreams expose user workspaces, and shared runtime state connects creation, media, communication, identity, commerce, customization, and collaboration.

### Live repository snapshot

| Metric | Current tracked value |
|---|---:|
| Tracked non-media files | 2217 |
| App pages | 113 |
| API route handlers | 125 |
| Component files | 325 |
| Engin files | 366 |
| Tests/specs | 239 |
| Supabase migrations | 60 |
| GitHub workflows | 93 |

### Detected technology

| Layer | Declared version |
|---|---|
| Package | `dreamengin@2.0.0` |
| Package manager | `pnpm@10.30.0` |
| Next.js | `^16.2.3` |
| React | `^19.2.0` |
| TypeScript | `^6.0.0` |
| Supabase | `^2.101.0` |
| Babylon.js | `^9.1.0` |
| Tailwind CSS | `^4.2.2` |

## 2. Getting Started

### Install and run

```bash
git clone https://github.com/tmdapple09/DREAMenginree2.git
cd DREAMenginree2
pnpm install --frozen-lockfile
pnpm dev
```

### Validate

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm preflight
```

### Environment variable names

Values are intentionally omitted. Copy the tracked example and keep secrets outside Git.

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=
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
NEXT_PUBLIC_APP_URL=
BACKEND_URL=
NEXT_PUBLIC_BACKEND_URL=
NEXT_PUBLIC_IPFS_GATEWAY=
IDARI_PASSWORD=
AI_CONFIRM_SECRET=
AI_CONFIRM_TOKEN_SECRET=
NCMEC_API_KEY=
NCMEC_ORG_ID=
LIVEKIT_WS_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
```

## 3. Repository Map and Operating Notes

### Major tracked roots

| Path | Tracked files |
|---|---:|
| [`engins/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/engins) | 366 |
| [`components/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/components) | 328 |
| [`app/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/app) | 278 |
| [`engine/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/engine) | 271 |
| [`tests/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/tests) | 246 |
| [`.github/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/.github) | 211 |
| [`docs/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/docs) | 98 |
| [`supabase/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/supabase) | 80 |
| [`scripts/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/scripts) | 57 |
| [`dreamr/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/dreamr) | 29 |
| [`dr-eams/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/dr-eams) | 26 |
| [`types/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/types) | 19 |
| [`dreamdmbar/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/dreamdmbar) | 17 |
| [`public/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/public) | 16 |
| [`research/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/research) | 16 |
| [`src/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/src) | 15 |
| [`hooks/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/hooks) | 14 |
| [`agents/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/agents) | 9 |
| [`build-memory/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/build-memory) | 9 |
| [`daydreams/`](https://github.com/tmdapple09/DREAMenginree2/tree/completedream/daydreams) | 9 |

### Representative application routes

- [`app/(internal)/idari-console/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/(internal)/idari-console/page.tsx)
- [`app/(internal)/idari-console/platform-errors/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/(internal)/idari-console/platform-errors/page.tsx)
- [`app/(internal)/idari-console/platform-health/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/(internal)/idari-console/platform-health/page.tsx)
- [`app/about/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/about/page.tsx)
- [`app/ads/create/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/create/page.tsx)
- [`app/ads/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/page.tsx)
- [`app/ads/slot/[id]/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/slot/%5Bid%5D/page.tsx)
- [`app/auth/reset-password/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/auth/reset-password/page.tsx)
- [`app/auth/update-password/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/auth/update-password/page.tsx)
- [`app/connectors/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/connectors/page.tsx)
- [`app/daydream/brand/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/brand/engin/page.tsx)
- [`app/daydream/brand/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/brand/page.tsx)
- [`app/daydream/code/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/code/engin/page.tsx)
- [`app/daydream/code/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/code/page.tsx)
- [`app/daydream/constellation/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/constellation/page.tsx)
- [`app/daydream/create/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/create/engin/page.tsx)
- [`app/daydream/create/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/create/page.tsx)
- [`app/daydream/forge/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/forge/page.tsx)
- [`app/daydream/game/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/game/page.tsx)
- [`app/daydream/games/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/games/engin/page.tsx)

### Governing and operational documents

- [`docs/AGENT_PLAYBOOK.md`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/docs/AGENT_PLAYBOOK.md)
- [`docs/GENERATION_LAW.md`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/docs/GENERATION_LAW.md)
- [`docs/CONSTITUTION.md`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/docs/CONSTITUTION.md)
- [`docs/NAMING_AUTHORITY.md`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/docs/NAMING_AUTHORITY.md)
- [`docs/FEATURE_STATUS.md`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/docs/FEATURE_STATUS.md)
- [`docs/LAW.md`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/docs/LAW.md)
- [`docs/ARCHITECTURE.md`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/docs/ARCHITECTURE.md)
- [`ARCHITECTURE.md`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/ARCHITECTURE.md)
- [`REPO_STATE.md`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/REPO_STATE.md)
- [`docs/HANDOFF.md`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/docs/HANDOFF.md)
- [`docs/BUGS.md`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/docs/BUGS.md)
- [`FILE_TREE.md`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/FILE_TREE.md)

### README ownership

The complete README is written by [`scripts/generate-readme.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/scripts/generate-readme.ts). Semantic product evidence is computed by [`scripts/readme-autosync.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/scripts/readme-autosync.ts). The workflow entry point is [`.github/workflows/readme-autosync.yml`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/.github/workflows/readme-autosync.yml).

Source snapshot: [`c10dced`](https://github.com/tmdapple09/DREAMenginree2/commit/c10dced47fa510b1b078f725e827136b4a12e35e) — chore(visual-schematic): auto-update file-level schematic [skip ci] [skip vercel].

<!-- DREAMENGIN_PRODUCT_README:START -->

## 4. Tech Stack & Monorepo Layout

### Plain English
This is the build shape of DREAMengin: the Next.js app, TypeScript source, package scripts, styling system, GitHub automation, Supabase setup, and major folders that make the product ship as one web-native system.

### What users experience
Users do not see the monorepo directly, but this layout decides whether the app loads, routes, stores data, renders screens, and keeps every Engin available from one product shell.

### Repo Evidence
Matched focused repo evidence: 75 files, about 33,721 readable source lines.

Behavior signals:
- auth — 43 file hits
- commerce — 39 file hits
- persistence — 35 file hits
- state — 24 file hits
- mobile touch — 24 file hits
- runtime — 23 file hits
- events — 22 file hits
- rendering — 22 file hits

Routes and APIs:
- /edit-profiledream ← [`app/edit-profiledream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/edit-profiledream/page.tsx)
- /login ← [`app/login/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/login/page.tsx)
- /join ← [`app/join/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/join/page.tsx)
- /discover ← [`app/discover/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/discover/page.tsx)
- /view-profile ← [`app/view-profile/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/view-profile/page.tsx)
- /ads ← [`app/ads/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/page.tsx)
- /lab ← [`app/lab/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/lab/page.tsx)
- /onboarding ← [`app/onboarding/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/onboarding/page.tsx)
- /settings ← [`app/settings/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/page.tsx)
- /marketplace ← [`app/marketplace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/marketplace/page.tsx)
- /engines ← [`app/engines/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/page.tsx)
- /shop ← [`app/shop/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/shop/page.tsx)
- /dreamr ← [`app/dreamr/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamr/page.tsx)
- /notes ← [`app/notes/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/notes/page.tsx)
- /homedream ← [`app/homedream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/homedream/page.tsx)
- /messages ← [`app/messages/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/page.tsx)

Components:
- EditProfileDreamPage — [`app/edit-profiledream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/edit-profiledream/page.tsx)
- LoginPageInner — [`app/login/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/login/page.tsx)
- LoginPage — [`app/login/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/login/page.tsx)
- JoinPage — [`app/join/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/join/page.tsx)
- DiscoverPage — [`app/discover/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/discover/page.tsx)
- ViewProfilePage — [`app/view-profile/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/view-profile/page.tsx)
- AdsPage — [`app/ads/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/page.tsx)
- VisibilityBadge — [`app/lab/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/lab/page.tsx)
- ProjectCard — [`app/lab/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/lab/page.tsx)
- LabPage — [`app/lab/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/lab/page.tsx)
- OnboardingPage — [`app/onboarding/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/onboarding/page.tsx)
- SettingsPage — [`app/settings/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/page.tsx)
- MarketplacePage — [`app/marketplace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/marketplace/page.tsx)
- EnginesHubPage — [`app/engines/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/page.tsx)

Hooks:
- useRouter — [`app/edit-profiledream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/edit-profiledream/page.tsx)
- useCallback — [`app/edit-profiledream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/edit-profiledream/page.tsx)
- useEffect — [`app/edit-profiledream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/edit-profiledream/page.tsx)
- useRef — [`app/edit-profiledream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/edit-profiledream/page.tsx)
- useState — [`app/edit-profiledream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/edit-profiledream/page.tsx)
- useRouter — [`app/login/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/login/page.tsx)
- useSearchParams — [`app/login/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/login/page.tsx)
- useEffect — [`app/login/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/login/page.tsx)
- useMemo — [`app/login/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/login/page.tsx)
- useState — [`app/login/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/login/page.tsx)
- useRouter — [`app/join/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/join/page.tsx)
- useEffect — [`app/join/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/join/page.tsx)
- useMemo — [`app/join/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/join/page.tsx)
- useState — [`app/join/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/join/page.tsx)

Exports that define public behavior:
- safeGetUser — [`supabase/client/safeGetUser.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/client/safeGetUser.ts)
- default export — next.config (next.config.mjs)
- SupabaseCookieStore — [`supabase/server/serverClient.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/server/serverClient.ts)
- createServerClientWithCookies — [`supabase/server/serverClient.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/server/serverClient.ts)
- createServerClient — [`supabase/server/serverClient.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/server/serverClient.ts)
- createServerClientWithCustomCookies — [`supabase/server/serverClient.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/server/serverClient.ts)
- createServiceClient — [`supabase/server/serverClient.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/server/serverClient.ts)
- getServerSiteOrigin — [`supabase/config.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/config.ts)
- buildAuthCallbackUrl — [`supabase/config.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/config.ts)
- getSupabaseAuthCallbackUrl — [`supabase/config.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/config.ts)
- createClient — [`supabase/client/client.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/client/client.ts)
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
- [`supabase/client/safeGetUser.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/client/safeGetUser.ts) — 40 lines — score 134 — primary path, path keyword: supabase
- [`next.config.mjs`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/next.config.mjs) — 207 lines — score 130 — primary path, path keyword: next
- [`supabase/server/serverClient.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/server/serverClient.ts) — 173 lines — score 130 — primary path, path keyword: supabase
- [`supabase/config.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/config.ts) — 55 lines — score 130 — primary path, path keyword: supabase
- [`supabase/client/client.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/client/client.ts) — 27 lines — score 126 — primary path, path keyword: supabase
- [`pnpm-workspace.yaml`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/pnpm-workspace.yaml) — 10 lines — score 122 — primary path, path keyword: pnpm
- [`app/edit-profiledream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/edit-profiledream/page.tsx) — 593 lines — score 116 — primary path
- [`app/login/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/login/page.tsx) — 377 lines — score 116 — primary path
- [`app/join/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/join/page.tsx) — 374 lines — score 116 — primary path
- [`app/discover/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/discover/page.tsx) — 360 lines — score 116 — primary path
- [`app/view-profile/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/view-profile/page.tsx) — 351 lines — score 116 — primary path
- [`app/ads/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/page.tsx) — 267 lines — score 116 — primary path
- [`app/lab/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/lab/page.tsx) — 235 lines — score 116 — primary path
- [`app/onboarding/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/onboarding/page.tsx) — 210 lines — score 116 — primary path
- [`app/settings/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/page.tsx) — 172 lines — score 116 — primary path
- [`app/marketplace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/marketplace/page.tsx) — 137 lines — score 116 — primary path
- [`app/engines/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/page.tsx) — 130 lines — score 116 — primary path
- [`app/shop/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/shop/page.tsx) — 130 lines — score 116 — primary path
- [`package.json`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/package.json) — 116 lines — score 116 — primary path
- [`app/dreamr/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamr/page.tsx) — 81 lines — score 116 — primary path
- [`app/notes/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/notes/page.tsx) — 81 lines — score 116 — primary path
- [`app/homedream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/homedream/page.tsx) — 75 lines — score 116 — primary path
- [`app/messages/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/page.tsx) — 69 lines — score 116 — primary path
- [`app/connectors/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/connectors/page.tsx) — 65 lines — score 116 — primary path
- [`app/feed-settings/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/feed-settings/page.tsx) — 19 lines — score 116 — primary path
- [`engins/engin.CodeEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.CodeEngin.tsx) — 1286 lines — score 112 — primary path
- [`engins/engin.StarMakerEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.StarMakerEngin.tsx) — 4280 lines — score 108 — primary path
- [`engins/engin.GameEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.GameEngin.tsx) — 2925 lines — score 108 — primary path
- [`engins/engin.LabEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.LabEngin.tsx) — 1968 lines — score 108 — primary path
- [`engins/dream.ForgeEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/dream.ForgeEngin.tsx) — 1916 lines — score 108 — primary path
- [`engins/engin.BrandingEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.BrandingEngin.tsx) — 1246 lines — score 108 — primary path
- [`.github/workflows/readme-autosync.yml`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/.github/workflows/readme-autosync.yml) — 170 lines — score 108 — primary path
- [`.github/workflows/preflight.yml`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/.github/workflows/preflight.yml) — 137 lines — score 108 — primary path
- [`.github/workflows/codeql.yml`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/.github/workflows/codeql.yml) — 104 lines — score 108 — primary path

Supporting files:
- [`.github/workflows/vercel-deploy.yml`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/.github/workflows/vercel-deploy.yml) — 101 lines — score 108 — primary path
- [`eslint.config.mjs`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/eslint.config.mjs) — 96 lines — score 108 — primary path
- [`.github/workflows/export-src-only.yml`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/.github/workflows/export-src-only.yml) — 74 lines — score 108 — primary path
- [`engins/contentengin/AssetViewport.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/contentengin/AssetViewport.tsx) — 747 lines — score 104 — primary path
- [`engins/renderengin/RenderEnginViewport.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/renderengin/RenderEnginViewport.tsx) — 547 lines — score 104 — primary path
- [`engins/dream.QuantumCircuitCanvas.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/dream.QuantumCircuitCanvas.tsx) — 497 lines — score 104 — primary path
- [`engine/runtime/index.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/index.ts) — 478 lines — score 104 — primary path
- [`components/runtime/dream.RuntimeView.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.RuntimeView.tsx) — 439 lines — score 104 — primary path
- [`components/runtime/dream.DualRuntimeContainer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.DualRuntimeContainer.tsx) — 235 lines — score 104 — primary path
- [`engine/runtime/moduleRegistry.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/moduleRegistry.ts) — 143 lines — score 104 — primary path
- [`components/providers/dream.ThemeProvider.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/providers/dream.ThemeProvider.tsx) — 91 lines — score 104 — primary path
- [`engins/contentengin/ImplicitAssetWorkspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/contentengin/ImplicitAssetWorkspace.tsx) — 87 lines — score 104 — primary path
- [`engins/autoopen/dream.AutoOpenGameEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/autoopen/dream.AutoOpenGameEngin.tsx) — 39 lines — score 104 — primary path
- [`tsconfig.app.json`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/tsconfig.app.json) — 32 lines — score 104 — primary path
- [`components/providers/dream.GodTierProvider.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/providers/dream.GodTierProvider.tsx) — 31 lines — score 104 — primary path
- [`tsconfig.server.json`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/tsconfig.server.json) — 29 lines — score 104 — primary path
- [`tsconfig.worker.json`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/tsconfig.worker.json) — 28 lines — score 104 — primary path
- [`tsconfig.games.json`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/tsconfig.games.json) — 27 lines — score 104 — primary path
- [`tsconfig.test.json`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/tsconfig.test.json) — 26 lines — score 104 — primary path
- [`styles/globals.css`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/styles/globals.css) — 5181 lines — score 100 — primary path
- [`engins/gameengin/GameRuntime.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/GameRuntime.tsx) — 500 lines — score 100 — primary path
- [`components/runtime/dream.shell.RuntimeShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.shell.RuntimeShell.tsx) — 322 lines — score 100 — primary path
- [`styles/home-dream.css`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/styles/home-dream.css) — 235 lines — score 100 — primary path
- [`tailwind.config.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/tailwind.config.ts) — 99 lines — score 100 — primary path
- [`styles/view-transitions.css`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/styles/view-transitions.css) — 49 lines — score 100 — primary path
- [`components/providers/dream.AppSurfaceShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/providers/dream.AppSurfaceShell.tsx) — 45 lines — score 100 — primary path
- [`styles/theme.css`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/styles/theme.css) — 34 lines — score 100 — primary path
- [`tsconfig.base.json`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/tsconfig.base.json) — 32 lines — score 100 — primary path
- [`styles/dream-shell.css`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/styles/dream-shell.css) — 24 lines — score 100 — primary path
- [`tsconfig.gamesengin.json`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/tsconfig.gamesengin.json) — 19 lines — score 100 — primary path
## 5. The Engins and DayDreams

### Plain English
Engins are the production systems; DayDreams are the user-facing creative spaces around them. This section connects engine code, pages, panels, shells, and components that let users create code, games, music, simulations, media, and brand work.

### What users experience
A user experiences this as switching into a real studio surface: CodeEngin, GameEngin, ContentEngin, LabEngin, StarMakerEngin, BrandingEngin, ForgeEngin, and their DayDream wrappers.

### Repo Evidence
Matched focused repo evidence: 110 files, about 41,673 readable source lines.

Behavior signals:
- auth — 61 file hits
- state — 57 file hits
- commerce — 51 file hits
- persistence — 47 file hits
- runtime — 46 file hits
- mobile touch — 40 file hits
- rendering — 37 file hits
- events — 24 file hits

Routes and APIs:
- /daydream/games/engin ← [`app/daydream/games/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/games/engin/page.tsx)
- /daydream/brand/engin ← [`app/daydream/brand/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/brand/engin/page.tsx)
- /daydream/code/engin ← [`app/daydream/code/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/code/engin/page.tsx)
- /daydream/create/engin ← [`app/daydream/create/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/create/engin/page.tsx)
- /daydream/lab/engin ← [`app/daydream/lab/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/lab/engin/page.tsx)
- /daydream/music/engin ← [`app/daydream/music/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/music/engin/page.tsx)
- /daydream/code ← [`app/daydream/code/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/code/page.tsx)
- /daydream/lab ← [`app/daydream/lab/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/lab/page.tsx)
- /daydream/games ← [`app/daydream/games/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/games/page.tsx)
- /daydream/create ← [`app/daydream/create/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/create/page.tsx)
- /daydream/music ← [`app/daydream/music/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/music/page.tsx)
- /daydream/brand ← [`app/daydream/brand/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/brand/page.tsx)
- /daydream/forge ← [`app/daydream/forge/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/forge/page.tsx)
- /daydream/lab/portfolio ← [`app/daydream/lab/portfolio/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/lab/portfolio/page.tsx)
- /engines/music/studio ← [`app/engines/music/studio/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/music/studio/page.tsx)
- /daydream/music/upload ← [`app/daydream/music/upload/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/music/upload/page.tsx)

Components:
- GamesEnginRedirectPage — [`app/daydream/games/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/games/engin/page.tsx)
- BrandEnginRedirectPage — [`app/daydream/brand/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/brand/engin/page.tsx)
- CodeEnginRedirectPage — [`app/daydream/code/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/code/engin/page.tsx)
- CreateEnginRedirectPage — [`app/daydream/create/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/create/engin/page.tsx)
- LabEnginRedirectPage — [`app/daydream/lab/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/lab/engin/page.tsx)
- MusicEnginRedirectPage — [`app/daydream/music/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/music/engin/page.tsx)
- CodeDaydreamPage — [`app/daydream/code/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/code/page.tsx)
- LabDaydreamPage — [`app/daydream/lab/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/lab/page.tsx)
- GamesDaydreamPage — [`app/daydream/games/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/games/page.tsx)
- CreateDaydreamPage — [`app/daydream/create/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/create/page.tsx)
- MusicArtistHubPage — [`app/daydream/music/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/music/page.tsx)
- BrandDaydreamPage — [`app/daydream/brand/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/brand/page.tsx)
- ForgeDaydreamPage — [`app/daydream/forge/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/forge/page.tsx)
- OptimizeroPage — [`app/daydream/lab/portfolio/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/lab/portfolio/page.tsx)

Hooks:
- useSharedDream — [`engins/engin.StarMakerEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.StarMakerEngin.tsx)
- useDaydreamPersistence — [`engins/engin.StarMakerEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.StarMakerEngin.tsx)
- useDaydreamState — [`engins/engin.StarMakerEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.StarMakerEngin.tsx)
- useStarMakerEnginRuntime — [`engins/engin.StarMakerEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.StarMakerEngin.tsx)
- useEnginWorkflow — [`engins/engin.StarMakerEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.StarMakerEngin.tsx)
- useForgeActivity — [`engins/engin.StarMakerEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.StarMakerEngin.tsx)
- useEnginCoopSync — [`engins/engin.StarMakerEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.StarMakerEngin.tsx)
- useCallback — [`engins/engin.StarMakerEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.StarMakerEngin.tsx)
- useEffect — [`engins/engin.StarMakerEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.StarMakerEngin.tsx)
- useMemo — [`engins/engin.StarMakerEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.StarMakerEngin.tsx)
- useRef — [`engins/engin.StarMakerEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.StarMakerEngin.tsx)
- useState — [`engins/engin.StarMakerEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.StarMakerEngin.tsx)
- useDaydreamPersistence — [`engins/engin.LabEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.LabEngin.tsx)
- useLabEnginRuntime — [`engins/engin.LabEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.LabEngin.tsx)

Exports that define public behavior:
- default export — page (app/daydream/games/engin/page.tsx)
- default export — page (app/daydream/brand/engin/page.tsx)
- default export — page (app/daydream/code/engin/page.tsx)
- default export — page (app/daydream/create/engin/page.tsx)
- default export — page (app/daydream/lab/engin/page.tsx)
- default export — page (app/daydream/music/engin/page.tsx)
- metadata — [`app/daydream/code/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/code/page.tsx)
- default export — page (app/daydream/code/page.tsx)
- metadata — [`app/daydream/lab/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/lab/page.tsx)
- default export — page (app/daydream/lab/page.tsx)
- metadata — [`app/daydream/games/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/games/page.tsx)
- default export — page (app/daydream/games/page.tsx)
- metadata — [`app/daydream/create/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/create/page.tsx)
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
- [`app/daydream/games/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/games/engin/page.tsx) — 30 lines — score 152 — primary path, path keyword: engin
- [`app/daydream/brand/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/brand/engin/page.tsx) — 11 lines — score 152 — primary path, path keyword: engin
- [`app/daydream/code/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/code/engin/page.tsx) — 11 lines — score 152 — primary path, path keyword: engin
- [`app/daydream/create/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/create/engin/page.tsx) — 11 lines — score 152 — primary path, path keyword: engin
- [`app/daydream/lab/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/lab/engin/page.tsx) — 11 lines — score 152 — primary path, path keyword: engin
- [`app/daydream/music/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/music/engin/page.tsx) — 11 lines — score 152 — primary path, path keyword: engin
- [`app/daydream/code/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/code/page.tsx) — 1118 lines — score 142 — primary path, path keyword: daydream
- [`app/daydream/lab/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/lab/page.tsx) — 1062 lines — score 142 — primary path, path keyword: daydream
- [`app/daydream/games/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/games/page.tsx) — 365 lines — score 142 — primary path, path keyword: daydream
- [`app/daydream/create/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/create/page.tsx) — 107 lines — score 142 — primary path, path keyword: daydream
- [`app/daydream/music/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/music/page.tsx) — 87 lines — score 142 — primary path, path keyword: daydream
- [`app/daydream/brand/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/brand/page.tsx) — 62 lines — score 142 — primary path, path keyword: daydream
- [`app/daydream/forge/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/forge/page.tsx) — 348 lines — score 138 — primary path, path keyword: daydream
- [`app/daydream/lab/portfolio/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/lab/portfolio/page.tsx) — 189 lines — score 138 — primary path, path keyword: daydream
- [`app/engines/music/studio/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/music/studio/page.tsx) — 40 lines — score 138 — primary path, path keyword: studio
- [`engins/engin.StarMakerEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.StarMakerEngin.tsx) — 4280 lines — score 134 — primary path, path keyword: engin
- [`engins/engin.LabEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.LabEngin.tsx) — 1968 lines — score 134 — primary path, path keyword: engin
- [`engins/engin.CodeEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.CodeEngin.tsx) — 1286 lines — score 134 — primary path, path keyword: engin
- [`app/daydream/music/upload/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/music/upload/page.tsx) — 210 lines — score 134 — primary path, path keyword: daydream
- [`engins/engin.GameEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.GameEngin.tsx) — 2925 lines — score 130 — primary path, path keyword: engin
- [`components/daydream/dream.CodeDreamIDE.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.CodeDreamIDE.tsx) — 1695 lines — score 130 — primary path, path keyword: daydream
- [`engins/engin.BrandingEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.BrandingEngin.tsx) — 1246 lines — score 130 — primary path, path keyword: engin
- [`components/daydream/dream.shell.DaydreamShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.shell.DaydreamShell.tsx) — 451 lines — score 130 — primary path, path keyword: daydream
- [`app/daydream/game/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/game/page.tsx) — 31 lines — score 130 — primary path, path keyword: daydream
- [`components/daydream/dreamsurface.daydream.BrandDaydream.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dreamsurface.daydream.BrandDaydream.tsx) — 657 lines — score 126 — primary path, path keyword: daydream
- [`components/daydream/dream.constellationmap.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.constellationmap.tsx) — 346 lines — score 126 — primary path, path keyword: daydream
- [`app/daydream/game/dream.shell.ImmersiveGameShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/game/dream.shell.ImmersiveGameShell.tsx) — 310 lines — score 126 — primary path, path keyword: daydream
- [`components/daydream/dream.StandaloneEnginSurface.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.StandaloneEnginSurface.tsx) — 38 lines — score 126 — primary path, path keyword: daydream
- [`components/daydream/dream.LabDreamIDE.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.LabDreamIDE.tsx) — 1281 lines — score 122 — primary path, path keyword: daydream
- [`components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx) — 661 lines — score 122 — primary path, path keyword: daydream
- [`components/daydream/dream.NGNEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.NGNEngin.tsx) — 586 lines — score 122 — primary path, path keyword: daydream
- [`components/daydream/starmaker/dream.panel.SessionViewPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/starmaker/dream.panel.SessionViewPanel.tsx) — 444 lines — score 122 — primary path, path keyword: daydream
- [`components/daydream/dream.JourneyTrail.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.JourneyTrail.tsx) — 367 lines — score 122 — primary path, path keyword: daydream
- [`components/daydream/starmaker/dream.panel.PianoRollPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/starmaker/dream.panel.PianoRollPanel.tsx) — 366 lines — score 122 — primary path, path keyword: daydream

Supporting files:
- [`components/daydream/dream.DiffViewer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.DiffViewer.tsx) — 342 lines — score 122 — primary path, path keyword: daydream
- [`components/daydream/starmaker/dream.panel.CompingPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/starmaker/dream.panel.CompingPanel.tsx) — 337 lines — score 122 — primary path, path keyword: daydream
- [`components/daydream/dream.OpenDaydreamSideBButton.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.OpenDaydreamSideBButton.tsx) — 19 lines — score 122 — primary path, path keyword: daydream
- [`app/daydream/game/dream.GamePageClient.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/game/dream.GamePageClient.tsx) — 5 lines — score 122 — primary path, path keyword: daydream
- [`engins/engin.ContentEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.ContentEngin.tsx) — 4 lines — score 122 — primary path, path keyword: engin
- [`app/engines/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/page.tsx) — 130 lines — score 116 — primary path
- [`app/engines/music/arrange/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/music/arrange/page.tsx) — 40 lines — score 116 — primary path
- [`app/engines/music/library/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/music/library/page.tsx) — 40 lines — score 116 — primary path
- [`daydreams/lab/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/daydreams/lab/page.tsx) — 486 lines — score 112 — primary path
- [`daydreams/music/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/daydreams/music/page.tsx) — 393 lines — score 112 — primary path
- [`daydreams/games/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/daydreams/games/page.tsx) — 356 lines — score 112 — primary path
- [`daydreams/brand/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/daydreams/brand/page.tsx) — 57 lines — score 112 — primary path
- [`app/engines/games/builder/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/games/builder/page.tsx) — 51 lines — score 112 — primary path
- [`app/engines/games/library/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/games/library/page.tsx) — 51 lines — score 112 — primary path
- [`app/engines/games/scores/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/games/scores/page.tsx) — 51 lines — score 112 — primary path
- [`app/engines/code/notebook/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/code/notebook/page.tsx) — 42 lines — score 112 — primary path
- [`app/engines/code/ai/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/code/ai/page.tsx) — 32 lines — score 112 — primary path
- [`app/engines/code/projects/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/code/projects/page.tsx) — 32 lines — score 112 — primary path
- [`components/engines/music/dream.MusicEnginApp.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/engines/music/dream.MusicEnginApp.tsx) — 25 lines — score 112 — primary path
- [`engins/renderengin/runtimeRegistration.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/renderengin/runtimeRegistration.ts) — 20 lines — score 112 — primary path
- [`components/engines/create/dream.CreateEnginApp.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/engines/create/dream.CreateEnginApp.tsx) — 5 lines — score 112 — primary path
- [`engins/gameengin/index.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/index.ts) — 3917 lines — score 108 — primary path
- [`engins/dream.ForgeEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/dream.ForgeEngin.tsx) — 1916 lines — score 108 — primary path
- [`daydreams/code/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/daydreams/code/page.tsx) — 545 lines — score 108 — primary path
- [`daydreams/create/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/daydreams/create/page.tsx) — 456 lines — score 108 — primary path
- [`engins/forgeengin/forge/forgeRegistry.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/forgeengin/forge/forgeRegistry.ts) — 401 lines — score 108 — primary path
- [`engins/rulesets/code/codeEnginRuleSet.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/code/codeEnginRuleSet.ts) — 389 lines — score 108 — primary path
- [`engins/renderengin/core.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/renderengin/core.ts) — 266 lines — score 108 — primary path
- [`engins/renderengin/serviceRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/renderengin/serviceRuntime.ts) — 233 lines — score 108 — primary path
- [`components/engines/shared/dream.shell.EnginAppShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/engines/shared/dream.shell.EnginAppShell.tsx) — 104 lines — score 108 — primary path
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
Matched focused repo evidence: 26 files, about 6,602 readable source lines.

Behavior signals:
- runtime — 16 file hits
- state — 12 file hits
- events — 11 file hits
- commerce — 11 file hits
- auth — 6 file hits
- persistence — 5 file hits
- rendering — 5 file hits
- mobile touch — 4 file hits

Routes and APIs:
- /dreamdmbar/dualruntime ← [`app/dreamdmbar/dualruntime/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dualruntime/page.tsx)

Components:
- DreamDMBarDualRuntimePage — [`app/dreamdmbar/dualruntime/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dualruntime/page.tsx)
- DualRuntimeContainer — [`components/runtime/dream.DualRuntimeContainer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.DualRuntimeContainer.tsx)
- RuntimeView — [`components/runtime/dream.RuntimeView.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.RuntimeView.tsx)
- RuntimeShell — [`components/runtime/dream.shell.RuntimeShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.shell.RuntimeShell.tsx)

Hooks:
- useDreamSystem — [`app/dreamdmbar/dualruntime/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dualruntime/page.tsx)
- useEffect — [`app/dreamdmbar/dualruntime/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dualruntime/page.tsx)
- useState — [`app/dreamdmbar/dualruntime/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dualruntime/page.tsx)
- useCallback — [`components/runtime/dream.DualRuntimeContainer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.DualRuntimeContainer.tsx)
- useContext — [`components/runtime/dream.DualRuntimeContainer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.DualRuntimeContainer.tsx)
- useEffect — [`components/runtime/dream.DualRuntimeContainer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.DualRuntimeContainer.tsx)
- useMemo — [`components/runtime/dream.DualRuntimeContainer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.DualRuntimeContainer.tsx)
- useRef — [`components/runtime/dream.DualRuntimeContainer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.DualRuntimeContainer.tsx)
- useState — [`components/runtime/dream.DualRuntimeContainer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.DualRuntimeContainer.tsx)
- useDualRuntime — [`components/runtime/dream.DualRuntimeContainer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.DualRuntimeContainer.tsx)
- useCallback — [`components/runtime/dream.RuntimeView.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.RuntimeView.tsx)
- useEffect — [`components/runtime/dream.RuntimeView.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.RuntimeView.tsx)
- useMemo — [`components/runtime/dream.RuntimeView.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.RuntimeView.tsx)
- useState — [`components/runtime/dream.RuntimeView.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.RuntimeView.tsx)

Exports that define public behavior:
- default export — page (app/dreamdmbar/dualruntime/page.tsx)
- RuntimeWorld — [`engine/runtime/dualRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dualRuntime.ts)
- DualRuntimeState — [`engine/runtime/dualRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dualRuntime.ts)
- TorusDomain — [`engine/runtime/dualRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dualRuntime.ts)
- setRuntimeWorld — [`engine/runtime/dualRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dualRuntime.ts)
- swapDominantRuntime — [`engine/runtime/dualRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dualRuntime.ts)
- makeHomeActiveTop — [`engine/runtime/dualRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dualRuntime.ts)
- makeHomeDreamSpaceActive — [`engine/runtime/dualRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dualRuntime.ts)
- makeDreamSpaceActiveSurface — [`engine/runtime/dualRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dualRuntime.ts)
- isHomeActiveTop — [`engine/runtime/dualRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dualRuntime.ts)
- worldsEqual — [`engine/runtime/dualRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dualRuntime.ts)
- torusFocusKey — [`engine/runtime/dualRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dualRuntime.ts)
- moveTorus — [`engine/runtime/dualRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dualRuntime.ts)
- DualRuntimeChannel — [`engine/runtime/dualRuntimeBridge.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dualRuntimeBridge.ts)

Import/export connections:
- components/shared-dream/dream.SharedDreamRuntime
- dreamdmbar/runtime/DreamSystemContext
- react
- engine/identity/canonical-names
- components/panels/panelTypes
- engine/runtime/madMaxiSnapshotBridge
- events
- engine/runtime/dualRuntime
- engine/runtime/iEngine
- engine/offline/offlineCache
- app/dreamdmbar/_components/HomeDreamRegion
- components/dreams/dreamsurface.dreamspace
- components/runtime/dream.shell.RuntimeShell
- components/spatial/dream.shell.EnhancedSpatialShell

### Matched Files

Primary files:
- [`app/dreamdmbar/dualruntime/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dualruntime/page.tsx) — 82 lines — score 134 — primary path, path keyword: dualruntime
- [`engine/runtime/dualRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dualRuntime.ts) — 182 lines — score 126 — primary path, path keyword: dualruntime
- [`engine/runtime/dualRuntimeBridge.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dualRuntimeBridge.ts) — 891 lines — score 112 — primary path
- [`components/runtime/dream.DualRuntimeContainer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.DualRuntimeContainer.tsx) — 235 lines — score 112 — primary path
- [`components/runtime/dream.RuntimeView.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.RuntimeView.tsx) — 439 lines — score 108 — primary path
- [`engine/runtime/useDualRuntimePersistence.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/useDualRuntimePersistence.ts) — 163 lines — score 108 — primary path
- [`components/runtime/dream.shell.RuntimeShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.shell.RuntimeShell.tsx) — 322 lines — score 100 — primary path
- [`engine/runtime/useDualRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/useDualRuntime.ts) — 135 lines — score 100 — primary path
- [`engine/vm/snapshot.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/vm/snapshot.ts) — 321 lines — score 81 — supporting path, path keyword: snapshot
- [`engine/vm/dual-runtime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/vm/dual-runtime.ts) — 240 lines — score 81 — supporting path, path keyword: dual runtime
- [`engine/runtime/iEngine.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/iEngine.ts) — 357 lines — score 67 — supporting path
- [`engine/vm/README.md`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/vm/README.md) — 275 lines — score 67 — supporting path
- [`engine/vm/index.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/vm/index.ts) — 43 lines — score 67 — supporting path
- [`engine/runtime/dreamOSBus.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dreamOSBus.ts) — 805 lines — score 63 — supporting path
- [`engine/runtime/snapshotFingerprint.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/snapshotFingerprint.ts) — 114 lines — score 59 — supporting path
- [`engine/vm/wasmGpuVM.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/vm/wasmGpuVM.ts) — 487 lines — score 55 — supporting path
- [`engine/vm/types.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/vm/types.ts) — 291 lines — score 55 — supporting path
- [`engine/vm/bufferManager.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/vm/bufferManager.ts) — 282 lines — score 55 — supporting path
- [`engine/vm/pipelineCache.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/vm/pipelineCache.ts) — 249 lines — score 55 — supporting path
- [`engine/vm/inter-vm-messaging.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/vm/inter-vm-messaging.ts) — 192 lines — score 55 — supporting path
- [`engine/vm/wasm-features.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/vm/wasm-features.ts) — 126 lines — score 55 — supporting path
- [`engine/vm/security.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/vm/security.ts) — 109 lines — score 55 — supporting path
- [`engine/vm/resource-quota.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/vm/resource-quota.ts) — 105 lines — score 55 — supporting path
- [`engine/runtime/madMaxiSnapshotBridge.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/madMaxiSnapshotBridge.ts) — 66 lines — score 55 — supporting path
- [`engine/vm/bus-events.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/vm/bus-events.ts) — 48 lines — score 55 — supporting path
- [`engine/vm/dualVMCoordinator.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/vm/dualVMCoordinator.ts) — 43 lines — score 55 — supporting path

Supporting files:
- None found.
## 7. Shared Dreams

### Plain English
Shared Dreams are the collaboration and publishing layer for Dreams that can be saved, shown, shared, synchronized, or experienced by more than one person.

### What users experience
Users feel this when a Dream becomes something social: visible posts, shared sessions, public/private access, saved creative objects, and collaboration signals.

### Repo Evidence
Matched focused repo evidence: 21 files, about 4,143 readable source lines.

Behavior signals:
- auth — 17 file hits
- persistence — 15 file hits
- state — 11 file hits
- commerce — 11 file hits
- events — 8 file hits
- mobile touch — 5 file hits
- runtime — 4 file hits
- rendering — 2 file hits

Routes and APIs:
- GET|PATCH /api/shared-dream/sessions/[id] ← [`app/api/shared-dream/sessions/[id]/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/shared-dream/sessions/%5Bid%5D/route.ts)
- GET|POST /api/shared-dream/sessions ← [`app/api/shared-dream/sessions/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/shared-dream/sessions/route.ts)
- GET|POST /api/dreams/feed ← [`app/api/dreams/feed/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreams/feed/route.ts)
- GET /api/dreams/instances ← [`app/api/dreams/instances/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreams/instances/route.ts)
- POST /api/dreams/transfer ← [`app/api/dreams/transfer/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreams/transfer/route.ts)

Components:
- SharedDreamProvider — [`components/shared-dream/dream.SharedDreamProvider.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamProvider.tsx)
- SharedDreamRuntimeInner — [`components/shared-dream/dream.SharedDreamRuntime.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamRuntime.tsx)
- SharedDreamRuntime — [`components/shared-dream/dream.SharedDreamRuntime.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamRuntime.tsx)
- InviteFlow — [`components/shared-dream/dream.InviteFlow.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.InviteFlow.tsx)
- SharedDreamCanvas — [`components/shared-dream/dream.SharedDreamCanvas.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamCanvas.tsx)
- SharedDreamShell — [`components/dreams/dream.shell.SharedDreamShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.shell.SharedDreamShell.tsx)

Hooks:
- useSharedDreamSession — [`engine/sharedDream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream.ts)
- useCallback — [`components/shared-dream/dream.SharedDreamProvider.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamProvider.tsx)
- useContext — [`components/shared-dream/dream.SharedDreamProvider.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamProvider.tsx)
- useEffect — [`components/shared-dream/dream.SharedDreamProvider.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamProvider.tsx)
- useRef — [`components/shared-dream/dream.SharedDreamProvider.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamProvider.tsx)
- useState — [`components/shared-dream/dream.SharedDreamProvider.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamProvider.tsx)
- useSharedDream — [`components/shared-dream/dream.SharedDreamProvider.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamProvider.tsx)
- useSharedDreamSession — [`components/shared-dream/dream.SharedDreamRuntime.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamRuntime.tsx)
- useCallback — [`components/shared-dream/dream.SharedDreamRuntime.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamRuntime.tsx)
- useEffect — [`components/shared-dream/dream.SharedDreamRuntime.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamRuntime.tsx)
- useState — [`components/shared-dream/dream.SharedDreamRuntime.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamRuntime.tsx)
- useRef — [`components/shared-dream/dream.SharedDreamRuntime.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamRuntime.tsx)
- useCallback — [`engine/sharedDream/useSharedDreamSession.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream/useSharedDreamSession.ts)
- useEffect — [`engine/sharedDream/useSharedDreamSession.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream/useSharedDreamSession.ts)

Exports that define public behavior:
- SharedDreamSession — [`engine/sharedDream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream.ts)
- DreamEventType — [`engine/sharedDream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream.ts)
- DreamBroadcastPayload — [`engine/sharedDream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream.ts)
- DreamEventHandler — [`engine/sharedDream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream.ts)
- DreamSessionRole — [`engine/sharedDream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream.ts)
- DreamSessionMode — [`engine/sharedDream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream.ts)
- DreamPresenceUpdate — [`engine/sharedDream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream.ts)
- SharedDreamSessionOptions — [`engine/sharedDream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream.ts)
- createSharedDreamSession — [`engine/sharedDream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream.ts)
- joinSharedDreamSession — [`engine/sharedDream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream.ts)
- broadcastCursorPosition — [`engine/sharedDream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream.ts)
- broadcastEdit — [`engine/sharedDream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream.ts)
- broadcastStatePatch — [`engine/sharedDream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream.ts)
- broadcastDataPacket — [`engine/sharedDream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream.ts)

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
- [`engine/sharedDream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream.ts) — 163 lines — score 138 — primary path, path keyword: sharedDream
- [`components/shared-dream/dream.SharedDreamProvider.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamProvider.tsx) — 259 lines — score 134 — primary path, path keyword: shared dream
- [`app/api/shared-dream/sessions/[id]/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/shared-dream/sessions/%5Bid%5D/route.ts) — 134 lines — score 134 — primary path, path keyword: shared dream
- [`supabase/migrations/20260516000300_shared_dream_sessions.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260516000300_shared_dream_sessions.sql) — 134 lines — score 134 — primary path, path keyword: shared dream
- [`app/api/shared-dream/sessions/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/shared-dream/sessions/route.ts) — 92 lines — score 134 — primary path, path keyword: shared dream
- [`components/shared-dream/dream.SharedDreamRuntime.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamRuntime.tsx) — 402 lines — score 130 — primary path, path keyword: shared dream
- [`engine/sharedDream/useSharedDreamSession.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/sharedDream/useSharedDreamSession.ts) — 278 lines — score 126 — primary path, path keyword: sharedDream
- [`components/shared-dream/dream.InviteFlow.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.InviteFlow.tsx) — 127 lines — score 126 — primary path, path keyword: shared dream
- [`components/shared-dream/dream.SharedDreamCanvas.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/dream.SharedDreamCanvas.tsx) — 72 lines — score 122 — primary path, path keyword: shared dream
- [`components/shared-dream/index.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/shared-dream/index.ts) — 18 lines — score 122 — primary path, path keyword: shared dream
- [`hooks/useSharedDream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/hooks/useSharedDream.ts) — 270 lines — score 116 — primary path
- [`components/dreams/dream.shell.SharedDreamShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.shell.SharedDreamShell.tsx) — 389 lines — score 108 — primary path
- [`app/api/dreams/feed/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreams/feed/route.ts) — 152 lines — score 108 — primary path
- [`app/api/dreams/instances/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreams/instances/route.ts) — 113 lines — score 108 — primary path
- [`app/api/dreams/transfer/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreams/transfer/route.ts) — 65 lines — score 108 — primary path
- [`daydreams/shared/useDaydreamPersistence.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/daydreams/shared/useDaydreamPersistence.ts) — 98 lines — score 100 — primary path
- [`daydreams/shared/useDaydreamState.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/daydreams/shared/useDaydreamState.ts) — 81 lines — score 100 — primary path
- [`engine/collaboration/index.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/collaboration/index.ts) — 811 lines — score 89 — supporting path, path keyword: collaboration
- [`supabase/migrations/20260322000000_phase8b_dream_windows.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260322000000_phase8b_dream_windows.sql) — 239 lines — score 59 — supporting path
- [`engine/runtime/useSharedEnginChannel.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/useSharedEnginChannel.ts) — 133 lines — score 55 — supporting path
- [`supabase/migrations/20260325000000_phase8f_daydream_network.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260325000000_phase8f_daydream_network.sql) — 113 lines — score 55 — supporting path

Supporting files:
- None found.
## 8. DreamR — Human Media

### Plain English
DreamR is the human media layer: feed, discovery, profile, posts, creator identity, and the browsing surfaces where Dreams become media instead of private project files.

### What users experience
Users experience DreamR as the social/media side of DREAMengin: scrolling, viewing people, opening Dreams, editing identity, and discovering what others make.

### Repo Evidence
Matched focused repo evidence: 55 files, about 14,064 readable source lines.

Behavior signals:
- auth — 28 file hits
- commerce — 22 file hits
- mobile touch — 21 file hits
- persistence — 18 file hits
- state — 16 file hits
- runtime — 14 file hits
- events — 9 file hits
- rendering — 3 file hits

Routes and APIs:
- GET /api/dreamr/feed ← [`app/api/dreamr/feed/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreamr/feed/route.ts)
- /dreamr ← [`app/dreamr/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamr/page.tsx)
- GET /api/dreamr/suggested ← [`app/api/dreamr/suggested/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreamr/suggested/route.ts)
- POST /api/dreamr/tally ← [`app/api/dreamr/tally/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreamr/tally/route.ts)
- GET /api/feed ← [`app/api/feed/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/feed/route.ts)
- /profile/[handle] ← [`app/profile/[handle]/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/profile/%5Bhandle%5D/page.tsx)
- /view-profile ← [`app/view-profile/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/view-profile/page.tsx)
- /profile ← [`app/profile/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/profile/page.tsx)
- /edit-profiledream ← [`app/edit-profiledream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/edit-profiledream/page.tsx)

Components:
- DreamRPage — [`app/dreamr/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamr/page.tsx)
- TrendIcon — [`app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx)
- CreateTab — [`app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx)
- PlatformTab — [`app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx)
- SignalTab — [`app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx)
- JourneyTab — [`app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx)
- DreamRSection — [`app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx)
- SocialBadge — [`components/dreamr/dream.panel.DreamRCreatorPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreamr/dream.panel.DreamRCreatorPanel.tsx)
- DreamRCreatorPanel — [`components/dreamr/dream.panel.DreamRCreatorPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreamr/dream.panel.DreamRCreatorPanel.tsx)
- ActionBtn — [`dreamr/components/dreamrfeed.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/components/dreamrfeed.tsx)
- VideoPostCard — [`dreamr/components/dreamrfeed.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/components/dreamrfeed.tsx)
- PostCard — [`dreamr/components/dreamrfeed.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/components/dreamrfeed.tsx)
- SuggestedContentCard — [`dreamr/components/dreamrfeed.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/components/dreamrfeed.tsx)
- SuggestedCreatorCard — [`dreamr/components/dreamrfeed.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/components/dreamrfeed.tsx)

Hooks:
- useLiveFeed — [`dreamr/feed/useYouTubeLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useYouTubeLiveFeed.ts)
- useCallback — [`dreamr/feed/useYouTubeLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useYouTubeLiveFeed.ts)
- useEffect — [`dreamr/feed/useYouTubeLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useYouTubeLiveFeed.ts)
- useRef — [`dreamr/feed/useYouTubeLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useYouTubeLiveFeed.ts)
- useState — [`dreamr/feed/useYouTubeLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useYouTubeLiveFeed.ts)
- useYouTubeLiveFeed — [`dreamr/feed/useYouTubeLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useYouTubeLiveFeed.ts)
- useCallback — [`dreamr/feed/useLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useLiveFeed.ts)
- useEffect — [`dreamr/feed/useLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useLiveFeed.ts)
- useRef — [`dreamr/feed/useLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useLiveFeed.ts)
- useState — [`dreamr/feed/useLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useLiveFeed.ts)
- useLiveFeed — [`dreamr/feed/useLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useLiveFeed.ts)
- useLiveFeed — [`app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx)
- useCallback — [`app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx)
- useEffect — [`app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx)

Exports that define public behavior:
- UseYouTubeLiveFeedReturn — [`dreamr/feed/useYouTubeLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useYouTubeLiveFeed.ts)
- useYouTubeLiveFeed — [`dreamr/feed/useYouTubeLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useYouTubeLiveFeed.ts)
- SocialSource — [`dreamr/social-feed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/social-feed.ts)
- SocialFeedItem — [`dreamr/social-feed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/social-feed.ts)
- stripHtml — [`dreamr/social-feed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/social-feed.ts)
- extractFirstImage — [`dreamr/social-feed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/social-feed.ts)
- fetchSocialFeed — [`dreamr/social-feed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/social-feed.ts)
- metadata — [`app/dreamr/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamr/page.tsx)
- default export — page (app/dreamr/page.tsx)
- FeedPost — [`dreamr/feed/useLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useLiveFeed.ts)
- UseLiveFeedReturn — [`dreamr/feed/useLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useLiveFeed.ts)
- useLiveFeed — [`dreamr/feed/useLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useLiveFeed.ts)
- FeedTopic — [`dreamr/feed/feedTopics.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/feedTopics.ts)
- loadActiveTopicIds — [`dreamr/feed/feedTopics.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/feedTopics.ts)

Import/export connections:
- app/dreamdmbar/_components/dreamr/api/feedHandler
- dreamr/feed/feedTopics
- dreamr/feed/useLiveFeed
- types/connector
- react
- rss-parser
- app/dreamdmbar/_components/dreamr/dreamsurface.dreamr
- components/ui/dream.AuthenticatedPageHeader
- engine/dev-bypass
- supabase/client/safeGetUser
- supabase/server/serverClient
- lucide-react
- next/navigation
- next/server

### Matched Files

Primary files:
- [`app/api/dreamr/feed/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreamr/feed/route.ts) — 6 lines — score 156 — primary path, path keyword: dreamr
- [`dreamr/feed/useYouTubeLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useYouTubeLiveFeed.ts) — 198 lines — score 152 — primary path, path keyword: dreamr
- [`dreamr/social-feed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/social-feed.ts) — 94 lines — score 152 — primary path, path keyword: dreamr
- [`app/dreamr/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamr/page.tsx) — 81 lines — score 150 — primary path, path keyword: dreamr
- [`dreamr/feed/useLiveFeed.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/useLiveFeed.ts) — 290 lines — score 148 — primary path, path keyword: dreamr
- [`dreamr/feed/feedTopics.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/feedTopics.ts) — 72 lines — score 148 — primary path, path keyword: dreamr
- [`dreamr/feed/hashtags.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feed/hashtags.ts) — 126 lines — score 144 — primary path, path keyword: dreamr
- [`app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx) — 1987 lines — score 142 — primary path, path keyword: dreamr
- [`components/dreamr/dream.panel.DreamRCreatorPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreamr/dream.panel.DreamRCreatorPanel.tsx) — 678 lines — score 142 — primary path, path keyword: dreamr
- [`dreamr/components/dreamrfeed.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/components/dreamrfeed.tsx) — 1201 lines — score 138 — primary path, path keyword: dreamr
- [`app/api/dreamr/suggested/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreamr/suggested/route.ts) — 213 lines — score 134 — primary path, path keyword: dreamr
- [`app/api/dreamr/tally/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreamr/tally/route.ts) — 71 lines — score 134 — primary path, path keyword: dreamr
- [`components/dreamr/dream.panel.DreamRChannelPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreamr/dream.panel.DreamRChannelPanel.tsx) — 313 lines — score 130 — primary path, path keyword: dreamr
- [`app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts) — 277 lines — score 126 — primary path, path keyword: dreamr
- [`app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts) — 233 lines — score 126 — primary path, path keyword: dreamr
- [`dreamr/activity/visibility-score.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/activity/visibility-score.ts) — 180 lines — score 126 — primary path, path keyword: dreamr
- [`dreamr/runtime/torridityLedger.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/runtime/torridityLedger.ts) — 174 lines — score 126 — primary path, path keyword: dreamr
- [`app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx) — 159 lines — score 126 — primary path, path keyword: dreamr
- [`dreamr/bot-detection/index.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/bot-detection/index.ts) — 147 lines — score 126 — primary path, path keyword: dreamr
- [`dreamr/runtime/swipePersonalization.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/runtime/swipePersonalization.ts) — 144 lines — score 126 — primary path, path keyword: dreamr
- [`app/dreamdmbar/_components/dreamr/api/feedHandler.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/api/feedHandler.ts) — 111 lines — score 126 — primary path, path keyword: dreamr
- [`dreamr/feeds/embedFeedLoader.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/feeds/embedFeedLoader.ts) — 81 lines — score 126 — primary path, path keyword: dreamr
- [`dreamr/runtime/swipeCalibration.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/runtime/swipeCalibration.ts) — 79 lines — score 126 — primary path, path keyword: dreamr
- [`dreamr/activity/boogieActivityPolicy.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/activity/boogieActivityPolicy.ts) — 62 lines — score 126 — primary path, path keyword: dreamr
- [`dreamr/activity/revenueSplit.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/activity/revenueSplit.ts) — 48 lines — score 126 — primary path, path keyword: dreamr
- [`app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx) — 43 lines — score 126 — primary path, path keyword: dreamr
- [`dreamr/activity/types.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/activity/types.ts) — 315 lines — score 122 — primary path, path keyword: dreamr
- [`dreamr/botDetection.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/botDetection.ts) — 268 lines — score 122 — primary path, path keyword: dreamr
- [`components/dreamr/dream.CloseFriendsSettings.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreamr/dream.CloseFriendsSettings.tsx) — 242 lines — score 122 — primary path, path keyword: dreamr
- [`dreamr/runtime/socialHumanityScore.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/runtime/socialHumanityScore.ts) — 191 lines — score 122 — primary path, path keyword: dreamr
- [`dreamr/bot-detection/swipe-physics.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/bot-detection/swipe-physics.ts) — 184 lines — score 122 — primary path, path keyword: dreamr
- [`dreamr/activity/scoring.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/activity/scoring.ts) — 144 lines — score 122 — primary path, path keyword: dreamr
- [`dreamr/bot-detection/detector.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/bot-detection/detector.ts) — 143 lines — score 122 — primary path, path keyword: dreamr
- [`dreamr/activity/aqs.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/activity/aqs.ts) — 130 lines — score 122 — primary path, path keyword: dreamr

Supporting files:
- [`dreamr/torridity.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/torridity.ts) — 88 lines — score 122 — primary path, path keyword: dreamr
- [`dreamr/torridity/physics.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/torridity/physics.ts) — 68 lines — score 122 — primary path, path keyword: dreamr
- [`dreamr/bot-detection/view-tally.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/bot-detection/view-tally.ts) — 66 lines — score 122 — primary path, path keyword: dreamr
- [`dreamr/runtime/feedCursor.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/runtime/feedCursor.ts) — 65 lines — score 122 — primary path, path keyword: dreamr
- [`dreamr/runtime/closeFriendsVisibility.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/runtime/closeFriendsVisibility.ts) — 54 lines — score 122 — primary path, path keyword: dreamr
- [`dreamr/activity/skipCredits.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/activity/skipCredits.ts) — 36 lines — score 122 — primary path, path keyword: dreamr
- [`dreamr/torridity/constants.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/torridity/constants.ts) — 15 lines — score 122 — primary path, path keyword: dreamr
- [`dreamr/torridity/index.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamr/torridity/index.ts) — 8 lines — score 122 — primary path, path keyword: dreamr
- [`app/dreamdmbar/_components/dreamr/api/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/api/route.ts) — 3 lines — score 122 — primary path, path keyword: dreamr
- [`app/api/feed/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/feed/route.ts) — 230 lines — score 97 — supporting path, path keyword: feed
- [`app/profile/[handle]/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/profile/%5Bhandle%5D/page.tsx) — 252 lines — score 93 — supporting path, path keyword: profile
- [`app/view-profile/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/view-profile/page.tsx) — 351 lines — score 89 — supporting path, path keyword: profile
- [`components/feed/dream.AlgorithmEngine.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/feed/dream.AlgorithmEngine.tsx) — 586 lines — score 85 — supporting path, path keyword: feed
- [`components/feed/dream.FeedVideoCard.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/feed/dream.FeedVideoCard.tsx) — 477 lines — score 85 — supporting path, path keyword: feed
- [`app/profile/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/profile/page.tsx) — 12 lines — score 85 — supporting path, path keyword: profile
- [`components/feed/dream.CommentSection.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/feed/dream.CommentSection.tsx) — 353 lines — score 81 — supporting path, path keyword: feed
- [`components/feed/dream.FollowOnboarding.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/feed/dream.FollowOnboarding.tsx) — 164 lines — score 81 — supporting path, path keyword: feed
- [`components/feed/dream.FollowButton.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/feed/dream.FollowButton.tsx) — 118 lines — score 81 — supporting path, path keyword: feed
- [`components/dream.HomeFeed.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.HomeFeed.tsx) — 1366 lines — score 67 — supporting path
- [`app/edit-profiledream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/edit-profiledream/page.tsx) — 593 lines — score 67 — supporting path
- [`components/dream.FeedCard.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.FeedCard.tsx) — 474 lines — score 63 — supporting path
## 9. The Shop

### Plain English
The Shop is the owned storefront area for a user or creator. It covers products, services, offers, carts, and purchase-related surfaces tied to a person or brand.

### What users experience
Users feel this as a creator storefront: things to buy, services to offer, and commercial parts attached to the creator identity.

### Repo Evidence
Matched focused repo evidence: 5 files, about 820 readable source lines.

Behavior signals:
- auth — 5 file hits
- commerce — 5 file hits
- persistence — 4 file hits
- state — 1 file hits
- events — 1 file hits

Routes and APIs:
- /shop/sell ← [`app/shop/sell/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/shop/sell/page.tsx)
- GET|POST|PUT|DELETE /api/shop ← [`app/api/shop/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/shop/route.ts)
- /shop ← [`app/shop/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/shop/page.tsx)

Components:
- SellItemPage — [`app/shop/sell/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/shop/sell/page.tsx)
- ShopPage — [`app/shop/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/shop/page.tsx)

Hooks:
- useRouter — [`app/shop/sell/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/shop/sell/page.tsx)
- useEffect — [`app/shop/sell/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/shop/sell/page.tsx)
- useState — [`app/shop/sell/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/shop/sell/page.tsx)

Exports that define public behavior:
- ShopListingInput — [`engine/shop/listings.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/shop/listings.ts)
- ShopListingRecord — [`engine/shop/listings.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/shop/listings.ts)
- ValidationResult — [`engine/shop/listings.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/shop/listings.ts)
- validateShopListing — [`engine/shop/listings.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/shop/listings.ts)
- normalizeShopListing — [`engine/shop/listings.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/shop/listings.ts)
- isOrderOwner — [`engine/shop/listings.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/shop/listings.ts)
- default export — page (app/shop/sell/page.tsx)
- metadata — [`app/shop/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/shop/page.tsx)
- default export — page (app/shop/page.tsx)

Import/export connections:
- supabase/client/client
- supabase/client/safeGetUser
- lucide-react
- next/image
- next/link
- next/navigation
- react
- utils/index
- engine/offline/offlineCache
- engine/shop/listings
- supabase/server/serverClient
- types/supabase
- @supabase/supabase-js
- next/server

### Matched Files

Primary files:
- [`engine/shop/listings.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/shop/listings.ts) — 100 lines — score 148 — primary path, path keyword: shop
- [`app/shop/sell/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/shop/sell/page.tsx) — 223 lines — score 138 — primary path, path keyword: shop
- [`app/api/shop/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/shop/route.ts) — 181 lines — score 138 — primary path, path keyword: shop
- [`app/shop/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/shop/page.tsx) — 130 lines — score 138 — primary path, path keyword: shop
- [`supabase/migrations/20260324000001_phase8e_shop_marketplace.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260324000001_phase8e_shop_marketplace.sql) — 186 lines — score 126 — primary path, path keyword: shop

Supporting files:
- None found.
## 10. The Marketplace

### Plain English
The Marketplace is the broader exchange area where listings, selling pages, catalogs, vendors, or public offerings live beyond one personal shop.

### What users experience
Users experience this as the public commercial side of the ecosystem: browsing, listing, buying, selling, and moving between creator shops and wider discovery.

### Repo Evidence
Matched focused repo evidence: 12 files, about 1,618 readable source lines.

Behavior signals:
- commerce — 12 file hits
- persistence — 7 file hits
- auth — 6 file hits
- state — 3 file hits
- mobile touch — 2 file hits
- runtime — 1 file hits
- events — 1 file hits

Routes and APIs:
- POST /api/marketplace/request ← [`app/api/marketplace/request/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/marketplace/request/route.ts)
- /marketplace/sell ← [`app/marketplace/sell/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/marketplace/sell/page.tsx)
- /marketplace/[id] ← [`app/marketplace/[id]/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/marketplace/%5Bid%5D/page.tsx)
- GET|POST /api/marketplace ← [`app/api/marketplace/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/marketplace/route.ts)
- /marketplace ← [`app/marketplace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/marketplace/page.tsx)

Components:
- MarketplaceSellPage — [`app/marketplace/sell/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/marketplace/sell/page.tsx)
- MarketplaceItemPage — [`app/marketplace/[id]/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/marketplace/%5Bid%5D/page.tsx)
- MarketplacePage — [`app/marketplace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/marketplace/page.tsx)
- MarketplaceRequestButton — [`components/marketplace/dream.MarketplaceRequestButton.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/marketplace/dream.MarketplaceRequestButton.tsx)
- MarketplaceListingCard — [`components/marketplace/dream.MarketplaceListingCard.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/marketplace/dream.MarketplaceListingCard.tsx)
- MarketplacePanel — [`components/panels/dream.panel.MarketplacePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.MarketplacePanel.tsx)

Hooks:
- useRouter — [`app/marketplace/sell/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/marketplace/sell/page.tsx)
- useEffect — [`app/marketplace/sell/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/marketplace/sell/page.tsx)
- useState — [`app/marketplace/sell/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/marketplace/sell/page.tsx)
- useState — [`components/marketplace/dream.MarketplaceRequestButton.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/marketplace/dream.MarketplaceRequestButton.tsx)
- useDreamSystem — [`components/panels/dream.panel.MarketplacePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.MarketplacePanel.tsx)
- useEffect — [`components/panels/dream.panel.MarketplacePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.MarketplacePanel.tsx)
- useState — [`components/panels/dream.panel.MarketplacePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.MarketplacePanel.tsx)

Exports that define public behavior:
- default export — page (app/marketplace/sell/page.tsx)
- default export — page (app/marketplace/[id]/page.tsx)
- metadata — [`app/marketplace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/marketplace/page.tsx)
- default export — page (app/marketplace/page.tsx)
- MarketplaceCategory — [`engine/marketplace/listings.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/marketplace/listings.ts)
- MarketplaceListingInput — [`engine/marketplace/listings.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/marketplace/listings.ts)
- MarketplaceListingRecord — [`engine/marketplace/listings.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/marketplace/listings.ts)
- ValidationResult — [`engine/marketplace/listings.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/marketplace/listings.ts)
- validateMarketplaceListing — [`engine/marketplace/listings.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/marketplace/listings.ts)
- normalizeMarketplaceListing — [`engine/marketplace/listings.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/marketplace/listings.ts)
- marketplaceDetailRoute — [`engine/marketplace/listings.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/marketplace/listings.ts)
- formatMarketplacePrice — [`engine/marketplace/listings.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/marketplace/listings.ts)
- default export — dream.MarketplaceRequestButton (components/marketplace/dream.MarketplaceRequestButton.tsx)
- default export — dream.MarketplaceListingCard (components/marketplace/dream.MarketplaceListingCard.tsx)

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
- engine/offline/offlineCache
- components/marketplace/dream.MarketplaceRequestButton
- components/ui/dream.DreamWord
- @supabase/supabase-js

### Matched Files

Primary files:
- [`app/api/marketplace/request/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/marketplace/request/route.ts) — 74 lines — score 138 — primary path, path keyword: marketplace
- [`app/marketplace/sell/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/marketplace/sell/page.tsx) — 295 lines — score 134 — primary path, path keyword: marketplace
- [`app/marketplace/[id]/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/marketplace/%5Bid%5D/page.tsx) — 193 lines — score 134 — primary path, path keyword: marketplace
- [`app/api/marketplace/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/marketplace/route.ts) — 142 lines — score 134 — primary path, path keyword: marketplace
- [`app/marketplace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/marketplace/page.tsx) — 137 lines — score 134 — primary path, path keyword: marketplace
- [`supabase/migrations/20260324000001_phase8e_shop_marketplace.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260324000001_phase8e_shop_marketplace.sql) — 186 lines — score 130 — primary path, path keyword: marketplace
- [`engine/marketplace/listings.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/marketplace/listings.ts) — 129 lines — score 130 — primary path, path keyword: marketplace
- [`components/marketplace/dream.MarketplaceRequestButton.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/marketplace/dream.MarketplaceRequestButton.tsx) — 128 lines — score 126 — primary path, path keyword: marketplace
- [`components/marketplace/dream.MarketplaceListingCard.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/marketplace/dream.MarketplaceListingCard.tsx) — 78 lines — score 126 — primary path, path keyword: marketplace
- [`engine/marketplace/request.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/marketplace/request.ts) — 69 lines — score 126 — primary path, path keyword: marketplace
- [`types/marketplace.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/marketplace.ts) — 51 lines — score 122 — primary path, path keyword: marketplace
- [`components/panels/dream.panel.MarketplacePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.MarketplacePanel.tsx) — 136 lines — score 59 — supporting path

Supporting files:
- None found.
## 11. Ads & User Ads

### Plain English
Ads and User Ads cover promotion, sponsored inventory, campaign surfaces, impressions, clicks, targeting rules, and any app code that lets users or the platform promote content.

### What users experience
Users see this as promoted Dreams, user-created campaigns, ad slots, sponsor cards, or paid visibility controls.

### Repo Evidence
Matched focused repo evidence: 11 files, about 1,498 readable source lines.

Behavior signals:
- commerce — 10 file hits
- auth — 8 file hits
- persistence — 7 file hits
- state — 4 file hits
- events — 1 file hits
- mobile touch — 1 file hits

Routes and APIs:
- /ads ← [`app/ads/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/page.tsx)
- /ads/create ← [`app/ads/create/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/create/page.tsx)
- POST /api/ads/view ← [`app/api/ads/view/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/ads/view/route.ts)
- /ads/slot/[id] ← [`app/ads/slot/[id]/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/slot/%5Bid%5D/page.tsx)
- POST /api/ads/orders ← [`app/api/ads/orders/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/ads/orders/route.ts)
- /engines/brand/campaigns ← [`app/engines/brand/campaigns/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/brand/campaigns/page.tsx)

Components:
- AdsPage — [`app/ads/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/page.tsx)
- CreateAdSlotPage — [`app/ads/create/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/create/page.tsx)
- AdSlotPage — [`app/ads/slot/[id]/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/slot/%5Bid%5D/page.tsx)
- AdUnit — [`components/ads/dream.AdUnit.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/ads/dream.AdUnit.tsx)
- SkipCreditBalance — [`components/ads/dream.SkipCreditBalance.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/ads/dream.SkipCreditBalance.tsx)
- BrandCampaignsPage — [`app/engines/brand/campaigns/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/brand/campaigns/page.tsx)
- CampaignsPanel — [`components/engines/brand/panels/dream.panel.CampaignsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/engines/brand/panels/dream.panel.CampaignsPanel.tsx)

Hooks:
- useRouter — [`app/ads/create/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/create/page.tsx)
- useEffect — [`app/ads/create/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/create/page.tsx)
- useState — [`app/ads/create/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/create/page.tsx)
- useEffect — [`components/ads/dream.AdUnit.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/ads/dream.AdUnit.tsx)
- useState — [`components/ads/dream.AdUnit.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/ads/dream.AdUnit.tsx)
- useEffect — [`components/ads/dream.SkipCreditBalance.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/ads/dream.SkipCreditBalance.tsx)
- useState — [`components/ads/dream.SkipCreditBalance.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/ads/dream.SkipCreditBalance.tsx)
- useState — [`components/engines/brand/panels/dream.panel.CampaignsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/engines/brand/panels/dream.panel.CampaignsPanel.tsx)

Exports that define public behavior:
- default export — page (app/ads/page.tsx)
- default export — page (app/ads/create/page.tsx)
- default export — page (app/ads/slot/[id]/page.tsx)
- AdUnit — [`components/ads/dream.AdUnit.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/ads/dream.AdUnit.tsx)
- SkipCreditBalance — [`components/ads/dream.SkipCreditBalance.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/ads/dream.SkipCreditBalance.tsx)
- AdPlacement — [`types/ads.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/ads.ts)
- AdSlot — [`types/ads.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/ads.ts)
- ProfileLite — [`types/ads.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/ads.ts)
- AdListing — [`types/ads.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/ads.ts)
- AdOrder — [`types/ads.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/ads.ts)
- metadata — [`app/engines/brand/campaigns/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/brand/campaigns/page.tsx)
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
- engine/offline/offlineCache
- dreamr/activity/aqs

### Matched Files

Primary files:
- [`app/ads/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/page.tsx) — 267 lines — score 130 — primary path, path keyword: ads
- [`app/ads/create/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/create/page.tsx) — 223 lines — score 130 — primary path, path keyword: ads
- [`app/api/ads/view/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/ads/view/route.ts) — 192 lines — score 130 — primary path, path keyword: ads
- [`app/ads/slot/[id]/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/ads/slot/%5Bid%5D/page.tsx) — 139 lines — score 130 — primary path, path keyword: ads
- [`app/api/ads/orders/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/ads/orders/route.ts) — 67 lines — score 130 — primary path, path keyword: ads
- [`supabase/migrations/20260321000000_ads_platform_promotions.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260321000000_ads_platform_promotions.sql) — 38 lines — score 126 — primary path, path keyword: ads
- [`components/ads/dream.AdUnit.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/ads/dream.AdUnit.tsx) — 229 lines — score 122 — primary path, path keyword: ads
- [`components/ads/dream.SkipCreditBalance.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/ads/dream.SkipCreditBalance.tsx) — 58 lines — score 122 — primary path, path keyword: ads
- [`types/ads.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/ads.ts) — 46 lines — score 122 — primary path, path keyword: ads
- [`app/engines/brand/campaigns/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/brand/campaigns/page.tsx) — 31 lines — score 67 — supporting path
- [`components/engines/brand/panels/dream.panel.CampaignsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/engines/brand/panels/dream.panel.CampaignsPanel.tsx) — 208 lines — score 59 — supporting path

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
Matched focused repo evidence: 59 files, about 16,875 readable source lines.

Behavior signals:
- runtime — 39 file hits
- state — 35 file hits
- commerce — 34 file hits
- auth — 27 file hits
- persistence — 26 file hits
- mobile touch — 26 file hits
- events — 18 file hits
- rendering — 11 file hits

Routes and APIs:
- /dreamdmbar/dualruntime ← [`app/dreamdmbar/dualruntime/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dualruntime/page.tsx)
- /dreamdmbar/dreamspace ← [`app/dreamdmbar/dreamspace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dreamspace/page.tsx)
- /dreamdmbar/homedream ← [`app/dreamdmbar/homedream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/homedream/page.tsx)
- /dreamdmbar ← [`app/dreamdmbar/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/page.tsx)
- /messages/boards ← [`app/messages/boards/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/boards/page.tsx)
- GET|POST /api/messages ← [`app/api/messages/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/messages/route.ts)
- /messages/boards/[id] ← [`app/messages/boards/[id]/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/boards/%5Bid%5D/page.tsx)
- /messages/boards/new ← [`app/messages/boards/new/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/boards/new/page.tsx)

Components:
- DreamDMBarDualRuntimePage — [`app/dreamdmbar/dualruntime/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dualruntime/page.tsx)
- DreamSystemProvider — [`dreamdmbar/runtime/DreamSystemContext.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/DreamSystemContext.tsx)
- AvatarChip — [`dreamdmbar/dreamsurface.dreamdmbar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/dreamsurface.dreamdmbar.tsx)
- ContextIcon — [`dreamdmbar/dreamsurface.dreamdmbar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/dreamsurface.dreamdmbar.tsx)
- DreamDMBar — [`dreamdmbar/dreamsurface.dreamdmbar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/dreamsurface.dreamdmbar.tsx)
- CompactNotificationStrip — [`dreamdmbar/dreamsurface.dreamdmbar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/dreamsurface.dreamdmbar.tsx)
- ModeButton — [`dreamdmbar/dreamsurface.dreamdmbar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/dreamsurface.dreamdmbar.tsx)
- DreamSpaceMessaging — [`dreamdmbar/dreamsurface.dreamdmbar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/dreamsurface.dreamdmbar.tsx)
- RuntimeView — [`components/runtime/dream.RuntimeView.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.RuntimeView.tsx)
- DreamDMBarDreamSpacePage — [`app/dreamdmbar/dreamspace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dreamspace/page.tsx)
- DreamDMBarHomeDreamPage — [`app/dreamdmbar/homedream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/homedream/page.tsx)
- QuickLink — [`app/dreamdmbar/_components/HomeDreamRegion.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/HomeDreamRegion.tsx)
- HomeDreamSurface — [`app/dreamdmbar/_components/HomeDreamRegion.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/HomeDreamRegion.tsx)
- TrendIcon — [`app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx)

Hooks:
- useDreamSystem — [`app/dreamdmbar/dualruntime/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dualruntime/page.tsx)
- useEffect — [`app/dreamdmbar/dualruntime/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dualruntime/page.tsx)
- useState — [`app/dreamdmbar/dualruntime/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dualruntime/page.tsx)
- useCallback — [`dreamdmbar/runtime/DreamSystemContext.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/DreamSystemContext.tsx)
- useContext — [`dreamdmbar/runtime/DreamSystemContext.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/DreamSystemContext.tsx)
- useEffect — [`dreamdmbar/runtime/DreamSystemContext.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/DreamSystemContext.tsx)
- useMemo — [`dreamdmbar/runtime/DreamSystemContext.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/DreamSystemContext.tsx)
- useRef — [`dreamdmbar/runtime/DreamSystemContext.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/DreamSystemContext.tsx)
- useState — [`dreamdmbar/runtime/DreamSystemContext.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/DreamSystemContext.tsx)
- useDreamSystem — [`dreamdmbar/runtime/DreamSystemContext.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/DreamSystemContext.tsx)
- useCallback — [`dreamdmbar/dreamsurface.dreamdmbar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/dreamsurface.dreamdmbar.tsx)
- useEffect — [`dreamdmbar/dreamsurface.dreamdmbar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/dreamsurface.dreamdmbar.tsx)
- useRef — [`dreamdmbar/dreamsurface.dreamdmbar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/dreamsurface.dreamdmbar.tsx)
- useState — [`dreamdmbar/dreamsurface.dreamdmbar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/dreamsurface.dreamdmbar.tsx)

Exports that define public behavior:
- default export — page (app/dreamdmbar/dualruntime/page.tsx)
- snapToSplitPoint — [`dreamdmbar/runtime/barInteractions.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/barInteractions.ts)
- snapSplitRatioOnRelease — [`dreamdmbar/runtime/barInteractions.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/barInteractions.ts)
- resolveGoldTapAction — [`dreamdmbar/runtime/barInteractions.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/barInteractions.ts)
- shouldTreatGoldReleaseAsTap — [`dreamdmbar/runtime/barInteractions.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/barInteractions.ts)
- calculatePointerVelocity — [`dreamdmbar/runtime/barInteractions.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/barInteractions.ts)
- shouldCollapseGoldSwipe — [`dreamdmbar/runtime/barInteractions.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/barInteractions.ts)
- shouldSnapBottomDragToTop — [`dreamdmbar/runtime/barInteractions.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/barInteractions.ts)
- shouldCollapseTopExpandedDrag — [`dreamdmbar/runtime/barInteractions.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/barInteractions.ts)
- BarReleaseAction — [`dreamdmbar/runtime/barInteractions.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/barInteractions.ts)
- decideBarRelease — [`dreamdmbar/runtime/barInteractions.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/barInteractions.ts)
- clampOrbOffset — [`dreamdmbar/runtime/barInteractions.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/barInteractions.ts)
- computeOrbDragPosition — [`dreamdmbar/runtime/barInteractions.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/barInteractions.ts)
- MoodPeriod — [`dreamdmbar/runtime/barInteractions.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/barInteractions.ts)

Import/export connections:
- components/shared-dream/dream.SharedDreamRuntime
- dreamdmbar/runtime/DreamSystemContext
- react
- dreamdmbar/runtime/barInteractions
- components/panels/panelTypes
- engine/runtime/dualRuntime
- supabase/client/client
- engine/offline/offlineCache
- supabase/client/safeGetUser
- lucide-react
- next/image
- components/ui/dream.DreamWord
- dreamdmbar/dream.GlowingLight
- dreamdmbar/dream.PhaseTrail

### Matched Files

Primary files:
- [`app/dreamdmbar/dualruntime/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dualruntime/page.tsx) — 82 lines — score 164 — primary path, path keyword: dreamdmbar
- [`dreamdmbar/runtime/barInteractions.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/barInteractions.ts) — 559 lines — score 156 — primary path, path keyword: dreamdmbar
- [`dreamdmbar/runtime/DreamSystemContext.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/DreamSystemContext.tsx) — 425 lines — score 156 — primary path, path keyword: dreamdmbar
- [`dreamdmbar/dreamsurface.dreamdmbar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/dreamsurface.dreamdmbar.tsx) — 3242 lines — score 146 — primary path, path keyword: dreamdmbar
- [`dreamdmbar/runtime/bridgeSeamFlow.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/runtime/bridgeSeamFlow.ts) — 153 lines — score 144 — primary path, path keyword: dreamdmbar
- [`components/runtime/dream.RuntimeView.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.RuntimeView.tsx) — 439 lines — score 142 — primary path, path keyword: runtime
- [`app/dreamdmbar/dreamspace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dreamspace/page.tsx) — 19 lines — score 142 — primary path, path keyword: dreamdmbar
- [`app/dreamdmbar/homedream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/homedream/page.tsx) — 19 lines — score 142 — primary path, path keyword: dreamdmbar
- [`app/dreamdmbar/_components/HomeDreamRegion.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/HomeDreamRegion.tsx) — 493 lines — score 138 — primary path, path keyword: dreamdmbar
- [`app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx) — 1987 lines — score 134 — primary path, path keyword: dreamdmbar
- [`components/runtime/dream.DualRuntimeContainer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.DualRuntimeContainer.tsx) — 235 lines — score 134 — primary path, path keyword: runtime
- [`app/dreamdmbar/_components/DreamBarDataBridge.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/DreamBarDataBridge.tsx) — 181 lines — score 134 — primary path, path keyword: dreamdmbar
- [`app/dreamdmbar/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/page.tsx) — 7 lines — score 134 — primary path, path keyword: dreamdmbar
- [`app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts) — 277 lines — score 130 — primary path, path keyword: dreamdmbar
- [`dreamdmbar/notifications/useNotifications.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/useNotifications.ts) — 175 lines — score 130 — primary path, path keyword: dreamdmbar
- [`dreamdmbar/hooks/useDreamBarContext.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useDreamBarContext.ts) — 151 lines — score 130 — primary path, path keyword: dreamdmbar
- [`dreamdmbar/hooks/useModuleBarIntent.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useModuleBarIntent.ts) — 48 lines — score 130 — primary path, path keyword: dreamdmbar
- [`engine/generated/dreamdmbar.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/generated/dreamdmbar.ts) — 22 lines — score 130 — primary path, path keyword: dreamdmbar
- [`app/dreamdmbar/_components/DreamSpaceRegion.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/DreamSpaceRegion.tsx) — 465 lines — score 126 — primary path, path keyword: dreamdmbar
- [`components/runtime/dream.shell.RuntimeShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.shell.RuntimeShell.tsx) — 322 lines — score 126 — primary path, path keyword: runtime
- [`app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts) — 233 lines — score 126 — primary path, path keyword: dreamdmbar
- [`dreamdmbar/notifications/notificationHelpers.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/notificationHelpers.ts) — 229 lines — score 126 — primary path, path keyword: dreamdmbar
- [`dreamdmbar/hooks/useDreamSearch.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useDreamSearch.ts) — 210 lines — score 126 — primary path, path keyword: dreamdmbar
- [`app/dreamdmbar/layout.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/layout.tsx) — 184 lines — score 126 — primary path, path keyword: dreamdmbar
- [`dreamdmbar/hooks/useMessagingCore.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useMessagingCore.ts) — 169 lines — score 126 — primary path, path keyword: dreamdmbar
- [`app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx) — 159 lines — score 126 — primary path, path keyword: dreamdmbar
- [`dreamdmbar/dream.PhaseTrail.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/dream.PhaseTrail.tsx) — 117 lines — score 126 — primary path, path keyword: dreamdmbar
- [`app/dreamdmbar/_components/dreamr/api/feedHandler.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/api/feedHandler.ts) — 111 lines — score 126 — primary path, path keyword: dreamdmbar
- [`dreamdmbar/dream.GlowingLight.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/dream.GlowingLight.tsx) — 103 lines — score 126 — primary path, path keyword: dreamdmbar
- [`app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx) — 43 lines — score 126 — primary path, path keyword: dreamdmbar
- [`dreamdmbar/hooks/useDreamDMDraft.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useDreamDMDraft.ts) — 168 lines — score 122 — primary path, path keyword: dreamdmbar
- [`dreamdmbar/hooks/useDreamDMMessages.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useDreamDMMessages.ts) — 152 lines — score 122 — primary path, path keyword: dreamdmbar
- [`dreamdmbar/hooks/useDreamDMConversations.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useDreamDMConversations.ts) — 122 lines — score 122 — primary path, path keyword: dreamdmbar
- [`dreamdmbar/hooks/useNotifications.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useNotifications.ts) — 86 lines — score 122 — primary path, path keyword: dreamdmbar

Supporting files:
- [`app/dreamdmbar/_components/DreamWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/DreamWidgetGrid.tsx) — 33 lines — score 122 — primary path, path keyword: dreamdmbar
- [`app/dreamdmbar/_components/dreamr/api/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/dreamr/api/route.ts) — 3 lines — score 122 — primary path, path keyword: dreamdmbar
- [`engine/runtime/dualRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dualRuntime.ts) — 182 lines — score 103 — supporting path, path keyword: runtime
- [`engine/runtime/useDualRuntimePersistence.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/useDualRuntimePersistence.ts) — 163 lines — score 85 — supporting path, path keyword: runtime
- [`engine/runtime/dualRuntimeBridge.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dualRuntimeBridge.ts) — 891 lines — score 81 — supporting path, path keyword: runtime
- [`engine/runtime/useDualRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/useDualRuntime.ts) — 135 lines — score 77 — supporting path, path keyword: runtime
- [`components/home/dream.bar.PersistentDreamBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.bar.PersistentDreamBar.tsx) — 747 lines — score 75 — supporting path
- [`components/panels/dream.panel.AppearancePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.AppearancePanel.tsx) — 162 lines — score 67 — supporting path
- [`components/panels/dream.panel.MarketplacePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.MarketplacePanel.tsx) — 136 lines — score 67 — supporting path
- [`app/messages/boards/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/boards/page.tsx) — 119 lines — score 67 — supporting path
- [`components/panels/dream.panel.WidgetsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.WidgetsPanel.tsx) — 104 lines — score 67 — supporting path
- [`components/panels/dream.panel.HelpPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.HelpPanel.tsx) — 67 lines — score 67 — supporting path
- [`components/dream.CommandPalette.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.CommandPalette.tsx) — 478 lines — score 63 — supporting path
- [`components/dream.NotificationCenter.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.NotificationCenter.tsx) — 395 lines — score 63 — supporting path
- [`app/api/messages/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/messages/route.ts) — 342 lines — score 63 — supporting path
- [`components/panels/dream.panel.SettingsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.SettingsPanel.tsx) — 182 lines — score 63 — supporting path
- [`app/messages/boards/[id]/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/boards/%5Bid%5D/page.tsx) — 178 lines — score 63 — supporting path
- [`components/panels/dream.panel.PrivacyPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.PrivacyPanel.tsx) — 142 lines — score 63 — supporting path
- [`components/panels/dream.panel.DataPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.DataPanel.tsx) — 135 lines — score 63 — supporting path
- [`app/messages/boards/new/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/boards/new/page.tsx) — 110 lines — score 63 — supporting path
- [`components/panels/dream.panel.SafetyPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.SafetyPanel.tsx) — 98 lines — score 63 — supporting path
- [`components/home/dream.bar.GlobalDreamBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.bar.GlobalDreamBar.tsx) — 89 lines — score 63 — supporting path
- [`components/panels/dream.panel.ControlsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.ControlsPanel.tsx) — 86 lines — score 63 — supporting path
- [`components/panels/dream.panel.AlgorithmPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.AlgorithmPanel.tsx) — 32 lines — score 63 — supporting path
- [`components/home/dream.ActiveModuleSurface.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.ActiveModuleSurface.tsx) — 479 lines — score 59 — supporting path
## 13. Messaging

### Plain English
Messaging is the direct communication layer: conversations, drafts, notifications, inbox behavior, message APIs, and hooks that keep communication alive across surfaces.

### What users experience
Users experience this when they send a message, receive a notification, open a conversation, keep a draft, or continue a thread from another surface.

### Repo Evidence
Matched focused repo evidence: 22 files, about 4,015 readable source lines.

Behavior signals:
- persistence — 17 file hits
- auth — 17 file hits
- commerce — 13 file hits
- state — 10 file hits
- mobile touch — 5 file hits
- events — 4 file hits
- runtime — 2 file hits
- rendering — 2 file hits

Routes and APIs:
- GET|POST /api/messages ← [`app/api/messages/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/messages/route.ts)
- PATCH|DELETE /api/drafts/[id] ← [`app/api/drafts/[id]/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/drafts/%5Bid%5D/route.ts)
- GET|POST /api/drafts ← [`app/api/drafts/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/drafts/route.ts)
- /messages ← [`app/messages/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/page.tsx)
- /messages/boards/[id] ← [`app/messages/boards/[id]/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/boards/%5Bid%5D/page.tsx)
- /messages/boards ← [`app/messages/boards/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/boards/page.tsx)
- /messages/boards/new ← [`app/messages/boards/new/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/boards/new/page.tsx)
- POST /api/messages/boards ← [`app/api/messages/boards/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/messages/boards/route.ts)
- /messages/new ← [`app/messages/new/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/new/page.tsx)
- /settings/notifications ← [`app/settings/notifications/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/notifications/page.tsx)
- GET|POST /api/settings/notifications ← [`app/api/settings/notifications/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/settings/notifications/route.ts)

Components:
- MessagesPage — [`app/messages/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/page.tsx)
- BoardDetailPage — [`app/messages/boards/[id]/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/boards/%5Bid%5D/page.tsx)
- BoardsPage — [`app/messages/boards/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/boards/page.tsx)
- NewBoardPage — [`app/messages/boards/new/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/boards/new/page.tsx)
- NewMessagePage — [`app/messages/new/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/new/page.tsx)
- BoardComposer — [`components/messaging/dream.BoardComposer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/messaging/dream.BoardComposer.tsx)
- NotificationSettingsPage — [`app/settings/notifications/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/notifications/page.tsx)
- MessageContent — [`components/dream.MessagesClient.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.MessagesClient.tsx)
- MessagesClient — [`components/dream.MessagesClient.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.MessagesClient.tsx)
- NotifIcon — [`components/dream.NotificationCenter.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.NotificationCenter.tsx)
- NotifRow — [`components/dream.NotificationCenter.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.NotificationCenter.tsx)
- NotificationCenter — [`components/dream.NotificationCenter.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.NotificationCenter.tsx)

Hooks:
- useRouter — [`app/messages/boards/new/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/boards/new/page.tsx)
- useState — [`app/messages/boards/new/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/boards/new/page.tsx)
- useCallback — [`dreamdmbar/notifications/useNotifications.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/useNotifications.ts)
- useEffect — [`dreamdmbar/notifications/useNotifications.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/useNotifications.ts)
- useRef — [`dreamdmbar/notifications/useNotifications.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/useNotifications.ts)
- useState — [`dreamdmbar/notifications/useNotifications.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/useNotifications.ts)
- useNotifications — [`dreamdmbar/notifications/useNotifications.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/useNotifications.ts)
- useCallback — [`dreamdmbar/hooks/useMessagingCore.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useMessagingCore.ts)
- useState — [`dreamdmbar/hooks/useMessagingCore.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useMessagingCore.ts)
- useDreamDMMessages — [`dreamdmbar/hooks/useMessagingCore.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useMessagingCore.ts)
- useMessagingCore — [`dreamdmbar/hooks/useMessagingCore.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useMessagingCore.ts)
- useCallback — [`dreamdmbar/hooks/useDreamDMDraft.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useDreamDMDraft.ts)
- useEffect — [`dreamdmbar/hooks/useDreamDMDraft.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useDreamDMDraft.ts)
- useRef — [`dreamdmbar/hooks/useDreamDMDraft.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useDreamDMDraft.ts)

Exports that define public behavior:
- default export — page (app/messages/page.tsx)
- DbNotificationContent — [`dreamdmbar/notifications/notificationHelpers.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/notificationHelpers.ts)
- DbNotificationRow — [`dreamdmbar/notifications/notificationHelpers.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/notificationHelpers.ts)
- UiNotificationType — [`dreamdmbar/notifications/notificationHelpers.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/notificationHelpers.ts)
- UiNotification — [`dreamdmbar/notifications/notificationHelpers.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/notificationHelpers.ts)
- mapNotificationType — [`dreamdmbar/notifications/notificationHelpers.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/notificationHelpers.ts)
- getNotificationTitle — [`dreamdmbar/notifications/notificationHelpers.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/notificationHelpers.ts)
- getNotificationActionUrl — [`dreamdmbar/notifications/notificationHelpers.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/notificationHelpers.ts)
- extractNotificationMessage — [`dreamdmbar/notifications/notificationHelpers.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/notificationHelpers.ts)
- normalizeDbRow — [`dreamdmbar/notifications/notificationHelpers.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/notificationHelpers.ts)
- getUnreadCount — [`dreamdmbar/notifications/notificationHelpers.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/notificationHelpers.ts)
- sortByRecent — [`dreamdmbar/notifications/notificationHelpers.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/notificationHelpers.ts)
- applyOptimisticRead — [`dreamdmbar/notifications/notificationHelpers.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/notificationHelpers.ts)
- applyOptimisticMarkAll — [`dreamdmbar/notifications/notificationHelpers.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/notificationHelpers.ts)

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
- components/dream.MessagesClient
- next/navigation
- components/messaging/dream.BoardComposer
- lucide-react

### Matched Files

Primary files:
- [`app/api/messages/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/messages/route.ts) — 342 lines — score 120 — primary path
- [`app/api/drafts/[id]/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/drafts/%5Bid%5D/route.ts) — 120 lines — score 116 — primary path
- [`app/api/drafts/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/drafts/route.ts) — 96 lines — score 112 — primary path
- [`app/messages/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/page.tsx) — 69 lines — score 112 — primary path
- [`dreamdmbar/notifications/notificationHelpers.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/notificationHelpers.ts) — 229 lines — score 108 — primary path
- [`app/messages/boards/[id]/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/boards/%5Bid%5D/page.tsx) — 178 lines — score 108 — primary path
- [`app/messages/boards/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/boards/page.tsx) — 119 lines — score 108 — primary path
- [`app/messages/boards/new/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/boards/new/page.tsx) — 110 lines — score 108 — primary path
- [`app/api/messages/boards/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/messages/boards/route.ts) — 92 lines — score 108 — primary path
- [`app/messages/new/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/messages/new/page.tsx) — 86 lines — score 108 — primary path
- [`supabase/migrations/20260315000000_content_drafts.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260315000000_content_drafts.sql) — 65 lines — score 108 — primary path
- [`dreamdmbar/notifications/useNotifications.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/notifications/useNotifications.ts) — 175 lines — score 104 — primary path
- [`dreamdmbar/hooks/useMessagingCore.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useMessagingCore.ts) — 169 lines — score 104 — primary path
- [`dreamdmbar/hooks/useDreamDMDraft.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useDreamDMDraft.ts) — 168 lines — score 104 — primary path
- [`supabase/migrations/20260307000001_conversations_messages.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260307000001_conversations_messages.sql) — 80 lines — score 104 — primary path
- [`dreamdmbar/hooks/useDreamDMMessages.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useDreamDMMessages.ts) — 152 lines — score 100 — primary path
- [`dreamdmbar/hooks/useDreamDMConversations.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useDreamDMConversations.ts) — 122 lines — score 100 — primary path
- [`components/messaging/dream.BoardComposer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/messaging/dream.BoardComposer.tsx) — 89 lines — score 100 — primary path
- [`app/settings/notifications/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/notifications/page.tsx) — 207 lines — score 71 — supporting path
- [`components/dream.MessagesClient.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.MessagesClient.tsx) — 880 lines — score 67 — supporting path
- [`app/api/settings/notifications/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/settings/notifications/route.ts) — 72 lines — score 67 — supporting path
- [`components/dream.NotificationCenter.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.NotificationCenter.tsx) — 395 lines — score 63 — supporting path

Supporting files:
- None found.
## 14. HomeDream

### Plain English
HomeDream is the personal home surface: the first meaningful app space after login, combining identity, feed, launcher cards, Dream access, and social entry points.

### What users experience
Users feel HomeDream as the personal starting point where they see themselves, their Dreams, people, feed items, and the app modules they can open.

### Repo Evidence
Matched focused repo evidence: 19 files, about 5,076 readable source lines.

Behavior signals:
- mobile touch — 11 file hits
- commerce — 10 file hits
- events — 9 file hits
- auth — 8 file hits
- runtime — 7 file hits
- state — 7 file hits
- rendering — 5 file hits
- persistence — 4 file hits

Routes and APIs:
- /homedream ← [`app/homedream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/homedream/page.tsx)
- GET|POST /api/home-layout ← [`app/api/home-layout/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/home-layout/route.ts)

Components:
- PersistentDreamBar — [`components/home/dream.bar.PersistentDreamBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.bar.PersistentDreamBar.tsx)
- HomeDreamPage — [`app/homedream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/homedream/page.tsx)
- ActiveModuleSurface — [`components/home/dream.ActiveModuleSurface.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.ActiveModuleSurface.tsx)
- FlagshipEnginesStrip — [`components/home/dream.FlagshipEnginesStrip.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.FlagshipEnginesStrip.tsx)
- NeuralSeamCanvas — [`components/home/dream.NeuralSeamCanvas.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.NeuralSeamCanvas.tsx)
- ZoomablePane — [`components/home/dream.ZoomablePane.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.ZoomablePane.tsx)
- DaydreamPulseStrip — [`components/home/dream.DaydreamPulseStrip.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.DaydreamPulseStrip.tsx)
- DreamWidget — [`components/home/dream.widget.DreamWidget.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.widget.DreamWidget.tsx)
- GlobalDreamBar — [`components/home/dream.bar.GlobalDreamBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.bar.GlobalDreamBar.tsx)
- QuickLink — [`app/dreamdmbar/_components/HomeDreamRegion.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/HomeDreamRegion.tsx)
- HomeDreamSurface — [`app/dreamdmbar/_components/HomeDreamRegion.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/HomeDreamRegion.tsx)
- HomeFeed — [`components/dream.HomeFeed.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.HomeFeed.tsx)
- FeedCard — [`components/dream.FeedCard.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.FeedCard.tsx)

Hooks:
- useDualRuntime — [`components/home/dream.bar.PersistentDreamBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.bar.PersistentDreamBar.tsx)
- useDreamLayout — [`components/home/dream.bar.PersistentDreamBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.bar.PersistentDreamBar.tsx)
- useDreamSystem — [`components/home/dream.bar.PersistentDreamBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.bar.PersistentDreamBar.tsx)
- useOS — [`components/home/dream.bar.PersistentDreamBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.bar.PersistentDreamBar.tsx)
- usePathname — [`components/home/dream.bar.PersistentDreamBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.bar.PersistentDreamBar.tsx)
- useCallback — [`components/home/dream.bar.PersistentDreamBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.bar.PersistentDreamBar.tsx)
- useEffect — [`components/home/dream.bar.PersistentDreamBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.bar.PersistentDreamBar.tsx)
- useRef — [`components/home/dream.bar.PersistentDreamBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.bar.PersistentDreamBar.tsx)
- useState — [`components/home/dream.bar.PersistentDreamBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.bar.PersistentDreamBar.tsx)
- useLiveFeed — [`app/homedream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/homedream/page.tsx)
- useDreamWindowActions — [`components/home/dream.ActiveModuleSurface.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.ActiveModuleSurface.tsx)
- useCallback — [`components/home/dream.ActiveModuleSurface.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.ActiveModuleSurface.tsx)
- useEffect — [`components/home/dream.ActiveModuleSurface.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.ActiveModuleSurface.tsx)
- useMemo — [`components/home/dream.ActiveModuleSurface.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.ActiveModuleSurface.tsx)

Exports that define public behavior:
- DreamDMContainer — [`components/home/dream.bar.PersistentDreamBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.bar.PersistentDreamBar.tsx)
- default export — dream.bar.PersistentDreamBar (components/home/dream.bar.PersistentDreamBar.tsx)
- default export — page (app/homedream/page.tsx)
- default export — dream.ActiveModuleSurface (components/home/dream.ActiveModuleSurface.tsx)
- PhysicsConstraint — [`engins/rulesets/homedream/dream.homedream.physics.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/homedream/dream.homedream.physics.ts)
- resolveConstraint — [`engins/rulesets/homedream/dream.homedream.physics.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/homedream/dream.homedream.physics.ts)
- EntityState — [`engins/rulesets/homedream/dream.homedream.transforms.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/homedream/dream.homedream.transforms.ts)
- HomeDreamState — [`engins/rulesets/homedream/dream.homedream.transforms.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/homedream/dream.homedream.transforms.ts)
- applyDelta — [`engins/rulesets/homedream/dream.homedream.transforms.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/homedream/dream.homedream.transforms.ts)
- createInitialState — [`engins/rulesets/homedream/dream.homedream.transforms.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/homedream/dream.homedream.transforms.ts)
- homedream — [`engine/generated/homedream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/generated/homedream.ts)
- HomedreamMap — [`engine/generated/homedream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/generated/homedream.ts)
- default export — dream.FlagshipEnginesStrip (components/home/dream.FlagshipEnginesStrip.tsx)
- default export — dream.NeuralSeamCanvas (components/home/dream.NeuralSeamCanvas.tsx)

Import/export connections:
- components/home/dream.NeuralSeamCanvas
- components/home/dream.ZoomablePane
- components/runtime/dream.DualRuntimeContainer
- components/runtime/dream.RuntimeView
- dreamdmbar/dreamsurface.dreamdmbar
- dreamdmbar/dream.GlowingLight
- dreamdmbar/dream.PhaseTrail
- hooks/useDreamLayout
- dreamdmbar/runtime/DreamSystemContext
- dreamdmbar/runtime/barInteractions
- engine/os/OSContext
- engine/dreams/drag
- engine/routing/surfaces
- next/navigation

### Matched Files

Primary files:
- [`components/home/dream.bar.PersistentDreamBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.bar.PersistentDreamBar.tsx) — 747 lines — score 130 — primary path, path keyword: home dream
- [`app/homedream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/homedream/page.tsx) — 75 lines — score 130 — primary path, path keyword: homedream
- [`components/home/dream.ActiveModuleSurface.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.ActiveModuleSurface.tsx) — 479 lines — score 126 — primary path, path keyword: home dream
- [`styles/home-dream.css`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/styles/home-dream.css) — 235 lines — score 126 — primary path, path keyword: home dream
- [`engins/rulesets/homedream/dream.homedream.physics.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/homedream/dream.homedream.physics.ts) — 36 lines — score 126 — primary path, path keyword: homedream
- [`engins/rulesets/homedream/dream.homedream.transforms.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/homedream/dream.homedream.transforms.ts) — 36 lines — score 126 — primary path, path keyword: homedream
- [`engins/rulesets/homedream/index.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/homedream/index.ts) — 15 lines — score 126 — primary path, path keyword: homedream
- [`engins/rulesets/homedream/dream.homedream.constants.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/homedream/dream.homedream.constants.ts) — 9 lines — score 126 — primary path, path keyword: homedream
- [`engine/generated/homedream.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/generated/homedream.ts) — 8 lines — score 126 — primary path, path keyword: homedream
- [`components/home/dream.FlagshipEnginesStrip.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.FlagshipEnginesStrip.tsx) — 262 lines — score 122 — primary path, path keyword: home dream
- [`components/home/dream.NeuralSeamCanvas.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.NeuralSeamCanvas.tsx) — 250 lines — score 122 — primary path, path keyword: home dream
- [`components/home/dream.ZoomablePane.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.ZoomablePane.tsx) — 148 lines — score 122 — primary path, path keyword: home dream
- [`components/home/dream.DaydreamPulseStrip.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.DaydreamPulseStrip.tsx) — 128 lines — score 122 — primary path, path keyword: home dream
- [`components/home/dream.widget.DreamWidget.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.widget.DreamWidget.tsx) — 117 lines — score 122 — primary path, path keyword: home dream
- [`components/home/dream.bar.GlobalDreamBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.bar.GlobalDreamBar.tsx) — 89 lines — score 122 — primary path, path keyword: home dream
- [`app/dreamdmbar/_components/HomeDreamRegion.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/HomeDreamRegion.tsx) — 493 lines — score 112 — primary path
- [`app/api/home-layout/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/home-layout/route.ts) — 109 lines — score 63 — supporting path
- [`components/dream.HomeFeed.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.HomeFeed.tsx) — 1366 lines — score 59 — supporting path
- [`components/dream.FeedCard.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.FeedCard.tsx) — 474 lines — score 55 — supporting path

Supporting files:
- None found.
## 15. DreamSpace

### Plain English
DreamSpace is the workspace/canvas layer where DayDream surfaces, Engins, regions, runtime shells, and user-created windows become one creative environment.

### What users experience
Users experience DreamSpace as the place where they arrange, open, move through, and work inside creative surfaces rather than just clicking normal web pages.

### Repo Evidence
Matched focused repo evidence: 59 files, about 18,742 readable source lines.

Behavior signals:
- commerce — 37 file hits
- auth — 35 file hits
- state — 29 file hits
- mobile touch — 28 file hits
- persistence — 23 file hits
- runtime — 17 file hits
- events — 13 file hits
- rendering — 13 file hits

Routes and APIs:
- /dreamdmbar/dreamspace ← [`app/dreamdmbar/dreamspace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dreamspace/page.tsx)
- /dreamspace ← [`app/dreamspace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamspace/page.tsx)
- /daydream/games ← [`app/daydream/games/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/games/page.tsx)
- /daydream/music ← [`app/daydream/music/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/music/page.tsx)
- /daydream/code ← [`app/daydream/code/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/code/page.tsx)
- /daydream/lab ← [`app/daydream/lab/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/lab/page.tsx)
- /daydream/forge ← [`app/daydream/forge/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/forge/page.tsx)
- /daydream/music/upload ← [`app/daydream/music/upload/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/music/upload/page.tsx)
- /daydream/lab/portfolio ← [`app/daydream/lab/portfolio/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/lab/portfolio/page.tsx)
- /daydream/create ← [`app/daydream/create/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/create/page.tsx)
- /daydream/brand ← [`app/daydream/brand/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/brand/page.tsx)
- /daydream/game ← [`app/daydream/game/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/game/page.tsx)
- /daydream/games/engin ← [`app/daydream/games/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/games/engin/page.tsx)
- /daydream/constellation ← [`app/daydream/constellation/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/constellation/page.tsx)
- /daydream/media-vault ← [`app/daydream/media-vault/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/media-vault/page.tsx)
- /daydream/play ← [`app/daydream/play/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/play/page.tsx)

Components:
- DreamDMBarDreamSpacePage — [`app/dreamdmbar/dreamspace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dreamspace/page.tsx)
- DreamSpacePage — [`app/dreamspace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamspace/page.tsx)
- AppIcon — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- EngineBarChart — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- DreamsSpacePanel — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- ProfileSpace — [`components/spatial/dream.ProfileSpace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/spatial/dream.ProfileSpace.tsx)
- EmptyProfileState — [`components/spatial/dream.ProfileSpace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/spatial/dream.ProfileSpace.tsx)
- WidgetRenderer — [`components/spatial/dream.ProfileSpace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/spatial/dream.ProfileSpace.tsx)
- GalleryWidget — [`components/spatial/dream.ProfileSpace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/spatial/dream.ProfileSpace.tsx)
- BlankWidget — [`components/spatial/dream.ProfileSpace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/spatial/dream.ProfileSpace.tsx)
- MediaWidget — [`components/spatial/dream.ProfileSpace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/spatial/dream.ProfileSpace.tsx)
- TextWidget — [`components/spatial/dream.ProfileSpace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/spatial/dream.ProfileSpace.tsx)
- ProfileInfoWidget — [`components/spatial/dream.ProfileSpace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/spatial/dream.ProfileSpace.tsx)
- LinkTreeWidget — [`components/spatial/dream.ProfileSpace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/spatial/dream.ProfileSpace.tsx)

Hooks:
- useDualRuntime — [`app/dreamdmbar/dreamspace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dreamspace/page.tsx)
- useDreamSystem — [`app/dreamdmbar/dreamspace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dreamspace/page.tsx)
- useEffect — [`app/dreamdmbar/dreamspace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dreamspace/page.tsx)
- useDreamsRuntime — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- useSessionIntelligence — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- useRouter — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- useCallback — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- useEffect — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- useRef — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- useState — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- useContent — [`components/spatial/dream.ProfileSpace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/spatial/dream.ProfileSpace.tsx)
- useWidgets — [`components/spatial/dream.ProfileSpace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/spatial/dream.ProfileSpace.tsx)
- useCallback — [`components/spatial/dream.ProfileSpace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/spatial/dream.ProfileSpace.tsx)
- useEffect — [`components/spatial/dream.ProfileSpace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/spatial/dream.ProfileSpace.tsx)

Exports that define public behavior:
- default export — page (app/dreamdmbar/dreamspace/page.tsx)
- default export — page (app/dreamspace/page.tsx)
- getAppRoute — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- RecentDestination — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- buildRecentDestinations — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- default export — dreamsurface.dreamspace (components/dreams/dreamsurface.dreamspace.tsx)
- default export — dream.ProfileSpace (components/spatial/dream.ProfileSpace.tsx)
- default export — dream.shell.EnhancedSpatialShell (components/spatial/dream.shell.EnhancedSpatialShell.tsx)
- PixiPhysicsLayerProps — [`components/spatial/dream.PixiPhysicsLayer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/spatial/dream.PixiPhysicsLayer.tsx)
- default export — dream.PixiPhysicsLayer (components/spatial/dream.PixiPhysicsLayer.tsx)
- metadata — [`app/daydream/games/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/games/page.tsx)
- default export — page (app/daydream/games/page.tsx)
- metadata — [`app/daydream/music/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/music/page.tsx)
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
- [`app/dreamdmbar/dreamspace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/dreamspace/page.tsx) — 19 lines — score 134 — primary path, path keyword: dreamspace
- [`app/dreamspace/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamspace/page.tsx) — 8 lines — score 134 — primary path, path keyword: dreamspace
- [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx) — 861 lines — score 130 — primary path, path keyword: dreamspace
- [`components/spatial/dream.ProfileSpace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/spatial/dream.ProfileSpace.tsx) — 822 lines — score 126 — primary path, path keyword: spatial
- [`components/spatial/dream.shell.EnhancedSpatialShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/spatial/dream.shell.EnhancedSpatialShell.tsx) — 200 lines — score 126 — primary path, path keyword: spatial
- [`components/spatial/dream.PixiPhysicsLayer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/spatial/dream.PixiPhysicsLayer.tsx) — 149 lines — score 122 — primary path, path keyword: spatial
- [`app/daydream/games/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/games/page.tsx) — 365 lines — score 112 — primary path
- [`app/daydream/music/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/music/page.tsx) — 87 lines — score 112 — primary path
- [`app/daydream/code/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/code/page.tsx) — 1118 lines — score 108 — primary path
- [`app/daydream/lab/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/lab/page.tsx) — 1062 lines — score 108 — primary path
- [`app/dreamdmbar/_components/DreamSpaceRegion.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/dreamdmbar/_components/DreamSpaceRegion.tsx) — 465 lines — score 108 — primary path
- [`app/daydream/forge/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/forge/page.tsx) — 348 lines — score 108 — primary path
- [`app/daydream/music/upload/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/music/upload/page.tsx) — 210 lines — score 108 — primary path
- [`app/daydream/lab/portfolio/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/lab/portfolio/page.tsx) — 189 lines — score 108 — primary path
- [`app/daydream/create/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/create/page.tsx) — 107 lines — score 108 — primary path
- [`app/daydream/brand/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/brand/page.tsx) — 62 lines — score 108 — primary path
- [`app/daydream/game/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/game/page.tsx) — 31 lines — score 108 — primary path
- [`app/daydream/games/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/games/engin/page.tsx) — 30 lines — score 108 — primary path
- [`app/daydream/constellation/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/constellation/page.tsx) — 26 lines — score 108 — primary path
- [`app/daydream/media-vault/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/media-vault/page.tsx) — 15 lines — score 108 — primary path
- [`app/daydream/play/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/play/page.tsx) — 13 lines — score 108 — primary path
- [`app/daydream/brand/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/brand/engin/page.tsx) — 11 lines — score 108 — primary path
- [`app/daydream/code/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/code/engin/page.tsx) — 11 lines — score 108 — primary path
- [`app/daydream/create/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/create/engin/page.tsx) — 11 lines — score 108 — primary path
- [`app/daydream/lab/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/lab/engin/page.tsx) — 11 lines — score 108 — primary path
- [`app/daydream/music/engin/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/music/engin/page.tsx) — 11 lines — score 108 — primary path
- [`app/daydream/render/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/render/page.tsx) — 10 lines — score 108 — primary path
- [`components/daydream/dream.CodeDreamIDE.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.CodeDreamIDE.tsx) — 1695 lines — score 104 — primary path
- [`coresurfaces/home/buttons/contextual-home.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/coresurfaces/home/buttons/contextual-home.ts) — 45 lines — score 104 — primary path
- [`components/daydream/dream.LabDreamIDE.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.LabDreamIDE.tsx) — 1281 lines — score 100 — primary path
- [`components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx) — 661 lines — score 100 — primary path
- [`components/daydream/dreamsurface.daydream.BrandDaydream.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dreamsurface.daydream.BrandDaydream.tsx) — 657 lines — score 100 — primary path
- [`components/daydream/dream.NGNEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.NGNEngin.tsx) — 586 lines — score 100 — primary path
- [`daydreams/code/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/daydreams/code/page.tsx) — 545 lines — score 100 — primary path

Supporting files:
- [`coresurfaces/dreamsurface.EditProfileDream.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/coresurfaces/dreamsurface.EditProfileDream.tsx) — 527 lines — score 100 — primary path
- [`daydreams/lab/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/daydreams/lab/page.tsx) — 486 lines — score 100 — primary path
- [`daydreams/create/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/daydreams/create/page.tsx) — 456 lines — score 100 — primary path
- [`components/daydream/dream.shell.DaydreamShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.shell.DaydreamShell.tsx) — 451 lines — score 100 — primary path
- [`components/daydream/starmaker/dream.panel.SessionViewPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/starmaker/dream.panel.SessionViewPanel.tsx) — 444 lines — score 100 — primary path
- [`daydreams/music/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/daydreams/music/page.tsx) — 393 lines — score 100 — primary path
- [`components/daydream/dream.JourneyTrail.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.JourneyTrail.tsx) — 367 lines — score 100 — primary path
- [`components/daydream/starmaker/dream.panel.PianoRollPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/starmaker/dream.panel.PianoRollPanel.tsx) — 366 lines — score 100 — primary path
- [`daydreams/games/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/daydreams/games/page.tsx) — 356 lines — score 100 — primary path
- [`components/daydream/dream.constellationmap.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.constellationmap.tsx) — 346 lines — score 100 — primary path
- [`components/daydream/dream.DiffViewer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.DiffViewer.tsx) — 342 lines — score 100 — primary path
- [`coresurfaces/dreamsurface.ViewProfile.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/coresurfaces/dreamsurface.ViewProfile.tsx) — 340 lines — score 100 — primary path
- [`components/daydream/starmaker/dream.panel.CompingPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/starmaker/dream.panel.CompingPanel.tsx) — 337 lines — score 100 — primary path
- [`app/daydream/game/dream.shell.ImmersiveGameShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/game/dream.shell.ImmersiveGameShell.tsx) — 310 lines — score 100 — primary path
- [`app/daydream/constellation/dream.ConstellationClient.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/constellation/dream.ConstellationClient.tsx) — 114 lines — score 100 — primary path
- [`daydreams/shared/useDaydreamPersistence.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/daydreams/shared/useDaydreamPersistence.ts) — 98 lines — score 100 — primary path
- [`coresurfaces/home/buttons/button-groups.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/coresurfaces/home/buttons/button-groups.ts) — 91 lines — score 100 — primary path
- [`daydreams/shared/useDaydreamState.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/daydreams/shared/useDaydreamState.ts) — 81 lines — score 100 — primary path
- [`daydreams/brand/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/daydreams/brand/page.tsx) — 57 lines — score 100 — primary path
- [`components/daydream/dream.StandaloneEnginSurface.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.StandaloneEnginSurface.tsx) — 38 lines — score 100 — primary path
- [`components/daydream/dream.OpenDaydreamSideBButton.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/daydream/dream.OpenDaydreamSideBButton.tsx) — 19 lines — score 100 — primary path
- [`app/daydream/game/dream.GamePageClient.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/daydream/game/dream.GamePageClient.tsx) — 5 lines — score 100 — primary path
- [`components/runtime/dream.RuntimeView.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.RuntimeView.tsx) — 439 lines — score 63 — supporting path
- [`components/runtime/dream.DualRuntimeContainer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.DualRuntimeContainer.tsx) — 235 lines — score 59 — supporting path
- [`components/runtime/dream.shell.RuntimeShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.shell.RuntimeShell.tsx) — 322 lines — score 55 — supporting path
## 16. Dreams (Widgets / Windows / Surfaces)

### Plain English
Dreams, widgets, windows, and surfaces are the visible objects users manipulate. This section maps the components and runtime support that make them openable, stateful, movable, and connected to Engins.

### What users experience
Users feel this as cards, panels, windows, widgets, surface launches, and interactive objects that turn the product into a creative operating system rather than a static website.

### Repo Evidence
Matched focused repo evidence: 52 files, about 7,521 readable source lines.

Behavior signals:
- commerce — 25 file hits
- state — 22 file hits
- mobile touch — 18 file hits
- auth — 14 file hits
- runtime — 12 file hits
- events — 11 file hits
- persistence — 2 file hits
- rendering — 2 file hits

Routes and APIs:
- GET|PATCH|DELETE /api/dream-windows/[id] ← [`app/api/dream-windows/[id]/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dream-windows/%5Bid%5D/route.ts)
- GET|POST /api/dream-windows ← [`app/api/dream-windows/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dream-windows/route.ts)
- /settings/dreams ← [`app/settings/dreams/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/dreams/page.tsx)
- /settings/widgets ← [`app/settings/widgets/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/widgets/page.tsx)

Components:
- DreamWindowTile — [`components/dreams/dream.widget.SuperDreamWidget.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.widget.SuperDreamWidget.tsx)
- ClusterCard — [`components/dreams/dream.widget.SuperDreamWidget.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.widget.SuperDreamWidget.tsx)
- SuperDreamWidget — [`components/dreams/dream.widget.SuperDreamWidget.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.widget.SuperDreamWidget.tsx)
- AppIcon — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- EngineBarChart — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- DreamsSpacePanel — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- SkeletonRow — [`components/dreams/dreamsurface.shell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.shell.tsx)
- DreamShell — [`components/dreams/dreamsurface.shell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.shell.tsx)
- UniversalWidget — [`components/widgets/dream.widget.UniversalWidget.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/widgets/dream.widget.UniversalWidget.tsx)
- PlayMediaWidget — [`components/widgets/dream.widget.PlayMediaWidget.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/widgets/dream.widget.PlayMediaWidget.tsx)
- WidgetBubble — [`components/dream.widget.WidgetBubble.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.widget.WidgetBubble.tsx)
- ProfileWidgetBlock — [`components/dream.widget.ProfileWidgetBlock.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.widget.ProfileWidgetBlock.tsx)
- JourneyDreamWindow — [`components/dreams/dream.window.JourneyDreamWindow.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.window.JourneyDreamWindow.tsx)
- WidgetCard — [`components/widgets/dream.widget.WidgetCard.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/widgets/dream.widget.WidgetCard.tsx)

Hooks:
- useDreamWindowActions — [`components/dreams/dream.widget.SuperDreamWidget.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.widget.SuperDreamWidget.tsx)
- useCallback — [`components/dreams/dream.widget.SuperDreamWidget.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.widget.SuperDreamWidget.tsx)
- useMemo — [`components/dreams/dream.widget.SuperDreamWidget.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.widget.SuperDreamWidget.tsx)
- useState — [`components/dreams/dream.widget.SuperDreamWidget.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.widget.SuperDreamWidget.tsx)
- useDreamsRuntime — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- useSessionIntelligence — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- useRouter — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- useCallback — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- useEffect — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- useRef — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- useState — [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx)
- useEffect — [`components/dreams/dreamsurface.shell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.shell.tsx)
- useRef — [`components/dreams/dreamsurface.shell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.shell.tsx)
- useState — [`components/dreams/dreamsurface.shell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.shell.tsx)

Exports that define public behavior:
- SuperDreamWidgetProps — [`components/dreams/dream.widget.SuperDreamWidget.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.widget.SuperDreamWidget.tsx)
- default export — dream.widget.SuperDreamWidget (components/dreams/dream.widget.SuperDreamWidget.tsx)
- DreamSurface — [`types/widget-system-v2.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/widget-system-v2.ts)
- DreamSurfaceKey — [`types/widget-system-v2.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/widget-system-v2.ts)
- WidgetTransform — [`types/widget-system-v2.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/widget-system-v2.ts)
- transformToArray — [`types/widget-system-v2.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/widget-system-v2.ts)
- transformFromArray — [`types/widget-system-v2.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/widget-system-v2.ts)
- FeedHostConfig — [`types/widget-system-v2.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/widget-system-v2.ts)
- CompositePane — [`types/widget-system-v2.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/widget-system-v2.ts)
- CompositeHostConfig — [`types/widget-system-v2.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/widget-system-v2.ts)
- HostConfig — [`types/widget-system-v2.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/widget-system-v2.ts)
- DreamDefinition — [`types/widget-system-v2.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/widget-system-v2.ts)
- DreamInstance — [`types/widget-system-v2.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/widget-system-v2.ts)
- WidgetDefinition — [`types/widget-system-v2.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/widget-system-v2.ts)

Import/export connections:
- engine/dream-window/DreamWindowLifecycle
- engine/dream-window/useDreamWindowActions
- types/dream-window
- react
- supabase/server/serverClient
- supabase/client/safeGetUser
- @supabase/supabase-js
- next/server
- utils/index
- app/dreamdmbar/_components/DreamSpaceRegion
- components/home/dream.ActiveModuleSurface
- components/spatial/dream.ProfileSpace
- components/widgets/dream.widget.UniversalWidget
- engine/dreams/useDreamsRuntime

### Matched Files

Primary files:
- [`components/dreams/dream.widget.SuperDreamWidget.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.widget.SuperDreamWidget.tsx) — 354 lines — score 134 — primary path, path keyword: widget
- [`app/api/dream-windows/[id]/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dream-windows/%5Bid%5D/route.ts) — 250 lines — score 134 — primary path, path keyword: dream window
- [`app/api/dream-windows/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dream-windows/route.ts) — 144 lines — score 134 — primary path, path keyword: dream window
- [`types/widget-system-v2.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/widget-system-v2.ts) — 362 lines — score 130 — primary path, path keyword: widget
- [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx) — 861 lines — score 126 — primary path, path keyword: dreamsurface
- [`components/dreams/dreamsurface.shell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.shell.tsx) — 258 lines — score 126 — primary path, path keyword: dreamsurface
- [`engine/dream-window/useDreamWindowActions.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/dream-window/useDreamWindowActions.ts) — 250 lines — score 126 — primary path, path keyword: dream window
- [`components/widgets/dream.widget.UniversalWidget.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/widgets/dream.widget.UniversalWidget.tsx) — 230 lines — score 126 — primary path, path keyword: widget
- [`engine/dream-window/DreamWindowLifecycle.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/dream-window/DreamWindowLifecycle.ts) — 191 lines — score 126 — primary path, path keyword: dream window
- [`engine/dream-window/runtimeRegion.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/dream-window/runtimeRegion.ts) — 171 lines — score 126 — primary path, path keyword: dream window
- [`engine/dream-window/enginConnectionNetwork.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/dream-window/enginConnectionNetwork.ts) — 156 lines — score 126 — primary path, path keyword: dream window
- [`components/widgets/dream.widget.PlayMediaWidget.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/widgets/dream.widget.PlayMediaWidget.tsx) — 152 lines — score 126 — primary path, path keyword: widget
- [`components/dream.widget.WidgetBubble.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.widget.WidgetBubble.tsx) — 112 lines — score 126 — primary path, path keyword: widget
- [`components/dream.widget.ProfileWidgetBlock.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.widget.ProfileWidgetBlock.tsx) — 102 lines — score 126 — primary path, path keyword: widget
- [`types/dream-window.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/dream-window.ts) — 71 lines — score 126 — primary path, path keyword: dream window
- [`components/dreams/dream.window.JourneyDreamWindow.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.window.JourneyDreamWindow.tsx) — 47 lines — score 126 — primary path, path keyword: dream window
- [`components/widgets/dream.widget.WidgetCard.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/widgets/dream.widget.WidgetCard.tsx) — 47 lines — score 126 — primary path, path keyword: widget
- [`engine/dream-window/index.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/dream-window/index.ts) — 33 lines — score 126 — primary path, path keyword: dream window
- [`components/widgets/dream.widget.WidgetShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/widgets/dream.widget.WidgetShell.tsx) — 9 lines — score 126 — primary path, path keyword: widget
- [`components/widgets/dream.widget.WidgetLibrary.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/widgets/dream.widget.WidgetLibrary.tsx) — 7 lines — score 126 — primary path, path keyword: widget
- [`components/widgets/dream.widget.WidgetSurface.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/widgets/dream.widget.WidgetSurface.tsx) — 7 lines — score 126 — primary path, path keyword: widget
- [`components/dream.widget.AnchorWidget.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.widget.AnchorWidget.tsx) — 279 lines — score 122 — primary path, path keyword: widget
- [`engine/dream-window/connectionVerbs.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/dream-window/connectionVerbs.ts) — 142 lines — score 122 — primary path, path keyword: dream window
- [`components/widgets/dream.widget.WidgetPlaceholder.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/widgets/dream.widget.WidgetPlaceholder.tsx) — 106 lines — score 122 — primary path, path keyword: widget
- [`components/dreams/dreamsurface.window.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.window.tsx) — 54 lines — score 122 — primary path, path keyword: dreamsurface
- [`engine/dreams/types.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/dreams/types.ts) — 414 lines — score 112 — primary path
- [`app/settings/dreams/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/dreams/page.tsx) — 40 lines — score 112 — primary path
- [`app/settings/widgets/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/widgets/page.tsx) — 40 lines — score 112 — primary path
- [`app/settings/dreams/dreams-layout-editor.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/dreams/dreams-layout-editor.tsx) — 83 lines — score 108 — primary path
- [`components/widgets/dream.ConfigureSheet.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/widgets/dream.ConfigureSheet.tsx) — 160 lines — score 104 — primary path
- [`types/widgets.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/widgets.ts) — 155 lines — score 104 — primary path
- [`components/dreams/dream.DraggableDream.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.DraggableDream.tsx) — 75 lines — score 104 — primary path
- [`engine/dreams/drag.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/dreams/drag.ts) — 65 lines — score 104 — primary path
- [`components/widgets/dream.AddDreamCTA.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/widgets/dream.AddDreamCTA.tsx) — 63 lines — score 104 — primary path

Supporting files:
- [`components/dreams/dream.SlideOverPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.SlideOverPanel.tsx) — 50 lines — score 104 — primary path
- [`components/dreams/dream.shell.DreamShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.shell.DreamShell.tsx) — 5 lines — score 104 — primary path
- [`components/dreams/dream.shell.SharedDreamShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.shell.SharedDreamShell.tsx) — 389 lines — score 100 — primary path
- [`engine/dreams/dreamIntentBus.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/dreams/dreamIntentBus.ts) — 178 lines — score 100 — primary path
- [`components/dream.DragToAnchorClose.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.DragToAnchorClose.tsx) — 159 lines — score 100 — primary path
- [`components/dreams/dream.panel.RuntimeMemoryHUD.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.panel.RuntimeMemoryHUD.tsx) — 144 lines — score 100 — primary path
- [`engine/dreams/DreamRegistry.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/dreams/DreamRegistry.tsx) — 119 lines — score 100 — primary path
- [`components/dreams/dream.GlobalDragLayer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.GlobalDragLayer.tsx) — 97 lines — score 100 — primary path
- [`types/widgetConfigs.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/widgetConfigs.ts) — 95 lines — score 100 — primary path
- [`engine/dreams/useDreamsRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/dreams/useDreamsRuntime.ts) — 92 lines — score 100 — primary path
- [`components/widgets/dream.EditModeBanner.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/widgets/dream.EditModeBanner.tsx) — 55 lines — score 100 — primary path
- [`components/widgets/dream.EditModeProvider.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/widgets/dream.EditModeProvider.tsx) — 35 lines — score 100 — primary path
- [`components/dreams/dream.outputlayer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.outputlayer.tsx) — 33 lines — score 100 — primary path
- [`components/dreams/dream.connectorlayer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.connectorlayer.tsx) — 31 lines — score 100 — primary path
- [`engine/dreams/profileProjection.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/dreams/profileProjection.ts) — 28 lines — score 100 — primary path
- [`components/dreams/dream.PlatformErrorReporter.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.PlatformErrorReporter.tsx) — 25 lines — score 100 — primary path
- [`components/dreams/dream.featurelayer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.featurelayer.tsx) — 22 lines — score 100 — primary path
- [`components/dream.FeedCard.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.FeedCard.tsx) — 474 lines — score 59 — supporting path
## 17. User-Facing Modularity

### Plain English
User-facing modularity is the part of DREAMengin that lets features feel composable to people: launchable modules, reusable panels, shared shells, configurable surfaces, and modules that can move between contexts.

### What users experience
Users feel modularity when they can open a tool from more than one place, carry state across a surface, combine Engins, and customize the product without waiting for a fixed page.

### Repo Evidence
Matched focused repo evidence: 45 files, about 6,718 readable source lines.

Behavior signals:
- commerce — 29 file hits
- state — 24 file hits
- runtime — 23 file hits
- mobile touch — 23 file hits
- events — 14 file hits
- auth — 13 file hits
- persistence — 11 file hits
- rendering — 4 file hits

Routes and APIs:
- None found.

Components:
- SettingsPanel — [`components/panels/dream.panel.SettingsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.SettingsPanel.tsx)
- HelpPanel — [`components/panels/dream.panel.HelpPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.HelpPanel.tsx)
- ProfilePanel — [`components/panels/dream.panel.ProfilePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.ProfilePanel.tsx)
- Toggle — [`components/panels/dream.panel.FeedSettingsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.FeedSettingsPanel.tsx)
- FeedSettingsPanel — [`components/panels/dream.panel.FeedSettingsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.FeedSettingsPanel.tsx)
- GradientThemePicker — [`components/panels/dream.panel.AppearancePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.AppearancePanel.tsx)
- Slider — [`components/panels/dream.panel.AppearancePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.AppearancePanel.tsx)
- PresetCard — [`components/panels/dream.panel.AppearancePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.AppearancePanel.tsx)
- AppearancePanel — [`components/panels/dream.panel.AppearancePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.AppearancePanel.tsx)
- Toggle — [`components/panels/dream.panel.PrivacyPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.PrivacyPanel.tsx)
- PrivacyPanel — [`components/panels/dream.panel.PrivacyPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.PrivacyPanel.tsx)
- MarketplacePanel — [`components/panels/dream.panel.MarketplacePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.MarketplacePanel.tsx)
- DataPanel — [`components/panels/dream.panel.DataPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.DataPanel.tsx)
- WidgetsPanel — [`components/panels/dream.panel.WidgetsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.WidgetsPanel.tsx)

Hooks:
- useDreamSystem — [`components/panels/dream.panel.SettingsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.SettingsPanel.tsx)
- useEffect — [`components/panels/dream.panel.SettingsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.SettingsPanel.tsx)
- useState — [`components/panels/dream.panel.SettingsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.SettingsPanel.tsx)
- useDreamSystem — [`components/panels/dream.panel.HelpPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.HelpPanel.tsx)
- useCallback — [`components/panels/dream.panel.ProfilePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.ProfilePanel.tsx)
- useEffect — [`components/panels/dream.panel.ProfilePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.ProfilePanel.tsx)
- useRef — [`components/panels/dream.panel.ProfilePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.ProfilePanel.tsx)
- useState — [`components/panels/dream.panel.ProfilePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.ProfilePanel.tsx)
- useCallback — [`components/panels/dream.panel.FeedSettingsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.FeedSettingsPanel.tsx)
- useEffect — [`components/panels/dream.panel.FeedSettingsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.FeedSettingsPanel.tsx)
- useState — [`components/panels/dream.panel.FeedSettingsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.FeedSettingsPanel.tsx)
- useTheme — [`components/panels/dream.panel.AppearancePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.AppearancePanel.tsx)
- useDreamSystem — [`components/panels/dream.panel.AppearancePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.AppearancePanel.tsx)
- useCustomizeMode — [`components/panels/dream.panel.AppearancePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.AppearancePanel.tsx)

Exports that define public behavior:
- RuntimeId — [`types/module-manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/module-manifest.ts)
- ModuleType — [`types/module-manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/module-manifest.ts)
- ModuleManifest — [`types/module-manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/module-manifest.ts)
- RuntimeCompatibility — [`types/module-manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/module-manifest.ts)
- ModuleCompatibility — [`types/module-manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/module-manifest.ts)
- isModuleManifest — [`types/module-manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/module-manifest.ts)
- negotiateModuleCompatibility — [`types/module-manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/module-manifest.ts)
- default export — dream.panel.SettingsPanel (components/panels/dream.panel.SettingsPanel.tsx)
- default export — dream.panel.HelpPanel (components/panels/dream.panel.HelpPanel.tsx)
- default export — dream.panel.ProfilePanel (components/panels/dream.panel.ProfilePanel.tsx)
- default export — dream.panel.FeedSettingsPanel (components/panels/dream.panel.FeedSettingsPanel.tsx)
- default export — dream.panel.AppearancePanel (components/panels/dream.panel.AppearancePanel.tsx)
- default export — dream.panel.PrivacyPanel (components/panels/dream.panel.PrivacyPanel.tsx)
- default export — dream.panel.MarketplacePanel (components/panels/dream.panel.MarketplacePanel.tsx)

Import/export connections:
- engine/engin-runtime/EnginBaseState
- dreamdmbar/runtime/DreamSystemContext
- components/panels/panelTypes
- supabase/client/client
- supabase/client/safeGetUser
- lucide-react
- react
- components/panels/dream.panel.FeedSettingsPanel
- components/profile/dream.widget.ProfileWidgetGrid
- components/ui/dream.DreamWord
- dreamr/feed/feedTopics
- components/dream.ThemeApplicator
- components/providers/dream.ThemeProvider
- components/ui-system/CustomizeModeContext

### Matched Files

Primary files:
- [`types/module-manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/module-manifest.ts) — 164 lines — score 152 — primary path, path keyword: module
- [`components/panels/dream.panel.SettingsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.SettingsPanel.tsx) — 182 lines — score 126 — primary path, path keyword: panel
- [`components/panels/dream.panel.HelpPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.HelpPanel.tsx) — 67 lines — score 126 — primary path, path keyword: panel
- [`components/panels/dream.panel.FeedPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.FeedPanel.tsx) — 4 lines — score 126 — primary path, path keyword: panel
- [`components/panels/dream.panel.ProfilePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.ProfilePanel.tsx) — 334 lines — score 122 — primary path, path keyword: panel
- [`components/panels/dream.panel.FeedSettingsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.FeedSettingsPanel.tsx) — 189 lines — score 122 — primary path, path keyword: panel
- [`components/panels/dream.panel.AppearancePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.AppearancePanel.tsx) — 162 lines — score 122 — primary path, path keyword: panel
- [`components/panels/dream.panel.PrivacyPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.PrivacyPanel.tsx) — 142 lines — score 122 — primary path, path keyword: panel
- [`components/panels/dream.panel.MarketplacePanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.MarketplacePanel.tsx) — 136 lines — score 122 — primary path, path keyword: panel
- [`components/panels/dream.panel.DataPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.DataPanel.tsx) — 135 lines — score 122 — primary path, path keyword: panel
- [`components/panels/dream.panel.WidgetsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.WidgetsPanel.tsx) — 104 lines — score 122 — primary path, path keyword: panel
- [`components/panels/dream.panel.SafetyPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.SafetyPanel.tsx) — 98 lines — score 122 — primary path, path keyword: panel
- [`components/panels/dream.panel.ControlsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.ControlsPanel.tsx) — 86 lines — score 122 — primary path, path keyword: panel
- [`components/panels/dream.panel.ConnectorsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.ConnectorsPanel.tsx) — 45 lines — score 122 — primary path, path keyword: panel
- [`components/panels/dream.panel.AlgorithmPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/dream.panel.AlgorithmPanel.tsx) — 32 lines — score 122 — primary path, path keyword: panel
- [`components/runtime/dream.RuntimeView.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.RuntimeView.tsx) — 439 lines — score 108 — primary path
- [`engine/runtime/moduleRegistry.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/moduleRegistry.ts) — 143 lines — score 108 — primary path
- [`engine/runtime/dropTargetRegistry.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/dropTargetRegistry.ts) — 84 lines — score 108 — primary path
- [`components/home/dream.ActiveModuleSurface.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/home/dream.ActiveModuleSurface.tsx) — 479 lines — score 104 — primary path
- [`components/runtime/dream.shell.RuntimeShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.shell.RuntimeShell.tsx) — 322 lines — score 104 — primary path
- [`dreamdmbar/hooks/useModuleBarIntent.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/dreamdmbar/hooks/useModuleBarIntent.ts) — 48 lines — score 104 — primary path
- [`components/runtime/dream.DualRuntimeContainer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/runtime/dream.DualRuntimeContainer.tsx) — 235 lines — score 100 — primary path
- [`components/panels/panelTypes.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/panels/panelTypes.ts) — 41 lines — score 100 — primary path
- [`components/dreams/dream.panel.RuntimeMemoryHUD.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.panel.RuntimeMemoryHUD.tsx) — 144 lines — score 77 — supporting path, path keyword: panel
- [`components/draggable/dream.DraggableModule.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/draggable/dream.DraggableModule.tsx) — 338 lines — score 63 — supporting path
- [`components/dreams/dreamsurface.window.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.window.tsx) — 54 lines — score 63 — supporting path
- [`components/dreams/dream.SlideOverPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.SlideOverPanel.tsx) — 50 lines — score 59 — supporting path
- [`components/dreams/dreamsurface.dreamspace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.dreamspace.tsx) — 861 lines — score 55 — supporting path
- [`components/dreams/dream.shell.SharedDreamShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.shell.SharedDreamShell.tsx) — 389 lines — score 55 — supporting path
- [`components/dreams/dream.widget.SuperDreamWidget.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.widget.SuperDreamWidget.tsx) — 354 lines — score 55 — supporting path
- [`components/dreams/dreamsurface.shell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dreamsurface.shell.tsx) — 258 lines — score 55 — supporting path
- [`components/engines/shared/dream.shell.EnginAppShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/engines/shared/dream.shell.EnginAppShell.tsx) — 104 lines — score 55 — supporting path
- [`components/dreams/dream.GlobalDragLayer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.GlobalDragLayer.tsx) — 97 lines — score 55 — supporting path
- [`components/dreams/dream.DraggableDream.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.DraggableDream.tsx) — 75 lines — score 55 — supporting path

Supporting files:
- [`components/dreams/dream.window.JourneyDreamWindow.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.window.JourneyDreamWindow.tsx) — 47 lines — score 55 — supporting path
- [`components/engines/shared/dream.bar.EnginNavBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/engines/shared/dream.bar.EnginNavBar.tsx) — 46 lines — score 55 — supporting path
- [`components/engines/shared/dream.EnginProvider.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/engines/shared/dream.EnginProvider.tsx) — 44 lines — score 55 — supporting path
- [`components/engines/shared/dream.makeEnginApp.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/engines/shared/dream.makeEnginApp.tsx) — 34 lines — score 55 — supporting path
- [`components/dreams/dream.outputlayer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.outputlayer.tsx) — 33 lines — score 55 — supporting path
- [`components/dreams/dream.connectorlayer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.connectorlayer.tsx) — 31 lines — score 55 — supporting path
- [`components/engines/shared/dream.EnginRuleSet.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/engines/shared/dream.EnginRuleSet.ts) — 26 lines — score 55 — supporting path
- [`components/dreams/dream.PlatformErrorReporter.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.PlatformErrorReporter.tsx) — 25 lines — score 55 — supporting path
- [`components/dreams/dream.featurelayer.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.featurelayer.tsx) — 22 lines — score 55 — supporting path
- [`components/engines/shared/index.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/engines/shared/index.ts) — 10 lines — score 55 — supporting path
- [`components/dreams/dream.shell.DreamShell.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dreams/dream.shell.DreamShell.tsx) — 5 lines — score 55 — supporting path
## 18. Custom Engins

### Plain English
Custom Engins are the extension story: code, rules, manifests, registries, and capability boundaries that let DREAMengin grow by adding or composing new Engin behavior.

### What users experience
Users feel this when the product can add new studios, workflows, or creative capabilities without forcing a totally new app.

### Repo Evidence
Matched focused repo evidence: 80 files, about 13,544 readable source lines.

Behavior signals:
- persistence — 37 file hits
- runtime — 34 file hits
- auth — 32 file hits
- state — 27 file hits
- rendering — 17 file hits
- events — 12 file hits
- mobile touch — 6 file hits
- commerce — 6 file hits

Routes and APIs:
- /engines ← [`app/engines/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/page.tsx)
- /engines/games/builder ← [`app/engines/games/builder/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/games/builder/page.tsx)
- /engines/games/library ← [`app/engines/games/library/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/games/library/page.tsx)
- /engines/games/scores ← [`app/engines/games/scores/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/games/scores/page.tsx)
- /engines/code/notebook ← [`app/engines/code/notebook/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/code/notebook/page.tsx)
- /engines/music/arrange ← [`app/engines/music/arrange/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/music/arrange/page.tsx)
- /engines/music/library ← [`app/engines/music/library/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/music/library/page.tsx)
- /engines/music/studio ← [`app/engines/music/studio/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/music/studio/page.tsx)
- /engines/code/ai ← [`app/engines/code/ai/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/code/ai/page.tsx)
- /engines/code/projects ← [`app/engines/code/projects/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/code/projects/page.tsx)
- /engines/lab/data ← [`app/engines/lab/data/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/lab/data/page.tsx)
- /engines/lab/experiments ← [`app/engines/lab/experiments/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/lab/experiments/page.tsx)
- /engines/lab/quantum ← [`app/engines/lab/quantum/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/lab/quantum/page.tsx)
- /engines/portfolio/assets ← [`app/engines/portfolio/assets/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/portfolio/assets/page.tsx)
- /engines/portfolio/optimize ← [`app/engines/portfolio/optimize/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/portfolio/optimize/page.tsx)
- /engines/portfolio/quantum ← [`app/engines/portfolio/quantum/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/portfolio/quantum/page.tsx)

Components:
- EnginesHubPage — [`app/engines/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/page.tsx)
- GamesBuilderPage — [`app/engines/games/builder/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/games/builder/page.tsx)
- GamesLibraryPage — [`app/engines/games/library/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/games/library/page.tsx)
- GamesScoresPage — [`app/engines/games/scores/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/games/scores/page.tsx)
- CodeNotebookPage — [`app/engines/code/notebook/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/code/notebook/page.tsx)
- MusicArrangePage — [`app/engines/music/arrange/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/music/arrange/page.tsx)
- MusicLibraryPage — [`app/engines/music/library/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/music/library/page.tsx)
- MusicStudioPage — [`app/engines/music/studio/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/music/studio/page.tsx)
- CodeAIPage — [`app/engines/code/ai/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/code/ai/page.tsx)
- CodeProjectsPage — [`app/engines/code/projects/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/code/projects/page.tsx)
- LabDataPage — [`app/engines/lab/data/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/lab/data/page.tsx)
- LabExperimentsPage — [`app/engines/lab/experiments/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/lab/experiments/page.tsx)
- LabQuantumPage — [`app/engines/lab/quantum/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/lab/quantum/page.tsx)
- PortfolioAssetsPage — [`app/engines/portfolio/assets/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/portfolio/assets/page.tsx)

Hooks:
- useContext — [`engins/gameengin/cartridges/reactCartridge.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/cartridges/reactCartridge.ts)
- useGameEngineAPI — [`engins/gameengin/cartridges/reactCartridge.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/cartridges/reactCartridge.ts)
- useCallback — [`engins/forgeengin/forge/useForgeBuild.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/forgeengin/forge/useForgeBuild.ts)
- useRef — [`engins/forgeengin/forge/useForgeBuild.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/forgeengin/forge/useForgeBuild.ts)
- useState — [`engins/forgeengin/forge/useForgeBuild.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/forgeengin/forge/useForgeBuild.ts)
- useForgeBuild — [`engins/forgeengin/forge/useForgeBuild.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/forgeengin/forge/useForgeBuild.ts)
- useCallback — [`engins/rulesets/useEnginWorkflow.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/useEnginWorkflow.ts)
- useEffect — [`engins/rulesets/useEnginWorkflow.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/useEnginWorkflow.ts)
- useState — [`engins/rulesets/useEnginWorkflow.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/useEnginWorkflow.ts)
- useEnginWorkflow — [`engins/rulesets/useEnginWorkflow.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/useEnginWorkflow.ts)
- useCallback — [`engins/rulesets/game/useGameEnginRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/game/useGameEnginRuntime.ts)
- useEffect — [`engins/rulesets/game/useGameEnginRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/game/useGameEnginRuntime.ts)
- useRef — [`engins/rulesets/game/useGameEnginRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/game/useGameEnginRuntime.ts)
- useState — [`engins/rulesets/game/useGameEnginRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/game/useGameEnginRuntime.ts)

Exports that define public behavior:
- RuntimeId — [`types/module-manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/module-manifest.ts)
- ModuleType — [`types/module-manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/module-manifest.ts)
- ModuleManifest — [`types/module-manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/module-manifest.ts)
- RuntimeCompatibility — [`types/module-manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/module-manifest.ts)
- ModuleCompatibility — [`types/module-manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/module-manifest.ts)
- isModuleManifest — [`types/module-manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/module-manifest.ts)
- negotiateModuleCompatibility — [`types/module-manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/module-manifest.ts)
- CartridgeRenderMode — [`engins/gameengin/cartridges/manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/cartridges/manifest.ts)
- CartridgeAssetPolicy — [`engins/gameengin/cartridges/manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/cartridges/manifest.ts)
- CartridgeLaunchMetadata — [`engins/gameengin/cartridges/manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/cartridges/manifest.ts)
- CartridgeManifestEntry — [`engins/gameengin/cartridges/manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/cartridges/manifest.ts)
- getCartridgeManifest — [`engins/gameengin/cartridges/manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/cartridges/manifest.ts)
- getCartridgeCategories — [`engins/gameengin/cartridges/manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/cartridges/manifest.ts)
- ArtifactPermissionSchema — [`engins/forgeengin/enginpipe/artifact/manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/forgeengin/enginpipe/artifact/manifest.ts)

Import/export connections:
- engine/engin-runtime/EnginBaseState
- ../cartridge
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
- ./EnginPerformanceProbe

### Matched Files

Primary files:
- [`types/module-manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/module-manifest.ts) — 164 lines — score 126 — primary path, path keyword: manifest
- [`engins/gameengin/cartridges/manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/cartridges/manifest.ts) — 160 lines — score 126 — primary path, path keyword: manifest
- [`engins/forgeengin/enginpipe/artifact/manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/forgeengin/enginpipe/artifact/manifest.ts) — 103 lines — score 126 — primary path, path keyword: manifest
- [`engins/gameengin/cartridge-manifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/cartridge-manifest.ts) — 57 lines — score 122 — primary path, path keyword: manifest
- [`engine/engin-runtime/EnginRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/EnginRuntime.ts) — 1066 lines — score 112 — primary path
- [`engine/engin-runtime/EnginCapabilityTargets.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/EnginCapabilityTargets.ts) — 465 lines — score 108 — primary path
- [`engine/engin-runtime/EnginDomainCores.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/EnginDomainCores.ts) — 758 lines — score 104 — primary path
- [`engins/rulesets/code/codeEnginRuleSet.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/code/codeEnginRuleSet.ts) — 389 lines — score 104 — primary path
- [`engins/rulesets/game/gameEnginRuleSet.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/game/gameEnginRuleSet.ts) — 286 lines — score 104 — primary path
- [`engins/rulesets/music/starMakerEnginRuleSet.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/music/starMakerEnginRuleSet.ts) — 253 lines — score 104 — primary path
- [`engine/engin-runtime/EnginRuleSetContract.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/EnginRuleSetContract.ts) — 241 lines — score 104 — primary path
- [`engins/rulesets/brand/brandEnginRuleSet.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/brand/brandEnginRuleSet.ts) — 228 lines — score 104 — primary path
- [`engine/engin-runtime/index.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/index.ts) — 221 lines — score 104 — primary path
- [`engins/rulesets/lab/labEnginRuleSet.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/lab/labEnginRuleSet.ts) — 220 lines — score 104 — primary path
- [`engine/engin-runtime/EnginCapabilities.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/EnginCapabilities.ts) — 219 lines — score 104 — primary path
- [`engine/engin-runtime/PremiumRuntimeQuality.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/PremiumRuntimeQuality.ts) — 166 lines — score 104 — primary path
- [`engins/gameengin/cartridges/reactCartridge.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/cartridges/reactCartridge.ts) — 94 lines — score 104 — primary path
- [`engins/gameengin/cartridges/loaders.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/cartridges/loaders.ts) — 92 lines — score 104 — primary path
- [`engins/gameengin/cartridges/apiStubs.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/cartridges/apiStubs.ts) — 64 lines — score 104 — primary path
- [`engins/gameengin/assets/BundleManifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/assets/BundleManifest.ts) — 40 lines — score 104 — primary path
- [`engins/rulesets/content/contentEnginRuleSet.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/content/contentEnginRuleSet.ts) — 37 lines — score 104 — primary path
- [`engine/engin-runtime/EnginRuntimeRegistry.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/EnginRuntimeRegistry.ts) — 35 lines — score 104 — primary path
- [`engins/rulesets/forge/index.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/forge/index.ts) — 24 lines — score 104 — primary path
- [`engins/rulesets/code/index.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/code/index.ts) — 23 lines — score 104 — primary path
- [`engins/rulesets/dreams/index.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/dreams/index.ts) — 23 lines — score 104 — primary path
- [`engins/rulesets/game/declarative.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/game/declarative.ts) — 23 lines — score 104 — primary path
- [`engins/rulesets/lab/index.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/lab/index.ts) — 23 lines — score 104 — primary path
- [`engins/rulesets/music/index.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/music/index.ts) — 23 lines — score 104 — primary path
- [`engins/gameengin/cartridges/index.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/cartridges/index.ts) — 11 lines — score 104 — primary path
- [`engins/contentengin/pipeline/writeManifest.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/contentengin/pipeline/writeManifest.ts) — 4 lines — score 104 — primary path
- [`engine/engin-runtime/HotRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/HotRuntime.ts) — 1164 lines — score 100 — primary path
- [`engine/runtime/enginWorkflowRegistry.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/runtime/enginWorkflowRegistry.ts) — 553 lines — score 100 — primary path
- [`engins/forgeengin/forge/forgeIntelligence.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/forgeengin/forge/forgeIntelligence.ts) — 550 lines — score 100 — primary path
- [`engine/engin-runtime/EnginCapabilityExecution.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/EnginCapabilityExecution.ts) — 502 lines — score 100 — primary path

Supporting files:
- [`engine/engin-runtime/EnginBaseState.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/EnginBaseState.ts) — 475 lines — score 100 — primary path
- [`engins/forgeengin/forge/forgeRegistry.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/forgeengin/forge/forgeRegistry.ts) — 401 lines — score 100 — primary path
- [`engins/forgeengin/forge/forgeRituals.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/forgeengin/forge/forgeRituals.ts) — 346 lines — score 100 — primary path
- [`engins/forgeengin/forge/forgeNexus.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/forgeengin/forge/forgeNexus.ts) — 280 lines — score 100 — primary path
- [`engins/forgeengin/forge/forgeMomentum.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/forgeengin/forge/forgeMomentum.ts) — 258 lines — score 100 — primary path
- [`engins/rulesets/workflowEngine.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/workflowEngine.ts) — 235 lines — score 100 — primary path
- [`engins/forgeengin/forge/useForgeBuild.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/forgeengin/forge/useForgeBuild.ts) — 225 lines — score 100 — primary path
- [`engins/rulesets/useEnginWorkflow.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/useEnginWorkflow.ts) — 200 lines — score 100 — primary path
- [`engins/forgeengin/forge/engineForge.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/forgeengin/forge/engineForge.ts) — 197 lines — score 100 — primary path
- [`engins/forgeengin/forge/forgeBuild.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/forgeengin/forge/forgeBuild.ts) — 188 lines — score 100 — primary path
- [`engine/engin-runtime/EnginIOAdapter.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/EnginIOAdapter.ts) — 184 lines — score 100 — primary path
- [`engins/gameengin/cartridges/saveState.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/cartridges/saveState.ts) — 126 lines — score 100 — primary path
- [`engine/engin-runtime/EnginCapabilityScorecard.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/EnginCapabilityScorecard.ts) — 122 lines — score 100 — primary path
- [`engine/engin-runtime/EnginEventBus.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/EnginEventBus.ts) — 112 lines — score 100 — primary path
- [`engins/rulesets/game/useGameEnginRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/game/useGameEnginRuntime.ts) — 110 lines — score 100 — primary path
- [`engins/gameengin/cartridges/achievementEngine.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/gameengin/cartridges/achievementEngine.ts) — 104 lines — score 100 — primary path
- [`engins/rulesets/brand/useBrandEnginRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/brand/useBrandEnginRuntime.ts) — 100 lines — score 100 — primary path
- [`engins/rulesets/code/useCodeEnginRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/code/useCodeEnginRuntime.ts) — 100 lines — score 100 — primary path
- [`engins/rulesets/content/useContentEnginRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/content/useContentEnginRuntime.ts) — 100 lines — score 100 — primary path
- [`engins/rulesets/lab/useLabEnginRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/lab/useLabEnginRuntime.ts) — 100 lines — score 100 — primary path
- [`engins/rulesets/music/useStarMakerEnginRuntime.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/music/useStarMakerEnginRuntime.ts) — 100 lines — score 100 — primary path
- [`engine/engin-runtime/EnginHardwareCapabilities.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/EnginHardwareCapabilities.ts) — 96 lines — score 100 — primary path
- [`engine/engin-runtime/EnginPerformanceProbe.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/EnginPerformanceProbe.ts) — 94 lines — score 100 — primary path
- [`engine/engin-runtime/EnginSnapshotFingerprint.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/EnginSnapshotFingerprint.ts) — 84 lines — score 100 — primary path
- [`engine/engin-runtime/InternalMetrics.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/engin-runtime/InternalMetrics.ts) — 47 lines — score 100 — primary path
- [`engins/forgeengin/forge/useForgeActivity.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/forgeengin/forge/useForgeActivity.ts) — 44 lines — score 100 — primary path
- [`engins/rulesets/homedream/dream.homedream.physics.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/homedream/dream.homedream.physics.ts) — 36 lines — score 100 — primary path
- [`engins/rulesets/homedream/dream.homedream.transforms.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/rulesets/homedream/dream.homedream.transforms.ts) — 36 lines — score 100 — primary path
- [`app/engines/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/page.tsx) — 130 lines — score 63 — supporting path
- [`app/engines/games/builder/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/engines/games/builder/page.tsx) — 51 lines — score 63 — supporting path
## 19. Full Website Customizability

### Plain English
Full website customizability covers appearance, profile editing, brand surfaces, themes, layouts, public profiles, settings, and any code that lets users change how their site or identity looks.

### What users experience
Users experience this as profile editing, theme choices, brand customization, public pages, custom identity, and the ability to make DREAMengin feel like their own site.

### Repo Evidence
Matched focused repo evidence: 52 files, about 16,129 readable source lines.

Behavior signals:
- commerce — 36 file hits
- auth — 27 file hits
- persistence — 26 file hits
- mobile touch — 24 file hits
- state — 18 file hits
- events — 8 file hits
- runtime — 3 file hits
- rendering — 3 file hits

Routes and APIs:
- /settings/appearance ← [`app/settings/appearance/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/appearance/page.tsx)
- /view-profile ← [`app/view-profile/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/view-profile/page.tsx)
- /profile/[handle] ← [`app/profile/[handle]/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/profile/%5Bhandle%5D/page.tsx)
- /profile ← [`app/profile/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/profile/page.tsx)
- /settings ← [`app/settings/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/page.tsx)
- /settings/help ← [`app/settings/help/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/help/page.tsx)
- /edit-profiledream ← [`app/edit-profiledream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/edit-profiledream/page.tsx)
- /settings/account ← [`app/settings/account/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/account/page.tsx)
- /settings/security ← [`app/settings/security/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/security/page.tsx)
- /settings/notifications ← [`app/settings/notifications/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/notifications/page.tsx)
- /settings/safety ← [`app/settings/safety/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/safety/page.tsx)
- /settings/dreams ← [`app/settings/dreams/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/dreams/page.tsx)
- /settings/widgets ← [`app/settings/widgets/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/widgets/page.tsx)
- /settings/algorithm ← [`app/settings/algorithm/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/algorithm/page.tsx)
- /settings/controls ← [`app/settings/controls/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/controls/page.tsx)
- /settings/data ← [`app/settings/data/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/data/page.tsx)

Components:
- VoidThemeSection — [`app/settings/appearance/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/appearance/page.tsx)
- GradientThemePicker — [`app/settings/appearance/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/appearance/page.tsx)
- Slider — [`app/settings/appearance/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/appearance/page.tsx)
- PresetCard — [`app/settings/appearance/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/appearance/page.tsx)
- BgImageSection — [`app/settings/appearance/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/appearance/page.tsx)
- AppearanceSettingsPage — [`app/settings/appearance/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/appearance/page.tsx)
- ViewProfilePage — [`app/view-profile/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/view-profile/page.tsx)
- ProfilePage — [`app/profile/[handle]/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/profile/%5Bhandle%5D/page.tsx)
- ProfileCustomizeButton — [`components/profile/dream.ProfileCustomizeButton.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.ProfileCustomizeButton.tsx)
- DotGrid — [`components/profile/dream.widget.ProfileWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.widget.ProfileWidgetGrid.tsx)
- SparkLine — [`components/profile/dream.widget.ProfileWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.widget.ProfileWidgetGrid.tsx)
- BarChart — [`components/profile/dream.widget.ProfileWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.widget.ProfileWidgetGrid.tsx)
- WidgetConfigSheet — [`components/profile/dream.widget.ProfileWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.widget.ProfileWidgetGrid.tsx)
- ConnectorSourcedWidget — [`components/profile/dream.widget.ProfileWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.widget.ProfileWidgetGrid.tsx)

Hooks:
- useTheme — [`app/settings/appearance/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/appearance/page.tsx)
- useCustomizeMode — [`app/settings/appearance/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/appearance/page.tsx)
- useCallback — [`app/settings/appearance/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/appearance/page.tsx)
- useEffect — [`app/settings/appearance/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/appearance/page.tsx)
- useRef — [`app/settings/appearance/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/appearance/page.tsx)
- useState — [`app/settings/appearance/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/appearance/page.tsx)
- useCustomizeMode — [`components/profile/dream.ProfileCustomizeButton.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.ProfileCustomizeButton.tsx)
- useRef — [`components/profile/dream.widget.ProfileWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.widget.ProfileWidgetGrid.tsx)
- useState — [`components/profile/dream.widget.ProfileWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.widget.ProfileWidgetGrid.tsx)
- useCallback — [`components/profile/dream.ProfileCanvas.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.ProfileCanvas.tsx)
- useState — [`components/profile/dream.ProfileCanvas.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.ProfileCanvas.tsx)
- useRouter — [`components/profile/dream.EditableAvatar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.EditableAvatar.tsx)
- useSharedDream — [`engins/engin.BrandingEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.BrandingEngin.tsx)
- useDaydreamPersistence — [`engins/engin.BrandingEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.BrandingEngin.tsx)

Exports that define public behavior:
- default export — page (app/settings/appearance/page.tsx)
- metadata — [`app/view-profile/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/view-profile/page.tsx)
- default export — page (app/view-profile/page.tsx)
- default export — page (app/profile/[handle]/page.tsx)
- default export — dream.ProfileCustomizeButton (components/profile/dream.ProfileCustomizeButton.tsx)
- WidgetType — [`components/profile/dream.widget.ProfileWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.widget.ProfileWidgetGrid.tsx)
- WidgetSize — [`components/profile/dream.widget.ProfileWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.widget.ProfileWidgetGrid.tsx)
- WidgetBgStyle — [`components/profile/dream.widget.ProfileWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.widget.ProfileWidgetGrid.tsx)
- WidgetConfig — [`components/profile/dream.widget.ProfileWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.widget.ProfileWidgetGrid.tsx)
- Widget — [`components/profile/dream.widget.ProfileWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.widget.ProfileWidgetGrid.tsx)
- DreamType — [`components/profile/dream.widget.ProfileWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.widget.ProfileWidgetGrid.tsx)
- DreamSize — [`components/profile/dream.widget.ProfileWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.widget.ProfileWidgetGrid.tsx)
- DreamBgStyle — [`components/profile/dream.widget.ProfileWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.widget.ProfileWidgetGrid.tsx)
- DreamConfig — [`components/profile/dream.widget.ProfileWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.widget.ProfileWidgetGrid.tsx)

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
- [`app/settings/appearance/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/appearance/page.tsx) — 750 lines — score 146 — primary path, path keyword: appearance
- [`app/view-profile/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/view-profile/page.tsx) — 351 lines — score 134 — primary path, path keyword: profile
- [`app/profile/[handle]/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/profile/%5Bhandle%5D/page.tsx) — 252 lines — score 134 — primary path, path keyword: profile
- [`components/profile/dream.ProfileCustomizeButton.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.ProfileCustomizeButton.tsx) — 27 lines — score 134 — primary path, path keyword: profile
- [`components/profile/dream.widget.ProfileWidgetGrid.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.widget.ProfileWidgetGrid.tsx) — 2209 lines — score 130 — primary path, path keyword: profile
- [`components/profile/dream.ProfileCanvas.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.ProfileCanvas.tsx) — 348 lines — score 130 — primary path, path keyword: profile
- [`app/profile/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/profile/page.tsx) — 12 lines — score 130 — primary path, path keyword: profile
- [`components/ui-system/theme-engine.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/ui-system/theme-engine.ts) — 275 lines — score 126 — primary path, path keyword: theme
- [`components/profile/dream.EditableAvatar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/profile/dream.EditableAvatar.tsx) — 110 lines — score 126 — primary path, path keyword: profile
- [`app/settings/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/page.tsx) — 172 lines — score 124 — primary path
- [`styles/theme.css`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/styles/theme.css) — 34 lines — score 122 — primary path, path keyword: theme
- [`app/settings/help/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/help/page.tsx) — 94 lines — score 116 — primary path
- [`styles/globals.css`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/styles/globals.css) — 5181 lines — score 112 — primary path
- [`engins/engin.BrandingEngin.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engins/engin.BrandingEngin.tsx) — 1246 lines — score 112 — primary path
- [`app/edit-profiledream/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/edit-profiledream/page.tsx) — 593 lines — score 112 — primary path
- [`app/settings/account/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/account/page.tsx) — 125 lines — score 112 — primary path
- [`app/settings/security/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/security/page.tsx) — 245 lines — score 108 — primary path
- [`app/settings/notifications/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/notifications/page.tsx) — 207 lines — score 108 — primary path
- [`app/settings/safety/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/safety/page.tsx) — 179 lines — score 108 — primary path
- [`app/settings/dreams/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/dreams/page.tsx) — 40 lines — score 108 — primary path
- [`app/settings/widgets/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/widgets/page.tsx) — 40 lines — score 108 — primary path
- [`app/settings/algorithm/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/algorithm/page.tsx) — 39 lines — score 108 — primary path
- [`app/settings/controls/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/controls/page.tsx) — 19 lines — score 108 — primary path
- [`app/settings/data/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/data/page.tsx) — 19 lines — score 108 — primary path
- [`app/settings/privacy/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/privacy/page.tsx) — 19 lines — score 108 — primary path
- [`app/settings/feed/page.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/feed/page.tsx) — 11 lines — score 108 — primary path
- [`app/settings/privacy/dream.PrivacyClient.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/privacy/dream.PrivacyClient.tsx) — 396 lines — score 104 — primary path
- [`app/settings/account/dream.DangerZoneActions.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/account/dream.DangerZoneActions.tsx) — 325 lines — score 104 — primary path
- [`app/settings/data/dream.DataClient.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/data/dream.DataClient.tsx) — 133 lines — score 104 — primary path
- [`components/dream.ThemeApplicator.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.ThemeApplicator.tsx) — 96 lines — score 104 — primary path
- [`components/providers/dream.ThemeProvider.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/providers/dream.ThemeProvider.tsx) — 91 lines — score 104 — primary path
- [`styles/home-dream.css`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/styles/home-dream.css) — 235 lines — score 100 — primary path
- [`app/settings/controls/dream.ControlsClient.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/controls/dream.ControlsClient.tsx) — 162 lines — score 100 — primary path
- [`components/ui-system/CustomizeModeContext.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/ui-system/CustomizeModeContext.tsx) — 143 lines — score 100 — primary path

Supporting files:
- [`app/settings/dreams/dreams-layout-editor.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/dreams/dreams-layout-editor.tsx) — 83 lines — score 100 — primary path
- [`app/settings/controls/dream.PositionIndicatorToggle.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/settings/controls/dream.PositionIndicatorToggle.tsx) — 54 lines — score 100 — primary path
- [`styles/view-transitions.css`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/styles/view-transitions.css) — 49 lines — score 100 — primary path
- [`styles/dream-shell.css`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/styles/dream-shell.css) — 24 lines — score 100 — primary path
- [`app/api/settings/appearance/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/settings/appearance/route.ts) — 75 lines — score 89 — supporting path, path keyword: appearance
- [`components/customize/dream.bar.CustomizeModeBar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/customize/dream.bar.CustomizeModeBar.tsx) — 89 lines — score 85 — supporting path, path keyword: customize
- [`components/customize/panels/dream.panel.ColorPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/customize/panels/dream.panel.ColorPanel.tsx) — 232 lines — score 77 — supporting path, path keyword: customize
- [`components/customize/panels/dream.panel.LayoutPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/customize/panels/dream.panel.LayoutPanel.tsx) — 139 lines — score 77 — supporting path, path keyword: customize
- [`components/customize/panels/dream.panel.EffectsPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/customize/panels/dream.panel.EffectsPanel.tsx) — 110 lines — score 77 — supporting path, path keyword: customize
- [`components/customize/panels/dream.panel.FontPanel.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/customize/panels/dream.panel.FontPanel.tsx) — 108 lines — score 77 — supporting path, path keyword: customize
- [`components/customize/dream.bar.CustomizeToolbar.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/customize/dream.bar.CustomizeToolbar.tsx) — 101 lines — score 77 — supporting path, path keyword: customize
- [`components/customize/dream.GlobalCustomizeUI.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/customize/dream.GlobalCustomizeUI.tsx) — 28 lines — score 77 — supporting path, path keyword: customize
- [`components/dream.ProfileEditor.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.ProfileEditor.tsx) — 457 lines — score 67 — supporting path
- [`app/api/settings/feed/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/settings/feed/route.ts) — 89 lines — score 63 — supporting path
- [`app/api/settings/notifications/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/settings/notifications/route.ts) — 72 lines — score 63 — supporting path
- [`app/api/settings/privacy/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/settings/privacy/route.ts) — 72 lines — score 63 — supporting path
- [`components/dream.ProfileSpace.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.ProfileSpace.tsx) — 95 lines — score 59 — supporting path
- [`components/dream.ProfileShareButton.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/components/dream.ProfileShareButton.tsx) — 74 lines — score 59 — supporting path
## 20. Backend, System, Core & CoreSurfaces

### Plain English
Backend, system, core, and CoreSurfaces are the under-the-hood execution pieces: APIs, server routes, persistence, Supabase schema, shared runtime code, system surfaces, and infrastructure that keep the app functional.

### What users experience
Users feel this indirectly when data saves, pages load, auth works, messages arrive, runtime state persists, and core surfaces do not collapse while switching contexts.

### Repo Evidence
Matched focused repo evidence: 100 files, about 33,410 readable source lines.

Behavior signals:
- auth — 92 file hits
- persistence — 85 file hits
- commerce — 47 file hits
- events — 31 file hits
- state — 24 file hits
- rendering — 23 file hits
- runtime — 21 file hits
- mobile touch — 12 file hits

Routes and APIs:
- GET /api/auth/providers ← [`app/api/auth/providers/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/auth/providers/route.ts)
- GET /api/auth/logout ← [`app/api/auth/logout/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/auth/logout/route.ts)
- POST /api/forge/build ← [`app/api/forge/build/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/forge/build/route.ts)
- POST /api/ai/idari ← [`app/api/ai/idari/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/ai/idari/route.ts)
- POST /api/admin/ai-chat ← [`app/api/admin/ai-chat/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/admin/ai-chat/route.ts)
- GET /api/feed ← [`app/api/feed/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/feed/route.ts)
- POST /api/account/delete-dream ← [`app/api/account/delete-dream/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/account/delete-dream/route.ts)
- GET|POST /api/dreams/feed ← [`app/api/dreams/feed/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreams/feed/route.ts)
- GET|POST /api/social/ipfs ← [`app/api/social/ipfs/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/social/ipfs/route.ts)
- POST /api/agent/session ← [`app/api/agent/session/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/agent/session/route.ts)
- GET /api/dreams/instances ← [`app/api/dreams/instances/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreams/instances/route.ts)
- GET /api/setup/google-oauth ← [`app/api/setup/google-oauth/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/setup/google-oauth/route.ts)
- GET /api/social/livekit/room ← [`app/api/social/livekit/room/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/social/livekit/room/route.ts)
- GET /api/dreamengin/os-status ← [`app/api/dreamengin/os-status/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreamengin/os-status/route.ts)
- GET|POST /api/messages ← [`app/api/messages/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/messages/route.ts)
- GET|POST /api/connectors/webhooks/[provider] ← [`app/api/connectors/webhooks/[provider]/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/connectors/webhooks/%5Bprovider%5D/route.ts)

Components:
- EditProfileDreamPage — [`coresurfaces/dreamsurface.EditProfileDream.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/coresurfaces/dreamsurface.EditProfileDream.tsx)
- ViewProfilePage — [`coresurfaces/dreamsurface.ViewProfile.tsx`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/coresurfaces/dreamsurface.ViewProfile.tsx)

Hooks:
- useSimulation — [`app/api/forge/build/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/forge/build/route.ts)
- useTapHoldMove — [`engine/generated/osArchitectureMap.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/generated/osArchitectureMap.ts)
- useDaydreamPersistence — [`engine/generated/osArchitectureMap.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/generated/osArchitectureMap.ts)
- useDaydreamState — [`engine/generated/osArchitectureMap.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/generated/osArchitectureMap.ts)
- useDreamBarContext — [`engine/generated/osArchitectureMap.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/generated/osArchitectureMap.ts)
- useDreamDMConversations — [`engine/generated/osArchitectureMap.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/generated/osArchitectureMap.ts)
- useDreamDMDraft — [`engine/generated/osArchitectureMap.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/generated/osArchitectureMap.ts)
- useDreamDMMessages — [`engine/generated/osArchitectureMap.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/generated/osArchitectureMap.ts)
- useDreamSearch — [`engine/generated/osArchitectureMap.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/generated/osArchitectureMap.ts)
- useMessagingCore — [`engine/generated/osArchitectureMap.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/generated/osArchitectureMap.ts)
- useModuleBarIntent — [`engine/generated/osArchitectureMap.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/generated/osArchitectureMap.ts)
- useNotifications — [`engine/generated/osArchitectureMap.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/generated/osArchitectureMap.ts)
- useAgentSession — [`engine/generated/osArchitectureMap.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/generated/osArchitectureMap.ts)
- useForgeActivity — [`engine/generated/osArchitectureMap.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/engine/generated/osArchitectureMap.ts)

Exports that define public behavior:
- OAuthProvidersResponse — [`app/api/auth/providers/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/auth/providers/route.ts)
- getOAuthProvidersResponse — [`app/api/auth/providers/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/auth/providers/route.ts)
- fetchWithRetry — [`app/api/forge/build/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/forge/build/route.ts)
- resolveSafeNextPath — [`supabase/auth/nextRedirect.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/auth/nextRedirect.ts)
- buildLoginRedirectPath — [`supabase/auth/nextRedirect.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/auth/nextRedirect.ts)
- UnifiedFeedEntry — [`app/api/feed/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/feed/route.ts)
- FileNode — [`app/api/admin/code-files/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/admin/code-files/route.ts)
- UserRole — [`types/ai-system.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/ai-system.ts)
- ActorContextSchema — [`types/ai-system.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/ai-system.ts)
- ActorContext — [`types/ai-system.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/ai-system.ts)
- HomeAnchorState — [`types/ai-system.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/ai-system.ts)
- Surface — [`types/ai-system.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/ai-system.ts)
- CubePosition — [`types/ai-system.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/ai-system.ts)
- Overlay — [`types/ai-system.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/ai-system.ts)

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
- [`app/api/auth/providers/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/auth/providers/route.ts) — 64 lines — score 160 — primary path, path keyword: api
- [`app/api/auth/logout/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/auth/logout/route.ts) — 20 lines — score 160 — primary path, path keyword: api
- [`supabase/migrations/20260210_ai_core.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260210_ai_core.sql) — 280 lines — score 156 — primary path, path keyword: supabase
- [`supabase/migrations/20260418000000_gameengin_core.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260418000000_gameengin_core.sql) — 104 lines — score 156 — primary path, path keyword: supabase
- [`supabase/migrations/20260210000001_ai_system_v2026.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260210000001_ai_system_v2026.sql) — 454 lines — score 152 — primary path, path keyword: supabase
- [`supabase/migrations/20260210000000_widget_system_v2.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260210000000_widget_system_v2.sql) — 364 lines — score 152 — primary path, path keyword: supabase
- [`app/api/forge/build/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/forge/build/route.ts) — 923 lines — score 146 — primary path, path keyword: api
- [`supabase/auth/nextRedirect.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/auth/nextRedirect.ts) — 61 lines — score 144 — primary path, path keyword: supabase
- [`app/api/ai/idari/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/ai/idari/route.ts) — 309 lines — score 142 — primary path, path keyword: api
- [`app/api/admin/ai-chat/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/admin/ai-chat/route.ts) — 127 lines — score 142 — primary path, path keyword: api
- [`app/api/feed/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/feed/route.ts) — 230 lines — score 138 — primary path, path keyword: api
- [`app/api/account/delete-dream/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/account/delete-dream/route.ts) — 154 lines — score 138 — primary path, path keyword: api
- [`app/api/dreams/feed/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreams/feed/route.ts) — 152 lines — score 138 — primary path, path keyword: api
- [`app/api/social/ipfs/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/social/ipfs/route.ts) — 135 lines — score 138 — primary path, path keyword: api
- [`app/api/agent/session/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/agent/session/route.ts) — 115 lines — score 138 — primary path, path keyword: api
- [`app/api/dreams/instances/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreams/instances/route.ts) — 113 lines — score 138 — primary path, path keyword: api
- [`app/api/setup/google-oauth/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/setup/google-oauth/route.ts) — 87 lines — score 138 — primary path, path keyword: api
- [`app/api/social/livekit/room/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/social/livekit/room/route.ts) — 62 lines — score 138 — primary path, path keyword: api
- [`app/api/dreamengin/os-status/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreamengin/os-status/route.ts) — 45 lines — score 138 — primary path, path keyword: api
- [`supabase/migrations/20260413000000_phase9_activity_first_protocol.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260413000000_phase9_activity_first_protocol.sql) — 769 lines — score 134 — primary path, path keyword: supabase
- [`app/api/messages/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/messages/route.ts) — 342 lines — score 134 — primary path, path keyword: api
- [`app/api/connectors/webhooks/[provider]/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/connectors/webhooks/%5Bprovider%5D/route.ts) — 331 lines — score 134 — primary path, path keyword: api
- [`app/api/content/intelligence/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/content/intelligence/route.ts) — 309 lines — score 134 — primary path, path keyword: api
- [`app/api/content/voice-clone/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/content/voice-clone/route.ts) — 282 lines — score 134 — primary path, path keyword: api
- [`app/api/ai/boogieman/child-safety/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/ai/boogieman/child-safety/route.ts) — 260 lines — score 134 — primary path, path keyword: api
- [`app/api/ai/execute/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/ai/execute/route.ts) — 252 lines — score 134 — primary path, path keyword: api
- [`app/api/dream-windows/[id]/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dream-windows/%5Bid%5D/route.ts) — 250 lines — score 134 — primary path, path keyword: api
- [`app/api/posts/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/posts/route.ts) — 232 lines — score 134 — primary path, path keyword: api
- [`app/api/dreamr/suggested/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dreamr/suggested/route.ts) — 213 lines — score 134 — primary path, path keyword: api
- [`app/api/comments/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/comments/route.ts) — 209 lines — score 134 — primary path, path keyword: api
- [`app/api/follow/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/follow/route.ts) — 199 lines — score 134 — primary path, path keyword: api
- [`app/api/ai/eams/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/ai/eams/route.ts) — 193 lines — score 134 — primary path, path keyword: api
- [`app/api/ads/view/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/ads/view/route.ts) — 192 lines — score 134 — primary path, path keyword: api
- [`app/api/projects/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/projects/route.ts) — 188 lines — score 134 — primary path, path keyword: api

Supporting files:
- [`supabase/migrations/20260324000001_phase8e_shop_marketplace.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260324000001_phase8e_shop_marketplace.sql) — 186 lines — score 134 — primary path, path keyword: supabase
- [`app/api/metrics/platform/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/metrics/platform/route.ts) — 185 lines — score 134 — primary path, path keyword: api
- [`app/api/shop/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/shop/route.ts) — 181 lines — score 134 — primary path, path keyword: api
- [`app/api/content/generative-fill/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/content/generative-fill/route.ts) — 179 lines — score 134 — primary path, path keyword: api
- [`app/api/game-scores/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/game-scores/route.ts) — 177 lines — score 134 — primary path, path keyword: api
- [`app/api/admin/code-files/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/admin/code-files/route.ts) — 172 lines — score 134 — primary path, path keyword: api
- [`app/api/profile/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/profile/route.ts) — 167 lines — score 134 — primary path, path keyword: api
- [`app/api/likes/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/likes/route.ts) — 164 lines — score 134 — primary path, path keyword: api
- [`app/api/ai/boogieman/privacy-event/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/ai/boogieman/privacy-event/route.ts) — 161 lines — score 134 — primary path, path keyword: api
- [`app/api/ai/boogieman/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/ai/boogieman/route.ts) — 155 lines — score 134 — primary path, path keyword: api
- [`app/api/connectors/instagram/oauth/callback/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/connectors/instagram/oauth/callback/route.ts) — 147 lines — score 134 — primary path, path keyword: api
- [`app/api/admin/child-safety/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/admin/child-safety/route.ts) — 146 lines — score 134 — primary path, path keyword: api
- [`app/api/dream-windows/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/dream-windows/route.ts) — 144 lines — score 134 — primary path, path keyword: api
- [`app/api/marketplace/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/marketplace/route.ts) — 142 lines — score 134 — primary path, path keyword: api
- [`app/api/notifications/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/notifications/route.ts) — 136 lines — score 134 — primary path, path keyword: api
- [`app/api/shared-dream/sessions/[id]/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/shared-dream/sessions/%5Bid%5D/route.ts) — 134 lines — score 134 — primary path, path keyword: api
- [`app/api/connectors/[provider]/verify/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/connectors/%5Bprovider%5D/verify/route.ts) — 132 lines — score 134 — primary path, path keyword: api
- [`app/api/codeengin/upload/route.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/app/api/codeengin/upload/route.ts) — 131 lines — score 134 — primary path, path keyword: api
- [`types/ai-system.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/types/ai-system.ts) — 513 lines — score 130 — primary path, path keyword: system
- [`supabase/migrations/20260129000000_upgrade_schema.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260129000000_upgrade_schema.sql) — 290 lines — score 130 — primary path, path keyword: supabase
- [`supabase/migrations/20260322000000_phase8b_dream_windows.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260322000000_phase8b_dream_windows.sql) — 239 lines — score 130 — primary path, path keyword: supabase
- [`supabase/migrations/20260405042406_auto_scaffold.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260405042406_auto_scaffold.sql) — 225 lines — score 130 — primary path, path keyword: supabase
- [`supabase/server/serverClient.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/server/serverClient.ts) — 173 lines — score 130 — primary path, path keyword: supabase
- [`supabase/migrations/20260325100000_child_safety.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260325100000_child_safety.sql) — 160 lines — score 130 — primary path, path keyword: supabase
- [`supabase/migrations/20260405000001_dreamr_feed_registry.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260405000001_dreamr_feed_registry.sql) — 149 lines — score 130 — primary path, path keyword: supabase
- [`supabase/migrations/20260417000000_repurpose_nods_as_dream_docs.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260417000000_repurpose_nods_as_dream_docs.sql) — 133 lines — score 130 — primary path, path keyword: supabase
- [`supabase/migrations/20260310000003_connector_accounts.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260310000003_connector_accounts.sql) — 124 lines — score 130 — primary path, path keyword: supabase
- [`supabase/migrations/20260403000001_pgvector_embeddings.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260403000001_pgvector_embeddings.sql) — 102 lines — score 130 — primary path, path keyword: supabase
- [`supabase/migrations/20260426000200_build_memory_schema_gaps.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260426000200_build_memory_schema_gaps.sql) — 98 lines — score 130 — primary path, path keyword: supabase
- [`supabase/migrations/20260319120000_connector_accounts_schema_reload.sql`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/supabase/migrations/20260319120000_connector_accounts_schema_reload.sql) — 89 lines — score 130 — primary path, path keyword: supabase

<!-- DREAMENGIN_PRODUCT_README:END -->

## Recent Changes

| Commit | Date | Author | Change |
|---|---|---|---|
| [`7bb10fc`](https://github.com/tmdapple09/DREAMenginree2/commit/7bb10fcdca29641926eb5357cdc6d41b4974ca55) | 2026-07-14T05:20:25Z | github-actions[bot] | chore(visual-schematic): auto-update file-level schematic [skip ci] [skip vercel] |
| [`c10dced`](https://github.com/tmdapple09/DREAMenginree2/commit/c10dced47fa510b1b078f725e827136b4a12e35e) | 2026-07-13T22:19:43-07:00 | tmdapple09 | Refactor README generation script with new features |
| [`85fc963`](https://github.com/tmdapple09/DREAMenginree2/commit/85fc9635a354ed123d02540aabd8a0ec062cf09d) | 2026-07-14T04:29:53Z | DREAMengin-Bot | chore: repair TypeScript errors until green [skip ci] |
| [`eece273`](https://github.com/tmdapple09/DREAMenginree2/commit/eece2731b6b2d4b91bd10b2a20741c379dc60d38) | 2026-07-14T04:29:20Z | github-actions[bot] | chore(repo): update repository state [skip ci] |
| [`b9d7ac2`](https://github.com/tmdapple09/DREAMenginree2/commit/b9d7ac2cb54c4af46814d1a98911cc2524a507a1) | 2026-07-13T21:28:34-07:00 | tmdapple09 | Add files via upload |
| [`568497d`](https://github.com/tmdapple09/DREAMenginree2/commit/568497df1c693ac9f7eec22168e6270b4167630b) | 2026-07-14T04:28:29Z | github-actions[bot] | chore(visual-schematic): auto-update file-level schematic [skip ci] [skip vercel] |
| [`430e13b`](https://github.com/tmdapple09/DREAMenginree2/commit/430e13b5b355df5e2ef6580a97c9ff5c17614ece) | 2026-07-13T21:27:47-07:00 | tmdapple09 | Delete .github/workflows/bitcoin-hash-transform-single.yml |
| [`afa5ddd`](https://github.com/tmdapple09/DREAMenginree2/commit/afa5ddd3e8ba846de9496459140b0ed774cead4a) | 2026-07-14T03:47:47Z | DREAMengin-Bot | chore: repair TypeScript errors until green [skip ci] |

## README Generation Contract

- Every run rebuilds the complete [`README.md`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/README.md) from tracked repository evidence.
- Product sections come from semantic path, keyword, route, API, component, hook, import, export, and behavior analysis in [`scripts/readme-autosync.ts`](https://github.com/tmdapple09/DREAMenginree2/blob/completedream/scripts/readme-autosync.ts).
- This run converted 1413 recognized product-evidence paths into GitHub links.
- The write is atomic and validated before README.md is replaced.
- The output is idempotent for the same commit and inputs.
