// ── Source Grammar: Directive ─────────────────────────────────────────────────

// Framework directives stay physically first when required.

// ── Source Grammar: Identity ─────────────────────────────────────────────────

// Runtime file: lib/engin-runtime/EnginSnapshotFingerprint.ts.

/**
 * Deterministic Engin snapshot fingerprinting.
 *
 * TypeScript owns canonical JSON ordering; AssemblyScript owns the matching
 * low-level byte hash in assembly/index.ts for runtime hosts that can hand the
 * bytes to WASM memory.
 */

// ── Source Grammar: Rules ─────────────────────────────────────────────────

// Runtime law comments and invariants stay attached to the code they govern.

// ── Source Grammar: Memory ─────────────────────────────────────────────────

// Module-owned constants, caches, refs, and mutable runtime memory.

// ── Source Grammar: Dependencies ─────────────────────────────────────────────────

// Imports and external modules this runtime file depends on.

import type { EnginBaseState, JsonValue } from './EnginBaseState';

// ── Source Grammar: Wiring ─────────────────────────────────────────────────

// Top-level runtime registration and connection seams.

// ── Source Grammar: Contracts ─────────────────────────────────────────────────

// Types, interfaces, and schemas accepted or provided by this file.

export interface WasmFingerprintExports {
  hashBytesFNV1A(ptr: number, count: number): number;
}

// ── Source Grammar: Actions ─────────────────────────────────────────────────

// Runtime functions, classes, handlers, and state transitions.

function stableJson(value: JsonValue): string {
  if (value === null) return 'null';
  if (typeof value === 'string') return JSON.stringify(value);
  if (typeof value === 'number') return Number.isFinite(value) ? String(value) : 'null';
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`;

  const objectValue = value as Record<string, JsonValue>;
  return `{${Object.keys(objectValue)
    .sort()
    .map((key) => `${JSON.stringify(key)}:${stableJson(objectValue[key])}`)
    .join(',')}}`;
}

export function stableStringifySnapshot(snapshot: EnginBaseState): string {
  return stableJson({
    enginId: snapshot.enginId,
    lifecycle: snapshot.lifecycle,
    updatedAt: snapshot.updatedAt,
    revision: snapshot.revision,
    domain: snapshot.domain,
  });
}

export function hashBytesFNV1A(bytes: Uint8Array): number {
  let hash = 0x811c9dc5;
  for (const byte of bytes) {
    hash ^= byte;
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash >>> 0;
}

export function fingerprintEnginSnapshot(snapshot: EnginBaseState): string {
  const bytes = new TextEncoder().encode(stableStringifySnapshot(snapshot));
  return hashBytesFNV1A(bytes).toString(16).padStart(8, '0');
}

export function fingerprintBytesWithWasm(
  bytes: Uint8Array,
  wasm: WasmFingerprintExports,
  memory: WebAssembly.Memory,
  ptr = 0,
): string {
  const heap = new Uint8Array(memory.buffer);
  if (ptr < 0 || ptr + bytes.length > heap.byteLength) {
    throw new Error('Fingerprint input exceeds WASM memory bounds.');
  }
  heap.set(bytes, ptr);
  return (wasm.hashBytesFNV1A(ptr, bytes.length) >>> 0)
    .toString(16)
    .padStart(8, '0');
}

// ── Source Grammar: Output ─────────────────────────────────────────────────

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// ── Source Grammar: Cleanup ─────────────────────────────────────────────────

// Teardown remains paired inside the lifecycle actions that allocate resources.

// ── Source Grammar: Public Surface ─────────────────────────────────────────────────

// Exported declarations and re-export barrels are this file's public surface.
