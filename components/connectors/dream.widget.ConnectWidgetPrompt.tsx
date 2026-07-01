'use client';

import type { WidgetTypeDef } from '@/engine/widgets/widgetRegistry';
import { useEffect, useRef, useState } from 'react';













const AUTO_DISMISS_MS = 8000;

export interface ConnectWidgetPromptProps {
  
  connectorName: string;
  connectorId: string;
  
  widgetTypes: WidgetTypeDef[];
  
  menuOpen?: boolean;
  
  onAdd: (widgetId: string) => void;
  
  onDismiss: (widgetId: string) => void;
  
  onAddSlice?: (connectorId: string) => void;
}


export default function ConnectWidgetPrompt({
  connectorName,
  connectorId,
  widgetTypes,
  menuOpen,
  onAdd,
  onDismiss,
  onAddSlice,
}: ConnectWidgetPromptProps) {
  const primary = widgetTypes[0];
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  
  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  
  useEffect(() => {
    timerRef.current = setTimeout(() => dismiss(), AUTO_DISMISS_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };

  }, []);

  
  useEffect(() => {
    if (menuOpen) dismiss();

  }, [menuOpen]);

  function dismiss( ){
    setVisible(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (primary) onDismiss(primary.id);
  }

  function handleAdd( ){
    if (timerRef.current) clearTimeout(timerRef.current);
    if (primary) onAdd(primary.id);
  }

  if (!primary) return null;

  return (
    
    <div
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 70,
        display: 'flex',
        justifyContent: 'center',
        
        pointerEvents: 'none',
        paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 80px)', 
      }}
    >
      
      <div
        role="dialog"
        aria-label={`Add ${connectorName} as a Dream`}
        style={{
          pointerEvents: 'auto',
          background: 'rgba(245,250,255,0.96)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(160,195,240,0.5)',
          borderRadius: 18,
          padding: '14px 18px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          maxWidth: 360,
          width: 'calc(100vw - 32px)',
          
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 160ms ease, transform 160ms ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'rgba(42,138,184,0.10)',
            border: '1px solid rgba(42,138,184,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, flexShrink: 0,
          }}>
            {primary.icon}
          </div>

          
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--de-heading)', lineHeight: 1.3 }}>
              Add {connectorName} as a Dream?
            </div>
            <div style={{ fontSize: 11, color: 'var(--de-text-dim)', marginTop: 2 }}>
              {primary.description}
            </div>
          </div>
        </div>

        
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button
            type="button"
            onClick={handleAdd}
            style={{
              flex: 1,
              padding: '8px 14px',
              borderRadius: 10,
              background: 'var(--de-accent)',
              border: 'none',
              color: '#fff',
              fontSize: 12,
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Add
          </button>
          <button
            type="button"
            onClick={dismiss}
            style={{
              padding: '8px 14px',
              borderRadius: 10,
              background: 'rgba(160,195,240,0.15)',
              border: '1px solid rgba(160,195,240,0.3)',
              color: 'var(--de-text-dim)',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Not now
          </button>
        </div>

        
        {onAddSlice && (
          <button
            type="button"
            onClick={() => { if (timerRef.current) clearTimeout(timerRef.current); onAddSlice(connectorId); }}
            style={{
              marginTop: 8,
              width: '100%',
              padding: '7px 14px',
              borderRadius: 10,
              background: 'transparent',
              border: '1px dashed rgba(42,138,184,0.35)',
              color: 'var(--de-accent)',
              fontSize: 11,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            + Add as Feed Slice instead
          </button>
        )}
      </div>
    </div>
  );
}
