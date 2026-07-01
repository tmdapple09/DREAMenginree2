import { createClient } from '@/supabase/client/client';
import { toErrorMessage } from '@/utils/index';




export async function logPhysicsExperiment(
  experimentId: string,
  tickData: Record<string, unknown>,
): Promise<void> {
  const supabase = createClient();

  const { error } = await supabase
    .from('science_experiments')
    .update({
      results: { performance_metrics: tickData },
      updated_at: new Date().toISOString(),
    })
    .eq('id', experimentId);

  if (error) {
    console.error('Physics telemetry log failed:', toErrorMessage(error));
  }
}
