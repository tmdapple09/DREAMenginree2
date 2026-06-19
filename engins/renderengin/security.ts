import type { JsonObject } from '@/engine/engin-runtime/EnginBaseState';

export type RenderCapabilityAction = 'read' | 'write' | 'share' | 'move' | 'duplicate' | 'publish' | 'destroy' | 'admin';

export interface RenderAuthorizationContext extends JsonObject {
  actorId: string;
  ownerId: string;
  runtimeId: string;
  objectRuntimeId: string;
  visibility: 'local' | 'shared' | 'global';
  surfaceScope: 'DreamDMBar' | 'HomeDream' | 'DreamSpace' | 'Daydream' | 'Engin';
  collaborationState: 'solo' | 'invited' | 'shared-session';
}

export interface RenderAuthorizationDecision extends JsonObject { allowed: boolean; reason: string }

export function authorizeRenderCapability(action: RenderCapabilityAction, context: RenderAuthorizationContext): RenderAuthorizationDecision {
  if (!context.actorId) return { allowed: false, reason: 'Missing actor identity.' };
  if (context.runtimeId !== context.objectRuntimeId) return { allowed: false, reason: 'Runtime context mismatch.' };
  const owns = context.actorId === context.ownerId;
  if (action === 'read' && (owns || context.visibility === 'shared' || context.visibility === 'global')) return { allowed: true, reason: 'Readable by owner or visibility.' };
  if ((action === 'write' || action === 'destroy' || action === 'move') && !owns) return { allowed: false, reason: 'Mutation requires owner.' };
  if ((action === 'share' || action === 'publish') && !owns) return { allowed: false, reason: 'Sharing requires owner.' };
  if (context.surfaceScope === 'DreamDMBar' && action === 'destroy') return { allowed: false, reason: 'DreamDMBar cannot destroy render assets.' };
  if (context.collaborationState === 'shared-session' && context.visibility === 'local' && action !== 'read') return { allowed: false, reason: 'Shared sessions cannot mutate local-only render objects.' };
  return { allowed: true, reason: 'Capability authorized.' };
}

export function validateRenderAssetManifestServer(manifest: JsonObject): RenderAuthorizationDecision {
  if (typeof manifest.id !== 'string' || typeof manifest.ownerId !== 'string' || typeof manifest.runtimeId !== 'string') return { allowed: false, reason: 'Manifest is missing id, ownerId, or runtimeId.' };
  if (manifest.visibility !== 'local' && manifest.visibility !== 'shared' && manifest.visibility !== 'global') return { allowed: false, reason: 'Manifest visibility is invalid.' };
  if (typeof manifest.byteLength === 'number' && manifest.byteLength > 512 * 1024 * 1024) return { allowed: false, reason: 'Render asset exceeds server upload size limit.' };
  return { allowed: true, reason: 'Manifest accepted.' };
}
