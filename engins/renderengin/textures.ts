import type { DomainObject, DomainVisibility, JsonObject } from '@/engine/engin-runtime/EnginBaseState';

export type RenderTextureFormat = 'rgba8unorm' | 'rgba16float' | 'depth24plus';
export type RenderTextureRole = 'albedo' | 'normal' | 'orm' | 'emissive' | 'environment' | 'shadow' | 'depth-debug';

export interface RenderTextureData extends JsonObject {
  name: string;
  role: RenderTextureRole;
  width: number;
  height: number;
  format: RenderTextureFormat;
  mipLevelCount: number;
  byteLength: number;
  sourceAssetId: string | null;
  sampler: {
    addressModeU: 'clamp-to-edge' | 'repeat' | 'mirror-repeat';
    addressModeV: 'clamp-to-edge' | 'repeat' | 'mirror-repeat';
    magFilter: 'nearest' | 'linear';
    minFilter: 'nearest' | 'linear';
    mipmapFilter: 'nearest' | 'linear';
    maxAnisotropy: number;
  };
}

export type RenderTexture = DomainObject<'render.texture', RenderTextureData>;

export interface RenderTextureValidation extends JsonObject {
  valid: boolean;
  reason?: string;
  mipLevelCount: number;
  byteLength: number;
}

export function calculateMipLevelCount(width: number, height: number): number {
  return Math.floor(Math.log2(Math.max(1, Math.max(width, height)))) + 1;
}

export function estimateTextureBytes(width: number, height: number, format: RenderTextureFormat, mipmaps = true): number {
  const bytesPerPixel = format === 'rgba16float' ? 8 : 4;
  const base = Math.max(1, width) * Math.max(1, height) * bytesPerPixel;
  return Math.ceil(mipmaps ? base * 1.3334 : base);
}

export function validateRenderTexture(input: { width: number; height: number; format: RenderTextureFormat; mipmaps?: boolean }): RenderTextureValidation {
  if (!Number.isInteger(input.width) || !Number.isInteger(input.height) || input.width <= 0 || input.height <= 0) {
    return { valid: false, reason: 'Texture dimensions must be positive integers.', mipLevelCount: 0, byteLength: 0 };
  }
  const maxSize = 8192;
  if (input.width > maxSize || input.height > maxSize) {
    return { valid: false, reason: `Texture dimensions exceed ${maxSize}px safety limit.`, mipLevelCount: 0, byteLength: 0 };
  }
  const mipLevelCount = input.mipmaps === false ? 1 : calculateMipLevelCount(input.width, input.height);
  return { valid: true, mipLevelCount, byteLength: estimateTextureBytes(input.width, input.height, input.format, input.mipmaps !== false) };
}

export function createRenderTexture(input: {
  id: string;
  ownerId: string;
  runtimeId: string;
  visibility?: DomainVisibility;
  name: string;
  role: RenderTextureRole;
  width: number;
  height: number;
  format?: RenderTextureFormat;
  sourceAssetId?: string | null;
  mipmaps?: boolean;
  now?: string;
}): RenderTexture {
  const format = input.format ?? 'rgba8unorm';
  const validation = validateRenderTexture({ width: input.width, height: input.height, format, mipmaps: input.mipmaps });
  if (!validation.valid) throw new Error(validation.reason ?? 'Invalid RenderEngin texture.');
  const now = input.now ?? new Date().toISOString();
  return {
    id: input.id,
    type: 'render.texture',
    ownerId: input.ownerId,
    runtimeId: input.runtimeId,
    visibility: input.visibility ?? 'local',
    createdAt: now,
    updatedAt: now,
    version: 1,
    data: {
      name: input.name,
      role: input.role,
      width: input.width,
      height: input.height,
      format,
      mipLevelCount: validation.mipLevelCount,
      byteLength: validation.byteLength,
      sourceAssetId: input.sourceAssetId ?? null,
      sampler: { addressModeU: 'repeat', addressModeV: 'repeat', magFilter: 'linear', minFilter: 'linear', mipmapFilter: 'linear', maxAnisotropy: 1 },
    },
  };
}

export function createTextureMemoryReport(textures: readonly RenderTexture[]): JsonObject {
  const totalBytes = textures.reduce((sum, texture) => sum + texture.data.byteLength, 0);
  return { textureCount: textures.length, totalBytes, byRole: textures.reduce<Record<string, number>>((roles, texture) => ({ ...roles, [texture.data.role]: (roles[texture.data.role] ?? 0) + texture.data.byteLength }), {}) };
}
