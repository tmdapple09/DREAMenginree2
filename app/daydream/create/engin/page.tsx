import { redirect } from 'next/navigation';
import { connection } from 'next/server';




export default async function CreateEnginRedirectPage( ){
  await connection();
  redirect('/engines/create');
}
