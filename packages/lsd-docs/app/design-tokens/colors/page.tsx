'use client';

import { Card, CardContent, Separator, Typography } from '@nipsys/shadcn-lsd';
import { DocsLayout } from '../../components/docs/DocsLayout';
import { PageContent } from '../../components/docs/PageContent';
import { PageHeader } from '../../components/docs/PageHeader';
import { PageNavigation } from '../../components/docs/PageNavigation';

export default function ColorsPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Colors"
        description="Explore the color palette used throughout LSD components."
      />

      <PageContent>
        <div className="space-y-8">
          <section>
            <Typography variant="h2" className="mb-(--lsd-spacing-base)">
              Primary Colors
            </Typography>
            <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
              The primary color is used for main actions and important elements.
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base)">
              <Card>
                <CardContent className="pt-(--lsd-spacing-large)">
                  <div
                    className="h-24 rounded-lg mb-(--lsd-spacing-base)"
                    style={{ backgroundColor: 'hsl(222.2, 47.4%, 11.2%)' }}
                  />
                  <Typography variant="h3" className="mb-(--lsd-spacing-smaller)">
                    Primary
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground">
                    hsl(222.2, 47.4%, 11.2%)
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground font-mono">
                    --lsd-primary
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-(--lsd-spacing-large)">
                  <div
                    className="h-24 rounded-lg mb-(--lsd-spacing-base)"
                    style={{ backgroundColor: 'hsl(210, 40%, 98%)' }}
                  />
                  <Typography variant="h3" className="mb-(--lsd-spacing-smaller)">
                    Primary Foreground
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground">
                    hsl(210, 40%, 98%)
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground font-mono">
                    --lsd-primary-foreground
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section>
            <Typography variant="h2" className="mb-(--lsd-spacing-base)">
              Secondary Colors
            </Typography>
            <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
              Secondary colors are used for less prominent elements.
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base)">
              <Card>
                <CardContent className="pt-(--lsd-spacing-large)">
                  <div
                    className="h-24 rounded-lg mb-(--lsd-spacing-base)"
                    style={{ backgroundColor: 'hsl(210, 40%, 96.1%)' }}
                  />
                  <Typography variant="h3" className="mb-(--lsd-spacing-smaller)">
                    Secondary
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground">
                    hsl(210, 40%, 96.1%)
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground font-mono">
                    --lsd-secondary
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-(--lsd-spacing-large)">
                  <div
                    className="h-24 rounded-lg mb-(--lsd-spacing-base)"
                    style={{ backgroundColor: 'hsl(222.2, 47.4%, 11.2%)' }}
                  />
                  <Typography variant="h3" className="mb-(--lsd-spacing-smaller)">
                    Secondary Foreground
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground">
                    hsl(222.2, 47.4%, 11.2%)
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground font-mono">
                    --lsd-secondary-foreground
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section>
            <Typography variant="h2" className="mb-(--lsd-spacing-base)">
              Background Colors
            </Typography>
            <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
              Background colors define the base of your interface.
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base)">
              <Card>
                <CardContent className="pt-(--lsd-spacing-large)">
                  <div
                    className="h-24 rounded-lg mb-(--lsd-spacing-base) border"
                    style={{ backgroundColor: 'hsl(0, 0%, 100%)' }}
                  />
                  <Typography variant="h3" className="mb-(--lsd-spacing-smaller)">
                    Background
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground">
                    hsl(0, 0%, 100%)
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground font-mono">
                    --lsd-background
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-(--lsd-spacing-large)">
                  <div
                    className="h-24 rounded-lg mb-(--lsd-spacing-base)"
                    style={{ backgroundColor: 'hsl(222.2, 47.4%, 11.2%)' }}
                  />
                  <Typography variant="h3" className="mb-(--lsd-spacing-smaller)">
                    Foreground
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground">
                    hsl(222.2, 47.4%, 11.2%)
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground font-mono">
                    --lsd-foreground
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section>
            <Typography variant="h2" className="mb-(--lsd-spacing-base)">
              Card Colors
            </Typography>
            <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
              Card colors are used for card components and containers.
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base)">
              <Card>
                <CardContent className="pt-(--lsd-spacing-large)">
                  <div
                    className="h-24 rounded-lg mb-(--lsd-spacing-base) border"
                    style={{ backgroundColor: 'hsl(0, 0%, 100%)' }}
                  />
                  <Typography variant="h3" className="mb-(--lsd-spacing-smaller)">
                    Card
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground">
                    hsl(0, 0%, 100%)
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground font-mono">
                    --lsd-card
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-(--lsd-spacing-large)">
                  <div
                    className="h-24 rounded-lg mb-(--lsd-spacing-base)"
                    style={{ backgroundColor: 'hsl(222.2, 47.4%, 11.2%)' }}
                  />
                  <Typography variant="h3" className="mb-(--lsd-spacing-smaller)">
                    Card Foreground
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground">
                    hsl(222.2, 47.4%, 11.2%)
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground font-mono">
                    --lsd-card-foreground
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section>
            <Typography variant="h2" className="mb-(--lsd-spacing-base)">
              Border & Input Colors
            </Typography>
            <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
              Border and input colors for form elements and dividers.
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base)">
              <Card>
                <CardContent className="pt-(--lsd-spacing-large)">
                  <div
                    className="h-24 rounded-lg mb-(--lsd-spacing-base) border"
                    style={{ backgroundColor: 'hsl(214.3, 31.8%, 91.4%)' }}
                  />
                  <Typography variant="h3" className="mb-(--lsd-spacing-smaller)">
                    Border
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground">
                    hsl(214.3, 31.8%, 91.4%)
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground font-mono">
                    --lsd-border
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-(--lsd-spacing-large)">
                  <div
                    className="h-24 rounded-lg mb-(--lsd-spacing-base) border"
                    style={{ backgroundColor: 'hsl(214.3, 31.8%, 91.4%)' }}
                  />
                  <Typography variant="h3" className="mb-(--lsd-spacing-smaller)">
                    Input
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground">
                    hsl(214.3, 31.8%, 91.4%)
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground font-mono">
                    --lsd-input
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section>
            <Typography variant="h2" className="mb-(--lsd-spacing-base)">
              Semantic Colors
            </Typography>
            <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
              Semantic colors for success, warning, and destructive actions.
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base)">
              <Card>
                <CardContent className="pt-(--lsd-spacing-large)">
                  <div
                    className="h-24 rounded-lg mb-(--lsd-spacing-base)"
                    style={{ backgroundColor: 'hsl(142.1, 76.2%, 36.3%)' }}
                  />
                  <Typography variant="h3" className="mb-(--lsd-spacing-smaller)">
                    Success
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground">
                    hsl(142.1, 76.2%, 36.3%)
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground font-mono">
                    --lsd-success
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-(--lsd-spacing-large)">
                  <div
                    className="h-24 rounded-lg mb-(--lsd-spacing-base)"
                    style={{ backgroundColor: 'hsl(0, 84.2%, 60.2%)' }}
                  />
                  <Typography variant="h3" className="mb-(--lsd-spacing-smaller)">
                    Destructive
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground">
                    hsl(0, 84.2%, 60.2%)
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground font-mono">
                    --lsd-destructive
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-(--lsd-spacing-large)">
                  <div
                    className="h-24 rounded-lg mb-(--lsd-spacing-base)"
                    style={{ backgroundColor: 'hsl(47.9, 95.8%, 53.1%)' }}
                  />
                  <Typography variant="h3" className="mb-(--lsd-spacing-smaller)">
                    Warning
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground">
                    hsl(47.9, 95.8%, 53.1%)
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground font-mono">
                    --lsd-warning
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section>
            <Typography variant="h2" className="mb-(--lsd-spacing-base)">
              Muted Colors
            </Typography>
            <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
              Muted colors for subtle elements and secondary text.
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base)">
              <Card>
                <CardContent className="pt-(--lsd-spacing-large)">
                  <div
                    className="h-24 rounded-lg mb-(--lsd-spacing-base)"
                    style={{ backgroundColor: 'hsl(210, 40%, 96.1%)' }}
                  />
                  <Typography variant="h3" className="mb-(--lsd-spacing-smaller)">
                    Muted
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground">
                    hsl(210, 40%, 96.1%)
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground font-mono">
                    --lsd-muted
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-(--lsd-spacing-large)">
                  <div
                    className="h-24 rounded-lg mb-(--lsd-spacing-base)"
                    style={{ backgroundColor: 'hsl(215.4, 16.3%, 46.9%)' }}
                  />
                  <Typography variant="h3" className="mb-(--lsd-spacing-smaller)">
                    Muted Foreground
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground">
                    hsl(215.4, 16.3%, 46.9%)
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground font-mono">
                    --lsd-muted-foreground
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section>
            <Typography variant="h2" className="mb-(--lsd-spacing-base)">
              Accent Colors
            </Typography>
            <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
              Accent colors for hover states and interactive elements.
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--lsd-spacing-base)">
              <Card>
                <CardContent className="pt-(--lsd-spacing-large)">
                  <div
                    className="h-24 rounded-lg mb-(--lsd-spacing-base)"
                    style={{ backgroundColor: 'hsl(210, 40%, 96.1%)' }}
                  />
                  <Typography variant="h3" className="mb-(--lsd-spacing-smaller)">
                    Accent
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground">
                    hsl(210, 40%, 96.1%)
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground font-mono">
                    --lsd-accent
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-(--lsd-spacing-large)">
                  <div
                    className="h-24 rounded-lg mb-(--lsd-spacing-base)"
                    style={{ backgroundColor: 'hsl(222.2, 47.4%, 11.2%)' }}
                  />
                  <Typography variant="h3" className="mb-(--lsd-spacing-smaller)">
                    Accent Foreground
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground">
                    hsl(222.2, 47.4%, 11.2%)
                  </Typography>
                  <Typography variant="label1" className="text-muted-foreground font-mono">
                    --lsd-accent-foreground
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section>
            <Typography variant="h2" className="mb-(--lsd-spacing-base)">
              Using Colors
            </Typography>
            <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
              You can use these colors in your custom CSS or override them:
            </Typography>

            <Card>
              <CardContent className="pt-(--lsd-spacing-large)">
                <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>
                    <code>{`/* Override primary color */
:root {
  --lsd-primary: 270 60% 50%;
}

/* Use in custom CSS */
.my-element {
  background-color: hsl(var(--lsd-primary));
  color: hsl(var(--lsd-primary-foreground));
}`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </PageContent>

      <PageNavigation
        previous={{
          title: 'Typography',
          href: '/design-tokens/typography',
        }}
        next={{
          title: 'Spacing',
          href: '/design-tokens/spacing',
        }}
      />
    </DocsLayout>
  );
}
