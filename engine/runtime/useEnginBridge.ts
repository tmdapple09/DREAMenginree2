'use client';

import { bridge } from '@/lib/runtime/dualRuntimeBridge';
import { useEffect, useState } from 'react';

// Framework directives stay physically first when required.

// Runtime file: lib/runtime/useEnginBridge.ts.

/**
 * useEnginBridge — per-Engin React hooks that wire real bridge.subscribe calls.
 *
 * Each hook subscribes to the 5 channels that are NOT its own and returns
 * live state derived from incoming events. All subscriptions are cleaned up
 * on unmount via the unsubscribe functions returned by bridge.subscribe.
 *
 * Architecture: lib/runtime/dualRuntimeBridge.ts — all 6 typed channels.
 * Privacy: only IDs / primitives cross Engin boundaries (AXIOM 4).
 */

// Runtime law comments and invariants stay attached to the code they govern.

// Module-owned constants, caches, refs, and mutable runtime memory.

// Imports and external modules this runtime file depends on.

// Top-level runtime registration and connection seams.

// Types, interfaces, and schemas accepted or provided by this file.

export interface CodeEnginBridgeState {
  lastBpm: number | null;
  lastGameScore: number | null;
  lastLabResult: string | null;
  lastCreatePublish: string | null;
  lastBrandCampaign: string | null;
  /** Seam workflow: game script imported from GameEngin for editing. */
  lastGameScript: string | null;
  /** Seam workflow: lab dataset received from LabEngin for code analysis. */
  lastLabDataset: string | null;
  /** Seam workflow: lab-to-forge 3D generation request received. */
  lastForgeRequest: string | null;
  connectionStatus: {
    music: string;
    games: string;
    lab: string;
    create: string;
    brand: string;
    seam: string;
  };
}

export interface GameEnginBridgeState {
  lastBpm: number | null;
  lastBpmTrackId: string | null;
  lastCodeBuild: string | null;
  lastLabResult: string | null;
  lastCreateAsset: string | null;
  lastBrandSegment: string | null;
  /** Seam workflow: adaptive soundtrack requested from StarMakerEngin. */
  lastSoundtrack: string | null;
  /** Seam workflow: script deployed from CodeEngin as game logic. */
  lastScriptDeploy: string | null;
  /** Seam workflow: 3D asset imported from ForgeEngin into scene. */
  lastAssetImport: string | null;
  /** Seam workflow: lore content received from ContentEngin. */
  lastLoreContent: string | null;
  /** Seam workflow: brand skin applied from BrandingEngin. */
  lastBrandSkin: string | null;
  connectionStatus: {
    music: string;
    code: string;
    lab: string;
    create: string;
    brand: string;
    seam: string;
  };
}

export interface StarMakerEnginBridgeState {
  lastGameSession: string | null;
  lastCodeBuild: string | null;
  lastLabExport: string | null;
  lastCreateDraft: string | null;
  lastBrandAsset: string | null;
  /** Seam workflow: 3D visualizer scene requested from ForgeEngin. */
  lastVisualizerScene: string | null;
  /** Seam workflow: sonification requested from LabEngin dataset. */
  lastSonification: string | null;
  connectionStatus: {
    games: string;
    code: string;
    lab: string;
    create: string;
    brand: string;
    seam: string;
  };
}

export interface LabEnginBridgeState {
  lastStem: string | null;
  lastGameScore: number | null;
  lastCodeCell: string | null;
  lastCreatePublish: string | null;
  lastBrandSnapshot: string | null;
  /** Seam workflow: stem visualization requested from StarMakerEngin. */
  lastStemVisualization: string | null;
  /** Seam workflow: code cell sent for lab experiment execution. */
  lastCodeExperiment: string | null;
  /** Seam workflow: 3D asset sent for physics/material simulation. */
  lastAssetSimulation: string | null;
  connectionStatus: {
    music: string;
    games: string;
    code: string;
    create: string;
    brand: string;
    seam: string;
  };
}

