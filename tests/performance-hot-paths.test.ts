import { describe, expect, it, vi } from 'vitest';
import { InterVMChannel } from '../engine/vm/inter-vm-messaging';
import { createTelemetryClient } from '../engins/forgeengin/enginpipe/telemetry/client';
import { ChunkScheduler } from '../engins/gameengin/procgen';
import { EventualConsistencyBridge, WorldStateCRDT, type CRDTRecord } from '../engins/gameengin/world-crdt';

describe('InterVMChannel hot-path wire format', () => {
  it('delivers binary fixed events and JSON fallback custom payloads', async () => {
    const channel = new InterVMChannel();
    const received: unknown[] = [];
    channel.subscribe((message) => received.push(message));

    expect(channel.send({ type: 'workload-submitted', workloadId: 'w1', region: 'top', timestamp: 1 })).toBe(true);
    expect(channel.send({ type: 'compute-complete', workloadId: 'w2', region: 'bottom', durationMs: 12.5, timestamp: 2 })).toBe(true);
    expect(channel.send({ type: 'custom', name: 'ruleset:event', payload: { nested: ['kept'], ok: true }, timestamp: 3 })).toBe(true);

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(received).toEqual([
      { type: 'workload-submitted', workloadId: 'w1', region: 'top', timestamp: 1 },
      { type: 'compute-complete', workloadId: 'w2', region: 'bottom', durationMs: 12.5, timestamp: 2 },
      { type: 'custom', name: 'ruleset:event', payload: { nested: ['kept'], ok: true }, timestamp: 3 },
    ]);
  });
});

describe('telemetry batching lifecycle', () => {
  it('flushes queued events on dispose/lifecycle instead of losing the final batch', async () => {
    const insert = vi.fn().mockResolvedValue({ error: null });
    const client = createTelemetryClient({
      supabase: { from: vi.fn(() => ({ insert })) },
      maxBatchSize: 10,
      flushIntervalMs: 60_000,
      autoFlushOnLifecycle: false,
    });

    await client.record({ artifact_id: 'game-1', event_type: 'quality_metric', payload: { dt: 16 } });
    expect(client.pendingCount).toBe(1);

    client.dispose();
    await vi.waitFor(() => expect(insert).toHaveBeenCalledTimes(1));
    expect(insert).toHaveBeenCalledWith([
      { cartridge_id: 'game-1', event_type: 'quality_metric', payload: { dt: 16 } },
    ]);
  });
});

describe('ChunkScheduler heap semantics', () => {
  it('preserves priority, FIFO ties, and the original head-of-queue budget gate', async () => {
    const order: string[] = [];
    const scheduler = new ChunkScheduler({ budgetPerTickMs: 5, maxConcurrent: 3 });
    scheduler.enqueue({ id: 'low', priority: 1, estimatedCostMs: 1, run: async () => { order.push('low'); } });
    scheduler.enqueue({ id: 'high-a', priority: 5, estimatedCostMs: 2, run: async () => { order.push('high-a'); } });
    scheduler.enqueue({ id: 'high-b', priority: 5, estimatedCostMs: 2, run: async () => { order.push('high-b'); } });
    scheduler.enqueue({ id: 'too-expensive', priority: 10, estimatedCostMs: 6, run: async () => { order.push('too-expensive'); } });

    expect(await scheduler.tick()).toBe(0);
    expect(order).toEqual([]);

    const runnable = new ChunkScheduler({ budgetPerTickMs: 5, maxConcurrent: 3 });
    runnable.enqueue({ id: 'low', priority: 1, estimatedCostMs: 1, run: async () => { order.push('low'); } });
    runnable.enqueue({ id: 'high-a', priority: 5, estimatedCostMs: 2, run: async () => { order.push('high-a'); } });
    runnable.enqueue({ id: 'high-b', priority: 5, estimatedCostMs: 2, run: async () => { order.push('high-b'); } });

    expect(await runnable.tick()).toBe(3);
    await vi.waitFor(() => expect(order.slice(-3)).toEqual(['high-a', 'high-b', 'low']));
  });
});

describe('EventualConsistencyBridge requeue semantics', () => {
  it('keeps failed batches ahead of newer records when transport recovers', async () => {
    const crdt = new WorldStateCRDT<string>('replica-a');
    const sent: Array<Array<CRDTRecord<string>>> = [];
    let fail = true;
    const bridge = new EventualConsistencyBridge(crdt, {
      async send(records) {
        sent.push(records);
        if (fail) throw new Error('offline');
      },
      onReceive() { return () => {}; },
    }, { maxQueuedRecords: 10 });

    const first = crdt.put('a', 'first');
    const second = crdt.put('b', 'second');
    bridge.enqueue(first);
    bridge.enqueue(second);
    await bridge.flush();

    const third = crdt.put('c', 'third');
    bridge.enqueue(third);
    fail = false;
    await bridge.flush();

    expect(sent[1].map((record) => record.id)).toEqual(['a', 'b', 'c']);
  });
});
