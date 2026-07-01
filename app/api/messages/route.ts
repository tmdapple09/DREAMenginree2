import { scanContent } from '@/engine/safety/child-safety/childSafetyDetector';
import { reportChildSafetyIncident } from '@/engine/safety/child-safety/ncmecReporter';
import { scanMediaUrlsForChildSafety } from '@/engine/safety/child-safety/scanMediaUrls';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { createServerClient } from '@/supabase/server/serverClient';
import { toErrorMessage } from '@/utils/index';
import type { SupabaseClient } from '@supabase/supabase-js';
import { createHash } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

type ProfileAgeRow = Record<string, unknown> | null;

type ConversationRow = {
  id: string;
  participant1_id: string;
  participant2_id: string;
};

async function getUserAge(
  supabase: Awaited<ReturnType<typeof createServerClient>>,
  userId: string,
): Promise<number | null> {
  try {
    const { data } = await (supabase as SupabaseClient)
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();

    const row = data as ProfileAgeRow;
    if (!row) return null;

    const age = row.age;
    const birthYear = row.birth_year;
    if (typeof age === 'number' && age > 0) return age;
    if (typeof birthYear === 'number' && birthYear > 0) {
      return new Date().getFullYear() - birthYear;
    }
    return null;
  } catch {
    return null;
  }
}

async function getConversationForUser(
  db: SupabaseClient,
  conversationId: string,
  userId: string,
): Promise<ConversationRow | null> {
  const { data, error } = await db
    .from('conversations')
    .select('id, participant1_id, participant2_id')
    .eq('id', conversationId)
    .maybeSingle();

  if (error || !data) return null;
  const conversation = data as ConversationRow;
  if (conversation.participant1_id !== userId && conversation.participant2_id !== userId) {
    return null;
  }
  return conversation;
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
    
  }
}


