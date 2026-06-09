'use client';

import { isCompactRuntimeViewport } from '@/lib/ui/runtimeViewport';
import React, { useCallback, useEffect, useState } from 'react';

// Framework directives stay physically first when required.

// Runtime file: components/runtime/dream.shell.RuntimeShell.tsx.

/**
 * RuntimeShell
 *
 * A self-contained scrollable, zoomable, iframe-capable frame that wraps
 * every runtime world. Two instances run in parallel inside HomeSystem —
 * one for Surface Space, one for DreamSpace.
 *
 * Features:
 *  • Floating zoom controls (+ / %) that sit outside the scalable layer.
 *  • Inner scrollable + zoomable content via CSS transform-based viewport trick.
 *  • Iframe mode: when `iframeUrl` is set a chrome bar + `<iframe>` replace the
 *    children so the user never leaves the home surface.
 *
 * Safe-area sizing is handled by the PARENT (HomeSystem region containers) which
 * already exclude the DreamDMBar area via top/bottom CSS. RuntimeShell therefore
 * always receives a correctly-sized box and needs no internal inset clipping.
 */

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

const MIN_ZOOM = 0.5;

const MAX_ZOOM = 2.5;

const ZOOM_STEP = 0.15;

/** Height of the in-region iframe chrome bar (Back button + title) */
const CHROME_BAR_H = 44;

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

interface RuntimeShellProps {
  /** World content rendered when no iframe is open */
  children: React.ReactNode;
  /** When set, displays this URL in an in-region iframe instead of children */
  iframeUrl?: string | null;
  /** Called when the user taps Back to dismiss the iframe */
  onCloseIframe?: () => void;
  /** Optional label shown in the iframe chrome bar */
  iframeTitle?: string;
}

// Runtime functions, classes, handlers, and state transitions.

