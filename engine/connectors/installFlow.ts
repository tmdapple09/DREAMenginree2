import { getWidgetTypesForConnector } from '@/engine/widgets/widgetRegistry';






export interface SlotGrid {
  totalSlots: number;
  filledSlots: Set<number>;
}


export function findBestSlot(grid: SlotGrid): number {
  const { totalSlots, filledSlots } = grid;
  const empty: number[] = [];
  for (let i = 0; i < totalSlots; i++) {
    if (!filledSlots.has(i)) empty.push(i);
  }
  if (empty.length === 0) return -1;

  
  const centre = (totalSlots - 1) / 2;
  empty.sort((a, b) => Math.abs(a - centre) - Math.abs(b - centre));
  return empty[0];
}



const SESSION_DISMISSED = new Set<string>(); 

function suggestedKey(): string {
  return 'de_suggested_widgets';
}
function permanentDismissKey(): string {
  return 'de_dismissed_widgets';
}

export interface SuggestedWidget {
  widgetId: string;
  connectorId: string;
  connectorName: string;
  addedAt: number;
}


const _suggestedInMemory: SuggestedWidget[] = [];
const _permanentlyDismissedInMemory = new Set<string>();

function hasLocalStorage(): boolean {
  try {
    return typeof localStorage !== 'undefined' && localStorage !== null;
  } catch {
    return false;
  }
}

function loadSuggested(): SuggestedWidget[] {
  if (!hasLocalStorage()) return [..._suggestedInMemory];
  try {
    const persisted: SuggestedWidget[] = JSON.parse(localStorage.getItem(suggestedKey()) ?? '[]');
    
    for (const p of persisted) {
      if (!_suggestedInMemory.some((s) => s.widgetId === p.widgetId && s.connectorId === p.connectorId)) {
        _suggestedInMemory.push(p);
      }
    }
    return [..._suggestedInMemory];
  } catch {
    return [..._suggestedInMemory];
  }
}

function saveSuggested(items: SuggestedWidget[]): void {
  
  _suggestedInMemory.length = 0;
  _suggestedInMemory.push(...items);
  if (!hasLocalStorage()) return;
  try {
    localStorage.setItem(suggestedKey(), JSON.stringify(items));
  } catch {  }
}

function loadPermanentlyDismissed(): Set<string> {
  if (!hasLocalStorage()) return new Set(_permanentlyDismissedInMemory);
  try {
    const arr: string[] = JSON.parse(localStorage.getItem(permanentDismissKey()) ?? '[]');
    for (const id of arr) _permanentlyDismissedInMemory.add(id);
    return new Set(_permanentlyDismissedInMemory);
  } catch {
    return new Set(_permanentlyDismissedInMemory);
  }
}

function savePermanentlyDismissed(ids: Set<string>): void {
  _permanentlyDismissedInMemory.clear();
  for (const id of ids) _permanentlyDismissedInMemory.add(id);
  if (!hasLocalStorage()) return;
  try {
    localStorage.setItem(permanentDismissKey(), JSON.stringify([...ids]));
  } catch {  }
}


export function queueSuggestedWidget(
  widgetId: string,
  connectorId: string,
  connectorName: string,
): void {
  const items = loadSuggested();
  const already = items.some((s) => s.widgetId === widgetId && s.connectorId === connectorId);
  if (!already) {
    items.push({ widgetId, connectorId, connectorName, addedAt: Date.now() });
    saveSuggested(items);
  }
  SESSION_DISMISSED.add(widgetId); 
}


export function getSuggestedWidgets(): SuggestedWidget[] {
  const dismissed = loadPermanentlyDismissed();
  return loadSuggested().filter((s) => !dismissed.has(s.widgetId));
}


export function dismissSuggestedWidget(widgetId: string): void {
  const dismissed = loadPermanentlyDismissed();
  dismissed.add(widgetId);
  savePermanentlyDismissed(dismissed);
  SESSION_DISMISSED.add(widgetId);

  const items = loadSuggested().filter((s) => s.widgetId !== widgetId);
  saveSuggested(items);
}


export function removeSuggestedWidget(widgetId: string): void {
  const items = loadSuggested().filter((s) => s.widgetId !== widgetId);
  saveSuggested(items);
}


export function isSessionDismissed(widgetId: string): boolean {
  return SESSION_DISMISSED.has(widgetId);
}


