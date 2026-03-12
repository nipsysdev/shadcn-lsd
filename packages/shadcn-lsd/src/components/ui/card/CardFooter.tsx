import * as React from 'react';

import { cn } from '@/lib/utils';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="card-footer"
      className={cn(
        'lsd:flex lsd:items-center lsd:px-(--lsd-spacing-larger) lsd:py-(--lsd-spacing-larger) lsd:border-t lsd:border-lsd-border lsd:pt-(--lsd-spacing-larger)',
        className,
      )}
      {...props}
    />
  );
});
CardFooter.displayName = 'CardFooter';

export { CardFooter };
