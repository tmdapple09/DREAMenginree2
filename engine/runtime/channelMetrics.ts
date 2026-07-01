









const _state = new Map<string, _ChannelState>();







export interface ChannelMetrics {
  
  channel: string;
  
  emissionCount: number;
  
  errorCount: number;
  
  avgLatencyMs: number;
  
  lastActivityAt: number | null;
}

interface _ChannelState {
  emissionCount: number;
  errorCount: number;
  totalLatencyMs: number;
  latencySamples: number;
  lastActivityAt: number | null;
}



function _ensure(channel: string): _ChannelState {
  let s = _state.get(channel);
  if (!s) {
    s = { emissionCount: 0, errorCount: 0, totalLatencyMs: 0, latencySamples: 0, lastActivityAt: null };
    _state.set(channel, s);
  }
  return s;
}


export function recordEmission(channel: string, latencyMs?: number): void {
  const s = _ensure(channel);
  s.emissionCount++;
  s.lastActivityAt = Date.now();
  if (latencyMs !== undefined && isFinite(latencyMs) && latencyMs >= 0) {
    s.totalLatencyMs += latencyMs;
    s.latencySamples++;
  }
}


export function recordError(channel: string): void {
  const s = _ensure(channel);
  s.errorCount++;
  s.lastActivityAt = Date.now();
}


export function getChannelMetrics(channel: string): ChannelMetrics {
  const s = _state.get(channel);
  if (!s) {
    return { channel, emissionCount: 0, errorCount: 0, avgLatencyMs: 0, lastActivityAt: null };
  }
  return {
    channel,
    emissionCount: s.emissionCount,
    errorCount: s.errorCount,
    avgLatencyMs: s.latencySamples > 0 ? s.totalLatencyMs / s.latencySamples : 0,
    lastActivityAt: s.lastActivityAt,
  };
}


export function getAllChannelMetrics(): ChannelMetrics[] {
  return Array.from(_state.keys())
    .map(getChannelMetrics)
    .sort((a, b) => b.emissionCount - a.emissionCount);
}


export function resetChannelMetrics(): void {
  _state.clear();
}






