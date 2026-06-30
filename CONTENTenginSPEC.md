# CONTENTENGIN PLATFORM – ABSOLUTE FINAL TECHNICAL SPECIFICATION

<!-- DREAMENGIN_DOCUMENT_ALIGNMENT_GUARD_START -->
## DREAMengin Vision Alignment Guard

This document must not drift away from the DREAMengin canonical product contract.

Interpret this file under these rules:

- DREAMengin is a web-native creative OS/world, not disconnected pages.
- Dreams, posts, messages, games, assets, tools, settings, profiles, media, workspaces, and shared sessions must operate as one connected system.
- Every visible feature must satisfy: visible user action → reachable handler → real runtime/API/state behavior → persisted or visible result → clear feedback/error state.
- DreamDMBar is the canonical search/control/menu layer.
- DreamR owns feed/profile/posts/comments/messages/social identity, with one canonical edit-profile path.
- HomeDream and DreamSpace must be real operating surfaces, not decorative grids.
- Engins are first-class capabilities with real surfaces, state, actions, runtime behavior, and mobile-smooth UI.
- RenderEngin is rendering technology used by Engins, especially ContentEngin first, not a standalone fake destination.
- Settings, language, uploads, media, YouTube behavior, customization, Shared Dreams, offline behavior, performance, security, accessibility, and observability must connect to canonical state.
- AI-like behavior should be deterministic and work without live AI where possible.
- Code should follow the DREAMengin grammar: directive → imports → identity/law → constants → types → helpers → owned state → derived gates → named actions → effects/cleanup → render/return → export.

If this document describes a feature, route, surface, tool, setting, or Engin behavior, it must not imply fake buttons, decorative controls, duplicate ownership, unreachable pages, hidden failures, or placeholder panels pretending to work.
<!-- DREAMENGIN_DOCUMENT_ALIGNMENT_GUARD_END -->

**Document ID:** CONTENTENGIN-SPEC-2026-06-13-FINAL  
**Project:** DREAMengin Subsystem — Procedural Asset Creation Platform  
**Repository:** `appthemanger-ctrl/DREAMengin`  
**Baseline Target:** PS3-class mobile/web assets  
**Future Profiles:** PS4-class and PS5-class asset profiles  
**Purpose:** Generate, edit, rig, validate, and export game-ready assets without AI dependence.  
**Status:** Authoritative. Supersedes all earlier ContentEngin drafts.

---

## TABLE OF CONTENTS

