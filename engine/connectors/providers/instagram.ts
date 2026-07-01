import type { UnifiedFeedItem } from '@/types/connector';



const IG_API = 'https://graph.instagram.com';

export interface InstagramCredentials {
  access_token: string;
}

interface InstagramUser {
  id: string;
  username: string;
}

interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
  username?: string;
}

interface InstagramMediaListResponse {
  data?: InstagramMedia[];
}

async function fetchInstagramJson<T>(path: string, accessToken: string): Promise<T> {
  const separator = path.includes('?') ? '&' : '?';
  const url = `${IG_API}${path}${separator}access_token=${encodeURIComponent(accessToken)}`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Instagram API ${res.status}: ${text.slice(0, 200)}`);
  }
  return res.json() as Promise<T>;
}

function normaliseInstagramMedia(item: InstagramMedia): UnifiedFeedItem {
  const caption = item.caption ?? '';
  const thumbnail = item.thumbnail_url ?? item.media_url ?? '';

  return {
    provider:      'instagram',
    external_id:   item.id,
    author_handle: item.username ?? 'instagram',
    author_name:   item.username ?? 'Instagram User',
    content_text:  caption,
    media: thumbnail
      ? [{ url: thumbnail, type: item.media_type === 'VIDEO' ? 'video' : 'image', thumbnail_url: thumbnail }]
      : [],
    permalink:     item.permalink,
    published_at:  item.timestamp,
    raw:           item,
  };
}


export async function instagramVerify(creds: InstagramCredentials): Promise<string> {
  const user = await fetchInstagramJson<InstagramUser>(
    '/me?fields=id,username',
    creds.access_token,
  );
  return user.username ?? user.id ?? 'instagram-user';
}


export async function instagramSync(creds: InstagramCredentials): Promise<UnifiedFeedItem[]> {
  const data = await fetchInstagramJson<InstagramMediaListResponse>(
    '/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,username&limit=25',
    creds.access_token,
  );

  return (data.data ?? [])
    .map(normaliseInstagramMedia)
    .sort((a, b) => Date.parse(b.published_at) - Date.parse(a.published_at));
}


export function getInstagramOAuthConfig( ){
  return {
    clientId:     process.env.INSTAGRAM_CLIENT_ID     ?? '',
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET ?? '',
  };
}


export const INSTAGRAM_CREDENTIAL_FIELDS = [
  {
    key:         'access_token',
    label:       'Long-Lived Access Token',
    placeholder: 'IGQ...',
    type:        'password' as const,
    hint:
      'Obtained automatically via "Connect with Instagram" above. ' +
      'Advanced: paste a long-lived token from the Meta developers console.',
  },
];
