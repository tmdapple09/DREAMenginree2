import { describe, expect, it } from 'vitest';

import {
  createLocalChannel,
  createRuntimeChannel,
} from '@/lib/runtime/runtimeChannel';

describe('runtimeChannel — LocalChannel (solo parity)', () => {
  it('delivers published events to all subscribers', async () => {
    const ch = createLocalChannel<{ kind: string; n: number }>('test:1');
    const seenA: number[] = [];
    const seenB: number[] = [];
    ch.subscribe((e) => seenA.push(e.n));
    ch.subscribe((e) => seenB.push(e.n));

    await ch.publish({ kind: 'tick', n: 1 });
    await ch.publish({ kind: 'tick', n: 2 });

    expect(seenA).toEqual([1, 2]);
    expect(seenB).toEqual([1, 2]);
  });

  it('stops delivering after unsubscribe', async () => {
    const ch = createLocalChannel<{ n: number }>('test:2');
    const seen: number[] = [];
    const off = ch.subscribe((e) => seen.push(e.n));
    await ch.publish({ n: 1 });
    off();
    await ch.publish({ n: 2 });
    expect(seen).toEqual([1]);
  });

  it('isolates a faulty listener so siblings still receive events', async () => {
    const ch = createLocalChannel<{ n: number }>('test:3');
    const seen: number[] = [];
    ch.subscribe(() => {
      throw new Error('boom');
    });
    ch.subscribe((e) => seen.push(e.n));
    await ch.publish({ n: 7 });
    expect(seen).toEqual([7]);
  });

  it('drops events after close', async () => {
    const ch = createLocalChannel<{ n: number }>('test:4');
    const seen: number[] = [];
    ch.subscribe((e) => seen.push(e.n));
    await ch.close();
    await ch.publish({ n: 1 });
    expect(seen).toEqual([]);
  });
});

describe('runtimeChannel — factory', () => {
  it('returns a LocalChannel for solo mode', async () => {
    const ch = await createRuntimeChannel('engin:demo:1', 'solo');
    expect(ch.kind).toBe('local');
    expect(ch.id).toBe('engin:demo:1');
    await ch.close();
  });
});

describe('runtimeChannel — replay transport abstraction', () => {
  it('replays published events for recovery and offline reconciliation', async () => {
    const ch = createLocalChannel<{ n: number }>('test:replay');
    await ch.publish({ n: 1 });
    await ch.publish({ n: 2 });
    expect(await ch.replay()).toEqual([{ n: 1 }, { n: 2 }]);
  });
});

describe('runtimeChannel — hardened replay transport', () => {
  it('bounds replay history and snapshots caller-owned event data', async () => {
    const ch = createLocalChannel<{ n: number; nested: { value: number } }>(
      'test:bounded-replay',
      { replayLimit: 1 },
    );
    const event = { n: 1, nested: { value: 1 } };
    await ch.publish(event);
    event.nested.value = 99;
    await ch.publish({ n: 2, nested: { value: 2 } });
    const replay = await ch.replay();
    expect(replay).toEqual([{ n: 2, nested: { value: 2 } }]);
    (replay[0] as { nested: { value: number } }).nested.value = 88;
    expect(await ch.replay()).toEqual([{ n: 2, nested: { value: 2 } }]);
  });
});

it('rejects lossy transport events and isolates replay from listener mutation', async () => {
  const ch = createLocalChannel<{ nested: { value: number }; callback?: () => void }>('test:strict-events');
  ch.subscribe((event) => { event.nested.value = 99; });
  await ch.publish({ nested: { value: 1 } });
  expect(await ch.replay()).toEqual([{ nested: { value: 1 } }]);
  await expect(ch.publish({ nested: { value: 1 }, callback: () => undefined })).rejects.toThrow('JSON-serializable');
});
