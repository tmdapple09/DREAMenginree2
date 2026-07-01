



export interface WarpVec2 {
  x: number;
  y: number;
}

export interface WarpParticle {
  
  pos: WarpVec2;
  
  vel: WarpVec2;
  
  life: number;
  
  decay: number;
  
  radius: number;
  
  color: string;
  
  opacity: number;
}


export interface WarpContext {
  
  time: number;
  
  dt: number;
  
  width: number;
  
  height: number;
}


export type WarpKernel = (particle: WarpParticle, ctx: WarpContext) => void;


export type WarpEffect = 'particles' | 'field' | 'flow' | 'orbit';




export const integrateKernel: WarpKernel = (p: WarpParticle, { dt }) => {
  p.pos.x += p.vel.x * dt;
  p.pos.y += p.vel.y * dt;
};


export const decayKernel: WarpKernel = (p: WarpParticle, { dt }) => {
  p.life = Math.max(0, p.life - p.decay * dt);
  p.opacity = p.life;
};


export const gravityKernel: WarpKernel = (p: WarpParticle, { dt }) => {
  const G = 40; 
  p.vel.y += G * dt;
};


export const turbulenceKernel: WarpKernel = (p: WarpParticle, { time, dt }) => {
  const freq = 0.8;
  const amp  = 18;
  p.vel.x += Math.sin(time * freq + p.pos.y * 0.01) * amp * dt;
  p.vel.y += Math.cos(time * freq + p.pos.x * 0.01) * amp * dt;
};


export const spiralKernel: WarpKernel = (p: WarpParticle, { width, height, dt }) => {
  const cx = width  / 2;
  const cy = height / 2;
  const dx = cx - p.pos.x;
  const dy = cy - p.pos.y;
  const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
  const strength = 60;
  
  p.vel.x += (dx / dist) * strength * dt;
  p.vel.y += (dy / dist) * strength * dt;
  
  p.vel.x += (-dy / dist) * strength * 0.6 * dt;
  p.vel.y += ( dx / dist) * strength * 0.6 * dt;
};


export const expansionKernel: WarpKernel = (p: WarpParticle, { width, height, dt }) => {
  const cx = width  / 2;
  const cy = height / 2;
  const dx = p.pos.x - cx;
  const dy = p.pos.y - cy;
  const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
  const strength = 30;
  p.vel.x += (dx / dist) * strength * dt;
  p.vel.y += (dy / dist) * strength * dt;
};


export const flowKernel: WarpKernel = (p: WarpParticle, { time, dt }) => {
  const scale = 0.004;
  const angle = Math.sin(p.pos.x * scale + time * 0.4) *
                Math.cos(p.pos.y * scale + time * 0.3) *
                Math.PI * 2;
  const speed = 55;
  p.vel.x += Math.cos(angle) * speed * dt;
  p.vel.y += Math.sin(angle) * speed * dt;
};


export const dampingKernel: WarpKernel = (p: WarpParticle, { dt }) => {
  const factor = Math.exp(-2.5 * dt);
  p.vel.x *= factor;
  p.vel.y *= factor;
};


export const wrapBoundaryKernel: WarpKernel = (p: WarpParticle, { width, height }) => {
  if (p.pos.x < 0)      p.pos.x += width;
  if (p.pos.x > width)  p.pos.x -= width;
  if (p.pos.y < 0)      p.pos.y += height;
  if (p.pos.y > height) p.pos.y -= height;
};



const EFFECT_KERNELS: Record<WarpEffect, WarpKernel[]> = {
  particles: [gravityKernel, turbulenceKernel, dampingKernel, integrateKernel, decayKernel, wrapBoundaryKernel],
  field:     [expansionKernel, turbulenceKernel, dampingKernel, integrateKernel, decayKernel, wrapBoundaryKernel],
  flow:      [flowKernel, dampingKernel, integrateKernel, decayKernel, wrapBoundaryKernel],
  orbit:     [spiralKernel, dampingKernel, integrateKernel, decayKernel, wrapBoundaryKernel],
};



const PALETTES: Record<WarpEffect, string[]> = {
  particles: ['#7eb8f7', '#a78bfa', '#38bdf8', '#818cf8', '#c084fc'],
  field:     ['#34d399', '#6ee7b7', '#a3e635', '#4ade80', '#86efac'],
  flow:      ['#f472b6', '#fb7185', '#e879f9', '#c084fc', '#f9a8d4'],
  orbit:     ['#fbbf24', '#fb923c', '#f472b6', '#e879f9', '#a78bfa'],
};

function randomColor(effect: WarpEffect): string {
  const palette = PALETTES[effect];
  return palette[Math.floor(Math.random() * palette.length)];
}




