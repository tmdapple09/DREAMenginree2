/**
 * lib/gameengin/index.ts
 *
 * DREAMengin Elite Game Engine — Public API
 *
 * Single import surface for all elite engine capabilities:
 *   import { EliteGameEngine, AIDirector, PostFXManager } from '@/engins/gameengin/index';
 *
 * Power Systems (20 advanced subsystems):
 *   import { RollbackNetcode, ComputeShaderPipeline, AdvancedPhysicsWorld, ... } from '@/engins/gameengin/index';
 */

// This is the public machine-readable spine for the GameEngin work packet.
// It gives pages, Daydreams, agents, and CI one place to see the canonical
// runtime lanes without hard-coding folder assumptions.
export const GAMEENGIN_CAPABILITY_LANES = {
  orchestrator: {
    entry: 'engins/engin.GameEngin.tsx',
    contract: 'useGameEnginRuntime + GAME_ENGIN_RULE_SET',
  },
  catalog: {
    entry: 'lib/games/catalog.ts',
    contract: 'CARTRIDGE_MANIFEST -> GAME_CATALOG -> GamesHub/GameEngin shelf',
  },
  cartridgeRuntime: {
    entry: 'lib/gameengin/GameRuntime.tsx',
    contract: 'GameCartridge + GameEngineAPI + loadCartridge',
  },
  input: {
    entry: 'components/games/dream.remote.GameRemote.tsx',
    contract: 'de-game-input -> GameRuntime api.input.on(remote) -> cartridge',
  },
  crashFeedback: {
    entry: 'app/api/gameengin/crash-report/route.ts',
    contract: 'CartridgeErrorBoundary/GameRuntime onCrash -> CrashReportModal -> Brain crash report',
  },
  brain: {
    entry: 'lib/gameengin/brain-reader.ts',
    contract: 'brain files -> reader -> cartridge context/originality/history',
  },
} as const;

export type GameEnginCapabilityLane = keyof typeof GAMEENGIN_CAPABILITY_LANES;

