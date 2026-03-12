'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import LayoutWrapper from './LayoutWrapper';

interface PathProviderProps {
  children: ReactNode;
}

export default function PathProvider({ children }: PathProviderProps) {
  const pathname = usePathname();
  return <LayoutWrapper currentPath={pathname}>{children}</LayoutWrapper>;
}
