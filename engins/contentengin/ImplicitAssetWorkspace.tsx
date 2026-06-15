'use client';

import AssetViewport from '@/engins/contentengin/AssetViewport';
import { useImplicitAssetWorkspace } from '@/engins/contentengin/useImplicitAssetWorkspace';

export default function ImplicitAssetWorkspace({ onBack }: { onBack?: () => void }) {
  const ws = useImplicitAssetWorkspace();
  const data = ws.workspace.data;
  const mesh = data.mesh?.mesh ?? null;
  const canProcess = Boolean(data.sourceImage) && data.processingStatus !== 'processing';
  const canEdit = Boolean(mesh);
  const quality = data.mesh?.quality ?? null;

  const strictValid = Boolean(
    data.mesh?.diagnostics &&
    data.mesh.diagnostics.invalidIndices === 0 &&
    data.mesh.diagnostics.nonFiniteVertices === 0 &&
    data.mesh.diagnostics.triangles > 0
  );

  const canDownloadObj = Boolean(mesh) && strictValid && quality !== 'Export Blocked';

  const canDownloadGlb = Boolean(mesh) && strictValid && (
    quality === 'Clean' ||
    quality === 'Open Surface' ||
    quality === 'Auto-fix applied' ||
    quality === 'Too Heavy'
  );

  return <main className="asset-workspace"><style>{`
    .asset-workspace{min-height:100vh;background:linear-gradient(180deg,#eff6ff 0%,#ffffff 42%,#dbeafe 100%);color:#0f172a;display:grid;grid-template-rows:auto 1fr;font-family:var(--font-sans,system-ui);overflow:hidden}.toolbar{height:68px;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 14px;border-bottom:1px solid rgba(59,130,246,.22);background:rgba(255,255,255,.92);backdrop-filter:blur(16px);box-shadow:0 10px 30px rgba(59,130,246,.12)}.brand{display:flex;align-items:center;gap:10px;min-width:0}.brand h1{font-size:16px;margin:0;white-space:nowrap;color:#0f172a}.brand p{font-size:12px;color:#1d4ed8;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.back{border:1px solid rgba(245,158,11,.45);background:#fff7ed;color:#b45309}.actions{display:flex;align-items:center;gap:8px}.file{position:relative;overflow:hidden}.file input{position:absolute;inset:0;opacity:0}.actions button,.file{border:0;border-radius:999px;background:#f59e0b;color:#111827;font-weight:900;padding:10px 14px;min-height:44px;box-shadow:0 8px 20px rgba(245,158,11,.22)}.actions button:disabled{opacity:.42}.stage{position:relative;min-height:0;overflow:hidden}.viewport-shell{position:absolute;inset:0;border-top:1px solid rgba(255,255,255,.72)}.ce-viewport-canvas{touch-action:none}.edge{position:absolute;left:12px;top:12px;display:flex;gap:8px;z-index:2}.edge button,.download button,.tools button{min-height:44px;border:1px solid rgba(37,99,235,.22);background:rgba(255,255,255,.88);color:#1e3a8a;border-radius:999px;padding:9px 11px;font-weight:800;box-shadow:0 8px 22px rgba(37,99,235,.12)}.sculpt{position:absolute;left:12px;bottom:12px;right:12px;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px;border:1px solid rgba(37,99,235,.18);border-radius:18px;background:rgba(255,255,255,.88);backdrop-filter:blur(14px);box-shadow:0 18px 40px rgba(37,99,235,.16)}.tools{display:flex;gap:6px;flex-wrap:wrap}.tools button[data-active='true']{background:#f59e0b;color:#111827;border-color:rgba(245,158,11,.72)}.sliders{display:flex;align-items:center;gap:10px}.sliders label{font-size:12px;color:#1e3a8a;display:grid;gap:3px;font-weight:800}.sliders input{accent-color:#f59e0b;max-width:120px;min-height:36px}.quality{position:absolute;right:14px;top:82px;z-index:3;padding:10px 12px;border-radius:16px;background:rgba(255,255,255,.86);border:1px solid rgba(37,99,235,.18);font-weight:900;color:#1e3a8a}.download{position:absolute;right:14px;bottom:14px;z-index:4;display:flex;gap:8px}.hint{position:absolute;left:50%;bottom:86px;transform:translateX(-50%);z-index:2;color:#1e3a8a;background:rgba(255,255,255,.82);border:1px solid rgba(37,99,235,.16);border-radius:999px;padding:8px 12px;font-size:12px;font-weight:800}@media(max-width:760px){.toolbar{height:auto;align-items:flex-start;flex-direction:column}.actions{width:100%;overflow:auto}.actions button,.file{white-space:nowrap}.sculpt{align-items:flex-start;flex-direction:column}.sliders{width:100%;overflow:auto}.quality{top:122px}.hint{display:none}}
  `}</style>
    <section className="toolbar">
      <div className="brand">{onBack && <button className="back" onClick={onBack}>←</button>}<div><h1>ContentEngin 3D Asset Workspace</h1><p>{data.visibleMessage}</p></div></div>
      <div className="actions">
        <label className="file">Upload Image<input aria-label="Upload Image" type="file" accept="image/*" onChange={(e) => { const file = e.currentTarget.files?.[0]; if (file) void ws.uploadImage(file); }} /></label>
        <button disabled={!canProcess} onClick={ws.process}>{data.processingStatus === 'processing' ? 'Processing…' : 'Process'}</button>
        <button disabled={!canEdit} onClick={ws.startEdit}>{data.processingStatus === 'editing' ? 'Editing' : 'Edit'}</button>
        <button disabled={!canDownloadObj} onClick={() => ws.download('obj')}>Download OBJ</button><button disabled={!data.sourceImage && !mesh} onClick={ws.clearWorkspace}>Remove</button>
      </div>
    </section>
    <section className="stage">
      <div className="viewport-shell"><AssetViewport mesh={mesh} sourceUrl={data.sourceImage?.url} camera={data.cameraState} editMode={data.processingStatus === 'editing'} brushRadius={data.brushState.radius} onCamera={ws.setCamera} onSculpt={ws.applyBrushAt} onFrame={ws.resetView} /></div>
      <div className="edge"><button onClick={ws.resetView}>Frame Object</button><button onClick={ws.resetView}>Reset View</button><button onClick={() => ws.setCamera({ zoom: data.cameraState.zoom + .15 })}>Zoom In</button><button onClick={() => ws.setCamera({ zoom: data.cameraState.zoom - .15 })}>Zoom Out</button></div>
      <div className="quality">Mesh Quality: {data.mesh?.quality ?? 'Waiting'}</div>
      {data.processingStatus === 'editing' && <div className="sculpt"><div className="tools">{(['push','pull','smooth','inflate','carve','flatten'] as const).map((tool) => <button key={tool} data-active={data.activeTool === tool} onClick={() => ws.setTool(tool)}>{tool}</button>)}<button onClick={ws.undo}>Undo</button><button onClick={ws.redo}>Redo</button></div><div className="sliders"><label>Brush Radius<input type="range" min="0.05" max="0.6" step="0.01" value={data.brushState.radius} onChange={(e) => ws.setBrush({ radius: Number(e.currentTarget.value) })} /></label><label>Strength<input type="range" min="0.01" max="0.2" step="0.01" value={data.brushState.strength} onChange={(e) => ws.setBrush({ strength: Number(e.currentTarget.value) })} /></label></div></div>}
      <div className="download"><button disabled={!canDownloadGlb} onClick={() => ws.download('glb')}>.glb</button><button disabled={!canDownloadObj} onClick={() => ws.download('obj')}>.obj</button></div>
      <p className="hint">Touch: drag to sculpt in Edit · two fingers pan/zoom · double tap frames view</p>
    </section>
  </main>;
}
