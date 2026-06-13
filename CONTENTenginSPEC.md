# CONTENTENGIN PLATFORM – ABSOLUTE FINAL TECHNICAL SPECIFICATION  
**Document ID:** CONTENTENGIN-SPEC-2026-06-13-FINAL  
**Project:** DREAMengin Subsystem — Procedural Asset Creation Platform  
**Repository:** `appthemanger-ctrl/DREAMengin`  
**Baseline Target:** PS3-class mobile/web assets (PS4 | PS5 profiles optional)  
**Purpose:** Generate, edit, validate, and export **game-ready** assets **without AI dependence**.  
**Status:** Authoritative. Supersedes all earlier ContentEngin drafts.  
---
## TABLE OF CONTENTS
1. [Design Laws](#1-design-laws)  
2. [Asset Taxonomy](#2-asset-taxonomy)  
3. [Universal Asset Structure](#3-universal-asset-structure)  
4. [Procedural Construction Pipeline](#4-procedural-construction-pipeline)  
5. [Material / Shader System](#5-material--shader-system)  
6. [Living Assets (Characters & Creatures)](#6-living-assets)  
7. [Vehicle Assets](#7-vehicle-assets)  
8. [Architecture & Prop Assets](#8-architecture--prop-assets)  
9. [Environment Assets (Terrain / Flora / Water / Sky)](#9-environment-assets)  
10. [Physics / Collision / LOD](#10-physics--collision--lod)  
11. [Validation Pipeline](#11-validation-pipeline)  
12. [Export Profiles (PS3 | PS4 | PS5)](#12-export-profiles)  
13. [Directory Layout & Code Modules](#13-directory-layout--code-modules)  
14. [Generator CLI & API Contracts](#14-generator-cli--api-contracts)  
---
## 1  DESIGN LAWS
| **Law** | **Statement** |
|---------|---------------|
| **L1 (Offline-Ready)** | Entire pipeline must function with **zero AI providers**. |
| **L2 (No Blobs)** | Every asset is a **hierarchical part-tree**; no flat meshes. |
| **L3 (Deterministic)** | Same *recipe + seed + params* → identical output bytes. |
| **L4 (Game-Ready First)** | Validation must pass **before** asset is tagged *game-ready*. |
| **L5 (Editability)** | Recipes are round-trippable; users can reopen & tweak any parameter. |
---
## 2  ASSET TAXONOMY

Living
├─ Humanoid … Adult / Teen / Child / Stylized / Chibi
├─ Animal …… Mammal / Bird / Reptile / Fish / Insect
└─ Creature … Dragon / Monster / Hybrid

Vehicles
├─ Land ………… Car / Truck / Van / Tank
├─ Human-Powered Bicycle / Scooter
├─ Motorcycle
├─ Aircraft …… Jet / Helicopter
└─ Watercraft … Boat / Ship

Architecture & Props
├─ Building / Room / Furniture / Weapon / Tool / Decorative
└─ Civil ………… Bridge / Road / Sign

Environment
├─ Terrain / Mountain / River / Lake / Ocean
├─ Tree / Bush / Grass / Flower / Rock
└─ Sky / Cloud / Atmosphere / Weather

Materials
├─ Metal / Wood / Stone / Glass / Plastic
└─ Cloth / Leather / Skin / Hair / Water / Toon

---
## 3  UNIVERSAL ASSET STRUCTURE
```ts
/** One GLB = one ContentAsset manifest. */
export interface ContentAsset {
  id: string;                  // UUID
  category: string;            // humanoid | vehicle | building | …
  subcategory: string;         // adult | car | house | …
  seed: number;                // RNG seed for determinism
  recipe: ContentRecipe;       // full param + part tree
  parts: PartNode[];           // hierarchical geometry data
  materials: MaterialDef[];    // PBR / toon params
  shaders: ShaderDef[];        // shader slots
  collision: CollisionBlock;   // convex / capsule / mesh
  lods: LodDef[];              // 0 = highest
  exportProfile: ExportProfile;// ps3 | ps4 | ps5
  validation: ValidationReport;// game-ready = true|false
}

3.1 Part Node

interface PartNode {
  id: string;                 // "LeftForearm"
  label: string;              // human-readable
  parentId?: string;
  dims: Vec3;                 // meters
  offset: Transform;          // pos/rot/sca local to parent
  primitive: PrimitiveSpec;   // box | sphere | capsule | lathe | custom
  materialId: string;         // slot in materials[]
  shaderId: string;           // slot in shaders[]
  rig?: RigWeights;           // bone weights if skinned
  children?: PartNode[];
}

⸻

4  PROCEDURAL CONSTRUCTION PIPELINE

Recipe.json
   ├─► Parameter Resolver
   ├─► Primitive Builder       (box/sphere/capsule/lathe/sweep)
   ├─► Modifier Stack          (bevel/mirror/boolean/noise)
   ├─► Material Painter        (PBR or toon)
   ├─► UV Unwrap               (xatlas / LSCM)
   ├─► Collision Generator     (convex / capsules)
   ├─► LOD Generator           (meshoptimizer 75/40/20 %)
   ├─► Validator               (PS3 budget rules)
   └─► GLB Exporter            (gltf-transform)

CLI:

pnpm ce build --recipe hero.recipe.json --out hero.glb --profile ps3

⸻

5  MATERIAL / SHADER SYSTEM

Shader ID	Use Case	Mobile Inputs	Notes
CE_PBR_MOBILE	default	baseColor, roughness, metallic, normal, ao	single 1024² set
CE_TOON	stylized	baseColor, shadowRamp	cel shading 3 steps
CE_WATER	water	normalXY, flowMap, depthTint	reflection optional
CE_FOLIAGE	leaves/grass	baseColor, windWeight	vertex wind anim

Material JSON:

{
  "id": "mat_blade",
  "shader": "CE_PBR_MOBILE",
  "baseColor": "#a8abb4",
  "roughness": 0.2,
  "metallic": 0.9,
  "normalTex": "blade_norm.png"
}

⸻

6  LIVING ASSETS

6.1 Humanoid Parameter Schema (excerpt)

Parameter	Range	Default	Affects
height_m	1.2 – 2.2	1.72	global scale
head_scale	0.8 – 1.3	1.0	Head part
shoulder_w_m	0.30 – 0.60	0.42	Torso
waist_w_m	0.22 – 0.40	0.28	Waist
leg_len_ratio	0.40 – 0.55	0.48	Leg parts
arm_len_ratio	0.28 – 0.35	0.31	Arm parts
finger_detail	none/simple/full	simple	Hand sub-parts

Skeleton: 59 bones (hips → left/right fingers).
Animations: idle, walk, run, jump, attack, hit, death (∼30 fps, ≤2 MB).

6.2 Animal / Creature

Quadruped ratios:

Metric	Range	Notes
withers_h_m	0.4 – 2.0	height at shoulders
body_len_m	0.5 – 3.5	nose→tail root
leg_len_m	0.2 – 1.8	foot→hip
tail_len_m	0.1 – 2.0	optional

Skeleton ≤ 75 bones.
Gait clips: walk, trot, gallop, idle, jump (if capable).

⸻

7  VEHICLE ASSETS

7.1 Car/Truck Grammar

Param	Range / Options	Default
wheelbase_m	1.8 – 4.2	2.7
track_w_m	1.2 – 2.0	1.6
wheel_r_m	0.25 – 0.50	0.35
door_count	2/4	4
bed_len_m	0 – 2.5	0 (car)
paint	hex	#222
trim	hex	#777

LOD0 ≤ 20 k tri; LOD1 ≤ 10 k; LOD2 ≤ 3 k.
Physics: box body + 4 wheel colliders.

7.2 Bicycle / Motorcycle

Key parts: frame tubes, fork, wheelL/R, pedals, chain, crank, seat, handlebar.

⸻

8  ARCHITECTURE & PROP ASSETS

8.1 Building Generator (house)

Recipe:

{
  "floors": 2,
  "floor_h_m": 3.0,
  "width_m": 8,
  "depth_m": 6,
  "roof": "gabled",
  "window_grid": "3x2",
  "door_style": "single",
  "materials": {
    "wall": "#d0c9b8",
    "roof": "#2e3035",
    "frame": "#704428"
  }
}

Outputs:

* exterior walls, roof, windows, door, simple interior floors.
* collision = aggregated boxes.
* LODs 0–2.

8.2 Weapon Recipe (sword)

{
  "type": "sword",
  "blade_len_m": 1.1,
  "blade_w_m": 0.12,
  "guard_style": "curved",
  "grip_style": "wrapped",
  "material_blade": "#a9aaac",
  "material_handle": "#3b2c23"
}

⸻

9  ENVIRONMENT ASSETS

9.1 Terrain

Input: heightmap (function/image, ≤ 1024²).
Modifiers: erosion, river carve, noise.
Output: tiled mesh 256², splatmap, collider LOD.

9.2 Tree (L-system)

Param	Range	Default
trunk_h_m	2 – 15	6
trunk_r_m	0.1 – 0.8	0.25
branch_lvl	1 – 4	3
leaf_type	broadleaf/needle/palm	broadleaf

Wind weights per vertex for shader CE_FOLIAGE.

9.3 Water

Plane or river spline.
Shader inputs: waveAmp, waveLen, flowSpeed, depthTint.
PS3 profile: reflection off, depthFade only.
PS4: planar reflection.
PS5: screen-space reflection.

⸻

10  PHYSICS / COLLISION / LOD

Asset	Collider Type	Notes
Humanoid	capsule + ragdoll option	radius = shoulder_w/2
Quadruped	capsule pair	body + head
Vehicle	box + 4 wheel colliders	mass from recipe
Building	convex decomposition	floor-by-floor
Prop	convex hull	fallback box

LOD ratios: 75 % / 40 % / 20 % tris by meshoptimizer.

⸻

11  VALIDATION PIPELINE

Check	PS3 Limit	Fail?
Tris (LOD0)	≤ 50 000	error
Materials	≤ 8	warn
Texture Res	≤ 2048	warn
Bones	≤ 75	error
Weights/vert	≤ 4	error
GLB size	≤ 15 MB	error

JSON report:

{ "game_ready": true, "warnings": [] }

⸻

12  EXPORT PROFILES

Profile	Tri LOD0	TexMax	Shaders
ps3	50 k	1024	CE_PBR_MOBILE
ps4	100 k	2048	PBR + TOON
ps5	200 k	4096	all shaders

pnpm ce export --profile ps3

⸻

13  DIRECTORY LAYOUT & CODE MODULES

lib/contentengin/
  assetTypes.ts
  recipes/
  grammars/          ← character.ts, vehicle.ts, tree.ts …
  builders/          ← primitives & modifiers
  pipeline/
      build.ts
      validate.ts
      export.ts
  materials/
  shaders/
  cli.ts
components/contentengin/
app/api/contentengin/
scripts/contentengin/
tests/contentengin/

⸻

14  GENERATOR CLI & API CONTRACTS

14.1 CLI

pnpm ce init    # scaffold recipe
pnpm ce build   --recipe r.json --out asset.glb --profile ps3
pnpm ce inspect asset.glb
pnpm ce validate asset.glb
pnpm ce export  asset.glb --to cartridges/mad-maxi/assets/

14.2 REST API

Method	Path	Description
POST	/api/contentengin/jobs	queue build job (body = recipe)
GET	/api/contentengin/jobs/:id	job status / progress
GET	/api/contentengin/assets/:id	GLB + manifest
POST	/api/contentengin/assets/:id/export/gameengin	copy asset into cartridge

⸻

END OF SPECIFICATION
