'use client';

import { makeEnginApp } from '@/components/engines/shared';
import LabEngin from '@/engins/engin.LabEngin';



export default makeEnginApp({
  id: 'lab',
  name: 'LabEngin',
  emoji: '🔬',
  accentColor: '#10b981',
  backHref: '/daydream/lab',
  backLabel: 'Lab Daydream',
  nav: [
    { href: '/engines/lab',             label: 'Hub',         emoji: '🔬' },
    { href: '/engines/lab/experiments', label: 'Experiments', emoji: '⚗️' },
    { href: '/engines/lab/data',        label: 'Data Viz',    emoji: '📊' },
    { href: '/engines/lab/quantum',     label: 'Quantum',     emoji: '⚛️' },
  ],
  EnginComponent: LabEngin,
});
