import type * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

import { Command } from './Command';

export function CommandDialog({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="lsd:sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn('lsd:overflow-hidden lsd:p-0', className)}
        showCloseButton={showCloseButton}
      >
        <Command className="lsd:**:[[cmdk-group-heading]]:text-lsd-text-primary lsd:**:[[cmdk-group-heading]]:px-(--lsd-spacing-smaller) lsd:**:[[cmdk-group-heading]]:font-medium lsd:**:[[cmdk-group]]:px-(--lsd-spacing-smaller) lsd:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 lsd:[&_[cmdk-input-wrapper]_svg]:h-(--lsd-spacing-large) lsd:[&_[cmdk-input-wrapper]_svg]:w-(--lsd-spacing-large) lsd:**:[[cmdk-input]]:h-12 lsd:**:[[cmdk-item]]:px-(--lsd-spacing-smaller) lsd:**:[[cmdk-item]]:py-(--lsd-spacing-small) lsd:[&_[cmdk-item]_svg]:h-(--lsd-spacing-large) lsd:[&_[cmdk-item]_svg]:w-(--lsd-spacing-large)">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}