// Generated from the source-read GameEngin CSV wiring plan. This makes every
// file in the GameEngin work packet addressable by contract instead of by
// folder guesswork. Agents, CI, and runtime tooling can use this to see the
// intended lane for each path without reopening the whole repository.
export const GAMEENGIN_WORK_PACKET = [
  {
    "path": "app/api/gameengin/crash-report/route.ts",
    "kind": "file",
    "contextGroup": "API route",
    "wiringTarget": "crash_feedback_endpoint",
    "wiringContract": "POST /api/gameengin/crash-report + brain-reader recordCrashReport",
    "wiringAction": "Wire crash reports from CartridgeErrorBoundary and GameRuntime failures into this endpoint, then into brain-reader/project history.",
    "acceptanceCheck": "A thrown cartridge/game failure can reach brain crash history with cartridge id and user statement."
  },
  {
    "path": "engins/autoopen/dream.AutoOpenGameEngin.tsx",
    "kind": "file",
    "contextGroup": "Canonical Engin module",
    "wiringTarget": "daydream_autoopen_bridge",
    "wiringContract": "useSharedEnginChannel + createInstance + de:open-side-b",
    "wiringAction": "Use as the Side-B auto-open bridge for Games Daydream; publish open intent to shared channel and dispatch the open-side-b event.",
    "acceptanceCheck": "Entering Games Daydream with openEngin opens the canonical GameEngin side-B."
  },
  {
    "path": "engins/engin.GameEngin.tsx",
    "kind": "file",
    "contextGroup": "Canonical Engin module",
    "wiringTarget": "canonical_gameengin_orchestrator",
    "wiringContract": "engins/engin.GameEngin.tsx + useGameEnginRuntime + gameEnginRuleSet",
    "wiringAction": "Make this the canonical GameEngin Side-B orchestrator that composes catalog, runtime hook, remote input, scores, cartridges, world builder, and bridge events.",
    "acceptanceCheck": "GameEngin shows catalog, scores, remote/session shell, cartridges, world builder, achievements, scripts, and sync through one runtime contract."
  },
  {
    "path": "app/gameengin/cartridges/",
    "kind": "folder",
    "contextGroup": "Cartridge folder",
    "wiringTarget": "cartridge_container",
    "wiringContract": "CARTRIDGE_MANIFEST + loadCartridge + createReactGameCartridge",
    "wiringAction": "Keep as cartridge boundary; every child manifest/loader/authored game must resolve through the cartridge manifest and loader contract.",
    "acceptanceCheck": "All cartridges launch from manifest id and report crashes through the same endpoint."
  },
  {
    "path": "app/gameengin/cartridges/[id]/",
    "kind": "folder",
    "contextGroup": "Cartridge folder",
    "wiringTarget": "cartridge_container",
    "wiringContract": "CARTRIDGE_MANIFEST + loadCartridge + createReactGameCartridge",
    "wiringAction": "Keep as cartridge boundary; every child manifest/loader/authored game must resolve through the cartridge manifest and loader contract.",
    "acceptanceCheck": "All cartridges launch from manifest id and report crashes through the same endpoint."
  },
  {
    "path": "lib/gameengin/cartridges/",
    "kind": "folder",
    "contextGroup": "Cartridge folder",
    "wiringTarget": "cartridge_container",
    "wiringContract": "CARTRIDGE_MANIFEST + loadCartridge + createReactGameCartridge",
    "wiringAction": "Keep as cartridge boundary; every child manifest/loader/authored game must resolve through the cartridge manifest and loader contract.",
    "acceptanceCheck": "All cartridges launch from manifest id and report crashes through the same endpoint."
  },
  {
    "path": "components/gameengin/dream.CartridgeRegistryBootstrap.tsx",
    "kind": "file",
    "contextGroup": "Cartridge system",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "components/gameengin/dream.cartridge.CartridgeBrowser.tsx",
    "kind": "file",
    "contextGroup": "Cartridge system",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "components/gameengin/dream.cartridge.CartridgeErrorBoundary.tsx",
    "kind": "file",
    "contextGroup": "Cartridge system",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "components/gameengin/dream.cartridge.CartridgeLauncher.tsx",
    "kind": "file",
    "contextGroup": "Cartridge system",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "components/gameengin/dream.cartridge.FeaturedCartridges.tsx",
    "kind": "file",
    "contextGroup": "Cartridge system",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "lib/gameengin/cartridge-manifest.ts",
    "kind": "file",
    "contextGroup": "Cartridge system",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "lib/gameengin/cartridge.ts",
    "kind": "file",
    "contextGroup": "Cartridge system",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "lib/gameengin/cartridgeLoader.ts",
    "kind": "file",
    "contextGroup": "Cartridge system",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "lib/gameengin/cartridges/achievementEngine.ts",
    "kind": "file",
    "contextGroup": "Cartridge system",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "lib/gameengin/cartridges/apiStubs.ts",
    "kind": "file",
    "contextGroup": "Cartridge system",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "lib/gameengin/cartridges/index.ts",
    "kind": "file",
    "contextGroup": "Cartridge system",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "lib/gameengin/cartridges/loaders.ts",
    "kind": "file",
    "contextGroup": "Cartridge system",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "lib/gameengin/cartridges/manifest.ts",
    "kind": "file",
    "contextGroup": "Cartridge system",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "lib/gameengin/cartridges/reactCartridge.ts",
    "kind": "file",
    "contextGroup": "Cartridge system",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "lib/gameengin/cartridges/saveState.ts",
    "kind": "file",
    "contextGroup": "Cartridge system",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "lib/gameengin/registerCartridges.ts",
    "kind": "file",
    "contextGroup": "Cartridge system",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "components/games/dream.GameController.module.css",
    "kind": "file",
    "contextGroup": "Controller/input bridge",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "components/games/dream.GameController.tsx",
    "kind": "file",
    "contextGroup": "Controller/input bridge",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "lib/games/gameControllerButtons.ts",
    "kind": "file",
    "contextGroup": "Controller/input bridge",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "lib/games/gameControllerLeft.ts",
    "kind": "file",
    "contextGroup": "Controller/input bridge",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "lib/games/gameControllerRight.ts",
    "kind": "file",
    "contextGroup": "Controller/input bridge",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "lib/games/mobileControls.ts",
    "kind": "file",
    "contextGroup": "Controller/input bridge",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "lib/games/useGameInputKeyboardBridge.ts",
    "kind": "file",
    "contextGroup": "Controller/input bridge",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "lib/games/useGamepad.ts",
    "kind": "file",
    "contextGroup": "Controller/input bridge",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "app/daydream/brand/",
    "kind": "folder",
    "contextGroup": "Daydream BRAND",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/brand/engin/",
    "kind": "folder",
    "contextGroup": "Daydream BRAND",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "daydreams/brand/",
    "kind": "folder",
    "contextGroup": "Daydream BRAND",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/brand/engin/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream BRAND",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/brand/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream BRAND",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "daydreams/brand/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream BRAND",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/code/",
    "kind": "folder",
    "contextGroup": "Daydream CODE",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/code/engin/",
    "kind": "folder",
    "contextGroup": "Daydream CODE",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "daydreams/code/",
    "kind": "folder",
    "contextGroup": "Daydream CODE",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/code/engin/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream CODE",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/code/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream CODE",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "daydreams/code/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream CODE",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/create/",
    "kind": "folder",
    "contextGroup": "Daydream CONTENT",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/create/engin/",
    "kind": "folder",
    "contextGroup": "Daydream CONTENT",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/forge/",
    "kind": "folder",
    "contextGroup": "Daydream CONTENT",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/media-vault/",
    "kind": "folder",
    "contextGroup": "Daydream CONTENT",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "daydreams/create/",
    "kind": "folder",
    "contextGroup": "Daydream CONTENT",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/create/engin/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream CONTENT",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/create/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream CONTENT",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/forge/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream CONTENT",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/media-vault/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream CONTENT",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "daydreams/create/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream CONTENT",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/lab/",
    "kind": "folder",
    "contextGroup": "Daydream LAB",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/lab/engin/",
    "kind": "folder",
    "contextGroup": "Daydream LAB",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/lab/portfolio/",
    "kind": "folder",
    "contextGroup": "Daydream LAB",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "daydreams/lab/",
    "kind": "folder",
    "contextGroup": "Daydream LAB",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/lab/engin/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream LAB",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/lab/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream LAB",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/lab/portfolio/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream LAB",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "daydreams/lab/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream LAB",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/music/",
    "kind": "folder",
    "contextGroup": "Daydream MUSIC",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/music/engin/",
    "kind": "folder",
    "contextGroup": "Daydream MUSIC",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/music/upload/",
    "kind": "folder",
    "contextGroup": "Daydream MUSIC",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "components/daydream/starmaker/",
    "kind": "folder",
    "contextGroup": "Daydream MUSIC",
    "wiringTarget": "gameengin_container",
    "wiringContract": "nearest generated GameEngin router lane",
    "wiringAction": "Keep as GameEngin support container; assign child files to runtime, route, cartridge, input, or brain contracts.",
    "acceptanceCheck": "No child file is invisible to generated/router/catalog contracts."
  },
  {
    "path": "daydreams/music/",
    "kind": "folder",
    "contextGroup": "Daydream MUSIC",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/music/engin/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream MUSIC",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/music/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream MUSIC",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/music/upload/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream MUSIC",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "components/daydream/starmaker/dream.panel.CompingPanel.tsx",
    "kind": "file",
    "contextGroup": "Daydream MUSIC",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx",
    "kind": "file",
    "contextGroup": "Daydream MUSIC",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "components/daydream/starmaker/dream.panel.PianoRollPanel.tsx",
    "kind": "file",
    "contextGroup": "Daydream MUSIC",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "components/daydream/starmaker/dream.panel.SessionViewPanel.tsx",
    "kind": "file",
    "contextGroup": "Daydream MUSIC",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "daydreams/music/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream MUSIC",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/",
    "kind": "folder",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/constellation/",
    "kind": "folder",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/play/",
    "kind": "folder",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "components/daydream/",
    "kind": "folder",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "gameengin_container",
    "wiringContract": "nearest generated GameEngin router lane",
    "wiringAction": "Keep as GameEngin support container; assign child files to runtime, route, cartridge, input, or brain contracts.",
    "acceptanceCheck": "No child file is invisible to generated/router/catalog contracts."
  },
  {
    "path": "daydreams/",
    "kind": "folder",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "lib/daydream/",
    "kind": "folder",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "gameengin_container",
    "wiringContract": "nearest generated GameEngin router lane",
    "wiringAction": "Keep as GameEngin support container; assign child files to runtime, route, cartridge, input, or brain contracts.",
    "acceptanceCheck": "No child file is invisible to generated/router/catalog contracts."
  },
  {
    "path": "app/daydream/constellation/dream.ConstellationClient.tsx",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/constellation/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/play/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "components/daydream/dream.CodeDreamIDE.tsx",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "components/daydream/dream.DiffViewer.tsx",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "components/daydream/dream.JourneyTrail.tsx",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "components/daydream/dream.LabDreamIDE.tsx",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "components/daydream/dream.NGNEngin.tsx",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "components/daydream/dream.OpenDaydreamSideBButton.tsx",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "components/daydream/dream.StandaloneEnginSurface.tsx",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "components/daydream/dream.constellationmap.tsx",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "components/daydream/dream.shell.DaydreamShell.tsx",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "components/daydream/dreamsurface.daydream.BrandDaydream.tsx",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "components/home/dream.DaydreamPulseStrip.tsx",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "daydreams/Agents-MUST-READ-ARCHITECTURE.md",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "lib/daydream/useDaydreamPersistence.ts",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/daydream/useDaydreamState.ts",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "supabase/migrations/20260325000000_phase8f_daydream_network.sql",
    "kind": "file",
    "contextGroup": "Daydream UNASSIGNED / CORE",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "app/daydream/game/",
    "kind": "folder",
    "contextGroup": "Daydream game session route + Daydream GAME",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/games/",
    "kind": "folder",
    "contextGroup": "Daydream game session route + Daydream GAME",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/daydream/game/dream.GamePageClient.tsx",
    "kind": "file",
    "contextGroup": "Daydream game session route + Daydream GAME",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/game/dream.shell.ImmersiveGameShell.tsx",
    "kind": "file",
    "contextGroup": "Daydream game session route + Daydream GAME",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/game/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream game session route + Daydream GAME",
    "wiringTarget": "cross_daydream_entry_reference",
    "wiringContract": "DaydreamShell route contract only",
    "wiringAction": "Keep as cross-Daydream entry reference included for routing awareness; do not let it own GameEngin logic unless it is the Games Daydream.",
    "acceptanceCheck": "Non-game daydreams remain routing references, not GameEngin owners."
  },
  {
    "path": "app/daydream/games/page.tsx",
    "kind": "file",
    "contextGroup": "Daydream game session route + Daydream GAME",
    "wiringTarget": "games_daydream_entry",
    "wiringContract": "app/daydream/games/page.tsx + DaydreamShell + sideB GameEngin",
    "wiringAction": "Use as the Games Daydream route into the canonical GameEngin Side-B, not as a separate GameEngin universe.",
    "acceptanceCheck": "Games Daydream, app/engines/games, and app/gameengin do not diverge into separate stacks."
  },
  {
    "path": "components/dreamengin/dream.scene.BabylonGameScene.tsx",
    "kind": "file",
    "contextGroup": "Dreamengin 3D game scene",
    "wiringTarget": "scene_or_engine_shell_adapter",
    "wiringContract": "scene adapter consumed by GameEngin rendering surface",
    "wiringAction": "Use as a rendering/scene adapter consumed by GameEngin surfaces; keep scene state behind runtime contracts.",
    "acceptanceCheck": "Scene adapter reads runtime state and emits events through GameEngin contracts."
  },
  {
    "path": "app/api/gameengin/",
    "kind": "folder",
    "contextGroup": "Game API folder",
    "wiringTarget": "gameengin_container",
    "wiringContract": "nearest generated GameEngin router lane",
    "wiringAction": "Keep as GameEngin support container; assign child files to runtime, route, cartridge, input, or brain contracts.",
    "acceptanceCheck": "No child file is invisible to generated/router/catalog contracts."
  },
  {
    "path": "app/api/gameengin/crash-report/",
    "kind": "folder",
    "contextGroup": "Game API folder",
    "wiringTarget": "gameengin_container",
    "wiringContract": "nearest generated GameEngin router lane",
    "wiringAction": "Keep as GameEngin support container; assign child files to runtime, route, cartridge, input, or brain contracts.",
    "acceptanceCheck": "No child file is invisible to generated/router/catalog contracts."
  },
  {
    "path": "components/games/dream.hud.GameHUD.tsx",
    "kind": "file",
    "contextGroup": "Game HUD seam",
    "wiringTarget": "game_hud_remote_surface",
    "wiringContract": "GameRemote/GameController/HUD seam components",
    "wiringAction": "Use as the visible HUD/remote layer that reads runtime state and emits normalized remote/controller actions.",
    "acceptanceCheck": "HUD and remote display state but do not own runtime state."
  },
  {
    "path": "components/games/dream.hud.LegacyGameHUD.tsx",
    "kind": "file",
    "contextGroup": "Game HUD seam",
    "wiringTarget": "game_hud_remote_surface",
    "wiringContract": "GameRemote/GameController/HUD seam components",
    "wiringAction": "Use as the visible HUD/remote layer that reads runtime state and emits normalized remote/controller actions.",
    "acceptanceCheck": "HUD and remote display state but do not own runtime state."
  },
  {
    "path": "components/games/dream.hud.MobileGameHUD.module.css",
    "kind": "file",
    "contextGroup": "Game HUD seam",
    "wiringTarget": "game_hud_remote_surface",
    "wiringContract": "GameRemote/GameController/HUD seam components",
    "wiringAction": "Use as the visible HUD/remote layer that reads runtime state and emits normalized remote/controller actions.",
    "acceptanceCheck": "HUD and remote display state but do not own runtime state."
  },
  {
    "path": "components/games/dream.hud.MobileGameHUD.tsx",
    "kind": "file",
    "contextGroup": "Game HUD seam",
    "wiringTarget": "game_hud_remote_surface",
    "wiringContract": "GameRemote/GameController/HUD seam components",
    "wiringAction": "Use as the visible HUD/remote layer that reads runtime state and emits normalized remote/controller actions.",
    "acceptanceCheck": "HUD and remote display state but do not own runtime state."
  },
  {
    "path": "tsconfig.games.json",
    "kind": "file",
    "contextGroup": "Game TypeScript project config",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "tsconfig.gamesengin.json",
    "kind": "file",
    "contextGroup": "Game TypeScript project config",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "supabase/migrations/20260320100000_game_scores_all_games.sql",
    "kind": "file",
    "contextGroup": "Game persistence/schema",
    "wiringTarget": "score_leaderboard_contract",
    "wiringContract": "/api/game-scores + game_scores table + Leaderboard UI",
    "wiringAction": "Wire score writes/reads from GameEngin, playable games, and leaderboard UI through this score contract only.",
    "acceptanceCheck": "Scores shown in GameEngin and leaderboards come from one API/table path."
  },
  {
    "path": "supabase/migrations/20260402000002_game_assets.sql",
    "kind": "file",
    "contextGroup": "Game persistence/schema",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "config/advanced-game-targets.json",
    "kind": "file",
    "contextGroup": "Game quality/target config",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/engins/game/",
    "kind": "folder",
    "contextGroup": "Game rule-set/runtime folder",
    "wiringTarget": "gameengin_container",
    "wiringContract": "nearest generated GameEngin router lane",
    "wiringAction": "Keep as GameEngin support container; assign child files to runtime, route, cartridge, input, or brain contracts.",
    "acceptanceCheck": "No child file is invisible to generated/router/catalog contracts."
  },
  {
    "path": "lib/engins/game/gameEnginRuleSet.ts",
    "kind": "file",
    "contextGroup": "Game rule-set/runtime hook",
    "wiringTarget": "game_ruleset_runtime_contract",
    "wiringContract": "lib/engins/game/gameEnginRuleSet.ts + useGameEnginRuntime.ts",
    "wiringAction": "Make this the canonical behavior/state contract for GameEngin; UI calls into this instead of duplicating rule logic in pages or games.",
    "acceptanceCheck": "Game behavior/state changes are made in rule-set/runtime hook, not duplicated in UI."
  },
  {
    "path": "lib/engins/game/index.ts",
    "kind": "file",
    "contextGroup": "Game rule-set/runtime hook",
    "wiringTarget": "game_ruleset_runtime_contract",
    "wiringContract": "lib/engins/game/gameEnginRuleSet.ts + useGameEnginRuntime.ts",
    "wiringAction": "Make this the canonical behavior/state contract for GameEngin; UI calls into this instead of duplicating rule logic in pages or games.",
    "acceptanceCheck": "Game behavior/state changes are made in rule-set/runtime hook, not duplicated in UI."
  },
  {
    "path": "lib/engins/game/useGameEnginRuntime.ts",
    "kind": "file",
    "contextGroup": "Game rule-set/runtime hook",
    "wiringTarget": "game_ruleset_runtime_contract",
    "wiringContract": "lib/engins/game/gameEnginRuleSet.ts + useGameEnginRuntime.ts",
    "wiringAction": "Make this the canonical behavior/state contract for GameEngin; UI calls into this instead of duplicating rule logic in pages or games.",
    "acceptanceCheck": "Game behavior/state changes are made in rule-set/runtime hook, not duplicated in UI."
  },
  {
    "path": "lib/gameengin/systems/ai.ts",
    "kind": "file",
    "contextGroup": "Game runtime system",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/systems/animation.ts",
    "kind": "file",
    "contextGroup": "Game runtime system",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/systems/assets.ts",
    "kind": "file",
    "contextGroup": "Game runtime system",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/systems/index.ts",
    "kind": "file",
    "contextGroup": "Game runtime system",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/systems/lod.ts",
    "kind": "file",
    "contextGroup": "Game runtime system",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/systems/network.ts",
    "kind": "file",
    "contextGroup": "Game runtime system",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/systems/physics.ts",
    "kind": "file",
    "contextGroup": "Game runtime system",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/systems/pooling.ts",
    "kind": "file",
    "contextGroup": "Game runtime system",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/systems/rendering.ts",
    "kind": "file",
    "contextGroup": "Game runtime system",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/systems/spatial.ts",
    "kind": "file",
    "contextGroup": "Game runtime system",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/systems/world.ts",
    "kind": "file",
    "contextGroup": "Game runtime system",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/games/",
    "kind": "folder",
    "contextGroup": "Game support runtime/library",
    "wiringTarget": "gameengin_container",
    "wiringContract": "nearest generated GameEngin router lane",
    "wiringAction": "Keep as GameEngin support container; assign child files to runtime, route, cartridge, input, or brain contracts.",
    "acceptanceCheck": "No child file is invisible to generated/router/catalog contracts."
  },
  {
    "path": "lib/games/DualSenseManager.ts",
    "kind": "file",
    "contextGroup": "Game support runtime/library",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "lib/games/avatar.ts",
    "kind": "file",
    "contextGroup": "Game support runtime/library",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/games/catalog.ts",
    "kind": "file",
    "contextGroup": "Game support runtime/library",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/games/hooks.ts",
    "kind": "file",
    "contextGroup": "Game support runtime/library",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/games/library-state.ts",
    "kind": "file",
    "contextGroup": "Game support runtime/library",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/games/madmaxi-wildfall-world.ts",
    "kind": "file",
    "contextGroup": "Game support runtime/library",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/games/navigation.ts",
    "kind": "file",
    "contextGroup": "Game support runtime/library",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/games/performance-baseline.ts",
    "kind": "file",
    "contextGroup": "Game support runtime/library",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/games/quality-plan.ts",
    "kind": "file",
    "contextGroup": "Game support runtime/library",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/games/useAIDirector.ts",
    "kind": "file",
    "contextGroup": "Game support runtime/library",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/games/useImmersiveGameLayout.ts",
    "kind": "file",
    "contextGroup": "Game support runtime/library",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "components/gameengin/README.md",
    "kind": "file",
    "contextGroup": "GameEngin UI/component",
    "wiringTarget": "gameengin_ui_surface",
    "wiringContract": "components/gameengin cartridge UI + GameEngin page routes",
    "wiringAction": "Use as GameEngin-facing UI around cartridge browsing, launch, crash handling, and bootstrap; connect to runtime/loader contracts.",
    "acceptanceCheck": "Cartridge UI can browse, launch, bootstrap, and catch crashes through the same loader/runtime path."
  },
  {
    "path": "components/gameengin/dream.CrashReportModal.tsx",
    "kind": "file",
    "contextGroup": "GameEngin UI/component",
    "wiringTarget": "gameengin_ui_surface",
    "wiringContract": "components/gameengin cartridge UI + GameEngin page routes",
    "wiringAction": "Use as GameEngin-facing UI around cartridge browsing, launch, crash handling, and bootstrap; connect to runtime/loader contracts.",
    "acceptanceCheck": "Cartridge UI can browse, launch, bootstrap, and catch crashes through the same loader/runtime path."
  },
  {
    "path": "lib/gameengin/brain/README.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/asset-registry/README.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/build-history/README.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/composition-principles/leading-lines-landmark.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/composition-principles/parallax-layers.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/concept-library/README.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/concept-library/neon-courier.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/concept-patterns/README.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/concept-patterns/protagonists/reluctant-courier.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/concept-patterns/scope-formulas/one-day-runner.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/concept-patterns/settings/neon-rain-megacity.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/crash-reports/README.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "crash_feedback_endpoint",
    "wiringContract": "POST /api/gameengin/crash-report + brain-reader recordCrashReport",
    "wiringAction": "Wire crash reports from CartridgeErrorBoundary and GameRuntime failures into this endpoint, then into brain-reader/project history.",
    "acceptanceCheck": "A thrown cartridge/game failure can reach brain crash history with cartridge id and user statement."
  },
  {
    "path": "lib/gameengin/brain/dialogue-patterns/callback-anchor.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/dialogue-patterns/implied-subject.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/dialogue-patterns/sentence-fragment-rhythm.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/emotional-tones/determined.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/emotional-tones/fierce.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/emotional-tones/hopeful.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/emotional-tones/reflective.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/emotional-tones/weary.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/fun-heuristics/meta-progression.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/fun-heuristics/moment-to-moment.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/fun-heuristics/session-loop.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/genre-dna/action-rpg.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/genre-dna/episodic.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/genre-dna/live-service.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/genre-dna/metroidvania.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/genre-dna/open-world.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/genre-dna/platformer.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/genre-dna/puzzle.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/genre-dna/racing.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/genre-dna/roguelike.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/genre-dna/sandbox.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/genre-dna/template.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/inspiration-corpus/celeste.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/inspiration-corpus/dead-cells.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/inspiration-corpus/hades.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/inspiration-corpus/hollow-knight.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/inspiration-corpus/outer-wilds.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/material-recipes/neon-glass-tube.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/material-recipes/rusted-iron.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/material-recipes/sun-bleached-sandstone.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/camera/look-ahead.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/camera/screen-shake.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/camera/smooth-follow.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/combat/combo.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/combat/hit-stop.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/combat/parry.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/combat/ranged.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/movement/coyote-time.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/movement/dash.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/movement/double-jump.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/movement/grapple.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/movement/wall-slide.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/progression/metroidvania-gating.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/progression/roguelike-perks.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/progression/skill-tree.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/structural/ability-gating.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/structural/meta-progression.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/structural/procedural-generation.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/structural/run-persistence.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/structural/season-pass.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/structural/world-streaming.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/narrative-pacing/default.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/originality-registry/signatures.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/principles/emotional-core.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/principles/feedback.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/principles/mastery.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/principles/progression.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/principles/responsiveness.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/principles/risk-reward.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/progression-state/README.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/rd-sessions/README.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/technique-library/lighting/three-point-mood.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/technique-library/modeling/edge-flow.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/technique-library/modeling/silhouette-first.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/technique-library/optimization/texture-atlasing.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/upgrade-history/README.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/upgrade-history/prioritization-rules.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/visual-bible/environments/neon-wasteland.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/work-queue/README.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/brain/character-voices/mad-maxi.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset + Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "brain_memory_for_cartridge",
    "wiringContract": "lib/gameengin/brain-reader.ts + lib/gameengin/brain/**",
    "wiringAction": "Expose as GameEngin brain memory for cartridge context, originality, feedback, tuning, and build history.",
    "acceptanceCheck": "Cartridge/game tooling can load contextual memory from the brain layer by key."
  },
  {
    "path": "lib/gameengin/brain/originality-registry/by-cartridge/mad-maxi.json",
    "kind": "file",
    "contextGroup": "GameEngin brain asset + Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "brain_memory_for_cartridge",
    "wiringContract": "lib/gameengin/brain-reader.ts + lib/gameengin/brain/**",
    "wiringAction": "Expose as GameEngin brain memory for cartridge context, originality, feedback, tuning, and build history.",
    "acceptanceCheck": "Cartridge/game tooling can load contextual memory from the brain layer by key."
  },
  {
    "path": "lib/gameengin/brain/visual-bible/characters/mad-maxi.md",
    "kind": "file",
    "contextGroup": "GameEngin brain asset + Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "brain_memory_for_cartridge",
    "wiringContract": "lib/gameengin/brain-reader.ts + lib/gameengin/brain/**",
    "wiringAction": "Expose as GameEngin brain memory for cartridge context, originality, feedback, tuning, and build history.",
    "acceptanceCheck": "Cartridge/game tooling can load contextual memory from the brain layer by key."
  },
  {
    "path": "lib/gameengin/brain/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/asset-registry/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/build-history/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/character-voices/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/composition-principles/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/concept-library/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/concept-patterns/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/concept-patterns/protagonists/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/concept-patterns/scope-formulas/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/concept-patterns/settings/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/crash-reports/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/dialogue-patterns/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/emotional-tones/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/fun-heuristics/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/genre-dna/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/inspiration-corpus/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/material-recipes/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/camera/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/combat/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/movement/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/progression/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/mechanic-library/structural/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/narrative-pacing/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/originality-registry/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/originality-registry/by-cartridge/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/principles/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/progression-state/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/rd-sessions/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/technique-library/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/technique-library/lighting/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/technique-library/modeling/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/technique-library/optimization/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/upgrade-history/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/visual-bible/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/visual-bible/characters/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/visual-bible/environments/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/work-queue/",
    "kind": "folder",
    "contextGroup": "GameEngin brain library folder",
    "wiringTarget": "brain_library_container",
    "wiringContract": "brain-reader + generated brain map",
    "wiringAction": "Keep as GameEngin brain-memory container; expose only through the brain reader/generated brain map, not direct UI imports.",
    "acceptanceCheck": "Brain assets can be discovered by key without direct component imports."
  },
  {
    "path": "lib/gameengin/brain/active-projects.json",
    "kind": "file",
    "contextGroup": "GameEngin brain memory",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "components/gameengin/",
    "kind": "folder",
    "contextGroup": "GameEngin component folder",
    "wiringTarget": "gameengin_container",
    "wiringContract": "nearest generated GameEngin router lane",
    "wiringAction": "Keep as GameEngin support container; assign child files to runtime, route, cartridge, input, or brain contracts.",
    "acceptanceCheck": "No child file is invisible to generated/router/catalog contracts."
  },
  {
    "path": "components/gameengin/input/",
    "kind": "folder",
    "contextGroup": "GameEngin component folder",
    "wiringTarget": "gameengin_container",
    "wiringContract": "nearest generated GameEngin router lane",
    "wiringAction": "Keep as GameEngin support container; assign child files to runtime, route, cartridge, input, or brain contracts.",
    "acceptanceCheck": "No child file is invisible to generated/router/catalog contracts."
  },
  {
    "path": "GameENGINspec.md",
    "kind": "file",
    "contextGroup": "GameEngin related file",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "components/games/dream.EnginFracture.tsx",
    "kind": "file",
    "contextGroup": "GameEngin related file",
    "wiringTarget": "playable_game_surface",
    "wiringContract": "components/games/dream.GamesHub.tsx GAMES registry",
    "wiringAction": "Register in the shared Games catalog and run inside the GameEngin session/runtime shell with shared score/input/persistence hooks.",
    "acceptanceCheck": "Games do not each reinvent score/input/persistence contracts."
  },
  {
    "path": "supabase/migrations/20260418000000_gameengin_core.sql",
    "kind": "file",
    "contextGroup": "GameEngin related file",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "supabase/migrations/20260426000000_activity_coop_gameengin_completion.sql",
    "kind": "file",
    "contextGroup": "GameEngin related file",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "app/daydream/games/engin/",
    "kind": "folder",
    "contextGroup": "GameEngin related folder + Daydream GAME",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "app/gameengin/",
    "kind": "folder",
    "contextGroup": "GameEngin route folder",
    "wiringTarget": "gameengin_container",
    "wiringContract": "nearest generated GameEngin router lane",
    "wiringAction": "Keep as GameEngin support container; assign child files to runtime, route, cartridge, input, or brain contracts.",
    "acceptanceCheck": "No child file is invisible to generated/router/catalog contracts."
  },
  {
    "path": "lib/gameengin/",
    "kind": "folder",
    "contextGroup": "GameEngin runtime folder",
    "wiringTarget": "gameengin_container",
    "wiringContract": "nearest generated GameEngin router lane",
    "wiringAction": "Keep as GameEngin support container; assign child files to runtime, route, cartridge, input, or brain contracts.",
    "acceptanceCheck": "No child file is invisible to generated/router/catalog contracts."
  },
  {
    "path": "lib/gameengin/GameRuntime.tsx",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/accessibility-ai.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/ai-director.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/ai-npcs.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/brain-reader.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "game_brain_knowledge_node",
    "wiringContract": "generated brain loader + brain-reader",
    "wiringAction": "Expose through brain-reader/generated brain map so GameEngin, Maestro/Upgrader, and cartridge builders can request knowledge by key.",
    "acceptanceCheck": "Mechanic/genre/material/dialogue/visual guidance is addressable by GameEngin tools."
  },
  {
    "path": "lib/gameengin/cloud-compute.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/controls/control-mappings.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/gameengin/core.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/gameengin/dream-engine.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/gameengin/dreamr-loader.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/gameengin/gameEnginRuntime.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "game_ruleset_runtime_contract",
    "wiringContract": "lib/engins/game/gameEnginRuleSet.ts + useGameEnginRuntime.ts",
    "wiringAction": "Make this the canonical behavior/state contract for GameEngin; UI calls into this instead of duplicating rule logic in pages or games.",
    "acceptanceCheck": "Game behavior/state changes are made in rule-set/runtime hook, not duplicated in UI."
  },
  {
    "path": "lib/gameengin/generative-audio.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/index.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/gameengin/neural-render.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/path-tracing.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/platform.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/gameengin/post-fx.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/gameengin/power-systems.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/gameengin/predictive-stream.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "gameengin_support_file",
    "wiringContract": "local export/import contract indicated by CSV evidence",
    "wiringAction": "Keep as support file and connect through its nearest exported contract; avoid direct page-to-helper coupling.",
    "acceptanceCheck": "Support file is reachable through a named export, generated router, or runtime import from its owning contract."
  },
  {
    "path": "lib/gameengin/procgen.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/unifiedLoop.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/useUnifiedLoop.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/webgpu-runtime-shell.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/world-crdt.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/xr.ts",
    "kind": "file",
    "contextGroup": "GameEngin runtime module",
    "wiringTarget": "game_runtime_systems",
    "wiringContract": "lib/gameengin/GameRuntime.tsx + unifiedLoop/useUnifiedLoop",
    "wiringAction": "Attach as internal GameRuntime systems behind the unified loop and cartridge API, not as route-level imports.",
    "acceptanceCheck": "AI, animation, assets, network, physics, rendering, spatial, world, loop, and XR systems are runtime plugins behind GameRuntime."
  },
  {
    "path": "lib/gameengin/systems/",
    "kind": "folder",
    "contextGroup": "GameEngin systems folder",
    "wiringTarget": "runtime_system_container",
    "wiringContract": "GameRuntime + unifiedLoop + cartridge API",
    "wiringAction": "Keep as runtime systems container; systems are activated by GameRuntime/unified loop, not by pages directly.",
    "acceptanceCheck": "Runtime systems are started/stopped by GameRuntime lifecycle, not pages."
  },
  {
    "path": "components/games/dream.remote.GameRemote.tsx",
    "kind": "file",
    "contextGroup": "GameRemote / shared input",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "components/games/dream.remote.GameRemoteSurface.tsx",
    "kind": "file",
    "contextGroup": "GameRemote / shared input",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "components/games/dream.remote.LegacyGameRemote.tsx",
    "kind": "file",
    "contextGroup": "GameRemote / shared input",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "lib/games/useRemoteChannel.ts",
    "kind": "file",
    "contextGroup": "GameRemote / shared input",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "daydreams/games/",
    "kind": "folder",
    "contextGroup": "Games Daydream surface + Daydream GAME",
    "wiringTarget": "daydream_entry_container",
    "wiringContract": "DaydreamShell sideBComponent / open-side-b event",
    "wiringAction": "Keep as route/surface container; it should mount or redirect through DaydreamShell/Side-B contract rather than own GameEngin state.",
    "acceptanceCheck": "Daydream routes open the same GameEngin Side-B instead of creating separate state."
  },
  {
    "path": "daydreams/games/page.tsx",
    "kind": "file",
    "contextGroup": "Games Daydream surface + Daydream GAME",
    "wiringTarget": "games_daydream_entry",
    "wiringContract": "app/daydream/games/page.tsx + DaydreamShell + sideB GameEngin",
    "wiringAction": "Use as the Games Daydream route into the canonical GameEngin Side-B, not as a separate GameEngin universe.",
    "acceptanceCheck": "Games Daydream, app/engines/games, and app/gameengin do not diverge into separate stacks."
  },
  {
    "path": "components/engines/games/",
    "kind": "folder",
    "contextGroup": "Games Engin app wrapper folder",
    "wiringTarget": "gameengin_container",
    "wiringContract": "nearest generated GameEngin router lane",
    "wiringAction": "Keep as GameEngin support container; assign child files to runtime, route, cartridge, input, or brain contracts.",
    "acceptanceCheck": "No child file is invisible to generated/router/catalog contracts."
  },
  {
    "path": "components/engines/games/panels/",
    "kind": "folder",
    "contextGroup": "Games Engin app wrapper folder",
    "wiringTarget": "gameengin_container",
    "wiringContract": "nearest generated GameEngin router lane",
    "wiringAction": "Keep as GameEngin support container; assign child files to runtime, route, cartridge, input, or brain contracts.",
    "acceptanceCheck": "No child file is invisible to generated/router/catalog contracts."
  },
  {
    "path": "components/engines/games/dream.GameEnginApp.tsx",
    "kind": "file",
    "contextGroup": "Games Engin app wrapper/panel",
    "wiringTarget": "standalone_game_app_wrapper",
    "wiringContract": "components/engines/games/dream.GameEnginApp.tsx",
    "wiringAction": "Use as wrapper/panel shell only; it should import canonical GameEngin contracts rather than duplicate runtime state.",
    "acceptanceCheck": "Panels/wrappers call GameEngin contracts rather than duplicating runtime state."
  },
  {
    "path": "components/engines/games/index.ts",
    "kind": "file",
    "contextGroup": "Games Engin app wrapper/panel",
    "wiringTarget": "standalone_game_app_wrapper",
    "wiringContract": "components/engines/games/dream.GameEnginApp.tsx",
    "wiringAction": "Use as wrapper/panel shell only; it should import canonical GameEngin contracts rather than duplicate runtime state.",
    "acceptanceCheck": "Panels/wrappers call GameEngin contracts rather than duplicating runtime state."
  },
  {
    "path": "components/engines/games/panels/dream.panel.BuilderPanel.tsx",
    "kind": "file",
    "contextGroup": "Games Engin app wrapper/panel",
    "wiringTarget": "standalone_game_app_wrapper",
    "wiringContract": "components/engines/games/dream.GameEnginApp.tsx",
    "wiringAction": "Use as wrapper/panel shell only; it should import canonical GameEngin contracts rather than duplicate runtime state.",
    "acceptanceCheck": "Panels/wrappers call GameEngin contracts rather than duplicating runtime state."
  },
  {
    "path": "components/engines/games/panels/dream.panel.LibraryPanel.tsx",
    "kind": "file",
    "contextGroup": "Games Engin app wrapper/panel",
    "wiringTarget": "standalone_game_app_wrapper",
    "wiringContract": "components/engines/games/dream.GameEnginApp.tsx",
    "wiringAction": "Use as wrapper/panel shell only; it should import canonical GameEngin contracts rather than duplicate runtime state.",
    "acceptanceCheck": "Panels/wrappers call GameEngin contracts rather than duplicating runtime state."
  },
  {
    "path": "components/engines/games/panels/dream.panel.ScoresPanel.tsx",
    "kind": "file",
    "contextGroup": "Games Engin app wrapper/panel",
    "wiringTarget": "score_leaderboard_contract",
    "wiringContract": "/api/game-scores + game_scores table + Leaderboard UI",
    "wiringAction": "Wire score writes/reads from GameEngin, playable games, and leaderboard UI through this score contract only.",
    "acceptanceCheck": "Scores shown in GameEngin and leaderboards come from one API/table path."
  },
  {
    "path": "components/games/madmaxi/",
    "kind": "folder",
    "contextGroup": "MADMAXI cartridge/game module + Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "playable_games_container",
    "wiringContract": "GAMES catalog + GameRuntime session shell",
    "wiringAction": "Keep as playable-game UI container; games register through the shared game catalog rather than one-off imports.",
    "acceptanceCheck": "Every playable game appears through the shared catalog and receives the same input/score hooks."
  },
  {
    "path": "components/games/madmaxi/audio.ts",
    "kind": "file",
    "contextGroup": "MADMAXI cartridge/game module + Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "components/games/madmaxi/authoredZonePacks.ts",
    "kind": "file",
    "contextGroup": "MADMAXI cartridge/game module + Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "components/games/madmaxi/config.ts",
    "kind": "file",
    "contextGroup": "MADMAXI cartridge/game module + Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "components/games/madmaxi/dream.MadmaxiGame.tsx",
    "kind": "file",
    "contextGroup": "MADMAXI cartridge/game module + Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "components/games/madmaxi/index.ts",
    "kind": "file",
    "contextGroup": "MADMAXI cartridge/game module + Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "components/games/madmaxi/levels.ts",
    "kind": "file",
    "contextGroup": "MADMAXI cartridge/game module + Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "components/games/madmaxi/materials.ts",
    "kind": "file",
    "contextGroup": "MADMAXI cartridge/game module + Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "components/games/madmaxi/types.ts",
    "kind": "file",
    "contextGroup": "MADMAXI cartridge/game module + Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "components/games/madmaxi/vfx.ts",
    "kind": "file",
    "contextGroup": "MADMAXI cartridge/game module + Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "public/cartridges/mad-maxi/",
    "kind": "folder",
    "contextGroup": "Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_container",
    "wiringContract": "CARTRIDGE_MANIFEST + loadCartridge + createReactGameCartridge",
    "wiringAction": "Keep as cartridge boundary; every child manifest/loader/authored game must resolve through the cartridge manifest and loader contract.",
    "acceptanceCheck": "All cartridges launch from manifest id and report crashes through the same endpoint."
  },
  {
    "path": "public/cartridges/mad-maxi/logic/",
    "kind": "folder",
    "contextGroup": "Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_container",
    "wiringContract": "CARTRIDGE_MANIFEST + loadCartridge + createReactGameCartridge",
    "wiringAction": "Keep as cartridge boundary; every child manifest/loader/authored game must resolve through the cartridge manifest and loader contract.",
    "acceptanceCheck": "All cartridges launch from manifest id and report crashes through the same endpoint."
  },
  {
    "path": "assembly/mad-maxi-player.ts",
    "kind": "file",
    "contextGroup": "Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "lib/runtime/madMaxiSnapshotBridge.ts",
    "kind": "file",
    "contextGroup": "Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "public/cartridges/mad-maxi/MANIFEST.json",
    "kind": "file",
    "contextGroup": "Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "public/cartridges/mad-maxi/logic/main.wasm",
    "kind": "file",
    "contextGroup": "Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "public/cartridges/mad-maxi/tuning.json",
    "kind": "file",
    "contextGroup": "Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "tests/madmaxi-accessibility-tuning.test.ts",
    "kind": "file",
    "contextGroup": "Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "tests/madmaxi-authored-levels.test.ts",
    "kind": "file",
    "contextGroup": "Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "tests/madmaxi-mechanics.test.ts",
    "kind": "file",
    "contextGroup": "Madmaxi / Mad Maxi cartridge",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "app/engines/games/builder/page.tsx",
    "kind": "file",
    "contextGroup": "Next route surface",
    "wiringTarget": "standalone_game_route",
    "wiringContract": "app/engines/games routes + game app wrapper",
    "wiringAction": "Route to the same canonical GameEngin/app wrapper and cartridge/catalog contracts as the Daydream path.",
    "acceptanceCheck": "Standalone routes stay wrappers over canonical GameEngin contracts."
  },
  {
    "path": "app/engines/games/layout.tsx",
    "kind": "file",
    "contextGroup": "Next route surface",
    "wiringTarget": "standalone_game_route",
    "wiringContract": "app/engines/games routes + game app wrapper",
    "wiringAction": "Route to the same canonical GameEngin/app wrapper and cartridge/catalog contracts as the Daydream path.",
    "acceptanceCheck": "Standalone routes stay wrappers over canonical GameEngin contracts."
  },
  {
    "path": "app/engines/games/library/page.tsx",
    "kind": "file",
    "contextGroup": "Next route surface",
    "wiringTarget": "standalone_game_route",
    "wiringContract": "app/engines/games routes + game app wrapper",
    "wiringAction": "Route to the same canonical GameEngin/app wrapper and cartridge/catalog contracts as the Daydream path.",
    "acceptanceCheck": "Standalone routes stay wrappers over canonical GameEngin contracts."
  },
  {
    "path": "app/engines/games/page.tsx",
    "kind": "file",
    "contextGroup": "Next route surface",
    "wiringTarget": "standalone_game_route",
    "wiringContract": "app/engines/games routes + game app wrapper",
    "wiringAction": "Route to the same canonical GameEngin/app wrapper and cartridge/catalog contracts as the Daydream path.",
    "acceptanceCheck": "Standalone routes stay wrappers over canonical GameEngin contracts."
  },
  {
    "path": "app/engines/games/scores/page.tsx",
    "kind": "file",
    "contextGroup": "Next route surface",
    "wiringTarget": "score_leaderboard_contract",
    "wiringContract": "/api/game-scores + game_scores table + Leaderboard UI",
    "wiringAction": "Wire score writes/reads from GameEngin, playable games, and leaderboard UI through this score contract only.",
    "acceptanceCheck": "Scores shown in GameEngin and leaderboards come from one API/table path."
  },
  {
    "path": "app/gameengin/cartridges/[id]/page.tsx",
    "kind": "file",
    "contextGroup": "Next route surface",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "app/gameengin/cartridges/page.tsx",
    "kind": "file",
    "contextGroup": "Next route surface",
    "wiringTarget": "cartridge_runtime_or_authored_cartridge",
    "wiringContract": "cartridge-manifest.ts + cartridge.ts + cartridgeLoader.ts + lib/gameengin/cartridges/*",
    "wiringAction": "Register through the cartridge manifest/loader/save/API stubs chain; playable cartridge UI should load it by manifest id, not by hard path.",
    "acceptanceCheck": "Each authored cartridge can load, save, emit achievements, and use API stubs through one cartridge API."
  },
  {
    "path": "app/gameengin/page.tsx",
    "kind": "file",
    "contextGroup": "Next route surface",
    "wiringTarget": "standalone_game_route",
    "wiringContract": "app/engines/games routes + game app wrapper",
    "wiringAction": "Route to the same canonical GameEngin/app wrapper and cartridge/catalog contracts as the Daydream path.",
    "acceptanceCheck": "Standalone routes stay wrappers over canonical GameEngin contracts."
  },
  {
    "path": "app/daydream/games/engin/page.tsx",
    "kind": "file",
    "contextGroup": "Next route surface + Daydream GAME",
    "wiringTarget": "games_daydream_entry",
    "wiringContract": "app/daydream/games/page.tsx + DaydreamShell + sideB GameEngin",
    "wiringAction": "Use as the Games Daydream route into the canonical GameEngin Side-B, not as a separate GameEngin universe.",
    "acceptanceCheck": "Games Daydream, app/engines/games, and app/gameengin do not diverge into separate stacks."
  },
  {
    "path": "components/games/",
    "kind": "folder",
    "contextGroup": "Playable game/cartridge surface",
    "wiringTarget": "playable_games_container",
    "wiringContract": "GAMES catalog + GameRuntime session shell",
    "wiringAction": "Keep as playable-game UI container; games register through the shared game catalog rather than one-off imports.",
    "acceptanceCheck": "Every playable game appears through the shared catalog and receives the same input/score hooks."
  },
  {
    "path": "components/games/css-modules.d.ts",
    "kind": "file",
    "contextGroup": "Playable game/cartridge surface",
    "wiringTarget": "playable_game_surface",
    "wiringContract": "components/games/dream.GamesHub.tsx GAMES registry",
    "wiringAction": "Register in the shared Games catalog and run inside the GameEngin session/runtime shell with shared score/input/persistence hooks.",
    "acceptanceCheck": "Games do not each reinvent score/input/persistence contracts."
  },
  {
    "path": "components/games/dream.MadMaxiWildfall.tsx",
    "kind": "file",
    "contextGroup": "Playable game/cartridge surface",
    "wiringTarget": "playable_game_surface",
    "wiringContract": "components/games/dream.GamesHub.tsx GAMES registry",
    "wiringAction": "Register in the shared Games catalog and run inside the GameEngin session/runtime shell with shared score/input/persistence hooks.",
    "acceptanceCheck": "Games do not each reinvent score/input/persistence contracts."
  },
  {
    "path": "components/games/dream.BabylonSideScroller.tsx",
    "kind": "file",
    "contextGroup": "Playable game/cartridge surface",
    "wiringTarget": "playable_game_surface",
    "wiringContract": "components/games/dream.GamesHub.tsx GAMES registry",
    "wiringAction": "Register in the shared Games catalog and run inside the GameEngin session/runtime shell with shared score/input/persistence hooks.",
    "acceptanceCheck": "Games do not each reinvent score/input/persistence contracts."
  },
  {
    "path": "components/games/dream.DefuseRitual.tsx",
    "kind": "file",
    "contextGroup": "Playable game/cartridge surface",
    "wiringTarget": "playable_game_surface",
    "wiringContract": "components/games/dream.GamesHub.tsx GAMES registry",
    "wiringAction": "Register in the shared Games catalog and run inside the GameEngin session/runtime shell with shared score/input/persistence hooks.",
    "acceptanceCheck": "Games do not each reinvent score/input/persistence contracts."
  },
  {
    "path": "components/games/dream.EchoArena.tsx",
    "kind": "file",
    "contextGroup": "Playable game/cartridge surface",
    "wiringTarget": "playable_game_surface",
    "wiringContract": "components/games/dream.GamesHub.tsx GAMES registry",
    "wiringAction": "Register in the shared Games catalog and run inside the GameEngin session/runtime shell with shared score/input/persistence hooks.",
    "acceptanceCheck": "Games do not each reinvent score/input/persistence contracts."
  },
  {
    "path": "components/games/dream.GamesHub.tsx",
    "kind": "file",
    "contextGroup": "Playable game/cartridge surface",
    "wiringTarget": "playable_game_surface",
    "wiringContract": "components/games/dream.GamesHub.tsx GAMES registry",
    "wiringAction": "Register in the shared Games catalog and run inside the GameEngin session/runtime shell with shared score/input/persistence hooks.",
    "acceptanceCheck": "Games do not each reinvent score/input/persistence contracts."
  },
  {
    "path": "components/games/dream.Glassfall.tsx",
    "kind": "file",
    "contextGroup": "Playable game/cartridge surface",
    "wiringTarget": "playable_game_surface",
    "wiringContract": "components/games/dream.GamesHub.tsx GAMES registry",
    "wiringAction": "Register in the shared Games catalog and run inside the GameEngin session/runtime shell with shared score/input/persistence hooks.",
    "acceptanceCheck": "Games do not each reinvent score/input/persistence contracts."
  },
  {
    "path": "components/games/dream.Leaderboard.tsx",
    "kind": "file",
    "contextGroup": "Playable game/cartridge surface",
    "wiringTarget": "score_leaderboard_contract",
    "wiringContract": "/api/game-scores + game_scores table + Leaderboard UI",
    "wiringAction": "Wire score writes/reads from GameEngin, playable games, and leaderboard UI through this score contract only.",
    "acceptanceCheck": "Scores shown in GameEngin and leaderboards come from one API/table path."
  },
  {
    "path": "components/games/dream.LexiconSolitaire.tsx",
    "kind": "file",
    "contextGroup": "Playable game/cartridge surface",
    "wiringTarget": "playable_game_surface",
    "wiringContract": "components/games/dream.GamesHub.tsx GAMES registry",
    "wiringAction": "Register in the shared Games catalog and run inside the GameEngin session/runtime shell with shared score/input/persistence hooks.",
    "acceptanceCheck": "Games do not each reinvent score/input/persistence contracts."
  },
  {
    "path": "components/games/dream.NeonDrift.tsx",
    "kind": "file",
    "contextGroup": "Playable game/cartridge surface",
    "wiringTarget": "playable_game_surface",
    "wiringContract": "components/games/dream.GamesHub.tsx GAMES registry",
    "wiringAction": "Register in the shared Games catalog and run inside the GameEngin session/runtime shell with shared score/input/persistence hooks.",
    "acceptanceCheck": "Games do not each reinvent score/input/persistence contracts."
  },
  {
    "path": "components/games/dream.NiteFlyerSolarHymn.tsx",
    "kind": "file",
    "contextGroup": "Playable game/cartridge surface",
    "wiringTarget": "playable_game_surface",
    "wiringContract": "components/games/dream.GamesHub.tsx GAMES registry",
    "wiringAction": "Register in the shared Games catalog and run inside the GameEngin session/runtime shell with shared score/input/persistence hooks.",
    "acceptanceCheck": "Games do not each reinvent score/input/persistence contracts."
  },
  {
    "path": "components/games/dream.NullCathedral.tsx",
    "kind": "file",
    "contextGroup": "Playable game/cartridge surface",
    "wiringTarget": "playable_game_surface",
    "wiringContract": "components/games/dream.GamesHub.tsx GAMES registry",
    "wiringAction": "Register in the shared Games catalog and run inside the GameEngin session/runtime shell with shared score/input/persistence hooks.",
    "acceptanceCheck": "Games do not each reinvent score/input/persistence contracts."
  },
  {
    "path": "components/games/dream.RecordingControls.tsx",
    "kind": "file",
    "contextGroup": "Playable game/cartridge surface",
    "wiringTarget": "playable_game_surface",
    "wiringContract": "components/games/dream.GamesHub.tsx GAMES registry",
    "wiringAction": "Register in the shared Games catalog and run inside the GameEngin session/runtime shell with shared score/input/persistence hooks.",
    "acceptanceCheck": "Games do not each reinvent score/input/persistence contracts."
  },
  {
    "path": "components/games/dream.SerpentSiege.tsx",
    "kind": "file",
    "contextGroup": "Playable game/cartridge surface",
    "wiringTarget": "playable_game_surface",
    "wiringContract": "components/games/dream.GamesHub.tsx GAMES registry",
    "wiringAction": "Register in the shared Games catalog and run inside the GameEngin session/runtime shell with shared score/input/persistence hooks.",
    "acceptanceCheck": "Games do not each reinvent score/input/persistence contracts."
  },
  {
    "path": "components/games/dream.VoidlineGP.tsx",
    "kind": "file",
    "contextGroup": "Playable game/cartridge surface",
    "wiringTarget": "playable_game_surface",
    "wiringContract": "components/games/dream.GamesHub.tsx GAMES registry",
    "wiringAction": "Register in the shared Games catalog and run inside the GameEngin session/runtime shell with shared score/input/persistence hooks.",
    "acceptanceCheck": "Games do not each reinvent score/input/persistence contracts."
  },
  {
    "path": "lib/gameengin/remote/",
    "kind": "folder",
    "contextGroup": "Remote/controller folder",
    "wiringTarget": "input_container",
    "wiringContract": "GameRemoteInputAction / MobileControlVector / remote move contract",
    "wiringAction": "Keep as input subsystem boundary; feed all controller/remote gestures into one GameRemote input contract.",
    "acceptanceCheck": "A controller/touch/gamepad input can drive any registered game through the same action shape."
  },
  {
    "path": "components/gameengin/input/DualSenseManager.ts",
    "kind": "file",
    "contextGroup": "Remote/controller input",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "lib/gameengin/remote/comboMachine.ts",
    "kind": "file",
    "contextGroup": "Remote/controller input",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "lib/gameengin/remote/index.ts",
    "kind": "file",
    "contextGroup": "Remote/controller input",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "lib/gameengin/remote/layout.ts",
    "kind": "file",
    "contextGroup": "Remote/controller input",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "lib/gameengin/remote/moves.ts",
    "kind": "file",
    "contextGroup": "Remote/controller input",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "lib/gameengin/remote/sprintDetector.ts",
    "kind": "file",
    "contextGroup": "Remote/controller input",
    "wiringTarget": "input_remote_controller_bridge",
    "wiringContract": "components/games/dream.remote.GameRemote + lib/gameengin/remote + lib/games input helpers",
    "wiringAction": "Normalize all touch, keyboard, gamepad, DualSense, combo, sprint, and remote events into the shared GameRemote/GameRuntime input contract.",
    "acceptanceCheck": "Remote/controller events produce consistent runtime input regardless of source device."
  },
  {
    "path": "app/api/game-scores/",
    "kind": "folder",
    "contextGroup": "Score API",
    "wiringTarget": "gameengin_container",
    "wiringContract": "nearest generated GameEngin router lane",
    "wiringAction": "Keep as GameEngin support container; assign child files to runtime, route, cartridge, input, or brain contracts.",
    "acceptanceCheck": "No child file is invisible to generated/router/catalog contracts."
  },
  {
    "path": "app/api/game-scores/route.ts",
    "kind": "file",
    "contextGroup": "Score API",
    "wiringTarget": "score_leaderboard_contract",
    "wiringContract": "/api/game-scores + game_scores table + Leaderboard UI",
    "wiringAction": "Wire score writes/reads from GameEngin, playable games, and leaderboard UI through this score contract only.",
    "acceptanceCheck": "Scores shown in GameEngin and leaderboards come from one API/table path."
  },
  {
    "path": "components/games/_fx/",
    "kind": "folder",
    "contextGroup": "Shared cartridge FX kit",
    "wiringTarget": "playable_games_container",
    "wiringContract": "GAMES catalog + GameRuntime session shell",
    "wiringAction": "Keep as playable-game UI container; games register through the shared game catalog rather than one-off imports.",
    "acceptanceCheck": "Every playable game appears through the shared catalog and receives the same input/score hooks."
  },
  {
    "path": "components/games/_fx/canvasFx.ts",
    "kind": "file",
    "contextGroup": "Shared cartridge FX kit",
    "wiringTarget": "playable_game_surface",
    "wiringContract": "components/games/dream.GamesHub.tsx GAMES registry",
    "wiringAction": "Register in the shared Games catalog and run inside the GameEngin session/runtime shell with shared score/input/persistence hooks.",
    "acceptanceCheck": "Games do not each reinvent score/input/persistence contracts."
  },
  {
    "path": "app/engines/games/",
    "kind": "folder",
    "contextGroup": "Standalone Games Engin route folder",
    "wiringTarget": "standalone_route_container",
    "wiringContract": "components/engines/games wrapper \u2192 engins/engin.GameEngin",
    "wiringAction": "Keep as standalone GameEngin route container; route to the same canonical GameEngin wrapper used by the Daydream entry.",
    "acceptanceCheck": "Standalone games routes render the same GameEngin capability stack as Daydream."
  },
  {
    "path": "app/engines/games/builder/",
    "kind": "folder",
    "contextGroup": "Standalone Games Engin route folder",
    "wiringTarget": "standalone_route_container",
    "wiringContract": "components/engines/games wrapper \u2192 engins/engin.GameEngin",
    "wiringAction": "Keep as standalone GameEngin route container; route to the same canonical GameEngin wrapper used by the Daydream entry.",
    "acceptanceCheck": "Standalone games routes render the same GameEngin capability stack as Daydream."
  },
  {
    "path": "app/engines/games/library/",
    "kind": "folder",
    "contextGroup": "Standalone Games Engin route folder",
    "wiringTarget": "standalone_route_container",
    "wiringContract": "components/engines/games wrapper \u2192 engins/engin.GameEngin",
    "wiringAction": "Keep as standalone GameEngin route container; route to the same canonical GameEngin wrapper used by the Daydream entry.",
    "acceptanceCheck": "Standalone games routes render the same GameEngin capability stack as Daydream."
  },
  {
    "path": "app/engines/games/scores/",
    "kind": "folder",
    "contextGroup": "Standalone Games Engin route folder",
    "wiringTarget": "standalone_route_container",
    "wiringContract": "components/engines/games wrapper \u2192 engins/engin.GameEngin",
    "wiringAction": "Keep as standalone GameEngin route container; route to the same canonical GameEngin wrapper used by the Daydream entry.",
    "acceptanceCheck": "Standalone games routes render the same GameEngin capability stack as Daydream."
  }
] as const;

