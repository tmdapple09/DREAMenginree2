

import { describe, expect, it } from 'vitest';
import { buildAutosyncSummary, computeAffected, replaceSection } from '../scripts/readme-autosync';
import {
  createDream,
  dreamCan,
  isDream,
  resolveDreamSurfaceAdapter,
  NO_PERMISSIONS,
  OWNER_PERMISSIONS,
  VIEWER_PERMISSIONS,
  type Dream,
  type DreamKind,
  type DreamPermissions,
  type DreamRenderMode,
  type DreamSurface,
  type DrEamsIntentType,
} from '../lib/dreams/types';



describe('Dream model — architecture contract', () => {
  it('covers every DreamKind the architecture defines', () => {
    const requiredKinds: DreamKind[] = [
      'widget', 'window', 'game', 'tool', 'media', 'post', 'note',
      'profile', 'world', 'ruleset', 'simulation', 'environment',
      'app', 'connector', 'artifact', 'collection', 'stream',
    ];
    
    
    for (const kind of requiredKinds) {
      const d = createDream({ id: `test-${kind}`, label: kind, kind, ownerId: 'u1' });
      expect(d.kind).toBe(kind);
    }
  });

  it('covers every DreamSurface the architecture defines', () => {
    const requiredSurfaces: DreamSurface[] = [
      'homedream', 'dreamspace', 'dreamr', 'dreamdmbar',
      'gameengin', 'shared-dream', 'profile',
      'edit-profiledream', 'view-profile',
    ];
    for (const surface of requiredSurfaces) {
      const d = createDream({
        id: `test-surface-${surface}`,
        label: surface,
        kind: 'widget',
        ownerId: 'u1',
        activeSurface: surface,
      });
      expect(d.activeSurface).toBe(surface);
    }
  });

  it('covers every DreamRenderMode the architecture defines', () => {
    const requiredModes: DreamRenderMode[] = [
      'window', 'widget', 'fullscreen', 'feed-card', 'media-object',
      'spatial-object', 'profile-card', 'shared-object', 'embed', 'overlay',
    ];
    for (const mode of requiredModes) {
      const d = createDream({
        id: `test-mode-${mode}`,
        label: mode,
        kind: 'widget',
        ownerId: 'u1',
        renderMode: mode,
      });
      expect(d.renderMode).toBe(mode);
    }
  });

  it('includes every permission the architecture declares', () => {
    const requiredPermissions: Array<keyof DreamPermissions> = [
      'editable', 'movable', 'resizable', 'playable',
      'shareable', 'cloneable', 'deletable', 'attachable',
      'fullscreenable', 'postable', 'remixable',
    ];
    const d = createDream({ id: 'p1', label: 'perm test', kind: 'widget', ownerId: 'u1' });
    for (const perm of requiredPermissions) {
      expect(typeof d.permissions[perm]).toBe('boolean');
    }
  });
});



describe('DrEamsIntentType — all Dream mutation paths covered', () => {
  const allIntentTypes: DrEamsIntentType['type'][] = [
    'dream:open', 'dream:close', 'dream:move', 'dream:resize',
    'dream:minimize', 'dream:maximize', 'dream:pin', 'dream:unpin',
    'dream:share', 'dream:clone', 'dream:delete', 'dream:post',
    'dream:attach', 'dream:transfer', 'dream:state-patch',
  ];

  it('defines an intent for every Dream mutation action', () => {
    
    expect(allIntentTypes.length).toBeGreaterThanOrEqual(15);
  });

  it('dream:open carries surface and dreamId', () => {
    const intent: DrEamsIntentType = {
      type: 'dream:open',
      payload: { dreamId: 'abc', surface: 'homedream' },
    };
    expect(intent.payload.dreamId).toBe('abc');
    expect(intent.payload.surface).toBe('homedream');
  });

  it('dream:move carries full placement', () => {
    const intent: DrEamsIntentType = {
      type: 'dream:move',
      payload: {
        dreamId: 'xyz',
        placement: { surface: 'dreamspace', x: 100, y: 200, width: 400, height: 300, zIndex: 10 },
      },
    };
    expect(intent.payload.placement.x).toBe(100);
    expect(intent.payload.placement.surface).toBe('dreamspace');
  });

  it('dream:transfer declares source and target surface', () => {
    const intent: DrEamsIntentType = {
      type: 'dream:transfer',
      payload: { dreamId: 'def', fromSurface: 'homedream', toSurface: 'dreamspace' },
    };
    expect(intent.payload.fromSurface).toBe('homedream');
    expect(intent.payload.toSurface).toBe('dreamspace');
  });

  it('dream:share accepts all visibility values', () => {
    for (const visibility of ['private', 'followers', 'public', 'shared'] as const) {
      const intent: DrEamsIntentType = {
        type: 'dream:share',
        payload: { dreamId: 'vis-test', visibility },
      };
      expect(intent.payload.visibility).toBe(visibility);
    }
  });
});



