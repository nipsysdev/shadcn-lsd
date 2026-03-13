'use client';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Separator,
  Switch,
  Typography,
} from '@nipsys/shadcn-lsd';
import { ArrowRightIcon } from '@phosphor-icons/react';
import Link from 'next/link';

export default function UsagePage() {
  return (
    <div className="container mx-auto px-(--lsd-spacing-base) py-(--lsd-spacing-larger) max-w-5xl">
      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h1" className="mb-(--lsd-spacing-base)">
          Usage
        </Typography>
        <Typography variant="body1" className="text-muted-foreground text-lg">
          Learn how to use LSD components in your React application.
        </Typography>
      </div>

      <div className="space-y-8">
        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Importing Components
          </Typography>
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Import components from the LSD package:
          </Typography>

          <Card>
            <CardContent className="pt-(--lsd-spacing-large)">
              <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                <pre>
                  <code>{`import { Button, Card, Typography } from '@nipsys/shadcn-lsd';`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Basic Button Example
          </Typography>
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Buttons come in multiple variants and sizes:
          </Typography>

          <Card>
            <CardContent className="pt-(--lsd-spacing-large)">
              <div className="flex flex-wrap gap-(--lsd-spacing-base) mb-(--lsd-spacing-base)">
                <Button>Default</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                <pre>
                  <code>{`<Button>Default</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Card Component
          </Typography>
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Cards are composed of multiple sub-components:
          </Typography>

          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="body1">
                This is the card content area where you can place any content you need.
              </Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-large)">
              <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                <pre>
                  <code>{`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <Typography variant="body1">
      Card content goes here
    </Typography>
  </CardContent>
</Card>`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Typography
          </Typography>
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Use the Typography component for consistent text styling:
          </Typography>

          <Card>
            <CardContent className="pt-(--lsd-spacing-large) space-y-4">
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="body1">Body text</Typography>
              <Typography variant="body2">Small text</Typography>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-large)">
              <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                <pre>
                  <code>{`<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="h3">Heading 3</Typography>
<Typography variant="body1">Body text</Typography>
<Typography variant="body2">Small text</Typography>`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Form Components
          </Typography>
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            LSD provides various form components:
          </Typography>

          <Card>
            <CardContent className="pt-(--lsd-spacing-large) space-y-4">
              <div>
                <Typography variant="body1" className="mb-(--lsd-spacing-small)">
                  Input:
                </Typography>
                <Input placeholder="Enter text..." />
              </div>
              <div className="flex items-center gap-(--lsd-spacing-small)">
                <Checkbox />
                <Typography variant="body1">Checkbox option</Typography>
              </div>
              <div className="flex items-center gap-(--lsd-spacing-small)">
                <Switch />
                <Typography variant="body1">Toggle switch</Typography>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent className="pt-(--lsd-spacing-large)">
              <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                <pre>
                  <code>{`<Input placeholder="Enter text..." />

<Checkbox />
<Typography variant="body1">Checkbox option</Typography>

<Switch />
<Typography variant="body1">Toggle switch</Typography>`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Next Steps
          </Typography>
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Explore more components and customization options:
          </Typography>
          <div className="flex gap-(--lsd-spacing-base)">
            <Link href="/getting-started/theming">
              <Button>
                Explore Theming
                <ArrowRightIcon className="ml-(--lsd-spacing-small) h-4 w-4" weight="duotone" />
              </Button>
            </Link>
            <Link href="/design-tokens/colors">
              <Button variant="outlined">View Design Tokens</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
