import { normaliseHackerNews } from '@/engine/connectors/normalise';
import {
    hackerNewsRssUrl,
    hackerNewsUserRssUrl,
    parseRssFeed,
} from '@/engine/social/rss-feed';
import type { UnifiedFeedItem } from '@/types/connector';



export type HNFeedType = 'best' | 'newest' | 'ask' | 'show' | 'jobs';

export interface HackerNewsCredentials {
  feed_type?: HNFeedType;
  username?: string;
}


export async function hackernewsVerify(creds: HackerNewsCredentials): Promise<string> {
  const url = creds.username
    ? hackerNewsUserRssUrl(creds.username.trim())
    : hackerNewsRssUrl(creds.feed_type ?? 'best');
  const res = await fetch(url, { method: 'HEAD' });
  if (!res.ok) {
    throw new Error(`Hacker News feed not accessible (${res.status}).`);
  }
  return creds.username ? `user:${creds.username}` : (creds.feed_type ?? 'best');
}


export async function hackernewsSync(creds: HackerNewsCredentials): Promise<UnifiedFeedItem[]> {
  const url = creds.username
    ? hackerNewsUserRssUrl(creds.username.trim())
    : hackerNewsRssUrl(creds.feed_type ?? 'best');

  const items = await parseRssFeed({ provider: 'hackernews', feedUrl: url }, 40);
  return items.map((item) => normaliseHackerNews(item.raw as Parameters<typeof normaliseHackerNews>[0]));
}

export function hackernewsCredentialFields( ){
  return [
    {
      key: 'feed_type',
      label: 'Feed Type',
      placeholder: 'best',
      type: 'text' as const,
      hint: 'Choose from: best, newest, ask, show, or jobs. Default: best.',
    },
    {
      key: 'username',
      label: 'HN Username (optional)',
      placeholder: 'pg',
      type: 'text' as const,
      hint: 'Optional. Your HN username to see your own submissions instead of a curated feed.',
    },
  ];
}
