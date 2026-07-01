






export enum ActivityTier {
  
  PASSIVE = 0,

  
  REFLECTION = 1,

  
  SKILL_DEVELOPMENT = 2,

  
  ON_PLATFORM_CREATION = 3,

  
  REAL_WORLD_ACTION = 4,

  
  ON_PLATFORM_INNOVATION = 5,

  
  NEVER_DONE_BEFORE = 6,
}

export function isValidActivityTier(value: unknown): value is ActivityTier {
  return (
    typeof value === 'number' &&
    Number.isInteger(value) &&
    value >= ActivityTier.PASSIVE &&
    value <= ActivityTier.NEVER_DONE_BEFORE
  );
}


export enum VerificationMethod {
  
  VIDEO = 'video',

  
  AUDIO = 'audio',

  
  PHOTO = 'photo',

  
  ON_PLATFORM = 'on_platform',

  
  TEXT = 'text',
}


export enum CPVTier {
  
  STANDARD = 'standard',

  
  PREMIUM = 'premium',

  
  SUPER_PREMIUM = 'super_premium',
}


export enum AdType {
  
  PRE_ROLL = 'pre_roll',

  
  POST_ROLL = 'post_roll',

  
  REWARDED = 'rewarded',
}





export interface ActivityPoint {
  id: string;
  user_id: string;
  tier: ActivityTier;
  points: number;
  activity_type: string;
  description?: string;
  verification_id?: string;
  post_id?: string;
  decay_timestamp: string; 
  is_decayed: boolean;
  created_at: string;
  updated_at: string;
}

export interface ActivityVerification {
  id: string;
  user_id: string;
  tier: ActivityTier;
  verification_method: VerificationMethod;
  verification_strength: number;
  evidence_url?: string;
  evidence_metadata?: Record<string, unknown>;
  verified: boolean;
  verified_at?: string;
  verified_by?: string; 
  flagged_as_fraud: boolean;
  fraud_reason?: string;
  created_at: string;
  updated_at: string;
}

export interface View {
  id: string;
  post_id: string;
  viewer_id?: string;
  viewer_ip?: string;
  viewer_agent?: string;
  view_duration?: number; 
  scrolled_pct?: number; 
  verified: boolean;
  verified_at?: string;
  is_bot: boolean;
  is_duplicate: boolean;
  created_at: string;
}

export interface SkipCredit {
  user_id: string;
  credits_balance: number;
  earned_total: number;
  spent_total: number;
  last_earned_at?: string;
  last_spent_at?: string;
  updated_at: string;
}

export interface AdView {
  id: string;
  ad_id: string;
  ad_type: AdType;
  viewer_id: string;
  post_id?: string;
  view_duration: number; 
  watched_pct: number; 
  cpv_tier: CPVTier;
  cpv_amount: number;
  verified: boolean;
  verified_at?: string;
  billed: boolean;
  billed_at?: string;
  is_bot: boolean;
  is_duplicate: boolean;
  created_at: string;
}

export interface UserMetrics {
  user_id: string;
  aqs: number; 
  current_tier_30d?: ActivityTier; 
  real_shit_rate: number; 
  total_views: number;
  views_per_post: number;
  activity_points_30d: number;
  days_active_30d: number;
  most_viewed_post_id?: string;
  most_viewed_count: number;
  total_posts: number;
  verified_posts: number;
  calculated_at: string;
  updated_at: string;
}





export interface TrackActivityRequest {
  tier: ActivityTier;
  activity_type: string;
  description?: string;
  post_id?: string;
  verification_method?: VerificationMethod;
  evidence_url?: string;
  evidence_metadata?: Record<string, unknown>;
}

export interface TrackActivityResponse {
  activity_point: ActivityPoint;
  verification?: ActivityVerification;
  points_earned: number;
}

export interface TrackViewRequest {
  post_id: string;
  view_duration?: number;
  scrolled_pct?: number;
}

export interface TrackViewResponse {
  view: View;
  verified: boolean;
}

export interface TrackAdViewRequest {
  ad_id: string;
  ad_type: AdType;
  view_duration: number;
  watched_pct: number;
  post_id?: string;
}

export interface TrackAdViewResponse {
  ad_view: AdView;
  verified: boolean;
  credits_earned: number;
  revenue_split?: {
    platformShare: number;
    creatorShare: number;
    rewardPoolShare: number;
  };
}

export interface EarnSkipCreditsRequest {
  ad_view_id: string;
}

export interface EarnSkipCreditsResponse {
  skip_credit: SkipCredit;
  credits_earned: number;
  new_balance: number;
}

export interface UseSkipCreditsRequest {
  ad_id: string;
}

export interface UseSkipCreditsResponse {
  skip_credit: SkipCredit;
  credits_spent: number;
  new_balance: number;
}

export interface GetUserMetricsResponse {
  metrics: UserMetrics;
}

export interface GetPlatformMetricsResponse {
  real_shit_rate: number; 
  creation_to_consumption_ratio: number; 
  outside_activity_rate: number; 
  ad_view_rate: number; 
  harmful_content_rate: number; 
  average_aqs: number; 
  total_active_users: number;
  total_verified_views: number;
  calculated_at: string;
}






export const TIER_MULTIPLIERS: Record<ActivityTier, number> = {
  [ActivityTier.PASSIVE]: 1,
  [ActivityTier.REFLECTION]: 2,
  [ActivityTier.SKILL_DEVELOPMENT]: 4,
  [ActivityTier.ON_PLATFORM_CREATION]: 8,
  [ActivityTier.REAL_WORLD_ACTION]: 8,
  [ActivityTier.ON_PLATFORM_INNOVATION]: 16,
  [ActivityTier.NEVER_DONE_BEFORE]: 16,
};


export const VERIFICATION_STRENGTH: Record<VerificationMethod, number> = {
  [VerificationMethod.VIDEO]: 500,
  [VerificationMethod.AUDIO]: 300,
  [VerificationMethod.PHOTO]: 100,
  [VerificationMethod.ON_PLATFORM]: 500,
  [VerificationMethod.TEXT]: 0,
};


export const CPV_PRICING: Record<CPVTier, number> = {
  [CPVTier.STANDARD]: 0.08,
  [CPVTier.PREMIUM]: 0.12,
  [CPVTier.SUPER_PREMIUM]: 0.15,
};


export const SKIP_CREDIT_REWARDS: Record<AdType, number> = {
  [AdType.PRE_ROLL]: 1,
  [AdType.POST_ROLL]: 1,
  [AdType.REWARDED]: 3,
};


export const INNOVATION_BONUS = 1000;


export const PLATFORM_HEALTH_TARGETS = {
  real_shit_rate: 90, 
  creation_to_consumption_ratio: 0.5, 
  outside_activity_rate: 50, 
  ad_view_rate: 40, 
  harmful_content_rate: 0.05, 
  average_aqs: 500, 
};
