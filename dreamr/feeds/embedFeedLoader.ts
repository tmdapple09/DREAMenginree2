import 'server-only';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';




export interface EmbedFeedItem {
  
  id: string;
  
  provider: string;
  
  title: string;
  
  permalink: string;
  
  published_at: string;
  
  view_count: number;
  
  tags: string[];
  
  embed_html: string;
  
  thumbnail_url: string;
  
  channel_title: string;
}


export interface EmbedFeedAlgorithm {
  min_view_count: number;
  required_tags: string[];
  max_items: number;
  sources: string[];
}


export interface EmbedFeed {
  
  generated_at: string;
  
  algorithm: EmbedFeedAlgorithm;
  
  items: EmbedFeedItem[];
}

const FEED_PATH = join(process.cwd(), 'public', 'feeds', 'embed-feed.json');


const EMPTY_FEED: EmbedFeed = {
  generated_at: '',
  algorithm: {
    min_view_count: 0,
    required_tags: [],
    max_items: 0,
    sources: [],
  },
  items: [],
};


export function loadEmbedFeed(): EmbedFeed {
  try {
    const raw = readFileSync(FEED_PATH, 'utf-8');
    const parsed = JSON.parse(raw) as EmbedFeed;
    if (!Array.isArray(parsed.items)) {
      return EMPTY_FEED;
    }
    return parsed;
  } catch {
    return EMPTY_FEED;
  }
}


export function loadEmbedFeedByProvider(provider: string): EmbedFeedItem[] {
  return loadEmbedFeed().items.filter((item) => item.provider === provider);
}
