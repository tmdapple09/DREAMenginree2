import { beforeEach, describe, expect, it } from 'vitest';
import { bridge } from '@/lib/runtime/dualRuntimeBridge';
import {
  dreamOSBus,
  deriveAIRuntimeContext,
  getCapabilitiesForDomains,
  getCapabilityChildren,
  getCapabilityDescriptor,
} from '@/lib/runtime/dreamOSBus';


const authorizationContext = {
  actorId: 'owner-1',
  runtimeId: 'homedream',
  surfaceRuntimeIds: ['homedream', 'dreamspace'],
  collaboration: { active: false, participantIds: [], editorIds: [] },
} as const;

describe('dreamOSBus', () => {
  beforeEach(() => {
    dreamOSBus.clearAll();
  });

  it('publishes runtime contexts with derived AI context', () => {
    dreamOSBus.publishRuntimeContext({
      region: 'Surface Space',
      world: { type: 'engin', name: 'CodeEngin' },
      splitRatio: 0.6,
      dominant: true,
    });

    const snapshot = dreamOSBus.getSnapshot();
    expect(snapshot.runtimeContexts).toHaveLength(1);
    expect(snapshot.runtimeContexts[0]?.aiContext).toBe('code');
    expect(snapshot.runtimeContexts[0]?.subsystemId).toBe('CodeEngin');
  });

  it('stores shared artifacts in newest-first order', () => {
    dreamOSBus.upsertArtifact({
      id: 'artifact-1',
      kind: 'code-run',
      title: 'Code run',
      sourceSubsystem: 'CodeEngin',
      relatedSubsystems: ['LabEngin'],
      payload: { ok: true },
      updatedAt: 1,
    });
    dreamOSBus.upsertArtifact({
      id: 'artifact-2',
      kind: 'lab-result',
      title: 'Lab result',
      sourceSubsystem: 'LabEngin',
      relatedSubsystems: ['CodeEngin'],
      payload: { ok: true },
      updatedAt: 2,
    });

    const snapshot = dreamOSBus.getSnapshot();
    expect(snapshot.artifacts.map((artifact) => artifact.id)).toEqual([
      'artifact-2',
      'artifact-1',
    ]);
  });

  it('mirrors bridge emissions from multiple subsystem channels into the OS bus', () => {
    bridge.emit('music', 'music:stem-ready', {
      stemType: 'drums',
      url: '/stem.wav',
    });
    bridge.emit('games', 'games:asset-exported', {
      assetId: 'level-1',
      assetType: 'level',
      url: '/level',
    });

    const snapshot = dreamOSBus.getSnapshot();
    expect(snapshot.artifacts).toHaveLength(2);
    expect(
      snapshot.artifacts.every((artifact) => artifact.kind === 'event'),
    ).toBe(true);
    expect(
      snapshot.artifacts.map((artifact) => artifact.sourceSubsystem).sort(),
    ).toEqual(['GameEngin', 'StarMakerEngin']);
    expect(
      snapshot.artifacts.map((artifact) => artifact.payload.event).sort(),
    ).toEqual(['games:asset-exported', 'music:stem-ready']);
  });
});


describe('dreamOSBus semantic capability domains', () => {
  beforeEach(() => {
    dreamOSBus.clearAll();
  });

  it('describes existing capabilities with multi-domain membership without creating center runtimes', () => {
    expect(getCapabilityDescriptor('StarMakerEngin')?.domains).toEqual([
      'audio',
      'visual',
      'communication',
    ]);
    expect(getCapabilitiesForDomains(['physics']).map((capability) => capability.id)).toContain('GameEngin');
    expect(getCapabilityDescriptor('DreamDMBar')).toMatchObject({
      kind: 'orchestrator',
      domains: ['communication', 'identity', 'logic', 'memory'],
    });
    expect(getCapabilityChildren('DreamDMBar').map((capability) => capability.id)).toEqual([
      'DreamDMBar.messaging',
      'DreamDMBar.search',
      'DreamDMBar.notifications',
      'DreamDMBar.navigation',
      'DreamDMBar.context-actions',
      'DreamDMBar.surface-exchange',
      'DreamDMBar.dr-eams',
    ]);
    expect(getCapabilityDescriptor('safeGetUser')?.domains).toEqual(['identity']);
  });

  it('annotates mirrored artifacts with semantic domains for orchestrator discovery', () => {
    bridge.emit('music', 'music:stem-ready', { stemType: 'drums' });
    const artifact = dreamOSBus.getSnapshot().artifacts[0];
    expect(artifact?.sourceSubsystem).toBe('StarMakerEngin');
    expect(artifact?.domains).toContain('audio');
    expect(artifact?.relatedSubsystems).toContain('ContentEngin');
  });
});

