import { buildGameLaunchHref, DEFAULT_GAME_ID } from '@/engins/gameengin/games/navigation';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';





export default async function PlayDaydreamLegacyPage( ){
  await connection();
  redirect(buildGameLaunchHref(DEFAULT_GAME_ID));
}
