import { slog, TORRIDITY_LEDGER_CONFIG } from '@/dreamr/runtime/torridityLedger';




export interface TouchPoint {
  x: number;
  y: number;
  
  t: number;
}


export interface SwipePathScore {
  
  straightness: number;
  
  avgDevSlog: number;
  
  coarseShift: number;
  
  crossSim: number;
  
  entropy: number;
  
  velVar: number;
  
  jerk: number;
  
  botScore: number;
  
  isBot: boolean;
}


function perpendicularDeviations(points: TouchPoint[]): number[] {
  if (points.length < 3) return [];
  const p0 = points[0];
  const pn = points[points.length - 1];
  const dx = pn.x - p0.x;
  const dy = pn.y - p0.y;
  const lineLen = Math.sqrt(dx * dx + dy * dy);
  if (lineLen < 1e-9) return points.slice(1, -1).map(() => 0);

  return points.slice(1, -1).map((p) => {
    const vx = p.x - p0.x;
    const vy = p.y - p0.y;
    return Math.abs(dx * vy - dy * vx) / lineLen;
  });
}


function shannonEntropy(values: number[]): number {
  if (values.length === 0) return 0;
  const BINS = 10;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min;
  if (range < 1e-9) return 0;

  const counts = new Array<number>(BINS).fill(0);
  for (const v of values) {
    const bin = Math.min(BINS - 1, Math.floor(((v - min) / range) * BINS));
    counts[bin]++;
  }

  const n = values.length;
  let h = 0;
  for (const c of counts) {
    if (c > 0) {
      const p = c / n;
      h -= p * Math.log2(p);
    }
  }
  return h / Math.log2(BINS);
}


function coarseGrainShift(deviations: number[]): number {
  if (deviations.length < 2) return 0;
  const half = Math.floor(deviations.length / 2);
  const mean = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;
  return Math.abs(mean(deviations.slice(0, half)) - mean(deviations.slice(half)));
}


function crossSwipeSimilarity(
  currentPath: number[],
  storedPaths: number[][],
): number {
  if (storedPaths.length === 0 || currentPath.length === 0) return 0;

  const normalise = (path: number[]) => {
    const maxVal = Math.max(...path, 1e-9);
    return path.map((v) => v / maxVal);
  };

  const normCurrent = normalise(currentPath);
  let totalSim = 0;

  for (const stored of storedPaths) {
    const normStored = normalise(stored);
    const len = Math.min(normCurrent.length, normStored.length);
    if (len === 0) continue;

    let dot = 0;
    let magA = 0;
    let magB = 0;
    for (let k = 0; k < len; k++) {
      dot += normCurrent[k] * normStored[k];
      magA += normCurrent[k] * normCurrent[k];
      magB += normStored[k] * normStored[k];
    }
    totalSim += magA > 0 && magB > 0 ? dot / (Math.sqrt(magA) * Math.sqrt(magB)) : 0;
  }

  return totalSim / storedPaths.length;
}


function velocityFeatures(points: TouchPoint[]): { variance: number; jerk: number } {
  if (points.length < 2) return { variance: 0, jerk: 0 };

  const velocities: number[] = [];
  for (let i = 1; i < points.length; i++) {
    const dt = Math.max(points[i].t - points[i - 1].t, 1);
    const dx = points[i].x - points[i - 1].x;
    const dy = points[i].y - points[i - 1].y;
    velocities.push(Math.sqrt(dx * dx + dy * dy) / dt);
  }

  const mean = velocities.reduce((a, b) => a + b, 0) / velocities.length;
  const rawVariance =
    velocities.reduce((acc, v: number) => acc + (v - mean) ** 2, 0) / velocities.length;

  let jerkSum = 0;
  for (let i = 0; i < velocities.length - 1; i++) {
    const dt = Math.max(points[i + 2].t - points[i + 1].t, 1);
    jerkSum += Math.abs(velocities[i + 1] - velocities[i]) / dt;
  }
  const avgJerk = velocities.length > 1 ? jerkSum / (velocities.length - 1) : 0;

  return { variance: slog(rawVariance), jerk: slog(avgJerk) };
}


export function scoreSwipePath(
  points: TouchPoint[],
  recentPaths: number[][] = [],
): SwipePathScore {
  const { botScoreThreshold } = TORRIDITY_LEDGER_CONFIG;
  const deviations = perpendicularDeviations(points);
  const avgDev =
    deviations.length > 0
      ? deviations.reduce((a, b) => a + b, 0) / deviations.length
      : 0;

  
  const straightness = Math.max(0, 1 - avgDev / 1.5);

  
  const slogRef = slog(1.5); 
  const avgDevSlog = Math.max(0, 1 - slog(avgDev) / slogRef);

  
  const shift = coarseGrainShift(deviations);
  const coarseShift = Math.min(1, shift / 0.15);

  
  const sim = crossSwipeSimilarity(deviations, recentPaths);
  const crossSim = Math.min(1, Math.max(0, (sim - 0.85) / (TORRIDITY_LEDGER_CONFIG.crossSimThreshold - 0.85)));

  
  const ent = shannonEntropy(deviations);
  const entropy = Math.max(0, 1 - ent / 0.7);

  
  const { variance: slogVelVar, jerk: slogJerk } = velocityFeatures(points);
  const velVar = Math.max(0, 1 - Math.min(1, slogVelVar / 0.5));
  const jerk = Math.max(0, 1 - Math.min(1, slogJerk / 0.5));

  
  const botScore =
    0.15 * straightness +
    0.25 * avgDevSlog +
    0.10 * coarseShift +
    0.15 * crossSim +
    0.10 * entropy +
    0.15 * velVar +
    0.10 * jerk;

  return {
    straightness,
    avgDevSlog,
    coarseShift,
    crossSim,
    entropy,
    velVar,
    jerk,
    botScore,
    isBot: botScore >= botScoreThreshold,
  };
}


export function isSwipeBot(points: TouchPoint[], recentPaths: number[][] = []): boolean {
  return scoreSwipePath(points, recentPaths).isBot;
}

export interface InteractionSignal {
  userId: string;
  videoId: string;
  action: 'view' | 'like' | 'share' | 'comment';
  timestamp: number;
  sessionDurationMs?: number;
}


export function scoreBotLikelihood(signal: InteractionSignal): number {
  let score = 0;
  if (signal.sessionDurationMs !== undefined && signal.sessionDurationMs < 500) {
    score += 0.5;
  }
  if (signal.action === 'share' && (signal.sessionDurationMs ?? 0) < 1000) {
    score += 0.4;
  }
  return Math.min(score, 1);
}

export function isLikelyBot(signal: InteractionSignal, threshold = 0.7): boolean {
  return scoreBotLikelihood(signal) >= threshold;
}
