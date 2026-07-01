import type { Vector3 } from './manifold';
import { SINGULARITY_THRESHOLD } from './manifold';







export interface AnchorFieldConfig {
  strength: number;       
  homePosition: Vector3;  
  maxDistance: number;    
  idleThreshold: number;  
}

export const DEFAULT_ANCHOR_CONFIG: AnchorFieldConfig = {
  strength: 1.0,
  homePosition: { x: 0, y: 0, z: 0 },
  maxDistance: 10.0,
  idleThreshold: 3000, 
};


export function computePotential(
  position: Vector3,
  config: AnchorFieldConfig = DEFAULT_ANCHOR_CONFIG
): number {
  const { strength, homePosition } = config;

  
  const dx = position.x - homePosition.x;
  const dy = position.y - homePosition.y;
  const dz = position.z - homePosition.z;
  const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

  
  if (distance < SINGULARITY_THRESHOLD) {
    return 0;
  }

  
  return strength / distance;
}


export function computeForceField(
  position: Vector3,
  config: AnchorFieldConfig = DEFAULT_ANCHOR_CONFIG
): Vector3 {
  const { strength, homePosition, maxDistance } = config;

  
  const dx = position.x - homePosition.x;
  const dy = position.y - homePosition.y;
  const dz = position.z - homePosition.z;
  const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

  
  if (distance < SINGULARITY_THRESHOLD) {
    return { x: 0, y: 0, z: 0 };
  }

  
  const effectiveDistance = Math.min(distance, maxDistance);
  const distanceCubed = effectiveDistance * effectiveDistance * effectiveDistance;

  
  
  const forceMagnitude = strength / distanceCubed;

  return {
    x: -forceMagnitude * dx,
    y: -forceMagnitude * dy,
    z: -forceMagnitude * dz,
  };
}


export interface RecenterState {
  lastActivityTime: number;
  isIdle: boolean;
}

export function shouldApplyRecenter(
  state: RecenterState,
  currentTime: number,
  config: AnchorFieldConfig = DEFAULT_ANCHOR_CONFIG
): boolean {
  const idleDuration = currentTime - state.lastActivityTime;
  return idleDuration > config.idleThreshold;
}


export function updateActivityTime(currentTime: number): RecenterState {
  return {
    lastActivityTime: currentTime,
    isIdle: false,
  };
}


export function checkIdleStatus(
  state: RecenterState,
  currentTime: number,
  config: AnchorFieldConfig = DEFAULT_ANCHOR_CONFIG
): RecenterState {
  const idleDuration = currentTime - state.lastActivityTime;
  return {
    ...state,
    isIdle: idleDuration > config.idleThreshold,
  };
}


export function computeAttractorForce(
  position: Vector3,
  target: Vector3,
  strength: number = 1.0,
  minDistance: number = 0.1
): Vector3 {
  
  const dx = target.x - position.x;
  const dy = target.y - position.y;
  const dz = target.z - position.z;
  const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

  
  if (distance < minDistance) {
    return { x: 0, y: 0, z: 0 };
  }

  
  const forceMagnitude = strength / (distance * distance);

  
  return {
    x: (dx / distance) * forceMagnitude,
    y: (dy / distance) * forceMagnitude,
    z: (dz / distance) * forceMagnitude,
  };
}


export function applyForceToVelocity(
  velocity: Vector3,
  force: Vector3,
  dt: number,
  mass: number = 1.0
): Vector3 {
  
  
  return {
    x: velocity.x + (force.x / mass) * dt,
    y: velocity.y + (force.y / mass) * dt,
    z: velocity.z + (force.z / mass) * dt,
  };
}


export function computeRecenterInterpolation(
  distance: number,
  minDistance: number = 0.5,
  maxDistance: number = 5.0
): number {
  
  if (distance <= minDistance) return 0;
  if (distance >= maxDistance) return 1;

  
  const t = (distance - minDistance) / (maxDistance - minDistance);

  
  return t * t * (3 - 2 * t);
}


export function distanceToHome(
  position: Vector3,
  config: AnchorFieldConfig = DEFAULT_ANCHOR_CONFIG
): number {
  const { homePosition } = config;

  const dx = position.x - homePosition.x;
  const dy = position.y - homePosition.y;
  const dz = position.z - homePosition.z;

  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
