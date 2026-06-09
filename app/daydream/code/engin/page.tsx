import { redirect } from 'next/navigation';
import { connection } from 'next/server';

// SURFACE: dreamsurface.DaydreamCodeEngin  (framework-mandated basename: page.tsx)

/** Redirect to the standalone CodeEngin app. */
export default async function CodeEnginRedirectPage( ){
  await connection();
  redirect('/engines/code');
}
