import { useCallback, useRef, type RefObject } from 'react';

// Babylon.js dependency removed — logo now uses the lightweight canvas/CSS shell.
export interface DreamLogoSceneOptions {
  dreamSrc?: string;
  enginSrc?: string;
}

export interface DreamLogoSceneController {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  pause: () => void;
  resume: () => void;
}

export function useDreamLogoScene(_options: DreamLogoSceneOptions = {}): DreamLogoSceneController {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pause = useCallback(() => {}, []);
  const resume = useCallback(() => {}, []);

  return { canvasRef, pause, resume };
}
