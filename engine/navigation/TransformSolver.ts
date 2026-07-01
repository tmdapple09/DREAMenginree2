import { computeLambda, computeSlotPosition, projectCubicToSphere } from './manifold';
import type { NavStateBuffer } from './NavStateBuffer';
import type { Quaternion } from './quaternion';
import { identityQuaternion, toRotationMatrix } from './quaternion';





export interface TransformOutput {
  tx: number;
  ty: number;
  tz: number;
  scale: number;
  opacity: number;
  rotation?: Quaternion;
  rotationMatrix?: number[][];
}

export interface ViewportMetrics {
  width: number;
  height: number;
}


export class TransformSolver {
  private currentOrientation: Quaternion;

  constructor() {
    this.currentOrientation = identityQuaternion();
  }

  
  setOrientation(q: Quaternion): void {
    this.currentOrientation = q;
  }

  
  getOrientation(): Quaternion {
    return this.currentOrientation;
  }

  
  solve(
    navState: NavStateBuffer,
    viewport: ViewportMetrics
  ): TransformOutput {
    const { layer, face, depth, slot } = navState;

    
    let tx = 0;
    let ty = 0;
    let tz = 0;
    let scale = 1;
    let opacity = 1;

    
    const lambda = computeLambda(depth, 5);

    
    
    const cubeX = -face;
    const cubeY = 0;
    const cubeZ = depth;

    
    const projectedPos = projectCubicToSphere(
      { x: cubeX, y: cubeY, z: cubeZ },
      lambda
    );

    
    tx = projectedPos.x * viewport.width;
    ty = projectedPos.y * viewport.height;
    tz = projectedPos.z * 100; 

    
    if (slot >= 0 && slot <= 7) {
      const slotPos = computeSlotPosition(slot);
      tx += slotPos.x * viewport.width * 0.3;
      ty += slotPos.y * viewport.height * 0.3;
    }

    
    
    const fovAlpha = 0.2;
    const fovScale = 1 / (1 + fovAlpha * depth);
    scale = fovScale;

    
    if (depth === 0) {
      scale *= 1.0;
    } else if (depth === 1) {
      scale *= 1.1;
    } else {
      scale *= 1.2;
    }

    
    if (layer === 0) { 
      opacity = 1;
    } else if (layer === 2) { 
      opacity = depth === 1 ? 1 : 0.95;
    }

    
    const rotationMatrix = toRotationMatrix(this.currentOrientation);

    return {
      tx,
      ty,
      tz,
      scale,
      opacity,
      rotation: this.currentOrientation,
      rotationMatrix,
    };
  }

  
  apply(element: HTMLElement, transform: TransformOutput): void {
    
    let transformStr = `translate3d(${transform.tx}px, ${transform.ty}px, ${transform.tz}px)`;

    
    if (transform.rotationMatrix) {
      const m = transform.rotationMatrix;
      
      
      const matrix3d = [
        m[0][0], m[0][1], m[0][2], 0,
        m[1][0], m[1][1], m[1][2], 0,
        m[2][0], m[2][1], m[2][2], 0,
        0, 0, 0, 1
      ].join(',');
      transformStr += ` matrix3d(${matrix3d})`;
    }

    
    transformStr += ` scale(${transform.scale})`;

    
    element.style.transform = transformStr;
    element.style.opacity = transform.opacity.toString();
  }

  
  static prepareElement(element: HTMLElement): void {
    element.style.willChange = 'transform';
    element.style.contain = 'paint layout';
  }
}
