'use client';

import { useMemo } from 'react';
import type { ContentAsset } from '@/engins/contentengin/assetTypes';
import RenderStage, { createInlineRenderIntent } from '@/engins/renderengin/RenderStage';

export default function AssetPreview3D({ asset, modelUrl }: { asset: ContentAsset | null; modelUrl?: string }) {
  const intent = useMemo(() => {
    if (!asset || !modelUrl) return null;
    return createInlineRenderIntent('ContentEngin', 'render.asset.preview', {
      assetId: asset.id,
      assetKind: 'glb',
      glbUrl: modelUrl,
      modelUrl,
      vertices: asset.validation.metrics.vertices,
      triangles: asset.validation.metrics.triangles,
      drawCalls: asset.validation.metrics.drawCalls,
      source: 'ContentEngin.AssetPreview3D',
    });
  }, [asset, modelUrl]);

  const runtimeId = 'render:contentengin:asset-preview';
  const persistenceKey = 'render:contentengin:asset-preview';

  return (
    <section className="ce-card ce-preview">
      <h2>RenderEngin GLB Preview</h2>
      <div className="ce-stage">
        {intent ? (
          <RenderStage intent={intent} runtimeId={runtimeId} persistenceKey={persistenceKey} />
        ) : (
          <p>Build an asset to load the exported GLB mesh through RenderEngin here.</p>
        )}
      </div>
      <p>
        {asset
          ? `${asset.id} · ${asset.validation.metrics.vertices} vertices · ${asset.validation.metrics.triangles} triangles · ${asset.validation.metrics.drawCalls} draw calls · RenderEngin visual runtime`
          : 'No asset built yet.'}
      </p>
    </section>
  );
}
