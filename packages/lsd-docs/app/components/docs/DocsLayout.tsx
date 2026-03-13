'use client';

import { ReactNode, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { $sections, setupObserver, cleanup } from '@/stores/toc-store';
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
    <div className="flex p-(--lsd-spacing-largest)">
      <div className="flex-auto hidden xl:block"/>
        <div className="flex basis-4xl mx-auto shrink flex-col">
          {children}
        </div>
        {sections.length > 0 && (
          <div className="flex-auto hidden xl:flex justify-center">
            <TableOfContents items={sections} />
          </div>
        )}
      </div>
  );
} 
