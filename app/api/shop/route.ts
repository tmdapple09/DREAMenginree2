import { normalizeShopListing, validateShopListing } from '@/lib/shop/listings';
import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import type { Database } from '@/types/supabase';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/lib/utils';

// GET - Fetch merch items
export async function GET(req: NextRequest): Promise<NextResponse> {
  const supabase = (await createServerClient()) as SupabaseClient<Database>;
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const sellerId = searchParams.get('seller_id');

  let query = supabase
    .from('merch')
    .select(`
      *,
      profiles!inner(id, handle, display_name, avatar_url)
    `)
    .order('created_at', { ascending: false });

  if (sellerId) {
    query = query.eq('user_id', sellerId);
  }

  const { data: items, error } = await query;

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ items });
}

// POST - Create a merch listing
export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = (await createServerClient()) as SupabaseClient<Database>;
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const { title, description, price, stock, image_url, category } = body as {
    title?: string;
    description?: string;
    price?: number | string;
    stock?: number | string;
    image_url?: string;
    category?: string;
  };

  if (!title || title.trim().length === 0) {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 });
  }

  const numericPrice = Number(price);
  if (!price || isNaN(numericPrice) || numericPrice <= 0) {
    return NextResponse.json({ error: 'Valid price is required' }, { status: 400 });
  }

  // Validate using lib/shop/listings
  const validation = validateShopListing({ title, price });
  if (!validation.valid) {
    return NextResponse.json({ error: validation.errors[0] }, { status: 400 });
  }

  // Normalize to DB record shape
  const record = normalizeShopListing(user.id, {
    title: title!,
    description,
    price: price!,
    stock,
    image_url,
    category,
  });

  const { data: item, error } = await supabase
    .from('merch')
    .insert(record)
    .select(`
      *,
      profiles!inner(id, handle, display_name, avatar_url)
    `)
    .single();

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  await (supabase as SupabaseClient).from('feed_items').insert({
    feed_widget_id: `user:${user.id}`,
    source_widget_id: `merch:${item.id}`,
    title: item.name ?? item.title ?? title.trim(),
    preview: {
      provider: 'dreamengin',
      source: 'merch',
      user_id: user.id,
      item_id: item.id,
      price: item.price,
      content_text: item.description ?? item.name ?? item.title ?? title.trim(),
      media_url: item.image_url ?? null,
      media: item.image_url ? [{ url: item.image_url, type: 'image' }] : [],
      permalink: `/shop/${item.id}`,
      published_at: item.created_at ?? new Date().toISOString(),
      raw: item,
    },
  });

  return NextResponse.json({ item }, { status: 201 });
}

// PUT - Update a merch listing
export async function PUT(req: NextRequest): Promise<NextResponse> {
  const supabase = (await createServerClient()) as SupabaseClient<Database>;
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json().catch(() => ({})) as {
    id?: string;
    title?: string;
    description?: string;
    price?: number | string;
    image_url?: string;
  };
  const { id, title, description, price, image_url } = body;

  if (!id) {
    return NextResponse.json({ error: 'Item ID is required' }, { status: 400 });
  }

  const updatePayload: Record<string, unknown> = { updated_at: new Date().toISOString() };
  if (title !== undefined) updatePayload.name = title.trim();
  if (description !== undefined) updatePayload.description = description?.trim();
  if (price !== undefined) {
    updatePayload.price = typeof price === 'number' ? price : parseFloat(price);
  }
  if (image_url !== undefined) updatePayload.image_url = image_url;

  const { data: item, error } = await supabase
    .from('merch')
    .update(updatePayload as never)
    .eq('id', id)
    .eq('user_id', user.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ item });
}

// DELETE - Remove a merch listing
export async function DELETE(req: NextRequest): Promise<NextResponse> {
  const supabase = (await createServerClient()) as SupabaseClient<Database>;
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Item ID is required' }, { status: 400 });
  }

  const { error } = await supabase
    .from('merch')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
