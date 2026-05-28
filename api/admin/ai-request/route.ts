import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { redirect } from 'next/navigation';

export async function POST(request: Request ): Promise<Response> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return redirect('/login');
  }

  const formData = await request.formData();
  const prompt = formData.get('prompt') as string;

  // Log the request
  await supabase
    .from('admin_audit_log')
    .insert({
      actor_id: user.id,
      action: 'ai_update_request',
      details: { prompt, status: 'pending' }
    });

  return redirect('/idari-console');
}