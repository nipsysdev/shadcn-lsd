import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-(--lsd-spacing-small)">
      <div className="flex flex-col gap-(--lsd-spacing-small)">
        <div className="flex items-center justify-between md:items-start">
          <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h1>
          {actions && (
            <div className="docs-nav flex items-center gap-(--lsd-spacing-small)">
              {actions}
            </div>
          )}
        </div>
        {description && (
          <p className="text-[1.05rem] text-muted-foreground sm:text-base sm:text-balance md:max-w-[80%]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
