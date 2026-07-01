'use client';

import { useEffect, useRef, useState } from 'react';




interface UseHideOnScrollOptions {
  threshold?: number; 
  delta?: number; 
}

export function useHideOnScroll(options: UseHideOnScrollOptions = {}) {
  const { threshold = 80, delta = 10 } = options;
  const [isVisible, setIsVisible] = useState(true);

  
  const lastScrollYRef = useRef(0);
  const accumulatedDeltaRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }

      
      rafIdRef.current = requestAnimationFrame(() => {
        
        const currentScrollY = Math.max(0, window.scrollY);
        const scrollDelta = currentScrollY - lastScrollYRef.current;

        
        accumulatedDeltaRef.current += scrollDelta;

        
        if (currentScrollY > threshold && Math.abs(accumulatedDeltaRef.current) > delta) {
          if (accumulatedDeltaRef.current > 0) {
            
            setIsVisible(false);
          } else {
            
            setIsVisible(true);
          }
          accumulatedDeltaRef.current = 0;
        } else if (currentScrollY <= threshold) {
          
          setIsVisible(true);
          accumulatedDeltaRef.current = 0;
        }

        lastScrollYRef.current = currentScrollY;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [threshold, delta]);

  return isVisible;
}
