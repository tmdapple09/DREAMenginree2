import type { FeedItemMedia, UnifiedFeedItem } from '@/types/connector';
import Parser from 'rss-parser';




const RSS_CUSTOM_FIELDS = {
  item: [
    ['media:content', 'mediaContent', { keepArray: true }],
    ['media:thumbnail', 'mediaThumbnail', { keepArray: true }],
    ['media:group', 'mediaGroup'],
    ['content:encoded', 'contentEncoded'],
    ['description', 'description'],
  ],
};


export type RssProvider =
  | 'youtube'
  | 'reddit'
  | 'mastodon'
  | 'github'
  | 'nostr'
  | 'medium'
  | 'devto'
  | 'substack'
  | 'hackernews'
  | 'podcast'
  | 'twitter'
  | 'facebook'
  | 'pinterest'
  | 'tumblr'
  | 'tiktok';

export interface RssFeedConfig {
  
  provider: RssProvider;
  
  feedUrl: string;
  
  authorHandle?: string;
  
  authorName?: string;
}


export function youtubeChannelRssUrl(channelId: string): string {
  return `https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(channelId)}`;
}


export function youtubePlaylistRssUrl(playlistId: string): string {
  return `https://www.youtube.com/feeds/videos.xml?playlist_id=${encodeURIComponent(playlistId)}`;
}


