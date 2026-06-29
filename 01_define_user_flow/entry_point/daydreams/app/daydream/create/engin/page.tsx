import { redirect } from 'next/navigation';
import { connection } from 'next/server';

// SURFACE: dreamsurface.DaydreamCreateEngin  (framework-mandated basename: page.tsx)

/** Redirect to the standalone ContentEngin app. */
export default async function CreateEnginRedirectPage( ){
  await connection();
  redirect('/engines/create');
}
