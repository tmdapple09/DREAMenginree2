"use client";

import { useDreamLogoScene, type DreamLogoSceneOptions } from "@/engine/rendering/babylon/useDreamLogoScene";
import { useRef } from "react";

interface DreamEnginLogoProps extends DreamLogoSceneOptions {
  
  width?: number;
  
  height?: number;
  className?: string;
}


export function DreamEnginLogo({
  width = 320,
  height = 160,
  className,
}: DreamEnginLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useDreamLogoScene();

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