export const GAMEENGIN_WORK_PACKET_BY_TARGET = {
  "crash_feedback_endpoint": [
    "app/api/gameengin/crash-report/route.ts",
    "lib/gameengin/brain/crash-reports/README.md"
  ],
  "daydream_autoopen_bridge": [
    "engins/autoopen/dream.AutoOpenGameEngin.tsx"
  ],
  "canonical_gameengin_orchestrator": [
    "engins/engin.GameEngin.tsx"
  ],
  "cartridge_container": [
    "app/gameengin/cartridges/",
    "app/gameengin/cartridges/[id]/",
    "lib/gameengin/cartridges/",
    "public/cartridges/mad-maxi/",
    "public/cartridges/mad-maxi/logic/"
  ],
  "cartridge_runtime_or_authored_cartridge": [
    "components/gameengin/dream.CartridgeRegistryBootstrap.tsx",
    "components/gameengin/dream.cartridge.CartridgeBrowser.tsx",
    "components/gameengin/dream.cartridge.CartridgeErrorBoundary.tsx",
    "components/gameengin/dream.cartridge.CartridgeLauncher.tsx",
    "components/gameengin/dream.cartridge.FeaturedCartridges.tsx",
    "lib/gameengin/cartridge-manifest.ts",
    "lib/gameengin/cartridge.ts",
    "lib/gameengin/cartridgeLoader.ts",
    "lib/gameengin/cartridges/achievementEngine.ts",
    "lib/gameengin/cartridges/apiStubs.ts",
    "lib/gameengin/cartridges/index.ts",
    "lib/gameengin/cartridges/loaders.ts",
    "lib/gameengin/cartridges/manifest.ts",
    "lib/gameengin/cartridges/reactCartridge.ts",
    "lib/gameengin/cartridges/saveState.ts",
    "lib/gameengin/registerCartridges.ts",
    "components/games/madmaxi/audio.ts",
    "components/games/madmaxi/authoredZonePacks.ts",
    "components/games/madmaxi/config.ts",
    "components/games/madmaxi/dream.MadmaxiGame.tsx",
    "components/games/madmaxi/index.ts",
    "components/games/madmaxi/levels.ts",
    "components/games/madmaxi/materials.ts",
    "components/games/madmaxi/types.ts",
    "components/games/madmaxi/vfx.ts",
    "assembly/mad-maxi-player.ts",
    "lib/runtime/madMaxiSnapshotBridge.ts",
    "public/cartridges/mad-maxi/MANIFEST.json",
    "public/cartridges/mad-maxi/logic/main.wasm",
    "public/cartridges/mad-maxi/tuning.json",
    "tests/madmaxi-accessibility-tuning.test.ts",
    "tests/madmaxi-authored-levels.test.ts",
    "tests/madmaxi-mechanics.test.ts",
    "app/gameengin/cartridges/[id]/page.tsx",
    "app/gameengin/cartridges/page.tsx"
  ],
  "input_remote_controller_bridge": [
    "components/games/dream.GameController.module.css",
    "components/games/dream.GameController.tsx",
    "lib/games/gameControllerButtons.ts",
    "lib/games/gameControllerLeft.ts",
    "lib/games/gameControllerRight.ts",
    "lib/games/mobileControls.ts",
    "lib/games/useGameInputKeyboardBridge.ts",
    "lib/games/useGamepad.ts",
    "lib/games/DualSenseManager.ts",
    "components/games/dream.remote.GameRemote.tsx",
    "components/games/dream.remote.GameRemoteSurface.tsx",
    "components/games/dream.remote.LegacyGameRemote.tsx",
    "lib/games/useRemoteChannel.ts",
    "components/gameengin/input/DualSenseManager.ts",
    "lib/gameengin/remote/comboMachine.ts",
    "lib/gameengin/remote/index.ts",
    "lib/gameengin/remote/layout.ts",
    "lib/gameengin/remote/moves.ts",
    "lib/gameengin/remote/sprintDetector.ts"
  ],
  "daydream_entry_container": [
    "app/daydream/brand/",
    "app/daydream/brand/engin/",
    "daydreams/brand/",
    "app/daydream/code/",
    "app/daydream/code/engin/",
    "daydreams/code/",
    "app/daydream/create/",
    "app/daydream/create/engin/",
    "app/daydream/forge/",
    "app/daydream/media-vault/",
    "daydreams/create/",
    "app/daydream/lab/",
    "app/daydream/lab/engin/",
    "app/daydream/lab/portfolio/",
    "daydreams/lab/",
    "app/daydream/music/",
    "app/daydream/music/engin/",
    "app/daydream/music/upload/",
    "daydreams/music/",
    "app/daydream/",
    "app/daydream/constellation/",
    "app/daydream/play/",
    "daydreams/",
    "app/daydream/game/",
    "app/daydream/games/",
    "app/daydream/games/engin/",
    "daydreams/games/"
  ],
  "cross_daydream_entry_reference": [
    "app/daydream/brand/engin/page.tsx",
    "app/daydream/brand/page.tsx",
    "daydreams/brand/page.tsx",
    "app/daydream/code/engin/page.tsx",
    "app/daydream/code/page.tsx",
    "daydreams/code/page.tsx",
    "app/daydream/create/engin/page.tsx",
    "app/daydream/create/page.tsx",
    "app/daydream/forge/page.tsx",
    "app/daydream/media-vault/page.tsx",
    "daydreams/create/page.tsx",
    "app/daydream/lab/engin/page.tsx",
    "app/daydream/lab/page.tsx",
    "app/daydream/lab/portfolio/page.tsx",
    "daydreams/lab/page.tsx",
    "app/daydream/music/engin/page.tsx",
    "app/daydream/music/page.tsx",
    "app/daydream/music/upload/page.tsx",
    "daydreams/music/page.tsx",
    "app/daydream/constellation/dream.ConstellationClient.tsx",
    "app/daydream/constellation/page.tsx",
    "app/daydream/play/page.tsx",
    "daydreams/Agents-MUST-READ-ARCHITECTURE.md",
    "app/daydream/game/dream.GamePageClient.tsx",
    "app/daydream/game/dream.shell.ImmersiveGameShell.tsx",
    "app/daydream/game/page.tsx"
  ],
  "gameengin_container": [
    "components/daydream/starmaker/",
    "components/daydream/",
    "lib/daydream/",
    "app/api/gameengin/",
    "app/api/gameengin/crash-report/",
    "lib/engins/game/",
    "lib/games/",
    "components/gameengin/",
    "components/gameengin/input/",
    "app/gameengin/",
    "lib/gameengin/",
    "components/engines/games/",
    "components/engines/games/panels/",
    "app/api/game-scores/"
  ],
  "gameengin_support_file": [
    "components/daydream/starmaker/dream.panel.CompingPanel.tsx",
    "components/daydream/starmaker/dream.panel.MultitrackArrangementPanel.tsx",
    "components/daydream/starmaker/dream.panel.PianoRollPanel.tsx",
    "components/daydream/starmaker/dream.panel.SessionViewPanel.tsx",
    "components/daydream/dream.CodeDreamIDE.tsx",
    "components/daydream/dream.DiffViewer.tsx",
    "components/daydream/dream.JourneyTrail.tsx",
    "components/daydream/dream.LabDreamIDE.tsx",
    "components/daydream/dream.NGNEngin.tsx",
    "components/daydream/dream.OpenDaydreamSideBButton.tsx",
    "components/daydream/dream.StandaloneEnginSurface.tsx",
    "components/daydream/dream.constellationmap.tsx",
    "components/daydream/dream.shell.DaydreamShell.tsx",
    "components/daydream/dreamsurface.daydream.BrandDaydream.tsx",
    "components/home/dream.DaydreamPulseStrip.tsx",
    "lib/daydream/useDaydreamPersistence.ts",
    "lib/daydream/useDaydreamState.ts",
    "supabase/migrations/20260325000000_phase8f_daydream_network.sql",
    "tsconfig.games.json",
    "tsconfig.gamesengin.json",
    "supabase/migrations/20260402000002_game_assets.sql",
    "config/advanced-game-targets.json",
    "lib/games/avatar.ts",
    "lib/games/catalog.ts",
    "lib/games/hooks.ts",
    "lib/games/library-state.ts",
    "lib/games/madmaxi-wildfall-world.ts",
    "lib/games/navigation.ts",
    "lib/games/performance-baseline.ts",
    "lib/games/quality-plan.ts",
    "lib/games/useAIDirector.ts",
    "lib/games/useImmersiveGameLayout.ts",
    "GameENGINspec.md",
    "supabase/migrations/20260418000000_gameengin_core.sql",
    "supabase/migrations/20260426000000_activity_coop_gameengin_completion.sql",
    "lib/gameengin/controls/control-mappings.ts",
    "lib/gameengin/core.ts",
    "lib/gameengin/dream-engine.ts",
    "lib/gameengin/dreamr-loader.ts",
    "lib/gameengin/index.ts",
    "lib/gameengin/platform.ts",
    "lib/gameengin/post-fx.ts",
    "lib/gameengin/power-systems.ts",
    "lib/gameengin/predictive-stream.ts"
  ],
  "games_daydream_entry": [
    "app/daydream/games/page.tsx",
    "daydreams/games/page.tsx",
    "app/daydream/games/engin/page.tsx"
  ],
  "scene_or_engine_shell_adapter": [
    "components/dreamengin/dream.scene.BabylonGameScene.tsx"
  ],
  "game_hud_remote_surface": [
    "components/games/dream.hud.GameHUD.tsx",
    "components/games/dream.hud.LegacyGameHUD.tsx",
    "components/games/dream.hud.MobileGameHUD.module.css",
    "components/games/dream.hud.MobileGameHUD.tsx"
  ],
  "score_leaderboard_contract": [
    "supabase/migrations/20260320100000_game_scores_all_games.sql",
    "components/engines/games/panels/dream.panel.ScoresPanel.tsx",
    "app/engines/games/scores/page.tsx",
    "components/games/dream.Leaderboard.tsx",
    "app/api/game-scores/route.ts"
  ],
  "game_ruleset_runtime_contract": [
    "lib/engins/game/gameEnginRuleSet.ts",
    "lib/engins/game/index.ts",
    "lib/engins/game/useGameEnginRuntime.ts",
    "lib/gameengin/gameEnginRuntime.ts"
  ],
  "game_runtime_systems": [
    "lib/gameengin/systems/ai.ts",
    "lib/gameengin/systems/animation.ts",
    "lib/gameengin/systems/assets.ts",
    "lib/gameengin/systems/index.ts",
    "lib/gameengin/systems/lod.ts",
    "lib/gameengin/systems/network.ts",
    "lib/gameengin/systems/physics.ts",
    "lib/gameengin/systems/pooling.ts",
    "lib/gameengin/systems/rendering.ts",
    "lib/gameengin/systems/spatial.ts",
    "lib/gameengin/systems/world.ts",
    "lib/gameengin/GameRuntime.tsx",
    "lib/gameengin/accessibility-ai.ts",
    "lib/gameengin/ai-director.ts",
    "lib/gameengin/ai-npcs.ts",
    "lib/gameengin/cloud-compute.ts",
    "lib/gameengin/generative-audio.ts",
    "lib/gameengin/neural-render.ts",
    "lib/gameengin/path-tracing.ts",
    "lib/gameengin/procgen.ts",
    "lib/gameengin/unifiedLoop.ts",
    "lib/gameengin/useUnifiedLoop.ts",
    "lib/gameengin/webgpu-runtime-shell.ts",
    "lib/gameengin/world-crdt.ts",
    "lib/gameengin/xr.ts"
  ],
  "gameengin_ui_surface": [
    "components/gameengin/README.md",
    "components/gameengin/dream.CrashReportModal.tsx"
  ],
  "game_brain_knowledge_node": [
    "lib/gameengin/brain/README.md",
    "lib/gameengin/brain/asset-registry/README.md",
    "lib/gameengin/brain/build-history/README.md",
    "lib/gameengin/brain/composition-principles/leading-lines-landmark.json",
    "lib/gameengin/brain/composition-principles/parallax-layers.json",
    "lib/gameengin/brain/concept-library/README.md",
    "lib/gameengin/brain/concept-library/neon-courier.json",
    "lib/gameengin/brain/concept-patterns/README.md",
    "lib/gameengin/brain/concept-patterns/protagonists/reluctant-courier.json",
    "lib/gameengin/brain/concept-patterns/scope-formulas/one-day-runner.json",
    "lib/gameengin/brain/concept-patterns/settings/neon-rain-megacity.json",
    "lib/gameengin/brain/dialogue-patterns/callback-anchor.json",
    "lib/gameengin/brain/dialogue-patterns/implied-subject.json",
    "lib/gameengin/brain/dialogue-patterns/sentence-fragment-rhythm.json",
    "lib/gameengin/brain/emotional-tones/determined.json",
    "lib/gameengin/brain/emotional-tones/fierce.json",
    "lib/gameengin/brain/emotional-tones/hopeful.json",
    "lib/gameengin/brain/emotional-tones/reflective.json",
    "lib/gameengin/brain/emotional-tones/weary.json",
    "lib/gameengin/brain/fun-heuristics/meta-progression.json",
    "lib/gameengin/brain/fun-heuristics/moment-to-moment.json",
    "lib/gameengin/brain/fun-heuristics/session-loop.json",
    "lib/gameengin/brain/genre-dna/action-rpg.json",
    "lib/gameengin/brain/genre-dna/episodic.json",
    "lib/gameengin/brain/genre-dna/live-service.json",
    "lib/gameengin/brain/genre-dna/metroidvania.json",
    "lib/gameengin/brain/genre-dna/open-world.json",
    "lib/gameengin/brain/genre-dna/platformer.json",
    "lib/gameengin/brain/genre-dna/puzzle.json",
    "lib/gameengin/brain/genre-dna/racing.json",
    "lib/gameengin/brain/genre-dna/roguelike.json",
    "lib/gameengin/brain/genre-dna/sandbox.json",
    "lib/gameengin/brain/genre-dna/template.json",
    "lib/gameengin/brain/inspiration-corpus/celeste.json",
    "lib/gameengin/brain/inspiration-corpus/dead-cells.json",
    "lib/gameengin/brain/inspiration-corpus/hades.json",
    "lib/gameengin/brain/inspiration-corpus/hollow-knight.json",
    "lib/gameengin/brain/inspiration-corpus/outer-wilds.json",
    "lib/gameengin/brain/material-recipes/neon-glass-tube.json",
    "lib/gameengin/brain/material-recipes/rusted-iron.json",
    "lib/gameengin/brain/material-recipes/sun-bleached-sandstone.json",
    "lib/gameengin/brain/mechanic-library/camera/look-ahead.json",
    "lib/gameengin/brain/mechanic-library/camera/screen-shake.json",
    "lib/gameengin/brain/mechanic-library/camera/smooth-follow.json",
    "lib/gameengin/brain/mechanic-library/combat/combo.json",
    "lib/gameengin/brain/mechanic-library/combat/hit-stop.json",
    "lib/gameengin/brain/mechanic-library/combat/parry.json",
    "lib/gameengin/brain/mechanic-library/combat/ranged.json",
    "lib/gameengin/brain/mechanic-library/movement/coyote-time.json",
    "lib/gameengin/brain/mechanic-library/movement/dash.json",
    "lib/gameengin/brain/mechanic-library/movement/double-jump.json",
    "lib/gameengin/brain/mechanic-library/movement/grapple.json",
    "lib/gameengin/brain/mechanic-library/movement/wall-slide.json",
    "lib/gameengin/brain/mechanic-library/progression/metroidvania-gating.json",
    "lib/gameengin/brain/mechanic-library/progression/roguelike-perks.json",
    "lib/gameengin/brain/mechanic-library/progression/skill-tree.json",
    "lib/gameengin/brain/mechanic-library/structural/ability-gating.json",
    "lib/gameengin/brain/mechanic-library/structural/meta-progression.json",
    "lib/gameengin/brain/mechanic-library/structural/procedural-generation.json",
    "lib/gameengin/brain/mechanic-library/structural/run-persistence.json",
    "lib/gameengin/brain/mechanic-library/structural/season-pass.json",
    "lib/gameengin/brain/mechanic-library/structural/world-streaming.json",
    "lib/gameengin/brain/narrative-pacing/default.json",
    "lib/gameengin/brain/originality-registry/signatures.json",
    "lib/gameengin/brain/principles/emotional-core.md",
    "lib/gameengin/brain/principles/feedback.md",
    "lib/gameengin/brain/principles/mastery.md",
    "lib/gameengin/brain/principles/progression.md",
    "lib/gameengin/brain/principles/responsiveness.md",
    "lib/gameengin/brain/principles/risk-reward.md",
    "lib/gameengin/brain/progression-state/README.md",
    "lib/gameengin/brain/rd-sessions/README.md",
    "lib/gameengin/brain/technique-library/lighting/three-point-mood.json",
    "lib/gameengin/brain/technique-library/modeling/edge-flow.json",
    "lib/gameengin/brain/technique-library/modeling/silhouette-first.json",
    "lib/gameengin/brain/technique-library/optimization/texture-atlasing.json",
    "lib/gameengin/brain/upgrade-history/README.md",
    "lib/gameengin/brain/upgrade-history/prioritization-rules.json",
    "lib/gameengin/brain/visual-bible/environments/neon-wasteland.md",
    "lib/gameengin/brain/work-queue/README.md",
    "lib/gameengin/brain/active-projects.json",
    "lib/gameengin/brain-reader.ts"
  ],
  "brain_memory_for_cartridge": [
    "lib/gameengin/brain/character-voices/mad-maxi.json",
    "lib/gameengin/brain/originality-registry/by-cartridge/mad-maxi.json",
    "lib/gameengin/brain/visual-bible/characters/mad-maxi.md"
  ],
  "brain_library_container": [
    "lib/gameengin/brain/",
    "lib/gameengin/brain/asset-registry/",
    "lib/gameengin/brain/build-history/",
    "lib/gameengin/brain/character-voices/",
    "lib/gameengin/brain/composition-principles/",
    "lib/gameengin/brain/concept-library/",
    "lib/gameengin/brain/concept-patterns/",
    "lib/gameengin/brain/concept-patterns/protagonists/",
    "lib/gameengin/brain/concept-patterns/scope-formulas/",
    "lib/gameengin/brain/concept-patterns/settings/",
    "lib/gameengin/brain/crash-reports/",
    "lib/gameengin/brain/dialogue-patterns/",
    "lib/gameengin/brain/emotional-tones/",
    "lib/gameengin/brain/fun-heuristics/",
    "lib/gameengin/brain/genre-dna/",
    "lib/gameengin/brain/inspiration-corpus/",
    "lib/gameengin/brain/material-recipes/",
    "lib/gameengin/brain/mechanic-library/",
    "lib/gameengin/brain/mechanic-library/camera/",
    "lib/gameengin/brain/mechanic-library/combat/",
    "lib/gameengin/brain/mechanic-library/movement/",
    "lib/gameengin/brain/mechanic-library/progression/",
    "lib/gameengin/brain/mechanic-library/structural/",
    "lib/gameengin/brain/narrative-pacing/",
    "lib/gameengin/brain/originality-registry/",
    "lib/gameengin/brain/originality-registry/by-cartridge/",
    "lib/gameengin/brain/principles/",
    "lib/gameengin/brain/progression-state/",
    "lib/gameengin/brain/rd-sessions/",
    "lib/gameengin/brain/technique-library/",
    "lib/gameengin/brain/technique-library/lighting/",
    "lib/gameengin/brain/technique-library/modeling/",
    "lib/gameengin/brain/technique-library/optimization/",
    "lib/gameengin/brain/upgrade-history/",
    "lib/gameengin/brain/visual-bible/",
    "lib/gameengin/brain/visual-bible/characters/",
    "lib/gameengin/brain/visual-bible/environments/",
    "lib/gameengin/brain/work-queue/"
  ],
  "playable_game_surface": [
    "components/games/dream.EnginFracture.tsx",
    "components/games/css-modules.d.ts",
    "components/games/dream.MadMaxiWildfall.tsx",
    "components/games/dream.BabylonSideScroller.tsx",
    "components/games/dream.DefuseRitual.tsx",
    "components/games/dream.EchoArena.tsx",
    "components/games/dream.GamesHub.tsx",
    "components/games/dream.Glassfall.tsx",
    "components/games/dream.LexiconSolitaire.tsx",
    "components/games/dream.NeonDrift.tsx",
    "components/games/dream.NiteFlyerSolarHymn.tsx",
    "components/games/dream.NullCathedral.tsx",
    "components/games/dream.RecordingControls.tsx",
    "components/games/dream.SerpentSiege.tsx",
    "components/games/dream.VoidlineGP.tsx",
    "components/games/_fx/canvasFx.ts"
  ],
  "runtime_system_container": [
    "lib/gameengin/systems/"
  ],
  "standalone_game_app_wrapper": [
    "components/engines/games/dream.GameEnginApp.tsx",
    "components/engines/games/index.ts",
    "components/engines/games/panels/dream.panel.BuilderPanel.tsx",
    "components/engines/games/panels/dream.panel.LibraryPanel.tsx"
  ],
  "playable_games_container": [
    "components/games/madmaxi/",
    "components/games/",
    "components/games/_fx/"
  ],
  "standalone_game_route": [
    "app/engines/games/builder/page.tsx",
    "app/engines/games/layout.tsx",
    "app/engines/games/library/page.tsx",
    "app/engines/games/page.tsx",
    "app/gameengin/page.tsx"
  ],
  "input_container": [
    "lib/gameengin/remote/"
  ],
  "standalone_route_container": [
    "app/engines/games/",
    "app/engines/games/builder/",
    "app/engines/games/library/",
    "app/engines/games/scores/"
  ]
} as const;

