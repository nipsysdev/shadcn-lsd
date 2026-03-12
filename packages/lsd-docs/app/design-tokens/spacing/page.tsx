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

export default function SpacingPage() {
  return (
    <div className="container mx-auto px-(--lsd-spacing-base) py-(--lsd-spacing-larger) max-w-5xl">
      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h1" className="mb-(--lsd-spacing-base)">
          Spacing
        </Typography>
        <Typography variant="body1" className="text-muted-foreground text-lg">
          Explore the spacing scale used throughout LSD components.
        </Typography>
      </div>

      <div className="space-y-8">
        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Spacing Scale
          </Typography>
          <Typography
            variant="body1"
            className="text-muted-foreground mb-(--lsd-spacing-base)"
          >
            LSD uses a consistent spacing scale based on a 4px base unit. This
            ensures visual harmony across all components.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>0</CardTitle>
                <CardDescription>No spacing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-4 bg-muted rounded mb-(--lsd-spacing-small)"></div>
                <Typography
                  variant="label1"
                  className="text-muted-foreground font-mono"
                >
                  --lsd-spacing-smallest: 0
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Smaller</CardTitle>
                <CardDescription>4px - Extra small spacing</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="h-4 bg-muted rounded mb-(--lsd-spacing-small)"
                  style={{ width: '4px' }}
                ></div>
                <Typography
                  variant="label1"
                  className="text-muted-foreground font-mono"
                >
                  --lsd-spacing-smaller: 4px
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Small</CardTitle>
                <CardDescription>8px - Small spacing</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="h-4 bg-muted rounded mb-(--lsd-spacing-small)"
                  style={{ width: '8px' }}
                ></div>
                <Typography
                  variant="label1"
                  className="text-muted-foreground font-mono"
                >
                  --lsd-spacing-small: 8px
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Medium</CardTitle>
                <CardDescription>16px - Default spacing</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="h-4 bg-muted rounded mb-(--lsd-spacing-small)"
                  style={{ width: '16px' }}
                ></div>
                <Typography
                  variant="label1"
                  className="text-muted-foreground font-mono"
                >
                  --lsd-spacing-base: 16px
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Large</CardTitle>
                <CardDescription>24px - Large spacing</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="h-4 bg-muted rounded mb-(--lsd-spacing-small)"
                  style={{ width: '24px' }}
                ></div>
                <Typography
                  variant="label1"
                  className="text-muted-foreground font-mono"
                >
                  --lsd-spacing-large: 24px
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Larger</CardTitle>
                <CardDescription>32px - Extra large spacing</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="h-4 bg-muted rounded mb-(--lsd-spacing-small)"
                  style={{ width: '32px' }}
                ></div>
                <Typography
                  variant="label1"
                  className="text-muted-foreground font-mono"
                >
                  --lsd-spacing-larger: 32px
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Extra Large</CardTitle>
                <CardDescription>
                  48px - Extra extra large spacing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="h-4 bg-muted rounded mb-(--lsd-spacing-small)"
                  style={{ width: '48px' }}
                ></div>
                <Typography
                  variant="label1"
                  className="text-muted-foreground font-mono"
                >
                  --lsd-spacing-largest: 48px
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2X Large</CardTitle>
                <CardDescription>64px - 2X large spacing</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="h-4 bg-muted rounded mb-(--lsd-spacing-small)"
                  style={{ width: '64px' }}
                ></div>
                <Typography
                  variant="label1"
                  className="text-muted-foreground font-mono"
                >
                  --lsd-spacing-2xl: 64px
                </Typography>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Usage Examples
          </Typography>
          <Typography
            variant="body1"
            className="text-muted-foreground mb-(--lsd-spacing-base)"
          >
            Spacing tokens can be used for margins, padding, gaps, and more.
          </Typography>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Padding</CardTitle>
                <CardDescription>Using spacing for padding</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>
                    <code>{`/* Using CSS variables */
.my-element {
  padding: var(--lsd-spacing-base);
}

/* Using Tailwind classes */
<div class="p-(--lsd-spacing-base)">Padding medium</div>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Margin</CardTitle>
                <CardDescription>Using spacing for margins</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>
                    <code>{`/* Using CSS variables */
.my-element {
  margin: var(--lsd-spacing-large);
}

/* Using Tailwind classes */
<div class="m-(--lsd-spacing-large)">Margin large</div>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gap</CardTitle>
                <CardDescription>
                  Using spacing for flex/grid gaps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>
                    <code>{`/* Using CSS variables */
.my-container {
  gap: var(--lsd-spacing-base);
}

/* Using Tailwind classes */
<div class="flex gap-(--lsd-spacing-base)">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Visual Examples
          </Typography>
          <Typography
            variant="body1"
            className="text-muted-foreground mb-(--lsd-spacing-base)"
          >
            See spacing in action with visual examples.
          </Typography>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Small Spacing (8px)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-(--lsd-spacing-small) items-center">
                  <div className="w-12 h-12 bg-primary rounded"></div>
                  <div className="w-12 h-12 bg-secondary rounded"></div>
                  <div className="w-12 h-12 bg-muted rounded"></div>
                </div>
                <Typography
                  variant="label1"
                  className="text-muted-foreground mt-(--lsd-spacing-base)"
                >
                  gap-(--lsd-spacing-small) (8px) between elements
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Medium Spacing (16px)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-(--lsd-spacing-base) items-center">
                  <div className="w-12 h-12 bg-primary rounded"></div>
                  <div className="w-12 h-12 bg-secondary rounded"></div>
                  <div className="w-12 h-12 bg-muted rounded"></div>
                </div>
                <Typography
                  variant="label1"
                  className="text-muted-foreground mt-(--lsd-spacing-base)"
                >
                  gap-(--lsd-spacing-base) (16px) between elements
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Large Spacing (24px)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-(--lsd-spacing-large) items-center">
                  <div className="w-12 h-12 bg-primary rounded"></div>
                  <div className="w-12 h-12 bg-secondary rounded"></div>
                  <div className="w-12 h-12 bg-muted rounded"></div>
                </div>
                <Typography
                  variant="label1"
                  className="text-muted-foreground mt-(--lsd-spacing-base)"
                >
                  gap-(--lsd-spacing-large) (24px) between elements
                </Typography>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Best Practices
          </Typography>
          <Typography
            variant="body1"
            className="text-muted-foreground mb-(--lsd-spacing-base)"
          >
            Guidelines for using spacing effectively.
          </Typography>

          <div className="space-y-4">
            <Card>
              <CardContent className="pt-(--lsd-spacing-large)">
                <Typography variant="h3" className="mb-(--lsd-spacing-small)">
                  Be Consistent
                </Typography>
                <Typography variant="body1" className="text-muted-foreground">
                  Stick to the spacing scale and avoid arbitrary values. This
                  creates visual harmony and makes your design more
                  maintainable.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-(--lsd-spacing-large)">
                <Typography variant="h3" className="mb-(--lsd-spacing-small)">
                  Use Larger Spacing for Sections
                </Typography>
                <Typography variant="body1" className="text-muted-foreground">
                  Use larger spacing values (large, larger, xl) between major
                  sections, and smaller values (small, medium) between related
                  elements.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-(--lsd-spacing-large)">
                <Typography variant="h3" className="mb-(--lsd-spacing-small)">
                  Consider Content Density
                </Typography>
                <Typography variant="body1" className="text-muted-foreground">
                  Adjust spacing based on content density. Dense content may
                  need less spacing, while sparse content can use more.
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-(--lsd-spacing-large)">
                <Typography variant="h3" className="mb-(--lsd-spacing-small)">
                  Test on Different Screen Sizes
                </Typography>
                <Typography variant="body1" className="text-muted-foreground">
                  Ensure your spacing works well across different screen sizes.
                  You may need to adjust spacing for mobile devices.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Custom Spacing
          </Typography>
          <Typography
            variant="body1"
            className="text-muted-foreground mb-(--lsd-spacing-base)"
          >
            You can override spacing variables to create custom spacing values.
          </Typography>

          <Card>
            <CardContent className="pt-(--lsd-spacing-large)">
              <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                <pre>
                  <code>{`/* Override spacing variables */
:root {
  --lsd-spacing-custom: 12px;
  --lsd-spacing-section: 80px;
}

/* Use custom spacing */
.my-element {
  padding: var(--lsd-spacing-custom);
  margin-bottom: var(--lsd-spacing-section);
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