describe('deriveAIRuntimeContext', () => {
  it('maps runtime worlds to subsystem-aware AI modes', () => {
    expect(deriveAIRuntimeContext({ type: 'engin', name: 'LabEngin' })).toBe(
      'lab',
    );
    expect(deriveAIRuntimeContext({ type: 'engin', name: 'GameEngin' })).toBe(
      'game',
    );
    expect(deriveAIRuntimeContext('DreamSpace')).toBe('general');
  });
});

describe('dreamOSBus intent routing', () => {
  it('validates, deterministically handles, and idempotently replays domain-enveloped intents', async () => {
    const handled: string[] = [];
    dreamOSBus.registerIntent(
      'object.transfer',
      (intent) =>
        typeof (intent.data.payload as { objectId?: unknown }).objectId ===
        'string',
      (intent) => {
        handled.push(intent.id);
      },
    );
    const intent = {
      id: 'intent-1',
      type: 'object.transfer',
      ownerId: 'owner-1',
      runtimeId: 'homedream',
      visibility: 'local' as const,
      createdAt: '2026-06-01T00:00:00.000Z',
      updatedAt: '2026-06-01T00:00:00.000Z',
      version: 1,
      data: {
        sourceRuntimeId: 'homedream',
        targetRuntimeId: 'dreamspace',
        actorId: 'owner-1',
        capability: 'move' as const,
        domains: ['memory'] as const,
        priority: 'normal' as const,
        payload: { objectId: 'asset-1' },
      },
    };
    expect(await dreamOSBus.dispatchIntent(intent, authorizationContext)).toEqual({
      handled: true,
      replayed: false,
    });
    expect(await dreamOSBus.dispatchIntent(intent, authorizationContext)).toEqual({
      handled: true,
      replayed: true,
    });
    expect(handled).toEqual(['intent-1']);
  });
});

describe('dreamOSBus intent contract hardening', () => {
  it('rejects intents whose actor or source runtime disagree with the domain envelope', async () => {
    dreamOSBus.registerIntent(
      'object.invalid',
      () => true,
      () => undefined,
    );
    const intent = {
      id: 'intent-invalid',
      type: 'object.invalid',
      ownerId: 'owner-1',
      runtimeId: 'homedream',
      visibility: 'local' as const,
      createdAt: '2026-06-01T00:00:00.000Z',
      updatedAt: '2026-06-01T00:00:00.000Z',
      version: 1,
      data: {
        sourceRuntimeId: 'dreamspace',
        actorId: 'other-owner',
        capability: 'move' as const,
        domains: ['memory'] as const,
        priority: 'normal' as const,
        payload: {},
      },
    };
    await expect(dreamOSBus.dispatchIntent(intent, authorizationContext)).rejects.toThrow(
      'Invalid intent envelope',
    );
  });

  it('rejects intent handlers that do not own any requested semantic domain', async () => {
    dreamOSBus.registerIntent('audio.export', () => true, () => undefined, ['audio']);
    const intent = {
      id: 'intent-wrong-domain',
      type: 'audio.export',
      ownerId: 'owner-1',
      runtimeId: 'homedream',
      visibility: 'local' as const,
      createdAt: '2026-06-01T00:00:00.000Z',
      updatedAt: '2026-06-01T00:00:00.000Z',
      version: 1,
      data: {
        sourceRuntimeId: 'homedream',
        actorId: 'owner-1',
        capability: 'move' as const,
        domains: ['physics'] as const,
        priority: 'normal' as const,
        payload: {},
      },
    };
    await expect(dreamOSBus.dispatchIntent(intent, authorizationContext)).rejects.toThrow(
      'has no domain handled',
    );
  });

  it('coalesces concurrent delivery of the same intent id', async () => {
    const handled: string[] = [];
    dreamOSBus.registerIntent(
      'object.concurrent',
      () => true,
      async (intent) => {
        await new Promise((resolve) => setTimeout(resolve, 1));
        handled.push(intent.id);
      },
    );
    const intent = {
      id: 'intent-concurrent',
      type: 'object.concurrent',
      ownerId: 'owner-1',
      runtimeId: 'homedream',
      visibility: 'local' as const,
      createdAt: '2026-06-01T00:00:00.000Z',
      updatedAt: '2026-06-01T00:00:00.000Z',
      version: 1,
      data: {
        sourceRuntimeId: 'homedream',
        actorId: 'owner-1',
        capability: 'move' as const,
        domains: ['memory'] as const,
        priority: 'normal' as const,
        payload: {},
      },
    };
    expect(
      await Promise.all([
        dreamOSBus.dispatchIntent(intent, authorizationContext),
        dreamOSBus.dispatchIntent(intent, authorizationContext),
      ]),
    ).toEqual([
      { handled: true, replayed: false },
      { handled: true, replayed: true },
    ]);
    expect(handled).toEqual(['intent-concurrent']);
  });
});