export function _resetInstallFlowState(): void {
  _suggestedInMemory.length = 0;
  _permanentlyDismissedInMemory.clear();
  SESSION_DISMISSED.clear();
  _deferred = null;
  _placementQueue.length = 0;
  if (_autoLockTimer !== null) { clearTimeout(_autoLockTimer); _autoLockTimer = null; }
}



interface DeferredPrompt {
  connectorId: string;
  connectorName: string;
}
let _deferred: DeferredPrompt | null = null;

export function deferPrompt(connectorId: string, connectorName: string): void {
  _deferred = { connectorId, connectorName };
}

export function consumeDeferredPrompt(): DeferredPrompt | null {
  const p = _deferred;
  _deferred = null;
  return p;
}

interface QueuedPlacement {
  widgetId: string;
  connectorId: string;
  connectorName: string;
}
const _placementQueue: QueuedPlacement[] = [];

export function enqueueForPlacement(widgetId: string, connectorId: string, connectorName: string): void {
  _placementQueue.push({ widgetId, connectorId, connectorName });
}

export function dequeueNextPlacement(): QueuedPlacement | undefined {
  return _placementQueue.shift();
}

export function peekPlacementQueue(): QueuedPlacement[] {
  return [..._placementQueue];
}

const AUTO_LOCK_DELAY_MS = 1200; 

let _autoLockTimer: ReturnType<typeof setTimeout> | null = null;


export function scheduleAutoLock(
  onLock: () => void,
  opts: { isDragging?: boolean; isMenuAnimating?: boolean; isKeyboardOpen?: boolean } = {},
): void {
  if (opts.isDragging || opts.isMenuAnimating || opts.isKeyboardOpen) return; 

  if (_autoLockTimer !== null) clearTimeout(_autoLockTimer);
  _autoLockTimer = setTimeout(() => {
    _autoLockTimer = null;
    onLock();
  }, AUTO_LOCK_DELAY_MS);
}

export function cancelAutoLock(): void {
  if (_autoLockTimer !== null) {
    clearTimeout(_autoLockTimer);
    _autoLockTimer = null;
  }
}

export interface ConnectSuccessOptions {
  
  isMenuOpen?: boolean;
  
  isPopupOpen?: boolean;
  
  isPromptVisible?: boolean;
  
  isNavMode?: boolean;
}

export interface ConnectSuccessResult {
  
  suggestedWidgetTypes: ReturnType<typeof getWidgetTypesForConnector>;
  
  shouldShowPromptNow: boolean;
  
  deferred: boolean;
}


export function handleConnectSuccess(
  connectorId: string,
  connectorName: string,
  opts: ConnectSuccessOptions = {},
): ConnectSuccessResult {

  const suggestedWidgetTypes = getWidgetTypesForConnector(connectorId);

  
  
  if (opts.isMenuOpen || opts.isPopupOpen) {
    deferPrompt(connectorId, connectorName);
    return { suggestedWidgetTypes, shouldShowPromptNow: false, deferred: true };
  }

  
  if (opts.isPromptVisible) {
    deferPrompt(connectorId, connectorName);
    return { suggestedWidgetTypes, shouldShowPromptNow: false, deferred: true };
  }

  return { suggestedWidgetTypes, shouldShowPromptNow: true, deferred: false };
}


export function handleDismissPrompt(widgetId: string, connectorId: string, connectorName: string): void {
  queueSuggestedWidget(widgetId, connectorId, connectorName);
}


export function handleAddWidget(
  widgetId: string,
  connectorId: string,
  connectorName: string,
  grid: SlotGrid,
  onAutoLock: () => void,
  opts: Parameters<typeof scheduleAutoLock>[1] = {},
): { slot: number; needsPlacementMode: boolean } {
  removeSuggestedWidget(widgetId);

  const slot = findBestSlot(grid);
  const needsPlacementMode = slot === -1; 

  if (needsPlacementMode) {
    enqueueForPlacement(widgetId, connectorId, connectorName);
  } else {
    scheduleAutoLock(onAutoLock, opts); 
  }

  return { slot, needsPlacementMode };
}


export function handlePlaceLater(widgetId: string, connectorId: string, connectorName: string): void {
  queueSuggestedWidget(widgetId, connectorId, connectorName);
}


export function handlePlacementDone(onAutoLock: () => void, opts: Parameters<typeof scheduleAutoLock>[1] = {}): void {
  scheduleAutoLock(onAutoLock, opts);
}


export function handlePlacementCancel(onAutoLock: () => void): void {
  scheduleAutoLock(onAutoLock);
}
