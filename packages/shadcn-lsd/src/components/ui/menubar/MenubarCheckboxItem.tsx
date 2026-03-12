import { CheckIcon } from 'lucide-react';
import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { menubarCheckboxItemVariants } from './types';

export interface MenubarCheckboxItemProps
  extends React.ComponentProps<typeof MenubarPrimitive.CheckboxItem> {}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: MenubarCheckboxItemProps) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(menubarCheckboxItemVariants(), 'lsd:group', className)}
      checked={checked}
      {...props}
    >
      <span className="lsd:pointer-events-none lsd:absolute lsd:left-(--lsd-spacing-smaller) lsd:flex lsd:size-(--lsd-spacing-base) lsd:items-center lsd:justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="lsd:size-(--lsd-spacing-base)" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      <span className="lsd:group-hover:underline lsd:group-focus:underline">
        {children}
      </span>
    </MenubarPrimitive.CheckboxItem>
  );
}

export { MenubarCheckboxItem };
