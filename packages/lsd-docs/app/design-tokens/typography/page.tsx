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

export default function TypographyPage() {
  return (
    <div className="container mx-auto px-(--lsd-spacing-base) py-(--lsd-spacing-larger) max-w-5xl">
      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h1" className="mb-(--lsd-spacing-base)">
          Typography
        </Typography>
        <Typography variant="body1" className="text-muted-foreground text-lg">
          Explore the typography scale and font families used throughout LSD.
        </Typography>
      </div>

      <div className="space-y-8">
        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Font Families
          </Typography>
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            LSD uses a carefully selected font family stack for optimal readability.
          </Typography>

          <Card>
            <CardContent className="pt-(--lsd-spacing-large)">
              <div className="space-y-4">
                <div>
                  <Typography variant="h3" className="mb-(--lsd-spacing-small)">
                    Sans Serif
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-muted-foreground mb-(--lsd-spacing-small)"
                  >
                    The default font family for most text elements.
                  </Typography>
                  <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>
                      <code>{`font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <Typography variant="h3" className="mb-(--lsd-spacing-small)">
                    Monospace
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-muted-foreground mb-(--lsd-spacing-small)"
                  >
                    Used for code blocks and technical content.
                  </Typography>
                  <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>
                      <code>{`font-family: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Typography Scale
          </Typography>
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            The Typography component provides a consistent scale for text elements.
          </Typography>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Display</CardTitle>
                <CardDescription>Large display text for hero sections</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="display1" className="mb-(--lsd-spacing-small)">
                  Display Text
                </Typography>
                <Typography variant="label1" className="text-muted-foreground font-mono">
                  variant="display1"
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Heading 1</CardTitle>
                <CardDescription>Main page heading</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="h1" className="mb-(--lsd-spacing-small)">
                  Heading 1
                </Typography>
                <Typography variant="label1" className="text-muted-foreground font-mono">
                  variant="h1"
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Heading 2</CardTitle>
                <CardDescription>Section heading</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="h2" className="mb-(--lsd-spacing-small)">
                  Heading 2
                </Typography>
                <Typography variant="label1" className="text-muted-foreground font-mono">
                  variant="h2"
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Heading 3</CardTitle>
                <CardDescription>Subsection heading</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="h3" className="mb-(--lsd-spacing-small)">
                  Heading 3
                </Typography>
                <Typography variant="label1" className="text-muted-foreground font-mono">
                  variant="h3"
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Heading 4</CardTitle>
                <CardDescription>Minor heading</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="h4" className="mb-(--lsd-spacing-small)">
                  Heading 4
                </Typography>
                <Typography variant="label1" className="text-muted-foreground font-mono">
                  variant="h4"
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Body</CardTitle>
                <CardDescription>Standard paragraph text</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body1" className="mb-(--lsd-spacing-small)">
                  Body text is used for most content. It provides excellent readability and is the
                  default choice for paragraphs and longer text blocks.
                </Typography>
                <Typography variant="label1" className="text-muted-foreground font-mono">
                  variant="body1"
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Label</CardTitle>
                <CardDescription>Secondary text and labels</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="label1" className="mb-(--lsd-spacing-small)">
                  Label text is used for secondary information, captions, and labels.
                </Typography>
                <Typography variant="label1" className="text-muted-foreground font-mono">
                  variant="label1"
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monospace</CardTitle>
                <CardDescription>Code and technical content</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="body1" className="font-mono mb-(--lsd-spacing-small)">
                  const example = "monospace text";
                </Typography>
                <Typography variant="label1" className="text-muted-foreground font-mono">
                  className="font-mono"
                </Typography>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Font Weights
          </Typography>
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Available font weights for text elements.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
            <Card>
              <CardContent className="pt-(--lsd-spacing-large)">
                <Typography variant="body1" className="font-light mb-(--lsd-spacing-small)">
                  Light (300)
                </Typography>
                <Typography variant="label1" className="text-muted-foreground font-mono">
                  font-light
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-(--lsd-spacing-large)">
                <Typography variant="body1" className="font-normal mb-(--lsd-spacing-small)">
                  Normal (400)
                </Typography>
                <Typography variant="label1" className="text-muted-foreground font-mono">
                  font-normal
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-(--lsd-spacing-large)">
                <Typography variant="body1" className="font-medium mb-(--lsd-spacing-small)">
                  Medium (500)
                </Typography>
                <Typography variant="label1" className="text-muted-foreground font-mono">
                  font-medium
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-(--lsd-spacing-large)">
                <Typography variant="body1" className="font-semibold mb-(--lsd-spacing-small)">
                  Semibold (600)
                </Typography>
                <Typography variant="label1" className="text-muted-foreground font-mono">
                  font-semibold
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-(--lsd-spacing-large)">
                <Typography variant="body1" className="font-bold mb-(--lsd-spacing-small)">
                  Bold (700)
                </Typography>
                <Typography variant="label1" className="text-muted-foreground font-mono">
                  font-bold
                </Typography>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Text Styles
          </Typography>
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Common text styling utilities.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-(--lsd-spacing-base)">
            <Card>
              <CardContent className="pt-(--lsd-spacing-large)">
                <Typography variant="body1" className="underline mb-(--lsd-spacing-small)">
                  Underlined Text
                </Typography>
                <Typography variant="label1" className="text-muted-foreground font-mono">
                  underline
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-(--lsd-spacing-large)">
                <Typography variant="body1" className="line-through mb-(--lsd-spacing-small)">
                  Strikethrough Text
                </Typography>
                <Typography variant="label1" className="text-muted-foreground font-mono">
                  line-through
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-(--lsd-spacing-large)">
                <Typography variant="body1" className="italic mb-(--lsd-spacing-small)">
                  Italic Text
                </Typography>
                <Typography variant="label1" className="text-muted-foreground font-mono">
                  italic
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-(--lsd-spacing-large)">
                <Typography variant="body1" className="uppercase mb-(--lsd-spacing-small)">
                  Uppercase Text
                </Typography>
                <Typography variant="label1" className="text-muted-foreground font-mono">
                  uppercase
                </Typography>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        <section>
          <Typography variant="h2" className="mb-(--lsd-spacing-base)">
            Using Typography
          </Typography>
          <Typography variant="body1" className="text-muted-foreground mb-(--lsd-spacing-base)">
            Import and use the Typography component in your React application:
          </Typography>

          <Card>
            <CardContent className="pt-(--lsd-spacing-large)">
              <div className="bg-muted p-(--lsd-spacing-base) rounded-lg font-mono text-sm overflow-x-auto">
                <pre>
                  <code>{`import { Typography } from '@nipsys/shadcn-lsd';

function MyComponent() {
  return (
    <div>
      <Typography variant="h1">Welcome</Typography>
      <Typography variant="body1">
        This is body text with consistent styling.
      </Typography>
      <Typography variant="label1" className="text-muted-foreground">
        Secondary information
      </Typography>
    </div>
  );
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
