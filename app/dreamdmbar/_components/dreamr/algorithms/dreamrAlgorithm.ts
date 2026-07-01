import {
    calculateRank,
    derivePostMassMeta,
    getPostMass,
} from '@/dreamr/runtime/torridityLedger';



export interface ScoredPost {
  id: string;
  content: string;
  media_url?: string | null;
  views_count?: number;
  likes_count?: number;
  comments_count?: number;
  created_at: string;
  source?: string;
  provider?: string;
  profiles: {
    handle: string;
    display_name: string | null;
    avatar_url: string | null;
  };
  
  dreamr_score?: number;
  
  torridity_rank?: number;
  
  originality_mass?: number;
  
  dreamr_signals?: DreamRSignals;
  
  view_velocity?: number;
  
  dominant_signal?: keyof DreamRSignals;
  
  dreamr_reason?: string;
}

export interface DreamRSignals {
  contentDepth:     number;  
  originalMedia:    number;  
  dreamenginMade:   number;  
  textRichness:     number;  
  freshness:        number;  
  trendImpact:      number;  
}

export const DREAMR_WEIGHTS: Record<keyof DreamRSignals, number> = {
  contentDepth:   0.22,
  originalMedia:  0.22,
  dreamenginMade: 0.18,
  textRichness:   0.15,
  freshness:      0.13,
  trendImpact:    0.10,
};


export function scoreContentDepth(content: string): number {
  const words = content.trim().split(/\s+/).filter((w) => w.length > 1).length;
  if (words === 0) return 0;
  
  const raw = Math.log(words + 1) / Math.log(300);
  return Math.min(1, raw);
}


export function scoreOriginalMedia(
  mediaUrl: string | null | undefined,
  source: string | undefined,
  provider: string | undefined,
): number {
  if (!mediaUrl) return 0;
  
  if (source === 'connector' || (provider && provider !== 'dreamengin')) return 0.5;
  return 1.0;
}


export function scoreDreamenginMade(
  source: string | undefined,
  provider: string | undefined,
  content: string,
): number {
  if (source === 'post' && (!provider || provider === 'dreamengin')) return 1.0;
  
  const toolMentions = /starmaker|dreamengin|gameengin|codecode|labengin|brandengin/i.test(content);
  if (toolMentions) return 0.6;
  return 0;
}


export function scoreTextRichness(content: string): number {
  if (!content.trim()) return 0;
  const tokens = content.trim().split(/\s+/);
  const realWords = tokens.filter((t) =>
    t.length >= 4 &&
    !t.startsWith('#') &&
    !t.startsWith('@') &&
    !/^\p{Emoji}+$/u.test(t)
  );
  if (tokens.length === 0) return 0;
  return Math.min(1, realWords.length / Math.max(1, tokens.length));
}


export function scoreFreshness(createdAt: string): number {
  const ageHours = (Date.now() - new Date(createdAt).getTime()) / 3_600_000;
  if (ageHours < 0) return 0.5;                      
  if (ageHours <= 2)   return 0.85 + 0.15 * (ageHours / 2);  
  if (ageHours <= 8)   return 1.0;                             
  
  const decay = Math.exp(-0.012 * (ageHours - 8));
  return Math.max(0.05, decay);
}


export function scoreTrendImpact(
  viewsCount: number | undefined,
  likesCount?: number | undefined,
  commentsCount?: number | undefined,
): number {
  const publicViews = viewsCount ?? 0;
  if (publicViews > 0) {
    return Math.min(1, Math.sqrt(publicViews) / Math.sqrt(500));
  }

  const fallbackEngagement = (likesCount ?? 0) + (commentsCount ?? 0);
  if (fallbackEngagement === 0) return 0;
  return Math.min(0.25, Math.sqrt(fallbackEngagement) / Math.sqrt(500));
}


export function computeViewVelocity(
  viewsCount: number | undefined,
  createdAt: string,
): number {
  const v = Math.max(0, viewsCount ?? 0);
  if (v === 0) return 0;
  const ageHours = (Date.now() - new Date(createdAt).getTime()) / 3_600_000;
  const safeAge = Math.max(0.25, ageHours); 
  return v / safeAge;
}


