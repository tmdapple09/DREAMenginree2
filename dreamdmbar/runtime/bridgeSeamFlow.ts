


export const SEAM_CHANNEL_COLORS: Record<string, string> = {
  code:    '#3b82f6',   
  music:   '#a855f7',   
  games:   '#22c55e',   
  game:    '#22c55e',   
  lab:     '#06b6d4',   
  brand:   '#f97316',   
  content: '#ec4899',   
  create:  '#ec4899',   
};


export const SEAM_DEFAULT_COLOR = '#c8981a';


export function channelColor(channel: string): string {
  return SEAM_CHANNEL_COLORS[channel] ?? SEAM_DEFAULT_COLOR;
}

export interface SeamParticle {
  
  id: number;
  
  x: number;
  
  y: number;
  
  vx: number;
  
  phase: number;
  
  freq: number;
  
  amp: number;
  
  color: string;
  
  channel: string;
  
  alpha: number;
  
  glow: number;
  
  size: number;
  
  age: number;
  
  lifespanMs: number;
  
  isIdle: boolean;
}

let _nextId = 0;


export function createSeamParticle(channel: string): SeamParticle {
  const id = _nextId++;
  
  const startX = 0.2 + Math.random() * 0.6;
  
  const direction = startX < 0.5 ? -1 : 1;
  const speed = 0.00035 + Math.random() * 0.0003; 

  return {
    id,
    x: startX,
    y: 0,
    vx: direction * speed,
    phase: Math.random() * Math.PI * 2,
    freq: 0.003 + Math.random() * 0.002, 
    amp: 4 + Math.random() * 8,           
    color: channelColor(channel),
    channel,
    alpha: 1,
    glow: 1.4 + Math.random() * 0.6,
    size: 3.5 + Math.random() * 3,
    age: 0,
    lifespanMs: 700 + Math.random() * 300,  
    isIdle: false,
  };
}


export function createIdleParticle(startX: number): SeamParticle {
  const id = _nextId++;
  return {
    id,
    x: startX,
    y: 0,
    vx: 0.00004 + Math.random() * 0.00003, 
    phase: Math.random() * Math.PI * 2,
    freq: 0.001 + Math.random() * 0.001,
    amp: 6 + Math.random() * 6,
    color: SEAM_DEFAULT_COLOR,
    channel: 'idle',
    alpha: 0.20 + Math.random() * 0.15,     
    glow: 0.6,
    size: 2 + Math.random() * 2,
    age: 0,
    lifespanMs: 5000 + Math.random() * 3000, 
    isIdle: true,
  };
}


export function tickParticles(particles: SeamParticle[], dtMs: number): void {
  for (const p of particles) {
    if (p.age >= 1) continue;

    
    p.age = Math.min(1, p.age + dtMs / p.lifespanMs);

    
    p.x += p.vx * dtMs;

    
    p.y = Math.sin(p.phase + p.freq * p.age * p.lifespanMs) * p.amp;

    
    if (p.age < 0.6) {
      p.alpha = p.isIdle ? (0.20 + Math.random() * 0.02) : Math.min(1, p.alpha);
    } else {
      const fadeProgress = (p.age - 0.6) / 0.4; 
      const targetAlpha = p.isIdle ? 0 : 0;
      const startAlpha = p.isIdle ? 0.22 : 1;
      p.alpha = startAlpha + (targetAlpha - startAlpha) * fadeProgress;
    }

    
    if (!p.isIdle) {
      p.glow = Math.max(0.5, p.glow - dtMs * 0.0015);
    }
  }
}


export function isParticleDead(p: SeamParticle): boolean {
  return p.age >= 1 || p.alpha <= 0.01 || p.x < -0.05 || p.x > 1.05;
}


export function evictDeadParticles(particles: SeamParticle[]): SeamParticle[] {
  return particles.filter((p) => !isParticleDead(p));
}


export function _resetIdCounter(): void {
  _nextId = 0;
}
