'use client';

import NeuralSeamCanvas from '@/components/home/dream.NeuralSeamCanvas';
import ZoomablePane from '@/components/home/dream.ZoomablePane';
import { useDualRuntime } from '@/components/runtime/dream.DualRuntimeContainer';
import RuntimeView from '@/components/runtime/dream.RuntimeView';
import DreamDMBar from '@/dreamdmbar/dreamsurface.dreamdmbar';
import GlowingLight from '@/dreamdmbar/dream.GlowingLight';
import PhaseTrail from '@/dreamdmbar/dream.PhaseTrail';
import { useDreamLayout } from '@/hooks/useDreamLayout';
import { useDreamSystem } from '@/dreamdmbar/runtime/DreamSystemContext';
import {
  DIVIDER_H,
  SPLIT_RATIO_MIN,
  SPLIT_RATIO_MAX,
  snapSplitRatioOnRelease,
  calculatePointerVelocity,
} from '@/dreamdmbar/runtime/barInteractions';
import { useOS } from '@/engine/os/OSContext';
import {
  parseDreamDragData,
  surfaceForRuntime,
  transferDream,
  type DreamRuntime,
} from '@/engine/dreams/drag';
import { isPublicSurfacePath } from '@/engine/routing/surfaces';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react';

type Post = { id: string; content?: string; created_at?: string; [key: string]: unknown };

/**
 * PersistentDreamBar — Shell-First DreamDMBar wrapper and home container.
 *
 * Owns the always-mounted dual-runtime split:
 *   • HomeDream Surface  (top  in portrait  /  left  in landscape)
 *   • DreamSpace         (bottom in portrait /  right in landscape)
 *
 * PORTRAIT  — horizontal seam, gold particle, drag up/down.
 * LANDSCAPE — two side-by-side portrait-aspect columns, vertical seam,
 *             gold particle, drag left/right. Each pane has its own
 *             independent scroll axis AND pinch-to-zoom (via ZoomablePane).
 *
 * The split ratio (0..1) is shared across orientations — rotating the phone
 *  preserves whatever split the user had before.
 *
 * VISIBILITY RULE:
 *   Both regions are always MOUNTED. display:none when not on /homedream so
 *   they never cover page content; state is preserved across navigation.
 *
 * BAR MINIMIZE RULE (Bar Ownership Law §0):
 *   Hiding the bar collapses ONLY the bar UI. Both runtime regions stay at
 *   exactly the split position they held — they do not move.
 *
 * Hidden on public / pre-login routes only.
 */

const DEFAULT_WORKFLOW_SPLIT = 0.5;

/**
 * Minimum velocity (px/ms) for the landscape seam to auto-complete a throw
 * all the way to the edge (mirrors BAR_FLING_TO_TOP/BOTTOM thresholds for
 * portrait mode so the two gestures feel identical).
 */

/** Width of the visible vertical seam in landscape (matches portrait DIVIDER_H). */
const SEAM_W = DIVIDER_H;
/** Compact landscape hit target around the 2px visual seam (~0.15in on 3x iPhone displays). */
const LANDSCAPE_SEAM_HIT_W = 24;
const LANDSCAPE_SEAM_HIT_INSET = (LANDSCAPE_SEAM_HIT_W - SEAM_W) / 2;
/** Landscape particle uses the same diameter and slop as portrait seam mode. */
const LANDSCAPE_PARTICLE_D = 12;
const LANDSCAPE_SEAM_DRAG_SLOP = 4;
const PORTRAIT_PHONE_FALLBACK_ASPECT = 9 / 19.5;

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function smoothstep01(value: number): number {
  const t = clamp01(value);
  return t * t * (3 - 2 * t);
}

function revealScaleForShare(share: number): number {
  // Small/collapsing regions become whole-runtime thumbnails. Once a region
  // owns about half the screen, it reaches normal scale.
  const t = smoothstep01((share - 0.08) / 0.42);
  return 0.74 + 0.26 * t;
}