export async function GET(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const db = supabase as SupabaseClient;
  const { searchParams } = new URL(req.url);
  const conversationId = searchParams.get('conversation_id');

  if (conversationId) {
    const conversation = await getConversationForUser(db, conversationId, user.id);
    if (!conversation) {
      return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
    }

    const { data: messages, error } = await db
      .from('messages')
      .select(`
        *,
        sender:profiles!sender_id(id, handle, display_name, avatar_url)
      `)
      .eq('conversation_id', conversation.id)
      .order('created_at', { ascending: true });

    if (error) {
      return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
    }

    return NextResponse.json({ messages: messages ?? [] });
  }

  const { data: conversations, error } = await db
    .from('conversations')
    .select(`
      *,
      participant1:profiles!participant1_id(id, handle, display_name, avatar_url),
      participant2:profiles!participant2_id(id, handle, display_name, avatar_url),
      last_message:messages(content, created_at)
    `)
    .or(`participant1_id.eq.${user.id},participant2_id.eq.${user.id}`)
    .order('updated_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  return NextResponse.json({ conversations: conversations ?? [] });
}


export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json().catch(() => ({})) as {
    recipient_id?: string;
    content?: string;
    conversation_id?: string;
    media_url?: string;
    media_type?: string;
  };

  const { recipient_id, conversation_id, media_url, media_type } = body;
  const normalizedContent = typeof body.content === 'string' ? body.content.trim() : '';
  const normalizedMediaUrl = typeof media_url === 'string' ? media_url.trim() : '';
  const normalizedMediaType = typeof media_type === 'string' && media_type.trim().length > 0
    ? media_type.trim()
    : 'file';

  if (!conversation_id && !recipient_id) {
    return NextResponse.json({ error: 'recipient_id or conversation_id required' }, { status: 400 });
  }

  if (recipient_id && recipient_id === user.id) {
    return NextResponse.json({ error: 'You cannot message yourself' }, { status: 400 });
  }

  if (!normalizedContent && !normalizedMediaUrl) {
    return NextResponse.json({ error: 'Message content or media is required' }, { status: 400 });
  }

  const db = supabase as SupabaseClient;
  let convId: string | null = conversation_id ?? null;
  let resolvedRecipientId: string | null = recipient_id ?? null;

  if (convId) {
    const conversation = await getConversationForUser(db, convId, user.id);
    if (!conversation) {
      return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
    }

    resolvedRecipientId = conversation.participant1_id === user.id
      ? conversation.participant2_id
      : conversation.participant1_id;
  } else if (recipient_id) {
    const { data: recipientProfile, error: recipientError } = await db
      .from('profiles')
      .select('id')
      .eq('id', recipient_id)
      .maybeSingle();

    if (recipientError || !recipientProfile) {
      return NextResponse.json({ error: 'Recipient not found' }, { status: 404 });
    }

    const { data: existing } = await db
      .from('conversations')
      .select('id')
      .or(`and(participant1_id.eq.${user.id},participant2_id.eq.${recipient_id}),and(participant1_id.eq.${recipient_id},participant2_id.eq.${user.id})`)
      .maybeSingle();

    if (existing) {
      convId = (existing as { id: string }).id;
    } else {
      const { data: newConv, error: convError } = await db
        .from('conversations')
        .insert({
          participant1_id: user.id,
          participant2_id: recipient_id,
        })
        .select('id')
        .single();

      if (convError || !newConv) {
        return NextResponse.json({ error: toErrorMessage(convError) }, { status: 500 });
      }

      convId = (newConv as { id: string }).id;
      await mirrorConversationParticipants(db, convId, [user.id, recipient_id]);
    }
  }

  if (!convId || !resolvedRecipientId) {
    return NextResponse.json({ error: 'Conversation recipient could not be resolved' }, { status: 400 });
  }

  await mirrorConversationParticipants(db, convId, [user.id, resolvedRecipientId]);

  const senderAge = await getUserAge(supabase, user.id);
  const recipientAge = await getUserAge(supabase, resolvedRecipientId);

  const senderIsMinor = typeof senderAge === 'number' && senderAge >= 13 && senderAge < 18;
  const recipientIsAdult = typeof recipientAge === 'number' && recipientAge >= 18;
  const hasImage = normalizedMediaUrl.length > 0 && normalizedMediaType === 'image';

  if (hasImage && senderIsMinor && recipientIsAdult) {
    const contentRef = `minor_image:${user.id.slice(0, 8)}`;
    reportChildSafetyIncident({
      reportedUserId: user.id,
      ruleCode: 'C32_MINOR_IMAGE',
      detectionResult: {
        flagged: true,
        rule_code: 'C32_MINOR_IMAGE',
        severity: 1.0,
        confidence: 1.0,
        category: 'MINOR_IMAGE',
        signal_count: 1,
        _audit: { signals: ['minor_to_adult_image'], hash_match: false },
      },
      surface: 'message',
      contentRef,
    }).catch((err: unknown) => console.error('[child-safety] minor image block report error:', err));

    return NextResponse.json(
      { error: 'This image was sent from a minor and has been blocked.' },
      { status: 451 },
    );
  }

  const childSafetyResult = scanContent({ text: normalizedContent });
  if (childSafetyResult.flagged) {
    const contentHash = createHash('sha256').update(normalizedContent).digest('hex');
    reportChildSafetyIncident({
      reportedUserId: user.id,
      ruleCode: childSafetyResult.rule_code!,
      detectionResult: childSafetyResult,
      surface: 'message',
      contentRef: `draft:${contentHash.slice(0, 16)}`,
      contentHash,
    }).catch((err: unknown) => console.error('[child-safety] message report error:', err));

    return NextResponse.json(
      { error: 'Message violates our child safety policy and has been blocked.' },
      { status: 451 },
    );
  }

  if (hasImage) {
    const mediaSafetyResult = await scanMediaUrlsForChildSafety({
      urls: [normalizedMediaUrl],
      supabase,
    });

    if (mediaSafetyResult.flagged) {
      reportChildSafetyIncident({
        reportedUserId: user.id,
        ruleCode: mediaSafetyResult.rule_code!,
        detectionResult: mediaSafetyResult,
        surface: 'message',
        contentRef: 'media:1_file',
      }).catch((err: unknown) => console.error('[child-safety] message media report error:', err));

      return NextResponse.json(
        { error: 'Attached image violates our child safety policy and has been blocked.' },
        { status: 451 },
      );
    }
  }

  const messageContent = normalizedMediaUrl
    ? [normalizedContent, `[Attachment: ${normalizedMediaType}] ${normalizedMediaUrl}`]
        .filter(Boolean)
        .join('\n\n')
    : normalizedContent;

  const { data: message, error } = await db
    .from('messages')
    .insert({
      conversation_id: convId,
      sender_id: user.id,
      recipient_id: resolvedRecipientId,
      content: messageContent,
      is_read: false,
      read: false,
    })
    .select(`
      *,
      sender:profiles!sender_id(id, handle, display_name, avatar_url)
    `)
    .single();

  if (error) {
    return NextResponse.json({ error: toErrorMessage(error) }, { status: 500 });
  }

  await db
    .from('conversations')
    .update({ updated_at: new Date().toISOString() })
    .eq('id', convId);

  await db.from('notifications').insert({
    user_id: resolvedRecipientId,
    type: 'message',
    message: `New message from ${user.email ?? 'someone'}`,
    data: {
      conversation_id: convId,
      message_id: (message as Record<string, unknown>).id,
      sender_id: user.id,
    },
  });

  return NextResponse.json({ message, conversation_id: convId }, { status: 201 });
}
