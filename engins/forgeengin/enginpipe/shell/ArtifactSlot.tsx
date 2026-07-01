'use client';

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    type ReactNode,
} from 'react';
import { createEventBus, type EventBus } from '@/engine/events/eventBus';



export interface ArtifactSlotContextValue {
  
  artifactId: string;
  
  bus: EventBus;
}

const ArtifactSlotContext = createContext<ArtifactSlotContextValue | null>(null);

export interface ArtifactSlotProps {
  artifactId: string;
  
  bus?: EventBus;
  
  className?: string;
  children: ReactNode;
}


export function ArtifactSlot({
  artifactId,
  bus,
  className,
  children,
}: ArtifactSlotProps) {
  const ownedBus = useMemo(
    () => bus ?? createEventBus(),
    
    [bus, artifactId],
  );

  
  
  useEffect(() => {
    if (bus) return;
    return () => {
      if (!ownedBus.destroyed) ownedBus.destroy();
    };
  }, [bus, ownedBus]);

  const value = useMemo<ArtifactSlotContextValue>(
    () => ({ artifactId, bus: ownedBus }),
    [artifactId, ownedBus],
  );

  return (
    <ArtifactSlotContext.Provider value={value}>
      <div data-engin-artifact-id={artifactId} className={className}>
        {children}
      </div>
    </ArtifactSlotContext.Provider>
  );
}


export function useArtifactSlot(): ArtifactSlotContextValue {
  const ctx = useContext(ArtifactSlotContext);
  if (!ctx) {
    throw new Error(
      '[enginpipe] useArtifactSlot() called outside of <ArtifactSlot>.',
    );
  }
  return ctx;
}


export function useOptionalArtifactSlot(): ArtifactSlotContextValue | null {
  return useContext(ArtifactSlotContext);
}
