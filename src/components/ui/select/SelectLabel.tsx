import * as SelectPrimitive from '@radix-ui/react-select';
import type * as React from 'react';

import { cn } from '@/lib/utils';

export function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        'lsd:text-lsd-text-secondary lsd:px-(--lsd-spacing-smaller) lsd:py-(--lsd-spacing-smaller) lsd:text-xs',
        className,
      )}
      {...props}
    />
  );
}
