import { describe, expect, it } from 'vitest';
import { clusterizeMesh, composeModelMatrix, createMeshBuffers, createRenderAsset, mat4Identity, packAosVertexBuffer, projectVertex, shadeCookTorrance, skinVertexLbs } from '../engins/renderengin';

const quad = createMeshBuffers([
  { position: [-1,-1,0], normal: [0,0,1], uv: [0,0] },
  { position: [1,-1,0], normal: [0,0,1], uv: [1,0] },
  { position: [1,1,0], normal: [0,0,1], uv: [1,1] },
  { position: [-1,1,0], normal: [0,0,1], uv: [0,1] },
], [0,1,2,2,3,0]);

describe('RenderEngin math and asset foundations', () => {
  it('projects object-space vertices through model/view/projection into NDC', () => {
    const model = composeModelMatrix([0,0,-5], [0,0,0,1], [1,1,1]);
    const out = projectVertex([0,0,0], model, mat4Identity(), mat4Identity());
    expect(out.clip[2]).toBe(-5);
    expect(out.ndc[0]).toBe(0);
  });

  it('builds AOS 48-byte mesh buffers with generated TBN tangents', () => {
    expect(quad.packedVertexStrideBytes).toBe(48);
    expect(quad.indexFormat).toBe('uint16');
    expect(quad.vertices[0].tangent[0]).toBeCloseTo(1);
    const packed = packAosVertexBuffer(quad);
    expect(packed.data).toBeInstanceOf(Float32Array);
    expect(packed.data.length).toBe(quad.vertices.length * 12);
  });

  it('evaluates Cook-Torrance PBR lighting from ORM channels', () => {
    const color = shadeCookTorrance({ albedo: [1,0.5,0.25], normal: [0,0,1], view: [0,0,1], light: [0,0,1], radiance: [10,10,10], roughness: 0.5, metallic: 0, ambientOcclusion: 1 });
    expect(color[0]).toBeGreaterThan(color[1]);
    expect(color[0]).toBeGreaterThan(0);
  });

  it('skins vertices using final joint matrices and clusters mesh triangles for virtualized geometry', () => {
    expect(skinVertexLbs({ ...quad.vertices[0], boneIds:[0,0,0,0], weights:[1,0,0,0] }, [mat4Identity()])).toEqual([-1,-1,0]);
    expect(clusterizeMesh(quad, 1)).toHaveLength(2);
  });

  it('wraps render assets in the canonical domain object envelope', () => {
    const asset = createRenderAsset({ id:'asset-1', ownerId:'user-1', runtimeId:'runtime-1', visibility:'local', mesh:quad, material:{ albedo:[1,1,1], orm:[1,0.5,0] }, now:'2026-06-18T00:00:00.000Z' });
    expect(asset.type).toBe('asset.render3d');
    expect(asset.data.mesh.packedVertexStrideBytes).toBe(48);
  });
});
