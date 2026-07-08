'use client';

import { invokeMadMaxiSnapshotTransfer } from '@/engine/runtime/madMaxiSnapshotBridge';
import { EventEmitter } from 'events';









const _IS2 = 1 / Math.SQRT2;

const _GATE_H: _Gate = [[_IS2,0],[_IS2,0],[_IS2,0],[-_IS2,0]];

const _RETURNS = [0.12, 0.09, 0.15], _SIGMA = [0.20, 0.15, 0.25];

const _CORR    = [[1, 0.3, 0.1], [0.3, 1, 0.2], [0.1, 0.2, 1]];

const MAX_QUANTUM_QUBITS = 3;

const VM_QUEUE_CAPACITY = 256;

const VM_MESSAGE_SIZE   = 1024;

const VM_QUEUE_HEADER_BYTES = 8;

const VM_QUEUE_BUF_SIZE = VM_QUEUE_HEADER_BYTES + VM_QUEUE_CAPACITY * VM_MESSAGE_SIZE; 

const ENTRY_WORDS = 4; 

const ENTRY_BYTES = ENTRY_WORDS * 4;

const PAYLOAD_PREFIX_BYTES = 4; 

const DEFAULT_ALLOC_START = 1 * 1024 * 1024; 

const DURABLE_BRIDGE_QUEUE_KEY = 'de:dual-runtime-bridge:durable-queue';

const POLL_INTERVAL_MS = 16; 

const BUS_WASM_URL = new URL('../bus.wasm', import.meta.url);


const MAX_DURABLE_QUEUE_SIZE = 200;


let _totalEmissions = 0;


const EVICT_EVERY_N = 50;







export type DualRuntimeChannel =
  | 'code'
  | 'game'
  | 'games'
  | 'music'
  | 'lab'
  | 'brand'
  | 'content'
  | 'create'
  | 'compute'
  | 'shared_dream';

export type VMRegion = 'top' | 'bottom';

export interface QuantumComputeResult {
  algorithm: string;
  ansatz: string;
  numQubits: number;
  probabilities: number[];
  topBitstring: string;
  topProbability: number;
  selectedAssets: boolean[];
  expectationValue: number;
  computedAt: number;
}

export interface VMWorkload {
  id: string;
  region: VMRegion;
  wasmBinary: BufferSource;
  channel: DualRuntimeChannel;
  priority: number;
}




type _C = [number, number];

type _Gate = [_C, _C, _C, _C];

type _SV = _C[];

type _Op = { kind: string; q?: number; ctrl?: number; tgt?: number; theta?: number };

export type ChannelEventKey<_C extends DualRuntimeChannel> = string;

export type ChannelEventPayload<_C extends DualRuntimeChannel, _K extends string> = Record<string, unknown>;

export type BridgeEventHandler<P = Record<string, unknown>> = (payload: P) => void;

export type UnsubscribeFn = () => void;

export interface PeerState {
  channel: string;
  subscriberCount: number;
  lastActivityAt: number | null;
}

export interface AnyBridgeEmission {
  channel: string;
  event: string;
  payload: Record<string, unknown>;
  emittedAt: number;
}


export type AckStatus = 'pending' | 'acked' | 'dropped';


export interface QueuedEmission extends AnyBridgeEmission {
  
  id: string;
  status: AckStatus;
  enqueuedAt: number;
  
  ackedAt?: number;
  
  ttlMs: number;
}

type WasmExports = {
  enqueue: (channel: number, event: number, ptr: number, len: number) => number;
  dequeue: (outPtr: number) => number;
  reset?: () => void;
  __heap_base?: WebAssembly.Global;
};



function _gateRx(t: number): _Gate { const c=Math.cos(t/2),s=Math.sin(t/2); return [[c,0],[0,-s],[0,-s],[c,0]]; }

function _gateRy(t: number): _Gate { const c=Math.cos(t/2),s=Math.sin(t/2); return [[c,0],[-s,0],[s,0],[c,0]]; }

