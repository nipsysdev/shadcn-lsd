import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { type AccordionVariants, accordionContentVariants } from './types';

export interface AccordionContentProps
  extends React.ComponentProps<typeof AccordionPrimitive.Content>,
    AccordionVariants {}

function AccordionContent({ className, children, size = 'md', ...props }: AccordionContentProps) {
  const getPaddingBottom = () => {
    switch (size) {
      case 'sm':
        return 'lsd:pb-[var(--lsd-spacing-smaller)]';
      case 'lg':
        return 'lsd:pb-[var(--lsd-spacing-larger)]';
      default:
        return 'lsd:pb-[var(--lsd-spacing-base)]';
    }
  };

  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(accordionContentVariants({ size }))}
      {...props}
    >
      <div className={cn('lsd:pt-0', getPaddingBottom(), className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { AccordionContent };
