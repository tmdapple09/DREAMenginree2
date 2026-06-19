import type { DomainObject, DomainVisibility, JsonObject, JsonValue } from '@/engine/engin-runtime/EnginBaseState';
import { composeModelMatrix, mat4Mul, mat4Identity, type Mat4, type Quat, type Vec3 } from './core';

export type RenderSceneObjectKind = 'mesh' | 'camera' | 'light' | 'empty' | 'group';

export interface RenderTransform extends JsonObject {
  translation: Vec3;
  rotation: Quat;
  scale: Vec3;
}

export interface RenderSceneObjectData extends JsonObject {
  name: string;
  kind: RenderSceneObjectKind;
  parentId: string | null;
  childIds: string[];
  assetId: string | null;
  transform: RenderTransform;
  visible: boolean;
  locked: boolean;
  layerId: string;
  groupId: string | null;
  material: JsonObject;
  camera?: JsonObject;
  light?: JsonObject;
}

export type RenderSceneObject = DomainObject<'render.scene.object', RenderSceneObjectData>;

export interface RenderSceneLayer extends JsonObject {
  id: string;
  name: string;
  visible: boolean;
  locked: boolean;
}

export interface RenderSceneEnvironment extends JsonObject {
  clearColor: string;
  skyboxAssetId: string | null;
  environmentMapAssetId: string | null;
  exposure: number;
  toneMapping: 'standard' | 'filmic';
}

export interface RenderSceneData extends JsonObject {
  objectIds: string[];
  objects: Record<string, RenderSceneObject>;
  selectedObjectIds: string[];
  layers: Record<string, RenderSceneLayer>;
  activeLayerId: string;
  activeCameraId: string | null;
  environment: RenderSceneEnvironment;
  undoStack: JsonObject[];
  redoStack: JsonObject[];
}

export type RenderScene = DomainObject<'render.scene', RenderSceneData>;

const DEFAULT_LAYER: RenderSceneLayer = Object.freeze({ id: 'layer:default', name: 'Default', visible: true, locked: false });
const DEFAULT_ENVIRONMENT: RenderSceneEnvironment = Object.freeze({ clearColor: '#eff6ff', skyboxAssetId: null, environmentMapAssetId: null, exposure: 1, toneMapping: 'standard' });

function nowIso(now = new Date().toISOString()): string {
  return now;
}

export function defaultRenderTransform(input: Partial<RenderTransform> = {}): RenderTransform {
  return {
    translation: input.translation ?? [0, 0, 0],
    rotation: input.rotation ?? [0, 0, 0, 1],
    scale: input.scale ?? [1, 1, 1],
  };
}

export function createRenderScene(input: { id: string; ownerId: string; runtimeId: string; visibility?: DomainVisibility; now?: string }): RenderScene {
  const createdAt = nowIso(input.now);
  return {
    id: input.id,
    type: 'render.scene',
    ownerId: input.ownerId,
    runtimeId: input.runtimeId,
    visibility: input.visibility ?? 'local',
    createdAt,
    updatedAt: createdAt,
    version: 1,
    data: {
      objectIds: [],
      objects: {},
      selectedObjectIds: [],
      layers: { [DEFAULT_LAYER.id]: { ...DEFAULT_LAYER } },
      activeLayerId: DEFAULT_LAYER.id,
      activeCameraId: null,
      environment: { ...DEFAULT_ENVIRONMENT },
      undoStack: [],
      redoStack: [],
    },
  };
}

export function createRenderSceneObject(input: {
  id: string;
  ownerId: string;
  runtimeId: string;
  name: string;
  kind?: RenderSceneObjectKind;
  assetId?: string | null;
  parentId?: string | null;
  layerId?: string;
  transform?: Partial<RenderTransform>;
  visibility?: DomainVisibility;
  now?: string;
}): RenderSceneObject {
  const createdAt = nowIso(input.now);
  return {
    id: input.id,
    type: 'render.scene.object',
    ownerId: input.ownerId,
    runtimeId: input.runtimeId,
    visibility: input.visibility ?? 'local',
    createdAt,
    updatedAt: createdAt,
    version: 1,
    data: {
      name: input.name,
      kind: input.kind ?? 'mesh',
      parentId: input.parentId ?? null,
      childIds: [],
      assetId: input.assetId ?? null,
      transform: defaultRenderTransform(input.transform),
      visible: true,
      locked: false,
      layerId: input.layerId ?? DEFAULT_LAYER.id,
      groupId: null,
      material: {},
    },
  };
}

function rememberUndo(scene: RenderScene): JsonObject[] {
  const snapshot = serializeRenderScene({ ...scene, data: { ...scene.data, undoStack: [], redoStack: [] } });
  return [...scene.data.undoStack, snapshot].slice(-32);
}