function _gateRz(t: number): _Gate { const c=Math.cos(t/2),s=Math.sin(t/2); return [[c,-s],[0,0],[0,0],[c,s]]; }

function _groundState(n: number): _SV { const sv = Array.from({length: 1 << n}, (): _C => [0, 0]); sv[0] = [1, 0]; return sv as _SV; }

function _cmul([r1, i1]: _C, [r2, i2]: _C): _C { return [r1*r2-i1*i2, r1*i2+i1*r2]; }

function _cadd([r1, i1]: _C, [r2, i2]: _C): _C { return [r1+r2, i1+i2]; }

function _applyGate1(sv: _SV, n: number, q: number, u: _Gate): _SV {
  const next = sv.slice();
  const bit = 1 << (n - 1 - q);
  for (let i = 0; i < sv.length; i++) {
    if (i & bit) continue;
    const j = i | bit;
    const a = sv[i]!, b = sv[j]!;
    next[i] = _cadd(_cmul(u[0], a), _cmul(u[1], b));
    next[j] = _cadd(_cmul(u[2], a), _cmul(u[3], b));
  }
  return next;
}

function _applyCNOT(sv: _SV, n: number, ctrl: number, tgt: number): _SV {
  const next = sv.slice();
  const cBit = 1 << (n - 1 - ctrl), tBit = 1 << (n - 1 - tgt);
  for (let i = 0; i < sv.length; i++) {
    if ((i & cBit) !== 0 && (i & tBit) === 0) { const j = i | tBit; next[i] = sv[j]!; next[j] = sv[i]!; }
  }
  return next;
}

function _quboCost(bits: boolean[]): number {
  let c = 0;
  bits.forEach((b, i: number) => { if (b) c -= _RETURNS[i] ?? 0.1; });
  for (let i = 0; i < bits.length; i++)
    for (let j = i + 1; j < bits.length; j++)
      if (bits[i] && bits[j])
        c += 0.5 * (_SIGMA[i] ?? 0.2) * (_SIGMA[j] ?? 0.2) * ((_CORR[i] ?? [])[j] ?? 0.2);
  return c;
}

function _buildCircuit(n: number, algo: string, ansatz: string): _Op[] {
  const ops: _Op[] = [];
  if (algo === 'qaoa') {
    const g = Math.PI * 0.4, b = Math.PI * 0.35;
    for (let q = 0; q < n; q++) ops.push({ kind: 'H', q });
    for (let q = 0; q < n - 1; q++) ops.push({ kind: 'CX', ctrl: q, tgt: q + 1 });
    for (let q = 0; q < n; q++) ops.push({ kind: 'Rz', q, theta: g });
    for (let q = 0; q < n; q++) ops.push({ kind: 'Rx', q, theta: 2 * b });
    for (let q = 0; q < n - 1; q++) ops.push({ kind: 'CX', ctrl: q, tgt: q + 1 });
    for (let q = 0; q < n; q++) ops.push({ kind: 'Ry', q, theta: g / 2 });
  } else if (ansatz === 'efficient_su2') {
    const p = [0.9, 0.7, 1.1, 0.6, 0.8, 0.5, 1.2, 1.0, 0.7, 0.4, 0.8, 1.0];
    for (let q = 0; q < n; q++) ops.push({ kind: 'H', q });
    for (let q = 0; q < n; q++) ops.push({ kind: 'Ry', q, theta: p[q] ?? Math.PI / 4 });
    for (let q = 0; q < n; q++) ops.push({ kind: 'Rz', q, theta: p[q + n] ?? Math.PI / 4 });
    for (let q = 0; q < n - 1; q++) ops.push({ kind: 'CX', ctrl: q, tgt: q + 1 });
    for (let q = 0; q < n; q++) ops.push({ kind: 'Ry', q, theta: p[q + 2 * n] ?? Math.PI / 4 });
    for (let q = 0; q < n; q++) ops.push({ kind: 'Rz', q, theta: p[q + 3 * n] ?? Math.PI / 4 });
  } else {
    const t1 = [Math.PI / 3, Math.PI / 4, Math.PI / 5], t2 = [Math.PI / 6, Math.PI / 4, Math.PI / 3];
    for (let q = 0; q < n; q++) ops.push({ kind: 'H', q });
    for (let q = 0; q < n; q++) ops.push({ kind: 'Ry', q, theta: t1[q] ?? Math.PI / 4 });
    for (let q = 0; q < n - 1; q++) ops.push({ kind: 'CX', ctrl: q, tgt: q + 1 });
    for (let q = 0; q < n; q++) ops.push({ kind: 'Ry', q, theta: t2[q] ?? Math.PI / 4 });
  }
  return ops;
}

