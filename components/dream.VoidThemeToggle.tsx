'use client';

import { applyVoidTheme, isVoidThemeActive } from '@/components/dream.ThemeApplicator';
import { useEffect, useState } from 'react';



export default function VoidThemeToggle( ){
  const [isVoid, setIsVoid] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsVoid(isVoidThemeActive());

    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ void: boolean }>;
      setIsVoid(ce.detail.void);
    };
    window.addEventListener('de-theme-mode-changed', handler);
    return () => window.removeEventListener('de-theme-mode-changed', handler);
  }, []);

  if (!mounted) return null;

  const handleToggle = () => {
    const next = !isVoid;
    setIsVoid(next);
    applyVoidTheme(next);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="void-toggle"
      aria-label={isVoid ? 'Switch to light theme' : 'Switch to VOID dark theme'}
      title={isVoid ? 'Sky & Gold (light)' : 'VOID (OLED dark)'}
    >
      <span style={{ fontSize: 14, lineHeight: 1 }}>
        {isVoid ? '☀️' : '🌌'}
      </span>
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.04em' }}>
        {isVoid ? 'LIGHT' : 'VOID'}
      </span>
    </button>
  );
}
