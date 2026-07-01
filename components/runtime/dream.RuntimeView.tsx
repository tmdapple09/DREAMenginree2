'use client';

import HomeDreamSurface from '@/app/dreamdmbar/_components/HomeDreamRegion';
import DreamsSpacePanel from '@/components/dreams/dreamsurface.dreamspace';
import RuntimeShell from '@/components/runtime/dream.shell.RuntimeShell';
import EnhancedSpatialShell from '@/components/spatial/dream.shell.EnhancedSpatialShell';
import { getEnginByName } from '@/engins/forgeengin/forge/forgeRegistry';
import type { RuntimeRegion } from '@/engine/identity/canonical-names';
import type { RuntimeRegionKey } from '@/types/dreamArtifact';
import type { RuntimeWorld } from '@/engine/runtime/dualRuntime';
import dynamic from 'next/dynamic';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import AlgorithmPanel from '@/components/panels/dream.panel.AlgorithmPanel';
import AppearancePanel from '@/components/panels/dream.panel.AppearancePanel';
import ConnectorsPanel from '@/components/panels/dream.panel.ConnectorsPanel';
import ControlsPanel from '@/components/panels/dream.panel.ControlsPanel';
import DataPanel from '@/components/panels/dream.panel.DataPanel';
import FeedSettingsPanel from '@/components/panels/dream.panel.FeedSettingsPanel';
import HelpPanel from '@/components/panels/dream.panel.HelpPanel';
import MarketplacePanel from '@/components/panels/dream.panel.MarketplacePanel';
import PrivacyPanel from '@/components/panels/dream.panel.PrivacyPanel';
import ProfilePanel from '@/components/panels/dream.panel.ProfilePanel';
import SafetyPanel from '@/components/panels/dream.panel.SafetyPanel';
import SettingsPanel from '@/components/panels/dream.panel.SettingsPanel';
import WidgetsPanel from '@/components/panels/dream.panel.WidgetsPanel';
import { getDreamComponent } from '@/engine/dreams/DreamRegistry';
import { buildApperceptiveContext } from '@/engine/runtime/apperception';
import type { SystemPanelId } from '@/components/panels/panelTypes';










const ENGIN_SURFACES: Record<string, React.ComponentType<EnginSurfaceProps>> = {
  StarMakerEngin: dynamic(() => import('@/engins/engin.StarMakerEngin'), { ssr: false }),
  GameEngin: dynamic(() => import('@/engins/engin.GameEngin'), { ssr: false }),
  LabEngin: dynamic(() => import('@/engins/engin.LabEngin'), { ssr: false }),
  CodeEngin: dynamic(() => import('@/engins/engin.CodeEngin'), { ssr: false }),
  BrandingEngin: dynamic(() => import('@/engins/engin.BrandingEngin'), { ssr: false }),
  ContentEngin: dynamic(() => import('@/engins/engin.ContentEngin'), { ssr: false }),
  ForgeEngin: dynamic(() => import('@/engins/dream.ForgeEngin'), { ssr: false }),
};









interface Post {
  id: string;
  content?: string;
  created_at?: string;
  [key: string]: unknown;
}

interface RuntimeViewProps {
  world: RuntimeWorld;
  isActive: boolean;
  userId?: string;
  profile: {
    id?: string;
    handle?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
  } | null;

  posts?: Post[];
  isAdmin?: boolean;
  onOpenDrEams: () => void;
  onOpenDreamSpace?: () => void;
  
  onOpenInRegion?: (path: string) => void;
  
  onOpenEngin?: (enginName: string) => void;
  
  runtimeId: 'homedream' | 'dreamspace';
  
  onBackFromRegion?: () => void;
  seamOffsetPx?: number;
  splitRatio?: number;
  seamVisible?: boolean;
  dominantRegion?: RuntimeRegion;
}


type EnginSurfaceProps = { onBack: () => void; instanceId?: string };



function getEnginFallbackRoute(name: string): string {
  const entry = getEnginByName(name);
  return entry?.userFacing && entry.daydreamHref ? entry.daydreamHref : '/dreamdmbar/homedream';
}

