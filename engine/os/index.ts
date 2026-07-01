























export type OSFeature = 'ledger' | 'bridge' | 'aiTriad' | 'telemetry';

export interface EngineBase {
  id: string;
  name: string;
  [key: string]: unknown;
}

export interface UpgradedEngine<T extends EngineBase = EngineBase> {
  engine: T;
  features: OSFeature[];
  ledger?: ReturnType<typeof import('@/engine/ledger/ledger').createLedger>;
  bus?: ReturnType<typeof import('@/engine/events/eventBus').createEventBus>;
  telemetry?: {
    frameCount: number;
    startedAt: string;
    log: (msg: string) => void;
  };
}


export async function upgradeEngine<T extends EngineBase>(
  engine: T,
  features: OSFeature[]
): Promise<UpgradedEngine<T>> {
  const upgraded: UpgradedEngine<T> = { engine, features };

  if (features.includes('ledger')) {
    const { createLedger: _createLedger } = await import('@/engine/ledger/ledger');
    upgraded.ledger = _createLedger();
  }

  if (features.includes('bridge')) {
    const { createEventBus: _createBus } = await import('@/engine/events/eventBus');
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

  
  

  return upgraded;
}

export {
    slog, slogArray, slogEntropy, slogInv, slogMean,
    slogVariance
} from '../slog';
export {
    TORRIDITY_A0_PERCEPTION, TORRIDITY_DP,
    TORRIDITY_LAMBDA, TORRIDITY_N, contentMass, mu, rankFeed, throttledVisibility, torridityRank
} from '@/dreamr/torridity';
export type { ContentItem, RankedItem } from '@/dreamr/torridity';
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
} from '@/engine/events/eventBus';
export type { EventBus, EventHandler } from '@/engine/events/eventBus';
export {
    createLedger, getAllByKind, getLedgerEntry, recordView, storeAsset, storeFingerprint, storePeakMap, storeSampleMetadata,
    storeTorridityRank
} from '@/engine/ledger/ledger';
export type {
    AssetEntry, AssetManifest, AssetType, FingerprintEntry, Ledger,
    LedgerEntry,
    PeakMapEntry, SampleMetadata, SampleMetadataEntry,
    TorridityEntry
} from '@/engine/ledger/ledger';
export {
    canTransfer, createLocalEventBus, transferModule
} from '@/engine/editor/universalEditor';
export type { ModuleManifest, RuntimeId } from '@/engine/editor/universalEditor';
export {
    analyzeSwipe, isBotSession, tallyView
} from '@/dreamr/botDetection';
export type {
    BotSessionResult, Point,
    SwipeAnalysis, SwipeRecord, ViewTally
} from '@/dreamr/botDetection';
export {
    buildPeakMap, extractAudioChunks, matchFingerprint, recordReferenceFingerprint
} from '@/engins/starmakerengin/audioFingerprint';
export type {
    Fingerprint,
    MatchResult, Peak,
    PeakMap
} from '@/engins/starmakerengin/audioFingerprint';
export {
    ALL_CATEGORIES, COMPONENT_INVENTORY, getByCategory,
    searchComponents
} from '@/engins/forgeengin/componentInventory';
export type { AtomicComponent, ComponentCategory } from '@/engins/forgeengin/componentInventory';
export {
    atomicPieceFromComponent, createAssembly, deserializeAssembly, runAssembly,
    serializeAssembly, validateAssembly
} from '@/engins/forgeengin/forge/engineForge';
export type {
    AssemblySandbox, AtomicPiece,
    EngineAssembly, Port, ValidationResult, Wire
} from '@/engins/forgeengin/forge/engineForge';
export {
    GameEnginRuntime, loadDreamGame
} from '@/engins/gameengin/gameEnginRuntime';
export type {
    DreamGameInstance, DreamGameManifest, GameEnginEvents, InputHandler, InputType
} from '@/engins/gameengin/gameEnginRuntime';
