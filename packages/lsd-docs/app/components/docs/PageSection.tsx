'use client';

import { useEffect, ReactNode } from 'react';
import { Typography } from '@nipsys/shadcn-lsd';
import { registerSection, unregisterSection } from '@/stores/toc-store';

interface PageSectionProps {
  title: string;
  isChild?: boolean
  children: ReactNode;
}

export function PageSection({ title, isChild = false, children }: PageSectionProps) {
  useEffect(() => {
    registerSection({
      title,
      isChild
    });

    return () => {
      unregisterSection(title);
    };
  }, [title, isChild]);

  const HeadingVariant = isChild ? 'h3' : 'h2';

  return (
    <div id={title} className="mb-(--lsd-spacing-larger)">
      <Typography variant={HeadingVariant} className="mb-(--lsd-spacing-base)">
        {title}
      </Typography>
      {children}
    </div>
  );
}
