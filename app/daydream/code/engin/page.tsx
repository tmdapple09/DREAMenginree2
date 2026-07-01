import { redirect } from 'next/navigation';
import { connection } from 'next/server';




export default async function CodeEnginRedirectPage( ){
  await connection();
  redirect('/engines/code');
}
