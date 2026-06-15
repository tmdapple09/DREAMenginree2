import '@/styles/globals.css';
import '@/styles/view-transitions.css';
import '@/styles/dream-shell.css';
import CommandPalette from '@/components/dream.CommandPalette';
import GlobalOverlays from '@/components/dream.GlobalOverlays';
import ThemeApplicator from '@/components/dream.ThemeApplicator';
import CartridgeRegistryBootstrap from '@/components/gameengin/dream.CartridgeRegistryBootstrap';
import GodTierProvider from '@/components/providers/dream.GodTierProvider';
import ThemeProvider from '@/components/providers/dream.ThemeProvider';
import DualRuntimeContainer from '@/components/runtime/dream.DualRuntimeContainer';
import { DreamSystemProvider } from '@/dreamdmbar/runtime/DreamSystemContext';
import { OSProvider } from '@/engine/os/OSContext';
import { CustomizeModeProvider } from '@/components/ui-system/CustomizeModeContext';
import '@/styles/home-dream.css';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Suspense } from 'react';

// SURFACE: dream.shell.RootLayout  (framework-mandated basename: layout.tsx)
// Stream 5.1 — View Transitions API for surface switching
// Stream 5.2 — CSS Container Queries for Dream Windows
// HomeDream surface styles: gold-button, dream-widget-card, dream-widget-empty

// DreamSystemProvider and DualRuntimeContainer remain mounted at root so every
// surface has shared runtime context. DMBar mounts under app/dreamdmbar/layout.

const spaceGrotesk = localFont({
  src: '../fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf',
  variable: '--font-space-grotesk',
  display: 'swap',
});

const cormorant = localFont({
  src: '../fonts/Cormorant_Garamond/CormorantGaramond-VariableFont_wght.ttf',
  variable: '--font-cormorant',
  display: 'swap',
});

const dreamr = localFont({
  src: '../fonts/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf',
  variable: '--font-dreamr',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DREAMengin - Your Creative Platform',
  description: 'A living interface system that turns your digital life into a navigable universe of connected spaces.',
  icons: {
    icon: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
  // Stream 6.1 — Web App Manifest (PWA support)
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#dce8f8' },
    { media: '(prefers-color-scheme: dark)',  color: '#020818' },
  ],
};

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${cormorant.variable} ${dreamr.variable} scroll-smooth`}
      data-theme="dream-ice"
      suppressHydrationWarning
    >
      <body
        className="antialiased dream-bg"
        style={{ fontFamily: 'var(--font-space-grotesk, "Space Grotesk", system-ui, sans-serif)' }}
      >
        {false && <CommandPalette />}
        <ThemeProvider>
          <ThemeApplicator />
          <Suspense><GodTierProvider /></Suspense>
          <OSProvider>
            <CustomizeModeProvider>
              <DreamSystemProvider>
                <CartridgeRegistryBootstrap />
                <DualRuntimeContainer>
                  <main role="main" aria-label="Main content">{children}</main>
                  <GlobalOverlays />
                  <Suspense><CommandPalette /></Suspense>
                </DualRuntimeContainer>
              </DreamSystemProvider>
            </CustomizeModeProvider>
          </OSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
