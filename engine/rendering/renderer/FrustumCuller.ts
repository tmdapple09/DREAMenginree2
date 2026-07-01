


export interface Rect {
  
  x: number;
  
  y: number;
  
  w: number;
  
  h: number;
}


export class FrustumCuller {
  
  isVisible(x: number, y: number, w: number, h: number, viewport: Rect): boolean {
    
    if (x + w < viewport.x) return false;
    if (x     > viewport.x + viewport.w) return false;
    if (y + h < viewport.y) return false;
    if (y     > viewport.y + viewport.h) return false;
    return true;
  }
}
