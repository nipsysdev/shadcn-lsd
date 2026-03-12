'use client';

import {
  Button,
  ButtonGroupText,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ButtonGroup as LSDButtonGroup,
  Separator,
  Typography,
} from '@nipsys/shadcn-lsd';
import { CodeExample } from '../../components/docs/CodeExample';
import { ComponentPreview } from '../../components/docs/ComponentPreview';

export default function ButtonGroupPage() {
  return (
    <div className="container mx-auto px-(--lsd-spacing-base) py-(--lsd-spacing-larger) max-w-5xl">
      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h1" className="mb-(--lsd-spacing-base)">
          ButtonGroup
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground text-lg mb-(--lsd-spacing-base)"
        >
          A button group component that groups related buttons together with
          proper visual separation. Button groups help organize related actions
          and improve the user interface by visually connecting related buttons.
        </Typography>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Installation
        </Typography>
        <CodeExample
          title="Install the component"
          code={`pnpm add @nipsys/shadcn-lsd`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Import
        </Typography>
        <CodeExample
          title="Import the component"
          code={`import { ButtonGroup, ButtonGroupText } from '@nipsys/shadcn-lsd';`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Usage
        </Typography>
        <CodeExample
          title="Basic button group"
          code={`<ButtonGroup>
  <Button variant="filled">Save</Button>
  <Button variant="filled">Save As</Button>
</ButtonGroup>`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Basic Button Group
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Group related buttons together with proper visual separation.
        </Typography>

        <ComponentPreview
          title="Basic button group"
          code={`<ButtonGroup>
  <Button variant="filled">Save</Button>
  <Button variant="filled">Save As</Button>
</ButtonGroup>`}
        >
          <LSDButtonGroup>
            <Button variant="filled">Save</Button>
            <Button variant="filled">Save As</Button>
          </LSDButtonGroup>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          With Text Label
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            ButtonGroupText
          </code>{' '}
          to add a text label between buttons, useful for pagination or
          displaying additional information.
        </Typography>

        <ComponentPreview
          title="Button group with text label"
          code={`<ButtonGroup>
  <Button variant="outlined">Previous</Button>
  <ButtonGroupText>Page 1 of 5</ButtonGroupText>
  <Button variant="outlined">Next</Button>
</ButtonGroup>`}
        >
          <LSDButtonGroup>
            <Button variant="outlined">Previous</Button>
            <ButtonGroupText>Page 1 of 5</ButtonGroupText>
            <Button variant="outlined">Next</Button>
          </LSDButtonGroup>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Vertical Orientation
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            orientation
          </code>{' '}
          prop to create a vertical button group.
        </Typography>

        <ComponentPreview
          title="Vertical button group"
          code={`<ButtonGroup orientation="vertical">
  <Button variant="outlined">Profile</Button>
  <Button variant="outlined">Settings</Button>
  <Button variant="outlined">Logout</Button>
</ButtonGroup>`}
        >
          <LSDButtonGroup orientation="vertical">
            <Button variant="outlined">Profile</Button>
            <Button variant="outlined">Settings</Button>
            <Button variant="outlined">Logout</Button>
          </LSDButtonGroup>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Different Button Variants
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Button groups work with all button variants, allowing you to create
          different visual styles.
        </Typography>

        <ComponentPreview
          title="Button group with different variants"
          code={`<div className="space-y-4">
  <ButtonGroup>
    <Button variant="filled">Save</Button>
    <Button variant="filled">Save As</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button variant="outlined">Cancel</Button>
    <Button variant="outlined">Reset</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button variant="ghost">Edit</Button>
    <Button variant="ghost">Delete</Button>
  </ButtonGroup>
</div>`}
        >
          <div className="space-y-4">
            <LSDButtonGroup>
              <Button variant="filled">Save</Button>
              <Button variant="filled">Save As</Button>
            </LSDButtonGroup>
            <LSDButtonGroup>
              <Button variant="outlined">Cancel</Button>
              <Button variant="outlined">Reset</Button>
            </LSDButtonGroup>
            <LSDButtonGroup>
              <Button variant="ghost">Edit</Button>
              <Button variant="ghost">Delete</Button>
            </LSDButtonGroup>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          API Reference
        </Typography>
        <Card>
          <CardContent className="p-(--lsd-spacing-large)">
            <Typography variant="h3" className="mb-(--lsd-spacing-base)">
              ButtonGroup Props
            </Typography>
            <div className="space-y-4">
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  orientation
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "horizontal" | "vertical"
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "horizontal"
                  </code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  className
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    string
                  </code>
                  <br />
                  Additional CSS classes to apply to the button group
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-(--lsd-spacing-base)">
          <CardContent className="p-(--lsd-spacing-large)">
            <Typography variant="h3" className="mb-(--lsd-spacing-base)">
              ButtonGroupText Props
            </Typography>
            <div className="space-y-4">
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  children
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    ReactNode
                  </code>
                  <br />
                  The text content to display between buttons
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  className
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    string
                  </code>
                  <br />
                  Additional CSS classes to apply to the text element
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Accessibility
        </Typography>
        <Typography variant="body1" className="text-muted-foreground">
          Button groups follow WAI-ARIA guidelines and are fully accessible. The
          component uses proper role attributes and keyboard navigation support.
          When using button groups, ensure that the buttons have clear,
          descriptive labels that indicate their purpose.
        </Typography>
      </div>
    </div>
  );
}