export interface BrandingEnginBridgeState {
  lastTrack: string | null;
  lastAchievement: string | null;
  lastCodeDeploy: string | null;
  lastLabSim: string | null;
  lastPublish: string | null;
  /** Seam workflow: music release campaign requested from StarMakerEngin. */
  lastMusicRelease: string | null;
  /** Seam workflow: achievement campaign requested from GameEngin. */
  lastAchievementCampaign: string | null;
  /** Seam workflow: content post sent for brand campaign wrapping. */
  lastContentCampaign: string | null;
  connectionStatus: {
    music: string;
    games: string;
    code: string;
    lab: string;
    create: string;
    seam: string;
  };
}

export interface ContentEnginBridgeState {
  lastStem: string | null;
  lastStemUrl: string | null;
  lastAchievement: string | null;
  lastNotebook: string | null;
  lastLabExport: string | null;
  lastBrandAsset: string | null;
  /** Seam workflow: music track/stem attached from StarMakerEngin. */
  lastMusicAttached: string | null;
  /** Seam workflow: notebook publish requested from CodeEngin. */
  lastNotebookPublish: string | null;
  /** Seam workflow: 3D asset embedded from ForgeEngin. */
  lastAssetEmbedded: string | null;
  /** Seam workflow: game clip embedded from GameEngin. */
  lastGameClip: string | null;
  /** Seam workflow: brand kit applied from BrandingEngin. */
  lastBrandKitApplied: string | null;
  connectionStatus: {
    music: string;
    games: string;
    code: string;
    lab: string;
    brand: string;
    seam: string;
  };
}

// Runtime functions, classes, handlers, and state transitions.

