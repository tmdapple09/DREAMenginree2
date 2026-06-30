# Data Files: Torridity SPARC Fits

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

This directory contains the numerical output of Torridity galaxy rotation curve fits against the SPARC dataset.

---

## `torr_vs_mond_lock_n11.csv`

**Head-to-head χ² comparison: Torridity (n=2.1 locked) vs MOND simple for all 175 SPARC galaxies.**

Parameters used:
- Torridity: n=2.1 (globally locked), a₀=1.2×10⁻¹⁰ m/s² (globally locked)
- MOND simple: standard simple interpolation function, same a₀
- Per-galaxy free parameters (both models): Υ_disk, Υ_bul

### Column descriptions

| Column | Description |
|--------|-------------|
| `name` | SPARC galaxy identifier |
| `quality` | SPARC quality flag (1=best, 3=worst) |
| `npts` | Number of rotation curve data points |
| `torr_chi2` | Total χ² for Torridity fit |
| `torr_chi2_red` | Reduced χ² for Torridity fit (= torr_chi2 / (npts − 2)) |
| `torr_Mdisk` | Best-fit stellar mass-to-light ratio, disk (Torridity) |
| `torr_Mbul` | Best-fit stellar mass-to-light ratio, bulge (Torridity; 0 if no bulge) |
| `mond_chi2` | Total χ² for MOND simple fit |
| `mond_chi2_red` | Reduced χ² for MOND simple fit |
| `mond_Mdisk` | Best-fit stellar mass-to-light ratio, disk (MOND) |
| `mond_Mbul` | Best-fit stellar mass-to-light ratio, bulge (MOND; 0 if no bulge) |
| `dchi2` | Δχ² = torr_chi2_red − mond_chi2_red. **Negative = Torridity wins.** |
| `winner` | `torr` if dchi2 < 0, `mond` if dchi2 > 0, `tie` if dchi2 = 0 |

### Summary statistics

- 175 galaxies total
- Torridity wins: 127/175 (73%)
- MOND wins: 48/175 (27%)
- Median reduced χ² — Torridity: 1.42 | MOND simple: 1.61

---

## Forthcoming data files

Additional data files will be added as they are validated:

- `slog_invariance_test.csv` — band-doubling test results (raw vs slog residuals)
- `beta_stacking.csv` — β-parameter stacking by radial bin
- `sparc_rar_residuals.csv` — full RAR residual table for all 175 galaxies

---

*Data generated: May 2026. SPARC source dataset: Lelli, McGaugh & Schombert (2016), AJ 152 157. Publicly available at astroweb.cwru.edu/SPARC.*