1. [Design Laws](#1-design-laws)  
2. [Performance and Asset Targets](#2-performance-and-asset-targets)  
3. [Asset Taxonomy](#3-asset-taxonomy)  
4. [Universal Asset Structure](#4-universal-asset-structure)  
5. [Procedural Construction Pipeline](#5-procedural-construction-pipeline)  
6. [Photo Reference and Pixel Analysis System](#6-photo-reference-and-pixel-analysis-system)  
7. [Material, Texture, Color, and Shader System](#7-material-texture-color-and-shader-system)  
8. [Living Asset Systems](#8-living-asset-systems)  
9. [Vehicle Asset Systems](#9-vehicle-asset-systems)  
10. [Architecture, Roads, Bridges, and Props](#10-architecture-roads-bridges-and-props)  
11. [Environment, Geography, Terrain, Flora, Water, and Sky](#11-environment-geography-terrain-flora-water-and-sky)  
12. [Deterministic Non-AI Auto-Rigging System](#12-deterministic-non-ai-auto-rigging-system)  
13. [Physics, Collision, Animation, and LOD](#13-physics-collision-animation-and-lod)  
14. [Validation Pipeline](#14-validation-pipeline)  
15. [Export Profiles](#15-export-profiles)  
16. [Directory Layout and Code Modules](#16-directory-layout-and-code-modules)  
17. [CLI and API Contracts](#17-cli-and-api-contracts)  
18. [Implementation Requirements](#18-implementation-requirements)  
19. [Definition of Done](#19-definition-of-done)

---

## 1. DESIGN LAWS

| Law | Statement |
|---|---|
| L1 — No AI Dependency | ContentEngin must function with zero AI providers, zero model APIs, and zero cloud generation dependencies. |
| L2 — No Blob Assets | Every generated asset must remain a named, editable hierarchy of parts. |
| L3 — Deterministic Generation | Same recipe, same seed, same parameters, same engine version equals same generated asset. |
| L4 — Game-Ready First | An asset cannot be marked game-ready unless validation passes. |
| L5 — Editable Construction | Every mesh must preserve its recipe, parameters, materials, dimensions, part tree, collision metadata, and export profile. |
| L6 — Full Build, Not Iterative Toy | ContentEngin is built as a full procedural asset engine from the start. It may be improved later, but the first implementation must include all major asset families. |
| L7 — Mobile Creator, Worker Builder | The phone is the creator surface. Heavy mesh operations may run in a local worker, server worker, or GitHub Action. |
| L8 — GameEngin Native Output | The final runtime output is `.glb` plus manifest metadata, ready for GameEngin cartridges. |
| L9 — Procedural First | ContentEngin generates assets through rules, math, parts, templates, user controls, modifiers, and deterministic pipelines. |
| L10 — AI Optional Only | AI may exist later as an optional provider, but it must never become the foundation. |

---

## 2. PERFORMANCE AND ASSET TARGETS

ContentEngin’s default profile is PS3-class asset output because PS3-era budgets are practical for mobile WebGPU/WebGL-style browser game delivery.

### 2.1 Hardware Reference Comparison

| Console | CPU | GPU | Memory | Practical Meaning for ContentEngin |
|---|---:|---:|---:|---|
| PS3 | Cell Broadband Engine, 1 PPE + 6 usable SPEs | RSX, roughly 240 GFLOPS class | 256 MB XDR + 256 MB GDDR3 | Good baseline for mobile-friendly assets, modest shaders, careful memory. |
| PS4 | 8-core AMD Jaguar | 1.84 TFLOPS | 8 GB GDDR5 | Higher triangle budgets, stronger PBR, larger textures. |
| PS5 | 8-core Zen 2 | 10.28 TFLOPS | 16 GB GDDR6 | Future high-end profile only; not default for mobile browser. |

### 2.2 Asset Budget Profiles

| Profile | Target | LOD0 Triangles | Texture Max | Materials | Bones | GLB Size |
|---|---|---:|---:|---:|---:|---:|
| `ps3` | Default mobile/web | 50,000 | 1024 | 8 | 75 | 15 MB |
| `ps4` | Higher-end web/mobile/tablet | 100,000 | 2048 | 12 | 128 | 35 MB |
| `ps5` | Future/high-end/offline | 200,000 | 4096 | 20 | 256 | 75 MB |

### 2.3 Runtime Rule

ContentEngin may author PS4/PS5 assets, but GameEngin must always be able to request a PS3-safe export.

---

## 3. ASSET TAXONOMY

ContentEngin must support all major game asset families.

```text
ContentEngin Assets
├── Living Assets
│   ├── Humanoid
│   │   ├── Adult
│   │   ├── Teen
│   │   ├── Child
│   │   ├── Stylized
│   │   ├── Chibi
│   │   ├── Heroic
│   │   └── Custom
│   ├── Animal
│   │   ├── Mammal
│   │   ├── Bird
│   │   ├── Reptile
│   │   ├── Fish
│   │   ├── Insect
│   │   └── Amphibian
│   └── Creature
│       ├── Dragon
│       ├── Monster
│       ├── Hybrid
│       ├── Quadruped Creature
│       ├── Winged Creature
│       └── Serpentine Creature
│
├── Vehicle Assets
│   ├── Land Vehicle
│   │   ├── Car
│   │   ├── Truck
│   │   ├── Van
│   │   ├── Bus
│   │   ├── Tank
│   │   └── Utility Vehicle
│   ├── Human-Powered Vehicle
│   │   ├── Bicycle
│   │   ├── Scooter
│   │   └── Cart
│   ├── Motorcycle
│   ├── Aircraft
│   │   ├── Plane
│   │   ├── Jet
│   │   ├── Helicopter
│   │   └── Drone
│   └── Watercraft
│       ├── Boat
│       ├── Ship
│       ├── Submarine
│       └── Raft
│
├── Architecture and Civil Assets
│   ├── Building
│   ├── Room
│   ├── House
│   ├── Tower
│   ├── Wall
│   ├── Door
│   ├── Window
│   ├── Stairs
│   ├── Bridge
│   ├── Road
│   ├── Sidewalk
│   ├── Tunnel
│   └── Rail
│
├── Environment Assets
│   ├── Terrain
│   ├── Mountain
│   ├── Cliff
│   ├── Cave
│   ├── Rock
│   ├── River
│   ├── Lake
│   ├── Ocean
│   ├── Waterfall
│   ├── Tree
│   ├── Bush
│   ├── Grass
│   ├── Flower
│   ├── Vine
│   ├── Cloud
│   ├── Sky
│   └── Atmosphere
│
├── Props
│   ├── Weapon
│   ├── Tool
│   ├── Container
│   ├── Furniture
│   ├── Lamp
│   ├── Sign
│   ├── Collectible
│   ├── Door Key
│   ├── Machine Part
│   └── Decorative Object
│
└── Materials
    ├── Skin
    ├── Hair
    ├── Fur
    ├── Feather
    ├── Scale
    ├── Cloth
    ├── Leather
    ├── Metal
    ├── Wood
    ├── Stone
    ├── Glass
    ├── Plastic
    ├── Rubber
    ├── Water
    ├── Dirt
    ├── Sand
    ├── Snow
    ├── Lava
    └── Toon
```

---

## 4. UNIVERSAL ASSET STRUCTURE

Every asset is a `ContentAsset`.

```ts
export type ExportProfile = 'ps3' | 'ps4' | 'ps5';

export type ContentAssetCategory =
  | 'humanoid'
  | 'animal'
  | 'creature'
  | 'vehicle'
  | 'architecture'
  | 'civil'
  | 'environment'
  | 'prop'
  | 'material';

export interface ContentAsset {
  id: string;
  category: ContentAssetCategory;
  subcategory: string;
  seed: number;
  contentenginVersion: string;
  recipe: ContentRecipe;
  parts: PartNode[];
  materials: MaterialDef[];
  shaders: ShaderDef[];
  skeleton?: SkeletonDef;
  animations: AnimationClipDef[];
  collision: CollisionBlock;
  physics?: PhysicsDef;
  lods: LodDef[];
  exportProfile: ExportProfile;
  validation: ValidationReport;
}

export interface ContentRecipe {
  assetType: string;
  seed: number;
  profile: ExportProfile;
  parameters: Record<string, unknown>;
  materialParameters: Record<string, unknown>;
  partOverrides?: Record<string, Partial<PartNode>>;
  sourceImage?: SourceImageAnalysis;
}

export interface Vec2 {
  x: number;
  y: number;
}

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface Transform {
  position: Vec3;
  rotation: Vec3;
  scale: Vec3;
}

export interface PartNode {
  id: string;
  label: string;
  parentId?: string;
  category: string;
  dimensions: Vec3;
  transform: Transform;
  primitive: PrimitiveSpec;
  materialId: string;
  shaderId: string;
  rig?: RigWeights;
  collision?: CollisionShape;
  metadata: Record<string, unknown>;
  children: PartNode[];
}

export type PrimitiveKind =
  | 'box'
  | 'beveled-box'
  | 'sphere'
  | 'ellipsoid'
  | 'capsule'
  | 'cylinder'
  | 'cone'
  | 'tube'
  | 'plane'
  | 'ribbon'
  | 'lathe'
  | 'extrude'
  | 'sweep'
  | 'custom-contour'
  | 'terrain-grid'
  | 'water-plane';

export interface PrimitiveSpec {
  kind: PrimitiveKind;
  segments?: number;
  rings?: number;
  bevel?: number;
  radius?: number;
  contour?: Vec2[];
  path?: Vec3[];
  depth?: number;
  smoothing?: number;
}

export interface MaterialDef {
  id: string;
  name: string;
  shaderId: string;
  baseColor: string;
  shadowColor?: string;
  highlightColor?: string;
  roughness: number;
  metallic: number;
  opacity: number;
  normalStrength?: number;
  textureSlots: TextureSlots;
}

export interface TextureSlots {
  baseColor?: string;
  normal?: string;
  roughnessMetallic?: string;
  ao?: string;
  height?: string;
  emission?: string;
  opacity?: string;
}

export interface ShaderDef {
  id: string;
  kind:
    | 'CE_PBR_MOBILE'
    | 'CE_TOON'
    | 'CE_SKIN'
    | 'CE_HAIR'
    | 'CE_FUR'
    | 'CE_FOLIAGE'
    | 'CE_WATER'
    | 'CE_GLASS'
    | 'CE_METAL'
    | 'CE_TERRAIN';
  parameters: Record<string, number | string | boolean>;
}

export interface SkeletonDef {
  id: string;
  standard: 'humanoid' | 'quadruped' | 'bird' | 'fish' | 'vehicle-mechanical' | 'custom';
  bones: BoneDef[];
  maxInfluencesPerVertex: number;
}

export interface BoneDef {
  name: string;
  parent?: string;
  head: Vec3;
  tail: Vec3;
  roll: number;
}

export interface RigWeights {
  boneNames: string[];
  maxInfluences: number;
  mode: 'rigid' | 'smooth' | 'auto';
}

export interface AnimationClipDef {
  name: string;
  durationSeconds: number;
  fps: number;
  targetSkeleton: string;
  source: 'procedural' | 'imported' | 'manual';
}

export type CollisionShapeKind = 'box' | 'sphere' | 'capsule' | 'convex-hull' | 'mesh' | 'heightfield';

export interface CollisionShape {
  kind: CollisionShapeKind;
  transform: Transform;
  dimensions: Vec3;
}

export interface CollisionBlock {
  shapes: CollisionShape[];
  strategy: 'simple' | 'compound' | 'convex-decomposition' | 'heightfield';
}

export interface PhysicsDef {
  massKg: number;
  centerOfMass: Vec3;
  friction: number;
  restitution: number;
  drag?: number;
}

export interface LodDef {
  level: number;
  triangleBudget: number;
  path?: string;
}

export interface ValidationReport {
  gameReady: boolean;
  profile: ExportProfile;
  errors: string[];
  warnings: string[];
  metrics: {
    triangles: number;
    vertices: number;
    materials: number;
    textures: number;
    textureMaxResolution: number;
    bones: number;
    maxWeightsPerVertex: number;
    glbSizeBytes: number;
  };
}
```

---

## 5. PROCEDURAL CONSTRUCTION PIPELINE

The pipeline is deterministic.

```text
Recipe JSON
   ↓
Seeded Random Generator
   ↓
Parameter Resolver
   ↓
Part Tree Builder
   ↓
Primitive Mesh Builder
   ↓
Modifier Stack
   ↓
Material and Shader Assignment
   ↓
UV Generation
   ↓
Texture Generation / Texture Assignment
   ↓
Skeleton Generation if required
   ↓
Rigging and Skin Weights if required
   ↓
Animation Clip Generation if required
   ↓
Collision Generation
   ↓
LOD Generation
   ↓
Validation
   ↓
GLB Export
   ↓
GameEngin Cartridge Export
```

### 5.1 Primitive Builders

Required primitive builders:

```text
box
beveled-box
sphere
ellipsoid
capsule
cylinder
cone
tube
plane
ribbon
lathe
extrude
sweep
custom-contour
terrain-grid
water-plane
```

### 5.2 Modifier Stack

Required modifiers:

```text
mirror
bevel
solidify
subdivide
decimate
bend
twist
taper
noise-displace
boolean-union
boolean-subtract
lathe-revolve
edge-wear
surface-scratch
damage-dent
cloth-thickness
foliage-wind-weight
```

### 5.3 Deterministic Seed Rule

Every random-looking variation must come from the recipe seed.

```ts
export function seededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = Math.imul(1664525, state) + 1013904223;
    return ((state >>> 0) / 0xffffffff);
  };
}
```

---

## 6. PHOTO REFERENCE AND PIXEL ANALYSIS SYSTEM

Uploading a photo must work without AI. The photo is not magically converted into perfect 3D. It becomes reference data that drives procedural construction.

### 6.1 Photo Input Purpose

A photo can provide:

```text
silhouette
contours
dominant colors
secondary colors
shadow colors
highlight colors
part boundaries
symmetry axis
approximate proportions
texture reference
material hints
```

### 6.2 Source Image Analysis Type

```ts
export interface SourceImageAnalysis {
  width: number;
  height: number;
  dominantColors: string[];
  shadowColors: string[];
  highlightColors: string[];
  edgeMapPath?: string;
  maskPath?: string;
  symmetryAxisX?: number;
  regions: ShapeRegion[];
}

export interface ShapeRegion {
  id: string;
  label:
    | 'head'
    | 'torso'
    | 'waist'
    | 'arm-left'
    | 'arm-right'
    | 'leg-left'
    | 'leg-right'
    | 'wheel'
    | 'window'
    | 'door'
    | 'roof'
    | 'trunk'
    | 'branch'
    | 'leaf'
    | 'road'
    | 'water'
    | 'unknown';
  bounds: {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
  };
  centroid: Vec2;
  contour: Vec2[];
  averageColor: string;
  dominantColors: string[];
  confidence: number;
}
```

### 6.3 Pixel Analysis Stages

```text
1. Decode image.
2. Normalize orientation and scale.
3. Sample pixels into RGBA, HSV, luminance.
4. Build dominant color palette.
5. Build edge map using gradient detection.
6. Build alpha/silhouette mask.
7. Find connected regions.
8. Estimate symmetry axis.
9. Classify regions using geometry rules and optional user labels.
10. Convert regions into procedural recipe hints.
```

### 6.4 User Correction

Every detected region must be editable by the user. The user can relabel a region, split a region, merge regions, delete a region, or assign it to a material.

---

## 7. MATERIAL, TEXTURE, COLOR, AND SHADER SYSTEM

### 7.1 Shader IDs

| Shader ID | Use | PS3 Support | Notes |
|---|---|---:|---|
| `CE_PBR_MOBILE` | Default mobile PBR | Yes | Base color, roughness, metallic, normal, AO. |
| `CE_TOON` | Stylized assets | Yes | Simple stepped lighting. |
| `CE_SKIN` | Humanoid skin | Yes | Cheap skin ramp, no heavy subsurface. |
| `CE_HAIR` | Hair shells/cards | Yes | Simple anisotropic fake highlight. |
| `CE_FUR` | Animal fur cards | PS4+ preferred | PS3 exports convert to cards/texture. |
| `CE_FOLIAGE` | Leaves/grass | Yes | Vertex wind weights. |
| `CE_WATER` | Water | Yes | PS3 uses fake reflection/depth tint. |
| `CE_GLASS` | Windows/glass | Yes | Alpha blend or dithered transparency. |
| `CE_METAL` | Vehicles/weapons | Yes | Packed roughness/metallic. |
| `CE_TERRAIN` | Terrain splatmap | Yes | Up to 4 material layers in PS3 profile. |

### 7.2 Material Families

```text
skin
hair
fur
feather
scale
cloth
leather
metal
wood
stone
glass
plastic
rubber
water
dirt
sand
grass
snow
lava
asphalt
concrete
paint
toon
```

### 7.3 Color Extraction Rules

Photo colors map into material slots:

```text
warm skin-like clusters → skin palette
dark upper head clusters → hair palette
large torso clusters → clothing palette
round dark regions on vehicle → tires/rubber
blue/transparent regions → glass/water
green small repeated regions → foliage
gray rough clusters → stone/concrete/metal
```

### 7.4 Material JSON Example

```json
{
  "id": "mat_vehicle_paint",
  "name": "Vehicle Paint",
  "shaderId": "CE_PBR_MOBILE",
  "baseColor": "#d31f28",
  "shadowColor": "#5f0f13",
  "highlightColor": "#ff6b73",
  "roughness": 0.32,
  "metallic": 0.0,
  "opacity": 1.0,
  "normalStrength": 0.5,
  "textureSlots": {
    "baseColor": "paint_base.webp",
    "normal": "paint_normal.webp",
    "roughnessMetallic": "paint_rm.webp"
  }
}
```

---

## 8. LIVING ASSET SYSTEMS

## 8.1 Humanoid Full Part Hierarchy

```text
Humanoid
├── Root
├── Body
│   ├── Head
│   │   ├── Skull
│   │   ├── Face
│   │   │   ├── Forehead
│   │   │   ├── BrowRidge
│   │   │   ├── LeftEyebrow
│   │   │   ├── RightEyebrow
│   │   │   ├── LeftEye
│   │   │   │   ├── EyelidUpper
│   │   │   │   ├── EyelidLower
│   │   │   │   ├── Sclera
│   │   │   │   ├── Iris
│   │   │   │   └── Pupil
│   │   │   ├── RightEye
│   │   │   ├── Nose
│   │   │   │   ├── Bridge
│   │   │   │   ├── Tip
│   │   │   │   └── Nostrils
│   │   │   ├── Mouth
│   │   │   │   ├── UpperLip
│   │   │   │   ├── LowerLip
│   │   │   │   ├── TeethOptional
│   │   │   │   └── TongueOptional
│   │   │   ├── Cheeks
│   │   │   ├── Chin
│   │   │   └── Jaw
│   │   ├── LeftEar
│   │   ├── RightEar
│   │   └── Hair
│   │       ├── HairCap
│   │       ├── Bangs
│   │       ├── SideLocks
│   │       ├── BackHair
│   │       ├── BraidsOptional
│   │       └── StrandsOptional
│   ├── Neck
│   ├── Torso
│   │   ├── Chest
│   │   ├── Ribs
│   │   ├── Abdomen
│   │   ├── Back
│   │   └── SpineSurface
│   ├── Waist
│   ├── Pelvis
│   ├── LeftArm
│   │   ├── Shoulder
│   │   ├── Bicep
│   │   ├── Tricep
│   │   ├── Elbow
│   │   ├── Forearm
│   │   ├── Wrist
│   │   └── Hand
│   │       ├── Palm
│   │       ├── Thumb
│   │       ├── Index
│   │       ├── Middle
│   │       ├── Ring
│   │       └── Pinky
│   ├── RightArm
│   ├── LeftLeg
│   │   ├── Thigh
│   │   ├── Knee
│   │   ├── Shin
│   │   ├── Calf
│   │   ├── Ankle
│   │   └── Foot
│   │       ├── Heel
│   │       ├── Arch
│   │       ├── ToeBox
│   │       └── ToesOptional
│   └── RightLeg
├── Clothing
│   ├── Shirt
│   ├── Jacket
│   ├── Pants
│   ├── SkirtOptional
│   ├── Gloves
│   ├── Belt
│   ├── Shoes
│   ├── Boots
│   └── Accessories
└── Equipment
    ├── Weapon
    ├── Backpack
    ├── Armor
    └── PropAttachment
```

### 8.2 Humanoid Parameters

```ts
export interface HumanoidParams {
  heightMeters: number;
  headScale: number;
  headWidth: number;
  headDepth: number;
  jawWidth: number;
  chinLength: number;
  cheekVolume: number;
  foreheadHeight: number;

  eyeSpacing: number;
  eyeSize: number;
  eyeTilt: number;
  browHeight: number;
  browThickness: number;
  noseLength: number;
  noseWidth: number;
  noseBridgeHeight: number;
  mouthWidth: number;
  lipFullness: number;
  earSize: number;
  earOffset: number;

  shoulderWidth: number;
  chestWidth: number;
  chestDepth: number;
  abdomenWidth: number;
  waistWidth: number;
  hipWidth: number;
  shoulderSlope: number;
  backCurve: number;

  upperArmLength: number;
  upperArmRadius: number;
  bicepVolume: number;
  tricepVolume: number;
  elbowSize: number;
  forearmLength: number;
  forearmRadius: number;
  wristRadius: number;
  handScale: number;
  fingerLength: number;

  thighLength: number;
  thighRadius: number;
  kneeSize: number;
  shinLength: number;
  calfVolume: number;
  ankleRadius: number;
  footLength: number;
  footWidth: number;

  hairStyle:
    | 'bald'
    | 'short'
    | 'long'
    | 'protective-wrap'
    | 'braids'
    | 'spikes'
    | 'bob'
    | 'ponytail'
    | 'custom';
  hairVolume: number;
  hairLength: number;

  topType: 'none' | 'shirt' | 'jacket' | 'hoodie' | 'armor' | 'dress';
  bottomType: 'none' | 'pants' | 'shorts' | 'skirt' | 'armor';
  shoeType: 'none' | 'sneaker' | 'boot' | 'sandal' | 'barefoot';
  gloveType: 'none' | 'fingerless' | 'full' | 'armor';

  skeleton: 'humanoid-basic' | 'humanoid-full';
  fingerDetail: 'none' | 'simple' | 'full';
  facialRig: boolean;
  hairBones: boolean;
}
```

## 8.3 Animal Part Hierarchy

```text
Animal
├── Root
├── Body
│   ├── Spine
│   ├── Torso
│   ├── Chest
│   ├── Abdomen
│   ├── Neck
│   ├── Head
│   │   ├── Skull
│   │   ├── Snout
│   │   ├── Jaw
│   │   ├── Nose
│   │   ├── LeftEye
│   │   ├── RightEye
│   │   ├── LeftEar
│   │   └── RightEar
│   ├── Tail
│   ├── FrontLeftLeg
│   │   ├── Shoulder
│   │   ├── UpperLeg
│   │   ├── LowerLeg
│   │   ├── PawOrHoof
│   │   └── ClawsOptional
│   ├── FrontRightLeg
│   ├── RearLeftLeg
│   ├── RearRightLeg
│   ├── WingsOptional
│   ├── FurOrScalesOrFeathers
│   └── HornsAntlersOptional
```

### 8.4 Animal Parameters

```ts
export interface AnimalParams {
  animalFamily: 'mammal' | 'bird' | 'reptile' | 'fish' | 'insect' | 'amphibian';
  bodyLength: number;
  withersHeight: number;
  chestWidth: number;
  abdomenWidth: number;
  neckLength: number;
  headLength: number;
  snoutLength: number;
  jawSize: number;
  earSize: number;
  tailLength: number;
  frontLegLength: number;
  rearLegLength: number;
  pawSize: number;
  hoofOrClawSize: number;
  wingSpan?: number;
  surfaceType: 'fur' | 'scale' | 'feather' | 'skin' | 'shell';
  gait: 'walk' | 'trot' | 'gallop' | 'crawl' | 'swim' | 'fly';
}
```

---

## 9. VEHICLE ASSET SYSTEMS

## 9.1 Car and Truck Hierarchy

```text
Vehicle
├── Root
├── Chassis
│   ├── Frame
│   ├── FrontBumper
│   ├── RearBumper
│   ├── Hood
│   ├── Roof
│   ├── TrunkOrBed
│   ├── LeftFrontDoor
│   ├── RightFrontDoor
│   ├── LeftRearDoorOptional
│   ├── RightRearDoorOptional
│   ├── Windows
│   │   ├── Windshield
│   │   ├── RearWindow
│   │   ├── LeftWindows
│   │   └── RightWindows
│   ├── Lights
│   │   ├── LeftHeadlight
│   │   ├── RightHeadlight
│   │   ├── LeftTaillight
│   │   └── RightTaillight
│   ├── Mirrors
│   │   ├── LeftMirror
│   │   └── RightMirror
│   ├── Wheels
│   │   ├── FrontLeftWheel
│   │   │   ├── Tire
│   │   │   ├── Rim
│   │   │   └── Hub
│   │   ├── FrontRightWheel
│   │   ├── RearLeftWheel
│   │   └── RearRightWheel
│   ├── Suspension
│   │   ├── Axles
│   │   ├── Springs
│   │   └── Struts
│   ├── Interior
│   │   ├── Seats
│   │   ├── Dashboard
│   │   ├── SteeringWheel
│   │   └── Console
│   └── Exhaust
```

### 9.2 Vehicle Parameters

```ts
export interface VehicleParams {
  vehicleType: 'car' | 'truck' | 'van' | 'bus' | 'tank' | 'utility';
  lengthMeters: number;
  widthMeters: number;
  heightMeters: number;
  wheelbaseMeters: number;
  trackWidthMeters: number;
  wheelRadiusMeters: number;
  wheelWidthMeters: number;
  doorCount: 2 | 3 | 4 | 5;
  hasTruckBed: boolean;
  bedLengthMeters?: number;
  hoodLength: number;
  cabinHeight: number;
  roofCurve: number;
  bumperSize: number;
  paintColor: string;
  trimColor: string;
  windowTint: string;
  tireMaterial: string;
  rimMaterial: string;
  massKg: number;
  centerOfMassHeight: number;
}
```

## 9.3 Bicycle and Motorcycle Hierarchy

```text
BicycleOrMotorcycle
├── Root
├── Frame
│   ├── TopTube
│   ├── DownTube
│   ├── SeatTube
│   ├── ChainStay
│   ├── SeatStay
│   └── HeadTube
├── FrontFork
├── Handlebar
│   ├── Bar
│   ├── LeftGrip
│   ├── RightGrip
│   ├── BrakeLevers
│   └── MirrorsOptional
├── Seat
├── Wheels
│   ├── FrontWheel
│   │   ├── Tire
│   │   ├── Rim
│   │   ├── Spokes
│   │   └── Hub
│   └── RearWheel
├── Drivetrain
│   ├── Pedals
│   ├── Crank
│   ├── Chain
│   ├── GearSet
│   └── Sprocket
├── Brakes
├── SuspensionOptional
└── EngineOptional
```

---

## 10. ARCHITECTURE, ROADS, BRIDGES, AND PROPS

## 10.1 Building Hierarchy

```text
Building
├── Foundation
├── Floors
│   ├── FloorPlate
│   ├── Walls
│   │   ├── FrontWall
│   │   ├── BackWall
│   │   ├── LeftWall
│   │   └── RightWall
│   ├── Doors
│   ├── Windows
│   ├── InteriorWallsOptional
│   ├── StairsOptional
│   ├── RailingsOptional
│   └── BalconiesOptional
├── Roof
│   ├── RoofBase
│   ├── RoofTrim
│   ├── GuttersOptional
│   └── ChimneyOptional
├── ExteriorDetails
│   ├── Pipes
│   ├── Vents
│   ├── Signs
│   └── Damage
└── Collision
```

### 10.2 Building Parameters

```ts
export interface BuildingParams {
  buildingType: 'house' | 'tower' | 'shop' | 'warehouse' | 'ruin' | 'room';
  widthMeters: number;
  depthMeters: number;
  floorCount: number;
  floorHeightMeters: number;
  roofStyle: 'flat' | 'gabled' | 'hipped' | 'dome' | 'broken';
  windowColumns: number;
  windowRows: number;
  doorCount: number;
  wallThickness: number;
  wallMaterial: string;
  roofMaterial: string;
  trimMaterial: string;
  damageAmount: number;
}
```

## 10.3 Road Hierarchy

```text
Road
├── RoadBed
├── AsphaltOrSurface
├── LaneMarkings
├── Shoulder
├── SidewalkOptional
├── CurbOptional
├── GuardrailOptional
├── Cracks
├── Potholes
├── DirtDecals
├── SignsOptional
└── Collision
```

## 10.4 Bridge Hierarchy

```text
Bridge
├── Deck
├── Supports
│   ├── Pillars
│   ├── Beams
│   └── ArchesOptional
├── Railings
├── CablesOptional
├── RoadSurface
├── ExpansionJoints
├── LightsOptional
├── DamageOptional
└── Collision
```

## 10.5 Prop Families

```text
Weapon
├── BladeOrBarrelOrHead
├── Handle
├── Guard
├── Grip
├── AccentParts
└── Collision

Furniture
├── MainBody
├── Legs
├── Surface
├── CushionsOptional
├── DrawerOptional
└── Collision

Container
├── Body
├── Lid
├── Handles
├── Hinges
├── LockOptional
└── Collision
```

---

## 11. ENVIRONMENT, GEOGRAPHY, TERRAIN, FLORA, WATER, AND SKY

## 11.1 Terrain Hierarchy

```text
Terrain
├── Heightfield
├── BaseMeshTiles
├── BiomeLayers
│   ├── Dirt
│   ├── Grass
│   ├── Sand
│   ├── Snow
│   ├── Rock
│   └── Mud
├── Slopes
├── Cliffs
├── CavesOptional
├── RiversOptional
├── RoadsOptional
├── ScatterObjects
│   ├── Rocks
│   ├── Grass
│   ├── Trees
│   └── Props
└── CollisionHeightfield
```

### 11.2 Terrain Parameters

```ts
export interface TerrainParams {
  widthMeters: number;
  depthMeters: number;
  resolution: 128 | 256 | 512 | 1024;
  baseHeight: number;
  heightVariation: number;
  noiseScale: number;
  erosionAmount: number;
  riverCount: number;
  cliffAmount: number;
  biome: 'grassland' | 'desert' | 'snow' | 'forest' | 'swamp' | 'volcanic' | 'city';
  tileSizeMeters: number;
}
```

## 11.3 Tree Hierarchy

```text
Tree
├── Roots
├── Trunk
│   ├── Bark
│   ├── Knots
│   └── DamageOptional
├── Branches
│   ├── PrimaryBranches
│   ├── SecondaryBranches
│   └── Twigs
├── Leaves
│   ├── LeafCards
│   ├── LeafClusters
│   └── SeasonalColor
├── FruitOptional
├── FlowersOptional
└── WindWeights
```

### 11.4 Tree Parameters

```ts
export interface TreeParams {
  treeType: 'broadleaf' | 'pine' | 'palm' | 'dead' | 'fantasy';
  trunkHeight: number;
  trunkRadius: number;
  trunkCurve: number;
  branchLevels: number;
  branchCount: number;
  branchAngle: number;
  leafDensity: number;
  leafSize: number;
  leafColor: string;
  barkColor: string;
  windStrength: number;
  season: 'spring' | 'summer' | 'fall' | 'winter';
}
```

## 11.5 Water Hierarchy

```text
Water
├── Surface
├── FlowMap
├── WaveNormals
├── Foam
├── ShoreBlend
├── DepthTint
├── ReflectionOptional
├── RefractionOptional
├── SplashEmittersOptional
├── WaterfallOptional
└── CollisionOrTrigger
```

### 11.6 Water Parameters

```ts
export interface WaterParams {
  waterType: 'river' | 'lake' | 'ocean' | 'pond' | 'waterfall';
  widthMeters: number;
  lengthMeters: number;
  depthMeters: number;
  waveAmplitude: number;
  waveLength: number;
  flowSpeed: number;
  foamAmount: number;
  shoreBlendDistance: number;
  depthColor: string;
  shallowColor: string;
  reflectionMode: 'none' | 'fake' | 'planar' | 'screen-space';
}
```

## 11.7 Sky and Atmosphere

```text
Sky
├── SkyDome
├── HorizonGradient
├── SunOrMoon
├── Clouds
├── Fog
├── StarsOptional
├── WeatherOptional
└── LightingMetadata
```

---

## 12. DETERMINISTIC NON-AI AUTO-RIGGING SYSTEM

ContentEngin must rig assets without AI.

Non-AI rigging uses:

```text
template skeletons
mesh bounds
landmark heuristics
body proportion rules
Blender armature creation
automatic weights
weight cleanup
validation
test animations
```

### 12.1 Rigging Directory Layout

```text
lib/contentengin/rigging/
├── templates/
│   ├── humanoid_basic.json
│   ├── quadruped_basic.json
│   ├── bird_basic.json
│   ├── fish_basic.json
│   └── vehicle_mechanical.json
├── landmarks.ts
├── fitArmature.ts
├── rigValidator.ts
├── rigTypes.ts
└── index.ts

scripts/contentengin/
├── blender-auto-rig.py
├── blender-add-basic-animations.py
└── blender-validate-rig.py
```

### 12.2 Humanoid Template Example

```json
{
  "name": "Humanoid_Basic",
  "standard": "humanoid",
  "heightMeters": 1.72,
  "bone_order": [
    "Hips",
    "Spine",
    "Chest",
    "Neck",
    "Head",
    "Shoulder_L",
    "UpperArm_L",
    "LowerArm_L",
    "Hand_L",
    "Shoulder_R",
    "UpperArm_R",
    "LowerArm_R",
    "Hand_R",
    "UpperLeg_L",
    "LowerLeg_L",
    "Foot_L",
    "UpperLeg_R",
    "LowerLeg_R",
    "Foot_R"
  ],
  "hierarchy": {
    "Hips": ["Spine", "UpperLeg_L", "UpperLeg_R"],
    "Spine": ["Chest"],
    "Chest": ["Neck", "Shoulder_L", "Shoulder_R"],
    "Neck": ["Head"],
    "Shoulder_L": ["UpperArm_L"],
    "UpperArm_L": ["LowerArm_L"],
    "LowerArm_L": ["Hand_L"],
    "Shoulder_R": ["UpperArm_R"],
    "UpperArm_R": ["LowerArm_R"],
    "LowerArm_R": ["Hand_R"],
    "UpperLeg_L": ["LowerLeg_L"],
    "LowerLeg_L": ["Foot_L"],
    "UpperLeg_R": ["LowerLeg_R"],
    "LowerLeg_R": ["Foot_R"]
  }
}
```

### 12.3 Blender Auto-Rig Script

```py
# scripts/contentengin/blender-auto-rig.py

import argparse
import json
import os
import bpy
from mathutils import Vector

def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete()

def import_asset(path):
    lower = path.lower()
    if lower.endswith(".glb") or lower.endswith(".gltf"):
        bpy.ops.import_scene.gltf(filepath=path)
    elif lower.endswith(".fbx"):
        bpy.ops.import_scene.fbx(filepath=path)
    elif lower.endswith(".obj"):
        bpy.ops.wm.obj_import(filepath=path)
    else:
        raise RuntimeError(f"Unsupported mesh format: {path}")

def mesh_objects():
    return [obj for obj in bpy.context.scene.objects if obj.type == "MESH"]

def combined_bounds(objects):
    mins = Vector((999999, 999999, 999999))
    maxs = Vector((-999999, -999999, -999999))

    for obj in objects:
        for corner in obj.bound_box:
            world = obj.matrix_world @ Vector(corner)
            mins.x = min(mins.x, world.x)
            mins.y = min(mins.y, world.y)
            mins.z = min(mins.z, world.z)
            maxs.x = max(maxs.x, world.x)
            maxs.y = max(maxs.y, world.y)
            maxs.z = max(maxs.z, world.z)

    return mins, maxs

def create_humanoid_armature(mins, maxs):
    height = maxs.z - mins.z
    cx = (mins.x + maxs.x) * 0.5
    cy = (mins.y + maxs.y) * 0.5

    bpy.ops.object.armature_add(location=(cx, cy, 0))
    armature = bpy.context.object
    armature.name = "ContentEngin_HumanoidRig"

    bpy.ops.object.mode_set(mode="EDIT")
    bones = armature.data.edit_bones

    hips = bones[0]
    hips.name = "Hips"
    hips.head = (cx, cy, mins.z + height * 0.45)
    hips.tail = (cx, cy, mins.z + height * 0.53)

    spine = bones.new("Spine")
    spine.head = hips.tail
    spine.tail = (cx, cy, mins.z + height * 0.64)
    spine.parent = hips

    chest = bones.new("Chest")
    chest.head = spine.tail
    chest.tail = (cx, cy, mins.z + height * 0.76)
    chest.parent = spine

    neck = bones.new("Neck")
    neck.head = chest.tail
    neck.tail = (cx, cy, mins.z + height * 0.82)
    neck.parent = chest

    head = bones.new("Head")
    head.head = neck.tail
    head.tail = (cx, cy, mins.z + height * 0.98)
    head.parent = neck

    for side, sign in [("L", -1), ("R", 1)]:
        shoulder = bones.new(f"Shoulder_{side}")
        shoulder.head = chest.tail
        shoulder.tail = (cx + sign * height * 0.08, cy, mins.z + height * 0.74)
        shoulder.parent = chest

        upper_arm = bones.new(f"UpperArm_{side}")
        upper_arm.head = shoulder.tail
        upper_arm.tail = (cx + sign * height * 0.20, cy, mins.z + height * 0.61)
        upper_arm.parent = shoulder

        lower_arm = bones.new(f"LowerArm_{side}")
        lower_arm.head = upper_arm.tail
        lower_arm.tail = (cx + sign * height * 0.31, cy, mins.z + height * 0.49)
        lower_arm.parent = upper_arm

        hand = bones.new(f"Hand_{side}")
        hand.head = lower_arm.tail
        hand.tail = (cx + sign * height * 0.37, cy, mins.z + height * 0.45)
        hand.parent = lower_arm

        upper_leg = bones.new(f"UpperLeg_{side}")
        upper_leg.head = hips.head
        upper_leg.tail = (cx + sign * height * 0.06, cy, mins.z + height * 0.25)
        upper_leg.parent = hips

        lower_leg = bones.new(f"LowerLeg_{side}")
        lower_leg.head = upper_leg.tail
        lower_leg.tail = (cx + sign * height * 0.06, cy, mins.z + height * 0.08)
        lower_leg.parent = upper_leg

        foot = bones.new(f"Foot_{side}")
        foot.head = lower_leg.tail
        foot.tail = (cx + sign * height * 0.06, cy - height * 0.08, mins.z)
        foot.parent = lower_leg

    bpy.ops.object.mode_set(mode="OBJECT")
    return armature

def bind_auto_weights(meshes, armature):
    bpy.ops.object.select_all(action="DESELECT")

    for mesh in meshes:
        mesh.select_set(True)

    armature.select_set(True)
    bpy.context.view_layer.objects.active = armature
    bpy.ops.object.parent_set(type="ARMATURE_AUTO")

def limit_weights(max_weights):
    for obj in bpy.context.scene.objects:
        if obj.type == "MESH":
            bpy.context.view_layer.objects.active = obj
            obj.select_set(True)
            bpy.ops.object.vertex_group_limit_total(limit=max_weights)
            bpy.ops.object.vertex_group_normalize_all()
            obj.select_set(False)

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
    parser.add_argument("--max-weights", type=int, default=4)
    args = parser.parse_args()

    clear_scene()
    import_asset(args.input)

    meshes = mesh_objects()
    if not meshes:
        raise RuntimeError("No mesh objects found.")

    mins, maxs = combined_bounds(meshes)

    if args.standard != "humanoid":
        raise RuntimeError("This script entry currently expects humanoid. Other standards use their matching rig script.")

    armature = create_humanoid_armature(mins, maxs)
    bind_auto_weights(meshes, armature)
    limit_weights(args.max_weights)
    export_glb(args.output)

if __name__ == "__main__":
    main()
```

### 12.4 Rigging TypeScript Wrapper

```ts
// lib/contentengin/rigging/index.ts

import { execFile } from 'child_process';
import path from 'path';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

export type RigStandard =
  | 'humanoid'
  | 'quadruped'
  | 'bird'
  | 'fish'
  | 'vehicle-mechanical'
  | 'custom';

export interface RiggingRequest {
  inputGlb: string;
  outputDir: string;
  standard: RigStandard;
  maxWeightsPerVertex: number;
}

export async function runRiggingPipeline(request: RiggingRequest): Promise<string> {
  const outputPath = path.join(request.outputDir, 'rigged.glb');

  await execFileAsync('blender', [
    '--background',
    '--python',
    'scripts/contentengin/blender-auto-rig.py',
    '--',
    '--input',
    request.inputGlb,
    '--output',
    outputPath,
    '--standard',
    request.standard,
    '--max-weights',
    String(request.maxWeightsPerVertex),
  ], {
    timeout: 1000 * 60 * 20,
  });

  return outputPath;
}
```

---

## 13. PHYSICS, COLLISION, ANIMATION, AND LOD

### 13.1 Collision Rules

| Asset | Collision Type |
|---|---|
| Humanoid | Capsule, optional ragdoll capsules |
| Animal | Body capsule + head capsule + limb capsules |
| Vehicle | Body box + wheel cylinders |
| Bicycle | Frame compound boxes/tubes + wheel cylinders |
| Building | Floor and wall boxes |
| Road | Mesh or flat boxes |
| Bridge | Deck box + support boxes |
| Terrain | Heightfield |
| Tree | Trunk capsule + branch simplified capsules |
| Water | Trigger volume |
| Prop | Convex hull or simple box |

### 13.2 Animation Rules

Procedural animation clips are generated from skeleton templates.

Required humanoid clips:

```text
idle
walk
run
jump
attack
hit
death
```

Required quadruped clips:

```text
idle
walk
trot
gallop
jump
hit
death
```

Required bird clips:

```text
idle
hop
walk
flap
glide
takeoff
land
```

Required mechanical clips:

```text
wheel-spin
door-open
door-close
suspension-bounce
propeller-spin
turret-turn
```

### 13.3 LOD Rules

| LOD | Use | Triangle Ratio |
|---|---|---:|
| LOD0 | close camera | 100% |
| LOD1 | mid distance | 75% |
| LOD2 | far distance | 40% |
| LOD3 | very far / mobile fallback | 20% |

---

## 14. VALIDATION PIPELINE

### 14.1 PS3 Validation Limits

| Check | Limit | Severity |
|---|---:|---|
| LOD0 triangles | 50,000 | error |
| Materials | 8 | warning |
| Max texture resolution | 1024 recommended, 2048 hard max | warning/error |
| Bones | 75 | error |
| Weights per vertex | 4 | error |
| GLB size | 15 MB | error |
| Missing manifest | required | error |
| Missing recipe | required | error |
| Missing collision | required | warning |
| Missing LODs | required for GameEngin export | warning |

### 14.2 Validation Output

```json
{
  "gameReady": true,
  "profile": "ps3",
  "errors": [],
  "warnings": [],
  "metrics": {
    "triangles": 24500,
    "vertices": 13200,
    "materials": 4,
    "textures": 3,
    "textureMaxResolution": 1024,
    "bones": 59,
    "maxWeightsPerVertex": 4,
    "glbSizeBytes": 7200000
  }
}
```

---

## 15. EXPORT PROFILES

| Profile | Purpose | LOD0 Triangles | Texture Max | Materials | Bones | Shader Set |
|---|---|---:|---:|---:|---:|---|
| `ps3` | Default browser/mobile | 50k | 1024 recommended / 2048 hard | 8 | 75 | Mobile PBR, toon, simple water, foliage |
| `ps4` | Higher-end mobile/tablet/browser | 100k | 2048 | 12 | 128 | PBR, toon, glass, terrain, water |
| `ps5` | Future/offline/high-end | 200k | 4096 | 20 | 256 | Full shader set |

### 15.1 Final Export Bundle

```text
asset_id/
├── model.glb
├── manifest.json
├── recipe.json
├── validation.json
├── thumbnail.webp
└── source_analysis.json
```

---

## 16. DIRECTORY LAYOUT AND CODE MODULES

```text
lib/contentengin/
├── assetTypes.ts
├── recipes/
│   ├── recipeTypes.ts
│   ├── recipeResolver.ts
│   └── seededRandom.ts
├── builders/
│   ├── primitiveBuilder.ts
│   ├── meshBuilder.ts
│   ├── modifiers.ts
│   ├── uvGenerator.ts
│   └── textureBuilder.ts
├── grammars/
│   ├── humanoidGrammar.ts
│   ├── animalGrammar.ts
│   ├── creatureGrammar.ts
│   ├── vehicleGrammar.ts
│   ├── bicycleGrammar.ts
│   ├── buildingGrammar.ts
│   ├── roadGrammar.ts
│   ├── bridgeGrammar.ts
│   ├── terrainGrammar.ts
│   ├── treeGrammar.ts
│   ├── waterGrammar.ts
│   └── propGrammar.ts
├── rigging/
│   ├── templates/
│   │   ├── humanoid_basic.json
│   │   ├── quadruped_basic.json
│   │   ├── bird_basic.json
│   │   ├── fish_basic.json
│   │   └── vehicle_mechanical.json
│   ├── landmarks.ts
│   ├── fitArmature.ts
│   ├── rigValidator.ts
│   └── index.ts
├── materials/
│   ├── materialTypes.ts
│   ├── paletteExtractor.ts
│   └── proceduralMaterials.ts
├── shaders/
│   ├── shaderTypes.ts
│   └── shaderRegistry.ts
├── photo/
│   ├── imageAnalyzer.ts
│   ├── edgeDetector.ts
│   ├── colorCluster.ts
│   ├── regionDetector.ts
│   └── photoToRecipe.ts
├── pipeline/
│   ├── build.ts
│   ├── validate.ts
│   ├── exportGlb.ts
│   ├── generateLods.ts
│   ├── generateCollision.ts
│   └── writeManifest.ts
└── cli.ts

components/contentengin/
├── ContentEnginStudio.tsx
├── RecipeEditor.tsx
├── AssetPreview3D.tsx
├── PhotoReferencePanel.tsx
├── PartTreeEditor.tsx
├── MaterialEditor.tsx
├── RiggingPanel.tsx
├── AnimationPanel.tsx
└── ExportPanel.tsx

app/api/contentengin/
├── jobs/route.ts
├── jobs/[jobId]/route.ts
├── upload/route.ts
├── assets/[assetId]/route.ts
└── assets/[assetId]/export/gameengin/route.ts

scripts/contentengin/
├── blender-auto-rig.py
├── blender-add-basic-animations.py
├── blender-cleanup.py
├── blender-validate-rig.py
└── validate-glb.mjs

tests/contentengin/
├── contentengin-recipes.test.ts
├── contentengin-grammars.test.ts
├── contentengin-rigging.test.ts
├── contentengin-validation.test.ts
└── contentengin-api.test.ts
```

---

## 17. CLI AND API CONTRACTS

### 17.1 CLI

```bash
pnpm ce init --type humanoid --out hero.recipe.json

pnpm ce build \
  --recipe hero.recipe.json \
  --out public/contentengin/generated/hero/model.glb \
  --profile ps3

pnpm ce analyze-photo \
  --image uploads/hero.png \
  --out public/contentengin/generated/hero/source_analysis.json

pnpm ce rig \
  --input public/contentengin/generated/hero/model.glb \
  --standard humanoid \
  --out public/contentengin/generated/hero/rigged.glb

pnpm ce validate \
  --input public/contentengin/generated/hero/rigged.glb \
  --profile ps3

pnpm ce export-gameengin \
  --asset public/contentengin/generated/hero \
  --cartridge mad-maxi
```

### 17.2 REST API

| Method | Path | Description |
|---|---|---|
| `POST` | `/api/contentengin/upload` | Upload source photo, mesh, or recipe. |
| `POST` | `/api/contentengin/jobs` | Queue build job from recipe or source image. |
| `GET` | `/api/contentengin/jobs/:jobId` | Read job status and progress. |
| `GET` | `/api/contentengin/assets/:assetId` | Read GLB, manifest, recipe, validation, thumbnail. |
| `POST` | `/api/contentengin/assets/:assetId/export/gameengin` | Copy validated asset into a GameEngin cartridge. |

### 17.3 Job Request Type

```ts
export type ContentEnginJobType =
  | 'build-from-recipe'
  | 'build-from-photo-reference'
  | 'rig-asset'
  | 'animate-asset'
  | 'validate-asset'
  | 'export-gameengin';

export interface ContentEnginJobRequest {
  type: ContentEnginJobType;
  ownerId: string;
  recipe?: ContentRecipe;
  sourceImageUrl?: string;
  sourceMeshUrl?: string;
  assetType: string;
  profile: ExportProfile;
  rig?: boolean;
  animations?: string[];
  targetCartridgeId?: string;
}
```

---

## 18. IMPLEMENTATION REQUIREMENTS

ContentEngin must be implemented as a real production subsystem, not a fake UI shell.

### 18.1 Required Build Capabilities

ContentEngin must build all of these from recipes:

```text
humanoid
quadruped animal
bird
fish
creature
car
truck
bicycle
motorcycle
building
road
bridge
terrain tile
tree
water surface
weapon
furniture
container
tool
```

### 18.2 Required Photo Capabilities

ContentEngin must accept a photo and produce:

```text
source_analysis.json
color palette
edge map
shape regions
recipe suggestions
editable part tree
generated GLB after user confirms or edits recipe
```

### 18.3 Required Rigging Capabilities

ContentEngin must rig without AI:

```text
humanoid
quadruped
bird
fish
vehicle mechanical parts
```

### 18.4 Required Export Capabilities

Every completed asset must export:

```text
model.glb
manifest.json
recipe.json
validation.json
thumbnail.webp
source_analysis.json if photo-based
```

### 18.5 Required GameEngin Integration

GameEngin export must copy assets to:

```text
public/cartridges/{cartridgeId}/assets/contentengin/{assetId}/
```

and write:

```text
contentengin.asset.json
```

---

## 19. DEFINITION OF DONE

ContentEngin is done when the user can:

1. Open ContentEngin from DREAMengin.
2. Create a new procedural asset from scratch.
3. Upload a photo and use it as reference.
4. Generate a real editable part tree.
5. Generate geometry from that part tree.
6. Assign colors, materials, and shaders.
7. Rig humanoids, animals, creatures, and mechanical vehicles without AI.
8. Generate basic animation clips.
9. Generate collision shapes.
10. Generate LODs.
11. Validate against PS3, PS4, or PS5 export profiles.
12. Export a `.glb`.
13. Export the asset into a GameEngin cartridge.
14. Reopen the recipe and change the asset without starting over.

ContentEngin is not complete until it can build game-ready assets without AI, from procedural rules, editable parts, deterministic recipes, and validated exports.

---

## END OF SPECIFICATION
