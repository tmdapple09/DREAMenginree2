// ── Source Grammar: Directive ─────────────────────────────────────────────────

// Framework directives stay physically first when required.

// ── Source Grammar: Identity ─────────────────────────────────────────────────

// Runtime file: lib/runtime/sharedResourcePool.ts.

// ── Source Grammar: Rules ─────────────────────────────────────────────────

// Runtime law comments and invariants stay attached to the code they govern.

// ── Source Grammar: Memory ─────────────────────────────────────────────────

// Module-owned constants, caches, refs, and mutable runtime memory.

const pool = new Map<string, unknown[]>();

// ── Source Grammar: Dependencies ─────────────────────────────────────────────────

// Imports and external modules this runtime file depends on.

// ── Source Grammar: Wiring ─────────────────────────────────────────────────

// Top-level runtime registration and connection seams.

// ── Source Grammar: Contracts ─────────────────────────────────────────────────

// Types, interfaces, and schemas accepted or provided by this file.

// ── Source Grammar: Actions ─────────────────────────────────────────────────

// Runtime functions, classes, handlers, and state transitions.

export function acquireSharedResource<T>(key: string, factory: () => T): T {
  const bucket = pool.get(key);
  if (bucket && bucket.length > 0) {
    return bucket.pop() as T;
  }
  return factory();
}

export function releaseSharedResource<T>(key: string, value: T): void {
  const bucket = pool.get(key) ?? [];
  bucket.push(value as unknown);
  pool.set(key, bucket);
}

// ── Source Grammar: Output ─────────────────────────────────────────────────

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// ── Source Grammar: Cleanup ─────────────────────────────────────────────────

// Teardown remains paired inside the lifecycle actions that allocate resources.

// ── Source Grammar: Public Surface ─────────────────────────────────────────────────

// Exported declarations and re-export barrels are this file's public surface.
