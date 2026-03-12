'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Switch as LSDSwitch,
  Separator,
  Typography,
} from '@nipsys/shadcn-lsd';
import { CodeExample } from '../../components/docs/CodeExample';
import { ComponentPreview } from '../../components/docs/ComponentPreview';

export default function SwitchPage() {
  return (
    <div className="container mx-auto px-(--lsd-spacing-base) py-(--lsd-spacing-larger) max-w-5xl">
      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h1" className="mb-(--lsd-spacing-base)">
          Switch
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground text-lg mb-(--lsd-spacing-base)"
        >
          A switch component that allows users to toggle between two states.
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
          code={`import { Switch } from '@nipsys/shadcn-lsd';`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Usage
        </Typography>
        <CodeExample
          title="Basic switch"
          code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <label htmlFor="airplane-mode">Airplane Mode</label>
</div>`}
        />
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Default Switch
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          A basic switch with a label. Always provide an{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            id
          </code>{' '}
          and associate it with a label using{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            htmlFor
          </code>
          .
        </Typography>

        <ComponentPreview
          title="Default switch"
          code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <label htmlFor="airplane-mode">Airplane Mode</label>
</div>`}
        >
          <div className="flex items-center space-x-2">
            <LSDSwitch id="airplane-mode" />
            <label htmlFor="airplane-mode">Airplane Mode</label>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Controlled Switch
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            checked
          </code>{' '}
          and{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            onCheckedChange
          </code>{' '}
          props to control the switch state.
        </Typography>

        <ComponentPreview
          title="Controlled switch"
          code={`const [checked, setChecked] = useState(false);

<div className="flex items-center space-x-2">
  <Switch
    id="controlled-switch"
    checked={checked}
    onCheckedChange={setChecked}
  />
  <label htmlFor="controlled-switch">
    Switch is {checked ? 'on' : 'off'}
  </label>
</div>`}
        >
          <div className="flex items-center space-x-2">
            <LSDSwitch id="controlled-switch" />
            <label htmlFor="controlled-switch">Switch is off</label>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Checked by Default
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            defaultChecked
          </code>{' '}
          prop to set the initial checked state.
        </Typography>

        <ComponentPreview
          title="Checked by default"
          code={`<div className="flex items-center space-x-2">
  <Switch id="default-checked" defaultChecked />
  <label htmlFor="default-checked">Enabled by default</label>
</div>`}
        >
          <div className="flex items-center space-x-2">
            <LSDSwitch id="default-checked" defaultChecked />
            <label htmlFor="default-checked">Enabled by default</label>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Disabled State
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Use the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            disabled
          </code>{' '}
          prop to disable the switch.
        </Typography>

        <ComponentPreview
          title="Disabled state"
          code={`<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Switch id="disabled-unchecked" disabled />
    <label htmlFor="disabled-unchecked">Disabled unchecked</label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="disabled-checked" disabled checked />
    <label htmlFor="disabled-checked">Disabled checked</label>
  </div>
</div>`}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <LSDSwitch id="disabled-unchecked" disabled />
              <label htmlFor="disabled-unchecked">Disabled unchecked</label>
            </div>
            <div className="flex items-center space-x-2">
              <LSDSwitch id="disabled-checked" disabled checked />
              <label htmlFor="disabled-checked">Disabled checked</label>
            </div>
          </div>
        </ComponentPreview>
      </div>

      <Separator className="mb-(--lsd-spacing-larger)" />

      <div className="mb-(--lsd-spacing-larger)">
        <Typography variant="h2" className="mb-(--lsd-spacing-base)">
          Multiple Switches
        </Typography>
        <Typography
          variant="body1"
          className="text-muted-foreground mb-(--lsd-spacing-base)"
        >
          Group multiple switches together to control different settings.
        </Typography>

        <ComponentPreview
          title="Multiple switches"
          code={`const [checked2, setChecked2] = useState(true);

<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Switch
      id="wifi"
      checked={checked2}
      onCheckedChange={setChecked2}
    />
    <label htmlFor="wifi">Wi-Fi</label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="bluetooth" />
    <label htmlFor="bluetooth">Bluetooth</label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="location" />
    <label htmlFor="location">Location Services</label>
  </div>
</div>`}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <LSDSwitch id="wifi" />
              <label htmlFor="wifi">Wi-Fi</label>
            </div>
            <div className="flex items-center space-x-2">
              <LSDSwitch id="bluetooth" />
              <label htmlFor="bluetooth">Bluetooth</label>
            </div>
            <div className="flex items-center space-x-2">
              <LSDSwitch id="location" />
              <label htmlFor="location">Location Services</label>
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
          prop to change the switch size.
        </Typography>

        <ComponentPreview
          title="Switch sizes"
          code={`<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Switch id="small" size="sm" />
    <label htmlFor="small">Small (sm)</label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="medium" size="md" />
    <label htmlFor="medium">Medium (md)</label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="large" size="lg" />
    <label htmlFor="large">Large (lg)</label>
  </div>
</div>`}
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <LSDSwitch id="small" size="sm" />
              <label htmlFor="small">Small (sm)</label>
            </div>
            <div className="flex items-center space-x-2">
              <LSDSwitch id="medium" size="md" />
              <label htmlFor="medium">Medium (md)</label>
            </div>
            <div className="flex items-center space-x-2">
              <LSDSwitch id="large" size="lg" />
              <label htmlFor="large">Large (lg)</label>
            </div>
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
              Switch Props
            </Typography>
            <div className="space-y-4">
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  id
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    string
                  </code>
                  <br />
                  Required for accessibility. Associates the switch with its
                  label.
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  checked
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    boolean
                  </code>
                  <br />
                  Controlled checked state.
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    undefined
                  </code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  defaultChecked
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    boolean
                  </code>
                  <br />
                  Initial checked state (uncontrolled).
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    false
                  </code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  onCheckedChange
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    (checked: boolean) =&gt; void
                  </code>
                  <br />
                  Callback when the checked state changes.
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    undefined
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
                  Disables the switch.
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    false
                  </code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  required
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    boolean
                  </code>
                  <br />
                  Marks the switch as required.
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    false
                  </code>
                </Typography>
              </div>
              <div>
                <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
                  name
                </code>
                <Typography
                  variant="body1"
                  className="text-muted-foreground mt-(--lsd-spacing-smaller)"
                >
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    string
                  </code>
                  <br />
                  Name of the switch (for form submission).
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
                  Value of the switch (for form submission).
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "on"
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
                  Size of the switch.
                  <br />
                  Default:{' '}
                  <code className="px-(--lsd-spacing-smaller) bg-muted rounded">
                    "md"
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
          Switches follow WAI-ARIA guidelines and are fully accessible. Always
          provide an{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            id
          </code>{' '}
          and associate it with a label using the{' '}
          <code className="px-(--lsd-spacing-small) py-(--lsd-spacing-smaller) bg-muted rounded text-sm">
            htmlFor
          </code>{' '}
          attribute. This ensures screen readers can properly announce the
          switch and its purpose. Switches are implemented as checkboxes with
          appropriate ARIA roles for toggle functionality.
        </Typography>
      </div>
    </div>
  );
}
