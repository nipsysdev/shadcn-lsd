'use client';

import { useStore } from '@nanostores/react';
import { type ReactNode, useEffect } from 'react';
import { Toaster } from 'sonner';
import { $sections, cleanup, setupObserver } from '@/stores/toc-store';
import { TableOfContents } from './TableOfContents';

interface DocsLayoutProps {
  children: ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const sections = useStore($sections);

  useEffect(() => {
    setupObserver();
    return () => cleanup();
  }, []);

  return (
    <div className="flex justify-between gap-x-(--lsd-spacing-large) p-(--lsd-spacing-largest)">
      <div className="flex-auto hidden xl:block" />
      <div className="flex basis-4xl max-w-full mx-auto shrink flex-col">{children}</div>
      {sections.length > 0 && (
        <div className="flex-auto hidden xl:flex justify-center relative">
          <TableOfContents items={sections} />
        </div>
      )}
      <Toaster />
    </div>
  );
}
