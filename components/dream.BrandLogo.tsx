'use client';

import { getRandomLogo, LOGO_PATHS } from '@/engins/brandingengin/identity/logos';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
};


export default function BrandLogo({
  width = 40,
  height = 40,
  alt = 'Dreamengin',
  className = '',
}: Props) {
  
  const [src, setSrc] = useState<string>(LOGO_PATHS[0]);

  useEffect(() => {
    setSrc(getRandomLogo());
  }, []);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ width, height, objectFit: 'contain' }}
      priority
    />
  );
}
