'use client';

import { isCompactRuntimeViewport, readInteractiveViewportScale, readInteractiveViewportWidth } from '@/components/ui-system/runtimeViewport';
import type { ApperceptiveContext } from '@/engine/runtime/apperception';
import React, { useCallback, useEffect, useState } from 'react';











const MIN_ZOOM = 0.5;

const MAX_ZOOM = 2.5;

const ZOOM_STEP = 0.15;
const COARSE_POINTER_QUERY = '(hover: none), (pointer: coarse)';


const CHROME_BAR_H = 44;







interface RuntimeShellProps {
  
  children: React.ReactNode;
  
  iframeUrl?: string | null;
  
  onCloseIframe?: () => void;
  
  iframeTitle?: string;
  
  apperception?: ApperceptiveContext;
}



export default function RuntimeShell({
  children,
  iframeUrl,
  onCloseIframe,
  iframeTitle,
  apperception,
}: RuntimeShellProps) {
  const [zoom, setZoom] = useState(1.0);
  const [showZoomControls, setShowZoomControls] = useState(true);
  const [allowNativeZoom, setAllowNativeZoom] = useState(false);

  useEffect(() => {
    if (!apperception || typeof window === 'undefined') return;
    window.dispatchEvent(new CustomEvent('dreamengin:apperception', { detail: apperception }));
  }, [apperception]);

  useEffect(() => {
    const coarseQuery = typeof window.matchMedia === 'function' ? window.matchMedia(COARSE_POINTER_QUERY) : null;
    const update = () => {
      const compact = isCompactRuntimeViewport(readInteractiveViewportWidth(window.innerWidth));
      const coarse = coarseQuery?.matches ?? false;
      const nativeZoom = compact || coarse || readInteractiveViewportScale() !== 1;
      setAllowNativeZoom(nativeZoom);
      setShowZoomControls(!nativeZoom);
      if (nativeZoom) setZoom(1);
    };
    update();
    const onMediaChange = () => update();
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);
    window.visualViewport?.addEventListener('resize', update);
    window.visualViewport?.addEventListener('scroll', update);
    coarseQuery?.addEventListener?.('change', onMediaChange);
    coarseQuery?.addListener?.(onMediaChange);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
      window.visualViewport?.removeEventListener('resize', update);
      window.visualViewport?.removeEventListener('scroll', update);
      coarseQuery?.removeEventListener?.('change', onMediaChange);
      coarseQuery?.removeListener?.(onMediaChange);
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
      className="de-runtime-premium-shell"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        overscrollBehavior: 'contain',
        contain: 'layout paint size',
        background: 'linear-gradient(135deg, rgba(8,18,34,0.10), rgba(56,189,248,0.04) 46%, rgba(216,158,45,0.05))',
      }}
    >

      
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

      
      {iframeUrl ? (
        
        <>
          
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
        
        <div
          data-runtime-scroll-container
          className="de-runtime-premium-scroll"
          style={{
            position: 'absolute',
            inset: 0,
            overflowY: 'auto',
            overflowX: allowNativeZoom ? 'auto' : 'hidden',
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch',
            touchAction: allowNativeZoom ? 'pan-x pan-y pinch-zoom' : 'manipulation',
          }}
        >
          <div
            style={allowNativeZoom ? {
              position: 'relative',
              width: '100%',
              minHeight: '100%',
              display: 'flex',
              flexDirection: 'column',
            } : {
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






