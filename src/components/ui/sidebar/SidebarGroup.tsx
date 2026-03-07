'use client';

import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import type {
  SidebarGroupActionProps,
  SidebarGroupContentProps,
  SidebarGroupLabelProps,
  SidebarGroupProps,
} from './types';

export function SidebarGroup({ className, ...props }: SidebarGroupProps) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn(
        'lsd:relative lsd:flex lsd:w-full lsd:min-w-0 lsd:flex-col lsd:p-(--lsd-spacing-smaller)',
        className,
      )}
      {...props}
    />
  );
}

export function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: SidebarGroupLabelProps) {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        'lsd:text-sidebar-foreground/70 ring-sidebar-ring lsd:flex lsd:h-8 lsd:shrink-0 lsd:items-center lsd:rounded-md lsd:px-(--lsd-spacing-smaller) lsd:text-xs lsd:font-medium lsd:outline-hidden lsd:transition-[margin,opacity] lsd:duration-200 lsd:ease-linear lsd:focus-visible:ring-2 lsd:[&>svg]:size-(--lsd-spacing-base) lsd:[&>svg]:shrink-0',
        'lsd:group-data-[collapsible=icon]:-mt-8 lsd:group-data-[collapsible=icon]:opacity-0',
        className,
      )}
      {...props}
    />
  );
}

export function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: SidebarGroupActionProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        'lsd:text-sidebar-foreground ring-sidebar-ring lsd:hover:bg-sidebar-accent lsd:hover:text-sidebar-accent-foreground lsd:absolute lsd:top-(--lsd-spacing-base) lsd:right-(--lsd-spacing-small) lsd:flex lsd:aspect-square lsd:w-(--lsd-spacing-large) lsd:items-center lsd:justify-center lsd:rounded-md lsd:p-0 lsd:outline-hidden lsd:transition-transform lsd:focus-visible:ring-2 lsd:[&>svg]:size-(--lsd-spacing-base) lsd:[&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:lsd:absolute after:lsd:-inset-[var(--lsd-spacing-smaller)] md:after:lsd:hidden',
        'lsd:group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  );
}

export function SidebarGroupContent({
  className,
  ...props
}: SidebarGroupContentProps) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn('lsd:w-full lsd:text-sm', className)}
      {...props}
    />
  );
}