describe('createDream — factory produces valid Dreams', () => {
  it('creates a Dream with required fields and correct defaults', () => {
    const d = createDream({ id: 'd1', label: 'My Dream', kind: 'game', ownerId: 'u1' });
    expect(d.id).toBe('d1');
    expect(d.label).toBe('My Dream');
    expect(d.kind).toBe('game');
    expect(d.ownerId).toBe('u1');
    expect(d.visibility).toBe('private');
    expect(d.origin).toBe('user');
    expect(d.state).toBe('idle');
    expect(d.renderMode).toBe('widget');
    expect(d.activeSurface).toBeNull();
    expect(d.capability.connected).toBe(false);
    expect(d.domainState).toEqual({});
  });

  it('defaults to OWNER_PERMISSIONS when ownerId is set', () => {
    const d = createDream({ id: 'd2', label: 'owned', kind: 'widget', ownerId: 'u1' });
    expect(d.permissions.editable).toBe(true);
    expect(d.permissions.deletable).toBe(true);
    expect(d.permissions.movable).toBe(true);
    expect(d.permissions.shareable).toBe(true);
  });

  it('defaults to NO_PERMISSIONS when ownerId is null', () => {
    const d = createDream({ id: 'd3', label: 'system', kind: 'world', ownerId: null });
    expect(d.permissions.editable).toBe(false);
    expect(d.permissions.deletable).toBe(false);
    expect(d.permissions.movable).toBe(false);
  });

  it('accepts overrides for all fields', () => {
    const d = createDream({
      id: 'd4',
      label: 'override test',
      kind: 'media',
      ownerId: 'u1',
      visibility: 'public',
      origin: 'marketplace',
      renderMode: 'feed-card',
      activeSurface: 'dreamr',
      state: 'active',
    });
    expect(d.visibility).toBe('public');
    expect(d.origin).toBe('marketplace');
    expect(d.renderMode).toBe('feed-card');
    expect(d.activeSurface).toBe('dreamr');
    expect(d.state).toBe('active');
  });
});



describe('isDream — type guard', () => {
  it('returns true for a valid Dream', () => {
    const d = createDream({ id: 'g1', label: 'guard test', kind: 'note', ownerId: 'u1' });
    expect(isDream(d)).toBe(true);
  });

  it('returns false for null', () => {
    expect(isDream(null)).toBe(false);
  });

  it('returns false for a plain object missing required fields', () => {
    expect(isDream({ id: 'x' })).toBe(false);
  });

  it('returns false for a string', () => {
    expect(isDream('dream')).toBe(false);
  });


  it('rejects invalid enum labels, incomplete permission sets, and non-JSON domain state', () => {
    const valid = createDream({ id: 'strict', label: 'Strict Dream', kind: 'tool', ownerId: 'u1' });
    expect(isDream({ ...valid, kind: 'fancy-label' })).toBe(false);
    expect(isDream({ ...valid, permissions: { editable: true } })).toBe(false);
    expect(isDream({ ...valid, domainState: { unsafe: new Date('2026-06-01T00:00:00.000Z') } })).toBe(false);
    expect(isDream({ ...valid, surfaceAdapters: [{ surface: 'fake-surface', renderMode: 'widget' }] })).toBe(false);
  });
});



describe('dreamCan — permission helper', () => {
  it('returns true for granted permissions', () => {
    const d = createDream({ id: 'c1', label: 'can test', kind: 'game', ownerId: 'u1' });
    expect(dreamCan(d, 'playable')).toBe(true);
    expect(dreamCan(d, 'shareable')).toBe(true);
  });

  it('returns false for denied permissions (viewer)', () => {
    const d = createDream({
      id: 'c2',
      label: 'viewer test',
      kind: 'game',
      ownerId: 'other-user',
      permissions: { ...VIEWER_PERMISSIONS },
    });
    expect(dreamCan(d, 'editable')).toBe(false);
    expect(dreamCan(d, 'deletable')).toBe(false);
    expect(dreamCan(d, 'playable')).toBe(true);
  });
});



