



export type ConnectorRequirement = 'none' | 'optional' | 'required';

export interface WidgetPermissions {
  requiresLocation?: boolean;
  requiresNotifications?: boolean;
  requiresCamera?: boolean;
}

export interface WidgetTypeDef {
  
  id: string;
  
  title: string;
  
  icon: string;
  
  description: string;
  
  defaultConfig: Record<string, unknown>;
  
  permissions: WidgetPermissions;
  
  connectorDependency: ConnectorRequirement;
  
  connectorId?: string;
  
  category: 'Feed' | 'Media' | 'Social' | 'Utilities' | 'Work' | 'Shop';
}


export const WIDGET_REGISTRY: ReadonlyArray<WidgetTypeDef> = [
  {
    id: 'feed-main',
    title: 'Main Feed',
    icon: '📰',
    description: 'Your primary content stream.',
    defaultConfig: { limit: 20, sort: 'recent' },
    permissions: {},
    connectorDependency: 'none',
    category: 'Feed',
  },
  {
    id: 'feed-topic',
    title: 'Topic Slice',
    icon: '🏷️',
    description: 'A slice of news or content by topic.',
    defaultConfig: { topic: '', limit: 10 },
    permissions: {},
    connectorDependency: 'none',
    category: 'Feed',
  },
  {
    id: 'play-media',
    title: 'Play Media',
    icon: '▶️',
    description: 'Music and video player with queue.',
    defaultConfig: { autoplay: false },
    permissions: {},
    connectorDependency: 'optional',
    connectorId: 'spotify',
    category: 'Media',
  },
  {
    id: 'media-thumb',
    title: 'Media Gallery',
    icon: '🖼️',
    description: 'Photo and video thumbnails from your vault.',
    defaultConfig: { columns: 3 },
    permissions: {},
    connectorDependency: 'none',
    category: 'Media',
  },
  {
    id: 'ig-friend',
    title: 'IG: Friend Feed',
    icon: '📸',
    description: 'Posts from a specific Instagram friend.',
    defaultConfig: { handle: '' },
    permissions: {},
    connectorDependency: 'required',
    connectorId: 'instagram',
    category: 'Social',
  },
  {
    id: 'yt-channel',
    title: 'YouTube Channel',
    icon: '📺',
    description: 'Latest videos from a channel.',
    defaultConfig: { channelId: '', limit: 6 },
    permissions: {},
    connectorDependency: 'required',
    connectorId: 'youtube',
    category: 'Social',
  },
  {
    id: 'spotify',
    title: 'Spotify Now',
    icon: '🎵',
    description: "What you're listening to on Spotify.",
    defaultConfig: {},
    permissions: {},
    connectorDependency: 'required',
    connectorId: 'spotify',
    category: 'Social',
  },
  {
    id: 'weather',
    title: 'Weather',
    icon: '🌤️',
    description: 'Current conditions and forecast.',
    defaultConfig: { unit: 'metric' },
    permissions: { requiresLocation: true },
    connectorDependency: 'optional',
    connectorId: 'weather',
    category: 'Utilities',
  },
  {
    id: 'calendar',
    title: 'Calendar',
    icon: '📅',
    description: 'Upcoming events and schedule.',
    defaultConfig: { view: 'week', limit: 5 },
    permissions: {},
    connectorDependency: 'none',
    category: 'Work',
  },
  {
    id: 'tasks',
    title: 'Tasks',
    icon: '✅',
    description: 'Quick task list for today.',
    defaultConfig: {},
    permissions: {},
    connectorDependency: 'none',
    category: 'Work',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    icon: '📊',
    description: 'Key metrics at a glance.',
    defaultConfig: { period: '7d' },
    permissions: {},
    connectorDependency: 'none',
    category: 'Work',
  },
  {
    id: 'shop-feed',
    title: 'Shop Feed',
    icon: '🛍️',
    description: 'Featured items from the marketplace.',
    defaultConfig: {},
    permissions: {},
    connectorDependency: 'none',
    category: 'Shop',
  },
  {
    id: 'github',
    title: 'GitHub Activity',
    icon: '🐙',
    description: 'Repos, activity, and contributions.',
    defaultConfig: { username: '' },
    permissions: {},
    connectorDependency: 'required',
    connectorId: 'github',
    category: 'Work',
  },
  {
    id: 'tiktok',
    title: 'TikTok Feed',
    icon: '🎬',
    description: 'Following feed and saved videos.',
    defaultConfig: {},
    permissions: {},
    connectorDependency: 'required',
    connectorId: 'tiktok',
    category: 'Social',
  },
  {
    id: 'twitter',
    title: 'X / Twitter',
    icon: '✖️',
    description: 'Home timeline and bookmarks.',
    defaultConfig: {},
    permissions: {},
    connectorDependency: 'required',
    connectorId: 'twitter',
    category: 'Social',
  },
  {
    id: 'apple-music',
    title: 'Apple Music',
    icon: '🎼',
    description: 'Library, playlists, and recent plays.',
    defaultConfig: {},
    permissions: {},
    connectorDependency: 'required',
    connectorId: 'apple',
    category: 'Media',
  },
] as const;

export function getWidgetTypeDef(id: string): WidgetTypeDef | undefined {
  return WIDGET_REGISTRY.find((w) => w.id === id);
}


export function getWidgetTypesForConnector(connectorId: string): WidgetTypeDef[] {
  return WIDGET_REGISTRY.filter((w) => w.connectorId === connectorId);
}


export type ConnectorState = 'connected' | 'not_connected' | 'expired' | 'not_required';


export function resolveConnectorState(
  widgetId: string,
  connectedIds: Set<string>,
  expiredIds: Set<string>,
): ConnectorState {
  const def = getWidgetTypeDef(widgetId);
  if (!def || def.connectorDependency === 'none' || !def.connectorId) {
    return 'not_required';
  }
  if (expiredIds.has(def.connectorId)) return 'expired';
  if (connectedIds.has(def.connectorId)) return 'connected';
  return 'not_connected';
}
