'use client';

import {
    type AllPageSkins,
    DEFAULT_SKIN,
    type SkinData,
    type SkinPage,
    applySkin,
    loadAllSkins,
    resolveSkin,
    saveAllSkins,
} from '@/components/ui-system/skin-engine';
import React, {
    createContext, useCallback, useContext, useMemo, useState,
} from 'react';

export interface CustomizeModeContextValue {
  
  isCustomizeMode: boolean;
  
  activePage: SkinPage | null;
  
  activePanel: 'color' | 'font' | 'layout' | 'effects' | null;
  
  draftSkin: SkinData;
  
  allSkins: AllPageSkins;

  
  enterCustomizeMode: (page: SkinPage) => void;
  
  exitCustomizeMode: () => void;
  
  openPanel: (panel: 'color' | 'font' | 'layout' | 'effects') => void;
  
  closePanel: () => void;
  
  updateDraft: (partial: Partial<SkinData>) => void;
  
  saveSkin: () => void;
  
  resetPageSkin: () => void;
  
  applyPreset: (skin: SkinData) => void;
}

const CustomizeModeContext = createContext<CustomizeModeContextValue | null>(null);

export function useCustomizeMode(): CustomizeModeContextValue {
  const ctx = useContext(CustomizeModeContext);
  if (!ctx) throw new Error('useCustomizeMode must be used inside CustomizeModeProvider');
  return ctx;
}

export function CustomizeModeProvider({ children }: {children: React.ReactNode}) {
  const [isCustomizeMode, setIsCustomizeMode] = useState(false);
  const [activePage, setActivePage] = useState<SkinPage | null>(null);
  const [activePanel, setActivePanel] = useState<'color' | 'font' | 'layout' | 'effects' | null>(null);
  const [allSkins, setAllSkins] = useState<AllPageSkins>(() => {
    const saved = loadAllSkins();
    
    applySkin(saved.global ?? DEFAULT_SKIN);
    return saved;
  });
  const [draftSkin, setDraftSkin] = useState<SkinData>(DEFAULT_SKIN);

  const enterCustomizeMode = useCallback((page: SkinPage) => {
    setActivePage(page);
    setIsCustomizeMode(true);
    setActivePanel(null);
    const loaded = loadAllSkins();
    const effective = resolveSkin(loaded, page);
    setDraftSkin({ ...effective });
  }, []);

  const exitCustomizeMode = useCallback(() => {
    
    const effective = resolveSkin(allSkins, activePage ?? 'global');
    applySkin(effective);
    setIsCustomizeMode(false);
    setActivePage(null);
    setActivePanel(null);
  }, [allSkins, activePage]);

  const openPanel = useCallback((panel: 'color' | 'font' | 'layout' | 'effects') => {
    setActivePanel((prev) => (prev === panel ? null : panel));
  }, []);

  const closePanel = useCallback(() => setActivePanel(null), []);

  const updateDraft = useCallback((partial: Partial<SkinData>) => {
    setDraftSkin((prev) => {
      const next = { ...prev, ...partial };
      
      applySkin(next);
      return next;
    });
  }, []);

  const saveSkin = useCallback(() => {
    if (!activePage) return;
    setAllSkins((prev) => {
      const next: AllPageSkins = {
        ...prev,
        [activePage]: { ...draftSkin },
      };
      saveAllSkins(next);
      return next;
    });
    setIsCustomizeMode(false);
    setActivePage(null);
    setActivePanel(null);
  }, [activePage, draftSkin]);

  const resetPageSkin = useCallback(() => {
    if (!activePage) return;
    const globalSkin = allSkins.global ?? DEFAULT_SKIN;
    setDraftSkin({ ...globalSkin });
    applySkin(globalSkin);
  }, [activePage, allSkins]);

  const applyPreset = useCallback((skin: SkinData) => {
    setDraftSkin({ ...skin });
    applySkin(skin);
  }, []);

  const value = useMemo<CustomizeModeContextValue>(() => ({
    isCustomizeMode, activePage, activePanel, draftSkin, allSkins,
    enterCustomizeMode, exitCustomizeMode, openPanel, closePanel,
    updateDraft, saveSkin, resetPageSkin, applyPreset,
  }), [
    isCustomizeMode, activePage, activePanel, draftSkin, allSkins,
    enterCustomizeMode, exitCustomizeMode, openPanel, closePanel,
    updateDraft, saveSkin, resetPageSkin, applyPreset,
  ]);

  return (
    <CustomizeModeContext.Provider value={value}>
      {children}
    </CustomizeModeContext.Provider>
  );
}
