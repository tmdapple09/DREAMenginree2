'use client';

import { useCallback, useState } from 'react';











const DEFAULT_STATE: DreamsRuntimeState = {
  view: 'feed',
  activeService: null,
  detailUrl: null,
  detailTitle: null,
};







export type DreamsView = 'feed' | 'detail';

export interface DreamsRuntimeState {
  
  view: DreamsView;
  
  activeService: string | null;
  
  detailUrl: string | null;
  
  detailTitle: string | null;
}

export interface DreamsRuntime {
  state: DreamsRuntimeState;
  
  openDetail: (url: string, title: string) => void;
  
  goToFeed: () => void;
  
  setService: (service: string | null) => void;
}



export function useDreamsRuntime(): DreamsRuntime {
  const [state, setState] = useState<DreamsRuntimeState>(DEFAULT_STATE);

  const openDetail = useCallback((url: string, title: string) => {
    setState((prev) => ({
      ...prev,
      view: 'detail',
      detailUrl: url,
      detailTitle: title,
    }));
  }, []);

  const goToFeed = useCallback(() => {
    setState((prev) => ({
      ...prev,
      view: 'feed',
      detailUrl: null,
      detailTitle: null,
    }));
  }, []);

  const setService = useCallback((service: string | null) => {
    setState((prev) => ({
      ...prev,
      activeService: service,
      view: 'feed',
      detailUrl: null,
      detailTitle: null,
    }));
  }, []);

  return { state, openDetail, goToFeed, setService };
}






