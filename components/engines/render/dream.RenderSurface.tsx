'use client';

import RenderEnginInlineSurface from '@/engins/renderengin/RenderEnginInlineSurface';

export default function RenderSurface({ onBack }: { onBack?: () => void }) {
  return (
    <main className="min-h-full" style={{ minHeight: '100vh', position: 'relative' }}>
      <RenderEnginInlineSurface
        title="Render workspace"
        subtitle="OBJ / GLB import · touch orbit · snapshots"
        onBack={onBack}
      />
    </main>
  );
}
