'use client';

import { ArtifactSlot } from '@/engins/forgeengin/enginpipe/index';
import { AgentPanel } from '../modules/ai-co-pilot/dream.panel.AgentPanel';


export default function CodeEnginOrchestrator( ){
  return (
    <ArtifactSlot artifactId="engin:code">
      <div className="space-y-4">
        <AgentPanel />
        
      </div>
    </ArtifactSlot>
  );
}