export type GameEnginWorkPacketEntry = (typeof GAMEENGIN_WORK_PACKET)[number];
export type GameEnginWiringTarget = keyof typeof GAMEENGIN_WORK_PACKET_BY_TARGET;

export function getGameEnginWorkPacketByTarget(target: GameEnginWiringTarget): readonly string[] {
  return GAMEENGIN_WORK_PACKET_BY_TARGET[target];
}

export function getGameEnginWorkPacketEntry(path: string): GameEnginWorkPacketEntry | undefined {
  return GAMEENGIN_WORK_PACKET.find((entry) => entry.path === path);
}

export { mapJoystickToAsset } from './controls/control-mappings';
export type { ControlMapping } from './controls/control-mappings';
export { ECSWorld, EliteGameEngine } from './core';
export { DreamEngine } from './dream-engine';
export type { GameAsset, GlobalRegistryEntry, WasmOutput } from './dream-engine';
export type {
    Component, EntityId, FrameCallback, FrameTelemetry, PerformanceBudget, QualityChangeCallback, QualityTier, System
} from './core';
export {
    activeGameCount,
    isLoopRunning, registerGame,
    unregisterGame
} from './unifiedLoop';
export type { LoopPriority } from './unifiedLoop';
export { useUnifiedLoop } from './useUnifiedLoop';
export { AIDirector } from './ai-director';
export type { DirectorState, PlayerSignals } from './ai-director';
export { PostFXManager } from './post-fx';
export { GameEnginPlatform, detectCapabilities } from './platform';
export type {
    PlatformBootOptions, PlatformCapabilities, QuickResumeEntry
} from './platform';
export { GRAVITY_VALUES } from './cartridge';
export type {
    CartridgeInputEvent, GameCartridge,
    GameEngineAPI,
    GravityPreset
} from './cartridge';
export { createReactGameCartridge, defineReactCartridgeLoader } from './cartridges/reactCartridge';
export { default as GameRuntime } from './GameRuntime';
export type { GameRuntimeProps } from './GameRuntime';
export {
    CARTRIDGE_MANIFEST, getCartridgeCategories, getCartridgeManifest
} from './cartridges/manifest';
export {
    assertCartridgeLoadersReady, getCartridgeIds, getMissingCartridgeLoaders, getOrphanCartridgeLoaders, loadCartridge,
} from './cartridges/loaders';
export type {
    CartridgeManifestEntry,
    CartridgeRenderMode
} from './cartridges/manifest';
export {
    AdvancedPhysicsWorld, AnimationStateMachine, AssetStreamManager, BehaviorTreeEngine, ClientSidePrediction, ComputeShaderPipeline, GPUProfiler, GlobalIllumProbes, LODSystem, OctreeBVH, PhysicsMaterialSystem, ProceduralWorldGen, ReplayBuffer, ResourcePool, RollbackNetcode, SpatialAudioDSP, TerrainEngine, TypedEventBus, WGSLShaderManager, WorkerJobSystem
} from './power-systems';
export type {
    AABB, AnimState, AnimTransition, AnimationClip, AssetHandle, AssetState, AssetType, AudioSourceDef, BTContext,
    BTNode, BTStatus, ComputeDispatch, ComputeKernel, EventMap, GIProbe, InputFrame, Job, JobPriority, JobResult, LODLevel,
    LODObject, ListenerState, MaterialPair, NetInput, PhysicsBody, PhysicsBodyDef, PhysicsBodyType, PhysicsConstraint, PhysicsMaterial, PredictionState, ProfileFrame, ProfileSpan, RaycastResult, ReplayMeta, RollbackConfig, SHCoeffs, ServerSnapshot,
    ShaderVariant, ShapeType, SpatialEntry, TerrainPage, WorldChunk, WorldGenConfig
} from './power-systems';
export { createGameEnginExecutionKernel } from './executionWiring';
export type {
  GameEnginExecutionCrash,
  GameEnginExecutionFrame,
  GameEnginExecutionKernel,
  GameEnginExecutionKernelSnapshot,
} from './executionWiring';
