// ── Source Grammar: Directive ─────────────────────────────────────────────────

// Framework directives stay physically first when required.

// ── Source Grammar: Identity ─────────────────────────────────────────────────

// Runtime file: lib/runtime/madMaxiSnapshotBridge.ts.

// ── Source Grammar: Rules ─────────────────────────────────────────────────

// Runtime law comments and invariants stay attached to the code they govern.

// ── Source Grammar: Memory ─────────────────────────────────────────────────

// Module-owned constants, caches, refs, and mutable runtime memory.

let madMaxiExportsPromise: Promise<MadMaxiWasmExports | null> | null = null;

// ── Source Grammar: Dependencies ─────────────────────────────────────────────────

// Imports and external modules this runtime file depends on.

// ── Source Grammar: Wiring ─────────────────────────────────────────────────

// Top-level runtime registration and connection seams.

// ── Source Grammar: Contracts ─────────────────────────────────────────────────

// Types, interfaces, and schemas accepted or provided by this file.

type MadMaxiWasmExports = {
  memory: WebAssembly.Memory;
  getSnapshotSize: () => number;
  writeSnapshot: (ptr: number) => void;
  loadSnapshot: (ptr: number) => void;
};

// ── Source Grammar: Actions ─────────────────────────────────────────────────

// Runtime functions, classes, handlers, and state transitions.

async function loadMadMaxiExports(): Promise<MadMaxiWasmExports | null> {
  if (madMaxiExportsPromise) return madMaxiExportsPromise;
  madMaxiExportsPromise = (async () => {
    try {
      const wasmPath = typeof window === 'undefined'
        ? `${process.cwd()}/public/cartridges/mad-maxi/logic/main.wasm`
        : '/cartridges/mad-maxi/logic/main.wasm';
      const bytes = typeof window === 'undefined'
        ? await (await import(/* webpackIgnore: true */ 'fs/promises')).readFile(wasmPath)
        : new Uint8Array(await (await fetch(wasmPath)).arrayBuffer());
      const { instance } = await WebAssembly.instantiate(bytes as BufferSource, {});
      return instance.exports as unknown as MadMaxiWasmExports;
    } catch {
      return null;
    }
  })();
  return madMaxiExportsPromise;
}

export async function invokeMadMaxiSnapshotTransfer(): Promise<void> {
  const exp = await loadMadMaxiExports();
  if (!exp) return;

  const size = exp.getSnapshotSize();
  const bytesPerPage = 65536;
  const requiredPages = Math.max(1, Math.ceil((size + 64) / bytesPerPage));
  const currentPages = exp.memory.buffer.byteLength / bytesPerPage;
  if (currentPages < requiredPages) {
    exp.memory.grow(requiredPages - currentPages);
  }

  const ptr = 32;
  exp.writeSnapshot(ptr);
  exp.loadSnapshot(ptr);
}

// ── Source Grammar: Output ─────────────────────────────────────────────────

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// ── Source Grammar: Cleanup ─────────────────────────────────────────────────

// Teardown remains paired inside the lifecycle actions that allocate resources.

// ── Source Grammar: Public Surface ─────────────────────────────────────────────────

// Exported declarations and re-export barrels are this file's public surface.
