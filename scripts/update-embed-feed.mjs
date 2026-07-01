#!/usr/bin/env node


import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT   = join(__dirname, '..');
const OUTPUT_PATH = join(REPO_ROOT, 'public', 'feeds', 'embed-feed.json');



const MIN_VIEW_COUNT   = parseInt(process.env.FEED_MIN_VIEW_COUNT  ?? '0',  10);
const MAX_ITEMS        = parseInt(process.env.FEED_MAX_ITEMS        ?? '20', 10);
const REQUIRED_TAGS    = (process.env.FEED_REQUIRED_TAGS ?? '')
  .split(',').map((t) => t.trim().toLowerCase()).filter(Boolean);
const SOURCES          = (process.env.FEED_SOURCES ?? 'youtube')
  .split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
const YOUTUBEAPI       = process.env.YOUTUBEAPI  ?? '';
const FEED_QUERY       = process.env.FEED_QUERY ?? '';
const IG_ACCESS_TOKEN  = process.env.INSTAGRAM_ACCESS_TOKEN ?? '';
const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';

const YT_API = 'https://www.googleapis.com/youtube/v3';








async function fetchYouTubeVideos(apiKey, maxResults = 50) {
  const url =
    `${YT_API}/videos` +
    `?part=snippet,statistics` +
    `&chart=mostPopular` +
    `&maxResults=${maxResults}` +
    `&key=${encodeURIComponent(apiKey)}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`YouTube API error ${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  return data.items ?? [];
}


async function fetchYouTubeSearchVideos(apiKey, query, maxResults = 50) {
  if (!query) return fetchYouTubeVideos(apiKey, maxResults);

  const url =
    `${YT_API}/search` +
    `?part=snippet` +
    `&q=${encodeURIComponent(query)}` +
    `&type=video` +
    `&order=date` +
    `&relevanceLanguage=en` +
    `&maxResults=${maxResults}` +
    `&key=${encodeURIComponent(apiKey)}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`YouTube search API error ${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  
  
  
  return (data.items ?? []).map((item) => ({
    id: item.id?.videoId ?? '',
    snippet: item.snippet ?? {},
    statistics: {},
  }));
}


function normaliseYouTubeItem(item) {
  const id          = item.id ?? '';
  const snippet     = item.snippet ?? {};
  const statistics  = item.statistics ?? {};
  const viewCount   = parseInt(statistics.viewCount ?? '0', 10);
  const tags        = (snippet.tags ?? []).map((t) => t.toLowerCase());
  const title       = snippet.title ?? '';
  const channelTitle = snippet.channelTitle ?? '';
  const publishedAt  = snippet.publishedAt ?? new Date().toISOString();
  const thumbnail    = snippet.thumbnails?.medium?.url ?? snippet.thumbnails?.default?.url ?? '';
  const permalink    = `https://www.youtube.com/watch?v=${id}`;

  const embedHtml =
    `<iframe width="560" height="315" ` +
    `src="https://www.youtube.com/embed/${id}" ` +
    `title="${title.replace(/"/g, '&quot;')}" ` +
    `frameborder="0" ` +
    `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ` +
    `referrerpolicy="strict-origin-when-cross-origin" ` +
    `allowfullscreen></iframe>`;

  return {
    id,
    provider: 'youtube',
    title,
    permalink,
    published_at: publishedAt,
    view_count: viewCount,
    tags,
    embed_html: embedHtml,
    thumbnail_url: thumbnail,
    channel_title: channelTitle,
  };
}




async function fetchInstagramPosts(accessToken, maxItems = 20) {
  if (!accessToken) return [];

  const url =
    `https://graph.instagram.com/me/media` +
    `?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username` +
    `&limit=${maxItems}` +
    `&access_token=${encodeURIComponent(accessToken)}`;

  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`Instagram API warning ${res.status}: ${await res.text()}`);
    return [];
  }
  const data = await res.json();
  return data.data ?? [];
}