export function redditSubredditRssUrl(subreddit: string): string {
  const name = subreddit.trim().replace(/^\/?r\//i, '').replace(/^@/, '');
  return `https://www.reddit.com/r/${encodeURIComponent(name)}/.rss?limit=25`;
}


export function redditUserRssUrl(username: string): string {
  const name = username.trim().replace(/^\/?u\//i, '').replace(/^@/, '');
  return `https://www.reddit.com/user/${encodeURIComponent(name)}/submitted/.rss?limit=25`;
}


export function mastodonUserRssUrl(instanceUrl: string, handle: string): string {
  const base = instanceUrl.replace(/\/$/, '');
  const localHandle = handle.replace(/^@/, '').split('@')[0];
  return `${base}/@${localHandle}.rss`;
}


export function githubUserAtomUrl(username: string): string {
  return `https://github.com/${encodeURIComponent(username)}.atom`;
}


export function nostrGatewayRssUrl(pubkeyOrNpub: string): string {
  return `https://njump.me/${encodeURIComponent(pubkeyOrNpub)}/rss`;
}


export function mediumUserRssUrl(username: string): string {
  const name = username.replace(/^@/, '');
  return `https://medium.com/feed/@${encodeURIComponent(name)}`;
}


export function devtoUserRssUrl(username: string): string {
  return `https://dev.to/feed/${encodeURIComponent(username)}`;
}


export function substackRssUrl(subdomainOrUrl: string): string {
  if (subdomainOrUrl.startsWith('http')) {
    const base = subdomainOrUrl.replace(/\/$/, '');
    return `${base}/feed`;
  }
  return `https://${encodeURIComponent(subdomainOrUrl)}.substack.com/feed`;
}


export function hackerNewsRssUrl(type: 'newest' | 'best' | 'ask' | 'show' | 'jobs' = 'best'): string {
  const map = {
    newest: 'https://hnrss.org/newest',
    best: 'https://hnrss.org/best',
    ask: 'https://hnrss.org/ask',
    show: 'https://hnrss.org/show',
    jobs: 'https://hnrss.org/jobs',
  };
  return map[type];
}


export function hackerNewsUserRssUrl(username: string): string {
  return `https://hnrss.org/submitted?id=${encodeURIComponent(username)}`;
}


export function twitterNitterRssUrl(nitterInstance: string, username: string): string {
  const base = nitterInstance.replace(/\/$/, '');
  return `${base}/${encodeURIComponent(username)}/rss`;
}


export const DEFAULT_NITTER_INSTANCE = 'https://nitter.net';


export function facebookPageRssUrl(pageIdOrUrl: string): string {
  
  let id = pageIdOrUrl.trim();
  if (id.includes('facebook.com/')) {
    const match = id.match(/facebook\.com\/([^/?#]+)/);
    id = match?.[1] ?? id;
  }
  
  id = id.replace(/\/$/, '');
  
  if (/^\d+$/.test(id)) {
    return `https://www.facebook.com/feeds/page.php?id=${encodeURIComponent(id)}&format=rss20`;
  }
  return `https://www.facebook.com/feeds/page.php?name=${encodeURIComponent(id)}&format=rss20`;
}


export function pinterestRssUrl(username: string, board?: string): string {
  const u = encodeURIComponent(username.replace(/^@/, ''));
  if (board && board.trim()) {
    return `https://www.pinterest.com/${u}/${encodeURIComponent(board.trim())}.rss`;
  }
  return `https://www.pinterest.com/${u}/feed.rss`;
}


export function tumblrRssUrl(usernameOrUrl: string): string {
  let slug = usernameOrUrl.trim();
  if (slug.includes('tumblr.com')) {
    const match = slug.match(/([^/.]+)\.tumblr\.com/);
    slug = match?.[1] ?? slug;
  }
  slug = slug.replace(/^https?:\/\//, '').replace(/\/$/, '');

  if (!slug.includes('.')) {
    return `https://${encodeURIComponent(slug)}.tumblr.com/rss`;
  }
  return `https://${slug}/rss`;
}


export function tiktokProfileRssUrl(username: string, rsshubBase = 'https://rsshub.app'): string {
  const base = rsshubBase.replace(/\/$/, '');
  return `${base}/tiktok/user/@${encodeURIComponent(username.replace(/^@/, ''))}`;
}


export function podcastRssUrl(feedUrl: string): string {
  return feedUrl;
}


let _parser: Parser | null = null;

function getParser(): Parser {
  if (!_parser) {
    _parser = new Parser({
      customFields: RSS_CUSTOM_FIELDS,
      timeout: 10_000,
      headers: {
        'User-Agent': 'DREAMengin RSS Reader (+https://dreamengin.app)',
      },
    });
  }
  return _parser;
}


export async function parseRssFeed(
  config: RssFeedConfig,
  limit = 50,
): Promise<UnifiedFeedItem[]> {
  const p = getParser();
  const feed = await p.parseURL(config.feedUrl);

  const channelTitle = feed.title ?? config.authorName ?? config.provider;
  const items = (feed.items ?? []).slice(0, limit);

  return items.map((item: Record<string, unknown>) => normaliseRssItem(item, config, channelTitle));
}


export function normaliseRssItem(
  item: Record<string, unknown>,
  config: RssFeedConfig,
  channelTitle: string,
): UnifiedFeedItem {
  const externalId = String((item as Record<string, unknown>).guid ?? (item as Record<string, unknown>).id ?? (item as Record<string, unknown>).link ?? Math.random());
  const pubDate: string =
    (item['isoDate'] as string | undefined) ?? (item['pubDate'] as string | undefined) ?? new Date().toISOString();

  const rawAuthor: string =
    (item['author'] ?? item['dc:creator'] ?? item['creator'] ?? channelTitle) as string;

  const authorHandle: string = config.authorHandle ?? rawAuthor;
  const authorName: string = config.authorName ?? rawAuthor;

  const rawText =
    item['contentEncoded'] ?? item['content:encoded'] ?? item['content'] ?? (item as Record<string, unknown>).description ?? '';

  const contentText = stripHtml(String(rawText || '')) || stripHtml(String(item['title'] ?? '')) || '';
  const contentHtml: string | undefined = rawText ? String(rawText) : undefined;

  const image = extractFirstImage(item);
  const media: FeedItemMedia[] = image
    ? [{ url: image, type: guessMediaType(config.provider, image) }]
    : [];

  const permalink: string = String((item as Record<string, unknown>).link ?? config.feedUrl);

  return {
    provider: config.provider,
    external_id: externalId,
    author_handle: authorHandle,
    author_name: authorName,
    content_text: contentText,
    content_html: contentHtml,
    media,
    permalink,
    published_at: toIso(pubDate),
    raw: item,
  };
}



export function extractFirstImage(item: Record<string, unknown>): string | null {
  
  const enclosure = item.enclosure as { url?: string } | undefined;
  if (enclosure?.url && isImageLike(enclosure.url)) {
    return enclosure!.url!;
  }

  
  if (Array.isArray(item.mediaContent)) {
    const url = item.mediaContent.find(

      (x: Record<string, unknown>) => (x as { $?: { url?: string } })?.$?.url && isImageLike((x as { $?: { url?: string } }).$!.url!),
    ) as unknown as { $?: { url?: string } } | undefined;
    const urlResult = url?.$?.url;
    if (urlResult) return urlResult;
    
    const anyUrl = (item.mediaContent.find((x: Record<string, unknown>) => (x?.$ as { url?: string } | undefined)?.url) as { $?: { url?: string } } | undefined)?.$?.url;
    if (anyUrl) return anyUrl;
  }

  
  if (Array.isArray(item.mediaThumbnail)) {

    const url = (item.mediaThumbnail.find((x: Record<string, unknown>) => (x?.$ as { url?: string } | undefined)?.url) as { $?: { url?: string } } | undefined)?.$?.url;
    if (url) return url;
  }

  
  if (item.mediaGroup) {
    const group = item.mediaGroup as Record<string, unknown>;
    const thumb = Array.isArray(group['media:thumbnail'])
      ? (group['media:thumbnail'] as Array<{$?: {url?: string}}>).find((x) => x?.$?.url)?.$?.url
      : (group['media:thumbnail'] as {$?: {url?: string}} | undefined)?.$?.url;
    if (thumb) return thumb;
  }

  
  const html: string = String(
    item['contentEncoded'] ??
    item['content:encoded'] ??
    (item as Record<string, unknown>).content ??
    (item as Record<string, unknown>).description ??
    ''
  );
  const match = html.match(/<img[^>]+src="([^"]+)"/i);
  if (match?.[1]) return match[1];

  return null;
}

/**
 * Strips HTML tags and decodes common HTML entities, returning plain text.
 * Also collapses excessive whitespace.
 */
export function stripHtml(input?: string | null): string {
  if (!input) return '';
  return input
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Returns true if the URL looks like an image (common extensions or known CDN paths). */
function isImageLike(url: string): boolean {
  return /\.(jpe?g|png|gif|webp|avif|svg)(\?|$)/i.test(url);
}

/** Heuristic: guess FeedItemMedia type from provider + URL. */
function guessMediaType(
  provider: RssProvider,
  url: string,
): FeedItemMedia['type'] {
  if (provider === 'youtube') return 'video';
  if (/\.(mp4|webm|mov|m3u8)(\?|$)/i.test(url)) return 'video';
  if (/\.(mp3|ogg|flac|aac|wav)(\?|$)/i.test(url)) return 'audio';
  return 'image';
}

/** Convert any date string to ISO 8601, falling back to now on parse failure. */
function toIso(raw: string): string {
  const d = new Date(raw);
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}
