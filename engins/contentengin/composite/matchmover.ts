


export interface TrackSample {
  frame: number;
  
  x: number;
  y: number;
  
  confidence: number;
}


export interface TrackPoint {
  id: string;
  name: string;
  samples: TrackSample[];
  
  solved: boolean;
  
  worldPosition?: [number, number, number];
}


export interface CameraFrame {
  frame: number;
  
  position: [number, number, number];
  
  rotation: [number, number, number];
  
  fov: number;
}


export interface CameraTrack {
  id: string;
  name: string;
  
  width: number;
  height: number;
  frameCount: number;
  fps: number;
  trackPoints: TrackPoint[];
  
  cameraFrames: CameraFrame[];
  
  solveError: number;
  
  isSolved: boolean;
}


export interface MotionEstimate {
  pointId: string;
  frame: number;
  
  velocity: [number, number];
  
  acceleration: [number, number];
  speed: number;
}


export type Homography = [
  number, number, number,
  number, number, number,
  number, number, number,
];




export function createTrack(
  name: string,
  width: number,
  height: number,
  frameCount: number,
  fps = 24
): CameraTrack {
  return {
    id: `track_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    name,
    width,
    height,
    frameCount,
    fps,
    trackPoints: [],
    cameraFrames: [],
    solveError: 0,
    isSolved: false,
  };
}


export function addTrackPoint(
  track: CameraTrack,
  name: string,
  initialSamples: TrackSample[] = []
): CameraTrack {
  const point: TrackPoint = {
    id: `pt_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    name,
    samples: initialSamples,
    solved: false,
  };
  return { ...track, trackPoints: [...track.trackPoints, point] };
}


export function addSample(
  track: CameraTrack,
  pointId: string,
  sample: TrackSample
): CameraTrack {
  const points = track.trackPoints.map((p) =>
    p.id === pointId
      ? { ...p, samples: [...p.samples, sample].sort((a, b) => a.frame - b.frame) }
      : p
  );
  return { ...track, trackPoints: points };
}


export function computeHomography(
  src: [[number, number], [number, number], [number, number], [number, number]],
  dst: [[number, number], [number, number], [number, number], [number, number]]
): Homography {
  
  const A: number[][] = [];
  for (let i = 0; i < 4; i++) {
    const [sx, sy] = src[i];
    const [dx, dy] = dst[i];
    A.push([-sx, -sy, -1,   0,   0,  0, dx * sx, dx * sy, dx]);
    A.push([  0,   0,  0, -sx, -sy, -1, dy * sx, dy * sy, dy]);
  }

  
  
  const h = dlt4PointSolve(src, dst);
  return h;
}


export function estimateCameraMotion(track: CameraTrack): MotionEstimate[] {
  const estimates: MotionEstimate[] = [];

  for (const pt of track.trackPoints) {
    const sorted = [...pt.samples].sort((a, b) => a.frame - b.frame);
    for (let i = 1; i < sorted.length; i++) {
      const prev = sorted[i - 1];
      const cur = sorted[i];
      const dt = cur.frame - prev.frame || 1;
      const vx = (cur.x - prev.x) / dt;
      const vy = (cur.y - prev.y) / dt;

      let ax = 0, ay = 0;
      if (i >= 2) {
        const pp = sorted[i - 2];
        const pvx = (prev.x - pp.x) / (prev.frame - pp.frame || 1);
        const pvy = (prev.y - pp.y) / (prev.frame - pp.frame || 1);
        ax = (vx - pvx) / dt;
        ay = (vy - pvy) / dt;
      }

      estimates.push({
        pointId: pt.id,
        frame: cur.frame,
        velocity: [vx, vy],
        acceleration: [ax, ay],
        speed: Math.sqrt(vx * vx + vy * vy),
      });
    }
  }

  return estimates;
}


export function exportTrackCSV(track: CameraTrack): string {
  const rows = ['pointName,frame,x,y,confidence'];
  for (const pt of track.trackPoints) {
    for (const s of pt.samples) {
      rows.push(`${pt.name},${s.frame},${s.x.toFixed(6)},${s.y.toFixed(6)},${s.confidence.toFixed(4)}`);
    }
  }
  return rows.join('\n');
}


export function trackSummary(track: CameraTrack): string {
  const totalSamples = track.trackPoints.reduce((acc, p) => acc + p.samples.length, 0);
  const solved = track.trackPoints.filter((p) => p.solved).length;
  const status = track.isSolved
    ? `Solved (error: ${track.solveError.toFixed(3)} px)`
    : 'Unsolved';
  return `"${track.name}" — ${track.trackPoints.length} points, ${totalSamples} samples, ${solved} solved — ${status}`;
}



