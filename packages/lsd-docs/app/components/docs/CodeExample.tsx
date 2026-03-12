'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@nipsys/shadcn-lsd';
import { ClipboardIcon, CheckIcon } from '@phosphor-icons/react';
import { useState } from 'react';

interface CodeExampleProps {
  title?: string;
  code: string;
  language?: string;
}

export function CodeExample({ title = 'Code Example', code, language = 'tsx' }: CodeExampleProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="mb-6">
      <Card>
        {title && (
          <CardHeader>
            <CardTitle className="text-base">{title}</CardTitle>
          </CardHeader>
        )}
        <CardContent className="p-0">
          <div className="relative group">
            <pre className="overflow-x-auto p-4 bg-muted rounded-b-lg text-sm">
              <code>{code}</code>
            </pre>
            <button
              onClick={copyCode}
              className="absolute top-2 right-2 p-2 rounded-md bg-background border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted"
              aria-label="Copy code"
            >
              {copied ? (
                <CheckIcon className="h-4 w-4 text-green-600" />
              ) : (
                <ClipboardIcon className="h-4 w-4" />
              )}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}