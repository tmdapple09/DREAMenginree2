import type { DomainObject, DomainVisibility, JsonObject } from '@/engine/engin-runtime/EnginBaseState';
import { clamp01, type Vec3 } from './core';

export interface RenderMaterialData extends JsonObject {
  name: string;
  albedo: Vec3;
  roughness: number;
  metallic: number;
  ambientOcclusion: number;
  emissive: Vec3;
  alpha: number;
  doubleSided: boolean;
  textureIds: {
    albedo: string | null;
    normal: string | null;
    orm: string | null;
    emissive: string | null;
  };
  sampler: {
    mipmaps: boolean;
    anisotropy: number;
  };
}

export type RenderMaterial = DomainObject<'render.material', RenderMaterialData>;

export function createRenderMaterial(input: {
  id: string;
  ownerId: string;
  runtimeId: string;
  visibility?: DomainVisibility;
  name: string;
  albedo?: Vec3;
  roughness?: number;
  metallic?: number;
  ambientOcclusion?: number;
  emissive?: Vec3;
  alpha?: number;
  doubleSided?: boolean;
  now?: string;
}): RenderMaterial {
  const now = input.now ?? new Date().toISOString();
  return {
    id: input.id,
    type: 'render.material',
    ownerId: input.ownerId,
    runtimeId: input.runtimeId,
    visibility: input.visibility ?? 'local',
    createdAt: now,
    updatedAt: now,
    version: 1,
    data: {
      name: input.name,
      albedo: input.albedo ?? [0.58, 0.72, 0.95],
      roughness: clamp01(input.roughness ?? 0.55),
      metallic: clamp01(input.metallic ?? 0),
      ambientOcclusion: clamp01(input.ambientOcclusion ?? 1),
      emissive: input.emissive ?? [0, 0, 0],
      alpha: clamp01(input.alpha ?? 1),
      doubleSided: input.doubleSided ?? false,
      textureIds: { albedo: null, normal: null, orm: null, emissive: null },
      sampler: { mipmaps: true, anisotropy: 1 },
    },
  };
}

export function packRenderMaterial(material: RenderMaterialData): Float32Array {
  return new Float32Array([
    material.albedo[0], material.albedo[1], material.albedo[2], material.alpha,
    material.roughness, material.metallic, material.ambientOcclusion, material.doubleSided ? 1 : 0,
    material.emissive[0], material.emissive[1], material.emissive[2], 0,
  ]);
}

export function updateRenderMaterial(material: RenderMaterial, patch: Partial<RenderMaterialData>): RenderMaterial {
  return {
    ...material,
    updatedAt: new Date().toISOString(),
    version: material.version + 1,
    data: {
      ...material.data,
      ...patch,
      roughness: clamp01(patch.roughness ?? material.data.roughness),
      metallic: clamp01(patch.metallic ?? material.data.metallic),
      ambientOcclusion: clamp01(patch.ambientOcclusion ?? material.data.ambientOcclusion),
      alpha: clamp01(patch.alpha ?? material.data.alpha),
    },
  };
}
