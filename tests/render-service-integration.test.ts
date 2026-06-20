import { describe, expect, it } from 'vitest';
import { EnginDispatcher } from '@/engine/runtime/EnginDispatcher';
import {
  RENDER_SERVICE_COMMANDS,
  RENDER_SERVICE_HANDOFFS,
  RENDER_SERVICE_PIPELINE,
  createRenderServiceIntent,
  getRenderHandoffForSource,
} from '@/engins/renderengin';

describe('Render shared service orchestration', () => {
  it('declares the full runtime pipeline and workflow surface commands', () => {
    expect(RENDER_SERVICE_PIPELINE).toEqual([
      'User Action', 'Intent', 'Runtime Orchestration', 'Capability Resolution', 'Engin Execution', 'State Mutation', 'Event Distribution', 'Surface Update',
    ]);
    expect(RENDER_SERVICE_COMMANDS.map((command) => command.surface)).toEqual(expect.arrayContaining(['DreamDMBar', 'HomeDream', 'DreamSpace', 'Daydream']));
  });

  it('declares handoffs for Content/Game/Code/Lab without direct Engin calls', () => {
    expect(RENDER_SERVICE_HANDOFFS.map((handoff) => handoff.source)).toEqual(['ContentEngin', 'GameEngin', 'CodeEngin', 'LabEngin']);
    expect(getRenderHandoffForSource('ContentEngin')?.acceptedAssetKinds).toContain('glb');
    expect(getRenderHandoffForSource('GameEngin')?.acceptedAssetKinds).toContain('cartridge-mesh');
  });

  it('creates domain-enveloped render intents for cross-surface routing', () => {
    const intent = createRenderServiceIntent('ContentEngin', 'render.asset.preview', { ownerId: 'user-1', runtimeId: 'runtime-1', assetId: 'asset-1' });
    expect(intent).toMatchObject({ type: 'intent.render', ownerId: 'user-1', runtimeId: 'runtime-1', visibility: 'local' });
    expect(intent.data).toMatchObject({ source: 'ContentEngin', intentType: 'render.asset.preview', targetCapability: 'render' });
  });

  it('registers render intents with the EnginDispatcher queue', () => {
    EnginDispatcher._resetForTesting();
    const dispatcher = EnginDispatcher.getInstance();
    expect(dispatcher.dispatchRenderIntent({ type: 'render.frame.render', source: 'DreamDMBar', payload: { frameIndex: 1 } })).toBe(true);
    expect(dispatcher.readRenderIntentQueue()).toHaveLength(1);
    expect(dispatcher.readRenderIntentQueue()[0]).toMatchObject({ type: 'render.frame.render', source: 'DreamDMBar' });
  });
});
