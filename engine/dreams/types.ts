import { isJsonObject, isJsonSerializable, type JsonObject } from '@/engine/engin-runtime/EnginBaseState';




export type DreamSurface =
  | 'homedream'
  | 'dreamspace'
  | 'dreamr'
  | 'dreamdmbar'
  | 'gameengin'
  | 'shared-dream'
  | 'profile'
  | 'edit-profiledream'
  | 'view-profile';


export type DreamKind =
  | 'widget'       
  | 'window'       
  | 'game'         
  | 'tool'         
  | 'media'        
  | 'post'         
  | 'note'         
  | 'profile'      
  | 'world'        
  | 'ruleset'      
  | 'simulation'   
  | 'environment'  
  | 'app'          
  | 'connector'    
  | 'artifact'     
  | 'collection'   
  | 'stream';      


export type DreamRenderMode =
  | 'window'         
  | 'widget'         
  | 'fullscreen'     
  | 'feed-card'      
  | 'media-object'   
  | 'spatial-object' 
  | 'profile-card'   
  | 'shared-object'  
  | 'embed'          
  | 'overlay';       


export type DreamVisibility = 'private' | 'followers' | 'public' | 'shared';

export const DREAM_SURFACES = [
  'homedream',
  'dreamspace',
  'dreamr',
  'dreamdmbar',
  'gameengin',
  'shared-dream',
  'profile',
  'edit-profiledream',
  'view-profile',
] as const satisfies readonly DreamSurface[];

export const DREAM_KINDS = [
  'widget',
  'window',
  'game',
  'tool',
  'media',
  'post',
  'note',
  'profile',
  'world',
  'ruleset',
  'simulation',
  'environment',
  'app',
  'connector',
  'artifact',
  'collection',
  'stream',
] as const satisfies readonly DreamKind[];

export const DREAM_RENDER_MODES = [
  'window',
  'widget',
  'fullscreen',
  'feed-card',
  'media-object',
  'spatial-object',
  'profile-card',
  'shared-object',
  'embed',
  'overlay',
] as const satisfies readonly DreamRenderMode[];

export const DREAM_VISIBILITIES = [
  'private',
  'followers',
  'public',
  'shared',
] as const satisfies readonly DreamVisibility[];

const DREAM_ORIGINS = ['system', 'user', 'marketplace', 'shared', 'remix'] as const;
const DREAM_STATES = ['idle', 'active', 'minimized', 'loading', 'error'] as const;
const DREAM_PERMISSION_KEYS = [
  'editable',
  'movable',
  'resizable',
  'playable',
  'shareable',
  'cloneable',
  'deletable',
  'attachable',
  'fullscreenable',
  'postable',
  'remixable',
] as const satisfies readonly (keyof DreamPermissions)[];

function oneOf<T extends string>(value: unknown, allowed: readonly T[]): value is T {
  return typeof value === 'string' && allowed.includes(value as T);
}


export type DreamLayer = 'shell' | 'connector' | 'feature' | 'output';


export interface DreamPermissions {
  editable: boolean;
  movable: boolean;
  resizable: boolean;
  playable: boolean;
  shareable: boolean;
  cloneable: boolean;
  deletable: boolean;
  attachable: boolean;
  fullscreenable: boolean;
  postable: boolean;
  remixable: boolean;
}


export const OWNER_PERMISSIONS: Readonly<DreamPermissions> = Object.freeze({
  editable: true,
  movable: true,
  resizable: true,
  playable: true,
  shareable: true,
  cloneable: true,
  deletable: true,
  attachable: true,
  fullscreenable: true,
  postable: true,
  remixable: true,
});


export const VIEWER_PERMISSIONS: Readonly<DreamPermissions> = Object.freeze({
  editable: false,
  movable: false,
  resizable: false,
  playable: true,
  shareable: true,
  cloneable: false,
  deletable: false,
  attachable: false,
  fullscreenable: true,
  postable: false,
  remixable: false,
});


