import { describe, expect, it } from 'vitest';
import { DEFAULT_DUAL_RUNTIME } from '@/engine/runtime/dualRuntime';
import {
  IntentBus,
  SpatialRuntimeCore,
  authorizeCapability,
  createIntentPacket,
  createRuntimeObject,
  dualRuntimeManifest,
  dualRuntimeRuleSet,
  negotiateCompatibility,
  validateDomainObject,
} from '@/engine/runtime/iEngine';

import {
  COMPETING_PLATFORMS,
  SUPERCILIOUS_CAPABILITIES,
  assertDreamEnginSuperset,
  createCapabilityVector,
  createSuperciliousPlatformState,
  dreamEnginSuperciliousManifest,
  superciliousPlatformRuleSet,
} from '@/engine/runtime/superciliousPlatformRuntime';

const actor = {
  actorId: 'owner-1',
  runtimeId: 'homedream',
  surfaceRuntimeIds: ['homedream', 'dreamspace', 'gameengin:mad-maxi'],
  collaboration: { active: false, participantIds: [], editorIds: [] },
};

describe('ι-Engine runtime contracts', () => {
  it('enforces the exact shared DomainObject envelope before capability work', () => {
    const object = createRuntimeObject({
      id: 'dream-1',
      type: 'Dream',
      ownerId: 'owner-1',
      runtimeId: 'homedream',
      visibility: 'local',
      data: { title: 'Localized information-form' },
    });

    expect(validateDomainObject(object).allowed).toBe(true);
    expect(authorizeCapability('write', actor, object).allowed).toBe(true);
    expect(authorizeCapability('destroy', { ...actor, actorId: 'intruder' }, object).allowed).toBe(false);
  });

  it('routes runtime changes statelessly from the latest React state', () => {
    const bus = new IntentBus(dualRuntimeRuleSet);
    const current = { ...DEFAULT_DUAL_RUNTIME, dominantRegion: 'DreamSpace' as const };
    const next = bus.route(current, createIntentPacket({
      id: 'intent-1',
      type: 'runtime.world.set',
      ownerId: 'owner-1',
      runtimeId: 'homedream',
      actor,
      payload: { viewport: 'bottom', world: 'HomeDream Surface' },
      issuedAt: new Date(0).toISOString(),
      trace: ['DreamDMBar'],
    }));

    expect(next.dominantRegion).toBe('DreamSpace');
    expect(next.dreamSpaceWorld).toBe('HomeDream Surface');
  });

  it('snapshots nested state with deterministic recursive checksums', () => {
    const bus = new IntentBus(dualRuntimeRuleSet);
    const a = bus.snapshot('homedream', 'owner-1', {
      nested: { b: 1, a: ['x', { z: true }] },
    });
    const b = bus.snapshot('homedream', 'owner-1', {
      nested: { a: ['x', { z: true }], b: 1 },
    });

    expect(a.data.checksum).toBe(b.data.checksum);
    expect(a.data.activeRuleSetId).toBe('ruleset.dual-runtime.spatial-intent');
  });

  it('validates manifests and compatibility floors', () => {
    expect(negotiateCompatibility('1.0.0', dualRuntimeManifest).allowed).toBe(true);
    expect(negotiateCompatibility('0.9.9', dualRuntimeManifest).allowed).toBe(false);
  });
});

it('promotes DreamEngin above platform silos with one strict lifecycle + intent seam', async () => {
  const published: string[] = [];
  const runtime = new SpatialRuntimeCore({
    coreVersion: '1.0.0',
    manifest: dualRuntimeManifest,
    ruleSet: dualRuntimeRuleSet,
    initialState: { ...DEFAULT_DUAL_RUNTIME, dominantRegion: 'Surface Space' as const },
    actor,
    ownerId: 'owner-1',
    runtimeId: 'homedream',
    lifecycle: {
      activate: (state) => ({ ...state, dominantRegion: 'DreamSpace' as const }),
    },
    transport: {
      publish: async (channel, intent) => {
        published.push(`${channel}:${intent.type}`);
      },
      subscribe: () => () => undefined,
    },
  });

  await runtime.runLifecycle('activate');
  const routed = await runtime.routeIntent(createIntentPacket({
    id: 'intent-superiority-1',
    type: 'runtime.dominance.swap',
    ownerId: 'owner-1',
    runtimeId: 'homedream',
    actor,
    payload: { reason: 'prove-one-engine-intent-bus' },
    issuedAt: new Date(1).toISOString(),
  }));

  expect(runtime.lifecycle).toBe('activate');
  expect(routed.state.dominantRegion).toBe('Surface Space');
  expect(routed.snapshot.data.activeRuleSetId).toBe(dualRuntimeRuleSet.id);
  expect(published).toEqual(['homedream:runtime.dominance.swap']);
});