export function spawnParticle(effect: WarpEffect, width: number, height: number): WarpParticle {
  let x = Math.random() * width;
  let y = Math.random() * height;
  let vx = (Math.random() - 0.5) * 80;
  let vy = (Math.random() - 0.5) * 80;

  if (effect === 'particles') {
    
    x  = Math.random() * width;
    y  = -4;
    vx = (Math.random() - 0.5) * 40;
    vy = Math.random() * 30 + 10;
  } else if (effect === 'orbit') {
    
    x = width  / 2 + (Math.random() - 0.5) * 80;
    y = height / 2 + (Math.random() - 0.5) * 80;
  }

  return {
    pos:     { x, y },
    vel:     { x: vx, y: vy },
    life:    0.8 + Math.random() * 0.2,
    decay:   0.04 + Math.random() * 0.06,
    radius:  1 + Math.random() * 2.5,
    color:   randomColor(effect),
    opacity: 1,
  };
}



export interface WarpEngineOptions {
  
  maxParticles?: number;
  
  spawnRate?: number;
  
  effect?: WarpEffect;
  
  extraKernels?: WarpKernel[];
}

export class WarpEngine {
  readonly maxParticles: number;
  readonly spawnRate:    number;
  effect:                WarpEffect;

  particles: WarpParticle[] = [];

  private kernels:      WarpKernel[];
  private extraKernels: WarpKernel[];
  private time:         number = 0;
  private spawnAccum:   number = 0;
  private width:        number = 800;
  private height:       number = 600;

  
  private static readonly STRIDE = 6;
  private readonly _numericBuf: Float32Array;
  
  private _cachedSubarray: Float32Array;

  constructor(opts: WarpEngineOptions = {}) {
    this.maxParticles = opts.maxParticles ?? 320;
    this.spawnRate    = opts.spawnRate    ?? 30;
    this.effect       = opts.effect       ?? 'particles';
    this.extraKernels = opts.extraKernels ?? [];
    this.kernels      = [...EFFECT_KERNELS[this.effect], ...this.extraKernels];
    
    
    this._numericBuf     = new Float32Array(this.maxParticles * WarpEngine.STRIDE);
    this._cachedSubarray = this._numericBuf.subarray(0, 0); 
  }

  
  resize(width: number, height: number): void {
    this.width  = width;
    this.height = height;
  }

  
  setEffect(effect: WarpEffect): void {
    this.effect  = effect;
    this.kernels = [...EFFECT_KERNELS[effect], ...this.extraKernels];
  }

  
  reset(): void {
    this.particles  = [];
    this.spawnAccum = 0;
    this.time       = 0;
  }

  
  step(dt: number): void {
    this.time += dt;

    const ctx: WarpContext = {
      time:   this.time,
      dt,
      width:  this.width,
      height: this.height,
    };

    
    for (const p of this.particles) {
      for (const kernel of this.kernels) {
        kernel(p, ctx);
      }
    }

    
    
    const arr = this.particles;
    let write = 0;
    for (let read = 0; read < arr.length; read++) {
      const p = arr[read];
      if (p.life > 0) {
        if (write !== read) arr[write] = p;
        write++;
      }
    }
    if (write < arr.length) arr.length = write;

    
    this.spawnAccum += this.spawnRate * dt;
    const toSpawn = Math.floor(this.spawnAccum);
    this.spawnAccum -= toSpawn;

    const capacity = this.maxParticles - this.particles.length;
    const spawning = Math.min(toSpawn, capacity);
    for (let i = 0; i < spawning; i++) {
      this.particles.push(spawnParticle(this.effect, this.width, this.height));
    }

    
    
    this._syncNumericBuf();
  }

  
  private _syncNumericBuf(): void {
    const S = WarpEngine.STRIDE;
    const len = this.particles.length;
    for (let i = 0; i < len; i++) {
      const p  = this.particles[i];
      const base = i * S;
      this._numericBuf[base]     = p.pos.x;
      this._numericBuf[base + 1] = p.pos.y;
      this._numericBuf[base + 2] = p.vel.x;
      this._numericBuf[base + 3] = p.vel.y;
      this._numericBuf[base + 4] = p.life;
      this._numericBuf[base + 5] = p.opacity;
    }
    
    
    this._cachedSubarray = this._numericBuf.subarray(0, len * S);
  }

  
  get numericBuf(): Float32Array {
    return this._cachedSubarray;
  }

  
  snapshot(): { time: number; spawnAccum: number; particles: WarpParticle[]; effect: WarpEffect } {
    return structuredClone({
      time:       this.time,
      spawnAccum: this.spawnAccum,
      particles:  this.particles,
      effect:     this.effect,
    });
  }

  
  get elapsedTime(): number {
    return this.time;
  }

  
  get load(): number {
    return this.particles.length / this.maxParticles;
  }
}
