// SURFACE: dreamsurface.DaydreamGamesEngin  (framework-mandated basename: page.tsx)
import { redirect } from 'next/navigation';
import { connection } from 'next/server';

interface GamesEnginRedirectPageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

function firstValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

/** Redirect to the standalone GameEngin app while preserving launch intent. */
export default async function GamesEnginRedirectPage(props?: GamesEnginRedirectPageProps) {
  await connection();
  const searchParams = props?.searchParams ? await props.searchParams : undefined;
  const params = new URLSearchParams();
  const game = firstValue(searchParams?.game);
  if (game) params.set('game', game);
  const play = firstValue(searchParams?.play);
  if (play) params.set('play', play);
  const remote = firstValue(searchParams?.remote);
  if (remote) params.set('remote', remote);
  const expand = firstValue(searchParams?.expand);
  if (expand) params.set('expand', expand);
  params.set('openEngin', '1');
  redirect(`/engines/games?${params.toString()}`);
}
