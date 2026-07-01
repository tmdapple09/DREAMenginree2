'use client';

import type {
    CreativeCandidate,
    OptimizeroResult,
    OptimizeroWeights,
    ScoredCandidate,
} from './creative-optimizero';
import { CreativeOptimizero, DEFAULT_WEIGHTS } from './creative-optimizero';





export interface BabylonUICandidate {
  id: string;
  type: 'mesh' | 'ui-panel' | 'widget' | 'particle-system' | 'effect';
  position: { x: number; y: number; z: number };
  rotation?: { x: number; y: number; z: number };
  scale?: { x: number; y: number; z: number };
  color?: { r: number; g: number; b: number; a?: number };
  animation?: {
    type: 'orbit' | 'pulse' | 'rotate' | 'float' | 'bounce' | 'fade';
    duration: number;
    easing?: string;
  };
  material?: {
    type: 'standard' | 'pbr' | 'holographic' | 'glass' | 'glow';
    properties: Record<string, unknown>;
  };
  interaction?: {
    clickable: boolean;
    hoverable: boolean;
    draggable: boolean;
    callback?: string;
  };
  metadata?: Record<string, unknown>;
}


export class BabylonOptimizeroScorers {
  
  static novelty(candidate: CreativeCandidate<BabylonUICandidate>): number {
    const element = candidate.data;
    let score = 0.5; 

    
    if (element.material?.type === 'holographic' || element.material?.type === 'glass') {
      score += 0.2;
    }

    
    if (element.animation?.type === 'orbit' || element.animation?.type === 'float') {
      score += 0.15;
    }

    
    const isOnGrid = Math.abs(element.position.x % 1) < 0.01 && Math.abs(element.position.z % 1) < 0.01;
    if (!isOnGrid) {
      score += 0.1;
    }

    
    if (element.type === 'particle-system') {
      score += 0.15;
    }

    return score;
  }

  
  static usefulness(candidate: CreativeCandidate<BabylonUICandidate>): number {
    const element = candidate.data;
    let score = 0.3; 

    
    if (element.interaction?.clickable) {
      score += 0.3;
    }
    if (element.interaction?.hoverable) {
      score += 0.1;
    }
    if (element.interaction?.draggable) {
      score += 0.2;
    }

    
    if (element.type === 'ui-panel' || element.type === 'widget') {
      score += 0.2;
    }

    
    if (element.interaction?.callback) {
      score += 0.1;
    }

    return score;
  }

  
  static delight(candidate: CreativeCandidate<BabylonUICandidate>): number {
    const element = candidate.data;
    let score = 0.4; 

    
    if (element.animation) {
      score += 0.2;
      
      if (element.animation.easing) {
        score += 0.05;
      }
    }

    
    if (element.color) {
      const { r, g, b } = element.color;
      const vibrancy = Math.max(r, g, b) - Math.min(r, g, b);
      score += vibrancy * 0.15;
    }

    
    if (element.material?.type === 'glow' || element.material?.type === 'holographic') {
      score += 0.15;
    }

    
    if (element.type === 'effect' || element.type === 'particle-system') {
      score += 0.1;
    }

    return score;
  }

  
  static fit(candidate: CreativeCandidate<BabylonUICandidate>): number {
    const element = candidate.data;
    let score = 0.5; 

    
    const { x, y, z } = element.position;
    const distance = Math.sqrt(x * x + y * y + z * z);
    if (distance > 100) {
      score -= 0.3; 
    } else if (distance > 50) {
      score -= 0.15;
    }

    
    if (element.scale) {
      const { x: sx, y: sy, z: sz } = element.scale;
      const avgScale = (sx + sy + sz) / 3;
      if (avgScale > 10 || avgScale < 0.1) {
        score -= 0.2; 
      }
    }

    
    if (candidate.metadata?.contextType === 'game-hub' && element.type === 'mesh') {
      score += 0.2;
    }
    if (candidate.metadata?.contextType === 'ui-overlay' && element.type === 'ui-panel') {
      score += 0.2;
    }

    return score;
  }

  
  static cost(candidate: CreativeCandidate<BabylonUICandidate>): number {
    const element = candidate.data;
    let cost = 0.1; 

    
    if (element.type === 'particle-system') {
      cost += 0.4;
    }

    
    if (element.material?.type === 'pbr' || element.material?.type === 'holographic') {
      cost += 0.2;
    }

    
    if (element.animation) {
      cost += 0.15;
    }

    
    if (element.color?.a !== undefined && element.color.a < 1) {
      cost += 0.1;
    }
    if (element.material?.type === 'glass') {
      cost += 0.15;
    }

    return cost;
  }

  
  static risk(candidate: CreativeCandidate<BabylonUICandidate>): number {
    const element = candidate.data;
    let risk = 0.1; 

    
    if (element.scale) {
      const { x, y, z } = element.scale;
      const maxScale = Math.max(x, y, z);
      if (maxScale > 5) {
        risk += 0.3;
      }
    }

    
    if (Math.abs(element.position.z) < 2 && element.position.y < 3) {
      risk += 0.2;
    }

    
    if (element.type === 'particle-system' && (element.metadata?.particleCount as number) > 1000) {
      risk += 0.3;
    }

    
    if (element.interaction?.draggable) {
      risk += 0.1;
    }

    return risk;
  }
}


