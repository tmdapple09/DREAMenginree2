import type { IDARiAgent } from "@/types/ai";










export const IDARI_EVENT = "dreamengin:idari";

export type IDARiAction = "debug" | "inspect" | "override" | "audit";

export interface IDARiRequest {
  action: IDARiAction;
  target_widget_id?: string;
  payload?: Record<string, unknown>;
}

export interface IDARiResult {
  action: IDARiAction;
  status: "ok" | "warning" | "error";
  message: string;
  details?: Record<string, unknown>;
}





export type PatchRisk = "low" | "medium" | "high" | "critical";

export interface PatchStep {
  
  file: string;
  
  diff: string;
}

export interface PatchPlan {
  id: string;
  
  title: string;
  
  cause: string;
  
  impact: string;
  
  fix: string;
  
  verification: string;
  
  steps: PatchStep[];
  
  risk: PatchRisk;
  
  rollback?: string;
  created_at: string;
}


export function createPatchPlan(
  plan: Omit<PatchPlan, "created_at">
): PatchPlan {
  if ((plan.risk === "high" || plan.risk === "critical") && !plan.rollback) {
    throw new Error(
      `IDARi: PatchPlan "${plan.title}" has risk="${plan.risk}" but is missing rollback steps (req #13).`
    );
  }
  return { ...plan, created_at: new Date().toISOString() };
}




export type GenerationLawMode = "CREATE" | "CONFORM" | "PATCH_ONLY";

export interface GenerationLawAssessment {
  score: number;
  mode: GenerationLawMode;
  task_count: number;
  file_count: number;
  dependency_schema_count: number;
  vague_term_count: number;
  core_architecture_hit: boolean;
  structural_change_risk: boolean;
}

export const GENERATION_LAW_WEIGHTS = {
  w1_task: 2.0,
  w2_file: 0.5,
  w3_dependency_db: 4.0,
  w4_architecture: 3.0,
  w5_ambiguity: 1.5,
} as const;

const TASK_PATTERNS = [
  /\b(add|build|change|create|delete|emit|enforce|fix|generate|implement|improve|introduce|modify|move|optimi[sz]e|patch|propose|refactor|remove|rename|replace|update|wire)\b/gi,
  /\b(and|then)\b/gi,
] as const;

const FILE_PATTERNS = [
  /\b[a-z0-9_./-]+\.[a-z0-9]+\b/gi,
  /\b(app|components|lib|types|utils|tests|scripts|supabase)\/[a-z0-9_./-]+\b/gi,
] as const;

const DEPENDENCY_SCHEMA_PATTERN =
  /\b(database|dependency|dependencies|deps|install|migration|package|pnpm|npm|schema|schemas|supabase|table|tables|column|columns|rls|policy|policies|rpc)\b/gi;

const CORE_ARCHITECTURE_PATTERN = /\b(DreamDMBar|DreamDM Bar|HomeSystem|RLS)\b/i;

const VAGUE_TERMS_PATTERN =
  /\b(around|etc|eventually|kind of|maybe|possibly|roughly|some|somehow|something|stuff|things|whatever)\b/gi;

function countMatches(source: string, pattern: RegExp): number {
  const matches = source.match(pattern);
  return matches ? matches.length : 0;
}

function countUniqueMatches(source: string, pattern: RegExp): number {
  const matches = source.match(pattern);
  return matches ? new Set(matches.map((match) => match.toLowerCase())).size : 0;
}

export function assessGenerationLawScope(message: string): GenerationLawAssessment {
  const source = message.trim();
  const task_count = Math.max(
    1,
    TASK_PATTERNS.reduce((total, pattern) => total + countMatches(source, pattern), 0),
  );
  const file_count = Math.max(
    0,
    FILE_PATTERNS.reduce((max, pattern) => Math.max(max, countUniqueMatches(source, pattern)), 0),
  );
  const dependency_schema_count = countUniqueMatches(source, DEPENDENCY_SCHEMA_PATTERN);
  const vague_term_count = countMatches(source, VAGUE_TERMS_PATTERN);
  const core_architecture_hit = CORE_ARCHITECTURE_PATTERN.test(source);

  const score =
    (GENERATION_LAW_WEIGHTS.w1_task * task_count) +
    (GENERATION_LAW_WEIGHTS.w2_file * file_count) +
    (GENERATION_LAW_WEIGHTS.w3_dependency_db * dependency_schema_count) +
    (GENERATION_LAW_WEIGHTS.w4_architecture * (core_architecture_hit ? 1 : 0)) +
    (GENERATION_LAW_WEIGHTS.w5_ambiguity * vague_term_count);

  const mode: GenerationLawMode =
    score < 4
      ? "CREATE"
      : score < 8
        ? "CONFORM"
        : "PATCH_ONLY";

  return {
    score,
    mode,
    task_count,
    file_count,
    dependency_schema_count,
    vague_term_count,
    core_architecture_hit,
    structural_change_risk:
      file_count > 1 ||
      dependency_schema_count > 0 ||
      core_architecture_hit ||
      task_count > 1,
  };
}

