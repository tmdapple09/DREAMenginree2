



export const LEFT_STICK_RADIUS_PX = 72;


export const LEFT_STICK_DEAD_ZONE = 0.12;

export interface StickVector {
  x: number;
  y: number;
}


export function computeLeftStickVector(
  originX: number,
  originY: number,
  currentX: number,
  currentY: number,
  radiusPx = LEFT_STICK_RADIUS_PX,
): StickVector {
  const dx = currentX - originX;
  const dy = currentY - originY;
  const dist = Math.hypot(dx, dy);
  if (!dist || !radiusPx) return { x: 0, y: 0 };
  const scale = Math.min(dist, radiusPx) / radiusPx;
  return {
    x: Number(((dx / dist) * scale).toFixed(4)),
    y: Number(((dy / dist) * scale).toFixed(4)),
  };
}

