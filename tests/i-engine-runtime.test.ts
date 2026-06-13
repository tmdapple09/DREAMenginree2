import { describe, expect, it } from 'vitest';
import { DEFAULT_DUAL_RUNTIME } from '@/lib/runtime/dualRuntime';
import {
  IntentBus,
  authorizeCapability,
  createIntentPacket,
  createRuntimeObject,
  dualRuntimeManifest,
  dualRuntimeRuleSet,
  negotiateCompatibility,
  validateDomainObject,
} from '@/lib/runtime/iEngine';

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
