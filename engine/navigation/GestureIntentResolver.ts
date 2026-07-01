import type { GestureFrame } from './GestureFrameComputer';
import type { Quaternion } from './quaternion';
import { fromGestureSwipe, identityQuaternion, multiply, normalize } from './quaternion';






export const PINCH_IN_THRESHOLD = 12;
export const PINCH_OUT_THRESHOLD = -12;
export const SWIPE_THRESHOLD = 8;
export const HOLD_THRESHOLD_MS = 420;


export const GESTURE_SENSITIVITY = 0.01; 


export enum GestureIntent {
  NONE = 'NONE',
  ROTATE_X = 'ROTATE_X',
  ROTATE_Y = 'ROTATE_Y',
  ZOOM_IN = 'ZOOM_IN',
  ZOOM_OUT = 'ZOOM_OUT',
  HOLD = 'HOLD',
}

export interface ResolvedIntent {
  intent: GestureIntent;
  magnitude: number; 
  quaternion?: Quaternion; 
}


export class GestureIntentResolver {
  private gestureStartTime: number;
  private isGestureActive: boolean;
  private currentOrientation: Quaternion;
  private frameCount: number;

  constructor() {
    this.gestureStartTime = 0;
    this.isGestureActive = false;
    this.currentOrientation = identityQuaternion();
    this.frameCount = 0;
  }

  
  isActive(): boolean {
    return this.isGestureActive;
  }

  
  startGesture(now: number): void {
    this.gestureStartTime = now;
    this.isGestureActive = true;
  }

  
  endGesture(): void {
    this.isGestureActive = false;
    this.gestureStartTime = 0;
  }

  
  getOrientation(): Quaternion {
    return this.currentOrientation;
  }

  
  private applyDriftCorrection(normalizationInterval: number = 60): void {
    this.frameCount++;

    if (this.frameCount >= normalizationInterval) {
      this.currentOrientation = normalize(this.currentOrientation);
      this.frameCount = 0;
    }
  }

  
  resolve(frame: GestureFrame, now: number): ResolvedIntent {
    if (!this.isGestureActive) {
      return { intent: GestureIntent.NONE, magnitude: 0 };
    }

    
    this.applyDriftCorrection();

    
    if (Math.abs(frame.pinchDelta) > 0) {
      if (frame.pinchDelta > PINCH_IN_THRESHOLD) {
        return { intent: GestureIntent.ZOOM_IN, magnitude: frame.pinchDelta };
      }
      if (frame.pinchDelta < PINCH_OUT_THRESHOLD) {
        return { intent: GestureIntent.ZOOM_OUT, magnitude: Math.abs(frame.pinchDelta) };
      }
    }

    
    const absX = Math.abs(frame.dx);
    const absY = Math.abs(frame.dy);

    if (absX > SWIPE_THRESHOLD || absY > SWIPE_THRESHOLD) {
      
      
      const gestureQuaternion = fromGestureSwipe(frame.dx, frame.dy, GESTURE_SENSITIVITY);

      
      
      this.currentOrientation = multiply(gestureQuaternion, this.currentOrientation);

      
      if (absX > absY) {
        return {
          intent: GestureIntent.ROTATE_X,
          magnitude: frame.dx > 0 ? 1 : -1,
          quaternion: gestureQuaternion,
        };
      } else {
        return {
          intent: GestureIntent.ROTATE_Y,
          magnitude: frame.dy > 0 ? 1 : -1,
          quaternion: gestureQuaternion,
        };
      }
    }

    
    const elapsed = now - this.gestureStartTime;
    if (elapsed > HOLD_THRESHOLD_MS && absX < 2 && absY < 2) {
      return { intent: GestureIntent.HOLD, magnitude: elapsed };
    }

    
    return { intent: GestureIntent.NONE, magnitude: 0 };
  }

  
  cancel(): void {
    this.isGestureActive = false;
    this.gestureStartTime = 0;
  }
}
