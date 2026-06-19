import { describe, expect, it } from 'vitest';
import { EnginRuntime } from '@/engine/engin-runtime/EnginRuntime';
import { getRuntimeEnginRegistration, resolveRuntimeCapability } from '@/engine/engin-runtime/EnginRuntimeRegistry';
import { RenderEnginRuntimeRegistration } from '@/engins/renderengin/runtimeRegistration';
import { RenderEnginRuleSet, RENDER_ENGIN_ID, createMeshBuffers, validateMeshForRenderUpload, type RenderIntent } from '@/engins/renderengin';

describe('RenderEngin runtime wiring', () => {
  it('uses one canonical render id across registry, ruleset, capability, and route', () => {
    expect(RenderEnginRuntimeRegistration.id).toBe(RENDER_ENGIN_ID);
    expect(RenderEnginRuleSet.params.enginId).toBe(RENDER_ENGIN_ID);
    expect(RenderEnginRuleSet.capabilityTargets.enginId).toBe(RENDER_ENGIN_ID);
    expect(getRuntimeEnginRegistration('render')?.route).toBe('/engines/render');
    expect(resolveRuntimeCapability('render.frame.render')?.id).toBe('render');
  });

  it('routes viewport and frame intents through the fixed runtime before deriving state', () => {
    const runtime = new EnginRuntime<RenderIntent>(RenderEnginRuleSet, { persistenceKey: false, runtimeId: 'test-render' });
    expect(runtime.dispatch({ type: 'render.viewport.resize', payload: { width: 1280, height: 720 } })).toBe(true);
    expect(runtime.dispatch({ type: 'render.frame.render', payload: { frameIndex: 1, cpuFrameMs: 4.2, drawCalls: 1, indexCount: 3, measuredAt: new Date().toISOString() } })).toBe(true);
    expect(runtime.state.domain.lastIntent).toBe('render.frame.render');
    expect(runtime.getDerivedState().pipeline).toContain('Capability Resolution');
  });

  it('rejects malformed meshes before GPU upload', () => {
    const valid = createMeshBuffers([
      { position: [0, 0, 0], normal: [0, 0, 1], uv: [0, 0] },
      { position: [1, 0, 0], normal: [0, 0, 1], uv: [1, 0] },
      { position: [0, 1, 0], normal: [0, 0, 1], uv: [0, 1] },
    ], [0, 1, 2]);
    expect(validateMeshForRenderUpload(valid).valid).toBe(true);
    expect(validateMeshForRenderUpload({ ...valid, indices: [0, 1, 9] }).valid).toBe(false);
  });
});
