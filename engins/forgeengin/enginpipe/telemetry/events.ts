import { z } from 'zod';




export const TelemetryEventTypeSchema = z.enum([
  'session_start',
  'milestone_reached',
  'error_encountered',
  'feature_used',
  'quality_metric',
  'user_feedback',
]);

export type TelemetryEventType = z.infer<typeof TelemetryEventTypeSchema>;


export const TelemetryEventSchema = z.object({
  artifact_id: z.string().min(1),
  user_id: z.string().min(1).optional(),
  event_type: TelemetryEventTypeSchema,
  client_timestamp: z.string().datetime().optional(),
  payload: z.record(z.string(), z.unknown()).default({}),
});

export type TelemetryEvent = z.infer<typeof TelemetryEventSchema>;


export function parseTelemetryEvent(input: unknown): TelemetryEvent {
  return TelemetryEventSchema.parse(input);
}
