import { Button } from '@nipsys/shadcn-lsd';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react';

interface PageNavigationProps {
  previous?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
}

export function PageNavigation({ previous, next }: PageNavigationProps) {
  return (
    <div className="hidden h-16 w-full items-center gap-2 px-4 sm:flex sm:px-0">
      {previous && (
        <Link href={previous.href}>
          <Button variant="outlined" size="sm">
            <ArrowLeftIcon className="mr-2 h-4 w-4" weight="duotone" />
            {previous.title}
          </Button>
        </Link>
      )}
      {next && (
        <Link href={next.href} className="ml-auto">
          <Button variant="outlined" size="sm">
            {next.title}
            <ArrowRightIcon className="ml-2 h-4 w-4" weight="duotone" />
          </Button>
        </Link>
      )}
    </div>
  );
}
