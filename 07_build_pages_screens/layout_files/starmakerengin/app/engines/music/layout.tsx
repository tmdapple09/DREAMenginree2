import type { ReactNode } from 'react';

// SURFACE: dream.shell.EnginesMusicLayout  (framework-mandated basename: layout.tsx)
/**
 * app/engines/music/layout.tsx
 *
 * Layout for the StarMakerEngin standalone app.
 */

export const metadata = {
  title: 'StarMakerEngin – DREAMengin',
  description: 'Full-feature music engine app with DAW, studio, arrangement, and library.',
};

export default function MusicEnginLayout({ children }: {children: ReactNode}) {
  return <>{children}</>;
}
