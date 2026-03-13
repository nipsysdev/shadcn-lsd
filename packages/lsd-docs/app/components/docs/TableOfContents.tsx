'use client';

import { Typography } from '@nipsys/shadcn-lsd';
import { useStore } from '@nanostores/react';
import { $activeId, scrollToSection } from '@/stores/tableOfContents';
import { TocItem } from '@/stores/tableOfContents';

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const activeId = useStore($activeId);

  if (!items || items.length === 0) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <div className="flex flex-col gap-2">
      <Typography variant="h4" className="text-sm font-semibold">
        On this page
      </Typography>
      <nav className="flex flex-col gap-1">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const paddingLeft = item.level === 3 ? 'pl-4' : item.level === 4 ? 'pl-8' : '';

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`text-sm transition-colors border-l-2 ${
                isActive
                  ? 'text-foreground border-foreground font-medium'
                  : 'text-muted-foreground border-transparent hover:text-foreground hover:border-muted-foreground'
              } ${paddingLeft}`}
            >
              {item.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
