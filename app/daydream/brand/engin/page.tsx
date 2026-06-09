import { redirect } from 'next/navigation';
import { connection } from 'next/server';

// SURFACE: dreamsurface.DaydreamBrandEngin  (framework-mandated basename: page.tsx)

/** Redirect to the standalone BrandingEngin app. */
export default async function BrandEnginRedirectPage( ){
  await connection();
  redirect('/engines/brand');
}
