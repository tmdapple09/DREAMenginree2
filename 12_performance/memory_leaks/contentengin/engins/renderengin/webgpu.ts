import {
  mat4Identity,
  type Mat4,
  type MeshBuffers,
  type Vec3,
  type Vec4,
  type Vertex,
  validateMeshForRenderUpload,
} from './core';

export interface PackedVertexBuffer {
  readonly data: Float32Array;
  readonly strideFloats: 12;
  readonly strideBytes: 48;
  readonly vertexCount: number;
}

export interface RenderEnginTextureAtlasAllocation {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly u0: number;
  readonly v0: number;
  readonly uScale: number;
  readonly vScale: number;
}

export interface RenderEnginGpuTexture {
  /** Standalone texture is optional in resident mode; atlas-backed textures avoid duplicate VRAM. */
  readonly texture?: GPUTexture;
  readonly view?: GPUTextureView;
  readonly sampler?: GPUSampler;
  readonly width: number;
  readonly height: number;
  readonly format: GPUTextureFormat;
  readonly atlas?: RenderEnginTextureAtlasAllocation;
  dispose(): void;
}

export interface RenderEnginMeshArenaRange {
  readonly vertexOffset: number;
  readonly indexOffset: number;
  readonly indexCount: number;
}

interface AtlasFreeRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface RenderEnginGpuMesh {
  /** Legacy per-mesh buffers are optional; resident mode renders from the mesh arena. */
  readonly vertexBuffer?: GPUBuffer;
  readonly indexBuffer?: GPUBuffer;
  readonly indexCount: number;
  readonly indexFormat: GPUIndexFormat;
  readonly arena?: RenderEnginMeshArenaRange;
  dispose(): void;
}

export interface RenderEnginFrameStats {
  readonly frameIndex: number;
  readonly cpuFrameMs: number;
  readonly indexCount: number;
  readonly drawCalls: number;
  readonly estimatedFps: number;
  readonly droppedFrame: boolean;
  readonly measuredAt: string;
  readonly gpuFrameMs?: number;
  readonly gpuLatencyMeasured: boolean;
}

export interface RenderGpuMaterial {
  readonly albedo: Vec4;
  readonly orm: Vec4;
  readonly emissive: Vec4;
}

export interface RenderEnginSceneObject {
  readonly mesh: RenderEnginGpuMesh;
  readonly albedoTexture: RenderEnginGpuTexture;
  /** Stable object ID used by GPU picking and Dream-level hit routing. Defaults to scene index. */
  readonly objectId?: number;
  /** Optional logical layer/z-index. Scene order remains the authoritative painter order. */
  readonly zIndex?: number;
  /** Legacy fields are optional; the resident path does not allocate per-object GPU uniforms/bind groups. */
  readonly uniformBuffer?: GPUBuffer;
  readonly bindGroup?: GPUBindGroup;
  modelMatrix?: Mat4;
  material?: RenderGpuMaterial;
  cullBounds?: RenderGpuCullBounds;
  metadata?: Vec4;
}

export interface RenderEnginScene {
  readonly viewMatrix: Mat4;
  readonly projectionMatrix: Mat4;
  readonly cameraPosition: Vec3;
  readonly lightDirection: Vec3;
  readonly objects: ReadonlyArray<RenderEnginSceneObject>;
}

export interface RenderEnginLifecycleHooks {
  onReady?(renderer: WebGpuRenderEngin): void;
  onFrame?(stats: RenderEnginFrameStats): void;
  onError?(error: Error): void;
  onStop?(): void;
  onDeviceLost?(info: GPUDeviceLostInfo): void;
  onDeviceRestored?(): void;
}

export const SHADER = /* wgsl */ `
struct Uniforms {
  model : mat4x4<f32>,
  view : mat4x4<f32>,
  projection : mat4x4<f32>,
  lightViewProjection : mat4x4<f32>,
  camera : vec4<f32>,
  light : vec4<f32>,
  albedo : vec4<f32>,
  orm : vec4<f32>,
  emissive : vec4<f32>,
};

@group(0) @binding(0) var<uniform> uniforms : Uniforms;
@group(0) @binding(1) var albedoTexture : texture_2d<f32>;
@group(0) @binding(2) var albedoSampler : sampler;
@group(0) @binding(3) var shadowTexture : texture_depth_2d;
@group(0) @binding(4) var shadowSampler : sampler_comparison;

struct VertexInput {
  @location(0) position : vec3<f32>,
  @location(1) normal : vec3<f32>,
  @location(2) tangent : vec4<f32>,
  @location(3) uv : vec2<f32>,
};

struct VertexOutput {
  @builtin(position) clip : vec4<f32>,
  @location(0) worldNormal : vec3<f32>,
  @location(1) uv : vec2<f32>,
  @location(2) shadowClip : vec4<f32>,
  @location(3) worldPosition : vec3<f32>,
};

@vertex
fn vsMain(input : VertexInput) -> VertexOutput {
  var out : VertexOutput;
  let world = uniforms.model * vec4<f32>(input.position, 1.0);
  out.clip = uniforms.projection * uniforms.view * world;
  out.worldNormal = normalize((uniforms.model * vec4<f32>(input.normal, 0.0)).xyz);
  out.uv = input.uv;
  out.shadowClip = uniforms.lightViewProjection * world;
  out.worldPosition = world.xyz;
  return out;
}


const PI : f32 = 3.141592653589793;
const PBR_EPS : f32 = 0.0001;

fn ggxDistribution(n : vec3<f32>, h : vec3<f32>, roughness : f32) -> f32 {
  let rough = max(roughness, 0.04);
  let a = rough * rough;
  let a2 = a * a;
  let ndh = max(dot(n, h), 0.0);
  let d = ndh * ndh * (a2 - 1.0) + 1.0;
  return a2 / max(PI * d * d, PBR_EPS);
}

fn schlickG1(ndv : f32, roughness : f32) -> f32 {
  let r = roughness + 1.0;
  let k = (r * r) * 0.125;
  return ndv / max(ndv * (1.0 - k) + k, PBR_EPS);
}

fn smithGeometry(n : vec3<f32>, v : vec3<f32>, l : vec3<f32>, roughness : f32) -> f32 {
  return schlickG1(max(dot(n, v), 0.0), roughness) * schlickG1(max(dot(n, l), 0.0), roughness);
}

fn fresnelSchlick(cosTheta : f32, f0 : vec3<f32>) -> vec3<f32> {
  let f = pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
  return f0 + (vec3<f32>(1.0) - f0) * f;
}

fn shadeCookTorranceGpu(
  baseColor : vec3<f32>,
  n : vec3<f32>,
  v : vec3<f32>,
  l : vec3<f32>,
  roughness : f32,
  metallic : f32,
  ao : f32,
  emissive : vec3<f32>,
  shadowVisibility : f32
) -> vec3<f32> {
  let h = normalize(v + l);
  let ndl = max(dot(n, l), 0.0);
  let ndv = max(dot(n, v), 0.0);
  let f0 = mix(vec3<f32>(0.04), baseColor, metallic);
  let D = ggxDistribution(n, h, roughness);
  let G = smithGeometry(n, v, l, roughness);
  let F = fresnelSchlick(max(dot(h, v), 0.0), f0);
  let specular = (D * G * F) / max(4.0 * ndv * ndl, PBR_EPS);
  let kd = (vec3<f32>(1.0) - F) * (1.0 - metallic);
  let diffuse = kd * baseColor * (1.0 / PI);
  let ambient = baseColor * 0.12 * ao;
  return ambient + (diffuse + specular) * ndl * shadowVisibility + emissive;
}

@fragment
fn fsMain(input : VertexOutput) -> @location(0) vec4<f32> {
  let n = normalize(input.worldNormal);
  let l = normalize(-uniforms.light.xyz);
  let textureAlbedo = textureSample(albedoTexture, albedoSampler, input.uv).rgb;
  let shadowNdc = input.shadowClip.xyz / max(input.shadowClip.w, 0.0001);
  let shadowUv = shadowNdc.xy * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5, 0.5);
  var shadowVisibility = 1.0;
  if (shadowUv.x >= 0.0 && shadowUv.x <= 1.0 && shadowUv.y >= 0.0 && shadowUv.y <= 1.0 && shadowNdc.z >= 0.0 && shadowNdc.z <= 1.0) {
    shadowVisibility = textureSampleCompare(shadowTexture, shadowSampler, shadowUv, shadowNdc.z - 0.004);
  }
  let base = uniforms.albedo.rgb * textureAlbedo;
  let roughness = clamp(uniforms.orm.g, 0.04, 1.0);
  let metallic = clamp(uniforms.orm.b, 0.0, 1.0);
  let ao = clamp(uniforms.orm.r, 0.0, 1.0);
  let viewDir = normalize(uniforms.camera.xyz - input.worldPosition);
  let color = shadeCookTorranceGpu(base, n, viewDir, l, roughness, metallic, ao, uniforms.emissive.rgb, shadowVisibility);
  return vec4<f32>(color, uniforms.albedo.a);
}
`;

