'use client';

import HomeDreamSurface from '@/app/dreamdmbar/_components/HomeDreamRegion';
import DreamsSpacePanel from '@/components/dreams/dreamsurface.dreamspace';
import RuntimeShell from '@/components/runtime/dream.shell.RuntimeShell';
import EnhancedSpatialShell from '@/components/spatial/dream.shell.EnhancedSpatialShell';
import { getEnginByName } from '@/lib/forge/forgeRegistry';
import type { RuntimeRegion } from '@/lib/identity/canonical-names';
import type { RuntimeRegionKey } from '@/types/dreamArtifact';
import type { RuntimeWorld } from '@/lib/runtime/dualRuntime';
import dynamic from 'next/dynamic';
import React, { useCallback, useEffect, useState } from 'react';
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
import { getDreamComponent } from '@/lib/dreams/DreamRegistry';
import type { SystemPanelId } from '@/lib/panels/panelTypes';

// Framework directives stay physically first when required.

// Runtime file: components/runtime/dream.RuntimeView.tsx.

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

/** Existing Engin capabilities mounted directly inside recursive runtime surfaces. */
const ENGIN_SURFACES: Record<string, React.ComponentType<EnginSurfaceProps>> = {
  StarMakerEngin: dynamic(() => import('@/engins/engin.StarMakerEngin'), { ssr: false }),
  GameEngin: dynamic(() => import('@/engins/engin.GameEngin'), { ssr: false }),
  LabEngin: dynamic(() => import('@/engins/engin.LabEngin'), { ssr: false }),
  CodeEngin: dynamic(() => import('@/engins/engin.CodeEngin'), { ssr: false }),
  BrandingEngin: dynamic(() => import('@/engins/engin.BrandingEngin'), { ssr: false }),
  ContentEngin: dynamic(() => import('@/engins/engin.ContentEngin'), { ssr: false }),
  ForgeEngin: dynamic(() => import('@/engins/dream.ForgeEngin'), { ssr: false }),
};

// Imports and external modules this runtime file depends on.

/**
 * RuntimeView
 *
 * Renders the content for a single runtime view based on the RuntimeWorld.
 * Used by both Surface Space (top) and DreamSpace (bottom) regions.
 *
 * Every world type is now wrapped in RuntimeShell, which provides:
 *  • A constrained scrollable + zoomable viewport (never the full page).
 *  • Zoom in / zoom out controls.
 *  • In-region iframe loading so app/engin navigation never leaves the home surface.
 *
 * Panel worlds — { type: 'panel'; name: SystemPanelId } — render the system
 * feature component directly inside the region. No routing. No overlays.
 */

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

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
  /** Open a path contained inside this region (iframe), instead of full-page navigation */
  onOpenInRegion?: (path: string) => void;
  /** Load an existing Engin capability directly inside this runtime region. */
  onOpenEngin?: (enginName: string) => void;
  /** Stable runtime identity keeps duplicate Engin mounts independent. */
  runtimeId: 'homedream' | 'dreamspace';
  /** Return to the default world for this region (close iframe) */
  onBackFromRegion?: () => void;
  seamOffsetPx?: number;
  splitRatio?: number;
  seamVisible?: boolean;
  dominantRegion?: RuntimeRegion;
}

/** Engin name → canonical daydream route */
type EnginSurfaceProps = { onBack: () => void; instanceId?: string };

// Runtime functions, classes, handlers, and state transitions.

function getEnginFallbackRoute(name: string): string {
  return getEnginByName(name)?.daydreamHref ?? '/dreamdmbar/homedream';
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
}: RuntimeViewProps) {
  /* ── In-region iframe state ─────────────────────────────────────────────── */
  const moduleRuntimeRegion: RuntimeRegionKey = runtimeId === 'homedream' ? 'surface' : 'dream';
  const [iframeUrl,   setIframeUrl]   = useState<string | null>(null);
  const [iframeTitle, setIframeTitle] = useState<string>('');

  const openUrl = useCallback((url: string, title?: string) => {
    setIframeUrl(url);
    setIframeTitle(title ?? url);
  }, []);

  const closeIframe = useCallback(() => {
    setIframeUrl(null);
    setIframeTitle('');
  }, []);

  // Reset iframe whenever the world changes so stale pages don't linger.

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

  if (world === 'HomeDream Surface') {
    return (
      <div style={outerStyle}>
        <RuntimeShell
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
        style={{
          ...outerStyle,
          background: 'linear-gradient(180deg, #020818 0%, #08142A 42%, #0A1A30 100%)',
          overflow: 'hidden',
        }}
      >
        <RuntimeShell
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
        <div style={outerStyle}>
          <RuntimeShell
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
    // Fallback when profile data is not yet available
    return (
      <div style={outerStyle}>
        <RuntimeShell
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
      <div style={outerStyle}>
        <RuntimeShell
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
    if (EnginSurface) {
      const instanceId = `${runtimeId}:${world.name}`;
      return (
        <div style={outerStyle}>
          <RuntimeShell
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
      <div style={outerStyle}>
        <RuntimeShell iframeUrl={iframeUrl} onCloseIframe={closeIframe} iframeTitle={iframeTitle}>
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
      <div style={outerStyle}>
        <RuntimeShell
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
            <div className="de-glass" style={{ borderRadius: 28, padding: 32, maxWidth: 600, textAlign: 'center' }}>
              <div className="de-tag">Custom</div>
              <div className="de-label" style={{ fontSize: 24, marginTop: 8 }}>{world.path}</div>
              <button
                type="button"
                onClick={() => openUrl(world.path, world.path)}
                style={{
                  display: 'inline-block', marginTop: 16, padding: '10px 24px',
                  background: 'linear-gradient(135deg,#c8981a,#e0b830)', color: '#fff',
                  borderRadius: 10, fontWeight: 700, fontSize: 13, border: 'none', cursor: 'pointer',
                }}
              >
                Navigate →
              </button>
            </div>
          </div>
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
        style={{
          ...outerStyle,
          background: 'var(--de-surface, #f4f8fd)',
        }}
      >
        <RuntimeShell
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

  // Fallback
  return null;
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
