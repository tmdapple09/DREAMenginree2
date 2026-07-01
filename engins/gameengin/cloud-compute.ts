

export interface OffloadDecision {
  destination: 'local' | 'edge';
  reason: string;
  estimatedLatencyMs: number;
}

export interface OffloadCandidate {
  
  localCostMs: number;
  
  edgeRoundTripMs: number;
  
  realtime: boolean;
}

export interface RouterConfig {
  
  localBudgetMs?: number;
  
  maxEdgeLatencyMs?: number;
}


export class EdgeOffloadRouter {
  private readonly localBudget: number;
  private readonly maxEdgeLatency: number;
  private edgeAvailable = true;

  constructor(config: RouterConfig = {}) {
    this.localBudget = Math.max(1, config.localBudgetMs ?? 16);
    this.maxEdgeLatency = Math.max(10, config.maxEdgeLatencyMs ?? 80);
  }

  setEdgeAvailable(available: boolean): void { this.edgeAvailable = available; }

  decide(candidate: OffloadCandidate): OffloadDecision {
    if (!this.edgeAvailable) {
      return { destination: 'local', reason: 'edge_unavailable', estimatedLatencyMs: candidate.localCostMs };
    }
    if (candidate.edgeRoundTripMs > this.maxEdgeLatency) {
      return { destination: 'local', reason: 'edge_too_slow', estimatedLatencyMs: candidate.localCostMs };
    }
    if (candidate.realtime && candidate.edgeRoundTripMs > this.localBudget) {
      return { destination: 'local', reason: 'realtime_local_pref', estimatedLatencyMs: candidate.localCostMs };
    }
    if (candidate.localCostMs > this.localBudget && candidate.edgeRoundTripMs < candidate.localCostMs) {
      return { destination: 'edge', reason: 'local_over_budget', estimatedLatencyMs: candidate.edgeRoundTripMs };
    }
    return { destination: 'local', reason: 'within_budget', estimatedLatencyMs: candidate.localCostMs };
  }
}

export interface RemoteRenderConfig {
  
  bitrateKbps?: number;
  
  codec?: 'av1' | 'vp9' | 'h264';
}


export class RemoteRenderHandoff {
  private readonly bitrateKbps: number;
  private readonly codec: 'av1' | 'vp9' | 'h264';
  private active = false;
  private sentInputs = 0;
  private receivedFrames = 0;

  constructor(config: RemoteRenderConfig = {}) {
    this.bitrateKbps = Math.max(500, config.bitrateKbps ?? 8000);
    this.codec = config.codec ?? 'av1';
  }

  begin(): void { this.active = true; }
  end(): void   { this.active = false; }

  
  notifyFrame(): void { if (this.active) this.receivedFrames += 1; }

  
  notifyInput(): void { if (this.active) this.sentInputs += 1; }

  get isActive(): boolean { return this.active; }
  get framesReceived(): number { return this.receivedFrames; }
  get inputsSent(): number { return this.sentInputs; }
  get codecPreference(): 'av1' | 'vp9' | 'h264' { return this.codec; }
  get targetBitrateKbps(): number { return this.bitrateKbps; }
}

export interface VerificationResult {
  ok: boolean;
  rolled_back: boolean;
  reason?: string;
}


export class ResultVerifier {
  private snapshots = new Map<string, ArrayBuffer>();
  private rollbacks = 0;

  
  capture(id: string, snapshot: ArrayBuffer): void {
    this.snapshots.set(id, snapshot.slice(0));
  }

  
  verify(
    id: string,
    expectedChecksum: number,
    actualChecksum: number,
    apply: (snapshot: ArrayBuffer) => void,
  ): VerificationResult {
    if (expectedChecksum === actualChecksum) {
      this.snapshots.delete(id);
      return { ok: true, rolled_back: false };
    }
    const snap = this.snapshots.get(id);
    if (!snap) return { ok: false, rolled_back: false, reason: 'no_snapshot' };
    apply(snap);
    this.snapshots.delete(id);
    this.rollbacks += 1;
    return { ok: false, rolled_back: true, reason: 'checksum_mismatch' };
  }

  
  static checksum(bytes: Uint8Array): number {
    let h = 0x811c9dc5;
    for (let i = 0; i < bytes.length; i++) {
      h ^= bytes[i];
      h = Math.imul(h, 0x01000193) >>> 0;
    }
    return h >>> 0;
  }

  get pendingSnapshots(): number { return this.snapshots.size; }
  get rollbackCount(): number { return this.rollbacks; }
}
