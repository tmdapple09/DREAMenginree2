import 'server-only';
import { blueskySync } from '@/engine/connectors/providers/bluesky';
import { githubSync } from '@/engine/connectors/providers/github';
import { instagramSync } from '@/engine/connectors/providers/instagram';
import { mastodonSync } from '@/engine/connectors/providers/mastodon';
import { nostrSync } from '@/engine/connectors/providers/nostr';
import { redditSync } from '@/engine/connectors/providers/reddit';
import { youtubeSync } from '@/engine/connectors/providers/youtube';
import type { UnifiedFeedItem } from '@/types/connector';




export const DISPATCH_SUPPORTED_PROVIDERS = [
  'mastodon',
  'bluesky',
  'github',
  'reddit',
  'nostr',
  'youtube',
  'instagram',
] as const;

export type DispatchSupportedProvider = (typeof DISPATCH_SUPPORTED_PROVIDERS)[number];


export class UnsupportedProviderError extends Error {
  constructor(provider: string) {
    super(`Provider "${provider}" sync not supported.`);
    this.name = 'UnsupportedProviderError';
  }
}

function normalizeNostrRelays(relayRaw: unknown): string[] {
  if (Array.isArray(relayRaw)) {
    return relayRaw.map(String).map((relay) => relay.trim()).filter(Boolean);
  }
  return String(relayRaw ?? '').split(',').map((relay) => relay.trim()).filter(Boolean);
}


export async function dispatchSync(
  provider: string,
  creds: Record<string, unknown>,
): Promise<UnifiedFeedItem[]> {
  switch (provider) {
    case 'mastodon':
      return mastodonSync({
        instance_url: String(creds.instance_url ?? ''),
        access_token: String(creds.access_token ?? ''),
      });

    case 'bluesky':
      return blueskySync({
        handle: String(creds.handle ?? ''),
        app_password: String(creds.app_password ?? ''),
      });

    case 'github':
      return githubSync({ access_token: String(creds.access_token ?? '') });

    case 'reddit':
      return redditSync({ access_token: String(creds.access_token ?? '') });

    case 'nostr': {
      return nostrSync({ pubkey: String(creds.pubkey ?? ''), relays: normalizeNostrRelays(creds.relays) });
    }

    case 'youtube':
      return youtubeSync({ access_token: String(creds.access_token ?? '') });

    case 'instagram':
      
      
      return instagramSync({ access_token: String(creds.access_token ?? '') });

    default:
      throw new UnsupportedProviderError(provider);
  }
}
