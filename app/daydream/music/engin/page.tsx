import { redirect } from 'next/navigation';
import { connection } from 'next/server';




export default async function MusicEnginRedirectPage( ){
  await connection();
  redirect('/engines/music');
}
