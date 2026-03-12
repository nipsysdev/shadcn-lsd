'use client';

import { Card, CardContent } from '@nipsys/shadcn-lsd';
import { CodeExample } from './CodeExample';
import { ClientWrapper } from './ClientWrapper';
import type { ReactNode } from 'react';

interface ComponentPreviewProps {
  title?: string;
  code: string;
  language?: string;
  clientOnly?: boolean;
  children: ReactNode;
}

export function ComponentPreview({ 
  title, 
  code, 
  language = 'tsx', 
  clientOnly = false, 
  children 
}: ComponentPreviewProps) {
  return (
    <div className="mb-6">
      <Card>
        {title && (
          <div className="px-6 pt-6 pb-2">
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        )}
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="p-6 flex items-center justify-center min-h-[200px] bg-muted/30">
              {clientOnly ? (
                <ClientWrapper>{children}</ClientWrapper>
              ) : (
                children
              )}
            </div>
            <div className="p-0">
              <CodeExample title={undefined} code={code} language={language} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}