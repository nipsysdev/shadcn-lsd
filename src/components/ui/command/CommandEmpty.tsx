import { Command as CommandPrimitive } from 'cmdk';
import type * as React from 'react';

export function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="lsd:py-(--lsd-spacing-larger) lsd:text-center lsd:text-sm"
      {...props}
    />
  );
}
