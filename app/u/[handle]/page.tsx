import { redirect } from 'next/navigation';
import { connection } from 'next/server';





type Params = Promise<{ handle: string }>;

export default async function UHandleLegacyPage({ params }: {params: Params}) {
  await connection();
  const { handle } = await params;
  redirect(`/profile/${handle}`);
}
