'use client';

import type { GameReadyBuildSummary } from '@/engins/contentengin/scan/gameReadyMeshBuilder';
import type { IntrinsicAssetScanReport } from '@/engins/contentengin/scan/intrinsicAssetScanner';

function shortDigest(value: string): string {
  return value.replace(/^sha256-/, '').slice(0, 16);
}

export default function GameReadyScanPanel({
  scan,
  build,
}: {
  scan: IntrinsicAssetScanReport | null;
  build: GameReadyBuildSummary | null;
}) {
  if (!scan) {
    return (
      <aside className="scan-panel" aria-live="polite">
        <strong>Game-ready scan</strong>
        <span>Upload or create a mesh to scan topology, neighborhoods, similarity fields, and runtime budgets.</span>
      </aside>
    );
  }

  const topology = scan.topology;
  const issue = scan.criticalIssues[0] ?? scan.warnings[0] ?? 'No blocking geometry issue detected.';
  return (
    <aside className="scan-panel" aria-live="polite" data-ready={scan.gameReady}>
      <header>
        <strong>{scan.gameReady ? 'Game-ready' : 'Needs work'} · {scan.score}/100</strong>
        <code title={scan.canonicalSimilaritySignature}>canonical {shortDigest(scan.canonicalSimilaritySignature)}</code>
        <code title={scan.orientedSimilaritySignature}>oriented {shortDigest(scan.orientedSimilaritySignature)}</code>
      </header>
      <div className="scan-grid">
        <span><b>{topology.triangles}</b> triangles</span>
        <span><b>{topology.connectedComponents}</b> components</span>
        <span><b>{topology.boundaryLoops}</b> boundary loops</span>
        <span><b>{topology.nonManifoldEdges}</b> non-manifold</span>
        <span><b>{topology.duplicateFaces}</b> duplicate faces</span>
        <span><b>{topology.inconsistentWindingEdges}</b> winding errors</span>
        <span><b>{topology.selfIntersections}</b> intersections</span>
        <span><b>{topology.pivotOffsetRatio.toFixed(3)}</b> pivot offset</span>
      </div>
      <p>{issue}</p>
      <div className="scan-families">
        {(Object.keys(scan.canonicalFamilies) as Array<keyof typeof scan.canonicalFamilies>).map((name) => {
          const family = scan.canonicalFamilies[name];
          return (
            <span key={name} title={`${name} canonical tesseract energy`}>
              {name.replaceAll('-', ' ')} <b>{family.energy.toFixed(2)}</b>
            </span>
          );
        })}
      </div>
      {build && (
        <footer>
          {build.lods.map((lod) => (
            <span key={lod.level}>LOD{lod.level}: {lod.triangles.toLocaleString()} · {(lod.canonicalSimilarityToLod0 * 100).toFixed(1)}%</span>
          ))}
          <span>repair: {build.repairStrategy}</span>
          <span>residual: {build.topologyRepair.residualRepairIds.length}</span>
          <span>collision: {build.collision.kind}</span>
        </footer>
      )}
    </aside>
  );
}
