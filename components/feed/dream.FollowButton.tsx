'use client';

import FollowOnboarding, { type FollowFrequency } from '@/components/feed/dream.FollowOnboarding';
import { UserCheck, UserPlus } from 'lucide-react';
import { useEffect, useState } from 'react';

type Props = {
  targetId: string;
  handle: string;
  displayName: string;
  initialFollowing?: boolean;
};

export default function FollowButton({ targetId, handle, displayName, initialFollowing = false }: Props) {
  const [open, setOpen] = useState(false);
  const [following, setFollowing] = useState(initialFollowing);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!targetId) return;
    let cancelled = false;
    void (async () => {
      const res = await fetch(`/api/follow?type=check&target_id=${encodeURIComponent(targetId)}`, {
        credentials: 'include',
        cache: 'no-store',
      }).catch(() => null);
      if (!res?.ok || cancelled) return;
      const data = await res.json().catch(() => ({})) as { isFollowing?: boolean };
      if (!cancelled) setFollowing(Boolean(data.isFollowing));
    })();
    return () => { cancelled = true; };
  }, [targetId]);

  const handleConfirm = async (_freq: FollowFrequency) => {
    if (busy) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch('/api/follow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ target_id: targetId }),
      });
      const data = await res.json().catch(() => ({})) as { error?: string };
      if (!res.ok && data.error !== 'Already following') {
        throw new Error(data.error ?? 'Failed to follow user.');
      }
      setFollowing(true);
      setOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to follow user.');
    } finally {
      setBusy(false);
    }
  };

  const handleUnfollow = async () => {
    if (busy) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`/api/follow?target_id=${encodeURIComponent(targetId)}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      const data = await res.json().catch(() => ({})) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? 'Failed to unfollow user.');
      setFollowing(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to unfollow user.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (following) void handleUnfollow();
          else setOpen(true);
        }}
        disabled={busy}
        className="de-btn de-btn-primary"
        style={{
          fontSize: 11,
          padding: '6px 12px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          opacity: busy ? 0.65 : 1,
          background: following ? 'rgba(42,138,184,0.15)' : undefined,
          color: following ? 'var(--de-accent)' : undefined,
        }}
        aria-label={following ? `Unfollow ${handle}` : `Follow ${handle}`}
      >
        {following
          ? <><UserCheck className="w-3 h-3" /> Following</>
          : <><UserPlus className="w-3 h-3" /> Follow</>}
      </button>

      {error && <div style={{ marginTop: 6, fontSize: 11, color: '#ef4444' }}>{error}</div>}

      {open && (
        <FollowOnboarding
          handle={handle}
          displayName={displayName}
          onConfirm={handleConfirm}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
