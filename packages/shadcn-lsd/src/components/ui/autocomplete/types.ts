import type * as React from 'react';
import type { BorderVariant, SizeVariant } from '@/lib/types';

// Types
export type AutocompleteOption = {
  value: string;
  label: string;
};

export type AutocompleteSize = SizeVariant;
export type AutocompleteVariant = BorderVariant;

export interface AutocompleteProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value' | 'size'
  > {
  options?: AutocompleteOption[];
  onOptionsFetch?: (searchText: string) => Promise<AutocompleteOption[]>;
  placeholder?: string;
  emptyText?: string;
  loadingText?: string;
  className?: string;
  onValueChange?: (value: string) => void;
  onClear?: () => void;
  disabled?: boolean;
  label?: string;
  size?: AutocompleteSize;
  icon?: React.ReactNode;
  error?: boolean;
  variant?: AutocompleteVariant;
  clearable?: boolean;
  value?: string;
  isLoading?: boolean;
}

// Size classes configuration
export const AUTOCOMPLETE_SIZE_CLASSES: Record<
  AutocompleteSize,
  {
    container: string;
    label: string;
    inputContainer: string;
    input: string;
    icon: string;
  }
> = {
  xs: {
    container: 'lsd:w-[140px]',
    label:
      'lsd:mb-[var(--lsd-spacing-smaller)] lsd:ml-[var(--lsd-spacing-small)]',
    inputContainer: 'lsd:h-[var(--lsd-spacing-larger)]',
    input:
      'lsd:px-[var(--lsd-spacing-smaller)] lsd:py-[var(--lsd-spacing-smallest)]',
    icon: 'lsd:px-[var(--lsd-spacing-smaller)] lsd:py-[var(--lsd-spacing-smaller)]',
  },
  sm: {
    container: 'lsd:w-[164px]',
    label:
      'lsd:mb-[var(--lsd-spacing-smaller)] lsd:ml-[var(--lsd-spacing-small)]',
    inputContainer: 'lsd:h-[var(--lsd-spacing-largest)]',
    input:
      'lsd:px-[var(--lsd-spacing-small)] lsd:py-[var(--lsd-spacing-smaller)]',
    icon: 'lsd:px-[var(--lsd-spacing-smaller)] lsd:py-[var(--lsd-spacing-smaller)]',
  },
  md: {
    container: 'lsd:w-[188px]',
    label:
      'lsd:mb-[var(--lsd-spacing-smaller)] lsd:ml-[var(--lsd-spacing-base)]',
    inputContainer: 'lsd:h-8',
    input:
      'lsd:px-[var(--lsd-spacing-base)] lsd:py-[var(--lsd-spacing-smaller)]',
    icon: 'lsd:px-[var(--lsd-spacing-small)] lsd:py-[var(--lsd-spacing-smaller)]',
  },
  lg: {
    container: 'lsd:w-[208px]',
    label:
      'lsd:mb-[var(--lsd-spacing-smaller)] lsd:ml-[var(--lsd-spacing-base)]',
    inputContainer: 'lsd:h-10',
    input: 'lsd:px-[var(--lsd-spacing-base)] lsd:py-[var(--lsd-spacing-small)]',
    icon: 'lsd:px-[var(--lsd-spacing-base)] lsd:py-[var(--lsd-spacing-small)]',
  },
  xl: {
    container: 'lsd:w-[240px]',
    label:
      'lsd:mb-[var(--lsd-spacing-smaller)] lsd:ml-[var(--lsd-spacing-base)]',
    inputContainer: 'lsd:h-12',
    input:
      'lsd:px-[var(--lsd-spacing-large)] lsd:py-[var(--lsd-spacing-small)]',
    icon: 'lsd:px-[var(--lsd-spacing-base)] lsd:py-[var(--lsd-spacing-base)]',
  },
};

// Debounce delay for async fetching
export const AUTOCOMPLETE_DEBOUNCE_DELAY = 300;
