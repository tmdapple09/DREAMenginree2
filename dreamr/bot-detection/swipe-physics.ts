

export interface PathPoint {
  x: number;
  y: number;
}

export type Path = PathPoint[];


function slog(x: number): number {
  return Math.sign(x) * Math.log1p(Math.abs(x));
}


function lineDirection(path: Path): { dx: number; dy: number; len: number } {
  const first = path[0];
  const last  = path[path.length - 1];
  const dx    = last.x - first.x;
  const dy    = last.y - first.y;
  const len   = Math.sqrt(dx * dx + dy * dy);
  return { dx, dy, len };
}


function perpDist(p: PathPoint, p0: PathPoint, dx: number, dy: number, len: number): number {
  if (len < 1e-9) return Math.sqrt((p.x - p0.x) ** 2 + (p.y - p0.y) ** 2);
  
  return Math.abs((p.x - p0.x) * dy - (p.y - p0.y) * dx) / len;
}


function normalise(v: number[]): number[] {
  const norm = Math.sqrt(v.reduce((s, x: number) => s + x * x, 0));
  if (norm < 1e-12) return v.map(() => 0);
  return v.map((x) => x / norm);
}


function dot(a: number[], b: number[]): number {
  let s = 0;
  for (let i = 0; i < Math.min(a.length, b.length); i++) s += a[i] * b[i];
  return s;
}


function resample(path: Path, n: number): Path {
  if (path.length <= 1) return Array(n).fill(path[0] ?? { x: 0, y: 0 }) as Path;
  const out: Path = [];
  const total = path.length - 1;
  for (let i = 0; i < n; i++) {
    const t   = (i / (n - 1)) * total;
    const lo  = Math.floor(t);
    const hi  = Math.min(lo + 1, total);
    const frac = t - lo;
    out.push({
      x: path[lo].x + (path[hi].x - path[lo].x) * frac,
      y: path[lo].y + (path[hi].y - path[lo].y) * frac,
    });
  }
  return out;
}


export function perpendicularDeviation(path: Path): number {
  if (path.length < 3) return 0;
  const { dx, dy, len } = lineDirection(path);
  const p0 = path[0];
  let total = 0;
  let count = 0;
  for (let i = 1; i < path.length - 1; i++) {
    total += perpDist(path[i], p0, dx, dy, len);
    count += 1;
  }
  return count > 0 ? total / count : 0;
}


export function crossSwipeSimilarity(paths: Path[]): number {
  const window = paths.slice(-5);
  if (window.length < 2) return 0;

  const N = 20; 
  const vectors = window.map((p) => {
    const rs = resample(p, N);
    return normalise(rs.flatMap((pt) => [pt.x, pt.y]));
  });

  let totalSim = 0;
  let pairs    = 0;
  for (let i = 0; i < vectors.length - 1; i++) {
    for (let j = i + 1; j < vectors.length; j++) {
      totalSim += dot(vectors[i], vectors[j]);
      pairs++;
    }
  }
  return pairs > 0 ? Math.max(0, Math.min(1, totalSim / pairs)) : 0;
}


export function coarseGrainInvariance(path: Path): number {
  if (path.length < 4) return 0;
  const mid   = Math.floor(path.length / 2);
  const first = path.slice(0, mid + 1);
  const second = path.slice(mid);

  return Math.abs(
    perpendicularDeviation(first) - perpendicularDeviation(second),
  );
}


export function deviationEntropy(path: Path): number {
  if (path.length < 3) return 0;

  const { dx, dy, len } = lineDirection(path);
  const p0 = path[0];
  const devs: number[] = [];
  let maxDev = 1e-6;
  for (let i = 1; i < path.length - 1; i++) {
    const deviation = perpDist(path[i], p0, dx, dy, len);
    devs.push(deviation);
    if (deviation > maxDev) maxDev = deviation;
  }
  if (devs.length === 0) return 0;

  const N_BINS = 10;
  const counts = new Array<number>(N_BINS).fill(0);
  for (const d of devs) {
    const bin = Math.min(N_BINS - 1, Math.floor((d / maxDev) * N_BINS));
    counts[bin]++;
  }

  const total = devs.length;
  let entropy = 0;
  for (const c of counts) {
    if (c > 0) {
      const p = c / total;
      entropy -= p * Math.log2(p);
    }
  }
  
  return entropy / Math.log2(N_BINS);
}

export interface VelocityStats {
  variance: number;
  jerk:     number;
}


export function velocityVarianceJerk(path: Path, timestamps: number[]): VelocityStats {
  const n = Math.min(path.length, timestamps.length);
  if (n < 2) return { variance: 0, jerk: 0 };

  
  const speeds: number[] = [];
  for (let i = 1; i < n; i++) {
    const dt = Math.max(timestamps[i] - timestamps[i - 1], 1);
    const dx = path[i].x - path[i - 1].x;
    const dy = path[i].y - path[i - 1].y;
    speeds.push(Math.sqrt(dx * dx + dy * dy) / dt);
  }

  const mean = speeds.reduce((s, v: number) => s + v, 0) / speeds.length;
  const variance = speeds.reduce((s, v: number) => s + (v - mean) ** 2, 0) / speeds.length;

  
  const accels: number[] = [];
  for (let i = 1; i < speeds.length; i++) accels.push(speeds[i] - speeds[i - 1]);

  const jerks: number[] = [];
  for (let i = 1; i < accels.length; i++) jerks.push(Math.abs(accels[i] - accels[i - 1]));

  const meanJerk = jerks.length > 0
    ? jerks.reduce((s, j: number) => s + j, 0) / jerks.length
    : 0;

  return {
    variance: slog(variance),
    jerk:     slog(meanJerk),
  };
}
