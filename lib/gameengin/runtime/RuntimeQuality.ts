export type GameEnginRuntimeQuality = 'low' | 'balanced' | 'high';

export interface GameEnginRuntimeQualityDecision {
  readonly quality: GameEnginRuntimeQuality;
  readonly reason: string;
}

export function decideRuntimeQuality(frameMs: number, webgpuReady: boolean): GameEnginRuntimeQualityDecision {
  if (!webgpuReady) return { quality: 'low', reason: 'webgpu-unavailable' };
  if (frameMs > 24) return { quality: 'balanced', reason: 'frame-pressure' };
  return { quality: 'high', reason: 'healthy-frame-budget' };
}

