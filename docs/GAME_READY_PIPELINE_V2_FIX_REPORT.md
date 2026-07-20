# Game-ready pipeline v2 fix report

## Corrected defects

- Replaced the 32-bit UI-only fingerprint as the authority with full SHA-256 canonical, oriented, geometry, scan, and certificate digests.
- Made canonical similarity invariant to translation, rotation, uniform scale, and component traversal numbering in the tested cases.
- Kept a separate oriented identity for directional assets.
- Bound certificates to the decoded indexed geometry rather than trusting metadata alone.
- Added strict certificate field, range, and payload-digest validation.
- Added duplicate-face, winding, self-intersection, pivot, and expanded topology diagnostics.
- Added actual duplicate-face and winding repair behavior and residual-repair reporting.
- Replaced arbitrary triangle-removal LOD behavior with source-detail LOD generation through the existing geometry builder.
- Added UV and tangent generation to the procedural geometry builders.
- Corrected cylinder caps and ellipsoid poles to avoid generated degenerates.
- Added embedded material textures, validated UV/tangent bases, preserved material-separated GLB primitives, and converted source Z-up geometry to game-standard Y-up export coordinates.
- Exported real LOD0, LOD1, and LOD2 GLBs with independent scans and certificates.
- Added bounded compound collision generation and converted collision transforms into the same Y-up coordinate system as the GLB.
- Added SHA-256 integrity for every non-manifest bundle payload; the manifest is intentionally excluded from self-hashing.
- Added GameEngin downloaded-byte verification.
- Updated RenderEngin to parse all GLB primitives, verify embedded certificates, recompute geometry identity, and distinguish provisional static admission from observed performance approval.
- Removed the unused fallback mesh-reduction implementation from the GLB exporter.

## Validation performed in the repair environment

- strict semantic TypeScript checks for the scanner, repair builder, geometry builder, exporter, manifest, validation, integrity, and GameEngin manifest modules;
- syntax transpilation for modified TS and TSX files;
- SHA-256 known-vector verification;
- canonical identity invariance under translation, rotation, and uniform scale;
- oriented identity sensitivity;
- duplicate-face repair;
- car and humanoid LOD export with UV, tangent, certificate, and geometry-byte verification;
- end-to-end bundle creation with recomputed SHA-256 validation for every payload;
- GameEngin manifest admission;
- RenderEngin multi-primitive GLB parsing and embedded geometry-certificate binding;
- provisional and observed render-performance gate behavior.

The complete repository package does not include installed dependencies. The targeted checks above are the checks executed in this repair environment; they are not a claim that every unrelated repository test passed.
