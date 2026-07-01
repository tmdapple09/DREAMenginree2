



export type NavSuggestion = {
  label: string;
  href: string | null; 
  icon: string;
};

export const NAV_SUGGESTIONS: NavSuggestion[] = [
  { label: 'HomeDream',         href: '/homedream',             icon: '🏠' },
  { label: 'DreamShop',         href: '/shop',                  icon: '🛍️' },
  { label: 'DreamMarketplace',  href: '/marketplace',           icon: '🏪' },
  { label: 'DreamDM',           href: '/messages',              icon: '💬' },
  { label: 'DreamAds',          href: '/ads',                   icon: '📢' },
  { label: 'Settings',          href: '/settings',              icon: '⚙️' },
  { label: 'Music Daydream',    href: '/daydream/music',        icon: '🎵' },
  { label: 'Games Daydream',    href: '/daydream/games',        icon: '🎮' },
  { label: 'Lab Daydream',      href: '/daydream/lab',          icon: '🧪' },
  { label: 'Code Daydream',     href: '/daydream/code',         icon: '💻' },
  { label: 'Brand Daydream',    href: '/daydream/brand',        icon: '🎨' },
  { label: 'Create Daydream',   href: '/daydream/create',       icon: '✏️' },
  { label: 'EditProfileDream',  href: '/edit-profiledream',     icon: '👤' },
  { label: 'Discover',          href: '/discover',              icon: '🔭' },
  { label: 'Dr. Eams',          href: null,                     icon: '◈'  },
] as const;


export function matchNavSuggestions(query: string, limit = 5): NavSuggestion[] {
  if (!query.trim()) return [];
  const q = query.trim().toLowerCase();
  return NAV_SUGGESTIONS.filter((s) => s.label.toLowerCase().includes(q)).slice(0, limit);
}




export type DrEamsRequestBody = {
  message: string;
  ui: { route: string };
  client_session_id?: string;
};


export function buildDrEamsRequest(query: string, route = '/homedream'): DrEamsRequestBody {
  return {
    message: query.trim(),
    ui: { route },
  };
}




export type DrEamsParsedReply = {
  text: string;
  
  isError: boolean;
};


export function parseDrEamsReply(data: unknown): DrEamsParsedReply {
  if (data && typeof data === 'object') {
    const d = data as any;

    if (typeof d.response_text === 'string' && d.response_text.trim()) {
      return { text: d.response_text.trim(), isError: false };
    }

    const errMsg =
      d.error && typeof d.error === 'object'
        ? (d.error as any).message
        : undefined;

    if (typeof errMsg === 'string' && errMsg.trim()) {
      return { text: `⚠️ ${errMsg.trim()}`, isError: true };
    }
  }

  return {
    text: "I'm here to help! Try opening my full panel for a longer chat. ◈",
    isError: false,
  };
}




export function buildDreamDMUrl(query: string): string {
  const params = new URLSearchParams({
    from: 'dr-eams',
    q: query.trim(),
  });
  return `/messages?${params.toString()}`;
}




export function truncatePreview(text: string, maxChars = 36): string {
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars).trimEnd() + '…';
}