export function formatGenerationLawLoadCheck(
  assessment: Pick<GenerationLawAssessment, "score" | "mode">,
): string {
  return `LOAD_CHECK: ${assessment.score.toFixed(1)} | MODE: ${assessment.mode}`;
}





export type KnownIssueStatus = "open" | "in_progress" | "resolved" | "wont_fix";

export interface KnownIssue {
  id: string;
  title: string;
  description: string;
  status: KnownIssueStatus;
  risk: PatchRisk;
  
  patch_plan_id?: string;
  created_at: string;
  updated_at: string;
}


export function createKnownIssue(
  issue: Omit<KnownIssue, "status" | "created_at" | "updated_at">
): KnownIssue {
  const now = new Date().toISOString();
  return { ...issue, status: "open", created_at: now, updated_at: now };
}


export function updateKnownIssueStatus(
  issue: KnownIssue,
  status: KnownIssueStatus,
  patch_plan_id?: string
): KnownIssue {
  return {
    ...issue,
    status,
    patch_plan_id: patch_plan_id ?? issue.patch_plan_id,
    updated_at: new Date().toISOString(),
  };
}



export function createIDARiAgent(widgetId?: string): IDARiAgent {
  return {
    id: "idari-core",
    tier: "idari",
    roles: ["debugger", "overseer"],
    name: "IDARi",
    description: "Admin AI — Debugger / Overseer",
    widget_id: widgetId,
    is_active: true,
  };
}

export function emitIDARiEvent(detail: IDARiResult ){
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<IDARiResult>(IDARI_EVENT, { detail })
  );
}

export function onIDARiEvent(
  handler: (detail: IDARiResult) => void
): () => void {
  if (typeof window === "undefined") return () => {};
  const listener = (evt: Event) => {
    const ce = evt as CustomEvent<IDARiResult>;
    if (!ce.detail) return;
    handler(ce.detail);
  };
  window.addEventListener(IDARI_EVENT, listener);
  return () => window.removeEventListener(IDARI_EVENT, listener);
}






export type SpecRequirementStatus = "met" | "partial" | "missing";


export interface SpecRequirement {
  
  id: string;
  
  area: string;
  
  description: string;
  
  status: SpecRequirementStatus;
  
  notes?: string;
}


export interface SpecCheckResult {
  timestamp: string;
  
  spec_version: string;
  requirements: SpecRequirement[];
  overall: "pass" | "warn" | "fail";
  unmet_count: number;
  partial_count: number;
}


export function evaluateSpecRequirements(
  specVersion: string,
  requirements: SpecRequirement[]
): SpecCheckResult {
  const unmetCount = requirements.filter((r) => r.status === "missing").length;
  const partialCount = requirements.filter((r) => r.status === "partial").length;
  const overall: SpecCheckResult["overall"] =
    unmetCount > 0 ? "fail" : partialCount > 0 ? "warn" : "pass";

  return {
    timestamp: new Date().toISOString(),
    spec_version: specVersion,
    requirements,
    overall,
    unmet_count: unmetCount,
    partial_count: partialCount,
  };
}







export const VERCEL_2026_RUNTIME = {
  node: "24",
  pnpm: "10.30.0",
  nextjs_minimum: "16",
} as const;


export interface VercelBuildResult {
  timestamp: string;
  
  node_version: string;
  
  pnpm_version: string;
  
  nextjs_version: string;
  
  build_passed: boolean;
  
  route_count?: number;
  
  error_summary?: string;
}


export function createVercelBuildResult(
  result: Omit<VercelBuildResult, "timestamp">
): VercelBuildResult {
  const nodeMajor = parseInt(result.node_version.split(".")[0], 10);
  const requiredNode = parseInt(VERCEL_2026_RUNTIME.node, 10);
  if (nodeMajor < requiredNode) {
    throw new Error(
      `IDARi VercelBuildResult: Node ${result.node_version} is below the 2026 ` +
        `minimum of Node ${VERCEL_2026_RUNTIME.node} (docs/ARCHITECTURE.md §10).`
    );
  }
  return { ...result, timestamp: new Date().toISOString() };
}
