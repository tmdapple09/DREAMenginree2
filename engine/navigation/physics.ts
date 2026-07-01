





export interface PhysicsState {
  position: number;    
  velocity: number;    
  acceleration: number; 
}

export interface PhysicsConfig {
  damping: number;           
  naturalFrequency: number;  
  frictionConstant: number;  
}


export const DEFAULT_PHYSICS_CONFIG: PhysicsConfig = {
  damping: 1.0,              
  naturalFrequency: 10.0,    
  frictionConstant: 5.0,     
};


export function computeAcceleration(
  state: PhysicsState,
  force: number,
  config: PhysicsConfig = DEFAULT_PHYSICS_CONFIG
): number {
  const { damping, naturalFrequency } = config;

  
  return (
    force -
    2 * damping * naturalFrequency * state.velocity -
    naturalFrequency * naturalFrequency * state.position
  );
}


export function updatePhysicsState(
  state: PhysicsState,
  force: number,
  dt: number,
  config: PhysicsConfig = DEFAULT_PHYSICS_CONFIG
): PhysicsState {
  const acceleration = computeAcceleration(state, force, config);

  return {
    position: state.position + state.velocity * dt,
    velocity: state.velocity + acceleration * dt,
    acceleration,
  };
}


export function applyInertialDecay(
  velocity: number,
  dt: number,
  config: PhysicsConfig = DEFAULT_PHYSICS_CONFIG
): number {
  const { frictionConstant } = config;

  
  return velocity * Math.exp(-frictionConstant * dt);
}


export const SNAP_THRESHOLD = 0.02; 

export function shouldSnapToGrid(position: number): boolean {
  return Math.abs(position) < SNAP_THRESHOLD;
}


export function snapToGrid(
  position: number,
  gridSpacing: number = Math.PI / 2
): number {
  const gridPoint = Math.round(position / gridSpacing) * gridSpacing;
  return gridPoint;
}


export function verletIntegration(
  currentPos: number,
  previousPos: number,
  acceleration: number,
  dt: number
): number {
  
  return 2 * currentPos - previousPos + acceleration * dt * dt;
}


export function rk4Integration(
  state: PhysicsState,
  force: number,
  dt: number,
  config: PhysicsConfig = DEFAULT_PHYSICS_CONFIG
): PhysicsState {
  
  const k1v = computeAcceleration(state, force, config);

  const k2State = {
    position: state.position + state.velocity * dt / 2,
    velocity: state.velocity + k1v * dt / 2,
    acceleration: 0,
  };
  const k2v = computeAcceleration(k2State, force, config);

  const k3State = {
    position: state.position + k2State.velocity * dt / 2,
    velocity: state.velocity + k2v * dt / 2,
    acceleration: 0,
  };
  const k3v = computeAcceleration(k3State, force, config);

  const k4State = {
    position: state.position + k3State.velocity * dt,
    velocity: state.velocity + k3v * dt,
    acceleration: 0,
  };
  const k4v = computeAcceleration(k4State, force, config);

  
  const newVelocity = state.velocity + (dt / 6) * (k1v + 2 * k2v + 2 * k3v + k4v);
  const newPosition = state.position + (dt / 6) * (
    state.velocity + 2 * k2State.velocity + 2 * k3State.velocity + k4State.velocity
  );

  return {
    position: newPosition,
    velocity: newVelocity,
    acceleration: k1v,
  };
}


export function gestureToForce(
  gestureMagnitude: number,
  impulseFactor: number = 100.0
): number {
  return gestureMagnitude * impulseFactor;
}


export function applyDamping(
  velocity: number,
  dampingFactor: number = 0.9
): number {
  return velocity * dampingFactor;
}


export function hasSettled(
  state: PhysicsState,
  positionThreshold: number = 0.001,
  velocityThreshold: number = 0.001
): boolean {
  return (
    Math.abs(state.position) < positionThreshold &&
    Math.abs(state.velocity) < velocityThreshold
  );
}


export function computeSpringForce(
  currentPosition: number,
  targetPosition: number,
  springConstant: number = 1.0
): number {
  
  return -springConstant * (currentPosition - targetPosition);
}
