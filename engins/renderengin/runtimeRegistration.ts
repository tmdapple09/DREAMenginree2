import { registerRuntimeEngin } from '@/engine/engin-runtime/EnginRuntimeRegistry';
import { RenderEnginRuleSet, RENDER_ENGIN_ID, RENDER_INTENT_TYPES } from './core';

export const RenderEnginRuntimeRegistration = registerRuntimeEngin({
  id: RENDER_ENGIN_ID,
  name: 'RenderEngin',
  route: '/engines/render',
  daydreamHref: '/daydream/render',
  ruleSet: RenderEnginRuleSet,
  capabilityId: RENDER_ENGIN_ID,
  workflowSurfaces: ['DreamDMBar', 'HomeDream', 'DreamSpace', 'Daydream', 'ContentEngin', 'GameEngin', 'CodeEngin', 'LabEngin'],
  intentTypes: RENDER_INTENT_TYPES,
  handoffs: ['content.export.glb.preview', 'game.cartridge.mesh.preview', 'code.shader.preview', 'lab.simulation.mesh.preview'],
  metadata: {
    canonicalId: RENDER_ENGIN_ID,
    ownershipBoundary: 'RenderEngin owns render scene interpretation and GPU resources; Core Engine owns state, auth, transport, lifecycle, snapshots, and sync.',
    browserRequirement: 'Client-only WebGPU surface with compatibility negotiation and non-WebGPU fallback messaging.',
  },
});
