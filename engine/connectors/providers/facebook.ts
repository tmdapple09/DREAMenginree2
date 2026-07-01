import { normaliseFacebook } from '@/engine/connectors/normalise';
import { facebookPageRssUrl, parseRssFeed } from '@/engine/social/rss-feed';
import type { UnifiedFeedItem } from '@/types/connector';
import { toErrorMessage } from '@/utils/index';



export interface FacebookCredentials {
  
  page: string;
}


function pageHandle(page: string): string {
  if (page.includes('facebook.com/')) {
    const match = page.match(/facebook\.com\/([^/?#]+)/);
    return match?.[1] ?? page;
  }
  return page.trim().replace(/\/$/, '');
}


export async function facebookVerify(creds: FacebookCredentials): Promise<string> {
  const page = (creds.page ?? '').trim();
  if (!page) throw new Error('Facebook page ID, username, or URL is required.');

  const url = facebookPageRssUrl(page);

  let res: Response;
  try {
    res = await fetch(url, {
      method: 'HEAD',
      headers: { 'User-Agent': 'DREAMengin RSS Reader (+https://dreamengin.app)' },
      signal: AbortSignal.timeout(10_000),
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? toErrorMessage(err) : String(err);
    throw new Error(`Could not reach Facebook RSS feed. (${msg})`);
  }

  if (!res.ok) {
    throw new Error(
      `Facebook RSS not accessible (${res.status}). ` +
      `Make sure this is a PUBLIC Page (not a private profile). ` +
      `Go to your Facebook Page settings and set visibility to Public.`,
    );
  }
  return pageHandle(page);
}


export async function facebookSync(creds: FacebookCredentials): Promise<UnifiedFeedItem[]> {
  const page = (creds.page ?? '').trim();
  const url = facebookPageRssUrl(page);
  const handle = pageHandle(page);
  const items = await parseRssFeed({ provider: 'facebook', feedUrl: url }, 40);
  return items.map((item) => normaliseFacebook(item.raw as Parameters<typeof normaliseFacebook>[0], handle));
}

export function facebookCredentialFields( ){
  return [
    {
      key: 'page',
      label: 'Facebook Page or Profile',
      placeholder: 'https://facebook.com/yourpage  or  yourpagename',
      type: 'text' as const,
      hint:
        'Paste your Facebook Page URL, Page username, or numeric Page ID. ' +
        '⚠️ The Page MUST be set to Public. ' +
        'Go to your Facebook Page → Settings → Privacy → set to Public. ' +
        'Personal profile RSS is limited — use a Page for best results.',
    },
  ];
}
