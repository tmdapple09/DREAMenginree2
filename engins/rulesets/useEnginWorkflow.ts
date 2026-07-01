'use client';

import { logJourneyDot } from '@/engine/journey/journeyDots';
import { bridge } from '@/engine/runtime/dualRuntimeBridge';
import { useCallback, useEffect, useState } from 'react';
import {
    type EnginWorkflow,
    type HandoffKind,
    type WorkflowStage,
    abandonWorkflow,
    advanceStage,
    checkHandoffEligibility,
    createWorkflow,
    describeWorkflow,
    findWorkflowDef,
    HANDOFF_PATHS,
} from './workflowEngine';



function storageKey(workflowId: string): string {
  return `engin_workflow:${workflowId}`;
}

function loadFromStorage(workflowId: string): EnginWorkflow | null {
  try {
    if (typeof window === 'undefined') return null;
    const raw = window.localStorage.getItem(storageKey(workflowId));
    if (!raw) return null;
    return JSON.parse(raw) as EnginWorkflow;
  } catch {
    return null;
  }
}

function saveToStorage(workflow: EnginWorkflow): void {
  try {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(storageKey(workflow.id), JSON.stringify(workflow));
  } catch {
    
  }
}

function emitMilestone(
  prev: EnginWorkflow,
  next: EnginWorkflow,
): void {
  const domainColor: Record<string, string> = {
    music:  '#a855f7',
    games:  '#c8981a',
    lab:    '#10b981',
    code:   '#22d3ee',
    brand:  '#ec4899',
    create: '#f97316',
  };
  const color = domainColor[next.enginId] ?? '#ffffff';

  if (prev.stage === 'draft' && next.stage === 'active') {
    logJourneyDot({
      kind: 'workflow_first_activation',
      surface: `${next.name} (${next.enginId})`,
      label: `Activated workflow: ${next.name}`,
      significance: 1.0,
      domain_color: color,
      metadata: { workflowId: next.id },
    });
  } else if (prev.stage === 'review' && next.stage === 'export') {
    logJourneyDot({
      kind: 'workflow_first_export',
      surface: `${next.name} (${next.enginId})`,
      label: `Exported workflow: ${next.name}`,
      significance: 0.9,
      domain_color: color,
      metadata: { workflowId: next.id },
    });
  }
}

export interface EnginWorkflowHook {
  
  workflow: EnginWorkflow | null;
  
  loadWorkflow: (workflowId: string) => void;
  
  advance: (to: WorkflowStage) => void;
  
  abandon: () => void;
  
  emitHandoff: (kind: HandoffKind, payload?: Record<string, unknown>) => void;
  
  statusLabel: string;
}


export function useEnginWorkflow(): EnginWorkflowHook {
  const [workflow, setWorkflow] = useState<EnginWorkflow | null>(null);

  
  useEffect(() => {
    
  }, []);

  const loadWorkflow = useCallback((workflowId: string) => {
    const stored = loadFromStorage(workflowId);
    if (stored && !stored.abandoned) {
      setWorkflow(stored);
      return;
    }
    
    try {
      const fresh = createWorkflow(workflowId);
      saveToStorage(fresh);
      setWorkflow(fresh);
    } catch (err: unknown) {
      console.error('[useEnginWorkflow] loadWorkflow failed:', err);
    }
  }, []);

  const advance = useCallback((to: WorkflowStage) => {
    setWorkflow((prev) => {
      if (!prev) return prev;
      const result = advanceStage(prev, to);
      if (!result.ok) {
        
        if (process.env.NODE_ENV !== 'production') {
          const reason = result.ok === false ? result.reason : '';
          console.warn('[useEnginWorkflow] advance rejected:', reason);
        }
        return prev;
      }
      emitMilestone(prev, result.workflow);
      saveToStorage(result.workflow);
      return result.workflow;
    });
  }, []);

  const abandon = useCallback(() => {
    setWorkflow((prev) => {
      if (!prev) return prev;
      const next = abandonWorkflow(prev);
      saveToStorage(next);
      return next;
    });
  }, []);

  const emitHandoff = useCallback(
    (kind: HandoffKind, payload: Record<string, unknown> = {}) => {
      if (!workflow) return;
      const eligibility = checkHandoffEligibility(workflow);
      if (!eligibility.eligible) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn('[useEnginWorkflow] emitHandoff blocked:', eligibility.reason);
        }
        return;
      }
      const path = HANDOFF_PATHS.find((p) => p.kind === kind);
      if (!path) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn('[useEnginWorkflow] emitHandoff: unknown kind:', kind);
        }
        return;
      }
      
      const def = findWorkflowDef(workflow.id);
      if (!def || !(def.handoffKinds as readonly string[]).includes(kind)) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn('[useEnginWorkflow] emitHandoff: kind not registered for workflow:', kind);
        }
        return;
      }

      
      const channel = kind.split(':')[0] as Parameters<typeof bridge.emit>[0];
      bridge.emit(channel, kind, {
        workflowId: workflow.id,
        workflowName: workflow.name,
        fromEngin: workflow.enginId,
        toEngin: path.to,
        ...payload,
      });

      
      logJourneyDot({
        kind: 'workflow_first_handoff',
        surface: `${workflow.name} (${workflow.enginId})`,
        label: `Handed off to ${path.to}: ${describeWorkflow(workflow)}`,
        significance: 1.0,
        domain_color: '#ffffff',
        metadata: { workflowId: workflow.id, handoffKind: kind },
      });
    },
    [workflow],
  );

  const statusLabel = workflow ? describeWorkflow(workflow) : 'No workflow loaded';

  return { workflow, loadWorkflow, advance, abandon, emitHandoff, statusLabel };
}
