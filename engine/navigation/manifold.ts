



export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface SphericalCoords {
  theta: number; 
  phi: number;   
}


export const VECTOR_ZERO_THRESHOLD = 1e-10;
export const SINGULARITY_THRESHOLD = 1e-6;


export function projectCubicToSphere(
  cubePos: Vector3,
  lambda: number
): Vector3 {
  
  lambda = Math.max(0, Math.min(1, lambda));

  
  const magnitude = Math.sqrt(
    cubePos.x * cubePos.x +
    cubePos.y * cubePos.y +
    cubePos.z * cubePos.z
  );

  
  if (magnitude < VECTOR_ZERO_THRESHOLD) {
    return { x: 0, y: 0, z: 0 };
  }

  const spherePos: Vector3 = {
    x: cubePos.x / magnitude,
    y: cubePos.y / magnitude,
    z: cubePos.z / magnitude,
  };

  
  return {
    x: cubePos.x + lambda * (spherePos.x - cubePos.x),
    y: cubePos.y + lambda * (spherePos.y - cubePos.y),
    z: cubePos.z + lambda * (spherePos.z - cubePos.z),
  };
}


export function computeLambda(depth: number, maxDepth: number = 5): number {
  
  const normalizedDepth = Math.min(depth / maxDepth, 1);

  
  return normalizedDepth;
}


export function cartesianToSpherical(v: Vector3): SphericalCoords {
  const r = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);

  if (r < VECTOR_ZERO_THRESHOLD) {
    return { theta: 0, phi: 0 };
  }

  
  const theta = Math.acos(Math.max(-1, Math.min(1, v.z / r)));

  
  const phi = Math.atan2(v.y, v.x);

  
  const normalizedPhi = phi < 0 ? phi + 2 * Math.PI : phi;

  return { theta, phi: normalizedPhi };
}


export function sphericalToCartesian(coords: SphericalCoords, radius: number = 1): Vector3 {
  return {
    x: radius * Math.sin(coords.theta) * Math.cos(coords.phi),
    y: radius * Math.sin(coords.theta) * Math.sin(coords.phi),
    z: radius * Math.cos(coords.theta),
  };
}


export function smoothstep(edge0: number, edge1: number, x: number): number {
  
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));

  
  return t * t * (3 - 2 * t);
}


export function distanceToEdge(faceX: number, faceY: number): number {
  
  const distLeft = faceX + 1;    
  const distRight = 1 - faceX;   
  const distBottom = faceY + 1;  
  const distTop = 1 - faceY;     

  
  return Math.min(distLeft, distRight, distBottom, distTop);
}


export function blendFaceEdge(
  faceA: Vector3,
  faceB: Vector3,
  edgeDistance: number,
  blendWidth: number = 0.1
): Vector3 {
  
  const weight = smoothstep(0, blendWidth, edgeDistance);

  
  return {
    x: faceA.x + weight * (faceB.x - faceA.x),
    y: faceA.y + weight * (faceB.y - faceA.y),
    z: faceA.z + weight * (faceB.z - faceA.z),
  };
}


export function computeSlotPosition(
  slotIndex: number,
  baseRadius: number = 0.6,
  totalSlots: number = 8
): { x: number; y: number } {
  
  const slot = ((slotIndex % totalSlots) + totalSlots) % totalSlots;

  
  const alpha = slot * (2 * Math.PI / totalSlots);

  
  return {
    x: baseRadius * Math.cos(alpha),
    y: baseRadius * Math.sin(alpha),
  };
}


export function computeWidgetCurvature(
  x: number,
  y: number,
  curvatureConstant: number = 0.1
): number {
  return curvatureConstant * (x * x + y * y);
}


export function normalizeVector(v: Vector3): Vector3 {
  const length = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);

  if (length < VECTOR_ZERO_THRESHOLD) {
    return { x: 0, y: 0, z: 0 };
  }

  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}


export function vectorMagnitude(v: Vector3): number {
  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
}


export function dotProduct(v1: Vector3, v2: Vector3): number {
  return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
}


export function crossProduct(v1: Vector3, v2: Vector3): Vector3 {
  return {
    x: v1.y * v2.z - v1.z * v2.y,
    y: v1.z * v2.x - v1.x * v2.z,
    z: v1.x * v2.y - v1.y * v2.x,
  };
}
