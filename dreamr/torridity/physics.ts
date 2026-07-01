import { a0Perception, deltaP, n } from './constants';




export function mu(x: number): number {
  if (x === 0) return 0;
  const ax = Math.abs(x);
  return ax / Math.pow(1 + Math.pow(ax, n), 1 / n);
}


export function contentMass(buildTime: number, uniqueAssets: number): number {
  return Math.log1p(buildTime * 0.5 + uniqueAssets * 2);
}


export function torridityRank(views: number, mass: number): number {
  if (mass <= 0) return 0;
  const x      = views / (mass * a0Perception);
  const factor = mu(x);
  return Math.log1p(factor * views);
}


export function decayFactor(ageHours: number): number {
  return mu(ageHours / 24);
}


export function throttlingGate(
  mass:          number,
  feedSlots:     number,
  massThreshold = 1.0,
): number {
  if (mass >= massThreshold) return feedSlots;
  return Math.max(1, Math.floor(feedSlots * deltaP));
}

export interface ContentItem {
  id:           string;
  views:        number;
  buildTime:    number;   
  uniqueAssets: number;
  ageHours?:    number;
}

export interface RankedItem extends ContentItem {
  mass:          number;
  baseRank:      number;
  decayedRank:   number;
  visibilityCap: number;
}


export function rankFeed(items: ContentItem[], feedSlots = 20): RankedItem[] {
  return items
    .map((item) => {
      const mass        = contentMass(item.buildTime, item.uniqueAssets);
      const baseRank    = torridityRank(item.views, mass);
      const decay       = item.ageHours !== undefined ? decayFactor(item.ageHours) : 0;
      const decayedRank = baseRank * (1 - decay);
      const visibilityCap = throttlingGate(mass, feedSlots);
      return { ...item, mass, baseRank, decayedRank, visibilityCap };
    })
    .sort((a, b) => b.decayedRank - a.decayedRank);
}
