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
          Design systems for a free society
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-largest) max-w-2xl"
        >
          The Logos Design System — components built for clarity, accessibility, and real‑world use.
        </Typography>

        <div className="flex gap-(--lsd-spacing-base) mt-(--lsd-spacing-small)">
          <Button asChild>
            <Link href="/getting-started/installation">Start Building</Link>
          </Button>
          <Button asChild variant="outlined">
            <Link href="/components/button">Explore Components</Link>
          </Button>
        </div>
      </div>

      <div className="my-(--lsd-spacing-largest) pt-(--lsd-spacing-largest)">
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-large) max-w-3xl mx-auto"
        >
          <blockquote className="border-l-2 pl-6 italic">
            Conventional design has lost its way: chrome over content, spectacle over substance.
            <br />
            LSD exists because design should serve the mission — never distract from it. We build
            for clarity, accessibility, and resilience. The message matters more than the medium.
          </blockquote>
        </Typography>
      </div>

      <Button asChild variant="link">
        <Link href="https://logos.co" target="_blank" rel="noopener noreferrer">
          Learn more about the philosophy behind LSD at logos.co
        </Link>
      </Button>
    </div>
  );
}
