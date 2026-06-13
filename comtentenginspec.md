You’re right. Here is the first pass of CONTENTENGIN-SPEC.md.

# CONTENTENGIN-SPEC.md
**Document ID:** CONTENTENGIN-SPEC-2026-06-13  
**Project:** DREAMengin Subsystem – ContentEngin  
**Target:** Free-version Meshy-class 3D asset creator for DREAMengin/GameEngin  
**Primary Device:** Mobile browser first  
**Primary Output:** Game-ready `.glb` assets with mesh, texture, optional skeleton, optional animation clips  
**Runtime Consumer:** GameEngin cartridges and Daydream surfaces  
---
## 1. PURPOSE
ContentEngin must become the DREAMengin asset factory.
The minimum target is not “image editor.” It must become at least the free-version equivalent of Meshy’s core creation loop:
1. text prompt → 3D object
2. image → 3D object
3. generated mesh → cleaned game-ready mesh
4. generated mesh → textured asset
5. humanoid/creature mesh → rigged/skinned mesh
6. rigged mesh → basic animation clips
7. final asset → exported as `.glb`
8. final asset → usable inside GameEngin cartridge pipeline
Meshy currently markets text-to-3D, image-to-3D, and AI texturing as core creation features. ContentEngin’s first real target is to match that class of workflow inside DREAMengin, not merely mention it as architecture.  [oai_citation:0‡meshy.ai](https://www.meshy.ai/?utm_source=chatgpt.com)
---
## 2. TERMS
A **mesh** is the visible 3D geometry.
A **texture** is the image/material data wrapped onto the mesh.
A **skeleton** or **armature** is the bone hierarchy used to move a character.
A **skinned mesh** is a mesh whose vertices are weighted to bones.
A **rigged asset** is a mesh with a skeleton/armature.
An **animation clip** is reusable motion data, such as idle, walk, run, jump, attack, hit, or death.
A **game-ready asset** is a compressed, reasonably low-poly, textured, correctly scaled `.glb` with clean transforms, metadata, and optional skeleton/animations.
glTF/GLB is the primary DREAMengin runtime asset format because glTF is designed for efficient runtime transmission/loading of 3D scenes and supports meshes, materials, textures, skins, and animations.  [oai_citation:1‡khronos.org](https://www.khronos.org/gltf/?utm_source=chatgpt.com)
---
## 3. REALISTIC CAPABILITY TARGET
ContentEngin must not pretend a phone is doing all heavy AI generation locally.
The correct architecture is:
- Mobile browser = creator surface, preview, prompt editor, sketch/image upload, job control, lightweight mesh inspection.
- Server/GPU worker = image-to-3D generation, remesh, texture bake, rigging, animation retargeting, compression.
- GameEngin runtime = loads final `.glb`/`.dreamr` assets only.
The mobile app should feel like the user is creating assets from a phone, but expensive generation should run in queued backend jobs unless the model is small enough for local inference.
---
## 4. BASELINE FEATURE SET
ContentEngin v1 must support these asset flows:
### 4.1 Text to 3D Prop
Input:
```json
{
  "mode": "text-to-3d",
  "prompt": "rusted neon vending machine with broken screen",
  "style": "game-ready stylized",
  "target": "prop",
  "poly_budget": 6000
}

Output:

{
  "asset_id": "asset_01J...",
  "kind": "prop",
  "status": "ready",
  "exports": {
    "glb": "/contentengin/assets/asset_01J/model.glb",
    "thumbnail": "/contentengin/assets/asset_01J/thumb.webp"
  }
}

4.2 Image to 3D Prop

Input:

{
  "mode": "image-to-3d",
  "source_image": "uploaded image",
  "target": "prop",
  "poly_budget": 8000,
  "generate_texture": true
}

Output:

* .glb mesh
* baked texture
* preview thumbnail
* metadata report

4.3 Image to 3D Character

Input:

{
  "mode": "image-to-character",
  "source_image": "front-view character drawing or concept art",
  "target": "humanoid-character",
  "poly_budget": 15000,
  "rig": true,
  "animations": ["idle", "walk", "run", "jump"]
}

Output:

* rigged/skinned .glb
* skeleton metadata
* animation clips embedded or sidecar .glb
* GameEngin-ready manifest entry

4.4 Retexture Existing Mesh

Input:

{
  "mode": "texture-existing-mesh",
  "mesh": "uploaded .glb",
  "prompt": "worn gold armor with black fabric and blue scratches",
  "texture_resolution": 1024
}

Output:

* same mesh
* new material set
* baked texture maps

⸻

5. MODEL BACKENDS

ContentEngin must support pluggable generation backends.

5.1 Free/Open Baseline

Use open-source or locally hostable models where possible.

Approved baseline models:

1. TripoSR for fast single-image to 3D reconstruction. TripoSR is open source and is specifically built for fast feed-forward 3D reconstruction from one image.  
2. Hunyuan3D 2.x / 2.1 for higher-quality image/text-to-3D where GPU hosting is available. Tencent’s Hunyuan3D 2.1 release is described as open-source and includes PBR-focused 3D generation work.  
3. Blender headless for cleanup, remesh, decimation, transforms, UV checks, material assignment, export, and optional add-on workflows. Blender’s Python API exposes decimation through DecimateModifier, which is required for automated game-ready LOD generation.  
4. Mixamo-compatible export path for humanoid auto-rigging/animation fallback. Mixamo supports automatic character rigging and accepts uploaded character models for skeleton fitting.  

5.2 Optional Paid/External Backends

These are optional adapters, not core requirements:

* Meshy API if available
* Tripo API
* Replicate-hosted Hunyuan/TripoSR workers
* DeepMotion for animation generation
* Ready Player Me for humanoid avatar path

No external paid service may be treated as the only implementation path.

⸻

6. OUTPUT FORMAT

Primary export:

.glb

Secondary internal outputs:

.obj
.fbx
.vrm
.png
.webp
.json

Rules:

1. GameEngin consumes .glb.
2. Character exports should remain glTF-compatible wherever possible.
3. VRM is allowed for humanoid avatar metadata because VRM is based on glTF/GLB and defines humanoid avatar conventions.  
4. FBX is allowed only as an interchange format for rigging/animation tools, not as the final web runtime format.
5. OBJ is allowed only as an intermediate static mesh format.

⸻

7. CONTENTENGIN DIRECTORY STRUCTURE

Add or extend:

lib/contentengin/
├── assetTypes.ts
├── assetManifest.ts
├── contentJobQueue.ts
├── contentPipeline.ts
├── validation.ts
├── exporters/
│   ├── glbExporter.ts
│   ├── gameenginManifestWriter.ts
│   └── thumbnailWriter.ts
├── generators/
│   ├── imageTo3D.ts
│   ├── textTo3D.ts
│   ├── textureGenerator.ts
│   ├── rigGenerator.ts
│   └── animationGenerator.ts
├── providers/
│   ├── providerTypes.ts
│   ├── triposrProvider.ts
│   ├── hunyuanProvider.ts
│   ├── blenderProvider.ts
│   └── mixamoProvider.ts
└── reports/
    └── assetQualityReport.ts
app/api/contentengin/
├── jobs/route.ts
├── jobs/[jobId]/route.ts
├── assets/[assetId]/route.ts
└── upload/route.ts
components/contentengin/
├── ContentEnginStudio.tsx
├── ImageToAssetPanel.tsx
├── AssetPreview3D.tsx
├── RiggingPanel.tsx
├── AnimationClipPanel.tsx
└── ExportToGameEnginPanel.tsx
scripts/contentengin/
├── run-content-job.ts
├── blender-cleanup.py
├── blender-rig-check.py
├── blender-export-glb.py
└── validate-glb.ts
public/contentengin/
└── generated/
    └── {asset_id}/
        ├── source.png
        ├── raw.obj
        ├── cleaned.glb
        ├── rigged.glb
        ├── thumbnail.webp
        └── manifest.json

⸻

8. ASSET MANIFEST

Every generated asset must include:

{
  "asset_id": "asset_01J...",
  "contentengin_version": 1,
  "created_at": "2026-06-13T00:00:00.000Z",
  "source": {
    "mode": "image-to-character",
    "image_sha256": "sha256...",
    "prompt": "front view stylized hero character"
  },
  "asset": {
    "kind": "humanoid-character",
    "format": "glb",
    "mesh_type": "skinned",
    "has_skeleton": true,
    "has_animations": true,
    "triangle_count": 14800,
    "material_count": 2,
    "texture_resolution": 1024,
    "scale_meters": 1.0
  },
  "skeleton": {
    "standard": "humanoid",
    "bone_count": 55,
    "root_bone": "Hips",
    "required_bones_present": true
  },
  "animations": [
    { "name": "idle", "duration_seconds": 2.0 },
    { "name": "walk", "duration_seconds": 1.2 },
    { "name": "run", "duration_seconds": 0.8 },
    { "name": "jump", "duration_seconds": 0.9 }
  ],
  "exports": {
    "glb": "/contentengin/generated/asset_01J/rigged.glb",
    "thumbnail": "/contentengin/generated/asset_01J/thumbnail.webp"
  },
  "quality": {
    "game_ready": true,
    "warnings": []
  }
}

⸻

9. JOB TYPES

export type ContentEnginJobType =
  | 'text-to-3d'
  | 'image-to-3d'
  | 'image-to-character'
  | 'texture-existing-mesh'
  | 'rig-mesh'
  | 'animate-rig'
  | 'clean-mesh'
  | 'export-gameengin-asset';

⸻

10. TYPESCRIPT TYPES

Create:

// lib/contentengin/assetTypes.ts
export type ContentAssetKind =
  | 'prop'
  | 'environment-piece'
  | 'humanoid-character'
  | 'creature-character'
  | 'vehicle'
  | 'weapon'
  | 'collectible';
export type MeshRuntimeType = 'static' | 'skinned';
export interface ContentEnginAssetManifest {
  asset_id: string;
  contentengin_version: number;
  created_at: string;
  source: {
    mode: string;
    image_sha256?: string;
    prompt?: string;
  };
  asset: {
    kind: ContentAssetKind;
    format: 'glb';
    mesh_type: MeshRuntimeType;
    has_skeleton: boolean;
    has_animations: boolean;
    triangle_count: number;
    material_count: number;
    texture_resolution: number;
    scale_meters: number;
  };
  skeleton?: {
    standard: 'humanoid' | 'creature' | 'custom';
    bone_count: number;
    root_bone: string;
    required_bones_present: boolean;
  };
  animations: Array<{
    name: string;
    duration_seconds: number;
  }>;
  exports: {
    glb: string;
    thumbnail: string;
  };
  quality: {
    game_ready: boolean;
    warnings: string[];
  };
}
export interface ContentEnginJobRequest {
  type:
    | 'text-to-3d'
    | 'image-to-3d'
    | 'image-to-character'
    | 'texture-existing-mesh'
    | 'rig-mesh'
    | 'animate-rig'
    | 'clean-mesh'
    | 'export-gameengin-asset';
  prompt?: string;
  sourceImageUrl?: string;
  sourceMeshUrl?: string;
  assetKind: ContentAssetKind;
  polyBudget: number;
  rig?: boolean;
  animations?: string[];
  textureResolution?: 512 | 1024 | 2048;
}
export interface ContentEnginJobRecord {
  id: string;
  ownerId: string;
  request: ContentEnginJobRequest;
  status: 'queued' | 'running' | 'failed' | 'ready';
  progress: number;
  createdAt: string;
  updatedAt: string;
  error?: string;
  resultManifestUrl?: string;
}

⸻

11. JOB QUEUE

Create:

// lib/contentengin/contentJobQueue.ts
import { randomUUID } from 'crypto';
import type { ContentEnginJobRecord, ContentEnginJobRequest } from './assetTypes';
const memoryJobs = new Map<string, ContentEnginJobRecord>();
function nowIso(): string {
  return new Date().toISOString();
}
export function createContentJob(ownerId: string, request: ContentEnginJobRequest): ContentEnginJobRecord {
  const id = randomUUID();
  const timestamp = nowIso();
  const job: ContentEnginJobRecord = {
    id,
    ownerId,
    request,
    status: 'queued',
    progress: 0,
    createdAt: timestamp,
    updatedAt: timestamp,
  };
  memoryJobs.set(id, job);
  return job;
}
export function getContentJob(jobId: string, ownerId: string): ContentEnginJobRecord {
  const job = memoryJobs.get(jobId);
  if (!job || job.ownerId !== ownerId) throw new Error('ContentEngin job not found.');
  return job;
}
export function updateContentJob(
  jobId: string,
  patch: Partial<Omit<ContentEnginJobRecord, 'id' | 'ownerId' | 'createdAt'>>
): ContentEnginJobRecord {
  const current = memoryJobs.get(jobId);
  if (!current) throw new Error('ContentEngin job not found.');
  const next: ContentEnginJobRecord = {
    ...current,
    ...patch,
    updatedAt: nowIso(),
  };
  memoryJobs.set(jobId, next);
  return next;
}

Production version should replace memory storage with Supabase.

⸻

12. API ROUTE: CREATE JOB

Create:

// app/api/contentengin/jobs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createContentJob } from '@/lib/contentengin/contentJobQueue';
import type { ContentEnginJobRequest } from '@/lib/contentengin/assetTypes';
function getOwnerId(): string {
  return 'local-user';
}
function isValidRequest(value: unknown): value is ContentEnginJobRequest {
  if (!value || typeof value !== 'object') return false;
  const record = value as Record<string, unknown>;
  return typeof record.type === 'string'
    && typeof record.assetKind === 'string'
    && typeof record.polyBudget === 'number'
    && record.polyBudget > 0
    && record.polyBudget <= 100_000;
}
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!isValidRequest(body)) {
    return NextResponse.json({ error: 'Invalid ContentEngin job request.' }, { status: 400 });
  }
  const job = createContentJob(getOwnerId(), body);
  return NextResponse.json({
    job,
    message: 'ContentEngin job queued.',
  });
}

⸻

13. API ROUTE: READ JOB

Create:

// app/api/contentengin/jobs/[jobId]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getContentJob } from '@/lib/contentengin/contentJobQueue';
function getOwnerId(): string {
  return 'local-user';
}
export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ jobId: string }> }
) {
  const { jobId } = await context.params;
  try {
    const job = getContentJob(jobId, getOwnerId());
    return NextResponse.json({ job });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Job lookup failed.' },
      { status: 404 }
    );
  }
}

⸻

14. PIPELINE ORCHESTRATOR

Create:

// lib/contentengin/contentPipeline.ts
import path from 'path';
import { runImageTo3D } from './generators/imageTo3D';
import { runTextTo3D } from './generators/textTo3D';
import { runMeshCleanup } from './providers/blenderProvider';
import { runRigging } from './generators/rigGenerator';
import { runAnimationGeneration } from './generators/animationGenerator';
import { writeAssetManifest } from './assetManifest';
import type { ContentEnginJobRecord } from './assetTypes';
export async function runContentPipeline(job: ContentEnginJobRecord): Promise<string> {
  const assetRoot = path.join(process.cwd(), 'public', 'contentengin', 'generated', job.id);
  let rawMeshPath: string;
  if (job.request.type === 'image-to-3d' || job.request.type === 'image-to-character') {
    if (!job.request.sourceImageUrl) throw new Error('sourceImageUrl is required.');
    rawMeshPath = await runImageTo3D({
      imageUrl: job.request.sourceImageUrl,
      outputDir: assetRoot,
      assetKind: job.request.assetKind,
    });
  } else if (job.request.type === 'text-to-3d') {
    if (!job.request.prompt) throw new Error('prompt is required.');
    rawMeshPath = await runTextTo3D({
      prompt: job.request.prompt,
      outputDir: assetRoot,
      assetKind: job.request.assetKind,
    });
  } else {
    throw new Error(`Unsupported first-stage job type: ${job.request.type}`);
  }
  const cleanedGlb = await runMeshCleanup({
    inputPath: rawMeshPath,
    outputDir: assetRoot,
    polyBudget: job.request.polyBudget,
    textureResolution: job.request.textureResolution ?? 1024,
  });
  let finalGlb = cleanedGlb;
  let animations: string[] = [];
  if (job.request.rig || job.request.type === 'image-to-character') {
    finalGlb = await runRigging({
      inputGlb: cleanedGlb,
      outputDir: assetRoot,
      standard: job.request.assetKind === 'humanoid-character' ? 'humanoid' : 'custom',
    });
    animations = await runAnimationGeneration({
      inputGlb: finalGlb,
      outputDir: assetRoot,
      clips: job.request.animations ?? ['idle'],
    });
  }
  const manifestPath = await writeAssetManifest({
    assetId: job.id,
    outputDir: assetRoot,
    source: job.request,
    finalGlb,
    animations,
  });
  return manifestPath;
}

⸻

15. IMAGE TO 3D PROVIDER

Create:

// lib/contentengin/generators/imageTo3D.ts
import fs from 'fs/promises';
import path from 'path';
import { runTripoSRProvider } from '../providers/triposrProvider';
import { runHunyuanProvider } from '../providers/hunyuanProvider';
import type { ContentAssetKind } from '../assetTypes';
export interface ImageTo3DArgs {
  imageUrl: string;
  outputDir: string;
  assetKind: ContentAssetKind;
}
export async function runImageTo3D(args: ImageTo3DArgs): Promise<string> {
  await fs.mkdir(args.outputDir, { recursive: true });
  if (process.env.CONTENTENGIN_3D_PROVIDER === 'hunyuan') {
    return runHunyuanProvider({
      mode: 'image-to-3d',
      input: args.imageUrl,
      outputDir: args.outputDir,
      assetKind: args.assetKind,
    });
  }
  return runTripoSRProvider({
    imageUrl: args.imageUrl,
    outputDir: args.outputDir,
  });
}

⸻

16. TRIPOSR PROVIDER

Create:

// lib/contentengin/providers/triposrProvider.ts
import { execFile } from 'child_process';
import path from 'path';
import { promisify } from 'util';
const execFileAsync = promisify(execFile);
export interface TripoSRProviderArgs {
  imageUrl: string;
  outputDir: string;
}
export async function runTripoSRProvider(args: TripoSRProviderArgs): Promise<string> {
  const outputPath = path.join(args.outputDir, 'raw.obj');
  await execFileAsync('python3', [
    'scripts/contentengin/run_triposr.py',
    '--image',
    args.imageUrl,
    '--output',
    outputPath,
  ], {
    env: process.env,
    timeout: 1000 * 60 * 20,
  });
  return outputPath;
}

Create:

# scripts/contentengin/run_triposr.py
import argparse
import os
import subprocess
import sys
def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--image", required=True)
    parser.add_argument("--output", required=True)
    args = parser.parse_args()
    os.makedirs(os.path.dirname(args.output), exist_ok=True)
    # This script expects TripoSR to be installed in the worker image.
    # Recommended worker setup:
    # git clone https://github.com/VAST-AI-Research/TripoSR vendor/TripoSR
    # pip install -r vendor/TripoSR/requirements.txt
    #
    # Actual command may need adjustment to match the checked-out TripoSR version.
    command = [
        sys.executable,
        "vendor/TripoSR/run.py",
        args.image,
        "--output-dir",
        os.path.dirname(args.output),
    ]
    subprocess.run(command, check=True)
    # Normalize provider output name.
    candidates = [
        os.path.join(os.path.dirname(args.output), "mesh.obj"),
        os.path.join(os.path.dirname(args.output), "0", "mesh.obj"),
    ]
    for candidate in candidates:
        if os.path.exists(candidate):
            os.replace(candidate, args.output)
            return
    raise RuntimeError("TripoSR completed but no mesh.obj output was found.")
if __name__ == "__main__":
    main()

⸻

17. HUNYUAN PROVIDER

Create:

// lib/contentengin/providers/hunyuanProvider.ts
import { execFile } from 'child_process';
import path from 'path';
import { promisify } from 'util';
import type { ContentAssetKind } from '../assetTypes';
const execFileAsync = promisify(execFile);
export interface HunyuanProviderArgs {
  mode: 'text-to-3d' | 'image-to-3d';
  input: string;
  outputDir: string;
  assetKind: ContentAssetKind;
}
export async function runHunyuanProvider(args: HunyuanProviderArgs): Promise<string> {
  const outputPath = path.join(args.outputDir, 'raw.glb');
  await execFileAsync('python3', [
    'scripts/contentengin/run_hunyuan3d.py',
    '--mode',
    args.mode,
    '--input',
    args.input,
    '--output',
    outputPath,
  ], {
    env: process.env,
    timeout: 1000 * 60 * 40,
  });
  return outputPath;
}

Create:

# scripts/contentengin/run_hunyuan3d.py
import argparse
import os
import subprocess
import sys
def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--mode", choices=["text-to-3d", "image-to-3d"], required=True)
    parser.add_argument("--input", required=True)
    parser.add_argument("--output", required=True)
    args = parser.parse_args()
    os.makedirs(os.path.dirname(args.output), exist_ok=True)
    # Worker must install the chosen Hunyuan3D implementation.
    # Keep this as a provider wrapper so ContentEngin can swap model versions.
    #
    # Expected output: a GLB or OBJ normalized to args.output.
    command = [
        sys.executable,
        "vendor/Hunyuan3D-2.1/run.py",
        "--mode",
        args.mode,
        "--input",
        args.input,
        "--output",
        args.output,
    ]
    subprocess.run(command, check=True)
    if not os.path.exists(args.output):
        raise RuntimeError("Hunyuan3D completed but output file was not created.")
if __name__ == "__main__":
    main()

⸻

18. BLENDER CLEANUP PROVIDER

Create:

// lib/contentengin/providers/blenderProvider.ts
import { execFile } from 'child_process';
import path from 'path';
import { promisify } from 'util';
const execFileAsync = promisify(execFile);
export interface MeshCleanupArgs {
  inputPath: string;
  outputDir: string;
  polyBudget: number;
  textureResolution: number;
}
export async function runMeshCleanup(args: MeshCleanupArgs): Promise<string> {
  const outputPath = path.join(args.outputDir, 'cleaned.glb');
  await execFileAsync('blender', [
    '--background',
    '--python',
    'scripts/contentengin/blender-cleanup.py',
    '--',
    '--input',
    args.inputPath,
    '--output',
    outputPath,
    '--poly-budget',
    String(args.polyBudget),
    '--texture-resolution',
    String(args.textureResolution),
  ], {
    timeout: 1000 * 60 * 20,
  });
  return outputPath;
}

Create:

# scripts/contentengin/blender-cleanup.py
import argparse
import os
import bpy
def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()
def import_asset(path):
    lower = path.lower()
    if lower.endswith(".obj"):
        bpy.ops.wm.obj_import(filepath=path)
    elif lower.endswith(".glb") or lower.endswith(".gltf"):
        bpy.ops.import_scene.gltf(filepath=path)
    elif lower.endswith(".fbx"):
        bpy.ops.import_scene.fbx(filepath=path)
    else:
        raise RuntimeError(f"Unsupported input format: {path}")
def triangulate_meshes():
    for obj in bpy.context.scene.objects:
        if obj.type == "MESH":
            bpy.context.view_layer.objects.active = obj
            obj.select_set(True)
            modifier = obj.modifiers.new(name="Triangulate", type="TRIANGULATE")
            bpy.ops.object.modifier_apply(modifier=modifier.name)
            obj.select_set(False)
def count_triangles():
    total = 0
    for obj in bpy.context.scene.objects:
        if obj.type == "MESH":
            total += len(obj.data.polygons)
    return total
def decimate_to_budget(poly_budget):
    current = count_triangles()
    if current <= poly_budget:
        return
    ratio = max(0.05, min(1.0, poly_budget / max(1, current)))
    for obj in bpy.context.scene.objects:
        if obj.type == "MESH":
            bpy.context.view_layer.objects.active = obj
            obj.select_set(True)
            modifier = obj.modifiers.new(name="ContentEngin_Decimate", type="DECIMATE")
            modifier.ratio = ratio
            bpy.ops.object.modifier_apply(modifier=modifier.name)
            obj.select_set(False)
def normalize_transforms():
    for obj in bpy.context.scene.objects:
        obj.select_set(True)
    bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
    for obj in bpy.context.scene.objects:
        obj.select_set(False)
def set_origin_and_scale():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.origin_set(type='ORIGIN_GEOMETRY', center='BOUNDS')
    bpy.ops.object.select_all(action='DESELECT')
def export_glb(output):
    os.makedirs(os.path.dirname(output), exist_ok=True)
    bpy.ops.export_scene.gltf(
        filepath=output,
        export_format="GLB",
        export_apply=True,
        export_animations=True,
        export_skins=True,
        export_materials="EXPORT"
    )
def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True)
    parser.add_argument("--output", required=True)
    parser.add_argument("--poly-budget", type=int, required=True)
    parser.add_argument("--texture-resolution", type=int, default=1024)
    args = parser.parse_args()
    clear_scene()
    import_asset(args.input)
    normalize_transforms()
    triangulate_meshes()
    decimate_to_budget(args.poly_budget)
    set_origin_and_scale()
    export_glb(args.output)
if __name__ == "__main__":
    main()

⸻

19. RIGGING GENERATOR

For v1, rigging has two paths:

19.1 Humanoid Path

Preferred:

1. export cleaned character mesh as .fbx or .obj
2. submit to auto-rig provider
3. receive skeleton-fitted asset
4. convert back to .glb
5. validate required bones

Mixamo is a practical compatibility target because it performs automatic character rigging and supports common upload formats including FBX/OBJ/ZIP.  

19.2 Local Fallback Path

Use Blender template armature:

1. detect mesh bounds
2. create humanoid armature
3. place bones by proportions
4. parent mesh with automatic weights
5. export .glb

This fallback will not match professional auto-rigging quality, but it gives ContentEngin an end-to-end free baseline.

Create:

// lib/contentengin/generators/rigGenerator.ts
import { execFile } from 'child_process';
import path from 'path';
import { promisify } from 'util';
const execFileAsync = promisify(execFile);
export interface RigGeneratorArgs {
  inputGlb: string;
  outputDir: string;
  standard: 'humanoid' | 'creature' | 'custom';
}
export async function runRigging(args: RigGeneratorArgs): Promise<string> {
  const outputPath = path.join(args.outputDir, 'rigged.glb');
  await execFileAsync('blender', [
    '--background',
    '--python',
    'scripts/contentengin/blender-auto-rig-basic.py',
    '--',
    '--input',
    args.inputGlb,
    '--output',
    outputPath,
    '--standard',
    args.standard,
  ], {
    timeout: 1000 * 60 * 20,
  });
  return outputPath;
}

Create:

# scripts/contentengin/blender-auto-rig-basic.py
import argparse
import os
import bpy
from mathutils import Vector
def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()
def import_glb(path):
    bpy.ops.import_scene.gltf(filepath=path)
def get_mesh_objects():
    return [obj for obj in bpy.context.scene.objects if obj.type == "MESH"]
def combined_bounds(meshes):
    mins = Vector((999999, 999999, 999999))
    maxs = Vector((-999999, -999999, -999999))
    for obj in meshes:
        for corner in obj.bound_box:
            world = obj.matrix_world @ Vector(corner)
            mins.x = min(mins.x, world.x)
            mins.y = min(mins.y, world.y)
            mins.z = min(mins.z, world.z)
            maxs.x = max(maxs.x, world.x)
            maxs.y = max(maxs.y, world.y)
            maxs.z = max(maxs.z, world.z)
    return mins, maxs
def create_basic_humanoid_armature(mins, maxs):
    height = maxs.z - mins.z
    center_x = (mins.x + maxs.x) * 0.5
    center_y = (mins.y + maxs.y) * 0.5
    bpy.ops.object.armature_add(location=(center_x, center_y, mins.z))
    armature = bpy.context.object
    armature.name = "ContentEngin_HumanoidRig"
    bpy.ops.object.mode_set(mode="EDIT")
    bones = armature.data.edit_bones
    root = bones[0]
    root.name = "Hips"
    root.head = (center_x, center_y, mins.z + height * 0.45)
    root.tail = (center_x, center_y, mins.z + height * 0.55)
    spine = bones.new("Spine")
    spine.head = root.tail
    spine.tail = (center_x, center_y, mins.z + height * 0.72)
    spine.parent = root
    chest = bones.new("Chest")
    chest.head = spine.tail
    chest.tail = (center_x, center_y, mins.z + height * 0.82)
    chest.parent = spine
    head = bones.new("Head")
    head.head = chest.tail
    head.tail = (center_x, center_y, mins.z + height * 0.98)
    head.parent = chest
    for side, sign in [("Left", -1), ("Right", 1)]:
        upper_arm = bones.new(f"{side}UpperArm")
        upper_arm.head = chest.head
        upper_arm.tail = (center_x + sign * height * 0.18, center_y, mins.z + height * 0.66)
        upper_arm.parent = chest
        lower_arm = bones.new(f"{side}LowerArm")
        lower_arm.head = upper_arm.tail
        lower_arm.tail = (center_x + sign * height * 0.32, center_y, mins.z + height * 0.54)
        lower_arm.parent = upper_arm
        hand = bones.new(f"{side}Hand")
        hand.head = lower_arm.tail
        hand.tail = (center_x + sign * height * 0.38, center_y, mins.z + height * 0.50)
        hand.parent = lower_arm
        upper_leg = bones.new(f"{side}UpperLeg")
        upper_leg.head = root.head
        upper_leg.tail = (center_x + sign * height * 0.08, center_y, mins.z + height * 0.24)
        upper_leg.parent = root
        lower_leg = bones.new(f"{side}LowerLeg")
        lower_leg.head = upper_leg.tail
        lower_leg.tail = (center_x + sign * height * 0.08, center_y, mins.z + height * 0.08)
        lower_leg.parent = upper_leg
        foot = bones.new(f"{side}Foot")
        foot.head = lower_leg.tail
        foot.tail = (center_x + sign * height * 0.08, center_y - height * 0.08, mins.z)
        foot.parent = lower_leg
    bpy.ops.object.mode_set(mode="OBJECT")
    return armature
def bind_meshes_to_armature(meshes, armature):
    bpy.ops.object.select_all(action="DESELECT")
    for mesh in meshes:
        mesh.select_set(True)
    armature.select_set(True)
    bpy.context.view_layer.objects.active = armature
    # Blender automatic weights. This is baseline only.
    bpy.ops.object.parent_set(type="ARMATURE_AUTO")
def export_glb(output):
    os.makedirs(os.path.dirname(output), exist_ok=True)
    bpy.ops.export_scene.gltf(
        filepath=output,
        export_format="GLB",
        export_apply=True,
        export_animations=True,
        export_skins=True,
        export_materials="EXPORT"
    )
def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True)
    parser.add_argument("--output", required=True)
    parser.add_argument("--standard", default="humanoid")
    args = parser.parse_args()
    clear_scene()
    import_glb(args.input)
    meshes = get_mesh_objects()
    if not meshes:
        raise RuntimeError("No mesh found to rig.")
    mins, maxs = combined_bounds(meshes)
    armature = create_basic_humanoid_armature(mins, maxs)
    bind_meshes_to_armature(meshes, armature)
    export_glb(args.output)
if __name__ == "__main__":
    main()

⸻

20. ANIMATION GENERATOR

v1 baseline animation clips:

* idle
* walk
* run
* jump
* attack
* hit
* death

The local baseline can generate simple procedural bone keyframes. Professional-quality animations can be imported from Mixamo-compatible FBX clips or another animation provider.

Create:

// lib/contentengin/generators/animationGenerator.ts
import { execFile } from 'child_process';
import path from 'path';
import { promisify } from 'util';
const execFileAsync = promisify(execFile);
export interface AnimationGeneratorArgs {
  inputGlb: string;
  outputDir: string;
  clips: string[];
}
export async function runAnimationGeneration(args: AnimationGeneratorArgs): Promise<string[]> {
  const outputPath = path.join(args.outputDir, 'animated.glb');
  await execFileAsync('blender', [
    '--background',
    '--python',
    'scripts/contentengin/blender-add-basic-animations.py',
    '--',
    '--input',
    args.inputGlb,
    '--output',
    outputPath,
    '--clips',
    args.clips.join(','),
  ], {
    timeout: 1000 * 60 * 20,
  });
  return args.clips;
}

Create:

# scripts/contentengin/blender-add-basic-animations.py
import argparse
import os
import bpy
import math
def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()
def find_armature():
    for obj in bpy.context.scene.objects:
        if obj.type == "ARMATURE":
            return obj
    raise RuntimeError("No armature found.")
def add_idle(armature, start, end):
    bpy.context.view_layer.objects.active = armature
    bpy.ops.object.mode_set(mode="POSE")
    for frame, offset in [(start, 0.0), ((start + end) // 2, 0.04), (end, 0.0)]:
        bpy.context.scene.frame_set(frame)
        armature.location.z = offset
        armature.keyframe_insert(data_path="location", frame=frame)
    bpy.ops.object.mode_set(mode="OBJECT")
def add_walk(armature, start, end):
    bpy.context.view_layer.objects.active = armature
    bpy.ops.object.mode_set(mode="POSE")
    for frame in range(start, end + 1, 10):
        t = (frame - start) / max(1, end - start)
        armature.rotation_euler.z = math.sin(t * math.pi * 4) * 0.035
        armature.keyframe_insert(data_path="rotation_euler", frame=frame)
    bpy.ops.object.mode_set(mode="OBJECT")
def add_jump(armature, start, end):
    mid = (start + end) // 2
    for frame, z in [(start, 0.0), (mid, 0.45), (end, 0.0)]:
        bpy.context.scene.frame_set(frame)
        armature.location.z = z
        armature.keyframe_insert(data_path="location", frame=frame)
def export_glb(output):
    os.makedirs(os.path.dirname(output), exist_ok=True)
    bpy.ops.export_scene.gltf(
        filepath=output,
        export_format="GLB",
        export_apply=True,
        export_animations=True,
        export_skins=True,
        export_materials="EXPORT"
    )
def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True)
    parser.add_argument("--output", required=True)
    parser.add_argument("--clips", required=True)
    args = parser.parse_args()
    clear_scene()
    bpy.ops.import_scene.gltf(filepath=args.input)
    armature = find_armature()
    clips = [clip.strip() for clip in args.clips.split(",") if clip.strip()]
    frame = 1
    for clip in clips:
        start = frame
        end = frame + 40
        if clip == "idle":
            add_idle(armature, start, end)
        elif clip in ["walk", "run"]:
            add_walk(armature, start, end)
        elif clip == "jump":
            add_jump(armature, start, end)
        else:
            add_idle(armature, start, end)
        frame = end + 10
    export_glb(args.output)
if __name__ == "__main__":
    main()

⸻

21. QUALITY VALIDATION

Create:

// lib/contentengin/validation.ts
import fs from 'fs/promises';
import type { ContentEnginAssetManifest } from './assetTypes';
export interface AssetValidationResult {
  gameReady: boolean;
  warnings: string[];
}
export async function validateAssetManifest(manifest: ContentEnginAssetManifest): Promise<AssetValidationResult> {
  const warnings: string[] = [];
  if (manifest.asset.format !== 'glb') warnings.push('Asset must export GLB.');
  if (manifest.asset.triangle_count > 50_000) warnings.push('Triangle count exceeds mobile baseline.');
  if (manifest.asset.material_count > 6) warnings.push('Material count exceeds mobile baseline.');
  if (manifest.asset.texture_resolution > 2048) warnings.push('Texture resolution exceeds mobile baseline.');
  if (manifest.asset.mesh_type === 'skinned') {
    if (!manifest.asset.has_skeleton) warnings.push('Skinned asset requires skeleton.');
    if (!manifest.skeleton?.required_bones_present) warnings.push('Required skeleton bones missing.');
  }
  try {
    await fs.access(manifest.exports.glb.replace(/^\/+/, 'public/'));
  } catch {
    warnings.push('GLB export path is missing.');
  }
  return {
    gameReady: warnings.length === 0,
    warnings,
  };
}

⸻

22. MOBILE GAME-READY BUDGETS

Default budgets:

{
  "mobile_low": {
    "static_prop_triangles": 3000,
    "hero_prop_triangles": 8000,
    "character_triangles": 12000,
    "texture_resolution": 512,
    "max_materials": 3
  },
  "mobile_mid": {
    "static_prop_triangles": 6000,
    "hero_prop_triangles": 15000,
    "character_triangles": 25000,
    "texture_resolution": 1024,
    "max_materials": 5
  },
  "mobile_high": {
    "static_prop_triangles": 12000,
    "hero_prop_triangles": 30000,
    "character_triangles": 50000,
    "texture_resolution": 2048,
    "max_materials": 8
  }
}

PS3-class GameEngin target should prefer mobile_mid.

PS4/PS5 future targets can use larger offline assets, but runtime must still load scaled LODs on mobile.

⸻

23. CONTENTENGIN UI

The main surface:

// components/contentengin/ContentEnginStudio.tsx
'use client';
import { useState } from 'react';
type Mode = 'image-to-3d' | 'text-to-3d' | 'image-to-character';
export function ContentEnginStudio() {
  const [mode, setMode] = useState<Mode>('image-to-3d');
  const [prompt, setPrompt] = useState('');
  const [jobId, setJobId] = useState<string | null>(null);
  async function createJob() {
    const response = await fetch('/api/contentengin/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: mode,
        prompt,
        assetKind: mode === 'image-to-character' ? 'humanoid-character' : 'prop',
        polyBudget: mode === 'image-to-character' ? 15000 : 8000,
        rig: mode === 'image-to-character',
        animations: mode === 'image-to-character' ? ['idle', 'walk', 'run', 'jump'] : [],
        textureResolution: 1024,
      }),
    });
    const json = await response.json();
    setJobId(json.job.id);
  }
  return (
    <section className="contentengin-studio">
      <header>
        <h1>ContentEngin</h1>
        <p>Create game-ready 3D assets from prompts, images, and sketches.</p>
      </header>
      <div>
        <button onClick={() => setMode('image-to-3d')}>Image → 3D Prop</button>
        <button onClick={() => setMode('text-to-3d')}>Text → 3D Prop</button>
        <button onClick={() => setMode('image-to-character')}>Image → Rigged Character</button>
      </div>
      <textarea
        value={prompt}
        onChange={(event) => setPrompt(event.target.value)}
        placeholder="Describe the asset..."
      />
      <button onClick={createJob}>Create Asset</button>
      {jobId && <p>Job queued: {jobId}</p>}
    </section>
  );
}

⸻

24. 3D PREVIEW

Use Babylon.js or Three.js preview, but keep final GameEngin runtime independent.

Required preview features:

1. orbit camera
2. triangle count display
3. material count display
4. skeleton present/missing display
5. animation clip selector
6. export button
7. “Send to GameEngin cartridge” button

⸻

25. GAMEENGIN EXPORT

Create:

// lib/contentengin/exporters/gameenginManifestWriter.ts
import fs from 'fs/promises';
import path from 'path';
import type { ContentEnginAssetManifest } from '../assetTypes';
export async function writeGameEnginAssetEntry(args: {
  cartridgeId: string;
  manifest: ContentEnginAssetManifest;
}): Promise<string> {
  const cartridgeRoot = path.join(process.cwd(), 'public', 'cartridges', args.cartridgeId);
  const assetDir = path.join(cartridgeRoot, 'assets', 'generated', args.manifest.asset_id);
  await fs.mkdir(assetDir, { recursive: true });
  const entry = {
    asset_id: args.manifest.asset_id,
    kind: args.manifest.asset.kind,
    mesh_type: args.manifest.asset.mesh_type,
    glb: `assets/generated/${args.manifest.asset_id}/model.glb`,
    has_skeleton: args.manifest.asset.has_skeleton,
    animations: args.manifest.animations,
  };
  const manifestPath = path.join(assetDir, 'contentengin.asset.json');
  await fs.writeFile(manifestPath, JSON.stringify(entry, null, 2), 'utf-8');
  return manifestPath;
}

⸻

26. SUPABASE TABLES

Additive migration:

create table if not exists public.contentengin_jobs (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid,
  job_type text not null,
  status text not null default 'queued',
  progress integer not null default 0,
  request jsonb not null,
  result jsonb,
  error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table if not exists public.contentengin_assets (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid,
  asset_kind text not null,
  manifest jsonb not null,
  glb_url text not null,
  thumbnail_url text,
  source_hash text,
  created_at timestamptz not null default now()
);
create index if not exists contentengin_jobs_owner_status_idx
on public.contentengin_jobs(owner_id, status, created_at desc);
create index if not exists contentengin_assets_owner_kind_idx
on public.contentengin_assets(owner_id, asset_kind, created_at desc);

⸻

27. WORKER SETUP

The ContentEngin worker image must include:

node 25.9.0
python 3.11+
blender 4.x
ffmpeg
git
curl
python packages for selected model provider

For TripoSR worker:

mkdir -p vendor
git clone https://github.com/VAST-AI-Research/TripoSR vendor/TripoSR
python3 -m pip install -r vendor/TripoSR/requirements.txt

For Blender:

blender --background --python scripts/contentengin/blender-cleanup.py -- --help

For GLB validation:

npx gltf-validator public/contentengin/generated/{asset_id}/cleaned.glb

⸻

28. ACCEPTANCE TESTS

ContentEngin is not accepted unless these tests pass:

1. Image upload creates a job.
2. Job record can be fetched.
3. Image-to-3D provider produces raw mesh.
4. Blender cleanup produces .glb.
5. .glb exists and is under configured size budget.
6. Character job produces has_skeleton: true.
7. Animation job produces at least one animation clip.
8. Asset manifest includes triangle count and warnings.
9. Export to GameEngin writes a cartridge asset entry.
10. Mobile preview can load the final .glb.

⸻

29. VITEST TEST

Create:

// tests/contentengin-spec.test.ts
import { describe, expect, it } from 'vitest';
import { createContentJob, getContentJob } from '@/lib/contentengin/contentJobQueue';
describe('ContentEngin job queue', () => {
  it('creates image-to-character jobs with rigging intent', () => {
    const job = createContentJob('owner-1', {
      type: 'image-to-character',
      sourceImageUrl: '/uploads/hero.png',
      assetKind: 'humanoid-character',
      polyBudget: 15000,
      rig: true,
      animations: ['idle', 'walk', 'run', 'jump'],
      textureResolution: 1024,
    });
    const read = getContentJob(job.id, 'owner-1');
    expect(read.request.type).toBe('image-to-character');
    expect(read.request.rig).toBe(true);
    expect(read.request.animations).toContain('walk');
  });
  it('rejects jobs from other owners', () => {
    const job = createContentJob('owner-1', {
      type: 'image-to-3d',
      sourceImageUrl: '/uploads/prop.png',
      assetKind: 'prop',
      polyBudget: 8000,
      textureResolution: 1024,
    });
    expect(() => getContentJob(job.id, 'owner-2')).toThrow();
  });
});

⸻

30. IMPLEMENTATION ORDER

Do not build everything at once.

Correct order:

1. Add ContentEngin types.
2. Add job queue.
3. Add create/read job API.
4. Add Studio UI.
5. Add Blender cleanup script.
6. Add manual provider wrapper.
7. Add TripoSR provider.
8. Add asset manifest writer.
9. Add GLB preview.
10. Add GameEngin export.
11. Add rigging fallback.
12. Add animation fallback.
13. Add Supabase persistence.
14. Add optional Hunyuan provider.
15. Add optional external provider adapters.

⸻

31. NON-NEGOTIABLE RULES

1. ContentEngin must output real files.
2. Generated assets must have manifests.
3. No UI may say an asset is “game-ready” unless validation passes.
4. Heavy AI generation must not block the mobile browser thread.
5. Final runtime format is .glb.
6. Rigged/moving characters must be called rigged/skinned meshes.
7. Skeletons must be validated.
8. Animations must be listed by clip name.
9. GameEngin receives compressed, validated assets only.
10. DREAMengin must treat ContentEngin as an asset production Engin, not a gallery.

⸻

32. DEFINITION OF DONE

ContentEngin v1 is complete when a user can:

1. Open ContentEngin on mobile.
2. Upload a 2D character drawing.
3. Submit “turn this into a game-ready character.”
4. Receive a generated 3D mesh.
5. Clean/decimate it automatically.
6. Rig it with a skeleton.
7. Add idle/walk/run/jump animation clips.
8. Preview it in browser.
9. Export it as .glb.
10. Send it into a GameEngin cartridge.

That is the minimum real target.

This is grounded as a real build spec, not just architecture language.
