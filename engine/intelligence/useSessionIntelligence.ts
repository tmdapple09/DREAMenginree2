'use client';

import { dreamOSBus } from '@/engine/runtime/dreamOSBus';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SessionContinuity, type SessionDiff, type SessionSummary } from './sessionContinuity';
import { SessionPatternEngine, type PatternEngineState, type PredictedNext } from './sessionPatternEngine';




export const PATTERN_MATRIX_LS_KEY = 'dreamengin-pattern-matrix';

export interface SessionIntelligence {
  
  predictions: PredictedNext[];
  
  lastSessionSummary: SessionSummary | null;
  
  sessionDiff: SessionDiff | null;
  
  currentSessionSummary: SessionSummary;
  
  isLearning: boolean;
  
  tfReady: boolean;
}

const EMPTY_SUMMARY: SessionSummary = {
  sessionId: 'none',
  startedAt: 0,
  endedAt: 0,
  subsystemsVisited: [],
  subsystemActivationCount: 0,
  primarySubsystem: null,
  artifactCount: 0,
  artifactKinds: [],
  lastArtifactTitle: null,
};


export function useSessionIntelligence(
  currentSubsystemId?: string | null,
  topN = 3,
): SessionIntelligence {
  const patternEngineRef = useRef<SessionPatternEngine | null>(null);
  const continuityRef = useRef<SessionContinuity | null>(null);

  const [predictions, setPredictions] = useState<PredictedNext[]>([]);
  const [engineState, setEngineState] = useState<PatternEngineState>({
    transitionCount: 0,
    subsystemsSeen: [],
    isReady: false,
    tfReady: false,
  });
  const [lastSessionSummary, setLastSessionSummary] = useState<SessionSummary | null>(null);
  const [sessionDiff, setSessionDiff] = useState<SessionDiff | null>(null);
  const [currentSessionSummary, setCurrentSessionSummary] = useState<SessionSummary>(EMPTY_SUMMARY);

  
  useEffect(() => {
    const pattern = new SessionPatternEngine();
    const continuity = new SessionContinuity();

    patternEngineRef.current = pattern;
    continuityRef.current = continuity;

    let cancelled = false;

    async function boot( ){
      await Promise.all([pattern.init(), continuity.init()]);
      if (cancelled) return;

      
      if (typeof localStorage !== 'undefined') {
        try {
          const raw = localStorage.getItem(PATTERN_MATRIX_LS_KEY);
          if (raw) {
            const saved = JSON.parse(raw) as Record<string, Record<string, number>>;
            pattern.importMatrix(saved);
          }
        } catch {
          
        }
      }

      setLastSessionSummary(continuity.getLastSessionSummary());
      setSessionDiff(continuity.getSessionDiff());
      setCurrentSessionSummary(continuity.getCurrentSessionSummary());
      setEngineState(pattern.getState());
    }

    void boot();

    return () => {
      cancelled = true;
    };
  }, []);

  
  const prevBusSubsystemRef = useRef<string | null>(null);
  const ingestSubsystem = useCallback(
    (subsystemId: string, prevRef: React.MutableRefObject<string | null>) => {
      if (!subsystemId) return;
      if (subsystemId === prevRef.current) return;
      prevRef.current = subsystemId;

      const pattern = patternEngineRef.current;
      const continuity = continuityRef.current;

      if (pattern) {
        pattern.ingest(subsystemId);
        const state = pattern.getState();
        setEngineState(state);
        setPredictions(pattern.predict(subsystemId, topN));
      }
      if (continuity) {
        continuity.recordActivation(subsystemId);
        setCurrentSessionSummary(continuity.getCurrentSessionSummary());
        setSessionDiff(continuity.getSessionDiff());
      }
    },
    [topN],
  );

  
  useEffect(() => {
    const unsubscribe = dreamOSBus.subscribe((snapshot) => {
      const continuity = continuityRef.current;

      
      if (continuity) {
        const lastArtifact = snapshot.artifacts[0] ?? null;
        continuity.updateArtifacts(
          snapshot.artifacts.length,
          snapshot.artifacts.map((a) => a.kind),
          lastArtifact?.title ?? null,
        );
        setCurrentSessionSummary(continuity.getCurrentSessionSummary());
        setSessionDiff(continuity.getSessionDiff());
      }

      
      const dominant = snapshot.runtimeContexts.find((ctx) => ctx.dominant)
        ?? snapshot.runtimeContexts[0];
      if (dominant?.subsystemId) {
        ingestSubsystem(dominant.subsystemId, prevBusSubsystemRef);
      }
    });

    return unsubscribe;
  }, [ingestSubsystem]);

  
  const prevPropSubsystemRef = useRef<string | null>(null);
  useEffect(() => {
    const prev = prevPropSubsystemRef.current;
    prevPropSubsystemRef.current = currentSubsystemId ?? null;

    if (!currentSubsystemId) return;
    if (currentSubsystemId === prev) return;

    ingestSubsystem(currentSubsystemId, prevPropSubsystemRef);
  }, [currentSubsystemId, ingestSubsystem]);

  
  const persistSession = useCallback(() => {
    const continuity = continuityRef.current;
    if (continuity) {
      void continuity.persist();
    }
    const pattern = patternEngineRef.current;
    if (pattern && typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(PATTERN_MATRIX_LS_KEY, JSON.stringify(pattern.exportMatrix()));
      } catch {
        
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener('visibilitychange', persistSession);
    window.addEventListener('beforeunload', persistSession);
    return () => {
      document.removeEventListener('visibilitychange', persistSession);
      window.removeEventListener('beforeunload', persistSession);
    };
  }, [persistSession]);

  return {
    predictions,
    lastSessionSummary,
    sessionDiff,
    currentSessionSummary,
    isLearning: engineState.isReady,
    tfReady: engineState.tfReady,
  };
}
