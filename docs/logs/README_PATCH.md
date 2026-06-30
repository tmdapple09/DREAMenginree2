# DREAMengin YouTube connector patch

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

> **Documentation Owner:** José Mancilla (appthemanger-ctrl)  
> **Documentation Date:** 2026-04-06


This patch is built against:

- repo: `appthemanger-ctrl/DREAMengin`
- branch: `completedream`

## What it adds

### 1. Real YouTube connector backend
New provider:
- `lib/connectors/providers/youtube.ts`

It verifies a live Google OAuth access token and syncs:
- subscription feed
- watch history
- Watch Later

### 2. Real route support
Patched:
- `app/api/connectors/[provider]/connect/route.ts`
- `app/api/connectors/[provider]/verify/route.ts`
- `app/api/connectors/[provider]/sync/route.ts`

### 3. Widget bridge
New route:
- `app/api/connectors/[provider]/items/route.ts`

This exposes synced, normalised provider items so widgets can actually render them.

### 4. Widget rendering
Patched:
- `components/widgets/dream.widget.UniversalWidget.tsx`

For `service="youtube"` and `service="github"`, it now pulls live synced items from the new items route instead of showing only placeholder text.

### 5. Connector UI
Patched:
- `components/connectors/dream.ConnectorRow.tsx`

Adds YouTube credential input.

### 6. Tests
Patched:
- `tests/connectors.test.ts`

Adds YouTube normalisation coverage.

## Credential model used here

This patch uses a **manual Google OAuth access token** right away because it fits your repo's existing connector UI without requiring a separate OAuth redirect flow.

Required scope:
- `https://www.googleapis.com/auth/youtube.readonly`

## Important limitation

This is a real implementation, but it is **not yet a polished Google OAuth login flow**.
It expects a valid token to be pasted into the connector modal.

That choice was deliberate so it drops into your current architecture fast:
- no fake states
- no speculative hidden auth system
- actual provider calls
- actual sync
- actual widget rendering bridge

## How to apply

Copy these files into the matching repo paths, then run:

```bash
pnpm test
pnpm typecheck
```

Then in the app:

1. go to `/connectors`
2. connect YouTube with a valid readonly token
3. hit Sync
4. render a widget using `service="youtube"`

## Next upgrade after this

If you want the next pass to be fully product-grade, the next step is:

- Google OAuth redirect flow
- refresh-token storage
- token refresh on verify/sync
- DB-backed connector statuses in `ConnectorsClient`

This patch is the shortest path from your current repo state to **actual outside-platform widget data**.
