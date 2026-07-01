

export interface CreativeCandidate<T = any> {
  id: string;
  data: T;
  metadata?: Record<string, unknown>;
}

export interface ScoredCandidate<T = any> extends CreativeCandidate<T> {
  novelty: number;
  usefulness: number;
  delight: number;
  fit: number;
  cost: number;
  risk: number;
  final_score: number;
  valid: boolean;
  rejection_reasons?: string[];
}

export interface OptimizeroWeights {
  w_novelty: number;
  w_usefulness: number;
  w_delight: number;
  w_fit: number;
  w_cost: number;
  w_risk: number;
}

export interface OptimizeroResult<T = any> {
  best_candidate: ScoredCandidate<T> | null;
  ranked_candidates: ScoredCandidate<T>[];
  rejected_candidates: ScoredCandidate<T>[];
  reasons_for_rejection: Record<string, string[]>;
  metadata: {
    total_candidates: number;
    valid_candidates: number;
    invalid_candidates: number;
    weights_used: OptimizeroWeights;
    timestamp: string;
  };
}

export type HardFailCheck<T = any> = (candidate: CreativeCandidate<T>) => string | null;
export type ScoreFunction<T = any> = (candidate: CreativeCandidate<T>) => number;


export const DEFAULT_WEIGHTS: OptimizeroWeights = {
  w_novelty: 0.30,
  w_usefulness: 0.25,
  w_delight: 0.20,
  w_fit: 0.15,
  w_cost: 0.05,
  w_risk: 0.05,
};


export const CHAOS_WEIGHTS: OptimizeroWeights = {
  w_novelty: 0.40,
  w_usefulness: 0.15,
  w_delight: 0.30,
  w_fit: 0.10,
  w_cost: 0.03,
  w_risk: 0.02,
};


export const STABLE_WEIGHTS: OptimizeroWeights = {
  w_novelty: 0.15,
  w_usefulness: 0.30,
  w_delight: 0.10,
  w_fit: 0.30,
  w_cost: 0.05,
  w_risk: 0.10,
};


export class CreativeOptimizero<T = any> {
  private weights: OptimizeroWeights;
  private hardChecks: HardFailCheck<T>[];
  private scorers: {
    novelty: ScoreFunction<T>;
    usefulness: ScoreFunction<T>;
    delight: ScoreFunction<T>;
    fit: ScoreFunction<T>;
    cost: ScoreFunction<T>;
    risk: ScoreFunction<T>;
  };

