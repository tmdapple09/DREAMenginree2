'use client';

import { useEffect, useRef, type RefObject } from 'react';
import {
    GestureRecogniser,
    type GestureCallbacks,
    type GestureConfig,
} from './touchGestures';




export function useTouchGestures(
  ref: RefObject<HTMLElement | null>,
  callbacks: GestureCallbacks,
  config?: GestureConfig,
): void {
  
  
  
  const cbRef = useRef(callbacks);
  cbRef.current = callbacks;

  const configRef = useRef(config);
  configRef.current = config;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const stable: GestureCallbacks = {
      onPinch:     (e) => cbRef.current.onPinch?.(e),
      onRotate:    (e) => cbRef.current.onRotate?.(e),
      onSwipe:     (e) => cbRef.current.onSwipe?.(e),
      onPan:       (e) => cbRef.current.onPan?.(e),
      onTap:       (e) => cbRef.current.onTap?.(e),
      onLongPress: (e) => cbRef.current.onLongPress?.(e),
    };

    const recogniser = new GestureRecogniser(stable, configRef.current);
    return recogniser.attach(el);
  }, [ref]);
}
