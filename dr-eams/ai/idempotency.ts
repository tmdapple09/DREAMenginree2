import { createServerClient } from '@/supabase/server/serverClient';




interface CheckIdempotencyInput {
  key: string;
  userId: string;
  intentType: string;
}

interface CheckIdempotencyResult {
  allowed: boolean;
  isReplay: boolean;
}


export async function checkIdempotency(
  input: CheckIdempotencyInput
): Promise<CheckIdempotencyResult> {
  try {
    const supabase = await createServerClient();

    const { error } = await supabase
      .from('idempotency_keys')
      .insert({
        key: input.key,
        user_id: input.userId,
        intent_type: input.intentType,
      });

    if (error) {
      
      if (error.code === '23505') {
        return { allowed: false, isReplay: true };
      }

      console.error('[idempotency] Error inserting key:', error);
      
      return { allowed: false, isReplay: false };
    }

    return { allowed: true, isReplay: false };
  } catch (error: unknown) {
    console.error('[idempotency] Unexpected error:', error);
    
    return { allowed: false, isReplay: false };
  }
}
