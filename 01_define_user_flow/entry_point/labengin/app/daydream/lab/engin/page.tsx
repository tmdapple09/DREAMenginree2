import { redirect } from 'next/navigation';
import { connection } from 'next/server';

// SURFACE: dreamsurface.DaydreamLabEngin  (framework-mandated basename: page.tsx)

/** Redirect to the standalone LabEngin app. */
export default async function LabEnginRedirectPage( ){
  await connection();
  redirect('/engines/lab');
}
