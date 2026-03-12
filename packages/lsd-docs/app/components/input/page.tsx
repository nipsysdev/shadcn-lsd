'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input as LSDInput,
  Separator,
  Typography,
} from '@nipsys/shadcn-lsd';
import { CodeExample } from '../../components/docs/CodeExample';
import { ComponentPreview } from '../../components/docs/ComponentPreview';

export default function InputPage() {
  return (
    <div className="container mx-auto px-(--lsd-spacing-base) py-(--lsd-spacing-larger) max-w-5xl">
      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h1" className="mb-(--lsd-spacing-base)">
          Input
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground text-lg mb-(--lsd-spacing-base)"
        >
          An input component that allows users to enter text data with labels
          and supporting text.
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
          code={`import { Input } from '@nipsys/shadcn-lsd';`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Usage
        </Typography>
        <CodeExample
          title="Basic input"
          code={`<Input placeholder="Enter your text" />`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Variants
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            variant
          </code>{' '}
          prop to change the input style.
        </Typography>

        <ComponentPreview
          title="Input variants"
          code={`<div className="space-y-6">
  <div>
    <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">Underlined (Default)</h3>
    <Input placeholder="Enter your text" />
  </div>
  <div>
    <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">Outlined</h3>
    <Input variant="outlined" placeholder="Enter your text" />
  </div>
</div>`}
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">
                Underlined (Default)
              </h3>
              <LSDInput placeholder="Enter your text" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">
                Outlined
              </h3>
              <LSDInput variant="outlined" placeholder="Enter your text" />
            </div>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Sizes
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            size
          </code>{' '}
          prop to change the input size.
        </Typography>

        <ComponentPreview
          title="Input sizes"
          code={`<div className="space-y-6">
  <div>
    <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">Large</h3>
    <Input size="lg" placeholder="Large input" />
  </div>
  <div>
    <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">Medium (Default)</h3>
    <Input size="md" placeholder="Medium input" />
  </div>
  <div>
    <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">Small</h3>
    <Input size="sm" placeholder="Small input" />
  </div>
</div>`}
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">
                Large
              </h3>
              <LSDInput size="lg" placeholder="Large input" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">
                Medium (Default)
              </h3>
              <LSDInput size="md" placeholder="Medium input" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">
                Small
              </h3>
              <LSDInput size="sm" placeholder="Small input" />
            </div>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          With Labels
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            label
          </code>{' '}
          prop to add a label to the input.
        </Typography>

        <ComponentPreview
          title="Input with labels"
          code={`<div className="space-y-6">
  <Input label="Name" placeholder="Enter your name" />
  <Input label="Email" placeholder="Enter your email" />
  <Input
    label="Password"
    type="password"
    placeholder="Enter your password"
  />
</div>`}
        >
          <div className="space-y-6">
            <LSDInput label="Name" placeholder="Enter your name" />
            <LSDInput label="Email" placeholder="Enter your email" />
            <LSDInput
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          With Supporting Text
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            supportingText
          </code>{' '}
          prop to add helper text below the input.
        </Typography>

        <ComponentPreview
          title="Input with supporting text"
          code={`<div className="space-y-6">
  <Input
    label="Email"
    placeholder="Enter your email"
    supportingText="We'll never share your email with anyone else."
  />
  <Input
    label="Password"
    type="password"
    placeholder="Enter your password"
    supportingText="Use at least 8 characters."
  />
</div>`}
        >
          <div className="space-y-6">
            <LSDInput
              label="Email"
              placeholder="Enter your email"
              supportingText="We'll never share your email with anyone else."
            />
            <LSDInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              supportingText="Use at least 8 characters."
            />
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          States
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Inputs can be disabled or show an error state.
        </Typography>

        <ComponentPreview
          title="Input states"
          code={`<div className="space-y-6">
  <div>
    <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">Normal</h3>
    <Input label="Normal state" placeholder="This is a normal input" />
  </div>
  <div>
    <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">Disabled</h3>
    <Input
      label="Disabled state"
      placeholder="This is disabled"
      disabled
      supportingText="This field is disabled"
    />
  </div>
  <div>
    <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">Error</h3>
    <Input
      label="Error state"
      placeholder="This has an error"
      error
      supportingText="This field has an error"
    />
  </div>
</div>`}
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">
                Normal
              </h3>
              <LSDInput
                label="Normal state"
                placeholder="This is a normal input"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">
                Disabled
              </h3>
              <LSDInput
                label="Disabled state"
                placeholder="This is disabled"
                disabled
                supportingText="This field is disabled"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-(--lsd-spacing-small)">
                Error
              </h3>
              <LSDInput
                label="Error state"
                placeholder="This has an error"
                error
                supportingText="This field has an error"
              />
            </div>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Input Types
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            type
          </code>{' '}
          prop to specify the input type.
        </Typography>

        <ComponentPreview
          title="Input types"
          code={`<div className="space-y-6">
  <Input label="Email" type="email" placeholder="Enter your email" />
  <Input
    label="Password"
    type="password"
    placeholder="Enter your password"
  />
  <Input label="Number" type="number" placeholder="Enter a number" />
  <Input label="Search" type="search" placeholder="Search..." />
</div>`}
        >
          <div className="space-y-6">
            <LSDInput
              label="Email"
              type="email"
              placeholder="Enter your email"
            />
            <LSDInput
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <LSDInput
              label="Number"
              type="number"
              placeholder="Enter a number"
            />
            <LSDInput label="Search" type="search" placeholder="Search..." />
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
              Input Props
            </Typography>
            <div className="space-y-4">
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  variant
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "underlined" | "outlined"
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "underlined"
                  </code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  size
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "sm" | "md" | "lg"
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "md"
                  </code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  label
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    string
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    undefined
                  </code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  supportingText
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    string
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    undefined
                  </code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  error
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    boolean
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    false
                  </code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  disabled
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    boolean
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    false
                  </code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  type
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "text" | "email" | "password" | "number" | "search" | "tel"
                    | "url"
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "text"
                  </code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  placeholder
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    string
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    undefined
                  </code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  value
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    string
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    undefined
                  </code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  onChange
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    (event: ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void
                  </code>
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    undefined
                  </code>
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
          Inputs follow WAI-ARIA guidelines and are fully accessible. When using
          labels, they are automatically associated with the input via the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            htmlFor
          </code>{' '}
          attribute. Supporting text is associated with the input using{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            aria-describedby
          </code>
          .
        </Typography>
      </div>
    </div>
  );
}
