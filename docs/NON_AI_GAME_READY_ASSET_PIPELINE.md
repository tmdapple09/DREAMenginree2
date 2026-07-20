# DREAMengin deterministic game-ready asset pipeline

This subsystem extends the existing ContentEngin, GameEngin, and RenderEngin stack. It does not introduce a second mesh kernel. Procedural construction still goes through the existing ContentEngin geometry builders and imported indexed meshes continue through the existing isosurface repair path.

## Design translation

The reusable idea is whole-object structural analysis:

| Structural idea | Game-asset implementation |
| --- | --- |
| Joint state | The complete indexed mesh, attributes, topology, LODs, collision, and render evidence |
| Incidence graph | Vertex-edge-triangle adjacency, boundaries, components, winding, and two-ring neighborhoods |
| Multi-scale sections | Intrinsic 16-cell families with tesseract edge, face, slice, and Walsh-Hadamard measurements |
| Deterministic proof | A geometry-bound v2 certificate with SHA-256 digests |
| Reduction | Topology repair plus source-detail LOD generation through the existing geometry builder |
| Runtime verification | GameEngin byte-integrity checks and RenderEngin certificate/geometry/performance gates |

No AI model, remote embedding service, or generated classifier is required.

## Scan identities

ContentEngin emits two structural identities:

- **Canonical identity** is invariant to translation, rotation, and uniform scale. It is used for duplicate discovery, family grouping, and LOD similarity.
- **Oriented identity** preserves directional information. It is used when asset heading, up-axis, or asymmetric placement matters.

The scanner also emits an exact geometry digest over ordered Float32-compatible vertex positions and triangle indices. A short UI label may be derived from a digest, but the authoritative identities are full SHA-256 values.

## Deterministic geometry checks

The scanner audits:

- invalid and degenerate triangles
- duplicate faces and duplicate vertices
- boundary loops and open chains
- non-manifold edges
- inconsistent winding
- isolated vertices and disconnected components
- skinny triangles
- self-intersections for standalone meshes
- pivot displacement
- triangle and memory budgets

Procedural multi-part assemblies intentionally disable whole-assembly self-intersection blocking because independently authored pieces such as wheels, axles, armor, clothing, and body segments may overlap by design. Each generated part still has valid indexed topology and the exported assembly remains certificate-bound.

## Repair and preparation

`Make Game Ready` uses the existing repair and construction paths to:

1. remove invalid, degenerate, and duplicate faces;
2. remove isolated vertices and compact indices;
3. correct connected winding conflicts where possible;
4. choose seam-preserving or welded repair based on the resulting scan;
5. generate LOD0, LOD1, and LOD2 from the original procedural source at reduced detail;
6. generate box and sphere collision proxies;
7. rescan every exported LOD and issue an independent certificate.

LOD generation does not sample or delete arbitrary triangles. It lowers source segment detail through the existing geometry builder, preserving closed surfaces, UVs, tangents, material assignment, and predictable topology.

## Exported GLB data

ContentEngin source geometry is authored Z-up. Export converts positions, normals, tangents, skeleton metadata, and collision data into a right-handed, Y-up, -Z-forward, meter-based game coordinate system.

Every generated GLB contains:

- indexed positions and normals
- `TEXCOORD_0`
- tangents
- material-separated primitives
- embedded procedural base-color PNG textures
- the LOD-specific scan and certificate
- canonical and oriented identities
- exact geometry and scan digests

The GLB inspector decodes the binary accessors, reconstructs the indexed mesh, recomputes the geometry digest, and rejects a certificate that does not match the actual bytes.

## Bundle contents

A ContentEngin bundle contains:

- `model.glb`
- `model.lod1.glb`
- `model.lod2.glb`
- `collision.json`
- `manifest.json`
- `recipe.json`
- `validation.json`
- `scan.json`
- `thumbnail.webp`
- optional `source_analysis.json`

`manifest.json` includes independent evidence for every LOD and SHA-256 integrity values for every payload file. The manifest itself is excluded because a file cannot contain a stable hash of its own final bytes.

## GameEngin admission

GameEngin validates:

- the base and LOD certificates;
- canonical, oriented, geometry, and scan evidence;
- model, LOD, scan, and collision URLs;
- SHA-256 integrity syntax;
- collision availability;
- decreasing LOD complexity.

`fetchVerifiedAssetBytes` verifies the actual downloaded bytes before an asset is admitted to runtime storage or rendering.

## RenderEngin admission

For ContentEngin GLB handoffs, RenderEngin treats the embedded GLB certificate as the authoritative export certificate. It:

1. verifies optional transport integrity;
2. parses all mesh primitives, not only the first material group;
3. validates the embedded certificate and evidence;
4. recomputes the geometry digest from the decoded mesh;
5. rejects a mismatch between a supplied handoff certificate and the embedded certificate;
6. records static admission as provisional;
7. requires at least 20 observed frame samples before the performance gate can pass.

A static certificate alone is not presented as measured render performance.

## Current boundary

The pipeline is a deterministic geometry and runtime-readiness system. It does not claim to solve semantic rigging, animation quality, authored texture quality, or artistic suitability. Those are separate authoring concerns and should not be hidden inside a topology certificate.