export default function RuntimeShell({
  children,
  iframeUrl,
  onCloseIframe,
  iframeTitle,
}: RuntimeShellProps) {
  const [zoom, setZoom] = useState(1.0);
  const [showZoomControls, setShowZoomControls] = useState(true);

  useEffect(() => {
    const update = () => setShowZoomControls(!isCompactRuntimeViewport(window.innerWidth));
    update();
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);
    window.visualViewport?.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
      window.visualViewport?.removeEventListener('resize', update);
    };
  }, []);

  const zoomIn  = useCallback(() => setZoom((z) => Math.min(Math.round((z + ZOOM_STEP) * 100) / 100, MAX_ZOOM)), []);
  const zoomOut = useCallback(() => setZoom((z) => Math.max(Math.round((z - ZOOM_STEP) * 100) / 100, MIN_ZOOM)), []);
  const resetZoom = useCallback(() => setZoom(1.0), []);

  const pct = Math.round(zoom * 100);
  const isDefault = pct === 100;

  const ctrlBtn = (disabled: boolean): React.CSSProperties => ({
    width: 30, height: 30, borderRadius: '50%',
    border: 'none',
    background: disabled ? 'transparent' : 'rgba(255,255,255,0.16)',
    color: disabled ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.96)',
    fontSize: 18, fontWeight: 700,
    cursor: disabled ? 'default' : 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    lineHeight: 1,
    boxShadow: disabled ? 'none' : 'inset 0 1px 0 rgba(255,255,255,0.18)',
    transition: 'background 0.12s, color 0.12s, transform 0.12s ease',
    WebkitTapHighlightColor: 'transparent',
    flexShrink: 0,
  });

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        overscrollBehavior: 'contain',
        contain: 'layout paint size',
      }}
    >

      {/* ── Zoom controls — top-right of the region, never zoomed ───────── */}
      {showZoomControls && (
        <div
          className="premium-card de-os-panel de-runtime-seam de-material-enter"
          style={{
            position: 'absolute',
            top: 10,
            right: 16,
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '8px 8px 8px 10px',
            userSelect: 'none',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', padding: '0 6px 0 2px' }}>
            <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.44)' }}>
              Workspace
            </span>
            <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.88)' }}>
              View
            </span>
          </div>
          <button
            type="button"
            onClick={zoomOut}
            disabled={zoom <= MIN_ZOOM}
            aria-label="Zoom out"
            style={ctrlBtn(zoom <= MIN_ZOOM)}
          >
            −
          </button>
          <button
            type="button"
            onClick={resetZoom}
            aria-label={`Reset zoom — currently ${pct}%`}
            style={{
                minWidth: 34,
                height: 24,
                borderRadius: 999,
                border: 'none',
                background: isDefault ? 'rgba(255,255,255,0.06)' : 'rgba(200,152,26,0.18)',
                color: isDefault ? 'rgba(255,255,255,0.64)' : '#f6d27b',
                fontSize: 11,
                fontWeight: 700,
                cursor: 'pointer',
                letterSpacing: '0.02em',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
                transition: 'background 0.12s, color 0.12s',
                WebkitTapHighlightColor: 'transparent',
                padding: '0 8px',
                flexShrink: 0,
            }}
          >
            {pct}%
          </button>
          <button
            type="button"
            onClick={zoomIn}
            disabled={zoom >= MAX_ZOOM}
            aria-label="Zoom in"
            style={ctrlBtn(zoom >= MAX_ZOOM)}
          >
            +
          </button>
        </div>
      )}

      {/* ── Content ─────────────────────────────────────────────────────── */}
      {iframeUrl ? (
        /* ── Iframe mode — a sub-page is open inside this region ── */
        <>
          {/* Chrome bar with back button */}
          <div
            className="premium-card de-os-panel de-runtime-seam de-material-enter"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: CHROME_BAR_H,
              zIndex: 199,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '0 10px',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            <button
              type="button"
              onClick={onCloseIframe}
              aria-label="Back to runtime"
              style={{
                display: 'flex', alignItems: 'center', gap: 4,
                padding: '6px 13px 6px 10px',
                border: 'none',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.96)',
                fontSize: 12, fontWeight: 700,
                cursor: 'pointer',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18)',
                WebkitTapHighlightColor: 'transparent',
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 15, lineHeight: 1 }}>‹</span>
              Back
            </button>
            {iframeTitle && (
              <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
                <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.40)' }}>
                  In-region page
                </span>
                <span
                  style={{
                    fontSize: 12, fontWeight: 700,
                    color: 'rgba(255,255,255,0.78)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    minWidth: 0,
                  }}
                >
                  {iframeTitle}
                </span>
              </div>
            )}
          </div>

          {/* Iframe — fills the region below the chrome bar */}
          <iframe
            src={iframeUrl}
            title={iframeTitle ?? 'Page'}
            style={{
              position: 'absolute',
              top: CHROME_BAR_H,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: `calc(100% - ${CHROME_BAR_H}px)`,
              border: 'none',
            }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock"
          />
        </>
      ) : (
        /*
         * ── Normal content mode — scrollable + zoomable ──
         *
         * The parent container (HomeSystem region div) is already sized to
         * exclude the DreamDMBar, so this div fills exactly the safe area.
         *
         * Technique: keep native scrolling on a dedicated viewport container,
         * then size the transformed child to `100/zoom %` of that viewport.
         * This keeps touch scrolling independent from the zoom transform and
         * lets HomeDream and DreamSpace remain independently scrollable.
         *
         *   zoom=1.0 → 100% × 100% → scale(1.0)  → fills parent exactly
         *   zoom=1.5 → 66.7% × 66.7% → scale(1.5) → fills parent exactly
         *   zoom=0.75 → 133% × 133% → scale(0.75) → fills parent exactly
         */
        <div
          data-runtime-scroll-container
          style={{
            position: 'absolute',
            inset: 0,
            overflowY: 'auto',
            overflowX: 'hidden',
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'manipulation',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: `${(100 / zoom).toFixed(4)}%`,
              minHeight: `${(100 / zoom).toFixed(4)}%`,
              transform: `scale(${zoom})`,
              transformOrigin: 'top left',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
