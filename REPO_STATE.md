# DREAMengin Repository State

Generated: 2026-07-08T17:19:24.827Z

Model: capability nodes + files as edges.

Marker guide:

- `👁 PAGE` = A place people can visit in the app.
- `🧱 LAYOUT` = The shared frame around a page, like the header, sidebar, or page wrapper.
- `⏳ LOADING` = What people see while the app is waiting.
- `🚨 ERROR` = What people see when something goes wrong.
- `🧭 NOT_FOUND` = What people see when the app cannot find the page.
- `🧩 COMPONENT` = A visible piece of the app, like a button, card, menu, form, panel, popup, or widget.
- `🗂 FEATURE_FOLDER` = A folder that holds files for something people use in the app.
- `🔌 API_ROUTE` = A behind-the-scenes app action, like saving, posting, liking, uploading, logging in, or sending a message.

- Capability nodes: 11589
- File edges: 1595
- Routes: 113
- Files analysed: 1595
- Unresolved internal imports: 138 specifiers across 33 files

---

# MASTER INDEX

## User-Facing Features

- [Home / DreamDMBar / DualRuntime](#home-runtime)
- [DreamR](#dreamr)
- [ContentEngin / CreateEngin](#contentengin)
- [GameEngin](#gameengin)
- [CodeEngin](#codeengin)
- [LabEngin](#labengin)
- [StarMakerEngin](#starmakerengin)
- [BrandEngin](#brandengin)
- [ForgeEngin](#forgeengin)
- [Profile](#profile)
- [Feed / Social](#feed-social)
- [Marketplace / Shop / Ads](#marketplace-shop-ads)
- [Settings / Customization](#settings-customization)
- [Messages / DMs](#messages)
- [Auth](#auth)

## System & Infrastructure

- [RenderEngin](#renderengin)
- [AI / Dr. Eams / Agents](#ai-agents)
- [Supabase / Database](#supabase-db)
- [VM / WASM](#vm-wasm)

## Cross-Cutting

- [Route Map](#route-map)
- [Capability Nodes](#capability-nodes)
- [Files as Edges](#files-as-edges)
- [Unresolved Internal Imports](#unresolved-imports)
- [Circular Dependencies](#circular-deps)
- [Risk Files](#risk-files)
- [Raw File Tree](#raw-tree)

---

# User-Facing Features

---

<a name="home-runtime"></a>

# Home / DreamDMBar / DualRuntime

> Persistent shell, DreamDMBar, HomeDream, DreamSpace, RuntimeShell, RuntimeView, and runtime bridge behavior.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/dreamdmbar/_components/DreamBarDataBridge.tsx` | `useDualRuntime`, `useDreamSystem`, `DIVIDER_H`, `SystemPanelId`, `EnginDispatcher`, `dreamOSBus` | `DreamBarDataBridge.tsx`, `(default)` |
| `app/dreamdmbar/_components/DreamSpaceRegion.tsx` | `(default)`, `useAccount`, `listSystemArtifacts`, `listVisibleArtifacts`, `restoreArtifact`, `restoreArtifactsFromOfflineCache` | `DreamSpaceRegion.tsx`, `(default)` |
| `app/dreamdmbar/_components/DreamWidgetGrid.tsx` | `WidgetInstance` | `DreamWidgetGrid.tsx`, `(default)` |
| `app/dreamdmbar/_components/HomeDreamRegion.tsx` | `lucide-react`, `next/navigation`, `react`, `(default)`, `(default)`, `(default)` | `HomeDreamRegion.tsx`, `(default)` |
| `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts` | `slog`, `TORRIDITY_LEDGER_CONFIG` | `InteractionSignal`, `SwipePathScore`, `TouchPoint`, `isLikelyBot`, `isSwipeBot`, `scoreBotLikelihood` |
| `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts` | `calculateRank`, `derivePostMassMeta`, `getPostMass` | `DREAMR_REASONS`, `DREAMR_WEIGHTS`, `DreamRSignals`, `ScoredPost`, `computeViewVelocity`, `dominantSignal` |
| `app/dreamdmbar/_components/dreamr/api/feedHandler.ts` | `filterByCloseFriends`, `loadVisibilityCircle`, `deriveNextCursor`, `parseFeedParams`, `getPrimaryPostMediaUrl`, `PostMediaShape` | `dreamrFeedHandler` |
| `app/dreamdmbar/_components/dreamr/api/route.ts` | `dreamrFeedHandler` | `GET` |
| `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx` | `bridge`, `react` | `dream.DreamRCore.tsx`, `(default)` |
| `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx` | `Point`, `analyzeSwipe`, `tallyView`, `enginBridge`, `react`, `react` | `dream.DreamRFeed.tsx`, `(default)`, `DREAMR_TOPICS` |
| `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx` | `(default)`, `(default)`, `(default)`, `FeedPost`, `uploadBlobToLedgerStorage`, `createClient` | `dreamsurface.dreamr.tsx`, `(default)` |
| `app/dreamdmbar/dreamspace/page.tsx` | `useDualRuntime`, `useDreamSystem`, `react` | `/dreamdmbar/dreamspace`, `page.tsx`, `(default)` |
| `app/dreamdmbar/dualruntime/page.tsx` | `(default)`, `useDreamSystem`, `react` | `/dreamdmbar/dualruntime`, `page.tsx`, `(default)` |
| `app/dreamdmbar/homedream/page.tsx` | `useDualRuntime`, `useDreamSystem`, `react` | `/dreamdmbar/homedream`, `page.tsx`, `(default)` |
| `app/dreamdmbar/layout.tsx` | `(default)`, `(default)`, `(default)`, `isOwnerEmail`, `isDevBypassActive`, `FeedPost` | `layout.tsx`, `(default)` |
| `app/dreamdmbar/page.tsx` | `next/navigation` | `/dreamdmbar`, `page.tsx`, `(default)` |
| `app/homedream/page.tsx` | `(default)`, `isDevBypassActive`, `FeedPost`, `safeGetUser`, `createServerClient`, `next/navigation` | `/homedream`, `page.tsx`, `(default)` |
| `components/home/dream.ActiveModuleSurface.tsx` | `loadActiveModules`, `removeActiveModule`, `restoreActiveModulesFromOfflineCache`, `saveActiveModule`, `saveActiveModulesForRegion`, `transferActiveModuleRegion` | `dream.ActiveModuleSurface.tsx`, `(default)` |
| `components/home/dream.DaydreamPulseStrip.tsx` | `next/navigation` | `dream.DaydreamPulseStrip.tsx`, `(default)` |
| `components/home/dream.FlagshipEnginesStrip.tsx` | `getEnginById`, `lucide-react`, `next/navigation` | `dream.FlagshipEnginesStrip.tsx`, `(default)` |
| `components/home/dream.NeuralSeamCanvas.tsx` | `DIVIDER_H`, `createIdleParticle`, `createSeamParticle`, `evictDeadParticles`, `tickParticles`, `SeamParticle` | `dream.NeuralSeamCanvas.tsx`, `(default)` |
| `components/home/dream.ZoomablePane.tsx` | `react`, `react` | `dream.ZoomablePane.tsx`, `(default)`, `ZoomablePaneProps` |
| `components/home/dream.bar.GlobalDreamBar.tsx` | `(default)`, `(default)`, `SystemMenuAction`, `useDreamSystem`, `runHomeAction`, `isPublicSurfacePath` | `dream.bar.GlobalDreamBar.tsx`, `(default)` |
| `components/home/dream.bar.PersistentDreamBar.tsx` | `(default)`, `(default)`, `useDualRuntime`, `(default)`, `(default)`, `(default)` | `dream.bar.PersistentDreamBar.tsx`, `(default)`, `DreamDMContainer` |
| `components/home/dream.widget.DreamWidget.tsx` | `cn`, `framer-motion`, `react` | `dream.widget.DreamWidget.tsx`, `(default)` |
| `components/runtime/dream.DualRuntimeContainer.tsx` | `DualRuntimeState`, `RuntimeWorld`, `DEFAULT_DUAL_RUNTIME`, `isHomeActiveTop`, `makeDreamSpaceActiveSurface`, `makeHomeActiveTop` | `dream.DualRuntimeContainer.tsx`, `useDualRuntime`, `(default)`, `useDualRuntime` |
| `components/runtime/dream.RuntimeView.tsx` | `(default)`, `(default)`, `(default)`, `(default)`, `getEnginByName`, `RuntimeRegion` | `dream.RuntimeView.tsx`, `(default)` |
| `components/runtime/dream.shell.RuntimeShell.tsx` | `isCompactRuntimeViewport`, `readInteractiveViewportScale`, `readInteractiveViewportWidth`, `ApperceptiveContext`, `react`, `react` | `dream.shell.RuntimeShell.tsx`, `(default)` |
| `dreamdmbar/dream.GlowingLight.tsx` | `react` | `dream.GlowingLight.tsx`, `(default)`, `GlowingLightProps` |
| `dreamdmbar/dream.PhaseTrail.tsx` | `react`, `react` | `dream.PhaseTrail.tsx`, `(default)`, `PhaseTrailProps` |
| `dreamdmbar/dreamsurface.dreamdmbar.tsx` | `lucide-react`, `next/image`, `react`, `react`, `(default)`, `(default)` | `dreamsurface.dreamdmbar.tsx`, `(default)`, `BAR_H`, `NAV_H` |
| `dreamdmbar/hooks/useDreamBarContext.ts` | `next/navigation`, `react`, `BarIntentMode` | `useDreamBarContext`, `DreamBarContext`, `DreamBarSurface`, `detectSurface`, `resolveIntentOverride`, `useDreamBarContext` |
| `dreamdmbar/hooks/useDreamDMConversations.ts` | `RealtimePostgresInsertPayload`, `createClient`, `getOfflineRecord`, `putOfflineRecord`, `react` | `useDreamDMConversations`, `DMConversation`, `useDreamDMConversations` |
| `dreamdmbar/hooks/useDreamDMDraft.ts` | `deleteOfflineRecord`, `getOfflineRecord`, `putOfflineRecord`, `react` | `useDreamDMDraft`, `DraftPayload`, `cleanupStaleDrafts`, `getDraftAge`, `listAllDraftIds`, `useDreamDMDraft` |
| `dreamdmbar/hooks/useDreamDMMessages.ts` | `RealtimePostgresInsertPayload`, `createClient`, `getOfflineRecord`, `putOfflineRecord`, `react` | `useDreamDMMessages`, `DMMessage`, `useDreamDMMessages` |
| `dreamdmbar/hooks/useDreamSearch.ts` | `USER_FACING_ENGINES`, `createClient`, `react` | `useDreamSearch`, `SearchResult`, `SearchResultType`, `UseDreamSearchReturn`, `useDreamSearch` |
| `dreamdmbar/hooks/useMessagingCore.ts` | `uploadBlobToLedgerStorage`, `createClient`, `react`, `DMMessage`, `toErrorMessage` | `useMessagingCore`, `MediaType`, `SendMessageParams`, `UseMessagingCoreReturn`, `useMessagingCore` |
| `dreamdmbar/hooks/useModuleBarIntent.ts` | `ModuleBarAction`, `useDreamSystem`, `react` | `useModuleBarIntent`, `UseModuleBarIntentResult`, `useModuleBarIntent` |
| `dreamdmbar/hooks/useNotifications.ts` | `react` | `useNotifications`, `useNotifications` |
| `dreamdmbar/notifications/notificationHelpers.ts` | - | `DbNotificationContent`, `DbNotificationRow`, `UiNotification`, `UiNotificationType`, `applyOptimisticDelete`, `applyOptimisticMarkAll` |
| `dreamdmbar/notifications/useNotifications.ts` | `react`, `applyOptimisticDelete`, `applyOptimisticMarkAll`, `applyOptimisticRead`, `getUnreadCount`, `normalizeDbRow` | `useNotifications`, `UseNotificationsReturn`, `useNotifications` |
| `dreamdmbar/runtime/DreamSystemContext.tsx` | `DEFAULT_SPLIT_RATIO`, `SystemPanelId`, `moveTorus`, `torusFocusKey`, `createClient`, `getOfflineRecord` | `DreamSystemContext.tsx`, `useDreamSystem`, `BarIntent`, `BarIntentMode`, `DEFAULT_BAR_INTENT`, `DEFAULT_WORLD_FOCUS` |
| `dreamdmbar/runtime/barInteractions.ts` | - | `BAR_FLING_LINE_RATIO`, `BAR_FLING_TO_BOTTOM_VELOCITY_THRESHOLD_PX_PER_MS`, `BAR_FLING_TO_TOP_MIN_DRAG_PX`, `BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS`, `BAR_SNAP_TO_TOP_HEIGHT_RATIO`, `BAR_SNAP_TO_TOP_THRESHOLD_PX` |
| `dreamdmbar/runtime/bridgeSeamFlow.ts` | - | `SEAM_CHANNEL_COLORS`, `SEAM_DEFAULT_COLOR`, `SeamParticle`, `_resetIdCounter`, `channelColor`, `createIdleParticle` |
| `engine/generated/dreamdmbar.ts` | - | `DreamdmbarMap`, `dreamdmbar` |
| `engine/runtime/EnginDispatcher.ts` | `RenderIntentType`, `BAR_Y_SCALE`, `buildWorkgroups`, `createEnginSAB`, `f64Telemetry`, `int32AxisState` | `DispatcherStats`, `DispatcherToWorkerMessage`, `EnginDispatcher`, `RenderDispatcherIntent`, `WasmEngineExports`, `WorkerBoundsViolationMessage` |
| `engine/runtime/apperception.ts` | `getEnginByName`, `RuntimeWorld`, `RuntimeRegion`, `RuntimeRegionKey` | `ApperceptiveContext`, `ApperceptiveSurface`, `buildApperceptiveContext` |
| `engine/runtime/channelMetrics.ts` | - | `ChannelMetrics`, `getAllChannelMetrics`, `getChannelMetrics`, `recordEmission`, `recordError`, `resetChannelMetrics` |
| `engine/runtime/coercionTable.ts` | - | `DreamDrop`, `DreamDropType`, `classifyDrop`, `coerceDataTransfer`, `coerceRawPayload` |
| `engine/runtime/dreamOSBus.ts` | `AI_AGENTS`, `RuntimeRegion`, `RuntimeWorld`, `bridge`, `AnyBridgeEmission`, `DualRuntimeChannel` | `CAPABILITY_DESCRIPTORS`, `CapabilityDescriptor`, `CapabilityKind`, `DreamOSArtifactKind`, `DreamOSRuntimeContext`, `DreamOSSharedArtifact` |
| `engine/runtime/dreamsurface/dreamsurface.bridge.ts` | `HomeDreamState`, `applyDelta`, `EventBus`, `DreamLedger`, `appendEntry` | `DreamSurfaceBridge`, `createBridge` |
| `engine/runtime/dreamsurface/dreamsurface.delta.ts` | - | `StateDelta`, `computeDelta`, `mergeDelta` |
| `engine/runtime/dreamsurface/index.ts` | `createBridge`, `DreamSurfaceBridge`, `computeDelta`, `mergeDelta`, `StateDelta` | `DreamSurfaceBridge`, `StateDelta`, `computeDelta`, `createBridge`, `mergeDelta` |
| `engine/runtime/dropTargetRegistry.ts` | `DreamDrop`, `DreamDropType`, `RuntimeId` | `DropTarget`, `dropTargetRegistry` |
| `engine/runtime/dualRuntime.ts` | `RUNTIME_REGIONS`, `SURFACE_NAMES`, `SystemPanelId` | `DEFAULT_DUAL_RUNTIME`, `DualRuntimeState`, `RUNTIME_REGIONS`, `RuntimeWorld`, `SURFACE_NAMES`, `TORUS_DOMAINS` |
| `engine/runtime/dualRuntimeBridge.ts` | `invokeMadMaxiSnapshotTransfer`, `events`, `(dynamic import)` | `AckStatus`, `AnyBridgeEmission`, `BridgeEventHandler`, `ChannelEventKey`, `ChannelEventPayload`, `DualRuntimeChannel` |
| `engine/runtime/engin.auth.ts` | - | `EnginSession`, `createSession`, `validateSession` |
| `engine/runtime/engin.eventbus.ts` | - | `EnginEvent`, `EventBus`, `createEventBus` |
| `engine/runtime/engin.ledger.ts` | - | `DreamLedger`, `LedgerEntry`, `appendEntry`, `createLedger` |
| `engine/runtime/engin.renderloop.ts` | - | `RenderFrame`, `RenderLoop`, `createRenderLoop` |
| `engine/runtime/enginWorkflowRegistry.ts` | `bridge` | `ENGIN_KEYS`, `EnginKey`, `WorkflowArtifactType`, `WorkflowDefinition`, `WorkflowStats`, `allWorkflows` |
| `engine/runtime/iEngine.ts` | `createDomainObject`, `isDomainObject`, `DomainObject`, `DomainVisibility`, `JsonObject`, `JsonValue` | `ActorContext`, `AuthorizationDecision`, `CapabilityAction`, `DomainObject`, `DomainVisibility`, `EngineManifest` |
| `engine/runtime/index.ts` | `(default)`, `createClient`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)` | `DreamLedger`, `EnginEvent`, `EnginSession`, `EventBus`, `LedgerEntry`, `RegistryEntry` |
| `engine/runtime/instanceManager.ts` | `RuntimeChannel`, `createLocalChannel`, `createRuntimeChannel`, `RuntimeId`, `zustand`, `(dynamic import)` | `useInstanceManager`, `EnginInstance`, `EnginName`, `InstanceMode`, `buildInstanceKey`, `createInstance` |
| `engine/runtime/isAuthRelatedError.ts` | `toErrorMessage` | `isAuthRelatedError` |
| `engine/runtime/madMaxiSnapshotBridge.ts` | - | `invokeMadMaxiSnapshotTransfer` |
| `engine/runtime/memory.ts` | - | `BAR_SEAM_ATOMICS_INDEX`, `BAR_SEAM_SCALE`, `BAR_Y_SCALE`, `CACHE_LINE`, `ConformMemoryMap`, `ENGIN_OFFSET_AXIS_STATE` |
| `engine/runtime/moduleRegistry.ts` | `bridge`, `isModuleManifest`, `negotiateModuleCompatibility`, `ModuleManifest`, `RuntimeCompatibility`, `RuntimeId` | `useModuleRegistry`, `manifestFromWidget`, `moduleRegistry`, `subscribeRegistryToTransferEvents`, `useModuleRegistry` |
| `engine/runtime/offlineQueue.ts` | `toErrorMessage` | `EnqueueOptions`, `OfflineAction`, `OfflineActionStatus`, `OfflineActionType`, `OfflineReplayRequest`, `QueueStatus` |
| `engine/runtime/quantumCircuit.ts` | `QuantumComputeResult`, `QuantumComputeResult` | `QuantumComputeResult`, `runQuantumCircuit` |
| `engine/runtime/runtimeChannel.ts` | `isJsonSerializable` | `RealtimeChannel`, `RealtimeChannelOptions`, `RealtimeClient`, `RuntimeChannel`, `RuntimeChannelEvent`, `RuntimeChannelOptions` |
| `engine/runtime/runtimeContainer.ts` | `createCoherenceCapacity`, `createCoherenceReport`, `createRuntimeLoad`, `CoherenceCapacity`, `RuntimeCoherenceReport`, `RuntimeLoad` | `RuntimeContainer`, `RuntimeContainerOptions`, `RuntimeStrategy` |
| `engine/runtime/seamClipboard.ts` | `RuntimeRegion`, `dreamOSBus`, `bridge`, `ENGIN_KEYS`, `findWorkflows`, `EnginKey` | `SeamClipboardMimeType`, `SeamClipboardPayload`, `seamClipboard` |
| `engine/runtime/sharedResourcePool.ts` | - | `acquireSharedResource`, `releaseSharedResource` |
| `engine/runtime/snapshotFingerprint.ts` | `TelemetrySnapshot` | `FingerprintCache`, `FingerprintCacheEntry`, `createFingerprintCache`, `fingerprintSnapshot`, `snapshotsAreEquivalent` |
| `engine/runtime/superciliousPlatformRuntime.ts` | `createRuntimeObject`, `EngineManifest`, `IntentPacket`, `JsonObject`, `JsonValue`, `RuntimeRuleSet` | `COMPETING_PLATFORMS`, `CapabilityVector`, `CompetingPlatform`, `DreamEnginSuperiorityState`, `PlatformCapabilityProfile`, `SUPERCILIOUS_CAPABILITIES` |
| `engine/runtime/swapManager.ts` | - | `SwapDomain`, `clearSwap`, `getAllSwapStates`, `getSwap`, `resetAllSwaps`, `setSwap` |
| `engine/runtime/useDragSurface.ts` | `DreamDrop`, `DreamDropType`, `coerceDataTransfer`, `dropTargetRegistry`, `RuntimeId`, `react` | `useDragSurface`, `UseDragSurfaceOptions`, `UseDragSurfaceResult`, `useDragSurface` |
| `engine/runtime/useDualRuntime.ts` | `react`, `bridge`, `BridgeEventHandler`, `ChannelEventKey`, `ChannelEventPayload`, `DualRuntimeChannel` | `useDualRuntime`, `BridgeEventHandler`, `ChannelEventKey`, `ChannelEventPayload`, `DualRuntimeChannel`, `PeerState` |
| `engine/runtime/useDualRuntimePersistence.ts` | `react`, `DEFAULT_DUAL_RUNTIME`, `makeHomeActiveTop`, `setRuntimeWorld`, `swapDominantRuntime`, `DualRuntimeState` | `useDualRuntimePersistence`, `UseDualRuntimePersistenceReturn`, `useDualRuntimePersistence` |

_Trimmed to first 80 file edges for this feature._

## Pages

- `app/dreamdmbar/dreamspace/page.tsx`
- `app/dreamdmbar/dualruntime/page.tsx`
- `app/dreamdmbar/homedream/page.tsx`
- `app/dreamdmbar/page.tsx`
- `app/homedream/page.tsx`

## API Routes

- `app/api/dreams/feed/route.ts`
- `app/api/dreams/instances/route.ts`
- `app/api/dreams/transfer/route.ts`
- `app/api/feed/route.ts`
- `app/api/home-layout/route.ts`

## Code Files

### `app/dreamdmbar/`

- `app/dreamdmbar/layout.tsx`
- `app/dreamdmbar/page.tsx`

### `app/dreamdmbar/_components/`

- `app/dreamdmbar/_components/DreamBarDataBridge.tsx`
- `app/dreamdmbar/_components/DreamSpaceRegion.tsx`
- `app/dreamdmbar/_components/DreamWidgetGrid.tsx`
- `app/dreamdmbar/_components/HomeDreamRegion.tsx`
- `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts`
- `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts`
- `app/dreamdmbar/_components/dreamr/api/feedHandler.ts`
- `app/dreamdmbar/_components/dreamr/api/route.ts`
- `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx`
- `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx`
- `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`

### `app/dreamdmbar/dreamspace/`

- `app/dreamdmbar/dreamspace/page.tsx`

### `app/dreamdmbar/dualruntime/`

- `app/dreamdmbar/dualruntime/page.tsx`

### `app/dreamdmbar/homedream/`

- `app/dreamdmbar/homedream/page.tsx`

### `app/homedream/`

- `app/homedream/page.tsx`

### `components/home/`

- `components/home/dream.ActiveModuleSurface.tsx`
- `components/home/dream.DaydreamPulseStrip.tsx`
- `components/home/dream.FlagshipEnginesStrip.tsx`
- `components/home/dream.NeuralSeamCanvas.tsx`
- `components/home/dream.ZoomablePane.tsx`
- `components/home/dream.bar.GlobalDreamBar.tsx`
- `components/home/dream.bar.PersistentDreamBar.tsx`
- `components/home/dream.widget.DreamWidget.tsx`

### `components/runtime/`

- `components/runtime/dream.DualRuntimeContainer.tsx`
- `components/runtime/dream.RuntimeView.tsx`
- `components/runtime/dream.shell.RuntimeShell.tsx`

### `dreamdmbar/`

- `dreamdmbar/dream.GlowingLight.tsx`
- `dreamdmbar/dream.PhaseTrail.tsx`
- `dreamdmbar/dreamsurface.dreamdmbar.tsx`

### `dreamdmbar/hooks/`

- `dreamdmbar/hooks/useDreamBarContext.ts`
- `dreamdmbar/hooks/useDreamDMConversations.ts`
- `dreamdmbar/hooks/useDreamDMDraft.ts`
- `dreamdmbar/hooks/useDreamDMMessages.ts`
- `dreamdmbar/hooks/useDreamSearch.ts`
- `dreamdmbar/hooks/useMessagingCore.ts`
- `dreamdmbar/hooks/useModuleBarIntent.ts`
- `dreamdmbar/hooks/useNotifications.ts`

### `dreamdmbar/notifications/`

- `dreamdmbar/notifications/notificationHelpers.ts`
- `dreamdmbar/notifications/useNotifications.ts`

### `dreamdmbar/runtime/`

- `dreamdmbar/runtime/DreamSystemContext.tsx`
- `dreamdmbar/runtime/barInteractions.ts`
- `dreamdmbar/runtime/bridgeSeamFlow.ts`

### `engine/generated/`

- `engine/generated/dreamdmbar.ts`

### `engine/runtime/`

- `engine/runtime/EnginDispatcher.ts`
- `engine/runtime/apperception.ts`
- `engine/runtime/channelMetrics.ts`
- `engine/runtime/coercionTable.ts`
- `engine/runtime/dreamOSBus.ts`
- `engine/runtime/dropTargetRegistry.ts`
- `engine/runtime/dualRuntime.ts`
- `engine/runtime/dualRuntimeBridge.ts`
- `engine/runtime/engin.auth.ts`
- `engine/runtime/engin.eventbus.ts`
- `engine/runtime/engin.ledger.ts`
- `engine/runtime/engin.renderloop.ts`
- `engine/runtime/enginWorkflowRegistry.ts`
- `engine/runtime/iEngine.ts`
- `engine/runtime/index.ts`
- `engine/runtime/instanceManager.ts`
- `engine/runtime/isAuthRelatedError.ts`
- `engine/runtime/madMaxiSnapshotBridge.ts`
- `engine/runtime/memory.ts`
- `engine/runtime/moduleRegistry.ts`
- `engine/runtime/offlineQueue.ts`
- `engine/runtime/quantumCircuit.ts`
- `engine/runtime/runtimeChannel.ts`
- `engine/runtime/runtimeContainer.ts`
- `engine/runtime/seamClipboard.ts`
- `engine/runtime/sharedResourcePool.ts`
- `engine/runtime/snapshotFingerprint.ts`
- `engine/runtime/superciliousPlatformRuntime.ts`
- `engine/runtime/swapManager.ts`
- `engine/runtime/useDragSurface.ts`
- `engine/runtime/useDualRuntime.ts`
- `engine/runtime/useDualRuntimePersistence.ts`
- `engine/runtime/useEnginBridge.ts`
- `engine/runtime/useEnginCoopSync.ts`
- `engine/runtime/useSharedEnginChannel.ts`

### `engine/runtime/dreamsurface/`

- `engine/runtime/dreamsurface/dreamsurface.bridge.ts`
- `engine/runtime/dreamsurface/dreamsurface.delta.ts`
- `engine/runtime/dreamsurface/index.ts`

### `src/engin/generated/`

- `src/engin/generated/dreamdmbar.ts`

## Types

_No type files for this feature._

## Styles

_No style files for this feature._

## Capability Flags

**Dual Runtime** (29 files) - **Supabase** (9 files) - **Event Bus** (17 files) - **Zustand** (2 files) - **React Context** (2 files) - **Runtime Registry** (9 files)

---

<a name="dreamr"></a>

# DreamR

> DreamR feed, scoring, profiles, swipe behavior, and DreamR APIs.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/api/dreamr/feed/route.ts` | `dreamrFeedHandler` | `/api/dreamr/feed`, `GET` |
| `app/api/dreamr/suggested/route.ts` | `rankFeed`, `scoreDreamRPost`, `ScoredPost`, `filterByCloseFriends`, `loadVisibilityCircle`, `getPrimaryPostMediaUrl` | `/api/dreamr/suggested`, `GET` |
| `app/api/dreamr/tally/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `zod` | `/api/dreamr/tally`, `POST` |
| `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts` | `slog`, `TORRIDITY_LEDGER_CONFIG` | `InteractionSignal`, `SwipePathScore`, `TouchPoint`, `isLikelyBot`, `isSwipeBot`, `scoreBotLikelihood` |
| `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts` | `calculateRank`, `derivePostMassMeta`, `getPostMass` | `DREAMR_REASONS`, `DREAMR_WEIGHTS`, `DreamRSignals`, `ScoredPost`, `computeViewVelocity`, `dominantSignal` |
| `app/dreamdmbar/_components/dreamr/api/feedHandler.ts` | `filterByCloseFriends`, `loadVisibilityCircle`, `deriveNextCursor`, `parseFeedParams`, `getPrimaryPostMediaUrl`, `PostMediaShape` | `dreamrFeedHandler` |
| `app/dreamdmbar/_components/dreamr/api/route.ts` | `dreamrFeedHandler` | `GET` |
| `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx` | `bridge`, `react` | `dream.DreamRCore.tsx`, `(default)` |
| `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx` | `Point`, `analyzeSwipe`, `tallyView`, `enginBridge`, `react`, `react` | `dream.DreamRFeed.tsx`, `(default)`, `DREAMR_TOPICS` |
| `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx` | `(default)`, `(default)`, `(default)`, `FeedPost`, `uploadBlobToLedgerStorage`, `createClient` | `dreamsurface.dreamr.tsx`, `(default)` |
| `app/dreamr/page.tsx` | `(default)`, `(default)`, `isDevBypassActive`, `safeGetUser`, `createServerClient`, `lucide-react` | `/dreamr`, `page.tsx`, `(default)`, `metadata` |
| `components/dreamr/dream.CloseFriendsSettings.tsx` | `lucide-react`, `next/image`, `react` | `dream.CloseFriendsSettings.tsx`, `(default)` |
| `components/dreamr/dream.panel.DreamRChannelPanel.tsx` | `FeedPost`, `UnifiedFeedItem`, `lucide-react`, `next/image`, `react` | `dream.panel.DreamRChannelPanel.tsx`, `(default)` |
| `components/dreamr/dream.panel.DreamRCreatorPanel.tsx` | `FeedPost`, `lucide-react`, `next/image`, `next/link`, `react` | `dream.panel.DreamRCreatorPanel.tsx`, `(default)` |
| `dreamr/activity/aqs.ts` | `createClient`, `UserMetrics` | `calculateAQS`, `calculateRealShitRate`, `formatAQS`, `formatRealShitRate`, `getAQS`, `getAQSLeaderboard` |
| `dreamr/activity/boogieActivityPolicy.ts` | `PolicyCategory`, `PolicyCategoryValue` | `ActivityFeedTreatment`, `BoogieActivitySignals`, `detectActivityFraudSignals`, `resolveActivityFeedTreatment`, `shouldExcludeFromFeed` |
| `dreamr/activity/revenueSplit.ts` | - | `ACTIVITY_REVENUE_SPLIT`, `ActivityRevenueSplit`, `calculateActivityRevenueSplit`, `validateActivityRevenueSplit` |
| `dreamr/activity/scoring.ts` | `ActivityTier`, `INNOVATION_BONUS`, `TIER_MULTIPLIERS`, `VERIFICATION_STRENGTH`, `VerificationMethod` | `calculateActivityPoints`, `calculateDecayDate`, `calculateVisibilityBoost`, `getInnovationBonus`, `getTierDescription`, `getTierDisplayName` |
| `dreamr/activity/skipCredits.ts` | `AdType`, `SKIP_CREDIT_REWARDS` | `MIN_WATCHED_PERCENT_FOR_CREDIT`, `SKIP_CREDIT_SPEND_PER_AD`, `addSkipCredits`, `calculateSkipCreditsEarned`, `canSpendSkipCredit`, `spendSkipCredit` |
| `dreamr/activity/types.ts` | - | `ActivityTier`, `ActivityVerification`, `AdView`, `CPV_PRICING`, `EarnSkipCreditsRequest`, `EarnSkipCreditsResponse` |
| `dreamr/activity/visibility-score.ts` | `createClient`, `ActivityTier` | `calculateVisibilityScore`, `calculateVisibilityScores`, `estimateVisibilityScore`, `getVisibilityRankedFeed`, `shouldPromotePost`, `sortByVisibilityScore` |
| `dreamr/bot-detection/detector.ts` | `coarseGrainInvariance`, `crossSwipeSimilarity`, `deviationEntropy`, `perpendicularDeviation`, `velocityVarianceJerk`, `Path` | `BotDetector`, `BotScore`, `SwipeRecord` |
| `dreamr/bot-detection/index.ts` | `isBotSession`, `BotSessionResult`, `SwipeRecord`, `analyzeSwipe`, `isBotSession`, `tallyView` | `BOT_MAX_DEVIATION_PX`, `BOT_MAX_ENTROPY`, `BOT_MAX_SLOG_VEL_VAR`, `BOT_MIN_COARSE_GRAIN_DIFF`, `BOT_MIN_CROSS_SIMILARITY`, `BotSessionResult` |
| `dreamr/bot-detection/swipe-physics.ts` | - | `Path`, `PathPoint`, `VelocityStats`, `coarseGrainInvariance`, `crossSwipeSimilarity`, `deviationEntropy` |
| `dreamr/bot-detection/view-tally.ts` | - | `VIEW_TALLY_DURATION_MS`, `ViewTallyTimer`, `ViewTallyTracker`, `createViewTallyTimer` |
| `dreamr/botDetection.ts` | `slog`, `slogEntropy`, `slogVariance` | `BotSessionResult`, `Point`, `SwipeAnalysis`, `SwipeRecord`, `ViewTally`, `analyzeSwipe` |
| `dreamr/components/dreamrfeed.tsx` | `(default)`, `(default)`, `useDreamSystem`, `canRecordDreamRView`, `contentTypePreferenceKey`, `emptyDreamRSwipePreferences` | `dreamrfeed.tsx`, `(default)`, `DREAMR_TOPICS` |
| `dreamr/feed/feedTopics.ts` | - | `ALL_TOPICS`, `DEFAULT_TOPIC_IDS`, `FEED_TOPICS_KEY`, `FeedTopic`, `loadActiveTopicIds`, `topicIdsToQueries` |
| `dreamr/feed/hashtags.ts` | - | `Hashtag`, `MAX_TAGS_PER_POST`, `MAX_TAG_LENGTH`, `TrendingTag`, `calculateTrending`, `extractHashtags` |
| `dreamr/feed/useLiveFeed.ts` | `RealtimePostgresInsertPayload`, `getPrimaryPostMediaUrl`, `createClient`, `getOfflineRecord`, `putOfflineRecord`, `react` | `useLiveFeed`, `FeedPost`, `UseLiveFeedReturn`, `useLiveFeed` |
| `dreamr/feed/useYouTubeLiveFeed.ts` | `ALL_TOPICS`, `DEFAULT_TOPIC_IDS`, `loadActiveTopicIds`, `topicIdsToQueries`, `FeedPost`, `UnifiedFeedItem` | `useYouTubeLiveFeed`, `UseYouTubeLiveFeedReturn`, `useYouTubeLiveFeed` |
| `dreamr/feeds/embedFeedLoader.ts` | `server-only`, `node:fs`, `node:path` | `EmbedFeed`, `EmbedFeedAlgorithm`, `EmbedFeedItem`, `loadEmbedFeed`, `loadEmbedFeedByProvider` |
| `dreamr/runtime/closeFriendsVisibility.ts` | `SupabaseClient`, `(dynamic import)` | `VisibilityCandidate`, `fetchCloseFriendsCircle`, `filterByCloseFriends`, `loadVisibilityCircle` |
| `dreamr/runtime/feedCursor.ts` | - | `FeedPaginationParams`, `MAX_SEEN_IDS`, `deriveNextCursor`, `parseFeedParams` |
| `dreamr/runtime/socialHumanityScore.ts` | `createClient`, `@supabase/supabase-js` | `HumanityScore`, `SocialHumanityInput`, `computeSocialHumanityScore` |
| `dreamr/runtime/swipeCalibration.ts` | - | `CalibrationProfile`, `CalibrationSample`, `calibrateDevice`, `getActiveProfile`, `resetCalibration`, `setActiveProfile` |
| `dreamr/runtime/swipePersonalization.ts` | - | `CREATOR_PREFERENCE_WEIGHT`, `DreamRSwipeIntent`, `DreamRSwipePost`, `DreamRSwipePreferenceSets`, `DreamRViewIntent`, `LONGFORM_CONTENT_THRESHOLD` |
| `dreamr/runtime/torridityLedger.ts` | `getActiveProfile`, `CalibrationProfile` | `HumanityPath`, `OriginalityMeta`, `PostMassMeta`, `SwipeReleaseResult`, `SwipeReleaseSample`, `TORRIDITY_LEDGER_CONFIG` |
| `dreamr/social-feed.ts` | `rss-parser` | `SocialFeedItem`, `SocialSource`, `extractFirstImage`, `fetchSocialFeed`, `stripHtml` |
| `dreamr/torridity.ts` | `slog` | `ContentItem`, `RankedItem`, `TORRIDITY_A0_PERCEPTION`, `TORRIDITY_DP`, `TORRIDITY_LAMBDA`, `TORRIDITY_N` |
| `dreamr/torridity/constants.ts` | - | `a0Perception`, `deltaP`, `lambda`, `n` |
| `dreamr/torridity/index.ts` | `a0Perception`, `deltaP`, `lambda`, `n`, `contentMass`, `decayFactor` | `ContentItem`, `RankedItem`, `a0Perception`, `contentMass`, `decayFactor`, `deltaP` |
| `dreamr/torridity/physics.ts` | `a0Perception`, `deltaP`, `n` | `ContentItem`, `RankedItem`, `contentMass`, `decayFactor`, `mu`, `rankFeed` |
| `engine/generated/dreamr.ts` | - | `DreamrMap`, `dreamr` |
| `engins/gameengin/dreamr-loader.ts` | `CARTRIDGE_MAGIC`, `validateManifest`, `CartridgeManifest` | `DreamrCartridgeArchive`, `DreamrFileEntry`, `loadDreamrCartridgeFromResponse`, `parseDreamrArchive` |
| `src/engin/generated/dreamr.ts` | - | `DreamrMap`, `dreamr` |

## Pages

- `app/dreamr/page.tsx`

## API Routes

- `app/api/dreamr/feed/route.ts`
- `app/api/dreamr/suggested/route.ts`
- `app/api/dreamr/tally/route.ts`

## Code Files

### `app/api/dreamr/`

- `app/api/dreamr/feed/route.ts`
- `app/api/dreamr/suggested/route.ts`
- `app/api/dreamr/tally/route.ts`

### `app/dreamdmbar/_components/`

- `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts`
- `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts`
- `app/dreamdmbar/_components/dreamr/api/feedHandler.ts`
- `app/dreamdmbar/_components/dreamr/api/route.ts`
- `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx`
- `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx`
- `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`

### `app/dreamr/`

- `app/dreamr/page.tsx`

### `components/dreamr/`

- `components/dreamr/dream.CloseFriendsSettings.tsx`
- `components/dreamr/dream.panel.DreamRChannelPanel.tsx`
- `components/dreamr/dream.panel.DreamRCreatorPanel.tsx`

### `dreamr/`

- `dreamr/botDetection.ts`
- `dreamr/social-feed.ts`
- `dreamr/torridity.ts`

### `dreamr/activity/`

- `dreamr/activity/aqs.ts`
- `dreamr/activity/boogieActivityPolicy.ts`
- `dreamr/activity/revenueSplit.ts`
- `dreamr/activity/scoring.ts`
- `dreamr/activity/skipCredits.ts`
- `dreamr/activity/types.ts`
- `dreamr/activity/visibility-score.ts`

### `dreamr/bot-detection/`

- `dreamr/bot-detection/detector.ts`
- `dreamr/bot-detection/index.ts`
- `dreamr/bot-detection/swipe-physics.ts`
- `dreamr/bot-detection/view-tally.ts`

### `dreamr/components/`

- `dreamr/components/dreamrfeed.tsx`

### `dreamr/feed/`

- `dreamr/feed/feedTopics.ts`
- `dreamr/feed/hashtags.ts`
- `dreamr/feed/useLiveFeed.ts`
- `dreamr/feed/useYouTubeLiveFeed.ts`

### `dreamr/feeds/`

- `dreamr/feeds/embedFeedLoader.ts`

### `dreamr/runtime/`

- `dreamr/runtime/closeFriendsVisibility.ts`
- `dreamr/runtime/feedCursor.ts`
- `dreamr/runtime/socialHumanityScore.ts`
- `dreamr/runtime/swipeCalibration.ts`
- `dreamr/runtime/swipePersonalization.ts`
- `dreamr/runtime/torridityLedger.ts`

### `dreamr/torridity/`

- `dreamr/torridity/constants.ts`
- `dreamr/torridity/index.ts`
- `dreamr/torridity/physics.ts`

### `engine/generated/`

- `engine/generated/dreamr.ts`

### `engins/gameengin/`

- `engins/gameengin/dreamr-loader.ts`

### `src/engin/generated/`

- `src/engin/generated/dreamr.ts`

## Types

_No type files for this feature._

## Styles

_No style files for this feature._

## Capability Flags

**Dual Runtime** (2 files) - **Supabase** (7 files) - **Event Bus** (2 files)

---

<a name="contentengin"></a>

# ContentEngin / CreateEngin

> ContentEngin asset workspace, CreateEngin, viewport, media and export behavior.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/daydream/create/engin/page.tsx` | `next/navigation`, `next/server` | `/daydream/create/engin`, `page.tsx`, `(default)` |
| `app/daydream/create/page.tsx` | `(default)`, `(default)`, `DaydreamWidget`, `(default)`, `(default)`, `isDevBypassActive` | `/daydream/create`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/create/calendar/page.tsx` | `(default)`, `isDevBypassActive`, `safeGetUser`, `createServerClient`, `next/navigation`, `next/server` | `/engines/create/calendar`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/create/editor/page.tsx` | `(default)`, `isDevBypassActive`, `safeGetUser`, `createServerClient`, `next/navigation`, `next/server` | `/engines/create/editor`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/create/layout.tsx` | `react` | `layout.tsx`, `(default)`, `metadata` |
| `app/engines/create/page.tsx` | `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/create`, `page.tsx`, `(default)` |
| `app/engines/create/queue/page.tsx` | `(default)`, `isDevBypassActive`, `safeGetUser`, `createServerClient`, `next/navigation`, `next/server` | `/engines/create/queue`, `page.tsx`, `(default)`, `metadata` |
| `components/engines/create/dream.CreateEnginApp.tsx` | `makeEnginApp`, `(default)` | `(default)` |
| `components/engines/create/index.ts` | `default`, `default`, `default`, `default` | `CalendarPanel`, `CreateEnginApp`, `EditorPanel`, `QueuePanel` |
| `components/engines/create/panels/dream.panel.CalendarPanel.tsx` | `lucide-react`, `react` | `dream.panel.CalendarPanel.tsx`, `(default)` |
| `components/engines/create/panels/dream.panel.EditorPanel.tsx` | `lucide-react`, `react` | `dream.panel.EditorPanel.tsx`, `(default)` |
| `components/engines/create/panels/dream.panel.QueuePanel.tsx` | `lucide-react`, `react` | `dream.panel.QueuePanel.tsx`, `(default)` |
| `engins/contentengin/AssetViewport.tsx` | `react`, `computeBounds`, `CameraState`, `RigBendPoint`, `Mesh`, `Vec3` | `AssetViewport.tsx`, `(default)` |
| `engins/contentengin/ImplicitAssetWorkspace.tsx` | `(default)`, `exportOBJ`, `RenderStage`, `createInlineRenderIntent`, `useImplicitAssetWorkspace`, `react` | `ImplicitAssetWorkspace.tsx`, `(default)` |
| `engins/contentengin/assetTypes.ts` | - | `AnimationClipDef`, `BoneDef`, `CONTENTENGIN_VERSION`, `CollisionBlock`, `CollisionShape`, `CollisionShapeKind` |
| `engins/contentengin/assets/assetOptimizer.ts` | `storeOriginal` | `AssetUploadContext`, `OptimisationQuality`, `OptimisationResult`, `OptimiseOptions`, `optimiseAsset`, `registryTagsForContext` |
| `engins/contentengin/assets/indexedDBStore.ts` | - | `OriginalRecord`, `SentinelEntry`, `StorageStats`, `checkSentinels`, `cleanupExpiredOriginals`, `deleteOriginal` |
| `engins/contentengin/assets/localAssetLibrary.ts` | `getOriginal`, `storeOriginal`, `OriginalRecord` | `LocalContentAssetRecord`, `getLocalContentAssetGlb`, `getLocalContentAssetObjSource`, `listLocalContentAssets`, `saveLocalContentAsset` |
| `engins/contentengin/builders/geometryBuilder.ts` | `PartNode`, `Vec3`, `flattenParts` | `MeshGeometry`, `buildGeometry` |
| `engins/contentengin/builders/meshBuilder.ts` | `createBoxSDF`, `createCapsuleSDF`, `createSphereSDF`, `createTorusSDF`, `meshToSnapshot`, `runIsoSurfaceJob` | `buildImplicitContentMesh`, `buildRegionFitContentMesh`, `computeMeshMetrics`, `sdfFromAlgebraicFit` |
| `engins/contentengin/builders/modifiers.ts` | - | `ModifierKind`, `ModifierSpec`, `applyModifierMetadata` |
| `engins/contentengin/builders/primitiveBuilder.ts` | `PartNode`, `PrimitiveKind`, `Vec3`, `identityTransform`, `vec3` | `MeshStats`, `createPart`, `flattenParts`, `primitiveStats`, `resetPartIds` |
| `engins/contentengin/builders/textureBuilder.ts` | `MaterialDef` | `assignProceduralTextureNames` |
| `engins/contentengin/builders/uvGenerator.ts` | `PartNode` | `assignProceduralUv` |
| `engins/contentengin/cli.ts` | `fs/promises`, `path`, `buildAsset`, `writeAssetBundle`, `zipDirectory`, `analyzeImageBytes` | `cli.ts` |
| `engins/contentengin/composite/compositor.ts` | - | `BlendMode`, `CompGraph`, `CompNode`, `NodeParam`, `NodeType`, `addNode` |
| `engins/contentengin/composite/fxSimulation.ts` | - | `FX_PRESETS`, `FxCategory`, `FxParam`, `FxPreset`, `FxSimulation`, `allCategories` |
| `engins/contentengin/composite/matchmover.ts` | - | `CameraFrame`, `CameraTrack`, `Homography`, `MotionEstimate`, `TrackPoint`, `TrackSample` |
| `engins/contentengin/composite/motionCapture.ts` | - | `ClipSummary`, `FramePose`, `Joint`, `JointTransform`, `MocapClip`, `clipSummary` |
| `engins/contentengin/composite/rotoscope.ts` | - | `BezierPoint`, `InterpolatedShape`, `RotoLayer`, `RotoProject`, `RotoShape`, `addLayer` |
| `engins/contentengin/content/generativeFill.ts` | - | `DominantColor`, `GenerativeFillRequest`, `GenerativeFillResult`, `ImageAnalysis`, `analyzeImageColors`, `createMaskDataUrl` |
| `engins/contentengin/content/publishIntent.ts` | - | `PublishIntentInput`, `PublishToDreamRParams`, `formatPublishError`, `publishToDreamR`, `resolvePublishIntent` |
| `engins/contentengin/content/seoScorer.ts` | - | `SeoReport`, `SeoScoreDimension`, `SeoScoreInput`, `SeoScoreResult`, `generateReport`, `scoreContent` |
| `engins/contentengin/content/transcriptEditor.ts` | - | `SearchResult`, `TimelineCut`, `TranscriptSegment`, `TranscriptWord`, `annotateSearchMatches`, `applyEditsToSegments` |
| `engins/contentengin/content/voiceClone.ts` | - | `ListVoiceProfilesResult`, `TTSRequest`, `TTSResult`, `VoiceCloneRequest`, `VoiceCloneResult`, `VoiceProfile` |
| `engins/contentengin/grammars/animalGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildAnimalParts` |
| `engins/contentengin/grammars/bicycleGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildBicycleParts` |
| `engins/contentengin/grammars/bridgeGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildBridgeParts` |
| `engins/contentengin/grammars/buildingGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildBuildingParts` |
| `engins/contentengin/grammars/creatureGrammar.ts` | `buildAnimalParts` | `buildCreatureParts` |
| `engins/contentengin/grammars/humanoidGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root`, `symmetrical` | `buildHumanoidParts` |
| `engins/contentengin/grammars/propGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildPropParts` |
| `engins/contentengin/grammars/roadGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildRoadParts` |
| `engins/contentengin/grammars/shared.ts` | `PartNode`, `vec3`, `createPart` | `p`, `root`, `symmetrical` |
| `engins/contentengin/grammars/terrainGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildTerrainParts` |
| `engins/contentengin/grammars/treeGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildTreeParts` |
| `engins/contentengin/grammars/vehicleGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildVehicleParts` |
| `engins/contentengin/grammars/waterGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildWaterParts` |
| `engins/contentengin/materials/materialTypes.ts` | `MaterialDef` | `MaterialDef`, `MaterialFamily` |
| `engins/contentengin/materials/paletteExtractor.ts` | - | `extractPalette`, `rgbaToHex` |
| `engins/contentengin/materials/proceduralMaterials.ts` | `MaterialDef` | `defaultMaterials`, `material` |
| `engins/contentengin/media/h265-encoder.ts` | - | `BackendKind`, `CaptureResult`, `EncodedPacket`, `EncoderCapabilities`, `EncoderOptions`, `GameCapture` |
| `engins/contentengin/media/ledger.ts` | `toErrorMessage` | `LedgerBinaryHeader`, `LedgerDbPayload`, `LedgerDensityProfile`, `LedgerUploadResult`, `analyzeLedgerDensity`, `buildLedgerMediaUrl` |
| `engins/contentengin/media/postMedia.ts` | - | `PostMediaShape`, `getPostMediaUrls`, `getPrimaryPostMediaUrl` |
| `engins/contentengin/performancePlan.ts` | `ContentEnginRuntimeProfile` | `ContentEnginPerformancePlan`, `createContentEnginPerformancePlan` |
| `engins/contentengin/photo/colorCluster.ts` | `extractPalette` | `extractPalette` |
| `engins/contentengin/photo/edgeDetector.ts` | - | `buildEdgeMapFromRgba` |
| `engins/contentengin/photo/imageAnalyzer.ts` | `SourceImageAnalysis`, `ShapeRegion`, `rgbaToHex`, `decodePng` | `analyzeImageBytes` |
| `engins/contentengin/photo/photoToRecipe.ts` | `ContentRecipe`, `SourceImageAnalysis`, `detectSemanticAlgebraicRegions` | `photoToRecipe` |
| `engins/contentengin/photo/pngDecoder.ts` | `zlib` | `DecodedPng`, `decodePng` |
| `engins/contentengin/photo/regionDetector.ts` | `ShapeRegion`, `Vec2` | `AlgebraicFitKind`, `AlgebraicRegionFit`, `SemanticPartLabel`, `SemanticShapeRegion`, `detectSemanticAlgebraicRegions`, `fitAlgebraicRegion` |
| `engins/contentengin/pipeline/build.ts` | `ContentAsset`, `ContentAssetCategory`, `CONTENTENGIN_VERSION`, `resetPartIds`, `assignProceduralUv`, `assignProceduralTextureNames` | `buildAsset` |
| `engins/contentengin/pipeline/bundle.ts` | `fs/promises`, `path`, `ContentAsset`, `createGlbBuffer`, `validateAsset`, `makeManifest` | `writeAssetBundle`, `zipDirectory` |
| `engins/contentengin/pipeline/exportGlb.ts` | `ContentAsset`, `MaterialDef`, `buildGeometry` | `GlbInspection`, `createGlbBuffer`, `expectedMaterialIdsForAsset`, `inspectGlb` |
| `engins/contentengin/pipeline/generateCollision.ts` | `CollisionBlock`, `PartNode`, `flattenParts` | `generateCollision` |
| `engins/contentengin/pipeline/generateLods.ts` | `ExportProfile`, `LodDef` | `generateLods` |
| `engins/contentengin/pipeline/paths.ts` | `path` | `safeSegment`, `safeUnder` |
| `engins/contentengin/pipeline/validate.ts` | `ContentAsset`, `ExportProfile`, `ValidationReport`, `computeMeshMetrics`, `expectedMaterialIdsForAsset`, `inspectGlb` | `validateAsset` |
| `engins/contentengin/pipeline/writeManifest.ts` | `ContentAsset`, `ContentAssetObject` | `makeManifest`, `wrapAsset` |
| `engins/contentengin/recipes/recipeResolver.ts` | `ContentRecipe`, `ExportProfile`, `SUPPORTED_ASSET_TYPES` | `normalizeAssetType`, `resolveRecipe` |
| `engins/contentengin/recipes/recipeTypes.ts` | `ContentRecipe`, `ExportProfile` | `ContentRecipe`, `ExportProfile`, `SUPPORTED_ASSET_TYPES`, `SupportedAssetType` |
| `engins/contentengin/recipes/seededRandom.ts` | - | `pick`, `seededRandom` |
| `engins/contentengin/rigging/fitArmature.ts` | `BoneDef`, `SkeletonDef`, `vec3`, `RigStandard` | `createSkeleton` |
| `engins/contentengin/rigging/index.ts` | `child_process`, `fs/promises`, `path`, `util`, `createSkeleton`, `RiggingRequest` | `RigStandard`, `RiggingRequest`, `createSkeleton`, `runRiggingPipeline` |
| `engins/contentengin/rigging/landmarks.ts` | `PartNode`, `Vec3`, `vec3` | `estimateLandmarks` |
| `engins/contentengin/rigging/rigTypes.ts` | - | `RigStandard`, `RiggingRequest` |
| `engins/contentengin/rigging/rigValidator.ts` | `SkeletonDef` | `validateSkeleton` |
| `engins/contentengin/runtimeProfile.ts` | `ExportProfile`, `enabledUpgradeIds`, `ContentEnginUpgradeId` | `ContentEnginRuntimeProfile`, `ContentEnginRuntimeTier`, `createContentEnginRuntimeProfile` |
| `engins/contentengin/shaders/shaderRegistry.ts` | `ShaderDef` | `SHADERS`, `getShader` |
| `engins/contentengin/shaders/shaderTypes.ts` | `ShaderDef` | `ShaderDef` |

_Trimmed to first 80 file edges for this feature._

## Pages

- `app/daydream/create/engin/page.tsx`
- `app/daydream/create/page.tsx`
- `app/engines/create/calendar/page.tsx`
- `app/engines/create/editor/page.tsx`
- `app/engines/create/page.tsx`
- `app/engines/create/queue/page.tsx`

## API Routes

- `app/api/content/generative-fill/route.ts`
- `app/api/content/intelligence/route.ts`
- `app/api/content/transcribe/route.ts`
- `app/api/content/voice-clone/route.ts`
- `app/api/contentengin/assets/[assetId]/export/gameengin/route.ts`
- `app/api/contentengin/assets/[assetId]/route.ts`
- `app/api/contentengin/jobs/[jobId]/route.ts`
- `app/api/contentengin/jobs/route.ts`
- `app/api/contentengin/upload/route.ts`
- `app/api/drafts/[id]/route.ts`
- `app/api/drafts/route.ts`
- `app/api/scheduled-posts/route.ts`

## Code Files

### `app/daydream/create/`

- `app/daydream/create/engin/page.tsx`
- `app/daydream/create/page.tsx`

### `app/engines/create/`

- `app/engines/create/calendar/page.tsx`
- `app/engines/create/editor/page.tsx`
- `app/engines/create/layout.tsx`
- `app/engines/create/page.tsx`
- `app/engines/create/queue/page.tsx`

### `components/engines/create/`

- `components/engines/create/dream.CreateEnginApp.tsx`
- `components/engines/create/index.ts`
- `components/engines/create/panels/dream.panel.CalendarPanel.tsx`
- `components/engines/create/panels/dream.panel.EditorPanel.tsx`
- `components/engines/create/panels/dream.panel.QueuePanel.tsx`

### `engins/`

- `engins/engin.ContentEngin.tsx`

### `engins/contentengin/`

- `engins/contentengin/AssetViewport.tsx`
- `engins/contentengin/ImplicitAssetWorkspace.tsx`
- `engins/contentengin/assetTypes.ts`
- `engins/contentengin/cli.ts`
- `engins/contentengin/performancePlan.ts`
- `engins/contentengin/runtimeProfile.ts`
- `engins/contentengin/upgradeMatrix.ts`
- `engins/contentengin/useImplicitAssetWorkspace.ts`

### `engins/contentengin/assets/`

- `engins/contentengin/assets/assetOptimizer.ts`
- `engins/contentengin/assets/indexedDBStore.ts`
- `engins/contentengin/assets/localAssetLibrary.ts`

### `engins/contentengin/builders/`

- `engins/contentengin/builders/geometryBuilder.ts`
- `engins/contentengin/builders/meshBuilder.ts`
- `engins/contentengin/builders/modifiers.ts`
- `engins/contentengin/builders/primitiveBuilder.ts`
- `engins/contentengin/builders/textureBuilder.ts`
- `engins/contentengin/builders/uvGenerator.ts`

### `engins/contentengin/composite/`

- `engins/contentengin/composite/compositor.ts`
- `engins/contentengin/composite/fxSimulation.ts`
- `engins/contentengin/composite/matchmover.ts`
- `engins/contentengin/composite/motionCapture.ts`
- `engins/contentengin/composite/rotoscope.ts`

### `engins/contentengin/content/`

- `engins/contentengin/content/generativeFill.ts`
- `engins/contentengin/content/publishIntent.ts`
- `engins/contentengin/content/seoScorer.ts`
- `engins/contentengin/content/transcriptEditor.ts`
- `engins/contentengin/content/voiceClone.ts`

### `engins/contentengin/grammars/`

- `engins/contentengin/grammars/animalGrammar.ts`
- `engins/contentengin/grammars/bicycleGrammar.ts`
- `engins/contentengin/grammars/bridgeGrammar.ts`
- `engins/contentengin/grammars/buildingGrammar.ts`
- `engins/contentengin/grammars/creatureGrammar.ts`
- `engins/contentengin/grammars/humanoidGrammar.ts`
- `engins/contentengin/grammars/propGrammar.ts`
- `engins/contentengin/grammars/roadGrammar.ts`
- `engins/contentengin/grammars/shared.ts`
- `engins/contentengin/grammars/terrainGrammar.ts`
- `engins/contentengin/grammars/treeGrammar.ts`
- `engins/contentengin/grammars/vehicleGrammar.ts`
- `engins/contentengin/grammars/waterGrammar.ts`

### `engins/contentengin/materials/`

- `engins/contentengin/materials/materialTypes.ts`
- `engins/contentengin/materials/paletteExtractor.ts`
- `engins/contentengin/materials/proceduralMaterials.ts`

### `engins/contentengin/media/`

- `engins/contentengin/media/h265-encoder.ts`
- `engins/contentengin/media/ledger.ts`
- `engins/contentengin/media/postMedia.ts`

### `engins/contentengin/photo/`

- `engins/contentengin/photo/colorCluster.ts`
- `engins/contentengin/photo/edgeDetector.ts`
- `engins/contentengin/photo/imageAnalyzer.ts`
- `engins/contentengin/photo/photoToRecipe.ts`
- `engins/contentengin/photo/pngDecoder.ts`
- `engins/contentengin/photo/regionDetector.ts`

### `engins/contentengin/pipeline/`

- `engins/contentengin/pipeline/build.ts`
- `engins/contentengin/pipeline/bundle.ts`
- `engins/contentengin/pipeline/exportGlb.ts`
- `engins/contentengin/pipeline/generateCollision.ts`
- `engins/contentengin/pipeline/generateLods.ts`
- `engins/contentengin/pipeline/paths.ts`
- `engins/contentengin/pipeline/validate.ts`
- `engins/contentengin/pipeline/writeManifest.ts`

### `engins/contentengin/recipes/`

- `engins/contentengin/recipes/recipeResolver.ts`
- `engins/contentengin/recipes/recipeTypes.ts`
- `engins/contentengin/recipes/seededRandom.ts`

### `engins/contentengin/rigging/`

- `engins/contentengin/rigging/fitArmature.ts`
- `engins/contentengin/rigging/index.ts`
- `engins/contentengin/rigging/landmarks.ts`
- `engins/contentengin/rigging/rigTypes.ts`
- `engins/contentengin/rigging/rigValidator.ts`

### `engins/contentengin/shaders/`

- `engins/contentengin/shaders/shaderRegistry.ts`
- `engins/contentengin/shaders/shaderTypes.ts`

## Types

_No type files for this feature._

## Styles

_No style files for this feature._

## Capability Flags

**Supabase** (1 files)

---

<a name="gameengin"></a>

# GameEngin

> Game runtime, cartridges, remote controls, HUDs, WASM game logic, and scores.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/daydream/games/engin/page.tsx` | `next/navigation`, `next/server` | `/daydream/games/engin`, `page.tsx`, `(default)` |
| `app/daydream/games/page.tsx` | `(default)`, `isDevBypassActive`, `safeGetUser`, `createServerClient`, `lucide-react`, `next/link` | `/daydream/games`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/games/builder/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `buildLoginRedirectPath`, `isDevBypassActive`, `createServerClient` | `/engines/games/builder`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/games/layout.tsx` | `react` | `layout.tsx`, `(default)`, `metadata` |
| `app/engines/games/library/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `buildLoginRedirectPath`, `isDevBypassActive`, `createServerClient` | `/engines/games/library`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/games/page.tsx` | `(default)`, `buildLoginRedirectPath`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation` | `/engines/games`, `page.tsx`, `(default)` |
| `app/engines/games/scores/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `buildLoginRedirectPath`, `isDevBypassActive`, `createServerClient` | `/engines/games/scores`, `page.tsx`, `(default)`, `metadata` |
| `assembly/bus.ts` | - | `QUEUE_SIZE`, `dequeue`, `enqueue`, `reset` |
| `assembly/index.ts` | - | `hashBytesFNV1A`, `processAudioBufferSIMD`, `shapeGlowFieldSIMD`, `tickPhysicsSIMD` |
| `assembly/mad-maxi-player.ts` | - | `getCoyoteTimer`, `getDashTimer`, `getJumpsUsed`, `getMemoryUsage`, `getOnGround`, `getSnapshotSize` |
| `components/gameengin/dream.CartridgeRegistryBootstrap.tsx` | `registerCartridges`, `dreamOSBus`, `react` | `dream.CartridgeRegistryBootstrap.tsx`, `(default)` |
| `components/gameengin/dream.CrashReportModal.tsx` | `react`, `toErrorMessage` | `dream.CrashReportModal.tsx`, `(default)`, `CRASH_REPORT_MAX_BYTES`, `CrashContext`, `CrashReportModalProps` |
| `components/gameengin/dream.cartridge.CartridgeBrowser.tsx` | `CARTRIDGE_MANIFEST`, `getCartridgeCategories`, `CartridgeManifestEntry`, `next/link`, `react` | `dream.cartridge.CartridgeBrowser.tsx`, `(default)`, `CartridgeBrowserProps` |
| `components/gameengin/dream.cartridge.CartridgeErrorBoundary.tsx` | `react`, `toErrorMessage` | `dream.cartridge.CartridgeErrorBoundary.tsx`, `useGlobalCrashListener`, `CartridgeCrashEvent`, `CartridgeErrorBoundary`, `useGlobalCrashListener` |
| `components/gameengin/dream.cartridge.CartridgeLauncher.tsx` | `(default)`, `GameCartridge`, `GravityPreset`, `RuntimeBackendDiagnostics`, `loadCartridgeBundle`, `LoadedCartridgeBundle` | `dream.cartridge.CartridgeLauncher.tsx`, `(default)`, `CartridgeLauncherProps` |
| `components/gameengin/dream.cartridge.FeaturedCartridges.tsx` | `CARTRIDGE_MANIFEST`, `CartridgeManifestEntry`, `next/link` | `dream.cartridge.FeaturedCartridges.tsx`, `(default)`, `FeaturedCartridgesProps` |
| `components/gameengin/input/DualSenseManager.ts` | `@babylonjs/core` | `DualSenseManager`, `DualSenseState` |
| `components/games/_fx/canvasFx.ts` | - | `HitStop`, `ParallaxLayer`, `ParallaxLayers`, `Particle`, `ParticlePool`, `ScreenShake` |
| `components/games/css-modules.d.ts` | - | `(default)` |
| `components/games/dream.AvenueOfMirrors.tsx` | `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `useGameEngineAPI`, `react` | `dream.AvenueOfMirrors.tsx`, `(default)` |
| `components/games/dream.BabylonSideScroller.tsx` | `MADMAXI_ENEMY_KINDS`, `MADMAXI_POWERUP_KINDS`, `MADMAXI_SUPER_SECONDS`, `MADMAXI_SUPER_STREAK`, `default`, `getEnemyKindForIndex` | `MADMAXI_ENEMY_KINDS`, `MADMAXI_POWERUP_KINDS`, `MADMAXI_SUPER_SECONDS`, `MADMAXI_SUPER_STREAK`, `default`, `getEnemyKindForIndex` |
| `components/games/dream.DefuseRitual.tsx` | `useGameAutoStart`, `useSubmitScore`, `react` | `dream.DefuseRitual.tsx`, `(default)` |
| `components/games/dream.EchoArena.tsx` | `DualSenseManager`, `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `useRegisterMobileGameControls`, `createPerformanceBaselineSampler` | `dream.EchoArena.tsx`, `(default)` |
| `components/games/dream.EnginFracture.tsx` | `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `react` | `dream.EnginFracture.tsx`, `(default)` |
| `components/games/dream.GameController.tsx` | `default`, `GameInputAction` | `GameInputAction`, `default` |
| `components/games/dream.GamesHub.tsx` | `getAvatarDataUrl`, `setPlayAsMe`, `GAME_CATALOG`, `GameCatalogEntry`, `GAME_LIBRARY_SELECTION_STORAGE_KEY`, `GAME_LIBRARY_SESSION_STORAGE_KEY` | `dream.GamesHub.tsx`, `(default)`, `GAMES`, `GameDef` |
| `components/games/dream.Glassfall.tsx` | `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `react`, `ParticlePool`, `ScreenShake` | `dream.Glassfall.tsx`, `(default)` |
| `components/games/dream.Leaderboard.tsx` | `lucide-react`, `react` | `dream.Leaderboard.tsx`, `(default)` |
| `components/games/dream.LexiconSolitaire.tsx` | `useGameAutoStart`, `useSubmitScore`, `react` | `dream.LexiconSolitaire.tsx`, `(default)` |
| `components/games/dream.MadMaxiWildfall.tsx` | `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `useGameEngineAPI`, `WILDFALL_HEROES`, `WILDFALL_ZONES` | `dream.MadMaxiWildfall.tsx`, `(default)` |
| `components/games/dream.NeonDrift.tsx` | `DualSenseManager`, `EliteGameEngine`, `AIDirector`, `PostFXManager`, `useGameAutoStart`, `useGamePhase` | `dream.NeonDrift.tsx`, `(default)` |
| `components/games/dream.NiteFlyerSolarHymn.tsx` | `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `react` | `dream.NiteFlyerSolarHymn.tsx`, `(default)` |
| `components/games/dream.NullCathedral.tsx` | `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `react`, `ParticlePool`, `ScreenShake` | `dream.NullCathedral.tsx`, `(default)` |
| `components/games/dream.RecordingControls.tsx` | `GameCapture`, `CaptureResult`, `react` | `dream.RecordingControls.tsx`, `(default)` |
| `components/games/dream.SerpentSiege.tsx` | `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `react`, `ParticlePool`, `ScreenShake` | `dream.SerpentSiege.tsx`, `(default)` |
| `components/games/dream.VoidlineGP.tsx` | `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `react`, `ParticlePool`, `ScreenShake` | `dream.VoidlineGP.tsx`, `(default)` |
| `components/games/dream.hud.GameHUD.tsx` | `(default)`, `MobileHudMode` | `dream.hud.GameHUD.tsx`, `(default)` |
| `components/games/dream.hud.LegacyGameHUD.tsx` | `(default)`, `next/navigation`, `react` | `dream.hud.LegacyGameHUD.tsx`, `(default)` |
| `components/games/dream.hud.MobileGameHUD.tsx` | `(default)`, `emitMobileButton`, `emitMobileLook`, `emitMobileMove`, `fireGameRemoteInput`, `getRemoteActionForMobileButton` | `dream.hud.MobileGameHUD.tsx`, `(default)` |
| `components/games/dream.remote.GameRemote.tsx` | `default`, `GameInputAction` | `GameInputAction`, `default` |
| `components/games/dream.remote.GameRemoteSurface.tsx` | `broadcastGameInput`, `ButtonInteractionManager`, `ControllerButton`, `react` | `dream.remote.GameRemoteSurface.tsx`, `(default)`, `GameInputAction` |
| `components/games/dream.remote.LegacyGameRemote.tsx` | `default`, `GameInputAction` | `GameInputAction`, `default` |
| `components/games/madmaxi/audio.ts` | - | `MadmaxiAudioController`, `MadmaxiAudioCue` |
| `components/games/madmaxi/authoredZonePacks.ts` | `getMadmaxiEnemyCount`, `ZONES`, `CoinDef`, `EnemyDef`, `HazardDef`, `LevelDef` | `getAuthoredStarterLevel`, `isMadmaxiAuthoredLevel` |
| `components/games/madmaxi/config.ts` | `BossMeta`, `MadmaxiEnemyKind`, `MadmaxiPowerUpKind`, `ZoneMeta` | `BOSSES`, `BOSS_ENRAGE_MULTIPLIER`, `BOSS_ENRAGE_THRESHOLD`, `EXTRA_POWERUP_EVERY_N_LEVELS`, `LEVEL_SEED_KEY`, `MADMAXI_ENEMY_KINDS` |
| `components/games/madmaxi/dream.MadmaxiGame.tsx` | `createBabylonEngine`, `useGameAutoStart`, `useSubmitScore`, `useImmersiveGameLayout`, `react`, `react` | `dream.MadmaxiGame.tsx`, `(default)` |
| `components/games/madmaxi/index.ts` | `default`, `MADMAXI_ENEMY_KINDS`, `MADMAXI_POWERUP_KINDS`, `MADMAXI_SUPER_SECONDS`, `MADMAXI_SUPER_STREAK`, `TOTAL_LEVELS` | `MADMAXI_ENEMY_KINDS`, `MADMAXI_POWERUP_KINDS`, `MADMAXI_SUPER_SECONDS`, `MADMAXI_SUPER_STREAK`, `TOTAL_LEVELS`, `ZONES` |
| `components/games/madmaxi/levels.ts` | `getAuthoredStarterLevel`, `isMadmaxiAuthoredLevel`, `EXTRA_POWERUP_EVERY_N_LEVELS`, `LEVEL_SEED_KEY`, `ZONES`, `getBossForLevel` | `getMadmaxiLevelDefinition`, `isMadmaxiAuthoredLevel` |
| `components/games/madmaxi/materials.ts` | `@babylonjs/core` | `DetailMatOpts`, `ScanLineTexture`, `createScanLineTexture`, `getSharedNoiseTexture`, `makeDetailMat` |
| `components/games/madmaxi/types.ts` | - | `BossMeta`, `CoinDef`, `EnemyDef`, `HazardDef`, `LevelDef`, `MadmaxiEnemyKind` |
| `components/games/madmaxi/vfx.ts` | `@babylonjs/core` | `VfxKit`, `VfxTier`, `createMadmaxiVfx` |
| `engins/forgeengin/forge-ngn/assembly.ts` | `PieceManifest`, `getPiece` | `AssemblyValidationError`, `Connection`, `EngineAssembly`, `MAX_PIECES`, `MIN_PIECES`, `PlacedPiece` |
| `engins/gameengin/GameEnginCore.ts` | `QualityTier`, `EliteGameEngine`, `GameEnginRuntime` | `AssetEntry`, `AssetsConfig`, `AudioConfig`, `GameConfig`, `GameEnginCompatibilityReport`, `GameEnginConfigError` |
| `engins/gameengin/GameRuntime.tsx` | `recordEmission`, `dreamOSBus`, `createLocalChannel`, `acquireSharedResource`, `releaseSharedResource`, `react` | `GameRuntime.tsx`, `(default)`, `GameRuntimeCrash`, `GameRuntimeProps` |
| `engins/gameengin/accessibility-ai.ts` | - | `CaptionLine`, `CaptionerConfig`, `ColorVisionAdapter`, `ColorVisionType`, `MotionMetrics`, `MotionPolicy` |
| `engins/gameengin/ai-director.ts` | `@tensorflow/tfjs`, `@tensorflow/tfjs-backend-webgpu` | `AIDirector`, `DirectorState`, `PlayerSignals` |
| `engins/gameengin/ai-npcs.ts` | - | `BrainConfig`, `DialogueLine`, `EmergentDialogue`, `LLMInvoker`, `LLMNPCBrain`, `NPCMemory` |
| `engins/gameengin/assets/BundleCache.ts` | `assertValidBundleManifest`, `bundleWeightBytes`, `GameEnginBundleManifest` | `GameEnginBundleCacheDecision`, `GameEnginBundleCacheOptions`, `planBundleCache` |
| `engins/gameengin/assets/BundleManifest.ts` | `RendererBackendId` | `GameEnginAssetEntry`, `GameEnginAssetKind`, `GameEnginBundleManifest`, `assertValidBundleManifest`, `bundleWeightBytes` |
| `engins/gameengin/backendNegotiator.ts` | `RuntimeBackendDiagnostics`, `RendererBackendId`, `CartridgeManifestEntry`, `decideRuntimeQuality` | `negotiateRendererBackend`, `serverBootstrapDiagnostics` |
| `engins/gameengin/brain-reader.ts` | `node:crypto`, `node:fs`, `node:path` | `ActiveProjectSlot`, `ActiveProjects`, `AgentName`, `AssetRegistryEntry`, `AssignmentLogEntry`, `BRAIN_ROOT` |
| `engins/gameengin/cartridge-manifest.ts` | `zod` | `CARTRIDGE_EXT`, `CARTRIDGE_MAGIC`, `CARTRIDGE_MIME`, `CartridgeManifest`, `CartridgeManifestSchema`, `PermissionSchema` |
| `engins/gameengin/cartridge.ts` | - | `AchievementDefinition`, `AchievementState`, `CartridgeAchievementsAPI`, `CartridgeAssetsAPI`, `CartridgeAudioAPI`, `CartridgeBackendRequirements` |
| `engins/gameengin/cartridgeLoader.ts` | `loadDreamrCartridgeFromResponse`, `parseDreamrArchive`, `DreamrCartridgeArchive`, `DreamrFileEntry` | `DreamrCartridgeArchive`, `DreamrFileEntry`, `loadDreamrCartridgeFromResponse`, `parseDreamrArchive` |
| `engins/gameengin/cartridges/achievementEngine.ts` | `AchievementDefinition`, `AchievementState`, `CartridgeAchievementsAPI` | `AchievementUnlockListener`, `createAchievementsAPI`, `getUnlockedCount`, `purgeCartridgeAchievements` |
| `engins/gameengin/cartridges/apiStubs.ts` | `CartridgeAchievementsAPI`, `CartridgeAssetsAPI`, `CartridgeAudioAPI`, `CartridgeHapticsAPI`, `CartridgeNetworkAPI`, `CartridgeSaveAPI` | `stubAchievementsAPI`, `stubAssetsAPI`, `stubAudioAPI`, `stubHapticsAPI`, `stubNetworkAPI`, `stubSaveAPI` |
| `engins/gameengin/cartridges/index.ts` | `CARTRIDGE_MANIFEST`, `getCartridgeCategories`, `getCartridgeManifest`, `CartridgeManifestEntry`, `CartridgeRenderMode`, `CARTRIDGE_LOADERS` | `CARTRIDGE_LOADERS`, `CARTRIDGE_MANIFEST`, `CartridgeLoader`, `CartridgeManifestEntry`, `CartridgeRenderMode`, `assertCartridgeLoadersReady` |
| `engins/gameengin/cartridges/loaders.ts` | `GameCartridge`, `CartridgeManifestEntry`, `CARTRIDGE_MANIFEST`, `getCartridgeManifest`, `defineReactCartridgeLoader`, `toErrorMessage` | `CARTRIDGE_LOADERS`, `CartridgeLoader`, `LoadedCartridgeBundle`, `assertCartridgeLoadersReady`, `getCartridgeIds`, `getMissingCartridgeLoaders` |
| `engins/gameengin/cartridges/manifest.ts` | `CartridgeInputProfile`, `CartridgeOrientationPreference`, `CartridgeQualityDefaults`, `CartridgeRendererFamily`, `CartridgeWarmupPlan`, `CartridgeWorkerEntry` | `CARTRIDGE_MANIFEST`, `CartridgeAssetPolicy`, `CartridgeLaunchMetadata`, `CartridgeManifestEntry`, `CartridgeRenderMode`, `getCartridgeCategories` |
| `engins/gameengin/cartridges/reactCartridge.ts` | `GameCartridge`, `GameEngineAPI`, `getCartridgeManifest`, `CartridgeManifestEntry`, `react`, `react-dom/client` | `useGameEngineAPI`, `GameEngineAPIContext`, `createReactCartridgeHost`, `createReactGameCartridge`, `defineReactCartridgeLoader`, `useGameEngineAPI` |
| `engins/gameengin/cartridges/saveState.ts` | `CartridgeSaveAPI`, `CartridgeSaveSlot` | `createSaveAPI`, `getSaveStorageBytes`, `purgeCartridgeSaves` |
| `engins/gameengin/cloud-compute.ts` | - | `EdgeOffloadRouter`, `OffloadCandidate`, `OffloadDecision`, `RemoteRenderConfig`, `RemoteRenderHandoff`, `ResultVerifier` |
| `engins/gameengin/config/demoGameConfig.ts` | `GameConfig` | `(default)` |
| `engins/gameengin/controls/control-mappings.ts` | `createClient`, `safeGetUser` | `ControlMapping`, `mapJoystickToAsset` |
| `engins/gameengin/core.ts` | `@babylonjs/core`, `AdvancedPhysicsWorld`, `AnimationStateMachine`, `AssetStreamManager`, `BehaviorTreeEngine`, `ClientSidePrediction` | `Component`, `ECSWorld`, `EliteGameEngine`, `EntityId`, `FrameCallback`, `FrameTelemetry` |
| `engins/gameengin/dream-engine.ts` | `decodeLedgerStringToUint8Array`, `encodeUint8ArrayToLedgerString`, `createClient`, `safeGetUser`, `toErrorMessage` | `DreamEngine`, `GameAsset`, `GlobalRegistryEntry`, `WasmOutput` |
| `engins/gameengin/dreamr-loader.ts` | `CARTRIDGE_MAGIC`, `validateManifest`, `CartridgeManifest` | `DreamrCartridgeArchive`, `DreamrFileEntry`, `loadDreamrCartridgeFromResponse`, `parseDreamrArchive` |
| `engins/gameengin/executionWiring.ts` | `RealtimeCaptioner`, `MotionReductionAI`, `ColorVisionAdapter`, `AIDirector`, `PlayerSignals`, `EmergentDialogue` | `GameEnginExecutionCrash`, `GameEnginExecutionFrame`, `GameEnginExecutionKernel`, `GameEnginExecutionKernelSnapshot`, `createGameEnginExecutionKernel` |
| `engins/gameengin/gameEnginRuntime.ts` | `createEventBus`, `EventBus`, `resolveFrameBudget`, `GameEnginQualityTier`, `decideRuntimeQuality`, `requestWebGpuDevice` | `DreamGameBackend`, `DreamGameInstance`, `DreamGameManifest`, `GameEnginBackendState`, `GameEnginEvents`, `GameEnginRuntime` |
| `engins/gameengin/games/DualSenseManager.ts` | `react` | `useDualSense`, `DualSenseConfig`, `DualSenseManager`, `DualSenseState`, `useDualSense` |

_Trimmed to first 80 file edges for this feature._

## Pages

- `app/daydream/games/engin/page.tsx`
- `app/daydream/games/page.tsx`
- `app/engines/games/builder/page.tsx`
- `app/engines/games/library/page.tsx`
- `app/engines/games/page.tsx`
- `app/engines/games/scores/page.tsx`

## API Routes

- `app/api/game-scores/route.ts`
- `app/api/gameengin/crash-report/route.ts`

## Code Files

### `app/daydream/games/`

- `app/daydream/games/engin/page.tsx`
- `app/daydream/games/page.tsx`

### `app/engines/games/`

- `app/engines/games/builder/page.tsx`
- `app/engines/games/layout.tsx`
- `app/engines/games/library/page.tsx`
- `app/engines/games/page.tsx`
- `app/engines/games/scores/page.tsx`

### `assembly/`

- `assembly/bus.ts`
- `assembly/index.ts`
- `assembly/mad-maxi-player.ts`

### `components/gameengin/`

- `components/gameengin/dream.CartridgeRegistryBootstrap.tsx`
- `components/gameengin/dream.CrashReportModal.tsx`
- `components/gameengin/dream.cartridge.CartridgeBrowser.tsx`
- `components/gameengin/dream.cartridge.CartridgeErrorBoundary.tsx`
- `components/gameengin/dream.cartridge.CartridgeLauncher.tsx`
- `components/gameengin/dream.cartridge.FeaturedCartridges.tsx`

### `components/gameengin/input/`

- `components/gameengin/input/DualSenseManager.ts`

### `components/games/`

- `components/games/css-modules.d.ts`
- `components/games/dream.AvenueOfMirrors.tsx`
- `components/games/dream.BabylonSideScroller.tsx`
- `components/games/dream.DefuseRitual.tsx`
- `components/games/dream.EchoArena.tsx`
- `components/games/dream.EnginFracture.tsx`
- `components/games/dream.GameController.tsx`
- `components/games/dream.GamesHub.tsx`
- `components/games/dream.Glassfall.tsx`
- `components/games/dream.Leaderboard.tsx`
- `components/games/dream.LexiconSolitaire.tsx`
- `components/games/dream.MadMaxiWildfall.tsx`
- `components/games/dream.NeonDrift.tsx`
- `components/games/dream.NiteFlyerSolarHymn.tsx`
- `components/games/dream.NullCathedral.tsx`
- `components/games/dream.RecordingControls.tsx`
- `components/games/dream.SerpentSiege.tsx`
- `components/games/dream.VoidlineGP.tsx`
- `components/games/dream.hud.GameHUD.tsx`
- `components/games/dream.hud.LegacyGameHUD.tsx`
- `components/games/dream.hud.MobileGameHUD.tsx`
- `components/games/dream.remote.GameRemote.tsx`
- `components/games/dream.remote.GameRemoteSurface.tsx`
- `components/games/dream.remote.LegacyGameRemote.tsx`

### `components/games/_fx/`

- `components/games/_fx/canvasFx.ts`

### `components/games/madmaxi/`

- `components/games/madmaxi/audio.ts`
- `components/games/madmaxi/authoredZonePacks.ts`
- `components/games/madmaxi/config.ts`
- `components/games/madmaxi/dream.MadmaxiGame.tsx`
- `components/games/madmaxi/index.ts`
- `components/games/madmaxi/levels.ts`
- `components/games/madmaxi/materials.ts`
- `components/games/madmaxi/types.ts`
- `components/games/madmaxi/vfx.ts`

### `engins/forgeengin/forge-ngn/`

- `engins/forgeengin/forge-ngn/assembly.ts`

### `engins/gameengin/`

- `engins/gameengin/GameEnginCore.ts`
- `engins/gameengin/GameRuntime.tsx`
- `engins/gameengin/accessibility-ai.ts`
- `engins/gameengin/ai-director.ts`
- `engins/gameengin/ai-npcs.ts`
- `engins/gameengin/backendNegotiator.ts`
- `engins/gameengin/brain-reader.ts`
- `engins/gameengin/cartridge-manifest.ts`
- `engins/gameengin/cartridge.ts`
- `engins/gameengin/cartridgeLoader.ts`
- `engins/gameengin/cloud-compute.ts`
- `engins/gameengin/core.ts`
- `engins/gameengin/dream-engine.ts`
- `engins/gameengin/dreamr-loader.ts`
- `engins/gameengin/executionWiring.ts`
- `engins/gameengin/gameEnginRuntime.ts`
- `engins/gameengin/generative-audio.ts`
- `engins/gameengin/handlers.ts`
- `engins/gameengin/index.ts`
- `engins/gameengin/launcher.ts`
- `engins/gameengin/neural-render.ts`
- `engins/gameengin/path-tracing.ts`
- `engins/gameengin/platform.ts`
- `engins/gameengin/post-fx.ts`
- `engins/gameengin/power-systems.ts`
- `engins/gameengin/predictive-stream.ts`
- `engins/gameengin/procgen.ts`
- `engins/gameengin/registerCartridges.ts`
- `engins/gameengin/unifiedLoop.ts`
- `engins/gameengin/useUnifiedLoop.ts`
- `engins/gameengin/webgpu-runtime-shell.ts`
- `engins/gameengin/world-crdt.ts`
- `engins/gameengin/xr.ts`

### `engins/gameengin/assets/`

- `engins/gameengin/assets/BundleCache.ts`
- `engins/gameengin/assets/BundleManifest.ts`

### `engins/gameengin/cartridges/`

- `engins/gameengin/cartridges/achievementEngine.ts`
- `engins/gameengin/cartridges/apiStubs.ts`
- `engins/gameengin/cartridges/index.ts`
- `engins/gameengin/cartridges/loaders.ts`
- `engins/gameengin/cartridges/manifest.ts`
- `engins/gameengin/cartridges/reactCartridge.ts`
- `engins/gameengin/cartridges/saveState.ts`

### `engins/gameengin/config/`

- `engins/gameengin/config/demoGameConfig.ts`

### `engins/gameengin/controls/`

- `engins/gameengin/controls/control-mappings.ts`

### `engins/gameengin/games/`

- `engins/gameengin/games/DualSenseManager.ts`
- `engins/gameengin/games/avatar.ts`
- `engins/gameengin/games/catalog.ts`
- `engins/gameengin/games/gameControllerButtons.ts`
- `engins/gameengin/games/gameControllerLeft.ts`
- `engins/gameengin/games/gameControllerRight.ts`
- `engins/gameengin/games/hooks.ts`
- `engins/gameengin/games/library-state.ts`
- `engins/gameengin/games/lucid-avenue-world.ts`
- `engins/gameengin/games/madmaxi-wildfall-world.ts`
- `engins/gameengin/games/mobileControls.ts`
- `engins/gameengin/games/navigation.ts`
- `engins/gameengin/games/performance-baseline.ts`
- `engins/gameengin/games/quality-plan.ts`
- `engins/gameengin/games/useAIDirector.ts`
- `engins/gameengin/games/useGameInputKeyboardBridge.ts`
- `engins/gameengin/games/useGamepad.ts`
- `engins/gameengin/games/useImmersiveGameLayout.ts`
- `engins/gameengin/games/useRemoteChannel.ts`

### `engins/gameengin/input/`

- `engins/gameengin/input/InputRouter.ts`
- `engins/gameengin/input/index.ts`

### `engins/gameengin/remote/`

- `engins/gameengin/remote/comboMachine.ts`
- `engins/gameengin/remote/index.ts`
- `engins/gameengin/remote/layout.ts`
- `engins/gameengin/remote/moves.ts`
- `engins/gameengin/remote/sprintDetector.ts`

### `engins/gameengin/render/`

- `engins/gameengin/render/ShaderRegistry.ts`

### `engins/gameengin/runtime/`

- `engins/gameengin/runtime/FrameBudget.ts`
- `engins/gameengin/runtime/FrameClock.ts`
- `engins/gameengin/runtime/RuntimeQuality.ts`
- `engins/gameengin/runtime/index.ts`

### `engins/gameengin/systems/`

- `engins/gameengin/systems/ai.ts`
- `engins/gameengin/systems/animation.ts`
- `engins/gameengin/systems/assets.ts`
- `engins/gameengin/systems/index.ts`
- `engins/gameengin/systems/lod.ts`
- `engins/gameengin/systems/network.ts`
- `engins/gameengin/systems/physics.ts`
- `engins/gameengin/systems/pooling.ts`
- `engins/gameengin/systems/rendering.ts`
- `engins/gameengin/systems/spatial.ts`
- `engins/gameengin/systems/world.ts`

## Types

- `components/games/css-modules.d.ts`

## Styles

- `components/games/dream.GameController.module.css`
- `components/games/dream.hud.MobileGameHUD.module.css`

## Capability Flags

**Dual Runtime** (4 files) - **Supabase** (2 files) - **Event Bus** (14 files) - **React Context** (1 files) - **Runtime Registry** (3 files)

---

<a name="codeengin"></a>

# CodeEngin

> Scoped user-workspace IDE, file APIs, runners, diagnostics, and editor surface.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/api/codeengin/diagnostics/route.ts` | `assertCodeEnginAccess`, `diagnoseFile`, `diagnoseWorkspace`, `safeErrorMessage`, `next/server` | `/api/codeengin/diagnostics`, `POST` |
| `app/api/codeengin/file/route.ts` | `assertCodeEnginAccess`, `safeErrorMessage`, `createProjectFile`, `deleteProjectFile`, `moveProjectFile`, `readProjectFile` | `/api/codeengin/file`, `POST` |
| `app/api/codeengin/git/route.ts` | `assertCodeEnginAccess`, `getGitDiff`, `getGitLog`, `getGitStatus`, `safeErrorMessage`, `next/server` | `/api/codeengin/git`, `POST` |
| `app/api/codeengin/run/route.ts` | `assertCodeEnginAccess`, `safeErrorMessage`, `listRunnerCommands`, `runCodeEnginCommand`, `next/server` | `/api/codeengin/run`, `GET`, `POST` |
| `app/api/codeengin/search/route.ts` | `assertCodeEnginAccess`, `safeErrorMessage`, `searchWorkspace`, `next/server` | `/api/codeengin/search`, `POST` |
| `app/api/codeengin/upload/route.ts` | `child_process`, `fs/promises`, `os`, `path`, `assertCodeEnginAccess`, `CODEENGIN_BLOCKED_SEGMENTS` | `/api/codeengin/upload`, `POST` |
| `app/api/codeengin/workspace/route.ts` | `assertCodeEnginAccess`, `buildProjectGraph`, `safeErrorMessage`, `createCodeEnginWorkspace`, `getWorkspaceOverview`, `listEditableFiles` | `/api/codeengin/workspace`, `GET`, `POST` |
| `app/daydream/code/engin/page.tsx` | `next/navigation`, `next/server` | `/daydream/code/engin`, `page.tsx`, `(default)` |
| `app/daydream/code/page.tsx` | `(default)`, `(default)`, `DaydreamWidget`, `(default)`, `(default)`, `isDevBypassActive` | `/daydream/code`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/code/ai/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser` | `/engines/code/ai`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/code/layout.tsx` | `react` | `layout.tsx`, `(default)`, `metadata` |
| `app/engines/code/notebook/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser` | `/engines/code/notebook`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/code/page.tsx` | `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/code`, `page.tsx`, `(default)` |
| `app/engines/code/projects/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser` | `/engines/code/projects`, `page.tsx`, `(default)`, `metadata` |
| `components/engines/code/dream.CodeEnginApp.tsx` | `makeEnginApp`, `(default)` | `(default)` |
| `components/engines/code/index.ts` | `default`, `default`, `default`, `default` | `AIPanel`, `CodeEnginApp`, `NotebookPanel`, `ProjectsPanel` |
| `components/engines/code/panels/dream.panel.AIPanel.tsx` | `lucide-react`, `react`, `vitest` | `dream.panel.AIPanel.tsx`, `(default)`, `processData` |
| `components/engines/code/panels/dream.panel.NotebookPanel.tsx` | `lucide-react`, `react`, `,     output: ` | `dream.panel.NotebookPanel.tsx`, `(default)` |
| `components/engines/code/panels/dream.panel.ProjectsPanel.tsx` | `createClient`, `safeGetUser`, `lucide-react`, `next/link`, `react`, `toErrorMessage` | `dream.panel.ProjectsPanel.tsx`, `(default)` |
| `engins/codeengin-ui/core/parser.ts` | `"]([^` | `ParseError`, `ParseResult`, `ParsedSymbol`, `parseCode` |
| `engins/codeengin-ui/modules/ai-co-pilot/dream.panel.AgentPanel.tsx` | `react`, `useAgentSession` | `dream.panel.AgentPanel.tsx`, `AgentPanel` |
| `engins/codeengin-ui/modules/ai-co-pilot/index.ts` | `AgentPanel`, `useAgentSession`, `AgentMessage`, `UseAgentSessionReturn` | `AgentMessage`, `AgentPanel`, `UseAgentSessionReturn`, `useAgentSession` |
| `engins/codeengin-ui/modules/ai-co-pilot/useAgentSession.ts` | `react` | `useAgentSession`, `AgentMessage`, `UseAgentSessionReturn`, `useAgentSession` |
| `engins/codeengin-ui/orchestrator/dream.index.tsx` | `ArtifactSlot`, `AgentPanel` | `dream.index.tsx`, `(default)` |
| `engins/codeengin/ai/drEamsCodeAssist.ts` | - | `CODE_VOCABULARY`, `CellLanguage`, `CodeContext`, `NLCommand`, `ParsedCodeResponse`, `QueryIntent` |
| `engins/codeengin/auth.ts` | `isOwner`, `safeGetUser`, `createServerClient` | `CodeEnginAuthenticatedUser`, `assertCodeEnginAccess` |
| `engins/codeengin/diagnostics.ts` | `path`, `parseCode`, `listEditableFiles`, `readProjectFile`, `CodeEnginDiagnostic` | `diagnoseFile`, `diagnoseWorkspace` |
| `engins/codeengin/diff/aiEditEngine.ts` | - | `AiSuggestion`, `BuildPreviewOptions`, `CODEENGIN_PRODUCTION_MODE`, `CONFIRMATION_REQUIRED`, `EditDiffLine`, `EditDiffLineType` |
| `engins/codeengin/diff/diffUtils.ts` | - | `DEMO_DIFF`, `DiffFile`, `DiffHunk`, `DiffLine`, `DiffLineType`, `FullFileLine` |
| `engins/codeengin/git.ts` | `listEditableFiles` | `getGitDiff`, `getGitLog`, `getGitStatus` |
| `engins/codeengin/pathSafety.ts` | `path` | `CODEENGIN_ALLOWED_EXTENSIONS`, `CODEENGIN_ALLOWED_FILENAMES`, `CODEENGIN_BLOCKED_SEGMENTS`, `assertSafeWorkspacePath`, `assertValidWorkspaceId`, `getCodeEnginWorkspacesRoot` |
| `engins/codeengin/projectGraph.ts` | `path`, `parseCode`, `readProjectFile`, `listEditableFiles`, `CodeEnginGraphEdge`, `CodeEnginGraphNode` | `buildProjectGraph`, `extractImports` |
| `engins/codeengin/runner.ts` | `listEditableFiles`, `readProjectFile`, `CODEENGIN_COMMANDS`, `listRunnerCommands`, `CodeEnginCommandResult` | `listRunnerCommands`, `runCiCommand`, `runCodeEnginCommand` |
| `engins/codeengin/runnerCommands.ts` | - | `CODEENGIN_COMMANDS`, `listRunnerCommands` |
| `engins/codeengin/search.ts` | `listEditableFiles`, `readProjectFile`, `CodeEnginSearchHit` | `searchWorkspace` |
| `engins/codeengin/types.ts` | - | `CodeEnginCommandResult`, `CodeEnginDiagnostic`, `CodeEnginFileNode`, `CodeEnginFileRecord`, `CodeEnginGraphEdge`, `CodeEnginGraphNode` |
| `engins/codeengin/workspaceStore.ts` | `crypto`, `fs`, `fs/promises`, `path`, `assertSafeWorkspacePath`, `assertValidWorkspaceId` | `(default)`, `createCodeEnginWorkspace`, `createProjectFile`, `deleteProjectFile`, `getWorkspaceMeta`, `getWorkspaceOverview` |
| `engins/engin.CodeEngin.tsx` | `(default)`, `useDaydreamPersistence`, `useDaydreamState`, `ArtifactSlot`, `useCodeEnginRuntime`, `useEnginWorkflow` | `engin.CodeEngin.tsx`, `(default)`, `RuntimeIntent`, `labDatasetId` |

## Pages

- `app/daydream/code/engin/page.tsx`
- `app/daydream/code/page.tsx`
- `app/engines/code/ai/page.tsx`
- `app/engines/code/notebook/page.tsx`
- `app/engines/code/page.tsx`
- `app/engines/code/projects/page.tsx`

## API Routes

- `app/api/codeengin/diagnostics/route.ts`
- `app/api/codeengin/file/route.ts`
- `app/api/codeengin/git/route.ts`
- `app/api/codeengin/run/route.ts`
- `app/api/codeengin/search/route.ts`
- `app/api/codeengin/upload/route.ts`
- `app/api/codeengin/workspace/route.ts`
- `app/api/projects/route.ts`

## Code Files

### `app/api/codeengin/`

- `app/api/codeengin/diagnostics/route.ts`
- `app/api/codeengin/file/route.ts`
- `app/api/codeengin/git/route.ts`
- `app/api/codeengin/run/route.ts`
- `app/api/codeengin/search/route.ts`
- `app/api/codeengin/upload/route.ts`
- `app/api/codeengin/workspace/route.ts`

### `app/daydream/code/`

- `app/daydream/code/engin/page.tsx`
- `app/daydream/code/page.tsx`

### `app/engines/code/`

- `app/engines/code/ai/page.tsx`
- `app/engines/code/layout.tsx`
- `app/engines/code/notebook/page.tsx`
- `app/engines/code/page.tsx`
- `app/engines/code/projects/page.tsx`

### `components/engines/code/`

- `components/engines/code/dream.CodeEnginApp.tsx`
- `components/engines/code/index.ts`
- `components/engines/code/panels/dream.panel.AIPanel.tsx`
- `components/engines/code/panels/dream.panel.NotebookPanel.tsx`
- `components/engines/code/panels/dream.panel.ProjectsPanel.tsx`

### `engins/`

- `engins/engin.CodeEngin.tsx`

### `engins/codeengin/`

- `engins/codeengin/auth.ts`
- `engins/codeengin/diagnostics.ts`
- `engins/codeengin/git.ts`
- `engins/codeengin/pathSafety.ts`
- `engins/codeengin/projectGraph.ts`
- `engins/codeengin/runner.ts`
- `engins/codeengin/runnerCommands.ts`
- `engins/codeengin/search.ts`
- `engins/codeengin/types.ts`
- `engins/codeengin/workspaceStore.ts`

### `engins/codeengin-ui/core/`

- `engins/codeengin-ui/core/parser.ts`

### `engins/codeengin-ui/modules/`

- `engins/codeengin-ui/modules/ai-co-pilot/dream.panel.AgentPanel.tsx`
- `engins/codeengin-ui/modules/ai-co-pilot/index.ts`
- `engins/codeengin-ui/modules/ai-co-pilot/useAgentSession.ts`

### `engins/codeengin-ui/orchestrator/`

- `engins/codeengin-ui/orchestrator/dream.index.tsx`

### `engins/codeengin/ai/`

- `engins/codeengin/ai/drEamsCodeAssist.ts`

### `engins/codeengin/diff/`

- `engins/codeengin/diff/aiEditEngine.ts`
- `engins/codeengin/diff/diffUtils.ts`

## Types

_No type files for this feature._

## Styles

_No style files for this feature._

## Capability Flags

**Dual Runtime** (1 files) - **Supabase** (1 files) - **Event Bus** (2 files)

---

<a name="labengin"></a>

# LabEngin

> Lab panels, simulations, experiments, and Lab daydream surfaces.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/daydream/lab/engin/page.tsx` | `next/navigation`, `next/server` | `/daydream/lab/engin`, `page.tsx`, `(default)` |
| `app/daydream/lab/page.tsx` | `(default)`, `DaydreamWidget`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `lucide-react` | `/daydream/lab`, `page.tsx`, `(default)`, `metadata` |
| `app/daydream/lab/portfolio/page.tsx` | `(default)`, `DaydreamWidget`, `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser` | `/daydream/lab/portfolio`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/lab/data/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser` | `/engines/lab/data`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/lab/experiments/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser` | `/engines/lab/experiments`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/lab/layout.tsx` | `react` | `layout.tsx`, `(default)`, `metadata` |
| `app/engines/lab/page.tsx` | `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/lab`, `page.tsx`, `(default)` |
| `app/engines/lab/quantum/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser` | `/engines/lab/quantum`, `page.tsx`, `(default)`, `metadata` |
| `components/engines/lab/dream.LabEnginApp.tsx` | `makeEnginApp`, `(default)` | `(default)` |
| `components/engines/lab/index.ts` | `default`, `default`, `default`, `default` | `DataVizPanel`, `ExperimentsPanel`, `LabEnginApp`, `QuantumPanel` |
| `components/engines/lab/panels/dream.panel.DataVizPanel.tsx` | `lucide-react`, `react` | `dream.panel.DataVizPanel.tsx`, `(default)` |
| `components/engines/lab/panels/dream.panel.ExperimentsPanel.tsx` | `lucide-react`, `react` | `dream.panel.ExperimentsPanel.tsx`, `(default)` |
| `components/engines/lab/panels/dream.panel.QuantumPanel.tsx` | `lucide-react`, `react` | `dream.panel.QuantumPanel.tsx`, `(default)` |
| `engins/engin.LabEngin.tsx` | `(default)`, `ForgeDreamCanvas`, `useDaydreamPersistence`, `EngineBase`, `UpgradedEngine`, `createEventBus` | `engin.LabEngin.tsx`, `(default)` |
| `engins/labengin/implicitSurface.ts` | `createSphereSDF`, `createTerrainCaveSDF`, `meshToSnapshot`, `runIsoSurfaceJob`, `DualContouringSettings`, `SDF` | `LabImplicitSurfacePreset`, `LabImplicitSurfaceRun`, `runLabImplicitSurface` |

## Pages

- `app/daydream/lab/engin/page.tsx`
- `app/daydream/lab/page.tsx`
- `app/daydream/lab/portfolio/page.tsx`
- `app/engines/lab/data/page.tsx`
- `app/engines/lab/experiments/page.tsx`
- `app/engines/lab/page.tsx`
- `app/engines/lab/quantum/page.tsx`

## API Routes

- `app/api/lab/benchmarks/route.ts`

## Code Files

### `app/daydream/lab/`

- `app/daydream/lab/engin/page.tsx`
- `app/daydream/lab/page.tsx`
- `app/daydream/lab/portfolio/page.tsx`

### `app/engines/lab/`

- `app/engines/lab/data/page.tsx`
- `app/engines/lab/experiments/page.tsx`
- `app/engines/lab/layout.tsx`
- `app/engines/lab/page.tsx`
- `app/engines/lab/quantum/page.tsx`

### `components/engines/lab/`

- `components/engines/lab/dream.LabEnginApp.tsx`
- `components/engines/lab/index.ts`
- `components/engines/lab/panels/dream.panel.DataVizPanel.tsx`
- `components/engines/lab/panels/dream.panel.ExperimentsPanel.tsx`
- `components/engines/lab/panels/dream.panel.QuantumPanel.tsx`

### `engins/`

- `engins/engin.LabEngin.tsx`

### `engins/labengin/`

- `engins/labengin/implicitSurface.ts`

## Types

_No type files for this feature._

## Styles

_No style files for this feature._

## Capability Flags

**Dual Runtime** (1 files) - **Supabase** (1 files) - **Event Bus** (1 files)

---

<a name="starmakerengin"></a>

# StarMakerEngin

> Music Engin, audio bridge, DAW surface, piano roll, and sessions.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/daydream/music/engin/page.tsx` | `next/navigation`, `next/server` | `/daydream/music/engin`, `page.tsx`, `(default)` |
| `app/daydream/music/page.tsx` | `(default)`, `DaydreamWidget`, `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser` | `/daydream/music`, `page.tsx`, `(default)`, `metadata` |
| `app/daydream/music/upload/page.tsx` | `createClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `react` | `/daydream/music/upload`, `page.tsx`, `(default)` |
| `app/engines/music/arrange/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser` | `/engines/music/arrange`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/music/layout.tsx` | `react` | `layout.tsx`, `(default)`, `metadata` |
| `app/engines/music/library/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser` | `/engines/music/library`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/music/page.tsx` | `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/music`, `page.tsx`, `(default)` |
| `app/engines/music/studio/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser` | `/engines/music/studio`, `page.tsx`, `(default)`, `metadata` |
| `components/engines/music/dream.MusicEnginApp.tsx` | `makeEnginApp`, `next/dynamic`, `(dynamic import)` | `(default)` |
| `components/engines/music/index.ts` | `default`, `default`, `default`, `default` | `ArrangePanel`, `MusicEnginApp`, `MusicLibraryPanel`, `StudioPanel` |
| `components/engines/music/panels/dream.panel.ArrangePanel.tsx` | `lucide-react`, `react` | `dream.panel.ArrangePanel.tsx`, `(default)` |
| `components/engines/music/panels/dream.panel.MusicLibraryPanel.tsx` | `lucide-react`, `react` | `dream.panel.MusicLibraryPanel.tsx`, `(default)` |
| `components/engines/music/panels/dream.panel.StudioPanel.tsx` | `lucide-react`, `react`, `toErrorMessage` | `dream.panel.StudioPanel.tsx`, `(default)` |
| `engins/engin.StarMakerEngin.tsx` | `(default)`, `(default)`, `(default)`, `(default)`, `(default)`, `AudioVisualizer3D` | `engin.StarMakerEngin.tsx`, `(default)` |
| `engins/starmakerengin/audio-fingerprint/fingerprint.ts` | `FrequencyPeak`, `PeakMap` | `Fingerprint`, `TimeSlice`, `matchFingerprint`, `recordFingerprint` |
| `engins/starmakerengin/audio-fingerprint/index.ts` | `matchFingerprint`, `recordFingerprint`, `Fingerprint`, `TimeSlice`, `buildPeakMap`, `FrequencyPeak` | `Fingerprint`, `FrequencyPeak`, `PeakMap`, `TimeSlice`, `buildPeakMap`, `extractStem` |
| `engins/starmakerengin/audio-fingerprint/peak-map.ts` | - | `FrequencyPeak`, `PeakMap`, `buildPeakMap` |
| `engins/starmakerengin/audio-fingerprint/stem-extractor.ts` | `TimeSlice` | `extractStem`, `extractStemAsync` |
| `engins/starmakerengin/audioFingerprint.ts` | `TORRIDITY_DP`, `TORRIDITY_N` | `Fingerprint`, `MatchResult`, `Peak`, `PeakMap`, `buildPeakMap`, `createFingerprintIsolator` |
| `engins/starmakerengin/music/presets.ts` | - | `BEAT_PRESETS`, `BeatPreset`, `GENRE_LIST`, `INSTRUMENT_PRESETS`, `InstrumentPreset`, `PROJECT_TEMPLATES` |
| `engins/starmakerengin/music/starmaker.ts` | - | `MelodySuggestion`, `MelodySuggestionInput`, `PlaybackMixerState`, `PlaybackProfile`, `PlaybackProfileInput`, `PlaybackQualityMode` |
| `engins/starmakerengin/music/starmakerArrangement.ts` | - | `ARRANGEMENT_BARS`, `ARRANGEMENT_SOURCE_COLORS`, `ARRANGEMENT_TRACKS`, `ArrangementClip`, `ArrangementSource`, `ArrangementTrackId` |
| `engins/starmakerengin/music/starmakerDaw.ts` | - | `AUDIO_QUALITY_PRESETS`, `AUTOMATABLE_PARAMS`, `AudioQualityConfig`, `AudioTake`, `AutomationLane`, `AutomationMode` |
| `engins/starmakerengin/music/wasmAudioBridge.ts` | - | `WasmAudioBridge`, `createWasmAudioBridge` |

## Pages

- `app/daydream/music/engin/page.tsx`
- `app/daydream/music/page.tsx`
- `app/daydream/music/upload/page.tsx`
- `app/engines/music/arrange/page.tsx`
- `app/engines/music/library/page.tsx`
- `app/engines/music/page.tsx`
- `app/engines/music/studio/page.tsx`

## API Routes

- `app/api/music/route.ts`

## Code Files

### `app/daydream/music/`

- `app/daydream/music/engin/page.tsx`
- `app/daydream/music/page.tsx`
- `app/daydream/music/upload/page.tsx`

### `app/engines/music/`

- `app/engines/music/arrange/page.tsx`
- `app/engines/music/layout.tsx`
- `app/engines/music/library/page.tsx`
- `app/engines/music/page.tsx`
- `app/engines/music/studio/page.tsx`

### `components/engines/music/`

- `components/engines/music/dream.MusicEnginApp.tsx`
- `components/engines/music/index.ts`
- `components/engines/music/panels/dream.panel.ArrangePanel.tsx`
- `components/engines/music/panels/dream.panel.MusicLibraryPanel.tsx`
- `components/engines/music/panels/dream.panel.StudioPanel.tsx`

### `engins/`

- `engins/engin.StarMakerEngin.tsx`

### `engins/starmakerengin/`

- `engins/starmakerengin/audioFingerprint.ts`

### `engins/starmakerengin/audio-fingerprint/`

- `engins/starmakerengin/audio-fingerprint/fingerprint.ts`
- `engins/starmakerengin/audio-fingerprint/index.ts`
- `engins/starmakerengin/audio-fingerprint/peak-map.ts`
- `engins/starmakerengin/audio-fingerprint/stem-extractor.ts`

### `engins/starmakerengin/music/`

- `engins/starmakerengin/music/presets.ts`
- `engins/starmakerengin/music/starmaker.ts`
- `engins/starmakerengin/music/starmakerArrangement.ts`
- `engins/starmakerengin/music/starmakerDaw.ts`
- `engins/starmakerengin/music/wasmAudioBridge.ts`

## Types

_No type files for this feature._

## Styles

_No style files for this feature._

## Capability Flags

**Dual Runtime** (1 files) - **Supabase** (2 files) - **Event Bus** (1 files)

---

<a name="brandengin"></a>

# BrandEngin

> Branding Engin, brand identity, campaigns, and analytics daydreams.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/daydream/brand/engin/page.tsx` | `next/navigation`, `next/server` | `/daydream/brand/engin`, `page.tsx`, `(default)` |
| `app/daydream/brand/page.tsx` | `(default)`, `DaydreamWidget`, `(default)`, `(default)`, `(default)`, `isDevBypassActive` | `/daydream/brand`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/brand/campaigns/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser` | `/engines/brand/campaigns`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/brand/identity/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser` | `/engines/brand/identity`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/brand/layout.tsx` | `react` | `layout.tsx`, `(default)`, `metadata` |
| `app/engines/brand/page.tsx` | `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/brand`, `page.tsx`, `(default)` |
| `components/engines/brand/dream.BrandEnginApp.tsx` | `makeEnginApp`, `(default)` | `(default)` |
| `components/engines/brand/index.ts` | `default`, `default`, `default` | `BrandEnginApp`, `CampaignsPanel`, `IdentityPanel` |
| `components/engines/brand/panels/dream.panel.CampaignsPanel.tsx` | `lucide-react`, `react` | `dream.panel.CampaignsPanel.tsx`, `(default)` |
| `components/engines/brand/panels/dream.panel.IdentityPanel.tsx` | `bridge`, `lucide-react`, `react` | `dream.panel.IdentityPanel.tsx`, `(default)` |
| `engins/engin.BrandingEngin.tsx` | `(default)`, `useSharedDream`, `useDaydreamPersistence`, `useDaydreamState`, `EngineBase`, `UpgradedEngine` | `engin.BrandingEngin.tsx`, `(default)` |

## Pages

- `app/daydream/brand/engin/page.tsx`
- `app/daydream/brand/page.tsx`
- `app/engines/brand/campaigns/page.tsx`
- `app/engines/brand/identity/page.tsx`
- `app/engines/brand/page.tsx`

## API Routes

_No API routes for this feature._

## Code Files

### `app/daydream/brand/`

- `app/daydream/brand/engin/page.tsx`
- `app/daydream/brand/page.tsx`

### `app/engines/brand/`

- `app/engines/brand/campaigns/page.tsx`
- `app/engines/brand/identity/page.tsx`
- `app/engines/brand/layout.tsx`
- `app/engines/brand/page.tsx`

### `components/engines/brand/`

- `components/engines/brand/dream.BrandEnginApp.tsx`
- `components/engines/brand/index.ts`
- `components/engines/brand/panels/dream.panel.CampaignsPanel.tsx`
- `components/engines/brand/panels/dream.panel.IdentityPanel.tsx`

### `engins/`

- `engins/engin.BrandingEngin.tsx`

## Types

_No type files for this feature._

## Styles

_No style files for this feature._

## Capability Flags

**Dual Runtime** (2 files) - **Supabase** (1 files) - **Event Bus** (2 files)

---

<a name="forgeengin"></a>

# ForgeEngin

> Forge workflow, engine builder, custom Engin creation, and forge APIs.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/daydream/forge/page.tsx` | `(default)`, `DaydreamWidget`, `(default)`, `(default)`, `(default)`, `isDevBypassActive` | `/daydream/forge`, `page.tsx`, `(default)`, `metadata` |
| `components/forge/dream.EngineBuilderCanvas.tsx` | `COMPONENT_INVENTORY`, `AtomicComponent`, `ComponentCategory`, `atomicPieceFromComponent`, `createAssembly`, `deserializeAssembly` | `dream.EngineBuilderCanvas.tsx`, `(default)`, `EngineBuilderCanvasProps` |
| `components/forge/dream.panel.AIBuilderPanel.tsx` | `canBuildToday`, `readForgeBuilds`, `ForgeBuildRecord`, `ForgeLogEvent`, `ENGIN_REGISTRY`, `useForgeBuild` | `dream.panel.AIBuilderPanel.tsx`, `(default)` |
| `components/forge/dream.widget.ForgeMomentumWidget.tsx` | `computeMomentum`, `getLevelColor`, `getLevelEmoji`, `MomentumSnapshot`, `react` | `dream.widget.ForgeMomentumWidget.tsx`, `(default)` |
| `engins/dream.ForgeEngin.tsx` | `(default)`, `(default)`, `(default)`, `ArtifactSlot`, `clearWorkflowRun`, `deleteCustomWorkflow` | `dream.ForgeEngin.tsx`, `(default)` |
| `engins/forgeengin/componentInventory.ts` | - | `ALL_CATEGORIES`, `AtomicComponent`, `COMPONENT_INVENTORY`, `ComponentCategory`, `getByCategory`, `searchComponents` |
| `engins/forgeengin/enginpipe/artifact/manifest.ts` | `zod` | `ArtifactPermission`, `ArtifactPermissionSchema`, `EnginArtifactManifest`, `EnginArtifactManifestSchema`, `createManifest`, `parseManifest` |
| `engins/forgeengin/enginpipe/index.ts` | `ArtifactPermissionSchema`, `EnginArtifactManifestSchema`, `createManifest`, `parseManifest`, `safeParseManifest`, `ArtifactPermission` | `ArtifactPermission`, `ArtifactPermissionSchema`, `ArtifactSlot`, `ArtifactSlotContextValue`, `ArtifactSlotProps`, `CapabilityInput` |
| `engins/forgeengin/enginpipe/quality/tiers.ts` | - | `CapabilityInput`, `CapabilityNavigator`, `CapabilityScreen`, `DEFAULT_TIER_CONFIG`, `QualityTier`, `QualityTierConfig` |
| `engins/forgeengin/enginpipe/shell/ArtifactSlot.tsx` | `react`, `createEventBus`, `EventBus` | `ArtifactSlot.tsx`, `useArtifactSlot`, `useOptionalArtifactSlot`, `ArtifactSlot`, `ArtifactSlotContextValue`, `ArtifactSlotProps` |
| `engins/forgeengin/enginpipe/telemetry/client.ts` | `parseTelemetryEvent`, `TelemetryEvent` | `TelemetryClient`, `TelemetryClientOptions`, `TelemetryRecordResult`, `TelemetrySupabaseClient`, `createTelemetryClient` |
| `engins/forgeengin/enginpipe/telemetry/events.ts` | `zod` | `TelemetryEvent`, `TelemetryEventSchema`, `TelemetryEventType`, `TelemetryEventTypeSchema`, `parseTelemetryEvent` |
| `engins/forgeengin/forge-ngn/assembly.ts` | `PieceManifest`, `getPiece` | `AssemblyValidationError`, `Connection`, `EngineAssembly`, `MAX_PIECES`, `MIN_PIECES`, `PlacedPiece` |
| `engins/forgeengin/forge-ngn/index.ts` | `*`, `*` | `index.ts` |
| `engins/forgeengin/forge-ngn/piece-registry.ts` | - | `PIECE_CATEGORIES`, `PIECE_REGISTRY`, `PieceCategory`, `PieceManifest`, `Port`, `PortType` |
| `engins/forgeengin/forge/engineForge.ts` | `AtomicComponent`, `createEventBus`, `EventBus` | `AssemblyEvents`, `AssemblySandbox`, `AtomicPiece`, `EngineAssembly`, `Port`, `ValidationResult` |
| `engins/forgeengin/forge/forgeBuild.ts` | `uuid` | `ForgeArtifact`, `ForgeArtifactType`, `ForgeBuildRecord`, `ForgeBuildState`, `ForgeLogEvent`, `canBuildToday` |
| `engins/forgeengin/forge/forgeIntelligence.ts` | `CREATIVE_ENGINES`, `ENGIN_REGISTRY`, `FORGE_HISTORY_KEY`, `FORGE_WORKFLOWS`, `EnginEntry`, `ForgeWorkflow` | `ForgeHistoryEntry`, `ForgeSuggestion`, `ForgeTransferEntry`, `WorkflowRunState`, `WorkflowStepStatus`, `appendForgeHistory` |
| `engins/forgeengin/forge/forgeMomentum.ts` | `CREATIVE_ENGINES`, `FORGE_HISTORY_KEY` | `MomentumDimension`, `MomentumLevel`, `MomentumSnapshot`, `computeDepth`, `computeDiversity`, `computeMomentum` |
| `engins/forgeengin/forge/forgeNexus.ts` | `CREATIVE_ENGINES`, `ENGIN_REGISTRY`, `FORGE_HISTORY_KEY` | `AffinityCluster`, `NexusEdge`, `NexusNode`, `NexusSnapshot`, `buildTransitionMap`, `computeEdges` |
| `engins/forgeengin/forge/forgeRegistry.ts` | - | `CREATIVE_ENGINES`, `ENGIN_REGISTRY`, `EnginEntry`, `FORGE_HISTORY_KEY`, `FORGE_WORKFLOWS`, `ForgeActivityPulse` |
| `engins/forgeengin/forge/forgeRituals.ts` | `CREATIVE_ENGINES`, `ENGIN_REGISTRY`, `FORGE_HISTORY_KEY` | `ForgeRitual`, `RitualSnapshot`, `RitualType`, `computeRituals`, `detectAffinityPatterns`, `detectSequencePatterns` |
| `engins/forgeengin/forge/useForgeActivity.ts` | `react`, `recordForgeActivity` | `useForgeActivity`, `UseForgeActivityOptions`, `UseForgeActivityReturn`, `useForgeActivity` |
| `engins/forgeengin/forge/useForgeBuild.ts` | `ForgeArtifact`, `ForgeArtifactType`, `ForgeBuildRecord`, `ForgeLogEvent`, `canBuildToday`, `isForgeLogEvent` | `useForgeBuild`, `ForgeBuildState`, `UseForgeBuildReturn`, `useForgeBuild` |

## Pages

- `app/daydream/forge/page.tsx`

## API Routes

_No API routes for this feature._

## Code Files

### `app/daydream/forge/`

- `app/daydream/forge/page.tsx`

### `components/forge/`

- `components/forge/dream.EngineBuilderCanvas.tsx`
- `components/forge/dream.panel.AIBuilderPanel.tsx`
- `components/forge/dream.widget.ForgeMomentumWidget.tsx`

### `engins/`

- `engins/dream.ForgeEngin.tsx`

### `engins/forgeengin/`

- `engins/forgeengin/componentInventory.ts`

### `engins/forgeengin/enginpipe/`

- `engins/forgeengin/enginpipe/artifact/manifest.ts`
- `engins/forgeengin/enginpipe/index.ts`
- `engins/forgeengin/enginpipe/quality/tiers.ts`
- `engins/forgeengin/enginpipe/shell/ArtifactSlot.tsx`
- `engins/forgeengin/enginpipe/telemetry/client.ts`
- `engins/forgeengin/enginpipe/telemetry/events.ts`

### `engins/forgeengin/forge/`

- `engins/forgeengin/forge/engineForge.ts`
- `engins/forgeengin/forge/forgeBuild.ts`
- `engins/forgeengin/forge/forgeIntelligence.ts`
- `engins/forgeengin/forge/forgeMomentum.ts`
- `engins/forgeengin/forge/forgeNexus.ts`
- `engins/forgeengin/forge/forgeRegistry.ts`
- `engins/forgeengin/forge/forgeRituals.ts`
- `engins/forgeengin/forge/useForgeActivity.ts`
- `engins/forgeengin/forge/useForgeBuild.ts`

### `engins/forgeengin/forge-ngn/`

- `engins/forgeengin/forge-ngn/assembly.ts`
- `engins/forgeengin/forge-ngn/index.ts`
- `engins/forgeengin/forge-ngn/piece-registry.ts`

## Types

_No type files for this feature._

## Styles

_No style files for this feature._

## Capability Flags

**Dual Runtime** (1 files) - **Event Bus** (1 files) - **React Context** (1 files)

---

<a name="profile"></a>

# Profile

> Profile, edit profile, avatar, spatial profile, and public profile routes.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/edit-profiledream/page.tsx` | `ActivityProfile`, `(default)`, `DEFAULT_DREAMS`, `ProfileDream`, `(default)`, `createClient` | `/edit-profiledream`, `page.tsx`, `(default)` |
| `app/profile/[handle]/page.tsx` | `ActivityProfile`, `(default)`, `(default)`, `(default)`, `(default)`, `DEFAULT_DREAMS` | `/profile/:handle`, `page.tsx`, `(default)` |
| `app/profile/page.tsx` | `next/navigation`, `next/server` | `/profile`, `page.tsx`, `(default)` |
| `app/u/[handle]/page.tsx` | `next/navigation`, `next/server` | `/u/:handle`, `page.tsx`, `(default)` |
| `app/view-profile/page.tsx` | `ActivityProfile`, `(default)`, `(default)`, `DEFAULT_DREAMS`, `ProfileDream`, `(default)` | `/view-profile`, `page.tsx`, `(default)`, `metadata` |
| `components/profile/dream.EditableAvatar.tsx` | `next/image`, `next/navigation`, `react` | `dream.EditableAvatar.tsx`, `(default)` |
| `components/profile/dream.ProfileCanvas.tsx` | `(default)`, `PROFILE_SHARE_PLATFORMS`, `createClient`, `lucide-react`, `next/link`, `react` | `dream.ProfileCanvas.tsx`, `(default)` |
| `components/profile/dream.ProfileCustomizeButton.tsx` | `useCustomizeMode` | `dream.ProfileCustomizeButton.tsx`, `(default)` |
| `components/profile/dream.widget.ProfileWidgetGrid.tsx` | `(default)`, `PickerConnector`, `TOP_10_CONNECTORS`, `(default)`, `lucide-react`, `next/link` | `dream.widget.ProfileWidgetGrid.tsx`, `(default)`, `DEFAULT_CONFIG`, `DEFAULT_DREAMS`, `DEFAULT_WIDGETS`, `DreamBgStyle` |
| `components/spatial/dream.PixiPhysicsLayer.tsx` | `pixi-viewport`, `pixi.js`, `react` | `dream.PixiPhysicsLayer.tsx`, `(default)`, `PixiPhysicsLayerProps` |
| `components/spatial/dream.ProfileSpace.tsx` | `useContent`, `useWidgets`, `cn`, `ContentObject`, `Widget`, `WidgetType` | `dream.ProfileSpace.tsx`, `(default)` |
| `components/spatial/dream.shell.EnhancedSpatialShell.tsx` | `ProfileSpace`, `(default)`, `LAYER_HOME`, `LAYER_PROFILE`, `SpatialNavigationEngine`, `WidgetBindingType` | `dream.shell.EnhancedSpatialShell.tsx`, `(default)` |
| `coresurfaces/dreamsurface.EditProfileDream.tsx` | `(default)`, `DEFAULT_DREAMS`, `ProfileDream`, `(default)`, `createClient`, `safeGetUser` | `dreamsurface.EditProfileDream.tsx`, `(default)` |
| `coresurfaces/dreamsurface.ViewProfile.tsx` | `(default)`, `(default)`, `DEFAULT_DREAMS`, `ProfileDream`, `(default)`, `createServerClient` | `dreamsurface.ViewProfile.tsx`, `(default)`, `metadata` |
| `coresurfaces/home/buttons/button-groups.ts` | - | `BUTTON_GROUPS`, `ButtonGroupName`, `ButtonItem` |
| `coresurfaces/home/buttons/contextual-home.ts` | - | `HOME_BOTTOM_THRESHOLD`, `HOME_TOP_THRESHOLD`, `HomeTarget`, `RuntimeHomeCallbacks`, `resolveHomeTarget`, `runHomeAction` |

## Pages

- `app/edit-profiledream/page.tsx`
- `app/profile/[handle]/page.tsx`
- `app/profile/page.tsx`
- `app/u/[handle]/page.tsx`
- `app/view-profile/page.tsx`

## API Routes

- `app/api/profile/route.ts`

## Code Files

### `app/edit-profiledream/`

- `app/edit-profiledream/page.tsx`

### `app/profile/`

- `app/profile/page.tsx`

### `app/profile/[handle]/`

- `app/profile/[handle]/page.tsx`

### `app/u/[handle]/`

- `app/u/[handle]/page.tsx`

### `app/view-profile/`

- `app/view-profile/page.tsx`

### `components/profile/`

- `components/profile/dream.EditableAvatar.tsx`
- `components/profile/dream.ProfileCanvas.tsx`
- `components/profile/dream.ProfileCustomizeButton.tsx`
- `components/profile/dream.widget.ProfileWidgetGrid.tsx`

### `components/spatial/`

- `components/spatial/dream.PixiPhysicsLayer.tsx`
- `components/spatial/dream.ProfileSpace.tsx`
- `components/spatial/dream.shell.EnhancedSpatialShell.tsx`

### `coresurfaces/`

- `coresurfaces/dreamsurface.EditProfileDream.tsx`
- `coresurfaces/dreamsurface.ViewProfile.tsx`

### `coresurfaces/home/buttons/`

- `coresurfaces/home/buttons/button-groups.ts`
- `coresurfaces/home/buttons/contextual-home.ts`

## Types

_No type files for this feature._

## Styles

_No style files for this feature._

## Capability Flags

**Supabase** (6 files) - **Event Bus** (1 files)

---

<a name="feed-social"></a>

# Feed / Social

> Feed, posts, likes, comments, follows, views, hashtags, and platform feeds.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/api/feed/route.ts` | `sortByVisibilityScore`, `getPrimaryPostMediaUrl`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/feed`, `GET`, `UnifiedFeedEntry` |
| `app/api/posts/[id]/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/posts/[id]`, `DELETE` |
| `app/api/posts/[id]/save/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/posts/[id]/save`, `DELETE`, `POST` |
| `app/api/posts/[id]/view/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/posts/[id]/view`, `POST` |
| `app/api/posts/profile/[userId]/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/posts/profile/[userId]`, `GET` |
| `app/api/posts/route.ts` | `scanContent`, `reportChildSafetyIncident`, `scanMediaUrlsForChildSafety`, `getPrimaryPostMediaUrl`, `createServerClient`, `safeGetUser` | `/api/posts`, `GET`, `POST` |
| `app/discover/page.tsx` | `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `next/server` | `/discover`, `page.tsx`, `(default)`, `metadata` |
| `components/dream.FeedCard.tsx` | `(default)`, `UniverseCard`, `UniverseCardContent`, `cn`, `formatRelativeTime`, `inferProviderFromUrl` | `dream.FeedCard.tsx`, `(default)` |
| `components/dream.HomeFeed.tsx` | `AdUnit`, `(default)`, `(default)`, `(default)`, `AdType`, `useDreamSystem` | `dream.HomeFeed.tsx`, `(default)` |
| `components/feed/dream.AlgorithmEngine.tsx` | `lucide-react`, `next/link`, `react` | `dream.AlgorithmEngine.tsx`, `(default)`, `FeedPreset` |
| `components/feed/dream.CommentSection.tsx` | `formatRelativeTime`, `lucide-react`, `next/image`, `react` | `dream.CommentSection.tsx`, `(default)` |
| `components/feed/dream.FeedVideoCard.tsx` | `FeedPost`, `lucide-react`, `react` | `dream.FeedVideoCard.tsx`, `(default)`, `FeedVideoCardProps` |
| `components/feed/dream.FollowButton.tsx` | `(default)`, `FollowFrequency`, `lucide-react`, `react` | `dream.FollowButton.tsx`, `(default)` |
| `components/feed/dream.FollowOnboarding.tsx` | `lucide-react`, `react` | `dream.FollowOnboarding.tsx`, `(default)`, `FOLLOW_OPTIONS`, `FollowFrequency`, `FollowSettings`, `saveFollowSetting` |
| `components/feeds/dream.widget.EmbedFeedWidget.tsx` | `EmbedFeedItem`, `lucide-react`, `react`, `toErrorMessage` | `dream.widget.EmbedFeedWidget.tsx`, `(default)` |

## Pages

- `app/discover/page.tsx`

## API Routes

- `app/api/comments/route.ts`
- `app/api/feed/route.ts`
- `app/api/follow/route.ts`
- `app/api/likes/route.ts`
- `app/api/posts/[id]/route.ts`
- `app/api/posts/[id]/save/route.ts`
- `app/api/posts/[id]/view/route.ts`
- `app/api/posts/profile/[userId]/route.ts`
- `app/api/posts/route.ts`
- `app/api/views/track/route.ts`

## Code Files

### `app/api/feed/`

- `app/api/feed/route.ts`

### `app/api/posts/`

- `app/api/posts/[id]/route.ts`
- `app/api/posts/[id]/save/route.ts`
- `app/api/posts/[id]/view/route.ts`
- `app/api/posts/profile/[userId]/route.ts`
- `app/api/posts/route.ts`

### `app/discover/`

- `app/discover/page.tsx`

### `components/`

- `components/dream.FeedCard.tsx`
- `components/dream.HomeFeed.tsx`

### `components/feed/`

- `components/feed/dream.AlgorithmEngine.tsx`
- `components/feed/dream.CommentSection.tsx`
- `components/feed/dream.FeedVideoCard.tsx`
- `components/feed/dream.FollowButton.tsx`
- `components/feed/dream.FollowOnboarding.tsx`

### `components/feeds/`

- `components/feeds/dream.widget.EmbedFeedWidget.tsx`

## Types

_No type files for this feature._

## Styles

_No style files for this feature._

## Capability Flags

**Dual Runtime** (1 files) - **Supabase** (7 files)

---

<a name="marketplace-shop-ads"></a>

# Marketplace / Shop / Ads

> Marketplace, shop, orders, ads, and skip credits.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/api/ads/orders/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/ads/orders`, `POST` |
| `app/api/ads/view/route.ts` | `qualifiesForPremiumCPV`, `calculateActivityRevenueSplit`, `calculateSkipCreditsEarned`, `AdView`, `TrackAdViewRequest`, `TrackAdViewResponse` | `/api/ads/view`, `POST` |
| `app/api/marketplace/request/route.ts` | `buildContactRequestRecord`, `validateContactRequest`, `createServerClient`, `safeGetUser`, `next/server` | `/api/marketplace/request`, `POST` |
| `app/api/marketplace/route.ts` | `createServerClient`, `safeGetUser`, `next/server`, `toErrorMessage` | `/api/marketplace`, `GET`, `POST` |
| `app/api/shop/route.ts` | `normalizeShopListing`, `validateShopListing`, `createServerClient`, `safeGetUser`, `Database`, `@supabase/supabase-js` | `/api/shop`, `DELETE`, `GET`, `POST`, `PUT` |
| `app/marketplace/[id]/page.tsx` | `(default)`, `(default)`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `lucide-react` | `/marketplace/:id`, `page.tsx`, `(default)` |
| `app/marketplace/page.tsx` | `(default)`, `(default)`, `(default)`, `createServerClient`, `safeGetUser`, `lucide-react` | `/marketplace`, `page.tsx`, `(default)`, `metadata` |
| `app/marketplace/sell/page.tsx` | `createClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `react` | `/marketplace/sell`, `page.tsx`, `(default)` |
| `app/shop/page.tsx` | `(default)`, `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation` | `/shop`, `page.tsx`, `(default)`, `metadata` |
| `app/shop/sell/page.tsx` | `createClient`, `safeGetUser`, `lucide-react`, `next/image`, `next/link`, `next/navigation` | `/shop/sell`, `page.tsx`, `(default)` |
| `components/ads/dream.AdUnit.tsx` | `AdType`, `next/image`, `react` | `dream.AdUnit.tsx`, `AdUnit` |
| `components/ads/dream.SkipCreditBalance.tsx` | `react` | `dream.SkipCreditBalance.tsx`, `SkipCreditBalance` |
| `components/marketplace/dream.MarketplaceListingCard.tsx` | `next/link` | `dream.MarketplaceListingCard.tsx`, `(default)` |
| `components/marketplace/dream.MarketplaceRequestButton.tsx` | `lucide-react`, `react`, `toErrorMessage`, `queueLocalFirstMutation` | `dream.MarketplaceRequestButton.tsx`, `(default)` |

## Pages

- `app/marketplace/[id]/page.tsx`
- `app/marketplace/page.tsx`
- `app/marketplace/sell/page.tsx`
- `app/shop/page.tsx`
- `app/shop/sell/page.tsx`

## API Routes

- `app/api/ads/orders/route.ts`
- `app/api/ads/view/route.ts`
- `app/api/marketplace/request/route.ts`
- `app/api/marketplace/route.ts`
- `app/api/shop/route.ts`
- `app/api/skip-credits/balance/route.ts`
- `app/api/skip-credits/earn/route.ts`
- `app/api/skip-credits/use/route.ts`

## Code Files

### `app/api/ads/`

- `app/api/ads/orders/route.ts`
- `app/api/ads/view/route.ts`

### `app/api/marketplace/`

- `app/api/marketplace/request/route.ts`
- `app/api/marketplace/route.ts`

### `app/api/shop/`

- `app/api/shop/route.ts`

### `app/marketplace/`

- `app/marketplace/page.tsx`

### `app/marketplace/[id]/`

- `app/marketplace/[id]/page.tsx`

### `app/marketplace/sell/`

- `app/marketplace/sell/page.tsx`

### `app/shop/`

- `app/shop/page.tsx`

### `app/shop/sell/`

- `app/shop/sell/page.tsx`

### `components/ads/`

- `components/ads/dream.AdUnit.tsx`
- `components/ads/dream.SkipCreditBalance.tsx`

### `components/marketplace/`

- `components/marketplace/dream.MarketplaceListingCard.tsx`
- `components/marketplace/dream.MarketplaceRequestButton.tsx`

## Types

_No type files for this feature._

## Styles

_No style files for this feature._

## Capability Flags

**Supabase** (5 files)

---

<a name="settings-customization"></a>

# Settings / Customization

> Settings, appearance, privacy, safety, customization, and theme paths.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/settings/account/dream.DangerZoneActions.tsx` | `lucide-react`, `react` | `dream.DangerZoneActions.tsx`, `(default)` |
| `app/settings/account/page.tsx` | `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `next/server` | `/settings/account`, `page.tsx`, `(default)` |
| `app/settings/algorithm/page.tsx` | `(default)`, `(default)`, `createServerClient`, `safeGetUser`, `lucide-react`, `next/navigation` | `/settings/algorithm`, `page.tsx`, `(default)`, `metadata` |
| `app/settings/appearance/page.tsx` | `THEME_PRESETS`, `applyTheme`, `applyVoidTheme`, `isVoidThemeActive`, `DeTheme`, `useTheme` | `/settings/appearance`, `page.tsx`, `(default)` |
| `app/settings/controls/dream.ControlsClient.tsx` | `lucide-react`, `next/link`, `react`, `queueLocalFirstMutation`, `(default)` | `dream.ControlsClient.tsx`, `(default)` |
| `app/settings/controls/dream.PositionIndicatorToggle.tsx` | `react` | `dream.PositionIndicatorToggle.tsx`, `(default)` |
| `app/settings/controls/page.tsx` | `createServerClient`, `safeGetUser`, `next/navigation`, `next/server`, `(default)` | `/settings/controls`, `page.tsx`, `(default)`, `metadata` |
| `app/settings/data/dream.DataClient.tsx` | `lucide-react`, `next/link`, `react` | `dream.DataClient.tsx`, `(default)` |
| `app/settings/data/page.tsx` | `createServerClient`, `safeGetUser`, `next/navigation`, `next/server`, `(default)` | `/settings/data`, `page.tsx`, `(default)`, `metadata` |
| `app/settings/dreams/dreams-layout-editor.tsx` | `(default)`, `useDreamLayout`, `lucide-react` | `dreams-layout-editor.tsx`, `(default)` |
| `app/settings/dreams/page.tsx` | `(default)`, `lucide-react`, `next/link`, `(default)` | `/settings/dreams`, `page.tsx`, `(default)`, `metadata` |
| `app/settings/feed/page.tsx` | `next/navigation`, `next/server` | `/settings/feed`, `page.tsx`, `(default)` |
| `app/settings/help/page.tsx` | `(default)`, `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation` | `/settings/help`, `page.tsx`, `(default)`, `metadata` |
| `app/settings/notifications/page.tsx` | `(default)`, `lucide-react`, `react` | `/settings/notifications`, `page.tsx`, `(default)` |
| `app/settings/page.tsx` | `isOwnerEmail`, `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation` | `/settings`, `page.tsx`, `(default)`, `metadata` |
| `app/settings/privacy/dream.PrivacyClient.tsx` | `lucide-react`, `next/link`, `react`, `queueLocalFirstMutation` | `dream.PrivacyClient.tsx`, `(default)` |
| `app/settings/privacy/page.tsx` | `createServerClient`, `safeGetUser`, `next/navigation`, `next/server`, `(default)` | `/settings/privacy`, `page.tsx`, `(default)`, `metadata` |
| `app/settings/safety/page.tsx` | `(default)`, `BOOGIE_POLICY_VERSION`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `lucide-react` | `/settings/safety`, `page.tsx`, `(default)`, `metadata` |
| `app/settings/security/page.tsx` | `(default)`, `createClient`, `safeGetUser`, `buildAuthCallbackUrl`, `lucide-react`, `next/link` | `/settings/security`, `page.tsx`, `(default)` |
| `app/settings/widgets/page.tsx` | `(default)`, `lucide-react`, `next/link` | `/settings/widgets`, `page.tsx`, `(default)`, `metadata` |
| `components/customize/dream.GlobalCustomizeUI.tsx` | `(default)`, `(default)`, `(default)`, `(default)`, `(default)`, `(default)` | `dream.GlobalCustomizeUI.tsx`, `(default)` |
| `components/customize/dream.bar.CustomizeModeBar.tsx` | `useCustomizeMode` | `dream.bar.CustomizeModeBar.tsx`, `(default)` |
| `components/customize/dream.bar.CustomizeToolbar.tsx` | `useCustomizeMode` | `dream.bar.CustomizeToolbar.tsx`, `(default)` |
| `components/customize/panels/dream.panel.ColorPanel.tsx` | `useCustomizeMode`, `SKIN_PRESETS`, `react`, `react` | `dream.panel.ColorPanel.tsx`, `(default)`, `SlidePanel` |
| `components/customize/panels/dream.panel.EffectsPanel.tsx` | `useCustomizeMode`, `SlidePanel` | `dream.panel.EffectsPanel.tsx`, `(default)` |
| `components/customize/panels/dream.panel.FontPanel.tsx` | `useCustomizeMode`, `SkinFont`, `SlidePanel` | `dream.panel.FontPanel.tsx`, `(default)` |
| `components/customize/panels/dream.panel.LayoutPanel.tsx` | `useCustomizeMode`, `SkinLayout`, `SkinShadow`, `SlidePanel` | `dream.panel.LayoutPanel.tsx`, `(default)` |
| `components/panels/dream.panel.AlgorithmPanel.tsx` | `(default)`, `useDreamSystem`, `lucide-react` | `dream.panel.AlgorithmPanel.tsx`, `(default)` |
| `components/panels/dream.panel.AppearancePanel.tsx` | `THEME_PRESETS`, `applyTheme`, `DeTheme`, `useTheme`, `useDreamSystem`, `useCustomizeMode` | `dream.panel.AppearancePanel.tsx`, `(default)` |
| `components/panels/dream.panel.ConnectorsPanel.tsx` | `(default)`, `lucide-react` | `dream.panel.ConnectorsPanel.tsx`, `(default)` |
| `components/panels/dream.panel.ControlsPanel.tsx` | `(default)`, `useDreamSystem`, `lucide-react`, `react` | `dream.panel.ControlsPanel.tsx`, `(default)` |
| `components/panels/dream.panel.DataPanel.tsx` | `useDreamSystem`, `createClient`, `lucide-react`, `react` | `dream.panel.DataPanel.tsx`, `(default)` |
| `components/panels/dream.panel.FeedPanel.tsx` | `default` | `default` |
| `components/panels/dream.panel.FeedSettingsPanel.tsx` | `ALL_TOPICS`, `DEFAULT_TOPIC_IDS`, `FEED_TOPICS_KEY`, `loadActiveTopicIds`, `lucide-react`, `react` | `dream.panel.FeedSettingsPanel.tsx`, `(default)` |
| `components/panels/dream.panel.HelpPanel.tsx` | `useDreamSystem`, `lucide-react` | `dream.panel.HelpPanel.tsx`, `(default)` |
| `components/panels/dream.panel.MarketplacePanel.tsx` | `(default)`, `(default)`, `useDreamSystem`, `createClient`, `lucide-react`, `react` | `dream.panel.MarketplacePanel.tsx`, `(default)` |
| `components/panels/dream.panel.PrivacyPanel.tsx` | `useDreamSystem`, `lucide-react`, `react` | `dream.panel.PrivacyPanel.tsx`, `(default)` |
| `components/panels/dream.panel.ProfilePanel.tsx` | `(default)`, `DEFAULT_DREAMS`, `ProfileDream`, `(default)`, `createClient`, `safeGetUser` | `dream.panel.ProfilePanel.tsx`, `(default)` |
| `components/panels/dream.panel.SafetyPanel.tsx` | `BOOGIE_POLICY_VERSION`, `useDreamSystem`, `createClient`, `safeGetUser`, `@supabase/supabase-js`, `lucide-react` | `dream.panel.SafetyPanel.tsx`, `(default)` |
| `components/panels/dream.panel.SettingsPanel.tsx` | `useDreamSystem`, `SystemPanelId`, `createClient`, `safeGetUser`, `lucide-react`, `react` | `dream.panel.SettingsPanel.tsx`, `(default)` |
| `components/panels/dream.panel.WidgetsPanel.tsx` | `(default)`, `useDreamSystem`, `lucide-react`, `react` | `dream.panel.WidgetsPanel.tsx`, `(default)` |
| `components/panels/panelTypes.ts` | - | `PANEL_META`, `PanelMeta`, `SystemPanelId` |

## Pages

- `app/settings/account/page.tsx`
- `app/settings/algorithm/page.tsx`
- `app/settings/appearance/page.tsx`
- `app/settings/controls/page.tsx`
- `app/settings/data/page.tsx`
- `app/settings/dreams/page.tsx`
- `app/settings/feed/page.tsx`
- `app/settings/help/page.tsx`
- `app/settings/notifications/page.tsx`
- `app/settings/page.tsx`
- `app/settings/privacy/page.tsx`
- `app/settings/safety/page.tsx`
- `app/settings/security/page.tsx`
- `app/settings/widgets/page.tsx`

## API Routes

- `app/api/settings/appearance/route.ts`
- `app/api/settings/feed/route.ts`
- `app/api/settings/notifications/route.ts`
- `app/api/settings/privacy/route.ts`

## Code Files

### `app/settings/`

- `app/settings/page.tsx`

### `app/settings/account/`

- `app/settings/account/dream.DangerZoneActions.tsx`
- `app/settings/account/page.tsx`

### `app/settings/algorithm/`

- `app/settings/algorithm/page.tsx`

### `app/settings/appearance/`

- `app/settings/appearance/page.tsx`

### `app/settings/controls/`

- `app/settings/controls/dream.ControlsClient.tsx`
- `app/settings/controls/dream.PositionIndicatorToggle.tsx`
- `app/settings/controls/page.tsx`

### `app/settings/data/`

- `app/settings/data/dream.DataClient.tsx`
- `app/settings/data/page.tsx`

### `app/settings/dreams/`

- `app/settings/dreams/dreams-layout-editor.tsx`
- `app/settings/dreams/page.tsx`

### `app/settings/feed/`

- `app/settings/feed/page.tsx`

### `app/settings/help/`

- `app/settings/help/page.tsx`

### `app/settings/notifications/`

- `app/settings/notifications/page.tsx`

### `app/settings/privacy/`

- `app/settings/privacy/dream.PrivacyClient.tsx`
- `app/settings/privacy/page.tsx`

### `app/settings/safety/`

- `app/settings/safety/page.tsx`

### `app/settings/security/`

- `app/settings/security/page.tsx`

### `app/settings/widgets/`

- `app/settings/widgets/page.tsx`

### `components/customize/`

- `components/customize/dream.GlobalCustomizeUI.tsx`
- `components/customize/dream.bar.CustomizeModeBar.tsx`
- `components/customize/dream.bar.CustomizeToolbar.tsx`

### `components/customize/panels/`

- `components/customize/panels/dream.panel.ColorPanel.tsx`
- `components/customize/panels/dream.panel.EffectsPanel.tsx`
- `components/customize/panels/dream.panel.FontPanel.tsx`
- `components/customize/panels/dream.panel.LayoutPanel.tsx`

### `components/panels/`

- `components/panels/dream.panel.AlgorithmPanel.tsx`
- `components/panels/dream.panel.AppearancePanel.tsx`
- `components/panels/dream.panel.ConnectorsPanel.tsx`
- `components/panels/dream.panel.ControlsPanel.tsx`
- `components/panels/dream.panel.DataPanel.tsx`
- `components/panels/dream.panel.FeedPanel.tsx`
- `components/panels/dream.panel.FeedSettingsPanel.tsx`
- `components/panels/dream.panel.HelpPanel.tsx`
- `components/panels/dream.panel.MarketplacePanel.tsx`
- `components/panels/dream.panel.PrivacyPanel.tsx`
- `components/panels/dream.panel.ProfilePanel.tsx`
- `components/panels/dream.panel.SafetyPanel.tsx`
- `components/panels/dream.panel.SettingsPanel.tsx`
- `components/panels/dream.panel.WidgetsPanel.tsx`
- `components/panels/panelTypes.ts`

## Types

_No type files for this feature._

## Styles

- `styles/dream-shell.css`
- `styles/globals.css`
- `styles/home-dream.css`
- `styles/theme.css`
- `styles/view-transitions.css`

## Capability Flags

**Supabase** (7 files)

---

<a name="messages"></a>

# Messages / DMs

> Direct messages, conversations, message hooks, boards, and composer paths.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/api/messages/boards/route.ts` | `createServerClient`, `safeGetUser`, `next/server`, `zod` | `/api/messages/boards`, `POST` |
| `app/api/messages/route.ts` | `scanContent`, `reportChildSafetyIncident`, `scanMediaUrlsForChildSafety`, `safeGetUser`, `createServerClient`, `toErrorMessage` | `/api/messages`, `GET`, `POST` |
| `app/dreamdmbar/_components/DreamBarDataBridge.tsx` | `useDualRuntime`, `useDreamSystem`, `DIVIDER_H`, `SystemPanelId`, `EnginDispatcher`, `dreamOSBus` | `DreamBarDataBridge.tsx`, `(default)` |
| `app/dreamdmbar/_components/DreamSpaceRegion.tsx` | `(default)`, `useAccount`, `listSystemArtifacts`, `listVisibleArtifacts`, `restoreArtifact`, `restoreArtifactsFromOfflineCache` | `DreamSpaceRegion.tsx`, `(default)` |
| `app/dreamdmbar/_components/DreamWidgetGrid.tsx` | `WidgetInstance` | `DreamWidgetGrid.tsx`, `(default)` |
| `app/dreamdmbar/_components/HomeDreamRegion.tsx` | `lucide-react`, `next/navigation`, `react`, `(default)`, `(default)`, `(default)` | `HomeDreamRegion.tsx`, `(default)` |
| `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts` | `slog`, `TORRIDITY_LEDGER_CONFIG` | `InteractionSignal`, `SwipePathScore`, `TouchPoint`, `isLikelyBot`, `isSwipeBot`, `scoreBotLikelihood` |
| `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts` | `calculateRank`, `derivePostMassMeta`, `getPostMass` | `DREAMR_REASONS`, `DREAMR_WEIGHTS`, `DreamRSignals`, `ScoredPost`, `computeViewVelocity`, `dominantSignal` |
| `app/dreamdmbar/_components/dreamr/api/feedHandler.ts` | `filterByCloseFriends`, `loadVisibilityCircle`, `deriveNextCursor`, `parseFeedParams`, `getPrimaryPostMediaUrl`, `PostMediaShape` | `dreamrFeedHandler` |
| `app/dreamdmbar/_components/dreamr/api/route.ts` | `dreamrFeedHandler` | `GET` |
| `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx` | `bridge`, `react` | `dream.DreamRCore.tsx`, `(default)` |
| `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx` | `Point`, `analyzeSwipe`, `tallyView`, `enginBridge`, `react`, `react` | `dream.DreamRFeed.tsx`, `(default)`, `DREAMR_TOPICS` |
| `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx` | `(default)`, `(default)`, `(default)`, `FeedPost`, `uploadBlobToLedgerStorage`, `createClient` | `dreamsurface.dreamr.tsx`, `(default)` |
| `app/dreamdmbar/dreamspace/page.tsx` | `useDualRuntime`, `useDreamSystem`, `react` | `/dreamdmbar/dreamspace`, `page.tsx`, `(default)` |
| `app/dreamdmbar/dualruntime/page.tsx` | `(default)`, `useDreamSystem`, `react` | `/dreamdmbar/dualruntime`, `page.tsx`, `(default)` |
| `app/dreamdmbar/homedream/page.tsx` | `useDualRuntime`, `useDreamSystem`, `react` | `/dreamdmbar/homedream`, `page.tsx`, `(default)` |
| `app/dreamdmbar/layout.tsx` | `(default)`, `(default)`, `(default)`, `isOwnerEmail`, `isDevBypassActive`, `FeedPost` | `layout.tsx`, `(default)` |
| `app/dreamdmbar/page.tsx` | `next/navigation` | `/dreamdmbar`, `page.tsx`, `(default)` |
| `app/messages/boards/[id]/page.tsx` | `(default)`, `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation` | `/messages/boards/:id`, `page.tsx`, `(default)` |
| `app/messages/boards/new/page.tsx` | `lucide-react`, `next/link`, `next/navigation`, `react` | `/messages/boards/new`, `page.tsx`, `(default)` |
| `app/messages/boards/page.tsx` | `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `next/server` | `/messages/boards`, `page.tsx`, `(default)`, `metadata` |
| `app/messages/new/page.tsx` | `safeGetUser`, `createServerClient`, `@supabase/supabase-js`, `next/navigation`, `next/server` | `/messages/new`, `page.tsx`, `(default)` |
| `app/messages/page.tsx` | `(default)`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/messages`, `page.tsx`, `(default)` |
| `components/messaging/dream.BoardComposer.tsx` | `lucide-react`, `react` | `dream.BoardComposer.tsx`, `(default)` |
| `dreamdmbar/dream.GlowingLight.tsx` | `react` | `dream.GlowingLight.tsx`, `(default)`, `GlowingLightProps` |
| `dreamdmbar/dream.PhaseTrail.tsx` | `react`, `react` | `dream.PhaseTrail.tsx`, `(default)`, `PhaseTrailProps` |
| `dreamdmbar/dreamsurface.dreamdmbar.tsx` | `lucide-react`, `next/image`, `react`, `react`, `(default)`, `(default)` | `dreamsurface.dreamdmbar.tsx`, `(default)`, `BAR_H`, `NAV_H` |
| `dreamdmbar/hooks/useDreamBarContext.ts` | `next/navigation`, `react`, `BarIntentMode` | `useDreamBarContext`, `DreamBarContext`, `DreamBarSurface`, `detectSurface`, `resolveIntentOverride`, `useDreamBarContext` |
| `dreamdmbar/hooks/useDreamDMConversations.ts` | `RealtimePostgresInsertPayload`, `createClient`, `getOfflineRecord`, `putOfflineRecord`, `react` | `useDreamDMConversations`, `DMConversation`, `useDreamDMConversations` |
| `dreamdmbar/hooks/useDreamDMDraft.ts` | `deleteOfflineRecord`, `getOfflineRecord`, `putOfflineRecord`, `react` | `useDreamDMDraft`, `DraftPayload`, `cleanupStaleDrafts`, `getDraftAge`, `listAllDraftIds`, `useDreamDMDraft` |
| `dreamdmbar/hooks/useDreamDMMessages.ts` | `RealtimePostgresInsertPayload`, `createClient`, `getOfflineRecord`, `putOfflineRecord`, `react` | `useDreamDMMessages`, `DMMessage`, `useDreamDMMessages` |
| `dreamdmbar/hooks/useDreamSearch.ts` | `USER_FACING_ENGINES`, `createClient`, `react` | `useDreamSearch`, `SearchResult`, `SearchResultType`, `UseDreamSearchReturn`, `useDreamSearch` |
| `dreamdmbar/hooks/useMessagingCore.ts` | `uploadBlobToLedgerStorage`, `createClient`, `react`, `DMMessage`, `toErrorMessage` | `useMessagingCore`, `MediaType`, `SendMessageParams`, `UseMessagingCoreReturn`, `useMessagingCore` |
| `dreamdmbar/hooks/useModuleBarIntent.ts` | `ModuleBarAction`, `useDreamSystem`, `react` | `useModuleBarIntent`, `UseModuleBarIntentResult`, `useModuleBarIntent` |
| `dreamdmbar/hooks/useNotifications.ts` | `react` | `useNotifications`, `useNotifications` |
| `dreamdmbar/notifications/notificationHelpers.ts` | - | `DbNotificationContent`, `DbNotificationRow`, `UiNotification`, `UiNotificationType`, `applyOptimisticDelete`, `applyOptimisticMarkAll` |
| `dreamdmbar/notifications/useNotifications.ts` | `react`, `applyOptimisticDelete`, `applyOptimisticMarkAll`, `applyOptimisticRead`, `getUnreadCount`, `normalizeDbRow` | `useNotifications`, `UseNotificationsReturn`, `useNotifications` |
| `dreamdmbar/runtime/DreamSystemContext.tsx` | `DEFAULT_SPLIT_RATIO`, `SystemPanelId`, `moveTorus`, `torusFocusKey`, `createClient`, `getOfflineRecord` | `DreamSystemContext.tsx`, `useDreamSystem`, `BarIntent`, `BarIntentMode`, `DEFAULT_BAR_INTENT`, `DEFAULT_WORLD_FOCUS` |
| `dreamdmbar/runtime/barInteractions.ts` | - | `BAR_FLING_LINE_RATIO`, `BAR_FLING_TO_BOTTOM_VELOCITY_THRESHOLD_PX_PER_MS`, `BAR_FLING_TO_TOP_MIN_DRAG_PX`, `BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS`, `BAR_SNAP_TO_TOP_HEIGHT_RATIO`, `BAR_SNAP_TO_TOP_THRESHOLD_PX` |
| `dreamdmbar/runtime/bridgeSeamFlow.ts` | - | `SEAM_CHANNEL_COLORS`, `SEAM_DEFAULT_COLOR`, `SeamParticle`, `_resetIdCounter`, `channelColor`, `createIdleParticle` |
| `engine/generated/dreamdmbar.ts` | - | `DreamdmbarMap`, `dreamdmbar` |
| `src/engin/generated/dreamdmbar.ts` | - | `DreamdmbarMap`, `dreamdmbar` |

## Pages

- `app/dreamdmbar/dreamspace/page.tsx`
- `app/dreamdmbar/dualruntime/page.tsx`
- `app/dreamdmbar/homedream/page.tsx`
- `app/dreamdmbar/page.tsx`
- `app/messages/boards/[id]/page.tsx`
- `app/messages/boards/new/page.tsx`
- `app/messages/boards/page.tsx`
- `app/messages/new/page.tsx`
- `app/messages/page.tsx`

## API Routes

- `app/api/messages/boards/route.ts`
- `app/api/messages/route.ts`

## Code Files

### `app/api/messages/`

- `app/api/messages/boards/route.ts`
- `app/api/messages/route.ts`

### `app/dreamdmbar/`

- `app/dreamdmbar/layout.tsx`
- `app/dreamdmbar/page.tsx`

### `app/dreamdmbar/_components/`

- `app/dreamdmbar/_components/DreamBarDataBridge.tsx`
- `app/dreamdmbar/_components/DreamSpaceRegion.tsx`
- `app/dreamdmbar/_components/DreamWidgetGrid.tsx`
- `app/dreamdmbar/_components/HomeDreamRegion.tsx`
- `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts`
- `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts`
- `app/dreamdmbar/_components/dreamr/api/feedHandler.ts`
- `app/dreamdmbar/_components/dreamr/api/route.ts`
- `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx`
- `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx`
- `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`

### `app/dreamdmbar/dreamspace/`

- `app/dreamdmbar/dreamspace/page.tsx`

### `app/dreamdmbar/dualruntime/`

- `app/dreamdmbar/dualruntime/page.tsx`

### `app/dreamdmbar/homedream/`

- `app/dreamdmbar/homedream/page.tsx`

### `app/messages/`

- `app/messages/page.tsx`

### `app/messages/boards/`

- `app/messages/boards/[id]/page.tsx`
- `app/messages/boards/new/page.tsx`
- `app/messages/boards/page.tsx`

### `app/messages/new/`

- `app/messages/new/page.tsx`

### `components/messaging/`

- `components/messaging/dream.BoardComposer.tsx`

### `dreamdmbar/`

- `dreamdmbar/dream.GlowingLight.tsx`
- `dreamdmbar/dream.PhaseTrail.tsx`
- `dreamdmbar/dreamsurface.dreamdmbar.tsx`

### `dreamdmbar/hooks/`

- `dreamdmbar/hooks/useDreamBarContext.ts`
- `dreamdmbar/hooks/useDreamDMConversations.ts`
- `dreamdmbar/hooks/useDreamDMDraft.ts`
- `dreamdmbar/hooks/useDreamDMMessages.ts`
- `dreamdmbar/hooks/useDreamSearch.ts`
- `dreamdmbar/hooks/useMessagingCore.ts`
- `dreamdmbar/hooks/useModuleBarIntent.ts`
- `dreamdmbar/hooks/useNotifications.ts`

### `dreamdmbar/notifications/`

- `dreamdmbar/notifications/notificationHelpers.ts`
- `dreamdmbar/notifications/useNotifications.ts`

### `dreamdmbar/runtime/`

- `dreamdmbar/runtime/DreamSystemContext.tsx`
- `dreamdmbar/runtime/barInteractions.ts`
- `dreamdmbar/runtime/bridgeSeamFlow.ts`

### `engine/generated/`

- `engine/generated/dreamdmbar.ts`

### `src/engin/generated/`

- `src/engin/generated/dreamdmbar.ts`

## Types

_No type files for this feature._

## Styles

_No style files for this feature._

## Capability Flags

**Dual Runtime** (10 files) - **Supabase** (10 files) - **Event Bus** (5 files) - **React Context** (1 files) - **Runtime Registry** (1 files)

---

<a name="auth"></a>

# Auth

> Login, join, onboarding, OAuth callback, sessions, and setup routes.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/api/auth/logout/route.ts` | `createServerClient`, `next/server` | `/api/auth/logout`, `GET` |
| `app/api/auth/providers/route.ts` | `SUPABASE_CONFIG`, `next/server` | `/api/auth/providers`, `GET`, `OAuthProvidersResponse`, `UNKNOWN_OAUTH_PROVIDERS`, `getOAuthProvidersResponse` |
| `app/auth/callback/route.ts` | `resolveSafeNextPath`, `SUPABASE_CONFIG`, `createServerClientWithCustomCookies`, `next/headers`, `next/server` | `GET` |
| `app/auth/reset-password/page.tsx` | `createClient`, `buildAuthCallbackUrl`, `next/link`, `react` | `/auth/reset-password`, `page.tsx`, `(default)` |
| `app/auth/update-password/page.tsx` | `(default)`, `createClient`, `next/link`, `next/navigation`, `react` | `/auth/update-password`, `page.tsx`, `(default)` |
| `app/join/page.tsx` | `(default)`, `createClient`, `buildAuthCallbackUrl`, `next/image`, `next/link`, `next/navigation` | `/join`, `page.tsx`, `(default)` |
| `app/login/page.tsx` | `(default)`, `resolveSafeNextPath`, `createClient`, `buildAuthCallbackUrl`, `next/image`, `next/link` | `/login`, `page.tsx`, `(default)` |
| `app/onboarding/page.tsx` | `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `next/server` | `/onboarding`, `page.tsx`, `(default)`, `metadata` |
| `components/auth/dream.PasswordField.tsx` | `lucide-react`, `react` | `dream.PasswordField.tsx`, `(default)` |

## Pages

- `app/auth/reset-password/page.tsx`
- `app/auth/update-password/page.tsx`
- `app/join/page.tsx`
- `app/login/page.tsx`
- `app/onboarding/page.tsx`

## API Routes

- `app/api/auth/logout/route.ts`
- `app/api/auth/providers/route.ts`
- `app/api/setup/check/route.ts`
- `app/api/setup/google-oauth/route.ts`

## Code Files

### `app/api/auth/`

- `app/api/auth/logout/route.ts`
- `app/api/auth/providers/route.ts`

### `app/auth/callback/`

- `app/auth/callback/route.ts`

### `app/auth/reset-password/`

- `app/auth/reset-password/page.tsx`

### `app/auth/update-password/`

- `app/auth/update-password/page.tsx`

### `app/join/`

- `app/join/page.tsx`

### `app/login/`

- `app/login/page.tsx`

### `app/onboarding/`

- `app/onboarding/page.tsx`

### `components/auth/`

- `components/auth/dream.PasswordField.tsx`

## Types

_No type files for this feature._

## Styles

_No style files for this feature._

## Capability Flags

**Supabase** (6 files)

---

# System & Infrastructure

---

<a name="renderengin"></a>

# RenderEngin

> Reusable rendering service code used by visual Engins.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/daydream/render/page.tsx` | `next/navigation` | `/daydream/render`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/render/page.tsx` | `next/navigation` | `/engines/render`, `page.tsx`, `(default)`, `metadata` |
| `engins/renderengin/RenderEnginInlineSurface.tsx` | `react`, `EnginRuntime`, `RenderEnginRuleSet`, `RenderIntent`, `RenderServiceIntentEnvelope`, `(default)` | `RenderEnginInlineSurface.tsx`, `(default)` |
| `engins/renderengin/RenderEnginViewport.tsx` | `react`, `EnginRuntime`, `composeModelMatrix`, `createMeshBuffers`, `createRenderAsset`, `mat4LookAt` | `RenderEnginViewport.tsx`, `(default)` |
| `engins/renderengin/RenderStage.tsx` | `react`, `EnginRuntime`, `JsonObject`, `RenderEnginRuleSet`, `RenderIntent`, `RenderServiceIntentEnvelope` | `RenderStage.tsx`, `(default)`, `RenderStageProps`, `createInlineRenderIntent` |
| `engins/renderengin/advancedRendering.ts` | `mat4Identity`, `mat4Mul`, `mat4MulPrecise`, `mat4Transform`, `makeDualQuaternion`, `quatMul` | `RenderBoneStoragePlan`, `RenderCompressedGeometry`, `RenderDeviceRecoveryState`, `RenderIndirectDrawCommand`, `RenderMeshlet`, `RenderMorphTarget` |
| `engins/renderengin/animation.ts` | `mat4Mul`, `mat4Translation`, `mat4Scale`, `mat4FromQuat`, `Mat4`, `Quat` | `RenderAnimationChannel`, `RenderAnimationClip`, `RenderAnimationPath`, `RenderAnimationPose`, `RenderKeyframeQuat`, `RenderKeyframeVec3` |
| `engins/renderengin/assets.ts` | `authorizeDomainCapability`, `DomainAuthorizationContext`, `DomainCapability`, `DomainVisibility`, `JsonObject`, `JsonValue` | `ParsedRenderAsset`, `RenderAssetManifest`, `authorizeRenderAssetOperation`, `createContentEnginRenderHandoff`, `createGameEnginRenderHandoff`, `createParsedGlbRenderAsset` |
| `engins/renderengin/benchmarkProof.ts` | `JsonObject` | `RenderDeviceCapture`, `RenderMillionPolyProof`, `RenderTenMillionBenchmarkObject`, `RenderTenMillionBenchmarkScene`, `certifyTenMillionScene`, `createTenMillionPolygonProof` |
| `engins/renderengin/completionEvidence.ts` | `DomainObject`, `JsonObject`, `JsonValue` | `RenderCompletionEvidence`, `RenderEvidenceData`, `RenderEvidenceItem`, `RenderEvidenceStatus`, `createRenderCompletionEvidence` |
| `engins/renderengin/core.ts` | `DomainObject`, `DomainVisibility`, `EnginBaseState`, `JsonObject`, `JsonValue`, `EnginAction` | `DualQuaternion`, `EPS`, `GeometryCluster`, `Joint`, `LodLevel`, `Mat4` |
| `engins/renderengin/diagnostics.ts` | `JsonObject`, `MeshBuffers`, `RenderEnginFrameStats` | `RenderBenchmarkScene`, `RenderPerformanceReport`, `RenderPerformanceSample`, `createBenchmarkScene`, `createRenderPerformanceReport`, `evaluateRenderPerformanceGate` |
| `engins/renderengin/index.ts` | `*`, `*`, `default`, `default`, `createInlineRenderIntent`, `*` | `RenderEnginViewport`, `RenderStage`, `createInlineRenderIntent` |
| `engins/renderengin/lighting.ts` | `DomainObject`, `DomainVisibility`, `JsonObject`, `v3normalize`, `Vec3` | `RenderEnvironment`, `RenderEnvironmentData`, `RenderLight`, `RenderLightData`, `RenderLightKind`, `createRenderEnvironment` |
| `engins/renderengin/liveBenchmark.ts` | `JsonObject`, `WebGpuRenderEngin` | `RenderLiveBenchmarkResult`, `isMobileRenderUserAgent`, `runRenderLiveBenchmark`, `summarizeLiveBenchmark` |
| `engins/renderengin/materials.ts` | `DomainObject`, `DomainVisibility`, `JsonObject`, `clamp01`, `Vec3` | `RenderMaterial`, `RenderMaterialData`, `createRenderMaterial`, `packRenderMaterial`, `updateRenderMaterial` |
| `engins/renderengin/performanceIntegrity.ts` | `JsonObject` | `DEFAULT_RENDER_PERFORMANCE_THRESHOLDS`, `RenderPerformanceIntegrityThresholds`, `evaluateRenderPerformanceIntegrity` |
| `engins/renderengin/postProcessing.ts` | `JsonObject` | `RenderPostProcessGraph`, `RenderPostProcessPass`, `createRenderPostProcessGraph`, `executePostProcessPixel` |
| `engins/renderengin/renderSettings.ts` | `JsonObject` | `RenderPreviewMode`, `RenderQualitySettings`, `RenderQualityTier`, `createRenderQualitySettings`, `switchRenderPreviewMode` |
| `engins/renderengin/runtimeRegistration.ts` | `registerRuntimeEngin`, `RenderEnginRuleSet`, `RENDER_ENGIN_ID`, `RENDER_INTENT_TYPES` | `RenderEnginRuntimeRegistration` |
| `engins/renderengin/scene.ts` | `DomainObject`, `DomainVisibility`, `JsonObject`, `JsonValue`, `composeModelMatrix`, `mat4Mul` | `RenderScene`, `RenderSceneData`, `RenderSceneEnvironment`, `RenderSceneLayer`, `RenderSceneObject`, `RenderSceneObjectData` |
| `engins/renderengin/security.ts` | `JsonObject` | `RenderAuthorizationContext`, `RenderAuthorizationDecision`, `RenderCapabilityAction`, `authorizeRenderCapability`, `validateRenderAssetManifestServer` |
| `engins/renderengin/serviceIntegration.ts` | `JsonObject`, `RenderIntentType`, `createRenderServiceIntent`, `submitRenderServiceIntent`, `RenderServiceIntentEnvelope`, `routeForRenderSource` | `RENDER_SERVICE_COMMANDS`, `RENDER_SERVICE_HANDOFFS`, `RENDER_SERVICE_PIPELINE`, `RenderServiceCommand`, `RenderServiceHandoff`, `RenderServiceIntegrationResult` |
| `engins/renderengin/serviceRuntime.ts` | `JsonObject`, `JsonValue`, `EnginDispatcher`, `RenderDispatcherIntent`, `RENDER_ENGIN_ID`, `RENDER_INTENT_TYPES` | `RENDER_SERVICE_EVENT`, `RENDER_SERVICE_STORAGE_KEY`, `RenderServiceIntentEnvelope`, `RenderServiceSubmitResult`, `RenderWorkflowSurface`, `acknowledgeRenderServiceIntent` |
| `engins/renderengin/textures.ts` | `DomainObject`, `DomainVisibility`, `JsonObject` | `RenderTexture`, `RenderTextureData`, `RenderTextureFormat`, `RenderTextureRole`, `RenderTextureValidation`, `calculateMipLevelCount` |
| `engins/renderengin/viewportControls.ts` | `v3dot`, `v3length`, `v3normalize`, `v3scale`, `v3sub`, `Vec2` | `RenderCameraState`, `RenderPointerSample`, `RenderRay`, `RenderTransformMode`, `createAxisHelper`, `createBoundingBoxLines` |
| `engins/renderengin/virtualization.ts` | `v3length`, `v3sub`, `MeshBuffers`, `Vec3`, `RenderScene` | `RenderBounds`, `RenderCullingResult`, `RenderFrustumPlane`, `RenderInstanceBatch`, `RenderTerrainChunk`, `buildInstanceBatches` |
| `engins/renderengin/wasmAcceleration.ts` | `MeshBuffers`, `Vec3` | `RenderMeshBounds`, `RenderWasmAcceleration`, `RenderWasmAccelerationExports`, `computeRenderMeshBounds`, `fallbackRenderMeshBounds`, `getActiveRenderWasmAcceleration` |
| `engins/renderengin/webgpu.ts` | `mat4Identity`, `Mat4`, `MeshBuffers`, `Vec3`, `Vec4`, `Vertex` | `BATCH_SHADER`, `PackedVertexBuffer`, `RenderEnginFrameStats`, `RenderEnginGpuDeviceLease`, `RenderEnginGpuMesh`, `RenderEnginGpuTexture` |

## Pages

- `app/daydream/render/page.tsx`
- `app/engines/render/page.tsx`

## API Routes

_No API routes for this feature._

## Code Files

### `app/daydream/render/`

- `app/daydream/render/page.tsx`

### `app/engines/render/`

- `app/engines/render/page.tsx`

### `engins/renderengin/`

- `engins/renderengin/RenderEnginInlineSurface.tsx`
- `engins/renderengin/RenderEnginViewport.tsx`
- `engins/renderengin/RenderStage.tsx`
- `engins/renderengin/advancedRendering.ts`
- `engins/renderengin/animation.ts`
- `engins/renderengin/assets.ts`
- `engins/renderengin/benchmarkProof.ts`
- `engins/renderengin/completionEvidence.ts`
- `engins/renderengin/core.ts`
- `engins/renderengin/diagnostics.ts`
- `engins/renderengin/index.ts`
- `engins/renderengin/lighting.ts`
- `engins/renderengin/liveBenchmark.ts`
- `engins/renderengin/materials.ts`
- `engins/renderengin/performanceIntegrity.ts`
- `engins/renderengin/postProcessing.ts`
- `engins/renderengin/renderSettings.ts`
- `engins/renderengin/runtimeRegistration.ts`
- `engins/renderengin/scene.ts`
- `engins/renderengin/security.ts`
- `engins/renderengin/serviceIntegration.ts`
- `engins/renderengin/serviceRuntime.ts`
- `engins/renderengin/textures.ts`
- `engins/renderengin/viewportControls.ts`
- `engins/renderengin/virtualization.ts`
- `engins/renderengin/wasmAcceleration.ts`
- `engins/renderengin/webgpu.ts`

## Types

_No type files for this feature._

## Styles

_No style files for this feature._

## Capability Flags

**Dual Runtime** (1 files) - **Runtime Registry** (1 files)

---

<a name="ai-agents"></a>

# AI / Dr. Eams / Agents

> Dr. Eams, agents, mock/live AI client, tool router, and policy systems.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/api/agent/session/route.ts` | `getAgentOS`, `codeEnginHostTools`, `@supabase/supabase-js`, `next/server` | `/api/agent/session`, `POST` |
| `app/api/ai/boogieman/child-safety/route.ts` | `writeAuditLog`, `BOOGIE_POLICY_VERSION`, `boogieEnforce`, `checkRateLimit`, `isOwnerEmail`, `jsonApiError` | `/api/ai/boogieman/child-safety`, `POST` |
| `app/api/ai/boogieman/privacy-event/route.ts` | `writeAuditLog`, `BOOGIE_POLICY_VERSION`, `jsonApiError`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js` | `/api/ai/boogieman/privacy-event`, `POST` |
| `app/api/ai/boogieman/route.ts` | `writeAuditLog`, `BOOGIE_POLICY_VERSION`, `boogieEvaluate`, `checkRateLimit`, `boogiePolicyCheck`, `isOwnerEmail` | `/api/ai/boogieman`, `POST` |
| `app/api/ai/boogieman/status/route.ts` | `BOOGIE_POLICY_VERSION`, `next/server` | `/api/ai/boogieman/status`, `GET` |
| `app/api/ai/eams/route.ts` | `writeAuditLog`, `boogieEvaluate`, `makeConfirmToken`, `checkRateLimit`, `getCurrentRPM`, `DrEamsRunBodySchema` | `/api/ai/eams`, `POST` |
| `app/api/ai/execute/route.ts` | `writeAuditLog`, `verifyConfirmToken`, `checkRateLimit`, `ExecuteBodySchema`, `Intent`, `validateWithIdari` | `/api/ai/execute`, `POST` |
| `app/api/ai/idari/route.ts` | `assessGenerationLawScope`, `formatGenerationLawLoadCheck`, `GenerationLawAssessment`, `writeAuditLog`, `boogieEvaluate`, `groqChat` | `/api/ai/idari`, `POST` |
| `app/api/dr-eams/hf/route.ts` | `next/server` | `/api/dr-eams/hf`, `POST` |
| `app/api/dr-eams/run/route.ts` | `next/server` | `/api/dr-eams/run`, `POST` |
| `components/idari/dream.PlatformHealth.tsx` | `GetPlatformMetricsResponse`, `PLATFORM_HEALTH_TARGETS`, `react` | `dream.PlatformHealth.tsx`, `PlatformHealth` |
| `dr-eams/ai/CIC.ts` | - | `CIC` |
| `dr-eams/ai/audit.ts` | `BOOGIE_POLICY_VERSION`, `createServerClient` | `writeAuditLog` |
| `dr-eams/ai/boogie-policy.ts` | - | `BOOGIE_POLICY_VERSION`, `BoogiePolicyVersion`, `CATEGORY_SEVERITY`, `DEFAULT_DURATIONS_SECONDS`, `ENFORCEMENT_ACTIONS`, `ENFORCEMENT_SCOPES` |
| `dr-eams/ai/boogie-verifier.ts` | `createServerClient`, `ActorContext`, `AgentType`, `BoogieDecision`, `BoogieIntentDecision`, `BoogieOutput` | `detectSignals`, `redactSecrets`, `verifyIntents` |
| `dr-eams/ai/boogieman.ts` | `uuid`, `BOOGIE_POLICY_VERSION`, `DEFAULT_DURATIONS_SECONDS`, `RECOVER_STEPS`, `RULE_CODES`, `STRIKE_EXPIRY_DAYS` | `BLAST_RADIUS_ESCALATION_THRESHOLD`, `BOOGIE_POLICY_VERSION`, `BoogieEnforceInput`, `CONTAINMENT_ACTIONS`, `boogieEnforce`, `boogieEvaluate` |
| `dr-eams/ai/capability-gate.ts` | `isOwnerEmail`, `createServerClient`, `safeGetUser`, `ActorContext`, `IntentType` | `authorizeIntent`, `authorizeIntents`, `buildActorContext`, `getRoleRank`, `hasCapability`, `meetsMinimumRole` |
| `dr-eams/ai/client.ts` | - | `AiAgent`, `AiMessage`, `AiResponse`, `callAi` |
| `dr-eams/ai/confirm-token.ts` | `createServerClient`, `UIContext`, `crypto` | `consumeConfirmToken`, `generateConfirmToken`, `storeConfirmToken`, `verifyConfirmToken` |
| `dr-eams/ai/confirm.ts` | `crypto` | `makeConfirmToken`, `verifyConfirmToken` |
| `dr-eams/ai/groq.ts` | - | `GroqChatOptions`, `GroqMessage`, `GroqRole`, `groqChat`, `groqHealthCheck` |
| `dr-eams/ai/handlers/dreams.ts` | `DreamAddFromPresetPayload`, `DreamConfigPatchPayload`, `DreamOpenPayload`, `DreamPreviewPayload`, `DreamRemovePayload`, `DreamReorderPayload` | `handleDreamAddFromPreset`, `handleDreamConfigPatch`, `handleDreamOpen`, `handleDreamPreview`, `handleDreamRemove`, `handleDreamReorder` |
| `dr-eams/ai/handlers/index.ts` | `registerHandler`, `handleHomeAnchorSetState`, `handleHomeMenuOpen`, `handleNavDelta`, `handleDreamAddFromPreset`, `handleDreamConfigPatch` | `registerAllHandlers` |
| `dr-eams/ai/handlers/navigation.ts` | `HomeAnchorSetStatePayload`, `NavDeltaPayload`, `ToolHandler` | `handleHomeAnchorSetState`, `handleHomeMenuOpen`, `handleNavDelta` |
| `dr-eams/ai/handlers/social.ts` | `DraftSavePayload`, `FollowUserPayload`, `PostCreatePayload`, `PostLikePayload`, `SearchPayload`, `crypto` | `handleDraftSave`, `handleFollowUser`, `handlePostCreate`, `handlePostLike`, `handleSearch` |
| `dr-eams/ai/idempotency.ts` | `createServerClient` | `checkIdempotency` |
| `dr-eams/ai/rate-limiter.ts` | `createServerClient` | `RATE_LIMITS`, `RateLimitConfig`, `checkRateLimit`, `getCurrentRPM` |
| `dr-eams/ai/rateLimit.ts` | `createServerClient` | `RateLimitResult`, `checkRateLimit`, `getCurrentRPM` |
| `dr-eams/ai/schemas.ts` | `zod` | `Agent`, `AgentSchema`, `AppealEntry`, `AppealEntrySchema`, `AppealRequest`, `AppealRequestSchema` |
| `dr-eams/ai/tfBackend.ts` | `@tensorflow/tfjs-backend-webgpu`, `@tensorflow/tfjs` | `initTfBackend` |
| `dr-eams/ai/tool-router.ts` | `SupabaseClient`, `ActorContext`, `Intent`, `IntentType`, `ToolResult`, `UIContext` | `HandlerContext`, `ToolHandler`, `executeIntent`, `executeIntents`, `getHandler`, `registerHandler` |
| `dr-eams/ai/triad.ts` | `groqChat`, `GroqMessage`, `IntentSchema`, `Intent`, `IntentType`, `uuid` | `AI_MODELS`, `CANONICAL_NAV_ROUTES`, `boogiePolicyCheck`, `getOwnerEmail`, `isOwnerEmail`, `planWithEams` |
| `dr-eams/animation/DrEamsAnimator.ts` | - | `DrEamsAction`, `DrEamsAnimator` |
| `dr-eams/search/drEamsSearch.ts` | - | `DrEamsParsedReply`, `DrEamsRequestBody`, `NAV_SUGGESTIONS`, `NavSuggestion`, `buildDrEamsRequest`, `buildDreamDMUrl` |
| `dr-eams/tools.ts` | - | `CurationAction`, `CurationRefreshSliceInput`, `DeviceMode`, `DrEamsActionName`, `DrEamsTools`, `NavAction` |
| `engine/agents/adari.ts` | `node:fs`, `node:path` | `AdariCheck`, `AdariReport`, `assertBuildInvariants`, `getBuildReport` |
| `engine/agents/agentBus.ts` | `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `Intent` | `GameEnginAgentRole`, `IdariEventDetail`, `IdariEventType`, `InnerDreamsEventDetail`, `InnerDreamsEventType`, `Intent` |
| `engine/agents/boogieManAI.ts` | `BoogieManAgent` | `BOOGIEMAN_EVENT`, `PolicyCheck`, `PolicyResult`, `PolicyVerdict`, `checkPolicy`, `createBoogieManAgent` |
| `engine/agents/drEamsMode.ts` | - | `DREAMS_MODE_EVENT`, `DREAMS_MODE_STORAGE_KEY`, `getDrEamsMode`, `onDrEamsModeChange`, `setDrEamsMode` |
| `engine/agents/dreamengin.ts` | - | `AI_TRIAD`, `AXIOMS`, `CONNECTION_PATH_COUNT`, `CORE_SURFACES`, `DAYDREAM_SURFACES`, `DESIGN_TOKENS` |
| `engine/agents/idari.ts` | `IDARiAgent` | `GENERATION_LAW_WEIGHTS`, `GenerationLawAssessment`, `GenerationLawMode`, `IDARI_EVENT`, `IDARiAction`, `IDARiRequest` |
| `engine/agents/idariLoop.ts` | `createPatchPlan`, `PatchPlan`, `PatchRisk`, `getSnapshot`, `TelemetrySnapshot`, `correlate` | `LoopHealthSummary`, `LoopIteration`, `LoopSnapshotSummary`, `LoopStatus`, `RemediationLoopOptions`, `buildFallbackPatchPlan` |
| `engine/agents/teachBus.ts` | - | `TeachEvent`, `emitTeach`, `hasTaught`, `markTaught`, `onTeach` |
| `engine/agents/uiActions.ts` | `setDarkMode` | `UiActionContext`, `UiActionResult`, `executeUiAction`, `getUiCapabilities` |
| `scripts/check-build-memory-drift.mjs` | `node:fs`, `node:path` | `check-build-memory-drift.mjs` |
| `scripts/sync-build-memory.mjs` | `node:fs`, `node:path`, `"`]([^` | `name` |

## Pages

_No page routes for this feature._

## API Routes

- `app/api/admin/ai-chat/route.ts`
- `app/api/admin/ai-request/route.ts`
- `app/api/agent/session/route.ts`
- `app/api/ai/boogieman/child-safety/route.ts`
- `app/api/ai/boogieman/privacy-event/route.ts`
- `app/api/ai/boogieman/route.ts`
- `app/api/ai/boogieman/status/route.ts`
- `app/api/ai/eams/route.ts`
- `app/api/ai/execute/route.ts`
- `app/api/ai/idari/route.ts`

## Code Files

### `app/api/agent/`

- `app/api/agent/session/route.ts`

### `app/api/ai/`

- `app/api/ai/boogieman/child-safety/route.ts`
- `app/api/ai/boogieman/privacy-event/route.ts`
- `app/api/ai/boogieman/route.ts`
- `app/api/ai/boogieman/status/route.ts`
- `app/api/ai/eams/route.ts`
- `app/api/ai/execute/route.ts`
- `app/api/ai/idari/route.ts`

### `app/api/dr-eams/`

- `app/api/dr-eams/hf/route.ts`
- `app/api/dr-eams/run/route.ts`

### `components/idari/`

- `components/idari/dream.PlatformHealth.tsx`

### `dr-eams/`

- `dr-eams/tools.ts`

### `dr-eams/ai/`

- `dr-eams/ai/CIC.ts`
- `dr-eams/ai/audit.ts`
- `dr-eams/ai/boogie-policy.ts`
- `dr-eams/ai/boogie-verifier.ts`
- `dr-eams/ai/boogieman.ts`
- `dr-eams/ai/capability-gate.ts`
- `dr-eams/ai/client.ts`
- `dr-eams/ai/confirm-token.ts`
- `dr-eams/ai/confirm.ts`
- `dr-eams/ai/groq.ts`
- `dr-eams/ai/idempotency.ts`
- `dr-eams/ai/rate-limiter.ts`
- `dr-eams/ai/rateLimit.ts`
- `dr-eams/ai/schemas.ts`
- `dr-eams/ai/tfBackend.ts`
- `dr-eams/ai/tool-router.ts`
- `dr-eams/ai/triad.ts`

### `dr-eams/ai/handlers/`

- `dr-eams/ai/handlers/dreams.ts`
- `dr-eams/ai/handlers/index.ts`
- `dr-eams/ai/handlers/navigation.ts`
- `dr-eams/ai/handlers/social.ts`

### `dr-eams/animation/`

- `dr-eams/animation/DrEamsAnimator.ts`

### `dr-eams/search/`

- `dr-eams/search/drEamsSearch.ts`

### `engine/agents/`

- `engine/agents/adari.ts`
- `engine/agents/agentBus.ts`
- `engine/agents/boogieManAI.ts`
- `engine/agents/drEamsMode.ts`
- `engine/agents/dreamengin.ts`
- `engine/agents/idari.ts`
- `engine/agents/idariLoop.ts`
- `engine/agents/teachBus.ts`
- `engine/agents/uiActions.ts`

### `scripts/`

- `scripts/check-build-memory-drift.mjs`
- `scripts/sync-build-memory.mjs`

## Types

_No type files for this feature._

## Styles

_No style files for this feature._

## Capability Flags

**Dual Runtime** (1 files) - **Supabase** (12 files)

---

<a name="supabase-db"></a>

# Supabase / Database

> Supabase clients, migrations, policies, schema, and database-backed app behavior.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `app/api/account/delete-data/route.ts` | `writeAuditLog`, `jsonApiError`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/account/delete-data`, `POST` |
| `app/api/account/delete-dream/route.ts` | `runTriadConsensus`, `writeAuditLog`, `jsonApiError`, `createServerClient`, `createServiceClient`, `safeGetUser` | `/api/account/delete-dream`, `POST` |
| `app/api/account/export-data/route.ts` | `jsonApiError`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/account/export-data`, `GET` |
| `app/api/activity/track/route.ts` | `calculateActivityPoints`, `calculateDecayDate`, `ActivityVerification`, `TrackActivityRequest`, `TrackActivityResponse`, `VERIFICATION_STRENGTH` | `/api/activity/track`, `POST` |
| `app/api/admin/ai-chat/route.ts` | `isAdminLocked`, `isOwner`, `triggerAdminLockout`, `groqChat`, `GroqMessage`, `AI_MODELS` | `/api/admin/ai-chat`, `POST` |
| `app/api/admin/ai-request/route.ts` | `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/api/admin/ai-request`, `POST` |
| `app/api/admin/child-safety/route.ts` | `isOwnerEmail`, `jsonApiError`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/admin/child-safety`, `GET`, `POST` |
| `app/api/admin/code-files/route.ts` | `isAdminLocked`, `isDomainBlocked`, `isOwner`, `triggerAdminLockout`, `createServerClient`, `safeGetUser` | `/api/admin/code-files`, `FileNode`, `POST` |
| `app/api/admin/observability/route.ts` | `isOwnerEmail`, `jsonApiError`, `getBufferStats`, `getSnapshot`, `correlate`, `buildImmediateRemediationAction` | `/api/admin/observability`, `GET` |
| `app/api/ads/orders/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/ads/orders`, `POST` |
| `app/api/ads/view/route.ts` | `qualifiesForPremiumCPV`, `calculateActivityRevenueSplit`, `calculateSkipCreditsEarned`, `AdView`, `TrackAdViewRequest`, `TrackAdViewResponse` | `/api/ads/view`, `POST` |
| `app/api/agent/session/route.ts` | `getAgentOS`, `codeEnginHostTools`, `@supabase/supabase-js`, `next/server` | `/api/agent/session`, `POST` |
| `app/api/ai/boogieman/child-safety/route.ts` | `writeAuditLog`, `BOOGIE_POLICY_VERSION`, `boogieEnforce`, `checkRateLimit`, `isOwnerEmail`, `jsonApiError` | `/api/ai/boogieman/child-safety`, `POST` |
| `app/api/ai/boogieman/privacy-event/route.ts` | `writeAuditLog`, `BOOGIE_POLICY_VERSION`, `jsonApiError`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js` | `/api/ai/boogieman/privacy-event`, `POST` |
| `app/api/ai/boogieman/route.ts` | `writeAuditLog`, `BOOGIE_POLICY_VERSION`, `boogieEvaluate`, `checkRateLimit`, `boogiePolicyCheck`, `isOwnerEmail` | `/api/ai/boogieman`, `POST` |
| `app/api/ai/boogieman/status/route.ts` | `BOOGIE_POLICY_VERSION`, `next/server` | `/api/ai/boogieman/status`, `GET` |
| `app/api/ai/eams/route.ts` | `writeAuditLog`, `boogieEvaluate`, `makeConfirmToken`, `checkRateLimit`, `getCurrentRPM`, `DrEamsRunBodySchema` | `/api/ai/eams`, `POST` |
| `app/api/ai/execute/route.ts` | `writeAuditLog`, `verifyConfirmToken`, `checkRateLimit`, `ExecuteBodySchema`, `Intent`, `validateWithIdari` | `/api/ai/execute`, `POST` |
| `app/api/ai/idari/route.ts` | `assessGenerationLawScope`, `formatGenerationLawLoadCheck`, `GenerationLawAssessment`, `writeAuditLog`, `boogieEvaluate`, `groqChat` | `/api/ai/idari`, `POST` |
| `app/api/appeal/route.ts` | `writeAuditLog`, `BOOGIE_POLICY_VERSION`, `RULE_CODES`, `AppealRequestSchema`, `jsonApiError`, `createServerClient` | `/api/appeal`, `POST` |
| `app/api/auth/logout/route.ts` | `createServerClient`, `next/server` | `/api/auth/logout`, `GET` |
| `app/api/auth/providers/route.ts` | `SUPABASE_CONFIG`, `next/server` | `/api/auth/providers`, `GET`, `OAuthProvidersResponse`, `UNKNOWN_OAUTH_PROVIDERS`, `getOAuthProvidersResponse` |
| `app/api/blocks/route.ts` | `jsonApiError`, `createServerClient`, `safeGetUser`, `next/server`, `zod`, `toErrorMessage` | `/api/blocks`, `DELETE`, `GET`, `POST` |
| `app/api/ci/run/route.ts` | `runCiCommand`, `next/server` | `/api/ci/run`, `POST` |
| `app/api/close-friends/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/close-friends`, `DELETE`, `GET`, `POST` |
| `app/api/codeengin/diagnostics/route.ts` | `assertCodeEnginAccess`, `diagnoseFile`, `diagnoseWorkspace`, `safeErrorMessage`, `next/server` | `/api/codeengin/diagnostics`, `POST` |
| `app/api/codeengin/file/route.ts` | `assertCodeEnginAccess`, `safeErrorMessage`, `createProjectFile`, `deleteProjectFile`, `moveProjectFile`, `readProjectFile` | `/api/codeengin/file`, `POST` |
| `app/api/codeengin/git/route.ts` | `assertCodeEnginAccess`, `getGitDiff`, `getGitLog`, `getGitStatus`, `safeErrorMessage`, `next/server` | `/api/codeengin/git`, `POST` |
| `app/api/codeengin/run/route.ts` | `assertCodeEnginAccess`, `safeErrorMessage`, `listRunnerCommands`, `runCodeEnginCommand`, `next/server` | `/api/codeengin/run`, `GET`, `POST` |
| `app/api/codeengin/search/route.ts` | `assertCodeEnginAccess`, `safeErrorMessage`, `searchWorkspace`, `next/server` | `/api/codeengin/search`, `POST` |
| `app/api/codeengin/upload/route.ts` | `child_process`, `fs/promises`, `os`, `path`, `assertCodeEnginAccess`, `CODEENGIN_BLOCKED_SEGMENTS` | `/api/codeengin/upload`, `POST` |
| `app/api/codeengin/workspace/route.ts` | `assertCodeEnginAccess`, `buildProjectGraph`, `safeErrorMessage`, `createCodeEnginWorkspace`, `getWorkspaceOverview`, `listEditableFiles` | `/api/codeengin/workspace`, `GET`, `POST` |
| `app/api/comments/route.ts` | `scanContent`, `reportChildSafetyIncident`, `createServerClient`, `safeGetUser`, `crypto`, `next/server` | `/api/comments`, `DELETE`, `GET`, `POST` |
| `app/api/connectors/[provider]/connect/route.ts` | `blueskyVerify`, `githubVerify`, `mastodonVerify`, `nostrVerify`, `redditVerify`, `youtubeVerify` | `/api/connectors/[provider]/connect`, `POST` |
| `app/api/connectors/[provider]/disconnect/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/connectors/[provider]/disconnect`, `DELETE` |
| `app/api/connectors/[provider]/items/route.ts` | `safeGetUser`, `createServerClient`, `toErrorMessage`, `@supabase/supabase-js`, `next/server` | `/api/connectors/[provider]/items`, `GET` |
| `app/api/connectors/[provider]/sync/route.ts` | `reconcileConnector`, `DISPATCH_SUPPORTED_PROVIDERS`, `createServerClient`, `safeGetUser`, `ConnectorSyncResponse`, `@supabase/supabase-js` | `/api/connectors/[provider]/sync`, `POST` |
| `app/api/connectors/[provider]/verify/route.ts` | `blueskyVerify`, `githubVerify`, `mastodonVerify`, `nostrVerify`, `redditVerify`, `youtubeVerify` | `/api/connectors/[provider]/verify`, `GET` |
| `app/api/connectors/cron/route.ts` | `ReconcileResult`, `reconcileConnector`, `DISPATCH_SUPPORTED_PROVIDERS`, `isCronAuthorised`, `createServiceClient`, `@supabase/supabase-js` | `/api/connectors/cron`, `GET` |
| `app/api/connectors/instagram/oauth/callback/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/headers`, `next/server` | `/api/connectors/instagram/oauth/callback`, `GET` |
| `app/api/connectors/instagram/oauth/start/route.ts` | `next/headers`, `next/server` | `/api/connectors/instagram/oauth/start`, `GET` |
| `app/api/connectors/status/route.ts` | `ConnectorStatus`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/connectors/status`, `ConnectorStatusEntry`, `GET` |
| `app/api/connectors/webhooks/[provider]/route.ts` | `supportsWebhook`, `supportsWebhookVerification`, `extractMetaWebhookChallenge`, `extractYouTubeWebSubChallenge`, `@supabase/supabase-js`, `next/server` | `/api/connectors/webhooks/[provider]`, `GET`, `POST` |
| `app/api/connectors/youtube/oauth/callback/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/headers`, `next/server` | `/api/connectors/youtube/oauth/callback`, `GET` |
| `app/api/connectors/youtube/oauth/start/route.ts` | `next/headers`, `next/server` | `/api/connectors/youtube/oauth/start`, `GET` |
| `app/api/content/generative-fill/route.ts` | `createServerClient`, `safeGetUser`, `next/server`, `zod`, `toErrorMessage` | `/api/content/generative-fill`, `POST` |
| `app/api/content/intelligence/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `zod`, `toErrorMessage` | `/api/content/intelligence`, `POST` |
| `app/api/content/transcribe/route.ts` | `parseSRT`, `parseVTT`, `totalDurationMs`, `createServerClient`, `safeGetUser`, `next/server` | `/api/content/transcribe`, `POST` |
| `app/api/content/voice-clone/route.ts` | `estimateDurationSeconds`, `createServerClient`, `safeGetUser`, `next/server`, `zod`, `toErrorMessage` | `/api/content/voice-clone`, `POST` |
| `app/api/contentengin/assets/[assetId]/export/gameengin/route.ts` | `safeSegment`, `safeUnder`, `next/server`, `fs/promises`, `path` | `/api/contentengin/assets/[assetId]/export/gameengin`, `POST` |
| `app/api/contentengin/assets/[assetId]/route.ts` | `safeUnder`, `next/server`, `fs/promises`, `path` | `/api/contentengin/assets/[assetId]`, `GET` |
| `app/api/contentengin/jobs/[jobId]/route.ts` | `next/server` | `/api/contentengin/jobs/[jobId]`, `GET` |
| `app/api/contentengin/jobs/route.ts` | `next/server`, `buildAsset`, `writeAssetBundle`, `zipDirectory`, `path` | `/api/contentengin/jobs`, `ContentEnginJobType`, `GET`, `POST` |
| `app/api/contentengin/upload/route.ts` | `next/server`, `analyzeImageBytes` | `/api/contentengin/upload`, `POST` |
| `app/api/dr-eams/hf/route.ts` | `next/server` | `/api/dr-eams/hf`, `POST` |
| `app/api/dr-eams/run/route.ts` | `next/server` | `/api/dr-eams/run`, `POST` |
| `app/api/drafts/[id]/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `zod` | `/api/drafts/[id]`, `DELETE`, `PATCH` |
| `app/api/drafts/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `zod`, `toErrorMessage` | `/api/drafts`, `GET`, `POST` |
| `app/api/dream-windows/[id]/route.ts` | `DreamWindowInstance`, `DREAM_WINDOW_STATES`, `validateDreamWindowLayers`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js` | `/api/dream-windows/[id]`, `DELETE`, `GET`, `PATCH` |
| `app/api/dream-windows/route.ts` | `DREAM_WINDOW_STATES`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/dream-windows`, `GET`, `POST` |
| `app/api/dreamengin/os-status/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/dreamengin/os-status`, `GET` |
| `app/api/dreamr/feed/route.ts` | `dreamrFeedHandler` | `/api/dreamr/feed`, `GET` |
| `app/api/dreamr/suggested/route.ts` | `rankFeed`, `scoreDreamRPost`, `ScoredPost`, `filterByCloseFriends`, `loadVisibilityCircle`, `getPrimaryPostMediaUrl` | `/api/dreamr/suggested`, `GET` |
| `app/api/dreamr/tally/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `zod` | `/api/dreamr/tally`, `POST` |
| `app/api/dreams/feed/route.ts` | `createServerClient`, `safeGetUser`, `resolveFeedHost`, `HostKind`, `DreamDefinition`, `DreamInstance` | `/api/dreams/feed`, `GET`, `POST` |
| `app/api/dreams/instances/route.ts` | `createServerClient`, `safeGetUser`, `Surface`, `next/server`, `zod` | `/api/dreams/instances`, `GET` |
| `app/api/dreams/transfer/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/dreams/transfer`, `POST` |
| `app/api/embed-feed/route.ts` | `EmbedFeedItem`, `loadEmbedFeed`, `createServerClient`, `@supabase/supabase-js`, `next/server` | `/api/embed-feed`, `EmbedFeedResponse`, `GET` |
| `app/api/favorites/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/favorites`, `DELETE`, `GET`, `POST` |
| `app/api/feed/route.ts` | `sortByVisibilityScore`, `getPrimaryPostMediaUrl`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/feed`, `GET`, `UnifiedFeedEntry` |
| `app/api/follow/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/follow`, `DELETE`, `GET`, `POST` |
| `app/api/gal/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/gal`, `POST` |
| `app/api/game-scores/route.ts` | `CARTRIDGE_MANIFEST`, `createServerClient`, `safeGetUser`, `next/server`, `zod`, `toErrorMessage` | `/api/game-scores`, `GET`, `PATCH`, `POST` |
| `app/api/gameengin/crash-report/route.ts` | `CRASH_REPORT_MAX_BYTES`, `isActiveCartridge`, `recordCrashReport`, `next/server`, `toErrorMessage` | `/api/gameengin/crash-report`, `POST` |
| `app/api/health/route.ts` | `next/server` | `/api/health`, `GET` |
| `app/api/home-layout/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/home-layout`, `GET`, `POST` |
| `app/api/journey/route.ts` | `createServerClient`, `safeGetUser`, `Json`, `next/server`, `toErrorMessage` | `/api/journey`, `GET`, `POST` |
| `app/api/lab/benchmarks/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/lab/benchmarks`, `POST` |
| `app/api/ledger-media/route.ts` | `decodeLedgerBlob`, `createServerClient`, `next/server`, `toErrorMessage` | `/api/ledger-media`, `GET` |
| `app/api/likes/route.ts` | `createServerClient`, `safeGetUser`, `next/server`, `toErrorMessage` | `/api/likes`, `DELETE`, `GET`, `POST` |

_Trimmed to first 80 file edges for this feature._

## Pages

_No page routes for this feature._

## API Routes

- `app/api/account/delete-data/route.ts`
- `app/api/account/delete-dream/route.ts`
- `app/api/account/export-data/route.ts`
- `app/api/activity/track/route.ts`
- `app/api/admin/ai-chat/route.ts`
- `app/api/admin/ai-request/route.ts`
- `app/api/admin/child-safety/route.ts`
- `app/api/admin/code-files/route.ts`
- `app/api/admin/observability/route.ts`
- `app/api/ads/orders/route.ts`
- `app/api/ads/view/route.ts`
- `app/api/agent/session/route.ts`
- `app/api/ai/boogieman/child-safety/route.ts`
- `app/api/ai/boogieman/privacy-event/route.ts`
- `app/api/ai/boogieman/route.ts`
- `app/api/ai/boogieman/status/route.ts`
- `app/api/ai/eams/route.ts`
- `app/api/ai/execute/route.ts`
- `app/api/ai/idari/route.ts`
- `app/api/appeal/route.ts`
- `app/api/auth/logout/route.ts`
- `app/api/auth/providers/route.ts`
- `app/api/blocks/route.ts`
- `app/api/ci/run/route.ts`
- `app/api/close-friends/route.ts`
- `app/api/codeengin/diagnostics/route.ts`
- `app/api/codeengin/file/route.ts`
- `app/api/codeengin/git/route.ts`
- `app/api/codeengin/run/route.ts`
- `app/api/codeengin/search/route.ts`
- `app/api/codeengin/upload/route.ts`
- `app/api/codeengin/workspace/route.ts`
- `app/api/comments/route.ts`
- `app/api/connectors/[provider]/connect/route.ts`
- `app/api/connectors/[provider]/disconnect/route.ts`
- `app/api/connectors/[provider]/items/route.ts`
- `app/api/connectors/[provider]/sync/route.ts`
- `app/api/connectors/[provider]/verify/route.ts`
- `app/api/connectors/cron/route.ts`
- `app/api/connectors/instagram/oauth/callback/route.ts`
- `app/api/connectors/instagram/oauth/start/route.ts`
- `app/api/connectors/status/route.ts`
- `app/api/connectors/webhooks/[provider]/route.ts`
- `app/api/connectors/youtube/oauth/callback/route.ts`
- `app/api/connectors/youtube/oauth/start/route.ts`
- `app/api/content/generative-fill/route.ts`
- `app/api/content/intelligence/route.ts`
- `app/api/content/transcribe/route.ts`
- `app/api/content/voice-clone/route.ts`
- `app/api/contentengin/assets/[assetId]/export/gameengin/route.ts`
- `app/api/contentengin/assets/[assetId]/route.ts`
- `app/api/contentengin/jobs/[jobId]/route.ts`
- `app/api/contentengin/jobs/route.ts`
- `app/api/contentengin/upload/route.ts`
- `app/api/dr-eams/hf/route.ts`
- `app/api/dr-eams/run/route.ts`
- `app/api/drafts/[id]/route.ts`
- `app/api/drafts/route.ts`
- `app/api/dream-windows/[id]/route.ts`
- `app/api/dream-windows/route.ts`
- `app/api/dreamengin/os-status/route.ts`
- `app/api/dreamr/feed/route.ts`
- `app/api/dreamr/suggested/route.ts`
- `app/api/dreamr/tally/route.ts`
- `app/api/dreams/feed/route.ts`
- `app/api/dreams/instances/route.ts`
- `app/api/dreams/transfer/route.ts`
- `app/api/embed-feed/route.ts`
- `app/api/favorites/route.ts`
- `app/api/feed/route.ts`
- `app/api/follow/route.ts`
- `app/api/gal/route.ts`
- `app/api/game-scores/route.ts`
- `app/api/gameengin/crash-report/route.ts`
- `app/api/health/route.ts`
- `app/api/home-layout/route.ts`
- `app/api/journey/route.ts`
- `app/api/lab/benchmarks/route.ts`
- `app/api/ledger-media/route.ts`
- `app/api/likes/route.ts`
- `app/api/marketplace/request/route.ts`
- `app/api/marketplace/route.ts`
- `app/api/messages/boards/route.ts`
- `app/api/messages/route.ts`
- `app/api/metrics/platform/route.ts`
- `app/api/metrics/route.ts`
- `app/api/metrics/user/[userId]/route.ts`
- `app/api/music/route.ts`
- `app/api/notifications/route.ts`
- `app/api/platform/errors/route.ts`
- `app/api/posts/[id]/route.ts`
- `app/api/posts/[id]/save/route.ts`
- `app/api/posts/[id]/view/route.ts`
- `app/api/posts/profile/[userId]/route.ts`
- `app/api/posts/route.ts`
- `app/api/profile/route.ts`
- `app/api/projects/route.ts`
- `app/api/scheduled-posts/route.ts`
- `app/api/security/scan/route.ts`
- `app/api/settings/appearance/route.ts`
- `app/api/settings/feed/route.ts`
- `app/api/settings/notifications/route.ts`
- `app/api/settings/privacy/route.ts`
- `app/api/setup/check/route.ts`
- `app/api/setup/google-oauth/route.ts`
- `app/api/shared-dream/sessions/[id]/route.ts`
- `app/api/shared-dream/sessions/route.ts`
- `app/api/shellhub/devices/route.ts`
- `app/api/shop/route.ts`
- `app/api/skip-credits/balance/route.ts`
- `app/api/skip-credits/earn/route.ts`
- `app/api/skip-credits/use/route.ts`
- `app/api/social/ipfs/route.ts`
- `app/api/social/livekit/room/route.ts`
- `app/api/social/livekit/token/route.ts`
- `app/api/social/rss-feed/route.ts`
- `app/api/upload/route.ts`
- `app/api/user/layout/route.ts`
- `app/api/views/track/route.ts`
- `app/api/widgets/feed/route.ts`
- `app/api/widgets/instances/route.ts`
- `app/api/youtube/channel/route.ts`
- `app/api/youtube/discovery/route.ts`
- `app/api/youtube/live-feed/route.ts`

## Code Files

### `app/api/account/`

- `app/api/account/delete-data/route.ts`
- `app/api/account/delete-dream/route.ts`
- `app/api/account/export-data/route.ts`

### `app/api/activity/`

- `app/api/activity/track/route.ts`

### `app/api/admin/`

- `app/api/admin/ai-chat/route.ts`
- `app/api/admin/ai-request/route.ts`
- `app/api/admin/child-safety/route.ts`
- `app/api/admin/code-files/route.ts`
- `app/api/admin/observability/route.ts`

### `app/api/ads/`

- `app/api/ads/orders/route.ts`
- `app/api/ads/view/route.ts`

### `app/api/agent/`

- `app/api/agent/session/route.ts`

### `app/api/ai/`

- `app/api/ai/boogieman/child-safety/route.ts`
- `app/api/ai/boogieman/privacy-event/route.ts`
- `app/api/ai/boogieman/route.ts`
- `app/api/ai/boogieman/status/route.ts`
- `app/api/ai/eams/route.ts`
- `app/api/ai/execute/route.ts`
- `app/api/ai/idari/route.ts`

### `app/api/appeal/`

- `app/api/appeal/route.ts`

### `app/api/auth/`

- `app/api/auth/logout/route.ts`
- `app/api/auth/providers/route.ts`

### `app/api/blocks/`

- `app/api/blocks/route.ts`

### `app/api/ci/`

- `app/api/ci/run/route.ts`

### `app/api/close-friends/`

- `app/api/close-friends/route.ts`

### `app/api/codeengin/`

- `app/api/codeengin/diagnostics/route.ts`
- `app/api/codeengin/file/route.ts`
- `app/api/codeengin/git/route.ts`
- `app/api/codeengin/run/route.ts`
- `app/api/codeengin/search/route.ts`
- `app/api/codeengin/upload/route.ts`
- `app/api/codeengin/workspace/route.ts`

### `app/api/comments/`

- `app/api/comments/route.ts`

### `app/api/connectors/`

- `app/api/connectors/[provider]/connect/route.ts`
- `app/api/connectors/[provider]/disconnect/route.ts`
- `app/api/connectors/[provider]/items/route.ts`
- `app/api/connectors/[provider]/sync/route.ts`
- `app/api/connectors/[provider]/verify/route.ts`
- `app/api/connectors/cron/route.ts`
- `app/api/connectors/instagram/oauth/callback/route.ts`
- `app/api/connectors/instagram/oauth/start/route.ts`
- `app/api/connectors/status/route.ts`
- `app/api/connectors/webhooks/[provider]/route.ts`
- `app/api/connectors/youtube/oauth/callback/route.ts`
- `app/api/connectors/youtube/oauth/start/route.ts`

### `app/api/content/`

- `app/api/content/generative-fill/route.ts`
- `app/api/content/intelligence/route.ts`
- `app/api/content/transcribe/route.ts`
- `app/api/content/voice-clone/route.ts`

### `app/api/contentengin/`

- `app/api/contentengin/assets/[assetId]/export/gameengin/route.ts`
- `app/api/contentengin/assets/[assetId]/route.ts`
- `app/api/contentengin/jobs/[jobId]/route.ts`
- `app/api/contentengin/jobs/route.ts`
- `app/api/contentengin/upload/route.ts`

### `app/api/dr-eams/`

- `app/api/dr-eams/hf/route.ts`
- `app/api/dr-eams/run/route.ts`

### `app/api/drafts/`

- `app/api/drafts/[id]/route.ts`
- `app/api/drafts/route.ts`

### `app/api/dream-windows/`

- `app/api/dream-windows/[id]/route.ts`
- `app/api/dream-windows/route.ts`

### `app/api/dreamengin/`

- `app/api/dreamengin/os-status/route.ts`

### `app/api/dreamr/`

- `app/api/dreamr/feed/route.ts`
- `app/api/dreamr/suggested/route.ts`
- `app/api/dreamr/tally/route.ts`

### `app/api/dreams/`

- `app/api/dreams/feed/route.ts`
- `app/api/dreams/instances/route.ts`
- `app/api/dreams/transfer/route.ts`

### `app/api/embed-feed/`

- `app/api/embed-feed/route.ts`

### `app/api/favorites/`

- `app/api/favorites/route.ts`

### `app/api/feed/`

- `app/api/feed/route.ts`

### `app/api/follow/`

- `app/api/follow/route.ts`

### `app/api/gal/`

- `app/api/gal/route.ts`

### `app/api/game-scores/`

- `app/api/game-scores/route.ts`

### `app/api/gameengin/`

- `app/api/gameengin/crash-report/route.ts`

### `app/api/health/`

- `app/api/health/route.ts`

### `app/api/home-layout/`

- `app/api/home-layout/route.ts`

### `app/api/journey/`

- `app/api/journey/route.ts`

### `app/api/lab/`

- `app/api/lab/benchmarks/route.ts`

### `app/api/ledger-media/`

- `app/api/ledger-media/route.ts`

### `app/api/likes/`

- `app/api/likes/route.ts`

### `app/api/marketplace/`

- `app/api/marketplace/request/route.ts`
- `app/api/marketplace/route.ts`

### `app/api/messages/`

- `app/api/messages/boards/route.ts`
- `app/api/messages/route.ts`

### `app/api/metrics/`

- `app/api/metrics/platform/route.ts`
- `app/api/metrics/route.ts`
- `app/api/metrics/user/[userId]/route.ts`

### `app/api/music/`

- `app/api/music/route.ts`

### `app/api/notifications/`

- `app/api/notifications/route.ts`

### `app/api/platform/`

- `app/api/platform/errors/route.ts`

### `app/api/posts/`

- `app/api/posts/[id]/route.ts`
- `app/api/posts/[id]/save/route.ts`
- `app/api/posts/[id]/view/route.ts`
- `app/api/posts/profile/[userId]/route.ts`
- `app/api/posts/route.ts`

### `app/api/profile/`

- `app/api/profile/route.ts`

### `app/api/projects/`

- `app/api/projects/route.ts`

### `app/api/scheduled-posts/`

- `app/api/scheduled-posts/route.ts`

### `app/api/security/`

- `app/api/security/scan/route.ts`

### `app/api/settings/`

- `app/api/settings/appearance/route.ts`
- `app/api/settings/feed/route.ts`
- `app/api/settings/notifications/route.ts`
- `app/api/settings/privacy/route.ts`

### `app/api/setup/`

- `app/api/setup/check/route.ts`
- `app/api/setup/google-oauth/route.ts`

### `app/api/shared-dream/`

- `app/api/shared-dream/sessions/[id]/route.ts`
- `app/api/shared-dream/sessions/route.ts`

### `app/api/shellhub/`

- `app/api/shellhub/devices/route.ts`

### `app/api/shop/`

- `app/api/shop/route.ts`

### `app/api/skip-credits/`

- `app/api/skip-credits/balance/route.ts`
- `app/api/skip-credits/earn/route.ts`
- `app/api/skip-credits/use/route.ts`

### `app/api/social/`

- `app/api/social/ipfs/route.ts`
- `app/api/social/livekit/room/route.ts`
- `app/api/social/livekit/token/route.ts`
- `app/api/social/rss-feed/route.ts`

### `app/api/upload/`

- `app/api/upload/route.ts`

### `app/api/user/`

- `app/api/user/layout/route.ts`

### `app/api/views/`

- `app/api/views/track/route.ts`

### `app/api/widgets/`

- `app/api/widgets/feed/route.ts`
- `app/api/widgets/instances/route.ts`

### `app/api/youtube/`

- `app/api/youtube/channel/route.ts`
- `app/api/youtube/discovery/route.ts`
- `app/api/youtube/live-feed/route.ts`

### `supabase/`

- `supabase/config.ts`
- `supabase/realtime.ts`
- `supabase/vector.ts`

### `supabase/auth/`

- `supabase/auth/nextRedirect.ts`

### `supabase/client/`

- `supabase/client/client.ts`
- `supabase/client/safeGetUser.ts`

### `supabase/server/`

- `supabase/server/serverClient.ts`

### `supabaseClient.ts/`

- `supabaseClient.ts`

### `types/`

- `types/supabase.ts`

### `utils/supabase/`

- `utils/supabase/server.ts`

## Types

- `types/supabase.ts`

## Styles

_No style files for this feature._

## Capability Flags

**Supabase** (77 files) - **Event Bus** (2 files)

---

<a name="vm-wasm"></a>

# VM / WASM

> WASM modules, AssemblyScript sources, VM/runtime hot paths, and cartridge/worker binaries.

## Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `assembly/bus.ts` | - | `QUEUE_SIZE`, `dequeue`, `enqueue`, `reset` |
| `assembly/index.ts` | - | `hashBytesFNV1A`, `processAudioBufferSIMD`, `shapeGlowFieldSIMD`, `tickPhysicsSIMD` |
| `assembly/mad-maxi-player.ts` | - | `getCoyoteTimer`, `getDashTimer`, `getJumpsUsed`, `getMemoryUsage`, `getOnGround`, `getSnapshotSize` |
| `engins/forgeengin/forge-ngn/assembly.ts` | `PieceManifest`, `getPiece` | `AssemblyValidationError`, `Connection`, `EngineAssembly`, `MAX_PIECES`, `MIN_PIECES`, `PlacedPiece` |
| `public/workers/asset-optimizer.worker.js` | - | `asset-optimizer.worker.js` |
| `public/workers/engin-shader.worker.ts` | - | `engin-shader.worker.ts` |

## Pages

_No page routes for this feature._

## API Routes

_No API routes for this feature._

## Code Files

### `assembly/`

- `assembly/bus.ts`
- `assembly/index.ts`
- `assembly/mad-maxi-player.ts`

### `engins/forgeengin/forge-ngn/`

- `engins/forgeengin/forge-ngn/assembly.ts`

### `public/workers/`

- `public/workers/asset-optimizer.worker.js`
- `public/workers/engin-shader.worker.ts`

## Types

_No type files for this feature._

## Styles

_No style files for this feature._

---

<a name="route-map"></a>

# Route Map

- `/` - `app/page.tsx`
- `/about` - `app/about/page.tsx`
- `/ads` - `app/ads/page.tsx`
- `/ads/create` - `app/ads/create/page.tsx`
- `/ads/slot/:id` - `app/ads/slot/[id]/page.tsx`
- `/auth/reset-password` - `app/auth/reset-password/page.tsx`
- `/auth/update-password` - `app/auth/update-password/page.tsx`
- `/connectors` - `app/connectors/page.tsx`
- `/daydream/brand` - `app/daydream/brand/page.tsx`
- `/daydream/brand/engin` - `app/daydream/brand/engin/page.tsx`
- `/daydream/code` - `app/daydream/code/page.tsx`
- `/daydream/code/engin` - `app/daydream/code/engin/page.tsx`
- `/daydream/constellation` - `app/daydream/constellation/page.tsx`
- `/daydream/create` - `app/daydream/create/page.tsx`
- `/daydream/create/engin` - `app/daydream/create/engin/page.tsx`
- `/daydream/forge` - `app/daydream/forge/page.tsx`
- `/daydream/game` - `app/daydream/game/page.tsx`
- `/daydream/games` - `app/daydream/games/page.tsx`
- `/daydream/games/engin` - `app/daydream/games/engin/page.tsx`
- `/daydream/lab` - `app/daydream/lab/page.tsx`
- `/daydream/lab/engin` - `app/daydream/lab/engin/page.tsx`
- `/daydream/lab/portfolio` - `app/daydream/lab/portfolio/page.tsx`
- `/daydream/media-vault` - `app/daydream/media-vault/page.tsx`
- `/daydream/music` - `app/daydream/music/page.tsx`
- `/daydream/music/engin` - `app/daydream/music/engin/page.tsx`
- `/daydream/music/upload` - `app/daydream/music/upload/page.tsx`
- `/daydream/play` - `app/daydream/play/page.tsx`
- `/daydream/render` - `app/daydream/render/page.tsx`
- `/discover` - `app/discover/page.tsx`
- `/dream-effects` - `app/dream-effects/page.tsx`
- `/dreamdmbar` - `app/dreamdmbar/page.tsx` <- HOME (DreamDMBar)
- `/dreamdmbar/dreamspace` - `app/dreamdmbar/dreamspace/page.tsx` <- HOME (DreamSpace)
- `/dreamdmbar/dualruntime` - `app/dreamdmbar/dualruntime/page.tsx`
- `/dreamdmbar/homedream` - `app/dreamdmbar/homedream/page.tsx` <- HOME (DreamDMBar)
- `/dreamr` - `app/dreamr/page.tsx`
- `/dreamspace` - `app/dreamspace/page.tsx`
- `/edit-profiledream` - `app/edit-profiledream/page.tsx`
- `/engines` - `app/engines/page.tsx`
- `/engines/brand` - `app/engines/brand/page.tsx`
- `/engines/brand/campaigns` - `app/engines/brand/campaigns/page.tsx`
- `/engines/brand/identity` - `app/engines/brand/identity/page.tsx`
- `/engines/code` - `app/engines/code/page.tsx`
- `/engines/code/ai` - `app/engines/code/ai/page.tsx`
- `/engines/code/notebook` - `app/engines/code/notebook/page.tsx`
- `/engines/code/projects` - `app/engines/code/projects/page.tsx`
- `/engines/create` - `app/engines/create/page.tsx`
- `/engines/create/calendar` - `app/engines/create/calendar/page.tsx`
- `/engines/create/editor` - `app/engines/create/editor/page.tsx`
- `/engines/create/queue` - `app/engines/create/queue/page.tsx`
- `/engines/games` - `app/engines/games/page.tsx`
- `/engines/games/builder` - `app/engines/games/builder/page.tsx`
- `/engines/games/library` - `app/engines/games/library/page.tsx`
- `/engines/games/scores` - `app/engines/games/scores/page.tsx`
- `/engines/lab` - `app/engines/lab/page.tsx`
- `/engines/lab/data` - `app/engines/lab/data/page.tsx`
- `/engines/lab/experiments` - `app/engines/lab/experiments/page.tsx`
- `/engines/lab/quantum` - `app/engines/lab/quantum/page.tsx`
- `/engines/music` - `app/engines/music/page.tsx`
- `/engines/music/arrange` - `app/engines/music/arrange/page.tsx`
- `/engines/music/library` - `app/engines/music/library/page.tsx`
- `/engines/music/studio` - `app/engines/music/studio/page.tsx`
- `/engines/portfolio` - `app/engines/portfolio/page.tsx`
- `/engines/portfolio/assets` - `app/engines/portfolio/assets/page.tsx`
- `/engines/portfolio/optimize` - `app/engines/portfolio/optimize/page.tsx`
- `/engines/portfolio/quantum` - `app/engines/portfolio/quantum/page.tsx`
- `/engines/render` - `app/engines/render/page.tsx`
- `/feed-settings` - `app/feed-settings/page.tsx`
- `/gameengin` - `app/gameengin/page.tsx`
- `/gameengin/cartridges` - `app/gameengin/cartridges/page.tsx`
- `/gameengin/cartridges/:id` - `app/gameengin/cartridges/[id]/page.tsx`
- `/homedream` - `app/homedream/page.tsx`
- `/idari-console` - `app/(internal)/idari-console/page.tsx`
- `/idari-console/platform-errors` - `app/(internal)/idari-console/platform-errors/page.tsx`
- `/idari-console/platform-health` - `app/(internal)/idari-console/platform-health/page.tsx`
- `/join` - `app/join/page.tsx`
- `/lab` - `app/lab/page.tsx`
- `/lab/:id` - `app/lab/[id]/page.tsx`
- `/lab/:id/codespace` - `app/lab/[id]/codespace/page.tsx`
- `/lab/new` - `app/lab/new/page.tsx`
- `/login` - `app/login/page.tsx`
- `/marketplace` - `app/marketplace/page.tsx`
- `/marketplace/:id` - `app/marketplace/[id]/page.tsx`
- `/marketplace/sell` - `app/marketplace/sell/page.tsx`
- `/messages` - `app/messages/page.tsx`
- `/messages/boards` - `app/messages/boards/page.tsx`
- `/messages/boards/:id` - `app/messages/boards/[id]/page.tsx`
- `/messages/boards/new` - `app/messages/boards/new/page.tsx`
- `/messages/new` - `app/messages/new/page.tsx`
- `/mission` - `app/mission/page.tsx`
- `/notes` - `app/notes/page.tsx`
- `/onboarding` - `app/onboarding/page.tsx`
- `/policy` - `app/policy/page.tsx`
- `/profile` - `app/profile/page.tsx`
- `/profile/:handle` - `app/profile/[handle]/page.tsx`
- `/settings` - `app/settings/page.tsx`
- `/settings/account` - `app/settings/account/page.tsx`
- `/settings/algorithm` - `app/settings/algorithm/page.tsx`
- `/settings/appearance` - `app/settings/appearance/page.tsx`
- `/settings/controls` - `app/settings/controls/page.tsx`
- `/settings/data` - `app/settings/data/page.tsx`
- `/settings/dreams` - `app/settings/dreams/page.tsx`
- `/settings/feed` - `app/settings/feed/page.tsx`
- `/settings/help` - `app/settings/help/page.tsx`
- `/settings/notifications` - `app/settings/notifications/page.tsx`
- `/settings/privacy` - `app/settings/privacy/page.tsx`
- `/settings/safety` - `app/settings/safety/page.tsx`
- `/settings/security` - `app/settings/security/page.tsx`
- `/settings/widgets` - `app/settings/widgets/page.tsx`
- `/shop` - `app/shop/page.tsx`
- `/shop/sell` - `app/shop/sell/page.tsx`
- `/u/:handle` - `app/u/[handle]/page.tsx`
- `/view-profile` - `app/view-profile/page.tsx`
- `/webgpu` - `app/webgpu/page.tsx`

---

<a name="capability-nodes"></a>

# Capability Nodes

## api-route

- `/api/account/delete-data` - `app/api/account/delete-data/route.ts`
- `/api/account/delete-dream` - `app/api/account/delete-dream/route.ts`
- `/api/account/export-data` - `app/api/account/export-data/route.ts`
- `/api/activity/track` - `app/api/activity/track/route.ts`
- `/api/admin/ai-chat` - `app/api/admin/ai-chat/route.ts`
- `/api/admin/ai-request` - `app/api/admin/ai-request/route.ts`
- `/api/admin/child-safety` - `app/api/admin/child-safety/route.ts`
- `/api/admin/code-files` - `app/api/admin/code-files/route.ts`
- `/api/admin/observability` - `app/api/admin/observability/route.ts`
- `/api/ads/orders` - `app/api/ads/orders/route.ts`
- `/api/ads/view` - `app/api/ads/view/route.ts`
- `/api/agent/session` - `app/api/agent/session/route.ts`
- `/api/ai/boogieman` - `app/api/ai/boogieman/route.ts`
- `/api/ai/boogieman/child-safety` - `app/api/ai/boogieman/child-safety/route.ts`
- `/api/ai/boogieman/privacy-event` - `app/api/ai/boogieman/privacy-event/route.ts`
- `/api/ai/boogieman/status` - `app/api/ai/boogieman/status/route.ts`
- `/api/ai/eams` - `app/api/ai/eams/route.ts`
- `/api/ai/execute` - `app/api/ai/execute/route.ts`
- `/api/ai/idari` - `app/api/ai/idari/route.ts`
- `/api/appeal` - `app/api/appeal/route.ts`
- `/api/auth/logout` - `app/api/auth/logout/route.ts`
- `/api/auth/providers` - `app/api/auth/providers/route.ts`
- `/api/blocks` - `app/api/blocks/route.ts`
- `/api/ci/run` - `app/api/ci/run/route.ts`
- `/api/close-friends` - `app/api/close-friends/route.ts`
- `/api/codeengin/diagnostics` - `app/api/codeengin/diagnostics/route.ts`
- `/api/codeengin/file` - `app/api/codeengin/file/route.ts`
- `/api/codeengin/git` - `app/api/codeengin/git/route.ts`
- `/api/codeengin/run` - `app/api/codeengin/run/route.ts`
- `/api/codeengin/search` - `app/api/codeengin/search/route.ts`
- `/api/codeengin/upload` - `app/api/codeengin/upload/route.ts`
- `/api/codeengin/workspace` - `app/api/codeengin/workspace/route.ts`
- `/api/comments` - `app/api/comments/route.ts`
- `/api/connectors/[provider]/connect` - `app/api/connectors/[provider]/connect/route.ts`
- `/api/connectors/[provider]/disconnect` - `app/api/connectors/[provider]/disconnect/route.ts`
- `/api/connectors/[provider]/items` - `app/api/connectors/[provider]/items/route.ts`
- `/api/connectors/[provider]/sync` - `app/api/connectors/[provider]/sync/route.ts`
- `/api/connectors/[provider]/verify` - `app/api/connectors/[provider]/verify/route.ts`
- `/api/connectors/cron` - `app/api/connectors/cron/route.ts`
- `/api/connectors/instagram/oauth/callback` - `app/api/connectors/instagram/oauth/callback/route.ts`
- `/api/connectors/instagram/oauth/start` - `app/api/connectors/instagram/oauth/start/route.ts`
- `/api/connectors/status` - `app/api/connectors/status/route.ts`
- `/api/connectors/webhooks/[provider]` - `app/api/connectors/webhooks/[provider]/route.ts`
- `/api/connectors/youtube/oauth/callback` - `app/api/connectors/youtube/oauth/callback/route.ts`
- `/api/connectors/youtube/oauth/start` - `app/api/connectors/youtube/oauth/start/route.ts`
- `/api/content/generative-fill` - `app/api/content/generative-fill/route.ts`
- `/api/content/intelligence` - `app/api/content/intelligence/route.ts`
- `/api/content/transcribe` - `app/api/content/transcribe/route.ts`
- `/api/content/voice-clone` - `app/api/content/voice-clone/route.ts`
- `/api/contentengin/assets/[assetId]` - `app/api/contentengin/assets/[assetId]/route.ts`
- `/api/contentengin/assets/[assetId]/export/gameengin` - `app/api/contentengin/assets/[assetId]/export/gameengin/route.ts`
- `/api/contentengin/jobs` - `app/api/contentengin/jobs/route.ts`
- `/api/contentengin/jobs/[jobId]` - `app/api/contentengin/jobs/[jobId]/route.ts`
- `/api/contentengin/upload` - `app/api/contentengin/upload/route.ts`
- `/api/dr-eams/hf` - `app/api/dr-eams/hf/route.ts`
- `/api/dr-eams/run` - `app/api/dr-eams/run/route.ts`
- `/api/drafts` - `app/api/drafts/route.ts`
- `/api/drafts/[id]` - `app/api/drafts/[id]/route.ts`
- `/api/dream-windows` - `app/api/dream-windows/route.ts`
- `/api/dream-windows/[id]` - `app/api/dream-windows/[id]/route.ts`
- `/api/dreamengin/os-status` - `app/api/dreamengin/os-status/route.ts`
- `/api/dreamr/feed` - `app/api/dreamr/feed/route.ts`
- `/api/dreamr/suggested` - `app/api/dreamr/suggested/route.ts`
- `/api/dreamr/tally` - `app/api/dreamr/tally/route.ts`
- `/api/dreams/feed` - `app/api/dreams/feed/route.ts`
- `/api/dreams/instances` - `app/api/dreams/instances/route.ts`
- `/api/dreams/transfer` - `app/api/dreams/transfer/route.ts`
- `/api/embed-feed` - `app/api/embed-feed/route.ts`
- `/api/favorites` - `app/api/favorites/route.ts`
- `/api/feed` - `app/api/feed/route.ts`
- `/api/follow` - `app/api/follow/route.ts`
- `/api/gal` - `app/api/gal/route.ts`
- `/api/game-scores` - `app/api/game-scores/route.ts`
- `/api/gameengin/crash-report` - `app/api/gameengin/crash-report/route.ts`
- `/api/health` - `app/api/health/route.ts`
- `/api/home-layout` - `app/api/home-layout/route.ts`
- `/api/journey` - `app/api/journey/route.ts`
- `/api/lab/benchmarks` - `app/api/lab/benchmarks/route.ts`
- `/api/ledger-media` - `app/api/ledger-media/route.ts`
- `/api/likes` - `app/api/likes/route.ts`
- `/api/marketplace` - `app/api/marketplace/route.ts`
- `/api/marketplace/request` - `app/api/marketplace/request/route.ts`
- `/api/messages` - `app/api/messages/route.ts`
- `/api/messages/boards` - `app/api/messages/boards/route.ts`
- `/api/metrics` - `app/api/metrics/route.ts`
- `/api/metrics/platform` - `app/api/metrics/platform/route.ts`
- `/api/metrics/user/[userId]` - `app/api/metrics/user/[userId]/route.ts`
- `/api/music` - `app/api/music/route.ts`
- `/api/notifications` - `app/api/notifications/route.ts`
- `/api/platform/errors` - `app/api/platform/errors/route.ts`
- `/api/posts` - `app/api/posts/route.ts`
- `/api/posts/[id]` - `app/api/posts/[id]/route.ts`
- `/api/posts/[id]/save` - `app/api/posts/[id]/save/route.ts`
- `/api/posts/[id]/view` - `app/api/posts/[id]/view/route.ts`
- `/api/posts/profile/[userId]` - `app/api/posts/profile/[userId]/route.ts`
- `/api/profile` - `app/api/profile/route.ts`
- `/api/projects` - `app/api/projects/route.ts`
- `/api/scheduled-posts` - `app/api/scheduled-posts/route.ts`
- `/api/security/scan` - `app/api/security/scan/route.ts`
- `/api/settings/appearance` - `app/api/settings/appearance/route.ts`
- `/api/settings/feed` - `app/api/settings/feed/route.ts`
- `/api/settings/notifications` - `app/api/settings/notifications/route.ts`
- `/api/settings/privacy` - `app/api/settings/privacy/route.ts`
- `/api/setup/check` - `app/api/setup/check/route.ts`
- `/api/setup/google-oauth` - `app/api/setup/google-oauth/route.ts`
- `/api/shared-dream/sessions` - `app/api/shared-dream/sessions/route.ts`
- `/api/shared-dream/sessions/[id]` - `app/api/shared-dream/sessions/[id]/route.ts`
- `/api/shellhub/devices` - `app/api/shellhub/devices/route.ts`
- `/api/shop` - `app/api/shop/route.ts`
- `/api/skip-credits/balance` - `app/api/skip-credits/balance/route.ts`
- `/api/skip-credits/earn` - `app/api/skip-credits/earn/route.ts`
- `/api/skip-credits/use` - `app/api/skip-credits/use/route.ts`
- `/api/social/ipfs` - `app/api/social/ipfs/route.ts`
- `/api/social/livekit/room` - `app/api/social/livekit/room/route.ts`
- `/api/social/livekit/token` - `app/api/social/livekit/token/route.ts`
- `/api/social/rss-feed` - `app/api/social/rss-feed/route.ts`
- `/api/upload` - `app/api/upload/route.ts`
- `/api/user/layout` - `app/api/user/layout/route.ts`
- `/api/views/track` - `app/api/views/track/route.ts`
- `/api/widgets/feed` - `app/api/widgets/feed/route.ts`
- `/api/widgets/instances` - `app/api/widgets/instances/route.ts`
- `/api/youtube/channel` - `app/api/youtube/channel/route.ts`
- `/api/youtube/discovery` - `app/api/youtube/discovery/route.ts`
- `/api/youtube/live-feed` - `app/api/youtube/live-feed/route.ts`

## component

- `AnimationPanel.tsx` - `components/contentengin/AnimationPanel.tsx`
- `ArtifactSlot.tsx` - `engins/forgeengin/enginpipe/shell/ArtifactSlot.tsx`
- `AssetPreview3D.tsx` - `components/contentengin/AssetPreview3D.tsx`
- `AssetViewport.tsx` - `engins/contentengin/AssetViewport.tsx`
- `ContentEnginStudio.tsx` - `components/contentengin/ContentEnginStudio.tsx`
- `CustomizeModeContext.tsx` - `components/ui-system/CustomizeModeContext.tsx`
- `dream.ActiveModuleSurface.tsx` - `components/home/dream.ActiveModuleSurface.tsx`
- `dream.ActivityPostForm.tsx` - `components/activity/dream.ActivityPostForm.tsx`
- `dream.ActivityProfile.tsx` - `components/activity/dream.ActivityProfile.tsx`
- `dream.AddDreamCTA.tsx` - `components/widgets/dream.AddDreamCTA.tsx`
- `dream.AddSliceSheet.tsx` - `components/connectors/dream.AddSliceSheet.tsx`
- `dream.AdUnit.tsx` - `components/ads/dream.AdUnit.tsx`
- `dream.AIAssistant.tsx` - `components/dream.AIAssistant.tsx`
- `dream.AlgorithmEngine.tsx` - `components/feed/dream.AlgorithmEngine.tsx`
- `dream.AppSurfaceShell.tsx` - `components/providers/dream.AppSurfaceShell.tsx`
- `dream.AudioVisualizer3D.tsx` - `components/dream.AudioVisualizer3D.tsx`
- `dream.AuthenticatedPageHeader.tsx` - `components/ui/dream.AuthenticatedPageHeader.tsx`
- `dream.AutoOpenGameEngin.tsx` - `engins/autoopen/dream.AutoOpenGameEngin.tsx`
- `dream.AvenueOfMirrors.tsx` - `components/games/dream.AvenueOfMirrors.tsx`
- `dream.bar.CustomizeModeBar.tsx` - `components/customize/dream.bar.CustomizeModeBar.tsx`
- `dream.bar.CustomizeToolbar.tsx` - `components/customize/dream.bar.CustomizeToolbar.tsx`
- `dream.bar.DrEamsSearchBar.tsx` - `components/dreamengin/dream.bar.DrEamsSearchBar.tsx`
- `dream.bar.EnginNavBar.tsx` - `components/engines/shared/dream.bar.EnginNavBar.tsx`
- `dream.bar.GlobalDreamBar.tsx` - `components/home/dream.bar.GlobalDreamBar.tsx`
- `dream.bar.PersistentDreamBar.tsx` - `components/home/dream.bar.PersistentDreamBar.tsx`
- `dream.BoardComposer.tsx` - `components/messaging/dream.BoardComposer.tsx`
- `dream.BoogieWarningBanner.tsx` - `components/dream.BoogieWarningBanner.tsx`
- `dream.BrandLogo.tsx` - `components/dream.BrandLogo.tsx`
- `dream.CanvasDropZone.tsx` - `components/dreamengin/dream.CanvasDropZone.tsx`
- `dream.cartridge.CartridgeBrowser.tsx` - `components/gameengin/dream.cartridge.CartridgeBrowser.tsx`
- `dream.cartridge.CartridgeErrorBoundary.tsx` - `components/gameengin/dream.cartridge.CartridgeErrorBoundary.tsx`
- `dream.cartridge.CartridgeLauncher.tsx` - `components/gameengin/dream.cartridge.CartridgeLauncher.tsx`
- `dream.cartridge.FeaturedCartridges.tsx` - `components/gameengin/dream.cartridge.FeaturedCartridges.tsx`
- `dream.CartridgeRegistryBootstrap.tsx` - `components/gameengin/dream.CartridgeRegistryBootstrap.tsx`
- `dream.CloseFriendsSettings.tsx` - `components/dreamr/dream.CloseFriendsSettings.tsx`
- `dream.CodeDreamIDE.tsx` - `components/daydream/dream.CodeDreamIDE.tsx`
- `dream.CommandPalette.tsx` - `components/dream.CommandPalette.tsx`
- `dream.CommandPaletteMount.tsx` - `components/dream.CommandPaletteMount.tsx`
- `dream.CommentSection.tsx` - `components/feed/dream.CommentSection.tsx`
- `dream.ConfigureSheet.tsx` - `components/widgets/dream.ConfigureSheet.tsx`
- `dream.connectorlayer.tsx` - `components/dreams/dream.connectorlayer.tsx`
- `dream.ConnectorRow.tsx` - `components/connectors/dream.ConnectorRow.tsx`
- `dream.ConnectorsClient.tsx` - `app/connectors/dream.ConnectorsClient.tsx`
- `dream.ConstellationClient.tsx` - `app/daydream/constellation/dream.ConstellationClient.tsx`
- `dream.constellationmap.tsx` - `components/daydream/dream.constellationmap.tsx`
- `dream.ControlsClient.tsx` - `app/settings/controls/dream.ControlsClient.tsx`
- `dream.CoreDream.tsx` - `components/core/dream.CoreDream.tsx`
- `dream.CrashReportModal.tsx` - `components/gameengin/dream.CrashReportModal.tsx`
- `dream.CreatePostModal.tsx` - `components/dream.CreatePostModal.tsx`
- `dream.DangerZoneActions.tsx` - `app/settings/account/dream.DangerZoneActions.tsx`
- `dream.DataClient.tsx` - `app/settings/data/dream.DataClient.tsx`
- `dream.DaydreamPulseStrip.tsx` - `components/home/dream.DaydreamPulseStrip.tsx`
- `dream.DefuseRitual.tsx` - `components/games/dream.DefuseRitual.tsx`
- `dream.DiffViewer.tsx` - `components/daydream/dream.DiffViewer.tsx`
- `dream.DraggableDream.tsx` - `components/dreams/dream.DraggableDream.tsx`
- `dream.DraggableModule.tsx` - `components/draggable/dream.DraggableModule.tsx`
- `dream.DragToAnchorClose.tsx` - `components/dream.DragToAnchorClose.tsx`
- `dream.DreamEnginLogo.tsx` - `components/branding/dream.DreamEnginLogo.tsx`
- `dream.DREAMenginOS.tsx` - `components/dreamengin/dream.DREAMenginOS.tsx`
- `dream.DreamNavControls.tsx` - `components/dreamnav/dream.DreamNavControls.tsx`
- `dream.DreamRCore.tsx` - `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx`
- `dream.DreamRFeed.tsx` - `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx`
- `dream.DrEamsCanvas.tsx` - `components/dreamengin/dream.DrEamsCanvas.tsx`
- `dream.DrEamsModeToggle.tsx` - `components/dream.DrEamsModeToggle.tsx`
- `dream.DrEamsVoiceAssistant.tsx` - `components/dream.DrEamsVoiceAssistant.tsx`
- `dream.DreamWord.tsx` - `components/ui/dream.DreamWord.tsx`
- `dream.DualRuntimeContainer.tsx` - `components/runtime/dream.DualRuntimeContainer.tsx`
- `dream.EchoArena.tsx` - `components/games/dream.EchoArena.tsx`
- `dream.EditableAvatar.tsx` - `components/profile/dream.EditableAvatar.tsx`
- `dream.EditModeBanner.tsx` - `components/widgets/dream.EditModeBanner.tsx`
- `dream.EditModeProvider.tsx` - `components/widgets/dream.EditModeProvider.tsx`
- `dream.EngineBuilderCanvas.tsx` - `components/forge/dream.EngineBuilderCanvas.tsx`
- `dream.EnginFracture.tsx` - `components/games/dream.EnginFracture.tsx`
- `dream.EnginProvider.tsx` - `components/engines/shared/dream.EnginProvider.tsx`
- `dream.featurelayer.tsx` - `components/dreams/dream.featurelayer.tsx`
- `dream.FeedCard.tsx` - `components/dream.FeedCard.tsx`
- `dream.FeedSettingsClient.tsx` - `app/feed-settings/dream.FeedSettingsClient.tsx`
- `dream.FeedVideoCard.tsx` - `components/feed/dream.FeedVideoCard.tsx`
- `dream.FirstTouchActivator.tsx` - `components/dream.FirstTouchActivator.tsx`
- `dream.FlagshipEnginesStrip.tsx` - `components/home/dream.FlagshipEnginesStrip.tsx`
- `dream.FollowButton.tsx` - `components/feed/dream.FollowButton.tsx`
- `dream.FollowOnboarding.tsx` - `components/feed/dream.FollowOnboarding.tsx`
- `dream.ForgeDreamCanvas.tsx` - `components/dream.ForgeDreamCanvas.tsx`
- `dream.ForgeEngin.tsx` - `engins/dream.ForgeEngin.tsx`
- `dream.GamesHub.tsx` - `components/games/dream.GamesHub.tsx`
- `dream.Glassfall.tsx` - `components/games/dream.Glassfall.tsx`
- `dream.GlobalCustomizeUI.tsx` - `components/customize/dream.GlobalCustomizeUI.tsx`
- `dream.GlobalDragLayer.tsx` - `components/dreams/dream.GlobalDragLayer.tsx`
- `dream.GlobalOverlays.tsx` - `components/dream.GlobalOverlays.tsx`
- `dream.GlowingLight.tsx` - `dreamdmbar/dream.GlowingLight.tsx`
- `dream.GodTierProvider.tsx` - `components/providers/dream.GodTierProvider.tsx`
- `dream.HeroSprite.tsx` - `components/dream.HeroSprite.tsx`
- `dream.HomeControls.tsx` - `components/dreamengin/dream.HomeControls.tsx`
- `dream.HomeFeed.tsx` - `components/dream.HomeFeed.tsx`
- `dream.hud.GameHUD.tsx` - `components/games/dream.hud.GameHUD.tsx`
- `dream.hud.LegacyGameHUD.tsx` - `components/games/dream.hud.LegacyGameHUD.tsx`
- `dream.hud.MobileGameHUD.tsx` - `components/games/dream.hud.MobileGameHUD.tsx`
- `dream.IconList.tsx` - `components/ui/dream.IconList.tsx`
- `dream.IconSelector.tsx` - `components/dream.IconSelector.tsx`
- `dream.index.tsx` - `engins/CodeEngin/orchestrator/dream.index.tsx`
- `dream.index.tsx` - `engins/codeengin-ui/orchestrator/dream.index.tsx`
- `dream.InfinityIcon.tsx` - `components/ui/dream.InfinityIcon.tsx`
- `dream.InnerDreamsButton.tsx` - `components/dream.InnerDreamsButton.tsx`
- `dream.InviteFlow.tsx` - `components/shared-dream/dream.InviteFlow.tsx`
- `dream.JourneyTrail.tsx` - `components/daydream/dream.JourneyTrail.tsx`
- `dream.KonamiDream.tsx` - `components/dream.KonamiDream.tsx`
- `dream.LabDreamIDE.tsx` - `components/daydream/dream.LabDreamIDE.tsx`
- `dream.LandingHero.tsx` - `components/dream.LandingHero.tsx`
- `dream.LandingNav.tsx` - `components/landing/dream.LandingNav.tsx`
- `dream.LandingProductStatement.tsx` - `components/landing/dream.LandingProductStatement.tsx`
- `dream.Leaderboard.tsx` - `components/games/dream.Leaderboard.tsx`
- `dream.LedgerChart.tsx` - `components/dream.LedgerChart.tsx`
- `dream.LexiconSolitaire.tsx` - `components/games/dream.LexiconSolitaire.tsx`
- `dream.LightningWing.tsx` - `components/shaders/dream.LightningWing.tsx`
- `dream.LogoHero.tsx` - `components/branding/dream.LogoHero.tsx`
- `dream.MadmaxiGame.tsx` - `components/games/madmaxi/dream.MadmaxiGame.tsx`
- `dream.MadMaxiWildfall.tsx` - `components/games/dream.MadMaxiWildfall.tsx`
- `dream.makeEnginApp.tsx` - `components/engines/shared/dream.makeEnginApp.tsx`
- `dream.MarketplaceListingCard.tsx` - `components/marketplace/dream.MarketplaceListingCard.tsx`
- `dream.MarketplaceRequestButton.tsx` - `components/marketplace/dream.MarketplaceRequestButton.tsx`
- `dream.menu.DreamRadialMenu.tsx` - `components/menus/dream.menu.DreamRadialMenu.tsx`
- `dream.menu.DualBottomMenu.tsx` - `components/menus/dream.menu.DualBottomMenu.tsx`
- `dream.menu.NexusMenu.tsx` - `components/dreamengin/dream.menu.NexusMenu.tsx`
- `dream.menu.OutdreamMenu.tsx` - `components/dreamengin/dream.menu.OutdreamMenu.tsx`
- `dream.menu.RadialMenu.tsx` - `components/menus/dream.menu.RadialMenu.tsx`
- `dream.menu.SystemRadialMenu.tsx` - `components/menus/dream.menu.SystemRadialMenu.tsx`
- `dream.MessagesClient.tsx` - `components/dream.MessagesClient.tsx`
- `dream.Nav.tsx` - `components/branding/dream.Nav.tsx`
- `dream.NeonDrift.tsx` - `components/games/dream.NeonDrift.tsx`
- `dream.NeonGlow.tsx` - `components/shaders/dream.NeonGlow.tsx`
- `dream.NeuralSeamCanvas.tsx` - `components/home/dream.NeuralSeamCanvas.tsx`
- `dream.NGNEngin.tsx` - `components/daydream/dream.NGNEngin.tsx`
- `dream.NiteFlyerSolarHymn.tsx` - `components/games/dream.NiteFlyerSolarHymn.tsx`
- `dream.node-cluster.tsx` - `components/universe/dream.node-cluster.tsx`
- `dream.NoSlotDialog.tsx` - `components/connectors/dream.NoSlotDialog.tsx`
- `dream.NotificationCenter.tsx` - `components/dream.NotificationCenter.tsx`
- `dream.NullCathedral.tsx` - `components/games/dream.NullCathedral.tsx`
- `dream.OfflineRuntimeBootstrap.tsx` - `components/offline/dream.OfflineRuntimeBootstrap.tsx`
- `dream.OfflineStatusPill.tsx` - `components/offline/dream.OfflineStatusPill.tsx`
- `dream.OnboardingTip.tsx` - `components/onboarding/dream.OnboardingTip.tsx`
- `dream.OpenDaydreamSideBButton.tsx` - `components/daydream/dream.OpenDaydreamSideBButton.tsx`
- `dream.OSShellActivator.tsx` - `components/dream.OSShellActivator.tsx`
- `dream.outputlayer.tsx` - `components/dreams/dream.outputlayer.tsx`
- `dream.overlay.ViewAllDreamsOverlay.tsx` - `components/dreamengin/dream.overlay.ViewAllDreamsOverlay.tsx`
- `dream.panel.AgentPanel.tsx` - `engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel.tsx`
- `dream.panel.AgentPanel.tsx` - `engins/codeengin-ui/modules/ai-co-pilot/dream.panel.AgentPanel.tsx`
- `dream.panel.AIBuilderPanel.tsx` - `components/forge/dream.panel.AIBuilderPanel.tsx`
- `dream.panel.AIPanel.tsx` - `components/engines/code/panels/dream.panel.AIPanel.tsx`
- `dream.panel.AlgorithmPanel.tsx` - `components/panels/dream.panel.AlgorithmPanel.tsx`
- `dream.panel.AppearancePanel.tsx` - `components/panels/dream.panel.AppearancePanel.tsx`
- `dream.panel.ArrangePanel.tsx` - `components/engines/music/panels/dream.panel.ArrangePanel.tsx`
- `dream.panel.AssetsPanel.tsx` - `components/engines/portfolio/panels/dream.panel.AssetsPanel.tsx`
- `dream.panel.BuilderPanel.tsx` - `components/engines/games/panels/dream.panel.BuilderPanel.tsx`
- `dream.panel.CalendarPanel.tsx` - `components/engines/create/panels/dream.panel.CalendarPanel.tsx`
- `dream.panel.CampaignsPanel.tsx` - `components/engines/brand/panels/dream.panel.CampaignsPanel.tsx`
- `dream.panel.ChildSafetyPanel.tsx` - `components/dream.panel.ChildSafetyPanel.tsx`
- `dream.panel.ColorPanel.tsx` - `components/customize/panels/dream.panel.ColorPanel.tsx`
- `dream.panel.CompingPanel.tsx` - `components/daydream/starmaker/dream.panel.CompingPanel.tsx`
- `dream.panel.ConnectorsPanel.tsx` - `components/panels/dream.panel.ConnectorsPanel.tsx`
- `dream.panel.ControlsPanel.tsx` - `components/panels/dream.panel.ControlsPanel.tsx`
- `dream.panel.CrossEnginStatusPanel.tsx` - `components/dreamengin/dream.panel.CrossEnginStatusPanel.tsx`
- `dream.panel.DataPanel.tsx` - `components/panels/dream.panel.DataPanel.tsx`
- `dream.panel.DataVizPanel.tsx` - `components/engines/lab/panels/dream.panel.DataVizPanel.tsx`
- `dream.panel.DreamRChannelPanel.tsx` - `components/dreamr/dream.panel.DreamRChannelPanel.tsx`
- `dream.panel.DreamRCreatorPanel.tsx` - `components/dreamr/dream.panel.DreamRCreatorPanel.tsx`
- `dream.panel.DrEamsPanel.tsx` - `components/dreamengin/dream.panel.DrEamsPanel.tsx`
- `dream.panel.EditorPanel.tsx` - `components/engines/create/panels/dream.panel.EditorPanel.tsx`
- `dream.panel.EffectsPanel.tsx` - `components/customize/panels/dream.panel.EffectsPanel.tsx`
- `dream.panel.ExperimentsPanel.tsx` - `components/engines/lab/panels/dream.panel.ExperimentsPanel.tsx`
- `dream.panel.FeedSettingsPanel.tsx` - `components/panels/dream.panel.FeedSettingsPanel.tsx`
- `dream.panel.FontPanel.tsx` - `components/customize/panels/dream.panel.FontPanel.tsx`
- `dream.panel.HelpPanel.tsx` - `components/panels/dream.panel.HelpPanel.tsx`
- `dream.panel.IDariPanel.tsx` - `components/dream.panel.IDariPanel.tsx`
- `dream.panel.IdentityPanel.tsx` - `components/engines/brand/panels/dream.panel.IdentityPanel.tsx`
- `dream.panel.LayoutPanel.tsx` - `components/customize/panels/dream.panel.LayoutPanel.tsx`
- `dream.panel.LibraryPanel.tsx` - `components/engines/games/panels/dream.panel.LibraryPanel.tsx`
- `dream.panel.MarketplacePanel.tsx` - `components/panels/dream.panel.MarketplacePanel.tsx`
- `dream.panel.MenuPanel.tsx` - `components/menus/dream.panel.MenuPanel.tsx`
- `dream.panel.MultitrackArrangementPanel.tsx` - `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx`
- `dream.panel.MusicLibraryPanel.tsx` - `components/engines/music/panels/dream.panel.MusicLibraryPanel.tsx`
- `dream.panel.NotebookPanel.tsx` - `components/engines/code/panels/dream.panel.NotebookPanel.tsx`
- `dream.panel.OptimizePanel.tsx` - `components/engines/portfolio/panels/dream.panel.OptimizePanel.tsx`
- `dream.panel.PianoRollPanel.tsx` - `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx`
- `dream.panel.PortfolioQuantumPanel.tsx` - `components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel.tsx`
- `dream.panel.PrivacyPanel.tsx` - `components/panels/dream.panel.PrivacyPanel.tsx`
- `dream.panel.ProfilePanel.tsx` - `components/panels/dream.panel.ProfilePanel.tsx`
- `dream.panel.ProjectsPanel.tsx` - `components/engines/code/panels/dream.panel.ProjectsPanel.tsx`
- `dream.panel.QuantumPanel.tsx` - `components/engines/lab/panels/dream.panel.QuantumPanel.tsx`
- `dream.panel.QueuePanel.tsx` - `components/engines/create/panels/dream.panel.QueuePanel.tsx`
- `dream.panel.RuntimeMemoryHUD.tsx` - `components/dreams/dream.panel.RuntimeMemoryHUD.tsx`
- `dream.panel.SafetyPanel.tsx` - `components/panels/dream.panel.SafetyPanel.tsx`
- `dream.panel.ScoresPanel.tsx` - `components/engines/games/panels/dream.panel.ScoresPanel.tsx`
- `dream.panel.SessionViewPanel.tsx` - `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx`
- `dream.panel.SettingsPanel.tsx` - `components/panels/dream.panel.SettingsPanel.tsx`
- `dream.panel.StudioPanel.tsx` - `components/engines/music/panels/dream.panel.StudioPanel.tsx`
- `dream.panel.WidgetsPanel.tsx` - `components/panels/dream.panel.WidgetsPanel.tsx`
- `dream.PasswordField.tsx` - `components/auth/dream.PasswordField.tsx`
- `dream.PhaseTrail.tsx` - `dreamdmbar/dream.PhaseTrail.tsx`
- `dream.PhysicsLab.tsx` - `components/dream.PhysicsLab.tsx`
- `dream.PixiPhysicsLayer.tsx` - `components/spatial/dream.PixiPhysicsLayer.tsx`
- `dream.PlacementMode.tsx` - `components/connectors/dream.PlacementMode.tsx`
- `dream.PlatformBadge.tsx` - `components/ui/dream.PlatformBadge.tsx`
- `dream.PlatformErrorReporter.tsx` - `components/dreams/dream.PlatformErrorReporter.tsx`
- `dream.PlatformHealth.tsx` - `components/idari/dream.PlatformHealth.tsx`
- `dream.PortfolioEngin.tsx` - `engins/portfolio/dream.PortfolioEngin.tsx`
- `dream.PositionIndicatorToggle.tsx` - `app/settings/controls/dream.PositionIndicatorToggle.tsx`
- `dream.PrivacyClient.tsx` - `app/settings/privacy/dream.PrivacyClient.tsx`
- `dream.ProfileCanvas.tsx` - `components/profile/dream.ProfileCanvas.tsx`
- `dream.ProfileCustomizeButton.tsx` - `components/profile/dream.ProfileCustomizeButton.tsx`
- `dream.ProfileEditor.tsx` - `components/dream.ProfileEditor.tsx`
- `dream.ProfileShareButton.tsx` - `components/dream.ProfileShareButton.tsx`
- `dream.ProfileSpace.tsx` - `components/dream.ProfileSpace.tsx`
- `dream.ProfileSpace.tsx` - `components/spatial/dream.ProfileSpace.tsx`
- `dream.PullToRefresh.tsx` - `components/dream.PullToRefresh.tsx`
- `dream.QuantumCircuitCanvas.tsx` - `engins/dream.QuantumCircuitCanvas.tsx`
- `dream.RecordingControls.tsx` - `components/games/dream.RecordingControls.tsx`
- `dream.Refractor.tsx` - `components/shaders/dream.Refractor.tsx`
- `dream.remote.GameRemoteSurface.tsx` - `components/games/dream.remote.GameRemoteSurface.tsx`
- `dream.RenderServiceDiagnostics.tsx` - `components/engines/render/dream.RenderServiceDiagnostics.tsx`
- `dream.RenderSurface.tsx` - `components/engines/render/dream.RenderSurface.tsx`
- `dream.RootStatusScreen.tsx` - `components/overlays/dream.RootStatusScreen.tsx`
- `dream.RuntimeView.tsx` - `components/runtime/dream.RuntimeView.tsx`
- `dream.scene.BabylonGameScene.tsx` - `components/dreamengin/dream.scene.BabylonGameScene.tsx`
- `dream.scene.BabylonOptimizeroScene.tsx` - `components/optimizer/dream.scene.BabylonOptimizeroScene.tsx`
- `dream.scene.DrEamsScene.tsx` - `components/dreamengin/dream.scene.DrEamsScene.tsx`
- `dream.scene.PortfolioOptimizationScene.tsx` - `components/dreamengin/dream.scene.PortfolioOptimizationScene.tsx`
- `dream.scene.tsx` - `components/three/dream.scene.tsx`
- `dream.scene.UniverseField.tsx` - `components/landing/dream.scene.UniverseField.tsx`
- `dream.SerpentSiege.tsx` - `components/games/dream.SerpentSiege.tsx`
- `dream.SharedDreamCanvas.tsx` - `components/shared-dream/dream.SharedDreamCanvas.tsx`
- `dream.SharedDreamProvider.tsx` - `components/shared-dream/dream.SharedDreamProvider.tsx`
- `dream.SharedDreamRuntime.tsx` - `components/shared-dream/dream.SharedDreamRuntime.tsx`
- `dream.SheetIcon.tsx` - `components/ui/dream.SheetIcon.tsx`
- `dream.shell.DaydreamShell.tsx` - `components/daydream/dream.shell.DaydreamShell.tsx`
- `dream.shell.EnginAppShell.tsx` - `components/engines/shared/dream.shell.EnginAppShell.tsx`
- `dream.shell.EnginShell.tsx` - `components/dreamengin/dream.shell.EnginShell.tsx`
- `dream.shell.EnhancedSpatialShell.tsx` - `components/spatial/dream.shell.EnhancedSpatialShell.tsx`
- `dream.shell.ImmersiveGameShell.tsx` - `app/daydream/game/dream.shell.ImmersiveGameShell.tsx`
- `dream.shell.RuntimeShell.tsx` - `components/runtime/dream.shell.RuntimeShell.tsx`
- `dream.shell.SharedDreamShell.tsx` - `components/dreams/dream.shell.SharedDreamShell.tsx`
- `dream.shell.universe-shell.tsx` - `components/universe/dream.shell.universe-shell.tsx`
- `dream.ShrunkMode.tsx` - `components/dream.ShrunkMode.tsx`
- `dream.SkeletonLoaders.tsx` - `components/dream.SkeletonLoaders.tsx`
- `dream.SkipCreditBalance.tsx` - `components/ads/dream.SkipCreditBalance.tsx`
- `dream.SlideOverPanel.tsx` - `components/dreams/dream.SlideOverPanel.tsx`
- `dream.SocialShareSheet.tsx` - `components/ui/dream.SocialShareSheet.tsx`
- `dream.SoundRecorder.tsx` - `components/music/dream.SoundRecorder.tsx`
- `dream.StandaloneEnginSurface.tsx` - `components/daydream/dream.StandaloneEnginSurface.tsx`
- `dream.ThemeApplicator.tsx` - `components/dream.ThemeApplicator.tsx`
- `dream.ThemeProvider.tsx` - `components/providers/dream.ThemeProvider.tsx`
- `dream.ThemeToggle.tsx` - `components/dream.ThemeToggle.tsx`
- `dream.TierBadge.tsx` - `components/activity/dream.TierBadge.tsx`
- `dream.ToastSystem.tsx` - `components/dream.ToastSystem.tsx`
- `dream.universal_asset_registry.tsx` - `components/dream.universal_asset_registry.tsx`
- `dream.UniversalEditor.tsx` - `components/universal-editor/dream.UniversalEditor.tsx`
- `dream.UniversalEditorWrapper.tsx` - `components/universal-editor/dream.UniversalEditorWrapper.tsx`
- `dream.universe-card.tsx` - `components/universe/dream.universe-card.tsx`
- `dream.VoidlineGP.tsx` - `components/games/dream.VoidlineGP.tsx`
- `dream.VoidThemeToggle.tsx` - `components/dream.VoidThemeToggle.tsx`
- `dream.WarpCanvas.tsx` - `components/warp/dream.WarpCanvas.tsx`
- `dream.WebGPUShowcase.tsx` - `components/webgpu/dream.WebGPUShowcase.tsx`
- `dream.widget.AnchorWidget.tsx` - `components/dream.widget.AnchorWidget.tsx`
- `dream.widget.AppearanceWidget.tsx` - `components/dreamengin/dream.widget.AppearanceWidget.tsx`
- `dream.widget.ConnectorWidgetPicker.tsx` - `components/connectors/dream.widget.ConnectorWidgetPicker.tsx`
- `dream.widget.ConnectWidgetPrompt.tsx` - `components/connectors/dream.widget.ConnectWidgetPrompt.tsx`
- `dream.widget.DreamWidget.tsx` - `components/home/dream.widget.DreamWidget.tsx`
- `dream.widget.EmbedFeedWidget.tsx` - `components/feeds/dream.widget.EmbedFeedWidget.tsx`
- `dream.widget.ForgeMomentumWidget.tsx` - `components/forge/dream.widget.ForgeMomentumWidget.tsx`
- `dream.widget.PlayMediaWidget.tsx` - `components/widgets/dream.widget.PlayMediaWidget.tsx`
- `dream.widget.ProfileWidgetBlock.tsx` - `components/dream.widget.ProfileWidgetBlock.tsx`
- `dream.widget.ProfileWidgetGrid.tsx` - `components/profile/dream.widget.ProfileWidgetGrid.tsx`
- `dream.widget.SuperDreamWidget.tsx` - `components/dreams/dream.widget.SuperDreamWidget.tsx`
- `dream.widget.UniversalWidget.tsx` - `components/widgets/dream.widget.UniversalWidget.tsx`
- `dream.widget.WidgetBubble.tsx` - `components/dream.widget.WidgetBubble.tsx`
- `dream.widget.WidgetCard.tsx` - `components/widgets/dream.widget.WidgetCard.tsx`
- `dream.widget.WidgetPlaceholder.tsx` - `components/widgets/dream.widget.WidgetPlaceholder.tsx`
- `dream.window.JourneyDreamWindow.tsx` - `components/dreams/dream.window.JourneyDreamWindow.tsx`
- `dream.ZoomablePane.tsx` - `components/home/dream.ZoomablePane.tsx`
- `DreamBarDataBridge.tsx` - `app/dreamdmbar/_components/DreamBarDataBridge.tsx`
- `DreamRegistry.tsx` - `engine/dreams/DreamRegistry.tsx`
- `dreamrfeed.tsx` - `dreamr/components/dreamrfeed.tsx`
- `dreams-layout-editor.tsx` - `app/settings/dreams/dreams-layout-editor.tsx`
- `DreamSpaceRegion.tsx` - `app/dreamdmbar/_components/DreamSpaceRegion.tsx`
- `dreamsurface.daydream.BrandDaydream.tsx` - `components/daydream/dreamsurface.daydream.BrandDaydream.tsx`
- `dreamsurface.dreamdmbar.tsx` - `dreamdmbar/dreamsurface.dreamdmbar.tsx`
- `dreamsurface.dreamengin.tsx` - `components/dreamengin/dreamsurface.dreamengin.tsx`
- `dreamsurface.dreamnav.tsx` - `components/dreamnav/dreamsurface.dreamnav.tsx`
- `dreamsurface.dreamr.tsx` - `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`
- `dreamsurface.dreamspace.tsx` - `components/dreams/dreamsurface.dreamspace.tsx`
- `dreamsurface.EditProfileDream.tsx` - `coresurfaces/dreamsurface.EditProfileDream.tsx`
- `dreamsurface.shell.tsx` - `components/dreams/dreamsurface.shell.tsx`
- `dreamsurface.ViewProfile.tsx` - `coresurfaces/dreamsurface.ViewProfile.tsx`
- `dreamsurface.window.tsx` - `components/dreams/dreamsurface.window.tsx`
- `DreamSystemContext.tsx` - `dreamdmbar/runtime/DreamSystemContext.tsx`
- `DreamWidgetGrid.tsx` - `app/dreamdmbar/_components/DreamWidgetGrid.tsx`
- `engin.BrandingEngin.tsx` - `engins/engin.BrandingEngin.tsx`
- `engin.CodeEngin.tsx` - `engins/engin.CodeEngin.tsx`
- `engin.ContentEngin.tsx` - `engins/engin.ContentEngin.tsx`
- `engin.GameEngin.tsx` - `engins/engin.GameEngin.tsx`
- `engin.LabEngin.tsx` - `engins/engin.LabEngin.tsx`
- _148 more omitted from this section_

## export

- `_resetConformMemoryMap` - `engine/runtime/memory.ts`
- `_resetIdCounter` - `dreamdmbar/runtime/bridgeSeamFlow.ts`
- `_resetInstallFlowState` - `engine/connectors/installFlow.ts`
- `_resetLoop` - `engins/gameengin/unifiedLoop.ts`
- `(default)` - `app/(internal)/idari-console/page.tsx`
- `(default)` - `app/(internal)/idari-console/platform-errors/page.tsx`
- `(default)` - `app/(internal)/idari-console/platform-health/page.tsx`
- `(default)` - `app/about/page.tsx`
- `(default)` - `app/ads/create/page.tsx`
- `(default)` - `app/ads/page.tsx`
- `(default)` - `app/ads/slot/[id]/page.tsx`
- `(default)` - `app/auth/reset-password/page.tsx`
- `(default)` - `app/auth/update-password/page.tsx`
- `(default)` - `app/connectors/dream.ConnectorsClient.tsx`
- `(default)` - `app/connectors/page.tsx`
- `(default)` - `app/daydream/brand/engin/page.tsx`
- `(default)` - `app/daydream/brand/page.tsx`
- `(default)` - `app/daydream/code/engin/page.tsx`
- `(default)` - `app/daydream/code/page.tsx`
- `(default)` - `app/daydream/constellation/dream.ConstellationClient.tsx`
- `(default)` - `app/daydream/constellation/page.tsx`
- `(default)` - `app/daydream/create/engin/page.tsx`
- `(default)` - `app/daydream/create/page.tsx`
- `(default)` - `app/daydream/forge/page.tsx`
- `(default)` - `app/daydream/game/dream.shell.ImmersiveGameShell.tsx`
- `(default)` - `app/daydream/game/page.tsx`
- `(default)` - `app/daydream/games/engin/page.tsx`
- `(default)` - `app/daydream/games/page.tsx`
- `(default)` - `app/daydream/lab/engin/page.tsx`
- `(default)` - `app/daydream/lab/page.tsx`
- `(default)` - `app/daydream/lab/portfolio/page.tsx`
- `(default)` - `app/daydream/media-vault/page.tsx`
- `(default)` - `app/daydream/music/engin/page.tsx`
- `(default)` - `app/daydream/music/page.tsx`
- `(default)` - `app/daydream/music/upload/page.tsx`
- `(default)` - `app/daydream/play/page.tsx`
- `(default)` - `app/daydream/render/page.tsx`
- `(default)` - `app/discover/page.tsx`
- `(default)` - `app/dream-effects/page.tsx`
- `(default)` - `app/dreamdmbar/_components/DreamBarDataBridge.tsx`
- `(default)` - `app/dreamdmbar/_components/DreamSpaceRegion.tsx`
- `(default)` - `app/dreamdmbar/_components/DreamWidgetGrid.tsx`
- `(default)` - `app/dreamdmbar/_components/HomeDreamRegion.tsx`
- `(default)` - `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx`
- `(default)` - `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx`
- `(default)` - `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`
- `(default)` - `app/dreamdmbar/dreamspace/page.tsx`
- `(default)` - `app/dreamdmbar/dualruntime/page.tsx`
- `(default)` - `app/dreamdmbar/homedream/page.tsx`
- `(default)` - `app/dreamdmbar/layout.tsx`
- `(default)` - `app/dreamdmbar/page.tsx`
- `(default)` - `app/dreamr/page.tsx`
- `(default)` - `app/dreamspace/page.tsx`
- `(default)` - `app/edit-profiledream/page.tsx`
- `(default)` - `app/engines/brand/campaigns/page.tsx`
- `(default)` - `app/engines/brand/identity/page.tsx`
- `(default)` - `app/engines/brand/layout.tsx`
- `(default)` - `app/engines/brand/page.tsx`
- `(default)` - `app/engines/code/ai/page.tsx`
- `(default)` - `app/engines/code/layout.tsx`
- `(default)` - `app/engines/code/notebook/page.tsx`
- `(default)` - `app/engines/code/page.tsx`
- `(default)` - `app/engines/code/projects/page.tsx`
- `(default)` - `app/engines/create/calendar/page.tsx`
- `(default)` - `app/engines/create/editor/page.tsx`
- `(default)` - `app/engines/create/layout.tsx`
- `(default)` - `app/engines/create/page.tsx`
- `(default)` - `app/engines/create/queue/page.tsx`
- `(default)` - `app/engines/games/builder/page.tsx`
- `(default)` - `app/engines/games/layout.tsx`
- `(default)` - `app/engines/games/library/page.tsx`
- `(default)` - `app/engines/games/page.tsx`
- `(default)` - `app/engines/games/scores/page.tsx`
- `(default)` - `app/engines/lab/data/page.tsx`
- `(default)` - `app/engines/lab/experiments/page.tsx`
- `(default)` - `app/engines/lab/layout.tsx`
- `(default)` - `app/engines/lab/page.tsx`
- `(default)` - `app/engines/lab/quantum/page.tsx`
- `(default)` - `app/engines/layout.tsx`
- `(default)` - `app/engines/music/arrange/page.tsx`
- `(default)` - `app/engines/music/layout.tsx`
- `(default)` - `app/engines/music/library/page.tsx`
- `(default)` - `app/engines/music/page.tsx`
- `(default)` - `app/engines/music/studio/page.tsx`
- `(default)` - `app/engines/page.tsx`
- `(default)` - `app/engines/portfolio/assets/page.tsx`
- `(default)` - `app/engines/portfolio/layout.tsx`
- `(default)` - `app/engines/portfolio/optimize/page.tsx`
- `(default)` - `app/engines/portfolio/page.tsx`
- `(default)` - `app/engines/portfolio/quantum/page.tsx`
- `(default)` - `app/engines/render/page.tsx`
- `(default)` - `app/error.tsx`
- `(default)` - `app/feed-settings/dream.FeedSettingsClient.tsx`
- `(default)` - `app/feed-settings/page.tsx`
- `(default)` - `app/gameengin/cartridges/[id]/page.tsx`
- `(default)` - `app/gameengin/cartridges/page.tsx`
- `(default)` - `app/gameengin/page.tsx`
- `(default)` - `app/global-error.tsx`
- `(default)` - `app/homedream/page.tsx`
- `(default)` - `app/join/page.tsx`
- `(default)` - `app/lab/[id]/codespace/page.tsx`
- `(default)` - `app/lab/[id]/page.tsx`
- `(default)` - `app/lab/new/page.tsx`
- `(default)` - `app/lab/page.tsx`
- `(default)` - `app/layout.tsx`
- `(default)` - `app/loading.tsx`
- `(default)` - `app/login/page.tsx`
- `(default)` - `app/marketplace/[id]/page.tsx`
- `(default)` - `app/marketplace/page.tsx`
- `(default)` - `app/marketplace/sell/page.tsx`
- `(default)` - `app/messages/boards/[id]/page.tsx`
- `(default)` - `app/messages/boards/new/page.tsx`
- `(default)` - `app/messages/boards/page.tsx`
- `(default)` - `app/messages/new/page.tsx`
- `(default)` - `app/messages/page.tsx`
- `(default)` - `app/mission/page.tsx`
- `(default)` - `app/not-found.tsx`
- `(default)` - `app/notes/page.tsx`
- `(default)` - `app/onboarding/page.tsx`
- `(default)` - `app/page.tsx`
- `(default)` - `app/policy/page.tsx`
- `(default)` - `app/profile/[handle]/page.tsx`
- `(default)` - `app/profile/page.tsx`
- `(default)` - `app/settings/account/dream.DangerZoneActions.tsx`
- `(default)` - `app/settings/account/page.tsx`
- `(default)` - `app/settings/algorithm/page.tsx`
- `(default)` - `app/settings/appearance/page.tsx`
- `(default)` - `app/settings/controls/dream.ControlsClient.tsx`
- `(default)` - `app/settings/controls/dream.PositionIndicatorToggle.tsx`
- `(default)` - `app/settings/controls/page.tsx`
- `(default)` - `app/settings/data/dream.DataClient.tsx`
- `(default)` - `app/settings/data/page.tsx`
- `(default)` - `app/settings/dreams/dreams-layout-editor.tsx`
- `(default)` - `app/settings/dreams/page.tsx`
- `(default)` - `app/settings/feed/page.tsx`
- `(default)` - `app/settings/help/page.tsx`
- `(default)` - `app/settings/notifications/page.tsx`
- `(default)` - `app/settings/page.tsx`
- `(default)` - `app/settings/privacy/dream.PrivacyClient.tsx`
- `(default)` - `app/settings/privacy/page.tsx`
- `(default)` - `app/settings/safety/page.tsx`
- `(default)` - `app/settings/security/page.tsx`
- `(default)` - `app/settings/widgets/page.tsx`
- `(default)` - `app/shop/page.tsx`
- `(default)` - `app/shop/sell/page.tsx`
- `(default)` - `app/u/[handle]/page.tsx`
- `(default)` - `app/view-profile/page.tsx`
- `(default)` - `app/webgpu/page.tsx`
- `(default)` - `components/auth/dream.PasswordField.tsx`
- `(default)` - `components/branding/dream.LogoHero.tsx`
- `(default)` - `components/branding/dream.Nav.tsx`
- `(default)` - `components/connectors/dream.AddSliceSheet.tsx`
- `(default)` - `components/connectors/dream.ConnectorRow.tsx`
- `(default)` - `components/connectors/dream.NoSlotDialog.tsx`
- `(default)` - `components/connectors/dream.PlacementMode.tsx`
- `(default)` - `components/connectors/dream.widget.ConnectWidgetPrompt.tsx`
- `(default)` - `components/connectors/dream.widget.ConnectorWidgetPicker.tsx`
- `(default)` - `components/contentengin/AnimationPanel.tsx`
- `(default)` - `components/contentengin/AssetPreview3D.tsx`
- `(default)` - `components/contentengin/ContentEnginStudio.tsx`
- `(default)` - `components/contentengin/ExportPanel.tsx`
- `(default)` - `components/contentengin/MaterialEditor.tsx`
- `(default)` - `components/contentengin/PartTreeEditor.tsx`
- `(default)` - `components/contentengin/PhotoReferencePanel.tsx`
- `(default)` - `components/contentengin/RecipeEditor.tsx`
- `(default)` - `components/contentengin/RiggingPanel.tsx`
- `(default)` - `components/core/dream.CoreDream.tsx`
- `(default)` - `components/customize/dream.GlobalCustomizeUI.tsx`
- `(default)` - `components/customize/dream.bar.CustomizeModeBar.tsx`
- `(default)` - `components/customize/dream.bar.CustomizeToolbar.tsx`
- `(default)` - `components/customize/panels/dream.panel.ColorPanel.tsx`
- `(default)` - `components/customize/panels/dream.panel.EffectsPanel.tsx`
- `(default)` - `components/customize/panels/dream.panel.FontPanel.tsx`
- `(default)` - `components/customize/panels/dream.panel.LayoutPanel.tsx`
- `(default)` - `components/daydream/dream.CodeDreamIDE.tsx`
- `(default)` - `components/daydream/dream.DiffViewer.tsx`
- `(default)` - `components/daydream/dream.JourneyTrail.tsx`
- `(default)` - `components/daydream/dream.LabDreamIDE.tsx`
- `(default)` - `components/daydream/dream.NGNEngin.tsx`
- `(default)` - `components/daydream/dream.OpenDaydreamSideBButton.tsx`
- `(default)` - `components/daydream/dream.StandaloneEnginSurface.tsx`
- `(default)` - `components/daydream/dream.constellationmap.tsx`
- `(default)` - `components/daydream/dream.shell.DaydreamShell.tsx`
- `(default)` - `components/daydream/dreamsurface.daydream.BrandDaydream.tsx`
- `(default)` - `components/daydream/starmaker/dream.panel.CompingPanel.tsx`
- `(default)` - `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx`
- `(default)` - `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx`
- `(default)` - `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx`
- `(default)` - `components/draggable/dream.DraggableModule.tsx`
- `(default)` - `components/dream.AIAssistant.tsx`
- `(default)` - `components/dream.AudioVisualizer3D.tsx`
- `(default)` - `components/dream.BoogieWarningBanner.tsx`
- `(default)` - `components/dream.BrandLogo.tsx`
- `(default)` - `components/dream.CommandPalette.tsx`
- `(default)` - `components/dream.CommandPaletteMount.tsx`
- `(default)` - `components/dream.CreatePostModal.tsx`
- `(default)` - `components/dream.DrEamsModeToggle.tsx`
- `(default)` - `components/dream.DrEamsVoiceAssistant.tsx`
- `(default)` - `components/dream.FeedCard.tsx`
- `(default)` - `components/dream.FirstTouchActivator.tsx`
- `(default)` - `components/dream.ForgeDreamCanvas.tsx`
- `(default)` - `components/dream.GlobalOverlays.tsx`
- `(default)` - `components/dream.HeroSprite.tsx`
- `(default)` - `components/dream.HomeFeed.tsx`
- `(default)` - `components/dream.IconSelector.tsx`
- `(default)` - `components/dream.InnerDreamsButton.tsx`
- `(default)` - `components/dream.KonamiDream.tsx`
- `(default)` - `components/dream.LandingHero.tsx`
- `(default)` - `components/dream.LedgerChart.tsx`
- `(default)` - `components/dream.MessagesClient.tsx`
- `(default)` - `components/dream.NotificationCenter.tsx`
- `(default)` - `components/dream.OSShellActivator.tsx`
- `(default)` - `components/dream.PhysicsLab.tsx`
- `(default)` - `components/dream.ProfileEditor.tsx`
- `(default)` - `components/dream.ProfileShareButton.tsx`
- `(default)` - `components/dream.PullToRefresh.tsx`
- `(default)` - `components/dream.ThemeApplicator.tsx`
- `(default)` - `components/dream.ThemeToggle.tsx`
- `(default)` - `components/dream.VoidThemeToggle.tsx`
- `(default)` - `components/dream.panel.ChildSafetyPanel.tsx`
- `(default)` - `components/dream.panel.IDariPanel.tsx`
- `(default)` - `components/dream.universal_asset_registry.tsx`
- `(default)` - `components/dream.widget.ProfileWidgetBlock.tsx`
- `(default)` - `components/dream.widget.WidgetBubble.tsx`
- `(default)` - `components/dreamengin/dream.CanvasDropZone.tsx`
- `(default)` - `components/dreamengin/dream.DREAMenginOS.tsx`
- `(default)` - `components/dreamengin/dream.DrEamsCanvas.tsx`
- `(default)` - `components/dreamengin/dream.HomeControls.tsx`
- `(default)` - `components/dreamengin/dream.bar.DrEamsSearchBar.tsx`
- `(default)` - `components/dreamengin/dream.menu.NexusMenu.tsx`
- `(default)` - `components/dreamengin/dream.menu.OutdreamMenu.tsx`
- `(default)` - `components/dreamengin/dream.overlay.ViewAllDreamsOverlay.tsx`
- `(default)` - `components/dreamengin/dream.panel.CrossEnginStatusPanel.tsx`
- `(default)` - `components/dreamengin/dream.panel.DrEamsPanel.tsx`
- `(default)` - `components/dreamengin/dream.scene.BabylonGameScene.tsx`
- `(default)` - `components/dreamengin/dream.scene.DrEamsScene.tsx`
- `(default)` - `components/dreamengin/dream.scene.PortfolioOptimizationScene.tsx`
- `(default)` - `components/dreamengin/dream.shell.EnginShell.tsx`
- `(default)` - `components/dreamengin/dream.widget.AppearanceWidget.tsx`
- `(default)` - `components/dreamengin/dreamsurface.dreamengin.tsx`
- `(default)` - `components/dreamnav/dream.DreamNavControls.tsx`
- `(default)` - `components/dreamr/dream.CloseFriendsSettings.tsx`
- `(default)` - `components/dreamr/dream.panel.DreamRChannelPanel.tsx`
- `(default)` - `components/dreamr/dream.panel.DreamRCreatorPanel.tsx`
- `(default)` - `components/dreams/dream.DraggableDream.tsx`
- `(default)` - `components/dreams/dream.GlobalDragLayer.tsx`
- `(default)` - `components/dreams/dream.PlatformErrorReporter.tsx`
- `(default)` - `components/dreams/dream.SlideOverPanel.tsx`
- `(default)` - `components/dreams/dream.connectorlayer.tsx`
- `(default)` - `components/dreams/dream.featurelayer.tsx`
- `(default)` - `components/dreams/dream.outputlayer.tsx`
- `(default)` - `components/dreams/dream.panel.RuntimeMemoryHUD.tsx`
- `(default)` - `components/dreams/dream.shell.SharedDreamShell.tsx`
- `(default)` - `components/dreams/dream.widget.SuperDreamWidget.tsx`
- `(default)` - `components/dreams/dream.window.JourneyDreamWindow.tsx`
- `(default)` - `components/dreams/dreamsurface.dreamspace.tsx`
- `(default)` - `components/dreams/dreamsurface.shell.tsx`
- `(default)` - `components/dreams/dreamsurface.window.tsx`
- `(default)` - `components/engines/brand/dream.BrandEnginApp.tsx`
- `(default)` - `components/engines/brand/panels/dream.panel.CampaignsPanel.tsx`
- `(default)` - `components/engines/brand/panels/dream.panel.IdentityPanel.tsx`
- `(default)` - `components/engines/code/dream.CodeEnginApp.tsx`
- `(default)` - `components/engines/code/panels/dream.panel.AIPanel.tsx`
- `(default)` - `components/engines/code/panels/dream.panel.NotebookPanel.tsx`
- `(default)` - `components/engines/code/panels/dream.panel.ProjectsPanel.tsx`
- `(default)` - `components/engines/create/dream.CreateEnginApp.tsx`
- `(default)` - `components/engines/create/panels/dream.panel.CalendarPanel.tsx`
- `(default)` - `components/engines/create/panels/dream.panel.EditorPanel.tsx`
- `(default)` - `components/engines/create/panels/dream.panel.QueuePanel.tsx`
- `(default)` - `components/engines/games/dream.GameEnginApp.tsx`
- `(default)` - `components/engines/games/panels/dream.panel.BuilderPanel.tsx`
- `(default)` - `components/engines/games/panels/dream.panel.LibraryPanel.tsx`
- `(default)` - `components/engines/games/panels/dream.panel.ScoresPanel.tsx`
- `(default)` - `components/engines/lab/dream.LabEnginApp.tsx`
- `(default)` - `components/engines/lab/panels/dream.panel.DataVizPanel.tsx`
- `(default)` - `components/engines/lab/panels/dream.panel.ExperimentsPanel.tsx`
- `(default)` - `components/engines/lab/panels/dream.panel.QuantumPanel.tsx`
- `(default)` - `components/engines/music/dream.MusicEnginApp.tsx`
- `(default)` - `components/engines/music/panels/dream.panel.ArrangePanel.tsx`
- `(default)` - `components/engines/music/panels/dream.panel.MusicLibraryPanel.tsx`
- `(default)` - `components/engines/music/panels/dream.panel.StudioPanel.tsx`
- `(default)` - `components/engines/portfolio/dream.PortfolioEnginApp.tsx`
- `(default)` - `components/engines/portfolio/panels/dream.panel.AssetsPanel.tsx`
- `(default)` - `components/engines/portfolio/panels/dream.panel.OptimizePanel.tsx`
- `(default)` - `components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel.tsx`
- `(default)` - `components/engines/render/dream.RenderServiceDiagnostics.tsx`
- `(default)` - `components/engines/render/dream.RenderSurface.tsx`
- `(default)` - `components/engines/shared/dream.bar.EnginNavBar.tsx`
- `(default)` - `components/engines/shared/dream.shell.EnginAppShell.tsx`
- `(default)` - `components/feed/dream.AlgorithmEngine.tsx`
- `(default)` - `components/feed/dream.CommentSection.tsx`
- `(default)` - `components/feed/dream.FeedVideoCard.tsx`
- `(default)` - `components/feed/dream.FollowButton.tsx`
- `(default)` - `components/feed/dream.FollowOnboarding.tsx`
- `(default)` - `components/feeds/dream.widget.EmbedFeedWidget.tsx`
- `(default)` - `components/forge/dream.EngineBuilderCanvas.tsx`
- `(default)` - `components/forge/dream.panel.AIBuilderPanel.tsx`
- `(default)` - `components/forge/dream.widget.ForgeMomentumWidget.tsx`
- `(default)` - `components/gameengin/dream.CartridgeRegistryBootstrap.tsx`
- `(default)` - `components/gameengin/dream.CrashReportModal.tsx`
- _6589 more omitted from this section_

## external

- ` ` - `external`
- ` : ` - `external`
- ` });     stageForgeArtifact(artifact);     const parsed = JSON.parse(store[` - `external`
- ` syntax for type-only imports    - Check `types/` directory for missing global declarations    - Wrap Supabase query results with proper generics 3. **Quick suppression (use sparingly, always with a TODO):**    ```ts    // TODO issue #${issue.number}: fix underlying type mismatch    // @ts-expect-error — <brief reason>    ``` 4. Review `tsconfig.json` for the strict settings in effect. 5. Run `pnpm run build:gamesengin` to check the GameEngin type pass too.` - `external`
- `,` - `external`
- `,       file_hints: unique([...fileHints]),       commands: [` - `external`
- `,       ts: Date.now(),     };     expect(isForgeLogEvent(event)).toBe(true);   });    it(` - `external`
- `,     output: ` - `external`
- `, ` - `external`
- `,  status: ` - `external`
- `, () => {     const src = readSource(hookFile);     expect(src).toContain("` - `external`
- `, () => {     expect(source).toContain(` - `external`
- `, () => {     expect(workspaceDashboardSrc).not.toContain(` - `external`
- `, marginBottom: 10, lineHeight: 1.6 }}>               Strike levels: LOW (expires 14d) · MEDIUM (30d) · HIGH (90d) · CRITICAL (180d).               Weights: LOW=1, MEDIUM=2, HIGH=4, CRITICAL=10.               All strikes are appealable.             </p>             <PolicyTable rows={[               [` - `external`
- `;     expect(detectLanguageFromCode(code)).toBe('python');   });    it('detects bash shell script', () => {     const code = ` - `external`
- `;   }    return ` - `external`
- `']([^` - `external`
- `"]([^` - `external`
- `"][^` - `external`
- `"]s*[` - `external`
- `"`]([^` - `external`
- `);         } else if (beforeFrom.startsWith(` - `external`
- `);     }   } }  function checkUseDualRuntimeDuplicate(){   const componentFile = 'components/runtime/dream.DualRuntimeContainer.tsx';   const engineFile = 'engine/runtime/useDualRuntime.ts';    if (!exists(componentFile)){     warn(` - `external`
- `);     return;   }    warn(` - `external`
- `);     this.buildModuleGraph();     log(` - `external`
- `@babylonjs/core` - `external`
- `@babylonjs/core/Engines` - `external`
- `@babylonjs/core/Layers/glowLayer` - `external`
- `@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline` - `external`
- `@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline` - `external`
- `@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline` - `external`
- `@babylonjs/havok` - `external`
- `@babylonjs/loaders/glTF` - `external`
- `@opentelemetry/api` - `external`
- `@opentelemetry/exporter-prometheus` - `external`
- `@opentelemetry/exporter-trace-otlp-http` - `external`
- `@opentelemetry/resources` - `external`
- `@opentelemetry/sdk-metrics` - `external`
- `@opentelemetry/sdk-trace-node` - `external`
- `@opentelemetry/semantic-conventions` - `external`
- `@playwright/test` - `external`
- `@react-three/drei` - `external`
- `@react-three/fiber` - `external`
- `@supabase/ssr` - `external`
- `@supabase/supabase-js` - `external`
- `@tensorflow/tfjs` - `external`
- `@tensorflow/tfjs-backend-webgpu` - `external`
- `#86efac` - `external`
- `8px 16px 14px` - `external`
- `Build / bundler error — missing module or incorrect import path` - `external`
- `child_process` - `external`
- `clsx` - `external`
- `crypto` - `external`
- `eslint-config-next/core-web-vitals` - `external`
- `eslint-config-next/typescript` - `external`
- `events` - `external`
- `file://${process.argv[1]}` - `external`
- `framer-motion` - `external`
- `fs` - `external`
- `fs/promises` - `external`
- `GITHUB_REPOSITORY env var is not set — cannot call gh CLI without repo context.` - `external`
- `glob` - `external`
- `gsap` - `external`
- `hub.mode` - `external`
- `issue-bot.yml`](.github/workflows/issue-bot.yml)* *DREAMengin · ${REPO} · ${TIMESTAMP}* ` - `external`
- `lucide-react` - `external`
- `next` - `external`
- `next/dynamic` - `external`
- `next/font/local` - `external`
- `next/headers` - `external`
- `next/image` - `external`
- `next/link` - `external`
- `next/navigation` - `external`
- `next/server` - `external`
- `node:buffer` - `external`
- `node:child_process` - `external`
- `node:crypto` - `external`
- `node:fs` - `external`
- `node:fs/promises` - `external`
- `node:http` - `external`
- `node:os` - `external`
- `node:path` - `external`
- `node:process` - `external`
- `node:url` - `external`
- `node:util` - `external`
- `node:zlib` - `external`
- `os` - `external`
- `path` - `external`
- `pixi-viewport` - `external`
- `pixi.js` - `external`
- `player` - `external`
- `react` - `external`
- `react-dnd` - `external`
- `react-dom/client` - `external`
- `rgba(34,197,94,0.06)` - `external`
- `rss-parser` - `external`
- `server-only` - `external`
- `swr` - `external`
- `tailwindcss` - `external`
- `three` - `external`
- `ts-morph` - `external`
- `url` - `external`
- `util` - `external`
- `uuid` - `external`
- `Validating prerequisites` - `external`
- `vitest` - `external`
- `vitest/config` - `external`
- `yaml` - `external`
- `zlib` - `external`
- `zod` - `external`
- `zustand` - `external`

## file-surface

- `activity-first-protocol.test.ts` - `tests/activity-first-protocol.test.ts`
- `activity-revenue-split.test.ts` - `tests/activity-revenue-split.test.ts`
- `admin-lockout.test.ts` - `tests/admin-lockout.test.ts`
- `admin-upgrade-readiness.test.ts` - `tests/admin-upgrade-readiness.test.ts`
- `agent-bus-consensus.test.ts` - `tests/agent-bus-consensus.test.ts`
- `ai-edit-engine.test.ts` - `tests/ai-edit-engine.test.ts`
- `analyze-repo.js` - `.github/scripts/analyze-repo.js`
- `analyzer.mjs` - `repo-visualizer/analyzer.mjs`
- `api-route-body-guard.test.ts` - `tests/api-route-body-guard.test.ts`
- `architect-run.ts` - `scripts/gameengin/architect-run.ts`
- `artisan-run.ts` - `scripts/gameengin/artisan-run.ts`
- `asset-optimizer.test.ts` - `tests/asset-optimizer.test.ts`
- `asset-optimizer.worker.js` - `public/workers/asset-optimizer.worker.js`
- `assetviewport-pickmode.test.ts` - `tests/contentengin/assetviewport-pickmode.test.ts`
- `auth-providers-route.test.ts` - `tests/auth-providers-route.test.ts`
- `auth-update-password-page.test.ts` - `tests/auth-update-password-page.test.ts`
- `authenticated-ui-shells.test.ts` - `tests/authenticated-ui-shells.test.ts`
- `autofix-vercel-build.mjs` - `scripts/autofix-vercel-build.mjs`
- `babylon-optimizero.test.ts` - `tests/babylon-optimizero.test.ts`
- `babylon-webgpu-engine.test.ts` - `tests/babylon-webgpu-engine.test.ts`
- `bar-hide-preserves-both-runtimes.test.ts` - `tests/bar-hide-preserves-both-runtimes.test.ts`
- `boogie-policy-module.test.ts` - `tests/boogie-policy-module.test.ts`
- `boogieman.test.ts` - `tests/boogieman.test.ts`
- `bot-detector.test.ts` - `tests/bot-detector.test.ts`
- `branding-logos.test.ts` - `tests/branding-logos.test.ts`
- `canonical-naming-enforcement.test.ts` - `tests/canonical-naming-enforcement.test.ts`
- `center-audit.mjs` - `scripts/center-audit.mjs`
- `check-build-memory-drift.mjs` - `scripts/check-build-memory-drift.mjs`
- `check-engin-filenames.mjs` - `scripts/check-engin-filenames.mjs`
- `check-licenses.mjs` - `scripts/check-licenses.mjs`
- `check-orphans.mjs` - `scripts/check-orphans.mjs`
- `check-root-hygiene.mjs` - `scripts/check-root-hygiene.mjs`
- `child-safety.test.ts` - `tests/child-safety.test.ts`
- `cli.ts` - `engins/contentengin/cli.ts`
- `code-dream-preview.test.ts` - `tests/code-dream-preview.test.ts`
- `coercion-table.test.ts` - `tests/coercion-table.test.ts`
- `collector-extended.test.ts` - `tests/collector-extended.test.ts`
- `compositeengin-features.test.ts` - `tests/compositeengin-features.test.ts`
- `conform-memory-map.test.ts` - `tests/conform-memory-map.test.ts`
- `connector-delivery.test.ts` - `tests/connector-delivery.test.ts`
- `connectors.test.ts` - `tests/connectors.test.ts`
- `content-intelligence-routes.test.ts` - `tests/content-intelligence-routes.test.ts`
- `content-publish-intent.test.ts` - `tests/content-publish-intent.test.ts`
- `contentengin-api.test.ts` - `tests/contentengin/contentengin-api.test.ts`
- `contentengin-export.test.ts` - `tests/contentengin/contentengin-export.test.ts`
- `contentengin-features.test.ts` - `tests/contentengin-features.test.ts`
- `contentengin-glb-import.test.ts` - `tests/contentengin/contentengin-glb-import.test.ts`
- `contentengin-grammars.test.ts` - `tests/contentengin/contentengin-grammars.test.ts`
- `contentengin-recipes.test.ts` - `tests/contentengin/contentengin-recipes.test.ts`
- `contentengin-rigging.test.ts` - `tests/contentengin/contentengin-rigging.test.ts`
- `contentengin-validation.test.ts` - `tests/contentengin/contentengin-validation.test.ts`
- `contextual-home.test.ts` - `tests/contextual-home.test.ts`
- `creative-optimizero.test.ts` - `tests/creative-optimizero.test.ts`
- `data-transform-extended.test.ts` - `tests/data-transform-extended.test.ts`
- `data-transform.test.ts` - `tests/data-transform.test.ts`
- `daydream-engin-routes.test.ts` - `tests/daydream-engin-routes.test.ts`
- `decide-bar-release.test.ts` - `tests/decide-bar-release.test.ts`
- `demo.spec.ts` - `tests/e2e/demo.spec.ts`
- `dev-bypass.test.ts` - `tests/dev-bypass.test.ts`
- `dr-eams-code-assist.test.ts` - `tests/dr-eams-code-assist.test.ts`
- `dr-eams-search-bar.test.ts` - `tests/dr-eams-search-bar.test.ts`
- `dream-bar-context.test.ts` - `tests/dream-bar-context.test.ts`
- `dream-continuity-spine.test.ts` - `tests/dream-continuity-spine.test.ts`
- `dream-effects.test.ts` - `tests/dream-effects.test.ts`
- `dream-intent-bus.test.ts` - `tests/dream-intent-bus.test.ts`
- `dream-os-bus.test.ts` - `tests/dream-os-bus.test.ts`
- `dream-state.test.ts` - `tests/dream-state.test.ts`
- `dream-window-system.test.ts` - `tests/dream-window-system.test.ts`
- `dreamdm-bar-intent.test.ts` - `tests/dreamdm-bar-intent.test.ts`
- `dreamdm-bar-interactions.test.ts` - `tests/dreamdm-bar-interactions.test.ts`
- `dreamdm-bar-wild.test.ts` - `tests/dreamdm-bar-wild.test.ts`
- `dreamdm-draft.test.ts` - `tests/dreamdm-draft.test.ts`
- `dreamdm-messaging-phase2.test.ts` - `tests/dreamdm-messaging-phase2.test.ts`
- `dreamengin-competitive-workflow-gate.test.ts` - `tests/dreamengin-superiority/dreamengin-competitive-workflow-gate.test.ts`
- `dreamengin-os.test.ts` - `tests/dreamengin-os.test.ts`
- `dreamengin-sw.js` - `public/dreamengin-sw.js`
- `dreamnav.tau.test.ts` - `tests/dreamnav.tau.test.ts`
- `dreamr-algorithm-velocity.test.ts` - `tests/dreamr-algorithm-velocity.test.ts`
- `dreamr-algorithm.test.ts` - `tests/dreamr-algorithm.test.ts`
- `dreamr-feed-limits.test.ts` - `tests/dreamr-feed-limits.test.ts`
- `dreamr-feed-topics.test.ts` - `tests/dreamr-feed-topics.test.ts`
- `dreamr-page-route.test.ts` - `tests/dreamr-page-route.test.ts`
- `dreamr-swipe-personalization.test.ts` - `tests/dreamr-swipe-personalization.test.ts`
- `dreamr-visibility-cursor.test.ts` - `tests/dreamr-visibility-cursor.test.ts`
- `dreamspace-panel.test.ts` - `tests/dreamspace-panel.test.ts`
- `drop-target-registry.test.ts` - `tests/drop-target-registry.test.ts`
- `dual-runtime-bridge-peer-activity.test.ts` - `tests/dual-runtime-bridge-peer-activity.test.ts`
- `durable-bridge.test.ts` - `tests/durable-bridge.test.ts`
- `edit-profiledream-section7.test.ts` - `tests/edit-profiledream-section7.test.ts`
- `engin-capability-targets.test.ts` - `tests/engin-capability-targets.test.ts`
- `engin-dispatcher-glow.test.ts` - `tests/engin-dispatcher-glow.test.ts`
- `engin-dispatcher.test.ts` - `tests/engin-dispatcher.test.ts`
- `engin-hot-runtime-wiring.test.ts` - `tests/engin-hot-runtime-wiring.test.ts`
- `engin-runtime-core.test.ts` - `tests/engin-runtime-core.test.ts`
- `engin-shader.worker.ts` - `public/workers/engin-shader.worker.ts`
- `engin-workflow.test.ts` - `tests/engin-workflow.test.ts`
- `example.spec.ts` - `tests/example.spec.ts`
- `export-full-code.test.ts` - `tests/export-full-code.test.ts`
- `feature-build.test.ts` - `tests/feature-build.test.ts`
- `fix-audit.js` - `fix-audit.js`
- `fix-audit.js` - `scripts/fix-audit.js`
- `forge-engin.test.ts` - `tests/forge-engin.test.ts`
- `forge-momentum.test.ts` - `tests/forge-momentum.test.ts`
- `forge-nexus.test.ts` - `tests/forge-nexus.test.ts`
- `forge-rituals.test.ts` - `tests/forge-rituals.test.ts`
- `full-coverage.spec.ts` - `tests/e2e/full-coverage.spec.ts`
- `game-controller.test.ts` - `tests/game-controller.test.ts`
- `game-engin-ruleset.test.ts` - `tests/game-engin-ruleset.test.ts`
- `game-navigation.test.ts` - `tests/game-navigation.test.ts`
- `game-performance-baseline.test.ts` - `tests/game-performance-baseline.test.ts`
- `game-quality-plan.test.ts` - `tests/game-quality-plan.test.ts`
- `game-remote-regression.test.ts` - `tests/game-remote-regression.test.ts`
- `gameengin-architect.test.ts` - `tests/gameengin-architect.test.ts`
- `gameengin-asset-pipeline.test.ts` - `tests/gameengin-asset-pipeline.test.ts`
- `gameengin-cartridges.test.ts` - `tests/gameengin-cartridges.test.ts`
- `gameengin-crash-modal.test.ts` - `tests/gameengin-crash-modal.test.ts`
- `gameengin-input-router.test.ts` - `tests/gameengin-input-router.test.ts`
- `gameengin-loop.test.ts` - `tests/gameengin-loop.test.ts`
- `gameengin-power-systems.test.ts` - `tests/gameengin-power-systems.test.ts`
- `gameengin-progression.test.ts` - `tests/gameengin-progression.test.ts`
- `gameengin-remote.test.ts` - `tests/gameengin-remote.test.ts`
- `gameengin-runtime-upgrade.test.ts` - `tests/gameengin-runtime-upgrade.test.ts`
- `gameengin-spec.test.ts` - `tests/gameengin-spec.test.ts`
- `games-daydream-page-auth.test.ts` - `tests/games-daydream-page-auth.test.ts`
- `generate-features.mjs` - `scripts/feature-build/generate-features.mjs`
- `generate-mobile-nextgen-spec.mjs` - `scripts/generate-mobile-nextgen-spec.mjs`
- `generate-mobile-ps5-spec.mjs` - `scripts/generate-mobile-ps5-spec.mjs`
- `generate-readme.ts` - `scripts/generate-readme.ts`
- `generate-repo-state.mjs` - `scripts/generate-repo-state.mjs`
- `generate-test-assets.mjs` - `scripts/contentengin/generate-test-assets.mjs`
- `god-tier-engine.test.ts` - `tests/god-tier-engine.test.ts`
- `hero-sprite.test.ts` - `tests/hero-sprite.test.ts`
- `home-feed-home.test.ts` - `tests/home-feed-home.test.ts`
- `homedream-page-auth.test.ts` - `tests/homedream-page-auth.test.ts`
- `i-engine-runtime.test.ts` - `tests/i-engine-runtime.test.ts`
- `icons.test.ts` - `tests/icons.test.ts`
- `idari-admin-guard.test.ts` - `tests/idari-admin-guard.test.ts`
- `idari-observability-loop.test.ts` - `tests/idari-observability-loop.test.ts`
- `idari-patch-plan.test.ts` - `tests/idari-patch-plan.test.ts`
- `index.ts` - `components/engines/index.ts`
- `index.ts` - `engine/gct/index.ts`
- `index.ts` - `engine/observability/index.ts`
- `index.ts` - `engins/forgeengin/forge-ngn/index.ts`
- `index.ts` - `engins/gameengin/remote/index.ts`
- `index.ts` - `engins/gameengin/systems/index.ts`
- `instance-manager.test.ts` - `tests/instance-manager.test.ts`
- `integration-wiring.test.ts` - `tests/integration-wiring.test.ts`
- `is-auth-related-error.test.ts` - `tests/is-auth-related-error.test.ts`
- `issue-bot.js` - `.github/scripts/issue-bot.js`
- `journey-insights.test.ts` - `tests/journey-insights.test.ts`
- `journey.test.ts` - `tests/journey.test.ts`
- `lab-dream-split.test.ts` - `tests/lab-dream-split.test.ts`
- `lab-section-12-spec.test.ts` - `tests/lab-section-12-spec.test.ts`
- `landing-calibration.test.ts` - `tests/landing-calibration.test.ts`
- `landing-mission-link.test.ts` - `tests/landing-mission-link.test.ts`
- `ledger-media.test.ts` - `tests/ledger-media.test.ts`
- `live-feed.test.ts` - `tests/live-feed.test.ts`
- `madmaxi-accessibility-tuning.test.ts` - `tests/madmaxi-accessibility-tuning.test.ts`
- `madmaxi-authored-levels.test.ts` - `tests/madmaxi-authored-levels.test.ts`
- `madmaxi-mechanics.test.ts` - `tests/madmaxi-mechanics.test.ts`
- `maestro-analyze.ts` - `scripts/gameengin/maestro-analyze.ts`
- `manifest.test.ts` - `tests/enginpipe/manifest.test.ts`
- `manifold-physics.spec.ts` - `tests/navigation/manifold-physics.spec.ts`
- `mechanic-run.ts` - `scripts/gameengin/mechanic-run.ts`
- `mobile-game-controls.test.ts` - `tests/mobile-game-controls.test.ts`
- `modular-os-stores.test.ts` - `tests/modular-os-stores.test.ts`
- `module-registry.test.ts` - `tests/module-registry.test.ts`
- `music-starmaker-section10.test.ts` - `tests/music-starmaker-section10.test.ts`
- `namespace-isolation.test.ts` - `tests/namespace-isolation.test.ts`
- `navigation.spec.ts` - `tests/navigation/navigation.spec.ts`
- `neural-seam-flow.test.ts` - `tests/neural-seam-flow.test.ts`
- `next-env.d.ts` - `next-env.d.ts`
- `notifications.test.ts` - `tests/notifications.test.ts`
- `offline-queue.test.ts` - `tests/offline-queue.test.ts`
- `optimize-dreamengin.mjs` - `scripts/optimize-dreamengin.mjs`
- `optimizer.test.ts` - `tests/optimizer.test.ts`
- `orphan-wire-script.test.ts` - `tests/orphan-wire-script.test.ts`
- `os-subsystem-manifest.test.ts` - `tests/os-subsystem-manifest.test.ts`
- `page-surface-wiring.test.ts` - `tests/page-surface-wiring.test.ts`
- `performance-hot-paths.test.ts` - `tests/performance-hot-paths.test.ts`
- `phase6-privacy-idari.test.ts` - `tests/phase6-privacy-idari.test.ts`
- `phase7-naming.test.ts` - `tests/phase7-naming.test.ts`
- `phase8a.test.ts` - `tests/phase8a.test.ts`
- `phase8e-orders.test.ts` - `tests/phase8e-orders.test.ts`
- `phase8e-shop-marketplace.test.ts` - `tests/phase8e-shop-marketplace.test.ts`
- `phase8f-daydream-activation.test.ts` - `tests/phase8f-daydream-activation.test.ts`
- `phase8g-dual-runtime-persistence.test.ts` - `tests/phase8g-dual-runtime-persistence.test.ts`
- `phase8h-triad-consensus.test.ts` - `tests/phase8h-triad-consensus.test.ts`
- `phase9-adaptive-quality.test.ts` - `tests/phase9-adaptive-quality.test.ts`
- `phase9-cross-post.test.ts` - `tests/phase9-cross-post.test.ts`
- `phase9-drag-drop.test.ts` - `tests/phase9-drag-drop.test.ts`
- `phase9-hashtags.test.ts` - `tests/phase9-hashtags.test.ts`
- `phase9-notifications.test.ts` - `tests/phase9-notifications.test.ts`
- `phase9-offline-cache.test.ts` - `tests/phase9-offline-cache.test.ts`
- `phase9-scene-state.test.ts` - `tests/phase9-scene-state.test.ts`
- `phase9-touch-gestures.test.ts` - `tests/phase9-touch-gestures.test.ts`
- `platform-utils.test.ts` - `tests/platform-utils.test.ts`
- `post-media.test.ts` - `tests/post-media.test.ts`
- `post-view-counting.test.ts` - `tests/post-view-counting.test.ts`
- `postbuild.js` - `scripts/postbuild.js`
- `postbuild.ts` - `scripts/postbuild.ts`
- `postcss.config.js` - `postcss.config.js`
- `product-law-principle10-alignment.test.ts` - `tests/product-law-principle10-alignment.test.ts`
- `profile-avatar-edit-entrypoints.test.ts` - `tests/profile-avatar-edit-entrypoints.test.ts`
- `prophet-run.ts` - `scripts/gameengin/prophet-run.ts`
- `quaternion.spec.ts` - `tests/navigation/quaternion.spec.ts`
- `rate-limiting.test.ts` - `tests/rate-limiting.test.ts`
- `readme-autosync.test.ts` - `tests/readme-autosync.test.ts`
- `readme-homedream-system.test.ts` - `tests/readme-homedream-system.test.ts`
- `readme-section13-code-codeengin.test.ts` - `tests/readme-section13-code-codeengin.test.ts`
- `readme-section6-homedream.test.ts` - `tests/readme-section6-homedream.test.ts`
- `render-completion-evidence.test.ts` - `tests/render-completion-evidence.test.ts`
- `render-full-integration.test.ts` - `tests/render-full-integration.test.ts`
- `render-service-integration.test.ts` - `tests/render-service-integration.test.ts`
- `render-viewport-lifecycle-source.test.ts` - `tests/render-viewport-lifecycle-source.test.ts`
- `render-viewport-security-performance.test.ts` - `tests/render-viewport-security-performance.test.ts`
- `renderengin-advanced-rendering.test.ts` - `tests/renderengin-advanced-rendering.test.ts`
- `renderengin-assets-scene.test.ts` - `tests/renderengin-assets-scene.test.ts`
- `renderengin-core.test.ts` - `tests/renderengin-core.test.ts`
- `renderengin-glb-virtual-animation.test.ts` - `tests/renderengin-glb-virtual-animation.test.ts`
- `renderengin-gpu-proof-security.test.ts` - `tests/renderengin-gpu-proof-security.test.ts`
- `renderengin-material-security-performance.test.ts` - `tests/renderengin-material-security-performance.test.ts`
- `renderengin-runtime-wiring.test.ts` - `tests/renderengin-runtime-wiring.test.ts`
- `renderengin-texture-lighting-settings.test.ts` - `tests/renderengin-texture-lighting-settings.test.ts`
- `renderengin-webgpu.test.ts` - `tests/renderengin-webgpu.test.ts`
- `report-driven-game-agent.test.ts` - `tests/report-driven-game-agent.test.ts`
- `repository-state-analysis-section.test.ts` - `tests/repository-state-analysis-section.test.ts`
- `responsive.test.ts` - `tests/responsive.test.ts`
- `rss-feed.test.ts` - `tests/rss-feed.test.ts`
- `run-readme-autosync.mjs` - `.github/scripts/run-readme-autosync.mjs`
- `runtime-channel.test.ts` - `tests/runtime-channel.test.ts`
- `runtime-container.test.ts` - `tests/runtime-container.test.ts`
- `runtime-viewport.test.ts` - `tests/runtime-viewport.test.ts`
- `runtime-wiring.test.ts` - `tests/runtime-wiring.test.ts`
- `safe-get-user.test.ts` - `tests/safe-get-user.test.ts`
- `score-pass.cjs` - `scripts/score-pass.cjs`
- `seam-clipboard.test.ts` - `tests/seam-clipboard.test.ts`
- `server.mjs` - `repo-visualizer/server.mjs`
- `session-continuity.test.ts` - `tests/session-continuity.test.ts`
- `session-pattern-engine.test.ts` - `tests/session-pattern-engine.test.ts`
- `setup-env.ts` - `tests/setup-env.ts`
- `shell-cartridge-wiring.test.ts` - `tests/shell-cartridge-wiring.test.ts`
- `skip-credits.test.ts` - `tests/skip-credits.test.ts`
- `smoke-webgl.ts` - `scripts/gameengin/smoke-webgl.ts`
- `smoke-webgpu.ts` - `scripts/gameengin/smoke-webgpu.ts`
- `social-feed.test.ts` - `tests/social-feed.test.ts`
- `social-platforms.test.ts` - `tests/social-platforms.test.ts`
- `spec-check.cjs` - `scripts/spec-check.cjs`
- `spec35-vm-bus-events.test.ts` - `tests/spec35-vm-bus-events.test.ts`
- `spec36-bot-detection.test.ts` - `tests/spec36-bot-detection.test.ts`
- `spec37-torridity.test.ts` - `tests/spec37-torridity.test.ts`
- `spec38-collaboration.test.ts` - `tests/spec38-collaboration.test.ts`
- `spec41-engine-builder.test.ts` - `tests/spec41-engine-builder.test.ts`
- `structure-ledger.test.ts` - `tests/structure-ledger.test.ts`
- `supabase-config.test.ts` - `tests/supabase-config.test.ts`
- `swap-manager-extended.test.ts` - `tests/swap-manager-extended.test.ts`
- `swipe-calibration.test.ts` - `tests/swipe-calibration.test.ts`
- `tailwind.config.ts` - `tailwind.config.ts`
- `tailwindcss-animate.d.ts` - `tailwindcss-animate.d.ts`
- `tau.ts` - `engine/dreamnav/tau.ts`
- `tech-foundation.test.ts` - `tests/tech-foundation.test.ts`
- `telemetry.test.ts` - `tests/enginpipe/telemetry.test.ts`
- `tiers.test.ts` - `tests/enginpipe/tiers.test.ts`
- `torridity-ledger.test.ts` - `tests/torridity-ledger.test.ts`
- `universal-asset-registry.test.ts` - `tests/universal-asset-registry.test.ts`
- `universal-engine.test.ts` - `tests/universal-engine.test.ts`
- `update-bugs.mjs` - `scripts/update-bugs.mjs`
- `update-embed-feed.mjs` - `scripts/update-embed-feed.mjs`
- `update-handoff.mjs` - `scripts/update-handoff.mjs`
- `update-readme-current-status.test.ts` - `tests/update-readme-current-status.test.ts`
- `update-readme.mjs` - `scripts/update-readme.mjs`
- `upgrader-run.ts` - `scripts/gameengin/upgrader-run.ts`
- `user-sim.test.ts` - `tests/user-sim.test.ts`
- `utils-extended.test.ts` - `tests/utils-extended.test.ts`
- `utils-supabase-server.test.ts` - `tests/utils-supabase-server.test.ts`
- `v2-readiness.test.ts` - `tests/v2-readiness.test.ts`
- `validate-deployment.js` - `scripts/archive/validate-deployment.js`
- `validate-glb.mjs` - `scripts/contentengin/validate-glb.mjs`
- `vercel-ignore.cjs` - `scripts/vercel-ignore.cjs`
- `vercel-preflight.cjs` - `scripts/vercel-preflight.cjs`
- `view-profile-public-view-controls.test.ts` - `tests/view-profile-public-view-controls.test.ts`
- `warp-engine.test.ts` - `tests/warp-engine.test.ts`
- `wasm-gpu-vm.test.ts` - `tests/wasm-gpu-vm.test.ts`
- `webgpu-director.test.ts` - `tests/webgpu-director.test.ts`
- `widget-install-flow.test.ts` - `tests/widget-install-flow.test.ts`
- `writer-run.ts` - `scripts/gameengin/writer-run.ts`
- `youtube-provider.test.ts` - `tests/youtube-provider.test.ts`

## hook

- `useAccount` - `hooks/useAccount.ts`
- `useAgentSession` - `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts`
- `useAgentSession` - `engins/codeengin-ui/modules/ai-co-pilot/useAgentSession.ts`
- `useAIDirector` - `engins/gameengin/games/useAIDirector.ts`
- `useAlbums` - `hooks/use-spatial.ts`
- `useAppIntentPressureSurface` - `hooks/useAppIntentPressureSurface.ts`
- `useArtifactSlot` - `engins/forgeengin/enginpipe/shell/ArtifactSlot.tsx`
- `useBrandEnginRuntime` - `engins/rulesets/brand/useBrandEnginRuntime.ts`
- `useBrandingEnginBridge` - `engine/runtime/useEnginBridge.ts`
- `useBreakpoint` - `hooks/useResponsive.ts`
- `useBreakpointValue` - `hooks/useResponsive.ts`
- `useCodeEnginBridge` - `engine/runtime/useEnginBridge.ts`
- `useCodeEnginRuntime` - `engins/rulesets/code/useCodeEnginRuntime.ts`
- `useConnectorInstallFlow` - `hooks/useConnectorInstallFlow.ts`
- `useContent` - `hooks/use-spatial.ts`
- `useContentEnginBridge` - `engine/runtime/useEnginBridge.ts`
- `useContentEnginRuntime` - `engins/rulesets/content/useContentEnginRuntime.ts`
- `useCustomizeMode` - `components/ui-system/CustomizeModeContext.tsx`
- `useDaydreamPersistence` - `daydreams/shared/useDaydreamPersistence.ts`
- `useDaydreamPersistence` - `tests/phase8f-daydream-network.test.ts`
- `useDaydreamState` - `daydreams/shared/useDaydreamState.ts`
- `useDragSurface` - `engine/runtime/useDragSurface.ts`
- `useDreamBarContext` - `dreamdmbar/hooks/useDreamBarContext.ts`
- `useDreamDMConversations` - `dreamdmbar/hooks/useDreamDMConversations.ts`
- `useDreamDMDraft` - `dreamdmbar/hooks/useDreamDMDraft.ts`
- `useDreamDMMessages` - `dreamdmbar/hooks/useDreamDMMessages.ts`
- `useDreamLayout` - `hooks/useDreamLayout.ts`
- `useDreamLogoScene` - `engine/rendering/babylon/useDreamLogoScene.ts`
- `useDreamNav` - `components/dreamnav/dreamsurface.dreamnav.tsx`
- `useDreamSearch` - `dreamdmbar/hooks/useDreamSearch.ts`
- `useDreamsRuntime` - `engine/dreams/useDreamsRuntime.ts`
- `useDreamSystem` - `dreamdmbar/runtime/DreamSystemContext.tsx`
- `useDreamWindowActions` - `engine/dream-window/useDreamWindowActions.ts`
- `useDualRuntime` - `components/runtime/dream.DualRuntimeContainer.tsx`
- `useDualRuntime` - `engine/runtime/useDualRuntime.ts`
- `useDualRuntime` - `fix-repo.cjs`
- `useDualRuntimePersistence` - `engine/runtime/useDualRuntimePersistence.ts`
- `useDualSense` - `engins/gameengin/games/DualSenseManager.ts`
- `useEditMode` - `components/widgets/dream.EditModeProvider.tsx`
- `useEngin` - `components/engines/shared/dream.EnginProvider.tsx`
- `useEnginCoopSync` - `engine/runtime/useEnginCoopSync.ts`
- `useEnginWorkflow` - `engins/rulesets/useEnginWorkflow.ts`
- `useFluid` - `hooks/useResponsive.ts`
- `useForgeActivity` - `engins/forgeengin/forge/useForgeActivity.ts`
- `useForgeBuild` - `engins/forgeengin/forge/useForgeBuild.ts`
- `useForgeBuild` - `tests/forge-build.test.ts`
- `useGameAutoStart` - `engins/gameengin/games/hooks.ts`
- `useGameEnginBridge` - `engine/runtime/useEnginBridge.ts`
- `useGameEngineAPI` - `engins/gameengin/cartridges/reactCartridge.ts`
- `useGameEnginRuntime` - `engins/rulesets/game/useGameEnginRuntime.ts`
- `useGameInputKeyboardBridge` - `engins/gameengin/games/useGameInputKeyboardBridge.ts`
- `useGamepad` - `engins/gameengin/games/useGamepad.ts`
- `useGamePerformanceBaseline` - `engins/gameengin/games/hooks.ts`
- `useGamePhase` - `engins/gameengin/games/hooks.ts`
- `useGlobalCrashListener` - `components/gameengin/dream.cartridge.CartridgeErrorBoundary.tsx`
- `useGodTier` - `engine/rendering/god-tier/useGodTier.ts`
- `useGsapEntrance` - `engine/animation/gsap/useGsapEntrance.ts`
- `useGsapFlip` - `engine/animation/gsap/useGsapFlip.ts`
- `useGsapScrollReveal` - `engine/animation/gsap/useGsapScrollReveal.ts`
- `useHideOnScroll` - `hooks/useHideOnScroll.ts`
- `useHomeParticleTap` - `hooks/useTap.ts`
- `useImmersiveGameLayout` - `engins/gameengin/games/useImmersiveGameLayout.ts`
- `useImplicitAssetWorkspace` - `engins/contentengin/useImplicitAssetWorkspace.ts`
- `useInstanceManager` - `engine/runtime/instanceManager.ts`
- `useIsAtLeast` - `hooks/useResponsive.ts`
- `useIsBelow` - `hooks/useResponsive.ts`
- `useIsDesktop` - `hooks/useResponsive.ts`
- `useIsMobile` - `hooks/useResponsive.ts`
- `useIsTablet` - `hooks/useResponsive.ts`
- `useKeySet` - `engins/gameengin/games/hooks.ts`
- `useLabEnginBridge` - `engine/runtime/useEnginBridge.ts`
- `useLabEnginRuntime` - `engins/rulesets/lab/useLabEnginRuntime.ts`
- `useLiveFeed` - `dreamr/feed/useLiveFeed.ts`
- `useMediaQuery` - `hooks/useResponsive.ts`
- `useMessagingCore` - `dreamdmbar/hooks/useMessagingCore.ts`
- `useModuleBarIntent` - `dreamdmbar/hooks/useModuleBarIntent.ts`
- `useModuleRegistry` - `engine/runtime/moduleRegistry.ts`
- `useMotionTilt` - `hooks/useMotionTilt.ts`
- `useNavigation` - `engine/navigation/useNavigation.ts`
- `useNotifications` - `dreamdmbar/hooks/useNotifications.ts`
- `useNotifications` - `dreamdmbar/notifications/useNotifications.ts`
- `useOfflineSync` - `engine/offline/useOfflineSync.ts`
- `useOptionalArtifactSlot` - `engins/forgeengin/enginpipe/shell/ArtifactSlot.tsx`
- `useOS` - `engine/os/OSContext.tsx`
- `useRegisterMobileGameControls` - `engins/gameengin/games/mobileControls.ts`
- `useRemoteChannel` - `engins/gameengin/games/useRemoteChannel.ts`
- `useSessionIntelligence` - `engine/intelligence/useSessionIntelligence.ts`
- `useSharedDream` - `components/shared-dream/dream.SharedDreamProvider.tsx`
- `useSharedDream` - `hooks/useSharedDream.ts`
- `useSharedDreamSession` - `engine/sharedDream/useSharedDreamSession.ts`
- `useSharedEnginChannel` - `engine/runtime/useSharedEnginChannel.ts`
- `useShareToProfile` - `hooks/use-spatial.ts`
- `useSocialData` - `engine/social/useSocialData.ts`
- `useSpatialNavigation` - `hooks/use-spatial.ts`
- `useStarMakerEnginBridge` - `engine/runtime/useEnginBridge.ts`
- `useStarMakerEnginRuntime` - `engins/rulesets/music/useStarMakerEnginRuntime.ts`
- `useSubmitScore` - `engins/gameengin/games/hooks.ts`
- `useTap` - `hooks/useTap.ts`
- `useTapHoldMove` - `components/universal-editor/useTapHoldMove.ts`
- `useTapHoldMove` - `hooks/useTapHoldMove.ts`
- `useTheme` - `components/providers/dream.ThemeProvider.tsx`
- `useTick` - `hooks/useTick.ts`
- `useToast` - `components/dream.ToastSystem.tsx`
- `useTouchGestures` - `engine/gestures/useTouchGestures.ts`
- `useUnifiedLoop` - `engins/gameengin/useUnifiedLoop.ts`
- `useViewCounter` - `hooks/useViewCounter.ts`
- `useViewport` - `hooks/useResponsive.ts`
- `useWarp` - `engine/rendering/warp/useWarp.ts`
- `useWebGPUDirector` - `engine/rendering/webgpu/useWebGPUDirector.ts`
- `useWidget` - `engine/widgets/useWidget.ts`
- `useWidgets` - `hooks/use-spatial.ts`
- `useYouTubeLiveFeed` - `dreamr/feed/useYouTubeLiveFeed.ts`

## imported

- `_resetConformMemoryMap` - `engine/runtime/memory.ts`
- `_resetIdCounter` - `dreamdmbar/runtime/bridgeSeamFlow.ts`
- `_resetInstallFlowState` - `engine/connectors/installFlow.ts`
- `(default)` - `components/dream.panel.ChildSafetyPanel.tsx`
- `(default)` - `components/dream.panel.IDariPanel.tsx`
- `(default)` - `components/ui/dream.PlatformBadge.tsx`
- `(default)` - `components/ui/dream.DreamWord.tsx`
- `(default)` - `components/auth/dream.PasswordField.tsx`
- `(default)` - `components/connectors/dream.AddSliceSheet.tsx`
- `(default)` - `components/connectors/dream.ConnectorRow.tsx`
- `(default)` - `components/connectors/dream.NoSlotDialog.tsx`
- `(default)` - `components/connectors/dream.PlacementMode.tsx`
- `(default)` - `components/connectors/dream.widget.ConnectWidgetPrompt.tsx`
- `(default)` - `components/widgets/dream.widget.WidgetShell.tsx`
- `(default)` - `app/connectors/dream.ConnectorsClient.tsx`
- `(default)` - `components/daydream/dream.shell.DaydreamShell.tsx`
- `(default)` - `components/daydream/dreamsurface.daydream.BrandDaydream.tsx`
- `(default)` - `components/ui/dream.AuthenticatedPageHeader.tsx`
- `(default)` - `engins/engin.BrandingEngin.tsx`
- `(default)` - `components/daydream/dream.OpenDaydreamSideBButton.tsx`
- `(default)` - `engins/engin.CodeEngin.tsx`
- `(default)` - `components/daydream/dream.constellationmap.tsx`
- `(default)` - `app/daydream/constellation/dream.ConstellationClient.tsx`
- `(default)` - `engins/engin.ContentEngin.tsx`
- `(default)` - `components/forge/dream.widget.ForgeMomentumWidget.tsx`
- `(default)` - `engins/dream.ForgeEngin.tsx`
- `(default)` - `components/games/dream.remote.GameRemote.tsx`
- `(default)` - `engins/gameengin/GameRuntime.tsx`
- `(default)` - `components/games/dream.GamesHub.tsx`
- `(default)` - `engins/autoopen/dream.AutoOpenGameEngin.tsx`
- `(default)` - `engins/portfolio/dream.PortfolioEngin.tsx`
- `(default)` - `components/music/dream.SoundRecorder.tsx`
- `(default)` - `components/dreams/dream.DraggableDream.tsx`
- `(default)` - `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx`
- `(default)` - `components/dream.BrandLogo.tsx`
- `(default)` - `components/dream.HomeFeed.tsx`
- `(default)` - `components/dream.NotificationCenter.tsx`
- `(default)` - `components/home/dream.ActiveModuleSurface.tsx`
- `(default)` - `components/home/dream.DaydreamPulseStrip.tsx`
- `(default)` - `components/home/dream.FlagshipEnginesStrip.tsx`
- `(default)` - `dreamdmbar/dream.GlowingLight.tsx`
- `(default)` - `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx`
- `(default)` - `components/daydream/dream.JourneyTrail.tsx`
- `(default)` - `dreamr/components/dreamrfeed.tsx`
- `(default)` - `components/shared-dream/dream.SharedDreamRuntime.tsx`
- `(default)` - `app/dreamdmbar/_components/DreamBarDataBridge.tsx`
- `(default)` - `components/home/dream.bar.GlobalDreamBar.tsx`
- `(default)` - `components/home/dream.bar.PersistentDreamBar.tsx`
- `(default)` - `components/dreams/dreamsurface.dreamspace.tsx`
- `(default)` - `components/profile/dream.widget.ProfileWidgetGrid.tsx`
- `(default)` - `components/engines/brand/panels/dream.panel.CampaignsPanel.tsx`
- `(default)` - `components/engines/brand/panels/dream.panel.IdentityPanel.tsx`
- `(default)` - `components/engines/brand/dream.BrandEnginApp.tsx`
- `(default)` - `components/engines/code/panels/dream.panel.AIPanel.tsx`
- `(default)` - `components/engines/code/panels/dream.panel.NotebookPanel.tsx`
- `(default)` - `components/engines/code/dream.CodeEnginApp.tsx`
- `(default)` - `components/engines/code/panels/dream.panel.ProjectsPanel.tsx`
- `(default)` - `components/engines/create/dream.CreateEnginApp.tsx`
- `(default)` - `components/engines/games/panels/dream.panel.BuilderPanel.tsx`
- `(default)` - `components/engines/games/panels/dream.panel.LibraryPanel.tsx`
- `(default)` - `components/engines/games/dream.GameEnginApp.tsx`
- `(default)` - `components/engines/games/panels/dream.panel.ScoresPanel.tsx`
- `(default)` - `components/engines/lab/panels/dream.panel.DataVizPanel.tsx`
- `(default)` - `components/engines/lab/panels/dream.panel.ExperimentsPanel.tsx`
- `(default)` - `components/engines/lab/dream.LabEnginApp.tsx`
- `(default)` - `components/engines/lab/panels/dream.panel.QuantumPanel.tsx`
- `(default)` - `components/engines/music/panels/dream.panel.ArrangePanel.tsx`
- `(default)` - `components/engines/music/panels/dream.panel.MusicLibraryPanel.tsx`
- `(default)` - `components/engines/music/dream.MusicEnginApp.tsx`
- `(default)` - `components/engines/music/panels/dream.panel.StudioPanel.tsx`
- `(default)` - `components/engines/portfolio/panels/dream.panel.AssetsPanel.tsx`
- `(default)` - `components/engines/portfolio/panels/dream.panel.OptimizePanel.tsx`
- `(default)` - `components/engines/portfolio/dream.PortfolioEnginApp.tsx`
- `(default)` - `components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel.tsx`
- `(default)` - `components/overlays/dream.RootStatusScreen.tsx`
- `(default)` - `app/feed-settings/dream.FeedSettingsClient.tsx`
- `(default)` - `components/gameengin/dream.cartridge.CartridgeLauncher.tsx`
- `(default)` - `components/gameengin/dream.cartridge.CartridgeBrowser.tsx`
- `(default)` - `app/dreamdmbar/_components/HomeDreamRegion.tsx`
- `(default)` - `components/dream.CommandPaletteMount.tsx`
- `(default)` - `components/dream.GlobalOverlays.tsx`
- `(default)` - `components/offline/dream.OfflineRuntimeBootstrap.tsx`
- `(default)` - `components/offline/dream.OfflineStatusPill.tsx`
- `(default)` - `components/dream.ThemeApplicator.tsx`
- `(default)` - `components/gameengin/dream.CartridgeRegistryBootstrap.tsx`
- `(default)` - `components/providers/dream.GodTierProvider.tsx`
- `(default)` - `components/providers/dream.ThemeProvider.tsx`
- `(default)` - `components/runtime/dream.DualRuntimeContainer.tsx`
- `(default)` - `components/marketplace/dream.MarketplaceRequestButton.tsx`
- `(default)` - `components/marketplace/dream.MarketplaceListingCard.tsx`
- `(default)` - `components/messaging/dream.BoardComposer.tsx`
- `(default)` - `components/dream.MessagesClient.tsx`
- `(default)` - `components/dream.ProfileShareButton.tsx`
- `(default)` - `components/feed/dream.FollowButton.tsx`
- `(default)` - `components/profile/dream.ProfileCustomizeButton.tsx`
- `(default)` - `components/ui/dream.InfinityIcon.tsx`
- `(default)` - `app/settings/account/dream.DangerZoneActions.tsx`
- `(default)` - `components/feed/dream.AlgorithmEngine.tsx`
- `(default)` - `app/settings/controls/dream.PositionIndicatorToggle.tsx`
- `(default)` - `app/settings/controls/dream.ControlsClient.tsx`
- `(default)` - `app/settings/data/dream.DataClient.tsx`
- `(default)` - `app/settings/dreams/dreams-layout-editor.tsx`
- `(default)` - `app/settings/privacy/dream.PrivacyClient.tsx`
- `(default)` - `engins/renderengin/RenderStage.tsx`
- `(default)` - `engins/contentengin/ImplicitAssetWorkspace.tsx`
- `(default)` - `components/customize/dream.bar.CustomizeModeBar.tsx`
- `(default)` - `components/customize/dream.bar.CustomizeToolbar.tsx`
- `(default)` - `components/customize/panels/dream.panel.ColorPanel.tsx`
- `(default)` - `components/customize/panels/dream.panel.EffectsPanel.tsx`
- `(default)` - `components/customize/panels/dream.panel.FontPanel.tsx`
- `(default)` - `components/customize/panels/dream.panel.LayoutPanel.tsx`
- `(default)` - `components/feed/dream.CommentSection.tsx`
- `(default)` - `components/feed/dream.FeedVideoCard.tsx`
- `(default)` - `components/profile/dream.EditableAvatar.tsx`
- `(default)` - `components/ui/dream.SocialShareSheet.tsx`
- `(default)` - `components/landing/dream.LandingProductStatement.tsx`
- `(default)` - `components/dreamengin/dream.CanvasDropZone.tsx`
- `(default)` - `components/dreamengin/dream.DREAMenginOS.tsx`
- `(default)` - `components/dreamengin/dream.HomeControls.tsx`
- `(default)` - `components/dreamengin/dream.menu.NexusMenu.tsx`
- `(default)` - `components/dreamengin/dream.menu.OutdreamMenu.tsx`
- `(default)` - `components/dreamengin/dream.panel.DrEamsPanel.tsx`
- `(default)` - `app/dreamdmbar/_components/DreamSpaceRegion.tsx`
- `(default)` - `components/spatial/dream.ProfileSpace.tsx`
- `(default)` - `components/widgets/dream.widget.UniversalWidget.tsx`
- `(default)` - `engins/engin.LabEngin.tsx`
- `(default)` - `engins/dream.QuantumCircuitCanvas.tsx`
- `(default)` - `engins/renderengin/RenderEnginInlineSurface.tsx`
- `(default)` - `components/engines/shared/dream.bar.EnginNavBar.tsx`
- `(default)` - `components/engines/shared/dream.shell.EnginAppShell.tsx`
- `(default)` - `components/feed/dream.FollowOnboarding.tsx`
- `(default)` - `components/gameengin/dream.CrashReportModal.tsx`
- `(default)` - `components/games/dream.hud.MobileGameHUD.module.css`
- `(default)` - `components/menus/dream.menu.DualBottomMenu.tsx`
- `(default)` - `components/home/dream.NeuralSeamCanvas.tsx`
- `(default)` - `components/home/dream.ZoomablePane.tsx`
- `(default)` - `components/runtime/dream.RuntimeView.tsx`
- `(default)` - `dreamdmbar/dreamsurface.dreamdmbar.tsx`
- `(default)` - `dreamdmbar/dream.PhaseTrail.tsx`
- `(default)` - `components/menus/dream.panel.MenuPanel.tsx`
- `(default)` - `components/connectors/dream.widget.ConnectorWidgetPicker.tsx`
- `(default)` - `components/dream.CommandPalette.tsx`
- `(default)` - `components/runtime/dream.shell.RuntimeShell.tsx`
- `(default)` - `components/spatial/dream.shell.EnhancedSpatialShell.tsx`
- `(default)` - `components/panels/dream.panel.AlgorithmPanel.tsx`
- `(default)` - `components/panels/dream.panel.AppearancePanel.tsx`
- `(default)` - `components/panels/dream.panel.ConnectorsPanel.tsx`
- `(default)` - `components/panels/dream.panel.ControlsPanel.tsx`
- `(default)` - `components/panels/dream.panel.DataPanel.tsx`
- `(default)` - `components/panels/dream.panel.FeedSettingsPanel.tsx`
- `(default)` - `components/panels/dream.panel.HelpPanel.tsx`
- `(default)` - `components/panels/dream.panel.MarketplacePanel.tsx`
- `(default)` - `components/panels/dream.panel.PrivacyPanel.tsx`
- `(default)` - `components/panels/dream.panel.ProfilePanel.tsx`
- `(default)` - `components/panels/dream.panel.SafetyPanel.tsx`
- `(default)` - `components/panels/dream.panel.SettingsPanel.tsx`
- `(default)` - `components/panels/dream.panel.WidgetsPanel.tsx`
- `(default)` - `components/spatial/dream.PixiPhysicsLayer.tsx`
- `(default)` - `components/ui/dream.SheetIcon.tsx`
- `(default)` - `components/widgets/dream.widget.WidgetCard.tsx`
- `(default)` - `components/dreams/dreamsurface.shell.tsx`
- `(default)` - `engins/engin.StarMakerEngin.tsx`
- `(default)` - `components/dreamr/dream.panel.DreamRChannelPanel.tsx`
- `(default)` - `components/dreamr/dream.panel.DreamRCreatorPanel.tsx`
- `(default)` - `engine/state/base.json`
- `(default)` - `engine/widgets/WidgetBus.ts`
- `(default)` - `engins/contentengin/AssetViewport.tsx`
- `(default)` - `components/forge/dream.panel.AIBuilderPanel.tsx`
- `(default)` - `components/dreamengin/dream.panel.CrossEnginStatusPanel.tsx`
- `(default)` - `components/contentengin/ContentEnginStudio.tsx`
- `(default)` - `components/gameengin/dream.cartridge.FeaturedCartridges.tsx`
- `(default)` - `components/games/dream.Leaderboard.tsx`
- `(default)` - `components/games/dream.hud.LegacyGameHUD.tsx`
- `(default)` - `components/games/dream.hud.MobileGameHUD.tsx`
- `(default)` - `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx`
- `(default)` - `components/daydream/starmaker/dream.panel.CompingPanel.tsx`
- `(default)` - `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx`
- `(default)` - `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx`
- `(default)` - `engins/gameengin/config/demoGameConfig.ts`
- `(default)` - `engins/renderengin/RenderEnginViewport.tsx`
- `(dynamic import)` - `engine/safety/child-safety/imageClassifier.ts`
- `(dynamic import)` - `engins/engin.GameEngin.tsx`
- `(dynamic import)` - `engins/engin.LabEngin.tsx`
- `(dynamic import)` - `engins/engin.StarMakerEngin.tsx`
- `(dynamic import)` - `components/three/dream.scene.tsx`
- `(dynamic import)` - `components/dream.LandingHero.tsx`
- `(dynamic import)` - `components/landing/dream.LandingNav.tsx`
- `(dynamic import)` - `components/landing/dream.scene.UniverseField.tsx`
- `(dynamic import)` - `engins/codeengin/diff/diffUtils.ts`
- `(dynamic import)` - `engins/dream.ForgeEngin.tsx`
- `(dynamic import)` - `engins/engin.BrandingEngin.tsx`
- `(dynamic import)` - `engins/engin.CodeEngin.tsx`
- `(dynamic import)` - `engins/engin.ContentEngin.tsx`
- `(dynamic import)` - `components/dream.CommandPalette.tsx`
- `(dynamic import)` - `supabase/client/client.ts`
- `(dynamic import)` - `components/customize/dream.GlobalCustomizeUI.tsx`
- `(dynamic import)` - `components/dreams/dream.GlobalDragLayer.tsx`
- `(dynamic import)` - `components/dreams/dream.PlatformErrorReporter.tsx`
- `(dynamic import)` - `components/dream.KonamiDream.tsx`
- `(dynamic import)` - `engine/rendering/god-tier/godTierEngine.ts`
- `(dynamic import)` - `engine/rendering/webgpu/director.ts`
- `(dynamic import)` - `components/games/madmaxi/index.ts`
- `(dynamic import)` - `components/games/dream.NeonDrift.tsx`
- `(dynamic import)` - `components/games/dream.EchoArena.tsx`
- `(dynamic import)` - `components/games/dream.NullCathedral.tsx`
- `(dynamic import)` - `components/games/dream.VoidlineGP.tsx`
- `(dynamic import)` - `components/games/dream.SerpentSiege.tsx`
- `(dynamic import)` - `components/games/dream.MadMaxiWildfall.tsx`
- `(dynamic import)` - `components/games/dream.EnginFracture.tsx`
- `(dynamic import)` - `components/games/dream.Glassfall.tsx`
- `(dynamic import)` - `components/games/dream.NiteFlyerSolarHymn.tsx`
- `(dynamic import)` - `components/games/dream.LexiconSolitaire.tsx`
- `(dynamic import)` - `components/games/dream.DefuseRitual.tsx`
- `(dynamic import)` - `supabase/server/serverClient.ts`
- `(dynamic import)` - `dr-eams/ai/schemas.ts`
- `(dynamic import)` - `dr-eams/ai/triad.ts`
- `(dynamic import)` - `engine/observability/otelBridge.ts`
- `(dynamic import)` - `engine/ledger/ledger.ts`
- `(dynamic import)` - `engine/events/eventBus.ts`
- `(dynamic import)` - `engine/vm/wasmGpuVM.ts`
- `(dynamic import)` - `dr-eams/ai/capability-gate.ts`
- `(dynamic import)` - `dr-eams/ai/confirm-token.ts`
- `(dynamic import)` - `dr-eams/ai/rate-limiter.ts`
- `(dynamic import)` - `dr-eams/ai/idempotency.ts`
- `(dynamic import)` - `engine/agents/boogieManAI.ts`
- `(dynamic import)` - `build-memory/registry.json`
- `(dynamic import)` - `engine/generated/index.ts`
- `(dynamic import)` - `engine/vm/types.ts`
- `(dynamic import)` - `engine/rendering/babylon/createEngine.ts`
- `(dynamic import)` - `engine/agents/agentBus.ts`
- `(dynamic import)` - `engins/contentengin/assets/indexedDBStore.ts`
- `(dynamic import)` - `app/api/auth/providers/route.ts`
- `(dynamic import)` - `engine/safety/child-safety/childSafetyDetector.ts`
- `(dynamic import)` - `app/api/content/intelligence/route.ts`
- `(dynamic import)` - `app/api/lab/benchmarks/route.ts`
- `(dynamic import)` - `app/api/content/transcribe/route.ts`
- `(dynamic import)` - `app/api/content/generative-fill/route.ts`
- `(dynamic import)` - `app/api/content/voice-clone/route.ts`
- `(dynamic import)` - `engine/dev-bypass.ts`
- `(dynamic import)` - `components/dreamengin/dream.DREAMenginOS.tsx`
- `(dynamic import)` - `engine/engin-runtime/EnginBaseState.ts`
- `(dynamic import)` - `engine/engin-runtime/EnginCapabilities.ts`
- `(dynamic import)` - `engine/engin-runtime/index.ts`
- `(dynamic import)` - `engins/forgeengin/forge/forgeRegistry.ts`
- `(dynamic import)` - `components/gameengin/dream.cartridge.CartridgeLauncher.tsx`
- `(dynamic import)` - `app/daydream/games/page.tsx`
- `(dynamic import)` - `app/dreamdmbar/layout.tsx`
- `(dynamic import)` - `types/module-manifest.ts`
- `(dynamic import)` - `scripts/wire-orphans.mjs`
- `(dynamic import)` - `engine/dream-window/useDreamWindowActions.ts`
- `(dynamic import)` - `components/dreams/dream.widget.SuperDreamWidget.tsx`
- `(dynamic import)` - `components/widgets/dream.widget.WidgetShell.tsx`
- `(dynamic import)` - `components/dreams/dreamsurface.shell.tsx`
- `(dynamic import)` - `components/widgets/dream.widget.WidgetCard.tsx`
- `(dynamic import)` - `components/widgets/dream.widget.UniversalWidget.tsx`
- `(dynamic import)` - `components/widgets/dream.widget.WidgetLibrary.tsx`
- `(dynamic import)` - `components/widgets/dream.widget.WidgetSurface.tsx`
- `(dynamic import)` - `types/dream-window.ts`
- `(dynamic import)` - `engine/social/platforms.ts`
- `(dynamic import)` - `engine/offline/offlineCache.ts`
- `(dynamic import)` - `app/api/ads/orders/route.ts`
- `(dynamic import)` - `app/api/gal/route.ts`
- `(dynamic import)` - `supabase/config.ts`
- `(dynamic import)` - `components/dream.universal_asset_registry.tsx`
- `(dynamic import)` - `engine/vm/bufferManager.ts`
- `(dynamic import)` - `engine/vm/pipelineCache.ts`
- `(dynamic import)` - `engine/vm/snapshot.ts`
- `(dynamic import)` - `engine/vm/dualVMCoordinator.ts`
- `(dynamic import)` - `engine/connectors/providers/youtube.ts`
- `(require)` - `engine/observability/otelBridge.ts`
- `(require)` - `engine/navigation/manifold.ts`
- `(require)` - `engine/navigation/physics.ts`
- `(require)` - `engine/navigation/anchorField.ts`
- `(require)` - `engine/navigation/quaternion.ts`
- `(side-effect)` - `styles/globals.css`
- `(side-effect)` - `styles/view-transitions.css`
- `(side-effect)` - `styles/dream-shell.css`
- `(side-effect)` - `styles/home-dream.css`
- `(side-effect)` - `engins/renderengin/runtimeRegistration.ts`
- `*` - `components/engines/shared/index.ts`
- `*` - `components/engines/brand/index.ts`
- `*` - `components/engines/code/index.ts`
- `*` - `components/engines/create/index.ts`
- `*` - `components/engines/games/index.ts`
- `*` - `components/engines/lab/index.ts`
- `*` - `components/engines/music/index.ts`
- `*` - `components/engines/portfolio/index.ts`
- `*` - `components/ui-system/responsive.ts`
- `*` - `engine/dreamnav/delta.ts`
- `*` - `engine/engin-runtime/EnginDomainCores.ts`
- `*` - `engine/gct/anomaly-detection.ts`
- `*` - `engine/gct/audio-fingerprint.ts`
- `*` - `engine/gct/gct-engine.ts`
- `*` - `engine/gct/image-search.ts`
- `*` - `engine/gct/recommendations.ts`
- `*` - `engine/navigation/quaternion.ts`
- `*` - `engine/navigation/manifold.ts`
- `*` - `engine/navigation/physics.ts`
- `*` - `engine/navigation/anchorField.ts`
- `*` - `engine/observability/collector.ts`
- _3205 more omitted from this section_

## route

- `/` - `app/page.tsx`
- `/about` - `app/about/page.tsx`
- `/ads` - `app/ads/page.tsx`
- `/ads/create` - `app/ads/create/page.tsx`
- `/ads/slot/:id` - `app/ads/slot/[id]/page.tsx`
- `/auth/reset-password` - `app/auth/reset-password/page.tsx`
- `/auth/update-password` - `app/auth/update-password/page.tsx`
- `/connectors` - `app/connectors/page.tsx`
- `/daydream/brand` - `app/daydream/brand/page.tsx`
- `/daydream/brand/engin` - `app/daydream/brand/engin/page.tsx`
- `/daydream/code` - `app/daydream/code/page.tsx`
- `/daydream/code/engin` - `app/daydream/code/engin/page.tsx`
- `/daydream/constellation` - `app/daydream/constellation/page.tsx`
- `/daydream/create` - `app/daydream/create/page.tsx`
- `/daydream/create/engin` - `app/daydream/create/engin/page.tsx`
- `/daydream/forge` - `app/daydream/forge/page.tsx`
- `/daydream/game` - `app/daydream/game/page.tsx`
- `/daydream/games` - `app/daydream/games/page.tsx`
- `/daydream/games/engin` - `app/daydream/games/engin/page.tsx`
- `/daydream/lab` - `app/daydream/lab/page.tsx`
- `/daydream/lab/engin` - `app/daydream/lab/engin/page.tsx`
- `/daydream/lab/portfolio` - `app/daydream/lab/portfolio/page.tsx`
- `/daydream/media-vault` - `app/daydream/media-vault/page.tsx`
- `/daydream/music` - `app/daydream/music/page.tsx`
- `/daydream/music/engin` - `app/daydream/music/engin/page.tsx`
- `/daydream/music/upload` - `app/daydream/music/upload/page.tsx`
- `/daydream/play` - `app/daydream/play/page.tsx`
- `/daydream/render` - `app/daydream/render/page.tsx`
- `/discover` - `app/discover/page.tsx`
- `/dream-effects` - `app/dream-effects/page.tsx`
- `/dreamdmbar` - `app/dreamdmbar/page.tsx`
- `/dreamdmbar/dreamspace` - `app/dreamdmbar/dreamspace/page.tsx`
- `/dreamdmbar/dualruntime` - `app/dreamdmbar/dualruntime/page.tsx`
- `/dreamdmbar/homedream` - `app/dreamdmbar/homedream/page.tsx`
- `/dreamr` - `app/dreamr/page.tsx`
- `/dreamspace` - `app/dreamspace/page.tsx`
- `/edit-profiledream` - `app/edit-profiledream/page.tsx`
- `/engines` - `app/engines/page.tsx`
- `/engines/brand` - `app/engines/brand/page.tsx`
- `/engines/brand/campaigns` - `app/engines/brand/campaigns/page.tsx`
- `/engines/brand/identity` - `app/engines/brand/identity/page.tsx`
- `/engines/code` - `app/engines/code/page.tsx`
- `/engines/code/ai` - `app/engines/code/ai/page.tsx`
- `/engines/code/notebook` - `app/engines/code/notebook/page.tsx`
- `/engines/code/projects` - `app/engines/code/projects/page.tsx`
- `/engines/create` - `app/engines/create/page.tsx`
- `/engines/create/calendar` - `app/engines/create/calendar/page.tsx`
- `/engines/create/editor` - `app/engines/create/editor/page.tsx`
- `/engines/create/queue` - `app/engines/create/queue/page.tsx`
- `/engines/games` - `app/engines/games/page.tsx`
- `/engines/games/builder` - `app/engines/games/builder/page.tsx`
- `/engines/games/library` - `app/engines/games/library/page.tsx`
- `/engines/games/scores` - `app/engines/games/scores/page.tsx`
- `/engines/lab` - `app/engines/lab/page.tsx`
- `/engines/lab/data` - `app/engines/lab/data/page.tsx`
- `/engines/lab/experiments` - `app/engines/lab/experiments/page.tsx`
- `/engines/lab/quantum` - `app/engines/lab/quantum/page.tsx`
- `/engines/music` - `app/engines/music/page.tsx`
- `/engines/music/arrange` - `app/engines/music/arrange/page.tsx`
- `/engines/music/library` - `app/engines/music/library/page.tsx`
- `/engines/music/studio` - `app/engines/music/studio/page.tsx`
- `/engines/portfolio` - `app/engines/portfolio/page.tsx`
- `/engines/portfolio/assets` - `app/engines/portfolio/assets/page.tsx`
- `/engines/portfolio/optimize` - `app/engines/portfolio/optimize/page.tsx`
- `/engines/portfolio/quantum` - `app/engines/portfolio/quantum/page.tsx`
- `/engines/render` - `app/engines/render/page.tsx`
- `/feed-settings` - `app/feed-settings/page.tsx`
- `/gameengin` - `app/gameengin/page.tsx`
- `/gameengin/cartridges` - `app/gameengin/cartridges/page.tsx`
- `/gameengin/cartridges/:id` - `app/gameengin/cartridges/[id]/page.tsx`
- `/homedream` - `app/homedream/page.tsx`
- `/idari-console` - `app/(internal)/idari-console/page.tsx`
- `/idari-console/platform-errors` - `app/(internal)/idari-console/platform-errors/page.tsx`
- `/idari-console/platform-health` - `app/(internal)/idari-console/platform-health/page.tsx`
- `/join` - `app/join/page.tsx`
- `/lab` - `app/lab/page.tsx`
- `/lab/:id` - `app/lab/[id]/page.tsx`
- `/lab/:id/codespace` - `app/lab/[id]/codespace/page.tsx`
- `/lab/new` - `app/lab/new/page.tsx`
- `/login` - `app/login/page.tsx`
- `/marketplace` - `app/marketplace/page.tsx`
- `/marketplace/:id` - `app/marketplace/[id]/page.tsx`
- `/marketplace/sell` - `app/marketplace/sell/page.tsx`
- `/messages` - `app/messages/page.tsx`
- `/messages/boards` - `app/messages/boards/page.tsx`
- `/messages/boards/:id` - `app/messages/boards/[id]/page.tsx`
- `/messages/boards/new` - `app/messages/boards/new/page.tsx`
- `/messages/new` - `app/messages/new/page.tsx`
- `/mission` - `app/mission/page.tsx`
- `/notes` - `app/notes/page.tsx`
- `/onboarding` - `app/onboarding/page.tsx`
- `/policy` - `app/policy/page.tsx`
- `/profile` - `app/profile/page.tsx`
- `/profile/:handle` - `app/profile/[handle]/page.tsx`
- `/settings` - `app/settings/page.tsx`
- `/settings/account` - `app/settings/account/page.tsx`
- `/settings/algorithm` - `app/settings/algorithm/page.tsx`
- `/settings/appearance` - `app/settings/appearance/page.tsx`
- `/settings/controls` - `app/settings/controls/page.tsx`
- `/settings/data` - `app/settings/data/page.tsx`
- `/settings/dreams` - `app/settings/dreams/page.tsx`
- `/settings/feed` - `app/settings/feed/page.tsx`
- `/settings/help` - `app/settings/help/page.tsx`
- `/settings/notifications` - `app/settings/notifications/page.tsx`
- `/settings/privacy` - `app/settings/privacy/page.tsx`
- `/settings/safety` - `app/settings/safety/page.tsx`
- `/settings/security` - `app/settings/security/page.tsx`
- `/settings/widgets` - `app/settings/widgets/page.tsx`
- `/shop` - `app/shop/page.tsx`
- `/shop/sell` - `app/shop/sell/page.tsx`
- `/u/:handle` - `app/u/[handle]/page.tsx`
- `/view-profile` - `app/view-profile/page.tsx`
- `/webgpu` - `app/webgpu/page.tsx`

---

<a name="files-as-edges"></a>

# Files as Edges

| File Edge | Consumes Nodes | Provides Nodes |
|-----------|----------------|----------------|
| `.github/scripts/analyze-repo.js` | `fs`, `path`, `child_process`, `);     this.buildModuleGraph();     log(` | `analyze-repo.js` |
| `.github/scripts/issue-bot.js` | `child_process`, `fs`, `path`, ` syntax for type-only imports    - Check `types/` directory for missing global declarations    - Wrap Supabase query results with proper generics 3. **Quick suppression (use sparingly, always with a TODO):**    ```ts    // TODO issue #${issue.number}: fix underlying type mismatch    // @ts-expect-error — <brief reason>    ``` 4. Review `tsconfig.json` for the strict settings in effect. 5. Run `pnpm run build:gamesengin` to check the GameEngin type pass too.`, `issue-bot.yml`](.github/workflows/issue-bot.yml)* *DREAMengin · ${REPO} · ${TIMESTAMP}* `, `GITHUB_REPOSITORY env var is not set — cannot call gh CLI without repo context.`, `Validating prerequisites` | `issue-bot.js` |
| `.github/scripts/run-readme-autosync.mjs` | `node:fs`, `node:os`, `node:path`, `node:child_process` | `run-readme-autosync.mjs` |
| `app/(internal)/idari-console/page.tsx` | `(default)`, `(default)`, `createUpgradeReadinessSnapshot`, `isOwnerEmail`, `isDevAdminBypassActive`, `createServerClient`, `safeGetUser`, `lucide-react` | `/idari-console`, `page.tsx`, `(default)`, `metadata` |
| `app/(internal)/idari-console/platform-errors/page.tsx` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/navigation`, `next/server` | `/idari-console/platform-errors`, `page.tsx`, `(default)`, `metadata` |
| `app/(internal)/idari-console/platform-health/page.tsx` | `PlatformHealth`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/idari-console/platform-health`, `page.tsx`, `(default)`, `metadata` |
| `app/about/page.tsx` | `(default)`, `lucide-react`, `next/link` | `/about`, `page.tsx`, `(default)` |
| `app/actions/dream-docs.ts` | `isOwnerEmail`, `embedDocSection`, `createServerClient`, `safeGetUser`, `Json`, `toErrorMessage` | `CreateDreamDocInput`, `UpsertDocSectionInput`, `createDreamDoc`, `publishDreamDoc`, `upsertDocSection` |
| `app/ads/create/page.tsx` | `createClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `react`, `toErrorMessage`, `queueLocalFirstMutation` | `/ads/create`, `page.tsx`, `(default)` |
| `app/ads/page.tsx` | `(default)`, `createServerClient`, `safeGetUser`, `AdListing`, `AdOrder`, `AdSlot`, `@supabase/supabase-js`, `lucide-react` | `/ads`, `page.tsx`, `(default)` |
| `app/ads/slot/[id]/page.tsx` | `createServerClient`, `safeGetUser`, `AdSlot`, `lucide-react`, `next/link`, `next/navigation`, `next/server` | `/ads/slot/:id`, `page.tsx`, `(default)` |
| `app/api/account/delete-data/route.ts` | `writeAuditLog`, `jsonApiError`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `uuid`, `zod` | `/api/account/delete-data`, `POST` |
| `app/api/account/delete-dream/route.ts` | `runTriadConsensus`, `writeAuditLog`, `jsonApiError`, `createServerClient`, `createServiceClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/account/delete-dream`, `POST` |
| `app/api/account/export-data/route.ts` | `jsonApiError`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/account/export-data`, `GET` |
| `app/api/activity/track/route.ts` | `calculateActivityPoints`, `calculateDecayDate`, `ActivityVerification`, `TrackActivityRequest`, `TrackActivityResponse`, `VERIFICATION_STRENGTH`, `createServerClient`, `safeGetUser` | `/api/activity/track`, `POST` |
| `app/api/admin/ai-chat/route.ts` | `isAdminLocked`, `isOwner`, `triggerAdminLockout`, `groqChat`, `GroqMessage`, `AI_MODELS`, `createServerClient`, `safeGetUser` | `/api/admin/ai-chat`, `POST` |
| `app/api/admin/ai-request/route.ts` | `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/api/admin/ai-request`, `POST` |
| `app/api/admin/child-safety/route.ts` | `isOwnerEmail`, `jsonApiError`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `zod`, `toErrorMessage` | `/api/admin/child-safety`, `GET`, `POST` |
| `app/api/admin/code-files/route.ts` | `isAdminLocked`, `isDomainBlocked`, `isOwner`, `triggerAdminLockout`, `createServerClient`, `safeGetUser`, `fs/promises`, `next/server` | `/api/admin/code-files`, `FileNode`, `POST` |
| `app/api/admin/observability/route.ts` | `isOwnerEmail`, `jsonApiError`, `getBufferStats`, `getSnapshot`, `correlate`, `buildImmediateRemediationAction`, `inferRootCause`, `createServerClient` | `/api/admin/observability`, `GET` |
| `app/api/ads/orders/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/ads/orders`, `POST` |
| `app/api/ads/view/route.ts` | `qualifiesForPremiumCPV`, `calculateActivityRevenueSplit`, `calculateSkipCreditsEarned`, `AdView`, `TrackAdViewRequest`, `TrackAdViewResponse`, `CPV_PRICING`, `CPVTier` | `/api/ads/view`, `POST` |
| `app/api/agent/session/route.ts` | `getAgentOS`, `codeEnginHostTools`, `@supabase/supabase-js`, `next/server` | `/api/agent/session`, `POST` |
| `app/api/ai/boogieman/child-safety/route.ts` | `writeAuditLog`, `BOOGIE_POLICY_VERSION`, `boogieEnforce`, `checkRateLimit`, `isOwnerEmail`, `jsonApiError`, `isZeroTolerance`, `scanContent` | `/api/ai/boogieman/child-safety`, `POST` |
| `app/api/ai/boogieman/privacy-event/route.ts` | `writeAuditLog`, `BOOGIE_POLICY_VERSION`, `jsonApiError`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `uuid` | `/api/ai/boogieman/privacy-event`, `POST` |
| `app/api/ai/boogieman/route.ts` | `writeAuditLog`, `BOOGIE_POLICY_VERSION`, `boogieEvaluate`, `checkRateLimit`, `boogiePolicyCheck`, `isOwnerEmail`, `jsonApiError`, `createServerClient` | `/api/ai/boogieman`, `POST` |
| `app/api/ai/boogieman/status/route.ts` | `BOOGIE_POLICY_VERSION`, `next/server` | `/api/ai/boogieman/status`, `GET` |
| `app/api/ai/eams/route.ts` | `writeAuditLog`, `boogieEvaluate`, `makeConfirmToken`, `checkRateLimit`, `getCurrentRPM`, `DrEamsRunBodySchema`, `DrEamsRunResponse`, `boogiePolicyCheck` | `/api/ai/eams`, `POST` |
| `app/api/ai/execute/route.ts` | `writeAuditLog`, `verifyConfirmToken`, `checkRateLimit`, `ExecuteBodySchema`, `Intent`, `validateWithIdari`, `jsonApiError`, `createServerClient` | `/api/ai/execute`, `POST` |
| `app/api/ai/idari/route.ts` | `assessGenerationLawScope`, `formatGenerationLawLoadCheck`, `GenerationLawAssessment`, `writeAuditLog`, `boogieEvaluate`, `groqChat`, `GroqMessage`, `checkRateLimit` | `/api/ai/idari`, `POST` |
| `app/api/appeal/route.ts` | `writeAuditLog`, `BOOGIE_POLICY_VERSION`, `RULE_CODES`, `AppealRequestSchema`, `jsonApiError`, `createServerClient`, `safeGetUser`, `next/server` | `/api/appeal`, `POST` |
| `app/api/auth/logout/route.ts` | `createServerClient`, `next/server` | `/api/auth/logout`, `GET` |
| `app/api/auth/providers/route.ts` | `SUPABASE_CONFIG`, `next/server` | `/api/auth/providers`, `GET`, `OAuthProvidersResponse`, `UNKNOWN_OAUTH_PROVIDERS`, `getOAuthProvidersResponse` |
| `app/api/blocks/route.ts` | `jsonApiError`, `createServerClient`, `safeGetUser`, `next/server`, `zod`, `toErrorMessage` | `/api/blocks`, `DELETE`, `GET`, `POST` |
| `app/api/ci/run/route.ts` | `runCiCommand`, `next/server` | `/api/ci/run`, `POST` |
| `app/api/close-friends/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/close-friends`, `DELETE`, `GET`, `POST` |
| `app/api/codeengin/diagnostics/route.ts` | `assertCodeEnginAccess`, `diagnoseFile`, `diagnoseWorkspace`, `safeErrorMessage`, `next/server` | `/api/codeengin/diagnostics`, `POST` |
| `app/api/codeengin/file/route.ts` | `assertCodeEnginAccess`, `safeErrorMessage`, `createProjectFile`, `deleteProjectFile`, `moveProjectFile`, `readProjectFile`, `writeProjectFile`, `next/server` | `/api/codeengin/file`, `POST` |
| `app/api/codeengin/git/route.ts` | `assertCodeEnginAccess`, `getGitDiff`, `getGitLog`, `getGitStatus`, `safeErrorMessage`, `next/server` | `/api/codeengin/git`, `POST` |
| `app/api/codeengin/run/route.ts` | `assertCodeEnginAccess`, `safeErrorMessage`, `listRunnerCommands`, `runCodeEnginCommand`, `next/server` | `/api/codeengin/run`, `GET`, `POST` |
| `app/api/codeengin/search/route.ts` | `assertCodeEnginAccess`, `safeErrorMessage`, `searchWorkspace`, `next/server` | `/api/codeengin/search`, `POST` |
| `app/api/codeengin/upload/route.ts` | `child_process`, `fs/promises`, `os`, `path`, `assertCodeEnginAccess`, `CODEENGIN_BLOCKED_SEGMENTS`, `isLikelyEditableFile`, `normalizeProjectPath` | `/api/codeengin/upload`, `POST` |
| `app/api/codeengin/workspace/route.ts` | `assertCodeEnginAccess`, `buildProjectGraph`, `safeErrorMessage`, `createCodeEnginWorkspace`, `getWorkspaceOverview`, `listEditableFiles`, `listRunnerCommands`, `next/server` | `/api/codeengin/workspace`, `GET`, `POST` |
| `app/api/comments/route.ts` | `scanContent`, `reportChildSafetyIncident`, `createServerClient`, `safeGetUser`, `crypto`, `next/server`, `zod`, `toErrorMessage` | `/api/comments`, `DELETE`, `GET`, `POST` |
| `app/api/connectors/[provider]/connect/route.ts` | `blueskyVerify`, `githubVerify`, `mastodonVerify`, `nostrVerify`, `redditVerify`, `youtubeVerify`, `createServerClient`, `safeGetUser` | `/api/connectors/[provider]/connect`, `POST` |
| `app/api/connectors/[provider]/disconnect/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/connectors/[provider]/disconnect`, `DELETE` |
| `app/api/connectors/[provider]/items/route.ts` | `safeGetUser`, `createServerClient`, `toErrorMessage`, `@supabase/supabase-js`, `next/server` | `/api/connectors/[provider]/items`, `GET` |
| `app/api/connectors/[provider]/sync/route.ts` | `reconcileConnector`, `DISPATCH_SUPPORTED_PROVIDERS`, `createServerClient`, `safeGetUser`, `ConnectorSyncResponse`, `@supabase/supabase-js`, `next/server` | `/api/connectors/[provider]/sync`, `POST` |
| `app/api/connectors/[provider]/verify/route.ts` | `blueskyVerify`, `githubVerify`, `mastodonVerify`, `nostrVerify`, `redditVerify`, `youtubeVerify`, `createServerClient`, `safeGetUser` | `/api/connectors/[provider]/verify`, `GET` |
| `app/api/connectors/cron/route.ts` | `ReconcileResult`, `reconcileConnector`, `DISPATCH_SUPPORTED_PROVIDERS`, `isCronAuthorised`, `createServiceClient`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/connectors/cron`, `GET` |
| `app/api/connectors/instagram/oauth/callback/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/headers`, `next/server` | `/api/connectors/instagram/oauth/callback`, `GET` |
| `app/api/connectors/instagram/oauth/start/route.ts` | `next/headers`, `next/server` | `/api/connectors/instagram/oauth/start`, `GET` |
| `app/api/connectors/status/route.ts` | `ConnectorStatus`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/connectors/status`, `ConnectorStatusEntry`, `GET` |
| `app/api/connectors/webhooks/[provider]/route.ts` | `supportsWebhook`, `supportsWebhookVerification`, `extractMetaWebhookChallenge`, `extractYouTubeWebSubChallenge`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/connectors/webhooks/[provider]`, `GET`, `POST` |
| `app/api/connectors/youtube/oauth/callback/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/headers`, `next/server` | `/api/connectors/youtube/oauth/callback`, `GET` |
| `app/api/connectors/youtube/oauth/start/route.ts` | `next/headers`, `next/server` | `/api/connectors/youtube/oauth/start`, `GET` |
| `app/api/content/generative-fill/route.ts` | `createServerClient`, `safeGetUser`, `next/server`, `zod`, `toErrorMessage` | `/api/content/generative-fill`, `POST` |
| `app/api/content/intelligence/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `zod`, `toErrorMessage` | `/api/content/intelligence`, `POST` |
| `app/api/content/transcribe/route.ts` | `parseSRT`, `parseVTT`, `totalDurationMs`, `createServerClient`, `safeGetUser`, `next/server`, `zod` | `/api/content/transcribe`, `POST` |
| `app/api/content/voice-clone/route.ts` | `estimateDurationSeconds`, `createServerClient`, `safeGetUser`, `next/server`, `zod`, `toErrorMessage` | `/api/content/voice-clone`, `POST` |
| `app/api/contentengin/assets/[assetId]/export/gameengin/route.ts` | `safeSegment`, `safeUnder`, `next/server`, `fs/promises`, `path` | `/api/contentengin/assets/[assetId]/export/gameengin`, `POST` |
| `app/api/contentengin/assets/[assetId]/route.ts` | `safeUnder`, `next/server`, `fs/promises`, `path` | `/api/contentengin/assets/[assetId]`, `GET` |
| `app/api/contentengin/jobs/[jobId]/route.ts` | `next/server` | `/api/contentengin/jobs/[jobId]`, `GET` |
| `app/api/contentengin/jobs/route.ts` | `next/server`, `buildAsset`, `writeAssetBundle`, `zipDirectory`, `path` | `/api/contentengin/jobs`, `ContentEnginJobType`, `GET`, `POST` |
| `app/api/contentengin/upload/route.ts` | `next/server`, `analyzeImageBytes` | `/api/contentengin/upload`, `POST` |
| `app/api/dr-eams/hf/route.ts` | `next/server` | `/api/dr-eams/hf`, `POST` |
| `app/api/dr-eams/run/route.ts` | `next/server` | `/api/dr-eams/run`, `POST` |
| `app/api/drafts/[id]/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `zod` | `/api/drafts/[id]`, `DELETE`, `PATCH` |
| `app/api/drafts/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `zod`, `toErrorMessage` | `/api/drafts`, `GET`, `POST` |
| `app/api/dream-windows/[id]/route.ts` | `DreamWindowInstance`, `DREAM_WINDOW_STATES`, `validateDreamWindowLayers`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/dream-windows/[id]`, `DELETE`, `GET`, `PATCH` |
| `app/api/dream-windows/route.ts` | `DREAM_WINDOW_STATES`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/dream-windows`, `GET`, `POST` |
| `app/api/dreamengin/os-status/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/dreamengin/os-status`, `GET` |
| `app/api/dreamr/feed/route.ts` | `dreamrFeedHandler` | `/api/dreamr/feed`, `GET` |
| `app/api/dreamr/suggested/route.ts` | `rankFeed`, `scoreDreamRPost`, `ScoredPost`, `filterByCloseFriends`, `loadVisibilityCircle`, `getPrimaryPostMediaUrl`, `createServerClient`, `safeGetUser` | `/api/dreamr/suggested`, `GET` |
| `app/api/dreamr/tally/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `zod` | `/api/dreamr/tally`, `POST` |
| `app/api/dreams/feed/route.ts` | `createServerClient`, `safeGetUser`, `resolveFeedHost`, `HostKind`, `DreamDefinition`, `DreamInstance`, `FeedHostConfig`, `@supabase/supabase-js` | `/api/dreams/feed`, `GET`, `POST` |
| `app/api/dreams/instances/route.ts` | `createServerClient`, `safeGetUser`, `Surface`, `next/server`, `zod` | `/api/dreams/instances`, `GET` |
| `app/api/dreams/transfer/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/dreams/transfer`, `POST` |
| `app/api/embed-feed/route.ts` | `EmbedFeedItem`, `loadEmbedFeed`, `createServerClient`, `@supabase/supabase-js`, `next/server` | `/api/embed-feed`, `EmbedFeedResponse`, `GET` |
| `app/api/favorites/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/favorites`, `DELETE`, `GET`, `POST` |
| `app/api/feed/route.ts` | `sortByVisibilityScore`, `getPrimaryPostMediaUrl`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/feed`, `GET`, `UnifiedFeedEntry` |
| `app/api/follow/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/follow`, `DELETE`, `GET`, `POST` |
| `app/api/gal/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/gal`, `POST` |
| `app/api/game-scores/route.ts` | `CARTRIDGE_MANIFEST`, `createServerClient`, `safeGetUser`, `next/server`, `zod`, `toErrorMessage` | `/api/game-scores`, `GET`, `PATCH`, `POST` |
| `app/api/gameengin/crash-report/route.ts` | `CRASH_REPORT_MAX_BYTES`, `isActiveCartridge`, `recordCrashReport`, `next/server`, `toErrorMessage` | `/api/gameengin/crash-report`, `POST` |
| `app/api/health/route.ts` | `next/server` | `/api/health`, `GET` |
| `app/api/home-layout/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/home-layout`, `GET`, `POST` |
| `app/api/journey/route.ts` | `createServerClient`, `safeGetUser`, `Json`, `next/server`, `toErrorMessage` | `/api/journey`, `GET`, `POST` |
| `app/api/lab/benchmarks/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/lab/benchmarks`, `POST` |
| `app/api/ledger-media/route.ts` | `decodeLedgerBlob`, `createServerClient`, `next/server`, `toErrorMessage` | `/api/ledger-media`, `GET` |
| `app/api/likes/route.ts` | `createServerClient`, `safeGetUser`, `next/server`, `toErrorMessage` | `/api/likes`, `DELETE`, `GET`, `POST` |
| `app/api/marketplace/request/route.ts` | `buildContactRequestRecord`, `validateContactRequest`, `createServerClient`, `safeGetUser`, `next/server` | `/api/marketplace/request`, `POST` |
| `app/api/marketplace/route.ts` | `createServerClient`, `safeGetUser`, `next/server`, `toErrorMessage` | `/api/marketplace`, `GET`, `POST` |
| `app/api/messages/boards/route.ts` | `createServerClient`, `safeGetUser`, `next/server`, `zod` | `/api/messages/boards`, `POST` |
| `app/api/messages/route.ts` | `scanContent`, `reportChildSafetyIncident`, `scanMediaUrlsForChildSafety`, `safeGetUser`, `createServerClient`, `toErrorMessage`, `@supabase/supabase-js`, `crypto` | `/api/messages`, `GET`, `POST` |
| `app/api/metrics/platform/route.ts` | `GetPlatformMetricsResponse`, `createServerClient`, `createServiceClient`, `safeGetUser`, `next/server` | `/api/metrics/platform`, `GET` |
| `app/api/metrics/route.ts` | `getPrometheusMetrics`, `initOtelBridge`, `next/server` | `/api/metrics`, `GET` |
| `app/api/metrics/user/[userId]/route.ts` | `ActivityTier`, `isValidActivityTier`, `GetUserMetricsResponse`, `UserMetrics`, `createServerClient`, `Database`, `next/server` | `/api/metrics/user/[userId]`, `GET` |
| `app/api/music/route.ts` | `createServerClient`, `safeGetUser`, `Database`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/music`, `DELETE`, `GET`, `POST` |
| `app/api/notifications/route.ts` | `createServerClient`, `safeGetUser`, `next/server`, `toErrorMessage` | `/api/notifications`, `DELETE`, `GET`, `PUT` |
| `app/api/platform/errors/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/platform/errors`, `GET`, `POST` |
| `app/api/posts/[id]/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/posts/[id]`, `DELETE` |
| `app/api/posts/[id]/save/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/posts/[id]/save`, `DELETE`, `POST` |
| `app/api/posts/[id]/view/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/posts/[id]/view`, `POST` |
| `app/api/posts/profile/[userId]/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/posts/profile/[userId]`, `GET` |
| `app/api/posts/route.ts` | `scanContent`, `reportChildSafetyIncident`, `scanMediaUrlsForChildSafety`, `getPrimaryPostMediaUrl`, `createServerClient`, `safeGetUser`, `Database`, `@supabase/supabase-js` | `/api/posts`, `GET`, `POST` |
| `app/api/profile/route.ts` | `createServerClient`, `safeGetUser`, `Database`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/profile`, `GET`, `PUT` |
| `app/api/projects/route.ts` | `createServerClient`, `safeGetUser`, `Database`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/projects`, `DELETE`, `GET`, `POST`, `PUT` |
| `app/api/scheduled-posts/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/scheduled-posts`, `DELETE`, `GET`, `POST`, `PUT` |
| `app/api/security/scan/route.ts` | `child_process`, `next/server`, `util`, `toErrorMessage` | `/api/security/scan`, `POST` |
| `app/api/settings/appearance/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/settings/appearance`, `GET`, `POST` |
| `app/api/settings/feed/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/settings/feed`, `GET`, `POST` |
| `app/api/settings/notifications/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/settings/notifications`, `GET`, `POST` |
| `app/api/settings/privacy/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/settings/privacy`, `GET`, `POST` |
| `app/api/setup/check/route.ts` | `getSetupStatus`, `next/server` | `/api/setup/check`, `GET` |
| `app/api/setup/google-oauth/route.ts` | `SUPABASE_CONFIG`, `getServerSiteOrigin`, `getSupabaseAuthCallbackUrl`, `next/server` | `/api/setup/google-oauth`, `GET` |
| `app/api/shared-dream/sessions/[id]/route.ts` | `safeGetUser`, `createServerClient`, `@supabase/supabase-js`, `next/server`, `zod` | `/api/shared-dream/sessions/[id]`, `GET`, `PATCH` |
| `app/api/shared-dream/sessions/route.ts` | `safeGetUser`, `createServerClient`, `@supabase/supabase-js`, `next/server`, `zod` | `/api/shared-dream/sessions`, `GET`, `POST` |
| `app/api/shellhub/devices/route.ts` | `SHELLHUB_DEFAULT_SERVER`, `shellhubListDevices`, `ShellHubDevice`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/shellhub/devices`, `GET`, `ShellHubDevicesResponse` |
| `app/api/shop/route.ts` | `normalizeShopListing`, `validateShopListing`, `createServerClient`, `safeGetUser`, `Database`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/shop`, `DELETE`, `GET`, `POST`, `PUT` |
| `app/api/skip-credits/balance/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/skip-credits/balance`, `GET` |
| `app/api/skip-credits/earn/route.ts` | `EarnSkipCreditsRequest`, `EarnSkipCreditsResponse`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/skip-credits/earn`, `POST` |
| `app/api/skip-credits/use/route.ts` | `UseSkipCreditsRequest`, `UseSkipCreditsResponse`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/skip-credits/use`, `POST` |
| `app/api/social/ipfs/route.ts` | `createServerClient`, `safeGetUser`, `next/server` | `/api/social/ipfs`, `GET`, `POST` |
| `app/api/social/livekit/room/route.ts` | `LiveKitRoomInfo`, `createServerClient`, `safeGetUser`, `next/server` | `/api/social/livekit/room`, `GET` |
| `app/api/social/livekit/token/route.ts` | `generateServerToken`, `LiveKitError`, `createServerClient`, `safeGetUser`, `next/server`, `toErrorMessage` | `/api/social/livekit/token`, `POST` |
| `app/api/social/rss-feed/route.ts` | `DEFAULT_NITTER_INSTANCE`, `devtoUserRssUrl`, `facebookPageRssUrl`, `githubUserAtomUrl`, `hackerNewsRssUrl`, `hackerNewsUserRssUrl`, `mastodonUserRssUrl`, `mediumUserRssUrl` | `/api/social/rss-feed`, `GET` |
| `app/api/upload/route.ts` | `crypto`, `zlib`, `createServerClient`, `safeGetUser`, `next/server` | `/api/upload`, `POST` |
| `app/api/user/layout/route.ts` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server`, `toErrorMessage` | `/api/user/layout`, `GET`, `POST` |
| `app/api/views/track/route.ts` | `TrackViewRequest`, `TrackViewResponse`, `View`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `next/server` | `/api/views/track`, `POST` |
| `app/api/widgets/feed/route.ts` | `next/server` | `/api/widgets/feed`, `GET`, `POST` |
| `app/api/widgets/instances/route.ts` | `next/server` | `/api/widgets/instances`, `GET` |
| `app/api/youtube/channel/route.ts` | `getYouTubeApiKey`, `youtubeSearchByQuery`, `UnifiedFeedItem`, `next/server`, `toErrorMessage` | `/api/youtube/channel`, `GET`, `YouTubeChannelResponse` |
| `app/api/youtube/discovery/route.ts` | `getYouTubeApiKey`, `youtubeDiscovery`, `UnifiedFeedItem`, `next/server`, `toErrorMessage` | `/api/youtube/discovery`, `GET`, `YouTubeDiscoveryResponse` |
| `app/api/youtube/live-feed/route.ts` | `getYouTubeApiKey`, `youtubeSearchByQuery`, `parseRssFeed`, `youtubeChannelRssUrl`, `UnifiedFeedItem`, `next/server`, `toErrorMessage` | `/api/youtube/live-feed`, `GET`, `YouTubeLiveFeedResponse` |
| `app/auth/callback/route.ts` | `resolveSafeNextPath`, `SUPABASE_CONFIG`, `createServerClientWithCustomCookies`, `next/headers`, `next/server` | `GET` |
| `app/auth/reset-password/page.tsx` | `createClient`, `buildAuthCallbackUrl`, `next/link`, `react` | `/auth/reset-password`, `page.tsx`, `(default)` |
| `app/auth/update-password/page.tsx` | `(default)`, `createClient`, `next/link`, `next/navigation`, `react` | `/auth/update-password`, `page.tsx`, `(default)` |
| `app/connectors/dream.ConnectorsClient.tsx` | `FeedSlice`, `(default)`, `(default)`, `(default)`, `(default)`, `(default)`, `WidgetDataState`, `(default)` | `dream.ConnectorsClient.tsx`, `(default)` |
| `app/connectors/page.tsx` | `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `next/server`, `(default)` | `/connectors`, `page.tsx`, `(default)`, `metadata` |
| `app/daydream/brand/engin/page.tsx` | `next/navigation`, `next/server` | `/daydream/brand/engin`, `page.tsx`, `(default)` |
| `app/daydream/brand/page.tsx` | `(default)`, `DaydreamWidget`, `(default)`, `(default)`, `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser` | `/daydream/brand`, `page.tsx`, `(default)`, `metadata` |
| `app/daydream/code/engin/page.tsx` | `next/navigation`, `next/server` | `/daydream/code/engin`, `page.tsx`, `(default)` |
| `app/daydream/code/page.tsx` | `(default)`, `(default)`, `DaydreamWidget`, `(default)`, `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser` | `/daydream/code`, `page.tsx`, `(default)`, `metadata` |
| `app/daydream/constellation/dream.ConstellationClient.tsx` | `(default)`, `lucide-react`, `next/link` | `dream.ConstellationClient.tsx`, `(default)` |
| `app/daydream/constellation/page.tsx` | `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server`, `(default)` | `/daydream/constellation`, `page.tsx`, `(default)`, `metadata` |
| `app/daydream/create/engin/page.tsx` | `next/navigation`, `next/server` | `/daydream/create/engin`, `page.tsx`, `(default)` |
| `app/daydream/create/page.tsx` | `(default)`, `(default)`, `DaydreamWidget`, `(default)`, `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser` | `/daydream/create`, `page.tsx`, `(default)`, `metadata` |
| `app/daydream/forge/page.tsx` | `(default)`, `DaydreamWidget`, `(default)`, `(default)`, `(default)`, `isDevBypassActive`, `CREATIVE_ENGINES`, `createServerClient` | `/daydream/forge`, `page.tsx`, `(default)`, `metadata` |
| `app/daydream/game/dream.GamePageClient.tsx` | `default` | `default` |
| `app/daydream/game/dream.shell.ImmersiveGameShell.tsx` | `(default)`, `(default)`, `GameCartridge`, `GravityPreset`, `loadCartridge`, `CARTRIDGE_MANIFEST`, `buildGameLaunchHref`, `DEFAULT_GAME_ID` | `dream.shell.ImmersiveGameShell.tsx`, `(default)` |
| `app/daydream/game/page.tsx` | `next/navigation`, `next/server` | `/daydream/game`, `page.tsx`, `(default)`, `metadata` |
| `app/daydream/games/engin/page.tsx` | `next/navigation`, `next/server` | `/daydream/games/engin`, `page.tsx`, `(default)` |
| `app/daydream/games/page.tsx` | `(default)`, `isDevBypassActive`, `safeGetUser`, `createServerClient`, `lucide-react`, `next/link`, `next/navigation`, `(default)` | `/daydream/games`, `page.tsx`, `(default)`, `metadata` |
| `app/daydream/lab/engin/page.tsx` | `next/navigation`, `next/server` | `/daydream/lab/engin`, `page.tsx`, `(default)` |
| `app/daydream/lab/page.tsx` | `(default)`, `DaydreamWidget`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation` | `/daydream/lab`, `page.tsx`, `(default)`, `metadata` |
| `app/daydream/lab/portfolio/page.tsx` | `(default)`, `DaydreamWidget`, `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `lucide-react`, `next/link` | `/daydream/lab/portfolio`, `page.tsx`, `(default)`, `metadata` |
| `app/daydream/media-vault/page.tsx` | `next/navigation`, `next/server` | `/daydream/media-vault`, `page.tsx`, `(default)`, `metadata` |
| `app/daydream/music/engin/page.tsx` | `next/navigation`, `next/server` | `/daydream/music/engin`, `page.tsx`, `(default)` |
| `app/daydream/music/page.tsx` | `(default)`, `DaydreamWidget`, `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `lucide-react`, `next/navigation` | `/daydream/music`, `page.tsx`, `(default)`, `metadata` |
| `app/daydream/music/upload/page.tsx` | `createClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `react`, `toErrorMessage` | `/daydream/music/upload`, `page.tsx`, `(default)` |
| `app/daydream/play/page.tsx` | `buildGameLaunchHref`, `DEFAULT_GAME_ID`, `next/navigation`, `next/server` | `/daydream/play`, `page.tsx`, `(default)` |
| `app/daydream/render/page.tsx` | `next/navigation` | `/daydream/render`, `page.tsx`, `(default)`, `metadata` |
| `app/discover/page.tsx` | `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `next/server` | `/discover`, `page.tsx`, `(default)`, `metadata` |
| `app/dream-effects/page.tsx` | `useGsapEntrance`, `cn`, `framer-motion`, `lucide-react`, `next/dynamic`, `react`, `(dynamic import)` | `/dream-effects`, `page.tsx`, `(default)` |
| `app/dreamdmbar/_components/DreamBarDataBridge.tsx` | `useDualRuntime`, `useDreamSystem`, `DIVIDER_H`, `SystemPanelId`, `EnginDispatcher`, `dreamOSBus`, `createClient`, `react` | `DreamBarDataBridge.tsx`, `(default)` |
| `app/dreamdmbar/_components/dreamr/algorithms/botDetector.ts` | `slog`, `TORRIDITY_LEDGER_CONFIG` | `InteractionSignal`, `SwipePathScore`, `TouchPoint`, `isLikelyBot`, `isSwipeBot`, `scoreBotLikelihood`, `scoreSwipePath` |
| `app/dreamdmbar/_components/dreamr/algorithms/dreamrAlgorithm.ts` | `calculateRank`, `derivePostMassMeta`, `getPostMass` | `DREAMR_REASONS`, `DREAMR_WEIGHTS`, `DreamRSignals`, `ScoredPost`, `computeViewVelocity`, `dominantSignal`, `rankFeed`, `scoreContentDepth` |
| `app/dreamdmbar/_components/dreamr/api/feedHandler.ts` | `filterByCloseFriends`, `loadVisibilityCircle`, `deriveNextCursor`, `parseFeedParams`, `getPrimaryPostMediaUrl`, `PostMediaShape`, `safeGetUser`, `createServerClient` | `dreamrFeedHandler` |
| `app/dreamdmbar/_components/dreamr/api/route.ts` | `dreamrFeedHandler` | `GET` |
| `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx` | `bridge`, `react` | `dream.DreamRCore.tsx`, `(default)` |
| `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx` | `Point`, `analyzeSwipe`, `tallyView`, `enginBridge`, `react`, `react`, `DREAMR_TOPICS` | `dream.DreamRFeed.tsx`, `(default)`, `DREAMR_TOPICS` |
| `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx` | `(default)`, `(default)`, `(default)`, `FeedPost`, `uploadBlobToLedgerStorage`, `createClient`, `lucide-react`, `next/image` | `dreamsurface.dreamr.tsx`, `(default)` |
| `app/dreamdmbar/_components/DreamSpaceRegion.tsx` | `(default)`, `useAccount`, `listSystemArtifacts`, `listVisibleArtifacts`, `restoreArtifact`, `restoreArtifactsFromOfflineCache`, `useOS`, `AssetEntry` | `DreamSpaceRegion.tsx`, `(default)` |
| `app/dreamdmbar/_components/DreamWidgetGrid.tsx` | `WidgetInstance` | `DreamWidgetGrid.tsx`, `(default)` |
| `app/dreamdmbar/_components/HomeDreamRegion.tsx` | `lucide-react`, `next/navigation`, `react`, `(default)`, `(default)`, `(default)`, `(default)`, `(default)` | `HomeDreamRegion.tsx`, `(default)` |
| `app/dreamdmbar/dreamspace/page.tsx` | `useDualRuntime`, `useDreamSystem`, `react` | `/dreamdmbar/dreamspace`, `page.tsx`, `(default)` |
| `app/dreamdmbar/dualruntime/page.tsx` | `(default)`, `useDreamSystem`, `react` | `/dreamdmbar/dualruntime`, `page.tsx`, `(default)` |
| `app/dreamdmbar/homedream/page.tsx` | `useDualRuntime`, `useDreamSystem`, `react` | `/dreamdmbar/homedream`, `page.tsx`, `(default)` |
| `app/dreamdmbar/layout.tsx` | `(default)`, `(default)`, `(default)`, `isOwnerEmail`, `isDevBypassActive`, `FeedPost`, `getPrimaryPostMediaUrl`, `safeGetUser` | `layout.tsx`, `(default)` |
| `app/dreamdmbar/page.tsx` | `next/navigation` | `/dreamdmbar`, `page.tsx`, `(default)` |
| `app/dreamr/page.tsx` | `(default)`, `(default)`, `isDevBypassActive`, `safeGetUser`, `createServerClient`, `lucide-react`, `next/navigation`, `next/server` | `/dreamr`, `page.tsx`, `(default)`, `metadata` |
| `app/dreamspace/page.tsx` | `(default)` | `/dreamspace`, `page.tsx`, `(default)` |
| `app/edit-profiledream/page.tsx` | `ActivityProfile`, `(default)`, `DEFAULT_DREAMS`, `ProfileDream`, `(default)`, `createClient`, `safeGetUser`, `lucide-react` | `/edit-profiledream`, `page.tsx`, `(default)` |
| `app/engines/brand/campaigns/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/brand/campaigns`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/brand/identity/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/brand/identity`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/brand/layout.tsx` | `react` | `layout.tsx`, `(default)`, `metadata` |
| `app/engines/brand/page.tsx` | `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/brand`, `page.tsx`, `(default)` |
| `app/engines/code/ai/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/code/ai`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/code/layout.tsx` | `react` | `layout.tsx`, `(default)`, `metadata` |
| `app/engines/code/notebook/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/code/notebook`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/code/page.tsx` | `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/code`, `page.tsx`, `(default)` |
| `app/engines/code/projects/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/code/projects`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/create/calendar/page.tsx` | `(default)`, `isDevBypassActive`, `safeGetUser`, `createServerClient`, `next/navigation`, `next/server` | `/engines/create/calendar`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/create/editor/page.tsx` | `(default)`, `isDevBypassActive`, `safeGetUser`, `createServerClient`, `next/navigation`, `next/server` | `/engines/create/editor`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/create/layout.tsx` | `react` | `layout.tsx`, `(default)`, `metadata` |
| `app/engines/create/page.tsx` | `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/create`, `page.tsx`, `(default)` |
| `app/engines/create/queue/page.tsx` | `(default)`, `isDevBypassActive`, `safeGetUser`, `createServerClient`, `next/navigation`, `next/server` | `/engines/create/queue`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/games/builder/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `buildLoginRedirectPath`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation` | `/engines/games/builder`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/games/layout.tsx` | `react` | `layout.tsx`, `(default)`, `metadata` |
| `app/engines/games/library/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `buildLoginRedirectPath`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation` | `/engines/games/library`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/games/page.tsx` | `(default)`, `buildLoginRedirectPath`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/games`, `page.tsx`, `(default)` |
| `app/engines/games/scores/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `buildLoginRedirectPath`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation` | `/engines/games/scores`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/lab/data/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/lab/data`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/lab/experiments/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/lab/experiments`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/lab/layout.tsx` | `react` | `layout.tsx`, `(default)`, `metadata` |
| `app/engines/lab/page.tsx` | `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/lab`, `page.tsx`, `(default)` |
| `app/engines/lab/quantum/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/lab/quantum`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/layout.tsx` | `react` | `layout.tsx`, `(default)` |
| `app/engines/music/arrange/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/music/arrange`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/music/layout.tsx` | `react` | `layout.tsx`, `(default)`, `metadata` |
| `app/engines/music/library/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/music/library`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/music/page.tsx` | `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/music`, `page.tsx`, `(default)` |
| `app/engines/music/studio/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/music/studio`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/page.tsx` | `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/link`, `next/navigation`, `next/server`, `USER_FACING_ENGINES` | `/engines`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/portfolio/assets/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/portfolio/assets`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/portfolio/layout.tsx` | `react` | `layout.tsx`, `(default)`, `metadata` |
| `app/engines/portfolio/optimize/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/portfolio/optimize`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/portfolio/page.tsx` | `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/portfolio`, `page.tsx`, `(default)` |
| `app/engines/portfolio/quantum/page.tsx` | `(default)`, `EnginAppShell`, `EnginNavBar`, `isDevBypassActive`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/engines/portfolio/quantum`, `page.tsx`, `(default)`, `metadata` |
| `app/engines/render/page.tsx` | `next/navigation` | `/engines/render`, `page.tsx`, `(default)`, `metadata` |
| `app/error.tsx` | `(default)`, `isAuthRelatedError`, `createClient`, `react` | `error.tsx`, `(default)` |
| `app/feed-settings/dream.FeedSettingsClient.tsx` | `lucide-react`, `next/link`, `react`, `queueLocalFirstMutation` | `dream.FeedSettingsClient.tsx`, `(default)` |
| `app/feed-settings/page.tsx` | `createServerClient`, `safeGetUser`, `next/navigation`, `next/server`, `(default)` | `/feed-settings`, `page.tsx`, `(default)`, `metadata` |
| `app/gameengin/cartridges/[id]/page.tsx` | `(default)`, `getCartridgeManifest`, `next/navigation`, `next/server` | `/gameengin/cartridges/:id`, `page.tsx`, `(default)` |
| `app/gameengin/cartridges/page.tsx` | `(default)`, `next` | `/gameengin/cartridges`, `page.tsx`, `(default)`, `metadata` |
| `app/gameengin/page.tsx` | `next/navigation` | `/gameengin`, `page.tsx`, `(default)` |
| `app/global-error.tsx` | `react`, `toErrorMessage` | `global-error.tsx`, `(default)` |
| `app/homedream/page.tsx` | `(default)`, `isDevBypassActive`, `FeedPost`, `safeGetUser`, `createServerClient`, `next/navigation`, `next/server` | `/homedream`, `page.tsx`, `(default)` |
| `app/join/page.tsx` | `(default)`, `createClient`, `buildAuthCallbackUrl`, `next/image`, `next/link`, `next/navigation`, `react` | `/join`, `page.tsx`, `(default)` |
| `app/lab/[id]/codespace/page.tsx` | `lucide-react`, `next/link`, `react`, `, ` | `/lab/:id/codespace`, `page.tsx`, `(default)` |
| `app/lab/[id]/page.tsx` | `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `next/server` | `/lab/:id`, `page.tsx`, `(default)` |
| `app/lab/new/page.tsx` | `createClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `react`, `toErrorMessage` | `/lab/new`, `page.tsx`, `(default)` |
| `app/lab/page.tsx` | `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `lucide-react`, `next/link`, `next/navigation`, `next/server` | `/lab`, `page.tsx`, `(default)` |
| `app/layout.tsx` | `(side-effect)`, `(side-effect)`, `(side-effect)`, `(default)`, `(default)`, `(default)`, `(default)`, `(default)` | `layout.tsx`, `(default)`, `metadata`, `viewport` |
| `app/loading.tsx` | `(default)` | `loading.tsx`, `(default)` |
| `app/login/page.tsx` | `(default)`, `resolveSafeNextPath`, `createClient`, `buildAuthCallbackUrl`, `next/image`, `next/link`, `next/navigation`, `react` | `/login`, `page.tsx`, `(default)` |
| `app/marketplace/[id]/page.tsx` | `(default)`, `(default)`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `lucide-react`, `next/link`, `next/navigation` | `/marketplace/:id`, `page.tsx`, `(default)` |
| `app/marketplace/page.tsx` | `(default)`, `(default)`, `(default)`, `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation` | `/marketplace`, `page.tsx`, `(default)`, `metadata` |
| `app/marketplace/sell/page.tsx` | `createClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `react`, `toErrorMessage`, `queueLocalFirstMutation` | `/marketplace/sell`, `page.tsx`, `(default)` |
| `app/messages/boards/[id]/page.tsx` | `(default)`, `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `next/server` | `/messages/boards/:id`, `page.tsx`, `(default)` |
| `app/messages/boards/new/page.tsx` | `lucide-react`, `next/link`, `next/navigation`, `react` | `/messages/boards/new`, `page.tsx`, `(default)` |
| `app/messages/boards/page.tsx` | `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `next/server` | `/messages/boards`, `page.tsx`, `(default)`, `metadata` |
| `app/messages/new/page.tsx` | `safeGetUser`, `createServerClient`, `@supabase/supabase-js`, `next/navigation`, `next/server` | `/messages/new`, `page.tsx`, `(default)` |
| `app/messages/page.tsx` | `(default)`, `createServerClient`, `safeGetUser`, `next/navigation`, `next/server` | `/messages`, `page.tsx`, `(default)` |
| `app/mission/page.tsx` | `next/link` | `/mission`, `page.tsx`, `(default)` |
| `app/not-found.tsx` | `(default)` | `not-found.tsx`, `(default)` |
| `app/notes/page.tsx` | `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `next/server` | `/notes`, `page.tsx`, `(default)`, `metadata` |
| `app/onboarding/page.tsx` | `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `next/server` | `/onboarding`, `page.tsx`, `(default)`, `metadata` |
| `app/page.tsx` | `safeGetUser`, `createServerClient`, `next/navigation`, `next/server`, `next/dynamic`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)` | `/`, `page.tsx`, `(default)` |
| `app/policy/page.tsx` | `BOOGIE_POLICY_VERSION`, `lucide-react`, `next/link`, `, marginBottom: 10, lineHeight: 1.6 }}>               Strike levels: LOW (expires 14d) · MEDIUM (30d) · HIGH (90d) · CRITICAL (180d).               Weights: LOW=1, MEDIUM=2, HIGH=4, CRITICAL=10.               All strikes are appealable.             </p>             <PolicyTable rows={[               [` | `/policy`, `page.tsx`, `(default)`, `metadata` |
| `app/profile/[handle]/page.tsx` | `ActivityProfile`, `(default)`, `(default)`, `(default)`, `(default)`, `DEFAULT_DREAMS`, `ProfileDream`, `(default)` | `/profile/:handle`, `page.tsx`, `(default)` |
| `app/profile/page.tsx` | `next/navigation`, `next/server` | `/profile`, `page.tsx`, `(default)` |
| `app/settings/account/dream.DangerZoneActions.tsx` | `lucide-react`, `react` | `dream.DangerZoneActions.tsx`, `(default)` |
| `app/settings/account/page.tsx` | `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `next/server`, `(default)` | `/settings/account`, `page.tsx`, `(default)` |
| `app/settings/algorithm/page.tsx` | `(default)`, `(default)`, `createServerClient`, `safeGetUser`, `lucide-react`, `next/navigation`, `next/server` | `/settings/algorithm`, `page.tsx`, `(default)`, `metadata` |
| `app/settings/appearance/page.tsx` | `THEME_PRESETS`, `applyTheme`, `applyVoidTheme`, `isVoidThemeActive`, `DeTheme`, `useTheme`, `useCustomizeMode`, `THEME_PRESETS` | `/settings/appearance`, `page.tsx`, `(default)` |
| `app/settings/controls/dream.ControlsClient.tsx` | `lucide-react`, `next/link`, `react`, `queueLocalFirstMutation`, `(default)` | `dream.ControlsClient.tsx`, `(default)` |
| `app/settings/controls/dream.PositionIndicatorToggle.tsx` | `react` | `dream.PositionIndicatorToggle.tsx`, `(default)` |
| `app/settings/controls/page.tsx` | `createServerClient`, `safeGetUser`, `next/navigation`, `next/server`, `(default)` | `/settings/controls`, `page.tsx`, `(default)`, `metadata` |
| `app/settings/data/dream.DataClient.tsx` | `lucide-react`, `next/link`, `react` | `dream.DataClient.tsx`, `(default)` |
| `app/settings/data/page.tsx` | `createServerClient`, `safeGetUser`, `next/navigation`, `next/server`, `(default)` | `/settings/data`, `page.tsx`, `(default)`, `metadata` |
| `app/settings/dreams/dreams-layout-editor.tsx` | `(default)`, `useDreamLayout`, `lucide-react` | `dreams-layout-editor.tsx`, `(default)` |
| `app/settings/dreams/page.tsx` | `(default)`, `lucide-react`, `next/link`, `(default)` | `/settings/dreams`, `page.tsx`, `(default)`, `metadata` |
| `app/settings/feed/page.tsx` | `next/navigation`, `next/server` | `/settings/feed`, `page.tsx`, `(default)` |
| `app/settings/help/page.tsx` | `(default)`, `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `next/server` | `/settings/help`, `page.tsx`, `(default)`, `metadata` |
| `app/settings/notifications/page.tsx` | `(default)`, `lucide-react`, `react` | `/settings/notifications`, `page.tsx`, `(default)` |
| `app/settings/page.tsx` | `isOwnerEmail`, `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `next/server` | `/settings`, `page.tsx`, `(default)`, `metadata` |
| `app/settings/privacy/dream.PrivacyClient.tsx` | `lucide-react`, `next/link`, `react`, `queueLocalFirstMutation` | `dream.PrivacyClient.tsx`, `(default)` |
| `app/settings/privacy/page.tsx` | `createServerClient`, `safeGetUser`, `next/navigation`, `next/server`, `(default)` | `/settings/privacy`, `page.tsx`, `(default)`, `metadata` |
| `app/settings/safety/page.tsx` | `(default)`, `BOOGIE_POLICY_VERSION`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js`, `lucide-react`, `next/link`, `next/navigation` | `/settings/safety`, `page.tsx`, `(default)`, `metadata` |
| `app/settings/security/page.tsx` | `(default)`, `createClient`, `safeGetUser`, `buildAuthCallbackUrl`, `lucide-react`, `next/link`, `react`, `toErrorMessage` | `/settings/security`, `page.tsx`, `(default)` |
| `app/settings/widgets/page.tsx` | `(default)`, `lucide-react`, `next/link` | `/settings/widgets`, `page.tsx`, `(default)`, `metadata` |
| `app/shop/page.tsx` | `(default)`, `createServerClient`, `safeGetUser`, `lucide-react`, `next/link`, `next/navigation`, `next/server` | `/shop`, `page.tsx`, `(default)`, `metadata` |
| `app/shop/sell/page.tsx` | `createClient`, `safeGetUser`, `lucide-react`, `next/image`, `next/link`, `next/navigation`, `react`, `toErrorMessage` | `/shop/sell`, `page.tsx`, `(default)` |
| `app/u/[handle]/page.tsx` | `next/navigation`, `next/server` | `/u/:handle`, `page.tsx`, `(default)` |
| `app/view-profile/page.tsx` | `ActivityProfile`, `(default)`, `(default)`, `DEFAULT_DREAMS`, `ProfileDream`, `(default)`, `createServerClient`, `safeGetUser` | `/view-profile`, `page.tsx`, `(default)`, `metadata` |
| `app/webgpu/page.tsx` | `next/navigation`, `next` | `/webgpu`, `page.tsx`, `(default)`, `metadata` |
| `assembly/bus.ts` | - | `QUEUE_SIZE`, `dequeue`, `enqueue`, `reset` |
| `assembly/index.ts` | - | `hashBytesFNV1A`, `processAudioBufferSIMD`, `shapeGlowFieldSIMD`, `tickPhysicsSIMD` |
| `assembly/mad-maxi-player.ts` | - | `getCoyoteTimer`, `getDashTimer`, `getJumpsUsed`, `getMemoryUsage`, `getOnGround`, `getSnapshotSize`, `getTicks`, `getVX` |
| `components/activity/dream.ActivityPostForm.tsx` | `calculateActivityPoints`, `getTierDescription`, `ActivityTier`, `VerificationMethod`, `react`, `TierBadge` | `dream.ActivityPostForm.tsx`, `ActivityPostData`, `ActivityPostForm` |
| `components/activity/dream.ActivityProfile.tsx` | `formatAQS`, `formatRealShitRate`, `getAQSTier`, `getAQSTierColor`, `ActivityTier`, `GetUserMetricsResponse`, `UserMetrics`, `react` | `dream.ActivityProfile.tsx`, `ActivityProfile` |
| `components/activity/dream.TierBadge.tsx` | `getTierDescription`, `getTierDisplayName`, `ActivityTier` | `dream.TierBadge.tsx`, `TierBadge` |
| `components/ads/dream.AdUnit.tsx` | `AdType`, `next/image`, `react` | `dream.AdUnit.tsx`, `AdUnit` |
| `components/ads/dream.SkipCreditBalance.tsx` | `react` | `dream.SkipCreditBalance.tsx`, `SkipCreditBalance` |
| `components/auth/dream.PasswordField.tsx` | `lucide-react`, `react` | `dream.PasswordField.tsx`, `(default)` |
| `components/branding/dream.DreamEnginLogo.tsx` | `useDreamLogoScene`, `DreamLogoSceneOptions`, `react` | `dream.DreamEnginLogo.tsx`, `DreamEnginLogo` |
| `components/branding/dream.LogoHero.tsx` | `next/image` | `dream.LogoHero.tsx`, `(default)` |
| `components/branding/dream.Nav.tsx` | `lucide-react`, `next/image`, `next/link`, `react` | `dream.Nav.tsx`, `(default)` |
| `components/connectors/dream.AddSliceSheet.tsx` | `ConnectorDef`, `SliceTypeDef`, `react` | `dream.AddSliceSheet.tsx`, `(default)`, `AddSliceSheetProps`, `FeedSlice` |
| `components/connectors/dream.ConnectDreamPrompt.tsx` | `default`, `ConnectWidgetPromptProps` | `ConnectDreamPromptProps`, `default` |
| `components/connectors/dream.ConnectorRow.tsx` | `ConnectorDef`, `ConnectorStatus`, `lucide-react`, `react`, `react` | `dream.ConnectorRow.tsx`, `(default)`, `ConnectorRowProps` |
| `components/connectors/dream.NoSlotDialog.tsx` | `WidgetTypeDef` | `dream.NoSlotDialog.tsx`, `(default)`, `NoSlotDialogProps` |
| `components/connectors/dream.PlacementMode.tsx` | `handlePlacementCancel`, `handlePlacementDone`, `WidgetTypeDef`, `react` | `dream.PlacementMode.tsx`, `(default)`, `PlacedWidget`, `PlacementModeProps` |
| `components/connectors/dream.widget.ConnectorWidgetPicker.tsx` | `WidgetType`, `lucide-react`, `next/link`, `react` | `dream.widget.ConnectorWidgetPicker.tsx`, `(default)`, `ConnectorWidgetPickerProps`, `PickerConnector`, `TOP_10_CONNECTORS` |
| `components/connectors/dream.widget.ConnectWidgetPrompt.tsx` | `WidgetTypeDef`, `react` | `dream.widget.ConnectWidgetPrompt.tsx`, `(default)`, `ConnectWidgetPromptProps` |
| `components/contentengin/AnimationPanel.tsx` | `ContentAsset` | `AnimationPanel.tsx`, `(default)` |
| `components/contentengin/AssetPreview3D.tsx` | `react`, `ContentAsset`, `(default)`, `createInlineRenderIntent` | `AssetPreview3D.tsx`, `(default)` |
| `components/contentengin/ContentEnginStudio.tsx` | `(default)` | `ContentEnginStudio.tsx`, `(default)` |
| `components/contentengin/ExportPanel.tsx` | `ContentAsset` | `ExportPanel.tsx`, `(default)` |
| `components/contentengin/MaterialEditor.tsx` | `MaterialDef` | `MaterialEditor.tsx`, `(default)` |
| `components/contentengin/PartTreeEditor.tsx` | `PartNode` | `PartTreeEditor.tsx`, `(default)` |
| `components/contentengin/PhotoReferencePanel.tsx` | `react` | `PhotoReferencePanel.tsx`, `(default)` |
| `components/contentengin/RecipeEditor.tsx` | `ContentRecipe`, `ExportProfile` | `RecipeEditor.tsx`, `(default)` |
| `components/contentengin/RiggingPanel.tsx` | `ContentAsset` | `RiggingPanel.tsx`, `(default)` |
| `components/core/dream.CoreDream.tsx` | `(default)`, `next/link`, `react`, `react` | `dream.CoreDream.tsx`, `(default)` |
| `components/customize/dream.bar.CustomizeModeBar.tsx` | `useCustomizeMode` | `dream.bar.CustomizeModeBar.tsx`, `(default)` |
| `components/customize/dream.bar.CustomizeToolbar.tsx` | `useCustomizeMode` | `dream.bar.CustomizeToolbar.tsx`, `(default)` |
| `components/customize/dream.GlobalCustomizeUI.tsx` | `(default)`, `(default)`, `(default)`, `(default)`, `(default)`, `(default)` | `dream.GlobalCustomizeUI.tsx`, `(default)` |
| `components/customize/panels/dream.panel.ColorPanel.tsx` | `useCustomizeMode`, `SKIN_PRESETS`, `react`, `react` | `dream.panel.ColorPanel.tsx`, `(default)`, `SlidePanel` |
| `components/customize/panels/dream.panel.EffectsPanel.tsx` | `useCustomizeMode`, `SlidePanel` | `dream.panel.EffectsPanel.tsx`, `(default)` |
| `components/customize/panels/dream.panel.FontPanel.tsx` | `useCustomizeMode`, `SkinFont`, `SlidePanel` | `dream.panel.FontPanel.tsx`, `(default)` |
| `components/customize/panels/dream.panel.LayoutPanel.tsx` | `useCustomizeMode`, `SkinLayout`, `SkinShadow`, `SlidePanel` | `dream.panel.LayoutPanel.tsx`, `(default)` |
| `components/daydream/dream.CodeDreamIDE.tsx` | `bridge`, `getSwap`, `toggleSwap`, `lucide-react`, `react` | `dream.CodeDreamIDE.tsx`, `(default)` |
| `components/daydream/dream.constellationmap.tsx` | `next/navigation`, `react` | `dream.constellationmap.tsx`, `(default)` |
| `components/daydream/dream.DiffViewer.tsx` | `buildFullFileLines`, `buildScrollMarkers`, `DEMO_DIFF`, `firstHunkIndex`, `nextHunkIndex`, `parseUnifiedDiff`, `prevHunkIndex`, `DiffFile` | `dream.DiffViewer.tsx`, `(default)` |
| `components/daydream/dream.JourneyTrail.tsx` | `annotateDotsWithInsights`, `computeCurrentStreak`, `AnnotatedDot`, `JourneyDot`, `JourneyTimeGroup`, `framer-motion`, `react` | `dream.JourneyTrail.tsx`, `(default)` |
| `components/daydream/dream.LabDreamIDE.tsx` | `bridge`, `getSwap`, `toggleSwap`, `lucide-react`, `react` | `dream.LabDreamIDE.tsx`, `(default)` |
| `components/daydream/dream.NGNEngin.tsx` | `bridgeBuses`, `createEventBus`, `addConnection`, `addPiece`, `createAssembly`, `movePiece`, `removePiece`, `serializeAssembly` | `dream.NGNEngin.tsx`, `(default)` |
| `components/daydream/dream.OpenDaydreamSideBButton.tsx` | - | `dream.OpenDaydreamSideBButton.tsx`, `(default)` |
| `components/daydream/dream.shell.DaydreamShell.tsx` | `(default)`, `(default)`, `useDaydreamState`, `useForgeActivity`, `useGsapFlip`, `hasJourneyDot`, `logJourneyDot`, `JOURNEY_DOMAIN_COLORS` | `dream.shell.DaydreamShell.tsx`, `(default)`, `DaydreamWidget` |
| `components/daydream/dream.StandaloneEnginSurface.tsx` | `next/dynamic`, `next/navigation`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)` | `dream.StandaloneEnginSurface.tsx`, `(default)`, `StandaloneEnginName` |
| `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` | `recordForgeTransfer`, `useForgeActivity`, `bridge`, `createClient`, `safeGetUser`, `lucide-react`, `next/link`, `react` | `dreamsurface.daydream.BrandDaydream.tsx`, `(default)` |
| `components/daydream/starmaker/dream.panel.CompingPanel.tsx` | `AudioTake`, `CompingState`, `TakeRating`, `TAKE_COLORS`, `createDemoTake`, `lucide-react`, `react` | `dream.panel.CompingPanel.tsx`, `(default)` |
| `components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx` | `lucide-react`, `react`, `ARRANGEMENT_BARS`, `ArrangementClip`, `ArrangementSource`, `ArrangementTrackId`, `ArrangementTrackState` | `dream.panel.MultitrackArrangementPanel.tsx`, `(default)` |
| `components/daydream/starmaker/dream.panel.PianoRollPanel.tsx` | `MidiNote`, `PianoRollQuantize`, `PianoRollState`, `createMidiNote`, `isBlackKey`, `midiPitchToName`, `snapToGrid`, `lucide-react` | `dream.panel.PianoRollPanel.tsx`, `(default)` |
| `components/daydream/starmaker/dream.panel.SessionViewPanel.tsx` | `SessionTrack`, `SessionViewState`, `lucide-react`, `react` | `dream.panel.SessionViewPanel.tsx`, `(default)` |
| `components/draggable/dream.DraggableModule.tsx` | `bridge`, `ModuleManifest`, `RuntimeId`, `react`, `react` | `dream.DraggableModule.tsx`, `(default)` |
| `components/dream.AIAssistant.tsx` | `lucide-react`, `next/navigation`, `react`, `onIdariEvent`, `getDrEamsMode`, `onDrEamsModeChange`, `hasTaught`, `markTaught` | `dream.AIAssistant.tsx`, `(default)` |
| `components/dream.AudioVisualizer3D.tsx` | `react`, `react`, `Fingerprint`, `MatchResult`, `PeakMap`, `extractAudioChunks`, `matchFingerprint`, `recordReferenceFingerprint` | `dream.AudioVisualizer3D.tsx`, `(default)`, `AudioVisualizer3D`, `AudioVisualizer3DProps` |
| `components/dream.BoogieWarningBanner.tsx` | `PolicyResult`, `lucide-react`, `next/link`, `react` | `dream.BoogieWarningBanner.tsx`, `(default)` |
| `components/dream.BrandLogo.tsx` | `getRandomLogo`, `LOGO_PATHS`, `next/image`, `react` | `dream.BrandLogo.tsx`, `(default)` |
| `components/dream.CommandPalette.tsx` | `lucide-react`, `next/navigation`, `react` | `dream.CommandPalette.tsx`, `(default)`, `MobileCmdFab` |
| `components/dream.CommandPaletteMount.tsx` | `next/dynamic`, `(dynamic import)` | `dream.CommandPaletteMount.tsx`, `(default)` |
| `components/dream.CreatePostModal.tsx` | `uploadBlobToLedgerStorage`, `createClient`, `lucide-react`, `next/image`, `react`, `toErrorMessage` | `dream.CreatePostModal.tsx`, `(default)` |
| `components/dream.DragToAnchorClose.tsx` | `react`, `react` | `dream.DragToAnchorClose.tsx`, `DragHandle`, `DragToAnchorClose` |
| `components/dream.DrEamsModeToggle.tsx` | `getDrEamsMode`, `onDrEamsModeChange`, `setDrEamsMode`, `emitTeach`, `lucide-react`, `react` | `dream.DrEamsModeToggle.tsx`, `(default)` |
| `components/dream.DrEamsVoiceAssistant.tsx` | `onIdariEvent`, `lucide-react`, `next/navigation`, `react` | `dream.DrEamsVoiceAssistant.tsx`, `(default)` |
| `components/dream.FeedCard.tsx` | `(default)`, `UniverseCard`, `UniverseCardContent`, `cn`, `formatRelativeTime`, `inferProviderFromUrl`, `lucide-react`, `next/image` | `dream.FeedCard.tsx`, `(default)` |
| `components/dream.FirstTouchActivator.tsx` | `react` | `dream.FirstTouchActivator.tsx`, `(default)` |
| `components/dream.ForgeDreamCanvas.tsx` | `react`, `ALL_CATEGORIES`, `getByCategory`, `AtomicComponent`, `ComponentCategory`, `createEventBus`, `atomicPieceFromComponent`, `createAssembly` | `dream.ForgeDreamCanvas.tsx`, `(default)`, `ForgeDreamCanvas` |
| `components/dream.GlobalOverlays.tsx` | `next/dynamic`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)` | `dream.GlobalOverlays.tsx`, `(default)` |
| `components/dream.HeroSprite.tsx` | `react` | `dream.HeroSprite.tsx`, `(default)`, `ZONE_QUOTES`, `hitZone`, `pickZoneQuote` |
| `components/dream.HomeFeed.tsx` | `AdUnit`, `(default)`, `(default)`, `(default)`, `AdType`, `useDreamSystem`, `useLiveFeed`, `FeedPost` | `dream.HomeFeed.tsx`, `(default)` |
| `components/dream.IconSelector.tsx` | `next/image`, `react` | `dream.IconSelector.tsx`, `(default)` |
| `components/dream.InnerDreamsButton.tsx` | `lucide-react`, `next/navigation`, `react` | `dream.InnerDreamsButton.tsx`, `(default)` |
| `components/dream.KonamiDream.tsx` | `framer-motion`, `react` | `dream.KonamiDream.tsx`, `(default)` |
| `components/dream.LandingHero.tsx` | `react`, `calibrateDevice`, `CalibrationSample`, `(default)` | `dream.LandingHero.tsx`, `(default)` |
| `components/dream.LedgerChart.tsx` | `LedgerData`, `react` | `dream.LedgerChart.tsx`, `(default)` |
| `components/dream.MessagesClient.tsx` | `useDreamDMDraft`, `DMMessage`, `useDreamDMMessages`, `useDreamSearch`, `uploadBlobToLedgerStorage`, `getOfflineRecord`, `putOfflineRecord`, `enqueueFetchMutation` | `dream.MessagesClient.tsx`, `(default)` |
| `components/dream.NotificationCenter.tsx` | `UiNotification`, `UiNotificationType`, `useNotifications`, `lucide-react`, `next/navigation`, `react` | `dream.NotificationCenter.tsx`, `(default)` |
| `components/dream.OSShellActivator.tsx` | `useDualRuntime`, `useDreamSystem`, `DIVIDER_H`, `SystemPanelId`, `isPublicSurfacePath`, `EnginDispatcher`, `dreamOSBus`, `next/navigation` | `dream.OSShellActivator.tsx`, `(default)` |
| `components/dream.panel.ChildSafetyPanel.tsx` | `lucide-react`, `react`, `toErrorMessage` | `dream.panel.ChildSafetyPanel.tsx`, `(default)` |
| `components/dream.panel.IDariPanel.tsx` | `emitIdariEvent`, `lucide-react`, `react`, `toErrorMessage` | `dream.panel.IDariPanel.tsx`, `(default)` |
| `components/dream.PhysicsLab.tsx` | `lucide-react`, `next/navigation`, `react` | `dream.PhysicsLab.tsx`, `(default)` |
| `components/dream.ProfileEditor.tsx` | `uploadBlobToLedgerStorage`, `SOCIAL_PLATFORMS`, `detectPlatform`, `createClient`, `useCustomizeMode`, `lucide-react`, `next/image`, `react` | `dream.ProfileEditor.tsx`, `(default)` |
| `components/dream.ProfileShareButton.tsx` | `(default)`, `lucide-react`, `react` | `dream.ProfileShareButton.tsx`, `(default)` |
| `components/dream.ProfileSpace.tsx` | `WidgetInstanceRecord`, `DragHandle`, `DragToAnchorClose` | `dream.ProfileSpace.tsx`, `ProfileSpace` |
| `components/dream.PullToRefresh.tsx` | `lucide-react`, `react` | `dream.PullToRefresh.tsx`, `(default)` |
| `components/dream.ShrunkMode.tsx` | `PriorityWidget` | `dream.ShrunkMode.tsx`, `ShrunkMode` |
| `components/dream.SkeletonLoaders.tsx` | - | `dream.SkeletonLoaders.tsx`, `FeedCardSkeleton`, `GridSkeleton`, `WidgetSkeleton` |
| `components/dream.ThemeApplicator.tsx` | `react` | `dream.ThemeApplicator.tsx`, `(default)`, `DeTheme`, `THEME_PRESETS`, `applyTheme`, `applyVoidTheme`, `isVoidThemeActive` |
| `components/dream.ThemeToggle.tsx` | `emitTeach`, `getInitialDarkMode`, `toggleDarkMode`, `lucide-react`, `react` | `dream.ThemeToggle.tsx`, `(default)` |
| `components/dream.ToastSystem.tsx` | `lucide-react`, `react` | `dream.ToastSystem.tsx`, `useToast`, `ToastProvider`, `useToast` |
| `components/dream.universal_asset_registry.tsx` | `useForgeActivity`, `createClient`, `safeGetUser`, `lucide-react`, `react`, `toErrorMessage` | `dream.universal_asset_registry.tsx`, `(default)`, `ControlMapping`, `EnrichedEntry`, `GameAssetRow`, `RegistryEntry`, `UniversalAssetRegistryProps` |
| `components/dream.VoidThemeToggle.tsx` | `applyVoidTheme`, `isVoidThemeActive`, `react` | `dream.VoidThemeToggle.tsx`, `(default)` |
| `components/dream.widget.AnchorWidget.tsx` | `AnchorStateBuffer`, `HOLD_FIRED`, `HOLD_HOLDING`, `HOLD_IDLE`, `MODE_HOME`, `MODE_PROFILE`, `MODE_SHRUNK`, `AnchorWidgetStorage` | `dream.widget.AnchorWidget.tsx`, `AnchorWidget` |
| `components/dream.widget.ProfileWidgetBlock.tsx` | `lucide-react`, `next/link`, `react` | `dream.widget.ProfileWidgetBlock.tsx`, `(default)` |
| `components/dream.widget.WidgetBubble.tsx` | `lucide-react`, `react`, `react-dnd` | `dream.widget.WidgetBubble.tsx`, `(default)` |
| `components/dreamengin/dream.bar.DrEamsSearchBar.tsx` | `buildDreamDMUrl`, `buildDrEamsRequest`, `matchNavSuggestions`, `parseDrEamsReply`, `truncatePreview`, `NavSuggestion`, `lucide-react`, `next/navigation` | `dream.bar.DrEamsSearchBar.tsx`, `(default)`, `DrEamsSearchBarProps` |
| `components/dreamengin/dream.CanvasDropZone.tsx` | `cacheAsset`, `enqueueSyncAction`, `react`, `uuid` | `dream.CanvasDropZone.tsx`, `(default)`, `ASSET_IMPORT_EVENT`, `AssetCategory`, `AssetImportPayload`, `classifyFile`, `isAcceptedFile` |
| `components/dreamengin/dream.DREAMenginOS.tsx` | `(default)`, `AssetImportPayload`, `onIdariEvent`, `IdariEventDetail`, `createBabylonEngine`, `DREAMENGIN_OS_SUBSYSTEM_MANIFEST`, `DreamenginOSSubsystemNode`, `RuntimeRegion` | `dream.DREAMenginOS.tsx`, `(default)`, `DREAMenginOSProps` |
| `components/dreamengin/dream.DrEamsCanvas.tsx` | `DrEamsAnimator`, `DrEamsAction`, `react`, `react` | `dream.DrEamsCanvas.tsx`, `(default)` |
| `components/dreamengin/dream.HomeControls.tsx` | `(default)` | `dream.HomeControls.tsx`, `(default)` |
| `components/dreamengin/dream.menu.NexusMenu.tsx` | `(default)`, `next/navigation` | `dream.menu.NexusMenu.tsx`, `(default)` |
| `components/dreamengin/dream.menu.OutdreamMenu.tsx` | `useDreamNav`, `Node`, `dispatchTauPath`, `findTauPath` | `dream.menu.OutdreamMenu.tsx`, `(default)` |
| `components/dreamengin/dream.overlay.ViewAllDreamsOverlay.tsx` | `useDreamNav`, `Node`, `dispatchTauPath`, `findTauPath` | `dream.overlay.ViewAllDreamsOverlay.tsx`, `(default)` |
| `components/dreamengin/dream.panel.CrossEnginStatusPanel.tsx` | `bridge`, `PeerState`, `react` | `dream.panel.CrossEnginStatusPanel.tsx`, `(default)`, `CrossEnginStatusPanel` |
| `components/dreamengin/dream.panel.DrEamsPanel.tsx` | `react` | `dream.panel.DrEamsPanel.tsx`, `(default)` |
| `components/dreamengin/dream.scene.BabylonGameScene.tsx` | `createBabylonEngine`, `DreamEngineGodTierSystem`, `applyGodTierToBabylon`, `defaultDeviceSignals`, `defaultRouteSignals`, `defaultRuntimeMetrics`, `defaultUXSignals`, `WebGPUDirector` | `dream.scene.BabylonGameScene.tsx`, `(default)` |
| `components/dreamengin/dream.scene.DrEamsScene.tsx` | `createBabylonEngine`, `DreamEngineGodTierSystem`, `applyGodTierToBabylon`, `defaultDeviceSignals`, `defaultRouteSignals`, `defaultRuntimeMetrics`, `defaultUXSignals`, `BabylonSceneLike` | `dream.scene.DrEamsScene.tsx`, `(default)` |
| `components/dreamengin/dream.scene.PortfolioOptimizationScene.tsx` | `react` | `dream.scene.PortfolioOptimizationScene.tsx`, `(default)` |
| `components/dreamengin/dream.shell.EnginShell.tsx` | `react` | `dream.shell.EnginShell.tsx`, `(default)` |
| `components/dreamengin/dream.widget.AppearanceWidget.tsx` | `useTheme`, `THEME_PRESETS`, `react` | `dream.widget.AppearanceWidget.tsx`, `(default)` |
| `components/dreamengin/dreamsurface.dreamengin.tsx` | `DreamNavProvider`, `next/navigation`, `react`, `(default)`, `AssetImportPayload`, `(default)`, `(default)`, `(default)` | `dreamsurface.dreamengin.tsx`, `(default)` |
| `components/dreamengin/engine/math.ts` | - | `UnitComplex`, `clamp`, `unitComplexFromAngle`, `unitComplexRotate`, `wrap` |
| `components/dreamengin/engine/types.ts` | `UnitComplex` | `Depth`, `EngineState`, `FlightMode`, `FlightState` |
| `components/dreamnav/dream.DreamNavControls.tsx` | - | `dream.DreamNavControls.tsx`, `(default)` |
| `components/dreamnav/dreamsurface.dreamnav.tsx` | `Action`, `Node`, `DEFAULT_NAV_STATE`, `reduceNav`, `react`, `react` | `dreamsurface.dreamnav.tsx`, `useDreamNav`, `DreamNavProvider`, `useDreamNav` |
| `components/dreamr/dream.CloseFriendsSettings.tsx` | `lucide-react`, `next/image`, `react` | `dream.CloseFriendsSettings.tsx`, `(default)` |
| `components/dreamr/dream.panel.DreamRChannelPanel.tsx` | `FeedPost`, `UnifiedFeedItem`, `lucide-react`, `next/image`, `react` | `dream.panel.DreamRChannelPanel.tsx`, `(default)` |
| `components/dreamr/dream.panel.DreamRCreatorPanel.tsx` | `FeedPost`, `lucide-react`, `next/image`, `next/link`, `react` | `dream.panel.DreamRCreatorPanel.tsx`, `(default)` |
| `components/dreams/dream.connectorlayer.tsx` | `react` | `dream.connectorlayer.tsx`, `(default)`, `DreamConnectorLayerProps` |
| `components/dreams/dream.DraggableDream.tsx` | `DREAM_DRAG_MIME`, `serializeDreamDragData`, `DreamDragData`, `react`, `react` | `dream.DraggableDream.tsx`, `(default)` |
| `components/dreams/dream.featurelayer.tsx` | `react` | `dream.featurelayer.tsx`, `(default)`, `DreamFeatureLayerProps` |
| `components/dreams/dream.GlobalDragLayer.tsx` | `DreamDragData`, `react` | `dream.GlobalDragLayer.tsx`, `(default)` |
| `components/dreams/dream.outputlayer.tsx` | `canRenderProjection`, `react` | `dream.outputlayer.tsx`, `(default)`, `DreamOutputLayerProps`, `DreamOutputMode`, `DreamVisibility` |
| `components/dreams/dream.panel.RuntimeMemoryHUD.tsx` | `formatArtifactKind`, `getArtifactAccent`, `dreamOSBus`, `DreamOSSnapshot`, `react` | `dream.panel.RuntimeMemoryHUD.tsx`, `(default)` |
| `components/dreams/dream.PlatformErrorReporter.tsx` | `react` | `dream.PlatformErrorReporter.tsx`, `(default)` |
| `components/dreams/dream.shell.DreamShell.tsx` | `default`, `DreamDataState`, `DreamShellProps` | `DreamDataState`, `DreamShellProps`, `default` |
| `components/dreams/dream.shell.SharedDreamShell.tsx` | `useSharedDream`, `DreamBroadcastPayload`, `lucide-react`, `react`, `react`, `toErrorMessage` | `dream.shell.SharedDreamShell.tsx`, `(default)`, `SharedDreamShell`, `SharedDreamShellProps` |
| `components/dreams/dream.SlideOverPanel.tsx` | `framer-motion`, `react` | `dream.SlideOverPanel.tsx`, `(default)` |
| `components/dreams/dream.widget.SuperDreamWidget.tsx` | `DREAM_WINDOW_STATES`, `useDreamWindowActions`, `CreateDreamWindowBody`, `DreamWindowRecord`, `react` | `dream.widget.SuperDreamWidget.tsx`, `(default)`, `SuperDreamWidgetProps` |
| `components/dreams/dream.window.JourneyDreamWindow.tsx` | `(default)`, `next/link` | `dream.window.JourneyDreamWindow.tsx`, `(default)` |
| `components/dreams/dreamsurface.dreamspace.tsx` | `(default)`, `(default)`, `(default)`, `(default)`, `useDreamsRuntime`, `generateSuggestions`, `readForgeHistory`, `ForgeHistoryEntry` | `dreamsurface.dreamspace.tsx`, `(default)`, `RecentDestination`, `buildRecentDestinations`, `getAppRoute` |
| `components/dreams/dreamsurface.shell.tsx` | `react`, `react` | `dreamsurface.shell.tsx`, `(default)`, `DreamDataState`, `DreamShellProps` |
| `components/dreams/dreamsurface.window.tsx` | `useTapHoldMove`, `ModuleManifest`, `RuntimeId`, `react`, `react` | `dreamsurface.window.tsx`, `(default)`, `DreamWindowShell`, `DreamWindowShellProps` |
| `components/engines/brand/dream.BrandEnginApp.tsx` | `makeEnginApp`, `(default)` | `(default)` |
| `components/engines/brand/index.ts` | `default`, `default`, `default` | `BrandEnginApp`, `CampaignsPanel`, `IdentityPanel` |
| `components/engines/brand/panels/dream.panel.CampaignsPanel.tsx` | `lucide-react`, `react` | `dream.panel.CampaignsPanel.tsx`, `(default)` |
| `components/engines/brand/panels/dream.panel.IdentityPanel.tsx` | `bridge`, `lucide-react`, `react` | `dream.panel.IdentityPanel.tsx`, `(default)` |
| `components/engines/code/dream.CodeEnginApp.tsx` | `makeEnginApp`, `(default)` | `(default)` |
| `components/engines/code/index.ts` | `default`, `default`, `default`, `default` | `AIPanel`, `CodeEnginApp`, `NotebookPanel`, `ProjectsPanel` |
| `components/engines/code/panels/dream.panel.AIPanel.tsx` | `lucide-react`, `react`, `vitest` | `dream.panel.AIPanel.tsx`, `(default)`, `processData` |
| `components/engines/code/panels/dream.panel.NotebookPanel.tsx` | `lucide-react`, `react`, `,     output: ` | `dream.panel.NotebookPanel.tsx`, `(default)` |
| `components/engines/code/panels/dream.panel.ProjectsPanel.tsx` | `createClient`, `safeGetUser`, `lucide-react`, `next/link`, `react`, `toErrorMessage` | `dream.panel.ProjectsPanel.tsx`, `(default)` |
| `components/engines/create/dream.CreateEnginApp.tsx` | `makeEnginApp`, `(default)` | `(default)` |
| `components/engines/create/index.ts` | `default`, `default`, `default`, `default` | `CalendarPanel`, `CreateEnginApp`, `EditorPanel`, `QueuePanel` |
| `components/engines/create/panels/dream.panel.CalendarPanel.tsx` | `lucide-react`, `react` | `dream.panel.CalendarPanel.tsx`, `(default)` |
| `components/engines/create/panels/dream.panel.EditorPanel.tsx` | `lucide-react`, `react` | `dream.panel.EditorPanel.tsx`, `(default)` |
| `components/engines/create/panels/dream.panel.QueuePanel.tsx` | `lucide-react`, `react` | `dream.panel.QueuePanel.tsx`, `(default)` |
| `components/engines/games/dream.GameEnginApp.tsx` | `makeEnginApp`, `next/dynamic`, `(dynamic import)` | `(default)` |
| `components/engines/games/index.ts` | `default`, `default`, `default`, `default` | `BuilderPanel`, `GameEnginApp`, `LibraryPanel`, `ScoresPanel` |
| `components/engines/games/panels/dream.panel.BuilderPanel.tsx` | `bridge`, `lucide-react`, `react` | `dream.panel.BuilderPanel.tsx`, `(default)` |
| `components/engines/games/panels/dream.panel.LibraryPanel.tsx` | `GAME_CATALOG`, `buildGameLaunchHref`, `lucide-react`, `next/link`, `react` | `dream.panel.LibraryPanel.tsx`, `(default)` |
| `components/engines/games/panels/dream.panel.ScoresPanel.tsx` | `lucide-react`, `react` | `dream.panel.ScoresPanel.tsx`, `(default)` |
| `components/engines/index.ts` | `*`, `*`, `*`, `*`, `*`, `*`, `*`, `*` | `index.ts` |
| `components/engines/lab/dream.LabEnginApp.tsx` | `makeEnginApp`, `(default)` | `(default)` |
| `components/engines/lab/index.ts` | `default`, `default`, `default`, `default` | `DataVizPanel`, `ExperimentsPanel`, `LabEnginApp`, `QuantumPanel` |
| `components/engines/lab/panels/dream.panel.DataVizPanel.tsx` | `lucide-react`, `react` | `dream.panel.DataVizPanel.tsx`, `(default)` |
| `components/engines/lab/panels/dream.panel.ExperimentsPanel.tsx` | `lucide-react`, `react` | `dream.panel.ExperimentsPanel.tsx`, `(default)` |
| `components/engines/lab/panels/dream.panel.QuantumPanel.tsx` | `lucide-react`, `react` | `dream.panel.QuantumPanel.tsx`, `(default)` |
| `components/engines/music/dream.MusicEnginApp.tsx` | `makeEnginApp`, `next/dynamic`, `(dynamic import)` | `(default)` |
| `components/engines/music/index.ts` | `default`, `default`, `default`, `default` | `ArrangePanel`, `MusicEnginApp`, `MusicLibraryPanel`, `StudioPanel` |
| `components/engines/music/panels/dream.panel.ArrangePanel.tsx` | `lucide-react`, `react` | `dream.panel.ArrangePanel.tsx`, `(default)` |
| `components/engines/music/panels/dream.panel.MusicLibraryPanel.tsx` | `lucide-react`, `react` | `dream.panel.MusicLibraryPanel.tsx`, `(default)` |
| `components/engines/music/panels/dream.panel.StudioPanel.tsx` | `lucide-react`, `react`, `toErrorMessage` | `dream.panel.StudioPanel.tsx`, `(default)` |
| `components/engines/portfolio/dream.PortfolioEnginApp.tsx` | `makeEnginApp`, `(default)` | `(default)` |
| `components/engines/portfolio/index.ts` | `default`, `default`, `default`, `default` | `AssetsPanel`, `OptimizePanel`, `PortfolioEnginApp`, `PortfolioQuantumPanel` |
| `components/engines/portfolio/panels/dream.panel.AssetsPanel.tsx` | `lucide-react`, `react` | `dream.panel.AssetsPanel.tsx`, `(default)` |
| `components/engines/portfolio/panels/dream.panel.OptimizePanel.tsx` | `(default)`, `QuantumMeasurementResult`, `lucide-react`, `react` | `dream.panel.OptimizePanel.tsx`, `(default)` |
| `components/engines/portfolio/panels/dream.panel.PortfolioQuantumPanel.tsx` | `lucide-react`, `react` | `dream.panel.PortfolioQuantumPanel.tsx`, `(default)` |
| `components/engines/render/dream.RenderServiceDiagnostics.tsx` | `react`, `EnginRuntime`, `RenderEnginRuleSet`, `RenderEnginViewport`, `acknowledgeRenderServiceIntent`, `readRenderServiceQueue`, `subscribeRenderServiceIntents`, `RenderIntent` | `dream.RenderServiceDiagnostics.tsx`, `(default)`, `RenderDiagnosticsSurface` |
| `components/engines/render/dream.RenderSurface.tsx` | `(default)` | `dream.RenderSurface.tsx`, `(default)` |
| `components/engines/render/index.ts` | `default` | `RenderServiceDiagnostics` |
| `components/engines/shared/dream.bar.EnginNavBar.tsx` | `next/link`, `next/navigation` | `dream.bar.EnginNavBar.tsx`, `(default)`, `NavItem` |
| `components/engines/shared/dream.EnginProvider.tsx` | `react` | `dream.EnginProvider.tsx`, `useEngin`, `EnginProvider`, `EngineId`, `useEngin` |
| `components/engines/shared/dream.EnginRuleSet.ts` | `react`, `EngineId`, `NavItem` | `EnginRuleSet` |
| `components/engines/shared/dream.makeEnginApp.tsx` | `next/navigation`, `(default)`, `EnginRuleSet`, `(default)` | `dream.makeEnginApp.tsx`, `makeEnginApp` |
| `components/engines/shared/dream.shell.EnginAppShell.tsx` | `InviteFlow`, `SharedDreamProvider`, `lucide-react`, `next/link`, `react` | `dream.shell.EnginAppShell.tsx`, `(default)`, `EnginAppShellProps` |
| `components/engines/shared/index.ts` | `default`, `NavItem`, `EnginProvider`, `useEngin`, `EngineId`, `EnginRuleSet`, `makeEnginApp`, `default` | `EnginAppShell`, `EnginAppShellProps`, `EnginNavBar`, `EnginProvider`, `EnginRuleSet`, `EngineId`, `NavItem`, `makeEnginApp` |
| `components/feed/dream.AlgorithmEngine.tsx` | `lucide-react`, `next/link`, `react` | `dream.AlgorithmEngine.tsx`, `(default)`, `FeedPreset` |
| `components/feed/dream.CommentSection.tsx` | `formatRelativeTime`, `lucide-react`, `next/image`, `react` | `dream.CommentSection.tsx`, `(default)` |
| `components/feed/dream.FeedVideoCard.tsx` | `FeedPost`, `lucide-react`, `react` | `dream.FeedVideoCard.tsx`, `(default)`, `FeedVideoCardProps` |
| `components/feed/dream.FollowButton.tsx` | `(default)`, `FollowFrequency`, `lucide-react`, `react` | `dream.FollowButton.tsx`, `(default)` |
| `components/feed/dream.FollowOnboarding.tsx` | `lucide-react`, `react` | `dream.FollowOnboarding.tsx`, `(default)`, `FOLLOW_OPTIONS`, `FollowFrequency`, `FollowSettings`, `saveFollowSetting` |
| `components/feeds/dream.widget.EmbedFeedWidget.tsx` | `EmbedFeedItem`, `lucide-react`, `react`, `toErrorMessage` | `dream.widget.EmbedFeedWidget.tsx`, `(default)` |
| `components/forge/dream.EngineBuilderCanvas.tsx` | `COMPONENT_INVENTORY`, `AtomicComponent`, `ComponentCategory`, `atomicPieceFromComponent`, `createAssembly`, `deserializeAssembly`, `serializeAssembly`, `validateAssembly` | `dream.EngineBuilderCanvas.tsx`, `(default)`, `EngineBuilderCanvasProps` |
| `components/forge/dream.panel.AIBuilderPanel.tsx` | `canBuildToday`, `readForgeBuilds`, `ForgeBuildRecord`, `ForgeLogEvent`, `ENGIN_REGISTRY`, `useForgeBuild`, `framer-motion`, `lucide-react` | `dream.panel.AIBuilderPanel.tsx`, `(default)` |
| `components/forge/dream.widget.ForgeMomentumWidget.tsx` | `computeMomentum`, `getLevelColor`, `getLevelEmoji`, `MomentumSnapshot`, `react` | `dream.widget.ForgeMomentumWidget.tsx`, `(default)` |
| `components/gameengin/dream.cartridge.CartridgeBrowser.tsx` | `CARTRIDGE_MANIFEST`, `getCartridgeCategories`, `CartridgeManifestEntry`, `next/link`, `react` | `dream.cartridge.CartridgeBrowser.tsx`, `(default)`, `CartridgeBrowserProps` |
| `components/gameengin/dream.cartridge.CartridgeErrorBoundary.tsx` | `react`, `toErrorMessage` | `dream.cartridge.CartridgeErrorBoundary.tsx`, `useGlobalCrashListener`, `CartridgeCrashEvent`, `CartridgeErrorBoundary`, `useGlobalCrashListener` |
| `components/gameengin/dream.cartridge.CartridgeLauncher.tsx` | `(default)`, `GameCartridge`, `GravityPreset`, `RuntimeBackendDiagnostics`, `loadCartridgeBundle`, `LoadedCartridgeBundle`, `negotiateRendererBackend`, `serverBootstrapDiagnostics` | `dream.cartridge.CartridgeLauncher.tsx`, `(default)`, `CartridgeLauncherProps` |
| `components/gameengin/dream.cartridge.FeaturedCartridges.tsx` | `CARTRIDGE_MANIFEST`, `CartridgeManifestEntry`, `next/link` | `dream.cartridge.FeaturedCartridges.tsx`, `(default)`, `FeaturedCartridgesProps` |
| `components/gameengin/dream.CartridgeRegistryBootstrap.tsx` | `registerCartridges`, `dreamOSBus`, `react` | `dream.CartridgeRegistryBootstrap.tsx`, `(default)` |
| `components/gameengin/dream.CrashReportModal.tsx` | `react`, `toErrorMessage` | `dream.CrashReportModal.tsx`, `(default)`, `CRASH_REPORT_MAX_BYTES`, `CrashContext`, `CrashReportModalProps` |
| `components/gameengin/input/DualSenseManager.ts` | `@babylonjs/core` | `DualSenseManager`, `DualSenseState` |
| `components/games/_fx/canvasFx.ts` | - | `HitStop`, `ParallaxLayer`, `ParallaxLayers`, `Particle`, `ParticlePool`, `ScreenShake`, `clamp`, `drawDitherFog` |
| `components/games/css-modules.d.ts` | - | `(default)` |
| `components/games/dream.AvenueOfMirrors.tsx` | `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `useGameEngineAPI`, `react` | `dream.AvenueOfMirrors.tsx`, `(default)` |
| `components/games/dream.BabylonSideScroller.tsx` | `MADMAXI_ENEMY_KINDS`, `MADMAXI_POWERUP_KINDS`, `MADMAXI_SUPER_SECONDS`, `MADMAXI_SUPER_STREAK`, `default`, `getEnemyKindForIndex`, `getMadmaxiEnemyCount`, `getMadmaxiLevelDefinition` | `MADMAXI_ENEMY_KINDS`, `MADMAXI_POWERUP_KINDS`, `MADMAXI_SUPER_SECONDS`, `MADMAXI_SUPER_STREAK`, `default`, `getEnemyKindForIndex`, `getMadmaxiEnemyCount`, `getMadmaxiLevelDefinition` |
| `components/games/dream.DefuseRitual.tsx` | `useGameAutoStart`, `useSubmitScore`, `react` | `dream.DefuseRitual.tsx`, `(default)` |
| `components/games/dream.EchoArena.tsx` | `DualSenseManager`, `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `useRegisterMobileGameControls`, `createPerformanceBaselineSampler`, `publishGamePerformanceBaseline`, `@babylonjs/core` | `dream.EchoArena.tsx`, `(default)` |
| `components/games/dream.EnginFracture.tsx` | `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `react` | `dream.EnginFracture.tsx`, `(default)` |
| `components/games/dream.GameController.tsx` | `default`, `GameInputAction` | `GameInputAction`, `default` |
| `components/games/dream.GamesHub.tsx` | `getAvatarDataUrl`, `setPlayAsMe`, `GAME_CATALOG`, `GameCatalogEntry`, `GAME_LIBRARY_SELECTION_STORAGE_KEY`, `GAME_LIBRARY_SESSION_STORAGE_KEY`, `SavedGameSession`, `upsertSavedGameSession` | `dream.GamesHub.tsx`, `(default)`, `GAMES`, `GameDef` |
| `components/games/dream.Glassfall.tsx` | `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `react`, `ParticlePool`, `ScreenShake`, `prefersReducedMotion` | `dream.Glassfall.tsx`, `(default)` |
| `components/games/dream.hud.GameHUD.tsx` | `(default)`, `MobileHudMode` | `dream.hud.GameHUD.tsx`, `(default)` |
| `components/games/dream.hud.LegacyGameHUD.tsx` | `(default)`, `next/navigation`, `react` | `dream.hud.LegacyGameHUD.tsx`, `(default)` |
| `components/games/dream.hud.MobileGameHUD.tsx` | `(default)`, `emitMobileButton`, `emitMobileLook`, `emitMobileMove`, `fireGameRemoteInput`, `getRemoteActionForMobileButton`, `getRemoteMoveAction`, `MOBILE_HUD_BUTTON_RING` | `dream.hud.MobileGameHUD.tsx`, `(default)` |
| `components/games/dream.Leaderboard.tsx` | `lucide-react`, `react` | `dream.Leaderboard.tsx`, `(default)` |
| `components/games/dream.LexiconSolitaire.tsx` | `useGameAutoStart`, `useSubmitScore`, `react` | `dream.LexiconSolitaire.tsx`, `(default)` |
| `components/games/dream.MadMaxiWildfall.tsx` | `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `useGameEngineAPI`, `WILDFALL_HEROES`, `WILDFALL_ZONES`, `activateWildfallHeroAbility`, `castWildfallRay` | `dream.MadMaxiWildfall.tsx`, `(default)` |
| `components/games/dream.NeonDrift.tsx` | `DualSenseManager`, `EliteGameEngine`, `AIDirector`, `PostFXManager`, `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `publishGamePerformanceBaseline` | `dream.NeonDrift.tsx`, `(default)` |
| `components/games/dream.NiteFlyerSolarHymn.tsx` | `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `react` | `dream.NiteFlyerSolarHymn.tsx`, `(default)` |
| `components/games/dream.NullCathedral.tsx` | `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `react`, `ParticlePool`, `ScreenShake`, `drawDitherFog`, `prefersReducedMotion` | `dream.NullCathedral.tsx`, `(default)` |
| `components/games/dream.RecordingControls.tsx` | `GameCapture`, `CaptureResult`, `react` | `dream.RecordingControls.tsx`, `(default)` |
| `components/games/dream.remote.GameRemote.tsx` | `default`, `GameInputAction` | `GameInputAction`, `default` |
| `components/games/dream.remote.GameRemoteSurface.tsx` | `broadcastGameInput`, `ButtonInteractionManager`, `ControllerButton`, `react` | `dream.remote.GameRemoteSurface.tsx`, `(default)`, `GameInputAction` |
| `components/games/dream.remote.LegacyGameRemote.tsx` | `default`, `GameInputAction` | `GameInputAction`, `default` |
| `components/games/dream.SerpentSiege.tsx` | `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `react`, `ParticlePool`, `ScreenShake`, `prefersReducedMotion` | `dream.SerpentSiege.tsx`, `(default)` |
| `components/games/dream.VoidlineGP.tsx` | `useGameAutoStart`, `useGamePhase`, `useSubmitScore`, `react`, `ParticlePool`, `ScreenShake`, `motionTrail`, `prefersReducedMotion` | `dream.VoidlineGP.tsx`, `(default)` |
| `components/games/madmaxi/audio.ts` | - | `MadmaxiAudioController`, `MadmaxiAudioCue` |
| `components/games/madmaxi/authoredZonePacks.ts` | `getMadmaxiEnemyCount`, `ZONES`, `CoinDef`, `EnemyDef`, `HazardDef`, `LevelDef`, `MadmaxiEnemyKind`, `MadmaxiPowerUpKind` | `getAuthoredStarterLevel`, `isMadmaxiAuthoredLevel` |
| `components/games/madmaxi/config.ts` | `BossMeta`, `MadmaxiEnemyKind`, `MadmaxiPowerUpKind`, `ZoneMeta` | `BOSSES`, `BOSS_ENRAGE_MULTIPLIER`, `BOSS_ENRAGE_THRESHOLD`, `EXTRA_POWERUP_EVERY_N_LEVELS`, `LEVEL_SEED_KEY`, `MADMAXI_ENEMY_KINDS`, `MADMAXI_POWERUP_KINDS`, `MADMAXI_SUPER_SECONDS` |
| `components/games/madmaxi/dream.MadmaxiGame.tsx` | `createBabylonEngine`, `useGameAutoStart`, `useSubmitScore`, `useImmersiveGameLayout`, `react`, `react`, `DreamEngineGodTierSystem`, `applyGodTierToBabylon` | `dream.MadmaxiGame.tsx`, `(default)` |
| `components/games/madmaxi/index.ts` | `default`, `MADMAXI_ENEMY_KINDS`, `MADMAXI_POWERUP_KINDS`, `MADMAXI_SUPER_SECONDS`, `MADMAXI_SUPER_STREAK`, `TOTAL_LEVELS`, `ZONES`, `getEnemyKindForIndex` | `MADMAXI_ENEMY_KINDS`, `MADMAXI_POWERUP_KINDS`, `MADMAXI_SUPER_SECONDS`, `MADMAXI_SUPER_STREAK`, `TOTAL_LEVELS`, `ZONES`, `default`, `getEnemyKindForIndex` |
| `components/games/madmaxi/levels.ts` | `getAuthoredStarterLevel`, `isMadmaxiAuthoredLevel`, `EXTRA_POWERUP_EVERY_N_LEVELS`, `LEVEL_SEED_KEY`, `ZONES`, `getBossForLevel`, `getEnemyKindForIndex`, `getMadmaxiEnemyCount` | `getMadmaxiLevelDefinition`, `isMadmaxiAuthoredLevel` |
| `components/games/madmaxi/materials.ts` | `@babylonjs/core` | `DetailMatOpts`, `ScanLineTexture`, `createScanLineTexture`, `getSharedNoiseTexture`, `makeDetailMat` |
| `components/games/madmaxi/types.ts` | - | `BossMeta`, `CoinDef`, `EnemyDef`, `HazardDef`, `LevelDef`, `MadmaxiEnemyKind`, `MadmaxiPowerUpKind`, `PlatDef` |
| `components/games/madmaxi/vfx.ts` | `@babylonjs/core` | `VfxKit`, `VfxTier`, `createMadmaxiVfx` |
| `components/home/dream.ActiveModuleSurface.tsx` | `loadActiveModules`, `removeActiveModule`, `restoreActiveModulesFromOfflineCache`, `saveActiveModule`, `saveActiveModulesForRegion`, `transferActiveModuleRegion`, `loadArtifacts`, `saveArtifact` | `dream.ActiveModuleSurface.tsx`, `(default)` |
| `components/home/dream.bar.GlobalDreamBar.tsx` | `(default)`, `(default)`, `SystemMenuAction`, `useDreamSystem`, `runHomeAction`, `isPublicSurfacePath`, `next/navigation`, `react` | `dream.bar.GlobalDreamBar.tsx`, `(default)` |
| `components/home/dream.bar.PersistentDreamBar.tsx` | `(default)`, `(default)`, `useDualRuntime`, `(default)`, `(default)`, `(default)`, `(default)`, `useDreamLayout` | `dream.bar.PersistentDreamBar.tsx`, `(default)`, `DreamDMContainer` |
| `components/home/dream.DaydreamPulseStrip.tsx` | `next/navigation` | `dream.DaydreamPulseStrip.tsx`, `(default)` |
| `components/home/dream.FlagshipEnginesStrip.tsx` | `getEnginById`, `lucide-react`, `next/navigation` | `dream.FlagshipEnginesStrip.tsx`, `(default)` |
| `components/home/dream.NeuralSeamCanvas.tsx` | `DIVIDER_H`, `createIdleParticle`, `createSeamParticle`, `evictDeadParticles`, `tickParticles`, `SeamParticle`, `bridge`, `react` | `dream.NeuralSeamCanvas.tsx`, `(default)` |
| `components/home/dream.widget.DreamWidget.tsx` | `cn`, `framer-motion`, `react` | `dream.widget.DreamWidget.tsx`, `(default)` |
| `components/home/dream.ZoomablePane.tsx` | `react`, `react` | `dream.ZoomablePane.tsx`, `(default)`, `ZoomablePaneProps` |
| `components/icons/sheet.ts` | - | `COLS`, `FRAME_H`, `FRAME_W`, `ICONS`, `ICON_ENTRIES`, `IconName`, `ROWS`, `SHEET_H` |
| `components/idari/dream.PlatformHealth.tsx` | `GetPlatformMetricsResponse`, `PLATFORM_HEALTH_TARGETS`, `react` | `dream.PlatformHealth.tsx`, `PlatformHealth` |
| `components/landing/dream.LandingNav.tsx` | `next/link` | `dream.LandingNav.tsx`, `(default)` |
| `components/landing/dream.LandingProductStatement.tsx` | `next/link` | `dream.LandingProductStatement.tsx`, `(default)` |
| `components/landing/dream.scene.UniverseField.tsx` | `n`, `react` | `dream.scene.UniverseField.tsx`, `(default)`, `UniverseFieldProps` |
| `components/marketplace/dream.MarketplaceListingCard.tsx` | `next/link` | `dream.MarketplaceListingCard.tsx`, `(default)` |
| `components/marketplace/dream.MarketplaceRequestButton.tsx` | `lucide-react`, `react`, `toErrorMessage`, `queueLocalFirstMutation` | `dream.MarketplaceRequestButton.tsx`, `(default)` |
| `components/menus/dream.menu.DreamRadialMenu.tsx` | `next/navigation`, `react`, `(default)`, `MenuItem` | `dream.menu.DreamRadialMenu.tsx`, `(default)` |
| `components/menus/dream.menu.DualBottomMenu.tsx` | `next/navigation`, `react`, `react` | `dream.menu.DualBottomMenu.tsx`, `(default)`, `SystemMenuAction` |
| `components/menus/dream.menu.RadialMenu.tsx` | `react`, `react` | `dream.menu.RadialMenu.tsx`, `(default)` |
| `components/menus/dream.menu.SystemRadialMenu.tsx` | `(default)`, `MenuItem` | `dream.menu.SystemRadialMenu.tsx`, `(default)`, `SystemMenuAction` |
| `components/menus/dream.panel.MenuPanel.tsx` | `react`, `react` | `dream.panel.MenuPanel.tsx`, `(default)`, `MenuItem` |
| `components/messaging/dream.BoardComposer.tsx` | `lucide-react`, `react` | `dream.BoardComposer.tsx`, `(default)` |
| `components/music/dream.SoundRecorder.tsx` | `recordOfflineBlobArtifact`, `lucide-react`, `react`, `toErrorMessage` | `dream.SoundRecorder.tsx`, `(default)` |
| `components/offline/dream.OfflineRuntimeBootstrap.tsx` | `getCachedHttpGet`, `putOfflineRecord`, `onConnectivityChange`, `flushQueue`, `getQueueStatus`, `listenOnline`, `replayFetchMutation`, `subscribeQueueStatus` | `dream.OfflineRuntimeBootstrap.tsx`, `(default)`, `OfflineRuntimeState` |
| `components/offline/dream.OfflineStatusPill.tsx` | `getQueueStatus`, `subscribeQueueStatus`, `QueueStatus`, `react` | `dream.OfflineStatusPill.tsx`, `(default)` |
| `components/onboarding/dream.OnboardingTip.tsx` | `react` | `dream.OnboardingTip.tsx`, `(default)` |
| `components/optimizer/dream.scene.BabylonOptimizeroScene.tsx` | `createBabylonEngine`, `DreamEngineGodTierSystem`, `applyGodTierToBabylon`, `defaultDeviceSignals`, `defaultRouteSignals`, `defaultRuntimeMetrics`, `defaultUXSignals`, `BabylonSceneLike` | `dream.scene.BabylonOptimizeroScene.tsx`, `(default)` |
| `components/overlays/dream.RootStatusScreen.tsx` | `next/link` | `dream.RootStatusScreen.tsx`, `(default)` |
| `components/panels/dream.panel.AlgorithmPanel.tsx` | `(default)`, `useDreamSystem`, `lucide-react` | `dream.panel.AlgorithmPanel.tsx`, `(default)` |
| `components/panels/dream.panel.AppearancePanel.tsx` | `THEME_PRESETS`, `applyTheme`, `DeTheme`, `useTheme`, `useDreamSystem`, `useCustomizeMode`, `DEFAULT_OVERRIDES`, `THEME_PRESETS` | `dream.panel.AppearancePanel.tsx`, `(default)` |
| `components/panels/dream.panel.ConnectorsPanel.tsx` | `(default)`, `lucide-react` | `dream.panel.ConnectorsPanel.tsx`, `(default)` |
| `components/panels/dream.panel.ControlsPanel.tsx` | `(default)`, `useDreamSystem`, `lucide-react`, `react` | `dream.panel.ControlsPanel.tsx`, `(default)` |
| `components/panels/dream.panel.DataPanel.tsx` | `useDreamSystem`, `createClient`, `lucide-react`, `react` | `dream.panel.DataPanel.tsx`, `(default)` |
| `components/panels/dream.panel.FeedPanel.tsx` | `default` | `default` |
| `components/panels/dream.panel.FeedSettingsPanel.tsx` | `ALL_TOPICS`, `DEFAULT_TOPIC_IDS`, `FEED_TOPICS_KEY`, `loadActiveTopicIds`, `lucide-react`, `react` | `dream.panel.FeedSettingsPanel.tsx`, `(default)` |
| `components/panels/dream.panel.HelpPanel.tsx` | `useDreamSystem`, `lucide-react` | `dream.panel.HelpPanel.tsx`, `(default)` |
| `components/panels/dream.panel.MarketplacePanel.tsx` | `(default)`, `(default)`, `useDreamSystem`, `createClient`, `lucide-react`, `react` | `dream.panel.MarketplacePanel.tsx`, `(default)` |
| `components/panels/dream.panel.PrivacyPanel.tsx` | `useDreamSystem`, `lucide-react`, `react` | `dream.panel.PrivacyPanel.tsx`, `(default)` |
| `components/panels/dream.panel.ProfilePanel.tsx` | `(default)`, `DEFAULT_DREAMS`, `ProfileDream`, `(default)`, `createClient`, `safeGetUser`, `lucide-react`, `react` | `dream.panel.ProfilePanel.tsx`, `(default)` |
| `components/panels/dream.panel.SafetyPanel.tsx` | `BOOGIE_POLICY_VERSION`, `useDreamSystem`, `createClient`, `safeGetUser`, `@supabase/supabase-js`, `lucide-react`, `react` | `dream.panel.SafetyPanel.tsx`, `(default)` |
| `components/panels/dream.panel.SettingsPanel.tsx` | `useDreamSystem`, `SystemPanelId`, `createClient`, `safeGetUser`, `lucide-react`, `react` | `dream.panel.SettingsPanel.tsx`, `(default)` |
| `components/panels/dream.panel.WidgetsPanel.tsx` | `(default)`, `useDreamSystem`, `lucide-react`, `react` | `dream.panel.WidgetsPanel.tsx`, `(default)` |
| `components/panels/panelTypes.ts` | - | `PANEL_META`, `PanelMeta`, `SystemPanelId` |
| `components/profile/dream.EditableAvatar.tsx` | `next/image`, `next/navigation`, `react` | `dream.EditableAvatar.tsx`, `(default)` |
| `components/profile/dream.ProfileCanvas.tsx` | `(default)`, `PROFILE_SHARE_PLATFORMS`, `createClient`, `lucide-react`, `next/link`, `react`, `toErrorMessage`, `queueLocalFirstMutation` | `dream.ProfileCanvas.tsx`, `(default)` |
| `components/profile/dream.ProfileCustomizeButton.tsx` | `useCustomizeMode` | `dream.ProfileCustomizeButton.tsx`, `(default)` |
| `components/profile/dream.widget.ProfileWidgetGrid.tsx` | `(default)`, `PickerConnector`, `TOP_10_CONNECTORS`, `(default)`, `lucide-react`, `next/link`, `react`, `react` | `dream.widget.ProfileWidgetGrid.tsx`, `(default)`, `DEFAULT_CONFIG`, `DEFAULT_DREAMS`, `DEFAULT_WIDGETS`, `DreamBgStyle`, `DreamConfig`, `DreamSize` |
| `components/providers/dream.AppSurfaceShell.tsx` | `(default)`, `(default)`, `(default)`, `(default)`, `(default)`, `(default)`, `DreamSystemProvider`, `OSProvider` | `dream.AppSurfaceShell.tsx`, `(default)` |
| `components/providers/dream.GodTierProvider.tsx` | `useGodTier`, `next/navigation` | `dream.GodTierProvider.tsx`, `(default)` |
| `components/providers/dream.ThemeProvider.tsx` | `UserOverrides`, `DEFAULT_OVERRIDES`, `applyTheme`, `getPreset`, `loadStoredTheme`, `saveTheme`, `react`, `react` | `dream.ThemeProvider.tsx`, `useTheme`, `(default)`, `useTheme` |
| `components/runtime/dream.DualRuntimeContainer.tsx` | `DualRuntimeState`, `RuntimeWorld`, `DEFAULT_DUAL_RUNTIME`, `isHomeActiveTop`, `makeDreamSpaceActiveSurface`, `makeHomeActiveTop`, `makeHomeDreamSpaceActive`, `IntentBus` | `dream.DualRuntimeContainer.tsx`, `useDualRuntime`, `(default)`, `useDualRuntime` |
| `components/runtime/dream.RuntimeView.tsx` | `(default)`, `(default)`, `(default)`, `(default)`, `getEnginByName`, `RuntimeRegion`, `RuntimeRegionKey`, `RuntimeWorld` | `dream.RuntimeView.tsx`, `(default)` |
| `components/runtime/dream.shell.RuntimeShell.tsx` | `isCompactRuntimeViewport`, `readInteractiveViewportScale`, `readInteractiveViewportWidth`, `ApperceptiveContext`, `react`, `react` | `dream.shell.RuntimeShell.tsx`, `(default)` |
| `components/shaders/dream.LightningWing.tsx` | `@react-three/fiber`, `react`, `three` | `dream.LightningWing.tsx`, `(default)`, `LightningWing`, `LightningWingProps` |
| `components/shaders/dream.NeonGlow.tsx` | `@react-three/fiber`, `react`, `three` | `dream.NeonGlow.tsx`, `(default)`, `NeonGlow`, `NeonGlowProps` |
| `components/shaders/dream.Refractor.tsx` | `@react-three/fiber`, `react`, `three` | `dream.Refractor.tsx`, `(default)`, `Refractor`, `RefractorProps` |
| `components/shaders/index.ts` | `NeonGlow`, `NeonGlowProps`, `LightningWing`, `LightningWingProps`, `Refractor`, `RefractorProps` | `LightningWing`, `LightningWingProps`, `NeonGlow`, `NeonGlowProps`, `Refractor`, `RefractorProps` |
| `components/shared-dream/dream.InviteFlow.tsx` | `react`, `useSharedDream` | `dream.InviteFlow.tsx`, `InviteFlow`, `InviteFlowProps` |
| `components/shared-dream/dream.SharedDreamCanvas.tsx` | `react`, `react`, `useSharedDream` | `dream.SharedDreamCanvas.tsx`, `SharedDreamCanvas`, `SharedDreamCanvasProps` |
| `components/shared-dream/dream.SharedDreamProvider.tsx` | `broadcastControlSignal`, `broadcastCursor`, `broadcastDataPacket`, `broadcastEdit`, `broadcastMediaSync`, `broadcastModeChange`, `broadcastPresenceUpdate`, `broadcastStatePatch` | `dream.SharedDreamProvider.tsx`, `useSharedDream`, `CursorPosition`, `SharedDreamContextValue`, `SharedDreamProvider`, `SharedDreamProviderProps`, `useSharedDream` |
| `components/shared-dream/dream.SharedDreamRuntime.tsx` | `bridge`, `useSharedDreamSession`, `react`, `react`, `InviteFlow`, `SharedDreamCanvas`, `SharedDreamProvider` | `dream.SharedDreamRuntime.tsx`, `(default)`, `SharedDreamRuntimeProps` |
| `components/shared-dream/index.ts` | `SharedDreamProvider`, `useSharedDream`, `SharedDreamContextValue`, `SharedDreamProviderProps`, `SharedDreamCanvas`, `SharedDreamCanvasProps`, `InviteFlow`, `InviteFlowProps` | `InviteFlow`, `InviteFlowProps`, `SharedDreamCanvas`, `SharedDreamCanvasProps`, `SharedDreamContextValue`, `SharedDreamProvider`, `SharedDreamProviderProps`, `SharedDreamRuntime` |
| `components/spatial/dream.PixiPhysicsLayer.tsx` | `pixi-viewport`, `pixi.js`, `react` | `dream.PixiPhysicsLayer.tsx`, `(default)`, `PixiPhysicsLayerProps` |
| `components/spatial/dream.ProfileSpace.tsx` | `useContent`, `useWidgets`, `cn`, `ContentObject`, `Widget`, `WidgetType`, `WidgetVisibility`, `lucide-react` | `dream.ProfileSpace.tsx`, `(default)` |
| `components/spatial/dream.shell.EnhancedSpatialShell.tsx` | `ProfileSpace`, `(default)`, `LAYER_HOME`, `LAYER_PROFILE`, `SpatialNavigationEngine`, `WidgetBindingType`, `WidgetInstanceRecord`, `WidgetPresentation` | `dream.shell.EnhancedSpatialShell.tsx`, `(default)` |
| `components/three/dream.scene.tsx` | `LightningWing`, `NeonGlow`, `Refractor`, `@react-three/drei`, `@react-three/fiber`, `react`, `three` | `dream.scene.tsx`, `(default)`, `DreamScene`, `DreamSceneProps` |
| `components/three/index.ts` | `DreamScene`, `DreamSceneProps` | `DreamScene`, `DreamSceneProps` |
| `components/ui-system/CustomizeModeContext.tsx` | `AllPageSkins`, `DEFAULT_SKIN`, `SkinData`, `SkinPage`, `applySkin`, `loadAllSkins`, `resolveSkin`, `saveAllSkins` | `CustomizeModeContext.tsx`, `useCustomizeMode`, `CustomizeModeContextValue`, `CustomizeModeProvider`, `useCustomizeMode` |
| `components/ui-system/responsive.ts` | - | `BREAKPOINTS`, `BREAKPOINT_ORDER`, `Breakpoint`, `clamp`, `cssClamp`, `fluid`, `getBreakpoint`, `isAtLeast` |
| `components/ui-system/runtimeViewport.ts` | `*` | `COMPACT_RUNTIME_VIEWPORT_MAX_WIDTH`, `getPreferredViewportHeight`, `isCompactRuntimeViewport`, `readInteractiveViewportHeight`, `readInteractiveViewportScale`, `readInteractiveViewportWidth` |
| `components/ui-system/skin-engine.ts` | - | `AllPageSkins`, `DEFAULT_SKIN`, `SKIN_PRESETS`, `SkinData`, `SkinFont`, `SkinLayout`, `SkinPage`, `SkinPreset` |
| `components/ui-system/theme-engine.ts` | - | `DEFAULT_OVERRIDES`, `StoredTheme`, `THEME_PRESETS`, `ThemePreset`, `ThemeTokens`, `UserOverrides`, `applyTheme`, `getPreset` |
| `components/ui-system/theme.ts` | - | `getInitialDarkMode`, `setDarkMode`, `toggleDarkMode` |
| `components/ui/dream.AuthenticatedPageHeader.tsx` | `(default)`, `lucide-react`, `next/link`, `react` | `dream.AuthenticatedPageHeader.tsx`, `(default)` |
| `components/ui/dream.DreamWord.tsx` | - | `dream.DreamWord.tsx`, `(default)` |
| `components/ui/dream.IconList.tsx` | `next/link`, `(default)` | `dream.IconList.tsx`, `(default)`, `IconListItem` |
| `components/ui/dream.InfinityIcon.tsx` | `react` | `dream.InfinityIcon.tsx`, `(default)`, `InfinityColorScheme`, `InfinityIconProps`, `InfinityVariant` |
| `components/ui/dream.PlatformBadge.tsx` | `(default)`, `hasIcon`, `PLATFORM_MAP`, `next/image` | `dream.PlatformBadge.tsx`, `(default)` |
| `components/ui/dream.SheetIcon.tsx` | `COLS`, `FRAME_W`, `ICONS`, `ROWS`, `SHEET_PATH`, `hasIcon`, `IconName` | `dream.SheetIcon.tsx`, `(default)` |
| `components/ui/dream.SocialShareSheet.tsx` | `PROFILE_SHARE_PLATFORMS`, `SocialPlatform`, `lucide-react`, `react` | `dream.SocialShareSheet.tsx`, `(default)` |
| `components/universal-editor/dream.UniversalEditor.tsx` | `classifyDrop`, `DreamDrop`, `react` | `dream.UniversalEditor.tsx`, `UniversalEditor`, `UniversalEditorProps` |
| `components/universal-editor/dream.UniversalEditorWrapper.tsx` | `ModuleManifest`, `RuntimeId`, `react`, `react`, `useTapHoldMove`, `Position` | `dream.UniversalEditorWrapper.tsx`, `UniversalEditorWrapper`, `UniversalEditorWrapperProps` |
| `components/universal-editor/index.ts` | `useTapHoldMove`, `Position`, `TapHoldMoveBindings`, `TapHoldMoveOptions`, `UniversalEditorWrapper`, `UniversalEditorWrapperProps`, `UniversalEditor`, `UniversalEditorProps` | `Position`, `TapHoldMoveBindings`, `TapHoldMoveOptions`, `UniversalEditor`, `UniversalEditorProps`, `UniversalEditorWrapper`, `UniversalEditorWrapperProps`, `useTapHoldMove` |
| `components/universal-editor/useTapHoldMove.ts` | `ModuleManifest`, `RuntimeId`, `react` | `useTapHoldMove`, `Position`, `TapHoldMoveBindings`, `TapHoldMoveOptions`, `useTapHoldMove` |
| `components/universe/dream.node-cluster.tsx` | `cn`, `lucide-react`, `next/link`, `react` | `dream.node-cluster.tsx`, `(default)`, `NodeCluster`, `NodeItem` |
| `components/universe/dream.shell.universe-shell.tsx` | `cn`, `react` | `dream.shell.universe-shell.tsx`, `(default)`, `UniverseShell` |
| `components/universe/dream.universe-card.tsx` | `cn`, `react` | `dream.universe-card.tsx`, `(default)`, `UniverseCard`, `UniverseCardContent`, `UniverseCardFooter`, `UniverseCardHeader` |
| `components/universe/index.ts` | `NodeCluster`, `NodeItem`, `UniverseShell`, `UniverseCard`, `UniverseCardContent`, `UniverseCardFooter`, `UniverseCardHeader` | `NodeCluster`, `NodeItem`, `UniverseCard`, `UniverseCardContent`, `UniverseCardFooter`, `UniverseCardHeader`, `UniverseShell` |
| `components/warp/dream.WarpCanvas.tsx` | `useWarp`, `WarpEffect` | `dream.WarpCanvas.tsx`, `(default)`, `WarpCanvasProps` |
| `components/webgpu/dream.WebGPUShowcase.tsx` | `getRendererBackend`, `(default)`, `createInlineRenderIntent`, `next/link`, `react` | `dream.WebGPUShowcase.tsx`, `(default)` |
| `components/webgpu/neuralPostProcess.ts` | - | `NEURAL_POST_PROCESS_WGSL`, `NEURAL_UNIFORM_SIZE`, `createNeuralPostProcessPipeline`, `createNeuralUniforms`, `dispatchNeuralPostProcess` |
| `components/webgpu/renderer.ts` | `requestWebGpuDevice`, `BLUR_FRAG_WGSL`, `BRIGHT_FRAG_WGSL`, `COMPOSITE_FRAG_WGSL`, `COMPUTE_WGSL`, `FS_VERT_WGSL`, `LEMN_FRAG_WGSL`, `LEMN_VERT_WGSL` | `WebGPURenderer` |
| `components/webgpu/shaders.ts` | - | `BLUR_FRAG_WGSL`, `BRIGHT_FRAG_WGSL`, `COMPOSITE_FRAG_WGSL`, `COMPUTE_WGSL`, `FS_VERT_WGSL`, `LEMN_FRAG_WGSL`, `LEMN_VERT_WGSL`, `N_LEMN_SEGS` |
| `components/widgets/dream.AddDreamCTA.tsx` | - | `dream.AddDreamCTA.tsx`, `(default)`, `AddDreamCTAProps` |
| `components/widgets/dream.ConfigureSheet.tsx` | `react` | `dream.ConfigureSheet.tsx`, `(default)` |
| `components/widgets/dream.EditModeBanner.tsx` | `useEditMode` | `dream.EditModeBanner.tsx`, `(default)` |
| `components/widgets/dream.EditModeProvider.tsx` | `react`, `react` | `dream.EditModeProvider.tsx`, `useEditMode`, `EditModeProvider`, `useEditMode` |
| `components/widgets/dream.widget.PlayMediaWidget.tsx` | `react`, `(default)` | `dream.widget.PlayMediaWidget.tsx`, `(default)` |
| `components/widgets/dream.widget.UniversalWidget.tsx` | `react`, `(default)` | `dream.widget.UniversalWidget.tsx`, `(default)` |
| `components/widgets/dream.widget.WidgetCard.tsx` | `(default)`, `react` | `dream.widget.WidgetCard.tsx`, `(default)`, `WidgetCardProps` |
| `components/widgets/dream.widget.WidgetLibrary.tsx` | `default`, `SuperDreamWidgetProps` | `WidgetLibraryProps`, `default` |
| `components/widgets/dream.widget.WidgetPlaceholder.tsx` | `react` | `dream.widget.WidgetPlaceholder.tsx`, `(default)`, `WidgetPlaceholderProps` |
| `components/widgets/dream.widget.WidgetShell.tsx` | `default`, `DreamDataState`, `DreamShellProps` | `WidgetDataState`, `WidgetShellProps`, `default` |
| `components/widgets/dream.widget.WidgetSurface.tsx` | `default`, `SuperDreamWidgetProps` | `WidgetSurfaceProps`, `default` |
| `coresurfaces/dreamsurface.EditProfileDream.tsx` | `(default)`, `DEFAULT_DREAMS`, `ProfileDream`, `(default)`, `createClient`, `safeGetUser`, `lucide-react`, `next/link` | `dreamsurface.EditProfileDream.tsx`, `(default)` |
| `coresurfaces/dreamsurface.ViewProfile.tsx` | `(default)`, `(default)`, `DEFAULT_DREAMS`, `ProfileDream`, `(default)`, `createServerClient`, `safeGetUser`, `@supabase/supabase-js` | `dreamsurface.ViewProfile.tsx`, `(default)`, `metadata` |
| `coresurfaces/home/buttons/button-groups.ts` | - | `BUTTON_GROUPS`, `ButtonGroupName`, `ButtonItem` |
| `coresurfaces/home/buttons/contextual-home.ts` | - | `HOME_BOTTOM_THRESHOLD`, `HOME_TOP_THRESHOLD`, `HomeTarget`, `RuntimeHomeCallbacks`, `resolveHomeTarget`, `runHomeAction` |
| `daydreams/brand/page.tsx` | `(default)`, `DaydreamWidget`, `(default)`, `(default)`, `(default)`, `createServerClient`, `safeGetUser`, `lucide-react` | `page.tsx`, `(default)`, `metadata` |
| `daydreams/code/page.tsx` | `(default)`, `(default)`, `DaydreamWidget`, `(default)`, `(default)`, `createServerClient`, `safeGetUser`, `lucide-react` | `page.tsx`, `(default)`, `metadata` |
| `daydreams/create/page.tsx` | `(default)`, `(default)`, `DaydreamWidget`, `(default)`, `(default)`, `createServerClient`, `safeGetUser`, `lucide-react` | `page.tsx`, `(default)`, `metadata` |
| `daydreams/games/page.tsx` | `(default)`, `safeGetUser`, `createServerClient`, `lucide-react`, `next/link`, `next/navigation`, `(default)`, `(default)` | `page.tsx`, `(default)`, `metadata` |
| `daydreams/lab/page.tsx` | `(default)`, `(default)`, `DaydreamWidget`, `(default)`, `(default)`, `createServerClient`, `safeGetUser`, `lucide-react` | `page.tsx`, `(default)`, `metadata` |
| `daydreams/music/page.tsx` | `(default)`, `DaydreamWidget`, `(default)`, `(default)`, `(default)`, `isDevBypassActive`, `createServerClient`, `safeGetUser` | `page.tsx`, `(default)`, `metadata` |
| `daydreams/shared/useDaydreamPersistence.ts` | `createClient`, `safeGetUser`, `react` | `useDaydreamPersistence`, `UseDaydreamPersistenceOptions`, `UseDaydreamPersistenceReturn`, `useDaydreamPersistence` |
| `daydreams/shared/useDaydreamState.ts` | `createClient`, `safeGetUser`, `react` | `useDaydreamState`, `DaydreamSide`, `DaydreamStatePayload`, `UseDaydreamStateOptions`, `UseDaydreamStateReturn`, `useDaydreamState` |
| `docs/dream-docs/embed.ts` | `createServerClient` | `embedDocSection` |
| `docs/dream-docs/index.ts` | `searchDreamDocs`, `DreamDocSearchResult`, `SearchDreamDocsOptions`, `embedDocSection` | `DreamDocSearchResult`, `SearchDreamDocsOptions`, `embedDocSection`, `searchDreamDocs` |
| `docs/dream-docs/search.ts` | `createServerClient` | `DreamDocSearchResult`, `SearchDreamDocsOptions`, `searchDreamDocs` |
| `dr-eams/ai/audit.ts` | `BOOGIE_POLICY_VERSION`, `createServerClient` | `writeAuditLog` |
| `dr-eams/ai/boogie-policy.ts` | - | `BOOGIE_POLICY_VERSION`, `BoogiePolicyVersion`, `CATEGORY_SEVERITY`, `DEFAULT_DURATIONS_SECONDS`, `ENFORCEMENT_ACTIONS`, `ENFORCEMENT_SCOPES`, `EnforcementAction`, `EnforcementScope` |
| `dr-eams/ai/boogie-verifier.ts` | `createServerClient`, `ActorContext`, `AgentType`, `BoogieDecision`, `BoogieIntentDecision`, `BoogieOutput`, `BoogieSignals`, `Intent` | `detectSignals`, `redactSecrets`, `verifyIntents` |
| `dr-eams/ai/boogieman.ts` | `uuid`, `BOOGIE_POLICY_VERSION`, `DEFAULT_DURATIONS_SECONDS`, `RECOVER_STEPS`, `RULE_CODES`, `STRIKE_EXPIRY_DAYS`, `STRIKE_WEIGHTS`, `THRESHOLDS` | `BLAST_RADIUS_ESCALATION_THRESHOLD`, `BOOGIE_POLICY_VERSION`, `BoogieEnforceInput`, `CONTAINMENT_ACTIONS`, `boogieEnforce`, `boogieEvaluate`, `computeRiskScore`, `getStrikeExpiryDays` |
| `dr-eams/ai/capability-gate.ts` | `isOwnerEmail`, `createServerClient`, `safeGetUser`, `ActorContext`, `IntentType` | `authorizeIntent`, `authorizeIntents`, `buildActorContext`, `getRoleRank`, `hasCapability`, `meetsMinimumRole` |
| `dr-eams/ai/CIC.ts` | - | `CIC` |
| `dr-eams/ai/client.ts` | - | `AiAgent`, `AiMessage`, `AiResponse`, `callAi` |
| `dr-eams/ai/confirm-token.ts` | `createServerClient`, `UIContext`, `crypto` | `consumeConfirmToken`, `generateConfirmToken`, `storeConfirmToken`, `verifyConfirmToken` |
| `dr-eams/ai/confirm.ts` | `crypto` | `makeConfirmToken`, `verifyConfirmToken` |
| `dr-eams/ai/groq.ts` | - | `GroqChatOptions`, `GroqMessage`, `GroqRole`, `groqChat`, `groqHealthCheck` |
| `dr-eams/ai/handlers/dreams.ts` | `DreamAddFromPresetPayload`, `DreamConfigPatchPayload`, `DreamOpenPayload`, `DreamPreviewPayload`, `DreamRemovePayload`, `DreamReorderPayload`, `ToolHandler` | `handleDreamAddFromPreset`, `handleDreamConfigPatch`, `handleDreamOpen`, `handleDreamPreview`, `handleDreamRemove`, `handleDreamReorder` |
| `dr-eams/ai/handlers/index.ts` | `registerHandler`, `handleHomeAnchorSetState`, `handleHomeMenuOpen`, `handleNavDelta`, `handleDreamAddFromPreset`, `handleDreamConfigPatch`, `handleDreamOpen`, `handleDreamPreview` | `registerAllHandlers` |
| `dr-eams/ai/handlers/navigation.ts` | `HomeAnchorSetStatePayload`, `NavDeltaPayload`, `ToolHandler` | `handleHomeAnchorSetState`, `handleHomeMenuOpen`, `handleNavDelta` |
| `dr-eams/ai/handlers/social.ts` | `DraftSavePayload`, `FollowUserPayload`, `PostCreatePayload`, `PostLikePayload`, `SearchPayload`, `crypto`, `ToolHandler` | `handleDraftSave`, `handleFollowUser`, `handlePostCreate`, `handlePostLike`, `handleSearch` |
| `dr-eams/ai/idempotency.ts` | `createServerClient` | `checkIdempotency` |
| `dr-eams/ai/rate-limiter.ts` | `createServerClient` | `RATE_LIMITS`, `RateLimitConfig`, `checkRateLimit`, `getCurrentRPM` |
| `dr-eams/ai/rateLimit.ts` | `createServerClient` | `RateLimitResult`, `checkRateLimit`, `getCurrentRPM` |
| `dr-eams/ai/schemas.ts` | `zod` | `Agent`, `AgentSchema`, `AppealEntry`, `AppealEntrySchema`, `AppealRequest`, `AppealRequestSchema`, `BoogieDecision`, `BoogieDecisionSchema` |
| `dr-eams/ai/tfBackend.ts` | `@tensorflow/tfjs-backend-webgpu`, `@tensorflow/tfjs` | `initTfBackend` |
| `dr-eams/ai/tool-router.ts` | `SupabaseClient`, `ActorContext`, `Intent`, `IntentType`, `ToolResult`, `UIContext`, `writeAuditLog`, `toErrorMessage` | `HandlerContext`, `ToolHandler`, `executeIntent`, `executeIntents`, `getHandler`, `registerHandler` |
| `dr-eams/ai/triad.ts` | `groqChat`, `GroqMessage`, `IntentSchema`, `Intent`, `IntentType`, `uuid` | `AI_MODELS`, `CANONICAL_NAV_ROUTES`, `boogiePolicyCheck`, `getOwnerEmail`, `isOwnerEmail`, `planWithEams`, `validateWithIdari` |
| `dr-eams/animation/DrEamsAnimator.ts` | - | `DrEamsAction`, `DrEamsAnimator` |
| `dr-eams/search/drEamsSearch.ts` | - | `DrEamsParsedReply`, `DrEamsRequestBody`, `NAV_SUGGESTIONS`, `NavSuggestion`, `buildDrEamsRequest`, `buildDreamDMUrl`, `matchNavSuggestions`, `parseDrEamsReply` |
| `dr-eams/tools.ts` | - | `CurationAction`, `CurationRefreshSliceInput`, `DeviceMode`, `DrEamsActionName`, `DrEamsTools`, `NavAction`, `NavOpenPublicProfileInput`, `OnboardingAction` |
| `dreamdmbar/dream.GlowingLight.tsx` | `react` | `dream.GlowingLight.tsx`, `(default)`, `GlowingLightProps` |
| `dreamdmbar/dream.PhaseTrail.tsx` | `react`, `react` | `dream.PhaseTrail.tsx`, `(default)`, `PhaseTrailProps` |
| `dreamdmbar/dreamsurface.dreamdmbar.tsx` | `lucide-react`, `next/image`, `react`, `react`, `(default)`, `(default)`, `(default)`, `calculatePointerVelocity` | `dreamsurface.dreamdmbar.tsx`, `(default)`, `BAR_H`, `NAV_H` |
| `dreamdmbar/hooks/useDreamBarContext.ts` | `next/navigation`, `react`, `BarIntentMode` | `useDreamBarContext`, `DreamBarContext`, `DreamBarSurface`, `detectSurface`, `resolveIntentOverride`, `useDreamBarContext` |
| `dreamdmbar/hooks/useDreamDMConversations.ts` | `RealtimePostgresInsertPayload`, `createClient`, `getOfflineRecord`, `putOfflineRecord`, `react` | `useDreamDMConversations`, `DMConversation`, `useDreamDMConversations` |
| `dreamdmbar/hooks/useDreamDMDraft.ts` | `deleteOfflineRecord`, `getOfflineRecord`, `putOfflineRecord`, `react` | `useDreamDMDraft`, `DraftPayload`, `cleanupStaleDrafts`, `getDraftAge`, `listAllDraftIds`, `useDreamDMDraft` |
| `dreamdmbar/hooks/useDreamDMMessages.ts` | `RealtimePostgresInsertPayload`, `createClient`, `getOfflineRecord`, `putOfflineRecord`, `react` | `useDreamDMMessages`, `DMMessage`, `useDreamDMMessages` |
| `dreamdmbar/hooks/useDreamSearch.ts` | `USER_FACING_ENGINES`, `createClient`, `react` | `useDreamSearch`, `SearchResult`, `SearchResultType`, `UseDreamSearchReturn`, `useDreamSearch` |
| `dreamdmbar/hooks/useMessagingCore.ts` | `uploadBlobToLedgerStorage`, `createClient`, `react`, `DMMessage`, `toErrorMessage` | `useMessagingCore`, `MediaType`, `SendMessageParams`, `UseMessagingCoreReturn`, `useMessagingCore` |
| `dreamdmbar/hooks/useModuleBarIntent.ts` | `ModuleBarAction`, `useDreamSystem`, `react` | `useModuleBarIntent`, `UseModuleBarIntentResult`, `useModuleBarIntent` |
| `dreamdmbar/hooks/useNotifications.ts` | `react` | `useNotifications`, `useNotifications` |
| `dreamdmbar/notifications/notificationHelpers.ts` | - | `DbNotificationContent`, `DbNotificationRow`, `UiNotification`, `UiNotificationType`, `applyOptimisticDelete`, `applyOptimisticMarkAll`, `applyOptimisticRead`, `extractNotificationMessage` |
| `dreamdmbar/notifications/useNotifications.ts` | `react`, `applyOptimisticDelete`, `applyOptimisticMarkAll`, `applyOptimisticRead`, `getUnreadCount`, `normalizeDbRow`, `sortByRecent`, `DbNotificationRow` | `useNotifications`, `UseNotificationsReturn`, `useNotifications` |
| `dreamdmbar/runtime/barInteractions.ts` | - | `BAR_FLING_LINE_RATIO`, `BAR_FLING_TO_BOTTOM_VELOCITY_THRESHOLD_PX_PER_MS`, `BAR_FLING_TO_TOP_MIN_DRAG_PX`, `BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS`, `BAR_SNAP_TO_TOP_HEIGHT_RATIO`, `BAR_SNAP_TO_TOP_THRESHOLD_PX`, `BarReleaseAction`, `DEFAULT_SPLIT_RATIO` |
| `dreamdmbar/runtime/bridgeSeamFlow.ts` | - | `SEAM_CHANNEL_COLORS`, `SEAM_DEFAULT_COLOR`, `SeamParticle`, `_resetIdCounter`, `channelColor`, `createIdleParticle`, `createSeamParticle`, `evictDeadParticles` |
| `dreamdmbar/runtime/DreamSystemContext.tsx` | `DEFAULT_SPLIT_RATIO`, `SystemPanelId`, `moveTorus`, `torusFocusKey`, `createClient`, `getOfflineRecord`, `putOfflineRecord`, `safeGetUser` | `DreamSystemContext.tsx`, `useDreamSystem`, `BarIntent`, `BarIntentMode`, `DEFAULT_BAR_INTENT`, `DEFAULT_WORLD_FOCUS`, `DreamSystemProvider`, `HomeData` |
| `dreamr/activity/aqs.ts` | `createClient`, `UserMetrics` | `calculateAQS`, `calculateRealShitRate`, `formatAQS`, `formatRealShitRate`, `getAQS`, `getAQSLeaderboard`, `getAQSTier`, `getAQSTierColor` |
| `dreamr/activity/boogieActivityPolicy.ts` | `PolicyCategory`, `PolicyCategoryValue` | `ActivityFeedTreatment`, `BoogieActivitySignals`, `detectActivityFraudSignals`, `resolveActivityFeedTreatment`, `shouldExcludeFromFeed` |
| `dreamr/activity/revenueSplit.ts` | - | `ACTIVITY_REVENUE_SPLIT`, `ActivityRevenueSplit`, `calculateActivityRevenueSplit`, `validateActivityRevenueSplit` |
| `dreamr/activity/scoring.ts` | `ActivityTier`, `INNOVATION_BONUS`, `TIER_MULTIPLIERS`, `VERIFICATION_STRENGTH`, `VerificationMethod` | `calculateActivityPoints`, `calculateDecayDate`, `calculateVisibilityBoost`, `getInnovationBonus`, `getTierDescription`, `getTierDisplayName`, `getTierMultiplier`, `getVerificationMethodDisplayName` |
| `dreamr/activity/skipCredits.ts` | `AdType`, `SKIP_CREDIT_REWARDS` | `MIN_WATCHED_PERCENT_FOR_CREDIT`, `SKIP_CREDIT_SPEND_PER_AD`, `addSkipCredits`, `calculateSkipCreditsEarned`, `canSpendSkipCredit`, `spendSkipCredit` |
| `dreamr/activity/types.ts` | - | `ActivityTier`, `ActivityVerification`, `AdView`, `CPV_PRICING`, `EarnSkipCreditsRequest`, `EarnSkipCreditsResponse`, `GetPlatformMetricsResponse`, `GetUserMetricsResponse` |
| `dreamr/activity/visibility-score.ts` | `createClient`, `ActivityTier` | `calculateVisibilityScore`, `calculateVisibilityScores`, `estimateVisibilityScore`, `getVisibilityRankedFeed`, `shouldPromotePost`, `sortByVisibilityScore` |
| `dreamr/bot-detection/detector.ts` | `coarseGrainInvariance`, `crossSwipeSimilarity`, `deviationEntropy`, `perpendicularDeviation`, `velocityVarianceJerk`, `Path` | `BotDetector`, `BotScore`, `SwipeRecord` |
| `dreamr/bot-detection/index.ts` | `isBotSession`, `BotSessionResult`, `SwipeRecord`, `analyzeSwipe`, `isBotSession`, `tallyView`, `BotSessionResult`, `Point` | `BOT_MAX_DEVIATION_PX`, `BOT_MAX_ENTROPY`, `BOT_MAX_SLOG_VEL_VAR`, `BOT_MIN_COARSE_GRAIN_DIFF`, `BOT_MIN_CROSS_SIMILARITY`, `BotSessionResult`, `BotSessionTracker`, `FREEZE_MAX_MS` |
| `dreamr/bot-detection/swipe-physics.ts` | - | `Path`, `PathPoint`, `VelocityStats`, `coarseGrainInvariance`, `crossSwipeSimilarity`, `deviationEntropy`, `perpendicularDeviation`, `velocityVarianceJerk` |
| `dreamr/bot-detection/view-tally.ts` | - | `VIEW_TALLY_DURATION_MS`, `ViewTallyTimer`, `ViewTallyTracker`, `createViewTallyTimer` |
| `dreamr/botDetection.ts` | `slog`, `slogEntropy`, `slogVariance` | `BotSessionResult`, `Point`, `SwipeAnalysis`, `SwipeRecord`, `ViewTally`, `analyzeSwipe`, `isBotSession`, `tallyView` |
| `dreamr/components/dreamrfeed.tsx` | `(default)`, `(default)`, `useDreamSystem`, `canRecordDreamRView`, `contentTypePreferenceKey`, `emptyDreamRSwipePreferences`, `nextSwipePreferences`, `personalizeFeedOrder` | `dreamrfeed.tsx`, `(default)`, `DREAMR_TOPICS` |
| `dreamr/feed/feedTopics.ts` | - | `ALL_TOPICS`, `DEFAULT_TOPIC_IDS`, `FEED_TOPICS_KEY`, `FeedTopic`, `loadActiveTopicIds`, `topicIdsToQueries` |
| `dreamr/feed/hashtags.ts` | - | `Hashtag`, `MAX_TAGS_PER_POST`, `MAX_TAG_LENGTH`, `TrendingTag`, `calculateTrending`, `extractHashtags`, `formatTag`, `segmentText` |
| `dreamr/feed/useLiveFeed.ts` | `RealtimePostgresInsertPayload`, `getPrimaryPostMediaUrl`, `createClient`, `getOfflineRecord`, `putOfflineRecord`, `react` | `useLiveFeed`, `FeedPost`, `UseLiveFeedReturn`, `useLiveFeed` |
| `dreamr/feed/useYouTubeLiveFeed.ts` | `ALL_TOPICS`, `DEFAULT_TOPIC_IDS`, `loadActiveTopicIds`, `topicIdsToQueries`, `FeedPost`, `UnifiedFeedItem`, `react` | `useYouTubeLiveFeed`, `UseYouTubeLiveFeedReturn`, `useYouTubeLiveFeed` |
| `dreamr/feeds/embedFeedLoader.ts` | `server-only`, `node:fs`, `node:path` | `EmbedFeed`, `EmbedFeedAlgorithm`, `EmbedFeedItem`, `loadEmbedFeed`, `loadEmbedFeedByProvider` |
| `dreamr/runtime/closeFriendsVisibility.ts` | `SupabaseClient`, `(dynamic import)` | `VisibilityCandidate`, `fetchCloseFriendsCircle`, `filterByCloseFriends`, `loadVisibilityCircle` |
| `dreamr/runtime/feedCursor.ts` | - | `FeedPaginationParams`, `MAX_SEEN_IDS`, `deriveNextCursor`, `parseFeedParams` |
| `dreamr/runtime/socialHumanityScore.ts` | `createClient`, `@supabase/supabase-js` | `HumanityScore`, `SocialHumanityInput`, `computeSocialHumanityScore` |
| `dreamr/runtime/swipeCalibration.ts` | - | `CalibrationProfile`, `CalibrationSample`, `calibrateDevice`, `getActiveProfile`, `resetCalibration`, `setActiveProfile` |
| `dreamr/runtime/swipePersonalization.ts` | - | `CREATOR_PREFERENCE_WEIGHT`, `DreamRSwipeIntent`, `DreamRSwipePost`, `DreamRSwipePreferenceSets`, `DreamRViewIntent`, `LONGFORM_CONTENT_THRESHOLD`, `TYPE_PREFERENCE_WEIGHT`, `canRecordDreamRView` |
| `dreamr/runtime/torridityLedger.ts` | `getActiveProfile`, `CalibrationProfile` | `HumanityPath`, `OriginalityMeta`, `PostMassMeta`, `SwipeReleaseResult`, `SwipeReleaseSample`, `TORRIDITY_LEDGER_CONFIG`, `TorridityPostLike`, `calculateOriginality` |
| `dreamr/social-feed.ts` | `rss-parser` | `SocialFeedItem`, `SocialSource`, `extractFirstImage`, `fetchSocialFeed`, `stripHtml` |
| `dreamr/torridity.ts` | `slog` | `ContentItem`, `RankedItem`, `TORRIDITY_A0_PERCEPTION`, `TORRIDITY_DP`, `TORRIDITY_LAMBDA`, `TORRIDITY_N`, `contentDecayFactor`, `contentMass` |
| `dreamr/torridity/constants.ts` | - | `a0Perception`, `deltaP`, `lambda`, `n` |
| `dreamr/torridity/index.ts` | `a0Perception`, `deltaP`, `lambda`, `n`, `contentMass`, `decayFactor`, `mu`, `rankFeed` | `ContentItem`, `RankedItem`, `a0Perception`, `contentMass`, `decayFactor`, `deltaP`, `lambda`, `mu` |
| `dreamr/torridity/physics.ts` | `a0Perception`, `deltaP`, `n` | `ContentItem`, `RankedItem`, `contentMass`, `decayFactor`, `mu`, `rankFeed`, `throttlingGate`, `torridityRank` |
| `engine/activeModulesStore.ts` | `ActiveModuleInstance`, `RuntimeRegionKey`, `getOfflineRecord`, `putOfflineRecord` | `loadActiveModules`, `removeActiveModule`, `restoreActiveModulesFromOfflineCache`, `saveActiveModule`, `saveActiveModules`, `saveActiveModulesForRegion`, `transferActiveModuleRegion` |
| `engine/admin/lockout.ts` | `createServiceClient` | `OWNER_EMAIL`, `isAdminLocked`, `isDomainBlocked`, `isOwner`, `triggerAdminLockout` |
| `engine/admin/upgrade-readiness.ts` | `createPatchPlan`, `PatchPlan`, `FEATURE_MANIFESTS`, `calculateProgress`, `computeAllBuildCycleStates`, `BuildCycleState`, `DaydreamEnginManifest`, `FeatureEntry` | `BuildReadinessSummary`, `UpgradeApproval`, `UpgradeApprovalStatus`, `UpgradeProposal`, `UpgradeReadinessSnapshot`, `UpgradeTarget`, `buildPatchPlanChecklist`, `createUpgradeProposal` |
| `engine/agentOS.ts` | `CodeEnginHostTools` | `getAgentOS` |
| `engine/agentOS/hostTools.ts` | - | `CodeEnginHostTools`, `codeEnginHostTools` |
| `engine/agents/adari.ts` | `node:fs`, `node:path` | `AdariCheck`, `AdariReport`, `assertBuildInvariants`, `getBuildReport` |
| `engine/agents/agentBus.ts` | `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `Intent` | `GameEnginAgentRole`, `IdariEventDetail`, `IdariEventType`, `InnerDreamsEventDetail`, `InnerDreamsEventType`, `Intent`, `TriadConsensusResult`, `emitGameEnginAgentEvent` |
| `engine/agents/boogieManAI.ts` | `BoogieManAgent` | `BOOGIEMAN_EVENT`, `PolicyCheck`, `PolicyResult`, `PolicyVerdict`, `checkPolicy`, `createBoogieManAgent`, `emitBoogieManEvent`, `onBoogieManEvent` |
| `engine/agents/dreamengin.ts` | - | `AI_TRIAD`, `AXIOMS`, `CONNECTION_PATH_COUNT`, `CORE_SURFACES`, `DAYDREAM_SURFACES`, `DESIGN_TOKENS`, `DREAMDM_BAR`, `DREAMENGIN_EVENT` |
| `engine/agents/drEamsMode.ts` | - | `DREAMS_MODE_EVENT`, `DREAMS_MODE_STORAGE_KEY`, `getDrEamsMode`, `onDrEamsModeChange`, `setDrEamsMode` |
| `engine/agents/idari.ts` | `IDARiAgent` | `GENERATION_LAW_WEIGHTS`, `GenerationLawAssessment`, `GenerationLawMode`, `IDARI_EVENT`, `IDARiAction`, `IDARiRequest`, `IDARiResult`, `KnownIssue` |
| `engine/agents/idariLoop.ts` | `createPatchPlan`, `PatchPlan`, `PatchRisk`, `getSnapshot`, `TelemetrySnapshot`, `correlate`, `CorrelationResult`, `buildImmediateRemediationAction` | `LoopHealthSummary`, `LoopIteration`, `LoopSnapshotSummary`, `LoopStatus`, `RemediationLoopOptions`, `buildFallbackPatchPlan`, `buildIdariPrompt`, `getLoopHealthSummary` |
| `engine/agents/teachBus.ts` | - | `TeachEvent`, `emitTeach`, `hasTaught`, `markTaught`, `onTeach` |
| `engine/agents/uiActions.ts` | `setDarkMode` | `UiActionContext`, `UiActionResult`, `executeUiAction`, `getUiCapabilities` |
| `engine/animation/gsap/gsap.ts` | `gsap`, `gsap` | `getGsap` |
| `engine/animation/gsap/useGsapEntrance.ts` | `getGsap`, `react` | `useGsapEntrance`, `useGsapEntrance` |
| `engine/animation/gsap/useGsapFlip.ts` | `getGsap`, `react` | `useGsapFlip`, `useGsapFlip` |
| `engine/animation/gsap/useGsapScrollReveal.ts` | `getGsap`, `react` | `useGsapScrollReveal`, `ScrollRevealOptions`, `useGsapScrollReveal` |
| `engine/api/route.ts` | `createServerClient`, `safeGetUser`, `next/server`, `zod` | `ApiContext`, `json`, `jsonApiError`, `jsonError`, `parseJson`, `parseQuery`, `requireUser`, `withApi` |
| `engine/artifacts/artifactStore.ts` | `DreamArtifact`, `cacheAsset`, `getOfflineRecord`, `putOfflineRecord` | `OfflineBlobArtifactRecord`, `getDefaultSystemArtifacts`, `hideArtifact`, `listSystemArtifacts`, `listVisibleArtifacts`, `loadArtifacts`, `readOfflineBlobArtifacts`, `recordOfflineBlobArtifact` |
| `engine/assets/engineAssets.ts` | `encodeUint8ArrayToLedgerString`, `createClient`, `safeGetUser` | `saveEngineAsset` |
| `engine/collaboration/index.ts` | `SupabaseClient`, `@supabase/supabase-js` | `CollabEventHandler`, `CollabEventType`, `CollabMode`, `CollabModeRuleSet`, `CollabOutboundPayload`, `CollabPayload`, `CollabSession`, `CollabSessionOptions` |
| `engine/connectors/connectorRegistry.ts` | - | `CONNECTOR_REGISTRY`, `ConnectorCategory`, `ConnectorDef`, `ConnectorLimitation`, `ConnectorStatus`, `ConnectorTier`, `SliceTypeDef`, `getConnectorDef` |
| `engine/connectors/deliveryStrategy.ts` | - | `ConnectorDeliveryStrategy`, `DELIVERY_STRATEGY_MATRIX`, `DeliveryMethod`, `getDeliveryStrategy`, `knownDeliveryProviders`, `supportsPoll`, `supportsWebhook`, `supportsWebhookVerification` |
| `engine/connectors/installFlow.ts` | `getWidgetTypesForConnector` | `ConnectSuccessOptions`, `ConnectSuccessResult`, `SlotGrid`, `SuggestedWidget`, `_resetInstallFlowState`, `cancelAutoLock`, `consumeDeferredPrompt`, `deferPrompt` |
| `engine/connectors/normalise.ts` | `FeedItemMedia`, `UnifiedFeedItem` | `YouTubePlaylistItem`, `YouTubeSearchItem`, `atUriToHttps`, `deduplicateFeedItems`, `hostFromUrl`, `normaliseBluesky`, `normaliseDevto`, `normaliseFacebook` |
| `engine/connectors/providers/bluesky.ts` | `normaliseBluesky`, `UnifiedFeedItem` | `BlueskyCredentials`, `blueskyCredentialFields`, `blueskySync`, `blueskyVerify` |
| `engine/connectors/providers/devto.ts` | `normaliseDevto`, `devtoUserRssUrl`, `parseRssFeed`, `UnifiedFeedItem` | `DevtoCredentials`, `devtoCredentialFields`, `devtoSync`, `devtoVerify` |
| `engine/connectors/providers/facebook.ts` | `normaliseFacebook`, `facebookPageRssUrl`, `parseRssFeed`, `UnifiedFeedItem`, `toErrorMessage` | `FacebookCredentials`, `facebookCredentialFields`, `facebookSync`, `facebookVerify` |
| `engine/connectors/providers/github.ts` | `normaliseGitHub`, `UnifiedFeedItem` | `GitHubCredentials`, `githubCredentialFields`, `githubSync`, `githubVerify` |
| `engine/connectors/providers/hackernews.ts` | `normaliseHackerNews`, `hackerNewsRssUrl`, `hackerNewsUserRssUrl`, `parseRssFeed`, `UnifiedFeedItem` | `HNFeedType`, `HackerNewsCredentials`, `hackernewsCredentialFields`, `hackernewsSync`, `hackernewsVerify` |
| `engine/connectors/providers/instagram.ts` | `UnifiedFeedItem` | `INSTAGRAM_CREDENTIAL_FIELDS`, `InstagramCredentials`, `getInstagramOAuthConfig`, `instagramSync`, `instagramVerify` |
| `engine/connectors/providers/mastodon.ts` | `normaliseMastodon`, `UnifiedFeedItem` | `MastodonCredentials`, `mastodonCredentialFields`, `mastodonSync`, `mastodonVerify` |
| `engine/connectors/providers/medium.ts` | `normaliseMedium`, `mediumUserRssUrl`, `parseRssFeed`, `UnifiedFeedItem` | `MediumCredentials`, `mediumCredentialFields`, `mediumSync`, `mediumVerify` |
| `engine/connectors/providers/nostr.ts` | `normaliseNostr`, `UnifiedFeedItem` | `NostrCredentials`, `isValidNostrPubkey`, `nostrCredentialFields`, `nostrSync`, `nostrVerify` |
| `engine/connectors/providers/pinterest.ts` | `normalisePinterest`, `parseRssFeed`, `pinterestRssUrl`, `UnifiedFeedItem`, `toErrorMessage` | `PinterestCredentials`, `pinterestCredentialFields`, `pinterestSync`, `pinterestVerify` |
| `engine/connectors/providers/podcast.ts` | `normalisePodcast`, `parseRssFeed`, `UnifiedFeedItem`, `toErrorMessage` | `PodcastCredentials`, `podcastCredentialFields`, `podcastSync`, `podcastVerify` |
| `engine/connectors/providers/reddit.ts` | `normaliseReddit`, `UnifiedFeedItem` | `RedditCredentials`, `redditCredentialFields`, `redditSync`, `redditSyncSaved`, `redditVerify` |
| `engine/connectors/providers/shellhub.ts` | - | `SHELLHUB_DEFAULT_SERVER`, `ShellHubCredentials`, `ShellHubDevice`, `shellhubCredentialFields`, `shellhubListDevices`, `shellhubVerify` |
| `engine/connectors/providers/substack.ts` | `normaliseSubstack`, `parseRssFeed`, `substackRssUrl`, `UnifiedFeedItem` | `SubstackCredentials`, `substackCredentialFields`, `substackSync`, `substackVerify` |
| `engine/connectors/providers/tiktok.ts` | `normaliseTikTok`, `parseRssFeed`, `tiktokProfileRssUrl`, `UnifiedFeedItem`, `toErrorMessage` | `TikTokCredentials`, `tiktokCredentialFields`, `tiktokSync`, `tiktokVerify` |
| `engine/connectors/providers/tumblr.ts` | `normaliseTumblr`, `parseRssFeed`, `tumblrRssUrl`, `UnifiedFeedItem`, `toErrorMessage` | `TumblrCredentials`, `tumblrCredentialFields`, `tumblrSync`, `tumblrVerify` |
| `engine/connectors/providers/twitter.ts` | `normaliseTwitter`, `DEFAULT_NITTER_INSTANCE`, `parseRssFeed`, `twitterNitterRssUrl`, `UnifiedFeedItem`, `toErrorMessage` | `TwitterCredentials`, `twitterCredentialFields`, `twitterSync`, `twitterVerify` |
| `engine/connectors/providers/youtube.ts` | `deduplicateFeedItems`, `normaliseYouTubePlaylistItem`, `normaliseYouTubeSearchResult`, `YouTubePlaylistItem`, `YouTubeSearchItem`, `UnifiedFeedItem` | `YouTubeCredentials`, `getYouTubeAnalyticsApiKey`, `getYouTubeApiKey`, `youtubeDiscovery`, `youtubeSearchByQuery`, `youtubeSync`, `youtubeVerify` |
| `engine/connectors/reconcile.ts` | `server-only`, `SupabaseClient`, `Database`, `deduplicateFeedItems`, `dispatchSync`, `toErrorMessage` | `ReconcileResult`, `reconcileConnector` |
| `engine/connectors/syncDispatch.ts` | `server-only`, `blueskySync`, `githubSync`, `instagramSync`, `mastodonSync`, `nostrSync`, `redditSync`, `youtubeSync` | `DISPATCH_SUPPORTED_PROVIDERS`, `DispatchSupportedProvider`, `UnsupportedProviderError`, `dispatchSync` |
| `engine/connectors/webhookVerification.ts` | `hub.mode` | `extractMetaWebhookChallenge`, `extractYouTubeWebSubChallenge`, `isCronAuthorised` |
| `engine/connectors/youtube.ts` | `createServiceClient`, `@supabase/supabase-js`, `server-only` | `pollYouTube` |
| `engine/consent/consentManager.ts` | `(dynamic import)`, `(dynamic import)` | `AuditEntry`, `ConsentDecision`, `ConsentDomain`, `ConsentEntry`, `ConsentManager`, `consentManager`, `resolveAcceptPolicy` |
| `engine/data-transform.ts` | - | `BufferStats`, `DATA_PHYSICS`, `DataPhysicsConfig`, `applyPhysicsFilter`, `computeBufferStats`, `decodeFromLedger`, `encodeToLedger`, `normalizeBuffer` |
| `engine/dev-bypass.ts` | - | `isDevAdminBypassActive`, `isDevBypassActive` |
| `engine/dream-window/connectionVerbs.ts` | `CONNECTION_VERBS`, `isRejectedConnectionVerb`, `isValidConnectionVerb`, `REJECTED_CONNECTION_VERBS`, `ConnectionVerb` | `CONNECTION_VERBS`, `ConnectionAction`, `ConnectionResult`, `ConnectionVerb`, `REJECTED_CONNECTION_VERBS`, `createActivateAction`, `createAttachAction`, `createBindAction` |
| `engine/dream-window/DreamWindowLifecycle.ts` | `DREAM_WINDOW_STATES`, `ConnectionVerb`, `DreamWindowState` | `DREAM_WINDOW_REQUIRED_LAYERS`, `DREAM_WINDOW_STATES`, `DestinationRule`, `DreamWindowConfig`, `DreamWindowInstance`, `DreamWindowLayer`, `DreamWindowLayerValidationResult`, `DreamWindowPosition` |
| `engine/dream-window/enginConnectionNetwork.ts` | `DAYDREAM_DOMAINS`, `ENGIN_SURFACES`, `NETWORK_COUNTS`, `ConnectionVerb`, `DaydreamDomain`, `EnginSurface` | `ALL_CONNECTION_PATHS`, `EnginConnectionPath`, `getPathsForDomain`, `getPathsForEngin`, `hasConnectionPath` |
| `engine/dream-window/index.ts` | `DestinationRule`, `DreamWindowConfig`, `DreamWindowInstance`, `DreamWindowPosition`, `DreamWindowSize`, `DREAM_WINDOW_REQUIRED_LAYERS`, `DREAM_WINDOW_STATES`, `activateDreamWindow` | `ALL_CONNECTION_PATHS`, `CONNECTION_VERBS`, `ConnectionAction`, `ConnectionResult`, `ConnectionVerb`, `DEFAULT_RUNTIME_REGION_STATE`, `DREAM_WINDOW_REQUIRED_LAYERS`, `DREAM_WINDOW_STATES` |
| `engine/dream-window/runtimeRegion.ts` | `RUNTIME_REGIONS`, `SURFACE_NAMES`, `DreamWindowState`, `RuntimeSeamName` | `DEFAULT_RUNTIME_REGION_STATE`, `DreamSpaceState`, `DreamWindowRef`, `RUNTIME_REGIONS`, `RuntimeRegionState`, `SeamState`, `SurfaceSpaceState`, `activateSurface` |
| `engine/dream-window/useDreamWindowActions.ts` | `CreateDreamWindowBody`, `DreamWindowRecord`, `PatchDreamWindowBody`, `react`, `DREAM_WINDOW_STATES`, `toErrorMessage` | `useDreamWindowActions`, `UseDreamWindowActionsReturn`, `createDreamWindow`, `patchDreamWindow`, `useDreamWindowActions` |
| `engine/dreamnav/delta.ts` | - | `Action`, `DEFAULT_NAV_STATE`, `Heading`, `NavState`, `Node`, `reduceNav`, `tau`, `transition` |
| `engine/dreamnav/gctAssist.ts` | `GCTEngine`, `GCTMatch`, `Template`, `Action`, `Node` | `GCTDebug`, `GestureVector`, `WidgetCandidate`, `chooseAxisAction`, `chooseWidgetForSlot` |
| `engine/dreamnav/gestures6.ts` | `Action` | `createGestureArbiter` |
| `engine/dreamnav/path.ts` | `Action`, `Node`, `tau` | `dispatchTauPath`, `findTauPath` |
| `engine/dreamnav/tau.ts` | `*` | `tau.ts` |
| `engine/dreams/drag.ts` | - | `DREAM_DRAG_MIME`, `DreamDragData`, `DreamRuntime`, `DreamSurfaceName`, `parseDreamDragData`, `serializeDreamDragData`, `surfaceForRuntime`, `transferDream` |
| `engine/dreams/dreamIntentBus.ts` | `createDomainObject`, `JsonObject`, `JsonValue`, `DomainAuthorizationContext`, `DomainCapability`, `InformationDomain`, `IntentEnvelope`, `dreamOSBus` | `DreamIntentContext`, `DreamIntentResult`, `dispatchDreamIntent`, `registerDreamIntentHandler` |
| `engine/dreams/DreamRegistry.tsx` | `react` | `DreamRegistry.tsx`, `DreamRegistry`, `RegisteredDreamComponent`, `getDreamComponent` |
| `engine/dreams/profileProjection.ts` | `DreamProjection`, `DreamVisibility` | `CreateDreamProjectionInput`, `canRenderProjection`, `createDreamProjection` |
| `engine/dreams/types.ts` | `isJsonObject`, `isJsonSerializable`, `JsonObject` | `DREAM_KINDS`, `DREAM_RENDER_MODES`, `DREAM_SURFACES`, `DREAM_VISIBILITIES`, `DrEamsIntent`, `DrEamsIntentType`, `Dream`, `DreamCapabilityMap` |
| `engine/dreams/useDreamsRuntime.ts` | `react` | `useDreamsRuntime`, `DreamsRuntime`, `DreamsRuntimeState`, `DreamsView`, `useDreamsRuntime` |
| `engine/editor/universalEditor.ts` | `createEventBus`, `EventBus`, `ModuleManifest`, `RuntimeId`, `ModuleManifest`, `RuntimeId` | `AssemblyEvents`, `ModuleManifest`, `RuntimeId`, `canTransfer`, `createLocalEventBus`, `transferModule` |
| `engine/engin-runtime/EnginBaseState.ts` | - | `CoherenceCapacity`, `CoherenceState`, `CoherenceTransform`, `CreateDomainObjectInput`, `DEFAULT_COHERENCE_CAPACITY`, `DomainObject`, `DomainVisibility`, `EnginBaseState` |
| `engine/engin-runtime/EnginCapabilities.ts` | `isDomainObject`, `DomainObject`, `JsonValue` | `CapabilityGateResult`, `DEFAULT_USER_CAPABILITIES`, `DENY_ALL`, `DomainAuthorizationContext`, `DomainCapability`, `EnginCapability`, `EnginCapabilityMap`, `authorizeDomainCapability` |
| `engine/engin-runtime/EnginCapabilityExecution.ts` | `isCanonicalEnginId`, `CanonicalEnginId`, `EnginCapabilityProfile`, `EnginProfileId` | `AudioTrackMixer`, `CodeEditPatch`, `CodeEditRingBuffer`, `CollaborationDeltaPacker`, `EnginCapabilityExecutionKernel`, `EnginExecutionPlan`, `ExecutionSubsystem`, `GeometryBatchInput` |
| `engine/engin-runtime/EnginCapabilityScorecard.ts` | `JsonObject`, `acceptanceValueForTarget`, `evaluateCapabilityTarget`, `CapabilityTargetDimension`, `CapabilityTargetEvaluation`, `EnginCapabilityProfile` | `EnginCapabilityScorecard`, `EnginCapabilityScorecardEntry`, `MetricMeasurement`, `MetricStatus`, `createEnginCapabilityScorecard` |
| `engine/engin-runtime/EnginCapabilityTargets.ts` | - | `CANONICAL_ENGIN_ALIASES`, `CANONICAL_ENGIN_IDS`, `CanonicalEnginId`, `CapabilityProfileValidation`, `CapabilityTargetDimension`, `CapabilityTargetDirection`, `CapabilityTargetEvaluation`, `CapabilityTargetUnit` |
| `engine/engin-runtime/EnginDomainCores.ts` | `AudioTrackMixer`, `MidiEventRingBuffer`, `ParticleSoAKernel`, `RayGridAccelerator`, `VectorPathCache`, `CollaborationDeltaPacker`, `GeometryBatcher`, `CommandRingBuffer` | `BrandCollaborationDeltaPacker`, `BrandLocalApplyQueue`, `BrandPaletteCache`, `CacheStorageRuntime`, `CodeDiagnosticWorkerBridge`, `CodeEditRingBuffer`, `CodeEditorHotState`, `CodeExecutionWorkerBridge` |
| `engine/engin-runtime/EnginEventBus.ts` | `RuntimeCoherenceReport` | `EnginEventBus`, `EnginEventHandler`, `EnginEventMap`, `EnginLifecycleEvents`, `createEnginEventBus` |
| `engine/engin-runtime/EnginHardwareCapabilities.ts` | `JsonObject` | `EnginHardwareCapabilities`, `detectEnginHardwareCapabilities`, `detectWasmSimdSupport`, `fallbackEnginHardwareCapabilities` |
| `engine/engin-runtime/EnginIOAdapter.ts` | `EnginBaseState`, `JsonValue`, `PremiumRuntimeQuality` | `EnginIOAdapter`, `EnginSyncDirection`, `EnginSyncFrame`, `EnginSyncTransport`, `LocalStorageAdapter`, `MemoryAdapter`, `MemorySyncTransport`, `enginStorageKey` |
| `engine/engin-runtime/EnginPerformanceProbe.ts` | `CapabilityTargetDimension`, `MetricMeasurement`, `EnginHardwareCapabilities` | `EnginPerformanceProbe`, `StartupBudgetProbe` |
| `engine/engin-runtime/EnginRuleSetContract.ts` | `isEnginBaseState`, `EnginBaseState`, `JsonObject`, `JsonValue`, `EnginCapability`, `EnginCapabilityProfile` | `CompatibilityNegotiationResult`, `ConstraintResult`, `EnginAction`, `EnginCompatibilityRange`, `EnginConstraint`, `EnginRuleSetContract`, `EnginRuleSetManifest`, `EnginRuleSetParams` |
| `engine/engin-runtime/EnginRuntime.ts` | `attachCoherenceReport`, `createBaseState`, `createCoherenceCapacity`, `createCoherenceReport`, `createRuntimeLoad`, `isEnginBaseState`, `patchBaseState`, `CoherenceCapacity` | `ENGIN_RUNTIME_FEATURES`, `ENGIN_RUNTIME_VERSION`, `EnginHardwareAccelerationState`, `EnginRuntime`, `EnginRuntimeOptions`, `RuntimeWorkFlushResult` |
| `engine/engin-runtime/EnginRuntimeRegistry.ts` | `EnginRuleSetContract`, `EnginAction`, `JsonObject` | `RuntimeEnginRegistration`, `getRuntimeEnginRegistration`, `listRuntimeEnginRegistrations`, `registerRuntimeEngin`, `resolveRuntimeCapability` |
| `engine/engin-runtime/EnginSnapshotFingerprint.ts` | `EnginBaseState`, `JsonValue` | `WasmFingerprintExports`, `fingerprintBytesWithWasm`, `fingerprintEnginSnapshot`, `hashBytesFNV1A`, `stableStringifySnapshot` |
| `engine/engin-runtime/HotRuntime.ts` | `EnginAction`, `EnginExecutionPlan` | `AudioWorkletRuntime`, `BinaryCommandBus`, `BinaryCommandPacket`, `CoalescedCommandQueue`, `CommandRingBuffer`, `DeferredPersistenceQueue`, `GpuBufferKind`, `GpuBufferRegistry` |
| `engine/engin-runtime/index.ts` | `EnginAction`, `EnginRuleSetContract`, `EnginRuntimeOptions`, `EnginRuntime`, `attachCoherenceReport`, `createBaseState`, `createCoherenceCapacity`, `createCoherenceReport` | `AudioTrackMixer`, `AudioWorkletRuntime`, `BinaryCommandBus`, `BinaryCommandPacket`, `CANONICAL_ENGIN_IDS`, `CanonicalEnginId`, `CapabilityGateResult`, `CapabilityProfileValidation` |
| `engine/engin-runtime/InternalMetrics.ts` | `EnginCapabilityScorecard` | `DevOnlyBenchmarkRunner`, `InternalOnlyMetricStore`, `UserFacingMetricLeakTest` |
| `engine/engin-runtime/PremiumRuntimeQuality.ts` | `EnginBaseState`, `JsonObject`, `EnginRuntimeFeature` | `PremiumLayerTier`, `PremiumRuntimeMaterial`, `PremiumRuntimeQuality`, `PremiumRuntimeQualityInput`, `PremiumRuntimeQualityValidation`, `createPremiumRuntimeQuality`, `validatePremiumRuntimeQuality` |
| `engine/events/event-bus/index.ts` | - | `EventBus`, `EventHandler`, `bridgeBuses`, `createEventBus` |
| `engine/events/eventBus.ts` | - | `EventBus`, `EventHandler`, `createDualRuntimeHub`, `createEventBus` |
| `engine/feature-build/buildCycle.ts` | `DaydreamEnginManifest`, `FeatureStatus` | `BuildCycleState`, `BuildPhase`, `allPairsInRefinePhase`, `allPairsMovingForward`, `calculateProgress`, `computeAllBuildCycleStates`, `computeBuildCycleState`, `countFeaturesByStatus` |
| `engine/feature-build/featureManifest.ts` | `DaydreamDomain`, `EnginSurface`, `,  status: ` | `DaydreamEnginManifest`, `FEATURE_MANIFESTS`, `FeatureEntry`, `FeatureStatus`, `getManifest` |
| `engine/feature-build/index.ts` | `FEATURE_MANIFESTS`, `getManifest`, `DaydreamEnginManifest`, `FeatureEntry`, `FeatureStatus`, `allPairsInRefinePhase`, `allPairsMovingForward`, `calculateProgress` | `BuildCycleState`, `BuildPhase`, `DaydreamEnginManifest`, `FEATURE_MANIFESTS`, `FeatureEntry`, `FeatureStatus`, `SICCDimension`, `SICC_DIMENSIONS` |
| `engine/feature-build/uiQualityCriteria.ts` | - | `SICCDimension`, `SICC_DIMENSIONS`, `SICC_GLOBAL_CRITERIA`, `UIQualityCheck`, `getCriteriaForDimension` |
| `engine/gct/anomaly-detection.ts` | `GCTEngine`, `Template`, `GCTMatch` | `AnomalyDetectionResult`, `detectAnomalies` |
| `engine/gct/audio-fingerprint.ts` | `GCTEngine`, `Template`, `GCTMatch` | `SongFingerprint`, `audioToVector`, `identifySong` |
| `engine/gct/gct-engine.ts` | - | `GCTConfig`, `GCTEngine`, `GCTMatch`, `Template` |
| `engine/gct/image-search.ts` | `GCTEngine`, `Template`, `GCTMatch` | `ImageSearchItem`, `findSimilarImages` |
| `engine/gct/index.ts` | `*`, `*`, `*`, `*`, `*` | `index.ts` |
| `engine/gct/recommendations.ts` | `GCTEngine`, `Template` | `ItemProfile`, `recommendItems` |
| `engine/generated/brain.ts` | - | `BrainMap`, `brain` |
| `engine/generated/cartridges.ts` | - | `CartridgesMap`, `cartridges` |
| `engine/generated/connectors.ts` | - | `ConnectorsMap`, `connectors` |
| `engine/generated/dreamdmbar.ts` | - | `DreamdmbarMap`, `dreamdmbar` |
| `engine/generated/dreamr.ts` | - | `DreamrMap`, `dreamr` |
| `engine/generated/dreamsurfaces.ts` | - | `DreamsurfacesMap`, `dreamsurfaces` |
| `engine/generated/engins.ts` | - | `EnginsMap`, `engins` |
| `engine/generated/homedream.ts` | - | `HomedreamMap`, `homedream` |
| `engine/generated/hooks.ts` | - | `HooksMap`, `hooks` |
| `engine/generated/index.ts` | `engins`, `rulesets`, `surfaces`, `dreamsurfaces`, `dreamr`, `dreamdmbar`, `homedream`, `connectors` | `OsArchitectureGraph`, `OsArchitectureMap`, `OsArchitectureStageEntries`, `OsGeneratedRouters`, `OsSlotCounts`, `hydrateEngineRegistry`, `osArchitectureFlow`, `osArchitectureGraph` |
| `engine/generated/osArchitectureMap.ts` | - | `OsArchitectureGraph`, `OsArchitectureMap`, `OsArchitectureStageEntries`, `OsGeneratedRouters`, `OsSlotCounts`, `osArchitectureFlow`, `osArchitectureGraph`, `osArchitectureMap` |
| `engine/generated/personas.ts` | - | `PersonasMap`, `personas` |
| `engine/generated/rulesets.ts` | - | `RulesetsMap`, `rulesets` |
| `engine/generated/surfaces.ts` | - | `SurfacesMap`, `surfaces` |
| `engine/generated/systems.ts` | - | `SystemsMap`, `systems` |
| `engine/generationLaw.ts` | - | `BUGS_LOG`, `CreativePass`, `DELTA_P`, `DOC_RELATIONSHIPS`, `IOTA_MAX`, `InventionResult`, `LAMBDA`, `PrePassChecklist` |
| `engine/gestures/touchGestures.ts` | - | `GestureCallbacks`, `GestureConfig`, `GestureEvent`, `GestureRecogniser`, `GestureType`, `Vec2` |
| `engine/gestures/useTouchGestures.ts` | `react`, `GestureRecogniser`, `GestureCallbacks`, `GestureConfig` | `useTouchGestures`, `useTouchGestures` |
| `engine/identity/canonical-names.ts` | - | `AIAgent`, `AI_AGENTS`, `AI_ROUTES`, `ALL_CANONICAL_NAMES`, `ALL_ENGIN_NAMES`, `CONNECTION_VERBS`, `CORE_SURFACES`, `CORE_SURFACE_ROUTES` |
| `engine/index.ts` | `UniversalEngine`, `engine`, `RegistryEntry`, `RegistrySlot` | `RegistryEntry`, `RegistrySlot`, `UniversalEngine`, `engine` |
| `engine/intelligence/continuityHelpers.ts` | `ENGIN_REGISTRY`, `EnginEntry`, `ForgeActivityPulse` | `ResumeDest`, `formatArtifactKind`, `getArtifactAccent`, `resolveResumeDest` |
| `engine/intelligence/sessionContinuity.ts` | - | `SessionContinuity`, `SessionDiff`, `SessionStorageBackend`, `SessionSummary`, `StoredSession`, `sessionContinuity` |
| `engine/intelligence/sessionPatternEngine.ts` | `@tensorflow/tfjs`, `@tensorflow/tfjs-backend-webgpu`, `@tensorflow/tfjs` | `PatternEngineState`, `PredictedNext`, `SessionPatternEngine` |
| `engine/intelligence/useSessionIntelligence.ts` | `dreamOSBus`, `react`, `SessionContinuity`, `SessionDiff`, `SessionSummary`, `SessionPatternEngine`, `PatternEngineState`, `PredictedNext` | `useSessionIntelligence`, `PATTERN_MATRIX_LS_KEY`, `SessionIntelligence`, `useSessionIntelligence` |
| `engine/intent/appIntentPressure.ts` | - | `AppIntentMassState`, `AppIntentPoint`, `AppIntentPressure`, `AppIntentPressureField`, `AppIntentPressureFieldOptions`, `AppIntentPressureSource`, `appIntentPressureFromElementPoint` |
| `engine/io.ts` | `@supabase/supabase-js`, `@supabase/supabase-js` | `RealtimePostgresInsertPayload`, `SupabaseClient` |
| `engine/journey/journeyDots.ts` | `LogJourneyDotInput` | `hasJourneyDot`, `logJourneyDot` |
| `engine/journey/journeyInsights.ts` | `JourneyDot` | `AnnotatedDot`, `DotInsight`, `MS_PER_DAY`, `RETURN_GAP_DAYS`, `annotateDotsWithInsights`, `computeCurrentStreak`, `computeWeeklyFrequency`, `detectReturnGaps` |
| `engine/journey/withJourney.ts` | `logJourneyDot`, `JourneyDotKind` | `JourneyMeta`, `withJourney` |
| `engine/ledger/ledger-data.ts` | - | `LedgerData`, `ledgerData` |
| `engine/ledger/ledger.ts` | `SupabaseClient`, `Fingerprint`, `PeakMap` | `AssetEntry`, `AssetManifest`, `AssetType`, `FingerprintEntry`, `Ledger`, `LedgerEntry`, `PeakMapEntry`, `SampleMetadata` |
| `engine/manifests/osSubsystemManifest.ts` | `CONNECTOR_REGISTRY`, `EnginConnectionPath`, `ALL_CONNECTION_PATHS`, `ENGIN_REGISTRY`, `AI_AGENTS`, `AI_ROUTES`, `WIDGET_REGISTRY` | `DREAMENGIN_OS_SUBSYSTEM_MANIFEST`, `DreamenginOSSubsystemFamily`, `DreamenginOSSubsystemFamilySummary`, `DreamenginOSSubsystemManifest`, `DreamenginOSSubsystemNode`, `buildDreamenginOSSubsystemManifest` |
| `engine/marketplace/listings.ts` | - | `MARKETPLACE_CONTACT_TABLE`, `MARKETPLACE_TABLE`, `MARKETPLACE_TAGS_MAX`, `MARKETPLACE_TAG_MAX_LENGTH`, `MARKETPLACE_TITLE_MAX`, `MarketplaceCategory`, `MarketplaceListingInput`, `MarketplaceListingRecord` |
| `engine/marketplace/request.ts` | `MARKETPLACE_CONTACT_TABLE` | `CONTACT_REQUEST_MESSAGE_MAX`, `ContactRequestInput`, `ContactRequestRecord`, `ContactRequestValidationResult`, `MARKETPLACE_CONTACT_TABLE`, `buildContactRequestRecord`, `validateContactRequest` |
| `engine/navigation/anchorField.ts` | `Vector3`, `SINGULARITY_THRESHOLD` | `AnchorFieldConfig`, `DEFAULT_ANCHOR_CONFIG`, `RecenterState`, `applyForceToVelocity`, `checkIdleStatus`, `computeAttractorForce`, `computeForceField`, `computePotential` |
| `engine/navigation/AnchorStateBuffer.ts` | - | `AnchorStateBuffer`, `HOLD_FIRED`, `HOLD_HOLDING`, `HOLD_IDLE`, `MODE_HOME`, `MODE_PROFILE`, `MODE_SHRUNK` |
| `engine/navigation/AnchorWidgetStorage.ts` | - | `AnchorWidgetState`, `AnchorWidgetStorage`, `HomeSlotMapping`, `PriorityWidget` |
| `engine/navigation/dream-state.ts` | - | `Axis`, `Depth`, `DreamNode`, `DreamState`, `MoveDirection`, `createInitialDreamState`, `getStateForNode`, `move` |
| `engine/navigation/GestureFrameComputer.ts` | `PointerState` | `GestureFrame`, `GestureFrameComputer` |
| `engine/navigation/GestureIntentResolver.ts` | `GestureFrame`, `Quaternion`, `fromGestureSwipe`, `identityQuaternion`, `multiply`, `normalize` | `GESTURE_SENSITIVITY`, `GestureIntent`, `GestureIntentResolver`, `HOLD_THRESHOLD_MS`, `PINCH_IN_THRESHOLD`, `PINCH_OUT_THRESHOLD`, `SWIPE_THRESHOLD` |
| `engine/navigation/index.ts` | `AnchorStateBuffer`, `HOLD_FIRED`, `HOLD_HOLDING`, `HOLD_IDLE`, `MODE_HOME`, `MODE_PROFILE`, `MODE_SHRUNK`, `AnchorWidgetStorage` | `AnchorStateBuffer`, `AnchorWidgetState`, `AnchorWidgetStorage`, `EngineConfig`, `EngineEventCallback`, `EngineEventType`, `FULLSCREEN_DEPTH`, `GestureFrame` |
| `engine/navigation/manifold.ts` | - | `SINGULARITY_THRESHOLD`, `SphericalCoords`, `VECTOR_ZERO_THRESHOLD`, `Vector3`, `blendFaceEdge`, `cartesianToSpherical`, `computeLambda`, `computeSlotPosition` |
| `engine/navigation/NavStateBuffer.ts` | - | `FULLSCREEN_DEPTH`, `LAYER_CUBE`, `LAYER_DREAM`, `LAYER_HOME`, `LAYER_PROFILE`, `LAYER_WIDGET`, `NavStateBuffer`, `PROFILE_DEPTH` |
| `engine/navigation/physics.ts` | - | `DEFAULT_PHYSICS_CONFIG`, `PhysicsConfig`, `PhysicsState`, `SNAP_THRESHOLD`, `applyDamping`, `applyInertialDecay`, `computeAcceleration`, `computeSpringForce` |
| `engine/navigation/PointerEventCapture.ts` | - | `PointerEventCallback`, `PointerEventCapture`, `PointerState` |
| `engine/navigation/quaternion.ts` | `VECTOR_ZERO_THRESHOLD` | `Quaternion`, `fromAxisAngle`, `fromGestureSwipe`, `identityQuaternion`, `isValid`, `magnitude`, `multiply`, `normalize` |
| `engine/navigation/ReturnStack.ts` | - | `ReturnStack` |
| `engine/navigation/SpatialNavigationEngine.ts` | `GestureFrameComputer`, `GestureIntent`, `GestureIntentResolver`, `LAYER_HOME`, `NavStateBuffer`, `PointerEventCapture`, `PointerState`, `ReturnStack` | `EngineConfig`, `EngineEventCallback`, `EngineEventType`, `SpatialNavigationEngine` |
| `engine/navigation/StructureLedger.ts` | `DreamNode`, `DreamState`, `MoveDirection`, `getStateForNode`, `move` | `ledgerStats`, `matchState`, `resolveTransition` |
| `engine/navigation/TransformSolver.ts` | `computeLambda`, `computeSlotPosition`, `projectCubicToSphere`, `NavStateBuffer`, `Quaternion`, `identityQuaternion`, `toRotationMatrix` | `TransformOutput`, `TransformSolver`, `ViewportMetrics` |
| `engine/navigation/useNavigation.ts` | `react`, `SpatialNavigationEngine`, `WidgetInstanceRecord` | `useNavigation`, `NavigationState`, `UseNavigationOptions`, `useNavigation` |
| `engine/navigation/WidgetInstanceMemory.ts` | - | `WidgetInstanceMemory`, `WidgetInstanceRecord`, `WidgetPresentation` |
| `engine/observability/collector.ts` | `(dynamic import)`, `(dynamic import)`, `(require)` | `LogEntry`, `LogLevel`, `LogSeverityCounts`, `MetricPoint`, `TelemetrySnapshot`, `TraceSpan`, `clearBuffers`, `collectBatchLogs` |
| `engine/observability/correlator.ts` | `LogEntry`, `MetricPoint`, `TelemetrySnapshot`, `TraceSpan` | `AnomalySeverity`, `AnomalySignal`, `AnomalyType`, `CorrelateOptions`, `CorrelationResult`, `correlate`, `detectErrorSpikes`, `detectLatencySpikes` |
| `engine/observability/healthTrend.ts` | `LoopIteration`, `LoopStatus` | `HealthDataPoint`, `HealthReport`, `HealthStatus`, `HealthTrend`, `clearHealthTrend`, `exportHealthReport`, `getHealthScore`, `getHealthTrend` |
| `engine/observability/immediateAction.ts` | `RootCauseAnalysis`, `,       file_hints: unique([...fileHints]),       commands: [` | `ImmediateActionKind`, `ImmediateActionUrgency`, `ImmediateRemediationAction`, `buildImmediateRemediationAction` |
| `engine/observability/index.ts` | `*`, `*`, `*` | `index.ts` |
| `engine/observability/otel.ts` | `@opentelemetry/api`, `@opentelemetry/exporter-prometheus`, `@opentelemetry/exporter-trace-otlp-http`, `@opentelemetry/resources`, `@opentelemetry/sdk-metrics`, `@opentelemetry/sdk-trace-node`, `@opentelemetry/semantic-conventions`, `node:http` | `getMeter`, `getPrometheusMetrics`, `getTracer` |
| `engine/observability/otelBridge.ts` | `@opentelemetry/api`, `@opentelemetry/api`, `getMeter`, `getTracer` | `initOtelBridge`, `otelRecordLog`, `otelRecordMetric`, `otelRecordTrace`, `otelRequestEnd`, `otelRequestStart` |
| `engine/observability/rootCauseAnalyzer.ts` | `PatchRisk`, `TelemetrySnapshot`, `AnomalySignal`, `Build / bundler error — missing module or incorrect import path` | `RootCauseAnalysis`, `RootCauseConfidence`, `inferRootCause` |
| `engine/offline/offlineCache.ts` | - | `CachedAsset`, `CachedHttpResponse`, `CachedScene`, `DB_NAME`, `DB_VERSION`, `JsonPrimitive`, `JsonValue`, `LocalFirstMutation` |
| `engine/offline/useOfflineSync.ts` | `react`, `isOnline`, `onConnectivityChange`, `processSyncQueue`, `SyncQueueEntry` | `useOfflineSync`, `UseOfflineSyncReturn`, `useOfflineSync` |
| `engine/os/index.ts` | `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `slog`, `slogArray`, `slogEntropy`, `slogInv` | `ALL_CATEGORIES`, `AssemblySandbox`, `AssetEntry`, `AssetManifest`, `AssetType`, `AtomicComponent`, `AtomicPiece`, `BUGS_LOG` |
| `engine/os/OSContext.tsx` | `react`, `react`, `EventBus`, `createEventBus`, `Ledger`, `createLedger`, `upgradeEngine` | `OSContext.tsx`, `useOS`, `OSInstance`, `OSProvider`, `useOS` |
| `engine/platform/index.ts` | `logPhysicsExperiment` | `AdOrderResult`, `FeedEntry`, `RegistryEntry`, `getFeed`, `logPhysicsExperiment`, `processAdOrder`, `syncToGlobalRegistry` |
| `engine/platform/lab.ts` | `createClient`, `toErrorMessage` | `logPhysicsExperiment` |
| `engine/policy/boogiePolicy.ts` | `BOOGIE_POLICY_VERSION`, `CATEGORY_SEVERITY`, `DEFAULT_DURATIONS_SECONDS`, `ENFORCEMENT_ACTIONS`, `ENFORCEMENT_SCOPES`, `RECOVER_STEPS`, `RULE_CODES`, `STRIKE_EXPIRY_DAYS` | `BOOGIE_POLICY_VERSION`, `BoogieEvaluateInput`, `BoogiePolicyVersion`, `CATEGORY_SEVERITY`, `DEFAULT_DURATIONS_SECONDS`, `ENFORCEMENT_ACTIONS`, `ENFORCEMENT_SCOPES`, `EnforcementAction` |
| `engine/reality/realityStore.ts` | `@supabase/supabase-js`, `Reality`, `RealityActivityEntry`, `RealityActivityKind`, `RealityEnginSlot`, `RealityMember`, `RealityMode`, `RealitySnapshot` | `appendActivity`, `buildChannelId`, `createReality`, `getRealityById`, `joinReality`, `listMembers`, `listMyRealities`, `loadActivity` |
| `engine/reality/types.ts` | `CollabMode`, `SessionRole` | `Reality`, `RealityActivityEntry`, `RealityActivityKind`, `RealityContextValue`, `RealityEnginSlot`, `RealityMember`, `RealityMode`, `RealitySnapshot` |
| `engine/rendering/babylon/createEngine.ts` | `@babylonjs/core`, `@babylonjs/core` | `BabylonEngineOptions`, `BabylonEngineResult`, `createBabylonEngine` |
| `engine/rendering/babylon/dreamengine-hybrid.ts` | `@babylonjs/core` | `initHybridEngine`, `onGrab` |
| `engine/rendering/babylon/useDreamLogoScene.ts` | - | `useDreamLogoScene`, `DreamLogoSceneOptions`, `useDreamLogoScene` |
| `engine/rendering/god-tier/godTierEngine.ts` | `WebGPUDirector`, `applyDirectorFrame`, `babylonMeshToSceneObject`, `buildPassPlan`, `buildSceneObjects`, `classifyObject`, `classifyPressure`, `decideObject` | `AlgorithmLevel`, `BabylonEngineLike`, `BabylonMeshLike`, `BabylonSceneLike`, `CameraSignals`, `CameraState`, `ChildContentFilter`, `DeviceSignals` |
| `engine/rendering/god-tier/useGodTier.ts` | `react`, `defaultDeviceSignals`, `defaultRuntimeMetrics`, `defaultUXSignals`, `DreamEngineGodTierSystem`, `getGodTierUiTokens`, `DeviceSignals`, `GodTierState` | `useGodTier`, `UseGodTierOptions`, `UseGodTierReturn`, `useGodTier` |
| `engine/rendering/renderer/Canvas2DRenderer.ts` | `FrustumCuller`, `Rect`, `IRenderer`, `TextStyle` | `Canvas2DRenderer` |
| `engine/rendering/renderer/FrustumCuller.ts` | - | `FrustumCuller`, `Rect` |
| `engine/rendering/renderer/index.ts` | `Canvas2DRenderer`, `FrustumCuller`, `Rect`, `IRenderer`, `TextStyle` | `Canvas2DRenderer`, `FrustumCuller`, `IRenderer`, `Rect`, `TextStyle`, `createRenderer` |
| `engine/rendering/renderer/IRenderer.ts` | - | `IRenderer`, `TextStyle` |
| `engine/rendering/warp/useWarp.ts` | `react`, `WarpEffect`, `WarpEngine`, `WarpEngineOptions` | `useWarp`, `UseWarpOptions`, `UseWarpReturn`, `useWarp` |
| `engine/rendering/warp/warpEngine.ts` | - | `WarpContext`, `WarpEffect`, `WarpEngine`, `WarpEngineOptions`, `WarpKernel`, `WarpParticle`, `WarpVec2`, `dampingKernel` |
| `engine/rendering/webgpu.ts` | `requestWebGpuDevice`, `WebGpuRenderEngin`, `RenderEnginFrameStats`, `RenderEnginLifecycleHooks`, `RenderEnginScene` | `RenderEnginFrameStats`, `RenderEnginGraphicsBackend`, `RenderEnginLifecycleHooks`, `RenderEnginScene`, `WebGPURuntimeInitialization`, `WebGpuRenderEngin`, `getRendererBackend`, `initializeRenderEnginGraphicsRuntime` |
| `engine/rendering/webgpu/adaptiveQuality.ts` | `classifyPressure`, `Pressure`, `RuntimeMetrics` | `AdaptiveQualityController`, `BatteryState`, `DeviceSignals`, `QualityProfile`, `QualityTier`, `gatherDeviceSignals`, `getBatteryState`, `getCoreCount` |
| `engine/rendering/webgpu/director.ts` | - | `CameraSignals`, `CameraState`, `DirectorBabylonEngine`, `DirectorBabylonMesh`, `DirectorBabylonScene`, `DirectorFrame`, `FrameBudget`, `MeshHints` |
| `engine/rendering/webgpu/useWebGPUDirector.ts` | `react`, `WebGPUDirector`, `applyDirectorFrame`, `buildSceneObjects`, `CameraSignals`, `CameraState`, `DirectorBabylonEngine`, `DirectorBabylonMesh` | `useWebGPUDirector`, `CameraSignals`, `CameraState`, `DirectorFrame`, `MeshHints`, `RuntimeMetrics`, `UseWebGPUDirectorOptions`, `UseWebGPUDirectorReturn` |
| `engine/routing/surfaces.ts` | - | `PUBLIC_SURFACE_PREFIXES`, `SAB_ISOLATED_ROUTE_PREFIXES`, `isPublicSurfacePath`, `isSabIsolatedPath` |
| `engine/runtime/apperception.ts` | `getEnginByName`, `RuntimeWorld`, `RuntimeRegion`, `RuntimeRegionKey` | `ApperceptiveContext`, `ApperceptiveSurface`, `buildApperceptiveContext` |
| `engine/runtime/channelMetrics.ts` | - | `ChannelMetrics`, `getAllChannelMetrics`, `getChannelMetrics`, `recordEmission`, `recordError`, `resetChannelMetrics` |
| `engine/runtime/coercionTable.ts` | - | `DreamDrop`, `DreamDropType`, `classifyDrop`, `coerceDataTransfer`, `coerceRawPayload` |
| `engine/runtime/dreamOSBus.ts` | `AI_AGENTS`, `RuntimeRegion`, `RuntimeWorld`, `bridge`, `AnyBridgeEmission`, `DualRuntimeChannel`, `RuntimeContainer`, `ENGIN_REGISTRY` | `CAPABILITY_DESCRIPTORS`, `CapabilityDescriptor`, `CapabilityKind`, `DreamOSArtifactKind`, `DreamOSRuntimeContext`, `DreamOSSharedArtifact`, `DreamOSSnapshot`, `INFORMATION_DOMAINS` |
| `engine/runtime/dreamsurface/dreamsurface.bridge.ts` | `HomeDreamState`, `applyDelta`, `EventBus`, `DreamLedger`, `appendEntry` | `DreamSurfaceBridge`, `createBridge` |
| `engine/runtime/dreamsurface/dreamsurface.delta.ts` | - | `StateDelta`, `computeDelta`, `mergeDelta` |
| `engine/runtime/dreamsurface/index.ts` | `createBridge`, `DreamSurfaceBridge`, `computeDelta`, `mergeDelta`, `StateDelta` | `DreamSurfaceBridge`, `StateDelta`, `computeDelta`, `createBridge`, `mergeDelta` |
| `engine/runtime/dropTargetRegistry.ts` | `DreamDrop`, `DreamDropType`, `RuntimeId` | `DropTarget`, `dropTargetRegistry` |
| `engine/runtime/dualRuntime.ts` | `RUNTIME_REGIONS`, `SURFACE_NAMES`, `SystemPanelId` | `DEFAULT_DUAL_RUNTIME`, `DualRuntimeState`, `RUNTIME_REGIONS`, `RuntimeWorld`, `SURFACE_NAMES`, `TORUS_DOMAINS`, `TORUS_FOCUS_MAP`, `TORUS_HEIGHT` |
| `engine/runtime/dualRuntimeBridge.ts` | `invokeMadMaxiSnapshotTransfer`, `events`, `(dynamic import)` | `AckStatus`, `AnyBridgeEmission`, `BridgeEventHandler`, `ChannelEventKey`, `ChannelEventPayload`, `DualRuntimeChannel`, `PeerState`, `QuantumComputeResult` |
| `engine/runtime/engin.auth.ts` | - | `EnginSession`, `createSession`, `validateSession` |
| `engine/runtime/engin.eventbus.ts` | - | `EnginEvent`, `EventBus`, `createEventBus` |
| `engine/runtime/engin.ledger.ts` | - | `DreamLedger`, `LedgerEntry`, `appendEntry`, `createLedger` |
| `engine/runtime/engin.renderloop.ts` | - | `RenderFrame`, `RenderLoop`, `createRenderLoop` |
| `engine/runtime/EnginDispatcher.ts` | `RenderIntentType`, `BAR_Y_SCALE`, `buildWorkgroups`, `createEnginSAB`, `f64Telemetry`, `int32AxisState`, `int32DreamDMBarX`, `int32DreamDMBarY` | `DispatcherStats`, `DispatcherToWorkerMessage`, `EnginDispatcher`, `RenderDispatcherIntent`, `WasmEngineExports`, `WorkerBoundsViolationMessage`, `WorkerInboundMessage`, `WorkerInitMessage` |
| `engine/runtime/enginWorkflowRegistry.ts` | `bridge` | `ENGIN_KEYS`, `EnginKey`, `WorkflowArtifactType`, `WorkflowDefinition`, `WorkflowStats`, `allWorkflows`, `executeWorkflow`, `findWorkflowById` |
| `engine/runtime/iEngine.ts` | `createDomainObject`, `isDomainObject`, `DomainObject`, `DomainVisibility`, `JsonObject`, `JsonValue`, `authorizeDomainCapability`, `DomainAuthorizationContext` | `ActorContext`, `AuthorizationDecision`, `CapabilityAction`, `DomainObject`, `DomainVisibility`, `EngineManifest`, `IntentBus`, `IntentPacket` |
| `engine/runtime/index.ts` | `(default)`, `createClient`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)` | `DreamLedger`, `EnginEvent`, `EnginSession`, `EventBus`, `LedgerEntry`, `RegistryEntry`, `RegistrySlot`, `RenderFrame` |
| `engine/runtime/instanceManager.ts` | `RuntimeChannel`, `createLocalChannel`, `createRuntimeChannel`, `RuntimeId`, `zustand`, `(dynamic import)` | `useInstanceManager`, `EnginInstance`, `EnginName`, `InstanceMode`, `buildInstanceKey`, `createInstance`, `persistInstanceList`, `promoteInstanceToRealtime` |
| `engine/runtime/isAuthRelatedError.ts` | `toErrorMessage` | `isAuthRelatedError` |
| `engine/runtime/madMaxiSnapshotBridge.ts` | - | `invokeMadMaxiSnapshotTransfer` |
| `engine/runtime/memory.ts` | - | `BAR_SEAM_ATOMICS_INDEX`, `BAR_SEAM_SCALE`, `BAR_Y_SCALE`, `CACHE_LINE`, `ConformMemoryMap`, `ENGIN_OFFSET_AXIS_STATE`, `ENGIN_OFFSET_DREAMDM_BAR_X`, `ENGIN_OFFSET_DREAMDM_BAR_Y` |
| `engine/runtime/moduleRegistry.ts` | `bridge`, `isModuleManifest`, `negotiateModuleCompatibility`, `ModuleManifest`, `RuntimeCompatibility`, `RuntimeId`, `zustand`, `WidgetInstance` | `useModuleRegistry`, `manifestFromWidget`, `moduleRegistry`, `subscribeRegistryToTransferEvents`, `useModuleRegistry` |
| `engine/runtime/offlineQueue.ts` | `toErrorMessage` | `EnqueueOptions`, `OfflineAction`, `OfflineActionStatus`, `OfflineActionType`, `OfflineReplayRequest`, `QueueStatus`, `clearQueue`, `dequeue` |
| `engine/runtime/quantumCircuit.ts` | `QuantumComputeResult`, `QuantumComputeResult` | `QuantumComputeResult`, `runQuantumCircuit` |
| `engine/runtime/runtimeChannel.ts` | `isJsonSerializable` | `RealtimeChannel`, `RealtimeChannelOptions`, `RealtimeClient`, `RuntimeChannel`, `RuntimeChannelEvent`, `RuntimeChannelOptions`, `createLocalChannel`, `createRealtimeChannel` |
| `engine/runtime/runtimeContainer.ts` | `createCoherenceCapacity`, `createCoherenceReport`, `createRuntimeLoad`, `CoherenceCapacity`, `RuntimeCoherenceReport`, `RuntimeLoad` | `RuntimeContainer`, `RuntimeContainerOptions`, `RuntimeStrategy` |
| `engine/runtime/seamClipboard.ts` | `RuntimeRegion`, `dreamOSBus`, `bridge`, `ENGIN_KEYS`, `findWorkflows`, `EnginKey` | `SeamClipboardMimeType`, `SeamClipboardPayload`, `seamClipboard` |
| `engine/runtime/sharedResourcePool.ts` | - | `acquireSharedResource`, `releaseSharedResource` |
| `engine/runtime/snapshotFingerprint.ts` | `TelemetrySnapshot` | `FingerprintCache`, `FingerprintCacheEntry`, `createFingerprintCache`, `fingerprintSnapshot`, `snapshotsAreEquivalent` |
| `engine/runtime/superciliousPlatformRuntime.ts` | `createRuntimeObject`, `EngineManifest`, `IntentPacket`, `JsonObject`, `JsonValue`, `RuntimeRuleSet` | `COMPETING_PLATFORMS`, `CapabilityVector`, `CompetingPlatform`, `DreamEnginSuperiorityState`, `PlatformCapabilityProfile`, `SUPERCILIOUS_CAPABILITIES`, `SuperciliousCapability`, `assertDreamEnginSuperset` |
| `engine/runtime/swapManager.ts` | - | `SwapDomain`, `clearSwap`, `getAllSwapStates`, `getSwap`, `resetAllSwaps`, `setSwap`, `toggleSwap` |
| `engine/runtime/useDragSurface.ts` | `DreamDrop`, `DreamDropType`, `coerceDataTransfer`, `dropTargetRegistry`, `RuntimeId`, `react` | `useDragSurface`, `UseDragSurfaceOptions`, `UseDragSurfaceResult`, `useDragSurface` |
| `engine/runtime/useDualRuntime.ts` | `react`, `bridge`, `BridgeEventHandler`, `ChannelEventKey`, `ChannelEventPayload`, `DualRuntimeChannel`, `PeerState`, `UnsubscribeFn` | `useDualRuntime`, `BridgeEventHandler`, `ChannelEventKey`, `ChannelEventPayload`, `DualRuntimeChannel`, `PeerState`, `UnsubscribeFn`, `UseDualRuntimeReturn` |
| `engine/runtime/useDualRuntimePersistence.ts` | `react`, `DEFAULT_DUAL_RUNTIME`, `makeHomeActiveTop`, `setRuntimeWorld`, `swapDominantRuntime`, `DualRuntimeState`, `RuntimeWorld` | `useDualRuntimePersistence`, `UseDualRuntimePersistenceReturn`, `useDualRuntimePersistence` |
| `engine/runtime/useEnginBridge.ts` | `bridge`, `react` | `useBrandingEnginBridge`, `useCodeEnginBridge`, `useContentEnginBridge`, `useGameEnginBridge`, `useLabEnginBridge`, `useStarMakerEnginBridge`, `BrandingEnginBridgeState`, `CodeEnginBridgeState` |
| `engine/runtime/useEnginCoopSync.ts` | `EnginName`, `useSharedEnginChannel`, `RuntimeId`, `react` | `useEnginCoopSync`, `CoopEvent`, `UseEnginCoopSyncOptions`, `UseEnginCoopSyncResult`, `useEnginCoopSync` |
| `engine/runtime/useSharedEnginChannel.ts` | `EnginName`, `buildInstanceKey`, `promoteInstanceToRealtime`, `useInstanceManager`, `createLocalChannel`, `RuntimeChannel`, `RuntimeChannelEvent`, `RuntimeId` | `useSharedEnginChannel`, `SharedEnginChannelOptions`, `SharedEnginChannelResult`, `useSharedEnginChannel` |
| `engine/safety/child-safety/childSafetyDetector.ts` | `(dynamic import)` | `ChildSafetyResult`, `ChildSafetyRuleCode`, `ChildSafetySignal`, `ScanInput`, `isMinorToAdultImageBlock`, `isZeroTolerance`, `scanContent` |
| `engine/safety/child-safety/imageClassifier.ts` | `groqChat`, `toErrorMessage` | `ImageClassificationResult`, `ImageRiskLevel`, `classifyImage` |
| `engine/safety/child-safety/messageContextChecker.ts` | - | `CHILD_SAFETY_LAW_SUMMARY`, `MessageContextInput`, `MessageContextResult`, `MessageContextType`, `MessageContextVerdict`, `evaluateMessageContext` |
| `engine/safety/child-safety/ncmecReporter.ts` | `createServerClient`, `@supabase/supabase-js`, `ChildSafetyResult`, `toErrorMessage` | `NcmecIncidentInput`, `NcmecReportResult`, `reportChildSafetyIncident` |
| `engine/safety/child-safety/scanMediaUrls.ts` | `@supabase/supabase-js`, `crypto`, `ChildSafetyResult`, `scanContent`, `classifyImage` | `ScanMediaUrlsInput`, `isImageUrl`, `scanMediaUrlsForChildSafety` |
| `engine/scene/sceneState.ts` | `deleteScene`, `enqueueSyncAction`, `getScene`, `listScenes`, `saveScene`, `CachedScene`, `SceneObject`, `SceneSnapshot` | `CachedScene`, `SceneObject`, `SceneSnapshot`, `createAutoSave`, `createDefaultSnapshot`, `listPersistedScenes`, `persistScene`, `removeScene` |
| `engine/setup/checks.ts` | `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_URL` | `SetupCheck`, `SetupCheckSummary`, `getSetupChecks`, `getSetupStatus`, `summarizeSetupChecks` |
| `engine/sharedDream.ts` | `SupabaseClient`, `broadcastControlSignal`, `broadcastCursor`, `broadcastDataPacket`, `broadcastEdit`, `broadcastMediaSync`, `broadcastModeChange`, `broadcastPresenceUpdate` | `DreamBroadcastPayload`, `DreamEventHandler`, `DreamEventType`, `DreamPresenceUpdate`, `DreamSessionMode`, `DreamSessionRole`, `SharedDreamActivityEntry`, `SharedDreamMember` |
| `engine/sharedDream/useSharedDreamSession.ts` | `createClient`, `safeGetUser`, `react` | `useSharedDreamSession`, `SharedDreamActivityEntry`, `SharedDreamMember`, `UseSharedDreamSessionOptions`, `UseSharedDreamSessionResult`, `useSharedDreamSession` |
| `engine/shop/listings.ts` | - | `SHOP_LISTING_REQUIRED_FIELDS`, `SHOP_ORDERS_PRIVATE_FIELDS`, `SHOP_ORDERS_TABLE`, `SHOP_PRICE_MIN`, `SHOP_TABLE`, `SHOP_TITLE_MAX_LENGTH`, `ShopListingInput`, `ShopListingRecord` |
| `engine/slog.ts` | - | `slog`, `slogArray`, `slogEntropy`, `slogInv`, `slogMean`, `slogVariance` |
| `engine/social/crossPost.ts` | `PLATFORM_MAP`, `SocialPlatform` | `CrossPostTarget`, `DreamSharePayload`, `buildCrossPostTargets`, `buildDreamOgMeta`, `formatShareText`, `nativeShare`, `openCrossPost` |
| `engine/social/livekit.ts` | - | `LiveKitConnectionState`, `LiveKitError`, `LiveKitParticipant`, `LiveKitRoomInfo`, `LiveKitRoomManager`, `LiveKitTokenResponse`, `fetchLiveKitToken`, `fetchRoomInfo` |
| `engine/social/normalizers.ts` | - | `BlueskyPost`, `MastodonStatus`, `NormalizedPost`, `NostrEvent`, `normalizeBlueskyPost`, `normalizeMastodonPost`, `normalizeNostrEvent` |
| `engine/social/platforms.ts` | - | `PLATFORM_MAP`, `PROFILE_SHARE_PLATFORMS`, `SOCIAL_PLATFORMS`, `SocialPlatform`, `detectPlatform`, `getPlatform` |
| `engine/social/rss-feed.ts` | `FeedItemMedia`, `UnifiedFeedItem`, `rss-parser` | `DEFAULT_NITTER_INSTANCE`, `RssFeedConfig`, `RssProvider`, `devtoUserRssUrl`, `extractFirstImage`, `facebookPageRssUrl`, `githubUserAtomUrl`, `hackerNewsRssUrl` |
| `engine/social/useSocialData.ts` | `NormalizedPost`, `react`, `toErrorMessage` | `useSocialData`, `SocialDataState`, `SocialPlatformFilter`, `useSocialData` |
| `engine/user-sim/userSimAgent.ts` | `AgentAction`, `AuditFinding`, `BehaviorSignals`, `FindingSeverity`, `JourneyOutcome`, `PerceptionFrame`, `Persona`, `PersonaType` | `JourneyRunnerInput`, `PERSONAS`, `SPEC_RULES`, `SpecRuleKey`, `decideAction`, `judgeJourney`, `judgeStep`, `perceive` |
| `engine/vm/bufferManager.ts` | `BufferHandle`, `GPUBufferDescriptor`, `VMPerformanceCounters`, `VMResourceQuotas`, `GPUBufferUsageFlags`, `VMErrorCode` | `BufferManager` |
| `engine/vm/bus-events.ts` | - | `VMBusEventMap`, `VMBusEventName`, `VMComputeCompletePayload`, `VMErrorPayload`, `VMStatsPayload`, `VMStatsUpdatePayload`, `VMWorkloadSubmittedPayload` |
| `engine/vm/dual-runtime.ts` | `VMBusEventMap`, `VMBusEventName`, `VMComputeCompletePayload`, `VMErrorPayload`, `VMStatsPayload`, `VMStatsUpdatePayload`, `VMWorkloadSubmittedPayload`, `InterVMChannel` | `DualRuntime`, `VMId`, `VMRuntimeStats`, `VMWorkloadSpec`, `dualRuntime` |
| `engine/vm/dualVMCoordinator.ts` | `bridge`, `VMRegion`, `VMWorkload` | `DualVMConfig`, `DualVMCoordinator`, `VMRegion`, `VMWorkload`, `destroyDualVMCoordinator`, `getDualVMCoordinator`, `initializeDualVMCoordinator` |
| `engine/vm/index.ts` | `detectWasmFeatures`, `resetWasmFeatureCache`, `WasmFeatureSet`, `DEFAULT_RESOURCE_QUOTA`, `QuotaExceededError`, `enforceQuota`, `withinQuota`, `QuotaViolation` | `AllowedSyscall`, `BindGroupDescriptor`, `BindGroupHandle`, `BufferHandle`, `BufferManager`, `CommandBufferState`, `ComputePipelineDescriptor`, `DEFAULT_RESOURCE_QUOTA` |
| `engine/vm/inter-vm-messaging.ts` | - | `InterVMChannel`, `VMEvent` |
| `engine/vm/pipelineCache.ts` | - | `PipelineCache` |
| `engine/vm/resource-quota.ts` | - | `DEFAULT_RESOURCE_QUOTA`, `QuotaExceededError`, `QuotaViolation`, `ResourceQuota`, `ResourceUsage`, `enforceQuota`, `withinQuota` |
| `engine/vm/security.ts` | - | `AllowedSyscall`, `GPUTimeSlicer`, `MemoryBoundsError`, `SYSCALL_ALLOWLIST`, `TimeBudget`, `checkBounds`, `isSyscallAllowed` |
| `engine/vm/snapshot.ts` | `BindGroupHandle`, `BufferHandle`, `GPUBufferSnapshot`, `HandleTableSnapshot`, `PipelineHandle`, `PipelineSnapshot`, `VMSnapshot`, `WasmMemorySnapshot` | `SnapshotManager` |
| `engine/vm/types.ts` | - | `BindGroupDescriptor`, `BindGroupHandle`, `BufferHandle`, `CommandBufferState`, `ComputePipelineDescriptor`, `DEFAULT_VM_CONFIG`, `DEFAULT_VM_QUOTAS`, `GPUBufferDescriptor` |
| `engine/vm/wasm-features.ts` | - | `WasmFeatureSet`, `detectWasmFeatures`, `resetWasmFeatureCache` |
| `engine/vm/wasmGpuVM.ts` | `BufferManager`, `PipelineCache`, `BindGroupHandle`, `BufferHandle`, `ComputePipelineDescriptor`, `PipelineHandle`, `VMConfig`, `VMPerformanceCounters` | `WasmGpuVM` |
| `engine/web3/client.ts` | `DEFAULT_CHAIN_ID`, `SUPPORTED_CHAINS`, `WalletAccount`, `WalletConnectionState`, `WalletProvider`, `Web3Error`, `ChainConfig`, `toErrorMessage` | `Web3Client`, `web3Client` |
| `engine/web3/engagement.ts` | `web3Client`, `DEFAULT_CHAIN_ID`, `EngagementPayload`, `EngagementStats`, `SUPPORTED_CHAINS`, `Web3Error` | `applyOptimisticEngagement`, `clearOptimisticDelta`, `getEngagementStats`, `getOptimisticDelta`, `trackEngagement` |
| `engine/web3/index.ts` | `DEFAULT_CHAIN_ID`, `SUPPORTED_CHAINS`, `Web3Error`, `ChainConfig`, `EngagementPayload`, `EngagementStats`, `IpfsContent`, `IpfsUploadResult` | `ChainConfig`, `DEFAULT_CHAIN_ID`, `EngagementPayload`, `EngagementStats`, `IpfsContent`, `IpfsUploadResult`, `SUPPORTED_CHAINS`, `WalletAccount` |
| `engine/web3/ipfs.ts` | `IpfsContent`, `IpfsUploadResult`, `Web3Error` | `getFromIpfs`, `isIpfsCid`, `pinCid`, `resolveIpfsUrl`, `uploadFileToIpfs`, `uploadToIpfs` |
| `engine/web3/types.ts` | - | `ChainConfig`, `DEFAULT_CHAIN_ID`, `EngagementPayload`, `EngagementStats`, `IpfsContent`, `IpfsUploadResult`, `SUPPORTED_CHAINS`, `WalletAccount` |
| `engine/widgets/CrossWidgetPosting.ts` | `widgetEventBus`, `WidgetMsg`, `WidgetLinkGraph`, `toErrorMessage` | `CrossWidgetPostingEngine`, `MSG_TYPE_FOCUS_REQUEST`, `MSG_TYPE_POST_REQUEST`, `MSG_TYPE_POST_RESULT`, `MSG_TYPE_SEND_MEDIA`, `MSG_TYPE_SEND_TEXT`, `PostRequestPayload`, `PostResultPayload` |
| `engine/widgets/feed-resolver.ts` | `createServerClient`, `FeedScope`, `HostKind`, `HostResolvedStatus`, `FeedHostConfig`, `FeedItemSummary`, `HostResolved`, `toErrorMessage` | `getFeedChannelKey`, `resolveFeedHost`, `resolvePublicAppPosts`, `subscribeAppPostsRealtime`, `subscribeFeedRealtime` |
| `engine/widgets/parse.ts` | `DreamenginWidgetType`, `EmbedWidgetConfig`, `SocialEmbedWidgetConfig`, `SocialFeedWidgetConfig`, `SocialProfileWidgetConfig`, `SocialProvider`, `TextWidgetConfig`, `TypedWidget` | `parseEmbedConfig`, `parseSocialEmbedConfig`, `parseSocialFeedConfig`, `parseSocialProfileConfig`, `parseTextConfig`, `parseTypedWidget`, `parseYouTubeConfig` |
| `engine/widgets/parseConfig.ts` | `SocialEmbedWidgetConfig`, `SocialFeedWidgetConfig`, `SocialProfileWidgetConfig`, `SocialProvider`, `YouTubeWidgetConfig` | `inferProviderFromUrl`, `parseSocialEmbedWidgetConfig`, `parseSocialFeedWidgetConfig`, `parseSocialProfileWidgetConfig`, `parseYouTubeWidgetConfig` |
| `engine/widgets/useWidget.ts` | `react`, `(default)` | `useWidget`, `chainWidgets`, `emitWidget`, `getSubWidgets`, `getWidgetMemory`, `setWidgetMemory`, `spawnSubWidget`, `useWidget` |
| `engine/widgets/WidgetBus.ts` | - | `(default)` |
| `engine/widgets/WidgetEngine.tsx` | `react` | `WidgetEngine.tsx`, `WidgetLibrary`, `WidgetSpec` |
| `engine/widgets/WidgetEventBus.ts` | - | `WidgetEventBus`, `WidgetMsg`, `WidgetMsgCallback`, `widgetEventBus` |
| `engine/widgets/WidgetLinkGraph.ts` | - | `CapabilityMask`, `WidgetLink`, `WidgetLinkGraph`, `WidgetLinkNode` |
| `engine/widgets/widgetRegistry.ts` | - | `ConnectorRequirement`, `ConnectorState`, `WIDGET_REGISTRY`, `WidgetPermissions`, `WidgetTypeDef`, `getWidgetTypeDef`, `getWidgetTypesForConnector`, `resolveConnectorState` |
| `engins/autoopen/dream.AutoOpenGameEngin.tsx` | `createInstance`, `useSharedEnginChannel`, `next/navigation`, `react` | `dream.AutoOpenGameEngin.tsx`, `(default)` |
| `engins/brandingengin/identity/logos.ts` | - | `LOGO_PATHS`, `LogoPath`, `getRandomLogo`, `resetLogoCache` |
| `engins/codeengin-ui/core/parser.ts` | `"]([^` | `ParseError`, `ParseResult`, `ParsedSymbol`, `parseCode` |
| `engins/codeengin-ui/modules/ai-co-pilot/dream.panel.AgentPanel.tsx` | `react`, `useAgentSession` | `dream.panel.AgentPanel.tsx`, `AgentPanel` |
| `engins/codeengin-ui/modules/ai-co-pilot/index.ts` | `AgentPanel`, `useAgentSession`, `AgentMessage`, `UseAgentSessionReturn` | `AgentMessage`, `AgentPanel`, `UseAgentSessionReturn`, `useAgentSession` |
| `engins/codeengin-ui/modules/ai-co-pilot/useAgentSession.ts` | `react` | `useAgentSession`, `AgentMessage`, `UseAgentSessionReturn`, `useAgentSession` |
| `engins/codeengin-ui/orchestrator/dream.index.tsx` | `ArtifactSlot`, `AgentPanel` | `dream.index.tsx`, `(default)` |
| `engins/codeengin/ai/drEamsCodeAssist.ts` | - | `CODE_VOCABULARY`, `CellLanguage`, `CodeContext`, `NLCommand`, `ParsedCodeResponse`, `QueryIntent`, `VOCAB_TERMS`, `VocabEntry` |
| `engins/codeengin/auth.ts` | `isOwner`, `safeGetUser`, `createServerClient` | `CodeEnginAuthenticatedUser`, `assertCodeEnginAccess` |
| `engins/CodeEngin/core/parser.ts` | `"]([^` | `ParseError`, `ParseResult`, `ParsedSymbol`, `parseCode` |
| `engins/codeengin/diagnostics.ts` | `path`, `parseCode`, `listEditableFiles`, `readProjectFile`, `CodeEnginDiagnostic` | `diagnoseFile`, `diagnoseWorkspace` |
| `engins/codeengin/diff/aiEditEngine.ts` | - | `AiSuggestion`, `BuildPreviewOptions`, `CODEENGIN_PRODUCTION_MODE`, `CONFIRMATION_REQUIRED`, `EditDiffLine`, `EditDiffLineType`, `EditPreview`, `EditScope` |
| `engins/codeengin/diff/diffUtils.ts` | - | `DEMO_DIFF`, `DiffFile`, `DiffHunk`, `DiffLine`, `DiffLineType`, `FullFileLine`, `HunkScrollMarker`, `buildFullFileLines` |
| `engins/codeengin/git.ts` | `listEditableFiles` | `getGitDiff`, `getGitLog`, `getGitStatus` |
| `engins/CodeEngin/modules/ai-co-pilot/dream.panel.AgentPanel.tsx` | `react`, `useAgentSession` | `dream.panel.AgentPanel.tsx`, `AgentPanel` |
| `engins/CodeEngin/modules/ai-co-pilot/index.ts` | `AgentPanel`, `useAgentSession`, `AgentMessage`, `UseAgentSessionReturn` | `AgentMessage`, `AgentPanel`, `UseAgentSessionReturn`, `useAgentSession` |
| `engins/CodeEngin/modules/ai-co-pilot/useAgentSession.ts` | `react` | `useAgentSession`, `AgentMessage`, `UseAgentSessionReturn`, `useAgentSession` |
| `engins/CodeEngin/orchestrator/dream.index.tsx` | `ArtifactSlot`, `AgentPanel` | `dream.index.tsx`, `(default)` |
| `engins/codeengin/pathSafety.ts` | `path` | `CODEENGIN_ALLOWED_EXTENSIONS`, `CODEENGIN_ALLOWED_FILENAMES`, `CODEENGIN_BLOCKED_SEGMENTS`, `assertSafeWorkspacePath`, `assertValidWorkspaceId`, `getCodeEnginWorkspacesRoot`, `getWorkspaceRoot`, `isAllowedCodeEnginFileName` |
| `engins/codeengin/projectGraph.ts` | `path`, `parseCode`, `readProjectFile`, `listEditableFiles`, `CodeEnginGraphEdge`, `CodeEnginGraphNode`, `CodeEnginProjectGraph`, `CodeEnginSymbol` | `buildProjectGraph`, `extractImports` |
| `engins/codeengin/runner.ts` | `listEditableFiles`, `readProjectFile`, `CODEENGIN_COMMANDS`, `listRunnerCommands`, `CodeEnginCommandResult` | `listRunnerCommands`, `runCiCommand`, `runCodeEnginCommand` |
| `engins/codeengin/runnerCommands.ts` | - | `CODEENGIN_COMMANDS`, `listRunnerCommands` |
| `engins/codeengin/search.ts` | `listEditableFiles`, `readProjectFile`, `CodeEnginSearchHit` | `searchWorkspace` |
| `engins/codeengin/types.ts` | - | `CodeEnginCommandResult`, `CodeEnginDiagnostic`, `CodeEnginFileNode`, `CodeEnginFileRecord`, `CodeEnginGraphEdge`, `CodeEnginGraphNode`, `CodeEnginProjectGraph`, `CodeEnginSearchHit` |
| `engins/codeengin/workspaceStore.ts` | `crypto`, `fs`, `fs/promises`, `path`, `assertSafeWorkspacePath`, `assertValidWorkspaceId`, `CODEENGIN_BLOCKED_SEGMENTS`, `getCodeEnginWorkspacesRoot` | `(default)`, `createCodeEnginWorkspace`, `createProjectFile`, `deleteProjectFile`, `getWorkspaceMeta`, `getWorkspaceOverview`, `listEditableFiles`, `moveProjectFile` |
| `engins/contentengin/assets/assetOptimizer.ts` | `storeOriginal` | `AssetUploadContext`, `OptimisationQuality`, `OptimisationResult`, `OptimiseOptions`, `optimiseAsset`, `registryTagsForContext` |
| `engins/contentengin/assets/indexedDBStore.ts` | - | `OriginalRecord`, `SentinelEntry`, `StorageStats`, `checkSentinels`, `cleanupExpiredOriginals`, `deleteOriginal`, `getOriginal`, `getStorageStats` |
| `engins/contentengin/assets/localAssetLibrary.ts` | `getOriginal`, `storeOriginal`, `OriginalRecord` | `LocalContentAssetRecord`, `getLocalContentAssetGlb`, `getLocalContentAssetObjSource`, `listLocalContentAssets`, `saveLocalContentAsset` |
| `engins/contentengin/assetTypes.ts` | - | `AnimationClipDef`, `BoneDef`, `CONTENTENGIN_VERSION`, `CollisionBlock`, `CollisionShape`, `CollisionShapeKind`, `ContentAsset`, `ContentAssetCategory` |
| `engins/contentengin/AssetViewport.tsx` | `react`, `computeBounds`, `CameraState`, `RigBendPoint`, `Mesh`, `Vec3`, `composeModelMatrix`, `createMeshBuffers` | `AssetViewport.tsx`, `(default)` |
| `engins/contentengin/builders/geometryBuilder.ts` | `PartNode`, `Vec3`, `flattenParts` | `MeshGeometry`, `buildGeometry` |
| `engins/contentengin/builders/meshBuilder.ts` | `createBoxSDF`, `createCapsuleSDF`, `createSphereSDF`, `createTorusSDF`, `meshToSnapshot`, `runIsoSurfaceJob`, `DualContouringSettings`, `IsoSurfaceJob` | `buildImplicitContentMesh`, `buildRegionFitContentMesh`, `computeMeshMetrics`, `sdfFromAlgebraicFit` |
| `engins/contentengin/builders/modifiers.ts` | - | `ModifierKind`, `ModifierSpec`, `applyModifierMetadata` |
| `engins/contentengin/builders/primitiveBuilder.ts` | `PartNode`, `PrimitiveKind`, `Vec3`, `identityTransform`, `vec3` | `MeshStats`, `createPart`, `flattenParts`, `primitiveStats`, `resetPartIds` |
| `engins/contentengin/builders/textureBuilder.ts` | `MaterialDef` | `assignProceduralTextureNames` |
| `engins/contentengin/builders/uvGenerator.ts` | `PartNode` | `assignProceduralUv` |
| `engins/contentengin/cli.ts` | `fs/promises`, `path`, `buildAsset`, `writeAssetBundle`, `zipDirectory`, `analyzeImageBytes`, `runRiggingPipeline`, `validateAsset` | `cli.ts` |
| `engins/contentengin/composite/compositor.ts` | - | `BlendMode`, `CompGraph`, `CompNode`, `NodeParam`, `NodeType`, `addNode`, `connectNodes`, `createGraph` |
| `engins/contentengin/composite/fxSimulation.ts` | - | `FX_PRESETS`, `FxCategory`, `FxParam`, `FxPreset`, `FxSimulation`, `allCategories`, `createSimulation`, `getPreset` |
| `engins/contentengin/composite/matchmover.ts` | - | `CameraFrame`, `CameraTrack`, `Homography`, `MotionEstimate`, `TrackPoint`, `TrackSample`, `addSample`, `addTrackPoint` |
| `engins/contentengin/composite/motionCapture.ts` | - | `ClipSummary`, `FramePose`, `Joint`, `JointTransform`, `MocapClip`, `clipSummary`, `exportBVH`, `findJoint` |
| `engins/contentengin/composite/rotoscope.ts` | - | `BezierPoint`, `InterpolatedShape`, `RotoLayer`, `RotoProject`, `RotoShape`, `addLayer`, `createProject`, `exportFrameSVG` |
| `engins/contentengin/content/generativeFill.ts` | - | `DominantColor`, `GenerativeFillRequest`, `GenerativeFillResult`, `ImageAnalysis`, `analyzeImageColors`, `createMaskDataUrl`, `fileToBase64`, `requestGenerativeFill` |
| `engins/contentengin/content/publishIntent.ts` | - | `PublishIntentInput`, `PublishToDreamRParams`, `formatPublishError`, `publishToDreamR`, `resolvePublishIntent` |
| `engins/contentengin/content/seoScorer.ts` | - | `SeoReport`, `SeoScoreDimension`, `SeoScoreInput`, `SeoScoreResult`, `generateReport`, `scoreContent` |
| `engins/contentengin/content/transcriptEditor.ts` | - | `SearchResult`, `TimelineCut`, `TranscriptSegment`, `TranscriptWord`, `annotateSearchMatches`, `applyEditsToSegments`, `computeCuts`, `exportSRT` |
| `engins/contentengin/content/voiceClone.ts` | - | `ListVoiceProfilesResult`, `TTSRequest`, `TTSResult`, `VoiceCloneRequest`, `VoiceCloneResult`, `VoiceProfile`, `audioFileToBase64`, `cloneVoice` |
| `engins/contentengin/grammars/animalGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildAnimalParts` |
| `engins/contentengin/grammars/bicycleGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildBicycleParts` |
| `engins/contentengin/grammars/bridgeGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildBridgeParts` |
| `engins/contentengin/grammars/buildingGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildBuildingParts` |
| `engins/contentengin/grammars/creatureGrammar.ts` | `buildAnimalParts` | `buildCreatureParts` |
| `engins/contentengin/grammars/humanoidGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root`, `symmetrical` | `buildHumanoidParts` |
| `engins/contentengin/grammars/propGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildPropParts` |
| `engins/contentengin/grammars/roadGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildRoadParts` |
| `engins/contentengin/grammars/shared.ts` | `PartNode`, `vec3`, `createPart` | `p`, `root`, `symmetrical` |
| `engins/contentengin/grammars/terrainGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildTerrainParts` |
| `engins/contentengin/grammars/treeGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildTreeParts` |
| `engins/contentengin/grammars/vehicleGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildVehicleParts` |
| `engins/contentengin/grammars/waterGrammar.ts` | `ContentRecipe`, `PartNode`, `vec3`, `p`, `root` | `buildWaterParts` |
| `engins/contentengin/ImplicitAssetWorkspace.tsx` | `(default)`, `exportOBJ`, `RenderStage`, `createInlineRenderIntent`, `useImplicitAssetWorkspace`, `react` | `ImplicitAssetWorkspace.tsx`, `(default)` |
| `engins/contentengin/materials/materialTypes.ts` | `MaterialDef` | `MaterialDef`, `MaterialFamily` |
| `engins/contentengin/materials/paletteExtractor.ts` | - | `extractPalette`, `rgbaToHex` |
| `engins/contentengin/materials/proceduralMaterials.ts` | `MaterialDef` | `defaultMaterials`, `material` |
| `engins/contentengin/media/h265-encoder.ts` | - | `BackendKind`, `CaptureResult`, `EncodedPacket`, `EncoderCapabilities`, `EncoderOptions`, `GameCapture`, `H265Encoder`, `H265Preset` |
| `engins/contentengin/media/ledger.ts` | `toErrorMessage` | `LedgerBinaryHeader`, `LedgerDbPayload`, `LedgerDensityProfile`, `LedgerUploadResult`, `analyzeLedgerDensity`, `buildLedgerMediaUrl`, `compressData`, `decodeFromLedger` |
| `engins/contentengin/media/postMedia.ts` | - | `PostMediaShape`, `getPostMediaUrls`, `getPrimaryPostMediaUrl` |
| `engins/contentengin/performancePlan.ts` | `ContentEnginRuntimeProfile` | `ContentEnginPerformancePlan`, `createContentEnginPerformancePlan` |
| `engins/contentengin/photo/colorCluster.ts` | `extractPalette` | `extractPalette` |
| `engins/contentengin/photo/edgeDetector.ts` | - | `buildEdgeMapFromRgba` |
| `engins/contentengin/photo/imageAnalyzer.ts` | `SourceImageAnalysis`, `ShapeRegion`, `rgbaToHex`, `decodePng` | `analyzeImageBytes` |
| `engins/contentengin/photo/photoToRecipe.ts` | `ContentRecipe`, `SourceImageAnalysis`, `detectSemanticAlgebraicRegions` | `photoToRecipe` |
| `engins/contentengin/photo/pngDecoder.ts` | `zlib` | `DecodedPng`, `decodePng` |
| `engins/contentengin/photo/regionDetector.ts` | `ShapeRegion`, `Vec2` | `AlgebraicFitKind`, `AlgebraicRegionFit`, `SemanticPartLabel`, `SemanticShapeRegion`, `detectSemanticAlgebraicRegions`, `fitAlgebraicRegion`, `relabelRegion` |
| `engins/contentengin/pipeline/build.ts` | `ContentAsset`, `ContentAssetCategory`, `CONTENTENGIN_VERSION`, `resetPartIds`, `assignProceduralUv`, `assignProceduralTextureNames`, `defaultMaterials`, `SHADERS` | `buildAsset` |
| `engins/contentengin/pipeline/bundle.ts` | `fs/promises`, `path`, `ContentAsset`, `createGlbBuffer`, `validateAsset`, `makeManifest` | `writeAssetBundle`, `zipDirectory` |
| `engins/contentengin/pipeline/exportGlb.ts` | `ContentAsset`, `MaterialDef`, `buildGeometry` | `GlbInspection`, `createGlbBuffer`, `expectedMaterialIdsForAsset`, `inspectGlb` |
| `engins/contentengin/pipeline/generateCollision.ts` | `CollisionBlock`, `PartNode`, `flattenParts` | `generateCollision` |
| `engins/contentengin/pipeline/generateLods.ts` | `ExportProfile`, `LodDef` | `generateLods` |
| `engins/contentengin/pipeline/paths.ts` | `path` | `safeSegment`, `safeUnder` |
| `engins/contentengin/pipeline/validate.ts` | `ContentAsset`, `ExportProfile`, `ValidationReport`, `computeMeshMetrics`, `expectedMaterialIdsForAsset`, `inspectGlb` | `validateAsset` |
| `engins/contentengin/pipeline/writeManifest.ts` | `ContentAsset`, `ContentAssetObject` | `makeManifest`, `wrapAsset` |
| `engins/contentengin/recipes/recipeResolver.ts` | `ContentRecipe`, `ExportProfile`, `SUPPORTED_ASSET_TYPES` | `normalizeAssetType`, `resolveRecipe` |
| `engins/contentengin/recipes/recipeTypes.ts` | `ContentRecipe`, `ExportProfile` | `ContentRecipe`, `ExportProfile`, `SUPPORTED_ASSET_TYPES`, `SupportedAssetType` |
| `engins/contentengin/recipes/seededRandom.ts` | - | `pick`, `seededRandom` |
| `engins/contentengin/rigging/fitArmature.ts` | `BoneDef`, `SkeletonDef`, `vec3`, `RigStandard` | `createSkeleton` |
| `engins/contentengin/rigging/index.ts` | `child_process`, `fs/promises`, `path`, `util`, `createSkeleton`, `RiggingRequest`, `RigStandard`, `RiggingRequest` | `RigStandard`, `RiggingRequest`, `createSkeleton`, `runRiggingPipeline` |
| `engins/contentengin/rigging/landmarks.ts` | `PartNode`, `Vec3`, `vec3` | `estimateLandmarks` |
| `engins/contentengin/rigging/rigTypes.ts` | - | `RigStandard`, `RiggingRequest` |
| `engins/contentengin/rigging/rigValidator.ts` | `SkeletonDef` | `validateSkeleton` |
| `engins/contentengin/runtimeProfile.ts` | `ExportProfile`, `enabledUpgradeIds`, `ContentEnginUpgradeId` | `ContentEnginRuntimeProfile`, `ContentEnginRuntimeTier`, `createContentEnginRuntimeProfile` |
| `engins/contentengin/shaders/shaderRegistry.ts` | `ShaderDef` | `SHADERS`, `getShader` |
| `engins/contentengin/shaders/shaderTypes.ts` | `ShaderDef` | `ShaderDef` |
| `engins/contentengin/upgradeMatrix.ts` | `ExportProfile` | `CONTENTENGIN_2026_UPGRADES`, `ContentEnginUpgrade`, `ContentEnginUpgradeId`, `enabledUpgradeIds` |
| `engins/contentengin/useImplicitAssetWorkspace.ts` | `react`, `readOfflineCache`, `writeOfflineCache`, `useContentEnginRuntime`, `analyzeImageMask`, `CONTENTENGIN_GLB_UPLOAD_LIMIT_BYTES`, `createImplicitAssetWorkspaceObject`, `DEFAULT_BRUSH_STATE` | `useImplicitAssetWorkspace`, `WorkspaceIntentLog`, `useImplicitAssetWorkspace` |
| `engins/dream.ForgeEngin.tsx` | `(default)`, `(default)`, `(default)`, `ArtifactSlot`, `clearWorkflowRun`, `deleteCustomWorkflow`, `generateSuggestions`, `getActiveWorkflowRun` | `dream.ForgeEngin.tsx`, `(default)` |
| `engins/dream.QuantumCircuitCanvas.tsx` | `react` | `dream.QuantumCircuitCanvas.tsx`, `(default)`, `GateOp`, `QuantumCircuitCanvasProps`, `QuantumMeasurementResult` |
| `engins/engin.BrandingEngin.tsx` | `(default)`, `useSharedDream`, `useDaydreamPersistence`, `useDaydreamState`, `EngineBase`, `UpgradedEngine`, `createEventBus`, `upgradeEngine` | `engin.BrandingEngin.tsx`, `(default)` |
| `engins/engin.CodeEngin.tsx` | `(default)`, `useDaydreamPersistence`, `useDaydreamState`, `ArtifactSlot`, `useCodeEnginRuntime`, `useEnginWorkflow`, `recordForgeTransfer`, `useForgeActivity` | `engin.CodeEngin.tsx`, `(default)`, `RuntimeIntent`, `labDatasetId` |
| `engins/engin.ContentEngin.tsx` | `(default)` | `engin.ContentEngin.tsx`, `(default)` |
| `engins/engin.GameEngin.tsx` | `(default)`, `(default)`, `(default)`, `(default)`, `(default)`, `(default)`, `(default)`, `(default)` | `engin.GameEngin.tsx`, `(default)` |
| `engins/engin.LabEngin.tsx` | `(default)`, `ForgeDreamCanvas`, `useDaydreamPersistence`, `EngineBase`, `UpgradedEngine`, `createEventBus`, `upgradeEngine`, `ArtifactSlot` | `engin.LabEngin.tsx`, `(default)` |
| `engins/engin.StarMakerEngin.tsx` | `(default)`, `(default)`, `(default)`, `(default)`, `(default)`, `AudioVisualizer3D`, `useSharedDream`, `buildPeakMap` | `engin.StarMakerEngin.tsx`, `(default)` |
| `engins/forgeengin/componentInventory.ts` | - | `ALL_CATEGORIES`, `AtomicComponent`, `COMPONENT_INVENTORY`, `ComponentCategory`, `getByCategory`, `searchComponents` |
| `engins/forgeengin/enginpipe/artifact/manifest.ts` | `zod` | `ArtifactPermission`, `ArtifactPermissionSchema`, `EnginArtifactManifest`, `EnginArtifactManifestSchema`, `createManifest`, `parseManifest`, `safeParseManifest` |
| `engins/forgeengin/enginpipe/index.ts` | `ArtifactPermissionSchema`, `EnginArtifactManifestSchema`, `createManifest`, `parseManifest`, `safeParseManifest`, `ArtifactPermission`, `EnginArtifactManifest`, `createTelemetryClient` | `ArtifactPermission`, `ArtifactPermissionSchema`, `ArtifactSlot`, `ArtifactSlotContextValue`, `ArtifactSlotProps`, `CapabilityInput`, `CapabilityNavigator`, `CapabilityScreen` |
| `engins/forgeengin/enginpipe/quality/tiers.ts` | - | `CapabilityInput`, `CapabilityNavigator`, `CapabilityScreen`, `DEFAULT_TIER_CONFIG`, `QualityTier`, `QualityTierConfig`, `detectCapabilityTier`, `getTierConfig` |
| `engins/forgeengin/enginpipe/shell/ArtifactSlot.tsx` | `react`, `createEventBus`, `EventBus` | `ArtifactSlot.tsx`, `useArtifactSlot`, `useOptionalArtifactSlot`, `ArtifactSlot`, `ArtifactSlotContextValue`, `ArtifactSlotProps`, `useArtifactSlot`, `useOptionalArtifactSlot` |
| `engins/forgeengin/enginpipe/telemetry/client.ts` | `parseTelemetryEvent`, `TelemetryEvent` | `TelemetryClient`, `TelemetryClientOptions`, `TelemetryRecordResult`, `TelemetrySupabaseClient`, `createTelemetryClient` |
| `engins/forgeengin/enginpipe/telemetry/events.ts` | `zod` | `TelemetryEvent`, `TelemetryEventSchema`, `TelemetryEventType`, `TelemetryEventTypeSchema`, `parseTelemetryEvent` |
| `engins/forgeengin/forge-ngn/assembly.ts` | `PieceManifest`, `getPiece` | `AssemblyValidationError`, `Connection`, `EngineAssembly`, `MAX_PIECES`, `MIN_PIECES`, `PlacedPiece`, `addConnection`, `addPiece` |
| `engins/forgeengin/forge-ngn/index.ts` | `*`, `*` | `index.ts` |
| `engins/forgeengin/forge-ngn/piece-registry.ts` | - | `PIECE_CATEGORIES`, `PIECE_REGISTRY`, `PieceCategory`, `PieceManifest`, `Port`, `PortType`, `getPiece`, `getPiecesByCategory` |
| `engins/forgeengin/forge/engineForge.ts` | `AtomicComponent`, `createEventBus`, `EventBus` | `AssemblyEvents`, `AssemblySandbox`, `AtomicPiece`, `EngineAssembly`, `Port`, `ValidationResult`, `Wire`, `atomicPieceFromComponent` |
| `engins/forgeengin/forge/forgeBuild.ts` | `uuid` | `ForgeArtifact`, `ForgeArtifactType`, `ForgeBuildRecord`, `ForgeBuildState`, `ForgeLogEvent`, `canBuildToday`, `clearForgeBuilds`, `isForgeLogEvent` |
| `engins/forgeengin/forge/forgeIntelligence.ts` | `CREATIVE_ENGINES`, `ENGIN_REGISTRY`, `FORGE_HISTORY_KEY`, `FORGE_WORKFLOWS`, `EnginEntry`, `ForgeWorkflow` | `ForgeHistoryEntry`, `ForgeSuggestion`, `ForgeTransferEntry`, `WorkflowRunState`, `WorkflowStepStatus`, `appendForgeHistory`, `clearCustomWorkflows`, `clearForgeHistory` |
| `engins/forgeengin/forge/forgeMomentum.ts` | `CREATIVE_ENGINES`, `FORGE_HISTORY_KEY` | `MomentumDimension`, `MomentumLevel`, `MomentumSnapshot`, `computeDepth`, `computeDiversity`, `computeMomentum`, `computeStreak`, `computeVelocity` |
| `engins/forgeengin/forge/forgeNexus.ts` | `CREATIVE_ENGINES`, `ENGIN_REGISTRY`, `FORGE_HISTORY_KEY` | `AffinityCluster`, `NexusEdge`, `NexusNode`, `NexusSnapshot`, `buildTransitionMap`, `computeEdges`, `computeNexus`, `computeNodes` |
| `engins/forgeengin/forge/forgeRegistry.ts` | - | `CREATIVE_ENGINES`, `ENGIN_REGISTRY`, `EnginEntry`, `FORGE_HISTORY_KEY`, `FORGE_WORKFLOWS`, `ForgeActivityPulse`, `ForgeWorkflow`, `INFORMATION_DOMAINS` |
| `engins/forgeengin/forge/forgeRituals.ts` | `CREATIVE_ENGINES`, `ENGIN_REGISTRY`, `FORGE_HISTORY_KEY` | `ForgeRitual`, `RitualSnapshot`, `RitualType`, `computeRituals`, `detectAffinityPatterns`, `detectSequencePatterns`, `detectSessionPatterns`, `detectTimePatterns` |
| `engins/forgeengin/forge/useForgeActivity.ts` | `react`, `recordForgeActivity` | `useForgeActivity`, `UseForgeActivityOptions`, `UseForgeActivityReturn`, `useForgeActivity` |
| `engins/forgeengin/forge/useForgeBuild.ts` | `ForgeArtifact`, `ForgeArtifactType`, `ForgeBuildRecord`, `ForgeLogEvent`, `canBuildToday`, `isForgeLogEvent`, `recordBuildToday`, `saveForgeBuild` | `useForgeBuild`, `ForgeBuildState`, `UseForgeBuildReturn`, `useForgeBuild` |
| `engins/gameengin/accessibility-ai.ts` | - | `CaptionLine`, `CaptionerConfig`, `ColorVisionAdapter`, `ColorVisionType`, `MotionMetrics`, `MotionPolicy`, `MotionReductionAI`, `MotionReductionConfig` |
| `engins/gameengin/ai-director.ts` | `@tensorflow/tfjs`, `@tensorflow/tfjs-backend-webgpu` | `AIDirector`, `DirectorState`, `PlayerSignals` |
| `engins/gameengin/ai-npcs.ts` | - | `BrainConfig`, `DialogueLine`, `EmergentDialogue`, `LLMInvoker`, `LLMNPCBrain`, `NPCMemory`, `NPCPersonality`, `NPCPersonalityStore` |
| `engins/gameengin/assets/BundleCache.ts` | `assertValidBundleManifest`, `bundleWeightBytes`, `GameEnginBundleManifest` | `GameEnginBundleCacheDecision`, `GameEnginBundleCacheOptions`, `planBundleCache` |
| `engins/gameengin/assets/BundleManifest.ts` | `RendererBackendId` | `GameEnginAssetEntry`, `GameEnginAssetKind`, `GameEnginBundleManifest`, `assertValidBundleManifest`, `bundleWeightBytes` |
| `engins/gameengin/backendNegotiator.ts` | `RuntimeBackendDiagnostics`, `RendererBackendId`, `CartridgeManifestEntry`, `decideRuntimeQuality` | `negotiateRendererBackend`, `serverBootstrapDiagnostics` |
| `engins/gameengin/brain-reader.ts` | `node:crypto`, `node:fs`, `node:path` | `ActiveProjectSlot`, `ActiveProjects`, `AgentName`, `AssetRegistryEntry`, `AssignmentLogEntry`, `BRAIN_ROOT`, `BuildHistoryEntry`, `CRASH_REPORT_MAX_BYTES` |
| `engins/gameengin/cartridge-manifest.ts` | `zod` | `CARTRIDGE_EXT`, `CARTRIDGE_MAGIC`, `CARTRIDGE_MIME`, `CartridgeManifest`, `CartridgeManifestSchema`, `PermissionSchema`, `QualityTierSchema`, `RenderModeSchema` |
| `engins/gameengin/cartridge.ts` | - | `AchievementDefinition`, `AchievementState`, `CartridgeAchievementsAPI`, `CartridgeAssetsAPI`, `CartridgeAudioAPI`, `CartridgeBackendRequirements`, `CartridgeCapability`, `CartridgeHapticsAPI` |
| `engins/gameengin/cartridgeLoader.ts` | `loadDreamrCartridgeFromResponse`, `parseDreamrArchive`, `DreamrCartridgeArchive`, `DreamrFileEntry` | `DreamrCartridgeArchive`, `DreamrFileEntry`, `loadDreamrCartridgeFromResponse`, `parseDreamrArchive` |
| `engins/gameengin/cartridges/achievementEngine.ts` | `AchievementDefinition`, `AchievementState`, `CartridgeAchievementsAPI` | `AchievementUnlockListener`, `createAchievementsAPI`, `getUnlockedCount`, `purgeCartridgeAchievements` |
| `engins/gameengin/cartridges/apiStubs.ts` | `CartridgeAchievementsAPI`, `CartridgeAssetsAPI`, `CartridgeAudioAPI`, `CartridgeHapticsAPI`, `CartridgeNetworkAPI`, `CartridgeSaveAPI` | `stubAchievementsAPI`, `stubAssetsAPI`, `stubAudioAPI`, `stubHapticsAPI`, `stubNetworkAPI`, `stubSaveAPI` |
| `engins/gameengin/cartridges/index.ts` | `CARTRIDGE_MANIFEST`, `getCartridgeCategories`, `getCartridgeManifest`, `CartridgeManifestEntry`, `CartridgeRenderMode`, `CARTRIDGE_LOADERS`, `getCartridgeIds`, `loadCartridge` | `CARTRIDGE_LOADERS`, `CARTRIDGE_MANIFEST`, `CartridgeLoader`, `CartridgeManifestEntry`, `CartridgeRenderMode`, `assertCartridgeLoadersReady`, `getCartridgeCategories`, `getCartridgeIds` |
| `engins/gameengin/cartridges/loaders.ts` | `GameCartridge`, `CartridgeManifestEntry`, `CARTRIDGE_MANIFEST`, `getCartridgeManifest`, `defineReactCartridgeLoader`, `toErrorMessage` | `CARTRIDGE_LOADERS`, `CartridgeLoader`, `LoadedCartridgeBundle`, `assertCartridgeLoadersReady`, `getCartridgeIds`, `getMissingCartridgeLoaders`, `getOrphanCartridgeLoaders`, `loadCartridge` |
| `engins/gameengin/cartridges/manifest.ts` | `CartridgeInputProfile`, `CartridgeOrientationPreference`, `CartridgeQualityDefaults`, `CartridgeRendererFamily`, `CartridgeWarmupPlan`, `CartridgeWorkerEntry`, `RendererBackendId` | `CARTRIDGE_MANIFEST`, `CartridgeAssetPolicy`, `CartridgeLaunchMetadata`, `CartridgeManifestEntry`, `CartridgeRenderMode`, `getCartridgeCategories`, `getCartridgeManifest` |
| `engins/gameengin/cartridges/reactCartridge.ts` | `GameCartridge`, `GameEngineAPI`, `getCartridgeManifest`, `CartridgeManifestEntry`, `react`, `react-dom/client` | `useGameEngineAPI`, `GameEngineAPIContext`, `createReactCartridgeHost`, `createReactGameCartridge`, `defineReactCartridgeLoader`, `useGameEngineAPI` |
| `engins/gameengin/cartridges/saveState.ts` | `CartridgeSaveAPI`, `CartridgeSaveSlot` | `createSaveAPI`, `getSaveStorageBytes`, `purgeCartridgeSaves` |
| `engins/gameengin/cloud-compute.ts` | - | `EdgeOffloadRouter`, `OffloadCandidate`, `OffloadDecision`, `RemoteRenderConfig`, `RemoteRenderHandoff`, `ResultVerifier`, `RouterConfig`, `VerificationResult` |
| `engins/gameengin/config/demoGameConfig.ts` | `GameConfig` | `(default)` |
| `engins/gameengin/controls/control-mappings.ts` | `createClient`, `safeGetUser` | `ControlMapping`, `mapJoystickToAsset` |
| `engins/gameengin/core.ts` | `@babylonjs/core`, `AdvancedPhysicsWorld`, `AnimationStateMachine`, `AssetStreamManager`, `BehaviorTreeEngine`, `ClientSidePrediction`, `ComputeShaderPipeline`, `GlobalIllumProbes` | `Component`, `ECSWorld`, `EliteGameEngine`, `EntityId`, `FrameCallback`, `FrameTelemetry`, `PerformanceBudget`, `QualityChangeCallback` |
| `engins/gameengin/dream-engine.ts` | `decodeLedgerStringToUint8Array`, `encodeUint8ArrayToLedgerString`, `createClient`, `safeGetUser`, `toErrorMessage` | `DreamEngine`, `GameAsset`, `GlobalRegistryEntry`, `WasmOutput` |
| `engins/gameengin/dreamr-loader.ts` | `CARTRIDGE_MAGIC`, `validateManifest`, `CartridgeManifest` | `DreamrCartridgeArchive`, `DreamrFileEntry`, `loadDreamrCartridgeFromResponse`, `parseDreamrArchive` |
| `engins/gameengin/executionWiring.ts` | `RealtimeCaptioner`, `MotionReductionAI`, `ColorVisionAdapter`, `AIDirector`, `PlayerSignals`, `EmergentDialogue`, `LLMNPCBrain`, `NPCPersonalityStore` | `GameEnginExecutionCrash`, `GameEnginExecutionFrame`, `GameEnginExecutionKernel`, `GameEnginExecutionKernelSnapshot`, `createGameEnginExecutionKernel` |
| `engins/gameengin/GameEnginCore.ts` | `QualityTier`, `EliteGameEngine`, `GameEnginRuntime` | `AssetEntry`, `AssetsConfig`, `AudioConfig`, `GameConfig`, `GameEnginCompatibilityReport`, `GameEnginConfigError`, `GameEnginCore`, `GameEnginIntent` |
| `engins/gameengin/gameEnginRuntime.ts` | `createEventBus`, `EventBus`, `resolveFrameBudget`, `GameEnginQualityTier`, `decideRuntimeQuality`, `requestWebGpuDevice` | `DreamGameBackend`, `DreamGameInstance`, `DreamGameManifest`, `GameEnginBackendState`, `GameEnginEvents`, `GameEnginRuntime`, `InputHandler`, `InputType` |
| `engins/gameengin/GameRuntime.tsx` | `recordEmission`, `dreamOSBus`, `createLocalChannel`, `acquireSharedResource`, `releaseSharedResource`, `react`, `AchievementDefinition`, `CartridgeInputEvent` | `GameRuntime.tsx`, `(default)`, `GameRuntimeCrash`, `GameRuntimeProps` |
| `engins/gameengin/games/avatar.ts` | - | `AVATAR_CREATED_KEY`, `AVATAR_IMAGE_KEY`, `AVATAR_PLAY_AS_ME_KEY`, `clearAvatar`, `consumePlayAsMe`, `getAvatarDataUrl`, `hasAvatar`, `resizeImageToDataUrl` |
| `engins/gameengin/games/catalog.ts` | `CARTRIDGE_MANIFEST`, `MobileHudMode`, `GameRenderMode` | `GAME_CATALOG`, `GAME_CATALOG_IDS`, `GameCatalogEntry` |
| `engins/gameengin/games/DualSenseManager.ts` | `react` | `useDualSense`, `DualSenseConfig`, `DualSenseManager`, `DualSenseState`, `useDualSense` |
| `engins/gameengin/games/gameControllerButtons.ts` | - | `BTN_DOUBLE_TAP_MAX_MS`, `BTN_LONG_PRESS_MS`, `BTN_TAP_AND_HOLD_WINDOW_MS`, `BTN_TAP_MAX_MS`, `ButtonInteraction`, `ButtonInteractionEvent`, `ButtonInteractionManager`, `CONTROLLER_BUTTONS` |
| `engins/gameengin/games/gameControllerLeft.ts` | - | `LEFT_STICK_DEAD_ZONE`, `LEFT_STICK_RADIUS_PX`, `StickVector`, `computeLeftStickVector` |
| `engins/gameengin/games/gameControllerRight.ts` | - | `AUTO_FIRE_DELAY_MS`, `AUTO_FIRE_INTERVAL_MS`, `RIGHT_RESET_TIMEOUT_MS`, `RIGHT_TAP_MAX_MS`, `RIGHT_TAP_MAX_PX`, `TapResult`, `computeAimDelta`, `evaluateRightStickTap` |
| `engins/gameengin/games/hooks.ts` | `createPerformanceBaselineSampler`, `DE_GAME_PERFORMANCE_BASELINE`, `resolveRendererBackend`, `GamePerformanceBaseline`, `GameRenderMode`, `isWebGPUAvailable`, `react` | `useGameAutoStart`, `useGamePerformanceBaseline`, `useGamePhase`, `useKeySet`, `useSubmitScore`, `useGameAutoStart`, `useGamePerformanceBaseline`, `useGamePhase` |
| `engins/gameengin/games/library-state.ts` | - | `GAME_LIBRARY_SELECTION_STORAGE_KEY`, `GAME_LIBRARY_SESSION_STORAGE_KEY`, `MAX_SAVED_GAME_SESSIONS`, `SavedGameSession`, `upsertSavedGameSession` |
| `engins/gameengin/games/lucid-avenue-world.ts` | - | `CachePickup`, `DistrictExit`, `DistrictId`, `DistrictLock`, `LUCID_AVENUE_6900_TARGET`, `LUCID_AVENUE_DISTRICTS`, `LUCID_AVENUE_TOTAL_CONTRACTS`, `LUCID_AVENUE_TOTAL_FLAGS` |
| `engins/gameengin/games/madmaxi-wildfall-world.ts` | - | `WILDFALL_HEROES`, `WILDFALL_ZONES`, `WildfallAction`, `WildfallHero`, `WildfallHeroId`, `WildfallInputFrame`, `WildfallPhase`, `WildfallRelic` |
| `engins/gameengin/games/mobileControls.ts` | `broadcastGameInput`, `react` | `useRegisterMobileGameControls`, `GameRemoteInputAction`, `MOBILE_HUD_BUTTON_RING`, `MobileControlVector`, `MobileEventDetail`, `MobileGameControlHandlers`, `MobileHudButton`, `MobileHudMode` |
| `engins/gameengin/games/navigation.ts` | - | `DEFAULT_GAME_ID`, `GameLaunchOptions`, `buildGameLaunchHref`, `isLaunchFlagEnabled`, `resolveGameLaunchId` |
| `engins/gameengin/games/performance-baseline.ts` | - | `DE_GAME_PERFORMANCE_BASELINE`, `FrameBaselineSample`, `GamePerformanceBaseline`, `GameRenderMode`, `PerformanceBaselineSource`, `RendererBackend`, `createPerformanceBaselineSampler`, `publishGamePerformanceBaseline` |
| `engins/gameengin/games/quality-plan.ts` | - | `ADVANCED_GAME_TARGETS`, `AdvancedGameTarget`, `GAME_CONTROL_PROFILES`, `GAME_ENGINE_STANDARDS`, `GAME_QUALITY_PILLARS`, `GameControlProfile`, `GameEngineStandard`, `GameQualityPillar` |
| `engins/gameengin/games/useAIDirector.ts` | `AIDirector`, `DirectorState`, `PlayerSignals`, `react` | `useAIDirector`, `AIDirectorHookResult`, `useAIDirector` |
| `engins/gameengin/games/useGameInputKeyboardBridge.ts` | `GameInputAction`, `react` | `useGameInputKeyboardBridge`, `GAME_INPUT_KEYBOARD_MAP`, `useGameInputKeyboardBridge` |
| `engins/gameengin/games/useGamepad.ts` | `react` | `useGamepad`, `GamepadStatus`, `useGamepad` |
| `engins/gameengin/games/useImmersiveGameLayout.ts` | `next/navigation`, `react` | `useImmersiveGameLayout`, `getImmersiveCanvasStyle`, `getImmersiveOverlayStyle`, `getImmersiveStageStyle`, `useImmersiveGameLayout` |
| `engins/gameengin/games/useRemoteChannel.ts` | `react` | `useRemoteChannel`, `broadcastGameInput`, `useRemoteChannel` |
| `engins/gameengin/generative-audio.ts` | - | `AdaptiveMusicEngine`, `FoleyCategory`, `FoleyParams`, `FoleyResult`, `MusicConfig`, `MusicEdge`, `MusicNode`, `NeuralFoley` |
| `engins/gameengin/handlers.ts` | `GameEnginAction`, `PhysicsConfig`, `ScriptLanguage`, `TileType` | `GameEnginDispatch`, `dispatchGameControlProfile`, `dispatchGamePhysicsApply`, `dispatchGameScriptSave`, `dispatchGameSelect`, `dispatchGameSessionStart`, `paintWorldTile`, `snapshotWorldGrid` |
| `engins/gameengin/index.ts` | `mapJoystickToAsset`, `ControlMapping`, `ECSWorld`, `EliteGameEngine`, `DreamEngine`, `GameAsset`, `GlobalRegistryEntry`, `WasmOutput` | `AABB`, `AIDirector`, `AdvancedPhysicsWorld`, `AnimState`, `AnimTransition`, `AnimationClip`, `AnimationStateMachine`, `AssetHandle` |
| `engins/gameengin/input/index.ts` | `GameRuntimeInputRouter`, `GameRuntimeInputRouterOptions` | `GameRuntimeInputRouter`, `GameRuntimeInputRouterOptions` |
| `engins/gameengin/input/InputRouter.ts` | `CartridgeInputEvent` | `GameRuntimeInputRouter`, `GameRuntimeInputRouterOptions` |
| `engins/gameengin/launcher.ts` | `(default)`, `GameConfig`, `GameEnginConfigError`, `GameEnginCore`, `toErrorMessage` | `launch` |
| `engins/gameengin/neural-render.ts` | - | `FrameGenConfig`, `FrameGenerator`, `NTCBlock`, `NeuralTextureCompression`, `NeuralUpscaler`, `UpscaleRatio`, `UpscalerConfig` |
| `engins/gameengin/path-tracing.ts` | - | `BVHNode`, `DenoiserConfig`, `NeuralDenoiser`, `PathTraceConfig`, `PathTracer`, `Reservoir`, `RestirGI` |
| `engins/gameengin/platform.ts` | `@babylonjs/core`, `AIDirector`, `GameCartridge`, `GameEngineAPI`, `GRAVITY_VALUES`, `EliteGameEngine`, `FrameTelemetry`, `PerformanceBudget` | `GameEnginPlatform`, `PlatformBootOptions`, `PlatformCapabilities`, `QuickResumeEntry`, `detectCapabilities` |
| `engins/gameengin/post-fx.ts` | `@babylonjs/core`, `PerformanceBudget`, `@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline`, `@babylonjs/core`, `@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline`, `@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline`, `@babylonjs/core/Layers/glowLayer` | `PostFXManager` |
| `engins/gameengin/power-systems.ts` | `requestWebGpuDevice` | `AABB`, `AdvancedPhysicsWorld`, `AnimState`, `AnimTransition`, `AnimationClip`, `AnimationStateMachine`, `AssetHandle`, `AssetState` |
| `engins/gameengin/predictive-stream.ts` | - | `BehaviorAnticipator`, `BehaviorObservation`, `BehaviorPrediction`, `MLPrefetchConfig`, `MLPrefetchModel`, `PrefetchCandidate`, `PrefetchPlan` |
| `engins/gameengin/procgen.ts` | `createBoxSDF`, `createSphereSDF`, `createTerrainCaveSDF`, `meshToSnapshot`, `runIsoSurfaceJob`, `DualContouringSettings`, `DEFAULT_MOBILE_DUAL_CONTOURING_SETTINGS`, `createTerrainCaveSDF` | `BiomeId`, `BiomeSample`, `BiomeSynthesizer`, `ChunkJob`, `ChunkScheduler`, `DEFAULT_MOBILE_DUAL_CONTOURING_SETTINGS`, `DualContouringSettings`, `Mesh` |
| `engins/gameengin/registerCartridges.ts` | `CARTRIDGE_MANIFEST`, `assertCartridgeLoadersReady`, `moduleRegistry`, `ModuleManifest` | `registerCartridges` |
| `engins/gameengin/remote/comboMachine.ts` | `ALL_COMBOS`, `maxComboLength`, `MULTITOUCH_COMBOS`, `Combo`, `FaceButton`, `MultiTouchCombo` | `COMBO_WINDOW_MS`, `ComboMachine`, `ComboMachineOptions`, `ComboMatch`, `MULTITOUCH_WINDOW_MS`, `MultiTouchMatch`, `RemoteMatch` |
| `engins/gameengin/remote/index.ts` | `*`, `*`, `*`, `*` | `index.ts` |
| `engins/gameengin/remote/layout.ts` | - | `HUD_ALLOWED_ELEMENTS`, `HudAllowedElement`, `LANDSCAPE_LAYOUT`, `LEFT_JOYSTICK_RADIUS_MM`, `PORTRAIT_LAYOUT`, `RIGHT_JOYSTICK_RADIUS_MM`, `RIGHT_JOYSTICK_RADIUS_RATIO`, `RemoteAllocation` |
| `engins/gameengin/remote/moves.ts` | - | `ALL_COMBOS`, `BASE_COMBOS`, `BASE_MOVES`, `BaseMove`, `Combo`, `FACE_BUTTONS`, `FaceButton`, `MULTITOUCH_COMBOS` |
| `engins/gameengin/remote/sprintDetector.ts` | - | `DOUBLE_TAP_WINDOW_MS`, `SPRINT_MOVE_THRESHOLD`, `SprintDetector` |
| `engins/gameengin/render/ShaderRegistry.ts` | `RendererBackendId` | `GameEnginShaderCompileKey`, `GameEnginShaderRegistry`, `GameEnginShaderSource`, `GameEnginShaderStage` |
| `engins/gameengin/runtime/FrameBudget.ts` | - | `GAMEENGIN_FRAME_BUDGETS`, `GameEnginFrameBudget`, `GameEnginQualityTier`, `resolveFrameBudget` |
| `engins/gameengin/runtime/FrameClock.ts` | `resolveFrameBudget`, `GameEnginQualityTier` | `GameEnginFrameClock`, `GameEnginFrameTick` |
| `engins/gameengin/runtime/index.ts` | `GAMEENGIN_FRAME_BUDGETS`, `resolveFrameBudget`, `GameEnginFrameBudget`, `GameEnginQualityTier`, `GameEnginFrameClock`, `GameEnginFrameTick`, `decideRuntimeQuality`, `GameEnginRuntimeQuality` | `GAMEENGIN_FRAME_BUDGETS`, `GameEnginFrameBudget`, `GameEnginFrameClock`, `GameEnginFrameTick`, `GameEnginQualityTier`, `GameEnginRuntimeQuality`, `GameEnginRuntimeQualityDecision`, `decideRuntimeQuality` |
| `engins/gameengin/runtime/RuntimeQuality.ts` | - | `GameEnginRuntimeQuality`, `GameEnginRuntimeQualityDecision`, `decideRuntimeQuality` |
| `engins/gameengin/systems/ai.ts` | `BehaviorTreeEngine`, `WorkerJobSystem`, `BehaviorTreeEngine`, `BTContext`, `BTNode`, `BTStatus`, `Job`, `JobPriority` | `BTContext`, `BTNode`, `BTStatus`, `BehaviorTreeEngine`, `BehaviorTreeSystem`, `Job`, `JobPriority`, `JobResult` |
| `engins/gameengin/systems/animation.ts` | `AnimationStateMachine`, `ReplayBuffer`, `TypedEventBus`, `AnimationStateMachine`, `TypedEventBus`, `AnimState`, `AnimTransition`, `AnimationClip` | `AnimState`, `AnimTransition`, `AnimationClip`, `AnimationFSM`, `AnimationStateMachine`, `EventBus`, `EventMap`, `InputFrame` |
| `engins/gameengin/systems/assets.ts` | `AssetStreamManager`, `assertValidBundleManifest`, `bundleWeightBytes`, `planBundleCache`, `AssetHandle`, `AssetState`, `AssetType`, `GameEnginAssetEntry` | `AssetHandle`, `AssetState`, `AssetStreamManager`, `AssetType`, `GameEnginAssetEntry`, `GameEnginAssetKind`, `GameEnginBundleCacheDecision`, `GameEnginBundleCacheOptions` |
| `engins/gameengin/systems/index.ts` | `*`, `*`, `*`, `*`, `*`, `*`, `*`, `*` | `index.ts` |
| `engins/gameengin/systems/lod.ts` | `LODSystem`, `LODLevel`, `LODObject` | `LODLevel`, `LODObject`, `LODSystem` |
| `engins/gameengin/systems/network.ts` | `ClientSidePrediction`, `RollbackNetcode`, `NetInput`, `PredictionState`, `RollbackConfig`, `ServerSnapshot` | `ClientSidePrediction`, `NetInput`, `PredictionState`, `RollbackConfig`, `RollbackNetcode`, `ServerSnapshot` |
| `engins/gameengin/systems/physics.ts` | `AdvancedPhysicsWorld`, `PhysicsMaterialSystem`, `MaterialPair`, `PhysicsBody`, `PhysicsBodyDef`, `PhysicsBodyType`, `PhysicsConstraint`, `PhysicsMaterial` | `AdvancedPhysicsWorld`, `MaterialPair`, `PhysicsBody`, `PhysicsBodyDef`, `PhysicsBodyType`, `PhysicsConstraint`, `PhysicsMaterial`, `PhysicsMaterialSystem` |
| `engins/gameengin/systems/pooling.ts` | `ResourcePool`, `ResourcePool` | `ObjectPoolingSystem`, `ResourcePool` |
| `engins/gameengin/systems/rendering.ts` | `ComputeShaderPipeline`, `GPUProfiler`, `WGSLShaderManager`, `ComputeShaderPipeline`, `ComputeDispatch`, `ComputeKernel`, `ProfileFrame`, `ProfileSpan` | `ComputeDispatch`, `ComputeKernel`, `ComputeShaderPipeline`, `GPUComputeSystem`, `GPUProfiler`, `ProfileFrame`, `ProfileSpan`, `RenderEnginFrameStats` |
| `engins/gameengin/systems/spatial.ts` | `OctreeBVH`, `SpatialAudioDSP`, `AABB`, `AudioSourceDef`, `ListenerState`, `SpatialEntry` | `AABB`, `AudioSourceDef`, `ListenerState`, `OctreeBVH`, `SpatialAudioDSP`, `SpatialEntry` |
| `engins/gameengin/systems/world.ts` | `GlobalIllumProbes`, `ProceduralWorldGen`, `TerrainEngine`, `TerrainEngine`, `GlobalIllumProbes`, `GIProbe`, `SHCoeffs`, `TerrainPage` | `GIProbe`, `GIProbeSystem`, `GlobalIllumProbes`, `ProceduralWorldGen`, `SHCoeffs`, `TerrainEngine`, `TerrainPage`, `TerrainSystem` |
| `engins/gameengin/unifiedLoop.ts` | - | `LoopPriority`, `_resetLoop`, `activeGameCount`, `isLoopRunning`, `registerGame`, `unregisterGame` |
| `engins/gameengin/useUnifiedLoop.ts` | `react`, `registerGame`, `unregisterGame`, `LoopPriority` | `useUnifiedLoop`, `useUnifiedLoop` |
| `engins/gameengin/webgpu-runtime-shell.ts` | `DreamrCartridgeArchive` | `WebGPURuntimeShellPlan`, `canUseWebGPU`, `planRuntimeShellHandoff` |
| `engins/gameengin/world-crdt.ts` | - | `BridgeConfig`, `BridgeTransport`, `CRDTRecord`, `EventualConsistencyBridge`, `WorldStateCRDT` |
| `engins/gameengin/xr.ts` | - | `HandJoint`, `HandPose`, `HandTrackingInput`, `PassthroughComposite`, `SpatialAnchor`, `UnifiedAction`, `WebXRSession`, `XRMode` |
| `engins/isosurfaceAssetPipeline.ts` | `createSphereSDF`, `meshToSnapshot`, `runDualContouring`, `Mesh`, `MeshDiagnostics`, `Vec3`, `meshToSnapshot`, `validateMesh` | `AssetProcessingStatus`, `AutoRigState`, `Bounds3`, `BrushState`, `CONTENTENGIN_GLB_UPLOAD_LIMIT_BYTES`, `CameraState`, `ColorRGB`, `ColoredMesh` |
| `engins/isosurfaceDualContouring.ts` | - | `DEFAULT_MOBILE_DUAL_CONTOURING_SETTINGS`, `DualContouringSettings`, `IsoSurfaceJob`, `IsoSurfacePurpose`, `IsoSurfaceSdfKind`, `IsoSurfaceSourceEngin`, `Mesh`, `MeshDiagnostics` |
| `engins/labengin/implicitSurface.ts` | `createSphereSDF`, `createTerrainCaveSDF`, `meshToSnapshot`, `runIsoSurfaceJob`, `DualContouringSettings`, `SDF` | `LabImplicitSurfacePreset`, `LabImplicitSurfaceRun`, `runLabImplicitSurface` |
| `engins/portfolio/dream.PortfolioEngin.tsx` | `(default)`, `(default)`, `QuantumMeasurementResult`, `recordForgeTransfer`, `useForgeActivity`, `bridge`, `lucide-react`, `react` | `dream.PortfolioEngin.tsx`, `(default)` |
| `engins/renderengin/advancedRendering.ts` | `mat4Identity`, `mat4Mul`, `mat4MulPrecise`, `mat4Transform`, `makeDualQuaternion`, `quatMul`, `DualQuaternion`, `Mat4` | `RenderBoneStoragePlan`, `RenderCompressedGeometry`, `RenderDeviceRecoveryState`, `RenderIndirectDrawCommand`, `RenderMeshlet`, `RenderMorphTarget`, `RenderMorphWeight`, `RenderStreamingPage` |
| `engins/renderengin/animation.ts` | `mat4Mul`, `mat4Translation`, `mat4Scale`, `mat4FromQuat`, `Mat4`, `Quat`, `Vec3` | `RenderAnimationChannel`, `RenderAnimationClip`, `RenderAnimationPath`, `RenderAnimationPose`, `RenderKeyframeQuat`, `RenderKeyframeVec3`, `evaluateAnimationClip`, `sampleKeyframes` |
| `engins/renderengin/assets.ts` | `authorizeDomainCapability`, `DomainAuthorizationContext`, `DomainCapability`, `DomainVisibility`, `JsonObject`, `JsonValue`, `createMeshBuffers`, `createRenderAsset` | `ParsedRenderAsset`, `RenderAssetManifest`, `authorizeRenderAssetOperation`, `createContentEnginRenderHandoff`, `createGameEnginRenderHandoff`, `createParsedGlbRenderAsset`, `createParsedObjRenderAsset`, `estimateRenderAssetMemory` |
| `engins/renderengin/benchmarkProof.ts` | `JsonObject` | `RenderDeviceCapture`, `RenderMillionPolyProof`, `RenderTenMillionBenchmarkObject`, `RenderTenMillionBenchmarkScene`, `certifyTenMillionScene`, `createTenMillionPolygonProof`, `createTenMillionTriangleBenchmarkScene`, `evaluateGpuBenchmarkProof` |
| `engins/renderengin/completionEvidence.ts` | `DomainObject`, `JsonObject`, `JsonValue` | `RenderCompletionEvidence`, `RenderEvidenceData`, `RenderEvidenceItem`, `RenderEvidenceStatus`, `createRenderCompletionEvidence` |
| `engins/renderengin/core.ts` | `DomainObject`, `DomainVisibility`, `EnginBaseState`, `JsonObject`, `JsonValue`, `EnginAction`, `EnginRuleSetContract`, `,` | `DualQuaternion`, `EPS`, `GeometryCluster`, `Joint`, `LodLevel`, `Mat4`, `MeshBuffers`, `Quat` |
| `engins/renderengin/diagnostics.ts` | `JsonObject`, `MeshBuffers`, `RenderEnginFrameStats` | `RenderBenchmarkScene`, `RenderPerformanceReport`, `RenderPerformanceSample`, `createBenchmarkScene`, `createRenderPerformanceReport`, `evaluateRenderPerformanceGate`, `frameStatsToPerformanceSample` |
| `engins/renderengin/index.ts` | `*`, `*`, `default`, `default`, `createInlineRenderIntent`, `*`, `*`, `*` | `RenderEnginViewport`, `RenderStage`, `createInlineRenderIntent` |
| `engins/renderengin/lighting.ts` | `DomainObject`, `DomainVisibility`, `JsonObject`, `v3normalize`, `Vec3` | `RenderEnvironment`, `RenderEnvironmentData`, `RenderLight`, `RenderLightData`, `RenderLightKind`, `createRenderEnvironment`, `createRenderLight`, `summarizeRenderLights` |
| `engins/renderengin/liveBenchmark.ts` | `JsonObject`, `WebGpuRenderEngin` | `RenderLiveBenchmarkResult`, `isMobileRenderUserAgent`, `runRenderLiveBenchmark`, `summarizeLiveBenchmark` |
| `engins/renderengin/materials.ts` | `DomainObject`, `DomainVisibility`, `JsonObject`, `clamp01`, `Vec3` | `RenderMaterial`, `RenderMaterialData`, `createRenderMaterial`, `packRenderMaterial`, `updateRenderMaterial` |
| `engins/renderengin/performanceIntegrity.ts` | `JsonObject` | `DEFAULT_RENDER_PERFORMANCE_THRESHOLDS`, `RenderPerformanceIntegrityThresholds`, `evaluateRenderPerformanceIntegrity` |
| `engins/renderengin/postProcessing.ts` | `JsonObject` | `RenderPostProcessGraph`, `RenderPostProcessPass`, `createRenderPostProcessGraph`, `executePostProcessPixel` |
| `engins/renderengin/RenderEnginInlineSurface.tsx` | `react`, `EnginRuntime`, `RenderEnginRuleSet`, `RenderIntent`, `RenderServiceIntentEnvelope`, `(default)` | `RenderEnginInlineSurface.tsx`, `(default)` |
| `engins/renderengin/RenderEnginViewport.tsx` | `react`, `EnginRuntime`, `composeModelMatrix`, `createMeshBuffers`, `createRenderAsset`, `mat4LookAt`, `mat4Perspective`, `MeshBuffers` | `RenderEnginViewport.tsx`, `(default)` |
| `engins/renderengin/renderSettings.ts` | `JsonObject` | `RenderPreviewMode`, `RenderQualitySettings`, `RenderQualityTier`, `createRenderQualitySettings`, `switchRenderPreviewMode` |
| `engins/renderengin/RenderStage.tsx` | `react`, `EnginRuntime`, `JsonObject`, `RenderEnginRuleSet`, `RenderIntent`, `RenderServiceIntentEnvelope`, `RenderWorkflowSurface`, `(default)` | `RenderStage.tsx`, `(default)`, `RenderStageProps`, `createInlineRenderIntent` |
| `engins/renderengin/runtimeRegistration.ts` | `registerRuntimeEngin`, `RenderEnginRuleSet`, `RENDER_ENGIN_ID`, `RENDER_INTENT_TYPES` | `RenderEnginRuntimeRegistration` |
| `engins/renderengin/scene.ts` | `DomainObject`, `DomainVisibility`, `JsonObject`, `JsonValue`, `composeModelMatrix`, `mat4Mul`, `mat4Identity`, `Mat4` | `RenderScene`, `RenderSceneData`, `RenderSceneEnvironment`, `RenderSceneLayer`, `RenderSceneObject`, `RenderSceneObjectData`, `RenderSceneObjectKind`, `RenderTransform` |
| `engins/renderengin/security.ts` | `JsonObject` | `RenderAuthorizationContext`, `RenderAuthorizationDecision`, `RenderCapabilityAction`, `authorizeRenderCapability`, `validateRenderAssetManifestServer` |
| `engins/renderengin/serviceIntegration.ts` | `JsonObject`, `RenderIntentType`, `createRenderServiceIntent`, `submitRenderServiceIntent`, `RenderServiceIntentEnvelope`, `routeForRenderSource`, `RenderServiceSubmitResult`, `RenderWorkflowSurface` | `RENDER_SERVICE_COMMANDS`, `RENDER_SERVICE_HANDOFFS`, `RENDER_SERVICE_PIPELINE`, `RenderServiceCommand`, `RenderServiceHandoff`, `RenderServiceIntegrationResult`, `RenderServiceIntentEnvelope`, `RenderWorkflowSurface` |
| `engins/renderengin/serviceRuntime.ts` | `JsonObject`, `JsonValue`, `EnginDispatcher`, `RenderDispatcherIntent`, `RENDER_ENGIN_ID`, `RENDER_INTENT_TYPES`, `RenderIntentType` | `RENDER_SERVICE_EVENT`, `RENDER_SERVICE_STORAGE_KEY`, `RenderServiceIntentEnvelope`, `RenderServiceSubmitResult`, `RenderWorkflowSurface`, `acknowledgeRenderServiceIntent`, `createRenderServiceIntent`, `normalizeRenderServicePayload` |
| `engins/renderengin/textures.ts` | `DomainObject`, `DomainVisibility`, `JsonObject` | `RenderTexture`, `RenderTextureData`, `RenderTextureFormat`, `RenderTextureRole`, `RenderTextureValidation`, `calculateMipLevelCount`, `createRenderTexture`, `createTextureMemoryReport` |
| `engins/renderengin/viewportControls.ts` | `v3dot`, `v3length`, `v3normalize`, `v3scale`, `v3sub`, `Vec2`, `Vec3`, `RenderBounds` | `RenderCameraState`, `RenderPointerSample`, `RenderRay`, `RenderTransformMode`, `createAxisHelper`, `createBoundingBoxLines`, `createViewportRay`, `fitCameraToBounds` |
| `engins/renderengin/virtualization.ts` | `v3length`, `v3sub`, `MeshBuffers`, `Vec3`, `RenderScene` | `RenderBounds`, `RenderCullingResult`, `RenderFrustumPlane`, `RenderInstanceBatch`, `RenderTerrainChunk`, `buildInstanceBatches`, `computeMeshBounds`, `createTerrainChunks` |
| `engins/renderengin/wasmAcceleration.ts` | `MeshBuffers`, `Vec3` | `RenderMeshBounds`, `RenderWasmAcceleration`, `RenderWasmAccelerationExports`, `computeRenderMeshBounds`, `fallbackRenderMeshBounds`, `getActiveRenderWasmAcceleration`, `loadRenderWasmAcceleration`, `resetRenderWasmAccelerationForTesting` |
| `engins/renderengin/webgpu.ts` | `mat4Identity`, `Mat4`, `MeshBuffers`, `Vec3`, `Vec4`, `Vertex`, `validateMeshForRenderUpload` | `BATCH_SHADER`, `PackedVertexBuffer`, `RenderEnginFrameStats`, `RenderEnginGpuDeviceLease`, `RenderEnginGpuMesh`, `RenderEnginGpuTexture`, `RenderEnginLifecycleHooks`, `RenderEnginMeshArenaRange` |
| `engins/rulesets/brand/brandEnginRuleSet.ts` | `patchBaseState`, `EnginBaseState`, `JsonObject`, `EnginCapability`, `getEnginCapabilityProfile`, `ConstraintResult`, `EnginAction`, `EnginConstraint` | `ABTest`, `AnalyticMetric`, `BRAND_ENGIN_RULE_SET`, `BrandAsset`, `BrandEnginAction`, `BrandEnginDerivedState`, `BrandProfile` |
| `engins/rulesets/brand/useBrandEnginRuntime.ts` | `MemoryAdapter`, `EnginHardwareAccelerationState`, `EnginRuntimeOptions`, `EnginRuntime`, `react`, `BrandEnginAction`, `BrandEnginDerivedState`, `BRAND_ENGIN_RULE_SET` | `useBrandEnginRuntime`, `UseBrandEnginRuntimeOptions`, `UseBrandEnginRuntimeResult`, `useBrandEnginRuntime` |
| `engins/rulesets/code/codeEnginRuleSet.ts` | `patchBaseState`, `EnginBaseState`, `JsonObject`, `EnginCapability`, `getEnginCapabilityProfile`, `ConstraintResult`, `EnginAction`, `EnginConstraint` | `(default)`, `CODE_ENGIN_RULE_SET`, `CellLanguage`, `CellStatus`, `CiStatus`, `CodeDiagnostic`, `CodeEnginAction`, `CodeEnginDerivedState` |
| `engins/rulesets/code/index.ts` | - | `(default)`, `constraints`, `id`, `params`, `ruleSet`, `transforms` |
| `engins/rulesets/code/useCodeEnginRuntime.ts` | `MemoryAdapter`, `EnginHardwareAccelerationState`, `EnginRuntimeOptions`, `EnginRuntime`, `react`, `CodeEnginAction`, `CodeEnginDerivedState`, `CODE_ENGIN_RULE_SET` | `useCodeEnginRuntime`, `UseCodeEnginRuntimeOptions`, `UseCodeEnginRuntimeResult`, `useCodeEnginRuntime` |
| `engins/rulesets/content/contentEnginRuleSet.ts` | `patchBaseState`, `EnginBaseState`, `JsonObject`, `EnginCapability`, `getEnginCapabilityProfile`, `ConstraintResult`, `EnginAction`, `EnginConstraint` | `CONTENT_ENGIN_RULE_SET`, `CONTENT_IMPLICIT_ASSET_POLICY`, `ContentEnginAction`, `ContentEnginDerivedState`, `ContentEnginDomain` |
| `engins/rulesets/content/useContentEnginRuntime.ts` | `MemoryAdapter`, `EnginHardwareAccelerationState`, `EnginRuntimeOptions`, `EnginRuntime`, `react`, `ContentEnginAction`, `ContentEnginDerivedState`, `CONTENT_ENGIN_RULE_SET` | `useContentEnginRuntime`, `UseContentEnginRuntimeOptions`, `UseContentEnginRuntimeResult`, `useContentEnginRuntime` |
| `engins/rulesets/dreams/index.ts` | - | `(default)`, `constraints`, `id`, `params`, `ruleSet`, `transforms` |
| `engins/rulesets/forge/index.ts` | - | `(default)`, `constraints`, `id`, `params`, `ruleSet`, `transforms` |
| `engins/rulesets/game/declarative.ts` | - | `(default)`, `constraints`, `id`, `params`, `ruleSet`, `transforms` |
| `engins/rulesets/game/gameEnginRuleSet.ts` | `patchBaseState`, `EnginBaseState`, `JsonObject`, `EnginCapability`, `getEnginCapabilityProfile`, `ConstraintResult`, `EnginAction`, `EnginConstraint` | `GAME_ENGIN_RULE_SET`, `GAME_IMPLICIT_WORLD_POLICY`, `GRAVITY_VALUES`, `GameEnginAction`, `GameEnginDerivedState`, `GameScore`, `GravityPreset`, `PhysicsConfig` |
| `engins/rulesets/game/index.ts` | `GAME_ENGIN_RULE_SET`, `GRAVITY_VALUES`, `GameEnginAction`, `GameEnginDerivedState`, `GameScore`, `GravityPreset`, `PhysicsConfig`, `ScriptLanguage` | `GAME_ENGIN_RULE_SET`, `GRAVITY_VALUES`, `GameEnginAction`, `GameEnginDerivedState`, `GameScore`, `GravityPreset`, `PhysicsConfig`, `ScriptLanguage` |
| `engins/rulesets/game/useGameEnginRuntime.ts` | `MemoryAdapter`, `EnginHardwareAccelerationState`, `EnginRuntimeOptions`, `EnginRuntime`, `react`, `GameEnginAction`, `GameEnginDerivedState`, `GAME_ENGIN_RULE_SET` | `useGameEnginRuntime`, `UseGameEnginRuntimeOptions`, `UseGameEnginRuntimeResult`, `useGameEnginRuntime` |
| `engins/rulesets/homedream/dream.homedream.constants.ts` | - | `HOMEDREAM_FRAME_BUDGET_MS`, `HOMEDREAM_GRAVITY`, `HOMEDREAM_MAX_ENTITIES`, `HOMEDREAM_WORLD_ID` |
| `engins/rulesets/homedream/dream.homedream.physics.ts` | `HOMEDREAM_GRAVITY` | `HOMEDREAM_PHYSICS_CONSTRAINTS`, `PhysicsConstraint`, `resolveConstraint` |
| `engins/rulesets/homedream/dream.homedream.transforms.ts` | `HOMEDREAM_WORLD_ID` | `EntityState`, `HomeDreamState`, `applyDelta`, `createInitialState` |
| `engins/rulesets/homedream/index.ts` | `HOMEDREAM_FRAME_BUDGET_MS`, `HOMEDREAM_GRAVITY`, `HOMEDREAM_MAX_ENTITIES`, `HOMEDREAM_WORLD_ID`, `applyDelta`, `createInitialState`, `EntityState`, `HomeDreamState` | `EntityState`, `HOMEDREAM_FRAME_BUDGET_MS`, `HOMEDREAM_GRAVITY`, `HOMEDREAM_MAX_ENTITIES`, `HOMEDREAM_PHYSICS_CONSTRAINTS`, `HOMEDREAM_WORLD_ID`, `HomeDreamState`, `PhysicsConstraint` |
| `engins/rulesets/lab/index.ts` | - | `(default)`, `constraints`, `id`, `params`, `ruleSet`, `transforms` |
| `engins/rulesets/lab/labEnginRuleSet.ts` | `patchBaseState`, `EnginBaseState`, `JsonObject`, `EnginCapability`, `getEnginCapabilityProfile`, `ConstraintResult`, `EnginAction`, `EnginConstraint` | `ChartType`, `Experiment`, `LAB_ENGIN_RULE_SET`, `LAB_IMPLICIT_SURFACE_POLICY`, `LabEnginAction`, `LabEnginDerivedState`, `SimState`, `SimulationKind` |
| `engins/rulesets/lab/useLabEnginRuntime.ts` | `MemoryAdapter`, `EnginHardwareAccelerationState`, `EnginRuntimeOptions`, `EnginRuntime`, `react`, `LabEnginAction`, `LabEnginDerivedState`, `LAB_ENGIN_RULE_SET` | `useLabEnginRuntime`, `UseLabEnginRuntimeOptions`, `UseLabEnginRuntimeResult`, `useLabEnginRuntime` |
| `engins/rulesets/music/index.ts` | - | `(default)`, `constraints`, `id`, `params`, `ruleSet`, `transforms` |
| `engins/rulesets/music/starMakerEnginRuleSet.ts` | `patchBaseState`, `EnginBaseState`, `JsonObject`, `EnginCapability`, `getEnginCapabilityProfile`, `ConstraintResult`, `EnginAction`, `EnginConstraint` | `MusicRelease`, `PlaybackQualityMode`, `STAR_MAKER_ENGIN_RULE_SET`, `StarMakerEnginAction`, `StarMakerEnginDerivedState`, `StemChannel` |
| `engins/rulesets/music/useStarMakerEnginRuntime.ts` | `MemoryAdapter`, `EnginHardwareAccelerationState`, `EnginRuntimeOptions`, `EnginRuntime`, `react`, `StarMakerEnginAction`, `StarMakerEnginDerivedState`, `STAR_MAKER_ENGIN_RULE_SET` | `useStarMakerEnginRuntime`, `UseStarMakerEnginRuntimeOptions`, `UseStarMakerEnginRuntimeResult`, `useStarMakerEnginRuntime` |
| `engins/rulesets/useEnginWorkflow.ts` | `logJourneyDot`, `bridge`, `react`, `EnginWorkflow`, `HandoffKind`, `WorkflowStage`, `abandonWorkflow`, `advanceStage` | `useEnginWorkflow`, `EnginWorkflowHook`, `useEnginWorkflow` |
| `engins/rulesets/workflowEngine.ts` | - | `EnginId`, `EnginWorkflow`, `HANDOFF_PATHS`, `HandoffEligibility`, `HandoffKind`, `HandoffPath`, `STAGE_LABELS`, `StageTransitionResult` |
| `engins/starmakerengin/audio-fingerprint/fingerprint.ts` | `FrequencyPeak`, `PeakMap` | `Fingerprint`, `TimeSlice`, `matchFingerprint`, `recordFingerprint` |
| `engins/starmakerengin/audio-fingerprint/index.ts` | `matchFingerprint`, `recordFingerprint`, `Fingerprint`, `TimeSlice`, `buildPeakMap`, `FrequencyPeak`, `PeakMap`, `extractStem` | `Fingerprint`, `FrequencyPeak`, `PeakMap`, `TimeSlice`, `buildPeakMap`, `extractStem`, `matchFingerprint`, `recordFingerprint` |
| `engins/starmakerengin/audio-fingerprint/peak-map.ts` | - | `FrequencyPeak`, `PeakMap`, `buildPeakMap` |
| `engins/starmakerengin/audio-fingerprint/stem-extractor.ts` | `TimeSlice` | `extractStem`, `extractStemAsync` |
| `engins/starmakerengin/audioFingerprint.ts` | `TORRIDITY_DP`, `TORRIDITY_N` | `Fingerprint`, `MatchResult`, `Peak`, `PeakMap`, `buildPeakMap`, `createFingerprintIsolator`, `extractAudioChunks`, `matchFingerprint` |
| `engins/starmakerengin/music/presets.ts` | - | `BEAT_PRESETS`, `BeatPreset`, `GENRE_LIST`, `INSTRUMENT_PRESETS`, `InstrumentPreset`, `PROJECT_TEMPLATES`, `ProjectTemplate`, `findInstrumentPreset` |
| `engins/starmakerengin/music/starmaker.ts` | - | `MelodySuggestion`, `MelodySuggestionInput`, `PlaybackMixerState`, `PlaybackProfile`, `PlaybackProfileInput`, `PlaybackQualityMode`, `ReleaseStrategy`, `ReleaseStrategyInput` |
| `engins/starmakerengin/music/starmakerArrangement.ts` | - | `ARRANGEMENT_BARS`, `ARRANGEMENT_SOURCE_COLORS`, `ARRANGEMENT_TRACKS`, `ArrangementClip`, `ArrangementSource`, `ArrangementTrackId`, `ArrangementTrackState` |
| `engins/starmakerengin/music/starmakerDaw.ts` | - | `AUDIO_QUALITY_PRESETS`, `AUTOMATABLE_PARAMS`, `AudioQualityConfig`, `AudioTake`, `AutomationLane`, `AutomationMode`, `AutomationPoint`, `AutomationState` |
| `engins/starmakerengin/music/wasmAudioBridge.ts` | - | `WasmAudioBridge`, `createWasmAudioBridge` |
| `eslint.config.mjs` | `eslint-config-next/core-web-vitals`, `eslint-config-next/typescript` | `(default)` |
| `fix-audit.js` | `fs`, `path`, `ts-morph`, `"][^`, `lucide-react` | `fix-audit.js` |
| `fix-repo.cjs` | `node:fs`, `node:path`, `node:child_process`, `);     }   } }  function checkUseDualRuntimeDuplicate(){   const componentFile = 'components/runtime/dream.DualRuntimeContainer.tsx';   const engineFile = 'engine/runtime/useDualRuntime.ts';    if (!exists(componentFile)){     warn(`, `);     return;   }    warn(` | `useDualRuntime`, `useDualRuntime` |
| `hooks/use-spatial.ts` | `createClient`, `Album`, `ContentObject`, `CreateAlbumInput`, `CreateContentInput`, `CreateWidgetInput`, `NavigationState`, `ShareIntent` | `useAlbums`, `useContent`, `useShareToProfile`, `useSpatialNavigation`, `useWidgets`, `UseWidgetsResult`, `useAlbums`, `useContent` |
| `hooks/useAccount.ts` | `createClient`, `react` | `useAccount`, `useAccount` |
| `hooks/useAppIntentPressureSurface.ts` | `react`, `AppIntentPressureField`, `appIntentPressureFromElementPoint`, `AppIntentPressureSource`, `AppIntentMassState`, `AppIntentPoint` | `useAppIntentPressureSurface`, `AppIntentPressureSurfaceOptions`, `applyIntentPressureToElement`, `useAppIntentPressureSurface` |
| `hooks/useConnectorInstallFlow.ts` | `getConnectorDef`, `consumeDeferredPrompt`, `handleAddWidget`, `handleConnectSuccess`, `handleDismissPrompt`, `handlePlaceLater`, `SlotGrid`, `WidgetTypeDef` | `useConnectorInstallFlow`, `ActivePrompt`, `ConnectorInstallFlowActions`, `ConnectorInstallFlowOptions`, `ConnectorInstallFlowState`, `PlacementRequest`, `useConnectorInstallFlow` |
| `hooks/useDreamLayout.ts` | `getOfflineRecord`, `putOfflineRecord`, `enqueueFetchMutation`, `react` | `useDreamLayout`, `UserDreamLayout`, `useDreamLayout` |
| `hooks/useHideOnScroll.ts` | `react` | `useHideOnScroll`, `useHideOnScroll` |
| `hooks/useMotionTilt.ts` | `framer-motion`, `framer-motion`, `react` | `useMotionTilt`, `MotionTiltOptions`, `MotionTiltResult`, `useMotionTilt` |
| `hooks/useResponsive.ts` | `react`, `readInteractiveViewportHeight`, `readInteractiveViewportWidth` | `useBreakpoint`, `useBreakpointValue`, `useFluid`, `useIsAtLeast`, `useIsBelow`, `useIsDesktop`, `useIsMobile`, `useIsTablet` |
| `hooks/useSharedDream.ts` | `generateInviteLink`, `broadcastControlSignal`, `broadcastCursorPosition`, `broadcastDataPacket`, `broadcastEdit`, `broadcastMediaSync`, `broadcastModeChange`, `broadcastPresenceUpdate` | `useSharedDream`, `PeerState`, `UseSharedDreamReturn`, `useSharedDream` |
| `hooks/useTap.ts` | `react` | `useHomeParticleTap`, `useTap`, `UseHomeParticleTapOptions`, `UseHomeParticleTapResult`, `UseTapOptions`, `UseTapResult`, `useHomeParticleTap`, `useTap` |
| `hooks/useTapHoldMove.ts` | `react`, `ModuleManifest`, `RuntimeId`, `canTransfer` | `useTapHoldMove`, `UseTapHoldMoveOptions`, `useTapHoldMove` |
| `hooks/useTick.ts` | `react` | `useTick`, `useTick` |
| `hooks/useViewCounter.ts` | `react` | `useViewCounter`, `useViewCounter` |
| `next-env.d.ts` | - | `next-env.d.ts` |
| `next.config.mjs` | - | `(default)` |
| `optimizer/babylon-optimizero.ts` | `CreativeCandidate`, `OptimizeroResult`, `OptimizeroWeights`, `ScoredCandidate`, `CreativeOptimizero`, `DEFAULT_WEIGHTS` | `BABYLON_HARD_CHECKS`, `BabylonOptimizeroScorers`, `BabylonUICandidate`, `BabylonUIGenerator`, `BabylonUIOptimizero` |
| `optimizer/constraint-solver.ts` | `Constraint`, `ConstraintSolverOptions`, `OptimizationItem`, `RankedItem` | `ConstraintSolver` |
| `optimizer/creative-optimizero.ts` | - | `CHAOS_WEIGHTS`, `CreativeCandidate`, `CreativeOptimizero`, `DEFAULT_WEIGHTS`, `HardFailCheck`, `OptimizeroResult`, `OptimizeroWeights`, `STABLE_WEIGHTS` |
| `optimizer/creative-validator.ts` | `CreativeOption`, `CreativeValidationResult`, `HardFailureReason`, `"]s*[` | `validateCreativeOption` |
| `optimizer/index.ts` | `ConstraintSolver`, `validateCreativeOption`, `Asset`, `Constraint`, `CreativeContext`, `CreativeOptimizerResult`, `CreativeOption`, `CreativeScore` | `ConstraintSolver`, `DreamOptimizer` |
| `optimizer/types.ts` | - | `Asset`, `Constraint`, `ConstraintPriority`, `ConstraintSolverOptions`, `CreativeContext`, `CreativeOptimizerResult`, `CreativeOption`, `CreativeScore` |
| `playwright.config.ts` | `@playwright/test` | `(default)` |
| `postcss.config.js` | - | `postcss.config.js` |
| `postcss.config.mjs` | - | `(default)` |
| `proxy.ts` | `next/server`, `next/server`, `createServerClientWithCustomCookies`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_URL`, `safeGetUser` | `config`, `proxy` |
| `public/dreamengin-sw.js` | - | `dreamengin-sw.js` |
| `public/workers/asset-optimizer.worker.js` | - | `asset-optimizer.worker.js` |
| `public/workers/engin-shader.worker.ts` | - | `engin-shader.worker.ts` |
| `repo-visualizer/analyzer.mjs` | `node:fs`, `node:path`, `node:child_process`, `node:url`, `"]([^`, `"]([^`, `"]([^`, `,` | `analyzer.mjs` |
| `repo-visualizer/server.mjs` | `node:http`, `node:fs`, `node:path`, `node:child_process`, `node:url` | `server.mjs` |
| `scripts/archive/validate-deployment.js` | `fs`, `path` | `validate-deployment.js` |
| `scripts/autofix-vercel-build.mjs` | `node:child_process`, `node:fs`, `node:path` | `autofix-vercel-build.mjs` |
| `scripts/center-audit.mjs` | `node:fs`, `node:path` | `center-audit.mjs` |
| `scripts/check-build-memory-drift.mjs` | `node:fs`, `node:path` | `check-build-memory-drift.mjs` |
| `scripts/check-engin-filenames.mjs` | `node:fs/promises`, `node:path`, `node:process`, `node:url` | `check-engin-filenames.mjs` |
| `scripts/check-licenses.mjs` | `node:child_process` | `check-licenses.mjs` |
| `scripts/check-orphans.mjs` | `node:fs`, `node:path`, `node:url`, `buildRegistry` | `check-orphans.mjs` |
| `scripts/check-root-hygiene.mjs` | `node:fs/promises`, `node:path`, `node:process`, `node:url` | `check-root-hygiene.mjs` |
| `scripts/contentengin/generate-test-assets.mjs` | `node:child_process`, `node:fs/promises`, `node:path`, `node:util` | `generate-test-assets.mjs` |
| `scripts/contentengin/validate-glb.mjs` | `node:fs` | `validate-glb.mjs` |
| `scripts/export-full-code.mjs` | `node:fs/promises`, `node:path`, `node:url` | `DEFAULT_EXCLUDED_BASENAMES`, `DEFAULT_EXCLUDED_DIRS`, `collectExportableFiles`, `exportFullCodeSnapshot`, `hasPrintableContent`, `isProbablyTextBuffer` |
| `scripts/feature-build/generate-features.mjs` | `fs`, `path`, `url` | `generate-features.mjs` |
| `scripts/fix-audit.js` | `fs`, `path`, `glob`, `lucide-react` | `fix-audit.js` |
| `scripts/gameengin/architect-run.ts` | - | `architect-run.ts` |
| `scripts/gameengin/artisan-run.ts` | `node:crypto`, `node:fs`, `node:path` | `artisan-run.ts` |
| `scripts/gameengin/lib/tar.ts` | `node:buffer` | `TarFile`, `packTar`, `unpackTar` |
| `scripts/gameengin/maestro-analyze.ts` | `node:child_process`, `node:fs`, `node:path` | `maestro-analyze.ts` |
| `scripts/gameengin/mechanic-run.ts` | `node:child_process`, `node:fs`, `node:path` | `mechanic-run.ts` |
| `scripts/gameengin/package-cartridge.ts` | `node:child_process`, `node:fs`, `node:path`, `node:zlib`, `file://${process.argv[1]}` | `PackResult`, `packageCartridge` |
| `scripts/gameengin/prophet-run.ts` | `node:fs`, `node:path` | `prophet-run.ts` |
| `scripts/gameengin/smoke-webgl.ts` | `CARTRIDGE_MANIFEST` | `smoke-webgl.ts` |
| `scripts/gameengin/smoke-webgpu.ts` | `CARTRIDGE_MANIFEST` | `smoke-webgpu.ts` |
| `scripts/gameengin/upgrader-run.ts` | `node:fs`, `node:path` | `upgrader-run.ts` |
| `scripts/gameengin/writer-run.ts` | `node:fs`, `node:path` | `writer-run.ts` |
| `scripts/generate-mobile-nextgen-spec.mjs` | `node:fs/promises`, `node:fs`, `node:path` | `generate-mobile-nextgen-spec.mjs` |
| `scripts/generate-mobile-ps5-spec.mjs` | `node:fs/promises`, `node:fs`, `node:path` | `generate-mobile-ps5-spec.mjs` |
| `scripts/generate-readme.ts` | `node:fs`, `node:path`, `buildProductReadmeSections`, `PRODUCT_SECTIONS` | `generate-readme.ts` |
| `scripts/generate-repo-state.mjs` | `node:fs`, `node:path`, `);         } else if (beforeFrom.startsWith(` | `generate-repo-state.mjs` |
| `scripts/generate-webapp-final-form.mjs` | `fs/promises`, `path`, `url`, `child_process`, ` : ` | `$`, `(default)`, `POST` |
| `scripts/optimize-dreamengin.mjs` | `fs`, `path`, `yaml` | `optimize-dreamengin.mjs` |
| `scripts/postbuild.js` | `node:fs`, `node:path` | `postbuild.js` |
| `scripts/postbuild.ts` | - | `postbuild.ts` |
| `scripts/readme-autosync.ts` | `node:fs`, `node:child_process`, `node:path`, `node:url` | `PRODUCT_SECTIONS`, `ProductReadmeResult`, `ProductSectionStats`, `buildProductReadmeSections`, `buildProductSections`, `renderProductSectionsMarkdown` |
| `scripts/repository-state-analysis-section.mjs` | - | `buildRepositoryStateAnalysisSection`, `extractRepositoryStateSnapshot` |
| `scripts/score-pass.cjs` | `fs`, `path`, `child_process` | `score-pass.cjs` |
| `scripts/spec-check.cjs` | `fs`, `path` | `spec-check.cjs` |
| `scripts/sync-build-memory.mjs` | `node:fs`, `node:path`, `"`]([^` | `name` |
| `scripts/update-bugs.mjs` | `child_process`, `fs`, `path`, `url` | `update-bugs.mjs` |
| `scripts/update-embed-feed.mjs` | `node:fs`, `node:path`, `node:url` | `update-embed-feed.mjs` |
| `scripts/update-handoff.mjs` | `child_process`, `fs`, `path`, `url` | `update-handoff.mjs` |
| `scripts/update-readme-status-utils.mjs` | - | `extractNodeMajorFromDockerfile`, `extractPnpmVersion`, `refreshCurrentImplementationStatusSection` |
| `scripts/update-readme.mjs` | `child_process`, `fs`, `path`, `url`, `extractNodeMajorFromDockerfile`, `extractPnpmVersion`, `refreshCurrentImplementationStatusSection` | `update-readme.mjs` |
| `scripts/vercel-ignore.cjs` | `node:child_process` | `vercel-ignore.cjs` |
| `scripts/vercel-preflight.cjs` | `fs`, `path` | `vercel-preflight.cjs` |
| `scripts/wire-orphans.mjs` | `node:fs`, `node:path`, `node:url`, `;   }    return ` | `$`, `OsArchitectureGraph`, `OsArchitectureMap`, `OsArchitectureStageEntries`, `OsGeneratedRouters`, `OsSlotCounts`, `buildRegistry`, `hydrateEngineRegistry` |
| `src/engin/generated/brain.ts` | - | `BrainMap`, `brain` |
| `src/engin/generated/cartridges.ts` | - | `CartridgesMap`, `cartridges` |
| `src/engin/generated/connectors.ts` | - | `ConnectorsMap`, `connectors` |
| `src/engin/generated/dreamdmbar.ts` | - | `DreamdmbarMap`, `dreamdmbar` |
| `src/engin/generated/dreamr.ts` | - | `DreamrMap`, `dreamr` |
| `src/engin/generated/dreamsurfaces.ts` | - | `DreamsurfacesMap`, `dreamsurfaces` |
| `src/engin/generated/engins.ts` | - | `EnginsMap`, `engins` |
| `src/engin/generated/homedream.ts` | - | `HomedreamMap`, `homedream` |
| `src/engin/generated/hooks.ts` | - | `HooksMap`, `hooks` |
| `src/engin/generated/index.ts` | `engins`, `rulesets`, `surfaces`, `dreamsurfaces`, `dreamr`, `dreamdmbar`, `homedream`, `connectors` | `OsArchitectureGraph`, `OsArchitectureMap`, `OsArchitectureStageEntries`, `OsGeneratedRouters`, `OsSlotCounts`, `hydrateEngineRegistry`, `osArchitectureFlow`, `osArchitectureGraph` |
| `src/engin/generated/osArchitectureMap.ts` | - | `OsArchitectureGraph`, `OsArchitectureMap`, `OsArchitectureStageEntries`, `OsGeneratedRouters`, `OsSlotCounts`, `osArchitectureFlow`, `osArchitectureGraph`, `osArchitectureMap` |
| `src/engin/generated/personas.ts` | - | `PersonasMap`, `personas` |
| `src/engin/generated/rulesets.ts` | - | `RulesetsMap`, `rulesets` |
| `src/engin/generated/surfaces.ts` | - | `SurfacesMap`, `surfaces` |
| `src/engin/generated/systems.ts` | - | `SystemsMap`, `systems` |
| `supabase/auth/nextRedirect.ts` | - | `buildLoginRedirectPath`, `resolveSafeNextPath` |
| `supabase/client/client.ts` | `@supabase/ssr`, `SUPABASE_CONFIG` | `createClient` |
| `supabase/client/safeGetUser.ts` | `@supabase/supabase-js` | `AUTH_GET_USER_TIMEOUT_MS`, `safeGetUser` |
| `supabase/config.ts` | - | `SUPABASE_CONFIG`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_URL`, `buildAuthCallbackUrl`, `getServerSiteOrigin`, `getSupabaseAuthCallbackUrl` |
| `supabase/realtime.ts` | `@supabase/supabase-js` | `DreamRHandle`, `DreamRPulse`, `DreamRSubscribeOptions`, `LiveMessage`, `LiveMessageHandle`, `LiveMessageSubscribeOptions`, `PresencePayload`, `PresenceState` |
| `supabase/server/serverClient.ts` | `Database` | `SupabaseCookieStore`, `createServerClient`, `createServiceClient` |
| `supabase/vector.ts` | `@supabase/supabase-js`, `toErrorMessage` | `ConsensusOutcome`, `ContentEmbeddingRow`, `EmbeddableContentType`, `LogConsensusParams`, `SimilarityResult`, `SimilaritySearchParams`, `TriadVote`, `UpsertEmbeddingParams` |
| `supabaseClient.ts` | `@supabase/supabase-js`, `Database` | `supabase` |
| `tailwind.config.ts` | - | `tailwind.config.ts` |
| `tailwindcss-animate.d.ts` | `tailwindcss` | `tailwindcss-animate.d.ts` |
| `tests/activity-first-protocol.test.ts` | `vitest` | `activity-first-protocol.test.ts` |
| `tests/activity-revenue-split.test.ts` | `vitest`, `ACTIVITY_REVENUE_SPLIT`, `calculateActivityRevenueSplit`, `validateActivityRevenueSplit` | `activity-revenue-split.test.ts` |
| `tests/admin-lockout.test.ts` | `vitest`, `isOwner`, `isDomainBlocked`, `OWNER_EMAIL` | `admin-lockout.test.ts` |
| `tests/admin-upgrade-readiness.test.ts` | `vitest`, `DaydreamEnginManifest`, `buildPatchPlanChecklist`, `createUpgradeReadinessSnapshot`, `selectNextUpgradeTarget`, `summarizeBuildReadiness`, `summarizeSetupChecks`, `SetupCheck` | `admin-upgrade-readiness.test.ts` |
| `tests/agent-bus-consensus.test.ts` | `vitest`, `(dynamic import)`, `(dynamic import)` | `agent-bus-consensus.test.ts` |
| `tests/ai-edit-engine.test.ts` | `vitest`, `parseAiInstruction`, `wordBoundsAt`, `lineBoundsAt`, `blockBoundsAt`, `functionBoundsAt`, `buildEditPreview`, `applyMatchesForCell` | `ai-edit-engine.test.ts` |
| `tests/api-route-body-guard.test.ts` | `vitest`, `fs`, `path` | `api-route-body-guard.test.ts` |
| `tests/asset-optimizer.test.ts` | `Database`, `vitest`, `registryTagsForContext`, `(dynamic import)` | `asset-optimizer.test.ts` |
| `tests/auth-providers-route.test.ts` | `vitest`, `(dynamic import)` | `auth-providers-route.test.ts` |
| `tests/auth-update-password-page.test.ts` | `vitest`, `fs`, `path` | `auth-update-password-page.test.ts` |
| `tests/authenticated-ui-shells.test.ts` | `vitest`, `fs`, `path`, `(default)` | `authenticated-ui-shells.test.ts` |
| `tests/babylon-optimizero.test.ts` | `vitest`, `BabylonUIOptimizero`, `BabylonOptimizeroScorers`, `BabylonUIGenerator`, `BABYLON_HARD_CHECKS`, `BabylonUICandidate`, `DEFAULT_WEIGHTS`, `CHAOS_WEIGHTS` | `babylon-optimizero.test.ts` |
| `tests/babylon-webgpu-engine.test.ts` | `vitest`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)` | `babylon-webgpu-engine.test.ts` |
| `tests/bar-hide-preserves-both-runtimes.test.ts` | `vitest`, `DIVIDER_H` | `bar-hide-preserves-both-runtimes.test.ts` |
| `tests/boogie-policy-module.test.ts` | `vitest`, `boogieEvaluate`, `emitBoogieManEvent`, `onBoogieManEvent`, `PolicyCategory`, `PolicySeverity`, `BOOGIE_POLICY_VERSION`, `PolicyResult` | `boogie-policy-module.test.ts` |
| `tests/boogieman.test.ts` | `vitest`, `boogieEvaluate`, `boogieEnforce`, `computeRiskScore`, `selectAction`, `BOOGIE_POLICY_VERSION`, `CONTAINMENT_ACTIONS`, `BLAST_RADIUS_ESCALATION_THRESHOLD` | `boogieman.test.ts` |
| `tests/bot-detector.test.ts` | `vitest`, `TouchPoint`, `isLikelyBot`, `isSwipeBot`, `scoreBotLikelihood`, `scoreSwipePath` | `bot-detector.test.ts` |
| `tests/branding-logos.test.ts` | `vitest`, `getRandomLogo`, `resetLogoCache`, `LOGO_PATHS` | `branding-logos.test.ts` |
| `tests/canonical-naming-enforcement.test.ts` | `node:fs`, `node:path`, `vitest` | `canonical-naming-enforcement.test.ts` |
| `tests/child-safety.test.ts` | `vitest`, `scanContent`, `isZeroTolerance`, `classifyImage`, `scanMediaUrlsForChildSafety`, `isImageUrl`, `(dynamic import)`, `evaluateMessageContext` | `child-safety.test.ts` |
| `tests/code-dream-preview.test.ts` | `vitest`, `detectLanguageFromCode`, `generateCodeFromCommand`, `detectNLCommand`, `parseCodeResponse`, `matchCodeVocabulary`, `CellLanguage`, `player` | `code-dream-preview.test.ts` |
| `tests/coercion-table.test.ts` | `vitest`, `node:fs`, `node:path` | `coercion-table.test.ts` |
| `tests/collector-extended.test.ts` | `vitest` | `collector-extended.test.ts` |
| `tests/compositeengin-features.test.ts` | `vitest` | `compositeengin-features.test.ts` |
| `tests/conform-memory-map.test.ts` | `vitest`, `MEMORY_SIZE`, `CACHE_LINE`, `ENTITY_COUNT`, `BAR_SEAM_ATOMICS_INDEX`, `BAR_SEAM_SCALE`, `SOA_POSX_OFFSET`, `SOA_POSY_OFFSET` | `conform-memory-map.test.ts` |
| `tests/connector-delivery.test.ts` | `vitest`, `DELIVERY_STRATEGY_MATRIX`, `getDeliveryStrategy`, `supportsWebhook`, `supportsPoll`, `supportsWebhookVerification`, `knownDeliveryProviders`, `extractYouTubeWebSubChallenge` | `connector-delivery.test.ts` |
| `tests/connectors.test.ts` | `vitest`, `CONNECTOR_REGISTRY`, `getConnectorDef`, `stripHtml`, `hostFromUrl`, `atUriToHttps`, `normaliseMastodon`, `normaliseBluesky` | `connectors.test.ts` |
| `tests/content-intelligence-routes.test.ts` | `vitest`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)` | `content-intelligence-routes.test.ts` |
| `tests/content-publish-intent.test.ts` | `vitest`, `formatPublishError`, `publishToDreamR`, `resolvePublishIntent` | `content-publish-intent.test.ts` |
| `tests/contentengin-features.test.ts` | `vitest`, `(dynamic import)`, `next/server`, `(dynamic import)`, `next/server`, `(dynamic import)`, `next/server`, `(dynamic import)` | `contentengin-features.test.ts` |
| `tests/contentengin/assetviewport-pickmode.test.ts` | `fs`, `vitest` | `assetviewport-pickmode.test.ts` |
| `tests/contentengin/contentengin-api.test.ts` | `vitest`, `zlib`, `analyzeImageBytes` | `contentengin-api.test.ts` |
| `tests/contentengin/contentengin-export.test.ts` | `vitest`, `buildAsset`, `createGlbBuffer`, `expectedMaterialIdsForAsset`, `inspectGlb`, `safeSegment`, `validateAsset` | `contentengin-export.test.ts` |
| `tests/contentengin/contentengin-glb-import.test.ts` | `vitest`, `CONTENTENGIN_GLB_UPLOAD_LIMIT_BYTES`, `importGLBToEditableMesh` | `contentengin-glb-import.test.ts` |
| `tests/contentengin/contentengin-grammars.test.ts` | `vitest`, `buildAsset` | `contentengin-grammars.test.ts` |
| `tests/contentengin/contentengin-recipes.test.ts` | `vitest`, `buildAsset`, `seededRandom` | `contentengin-recipes.test.ts` |
| `tests/contentengin/contentengin-rigging.test.ts` | `vitest`, `addRigBendPoint`, `createAutoRigState`, `exportGLB`, `createSkeleton`, `validateSkeleton` | `contentengin-rigging.test.ts` |
| `tests/contentengin/contentengin-validation.test.ts` | `vitest`, `buildAsset`, `validateAsset`, `PartNode` | `contentengin-validation.test.ts` |
| `tests/contextual-home.test.ts` | `vitest`, `HOME_BOTTOM_THRESHOLD`, `HOME_TOP_THRESHOLD`, `resolveHomeTarget`, `runHomeAction` | `contextual-home.test.ts` |
| `tests/creative-optimizero.test.ts` | `vitest`, `CreativeOptimizero`, `DEFAULT_WEIGHTS`, `CHAOS_WEIGHTS`, `STABLE_WEIGHTS`, `STANDARD_UI_HARD_CHECKS`, `createUIOptimizero`, `CreativeCandidate` | `creative-optimizero.test.ts` |
| `tests/data-transform-extended.test.ts` | `vitest` | `data-transform-extended.test.ts` |
| `tests/data-transform.test.ts` | `vitest`, `applyPhysicsFilter`, `DATA_PHYSICS`, `decodeFromLedger`, `encodeToLedger` | `data-transform.test.ts` |
| `tests/daydream-engin-routes.test.ts` | `vitest`, `fs`, `path` | `daydream-engin-routes.test.ts` |
| `tests/decide-bar-release.test.ts` | `vitest`, `BAR_FLING_LINE_RATIO`, `BAR_FLING_TO_BOTTOM_VELOCITY_THRESHOLD_PX_PER_MS`, `BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS`, `decideBarRelease` | `decide-bar-release.test.ts` |
| `tests/dev-bypass.test.ts` | `vitest`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)` | `dev-bypass.test.ts` |
| `tests/diff-viewer.test.ts` | `vitest`, `parseUnifiedDiff`, `buildFullFileLines`, `buildScrollMarkers`, `firstHunkIndex`, `nextHunkIndex`, `prevHunkIndex`, `DEMO_DIFF` | `Foo` |
| `tests/dr-eams-code-assist.test.ts` | `vitest`, `matchCodeVocabulary`, `detectLanguageFromCode`, `classifyQuery`, `parseCodeResponse`, `detectNLCommand`, `generateCodeFromCommand`, `buildCodeSystemPrompt` | `dr-eams-code-assist.test.ts` |
| `tests/dr-eams-search-bar.test.ts` | `vitest`, `buildDreamDMUrl`, `buildDrEamsRequest`, `matchNavSuggestions`, `NAV_SUGGESTIONS`, `parseDrEamsReply`, `truncatePreview` | `dr-eams-search-bar.test.ts` |
| `tests/dream-bar-context.test.ts` | `vitest`, `detectSurface`, `DreamBarSurface` | `dream-bar-context.test.ts` |
| `tests/dream-continuity-spine.test.ts` | `vitest`, `resolveResumeDest`, `formatArtifactKind`, `getArtifactAccent`, `ForgeActivityPulse` | `dream-continuity-spine.test.ts` |
| `tests/dream-effects.test.ts` | `vitest`, `fs`, `path`, `useGsapEntrance` | `dream-effects.test.ts` |
| `tests/dream-intent-bus.test.ts` | `vitest`, `dreamOSBus`, `dispatchDreamIntent`, `registerDreamIntentHandler` | `dream-intent-bus.test.ts` |
| `tests/dream-os-bus.test.ts` | `vitest`, `bridge`, `dreamOSBus`, `deriveAIRuntimeContext`, `getCapabilitiesForDomains`, `getCapabilityChildren`, `getCapabilityDescriptor` | `dream-os-bus.test.ts` |
| `tests/dream-state.test.ts` | `vitest`, `createInitialDreamState`, `move`, `returnHome`, `zoom` | `dream-state.test.ts` |
| `tests/dream-window-system.test.ts` | `vitest`, `DREAM_WINDOW_STATES`, `bindDreamWindow`, `mountDreamWindow`, `collapseDreamWindow`, `activateDreamWindow`, `unmountDreamWindow`, `unbindDreamWindow` | `dream-window-system.test.ts` |
| `tests/dreamdm-bar-intent.test.ts` | `vitest`, `detectSurface`, `resolveIntentOverride`, `DEFAULT_BAR_INTENT`, `BarIntentMode`, `BarIntent` | `dreamdm-bar-intent.test.ts` |
| `tests/dreamdm-bar-interactions.test.ts` | `vitest`, `BAR_FLING_TO_TOP_MIN_DRAG_PX`, `BAR_FLING_TO_TOP_VELOCITY_THRESHOLD_PX_PER_MS`, `GOLD_TAP_SLOP_PX`, `resolveGoldTapAction`, `shouldCollapseGoldSwipe`, `shouldCollapseTopExpandedDrag`, `shouldSnapBottomDragToTop` | `dreamdm-bar-interactions.test.ts` |
| `tests/dreamdm-bar-wild.test.ts` | `vitest`, `getMoodPeriod`, `MOOD_AURA_GRADIENTS`, `MOOD_EDGE_COLORS`, `SURFACE_ACCENT_COLORS`, `filterSlashCommands`, `SLASH_COMMANDS`, `computeTypingRhythm` | `dreamdm-bar-wild.test.ts` |
| `tests/dreamdm-draft.test.ts` | `vitest` | `dreamdm-draft.test.ts` |
| `tests/dreamdm-messaging-phase2.test.ts` | `vitest` | `dreamdm-messaging-phase2.test.ts` |
| `tests/dreamengin-os.test.ts` | `vitest`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)` | `dreamengin-os.test.ts` |
| `tests/dreamengin-superiority/dreamengin-competitive-workflow-gate.test.ts` | `vitest`, `node:fs`, `node:path` | `dreamengin-competitive-workflow-gate.test.ts` |
| `tests/dreamengin-unfakeable-performance-integrity.gate.test.ts` | `vitest`, `node:fs` | `runCanonicalPerformanceBenchmarks` |
| `tests/dreamnav.tau.test.ts` | `vitest`, `tau`, `transition`, `NavState` | `dreamnav.tau.test.ts` |
| `tests/dreamr-algorithm-velocity.test.ts` | `vitest`, `computeViewVelocity`, `scoreViewVelocity`, `dominantSignal`, `DREAMR_REASONS`, `DREAMR_WEIGHTS`, `scoreDreamRPost`, `rankFeed` | `dreamr-algorithm-velocity.test.ts` |
| `tests/dreamr-algorithm.test.ts` | `vitest`, `scoreContentDepth`, `scoreOriginalMedia`, `scoreDreamenginMade`, `scoreTextRichness`, `scoreFreshness`, `scoreTrendImpact`, `scoreDreamRPost` | `dreamr-algorithm.test.ts` |
| `tests/dreamr-feed-limits.test.ts` | `vitest` | `dreamr-feed-limits.test.ts` |
| `tests/dreamr-feed-topics.test.ts` | `vitest`, `DREAMR_TOPICS` | `dreamr-feed-topics.test.ts` |
| `tests/dreamr-page-route.test.ts` | `vitest`, `fs`, `path`, `(default)` | `dreamr-page-route.test.ts` |
| `tests/dreamr-swipe-personalization.test.ts` | `vitest`, `contentTypePreferenceKey`, `canRecordDreamRView`, `emptyDreamRSwipePreferences`, `nextSwipePreferences`, `personalizeFeedOrder`, `shouldRecordDreamRView`, `DreamRSwipePost` | `dreamr-swipe-personalization.test.ts` |
| `tests/dreamr-visibility-cursor.test.ts` | `vitest`, `filterByCloseFriends`, `parseFeedParams`, `deriveNextCursor`, `MAX_SEEN_IDS` | `dreamr-visibility-cursor.test.ts` |
| `tests/dreamspace-panel.test.ts` | `vitest`, `fs`, `path`, `buildRecentDestinations`, `getAppRoute` | `dreamspace-panel.test.ts` |
| `tests/drop-target-registry.test.ts` | `vitest` | `drop-target-registry.test.ts` |
| `tests/dual-runtime-bridge-peer-activity.test.ts` | `vitest`, `bridge` | `dual-runtime-bridge-peer-activity.test.ts` |
| `tests/durable-bridge.test.ts` | `vitest`, `bridge` | `durable-bridge.test.ts` |
| `tests/e2e/demo.spec.ts` | `@playwright/test` | `demo.spec.ts` |
| `tests/e2e/full-coverage.spec.ts` | `@playwright/test` | `full-coverage.spec.ts` |
| `tests/edit-profiledream-section7.test.ts` | `node:fs`, `node:path`, `vitest` | `edit-profiledream-section7.test.ts` |
| `tests/engin-capability-targets.test.ts` | `vitest`, `AudioTrackMixer`, `GeometryBatcher`, `MidiEventRingBuffer`, `ParticleSoAKernel`, `RayGridAccelerator`, `createEnginCapabilityExecutionKernel`, `CANONICAL_ENGIN_IDS` | `engin-capability-targets.test.ts` |
| `tests/engin-dispatcher-glow.test.ts` | `vitest`, `EnginDispatcher` | `engin-dispatcher-glow.test.ts` |
| `tests/engin-dispatcher.test.ts` | `vitest`, `fs`, `path`, `ENTITY_COUNT`, `MAX_WORKERS`, `SAB_BYTES`, `OFFSET_POS_X`, `OFFSET_POS_Y` | `engin-dispatcher.test.ts` |
| `tests/engin-hot-runtime-wiring.test.ts` | `vitest`, `AssetManifestLoader`, `BrandCollaborationDeltaPacker`, `BrandFileHydrator`, `BrandLocalApplyQueue`, `BrandPatchLog`, `BrandSdfGlyphAtlas`, `BrandVectorPathCache` | `engin-hot-runtime-wiring.test.ts` |
| `tests/engin-runtime-core.test.ts` | `vitest`, `createBaseState`, `patchBaseState`, `gateCapability`, `mergeCapabilities`, `DEFAULT_USER_CAPABILITIES`, `DENY_ALL`, `MemoryAdapter` | `engin-runtime-core.test.ts` |
| `tests/engin-workflow.test.ts` | `vitest` | `engin-workflow.test.ts` |
| `tests/enginpipe/manifest.test.ts` | `vitest`, `EnginArtifactManifestSchema`, `parseManifest`, `safeParseManifest`, `createManifest` | `manifest.test.ts` |
| `tests/enginpipe/telemetry.test.ts` | `@supabase/supabase-js`, `vitest`, `parseTelemetryEvent`, `TelemetryEventTypeSchema`, `createTelemetryClient`, `TelemetrySupabaseClient` | `telemetry.test.ts` |
| `tests/enginpipe/tiers.test.ts` | `vitest`, `DEFAULT_TIER_CONFIG`, `detectCapabilityTier`, `getTierConfig`, `scoreCapabilities`, `tierFromScore` | `tiers.test.ts` |
| `tests/example.spec.ts` | `@playwright/test` | `example.spec.ts` |
| `tests/export-full-code.test.ts` | `node:fs`, `node:fs/promises`, `node:path`, `node:os`, `vitest` | `export-full-code.test.ts` |
| `tests/feature-build.test.ts` | `vitest`, `FEATURE_MANIFESTS`, `getManifest`, `DaydreamEnginManifest`, `getBuildPhase`, `calculateProgress`, `countFeaturesByStatus`, `countUsableFeatures` | `feature-build.test.ts` |
| `tests/forge-build.test.ts` | `vitest`, `path`, `fs`, `saveForgeBuild`, `readForgeBuilds`, `clearForgeBuilds`, `canBuildToday`, `recordBuildToday` | `useForgeBuild`, `(default)`, `ForgeArtifact`, `ForgeArtifactType`, `POST`, `canBuildToday`, `clearForgeBuilds`, `isForgeLogEvent` |
| `tests/forge-engin.test.ts` | `vitest`, `ENGIN_REGISTRY`, `CREATIVE_ENGINES`, `FORGE_WORKFLOWS`, `recordForgeActivity`, `readForgeActivity`, `getForgeHeat`, `formatRelativeTime` | `forge-engin.test.ts` |
| `tests/forge-momentum.test.ts` | `vitest`, `computeVelocity`, `computeDiversity`, `computeStreak`, `computeDepth`, `computeMomentum`, `getLevel`, `getLevelColor` | `forge-momentum.test.ts` |
| `tests/forge-nexus.test.ts` | `vitest`, `buildTransitionMap`, `computeEdges`, `computeNodes`, `detectClusters`, `findDominantPipeline`, `computeNexus`, `CREATIVE_ENGINES` | `forge-nexus.test.ts` |
| `tests/forge-rituals.test.ts` | `vitest`, `getTimeBucket`, `detectTimePatterns`, `detectSequencePatterns`, `detectSessionPatterns`, `detectAffinityPatterns`, `computeRituals`, `FORGE_HISTORY_KEY` | `forge-rituals.test.ts` |
| `tests/fusion-cartridges-depth.test.ts` | `node:fs`, `node:path`, `vitest` | `ParticlePool`, `ScreenShake`, `drawDitherFog`, `prefersReducedMotion` |
| `tests/fusion-cartridges.test.ts` | `node:fs`, `node:path`, `vitest`, `CARTRIDGE_MANIFEST`, `CARTRIDGE_LOADERS` | `(default)` |
| `tests/game-controller.test.ts` | `node:fs`, `node:path`, `vitest`, `computeLeftStickVector`, `LEFT_STICK_RADIUS_PX`, `LEFT_STICK_DEAD_ZONE`, `evaluateRightStickTap`, `computeAimDelta` | `game-controller.test.ts` |
| `tests/game-engin-ruleset.test.ts` | `vitest`, `createBaseState`, `GAME_ENGIN_RULE_SET`, `GRAVITY_VALUES`, `GameEnginAction`, `GameScore`, `EnginBaseState` | `game-engin-ruleset.test.ts` |
| `tests/game-navigation.test.ts` | `node:fs`, `node:path`, `vitest`, `buildLoginRedirectPath`, `resolveSafeNextPath`, `buildAuthCallbackUrl`, `upsertSavedGameSession`, `buildGameLaunchHref` | `game-navigation.test.ts` |
| `tests/game-performance-baseline.test.ts` | `vitest`, `createPerformanceBaselineSampler`, `resolveRendererBackend` | `game-performance-baseline.test.ts` |
| `tests/game-quality-plan.test.ts` | `node:fs`, `node:path`, `vitest`, `ADVANCED_GAME_TARGETS`, `GAME_CONTROL_PROFILES`, `GAME_ENGINE_STANDARDS`, `GAME_QUALITY_PILLARS` | `game-quality-plan.test.ts` |
| `tests/game-remote-regression.test.ts` | `node:fs`, `node:path`, `vitest`, `(default)`, `(default)` | `game-remote-regression.test.ts` |
| `tests/gameengin-architect.test.ts` | `vitest`, `node:fs`, `node:path`, `BRAIN_ROOT`, `listConceptPatterns`, `listVisionStatements`, `readVisionStatement`, `recordVisionStatement` | `gameengin-architect.test.ts` |
| `tests/gameengin-asset-pipeline.test.ts` | `vitest`, `assertValidBundleManifest`, `bundleWeightBytes`, `GameEnginBundleManifest`, `planBundleCache`, `GameEnginShaderRegistry` | `gameengin-asset-pipeline.test.ts` |
| `tests/gameengin-cartridges.test.ts` | `vitest`, `node:fs`, `node:path`, `CARTRIDGE_MANIFEST`, `getCartridgeManifest`, `getCartridgeCategories`, `CARTRIDGE_LOADERS`, `getCartridgeIds` | `gameengin-cartridges.test.ts` |
| `tests/gameengin-crash-modal.test.ts` | `vitest`, `CRASH_REPORT_MAX_BYTES`, `CRASH_REPORT_MAX_BYTES`, `CartridgeErrorBoundary`, `(dynamic import)` | `gameengin-crash-modal.test.ts` |
| `tests/gameengin-input-router.test.ts` | `vitest`, `GameRuntimeInputRouter`, `CartridgeInputEvent` | `gameengin-input-router.test.ts` |
| `tests/gameengin-loop.test.ts` | `vitest`, `node:fs`, `node:path`, `BRAIN_ROOT`, `readActiveProjects`, `setActiveProjects`, `isActiveCartridge`, `recordCrashReport` | `gameengin-loop.test.ts` |
| `tests/gameengin-power-systems.test.ts` | `vitest` | `gameengin-power-systems.test.ts` |
| `tests/gameengin-progression.test.ts` | `vitest`, `node:fs`, `node:path`, `BRAIN_ROOT`, `listGenres`, `readGenreDNA`, `readProgressionModel`, `listStructuralMechanics` | `gameengin-progression.test.ts` |
| `tests/gameengin-remote.test.ts` | `vitest`, `PORTRAIT_LAYOUT`, `LANDSCAPE_LAYOUT`, `LEFT_JOYSTICK_RADIUS_MM`, `RIGHT_JOYSTICK_RADIUS_MM`, `RIGHT_JOYSTICK_RADIUS_RATIO`, `HUD_ALLOWED_ELEMENTS`, `isHudElementAllowed` | `gameengin-remote.test.ts` |
| `tests/gameengin-runtime-upgrade.test.ts` | `vitest`, `GAMEENGIN_FRAME_BUDGETS`, `GameEnginFrameClock`, `decideRuntimeQuality` | `gameengin-runtime-upgrade.test.ts` |
| `tests/gameengin-spec.test.ts` | `vitest`, `node:fs`, `node:path`, `CARTRIDGE_MAGIC`, `hasCartridgeMagic`, `validateManifest`, `parseDreamrArchive`, `BRAIN_ROOT` | `gameengin-spec.test.ts` |
| `tests/games-daydream-page-auth.test.ts` | `vitest`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)` | `games-daydream-page-auth.test.ts` |
| `tests/god-tier-engine.test.ts` | `vitest`, `RingAverage`, `maxAssumptionBoot`, `framePressureShield`, `fidelityScaler`, `heroObjectImportance`, `eliteMeshPolicy`, `cinematicMotionStack` | `god-tier-engine.test.ts` |
| `tests/hero-sprite.test.ts` | `vitest`, `hitZone`, `ZONE_QUOTES`, `pickZoneQuote` | `hero-sprite.test.ts` |
| `tests/home-feed-home.test.ts` | `node:fs`, `node:path`, `vitest`, `DIVIDER_H` | `home-feed-home.test.ts` |
| `tests/homedream-page-auth.test.ts` | `vitest`, `(dynamic import)`, `(dynamic import)` | `homedream-page-auth.test.ts` |
| `tests/i-engine-runtime.test.ts` | `vitest`, `DEFAULT_DUAL_RUNTIME`, `IntentBus`, `SpatialRuntimeCore`, `authorizeCapability`, `createIntentPacket`, `createRuntimeObject`, `dualRuntimeManifest` | `i-engine-runtime.test.ts` |
| `tests/icons.test.ts` | `vitest`, `COLS`, `ROWS`, `FRAME_W`, `FRAME_H`, `ICONS`, `ICON_ENTRIES`, `getIconPos` | `icons.test.ts` |
| `tests/idari-admin-guard.test.ts` | `vitest` | `idari-admin-guard.test.ts` |
| `tests/idari-observability-loop.test.ts` | `vitest`, `collectLog`, `collectMetric`, `collectTrace`, `getSnapshot`, `getBufferStats`, `clearBuffers`, `LogEntry` | `idari-observability-loop.test.ts` |
| `tests/idari-patch-plan.test.ts` | `vitest`, `createPatchPlan`, `createKnownIssue`, `updateKnownIssueStatus`, `evaluateSpecRequirements`, `createVercelBuildResult`, `VERCEL_2026_RUNTIME`, `assessGenerationLawScope` | `idari-patch-plan.test.ts` |
| `tests/instance-manager.test.ts` | `vitest`, `node:fs`, `node:path` | `instance-manager.test.ts` |
| `tests/integration-wiring.test.ts` | `node:fs`, `node:path`, `vitest`, `ENGIN_REGISTRY`, `CREATIVE_ENGINES`, `(default)`, `, () => {     expect(workspaceDashboardSrc).not.toContain(` | `integration-wiring.test.ts` |
| `tests/is-auth-related-error.test.ts` | `vitest`, `isAuthRelatedError` | `is-auth-related-error.test.ts` |
| `tests/journey-insights.test.ts` | `vitest`, `JourneyDot`, `findFirstOccurrenceIds`, `computeCurrentStreak`, `computeWeeklyFrequency`, `detectReturnGaps`, `annotateDotsWithInsights`, `RETURN_GAP_DAYS` | `journey-insights.test.ts` |
| `tests/journey.test.ts` | `vitest`, `JourneyDot`, `JourneyTimeGroup`, `JOURNEY_DOMAIN_COLORS` | `journey.test.ts` |
| `tests/lab-dream-split.test.ts` | `vitest`, `detectLanguageFromCode`, `generateCodeFromCommand`, `detectNLCommand`, `parseCodeResponse`, `;     expect(detectLanguageFromCode(code)).toBe('python');   });    it('detects bash shell script', () => {     const code = ` | `lab-dream-split.test.ts` |
| `tests/lab-section-12-spec.test.ts` | `vitest`, `fs`, `path` | `lab-section-12-spec.test.ts` |
| `tests/landing-calibration.test.ts` | `fs`, `path`, `vitest` | `landing-calibration.test.ts` |
| `tests/landing-mission-link.test.ts` | `fs`, `path`, `vitest` | `landing-mission-link.test.ts` |
| `tests/ledger-media.test.ts` | `vitest`, `analyzeLedgerDensity`, `buildLedgerMediaUrl`, `decodeFromLedger`, `decodeLedgerBlob`, `decodeLedgerStringToUint8Array`, `encodeBlobToLedger`, `encodeToLedger` | `ledger-media.test.ts` |
| `tests/live-feed.test.ts` | `vitest`, `FeedPost` | `live-feed.test.ts` |
| `tests/madmaxi-accessibility-tuning.test.ts` | `node:fs`, `node:path`, `vitest` | `madmaxi-accessibility-tuning.test.ts` |
| `tests/madmaxi-authored-levels.test.ts` | `vitest`, `ZONES`, `getMadmaxiLevelDefinition`, `isMadmaxiAuthoredLevel`, `isMadmaxiAuthoredLevel` | `madmaxi-authored-levels.test.ts` |
| `tests/madmaxi-mechanics.test.ts` | `vitest`, `MADMAXI_ENEMY_KINDS`, `MADMAXI_POWERUP_KINDS`, `MADMAXI_SUPER_SECONDS`, `MADMAXI_SUPER_STREAK`, `getEnemyKindForIndex`, `getMadmaxiLevelDefinition`, `getMadmaxiEnemyCount` | `madmaxi-mechanics.test.ts` |
| `tests/mobile-game-controls.test.ts` | `node:fs`, `node:path`, `vitest`, `getRemoteMoveAction`, `MOBILE_HUD_BUTTON_RING`, `normalizeStickVector`, `GAME_CATALOG` | `mobile-game-controls.test.ts` |
| `tests/modular-os-stores.test.ts` | `vitest`, `hideArtifact`, `listSystemArtifacts`, `listVisibleArtifacts`, `loadArtifacts`, `restoreArtifact`, `saveArtifact`, `loadActiveModules` | `modular-os-stores.test.ts` |
| `tests/module-registry.test.ts` | `node:fs`, `node:path`, `vitest`, `(dynamic import)`, `(dynamic import)` | `module-registry.test.ts` |
| `tests/music-starmaker-section10.test.ts` | `vitest`, `node:fs`, `node:path` | `music-starmaker-section10.test.ts` |
| `tests/namespace-isolation.test.ts` | `vitest`, `fs`, `path` | `namespace-isolation.test.ts` |
| `tests/navigation/manifold-physics.spec.ts` | `@playwright/test`, `(require)`, `(require)`, `(require)`, `(require)`, `(require)`, `(require)`, `(require)` | `manifold-physics.spec.ts` |
| `tests/navigation/navigation.spec.ts` | `@playwright/test` | `navigation.spec.ts` |
| `tests/navigation/quaternion.spec.ts` | `@playwright/test`, `(require)`, `(require)`, `(require)`, `(require)`, `(require)`, `(require)`, `(require)` | `quaternion.spec.ts` |
| `tests/neural-seam-flow.test.ts` | `vitest`, `SEAM_CHANNEL_COLORS`, `SEAM_DEFAULT_COLOR`, `channelColor`, `createSeamParticle`, `createIdleParticle`, `tickParticles`, `isParticleDead` | `neural-seam-flow.test.ts` |
| `tests/notifications.test.ts` | `vitest`, `applyOptimisticDelete`, `applyOptimisticMarkAll`, `applyOptimisticRead`, `extractNotificationMessage`, `getNotificationActionUrl`, `getNotificationTitle`, `getUnreadCount` | `notifications.test.ts` |
| `tests/offline-queue.test.ts` | `vitest` | `offline-queue.test.ts` |
| `tests/optimizer.test.ts` | `vitest`, `ConstraintSolver`, `DreamOptimizer`, `validateCreativeOption`, `OptimizerConfig`, `FeedItem`, `WidgetPriority`, `SearchResult` | `optimizer.test.ts` |
| `tests/orphan-wire-script.test.ts` | `vitest`, `(dynamic import)` | `orphan-wire-script.test.ts` |
| `tests/os-subsystem-manifest.test.ts` | `vitest`, `DREAMENGIN_OS_SUBSYSTEM_MANIFEST`, `buildDreamenginOSSubsystemManifest` | `os-subsystem-manifest.test.ts` |
| `tests/page-surface-wiring.test.ts` | `vitest`, `fs`, `path` | `page-surface-wiring.test.ts` |
| `tests/performance-hot-paths.test.ts` | `vitest`, `InterVMChannel`, `createTelemetryClient`, `ChunkScheduler`, `EventualConsistencyBridge`, `WorldStateCRDT`, `CRDTRecord` | `performance-hot-paths.test.ts` |
| `tests/phase6-privacy-idari.test.ts` | `vitest`, `zod` | `phase6-privacy-idari.test.ts` |
| `tests/phase7-naming.test.ts` | `vitest`, `PLATFORM_NAME`, `PRODUCT_DESCRIPTION`, `REJECTED_PLATFORM_VARIANTS`, `CORE_SURFACES`, `CORE_SURFACE_ROUTES`, `DAYDREAM_DOMAINS`, `ENGIN_SURFACES` | `phase7-naming.test.ts` |
| `tests/phase8a.test.ts` | `vitest`, `CANONICAL_NAV_ROUTES` | `phase8a.test.ts` |
| `tests/phase8b-dream-windows.test.ts` | `vitest`, `DREAM_WINDOW_STATES`, `bindDreamWindow`, `mountDreamWindow`, `collapseDreamWindow`, `activateDreamWindow`, `unmountDreamWindow`, `unbindDreamWindow` | `DELETE`, `GET`, `POST` |
| `tests/phase8e-orders.test.ts` | `vitest`, `fs`, `path` | `phase8e-orders.test.ts` |
| `tests/phase8e-shop-marketplace.test.ts` | `vitest`, `fs`, `path`, `SHOP_TABLE`, `SHOP_ORDERS_TABLE`, `SHOP_LISTING_REQUIRED_FIELDS`, `SHOP_TITLE_MAX_LENGTH`, `SHOP_PRICE_MIN` | `phase8e-shop-marketplace.test.ts` |
| `tests/phase8f-daydream-activation.test.ts` | `vitest`, `fs`, `path` | `phase8f-daydream-activation.test.ts` |
| `tests/phase8f-daydream-network.test.ts` | `vitest`, `fs`, `path`, `, () => {     const src = readSource(hookFile);     expect(src).toContain("` | `useDaydreamPersistence`, `useDaydreamPersistence` |
| `tests/phase8g-dual-runtime-persistence.test.ts` | `vitest`, `fs`, `path` | `phase8g-dual-runtime-persistence.test.ts` |
| `tests/phase8h-triad-consensus.test.ts` | `vitest`, `fs`, `path`, `child_process` | `phase8h-triad-consensus.test.ts` |
| `tests/phase8i-settings-persistence.test.ts` | `vitest`, `fs`, `path` | `GET`, `POST` |
| `tests/phase9-adaptive-quality.test.ts` | `vitest`, `AdaptiveQualityController`, `getQualityProfile`, `resolveQualityTier`, `DeviceSignals`, `QualityTier` | `phase9-adaptive-quality.test.ts` |
| `tests/phase9-cross-post.test.ts` | `vitest`, `buildCrossPostTargets`, `formatShareText`, `buildDreamOgMeta`, `DreamSharePayload`, `(dynamic import)` | `phase9-cross-post.test.ts` |
| `tests/phase9-drag-drop.test.ts` | `vitest`, `classifyFile`, `isAcceptedFile`, `ASSET_IMPORT_EVENT`, `AssetCategory` | `phase9-drag-drop.test.ts` |
| `tests/phase9-hashtags.test.ts` | `vitest`, `extractHashtags`, `validateTag`, `calculateTrending`, `formatTag`, `segmentText`, `MAX_TAGS_PER_POST`, `MAX_TAG_LENGTH` | `phase9-hashtags.test.ts` |
| `tests/phase9-notifications.test.ts` | `vitest`, `mapNotificationType`, `getNotificationTitle`, `getNotificationActionUrl`, `extractNotificationMessage`, `normalizeDbRow`, `DbNotificationRow` | `phase9-notifications.test.ts` |
| `tests/phase9-offline-cache.test.ts` | `vitest`, `CachedAsset`, `CachedScene`, `SceneSnapshot`, `SceneObject`, `SyncQueueEntry`, `(dynamic import)`, `(dynamic import)` | `phase9-offline-cache.test.ts` |
| `tests/phase9-scene-state.test.ts` | `vitest`, `createDefaultSnapshot`, `scenesAreDifferent`, `SceneSnapshot` | `phase9-scene-state.test.ts` |
| `tests/phase9-touch-gestures.test.ts` | `vitest`, `GestureRecogniser`, `GestureCallbacks`, `GestureEvent` | `phase9-touch-gestures.test.ts` |
| `tests/platform-utils.test.ts` | `vitest`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)` | `platform-utils.test.ts` |
| `tests/post-media.test.ts` | `vitest`, `getPostMediaUrls`, `getPrimaryPostMediaUrl` | `post-media.test.ts` |
| `tests/post-view-counting.test.ts` | `vitest` | `post-view-counting.test.ts` |
| `tests/product-law-principle10-alignment.test.ts` | `vitest`, `fs`, `path` | `product-law-principle10-alignment.test.ts` |
| `tests/profile-avatar-edit-entrypoints.test.ts` | `node:fs`, `node:path`, `vitest`, `(default)` | `profile-avatar-edit-entrypoints.test.ts` |
| `tests/rate-limiting.test.ts` | `vitest` | `rate-limiting.test.ts` |
| `tests/readme-autosync.test.ts` | `vitest`, `buildAutosyncSummary`, `computeAffected`, `replaceSection` | `readme-autosync.test.ts` |
| `tests/readme-homedream-system.test.ts` | `node:fs`, `node:path`, `vitest` | `readme-homedream-system.test.ts` |
| `tests/readme-section13-code-codeengin.test.ts` | `fs`, `path`, `vitest` | `readme-section13-code-codeengin.test.ts` |
| `tests/readme-section6-homedream.test.ts` | `node:fs`, `node:path`, `vitest` | `readme-section6-homedream.test.ts` |
| `tests/render-completion-evidence.test.ts` | `vitest`, `certifyTenMillionScene`, `createRenderCompletionEvidence`, `createTenMillionTriangleBenchmarkScene` | `render-completion-evidence.test.ts` |
| `tests/render-full-integration.test.ts` | `vitest`, `EnginDispatcher`, `RENDER_SERVICE_COMMANDS`, `RENDER_SERVICE_HANDOFFS`, `RENDER_SERVICE_PIPELINE`, `dispatchRenderHandoff`, `dispatchRenderServiceIntent` | `render-full-integration.test.ts` |
| `tests/render-service-integration.test.ts` | `vitest`, `EnginDispatcher`, `RENDER_SERVICE_COMMANDS`, `RENDER_SERVICE_HANDOFFS`, `RENDER_SERVICE_PIPELINE`, `createRenderServiceIntent`, `getRenderHandoffForSource` | `render-service-integration.test.ts` |
| `tests/render-viewport-lifecycle-source.test.ts` | `vitest`, `node:fs`, `, () => {     expect(source).toContain(` | `render-viewport-lifecycle-source.test.ts` |
| `tests/render-viewport-security-performance.test.ts` | `vitest`, `authorizeRenderCapability`, `createAxisHelper`, `createBoundingBoxLines`, `createViewportRay`, `evaluateRenderPerformanceIntegrity`, `fitCameraToBounds`, `panRenderCamera` | `render-viewport-security-performance.test.ts` |
| `tests/renderengin-advanced-rendering.test.ts` | `vitest`, `applyMorphTargets`, `buildDualQuaternionPalette`, `buildIndirectDrawCommands`, `buildMeshlets`, `compressGeometryQuantized`, `createMeshBuffers`, `createTimestampQueryPlan` | `renderengin-advanced-rendering.test.ts` |
| `tests/renderengin-assets-scene.test.ts` | `vitest`, `addObjectToRenderScene`, `computeRenderObjectWorldMatrix`, `createParsedObjRenderAsset`, `createRenderScene`, `createRenderSceneObject`, `deserializeRenderScene`, `estimateRenderAssetMemory` | `renderengin-assets-scene.test.ts` |
| `tests/renderengin-core.test.ts` | `vitest`, `clusterizeMesh`, `composeModelMatrix`, `createMeshBuffers`, `createRenderAsset`, `mat4Identity`, `packAosVertexBuffer`, `projectVertex` | `renderengin-core.test.ts` |
| `tests/renderengin-glb-virtual-animation.test.ts` | `vitest`, `addObjectToRenderScene`, `buildInstanceBatches`, `computeMeshBounds`, `createParsedGlbRenderAsset`, `createRenderScene`, `createRenderSceneObject`, `createTerrainChunks` | `renderengin-glb-virtual-animation.test.ts` |
| `tests/renderengin-gpu-proof-security.test.ts` | `vitest`, `SHADER`, `createRenderPostProcessGraph`, `createTenMillionPolygonProof`, `isMobileRenderUserAgent`, `summarizeLiveBenchmark`, `evaluateGpuBenchmarkProof`, `executePostProcessPixel` | `renderengin-gpu-proof-security.test.ts` |
| `tests/renderengin-material-security-performance.test.ts` | `vitest`, `authorizeRenderAssetOperation`, `createBenchmarkScene`, `createParsedObjRenderAsset`, `createRenderMaterial`, `createRenderPerformanceReport`, `evaluateRenderPerformanceGate`, `frameStatsToPerformanceSample` | `renderengin-material-security-performance.test.ts` |
| `tests/renderengin-runtime-wiring.test.ts` | `vitest`, `EnginRuntime`, `getRuntimeEnginRegistration`, `resolveRuntimeCapability`, `RenderEnginRuntimeRegistration`, `RenderEnginRuleSet`, `RENDER_ENGIN_ID`, `createMeshBuffers` | `renderengin-runtime-wiring.test.ts` |
| `tests/renderengin-texture-lighting-settings.test.ts` | `vitest`, `calculateMipLevelCount`, `createRenderEnvironment`, `createRenderLight`, `createRenderQualitySettings`, `createRenderTexture`, `createTextureMemoryReport`, `summarizeRenderLights` | `renderengin-texture-lighting-settings.test.ts` |
| `tests/renderengin-webgpu.test.ts` | `vitest`, `createMeshBuffers`, `packAosVertexBuffer`, `toGpuMat4` | `renderengin-webgpu.test.ts` |
| `tests/report-driven-game-agent.test.ts` | `node:child_process`, `node:fs`, `node:path`, `node:os`, `vitest` | `report-driven-game-agent.test.ts` |
| `tests/repository-state-analysis-section.test.ts` | `vitest`, `extractRepositoryStateSnapshot`, `buildRepositoryStateAnalysisSection` | `repository-state-analysis-section.test.ts` |
| `tests/responsive.test.ts` | `vitest` | `responsive.test.ts` |
| `tests/rss-feed.test.ts` | `vitest`, `youtubeChannelRssUrl`, `youtubePlaylistRssUrl`, `redditSubredditRssUrl`, `redditUserRssUrl`, `mastodonUserRssUrl`, `githubUserAtomUrl`, `nostrGatewayRssUrl` | `rss-feed.test.ts` |
| `tests/runtime-channel.test.ts` | `vitest`, `createLocalChannel`, `createRuntimeChannel` | `runtime-channel.test.ts` |
| `tests/runtime-container.test.ts` | `vitest`, `RuntimeContainer` | `runtime-container.test.ts` |
| `tests/runtime-viewport.test.ts` | `vitest`, `COMPACT_RUNTIME_VIEWPORT_MAX_WIDTH`, `getPreferredViewportHeight`, `isCompactRuntimeViewport` | `runtime-viewport.test.ts` |
| `tests/runtime-wiring.test.ts` | `node:fs`, `node:path`, `vitest` | `runtime-wiring.test.ts` |
| `tests/safe-get-user.test.ts` | `vitest`, `safeGetUser` | `safe-get-user.test.ts` |
| `tests/seam-clipboard.test.ts` | `vitest`, `bridge`, `findWorkflows`, `findWorkflowById`, `allWorkflows`, `executeWorkflow`, `ENGIN_KEYS`, `EnginKey` | `seam-clipboard.test.ts` |
| `tests/session-continuity.test.ts` | `vitest`, `SessionContinuity`, `SessionStorageBackend`, `StoredSession` | `session-continuity.test.ts` |
| `tests/session-pattern-engine.test.ts` | `vitest`, `SessionPatternEngine` | `session-pattern-engine.test.ts` |
| `tests/setup-env.ts` | - | `setup-env.ts` |
| `tests/shell-cartridge-wiring.test.ts` | `vitest`, `node:fs`, `node:path`, `CARTRIDGE_MANIFEST`, `registerCartridges`, `moduleRegistry`, `useModuleRegistry`, `(dynamic import)` | `shell-cartridge-wiring.test.ts` |
| `tests/skip-credits.test.ts` | `vitest`, `addSkipCredits`, `calculateSkipCreditsEarned`, `canSpendSkipCredit`, `spendSkipCredit`, `AdType` | `skip-credits.test.ts` |
| `tests/social-feed.test.ts` | `vitest`, `stripHtml`, `extractFirstImage`, `fetchSocialFeed`, `SocialFeedItem`, `rss-parser`, `rss-parser`, `rss-parser` | `social-feed.test.ts` |
| `tests/social-platforms.test.ts` | `vitest`, `SOCIAL_PLATFORMS`, `PLATFORM_MAP`, `PROFILE_SHARE_PLATFORMS`, `detectPlatform`, `getPlatform` | `social-platforms.test.ts` |
| `tests/spec35-vm-bus-events.test.ts` | `vitest` | `spec35-vm-bus-events.test.ts` |
| `tests/spec36-bot-detection.test.ts` | `vitest`, `createViewTimer`, `PerfectLineTrap`, `BotSessionTracker`, `VIEW_TALLY_THRESHOLD_MS`, `PERFECT_LINE_THRESHOLD_PX`, `HUMAN_MIN_DEVIATION_PX`, `BOT_MAX_DEVIATION_PX` | `spec36-bot-detection.test.ts` |
| `tests/spec37-torridity.test.ts` | `vitest`, `TORRIDITY_N`, `TORRIDITY_DP`, `TORRIDITY_LAMBDA`, `TORRIDITY_A0_PERCEPTION`, `mu`, `contentMass`, `torridityRankSpec` | `spec37-torridity.test.ts` |
| `tests/spec38-collaboration.test.ts` | `vitest`, `broadcastEdit`, `broadcastDataPacket`, `broadcastMediaSync`, `broadcastModeChange`, `broadcastPresenceUpdate`, `broadcastStatePatch`, `createCollabSession` | `spec38-collaboration.test.ts` |
| `tests/spec41-engine-builder.test.ts` | `vitest`, `validateAssembly`, `createAssembly`, `serializeAssembly`, `deserializeAssembly`, `atomicPieceFromComponent`, `runAssembly`, `AtomicPiece` | `spec41-engine-builder.test.ts` |
| `tests/starmaker-music.test.ts` | `vitest`, `node:fs`, `node:path`, `buildReleaseStrategy`, `createMelodySuggestions`, `summarizePlaybackProfile`, `midiPitchToName`, `isBlackKey` | `ARRANGEMENT_BARS`, `AUDIO_QUALITY_PRESETS`, `ArrangementClip`, `AudioTake`, `MidiNote`, `SessionViewState`, `WarpState` |
| `tests/structure-ledger.test.ts` | `vitest`, `createInitialDreamState`, `getStateForNode`, `move`, `ledgerStats`, `matchState`, `resolveTransition` | `structure-ledger.test.ts` |
| `tests/supabase-config.test.ts` | `vitest`, `(dynamic import)` | `supabase-config.test.ts` |
| `tests/swap-manager-extended.test.ts` | `vitest` | `swap-manager-extended.test.ts` |
| `tests/swipe-calibration.test.ts` | `vitest`, `CalibrationProfile`, `calibrateDevice`, `getActiveProfile`, `resetCalibration`, `setActiveProfile` | `swipe-calibration.test.ts` |
| `tests/tech-foundation.test.ts` | `vitest`, `fs`, `path` | `tech-foundation.test.ts` |
| `tests/torridity-ledger.test.ts` | `vitest`, `TORRIDITY_LEDGER_CONFIG`, `calculateOriginality`, `calculateRank`, `derivePostMassMeta`, `getInteractionDelta`, `getPostMass`, `resolveSwipeRelease` | `torridity-ledger.test.ts` |
| `tests/universal-asset-registry.test.ts` | `vitest`, `RegistryEntry`, `GameAssetRow`, `ControlMapping`, `EnrichedEntry`, `UniversalAssetRegistryProps`, `(dynamic import)` | `universal-asset-registry.test.ts` |
| `tests/universal-engine.test.ts` | `vitest`, `engine` | `universal-engine.test.ts` |
| `tests/universal-visual-modularity.test.ts` | `node:fs`, `node:path`, `vitest` | `(default)`, `DreamWindowShell` |
| `tests/update-readme-current-status.test.ts` | `vitest`, `extractNodeMajorFromDockerfile`, `extractPnpmVersion`, `refreshCurrentImplementationStatusSection` | `update-readme-current-status.test.ts` |
| `tests/user-sim.test.ts` | `vitest`, `PerceptionFrame`, `VisibleElement`, `PERSONAS`, `SPEC_RULES`, `perceive`, `decideAction`, `judgeStep` | `user-sim.test.ts` |
| `tests/utils-extended.test.ts` | `vitest` | `utils-extended.test.ts` |
| `tests/utils-supabase-server.test.ts` | `vitest`, `createClient` | `utils-supabase-server.test.ts` |
| `tests/v2-readiness.test.ts` | `vitest`, `PLATFORM_NAME`, `PRODUCT_VERSION`, `CORE_SURFACE_ROUTES`, `LEGACY_ROUTES`, `fs`, `path` | `v2-readiness.test.ts` |
| `tests/view-profile-public-view-controls.test.ts` | `node:fs`, `node:path`, `vitest` | `view-profile-public-view-controls.test.ts` |
| `tests/warp-engine.test.ts` | `vitest`, `WarpEngine`, `WarpParticle`, `WarpContext`, `spawnParticle`, `integrateKernel`, `decayKernel`, `gravityKernel` | `warp-engine.test.ts` |
| `tests/wasm-gpu-vm.test.ts` | `vitest`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)` | `wasm-gpu-vm.test.ts` |
| `tests/webgpu-director.test.ts` | `vitest`, `classifyPressure`, `buildPassPlan`, `scoreObject`, `classifyObject`, `decideObject`, `resolveFrameBudget`, `resolveTemporalState` | `webgpu-director.test.ts` |
| `tests/widget-install-flow.test.ts` | `vitest`, `findBestSlot`, `handleConnectSuccess`, `handleDismissPrompt`, `handleAddWidget`, `handlePlaceLater`, `queueSuggestedWidget`, `getSuggestedWidgets` | `widget-install-flow.test.ts` |
| `tests/youtube-provider.test.ts` | `vitest`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)`, `(dynamic import)` | `youtube-provider.test.ts` |
| `types/ads.ts` | - | `AdListing`, `AdOrder`, `AdPlacement`, `AdSlot`, `ProfileLite` |
| `types/ai-system.ts` | `zod` | `AIMemory`, `ActorContext`, `ActorContextSchema`, `AdminMigrationProposalPayload`, `AdminPatchProposalPayload`, `AgentType`, `AuditEntry`, `BoogieDecision` |
| `types/ai.ts` | - | `AIAgent`, `AIRole`, `AITier`, `AnyAIAgent`, `BoogieManAgent`, `DrEamsAgent`, `IDARiAgent` |
| `types/ccc.ts` | - | `CCCField`, `CCCLayer`, `CCCNode`, `CCCTransformation` |
| `types/connector.ts` | - | `ConnectorAccount`, `ConnectorAccountPublic`, `ConnectorConnectRequest`, `ConnectorConnectResponse`, `ConnectorSyncResponse`, `ConnectorVerifyResponse`, `FeedItemMedia`, `FeedItemRow` |
| `types/dream-window.ts` | `DestinationRule`, `DreamWindowConfig`, `DreamWindowPosition`, `DreamWindowSize`, `DreamWindowState`, `DestinationRule`, `DreamWindowConfig`, `DreamWindowInstance` | `CreateDreamWindowBody`, `DREAM_WINDOW_STATES`, `DestinationRule`, `DreamWindowConfig`, `DreamWindowInstance`, `DreamWindowPosition`, `DreamWindowRecord`, `DreamWindowSize` |
| `types/dreamArtifact.ts` | - | `ActiveModuleInstance`, `DreamArtifact`, `DreamArtifactBusEventMap`, `DreamArtifactDragPayload`, `DreamArtifactSource`, `DreamArtifactType`, `RuntimeRegionKey` |
| `types/experience.ts` | - | `Dream`, `DreamKind`, `HomeAnchor`, `InfiniteLoop`, `MAX_WIDGETS`, `UserAction` |
| `types/journey.ts` | - | `JOURNEY_DOMAIN_COLORS`, `JourneyDot`, `JourneyDotKind`, `JourneyTimeGroup`, `LogJourneyDotInput` |
| `types/marketplace.ts` | - | `CreateListingInput`, `MarketplaceCategory`, `MarketplaceListing`, `MarketplacePurchase`, `MarketplaceStoreSurface` |
| `types/module-manifest.ts` | `isJsonSerializable` | `ModuleCompatibility`, `ModuleManifest`, `ModuleType`, `RuntimeCompatibility`, `RuntimeId`, `isModuleManifest`, `negotiateModuleCompatibility` |
| `types/rivet-dev-agent-os.d.ts` | - | `(default)`, `AgentOs`, `AgentOsOptions`, `AgentSession`, `CreateSessionOptions`, `HostTools` |
| `types/spatial.ts` | - | `Album`, `AlbumContent`, `ContentObject`, `ContentType`, `ContentVisibility`, `CreateAlbumInput`, `CreateContentInput`, `CreateWidgetInput` |
| `types/supabase.ts` | - | `CompositeTypes`, `Constants`, `Enums`, `Json`, `Tables`, `TablesInsert`, `TablesUpdate` |
| `types/user-sim.ts` | `zod` | `AgentAction`, `AgentActionSchema`, `AgentActionType`, `AgentActionTypeSchema`, `AuditFinding`, `AuditFindingSchema`, `BehaviorSignals`, `BehaviorSignalsSchema` |
| `types/widget-system-v2.ts` | - | `CompositeHostConfig`, `CompositePane`, `DEFAULT_FEED_HOST_CONFIG`, `DreamDefinition`, `DreamInstance`, `DreamSurfaceKey`, `FeedHostConfig`, `HostConfig` |
| `types/widgetConfigs.ts` | - | `DreamenginWidgetType`, `EmbedWidgetConfig`, `SocialEmbedWidgetConfig`, `SocialFeedWidgetConfig`, `SocialProfileWidgetConfig`, `SocialProvider`, `TextWidgetConfig`, `TypedWidget` |
| `types/widgets.ts` | - | `SubWidgetRef`, `WidgetAction`, `WidgetCapabilities`, `WidgetInstance`, `WidgetLayer`, `WidgetLayerKind`, `WidgetPresentationMode`, `WidgetTransformState` |
| `utils/index.ts` | `clsx` | `clamp`, `cn`, `debounce`, `isError`, `sleep`, `throttle` |
| `utils/supabase/server.ts` | - | `createClient` |
| `vitest.config.ts` | `path`, `vitest/config` | `(default)` |

---

<a name="unresolved-imports"></a>

# Unresolved Internal Imports

| File | Specifier | Names |
|------|-----------|-------|
| `.github/scripts/issue-bot.js` | `./HeavyComponent` | `(dynamic import)` |
| `engins/engin.CodeEngin.tsx` | `@/components/DreamButton` | `(default)` |
| `fix-repo.cjs` | `./` | `(default)` |
| `hooks/useResponsive.ts` | `../ui/responsive` | `BREAKPOINTS`, `Breakpoint`, `fluid`, `getBreakpoint`, `isAtLeast`, `isBelow`, `pickByBreakpoint`, `readViewportWidth` |
| `next-env.d.ts` | `./.next/types/routes.d.ts` | `(side-effect)` |
| `scripts/gameengin/architect-run.ts` | `../../engins/gameengin/brain-reader.js` | `isOriginal`, `listConceptPatterns`, `listMechanics`, `logRDSession`, `readVisionStatement`, `recordVisionStatement`, `signatureHash`, `ConceptPattern`, `VisionStatement` |
| `scripts/gameengin/artisan-run.ts` | `../../engins/gameengin/brain-reader.js` | `BRAIN_ROOT`, `listCompositionPrinciples`, `listMaterialRecipes`, `listTechniques`, `logRDSession`, `recordAssetGeneration` |
| `scripts/gameengin/maestro-analyze.ts` | `../../engins/gameengin/brain-reader.js` | `getLastTouched`, `isOriginal`, `listCartridges`, `listMechanics`, `logRDSession`, `readCartridgeStatus`, `recordAssignments`, `signatureHash`, `AgentName`, `AssignmentLogEntry`, `CartridgeStatus` |
| `scripts/gameengin/mechanic-run.ts` | `../../engins/gameengin/brain-reader.js` | `listMechanics`, `logRDSession`, `recordBuild` |
| `scripts/gameengin/package-cartridge.ts` | `../../engins/gameengin/cartridge-manifest.js` | `CARTRIDGE_MAGIC`, `validateManifest` |
| `scripts/gameengin/package-cartridge.ts` | `./lib/tar.js` | `packTar`, `TarFile` |
| `scripts/gameengin/prophet-run.ts` | `../../engins/gameengin/brain-reader.js` | `isOriginal`, `listMechanics`, `logRDSession`, `readGenreDNA`, `signatureHash` |
| `scripts/gameengin/upgrader-run.ts` | `../../engins/gameengin/brain-reader.js` | `getLastTouched`, `listCartridges`, `listMechanics`, `listTechniques`, `logRDSession`, `readUpgradeRules`, `recordUpgrade`, `AgentName` |
| `scripts/gameengin/writer-run.ts` | `../../engins/gameengin/brain-reader.js` | `listDialoguePatterns`, `logRDSession`, `readCharacterVoice`, `readEmotionalTone`, `readNarrativePacing` |
| `scripts/postbuild.ts` | `../lib/adari` | `assertBuildInvariants` |
| `scripts/sync-build-memory.mjs` | `@/components` | `(default)` |
| `scripts/wire-orphans.mjs` | `./engins` | `engins` |
| `scripts/wire-orphans.mjs` | `./rulesets` | `rulesets` |
| `scripts/wire-orphans.mjs` | `./surfaces` | `surfaces` |
| `scripts/wire-orphans.mjs` | `./dreamsurfaces` | `dreamsurfaces` |
| `scripts/wire-orphans.mjs` | `./dreamr` | `dreamr` |
| `scripts/wire-orphans.mjs` | `./dreamdmbar` | `dreamdmbar` |
| `scripts/wire-orphans.mjs` | `./homedream` | `homedream` |
| `scripts/wire-orphans.mjs` | `./connectors` | `connectors` |
| `scripts/wire-orphans.mjs` | `./cartridges` | `cartridges` |
| `scripts/wire-orphans.mjs` | `./brain` | `brain` |
| `scripts/wire-orphans.mjs` | `./personas` | `personas` |
| `scripts/wire-orphans.mjs` | `./systems` | `systems` |
| `scripts/wire-orphans.mjs` | `./hooks` | `hooks` |
| `scripts/wire-orphans.mjs` | `./osArchitectureMap` | `osArchitectureFlow`, `osArchitectureGraph`, `osArchitectureMap`, `osArchitectureStageEntries`, `osGeneratedRouters`, `osSlotCounts` |
| `scripts/wire-orphans.mjs` | `./osArchitectureMap` | `OsArchitectureGraph`, `OsArchitectureMap`, `OsArchitectureStageEntries`, `OsGeneratedRouters`, `OsSlotCounts` |
| `tests/activity-first-protocol.test.ts` | `../lib/activity/types` | `ActivityTier`, `VerificationMethod`, `TIER_MULTIPLIERS`, `VERIFICATION_STRENGTH`, `SKIP_CREDIT_REWARDS`, `CPV_PRICING` |
| `tests/activity-first-protocol.test.ts` | `../lib/activity/scoring` | `calculateActivityPoints`, `getTierMultiplier`, `getVerificationStrength`, `getInnovationBonus`, `shouldPromoteActivity`, `getTierDisplayName`, `calculateDecayDate`, `isDecayed` |
| `tests/activity-first-protocol.test.ts` | `../lib/activity/aqs` | `calculateRealShitRate`, `formatRealShitRate`, `getAQSTier`, `formatAQS` |
| `tests/activity-first-protocol.test.ts` | `../lib/activity/visibility-score` | `estimateVisibilityScore` |
| `tests/coercion-table.test.ts` | `../lib/runtime/coercionTable` | `coerceRawPayload`, `classifyDrop`, `DreamDrop` |
| `tests/collector-extended.test.ts` | `../lib/observability/collector` | `clearBuffers`, `collectLog`, `collectTrace`, `collectBatchLogs`, `getErrorRate`, `getP95Latency`, `groupTracesByTraceId`, `getLogCountsBySeverity` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/motionCapture` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/motionCapture` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/motionCapture` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/motionCapture` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/motionCapture` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/motionCapture` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/motionCapture` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/motionCapture` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/motionCapture` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/motionCapture` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/motionCapture` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/motionCapture` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/compositor` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/compositor` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/compositor` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/compositor` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/compositor` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/compositor` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/compositor` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/rotoscope` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/rotoscope` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/rotoscope` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/rotoscope` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/rotoscope` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/rotoscope` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/rotoscope` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/rotoscope` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/rotoscope` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/fxSimulation` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/fxSimulation` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/fxSimulation` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/fxSimulation` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/fxSimulation` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/fxSimulation` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/fxSimulation` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/matchmover` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/matchmover` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/matchmover` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/matchmover` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/matchmover` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/matchmover` | `(dynamic import)` |
| `tests/compositeengin-features.test.ts` | `../lib/composite/matchmover` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/transcriptEditor` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/seoScorer` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/seoScorer` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/seoScorer` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/seoScorer` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/seoScorer` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/seoScorer` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/seoScorer` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/seoScorer` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/seoScorer` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/seoScorer` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/seoScorer` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/voiceClone` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/voiceClone` | `(dynamic import)` |
| `tests/contentengin-features.test.ts` | `../lib/content/voiceClone` | `(dynamic import)` |
| `tests/data-transform-extended.test.ts` | `../lib/data-transform` | `encodeToLedger`, `decodeFromLedger`, `normalizeBuffer`, `computeBufferStats`, `zscore` |
| `tests/drop-target-registry.test.ts` | `../lib/runtime/dropTargetRegistry` | `dropTargetRegistry` |
| `tests/drop-target-registry.test.ts` | `../lib/runtime/coercionTable` | `DreamDrop` |
| `tests/engin-workflow.test.ts` | `../lib/engins/workflowEngine` | `createWorkflow`, `advanceStage`, `abandonWorkflow`, `checkHandoffEligibility`, `describeWorkflow`, `isValidTransition`, `workflowsForEngin`, `handoffsFrom`, `findWorkflowDef`, `WORKFLOW_CATALOG`, `HANDOFF_PATHS`, `STAGE_LABELS` |
| `tests/gameengin-power-systems.test.ts` | `../lib/gameengin/power-systems` | `RollbackNetcode`, `ComputeShaderPipeline`, `AdvancedPhysicsWorld`, `OctreeBVH`, `WorkerJobSystem`, `ProceduralWorldGen`, `ReplayBuffer`, `BehaviorTreeEngine`, `GPUProfiler`, `TypedEventBus`, `AnimationStateMachine`, `LODSystem`, `ClientSidePrediction`, `ResourcePool`, `WGSLShaderManager`, `TerrainEngine`, `GlobalIllumProbes`, `AssetStreamManager`, `PhysicsMaterialSystem` |
| `tests/gameengin-power-systems.test.ts` | `../lib/gameengin/power-systems` | `BTContext`, `BTNode`, `AnimationClip`, `LODObject`, `LODLevel` |
| `tests/instance-manager.test.ts` | `../lib/runtime/instanceManager` | `(dynamic import)` |
| `tests/instance-manager.test.ts` | `../lib/runtime/instanceManager` | `(dynamic import)` |
| `tests/instance-manager.test.ts` | `../lib/runtime/instanceManager` | `(dynamic import)` |
| `tests/instance-manager.test.ts` | `../lib/runtime/instanceManager` | `(dynamic import)` |
| `tests/offline-queue.test.ts` | `../lib/runtime/offlineQueue` | `enqueue`, `dequeue`, `flushQueue`, `getQueueStatus`, `isOnline` |
| `tests/platform-utils.test.ts` | `../lib/platform/lab` | `(dynamic import)` |
| `tests/platform-utils.test.ts` | `../lib/platform/lab` | `(dynamic import)` |
| `tests/platform-utils.test.ts` | `../lib/platform/index` | `(dynamic import)` |
| `tests/platform-utils.test.ts` | `../lib/platform/index` | `(dynamic import)` |
| `tests/platform-utils.test.ts` | `../lib/platform/index` | `(dynamic import)` |
| `tests/platform-utils.test.ts` | `../lib/platform/index` | `(dynamic import)` |
| `tests/readme-autosync.test.ts` | `../lib/dreams/types` | `createDream`, `dreamCan`, `isDream`, `resolveDreamSurfaceAdapter`, `NO_PERMISSIONS`, `OWNER_PERMISSIONS`, `VIEWER_PERMISSIONS`, `Dream`, `DreamKind`, `DreamPermissions`, `DreamRenderMode`, `DreamSurface`, `DrEamsIntentType` |
| `tests/responsive.test.ts` | `../lib/ui/responsive` | `BREAKPOINTS`, `BREAKPOINT_ORDER`, `clamp`, `cssClamp`, `fluid`, `getBreakpoint`, `isAtLeast`, `isBelow`, `pickByBreakpoint`, `readViewportWidth` |
| `tests/swap-manager-extended.test.ts` | `../lib/runtime/swapManager` | `getSwap`, `setSwap`, `toggleSwap`, `clearSwap`, `getAllSwapStates`, `resetAllSwaps` |
| `tests/tech-foundation.test.ts` | `../lib/supabase/vector` | `(dynamic import)` |
| `tests/utils-extended.test.ts` | `../lib/utils` | `debounce`, `throttle`, `clamp`, `truncate`, `retry`, `sleep`, `deepClone`, `groupBy`, `unique`, `assert` |

---

<a name="circular-deps"></a>

# Circular Dependencies

_No circular dependencies detected._

---

<a name="risk-files"></a>

# Risk Files

| File | Coupling | Flags |
|------|----------|-------|
| `engins/engin.GameEngin.tsx` | 44 | HIGH_COUPLING, EVENT_BUS, DUAL_RUNTIME |
| `engins/gameengin/executionWiring.ts` | 39 | HIGH_COUPLING, DUAL_RUNTIME |
| `engins/engin.StarMakerEngin.tsx` | 31 | HIGH_COUPLING, EVENT_BUS, DUAL_RUNTIME |
| `components/runtime/dream.RuntimeView.tsx` | 27 | HIGH_COUPLING, DUAL_RUNTIME |
| `engins/contentengin/pipeline/build.ts` | 25 | HIGH_COUPLING |
| `engins/renderengin/index.ts` | 24 | HIGH_COUPLING |
| `components/games/dream.GamesHub.tsx` | 23 | HIGH_COUPLING |
| `dreamdmbar/dreamsurface.dreamdmbar.tsx` | 21 | HIGH_COUPLING, DUAL_RUNTIME |
| `app/layout.tsx` | 19 | HIGH_COUPLING, DUAL_RUNTIME |
| `components/dream.HomeFeed.tsx` | 19 | HIGH_COUPLING, DUAL_RUNTIME |
| `engins/engin.BrandingEngin.tsx` | 18 | HIGH_COUPLING, EVENT_BUS, DUAL_RUNTIME |
| `engins/engin.LabEngin.tsx` | 18 | HIGH_COUPLING, EVENT_BUS, DUAL_RUNTIME |
| `scripts/wire-orphans.mjs` | 18 | HIGH_COUPLING, EVENT_BUS, RUNTIME_REGISTRY, DUAL_RUNTIME |
| `app/daydream/games/page.tsx` | 17 | HIGH_COUPLING |
| `app/dreamdmbar/_components/HomeDreamRegion.tsx` | 16 | HIGH_COUPLING, DUAL_RUNTIME |
| `daydreams/games/page.tsx` | 16 | HIGH_COUPLING |
| `engine/engin-runtime/index.ts` | 16 | HIGH_COUPLING |
| `engine/navigation/index.ts` | 16 | HIGH_COUPLING |
| `app/api/ai/boogieman/child-safety/route.ts` | 15 | HIGH_COUPLING |
| `app/profile/[handle]/page.tsx` | 15 | HIGH_COUPLING |
| `components/home/dream.bar.PersistentDreamBar.tsx` | 15 | HIGH_COUPLING, EVENT_BUS, DUAL_RUNTIME |
| `engins/dream.ForgeEngin.tsx` | 15 | HIGH_COUPLING, DUAL_RUNTIME |
| `engins/engin.CodeEngin.tsx` | 15 | HIGH_COUPLING, EVENT_BUS, DUAL_RUNTIME |
| `engins/gameengin/index.ts` | 15 | HIGH_COUPLING, EVENT_BUS |
| `components/dreams/dreamsurface.dreamspace.tsx` | 14 | HIGH_COUPLING |
| `engine/generated/index.ts` | 14 | HIGH_COUPLING, RUNTIME_REGISTRY |
| `src/engin/generated/index.ts` | 14 | HIGH_COUPLING, RUNTIME_REGISTRY |
| `app/api/ai/idari/route.ts` | 13 | HIGH_COUPLING |
| `app/daydream/lab/page.tsx` | 13 | HIGH_COUPLING |
| `components/dream.MessagesClient.tsx` | 13 | HIGH_COUPLING |
| `components/games/madmaxi/dream.MadmaxiGame.tsx` | 13 | HIGH_COUPLING |
| `engine/runtime/index.ts` | 13 | HIGH_COUPLING, EVENT_BUS, RUNTIME_REGISTRY |
| `app/api/ai/eams/route.ts` | 12 | HIGH_COUPLING |
| `app/api/connectors/[provider]/connect/route.ts` | 12 | HIGH_COUPLING |
| `app/api/connectors/[provider]/verify/route.ts` | 12 | HIGH_COUPLING |
| `app/connectors/dream.ConnectorsClient.tsx` | 12 | HIGH_COUPLING |
| `app/daydream/code/page.tsx` | 12 | HIGH_COUPLING |
| `app/daydream/forge/page.tsx` | 12 | HIGH_COUPLING |
| `app/dreamdmbar/layout.tsx` | 12 | HIGH_COUPLING |
| `app/view-profile/page.tsx` | 12 | HIGH_COUPLING |
| `components/daydream/dream.shell.DaydreamShell.tsx` | 12 | HIGH_COUPLING |
| `components/dreamengin/dream.DREAMenginOS.tsx` | 12 | HIGH_COUPLING, EVENT_BUS, RUNTIME_REGISTRY, DUAL_RUNTIME |
| `engine/vm/index.ts` | 12 | HIGH_COUPLING, DUAL_RUNTIME |
| `app/(internal)/idari-console/page.tsx` | 11 | HIGH_COUPLING |
| `app/api/ai/boogieman/route.ts` | 11 | HIGH_COUPLING |
| `app/api/ai/execute/route.ts` | 11 | HIGH_COUPLING |
| `app/api/posts/route.ts` | 11 | HIGH_COUPLING |
| `app/daydream/create/page.tsx` | 11 | HIGH_COUPLING |
| `app/daydream/music/page.tsx` | 11 | HIGH_COUPLING |
| `components/providers/dream.AppSurfaceShell.tsx` | 11 | HIGH_COUPLING, DUAL_RUNTIME |
| `daydreams/code/page.tsx` | 11 | HIGH_COUPLING |
| `daydreams/lab/page.tsx` | 11 | HIGH_COUPLING |
| `daydreams/music/page.tsx` | 11 | HIGH_COUPLING |
| `engine/os/index.ts` | 11 | HIGH_COUPLING, DUAL_RUNTIME |
| `app/api/admin/observability/route.ts` | 10 | MEDIUM_COUPLING |
| `app/daydream/brand/page.tsx` | 10 | MEDIUM_COUPLING |
| `app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx` | 10 | MEDIUM_COUPLING |
| `app/edit-profiledream/page.tsx` | 10 | MEDIUM_COUPLING |
| `components/gameengin/dream.cartridge.CartridgeLauncher.tsx` | 10 | MEDIUM_COUPLING |
| `coresurfaces/dreamsurface.ViewProfile.tsx` | 10 | MEDIUM_COUPLING |
| `daydreams/create/page.tsx` | 10 | MEDIUM_COUPLING |
| `dreamr/components/dreamrfeed.tsx` | 10 | MEDIUM_COUPLING |
| `engine/engin-runtime/EnginRuntime.ts` | 10 | MEDIUM_COUPLING, EVENT_BUS |
| `engins/gameengin/GameRuntime.tsx` | 10 | MEDIUM_COUPLING, EVENT_BUS, DUAL_RUNTIME |
| `engins/gameengin/systems/index.ts` | 10 | MEDIUM_COUPLING |
| `app/ads/page.tsx` | 9 | MEDIUM_COUPLING |
| `app/api/account/delete-data/route.ts` | 9 | MEDIUM_COUPLING |
| `app/api/account/delete-dream/route.ts` | 9 | MEDIUM_COUPLING |
| `app/api/ai/boogieman/privacy-event/route.ts` | 9 | MEDIUM_COUPLING |
| `app/api/messages/route.ts` | 9 | MEDIUM_COUPLING |
| `app/daydream/game/dream.shell.ImmersiveGameShell.tsx` | 9 | MEDIUM_COUPLING |
| `app/daydream/lab/portfolio/page.tsx` | 9 | MEDIUM_COUPLING |
| `app/dreamdmbar/_components/DreamSpaceRegion.tsx` | 9 | MEDIUM_COUPLING, EVENT_BUS, DUAL_RUNTIME |
| `app/marketplace/[id]/page.tsx` | 9 | MEDIUM_COUPLING |
| `app/marketplace/page.tsx` | 9 | MEDIUM_COUPLING |
| `app/settings/safety/page.tsx` | 9 | MEDIUM_COUPLING |
| `app/shop/sell/page.tsx` | 9 | MEDIUM_COUPLING |
| `components/daydream/dream.StandaloneEnginSurface.tsx` | 9 | MEDIUM_COUPLING |
| `components/dream.OSShellActivator.tsx` | 9 | MEDIUM_COUPLING, EVENT_BUS, RUNTIME_REGISTRY, DUAL_RUNTIME |
| `components/dreamengin/dreamsurface.dreamengin.tsx` | 9 | MEDIUM_COUPLING |
| `components/games/dream.NeonDrift.tsx` | 9 | MEDIUM_COUPLING |
| `components/home/dream.ActiveModuleSurface.tsx` | 9 | MEDIUM_COUPLING, EVENT_BUS, DUAL_RUNTIME |
| `daydreams/brand/page.tsx` | 9 | MEDIUM_COUPLING |
| `engine/connectors/syncDispatch.ts` | 9 | MEDIUM_COUPLING |
| `.github/scripts/issue-bot.js` | 8 | MEDIUM_COUPLING |
| `app/ads/create/page.tsx` | 8 | MEDIUM_COUPLING |
| `app/api/admin/child-safety/route.ts` | 8 | MEDIUM_COUPLING |
| `app/api/appeal/route.ts` | 8 | MEDIUM_COUPLING |
| `app/api/codeengin/upload/route.ts` | 8 | MEDIUM_COUPLING, EVENT_BUS |
| `app/api/comments/route.ts` | 8 | MEDIUM_COUPLING |
| `app/dreamdmbar/_components/DreamBarDataBridge.tsx` | 8 | MEDIUM_COUPLING, EVENT_BUS, RUNTIME_REGISTRY, DUAL_RUNTIME |
| `app/dreamdmbar/_components/dreamr/api/feedHandler.ts` | 8 | MEDIUM_COUPLING |
| `app/dreamr/page.tsx` | 8 | MEDIUM_COUPLING |
| `app/engines/games/builder/page.tsx` | 8 | MEDIUM_COUPLING |
| `app/engines/games/library/page.tsx` | 8 | MEDIUM_COUPLING |
| `app/engines/games/scores/page.tsx` | 8 | MEDIUM_COUPLING |
| `app/login/page.tsx` | 8 | MEDIUM_COUPLING |
| `app/marketplace/sell/page.tsx` | 8 | MEDIUM_COUPLING |
| `app/page.tsx` | 8 | MEDIUM_COUPLING |
| `app/settings/security/page.tsx` | 8 | MEDIUM_COUPLING |
| `components/daydream/dreamsurface.daydream.BrandDaydream.tsx` | 8 | MEDIUM_COUPLING, DUAL_RUNTIME |
| `components/dream.ProfileEditor.tsx` | 8 | MEDIUM_COUPLING |
| `components/engines/index.ts` | 8 | MEDIUM_COUPLING |
| `components/profile/dream.ProfileCanvas.tsx` | 8 | MEDIUM_COUPLING |
| `coresurfaces/dreamsurface.EditProfileDream.tsx` | 8 | MEDIUM_COUPLING |
| `engine/observability/otel.ts` | 8 | MEDIUM_COUPLING, RUNTIME_REGISTRY |
| `engine/runtime/dreamOSBus.ts` | 8 | MEDIUM_COUPLING, EVENT_BUS, RUNTIME_REGISTRY, DUAL_RUNTIME |
| `app/ads/slot/[id]/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/api/ads/view/route.ts` | 7 | MEDIUM_COUPLING |
| `app/api/connectors/[provider]/sync/route.ts` | 7 | MEDIUM_COUPLING |
| `app/api/connectors/cron/route.ts` | 7 | MEDIUM_COUPLING |
| `app/api/dreamr/suggested/route.ts` | 7 | MEDIUM_COUPLING |
| `app/api/shop/route.ts` | 7 | MEDIUM_COUPLING |
| `app/connectors/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/daydream/music/upload/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/dream-effects/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/engines/brand/campaigns/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/engines/brand/identity/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/engines/code/ai/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/engines/code/notebook/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/engines/code/projects/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/engines/games/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/engines/lab/data/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/engines/lab/experiments/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/engines/lab/quantum/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/engines/music/arrange/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/engines/music/library/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/engines/music/studio/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/engines/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/engines/portfolio/assets/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/engines/portfolio/optimize/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/engines/portfolio/quantum/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/homedream/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/join/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/lab/new/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/lab/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/messages/boards/[id]/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/settings/account/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/settings/algorithm/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/settings/appearance/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/settings/help/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/settings/page.tsx` | 7 | MEDIUM_COUPLING |
| `app/shop/page.tsx` | 7 | MEDIUM_COUPLING |
| `components/daydream/dream.NGNEngin.tsx` | 7 | MEDIUM_COUPLING |
| `components/dream.AIAssistant.tsx` | 7 | MEDIUM_COUPLING |
| `components/dream.FeedCard.tsx` | 7 | MEDIUM_COUPLING |
| `components/forge/dream.panel.AIBuilderPanel.tsx` | 7 | MEDIUM_COUPLING |
| `components/games/dream.EchoArena.tsx` | 7 | MEDIUM_COUPLING |
| `components/home/dream.bar.GlobalDreamBar.tsx` | 7 | MEDIUM_COUPLING |
| `components/panels/dream.panel.AppearancePanel.tsx` | 7 | MEDIUM_COUPLING |
| `components/panels/dream.panel.SafetyPanel.tsx` | 7 | MEDIUM_COUPLING |
| `components/spatial/dream.shell.EnhancedSpatialShell.tsx` | 7 | MEDIUM_COUPLING, EVENT_BUS |
| `components/three/dream.scene.tsx` | 7 | MEDIUM_COUPLING |
| `dreamdmbar/runtime/DreamSystemContext.tsx` | 7 | MEDIUM_COUPLING, DUAL_RUNTIME |
| `engine/agents/idariLoop.ts` | 7 | MEDIUM_COUPLING |
| `engine/engin-runtime/EnginDomainCores.ts` | 7 | MEDIUM_COUPLING |
| `engine/navigation/SpatialNavigationEngine.ts` | 7 | MEDIUM_COUPLING, EVENT_BUS |
| `engins/contentengin/cli.ts` | 7 | MEDIUM_COUPLING |
| `engins/portfolio/dream.PortfolioEngin.tsx` | 7 | MEDIUM_COUPLING, EVENT_BUS, DUAL_RUNTIME |
| `scripts/gameengin/package-cartridge.ts` | 7 | MEDIUM_COUPLING |
| `app/actions/dream-docs.ts` | 6 | MEDIUM_COUPLING |
| `app/api/activity/track/route.ts` | 6 | MEDIUM_COUPLING |
| `app/api/admin/ai-chat/route.ts` | 6 | MEDIUM_COUPLING |
| `app/api/admin/code-files/route.ts` | 6 | MEDIUM_COUPLING |
| `app/api/blocks/route.ts` | 6 | MEDIUM_COUPLING |
| `app/api/codeengin/workspace/route.ts` | 6 | MEDIUM_COUPLING |
| `app/api/content/intelligence/route.ts` | 6 | MEDIUM_COUPLING |
| `app/api/content/voice-clone/route.ts` | 6 | MEDIUM_COUPLING |
| `app/api/drafts/route.ts` | 6 | MEDIUM_COUPLING |
| `app/api/dream-windows/route.ts` | 6 | MEDIUM_COUPLING |
| `app/api/dreams/feed/route.ts` | 6 | MEDIUM_COUPLING |
| `app/api/feed/route.ts` | 6 | MEDIUM_COUPLING |
| `app/api/game-scores/route.ts` | 6 | MEDIUM_COUPLING |
| `app/api/music/route.ts` | 6 | MEDIUM_COUPLING |
| `app/api/profile/route.ts` | 6 | MEDIUM_COUPLING |
| `app/api/projects/route.ts` | 6 | MEDIUM_COUPLING |
| `app/api/shellhub/devices/route.ts` | 6 | MEDIUM_COUPLING |
| `app/daydream/constellation/page.tsx` | 6 | MEDIUM_COUPLING |
| `app/discover/page.tsx` | 6 | MEDIUM_COUPLING |
| `app/engines/brand/page.tsx` | 6 | MEDIUM_COUPLING |
| `app/engines/code/page.tsx` | 6 | MEDIUM_COUPLING |
| `app/engines/create/calendar/page.tsx` | 6 | MEDIUM_COUPLING |
| `app/engines/create/editor/page.tsx` | 6 | MEDIUM_COUPLING |
| `app/engines/create/page.tsx` | 6 | MEDIUM_COUPLING |
| `app/engines/create/queue/page.tsx` | 6 | MEDIUM_COUPLING |
| `app/engines/lab/page.tsx` | 6 | MEDIUM_COUPLING |
| `app/engines/music/page.tsx` | 6 | MEDIUM_COUPLING |
| `app/engines/portfolio/page.tsx` | 6 | MEDIUM_COUPLING |
| `app/lab/[id]/page.tsx` | 6 | MEDIUM_COUPLING |
| `app/messages/boards/page.tsx` | 6 | MEDIUM_COUPLING |
| `app/notes/page.tsx` | 6 | MEDIUM_COUPLING |
| `app/onboarding/page.tsx` | 6 | MEDIUM_COUPLING |
| `components/customize/dream.GlobalCustomizeUI.tsx` | 6 | MEDIUM_COUPLING |
| `components/dream.CreatePostModal.tsx` | 6 | MEDIUM_COUPLING |
| `components/dream.ForgeDreamCanvas.tsx` | 6 | MEDIUM_COUPLING, EVENT_BUS |
| `components/dream.universal_asset_registry.tsx` | 6 | MEDIUM_COUPLING, EVENT_BUS, RUNTIME_REGISTRY |
| `components/dream.widget.AnchorWidget.tsx` | 6 | MEDIUM_COUPLING |
| `components/engines/code/panels/dream.panel.ProjectsPanel.tsx` | 6 | MEDIUM_COUPLING |
| `components/optimizer/dream.scene.BabylonOptimizeroScene.tsx` | 6 | MEDIUM_COUPLING |
| `components/panels/dream.panel.MarketplacePanel.tsx` | 6 | MEDIUM_COUPLING |
| `components/panels/dream.panel.ProfilePanel.tsx` | 6 | MEDIUM_COUPLING |
| `components/panels/dream.panel.SettingsPanel.tsx` | 6 | MEDIUM_COUPLING |
| `components/shared-dream/dream.SharedDreamRuntime.tsx` | 6 | MEDIUM_COUPLING, EVENT_BUS, DUAL_RUNTIME |
| `components/spatial/dream.ProfileSpace.tsx` | 6 | MEDIUM_COUPLING |
| `engine/connectors/reconcile.ts` | 6 | MEDIUM_COUPLING |
| `engins/codeengin/workspaceStore.ts` | 6 | MEDIUM_COUPLING |
| `engins/contentengin/pipeline/bundle.ts` | 6 | MEDIUM_COUPLING |
| `engins/contentengin/rigging/index.ts` | 6 | MEDIUM_COUPLING |
| `engins/gameengin/post-fx.ts` | 6 | MEDIUM_COUPLING |
| `engins/renderengin/RenderEnginViewport.tsx` | 6 | MEDIUM_COUPLING |
| `engins/renderengin/RenderStage.tsx` | 6 | MEDIUM_COUPLING |
| `fix-repo.cjs` | 6 | MEDIUM_COUPLING, DUAL_RUNTIME |
| `repo-visualizer/analyzer.mjs` | 6 | MEDIUM_COUPLING |
| `dreamr/feed/useLiveFeed.ts` | 5 | EVENT_BUS |
| `app/dreamdmbar/_components/dreamr/dream.DreamRFeed.tsx` | 4 | DUAL_RUNTIME |
| `components/daydream/dream.CodeDreamIDE.tsx` | 4 | EVENT_BUS, DUAL_RUNTIME |
| `components/daydream/dream.LabDreamIDE.tsx` | 4 | EVENT_BUS, DUAL_RUNTIME |
| `components/games/dream.MadMaxiWildfall.tsx` | 4 | EVENT_BUS |
| `components/home/dream.NeuralSeamCanvas.tsx` | 4 | DUAL_RUNTIME |
| `components/runtime/dream.DualRuntimeContainer.tsx` | 4 | DUAL_RUNTIME |
| `dreamdmbar/hooks/useDreamDMConversations.ts` | 4 | EVENT_BUS |
| `dreamdmbar/hooks/useDreamDMMessages.ts` | 4 | EVENT_BUS |
| `engine/dreams/dreamIntentBus.ts` | 4 | EVENT_BUS, DUAL_RUNTIME |
| `engine/intelligence/useSessionIntelligence.ts` | 4 | EVENT_BUS, DUAL_RUNTIME |
| `engine/runtime/apperception.ts` | 4 | DUAL_RUNTIME |
| `engine/runtime/moduleRegistry.ts` | 4 | EVENT_BUS, RUNTIME_REGISTRY, DUAL_RUNTIME, ZUSTAND_STATE |
| `engine/runtime/seamClipboard.ts` | 4 | EVENT_BUS, RUNTIME_REGISTRY, DUAL_RUNTIME |
| `engine/runtime/useDragSurface.ts` | 4 | RUNTIME_REGISTRY |
| `engine/runtime/useSharedEnginChannel.ts` | 4 | EVENT_BUS |
| `engins/gameengin/dream-engine.ts` | 4 | EVENT_BUS |
| `engins/gameengin/gameEnginRuntime.ts` | 4 | EVENT_BUS |
| `engins/gameengin/registerCartridges.ts` | 4 | RUNTIME_REGISTRY |
| `engins/rulesets/brand/useBrandEnginRuntime.ts` | 4 | EVENT_BUS |
| `engins/rulesets/code/useCodeEnginRuntime.ts` | 4 | EVENT_BUS |
| `engins/rulesets/content/useContentEnginRuntime.ts` | 4 | EVENT_BUS |
| `engins/rulesets/game/useGameEnginRuntime.ts` | 4 | EVENT_BUS |
| `engins/rulesets/lab/useLabEnginRuntime.ts` | 4 | EVENT_BUS |
| `engins/rulesets/music/useStarMakerEnginRuntime.ts` | 4 | EVENT_BUS |
| `engins/rulesets/useEnginWorkflow.ts` | 4 | EVENT_BUS, DUAL_RUNTIME |
| `scripts/check-orphans.mjs` | 4 | RUNTIME_REGISTRY |
| `scripts/fix-audit.js` | 4 | DUAL_RUNTIME |
| `scripts/readme-autosync.ts` | 4 | EVENT_BUS, RUNTIME_REGISTRY, DUAL_RUNTIME |
| `app/dreamdmbar/dreamspace/page.tsx` | 3 | DUAL_RUNTIME |
| `app/dreamdmbar/dualruntime/page.tsx` | 3 | DUAL_RUNTIME |
| `app/dreamdmbar/homedream/page.tsx` | 3 | DUAL_RUNTIME |
| `components/draggable/dream.DraggableModule.tsx` | 3 | EVENT_BUS, DUAL_RUNTIME |
| `components/dreams/dream.panel.RuntimeMemoryHUD.tsx` | 3 | EVENT_BUS, DUAL_RUNTIME |
| `components/engines/brand/panels/dream.panel.IdentityPanel.tsx` | 3 | EVENT_BUS, DUAL_RUNTIME |
| `components/engines/games/panels/dream.panel.BuilderPanel.tsx` | 3 | EVENT_BUS, DUAL_RUNTIME |
| `components/gameengin/dream.CartridgeRegistryBootstrap.tsx` | 3 | EVENT_BUS, DUAL_RUNTIME |
| `components/games/dream.AvenueOfMirrors.tsx` | 3 | EVENT_BUS |
| `components/games/dream.Glassfall.tsx` | 3 | EVENT_BUS |
| `components/games/dream.SerpentSiege.tsx` | 3 | EVENT_BUS |
| `components/games/dream.VoidlineGP.tsx` | 3 | EVENT_BUS |
| `components/offline/dream.OfflineRuntimeBootstrap.tsx` | 3 | RUNTIME_REGISTRY |
| `components/runtime/dream.shell.RuntimeShell.tsx` | 3 | DUAL_RUNTIME |
| `engine/navigation/useNavigation.ts` | 3 | EVENT_BUS |
| `engine/runtime/dualRuntimeBridge.ts` | 3 | EVENT_BUS, DUAL_RUNTIME |
| `engine/runtime/iEngine.ts` | 3 | EVENT_BUS, DUAL_RUNTIME |
| `engine/widgets/feed-resolver.ts` | 3 | EVENT_BUS |
| `engins/gameengin/brain-reader.ts` | 3 | RUNTIME_REGISTRY |
| `engins/renderengin/serviceRuntime.ts` | 3 | RUNTIME_REGISTRY, DUAL_RUNTIME |
| `scripts/feature-build/generate-features.mjs` | 3 | EVENT_BUS |
| `scripts/generate-repo-state.mjs` | 3 | EVENT_BUS, RUNTIME_REGISTRY, DUAL_RUNTIME, ZUSTAND_STATE |
| `app/dreamdmbar/_components/dreamr/dream.DreamRCore.tsx` | 2 | EVENT_BUS, DUAL_RUNTIME |
| `components/dreamengin/dream.panel.CrossEnginStatusPanel.tsx` | 2 | DUAL_RUNTIME |
| `engine/agents/adari.ts` | 2 | DUAL_RUNTIME |
| `engine/collaboration/index.ts` | 2 | EVENT_BUS |
| `engine/engin-runtime/HotRuntime.ts` | 2 | RUNTIME_REGISTRY |
| `engine/runtime/EnginDispatcher.ts` | 2 | RUNTIME_REGISTRY, DUAL_RUNTIME |
| `engine/runtime/dropTargetRegistry.ts` | 2 | RUNTIME_REGISTRY |
| `engine/runtime/dualRuntime.ts` | 2 | DUAL_RUNTIME |
| `engine/runtime/useDualRuntime.ts` | 2 | EVENT_BUS, DUAL_RUNTIME |
| `engine/runtime/useDualRuntimePersistence.ts` | 2 | DUAL_RUNTIME |
| `engine/runtime/useEnginBridge.ts` | 2 | EVENT_BUS, DUAL_RUNTIME |
| `engine/vm/dual-runtime.ts` | 2 | EVENT_BUS, DUAL_RUNTIME |
| `engine/web3/client.ts` | 2 | EVENT_BUS |
| `engine/widgets/useWidget.ts` | 2 | EVENT_BUS |
| `engins/forgeengin/forge/engineForge.ts` | 2 | EVENT_BUS |
| `engins/gameengin/GameEnginCore.ts` | 2 | EVENT_BUS, RUNTIME_REGISTRY |
| `scripts/postbuild.js` | 2 | DUAL_RUNTIME |
| `components/ui-system/runtimeViewport.ts` | 1 | DUAL_RUNTIME |
| `engine/platform/index.ts` | 1 | RUNTIME_REGISTRY |
| `engine/runtime/enginWorkflowRegistry.ts` | 1 | RUNTIME_REGISTRY, DUAL_RUNTIME |
| `engine/runtime/quantumCircuit.ts` | 1 | DUAL_RUNTIME |
| `engine/runtime/runtimeChannel.ts` | 1 | EVENT_BUS |
| `engine/vm/dualVMCoordinator.ts` | 1 | DUAL_RUNTIME |
| `engins/gameengin/input/InputRouter.ts` | 1 | EVENT_BUS |
| `engins/gameengin/webgpu-runtime-shell.ts` | 1 | DUAL_RUNTIME |
| `supabase/realtime.ts` | 1 | EVENT_BUS |
| `components/games/_fx/canvasFx.ts` | 0 | EVENT_BUS |
| `engine/events/event-bus/index.ts` | 0 | EVENT_BUS |
| `engine/events/eventBus.ts` | 0 | EVENT_BUS, DUAL_RUNTIME |
| `engine/generated/osArchitectureMap.ts` | 0 | EVENT_BUS, RUNTIME_REGISTRY, DUAL_RUNTIME |
| `engine/generated/surfaces.ts` | 0 | DUAL_RUNTIME |
| `engine/social/livekit.ts` | 0 | EVENT_BUS |
| `engine/widgets/WidgetBus.ts` | 0 | EVENT_BUS |
| `engine/widgets/WidgetEventBus.ts` | 0 | EVENT_BUS |
| `engins/gameengin/xr.ts` | 0 | EVENT_BUS |
| `src/engin/generated/osArchitectureMap.ts` | 0 | EVENT_BUS, RUNTIME_REGISTRY, DUAL_RUNTIME |
| `src/engin/generated/surfaces.ts` | 0 | DUAL_RUNTIME |

---

<a name="raw-tree"></a>

# Raw File Tree

```text
Legend: `!` means unresolved import. Markers are explained above.

+-- .ci
|   +-- DREAMengin CI-CD Pipeline
|   `-- snapshot.diff.txt
+-- agents  [AI / Dr. Eams / Agents]
|   +-- humanAI  [AI / Dr. Eams / Agents]
|   |   `-- personas  [AI / Dr. Eams / Agents]
|   `-- .gitkeep
+-- app 🗂 FEATURE_FOLDER
|   +-- (internal)
|   |   `-- idari-console
|   |       +-- platform-errors
|   |       |   `-- page.tsx 👁 PAGE
|   |       +-- platform-health
|   |       |   `-- page.tsx 👁 PAGE
|   |       `-- page.tsx 👁 PAGE
|   +-- about
|   |   `-- page.tsx 👁 PAGE
|   +-- actions
|   |   `-- dream-docs.ts
|   +-- ads
|   |   +-- create
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- slot
|   |   |   `-- [id]
|   |   |       `-- page.tsx 👁 PAGE
|   |   `-- page.tsx 👁 PAGE
|   +-- api  [Supabase / Database] 🗂 FEATURE_FOLDER
|   |   +-- account  [Supabase / Database]
|   |   |   +-- delete-data  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   +-- delete-dream  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   `-- export-data  [Supabase / Database]
|   |   |       `-- route.ts
|   |   +-- activity  [Supabase / Database]
|   |   |   `-- track  [Supabase / Database]
|   |   |       `-- route.ts
|   |   +-- admin  [Supabase / Database]
|   |   |   +-- ai-chat  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   +-- ai-request  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   +-- child-safety  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   +-- code-files  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   `-- observability  [Supabase / Database]
|   |   |       `-- route.ts
|   |   +-- ads  [Marketplace / Shop / Ads, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   +-- orders  [Marketplace / Shop / Ads, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   `-- view  [Marketplace / Shop / Ads, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |       `-- route.ts 🔌 API_ROUTE
|   |   +-- agent  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   `-- session  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |       `-- route.ts
|   |   +-- ai  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   +-- boogieman  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   |   +-- child-safety  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   +-- privacy-event  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   +-- status  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   `-- route.ts
|   |   |   +-- eams  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   +-- execute  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   `-- idari  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |       `-- route.ts
|   |   +-- appeal  [Supabase / Database]
|   |   |   `-- route.ts
|   |   +-- auth  [Auth, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   +-- logout  [Auth, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   `-- providers  [Auth, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |       `-- route.ts 🔌 API_ROUTE
|   |   +-- blocks  [Supabase / Database]
|   |   |   `-- route.ts
|   |   +-- ci  [Supabase / Database]
|   |   |   `-- run  [Supabase / Database]
|   |   |       `-- route.ts
|   |   +-- close-friends  [Supabase / Database]
|   |   |   `-- route.ts
|   |   +-- codeengin  [CodeEngin, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   +-- diagnostics  [CodeEngin, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   +-- file  [CodeEngin, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   +-- git  [CodeEngin, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   +-- run  [CodeEngin, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   +-- search  [CodeEngin, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   +-- upload  [CodeEngin, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   `-- workspace  [CodeEngin, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |       `-- route.ts 🔌 API_ROUTE
|   |   +-- comments  [Supabase / Database]
|   |   |   `-- route.ts 🔌 API_ROUTE
|   |   +-- connectors  [Supabase / Database]
|   |   |   +-- [provider]  [Supabase / Database]
|   |   |   |   +-- connect  [Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   +-- disconnect  [Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   +-- items  [Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   +-- sync  [Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   `-- verify  [Supabase / Database]
|   |   |   |       `-- route.ts
|   |   |   +-- cron  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   +-- instagram  [Supabase / Database]
|   |   |   |   `-- oauth  [Supabase / Database]
|   |   |   |       +-- callback  [Supabase / Database]
|   |   |   |       |   `-- route.ts
|   |   |   |       `-- start  [Supabase / Database]
|   |   |   |           `-- route.ts
|   |   |   +-- status  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   +-- webhooks  [Supabase / Database]
|   |   |   |   `-- [provider]  [Supabase / Database]
|   |   |   |       `-- route.ts
|   |   |   `-- youtube  [Supabase / Database]
|   |   |       `-- oauth  [Supabase / Database]
|   |   |           +-- callback  [Supabase / Database]
|   |   |           |   `-- route.ts
|   |   |           `-- start  [Supabase / Database]
|   |   |               `-- route.ts
|   |   +-- content  [Supabase / Database]
|   |   |   +-- generative-fill  [Supabase / Database]
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   +-- intelligence  [Supabase / Database]
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   +-- transcribe  [Supabase / Database]
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   `-- voice-clone  [Supabase / Database]
|   |   |       `-- route.ts 🔌 API_ROUTE
|   |   +-- contentengin  [Supabase / Database]
|   |   |   +-- assets  [Supabase / Database]
|   |   |   |   `-- [assetId]  [Supabase / Database]
|   |   |   |       +-- export  [Supabase / Database]
|   |   |   |       |   `-- gameengin  [Supabase / Database]
|   |   |   |       |       `-- route.ts 🔌 API_ROUTE
|   |   |   |       `-- route.ts 🔌 API_ROUTE
|   |   |   +-- jobs  [Supabase / Database]
|   |   |   |   +-- [jobId]  [Supabase / Database]
|   |   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   `-- upload  [Supabase / Database]
|   |   |       `-- route.ts 🔌 API_ROUTE
|   |   +-- dr-eams  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   +-- hf  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   `-- run  [AI / Dr. Eams / Agents, Supabase / Database]
|   |   |       `-- route.ts
|   |   +-- drafts  [Supabase / Database]
|   |   |   +-- [id]  [Supabase / Database]
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   `-- route.ts 🔌 API_ROUTE
|   |   +-- dream-windows  [Supabase / Database]
|   |   |   +-- [id]  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   `-- route.ts
|   |   +-- dreamengin  [Supabase / Database]
|   |   |   `-- os-status  [Supabase / Database]
|   |   |       `-- route.ts
|   |   +-- dreamr  [DreamR, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   +-- feed  [DreamR, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   +-- suggested  [DreamR, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   `-- tally  [DreamR, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |       `-- route.ts 🔌 API_ROUTE
|   |   +-- dreams  [Supabase / Database]
|   |   |   +-- feed  [Supabase / Database]
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   +-- instances  [Supabase / Database]
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   `-- transfer  [Supabase / Database]
|   |   |       `-- route.ts 🔌 API_ROUTE
|   |   +-- embed-feed  [Supabase / Database]
|   |   |   `-- route.ts
|   |   +-- favorites  [Supabase / Database]
|   |   |   `-- route.ts
|   |   +-- feed  [Feed / Social, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   `-- route.ts 🔌 API_ROUTE
|   |   +-- follow  [Supabase / Database]
|   |   |   `-- route.ts 🔌 API_ROUTE
|   |   +-- forge  [Supabase / Database]
|   |   +-- gal  [Supabase / Database]
|   |   |   `-- route.ts
|   |   +-- game-scores  [Supabase / Database]
|   |   |   `-- route.ts 🔌 API_ROUTE
|   |   +-- gameengin  [Supabase / Database]
|   |   |   `-- crash-report  [Supabase / Database]
|   |   |       `-- route.ts 🔌 API_ROUTE
|   |   +-- health  [Supabase / Database]
|   |   |   `-- route.ts
|   |   +-- home-layout  [Supabase / Database]
|   |   |   `-- route.ts 🔌 API_ROUTE
|   |   +-- journey  [Supabase / Database]
|   |   |   `-- route.ts
|   |   +-- lab  [Supabase / Database]
|   |   |   `-- benchmarks  [Supabase / Database]
|   |   |       `-- route.ts 🔌 API_ROUTE
|   |   +-- ledger-media  [Supabase / Database]
|   |   |   `-- route.ts
|   |   +-- likes  [Supabase / Database]
|   |   |   `-- route.ts 🔌 API_ROUTE
|   |   +-- marketplace  [Marketplace / Shop / Ads, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   +-- request  [Marketplace / Shop / Ads, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   `-- route.ts 🔌 API_ROUTE
|   |   +-- messages  [Messages / DMs, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   +-- boards  [Messages / DMs, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   `-- route.ts 🔌 API_ROUTE
|   |   +-- metrics  [Supabase / Database]
|   |   |   +-- platform  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   +-- user  [Supabase / Database]
|   |   |   |   `-- [userId]  [Supabase / Database]
|   |   |   |       `-- route.ts
|   |   |   `-- route.ts
|   |   +-- music  [Supabase / Database]
|   |   |   `-- route.ts 🔌 API_ROUTE
|   |   +-- notifications  [Supabase / Database]
|   |   |   `-- route.ts
|   |   +-- platform  [Supabase / Database]
|   |   |   `-- errors  [Supabase / Database]
|   |   |       `-- route.ts
|   |   +-- posts  [Feed / Social, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   +-- [id]  [Feed / Social, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   |   +-- save  [Feed / Social, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   |   +-- view  [Feed / Social, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   +-- profile  [Feed / Social, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   |   `-- [userId]  [Feed / Social, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   |       `-- route.ts 🔌 API_ROUTE
|   |   |   `-- route.ts 🔌 API_ROUTE
|   |   +-- profile  [Supabase / Database]
|   |   |   `-- route.ts 🔌 API_ROUTE
|   |   +-- projects  [Supabase / Database]
|   |   |   `-- route.ts 🔌 API_ROUTE
|   |   +-- scheduled-posts  [Supabase / Database]
|   |   |   `-- route.ts 🔌 API_ROUTE
|   |   +-- security  [Supabase / Database]
|   |   |   `-- scan  [Supabase / Database]
|   |   |       `-- route.ts
|   |   +-- settings  [Supabase / Database]
|   |   |   +-- appearance  [Supabase / Database]
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   +-- feed  [Supabase / Database]
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   +-- notifications  [Supabase / Database]
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   `-- privacy  [Supabase / Database]
|   |   |       `-- route.ts 🔌 API_ROUTE
|   |   +-- setup  [Supabase / Database]
|   |   |   +-- check  [Supabase / Database]
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   `-- google-oauth  [Supabase / Database]
|   |   |       `-- route.ts 🔌 API_ROUTE
|   |   +-- shared-dream  [Supabase / Database]
|   |   |   `-- sessions  [Supabase / Database]
|   |   |       +-- [id]  [Supabase / Database]
|   |   |       |   `-- route.ts
|   |   |       `-- route.ts
|   |   +-- shellhub  [Supabase / Database]
|   |   |   `-- devices  [Supabase / Database]
|   |   |       `-- route.ts
|   |   +-- shop  [Marketplace / Shop / Ads, Supabase / Database] 🗂 FEATURE_FOLDER
|   |   |   `-- route.ts 🔌 API_ROUTE
|   |   +-- skip-credits  [Supabase / Database]
|   |   |   +-- balance  [Supabase / Database]
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   +-- earn  [Supabase / Database]
|   |   |   |   `-- route.ts 🔌 API_ROUTE
|   |   |   `-- use  [Supabase / Database]
|   |   |       `-- route.ts 🔌 API_ROUTE
|   |   +-- social  [Supabase / Database]
|   |   |   +-- ipfs  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   +-- livekit  [Supabase / Database]
|   |   |   |   +-- room  [Supabase / Database]
|   |   |   |   |   `-- route.ts
|   |   |   |   `-- token  [Supabase / Database]
|   |   |   |       `-- route.ts
|   |   |   `-- rss-feed  [Supabase / Database]
|   |   |       `-- route.ts
|   |   +-- upload  [Supabase / Database]
|   |   |   `-- route.ts
|   |   +-- user  [Supabase / Database]
|   |   |   `-- layout  [Supabase / Database]
|   |   |       `-- route.ts
|   |   +-- views  [Supabase / Database]
|   |   |   `-- track  [Supabase / Database]
|   |   |       `-- route.ts 🔌 API_ROUTE
|   |   +-- widgets  [Supabase / Database]
|   |   |   +-- feed  [Supabase / Database]
|   |   |   |   `-- route.ts
|   |   |   `-- instances  [Supabase / Database]
|   |   |       `-- route.ts
|   |   `-- youtube  [Supabase / Database]
|   |       +-- channel  [Supabase / Database]
|   |       |   `-- route.ts
|   |       +-- discovery  [Supabase / Database]
|   |       |   `-- route.ts
|   |       `-- live-feed  [Supabase / Database]
|   |           `-- route.ts
|   +-- auth  [Auth] 🗂 FEATURE_FOLDER
|   |   +-- callback  [Auth] 🗂 FEATURE_FOLDER
|   |   |   `-- route.ts
|   |   +-- reset-password  [Auth] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   `-- update-password  [Auth] 🗂 FEATURE_FOLDER
|   |       `-- page.tsx 👁 PAGE
|   +-- connectors
|   |   +-- dream.ConnectorsClient.tsx 🧩 COMPONENT
|   |   `-- page.tsx 👁 PAGE
|   +-- daydream 🗂 FEATURE_FOLDER
|   |   +-- brand  [BrandEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- engin  [BrandEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- code  [CodeEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- engin  [CodeEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- constellation
|   |   |   +-- dream.ConstellationClient.tsx 🧩 COMPONENT
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- create  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- engin  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- forge  [ForgeEngin] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- game
|   |   |   +-- dream.GamePageClient.tsx
|   |   |   +-- dream.shell.ImmersiveGameShell.tsx 🧩 COMPONENT
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- games  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- engin  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- lab  [LabEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- engin  [LabEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- portfolio  [LabEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- media-vault
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- music  [StarMakerEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- engin  [StarMakerEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- upload  [StarMakerEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- play
|   |   |   `-- page.tsx 👁 PAGE
|   |   `-- render  [RenderEngin]
|   |       `-- page.tsx 👁 PAGE
|   +-- discover  [Feed / Social] 🗂 FEATURE_FOLDER
|   |   `-- page.tsx 👁 PAGE
|   +-- dream-effects
|   |   `-- page.tsx 👁 PAGE
|   +-- dreamdmbar  [Home / DreamDMBar / DualRuntime, Messages / DMs] 🗂 FEATURE_FOLDER
|   |   +-- _components  [Home / DreamDMBar / DualRuntime, Messages / DMs] 🗂 FEATURE_FOLDER
|   |   |   +-- dreamr  [Home / DreamDMBar / DualRuntime, Messages / DMs, DreamR] 🗂 FEATURE_FOLDER
|   |   |   |   +-- algorithms  [Home / DreamDMBar / DualRuntime, Messages / DMs, DreamR] 🗂 FEATURE_FOLDER
|   |   |   |   |   +-- botDetector.ts
|   |   |   |   |   `-- dreamrAlgorithm.ts
|   |   |   |   +-- api  [Home / DreamDMBar / DualRuntime, Messages / DMs, DreamR] 🗂 FEATURE_FOLDER
|   |   |   |   |   +-- feedHandler.ts
|   |   |   |   |   `-- route.ts
|   |   |   |   +-- dream.DreamRCore.tsx 🧩 COMPONENT
|   |   |   |   +-- dream.DreamRFeed.tsx 🧩 COMPONENT
|   |   |   |   `-- dreamsurface.dreamr.tsx 🧩 COMPONENT
|   |   |   +-- DreamBarDataBridge.tsx 🧩 COMPONENT
|   |   |   +-- DreamSpaceRegion.tsx 🧩 COMPONENT
|   |   |   +-- DreamWidgetGrid.tsx 🧩 COMPONENT
|   |   |   `-- HomeDreamRegion.tsx 🧩 COMPONENT
|   |   +-- dreamspace  [Home / DreamDMBar / DualRuntime, Messages / DMs] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- dualruntime  [Home / DreamDMBar / DualRuntime, Messages / DMs] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- homedream  [Home / DreamDMBar / DualRuntime, Messages / DMs] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- layout.tsx 🧱 LAYOUT
|   |   `-- page.tsx 👁 PAGE
|   +-- dreamr  [DreamR] 🗂 FEATURE_FOLDER
|   |   `-- page.tsx 👁 PAGE
|   +-- dreamspace
|   |   `-- page.tsx 👁 PAGE
|   +-- edit-profiledream  [Profile] 🗂 FEATURE_FOLDER
|   |   `-- page.tsx 👁 PAGE
|   +-- engines 🗂 FEATURE_FOLDER
|   |   +-- brand  [BrandEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- campaigns  [BrandEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- identity  [BrandEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- layout.tsx 🧱 LAYOUT
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- code  [CodeEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- ai  [CodeEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- notebook  [CodeEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- projects  [CodeEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- layout.tsx 🧱 LAYOUT
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- create  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- calendar  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- editor  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- queue  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- layout.tsx 🧱 LAYOUT
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- games  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- builder  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- library  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- scores  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- layout.tsx 🧱 LAYOUT
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- lab  [LabEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- data  [LabEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- experiments  [LabEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- quantum  [LabEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- layout.tsx 🧱 LAYOUT
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- music  [StarMakerEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- arrange  [StarMakerEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- library  [StarMakerEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- studio  [StarMakerEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- layout.tsx 🧱 LAYOUT
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- portfolio
|   |   |   +-- assets
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- optimize
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- quantum
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- layout.tsx 🧱 LAYOUT
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- render  [RenderEngin]
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- layout.tsx 🧱 LAYOUT
|   |   `-- page.tsx 👁 PAGE
|   +-- feed-settings
|   |   +-- dream.FeedSettingsClient.tsx 🧩 COMPONENT
|   |   `-- page.tsx 👁 PAGE
|   +-- gameengin
|   |   +-- cartridges
|   |   |   +-- [id]
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   `-- page.tsx 👁 PAGE
|   |   `-- page.tsx 👁 PAGE
|   +-- homedream  [Home / DreamDMBar / DualRuntime] 🗂 FEATURE_FOLDER
|   |   `-- page.tsx 👁 PAGE
|   +-- join  [Auth] 🗂 FEATURE_FOLDER
|   |   `-- page.tsx 👁 PAGE
|   +-- lab
|   |   +-- [id]
|   |   |   +-- codespace
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- new
|   |   |   `-- page.tsx 👁 PAGE
|   |   `-- page.tsx 👁 PAGE
|   +-- login  [Auth] 🗂 FEATURE_FOLDER
|   |   `-- page.tsx 👁 PAGE
|   +-- marketplace  [Marketplace / Shop / Ads] 🗂 FEATURE_FOLDER
|   |   +-- [id]  [Marketplace / Shop / Ads] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- sell  [Marketplace / Shop / Ads] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   `-- page.tsx 👁 PAGE
|   +-- messages  [Messages / DMs] 🗂 FEATURE_FOLDER
|   |   +-- boards  [Messages / DMs] 🗂 FEATURE_FOLDER
|   |   |   +-- [id]  [Messages / DMs] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   +-- new  [Messages / DMs] 🗂 FEATURE_FOLDER
|   |   |   |   `-- page.tsx 👁 PAGE
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- new  [Messages / DMs] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   `-- page.tsx 👁 PAGE
|   +-- mission
|   |   `-- page.tsx 👁 PAGE
|   +-- notes
|   |   `-- page.tsx 👁 PAGE
|   +-- onboarding  [Auth] 🗂 FEATURE_FOLDER
|   |   `-- page.tsx 👁 PAGE
|   +-- policy
|   |   `-- page.tsx 👁 PAGE
|   +-- profile  [Profile] 🗂 FEATURE_FOLDER
|   |   +-- [handle]  [Profile] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   `-- page.tsx 👁 PAGE
|   +-- settings  [Settings / Customization] 🗂 FEATURE_FOLDER
|   |   +-- account  [Settings / Customization] 🗂 FEATURE_FOLDER
|   |   |   +-- dream.DangerZoneActions.tsx 🧩 COMPONENT
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- algorithm  [Settings / Customization] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- appearance  [Settings / Customization] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- controls  [Settings / Customization] 🗂 FEATURE_FOLDER
|   |   |   +-- dream.ControlsClient.tsx 🧩 COMPONENT
|   |   |   +-- dream.PositionIndicatorToggle.tsx 🧩 COMPONENT
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- data  [Settings / Customization] 🗂 FEATURE_FOLDER
|   |   |   +-- dream.DataClient.tsx 🧩 COMPONENT
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- dreams  [Settings / Customization] 🗂 FEATURE_FOLDER
|   |   |   +-- dreams-layout-editor.tsx
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- feed  [Settings / Customization] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- help  [Settings / Customization] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- notifications  [Settings / Customization] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- privacy  [Settings / Customization] 🗂 FEATURE_FOLDER
|   |   |   +-- dream.PrivacyClient.tsx 🧩 COMPONENT
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- safety  [Settings / Customization] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- security  [Settings / Customization] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   +-- widgets  [Settings / Customization] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   `-- page.tsx 👁 PAGE
|   +-- shop  [Marketplace / Shop / Ads] 🗂 FEATURE_FOLDER
|   |   +-- sell  [Marketplace / Shop / Ads] 🗂 FEATURE_FOLDER
|   |   |   `-- page.tsx 👁 PAGE
|   |   `-- page.tsx 👁 PAGE
|   +-- u  [Profile] 🗂 FEATURE_FOLDER
|   |   `-- [handle]  [Profile] 🗂 FEATURE_FOLDER
|   |       `-- page.tsx 👁 PAGE
|   +-- view-profile  [Profile] 🗂 FEATURE_FOLDER
|   |   `-- page.tsx 👁 PAGE
|   +-- webgpu
|   |   `-- page.tsx 👁 PAGE
|   +-- error.tsx 🚨 ERROR
|   +-- global-error.tsx 🚨 ERROR
|   +-- globals-enhanced.css
|   +-- layout.tsx 🧱 LAYOUT
|   +-- loading.tsx ⏳ LOADING
|   +-- not-found.tsx 🧭 NOT_FOUND
|   `-- page.tsx 👁 PAGE
+-- assembly  [GameEngin, VM / WASM] 🗂 FEATURE_FOLDER
|   +-- bus.ts
|   +-- index.ts
|   `-- mad-maxi-player.ts
+-- build-memory  [AI / Dr. Eams / Agents]
|   +-- typecheck  [AI / Dr. Eams / Agents]
|   |   `-- error-files.txt
|   +-- actions.json
|   +-- events.json
|   +-- registry.json
|   +-- routes.json
|   +-- schema.json
|   `-- ui-surfaces.json
+-- components 🗂 FEATURE_FOLDER
|   +-- activity
|   |   +-- dream.ActivityPostForm.tsx 🧩 COMPONENT
|   |   +-- dream.ActivityProfile.tsx 🧩 COMPONENT
|   |   `-- dream.TierBadge.tsx 🧩 COMPONENT
|   +-- ads  [Marketplace / Shop / Ads] 🗂 FEATURE_FOLDER
|   |   +-- dream.AdUnit.tsx 🧩 COMPONENT
|   |   `-- dream.SkipCreditBalance.tsx 🧩 COMPONENT
|   +-- auth  [Auth] 🗂 FEATURE_FOLDER
|   |   `-- dream.PasswordField.tsx 🧩 COMPONENT
|   +-- branding
|   |   +-- dream.DreamEnginLogo.tsx 🧩 COMPONENT
|   |   +-- dream.LogoHero.tsx 🧩 COMPONENT
|   |   `-- dream.Nav.tsx 🧩 COMPONENT
|   +-- connectors
|   |   +-- dream.AddSliceSheet.tsx 🧩 COMPONENT
|   |   +-- dream.ConnectDreamPrompt.tsx
|   |   +-- dream.ConnectorRow.tsx 🧩 COMPONENT
|   |   +-- dream.NoSlotDialog.tsx 🧩 COMPONENT
|   |   +-- dream.PlacementMode.tsx 🧩 COMPONENT
|   |   +-- dream.widget.ConnectorWidgetPicker.tsx 🧩 COMPONENT
|   |   `-- dream.widget.ConnectWidgetPrompt.tsx 🧩 COMPONENT
|   +-- contentengin
|   |   +-- AnimationPanel.tsx 🧩 COMPONENT
|   |   +-- AssetPreview3D.tsx 🧩 COMPONENT
|   |   +-- ContentEnginStudio.tsx 🧩 COMPONENT
|   |   +-- ExportPanel.tsx 🧩 COMPONENT
|   |   +-- MaterialEditor.tsx 🧩 COMPONENT
|   |   +-- PartTreeEditor.tsx 🧩 COMPONENT
|   |   +-- PhotoReferencePanel.tsx 🧩 COMPONENT
|   |   +-- RecipeEditor.tsx 🧩 COMPONENT
|   |   `-- RiggingPanel.tsx 🧩 COMPONENT
|   +-- core
|   |   `-- dream.CoreDream.tsx 🧩 COMPONENT
|   +-- customize  [Settings / Customization] 🗂 FEATURE_FOLDER
|   |   +-- panels  [Settings / Customization] 🗂 FEATURE_FOLDER
|   |   |   +-- dream.panel.ColorPanel.tsx 🧩 COMPONENT
|   |   |   +-- dream.panel.EffectsPanel.tsx 🧩 COMPONENT
|   |   |   +-- dream.panel.FontPanel.tsx 🧩 COMPONENT
|   |   |   `-- dream.panel.LayoutPanel.tsx 🧩 COMPONENT
|   |   +-- dream.bar.CustomizeModeBar.tsx 🧩 COMPONENT
|   |   +-- dream.bar.CustomizeToolbar.tsx 🧩 COMPONENT
|   |   `-- dream.GlobalCustomizeUI.tsx 🧩 COMPONENT
|   +-- daydream
|   |   +-- starmaker
|   |   |   +-- dream.panel.CompingPanel.tsx 🧩 COMPONENT
|   |   |   +-- dream.panel.MultitrackArrangementPanel.tsx 🧩 COMPONENT
|   |   |   +-- dream.panel.PianoRollPanel.tsx 🧩 COMPONENT
|   |   |   `-- dream.panel.SessionViewPanel.tsx 🧩 COMPONENT
|   |   +-- dream.CodeDreamIDE.tsx 🧩 COMPONENT
|   |   +-- dream.constellationmap.tsx 🧩 COMPONENT
|   |   +-- dream.DiffViewer.tsx 🧩 COMPONENT
|   |   +-- dream.JourneyTrail.tsx 🧩 COMPONENT
|   |   +-- dream.LabDreamIDE.tsx 🧩 COMPONENT
|   |   +-- dream.NGNEngin.tsx 🧩 COMPONENT
|   |   +-- dream.OpenDaydreamSideBButton.tsx 🧩 COMPONENT
|   |   +-- dream.shell.DaydreamShell.tsx 🧩 COMPONENT
|   |   +-- dream.StandaloneEnginSurface.tsx 🧩 COMPONENT
|   |   `-- dreamsurface.daydream.BrandDaydream.tsx 🧩 COMPONENT
|   +-- draggable
|   |   `-- dream.DraggableModule.tsx 🧩 COMPONENT
|   +-- dreamengin
|   |   +-- engine
|   |   |   +-- math.ts
|   |   |   `-- types.ts
|   |   +-- dream.bar.DrEamsSearchBar.tsx 🧩 COMPONENT
|   |   +-- dream.CanvasDropZone.tsx 🧩 COMPONENT
|   |   +-- dream.DREAMenginOS.tsx 🧩 COMPONENT
|   |   +-- dream.DrEamsCanvas.tsx 🧩 COMPONENT
|   |   +-- dream.HomeControls.tsx 🧩 COMPONENT
|   |   +-- dream.menu.NexusMenu.tsx 🧩 COMPONENT
|   |   +-- dream.menu.OutdreamMenu.tsx 🧩 COMPONENT
|   |   +-- dream.overlay.ViewAllDreamsOverlay.tsx 🧩 COMPONENT
|   |   +-- dream.panel.CrossEnginStatusPanel.tsx 🧩 COMPONENT
|   |   +-- dream.panel.DrEamsPanel.tsx 🧩 COMPONENT
|   |   +-- dream.scene.BabylonGameScene.tsx 🧩 COMPONENT
|   |   +-- dream.scene.DrEamsScene.tsx 🧩 COMPONENT
|   |   +-- dream.scene.PortfolioOptimizationScene.tsx 🧩 COMPONENT
|   |   +-- dream.shell.EnginShell.tsx 🧩 COMPONENT
|   |   +-- dream.widget.AppearanceWidget.tsx 🧩 COMPONENT
|   |   `-- dreamsurface.dreamengin.tsx 🧩 COMPONENT
|   +-- dreamnav
|   |   +-- dream.DreamNavControls.tsx 🧩 COMPONENT
|   |   `-- dreamsurface.dreamnav.tsx 🧩 COMPONENT
|   +-- dreamr  [DreamR] 🗂 FEATURE_FOLDER
|   |   +-- dream.CloseFriendsSettings.tsx 🧩 COMPONENT
|   |   +-- dream.panel.DreamRChannelPanel.tsx 🧩 COMPONENT
|   |   `-- dream.panel.DreamRCreatorPanel.tsx 🧩 COMPONENT
|   +-- dreams
|   |   +-- dream.connectorlayer.tsx 🧩 COMPONENT
|   |   +-- dream.DraggableDream.tsx 🧩 COMPONENT
|   |   +-- dream.featurelayer.tsx 🧩 COMPONENT
|   |   +-- dream.GlobalDragLayer.tsx 🧩 COMPONENT
|   |   +-- dream.outputlayer.tsx 🧩 COMPONENT
|   |   +-- dream.panel.RuntimeMemoryHUD.tsx 🧩 COMPONENT
|   |   +-- dream.PlatformErrorReporter.tsx 🧩 COMPONENT
|   |   +-- dream.shell.DreamShell.tsx
|   |   +-- dream.shell.SharedDreamShell.tsx 🧩 COMPONENT
|   |   +-- dream.SlideOverPanel.tsx 🧩 COMPONENT
|   |   +-- dream.widget.SuperDreamWidget.tsx 🧩 COMPONENT
|   |   +-- dream.window.JourneyDreamWindow.tsx 🧩 COMPONENT
|   |   +-- dreamsurface.dreamspace.tsx 🧩 COMPONENT
|   |   +-- dreamsurface.shell.tsx 🧩 COMPONENT
|   |   `-- dreamsurface.window.tsx 🧩 COMPONENT
|   +-- engines 🗂 FEATURE_FOLDER
|   |   +-- brand  [BrandEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- panels  [BrandEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- dream.panel.CampaignsPanel.tsx 🧩 COMPONENT
|   |   |   |   `-- dream.panel.IdentityPanel.tsx 🧩 COMPONENT
|   |   |   +-- dream.BrandEnginApp.tsx
|   |   |   `-- index.ts
|   |   +-- code  [CodeEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- panels  [CodeEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- dream.panel.AIPanel.tsx 🧩 COMPONENT
|   |   |   |   +-- dream.panel.NotebookPanel.tsx 🧩 COMPONENT
|   |   |   |   `-- dream.panel.ProjectsPanel.tsx 🧩 COMPONENT
|   |   |   +-- dream.CodeEnginApp.tsx
|   |   |   `-- index.ts
|   |   +-- create  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- panels  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- dream.panel.CalendarPanel.tsx 🧩 COMPONENT
|   |   |   |   +-- dream.panel.EditorPanel.tsx 🧩 COMPONENT
|   |   |   |   `-- dream.panel.QueuePanel.tsx 🧩 COMPONENT
|   |   |   +-- dream.CreateEnginApp.tsx
|   |   |   `-- index.ts
|   |   +-- games
|   |   |   +-- panels
|   |   |   |   +-- dream.panel.BuilderPanel.tsx 🧩 COMPONENT
|   |   |   |   +-- dream.panel.LibraryPanel.tsx 🧩 COMPONENT
|   |   |   |   `-- dream.panel.ScoresPanel.tsx 🧩 COMPONENT
|   |   |   +-- dream.GameEnginApp.tsx
|   |   |   `-- index.ts
|   |   +-- lab  [LabEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- panels  [LabEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- dream.panel.DataVizPanel.tsx 🧩 COMPONENT
|   |   |   |   +-- dream.panel.ExperimentsPanel.tsx 🧩 COMPONENT
|   |   |   |   `-- dream.panel.QuantumPanel.tsx 🧩 COMPONENT
|   |   |   +-- dream.LabEnginApp.tsx
|   |   |   `-- index.ts
|   |   +-- music  [StarMakerEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- panels  [StarMakerEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- dream.panel.ArrangePanel.tsx 🧩 COMPONENT
|   |   |   |   +-- dream.panel.MusicLibraryPanel.tsx 🧩 COMPONENT
|   |   |   |   `-- dream.panel.StudioPanel.tsx 🧩 COMPONENT
|   |   |   +-- dream.MusicEnginApp.tsx
|   |   |   `-- index.ts
|   |   +-- portfolio
|   |   |   +-- panels
|   |   |   |   +-- dream.panel.AssetsPanel.tsx 🧩 COMPONENT
|   |   |   |   +-- dream.panel.OptimizePanel.tsx 🧩 COMPONENT
|   |   |   |   `-- dream.panel.PortfolioQuantumPanel.tsx 🧩 COMPONENT
|   |   |   +-- dream.PortfolioEnginApp.tsx
|   |   |   `-- index.ts
|   |   +-- render
|   |   |   +-- dream.RenderServiceDiagnostics.tsx 🧩 COMPONENT
|   |   |   +-- dream.RenderSurface.tsx 🧩 COMPONENT
|   |   |   `-- index.ts
|   |   +-- shared
|   |   |   +-- dream.bar.EnginNavBar.tsx 🧩 COMPONENT
|   |   |   +-- dream.EnginProvider.tsx 🧩 COMPONENT
|   |   |   +-- dream.EnginRuleSet.ts
|   |   |   +-- dream.makeEnginApp.tsx 🧩 COMPONENT
|   |   |   +-- dream.shell.EnginAppShell.tsx 🧩 COMPONENT
|   |   |   `-- index.ts
|   |   `-- index.ts
|   +-- feed  [Feed / Social] 🗂 FEATURE_FOLDER
|   |   +-- dream.AlgorithmEngine.tsx 🧩 COMPONENT
|   |   +-- dream.CommentSection.tsx 🧩 COMPONENT
|   |   +-- dream.FeedVideoCard.tsx 🧩 COMPONENT
|   |   +-- dream.FollowButton.tsx 🧩 COMPONENT
|   |   `-- dream.FollowOnboarding.tsx 🧩 COMPONENT
|   +-- feeds  [Feed / Social]
|   |   `-- dream.widget.EmbedFeedWidget.tsx 🧩 COMPONENT
|   +-- forge  [ForgeEngin] 🗂 FEATURE_FOLDER
|   |   +-- dream.EngineBuilderCanvas.tsx 🧩 COMPONENT
|   |   +-- dream.panel.AIBuilderPanel.tsx 🧩 COMPONENT
|   |   `-- dream.widget.ForgeMomentumWidget.tsx 🧩 COMPONENT
|   +-- gameengin  [GameEngin] 🗂 FEATURE_FOLDER
|   |   +-- input  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   `-- DualSenseManager.ts
|   |   +-- dream.cartridge.CartridgeBrowser.tsx 🧩 COMPONENT
|   |   +-- dream.cartridge.CartridgeErrorBoundary.tsx 🧩 COMPONENT
|   |   +-- dream.cartridge.CartridgeLauncher.tsx 🧩 COMPONENT
|   |   +-- dream.cartridge.FeaturedCartridges.tsx 🧩 COMPONENT
|   |   +-- dream.CartridgeRegistryBootstrap.tsx 🧩 COMPONENT
|   |   `-- dream.CrashReportModal.tsx 🧩 COMPONENT
|   +-- games  [GameEngin] 🗂 FEATURE_FOLDER
|   |   +-- _fx  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   `-- canvasFx.ts
|   |   +-- madmaxi  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- audio.ts
|   |   |   +-- authoredZonePacks.ts
|   |   |   +-- config.ts
|   |   |   +-- dream.MadmaxiGame.tsx 🧩 COMPONENT
|   |   |   +-- index.ts
|   |   |   +-- levels.ts
|   |   |   +-- materials.ts
|   |   |   +-- types.ts
|   |   |   `-- vfx.ts
|   |   +-- css-modules.d.ts
|   |   +-- dream.AvenueOfMirrors.tsx 🧩 COMPONENT
|   |   +-- dream.BabylonSideScroller.tsx
|   |   +-- dream.DefuseRitual.tsx 🧩 COMPONENT
|   |   +-- dream.EchoArena.tsx 🧩 COMPONENT
|   |   +-- dream.EnginFracture.tsx 🧩 COMPONENT
|   |   +-- dream.GameController.module.css
|   |   +-- dream.GameController.tsx
|   |   +-- dream.GamesHub.tsx 🧩 COMPONENT
|   |   +-- dream.Glassfall.tsx 🧩 COMPONENT
|   |   +-- dream.hud.GameHUD.tsx 🧩 COMPONENT
|   |   +-- dream.hud.LegacyGameHUD.tsx 🧩 COMPONENT
|   |   +-- dream.hud.MobileGameHUD.module.css
|   |   +-- dream.hud.MobileGameHUD.tsx 🧩 COMPONENT
|   |   +-- dream.Leaderboard.tsx 🧩 COMPONENT
|   |   +-- dream.LexiconSolitaire.tsx 🧩 COMPONENT
|   |   +-- dream.MadMaxiWildfall.tsx 🧩 COMPONENT
|   |   +-- dream.NeonDrift.tsx 🧩 COMPONENT
|   |   +-- dream.NiteFlyerSolarHymn.tsx 🧩 COMPONENT
|   |   +-- dream.NullCathedral.tsx 🧩 COMPONENT
|   |   +-- dream.RecordingControls.tsx 🧩 COMPONENT
|   |   +-- dream.remote.GameRemote.tsx
|   |   +-- dream.remote.GameRemoteSurface.tsx 🧩 COMPONENT
|   |   +-- dream.remote.LegacyGameRemote.tsx
|   |   +-- dream.SerpentSiege.tsx 🧩 COMPONENT
|   |   `-- dream.VoidlineGP.tsx 🧩 COMPONENT
|   +-- home  [Home / DreamDMBar / DualRuntime] 🗂 FEATURE_FOLDER
|   |   +-- dream.ActiveModuleSurface.tsx 🧩 COMPONENT
|   |   +-- dream.bar.GlobalDreamBar.tsx 🧩 COMPONENT
|   |   +-- dream.bar.PersistentDreamBar.tsx 🧩 COMPONENT
|   |   +-- dream.DaydreamPulseStrip.tsx 🧩 COMPONENT
|   |   +-- dream.FlagshipEnginesStrip.tsx 🧩 COMPONENT
|   |   +-- dream.NeuralSeamCanvas.tsx 🧩 COMPONENT
|   |   +-- dream.widget.DreamWidget.tsx 🧩 COMPONENT
|   |   `-- dream.ZoomablePane.tsx 🧩 COMPONENT
|   +-- icons
|   |   `-- sheet.ts
|   +-- idari  [AI / Dr. Eams / Agents]
|   |   `-- dream.PlatformHealth.tsx 🧩 COMPONENT
|   +-- landing
|   |   +-- dream.LandingNav.tsx 🧩 COMPONENT
|   |   +-- dream.LandingProductStatement.tsx 🧩 COMPONENT
|   |   `-- dream.scene.UniverseField.tsx 🧩 COMPONENT
|   +-- marketplace  [Marketplace / Shop / Ads] 🗂 FEATURE_FOLDER
|   |   +-- dream.MarketplaceListingCard.tsx 🧩 COMPONENT
|   |   `-- dream.MarketplaceRequestButton.tsx 🧩 COMPONENT
|   +-- menus
|   |   +-- dream.menu.DreamRadialMenu.tsx 🧩 COMPONENT
|   |   +-- dream.menu.DualBottomMenu.tsx 🧩 COMPONENT
|   |   +-- dream.menu.RadialMenu.tsx 🧩 COMPONENT
|   |   +-- dream.menu.SystemRadialMenu.tsx 🧩 COMPONENT
|   |   `-- dream.panel.MenuPanel.tsx 🧩 COMPONENT
|   +-- messaging  [Messages / DMs] 🗂 FEATURE_FOLDER
|   |   `-- dream.BoardComposer.tsx 🧩 COMPONENT
|   +-- music
|   |   `-- dream.SoundRecorder.tsx 🧩 COMPONENT
|   +-- offline
|   |   +-- dream.OfflineRuntimeBootstrap.tsx 🧩 COMPONENT
|   |   `-- dream.OfflineStatusPill.tsx 🧩 COMPONENT
|   +-- onboarding
|   |   `-- dream.OnboardingTip.tsx 🧩 COMPONENT
|   +-- optimizer
|   |   `-- dream.scene.BabylonOptimizeroScene.tsx 🧩 COMPONENT
|   +-- overlays
|   |   `-- dream.RootStatusScreen.tsx 🧩 COMPONENT
|   +-- panels  [Settings / Customization] 🗂 FEATURE_FOLDER
|   |   +-- dream.panel.AlgorithmPanel.tsx 🧩 COMPONENT
|   |   +-- dream.panel.AppearancePanel.tsx 🧩 COMPONENT
|   |   +-- dream.panel.ConnectorsPanel.tsx 🧩 COMPONENT
|   |   +-- dream.panel.ControlsPanel.tsx 🧩 COMPONENT
|   |   +-- dream.panel.DataPanel.tsx 🧩 COMPONENT
|   |   +-- dream.panel.FeedPanel.tsx
|   |   +-- dream.panel.FeedSettingsPanel.tsx 🧩 COMPONENT
|   |   +-- dream.panel.HelpPanel.tsx 🧩 COMPONENT
|   |   +-- dream.panel.MarketplacePanel.tsx 🧩 COMPONENT
|   |   +-- dream.panel.PrivacyPanel.tsx 🧩 COMPONENT
|   |   +-- dream.panel.ProfilePanel.tsx 🧩 COMPONENT
|   |   +-- dream.panel.SafetyPanel.tsx 🧩 COMPONENT
|   |   +-- dream.panel.SettingsPanel.tsx 🧩 COMPONENT
|   |   +-- dream.panel.WidgetsPanel.tsx 🧩 COMPONENT
|   |   `-- panelTypes.ts
|   +-- profile  [Profile] 🗂 FEATURE_FOLDER
|   |   +-- dream.EditableAvatar.tsx 🧩 COMPONENT
|   |   +-- dream.ProfileCanvas.tsx 🧩 COMPONENT
|   |   +-- dream.ProfileCustomizeButton.tsx 🧩 COMPONENT
|   |   `-- dream.widget.ProfileWidgetGrid.tsx 🧩 COMPONENT
|   +-- providers
|   |   +-- dream.AppSurfaceShell.tsx 🧩 COMPONENT
|   |   +-- dream.GodTierProvider.tsx 🧩 COMPONENT
|   |   `-- dream.ThemeProvider.tsx 🧩 COMPONENT
|   +-- runtime  [Home / DreamDMBar / DualRuntime] 🗂 FEATURE_FOLDER
|   |   +-- dream.DualRuntimeContainer.tsx 🧩 COMPONENT
|   |   +-- dream.RuntimeView.tsx 🧩 COMPONENT
|   |   `-- dream.shell.RuntimeShell.tsx 🧩 COMPONENT
|   +-- shaders
|   |   +-- dream.LightningWing.tsx 🧩 COMPONENT
|   |   +-- dream.NeonGlow.tsx 🧩 COMPONENT
|   |   +-- dream.Refractor.tsx 🧩 COMPONENT
|   |   `-- index.ts
|   +-- shared-dream
|   |   +-- dream.InviteFlow.tsx 🧩 COMPONENT
|   |   +-- dream.SharedDreamCanvas.tsx 🧩 COMPONENT
|   |   +-- dream.SharedDreamProvider.tsx 🧩 COMPONENT
|   |   +-- dream.SharedDreamRuntime.tsx 🧩 COMPONENT
|   |   `-- index.ts
|   +-- spatial  [Profile] 🗂 FEATURE_FOLDER
|   |   +-- dream.PixiPhysicsLayer.tsx 🧩 COMPONENT
|   |   +-- dream.ProfileSpace.tsx 🧩 COMPONENT
|   |   `-- dream.shell.EnhancedSpatialShell.tsx 🧩 COMPONENT
|   +-- three
|   |   +-- dream.scene.tsx 🧩 COMPONENT
|   |   `-- index.ts
|   +-- ui
|   |   +-- dream.AuthenticatedPageHeader.tsx 🧩 COMPONENT
|   |   +-- dream.DreamWord.tsx 🧩 COMPONENT
|   |   +-- dream.IconList.tsx 🧩 COMPONENT
|   |   +-- dream.InfinityIcon.tsx 🧩 COMPONENT
|   |   +-- dream.PlatformBadge.tsx 🧩 COMPONENT
|   |   +-- dream.SheetIcon.tsx 🧩 COMPONENT
|   |   `-- dream.SocialShareSheet.tsx 🧩 COMPONENT
|   +-- ui-system
|   |   +-- CustomizeModeContext.tsx 🧩 COMPONENT
|   |   +-- responsive.ts
|   |   +-- runtimeViewport.ts
|   |   +-- skin-engine.ts
|   |   +-- theme-engine.ts
|   |   `-- theme.ts
|   +-- universal-editor
|   |   +-- dream.UniversalEditor.tsx 🧩 COMPONENT
|   |   +-- dream.UniversalEditorWrapper.tsx 🧩 COMPONENT
|   |   +-- index.ts
|   |   `-- useTapHoldMove.ts
|   +-- universe
|   |   +-- dream.node-cluster.tsx 🧩 COMPONENT
|   |   +-- dream.shell.universe-shell.tsx 🧩 COMPONENT
|   |   +-- dream.universe-card.tsx 🧩 COMPONENT
|   |   `-- index.ts
|   +-- warp
|   |   `-- dream.WarpCanvas.tsx 🧩 COMPONENT
|   +-- webgpu
|   |   +-- dream.WebGPUShowcase.tsx 🧩 COMPONENT
|   |   +-- neuralPostProcess.ts
|   |   +-- renderer.ts
|   |   `-- shaders.ts
|   +-- widgets
|   |   +-- dream.AddDreamCTA.tsx 🧩 COMPONENT
|   |   +-- dream.ConfigureSheet.tsx 🧩 COMPONENT
|   |   +-- dream.EditModeBanner.tsx 🧩 COMPONENT
|   |   +-- dream.EditModeProvider.tsx 🧩 COMPONENT
|   |   +-- dream.widget.PlayMediaWidget.tsx 🧩 COMPONENT
|   |   +-- dream.widget.UniversalWidget.tsx 🧩 COMPONENT
|   |   +-- dream.widget.WidgetCard.tsx 🧩 COMPONENT
|   |   +-- dream.widget.WidgetLibrary.tsx
|   |   +-- dream.widget.WidgetPlaceholder.tsx 🧩 COMPONENT
|   |   +-- dream.widget.WidgetShell.tsx
|   |   `-- dream.widget.WidgetSurface.tsx
|   +-- dream.AIAssistant.tsx 🧩 COMPONENT
|   +-- dream.AudioVisualizer3D.tsx 🧩 COMPONENT
|   +-- dream.BoogieWarningBanner.tsx 🧩 COMPONENT
|   +-- dream.BrandLogo.tsx 🧩 COMPONENT
|   +-- dream.CommandPalette.tsx 🧩 COMPONENT
|   +-- dream.CommandPaletteMount.tsx 🧩 COMPONENT
|   +-- dream.CreatePostModal.tsx 🧩 COMPONENT
|   +-- dream.DragToAnchorClose.tsx 🧩 COMPONENT
|   +-- dream.DrEamsModeToggle.tsx 🧩 COMPONENT
|   +-- dream.DrEamsVoiceAssistant.tsx 🧩 COMPONENT
|   +-- dream.FeedCard.tsx 🧩 COMPONENT
|   +-- dream.FirstTouchActivator.tsx 🧩 COMPONENT
|   +-- dream.ForgeDreamCanvas.tsx 🧩 COMPONENT
|   +-- dream.GlobalOverlays.tsx 🧩 COMPONENT
|   +-- dream.HeroSprite.tsx 🧩 COMPONENT
|   +-- dream.HomeFeed.tsx 🧩 COMPONENT
|   +-- dream.IconSelector.tsx 🧩 COMPONENT
|   +-- dream.InnerDreamsButton.tsx 🧩 COMPONENT
|   +-- dream.KonamiDream.tsx 🧩 COMPONENT
|   +-- dream.LandingHero.tsx 🧩 COMPONENT
|   +-- dream.LedgerChart.tsx 🧩 COMPONENT
|   +-- dream.MessagesClient.tsx 🧩 COMPONENT
|   +-- dream.NotificationCenter.tsx 🧩 COMPONENT
|   +-- dream.OSShellActivator.tsx 🧩 COMPONENT
|   +-- dream.panel.ChildSafetyPanel.tsx 🧩 COMPONENT
|   +-- dream.panel.IDariPanel.tsx 🧩 COMPONENT
|   +-- dream.PhysicsLab.tsx 🧩 COMPONENT
|   +-- dream.ProfileEditor.tsx 🧩 COMPONENT
|   +-- dream.ProfileShareButton.tsx 🧩 COMPONENT
|   +-- dream.ProfileSpace.tsx 🧩 COMPONENT
|   +-- dream.PullToRefresh.tsx 🧩 COMPONENT
|   +-- dream.ShrunkMode.tsx 🧩 COMPONENT
|   +-- dream.SkeletonLoaders.tsx 🧩 COMPONENT
|   +-- dream.ThemeApplicator.tsx 🧩 COMPONENT
|   +-- dream.ThemeToggle.tsx 🧩 COMPONENT
|   +-- dream.ToastSystem.tsx 🧩 COMPONENT
|   +-- dream.universal_asset_registry.tsx 🧩 COMPONENT
|   +-- dream.VoidThemeToggle.tsx 🧩 COMPONENT
|   +-- dream.widget.AnchorWidget.tsx 🧩 COMPONENT
|   +-- dream.widget.ProfileWidgetBlock.tsx 🧩 COMPONENT
|   `-- dream.widget.WidgetBubble.tsx 🧩 COMPONENT
+-- config
|   +-- advanced-game-targets.json
|   +-- optimizer.yaml
|   `-- ui-ux-spec.yaml
+-- coresurfaces  [Profile] 🗂 FEATURE_FOLDER
|   +-- home  [Profile] 🗂 FEATURE_FOLDER
|   |   `-- buttons  [Profile] 🗂 FEATURE_FOLDER
|   |       +-- button-groups.ts
|   |       `-- contextual-home.ts
|   +-- dreamsurface.EditProfileDream.tsx 🧩 COMPONENT
|   `-- dreamsurface.ViewProfile.tsx 🧩 COMPONENT
+-- daydreams
|   +-- brand
|   |   `-- page.tsx
|   +-- code
|   |   `-- page.tsx
|   +-- create
|   |   `-- page.tsx
|   +-- games
|   |   `-- page.tsx
|   +-- lab
|   |   `-- page.tsx
|   +-- music
|   |   `-- page.tsx
|   `-- shared
|       +-- useDaydreamPersistence.ts
|       `-- useDaydreamState.ts
+-- dr-eams  [AI / Dr. Eams / Agents]
|   +-- ai  [AI / Dr. Eams / Agents]
|   |   +-- handlers  [AI / Dr. Eams / Agents]
|   |   |   +-- dreams.ts
|   |   |   +-- index.ts
|   |   |   +-- navigation.ts
|   |   |   `-- social.ts
|   |   +-- audit.ts
|   |   +-- boogie-policy.ts
|   |   +-- boogie-verifier.ts
|   |   +-- boogieman.ts
|   |   +-- capability-gate.ts
|   |   +-- CIC.ts
|   |   +-- client.ts
|   |   +-- confirm-token.ts
|   |   +-- confirm.ts
|   |   +-- groq.ts
|   |   +-- idempotency.ts
|   |   +-- rate-limiter.ts
|   |   +-- rateLimit.ts
|   |   +-- schemas.ts
|   |   +-- tfBackend.ts
|   |   +-- tool-router.ts
|   |   `-- triad.ts
|   +-- animation  [AI / Dr. Eams / Agents]
|   |   `-- DrEamsAnimator.ts
|   +-- search  [AI / Dr. Eams / Agents]
|   |   `-- drEamsSearch.ts
|   +-- capabilities.yaml
|   `-- tools.ts
+-- dreamdmbar  [Home / DreamDMBar / DualRuntime, Messages / DMs] 🗂 FEATURE_FOLDER
|   +-- hooks  [Home / DreamDMBar / DualRuntime, Messages / DMs] 🗂 FEATURE_FOLDER
|   |   +-- useDreamBarContext.ts
|   |   +-- useDreamDMConversations.ts
|   |   +-- useDreamDMDraft.ts
|   |   +-- useDreamDMMessages.ts
|   |   +-- useDreamSearch.ts
|   |   +-- useMessagingCore.ts
|   |   +-- useModuleBarIntent.ts
|   |   `-- useNotifications.ts
|   +-- notifications  [Home / DreamDMBar / DualRuntime, Messages / DMs] 🗂 FEATURE_FOLDER
|   |   +-- notificationHelpers.ts
|   |   `-- useNotifications.ts
|   +-- runtime  [Home / DreamDMBar / DualRuntime, Messages / DMs] 🗂 FEATURE_FOLDER
|   |   +-- barInteractions.ts
|   |   +-- bridgeSeamFlow.ts
|   |   `-- DreamSystemContext.tsx 🧩 COMPONENT
|   +-- dream.GlowingLight.tsx 🧩 COMPONENT
|   +-- dream.PhaseTrail.tsx 🧩 COMPONENT
|   `-- dreamsurface.dreamdmbar.tsx 🧩 COMPONENT
+-- dreamr  [DreamR] 🗂 FEATURE_FOLDER
|   +-- activity  [DreamR] 🗂 FEATURE_FOLDER
|   |   +-- aqs.ts
|   |   +-- boogieActivityPolicy.ts
|   |   +-- revenueSplit.ts
|   |   +-- scoring.ts
|   |   +-- skipCredits.ts
|   |   +-- types.ts
|   |   `-- visibility-score.ts
|   +-- bot-detection  [DreamR] 🗂 FEATURE_FOLDER
|   |   +-- detector.ts
|   |   +-- index.ts
|   |   +-- swipe-physics.ts
|   |   `-- view-tally.ts
|   +-- components  [DreamR] 🗂 FEATURE_FOLDER
|   |   `-- dreamrfeed.tsx
|   +-- feed  [DreamR] 🗂 FEATURE_FOLDER
|   |   +-- feedTopics.ts
|   |   +-- hashtags.ts
|   |   +-- useLiveFeed.ts
|   |   `-- useYouTubeLiveFeed.ts
|   +-- feeds  [DreamR] 🗂 FEATURE_FOLDER
|   |   `-- embedFeedLoader.ts
|   +-- runtime  [DreamR] 🗂 FEATURE_FOLDER
|   |   +-- closeFriendsVisibility.ts
|   |   +-- feedCursor.ts
|   |   +-- socialHumanityScore.ts
|   |   +-- swipeCalibration.ts
|   |   +-- swipePersonalization.ts
|   |   `-- torridityLedger.ts
|   +-- torridity  [DreamR] 🗂 FEATURE_FOLDER
|   |   +-- constants.ts
|   |   +-- index.ts
|   |   `-- physics.ts
|   +-- botDetection.ts
|   +-- social-feed.ts
|   `-- torridity.ts
+-- engine 🗂 FEATURE_FOLDER
|   +-- admin
|   |   +-- lockout.ts
|   |   `-- upgrade-readiness.ts
|   +-- agentOS
|   |   `-- hostTools.ts
|   +-- agents  [AI / Dr. Eams / Agents]
|   |   +-- adari.ts
|   |   +-- agentBus.ts
|   |   +-- boogieManAI.ts
|   |   +-- dreamengin.ts
|   |   +-- drEamsMode.ts
|   |   +-- idari.ts
|   |   +-- idariLoop.ts
|   |   +-- teachBus.ts
|   |   `-- uiActions.ts
|   +-- animation
|   |   `-- gsap
|   |       +-- gsap.ts
|   |       +-- useGsapEntrance.ts
|   |       +-- useGsapFlip.ts
|   |       `-- useGsapScrollReveal.ts
|   +-- api
|   |   `-- route.ts
|   +-- artifacts
|   |   `-- artifactStore.ts
|   +-- assets
|   |   `-- engineAssets.ts
|   +-- collaboration
|   |   `-- index.ts
|   +-- connectors
|   |   +-- providers
|   |   |   +-- bluesky.ts
|   |   |   +-- devto.ts
|   |   |   +-- facebook.ts
|   |   |   +-- github.ts
|   |   |   +-- hackernews.ts
|   |   |   +-- instagram.ts
|   |   |   +-- mastodon.ts
|   |   |   +-- medium.ts
|   |   |   +-- nostr.ts
|   |   |   +-- pinterest.ts
|   |   |   +-- podcast.ts
|   |   |   +-- reddit.ts
|   |   |   +-- shellhub.ts
|   |   |   +-- substack.ts
|   |   |   +-- tiktok.ts
|   |   |   +-- tumblr.ts
|   |   |   +-- twitter.ts
|   |   |   `-- youtube.ts
|   |   +-- connectorRegistry.ts
|   |   +-- deliveryStrategy.ts
|   |   +-- installFlow.ts
|   |   +-- normalise.ts
|   |   +-- reconcile.ts
|   |   +-- syncDispatch.ts
|   |   +-- webhookVerification.ts
|   |   `-- youtube.ts
|   +-- consent
|   |   `-- consentManager.ts
|   +-- dream-window
|   |   +-- connectionVerbs.ts
|   |   +-- DreamWindowLifecycle.ts
|   |   +-- enginConnectionNetwork.ts
|   |   +-- index.ts
|   |   +-- runtimeRegion.ts
|   |   `-- useDreamWindowActions.ts
|   +-- dreamnav
|   |   +-- delta.ts
|   |   +-- gctAssist.ts
|   |   +-- gestures6.ts
|   |   +-- path.ts
|   |   `-- tau.ts
|   +-- dreams
|   |   +-- drag.ts
|   |   +-- dreamIntentBus.ts
|   |   +-- DreamRegistry.tsx
|   |   +-- profileProjection.ts
|   |   +-- types.ts
|   |   `-- useDreamsRuntime.ts
|   +-- editor
|   |   `-- universalEditor.ts
|   +-- engin-runtime
|   |   +-- EnginBaseState.ts
|   |   +-- EnginCapabilities.ts
|   |   +-- EnginCapabilityExecution.ts
|   |   +-- EnginCapabilityScorecard.ts
|   |   +-- EnginCapabilityTargets.ts
|   |   +-- EnginDomainCores.ts
|   |   +-- EnginEventBus.ts
|   |   +-- EnginHardwareCapabilities.ts
|   |   +-- EnginIOAdapter.ts
|   |   +-- EnginPerformanceProbe.ts
|   |   +-- EnginRuleSetContract.ts
|   |   +-- EnginRuntime.ts
|   |   +-- EnginRuntimeRegistry.ts
|   |   +-- EnginSnapshotFingerprint.ts
|   |   +-- HotRuntime.ts
|   |   +-- index.ts
|   |   +-- InternalMetrics.ts
|   |   `-- PremiumRuntimeQuality.ts
|   +-- events
|   |   +-- event-bus
|   |   |   `-- index.ts
|   |   `-- eventBus.ts
|   +-- feature-build
|   |   +-- buildCycle.ts
|   |   +-- featureManifest.ts
|   |   +-- index.ts
|   |   `-- uiQualityCriteria.ts
|   +-- gct
|   |   +-- anomaly-detection.ts
|   |   +-- audio-fingerprint.ts
|   |   +-- gct-engine.ts
|   |   +-- image-search.ts
|   |   +-- index.ts
|   |   `-- recommendations.ts
|   +-- generated
|   |   +-- brain.ts
|   |   +-- cartridges.ts
|   |   +-- connectors.ts
|   |   +-- dreamdmbar.ts
|   |   +-- dreamr.ts
|   |   +-- dreamsurfaces.ts
|   |   +-- engins.ts
|   |   +-- homedream.ts
|   |   +-- hooks.ts
|   |   +-- index.ts
|   |   +-- osArchitectureMap.ts
|   |   +-- personas.ts
|   |   +-- rulesets.ts
|   |   +-- surfaces.ts
|   |   `-- systems.ts
|   +-- gestures
|   |   +-- touchGestures.ts
|   |   `-- useTouchGestures.ts
|   +-- identity
|   |   `-- canonical-names.ts
|   +-- intelligence
|   |   +-- continuityHelpers.ts
|   |   +-- sessionContinuity.ts
|   |   +-- sessionPatternEngine.ts
|   |   `-- useSessionIntelligence.ts
|   +-- intent
|   |   `-- appIntentPressure.ts
|   +-- journey
|   |   +-- journeyDots.ts
|   |   +-- journeyInsights.ts
|   |   `-- withJourney.ts
|   +-- ledger
|   |   +-- ledger-data.ts
|   |   `-- ledger.ts
|   +-- manifests
|   |   `-- osSubsystemManifest.ts
|   +-- marketplace
|   |   +-- listings.ts
|   |   `-- request.ts
|   +-- navigation
|   |   +-- anchorField.ts
|   |   +-- AnchorStateBuffer.ts
|   |   +-- AnchorWidgetStorage.ts
|   |   +-- dream-state.ts
|   |   +-- GestureFrameComputer.ts
|   |   +-- GestureIntentResolver.ts
|   |   +-- index.ts
|   |   +-- manifold.ts
|   |   +-- NavStateBuffer.ts
|   |   +-- physics.ts
|   |   +-- PointerEventCapture.ts
|   |   +-- quaternion.ts
|   |   +-- ReturnStack.ts
|   |   +-- SpatialNavigationEngine.ts
|   |   +-- StructureLedger.ts
|   |   +-- TransformSolver.ts
|   |   +-- useNavigation.ts
|   |   `-- WidgetInstanceMemory.ts
|   +-- observability
|   |   +-- collector.ts
|   |   +-- correlator.ts
|   |   +-- healthTrend.ts
|   |   +-- immediateAction.ts
|   |   +-- index.ts
|   |   +-- otel.ts
|   |   +-- otelBridge.ts
|   |   `-- rootCauseAnalyzer.ts
|   +-- offline
|   |   +-- offlineCache.ts
|   |   `-- useOfflineSync.ts
|   +-- os
|   |   +-- index.ts
|   |   `-- OSContext.tsx
|   +-- platform
|   |   +-- index.ts
|   |   `-- lab.ts
|   +-- policy
|   |   `-- boogiePolicy.ts
|   +-- reality
|   |   +-- realityStore.ts
|   |   `-- types.ts
|   +-- rendering
|   |   +-- babylon
|   |   |   +-- createEngine.ts
|   |   |   +-- dreamengine-hybrid.ts
|   |   |   `-- useDreamLogoScene.ts
|   |   +-- god-tier
|   |   |   +-- godTierEngine.ts
|   |   |   `-- useGodTier.ts
|   |   +-- renderer
|   |   |   +-- Canvas2DRenderer.ts
|   |   |   +-- FrustumCuller.ts
|   |   |   +-- index.ts
|   |   |   `-- IRenderer.ts
|   |   +-- warp
|   |   |   +-- useWarp.ts
|   |   |   `-- warpEngine.ts
|   |   +-- webgpu
|   |   |   +-- adaptiveQuality.ts
|   |   |   +-- director.ts
|   |   |   `-- useWebGPUDirector.ts
|   |   `-- webgpu.ts
|   +-- routing
|   |   `-- surfaces.ts
|   +-- runtime  [Home / DreamDMBar / DualRuntime] 🗂 FEATURE_FOLDER
|   |   +-- dreamsurface  [Home / DreamDMBar / DualRuntime] 🗂 FEATURE_FOLDER
|   |   |   +-- dreamsurface.bridge.ts
|   |   |   +-- dreamsurface.delta.ts
|   |   |   `-- index.ts
|   |   +-- apperception.ts
|   |   +-- channelMetrics.ts
|   |   +-- coercionTable.ts
|   |   +-- dreamOSBus.ts
|   |   +-- dropTargetRegistry.ts
|   |   +-- dualRuntime.ts
|   |   +-- dualRuntimeBridge.ts
|   |   +-- engin.auth.ts
|   |   +-- engin.eventbus.ts
|   |   +-- engin.ledger.ts
|   |   +-- engin.renderloop.ts
|   |   +-- EnginDispatcher.ts
|   |   +-- enginWorkflowRegistry.ts
|   |   +-- iEngine.ts
|   |   +-- index.ts
|   |   +-- instanceManager.ts
|   |   +-- isAuthRelatedError.ts
|   |   +-- madMaxiSnapshotBridge.ts
|   |   +-- memory.ts
|   |   +-- moduleRegistry.ts
|   |   +-- offlineQueue.ts
|   |   +-- quantumCircuit.ts
|   |   +-- runtimeChannel.ts
|   |   +-- runtimeContainer.ts
|   |   +-- seamClipboard.ts
|   |   +-- sharedResourcePool.ts
|   |   +-- snapshotFingerprint.ts
|   |   +-- superciliousPlatformRuntime.ts
|   |   +-- swapManager.ts
|   |   +-- useDragSurface.ts
|   |   +-- useDualRuntime.ts
|   |   +-- useDualRuntimePersistence.ts
|   |   +-- useEnginBridge.ts
|   |   +-- useEnginCoopSync.ts
|   |   `-- useSharedEnginChannel.ts
|   +-- safety
|   |   `-- child-safety
|   |       +-- childSafetyDetector.ts
|   |       +-- imageClassifier.ts
|   |       +-- messageContextChecker.ts
|   |       +-- ncmecReporter.ts
|   |       `-- scanMediaUrls.ts
|   +-- scene
|   |   `-- sceneState.ts
|   +-- setup
|   |   `-- checks.ts
|   +-- sharedDream
|   |   `-- useSharedDreamSession.ts
|   +-- shop
|   |   `-- listings.ts
|   +-- social
|   |   +-- crossPost.ts
|   |   +-- livekit.ts
|   |   +-- normalizers.ts
|   |   +-- platforms.ts
|   |   +-- rss-feed.ts
|   |   `-- useSocialData.ts
|   +-- state
|   |   `-- base.json
|   +-- user-sim
|   |   `-- userSimAgent.ts
|   +-- vm
|   |   +-- bufferManager.ts
|   |   +-- bus-events.ts
|   |   +-- dual-runtime.ts
|   |   +-- dualVMCoordinator.ts
|   |   +-- index.ts
|   |   +-- inter-vm-messaging.ts
|   |   +-- pipelineCache.ts
|   |   +-- resource-quota.ts
|   |   +-- security.ts
|   |   +-- snapshot.ts
|   |   +-- types.ts
|   |   +-- wasm-features.ts
|   |   `-- wasmGpuVM.ts
|   +-- web3
|   |   +-- client.ts
|   |   +-- engagement.ts
|   |   +-- index.ts
|   |   +-- ipfs.ts
|   |   `-- types.ts
|   +-- widgets
|   |   +-- CrossWidgetPosting.ts
|   |   +-- feed-resolver.ts
|   |   +-- parse.ts
|   |   +-- parseConfig.ts
|   |   +-- useWidget.ts
|   |   +-- WidgetBus.ts
|   |   +-- WidgetEngine.tsx
|   |   +-- WidgetEventBus.ts
|   |   +-- WidgetLinkGraph.ts
|   |   `-- widgetRegistry.ts
|   +-- activeModulesStore.ts
|   +-- agentOS.ts
|   +-- bus.wasm
|   +-- data-transform.ts
|   +-- dev-bypass.ts
|   +-- generationLaw.ts
|   +-- index.ts
|   +-- io.ts
|   +-- sharedDream.ts
|   `-- slog.ts
+-- engins 🗂 FEATURE_FOLDER
|   +-- autoopen
|   |   `-- dream.AutoOpenGameEngin.tsx
|   +-- brandingengin
|   |   `-- identity
|   |       `-- logos.ts
|   +-- codeengin  [CodeEngin] 🗂 FEATURE_FOLDER
|   |   +-- ai  [CodeEngin] 🗂 FEATURE_FOLDER
|   |   |   `-- drEamsCodeAssist.ts
|   |   +-- diff  [CodeEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- aiEditEngine.ts
|   |   |   `-- diffUtils.ts
|   |   +-- auth.ts
|   |   +-- diagnostics.ts
|   |   +-- git.ts
|   |   +-- pathSafety.ts
|   |   +-- projectGraph.ts
|   |   +-- runner.ts
|   |   +-- runnerCommands.ts
|   |   +-- search.ts
|   |   +-- types.ts
|   |   `-- workspaceStore.ts
|   +-- CodeEngin
|   |   +-- core
|   |   |   `-- parser.ts
|   |   +-- modules
|   |   |   `-- ai-co-pilot
|   |   |       +-- dream.panel.AgentPanel.tsx
|   |   |       +-- index.ts
|   |   |       `-- useAgentSession.ts
|   |   `-- orchestrator
|   |       `-- dream.index.tsx
|   +-- codeengin-ui  [CodeEngin]
|   |   +-- core  [CodeEngin]
|   |   |   `-- parser.ts
|   |   +-- modules  [CodeEngin]
|   |   |   `-- ai-co-pilot  [CodeEngin]
|   |   |       +-- dream.panel.AgentPanel.tsx 🧩 COMPONENT
|   |   |       +-- index.ts
|   |   |       `-- useAgentSession.ts
|   |   `-- orchestrator  [CodeEngin]
|   |       `-- dream.index.tsx 🧩 COMPONENT
|   +-- contentengin  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   +-- assets  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- assetOptimizer.ts
|   |   |   +-- indexedDBStore.ts
|   |   |   `-- localAssetLibrary.ts
|   |   +-- builders  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- geometryBuilder.ts
|   |   |   +-- meshBuilder.ts
|   |   |   +-- modifiers.ts
|   |   |   +-- primitiveBuilder.ts
|   |   |   +-- textureBuilder.ts
|   |   |   `-- uvGenerator.ts
|   |   +-- composite  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- compositor.ts
|   |   |   +-- fxSimulation.ts
|   |   |   +-- matchmover.ts
|   |   |   +-- motionCapture.ts
|   |   |   `-- rotoscope.ts
|   |   +-- content  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- generativeFill.ts
|   |   |   +-- publishIntent.ts
|   |   |   +-- seoScorer.ts
|   |   |   +-- transcriptEditor.ts
|   |   |   `-- voiceClone.ts
|   |   +-- grammars  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- animalGrammar.ts
|   |   |   +-- bicycleGrammar.ts
|   |   |   +-- bridgeGrammar.ts
|   |   |   +-- buildingGrammar.ts
|   |   |   +-- creatureGrammar.ts
|   |   |   +-- humanoidGrammar.ts
|   |   |   +-- propGrammar.ts
|   |   |   +-- roadGrammar.ts
|   |   |   +-- shared.ts
|   |   |   +-- terrainGrammar.ts
|   |   |   +-- treeGrammar.ts
|   |   |   +-- vehicleGrammar.ts
|   |   |   `-- waterGrammar.ts
|   |   +-- materials  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- materialTypes.ts
|   |   |   +-- paletteExtractor.ts
|   |   |   `-- proceduralMaterials.ts
|   |   +-- media  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- h265-encoder.ts
|   |   |   +-- ledger.ts
|   |   |   `-- postMedia.ts
|   |   +-- photo  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- colorCluster.ts
|   |   |   +-- edgeDetector.ts
|   |   |   +-- imageAnalyzer.ts
|   |   |   +-- photoToRecipe.ts
|   |   |   +-- pngDecoder.ts
|   |   |   `-- regionDetector.ts
|   |   +-- pipeline  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- build.ts
|   |   |   +-- bundle.ts
|   |   |   +-- exportGlb.ts
|   |   |   +-- generateCollision.ts
|   |   |   +-- generateLods.ts
|   |   |   +-- paths.ts
|   |   |   +-- validate.ts
|   |   |   `-- writeManifest.ts
|   |   +-- recipes  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- recipeResolver.ts
|   |   |   +-- recipeTypes.ts
|   |   |   `-- seededRandom.ts
|   |   +-- rigging  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- templates  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- bird_basic.json
|   |   |   |   +-- fish_basic.json
|   |   |   |   +-- humanoid_basic.json
|   |   |   |   +-- quadruped_basic.json
|   |   |   |   `-- vehicle_mechanical.json
|   |   |   +-- fitArmature.ts
|   |   |   +-- index.ts
|   |   |   +-- landmarks.ts
|   |   |   +-- rigTypes.ts
|   |   |   `-- rigValidator.ts
|   |   +-- shaders  [ContentEngin / CreateEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- shaderRegistry.ts
|   |   |   `-- shaderTypes.ts
|   |   +-- assetTypes.ts
|   |   +-- AssetViewport.tsx 🧩 COMPONENT
|   |   +-- cli.ts
|   |   +-- ImplicitAssetWorkspace.tsx 🧩 COMPONENT
|   |   +-- performancePlan.ts
|   |   +-- runtimeProfile.ts
|   |   +-- upgradeMatrix.ts
|   |   `-- useImplicitAssetWorkspace.ts
|   +-- forgeengin  [ForgeEngin] 🗂 FEATURE_FOLDER
|   |   +-- enginpipe  [ForgeEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- artifact  [ForgeEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- manifest.ts
|   |   |   +-- quality  [ForgeEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- tiers.ts
|   |   |   +-- shell  [ForgeEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- ArtifactSlot.tsx 🧩 COMPONENT
|   |   |   +-- telemetry  [ForgeEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- client.ts
|   |   |   |   `-- events.ts
|   |   |   `-- index.ts
|   |   +-- forge  [ForgeEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- engineForge.ts
|   |   |   +-- forgeBuild.ts
|   |   |   +-- forgeIntelligence.ts
|   |   |   +-- forgeMomentum.ts
|   |   |   +-- forgeNexus.ts
|   |   |   +-- forgeRegistry.ts
|   |   |   +-- forgeRituals.ts
|   |   |   +-- useForgeActivity.ts
|   |   |   `-- useForgeBuild.ts
|   |   +-- forge-ngn  [ForgeEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- assembly.ts
|   |   |   +-- index.ts
|   |   |   `-- piece-registry.ts
|   |   `-- componentInventory.ts
|   +-- gameengin  [GameEngin] 🗂 FEATURE_FOLDER
|   |   +-- assets  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- BundleCache.ts
|   |   |   `-- BundleManifest.ts
|   |   +-- brain  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- asset-registry  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- build-history  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- character-voices  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- mad-maxi.json
|   |   |   +-- composition-principles  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- leading-lines-landmark.json
|   |   |   |   `-- parallax-layers.json
|   |   |   +-- concept-library  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- neon-courier.json
|   |   |   +-- concept-patterns  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- protagonists  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   |   `-- reluctant-courier.json
|   |   |   |   +-- scope-formulas  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   |   `-- one-day-runner.json
|   |   |   |   `-- settings  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |       `-- neon-rain-megacity.json
|   |   |   +-- crash-reports  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- dialogue-patterns  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- callback-anchor.json
|   |   |   |   +-- implied-subject.json
|   |   |   |   `-- sentence-fragment-rhythm.json
|   |   |   +-- emotional-tones  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- determined.json
|   |   |   |   +-- fierce.json
|   |   |   |   +-- hopeful.json
|   |   |   |   +-- reflective.json
|   |   |   |   `-- weary.json
|   |   |   +-- fun-heuristics  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- meta-progression.json
|   |   |   |   +-- moment-to-moment.json
|   |   |   |   `-- session-loop.json
|   |   |   +-- genre-dna  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- action-rpg.json
|   |   |   |   +-- episodic.json
|   |   |   |   +-- live-service.json
|   |   |   |   +-- metroidvania.json
|   |   |   |   +-- open-world.json
|   |   |   |   +-- platformer.json
|   |   |   |   +-- puzzle.json
|   |   |   |   +-- racing.json
|   |   |   |   +-- roguelike.json
|   |   |   |   +-- sandbox.json
|   |   |   |   `-- template.json
|   |   |   +-- inspiration-corpus  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- celeste.json
|   |   |   |   +-- dead-cells.json
|   |   |   |   +-- hades.json
|   |   |   |   +-- hollow-knight.json
|   |   |   |   `-- outer-wilds.json
|   |   |   +-- material-recipes  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- neon-glass-tube.json
|   |   |   |   +-- rusted-iron.json
|   |   |   |   `-- sun-bleached-sandstone.json
|   |   |   +-- mechanic-library  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- camera  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   |   +-- look-ahead.json
|   |   |   |   |   +-- screen-shake.json
|   |   |   |   |   `-- smooth-follow.json
|   |   |   |   +-- combat  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   |   +-- combo.json
|   |   |   |   |   +-- hit-stop.json
|   |   |   |   |   +-- parry.json
|   |   |   |   |   `-- ranged.json
|   |   |   |   +-- movement  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   |   +-- coyote-time.json
|   |   |   |   |   +-- dash.json
|   |   |   |   |   +-- double-jump.json
|   |   |   |   |   +-- grapple.json
|   |   |   |   |   `-- wall-slide.json
|   |   |   |   +-- progression  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   |   +-- metroidvania-gating.json
|   |   |   |   |   +-- roguelike-perks.json
|   |   |   |   |   `-- skill-tree.json
|   |   |   |   `-- structural  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |       +-- ability-gating.json
|   |   |   |       +-- meta-progression.json
|   |   |   |       +-- procedural-generation.json
|   |   |   |       +-- run-persistence.json
|   |   |   |       +-- season-pass.json
|   |   |   |       `-- world-streaming.json
|   |   |   +-- narrative-pacing  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- default.json
|   |   |   +-- originality-registry  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- by-cartridge  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   |   `-- mad-maxi.json
|   |   |   |   `-- signatures.json
|   |   |   +-- principles  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- progression-state  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- rd-sessions  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- technique-library  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- lighting  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   |   `-- three-point-mood.json
|   |   |   |   +-- modeling  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   |   +-- edge-flow.json
|   |   |   |   |   `-- silhouette-first.json
|   |   |   |   `-- optimization  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |       `-- texture-atlasing.json
|   |   |   +-- upgrade-history  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- prioritization-rules.json
|   |   |   +-- visual-bible  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   +-- characters  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   |   `-- environments  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- work-queue  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   `-- active-projects.json
|   |   +-- cartridges  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- achievementEngine.ts
|   |   |   +-- apiStubs.ts
|   |   |   +-- index.ts
|   |   |   +-- loaders.ts
|   |   |   +-- manifest.ts
|   |   |   +-- reactCartridge.ts
|   |   |   `-- saveState.ts
|   |   +-- config  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   `-- demoGameConfig.ts
|   |   +-- controls  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   `-- control-mappings.ts
|   |   +-- games  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- avatar.ts
|   |   |   +-- catalog.ts
|   |   |   +-- DualSenseManager.ts
|   |   |   +-- gameControllerButtons.ts
|   |   |   +-- gameControllerLeft.ts
|   |   |   +-- gameControllerRight.ts
|   |   |   +-- hooks.ts
|   |   |   +-- library-state.ts
|   |   |   +-- lucid-avenue-world.ts
|   |   |   +-- madmaxi-wildfall-world.ts
|   |   |   +-- mobileControls.ts
|   |   |   +-- navigation.ts
|   |   |   +-- performance-baseline.ts
|   |   |   +-- quality-plan.ts
|   |   |   +-- useAIDirector.ts
|   |   |   +-- useGameInputKeyboardBridge.ts
|   |   |   +-- useGamepad.ts
|   |   |   +-- useImmersiveGameLayout.ts
|   |   |   `-- useRemoteChannel.ts
|   |   +-- input  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- index.ts
|   |   |   `-- InputRouter.ts
|   |   +-- remote  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- comboMachine.ts
|   |   |   +-- index.ts
|   |   |   +-- layout.ts
|   |   |   +-- moves.ts
|   |   |   `-- sprintDetector.ts
|   |   +-- render  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   `-- ShaderRegistry.ts
|   |   +-- runtime  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- FrameBudget.ts
|   |   |   +-- FrameClock.ts
|   |   |   +-- index.ts
|   |   |   `-- RuntimeQuality.ts
|   |   +-- systems  [GameEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- ai.ts
|   |   |   +-- animation.ts
|   |   |   +-- assets.ts
|   |   |   +-- index.ts
|   |   |   +-- lod.ts
|   |   |   +-- network.ts
|   |   |   +-- physics.ts
|   |   |   +-- pooling.ts
|   |   |   +-- rendering.ts
|   |   |   +-- spatial.ts
|   |   |   `-- world.ts
|   |   +-- accessibility-ai.ts
|   |   +-- ai-director.ts
|   |   +-- ai-npcs.ts
|   |   +-- backendNegotiator.ts
|   |   +-- brain-reader.ts
|   |   +-- cartridge-manifest.ts
|   |   +-- cartridge.ts
|   |   +-- cartridgeLoader.ts
|   |   +-- cloud-compute.ts
|   |   +-- core.ts
|   |   +-- dream-engine.ts
|   |   +-- dreamr-loader.ts
|   |   +-- executionWiring.ts
|   |   +-- GameEnginCore.ts
|   |   +-- gameEnginRuntime.ts
|   |   +-- GameRuntime.tsx 🧩 COMPONENT
|   |   +-- generative-audio.ts
|   |   +-- handlers.ts
|   |   +-- index.ts
|   |   +-- launcher.ts
|   |   +-- neural-render.ts
|   |   +-- path-tracing.ts
|   |   +-- platform.ts
|   |   +-- post-fx.ts
|   |   +-- power-systems.ts
|   |   +-- predictive-stream.ts
|   |   +-- procgen.ts
|   |   +-- registerCartridges.ts
|   |   +-- unifiedLoop.ts
|   |   +-- useUnifiedLoop.ts
|   |   +-- webgpu-runtime-shell.ts
|   |   +-- world-crdt.ts
|   |   `-- xr.ts
|   +-- labengin  [LabEngin] 🗂 FEATURE_FOLDER
|   |   `-- implicitSurface.ts
|   +-- portfolio
|   |   `-- dream.PortfolioEngin.tsx
|   +-- renderengin  [RenderEngin]
|   |   +-- advancedRendering.ts
|   |   +-- animation.ts
|   |   +-- assets.ts
|   |   +-- benchmarkProof.ts
|   |   +-- completionEvidence.ts
|   |   +-- core.ts
|   |   +-- diagnostics.ts
|   |   +-- index.ts
|   |   +-- lighting.ts
|   |   +-- liveBenchmark.ts
|   |   +-- materials.ts
|   |   +-- performanceIntegrity.ts
|   |   +-- postProcessing.ts
|   |   +-- RenderEnginInlineSurface.tsx
|   |   +-- RenderEnginViewport.tsx
|   |   +-- renderSettings.ts
|   |   +-- RenderStage.tsx
|   |   +-- runtimeRegistration.ts
|   |   +-- scene.ts
|   |   +-- security.ts
|   |   +-- serviceIntegration.ts
|   |   +-- serviceRuntime.ts
|   |   +-- textures.ts
|   |   +-- viewportControls.ts
|   |   +-- virtualization.ts
|   |   +-- wasmAcceleration.ts
|   |   `-- webgpu.ts
|   +-- rulesets
|   |   +-- brand
|   |   |   +-- brandEnginRuleSet.ts
|   |   |   `-- useBrandEnginRuntime.ts
|   |   +-- code
|   |   |   +-- codeEnginRuleSet.ts
|   |   |   +-- index.ts
|   |   |   `-- useCodeEnginRuntime.ts
|   |   +-- content
|   |   |   +-- contentEnginRuleSet.ts
|   |   |   `-- useContentEnginRuntime.ts
|   |   +-- dreams
|   |   |   `-- index.ts
|   |   +-- forge
|   |   |   `-- index.ts
|   |   +-- game
|   |   |   +-- declarative.ts
|   |   |   +-- gameEnginRuleSet.ts
|   |   |   +-- index.ts
|   |   |   `-- useGameEnginRuntime.ts
|   |   +-- homedream
|   |   |   +-- dream.homedream.constants.ts
|   |   |   +-- dream.homedream.physics.ts
|   |   |   +-- dream.homedream.transforms.ts
|   |   |   `-- index.ts
|   |   +-- lab
|   |   |   +-- index.ts
|   |   |   +-- labEnginRuleSet.ts
|   |   |   `-- useLabEnginRuntime.ts
|   |   +-- music
|   |   |   +-- index.ts
|   |   |   +-- starMakerEnginRuleSet.ts
|   |   |   `-- useStarMakerEnginRuntime.ts
|   |   +-- useEnginWorkflow.ts
|   |   `-- workflowEngine.ts
|   +-- starmakerengin  [StarMakerEngin] 🗂 FEATURE_FOLDER
|   |   +-- audio-fingerprint  [StarMakerEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- fingerprint.ts
|   |   |   +-- index.ts
|   |   |   +-- peak-map.ts
|   |   |   `-- stem-extractor.ts
|   |   +-- music  [StarMakerEngin] 🗂 FEATURE_FOLDER
|   |   |   +-- presets.ts
|   |   |   +-- starmaker.ts
|   |   |   +-- starmakerArrangement.ts
|   |   |   +-- starmakerDaw.ts
|   |   |   `-- wasmAudioBridge.ts
|   |   `-- audioFingerprint.ts
|   +-- dream.ForgeEngin.tsx 🧩 COMPONENT
|   +-- dream.QuantumCircuitCanvas.tsx
|   +-- engin.BrandingEngin.tsx 🧩 COMPONENT
|   +-- engin.CodeEngin.tsx ! 🧩 COMPONENT
|   |   `-- ! @/components/DreamButton ((default))
|   +-- engin.ContentEngin.tsx 🧩 COMPONENT
|   +-- engin.GameEngin.tsx
|   +-- engin.LabEngin.tsx 🧩 COMPONENT
|   +-- engin.StarMakerEngin.tsx 🧩 COMPONENT
|   +-- isosurfaceAssetPipeline.ts
|   `-- isosurfaceDualContouring.ts
+-- fonts
|   +-- Cormorant_Garamond
|   |   +-- static
|   |   |   +-- CormorantGaramond-Bold.ttf
|   |   |   +-- CormorantGaramond-BoldItalic.ttf
|   |   |   +-- CormorantGaramond-Italic.ttf
|   |   |   +-- CormorantGaramond-Light.ttf
|   |   |   +-- CormorantGaramond-LightItalic.ttf
|   |   |   +-- CormorantGaramond-Medium.ttf
|   |   |   +-- CormorantGaramond-MediumItalic.ttf
|   |   |   +-- CormorantGaramond-Regular.ttf
|   |   |   +-- CormorantGaramond-SemiBold.ttf
|   |   |   `-- CormorantGaramond-SemiBoldItalic.ttf
|   |   +-- CormorantGaramond-Italic-VariableFont_wght.ttf
|   |   +-- CormorantGaramond-VariableFont_wght.ttf
|   |   +-- OFL.txt
|   |   `-- README.txt
|   +-- Plus_Jakarta_Sans
|   |   +-- static
|   |   |   +-- PlusJakartaSans-Bold.ttf
|   |   |   +-- PlusJakartaSans-BoldItalic.ttf
|   |   |   +-- PlusJakartaSans-ExtraBold.ttf
|   |   |   +-- PlusJakartaSans-ExtraBoldItalic.ttf
|   |   |   +-- PlusJakartaSans-ExtraLight.ttf
|   |   |   +-- PlusJakartaSans-ExtraLightItalic.ttf
|   |   |   +-- PlusJakartaSans-Italic.ttf
|   |   |   +-- PlusJakartaSans-Light.ttf
|   |   |   +-- PlusJakartaSans-LightItalic.ttf
|   |   |   +-- PlusJakartaSans-Medium.ttf
|   |   |   +-- PlusJakartaSans-MediumItalic.ttf
|   |   |   +-- PlusJakartaSans-Regular.ttf
|   |   |   +-- PlusJakartaSans-SemiBold.ttf
|   |   |   `-- PlusJakartaSans-SemiBoldItalic.ttf
|   |   +-- OFL.txt
|   |   +-- PlusJakartaSans-Italic-VariableFont_wght.ttf
|   |   +-- PlusJakartaSans-VariableFont_wght.ttf
|   |   `-- README.txt
|   `-- Space_Grotesk
|       +-- static
|       |   +-- SpaceGrotesk-Bold.ttf
|       |   +-- SpaceGrotesk-Light.ttf
|       |   +-- SpaceGrotesk-Medium.ttf
|       |   +-- SpaceGrotesk-Regular.ttf
|       |   `-- SpaceGrotesk-SemiBold.ttf
|       +-- OFL.txt
|       +-- README.txt
|       `-- SpaceGrotesk-VariableFont_wght.ttf
+-- hooks
|   +-- use-spatial.ts
|   +-- useAccount.ts
|   +-- useAppIntentPressureSurface.ts
|   +-- useConnectorInstallFlow.ts
|   +-- useDreamLayout.ts
|   +-- useHideOnScroll.ts
|   +-- useMotionTilt.ts
|   +-- useResponsive.ts !
|   |   `-- ! ../ui/responsive (BREAKPOINTS, Breakpoint, fluid, getBreakpoint, isAtLeast, isBelow, pickByBreakpoint, readViewportWidth)
|   +-- useSharedDream.ts
|   +-- useTap.ts
|   +-- useTapHoldMove.ts
|   +-- useTick.ts
|   `-- useViewCounter.ts
+-- misc
+-- optimizer
|   +-- babylon-optimizero.ts
|   +-- constraint-solver.ts
|   +-- creative-optimizero.ts
|   +-- creative-validator.ts
|   +-- index.ts
|   `-- types.ts
+-- public
|   +-- cartridges  [VM / WASM]
|   |   `-- mad-maxi  [VM / WASM]
|   |       +-- logic  [VM / WASM]
|   |       |   `-- main.wasm
|   |       +-- MANIFEST.json
|   |       `-- tuning.json
|   +-- feeds
|   |   `-- embed-feed.json
|   +-- workers  [VM / WASM]
|   |   +-- asset-optimizer.worker.js
|   |   +-- engin-shader.wasm
|   |   `-- engin-shader.worker.ts
|   +-- dr-eams-pbr.html
|   +-- dreamengin-sw.js
|   +-- file.svg
|   +-- globe.svg
|   +-- manifest.json
|   +-- manifest.webmanifest
|   +-- module-loader.html
|   +-- next.svg
|   +-- vercel.svg
|   `-- window.svg
+-- src
|   `-- engin
|       `-- generated
|           +-- brain.ts
|           +-- cartridges.ts
|           +-- connectors.ts
|           +-- dreamdmbar.ts
|           +-- dreamr.ts
|           +-- dreamsurfaces.ts
|           +-- engins.ts
|           +-- homedream.ts
|           +-- hooks.ts
|           +-- index.ts
|           +-- osArchitectureMap.ts
|           +-- personas.ts
|           +-- rulesets.ts
|           +-- surfaces.ts
|           `-- systems.ts
+-- styles  [Settings / Customization] 🗂 FEATURE_FOLDER
|   +-- dream-shell.css
|   +-- globals.css
|   +-- home-dream.css
|   +-- theme.css
|   `-- view-transitions.css
+-- supabase  [Supabase / Database]
|   +-- .temp  [Supabase / Database]
|   |   +-- cli-latest
|   |   +-- gotrue-version
|   |   +-- linked-project.json
|   |   +-- pooler-url
|   |   +-- postgres-version
|   |   +-- project-ref
|   |   +-- rest-version
|   |   +-- storage-migration
|   |   `-- storage-version
|   +-- auth  [Supabase / Database]
|   |   `-- nextRedirect.ts
|   +-- client  [Supabase / Database]
|   |   +-- client.ts
|   |   `-- safeGetUser.ts
|   +-- migrations  [Supabase / Database]
|   |   +-- 20240120000000_initial_schema.sql
|   |   +-- 20240120000001_enable_rls.sql
|   |   +-- 20260129000000_upgrade_schema.sql
|   |   +-- 20260210_ai_core.sql
|   |   +-- 20260210000000_widget_system_v2.sql
|   |   +-- 20260210000001_ai_system_v2026.sql
|   |   +-- 20260214000000_security_axioms.sql
|   |   +-- 20260226000000_admin_lock.sql
|   |   +-- 20260305000000_create_notes.sql
|   |   +-- 20260305000001_comments.sql
|   |   +-- 20260305000002_leaderboard.sql
|   |   +-- 20260307000000_readme_gaps.sql
|   |   +-- 20260307000001_conversations_messages.sql
|   |   +-- 20260310000000_widget_instances_visibility.sql
|   |   +-- 20260310000001_profiles_widget_config.sql
|   |   +-- 20260310000002_profile_dream_widgets.sql
|   |   +-- 20260310000003_connector_accounts.sql
|   |   +-- 20260310000004_feed_items.sql
|   |   +-- 20260310000010_dreamdm_bar_pass2.sql
|   |   +-- 20260315000000_content_drafts.sql
|   |   +-- 20260316000000_visibility_mappings.sql
|   |   +-- 20260319000000_journey_dots.sql
|   |   +-- 20260319065444_new-migration.sql
|   |   +-- 20260319120000_connector_accounts_schema_reload.sql
|   |   +-- 20260320000000_scheduled_posts.sql
|   |   +-- 20260320100000_game_scores_all_games.sql
|   |   +-- 20260320110000_user_blocks.sql
|   |   +-- 20260321000000_ads_platform_promotions.sql
|   |   +-- 20260321200000_phase8a_feed_and_layout.sql
|   |   +-- 20260322000000_phase8b_dream_windows.sql
|   |   +-- 20260322000000_policy_events.sql
|   |   +-- 20260322000001_message_boards.sql
|   |   +-- 20260323100000_embed_feed_items.sql
|   |   +-- 20260324000000_phase8e_orders.sql
|   |   +-- 20260324000001_phase8e_shop_marketplace.sql
|   |   +-- 20260325000000_phase8f_daydream_network.sql
|   |   +-- 20260325100000_child_safety.sql
|   |   +-- 20260401000001_platform_utilities.sql
|   |   +-- 20260402000001_control_mappings.sql
|   |   +-- 20260402000002_game_assets.sql
|   |   +-- 20260403000001_pgvector_embeddings.sql
|   |   +-- 20260403000002_pgvector_search_rpc.sql
|   |   +-- 20260405000001_dreamr_feed_registry.sql
|   |   +-- 20260405042406_auto_scaffold.sql
|   |   +-- 20260413000000_phase9_activity_first_protocol.sql
|   |   +-- 20260417000000_repurpose_nods_as_dream_docs.sql
|   |   +-- 20260417000001_dream_docs_search_rpc.sql
|   |   +-- 20260418000000_gameengin_core.sql
|   |   +-- 20260420000001_consent_settings_audit.sql
|   |   +-- 20260426000000_activity_coop_gameengin_completion.sql
|   |   +-- 20260426000100_rename_widgets_to_dreams.sql
|   |   +-- 20260426000200_build_memory_schema_gaps.sql
|   |   +-- 20260516000000_agent_sessions_forge_rate_limits.sql
|   |   +-- 20260516000100_dreamr_tally.sql
|   |   +-- 20260516000300_shared_dream_sessions.sql
|   |   +-- 20260605015234_auto_scaffold.sql
|   |   +-- 20260619000000_renderengin_assets_rls.sql
|   |   +-- 20260619034000_connector_feed_items.sql
|   |   +-- 20260619034100_profile_optional_fields.sql
|   |   `-- 20260619034200_saved_posts.sql
|   +-- server  [Supabase / Database]
|   |   `-- serverClient.ts
|   +-- config.toml
|   +-- config.ts
|   +-- realtime.ts
|   +-- schema-final.sql
|   +-- seed.sql
|   `-- vector.ts
+-- types
|   +-- ads.ts
|   +-- ai-system.ts
|   +-- ai.ts
|   +-- ccc.ts
|   +-- connector.ts
|   +-- dream-window.ts
|   +-- dreamArtifact.ts
|   +-- experience.ts
|   +-- journey.ts
|   +-- marketplace.ts
|   +-- module-manifest.ts
|   +-- rivet-dev-agent-os.d.ts
|   +-- spatial.ts
|   +-- supabase.ts
|   +-- user-sim.ts
|   +-- widget-system-v2.ts
|   +-- widgetConfigs.ts
|   `-- widgets.ts
+-- utils
|   +-- supabase  [Supabase / Database]
|   |   `-- server.ts
|   `-- index.ts
+-- _manifest.json
+-- .cursorrules
+-- .env.example
+-- .env.local.example
+-- .gitignore
+-- .gitleaks.toml
+-- deepseek_json_20260701_3ac1d7.json
+-- Dreamengin.names.json
+-- eslint.config.mjs
+-- fix-audit.js
+-- fix-repo.cjs !
|   `-- ! ./ ((default))
+-- LICENSE
+-- next-env.d.ts !
|   `-- ! ./.next/types/routes.d.ts ((side-effect))
+-- next.config.mjs
+-- package.json
+-- playwright.config.ts
+-- pnpm-lock.yaml
+-- pnpm-workspace.yaml
+-- postcss.config.js
+-- postcss.config.mjs
+-- proxy.ts
+-- supabaseClient.ts
+-- tailwind.config.ts
+-- tailwindcss-animate.d.ts
+-- tsconfig.app.json
+-- tsconfig.base.json
+-- tsconfig.games.json
+-- tsconfig.gamesengin.json
+-- tsconfig.json
+-- tsconfig.server.json
+-- tsconfig.test.json
+-- tsconfig.tsbuildinfo
+-- tsconfig.worker.json
+-- vercel.json
`-- vitest.config.ts
```
