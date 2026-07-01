'use client';

import { getGsap } from '@/engine/animation/gsap/gsap';
import { useEffect, useRef } from 'react';



export interface ScrollRevealOptions {
  
  direction?: 'up' | 'down' | 'left' | 'right';
  
  stagger?: number;
  
  duration?: number;
  
  threshold?: number;
  
  once?: boolean;
  
  children?: boolean;
}


function directionOffset(direction: NonNullable<ScrollRevealOptions['direction']>): {
  x: number; y: number;
} {
  switch (direction) {
    case 'up':    return { x: 0,    y: 30 };
    case 'down':  return { x: 0,    y: -30 };
    case 'left':  return { x: 30,   y: 0 };
    case 'right': return { x: -30,  y: 0 };
  }
}


export function useGsapScrollReveal<T extends HTMLElement = HTMLElement>(
  options: ScrollRevealOptions = {},
): React.RefObject<T | null> {
  const {
    direction  = 'up',
    stagger    = 0.055,
    duration   = 0.45,
    threshold  = 0.15,
    once       = true,
    children   = true,
  } = options;

  const containerRef = useRef<T | null>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const { x, y } = directionOffset(direction);

    const play = () => {
      if (once && hasPlayedRef.current) return;
      hasPlayedRef.current = true;

      const targets = children
        ? Array.from(el.children) as HTMLElement[]
        : [el];

      if (!targets.length) return;

      getGsap().then((gsap) => {
        gsap.set(targets, {
          opacity: 0,
          x,
          y,
          willChange: 'transform, opacity',
        });
        gsap.to(targets, {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          stagger,
          ease: 'power3.out',
          clearProps: 'willChange',
        });
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            play();
            if (once) observer.disconnect();
          }
        }
      },
      { threshold },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