export function addObjectToRenderScene(scene: RenderScene, object: RenderSceneObject): RenderScene {
  const parent = object.data.parentId ? scene.data.objects[object.data.parentId] : null;
  const objects = { ...scene.data.objects, [object.id]: object };
  if (parent) {
    objects[parent.id] = { ...parent, data: { ...parent.data, childIds: [...new Set([...parent.data.childIds, object.id])] }, updatedAt: nowIso(), version: parent.version + 1 };
  }
  return {
    ...scene,
    updatedAt: nowIso(),
    version: scene.version + 1,
    data: { ...scene.data, objectIds: [...new Set([...scene.data.objectIds, object.id])], objects, undoStack: rememberUndo(scene), redoStack: [] },
  };
}

export function selectRenderSceneObjects(scene: RenderScene, ids: readonly string[]): RenderScene {
  const selectedObjectIds = ids.filter((id) => !!scene.data.objects[id]);
  return { ...scene, updatedAt: nowIso(), version: scene.version + 1, data: { ...scene.data, selectedObjectIds } };
}

export function updateRenderSceneObject(scene: RenderScene, id: string, patch: Partial<RenderSceneObjectData>): RenderScene {
  const object = scene.data.objects[id];
  if (!object || object.data.locked) return scene;
  const nextObject: RenderSceneObject = { ...object, updatedAt: nowIso(), version: object.version + 1, data: { ...object.data, ...patch } };
  return {
    ...scene,
    updatedAt: nowIso(),
    version: scene.version + 1,
    data: { ...scene.data, objects: { ...scene.data.objects, [id]: nextObject }, undoStack: rememberUndo(scene), redoStack: [] },
  };
}

export function removeRenderSceneObject(scene: RenderScene, id: string): RenderScene {
  if (!scene.data.objects[id]) return scene;
  const objects = { ...scene.data.objects };
  delete objects[id];
  return {
    ...scene,
    updatedAt: nowIso(),
    version: scene.version + 1,
    data: {
      ...scene.data,
      objectIds: scene.data.objectIds.filter((objectId) => objectId !== id),
      selectedObjectIds: scene.data.selectedObjectIds.filter((objectId) => objectId !== id),
      objects,
      undoStack: rememberUndo(scene),
      redoStack: [],
    },
  };
}

export function setRenderSceneEnvironment(scene: RenderScene, environment: Partial<RenderSceneEnvironment>): RenderScene {
  return { ...scene, updatedAt: nowIso(), version: scene.version + 1, data: { ...scene.data, environment: { ...scene.data.environment, ...environment }, undoStack: rememberUndo(scene), redoStack: [] } };
}

export function computeRenderObjectWorldMatrix(scene: RenderScene, objectId: string, visited = new Set<string>()): Mat4 {
  const object = scene.data.objects[objectId];
  if (!object || visited.has(objectId)) return mat4Identity();
  visited.add(objectId);
  const local = composeModelMatrix(object.data.transform.translation, object.data.transform.rotation, object.data.transform.scale);
  return object.data.parentId ? mat4Mul(computeRenderObjectWorldMatrix(scene, object.data.parentId, visited), local) : local;
}

export function serializeRenderScene(scene: RenderScene): JsonObject {
  return JSON.parse(JSON.stringify(scene)) as JsonObject;
}

export function deserializeRenderScene(value: JsonObject): RenderScene {
  if (value.type !== 'render.scene' || typeof value.id !== 'string' || !value.data || typeof value.data !== 'object') {
    throw new Error('Invalid RenderEngin scene snapshot.');
  }
  return value as unknown as RenderScene;
}

export function undoRenderScene(scene: RenderScene): RenderScene {
  const latest = scene.data.undoStack.at(-1);
  if (!latest) return scene;
  const restored = deserializeRenderScene(latest);
  return { ...restored, data: { ...restored.data, redoStack: [...scene.data.redoStack, serializeRenderScene(scene)].slice(-32) } };
}

export function redoRenderScene(scene: RenderScene): RenderScene {
  const latest = scene.data.redoStack.at(-1);
  if (!latest) return scene;
  const restored = deserializeRenderScene(latest);
  return { ...restored, data: { ...restored.data, undoStack: [...scene.data.undoStack, serializeRenderScene(scene)].slice(-32) } };
}

export function renderSceneSummary(scene: RenderScene): JsonObject {
  return {
    objectCount: scene.data.objectIds.length,
    selectedObjectIds: scene.data.selectedObjectIds,
    layerCount: Object.keys(scene.data.layers).length,
    activeCameraId: scene.data.activeCameraId,
    environment: scene.data.environment as unknown as JsonValue,
  };
}
