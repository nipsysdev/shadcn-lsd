import { ReactNode } from 'react';

interface PageContentProps {
  children: ReactNode;
}

export function PageContent({ children }: PageContentProps) {
  return (
    <div className="w-full flex-1 pb-16 *:data-[slot=alert]:first:mt-0 sm:pb-0">
      {children}
    </div>
  );
}
