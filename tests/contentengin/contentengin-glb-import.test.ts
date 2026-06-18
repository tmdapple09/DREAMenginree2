import { describe, expect, it } from 'vitest';
import { CONTENTENGIN_GLB_UPLOAD_LIMIT_BYTES, importGLBToEditableMesh } from '../../engins/isosurfaceAssetPipeline';

describe('ContentEngin GLB import parser', () => {
  it('imports a tiny indexed binary GLB and preserves mesh data', async () => {
    const file = glbFile(tinyGltf(), tinyBin());
    const editable = await importGLBToEditableMesh(file);
    expect(editable.mesh.vertices.length).toBe(4);
    expect(editable.mesh.indices.length).toBe(12);
    expect(editable.diagnostics.invalidIndices).toBe(0);
    expect(editable.diagnostics.triangles).toBe(4);
  });

  it('rejects malformed GLB headers cleanly', async () => {
    const file = new File([new Uint8Array([0, 1, 2, 3])], 'bad.glb', { type: 'model/gltf-binary' });
    await expect(importGLBToEditableMesh(file)).rejects.toThrow(/GLB|file|chunk|header|Not a GLB/i);
  });

  it('rejects missing BIN chunks cleanly', async () => {
    const json = paddedJson(tinyGltf());
    const out = new ArrayBuffer(20 + json.byteLength);
    const view = new DataView(out);
    view.setUint32(0, 0x46546c67, true);
    view.setUint32(4, 2, true);
    view.setUint32(8, out.byteLength, true);
    view.setUint32(12, json.byteLength, true);
    view.setUint32(16, 0x4e4f534a, true);
    new Uint8Array(out, 20).set(json);
    await expect(importGLBToEditableMesh(new File([out], 'missing-bin.glb'))).rejects.toThrow(/BIN chunk/i);
  });

  it('rejects missing POSITION accessors cleanly', async () => {
    const gltf = tinyGltf();
    delete gltf.meshes[0]!.primitives[0]!.attributes.POSITION;
    await expect(importGLBToEditableMesh(glbFile(gltf, tinyBin()))).rejects.toThrow(/POSITION and indices/i);
  });

  it('rejects missing index accessors cleanly', async () => {
    const gltf = tinyGltf();
    delete gltf.meshes[0]!.primitives[0]!.indices;
    await expect(importGLBToEditableMesh(glbFile(gltf, tinyBin()))).rejects.toThrow(/POSITION and indices/i);
  });

  it('rejects files over the mobile-safe size limit before parsing', async () => {
    const oversized = new File([new Uint8Array(CONTENTENGIN_GLB_UPLOAD_LIMIT_BYTES + 1)], 'too-big.glb', { type: 'model/gltf-binary' });
    await expect(importGLBToEditableMesh(oversized)).rejects.toThrow(/too large/i);
  });
});

function tinyGltf() {
  return {
    asset: { version: '2.0' },
    buffers: [{ byteLength: tinyBin().byteLength }],
    bufferViews: [
      { buffer: 0, byteOffset: 0, byteLength: 48, target: 34962 },
      { buffer: 0, byteOffset: 48, byteLength: 24, target: 34963 },
    ],
    accessors: [
      { bufferView: 0, componentType: 5126, count: 4, type: 'VEC3', min: [0, 0, 0], max: [1, 1, 1] },
      { bufferView: 1, componentType: 5123, count: 12, type: 'SCALAR' },
    ],
    meshes: [{ primitives: [{ attributes: { POSITION: 0 }, indices: 1, mode: 4 }] }],
    nodes: [{ mesh: 0 }],
    scenes: [{ nodes: [0] }],
    scene: 0,
  };
}

function tinyBin(): Uint8Array {
  const positions = new Float32Array([
    0, 0, 0,
    1, 0, 0,
    0, 1, 0,
    0, 0, 1,
  ]);
  const indices = new Uint16Array([0, 1, 2, 0, 3, 1, 0, 2, 3, 1, 3, 2]);
  const out = new Uint8Array(72);
  out.set(new Uint8Array(positions.buffer), 0);
  out.set(new Uint8Array(indices.buffer), 48);
  return out;
}

function glbFile(gltf: ReturnType<typeof tinyGltf>, bin: Uint8Array): File {
  const json = paddedJson(gltf);
  const binary = pad4(bin, 0);
  const total = 12 + 8 + json.byteLength + 8 + binary.byteLength;
  const out = new ArrayBuffer(total);
  const view = new DataView(out);
  let offset = 0;
  view.setUint32(offset, 0x46546c67, true); offset += 4;
  view.setUint32(offset, 2, true); offset += 4;
  view.setUint32(offset, total, true); offset += 4;
  view.setUint32(offset, json.byteLength, true); offset += 4;
  view.setUint32(offset, 0x4e4f534a, true); offset += 4;
  new Uint8Array(out, offset, json.byteLength).set(json); offset += json.byteLength;
  view.setUint32(offset, binary.byteLength, true); offset += 4;
  view.setUint32(offset, 0x004e4942, true); offset += 4;
  new Uint8Array(out, offset, binary.byteLength).set(binary);
  return new File([out], 'tiny.glb', { type: 'model/gltf-binary' });
}

function paddedJson(value: unknown): Uint8Array {
  return pad4(new TextEncoder().encode(JSON.stringify(value)), 0x20);
}

function pad4(bytes: Uint8Array, fill: number): Uint8Array {
  const out = new Uint8Array((bytes.byteLength + 3) & ~3);
  out.set(bytes);
  out.fill(fill, bytes.byteLength);
  return out;
}
