import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as React from 'react';

import { cn } from '@/lib/utils';
import type { TabsProps } from './types';
import { tabsVariants } from './types';

interface TabsContextValue {
  fullWidth?: boolean;
  bordered?: boolean;
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined);

function Tabs({ className, size, fullWidth, bordered, ...props }: TabsProps) {
  return (
    <TabsContext.Provider value={{ fullWidth: fullWidth ?? false, bordered }}>
      <TabsPrimitive.Root
        data-slot="tabs"
        className={cn(tabsVariants({ size, fullWidth }), className)}
        {...props}
      />
    </TabsContext.Provider>
  );
}

function useTabsContext() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs component');
  }
  return context;
}

export { Tabs, useTabsContext };
