


export interface ConnectorAccount {
  id: string;
  user_id: string;
  provider: string;
  
  status:
    | 'not_connected'
    | 'connected'
    | 'needs_reauth'
    | 'requires_approval'
    | 'unsupported'
    | 'error'
    | 'needs_admin_setup';
  scopes: string[];
  
  last_verified_at: string | null;
  
  last_error: string | null;
  created_at: string;
  updated_at: string;
}


export interface ConnectorAccountPublic
  extends Omit<ConnectorAccount, 'user_id'> {
  
  last_synced_at: string | null;
  
  last_sync_count: number;
}

export interface FeedItemMedia {
  url: string;
  type: 'image' | 'video' | 'audio' | 'gif';
  alt?: string;
  thumbnail_url?: string;
}


export interface UnifiedFeedItem {
  
  provider: string;
  
  external_id: string;
  
  author_handle: string;
  
  author_name: string;
  
  content_text: string;
  
  content_html?: string;
  
  media: FeedItemMedia[];
  
  permalink: string;
  
  published_at: string;
  
  raw: unknown;
}


export interface FeedItemRow {
  id: string;
  user_id: string;
  provider: string;
  external_id: string;
  payload: UnifiedFeedItem;
  published_at: string | null;
  created_at: string;
}

export interface ConnectorConnectRequest {
  
  credentials: Record<string, string>;
}

export interface ConnectorConnectResponse {
  ok: boolean;
  status: ConnectorAccount['status'];
  message?: string;
}

export interface ConnectorVerifyResponse {
  ok: boolean;
  status: ConnectorAccount['status'];
  last_verified_at: string | null;
  error?: string;
}

export interface ConnectorSyncResponse {
  ok: boolean;
  fetched: number;
  stored: number;
  last_synced_at: string;
  error?: string;
}
