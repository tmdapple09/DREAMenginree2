import { mat4Mul, mat4Translation, mat4Scale, mat4FromQuat, type Mat4, type Quat, type Vec3 } from './core';

export type RenderAnimationPath = 'translation' | 'rotation' | 'scale';

export interface RenderKeyframeVec3 {
  time: number;
  value: Vec3;
}

export interface RenderKeyframeQuat {
  time: number;
  value: Quat;
}

export interface RenderAnimationChannel {
  objectId: string;
  path: RenderAnimationPath;
  interpolation: 'step' | 'linear';
  keyframes: RenderKeyframeVec3[] | RenderKeyframeQuat[];
}

export interface RenderAnimationClip {
  id: string;
  name: string;
  duration: number;
  channels: RenderAnimationChannel[];
}

export interface RenderAnimationPose {
  objectId: string;
  translation?: Vec3;
  rotation?: Quat;
  scale?: Vec3;
  matrix: Mat4;
}

function lerp(a: number, b: number, t: number): number { return a + (b - a) * t; }
function lerpVec3(a: Vec3, b: Vec3, t: number): Vec3 { return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)]; }
function normalizeQuat(q: Quat): Quat { const len = Math.hypot(q[0], q[1], q[2], q[3]) || 1; return [q[0] / len, q[1] / len, q[2] / len, q[3] / len]; }
function lerpQuat(a: Quat, b: Quat, t: number): Quat { return normalizeQuat([lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t), lerp(a[3], b[3], t)]); }

export function sampleKeyframes<T extends Vec3 | Quat>(keyframes: readonly { time: number; value: T }[], time: number, interpolation: 'step' | 'linear'): T {
  if (!keyframes.length) throw new Error('Animation channel has no keyframes.');
  const sorted = [...keyframes].sort((a, b) => a.time - b.time);
  if (time <= sorted[0].time) return sorted[0].value;
  if (time >= sorted[sorted.length - 1].time) return sorted[sorted.length - 1].value;
  const rightIndex = sorted.findIndex((keyframe) => keyframe.time >= time);
  const left = sorted[rightIndex - 1];
  const right = sorted[rightIndex];
  if (interpolation === 'step') return left.value;
  const alpha = (time - left.time) / Math.max(0.00001, right.time - left.time);
  return (left.value.length === 4 ? lerpQuat(left.value as Quat, right.value as Quat, alpha) : lerpVec3(left.value as Vec3, right.value as Vec3, alpha)) as T;
}

export function evaluateAnimationClip(clip: RenderAnimationClip, time: number): RenderAnimationPose[] {
  const wrapped = clip.duration > 0 ? time % clip.duration : time;
  const poseByObject = new Map<string, Partial<RenderAnimationPose> & { objectId: string }>();
  for (const channel of clip.channels) {
    const pose = poseByObject.get(channel.objectId) ?? { objectId: channel.objectId };
    if (channel.path === 'rotation') pose.rotation = sampleKeyframes(channel.keyframes as RenderKeyframeQuat[], wrapped, channel.interpolation);
    if (channel.path === 'translation') pose.translation = sampleKeyframes(channel.keyframes as RenderKeyframeVec3[], wrapped, channel.interpolation);
    if (channel.path === 'scale') pose.scale = sampleKeyframes(channel.keyframes as RenderKeyframeVec3[], wrapped, channel.interpolation);
    poseByObject.set(channel.objectId, pose);
  }
  return [...poseByObject.values()].map((pose) => {
    const translation = pose.translation ?? [0, 0, 0];
    const rotation = pose.rotation ?? [0, 0, 0, 1];
    const scale = pose.scale ?? [1, 1, 1];
    return { ...pose, translation, rotation, scale, matrix: mat4Mul(mat4Mul(mat4Translation(translation), mat4FromQuat(rotation)), mat4Scale(scale)) } as RenderAnimationPose;
  });
}
