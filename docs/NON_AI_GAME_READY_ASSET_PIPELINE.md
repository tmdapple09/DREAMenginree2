# DREAMengin non-AI game-ready asset pipeline

This revision adds a deterministic scan-and-build path to the existing ContentEngin, GameEngin, and RenderEngin stack. It does not add a second geometry kernel. Mesh generation and repair continue to use `engins/isosurfaceDualContouring.ts` and `engins/isosurfaceAssetPipeline.ts`.

## Translation of the earlier mathematics

The useful ideas were retained, but their coordinates now come from mesh structure rather than cryptocurrency state:

| Earlier idea | Game-asset translation |
| --- | --- |
| Whole-state solve | Scan the complete indexed mesh instead of checking isolated triangles |
| Graph incidence | Vertex, edge, triangle, boundary, component, and two-ring adjacency |
| Hidden-coordinate state | Geometry defects and runtime costs that are not obvious from the rendered surface |
| Cell / edge / face / slice sections | Four intrinsic 16-cell mesh embeddings and their 32 edge, 24 face, and slice contrasts |
| Walsh modes | Deterministic multi-scale signatures for topology and shape comparison |
| Compatibility energy | Topology validity, manifoldness, component coherence, memory, triangle budget, and LOD stability |
| Proof certificate | A portable game-ready certificate embedded in GLB, ContentEngin bundles, GameEngin entries, and RenderEngin intents |
| Peeling / reduction | Deterministic repair, vertex welding, invalid-triangle removal, compaction, and triangle-budget reduction |

## Intrinsic scan families

`engins/contentengin/scan/intrinsicAssetScanner.ts` derives four 4D embeddings from the actual mesh:

1. **Spatial shape** — centroid octant plus radial shell.
2. **Normal and curvature** — normal orientation plus local curvature state.
3. **Topology neighborhood** — boundary, non-manifold, first-ring degree, and two-ring mass.
4. **Triangle incidence** — triangle-incidence quantile plus connected-component coordinates.

Each family produces 16 cells, 32 tesseract-edge contrasts, 24 square-face contrasts, four slice contrasts, and 16 Walsh-Hadamard modes. The normalized modes form a deterministic similarity vector and signature. No model inference, remote AI, or generated labels are involved.

## Reachable product flow

1. Upload an image or indexed GLB in ContentEngin.
2. ContentEngin creates or imports a real mesh and immediately scans it.
3. **Make Game Ready** runs the existing deterministic repair path, fits a triangle budget, creates three LOD levels, and creates a collision proxy.
4. The UI shows topology findings, similarity signature, section energies, LOD counts, and collision output.
5. GLB export embeds the certificate and scan metadata.
6. The ContentEngin bundle writes `scan.json` and exposes the certificate in `manifest.json`.
7. `pnpm ce export-gameengin` writes a real GameEngin asset entry containing the model URL, scan URL, certificate, and signature.
8. GameEngin rejects a supplied ContentEngin certificate when it is not game-ready or does not match the entry signature.
9. RenderEngin receives the certificate and similarity signature in the existing render intent and can combine static scan readiness with observed frame-performance evidence.

## Similarity without AI

`compareAssetSimilarity` compares normalized intrinsic vectors with cosine similarity. This supports deterministic duplicate detection, variant grouping, LOD-family validation, repair regression checks, and asset-library search without embeddings from an AI model.

## Files added to asset bundles

- `model.glb`
- `manifest.json`
- `recipe.json`
- `validation.json`
- `scan.json`
- `thumbnail.webp`
- optional `source_analysis.json`

The GLB, manifest, scan file, GameEngin entry, and RenderEngin intent all carry the same signature and certificate, avoiding duplicate truth sources.
