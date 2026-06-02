'use client';

import type { ActiveModuleInstance, RuntimeRegionKey } from '@/types/dreamArtifact';

const STORAGE_KEY = (accountId: string) => `dream_active_modules_${accountId}`;

function isBrowser( ){
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

function writeInstances(accountId: string, instances: ActiveModuleInstance[]): ActiveModuleInstance[] | undefined {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY(accountId), JSON.stringify(instances));
}

export function loadActiveModules(accountId?: string | null) {
  if (!accountId || !isBrowser()) return [];

  const raw = window.localStorage.getItem(STORAGE_KEY(accountId));
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw) as ActiveModuleInstance[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveActiveModule(accountId: string, instance: ActiveModuleInstance): void {
  const existing = loadActiveModules(accountId);
  const map = new Map(existing.map((entry) => [entry.instanceId, entry]));
  map.set(instance.instanceId, instance);
  writeInstances(accountId, Array.from(map.values()));
}

export function saveActiveModules(accountId: string, instances: ActiveModuleInstance[]) {
  writeInstances(accountId, instances);
}

/** Replace one runtime region without overwriting modules mounted in the other. */
export function saveActiveModulesForRegion(
  accountId: string,
  runtimeRegion: RuntimeRegionKey,
  instances: ActiveModuleInstance[],
): void {
  const retained = loadActiveModules(accountId).filter(
    (instance) => instance.runtimeRegion !== runtimeRegion,
  );
  writeInstances(accountId, [...retained, ...instances]);
}

/** Move one live module between the canonical dual-runtime regions. */
export function transferActiveModuleRegion(
  accountId: string,
  instanceId: string,
  targetRegion: RuntimeRegionKey,
): ActiveModuleInstance | null {
  let transferred: ActiveModuleInstance | null = null;
  const next = loadActiveModules(accountId).map((instance) => {
    if (instance.instanceId !== instanceId) return instance;
    transferred = { ...instance, runtimeRegion: targetRegion };
    return transferred;
  });
  if (!transferred) return null;
  writeInstances(accountId, next);
  return transferred;
}

export function removeActiveModule(accountId: string, instanceId: string): void {
  const next = loadActiveModules(accountId).filter((instance) => instance.instanceId !== instanceId);
  writeInstances(accountId, next);
}