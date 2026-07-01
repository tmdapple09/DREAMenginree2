import { normaliseReddit } from '@/engine/connectors/normalise';
import type { UnifiedFeedItem } from '@/types/connector';



const REDDIT_API = 'https://oauth.reddit.com';

export interface RedditCredentials {
  access_token: string;
}

interface RedditUser {
  name: string;
}


export async function redditVerify(creds: RedditCredentials): Promise<string> {
  const res = await fetch(`${REDDIT_API}/api/v1/me`, {
    headers: {
      Authorization: `Bearer ${creds.access_token}`,
      'User-Agent': 'DREAMengin/1.0',
    },
  });
  if (!res.ok) throw new Error(`Reddit verify failed: ${res.status} ${res.statusText}`);
  const user = await res.json() as RedditUser;
  return user.name;
}


export async function redditSync(creds: RedditCredentials): Promise<UnifiedFeedItem[]> {
  const res = await fetch(`${REDDIT_API}/?limit=40`, {
    headers: {
      Authorization: `Bearer ${creds.access_token}`,
      'User-Agent': 'DREAMengin/1.0',
    },
  });
  if (!res.ok) throw new Error(`Reddit sync failed: ${res.status} ${res.statusText}`);
  const listing = await res.json() as { data?: { children?: unknown[] } };
  const posts = listing.data?.children ?? [];
  return (posts as Parameters<typeof normaliseReddit>[0][]).map(normaliseReddit);
}


export async function redditSyncSaved(creds: RedditCredentials): Promise<UnifiedFeedItem[]> {
  const username = await redditVerify(creds);
  const res = await fetch(`${REDDIT_API}/user/${username}/saved?limit=40`, {
    headers: {
      Authorization: `Bearer ${creds.access_token}`,
      'User-Agent': 'DREAMengin/1.0',
    },
  });
  if (!res.ok) throw new Error(`Reddit saved sync failed: ${res.status} ${res.statusText}`);
  const listing = await res.json() as { data?: { children?: unknown[] } };
  return (listing.data?.children ?? []).map((post) => normaliseReddit(post as Parameters<typeof normaliseReddit>[0]));
}

export function redditCredentialFields( ){
  return [
    {
      key: 'access_token',
      label: 'Access Token',
      placeholder: 'Provided after authorising DREAMengin on Reddit',
      type: 'password' as const,
      hint: 'Click "Connect" to authorise DREAMengin with Reddit. Admin must configure REDDIT_CLIENT_ID first.',
    },
  ];
}
