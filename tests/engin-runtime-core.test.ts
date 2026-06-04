/**
 * tests/engin-runtime-core.test.ts
 *
 * Unit tests for the universal Engin Runtime Engine:
 *   - Base state creation and patching
 *   - Capability gating
 *   - Rule-set constraint enforcement
 *   - Transform application
 *   - Event bus emissions
 *   - Persistence adapter (MemoryAdapter)
 *   - EnginRuntime lifecycle
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  createBaseState,
  patchBaseState,
} from '@/lib/engin-runtime/EnginBaseState';
import {
  gateCapability,
  mergeCapabilities,
  DEFAULT_USER_CAPABILITIES,
  DENY_ALL,
} from '@/lib/engin-runtime/EnginCapabilities';
import {
  MemoryAdapter,
  LocalStorageAdapter,
  enginStorageKey,
} from '@/lib/engin-runtime/EnginIOAdapter';
import { createEnginEventBus } from '@/lib/engin-runtime/EnginEventBus';
import { EnginRuntime, createEnginRuntime } from '@/lib/engin-runtime';
import type {
  EnginRuleSetContract,
  EnginAction,
} from '@/lib/engin-runtime/EnginRuleSetContract';
import type { EnginBaseState } from '@/lib/engin-runtime/EnginBaseState';

// ─── Minimal stub rule-set for testing ───────────────────────────────────────

type CounterAction =
  | EnginAction<'counter:increment', { by: number }>
  | EnginAction<'counter:reset'>;

const counterRuleSet: EnginRuleSetContract<CounterAction> = {
  manifest: {
    id: 'test',
    name: 'TestEngin',
    version: '1.0.0',
    schema: {
      actionTypes: ['counter:increment', 'counter:reset'],
      domainVersion: 1,
      validateAction: (action) => {
        if (!action.type.startsWith('counter:')) {
          return { valid: false, reason: 'Counter action required.' };
        }
        return { valid: true };
      },
    },
    compatibility: {
      minRuntimeVersion: '1.0.0',
      requiredFeatures: [
        'lifecycle-hooks',
        'manifest-schema',
        'strict-intent-routing',
        'sync-transport',
        'state-snapshotting',
        'compatibility-negotiation',
      ],
    },
  },
  params: {
    enginId: 'test',
    name: 'TestEngin',
    layoutMode: 'standard',
    accentColor: '#ffffff',
  },
  requiredCapabilities: ['state:read', 'state:write'],
  constraints: [
    (_state, action) => {
      if (action.type === 'counter:increment') {
        const { by } = (
          action as EnginAction<'counter:increment', { by: number }>
        ).payload ?? { by: 0 };
        if (by < 0)
          return { valid: false, reason: 'Increment must be non-negative.' };
      }
      return { valid: true };
    },
  ],
  transform(state: EnginBaseState, action: CounterAction): EnginBaseState {
    switch (action.type) {
      case 'counter:increment': {
        const { by } = (
          action as EnginAction<'counter:increment', { by: number }>
        ).payload ?? { by: 0 };
        const prev = (state.domain.count as number | undefined) ?? 0;
        return patchBaseState(state, { domain: { count: prev + by } });
      }
      case 'counter:reset':
        return patchBaseState(state, { domain: { count: 0 } });
      default:
        return state;
    }
  },
  deriveState(state: EnginBaseState) {
    return {
      count: (state.domain.count as number | undefined) ?? 0,
      lifecycle: state.lifecycle,
    };
  },
};

// ─── EnginBaseState ───────────────────────────────────────────────────────────

describe('EnginBaseState', () => {
  it('createBaseState returns correct initial values', () => {
    const state = createBaseState('music');
    expect(state.enginId).toBe('music');
    expect(state.lifecycle).toBe('idle');
    expect(state.revision).toBe(0);
    expect(state.domain).toEqual({});
    expect(state.updatedAt).toBeTruthy();
  });

  it('patchBaseState increments revision', () => {
    const s0 = createBaseState('code');
    const s1 = patchBaseState(s0, { lifecycle: 'running' });
    expect(s1.revision).toBe(1);
    expect(s1.lifecycle).toBe('running');
    expect(s1.enginId).toBe('code');
  });

  it('patchBaseState merges domain', () => {
    const s0 = createBaseState('games');
    const s1 = patchBaseState(s0, { domain: { score: 100 } });
    const s2 = patchBaseState(s1, { domain: { level: 2 } });
    expect(s2.domain).toEqual({ score: 100, level: 2 });
  });

  it('patchBaseState does not mutate previous state', () => {
    const s0 = createBaseState('lab');
    const s1 = patchBaseState(s0, { domain: { x: 1 } });
    expect(s0.domain).toEqual({});
    expect(s1.domain).toEqual({ x: 1 });
  });
});

// ─── Capability gating ────────────────────────────────────────────────────────

describe('EnginCapabilities', () => {
  it('gateCapability: grants permitted capabilities', () => {
    const result = gateCapability(DEFAULT_USER_CAPABILITIES, 'state:read');
    expect(result.granted).toBe(true);
  });

  it('gateCapability: denies missing capabilities', () => {
    const result = gateCapability(
      DEFAULT_USER_CAPABILITIES,
      'persistence:remote',
    );
    expect(result.granted).toBe(false);
    expect(result.reason).toContain('persistence:remote');
  });

  it('gateCapability: DENY_ALL denies everything', () => {
    expect(gateCapability(DENY_ALL, 'state:read').granted).toBe(false);
    expect(gateCapability(DENY_ALL, 'session:start').granted).toBe(false);
  });

  it('mergeCapabilities: override overrides base', () => {
    const merged = mergeCapabilities(DENY_ALL, { 'state:read': true });
    expect(gateCapability(merged, 'state:read').granted).toBe(true);
    expect(gateCapability(merged, 'state:write').granted).toBe(false);
  });
});

// ─── EnginIOAdapter — MemoryAdapter ──────────────────────────────────────────

describe('MemoryAdapter', () => {
  let adapter: MemoryAdapter;

  beforeEach(() => {
    adapter = new MemoryAdapter();
  });

  it('save and load a value', async () => {
    await adapter.save('key1', { foo: 'bar' });
    const val = await adapter.load<{ foo: string }>('key1');
    expect(val).toEqual({ foo: 'bar' });
  });

  it('returns null for a missing key', async () => {
    const val = await adapter.load('nope');
    expect(val).toBeNull();
  });

  it('remove deletes the key and returns true', async () => {
    await adapter.save('k', 42);
    const removed = await adapter.remove('k');
    expect(removed).toBe(true);
    expect(await adapter.load('k')).toBeNull();
  });

  it('remove on non-existent key returns false', async () => {
    const removed = await adapter.remove('ghost');
    expect(removed).toBe(false);
  });
});

// ─── enginStorageKey helper ───────────────────────────────────────────────────

describe('enginStorageKey', () => {
  it('namespaces key correctly', () => {
    expect(enginStorageKey('games', 'domain-state')).toBe(
      'de:engin:games:domain-state',
    );
  });
});

// ─── Event bus ────────────────────────────────────────────────────────────────

describe('EnginEventBus', () => {
  it('emits and receives lifecycle events', () => {
    const bus = createEnginEventBus();
    const handler = vi.fn();
    bus.on('engin:started', handler);
    bus.emit('engin:started', { enginId: 'test' });
    expect(handler).toHaveBeenCalledWith({ enginId: 'test' });
  });

  it('off unsubscribes a handler', () => {
    const bus = createEnginEventBus();
    const handler = vi.fn();
    bus.on('engin:stopped', handler);
    bus.off('engin:stopped', handler);
    bus.emit('engin:stopped', { enginId: 'test' });
    expect(handler).not.toHaveBeenCalled();
  });

  it('destroy prevents further emissions', () => {
    const bus = createEnginEventBus();
    bus.destroy();
    expect(bus.destroyed).toBe(true);
    expect(() => bus.emit('engin:started', { enginId: 'test' })).toThrow();
  });
});

// ─── EnginRuntime ─────────────────────────────────────────────────────────────

describe('EnginRuntime', () => {
  let runtime: EnginRuntime<CounterAction>;

  beforeEach(() => {
    runtime = createEnginRuntime(counterRuleSet, {
      ioAdapter: new MemoryAdapter(),
      persistenceKey: 'state',
    });
  });

  it('initial state is idle with empty domain', () => {
    expect(runtime.state.lifecycle).toBe('idle');
    expect(runtime.state.domain).toEqual({});
  });

  it('getDerivedState returns count:0 by default', () => {
    const d = runtime.getDerivedState();
    expect(d.count).toBe(0);
  });

  it('dispatch increments counter', () => {
    runtime.dispatch({ type: 'counter:increment', payload: { by: 5 } });
    expect(runtime.getDerivedState().count).toBe(5);
  });

  it('dispatch applies multiple transforms correctly', () => {
    runtime.dispatch({ type: 'counter:increment', payload: { by: 3 } });
    runtime.dispatch({ type: 'counter:increment', payload: { by: 7 } });
    expect(runtime.getDerivedState().count).toBe(10);
    runtime.dispatch({ type: 'counter:reset' });
    expect(runtime.getDerivedState().count).toBe(0);
  });

  it('dispatch rejects action that fails constraint', () => {
    const result = runtime.dispatch({
      type: 'counter:increment',
      payload: { by: -1 },
    });
    expect(result).toBe(false);
    expect(runtime.getDerivedState().count).toBe(0);
  });

  it('dispatch returns true on success', () => {
    const ok = runtime.dispatch({
      type: 'counter:increment',
      payload: { by: 1 },
    });
    expect(ok).toBe(true);
  });

  it('bus emits engin:state on successful dispatch', () => {
    const handler = vi.fn();
    runtime.bus.on('engin:state', handler);
    runtime.dispatch({ type: 'counter:increment', payload: { by: 1 } });
    expect(handler).toHaveBeenCalled();
  });

  it('bus emits engin:error when constraint fails', () => {
    const handler = vi.fn();
    runtime.bus.on('engin:error', handler);
    runtime.dispatch({ type: 'counter:increment', payload: { by: -1 } });
    expect(handler).toHaveBeenCalled();
  });

  it('start transitions lifecycle to running', () => {
    runtime.start();
    expect(runtime.state.lifecycle).toBe('running');
  });

  it('pause + resume cycle works', () => {
    runtime.start();
    runtime.pause();
    expect(runtime.state.lifecycle).toBe('paused');
    runtime.resume();
    expect(runtime.state.lifecycle).toBe('running');
  });

  it('stop marks bus as destroyed', () => {
    runtime.start();
    runtime.stop();
    expect(runtime.bus.destroyed).toBe(true);
  });

  it('persist and restore round-trips domain state', async () => {
    runtime.dispatch({ type: 'counter:increment', payload: { by: 42 } });
    // Allow the async persist to settle
    await new Promise((r) => setTimeout(r, 10));

    // Create a new runtime with the same adapter (shared MemoryAdapter)
    const adapter = new MemoryAdapter();
    await adapter.save('state', runtime.state.domain);
    const runtime2 = createEnginRuntime(counterRuleSet, {
      ioAdapter: adapter,
      persistenceKey: 'state',
    });
    const restored = await runtime2.restore();
    expect(restored).toBe(true);
    expect(runtime2.getDerivedState().count).toBe(42);
  });

  it('capability gate: action with __capability key is checked', () => {
    const restrictedRuntime = createEnginRuntime(counterRuleSet, {
      ioAdapter: new MemoryAdapter(),
      capabilities: DENY_ALL,
    });
    const actionWithCap = {
      type: 'counter:increment',
      payload: { by: 1 },
      __capability: 'state:write',
    } as CounterAction & { __capability: string };
    const result = restrictedRuntime.dispatch(actionWithCap);
    expect(result).toBe(false);
  });
});
// ─── Universal envelope, authorization, lifecycle hooks, snapshots ───────────

describe('universal domain object contract', () => {
  it('creates an explicitly owned and visible domain envelope', async () => {
    const { createDomainObject, isDomainObject } =
      await import('@/lib/engin-runtime/EnginBaseState');
    const object = createDomainObject({
      id: 'asset-1',
      type: 'asset',
      ownerId: 'owner-1',
      runtimeId: 'dreamspace-1',
      visibility: 'shared',
      data: { src: '/tree.glb' },
      now: '2026-06-01T00:00:00.000Z',
    });
    expect(isDomainObject(object)).toBe(true);
    expect(object).toMatchObject({
      ownerId: 'owner-1',
      runtimeId: 'dreamspace-1',
      visibility: 'shared',
      version: 1,
    });
  });

  it('authorizes shared edits only with actor, runtime, scope, and collaboration grants', async () => {
    const { createDomainObject } =
      await import('@/lib/engin-runtime/EnginBaseState');
    const { authorizeDomainCapability } =
      await import('@/lib/engin-runtime/EnginCapabilities');
    const object = createDomainObject({
      id: 'asset-1',
      type: 'asset',
      ownerId: 'owner-1',
      runtimeId: 'dreamspace-1',
      visibility: 'shared',
      data: {},
    });
    const context = {
      actorId: 'editor-1',
      runtimeId: 'dreamspace-1',
      surfaceRuntimeIds: ['dreamspace-1'],
      collaboration: {
        active: true,
        participantIds: ['editor-1'],
        editorIds: ['editor-1'],
      },
    };
    expect(authorizeDomainCapability('write', object, context).granted).toBe(
      true,
    );
    expect(authorizeDomainCapability('publish', object, context).granted).toBe(
      false,
    );
    expect(
      authorizeDomainCapability('read', object, {
        ...context,
        surfaceRuntimeIds: [],
      }).granted,
    ).toBe(false);
  });
});

describe('EnginRuntime recovery hooks', () => {
  it('observes lifecycle changes and restores captured snapshots', () => {
    const runtime = createEnginRuntime(counterRuleSet, {
      ioAdapter: new MemoryAdapter(),
      persistenceKey: false,
    });
    const hook = vi.fn();
    runtime.onLifecycle(hook);
    runtime.start();
    runtime.dispatch({ type: 'counter:increment', payload: { by: 4 } });
    const snapshot = runtime.snapshot();
    runtime.dispatch({ type: 'counter:increment', payload: { by: 6 } });
    runtime.restoreSnapshot(snapshot);
    expect(runtime.getDerivedState().count).toBe(4);
    expect(hook.mock.calls[0]?.[0]).toBe('running');
    expect(hook.mock.calls[0]?.[1]).toMatchObject({ enginId: 'test' });
  });
});

describe('EnginRuntime contract hardening', () => {
  it('keeps helper-only timestamps out of the exact domain envelope', async () => {
    const { createDomainObject } =
      await import('@/lib/engin-runtime/EnginBaseState');
    const object = createDomainObject({
      id: 'asset-2',
      type: 'asset',
      ownerId: 'owner-1',
      runtimeId: 'dreamspace-1',
      visibility: 'local',
      data: {},
      now: '2026-06-01T00:00:00.000Z',
    });
    expect(object).not.toHaveProperty('now');
    expect(() =>
      createDomainObject({
        id: 'asset-3',
        type: 'asset',
        ownerId: 'owner-1',
        runtimeId: 'dreamspace-1',
        visibility: 'local',
        data: {},
        now: 'not-a-timestamp',
      }),
    ).toThrow('invalid domain object');
  });

  it('denies malformed authorization context instead of throwing during capability checks', async () => {
    const { createDomainObject } =
      await import('@/lib/engin-runtime/EnginBaseState');
    const { authorizeDomainCapability } =
      await import('@/lib/engin-runtime/EnginCapabilities');
    const object = createDomainObject({
      id: 'asset-malformed-context',
      type: 'asset',
      ownerId: 'owner-1',
      runtimeId: 'dreamspace-1',
      visibility: 'shared',
      data: {},
    });
    expect(
      authorizeDomainCapability('read', object, undefined as never),
    ).toEqual({ granted: false, reason: 'Authorization context is required.' });
    expect(
      authorizeDomainCapability('read', object, {
        actorId: 'viewer-1',
        runtimeId: 'dreamspace-1',
        surfaceRuntimeIds: ['dreamspace-1'],
        collaboration: undefined as never,
      }),
    ).toEqual({ granted: false, reason: 'Collaboration state is invalid.' });
  });

  it('does not infer admin access from ownership and keeps local objects in their runtime', async () => {
    const { createDomainObject } =
      await import('@/lib/engin-runtime/EnginBaseState');
    const { authorizeDomainCapability } =
      await import('@/lib/engin-runtime/EnginCapabilities');
    const object = createDomainObject({
      id: 'asset-4',
      type: 'asset',
      ownerId: 'owner-1',
      runtimeId: 'dreamspace-1',
      visibility: 'local',
      data: {},
    });
    const context = {
      actorId: 'owner-1',
      runtimeId: 'homedream',
      surfaceRuntimeIds: ['homedream', 'dreamspace-1'],
      collaboration: { active: false, participantIds: [], editorIds: [] },
    };
    expect(authorizeDomainCapability('read', object, context).granted).toBe(
      false,
    );
    expect(
      authorizeDomainCapability('admin', object, {
        ...context,
        runtimeId: 'dreamspace-1',
      }).granted,
    ).toBe(false);
  });

  it('isolates snapshots, validates restore input, publishes restore, and rejects invalid lifecycle transitions', () => {
    const runtime = createEnginRuntime(counterRuleSet, {
      ioAdapter: new MemoryAdapter(),
      persistenceKey: false,
    });
    runtime.dispatch({ type: 'counter:increment', payload: { by: 4 } });
    const snapshot = runtime.snapshot() as EnginBaseState;
    const stateEvents: Array<{ enginId: string; revision: number }> = [];
    runtime.bus.on('engin:state', (event) => stateEvents.push(event));
    (snapshot.domain as { count?: number }).count = 99;
    expect(runtime.getDerivedState().count).toBe(4);
    expect(() =>
      runtime.restoreSnapshot({ ...snapshot, revision: -1 }),
    ).toThrow('valid Engin base state');
    runtime.restoreSnapshot(runtime.snapshots[0] as EnginBaseState);
    expect(stateEvents).toHaveLength(1);
    expect(() => runtime.pause()).toThrow('idle -> paused');
  });
});

describe('ι-Engine manifest, schema, compatibility, and sync transport', () => {
  it('rejects actions that are not declared by the active ruleset manifest', () => {
    type UndeclaredCounterAction = CounterAction | EnginAction<'counter:teleport'>;
    const undeclaredRuleSet: EnginRuleSetContract<UndeclaredCounterAction> = {
      ...counterRuleSet,
      manifest: {
        ...counterRuleSet.manifest,
        schema: {
          ...counterRuleSet.manifest.schema,
          validateAction(action) {
            if (!action.type.startsWith('counter:')) {
              return { valid: false, reason: 'Counter action required.' };
            }
            return { valid: true };
          },
        },
      },
      constraints: [],
      transform(state, action) {
        if (action.type === 'counter:teleport') return state;
        return counterRuleSet.transform(state, action);
      },
    };
    const runtime = createEnginRuntime(undeclaredRuleSet, {
      ioAdapter: new MemoryAdapter(),
      persistenceKey: false,
    });
    const handler = vi.fn();
    runtime.bus.on('engin:error', handler);
    const result = runtime.dispatch({ type: 'counter:teleport' });
    expect(result).toBe(false);
    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({
        message: expect.stringContaining('not allowed'),
      }),
    );
  });

  it('negotiates compatibility before constructing a runtime', () => {
    const incompatibleRuleSet: EnginRuleSetContract<CounterAction> = {
      ...counterRuleSet,
      manifest: {
        ...counterRuleSet.manifest,
        compatibility: {
          minRuntimeVersion: '99.0.0',
          requiredFeatures: ['compatibility-negotiation'],
        },
      },
    };
    expect(() =>
      createEnginRuntime(incompatibleRuleSet, {
        ioAdapter: new MemoryAdapter(),
        persistenceKey: false,
      }),
    ).toThrow('older than required');
  });

  it('publishes schema-versioned sync frames through an injected transport', async () => {
    const { MemorySyncTransport } = await import('@/lib/engin-runtime');
    const transport = new MemorySyncTransport();
    const frames: Array<{
      enginId: string;
      runtimeId: string;
      direction: string;
      schemaVersion: number;
      fingerprint: string;
      quality: { runtimeTier: string; material: string };
    }> = [];
    transport.subscribe('test', (frame) => frames.push(frame));
    const runtime = createEnginRuntime(counterRuleSet, {
      ioAdapter: new MemoryAdapter(),
      persistenceKey: false,
      syncTransport: transport,
      runtimeId: 'homedream',
    });
    runtime.dispatch({ type: 'counter:increment', payload: { by: 2 } });
    expect(frames).toHaveLength(1);
    const publishedFrame = frames[0];
    expect(publishedFrame.enginId).toBe('test');
    expect(publishedFrame.runtimeId).toBe('homedream');
    expect(publishedFrame.direction).toBe('receive');
    expect(typeof publishedFrame.fingerprint).toBe('string');
    expect(publishedFrame.fingerprint.length).toBeGreaterThan(0);
    expect(publishedFrame.quality.runtimeTier).toBe('premium');
    expect(publishedFrame.quality.material).toBe('glass-chrome-glow');
    expect(publishedFrame.schemaVersion).toBe(1);
  });

  it('rejects domain object envelopes with extra top-level keys', async () => {
    const { isDomainObject } = await import('@/lib/engin-runtime');
    expect(
      isDomainObject({
        id: 'asset-extra',
        type: 'asset',
        ownerId: 'owner-1',
        runtimeId: 'homedream',
        visibility: 'local',
        createdAt: '2026-06-01T00:00:00.000Z',
        updatedAt: '2026-06-01T00:00:00.000Z',
        version: 1,
        data: {},
        placementOwner: 'ui-only',
      }),
    ).toBe(false);
  });

  it('applies valid cross-runtime sync snapshots through the runtime subscriber', async () => {
    const { MemorySyncTransport } = await import('@/lib/engin-runtime');
    const transport = new MemorySyncTransport();
    const sender = createEnginRuntime(counterRuleSet, {
      ioAdapter: new MemoryAdapter(),
      persistenceKey: false,
      syncTransport: transport,
      runtimeId: 'homedream',
    });
    const receiver = createEnginRuntime(counterRuleSet, {
      ioAdapter: new MemoryAdapter(),
      persistenceKey: false,
      syncTransport: transport,
      runtimeId: 'dreamspace',
    });
    const received: Readonly<EnginBaseState>[] = [];
    receiver.subscribeSync((snapshot) => received.push(snapshot));
    sender.dispatch({ type: 'counter:increment', payload: { by: 7 } });
    expect(received).toHaveLength(1);
    expect(receiver.getDerivedState().count).toBe(7);
  });

  it('matches the AssemblyScript FNV-1a fingerprint algorithm in TypeScript', async () => {
    const { hashBytesFNV1A } = await import('@/lib/engin-runtime');
    const bytes = new TextEncoder().encode('dreamengin');
    expect(hashBytesFNV1A(bytes).toString(16)).toBe('2b467b17');
  });


  it('describes premium runtime quality for synced snapshots', async () => {
    const { createPremiumRuntimeQuality, fingerprintEnginSnapshot } =
      await import('@/lib/engin-runtime');
    const state = createBaseState('premium-test');
    const fingerprint = fingerprintEnginSnapshot(state);
    const quality = createPremiumRuntimeQuality({
      state,
      snapshotCount: 3,
      manifestVersion: '1.0.0',
      fingerprint,
      features: ['sync-transport', 'state-snapshotting'],
    });
    expect(quality).toMatchObject({
      engineTier: 'premium',
      runtimeTier: 'premium',
      surfaceTier: 'premium',
      frameBudgetMs: 16,
      material: 'glass-chrome-glow',
    });
  });

  it('stable snapshot strings and fingerprints ignore object key insertion order', async () => {
    const { stableStringifySnapshot, fingerprintEnginSnapshot } = await import('@/lib/engin-runtime');
    const left: EnginBaseState = {
      enginId: 'test',
      lifecycle: 'running',
      updatedAt: '2026-06-01T00:00:00.000Z',
      revision: 4,
      domain: { b: 2, a: { y: 2, x: 1 } },
    };
    const right: EnginBaseState = {
      enginId: 'test',
      lifecycle: 'running',
      updatedAt: '2026-06-01T00:00:00.000Z',
      revision: 4,
      domain: { a: { x: 1, y: 2 }, b: 2 },
    };
    expect(stableStringifySnapshot(left)).toBe(stableStringifySnapshot(right));
    expect(fingerprintEnginSnapshot(left)).toBe(fingerprintEnginSnapshot(right));
  });

  it('rejects cross-runtime sync frames with mismatched fingerprints', async () => {
    const { MemorySyncTransport, createPremiumRuntimeQuality } = await import('@/lib/engin-runtime');
    const transport = new MemorySyncTransport();
    const receiver = createEnginRuntime(counterRuleSet, {
      ioAdapter: new MemoryAdapter(),
      persistenceKey: false,
      syncTransport: transport,
      runtimeId: 'dreamspace',
    });
    const received: Readonly<EnginBaseState>[] = [];
    receiver.subscribeSync((snapshot) => received.push(snapshot));
    const snapshot = patchBaseState(createBaseState('test'), { domain: { count: 11 } });
    await transport.publish({
      id: 'bad-fingerprint',
      enginId: 'test',
      runtimeId: 'homedream',
      direction: 'publish',
      schemaVersion: 1,
      fingerprint: '00000000',
      quality: createPremiumRuntimeQuality({
        state: snapshot,
        snapshotCount: 1,
        manifestVersion: '1.0.0',
        fingerprint: '00000000',
        features: ['lifecycle-hooks', 'manifest-schema', 'strict-intent-routing', 'sync-transport', 'state-snapshotting', 'compatibility-negotiation'],
      }),
      snapshot,
      createdAt: '2026-06-01T00:00:00.000Z',
    });
    expect(received).toHaveLength(0);
    expect(receiver.getDerivedState().count).toBe(0);
  });

  it('rejects cross-runtime sync frames with impossible premium quality metadata', async () => {
    const { MemorySyncTransport, createPremiumRuntimeQuality, fingerprintEnginSnapshot } = await import('@/lib/engin-runtime');
    const transport = new MemorySyncTransport();
    const receiver = createEnginRuntime(counterRuleSet, {
      ioAdapter: new MemoryAdapter(),
      persistenceKey: false,
      syncTransport: transport,
      runtimeId: 'dreamspace',
    });
    const received: Readonly<EnginBaseState>[] = [];
    receiver.subscribeSync((snapshot) => received.push(snapshot));
    const snapshot = patchBaseState(createBaseState('test'), { domain: { count: 12 } });
    const fingerprint = fingerprintEnginSnapshot(snapshot);
    const quality = createPremiumRuntimeQuality({
      state: snapshot,
      snapshotCount: 1,
      manifestVersion: '1.0.0',
      fingerprint,
      features: ['lifecycle-hooks', 'manifest-schema', 'strict-intent-routing', 'sync-transport', 'state-snapshotting', 'compatibility-negotiation'],
    });
    await transport.publish({
      id: 'bad-quality',
      enginId: 'test',
      runtimeId: 'homedream',
      direction: 'publish',
      schemaVersion: 1,
      fingerprint,
      quality: { ...quality, frameBudgetMs: 999, fingerprint: 'ffffffff' },
      snapshot,
      createdAt: '2026-06-01T00:00:00.000Z',
    });
    expect(received).toHaveLength(0);
    expect(receiver.getDerivedState().count).toBe(0);
  });

  it('rejects non-JSON runtime state shapes instead of silently accepting class/function values', async () => {
    const { isJsonSerializable, isEnginBaseState } = await import('@/lib/engin-runtime');
    expect(isJsonSerializable({ ok: true, nested: [1, 'two', null] })).toBe(true);
    expect(isJsonSerializable({ when: new Date('2026-06-01T00:00:00.000Z') })).toBe(false);
    expect(isJsonSerializable({ fn: () => true })).toBe(false);
    expect(
      isEnginBaseState({
        enginId: 'test',
        lifecycle: 'running',
        updatedAt: '2026-06-01T00:00:00.000Z',
        revision: 1,
        domain: { fn: () => true },
      }),
    ).toBe(false);
  });


});
