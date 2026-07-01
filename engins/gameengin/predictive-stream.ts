

export interface BehaviorObservation {
  
  chunkId: string;
  
  heading: number;
  
  speed: number;
  
  t: number;
}

export interface PrefetchCandidate {
  chunkId: string;
  
  probability: number;
  
  estBytes: number;
}

export interface PrefetchPlan {
  fetch: PrefetchCandidate[];
  skip: PrefetchCandidate[];
  budgetUsedBytes: number;
}

export interface MLPrefetchConfig {
  
  budgetBytes?: number;
  
  minProbability?: number;
  
  meteredAware?: boolean;
}


export class MLPrefetchModel {
  private readonly budget: number;
  private readonly minProb: number;
  private readonly meteredAware: boolean;

  constructor(config: MLPrefetchConfig = {}) {
    this.budget = Math.max(0, config.budgetBytes ?? 8 * 1024 * 1024);
    this.minProb = Math.min(1, Math.max(0, config.minProbability ?? 0.15));
    this.meteredAware = config.meteredAware ?? true;
  }

  plan(candidates: PrefetchCandidate[], opts: { metered?: boolean } = {}): PrefetchPlan {
    const budget = this.meteredAware && opts.metered ? Math.floor(this.budget / 2) : this.budget;
    const eligible = candidates.filter((c) => c.probability >= this.minProb && c.estBytes > 0);
    eligible.sort((a, b) => (b.probability / b.estBytes) - (a.probability / a.estBytes));
    const fetch: PrefetchCandidate[] = [];
    const skip: PrefetchCandidate[] = [];
    let used = 0;
    for (const c of eligible) {
      if (used + c.estBytes <= budget) {
        fetch.push(c);
        used += c.estBytes;
      } else {
        skip.push(c);
      }
    }
    for (const c of candidates) {
      if (!eligible.includes(c)) skip.push(c);
    }
    return { fetch, skip, budgetUsedBytes: used };
  }
}

export interface BehaviorPrediction {
  chunkId: string;
  probability: number;
  
  predictedDwellMs: number;
}

interface ChunkLink {
  chunkId: string;
  
  heading: number;
  
  distance: number;
}


export class BehaviorAnticipator {
  private readonly transitions = new Map<string, Map<string, number>>();
  private readonly dwellMsByChunk = new Map<string, number>();
  private readonly links = new Map<string, ChunkLink[]>();
  private last: BehaviorObservation | null = null;

  
  registerLinks(chunkId: string, links: ChunkLink[]): void {
    this.links.set(chunkId, links);
  }

  observe(obs: BehaviorObservation): void {
    if (this.last && this.last.chunkId !== obs.chunkId) {
      const inner = this.transitions.get(this.last.chunkId) ?? new Map<string, number>();
      inner.set(obs.chunkId, (inner.get(obs.chunkId) ?? 0) + 1);
      this.transitions.set(this.last.chunkId, inner);
    }
    if (this.last && this.last.chunkId === obs.chunkId) {
      const dt = Math.max(0, obs.t - this.last.t);
      this.dwellMsByChunk.set(obs.chunkId, (this.dwellMsByChunk.get(obs.chunkId) ?? 0) + dt);
    }
    this.last = obs;
  }

  
  predict(currentChunk: string, currentHeading: number, k = 4): BehaviorPrediction[] {
    const inner = this.transitions.get(currentChunk);
    const scores = new Map<string, number>();

    if (inner) {
      let total = 0;
      for (const v of inner.values()) total += v;
      if (total > 0) {
        for (const [chunkId, count] of inner) {
          scores.set(chunkId, count / total);
        }
      }
    }

    const links = this.links.get(currentChunk) ?? [];
    for (const link of links) {
      const align = Math.cos(link.heading - currentHeading); 
      const directional = Math.max(0, align) / (1 + link.distance * 0.001);
      scores.set(link.chunkId, (scores.get(link.chunkId) ?? 0) + directional * 0.5);
    }

    const totalScore = Array.from(scores.values()).reduce((s, v: number) => s + v, 0);
    const sorted = Array.from(scores.entries())
      .map(([chunkId, raw]): BehaviorPrediction => ({
        chunkId,
        probability: totalScore > 0 ? raw / totalScore : 0,
        predictedDwellMs: this.dwellMsByChunk.get(chunkId) ?? 1000,
      }))
      .sort((a, b) => b.probability - a.probability)
      .slice(0, k);

    return sorted;
  }

  get observationCount(): number {
    let n = 0;
    for (const inner of this.transitions.values()) for (const v of inner.values()) n += v;
    return n;
  }
}
