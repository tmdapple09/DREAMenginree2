import { redirect } from 'next/navigation';
import { connection } from 'next/server';





export default async function ProfileLegacyPage( ){
  await connection();
  redirect('/edit-profiledream');
}
