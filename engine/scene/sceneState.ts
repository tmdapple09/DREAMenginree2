import {
    deleteScene,
    enqueueSyncAction,
    getScene,
    listScenes,
    saveScene,
    type CachedScene,
    type SceneObject,
    type SceneSnapshot,
} from '@/engine/offline/offlineCache';






export function createDefaultSnapshot(): SceneSnapshot {
  return {
    camera: {
      position: [0, 5, -10],
      target: [0, 0, 0],
      fov: 60,
    },
    objects: [],
    physicsEnabled: true,
    environment: 'studio',
  };
}


export async function persistScene(
  sceneId: string,
  snapshot: SceneSnapshot,
): Promise<void> {
  const now = new Date().toISOString();
  const cached: CachedScene = {
    id: sceneId,
    state: snapshot,
    savedAt: now,
    synced: false,
  };

  await saveScene(cached);

  
  await enqueueSyncAction({
    entityType: 'scene',
    entityId: sceneId,
    action: 'update',
    queuedAt: now,
  });
}


export async function restoreScene(
  sceneId: string,
): Promise<SceneSnapshot | undefined> {
  const cached = await getScene(sceneId);
  return cached?.state;
}


export async function removeScene(sceneId: string): Promise<void> {
  await deleteScene(sceneId);
}


export async function listPersistedScenes(): Promise<string[]> {
  const scenes = await listScenes();
  return scenes.map((s) => s.id);
}


export function scenesAreDifferent(
  a: SceneSnapshot,
  b: SceneSnapshot,
): boolean {
  
  if (a.objects.length !== b.objects.length) return true;
  if (a.physicsEnabled !== b.physicsEnabled) return true;
  if (a.environment !== b.environment) return true;

  
  const EPSILON = 0.001;
  for (let i = 0; i < 3; i++) {
    if (Math.abs(a.camera.position[i] - b.camera.position[i]) > EPSILON) return true;
    if (Math.abs(a.camera.target[i] - b.camera.target[i]) > EPSILON) return true;
  }
  if (Math.abs(a.camera.fov - b.camera.fov) > EPSILON) return true;

  
  for (let i = 0; i < a.objects.length; i++) {
    const oa = a.objects[i];
    const ob = b.objects[i];
    if (oa.id !== ob.id || oa.type !== ob.type || oa.assetId !== ob.assetId) return true;
    for (let j = 0; j < 3; j++) {
      if (Math.abs(oa.position[j] - ob.position[j]) > EPSILON) return true;
      if (Math.abs(oa.rotation[j] - ob.rotation[j]) > EPSILON) return true;
      if (Math.abs(oa.scale[j] - ob.scale[j]) > EPSILON) return true;
    }
  }

  return false;
}


export function createAutoSave(sceneId: string, intervalMs = 2000 ){
  let lastSnapshot: SceneSnapshot | null = null;
  let pending: SceneSnapshot | null = null;
  let timer: ReturnType<typeof setTimeout> | null = null;

  const flush = () => {
    if (pending && (!lastSnapshot || scenesAreDifferent(lastSnapshot, pending))) {
      lastSnapshot = pending;
      void persistScene(sceneId, pending);
    }
    pending = null;
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
  };

  const save = (snapshot: SceneSnapshot) => {
    pending = snapshot;
    if (timer === null) {
      timer = setTimeout(flush, intervalMs);
    }
  };

  save.flush = flush;
  return save;
}

export type { CachedScene, SceneObject, SceneSnapshot };
