import type * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva, type VariantProps } from 'class-variance-authority';

export const tabsVariants = cva('', {
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
    fullWidth: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    size: 'lg',
    fullWidth: false,
  },
});

export const tabsListVariants = cva(
  'lsd:bg-lsd-surface lsd:border-b lsd:flex lsd:flex-row',
  {
    variants: {
      size: {
        sm: 'lsd:h-8',
        md: 'lsd:h-10',
        lg: 'lsd:h-12',
      },
      fullWidth: {
        true: 'lsd:w-full',
        false: 'lsd:w-fit',
      },
    },
    defaultVariants: {
      size: 'lg',
      fullWidth: false,
    },
  },
);

export const tabsTriggerVariants = cva(
  'lsd:text-lsd-text-primary lsd:cursor-pointer lsd:border lsd:border-transparent lsd:border-b-0 lsd:hover:underline lsd:data-[state=active]:border-lsd-border lsd:data-[state=active]:bg-lsd-surface lsd:data-[state=active]:font-medium lsd:disabled:opacity-34 lsd:disabled:pointer-events-none lsd:flex lsd:items-center lsd:justify-center lsd:whitespace-nowrap lsd:transition-colors',
  {
    variants: {
      size: {
        sm: 'lsd:px-[var(--lsd-spacing-small)] lsd:py-[var(--lsd-spacing-smaller)] lsd:text-sm lsd:[&>svg]:ml-[var(--lsd-spacing-smaller)] lsd:[&>svg]:h-[var(--lsd-spacing-base)] lsd:[&>svg]:w-[var(--lsd-spacing-base)]',
        md: 'lsd:px-[var(--lsd-spacing-base)] lsd:py-[var(--lsd-spacing-smaller)] lsd:text-base lsd:[&>svg]:ml-[var(--lsd-spacing-small)] lsd:[&>svg]:h-[var(--lsd-spacing-large)] lsd:[&>svg]:w-[var(--lsd-spacing-large)]',
        lg: 'lsd:px-[var(--lsd-spacing-large)] lsd:py-[var(--lsd-spacing-small)] lsd:text-lg lsd:[&>svg]:ml-[var(--lsd-spacing-base)] lsd:[&>svg]:h-[var(--lsd-spacing-larger)] lsd:[&>svg]:w-[var(--lsd-spacing-larger)]',
      },
      fullWidth: {
        true: 'lsd:flex-1',
        false: '',
      },
    },
    defaultVariants: {
      size: 'lg',
      fullWidth: false,
    },
  },
);

export type TabsVariants = VariantProps<typeof tabsVariants>;
export type TabsListVariants = VariantProps<typeof tabsListVariants>;
export type TabsTriggerVariants = VariantProps<typeof tabsTriggerVariants>;

export interface TabsProps
  extends React.ComponentProps<typeof TabsPrimitive.Root>,
    TabsVariants {}

export interface TabsListProps
  extends React.ComponentProps<typeof TabsPrimitive.List>,
    TabsListVariants {}

export interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Trigger>,
    TabsTriggerVariants {}
