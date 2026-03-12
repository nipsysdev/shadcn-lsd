import { cva, type VariantProps } from 'class-variance-authority';
import type { IconSize, SizeVariant } from '@/lib/types';

export type ButtonVariant =
  | 'filled'
  | 'outlined'
  | 'filled-icon'
  | 'outlined-icon'
  | 'link'
  | 'ghost'
  | 'ghost-icon'
  | 'destructive'
  | 'destructive-icon'
  | 'success'
  | 'success-icon';

export const buttonVariants = cva(
  'lsd:inline-flex lsd:items-center lsd:justify-center lsd:border lsd:transition-colors lsd:cursor-pointer',
  {
    variants: {
      variant: {
        filled: 'lsd:bg-primary lsd:text-primary-foreground',
        outlined: 'lsd:bg-transparent lsd:text-foreground',
        'filled-icon':
          'lsd:bg-primary lsd:text-primary-foreground lsd:rounded-full',
        'outlined-icon':
          'lsd:bg-transparent lsd:text-foreground lsd:rounded-full',
        link: 'lsd:bg-transparent lsd:border-0 lsd:text-foreground lsd:hover:underline',
        ghost:
          'lsd:bg-transparent lsd:text-foreground lsd:border-0 lsd:hover:bg-accent lsd:hover:text-accent-foreground',
        'ghost-icon':
          'lsd:bg-transparent lsd:text-foreground lsd:border-0 lsd:rounded-full lsd:hover:bg-accent lsd:hover:text-accent-foreground',
        destructive:
          'lsd:bg-lsd-destructive lsd:text-white lsd:border-lsd-destructive lsd:hover:bg-lsd-destructive/90',
        'destructive-icon':
          'lsd:bg-lsd-destructive lsd:text-white lsd:border-lsd-destructive lsd:rounded-full lsd:hover:bg-lsd-destructive/90',
        success:
          'lsd:bg-lsd-success lsd:text-white lsd:border-lsd-success lsd:hover:bg-lsd-success/90',
        'success-icon':
          'lsd:bg-lsd-success lsd:text-white lsd:border-lsd-success lsd:rounded-full lsd:hover:bg-lsd-success/90',
      },
      size: {
        sm: 'lsd:h-8 lsd:px-[var(--lsd-spacing-small)] lsd:py-[var(--lsd-spacing-smaller)] lsd:text-sm',
        md: 'lsd:h-10 lsd:px-[var(--lsd-spacing-larger)] lsd:py-[var(--lsd-spacing-smaller)] lsd:text-base',
        lg: 'lsd:h-12 lsd:px-8 lsd:py-[var(--lsd-spacing-small)] lsd:text-lg',
        'icon-sm': 'lsd:w-8 lsd:h-8',
        'icon-md': 'lsd:w-10 lsd:h-10',
        'icon-lg': 'lsd:w-12 lsd:h-12',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md',
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants> & {
  variant?: ButtonVariant;
  size?: SizeVariant | IconSize;
};
