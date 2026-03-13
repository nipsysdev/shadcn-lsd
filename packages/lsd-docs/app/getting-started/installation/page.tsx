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
import Link from 'next/link';
import { DocsLayout, PageContent, PageHeader, PageNavigation } from '../../components/docs';

export default function InstallationPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Installation"
        description="Get started with LSD by installing it in your project."
      />

      <PageContent>
        <div className="space-y-8">
          <section>
            <Typography variant="h2" className="mb-(--lsd-spacing-base)">
              Prerequisites
            </Typography>
            <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
              Before installing LSD, make sure you have the following:
            </Typography>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Node.js 18 or higher</li>
              <li>A package manager (npm, pnpm, or yarn)</li>
              <li>A React project with TypeScript</li>
              <li>Tailwind CSS configured</li>
            </ul>
          </section>

          <Separator />

          <section>
            <Typography variant="h2" className="mb-(--lsd-spacing-base)">
              Install the package
            </Typography>
            <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
              Install LSD using your preferred package manager:
            </Typography>

            <Card>
              <CardHeader>
                <CardTitle>npm</CardTitle>
                <CardDescription>Install using npm</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                  <code>npm install @nipsys/shadcn-lsd</code>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-(--lsd-spacing-base)">
              <CardHeader>
                <CardTitle>pnpm</CardTitle>
                <CardDescription>Install using pnpm</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                  <code>pnpm add @nipsys/shadcn-lsd</code>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-(--lsd-spacing-base)">
              <CardHeader>
                <CardTitle>yarn</CardTitle>
                <CardDescription>Install using yarn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                  <code>yarn add @nipsys/shadcn-lsd</code>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          <section>
            <Typography variant="h2" className="mb-(--lsd-spacing-base)">
              Import the CSS
            </Typography>
            <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
              Import the LSD styles in your main CSS file:
            </Typography>

            <Card>
              <CardContent className="pt-(--lsd-spacing-large)">
                <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>
                    <code>{`@import '@nipsys/shadcn-lsd/dist/style.css';`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          <section>
            <Typography variant="h2" className="mb-(--lsd-spacing-base)">
              Configure Tailwind CSS
            </Typography>
            <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
              Add the LSD content path to your Tailwind configuration:
            </Typography>

            <Card>
              <CardContent className="pt-(--lsd-spacing-large)">
                <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>
                    <code>{`// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nipsys/shadcn-lsd/**/*.{js,ts,jsx,tsx}',
  ],
  // ... rest of your config
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
            <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
              Now that you've installed LSD, learn how to use the components:
            </Typography>
            <div className="flex gap-(--lsd-spacing-base)">
              <Link href="/getting-started/usage">
                <Button>Learn Usage</Button>
              </Link>
              <Link href="/getting-started/theming">
                <Button variant="outlined">Explore Theming</Button>
              </Link>
            </div>
          </section>
        </div>
      </PageContent>

      <PageNavigation
        next={{
          title: 'Usage',
          href: '/getting-started/usage',
        }}
      />
    </DocsLayout>
  );
}
