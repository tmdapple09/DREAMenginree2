// ── Source Grammar: Directive ─────────────────────────────────────────────────

// Framework directives stay physically first when required.

// ── Source Grammar: Identity ─────────────────────────────────────────────────

// Runtime file: lib/runtime/isAuthRelatedError.ts.

// ── Source Grammar: Rules ─────────────────────────────────────────────────

// Runtime law comments and invariants stay attached to the code they govern.

// ── Source Grammar: Memory ─────────────────────────────────────────────────

// Module-owned constants, caches, refs, and mutable runtime memory.

/**
 * lib/runtime/isAuthRelatedError.ts
 *
 * Classifies whether a caught Error originates from an auth/session failure
 * versus a generic runtime or render error.
 *
 * Used by the root error boundary (app/error.tsx) to decide whether to force
 * a sign-out + redirect (session corruption) or simply let the user "Try again"
 * without destroying their session.
 *
 * Build-memory mapping
 * ──────────────────────────────────────────────────────────────────────────
 * Event: "error"
 *   → components/dreams/dream.PlatformErrorReporter.tsx
 *   → components/gameengin/dream.cartridge.CartridgeErrorBoundary.tsx
 *   → engins/engin.CodeEngin.tsx
 *
 * Follows the same heuristic used in:
 *   lib/connectors/reconcile.ts  — isConnectorAuthError()
 *   app/api/social/rss-feed/route.ts — inline isAuthError pattern
 */

const AUTH_ERROR_PATTERNS = [
  /\bauth/i,            // AuthError, authentication, authorization, auth token…
  /\bjwt\b/i,
  /\btoken\b/i,
  /\bsession\b/i,
  /\bsign.?in\b/i,
  /\bsign.?out\b/i,
  /\bunauthori[sz]ed\b/i,
  /\bforbidden\b/i,
  /\b(invalid|expired|revoked|missing).*(token|session|credential)/i,
  /\b(refresh|access).*(token|session)/i,
  /\b401\b/,
  /\b403\b/,
] as const;

// ── Source Grammar: Dependencies ─────────────────────────────────────────────────

// Imports and external modules this runtime file depends on.

import { toErrorMessage } from '@/lib/utils';

// ── Source Grammar: Wiring ─────────────────────────────────────────────────

// Top-level runtime registration and connection seams.

// ── Source Grammar: Contracts ─────────────────────────────────────────────────

// Types, interfaces, and schemas accepted or provided by this file.

// ── Source Grammar: Actions ─────────────────────────────────────────────────

// Runtime functions, classes, handlers, and state transitions.

/**
 * Returns `true` when the error message or name suggests a session / auth
 * failure that warrants a forced sign-out.  Returns `false` for all other
 * transient / runtime errors so the user can recover without losing their
 * session.
 */
export function isAuthRelatedError(error: unknown): boolean {
  if (!error) return false;

  const message =
    (error instanceof Error ? toErrorMessage(error) : String(error)) ?? '';
  const name = error instanceof Error ? (error.name ?? '') : '';

  const haystack = `${name} ${message}`.toLowerCase();

  return AUTH_ERROR_PATTERNS.some((pattern) => pattern.test(haystack));
}

// ── Source Grammar: Output ─────────────────────────────────────────────────

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// ── Source Grammar: Cleanup ─────────────────────────────────────────────────

// Teardown remains paired inside the lifecycle actions that allocate resources.

// ── Source Grammar: Public Surface ─────────────────────────────────────────────────

// Exported declarations and re-export barrels are this file's public surface.
