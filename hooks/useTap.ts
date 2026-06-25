'use client';

import { useCallback, useRef } from 'react';

/**
 * useTap — canonical single-tap hook.
 *
 * Every interactive DREAMengin surface should respond to the first completed
 * tap. Do not delay ordinary UI reaction while waiting for a follow-up tap.
 */

export interface UseTapOptions {
  /** Disable the handler without unmounting it. */
  disabled?: boolean;
}

export interface UseTapResult {
  /** Fire on every press release. Single tap, every time. */
  onTap: (event?: unknown) => void;
}

/**
 * Single-tap. No timers, no second-tap window, no surprise.
 */
export function useTap(
  handler: (event?: unknown) => void,
  options: UseTapOptions = {},
): UseTapResult {
  const { disabled = false } = options;
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  const onTap = useCallback(
    (event?: unknown) => {
      if (disabled) return;
      handlerRef.current(event);
    },
    [disabled],
  );

  return { onTap };
}

export interface UseHomeParticleTapOptions {
  /** Kept for compatibility; ignored because the home particle is now first-tap. */
  doubleTapWindowMs?: number;
  disabled?: boolean;
}

export interface UseHomeParticleTapResult {
  /** Fires immediately on the first tap. */
  onTap: () => void;
}

/**
 * Compatibility wrapper for older home-particle call sites.
 *
 * The old API accepted single/double callbacks. The current behavior fires the
 * single-tap callback immediately and never waits to promote the gesture.
 */
export function useHomeParticleTap(
  onSingleTap: () => void,
  _onDoubleTap: () => void,
  options: UseHomeParticleTapOptions = {},
): UseHomeParticleTapResult {
  const { disabled = false } = options;
  const singleRef = useRef(onSingleTap);
  singleRef.current = onSingleTap;

  const onTap = useCallback(() => {
    if (disabled) return;
    singleRef.current();
  }, [disabled]);

  return { onTap };
}
