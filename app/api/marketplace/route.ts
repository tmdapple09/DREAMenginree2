import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { NextRequest, NextResponse } from 'next/server';
import { toErrorMessage } from '@/utils/index';













export async function GET(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();

  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');

  let query = supabase
    .from('marketplace_items')
    .select(`
      id,
      title,
      description,
      category,
      price_cents,
      preview_url,
      tags,
      created_at,
      seller_id,
      profiles!marketplace_items_seller_id_fkey(
        id,
        handle,
        display_name,
        avatar_url
      )
    `)
    .eq('is_published', true)
    .order('created_at', { ascending: false })
    .limit(60);

  if (category && category !== 'all') {
    query = query.eq('category', category);
  }

  const { data: items, error } = await query;

  if (error) {
    
    console.error('[marketplace GET]', toErrorMessage(error));
    return NextResponse.json({ error: 'Failed to fetch listings.' }, { status: 500 });
  }

  return NextResponse.json({ items: items ?? [] });
}



export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
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

  const { title, description, category, price, tags } = body as {
    title?: string;
    description?: string;
    category?: string;
    price?: number | string;
    tags?: string;
  };

  const trimmedTitle = (title ?? '').trim();
  if (!trimmedTitle || trimmedTitle.length === 0) {
    return NextResponse.json({ error: 'Title is required.' }, { status: 400 });
  }
  if (trimmedTitle.length > 120) {
    return NextResponse.json({ error: 'Title must be 120 characters or fewer.' }, { status: 400 });
  }

  const VALID_CATEGORIES = ['widget', 'theme', 'connector', 'music'];
  const normalizedCategory = (category ?? '').toLowerCase().trim();
  if (!VALID_CATEGORIES.includes(normalizedCategory)) {
    return NextResponse.json(
      { error: `Category must be one of: ${VALID_CATEGORIES.join(', ')}.` },
      { status: 400 },
    );
  }

  
  
  const priceFloat = parseFloat(String(price ?? 0));
  if (isNaN(priceFloat) || priceFloat < 0) {
    return NextResponse.json({ error: 'Price must be a non-negative number.' }, { status: 400 });
  }
  const priceCents = Math.round(priceFloat * 100);

  
  const parsedTags = typeof tags === 'string'
    ? tags.split(',').map((t) => t.trim().toLowerCase()).filter(Boolean).slice(0, 10)
    : [];
  if (parsedTags.some((t) => t.length > 40)) {
    return NextResponse.json({ error: 'Each tag must be 40 characters or fewer.' }, { status: 400 });
  }

  const { data: item, error: insertError } = await supabase
    .from('marketplace_items')
    .insert({
      seller_id:    user.id,
      title:        trimmedTitle,
      description:  description?.trim() || null,
      category:     normalizedCategory,
      price_cents:  priceCents,
      tags:         parsedTags,
      is_published: false, 
    })
    .select('id, title, category, price_cents, is_published, created_at')
    .single();

  if (insertError) {
    console.error('[marketplace POST]', insertError.message);
    return NextResponse.json({ error: 'Failed to create listing.' }, { status: 500 });
  }

  return NextResponse.json({ item }, { status: 201 });
}
