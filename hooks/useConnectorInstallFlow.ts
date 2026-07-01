'use client';

import { getConnectorDef } from '@/engine/connectors/connectorRegistry';
import {
    consumeDeferredPrompt,
    handleAddWidget,
    handleConnectSuccess,
    handleDismissPrompt,
    handlePlaceLater,
    type SlotGrid,
} from '@/engine/connectors/installFlow';
import type { WidgetTypeDef } from '@/engine/widgets/widgetRegistry';
import { getWidgetTypeDef } from '@/engine/widgets/widgetRegistry';
import { useCallback, useEffect, useRef, useState } from 'react';
import { readOfflineCache, writeOfflineCache } from '@/engine/offline/offlineCache';

const CONNECTOR_INSTALL_STATE_KEY = 'connector:install-flow';










export interface ConnectorInstallFlowOptions {
  
  grid: SlotGrid;
  
  onAutoLock: () => void;
  
  isMenuOpen?: boolean;
  
  isPopupOpen?: boolean;
  
  isNavMode?: boolean;
  
  isDragging?: boolean;
  isMenuAnimating?: boolean;
  isKeyboardOpen?: boolean;
}

export interface ActivePrompt {
  connectorId: string;
  connectorName: string;
  connectorIcon: string;
  widgetTypes: WidgetTypeDef[];
}

export interface PlacementRequest {
  widgetId: string;
  connectorId: string;
  connectorName: string;
  noSlotAvailable: boolean;
}

export interface ConnectorInstallFlowState {
  
  toastMessage: string | null;
  
  prompt: ActivePrompt | null;
  
  placementRequest: PlacementRequest | null;
  
  sliceSheetConnectorId: string | null;
}

export interface ConnectorInstallFlowActions {
  
  onConnectSuccess: (connectorId: string, connectorName: string) => void;
  
  onPromptAdd: (widgetId: string) => void;
  
  onPromptDismiss: (widgetId: string) => void;
  
  onPromptAddSlice: (connectorId: string) => void;
  
  onPlacementDone: (slot: number) => void;
  
  onPlacementCancel: () => void;
  
  onPlaceNow: (widgetId: string) => void;
  
  onPlaceLater: (widgetId: string, connectorId: string, connectorName: string) => void;
  
  clearToast: () => void;
  
  onMenuClose: () => void;
  
  onPopupClose: () => void;
}

