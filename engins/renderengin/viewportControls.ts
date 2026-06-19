import { v3dot, v3length, v3normalize, v3scale, v3sub, type Vec2, type Vec3 } from './core';
import type { RenderBounds } from './virtualization';

export interface RenderCameraState { azimuth: number; elevation: number; zoom: number; target: Vec3 }
export interface RenderRay { origin: Vec3; direction: Vec3 }
export interface RenderPointerSample { id: number; x: number; y: number }
export type RenderTransformMode = 'move' | 'rotate' | 'scale';

export function panRenderCamera(camera: RenderCameraState, delta: Vec2, scale = 0.01): RenderCameraState {
  return { ...camera, target: [camera.target[0] - delta[0] * scale, camera.target[1] + delta[1] * scale, camera.target[2]] };
}

export function orbitRenderCamera(camera: RenderCameraState, delta: Vec2): RenderCameraState {
  return { ...camera, azimuth: camera.azimuth + delta[0] * 0.01, elevation: Math.max(-1.25, Math.min(1.25, camera.elevation + delta[1] * 0.01)) };
}

export function zoomRenderCamera(camera: RenderCameraState, delta: number): RenderCameraState {
  return { ...camera, zoom: Math.max(0.25, Math.min(100, camera.zoom + delta)) };
}

export function pinchZoomRenderCamera(camera: RenderCameraState, previous: readonly RenderPointerSample[], next: readonly RenderPointerSample[]): RenderCameraState {
  if (previous.length < 2 || next.length < 2) return camera;
  const dist = (points: readonly RenderPointerSample[]) => Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
  return zoomRenderCamera(camera, (dist(previous) - dist(next)) * 0.01);
}

export function resetRenderCamera(target: Vec3 = [0, 0, 0]): RenderCameraState {
  return { azimuth: 0, elevation: 0, zoom: 2.4, target };
}

export function fitCameraToBounds(bounds: RenderBounds, fovYRadians = Math.PI / 3): RenderCameraState {
  const zoom = Math.max(0.5, bounds.radius / Math.sin(fovYRadians / 2));
  return { azimuth: 0, elevation: 0.35, zoom, target: bounds.center };
}

export function createViewportRay(input: { ndc: Vec2; cameraPosition: Vec3; target: Vec3 }): RenderRay {
  const forward = v3normalize(v3sub(input.target, input.cameraPosition));
  const right = v3normalize([forward[2], 0, -forward[0]]);
  const up: Vec3 = [0, 1, 0];
  return { origin: input.cameraPosition, direction: v3normalize([forward[0] + right[0] * input.ndc[0] + up[0] * input.ndc[1], forward[1] + right[1] * input.ndc[0] + up[1] * input.ndc[1], forward[2] + right[2] * input.ndc[0] + up[2] * input.ndc[1]]) };
}

export function raycastSphere(ray: RenderRay, bounds: RenderBounds): number | null {
  const oc = v3sub(ray.origin, bounds.center);
  const b = 2 * v3dot(oc, ray.direction);
  const c = v3dot(oc, oc) - bounds.radius * bounds.radius;
  const discriminant = b * b - 4 * c;
  if (discriminant < 0) return null;
  const t = (-b - Math.sqrt(discriminant)) / 2;
  return t >= 0 ? t : null;
}

export function pickRenderObject(ray: RenderRay, boundsByObjectId: Record<string, RenderBounds>): string | null {
  return Object.entries(boundsByObjectId)
    .map(([id, bounds]) => ({ id, t: raycastSphere(ray, bounds) }))
    .filter((hit): hit is { id: string; t: number } => hit.t !== null)
    .sort((a, b) => a.t - b.t)[0]?.id ?? null;
}

export function createBoundingBoxLines(bounds: RenderBounds): Vec3[] {
  const r = bounds.radius;
  const c = bounds.center;
  const corners: Vec3[] = [[-r,-r,-r],[r,-r,-r],[r,r,-r],[-r,r,-r],[-r,-r,r],[r,-r,r],[r,r,r],[-r,r,r]].map((p) => [c[0]+p[0], c[1]+p[1], c[2]+p[2]] as Vec3);
  const edges = [0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7];
  return edges.map((index) => corners[index]);
}

export function transformGizmoDelta(mode: RenderTransformMode, delta: Vec2, snapSize = 0.25): Vec3 {
  const snapped = (value: number) => Math.round(value / snapSize) * snapSize;
  if (mode === 'scale') return [snapped(delta[0] * 0.01), snapped(delta[1] * 0.01), snapped((delta[0] + delta[1]) * 0.005)];
  if (mode === 'rotate') return [snapped(delta[1] * 0.01), snapped(delta[0] * 0.01), 0];
  return [snapped(delta[0] * 0.01), snapped(-delta[1] * 0.01), 0];
}

export function createAxisHelper(length = 1): readonly [Vec3, Vec3, Vec3, Vec3, Vec3, Vec3] {
  return [[0,0,0], v3scale([1,0,0], length), [0,0,0], v3scale([0,1,0], length), [0,0,0], v3scale([0,0,1], length)];
}
