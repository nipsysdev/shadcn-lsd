'use client';

import { Card, CardContent, Button as LSDButton, Separator, Typography } from '@nipsys/shadcn-lsd';
import { PlusIcon } from '@phosphor-icons/react';
import { CodeExample } from '@/components/docs/CodeExample';
import { ComponentPreview } from '@/components/docs/ComponentPreview';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';

export default function ButtonPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Button"
        description="A button component that allows users to perform actions. Buttons communicate actions that users can take."
      />

      <PageContent>
        <PageSection title="Installation">
          <CodeExample title="Install the component" code={'pnpm add @nipsys/shadcn-lsd'} />
        </PageSection>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <PageSection title="Import">
          <CodeExample
            title="Import the component"
            code={`import { Button } from '@nipsys/shadcn-lsd';`}
          />
        </PageSection>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <PageSection title="Usage">
          <CodeExample title="Basic button" code={'<Button>Click me</Button>'} />
        </PageSection>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <PageSection title="Variants">
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Use the{' '}
            <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
              variant
            </code>{' '}
            prop to change the button style.
          </Typography>

          <ComponentPreview
            title="Button variants"
            code={`<div className="flex gap-(--lsd-spacing-base)">
  <Button variant="filled">Filled</Button>
  <Button variant="outlined">Outlined</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</div>`}
          >
            <div className="flex gap-(--lsd-spacing-base)">
              <LSDButton variant="filled">Filled</LSDButton>
              <LSDButton variant="outlined">Outlined</LSDButton>
              <LSDButton variant="ghost">Ghost</LSDButton>
              <LSDButton variant="link">Link</LSDButton>
            </div>
          </ComponentPreview>
        </PageSection>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <PageSection title="Sizes">
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Use the{' '}
            <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
              size
            </code>{' '}
            prop to change the button size.
          </Typography>

          <ComponentPreview
            title="Button sizes"
            code={`<div className="flex gap-(--lsd-spacing-base) items-center">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>`}
          >
            <div className="flex gap-(--lsd-spacing-base) items-center">
              <LSDButton size="sm">Small</LSDButton>
              <LSDButton size="md">Medium</LSDButton>
              <LSDButton size="lg">Large</LSDButton>
            </div>
          </ComponentPreview>
        </PageSection>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <PageSection title="States">
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Buttons can be disabled or show a loading state.
          </Typography>

          <ComponentPreview
            title="Button states"
            code={`<div className="flex gap-(--lsd-spacing-base)">
  <Button>Normal</Button>
  <Button disabled>Disabled</Button>
  <Button loading>Loading</Button>
</div>`}
          >
            <div className="flex gap-(--lsd-spacing-base)">
              <LSDButton>Normal</LSDButton>
              <LSDButton disabled>Disabled</LSDButton>
              <LSDButton loading>Loading</LSDButton>
            </div>
          </ComponentPreview>
        </PageSection>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <PageSection title="Icon Buttons">
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Use icon variants for buttons that only contain an icon.
          </Typography>

          <ComponentPreview
            title="Icon button variants"
            code={`<div className="flex gap-(--lsd-spacing-base) items-center">
  <Button variant="filled-icon" size="icon-md" aria-label="Add">
    <PlusIcon />
  </Button>
  <Button variant="outlined-icon" size="icon-md" aria-label="Add">
    <PlusIcon />
  </Button>
  <Button variant="ghost-icon" size="icon-md" aria-label="Add">
    <PlusIcon />
  </Button>
</div>`}
          >
            <div className="flex gap-(--lsd-spacing-base) items-center">
              <LSDButton variant="filled-icon" size="icon-md" aria-label="Add">
                <PlusIcon />
              </LSDButton>
              <LSDButton variant="outlined-icon" size="icon-md" aria-label="Add">
                <PlusIcon />
              </LSDButton>
              <LSDButton variant="ghost-icon" size="icon-md" aria-label="Add">
                <PlusIcon />
              </LSDButton>
            </div>
          </ComponentPreview>
        </PageSection>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <PageSection title="Destructive & Success">
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Use destructive variants for dangerous actions and success variants for positive
            actions.
          </Typography>

          <ComponentPreview
            title="Destructive and success variants"
            code={`<div className="flex gap-(--lsd-spacing-base)">
  <Button variant="destructive">Delete</Button>
  <Button variant="success">Save</Button>
  <Button variant="destructive-icon" size="icon-md" aria-label="Delete">
    <PlusIcon />
  </Button>
  <Button variant="success-icon" size="icon-md" aria-label="Save">
    <PlusIcon />
  </Button>
</div>`}
          >
            <div className="flex gap-(--lsd-spacing-base)">
              <LSDButton variant="destructive">Delete</LSDButton>
              <LSDButton variant="success">Save</LSDButton>
              <LSDButton variant="destructive-icon" size="icon-md" aria-label="Delete">
                <PlusIcon />
              </LSDButton>
              <LSDButton variant="success-icon" size="icon-md" aria-label="Save">
                <PlusIcon />
              </LSDButton>
            </div>
          </ComponentPreview>
        </PageSection>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <PageSection title="asChild">
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Use the{' '}
            <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
              asChild
            </code>{' '}
            prop to merge the button styles with a child element, such as a link. This is useful
            when you want a button that navigates to a different page.
          </Typography>

          <ComponentPreview
            title="Button as a link"
            code={`import Link from 'next/link';

<Button asChild>
  <Link href="/getting-started">Get Started</Link>
</Button>

<Button asChild variant="outlined">
  <Link href="/components">View Components</Link>
</Button>`}
          >
            <div className="flex gap-(--lsd-spacing-base)">
              <LSDButton asChild>
                <a href="/getting-started">Get Started</a>
              </LSDButton>
              <LSDButton asChild variant="outlined">
                <a href="/components">View Components</a>
              </LSDButton>
            </div>
          </ComponentPreview>
        </PageSection>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <PageSection title="Full Width">
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Use the{' '}
            <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
              fullWidth
            </code>{' '}
            prop to make the button span the full width of its container.
          </Typography>

          <ComponentPreview
            title="Full width button"
            code={`<div className="w-full space-y-(--lsd-spacing-small)">
  <Button fullWidth>Full Width Button</Button>
  <Button variant="outlined" fullWidth>
    Full Width Outlined
  </Button>
</div>`}
          >
            <div className="w-full space-y-(--lsd-spacing-small)" style={{ width: '300px' }}>
              <LSDButton fullWidth>Full Width Button</LSDButton>
              <LSDButton variant="outlined" fullWidth>
                Full Width Outlined
              </LSDButton>
            </div>
          </ComponentPreview>
        </PageSection>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <PageSection title="API Reference">
          <Card>
            <CardContent className="p-(--lsd-spacing-large)">
              <PageSection title="Button Props" level={3}>
                <div className="space-y-(--lsd-spacing-base)">
                  <div>
                    <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                      variant
                    </code>
                    <Typography
                      variant="body1"
                      className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                    >
                      <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                        "filled" | "outlined" | "ghost" | "link" | "filled-icon" | "outlined-icon" |
                        "ghost-icon" | "destructive" | "success" | "destructive-icon" |
                        "success-icon"
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
                        "sm" | "md" | "lg" | "icon-sm" | "icon-md" | "icon-lg"
                      </code>
                      <br />
                      Default:{' '}
                      <code className="px-(--lsd-spacing-smaller) bg-muted rounded">"md"</code>
                    </Typography>
                  </div>
                  <div>
                    <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                      loading
                    </code>
                    <Typography
                      variant="body1"
                      className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                    >
                      <code className="px-(--lsd-spacing-smaller) bg-muted rounded">boolean</code>
                      <br />
                      Default:{' '}
                      <code className="px-(--lsd-spacing-smaller) bg-muted rounded">false</code>
                    </Typography>
                  </div>
                  <div>
                    <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                      fullWidth
                    </code>
                    <Typography
                      variant="body1"
                      className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                    >
                      <code className="px-(--lsd-spacing-smaller) bg-muted rounded">boolean</code>
                      <br />
                      Default:{' '}
                      <code className="px-(--lsd-spacing-smaller) bg-muted rounded">false</code>
                    </Typography>
                  </div>
                  <div>
                    <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                      disabled
                    </code>
                    <Typography
                      variant="body1"
                      className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                    >
                      <code className="px-(--lsd-spacing-smaller) bg-muted rounded">boolean</code>
                      <br />
                      Default:{' '}
                      <code className="px-(--lsd-spacing-smaller) bg-muted rounded">false</code>
                    </Typography>
                  </div>
                  <div>
                    <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                      asChild
                    </code>
                    <Typography
                      variant="body1"
                      className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                    >
                      <code className="px-(--lsd-spacing-smaller) bg-muted rounded">boolean</code>
                      <br />
                      Default:{' '}
                      <code className="px-(--lsd-spacing-smaller) bg-muted rounded">false</code>
                      <br />
                      When true, merges the button styles with the child element. Useful for
                      rendering buttons as links or other elements.
                    </Typography>
                  </div>
                </div>
              </PageSection>
            </CardContent>
          </Card>
        </PageSection>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <PageSection title="Accessibility">
          <Typography variant="body1" className="text-muted-foreground">
            Buttons follow WAI-ARIA guidelines and are fully accessible. When using icon buttons,
            always provide an{' '}
            <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
              aria-label
            </code>{' '}
            to describe the action.
          </Typography>
        </PageSection>
      </PageContent>

      <PageNavigation
        previous={{
          title: 'Getting Started',
          href: '/getting-started/installation',
        }}
        next={{
          title: 'Badge',
          href: '/components/badge',
        }}
      />
    </DocsLayout>
  );
}