export const BATCH_SHADER = /* wgsl */ `
struct BatchScene {
  view : mat4x4<f32>,
  projection : mat4x4<f32>,
  lightViewProjection : mat4x4<f32>,
  camera : vec4<f32>,
  light : vec4<f32>,
};

struct InstanceData {
  model : mat4x4<f32>,
  albedo : vec4<f32>,
  orm : vec4<f32>,
  emissive : vec4<f32>,
  attrs : vec4<f32>,
  uvRect : vec4<f32>,
  metadata : vec4<f32>,
};

struct DrawVertexRef {
  vertexIndex : u32,
  instanceIndex : u32,
  _pad0 : u32,
  _pad1 : u32,
};

@group(0) @binding(0) var<uniform> scene : BatchScene;
@group(0) @binding(1) var<storage, read> instances : array<InstanceData>;
@group(0) @binding(2) var atlasTexture : texture_2d<f32>;
@group(0) @binding(3) var atlasSampler : sampler;
@group(0) @binding(4) var shadowTexture : texture_depth_2d;
@group(0) @binding(5) var shadowSampler : sampler_comparison;
@group(0) @binding(6) var<storage, read> arenaVertices : array<f32>;
@group(0) @binding(7) var<storage, read> drawRefs : array<DrawVertexRef>;

struct VertexOutput {
  @builtin(position) clip : vec4<f32>,
  @location(0) worldNormal : vec3<f32>,
  @location(1) uv : vec2<f32>,
  @location(2) shadowClip : vec4<f32>,
  @location(3) albedo : vec4<f32>,
  @location(4) orm : vec4<f32>,
  @location(5) emissive : vec4<f32>,
  @location(6) worldPosition : vec3<f32>,
};

fn loadPosition(vertexIndex : u32) -> vec3<f32> {
  let base = vertexIndex * 12u;
  return vec3<f32>(arenaVertices[base], arenaVertices[base + 1u], arenaVertices[base + 2u]);
}

fn loadNormal(vertexIndex : u32) -> vec3<f32> {
  let base = vertexIndex * 12u + 3u;
  return vec3<f32>(arenaVertices[base], arenaVertices[base + 1u], arenaVertices[base + 2u]);
}

fn loadUv(vertexIndex : u32) -> vec2<f32> {
  let base = vertexIndex * 12u + 10u;
  return vec2<f32>(arenaVertices[base], arenaVertices[base + 1u]);
}

@vertex
fn batchVsMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
  let drawRef = drawRefs[vertexIndex];
  let inst = instances[drawRef.instanceIndex];
  let localPosition = loadPosition(drawRef.vertexIndex);
  let localNormal = loadNormal(drawRef.vertexIndex);
  let localUv = loadUv(drawRef.vertexIndex);

  var out : VertexOutput;
  let world = inst.model * vec4<f32>(localPosition, 1.0);
  out.clip = scene.projection * scene.view * world;
  out.worldNormal = normalize((inst.model * vec4<f32>(localNormal, 0.0)).xyz);
  out.uv = inst.uvRect.xy + localUv * inst.uvRect.zw;
  out.shadowClip = scene.lightViewProjection * world;
  out.albedo = inst.albedo;
  out.orm = inst.orm;
  out.emissive = inst.emissive;
  out.worldPosition = world.xyz;
  return out;
}

@vertex
fn batchShadowVsMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
  let drawRef = drawRefs[vertexIndex];
  let inst = instances[drawRef.instanceIndex];
  let localPosition = loadPosition(drawRef.vertexIndex);
  var out : VertexOutput;
  let world = inst.model * vec4<f32>(localPosition, 1.0);
  out.clip = scene.lightViewProjection * world;
  out.worldNormal = vec3<f32>(0.0, 0.0, 1.0);
  out.uv = vec2<f32>(0.0, 0.0);
  out.shadowClip = out.clip;
  out.albedo = inst.albedo;
  out.orm = inst.orm;
  out.emissive = inst.emissive;
  out.worldPosition = world.xyz;
  return out;
}


const PI : f32 = 3.141592653589793;
const PBR_EPS : f32 = 0.0001;

fn ggxDistribution(n : vec3<f32>, h : vec3<f32>, roughness : f32) -> f32 {
  let rough = max(roughness, 0.04);
  let a = rough * rough;
  let a2 = a * a;
  let ndh = max(dot(n, h), 0.0);
  let d = ndh * ndh * (a2 - 1.0) + 1.0;
  return a2 / max(PI * d * d, PBR_EPS);
}

fn schlickG1(ndv : f32, roughness : f32) -> f32 {
  let r = roughness + 1.0;
  let k = (r * r) * 0.125;
  return ndv / max(ndv * (1.0 - k) + k, PBR_EPS);
}

fn smithGeometry(n : vec3<f32>, v : vec3<f32>, l : vec3<f32>, roughness : f32) -> f32 {
  return schlickG1(max(dot(n, v), 0.0), roughness) * schlickG1(max(dot(n, l), 0.0), roughness);
}

fn fresnelSchlick(cosTheta : f32, f0 : vec3<f32>) -> vec3<f32> {
  let f = pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
  return f0 + (vec3<f32>(1.0) - f0) * f;
}

fn shadeCookTorranceGpu(
  baseColor : vec3<f32>,
  n : vec3<f32>,
  v : vec3<f32>,
  l : vec3<f32>,
  roughness : f32,
  metallic : f32,
  ao : f32,
  emissive : vec3<f32>,
  shadowVisibility : f32
) -> vec3<f32> {
  let h = normalize(v + l);
  let ndl = max(dot(n, l), 0.0);
  let ndv = max(dot(n, v), 0.0);
  let f0 = mix(vec3<f32>(0.04), baseColor, metallic);
  let D = ggxDistribution(n, h, roughness);
  let G = smithGeometry(n, v, l, roughness);
  let F = fresnelSchlick(max(dot(h, v), 0.0), f0);
  let specular = (D * G * F) / max(4.0 * ndv * ndl, PBR_EPS);
  let kd = (vec3<f32>(1.0) - F) * (1.0 - metallic);
  let diffuse = kd * baseColor * (1.0 / PI);
  let ambient = baseColor * 0.12 * ao;
  return ambient + (diffuse + specular) * ndl * shadowVisibility + emissive;
}

@fragment
fn batchFsMain(input : VertexOutput) -> @location(0) vec4<f32> {
  let n = normalize(input.worldNormal);
  let l = normalize(-scene.light.xyz);
  let textureAlbedo = textureSample(atlasTexture, atlasSampler, input.uv).rgb;
  let shadowNdc = input.shadowClip.xyz / max(input.shadowClip.w, 0.0001);
  let shadowUv = shadowNdc.xy * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5, 0.5);
  var shadowVisibility = 1.0;
  if (shadowUv.x >= 0.0 && shadowUv.x <= 1.0 && shadowUv.y >= 0.0 && shadowUv.y <= 1.0 && shadowNdc.z >= 0.0 && shadowNdc.z <= 1.0) {
    shadowVisibility = textureSampleCompare(shadowTexture, shadowSampler, shadowUv, shadowNdc.z - 0.004);
  }
  let base = input.albedo.rgb * textureAlbedo;
  let roughness = clamp(input.orm.g, 0.04, 1.0);
  let metallic = clamp(input.orm.b, 0.0, 1.0);
  let ao = clamp(input.orm.r, 0.0, 1.0);
  let viewDir = normalize(scene.camera.xyz - input.worldPosition);
  let color = shadeCookTorranceGpu(base, n, viewDir, l, roughness, metallic, ao, input.emissive.rgb, shadowVisibility);
  return vec4<f32>(color, input.albedo.a);
}
`;

const MAX_GPU_CULL_OBJECTS = 4096;
const INSTANCE_FLOATS = 40;
const INSTANCE_BYTES = INSTANCE_FLOATS * 4;
const VISIBILITY_RING_SLOTS = 3;
const VISIBILITY_SLOT_BYTES = MAX_GPU_CULL_OBJECTS * INSTANCE_BYTES;
const INDEXED_INDIRECT_UINTS = 5;
const INDEXED_INDIRECT_BYTES = INDEXED_INDIRECT_UINTS * 4;
const DRAW_INDIRECT_UINTS = 4;
const DRAW_INDIRECT_BYTES = DRAW_INDIRECT_UINTS * 4;
const CULL_PARAMS_FLOATS = 4 + 6 * 4;
const PICK_PARAMS_FLOATS = 16 + 4;
const PICK_RESULT_UINTS = 4;
const PICK_RESULT_BYTES = PICK_RESULT_UINTS * 4;
const VISIBILITY_SCAN_BLOCK_SIZE = 256;
const VISIBILITY_SCAN_BLOCKS = Math.ceil(MAX_GPU_CULL_OBJECTS / VISIBILITY_SCAN_BLOCK_SIZE);
const ARENA_VERTEX_STRIDE_FLOATS = 12;
const MAX_ARENA_VERTICES = 262_144;
const MAX_ARENA_INDICES = 1_048_576;
const DRAW_REF_UINTS = 4;
const OBJECT_DESCRIPTOR_UINTS = 8;
const MAX_DRAW_REFS = MAX_ARENA_INDICES;
const ATLAS_SIZE = 4096;
const ATLAS_PADDING = 2;

export interface RenderGpuCullBounds {
  readonly center: Vec3;
  readonly radius: number;
}

export interface RenderGpuVisibilityState {
  readonly enabled: boolean;
  readonly objectCount: number;
  readonly inputOffset: number;
  readonly compactedOffset: number;
  readonly indirectBuffer: GPUBuffer;
  readonly visibleIndexBuffer: GPUBuffer;
  readonly batchIndirectBuffer: GPUBuffer;
}

export interface RenderGpuPickRequest {
  readonly ndcX: number;
  readonly ndcY: number;
  readonly radiusNdc?: number;
}

export interface RenderGpuPickResult {
  readonly hit: boolean;
  readonly objectIndex: number;
  readonly objectId: number;
}

const FLAG_CULL_SHADER = /* wgsl */ `
struct InstanceData {
  model : mat4x4<f32>,
  albedo : vec4<f32>,
  orm : vec4<f32>,
  emissive : vec4<f32>,
  attrs : vec4<f32>,
  uvRect : vec4<f32>,
  metadata : vec4<f32>,
};

struct ObjectDescriptor {
  firstIndex : u32,
  indexCount : u32,
  baseVertex : u32,
  flags : u32,
  objectId : u32,
  layer : u32,
  materialId : u32,
  _pad0 : u32,
};

struct CullingParams {
  count : u32,
  blockCount : u32,
  _pad0 : u32,
  _pad1 : u32,
  planes : array<vec4<f32>, 6>,
};

@group(0) @binding(0) var<storage, read> instances : array<InstanceData>;
@group(0) @binding(1) var<storage, read_write> flags : array<u32>;
@group(0) @binding(2) var<storage, read_write> prefix : array<u32>;
@group(0) @binding(3) var<storage, read_write> blockSums : array<u32>;
@group(0) @binding(4) var<uniform> params : CullingParams;
@group(0) @binding(5) var<storage, read> descriptors : array<ObjectDescriptor>;

var<workgroup> scanValues : array<u32, 256>;

fn outsideFrustum(center : vec3<f32>, radius : f32) -> bool {
  for (var i = 0u; i < 6u; i = i + 1u) {
    let plane = params.planes[i];
    if (dot(plane.xyz, center) + plane.w + radius < 0.0) {
      return true;
    }
  }
  return false;
}

@compute @workgroup_size(256)
fn main(
  @builtin(global_invocation_id) globalId : vec3<u32>,
  @builtin(local_invocation_id) localId : vec3<u32>,
  @builtin(workgroup_id) workgroupId : vec3<u32>,
) {
  let index = globalId.x;
  let lane = localId.x;
  var emittedVertices = 0u;
  var visible = 0u;
  if (index < params.count) {
    let instance = instances[index];
    let canBatch = descriptors[index].flags == 1u;
    visible = select(1u, 0u, outsideFrustum(instance.attrs.xyz, instance.attrs.w));
    flags[index] = visible;
    emittedVertices = select(0u, descriptors[index].indexCount, visible == 1u && canBatch);
  }
  scanValues[lane] = emittedVertices;
  workgroupBarrier();

  var stride = 1u;
  loop {
    if (stride >= 256u) { break; }
    var addend = 0u;
    if (lane >= stride) {
      addend = scanValues[lane - stride];
    }
    workgroupBarrier();
    scanValues[lane] = scanValues[lane] + addend;
    workgroupBarrier();
    stride = stride << 1u;
  }

  if (index < params.count) {
    prefix[index] = scanValues[lane] - emittedVertices;
  }
  if (lane == 255u) {
    blockSums[workgroupId.x] = scanValues[lane];
  }
}
`;

const PREFIX_SCAN_SHADER = /* wgsl */ `
struct CullingParams {
  count : u32,
  blockCount : u32,
  _pad0 : u32,
  _pad1 : u32,
  planes : array<vec4<f32>, 6>,
};

@group(0) @binding(0) var<storage, read> blockSums : array<u32>;
@group(0) @binding(1) var<storage, read_write> blockOffsets : array<u32>;
@group(0) @binding(2) var<uniform> params : CullingParams;

var<workgroup> scanValues : array<u32, 16>;

@compute @workgroup_size(16)
fn main(@builtin(local_invocation_id) localId : vec3<u32>) {
  let lane = localId.x;
  var value = 0u;
  if (lane < params.blockCount) {
    value = blockSums[lane];
  }
  scanValues[lane] = value;
  workgroupBarrier();

  var stride = 1u;
  loop {
    if (stride >= 16u) { break; }
    var addend = 0u;
    if (lane >= stride) {
      addend = scanValues[lane - stride];
    }
    workgroupBarrier();
    scanValues[lane] = scanValues[lane] + addend;
    workgroupBarrier();
    stride = stride << 1u;
  }

  if (lane < params.blockCount) {
    blockOffsets[lane] = scanValues[lane] - value;
  }
}
`;

