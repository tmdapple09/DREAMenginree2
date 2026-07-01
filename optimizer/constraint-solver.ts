import type {
    Constraint,
    ConstraintSolverOptions,
    OptimizationItem,
    RankedItem,
} from './types';



export class ConstraintSolver {
  private options: ConstraintSolverOptions;

  constructor(options: Partial<ConstraintSolverOptions> = {}) {
    this.options = {
      maxIterations: options.maxIterations ?? 1000,
      convergenceThreshold: options.convergenceThreshold ?? 0.001,
      timeoutMs: options.timeoutMs ?? 100,
    };
  }

  
  solve(
    items: OptimizationItem[],
    constraints: Constraint[],
    metadata?: Record<string, unknown>
  ): RankedItem<OptimizationItem>[] {
    const startTime = Date.now();

    
    const scoredItems = items.map((item) => {
      const score = this.calculateScore(item, constraints);
      return {
        item,
        score,
        rank: 0, 
        metadata: { ...item.metadata, ...metadata },
      };
    });

    
    scoredItems.sort((a, b) => b.score - a.score);

    
    scoredItems.forEach((item, index: number) => {
      item.rank = index + 1;
    });

    
    const elapsed = Date.now() - startTime;
    if (elapsed > this.options.timeoutMs) {
      console.warn(
        `Optimization exceeded timeout (${elapsed}ms > ${this.options.timeoutMs}ms)`
      );
    }

    return scoredItems;
  }

  
  private calculateScore(
    item: OptimizationItem,
    constraints: Constraint[]
  ): number {
    let totalScore = 0;
    let totalWeight = 0;

    for (const constraint of constraints) {
      const constraintValue = this.evaluateConstraint(item, constraint);
      const weight = this.getWeightMultiplier(constraint.priority) * constraint.weight;

      totalScore += constraintValue * weight;
      totalWeight += weight;
    }

    
    return totalWeight > 0 ? totalScore / totalWeight : 0;
  }

  
  private evaluateConstraint(
    item: OptimizationItem,
    constraint: Constraint
  ): number {
    
    if (constraint.value !== undefined) {
      return constraint.value;
    }

    
    const metadata = item.metadata || {};
    const value = metadata[constraint.name];

    if (typeof value === 'number') {
      
      return Math.max(0, Math.min(1, value));
    }

    if (typeof value === 'boolean') {
      return value ? 1 : 0;
    }

    
    return 0.5;
  }

  
  private getWeightMultiplier(priority: string): number {
    switch (priority) {
      case 'critical':
        return 2.0;
      case 'high':
        return 1.5;
      case 'medium':
        return 1.0;
      case 'low':
        return 0.5;
      default:
        return 1.0;
    }
  }

  
  checkConstraints(
    items: OptimizationItem[],
    constraints: Constraint[]
  ): boolean {
    for (const constraint of constraints) {
      if (constraint.priority === 'critical') {
        const allSatisfied = items.every((item) => {
          const score = this.evaluateConstraint(item, constraint);
          return score >= 0.5; 
        });

        if (!allSatisfied) {
          return false;
        }
      }
    }

    return true;
  }

  
  multiObjectiveOptimize(
    items: OptimizationItem[],
    objectives: Array<{
      name: string;
      constraints: Constraint[];
      weight: number;
    }>
  ): RankedItem<OptimizationItem>[] {
    
    const objectiveScores = objectives.map((objective) => {
      const rankedItems = this.solve(items, objective.constraints);
      return {
        name: objective.name,
        weight: objective.weight,
        scores: new Map(rankedItems.map((ri) => [ri.item.id, ri.score])),
      };
    });

    
    const combinedScores = items.map((item) => {
      let totalScore = 0;
      let totalWeight = 0;

      for (const objective of objectiveScores) {
        const score = objective.scores.get(item.id) ?? 0;
        totalScore += score * objective.weight;
        totalWeight += objective.weight;
      }

      return {
        item,
        score: totalWeight > 0 ? totalScore / totalWeight : 0,
        rank: 0,
        metadata: item.metadata,
      };
    });

    
    combinedScores.sort((a, b) => b.score - a.score);
    combinedScores.forEach((item, index: number) => {
      item.rank = index + 1;
    });

    return combinedScores;
  }
}
