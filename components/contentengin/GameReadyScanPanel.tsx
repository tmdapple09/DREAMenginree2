'use client';

import type { GameReadyBuildSummary } from '@/engins/contentengin/scan/gameReadyMeshBuilder';
import type { IntrinsicAssetScanReport } from '@/engins/contentengin/scan/intrinsicAssetScanner';

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
        <code>{scan.similaritySignature}</code>
      </header>
      <div className="scan-grid">
        <span><b>{topology.triangles}</b> triangles</span>
        <span><b>{topology.connectedComponents}</b> components</span>
        <span><b>{topology.boundaryLoops}</b> boundary loops</span>
        <span><b>{topology.nonManifoldEdges}</b> non-manifold</span>
      </div>
      <p>{issue}</p>
      <div className="scan-families">
        {(Object.keys(scan.families) as Array<keyof typeof scan.families>).map((name) => {
          const family = scan.families[name];
          return (
          <span key={name} title={`${name} tesseract energy`}>
            {name.replaceAll('-', ' ')} <b>{family.energy.toFixed(2)}</b>
          </span>
          );
        })}
      </div>
      {build && (
        <footer>
          {build.lods.map((lod) => <span key={lod.level}>LOD{lod.level}: {lod.triangles.toLocaleString()}</span>)}
          <span>repair: {build.repairStrategy}</span>
          <span>collision: {build.collision.kind}</span>
        </footer>
      )}
    </aside>
  );
}