function _runCircuit(numQubits: number, algo: string, ansatz: string): QuantumComputeResult {
  numQubits = Math.max(1, Math.min(MAX_QUANTUM_QUBITS, Math.floor(Number.isFinite(numQubits) ? numQubits : MAX_QUANTUM_QUBITS)));
  let sv = _groundState(numQubits);
  for (const op of _buildCircuit(numQubits, algo, ansatz)) {
    if      (op.kind === 'H'  && op.q    != null)                    sv = _applyGate1(sv, numQubits, op.q, _GATE_H);
    else if (op.kind === 'Rx' && op.q    != null && op.theta != null) sv = _applyGate1(sv, numQubits, op.q, _gateRx(op.theta));
    else if (op.kind === 'Ry' && op.q    != null && op.theta != null) sv = _applyGate1(sv, numQubits, op.q, _gateRy(op.theta));
    else if (op.kind === 'Rz' && op.q    != null && op.theta != null) sv = _applyGate1(sv, numQubits, op.q, _gateRz(op.theta));
    else if (op.kind === 'CX' && op.ctrl != null && op.tgt   != null) sv = _applyCNOT(sv, numQubits, op.ctrl, op.tgt);
  }
  const ps = sv.map(([r, i]) => r * r + i * i);
  const topIdx = ps.reduce((best, v: number, i: number) => (v > ps[best] ? i : best), 0);
  const topBits = Array.from({ length: numQubits }, (_, k: number ) => Boolean((topIdx >> (numQubits - 1 - k)) & 1));
  const ev = ps.reduce((sum: number, prob, i: number) => {
    const bits = Array.from({ length: numQubits }, (_, k: number ) => Boolean((i >> (numQubits - 1 - k)) & 1));
    return sum + prob * _quboCost(bits);
  }, 0);
  return {
    algorithm: algo, ansatz, numQubits, probabilities: ps,
    topBitstring: topBits.map((b) => b ? '1' : '0').join(''),
    topProbability: ps[topIdx] ?? 0, selectedAssets: topBits,
    expectationValue: ev, computedAt: Date.now(),
  };
}

class DualRuntimeBridge extends EventEmitter {
  private readonly channelState: Map<string, unknown> = new Map();
  private readonly peers: Map<string, PeerState> = new Map();
  private readonly peerListeners: Set<(peers: readonly PeerState[]) => void> = new Set();
  private readonly emissionListeners: Set<(emission: AnyBridgeEmission) => void> = new Set();
  
  private readonly durableQueue: Map<string, QueuedEmission> = new Map();

  private memory: WebAssembly.Memory | null = null;
  private wasm: WasmExports | null = null;
  private busOnline = false;
  private allocPtr = DEFAULT_ALLOC_START;
  private entryPtr = 0;
  private entryView: Uint32Array | null = null;
  private pollHandle: ReturnType<typeof setInterval> | null = null;
  private isDraining = false;
  private readonly encoder = new TextEncoder();
  private readonly decoder = new TextDecoder();

  private _vmTop:    unknown = null;
  private _vmBottom: unknown = null;
  private _vmInterQueue: {
    buffer: SharedArrayBuffer;
    producerIndex: Int32Array;
    consumerIndex: Int32Array;
  } | null = null;
  private readonly _vmEventChannels = new Map<string, { buffer: SharedArrayBuffer; view: Int32Array }>();
  private readonly _vmActiveWorkloads = new Map<string, VMRegion>();

