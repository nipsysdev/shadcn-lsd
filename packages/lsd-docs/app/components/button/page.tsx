'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button as LSDButton,
  Separator,
  Typography,
} from '@nipsys/shadcn-lsd';
import { PlusIcon } from '@phosphor-icons/react';
import {
  DocsLayout,
  PageContent,
  PageHeader,
  PageNavigation,
} from '../../components/docs';
import { CodeExample } from '../../components/docs/CodeExample';
import { ComponentPreview } from '../../components/docs/ComponentPreview';

export default function ButtonPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Button"
        description="A button component that allows users to perform actions. Buttons communicate actions that users can take."
      />

      <PageContent>
        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Installation
          </Typography>
          <CodeExample
            title="Install the component"
            code={`pnpm add @nipsys/shadcn-lsd`}
          />
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Import
          </Typography>
          <CodeExample
            title="Import the component"
            code={`import { Button } from '@nipsys/shadcn-lsd';`}
          />
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Usage
          </Typography>
          <CodeExample
            title="Basic button"
            code={`<Button>Click me</Button>`}
          />
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Variants
          </Typography>
          <Typography
            variant="body1"
            className="text-muted-foreground mb-(--lsd-spacing-base)"
          >
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
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Sizes
          </Typography>
          <Typography
            variant="body1"
            className="text-muted-foreground mb-(--lsd-spacing-base)"
          >
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
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            States
          </Typography>
          <Typography
            variant="body1"
            className="text-muted-foreground mb-(--lsd-spacing-base)"
          >
            Buttons can be disabled or show a loading state.
          </Typography>

          <ComponentPreview
            title="Button states"
            code={`<div className="flex gap-(--lsd-spacing-base)">
  <Button>Normal</Button>
  <Button disabled>Disabled</Button>
  <Button loading>Loading...</Button>
</div>`}
          >
            <div className="flex gap-(--lsd-spacing-base)">
              <LSDButton>Normal</LSDButton>
              <LSDButton disabled>Disabled</LSDButton>
              <LSDButton loading>Loading...</LSDButton>
            </div>
          </ComponentPreview>
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Icon Buttons
          </Typography>
          <Typography
            variant="body1"
            className="text-muted-foreground mb-(--lsd-spacing-base)"
          >
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
              <LSDButton
                variant="outlined-icon"
                size="icon-md"
                aria-label="Add"
              >
                <PlusIcon />
              </LSDButton>
              <LSDButton variant="ghost-icon" size="icon-md" aria-label="Add">
                <PlusIcon />
              </LSDButton>
            </div>
          </ComponentPreview>
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Destructive & Success
          </Typography>
          <Typography
            variant="body1"
            className="text-muted-foreground mb-(--lsd-spacing-base)"
          >
            Use destructive variants for dangerous actions and success variants
            for positive actions.
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
              <LSDButton
                variant="destructive-icon"
                size="icon-md"
                aria-label="Delete"
              >
                <PlusIcon />
              </LSDButton>
              <LSDButton
                variant="success-icon"
                size="icon-md"
                aria-label="Save"
              >
                <PlusIcon />
              </LSDButton>
            </div>
          </ComponentPreview>
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Full Width
          </Typography>
          <Typography
            variant="body1"
            className="text-muted-foreground mb-(--lsd-spacing-base)"
          >
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
            <div
              className="w-full space-y-(--lsd-spacing-small)"
              style={{ width: '300px' }}
            >
              <LSDButton fullWidth>Full Width Button</LSDButton>
              <LSDButton variant="outlined" fullWidth>
                Full Width Outlined
              </LSDButton>
            </div>
          </ComponentPreview>
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            API Reference
          </Typography>
          <Card>
            <CardContent className="p-(--lsd-spacing-large)">
              <Typography variant="h3" className="mb-(--lsd-spacing-base)">
                Button Props
              </Typography>
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
                      "filled" | "outlined" | "ghost" | "link" | "filled-icon" |
                      "outlined-icon" | "ghost-icon" | "destructive" | "success"
                      | "destructive-icon" | "success-icon"
                    </code>
                    <br />
                    Default:{' '}
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                      "filled"
                    </code>
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
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                      "md"
                    </code>
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
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                      boolean
                    </code>
                    <br />
                    Default:{' '}
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                      false
                    </code>
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
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                      boolean
                    </code>
                    <br />
                    Default:{' '}
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                      false
                    </code>
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
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                      boolean
                    </code>
                    <br />
                    Default:{' '}
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                      false
                    </code>
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
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                      boolean
                    </code>
                    <br />
                    Default:{' '}
                    <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                      false
                    </code>
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="mb-(--lsd-spacing-larger)" />

        <div className="mb-(--lsd-spacing-larger)">
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Accessibility
          </Typography>
          <Typography variant="body1" className="text-muted-foreground">
            Buttons follow WAI-ARIA guidelines and are fully accessible. When
            using icon buttons, always provide an{' '}
            <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
              aria-label
            </code>{' '}
            to describe the action.
          </Typography>
        </div>
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
