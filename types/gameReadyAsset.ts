export type GameReadyRepairId =
  | 'remove-invalid-triangles'
  | 'remove-degenerate-triangles'
  | 'weld-duplicate-vertices'
  | 'remove-isolated-vertices'
  | 'keep-largest-component'
  | 'close-boundary-loops'
  | 'split-non-manifold-edges'
  | 'reduce-skinny-triangles'
  | 'reduce-triangle-budget';

export interface GameReadyAssetCertificate {
  readonly version: 1;
  readonly scannerVersion: string;
  readonly gameReady: boolean;
  readonly score: number;
  readonly signature: string;
  readonly topologyClosed: boolean;
  readonly triangleBudget: number;
  readonly estimatedBytes: number;
  readonly criticalIssueCount: number;
  readonly warningCount: number;
  readonly requiredRepairIds: readonly GameReadyRepairId[];
}
