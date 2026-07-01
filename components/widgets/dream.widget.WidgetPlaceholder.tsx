'use client';

import React from 'react';












export interface WidgetPlaceholderProps {
  
  onOpenLibrary: () => void;
  
  onRemove?: () => void;
  
  isEditing?: boolean;
  
  slot?: number;
  style?: React.CSSProperties;
}

export default function WidgetPlaceholder({
  onOpenLibrary,
  onRemove,
  isEditing,
  slot,
  style,
}: WidgetPlaceholderProps) {
  return (
    <div
      style={{
        position: 'relative',
        
        ...style,
      }}
    >
      <button
        type="button"
        aria-label={slot !== undefined ? `Add Dream to slot ${slot + 1}` : 'Add Dream'}
        onClick={onOpenLibrary}
        style={{
          width: '100%',
          minHeight: 120,
          borderRadius: 18,
          border: '2px dashed rgba(42,138,184,0.35)',
          background: 'rgba(42,138,184,0.04)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          transition: 'background 150ms ease, border-color 150ms ease',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(42,138,184,0.08)';
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(42,138,184,0.55)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(42,138,184,0.04)';
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(42,138,184,0.35)';
        }}
      >
        
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: 'rgba(42,138,184,0.10)',
          border: '1.5px solid rgba(42,138,184,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 22, color: 'var(--de-accent)',
          fontWeight: 300,
        }}>
          +
        </div>
        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--de-accent)' }}>Add</span>
      </button>

      
      {isEditing && onRemove && (
        <button
          type="button"
          aria-label="Remove placeholder"
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          style={{
            position: 'absolute', top: -8, right: -8,
            width: 22, height: 22, borderRadius: '50%',
            background: '#dc4444', border: 'none',
            color: '#fff', fontSize: 13, fontWeight: 700,
            cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            lineHeight: 1,
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}
