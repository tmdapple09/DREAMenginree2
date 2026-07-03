'use client';

/**
 * dream.PhaseTrail — "ninja dash" afterimage effect.
 *
 * Plays once when the DreamDMBar FLINGS to an edge (snap-top / snap-bottom)
 * or the landscape seam divider flings to a side edge.
 *
 * Leaves 3 fading duplicates of the bar/seam silhouette behind it along the
 * path it travelled — pure motion effect, no glow, no sparkle, no laser.
 *
 * axis='y' (default) — portrait bar moves up/down (vertical trail)
 * axis='x'           — landscape seam moves left/right (horizontal trail)
 *
 * Self-contained: mounts, plays, calls onComplete, parent unmounts.
 * Animation driven by `sicc-phase-trail` keyframe in globals.css.
 */

import React, { useEffect } from 'react';

export interface PhaseTrailProps {
  /** Travel axis: 'y' = portrait bar (default), 'x' = landscape seam. */
  axis?: 'y' | 'x';
  /** px from viewport top (axis='y') or left (axis='x') where motion started. */
  fromPos: number;
  /** px from viewport top (axis='y') or left (axis='x') where motion ends. */
  toPos: number;
  /**
   * Leading edge inset of the bar silhouette (px).
   * axis='y': left inset.  axis='x': top inset (0 = full-height seam).
   */
  crossStart: number;
  /**
   * Trailing edge inset of the bar silhouette (px).
   * axis='y': right inset. axis='x': bottom inset (0 = full-height seam).
   */
  crossEnd: number;
  /**
   * Thickness of the silhouette perpendicular to travel (px).
   * axis='y': bar height.  axis='x': seam width.
   */
  thickness: number;
  borderRadius: number;
  onComplete: () => void;
}

/** Fractional positions along the fling path where each ghost sits. */
const GHOST_STEPS = [0.1, 0.36, 0.64] as const;
const TRAIL_DURATION_MS   = 240;
const GHOST_STAGGER_MS    = 26;

export default function PhaseTrail({
  axis = 'y',
  fromPos,
  toPos,
  crossStart,
  crossEnd,
  thickness,
  borderRadius,
  onComplete,
}: PhaseTrailProps) {
  useEffect(() => {
    const lastGhostStart = GHOST_STEPS.length * GHOST_STAGGER_MS;
    const timer = setTimeout(onComplete, TRAIL_DURATION_MS + lastGhostStart);
    return () => clearTimeout(timer);
    // onComplete is intentionally excluded — it should be a stable ref at the
    // call site; if it changed it would restart the timer, not the intent.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const d         = toPos - fromPos;
  const travelled = Math.abs(d);
  // Mild directional stretch: fast throws smear slightly more, capped so the
  // ghost never looks like the bar physically deformed.
  const stretch = Math.min(1.18, 1 + travelled / (thickness * 18));

  return (
    <div aria-hidden style={{ position: 'fixed', inset: 0, zIndex: 99, pointerEvents: 'none' }}>
      {GHOST_STEPS.map((step, i) => {
        const pos = fromPos + d * step;

        const positional: React.CSSProperties = axis === 'y'
          ? {
              left:   crossStart,
              right:  crossEnd,
              top:    pos,
              height: thickness,
              transform: `scaleY(${stretch})`,
              transformOrigin: d < 0 ? 'bottom' : 'top',
            }
          : {
              top:    crossStart,
              bottom: crossEnd,
              left:   pos,
              width:  thickness,
              transform: `scaleX(${stretch})`,
              transformOrigin: d < 0 ? 'right' : 'left',
            };

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              ...positional,
              borderRadius,
              background: 'rgba(244,246,250,0.85)',
              border:     '1px solid rgba(200,152,26,0.12)',
              animation:  `sicc-phase-trail ${TRAIL_DURATION_MS}ms cubic-bezier(0.2,0.8,0.2,1) ${i * GHOST_STAGGER_MS}ms both`,
            }}
          />
        );
      })}
    </div>
  );
}
