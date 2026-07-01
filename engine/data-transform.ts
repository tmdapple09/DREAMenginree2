export interface DataPhysicsConfig {
  readonly n: number;
  readonly a0: number;
  readonly participation: number;
}

export const DATA_PHYSICS: DataPhysicsConfig = Object.freeze({
  n: 2.1,
  a0: 1.2e-10,
  participation: 0.1,
});

const PARTICIPATION_DEVIATION_SCALE = 0.01;


export function encodeToLedger(buffer: readonly number[]): number[] {
  return buffer.map((value) => {
    if (!isFinite(value)) return 0;
    return Math.sign(value) * Math.log1p(Math.abs(value));
  });
}

export function applyPhysicsFilter(encodedBuffer: readonly number[]): number[] {
  if (encodedBuffer.length === 0) return [];
  return encodedBuffer.filter((dataPoint) => {
    const x = Math.abs(dataPoint) / DATA_PHYSICS.a0;
    const expected =
      x / Math.pow(1 + Math.pow(x, DATA_PHYSICS.n), 1 / DATA_PHYSICS.n);

    return (
      Math.abs(dataPoint - expected) >
      DATA_PHYSICS.participation * PARTICIPATION_DEVIATION_SCALE
    );
  });
}


export function decodeFromLedger(buffer: readonly number[]): number[] {
  return buffer.map((value) => {
    if (!isFinite(value)) return 0;
    return Math.sign(value) * Math.expm1(Math.abs(value));
  });
}


export function normalizeBuffer(buffer: readonly number[]): number[] {
  if (buffer.length === 0) return [];

  let min = Infinity;
  let max = -Infinity;
  let finiteCount = 0;

  for (const value of buffer) {
    if (!isFinite(value)) continue;
    finiteCount += 1;
    if (value < min) min = value;
    if (value > max) max = value;
  }

  if (finiteCount === 0) return buffer.map(() => 0);
  const range = max - min;
  if (range === 0) return buffer.map(() => 0);
  return buffer.map((v) => (isFinite(v) ? (v - min) / range : 0));
}

export interface BufferStats {
  count: number;
  mean: number;
  std: number;
  min: number;
  max: number;
  sum: number;
}


export function computeBufferStats(buffer: readonly number[]): BufferStats {
  let count = 0;
  let mean = 0;
  let m2 = 0;
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (const value of buffer) {
    if (!isFinite(value)) continue;
    count += 1;
    sum += value;
    if (value < min) min = value;
    if (value > max) max = value;

    const delta = value - mean;
    mean += delta / count;
    m2 += delta * (value - mean);
  }

  if (count === 0) {
    return { count: 0, mean: 0, std: 0, min: 0, max: 0, sum: 0 };
  }

  return {
    count,
    mean,
    std: Math.sqrt(m2 / count),
    min,
    max,
    sum,
  };
}


export function zscore(buffer: readonly number[]): number[] {
  if (buffer.length === 0) return [];
  const { mean, std } = computeBufferStats(buffer);
  if (std === 0) return buffer.map(() => 0);
  return buffer.map((v) => (isFinite(v) ? (v - mean) / std : 0));
}
