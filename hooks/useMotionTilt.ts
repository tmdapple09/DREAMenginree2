'use client';

import type { MotionProps } from 'framer-motion';
import {
    useMotionTemplate,
    useMotionValue,
    useSpring,
    useTransform,
} from 'framer-motion';
import { useRef } from 'react';



export interface MotionTiltOptions {
  
  maxTilt?: number;
  
  scale?: number;
  
  stiffness?: number;
  
  damping?: number;
  
  glare?: boolean;
}

export interface MotionTiltResult {
  
  motionProps: MotionProps & {
    style: Record<string, unknown>;
    onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => void;
  };
  
  glareStyle: Record<string, unknown>;
}


export function useMotionTilt(options: MotionTiltOptions = {}): MotionTiltResult {
  const {
    maxTilt   = 10,
    scale     = 1.04,
    stiffness = 380,
    damping   = 28,
    glare     = false,
  } = options;

  const cardRef = useRef<HTMLElement | null>(null);

  
  const rawX = useMotionValue(0); 
  const rawY = useMotionValue(0);
  const rawS = useMotionValue(1); 

  
  const springConfig = { stiffness, damping };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);
  const smoothS = useSpring(rawS, { stiffness: 260, damping: 24 });

  
  const rotateX = useTransform(smoothY, [-1, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [-1, 1], [-maxTilt, maxTilt]);

  
  const glareX = useTransform(smoothX, [-1, 1], [0, 100]);
  const glareY = useTransform(smoothY, [-1, 1], [0, 100]);
  const glareOpacity = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  
  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${smoothS})`;

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onMouseMove = prefersReduced
    ? () => {}
    : (e: React.MouseEvent<HTMLElement>) => {
        const el = e.currentTarget;
        cardRef.current = el;
        const rect = el.getBoundingClientRect();
        
        const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const ny = ((e.clientY - rect.top)  / rect.height) * 2 - 1;
        rawX.set(nx);
        rawY.set(ny);
        rawS.set(scale);
        if (glare) glareOpacity.set(0.14);
      };

  const onMouseLeave = prefersReduced
    ? () => {}
    : (_e: React.MouseEvent<HTMLElement>) => {
        rawX.set(0);
        rawY.set(0);
        rawS.set(1);
        if (glare) glareOpacity.set(0);
      };

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.28) 0%, transparent 65%)`;

  return {
    motionProps: {
      style: prefersReduced ? {} : { transform, willChange: 'transform' },
      onMouseMove,
      onMouseLeave,
    },
    glareStyle: glare && !prefersReduced
      ? {
          position: 'absolute' as const,
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none' as const,
          background: glareBackground,
          opacity: glareOpacity,
        }
      : {},
  };
}
