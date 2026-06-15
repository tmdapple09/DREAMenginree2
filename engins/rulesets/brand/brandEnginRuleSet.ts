import {
    patchBaseState,
    type EnginBaseState,
    type JsonObject,
} from '@/engine/engin-runtime/EnginBaseState';
import type { EnginCapability } from '@/engine/engin-runtime/EnginCapabilities';
import { getEnginCapabilityProfile } from '@/engine/engin-runtime/EnginCapabilityTargets';
import type {
    ConstraintResult,
    EnginAction,
    EnginConstraint,
    EnginRuleSetContract,
    EnginRuleSetManifest,
    EnginRuleSetParams,
} from '@/engine/engin-runtime/EnginRuleSetContract';

/**
 * lib/engins/brand/brandEnginRuleSet.ts
 *
 * BrandingEngin Rule-Set — the ONLY place BrandingEngin domain logic lives.
 *
 * Domain: brand kit, analytics, A/B testing, campaign ROI, audience,
 * and cross-Engin campaign/audio brief handoffs.
 * Handoff kinds: brand:campaign-draft → ContentEngin, brand:audio-brief → StarMakerEngin.
 *
 * ZERO infrastructure here: no fetch, no Supabase, no localStorage.
 * The EnginRuntime handles all of that.
 *
 * Architecture: docs/AGENT_PLAYBOOK.md §1 — Foundation.Ruleset.
 */

export interface BrandProfile extends JsonObject {
  handle: string;
  displayName: string | null;
  followerCount: number;
}

export interface AnalyticMetric extends JsonObject {
  id: string;
  label: string;
  value: string;
  trend: 'up' | 'down' | 'flat';
}

export interface ABTest extends JsonObject {
  id: string;
  name: string;
  variantA: string;
  variantB: string;
  paused: boolean;
  winner?: 'A' | 'B';
}

export interface BrandAsset extends JsonObject {
  id: string;
  name: string;
  type: 'logo' | 'color' | 'font';
  value: string;
}

export interface BrandEnginDerivedState extends JsonObject {
  lifecycle: EnginBaseState['lifecycle'];
  profile: BrandProfile | null;
  metrics: AnalyticMetric[];
  abTests: ABTest[];
  assets: BrandAsset[];
  campaignDraftReady: boolean;
  audioBriefReady: boolean;
  brandCheckPayload: JsonObject | null;
}

export type BrandEnginAction =
  | EnginAction<'brand:profile-loaded',    { profile: BrandProfile }>
  | EnginAction<'brand:metrics-refresh',   { metrics: AnalyticMetric[] }>
  | EnginAction<'brand:ab-test-add',       { test: ABTest }>
  | EnginAction<'brand:ab-test-pause',     { testId: string; paused: boolean }>
  | EnginAction<'brand:ab-test-winner',    { testId: string; winner: 'A' | 'B' }>
  | EnginAction<'brand:asset-add',         { asset: BrandAsset }>
  | EnginAction<'brand:campaign-draft',    Record<string, never>>
  | EnginAction<'brand:audio-brief',       Record<string, never>>
  | EnginAction<'brand:check-received',    { payload: JsonObject }>;

const DEFAULT_METRICS: AnalyticMetric[] = [
  { id: 'reach',  label: 'Reach',           value: '—', trend: 'flat' },
  { id: 'eng',    label: 'Engagement Rate', value: '—', trend: 'flat' },
  { id: 'ctr',    label: 'Click-Through',   value: '—', trend: 'flat' },
  { id: 'growth', label: 'Follower Growth', value: '—', trend: 'flat' },
];

const DEFAULT_DOMAIN: Omit<BrandEnginDerivedState, 'lifecycle'> = {
  profile: null,
  metrics: DEFAULT_METRICS,
  abTests: [],
  assets: [],
  campaignDraftReady: false,
  audioBriefReady: false,
  brandCheckPayload: null,
};

const abTestAddConstraint: EnginConstraint<BrandEnginAction> = (
  _state,
  action,
): ConstraintResult => {
  if (action.type !== 'brand:ab-test-add') return { valid: true };
  const { test } = (action as EnginAction<'brand:ab-test-add', { test: ABTest }>).payload ?? {};
  if (!test || !test.name.trim()) {
    return { valid: false, reason: 'brand:ab-test-add requires a test with a non-empty name.' };
  }
  return { valid: true };
};

const winnerConstraint: EnginConstraint<BrandEnginAction> = (
  _state,
  action,
): ConstraintResult => {
  if (action.type !== 'brand:ab-test-winner') return { valid: true };
  const { winner } = (action as EnginAction<'brand:ab-test-winner', { testId: string; winner: 'A' | 'B' }>).payload ?? {};
  if (winner !== 'A' && winner !== 'B') {
    return { valid: false, reason: 'Winner must be "A" or "B".' };
  }
  return { valid: true };
};