  constructor() {
    super();
    this.setMaxListeners(100);
    this.restoreDurableQueue();

    if (typeof window !== 'undefined') {
      void this.initWasm();
    }
    
    
    
    
    this.subscribe('lab', 'quantum:run', payload => {
      const algo      = (payload['algorithm']  as string) ?? 'vqe';
      const ansatz    = (payload['ansatz']     as string) ?? 'real_amplitudes';
      const numQubits = (payload['numQubits']  as number) ?? 3;
      const result    = _runCircuit(numQubits, algo, ansatz);
      this.emit('lab', 'quantum:result', result as unknown as any);
      
      if (this._vmInterQueue) {
        this._writeInterVMMessage(new TextEncoder().encode(JSON.stringify(result)));
      }
    });
  }


  private browserStorage(): Storage | null {
    if (typeof window === 'undefined') return null;

    try {
      return window.localStorage ?? null;
    } catch {
      return null;
    }
  }

  private restoreDurableQueue(): void {
    const storage = this.browserStorage();
    if (!storage) return;

    try {
      const raw = storage.getItem(DURABLE_BRIDGE_QUEUE_KEY);
      if (!raw) return;
      const entries = JSON.parse(raw) as QueuedEmission[];
      if (!Array.isArray(entries)) return;
      this.durableQueue.clear();
      for (const entry of entries) {
        if (!entry || typeof entry.id !== 'string') continue;
        this.durableQueue.set(entry.id, entry);
      }
      this._evictExpired();
    } catch {
      this.durableQueue.clear();
    }
  }

  private persistDurableQueue(): void {
    const storage = this.browserStorage();
    if (!storage) return;

    try {
      storage.setItem(DURABLE_BRIDGE_QUEUE_KEY, JSON.stringify(Array.from(this.durableQueue.values())));
    } catch {
      
    }
  }

  private async initWasm(): Promise<void> {
    if (typeof window === 'undefined') return;
    if (this.busOnline) return;
    try {
      const memory = new WebAssembly.Memory({
        initial: 8, 
        maximum: 64, 
        shared: true,
      });

      const wasmBinary = await this.loadWasmBinary();
      const imports = {
        env: {
          memory,
          
          abort: () => {},
        },
      };

      const { instance } = (await WebAssembly.instantiate(wasmBinary, imports)) as WebAssembly.WebAssemblyInstantiatedSource;

      this.memory = memory;
      this.wasm = instance.exports as unknown as WasmExports;
      this.busOnline = typeof this.wasm.enqueue === 'function' && typeof this.wasm.dequeue === 'function';

      if (!this.busOnline) {
        this.memory = null;
        this.wasm = null;
        return;
      }

      this.allocPtr = this.readHeapBase() ?? DEFAULT_ALLOC_START;
      this.entryPtr = this.allocate(ENTRY_BYTES);
      this.entryView = this.memory ? new Uint32Array(this.memory.buffer, this.entryPtr, ENTRY_WORDS) : null;

      this.startPolling();
    } catch (err: unknown) {
      console.warn('dualRuntimeBridge: WASM bus unavailable, falling back to in-memory queue', err);
      this.memory = null;
      this.wasm = null;
      this.busOnline = false;
    }
  }

  private readHeapBase(): number | null {
    if (!this.wasm) return null;
    const heapBase = this.wasm.__heap_base;
    if (heapBase && typeof heapBase.value === 'number') {
      return heapBase.value;
    }
    
    const maybeNumber = (heapBase as unknown) as number | undefined;
    return typeof maybeNumber === 'number' ? maybeNumber : null;
  }

  private async loadWasmBinary(): Promise<ArrayBuffer> {
    if (typeof window === 'undefined' || typeof window.fetch !== 'function') {
      throw new Error('dualRuntimeBridge: browser fetch unavailable for WASM bus');
    }

    const response = await window.fetch(BUS_WASM_URL);
    if (!response.ok) {
      throw new Error(`dualRuntimeBridge: failed to load WASM bus (${response.status})`);
    }

    return response.arrayBuffer();
  }

