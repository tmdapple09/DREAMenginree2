import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RenderEngin WebGPU — DREAMengin',
  description: 'WebGPU is the RenderEngin graphics backend used by DREAMengin creative surfaces.',
  robots: { index: false, follow: false },
};

export default function WebGPURoute() {
  redirect('/engines/create');
}
