import { normalisePodcast } from '@/engine/connectors/normalise';
import { parseRssFeed } from '@/engine/social/rss-feed';
import type { UnifiedFeedItem } from '@/types/connector';
import { toErrorMessage } from '@/utils/index';



export interface PodcastCredentials {
  
  feed_url: string;
}


function isValidFeedUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}


function httpErrorMessage(status: number, url: string): string {
  if (status === 401 || status === 403) {
    return (
      `This feed requires authentication (${status}). ` +
      `The feed at ${url} is private or login-protected. ` +
      `Go to the platform settings and make the feed public, then try again.`
    );
  }
  if (status === 404) {
    return `Feed not found (404). Double-check the URL: ${url}`;
  }
  if (status >= 500) {
    return `The feed server returned an error (${status}). Try again later.`;
  }
  return `Feed not accessible (${status}). Make sure the URL is correct and the feed is public.`;
}


export async function podcastVerify(creds: PodcastCredentials): Promise<string> {
  const url = (creds.feed_url ?? '').trim();
  if (!isValidFeedUrl(url)) {
    throw new Error(
      'Invalid feed URL. Must be a full https:// or http:// URL. ' +
      'Example: https://feeds.example.com/mypodcast.rss',
    );
  }

  let res: Response;
  try {
    res = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'DREAMengin RSS Reader (+https://dreamengin.app)',
        Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*',
      },
      
      signal: AbortSignal.timeout(10_000),
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? toErrorMessage(err) : String(err);
    throw new Error(
      `Could not reach the feed URL. Check your internet connection or that the URL is correct. (${msg})`,
    );
  }

  if (!res.ok) {
    throw new Error(httpErrorMessage(res.status, url));
  }

  
  const ct = res.headers.get('content-type') ?? '';
  const isXml =
    ct.includes('xml') ||
    ct.includes('rss') ||
    ct.includes('atom') ||
    ct.includes('text/plain'); 

  if (!isXml) {
    
    const snippet = (await res.text().catch(() => '')).slice(0, 200);
    if (!snippet.includes('<rss') && !snippet.includes('<feed') && !snippet.includes('<?xml')) {
      throw new Error(
        `The URL does not appear to be an RSS or Atom feed (content-type: ${ct || 'unknown'}). ` +
        `Make sure you are using the feed URL, not the website URL. ` +
        `Most platforms have a separate /feed, /rss, or .xml URL.`,
      );
    }
  }

  return url;
}


export async function podcastSync(creds: PodcastCredentials): Promise<UnifiedFeedItem[]> {
  const url = (creds.feed_url ?? '').trim();
  if (!isValidFeedUrl(url)) {
    throw new Error('Invalid feed URL.');
  }

  const rawItems = await parseRssFeed({ provider: 'podcast', feedUrl: url }, 50);

  
  return rawItems.map((item) =>
    normalisePodcast(
      item.raw as Parameters<typeof normalisePodcast>[0],
      item.author_name,
    ),
  );
}

export function podcastCredentialFields( ){
  return [
    {
      key: 'feed_url',
      label: 'RSS / Atom Feed URL',
      placeholder: 'https://example.com/feed.xml',
      type: 'url' as const,
      hint:
        'Paste the RSS or Atom feed URL for any platform — podcasts, YouTube channels, ' +
        'Reddit, Mastodon, GitHub, Substack, blogs, news sites, and more. ' +
        '⚠️ The feed must be publicly accessible (not behind a login). ' +
        'If connecting fails with a 401 or 403 error, go to that platform and make the feed public first.',
    },
  ];
}
