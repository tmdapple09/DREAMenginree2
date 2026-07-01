


export const SHOP_TABLE = 'merch' as const;


export const SHOP_LISTING_REQUIRED_FIELDS = ['name', 'price', 'user_id'] as const;


export const SHOP_TITLE_MAX_LENGTH = 200;


export const SHOP_PRICE_MIN = 0;

export type ShopListingInput = {
  title: string;          
  description?: string;
  price: number | string;
  stock?: number | string;
  image_url?: string;
  category?: string;
};

export type ShopListingRecord = {
  user_id: string;
  name: string;           
  description: string | null;
  price: number;
  image_url: string | null;
};

export type ValidationResult = {
  valid: boolean;
  errors: string[];
};


export function validateShopListing(body: unknown): ValidationResult {
  const errors: string[] = [];

  if (!body || typeof body !== 'object') {
    return { valid: false, errors: ['Request body must be a JSON object.'] };
  }

  const b = body as Record<string, unknown>;

  
  const titleRaw = (b.title ?? b.name ?? '') as string;
  const title = String(titleRaw).trim();
  if (!title) {
    errors.push('Title is required.');
  } else if (title.length > SHOP_TITLE_MAX_LENGTH) {
    errors.push(`Title must be ${SHOP_TITLE_MAX_LENGTH} characters or fewer.`);
  }

  
  const priceRaw = b.price;
  if (priceRaw === undefined || priceRaw === null || priceRaw === '') {
    errors.push('Price is required.');
  } else {
    const price = parseFloat(String(priceRaw));
    if (isNaN(price) || price < SHOP_PRICE_MIN) {
      errors.push(`Price must be a non-negative number.`);
    }
  }

  return { valid: errors.length === 0, errors };
}


export function normalizeShopListing(
  userId: string,
  input: ShopListingInput,
): ShopListingRecord {
  const title = String(input.title ?? '').trim();
  const price = parseFloat(String(input.price));

  return {
    user_id:     userId,
    name:        title,
    description: input.description?.trim() || null,
    price:       price,
    image_url:   input.image_url?.trim() || null,
  };
}


export const SHOP_ORDERS_TABLE = 'shop_orders' as const;


export const SHOP_ORDERS_PRIVATE_FIELDS = ['seller_notes'] as const;


export function isOrderOwner(
  userId: string,
  order: { buyer_id: string; seller_id: string },
): boolean {
  return userId === order.buyer_id || userId === order.seller_id;
}
