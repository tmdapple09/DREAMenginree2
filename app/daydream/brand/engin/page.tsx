import { redirect } from 'next/navigation';
import { connection } from 'next/server';




export default async function BrandEnginRedirectPage( ){
  await connection();
  redirect('/engines/brand');
}
