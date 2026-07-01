



export type DbNotificationContent = Record<string, unknown>;

export interface DbNotificationRow {
  id: string;
  user_id?: string;
  type: string;
  
  content?: DbNotificationContent | null;
  
  data?: DbNotificationContent | null;
  
  message?: string | null;
  read: boolean;
  created_at: string;
}




export type UiNotificationType =
  | 'like'
  | 'comment'
  | 'follow'
  | 'trending'
  | 'revenue'
  | 'mention'
  | 'message'
  | 'remix'
  | 'other';

export interface UiNotification {
  id: string;
  type: UiNotificationType;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
}




export function mapNotificationType(dbType: string): UiNotificationType {
  const t = dbType.toLowerCase().trim();
  if (t === 'like')      return 'like';
  if (t === 'comment')   return 'comment';
  if (t === 'follow')    return 'follow';
  if (t === 'trending')  return 'trending';
  if (t === 'revenue')   return 'revenue';
  if (t === 'mention')   return 'mention';
  if (t === 'message')   return 'message';
  if (t === 'remix')     return 'remix';
  return 'other';
}




export function getNotificationTitle(type: UiNotificationType): string {
  switch (type) {
    case 'like':     return 'New Like';
    case 'comment':  return 'New Comment';
    case 'follow':   return 'New Follower';
    case 'trending': return 'Trending';
    case 'revenue':  return 'Revenue Update';
    case 'mention':  return 'You were mentioned';
    case 'message':  return 'New Message';
    case 'remix':    return 'Your Dream was Remixed';
    case 'other':    return 'Notification';
  }
}




export function getNotificationActionUrl(
  type: UiNotificationType,
  content: DbNotificationContent | null,
): string | undefined {
  
  if (type === 'revenue') return '/ads';

  if (!content) return undefined;

  switch (type) {
    case 'message': {
      const convId = content.conversation_id;
      if (typeof convId === 'string' && convId.trim()) {
        return `/messages?conversation_id=${encodeURIComponent(convId.trim())}`;
      }
      return '/messages';
    }
    case 'follow': {
      const handle = content.actor_handle ?? content.from_handle ?? content.handle;
      if (typeof handle === 'string' && handle.trim()) {
        return `/profile/${encodeURIComponent(handle.trim())}`;
      }
      return undefined;
    }
    case 'like':
    case 'comment':
    case 'mention': {
      const postId = content.post_id ?? content.content_id;
      if (typeof postId === 'string' && postId.trim()) {
        return `/post/${encodeURIComponent(postId.trim())}`;
      }
      return undefined;
    }
    case 'remix': {
      
      const enginName = content.engin_name ?? content.engin;
      const assetId = content.asset_id ?? content.remix_id;
      if (typeof enginName === 'string' && enginName.trim() && typeof assetId === 'string' && assetId.trim()) {
        return `/daydream/${encodeURIComponent(enginName.trim())}?asset=${encodeURIComponent(assetId.trim())}`;
      }
      const postId = content.post_id ?? content.content_id;
      if (typeof postId === 'string' && postId.trim()) {
        return `/post/${encodeURIComponent(postId.trim())}`;
      }
      return undefined;
    }
    case 'trending': {
      const postId = content.post_id;
      if (typeof postId === 'string' && postId.trim()) {
        return `/post/${encodeURIComponent(postId.trim())}`;
      }
      return undefined;
    }
    default:
      return undefined;
  }
}




export function extractNotificationMessage(
  type: UiNotificationType,
  content: DbNotificationContent | null,
): string {
  if (content) {
    
    if (typeof content.message === 'string' && content.message.trim()) {
      return content.message.trim();
    }
    
    const actor = content.actor_display_name ?? content.from_display_name ?? content.actor_handle ?? content.from_handle;
    const actorStr = typeof actor === 'string' && actor.trim() ? actor.trim() : 'Someone';

    switch (type) {
      case 'like':    return `${actorStr} liked your post.`;
      case 'comment': return `${actorStr} commented on your post.`;
      case 'follow':  return `${actorStr} started following you.`;
      case 'mention': return `${actorStr} mentioned you.`;
      case 'message': return `${actorStr} sent you a message.`;
      case 'remix':   return `${actorStr} remixed your Dream.`;
      case 'trending':return 'Your post is trending!';
      case 'revenue': return 'You have a new revenue update.';
      default:        return 'You have a new notification.';
    }
  }

  
  return 'You have a new notification.';
}




export function normalizeDbRow(row: DbNotificationRow): UiNotification {
  const uiType   = mapNotificationType(row.type);
  const content: DbNotificationContent | null = row.data ?? row.content ?? (row.message ? { message: row.message } : null);
  const title    = getNotificationTitle(uiType);
  const message  = extractNotificationMessage(uiType, content);
  const actionUrl = getNotificationActionUrl(uiType, content);

  return {
    id:        row.id,
    type:      uiType,
    title,
    message,
    timestamp: new Date(row.created_at),
    read:      row.read ?? false,
    actionUrl,
  };
}




export function getUnreadCount(notifications: UiNotification[]): number {
  return notifications.filter((n) => !n.read).length;
}


export function sortByRecent(notifications: UiNotification[]): UiNotification[] {
  return [...notifications].sort(
    (a, b) => b.timestamp.getTime() - a.timestamp.getTime(),
  );
}


export function applyOptimisticRead(
  notifications: UiNotification[],
  id: string,
): UiNotification[] {
  return notifications.map((n) => (n.id === id ? { ...n, read: true } : n));
}


export function applyOptimisticMarkAll(
  notifications: UiNotification[],
): UiNotification[] {
  return notifications.map((n) => ({ ...n, read: true }));
}


export function applyOptimisticDelete(
  notifications: UiNotification[],
  id: string,
): UiNotification[] {
  return notifications.filter((n) => n.id !== id);
}
