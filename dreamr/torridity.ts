import { slog } from '@/engine/slog';



export const TORRIDITY_N  = 2.1;
export const TORRIDITY_DP = TORRIDITY_N - 2;          
export const TORRIDITY_LAMBDA = 1.71;
export const TORRIDITY_A0_PERCEPTION = 0.05;          


export function mu(x: number): number {
  if (x === 0) return 0;
  return x / Math.pow(1 + Math.pow(Math.abs(x), TORRIDITY_N), 1 / TORRIDITY_N);
}


export function contentMass(buildTime: number, uniqueAssets: number): number {
  return Math.log1p(buildTime * 0.5 + uniqueAssets * 2);
}


export function torridityRank(views: number, mass: number): number {
  if (mass <= 0) return 0;
  const x = views / (mass * TORRIDITY_A0_PERCEPTION);
  const mondFactor = mu(x);
  return slog(mondFactor * views);
}


export function torridityRankSpec(views: number, mass: number): number {
  if (mass <= 0) return 0;
  const v = Math.max(0, views);
  const V = (TORRIDITY_A0_PERCEPTION * Math.log1p(v + 1)) / 4;
  return mu(V * mass);
}


export function contentDecayFactor(ageHours: number): number {
  const age = Math.max(0, ageHours);
  return mu(age / 24);
}


export function decayedRank(views: number, mass: number, ageHours: number): number {
  if (mass <= 0) return 0;
  return torridityRankSpec(views, mass) * (1 - contentDecayFactor(ageHours));
}


export function throttledVisibility(
  mass: number,
  feedSlots: number,
  massThreshold = 1.0
): number {
  if (mass >= massThreshold) return feedSlots;
  return Math.max(1, Math.floor(feedSlots * 0.1));
}

export interface ContentItem {
  id: string;
  views: number;
  buildTime: number;
  uniqueAssets: number;
  
  ageHours?: number;
}

export interface RankedItem extends ContentItem {
  mass: number;
  rank: number;
  visibilityCap: number;
  
  decayFactor: number;
}


export function rankFeed(items: ContentItem[], feedSlots = 20): RankedItem[] {
  return items
    .map((item) => {
      const mass = contentMass(item.buildTime, item.uniqueAssets);
      const rank = torridityRank(item.views, mass);
      const visibilityCap = throttledVisibility(mass, feedSlots);
      const decayFactor = contentDecayFactor(item.ageHours ?? 0);
      return { ...item, mass, rank, visibilityCap, decayFactor };
    })
    .sort((a, b) => b.rank - a.rank);
}
