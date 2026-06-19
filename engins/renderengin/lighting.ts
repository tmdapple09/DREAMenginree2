import type { DomainObject, DomainVisibility, JsonObject } from '@/engine/engin-runtime/EnginBaseState';
import { v3normalize, type Vec3 } from './core';

export type RenderLightKind = 'directional' | 'point' | 'spot';

export interface RenderLightData extends JsonObject {
  name: string;
  kind: RenderLightKind;
  color: Vec3;
  intensity: number;
  position: Vec3;
  direction: Vec3;
  range: number;
  innerConeRadians: number;
  outerConeRadians: number;
  castsShadow: boolean;
  shadowMapSize: number;
}

export type RenderLight = DomainObject<'render.light', RenderLightData>;

export interface RenderEnvironmentData extends JsonObject {
  name: string;
  clearColor: string;
  ambientColor: Vec3;
  ambientIntensity: number;
  environmentTextureId: string | null;
  skyboxTextureId: string | null;
  toneMapping: 'standard' | 'filmic' | 'aces';
  exposure: number;
  gammaCorrection: boolean;
  bloom: { enabled: boolean; threshold: number; intensity: number };
}

export type RenderEnvironment = DomainObject<'render.environment', RenderEnvironmentData>;

export function createRenderLight(input: {
  id: string;
  ownerId: string;
  runtimeId: string;
  visibility?: DomainVisibility;
  name: string;
  kind: RenderLightKind;
  color?: Vec3;
  intensity?: number;
  position?: Vec3;
  direction?: Vec3;
  castsShadow?: boolean;
  now?: string;
}): RenderLight {
  const now = input.now ?? new Date().toISOString();
  return {
    id: input.id,
    type: 'render.light',
    ownerId: input.ownerId,
    runtimeId: input.runtimeId,
    visibility: input.visibility ?? 'local',
    createdAt: now,
    updatedAt: now,
    version: 1,
    data: {
      name: input.name,
      kind: input.kind,
      color: input.color ?? [1, 1, 1],
      intensity: Math.max(0, input.intensity ?? 1),
      position: input.position ?? [0, 2, 2],
      direction: v3normalize(input.direction ?? [0, -1, -1]),
      range: 10,
      innerConeRadians: Math.PI / 9,
      outerConeRadians: Math.PI / 4,
      castsShadow: input.castsShadow ?? false,
      shadowMapSize: input.castsShadow ? 2048 : 0,
    },
  };
}

export function createRenderEnvironment(input: { id: string; ownerId: string; runtimeId: string; visibility?: DomainVisibility; name: string; now?: string }): RenderEnvironment {
  const now = input.now ?? new Date().toISOString();
  return {
    id: input.id,
    type: 'render.environment',
    ownerId: input.ownerId,
    runtimeId: input.runtimeId,
    visibility: input.visibility ?? 'local',
    createdAt: now,
    updatedAt: now,
    version: 1,
    data: {
      name: input.name,
      clearColor: '#eff6ff',
      ambientColor: [0.82, 0.9, 1],
      ambientIntensity: 0.4,
      environmentTextureId: null,
      skyboxTextureId: null,
      toneMapping: 'aces',
      exposure: 1,
      gammaCorrection: true,
      bloom: { enabled: false, threshold: 1, intensity: 0.2 },
    },
  };
}

export function summarizeRenderLights(lights: readonly RenderLight[]): JsonObject {
  return {
    count: lights.length,
    directional: lights.filter((light) => light.data.kind === 'directional').length,
    point: lights.filter((light) => light.data.kind === 'point').length,
    spot: lights.filter((light) => light.data.kind === 'spot').length,
    shadowCasters: lights.filter((light) => light.data.castsShadow).length,
    totalIntensity: lights.reduce((sum, light) => sum + light.data.intensity, 0),
  };
}
