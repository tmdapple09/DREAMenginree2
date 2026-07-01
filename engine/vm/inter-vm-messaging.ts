

export type VMEvent =
  | { type: 'workload-submitted'; workloadId: string; region: 'top' | 'bottom'; timestamp: number }
  | { type: 'compute-complete';   workloadId: string; region: 'top' | 'bottom'; durationMs: number; timestamp: number }
  | { type: 'error';              workloadId?: string; region: 'top' | 'bottom'; error: string; timestamp: number }
  | { type: 'stats-update';       region: 'top' | 'bottom'; stats: Record<string, unknown>; timestamp: number }
  | { type: 'custom';             name: string; payload: unknown; timestamp: number };

const HEADER_BYTES = 8;
const SLOT_BYTES = 512;
const DEFAULT_SLOTS = 64;
const SLOT_META_BYTES = 4;
const BINARY_STRING_BYTES = 220;

const enum WireKind {
  Json = 0,
  WorkloadSubmitted = 1,
  ComputeComplete = 2,
  Error = 3,
}

const enum RegionCode {
  Top = 1,
  Bottom = 2,
}

function encodeRegion(region: 'top' | 'bottom'): RegionCode {
  return region === 'top' ? RegionCode.Top : RegionCode.Bottom;
}

function decodeRegion(region: number): 'top' | 'bottom' {
  return region === RegionCode.Top ? 'top' : 'bottom';
}

export class InterVMChannel {
  private readonly buf: SharedArrayBuffer | ArrayBuffer;
  private readonly view: DataView;
  private readonly producerIdx: Int32Array;
  private readonly consumerIdx: Int32Array;
  private readonly capacity: number;
  private readonly encoder = new TextEncoder();
  private readonly decoder = new TextDecoder();
  private readonly subscribers = new Set<(msg: VMEvent) => void>();
  private drainScheduled = false;

  constructor(capacity = DEFAULT_SLOTS) {
    this.capacity = capacity;
    const totalBytes = HEADER_BYTES + capacity * SLOT_BYTES;
    this.buf = typeof SharedArrayBuffer !== 'undefined' ? new SharedArrayBuffer(totalBytes) : new ArrayBuffer(totalBytes);
    this.view = new DataView(this.buf);
    this.producerIdx = new Int32Array(this.buf, 0, 1);
    this.consumerIdx = new Int32Array(this.buf, 4, 1);
  }

  send(msg: VMEvent): boolean {
    const prod = Atomics.load(this.producerIdx, 0);
    const cons = Atomics.load(this.consumerIdx, 0);
    const used = (prod - cons + this.capacity) % this.capacity;
    if (used >= this.capacity - 1) return false;

    const slot = prod % this.capacity;
    const offset = HEADER_BYTES + slot * SLOT_BYTES;
    if (!this.writeSlot(offset, msg)) return false;

    Atomics.store(this.producerIdx, 0, prod + 1);
    this.scheduleDrain();
    return true;
  }

  recv(): VMEvent | null {
    const prod = Atomics.load(this.producerIdx, 0);
    const cons = Atomics.load(this.consumerIdx, 0);
    if (prod === cons) return null;

    const slot = cons % this.capacity;
    const offset = HEADER_BYTES + slot * SLOT_BYTES;
    const len = this.view.getUint16(offset, true);
    const kind = this.view.getUint8(offset + 2);

    Atomics.store(this.consumerIdx, 0, cons + 1);
    if (len === 0 || len + SLOT_META_BYTES > SLOT_BYTES) return null;

    return this.readSlot(offset, kind, len);
  }

  subscribe(cb: (msg: VMEvent) => void): () => void {
    this.subscribers.add(cb);
    this.scheduleDrain();
    return () => {
      this.subscribers.delete(cb);
    };
  }

  destroy(): void {
    this.subscribers.clear();
    this.drainScheduled = false;
  }

