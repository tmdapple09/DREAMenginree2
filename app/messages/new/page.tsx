import { safeGetUser } from '@/supabase/client/safeGetUser';
import { createServerClient } from '@/supabase/server/serverClient';
import type { SupabaseClient } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';

interface NewMessagePageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

async function mirrorConversationParticipants(
  db: SupabaseClient,
  conversationId: string,
  participantIds: [string, string],
): Promise<void> {
  try {
    await db
      .from('conversation_participants')
      .upsert(
        participantIds.map((userId) => ({ conversation_id: conversationId, user_id: userId })),
        { onConflict: 'conversation_id,user_id', ignoreDuplicates: true },
      );
  } catch {
    // Optional mirror table. conversations.participant1_id/participant2_id remain canonical.
  }
}

export default async function NewMessagePage({ searchParams }: NewMessagePageProps) {
  await connection();

  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user) redirect('/login');

  const params = searchParams ? await searchParams : {};
  const recipientId = typeof params.recipient === 'string' ? params.recipient : '';
  const compose = typeof params.compose === 'string' ? params.compose : '';

  if (!recipientId || recipientId === user.id) {
    redirect('/messages');
  }

  const db = supabase as SupabaseClient;
  const { data: recipient } = await db
    .from('profiles')
    .select('id')
    .eq('id', recipientId)
    .maybeSingle();

  if (!recipient) {
    redirect('/messages');
  }

  const { data: existing } = await db
    .from('conversations')
    .select('id')
    .or(`and(participant1_id.eq.${user.id},participant2_id.eq.${recipientId}),and(participant1_id.eq.${recipientId},participant2_id.eq.${user.id})`)
    .maybeSingle();

  let conversationId = (existing as { id?: string } | null)?.id;

  if (!conversationId) {
    const { data: created, error } = await db
      .from('conversations')
      .insert({ participant1_id: user.id, participant2_id: recipientId })
      .select('id')
      .single();

    if (error || !created) {
      redirect('/messages');
    }

    conversationId = (created as { id: string }).id;
  }

  if (!conversationId) {
    redirect('/messages');
  }

  await mirrorConversationParticipants(db, conversationId, [user.id, recipientId]);

  const target = new URLSearchParams({ conversation_id: conversationId });
  if (compose.trim()) target.set('compose', compose);
  redirect(`/messages?${target.toString()}`);
}