export function useConnectorInstallFlow(
  opts: ConnectorInstallFlowOptions,
): ConnectorInstallFlowState & ConnectorInstallFlowActions {
  const {
    grid,
    onAutoLock,
    isMenuOpen = false,
    isPopupOpen = false,
    isDragging = false,
    isMenuAnimating = false,
    isKeyboardOpen = false,
  } = opts;

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<ActivePrompt | null>(null);
  const [placementRequest, setPlacementRequest] = useState<PlacementRequest | null>(null);
  const [sliceSheetConnectorId, setSliceSheetConnectorId] = useState<string | null>(null);

  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;
    void readOfflineCache<ConnectorInstallFlowState>(CONNECTOR_INSTALL_STATE_KEY).then((cached) => {
      if (cancelled || !cached) return;
      setToastMessage(cached.toastMessage);
      setPrompt(cached.prompt);
      setPlacementRequest(cached.placementRequest);
      setSliceSheetConnectorId(cached.sliceSheetConnectorId);
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    void writeOfflineCache(CONNECTOR_INSTALL_STATE_KEY, { toastMessage, prompt, placementRequest, sliceSheetConnectorId });
  }, [toastMessage, prompt, placementRequest, sliceSheetConnectorId]);

  useEffect(() => {
    let cancelled = false;
    void readOfflineCache<ConnectorInstallFlowState>('connector:install-flow').then((cached) => {
      if (cancelled || !cached) return;
      setToastMessage(cached.toastMessage);
      setPrompt(cached.prompt);
      setPlacementRequest(cached.placementRequest);
      setSliceSheetConnectorId(cached.sliceSheetConnectorId);
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    void writeOfflineCache('connector:install-flow', { toastMessage, prompt, placementRequest, sliceSheetConnectorId });
  }, [toastMessage, prompt, placementRequest, sliceSheetConnectorId]);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastMessage(null), 4000);
  }, []);

  const showPrompt = useCallback((connectorId: string, connectorName: string) => {
    const result = handleConnectSuccess(connectorId, connectorName, {
      isMenuOpen,
      isPopupOpen,
      isPromptVisible: prompt !== null,
    });
    if (!result.shouldShowPromptNow) return; 

    const connDef = getConnectorDef(connectorId);
    if (!result.suggestedWidgetTypes.length) return;

    setPrompt({
      connectorId,
      connectorName,
      connectorIcon: connDef?.icon ?? '🔌',
      widgetTypes: result.suggestedWidgetTypes,
    });
  }, [isMenuOpen, isPopupOpen, prompt]);

  const onConnectSuccess = useCallback((connectorId: string, connectorName: string) => {
    showToast(`Connected to ${connectorName}`); 
    showPrompt(connectorId, connectorName);     
  }, [showToast, showPrompt]);

  const onPromptAdd = useCallback((widgetId: string) => {
    if (!prompt) return;
    const def = getWidgetTypeDef(widgetId);
    const { needsPlacementMode } = handleAddWidget(
      widgetId,
      prompt.connectorId,
      prompt.connectorName,
      grid,
      onAutoLock,
      { isDragging, isMenuAnimating, isKeyboardOpen },
    );
    setPrompt(null);

    if (needsPlacementMode) {
      
      setPlacementRequest({
        widgetId,
        connectorId: prompt.connectorId,
        connectorName: prompt.connectorName,
        noSlotAvailable: true,
      });
    } else {
      
      setPlacementRequest({
        widgetId,
        connectorId: prompt.connectorId,
        connectorName: prompt.connectorName,
        noSlotAvailable: false,
      });
    }
    void def; 
  }, [prompt, grid, onAutoLock, isDragging, isMenuAnimating, isKeyboardOpen]);

  const onPromptDismiss = useCallback((widgetId: string) => {
    if (!prompt) return;
    handleDismissPrompt(widgetId, prompt.connectorId, prompt.connectorName);
    setPrompt(null);
  }, [prompt]);

  const onPromptAddSlice = useCallback((connectorId: string) => {
    setPrompt(null);
    setSliceSheetConnectorId(connectorId); 
  }, []);

  const onPlacementDone = useCallback(() => {
    if (!placementRequest) return;
    setPlacementRequest(null);
    onAutoLock(); 
  }, [placementRequest, onAutoLock]);

  const onPlacementCancel = useCallback(() => {
    setPlacementRequest(null);
    onAutoLock(); 
  }, [onAutoLock]);

  const onPlaceNow = useCallback((widgetId: string) => {
    if (!placementRequest) return;
    setPlacementRequest({
      widgetId,
      connectorId: placementRequest.connectorId,
      connectorName: placementRequest.connectorName,
      noSlotAvailable: false, 
    });
  }, [placementRequest]);

  const onPlaceLater = useCallback((widgetId: string, connectorId: string, connectorName: string) => {
    handlePlaceLater(widgetId, connectorId, connectorName); 
    setPlacementRequest(null);
  }, []);

  const clearToast = useCallback(() => {
    setToastMessage(null);
    if (toastTimer.current) clearTimeout(toastTimer.current);
  }, []);

  const checkDeferred = useCallback(() => {
    const deferred = consumeDeferredPrompt();
    if (deferred) {
      showPrompt(deferred.connectorId, deferred.connectorName);
    }
  }, [showPrompt]);

  const onMenuClose = useCallback(() => { checkDeferred(); }, [checkDeferred]);
  const onPopupClose = useCallback(() => { checkDeferred(); }, [checkDeferred]);

  return {
    toastMessage,
    prompt,
    placementRequest,
    sliceSheetConnectorId,
    onConnectSuccess,
    onPromptAdd,
    onPromptDismiss,
    onPromptAddSlice,
    onPlacementDone,
    onPlacementCancel,
    onPlaceNow,
    onPlaceLater,
    clearToast,
    onMenuClose,
    onPopupClose,
  };
}
