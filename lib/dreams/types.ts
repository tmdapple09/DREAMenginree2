import { isJsonObject, isJsonSerializable, type JsonObject } from '@/lib/engin-runtime/EnginBaseState';

/**
 * lib/dreams/types.ts
 *
 * Dream — DREAMengin's universal user-facing object model.
 *
 * A Dream is the single umbrella type for every user-facing object, surface,
 * experience, and building block inside DREAMengin. Nothing creates a
 * parallel object model. Everything is a Dream or renders through one.
 *
 * Architecture: ARCHITECTURE.md §10 — Dreams as the core user-facing object model.
 * Naming authority: lib/identity/canonical-names.ts
 * Law: LAW.md §product law — one shared model, many surfaces.
 *
 * Surfaces (where a Dream can appear):
 *   HomeDream · DreamSpace · DreamR · DreamDMBar · GameEngin · SharedDream · Profile
 *
 * Render modes (how a Dream renders on a surface):
 *   Window · Widget · Game · Tool · FeedObject · MediaObject · SpatialObject
 *   · ProfileSurface · SharedObject · Environment · Ruleset · Simulation
 *
 * Capabilities (what the user can do with a Dream):
 *   editable · movable · resizable · playable · shareable · cloneable
 *   · deletable · attachable · fullscreenable · postable · remixable
 */

/** Canonical surface names where a Dream can be placed or rendered. */
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

/**
 * What kind of object a Dream is.
 * Kind declares the Dream's nature — not how it renders on a surface.
 * A Dream of kind 'game' can render as a Window, Widget, or full GameEngin surface.
 */
export type DreamKind =
  | 'widget'       // small movable tool/tile
  | 'window'       // floating windowed experience
  | 'game'         // playable game/cartridge experience
  | 'tool'         // functional creative tool
  | 'media'        // image/video/audio/embed object
  | 'post'         // feed/social post object
  | 'note'         // personal note/scratch space
  | 'profile'      // identity/profile surface
  | 'world'        // spatial environment/space
  | 'ruleset'      // behavior/simulation ruleset
  | 'simulation'   // live simulation object
  | 'environment'  // environmental/background space
  | 'app'          // mini-app experience
  | 'connector'    // outside-service bridge object
  | 'artifact'     // created artifact (code, music, design output)
  | 'collection'   // group of Dreams
  | 'stream';      // live feed/content stream

/**
 * How a Dream renders on the active surface.
 * Render mode is a presentation decision, not identity.
 * The same Dream can render differently on HomeDream vs DreamSpace vs DreamR.
 */
export type DreamRenderMode =
  | 'window'         // floating draggable window
  | 'widget'         // small pinned tile
  | 'fullscreen'     // fullscreen takeover
  | 'feed-card'      // feed/social card
  | 'media-object'   // standalone media tile
  | 'spatial-object' // 3D/spatial world object
  | 'profile-card'   // profile/identity card
  | 'shared-object'  // shared-world object
  | 'embed'          // embedded inline object
  | 'overlay';       // floating overlay layer

/** Who can see this Dream. Defaults to 'private'. */
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

/** @deprecated Use DreamKind + DreamRenderMode instead. */
export type DreamLayer = 'shell' | 'connector' | 'feature' | 'output';

/**
 * The set of actions the current user is permitted to perform on a Dream.
 * Every permission is false by default — explicit grant required.
 */
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

/** Permissions for a Dream owned by the current user. */
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

/** Permissions for a public/shared Dream the user does not own. */
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

/** All permissions denied. */
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

/** Where a Dream is positioned on a surface that supports spatial placement. */
export interface DreamPlacement {
  surface: DreamSurface;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
}

/**
 * Runtime capability binding — which engin/provider powers this Dream and
 * what capabilities it exposes through the runtime.
 */
export interface DreamCapabilityMap {
  /** The engin or provider that powers this Dream (e.g. 'GameEngin', 'StarMakerEngin'). */
  provider: string | null;
  /** Whether the capability binding is active and connected. */
  connected: boolean;
  /** Named capability identifiers this Dream exposes. */
  capabilities: string[];
}

/**
 * How a Dream projects its identity onto a surface.
 * Used by Profile, HomeDream, and DreamR surfaces to render a filtered view.
 * @deprecated Prefer DreamSurfaceAdapter for surface-specific projections.
 */
