"use client";

import { Canvas2DRenderer } from "@/lib/renderer";
import {
  useRenderEngin,
  type RenderEnginBackend,
  type RenderEnginLayer,
} from "@/lib/renderengin";
import { useEffect, useId, useRef, type ReactNode } from "react";

type RenderEnginViewportProps = {
  children: ReactNode;
  label: string;
  layer: RenderEnginLayer;
  accentColor?: string;
  preferredBackend?: RenderEnginBackend;
  className?: string;
};

function paint(renderer: Canvas2DRenderer, accentColor: string, frame: number) {
  const { width, height } = renderer;
  renderer.clear();
  const pulse = 0.45 + Math.sin(frame / 55) * 0.1;
  renderer.drawRect(0, 0, width, height, "rgba(2,8,24,0.22)");
  renderer.drawCircle(
    width * 0.12,
    height * 0.18,
    Math.max(width, height) * 0.24,
    `${accentColor}${Math.round(20 + pulse * 24)
      .toString(16)
      .padStart(2, "0")}`,
  );
  renderer.drawCircle(
    width * 0.88,
    height * 0.82,
    Math.max(width, height) * 0.18,
    "rgba(200,152,26,0.10)",
  );
  const step = Math.max(44, Math.min(88, width / 14));
  for (let x = frame % step; x < width; x += step) {
    renderer.drawRect(x, 0, 1, height, "rgba(255,255,255,0.025)");
  }
  for (let y = (frame * 0.6) % step; y < height; y += step) {
    renderer.drawRect(0, y, width, 1, "rgba(255,255,255,0.018)");
  }
  renderer.present();
}

export default function RenderEnginViewport({
  children,
  label,
  layer,
  accentColor = "#38bdf8",
  preferredBackend = "canvas2d",
  className = "",
}: RenderEnginViewportProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<Canvas2DRenderer | null>(null);
  const reactId = useId().replace(/:/g, "");
  const surfaceId = `${layer}-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${reactId}`;
  const {
    mount,
    dispose,
    resize: resizeSurface,
    render: renderSurface,
  } = useRenderEngin();

  useEffect(() => {
    mount({ surfaceId, label, layer, accentColor, preferredBackend });
    return () => dispose(surfaceId);
  }, [accentColor, dispose, label, layer, mount, preferredBackend, surfaceId]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;

    const renderer = new Canvas2DRenderer(canvas);
    rendererRef.current = renderer;
    let raf = 0;
    let frame = 0;

    const resize = () => {
      const rect = host.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width));
      const height = Math.max(1, Math.round(rect.height));
      const dpr = Math.min(3, Math.max(1, window.devicePixelRatio || 1));
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      renderer.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      renderer.setViewport({ x: 0, y: 0, w: width, h: height });
      resizeSurface(surfaceId, width, height);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    const loop = () => {
      frame += 1;
      paint(renderer, accentColor, frame);
      renderSurface(surfaceId);
      raf = window.requestAnimationFrame(loop);
    };
    raf = window.requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      renderer.dispose();
      rendererRef.current = null;
    };
  }, [accentColor, renderSurface, resizeSurface, surfaceId]);

  return (
    <div
      ref={hostRef}
      className={`relative min-h-full ${className}`}
      data-renderengin-surface={surfaceId}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: 0.72 }}
      />
      <div className="relative z-[1] min-h-full">{children}</div>
    </div>
  );
}
