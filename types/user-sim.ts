import { z } from 'zod';












export const PersonaTypeSchema = z.enum([
  'impatient_first_time_user',
  'skeptical_buyer',
  'confused_older_user',
  'power_user',
  'distracted_multitasker',
  'accessibility_sensitive_user',
  'trust_seeking_user',
  'goal_driven_returning_user',
  'comparison_shopper',
  'frustrated_user_after_failure',
]);
export type PersonaType = z.infer<typeof PersonaTypeSchema>;

export const PersonaSchema = z.object({
  type: PersonaTypeSchema,
  
  label: z.string(),
  
  goal: z.string(),
  
  patience: z.number().min(0).max(1),
  
  attention: z.number().min(0).max(1),
  
  trust_threshold: z.number().min(0).max(1),
  
  accessibility_priority: z.boolean(),
  
  distracted: z.boolean(),
});
export type Persona = z.infer<typeof PersonaSchema>;





export const ViewportSchema = z.object({
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});
export type Viewport = z.infer<typeof ViewportSchema>;

export const VisibleElementSchema = z.object({
  
  id: z.string(),
  tag: z.string(),
  label: z.string().optional(),
  
  is_cta: z.boolean().default(false),
  
  focusable: z.boolean().default(true),
  
  tap_target_px: z.number().int().positive().nullable().default(null),
});
export type VisibleElement = z.infer<typeof VisibleElementSchema>;

export const PerceptionFrameSchema = z.object({
  step: z.number().int().min(0),
  page_title: z.string(),
  url: z.string(),
  viewport: ViewportSchema,
  
  visible_elements: z.array(VisibleElementSchema),
  
  screenshot_b64: z.string().default(''),
  
  recent_actions: z.array(z.string()).max(10),
  
  product_spec: z.record(z.string(), z.unknown()).optional(),
});
export type PerceptionFrame = z.infer<typeof PerceptionFrameSchema>;





export const BehaviorSignalsSchema = z.object({
  
  friction: z.number().min(0).max(1),
  
  confusion: z.number().min(0).max(1),
  
  layout_clarity: z.number().min(0).max(1),
  
  trust_signals: z.number().min(0).max(1),
  
  mobile_reachability: z.number().min(0).max(1),
  
  ui_appears_broken: z.boolean(),
  
  ui_appears_misleading: z.boolean(),
});
export type BehaviorSignals = z.infer<typeof BehaviorSignalsSchema>;





export const AgentActionTypeSchema = z.enum([
  'click',
  'type',
  'scroll',
  'wait',
  'navigate',
  'abandon',
  'submit',
  'inspect',
]);
export type AgentActionType = z.infer<typeof AgentActionTypeSchema>;

export const AgentActionSchema = z.object({
  type: AgentActionTypeSchema,
  target: z.string().optional(),
  value: z.string().optional(),
  rationale: z.string(),
});
export type AgentAction = z.infer<typeof AgentActionSchema>;





export const FindingSeveritySchema = z.enum(['critical', 'high', 'medium', 'low', 'info']);
export type FindingSeverity = z.infer<typeof FindingSeveritySchema>;

export const AuditFindingSchema = z.object({
  finding_id: z.string(),
  step: z.number().int().min(0),
  persona: PersonaTypeSchema,
  issue: z.string(),
  evidence: z.string(),
  violated_spec_rule: z.string(),
  severity: FindingSeveritySchema,
  
  confidence: z.number().min(0).max(1),
  top_class_fix: z.string(),
});
export type AuditFinding = z.infer<typeof AuditFindingSchema>;





export const SimStepSchema = z.object({
  step: z.number().int().min(0),
  persona: PersonaTypeSchema,
  perception: PerceptionFrameSchema,
  signals: BehaviorSignalsSchema,
  action: AgentActionSchema,
  findings: z.array(AuditFindingSchema),
});
export type SimStep = z.infer<typeof SimStepSchema>;





export const JourneyOutcomeSchema = z.enum([
  'completed',
  'abandoned',
  'blocked',
  'error',
]);
export type JourneyOutcome = z.infer<typeof JourneyOutcomeSchema>;

export const SimJourneyResultSchema = z.object({
  journey_id: z.string(),
  persona: PersonaTypeSchema,
  goal: z.string(),
  outcome: JourneyOutcomeSchema,
  steps: z.array(SimStepSchema),
  all_findings: z.array(AuditFindingSchema),
  
  stats: z.object({
    total_steps: z.number().int().min(0),
    total_findings: z.number().int().min(0),
    findings_by_severity: z.record(FindingSeveritySchema, z.number().int().min(0)),
    avg_friction: z.number().min(0).max(1),
    avg_confusion: z.number().min(0).max(1),
  }),
  started_at: z.string().datetime(),
  completed_at: z.string().datetime(),
});
export type SimJourneyResult = z.infer<typeof SimJourneyResultSchema>;
