'use client';

import { useWarp } from '@/engine/rendering/warp/useWarp';
import type { WarpEffect } from '@/engine/rendering/warp/warpEngine';



export interface WarpCanvasProps {
  
  effect?: WarpEffect;
  
  maxParticles?: number;
  
  spawnRate?: number;
  
  opacity?: number;
}

export default function WarpCanvas({
  effect      = 'flow',
  maxParticles = 200,
  spawnRate    = 25,
  opacity      = 0.35,
}: WarpCanvasProps) {
  const { canvasRef } = useWarp({ effect, maxParticles, spawnRate, autoStart: true });

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position:      'fixed',
        inset:         0,
        width:         '100%',
        height:        '100%',
        zIndex:        0,
        pointerEvents: 'none',
        opacity,
        mixBlendMode:  'screen',
      }}
    />
  );
}