it('rejects bypass intents before they can mutate runtime state', async () => {
  const runtime = new SpatialRuntimeCore({
    coreVersion: '1.0.0',
    manifest: dualRuntimeManifest,
    ruleSet: dualRuntimeRuleSet,
    initialState: { ...DEFAULT_DUAL_RUNTIME, dominantRegion: 'Surface Space' as const },
    actor,
    ownerId: 'owner-1',
    runtimeId: 'homedream',
  });

  await expect(runtime.routeIntent(createIntentPacket({
    id: 'intent-bypass-1',
    type: 'engin.direct-call.forbidden',
    ownerId: 'owner-1',
    runtimeId: 'homedream',
    actor,
    payload: { bypass: true },
    issuedAt: new Date(2).toISOString(),
  }))).rejects.toThrow("Intent 'engin.direct-call.forbidden' is not accepted");
  expect(runtime.currentState.dominantRegion).toBe('Surface Space');
});

it('models all named competitors as runtime capability profiles instead of documentation', () => {
  const state = createSuperciliousPlatformState();

  expect(COMPETING_PLATFORMS).toHaveLength(40);
  expect(Object.keys(state.profiles)).toEqual([...COMPETING_PLATFORMS]);
  expect(SUPERCILIOUS_CAPABILITIES.every((capability) => state.dreamEngin[capability])).toBe(true);
  expect(assertDreamEnginSuperset(state).missingByPlatform).toEqual({});
});

it('proves full-system superiority only through the strict runtime seam', async () => {
  const published: string[] = [];
  const runtime = new SpatialRuntimeCore({
    coreVersion: '1.0.0',
    manifest: dreamEnginSuperciliousManifest,
    ruleSet: superciliousPlatformRuleSet,
    initialState: {
      ...createSuperciliousPlatformState(),
      dreamEngin: createCapabilityVector(['recursive-surfaces', 'dual-runtime-orchestration', 'intent-bus-automation', 'capability-authorized-sync']),
    },
    actor: { ...actor, runtimeId: 'homedream', isAdmin: true },
    ownerId: 'dreamengin-system',
    runtimeId: 'homedream',
    lifecycle: {
      install: (state) => state,
      activate: (state) => state,
    },
    transport: {
      publish: async (channel, intent) => {
        published.push(`${channel}:${intent.type}`);
      },
      subscribe: () => () => undefined,
    },
  });

  await runtime.runLifecycle('install');
  await runtime.runLifecycle('activate');

  for (const platform of COMPETING_PLATFORMS) {
    await runtime.routeIntent(createIntentPacket({
      id: `intent:absorb:${platform}`,
      type: 'platform.capability.absorb',
      ownerId: 'dreamengin-system',
      runtimeId: 'homedream',
      visibility: 'global',
      actor: { ...actor, actorId: 'dreamengin-system', runtimeId: 'homedream', isAdmin: true },
      payload: { platform },
      issuedAt: new Date(3).toISOString(),
      trace: ['DreamDMBar'],
    }));
  }

  const proof = await runtime.routeIntent(createIntentPacket({
    id: 'intent:superset:prove',
    type: 'platform.superset.prove',
    ownerId: 'dreamengin-system',
    runtimeId: 'homedream',
    visibility: 'global',
    actor: { ...actor, actorId: 'dreamengin-system', runtimeId: 'homedream', isAdmin: true },
    payload: { competitors: [...COMPETING_PLATFORMS] },
    issuedAt: new Date(4).toISOString(),
    trace: ['DreamDMBar'],
  }));

  expect(proof.state.absorbedPlatforms).toEqual([...COMPETING_PLATFORMS]);
  expect(proof.state.missingByPlatform).toEqual({});
  expect(proof.snapshot.data.activeRuleSetId).toBe(superciliousPlatformRuleSet.id);
  expect(published).toHaveLength(41);
});
