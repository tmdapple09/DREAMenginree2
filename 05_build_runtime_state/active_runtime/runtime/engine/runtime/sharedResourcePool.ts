// Framework directives stay physically first when required.

// Runtime file: lib/runtime/sharedResourcePool.ts.

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

const pool = new Map<string, unknown[]>();

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

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

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
