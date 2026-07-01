import { normaliseSubstack } from '@/engine/connectors/normalise';
import { parseRssFeed, substackRssUrl } from '@/engine/social/rss-feed';
import type { UnifiedFeedItem } from '@/types/connector';



export interface SubstackCredentials {
  
  publication: string;
}


function extractSlug(publication: string): string {
  if (publication.includes('substack.com')) {
    
    const match = publication.match(/https?:\/\/([^.]+)\.substack\.com/);
    return match?.[1] ?? publication;
  }
  return publication.trim();
}


export async function substackVerify(creds: SubstackCredentials): Promise<string> {
  if (!creds.publication || creds.publication.trim().length === 0) {
    throw new Error('Substack publication is required (slug or URL).');
  }
  const url = substackRssUrl(creds.publication.trim());
  const res = await fetch(url, { method: 'HEAD' });
  if (!res.ok) {
    throw new Error(`Substack feed not accessible (${res.status}). Check the publication slug.`);
  }
  return extractSlug(creds.publication.trim());
}


export async function substackSync(creds: SubstackCredentials): Promise<UnifiedFeedItem[]> {
  const slug = extractSlug(creds.publication.trim());
  const url = substackRssUrl(creds.publication.trim());
  const items = await parseRssFeed({ provider: 'substack', feedUrl: url }, 40);
  return items.map((item) => normaliseSubstack(item.raw as Parameters<typeof normaliseSubstack>[0], slug));
}

export function substackCredentialFields( ){
  return [
    {
      key: 'publication',
      label: 'Substack Publication',
      placeholder: 'mynewsletter',
      type: 'text' as const,
      hint: 'Your Substack subdomain (e.g. "mynewsletter") or full URL (e.g. "https://mynewsletter.substack.com").',
    },
  ];
}
