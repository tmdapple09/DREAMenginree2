

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;       
  maxLife: number;
  size: number;
  color: string;
  drag: number;
  gravity: number;
}

export class ParticlePool {
  readonly particles: Particle[] = [];
  constructor(public readonly cap: number = 256) {}

  emit(p: Partial<Particle> & { x: number; y: number }) {
    if (this.particles.length >= this.cap) this.particles.shift();
    this.particles.push({
      x: p.x, y: p.y,
      vx: p.vx ?? 0, vy: p.vy ?? 0,
      life: p.life ?? p.maxLife ?? 0.6,
      maxLife: p.maxLife ?? p.life ?? 0.6,
      size: p.size ?? 2,
      color: p.color ?? '#fff',
      drag: p.drag ?? 0.92,
      gravity: p.gravity ?? 0,
    });
  }

  
  burst(x: number, y: number, count: number, opts: Partial<Particle> & { speed?: number } = {}) {
    const speed = opts.speed ?? 140;
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + Math.random() * 0.6;
      const s = speed * (0.6 + Math.random() * 0.8);
      this.emit({ ...opts, x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s });
    }
  }

  step(dt: number) {
    const arr = this.particles;
    for (let i = arr.length - 1; i >= 0; i--) {
      const p = arr[i];
      p.vx *= Math.pow(p.drag, dt * 60);
      p.vy = p.vy * Math.pow(p.drag, dt * 60) + p.gravity * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.life -= dt;
      if (p.life <= 0) arr.splice(i, 1);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (const p of this.particles) {
      const a = Math.max(0, p.life / p.maxLife);
      ctx.globalAlpha = a;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  clear() { this.particles.length = 0; }
}


export class ScreenShake {
  x = 0;
  y = 0;
  amp = 0;
  decay = 6;
  constructor(decay = 6) { this.decay = decay; }
  kick(amp: number) { this.amp = Math.max(this.amp, amp); }
  step(dt: number) {
    this.amp *= Math.exp(-this.decay * dt);
    if (this.amp < 0.05) { this.amp = 0; this.x = 0; this.y = 0; return; }
    const a = (Math.random() * 2 - 1) * this.amp;
    const b = (Math.random() * 2 - 1) * this.amp;
    this.x = a; this.y = b;
  }
  
  apply(ctx: CanvasRenderingContext2D, scale = 1) { ctx.translate(this.x * scale, this.y * scale); }
}


export function drawDitherFog(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number,
  color: string, density = 0.35, step = 4,
) {
  ctx.fillStyle = color;
  for (let py = y; py < y + h; py += step) {
    for (let px = x; px < x + w; px += step) {
      
      const bx = ((px / step) | 0) & 1;
      const by = ((py / step) | 0) & 1;
      const t = (bx + by * 2) / 4;
      if (t < density) ctx.fillRect(px, py, 1, 1);
    }
  }
}

export interface ParallaxLayer {
   speed: number;
  draw: (ctx: CanvasRenderingContext2D, scrollX: number) => void;
}

export class ParallaxLayers {
  private scroll = 0;
  constructor(public layers: ParallaxLayer[]) {}
  step(dt: number) { this.scroll += dt; }
  
  set(x: number) { this.scroll = x; }
  draw(ctx: CanvasRenderingContext2D) {
    for (const l of this.layers) l.draw(ctx, this.scroll * l.speed);
  }
}


export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
  catch { return false; }
}


export class HitStop {
  private until = 0;
  freeze(ms: number) { const now = (typeof performance !== 'undefined' ? performance.now() : Date.now()); this.until = Math.max(this.until, now + ms); }
  
  scale(now: number): number { return now < this.until ? 0 : 1; }
}


export function motionTrail(ctx: CanvasRenderingContext2D, w: number, h: number, alpha = 0.22, color = '#000') {
  ctx.fillStyle = color;
  ctx.globalAlpha = alpha;
  ctx.fillRect(0, 0, w, h);
  ctx.globalAlpha = 1;
}


export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
export const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
