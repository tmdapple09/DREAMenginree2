import CartridgeLauncher from '@/components/gameengin/dream.cartridge.CartridgeLauncher';
import { getCartridgeManifest } from '@/engins/gameengin/cartridges/manifest';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';



interface PageProps {
  params: Promise<{ id: string }>;
}














export default async function GameEnginCartridgePage({ params }: PageProps) {
  
  
  await connection();
  const { id } = await params;
  const manifest = getCartridgeManifest(id);
  if (!manifest) notFound();
  return <CartridgeLauncher manifest={manifest} />;
}
