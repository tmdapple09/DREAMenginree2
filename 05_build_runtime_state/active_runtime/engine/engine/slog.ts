/**
 * slog — Symmetric Log Transform Utility
 *
 * slog(x) = sign(x) · ln(1 + |x|)
 *
 * Properties:
 *  - Compresses large values while preserving sign and zero
 *  - Differentiable everywhere (derivative = 1/(1+|x|))
 *  - Used across DREAMengin for: deviation compression, velocity smoothing,
 *    engagement metric scaling, and torridity-rank normalisation.
 */

/**
 * slog(x) = Math.sign(x) * Math.log1p(Math.abs(x))
 */
export function slog(x: number): number {
  return Math.sign(x) * Math.log1p(Math.abs(x));
}

/**
 * Inverse of slog.
 * slogInv(y) = Math.sign(y) * (Math.exp(Math.abs(y)) - 1)
 */
export function slogInv(y: number): number {
  return Math.sign(y) * (Math.exp(Math.abs(y)) - 1);
}

/**
 * Apply slog element-wise to an array.
 */
export function slogArray(xs: number[]): number[] {
  return xs.map(slog);
}

/**
 * slog-transform a deviation series, then compute its mean.
 */
export function slogMean(xs: number[]): number {
  if (xs.length === 0) return 0;
  let sum = 0;
  for (const x of xs) sum += slog(x);
  return sum / xs.length;
}

/**
 * slog-transform a deviation series, then compute its variance.
 */
export function slogVariance(xs: number[]): number {
  if (xs.length < 2) return 0;
  let count = 0;
  let mean = 0;
  let m2 = 0;
  for (const x of xs) {
    count += 1;
    const value = slog(x);
    const delta = value - mean;
    mean += delta / count;
    m2 += delta * (value - mean);
  }
  return m2 / (count - 1);
}

/**
 * Shannon entropy of a set of values after slog-transforming and
 * normalising into a probability distribution.
 *
 * Returns a value in [0, log(n)].  Divide by log(n) for [0,1].
 */
export function slogEntropy(xs: number[]): number {
  if (xs.length === 0) return 0;
  const magnitudes = new Array<number>(xs.length);
  let total = 0;
  for (let i = 0; i < xs.length; i++) {
    const value = Math.abs(slog(xs[i]));
    magnitudes[i] = value;
    total += value;
  }
  if (total === 0) return 0;
  let entropy = 0;
  for (const value of magnitudes) {
    if (value === 0) continue;
    const p = value / total;
    entropy -= p * Math.log(p);
  }
  return entropy;
}

