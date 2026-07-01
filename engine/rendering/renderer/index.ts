


export function createRenderer(type: 'canvas2d', canvas: HTMLCanvasElement): import('./Canvas2DRenderer').Canvas2DRenderer {
  if (type === 'canvas2d') {
    const { Canvas2DRenderer } = require('./Canvas2DRenderer') as typeof import('./Canvas2DRenderer');
    return new Canvas2DRenderer(canvas);
  }
  
  throw new Error(`createRenderer: unsupported renderer type '${String(type)}'`);
}

export { Canvas2DRenderer } from './Canvas2DRenderer';
export { FrustumCuller } from './FrustumCuller';
export type { Rect } from './FrustumCuller';
export type { IRenderer, TextStyle } from './IRenderer';