const SCATTER_CULL_SHADER = /* wgsl */ `
struct InstanceData {
  model : mat4x4<f32>,
  albedo : vec4<f32>,
  orm : vec4<f32>,
  emissive : vec4<f32>,
  attrs : vec4<f32>,
  uvRect : vec4<f32>,
  metadata : vec4<f32>,
};

struct DrawIndexedIndirect {
  indexCount : u32,
  instanceCount : u32,
  firstIndex : u32,
  baseVertex : u32,
  firstInstance : u32,
};

struct DrawIndirect {
  vertexCount : u32,
  instanceCount : u32,
  firstVertex : u32,
  firstInstance : u32,
};

struct ObjectDescriptor {
  firstIndex : u32,
  indexCount : u32,
  baseVertex : u32,
  flags : u32,
  objectId : u32,
  layer : u32,
  materialId : u32,
  _pad0 : u32,
};

struct DrawVertexRef {
  vertexIndex : u32,
  instanceIndex : u32,
  _pad0 : u32,
  _pad1 : u32,
};

struct CullingParams {
  count : u32,
  blockCount : u32,
  _pad0 : u32,
  _pad1 : u32,
  planes : array<vec4<f32>, 6>,
};

@group(0) @binding(0) var<storage, read> instances : array<InstanceData>;
@group(0) @binding(1) var<storage, read> flags : array<u32>;
@group(0) @binding(2) var<storage, read> prefix : array<u32>;
@group(0) @binding(3) var<storage, read> blockOffsets : array<u32>;
@group(0) @binding(4) var<storage, read_write> compacted : array<InstanceData>;
@group(0) @binding(5) var<storage, read_write> visibleIndices : array<u32>;
@group(0) @binding(6) var<storage, read_write> indirect : array<DrawIndexedIndirect>;
@group(0) @binding(7) var<uniform> params : CullingParams;
@group(0) @binding(8) var<storage, read_write> batchIndirect : DrawIndirect;
@group(0) @binding(9) var<storage, read> descriptors : array<ObjectDescriptor>;
@group(0) @binding(10) var<storage, read> arenaIndices : array<u32>;
@group(0) @binding(11) var<storage, read_write> drawRefs : array<DrawVertexRef>;

@compute @workgroup_size(32)
fn main(@builtin(global_invocation_id) id : vec3<u32>) {
  let index = id.x;
  if (index >= params.count) {
    return;
  }

  let visible = flags[index];
  let descriptor = descriptors[index];
  let canBatch = descriptor.flags == 1u;
  indirect[index].indexCount = descriptor.indexCount;
  indirect[index].firstIndex = 0u;
  indirect[index].baseVertex = 0u;
  indirect[index].firstInstance = 0u;
  indirect[index].instanceCount = visible;

  if (visible == 1u && canBatch) {
    let block = index / 256u;
    let dstStart = blockOffsets[block] + prefix[index];
    for (var i = 0u; i < descriptor.indexCount; i = i + 1u) {
      let refIndex = dstStart + i;
      if (refIndex < arrayLength(&drawRefs)) {
        drawRefs[refIndex].vertexIndex = descriptor.baseVertex + arenaIndices[descriptor.firstIndex + i];
        drawRefs[refIndex].instanceIndex = index;
        drawRefs[refIndex]._pad0 = 0u;
        drawRefs[refIndex]._pad1 = 0u;
      }
    }
    compacted[index] = instances[index];
    visibleIndices[index] = index;
  }

  if (index + 1u == params.count) {
    let lastBlock = (params.count - 1u) / 256u;
    let totalVertices = blockOffsets[lastBlock] + prefix[index] + select(0u, descriptor.indexCount, visible == 1u && canBatch);
    batchIndirect.vertexCount = min(totalVertices, arrayLength(&drawRefs));
    batchIndirect.instanceCount = select(0u, 1u, totalVertices > 0u);
    batchIndirect.firstVertex = 0u;
    batchIndirect.firstInstance = 0u;
  }
}
`;

const KEEP_ALIVE_SHADER = /* wgsl */ `
@group(0) @binding(0) var<storage, read_write> keepAlive : array<u32>;
@compute @workgroup_size(32)
fn main(@builtin(global_invocation_id) id : vec3<u32>) {
  if (id.x == 0u) {
    keepAlive[0] = keepAlive[0] + 1u;
  }
}
`;


const PICK_SHADER = /* wgsl */ `
struct InstanceData {
  model : mat4x4<f32>,
  albedo : vec4<f32>,
  orm : vec4<f32>,
  emissive : vec4<f32>,
  attrs : vec4<f32>,
  uvRect : vec4<f32>,
  metadata : vec4<f32>,
};

struct ObjectDescriptor {
  firstIndex : u32,
  indexCount : u32,
  baseVertex : u32,
  flags : u32,
  objectId : u32,
  layer : u32,
  materialId : u32,
  _pad0 : u32,
};

struct PickParams {
  viewProjection : mat4x4<f32>,
  touch : vec4<f32>, // ndcX, ndcY, radiusNdc, count
};

@group(0) @binding(0) var<storage, read> instances : array<InstanceData>;
@group(0) @binding(1) var<uniform> params : PickParams;
@group(0) @binding(2) var<storage, read_write> result : array<atomic<u32>>;
@group(0) @binding(3) var<storage, read> descriptors : array<ObjectDescriptor>;

// Painter-order GPU picking: higher scene index wins.
// Result layout after copy/read: [objectIndexPlusOne, unused, reserved, reserved].
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id : vec3<u32>) {
  let i = id.x;
  let count = u32(params.touch.w);
  if (i >= count) { return; }

  if (descriptors[i].flags == 0u) { return; }

  let inst = instances[i];
  let center = inst.attrs.xyz;
  let radius = max(inst.attrs.w, 0.000001);
  let clip = params.viewProjection * vec4<f32>(center, 1.0);
  if (clip.w <= 0.000001) { return; }

  let ndc = clip.xy / clip.w;
  let projectedRadius = max(params.touch.z, radius / max(abs(clip.w), 0.000001));

  if (abs(ndc.x) > 1.0 + projectedRadius || abs(ndc.y) > 1.0 + projectedRadius) { return; }

  let pickDelta = ndc - params.touch.xy;
  if (dot(pickDelta, pickDelta) <= projectedRadius * projectedRadius) {
    atomicMax(&result[0], i + 1u);
  }
}
`;

const ALPHA_BLEND_TARGET = {
  blend: {
    color: { srcFactor: 'src-alpha' as GPUBlendFactor, dstFactor: 'one-minus-src-alpha' as GPUBlendFactor, operation: 'add' as GPUBlendOperation },
    alpha: { srcFactor: 'one' as GPUBlendFactor, dstFactor: 'one-minus-src-alpha' as GPUBlendFactor, operation: 'add' as GPUBlendOperation },
  },
};

export function toGpuMat4(matrix: Mat4): Mat4 {
  return [
    matrix[0], matrix[4], matrix[8], matrix[12],
    matrix[1], matrix[5], matrix[9], matrix[13],
    matrix[2], matrix[6], matrix[10], matrix[14],
    matrix[3], matrix[7], matrix[11], matrix[15],
  ];
}

function writeMat4(target: Float32Array, offset: number, matrix: Mat4): void {
  target.set(matrix, offset);
}

function writeGpuMat4(target: Float32Array, offset: number, matrix: Mat4): void {
  target[offset] = matrix[0];
  target[offset + 1] = matrix[4];
  target[offset + 2] = matrix[8];
  target[offset + 3] = matrix[12];
  target[offset + 4] = matrix[1];
  target[offset + 5] = matrix[5];
  target[offset + 6] = matrix[9];
  target[offset + 7] = matrix[13];
  target[offset + 8] = matrix[2];
  target[offset + 9] = matrix[6];
  target[offset + 10] = matrix[10];
  target[offset + 11] = matrix[14];
  target[offset + 12] = matrix[3];
  target[offset + 13] = matrix[7];
  target[offset + 14] = matrix[11];
  target[offset + 15] = matrix[15];
}

function writeVec4(target: Float32Array, offset: number, vector: Vec4): void {
  target[offset] = vector[0];
  target[offset + 1] = vector[1];
  target[offset + 2] = vector[2];
  target[offset + 3] = vector[3];
}

function writeVec3AsVec4(target: Float32Array, offset: number, vector: Vec3, w: number): void {
  target[offset] = vector[0];
  target[offset + 1] = vector[1];
  target[offset + 2] = vector[2];
  target[offset + 3] = w;
}

function normalizePlane(a: number, b: number, c: number, d: number): Vec4 {
  const inv = 1 / Math.max(1e-8, Math.hypot(a, b, c));
  return [a * inv, b * inv, c * inv, d * inv];
}

function writeFrustumPlanes(target: Float32Array, offset: number, viewProjection: ArrayLike<number>): void {
  const m = viewProjection;
  const planes: Vec4[] = [
    normalizePlane(m[12] + m[0], m[13] + m[1], m[14] + m[2], m[15] + m[3]),
    normalizePlane(m[12] - m[0], m[13] - m[1], m[14] - m[2], m[15] - m[3]),
    normalizePlane(m[12] + m[4], m[13] + m[5], m[14] + m[6], m[15] + m[7]),
    normalizePlane(m[12] - m[4], m[13] - m[5], m[14] - m[6], m[15] - m[7]),
    normalizePlane(m[12] + m[8], m[13] + m[9], m[14] + m[10], m[15] + m[11]),
    normalizePlane(m[12] - m[8], m[13] - m[9], m[14] - m[10], m[15] - m[11]),
  ];
  for (let i = 0; i < planes.length; i += 1) writeVec4(target, offset + i * 4, planes[i]);
}

function writeMat4Mul(target: Float32Array, a: Mat4, b: Mat4): void {
  target[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12];
  target[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13];
  target[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14];
  target[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15];
  target[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12];
  target[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13];
  target[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14];
  target[7] = a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15];
  target[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12];
  target[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13];
  target[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14];
  target[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15];
  target[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12];
  target[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13];
  target[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14];
  target[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15];
}

export function packAosVertexBuffer(mesh: MeshBuffers): PackedVertexBuffer {
  const data = new Float32Array(mesh.vertices.length * 12);
  mesh.vertices.forEach((vertex: Vertex, index) => {
    const offset = index * 12;
    data.set(vertex.position, offset);
    data.set(vertex.normal, offset + 3);
    data.set(vertex.tangent, offset + 6);
    data.set(vertex.uv, offset + 10);
  });
  return {
    data,
    strideFloats: 12,
    strideBytes: 48,
    vertexCount: mesh.vertices.length,
  };
}

function createBuffer(
  device: GPUDevice,
  data: ArrayBufferView,
  usage: GPUBufferUsageFlags,
): GPUBuffer {
  const buffer = device.createBuffer({
    size: Math.max(4, Math.ceil(data.byteLength / 4) * 4),
    usage,
    mappedAtCreation: true,
  });
  new Uint8Array(buffer.getMappedRange()).set(
    new Uint8Array(data.buffer as ArrayBuffer, data.byteOffset, data.byteLength),
  );
  buffer.unmap();
  return buffer;
}

export interface RenderEnginGpuDeviceLease {
  readonly adapter: GPUAdapter;
  readonly device: GPUDevice;
  readonly owner: 'RenderEngin';
  readonly shared: true;
}

let sharedRenderGpuDevicePromise: Promise<RenderEnginGpuDeviceLease> | null = null;
let sharedRenderGpuDevice: RenderEnginGpuDeviceLease | null = null;

