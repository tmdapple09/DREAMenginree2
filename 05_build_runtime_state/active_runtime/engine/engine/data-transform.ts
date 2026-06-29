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

/**
 * Logarithmically encode a buffer for the ledger.
 * NaN and ±Infinity inputs are clamped to 0 before encoding so they never
 * propagate through the pipeline as invalid values.
 */
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

/**
 * Inverse of encodeToLedger — restores original values from the ledger.
 * NaN and ±Infinity inputs are clamped to 0 before decoding.
 */
export function decodeFromLedger(buffer: readonly number[]): number[] {
  return buffer.map((value) => {
    if (!isFinite(value)) return 0;
    return Math.sign(value) * Math.expm1(Math.abs(value));
  });
}

/**
 * Min-max normalize a buffer to the range [0, 1].
 * Returns an array of zeros when all values are equal (degenerate case).
 */
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

/**
 * Compute descriptive statistics for a numeric buffer.
 * NaN and ±Infinity values are excluded from all calculations.
 * Returns zeroed stats when the buffer has no finite values.
 */
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

/**
 * Compute Z-scores for each value in the buffer (how many std deviations from
 * the mean). Values with std=0 (constant series) all get a Z-score of 0.
 * NaN / Infinity inputs produce 0 in the output.
 */
export function zscore(buffer: readonly number[]): number[] {
  if (buffer.length === 0) return [];
  const { mean, std } = computeBufferStats(buffer);
  if (std === 0) return buffer.map(() => 0);
  return buffer.map((v) => (isFinite(v) ? (v - mean) / std : 0));
}
