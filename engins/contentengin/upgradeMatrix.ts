import type { ExportProfile } from './assetTypes';

export type ContentEnginUpgradeId =
  | 'webgpu-first-rendering'
  | 'mobile-desktop-parity'
  | 'adaptive-lod-streaming'
  | 'intent-routed-generation'
  | 'local-first-snapshots'
  | 'meshopt-ready-exports'
  | 'material-budget-guardrails'
  | 'safe-user-facing-audits'
  | 'background-artifact-generation'
  | 'progressive-viewport-scheduling';

export interface ContentEnginUpgrade {
  id: ContentEnginUpgradeId;
  title: string;
  userBenefit: string;
  runtimeHook: 'render' | 'validation' | 'intent' | 'sync' | 'export' | 'audit';
  mobileFirst: true;
  safeForUsers: true;
}

export const CONTENTENGIN_2026_UPGRADES: readonly ContentEnginUpgrade[] = [
  { id: 'webgpu-first-rendering', title: 'WebGPU-first preview path', userBenefit: 'Uses the fastest available renderer before falling back safely.', runtimeHook: 'render', mobileFirst: true, safeForUsers: true },
  { id: 'mobile-desktop-parity', title: 'Desktop-class mobile parity', userBenefit: 'Keeps mobile exports visually comparable to desktop outputs.', runtimeHook: 'validation', mobileFirst: true, safeForUsers: true },
  { id: 'adaptive-lod-streaming', title: 'Adaptive LOD streaming', userBenefit: 'Shows responsive previews first and raises quality when the device can handle it.', runtimeHook: 'render', mobileFirst: true, safeForUsers: true },
  { id: 'intent-routed-generation', title: 'Intent-routed generation', userBenefit: 'Keeps creation actions predictable without exposing admin controls.', runtimeHook: 'intent', mobileFirst: true, safeForUsers: true },
  { id: 'local-first-snapshots', title: 'Local-first snapshots', userBenefit: 'Preserves work-in-progress state without coupling UI to persistence.', runtimeHook: 'sync', mobileFirst: true, safeForUsers: true },
  { id: 'meshopt-ready-exports', title: 'Mesh compression ready exports', userBenefit: 'Prepares assets for smaller downloads and smoother runtime loading.', runtimeHook: 'export', mobileFirst: true, safeForUsers: true },
  { id: 'material-budget-guardrails', title: 'Material budget guardrails', userBenefit: 'Warns before assets become too heavy for phones.', runtimeHook: 'validation', mobileFirst: true, safeForUsers: true },
  { id: 'safe-user-facing-audits', title: 'Safe user-facing readiness checks', userBenefit: 'Repurposes audit thinking as helpful creator guidance, not admin power.', runtimeHook: 'audit', mobileFirst: true, safeForUsers: true },
  { id: 'background-artifact-generation', title: 'Background artifact generation', userBenefit: 'Generates heavy test exports after push instead of committing binaries.', runtimeHook: 'export', mobileFirst: true, safeForUsers: true },
  { id: 'progressive-viewport-scheduling', title: 'Progressive viewport scheduling', userBenefit: 'Pauses expensive preview work when the surface is not visible.', runtimeHook: 'render', mobileFirst: true, safeForUsers: true },
] as const;

export function enabledUpgradeIds(_profile: ExportProfile): ContentEnginUpgradeId[] {
  return CONTENTENGIN_2026_UPGRADES.map((upgrade) => upgrade.id);
}
