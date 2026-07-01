'use client';

import { createClient } from '@/supabase/client/client';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import { useCallback, useEffect, useRef, useState } from 'react';

















export interface SharedDreamMember {
  userId: string;
  role: string;
  joinedAt: string;
  lastSeenAt: string;
}

export interface SharedDreamActivityEntry {
  id: string;
  userId: string | null;
  kind: string;
  label: string;
  createdAt: string;
}

export interface UseSharedDreamSessionOptions {
  
  sessionId?: string;
  
  name?: string;
}

export interface UseSharedDreamSessionResult {
  
  channelId: string | null;
  
  sessionId: string | null;
  
  isLoading: boolean;
  
  savedEnginState: Record<string, Record<string, unknown>>;
  
  saveEnginState: (enginKey: string, state: Record<string, unknown>) => void;
  
  members: readonly SharedDreamMember[];
  
  activity: readonly SharedDreamActivityEntry[];
  
  logActivity: (kind: string, label: string, meta?: Record<string, unknown>) => void;
}




type EnginStateBuffer = Record<string, Record<string, unknown>>;



export function useSharedDreamSession({
  sessionId: propSessionId,
  name = 'Shared Dream',
}: UseSharedDreamSessionOptions = {}): UseSharedDreamSessionResult {
  const [sessionId, setSessionId] = useState<string | null>(propSessionId ?? null);
  const [channelId, setChannelId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [savedEnginState, setSavedEnginState] = useState<EnginStateBuffer>({});
  const [members, setMembers] = useState<SharedDreamMember[]>([]);
  const [activity, setActivity] = useState<SharedDreamActivityEntry[]>([]);

  
  const bufferRef = useRef<EnginStateBuffer>({});
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const userIdRef = useRef<string | null>(null);
  const sessionIdRef = useRef<string | null>(propSessionId ?? null);

  useEffect(() => {
    let cancelled = false;
    const supabase = createClient();

    async function bootstrap( ){
      const user = await safeGetUser(supabase);
      if (!user || cancelled) { setIsLoading(false); return; }
      userIdRef.current = user.id;

      let sid = propSessionId ?? null;
      let cid: string | null = null;

      if (sid) {
        
        const { data } = await supabase
          .from('shared_dream_sessions')
          .select('id, channel_id, engin_state, active_engins')
          .eq('id', sid)
          .single();

        if (data && !cancelled) {
          cid = data.channel_id as string;
          setSavedEnginState((data.engin_state as EnginStateBuffer) ?? {});
          bufferRef.current = (data.engin_state as EnginStateBuffer) ?? {};
        }
      } else {
        
        const newChannelId = `shared-dream:${crypto.randomUUID()}`;
        const { data } = await supabase
          .from('shared_dream_sessions')
          .insert({
            name,
            channel_id: newChannelId,
            owner_id: user.id,
            engin_state: {},
            active_engins: [],
          })
          .select('id, channel_id')
          .single();

        if (data && !cancelled) {
          sid = data.id as string;
          cid = data.channel_id as string;
        }
      }

      if (!cancelled && sid && cid) {
        sessionIdRef.current = sid;
        setSessionId(sid);
        setChannelId(cid);

        
        await supabase.from('shared_dream_members').upsert(
          { session_id: sid, user_id: user.id, last_seen_at: new Date().toISOString() },
          { onConflict: 'session_id,user_id' },
        );

        
        await supabase.rpc('touch_shared_dream_session', { p_session_id: sid });

        
        await supabase.from('shared_dream_activity').insert({
          session_id: sid,
          user_id: user.id,
          kind: 'joined',
          label: 'Someone joined the shared dream',
        });

        
        const { data: mData } = await supabase
          .from('shared_dream_members')
          .select('user_id, role, joined_at, last_seen_at')
          .eq('session_id', sid)
          .order('joined_at', { ascending: true });

        if (!cancelled && mData) {
          setMembers(mData.map((m: Record<string, unknown>) => ({
            userId: m.user_id as string,
            role: m.role as string,
            joinedAt: m.joined_at as string,
            lastSeenAt: m.last_seen_at as string,
          })));
        }

        
        const { data: aData } = await supabase
          .from('shared_dream_activity')
          .select('id, user_id, kind, label, created_at')
          .eq('session_id', sid)
          .order('created_at', { ascending: false })
          .limit(20);

        if (!cancelled && aData) {
          setActivity(aData.map((a: Record<string, unknown>) => ({
            id: a.id as string,
            userId: a.user_id as string | null,
            kind: a.kind as string,
            label: a.label as string,
            createdAt: a.created_at as string,
          })));
        }
      }

      if (!cancelled) setIsLoading(false);
    }

    void bootstrap();
    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propSessionId]);

  const flushBuffer = useCallback(async () => {
    const sid = sessionIdRef.current;
    if (!sid || Object.keys(bufferRef.current).length === 0) return;
    const supabase = createClient();
    await supabase
      .from('shared_dream_sessions')
      .update({
        engin_state: bufferRef.current,
        active_engins: Object.keys(bufferRef.current),
        last_active_at: new Date().toISOString(),
      })
      .eq('id', sid);
  }, []);

  const saveEnginState = useCallback((enginKey: string, state: Record<string, unknown>) => {
    bufferRef.current = { ...bufferRef.current, [enginKey]: state };
    setSavedEnginState((prev) => ({ ...prev, [enginKey]: state }));
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => { void flushBuffer(); }, 1000);
  }, [flushBuffer]);

  const logActivity = useCallback((kind: string, label: string, meta: Record<string, unknown> = {}) => {
    const sid = sessionIdRef.current;
    const uid = userIdRef.current;
    if (!sid) return;
    const supabase = createClient();
    const entry: SharedDreamActivityEntry = {
      id: crypto.randomUUID(),
      userId: uid,
      kind,
      label,
      createdAt: new Date().toISOString(),
    };
    setActivity((prev) => [entry, ...prev].slice(0, 30));
    void supabase.from('shared_dream_activity').insert({
      session_id: sid,
      user_id: uid,
      kind,
      label,
      meta,
    });
  }, []);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      
      void flushBuffer();
      const sid = sessionIdRef.current;
      const uid = userIdRef.current;
      if (sid && uid) {
        const supabase = createClient();
        void supabase.from('shared_dream_activity').insert({
          session_id: sid,
          user_id: uid,
          kind: 'left',
          label: 'Someone left the shared dream',
        });
      }
    };
  }, [flushBuffer]);

  return {
    channelId,
    sessionId,
    isLoading,
    savedEnginState,
    saveEnginState,
    members,
    activity,
    logActivity,
  };
}






