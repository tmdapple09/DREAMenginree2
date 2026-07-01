



export const RIGHT_TAP_MAX_MS = 250;


export const RIGHT_TAP_MAX_PX = 12;


export const RIGHT_RESET_TIMEOUT_MS = 200;


export const AUTO_FIRE_DELAY_MS = 300;


export const AUTO_FIRE_INTERVAL_MS = 80;

export interface TapResult {
  isTap: boolean;
  durationMs: number;
  distancePx: number;
}


export function evaluateRightStickTap(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  startMs: number,
  endMs: number,
): TapResult {
  const distancePx = Math.hypot(endX - startX, endY - startY);
  const durationMs = endMs - startMs;
  return {
    isTap: distancePx <= RIGHT_TAP_MAX_PX && durationMs <= RIGHT_TAP_MAX_MS,
    durationMs,
    distancePx,
  };
}


export function computeAimDelta(
  prevX: number,
  prevY: number,
  nextX: number,
  nextY: number,
): { dx: number; dy: number } {
  return { dx: nextX - prevX, dy: nextY - prevY };
}

