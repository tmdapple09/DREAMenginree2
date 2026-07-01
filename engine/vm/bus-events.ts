

export interface VMWorkloadSubmittedPayload {
  workloadId:  string;
  region:      'top' | 'bottom';
  channel:     string;
  priority:    number;
  submittedAt: number;
}

export interface VMComputeCompletePayload {
  workloadId:  string;
  region:      'top' | 'bottom';
  durationMs:  number;
  completedAt: number;
}

export interface VMErrorPayload {
  workloadId?: string;
  region:      'top' | 'bottom';
  error:       string;
  code?:       number;
  occurredAt:  number;
}

export interface VMStatsPayload {
  activeWorkloads:    number;
  completedWorkloads: number;
  errorCount:         number;
  avgComputeMs:       number;
  uptimeMs:           number;
}

export interface VMStatsUpdatePayload {
  region:    'top' | 'bottom';
  stats:     VMStatsPayload;
  updatedAt: number;
}

export interface VMBusEventMap {
  'vm:workload-submitted': VMWorkloadSubmittedPayload;
  'vm:compute-complete':   VMComputeCompletePayload;
  'vm:error':              VMErrorPayload;
  'vm:stats-update':       VMStatsUpdatePayload;
}

export type VMBusEventName = keyof VMBusEventMap;
