import { redirect } from 'next/navigation';
import { connection } from 'next/server';




export const metadata = { title: 'Media Vault – Dreamengin', description: 'Your private media library.' };

export default async function MediaVaultLegacyPage( ){
  await connection();
  
  
  redirect('/daydream/create');
}
