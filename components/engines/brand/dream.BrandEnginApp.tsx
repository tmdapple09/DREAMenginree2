'use client';

import { makeEnginApp } from '@/components/engines/shared';
import BrandingEngin from '@/engins/engin.BrandingEngin';



export default makeEnginApp({
  id: 'brand',
  name: 'BrandingEngin',
  emoji: '🎨',
  accentColor: '#f472b6',
  backHref: '/daydream/brand',
  backLabel: 'Brand Daydream',
  nav: [
    { href: '/engines/brand',           label: 'Hub',       emoji: '🎨' },
    { href: '/engines/brand/identity',  label: 'Identity',  emoji: '🪪' },
    { href: '/engines/brand/campaigns', label: 'Campaigns', emoji: '💰' },
  ],
  EnginComponent: BrandingEngin,
});
