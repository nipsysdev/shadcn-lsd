import { Command as CommandPrimitive } from 'cmdk';
import type * as React from 'react';

import { cn } from '@/lib/utils';

export function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        'lsd:text-lsd-text-primary lsd:**:[[cmdk-group-heading]]:text-lsd-text-primary lsd:overflow-hidden lsd:p-(--lsd-spacing-smallest) lsd:**:[[cmdk-group-heading]]:px-(--lsd-spacing-smaller) lsd:**:[[cmdk-group-heading]]:py-(--lsd-spacing-smaller) lsd:**:[[cmdk-group-heading]]:text-xs lsd:**:[[cmdk-group-heading]]:font-medium',
        className,
      )}
      {...props}
    />
  );
}
