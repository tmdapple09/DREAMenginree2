"use client";

import type { ApperceptiveContext } from "@/engine/runtime/apperception";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

// Framework directives stay physically first when required.

// Runtime file: components/runtime/dream.shell.RuntimeShell.tsx.

/**
 * RuntimeShell
 *
 * A self-contained iframe-capable frame that wraps every runtime world.
 * Two instances run in parallel inside HomeSystem — one for Surface Space,
 * one for DreamSpace.
 *
 * Features:
 *  • No visible +/- zoom UI and no percentage controls.
 *  • Oversized runtime worlds can be pinched smaller directly on touchscreens.
 *  • Surfaces are measured inside the runtime frame so out-of-frame UI can be
 *    scaled into view instead of being permanently clipped.
 *  • Iframe mode: when `iframeUrl` is set a chrome bar + `<iframe>` replace the
 *    children so the user never leaves the home surface.
 *
 * Safe-area sizing is handled by the PARENT (HomeSystem region containers) which
 * already exclude the DreamDMBar area via top/bottom CSS. RuntimeShell therefore
 * always receives a correctly-sized box and needs no internal inset clipping.
 */

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

/** Height of the in-region iframe chrome bar (Back button + title) */
const CHROME_BAR_H = 44;
const MIN_TOUCH_SCALE = 0.25;
const MAX_TOUCH_SCALE = 1;
const FIT_EPSILON = 0.015;

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection points.

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
  /** Runtime-owned apperception context for bus/event consumers; DOM attributes remain debug-only. */
  apperception?: ApperceptiveContext;
}

type RuntimeSize = {
  width: number;
  height: number;
};

type TouchPoint = {
  x: number;
  y: number;
};

type PinchState = {
  distance: number;
  scale: number;
  contentX: number;
  contentY: number;
};

// Runtime functions, classes, handlers, and state transitions.

function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.max(min, Math.min(max, value));
}

function nearlyEqual(a: number, b: number): boolean {
  return Math.abs(a - b) <= 0.5;
}

function distance(a: TouchPoint, b: TouchPoint): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function center(a: TouchPoint, b: TouchPoint): TouchPoint {
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
  };
}

