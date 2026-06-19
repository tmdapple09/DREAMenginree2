import type { DomainObject, DomainVisibility, EnginBaseState, JsonObject, JsonValue } from '../../engine/engin-runtime/EnginBaseState';
import type { EnginAction, EnginRuleSetContract } from '../../engine/engin-runtime/EnginRuleSetContract';

export type Vec2 = readonly [number, number];
export type Vec3 = readonly [number, number, number];
export type Vec4 = readonly [number, number, number, number];
export type Mat4 = readonly [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
export type Quat = readonly [number, number, number, number];

const EPS = 1e-8;
const PI = Math.PI;

export function v3add(a: Vec3, b: Vec3): Vec3 { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; }
export function v3sub(a: Vec3, b: Vec3): Vec3 { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
export function v3scale(a: Vec3, s: number): Vec3 { return [a[0] * s, a[1] * s, a[2] * s]; }
export function v3dot(a: Vec3, b: Vec3): number { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
export function v3cross(a: Vec3, b: Vec3): Vec3 { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
export function v3length(a: Vec3): number { return Math.hypot(a[0], a[1], a[2]); }
export function v3normalize(a: Vec3): Vec3 { const l = v3length(a); return l < EPS ? [0, 0, 0] : [a[0] / l, a[1] / l, a[2] / l]; }
export function clamp01(x: number): number { return Math.min(1, Math.max(0, x)); }

export const mat4Identity = (): Mat4 => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
export const mat4Translation = (t: Vec3): Mat4 => [1, 0, 0, t[0], 0, 1, 0, t[1], 0, 0, 1, t[2], 0, 0, 0, 1];
export const mat4Scale = (s: Vec3): Mat4 => [s[0], 0, 0, 0, 0, s[1], 0, 0, 0, 0, s[2], 0, 0, 0, 0, 1];
export function mat4Mul(a: Mat4, b: Mat4): Mat4 { const o = Array(16).fill(0) as number[]; for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) for (let k = 0; k < 4; k++) o[r * 4 + c] += a[r * 4 + k] * b[k * 4 + c]; return o as unknown as Mat4; }
export function mat4Transform(m: Mat4, v: Vec4): Vec4 { return [m[0]*v[0]+m[1]*v[1]+m[2]*v[2]+m[3]*v[3], m[4]*v[0]+m[5]*v[1]+m[6]*v[2]+m[7]*v[3], m[8]*v[0]+m[9]*v[1]+m[10]*v[2]+m[11]*v[3], m[12]*v[0]+m[13]*v[1]+m[14]*v[2]+m[15]*v[3]]; }
export function mat4Perspective(fovYRadians: number, aspect: number, near: number, far: number): Mat4 { const y = 1 / Math.tan(fovYRadians / 2); const x = y / aspect; const nf = 1 / (near - far); return [x, 0, 0, 0, 0, y, 0, 0, 0, 0, (far + near) * nf, 2 * far * near * nf, 0, 0, -1, 0]; }
export function mat4LookAt(eye: Vec3, target: Vec3, up: Vec3): Mat4 { const z = v3normalize(v3sub(eye, target)); const x = v3normalize(v3cross(up, z)); const y = v3cross(z, x); return [x[0], x[1], x[2], -v3dot(x, eye), y[0], y[1], y[2], -v3dot(y, eye), z[0], z[1], z[2], -v3dot(z, eye), 0, 0, 0, 1]; }
export function mat4FromQuat(q: Quat): Mat4 { const [x,y,z,w]=q; const x2=x+x,y2=y+y,z2=z+z; const xx=x*x2, xy=x*y2, xz=x*z2, yy=y*y2, yz=y*z2, zz=z*z2, wx=w*x2, wy=w*y2, wz=w*z2; return [1-(yy+zz), xy-wz, xz+wy, 0, xy+wz, 1-(xx+zz), yz-wx, 0, xz-wy, yz+wx, 1-(xx+yy), 0, 0,0,0,1]; }
export function composeModelMatrix(translation: Vec3, rotation: Quat, scale: Vec3): Mat4 { return mat4Mul(mat4Mul(mat4Translation(translation), mat4FromQuat(rotation)), mat4Scale(scale)); }
export function projectVertex(local: Vec3, model: Mat4, view: Mat4, projection: Mat4): { clip: Vec4; ndc: Vec3 } { const clip = mat4Transform(mat4Mul(mat4Mul(projection, view), model), [local[0], local[1], local[2], 1]); const w = Math.abs(clip[3]) < EPS ? EPS : clip[3]; return { clip, ndc: [clip[0]/w, clip[1]/w, clip[2]/w] }; }

export interface Vertex { position: Vec3; normal: Vec3; tangent: Vec4; uv: Vec2; boneIds?: readonly [number, number, number, number]; weights?: readonly [number, number, number, number]; }
export interface MeshBuffers { vertices: readonly Vertex[]; indices: readonly number[]; layout: 'AOS_OBJECTS'; packedVertexStrideBytes: 48; skinningStoredOutOfBand: true; indexFormat: 'uint16' | 'uint32'; }
export function createMeshBuffers(vertices: readonly Omit<Vertex, 'tangent'>[], indices: readonly number[]): MeshBuffers { const verts = computeTangents(vertices.map(v => ({ ...v, tangent: [1,0,0,1] as Vec4 })), indices); return { vertices: verts, indices, layout: 'AOS_OBJECTS', packedVertexStrideBytes: 48, skinningStoredOutOfBand: true, indexFormat: vertices.length > 65535 ? 'uint32' : 'uint16' }; }
export function computeTangents(vertices: readonly Vertex[], indices: readonly number[]): Vertex[] { const tan = vertices.map((): Vec3 => [0,0,0]); const bit = vertices.map((): Vec3 => [0,0,0]); for (let i=0;i<indices.length;i+=3){ const i0=indices[i], i1=indices[i+1], i2=indices[i+2]; const v0=vertices[i0], v1=vertices[i1], v2=vertices[i2]; const e1=v3sub(v1.position,v0.position), e2=v3sub(v2.position,v0.position); const du1=v1.uv[0]-v0.uv[0], dv1=v1.uv[1]-v0.uv[1], du2=v2.uv[0]-v0.uv[0], dv2=v2.uv[1]-v0.uv[1]; const r=1/(du1*dv2-du2*dv1 || EPS); const t=v3scale(v3sub(v3scale(e1,dv2), v3scale(e2,dv1)), r); const b=v3scale(v3sub(v3scale(e2,du1), v3scale(e1,du2)), r); [i0,i1,i2].forEach(id=>{tan[id]=v3add(tan[id],t); bit[id]=v3add(bit[id],b);}); } return vertices.map((v,i)=>{ const n=v3normalize(v.normal); const t=v3normalize(v3sub(tan[i], v3scale(n, v3dot(n,tan[i])))); const handedness = v3dot(v3cross(n,t), bit[i]) < 0 ? -1 : 1; return {...v, normal:n, tangent:[t[0],t[1],t[2],handedness]}; }); }

export function ggxDistribution(n: Vec3, h: Vec3, roughness: number): number { const a=roughness*roughness, a2=a*a, ndh=clamp01(v3dot(n,h)); const d=(ndh*ndh*(a2-1)+1); return a2/(PI*d*d+EPS); }
export function schlickG1(ndv: number, roughness: number): number { const k=((roughness+1)**2)/8; return ndv/(ndv*(1-k)+k+EPS); }
export function smithGeometry(n: Vec3, v: Vec3, l: Vec3, roughness: number): number { return schlickG1(clamp01(v3dot(n,v)),roughness)*schlickG1(clamp01(v3dot(n,l)),roughness); }
export function fresnelSchlick(h: Vec3, v: Vec3, f0: Vec3): Vec3 { const f=(1-clamp01(v3dot(h,v)))**5; return [f0[0]+(1-f0[0])*f, f0[1]+(1-f0[1])*f, f0[2]+(1-f0[2])*f]; }
export function shadeCookTorrance(input: { albedo: Vec3; normal: Vec3; view: Vec3; light: Vec3; radiance: Vec3; roughness: number; metallic: number; ambientOcclusion: number }): Vec3 { const n=v3normalize(input.normal), v=v3normalize(input.view), l=v3normalize(input.light), h=v3normalize(v3add(v,l)); const rough=Math.max(0.04,input.roughness); const f0: Vec3 = [0.04*(1-input.metallic)+input.albedo[0]*input.metallic,0.04*(1-input.metallic)+input.albedo[1]*input.metallic,0.04*(1-input.metallic)+input.albedo[2]*input.metallic]; const D=ggxDistribution(n,h,rough), G=smithGeometry(n,v,l,rough), F=fresnelSchlick(h,v,f0); const ndl=clamp01(v3dot(n,l)), ndv=clamp01(v3dot(n,v)); return input.albedo.map((c,i)=>{ const kd=(1-F[i])*(1-input.metallic); const spec=(D*G*F[i])/(4*ndv*ndl+EPS); return (kd*c/PI + spec)*input.radiance[i]*ndl*input.ambientOcclusion; }) as unknown as Vec3; }
export function unpackOrm([r,g,b]: Vec3): { ambientOcclusion: number; roughness: number; metallic: number } { return { ambientOcclusion: clamp01(r), roughness: clamp01(g), metallic: clamp01(b) }; }

export interface Joint { name: string; parentIndex: number; localMatrix: Mat4; inverseBindMatrix: Mat4; }
export function evaluateJointWorldMatrices(joints: readonly Joint[]): Mat4[] { const out: Mat4[]=[]; joints.forEach((j,i)=>{ out[i]=j.parentIndex >=0 ? mat4Mul(out[j.parentIndex], j.localMatrix) : j.localMatrix; }); return out; }
export function evaluateSkinMatrices(joints: readonly Joint[]): Mat4[] { return evaluateJointWorldMatrices(joints).map((m,i)=>mat4Mul(m,joints[i].inverseBindMatrix)); }
export function skinVertexLbs(vertex: Vertex, skinMatrices: readonly Mat4[]): Vec3 { const ids=vertex.boneIds ?? [0,0,0,0], ws=vertex.weights ?? [1,0,0,0]; let out: Vec3=[0,0,0]; for(let i=0;i<4;i++){ if(ws[i]===0) continue; const p=mat4Transform(skinMatrices[ids[i]] ?? mat4Identity(), [vertex.position[0],vertex.position[1],vertex.position[2],1]); out=v3add(out, v3scale([p[0],p[1],p[2]], ws[i])); } return out; }
export interface DualQuaternion { real: Quat; dual: Quat; }
export function makeDualQuaternion(rotation: Quat, translation: Vec3): DualQuaternion { const t: Quat=[translation[0],translation[1],translation[2],0]; const d=quatMul(t, rotation).map(x=>x*0.5) as unknown as Quat; return { real: rotation, dual: d }; }
export function quatMul(a: Quat,b: Quat): Quat { return [a[3]*b[0]+a[0]*b[3]+a[1]*b[2]-a[2]*b[1], a[3]*b[1]-a[0]*b[2]+a[1]*b[3]+a[2]*b[0], a[3]*b[2]+a[0]*b[1]-a[1]*b[0]+a[2]*b[3], a[3]*b[3]-a[0]*b[0]-a[1]*b[1]-a[2]*b[2]]; }

export interface LodLevel { name: 'LOD0'|'LOD1'|'LOD2'; maxDistance: number; mesh: MeshBuffers; textureSize: number; }
export function selectLod(levels: readonly LodLevel[], distance: number): LodLevel { return [...levels].sort((a,b)=>a.maxDistance-b.maxDistance).find(l=>distance<=l.maxDistance) ?? levels[levels.length-1]; }
export interface GeometryCluster { id: string; triangleStart: number; triangleCount: number; children: readonly string[]; error: number; boundsCenter: Vec3; boundsRadius: number; }
export function clusterizeMesh(mesh: MeshBuffers, trianglesPerCluster = 128): GeometryCluster[] { const tris=Math.floor(mesh.indices.length/3), clusters: GeometryCluster[]=[]; for(let t=0;t<tris;t+=trianglesPerCluster){ const count=Math.min(trianglesPerCluster,tris-t); const pts: Vec3[]=[]; for(let i=t*3;i<(t+count)*3;i++) pts.push(mesh.vertices[mesh.indices[i]].position); const center=v3scale(pts.reduce((a,p)=>v3add(a,p),[0,0,0] as Vec3),1/pts.length); const radius=Math.max(...pts.map(p=>v3length(v3sub(p,center)))); clusters.push({id:`cluster-${clusters.length}`,triangleStart:t,triangleCount:count,children:[],error:1/(count+1),boundsCenter:center,boundsRadius:radius}); } return clusters; }
export function buildClusterDag(leaves: readonly GeometryCluster[]): GeometryCluster[] { const all=[...leaves]; let layer=[...leaves]; while(layer.length>1){ const next: GeometryCluster[]=[]; for(let i=0;i<layer.length;i+=2){ const pair=layer.slice(i,i+2); const center=v3scale(pair.reduce((a,c)=>v3add(a,c.boundsCenter),[0,0,0] as Vec3),1/pair.length); next.push({id:`cluster-parent-${all.length+next.length}`, triangleStart:Math.min(...pair.map(p=>p.triangleStart)), triangleCount:pair.reduce((s,p)=>s+p.triangleCount,0), children:pair.map(p=>p.id), error:pair.reduce((s,p)=>s+p.error,0), boundsCenter:center, boundsRadius:Math.max(...pair.map(p=>v3length(v3sub(p.boundsCenter,center))+p.boundsRadius))}); } all.push(...next); layer=next; } return all; }

export type RenderAssetData = JsonObject & { mesh: JsonObject; material: JsonObject; optimization: JsonObject; };
export type RenderAsset = DomainObject<'asset.render3d', RenderAssetData>;

export const RENDER_ENGIN_ID = 'render' as const;
export const RENDER_ENGIN_NAME = 'RenderEngin' as const;

export const RENDER_INTENT_TYPES = [
  'render.scene.load',
  'render.asset.preview',
  'render.asset.load',
  'render.asset.register',
  'render.asset.remove',
  'render.camera.orbit',
  'render.camera.zoom',
  'render.object.select',
  'render.object.transform',
  'render.material.set',
  'render.viewport.resize',
  'render.viewport.snapshot',
  'render.frame.render',
  'render.lifecycle.snapshot',
] as const;

export type RenderIntentType = (typeof RENDER_INTENT_TYPES)[number];
export type RenderIntent = EnginAction<RenderIntentType, JsonObject>;

export interface RenderAssetValidationResult extends JsonObject {
  valid: boolean;
  reason?: string;
  vertexCount: number;
  indexCount: number;
}

export function validateMeshForRenderUpload(mesh: MeshBuffers): RenderAssetValidationResult {
  if (!mesh.vertices.length) return { valid: false, reason: 'Render asset has an empty mesh.', vertexCount: 0, indexCount: mesh.indices.length };
  if (!mesh.indices.length || mesh.indices.length % 3 !== 0) return { valid: false, reason: 'Render asset indices must describe whole triangles.', vertexCount: mesh.vertices.length, indexCount: mesh.indices.length };
  const badIndex = mesh.indices.find((index) => !Number.isInteger(index) || index < 0 || index >= mesh.vertices.length);
  if (badIndex !== undefined) return { valid: false, reason: `Render asset index ${badIndex} is out of range.`, vertexCount: mesh.vertices.length, indexCount: mesh.indices.length };
  for (const vertex of mesh.vertices) {
    const channels = [...vertex.position, ...vertex.normal, ...vertex.tangent, ...vertex.uv];
    if (channels.some((value) => !Number.isFinite(value))) return { valid: false, reason: 'Render asset contains NaN or infinite vertex data.', vertexCount: mesh.vertices.length, indexCount: mesh.indices.length };
    if (v3length(vertex.normal) < EPS) return { valid: false, reason: 'Render asset contains an invalid normal.', vertexCount: mesh.vertices.length, indexCount: mesh.indices.length };
  }
  return { valid: true, vertexCount: mesh.vertices.length, indexCount: mesh.indices.length };
}

export function createRenderAsset(input: { id: string; ownerId: string; runtimeId: string; visibility: DomainVisibility; mesh: MeshBuffers; material: { albedo: Vec3; orm: Vec3 }; now?: string }): RenderAsset {
  const validation = validateMeshForRenderUpload(input.mesh);
  if (!validation.valid) throw new Error(validation.reason ?? 'Render asset validation failed.');
  const now=input.now ?? new Date().toISOString();
  return { id:input.id, type:'asset.render3d', ownerId:input.ownerId, runtimeId:input.runtimeId, visibility:input.visibility, createdAt:now, updatedAt:now, version:1, data:{ mesh:{ vertexCount:input.mesh.vertices.length, indexCount:input.mesh.indices.length, packedVertexStrideBytes:48, skinningStoredOutOfBand:true, indexFormat:input.mesh.indexFormat, validation }, material:{ albedo:input.material.albedo as unknown as JsonValue, orm:input.material.orm as unknown as JsonValue, channels:{ r:'ambientOcclusion', g:'roughness', b:'metallic' } }, optimization:{ clusterTriangles:128, lodPolicy:'manual-until-gpu-culling-ships' } } };
}

function renderDomain(state: EnginBaseState): JsonObject {
  return {
    assets: (state.domain.assets as JsonObject | undefined) ?? {},
    scene: (state.domain.scene as JsonObject | undefined) ?? { objects: {}, selectedObjectId: null, environment: { clearColor: '#eff6ff' } },
    viewport: (state.domain.viewport as JsonObject | undefined) ?? { width: 0, height: 0, webgpu: 'unknown', mobile: false },
    camera: (state.domain.camera as JsonObject | undefined) ?? { orbit: [0, 0], zoom: 2.4, target: [0, 0, 0] },
    events: (state.domain.events as JsonObject | undefined) ?? {},
  };
}

function bump(state: EnginBaseState, domain: JsonObject): EnginBaseState {
  return { ...state, revision: state.revision + 1, updatedAt: new Date().toISOString(), domain };
}

export const RenderEnginRuleSet: EnginRuleSetContract<RenderIntent> = {
  manifest:{
    id:'render.ruleset.webgpu-runtime',
    name:'RenderEngin WebGPU Runtime RuleSet',
    version:'1.1.0',
    schema:{
      actionTypes: RENDER_INTENT_TYPES,
      domainVersion:1,
      validateAction: (action) => ({ valid: RENDER_INTENT_TYPES.includes(action.type) }),
    },
    compatibility:{ minRuntimeVersion:'1.0.0', requiredFeatures:['lifecycle-hooks','manifest-schema','strict-intent-routing','sync-transport','state-snapshotting','compatibility-negotiation'] }
  },
  params:{ enginId: RENDER_ENGIN_ID, name: RENDER_ENGIN_NAME, layoutMode:'immersive', accentColor:'#38bdf8', route:'/engines/render', capabilityId:'render' },
  requiredCapabilities:['state:read','state:write','assets:load','bridge:emit','bridge:listen'],
  capabilityTargets:{ enginId: RENDER_ENGIN_ID, targets:[{ dimension:'viewport-framerate', direction:'at-least', target:30, unit:'fps', minimumProgress:0.8 }, { dimension:'gpu-render-latency', direction:'at-most', target:16.7, unit:'ms', minimumProgress:0.8 }], levers:['route render mutations through intent snapshots','pack vertices as 48-byte AOS buffers','dispose GPU resources on unload and remount','keep claimed supports aligned with implemented renderer'] },
  constraints:[(_state, action)=>({valid: RENDER_INTENT_TYPES.includes(action.type), reason:'Unknown RenderEngin intent.'})],
  transform(state: EnginBaseState, action: RenderIntent): EnginBaseState {
    const base = renderDomain(state);
    const assets = { ...(base.assets as JsonObject) };
    const scene = { ...(base.scene as JsonObject) };
    const viewport = { ...(base.viewport as JsonObject) };
    const camera = { ...(base.camera as JsonObject) };
    const events: Record<string, JsonValue | undefined> = { ...(base.events as JsonObject), lastIntent: action.type, lastIntentAt: new Date().toISOString() };
    if(action.type==='render.asset.register' && action.payload?.asset && typeof action.payload.asset === 'object') { const asset = action.payload.asset as JsonObject; if (typeof asset.id === 'string' && asset.type === 'asset.render3d') assets[asset.id] = asset; }
    if(action.type==='render.asset.remove' && typeof action.payload?.id === 'string') delete assets[action.payload.id];
    if(action.type==='render.scene.load' && action.payload?.scene && typeof action.payload.scene === 'object') Object.assign(scene, action.payload.scene);
    if(action.type==='render.object.select') scene.selectedObjectId = typeof action.payload?.id === 'string' ? action.payload.id : null;
    if(action.type==='render.object.transform' && typeof action.payload?.id === 'string') scene[`transform:${action.payload.id}`] = action.payload.transform as JsonValue;
    if(action.type==='render.material.set' && typeof action.payload?.objectId === 'string') scene[`material:${action.payload.objectId}`] = action.payload.material as JsonValue;
    if(action.type==='render.camera.orbit') camera.orbit = action.payload?.orbit as JsonValue;
    if(action.type==='render.camera.zoom' && typeof action.payload?.zoom === 'number') camera.zoom = action.payload.zoom;
    if(action.type==='render.viewport.resize') { viewport.width = action.payload?.width as JsonValue; viewport.height = action.payload?.height as JsonValue; }
    if(action.type==='render.asset.preview' || action.type==='render.asset.load') events.assetPipeline = action.payload ?? {};
    if(action.type==='render.viewport.snapshot' || action.type==='render.lifecycle.snapshot') events.snapshotRequested = true;
    if(action.type==='render.frame.render') events.lastFrame = action.payload ?? {};
    return bump(state, { ...state.domain, assets, scene, viewport, camera, events, lastIntent: action.type });
  },
  deriveState(state: EnginBaseState): JsonObject {
    const domain = renderDomain(state);
    return { assetCount:Object.keys(domain.assets as JsonObject).length, scene: domain.scene, viewport: domain.viewport, camera: domain.camera, pipeline:['User Action','Intent','Runtime Orchestration','Capability Resolution','Engin Execution','State Mutation','Event Distribution','Surface Update'], supports:['webgpu-device-creation','canvas-context-creation','shader-pipeline-creation','depth-buffer','resize-handling','per-object-uniforms','packed-webgpu-vertex-buffer','asset-validation-before-gpu-upload','obj-import','glb-header-validation','glb-mesh-extraction','scene-graph-domain-objects','scene-serialization','scene-undo-redo','camera-orbit-zoom-controls','viewport-snapshot-capture','fallback-2d-renderer','asset-memory-accounting','domain-authorization-gates','contentengin-render-handoff','gameengin-render-handoff','texture-domain-objects','texture-samplers','texture-memory-accounting','gpu-texture-shader-binding','shadow-depth-pass','pbr-material-uniforms','emissive-alpha-material-controls','directional-point-spot-lights','shadow-map-descriptors','environment-map-slots','tone-mapping-settings','gamma-correction-settings','bloom-settings','post-processing-execution','wireframe-normal-depth-debug-modes','render-quality-settings','frame-performance-reporting','benchmark-scene-gates','gpu-benchmark-proof','ten-million-poly-proof','server-backed-render-assets-rls','frustum-culling','screen-space-lod-selection','instanced-render-batching','terrain-chunk-planning','animation-clip-sampling','explicit-gpu-resource-disposal','runtime-snapshots','intent-routed-viewport-actions'], limitations:['DQS rendering, production timestamp-query GPU timing, full shadow sampling in the color pass, and live-device 10M-poly certification remain future work'] };
  }
};
