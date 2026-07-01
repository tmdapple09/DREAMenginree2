'use client';

import { getGsap } from '@/engine/animation/gsap/gsap';
import { useEffect, useRef } from 'react';




export function useGsapEntrance(
  containerRef: React.RefObject<HTMLElement | null>,
  deps: unknown[],
  options: {
    duration?: number;
    stagger?: number;
    y?: number;
    ease?: string;
  } = {},
) {
  const {
    duration = 0.38,
    stagger  = 0.045,
    y        = 22,
    ease     = 'power3.out',
  } = options;

  
  const prevDepsRef = useRef<unknown[]>([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    
    
    const same = deps.length === prevDepsRef.current.length
      && deps.every((d, i: number) => d === prevDepsRef.current[i]);
    prevDepsRef.current = deps;
    if (same) return;

    const children = Array.from(el.children) as HTMLElement[];
    if (!children.length) return;

    getGsap().then((gsap) => {
      
      gsap.set(children, { opacity: 0, y, willChange: 'transform, opacity' });
      gsap.to(children, {
        opacity:  1,
        y:        0,
        duration,
        stagger,
        ease,
        clearProps: 'willChange',
      });
    });

  }, deps);
}