function getLocalPoint(element: HTMLElement, event: PointerEvent): TouchPoint {
  const rect = element.getBoundingClientRect();

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

function shouldUseMeasuredHeight(contentHeight: number, viewportHeight: number): boolean {
  if (viewportHeight <= 0) return false;

  /**
   * Long feeds should scroll vertically instead of shrinking the whole feed into
   * unreadable dust. Panels/studios that only overflow the runtime frame a bit
   * should auto-fit vertically because that is the common "controls are chopped"
   * failure mode on phones.
   */
  return contentHeight > viewportHeight && contentHeight <= viewportHeight * 1.75;
}

export default function RuntimeShell({
  children,
  iframeUrl,
  onCloseIframe,
  iframeTitle,
  apperception,
}: RuntimeShellProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const activePointersRef = useRef(new Map<number, TouchPoint>());
  const pinchRef = useRef<PinchState | null>(null);
  const userScaleRef = useRef<number | null>(null);

  const [viewportSize, setViewportSize] = useState<RuntimeSize>({
    width: 1,
    height: 1,
  });
  const [contentSize, setContentSize] = useState<RuntimeSize>({
    width: 1,
    height: 1,
  });
  const [userScale, setUserScale] = useState<number | null>(null);

  const measuredFitScale = useMemo(() => {
    const viewportWidth = Math.max(1, viewportSize.width);
    const viewportHeight = Math.max(1, viewportSize.height);
    const contentWidth = Math.max(viewportWidth, contentSize.width);
    const contentHeight = Math.max(viewportHeight, contentSize.height);

    const widthScale = contentWidth > viewportWidth
      ? viewportWidth / contentWidth
      : 1;
    const heightScale = shouldUseMeasuredHeight(contentHeight, viewportHeight)
      ? viewportHeight / contentHeight
      : 1;

    return clamp(Math.min(widthScale, heightScale), MIN_TOUCH_SCALE, MAX_TOUCH_SCALE);
  }, [contentSize.height, contentSize.width, viewportSize.height, viewportSize.width]);

  const runtimeScale = clamp(userScale ?? measuredFitScale, MIN_TOUCH_SCALE, MAX_TOUCH_SCALE);
  const isScaledOut = runtimeScale < MAX_TOUCH_SCALE - FIT_EPSILON;

  const logicalWidth = Math.max(
    viewportSize.width / runtimeScale,
    contentSize.width,
    viewportSize.width,
  );
  const logicalHeight = Math.max(
    viewportSize.height / runtimeScale,
    contentSize.height,
    viewportSize.height,
  );

  const shellStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    overscrollBehavior: "contain",
    contain: "layout paint",
    background:
      "linear-gradient(135deg, rgba(8,18,34,0.10), rgba(56,189,248,0.04) 46%, rgba(216,158,45,0.05))",
  };

  const scrollStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    overflowY: "auto",
    overflowX: "auto",
    overscrollBehavior: "contain",
    touchAction: "pan-x pan-y",
    WebkitOverflowScrolling: "touch",
  };

  const scaleSurfaceStyle: React.CSSProperties = {
    position: "relative",
    width: `${logicalWidth * runtimeScale}px`,
    minHeight: `${logicalHeight * runtimeScale}px`,
  };

  const contentStyle: React.CSSProperties = {
    position: "relative",
    width: `${logicalWidth}px`,
    minHeight: `${logicalHeight}px`,
    display: "flex",
    flexDirection: "column",
    transform: `scale(${runtimeScale})`,
    transformOrigin: "top left",
    willChange: isScaledOut ? "transform" : undefined,
  };

  const updateMeasurement = useCallback(() => {
    const scrollElement = scrollRef.current;
    const contentElement = contentRef.current;

    if (!scrollElement || !contentElement) return;

    const viewportWidth = Math.max(1, scrollElement.clientWidth);
    const viewportHeight = Math.max(1, scrollElement.clientHeight);

    const contentWidth = Math.max(
      viewportWidth,
      contentElement.scrollWidth,
      contentElement.offsetWidth,
    );
    const contentHeight = Math.max(
      viewportHeight,
      contentElement.scrollHeight,
      contentElement.offsetHeight,
    );

    setViewportSize((prev) => {
      if (nearlyEqual(prev.width, viewportWidth) && nearlyEqual(prev.height, viewportHeight)) {
        return prev;
      }

      return {
        width: viewportWidth,
        height: viewportHeight,
      };
    });

    setContentSize((prev) => {
      if (nearlyEqual(prev.width, contentWidth) && nearlyEqual(prev.height, contentHeight)) {
        return prev;
      }

      return {
        width: contentWidth,
        height: contentHeight,
      };
    });
  }, []);

  useEffect(() => {
    userScaleRef.current = userScale;
  }, [userScale]);

  useEffect(() => {
    if (!apperception || typeof window === "undefined") return;
    window.dispatchEvent(
      new CustomEvent("dreamengin:apperception", { detail: apperception }),
    );
  }, [apperception]);

  useEffect(() => {
    updateMeasurement();
  }, [children, updateMeasurement]);

  useEffect(() => {
    updateMeasurement();

    const scrollElement = scrollRef.current;
    const contentElement = contentRef.current;

    if (!scrollElement || !contentElement || typeof ResizeObserver === "undefined") {
      return;
    }

    let frame = 0;
    const scheduleMeasure = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateMeasurement();
      });
    };

    const observer = new ResizeObserver(scheduleMeasure);
    observer.observe(scrollElement);
    observer.observe(contentElement);

    window.addEventListener("resize", scheduleMeasure);
    window.addEventListener("orientationchange", scheduleMeasure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", scheduleMeasure);
      window.removeEventListener("orientationchange", scheduleMeasure);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [updateMeasurement]);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement || iframeUrl) return;

    function pointerDown(event: PointerEvent) {
      if (event.pointerType !== "touch") return;

      activePointersRef.current.set(event.pointerId, getLocalPoint(scrollElement, event));

      if (activePointersRef.current.size === 2) {
        const points = Array.from(activePointersRef.current.values());
        const pinchCenter = center(points[0], points[1]);
        const currentScale = userScaleRef.current ?? measuredFitScale;

        pinchRef.current = {
          distance: Math.max(1, distance(points[0], points[1])),
          scale: currentScale,
          contentX: (scrollElement.scrollLeft + pinchCenter.x) / currentScale,
          contentY: (scrollElement.scrollTop + pinchCenter.y) / currentScale,
        };
      }
    }

    function pointerMove(event: PointerEvent) {
      if (event.pointerType !== "touch") return;
      if (!activePointersRef.current.has(event.pointerId)) return;

      activePointersRef.current.set(event.pointerId, getLocalPoint(scrollElement, event));

      if (activePointersRef.current.size !== 2 || !pinchRef.current) return;

      event.preventDefault();

      const points = Array.from(activePointersRef.current.values());
      const pinchCenter = center(points[0], points[1]);
      const nextDistance = Math.max(1, distance(points[0], points[1]));
      const nextScale = clamp(
        pinchRef.current.scale * (nextDistance / pinchRef.current.distance),
        MIN_TOUCH_SCALE,
        MAX_TOUCH_SCALE,
      );

      userScaleRef.current = nextScale;
      setUserScale(nextScale);

      scrollElement.scrollLeft = Math.max(
        0,
        pinchRef.current.contentX * nextScale - pinchCenter.x,
      );
      scrollElement.scrollTop = Math.max(
        0,
        pinchRef.current.contentY * nextScale - pinchCenter.y,
      );
    }

    function pointerEnd(event: PointerEvent) {
      if (event.pointerType !== "touch") return;

      activePointersRef.current.delete(event.pointerId);

      if (activePointersRef.current.size < 2) {
        pinchRef.current = null;
      }
    }

    scrollElement.addEventListener("pointerdown", pointerDown, { passive: true });
    scrollElement.addEventListener("pointermove", pointerMove, { passive: false });
    scrollElement.addEventListener("pointerup", pointerEnd, { passive: true });
    scrollElement.addEventListener("pointercancel", pointerEnd, { passive: true });
    scrollElement.addEventListener("pointerleave", pointerEnd, { passive: true });

    return () => {
      scrollElement.removeEventListener("pointerdown", pointerDown);
      scrollElement.removeEventListener("pointermove", pointerMove);
      scrollElement.removeEventListener("pointerup", pointerEnd);
      scrollElement.removeEventListener("pointercancel", pointerEnd);
      scrollElement.removeEventListener("pointerleave", pointerEnd);
    };
  }, [iframeUrl, measuredFitScale]);

  useEffect(() => {
    if (userScale === null) return;

    /**
     * When the surface changes enough that its natural fit is larger than the
     * user-selected scale, release stale zoom-out. This keeps route/world swaps
     * from inheriting a tiny scale forever.
     */
    if (measuredFitScale >= 0.995 && userScale < 0.995) {
      userScaleRef.current = null;
      setUserScale(null);
    }
  }, [measuredFitScale, userScale]);

  return (
    <div className="de-runtime-premium-shell" style={shellStyle}>
      {/* ── Content ─────────────────────────────────────────────────────── */}
      {iframeUrl ? (
        /* ── Iframe mode — a sub-page is open inside this region ── */
        <>
          {/* Chrome bar with back button */}
          <div
            className="premium-card de-os-panel de-runtime-seam de-material-enter"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: CHROME_BAR_H,
              zIndex: 199,
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "0 10px",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            <button
              type="button"
              onClick={onCloseIframe}
              aria-label="Back to runtime"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: "6px 13px 6px 10px",
                border: "none",
                borderRadius: 999,
                background: "rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.96)",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
                WebkitTapHighlightColor: "transparent",
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 15, lineHeight: 1 }}>‹</span>
              Back
            </button>
            {iframeTitle && (
              <div
                style={{
                  flex: 1,
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.40)",
                  }}
                >
                  In-region page
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.78)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
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
            title={iframeTitle ?? "Page"}
            style={{
              position: "absolute",
              top: CHROME_BAR_H,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              height: `calc(100% - ${CHROME_BAR_H}px)`,
              border: "none",
            }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock"
          />
        </>
      ) : (
        /*
         * ── Normal content mode — direct touch shrink-to-fit ──
         *
         * RuntimeShell owns no visible zoom controls. It measures the mounted
         * world and gives touchscreens the missing browser behavior: pinch inward
         * can shrink the actual runtime surface below 100% so out-of-frame UI can
         * be seen, while the scroll container pans the scaled surface.
         */
        <div
          ref={scrollRef}
          data-runtime-scroll-container
          data-runtime-scaled-out={isScaledOut ? "true" : "false"}
          className="de-runtime-premium-scroll"
          style={scrollStyle}
        >
          <div
            data-runtime-scale-surface
            style={scaleSurfaceStyle}
          >
            <div
              ref={contentRef}
              data-runtime-scale-content
              style={contentStyle}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
