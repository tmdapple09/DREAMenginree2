import { VECTOR_ZERO_THRESHOLD } from './manifold';






export interface Quaternion {
  w: number; 
  x: number; 
  y: number; 
  z: number; 
}


export function identityQuaternion(): Quaternion {
  return { w: 1, x: 0, y: 0, z: 0 };
}


export function fromAxisAngle(axis: { x: number; y: number; z: number }, angle: number): Quaternion {
  const halfAngle = angle / 2;
  const sinHalf = Math.sin(halfAngle);
  const cosHalf = Math.cos(halfAngle);

  return {
    w: cosHalf,
    x: axis.x * sinHalf,
    y: axis.y * sinHalf,
    z: axis.z * sinHalf,
  };
}


export function fromGestureSwipe(dx: number, dy: number, sensitivity: number = 0.01): Quaternion {
  
  const magnitude = Math.sqrt(dx * dx + dy * dy);

  if (magnitude < 0.001) {
    return identityQuaternion();
  }

  
  
  const axisX = dy;
  const axisY = -dx;
  const axisZ = 0;

  
  const axisLength = Math.sqrt(axisX * axisX + axisY * axisY + axisZ * axisZ);
  const normalizedAxis = {
    x: axisX / axisLength,
    y: axisY / axisLength,
    z: axisZ / axisLength,
  };

  
  const angle = sensitivity * magnitude;

  return fromAxisAngle(normalizedAxis, angle);
}


export function multiply(q1: Quaternion, q2: Quaternion): Quaternion {
  return {
    w: q1.w * q2.w - q1.x * q2.x - q1.y * q2.y - q1.z * q2.z,
    x: q1.w * q2.x + q1.x * q2.w + q1.y * q2.z - q1.z * q2.y,
    y: q1.w * q2.y - q1.x * q2.z + q1.y * q2.w + q1.z * q2.x,
    z: q1.w * q2.z + q1.x * q2.y - q1.y * q2.x + q1.z * q2.w,
  };
}


export function normalize(q: Quaternion): Quaternion {
  const length = Math.sqrt(q.w * q.w + q.x * q.x + q.y * q.y + q.z * q.z);

  
  if (length < VECTOR_ZERO_THRESHOLD) {
    return identityQuaternion();
  }

  return {
    w: q.w / length,
    x: q.x / length,
    y: q.y / length,
    z: q.z / length,
  };
}


export function magnitude(q: Quaternion): number {
  return Math.sqrt(q.w * q.w + q.x * q.x + q.y * q.y + q.z * q.z);
}


export function isValid(q: Quaternion): boolean {
  return (
    !isNaN(q.w) && !isNaN(q.x) && !isNaN(q.y) && !isNaN(q.z) &&
    isFinite(q.w) && isFinite(q.x) && isFinite(q.y) && isFinite(q.z)
  );
}


export function toRotationMatrix(q: Quaternion): number[][] {
  const { w, x, y, z } = q;

  return [
    [
      1 - 2 * (y * y + z * z),
      2 * (x * y - w * z),
      2 * (x * z + w * y),
    ],
    [
      2 * (x * y + w * z),
      1 - 2 * (x * x + z * z),
      2 * (y * z - w * x),
    ],
    [
      2 * (x * z - w * y),
      2 * (y * z + w * x),
      1 - 2 * (x * x + y * y),
    ],
  ];
}


export function rotateVector(q: Quaternion, v: { x: number; y: number; z: number }): { x: number; y: number; z: number } {
  
  const vq: Quaternion = { w: 0, x: v.x, y: v.y, z: v.z };

  
  const qConj: Quaternion = { w: q.w, x: -q.x, y: -q.y, z: -q.z };

  const temp = multiply(q, vq);
  const result = multiply(temp, qConj);

  return { x: result.x, y: result.y, z: result.z };
}


export function slerp(q1: Quaternion, q2: Quaternion, t: number): Quaternion {
  
  t = Math.max(0, Math.min(1, t));

  
  let dot = q1.w * q2.w + q1.x * q2.x + q1.y * q2.y + q1.z * q2.z;

  
  let q2Copy = { ...q2 };
  if (dot < 0) {
    dot = -dot;
    q2Copy = { w: -q2.w, x: -q2.x, y: -q2.y, z: -q2.z };
  }

  
  if (dot > 0.9995) {
    return normalize({
      w: q1.w + t * (q2Copy.w - q1.w),
      x: q1.x + t * (q2Copy.x - q1.x),
      y: q1.y + t * (q2Copy.y - q1.y),
      z: q1.z + t * (q2Copy.z - q1.z),
    });
  }

  
  const theta = Math.acos(dot);
  const sinTheta = Math.sin(theta);
  const w1 = Math.sin((1 - t) * theta) / sinTheta;
  const w2 = Math.sin(t * theta) / sinTheta;

  return {
    w: w1 * q1.w + w2 * q2Copy.w,
    x: w1 * q1.x + w2 * q2Copy.x,
    y: w1 * q1.y + w2 * q2Copy.y,
    z: w1 * q1.z + w2 * q2Copy.z,
  };
}


export function toEulerAngles(q: Quaternion): { pitch: number; yaw: number; roll: number } {
  const { w, x, y, z } = q;

  
  const sinr_cosp = 2 * (w * x + y * z);
  const cosr_cosp = 1 - 2 * (x * x + y * y);
  const roll = Math.atan2(sinr_cosp, cosr_cosp);

  
  const sinp = 2 * (w * y - z * x);
  const pitch = Math.abs(sinp) >= 1
    ? Math.sign(sinp) * Math.PI / 2 
    : Math.asin(sinp);

  
  const siny_cosp = 2 * (w * z + x * y);
  const cosy_cosp = 1 - 2 * (y * y + z * z);
  const yaw = Math.atan2(siny_cosp, cosy_cosp);

  return { pitch, yaw, roll };
}