export default function PersistentDreamBar() {
  const pathname    = usePathname();
  const dualRuntime = useDualRuntime();
  const {
    openBothMenus,
    openDrEams,
    runtimeCallbacks,
    splitRatio,
    setSplitRatio,
    isBarMinimized,
    setIsBarMinimized,
    homeData,
  } = useDreamSystem();

  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth,  setViewportWidth]  = useState(0);
  const [isLandscape,    setIsLandscape]    = useState(false);
  const [isDividerDragging, setIsDividerDragging] = useState(false);
  const [landscapeTrail, setLandscapeTrail] =
    useState<{ fromPos: number; toPos: number } | null>(null);
  const [landscapeParticlePos, setLandscapeParticlePos] =
    useState<{ x: number; y: number } | null>(null);

  const os = useOS();
  const { layout, updateDreamLayout } = useDreamLayout();

  // ── Viewport / orientation tracking ────────────────────────────────────────
  useEffect(() => {
    let settleTimer: number | undefined;

    const update = () => {
      const w = window.visualViewport?.width  ?? window.innerWidth;
      const h = window.visualViewport?.height ?? window.innerHeight;
      setViewportHeight(h);
      setViewportWidth(w);
      setIsLandscape(w > h);
    };

    const updateWithSettlePass = () => {
      update();
      window.requestAnimationFrame(update);
      if (settleTimer !== undefined) window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(update, 120);
    };

    updateWithSettlePass();
    window.addEventListener('resize',            updateWithSettlePass, { passive: true });
    window.addEventListener('orientationchange', updateWithSettlePass, { passive: true });
    window.visualViewport?.addEventListener('resize', updateWithSettlePass, { passive: true });

    return () => {
      if (settleTimer !== undefined) window.clearTimeout(settleTimer);
      window.removeEventListener('resize',            updateWithSettlePass);
      window.removeEventListener('orientationchange', updateWithSettlePass);
      window.visualViewport?.removeEventListener('resize', updateWithSettlePass);
    };
  }, []);

  // ── Landscape seam drag ────────────────────────────────────────────────────
  // Mirrors the portrait divider drag in dreamsurface.dreamdmbar.tsx:
  //   • Slow drag  → parks wherever the user lets go (free placement).
  //   • Fast throw past the 20% fling line → auto-completes to the edge.
  //   • Phase trail plays when an auto-complete fires.

  const seamDragRef = useRef<{
    active: boolean;
    startX: number;
    startY: number;
    lastX: number;
    lastAt: number;
    velocity: number;
    hasMovedPastSlop: boolean;
  }>({ active: false, startX: 0, startY: 0, lastX: 0, lastAt: 0, velocity: 0, hasMovedPastSlop: false });

  const handleSeamPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const ref = seamDragRef.current;
    const now = performance.now();
    ref.active = true;
    ref.startX = e.clientX;
    ref.startY = e.clientY;
    ref.lastX = e.clientX;
    ref.lastAt = now;
    ref.velocity = 0;
    ref.hasMovedPastSlop = false;

    setIsDividerDragging(false);
    setLandscapeParticlePos(null);
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const handleSeamPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const ref = seamDragRef.current;
    if (!ref.active) return;

    const now = performance.now();
    ref.velocity = calculatePointerVelocity(ref.lastX, e.clientX, ref.lastAt, now);
    ref.lastX    = e.clientX;
    ref.lastAt   = now;

    if (!ref.hasMovedPastSlop) {
      const dx = e.clientX - ref.startX;
      const dy = e.clientY - ref.startY;
      if (Math.hypot(dx, dy) < LANDSCAPE_SEAM_DRAG_SLOP) return;
      ref.hasMovedPastSlop = true;
      setIsDividerDragging(true);
    }

    setLandscapeParticlePos({ x: e.clientX, y: e.clientY });

    const availW = viewportWidth - SEAM_W;
    if (availW <= 0) return;
    const rawRatio = Math.max(SPLIT_RATIO_MIN, Math.min(SPLIT_RATIO_MAX, e.clientX / availW));
    setSplitRatio(rawRatio);
  }, [viewportWidth, setSplitRatio]);

  const handleSeamPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const ref = seamDragRef.current;
    if (!ref.active) return;

    ref.active = false;
    setIsDividerDragging(false);
    setLandscapeParticlePos(null);

    if (!ref.hasMovedPastSlop) {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
      return;
    }

    const availW = viewportWidth - SEAM_W;
    if (availW <= 0) return;

    const now = performance.now();
    const vel = calculatePointerVelocity(ref.lastX, e.clientX, ref.lastAt, now);
    const velocity = Number.isFinite(vel) ? vel : ref.velocity;
    const rawRatio   = Math.max(SPLIT_RATIO_MIN, Math.min(SPLIT_RATIO_MAX, e.clientX / availW));
    const finalRatio = snapSplitRatioOnRelease(rawRatio, velocity);

    // Fire trail only on a genuine fling-to-edge, not a slow-park or
    // the tiny edge-assist nudge (< 24 px difference on screen).
    const rawX   = rawRatio   * availW;
    const finalX = finalRatio * availW;
    if (Math.abs(finalX - rawX) > 24) {
      setLandscapeTrail({ fromPos: rawX, toPos: finalX });
    }

    setSplitRatio(finalRatio);

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  }, [viewportWidth, setSplitRatio]);

  // ── Runtime callbacks ──────────────────────────────────────────────────────
  const revealSplitRuntime = useCallback((nextRatio = DEFAULT_WORKFLOW_SPLIT) => {
    setIsBarMinimized(false);
    setSplitRatio((current) => {
      if (current >= 0.98 || current <= 0.02) return nextRatio;
      return current;
    });
  }, [setIsBarMinimized, setSplitRatio]);

  const handleHomeDreamSpace = useCallback(() => {
    if (runtimeCallbacks?.openHomeDreamSpace) {
      runtimeCallbacks.openHomeDreamSpace();
    } else {
      dualRuntime.goToHomeDreamSpace();
      revealSplitRuntime(DEFAULT_WORKFLOW_SPLIT);
    }
  }, [runtimeCallbacks, dualRuntime, revealSplitRuntime]);

  const openDreamSpaceInSurface = useCallback(() => {
    // Per user request: the plain "DreamSpace" link in HomeDream switches the
    // active world WITHOUT forcing the split-screen / bar open. The dedicated
    // reveal button (onRevealSplitRuntime below) handles that separately.
    dualRuntime.goToDreamSpace();
  }, [dualRuntime]);

  /**
   * Reveals the dual-runtime split (un-minimizes the bar + opens the second
   * runtime). Wired to the particle-look reveal button in HomeDream, which
   * sits next to the DreamSpace link and disappears once tapped.
   */
  const revealSplitRuntimeFromHome = useCallback(() => {
    revealSplitRuntime(DEFAULT_WORKFLOW_SPLIT);
  }, [revealSplitRuntime]);

  const openInSurfaceRegion = useCallback((path: string) => {
    dualRuntime.setTopRuntime({ type: 'custom', path });
    revealSplitRuntime(Math.max(splitRatio, 0.5));
  }, [dualRuntime, revealSplitRuntime, splitRatio]);

  const openEnginInSurfaceRegion = useCallback((enginName: string) => {
    dualRuntime.setTopRuntime({ type: 'engin', name: enginName });
    revealSplitRuntime(Math.max(splitRatio, 0.5));
  }, [dualRuntime, revealSplitRuntime, splitRatio]);

  const backFromSurfaceRegion = useCallback(() => {
    dualRuntime.setTopRuntime('HomeDream Surface');
  }, [dualRuntime]);

  const openInDreamRegion = useCallback((path: string) => {
    dualRuntime.setBottomRuntime({ type: 'custom', path });
    revealSplitRuntime(Math.min(splitRatio, 0.5));
  }, [dualRuntime, revealSplitRuntime, splitRatio]);

  const openEnginInDreamRegion = useCallback((enginName: string) => {
    dualRuntime.setBottomRuntime({ type: 'engin', name: enginName });
    revealSplitRuntime(Math.min(splitRatio, 0.5));
  }, [dualRuntime, revealSplitRuntime, splitRatio]);

  const backFromDreamRegion = useCallback(() => {
    dualRuntime.setBottomRuntime('DreamSpace');
  }, [dualRuntime]);

  const handleDreamDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>, toRuntime: DreamRuntime) => {
      const raw =
        event.dataTransfer.getData('application/x-dreamengin-dream') ||
        event.dataTransfer.getData('text/plain');
      const dreamData = parseDreamDragData(raw);
      if (!dreamData) return;
      event.preventDefault();
      const rect     = event.currentTarget.getBoundingClientRect();
      const position = {
        x: Math.round(event.clientX - rect.left),
        y: Math.round(event.clientY - rect.top),
      };
      const toSurface   = surfaceForRuntime(toRuntime);
      const fromRuntime = dreamData.runtime;
      void transferDream(
        { ...dreamData, runtime: toRuntime, surface: toSurface, position },
        fromRuntime, toRuntime, position,
      );
      os.bus.emit('dream:transfer', { dreamData, fromRuntime, toRuntime, position });
      const fromSurface  = dreamData.surface;
      const nextLayout   = {
        home:       { dreams: layout.home.dreams.filter((id) => id !== dreamData.dream_id) },
        dreamspace: { dreams: layout.dreamspace.dreams.filter((id) => id !== dreamData.dream_id) },
      };
      nextLayout[toSurface].dreams = [...nextLayout[toSurface].dreams, dreamData.dream_id];
      if (fromSurface !== toSurface) updateDreamLayout(nextLayout);
    },
    [layout, os.bus, updateDreamLayout],
  );

  const swapDreamRuntimes = useCallback(() => {
    const previousLayout = {
      home:       { dreams: [...layout.home.dreams] },
      dreamspace: { dreams: [...layout.dreamspace.dreams] },
      hidden:     layout.hidden ? [...layout.hidden] : [],
    };
    const nextLayout = {
      home:       { dreams: layout.dreamspace.dreams },
      dreamspace: { dreams: layout.home.dreams },
      hidden:     layout.hidden ?? [],
    };
    updateDreamLayout(nextLayout, 0);
    os.bus.emit('dream:transfer', {
      gesture:    'swap-runtimes',
      home:       nextLayout.home.dreams,
      dreamspace: nextLayout.dreamspace.dreams,
    });
    window.dispatchEvent(
      new CustomEvent('dream:transfer', {
        detail: {
          gesture:    'swap-runtimes',
          home:       nextLayout.home.dreams,
          dreamspace: nextLayout.dreamspace.dreams,
        },
      }),
    );
    void fetch('/api/dreams/transfer', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dreamData:   { dream_id: '__swap__', type: 'runtime-swap' },
        fromRuntime: 'HOME',
        toRuntime:   'FACE',
        swap:        true,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Runtime swap failed');
      })
      .catch((error: unknown) => {
        updateDreamLayout(previousLayout, 0);
        os.bus.emit('dream:transfer:rollback', previousLayout);
        console.error('[Dream runtime swap]', error);
      });
  }, [layout.dreamspace.dreams, layout.hidden, layout.home.dreams, os.bus, updateDreamLayout]);

  // ── Visibility gate ────────────────────────────────────────────────────────
  if (isPublicSurfacePath(pathname)) return null;

  const isHomeRoute =
    pathname === '/homedream' ||
    pathname.startsWith('/homedream/') ||
    pathname === '/dreamdmbar' ||
    pathname.startsWith('/dreamdmbar/');
  const isHomeActive = runtimeCallbacks !== null || isHomeRoute;

  // ── Portrait geometry ──────────────────────────────────────────────────────
  const dividerHeight    = isBarMinimized ? 0 : DIVIDER_H;
  const runtimeSplitRatio = splitRatio;
  const topHeight        = `calc((100% - ${dividerHeight}px) * ${runtimeSplitRatio})`;
  const bottomRegionTop  = `calc(${topHeight} + ${dividerHeight}px)`;
  const bottomHeight     = `calc(100% - ${bottomRegionTop})`;
  const seamOffset       = viewportHeight > 0
    ? Math.round(((viewportHeight - dividerHeight) * runtimeSplitRatio) + dividerHeight / 2)
    : undefined;

  // ── Landscape geometry ─────────────────────────────────────────────────────
  // splitRatio maps to horizontal space: 0 = seam at far left, 1 = far right.
  // Left pane  = splitRatio fraction of available width (minus SEAM_W).
  // Right pane = remainder.
  const leftWidth       = `calc((100% - ${SEAM_W}px) * ${runtimeSplitRatio})`;
  const rightRegionLeft = `calc(${leftWidth} + ${SEAM_W}px)`;
  const rightWidth      = `calc(100% - ${rightRegionLeft})`;
  const landscapeAvailW = Math.max(0, viewportWidth - SEAM_W);
  const leftPaneWidthPx = landscapeAvailW * runtimeSplitRatio;
  const rightPaneWidthPx = Math.max(0, viewportWidth - leftPaneWidthPx - SEAM_W);
  const portraitPhoneAspect = viewportWidth > 0 && viewportHeight > 0
    ? Math.min(viewportWidth, viewportHeight) / Math.max(viewportWidth, viewportHeight)
    : PORTRAIT_PHONE_FALLBACK_ASPECT;

  const phoneFrameForPane = (paneWidthPx: number): React.CSSProperties => {
    const pad = 12;
    const maxW = Math.max(1, paneWidthPx - pad * 2);
    const maxH = Math.max(1, viewportHeight - pad * 2);
    const frameW = Math.max(1, Math.min(maxW, maxH * portraitPhoneAspect));
    const frameH = Math.max(1, frameW / portraitPhoneAspect);
    return {
      width: frameW,
      height: frameH,
      maxWidth: '100%',
      maxHeight: '100%',
      overflow: 'hidden',
      borderRadius: 28,
      background: 'var(--de-surface-space-bg, #f0f4fb)',
      border: '1px solid rgba(255,255,255,0.44)',
      boxShadow: '0 18px 48px rgba(0,0,0,0.22), 0 0 0 1px rgba(10,20,30,0.08)',
    };
  };

  const topRevealScale = revealScaleForShare(runtimeSplitRatio);
  const bottomRevealScale = revealScaleForShare(1 - runtimeSplitRatio);
  const leftRevealScale = topRevealScale;
  const rightRevealScale = bottomRevealScale;

  // ── LANDSCAPE RENDER ───────────────────────────────────────────────────────
  if (isLandscape && isHomeActive) {
    const showHomeData = homeData !== null || isHomeRoute;
    return (
      <>
        {/* Landscape phase trail — horizontal seam fling afterimage */}
        {landscapeTrail && (
          <PhaseTrail
            axis="x"
            fromPos={landscapeTrail.fromPos}
            toPos={landscapeTrail.toPos}
            crossStart={0}
            crossEnd={0}
            thickness={SEAM_W}
            borderRadius={4}
            onComplete={() => setLandscapeTrail(null)}
          />
        )}

        {/* ── Left pane — HomeDream Surface ──────────────────────────────── */}
        <ZoomablePane
          baseScale={leftRevealScale}
          baseOrigin={{ x: 100, y: 50 }}
          frameStyle={phoneFrameForPane(leftPaneWidthPx)}
          contentStyle={{ borderRadius: 'inherit', overflow: 'hidden' }}
          style={{
            position: 'fixed',
            top:    0,
            left:   0,
            width:  leftWidth,
            height: '100%',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(180deg, rgba(240,244,251,0.86), rgba(226,232,244,0.72))',
          }}
          onDragOver={(event: React.DragEvent<HTMLDivElement>) => event.preventDefault()}
          onDrop={(event: React.DragEvent<HTMLDivElement>) => handleDreamDrop(event, 'HOME')}
        >
          {showHomeData && (
            <RuntimeView
              world={dualRuntime.state.surfaceSpaceWorld}
              isActive={true}
              userId={homeData?.userId}
              profile={homeData?.profile ?? null}
              posts={(homeData?.initialPosts ?? []) as Post[]}
              isAdmin={homeData?.isAdmin ?? false}
              onOpenDrEams={openDrEams}
              onOpenDreamSpace={openDreamSpaceInSurface}
              onRevealSplitRuntime={revealSplitRuntimeFromHome}
              onOpenInRegion={openInSurfaceRegion}
              onOpenEngin={openEnginInSurfaceRegion}
              runtimeId="homedream"
              onBackFromRegion={backFromSurfaceRegion}
              seamOffsetPx={seamOffset}
              splitRatio={runtimeSplitRatio}
              seamVisible={!isBarMinimized}
              dominantRegion={dualRuntime.state.dominantRegion}
            />
          )}
        </ZoomablePane>

        {isDividerDragging && landscapeParticlePos && (
          <div
            aria-hidden="true"
            style={{
              position: 'fixed',
              left: landscapeParticlePos.x - LANDSCAPE_PARTICLE_D / 2,
              top:  landscapeParticlePos.y - LANDSCAPE_PARTICLE_D / 2,
              width: LANDSCAPE_PARTICLE_D,
              height: LANDSCAPE_PARTICLE_D,
              borderRadius: '50%',
              zIndex: 12,
              pointerEvents: 'none',
              background: 'radial-gradient(circle at center, rgba(255,223,64,0.98) 0%, rgba(232,184,48,0.85) 45%, rgba(200,152,26,0.55) 75%, transparent 100%)',
              boxShadow: '0 0 16px 8px rgba(255,215,64,0.72), 0 0 32px 14px rgba(200,152,26,0.48), 0 0 2px rgba(255,248,180,0.95)',
              animation: 'dream-gold-particle-breathe 0.9s ease-in-out infinite alternate',
            }}
          />
        )}

        {/* ── Vertical seam divider ──────────────────────────────────────── */}
        {/* Visible seam remains 2px; invisible hitbox is compact but easier to grab. */}
        {/* The drag transformation mirrors portrait seam → particle mode.   */}
        <div
          role="separator"
          aria-label="Resize panes — drag left/right, fling to edge to snap"
          style={{
            position:    'fixed',
            top:         0,
            left:        `calc(${leftWidth} - ${LANDSCAPE_SEAM_HIT_INSET}px)`,
            width:       LANDSCAPE_SEAM_HIT_W,
            height:      '100%',
            zIndex:      10,
            cursor:      isDividerDragging ? 'grabbing' : 'col-resize',
            touchAction: 'none',
            display:     'flex',
            alignItems:  'center',
            justifyContent: 'center',
            background:  'transparent',
            WebkitTapHighlightColor: 'transparent',
          }}
          onPointerDown={handleSeamPointerDown}
          onPointerMove={handleSeamPointerMove}
          onPointerUp={handleSeamPointerUp}
          onPointerCancel={handleSeamPointerUp}
        >
          <div
            aria-hidden="true"
            style={{
              width: SEAM_W,
              height: '100%',
              background: 'var(--de-surface-space-bg, rgba(240,244,251,0.68))',
              boxShadow: '0 0 12px rgba(232,192,64,0.28)',
            }}
          />
          {!isDividerDragging && (
            <GlowingLight
              isDragging={false}
              aria-label="Drag to resize, fling to edge"
              style={{ position: 'absolute', pointerEvents: 'none' }}
            />
          )}
        </div>

        {/* ── Right pane — DreamSpace ────────────────────────────────────── */}
        <ZoomablePane
          baseScale={rightRevealScale}
          baseOrigin={{ x: 0, y: 50 }}
          frameStyle={phoneFrameForPane(rightPaneWidthPx)}
          contentStyle={{ borderRadius: 'inherit', overflow: 'hidden' }}
          style={{
            position: 'fixed',
            top:    0,
            left:   rightRegionLeft,
            width:  rightWidth,
            height: '100%',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(180deg, rgba(236,240,250,0.86), rgba(222,229,242,0.72))',
          }}
          onDragOver={(event: React.DragEvent<HTMLDivElement>) => event.preventDefault()}
          onDrop={(event: React.DragEvent<HTMLDivElement>) => handleDreamDrop(event, 'FACE')}
        >
          {showHomeData && (
            <RuntimeView
              world={dualRuntime.state.dreamSpaceWorld}
              isActive={true}
              userId={homeData?.userId}
              profile={homeData?.profile ?? null}
              posts={(homeData?.initialPosts ?? []) as Post[]}
              isAdmin={homeData?.isAdmin ?? false}
              onOpenDrEams={openDrEams}
              onOpenDreamSpace={handleHomeDreamSpace}
              onOpenInRegion={openInDreamRegion}
              onOpenEngin={openEnginInDreamRegion}
              runtimeId="dreamspace"
              onBackFromRegion={backFromDreamRegion}
              seamOffsetPx={seamOffset}
              splitRatio={runtimeSplitRatio}
              seamVisible={!isBarMinimized}
              dominantRegion={dualRuntime.state.dominantRegion}
            />
          )}
        </ZoomablePane>
      </>
    );
  }

  // ── PORTRAIT RENDER (existing behavior, unchanged) ─────────────────────────
  return (
    <>
      <NeuralSeamCanvas active={isHomeActive} splitRatio={splitRatio} />

      {/* ── HomeDream Surface (top runtime) ──────────────────────────────── */}
      <div
        style={{
          display:      isHomeActive ? 'block' : 'none',
          position:     'fixed',
          top:          0,
          left:         0,
          right:        0,
          height:       topHeight,
          zIndex:       1,
          overflow:     'hidden',
          borderBottom: isBarMinimized ? '1px solid rgba(93,232,255,0.12)' : 'none',
        }}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => handleDreamDrop(event, 'HOME')}
      >
        {(homeData || isHomeRoute) && (
          <ZoomablePane
            baseScale={topRevealScale}
            baseOrigin={{ x: 50, y: 100 }}
            style={{ width: '100%', height: '100%' }}
            frameStyle={{ width: '100%', height: '100%' }}
          >
            <RuntimeView
              world={dualRuntime.state.surfaceSpaceWorld}
              isActive={true}
              userId={homeData?.userId}
              profile={homeData?.profile ?? null}
              posts={(homeData?.initialPosts ?? []) as Post[]}
              isAdmin={homeData?.isAdmin ?? false}
              onOpenDrEams={openDrEams}
              onOpenDreamSpace={openDreamSpaceInSurface}
              onRevealSplitRuntime={revealSplitRuntimeFromHome}
              onOpenInRegion={openInSurfaceRegion}
              onOpenEngin={openEnginInSurfaceRegion}
              runtimeId="homedream"
              onBackFromRegion={backFromSurfaceRegion}
              seamOffsetPx={seamOffset}
              splitRatio={runtimeSplitRatio}
              seamVisible={!isBarMinimized}
              dominantRegion={dualRuntime.state.dominantRegion}
            />
          </ZoomablePane>
        )}
      </div>

      {/* ── Divider zone fill ────────────────────────────────────────────── */}
      {isHomeActive && !isBarMinimized && (
        <div
          aria-hidden="true"
          style={{
            position:     'fixed',
            left:         0,
            right:        0,
            top:          topHeight,
            height:       dividerHeight,
            zIndex:       1,
            pointerEvents:'none',
            background:   'var(--de-surface-space-bg, #f0f4fb)',
          }}
        />
      )}

      {/* ── DreamDMBar ───────────────────────────────────────────────────── */}
      <DreamDMBar
        onBothMenus={openBothMenus}
        splitRatio={isHomeActive ? splitRatio : undefined}
        onSplitChange={isHomeActive ? setSplitRatio : undefined}
        onMinimizedChange={isHomeActive ? setIsBarMinimized : undefined}
        onSwapRuntimes={isHomeActive ? swapDreamRuntimes : undefined}
      />

      {/* ── DreamSpace (bottom runtime) ──────────────────────────────────── */}
      <div
        style={{
          display:   isHomeActive ? 'block' : 'none',
          position:  'fixed',
          left:      0,
          right:     0,
          top:       bottomRegionTop,
          height:    bottomHeight,
          zIndex:    1,
          overflow:  'hidden',
          borderTop: isBarMinimized ? '1px solid rgba(232,192,64,0.1)' : 'none',
        }}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => handleDreamDrop(event, 'FACE')}
      >
        {(homeData || isHomeRoute) && (
          <ZoomablePane
            baseScale={bottomRevealScale}
            baseOrigin={{ x: 50, y: 0 }}
            style={{ width: '100%', height: '100%' }}
            frameStyle={{ width: '100%', height: '100%' }}
          >
            <RuntimeView
              world={dualRuntime.state.dreamSpaceWorld}
              isActive={true}
              userId={homeData?.userId}
              profile={homeData?.profile ?? null}
              posts={(homeData?.initialPosts ?? []) as Post[]}
              isAdmin={homeData?.isAdmin ?? false}
              onOpenDrEams={openDrEams}
              onOpenDreamSpace={handleHomeDreamSpace}
              onOpenInRegion={openInDreamRegion}
              onOpenEngin={openEnginInDreamRegion}
              runtimeId="dreamspace"
              onBackFromRegion={backFromDreamRegion}
              seamOffsetPx={seamOffset}
              splitRatio={runtimeSplitRatio}
              seamVisible={!isBarMinimized}
              dominantRegion={dualRuntime.state.dominantRegion}
            />
          </ZoomablePane>
        )}
      </div>
    </>
  );
}

/**
 * DreamDMContainer — canonical architectural alias for PersistentDreamBar.
 */
export const DreamDMContainer = PersistentDreamBar;
