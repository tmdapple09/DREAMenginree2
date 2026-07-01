import { normaliseTikTok } from '@/engine/connectors/normalise';
import { parseRssFeed, tiktokProfileRssUrl } from '@/engine/social/rss-feed';
import type { UnifiedFeedItem } from '@/types/connector';
import { toErrorMessage } from '@/utils/index';



export interface TikTokCredentials {
  username: string;
  
  rsshub_instance?: string;
}


export async function tiktokVerify(creds: TikTokCredentials): Promise<string> {
  const username = (creds.username ?? '').replace(/^@/, '').trim();
  if (!username) throw new Error('TikTok username is required.');

  const rsshubBase = (creds.rsshub_instance || 'https://rsshub.app').trim();
  const url = tiktokProfileRssUrl(username, rsshubBase);

  let res: Response;
  try {
    res = await fetch(url, {
      method: 'HEAD',
      headers: { 'User-Agent': 'DREAMengin RSS Reader (+https://dreamengin.app)' },
      signal: AbortSignal.timeout(10_000),
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? toErrorMessage(err) : String(err);
    throw new Error(
      `Could not reach RSSHub at ${rsshubBase}. ` +
      `Try a different RSSHub instance or check your internet connection. (${msg})`,
    );
  }

  if (!res.ok) {
    throw new Error(
      `TikTok profile @${username} not accessible via RSSHub (${res.status}). ` +
      `Make sure your TikTok account is set to PUBLIC. ` +
      `Go to TikTok → Profile → Settings → Privacy → turn "Private account" OFF.`,
    );
  }
  return `@${username}`;
}


export async function tiktokSync(creds: TikTokCredentials): Promise<UnifiedFeedItem[]> {
  const username = (creds.username ?? '').replace(/^@/, '').trim();
  const rsshubBase = (creds.rsshub_instance || 'https://rsshub.app').trim();
  const url = tiktokProfileRssUrl(username, rsshubBase);
  const items = await parseRssFeed({ provider: 'tiktok', feedUrl: url }, 40);
  return items.map((item) => normaliseTikTok(item.raw as Parameters<typeof normaliseTikTok>[0], username));
}

export function tiktokCredentialFields( ){
  return [
    {
      key: 'username',
      label: 'TikTok Username',
      placeholder: 'yourusername',
      type: 'text' as const,
      hint:
        'Your TikTok username without @. ' +
        '⚠️ Your account MUST be set to Public. ' +
        'Go to TikTok → Profile → Settings → Privacy → turn "Private account" OFF.',
    },
    {
      key: 'rsshub_instance',
      label: 'RSSHub Instance (optional)',
      placeholder: 'https://rsshub.app',
      type: 'url' as const,
      hint:
        'Optional. RSSHub is a free open-source RSS bridge. ' +
        'Leave blank to use the default (rsshub.app), or enter a self-hosted instance for better reliability.',
    },
  ];
}
