'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const ForgeEngin = dynamic(() => import('@/engins/dream.ForgeEngin'), { ssr: false });
const BrandingEngin = dynamic(() => import('@/engins/engin.BrandingEngin'), { ssr: false });
const CodeEngin = dynamic(() => import('@/engins/engin.CodeEngin'), { ssr: false });
const ContentEngin = dynamic(() => import('@/engins/engin.ContentEngin'), { ssr: false });
const GameEngin = dynamic(() => import('@/engins/engin.GameEngin'), { ssr: false });
const LabEngin = dynamic(() => import('@/engins/engin.LabEngin'), { ssr: false });
const StarMakerEngin = dynamic(() => import('@/engins/engin.StarMakerEngin'), { ssr: false });

const ENGIN_COMPONENTS = {
  StarMakerEngin,
  GameEngin,
  LabEngin,
  CodeEngin,
  BrandingEngin,
  ContentEngin,
  ForgeEngin,
} as const;

export type StandaloneEnginName = keyof typeof ENGIN_COMPONENTS;

type Props = {
  engin: StandaloneEnginName;
  backHref: string;
};

export default function StandaloneEnginSurface({ engin, backHref }: Props) {
  const router = useRouter();
  const EnginComponent = ENGIN_COMPONENTS[engin];

  return <EnginComponent onBack={() => router.push(backHref)} />;
}

