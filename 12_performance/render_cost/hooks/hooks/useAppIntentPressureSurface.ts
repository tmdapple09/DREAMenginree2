'use client';

import { useCallback, useEffect, useRef } from 'react';
import {
  AppIntentPressureField,
  appIntentPressureFromElementPoint,
  type AppIntentPressureSource,
  type AppIntentMassState,
  type AppIntentPoint,
} from '@/engine/intent/appIntentPressure';

export type AppIntentPressureSurfaceOptions = {
  target: string;
  enabled?: boolean;
  maxTranslatePx?: number;
  maxTiltDeg?: number;
  maxCompression?: number;
  maxStretch?: number;
  decay?: number;
  columns?: number;
  rows?: number;
  writeTransform?: boolean;
};

type PointerSample = {
  x: number;
  y: number;
  at: number;
};

function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.max(min, Math.min(max, value));
}

function velocityFromSamples(previous: PointerSample | null, next: PointerSample): AppIntentPoint {
  if (!previous) return { x: 0, y: 0 };

  const dt = Math.max(1, next.at - previous.at);
  return {
    x: clamp((next.x - previous.x) / dt / 2.2, -1, 1),
    y: clamp((next.y - previous.y) / dt / 2.2, -1, 1),
  };
}

function sourceForce(source: AppIntentPressureSource, velocity: AppIntentPoint): number {
  const speed = Math.hypot(velocity.x, velocity.y);

  if (source === 'drag') return clamp(0.2 + speed * 0.78, 0.12, 0.82);
  if (source === 'hold') return 0.74;
  if (source === 'scroll') return clamp(0.16 + speed * 0.46, 0.12, 0.58);
  if (source === 'upload') return 0.86;
  if (source === 'type') return 0.28;

  return 0.34;
}

function sourceRadius(source: AppIntentPressureSource): number {
  if (source === 'drag') return 0.42;
  if (source === 'hold') return 0.34;
  if (source === 'scroll') return 0.5;
  if (source === 'upload') return 0.72;
  if (source === 'type') return 0.58;

  return 0.3;
}

export function applyIntentPressureToElement(
  element: HTMLElement,
  state: AppIntentMassState,
  options: Required<Pick<AppIntentPressureSurfaceOptions, 'maxTranslatePx' | 'maxTiltDeg' | 'maxCompression' | 'maxStretch' | 'writeTransform'>>,
  baseTransform: string,
): void {
  const translateX = state.offset.x * options.maxTranslatePx;
  const translateY = state.offset.y * options.maxTranslatePx;
  const rotateX = -state.tilt.x * options.maxTiltDeg;
  const rotateY = state.tilt.y * options.maxTiltDeg;
  const scaleX = 1 + state.stretch.x * options.maxStretch - state.compression * options.maxCompression;
  const scaleY = 1 + state.stretch.y * options.maxStretch - state.compression * options.maxCompression;

  element.dataset.intentPressureTarget = state.target;
  element.dataset.intentPressureActive = state.active ? 'true' : 'false';
  element.style.setProperty('--intent-pressure-mass', state.mass.toFixed(4));
  element.style.setProperty('--intent-pressure-x', state.center.x.toFixed(4));
  element.style.setProperty('--intent-pressure-y', state.center.y.toFixed(4));
  element.style.setProperty('--intent-pressure-offset-x', translateX.toFixed(4));
  element.style.setProperty('--intent-pressure-offset-y', translateY.toFixed(4));
  element.style.setProperty('--intent-pressure-compression', state.compression.toFixed(4));
  element.style.setProperty('--intent-pressure-stretch-x', state.stretch.x.toFixed(4));
  element.style.setProperty('--intent-pressure-stretch-y', state.stretch.y.toFixed(4));

  if (!options.writeTransform) return;

  element.style.transformOrigin = `${(state.center.x * 100).toFixed(2)}% ${(state.center.y * 100).toFixed(2)}%`;
  element.style.transform = [
    baseTransform,
    `translate3d(${translateX.toFixed(3)}px, ${translateY.toFixed(3)}px, 0)`,
    `rotateX(${rotateX.toFixed(3)}deg)`,
    `rotateY(${rotateY.toFixed(3)}deg)`,
    `scale(${scaleX.toFixed(5)}, ${scaleY.toFixed(5)})`,
  ].filter(Boolean).join(' ');
}

