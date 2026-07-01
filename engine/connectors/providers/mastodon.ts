import { normaliseMastodon } from '@/engine/connectors/normalise';
import type { UnifiedFeedItem } from '@/types/connector';



export interface MastodonCredentials {
  instance_url: string;
  access_token: string;
}

function getValidatedMastodonBaseUrl(instanceUrl: string): string {
  let url: URL;
  try {
    url = new URL(instanceUrl);
  } catch {
    throw new Error('Mastodon instance URL is invalid.');
  }

  if (url.protocol !== 'https:') {
    throw new Error('Mastodon instance URL must use https.');
  }

  if (url.username || url.password) {
    throw new Error('Mastodon instance URL must not include credentials.');
  }

  const hostname = url.hostname.toLowerCase();
  const ipv4Match = hostname.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (hostname === 'localhost' || hostname === '::1' || hostname === '[::1]') {
    throw new Error('Mastodon instance URL host is not allowed.');
  }
  if (ipv4Match) {
    const octets = ipv4Match.slice(1).map(Number);
    const validOctets = octets.every((n) => Number.isInteger(n) && n >= 0 && n <= 255);
    if (!validOctets) {
      throw new Error('Mastodon instance URL is invalid.');
    }
    const [a, b] = octets;
    const isPrivate =
      a === 10
      || (a === 172 && b >= 16 && b <= 31)
      || (a === 192 && b === 168)
      || a === 127
      || (a === 169 && b === 254)
      || a === 0;
    if (isPrivate) {
      throw new Error('Mastodon instance URL host is not allowed.');
    }
  }

  if (hostname.includes(':')) {
    const compact = hostname.replace(/^\[|\]$/g, '');
    if (compact === '::1' || compact.startsWith('fc') || compact.startsWith('fd') || compact.startsWith('fe80:')) {
      throw new Error('Mastodon instance URL host is not allowed.');
    }
  }

  return url.origin;
}


export async function mastodonVerify(creds: MastodonCredentials): Promise<string> {
  const base = getValidatedMastodonBaseUrl(creds.instance_url);
  const res = await fetch(`${base}/api/v1/accounts/verify_credentials`, {
    headers: { Authorization: `Bearer ${creds.access_token}` },
  });
  if (!res.ok) throw new Error(`Mastodon verify failed: ${res.status} ${res.statusText}`);
  const data = await res.json();
  return (data as { display_name?: string; acct?: string }).display_name
    ?? (data as { acct?: string }).acct
    ?? 'Unknown';
}


export async function mastodonSync(creds: MastodonCredentials): Promise<UnifiedFeedItem[]> {
  const base = getValidatedMastodonBaseUrl(creds.instance_url);
  const res = await fetch(`${base}/api/v1/timelines/home?limit=40`, {
    headers: { Authorization: `Bearer ${creds.access_token}` },
  });
  if (!res.ok) throw new Error(`Mastodon sync failed: ${res.status} ${res.statusText}`);
  const statuses = await res.json() as unknown[];
  return (statuses as Parameters<typeof normaliseMastodon>[0][]).map(
    (s) => normaliseMastodon(s, creds.instance_url),
  );
}

export function mastodonCredentialFields( ){
  return [
    {
      key: 'instance_url',
      label: 'Instance URL',
      placeholder: 'https://mastodon.social',
      type: 'url' as const,
      hint: 'The URL of your Mastodon instance (e.g. mastodon.social, fosstodon.org).',
    },
    {
      key: 'access_token',
      label: 'Access Token',
      placeholder: 'Paste your access token here',
      type: 'password' as const,
      hint: 'Get it from your instance: Settings → Development → New application.',
    },
  ];
}