export const BABYLON_HARD_CHECKS = [
  
  (candidate: CreativeCandidate<BabylonUICandidate>) => {
    const { x, y, z } = candidate.data.position;
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
      return 'invalid position (NaN detected)';
    }
    return null;
  },

  
  (candidate: CreativeCandidate<BabylonUICandidate>) => {
    const { x, y, z } = candidate.data.position;
    const distance = Math.sqrt(x * x + y * y + z * z);
    if (distance > 1000) {
      return 'position too far from origin (breaks rendering)';
    }
    return null;
  },

  
  (candidate: CreativeCandidate<BabylonUICandidate>) => {
    if (candidate.data.scale) {
      const { x, y, z } = candidate.data.scale;
      if (x <= 0 || y <= 0 || z <= 0 || isNaN(x) || isNaN(y) || isNaN(z)) {
        return 'invalid scale (must be positive)';
      }
    }
    return null;
  },

  
  (candidate: CreativeCandidate<BabylonUICandidate>) => {
    if (candidate.data.color) {
      const { r, g, b, a } = candidate.data.color;
      if (isNaN(r) || isNaN(g) || isNaN(b)) {
        return 'invalid color values';
      }
      if (a !== undefined && (isNaN(a) || a < 0 || a > 1)) {
        return 'invalid alpha value';
      }
    }
    return null;
  },

  
  (candidate: CreativeCandidate<BabylonUICandidate>) => {
    if (candidate.data.type === 'particle-system') {
      const count = (candidate.data.metadata?.['particleCount'] as number | undefined) || 0;
      if (count > 10000) {
        return 'particle count too high (breaks performance)';
      }
    }
    return null;
  },
];


export class BabylonUIOptimizero extends CreativeOptimizero<BabylonUICandidate> {
  constructor(weights: OptimizeroWeights = DEFAULT_WEIGHTS) {
    super(
      weights,
      {
        novelty: BabylonOptimizeroScorers.novelty,
        usefulness: BabylonOptimizeroScorers.usefulness,
        delight: BabylonOptimizeroScorers.delight,
        fit: BabylonOptimizeroScorers.fit,
        cost: BabylonOptimizeroScorers.cost,
        risk: BabylonOptimizeroScorers.risk,
      },
      BABYLON_HARD_CHECKS
    );
  }

  
  optimizeUILayout(
    candidates: BabylonUICandidate[],
    context?: Record<string, unknown>
  ): OptimizeroResult<BabylonUICandidate> {
    const wrappedCandidates: CreativeCandidate<BabylonUICandidate>[] = candidates.map(
      (data, index) => ({
        id: data.id || `candidate-${index}`,
        data,
        metadata: { ...data.metadata, ...context },
      })
    );

    return this.optimize(wrappedCandidates);
  }

  
  filterByPerformanceBudget(
    result: OptimizeroResult<BabylonUICandidate>,
    maxCost: number
  ): ScoredCandidate<BabylonUICandidate>[] {
    return result.ranked_candidates.filter((candidate) => candidate.cost <= maxCost);
  }

  
  groupByType(
    result: OptimizeroResult<BabylonUICandidate>
  ): Record<string, ScoredCandidate<BabylonUICandidate>[]> {
    const groups: Record<string, ScoredCandidate<BabylonUICandidate>[]> = {};

    for (const candidate of result.ranked_candidates) {
      const type = candidate.data.type;
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(candidate);
    }

    return groups;
  }
}


export class BabylonUIGenerator {
  
  static createGameOrb(
    id: string,
    position: { x: number; y: number; z: number },
    color: { r: number; g: number; b: number },
    gameId: string
  ): BabylonUICandidate {
    return {
      id,
      type: 'mesh',
      position,
      scale: { x: 1.1, y: 1.1, z: 1.1 },
      color,
      material: {
        type: 'standard',
        properties: {
          emissiveColor: { r: color.r * 0.3, g: color.g * 0.3, b: color.b * 0.3 },
        },
      },
      animation: {
        type: 'float',
        duration: 2000,
        easing: 'easeInOutSine',
      },
      interaction: {
        clickable: true,
        hoverable: true,
        draggable: false,
        callback: `selectGame:${gameId}`,
      },
      metadata: {
        gameId,
        contextType: 'game-hub',
      },
    };
  }

  
  static createUIPanel(
    id: string,
    position: { x: number; y: number; z: number },
    size: { width: number; height: number }
  ): BabylonUICandidate {
    return {
      id,
      type: 'ui-panel',
      position,
      scale: { x: size.width, y: size.height, z: 0.1 },
      color: { r: 0.1, g: 0.15, b: 0.25, a: 0.85 },
      material: {
        type: 'glass',
        properties: {
          transparency: 0.15,
          blur: 8,
        },
      },
      interaction: {
        clickable: false,
        hoverable: false,
        draggable: true,
      },
      metadata: {
        contextType: 'ui-overlay',
      },
    };
  }

  
  static createHolographicEffect(
    id: string,
    position: { x: number; y: number; z: number }
  ): BabylonUICandidate {
    return {
      id,
      type: 'effect',
      position,
      scale: { x: 2, y: 2, z: 2 },
      color: { r: 0.16, g: 0.54, b: 0.72, a: 0.7 },
      material: {
        type: 'holographic',
        properties: {
          fresnelPower: 2,
          scanlineSpeed: 0.5,
        },
      },
      animation: {
        type: 'rotate',
        duration: 4000,
        easing: 'linear',
      },
      interaction: {
        clickable: false,
        hoverable: false,
        draggable: false,
      },
      metadata: {
        contextType: 'decoration',
      },
    };
  }
}
