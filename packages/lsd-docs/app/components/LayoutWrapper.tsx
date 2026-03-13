'use client';

import { ScrollArea } from '@nipsys/shadcn-lsd';
import Header from './Header';
import SidebarWrapper from './SidebarWrapper';

interface LayoutWrapperProps {
  children: React.ReactNode;
  currentPath: string;
}

export default function LayoutWrapper({ children, currentPath }: LayoutWrapperProps) {
  return (
    <SidebarWrapper currentPath={currentPath}>
      <main className="size-full flex flex-col">
        <Header className="w-full border-b" />
        <ScrollArea className="flex-auto overflow-hidden">{children}</ScrollArea>
      </main>
    </SidebarWrapper>
  );
}