  private writeSlot(offset: number, msg: VMEvent): boolean {
    const binary = this.tryWriteBinary(offset, msg);
    if (binary) return true;

    const encoded = this.encoder.encode(JSON.stringify(msg));
    if (encoded.length + SLOT_META_BYTES > SLOT_BYTES) {
      console.warn('[InterVMChannel] Message too large to enqueue:', encoded.length);
      return false;
    }
    this.view.setUint16(offset, encoded.length, true);
    this.view.setUint8(offset + 2, WireKind.Json);
    new Uint8Array(this.buf, offset + SLOT_META_BYTES, encoded.length).set(encoded);
    return true;
  }

  private tryWriteBinary(offset: number, msg: VMEvent): boolean {
    if (msg.type !== 'workload-submitted' && msg.type !== 'compute-complete' && msg.type !== 'error') return false;

    const primary = msg.type === 'error' ? (msg.workloadId ?? '') : msg.workloadId;
    const primaryBytes = this.encoder.encode(primary);
    const secondaryBytes = msg.type === 'error' ? this.encoder.encode(msg.error) : new Uint8Array(0);
    if (primaryBytes.length > BINARY_STRING_BYTES || secondaryBytes.length > BINARY_STRING_BYTES) return false;

    const len = 20 + primaryBytes.length + secondaryBytes.length;
    if (len + SLOT_META_BYTES > SLOT_BYTES) return false;

    const kind = msg.type === 'workload-submitted'
      ? WireKind.WorkloadSubmitted
      : msg.type === 'compute-complete'
        ? WireKind.ComputeComplete
        : WireKind.Error;

    this.view.setUint16(offset, len, true);
    this.view.setUint8(offset + 2, kind);
    this.view.setUint8(offset + 3, encodeRegion(msg.region));
    this.view.setFloat64(offset + 4, msg.timestamp, true);
    this.view.setFloat32(offset + 12, msg.type === 'compute-complete' ? msg.durationMs : 0, true);
    this.view.setUint16(offset + 16, primaryBytes.length, true);
    this.view.setUint16(offset + 18, secondaryBytes.length, true);
    const payload = new Uint8Array(this.buf, offset + 20, primaryBytes.length + secondaryBytes.length);
    payload.set(primaryBytes);
    payload.set(secondaryBytes, primaryBytes.length);
    return true;
  }

  private readSlot(offset: number, kind: number, len: number): VMEvent | null {
    if (kind === WireKind.Json) {
      try {
        const raw = new Uint8Array(this.buf, offset + SLOT_META_BYTES, len);
        return JSON.parse(this.decoder.decode(raw)) as VMEvent;
      } catch {
        return null;
      }
    }

    const region = decodeRegion(this.view.getUint8(offset + 3));
    const timestamp = this.view.getFloat64(offset + 4, true);
    const durationMs = this.view.getFloat32(offset + 12, true);
    const primaryLength = this.view.getUint16(offset + 16, true);
    const secondaryLength = this.view.getUint16(offset + 18, true);
    if (20 + primaryLength + secondaryLength !== len) return null;

    const payloadOffset = offset + 20;
    const primary = this.decoder.decode(new Uint8Array(this.buf, payloadOffset, primaryLength));
    const secondary = secondaryLength > 0
      ? this.decoder.decode(new Uint8Array(this.buf, payloadOffset + primaryLength, secondaryLength))
      : '';

    if (kind === WireKind.WorkloadSubmitted) return { type: 'workload-submitted', workloadId: primary, region, timestamp };
    if (kind === WireKind.ComputeComplete) return { type: 'compute-complete', workloadId: primary, region, durationMs, timestamp };
    if (kind === WireKind.Error) return { type: 'error', workloadId: primary || undefined, region, error: secondary, timestamp };
    return null;
  }

  private scheduleDrain(): void {
    if (this.drainScheduled || this.subscribers.size === 0) return;
    this.drainScheduled = true;
    queueMicrotask(() => {
      this.drainScheduled = false;
      this.drain();
    });
  }

  private drain(): void {
    let msg: VMEvent | null;
    while ((msg = this.recv()) !== null) {
      for (const cb of this.subscribers) {
        try { cb(msg); } catch {  }
      }
    }
  }
}