export function useAppIntentPressureSurface<T extends HTMLElement>(
  options: AppIntentPressureSurfaceOptions,
) {
  const ref = useRef<T | null>(null);
  const frameRef = useRef<number | null>(null);
  const pointerIdRef = useRef<number | null>(null);
  const lastSampleRef = useRef<PointerSample | null>(null);
  const baseTransformRef = useRef('');
  const fieldRef = useRef<AppIntentPressureField | null>(null);
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (fieldRef.current === null) {
    fieldRef.current = new AppIntentPressureField({
      target: options.target,
      columns: options.columns,
      rows: options.rows,
      decay: options.decay,
    });
  }

  const readOptions = useCallback(() => ({
    maxTranslatePx: options.maxTranslatePx ?? 6,
    maxTiltDeg: options.maxTiltDeg ?? 2.8,
    maxCompression: options.maxCompression ?? 0.018,
    maxStretch: options.maxStretch ?? 0.012,
    writeTransform: options.writeTransform ?? true,
  }), [options.maxCompression, options.maxStretch, options.maxTiltDeg, options.maxTranslatePx, options.writeTransform]);

  const apply = useCallback((state?: AppIntentMassState) => {
    const element = ref.current;
    const field = fieldRef.current;
    if (!element || !field) return;

    applyIntentPressureToElement(
      element,
      state ?? field.read(),
      readOptions(),
      baseTransformRef.current,
    );
  }, [readOptions]);

  const tick = useCallback(() => {
    const field = fieldRef.current;
    if (!field) return;

    const state = field.step();
    apply(state);

    if (state.active) {
      frameRef.current = requestAnimationFrame(tick);
    } else {
      frameRef.current = null;
    }
  }, [apply]);

  const wake = useCallback(() => {
    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(tick);
    }
  }, [tick]);

  const pushAt = useCallback((event: PointerEvent, source: AppIntentPressureSource) => {
    const element = ref.current;
    const field = fieldRef.current;
    if (!element || !field) return;

    const sample = { x: event.clientX, y: event.clientY, at: performance.now() };
    const velocity = velocityFromSamples(lastSampleRef.current, sample);
    lastSampleRef.current = sample;

    const pressure = appIntentPressureFromElementPoint({
      source,
      target: options.target,
      clientX: event.clientX,
      clientY: event.clientY,
      rect: element.getBoundingClientRect(),
      force: sourceForce(source, velocity),
      radius: sourceRadius(source),
      velocity,
    });

    apply(field.push(pressure));
    wake();
  }, [apply, options.target, wake]);

  useEffect(() => {
    const element = ref.current;
    if (!element || options.enabled === false) return;

    baseTransformRef.current = element.style.transform === 'none' ? '' : element.style.transform;

    const previousWillChange = element.style.willChange;
    const previousTransformOrigin = element.style.transformOrigin;
    const previousTransform = element.style.transform;
    const previousTapHighlight = element.style.getPropertyValue('-webkit-tap-highlight-color');

    element.style.willChange = [previousWillChange, 'transform'].filter(Boolean).join(', ');
    element.style.setProperty('-webkit-tap-highlight-color', 'transparent');

    const clearHoldTimer = () => {
      if (holdTimerRef.current) {
        clearTimeout(holdTimerRef.current);
        holdTimerRef.current = null;
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      pointerIdRef.current = event.pointerId;
      lastSampleRef.current = null;
      pushAt(event, 'tap');

      clearHoldTimer();
      holdTimerRef.current = setTimeout(() => {
        pushAt(event, 'hold');
        holdTimerRef.current = null;
      }, 260);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (pointerIdRef.current !== event.pointerId) return;
      clearHoldTimer();
      pushAt(event, 'drag');
    };

    const onPointerUp = (event: PointerEvent) => {
      if (pointerIdRef.current !== event.pointerId) return;
      clearHoldTimer();
      pointerIdRef.current = null;
      lastSampleRef.current = null;
      const field = fieldRef.current;
      if (field) apply(field.release());
      wake();
    };

    const onPointerCancel = () => {
      clearHoldTimer();
      pointerIdRef.current = null;
      lastSampleRef.current = null;
      const field = fieldRef.current;
      if (field) apply(field.release(0.36));
      wake();
    };

    element.addEventListener('pointerdown', onPointerDown, { passive: true });
    element.addEventListener('pointermove', onPointerMove, { passive: true });
    element.addEventListener('pointerup', onPointerUp, { passive: true });
    element.addEventListener('pointercancel', onPointerCancel, { passive: true });

    return () => {
      element.removeEventListener('pointerdown', onPointerDown);
      element.removeEventListener('pointermove', onPointerMove);
      element.removeEventListener('pointerup', onPointerUp);
      element.removeEventListener('pointercancel', onPointerCancel);
      clearHoldTimer();

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }

      element.style.willChange = previousWillChange;
      element.style.transformOrigin = previousTransformOrigin;
      element.style.transform = previousTransform;
      if (previousTapHighlight) {
        element.style.setProperty('-webkit-tap-highlight-color', previousTapHighlight);
      } else {
        element.style.removeProperty('-webkit-tap-highlight-color');
      }
      element.removeAttribute('data-intent-pressure-target');
      element.removeAttribute('data-intent-pressure-active');
    };
  }, [apply, options.enabled, pushAt, wake]);

  const clear = useCallback(() => {
    const field = fieldRef.current;
    if (!field) return;
    apply(field.clear());
  }, [apply]);

  return {
    ref,
    clear,
  };
}
