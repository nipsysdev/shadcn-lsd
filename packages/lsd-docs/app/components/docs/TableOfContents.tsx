'use client';

import { Button, Typography } from '@nipsys/shadcn-lsd';
import { useStore } from '@nanostores/react';
import { $activeSection, scrollToSection } from '@/stores/toc-store';
import { TocItem } from '@/stores/toc-store';

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const activeSection = useStore($activeSection);

  if (!items.length) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, title: string) => {
    e.preventDefault();
    scrollToSection(title);
  };

  return (
    <div className="flex flex-col fixed">
      <Typography variant="h6" color="secondary" className="mb-(--lsd-spacing-base)">
        On this page
      </Typography>

      <nav className="flex flex-col gap-(--lsd-spacing-small)">
        {items.map((item) => {
          const isActive = activeSection === item.title;
          const paddingLeft = item.isChild ? 'pl-(--lsd-spacing-base)' : '';

          return (
            <a
                key={item.title}
                href={`#${item.title}`}
                onClick={(e) => handleClick(e, item.title)}
                className={`text-sm transition-colors ${isActive ? 'underline' : 'not-hover:text-(--lsd-text-secondary)'} ${paddingLeft}`}
              >
                {item.title}
              </a>
          );
        })}
      </nav>
    </div>
  );
}
