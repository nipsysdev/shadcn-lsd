import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';
import { useTabsContext } from './Tabs';
import type { TabsTriggerProps } from './types';
import { tabsTriggerVariants } from './types';

function TabsTrigger({ className, size, fullWidth, ...props }: TabsTriggerProps) {
  const { fullWidth: contextFullWidth } = useTabsContext();

  const resolvedFullWidth = fullWidth ?? contextFullWidth;

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ size, fullWidth: resolvedFullWidth }), className)}
      {...props}
    />
  );
}

export { TabsTrigger };
