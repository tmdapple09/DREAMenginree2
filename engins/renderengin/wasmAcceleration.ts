import type { MeshBuffers, Vec3 } from './core';

export interface RenderMeshBounds {
  readonly min: Vec3;
  readonly max: Vec3;
  readonly center: Vec3;
  readonly radius: number;
}

export interface RenderWasmAccelerationExports {
  readonly memory?: WebAssembly.Memory;
  computeBounds3F32?: (
    positionPtr: number,
    count: number,
    strideFloats: number,
    outPtr: number,
  ) => void;
  shapeIntentPressureFieldSIMD?: (
    massPtr: number,
    velocityPtr: number,
    count: number,
    deltaTime: number,
    damping: number,
    stiffness: number,
  ) => void;
  shapeGlowFieldSIMD?: (
    intensityPtr: number,
    velocityPtr: number,
    count: number,
    deltaTime: number,
    resonance: number,
  ) => void;
}

export interface RenderWasmAcceleration {
  readonly active: boolean;
  readonly reason: string;
  readonly exports: RenderWasmAccelerationExports | null;
  readonly memory: WebAssembly.Memory | null;
  computeBounds(mesh: MeshBuffers): RenderMeshBounds;
}

const RENDER_WASM_PAGE_COUNT = 16;
const POSITION_PTR = 0;
const BOUNDS_OUT_PTR = 1024 * 1024 - 64;

let loadPromise: Promise<RenderWasmAcceleration> | null = null;
let activeAcceleration: RenderWasmAcceleration | null = null;

function emptyBounds(): RenderMeshBounds {
  return {
    min: [0, 0, 0],
    max: [0, 0, 0],
    center: [0, 0, 0],
    radius: 0,
  };
}

export function fallbackRenderMeshBounds(mesh: MeshBuffers): RenderMeshBounds {
  if (!mesh.vertices.length) return emptyBounds();

  let minX = mesh.vertices[0].position[0];
  let minY = mesh.vertices[0].position[1];
  let minZ = mesh.vertices[0].position[2];
  let maxX = minX;
  let maxY = minY;
  let maxZ = minZ;

  for (const vertex of mesh.vertices) {
    const [x, y, z] = vertex.position;
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (z < minZ) minZ = z;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
    if (z > maxZ) maxZ = z;
  }

  const center: Vec3 = [
    (minX + maxX) * 0.5,
    (minY + maxY) * 0.5,
    (minZ + maxZ) * 0.5,
  ];

  let radius = 0;
  for (const vertex of mesh.vertices) {
    const dx = vertex.position[0] - center[0];
    const dy = vertex.position[1] - center[1];
    const dz = vertex.position[2] - center[2];
    radius = Math.max(radius, Math.hypot(dx, dy, dz));
  }

  return {
    min: [minX, minY, minZ],
    max: [maxX, maxY, maxZ],
    center,
    radius,
  };
}

function writePositions(mesh: MeshBuffers, memory: WebAssembly.Memory): { ptr: number; count: number; strideFloats: number } | null {
  const count = mesh.vertices.length;
  const strideFloats = 3;
  const byteLength = count * strideFloats * 4;

  if (byteLength <= 0) return null;
  if (POSITION_PTR + byteLength >= BOUNDS_OUT_PTR) return null;
  if (BOUNDS_OUT_PTR + 40 > memory.buffer.byteLength) return null;

  const positions = new Float32Array(memory.buffer, POSITION_PTR, count * strideFloats);
  let cursor = 0;
  for (const vertex of mesh.vertices) {
    positions[cursor++] = vertex.position[0];
    positions[cursor++] = vertex.position[1];
    positions[cursor++] = vertex.position[2];
  }

  return { ptr: POSITION_PTR, count, strideFloats };
}

function readBounds(memory: WebAssembly.Memory): RenderMeshBounds {
  const out = new Float32Array(memory.buffer, BOUNDS_OUT_PTR, 10);
  return {
    min: [out[0], out[1], out[2]],
    max: [out[3], out[4], out[5]],
    center: [out[6], out[7], out[8]],
    radius: out[9],
  };
}

function makeFallbackAcceleration(reason: string): RenderWasmAcceleration {
  return {
    active: false,
    reason,
    exports: null,
    memory: null,
    computeBounds: fallbackRenderMeshBounds,
  };
}

function makeActiveAcceleration(exports: RenderWasmAccelerationExports, memory: WebAssembly.Memory): RenderWasmAcceleration {
  return {
    active: true,
    reason: 'computeBounds3F32 active',
    exports,
    memory,
    computeBounds(mesh: MeshBuffers): RenderMeshBounds {
      const input = writePositions(mesh, memory);
      if (!input || typeof exports.computeBounds3F32 !== 'function') return fallbackRenderMeshBounds(mesh);
      exports.computeBounds3F32(input.ptr, input.count, input.strideFloats, BOUNDS_OUT_PTR);
      return readBounds(memory);
    },
  };
}

export function computeRenderMeshBounds(
  mesh: MeshBuffers,
  acceleration: RenderWasmAcceleration | null = activeAcceleration,
): RenderMeshBounds {
  if (acceleration?.active) {
    return acceleration.computeBounds(mesh);
  }

  return fallbackRenderMeshBounds(mesh);
}

export async function loadRenderWasmAcceleration(
  wasmUrl = '/workers/engin-shader.wasm',
): Promise<RenderWasmAcceleration> {
  if (loadPromise) return loadPromise;

  loadPromise = (async () => {
    if (typeof WebAssembly === 'undefined') {
      const fallback = makeFallbackAcceleration('WebAssembly unavailable');
      activeAcceleration = fallback;
      return fallback;
    }

    try {
      const response = await fetch(wasmUrl);
      if (!response.ok) {
        const fallback = makeFallbackAcceleration(`WASM fetch failed: ${response.status}`);
        activeAcceleration = fallback;
        return fallback;
      }

      const memory = new WebAssembly.Memory({
        initial: RENDER_WASM_PAGE_COUNT,
        maximum: RENDER_WASM_PAGE_COUNT,
        shared: true,
      });
      const binary = await response.arrayBuffer();
      const { instance } = await WebAssembly.instantiate(binary, {
        env: {
          memory,
          abort: () => { /* Optional accelerator fallback handles failed modules. */ },
        },
      });

      const exports = instance.exports as unknown as RenderWasmAccelerationExports;

      if (exports.memory && exports.memory !== memory) {
        const fallback = makeFallbackAcceleration('WASM binary did not import RenderEngin shared memory');
        activeAcceleration = fallback;
        return fallback;
      }

      if (typeof exports.computeBounds3F32 !== 'function') {
        const fallback = makeFallbackAcceleration('computeBounds3F32 export unavailable');
        activeAcceleration = fallback;
        return fallback;
      }

      const active = makeActiveAcceleration(exports, memory);
      activeAcceleration = active;
      return active;
    } catch (error) {
      const fallback = makeFallbackAcceleration(error instanceof Error ? error.message : String(error));
      activeAcceleration = fallback;
      return fallback;
    }
  })();

  return loadPromise;
}

export function getActiveRenderWasmAcceleration(): RenderWasmAcceleration | null {
  return activeAcceleration;
}

export function resetRenderWasmAccelerationForTesting(): void {
  loadPromise = null;
  activeAcceleration = null;
}
