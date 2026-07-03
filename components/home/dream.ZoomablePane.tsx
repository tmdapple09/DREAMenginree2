'use client';

/**
 * dream.ZoomablePane — isolated pinch-to-zoom wrapper for dual-pane layouts.
 *
 * Used in landscape mode to let the user pinch-zoom into either runtime pane
 * independently. Zoom is purely visual (CSS transform) — it does NOT affect
 * the device viewport, the other pane, or any layout outside this container.
 *
 * Gestures:
 *   Pinch (2 fingers) — zoom in/out, centred on the midpoint of the two fingers
 *   Double-tap        — reset zoom to 1× (restores origin too)
 *
 * Zoom range: 0.5× (zoom out) to 4.0× (zoom in)
 * Overflow:   hidden — scaled content clips to the pane boundary
 *
 * All touch events call stopPropagation() so the other pane and the seam
 * divider are never disturbed by this gesture.
 *
 * Extra div props (onDragOver, onDrop, etc.) are forwarded to the outer
 * container so dream-transfer drag events keep working in landscape mode.
 */

import React, { useCallback, useRef, useState, type ReactNode } from 'react';

export interface ZoomablePaneProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  children: ReactNode;
  /** Automatic runtime-scale supplied by the shell during split reveal/collapse. */
  baseScale?: number;
  /** Transform origin for the shell-controlled scale, usually pointed at the seam. */
  baseOrigin?: { x: number; y: number };
  /** Style for the runtime frame before user pinch zoom is applied. */
  frameStyle?: React.CSSProperties;
  /** Style for the pinch-scaled content layer. */
  contentStyle?: React.CSSProperties;
}

const MIN_SCALE  = 0.5;
const MAX_SCALE  = 4.0;
const DBL_TAP_MS = 300;

function getTouchDistance(a: React.Touch, b: React.Touch): number {
  return Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
}

function getTouchMidpoint(a: React.Touch, b: React.Touch) {
  return { x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 };
}

export default function ZoomablePane({
  children,
  style,
  baseScale = 1,
  baseOrigin = { x: 50, y: 50 },
  frameStyle,
  contentStyle,
  ...divProps
}: ZoomablePaneProps) {
  const [scale,       setScale]       = useState(1);
  const [origin,      setOrigin]      = useState({ x: 50, y: 50 });
  const [isGesturing, setIsGesturing] = useState(false);

  const gestureRef   = useRef<{ startDist: number; startScale: number } | null>(null);
  const lastTapRef   = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.touches.length === 2) {
      const dist = getTouchDistance(e.touches[0], e.touches[1]);
      const mid  = getTouchMidpoint(e.touches[0], e.touches[1]);
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setOrigin({
          x: ((mid.x - rect.left)  / rect.width)  * 100,
          y: ((mid.y - rect.top)   / rect.height) * 100,
        });
      }
      gestureRef.current = { startDist: dist, startScale: scale };
      setIsGesturing(true);
      return;
    }
    if (e.touches.length === 1) {
      const now = Date.now();
      if (now - lastTapRef.current < DBL_TAP_MS) {
        setScale(1);
        setOrigin({ x: 50, y: 50 });
      }
      lastTapRef.current = now;
    }
  }, [scale]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.touches.length !== 2 || !gestureRef.current) return;
    e.preventDefault();
    const newDist = getTouchDistance(e.touches[0], e.touches[1]);
    const raw = gestureRef.current.startScale * (newDist / gestureRef.current.startDist);
    setScale(Math.max(MIN_SCALE, Math.min(MAX_SCALE, raw)));
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.touches.length < 2) {
      gestureRef.current = null;
      setIsGesturing(false);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      {...divProps}
      style={{ ...style, overflow: 'hidden', position: 'relative' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        style={{
          width:          '100%',
          height:         '100%',
          ...frameStyle,
          transform:      `scale(${baseScale})`,
          transformOrigin:`${baseOrigin.x}% ${baseOrigin.y}%`,
          transition:     isGesturing ? 'none' : 'transform 0.18s ease-out',
          willChange:     'transform',
        }}
      >
        <div
          style={{
            width:          '100%',
            height:         '100%',
            ...contentStyle,
            transform:      `scale(${scale})`,
            transformOrigin:`${origin.x}% ${origin.y}%`,
            transition:     isGesturing ? 'none' : 'transform 0.15s ease-out',
            willChange:     'transform',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
