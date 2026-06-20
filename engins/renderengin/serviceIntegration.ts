import type { JsonObject } from '@/engine/engin-runtime/EnginBaseState';
import { EnginDispatcher, type RenderDispatcherIntent } from '@/engine/runtime/EnginDispatcher';
import type { RenderIntentType } from './core';

export type RenderWorkflowSurface = 'DreamDMBar' | 'HomeDream' | 'DreamSpace' | 'Daydream' | 'ContentEngin' | 'GameEngin' | 'CodeEngin' | 'LabEngin';

export interface RenderServiceCommand extends JsonObject {
  id: string;
  label: string;
  surface: RenderWorkflowSurface;
  intentType: RenderIntentType;
  route: string;
}

export interface RenderServiceHandoff extends JsonObject {
  source: Extract<RenderWorkflowSurface, 'ContentEngin' | 'GameEngin' | 'CodeEngin' | 'LabEngin'>;
  intentType: RenderIntentType;
  acceptedAssetKinds: string[];
}

export interface RenderServiceIntegrationResult extends JsonObject {
  accepted: boolean;
  intentId: string;
  source: RenderWorkflowSurface;
  intentType: RenderIntentType;
  targetCapability: 'render';
  dispatcherQueued: boolean;
  route: string;
}

export const RENDER_SERVICE_PIPELINE: readonly string[] = Object.freeze([
  'User Action',
  'Intent',
  'Runtime Orchestration',
  'Capability Resolution',
  'Engin Execution',
  'State Mutation',
  'Event Distribution',
  'Surface Update',
]);

export const RENDER_SERVICE_COMMANDS: readonly RenderServiceCommand[] = Object.freeze([
  { id: 'render:preview-asset', label: 'Preview selected asset in Render', surface: 'DreamDMBar', intentType: 'render.asset.preview', route: '/engines/render' },
  { id: 'render:open-viewport', label: 'Open Render viewport', surface: 'HomeDream', intentType: 'render.viewport.resize', route: '/engines/render' },
  { id: 'render:snapshot', label: 'Capture Render snapshot', surface: 'DreamSpace', intentType: 'render.viewport.snapshot', route: '/engines/render' },
  { id: 'render:frame', label: 'Render current frame', surface: 'Daydream', intentType: 'render.frame.render', route: '/engines/render' },
  { id: 'content:render-preview', label: 'Preview ContentEngin export in Render', surface: 'ContentEngin', intentType: 'render.asset.preview', route: '/engines/render' },
  { id: 'game:render-cartridge', label: 'Preview GameEngin cartridge in Render', surface: 'GameEngin', intentType: 'render.asset.load', route: '/engines/render' },
  { id: 'code:render-shader', label: 'Preview CodeEngin shader in Render', surface: 'CodeEngin', intentType: 'render.material.set', route: '/engines/render' },
  { id: 'lab:render-simulation', label: 'Preview LabEngin simulation in Render', surface: 'LabEngin', intentType: 'render.scene.load', route: '/engines/render' },
]);

export const RENDER_SERVICE_HANDOFFS: readonly RenderServiceHandoff[] = Object.freeze([
  { source: 'ContentEngin', intentType: 'render.asset.preview', acceptedAssetKinds: ['glb', 'obj', 'mesh', 'recipe-output'] },
  { source: 'GameEngin', intentType: 'render.asset.load', acceptedAssetKinds: ['cartridge-mesh', 'terrain', 'scene', 'level'] },
  { source: 'CodeEngin', intentType: 'render.material.set', acceptedAssetKinds: ['wgsl', 'shader', 'material'] },
  { source: 'LabEngin', intentType: 'render.scene.load', acceptedAssetKinds: ['simulation-mesh', 'point-cloud', 'field'] },
]);

export function createRenderServiceIntent(source: RenderWorkflowSurface, intentType: RenderIntentType, payload: JsonObject = {}): JsonObject {
  return {
    id: `render-intent:${source}:${intentType}:${String(payload.assetId ?? payload.sceneId ?? Date.now())}`,
    type: 'intent.render',
    ownerId: String(payload.ownerId ?? 'runtime'),
    runtimeId: String(payload.runtimeId ?? 'render:shared'),
    visibility: payload.visibility === 'shared' || payload.visibility === 'global' ? payload.visibility : 'local',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    version: 1,
    data: { source, intentType, targetCapability: 'render', payload },
  };
}

export function getRenderHandoffForSource(source: RenderWorkflowSurface): RenderServiceHandoff | null {
  return RENDER_SERVICE_HANDOFFS.find((handoff) => handoff.source === source) ?? null;
}

export function dispatchRenderServiceIntent(source: RenderWorkflowSurface, intentType: RenderIntentType, payload: JsonObject = {}): RenderServiceIntegrationResult {
  const intent = createRenderServiceIntent(source, intentType, payload);
  const dispatcherIntent: Omit<RenderDispatcherIntent, 'createdAt'> = {
    type: intentType,
    source,
    payload: intent.data as unknown as Record<string, unknown>,
  };
  const dispatcherQueued = EnginDispatcher.getInstance().dispatchRenderIntent(dispatcherIntent);
  return {
    accepted: dispatcherQueued,
    intentId: String(intent.id),
    source,
    intentType,
    targetCapability: 'render',
    dispatcherQueued,
    route: '/engines/render',
  };
}

export function dispatchRenderHandoff(source: Extract<RenderWorkflowSurface, 'ContentEngin' | 'GameEngin' | 'CodeEngin' | 'LabEngin'>, assetKind: string, payload: JsonObject = {}): RenderServiceIntegrationResult {
  const handoff = getRenderHandoffForSource(source);
  if (!handoff) {
    return { accepted: false, intentId: '', source, intentType: 'render.asset.preview', targetCapability: 'render', dispatcherQueued: false, route: '/engines/render' };
  }
  if (!handoff.acceptedAssetKinds.includes(assetKind)) {
    return { accepted: false, intentId: '', source, intentType: handoff.intentType, targetCapability: 'render', dispatcherQueued: false, route: '/engines/render' };
  }
  return dispatchRenderServiceIntent(source, handoff.intentType, { ...payload, assetKind });
}
