'use client';

import dynamic from 'next/dynamic';











const GlobalCustomizeUI = dynamic(
  () => import('@/components/customize/dream.GlobalCustomizeUI'),
  { ssr: false, loading: () => null },
);

const GlobalDreamDragLayer = dynamic(
  () => import('@/components/dreams/dream.GlobalDragLayer'),
  { ssr: false, loading: () => null },
);

const PlatformErrorReporter = dynamic(
  () => import('@/components/dreams/dream.PlatformErrorReporter'),
  { ssr: false, loading: () => null },
);

const KonamiDream = dynamic(() => import('@/components/dream.KonamiDream'), {
  ssr: false,
  loading: () => null,
});

export default function GlobalOverlays( ){
  return (
    <>
      <GlobalCustomizeUI />
      <GlobalDreamDragLayer />
      <PlatformErrorReporter />
      <KonamiDream />
    </>
  );
}
