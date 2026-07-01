import { ActivityProfile } from '@/components/activity/dream.ActivityProfile';
import ProfileShareButton from '@/components/dream.ProfileShareButton';
import FollowButton from '@/components/feed/dream.FollowButton';
import ProfileCustomizeButton from '@/components/profile/dream.ProfileCustomizeButton';
import ProfileWidgetGrid, { DEFAULT_DREAMS, type ProfileDream } from '@/components/profile/dream.widget.ProfileWidgetGrid';
import DreamWord from '@/components/ui/dream.DreamWord';
import InfinityIcon from '@/components/ui/dream.InfinityIcon';
import { createServerClient } from '@/supabase/server/serverClient';
import { safeGetUser } from '@/supabase/client/safeGetUser';
import type { SupabaseClient } from '@supabase/supabase-js';
import { Pencil } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';
import { Suspense } from 'react';









type Profile = {
  id: string;
  handle: string;
  display_name: string | null;
  avatar_url: string | null;
  bio: string | null;
  cover_url?: string | null;
  followers_count?: number | null;
  following_count?: number | null;
  posts_count?: number | null;
  profile_dream_widgets?: ProfileDream[] | null;
};

interface ProfilePageProps {
  params: Promise<{ handle: string }>;
}








export default async function ProfilePage({ params }: ProfilePageProps) {
  
  
  
  
  
  await connection();
  const { handle } = await params;
  const supabase = await createServerClient();

  
  let currentUser: { id: string } | null = null;
  try {
    const user = await safeGetUser(supabase);
    currentUser = user;
  } catch {
    
  }

  let rawProfile: Record<string, unknown> | null = null;
  try {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('handle', handle)
      .single();
    rawProfile = data;
  } catch {
    
  }

  if (!rawProfile) notFound();

  const profile = rawProfile as Profile;
  const isOwner = currentUser?.id === profile.id;
  const displayName = profile.display_name || profile.handle;

  
  
  
  let dreamWindowRecords: Array<{
    id: string;
    type: string;
    config: Record<string, unknown>;
    visibility: string;
    active_state: string;
  }> | null = null;
  try {
    const dreamWindowQuery = (supabase as SupabaseClient)
      .from('dream_windows')
      .select('id, type, config, size, position, visibility, active_state')
      .eq('owner_id', profile.id);

    
    const { data } = await (
      isOwner
        ? dreamWindowQuery
        : dreamWindowQuery.in('visibility', ['shared', 'public'])
    );
    dreamWindowRecords = data;
  } catch {
    
  }

  
  const dreamWindowCount = dreamWindowRecords?.length ?? 0;

  
  
  
  const allDreams: ProfileDream[] =
    Array.isArray(profile.profile_dream_widgets) && profile.profile_dream_widgets.length > 0
      ? profile.profile_dream_widgets
      : DEFAULT_DREAMS;

  const visibleDreams = isOwner
    ? allDreams 
    : allDreams.filter((w) => {
        const vis = (w.visibility ?? 'private') as string;
        
        
        return vis === 'public' || vis === 'shared' || vis === 'followers';
      });

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #070e1c 0%, #0c1829 40%, #0f2244 70%, #0a1628 100%)',
      paddingBottom: 100,
      position: 'relative',
      overflow: 'hidden',
    }}>

      
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-60px', width: '660px', height: '660px', background: 'radial-gradient(circle, rgba(56,189,248,0.10) 0%, rgba(14,165,233,0.04) 45%, transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-40px', width: '540px', height: '540px', background: 'radial-gradient(circle, rgba(200,152,26,0.10) 0%, rgba(245,158,11,0.04) 50%, transparent 70%)', filter: 'blur(72px)' }} />
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse, rgba(30,80,180,0.07) 0%, transparent 65%)', filter: 'blur(80px)' }} />
      </div>

      
      {isOwner && (
        <div style={{
          background: 'rgba(200,152,26,0.10)',
          borderBottom: '1px solid rgba(200,152,26,0.22)',
          padding: '8px 16px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
          fontSize: 12, color: 'rgba(212,168,67,0.90)',
          backdropFilter: 'blur(16px)',
          position: 'relative', zIndex: 10,
        }}>
          <span>You are viewing your public ViewProfile.{dreamWindowCount > 0 ? ` ${dreamWindowCount} Dream Window${dreamWindowCount === 1 ? '' : 's'} visible.` : ''}</span>
          <Link href="/edit-profiledream" style={{ fontWeight: 700, color: '#c8981a', textDecoration: 'underline' }}>
            Edit in EditProfileDream →
          </Link>
        </div>
      )}

      
      <div style={{ paddingTop: 18, paddingBottom: 2, textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <span className="de-wordmark" style={{ fontSize: 28, background: 'linear-gradient(135deg, #e8d090 0%, #c8981a 60%, #a07820 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          <DreamWord />engin
        </span>
      </div>

      
      <div style={{
        maxWidth: 520, margin: '0 auto',
        padding: '8px 16px 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'relative', zIndex: 10,
      }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, color: 'rgba(220,235,255,0.97)', margin: 0 }}>
          {isOwner ? 'ViewProfile' : `@${handle}`}
        </h1>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <ProfileShareButton />
          {isOwner ? (
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <ProfileCustomizeButton />
              <Link
                href="/edit-profiledream"
                style={{
                  width: 34, height: 34, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1.5px solid rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, textDecoration: 'none', color: 'rgba(200,220,255,0.75)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
                  backdropFilter: 'blur(12px)',
                }}
                title="Edit profile"
              >
                <Pencil size={14} />
              </Link>
            </div>
          ) : (
            <FollowButton targetId={profile.id} handle={profile.handle} displayName={displayName} />
          )}
        </div>
      </div>

      
      <div style={{ maxWidth: 520, margin: '0 auto', padding: '8px 16px 0', position: 'relative', zIndex: 10 }}>
        <Suspense fallback={<div className="h-24 animate-pulse bg-white/5 rounded-lg" />}>
          <ActivityProfile userId={profile.id} />
        </Suspense>
      </div>

      
      <div style={{ maxWidth: 520, margin: '0 auto', padding: '0 16px', position: 'relative', zIndex: 10 }}>
        <ProfileWidgetGrid
          displayName={displayName}
          handle={profile.handle}
          avatarUrl={profile.avatar_url}
          bio={profile.bio}
          coverUrl={profile.cover_url}
          followers={profile.followers_count ?? 0}
          following={profile.following_count ?? 0}
          posts={profile.posts_count ?? 12}
          likes={46}
          isEditing={false}
          initialWidgets={visibleDreams}
        />
      </div>

      
      <div style={{ textAlign: 'center', marginTop: 32, position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 56, height: 56, borderRadius: '50%',
          background: 'radial-gradient(circle at 36% 32%, #fffde0 0%, #f7e07a 10%, #e8c040 22%, #d4a843 38%, #a16207 65%, #6b3c03 100%)',
          boxShadow: '0 4px 20px rgba(200,152,26,0.55), 0 0 40px rgba(200,152,26,0.25), inset 0 2px 5px rgba(255,255,220,0.80)',
          cursor: 'pointer',
          animation: 'sicc-infinity-glow 2.4s ease-in-out infinite',
        }}>
          <InfinityIcon size={20} variant="flat" colorScheme="dark" />
        </div>
      </div>
    </div>
  );
}
