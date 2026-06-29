export type AdPlacement =
  | 'sidebar_banner'
  | 'feed_inline'
  | 'profile_header'
  | 'music_page'
  | 'lab_sidebar';

export type AdSlot = {
  id: string;
  owner_id?: string;
  user_id?: string;
  placement?: AdPlacement;
  slot_name?: string;
  slot_size?: string;
  active?: boolean;
  is_available?: boolean;
  price_day?: number;
  price_week?: number;
  price_per_day?: number;
  price_per_week?: number;
  created_at?: string;
  profiles?: ProfileLite;
};

export type ProfileLite = {
  handle: string;
  display_name: string | null;
};

export type AdListing = {
  id: string;
  status?: string;
  /** When true, this is platform promotional inventory (not a user DreamAd). */
  is_platform_promotion?: boolean;
  ad_slots: AdSlot & { profiles?: ProfileLite };
};

export type AdOrder = {
  id: string;
  buyer_id?: string;
  created_at?: string;
  status?: string;
  ad_listings?: AdListing;
};