export const NO_PERMISSIONS: Readonly<DreamPermissions> = Object.freeze({
  editable: false,
  movable: false,
  resizable: false,
  playable: false,
  shareable: false,
  cloneable: false,
  deletable: false,
  attachable: false,
  fullscreenable: false,
  postable: false,
  remixable: false,
});


export interface DreamPlacement {
  surface: DreamSurface;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
}


export interface DreamCapabilityMap {
  
  provider: string | null;
  
  connected: boolean;
  
  capabilities: string[];
}


export interface DreamProjection {
  widgetId: string;
  visibility: DreamVisibility;
  exposedFields: string[];
  updatedAt?: string;
}


export interface DreamSurfaceAdapter {
  surface: DreamSurface;
  renderMode: DreamRenderMode;
  
  label?: string;
  
  config?: JsonObject;
}


export interface Dream {
  
  
  id: string;
  
  label: string;
  
  kind: DreamKind;

  
  ownerId: string | null;
  
  origin: 'system' | 'user' | 'marketplace' | 'shared' | 'remix';

  
  visibility: DreamVisibility;

  
  permissions: DreamPermissions;

  
  activeSurface: DreamSurface | null;
  
  renderMode: DreamRenderMode;
  
  surfaceAdapters?: DreamSurfaceAdapter[];

  
  placement?: DreamPlacement;

  
  capability: DreamCapabilityMap;

  
  state: 'idle' | 'active' | 'minimized' | 'loading' | 'error';
  
  domainState: JsonObject;

  
  ruleSetId?: string;

  createdAt: string;
  updatedAt: string;
  
  tags?: string[];
  
  previewUrl?: string;
}


export type DrEamsIntentType =
  | { type: 'dream:open';       payload: { dreamId: string; surface: DreamSurface; renderMode?: DreamRenderMode } }
  | { type: 'dream:close';      payload: { dreamId: string } }
  | { type: 'dream:move';       payload: { dreamId: string; placement: DreamPlacement } }
  | { type: 'dream:resize';     payload: { dreamId: string; width: number; height: number } }
  | { type: 'dream:minimize';   payload: { dreamId: string } }
  | { type: 'dream:maximize';   payload: { dreamId: string } }
  | { type: 'dream:pin';        payload: { dreamId: string; surface: DreamSurface } }
  | { type: 'dream:unpin';      payload: { dreamId: string } }
  | { type: 'dream:share';      payload: { dreamId: string; visibility: DreamVisibility } }
  | { type: 'dream:clone';      payload: { dreamId: string; targetSurface?: DreamSurface } }
  | { type: 'dream:delete';     payload: { dreamId: string } }
  | { type: 'dream:post';       payload: { dreamId: string; caption?: string } }
  | { type: 'dream:attach';     payload: { dreamId: string; targetId: string; targetType: string } }
  | { type: 'dream:transfer';   payload: { dreamId: string; fromSurface: DreamSurface; toSurface: DreamSurface } }
  | { type: 'dream:state-patch'; payload: { dreamId: string; patch: JsonObject } };


export type DrEamsIntent<T extends DrEamsIntentType['type']> = Extract<DrEamsIntentType, { type: T }>;


export function createDream(
  input: Pick<Dream, 'id' | 'label' | 'kind' | 'ownerId'> & Partial<Omit<Dream, 'id' | 'label' | 'kind' | 'ownerId'>>,
): Dream {
  const now = new Date().toISOString();
  const dream: Dream = {
    origin: 'user',
    visibility: 'private',
    permissions: input.ownerId ? { ...OWNER_PERMISSIONS } : { ...NO_PERMISSIONS },
    activeSurface: null,
    renderMode: 'widget',
    capability: { provider: null, connected: false, capabilities: [] },
    state: 'idle',
    domainState: {},
    createdAt: now,
    updatedAt: now,
    ...input,
  };

  if (!isDream(dream)) {
    throw new Error('Cannot create an invalid Dream object.');
  }
  return dream;
}