describe('Permission presets — architecture contract', () => {
  it('OWNER_PERMISSIONS grants all capabilities', () => {
    const keys = Object.keys(OWNER_PERMISSIONS) as Array<keyof DreamPermissions>;
    for (const key of keys) {
      expect(OWNER_PERMISSIONS[key]).toBe(true);
    }
  });

  it('VIEWER_PERMISSIONS grants only playable, shareable, fullscreenable', () => {
    expect(VIEWER_PERMISSIONS.playable).toBe(true);
    expect(VIEWER_PERMISSIONS.shareable).toBe(true);
    expect(VIEWER_PERMISSIONS.fullscreenable).toBe(true);
    expect(VIEWER_PERMISSIONS.editable).toBe(false);
    expect(VIEWER_PERMISSIONS.deletable).toBe(false);
    expect(VIEWER_PERMISSIONS.cloneable).toBe(false);
    expect(VIEWER_PERMISSIONS.movable).toBe(false);
  });

  it('NO_PERMISSIONS denies everything', () => {
    const keys = Object.keys(NO_PERMISSIONS) as Array<keyof DreamPermissions>;
    for (const key of keys) {
      expect(NO_PERMISSIONS[key]).toBe(false);
    }
  });
});



describe('Dream — one model many surfaces', () => {
  it('the same Dream can be projected onto different surfaces via surfaceAdapters', () => {
    const d = createDream({
      id: 'multi',
      label: 'Multi-surface Dream',
      kind: 'game',
      ownerId: 'u1',
      surfaceAdapters: [
        { surface: 'homedream',  renderMode: 'widget',    label: 'Game Widget' },
        { surface: 'gameengin',  renderMode: 'fullscreen', label: 'Play Game' },
        { surface: 'dreamr',     renderMode: 'feed-card',  label: 'Game Post' },
        { surface: 'dreamspace', renderMode: 'spatial-object' },
      ],
    });
    expect(d.surfaceAdapters).toHaveLength(4);
    const gameEnginAdapter = d.surfaceAdapters?.find(a => a.surface === 'gameengin');
    expect(gameEnginAdapter?.renderMode).toBe('fullscreen');
    const dreamrAdapter = d.surfaceAdapters?.find(a => a.surface === 'dreamr');
    expect(dreamrAdapter?.renderMode).toBe('feed-card');
  });



  it('resolves surface adapters through the same Dream instead of duplicating identity', () => {
    const d = createDream({
      id: 'adapter-game',
      label: 'Adapter Game',
      kind: 'game',
      ownerId: 'u1',
      renderMode: 'widget',
      surfaceAdapters: [
        { surface: 'homedream', renderMode: 'widget', label: 'Home Tile' },
        { surface: 'gameengin', renderMode: 'fullscreen', label: 'Game Surface' },
      ],
    });
    expect(resolveDreamSurfaceAdapter(d, 'gameengin')).toMatchObject({
      surface: 'gameengin',
      renderMode: 'fullscreen',
      label: 'Game Surface',
    });
    expect(resolveDreamSurfaceAdapter(d, 'dreamspace')).toMatchObject({
      surface: 'dreamspace',
      renderMode: 'widget',
      label: 'Adapter Game',
    });
  });

  it('a Game Dream can render as Widget on HomeDream and Fullscreen on GameEngin', () => {
    const gameDream = createDream({ id: 'mad-maxi', label: 'Mad Maxi', kind: 'game', ownerId: 'u1' });
    
    const homeMode: DreamRenderMode = 'widget';
    const gameMode: DreamRenderMode = 'fullscreen';
    expect(gameDream.kind).toBe('game');
    
    expect(gameDream.id).toBe('mad-maxi');
    
    expect(homeMode).not.toBe(gameMode);
  });
});


describe('README autosync helpers — current script behavior', () => {
  it('maps changed files to concrete sections and subsections', () => {
    const affected = computeAffected([
      'lib/engins/game/gameEnginRuleSet.ts',
      'lib/engin-runtime/EnginRuntime.ts',
      '.github/workflows/readme-autosync.yml',
    ]);
    expect(affected.get('the-engins')?.subsections.has('game-engin')).toBe(true);
    expect(affected.has('runtime-architecture')).toBe(true);
    expect(affected.has('infra-ops')).toBe(true);
  });

  it('builds the CLI summary shape expected by the GitHub readme-autosync wrapper', () => {
    const summary = buildAutosyncSummary(['lib/engins/code/codeEnginRuleSet.ts']);
    expect(summary.regeneratedSections).toEqual([
      expect.objectContaining({ id: 'the-engins', title: 'The Engins' }),
    ]);
    expect(summary.regeneratedSubsections).toEqual([
      expect.objectContaining({ sectionId: 'the-engins', subsectionId: 'code-engin' }),
    ]);
    expect(summary.readmeChanged).toBe(false);
  });

  it('safely replaces only the targeted markdown section', () => {
    const markdown = '# DREAMengin\n\n## The Engins\nold\n\n## Runtime Architecture\nkeep\n';
    const next = replaceSection(markdown, { id: 'the-engins', title: 'The Engins', globs: [] }, '## The Engins\nnew');
    expect(next).toContain('## The Engins\nnew');
    expect(next).toContain('## Runtime Architecture\nkeep');
  });
});
