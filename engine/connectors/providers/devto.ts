import { normaliseDevto } from '@/engine/connectors/normalise';
import { devtoUserRssUrl, parseRssFeed } from '@/engine/social/rss-feed';
import type { UnifiedFeedItem } from '@/types/connector';



export interface DevtoCredentials {
  username: string;
}


export async function devtoVerify(creds: DevtoCredentials): Promise<string> {
  if (!creds.username || creds.username.trim().length === 0) {
    throw new Error('Dev.to username is required.');
  }
  const url = devtoUserRssUrl(creds.username.trim());
  const res = await fetch(url, { method: 'HEAD' });
  if (!res.ok) {
    throw new Error(`Dev.to feed not accessible (${res.status}). Check your username.`);
  }
  return creds.username.trim();
}


export async function devtoSync(creds: DevtoCredentials): Promise<UnifiedFeedItem[]> {
  const username = creds.username.trim();
  const url = devtoUserRssUrl(username);
  const items = await parseRssFeed({ provider: 'devto', feedUrl: url }, 40);
  return items.map((item) => normaliseDevto(item.raw as Parameters<typeof normaliseDevto>[0], username));
}

export function devtoCredentialFields( ){
  return [
    {
      key: 'username',
      label: 'Dev.to Username',
      placeholder: 'yourname',
      type: 'text' as const,
      hint: 'Your Dev.to username (e.g. "alice"). Found in your profile URL: dev.to/alice.',
    },
  ];
}
