

export interface SocialPlatform {
  
  id: string;
  
  label: string;
  
  color: string;
  
  emoji: string;
  
  urlPatterns: RegExp[];
  
  supportsShare: boolean;
  
  buildShareUrl: (url: string, text?: string) => string;
  
  profileUrlPrefix?: string;
}

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: 'twitter',
    label: 'X / Twitter',
    color: '#000000',
    emoji: '𝕏',
    supportsShare: true,
    urlPatterns: [/twitter\.com\
    buildShareUrl: (url, text) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}${text ? `&text=${encodeURIComponent(text)}` : ''}`,
    profileUrlPrefix: 'https://twitter.com/',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    color: '#E1306C',
    emoji: '📸',
    supportsShare: false,
    urlPatterns: [/instagram\.com\
    buildShareUrl: () => `https://www.instagram.com/`,
    profileUrlPrefix: 'https://instagram.com/',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    color: '#1877F2',
    emoji: '👤',
    supportsShare: true,
    urlPatterns: [/facebook\.com\
    buildShareUrl: (url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    profileUrlPrefix: 'https://facebook.com/',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    color: '#FF0000',
    emoji: '▶️',
    supportsShare: false,
    urlPatterns: [/youtube\.com\
    buildShareUrl: () => `https://www.youtube.com/`,
    profileUrlPrefix: 'https://youtube.com/@',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    color: '#010101',
    emoji: '🎵',
    supportsShare: false,
    urlPatterns: [/tiktok\.com\
    buildShareUrl: () => `https://www.tiktok.com/`,
    profileUrlPrefix: 'https://tiktok.com/@',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    color: '#0A66C2',
    emoji: '💼',
    supportsShare: true,
    urlPatterns: [/linkedin\.com\
    buildShareUrl: (url) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    profileUrlPrefix: 'https://linkedin.com/in/',
  },
  {
    id: 'bluesky',
    label: 'Bluesky',
    color: '#0085FF',
    emoji: '🦋',
    supportsShare: true,
    urlPatterns: [/bsky\.app\
    buildShareUrl: (url, text) =>
      `https://bsky.app/intent/compose?text=${encodeURIComponent(`${text ? text + ' ' : ''}${url}`)}`,
    profileUrlPrefix: 'https://bsky.app/profile/',
  },
  {
    id: 'threads',
    label: 'Threads',
    color: '#101010',
    emoji: '🧵',
    supportsShare: true,
    urlPatterns: [/threads\.net\
    buildShareUrl: (url, text) =>
      `https://www.threads.net/intent/post?text=${encodeURIComponent(`${text ? text + ' ' : ''}${url}`)}`,
    profileUrlPrefix: 'https://threads.net/@',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    color: '#25D366',
    emoji: '💬',
    supportsShare: true,
    urlPatterns: [/wa\.me\
    buildShareUrl: (url, text) =>
      `https://api.whatsapp.com/send?text=${encodeURIComponent(`${text ? text + ' ' : ''}${url}`)}`,
  },
  {
    id: 'discord',
    label: 'Discord',
    color: '#5865F2',
    emoji: '🎮',
    supportsShare: false,
    urlPatterns: [/discord\.gg\
    buildShareUrl: () => `https://discord.com/`,
    profileUrlPrefix: 'https://discord.gg/',
  },
  {
    id: 'twitch',
    label: 'Twitch',
    color: '#9146FF',
    emoji: '🟣',
    supportsShare: false,
    urlPatterns: [/twitch\.tv\
    buildShareUrl: () => `https://www.twitch.tv/`,
    profileUrlPrefix: 'https://twitch.tv/',
  },
  {
    id: 'github',
    label: 'GitHub',
    color: '#171515',
    emoji: '🐙',
    supportsShare: false,
    urlPatterns: [/github\.com\
    buildShareUrl: () => `https://github.com/`,
    profileUrlPrefix: 'https://github.com/',
  },
  {
    id: 'snapchat',
    label: 'Snapchat',
    color: '#FFFC00',
    emoji: '👻',
    supportsShare: true,
    urlPatterns: [/snapchat\.com\
    buildShareUrl: (url) =>
      `https://www.snapchat.com/scan?attachmentUrl=${encodeURIComponent(url)}`,
    profileUrlPrefix: 'https://snapchat.com/add/',
  },
  {
    id: 'pinterest',
    label: 'Pinterest',
    color: '#E60023',
    emoji: '📌',
    supportsShare: true,
    urlPatterns: [/pinterest\.com\
    buildShareUrl: (url, text) =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}${text ? `&description=${encodeURIComponent(text)}` : ''}`,
    profileUrlPrefix: 'https://pinterest.com/',
  },
  {
    id: 'spotify',
    label: 'Spotify',
    color: '#1DB954',
    emoji: '🎧',
    supportsShare: false,
    urlPatterns: [/spotify\.com\
    buildShareUrl: () => `https://open.spotify.com/`,
    profileUrlPrefix: 'https://open.spotify.com/user/',
  },
  {
    id: 'soundcloud',
    label: 'SoundCloud',
    color: '#FF5500',
    emoji: '☁️',
    supportsShare: false,
    urlPatterns: [/soundcloud\.com\
    buildShareUrl: () => `https://soundcloud.com/`,
    profileUrlPrefix: 'https://soundcloud.com/',
  },
  {
    id: 'mastodon',
    label: 'Mastodon',
    color: '#6364FF',
    emoji: '🐘',
    supportsShare: true,
    urlPatterns: [/mastodon\./i, /mstdn\./i],
    buildShareUrl: (url, text) =>
      `https://mastodon.social/share?text=${encodeURIComponent(`${text ? text + ' ' : ''}${url}`)}`,
  },
  {
    id: 'website',
    label: 'Website',
    color: '#34d399',
    emoji: '🌐',
    supportsShare: false,
    urlPatterns: [],
    buildShareUrl: (url) => url,
  },
  {
    id: 'other',
    label: 'Other Link',
    color: '#6366f1',
    emoji: '🔗',
    supportsShare: false,
    urlPatterns: [],
    buildShareUrl: (url) => url,
  },
];


export const PLATFORM_MAP: Record<string, SocialPlatform> = Object.fromEntries(
  SOCIAL_PLATFORMS.map((p) => [p.id, p])
);


export function detectPlatform(url: string): SocialPlatform | undefined {
  if (!url) return undefined;
  return SOCIAL_PLATFORMS.find(
    (p) => p.urlPatterns.length > 0 && p.urlPatterns.some((re) => re.test(url))
  );
}


export function getPlatform(id: string): SocialPlatform {
  return PLATFORM_MAP[id] ?? (PLATFORM_MAP['other'] as SocialPlatform);
}


export const PROFILE_SHARE_PLATFORMS: SocialPlatform[] = SOCIAL_PLATFORMS.filter(
  (p) => p.supportsShare
);
