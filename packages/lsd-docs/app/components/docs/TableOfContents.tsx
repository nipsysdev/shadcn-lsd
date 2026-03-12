import { Typography } from '@nipsys/shadcn-lsd';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <Typography variant="h4" className="text-sm font-semibold">
        On this page
      </Typography>
      <nav className="flex flex-col gap-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`text-sm text-muted-foreground hover:text-foreground transition-colors ${
              item.level === 3 ? 'pl-4' : ''
            }`}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  );
}
