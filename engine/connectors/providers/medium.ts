import { normaliseMedium } from '@/engine/connectors/normalise';
import { mediumUserRssUrl, parseRssFeed } from '@/engine/social/rss-feed';
import type { UnifiedFeedItem } from '@/types/connector';



export interface MediumCredentials {
  username: string;
}


export async function mediumVerify(creds: MediumCredentials): Promise<string> {
  if (!creds.username || creds.username.trim().length === 0) {
    throw new Error('Medium username is required.');
  }
  const url = mediumUserRssUrl(creds.username.trim());
  const res = await fetch(url, { method: 'HEAD' });
  if (!res.ok) {
    throw new Error(`Medium feed not accessible (${res.status}). Check your username.`);
  }
  return creds.username.trim();
}


export async function mediumSync(creds: MediumCredentials): Promise<UnifiedFeedItem[]> {
  const username = creds.username.trim();
  const url = mediumUserRssUrl(username);
  const items = await parseRssFeed({ provider: 'medium', feedUrl: url }, 40);
  
  return items.map((item) => normaliseMedium(item.raw as Parameters<typeof normaliseMedium>[0], `@${username}`));
}

export function mediumCredentialFields( ){
  return [
    {
      key: 'username',
      label: 'Medium Username',
      placeholder: 'yourname',
      type: 'text' as const,
      hint: 'Your Medium username without the @ sign (e.g. "alice"). Found in your profile URL: medium.com/@alice.',
    },
  ];
}
