'use client';

import { Card, CardContent, Badge as LSDBadge, Separator, Typography } from '@nipsys/shadcn-lsd';
import { CheckIcon, InfoIcon, WarningIcon } from '@phosphor-icons/react';
import { CodeExample } from '../../components/docs/CodeExample';
import { ComponentPreview } from '../../components/docs/ComponentPreview';
import { DocsLayout } from '../../components/docs/DocsLayout';
import { PageContent } from '../../components/docs/PageContent';
import { PageHeader } from '../../components/docs/PageHeader';
import { PageNavigation } from '../../components/docs/PageNavigation';

export default function BadgePage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Badge"
        description="A badge component that displays small pieces of information. Badges are used to highlight status, categories, or metadata."
      />

      <PageContent>
        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            {' '}
            Installation{' '}
          </Typography>
          <CodeExample title="Install the component" code={'pnpm add @nipsys/shadcn-lsd'} />
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            {' '}
            Import{' '}
          </Typography>
          <CodeExample
            title="Import the component"
            code={`import { Badge } from '@nipsys/shadcn-lsd';`}
          />
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            {' '}
            Usage{' '}
          </Typography>
          <CodeExample title="Basic badge" code={'<Badge>Default Badge</Badge>'} />
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            {' '}
            Variants{' '}
          </Typography>
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Use the{' '}
            <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
              variant
            </code>{' '}
            prop to change the badge style.
          </Typography>

          <ComponentPreview
            title="Badge variants"
            code={`<div className="flex gap-(--lsd-spacing-base) items-center">
  <Badge variant="filled">Filled</Badge>
  <Badge variant="outlined">Outlined</Badge>
</div>`}
          >
            <div className="flex gap-(--lsd-spacing-base) items-center">
              <LSDBadge variant="filled">Filled</LSDBadge>
              <LSDBadge variant="outlined">Outlined</LSDBadge>
            </div>
          </ComponentPreview>
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Color Variants
          </Typography>
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Use color variants to convey different meanings and states.
          </Typography>

          <ComponentPreview
            title="Badge color variants"
            code={`<div className="flex gap-(--lsd-spacing-base) items-center">
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="info">Info</Badge>
</div>`}
          >
            <div className="flex gap-(--lsd-spacing-base) items-center">
              <LSDBadge variant="destructive">Destructive</LSDBadge>
              <LSDBadge variant="success">Success</LSDBadge>
              <LSDBadge variant="warning">Warning</LSDBadge>
              <LSDBadge variant="info">Info</LSDBadge>
            </div>
          </ComponentPreview>
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            {' '}
            Sizes{' '}
          </Typography>
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Use the{' '}
            <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
              size
            </code>{' '}
            prop to change the badge size.
          </Typography>

          <ComponentPreview
            title="Badge sizes"
            code={`<div className="flex gap-(--lsd-spacing-base) items-center">
  <Badge size="sm">Small</Badge>
  <Badge size="md">Medium</Badge>
  <Badge size="lg">Large</Badge>
</div>`}
          >
            <div className="flex gap-(--lsd-spacing-base) items-center">
              <LSDBadge size="sm">Small</LSDBadge>
              <LSDBadge size="md">Medium</LSDBadge>
              <LSDBadge size="lg">Large</LSDBadge>
            </div>
          </ComponentPreview>
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            {' '}
            Icon Badges{' '}
          </Typography>
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Add icons to badges using the{' '}
            <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
              icon
            </code>{' '}
            and{' '}
            <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
              iconPosition
            </code>{' '}
            props.
          </Typography>

          <ComponentPreview
            title="Icon badges"
            code={`<div className="flex flex-col gap-(--lsd-spacing-base)">
  <div className="flex gap-(--lsd-spacing-base) items-center">
    <Badge icon={<CheckIcon />} iconPosition="left">
      With Left Icon
    </Badge>
    <Badge icon={<InfoIcon />} iconPosition="right">
      With Right Icon
    </Badge>
  </div>
  <div className="flex gap-(--lsd-spacing-base) items-center">
    <Badge variant="success" icon={<CheckIcon />}>
      Success
    </Badge>
    <Badge variant="warning" icon={<WarningIcon />}>
      Warning
    </Badge>
    <Badge variant="info" icon={<InfoIcon />}>
      Info
    </Badge>
  </div>
</div>`}
          >
            <div className="flex flex-col gap-(--lsd-spacing-base)">
              <div className="flex gap-(--lsd-spacing-base) items-center">
                <LSDBadge icon={<CheckIcon />} iconPosition="left">
                  With Left Icon
                </LSDBadge>
                <LSDBadge icon={<InfoIcon />} iconPosition="right">
                  With Right Icon
                </LSDBadge>
              </div>
              <div className="flex gap-(--lsd-spacing-base) items-center">
                <LSDBadge variant="success" icon={<CheckIcon />}>
                  Success
                </LSDBadge>
                <LSDBadge variant="warning" icon={<WarningIcon />}>
                  Warning
                </LSDBadge>
                <LSDBadge variant="info" icon={<InfoIcon />}>
                  {' '}
                  Info{' '}
                </LSDBadge>
              </div>
            </div>
          </ComponentPreview>
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            {' '}
            Dot Badges{' '}
          </Typography>
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Use the{' '}
            <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
              dot
            </code>{' '}
            variant for status indicators.
          </Typography>

          <ComponentPreview
            title="Dot badges"
            code={`<div className="flex gap-(--lsd-spacing-base) items-center">
  <Badge variant="dot" size="sm" />
  <Badge variant="dot" size="md" />
  <Badge variant="dot" size="lg" />
</div>`}
          >
            <div className="flex gap-(--lsd-spacing-base) items-center">
              <LSDBadge variant="dot" size="sm" />
              <LSDBadge variant="dot" size="md" />
              <LSDBadge variant="dot" size="lg" />
            </div>
          </ComponentPreview>
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Dot Badges with Colors
          </Typography>
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Combine dot badges with color classes for status indicators.
          </Typography>

          <ComponentPreview
            title="Dot badges with colors"
            code={`<div className="flex gap-(--lsd-spacing-base) items-center">
  <Badge variant="dot" size="md" className="bg-destructive" />
  <Badge variant="dot" size="md" className="bg-success" />
  <Badge variant="dot" size="md" className="bg-warning" />
  <Badge variant="dot" size="md" className="bg-info" />
</div>`}
          >
            <div className="flex gap-(--lsd-spacing-base) items-center">
              <LSDBadge variant="dot" size="md" className="bg-destructive" />
              <LSDBadge variant="dot" size="md" className="bg-success" />
              <LSDBadge variant="dot" size="md" className="bg-warning" />
              <LSDBadge variant="dot" size="md" className="bg-info" />
            </div>
          </ComponentPreview>
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            {' '}
            API Reference{' '}
          </Typography>
          <Card>
            <CardContent className="p-(--lsd-spacing-large)">
              <Typography variant="h3" className="mb-(--lsd-spacing-base)">
                {' '}
                Badge Props{' '}
              </Typography>
              <div className="space-y-4">
                <div>
                  <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                    variant
                  </code>
                  <Typography
                    variant="body1"
                    className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                  >
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                      "filled" | "outlined" | "destructive" | "success" | "warning" | "info" | "dot"
                    </code>
                    <br />
                    Default:{' '}
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">"filled"</code>
                  </Typography>
                </div>
                <div>
                  <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                    size
                  </code>
                  <Typography
                    variant="body1"
                    className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                  >
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                      "sm" | "md" | "lg"
                    </code>
                    <br />
                    Default:{' '}
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">"md"</code>
                  </Typography>
                </div>
                <div>
                  <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                    icon
                  </code>
                  <Typography
                    variant="body1"
                    className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                  >
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                      React.ReactNode
                    </code>
                    <br />
                    Optional icon to display in the badge
                  </Typography>
                </div>
                <div>
                  <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                    iconPosition
                  </code>
                  <Typography
                    variant="body1"
                    className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                  >
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                      "left" | "right"
                    </code>
                    <br />
                    Default:{' '}
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">"left"</code>
                  </Typography>
                </div>
                <div>
                  <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                    onDismiss
                  </code>
                  <Typography
                    variant="body1"
                    className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                  >
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                      () =&gt; void
                    </code>
                    <br />
                    Optional callback when the badge is dismissed
                  </Typography>
                </div>
                <div>
                  <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                    onClick
                  </code>
                  <Typography
                    variant="body1"
                    className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                  >
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                      () =&gt; void
                    </code>
                    <br />
                    Optional callback when the badge is clicked
                  </Typography>
                </div>
                <div>
                  <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                    className
                  </code>
                  <Typography
                    variant="body1"
                    className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                  >
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">string</code>
                    <br />
                    Additional CSS classes to apply
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            {' '}
            Accessibility{' '}
          </Typography>
          <Typography variant="body1" className="text-muted-foreground">
            Badges follow WAI-ARIA guidelines and are fully accessible. When using badges to convey
            status, ensure the text content clearly describes the meaning. For icon-only badges,
            provide an{' '}
            <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
              aria-label
            </code>{' '}
            to describe the badge's purpose.
          </Typography>
        </div>
      </PageContent>

      <PageNavigation
        previous={{
          title: 'Button',
          href: '/components/button',
        }}
        next={{
          title: 'Button Group',
          href: '/components/button-group',
        }}
      />
    </DocsLayout>
  );
}
