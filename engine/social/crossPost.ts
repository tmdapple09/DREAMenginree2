import { PLATFORM_MAP, type SocialPlatform } from './platforms';



export interface DreamSharePayload {
  
  id: string;
  
  title: string;
  
  description?: string;
  
  url: string;
  
  thumbnailUrl?: string;
  
  tags?: string[];
}

export interface CrossPostTarget {
  platformId: string;
  platform: SocialPlatform;
  shareUrl: string;
}

const CROSS_POST_PLATFORM_IDS = [
  'twitter',
  'mastodon',
  'bluesky',
  'threads',
  'facebook',
  'linkedin',
  'whatsapp',
  'pinterest',
] as const;


export function buildCrossPostTargets(
  payload: DreamSharePayload,
): CrossPostTarget[] {
  const text = formatShareText(payload);

  return CROSS_POST_PLATFORM_IDS
    .map((id): CrossPostTarget | null => {
      const platform = PLATFORM_MAP[id];
      if (!platform || !platform.supportsShare) return null;
      return {
        platformId: id,
        platform,
        shareUrl: platform.buildShareUrl(payload.url, text),
      };
    })
    .filter((t): t is NonNullable<typeof t> => t !== null);
}


export function formatShareText(payload: DreamSharePayload): string {
  const parts: string[] = [];

  parts.push(payload.title);

  if (payload.description && payload.description.length <= 120) {
    parts.push(payload.description);
  }

  if (payload.tags && payload.tags.length > 0) {
    const tagStr = payload.tags.slice(0, 5).map((t) => `#${t}`).join(' ');
    parts.push(tagStr);
  }

  return parts.join(' — ');
}


export function openCrossPost(shareUrl: string): void {
  if (typeof window === 'undefined') return;

  
  
  window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=500');
}


export async function nativeShare(payload: DreamSharePayload): Promise<boolean> {
  if (typeof navigator === 'undefined') return false;

  if (navigator.share) {
    try {
      await navigator.share({
        title: payload.title,
        text: payload.description ?? payload.title,
        url: payload.url,
      });
      return true;
    } catch {
      
    }
  }

  return false;
}


export function buildDreamOgMeta(payload: DreamSharePayload): Record<string, string> {
  const meta: Record<string, string> = {
    'og:type': 'website',
    'og:title': payload.title,
    'og:url': payload.url,
    'og:site_name': 'DREAMengin',
  };

  if (payload.description) {
    meta['og:description'] = payload.description;
  }

  if (payload.thumbnailUrl) {
    meta['og:image'] = payload.thumbnailUrl;
    meta['og:image:width'] = '1200';
    meta['og:image:height'] = '630';
    meta['twitter:card'] = 'summary_large_image';
    meta['twitter:image'] = payload.thumbnailUrl;
  } else {
    meta['twitter:card'] = 'summary';
  }

  meta['twitter:title'] = payload.title;
  if (payload.description) {
    meta['twitter:description'] = payload.description;
  }

  return meta;
}
