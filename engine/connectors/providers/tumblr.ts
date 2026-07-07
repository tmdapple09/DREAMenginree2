import { normaliseTumblr } from '@/engine/connectors/normalise';
import { parseRssFeed, tumblrRssUrl } from '@/engine/social/rss-feed';
import type { UnifiedFeedItem } from '@/types/connector';
import { toErrorMessage } from '@/utils/index';



export interface TumblrCredentials {
  
  username: string;
}


function extractSlug(username: string): string {
  const slug = username.trim();
  if (slug.includes('tumblr.com')) {
    const match = slug.match(/([^/.]+)\.tumblr\.com/);
    return match?.[1] ?? slug;
  }
  return slug.replace(/^https?:\/\//, '').replace(/\/$/, '').replace(/\.tumblr\.com$/i, '');
}


export async function tumblrVerify(creds: TumblrCredentials): Promise<string> {
  const username = (creds.username ?? '').trim();
  if (!username) throw new Error('Tumblr username or URL is required.');

  const url = tumblrRssUrl(username);

  let res: Response;
  try {
    res = await fetch(url, {
      method: 'HEAD',
      headers: { 'User-Agent': 'DREAMengin RSS Reader (+https://dreamengin.app)' },
      signal: AbortSignal.timeout(10_000),
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? toErrorMessage(err) : String(err);
    throw new Error(`Could not reach Tumblr RSS. (${msg})`);
  }

  if (!res.ok) {
    throw new Error(
      `Tumblr RSS not accessible (${res.status}). ` +
      `Make sure your blog is Public (not password-protected). ` +
      `Go to your Tumblr blog Settings → Visibility → remove any password protection.`,
    );
  }
  return extractSlug(username);
}


export async function tumblrSync(creds: TumblrCredentials): Promise<UnifiedFeedItem[]> {
  const username = (creds.username ?? '').trim();
  const slug = extractSlug(username);
  const url = tumblrRssUrl(username);
  const items = await parseRssFeed({ provider: 'tumblr', feedUrl: url }, 40);
  return items.map((item) => normaliseTumblr(item.raw as Parameters<typeof normaliseTumblr>[0], slug));
}

export function tumblrCredentialFields( ){
  return [
    {
      key: 'username',
      label: 'Tumblr Blog Username',
      placeholder: 'myblog  or  https://myblog.tumblr.com',
      type: 'text' as const,
      hint:
        'Your Tumblr blog username or URL (e.g. "myblog" or "https://myblog.tumblr.com"). ' +
        '⚠️ Your blog MUST be Public (not password-protected). ' +
        'Go to Tumblr blog Settings → remove password protection.',
    },
  ];
}
