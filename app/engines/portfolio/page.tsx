import PortfolioEnginApp from '@/components/engines/portfolio/dream.PortfolioEnginApp';
import { isDevBypassActive } from '@/lib/dev-bypass';
import { createServerClient } from '@/lib/supabase/server';
import { safeGetUser } from '@/lib/supabase/safeGetUser';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';

// SURFACE: dreamsurface.EnginesPortfolio  (framework-mandated basename: page.tsx)
export default async function PortfolioEnginAppPage( ){
  await connection();
  const supabase = await createServerClient();
  const user = await safeGetUser(supabase);
  if (!user && !isDevBypassActive()) redirect('/login');
  return <PortfolioEnginApp />;
}
