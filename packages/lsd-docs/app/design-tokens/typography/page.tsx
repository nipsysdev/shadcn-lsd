'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Typography,
} from '@nipsys/shadcn-lsd';
import { CodeExample } from '@/components/docs/CodeExample';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { PageContent } from '@/components/docs/PageContent';
import { PageHeader } from '@/components/docs/PageHeader';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { PageSection } from '@/components/docs/PageSection';

export default function TypographyPage() {
  return (
    <DocsLayout>
      <PageHeader
        title="Typography"
        description="Explore the typography scale and font families used throughout LSD."
      />

      <PageContent>
        <PageSection title="About Typography">
          <Typography variant="body1">
            Typography is how we speak to users. LSD's system prioritises readability,
            accessibility, and the hierarchy of ideas over trends.
          </Typography>

          <Typography variant="body1" className="text-muted-foreground mt-(--lsd-spacing-base)">
            The content comes first — everything else serves it. Our scale is designed for
            real‑world reading across devices and conditions.
          </Typography>
        </PageSection>

        <PageSection title="Font Families">
          <Typography variant="body1">
            LSD offers three font family stacks for different use cases. Choose what serves your
            content and context.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardContent className="flex items-end gap-x-(--lsd-spacing-small)">
                <Typography variant="h3" className="font-mono">
                  Monospace
                </Typography>
                <Typography variant="subtitle3">(default)</Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h3" className="font-sans">
                  Sans Serif
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h3" className="font-serif">
                  Serif
                </Typography>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <Typography variant="body1">
          Font families can be controlled by adding font classes to any element.
        </Typography>

        <PageSection title="Setting Font Family" isChild>
          <Typography variant="body1">
            You can set the font family directly in your HTML by adding font classes to any element:
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`<!-- Set font family on HTML element -->
<html class="font-serif">
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`}
              />
            </CardContent>
          </Card>

          <Typography variant="body1" className="block mt-(--lsd-spacing-base)">
            Font classes can be applied to any element in your application, enabling mixing
            different fonts together.
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`<!-- Parent element with serif font -->
<div class="font-serif">
  <!-- Child elements inherit the parent's font -->
  <p>This text uses serif font</p>

  <!-- Override to sans serif -->
  <div class="font-sans">
    <p>This text uses sans serif font</p>
  </div>

  <!-- Override to monospace -->
  <div class="font-mono">
    <p>This text uses monospace font</p>
  </div>
</div>`}
              />
            </CardContent>
          </Card>
        </PageSection>

        <PageSection title="Typography Scale">
          <Typography variant="body1">
            The Typography component provides a consistent scale for establishing hierarchy and
            guiding the reader through content.
          </Typography>

          <div className="space-y-(--lsd-spacing-base) mt-(--lsd-spacing-base)">
            <Card>
              <CardHeader>
                <CardTitle>Display</CardTitle>
                <CardDescription>Large display text for hero sections</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="display1" className="mb-(--lsd-spacing-small)">
                  Display Text
                </Typography>
                <Accordion type="single" collapsible>
                  <AccordionItem value="code">
                    <AccordionTrigger>View code</AccordionTrigger>
                    <AccordionContent>
                      <CodeExample
                        code={`<Typography variant="display1">Display Text</Typography>`}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
                <Accordion type="single" collapsible>
                  <AccordionItem value="code">
                    <AccordionTrigger>View code</AccordionTrigger>
                    <AccordionContent>
                      <CodeExample code={`<Typography variant="h1">Heading 1</Typography>`} />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
                <Accordion type="single" collapsible>
                  <AccordionItem value="code">
                    <AccordionTrigger>View code</AccordionTrigger>
                    <AccordionContent>
                      <CodeExample code={`<Typography variant="h2">Heading 2</Typography>`} />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
                <Accordion type="single" collapsible>
                  <AccordionItem value="code">
                    <AccordionTrigger>View code</AccordionTrigger>
                    <AccordionContent>
                      <CodeExample code={`<Typography variant="h3">Heading 3</Typography>`} />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
                <Accordion type="single" collapsible>
                  <AccordionItem value="code">
                    <AccordionTrigger>View code</AccordionTrigger>
                    <AccordionContent>
                      <CodeExample code={`<Typography variant="h4">Heading 4</Typography>`} />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
                <Accordion type="single" collapsible>
                  <AccordionItem value="code">
                    <AccordionTrigger>View code</AccordionTrigger>
                    <AccordionContent>
                      <CodeExample code={`<Typography variant="body1">Body text</Typography>`} />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
                <Accordion type="single" collapsible>
                  <AccordionItem value="code">
                    <AccordionTrigger>View code</AccordionTrigger>
                    <AccordionContent>
                      <CodeExample code={`<Typography variant="label1">Label text</Typography>`} />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        <PageSection title="Using Typography">
          <Typography variant="body1">
            Import and use the Typography component to apply consistent typography across your
            application:
          </Typography>

          <Card className="mt-(--lsd-spacing-base)">
            <CardContent>
              <CodeExample
                code={`import { Typography } from '@nipsys/shadcn-lsd';

function MyComponent() {
  return (
    <div>
      <Typography variant="h1">Welcome</Typography>
      <Typography variant="body1">
        This is body text with consistent styling.
      </Typography>
      <Typography variant="label1">
        Secondary information
      </Typography>
    </div>
  );
}`}
              />
            </CardContent>
          </Card>
        </PageSection>
      </PageContent>

      <PageNavigation
        previous={{
          title: 'Colours',
          href: '/design-tokens/colours',
        }}
        next={{
          title: 'Spacing',
          href: '/design-tokens/spacing',
        }}
      />
    </DocsLayout>
  );
}