  private startPolling() {
    if (!this.busOnline || this.pollHandle) return;
    this.pollHandle = setInterval(() => {
      this.drainQueue();
    }, POLL_INTERVAL_MS);
  }

  private drainQueue() {
    if (!this.busOnline || !this.wasm || !this.entryView || this.isDraining) return;

    let drained = false;
    this.isDraining = true;

    try {
      while (this.wasm.dequeue(this.entryPtr)) {
        drained = true;
        const payloadPtr = this.entryView[1];
        const payloadLen = this.entryView[2];
        const envelope = this.readEnvelope(payloadPtr, payloadLen);
        if (!envelope) continue;

        this.dispatchLocal(envelope.channel, envelope.event, envelope.payload);
      }
    } finally {
      this.isDraining = false;
      if (drained) this.resetPayloadAllocator();
    }
  }

  private resetPayloadAllocator(): void {
    if (!this.entryPtr) return;
    this.allocPtr = (this.entryPtr + ENTRY_BYTES + 7) & ~7;
  }

  private readEnvelope(ptr: number, declaredLen: number): { channel: string; event: string; payload: Record<string, unknown> } | null {
    if (!this.memory) return null;
    const lenView = new Uint32Array(this.memory.buffer, ptr, 1);
    const storedLen = lenView[0];
    const byteLength = declaredLen || storedLen;
    if (byteLength <= 0) return null;

    const payloadBytes = new Uint8Array(this.memory.buffer, ptr + PAYLOAD_PREFIX_BYTES, byteLength);
    try {
      return JSON.parse(this.decoder.decode(payloadBytes));
    } catch {
      return null;
    }
  }

  private allocate(size: number): number {
    if (!this.memory) return 0;
    const aligned = (this.allocPtr + 7) & ~7;
    const next = aligned + size;
    const needed = next - this.memory.buffer.byteLength;
    if (needed > 0) {
      const pages = Math.ceil(needed / 65536);
      try {
        this.memory.grow(pages);
      } catch {
        return 0;
      }
    }
    this.allocPtr = next;
    return aligned;
  }

  private enqueueEnvelope(channel: string, event: string, payload: Record<string, unknown>): boolean {
    if (!this.busOnline || !this.wasm || !this.memory) {
      this.dispatchLocal(channel, event, payload);
      return true;
    }

    const envelope = { channel, event, payload };
    const encoded = this.encoder.encode(JSON.stringify(envelope));
    const totalSize = PAYLOAD_PREFIX_BYTES + encoded.length;
    const ptr = this.allocate(totalSize);
    if (ptr === 0) {
      this.dispatchLocal(channel, event, payload);
      return true;
    }

    const lenView = new Uint32Array(this.memory.buffer, ptr, 1);
    lenView[0] = encoded.length;
    new Uint8Array(this.memory.buffer).set(encoded, ptr + PAYLOAD_PREFIX_BYTES);

    const packedChannel = this.hash(channel);
    const packedEvent = this.hash(event);
    const ok = this.wasm.enqueue(packedChannel, packedEvent, ptr, encoded.length);

    if (!ok) {
      this.dispatchLocal(channel, event, payload);
      return false;
    }

    
    this.drainQueue();
    return true;
  }

  
  emit(channel: string, event: string, payload: Record<string, unknown>): boolean {
    return this.enqueueEnvelope(channel, event, payload);
  }

  
  emitToChannel(channel: string, data: unknown) {
    this.channelState.set(channel, data);
    super.emit(`channel:${channel}`, data);
    super.emit('global_update', { channel, data });
    this._touchPeer(channel);
  }

