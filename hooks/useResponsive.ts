'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import {
    BREAKPOINTS,
    type Breakpoint,
    fluid,
    getBreakpoint,
    isAtLeast,
    isBelow,
    pickByBreakpoint,
    readViewportWidth,
} from '../ui/responsive';
import { readInteractiveViewportHeight, readInteractiveViewportWidth } from '@/components/ui-system/runtimeViewport';



type Listener = () => void;

interface ViewportSnapshot {
  width: number;
  height: number;
}

const SSR_SNAPSHOT: ViewportSnapshot = {
  width: BREAKPOINTS.lg,
  height: 800,
};

let cachedSnapshot: ViewportSnapshot | null = null;
const listeners = new Set<Listener>();
let resizeBound = false;

function readSnapshot(): ViewportSnapshot {
  if (typeof window === 'undefined') return SSR_SNAPSHOT;
  return {
    width: readInteractiveViewportWidth(SSR_SNAPSHOT.width),
    height: readInteractiveViewportHeight(SSR_SNAPSHOT.height),
  };
}

function ensureSnapshot(): ViewportSnapshot {
  if (!cachedSnapshot) cachedSnapshot = readSnapshot();
  return cachedSnapshot;
}

function notify( ){
  const next = readSnapshot();
  const prev = cachedSnapshot;
  if (prev && prev.width === next.width && prev.height === next.height) return;
  cachedSnapshot = next;
  listeners.forEach((l) => l());
}

function subscribe(listener: Listener): () => void {
  if (typeof window === 'undefined') return () => undefined;
  listeners.add(listener);
  if (!resizeBound) {
    window.addEventListener('resize', notify, { passive: true });
    window.addEventListener('orientationchange', notify, { passive: true });
    window.visualViewport?.addEventListener('resize', notify, { passive: true });
    window.visualViewport?.addEventListener('scroll', notify, { passive: true });
    resizeBound = true;
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && resizeBound) {
      window.removeEventListener('resize', notify);
      window.removeEventListener('orientationchange', notify);
      window.visualViewport?.removeEventListener('resize', notify);
      window.visualViewport?.removeEventListener('scroll', notify);
      resizeBound = false;
    }
  };
}

function getServerSnapshot(): ViewportSnapshot {
  return SSR_SNAPSHOT;
}


export function useViewport(): ViewportSnapshot {
  return useSyncExternalStore(subscribe, ensureSnapshot, getServerSnapshot);
}


export function useBreakpoint(): Breakpoint {
  const { width } = useViewport();
  return getBreakpoint(width);
}


export function useIsAtLeast(bp: Breakpoint): boolean {
  const { width } = useViewport();
  return isAtLeast(width, bp);
}


export function useIsBelow(bp: Breakpoint): boolean {
  const { width } = useViewport();
  return isBelow(width, bp);
}


export function useIsMobile(): boolean {
  return useIsBelow('md');
}


export function useIsTablet(): boolean {
  const { width } = useViewport();
  return isAtLeast(width, 'md') && isBelow(width, 'lg');
}


export function useIsDesktop(): boolean {
  return useIsAtLeast('lg');
}


export function useBreakpointValue<T>(
  values: Partial<Record<Breakpoint, T>>,
  fallback: T,
): T {
  const { width } = useViewport();
  return pickByBreakpoint(width, values, fallback);
}


export function useFluid(
  options: {
    min: number;
    max: number;
    fromWidth?: number;
    toWidth?: number;
  },
): number {
  const { width } = useViewport();
  return fluid(width, options);
}


export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return false;
    }
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined;
    }
    const mql = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent | MediaQueryList) => {
      setMatches(event.matches);
    };
    handler(mql);
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', handler as (e: MediaQueryListEvent) => void);
      return () => mql.removeEventListener('change', handler as (e: MediaQueryListEvent) => void);
    }
    
    mql.addListener(handler as (e: MediaQueryListEvent) => void);
    return () => mql.removeListener(handler as (e: MediaQueryListEvent) => void);
  }, [query]);

  return matches;
}


export function getCurrentViewportWidth(): number {
  return readViewportWidth();
}
