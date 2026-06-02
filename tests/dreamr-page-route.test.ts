import { describe, expect, it } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('DreamR direct page route', () => {
  it('renders DreamRSection from app/dreamr/page.tsx', () => {
    const page = readFileSync(resolve(__dirname, '../app/dreamr/page.tsx'), 'utf8');

    expect(page).toContain("import DreamRSection from '@/app/dreamdmbar/_components/dreamr/dreamsurface.dreamr'");
    expect(page).toContain('<DreamRSection');
    expect(page).toContain("redirect('/login')");
    expect(page).toContain('<DreamRSection userId={userId}');
  });

  it('keeps authenticated identity independent from optional profile hydration', () => {
    const surface = readFileSync(resolve(__dirname, '../app/dreamdmbar/_components/dreamr/dreamsurface.dreamr.tsx'), 'utf8');
    const homeDream = readFileSync(resolve(__dirname, '../app/dreamdmbar/_components/HomeDreamRegion.tsx'), 'utf8');

    expect(surface).toContain("const userId = authenticatedUserId ?? profile?.id ?? '';");
    expect(homeDream).toContain('userId={userId}');
  });

  it('exposes DreamR from Discover so it is reachable on screen', () => {
    const discover = readFileSync(resolve(__dirname, '../app/discover/page.tsx'), 'utf8');

    expect(discover).toContain('href="/dreamr"');
    expect(discover).toContain('Open the human media feed');
  });
});
