import type { ComponentType } from 'react';
import type { EngineId } from './dream.EnginProvider';
import type { NavItem } from './dream.bar.EnginNavBar';




export interface EnginRuleSet {
  
  id: EngineId;
  
  name: string;
  
  emoji: string;
  
  accentColor: string;
  
  backHref: string;
  
  backLabel: string;
  
  nav: NavItem[];
  
  EnginComponent: ComponentType<{ onBack: () => void }>;
}