  getChannelState(channel: string) {
    return this.channelState.get(channel) ?? null;
  }

  
  subscribe(
    channel: string,
    event: string,
    handler: (payload: Record<string, unknown>) => void,
  ): UnsubscribeFn {
    const key = `${channel}:${event}`;
    this.on(key, handler as BridgeEventHandler);
    this._incrementPeerSubscribers(channel);
    return () => {
      this.off(key, handler as BridgeEventHandler);
      this._decrementPeerSubscribers(channel);
    };
  }

  
  subscribePeerActivity(callback: (peers: ReadonlyArray<PeerState>) => void): UnsubscribeFn {
    this.peerListeners.add(callback);
    callback(this.getPeers());
    return () => { this.peerListeners.delete(callback); };
  }

  
  getPeers(): ReadonlyArray<PeerState> {
    return Array.from(this.peers.values());
  }

  
  subscribeEventActivity(callback: (emission: AnyBridgeEmission) => void): UnsubscribeFn {
    this.emissionListeners.add(callback);
    return () => { this.emissionListeners.delete(callback); };
  }

  
  emitDurable(
    channel: string,
    event: string,
    payload: Record<string, unknown>,
    ttlMs = 60_000,
  ): string {
    const id = typeof crypto !== 'undefined' && (crypto as Crypto).randomUUID
      ? (crypto as Crypto).randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const now = Date.now();

    const queued: QueuedEmission = {
      id,
      channel,
      event,
      payload,
      emittedAt: now,
      enqueuedAt: now,
      status: 'pending',
      ttlMs,
    };

    this.durableQueue.set(id, queued);
    this.emit(channel, event, payload);
    this._evictExpired();
    this._trimQueue();
    this.persistDurableQueue();
    return id;
  }

  
  ack(id: string): void {
    const entry = this.durableQueue.get(id);
    if (!entry || entry.status !== 'pending') return;
    this.durableQueue.set(id, { ...entry, status: 'acked', ackedAt: Date.now() });
    this.persistDurableQueue();
  }

  
  drop(id: string): void {
    const entry = this.durableQueue.get(id);
    if (!entry || entry.status !== 'pending') return;
    this.durableQueue.set(id, { ...entry, status: 'dropped' });
    this.persistDurableQueue();
  }

  
  replayPending(channel?: string): void {
    this._evictExpired();
    for (const entry of this.durableQueue.values()) {
      if (entry.status !== 'pending') continue;
      if (channel !== undefined && entry.channel !== channel) continue;
      this.emit(entry.channel, entry.event, entry.payload);
    }
  }

  
  getDurableQueue(): readonly QueuedEmission[] {
    return Array.from(this.durableQueue.values());
  }

  
  getStats(): {
    totalEmissions: number;
    queueDepth: number;
    pendingCount: number;
    ackedCount: number;
    droppedCount: number;
    peerCount: number;
    subscriberCount: number;
  } {
    let pending = 0, acked = 0, dropped = 0;
    for (const e of this.durableQueue.values()) {
      if (e.status === 'pending') pending++;
      else if (e.status === 'acked') acked++;
      else dropped++;
    }
    const subscriberCount = Array.from(this.peers.values())
      .reduce((sum, p) => sum + p.subscriberCount, 0);
    return {
      totalEmissions: _totalEmissions,
      queueDepth: this.durableQueue.size,
      pendingCount: pending,
      ackedCount: acked,
      droppedCount: dropped,
      peerCount: this.peers.size,
      subscriberCount,
    };
  }

  
  hasSubscribers(channel: string): boolean {
    return (this.peers.get(channel)?.subscriberCount ?? 0) > 0;
  }

  
  async initVMs(config: { enableInterVMCommunication?: boolean } = {}): Promise<void> {
    if (this._vmTop && this._vmBottom) return;
    try {
      const { WasmGpuVM } = await import('@/engine/vm/wasmGpuVM');
      this._vmTop    = await WasmGpuVM.create({ id: 'vm-top' });
      this._vmBottom = await WasmGpuVM.create({ id: 'vm-bottom' });
      if (config.enableInterVMCommunication !== false) {
        const buffer = new SharedArrayBuffer(VM_QUEUE_BUF_SIZE);
        const producerIndex = new Int32Array(buffer, 0, 1);
        const consumerIndex = new Int32Array(buffer, 4, 1);
        Atomics.store(producerIndex, 0, 0);
        Atomics.store(consumerIndex, 0, 0);
        this._vmInterQueue = { buffer, producerIndex, consumerIndex };
      }
      
      this.subscribe('compute', 'vm:dispatch-workload', p => {
        void this._handleVMWorkload(p);
      });
      this.emit('compute', 'vm:initialized', {
        topVMId: 'vm-top', bottomVMId: 'vm-bottom',
        interVMEnabled: config.enableInterVMCommunication !== false,
        timestamp: Date.now(),
      });
    } catch (err: unknown) {
      console.warn('[DualRuntimeBridge] VM init failed (WebGPU unavailable?):', err);
    }
  }

  
  destroyVMs(): void {
    (this._vmTop    as { destroy?(): void } | null)?.destroy?.();
    (this._vmBottom as { destroy?(): void } | null)?.destroy?.();
    this._vmTop    = null;
    this._vmBottom = null;
    this._vmInterQueue = null;
    this._vmEventChannels.clear();
    this._vmActiveWorkloads.clear();
  }

  
  sendInterVMMessage(from: VMRegion, to: VMRegion, message: Uint8Array): boolean {
    if (!this._vmInterQueue) return false;
    const written = this._writeInterVMMessage(message);
    if (written) {
      this.emit('compute', 'vm:inter-vm-message', { from, to, size: message.byteLength, timestamp: Date.now() });
    }
    return written;
  }

  
  async submitVMWorkload(workload: VMWorkload): Promise<void> {
    const vm = workload.region === 'top' ? this._vmTop : this._vmBottom;
    if (!vm) throw new Error(`VM not initialized: ${workload.region}`);
    this._vmActiveWorkloads.set(workload.id, workload.region);
    await (vm as { loadWasm(b: BufferSource): Promise<void> }).loadWasm(workload.wasmBinary);
    this.emit(workload.channel, 'vm:workload-submitted', {
      workloadId: workload.id, region: workload.region, timestamp: Date.now(),
    });
  }

  
  getVMStats(): {
    top:    Record<string, unknown> | null;
    bottom: Record<string, unknown> | null;
    activeWorkloads: { id: string; region: VMRegion }[];
  } | null {
    if (!this._vmTop && !this._vmBottom) return null;
    return {
      top:    this._vmTop    ? (this._vmTop    as { getStats(): Record<string, unknown> }).getStats() : null,
      bottom: this._vmBottom ? (this._vmBottom as { getStats(): Record<string, unknown> }).getStats() : null,
      activeWorkloads: Array.from(this._vmActiveWorkloads.entries()).map(([id, region]) => ({ id, region })),
    };
  }

  
  clearAll(): void {
    this.removeAllListeners();
    this.channelState.clear();
    this.peers.clear();
    this.peerListeners.clear();
    this.emissionListeners.clear();
    this.durableQueue.clear();
    if (this.pollHandle) {
      clearInterval(this.pollHandle);
      this.pollHandle = null;
    }
    _totalEmissions = 0;
    if (this.wasm?.reset) this.wasm.reset();
    this.resetPayloadAllocator();
  }

  
  private _evictExpired(): void {
    const now = Date.now();
    let changed = false;
    for (const [id, entry] of this.durableQueue) {
      if (entry.status === 'pending' && now - entry.enqueuedAt > entry.ttlMs) {
        this.durableQueue.set(id, { ...entry, status: 'dropped' });
        changed = true;
      }
    }
    if (changed) this.persistDurableQueue();
  }

  
  private _trimQueue(): void {
    this._evictExpired();
    if (this.durableQueue.size <= MAX_DURABLE_QUEUE_SIZE) return;

    let changed = false;
    const entries = Array.from(this.durableQueue.entries())
      .sort(([, a], [, b]) => a.enqueuedAt - b.enqueuedAt);

    for (const [id, entry] of entries) {
      if (this.durableQueue.size <= MAX_DURABLE_QUEUE_SIZE) break;
      if (entry.status === 'acked' || entry.status === 'dropped') {
        this.durableQueue.delete(id);
        changed = true;
      }
    }

    if (changed) this.persistDurableQueue();
  }

