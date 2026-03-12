'use client';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Typography,
} from '@nipsys/shadcn-lsd';
import {
  ArrowRightIcon,
  BookIcon,
  LightningIcon,
  PaletteIcon,
} from '@phosphor-icons/react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-(--lsd-spacing-small) py-(--lsd-spacing-larger) max-w-5xl">
      <div className="flex flex-col items-center text-center mb-(--lsd-spacing-largest)">
        <Typography variant="h1" className="mb-(--lsd-spacing-base)">
          Welcome to shadcn-lsd
        </Typography>
        <Typography
          variant="h3"
          className="text-muted-foreground mb-(--lsd-spacing-large) max-w-2xl"
        >
          A beautiful, accessible, and customizable component library built with
          Radix UI and Tailwind CSS
        </Typography>
        <div className="flex gap-(--lsd-spacing-base)">
          <Link href="/getting-started/installation">
            <Button>
              <BookIcon
                className="mr-(--lsd-spacing-small) h-4 w-4"
                weight="duotone"
              />
              Get Started
            </Button>
          </Link>
          <Link href="/components">
            <Button variant="outlined">View Components</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-(--lsd-spacing-large) mb-(--lsd-spacing-largest)">
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-(--lsd-spacing-small)">
                <LightningIcon className="h-5 w-5" weight="duotone" />
                Easy to Use
              </div>
            </CardTitle>
            <CardDescription>
              Get started quickly with simple installation and intuitive API
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Typography variant="body1" className="text-muted-foreground">
              Install with your favorite package manager and start building
              beautiful interfaces in minutes.
            </Typography>
          </CardContent>
          <CardFooter>
            <Link href="/getting-started/installation">
              <Button variant="ghost">
                Learn More
                <ArrowRightIcon
                  className="ml-(--lsd-spacing-small) h-4 w-4"
                  weight="duotone"
                />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-(--lsd-spacing-small)">
                <PaletteIcon className="h-5 w-5" weight="duotone" />
                Customizable
              </div>
            </CardTitle>
            <CardDescription>
              Built with design tokens for easy theming and customization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Typography variant="body1" className="text-muted-foreground">
              Use our design tokens or create your own theme with CSS variables.
            </Typography>
          </CardContent>
          <CardFooter>
            <Link href="/getting-started/theming">
              <Button variant="ghost">
                Learn More
                <ArrowRightIcon
                  className="ml-(--lsd-spacing-small) h-4 w-4"
                  weight="duotone"
                />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-(--lsd-spacing-small)">
                <BookIcon className="h-5 w-5" weight="duotone" />
                Accessible
              </div>
            </CardTitle>
            <CardDescription>
              Built on Radix UI primitives for full accessibility support
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Typography variant="body1" className="text-muted-foreground">
              All components follow WAI-ARIA guidelines and work with screen
              readers.
            </Typography>
          </CardContent>
          <CardFooter>
            <Link href="/design-tokens/colors">
              <Button variant="ghost">
                Learn More
                <ArrowRightIcon
                  className="ml-(--lsd-spacing-small) h-4 w-4"
                  weight="duotone"
                />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="text-center">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Ready to build?
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-large)"
        >
          Explore our components and start creating beautiful interfaces
        </Typography>
        <Link href="/getting-started/installation">
          <Button size="lg">
            Get Started Now
            <ArrowRightIcon
              className="ml-(--lsd-spacing-small) h-4 w-4"
              weight="duotone"
            />
          </Button>
        </Link>
      </div>
    </div>
  );
}
