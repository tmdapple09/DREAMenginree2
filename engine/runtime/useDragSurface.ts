'use client';

import type { DreamDrop, DreamDropType } from '@/engine/runtime/coercionTable';
import { coerceDataTransfer } from '@/engine/runtime/coercionTable';
import { dropTargetRegistry } from '@/engine/runtime/dropTargetRegistry';
import type { RuntimeId } from '@/types/module-manifest';
import { useCallback, useEffect, useRef, useState } from 'react';

















export interface UseDragSurfaceOptions {
  
  region: RuntimeId;
  
  accepts?: DreamDropType[];
  
  priority?: number;
  
  id?: string;
  
  onDrop?: (drop: DreamDrop) => void;
  
  onUnhandledDrop?: (drop: DreamDrop) => void;
}

export interface UseDragSurfaceResult {
  
  dragProps: {
    onDragOver:  React.DragEventHandler;
    onDragEnter: React.DragEventHandler;
    onDragLeave: React.DragEventHandler;
    onDrop:      React.DragEventHandler;
  };
  
  isOver: boolean;
  
  lastDrop: DreamDrop | null;
}



export function useDragSurface({
  region,
  accepts = [],
  priority = 0,
  id,
  onDrop,
  onUnhandledDrop,
}: UseDragSurfaceOptions): UseDragSurfaceResult {
  const [isOver, setIsOver] = useState(false);
  const [lastDrop, setLastDrop] = useState<DreamDrop | null>(null);
  const targetId = useRef(id ?? `drag-surface:${region}:${Math.random().toString(36).slice(2)}`);
  const enterCount = useRef(0);

  const handleDrop = useCallback(
    (drop: DreamDrop) => {
      setLastDrop(drop);
      setIsOver(false);
      enterCount.current = 0;
      onDrop?.(drop);
    },
    [onDrop],
  );

  useEffect(() => {
    dropTargetRegistry.register({
      id: targetId.current,
      region,
      accepts,
      priority,
      onDrop: handleDrop,
    });
    return () => dropTargetRegistry.unregister(targetId.current);
  }, [region, priority, handleDrop]);

  const onDragOver: React.DragEventHandler = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }, []);

  const onDragEnter: React.DragEventHandler = useCallback((e) => {
    e.preventDefault();
    enterCount.current++;
    setIsOver(true);
  }, []);

  const onDragLeave: React.DragEventHandler = useCallback(() => {
    enterCount.current--;
    if (enterCount.current <= 0) {
      enterCount.current = 0;
      setIsOver(false);
    }
  }, []);

  const onNativeDrop: React.DragEventHandler = useCallback(
    (e) => {
      e.preventDefault();
      const drop = coerceDataTransfer(e.dataTransfer);
      const accepted = accepts.length === 0 || accepts.includes(drop.type);
      if (!accepted) {
        setIsOver(false);
        return;
      }

      const routed = dropTargetRegistry.route(drop, region);
      setIsOver(false);
      enterCount.current = 0;
      if (!routed) {
        if (onUnhandledDrop) {
          onUnhandledDrop(drop);
        } else {
          handleDrop(drop);
        }
      }
    },
    [accepts, handleDrop, onUnhandledDrop, region],
  );

  return {
    dragProps: {
      onDragOver,
      onDragEnter,
      onDragLeave,
      onDrop: onNativeDrop,
    },
    isOver,
    lastDrop,
  };
}






