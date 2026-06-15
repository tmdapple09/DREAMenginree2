/**
 * DREAMenginOS — Core Upgrade Layer
 *
 * Exports all atomic OS capabilities and provides upgradeEngine() so
 * any engine becomes a thin shell that calls into the OS layer.
 *
 * The existing DREAMenginOS.tsx visual dashboard is untouched.
 */

// slog transform

// Torridity physics

// Generation Law ι-Engine

// Local Event Bus

// Ledger

// Universal Editor

// Bot Detection

// Audio Fingerprint

// Component Inventory

// Forge

// GameEngin Runtime

export type OSFeature = 'ledger' | 'bridge' | 'aiTriad' | 'telemetry';

export interface EngineBase {
  id: string;
  name: string;
  [key: string]: unknown;
}

export interface UpgradedEngine<T extends EngineBase = EngineBase> {
  engine: T;
  features: OSFeature[];
  ledger?: ReturnType<typeof import('../ledger').createLedger>;
  bus?: ReturnType<typeof import('../eventBus').createEventBus>;
  telemetry?: {
    frameCount: number;
    startedAt: string;
    log: (msg: string) => void;
  };
}

/**
 * upgradeEngine(engine, features)
 *
 * Adds OS capabilities to any engine object:
 *  - 'ledger'    → attaches an in-memory Ledger
 *  - 'bridge'    → creates a local EventBus
 *  - 'aiTriad'   → documents AI triad presence (Dr. Eams, IDARi, Boogie)
 *  - 'telemetry' → lightweight frame counter + log
 */
export async function upgradeEngine<T extends EngineBase>(
  engine: T,
  features: OSFeature[]
): Promise<UpgradedEngine<T>> {
  const upgraded: UpgradedEngine<T> = { engine, features };

  if (features.includes('ledger')) {
    const { createLedger: _createLedger } = await import('../ledger');
    upgraded.ledger = _createLedger();
  }

  if (features.includes('bridge')) {
    const { createEventBus: _createBus } = await import('../eventBus');
    upgraded.bus = _createBus();
  }

  if (features.includes('telemetry')) {
    upgraded.telemetry = {
      frameCount: 0,
      startedAt:  new Date().toISOString(),
      log(msg: string) {
        console.info(`[${engine.id} telemetry] ${msg}`);
        this.frameCount++;
      },
    };
  }

  // 'aiTriad' is documented — the three agents are platform-level services
  // and don't need runtime attachment here.

  return upgraded;
}

export {
    slog, slogArray, slogEntropy, slogInv, slogMean,
    slogVariance
} from '../slog';
export {
    TORRIDITY_A0_PERCEPTION, TORRIDITY_DP,
    TORRIDITY_LAMBDA, TORRIDITY_N, contentMass, mu, rankFeed, throttledVisibility, torridityRank
} from '../torridity';
export type { ContentItem, RankedItem } from '../torridity';
export {
    BUGS_LOG, DELTA_P, DOC_RELATIONSHIPS, IOTA_MAX, LAMBDA, THRESHOLD_FLOW,
    THRESHOLD_SYNTHESIZE, auditPostPass, calculateInventionForce,
    getPassProtocol, logResidual, runPrePassChecklist
} from '../generationLaw';
export type {
    CreativePass, InventionResult, PrePassChecklist, Protocol, ResidualClass
} from '../generationLaw';
export {
    createDualRuntimeHub, createEventBus
} from '../eventBus';
export type { EventBus, EventHandler } from '../eventBus';
export {
    createLedger, getAllByKind, getLedgerEntry, recordView, storeAsset, storeFingerprint, storePeakMap, storeSampleMetadata,
    storeTorridityRank
} from '../ledger';
export type {
    AssetEntry, AssetManifest, AssetType, FingerprintEntry, Ledger,
    LedgerEntry,
    PeakMapEntry, SampleMetadata, SampleMetadataEntry,
    TorridityEntry
} from '../ledger';
export {
    canTransfer, createLocalEventBus, transferModule
} from '../universalEditor';
export type { ModuleManifest, RuntimeId } from '../universalEditor';
export {
    analyzeSwipe, isBotSession, tallyView
} from '../botDetection';
export type {
    BotSessionResult, Point,
    SwipeAnalysis, SwipeRecord, ViewTally
} from '../botDetection';
export {
    buildPeakMap, extractAudioChunks, matchFingerprint, recordReferenceFingerprint
} from '../audioFingerprint';
export type {
    Fingerprint,
    MatchResult, Peak,
    PeakMap
} from '../audioFingerprint';
export {
    ALL_CATEGORIES, COMPONENT_INVENTORY, getByCategory,
    searchComponents
} from '../componentInventory';
export type { AtomicComponent, ComponentCategory } from '../componentInventory';
export {
    atomicPieceFromComponent, createAssembly, deserializeAssembly, runAssembly,
    serializeAssembly, validateAssembly
} from '../forge/engineForge';
export type {
    AssemblySandbox, AtomicPiece,
    EngineAssembly, Port, ValidationResult, Wire
} from '../forge/engineForge';
export {
    GameEnginRuntime, loadDreamGame
} from '../engins/gameengin/gameEnginRuntime';
export type {
    DreamGameInstance, DreamGameManifest, GameEnginEvents, InputHandler, InputType
} from '../engins/gameengin/gameEnginRuntime';
