


export const MAX_TAGS_PER_POST = 10;


export const MAX_TAG_LENGTH = 32;


const TAG_BODY_RE = /^[a-zA-Z0-9][a-zA-Z0-9_-]*$/;

export interface Hashtag {
  
  tag: string;
  
  display: string;
}

export interface TrendingTag {
  tag: string;
  
  count: number;
  
  momentum: number;
}


export function extractHashtags(text: string): Hashtag[] {
  if (!text) return [];

  const matches = text.match(/#[a-zA-Z0-9][a-zA-Z0-9_-]*/g);
  if (!matches) return [];

  const seen = new Set<string>();
  const tags: Hashtag[] = [];

  for (const match of matches) {
    const body = match.slice(1); 
    if (body.length > MAX_TAG_LENGTH) continue;

    const normalised = body.toLowerCase();
    if (seen.has(normalised)) continue;
    seen.add(normalised);

    tags.push({ tag: normalised, display: body });
    if (tags.length >= MAX_TAGS_PER_POST) break;
  }

  return tags;
}


export function validateTag(raw: string): string | null {
  const trimmed = raw.trim().replace(/^#/, '');
  if (!trimmed) return null;
  if (trimmed.length > MAX_TAG_LENGTH) return null;
  if (!TAG_BODY_RE.test(trimmed)) return null;
  return trimmed.toLowerCase();
}

interface TagUsage {
  tag: string;
  timestamp: number; 
}


export function calculateTrending(
  usages: TagUsage[],
  now?: number,
  decay = 0.1,
  limit = 20,
): TrendingTag[] {
  const currentTime = now ?? Date.now();
  const map = new Map<string, { count: number; momentum: number }>();

  for (const u of usages) {
    const existing = map.get(u.tag) ?? { count: 0, momentum: 0 };
    const ageHours = Math.max(0, (currentTime - u.timestamp) / 3_600_000);
    existing.count += 1;
    existing.momentum += 1 / (1 + ageHours * decay);
    map.set(u.tag, existing);
  }

  const results: TrendingTag[] = Array.from(map.entries()).map(
    ([tag, { count, momentum }]) => ({
      tag,
      count,
      momentum: Math.round(momentum * 100) / 100,
    }),
  );

  
  results.sort((a, b) => b.momentum - a.momentum);

  return results.slice(0, limit);
}


export function formatTag(tag: string): string {
  return `#${tag}`;
}


export function segmentText(
  text: string,
): Array<{ type: 'text' | 'hashtag'; value: string }> {
  const segments: Array<{ type: 'text' | 'hashtag'; value: string }> = [];
  const re = /#[a-zA-Z0-9][a-zA-Z0-9_-]*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }
    segments.push({ type: 'hashtag', value: match[0] });
    lastIndex = re.lastIndex;
  }

  if (lastIndex < text.length) {
    segments.push({ type: 'text', value: text.slice(lastIndex) });
  }

  return segments;
}
