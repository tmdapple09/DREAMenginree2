import { normaliseTwitter } from '@/engine/connectors/normalise';
import { DEFAULT_NITTER_INSTANCE, parseRssFeed, twitterNitterRssUrl } from '@/engine/social/rss-feed';
import type { UnifiedFeedItem } from '@/types/connector';
import { toErrorMessage } from '@/utils/index';



export interface TwitterCredentials {
  username: string;
  
  nitter_instance?: string;
}


export async function twitterVerify(creds: TwitterCredentials): Promise<string> {
  const username = creds.username.replace(/^@/, '').trim();
  if (!username) throw new Error('Twitter/X username is required.');

  const instance = (creds.nitter_instance || DEFAULT_NITTER_INSTANCE).trim();
  const url = twitterNitterRssUrl(instance, username);

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
      `Could not reach Nitter instance at ${instance}. ` +
      `Try a different Nitter instance or check your internet connection. (${msg})`,
    );
  }

  if (res.status === 404) {
    throw new Error(
      `Twitter/X profile @${username} not found on Nitter. ` +
      `Make sure the username is correct and your account is set to PUBLIC ` +
      `(Twitter Settings → Privacy and safety → turn off "Protect your posts").`,
    );
  }
  if (!res.ok) {
    throw new Error(
      `Could not access @${username} on Nitter (${res.status}). ` +
      `Make sure your Twitter/X account is set to PUBLIC.`,
    );
  }
  return `@${username}`;
}


export async function twitterSync(creds: TwitterCredentials): Promise<UnifiedFeedItem[]> {
  const username = creds.username.replace(/^@/, '').trim();
  const instance = (creds.nitter_instance || DEFAULT_NITTER_INSTANCE).trim();
  const url = twitterNitterRssUrl(instance, username);
  const items = await parseRssFeed({ provider: 'twitter', feedUrl: url }, 40);
  return items.map((item) => normaliseTwitter(item.raw as Parameters<typeof normaliseTwitter>[0], username));
}

export function twitterCredentialFields( ){
  return [
    {
      key: 'username',
      label: 'Twitter / X Username',
      placeholder: 'yourhandle',
      type: 'text' as const,
      hint:
        'Your Twitter/X username without @. ' +
        '⚠️ Your account MUST be set to Public. ' +
        'Go to Twitter/X Settings → Privacy and safety → turn off "Protect your posts".',
    },
    {
      key: 'nitter_instance',
      label: 'Nitter Instance (optional)',
      placeholder: 'https://nitter.net',
      type: 'url' as const,
      hint:
        'Optional. Nitter is a free open-source Twitter frontend. ' +
        'Leave blank to use the default (nitter.net), or enter your own instance URL.',
    },
  ];
}
