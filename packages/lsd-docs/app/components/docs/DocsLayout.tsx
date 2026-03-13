'use client';

import { ReactNode, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { $sections, setupObserver, cleanup } from '../../stores/tableOfContents';
import { TableOfContents } from './TableOfContents';

interface DocsLayoutProps {
  children: ReactNode;
  toc?: ReactNode;
}

function DocsLayoutContent({ children, toc }: DocsLayoutProps) {
  const sections = useStore($sections);

  return (
    <div className="flex">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div className="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 lg:max-w-[50rem] xl:max-w-[60rem] 2xl:max-w-[70rem] dark:text-neutral-300">
          {children}
        </div>
      </div>
      <div className="fixed right-0 top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[90svh] w-(--sidebar-width) flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
        <div className="h-(--top-spacing) shrink-0"></div>
        {toc && (
          <div className="no-scrollbar flex flex-col gap-8 overflow-y-auto px-8">
            {toc}
          </div>
        )}
        {sections.length > 0 && (
          <div className="no-scrollbar flex flex-col gap-8 overflow-y-auto px-8">
            <TableOfContents items={sections} />
          </div>
        )}
      </div>
    </div>
  );
}

export function DocsLayout({ children, toc }: DocsLayoutProps) {
  useEffect(() => {
    setupObserver();
    return () => cleanup();
  }, []);

  return <DocsLayoutContent children={children} toc={toc} />;
}
