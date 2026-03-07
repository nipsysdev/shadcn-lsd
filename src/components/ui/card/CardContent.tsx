import * as React from 'react';

import { cn } from '@/lib/utils';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="card-content"
      className={cn(
        'lsd:px-(--lsd-spacing-larger) lsd:py-(--lsd-spacing-larger)',
        className,
      )}
      {...props}
    />
  );
});
CardContent.displayName = 'CardContent';

export { CardContent };