export default function RuntimeView({
  world,
  isActive,
  userId,
  profile,
  posts,
  isAdmin,
  onOpenDrEams,
  onOpenDreamSpace,
  onOpenInRegion,
  onOpenEngin,
  onBackFromRegion,
  runtimeId,
  dominantRegion,
}: RuntimeViewProps) {
  
  const moduleRuntimeRegion: RuntimeRegionKey = runtimeId === 'homedream' ? 'surface' : 'dream';
  const [iframeUrl,   setIframeUrl]   = useState<string | null>(null);
  const [iframeTitle, setIframeTitle] = useState<string>('');
  const apperception = useMemo(() => buildApperceptiveContext({
    world,
    runtimeId,
    runtimeRegion: moduleRuntimeRegion,
    dominantRegion,
    userId,
    iframeUrl,
    isActive,
    canOpenInRegion: Boolean(onOpenInRegion),
  }), [
    world,
    runtimeId,
    moduleRuntimeRegion,
    dominantRegion,
    userId,
    iframeUrl,
    isActive,
    onOpenInRegion,
  ]);

  const openUrl = useCallback((url: string, title?: string) => {
    setIframeUrl(url);
    setIframeTitle(title ?? url);
  }, []);

  const closeIframe = useCallback(() => {
    setIframeUrl(null);
    setIframeTitle('');
  }, []);

  

  useEffect(() => { setIframeUrl(null); setIframeTitle(''); }, [world]);

  const outerStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    opacity: isActive ? 1 : 0.3,
    pointerEvents: isActive ? 'auto' : 'none',
    transition: 'opacity 0.3s ease',
    contain: 'layout paint size',
  };

  const apperceptionProps = {
    'data-apperceptive-surface': apperception.surface,
    'data-active-engin': apperception.activeEngin ?? 'none',
    'data-current-intent': apperception.currentIntent,
    'data-selected-object': apperception.selectedObject ?? 'none',
    'data-capabilities': apperception.capabilities.join(','),
    'data-capability-labels': apperception.capabilityLabels.join(','),
    'data-next-actions': apperception.nextActions.join(','),
    'data-render-service': apperception.render.serviceId,
  };

  if (world === 'HomeDream Surface') {
    return (
      <div style={outerStyle} {...apperceptionProps}>
        <RuntimeShell
          apperception={apperception}
          iframeUrl={iframeUrl}
          onCloseIframe={closeIframe}
          iframeTitle={iframeTitle}
        >
          <HomeDreamSurface
            profile={profile}
            posts={posts ?? []}
            onOpenDrEams={onOpenDrEams}
            onOpenDreamSpace={onOpenDreamSpace}
            onOpenInRegion={onOpenInRegion}
            onOpenUrl={openUrl}
            onOpenEngin={onOpenEngin}
            isAdmin={isAdmin}
            userId={userId}
            runtimeRegion={moduleRuntimeRegion}
          />
        </RuntimeShell>
      </div>
    );
  }

  if (world === 'DreamSpace') {
    return (
      <div
        {...apperceptionProps}
        style={{
          ...outerStyle,
          background: 'linear-gradient(180deg, var(--de-bg-start, #eff6ff) 0%, var(--de-surface, #ffffff) 48%, rgba(248, 210, 106, 0.18) 100%)',
          overflow: 'hidden',
        }}
      >
        <RuntimeShell
          apperception={apperception}
          iframeUrl={iframeUrl}
          onCloseIframe={closeIframe}
          iframeTitle={iframeTitle}
        >
          <DreamsSpacePanel
            onOpenUrl={openUrl}
            onOpenInRegion={onOpenInRegion}
            onOpenEngin={onOpenEngin}
            accountId={userId}
            runtimeRegion={moduleRuntimeRegion}
            profile={profile}
          />
        </RuntimeShell>
      </div>
    );
  }

  if (world === 'View Profile Surface') {
    if (profile?.id && profile?.handle) {
      return (
        <div style={outerStyle} {...apperceptionProps}>
          <RuntimeShell
            apperception={apperception}
            iframeUrl={iframeUrl}
            onCloseIframe={closeIframe}
            iframeTitle={iframeTitle}
          >
            <EnhancedSpatialShell
              userId={profile.id}
              handle={profile.handle}
              displayName={profile.display_name ?? undefined}
              avatarUrl={profile.avatar_url ?? undefined}
            />
          </RuntimeShell>
        </div>
      );
    }
    
    return (
      <div style={outerStyle} {...apperceptionProps}>
        <RuntimeShell
          apperception={apperception}
          iframeUrl={iframeUrl}
          onCloseIframe={closeIframe}
          iframeTitle={iframeTitle}
        >
          <HomeDreamSurface
            profile={profile}
            posts={posts ?? []}
            onOpenDrEams={onOpenDrEams}
            onOpenDreamSpace={onOpenDreamSpace}
            onOpenInRegion={onOpenInRegion}
            onOpenUrl={openUrl}
            isAdmin={isAdmin}
            userId={userId}
          />
        </RuntimeShell>
      </div>
    );
  }

  if (typeof world === 'object' && world.type === 'dream') {
    const DreamComponent = getDreamComponent(world.id);
    return (
      <div style={outerStyle} {...apperceptionProps}>
        <RuntimeShell
          apperception={apperception}
          iframeUrl={iframeUrl}
          onCloseIframe={closeIframe}
          iframeTitle={iframeTitle}
        >
          <div
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              height: '100%', minHeight: '100%',
              background: 'linear-gradient(180deg, var(--de-bg-start) 0%, var(--de-bg-mid) 42%, var(--de-bg-end) 100%)',
            }}
          >
            <DreamComponent dreamId={world.id} title={`Dream ${world.id}`} open={openUrl} />
          </div>
        </RuntimeShell>
      </div>
    );
  }

  if (typeof world === 'object' && world.type === 'engin') {
    const EnginSurface = ENGIN_SURFACES[world.name];
    const enginEntry = getEnginByName(world.name);
    if (enginEntry && !enginEntry.userFacing) {
      return (
        <div style={outerStyle} {...apperceptionProps}>
          <RuntimeShell apperception={apperception} iframeUrl={iframeUrl} onCloseIframe={closeIframe} iframeTitle={iframeTitle}>
            <div className="de-glass" style={{ borderRadius: 28, margin: 'auto', padding: 32, maxWidth: 640, textAlign: 'center' }}>
              <div className="de-tag">Internal service</div>
              <div className="de-label" style={{ fontSize: 24, marginTop: 8 }}>{world.name} is used by active surfaces, not opened as its own app.</div>
            </div>
          </RuntimeShell>
        </div>
      );
    }

    if (EnginSurface) {
      const instanceId = `${runtimeId}:${world.name}`;
      return (
        <div style={outerStyle} {...apperceptionProps}>
          <RuntimeShell
            apperception={apperception}
            iframeUrl={iframeUrl}
            onCloseIframe={closeIframe}
            iframeTitle={iframeTitle}
          >
            <EnginSurface
              key={instanceId}
              instanceId={instanceId}
              onBack={onBackFromRegion ?? closeIframe}
            />
          </RuntimeShell>
        </div>
      );
    }

    const route = getEnginFallbackRoute(world.name);
    return (
      <div style={outerStyle} {...apperceptionProps}>
        <RuntimeShell apperception={apperception} iframeUrl={iframeUrl} onCloseIframe={closeIframe} iframeTitle={iframeTitle}>
          <div className="de-glass" style={{ borderRadius: 28, margin: 'auto', padding: 32, maxWidth: 600, textAlign: 'center' }}>
            <div className="de-tag">Unavailable Engin</div>
            <div className="de-label" style={{ fontSize: 24, marginTop: 8 }}>{world.name}</div>
            <button type="button" onClick={() => openUrl(route, world.name)} className="de-btn de-btn-gold" style={{ marginTop: 16 }}>
              Open fallback route →
            </button>
          </div>
        </RuntimeShell>
      </div>
    );
  }

  if (typeof world === 'object' && world.type === 'custom') {
    return (
      <div style={outerStyle} {...apperceptionProps}>
        <RuntimeShell
          apperception={apperception}
          iframeUrl={world.path}
          onCloseIframe={onBackFromRegion ?? closeIframe}
          iframeTitle={world.path}
        >
          <div />
        </RuntimeShell>
      </div>
    );
  }

  if (typeof world === 'object' && world.type === 'panel') {
    const PANEL_MAP: Record<SystemPanelId, React.ReactNode> = {
      'settings':             <SettingsPanel />,
      'connectors':           <ConnectorsPanel />,
      'marketplace':          <MarketplacePanel />,
      'profile':              <ProfilePanel />,
      'feed-settings':        <FeedSettingsPanel />,
      'settings/appearance':  <AppearancePanel />,
      'settings/privacy':     <PrivacyPanel />,
      'settings/controls':    <ControlsPanel />,
      'settings/data':        <DataPanel />,
      'settings/algorithm':   <AlgorithmPanel />,
      'settings/widgets':     <WidgetsPanel />,
      'settings/help':        <HelpPanel />,
      'settings/safety':      <SafetyPanel />,
      'settings/feed':        <FeedSettingsPanel />,
    };
    return (
      <div
        {...apperceptionProps}
        style={{
          ...outerStyle,
          background: 'var(--de-surface, #f4f8fd)',
        }}
      >
        <RuntimeShell
          apperception={apperception}
          iframeUrl={iframeUrl}
          onCloseIframe={closeIframe}
          iframeTitle={iframeTitle}
        >
          <div style={{ minHeight: '100%' }}>
            {PANEL_MAP[world.name] ?? null}
          </div>
        </RuntimeShell>
      </div>
    );
  }

  
  return null;
}