export interface DreamProjection {
  widgetId: string;
  visibility: DreamVisibility;
  exposedFields: string[];
  updatedAt?: string;
}

/**
 * How a Dream appears when rendered on a specific surface.
 * Different surfaces can render the same Dream differently without
 * duplicating the Dream's core model.
 */
export interface DreamSurfaceAdapter {
  surface: DreamSurface;
  renderMode: DreamRenderMode;
  /** Override label for this surface context (e.g. 'Game' on GameEngin, 'Post' on DreamR). */
  label?: string;
  /** Surface-specific config bag (layout overrides, visibility overrides, etc.). */
  config?: JsonObject;
}

/**
 * Dream — the universal user-facing object model.
 *
 * Every user-facing object, experience, surface, and building block in
 * DREAMengin is or can become a Dream. The same Dream renders on HomeDream
 * as a Widget, on GameEngin as a Game, on DreamR as a Feed card, on
 * DreamSpace as a Spatial Object — one model, many surfaces.
 *
 * System Dreams are built-in canonical definitions.
 * User Dreams are user-owned customized instances.
 * Both use this same model. Origin distinguishes them, not architecture.
 */
export interface Dream {
  // ── Identity ──────────────────────────────────────────────────────────────
  /** Unique identifier. */
  id: string;
  /** Human-readable label. */
  label: string;
  /** What kind of object this Dream is (nature, not presentation). */
  kind: DreamKind;

  /** User ID of the owner. Null for system/built-in Dreams. */
  ownerId: string | null;
  /**
   * Origin — where this Dream came from.
   * 'system'      = built-in canonical Dream definition
   * 'user'        = user-created Dream instance
   * 'marketplace' = installed from marketplace
   * 'shared'      = received via Shared Dreams
   * 'remix'       = remixed from another Dream
   */
  origin: 'system' | 'user' | 'marketplace' | 'shared' | 'remix';

  /** Visibility — who can see this Dream. */
  visibility: DreamVisibility;

  /** What the current user is permitted to do with this Dream. */
  permissions: DreamPermissions;

  /** The active surface where this Dream is currently placed. */
  activeSurface: DreamSurface | null;
  /** How this Dream renders on its active surface. */
  renderMode: DreamRenderMode;
  /** Surface-specific adapter overrides for different rendering contexts. */
  surfaceAdapters?: DreamSurfaceAdapter[];

  /** Spatial placement when the Dream is on a positional surface. */
  placement?: DreamPlacement;

  /** Which engin/provider powers this Dream. */
  capability: DreamCapabilityMap;

  /** Dream lifecycle state. */
  state: 'idle' | 'active' | 'minimized' | 'loading' | 'error';
  /** Domain-specific state bag (game state, note content, music session, etc.). */
  domainState: JsonObject;

  /** Engin rule-set ID powering this Dream's behavior (if simulation/game). */
  ruleSetId?: string;

  createdAt: string;
  updatedAt: string;
  /** Tags for search, discovery, and filtering. */
  tags?: string[];
  /** Preview image URL for feed cards, thumbnails, and marketplace listings. */
  previewUrl?: string;
}

/**
 * DrEamsIntentType — the canonical typed intent payloads that flow through
 * the EnginDispatcher and dreamOSBus when acting on Dreams.
 *
 * All Dream mutations MUST flow through these typed intents.
 * No Dream state changes happen outside the intent seam.
 */
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

/** Narrow a DrEamsIntentType to a specific intent type string. */
export type DrEamsIntent<T extends DrEamsIntentType['type']> = Extract<DrEamsIntentType, { type: T }>;

/** Create a minimal Dream with required fields and safe defaults. */
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

/** Type guard — check whether a value is a complete, usable Dream. */
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

/** Check whether a Dream grants a specific permission to the current user. */
export function dreamCan(dream: Dream, permission: keyof DreamPermissions): boolean {
  return isDream(dream) && dream.permissions[permission] === true;
}

/** Resolve the active surface adapter without duplicating the Dream. */
export function resolveDreamSurfaceAdapter(
  dream: Dream,
  surface: DreamSurface,
): DreamSurfaceAdapter {
  const existing = dream.surfaceAdapters?.find((adapter) => adapter.surface === surface);
  if (existing) return existing;
  return { surface, renderMode: dream.renderMode, label: dream.label };
}
