import { redirect } from 'next/navigation';
import { connection } from 'next/server';




export default async function LabEnginRedirectPage( ){
  await connection();
  redirect('/engines/lab');
}
