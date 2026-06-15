'use client';

import { useCallback, useMemo, useState } from 'react';
import { useContentEnginRuntime } from '@/engins/rulesets/content/useContentEnginRuntime';
import { createImplicitAssetWorkspaceObject, DEFAULT_BRUSH_STATE, DEFAULT_CAMERA_STATE, exportGLB, exportOBJ, meshToSnapshot, processImageToEditableMesh, qualityFromDiagnostics, repairMesh, sculptMesh, validateMesh, type BrushState, type CameraState, type EditableMeshState, type ExportFormat, type ImplicitAssetWorkspaceObject, type SculptTool, type SourceImageAsset, analyzeImageMask } from '@/engins/isosurfaceAssetPipeline';
import type { Vec3 } from '@/engins/isosurfaceDualContouring';

export interface WorkspaceIntentLog { type: string; at: string; }

export function useImplicitAssetWorkspace(ownerId = 'local-user', runtimeId = 'contentengin-runtime') {
  const { dispatch } = useContentEnginRuntime({ useMemoryAdapter: true });
  const [workspace, setWorkspace] = useState<ImplicitAssetWorkspaceObject>(() => createImplicitAssetWorkspaceObject(ownerId, runtimeId));
  const [intents, setIntents] = useState<WorkspaceIntentLog[]>([]);
  const emit = useCallback((type: string, payload: Record<string, unknown> = {}) => {
    dispatch({ type: type as never, payload: payload as never });
    setIntents((prev) => [{ type, at: new Date().toISOString() }, ...prev].slice(0, 8));
  }, [dispatch]);
  const updateData = useCallback((patch: Partial<ImplicitAssetWorkspaceObject['data']>) => {
    setWorkspace((current) => ({ ...current, updatedAt: new Date().toISOString(), version: current.version + 1, data: { ...current.data, ...patch } }));
  }, []);

  const uploadImage = useCallback(async (file: File) => {
    emit('contentengin:image-uploaded', { fileName: file.name });
    const url = URL.createObjectURL(file);
    const image = await fileToImageData(file);
    const sourceImage = analyzeImageMask(image, file.name, url);
    updateData({ sourceImage, processingStatus: 'uploaded', visibleMessage: 'Image loaded. Press Process to make it 3D.' });
  }, [emit, updateData]);

  const process = useCallback(() => {
    if (!workspace.data.sourceImage) return;
    emit('contentengin:asset-process-requested', { sourceName: workspace.data.sourceImage.name });
    updateData({ processingStatus: 'processing', visibleMessage: 'Shaping your image into a 3D asset…' });
    window.setTimeout(() => {
      const editable = processImageToEditableMesh(workspace.data.sourceImage as SourceImageAsset);
      updateData({ mesh: editable, previewMesh: meshToSnapshot(editable.mesh, editable.diagnostics), editHistory: [], redoStack: [], processingStatus: editable.quality === 'Export Blocked' ? 'generated' : 'ready-to-download', visibleMessage: editable.quality === 'Export Blocked' ? 'Mesh Quality: Export Blocked. Try Smooth or Lower Detail.' : `Mesh Quality: ${editable.quality}. Ready to Download.` });
    }, 16);
  }, [emit, updateData, workspace.data.sourceImage]);

  const startEdit = useCallback(() => { if (!workspace.data.mesh) return; emit('contentengin:asset-edit-started'); updateData({ processingStatus: 'editing', visibleMessage: 'Edit mode on. Drag on the asset to sculpt.' }); }, [emit, updateData, workspace.data.mesh]);
  const setTool = useCallback((tool: SculptTool) => updateData({ activeTool: tool, brushState: { ...workspace.data.brushState, tool } }), [updateData, workspace.data.brushState]);
  const setBrush = useCallback((brushState: Partial<BrushState>) => updateData({ brushState: { ...workspace.data.brushState, ...brushState } }), [updateData, workspace.data.brushState]);
  const setCamera = useCallback((cameraState: Partial<CameraState>) => updateData({ cameraState: { ...workspace.data.cameraState, ...cameraState } }), [updateData, workspace.data.cameraState]);
  const resetView = useCallback(() => updateData({ cameraState: DEFAULT_CAMERA_STATE }), [updateData]);
  const resetBrush = useCallback(() => updateData({ brushState: DEFAULT_BRUSH_STATE, activeTool: DEFAULT_BRUSH_STATE.tool }), [updateData]);

  const applyBrushAt = useCallback((point: Vec3) => {
    const current = workspace.data.mesh;
    if (!current || workspace.data.processingStatus !== 'editing') return;
    const mesh = sculptMesh(current.mesh, point, workspace.data.brushState);
    const repaired = repairMesh(mesh);
    const diagnostics = validateMesh(repaired);
    const next: EditableMeshState = { mesh: repaired, diagnostics, quality: qualityFromDiagnostics(diagnostics), repaired: true };
    updateData({ mesh: next, previewMesh: meshToSnapshot(repaired, diagnostics), editHistory: [...workspace.data.editHistory, current.mesh].slice(-24), redoStack: [], visibleMessage: next.quality === 'Export Blocked' ? 'Mesh Quality: Export Blocked. Try Smooth or Lower Detail.' : `Mesh Quality: ${next.quality}. Ready to Download.` });
  }, [updateData, workspace.data.brushState, workspace.data.editHistory, workspace.data.mesh, workspace.data.processingStatus]);

  const undo = useCallback(() => {
    const previous = workspace.data.editHistory.at(-1); if (!previous || !workspace.data.mesh) return;
    const diagnostics = validateMesh(previous);
    updateData({ mesh: { mesh: previous, diagnostics, quality: qualityFromDiagnostics(diagnostics), repaired: true }, previewMesh: meshToSnapshot(previous, diagnostics), editHistory: workspace.data.editHistory.slice(0, -1), redoStack: [workspace.data.mesh.mesh, ...workspace.data.redoStack].slice(0, 24) });
  }, [updateData, workspace.data.editHistory, workspace.data.mesh, workspace.data.redoStack]);

  const redo = useCallback(() => {
    const next = workspace.data.redoStack[0]; if (!next || !workspace.data.mesh) return;
    const diagnostics = validateMesh(next);
    updateData({ mesh: { mesh: next, diagnostics, quality: qualityFromDiagnostics(diagnostics), repaired: true }, previewMesh: meshToSnapshot(next, diagnostics), editHistory: [...workspace.data.editHistory, workspace.data.mesh.mesh].slice(-24), redoStack: workspace.data.redoStack.slice(1) });
  }, [updateData, workspace.data.editHistory, workspace.data.mesh, workspace.data.redoStack]);

  const download = useCallback((format: ExportFormat) => {
    const current = workspace.data.mesh;
    if (!current) return;
    emit('contentengin:asset-export-requested', { format });
    const diagnostics = validateMesh(current.mesh);
    if (qualityFromDiagnostics(diagnostics) === 'Export Blocked') { updateData({ visibleMessage: 'Mesh Quality: Export Blocked. Try Smooth or Lower Detail.' }); return; }
    const blob = format === 'obj' ? new Blob([exportOBJ(current.mesh)], { type: 'text/plain' }) : exportGLB(current.mesh);
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `dreamengin-asset.${format}`; a.click(); URL.revokeObjectURL(a.href);
    updateData({ processingStatus: 'ready-to-download', visibleMessage: 'Mesh Quality: Clean. Download started.' });
  }, [emit, updateData, workspace.data.mesh]);

  return useMemo(() => ({ workspace, intents, uploadImage, process, startEdit, setTool, setBrush, setCamera, resetView, resetBrush, applyBrushAt, undo, redo, download }), [workspace, intents, uploadImage, process, startEdit, setTool, setBrush, setCamera, resetView, resetBrush, applyBrushAt, undo, redo, download]);
}

async function fileToImageData(file: File): Promise<ImageData> {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement('canvas'); canvas.width = bitmap.width; canvas.height = bitmap.height;
  const ctx = canvas.getContext('2d'); if (!ctx) throw new Error('Could not read image.');
  ctx.drawImage(bitmap, 0, 0);
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}
