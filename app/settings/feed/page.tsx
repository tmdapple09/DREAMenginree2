import { permanentRedirect } from 'next/navigation';
import { connection } from 'next/server';




export default async function FeedSettingsRedirect( ){
  await connection();
  permanentRedirect('/feed-settings');
}
