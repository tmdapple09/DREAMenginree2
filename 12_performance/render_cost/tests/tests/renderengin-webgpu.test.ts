import { describe, expect, it } from 'vitest';
import { createMeshBuffers, packAosVertexBuffer, toGpuMat4 } from '../engins/renderengin';

describe('RenderEngin WebGPU upload boundary', () => {
  it('packs object vertices into a real 48-byte Float32Array upload layout', () => {
    const mesh = createMeshBuffers([
      { position: [0, 1, 0], normal: [0, 0, 1], uv: [0.5, 1] },
      { position: [-1, -1, 0], normal: [0, 0, 1], uv: [0, 0] },
      { position: [1, -1, 0], normal: [0, 0, 1], uv: [1, 0] },
    ], [0, 1, 2]);

    const packed = packAosVertexBuffer(mesh);

    expect(packed.strideBytes).toBe(48);
    expect(packed.vertexCount).toBe(3);
    expect(Array.from(packed.data.slice(0, 3))).toEqual([0, 1, 0]);
    expect(Array.from(packed.data.slice(10, 12))).toEqual([0.5, 1]);
  });

  it('transposes row-major CPU matrices before WGSL upload', () => {
    expect(toGpuMat4([
      1, 2, 3, 4,
      5, 6, 7, 8,
      9, 10, 11, 12,
      13, 14, 15, 16,
    ])).toEqual([
      1, 5, 9, 13,
      2, 6, 10, 14,
      3, 7, 11, 15,
      4, 8, 12, 16,
    ]);
  });
});
