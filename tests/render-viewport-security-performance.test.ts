import { describe, expect, it } from 'vitest';
import {
  authorizeRenderCapability,
  createAxisHelper,
  createBoundingBoxLines,
  createViewportRay,
  evaluateRenderPerformanceIntegrity,
  fitCameraToBounds,
  panRenderCamera,
  pickRenderObject,
  pinchZoomRenderCamera,
  raycastSphere,
  resetRenderCamera,
  transformGizmoDelta,
  validateRenderAssetManifestServer,
} from '@/engins/renderengin';

describe('Render viewport controls, picking, security, and performance integrity', () => {
  it('supports pan, pinch zoom, fit-to-bounds, gizmo snapping, axis helpers, and bounding boxes', () => {
    const camera = resetRenderCamera();
    expect(panRenderCamera(camera, [10, -10]).target).toEqual([-0.1, -0.1, 0]);
    expect(pinchZoomRenderCamera(camera, [{ id: 1, x: 0, y: 0 }, { id: 2, x: 100, y: 0 }], [{ id: 1, x: 0, y: 0 }, { id: 2, x: 150, y: 0 }]).zoom).toBeLessThan(camera.zoom);
    expect(fitCameraToBounds({ center: [1, 2, 3], radius: 4 }).target).toEqual([1, 2, 3]);
    expect(transformGizmoDelta('move', [12, -12], 0.1)).toEqual([0.1, 0.1, 0]);
    expect(createAxisHelper(2)).toHaveLength(6);
    expect(createBoundingBoxLines({ center: [0, 0, 0], radius: 1 })).toHaveLength(24);
  });

  it('supports raycasting and click/hover object picking foundations', () => {
    const ray = createViewportRay({ ndc: [0, 0], cameraPosition: [0, 0, 5], target: [0, 0, 0] });
    expect(raycastSphere(ray, { center: [0, 0, 0], radius: 1 })).toBeGreaterThan(0);
    expect(pickRenderObject(ray, { near: { center: [0, 0, 0], radius: 1 }, far: { center: [0, 0, -5], radius: 1 } })).toBe('near');
  });

  it('authorizes every render capability action with owner/runtime/visibility/surface/collaboration checks', () => {
    const context = { actorId: 'user-1', ownerId: 'user-1', runtimeId: 'runtime-1', objectRuntimeId: 'runtime-1', visibility: 'local' as const, surfaceScope: 'HomeDream' as const, collaborationState: 'solo' as const };
    expect(authorizeRenderCapability('write', context)).toMatchObject({ allowed: true });
    expect(authorizeRenderCapability('destroy', { ...context, actorId: 'other' })).toMatchObject({ allowed: false });
    expect(authorizeRenderCapability('read', { ...context, actorId: 'other', visibility: 'shared' })).toMatchObject({ allowed: true });
    expect(authorizeRenderCapability('write', { ...context, collaborationState: 'shared-session' })).toMatchObject({ allowed: false });
  });

  it('validates server render manifests and performance integrity thresholds', () => {
    expect(validateRenderAssetManifestServer({ id: 'asset-1', ownerId: 'user-1', runtimeId: 'runtime-1', visibility: 'local', byteLength: 1024 })).toMatchObject({ allowed: true });
    expect(validateRenderAssetManifestServer({ id: 'asset-1', ownerId: 'user-1', runtimeId: 'runtime-1', visibility: 'private' })).toMatchObject({ allowed: false });
    expect(evaluateRenderPerformanceIntegrity({ frameTimes: [15, 16, 16], gpuLatencies: [9, 10, 11] })).toMatchObject({ pass30fps: true, pass60fps: true, passGpuLatency: true, passed: true });
  });
});
