import type { SizeVariant } from '@/lib/types';

export function getTextSizeClasses(size: SizeVariant): string {
  switch (size) {
    case 'xs':
      return 'lsd:text-xs file:lsd:text-xs';
    case 'sm':
      return 'lsd:text-sm file:lsd:text-sm';
    case 'md':
      return 'lsd:text-base file:lsd:text-base';
    case 'lg':
      return 'lsd:text-lg file:lsd:text-lg';
    case 'xl':
      return 'lsd:text-xl file:lsd:text-xl';
    default:
      return 'lsd:text-base file:lsd:text-base';
  }
}

export function getVerticalPaddingClasses(size: SizeVariant): string {
  const md = 'lsd:py-[var(--lsd-spacing-small)]';
  switch (size) {
    case 'xs':
      return 'lsd:py-[var(--lsd-spacing-smallest)]';
    case 'sm':
      return 'lsd:py-[var(--lsd-spacing-smaller)]';
    case 'md':
      return md;
    case 'lg':
      return 'lsd:py-[var(--lsd-spacing-base)]';
    case 'xl':
      return 'lsd:py-[var(--lsd-spacing-large)]';
    default:
      return md;
  }
}

export function getLabelSizeClasses(size: SizeVariant): string {
  switch (size) {
    case 'xs':
      return 'lsd:text-xs';
    case 'sm':
      return 'lsd:text-xs';
    case 'md':
      return 'lsd:text-sm';
    case 'lg':
      return 'lsd:text-base';
    case 'xl':
      return 'lsd:text-lg';
    default:
      return 'lsd:text-sm';
  }
}
