'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
  Typography,
} from '@nipsys/shadcn-lsd';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';

export default function SpacingPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Spacing"
        description="Explore the spacing scale used throughout LSD components."
      />

      <PageContent>
        <PageSection title="Spacing Scale">
          <Typography variant="body1" className="text-muted-foreground">
            LSD uses a consistent spacing scale built on rem units.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Smallest</CardTitle>
                <CardDescription>Extra small spacing (4px)</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2">--lsd-spacing-smallest: 0.25rem</Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Smaller</CardTitle>
                <CardDescription>Small spacing (8px)</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2">--lsd-spacing-smaller: 0.5rem</Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Small</CardTitle>
                <CardDescription>Medium-small spacing (12px)</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2">--lsd-spacing-small: 0.75rem</Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Base</CardTitle>
                <CardDescription>Default spacing (16px)</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2">--lsd-spacing-base: 1rem</Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Large</CardTitle>
                <CardDescription>Medium-large spacing (20px)</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2">--lsd-spacing-large: 1.25rem</Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Larger</CardTitle>
                <CardDescription>Large spacing (24px)</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2">--lsd-spacing-larger: 1.5rem</Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Largest</CardTitle>
                <CardDescription>Extra large spacing (28px)</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2">--lsd-spacing-largest: 1.75rem</Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Usage Examples">
          <Typography variant="body1" className="text-muted-foreground">
            Spacing tokens provide a unified system for margins, padding, gaps, and layout
            throughout the interface.
          </Typography>

          <div className="space-y-4 mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Padding</CardTitle>
                <CardDescription>Using spacing for padding</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeExample
                  code={`/* Using CSS variables */
.my-element {
  padding: var(--lsd-spacing-base);
}

/* Using Tailwind classes */
<div class="p-(--lsd-spacing-base)">Padding base</div>`}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Margin</CardTitle>
                <CardDescription>Using spacing for margins</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeExample
                  code={`/* Using CSS variables */
.my-element {
  margin: var(--lsd-spacing-large);
}

/* Using Tailwind classes */
<div class="m-(--lsd-spacing-large)">Margin large</div>`}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gap</CardTitle>
                <CardDescription>Using spacing for flex/grid gaps</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeExample
                  code={`/* Using CSS variables */
.my-container {
  gap: var(--lsd-spacing-base);
}

/* Using Tailwind classes */
<div class="flex gap-(--lsd-spacing-base)">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`}
                />
              </CardContent>
            </Card>
          </div>
        </PageSection>
      </PageContent>

      <PageNavigation
        previous={{
          title: 'Typography',
          href: '/design-tokens/typography',
        }}
        next={{
          title: 'Components',
          href: '/components/button',
        }}
      />
    </DocsLayout>
  );
}
