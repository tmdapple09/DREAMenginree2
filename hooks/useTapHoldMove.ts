'use client';

import { useCallback, useEffect, useRef } from 'react';
import type { ModuleManifest, RuntimeId } from '@/engine/editor/universalEditor';
import { canTransfer } from '@/engine/editor/universalEditor';



const HOLD_DURATION_MS    = 300;
const EDGE_THRESHOLD_PX   = 60;

function detectEdgeRuntime(
  clientX: number,
  clientY: number
): RuntimeId | null {
  const { innerWidth: W, innerHeight: H } = window;
  if (clientX < EDGE_THRESHOLD_PX)       return 'homedream';
  if (clientX > W - EDGE_THRESHOLD_PX)   return 'dreamspace';
  if (clientY < EDGE_THRESHOLD_PX)       return 'daydream:create';
  if (clientY > H - EDGE_THRESHOLD_PX)   return 'engin:content';
  return null;
}

export interface UseTapHoldMoveOptions {
  
  manifest: ModuleManifest;
  
  onTransfer(manifest: ModuleManifest, targetRuntime: RuntimeId): void;
}

export function useTapHoldMove(
  ref: React.RefObject<HTMLElement | null>,
  { manifest, onTransfer }: UseTapHoldMoveOptions
): void {
  const holdTimer    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragging     = useRef(false);
  const holdFired    = useRef(false);

  const clearHold = useCallback(() => {
    if (holdTimer.current !== null) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
    dragging.current  = false;
    holdFired.current = false;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onPointerDown = (e: PointerEvent) => {
      holdFired.current = false;
      holdTimer.current = setTimeout(() => {
        holdFired.current = true;
        dragging.current  = true;
        el.setPointerCapture(e.pointerId);
        el.style.cursor   = 'grabbing';
        el.style.opacity  = '0.75';
      }, HOLD_DURATION_MS);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      const target = detectEdgeRuntime(e.clientX, e.clientY);
      if (target && canTransfer(manifest, target)) {
        el.style.outline = '2px solid #fbbf24'; 
      } else {
        el.style.outline = '';
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      if (holdTimer.current !== null) {
        clearTimeout(holdTimer.current);
        holdTimer.current = null;
      }
      if (dragging.current && holdFired.current) {
        const target = detectEdgeRuntime(e.clientX, e.clientY);
        if (target && canTransfer(manifest, target)) {
          onTransfer(manifest, target);
        }
      }
      dragging.current  = false;
      holdFired.current = false;
      el.style.cursor   = '';
      el.style.opacity  = '';
      el.style.outline  = '';
    };

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup',   onPointerUp);
    el.addEventListener('pointercancel', clearHold);

    return () => {
      clearHold();
      el.removeEventListener('pointerdown',  onPointerDown);
      el.removeEventListener('pointermove',  onPointerMove);
      el.removeEventListener('pointerup',    onPointerUp);
      el.removeEventListener('pointercancel', clearHold);
    };
  }, [ref, manifest, onTransfer, clearHold]);
}
