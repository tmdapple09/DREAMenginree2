


export const MARKETPLACE_TABLE = 'marketplace_items' as const;


export const MARKETPLACE_CONTACT_TABLE = 'marketplace_contact_requests' as const;


export const VALID_MARKETPLACE_CATEGORIES = [
  'widget',
  'theme',
  'connector',
  'music',
] as const;

export type MarketplaceCategory = typeof VALID_MARKETPLACE_CATEGORIES[number];


export const MARKETPLACE_TITLE_MAX = 120;


export const MARKETPLACE_TAGS_MAX = 10;


export const MARKETPLACE_TAG_MAX_LENGTH = 40;

export type MarketplaceListingInput = {
  title: string;
  description?: string;
  category: string;
  price: number | string;
  tags?: string;
  preview_url?: string;
};

export type MarketplaceListingRecord = {
  seller_id:    string;
  title:        string;
  description:  string | null;
  category:     MarketplaceCategory;
  price_cents:  number;
  tags:         string[];
  is_published: false;    
};

export type ValidationResult = {
  valid: boolean;
  errors: string[];
};


export function validateMarketplaceListing(body: unknown): ValidationResult {
  const errors: string[] = [];

  if (!body || typeof body !== 'object') {
    return { valid: false, errors: ['Request body must be a JSON object.'] };
  }

  const b = body as Record<string, unknown>;

  const title = String(b.title ?? '').trim();
  if (!title) {
    errors.push('Title is required.');
  } else if (title.length > MARKETPLACE_TITLE_MAX) {
    errors.push(`Title must be ${MARKETPLACE_TITLE_MAX} characters or fewer.`);
  }

  const category = String(b.category ?? '').toLowerCase().trim();
  if (!VALID_MARKETPLACE_CATEGORIES.includes(category as MarketplaceCategory)) {
    errors.push(
      `Category must be one of: ${VALID_MARKETPLACE_CATEGORIES.join(', ')}.`,
    );
  }

  const priceFloat = parseFloat(String(b.price ?? 0));
  if (isNaN(priceFloat) || priceFloat < 0) {
    errors.push('Price must be a non-negative number.');
  }

  if (typeof b.tags === 'string') {
    const tags = b.tags.split(',').map((t: string) => t.trim()).filter(Boolean);
    if (tags.length > MARKETPLACE_TAGS_MAX) {
      errors.push(`Maximum ${MARKETPLACE_TAGS_MAX} tags allowed.`);
    }
    const longTag = tags.find((t: string) => t.length > MARKETPLACE_TAG_MAX_LENGTH);
    if (longTag) {
      errors.push(`Each tag must be ${MARKETPLACE_TAG_MAX_LENGTH} characters or fewer.`);
    }
  }

  return { valid: errors.length === 0, errors };
}


export function normalizeMarketplaceListing(
  sellerId: string,
  input: MarketplaceListingInput,
): MarketplaceListingRecord {
  const title        = String(input.title ?? '').trim();
  const category     = String(input.category ?? '').toLowerCase().trim() as MarketplaceCategory;
  const priceFloat   = parseFloat(String(input.price ?? 0)) || 0;
  const priceCents   = Math.round(priceFloat * 100);
  const parsedTags   = typeof input.tags === 'string'
    ? input.tags.split(',').map((t: string) => t.trim().toLowerCase()).filter(Boolean).slice(0, MARKETPLACE_TAGS_MAX)
    : [];

  return {
    seller_id:    sellerId,
    title,
    description:  input.description?.trim() || null,
    category,
    price_cents:  priceCents,
    tags:         parsedTags,
    is_published: false,
  };
}


export function marketplaceDetailRoute(itemId: string): string {
  return `/marketplace/${itemId}`;
}


export function formatMarketplacePrice(priceCents: number): string {
  if (priceCents === 0) return 'Free';
  return `$${(priceCents / 100).toFixed(2)}`;
}
