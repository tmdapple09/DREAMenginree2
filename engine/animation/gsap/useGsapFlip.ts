'use client';

import { getGsap } from '@/engine/animation/gsap/gsap';
import { useCallback, useRef, useState } from 'react';



export function useGsapFlip( ){
  const containerRef = useRef<HTMLDivElement | null>(null);
  const busyRef      = useRef(false);
  const [busy, setBusy] = useState(false);

  
  const flip = useCallback((midpoint: () => void) => {
    if (busyRef.current) return;
    busyRef.current = true;
    setBusy(true);

    const el = containerRef.current;

    if (!el || typeof window === 'undefined') {
      
      midpoint();
      busyRef.current = false;
      setBusy(false);
      return;
    }

    getGsap().then((gsap) => {
      const tl = gsap.timeline({
        onComplete: () => {
          busyRef.current = false;
          setBusy(false);
          gsap.set(el, { clearProps: 'all' });
        },
      });

      
      tl.to(el, {
        opacity:   0,
        scale:     0.95,
        rotateX:   4,
        y:         -8,
        duration:  0.22,
        ease:      'power2.in',
        transformOrigin: '50% 40%',
      });

      
      tl.call(midpoint);

      
      tl.fromTo(
        el,
        { opacity: 0, scale: 0.95, rotateX: -4, y: 12 },
        {
          opacity:  1,
          scale:    1,
          rotateX:  0,
          y:        0,
          duration: 0.38,
          ease:     'back.out(1.2)',
          transformOrigin: '50% 40%',
        },
      );
    });
  }, []);

  return { containerRef, flip, busy };
}
