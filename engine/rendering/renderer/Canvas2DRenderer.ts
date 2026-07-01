import { FrustumCuller, type Rect } from './FrustumCuller';
import type { IRenderer, TextStyle } from './IRenderer';



export class Canvas2DRenderer implements IRenderer {
  
  readonly ctx: CanvasRenderingContext2D;

  private readonly _canvas: HTMLCanvasElement;
  private readonly _culler = new FrustumCuller();
  private _viewport: Rect;

  private _totalDraws = 0;
  private _skippedDraws = 0;

  constructor(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Canvas2DRenderer: failed to obtain 2D rendering context');
    }
    this._canvas = canvas;
    this.ctx = ctx;
    this._viewport = { x: 0, y: 0, w: canvas.width, h: canvas.height };
  }

  get width(): number { return this._canvas.width; }
  get height(): number { return this._canvas.height; }

  
  setViewport(vp: Rect): void {
    this._viewport = { ...vp };
  }

  
  clear(): void {
    this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._totalDraws = 0;
    this._skippedDraws = 0;
  }

  
  present(): void {
    
  }

  
  dispose(): void {
    
  }

  
  drawRect(x: number, y: number, w: number, h: number, color: string): void {
    this._totalDraws++;
    if (!this._culler.isVisible(x, y, w, h, this._viewport)) {
      this._skippedDraws++;
      return;
    }
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  }

  
  drawCircle(x: number, y: number, r: number, color: string): void {
    this._totalDraws++;
    if (!this._culler.isVisible(x - r, y - r, r * 2, r * 2, this._viewport)) {
      this._skippedDraws++;
      return;
    }
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, Math.PI * 2);
    this.ctx.fill();
  }

  
  drawText(x: number, y: number, text: string, style?: TextStyle): void {
    this._totalDraws++;
    this.ctx.fillStyle   = style?.fillStyle    ?? '#ffffff';
    this.ctx.font        = style?.font         ?? '12px monospace';
    this.ctx.textAlign   = style?.textAlign    ?? 'left';
    this.ctx.textBaseline = style?.textBaseline ?? 'alphabetic';
    this.ctx.fillText(text, x, y);
  }

  
  get cullStats(): { total: number; skipped: number; ratio: number } {
    const ratio = this._totalDraws > 0
      ? this._skippedDraws / this._totalDraws
      : 0;
    return { total: this._totalDraws, skipped: this._skippedDraws, ratio };
  }
}
