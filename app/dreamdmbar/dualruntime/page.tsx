'use client';

import SharedDreamRuntime from '@/components/shared-dream/dream.SharedDreamRuntime';
import { useDreamSystem } from '@/lib/dreamdm/DreamSystemContext';
import { useEffect, useState } from 'react';

// Framework directives stay physically first when required.

// Runtime file: app/dreamdmbar/dualruntime/page.tsx.

/**
 * app/dreamdmbar/dualruntime/page.tsx
 *
 * Persistent Collaborative Reality — the dualruntime focus view.
 *
 * Previously: just set splitRatio(0.5) and rendered null.
 * Now: splits the bar 50/50 AND renders a SharedDreamRuntime session,
 * giving both runtime regions a live persistent collaborative context.
 *
 * The SharedDreamRuntime:
 *   - Connects to (or creates) a shared_dream_sessions row in Supabase
 *   - Passes the stable channelId to SharedDreamProvider → Supabase Realtime
 *   - Shows all active Engins with their last saved state
 *   - Saves Engin states to DB on every publish so the next user restores them
 *   - Shows who's been here (members) + activity timeline
 *   - InviteFlow generates an invite link anyone can use to join
 *
 * URL param: ?session=<uuid> joins an existing session.
 *            No param → creates a new session (stored in sessionStorage so
 *            refresh re-joins the same session instead of creating another).
 */

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

const SESSION_STORAGE_KEY = 'dreamengin:dualruntime:session-id';

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

// Runtime functions, classes, handlers, and state transitions.

export default function DreamDMBarDualRuntimePage( ){
  const { setFocus, setSplitRatio, setIsBarMinimized } = useDreamSystem();
  const [sessionId, setSessionId] = useState<string | undefined>(undefined);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    setFocus('dualruntime');
    setIsBarMinimized(false);
    setSplitRatio(0.5);
  }, [setFocus, setIsBarMinimized, setSplitRatio]);

  // Resolve session ID: URL param → sessionStorage → undefined (create new)
  useEffect(() => {
    if (typeof window === 'undefined') { setResolved(true); return; }

    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('session');
    if (fromUrl) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, fromUrl);
      setSessionId(fromUrl);
      setResolved(true);
      return;
    }

    const fromStorage = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (fromStorage) {
      setSessionId(fromStorage);
    }
    setResolved(true);
  }, []);

  // Once SharedDreamRuntime creates a new session, persist its ID so refresh rejoins it
  const handleSessionCreated = (newId: string) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(SESSION_STORAGE_KEY, newId);
    }
  };

  if (!resolved) return null;

  return (
    <div style={{ width: '100%', height: '100%', padding: '0 0 4px' }}>
      <SharedDreamRuntime
        sessionId={sessionId}
        onSessionCreated={handleSessionCreated}
      />
    </div>
  );
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
