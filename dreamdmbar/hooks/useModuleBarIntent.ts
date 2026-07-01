'use client';

import type { ModuleBarAction } from '@/dreamdmbar/runtime/DreamSystemContext';
import { useDreamSystem } from '@/dreamdmbar/runtime/DreamSystemContext';
import { useCallback } from 'react';



export interface UseModuleBarIntentResult {
  
  focusModuleInBar: (actions: ModuleBarAction[]) => void;
  
  clearModuleFromBar: () => void;
  
  openCommentInBar: (targetPostId: string, targetLabel?: string) => void;
}

export function useModuleBarIntent(moduleId: string): UseModuleBarIntentResult {
  const { setBarIntent, clearBarIntent, barIntent } = useDreamSystem();

  const focusModuleInBar = useCallback(
    (actions: ModuleBarAction[]) => {
      setBarIntent({
        mode: 'module-actions',
        moduleId,
        moduleActions: actions,
      });
    },
    [moduleId, setBarIntent],
  );

  const clearModuleFromBar = useCallback(() => {
    
    if (barIntent.mode === 'module-actions' && barIntent.moduleId === moduleId) {
      clearBarIntent();
    }
  }, [moduleId, barIntent, clearBarIntent]);

  const openCommentInBar = useCallback(
    (targetPostId: string, targetLabel?: string) => {
      setBarIntent({ mode: 'comment', targetPostId, targetLabel });
    },
    [setBarIntent],
  );

  return { focusModuleInBar, clearModuleFromBar, openCommentInBar };
}
