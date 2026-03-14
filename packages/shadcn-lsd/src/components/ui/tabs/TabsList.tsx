import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';
import { useTabsContext } from './Tabs';
import type { TabsListProps } from './types';
import { tabsListVariants } from './types';

function TabsList({ className, size, fullWidth, ...props }: TabsListProps) {
  const { fullWidth: contextFullWidth, bordered } = useTabsContext();

  const resolvedFullWidth = fullWidth ?? contextFullWidth;

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        tabsListVariants({ size, fullWidth: resolvedFullWidth }),
        bordered && 'lsd:border-b-0',
        className
      )}
      {...props}
    />
  );
}

export { TabsList };
