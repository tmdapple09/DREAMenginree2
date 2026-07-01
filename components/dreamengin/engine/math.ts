


export function clamp(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}


export function wrap(v: number, size: number): number {
  const r = v % size;
  return r < 0 ? r + size : r;
}


export type UnitComplex = Float32Array; 

export function unitComplexFromAngle(thetaRad: number, out: UnitComplex): UnitComplex {
  out[0] = Math.cos(thetaRad);
  out[1] = Math.sin(thetaRad);
  return out;
}


export function unitComplexRotate(q: UnitComplex, dThetaRad: number): void {
  const c = Math.cos(dThetaRad);
  const s = Math.sin(dThetaRad);
  const re = q[0];
  const im = q[1];
  
  q[0] = re * c - im * s;
  q[1] = re * s + im * c;

  
  const n = Math.hypot(q[0], q[1]) || 1;
  q[0] /= n;
  q[1] /= n;
}
