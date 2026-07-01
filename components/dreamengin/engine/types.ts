import type { UnitComplex } from './math';



export type Depth = 0 | 1;

export type FlightMode = 'in' | 'out';

export interface FlightState {
  active: boolean;
  mode: FlightMode;
  
  thrust: number;
  
  steerDelta: number;
}

export interface EngineState {
  
  x: number;
  y: number;

  
  scale: number;

  
  depth: Depth;

  
  yawQ: UnitComplex;

  flight: FlightState;

  
  overlayLock: boolean;
}
