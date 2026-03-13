import { cva, type VariantProps } from 'class-variance-authority';
import type { SizeVariant } from '@/lib/types';

export const toggleVariants = cva(
  'lsd:inline-flex lsd:items-center lsd:justify-center lsd:border lsd:transition-colors lsd:bg-transparent lsd:text-lsd-text-primary lsd:border-lsd-border lsd:hover:underline lsd:cursor-pointer lsd:disabled:opacity-34 lsd:disabled:cursor-not-allowed lsd:disabled:no-underline lsd:data-[state=on]:bg-lsd-primary lsd:data-[state=on]:text-lsd-surface',
  {
    variants: {
      size: {
        sm: 'lsd:h-8 lsd:min-w-8 lsd:px-[var(--lsd-spacing-smaller)] lsd:py-[var(--lsd-spacing-smaller)] lsd:text-[0.75rem]',
        md: 'lsd:h-10 lsd:min-w-10 lsd:px-[var(--lsd-spacing-small)] lsd:py-[var(--lsd-spacing-smaller)]',
        lg: 'lsd:h-12 lsd:min-w-12 lsd:px-[var(--lsd-spacing-base)] lsd:py-[var(--lsd-spacing-small)] lsd:text-[0.875rem]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type ToggleVariants = VariantProps<typeof toggleVariants> & {
  size?: SizeVariant;
};
