'use client';

import CommandPalette from '@/components/dream.CommandPalette';
import GlobalOverlays from '@/components/dream.GlobalOverlays';
import ThemeApplicator from '@/components/dream.ThemeApplicator';
import GodTierProvider from '@/components/providers/dream.GodTierProvider';
import ThemeProvider from '@/components/providers/dream.ThemeProvider';
import DualRuntimeContainer from '@/components/runtime/dream.DualRuntimeContainer';
import { DreamSystemProvider } from '@/dreamdmbar/runtime/DreamSystemContext';
import { OSProvider } from '@/engine/os/OSContext';
import { isPublicSurfacePath } from '@/engine/routing/surfaces';
import { CustomizeModeProvider } from '@/components/ui-system/CustomizeModeContext';
import { Suspense, useEffect, useState } from 'react';

export default function AppSurfaceShell({ children }: {children: React.ReactNode}) {
  const [pathname, setPathname] = useState<string | null>(null);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  if (isPublicSurfacePath(pathname)) {
    return <main role="main" aria-label="Main content">{children}</main>;
  }

  return (
    <ThemeProvider>
      <ThemeApplicator />
      <Suspense><GodTierProvider /></Suspense>
      <OSProvider>
        <CustomizeModeProvider>
          <DreamSystemProvider>
            <DualRuntimeContainer>
              <main role="main" aria-label="Main content">{children}</main>
              <GlobalOverlays />
              <Suspense><CommandPalette /></Suspense>
            </DualRuntimeContainer>
          </DreamSystemProvider>
        </CustomizeModeProvider>
      </OSProvider>
    </ThemeProvider>
  );
}