  private _touchPeer(channel: string) {
    const existing = this.peers.get(channel);
    this.peers.set(channel, {
      channel,
      subscriberCount: existing?.subscriberCount ?? 0,
      lastActivityAt: Date.now(),
    });
    this._notifyPeerListeners();
  }

  private _incrementPeerSubscribers(channel: string) {
    const existing = this.peers.get(channel);
    this.peers.set(channel, {
      channel,
      subscriberCount: (existing?.subscriberCount ?? 0) + 1,
      lastActivityAt: existing?.lastActivityAt ?? null,
    });
    this._notifyPeerListeners();
  }

  private _decrementPeerSubscribers(channel: string) {
    const existing = this.peers.get(channel);
    if (!existing) return;
    this.peers.set(channel, {
      ...existing,
      subscriberCount: Math.max(0, existing.subscriberCount - 1),
    });
    this._notifyPeerListeners();
  }

  private _notifyPeerListeners() {
    const snapshot = this.getPeers();
    for (const listener of this.peerListeners) {
      listener(snapshot);
    }
  }

  private _notifyEmissionListeners(emission: AnyBridgeEmission) {
    for (const listener of this.emissionListeners) {
      listener(emission);
    }
  }

  private dispatchLocal(channel: string, event: string, payload: Record<string, unknown>): boolean {
    if (channel === 'module' && event === 'transfer') {
      const modulePayload = payload['module'] as { type?: unknown; id?: unknown } | undefined;
      const isGameCartridge = modulePayload?.type === 'game-cartridge';
      const id = String(modulePayload?.id ?? '');
      if (isGameCartridge && (id.includes('platformer') || id.includes('mad-maxi'))) {
        void invokeMadMaxiSnapshotTransfer();
      }
    }

    const key = `${channel}:${event}`;
    const ts = Date.now();
    this.channelState.set(channel, payload);
    const delivered = super.emit(key, payload);
    this._touchPeer(channel);
    this._notifyEmissionListeners({ channel, event, payload, emittedAt: ts });
    _totalEmissions++;
    if (_totalEmissions % EVICT_EVERY_N === 0) this._evictExpired();
    return delivered;
  }

