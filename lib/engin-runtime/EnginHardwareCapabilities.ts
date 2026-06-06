import type { JsonObject } from './EnginBaseState';

export interface EnginHardwareCapabilities extends JsonObject {
  webgpu: boolean;
  audioWorklet: boolean;
  worker: boolean;
  wasm: boolean;
  wasmSimd: boolean;
  sharedArrayBuffer: boolean;
  hardwareThreads: number;
  deviceMemoryMb: number | null;
  maxTextureDimension2D: number | null;
  maxBufferSize: number | null;
}

type NavigatorWithDeviceMemory = Navigator & { deviceMemory?: number };

export async function detectWasmSimdSupport(): Promise<boolean> {
  if (typeof WebAssembly === 'undefined') return false;
  // Minimal SIMD feature probe module.
  const simdProbe = new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0,
    3, 2, 1, 0, 10, 9, 1, 7, 0, 253, 15, 253, 98, 11,
  ]);
  return WebAssembly.validate(simdProbe);
}

export async function detectEnginHardwareCapabilities(): Promise<EnginHardwareCapabilities> {
  const nav = typeof navigator !== 'undefined' ? (navigator as NavigatorWithDeviceMemory) : null;
  const gpu = nav && 'gpu' in nav ? (nav as Navigator & { gpu?: GPU }).gpu : undefined;
  let maxTextureDimension2D: number | null = null;
  let maxBufferSize: number | null = null;
  if (gpu) {
    try {
      const adapter = await gpu.requestAdapter();
      maxTextureDimension2D = Number(adapter?.limits.maxTextureDimension2D ?? null);
      maxBufferSize = Number(adapter?.limits.maxBufferSize ?? null);
    } catch {
      maxTextureDimension2D = null;
      maxBufferSize = null;
    }
  }
  const audioWorklet = typeof globalThis.AudioContext !== 'undefined' &&
    'audioWorklet' in AudioContext.prototype;
  const deviceMemoryMb = nav?.deviceMemory ? nav.deviceMemory * 1024 : null;
  return {
    webgpu: !!gpu,
    audioWorklet,
    worker: typeof Worker !== 'undefined',
    wasm: typeof WebAssembly !== 'undefined',
    wasmSimd: await detectWasmSimdSupport(),
    sharedArrayBuffer: typeof SharedArrayBuffer !== 'undefined',
    hardwareThreads: nav?.hardwareConcurrency ?? 1,
    deviceMemoryMb,
    maxTextureDimension2D,
    maxBufferSize,
  };
}

export function fallbackEnginHardwareCapabilities(): EnginHardwareCapabilities {
  return {
    webgpu: false,
    audioWorklet: false,
    worker: typeof Worker !== 'undefined',
    wasm: typeof WebAssembly !== 'undefined',
    wasmSimd: false,
    sharedArrayBuffer: typeof SharedArrayBuffer !== 'undefined',
    hardwareThreads: typeof navigator !== 'undefined' ? navigator.hardwareConcurrency : 1,
    deviceMemoryMb: null,
    maxTextureDimension2D: null,
    maxBufferSize: null,
  };
}
