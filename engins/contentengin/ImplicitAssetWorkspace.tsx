'use client';

import AssetViewport from '@/engins/contentengin/AssetViewport';
import { useImplicitAssetWorkspace } from '@/engins/contentengin/useImplicitAssetWorkspace';

export default function ImplicitAssetWorkspace({ onBack }: { onBack?: () => void }) {
  const ws = useImplicitAssetWorkspace();
  const data = ws.workspace.data;
  const mesh = data.mesh?.mesh ?? null;
  const canProcess = Boolean(data.sourceImage) && data.processingStatus !== 'processing';
  const canEdit = Boolean(mesh);
  const canDownload = Boolean(mesh) && data.mesh?.quality !== 'Export Blocked';

  return <main className="asset-workspace"><style>{`
    .asset-workspace{min-height:100vh;background:#030712;color:#f8fafc;display:grid;grid-template-rows:auto 1fr;font-family:var(--font-sans,system-ui);overflow:hidden}.toolbar{height:68px;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.12);background:rgba(2,6,23,.92);backdrop-filter:blur(16px)}.brand{display:flex;align-items:center;gap:10px;min-width:0}.brand h1{font-size:16px;margin:0;white-space:nowrap}.brand p{font-size:12px;color:#fde68a;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.back{border:1px solid rgba(245,158,11,.45);background:transparent;color:#fbbf24}.actions{display:flex;align-items:center;gap:8px}.file{position:relative;overflow:hidden}.file input{position:absolute;inset:0;opacity:0}.actions button,.file{border:0;border-radius:999px;background:#f59e0b;color:#111827;font-weight:900;padding:10px 14px;min-height:42px}.actions button:disabled{opacity:.42}.stage{position:relative;min-height:0}.viewport-shell{position:absolute;inset:0}.edge{position:absolute;left:12px;top:12px;display:flex;gap:8px;z-index:2}.edge button,.download button{border:1px solid rgba(255,255,255,.16);background:rgba(15,23,42,.76);color:#fff;border-radius:999px;padding:9px 11px}.sculpt{position:absolute;left:12px;bottom:12px;right:12px;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px;border:1px solid rgba(255,255,255,.12);border-radius:18px;background:rgba(2,6,23,.82);backdrop-filter:blur(14px)}.tools{display:flex;gap:6px;flex-wrap:wrap}.tools button[data-active='true']{background:#f59e0b;color:#111827}.sliders{display:flex;align-items:center;gap:10px}.sliders label{font-size:12px;color:#cbd5e1;display:grid;gap:3px}.sliders input{accent-color:#f59e0b;max-width:120px}.quality{position:absolute;right:14px;top:82px;z-index:3;padding:10px 12px;border-radius:16px;background:rgba(2,6,23,.74);border:1px solid rgba(255,255,255,.12);font-weight:800}.download{position:absolute;right:14px;bottom:14px;z-index:4;display:flex;gap:8px}.hint{position:absolute;left:50%;bottom:86px;transform:translateX(-50%);z-index:2;color:#cbd5e1;background:rgba(2,6,23,.6);border-radius:999px;padding:8px 12px;font-size:12px}@media(max-width:760px){.toolbar{height:auto;align-items:flex-start;flex-direction:column}.actions{width:100%;overflow:auto}.actions button,.file{white-space:nowrap}.sculpt{align-items:flex-start;flex-direction:column}.sliders{width:100%;overflow:auto}.quality{top:122px}.hint{display:none}}
  `}</style>
    <section className="toolbar">
      <div className="brand">{onBack && <button className="back" onClick={onBack}>←</button>}<div><h1>ContentEngin 3D Asset Workspace</h1><p>{data.visibleMessage}</p></div></div>
      <div className="actions">
        <label className="file">Upload Image<input aria-label="Upload Image" type="file" accept="image/*" onChange={(e) => { const file = e.currentTarget.files?.[0]; if (file) void ws.uploadImage(file); }} /></label>
        <button disabled={!canProcess} onClick={ws.process}>{data.processingStatus === 'processing' ? 'Processing…' : 'Process'}</button>
        <button disabled={!canEdit} onClick={ws.startEdit}>Edit</button>
        <button disabled={!canDownload} onClick={() => ws.download('obj')}>Download OBJ</button>
      </div>
    </section>
    <section className="stage">
      <div className="viewport-shell"><AssetViewport mesh={mesh} sourceUrl={data.sourceImage?.url} camera={data.cameraState} editMode={data.processingStatus === 'editing'} onCamera={ws.setCamera} onSculpt={ws.applyBrushAt} /></div>
      <div className="edge"><button onClick={ws.resetView}>Frame Object</button><button onClick={ws.resetView}>Reset View</button><button onClick={() => ws.setCamera({ zoom: data.cameraState.zoom + .15 })}>Zoom In</button><button onClick={() => ws.setCamera({ zoom: data.cameraState.zoom - .15 })}>Zoom Out</button></div>
      <div className="quality">Mesh Quality: {data.mesh?.quality ?? 'Waiting'}</div>
      {data.processingStatus === 'editing' && <div className="sculpt"><div className="tools">{(['push','pull','smooth','inflate','carve','flatten'] as const).map((tool) => <button key={tool} data-active={data.activeTool === tool} onClick={() => ws.setTool(tool)}>{tool}</button>)}<button onClick={ws.undo}>Undo</button><button onClick={ws.redo}>Redo</button></div><div className="sliders"><label>Brush Radius<input type="range" min="0.05" max="0.6" step="0.01" value={data.brushState.radius} onChange={(e) => ws.setBrush({ radius: Number(e.currentTarget.value) })} /></label><label>Strength<input type="range" min="0.01" max="0.2" step="0.01" value={data.brushState.strength} onChange={(e) => ws.setBrush({ strength: Number(e.currentTarget.value) })} /></label></div></div>}
      <div className="download"><button disabled={!canDownload} onClick={() => ws.download('glb')}>.glb</button><button disabled={!canDownload} onClick={() => ws.download('obj')}>.obj</button></div>
      <p className="hint">Orbit drag · Alt-drag pan · wheel zoom · Edit + Shift-drag sculpt</p>
    </section>
  </main>;
}