async function warmRenderGpuDevice(device: GPUDevice): Promise<void> {
  const warmModule = device.createShaderModule({ code: KEEP_ALIVE_SHADER });
  const warmPipeline = device.createComputePipeline({ layout: 'auto', compute: { module: warmModule, entryPoint: 'main' } });
  const warmBuffer = device.createBuffer({ size: 4, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST });
  try {
    device.queue.writeBuffer(warmBuffer, 0, new Uint32Array([0]));
    const warmBindGroup = device.createBindGroup({ layout: warmPipeline.getBindGroupLayout(0), entries: [{ binding: 0, resource: { buffer: warmBuffer } }] });
    const encoder = device.createCommandEncoder();
    const pass = encoder.beginComputePass();
    pass.setPipeline(warmPipeline);
    pass.setBindGroup(0, warmBindGroup);
    pass.dispatchWorkgroups(1);
    pass.end();
    device.queue.submit([encoder.finish()]);
    await device.queue.onSubmittedWorkDone();
  } finally {
    warmBuffer.destroy();
  }
}

async function createSharedRenderGpuDevice(): Promise<RenderEnginGpuDeviceLease> {
  if (!globalThis.navigator?.gpu) {
    throw new Error('WebGPU is not available in this runtime.');
  }
  const adapter = await globalThis.navigator.gpu.requestAdapter({ powerPreference: 'high-performance' });
  if (!adapter) {
    throw new Error('WebGPU adapter request failed.');
  }
  const device = await adapter.requestDevice();
  const lease: RenderEnginGpuDeviceLease = { adapter, device, owner: 'RenderEngin', shared: true };
  sharedRenderGpuDevice = lease;
  void device.lost.then(() => {
    if (sharedRenderGpuDevice?.device === device) {
      sharedRenderGpuDevice = null;
      sharedRenderGpuDevicePromise = null;
    }
  });
  await warmRenderGpuDevice(device);
  return lease;
}

/**
 * Returns DREAMengin's shared RenderEngin WebGPU device.
 *
 * ContentEngin, GameEngin, LabEngin, DreamSpace, and diagnostics should all
 * request GPU access through this facade so the app does not create separate
 * renderer identities or one GPUDevice per surface.
 */
export async function requestWebGpuDevice(): Promise<RenderEnginGpuDeviceLease> {
  if (sharedRenderGpuDevice) return sharedRenderGpuDevice;
  if (!sharedRenderGpuDevicePromise) {
    sharedRenderGpuDevicePromise = createSharedRenderGpuDevice().catch((error) => {
      sharedRenderGpuDevice = null;
      sharedRenderGpuDevicePromise = null;
      throw error;
    });
  }
  return sharedRenderGpuDevicePromise;
}

export class WebGpuRenderEngin {
  readonly device: GPUDevice;
  readonly context: GPUCanvasContext;
  readonly format: GPUTextureFormat;

  private readonly pipeline: GPURenderPipeline;
  private readonly shadowPipeline: GPURenderPipeline;
  private readonly batchPipeline: GPURenderPipeline;
  private readonly batchShadowPipeline: GPURenderPipeline;
  private readonly bindGroupLayout: GPUBindGroupLayout;
  private readonly batchBindGroupLayout: GPUBindGroupLayout;
  private readonly visibilityFlagPipeline: GPUComputePipeline;
  private readonly visibilityScanPipeline: GPUComputePipeline;
  private readonly visibilityScatterPipeline: GPUComputePipeline;
  private readonly keepAlivePipeline: GPUComputePipeline;
  private readonly pickPipeline: GPUComputePipeline;
  private readonly visibilityInputRingBuffer: GPUBuffer;
  private readonly visibilityCompactedRingBuffer: GPUBuffer;
  private readonly visibilityFlagsBuffer: GPUBuffer;
  private readonly visibilityPrefixBuffer: GPUBuffer;
  private readonly visibilityBlockSumsBuffer: GPUBuffer;
  private readonly visibilityBlockOffsetsBuffer: GPUBuffer;
  private readonly visibilityIndexBuffer: GPUBuffer;
  private readonly visibilityIndirectBuffer: GPUBuffer;
  private readonly visibilityBatchIndirectBuffer: GPUBuffer;
  private readonly visibilityParamsBuffer: GPUBuffer;
  private readonly keepAliveBuffer: GPUBuffer;
  private readonly pickParamsBuffer: GPUBuffer;
  private readonly pickResultBuffer: GPUBuffer;
  private readonly pickReadbackBuffer: GPUBuffer;
  private readonly batchSceneUniformBuffer: GPUBuffer;
  private readonly meshArenaVertexBuffer: GPUBuffer;
  private readonly meshArenaIndexBuffer: GPUBuffer;
  private readonly objectDescriptorBuffer: GPUBuffer;
  private readonly arenaDrawRefBuffer: GPUBuffer;
  private readonly atlasTexture: GPUTexture;
  private readonly atlasTextureView: GPUTextureView;
  private readonly atlasSampler: GPUSampler;
  private readonly batchAtlasBindGroup: GPUBindGroup;
  private readonly batchSceneScratch = new Float32Array(56);
  private readonly viewProjectionScratch = new Float32Array(16);
  private readonly visibilityFlagBindGroup: GPUBindGroup;
  private readonly visibilityScanBindGroup: GPUBindGroup;
  private readonly visibilityScatterBindGroup: GPUBindGroup;
  private readonly keepAliveBindGroup: GPUBindGroup;
  private readonly pickBindGroup: GPUBindGroup;
  private readonly uniformScratch = new Float32Array(84);
  private readonly instanceScratch = new Float32Array(MAX_GPU_CULL_OBJECTS * INSTANCE_FLOATS);
  private readonly cullParamScratch = new Float32Array(CULL_PARAMS_FLOATS);
  private readonly cullParamScratchU32 = new Uint32Array(this.cullParamScratch.buffer);
  private readonly pickParamScratch = new Float32Array(PICK_PARAMS_FLOATS);
  private readonly pickResultClearScratch = new Uint32Array(PICK_RESULT_UINTS);
  private readonly indirectScratch = new Uint32Array(MAX_GPU_CULL_OBJECTS * INDEXED_INDIRECT_UINTS);
  private readonly objectDescriptorScratch = new Uint32Array(MAX_GPU_CULL_OBJECTS * OBJECT_DESCRIPTOR_UINTS);
  private readonly batchIndirectScratch = new Uint32Array(DRAW_INDIRECT_UINTS);
  private readonly emptyIndexedIndirectScratch = new Uint32Array(INDEXED_INDIRECT_UINTS);
  private readonly keepAliveScratch = new Uint32Array(1);
  private readonly atlasFreeRects: AtlasFreeRect[] = [{ x: ATLAS_PADDING, y: ATLAS_PADDING, width: ATLAS_SIZE - ATLAS_PADDING * 2, height: ATLAS_SIZE - ATLAS_PADDING * 2 }];
  private arenaVertexCursor = 0;
  private arenaIndexCursor = 0;
  private arenaBatchCompatible = true;
  private residentSceneObjectCount = 0;
  private residentSceneIndexCount = 0;
  private residentSceneReady = false;
  private visibilityRingSlot = 0;
  private lastVisibilityState: RenderGpuVisibilityState | null = null;
  private readonly defaultAlbedoTexture: RenderEnginGpuTexture;
  private readonly shadowSampler: GPUSampler;
  private depthTexture: GPUTexture;
  private depthTextureView: GPUTextureView;
  private shadowDepthTexture: GPUTexture;
  private shadowDepthTextureView: GPUTextureView;
  private width: number;
  private height: number;
  private frameIndex = 0;
  private animationFrame: number | null = null;
  private stopped = true;
  private deviceLost = false;
  private residentSceneObjects: RenderEnginSceneObject[] = [];
  private scene: RenderEnginScene = {
    viewMatrix: mat4Identity(),
    projectionMatrix: mat4Identity(),
    cameraPosition: [0, 0, 5],
    lightDirection: [0.35, -0.75, -0.55],
    objects: this.residentSceneObjects,
  };

