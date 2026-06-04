/**
 * Deterministic Engin snapshot fingerprinting.
 *
 * TypeScript owns canonical JSON ordering; AssemblyScript owns the matching
 * low-level byte hash in assembly/index.ts for runtime hosts that can hand the
 * bytes to WASM memory.
 */

import type { EnginBaseState, JsonValue } from './EnginBaseState';

export interface WasmFingerprintExports {
  hashBytesFNV1A(ptr: number, count: number): number;
}

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
