

export type DeliveryMethod = 'webhook' | 'poll' | 'webhook+poll' | 'unsupported';

export interface ConnectorDeliveryStrategy {
  
  provider: string;
  
  delivery: DeliveryMethod;
  
  webhookVerifiable: boolean;
  
  note?: string;
}


export const DELIVERY_STRATEGY_MATRIX: ReadonlyArray<ConnectorDeliveryStrategy> = [
  {
    provider: 'youtube',
    delivery: 'webhook+poll',
    webhookVerifiable: true,
    note:
      'YouTube Data API v3 supports WebSub (PubSubHubbub) for new uploads from ' +
      'subscribed channels. Cron poll covers watch-history/watch-later playlists ' +
      'which are not push-deliverable.',
  },
  {
    provider: 'instagram',
    delivery: 'webhook+poll',
    webhookVerifiable: true,
    note:
      'Meta Webhooks can deliver new-media events for connected accounts. ' +
      'Cron polling via Instagram Basic Display API is the reliable fallback. ' +
      'Only own-media is accessible — no follower feed is available via any ' +
      'official API for third-party apps.',
  },
  {
    provider: 'mastodon',
    delivery: 'poll',
    webhookVerifiable: false,
    note:
      'Mastodon streaming WebSocket requires a persistent connection which is ' +
      'impractical for serverless. Cron polling the home timeline is the ' +
      'recommended approach.',
  },
  {
    provider: 'bluesky',
    delivery: 'poll',
    webhookVerifiable: false,
    note:
      'AT Protocol Firehose requires a persistent connection. Cron polling the ' +
      "user's timeline via app.bsky.feed.getTimeline is the recommended approach.",
  },
  {
    provider: 'github',
    delivery: 'webhook+poll',
    webhookVerifiable: false,
    note:
      'GitHub webhooks are per-repo/org and require admin configuration per ' +
      'repository. Cron polling the user events API is the general fallback ' +
      'for all users without repo-level webhook setup.',
  },
  {
    provider: 'reddit',
    delivery: 'poll',
    webhookVerifiable: false,
    note:
      'Reddit API does not support push delivery. Cron polling the home feed ' +
      'is the only supported approach.',
  },
  {
    provider: 'nostr',
    delivery: 'poll',
    webhookVerifiable: false,
    note:
      'Nostr uses relay subscriptions, which require a persistent WebSocket. ' +
      'Cron-triggered relay queries are the serverless-compatible approach.',
  },
  {
    provider: 'twitter',
    delivery: 'poll',
    webhookVerifiable: false,
    note:
      'X/Twitter Account Activity API (push) requires Elevated+ API access. ' +
      'Public-profile RSS polling via Nitter is the available fallback.',
  },
  {
    provider: 'facebook',
    delivery: 'poll',
    webhookVerifiable: false,
    note:
      'Facebook webhooks require app review and page admin access. ' +
      'Public Page RSS polling is the practical fallback.',
  },
  {
    provider: 'spotify',
    delivery: 'poll',
    webhookVerifiable: false,
    note: 'Spotify has no push delivery for recently-played. Cron polling only.',
  },
];


export function getDeliveryStrategy(provider: string): ConnectorDeliveryStrategy | undefined {
  return DELIVERY_STRATEGY_MATRIX.find((s) => s.provider === provider);
}


export function supportsWebhook(provider: string): boolean {
  const s = getDeliveryStrategy(provider);
  return s?.delivery === 'webhook' || s?.delivery === 'webhook+poll';
}


export function supportsPoll(provider: string): boolean {
  const s = getDeliveryStrategy(provider);
  return s?.delivery === 'poll' || s?.delivery === 'webhook+poll';
}


export function supportsWebhookVerification(provider: string): boolean {
  return getDeliveryStrategy(provider)?.webhookVerifiable ?? false;
}


export function knownDeliveryProviders(): string[] {
  return DELIVERY_STRATEGY_MATRIX.map((s) => s.provider);
}
