




export type DrEamsAction = "idle" | "scan" | "fall" | "jump";

type SpriteSheet = {
  image: HTMLImageElement;
  frameW: number;
  frameH: number;
  cols: number;
  rows: number;
  totalFrames: number; 
};

type ActionDef = {
  name: DrEamsAction;
  frames: number[];      
  fps: number;           
  loop: boolean;
  
  holdLastFrameMs?: number;
};

type AnimatorOptions = {
  canvas: HTMLCanvasElement;
  
  renderOnlyWhenDirty?: boolean;
  
  devicePixelRatio?: number;
};

export class DrEamsAnimator {
  private ctx: CanvasRenderingContext2D;
  private sheet: SpriteSheet;

  private actions: Record<DrEamsAction, ActionDef>;
  private current: ActionDef;
  private frameIdx = 0;

  private playing = false;
  private rafId: number | null = null;
  private lastTs = 0;
  private acc = 0;

  private dirty = true;
  private dpr: number;
  private renderOnlyWhenDirty: boolean;

  
  private activeUntilTs = 0;

  constructor(sheet: SpriteSheet, actions: Record<DrEamsAction, ActionDef>, opts: AnimatorOptions) {
    this.sheet = sheet;
    this.actions = actions;
    this.current = actions.idle;

    const ctx = opts.canvas.getContext("2d", { alpha: true })!;
    this.ctx = ctx;

    this.renderOnlyWhenDirty = opts.renderOnlyWhenDirty ?? true;
    this.dpr = opts.devicePixelRatio ?? (typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1);

    this.configureCanvas(opts.canvas);
    this.draw(); 
  }

  private configureCanvas(canvas: HTMLCanvasElement) {
    
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(rect.width * this.dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * this.dpr));
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.dirty = true;
  }

  
  public resize() {
    this.configureCanvas(this.ctx.canvas);
    this.requestDraw();
  }

  public setAction(name: DrEamsAction) {
    const next = this.actions[name];
    if (!next) return;

    
    if (this.current.name === name && this.current.loop) return;

    this.current = next;
    this.frameIdx = 0;
    this.acc = 0;
    this.lastTs = 0;
    this.markActive();
    this.play();
  }

  public play() {
    if (this.playing) return;
    this.playing = true;
    this.lastTs = 0;
    this.rafId = requestAnimationFrame(this.tick);
  }

  public stop() {
    this.playing = false;
    if (this.rafId != null) cancelAnimationFrame(this.rafId);
    this.rafId = null;
  }

  private markActive() {
    
    this.activeUntilTs = performance.now() + 1200;
  }

  private getTargetFps() {
    const now = performance.now();
    
    return now < this.activeUntilTs ? 60 : 30;
  }

  private tick = (ts: number) => {
    if (!this.playing) return;

    if (this.lastTs === 0) this.lastTs = ts;
    const dt = ts - this.lastTs;
    this.lastTs = ts;

    
    
    const policyFps = this.getTargetFps();
    const dtCap = 1000 / policyFps;

    this.acc += dt;
    while (this.acc >= dtCap) {
      this.acc -= dtCap;
      this.step(dtCap);
    }

    if (!this.renderOnlyWhenDirty || this.dirty) {
      this.draw();
      this.dirty = false;
    }

    
    if (this.renderOnlyWhenDirty && this.current.name === "idle") {
      
      if (!this.current.loop) this.stop();
    } else {
      this.rafId = requestAnimationFrame(this.tick);
    }
  };

  private step(_dtMs: number) {
    const { frames, fps, loop, holdLastFrameMs } = this.current;

    const frameTime = 1000 / fps;

    
    
    const atLast = this.frameIdx >= frames.length - 1;

    if (atLast) {
      if (holdLastFrameMs && holdLastFrameMs > 0) {
        
        
        this.acc -= Math.min(this.acc, holdLastFrameMs);
      }

      if (loop) {
        this.frameIdx = 0;
        this.requestDraw();
      } else {
        
        if (this.current.name !== "idle") {
          this.setAction("idle");
        } else {
          this.requestDraw();
        }
      }
      return;
    }

    
    
    
    
    const gate = frameTime / (1000 / this.getTargetFps());
    
    
    const stepNumber = Math.floor(performance.now() / (1000 / this.getTargetFps()));
    const shouldAdvance = gate <= 1 ? true : (stepNumber % Math.round(gate) === 0);

    if (shouldAdvance) {
      this.frameIdx++;
      this.requestDraw();
    }
  }

  private requestDraw() {
    this.dirty = true;
    if (this.renderOnlyWhenDirty && !this.playing) this.play();
  }

  private draw() {
    const canvas = this.ctx.canvas;
    const w = canvas.getBoundingClientRect().width;
    const h = canvas.getBoundingClientRect().height;

    this.ctx.clearRect(0, 0, w, h);

    const frame = this.current.frames[this.frameIdx] ?? 0;
    const sx = (frame % this.sheet.cols) * this.sheet.frameW;
    const sy = Math.floor(frame / this.sheet.cols) * this.sheet.frameH;

    
    const scale = Math.min(w / this.sheet.frameW, h / this.sheet.frameH);
    const dw = this.sheet.frameW * scale;
    const dh = this.sheet.frameH * scale;
    const dx = (w - dw) / 2;
    const dy = (h - dh) / 2;

    this.ctx.imageSmoothingEnabled = true;
    this.ctx.drawImage(
      this.sheet.image,
      sx, sy, this.sheet.frameW, this.sheet.frameH,
      dx, dy, dw, dh
    );
  }

  
  public handlePointer(xPx: number, yPx: number) {
    this.markActive();

    const rect = this.ctx.canvas.getBoundingClientRect();
    const y = (yPx - rect.top) / rect.height;

    
    if (y < 0.35) {
      this.setAction("scan");
      return;
    }
    if (y < 0.70) {
      this.setAction("fall");
      return;
    }
    this.setAction("jump");
  }
}
