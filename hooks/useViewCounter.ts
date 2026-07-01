'use client';

import { useEffect, useRef } from 'react';




const DWELL_MS = 3000;


const VISIBILITY_THRESHOLD = 0.5;

export function useViewCounter(
  ref: React.RefObject<Element | null>,
  postId: string | null | undefined,
  enabled = true,
) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countedRef = useRef(false);

  useEffect(() => {
    if (!postId || !enabled || !ref.current) return;

    const el = ref.current;

    
    function recordView( ){
      if (countedRef.current) return;
      countedRef.current = true;
      fetch(`/api/posts/${postId}/view`, { method: 'POST' }).catch(() => {
        
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          
          timerRef.current = setTimeout(() => {
            recordView();
            observer.unobserve(el);
          }, DWELL_MS);
        } else {
          
          if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
          }
        }
      },
      { threshold: VISIBILITY_THRESHOLD },
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, [postId, enabled, ref]);
}