function transform(state: EnginBaseState, action: BrandEnginAction): EnginBaseState {
  const domain = (state.domain as Partial<typeof DEFAULT_DOMAIN>);
  const tests  = () => (domain.abTests ?? []) as ABTest[];

  switch (action.type) {
    case 'brand:profile-loaded': {
      const { profile } = (action as EnginAction<'brand:profile-loaded', { profile: BrandProfile }>).payload!;
      return patchBaseState(state, { domain: { ...domain, profile } });
    }

    case 'brand:metrics-refresh': {
      const { metrics } = (action as EnginAction<'brand:metrics-refresh', { metrics: AnalyticMetric[] }>).payload!;
      return patchBaseState(state, { domain: { ...domain, metrics } });
    }

    case 'brand:ab-test-add': {
      const { test } = (action as EnginAction<'brand:ab-test-add', { test: ABTest }>).payload!;
      return patchBaseState(state, { domain: { ...domain, abTests: [test, ...tests()] } });
    }

    case 'brand:ab-test-pause': {
      const { testId, paused } = (action as EnginAction<'brand:ab-test-pause', { testId: string; paused: boolean }>).payload!;
      return patchBaseState(state, {
        domain: {
          ...domain,
          abTests: tests().map((t) => t.id === testId ? { ...t, paused } : t),
        },
      });
    }

    case 'brand:ab-test-winner': {
      const { testId, winner } = (action as EnginAction<'brand:ab-test-winner', { testId: string; winner: 'A' | 'B' }>).payload!;
      return patchBaseState(state, {
        domain: {
          ...domain,
          abTests: tests().map((t) => t.id === testId ? { ...t, winner } : t),
        },
      });
    }

    case 'brand:asset-add': {
      const { asset } = (action as EnginAction<'brand:asset-add', { asset: BrandAsset }>).payload!;
      const current = (domain.assets ?? []) as BrandAsset[];
      return patchBaseState(state, { domain: { ...domain, assets: [...current, asset] } });
    }

    case 'brand:campaign-draft': {
      return patchBaseState(state, { domain: { ...domain, campaignDraftReady: true } });
    }

    case 'brand:audio-brief': {
      return patchBaseState(state, { domain: { ...domain, audioBriefReady: true } });
    }

    case 'brand:check-received': {
      const { payload } = (action as EnginAction<'brand:check-received', { payload: JsonObject }>).payload!;
      return patchBaseState(state, { domain: { ...domain, brandCheckPayload: payload } });
    }

    default:
      return state;
  }
}

function deriveState(state: EnginBaseState): BrandEnginDerivedState {
  const d = state.domain as Partial<typeof DEFAULT_DOMAIN>;
  return {
    lifecycle:          state.lifecycle,
    profile:            (d.profile            ?? DEFAULT_DOMAIN.profile)            as BrandProfile | null,
    metrics:            (d.metrics            ?? DEFAULT_DOMAIN.metrics)            as AnalyticMetric[],
    abTests:            (d.abTests            ?? DEFAULT_DOMAIN.abTests)            as ABTest[],
    assets:             (d.assets             ?? DEFAULT_DOMAIN.assets)             as BrandAsset[],
    campaignDraftReady: (d.campaignDraftReady ?? DEFAULT_DOMAIN.campaignDraftReady) as boolean,
    audioBriefReady:    (d.audioBriefReady    ?? DEFAULT_DOMAIN.audioBriefReady)    as boolean,
    brandCheckPayload:  (d.brandCheckPayload  ?? DEFAULT_DOMAIN.brandCheckPayload)  as JsonObject | null,
  };
}

const PARAMS: EnginRuleSetParams = {
  enginId: 'brand',
  name: 'BrandingEngin',
  layoutMode: 'standard',
  accentColor: '#ec4899',
};

const MANIFEST: EnginRuleSetManifest<BrandEnginAction> = {
  id: PARAMS.enginId,
  name: PARAMS.name,
  version: '1.0.0',
  schema: {
    actionTypes: ['brand:profile-loaded', 'brand:metrics-refresh', 'brand:ab-test-add', 'brand:ab-test-pause', 'brand:ab-test-winner', 'brand:asset-add', 'brand:campaign-draft', 'brand:audio-brief', 'brand:check-received'],
    domainVersion: 1,
  },
  compatibility: {
    minRuntimeVersion: '1.0.0',
    requiredFeatures: ['lifecycle-hooks', 'manifest-schema', 'strict-intent-routing', 'sync-transport', 'state-snapshotting', 'compatibility-negotiation'],
  },
};

const REQUIRED_CAPABILITIES: ReadonlyArray<EnginCapability> = [
  'state:read',
  'state:write',
  'scores:read',
  'assets:load',
  'bridge:emit',
  'bridge:listen',
];

export const BRAND_ENGIN_RULE_SET: EnginRuleSetContract<BrandEnginAction> = {
  manifest: MANIFEST,
  params: PARAMS,
  requiredCapabilities: REQUIRED_CAPABILITIES,
  capabilityTargets: getEnginCapabilityProfile('brand'),
  constraints: [abTestAddConstraint, winnerConstraint],
  transform,
  deriveState,
};
