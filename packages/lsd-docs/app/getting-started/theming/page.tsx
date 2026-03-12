'use client';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
  Typography,
} from '@nipsys/shadcn-lsd';
import {
  DropIcon,
  MoonIcon,
  PaletteIcon,
  SunIcon,
} from '@phosphor-icons/react';
import Link from 'next/link';

export default function ThemingPage() {
  return (
    <div className="container mx-auto px-(--lsd-spacing-base) py-(--lsd-spacing-larger) max-w-4xl">
      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h1" className="mb-(--lsd-spacing-base)">
          Theming
        </Typography>
        <Typography variant="body1" className="text-muted-foreground text-lg">
          Customize the look and feel of LSD components with themes.
        </Typography>
      </div>

      <div className="space-y-8">
        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Available Themes
          </Typography>
          <Typography
            variant="body1"
            className="text-muted-foreground mb-(--lsd-spacing-base)"
          >
            LSD comes with three built-in themes:
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-(--lsd-spacing-small)">
                    <SunIcon className="h-5 w-5" weight="duotone" />
                    Light
                  </div>
                </CardTitle>
                <CardDescription>Clean and bright</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="text-muted-foreground">
                  The default light theme with high contrast and readability.
                </Typography>
              </CardContent>
            </Card>

            <Card className="dark">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-(--lsd-spacing-small)">
                    <MoonIcon className="h-5 w-5" weight="duotone" />
                    Dark
                  </div>
                </CardTitle>
                <CardDescription>Easy on the eyes</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="text-muted-foreground">
                  A dark theme perfect for low-light environments.
                </Typography>
              </CardContent>
            </Card>

            <Card data-theme="teal">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-(--lsd-spacing-small)">
                    <DropIcon className="h-5 w-5" weight="duotone" />
                    Teal
                  </div>
                </CardTitle>
                <CardDescription>Modern and fresh</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body2" className="text-muted-foreground">
                  A teal-themed variant with a unique color palette.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Theme Switching
          </Typography>
          <Typography
            variant="body1"
            className="text-muted-foreground mb-(--lsd-spacing-base)"
          >
            LSD themes are controlled by adding CSS classes to your root
            element. Toggle between light and dark mode by adding or removing
            the `dark` class:
          </Typography>

          <Card>
            <CardContent className="pt-(--lsd-spacing-large)">
              <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                <pre>
                  <code>{`// Toggle dark mode
document.documentElement.classList.toggle('dark');

// Set specific theme
document.documentElement.setAttribute('data-theme', 'teal');`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            CSS Variables
          </Typography>
          <Typography
            variant="body1"
            className="text-muted-foreground mb-(--lsd-spacing-base)"
          >
            LSD uses CSS variables for theming. You can customize these
            variables to create your own theme:
          </Typography>

          <Card>
            <CardContent className="pt-(--lsd-spacing-large)">
              <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                <pre>
                  <code>{`:root {
  /* Primary colors */
  --lsd-primary: 222.2 47.4% 11.2%;
  --lsd-primary-foreground: 210 40% 98%;

  /* Secondary colors */
  --lsd-secondary: 210 40% 96.1%;
  --lsd-secondary-foreground: 222.2 47.4% 11.2%;

  /* Background colors */
  --lsd-background: 0 0% 100%;
  --lsd-foreground: 222.2 47.4% 11.2%;

  /* Card colors */
  --lsd-card: 0 0% 100%;
  --lsd-card-foreground: 222.2 47.4% 11.2%;

  /* Border colors */
  --lsd-border: 214.3 31.8% 91.4%;
  --lsd-input: 214.3 31.8% 91.4%;

  /* Radius */
  --lsd-radius: 0.5rem;
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Dark Theme Variables
          </Typography>
          <Typography
            variant="body1"
            className="text-muted-foreground mb-(--lsd-spacing-base)"
          >
            Override variables for dark mode:
          </Typography>

          <Card>
            <CardContent className="pt-(--lsd-spacing-large)">
              <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                <pre>
                  <code>{`.dark {
  --lsd-primary: 210 40% 98%;
  --lsd-primary-foreground: 222.2 47.4% 11.2%;

  --lsd-secondary: 217.2 32.6% 17.5%;
  --lsd-secondary-foreground: 210 40% 98%;

  --lsd-background: 222.2 84% 4.9%;
  --lsd-foreground: 210 40% 98%;

  --lsd-card: 222.2 84% 4.9%;
  --lsd-card-foreground: 210 40% 98%;

  --lsd-border: 217.2 32.6% 17.5%;
  --lsd-input: 217.2 32.6% 17.5%;
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Custom Themes
          </Typography>
          <Typography
            variant="body1"
            className="text-muted-foreground mb-(--lsd-spacing-base)"
          >
            Create your own theme by defining CSS variables:
          </Typography>

          <Card>
            <CardContent className="pt-(--lsd-spacing-large)">
              <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                <pre>
                  <code>{`/* Custom purple theme */
[data-theme="purple"] {
  --lsd-primary: 270 60% 50%;
  --lsd-primary-foreground: 0 0% 100%;

  --lsd-secondary: 270 30% 90%;
  --lsd-secondary-foreground: 270 60% 20%;

  --lsd-background: 0 0% 100%;
  --lsd-foreground: 270 60% 20%;
}`}</code>
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
          <Typography
            variant="body1"
            className="text-muted-foreground mb-(--lsd-spacing-base)"
          >
            Explore the design tokens to understand all available variables:
          </Typography>
          <div className="flex gap-(--lsd-spacing-base)">
            <Link href="/design-tokens/colors">
              <Button>
                Explore Colors
                <PaletteIcon
                  className="ml-(--lsd-spacing-small) h-4 w-4"
                  weight="duotone"
                />
              </Button>
            </Link>
            <Link href="/design-tokens/typography">
              <Button variant="outlined">View Typography</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
