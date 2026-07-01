import type { LoopIteration, LoopStatus } from '@/engine/agents/idariLoop';



export type HealthStatus = 'healthy' | 'degraded' | 'critical';

export interface HealthDataPoint {
  status: HealthStatus;
  timestamp: number;
}

const MAX_TREND_WINDOW = 100;
const _trendBuffer: HealthDataPoint[] = [];


export function updateHealthTrend(status: HealthStatus): void {
  _trendBuffer.push({ status, timestamp: Date.now() });
  if (_trendBuffer.length > MAX_TREND_WINDOW) {
    _trendBuffer.shift();
  }
}


export function clearHealthTrend(): void {
  _trendBuffer.length = 0;
}

export type HealthTrend = 'improving' | 'stable' | 'degrading';


export function getHealthTrend(windowSize = 20): HealthTrend {
  const recent = _trendBuffer.slice(-Math.min(windowSize, _trendBuffer.length));
  if (recent.length < 4) return 'stable';

  const half = Math.floor(recent.length / 2);
  const firstHalf = recent.slice(0, half);
  const secondHalf = recent.slice(half);

  const unhealthyRate = (points: HealthDataPoint[]) =>
    points.filter((p) => p.status !== 'healthy').length / points.length;

  const firstRate = unhealthyRate(firstHalf);
  const secondRate = unhealthyRate(secondHalf);
  const delta = secondRate - firstRate;

  if (delta < -0.1) return 'improving';
  if (delta > 0.1) return 'degrading';
  return 'stable';
}


export function getHealthScore(iterations: readonly LoopIteration[]): number {
  if (iterations.length === 0) return 100; 
  const recent = iterations.slice(-20); 
  let weightedSum = 0;
  let totalWeight = 0;
  for (let i = 0; i < recent.length; i++) {
    const weight = i + 1; 
    const score = recent[i].status === 'resolved' ? 100 : recent[i].status === 'failed' ? 0 : 50;
    weightedSum += score * weight;
    totalWeight += weight;
  }
  return totalWeight > 0 ? Math.round(weightedSum / totalWeight) : 100;
}


export function getMTTR(iterations: readonly LoopIteration[]): number | null {
  const recoveryTimes: number[] = [];

  for (let i = 0; i < iterations.length - 1; i++) {
    const curr = iterations[i];
    const next = iterations[i + 1];
    if (curr.status === 'failed' && next.status === 'resolved') {
      const failedAt = new Date(curr.started_at).getTime();
      const resolvedAt = new Date(next.finished_at ?? next.started_at).getTime();
      if (resolvedAt > failedAt) {
        recoveryTimes.push(resolvedAt - failedAt);
      }
    }
  }

  if (recoveryTimes.length === 0) return null;
  return recoveryTimes.reduce((a, b) => a + b, 0) / recoveryTimes.length;
}

export interface HealthReport {
  generatedAt: string;
  iterationCount: number;
  resolvedCount: number;
  failedCount: number;
  successRate: number;
  healthScore: number;
  trend: HealthTrend;
  mttrMs: number | null;
  lastStatus: LoopStatus | null;
  topAnomalies: string[];
}


export function exportHealthReport(iterations: readonly LoopIteration[]): HealthReport {
  const resolved = iterations.filter((i: LoopIteration) => i.status === 'resolved').length;
  const failed = iterations.filter((i: LoopIteration) => i.status === 'failed').length;
  const lastStatus = iterations.length > 0 ? iterations[iterations.length - 1].status : null;

  
  const anomalyCounts = new Map<string, number>();
  for (const iter of iterations) {
    for (const anomaly of iter.correlation.anomalies) {
      anomalyCounts.set(anomaly.type, (anomalyCounts.get(anomaly.type) ?? 0) + 1);
    }
  }
  const topAnomalies = Array.from(anomalyCounts.entries())
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([type, count]) => `${type} (×${count})`);

  return {
    generatedAt: new Date().toISOString(),
    iterationCount: iterations.length,
    resolvedCount: resolved,
    failedCount: failed,
    successRate: iterations.length > 0 ? resolved / iterations.length : 0,
    healthScore: getHealthScore(iterations),
    trend: getHealthTrend(),
    mttrMs: getMTTR(iterations),
    lastStatus,
    topAnomalies,
  };
}
