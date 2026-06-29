'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { readOfflineCache, writeOfflineCache } from '@/engine/offline/offlineCache';
import { useContentEnginRuntime } from '@/engins/rulesets/content/useContentEnginRuntime';
import { analyzeImageMask, CONTENTENGIN_GLB_UPLOAD_LIMIT_BYTES, createImplicitAssetWorkspaceObject, DEFAULT_BRUSH_STATE, DEFAULT_CAMERA_STATE, addRigBendPoint, createAutoRigState, exportGLB, exportOBJ, importGLBToEditableMesh, meshToSnapshot, processImageToEditableMesh, removeLastRigBendPoint, qualityFromDiagnostics, repairMeshDetailed, sculptMesh, summarizeMeshQuality, validateMeshStrict, type BrushState, type CameraState, type EditableMeshState, type ExportFormat, type ImplicitAssetWorkspaceObject, type RigTargetKind, type SculptTool } from '@/engins/isosurfaceAssetPipeline';
import type { Mesh, Vec3 } from '@/engins/isosurfaceDualContouring';

export interface WorkspaceIntentLog { type: string; at: string; }

export function useImplicitAssetWorkspace(ownerId = 'local-user', runtimeId = 'contentengin-runtime') {
  const { dispatch } = useContentEnginRuntime({ useMemoryAdapter: true });
  const [workspace, setWorkspace] = useState<ImplicitAssetWorkspaceObject>(() => createImplicitAssetWorkspaceObject(ownerId, runtimeId));
  const workspaceRef = useRef(workspace);
  const sourceUrlRef = useRef<string | null>(null);
  const lastBrushEmit = useRef(0);
  const processTokenRef = useRef(0);
  const [intents, setIntents] = useState<WorkspaceIntentLog[]>([]);

  useEffect(() => {
    let cancelled = false;
    void readOfflineCache<ImplicitAssetWorkspaceObject>('content:implicit-workspace').then((cached) => {
      if (!cancelled && cached) setWorkspace(cached);
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    void writeOfflineCache('content:implicit-workspace', workspace);
  }, [workspace]);

  useEffect(() => { workspaceRef.current = workspace; }, [workspace]);
  useEffect(() => () => { if (sourceUrlRef.current) URL.revokeObjectURL(sourceUrlRef.current); }, []);

  const emit = useCallback((type: string, payload: Record<string, unknown> = {}) => {
    dispatch({ type: type as never, payload: payload as never });
    setIntents((prev) => [{ type, at: new Date().toISOString() }, ...prev].slice(0, 8));
  }, [dispatch]);

  const updateData = useCallback((patch: Partial<ImplicitAssetWorkspaceObject['data']>) => {
    setWorkspace((current) => {
      const next = {
        ...current,
        updatedAt: new Date().toISOString(),
        version: current.version + 1,
        data: {
          ...current.data,
          ...patch,
        },
      };

      workspaceRef.current = next;
      return next;
    });
  }, []);

  const uploadGlb = useCallback(async (file: File) => {
    processTokenRef.current += 1;
    if (sourceUrlRef.current) {
      URL.revokeObjectURL(sourceUrlRef.current);
      sourceUrlRef.current = null;
    }
    if (file.size > CONTENTENGIN_GLB_UPLOAD_LIMIT_BYTES) {
      updateData({ processingStatus: 'failed', visibleMessage: 'GLB too large for mobile-safe import. Keep it under 25 MB for now.' });
      return;
    }
    try {
      const editable = await importGLBToEditableMesh(file);
      updateData({
        sourceImage: null,
        sourceGlb: { name: file.name, size: file.size },
        mesh: editable,
        previewMesh: meshToSnapshot(editable.mesh, editable.diagnostics),
        editHistory: [],
        redoStack: [],
        rigState: createAutoRigState('humanoid'),
        processingStatus: 'rigging',
        visibleMessage: 'GLB loaded. Pick a rig metadata type, then tap the places where joints bend.',
      });
      emit('contentengin:glb-uploaded', { sourceGlb: { name: file.name, size: file.size }, meshDiagnostics: diagnosticsMetadata(editable) });
    } catch {
      updateData({ processingStatus: 'failed', visibleMessage: 'Could not read that GLB. This MVP needs a binary .glb with indexed mesh positions.' });
    }
  }, [emit, updateData]);

  const uploadImage = useCallback(async (file: File) => {
    processTokenRef.current += 1;

    if (sourceUrlRef.current) {
      URL.revokeObjectURL(sourceUrlRef.current);
      sourceUrlRef.current = null;
    }

    const url = URL.createObjectURL(file);

    try {
      const image = await fileToImageData(file);
      const sourceImage = analyzeImageMask(image, file.name, url);

      sourceUrlRef.current = url;

      updateData({
        sourceImage,
        sourceGlb: null,
        mesh: null,
        previewMesh: null,
        editHistory: [],
        redoStack: [],
        processingStatus: 'uploaded',
        visibleMessage: 'Image loaded. Press Process to make it 3D.',
      });

      emit('contentengin:image-uploaded', {
        sourceImage: {
          name: sourceImage.name,
          width: sourceImage.width,
          height: sourceImage.height,
          threshold: sourceImage.threshold,
          activeBounds: sourceImage.activeBounds,
        },
      });
    } catch {
      URL.revokeObjectURL(url);
      sourceUrlRef.current = null;

      updateData({
        processingStatus: 'failed',
        visibleMessage: 'Could not read image. Try another file.',
      });
    }
  }, [emit, updateData]);

  const clearWorkspace = useCallback(() => {
    processTokenRef.current += 1;

    if (sourceUrlRef.current) {
      URL.revokeObjectURL(sourceUrlRef.current);
      sourceUrlRef.current = null;
    }

    updateData({
      sourceImage: null,
      sourceGlb: null,
      mesh: null,
      previewMesh: null,
      editHistory: [],
      redoStack: [],
      processingStatus: 'idle',
      visibleMessage: 'Upload an image or GLB to make it real.',
    });

    emit('contentengin:asset-cleared');
  }, [emit, updateData]);

  const process = useCallback(() => {
    const sourceImage = workspaceRef.current.data.sourceImage;
    if (!sourceImage) return;

    const token = processTokenRef.current + 1;
    processTokenRef.current = token;

    emit('contentengin:asset-process-requested', { sourceName: sourceImage.name });
    updateData({ processingStatus: 'processing', visibleMessage: 'Shaping your image into a 3D asset…' });

    window.setTimeout(() => {
      if (processTokenRef.current !== token || workspaceRef.current.data.sourceImage !== sourceImage) return;

      try {
        const editable = processImageToEditableMesh(sourceImage);
        if (processTokenRef.current !== token || workspaceRef.current.data.sourceImage !== sourceImage) return;

        const ready = editable.quality === 'Clean' || editable.quality === 'Open Surface' || editable.quality === 'Auto-fix applied';
        updateData({
          mesh: editable,
          previewMesh: meshToSnapshot(editable.mesh, editable.diagnostics),
          editHistory: [],
          redoStack: [],
          processingStatus: ready ? 'ready-to-download' : 'generated',
          visibleMessage: messageForQuality(editable.quality),
        });
        emit('contentengin:asset-process-completed', { processingStatus: ready ? 'ready-to-download' : 'generated', meshDiagnostics: diagnosticsMetadata(editable), quality: editable.quality });
      } catch {
        if (processTokenRef.current === token) updateData({ processingStatus: 'failed', visibleMessage: 'Processing failed. Try a simpler image.' });
      }
    }, 16);
  }, [emit, updateData]);

  const setRigTarget = useCallback((target: RigTargetKind) => {
    updateData({ rigState: createAutoRigState(target), processingStatus: 'rigging', visibleMessage: `${target} rig metadata. Tap each bend point in order.` });
    emit('contentengin:asset-rig-target-set', { target });
  }, [emit, updateData]);

  const startRigMetadataMode = useCallback(() => {
    if (!workspaceRef.current.data.mesh) return;
    updateData({ processingStatus: 'rigging', visibleMessage: 'Rig metadata mode on. Tap where joints bend, then download GLB + rig metadata.' });
    emit('contentengin:asset-rig-metadata-started', { target: workspaceRef.current.data.rigState.target });
  }, [emit, updateData]);

  const placeRigBendPoint = useCallback((point: Vec3) => {
    const data = workspaceRef.current.data;
    if (!data.mesh || data.processingStatus !== 'rigging') return;
    const rigState = addRigBendPoint(data.rigState, point);
    updateData({ rigState, visibleMessage: `${rigState.bendPoints.length} bend point(s) placed for ${rigState.target}.` });
    emit('contentengin:asset-rig-bend-point-set', { target: rigState.target, count: rigState.bendPoints.length });
  }, [emit, updateData]);

  const undoRigBendPoint = useCallback(() => {
    const rigState = removeLastRigBendPoint(workspaceRef.current.data.rigState);
    updateData({ rigState, visibleMessage: `${rigState.bendPoints.length} bend point(s) placed for ${rigState.target}.` });
  }, [updateData]);


  const clearRigMetadata = useCallback(() => {
    const target = workspaceRef.current.data.rigState.target;
    const rigState = createAutoRigState(target);
    updateData({ rigState, visibleMessage: `${target} rig metadata cleared. Tap bend points to rebuild it.` });
    emit('contentengin:asset-rig-target-set', { target });
    emit('contentengin:asset-rig-bend-point-set', { target, count: 0 });
  }, [emit, updateData]);

  const startEdit = useCallback(() => {
    if (!workspaceRef.current.data.mesh) return;
    emit('contentengin:asset-edit-started');
    updateData({ processingStatus: 'editing', visibleMessage: 'Edit mode on. Sculpt directly on the asset.' });
  }, [emit, updateData]);

  const setTool = useCallback((tool: SculptTool) => {
    const current = workspaceRef.current.data.brushState;
    updateData({ activeTool: tool, brushState: { ...current, tool } });
  }, [updateData]);

  const setBrush = useCallback((brushState: Partial<BrushState>) => {
    updateData({ brushState: { ...workspaceRef.current.data.brushState, ...brushState } });
  }, [updateData]);

  const setCamera = useCallback((cameraState: Partial<CameraState>) => {
    updateData({
      cameraState: {
        ...workspaceRef.current.data.cameraState,
        ...cameraState,
        zoom: cameraState.zoom === undefined ? workspaceRef.current.data.cameraState.zoom : Math.max(0.25, Math.min(6, cameraState.zoom)),
      },
    });
  }, [updateData]);

  const resetView = useCallback(() => updateData({ cameraState: DEFAULT_CAMERA_STATE }), [updateData]);
  const resetBrush = useCallback(() => updateData({ brushState: DEFAULT_BRUSH_STATE, activeTool: DEFAULT_BRUSH_STATE.tool }), [updateData]);

  const applyBrushAt = useCallback((point: Vec3) => {
    const data = workspaceRef.current.data;
    const current = data.mesh;
    if (!current || data.processingStatus !== 'editing') return;

    const sculpted = sculptMesh(current.mesh, point, data.brushState);
    const repaired = repairMeshDetailed(sculpted);
    const quality = summarizeMeshQuality(repaired.diagnostics, repaired.report);
    const next: EditableMeshState = { mesh: repaired.mesh, diagnostics: repaired.diagnostics, quality, repaired: repaired.report.changed, repairReport: repaired.report };

    updateData({
      mesh: next,
      previewMesh: meshToSnapshot(repaired.mesh, repaired.diagnostics),
      editHistory: [...data.editHistory, cloneForHistory(current.mesh)].slice(-24),
      redoStack: [],
      visibleMessage: messageForQuality(quality),
    });

    const now = Date.now();
    if (now - lastBrushEmit.current > 250) {
      lastBrushEmit.current = now;
      emit('contentengin:asset-brush-applied', { tool: data.brushState.tool });
    }
  }, [emit, updateData]);

  const undo = useCallback(() => {
    const data = workspaceRef.current.data;
    const previous = data.editHistory.at(-1);
    if (!previous || !data.mesh) return;
    const diagnostics = validateMeshStrict(previous);
    const quality = qualityFromDiagnostics(diagnostics);
    updateData({
      mesh: { mesh: previous, diagnostics, quality, repaired: true },
      previewMesh: meshToSnapshot(previous, diagnostics),
      editHistory: data.editHistory.slice(0, -1),
      redoStack: [cloneForHistory(data.mesh.mesh), ...data.redoStack].slice(0, 24),
      processingStatus: 'editing',
      visibleMessage: messageForQuality(quality),
    });
  }, [updateData]);

  const redo = useCallback(() => {
    const data = workspaceRef.current.data;
    const nextMesh = data.redoStack[0];
    if (!nextMesh || !data.mesh) return;
    const diagnostics = validateMeshStrict(nextMesh);
    const quality = qualityFromDiagnostics(diagnostics);
    updateData({
      mesh: { mesh: nextMesh, diagnostics, quality, repaired: true },
      previewMesh: meshToSnapshot(nextMesh, diagnostics),
      editHistory: [...data.editHistory, cloneForHistory(data.mesh.mesh)].slice(-24),
      redoStack: data.redoStack.slice(1),
      processingStatus: 'editing',
      visibleMessage: messageForQuality(quality),
    });
  }, [updateData]);

  const download = useCallback((format: ExportFormat) => {
    const current = workspaceRef.current.data.mesh;
    if (!current) return;

    emit('contentengin:asset-export-requested', { format });

    const repaired = repairMeshDetailed(current.mesh);
    const diagnostics = validateMeshStrict(repaired.mesh);
    const quality = qualityFromDiagnostics(diagnostics);

    if (
      diagnostics.invalidIndices > 0 ||
      diagnostics.nonFiniteVertices > 0 ||
      diagnostics.triangles === 0 ||
      quality === 'Export Blocked'
    ) {
      updateData({ visibleMessage: 'Export blocked. Repair the mesh first.' });
      return;
    }

    if ((format === 'glb' || format === 'rig-metadata-glb') && (quality === 'Needs Repair' || diagnostics.degenerateTriangles > 0 || diagnostics.nonManifoldEdges > 0)) {
      updateData({ visibleMessage: 'GLB export blocked. Repair the mesh first.' });
      return;
    }

    const isRigMetadata = format === 'rig-metadata-glb';
    const rigState = isRigMetadata ? { ...workspaceRef.current.data.rigState, status: 'metadata-ready' as const } : workspaceRef.current.data.rigState;
    const fileName = isRigMetadata ? 'dreamengin-asset-rig-metadata.glb' : `dreamengin-asset.${format}`;
    const blob = format === 'obj' ? new Blob([exportOBJ(repaired.mesh)], { type: 'text/plain' }) : exportGLB(repaired.mesh, isRigMetadata ? rigState : undefined);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1500);
    const visibleMessage = quality === 'Too Heavy' ? 'Download started. This mesh may be heavy.' : 'Download started.';
    updateData({ processingStatus: 'ready-to-download', visibleMessage });
    if (isRigMetadata) updateData({ rigState });
    emit('contentengin:download-ready', { downloads: { format, fileName, triangles: diagnostics.triangles, vertices: diagnostics.vertices, rigMetadataOnly: isRigMetadata } });
  }, [emit, updateData]);

  return useMemo(() => ({ workspace, intents, uploadImage, uploadGlb, clearWorkspace, process, startEdit, startRigMetadataMode, setRigTarget, placeRigBendPoint, undoRigBendPoint, clearRigMetadata, setTool, setBrush, setCamera, resetView, resetBrush, applyBrushAt, undo, redo, download }), [workspace, intents, uploadImage, uploadGlb, clearWorkspace, process, startEdit, startRigMetadataMode, setRigTarget, placeRigBendPoint, undoRigBendPoint, clearRigMetadata, setTool, setBrush, setCamera, resetView, resetBrush, applyBrushAt, undo, redo, download]);
}

async function fileToImageData(file: File): Promise<ImageData> {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement('canvas');
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not read image.');
  ctx.drawImage(bitmap, 0, 0);
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function messageForQuality(quality: string): string {
  if (quality === 'Export Blocked') return 'Mesh Quality: Export Blocked. Repair before download.';
  if (quality === 'Needs Repair') return 'Mesh Quality: Needs Repair. OBJ may still download if valid.';
  return `Mesh Quality: ${quality}. Ready to Download.`;
}

function diagnosticsMetadata(editable: EditableMeshState) {
  const d = editable.diagnostics;
  return {
    vertices: d.vertices,
    triangles: d.triangles,
    boundaryEdges: d.boundaryEdges,
    nonManifoldEdges: d.nonManifoldEdges,
    invalidIndices: d.invalidIndices,
    nonFiniteVertices: d.nonFiniteVertices,
    estimatedBytes: d.estimatedBytes,
  };
}

function cloneForHistory(mesh: Mesh): Mesh {
  const colored = mesh as Mesh & { vertexColors?: { r: number; g: number; b: number }[]; palette?: { r: number; g: number; b: number }[] };
  return {
    vertices: mesh.vertices.map((v) => ({ ...v })),
    indices: [...mesh.indices],
    vertexColors: colored.vertexColors?.map((c) => ({ ...c })),
    palette: colored.palette?.map((c) => ({ ...c })),
  } as Mesh;
}
