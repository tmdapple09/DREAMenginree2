









export enum HostKind {
  HOST_FEED_VIEW = 1,
  HOST_COMPOSITE = 2,
  
}






export const DreamSurface = {
  HOMEDREAM:          0, 
  EDIT_PROFILE_DREAM: 2, 
  VIEW_PROFILE:       2, 
  DOCK:               3, 
} as const;
export type DreamSurfaceKey = keyof typeof DreamSurface;


export enum Surface {
  HOME = 0,
  FACE = 1,
  PROFILE = 2,
  DOCK = 3,
}





export enum PresentationMode {
  TILE = 0,
  WINDOW = 1,
  DOCKED = 2,
  FULL = 3,
}





export enum FeedScope {
  SELF = 0,
  FOLLOW = 1,
}





export enum FeedSort {
  RECENT = 0,
  PINNED_FIRST = 1,
  TOP = 2,
}





export enum PolicyBits {
  USER_ONLY = 1 << 0,
  ADMIN_ONLY = 1 << 1,
  PUBLIC_PREVIEW_ALLOWED = 1 << 2,
}





export interface WidgetTransform {
  x: number;
  y: number;
  scale: number;
  rotation: number;
  opacity: number;
}


export function transformToArray(t: WidgetTransform): Float32Array {
  return new Float32Array([t.x, t.y, t.scale, t.rotation, t.opacity]);
}

export function transformFromArray(arr: Float32Array): WidgetTransform {
  return {
    x: arr[0],
    y: arr[1],
    scale: arr[2],
    rotation: arr[3],
    opacity: arr[4],
  };
}





export interface FeedHostConfig {
  scope: FeedScope;
  target_user_id: string | null; 
  filters: {
    tags?: string[];
    content_type?: string[];
    project_id?: string;
    [key: string]: unknown; 
  };
  sort: FeedSort;
  limit: number; 
  realtime: boolean;
  include_media: boolean;
  include_reposts: boolean;
}


export const DEFAULT_FEED_HOST_CONFIG: FeedHostConfig = {
  scope: FeedScope.SELF,
  target_user_id: null,
  filters: {},
  sort: FeedSort.RECENT,
  limit: 25,
  realtime: true,
  include_media: true,
  include_reposts: false,
};





export interface CompositePane {
  pane_id: string;
  host_kind: HostKind;
  host_config: FeedHostConfig | Record<string, unknown>;
  layout: {
    position?: { x: number; y: number };
    size?: { width: number; height: number };
  };
}

export interface CompositeHostConfig {
  panes: CompositePane[];
  layout_mode: 'tabs' | 'split' | 'stack';
}





export type HostConfig = FeedHostConfig | CompositeHostConfig | Record<string, unknown>;





export interface DreamDefinition {
  widget_id: string;
  owner_id: string;
  name: string;
  host_kind: HostKind;
  host_config: HostConfig;
  settings: Record<string, unknown>;
  policy: number; 
  created_at: string;
  updated_at: string;
}





export interface DreamInstance {
  instance_id: string;
  widget_id: string;
  owner_id: string;

  
  surface: Surface;
  surface_key: number; 
  slot_index: number; 

  
  presentation: PresentationMode;
  transform_x: number;
  transform_y: number;
  transform_scale: number;
  transform_rotation: number;
  transform_opacity: number;

  
  z_index: number;
  focus_rank: number;

  
  runtime_flags: number; 

  created_at: string;
  updated_at: string;
}


export type WidgetDefinition = DreamDefinition;
export type WidgetInstance = DreamInstance;

export function getInstanceTransform(instance: DreamInstance): WidgetTransform {
  return {
    x: instance.transform_x,
    y: instance.transform_y,
    scale: instance.transform_scale,
    rotation: instance.transform_rotation,
    opacity: instance.transform_opacity,
  };
}


export function setInstanceTransform(
  instance: WidgetInstance,
  transform: WidgetTransform
): DreamInstance {
  return {
    ...instance,
    transform_x: transform.x,
    transform_y: transform.y,
    transform_scale: transform.scale,
    transform_rotation: transform.rotation,
    transform_opacity: transform.opacity,
  };
}





export enum HostResolvedStatus {
  OK = 'OK',
  FORBIDDEN = 'FORBIDDEN',
  ERROR = 'ERROR',
}





export interface FeedItemSummary {
  item_id: string;
  author_id: string;
  created_at: string;
  text_preview: string;
  media_preview_url?: string;
  engagement_counts?: {
    likes?: number;
    comments?: number;
    shares?: number;
  };
  visibility: 'public' | 'followers' | 'private';
}





export interface HostResolved {
  kind: HostKind;
  status: HostResolvedStatus;
  items?: FeedItemSummary[];
  cursor?: string | null;
  etag?: string | null;
  updated_at?: string;
  error_message?: string;
}





export enum WidgetActionCommand {
  REBIND_SCOPE = 'REBIND_SCOPE',
  SET_TARGET_USER = 'SET_TARGET_USER',
  SET_FILTERS = 'SET_FILTERS',
  SET_SORT = 'SET_SORT',
  TOGGLE_REALTIME = 'TOGGLE_REALTIME',
  OPEN_ITEM = 'OPEN_ITEM',
  DOCK = 'DOCK',
  RENAME = 'RENAME',
  SETTINGS = 'SETTINGS',
}

export interface WidgetAction {
  command: WidgetActionCommand;
  params?: Record<string, unknown>;
}





export interface WidgetEngineState {
  instances: Map<string, WidgetInstance>;
  definitions: Map<string, WidgetDefinition>;
  resolved: Map<string, HostResolved>;

  
  activeGesture: boolean;

  
  currentSurface: Surface;
  currentSurfaceKey: number;
}





export function isFeedHostConfig(config: HostConfig): config is FeedHostConfig {
  return 'scope' in config && typeof config.scope === 'number';
}

export function isCompositeHostConfig(config: HostConfig): config is CompositeHostConfig {
  return 'panes' in config && Array.isArray(config.panes);
}





export function validateFeedHostConfig(config: Partial<FeedHostConfig>): FeedHostConfig {
  const scope = config.scope ?? FeedScope.SELF;
  const target_user_id = scope === FeedScope.SELF ? null : config.target_user_id ?? null;
  const limit = Math.max(5, Math.min(200, config.limit ?? 25));

  return {
    scope,
    target_user_id,
    filters: config.filters ?? {},
    sort: config.sort ?? FeedSort.RECENT,
    limit,
    realtime: config.realtime ?? true,
    include_media: config.include_media ?? true,
    include_reposts: config.include_reposts ?? false,
  };
}

export function validateTransform(transform: Partial<WidgetTransform>): WidgetTransform {
  return {
    x: transform.x ?? 0,
    y: transform.y ?? 0,
    scale: Math.max(0.1, Math.min(10, transform.scale ?? 1)),
    rotation: transform.rotation ?? 0,
    opacity: Math.max(0, Math.min(1, transform.opacity ?? 1)),
  };
}
