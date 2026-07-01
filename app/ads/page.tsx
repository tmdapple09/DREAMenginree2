import DreamWord from '@/components/ui/dream.DreamWord';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { AdListing, AdOrder, AdSlot } from '@/types/ads';
import type { SupabaseClient } from '@supabase/supabase-js';
import { ArrowLeft, BarChart3, DollarSign, LayoutGrid, Plus, ShoppingCart, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';



export default async function AdsPage( ){
  await connection();
  const supabase = await createServerClient();
  const db = supabase as SupabaseClient;
  const user = await safeGetUser(supabase);

  if (!user) {
    redirect('/login');
  }

  
  const { data: mySlotsData } = await db
    .from('ad_slots')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  
  
  const { data: marketplaceData } = await db
    .from('ad_listings')
    .select(`
      *,
      ad_slots!inner(*)
    `);

  
  const { data: myOrdersData } = await db
    .from('ad_orders')
    .select(`
      *,
      ad_listings!inner(*, ad_slots!inner(*))
    `)
    .eq('buyer_id', user.id);

  
  const mySlots: AdSlot[] = (mySlotsData as unknown as AdSlot[] | null) ?? [];
  const allListings: AdListing[] = (marketplaceData as unknown as AdListing[] | null) ?? [];
  const myOrders: AdOrder[] = (myOrdersData as unknown as AdOrder[] | null) ?? [];

  const userAdListings = allListings;
  const platformPromotions: AdListing[] = [];

  const slotLabel = (slot?: AdSlot | null) =>
    (slot?.slot_name ?? slot?.placement ?? 'ad_slot').replace(/_/g, ' ');
  const dailyPrice = (slot?: AdSlot | null) =>
    Number(slot?.price_per_day ?? slot?.price_day ?? 0).toFixed(2);
  const weeklyPrice = (slot?: AdSlot | null) =>
    Number(slot?.price_per_week ?? slot?.price_week ?? 0).toFixed(2);
  const isSlotActive = (slot?: AdSlot | null) =>
    slot?.is_available ?? slot?.active ?? false;

  return (
    <div className="de-sky-bg min-h-screen">
      
      <header className="sticky top-0 z-30 backdrop-blur-xl" style={{ background: 'rgba(245,243,238,0.92)', borderBottom: '1px solid rgba(200,165,80,0.18)' }}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/homedream" className="p-2 -ml-2 rounded-full" style={{ background: 'rgba(200,152,26,0.10)' }}>
            <ArrowLeft className="w-4 h-4" style={{ color: 'var(--de-text)' }} />
          </Link>
          <DollarSign className="w-5 h-5" style={{ color: 'var(--de-gold)' }} />
          <h1 className="text-lg font-bold"><DreamWord />Ads</h1>
          <Link href="/ads/create" className="de-btn de-btn-gold ml-auto" style={{ gap: 6, minHeight: 40 }}>
            <Plus className="w-4 h-4" />
            Create Slot
          </Link>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6 pb-24 space-y-4">

        
        <div className="de-widget">
          <div className="de-widget-header">
            <BarChart3 className="w-4 h-4 mr-2" style={{ color: 'var(--de-gold)' }} />
            <span className="de-widget-title">Revenue Summary</span>
          </div>
          <div className="de-widget-body">
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '$0.00', label: 'Total Earned' },
                { value: String(myOrders.length), label: 'Active Orders' },
                { value: '0', label: 'Impressions' },
              ].map(({ value, label }) => (
                <div key={label} className="de-surface p-3 text-center">
                  <div className="text-xl font-bold" style={{ color: 'var(--de-heading)' }}>{value}</div>
                  <div className="text-xs mt-1" style={{ color: 'var(--de-text-dim)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className="de-widget">
          <div className="de-widget-header">
            <span className="de-widget-title">My Ad Slots</span>
            <span style={{ fontSize: 11, color: 'var(--de-text-dim)' }}>{mySlots.length} slot{mySlots.length !== 1 ? 's' : ''}</span>
          </div>
          <div className="de-widget-body" style={{ padding: '4px 6px' }}>
            {mySlots.length === 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '20px 0' }}>
                <DollarSign className="w-8 h-8 opacity-20" style={{ color: 'var(--de-gold)' }} />
                <p className="text-sm font-medium" style={{ color: 'var(--de-heading)' }}>No slots yet</p>
                <p className="text-xs" style={{ color: 'var(--de-text-dim)' }}>Create your first ad slot to start earning</p>
              </div>
            ) : (
              mySlots.map((slot) => (
                <Link key={slot.id} href={`/ads/slot/${slot.id}`} className="de-row" style={{ borderRadius: 10 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(200,152,26,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <LayoutGrid className="w-5 h-5" style={{ color: 'var(--de-gold)' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="text-sm font-semibold capitalize" style={{ color: 'var(--de-heading)' }}>
                      {slotLabel(slot)}
                    </div>
                    <div className="text-xs" style={{ color: 'var(--de-text-dim)' }}>
                      ${dailyPrice(slot)}/day · ${weeklyPrice(slot)}/week
                    </div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{
                    background: isSlotActive(slot) ? 'rgba(34,197,94,0.12)' : 'rgba(160,195,240,0.15)',
                    color: isSlotActive(slot) ? '#22c55e' : 'var(--de-text-dim)',
                  }}>
                    {isSlotActive(slot) ? 'Active' : 'Inactive'}
                  </span>
                </Link>
              ))
            )}
          </div>
          {mySlots.length > 0 && (
            <div className="de-widget-actions">
              <Link href="/ads/create" className="de-btn de-btn-gold" style={{ gap: 6 }}>
                <Plus className="w-4 h-4" />
                New Slot
              </Link>
            </div>
          )}
        </div>

        
        <div className="de-widget">
          <div className="de-widget-header">
            <ShoppingCart className="w-4 h-4 mr-2" style={{ color: 'var(--de-accent)' }} />
            <span className="de-widget-title">My <DreamWord />Ads — Available</span>
            <span style={{ fontSize: 11, color: 'var(--de-text-dim)' }}>
              {userAdListings.length} listing{userAdListings.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="de-widget-body" style={{ padding: '4px 6px' }}>
            {userAdListings.length === 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '20px 0' }}>
                <ShoppingCart className="w-8 h-8 opacity-20" style={{ color: 'var(--de-accent)' }} />
                <p className="text-sm font-medium" style={{ color: 'var(--de-heading)' }}>No user DreamAd listings</p>
                <p className="text-xs" style={{ color: 'var(--de-text-dim)' }}>
                  Other creators have not listed any DreamAd slots yet
                </p>
              </div>
            ) : (
              userAdListings.map((listing) => (
                <a
                  key={listing.id}
                  href={`/ads/slot/${listing.ad_slots?.id}`}
                  className="de-row"
                  style={{ borderRadius: 10, textDecoration: 'none' }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(42,138,184,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <LayoutGrid className="w-5 h-5" style={{ color: 'var(--de-accent)' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="text-sm font-semibold capitalize" style={{ color: 'var(--de-heading)' }}>
                      {slotLabel(listing.ad_slots)}
                    </div>
                    <div className="text-xs" style={{ color: 'var(--de-text-dim)' }}>
                      ${dailyPrice(listing.ad_slots)}/day
                    </div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(42,138,184,0.1)', color: 'var(--de-accent)', border: '1px solid rgba(42,138,184,0.2)' }}>
                    View →
                  </span>
                </a>
              ))
            )}
          </div>
        </div>

        
        {platformPromotions.length > 0 && (
          <div className="de-widget">
            <div className="de-widget-header">
              <Sparkles className="w-4 h-4 mr-2" style={{ color: '#9b59b6' }} />
              <span className="de-widget-title">Platform Promotions</span>
              <span style={{ fontSize: 11, color: 'var(--de-text-dim)' }}>
                {platformPromotions.length} promoted
              </span>
            </div>
            <div className="de-widget-body" style={{ padding: '4px 6px' }}>
              {platformPromotions.map((listing) => (
                <a
                  key={listing.id}
                  href={`/ads/slot/${listing.ad_slots?.id}`}
                  className="de-row"
                  style={{ borderRadius: 10, textDecoration: 'none' }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(155,89,182,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Sparkles className="w-5 h-5" style={{ color: '#9b59b6' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="text-sm font-semibold capitalize" style={{ color: 'var(--de-heading)' }}>
                      {slotLabel(listing.ad_slots)}
                    </div>
                    <div className="text-xs" style={{ color: 'var(--de-text-dim)' }}>
                      Platform · ${dailyPrice(listing.ad_slots)}/day
                    </div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(155,89,182,0.10)', color: '#9b59b6', border: '1px solid rgba(155,89,182,0.20)' }}>
                    Promoted
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        
        {myOrders.length > 0 && (
          <div className="de-widget">
            <div className="de-widget-header">
              <span className="de-widget-title">My Orders</span>
              <span style={{ fontSize: 11, color: 'var(--de-text-dim)' }}>{myOrders.length} order{myOrders.length !== 1 ? 's' : ''}</span>
            </div>
            <div className="de-widget-body" style={{ padding: '4px 6px' }}>
              {myOrders.map((order) => (
                <div key={order.id} className="de-row">
                  <div style={{ flex: 1 }}>
                    <div className="text-sm font-semibold capitalize" style={{ color: 'var(--de-heading)' }}>
                      {slotLabel(order.ad_listings?.ad_slots)}
                    </div>
                    <div className="text-xs" style={{ color: 'var(--de-text-dim)' }}>
                      Order created
                    </div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(42,138,184,0.1)', color: 'var(--de-accent)', border: '1px solid rgba(42,138,184,0.2)' }}>
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
