import type { IconProps } from '@phosphor-icons/react';
import type { ForwardRefExoticComponent } from 'react';

export interface NavItem {
  title: string;
  url?: string;
  icon?: ForwardRefExoticComponent<IconProps>;
  subItems?: { title: string; url: string }[];
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}
