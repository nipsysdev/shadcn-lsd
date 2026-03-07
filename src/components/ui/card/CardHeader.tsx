import * as React from 'react';

import { cn } from '@/lib/utils';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="card-header"
      className={cn(
        '@container/card-header lsd:grid lsd:auto-rows-min lsd:grid-rows-[auto_auto] lsd:items-start lsd:gap-(--lsd-spacing-smaller) lsd:px-(--lsd-spacing-larger) lsd:py-(--lsd-spacing-larger) lsd:has-data-[slot=card-action]:grid-cols-[1fr_auto] lsd:border-b lsd:border-lsd-border lsd:pb-(--lsd-spacing-larger)',
        className,
      )}
      {...props}
    />
  );
});
CardHeader.displayName = 'CardHeader';

export { CardHeader };
