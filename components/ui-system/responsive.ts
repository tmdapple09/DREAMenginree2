

export const BREAKPOINTS = {
  
  xs: 360,
  
  sm: 480,
  
  md: 768,
  
  lg: 1024,
  
  xl: 1280,
  
  xxl: 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;


export const BREAKPOINT_ORDER: readonly Breakpoint[] = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
];


export function getBreakpoint(width: number): Breakpoint {
  if (!Number.isFinite(width) || width <= 0) return 'xs';
  let current: Breakpoint = 'xs';
  for (const bp of BREAKPOINT_ORDER) {
    if (width >= BREAKPOINTS[bp]) {
      current = bp;
    } else {
      break;
    }
  }
  return current;
}


export function isAtLeast(width: number, bp: Breakpoint): boolean {
  if (!Number.isFinite(width)) return false;
  return width >= BREAKPOINTS[bp];
}


export function isBelow(width: number, bp: Breakpoint): boolean {
  if (!Number.isFinite(width)) return false;
  return width < BREAKPOINTS[bp];
}


export function fluid(
  width: number,
  options: {
    min: number;
    max: number;
    fromWidth?: number;
    toWidth?: number;
  },
): number {
  const { min, max } = options;
  const fromWidth = options.fromWidth ?? BREAKPOINTS.xs;
  const toWidth = options.toWidth ?? BREAKPOINTS.xl;

  if (!Number.isFinite(width) || toWidth <= fromWidth) {
    return min;
  }
  if (width <= fromWidth) return min;
  if (width >= toWidth) return max;

  const t = (width - fromWidth) / (toWidth - fromWidth);
  return min + (max - min) * t;
}


export function clamp(value: number, low: number, high: number): number {
  if (!Number.isFinite(value)) return low;
  if (low > high) return low;
  if (value < low) return low;
  if (value > high) return high;
  return value;
}


export function pickByBreakpoint<T>(
  width: number,
  values: Partial<Record<Breakpoint, T>>,
  fallback: T,
): T {
  const current = getBreakpoint(width);
  const idx = BREAKPOINT_ORDER.indexOf(current);
  for (let i = idx; i >= 0; i -= 1) {
    const v = values[BREAKPOINT_ORDER[i]];
    if (v !== undefined) return v;
  }
  
  for (let i = idx + 1; i < BREAKPOINT_ORDER.length; i += 1) {
    const v = values[BREAKPOINT_ORDER[i]];
    if (v !== undefined) return v;
  }
  return fallback;
}


export function cssClamp(
  minPx: number,
  maxPx: number,
  fromWidth: number = BREAKPOINTS.xs,
  toWidth: number = BREAKPOINTS.xl,
): string {
  if (toWidth <= fromWidth || maxPx === minPx) {
    return `${minPx}px`;
  }
  const slope = (maxPx - minPx) / (toWidth - fromWidth);
  const intercept = minPx - slope * fromWidth;
  const vw = (slope * 100).toFixed(4);
  const sign = intercept >= 0 ? '+' : '-';
  const interceptPx = Math.abs(intercept).toFixed(2);
  return `clamp(${minPx}px, calc(${vw}vw ${sign} ${interceptPx}px), ${maxPx}px)`;
}


export function readViewportWidth(defaultWidth: number = BREAKPOINTS.lg): number {
  if (typeof window === 'undefined') return defaultWidth;
  const visualWidth = window.visualViewport?.width;
  const innerWidth = window.innerWidth;
  const candidates = [visualWidth, innerWidth].filter(
    (value): value is number => typeof value === 'number' && Number.isFinite(value) && value > 0,
  );
  return candidates.length ? Math.min(...candidates) : defaultWidth;
}
