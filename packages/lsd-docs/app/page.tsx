'use client';

import { Button, Typography } from '@nipsys/shadcn-lsd';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-(--lsd-spacing-small) py-(--lsd-spacing-larger) mt-(--lsd-spacing-larger) max-w-5xl">
      <div className="flex flex-col items-center text-center mb-(--lsd-spacing-largest) pb-(--lsd-spacing-large)">
        <Typography variant="h1" className="mb-(--lsd-spacing-largest)">
          shadcn-lsd
        </Typography>

        <Typography
          variant="h3"
          className="text-muted-foreground my-(--lsd-spacing-large) max-w-2xl"
        >
          The Logos Design System (LSD) implemented on top of shadcn-ui
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-largest) max-w-2xl"
        >
          Minimalist, High-contrast components for content-first interfaces
        </Typography>

        <div className="flex gap-(--lsd-spacing-base) mt-(--lsd-spacing-small)">
          <Button asChild>
            <Link href="/getting-started/installation">Get Started</Link>
          </Button>
          <Button asChild variant="outlined">
            <Link href="/components/button">View Components</Link>
          </Button>
        </div>
      </div>

      <div className="my-(--lsd-spacing-largest) pt-(--lsd-spacing-largest)">
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-large) max-w-3xl mx-auto"
        >
          <blockquote className="border-l-2 pl-6 italic">
            LSD is an open-source design system challenging conventional norms in the world of
            digital products and experiences. Rooted in a philosophy that values content over
            excess, we're here to decentralise design and empower the message. Our minimalist
            approach is a rebellion against the cluttered design landscape.
          </blockquote>
        </Typography>
      </div>

      <Button asChild variant="link">
        <Link href="https://guide.logos.co" target="_blank" rel="noopener noreferrer">
          Learn more about the philosophy behind LSD at guide.logos.co
        </Link>
      </Button>
    </div>
  );
}