function normaliseInstagramItem(item) {
  const id          = item.id ?? '';
  const caption     = item.caption ?? '';
  const permalink   = item.permalink ?? '';
  const publishedAt = item.timestamp ?? new Date().toISOString();
  const thumbnail   = item.thumbnail_url ?? item.media_url ?? '';

  
  const tags = (caption.match(/#\w+/g) ?? []).map((t) => t.slice(1).toLowerCase());

  
  const embedHtml =
    `<blockquote class="instagram-media" ` +
    `data-instgrm-permalink="${permalink}" ` +
    `data-instgrm-version="14" ` +
    `style="max-width:540px;min-width:326px;width:99.375%;"></blockquote>` +
    `<script async src="//www.instagram.com/embed.js"></script>`;

  return {
    id,
    provider: 'instagram',
    title: caption.slice(0, 120),
    permalink,
    published_at: publishedAt,
    view_count: 0,        
    tags,
    embed_html: embedHtml,
    thumbnail_url: thumbnail,
    channel_title: item.username ?? '',
  };
}




function applyAlgorithm(items) {
  return items.filter((item) => {
    if (item.view_count < MIN_VIEW_COUNT) return false;

    if (REQUIRED_TAGS.length > 0) {
      const hasTag = REQUIRED_TAGS.some((required) =>
        item.tags.some((tag) => tag.includes(required)) ||
        item.title.toLowerCase().includes(required),
      );
      if (!hasTag) return false;
    }

    return true;
  });
}




async function persistToSupabase(items, generatedAt) {
  if (!NEXT_PUBLIC_SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.warn('⚠️  NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set — skipping DB persist.');
    return { stored: 0, skipped: true };
  }

  const rows = items.map((item) => ({
    provider:      item.provider,
    external_id:   item.id,
    title:         item.title,
    permalink:     item.permalink,
    published_at:  item.published_at || null,
    view_count:    item.view_count,
    tags:          item.tags,
    embed_html:    item.embed_html,
    thumbnail_url: item.thumbnail_url,
    channel_title: item.channel_title,
    generated_at:  generatedAt,
  }));

  const endpoint = `${NEXT_PUBLIC_SUPABASE_URL.replace(/\/$/, '')}/rest/v1/embed_feed_items`;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type':  'application/json',
      'apikey':        SUPABASE_SERVICE_ROLE_KEY,
      'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      
      'Prefer':        'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify(rows),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '(no body)');
    throw new Error(`Supabase upsert failed ${res.status}: ${text}`);
  }

  return { stored: rows.length, skipped: false };
}



async function main() {
  console.log('DREAMengin embed-feed updater');
  console.log(`Sources:         ${SOURCES.join(', ')}`);
  console.log(`Min view count:  ${MIN_VIEW_COUNT}`);
  console.log(`Required tags:   ${REQUIRED_TAGS.length ? REQUIRED_TAGS.join(', ') : '(none)'}`);
  console.log(`Max items:       ${MAX_ITEMS}`);
  console.log('');

  const raw = [];

  
  if (SOURCES.includes('youtube')) {
    if (!YOUTUBEAPI) {
      console.warn('⚠️  YOUTUBEAPI is not set — skipping YouTube source.');
    } else {
      console.log('Fetching YouTube videos…');
      const ytRaw  = await fetchYouTubeVideos(YOUTUBEAPI, Math.min(MAX_ITEMS * 3, 50));
      const ytItems = ytRaw.map(normaliseYouTubeItem);
      console.log(`  Fetched ${ytItems.length} YouTube items.`);
      raw.push(...ytItems);
    }
  }

  
  if (SOURCES.includes('instagram')) {
    if (!IG_ACCESS_TOKEN) {
      console.warn('⚠️  INSTAGRAM_ACCESS_TOKEN is not set — skipping Instagram source.');
    } else {
      console.log('Fetching Instagram posts…');
      const igRaw   = await fetchInstagramPosts(IG_ACCESS_TOKEN, MAX_ITEMS * 2);
      const igItems = igRaw.map(normaliseInstagramItem);
      console.log(`  Fetched ${igItems.length} Instagram items.`);
      raw.push(...igItems);
    }
  }

  if (raw.length === 0) {
    console.warn('⚠️  No items fetched from any source. Writing empty feed.');
  }

  
  const filtered = applyAlgorithm(raw)
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
    .slice(0, MAX_ITEMS);

  console.log(`\nAfter algorithm filter: ${filtered.length} / ${raw.length} items kept.`);

  const now = new Date().toISOString();

  
  const output = {
    generated_at: now,
    algorithm: {
      min_view_count: MIN_VIEW_COUNT,
      required_tags:  REQUIRED_TAGS,
      max_items:      MAX_ITEMS,
      sources:        SOURCES,
    },
    items: filtered,
  };

  
  try {
    const { stored, skipped } = await persistToSupabase(filtered, now);
    if (!skipped) {
      console.log(`\n✅ Upserted ${stored} items → Supabase embed_feed_items`);
    }
  } catch (err) {
    console.error(`\n❌ Supabase persist error: ${err.message}`);
    
  }

  
  
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });

  
  writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2) + '\n', 'utf8');
  console.log(`✅ Wrote ${filtered.length} embed items → ${OUTPUT_PATH}`);

  
  if (filtered.length > 0) {
    console.log('\nEmbed feed preview (first 5 items):');
    filtered.slice(0, 5).forEach((item, i) => {
      console.log(`  ${i + 1}. [${item.provider}] ${item.title.slice(0, 70)}`);
      console.log(`      views: ${item.view_count.toLocaleString()} | tags: ${item.tags.slice(0, 3).join(', ')}`);
    });
  }
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});