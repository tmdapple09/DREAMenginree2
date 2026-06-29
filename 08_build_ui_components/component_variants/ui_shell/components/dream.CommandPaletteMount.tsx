'use client';

import dynamic from 'next/dynamic';

const CommandPalette = dynamic(() => import('./dream.CommandPalette'), { ssr: false });

export default function CommandPaletteMount() {
  return <CommandPalette />;
}