function isIsoTimestamp(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) && new Date(timestamp).toISOString() === value;
}

function isPermissionSet(value: unknown): value is DreamPermissions {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const permissions = value as Partial<Record<keyof DreamPermissions, unknown>>;
  return DREAM_PERMISSION_KEYS.every((key) => typeof permissions[key] === 'boolean');
}

function isPlacement(value: unknown): value is DreamPlacement {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const placement = value as Partial<DreamPlacement>;
  return (
    oneOf(placement.surface, DREAM_SURFACES) &&
    Number.isFinite(placement.x) &&
    Number.isFinite(placement.y) &&
    Number.isFinite(placement.width) &&
    placement.width! > 0 &&
    Number.isFinite(placement.height) &&
    placement.height! > 0 &&
    Number.isFinite(placement.zIndex)
  );
}

function isCapabilityMap(value: unknown): value is DreamCapabilityMap {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const capability = value as Partial<DreamCapabilityMap>;
  return (
    (capability.provider === null || typeof capability.provider === 'string') &&
    typeof capability.connected === 'boolean' &&
    Array.isArray(capability.capabilities) &&
    capability.capabilities.every((item) => typeof item === 'string' && item.trim().length > 0)
  );
}

function isSurfaceAdapter(value: unknown): value is DreamSurfaceAdapter {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const adapter = value as Partial<DreamSurfaceAdapter>;
  return (
    oneOf(adapter.surface, DREAM_SURFACES) &&
    oneOf(adapter.renderMode, DREAM_RENDER_MODES) &&
    (adapter.label === undefined || typeof adapter.label === 'string') &&
    (adapter.config === undefined || isJsonObject(adapter.config))
  );
}


export function isDream(value: unknown): value is Dream {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const d = value as Partial<Dream>;
  return (
    typeof d.id === 'string' && d.id.trim().length > 0 &&
    typeof d.label === 'string' && d.label.trim().length > 0 &&
    oneOf(d.kind, DREAM_KINDS) &&
    (d.ownerId === null || (typeof d.ownerId === 'string' && d.ownerId.trim().length > 0)) &&
    oneOf(d.origin, DREAM_ORIGINS) &&
    oneOf(d.visibility, DREAM_VISIBILITIES) &&
    isPermissionSet(d.permissions) &&
    (d.activeSurface === null || oneOf(d.activeSurface, DREAM_SURFACES)) &&
    oneOf(d.renderMode, DREAM_RENDER_MODES) &&
    (d.surfaceAdapters === undefined || (Array.isArray(d.surfaceAdapters) && d.surfaceAdapters.every(isSurfaceAdapter))) &&
    (d.placement === undefined || isPlacement(d.placement)) &&
    isCapabilityMap(d.capability) &&
    oneOf(d.state, DREAM_STATES) &&
    isJsonObject(d.domainState) &&
    (d.ruleSetId === undefined || (typeof d.ruleSetId === 'string' && d.ruleSetId.trim().length > 0)) &&
    isIsoTimestamp(d.createdAt) &&
    isIsoTimestamp(d.updatedAt) &&
    Date.parse(d.updatedAt) >= Date.parse(d.createdAt) &&
    (d.tags === undefined || (Array.isArray(d.tags) && d.tags.every((tag) => typeof tag === 'string'))) &&
    (d.previewUrl === undefined || typeof d.previewUrl === 'string') &&
    isJsonSerializable(d.domainState)
  );
}


export function dreamCan(dream: Dream, permission: keyof DreamPermissions): boolean {
  return isDream(dream) && dream.permissions[permission] === true;
}


export function resolveDreamSurfaceAdapter(
  dream: Dream,
  surface: DreamSurface,
): DreamSurfaceAdapter {
  const existing = dream.surfaceAdapters?.find((adapter) => adapter.surface === surface);
  if (existing) return existing;
  return { surface, renderMode: dream.renderMode, label: dream.label };
}
