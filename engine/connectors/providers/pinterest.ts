import { normalisePinterest } from '@/engine/connectors/normalise';
import { parseRssFeed, pinterestRssUrl } from '@/engine/social/rss-feed';
import type { UnifiedFeedItem } from '@/types/connector';
import { toErrorMessage } from '@/utils/index';



export interface PinterestCredentials {
  username: string;
  
  board?: string;
}


export async function pinterestVerify(creds: PinterestCredentials): Promise<string> {
  const username = (creds.username ?? '').replace(/^@/, '').trim();
  if (!username) throw new Error('Pinterest username is required.');

  const url = pinterestRssUrl(username, creds.board);

  let res: Response;
  try {
    res = await fetch(url, {
      method: 'HEAD',
      headers: { 'User-Agent': 'DREAMengin RSS Reader (+https://dreamengin.app)' },
      signal: AbortSignal.timeout(10_000),
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? toErrorMessage(err) : String(err);
    throw new Error(`Could not reach Pinterest RSS. (${msg})`);
  }

  if (!res.ok) {
    throw new Error(
      `Pinterest RSS not accessible (${res.status}). ` +
      `Make sure your profile and boards are set to Public. ` +
      `Go to Pinterest Settings → Privacy and data → Profile privacy → Public.`,
    );
  }
  return username;
}


export async function pinterestSync(creds: PinterestCredentials): Promise<UnifiedFeedItem[]> {
  const username = (creds.username ?? '').replace(/^@/, '').trim();
  const url = pinterestRssUrl(username, creds.board);
  const items = await parseRssFeed({ provider: 'pinterest', feedUrl: url }, 40);
  return items.map((item) => normalisePinterest(item.raw as Parameters<typeof normalisePinterest>[0], username));
}

export function pinterestCredentialFields( ){
  return [
    {
      key: 'username',
      label: 'Pinterest Username',
      placeholder: 'yourname',
      type: 'text' as const,
      hint:
        'Your Pinterest username. ' +
        '⚠️ Your profile and boards MUST be set to Public. ' +
        'Go to Pinterest Settings → Privacy and data → Profile privacy → Public.',
    },
    {
      key: 'board',
      label: 'Board Name (optional)',
      placeholder: 'my-board-name',
      type: 'text' as const,
      hint:
        'Optional. The slug of a specific public board (e.g. "dream-home"). ' +
        'Leave blank to see all your public pins.',
    },
  ];
}
