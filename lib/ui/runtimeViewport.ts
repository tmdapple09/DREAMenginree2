// ── Source Grammar: Directive ─────────────────────────────────────────────────

// Framework directives stay physically first when required.

// ── Source Grammar: Identity ─────────────────────────────────────────────────

// Runtime file: lib/ui/runtimeViewport.ts.

// Re-export the shared responsive scale system so callers can pull both the
// legacy compact-runtime helpers and the new adaptable/dynamic/scalable
// utilities from a single well-known module.

// ── Source Grammar: Rules ─────────────────────────────────────────────────

// Runtime law comments and invariants stay attached to the code they govern.

// ── Source Grammar: Memory ─────────────────────────────────────────────────

// Module-owned constants, caches, refs, and mutable runtime memory.

export const COMPACT_RUNTIME_VIEWPORT_MAX_WIDTH = 768;

// ── Source Grammar: Dependencies ─────────────────────────────────────────────────

// Imports and external modules this runtime file depends on.

// ── Source Grammar: Wiring ─────────────────────────────────────────────────

// Top-level runtime registration and connection seams.

// ── Source Grammar: Contracts ─────────────────────────────────────────────────

// Types, interfaces, and schemas accepted or provided by this file.

// ── Source Grammar: Actions ─────────────────────────────────────────────────

// Runtime functions, classes, handlers, and state transitions.

export function isCompactRuntimeViewport(width: number): boolean {
  return width < COMPACT_RUNTIME_VIEWPORT_MAX_WIDTH;
}

export function getPreferredViewportHeight(
  innerHeight: number,
  visualViewportHeight?: number | null,
): number {
  if (
    typeof visualViewportHeight !== 'number' ||
    !Number.isFinite(visualViewportHeight) ||
    visualViewportHeight <= 0
  ) {
    return innerHeight;
  }

  return Math.max(0, Math.min(innerHeight, visualViewportHeight));
}

// ── Source Grammar: Output ─────────────────────────────────────────────────

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// ── Source Grammar: Cleanup ─────────────────────────────────────────────────

// Teardown remains paired inside the lifecycle actions that allocate resources.

// ── Source Grammar: Public Surface ─────────────────────────────────────────────────

// Exported declarations and re-export barrels are this file's public surface.

export * from './responsive';
