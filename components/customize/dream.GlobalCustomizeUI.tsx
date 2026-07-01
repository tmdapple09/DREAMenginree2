'use client';

import CustomizeModeBar from './dream.bar.CustomizeModeBar';
import CustomizeToolbar from './dream.bar.CustomizeToolbar';
import ColorPanel from './panels/dream.panel.ColorPanel';
import EffectsPanel from './panels/dream.panel.EffectsPanel';
import FontPanel from './panels/dream.panel.FontPanel';
import LayoutPanel from './panels/dream.panel.LayoutPanel';


export default function GlobalCustomizeUI( ){
  return (
    <>
      
      <CustomizeModeBar />

      
      <CustomizeToolbar />

      
      <ColorPanel />
      <FontPanel />
      <LayoutPanel />
      <EffectsPanel />
    </>
  );
}