  constructor(
    weights: OptimizeroWeights = DEFAULT_WEIGHTS,
    scorers: {
      novelty: ScoreFunction<T>;
      usefulness: ScoreFunction<T>;
      delight: ScoreFunction<T>;
      fit: ScoreFunction<T>;
      cost: ScoreFunction<T>;
      risk: ScoreFunction<T>;
    },
    hardChecks: HardFailCheck<T>[] = []
  ) {
    this.weights = weights;
    this.scorers = scorers;
    this.hardChecks = hardChecks;
  }

  
  addHardCheck(check: HardFailCheck<T>): void {
    this.hardChecks.push(check);
  }

  
  updateWeights(weights: Partial<OptimizeroWeights>): void {
    this.weights = { ...this.weights, ...weights };
  }

  
  optimize(candidates: CreativeCandidate<T>[]): OptimizeroResult<T> {
    const scored: ScoredCandidate<T>[] = [];
    const rejected: ScoredCandidate<T>[] = [];
    const rejectionReasons: Record<string, string[]> = {};

    
    for (const candidate of candidates) {
      const scoredCandidate: ScoredCandidate<T> = {
        ...candidate,
        novelty: this.clampScore(this.scorers.novelty(candidate)),
        usefulness: this.clampScore(this.scorers.usefulness(candidate)),
        delight: this.clampScore(this.scorers.delight(candidate)),
        fit: this.clampScore(this.scorers.fit(candidate)),
        cost: this.clampScore(this.scorers.cost(candidate)),
        risk: this.clampScore(this.scorers.risk(candidate)),
        final_score: 0,
        valid: true,
        rejection_reasons: [],
      };

      
      const failures = this.runHardChecks(candidate);
      if (failures.length > 0) {
        scoredCandidate.valid = false;
        scoredCandidate.rejection_reasons = failures;
        rejected.push(scoredCandidate);
        rejectionReasons[candidate.id] = failures;
        continue;
      }

      
      scoredCandidate.final_score =
        this.weights.w_novelty * scoredCandidate.novelty +
        this.weights.w_usefulness * scoredCandidate.usefulness +
        this.weights.w_delight * scoredCandidate.delight +
        this.weights.w_fit * scoredCandidate.fit -
        this.weights.w_cost * scoredCandidate.cost -
        this.weights.w_risk * scoredCandidate.risk;

      scored.push(scoredCandidate);
    }

    
    scored.sort((a, b) => b.final_score - a.final_score);

    
    const best = scored.length > 0 ? scored[0] : null;

    return {
      best_candidate: best,
      ranked_candidates: scored,
      rejected_candidates: rejected,
      reasons_for_rejection: rejectionReasons,
      metadata: {
        total_candidates: candidates.length,
        valid_candidates: scored.length,
        invalid_candidates: rejected.length,
        weights_used: this.weights,
        timestamp: new Date().toISOString(),
      },
    };
  }

  
  private runHardChecks(candidate: CreativeCandidate<T>): string[] {
    const failures: string[] = [];
    for (const check of this.hardChecks) {
      const result = check(candidate);
      if (result) {
        failures.push(result);
      }
    }
    return failures;
  }

  
  private clampScore(score: number): number {
    return Math.max(0, Math.min(1, score));
  }

  
  getTopN(result: OptimizeroResult<T>, n: number): ScoredCandidate<T>[] {
    return result.ranked_candidates.slice(0, n);
  }

  
  areTopScoresClose(result: OptimizeroResult<T>, threshold: number = 0.05): boolean {
    if (result.ranked_candidates.length < 2) return false;
    const top = result.ranked_candidates[0];
    const second = result.ranked_candidates[1];
    return Math.abs(top.final_score - second.final_score) < threshold;
  }
}


export const STANDARD_UI_HARD_CHECKS: HardFailCheck[] = [
  
  (candidate) => {
    if (candidate.metadata?.hasInfiniteLoop) {
      return 'infinite loops detected';
    }
    return null;
  },

  
  (candidate) => {
    if (candidate.metadata?.hasTypeErrors) {
      return 'invalid TypeScript';
    }
    return null;
  },

  
  (candidate) => {
    if (candidate.metadata?.hasInvalidImports) {
      return 'invalid imports';
    }
    return null;
  },

  
  (candidate) => {
    if (candidate.metadata?.performanceDegradation && (candidate.metadata.performanceDegradation as number) > 0.5) {
      return 'severe performance regression';
    }
    return null;
  },

  
  (candidate) => {
    if (candidate.metadata?.breaksPrivacy) {
      return 'breaks privacy';
    }
    return null;
  },

  
  (candidate) => {
    if (candidate.metadata?.breaksNavigation) {
      return 'breaks navigation continuity';
    }
    return null;
  },

  
  (candidate) => {
    if (candidate.metadata?.isFakeAction) {
      return 'fake action';
    }
    return null;
  },
];


export function createUIOptimizero<T = any>(
  scorers: {
    novelty: ScoreFunction<T>;
    usefulness: ScoreFunction<T>;
    delight: ScoreFunction<T>;
    fit: ScoreFunction<T>;
    cost: ScoreFunction<T>;
    risk: ScoreFunction<T>;
  },
  weights: OptimizeroWeights = DEFAULT_WEIGHTS,
  additionalChecks: HardFailCheck<T>[] = []
): CreativeOptimizero<T> {
  return new CreativeOptimizero<T>(
    weights,
    scorers,
    [...STANDARD_UI_HARD_CHECKS, ...additionalChecks]
  );
}

