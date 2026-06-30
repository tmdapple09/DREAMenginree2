# DREAMengin - GitHub Push Guide

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

Your DREAMengin project is ready to push to GitHub!

## Quick Start

### Option 1: Using GitHub CLI (Easiest)
```bash
# Install GitHub CLI if you don't have it
# Then authenticate
gh auth login

# Clone and navigate to your project
cd /path/to/DREAMengin-completedream

# Push to your repository
git push -u origin main
```

### Option 2: Using Personal Access Token (Recommended)

1. **Generate a GitHub Personal Access Token:**
   - Go to: https://github.com/settings/tokens/new
   - Name: "DREAMengin Push"
   - Select scopes: `repo`, `workflow`
   - Click "Generate token"
   - Copy the token (you won't see it again!)

2. **Run these commands:**
```bash
cd /home/claude/DREAMengin-completedream

# Set up git remote
git remote add origin https://github.com/appthemanger-ctrl/DREAMengin.git
git branch -M main

# Push to GitHub
git push -u origin main
```

3. **When prompted for password:**
   - Username: `appthemanger-ctrl`
   - Password: Paste your personal access token

### Option 3: Using SSH (If configured)
```bash
cd /home/claude/DREAMengin-completedream

git remote add origin git@github.com:appthemanger-ctrl/DREAMengin.git
git branch -M main
git push -u origin main
```

## Troubleshooting

### Error: "fatal: could not read Username"
- This means you need credentials
- Use Option 2 with a Personal Access Token

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/appthemanger-ctrl/DREAMengin.git
```

### Check current remote:
```bash
git remote -v
```

## After Pushing

Once successfully pushed:
- ✅ Visit: https://github.com/appthemanger-ctrl/DREAMengin
- ✅ Your code will be backed up on GitHub
- ✅ You can collaborate with others
- ✅ Enable GitHub Pages, Actions, etc.

---

**DREAMengin**: A spatial operating system for personal data and creation
Built with Next.js, Supabase, TypeScript, and premium UI/UX