function dlt4PointSolve(
  src: [[number, number], [number, number], [number, number], [number, number]],
  dst: [[number, number], [number, number], [number, number], [number, number]]
): Homography {
  
  const [sOff, sScale] = normalisePoints(src);
  const [dOff, dScale] = normalisePoints(dst);

  const sn = src.map(([x, y]) => [(x - sOff[0]) / sScale, (y - sOff[1]) / sScale]) as typeof src;
  const dn = dst.map(([x, y]) => [(x - dOff[0]) / dScale, (y - dOff[1]) / dScale]) as typeof dst;

  
  const A: number[][] = [];
  for (let i = 0; i < 4; i++) {
    const [sx, sy] = sn[i];
    const [dx, dy] = dn[i];
    A.push([-sx, -sy, -1,   0,   0,  0, dx * sx, dx * sy, dx]);
    A.push([  0,   0,  0, -sx, -sy, -1, dy * sx, dy * sy, dy]);
  }

  
  const h = solveHomogeneousLS(A);
  const H: number[][] = [[h[0], h[1], h[2]], [h[3], h[4], h[5]], [h[6], h[7], h[8]]];

  
  const Ts = normMatrix(sOff, sScale);
  const TdInv = denormMatrix(dOff, dScale);
  const H2 = mat3Mul(mat3Mul(TdInv, H), Ts);
  const scale = H2[2][2] || 1;
  return [
    H2[0][0] / scale, H2[0][1] / scale, H2[0][2] / scale,
    H2[1][0] / scale, H2[1][1] / scale, H2[1][2] / scale,
    H2[2][0] / scale, H2[2][1] / scale, H2[2][2] / scale,
  ];
}

function normalisePoints(pts: [number, number][]): [[number, number], number] {
  const cx = pts.reduce((s, p) => s + p[0], 0) / pts.length;
  const cy = pts.reduce((s, p) => s + p[1], 0) / pts.length;
  const avgDist = pts.reduce((s, p) => s + Math.sqrt((p[0] - cx) ** 2 + (p[1] - cy) ** 2), 0) / pts.length;
  const scale = avgDist > 0 ? Math.SQRT2 / avgDist : 1;
  return [[cx, cy], scale];
}

function normMatrix(off: [number, number], scale: number): number[][] {
  return [
    [scale, 0, -scale * off[0]],
    [0, scale, -scale * off[1]],
    [0, 0, 1],
  ];
}

function denormMatrix(off: [number, number], scale: number): number[][] {
  return [
    [1 / scale, 0, off[0]],
    [0, 1 / scale, off[1]],
    [0, 0, 1],
  ];
}

function mat3Mul(A: number[][], B: number[][]): number[][] {
  const C = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 3; c++)
      for (let k = 0; k < 3; k++)
        C[r][c] += A[r][k] * B[k][c];
  return C;
}


function solveHomogeneousLS(A: number[][]): number[] {
  const m = A.length;      
  const n = A[0].length;   
  const M = A.map((r) => [...r]);

  
  let pivotCol = 0;
  for (let row = 0; row < m && pivotCol < n - 1; row++, pivotCol++) {
    
    let maxRow = row;
    let maxVal = Math.abs(M[row][pivotCol]);
    for (let r = row + 1; r < m; r++) {
      if (Math.abs(M[r][pivotCol]) > maxVal) {
        maxVal = Math.abs(M[r][pivotCol]);
        maxRow = r;
      }
    }
    [M[row], M[maxRow]] = [M[maxRow], M[row]];
    if (Math.abs(M[row][pivotCol]) < 1e-12) { row--; continue; }

    const pivot = M[row][pivotCol];
    for (let c = pivotCol; c < n; c++) M[row][c] /= pivot;
    for (let r = 0; r < m; r++) {
      if (r === row) continue;
      const factor = M[r][pivotCol];
      for (let c = pivotCol; c < n; c++) M[r][c] -= factor * M[row][c];
    }
  }

  
  const h = new Array(n).fill(0);
  h[n - 1] = 1;
  for (let row = m - 1; row >= 0; row--) {
    let pivotC = -1;
    for (let c = 0; c < n - 1; c++) {
      if (Math.abs(M[row][c]) > 1e-12) { pivotC = c; break; }
    }
    if (pivotC < 0) continue;
    let sum = M[row][n - 1];
    for (let c = pivotC + 1; c < n - 1; c++) sum -= M[row][c] * h[c];
    h[pivotC] = sum;
  }
  return h;
}
