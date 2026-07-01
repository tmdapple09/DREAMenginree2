











export const COMPACT_RUNTIME_VIEWPORT_MAX_WIDTH = 768;









export function isCompactRuntimeViewport(width: number): boolean {
  return width < COMPACT_RUNTIME_VIEWPORT_MAX_WIDTH;
}

export function readInteractiveViewportWidth(fallbackWidth: number = COMPACT_RUNTIME_VIEWPORT_MAX_WIDTH): number {
  if (typeof window === 'undefined') return fallbackWidth;
  const visualWidth = window.visualViewport?.width;
  const innerWidth = window.innerWidth;
  const candidates = [visualWidth, innerWidth].filter(
    (value): value is number => typeof value === 'number' && Number.isFinite(value) && value > 0,
  );
  return candidates.length ? Math.min(...candidates) : fallbackWidth;
}

export function readInteractiveViewportHeight(fallbackHeight: number = 800): number {
  if (typeof window === 'undefined') return fallbackHeight;
  const visualHeight = window.visualViewport?.height;
  const innerHeight = window.innerHeight;
  const candidates = [visualHeight, innerHeight].filter(
    (value): value is number => typeof value === 'number' && Number.isFinite(value) && value > 0,
  );
  return candidates.length ? Math.min(...candidates) : fallbackHeight;
}

export function readInteractiveViewportScale(): number {
  if (typeof window === 'undefined') return 1;
  const scale = window.visualViewport?.scale;
  return typeof scale === 'number' && Number.isFinite(scale) && scale > 0 ? scale : 1;
}

export function getPreferredViewportHeight(
  innerHeight: number,
  visualViewportHeight?: number | null,
): number {
  if (
    typeof visualViewportHeight !== 'number' ||
    !Number.isFinite(visualViewportHeight) ||
    visualViewportHeight <= 0
  ) {
    return innerHeight;
  }

  return Math.max(0, Math.min(innerHeight, visualViewportHeight));
}







export * from './responsive';
