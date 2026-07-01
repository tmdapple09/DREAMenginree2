'use client';

import { useCallback, useEffect, useRef } from 'react';



export interface UseTapOptions {
  
  disabled?: boolean;
}

export interface UseTapResult {
  
  onTap: (event?: unknown) => void;
}


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
  
  doubleTapWindowMs?: number;
  disabled?: boolean;
}

export interface UseHomeParticleTapResult {
  
  onTap: () => void;
}


export function useHomeParticleTap(
  onSingleTap: () => void,
  onDoubleTap: () => void,
  options: UseHomeParticleTapOptions = {},
): UseHomeParticleTapResult {
  const { doubleTapWindowMs = 260, disabled = false } = options;
  const stateRef = useRef<{
    timer: ReturnType<typeof setTimeout> | null;
    pending: boolean;
  }>({ timer: null, pending: false });

  const singleRef = useRef(onSingleTap);
  const doubleRef = useRef(onDoubleTap);
  singleRef.current = onSingleTap;
  doubleRef.current = onDoubleTap;

  useEffect(
    () => () => {
      if (stateRef.current.timer) clearTimeout(stateRef.current.timer);
    },
    [],
  );

  const onTap = useCallback(() => {
    if (disabled) return;
    const state = stateRef.current;
    if (state.pending && state.timer) {
      clearTimeout(state.timer);
      state.timer = null;
      state.pending = false;
      doubleRef.current();
      return;
    }
    state.pending = true;
    state.timer = setTimeout(() => {
      state.pending = false;
      state.timer = null;
      singleRef.current();
    }, doubleTapWindowMs);
  }, [disabled, doubleTapWindowMs]);

  return { onTap };
}
