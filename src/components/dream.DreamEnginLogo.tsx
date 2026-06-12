"use client";

import { useDreamLogoScene, type DreamLogoSceneOptions } from "@/src/lib/babylon/useDreamLogoScene";

interface DreamEnginLogoProps extends DreamLogoSceneOptions {
  /** Canvas width in CSS pixels (default 320) */
  width?: number;
  /** Canvas height in CSS pixels (default 160) */
  height?: number;
  className?: string;
}

/**
 * DreamEnginLogo
 * ──────────────
 * Renders the animated DREAMengin logo inside a lightweight canvas shell.
 */
export function DreamEnginLogo({
  width = 320,
  height = 160,
  className,
  ...sceneOptions
}: DreamEnginLogoProps) {
  const { canvasRef } = useDreamLogoScene(sceneOptions);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={{ display: "block", background: "transparent" }}
      aria-label="DREAMengin animated logo"
    />
  );
}
