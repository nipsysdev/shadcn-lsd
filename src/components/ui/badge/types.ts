import { cva, type VariantProps } from 'class-variance-authority';
import type { SizeVariant } from '@/lib/types';

export type BadgeVariant =
  | 'filled'
  | 'outlined'
  | 'destructive'
  | 'success'
  | 'warning'
  | 'info'
  | 'dot';

export const badgeVariants = cva(
  'lsd:inline-flex lsd:items-center lsd:justify-center lsd:border lsd:border-lsd-border lsd:rounded-[20px] lsd:w-fit lsd:whitespace-nowrap lsd:shrink-0 lsd:[&>svg]:size-3 lsd:[&>svg]:pointer-events-none lsd:hover:underline lsd:focus:underline lsd:cursor-pointer lsd:transition-colors lsd:overflow-hidden',
  {
    variants: {
      variant: {
        filled: 'lsd:bg-lsd-primary lsd:text-lsd-surface',
        outlined: 'lsd:bg-transparent lsd:text-lsd-text-primary',
        destructive:
          'lsd:bg-lsd-destructive lsd:text-white lsd:border-lsd-destructive',
        success: 'lsd:bg-lsd-success lsd:text-white lsd:border-lsd-success',
        warning: 'lsd:bg-lsd-warning lsd:text-white lsd:border-lsd-warning',
        info: 'lsd:bg-lsd-info lsd:text-white lsd:border-lsd-info',
        dot: 'lsd:rounded-full lsd:w-fit lsd:h-fit lsd:p-0',
      },
      size: {
        sm: 'lsd:h-[var(--lsd-spacing-larger)] lsd:px-[var(--lsd-spacing-smaller)] lsd:py-[var(--lsd-spacing-smallest)] lsd:gap-[var(--lsd-spacing-smallest)] lsd:text-[0.75rem] [&>svg]:size-3',
        md: 'lsd:h-[var(--lsd-spacing-largest)] lsd:px-[var(--lsd-spacing-small)] lsd:py-[var(--lsd-spacing-smallest)] lsd:gap-[var(--lsd-spacing-smaller)] lsd:text-[0.875rem] [&>svg]:size-3',
        lg: 'lsd:h-8 lsd:px-[var(--lsd-spacing-small)] lsd:py-[var(--lsd-spacing-smallest)] lsd:gap-[var(--lsd-spacing-smaller)] lsd:text-[1rem] [&>svg]:size-[14px]',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md',
    },
  },
);

export type BadgeVariants = VariantProps<typeof badgeVariants> & {
  variant?: BadgeVariant;
  size?: SizeVariant;
};
