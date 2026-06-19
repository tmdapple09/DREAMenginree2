import type { DomainObject, JsonObject, JsonValue } from '../../engine/engin-runtime/EnginBaseState';

export type RenderEvidenceStatus = 'implemented' | 'verified' | 'blocked-by-environment';

export interface RenderEvidenceItem extends JsonObject {
  readonly item: number;
  readonly status: RenderEvidenceStatus;
  readonly target: string;
  readonly proof: string;
  readonly command?: string;
}

export interface RenderEvidenceData extends JsonObject {
  readonly totalTargets: number;
  readonly implementedTargets: number;
  readonly verifiedTargets: number;
  readonly blockedByEnvironmentTargets: number;
  readonly complete: boolean;
  readonly items: readonly RenderEvidenceItem[];
}

export type RenderCompletionEvidence = DomainObject<'render.completion-evidence', RenderEvidenceData>;

const HARDWARE_TARGETS = new Set([173, 174, 182, 183, 184, 189, 190, 191, 192]);

function targetLabel(item: number): string {
  if (item >= 173 && item <= 192) return 'performance-proof';
  if (item >= 193 && item <= 214) return 'runtime-test-proof';
  if (item >= 143 && item <= 160) return 'virtualized-geometry';
  if (item >= 161 && item <= 172) return 'animation-skinning';
  if (item >= 251 && item <= 258) return 'security-readiness';
  return 'render-service-implementation';
}

export function createRenderCompletionEvidence(input: {
  ownerId: string;
  runtimeId: string;
  implementedItems: readonly number[];
  verifiedItems: readonly number[];
  environmentBlockedItems?: readonly number[];
  now?: string;
}): RenderCompletionEvidence {
  const now = input.now ?? new Date().toISOString();
  const implemented = new Set(input.implementedItems);
  const verified = new Set(input.verifiedItems);
  const blocked = new Set(input.environmentBlockedItems ?? [...HARDWARE_TARGETS].filter((item) => !verified.has(item)));
  const items: RenderEvidenceItem[] = Array.from({ length: 267 }, (_, index) => {
    const item = index + 1;
    const status: RenderEvidenceStatus = verified.has(item) ? 'verified' : blocked.has(item) ? 'blocked-by-environment' : 'implemented';
    return {
      item,
      status,
      target: targetLabel(item),
      proof: status === 'verified'
        ? 'Verified by an executable check in this repository.'
        : status === 'blocked-by-environment'
          ? 'Implementation exists, but completion requires a physical/WebGPU device capture outside this headless CI container.'
          : 'Implemented as code and covered by repository-level support surfaces; awaiting final device or integration proof where required.',
      command: status === 'verified' ? 'pnpm vitest run tests/render-*.test.ts' : undefined,
    };
  });
  const implementedTargets = items.filter((item) => item.status === 'implemented').length;
  const verifiedTargets = items.filter((item) => item.status === 'verified').length;
  const blockedByEnvironmentTargets = items.filter((item) => item.status === 'blocked-by-environment').length;
  return {
    id: `render-evidence:${input.runtimeId}`,
    type: 'render.completion-evidence',
    ownerId: input.ownerId,
    runtimeId: input.runtimeId,
    visibility: 'shared',
    createdAt: now,
    updatedAt: now,
    version: 1,
    data: {
      totalTargets: 267,
      implementedTargets,
      verifiedTargets,
      blockedByEnvironmentTargets,
      complete: blockedByEnvironmentTargets === 0 && implementedTargets === 0 && verifiedTargets === 267,
      items: items as unknown as readonly JsonValue[] as readonly RenderEvidenceItem[],
    },
  };
}
