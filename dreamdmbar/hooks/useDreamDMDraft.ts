'use client';

import { deleteOfflineRecord, getOfflineRecord, putOfflineRecord } from '@/engine/offline/offlineCache';
import { useCallback, useEffect, useRef, useState } from 'react';




const MAX_DRAFT_CHARS = 4999;
const STORAGE_PREFIX = 'de-dm-draft:';

export interface DraftPayload {
  subject: string;
  body: string;
  
  savedAt?: number;
}

interface UseDreamDMDraftReturn {
  
  draft: DraftPayload | null;
  
  saveDraft: (payload: DraftPayload) => void;
  
  clearDraft: (conversationId: string) => void;
  
  draftRestored: boolean;
  
  draftAgeMs: number | null;
}

function buildKey(conversationId: string): string {
  return `${STORAGE_PREFIX}${conversationId}`;
}

function readDraft(conversationId: string): DraftPayload | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(buildKey(conversationId));
    if (!raw) return null;
    return JSON.parse(raw) as DraftPayload;
  } catch {
    return null;
  }
}

function writeDraft(conversationId: string, payload: DraftPayload): void {
  if (typeof window === 'undefined') return;
  try {
    const truncated: DraftPayload = {
      subject: payload.subject,
      body: payload.body.length > MAX_DRAFT_CHARS ? payload.body.slice(0, MAX_DRAFT_CHARS) : payload.body,
      savedAt: Date.now(),
    };
    localStorage.setItem(buildKey(conversationId), JSON.stringify(truncated));
    void putOfflineRecord({ namespace: 'dreamdm-drafts', id: conversationId, value: truncated });
  } catch (err: unknown) {
    
    console.warn('[DreamDMDraft] Failed to persist draft', { conversationId, err });
  }
}


export function listAllDraftIds(): string[] {
  if (typeof window === 'undefined') return [];
  const ids: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(STORAGE_PREFIX)) {
      ids.push(key.slice(STORAGE_PREFIX.length));
    }
  }
  return ids;
}


export function cleanupStaleDrafts(maxAgeDays: number): string[] {
  if (typeof window === 'undefined') return [];
  const cutoff = Date.now() - maxAgeDays * 86_400_000;
  const removed: string[] = [];
  for (const convId of listAllDraftIds()) {
    const draft = readDraft(convId);
    if (!draft || !draft.savedAt || draft.savedAt < cutoff) {
      localStorage.removeItem(buildKey(convId));
      void deleteOfflineRecord('dreamdm-drafts', convId);
      removed.push(convId);
    }
  }
  return removed;
}


export function getDraftAge(conversationId: string): number | null {
  const draft = readDraft(conversationId);
  if (!draft || !draft.savedAt) return null;
  return Date.now() - draft.savedAt;
}

export function useDreamDMDraft(conversationId: string | null): UseDreamDMDraftReturn {
  const [draft, setDraft] = useState<DraftPayload | null>(null);
  const [draftRestored, setDraftRestored] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  
  useEffect(() => {
    if (!conversationId) {
      setDraft(null);
      setDraftRestored(false);
      return;
    }
    let cancelled = false;
    const saved = readDraft(conversationId);
    setDraft(saved);
    void getOfflineRecord<DraftPayload>('dreamdm-drafts', conversationId).then((record) => {
      if (cancelled || saved || !record?.value) return;
      setDraft(record.value);
      if (typeof window !== 'undefined') localStorage.setItem(buildKey(conversationId), JSON.stringify(record.value));
      if (record.value.body.trim() || record.value.subject.trim()) {
        setDraftRestored(true);
        window.setTimeout(() => setDraftRestored(false), 2000);
      }
    });
    
    if (saved && (saved.body.trim() || saved.subject.trim())) {
      setDraftRestored(true);
      const timer = setTimeout(() => setDraftRestored(false), 2000);
      return () => {
        cancelled = true;
        clearTimeout(timer);
      };
    }
    return () => {
      cancelled = true;
    };
  }, [conversationId]);

  const saveDraft = useCallback((payload: DraftPayload) => {
    if (!conversationId) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      writeDraft(conversationId, payload);
      setDraft({ ...payload, savedAt: Date.now() });
    }, 500);
  }, [conversationId]);

  const clearDraft = useCallback((convId: string) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(buildKey(convId));
      void deleteOfflineRecord('dreamdm-drafts', convId);
    }
    if (convId === conversationId) {
      setDraft(null);
      setDraftRestored(false);
    }
  }, [conversationId]);

  
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const draftAgeMs = draft?.savedAt ? Date.now() - draft.savedAt : null;

  return { draft, saveDraft, clearDraft, draftRestored, draftAgeMs };
}
