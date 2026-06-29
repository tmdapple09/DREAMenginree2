// Framework directives stay physically first when required.

// Runtime file: lib/runtime/swapManager.ts.

/**
 * swapManager — persists the editor/preview swap state per Daydream.
 *
 * Each Daydream that supports a swappable editor/preview split stores a
 * boolean in localStorage.  The helper is safe to call server-side (it
 * returns the default value when window is unavailable).
 *
 * Keys:
 *   de-code-swap  →  Code Daydream (CodeDreamIDE)
 *   de-lab-swap   →  Lab  Daydream (LabDreamIDE)
 */

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

const SWAP_KEYS = {
  code: 'de-code-swap',
  lab:  'de-lab-swap',
} as const;

const ALL_DOMAINS = Object.keys(SWAP_KEYS) as SwapDomain[];

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

export type SwapDomain = keyof typeof SWAP_KEYS;

// Runtime functions, classes, handlers, and state transitions.

/**
 * Read the persisted swap state for a given Daydream domain.
 * Returns `false` (default: editor on top/left) when unavailable.
 */
export function getSwap(domain: SwapDomain): boolean {
  if (typeof localStorage === 'undefined') return false;
  try {
    return localStorage.getItem(SWAP_KEYS[domain]) === 'true';
  } catch {
    return false;
  }
}

/**
 * Persist the swap state for a given Daydream domain.
 */
export function setSwap(domain: SwapDomain, value: boolean): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(SWAP_KEYS[domain], String(value));
  } catch (err: unknown) {
    // ── Improvement 43: log storage errors ───────────────────────────────
    console.warn('[swapManager] Failed to persist swap state', { domain, err });
  }
}

/**
 * Toggle the swap state and return the new value.
 */
export function toggleSwap(domain: SwapDomain): boolean {
  const next = !getSwap(domain);
  setSwap(domain, next);
  return next;
}

/**
 * Reset the swap state for a domain to its default (false = editor on top).
 * Safe to call server-side.
 */
export function clearSwap(domain: SwapDomain): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.removeItem(SWAP_KEYS[domain]);
  } catch (err: unknown) {
    console.warn('[swapManager] Failed to clear swap state', { domain, err });
  }
}

/**
 * Read the swap state for every registered domain in one call.
 * Returns a Record<SwapDomain, boolean> so callers don't need to call
 * getSwap() N times for the same render.
 */
export function getAllSwapStates(): Record<SwapDomain, boolean> {
  return Object.fromEntries(
    ALL_DOMAINS.map((domain) => [domain, getSwap(domain)]),
  ) as Record<SwapDomain, boolean>;
}

/**
 * Clear the swap state for every registered domain (set to default false).
 * Useful during sign-out or when resetting the workspace to defaults.
 */
export function resetAllSwaps(): void {
  for (const domain of ALL_DOMAINS) {
    clearSwap(domain);
  }
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
