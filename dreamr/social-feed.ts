import Parser from "rss-parser";



export type SocialSource = "instagram" | "x" | "tiktok" | "youtube";

export type SocialFeedItem = {
  id: string;
  source: SocialSource;
  title: string;
  link: string;
  image: string | null;
  author: string | null;
  pubDate: string | null;
  isoDate: string | null;
  description: string | null;
};

const parser = new Parser({
  customFields: {
    item: [
      ["media:content", "mediaContent", { keepArray: true }],
      ["media:thumbnail", "mediaThumbnail", { keepArray: true }],
      ["description", "description"],
      ["content:encoded", "contentEncoded"],
    ],
  },
});

export function stripHtml(input?: string | null ){
  if (!input) return "";
  return input.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function extractFirstImage(item: Record<string, any>): string | null {
  
  if (item.enclosure?.url) return item.enclosure.url;

  
  if (Array.isArray(item.mediaContent)) {
    const mediaUrl = (item.mediaContent.find((x: Record<string, unknown>) => (x?.$ as { url?: string } | undefined)?.url)?.$ as { url?: string } | undefined)?.url;
    if (mediaUrl) return mediaUrl;
  }

  
  if (Array.isArray(item.mediaThumbnail)) {
    const thumbUrl = (item.mediaThumbnail.find((x: Record<string, unknown>) => (x?.$ as { url?: string } | undefined)?.url)?.$ as { url?: string } | undefined)?.url;
    if (thumbUrl) return thumbUrl;
  }

  
  const html =
    item["content:encoded"] ||
    item.contentEncoded ||
    (item as Record<string, unknown>).content ||
    (item as Record<string, unknown>).description ||
    "";
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (match?.[1]) return match[1];

  return null;
}


export async function fetchSocialFeed(
  feedUrl: string,
  source: SocialSource,
  limit = 25,
): Promise<SocialFeedItem[]> {
  const feed = await parser.parseURL(feedUrl);
  const items = (feed.items ?? []).slice(0, limit);

  return items.map((raw) => {
    const a = raw as Record<string, unknown>;
    return {
      id: raw.guid ?? a.id ?? raw.link ?? String(Math.random()),
      source,
      title: raw.title ?? "",
      link: raw.link ?? feedUrl,
      image: extractFirstImage(a),
      author: raw.creator ?? a.author ?? feed.title ?? null,
      pubDate: raw.pubDate ?? null,
      isoDate: raw.isoDate ?? null,
      description:
        stripHtml(
          a.contentEncoded ??
            a["content:encoded"] ??
            raw.content ??
            a.description,
        ) || null,
    };
  });
}