  constructor(options: {
    device: GPUDevice;
    canvas: HTMLCanvasElement;
    alphaMode?: GPUCanvasAlphaMode;
  }) {
    this.device = options.device;
    const context = options.canvas.getContext('webgpu');
    if (!context) {
      throw new Error('Canvas did not provide a WebGPU context.');
    }
    this.context = context;
    this.format = globalThis.navigator.gpu.getPreferredCanvasFormat();
    this.width = Math.max(1, options.canvas.width);
    this.height = Math.max(1, options.canvas.height);
    this.context.configure({
      device: this.device,
      format: this.format,
      alphaMode: options.alphaMode ?? 'premultiplied',
    });
    this.depthTexture = this.createDepthTexture(this.width, this.height);
    this.depthTextureView = this.depthTexture.createView();
    this.shadowDepthTexture = this.createDepthTexture(2048, 2048);
    this.shadowDepthTextureView = this.shadowDepthTexture.createView();
    this.shadowSampler = this.device.createSampler({ compare: 'less-equal', magFilter: 'linear', minFilter: 'linear' });
    this.atlasTexture = this.device.createTexture({
      size: { width: ATLAS_SIZE, height: ATLAS_SIZE },
      format: 'rgba8unorm',
      usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
    });
    this.atlasTextureView = this.atlasTexture.createView();
    this.atlasSampler = this.device.createSampler({ magFilter: 'linear', minFilter: 'linear', mipmapFilter: 'linear', maxAnisotropy: 1 });
    this.defaultAlbedoTexture = this.uploadTexture({ width: 1, height: 1, data: new Uint8Array([255, 255, 255, 255]) });

    this.bindGroupLayout = this.device.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT, buffer: {} },
        { binding: 1, visibility: GPUShaderStage.FRAGMENT, texture: {} },
        { binding: 2, visibility: GPUShaderStage.FRAGMENT, sampler: {} },
        { binding: 3, visibility: GPUShaderStage.FRAGMENT, texture: { sampleType: 'depth' } },
        { binding: 4, visibility: GPUShaderStage.FRAGMENT, sampler: { type: 'comparison' } },
      ],
    });
    this.batchBindGroupLayout = this.device.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT, buffer: {} },
        { binding: 1, visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT, buffer: { type: 'read-only-storage', hasDynamicOffset: true } },
        { binding: 2, visibility: GPUShaderStage.FRAGMENT, texture: {} },
        { binding: 3, visibility: GPUShaderStage.FRAGMENT, sampler: {} },
        { binding: 4, visibility: GPUShaderStage.FRAGMENT, texture: { sampleType: 'depth' } },
        { binding: 5, visibility: GPUShaderStage.FRAGMENT, sampler: { type: 'comparison' } },
        { binding: 6, visibility: GPUShaderStage.VERTEX, buffer: { type: 'read-only-storage' } },
        { binding: 7, visibility: GPUShaderStage.VERTEX, buffer: { type: 'read-only-storage' } },
      ],
    });
    const visibilityFlagModule = this.device.createShaderModule({ code: FLAG_CULL_SHADER });
    const visibilityScanModule = this.device.createShaderModule({ code: PREFIX_SCAN_SHADER });
    const visibilityScatterModule = this.device.createShaderModule({ code: SCATTER_CULL_SHADER });
    const keepAliveModule = this.device.createShaderModule({ code: KEEP_ALIVE_SHADER });
    const pickModule = this.device.createShaderModule({ code: PICK_SHADER });
    const visibilityFlagLayout = this.device.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage', hasDynamicOffset: true } },
        { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
        { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
        { binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
        { binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' } },
        { binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
      ],
    });
    const visibilityScanLayout = this.device.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
        { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
        { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' } },
      ],
    });
    const visibilityScatterLayout = this.device.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage', hasDynamicOffset: true } },
        { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
        { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
        { binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
        { binding: 4, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage', hasDynamicOffset: true } },
        { binding: 5, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
        { binding: 6, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
        { binding: 7, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' } },
        { binding: 8, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
        { binding: 9, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
        { binding: 10, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
        { binding: 11, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
      ],
    });
    const pickLayout = this.device.createBindGroupLayout({
      entries: [
        { binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
        { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' } },
        { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
        { binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
      ],
    });
    this.visibilityFlagPipeline = this.device.createComputePipeline({ layout: this.device.createPipelineLayout({ bindGroupLayouts: [visibilityFlagLayout] }), compute: { module: visibilityFlagModule, entryPoint: 'main' } });
    this.visibilityScanPipeline = this.device.createComputePipeline({ layout: this.device.createPipelineLayout({ bindGroupLayouts: [visibilityScanLayout] }), compute: { module: visibilityScanModule, entryPoint: 'main' } });
    this.visibilityScatterPipeline = this.device.createComputePipeline({ layout: this.device.createPipelineLayout({ bindGroupLayouts: [visibilityScatterLayout] }), compute: { module: visibilityScatterModule, entryPoint: 'main' } });
    this.keepAlivePipeline = this.device.createComputePipeline({ layout: 'auto', compute: { module: keepAliveModule, entryPoint: 'main' } });
    this.pickPipeline = this.device.createComputePipeline({ layout: this.device.createPipelineLayout({ bindGroupLayouts: [pickLayout] }), compute: { module: pickModule, entryPoint: 'main' } });
    this.visibilityInputRingBuffer = this.device.createBuffer({
      size: VISIBILITY_SLOT_BYTES * VISIBILITY_RING_SLOTS,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    });
    this.visibilityCompactedRingBuffer = this.device.createBuffer({
      size: VISIBILITY_SLOT_BYTES * VISIBILITY_RING_SLOTS,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
    });
    this.visibilityFlagsBuffer = this.device.createBuffer({ size: MAX_GPU_CULL_OBJECTS * 4, usage: GPUBufferUsage.STORAGE });
    this.visibilityPrefixBuffer = this.device.createBuffer({ size: MAX_GPU_CULL_OBJECTS * 4, usage: GPUBufferUsage.STORAGE });
    this.visibilityBlockSumsBuffer = this.device.createBuffer({ size: VISIBILITY_SCAN_BLOCKS * 4, usage: GPUBufferUsage.STORAGE });
    this.visibilityBlockOffsetsBuffer = this.device.createBuffer({ size: VISIBILITY_SCAN_BLOCKS * 4, usage: GPUBufferUsage.STORAGE });
    this.visibilityIndexBuffer = this.device.createBuffer({ size: MAX_GPU_CULL_OBJECTS * 4, usage: GPUBufferUsage.STORAGE });
    this.visibilityIndirectBuffer = this.device.createBuffer({ size: MAX_GPU_CULL_OBJECTS * INDEXED_INDIRECT_BYTES, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT });
    this.visibilityBatchIndirectBuffer = this.device.createBuffer({ size: DRAW_INDIRECT_BYTES, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT });
    this.visibilityParamsBuffer = this.device.createBuffer({ size: CULL_PARAMS_FLOATS * 4, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
    this.keepAliveBuffer = this.device.createBuffer({ size: 4, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST });
    this.pickParamsBuffer = this.device.createBuffer({ size: PICK_PARAMS_FLOATS * 4, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
    this.pickResultBuffer = this.device.createBuffer({ size: PICK_RESULT_BYTES, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST });
    this.pickReadbackBuffer = this.device.createBuffer({ size: PICK_RESULT_BYTES, usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ });
    this.batchSceneUniformBuffer = this.device.createBuffer({ size: this.batchSceneScratch.byteLength, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
    this.meshArenaVertexBuffer = this.device.createBuffer({
      size: MAX_ARENA_VERTICES * ARENA_VERTEX_STRIDE_FLOATS * 4,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    });
    this.meshArenaIndexBuffer = this.device.createBuffer({
      size: MAX_ARENA_INDICES * 4,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    });
    this.objectDescriptorBuffer = this.device.createBuffer({
      size: MAX_GPU_CULL_OBJECTS * OBJECT_DESCRIPTOR_UINTS * 4,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    });
    this.arenaDrawRefBuffer = this.device.createBuffer({
      size: MAX_DRAW_REFS * DRAW_REF_UINTS * 4,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    });
    this.visibilityFlagBindGroup = this.device.createBindGroup({
      layout: visibilityFlagLayout,
      entries: [
        { binding: 0, resource: { buffer: this.visibilityInputRingBuffer, size: VISIBILITY_SLOT_BYTES } },
        { binding: 1, resource: { buffer: this.visibilityFlagsBuffer } },
        { binding: 2, resource: { buffer: this.visibilityPrefixBuffer } },
        { binding: 3, resource: { buffer: this.visibilityBlockSumsBuffer } },
        { binding: 4, resource: { buffer: this.visibilityParamsBuffer } },
        { binding: 5, resource: { buffer: this.objectDescriptorBuffer } },
      ],
    });
    this.visibilityScanBindGroup = this.device.createBindGroup({
      layout: visibilityScanLayout,
      entries: [
        { binding: 0, resource: { buffer: this.visibilityBlockSumsBuffer } },
        { binding: 1, resource: { buffer: this.visibilityBlockOffsetsBuffer } },
        { binding: 2, resource: { buffer: this.visibilityParamsBuffer } },
      ],
    });
    this.visibilityScatterBindGroup = this.device.createBindGroup({
      layout: visibilityScatterLayout,
      entries: [
        { binding: 0, resource: { buffer: this.visibilityInputRingBuffer, size: VISIBILITY_SLOT_BYTES } },
        { binding: 1, resource: { buffer: this.visibilityFlagsBuffer } },
        { binding: 2, resource: { buffer: this.visibilityPrefixBuffer } },
        { binding: 3, resource: { buffer: this.visibilityBlockOffsetsBuffer } },
        { binding: 4, resource: { buffer: this.visibilityCompactedRingBuffer, size: VISIBILITY_SLOT_BYTES } },
        { binding: 5, resource: { buffer: this.visibilityIndexBuffer } },
        { binding: 6, resource: { buffer: this.visibilityIndirectBuffer } },
        { binding: 7, resource: { buffer: this.visibilityParamsBuffer } },
        { binding: 8, resource: { buffer: this.visibilityBatchIndirectBuffer } },
        { binding: 9, resource: { buffer: this.objectDescriptorBuffer } },
        { binding: 10, resource: { buffer: this.meshArenaIndexBuffer } },
        { binding: 11, resource: { buffer: this.arenaDrawRefBuffer } },
      ],
    });
    this.keepAliveBindGroup = this.device.createBindGroup({
      layout: this.keepAlivePipeline.getBindGroupLayout(0),
      entries: [{ binding: 0, resource: { buffer: this.keepAliveBuffer } }],
    });
    this.pickBindGroup = this.device.createBindGroup({
      layout: pickLayout,
      entries: [
        { binding: 0, resource: { buffer: this.visibilityInputRingBuffer, size: VISIBILITY_SLOT_BYTES } },
        { binding: 1, resource: { buffer: this.pickParamsBuffer } },
        { binding: 2, resource: { buffer: this.pickResultBuffer } },
        { binding: 3, resource: { buffer: this.objectDescriptorBuffer } },
      ],
    });
    this.batchAtlasBindGroup = this.device.createBindGroup({
      layout: this.batchBindGroupLayout,
      entries: [
        { binding: 0, resource: { buffer: this.batchSceneUniformBuffer } },
        { binding: 1, resource: { buffer: this.visibilityInputRingBuffer, size: VISIBILITY_SLOT_BYTES } },
        { binding: 2, resource: this.atlasTextureView },
        { binding: 3, resource: this.atlasSampler },
        { binding: 4, resource: this.shadowDepthTextureView },
        { binding: 5, resource: this.shadowSampler },
        { binding: 6, resource: { buffer: this.meshArenaVertexBuffer } },
        { binding: 7, resource: { buffer: this.arenaDrawRefBuffer } },
      ],
    });
    this.warmUpGpuResources();

    const renderModule = this.device.createShaderModule({ code: SHADER });
    const batchModule = this.device.createShaderModule({ code: BATCH_SHADER });

    this.pipeline = this.device.createRenderPipeline({
      layout: this.device.createPipelineLayout({ bindGroupLayouts: [this.bindGroupLayout] }),
      vertex: {
        module: renderModule,
        entryPoint: 'vsMain',
        buffers: [{
          arrayStride: 48,
          attributes: [
            { shaderLocation: 0, offset: 0, format: 'float32x3' },
            { shaderLocation: 1, offset: 12, format: 'float32x3' },
            { shaderLocation: 2, offset: 24, format: 'float32x4' },
            { shaderLocation: 3, offset: 40, format: 'float32x2' },
          ],
        }],
      },
      fragment: {
        module: renderModule,
        entryPoint: 'fsMain',
        targets: [{ format: this.format, ...ALPHA_BLEND_TARGET }],
      },
      primitive: { topology: 'triangle-list', cullMode: 'back' },
      depthStencil: {
        format: 'depth24plus',
        depthWriteEnabled: true,
        depthCompare: 'less',
      },
    });

    this.shadowPipeline = this.device.createRenderPipeline({
      layout: this.device.createPipelineLayout({ bindGroupLayouts: [this.bindGroupLayout] }),
      vertex: {
        module: renderModule,
        entryPoint: 'vsMain',
        buffers: [{
          arrayStride: 48,
          attributes: [
            { shaderLocation: 0, offset: 0, format: 'float32x3' },
            { shaderLocation: 1, offset: 12, format: 'float32x3' },
            { shaderLocation: 2, offset: 24, format: 'float32x4' },
            { shaderLocation: 3, offset: 40, format: 'float32x2' },
          ],
        }],
      },
      primitive: { topology: 'triangle-list', cullMode: 'back' },
      depthStencil: {
        format: 'depth24plus',
        depthWriteEnabled: true,
        depthCompare: 'less',
      },
    });

    this.batchPipeline = this.device.createRenderPipeline({
      layout: this.device.createPipelineLayout({ bindGroupLayouts: [this.batchBindGroupLayout] }),
      vertex: {
        module: batchModule,
        entryPoint: 'batchVsMain',
        buffers: [],
      },
      fragment: {
        module: batchModule,
        entryPoint: 'batchFsMain',
        targets: [{ format: this.format, ...ALPHA_BLEND_TARGET }],
      },
      primitive: { topology: 'triangle-list', cullMode: 'back' },
      depthStencil: { format: 'depth24plus', depthWriteEnabled: false, depthCompare: 'less-equal' },
    });

    this.batchShadowPipeline = this.device.createRenderPipeline({
      layout: this.device.createPipelineLayout({ bindGroupLayouts: [this.batchBindGroupLayout] }),
      vertex: {
        module: batchModule,
        entryPoint: 'batchShadowVsMain',
        buffers: [],
      },
      primitive: { topology: 'triangle-list', cullMode: 'back' },
      depthStencil: { format: 'depth24plus', depthWriteEnabled: true, depthCompare: 'less' },
    });

    void this.device.lost.then(() => { this.deviceLost = true; this.stop(); });
  }

  private createDepthTexture(width: number, height: number): GPUTexture {
    return this.device.createTexture({
      size: { width, height },
      format: 'depth24plus',
      usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
    });
  }

  resize(width: number, height: number): void {
    const nextWidth = Math.max(1, Math.floor(width));
    const nextHeight = Math.max(1, Math.floor(height));
    if (nextWidth === this.width && nextHeight === this.height) return;
    this.width = nextWidth;
    this.height = nextHeight;
    this.depthTexture.destroy();
    this.depthTexture = this.createDepthTexture(nextWidth, nextHeight);
    this.depthTextureView = this.depthTexture.createView();
  }

  private allocateAtlasRegion(width: number, height: number): RenderEnginTextureAtlasAllocation | null {
    const paddedWidth = width + ATLAS_PADDING * 2;
    const paddedHeight = height + ATLAS_PADDING * 2;
    if (paddedWidth > ATLAS_SIZE || paddedHeight > ATLAS_SIZE) return null;

    let bestIndex = -1;
    let bestWaste = Number.POSITIVE_INFINITY;
    for (let i = 0; i < this.atlasFreeRects.length; i += 1) {
      const rect = this.atlasFreeRects[i];
      if (rect.width < paddedWidth || rect.height < paddedHeight) continue;
      const waste = rect.width * rect.height - paddedWidth * paddedHeight;
      if (waste < bestWaste) {
        bestWaste = waste;
        bestIndex = i;
      }
    }
    if (bestIndex < 0) return null;

    const rect = this.atlasFreeRects.splice(bestIndex, 1)[0];
    const paddedX = rect.x;
    const paddedY = rect.y;
    const rightWidth = rect.width - paddedWidth;
    const bottomHeight = rect.height - paddedHeight;
    if (rightWidth > 0) this.atlasFreeRects.push({ x: paddedX + paddedWidth, y: paddedY, width: rightWidth, height: paddedHeight });
    if (bottomHeight > 0) this.atlasFreeRects.push({ x: paddedX, y: paddedY + paddedHeight, width: rect.width, height: bottomHeight });

    const x = paddedX + ATLAS_PADDING;
    const y = paddedY + ATLAS_PADDING;
    return {
      x,
      y,
      width,
      height,
      u0: x / ATLAS_SIZE,
      v0: y / ATLAS_SIZE,
      uScale: width / ATLAS_SIZE,
      vScale: height / ATLAS_SIZE,
    };
  }

  private freeAtlasRegion(allocation: RenderEnginTextureAtlasAllocation | undefined): void {
    if (!allocation) return;
    this.atlasFreeRects.push({
      x: allocation.x - ATLAS_PADDING,
      y: allocation.y - ATLAS_PADDING,
      width: allocation.width + ATLAS_PADDING * 2,
      height: allocation.height + ATLAS_PADDING * 2,
    });
  }

  private makePaddedAtlasUpload(data: Uint8Array, width: number, height: number): { data: Uint8Array; width: number; height: number; bytesPerRow: number } {
    const paddedWidth = width + ATLAS_PADDING * 2;
    const paddedHeight = height + ATLAS_PADDING * 2;
    const rowBytes = paddedWidth * 4;
    const bytesPerRow = Math.ceil(rowBytes / 256) * 256;
    const out = new Uint8Array(bytesPerRow * paddedHeight);
    for (let y = 0; y < paddedHeight; y += 1) {
      const srcY = Math.min(height - 1, Math.max(0, y - ATLAS_PADDING));
      for (let x = 0; x < paddedWidth; x += 1) {
        const srcX = Math.min(width - 1, Math.max(0, x - ATLAS_PADDING));
        const src = (srcY * width + srcX) * 4;
        const dst = y * bytesPerRow + x * 4;
        out[dst] = data[src];
        out[dst + 1] = data[src + 1];
        out[dst + 2] = data[src + 2];
        out[dst + 3] = data[src + 3];
      }
    }
    return { data: out, width: paddedWidth, height: paddedHeight, bytesPerRow };
  }

  uploadTexture(options: { width: number; height: number; data?: Uint8Array; format?: GPUTextureFormat; usage?: GPUTextureUsageFlags; mipLevelCount?: number }): RenderEnginGpuTexture {
    const width = Math.max(1, Math.floor(options.width));
    const height = Math.max(1, Math.floor(options.height));
    const format = options.format ?? 'rgba8unorm';

    let texture: GPUTexture | undefined;
    let view: GPUTextureView | undefined;
    let sampler: GPUSampler | undefined;
    let atlas: RenderEnginTextureAtlasAllocation | undefined;

    if (format === 'rgba8unorm' && options.data) {
      const expectedBytes = width * height * 4;
      if (options.data.byteLength < expectedBytes) {
        throw new Error('Texture upload data is smaller than the declared RGBA texture dimensions.');
      }
      const allocation = this.allocateAtlasRegion(width, height);
      if (!allocation) {
        throw new Error(`Texture ${width}x${height} does not fit the RenderEngin virtual atlas; resize, stream, or allocate a larger atlas before upload.`);
      }
      const padded = this.makePaddedAtlasUpload(options.data, width, height);
      this.device.queue.writeTexture(
        { texture: this.atlasTexture, origin: { x: allocation.x - ATLAS_PADDING, y: allocation.y - ATLAS_PADDING } },
        padded.data,
        { bytesPerRow: padded.bytesPerRow, rowsPerImage: padded.height },
        { width: padded.width, height: padded.height },
      );
      atlas = allocation;
    } else {
      texture = this.device.createTexture({
        size: { width, height },
        format,
        mipLevelCount: Math.max(1, Math.floor(options.mipLevelCount ?? 1)),
        usage: options.usage ?? (GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT),
      });
      if (options.data) {
        const rowBytes = width * 4;
        const paddedRowBytes = Math.ceil(rowBytes / 256) * 256;
        const expectedBytes = rowBytes * height;
        if (options.data.byteLength < expectedBytes) {
          texture.destroy();
          throw new Error('Texture upload data is smaller than the declared texture dimensions.');
        }
        const upload = paddedRowBytes === rowBytes
          ? options.data.subarray(0, expectedBytes)
          : new Uint8Array(paddedRowBytes * height);
        if (upload !== options.data) {
          for (let row = 0; row < height; row += 1) {
            upload.set(options.data.subarray(row * rowBytes, row * rowBytes + rowBytes), row * paddedRowBytes);
          }
        }
        this.device.queue.writeTexture({ texture }, upload, { bytesPerRow: paddedRowBytes, rowsPerImage: height }, { width, height });
      }
      view = texture.createView();
      sampler = this.device.createSampler({ magFilter: 'linear', minFilter: 'linear', mipmapFilter: 'linear', maxAnisotropy: 1 });
    }

    return {
      texture,
      view,
      sampler,
      width,
      height,
      format,
      atlas,
      dispose: () => {
        this.freeAtlasRegion(atlas);
        texture?.destroy();
      },
    };
  }

  uploadMesh(mesh: MeshBuffers): RenderEnginGpuMesh {
    const validation = validateMeshForRenderUpload(mesh);
    if (!validation.valid) throw new Error(validation.reason ?? 'Render asset validation failed before GPU upload.');
    const packed = packAosVertexBuffer(mesh);
    const vertexCount = packed.vertexCount;
    const indexCount = mesh.indices.length;

    if (this.arenaVertexCursor + vertexCount > MAX_ARENA_VERTICES || this.arenaIndexCursor + indexCount > MAX_ARENA_INDICES) {
      throw new Error(`Mesh arena exhausted: requested ${vertexCount} vertices / ${indexCount} indices, remaining ${MAX_ARENA_VERTICES - this.arenaVertexCursor} vertices / ${MAX_ARENA_INDICES - this.arenaIndexCursor} indices.`);
    }

    const vertexOffset = this.arenaVertexCursor;
    const indexOffset = this.arenaIndexCursor;
    const arenaIndices = new Uint32Array(indexCount);
    for (let i = 0; i < indexCount; i += 1) arenaIndices[i] = Number(mesh.indices[i]);

    this.device.queue.writeBuffer(this.meshArenaVertexBuffer, vertexOffset * ARENA_VERTEX_STRIDE_FLOATS * 4, packed.data);
    this.device.queue.writeBuffer(this.meshArenaIndexBuffer, indexOffset * 4, arenaIndices);

    this.arenaVertexCursor += vertexCount;
    this.arenaIndexCursor += indexCount;

    return {
      indexCount,
      indexFormat: mesh.indexFormat,
      arena: { vertexOffset, indexOffset, indexCount },
      dispose: () => {
        // Arena allocations are append-only for deterministic residency.
        // Reclamation/compaction belongs to an explicit arena rebuild, not per-mesh dispose.
      },
    };
  }

  createSceneObject(mesh: RenderEnginGpuMesh, modelMatrix: Mat4 = mat4Identity(), material: RenderGpuMaterial = { albedo: [0.58, 0.72, 0.95, 1], orm: [1, 0.55, 0, 0], emissive: [0, 0, 0, 0] }, albedoTexture: RenderEnginGpuTexture = this.defaultAlbedoTexture, options: { cullBounds?: RenderGpuCullBounds; metadata?: Vec4; objectId?: number; zIndex?: number } = {}): RenderEnginSceneObject {
    if (!mesh.arena) throw new Error('RenderEngin scene objects must use mesh-arena backed meshes.');
    if (!albedoTexture.atlas) throw new Error('RenderEngin scene objects must use atlas-backed textures.');
    return {
      mesh,
      modelMatrix,
      material,
      albedoTexture,
      cullBounds: options.cullBounds,
      metadata: options.metadata,
      objectId: options.objectId,
      zIndex: options.zIndex,
    };
  }

  setScene(scene: RenderEnginScene): void {
    if (scene.objects.length > MAX_GPU_CULL_OBJECTS) {
      throw new Error(`RenderEngin scene exceeds resident GPU object capacity (${scene.objects.length} > ${MAX_GPU_CULL_OBJECTS}).`);
    }
    let drawRefCount = 0;
    for (let i = 0; i < scene.objects.length; i += 1) {
      const object = scene.objects[i];
      if (!object.mesh.arena) throw new Error(`Scene object ${i} must use a mesh-arena backed mesh.`);
      if (!object.albedoTexture.atlas) throw new Error(`Scene object ${i} must use an atlas-backed texture.`);
      drawRefCount += object.mesh.arena.indexCount;
      if (drawRefCount > MAX_DRAW_REFS) {
        throw new Error(`Resident GPU draw-reference stream would exceed capacity (${drawRefCount} > ${MAX_DRAW_REFS}). Increase MAX_DRAW_REFS or stream the scene in pages.`);
      }
    }
    this.residentSceneObjects = Array.from(scene.objects);
    this.scene = { ...scene, objects: this.residentSceneObjects };
    this.uploadResidentScene(this.residentSceneObjects.length);
  }

  /**
   * Delta update for resident scene state. Use this for window moves, Engin swaps, hover,
   * material changes, and cull-bound updates without rewriting the full OS buffer.
   */
  updateSceneObject(index: number, object: RenderEnginSceneObject): void {
    if (index < 0 || index >= this.scene.objects.length) throw new Error(`Scene object index ${index} is out of range.`);
    if (!object.mesh.arena) throw new Error('Delta scene object must use a mesh-arena backed mesh.');
    if (!object.albedoTexture.atlas) throw new Error('Delta scene object must use an atlas-backed texture.');

    const previous = this.residentSceneObjects[index];
    const previousIndexCount = previous?.mesh.arena?.indexCount ?? 0;
    const nextIndexCount = object.mesh.arena.indexCount;
    const nextResidentIndexCount = this.residentSceneIndexCount - previousIndexCount + nextIndexCount;
    if (nextResidentIndexCount > MAX_DRAW_REFS) {
      throw new Error(`Resident GPU draw-reference stream would exceed capacity after delta update (${nextResidentIndexCount} > ${MAX_DRAW_REFS}).`);
    }

    this.residentSceneObjects[index] = object;
    this.residentSceneIndexCount = nextResidentIndexCount;
    this.writeSceneObjectResidentRecord(index, object);
    this.device.queue.writeBuffer(this.visibilityInputRingBuffer, index * INSTANCE_BYTES, this.instanceScratch.buffer, index * INSTANCE_BYTES, INSTANCE_BYTES);
    this.device.queue.writeBuffer(this.objectDescriptorBuffer, index * OBJECT_DESCRIPTOR_UINTS * 4, this.objectDescriptorScratch.buffer, index * OBJECT_DESCRIPTOR_UINTS * 4, OBJECT_DESCRIPTOR_UINTS * 4);
    this.device.queue.writeBuffer(this.visibilityIndirectBuffer, index * INDEXED_INDIRECT_BYTES, this.indirectScratch.buffer, index * INDEXED_INDIRECT_BYTES, INDEXED_INDIRECT_BYTES);
  }


  private writeObjectUniforms(object: RenderEnginSceneObject): void {
    const uniforms = this.uniformScratch;
    writeGpuMat4(uniforms, 0, object.modelMatrix ?? mat4Identity());
    writeGpuMat4(uniforms, 16, this.scene.viewMatrix);
    writeGpuMat4(uniforms, 32, this.scene.projectionMatrix);
    writeGpuMat4(uniforms, 48, this.scene.projectionMatrix);
    writeVec3AsVec4(uniforms, 64, this.scene.cameraPosition, 1);
    writeVec3AsVec4(uniforms, 68, this.scene.lightDirection, 0);
    writeVec4(uniforms, 72, object.material?.albedo ?? [0.58, 0.72, 0.95, 1]);
    writeVec4(uniforms, 76, object.material?.orm ?? [1, 0.55, 0, 0]);
    writeVec4(uniforms, 80, object.material?.emissive ?? [0, 0, 0, 0]);
    if (!object.uniformBuffer) throw new Error('Legacy object uniform buffer is not available in resident-renderer mode.');
    this.device.queue.writeBuffer(object.uniformBuffer, 0, uniforms);
  }

  private warmUpGpuResources(): void {
    const warm = new Uint8Array([0]);
    for (let slot = 0; slot < VISIBILITY_RING_SLOTS; slot += 1) {
      const offset = slot * VISIBILITY_SLOT_BYTES;
      this.device.queue.writeBuffer(this.visibilityInputRingBuffer, offset, warm);
      this.device.queue.writeBuffer(this.visibilityCompactedRingBuffer, offset, warm);
    }
    this.keepAliveScratch[0] = 0;
    this.device.queue.writeBuffer(this.keepAliveBuffer, 0, this.keepAliveScratch);
    void this.device.queue.onSubmittedWorkDone();
  }

  private encodeKeepAlive(encoder: GPUCommandEncoder): void {
    const pass = encoder.beginComputePass();
    pass.setPipeline(this.keepAlivePipeline);
    pass.setBindGroup(0, this.keepAliveBindGroup);
    pass.dispatchWorkgroups(1);
    pass.end();
  }

  private writeSceneObjectResidentRecord(index: number, object: RenderEnginSceneObject): number {
    const base = index * INSTANCE_FLOATS;
    writeGpuMat4(this.instanceScratch, base, object.modelMatrix ?? mat4Identity());
    const material = object.material ?? { albedo: [0.58, 0.72, 0.95, 1] as Vec4, orm: [1, 0.55, 0, 0] as Vec4, emissive: [0, 0, 0, 0] as Vec4 };
    writeVec4(this.instanceScratch, base + 16, material.albedo);
    writeVec4(this.instanceScratch, base + 20, material.orm);
    writeVec4(this.instanceScratch, base + 24, material.emissive);
    const bounds = object.cullBounds;
    const matrix = object.modelMatrix ?? mat4Identity();
    const center = bounds?.center ?? [matrix[3], matrix[7], matrix[11]] as Vec3;
    const radius = bounds?.radius ?? 1_000_000_000;
    this.instanceScratch[base + 28] = center[0];
    this.instanceScratch[base + 29] = center[1];
    this.instanceScratch[base + 30] = center[2];
    this.instanceScratch[base + 31] = Math.max(0, radius);

    const atlas = object.albedoTexture.atlas;
    const arena = object.mesh.arena;
    if (!atlas) throw new Error(`Scene object ${index} is missing atlas allocation.`);
    if (!arena) throw new Error(`Scene object ${index} is missing mesh arena allocation.`);

    this.instanceScratch[base + 32] = atlas.u0;
    this.instanceScratch[base + 33] = atlas.v0;
    this.instanceScratch[base + 34] = atlas.uScale;
    this.instanceScratch[base + 35] = atlas.vScale;
    writeVec4(this.instanceScratch, base + 36, object.metadata ?? [0, 0, 0, 0]);

    const descriptorBase = index * OBJECT_DESCRIPTOR_UINTS;
    this.objectDescriptorScratch[descriptorBase] = arena.indexOffset;
    this.objectDescriptorScratch[descriptorBase + 1] = arena.indexCount;
    this.objectDescriptorScratch[descriptorBase + 2] = arena.vertexOffset;
    this.objectDescriptorScratch[descriptorBase + 3] = 1;
    this.objectDescriptorScratch[descriptorBase + 4] = Math.max(0, Math.floor(object.objectId ?? index));
    this.objectDescriptorScratch[descriptorBase + 5] = Math.max(0, Math.floor(object.zIndex ?? index));
    this.objectDescriptorScratch[descriptorBase + 6] = 0;
    this.objectDescriptorScratch[descriptorBase + 7] = 0;

    const indirectBase = index * INDEXED_INDIRECT_UINTS;
    this.indirectScratch[indirectBase] = object.mesh.indexCount;
    this.indirectScratch[indirectBase + 1] = 0;
    this.indirectScratch[indirectBase + 2] = 0;
    this.indirectScratch[indirectBase + 3] = 0;
    this.indirectScratch[indirectBase + 4] = 0;
    return arena.indexCount;
  }

  private uploadResidentScene(objectCount: number): void {
    this.arenaBatchCompatible = true;
    this.residentSceneObjectCount = objectCount;
    this.residentSceneIndexCount = 0;
    this.residentSceneReady = objectCount > 0;
    if (objectCount === 0) {
      this.device.queue.writeBuffer(this.visibilityBatchIndirectBuffer, 0, this.batchIndirectScratch);
      return;
    }
    let arenaDrawRefTotal = 0;
    for (let i = 0; i < objectCount; i += 1) {
      const indexCount = this.writeSceneObjectResidentRecord(i, this.scene.objects[i]);
      arenaDrawRefTotal += indexCount;
      this.residentSceneIndexCount += indexCount;
      if (arenaDrawRefTotal > MAX_DRAW_REFS) {
        this.residentSceneReady = false;
        throw new Error(`Resident GPU draw-reference stream exhausted (${arenaDrawRefTotal} > ${MAX_DRAW_REFS}). Increase MAX_DRAW_REFS or stream the scene in pages.`);
      }
    }
    this.device.queue.writeBuffer(this.visibilityInputRingBuffer, 0, this.instanceScratch.buffer, 0, objectCount * INSTANCE_BYTES);
    this.device.queue.writeBuffer(this.objectDescriptorBuffer, 0, this.objectDescriptorScratch.buffer, 0, objectCount * OBJECT_DESCRIPTOR_UINTS * 4);
    this.device.queue.writeBuffer(this.visibilityIndirectBuffer, 0, this.indirectScratch.buffer, 0, objectCount * INDEXED_INDIRECT_BYTES);
  }

  private writeVisibilityFrameParams(objectCount: number): void {
    this.cullParamScratchU32[0] = objectCount;
    this.cullParamScratchU32[1] = Math.ceil(objectCount / VISIBILITY_SCAN_BLOCK_SIZE);
    this.cullParamScratchU32[2] = 0;
    this.cullParamScratchU32[3] = 0;
    writeMat4Mul(this.viewProjectionScratch, this.scene.projectionMatrix, this.scene.viewMatrix);
    writeFrustumPlanes(this.cullParamScratch, 4, this.viewProjectionScratch);
    this.batchIndirectScratch[0] = 0;
    this.batchIndirectScratch[1] = 0;
    this.batchIndirectScratch[2] = 0;
    this.batchIndirectScratch[3] = 0;
    this.device.queue.writeBuffer(this.visibilityBatchIndirectBuffer, 0, this.batchIndirectScratch);
    this.device.queue.writeBuffer(this.visibilityParamsBuffer, 0, this.cullParamScratch.buffer, 0, CULL_PARAMS_FLOATS * 4);
  }


  private encodeGpuVisibility(encoder: GPUCommandEncoder): RenderGpuVisibilityState {
    const objectCount = Math.min(this.residentSceneObjectCount, MAX_GPU_CULL_OBJECTS);
    const inputOffset = 0;
    const compactedOffset = this.visibilityRingSlot * VISIBILITY_SLOT_BYTES;
    this.visibilityRingSlot = (this.visibilityRingSlot + 1) % VISIBILITY_RING_SLOTS;
    if (objectCount === 0 || !this.residentSceneReady) {
      this.emptyIndexedIndirectScratch[0] = 6;
      this.emptyIndexedIndirectScratch[1] = 0;
      this.emptyIndexedIndirectScratch[2] = 0;
      this.emptyIndexedIndirectScratch[3] = 0;
      this.emptyIndexedIndirectScratch[4] = 0;
      this.batchIndirectScratch[0] = 0;
      this.batchIndirectScratch[1] = 0;
      this.batchIndirectScratch[2] = 0;
      this.batchIndirectScratch[3] = 0;
      this.device.queue.writeBuffer(this.visibilityIndirectBuffer, 0, this.emptyIndexedIndirectScratch);
      this.device.queue.writeBuffer(this.visibilityBatchIndirectBuffer, 0, this.batchIndirectScratch);
      this.lastVisibilityState = { enabled: false, objectCount: 0, inputOffset, compactedOffset, indirectBuffer: this.visibilityIndirectBuffer, visibleIndexBuffer: this.visibilityIndexBuffer, batchIndirectBuffer: this.visibilityBatchIndirectBuffer };
      return this.lastVisibilityState;
    }

    // Total residency steady state: per frame only camera/frustum params and indirect counters are reset.
    // Scene object data remains resident in visibilityInputRingBuffer until setScene/updateSceneObject changes it.
    this.writeVisibilityFrameParams(objectCount);

    let pass = encoder.beginComputePass();
    pass.setPipeline(this.visibilityFlagPipeline);
    pass.setBindGroup(0, this.visibilityFlagBindGroup, [inputOffset]);
    pass.dispatchWorkgroups(Math.ceil(objectCount / VISIBILITY_SCAN_BLOCK_SIZE));
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(this.visibilityScanPipeline);
    pass.setBindGroup(0, this.visibilityScanBindGroup);
    pass.dispatchWorkgroups(1);
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(this.visibilityScatterPipeline);
    pass.setBindGroup(0, this.visibilityScatterBindGroup, [inputOffset, compactedOffset]);
    pass.dispatchWorkgroups(Math.ceil(objectCount / 32));
    pass.end();

    this.lastVisibilityState = { enabled: true, objectCount, inputOffset, compactedOffset, indirectBuffer: this.visibilityIndirectBuffer, visibleIndexBuffer: this.visibilityIndexBuffer, batchIndirectBuffer: this.visibilityBatchIndirectBuffer };
    return this.lastVisibilityState;
  }

  getVisibilityState(): RenderGpuVisibilityState | null {
    return this.lastVisibilityState;
  }

  private canUseUnifiedBatch(visibility: RenderGpuVisibilityState): boolean {
    return visibility.enabled && visibility.objectCount > 0 && this.residentSceneReady;
  }

  private writeBatchSceneUniforms(): void {
    const uniforms = this.batchSceneScratch;
    writeGpuMat4(uniforms, 0, this.scene.viewMatrix);
    writeGpuMat4(uniforms, 16, this.scene.projectionMatrix);
    writeGpuMat4(uniforms, 32, this.scene.projectionMatrix);
    writeVec3AsVec4(uniforms, 48, this.scene.cameraPosition, 1);
    writeVec3AsVec4(uniforms, 52, this.scene.lightDirection, 0);
    this.device.queue.writeBuffer(this.batchSceneUniformBuffer, 0, uniforms);
  }

  private getBatchBindGroup(): GPUBindGroup {
    return this.batchAtlasBindGroup;
  }


  /**
   * GPU-resident pointer picking. The CPU writes only the normalized touch point;
   * the GPU scans resident instance bounds and returns the topmost scene-order hit.
   *
   * ndcX/ndcY are WebGPU NDC coordinates: x [-1, 1], y [-1, 1].
   * radiusNdc is a conservative touch radius in NDC units.
   */
  async pickResidentObject(request: RenderGpuPickRequest): Promise<RenderGpuPickResult> {
    if (!this.residentSceneReady || this.residentSceneObjectCount === 0) {
      return { hit: false, objectIndex: -1, objectId: 0 };
    }

    writeMat4Mul(this.viewProjectionScratch, this.scene.projectionMatrix, this.scene.viewMatrix);
    this.pickParamScratch.set(this.viewProjectionScratch, 0);
    this.pickParamScratch[16] = request.ndcX;
    this.pickParamScratch[17] = request.ndcY;
    this.pickParamScratch[18] = Math.max(0.0001, request.radiusNdc ?? 0.0125);
    this.pickParamScratch[19] = this.residentSceneObjectCount;

    this.pickResultClearScratch[0] = 0;
    this.pickResultClearScratch[1] = 0;
    this.pickResultClearScratch[2] = 0;
    this.pickResultClearScratch[3] = 0;

    this.device.queue.writeBuffer(this.pickParamsBuffer, 0, this.pickParamScratch);
    this.device.queue.writeBuffer(this.pickResultBuffer, 0, this.pickResultClearScratch);

    const encoder = this.device.createCommandEncoder();
    const pass = encoder.beginComputePass();
    pass.setPipeline(this.pickPipeline);
    pass.setBindGroup(0, this.pickBindGroup);
    pass.dispatchWorkgroups(Math.ceil(this.residentSceneObjectCount / 64));
    pass.end();
    encoder.copyBufferToBuffer(this.pickResultBuffer, 0, this.pickReadbackBuffer, 0, PICK_RESULT_BYTES);
    this.device.queue.submit([encoder.finish()]);

    await this.pickReadbackBuffer.mapAsync(GPUMapMode.READ);
    const raw = new Uint32Array(this.pickReadbackBuffer.getMappedRange());
    const encodedIndex = raw[0];
    const objectIndex = encodedIndex - 1;
    const objectId = encodedIndex === 0 ? 0 : (this.residentSceneObjects[objectIndex]?.objectId ?? objectIndex);
    const result = encodedIndex === 0
      ? { hit: false, objectIndex: -1, objectId: 0 }
      : { hit: true, objectIndex, objectId };
    this.pickReadbackBuffer.unmap();
    return result;
  }

  pickResidentObjectFromCanvas(clientX: number, clientY: number, radiusPx = 12): Promise<RenderGpuPickResult> {
    const rect = this.context.canvas.getBoundingClientRect();
    const x = ((clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1;
    const y = 1 - ((clientY - rect.top) / Math.max(1, rect.height)) * 2;
    const radiusNdc = (radiusPx / Math.max(1, Math.min(rect.width, rect.height))) * 2;
    return this.pickResidentObject({ ndcX: x, ndcY: y, radiusNdc });
  }

  private renderUnifiedBatchShadowPass(encoder: GPUCommandEncoder, visibility: RenderGpuVisibilityState): boolean {
    if (!this.canUseUnifiedBatch(visibility)) return false;
    const pass = encoder.beginRenderPass({
      colorAttachments: [],
      depthStencilAttachment: {
        view: this.shadowDepthTextureView,
        depthClearValue: 1,
        depthLoadOp: 'clear',
        depthStoreOp: 'store',
      },
    });
    pass.setPipeline(this.batchShadowPipeline);
    pass.setBindGroup(0, this.getBatchBindGroup(), [visibility.inputOffset]);
    pass.drawIndirect(this.visibilityBatchIndirectBuffer, 0);
    pass.end();
    return true;
  }

  private renderUnifiedBatchPass(pass: GPURenderPassEncoder, visibility: RenderGpuVisibilityState): boolean {
    if (!this.canUseUnifiedBatch(visibility)) return false;
    this.writeBatchSceneUniforms();
    pass.setPipeline(this.batchPipeline);
    pass.setBindGroup(0, this.getBatchBindGroup(), [visibility.inputOffset]);
    pass.drawIndirect(this.visibilityBatchIndirectBuffer, 0);
    return true;
  }

  private renderShadowPass(encoder: GPUCommandEncoder, visibility: RenderGpuVisibilityState): void {
    this.writeBatchSceneUniforms();
    if (this.renderUnifiedBatchShadowPass(encoder, visibility)) return;
    if (visibility.objectCount > 0) {
      throw new Error('Resident batch renderer was not ready for a non-empty scene. Re-upload the scene or fix the arena/atlas asset contract.');
    }
    const pass = encoder.beginRenderPass({
      colorAttachments: [],
      depthStencilAttachment: {
        view: this.shadowDepthTextureView,
        depthClearValue: 1,
        depthLoadOp: 'clear',
        depthStoreOp: 'store',
      },
    });
    pass.end();
  }

  renderFrame(): RenderEnginFrameStats {
    if (this.deviceLost) throw new Error('WebGPU device was lost; rebuild the Render service pipeline before rendering.');
    const started = performance.now();
    const encoder = this.device.createCommandEncoder();
    const visibility = this.encodeGpuVisibility(encoder);
    this.renderShadowPass(encoder, visibility);
    const pass = encoder.beginRenderPass({
      colorAttachments: [{
        view: this.context.getCurrentTexture().createView(),
        clearValue: { r: 0.94, g: 0.98, b: 1, a: 1 },
        loadOp: 'clear',
        storeOp: 'store',
      }],
      depthStencilAttachment: {
        view: this.depthTextureView,
        depthClearValue: 1,
        depthLoadOp: 'clear',
        depthStoreOp: 'store',
      },
    });
    let indexCount = 0;
    let drawCalls = 0;
    if (this.renderUnifiedBatchPass(pass, visibility)) {
      indexCount = this.residentSceneIndexCount;
      drawCalls = visibility.objectCount > 0 ? 1 : 0;
    } else if (visibility.objectCount > 0) {
      throw new Error('Resident batch renderer was not ready for a non-empty scene. Re-upload the scene or fix the arena/atlas asset contract.');
    }

    pass.end();
    this.encodeKeepAlive(encoder);
    this.device.queue.submit([encoder.finish()]);
    this.frameIndex += 1;
    return {
      frameIndex: this.frameIndex,
      cpuFrameMs: performance.now() - started,
      indexCount,
      drawCalls,
      estimatedFps: performance.now() > started ? 1000 / Math.max(0.001, performance.now() - started) : 0,
      droppedFrame: performance.now() - started > 16.7,
      measuredAt: new Date().toISOString(),
      gpuLatencyMeasured: false,
    };
  }

  start(hooks: RenderEnginLifecycleHooks = {}): void {
    this.stopped = false;
    hooks.onReady?.(this);
    const tick = () => {
      if (this.stopped) return;
      try {
        if (this.deviceLost) { this.stop(); return; }
        hooks.onFrame?.(this.renderFrame());
        this.animationFrame = requestAnimationFrame(tick);
      } catch (error) {
        this.stop();
        hooks.onError?.(error instanceof Error ? error : new Error(String(error)));
      }
    };
    this.animationFrame = requestAnimationFrame(tick);
  }

  stop(hooks: RenderEnginLifecycleHooks = {}): void {
    this.stopped = true;
    if (this.animationFrame !== null) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
    hooks.onStop?.();
  }

  isDeviceLost(): boolean {
    return this.deviceLost;
  }

  disposeScene(): void {
    // Resident mode does not give scene objects ownership of GPU buffers/textures.
    // Mesh arena and texture atlas allocations are renderer-level resources; callers
    // may keep uploaded assets alive across Engin/window swaps and dispose them explicitly.
    this.residentSceneObjects = [];
    this.scene = { ...this.scene, objects: this.residentSceneObjects };
    this.residentSceneReady = false;
    this.residentSceneObjectCount = 0;
    this.residentSceneIndexCount = 0;
    this.batchIndirectScratch[0] = 0;
    this.batchIndirectScratch[1] = 0;
    this.batchIndirectScratch[2] = 0;
    this.batchIndirectScratch[3] = 0;
    this.device.queue.writeBuffer(this.visibilityBatchIndirectBuffer, 0, this.batchIndirectScratch);
  }

  resetDynamicPreviewResidency(): void {
    // Dedicated edit/preview surfaces can recycle the append-only mesh arena each time
    // their working mesh changes. Shared service scenes should use disposeScene/setScene
    // instead so long-lived uploaded assets remain resident.
    this.disposeScene();
    this.arenaVertexCursor = 0;
    this.arenaIndexCursor = 0;
  }


  dispose(): void {
    this.stop();
    this.disposeScene();
    this.depthTexture.destroy();
    this.shadowDepthTexture.destroy();
    this.defaultAlbedoTexture.dispose();
    this.visibilityInputRingBuffer.destroy();
    this.visibilityCompactedRingBuffer.destroy();
    this.visibilityFlagsBuffer.destroy();
    this.visibilityPrefixBuffer.destroy();
    this.visibilityBlockSumsBuffer.destroy();
    this.visibilityBlockOffsetsBuffer.destroy();
    this.visibilityIndexBuffer.destroy();
    this.visibilityIndirectBuffer.destroy();
    this.visibilityBatchIndirectBuffer.destroy();
    this.visibilityParamsBuffer.destroy();
    this.pickParamsBuffer.destroy();
    this.pickResultBuffer.destroy();
    this.pickReadbackBuffer.destroy();
    this.batchSceneUniformBuffer.destroy();
    this.meshArenaVertexBuffer.destroy();
    this.meshArenaIndexBuffer.destroy();
    this.objectDescriptorBuffer.destroy();
    this.arenaDrawRefBuffer.destroy();
    this.atlasTexture.destroy();
    this.keepAliveBuffer.destroy();
  }
}
