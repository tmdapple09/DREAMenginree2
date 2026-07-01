'use client';

import { useTapHoldMove } from '@/hooks/useTapHoldMove';
import type { ModuleManifest, RuntimeId } from '@/engine/editor/universalEditor';
import React, { useRef } from 'react';



export interface DreamWindowShellProps {
  
  manifest: ModuleManifest;
  
  onTransfer?: (manifest: ModuleManifest, targetRuntime: RuntimeId) => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function DreamWindowShell({
  manifest,
  onTransfer,
  children,
  className,
  style,
}: DreamWindowShellProps) {
  const ref = useRef<HTMLDivElement>(null);

  useTapHoldMove(ref, {
    manifest,
    onTransfer: onTransfer ?? (() => {}),
  });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: 'relative',
        borderRadius: 12,
        overflow: 'visible',
        touchAction: 'none',
        userSelect: 'none',
        ...style,
      }}
      data-dream-module={manifest.id}
      data-runtime={manifest.sourceRuntime}
    >
      {children}
    </div>
  );
}

export default DreamWindowShell;
