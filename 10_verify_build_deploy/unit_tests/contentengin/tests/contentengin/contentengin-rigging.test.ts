import { describe, expect, it } from 'vitest';
import { addRigBendPoint, createAutoRigState, exportGLB } from '../../engins/isosurfaceAssetPipeline';
import { createSkeleton } from '../../engins/contentengin/rigging';
import { validateSkeleton } from '../../engins/contentengin/rigging/rigValidator';

describe('ContentEngin rigging', () => {
  it('creates valid non-AI humanoid skeleton', () => {
    const skeleton = createSkeleton('humanoid', 4);
    expect(skeleton?.bones.length).toBeGreaterThan(10);
    expect(validateSkeleton(skeleton).valid).toBe(true);
  });

  it('records manual bend points on the selected auto-rig standard', () => {
    const rig = addRigBendPoint(createAutoRigState('quadruped'), { x: 0.25, y: 0.5, z: -0.1 });
    expect(rig.target).toBe('quadruped');
    expect(rig.status).toBe('ready');
    expect(rig.bendPoints).toHaveLength(1);
    expect(rig.skeleton.bones[0]?.bend).toEqual({ x: 0.25, y: 0.5, z: -0.1 });
  });

  it('embeds rig metadata without claiming a skinned GLB', async () => {
    const rig = addRigBendPoint(createAutoRigState('vehicle'), { x: 1, y: 0, z: 0 });
    const blob = exportGLB({ vertices: [{ x: 0, y: 0, z: 0 }, { x: 1, y: 0, z: 0 }, { x: 0, y: 1, z: 0 }, { x: 0, y: 0, z: 1 }], indices: [0, 1, 2, 0, 3, 1, 0, 2, 3, 1, 3, 2] }, { ...rig, status: 'metadata-ready' });
    const buffer = await blob.arrayBuffer();
    const view = new DataView(buffer);
    const jsonLength = view.getUint32(12, true);
    const gltf = JSON.parse(new TextDecoder().decode(new Uint8Array(buffer, 20, jsonLength)).trim());
    expect(gltf.extras.contentengin.rigMetadata.target).toBe('vehicle');
    expect(gltf.extras.contentengin.rigMetadataOnly).toBe(true);
    expect(gltf.extras.contentengin.rigged).toBe(false);
  });
});