  private hash(s: string): number {
    let h = 0;
    for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
    return h >>> 0;
  }

  
  private _writeInterVMMessage(message: Uint8Array): boolean {
    if (!this._vmInterQueue) return false;
    const { buffer, producerIndex, consumerIndex } = this._vmInterQueue;
    const prod = Atomics.load(producerIndex, 0);
    const cons = Atomics.load(consumerIndex, 0);
    if (prod - cons >= VM_QUEUE_CAPACITY) return false;
    const slot   = prod % VM_QUEUE_CAPACITY;
    const offset = VM_QUEUE_HEADER_BYTES + slot * VM_MESSAGE_SIZE;
    const view   = new Uint8Array(buffer, offset, VM_MESSAGE_SIZE);
    view.fill(0);
    view.set(message.subarray(0, VM_MESSAGE_SIZE));
    Atomics.add(producerIndex, 0, 1);
    Atomics.notify(consumerIndex, 0, 1);
    return true;
  }

  
  private async _handleVMWorkload(payload: Record<string, unknown>): Promise<void> {
    const { workloadId, region, wasmBinary, channel, priority } = payload as {
      workloadId: string; region: VMRegion; wasmBinary: ArrayBuffer;
      channel: DualRuntimeChannel; priority: number;
    };
    try {
      await this.submitVMWorkload({ id: workloadId, region, wasmBinary, channel, priority });
    } catch (err: unknown) {
      this.emit(channel, 'vm:error', { workloadId, error: String(err) });
    }
  }
}

export const enginBridge = new DualRuntimeBridge();


export const bridge = enginBridge;




