import { ReactNode } from 'react';

interface DocsLayoutProps {
  children: ReactNode;
  toc?: ReactNode;
  rightSidebar?: ReactNode;
}

export function DocsLayout({ children, toc, rightSidebar }: DocsLayoutProps) {
  return (
    <div className="flex scroll-mt-24 items-stretch pb-8 text-[1.05rem] sm:text-[15px] xl:w-full">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div className="mx-auto flex w-full max-w-[40rem] min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 lg:max-w-[50rem] xl:max-w-[60rem] 2xl:max-w-[70rem] dark:text-neutral-300">
          {children}
        </div>
      </div>
      <div className="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[90svh] w-(--sidebar-width) flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
        <div className="h-(--top-spacing) shrink-0"></div>
        {toc && (
          <div className="no-scrollbar flex flex-col gap-8 overflow-y-auto px-8">
            {toc}
          </div>
        )}
        {rightSidebar && (
          <div className="hidden flex-1 flex-col gap-6 px-6 xl:flex">
            {rightSidebar}
          </div>
        )}
      </div>
    </div>
  );
}
