import { CircleNotchIcon } from '@phosphor-icons/react';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { type ButtonVariants, buttonVariants } from './types';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  asChild?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

const LoadingSpinner = ({ size }: { size?: string }) => {
  const getSpinnerSize = () => {
    const md = 'lsd:w-[var(--lsd-spacing-large)] lsd:h-[var(--lsd-spacing-large)]';
    switch (size) {
      case 'icon-sm':
        return 'lsd:w-[var(--lsd-spacing-small)] lsd:h-[var(--lsd-spacing-small)]';
      case 'sm':
        return 'lsd:w-[var(--lsd-spacing-base)] lsd:h-[var(--lsd-spacing-base)]';
      case 'md':
      case 'icon-md':
        return md;
      case 'lg':
      case 'icon-lg':
        return 'lsd:w-[var(--lsd-spacing-larger)] lsd:h-[var(--lsd-spacing-larger)]';
      default:
        return md;
    }
  };

  return <CircleNotchIcon className={`${getSpinnerSize()} lsd:animate-spin`} />;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isLinkVariant = variant === 'link';
    const isGhostVariant = variant === 'ghost' || variant === 'ghost-icon';
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          'lsd:text-foreground lsd:border lsd:hover:underline lsd:disabled:opacity-34 lsd:disabled:cursor-not-allowed lsd:disabled:no-underline',
          buttonVariants({ variant, size }),
          fullWidth && 'lsd:w-full',
          (isLinkVariant || isGhostVariant) && 'lsd:border-0',
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="lsd:flex lsd:items-center lsd:justify-center lsd:gap-(--lsd-spacing-smaller)">
            <LoadingSpinner size={size} />
            {children && <span className="lsd:opacity-50">{children}</span>}
          </span>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button };