export function scoreViewVelocity(velocity: number): number {
  if (!Number.isFinite(velocity) || velocity <= 0) return 0;
  return Math.min(1, Math.sqrt(velocity) / Math.sqrt(50));
}


export function dominantSignal(signals: DreamRSignals): keyof DreamRSignals {
  let bestKey: keyof DreamRSignals = 'contentDepth';
  let bestVal = -Infinity;
  for (const k of Object.keys(DREAMR_WEIGHTS) as Array<keyof DreamRSignals>) {
    const c = (signals[k] ?? 0) * DREAMR_WEIGHTS[k];
    if (c > bestVal) {
      bestVal = c;
      bestKey = k;
    }
  }
  return bestKey;
}


export const DREAMR_REASONS: Record<keyof DreamRSignals, string> = {
  contentDepth:   'crafted writing',
  originalMedia:  'original media',
  dreamenginMade: 'made on DREAMengin',
  textRichness:   'genuine language',
  freshness:      'fresh post',
  trendImpact:    'gaining traction',
};

export function scoreDreamRPost(post: ScoredPost): {
  score: number;
  signals: DreamRSignals;
  torridityRank: number;
  originalityMass: number;
  viewVelocity: number;
  dominantSignal: keyof DreamRSignals;
  reason: string;
} {
  const massMeta = derivePostMassMeta(post);
  const torridityRank = calculateRank({
    humanViews: post.views_count ?? 0,
    metadata: massMeta,
  });
  const originalityMass = getPostMass(massMeta);
  const signals: DreamRSignals = {
    contentDepth:   scoreContentDepth(post.content ?? ''),
    originalMedia:  scoreOriginalMedia(post.media_url, post.source, post.provider),
    dreamenginMade: scoreDreamenginMade(post.source, post.provider, post.content ?? ''),
    textRichness:   scoreTextRichness(post.content ?? ''),
    freshness:      scoreFreshness(post.created_at),
    trendImpact:    scoreTrendImpact(post.views_count, post.likes_count, post.comments_count),
  };

  const baseScore = (Object.keys(signals) as Array<keyof DreamRSignals>).reduce(
    (sum, key) => sum + signals[key] * DREAMR_WEIGHTS[key],
    0,
  ) * 100;

  
  
  
  
  
  const viewVelocity   = computeViewVelocity(post.views_count, post.created_at);
  const velocityScore  = scoreViewVelocity(viewVelocity);
  const velocityBonus  = velocityScore * 2.5;

  const score = (baseScore * 0.8) + (torridityRank * 20) + velocityBonus;

  const dom    = dominantSignal(signals);
  const reason = DREAMR_REASONS[dom];

  return {
    score: Math.round(score * 10) / 10,
    signals,
    torridityRank,
    originalityMass: Math.round(originalityMass * 1000) / 1000,
    viewVelocity:    Math.round(viewVelocity * 100) / 100,
    dominantSignal:  dom,
    reason,
  };
}


export function rankFeed(posts: ScoredPost[]): ScoredPost[] {
  
  const scored = posts.map((p) => {
    const {
      score,
      signals,
      torridityRank,
      originalityMass,
      viewVelocity,
      dominantSignal: dom,
      reason,
    } = scoreDreamRPost(p);
    return {
      ...p,
      dreamr_score:    score,
      dreamr_signals:  signals,
      torridity_rank:  torridityRank,
      originality_mass: originalityMass,
      view_velocity:   viewVelocity,
      dominant_signal: dom,
      dreamr_reason:   reason,
    };
  });

  
  scored.sort((a, b) => (b.dreamr_score ?? 0) - (a.dreamr_score ?? 0));

  
  const final: ScoredPost[] = [];
  const recentHandles: string[] = [];

  for (const post of scored) {
    const handle = post.profiles?.handle ?? '';
    const repetitionCount = recentHandles.filter((h) => h === handle).length;
    
    if (repetitionCount > 0) {
      post.dreamr_score = (post.dreamr_score ?? 0) * (1 - 0.25 * repetitionCount);
    }
    final.push(post);
    recentHandles.push(handle);
    if (recentHandles.length > 2) recentHandles.shift();
  }

  
  final.sort((a, b) => (b.dreamr_score ?? 0) - (a.dreamr_score ?? 0));
  return final;
}