function ts( ){
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export function useCodeEnginBridge(): CodeEnginBridgeState {
  const [lastBpm, setLastBpm] = useState<number | null>(null);
  const [lastGameScore, setLastGameScore] = useState<number | null>(null);
  const [lastLabResult, setLastLabResult] = useState<string | null>(null);
  const [lastCreatePublish, setLastCreatePublish] = useState<string | null>(null);
  const [lastBrandCampaign, setLastBrandCampaign] = useState<string | null>(null);
  const [lastGameScript, setLastGameScript] = useState<string | null>(null);
  const [lastLabDataset, setLastLabDataset] = useState<string | null>(null);
  const [lastForgeRequest, setLastForgeRequest] = useState<string | null>(null);
  const [status, setStatus] = useState({
    music: 'Waiting for BPM…',
    games: 'Waiting for game events…',
    lab: 'Waiting for lab results…',
    create: 'Waiting for published content…',
    brand: 'Waiting for campaigns…',
    seam: 'Ready for cross-engin workflows…',
  });

  useEffect(() => {
    const subs = [
      bridge.subscribe('music', 'music:bpm-changed', p => {
        setLastBpm(p.bpm as number | null);
        setStatus((s) => ({ ...s, music: `BPM ${p.bpm} · ${ts()}` }));
      }),
      bridge.subscribe('games', 'games:score-submitted', p => {
        setLastGameScore(p.score as number | null);
        setStatus((s) => ({ ...s, games: `Score ${p.score} · ${ts()}` }));
      }),
      bridge.subscribe('lab', 'lab:result-ready', p => {
        setLastLabResult(p.experimentId as string | null);
        setStatus((s) => ({ ...s, lab: `Result: ${p.experimentId} · ${ts()}` }));
      }),
      bridge.subscribe('create', 'create:published', p => {
        setLastCreatePublish(p.contentId as string | null);
        setStatus((s) => ({ ...s, create: `Published ${p.contentId} · ${ts()}` }));
      }),
      bridge.subscribe('brand', 'brand:campaign-launched', p => {
        setLastBrandCampaign(p.title as string | null);
        setStatus((s) => ({ ...s, brand: `Campaign: ${p.title} · ${ts()}` }));
      }),
      // ── Seam workflow events ─────────────────────────────────────────────────
      bridge.subscribe('code', 'code:game-script-imported', p => {
        setLastGameScript(p.gameTitle as string | null);
        setStatus((s) => ({ ...s, seam: `Game script: ${p.gameTitle} · ${ts()}` }));
      }),
      bridge.subscribe('code', 'code:lab-dataset-received', p => {
        setLastLabDataset(p.experimentId as string | null);
        setStatus((s) => ({ ...s, seam: `Lab data: ${p.experimentId} · ${ts()}` }));
      }),
      bridge.subscribe('code', 'code:lab-to-forge-requested', p => {
        setLastForgeRequest(p.experimentId as string | null);
        setStatus((s) => ({ ...s, seam: `Forge gen: ${p.experimentId} · ${ts()}` }));
      }),
    ];
    return () => subs.forEach((u) => u());
  }, []);

  return {
    lastBpm,
    lastGameScore,
    lastLabResult,
    lastCreatePublish,
    lastBrandCampaign,
    lastGameScript,
    lastLabDataset,
    lastForgeRequest,
    connectionStatus: status,
  };
}

export function useGameEnginBridge(): GameEnginBridgeState {
  const [lastBpm, setLastBpm] = useState<number | null>(null);
  const [lastBpmTrackId, setLastBpmTrackId] = useState<string | null>(null);
  const [lastCodeBuild, setLastCodeBuild] = useState<string | null>(null);
  const [lastLabResult, setLastLabResult] = useState<string | null>(null);
  const [lastCreateAsset, setLastCreateAsset] = useState<string | null>(null);
  const [lastBrandSegment, setLastBrandSegment] = useState<string | null>(null);
  const [lastSoundtrack, setLastSoundtrack] = useState<string | null>(null);
  const [lastScriptDeploy, setLastScriptDeploy] = useState<string | null>(null);
  const [lastAssetImport, setLastAssetImport] = useState<string | null>(null);
  const [lastLoreContent, setLastLoreContent] = useState<string | null>(null);
  const [lastBrandSkin, setLastBrandSkin] = useState<string | null>(null);
  const [status, setStatus] = useState({
    music: 'BPM sync ready',
    code: 'Script runtime ready',
    lab: 'Physics sim ready',
    create: 'Asset pipeline ready',
    brand: 'Achievement sharing ready',
    seam: 'Ready for cross-engin workflows…',
  });

  useEffect(() => {
    const subs = [
      bridge.subscribe('music', 'music:bpm-changed', p => {
        setLastBpm(p.bpm as number | null);
        setLastBpmTrackId(p.trackId != null ? String(p.trackId) : null);
        setStatus((s) => ({ ...s, music: `BPM ${p.bpm} synced · ${ts()}` }));
      }),
      bridge.subscribe('code', 'code:build-success', p => {
        setLastCodeBuild(p.projectId as string | null);
        setStatus((s) => ({ ...s, code: `Deploy: ${p.projectId} · ${ts()}` }));
      }),
      bridge.subscribe('lab', 'lab:result-ready', p => {
        setLastLabResult(p.experimentId as string | null);
        setStatus((s) => ({ ...s, lab: `Result: ${p.experimentId} · ${ts()}` }));
      }),
      bridge.subscribe('create', 'create:export-asset', p => {
        setLastCreateAsset(p.assetId as string | null);
        setStatus((s) => ({ ...s, create: `Asset ready · ${ts()}` }));
      }),
      bridge.subscribe('brand', 'brand:segment-created', p => {
        setLastBrandSegment(p.name as string | null);
        setStatus((s) => ({ ...s, brand: `Segment: ${p.name} · ${ts()}` }));
      }),
      // ── Seam workflow events ─────────────────────────────────────────────────
      bridge.subscribe('games', 'games:soundtrack-requested', p => {
        setLastSoundtrack(p.trackId as string | null);
        setStatus((s) => ({ ...s, seam: `Soundtrack: ${p.trackTitle} · ${ts()}` }));
      }),
      bridge.subscribe('games', 'games:script-deploy-requested', p => {
        setLastScriptDeploy(p.cellId as string | null);
        setStatus((s) => ({ ...s, seam: `Script deploy: ${p.cellId} · ${ts()}` }));
      }),
      bridge.subscribe('games', 'games:asset-import-requested', p => {
        setLastAssetImport(p.assetId as string | null);
        setStatus((s) => ({ ...s, seam: `Asset import: ${p.assetName} · ${ts()}` }));
      }),
      bridge.subscribe('games', 'games:lore-content-received', p => {
        setLastLoreContent(p.contentId as string | null);
        setStatus((s) => ({ ...s, seam: `Lore: ${p.title} · ${ts()}` }));
      }),
      bridge.subscribe('games', 'games:brand-skin-requested', p => {
        setLastBrandSkin(p.campaignId as string | null);
        setStatus((s) => ({ ...s, seam: `Brand skin: ${p.campaignId} · ${ts()}` }));
      }),
    ];
    return () => subs.forEach((u) => u());
  }, []);

  return {
    lastBpm,
    lastBpmTrackId,
    lastCodeBuild,
    lastLabResult,
    lastCreateAsset,
    lastBrandSegment,
    lastSoundtrack,
    lastScriptDeploy,
    lastAssetImport,
    lastLoreContent,
    lastBrandSkin,
    connectionStatus: status,
  };
}

export function useStarMakerEnginBridge(): StarMakerEnginBridgeState {
  const [lastGameSession, setLastGameSession] = useState<string | null>(null);
  const [lastCodeBuild, setLastCodeBuild] = useState<string | null>(null);
  const [lastLabExport, setLastLabExport] = useState<string | null>(null);
  const [lastCreateDraft, setLastCreateDraft] = useState<string | null>(null);
  const [lastBrandAsset, setLastBrandAsset] = useState<string | null>(null);
  const [lastVisualizerScene, setLastVisualizerScene] = useState<string | null>(null);
  const [lastSonification, setLastSonification] = useState<string | null>(null);
  const [status, setStatus] = useState({
    games: 'Waiting for game session…',
    code: 'Waiting for build…',
    lab: 'Waiting for export…',
    create: 'Waiting for draft…',
    brand: 'Waiting for brand update…',
    seam: 'Ready for cross-engin workflows…',
  });

  useEffect(() => {
    const subs = [
      bridge.subscribe('games', 'games:session-started', p => {
        setLastGameSession(p.gameTitle as string | null);
        setStatus((s) => ({ ...s, games: `Playing: ${p.gameTitle} · ${ts()}` }));
      }),
      bridge.subscribe('code', 'code:build-success', p => {
        setLastCodeBuild(p.projectId as string | null);
        setStatus((s) => ({ ...s, code: `Build: ${p.projectId} · ${ts()}` }));
      }),
      bridge.subscribe('lab', 'lab:data-exported', p => {
        setLastLabExport(p.exportId as string | null);
        setStatus((s) => ({ ...s, lab: `Export ready · ${ts()}` }));
      }),
      bridge.subscribe('create', 'create:draft-saved', p => {
        setLastCreateDraft(p.title as string | null);
        setStatus((s) => ({ ...s, create: `Draft: ${p.title} · ${ts()}` }));
      }),
      bridge.subscribe('brand', 'brand:asset-updated', p => {
        setLastBrandAsset(p.assetType as string | null);
        setStatus((s) => ({ ...s, brand: `Asset: ${p.assetType} · ${ts()}` }));
      }),
      // ── Seam workflow events ─────────────────────────────────────────────────
      bridge.subscribe('music', 'music:visualizer-scene-requested', p => {
        setLastVisualizerScene(p.assetId as string | null);
        setStatus((s) => ({ ...s, seam: `Visualizer scene: ${p.assetName} · ${ts()}` }));
      }),
      bridge.subscribe('music', 'music:sonification-requested', p => {
        setLastSonification(p.experimentId as string | null);
        setStatus((s) => ({ ...s, seam: `Sonify: ${p.experimentId} · ${ts()}` }));
      }),
    ];
    return () => subs.forEach((u) => u());
  }, []);

  return {
    lastGameSession,
    lastCodeBuild,
    lastLabExport,
    lastCreateDraft,
    lastBrandAsset,
    lastVisualizerScene,
    lastSonification,
    connectionStatus: status,
  };
}

export function useLabEnginBridge(): LabEnginBridgeState {
  const [lastStem, setLastStem] = useState<string | null>(null);
  const [lastGameScore, setLastGameScore] = useState<number | null>(null);
  const [lastCodeCell, setLastCodeCell] = useState<string | null>(null);
  const [lastCreatePublish, setLastCreatePublish] = useState<string | null>(null);
  const [lastBrandSnapshot, setLastBrandSnapshot] = useState<string | null>(null);
  const [lastStemVisualization, setLastStemVisualization] = useState<string | null>(null);
  const [lastCodeExperiment, setLastCodeExperiment] = useState<string | null>(null);
  const [lastAssetSimulation, setLastAssetSimulation] = useState<string | null>(null);
  const [status, setStatus] = useState({
    music: 'Waiting for stem…',
    games: 'Waiting for score data…',
    code: 'Waiting for cell output…',
    create: 'Waiting for publish…',
    brand: 'Waiting for analytics…',
    seam: 'Ready for cross-engin workflows…',
  });

  useEffect(() => {
    const subs = [
      bridge.subscribe('music', 'music:stem-ready', p => {
        setLastStem(p.stemType as string | null);
        setStatus((s) => ({ ...s, music: `Stem: ${p.stemType} · ${ts()}` }));
      }),
      bridge.subscribe('games', 'games:score-submitted', p => {
        setLastGameScore(p.score as number | null);
        setStatus((s) => ({ ...s, games: `Score ${p.score} · ${ts()}` }));
      }),
      bridge.subscribe('code', 'code:cell-executed', p => {
        setLastCodeCell(p.cellId as string | null);
        setStatus((s) => ({ ...s, code: `Cell ${p.cellId} · ${ts()}` }));
      }),
      bridge.subscribe('create', 'create:published', p => {
        setLastCreatePublish(p.contentId as string | null);
        setStatus((s) => ({ ...s, create: `Published · ${ts()}` }));
      }),
      bridge.subscribe('brand', 'brand:analytics-snapshot', p => {
        setLastBrandSnapshot(p.snapshotId as string | null);
        setStatus((s) => ({ ...s, brand: `Snapshot ready · ${ts()}` }));
      }),
      // ── Seam workflow events ─────────────────────────────────────────────────
      bridge.subscribe('lab', 'lab:stem-visualization-requested', p => {
        setLastStemVisualization(p.stemType as string | null);
        setStatus((s) => ({ ...s, seam: `Stem viz: ${p.stemType} · ${ts()}` }));
      }),
      bridge.subscribe('lab', 'lab:code-experiment-requested', p => {
        setLastCodeExperiment(p.cellId as string | null);
        setStatus((s) => ({ ...s, seam: `Experiment: ${p.cellId} · ${ts()}` }));
      }),
      bridge.subscribe('lab', 'lab:asset-simulation-requested', p => {
        setLastAssetSimulation(p.assetId as string | null);
        setStatus((s) => ({ ...s, seam: `Simulate: ${p.assetName} · ${ts()}` }));
      }),
    ];
    return () => subs.forEach((u) => u());
  }, []);

  return {
    lastStem,
    lastGameScore,
    lastCodeCell,
    lastCreatePublish,
    lastBrandSnapshot,
    lastStemVisualization,
    lastCodeExperiment,
    lastAssetSimulation,
    connectionStatus: status,
  };
}

export function useBrandingEnginBridge(): BrandingEnginBridgeState {
  const [lastTrack, setLastTrack] = useState<string | null>(null);
  const [lastAchievement, setLastAchievement] = useState<string | null>(null);
  const [lastCodeDeploy, setLastCodeDeploy] = useState<string | null>(null);
  const [lastLabSim, setLastLabSim] = useState<string | null>(null);
  const [lastPublish, setLastPublish] = useState<string | null>(null);
  const [lastMusicRelease, setLastMusicRelease] = useState<string | null>(null);
  const [lastAchievementCampaign, setLastAchievementCampaign] = useState<string | null>(null);
  const [lastContentCampaign, setLastContentCampaign] = useState<string | null>(null);
  const [status, setStatus] = useState({
    music: 'Waiting for release…',
    games: 'Waiting for achievement…',
    code: 'Waiting for deploy…',
    lab: 'Waiting for sim result…',
    create: 'Waiting for publish…',
    seam: 'Ready for cross-engin workflows…',
  });

  useEffect(() => {
    const subs = [
      bridge.subscribe('music', 'music:track-released', p => {
        setLastTrack(p.title as string | null);
        setStatus((s) => ({ ...s, music: `Released: ${p.title} · ${ts()}` }));
      }),
      bridge.subscribe('games', 'games:achievement-unlocked', p => {
        setLastAchievement(p.title as string | null);
        setStatus((s) => ({ ...s, games: `Achievement: ${p.title} · ${ts()}` }));
      }),
      bridge.subscribe('code', 'code:deploy-to-game', p => {
        setLastCodeDeploy(p.projectId as string | null);
        setStatus((s) => ({ ...s, code: `Deploy: ${p.projectId} · ${ts()}` }));
      }),
      bridge.subscribe('lab', 'lab:simulation-complete', p => {
        setLastLabSim(p.simulationId as string | null);
        setStatus((s) => ({ ...s, lab: `Sim done · ${ts()}` }));
      }),
      bridge.subscribe('create', 'create:published', p => {
        setLastPublish(p.contentId as string | null);
        setStatus((s) => ({ ...s, create: `Published · ${ts()}` }));
      }),
      // ── Seam workflow events ─────────────────────────────────────────────────
      bridge.subscribe('brand', 'brand:music-release-requested', p => {
        setLastMusicRelease(p.trackId as string | null);
        setStatus((s) => ({ ...s, seam: `Release: ${p.trackTitle} · ${ts()}` }));
      }),
      bridge.subscribe('brand', 'brand:achievement-campaign-requested', p => {
        setLastAchievementCampaign(p.achievement as string | null);
        setStatus((s) => ({ ...s, seam: `Achievement campaign: ${p.achievement} · ${ts()}` }));
      }),
      bridge.subscribe('brand', 'brand:content-campaign-requested', p => {
        setLastContentCampaign(p.contentId as string | null);
        setStatus((s) => ({ ...s, seam: `Content campaign: ${p.title} · ${ts()}` }));
      }),
    ];
    return () => subs.forEach((u) => u());
  }, []);

  return {
    lastTrack,
    lastAchievement,
    lastCodeDeploy,
    lastLabSim,
    lastPublish,
    lastMusicRelease,
    lastAchievementCampaign,
    lastContentCampaign,
    connectionStatus: status,
  };
}

export function useContentEnginBridge(): ContentEnginBridgeState {
  const [lastStem, setLastStem] = useState<string | null>(null);
  const [lastStemUrl, setLastStemUrl] = useState<string | null>(null);
  const [lastAchievement, setLastAchievement] = useState<string | null>(null);
  const [lastNotebook, setLastNotebook] = useState<string | null>(null);
  const [lastLabExport, setLastLabExport] = useState<string | null>(null);
  const [lastBrandAsset, setLastBrandAsset] = useState<string | null>(null);
  const [lastMusicAttached, setLastMusicAttached] = useState<string | null>(null);
  const [lastNotebookPublish, setLastNotebookPublish] = useState<string | null>(null);
  const [lastAssetEmbedded, setLastAssetEmbedded] = useState<string | null>(null);
  const [lastGameClip, setLastGameClip] = useState<string | null>(null);
  const [lastBrandKitApplied, setLastBrandKitApplied] = useState<string | null>(null);
  const [status, setStatus] = useState({
    music: 'Waiting for stem…',
    games: 'Waiting for achievement…',
    code: 'Waiting for notebook…',
    lab: 'Waiting for export…',
    brand: 'Waiting for asset…',
    seam: 'Ready for cross-engin workflows…',
  });

  useEffect(() => {
    const subs = [
      bridge.subscribe('music', 'music:stem-ready', p => {
        setLastStem(p.stemType as string | null);
        setLastStemUrl(p.url as string | null);
        setStatus((s) => ({ ...s, music: `Stem: ${p.stemType} · ${ts()}` }));
      }),
      bridge.subscribe('games', 'games:achievement-unlocked', p => {
        setLastAchievement(p.title as string | null);
        setStatus((s) => ({ ...s, games: `Achievement: ${p.title} · ${ts()}` }));
      }),
      bridge.subscribe('code', 'code:notebook-exported', p => {
        setLastNotebook(p.notebookId as string | null);
        setStatus((s) => ({ ...s, code: `Notebook: ${p.notebookId} · ${ts()}` }));
      }),
      bridge.subscribe('lab', 'lab:data-exported', p => {
        setLastLabExport(p.exportId as string | null);
        setStatus((s) => ({ ...s, lab: `Export ready · ${ts()}` }));
      }),
      bridge.subscribe('brand', 'brand:asset-updated', p => {
        setLastBrandAsset(p.assetType as string | null);
        setStatus((s) => ({ ...s, brand: `Asset: ${p.assetType} · ${ts()}` }));
      }),
      // ── Seam workflow events ─────────────────────────────────────────────────
      bridge.subscribe('create', 'create:music-attached', p => {
        setLastMusicAttached(p.trackId as string | null);
        setStatus((s) => ({ ...s, seam: `Music: ${p.trackTitle} · ${ts()}` }));
      }),
      bridge.subscribe('create', 'create:notebook-publish-requested', p => {
        setLastNotebookPublish(p.notebookId as string | null);
        setStatus((s) => ({ ...s, seam: `Notebook publish: ${p.title} · ${ts()}` }));
      }),
      bridge.subscribe('create', 'create:asset-embedded', p => {
        setLastAssetEmbedded(p.assetId as string | null);
        setStatus((s) => ({ ...s, seam: `3D embed: ${p.assetName} · ${ts()}` }));
      }),
      bridge.subscribe('create', 'create:game-clip-embedded', p => {
        setLastGameClip(p.sessionId as string | null);
        setStatus((s) => ({ ...s, seam: `Game clip: ${p.gameTitle} · ${ts()}` }));
      }),
      bridge.subscribe('create', 'create:brand-kit-applied', p => {
        setLastBrandKitApplied(p.kitId as string | null);
        setStatus((s) => ({ ...s, seam: `Brand kit: ${p.kitId} · ${ts()}` }));
      }),
    ];
    return () => subs.forEach((u) => u());
  }, []);

  return {
    lastStem,
    lastStemUrl,
    lastAchievement,
    lastNotebook,
    lastLabExport,
    lastBrandAsset,
    lastMusicAttached,
    lastNotebookPublish,
    lastAssetEmbedded,
    lastGameClip,
    lastBrandKitApplied,
    connectionStatus: status,
  };
}

// Return values, render surfaces, emitted packets, and snapshots are produced inside actions.

// Teardown remains paired inside the lifecycle actions that allocate resources.

// Exported declarations and re-export barrels are this file's public surface.
