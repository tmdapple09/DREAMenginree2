import { describe, expect, it, beforeEach } from 'vitest';
import { EnginDispatcher } from '../engine/runtime/EnginDispatcher';
import {
  RENDER_SERVICE_COMMANDS,
  RENDER_SERVICE_HANDOFFS,
  RENDER_SERVICE_PIPELINE,
  dispatchRenderHandoff,
  dispatchRenderServiceIntent,
} from '../engins/renderengin';

describe('Render full service integration', () => {
  beforeEach(() => EnginDispatcher._resetForTesting());

  it('keeps Render as a shared service across every required surface', () => {
    expect(RENDER_SERVICE_PIPELINE).toEqual([
      'User Action',
      'Intent',
      'Runtime Orchestration',
      'Capability Resolution',
      'Engin Execution',
      'State Mutation',
      'Event Distribution',
      'Surface Update',
    ]);
    expect(RENDER_SERVICE_COMMANDS.map((command) => command.surface)).toEqual([
      'DreamDMBar', 'HomeDream', 'DreamSpace', 'Daydream', 'ContentEngin', 'GameEngin', 'CodeEngin', 'LabEngin',
    ]);
  });

  it('routes direct service commands into the EnginDispatcher render intent queue', () => {
    const result = dispatchRenderServiceIntent('DreamDMBar', 'render.viewport.snapshot', { ownerId: 'owner', runtimeId: 'runtime', visibility: 'shared' });
    const queue = EnginDispatcher.getInstance().readRenderIntentQueue();
    expect(result).toMatchObject({ accepted: true, dispatcherQueued: true, targetCapability: 'render' });
    expect(queue).toHaveLength(1);
    expect(queue[0]).toMatchObject({ type: 'render.viewport.snapshot', source: 'DreamDMBar' });
  });

  it('routes Content/Game/Code/Lab handoffs through accepted render intents only', () => {
    expect(RENDER_SERVICE_HANDOFFS.map((handoff) => handoff.source)).toEqual(['ContentEngin', 'GameEngin', 'CodeEngin', 'LabEngin']);
    const content = dispatchRenderHandoff('ContentEngin', 'mesh', { assetId: 'content-mesh' });
    const game = dispatchRenderHandoff('GameEngin', 'level', { assetId: 'level-1' });
    const rejected = dispatchRenderHandoff('CodeEngin', 'level', { assetId: 'wrong-kind' });
    expect(content).toMatchObject({ accepted: true, intentType: 'render.asset.preview' });
    expect(game).toMatchObject({ accepted: true, intentType: 'render.asset.load' });
    expect(rejected.accepted).toBe(false);
    expect(EnginDispatcher.getInstance().readRenderIntentQueue().map((intent) => intent.type)).toEqual(['render.asset.preview', 'render.asset.load']);
  });
});
